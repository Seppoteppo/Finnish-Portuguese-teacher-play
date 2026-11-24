/* Tottakai: edistyminen tietokoneelta puhelimeen QR-koodilla (omistaja 17.10.2026, docs/PELILLISTAMINEN.md §8).
   - Vienti (#enviar): kaikki tottakai-*-avaimet localStoragesta JSONiksi, pakattuna (CompressionStream 'deflate-raw',
     jos selain osaa; muuten pakkaamaton) ja base64url-muodossa julkaistun sivun osoitteen fragmenttiin:
     JULKAISU#tuonti=NRO.KAIKKI.SID.DATA. Fragmentti ei lähde palvelimelle: tieto kulkee vain QR-koodissa.
     Jos tieto ei mahdu yhteen koodiin, se jaetaan enintään OSAT_MAX koodiin; jos ei mahdu niihinkään, tuloslokin
     vanhimmat rivit jätetään pois (loki on historiaa, edistyminen ja mandariinit säilyvät).
   - Vastaanotto (#tuonti=…): osat talteen (tottakai-tuonti-osat), kun kaikki on saatu, kysytään ennen korvaamista.
     Yksisuuntainen kopio: lähettävä laite voittaa (vastaanottavan laitteen tottakai-avaimet korvataan).
   - Varakeino: linkin voi kopioida tekstinä ja liittää toisella laitteella (”Colar o código”).
   - QR-koodin piirto: oma pieni toteutus (tavutila, virheenkorjaus L, versiot 1–40, Reed–Solomon, maskin valinta),
     Project Nayukin julkaiseman algoritmin (MIT) mukaan; ei CDN:ää, toimii file://-osoitteesta. */
(function () {
  'use strict';
  const JULKAISU = 'https://seppoteppo.github.io/Finnish-Portuguese-teacher-play/oppi-dea0e7/tottakai/index.html';   // Play-repo (T20, 19.10.2026)
  const ETULIITE = 'tottakai-';
  const OSAT_AVAIN = 'tottakai-tuonti-osat';
  const OSA_MERKIT = 1400;   // base64url-merkkiä koodia kohden (versio noin 28, L: luettava puhelimen kameralla)
  const OSAT_MAX = 3;

  /* ---------- QR-koodi (tavutila, ECC L) ---------- */
  const ECC_L = [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
  const LOHKOT_L = [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25];
  const bitti = (x, i) => ((x >>> i) & 1) !== 0;
  function raakaModuulit(v) {
    let r = (16 * v + 128) * v + 64;
    if (v >= 2) { const n = Math.floor(v / 7) + 2; r -= (25 * n - 10) * n - 55; if (v >= 7) r -= 36; }
    return r;
  }
  const dataSanat = v => Math.floor(raakaModuulit(v) / 8) - ECC_L[v] * LOHKOT_L[v];
  function kerro(x, y) {
    let z = 0;
    for (let i = 7; i >= 0; i--) { z = (z << 1) ^ ((z >>> 7) * 0x11D); z ^= ((y >>> i) & 1) * x; }
    return z;
  }
  function rsJakaja(aste) {
    const r = new Array(aste).fill(0); r[aste - 1] = 1;
    let juuri = 1;
    for (let i = 0; i < aste; i++) {
      for (let j = 0; j < r.length; j++) { r[j] = kerro(r[j], juuri); if (j + 1 < r.length) r[j] ^= r[j + 1]; }
      juuri = kerro(juuri, 0x02);
    }
    return r;
  }
  function rsJaannos(data, jakaja) {
    const r = jakaja.map(() => 0);
    for (const b of data) { const k = b ^ r.shift(); r.push(0); jakaja.forEach((c, i) => { r[i] ^= kerro(c, k); }); }
    return r;
  }
  function qr(tavut) {
    let v = 1;
    for (; v <= 40; v++) if (4 + (v < 10 ? 8 : 16) + tavut.length * 8 <= dataSanat(v) * 8) break;
    if (v > 40) throw new Error('liian pitkä QR-koodiin');
    // Bittivirta: tila 0100, pituus, tavut, loppumerkki, täyte.
    const bitit = [];
    const lisaa = (arvo, n) => { for (let i = n - 1; i >= 0; i--) bitit.push((arvo >>> i) & 1); };
    lisaa(4, 4); lisaa(tavut.length, v < 10 ? 8 : 16);
    for (const b of tavut) lisaa(b, 8);
    const kapasiteetti = dataSanat(v) * 8;
    lisaa(0, Math.min(4, kapasiteetti - bitit.length));
    lisaa(0, (8 - bitit.length % 8) % 8);
    for (let p = 0xEC; bitit.length < kapasiteetti; p ^= 0xEC ^ 0x11) lisaa(p, 8);
    const sanat = [];
    for (let i = 0; i < bitit.length; i += 8) sanat.push(bitit.slice(i, i + 8).reduce((a, b) => (a << 1) | b, 0));
    // Virheenkorjaus ja lomitus.
    const lohkoja = LOHKOT_L[v], eccPituus = ECC_L[v], raaka = Math.floor(raakaModuulit(v) / 8);
    const lyhyet = lohkoja - raaka % lohkoja, lyhytPituus = Math.floor(raaka / lohkoja);
    const jakaja = rsJakaja(eccPituus), lohkot = [];
    for (let i = 0, k = 0; i < lohkoja; i++) {
      const d = sanat.slice(k, k + lyhytPituus - eccPituus + (i < lyhyet ? 0 : 1));
      k += d.length;
      const ecc = rsJaannos(d, jakaja);
      if (i < lyhyet) d.push(0);
      lohkot.push(d.concat(ecc));
    }
    const kaikki = [];
    for (let i = 0; i < lohkot[0].length; i++) lohkot.forEach((l, j) => { if (i !== lyhytPituus - eccPituus || j >= lyhyet) kaikki.push(l[i]); });
    // Moduulit.
    const koko = v * 4 + 17;
    const m = Array.from({ length: koko }, () => new Array(koko).fill(false));
    const f = Array.from({ length: koko }, () => new Array(koko).fill(false));
    const aseta = (x, y, tumma) => { m[y][x] = tumma; f[y][x] = true; };
    for (let i = 0; i < koko; i++) { aseta(6, i, i % 2 === 0); aseta(i, 6, i % 2 === 0); }
    const etsin = (x, y) => {
      for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) {
        const d = Math.max(Math.abs(dx), Math.abs(dy)), xx = x + dx, yy = y + dy;
        if (xx >= 0 && xx < koko && yy >= 0 && yy < koko) aseta(xx, yy, d !== 2 && d !== 4);
      }
    };
    etsin(3, 3); etsin(koko - 4, 3); etsin(3, koko - 4);
    if (v > 1) {
      const n = Math.floor(v / 7) + 2, askel = Math.floor((v * 8 + n * 3 + 5) / (n * 4 - 4)) * 2;
      const paikat = [6];
      for (let p = koko - 7; paikat.length < n; p -= askel) paikat.splice(1, 0, p);
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        if ((i === 0 && j === 0) || (i === 0 && j === n - 1) || (i === n - 1 && j === 0)) continue;
        for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) aseta(paikat[i] + dx, paikat[j] + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
      }
    }
    const muoto = maski => {
      const d = (1 << 3) | maski;   // ECC L = 01
      let r = d;
      for (let i = 0; i < 10; i++) r = (r << 1) ^ ((r >>> 9) * 0x537);
      const b = ((d << 10) | r) ^ 0x5412;
      for (let i = 0; i <= 5; i++) aseta(8, i, bitti(b, i));
      aseta(8, 7, bitti(b, 6)); aseta(8, 8, bitti(b, 7)); aseta(7, 8, bitti(b, 8));
      for (let i = 9; i < 15; i++) aseta(14 - i, 8, bitti(b, i));
      for (let i = 0; i < 8; i++) aseta(koko - 1 - i, 8, bitti(b, i));
      for (let i = 8; i < 15; i++) aseta(8, koko - 15 + i, bitti(b, i));
      aseta(8, koko - 8, true);
    };
    muoto(0);
    if (v >= 7) {
      let r = v;
      for (let i = 0; i < 12; i++) r = (r << 1) ^ ((r >>> 11) * 0x1F25);
      const b = (v << 12) | r;
      for (let i = 0; i < 18; i++) { const a = koko - 11 + i % 3, c = Math.floor(i / 3); aseta(a, c, bitti(b, i)); aseta(c, a, bitti(b, i)); }
    }
    // Datamoduulit siksakissa.
    let i = 0;
    for (let oikea = koko - 1; oikea >= 1; oikea -= 2) {
      if (oikea === 6) oikea = 5;
      for (let pysty = 0; pysty < koko; pysty++) for (let j = 0; j < 2; j++) {
        const x = oikea - j, ylos = ((oikea + 1) & 2) === 0, y = ylos ? koko - 1 - pysty : pysty;
        if (!f[y][x] && i < kaikki.length * 8) { m[y][x] = bitti(kaikki[i >>> 3], 7 - (i & 7)); i++; }
      }
    }
    const MASKIT = [(x, y) => (x + y) % 2 === 0, (x, y) => y % 2 === 0, x => x % 3 === 0, (x, y) => (x + y) % 3 === 0,
      (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0, (x, y) => x * y % 2 + x * y % 3 === 0,
      (x, y) => (x * y % 2 + x * y % 3) % 2 === 0, (x, y) => ((x + y) % 2 + x * y % 3) % 2 === 0];
    const maskaa = k => { for (let y = 0; y < koko; y++) for (let x = 0; x < koko; x++) if (!f[y][x] && MASKIT[k](x, y)) m[y][x] = !m[y][x]; };
    // Yksinkertaistettu sakko (pitkät jonot, 2×2-ruudut, tasapaino); mikä tahansa maski on kelvollinen.
    const sakko = () => {
      let s = 0, tummat = 0;
      for (let a = 0; a < koko; a++) {
        let jx = 1, jy = 1;
        for (let b = 1; b < koko; b++) {
          if (m[a][b] === m[a][b - 1]) { jx++; if (jx === 5) s += 3; else if (jx > 5) s++; } else jx = 1;
          if (m[b][a] === m[b - 1][a]) { jy++; if (jy === 5) s += 3; else if (jy > 5) s++; } else jy = 1;
        }
      }
      for (let y = 0; y < koko; y++) for (let x = 0; x < koko; x++) {
        if (m[y][x]) tummat++;
        if (x && y && m[y][x] === m[y - 1][x] && m[y][x] === m[y][x - 1] && m[y][x] === m[y - 1][x - 1]) s += 3;
      }
      return s + Math.floor(Math.abs(tummat * 20 - koko * koko * 10) / (koko * koko)) * 10;
    };
    let paras = 0, parasSakko = Infinity;
    for (let k = 0; k < 8; k++) { maskaa(k); muoto(k); const p = sakko(); if (p < parasSakko) { paras = k; parasSakko = p; } maskaa(k); }
    maskaa(paras); muoto(paras);
    return { koko, m, versio: v };
  }
  function qrSvg(teksti) {
    const q = qr(new TextEncoder().encode(teksti));
    const r = 4, n = q.koko + r * 2;
    let polku = '';
    for (let y = 0; y < q.koko; y++) for (let x = 0; x < q.koko; x++) if (q.m[y][x]) polku += `M${x + r} ${y + r}h1v1h-1z`;
    return `<svg viewBox="0 0 ${n} ${n}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" role="img" aria-label="Código QR">` +
      `<rect width="${n}" height="${n}" fill="#fff"/><path d="${polku}" fill="#000"/></svg>`;
  }

  /* ---------- pakkaus ja base64url ---------- */
  const b64 = tavut => { let s = ''; for (let i = 0; i < tavut.length; i += 0x8000) s += String.fromCharCode.apply(null, tavut.subarray(i, i + 0x8000)); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
  const unb64 = s => { const t = atob(s.replace(/-/g, '+').replace(/_/g, '/')); const u = new Uint8Array(t.length); for (let i = 0; i < t.length; i++) u[i] = t.charCodeAt(i); return u; };
  async function virta(tavut, Luokka) {
    const v = new Blob([tavut]).stream().pipeThrough(new Luokka('deflate-raw'));
    return new Uint8Array(await new Response(v).arrayBuffer());
  }
  async function pakkaa(teksti) {
    const raaka = new TextEncoder().encode(teksti);
    if (typeof CompressionStream === 'function') { try { return 'd' + b64(await virta(raaka, CompressionStream)); } catch (e) { /* pakkaamaton */ } }
    return 'j' + b64(raaka);
  }
  async function pura(s) {
    const tavut = unb64(s.slice(1));
    if (s[0] === 'd') return new TextDecoder().decode(await virta(tavut, DecompressionStream));
    return new TextDecoder().decode(tavut);
  }

  /* ---------- tila ---------- */
  // Vain edistyminen siirtyy (A6-32): laiteasetukset (aanet, valikko-*, traducoes, kirjoitustila, pomo-aanet, pomo-kello,
  // liike-pois) jäävät laitteeseen, eikä tuonti kirjoita muita avaimia kuin nämä.
  const EDISTYS = /^(pisteet|visa|mitalit|saari|tulokset-(loki|paivat|laatikot|reitti|edistys)|tahdet|kuullut-osat|koti-.+|arvio-.+|pomo-k\d\d|pomo-havio-k\d\d|puhelu-.+|lomake-.+)$/;
  const kelpaaArvo = v => { if (typeof v !== 'string' || v.length > 2000000) return false; if (v === '1' || v === '0') return true; try { JSON.parse(v); return true; } catch (e) { return false; } };
  function keraa() {
    const d = {};
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(ETULIITE) && k !== OSAT_AVAIN && EDISTYS.test(k.slice(ETULIITE.length))) d[k.slice(ETULIITE.length)] = localStorage.getItem(k);
      }
    } catch (e) { /* ei muistia */ }
    return d;
  }
  /* Vienti: palauttaa { linkit, pois } (pois = tuloslokista pois jätetyt rivit, jos ei mahtunut). */
  async function vie() {
    const d = keraa();
    const sid = Math.random().toString(36).slice(2, 6);
    let loki = []; try { loki = JSON.parse(d['tulokset-loki'] || '[]'); } catch (e) { loki = []; }
    let pois = 0, data = '';
    for (;;) {
      if (loki.length) d['tulokset-loki'] = JSON.stringify(loki.slice(pois));
      data = await pakkaa(JSON.stringify({ v: 1, aika: Date.now(), d }));
      if (data.length <= OSA_MERKIT * OSAT_MAX || pois >= loki.length) break;
      pois = Math.min(loki.length, pois + Math.max(20, Math.ceil(loki.length / 10)));
    }
    const n = Math.max(1, Math.ceil(data.length / OSA_MERKIT));
    const koko = Math.ceil(data.length / n);
    const linkit = [];
    for (let i = 0; i < n; i++) linkit.push(`${JULKAISU}#tuonti=${i + 1}.${n}.${sid}.${data.slice(i * koko, (i + 1) * koko)}`);
    return { linkit, pois };
  }
  const lueOsat = () => { try { return JSON.parse(localStorage.getItem(OSAT_AVAIN) || 'null'); } catch (e) { return null; } };
  const kirjoitaOsat = o => { try { if (o) localStorage.setItem(OSAT_AVAIN, JSON.stringify(o)); else localStorage.removeItem(OSAT_AVAIN); } catch (e) { /* ohita */ } };
  /* Ottaa vastaan yhden osan (fragmentin tai liitetyn linkin tuonti=…-osan). Palauttaa { saatu, n, puuttuu } tai null. */
  function vastaanota(teksti) {
    const m = String(teksti || '').trim().match(/tuonti=(\d+)\.(\d+)\.([a-z0-9]+)\.([A-Za-z0-9_-]+)/);
    if (!m) return null;
    const [, i, n, sid, data] = m;
    let o = lueOsat();
    if (!o || o.sid !== sid) o = { sid, n: Number(n), osat: {} };
    o.osat[i] = data;
    kirjoitaOsat(o);
    const puuttuu = [];
    for (let k = 1; k <= o.n; k++) if (!o.osat[k]) puuttuu.push(k);
    return { saatu: Object.keys(o.osat).length, n: o.n, puuttuu };
  }
  async function valmisPaketti() {
    const o = lueOsat();
    if (!o) return null;
    for (let k = 1; k <= o.n; k++) if (!o.osat[k]) return null;
    let data = '';
    for (let k = 1; k <= o.n; k++) data += o.osat[k];
    return JSON.parse(await pura(data));
  }
  function korvaa(paketti) {
    try {
      const pois = [];
      for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith(ETULIITE) && EDISTYS.test(k.slice(ETULIITE.length))) pois.push(k); }
      pois.forEach(k => localStorage.removeItem(k));
      // Vain tunnetut edistymisavaimet ja JSON-kelpoiset arvot (tuonti ei saa kirjoittaa mitä tahansa, A6-32).
      for (const [k, v] of Object.entries(paketti.d || {})) if (EDISTYS.test(k) && kelpaaArvo(v)) localStorage.setItem(ETULIITE + k, v);
      return true;
    } catch (e) { return false; }
  }
  const yhteenveto = p => {
    const d = p.d || {};
    const lue = k => { try { return JSON.parse(d[k] || 'null'); } catch (e) { return null; } };
    const pisteet = lue('pisteet') || {};
    const mitalit = lue('mitalit') || {};
    return { mandariinit: pisteet.mandariinit || 0, mitalit: Object.values(mitalit).filter(x => x && x.mitali).length, aika: p.aika ? new Date(p.aika) : null };
  };

  /* ---------- näkymät (app.js reitittää #enviar ja #tuonti=…) ---------- */
  function naytaVienti(m, el) {
    m.append(el('header', { class: 'op-otsake' }, el('p', { class: 'yla' }, 'Progresso'), el('h1', {}, 'Levar o progresso para o celular'),
      el('p', { class: 'lahde-rivi' }, 'Uma cópia do computador para o celular: mandarinas, ilha, medalhas, revisões. Nada passa por servidor: tudo vai dentro do código QR.')));
    const runko = el('div', { class: 'op-runko' });
    const alue = el('div', { class: 'siirto-qr' });
    const tila = el('p', { class: 'ohje' }, 'No celular: abra a câmera e aponte para o código. O progresso do celular será substituído pelo deste aparelho (ele pergunta antes).');
    const nappi = el('button', { type: 'button', class: 'visa-aloita' }, 'Enviar para o celular');
    const linkit = el('textarea', { class: 'siirto-linkit', rows: '3', readonly: true, 'aria-label': 'Links do código' });
    const kopioi = el('button', { type: 'button', class: 'kauppa-pieni' }, 'Copiar o código');
    const vara = el('details', { class: 'saari-saannot' }, el('summary', {}, 'Sem câmera? Copie o código'), el('p', { class: 'ohje' }, 'Mande este texto para o celular (e-mail, mensagem) e cole lá em “Receber de outro aparelho”.'), linkit, kopioi);
    vara.hidden = true;
    kopioi.addEventListener('click', () => { linkit.select(); try { navigator.clipboard.writeText(linkit.value); } catch (e) { try { document.execCommand('copy'); } catch (x) { /* ohita */ } } kopioi.textContent = 'Copiado!'; });
    let lista = [], nyt = 0;
    const nayta = () => {
      alue.innerHTML = '';
      const kuva = el('div', { class: 'siirto-kuva' });
      kuva.innerHTML = qrSvg(lista[nyt]);
      // Usea koodi: laskuri ja seuraava-nappi koodin yläpuolella, ettei koodi jää yläpalkin alle.
      if (lista.length > 1) {
        const seur = el('button', { type: 'button', class: 'visa-seuraava' }, nyt < lista.length - 1 ? 'Próximo código →' : 'Voltar ao primeiro');
        seur.addEventListener('click', () => { nyt = (nyt + 1) % lista.length; nayta(); });
        alue.append(el('p', { class: 'siirto-osa' }, `Código ${nyt + 1} de ${lista.length}. Escaneie um de cada vez, na ordem que quiser.`), seur);
      }
      alue.append(kuva);
      try { kuva.scrollIntoView({ block: 'nearest' }); } catch (e) { /* ohita */ }
    };
    nappi.addEventListener('click', async () => {
      nappi.disabled = true;
      try {
        const v = await vie();
        lista = v.linkit; nyt = 0;
        linkit.value = lista.join('\n');
        vara.hidden = false;
        nayta();
        if (v.pois) tila.textContent = `Para caber, as ${v.pois} respostas mais antigas do histórico ficaram de fora. Mandarinas, ilha, medalhas e revisões vão inteiras.`;
      } catch (e) { tila.textContent = 'Não deu para gerar o código neste navegador. Use “Copiar o código”.'; }
      nappi.disabled = false;
    });
    runko.append(el('section', { class: 'osio' }, el('h2', {}, 'Enviar'), tila, nappi, alue, vara));
    const liita = el('textarea', { class: 'siirto-linkit', rows: '3', 'aria-label': 'Cole aqui o código' });
    const tuo = el('button', { type: 'button', class: 'visa-aloita' }, 'Receber');
    const tulos = el('p', { class: 'ohje', 'aria-live': 'polite' });
    tuo.addEventListener('click', () => {
      const rivit = liita.value.split(/\s+/).filter(Boolean);
      let r = null;
      for (const x of rivit) r = vastaanota(x) || r;
      if (!r) { tulos.textContent = 'Não reconheci o código. Ele começa com https://… e tem “#tuonti=”.'; return; }
      location.hash = '#receber';
    });
    runko.append(el('section', { class: 'osio' }, el('h2', {}, 'Receber de outro aparelho'), el('p', { class: 'ohje' }, 'Cole aqui o código copiado no outro aparelho (todas as partes).'), liita, tuo, tulos));
    m.append(runko);
  }
  async function naytaVastaanotto(m, el, osa) {
    if (osa) vastaanota(osa);
    m.append(el('header', { class: 'op-otsake' }, el('p', { class: 'yla' }, 'Progresso'), el('h1', {}, 'Receber o progresso')));
    const runko = el('div', { class: 'op-runko' });
    m.append(runko);
    const o = lueOsat();
    if (!o) { runko.append(el('p', {}, 'Nenhum código recebido. '), el('a', { href: '#enviar' }, 'Enviar ou receber →')); return; }
    const puuttuu = [];
    for (let k = 1; k <= o.n; k++) if (!o.osat[k]) puuttuu.push(k);
    if (puuttuu.length) {
      runko.append(el('p', { class: 'siirto-osa' }, `Recebido: ${o.n - puuttuu.length} de ${o.n} códigos. Agora escaneie o código ${puuttuu.join(' e ')}.`));
      return;
    }
    let p = null;
    try { p = await valmisPaketti(); } catch (e) { p = null; }
    if (!p) { runko.append(el('p', {}, 'O código veio incompleto ou estragado. Gere de novo no outro aparelho.')); kirjoitaOsat(null); return; }
    const y = yhteenveto(p);
    const korvaaNappi = el('button', { type: 'button', class: 'visa-aloita' }, 'Substituir o progresso deste aparelho');
    const peru = el('button', { type: 'button', class: 'kauppa-pieni' }, 'Cancelar');
    korvaaNappi.addEventListener('click', () => {
      if (!korvaa(p)) { runko.append(el('p', {}, 'Este navegador não deixa salvar (janela privada?).')); return; }
      location.hash = '#inicio';
      location.reload();
    });
    peru.addEventListener('click', () => { kirjoitaOsat(null); location.hash = '#inicio'; });
    runko.append(el('section', { class: 'osio' }, el('h2', {}, 'Tudo recebido'),
      el('p', {}, `No outro aparelho: ${y.mandariinit} 🍊, ${y.mitalit} ${y.mitalit === 1 ? 'medalha' : 'medalhas'}` + (y.aika ? `, salvo em ${y.aika.toLocaleString('pt-BR')}` : '') + '.'),
      el('p', { class: 'ohje' }, 'Atenção: o progresso deste aparelho será apagado e substituído por esta cópia. Não dá para juntar os dois.'),
      el('div', { class: 'kauppa-rivi' }, korvaaNappi, peru)));
  }

  window.Siirto = { qr, qrSvg, vie, vastaanota, valmisPaketti, korvaa, naytaVienti, naytaVastaanotto, JULKAISU };
})();
