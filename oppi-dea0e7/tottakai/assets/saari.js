/* Tottakai: mandariinitalous ja saaren kauppa (docs/PELILLISTAMINEN.md, ”Mandariinitalous ja kauppa”).
   Kapybaran ja Manaatin hiekkasärkkä (#ilha): ostetut tavarat näkyvät saarella, asut kaksikon päällä, ja kaksikko
   kommentoi ostoksia portugaliksi; jokaisella tavaralla on yksi suomen sana (leksikon sana, kupla ja ▶).
   - Ansaitseminen (Saari.ansio, app.js lisaaMandariineja kutsuu): tekeminen ja palaaminen palkitaan, ei täydellisyyttä.
     Ensimmäisellä yrityksellä oikein = 1 🍊 ”päivän koriin” asti (KORI acertoa päivässä, samalta sivulta enintään
     REITTI); sen jälkeen mandariineja tulee yhä, mutta hitaammin (1 per HIDAS acertoa). Kierroksen bonukset (quiz +2,
     Treino +3, peli +3), kertakaikkiset virstanpylväät (Saari.marco), päivän ensimmäinen vastaus, kertaus (Hoje),
     putki ja pomovoitot eivät ole korin alla. Virhe ei vie koskaan mitään.
   - Kertakaikkiset (Saari.marco, tallennus marcos): oppitunnin osa luettu loppuun (Saari.seuraaOsa: loppumerkki näkyvissä
     ja sivulla vähintään OSA_AIKA), ensimmäinen quiz, uusi Treino-paketti, uusi peli, putken rajat (PUTKI).
   - Kauppa: TAVARAT (hinta, kategoria, avautuminen oppitunnin tai pomovoiton mukaan, suomen sana, repliikit, kuva).
     Ostaminen vähentää mandariinit (apu.kayta), palautus antaa koko hinnan takaisin (ei rangaistusta kokeilusta).
   - Saari: tavarat omalla kerroksellaan (.saari-kerros) hahmorivin takana; ”Mudar de lugar” -tilassa tavaran voi
     siirtää (napauta tavara, sitten paikka; näppäimistöllä nuolet). Päivän yllätys rannalla (+LAHJA, mandariinipuu +2),
     flamingon asento vaihtuu päivittäin, Peixe-boi nukkuu omassa riippumatossaan.
   - Tila localStorageen avaimella tottakai-saari (try/catch; yksityisessä ikkunassa vain tämän sivun ajan).
   - Pomon palkinnot (poreallas, juhlat: assets/pomo.js) pysyvät ennallaan: tämä moduuli lisää kerroksen niiden taakse.
   - Luonnos 3 (omistaja 17.10.2026): oppitunnin mitalit (pronssi 50, hopea 75, kulta 100 🍊; seuraaTehtavia), avautuminen
     mitalien ja pomovoittojen mukaan, pomopalkinnot K1–K4 tavaroineen (K2–K4 testattavissa ?testipomo=k02,k03,k04),
     Capivaran ja Peixe-boin paikat tavaroissa (lugares, satunnaisesti joka käynnillä), kaverit tavaroiden mukana
     (KAVERIT; Maíran napautus = Cruzeiron lippis) ja tarinan erikoispalkinnot (TARINAT, Saari.tarina).
   Käyttö: app.js naytaIlha → Saari.nayta(runko, kuva, apu); apu = { el, glossaa, kayta, saldo, uudelleen, KIELI }. */
(function () {
  'use strict';
  const K = window.Kurssi;
  const ETULIITE = 'tottakai-';
  const AVAIN = 'saari';
  const varalla = {};
  function lue(k, oletus) {
    try { const v = localStorage.getItem(ETULIITE + k); if (v !== null) return JSON.parse(v); } catch (e) { /* varalla */ }
    return Object.prototype.hasOwnProperty.call(varalla, k) ? JSON.parse(varalla[k]) : oletus;
  }
  function kirjoita(k, v) {
    const s = JSON.stringify(v);
    varalla[k] = s;
    try { localStorage.setItem(ETULIITE + k, s); } catch (e) { /* vain muistissa */ }
  }

  /* ---------- talouden luvut (tasapaino: docs/PELILLISTAMINEN.md, luonnos 2) ---------- */
  const KORI = 100;         // acertoja päivässä täydellä arvolla (1 🍊); kaksi uutta oppituntia päivässä mahtuu
  const REITTI = 25;        // samalta sivulta päivässä täydellä arvolla (yhden visan jauhaminen ei kannata)
  const HIDAS = 3;          // korin täytyttyä 1 🍊 joka HIDAS. acertosta
  const PAIVA_BONUS = 5;    // päivän ensimmäinen vastaus (oikein tai väärin: tekeminen palkitaan)
  const KERTAUS = 2;        // Hoje-jonon erääntynyt kohta oikein (kerran päivässä kohdetta kohden)
  const LAHJA = 3;          // päivän yllätys saarella
  const PUU_LAHJA = 2;      // mandariinipuu antaa lisää
  const OSA = 2;            // oppitunnin osa luettu loppuun (kerran; pieni tönäisy, mitali on iso palkinto)
  const OSA_AIKA = 40000;   // ms sivulla ennen kuin loppumerkki lasketaan (ei pelkkää vieritystä)
  const PUTKI = [[3, 10], [7, 20], [14, 30], [30, 50], [60, 80], [100, 100]];

  /* Saaren mittakaava (omistaja 20.10.2026: ”Make it work and be uniform and systematic”): yksi koordinaatisto. Kohtaus on
     5 : 4 (leveys : korkeus), tavarakerros sen ylin 75 % (alemmas ei sijoiteta: hahmot ja rantavesi). Sijainti [x %, y %]
     kerroksesta, ankkuri tavaran alareunan keskellä. Leveys = leveys × MITTAKAAVA × syvyys(y): kauempana (ylempänä) pienempi.
     uusiY: ennen 20.10.2026 kerros oli 262 px (kuvasta noin 50 %); vesirajan (32 % kuvasta) yläpuolella paikka pysyy, hiekalla
     levitetään uuteen syvyyteen. */
  const MITTAKAAVA = 0.75;
  const syvyys = y => 0.75 + 0.25 * Math.max(0, Math.min(100, y)) / 100;
  function uusiY(y) {
    let f = y / 100 * 262 / 519;
    if (f > 0.32) f = 0.32 + (f - 0.32) * (0.75 - 0.32) / (262 / 519 - 0.32);
    return Math.round(f / 0.75 * 100);
  }
  const paivays = t => { const d = new Date(t || Date.now()); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  const paivaNro = () => { const d = new Date(); return Math.floor(new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() / 86400000); };
  const uusiPaiva = () => ({ pvm: paivays(), acertos: 0, lento: 0, reitit: {}, bomdia: false, kertaus: {}, lahja: false });
  function tila() {
    const t = lue(AVAIN, null) || {};
    t.omat = t.omat || {};
    t.paikat = t.paikat || {};
    if (!t.paikatV) {   // 20.10.2026: kerros 262 px → kuvan ylin 75 %; omistajan siirtämät tavarat samaan kohtaan rannalla (uusiY)
      for (const k of Object.keys(t.paikat)) t.paikat[k] = [t.paikat[k][0], uusiY(t.paikat[k][1])];
      t.paikatV = 2;
    }
    t.asu = t.asu || { kertoja: {}, manaatti: {} };
    t.asu.kertoja = t.asu.kertoja || {};
    t.asu.manaatti = t.asu.manaatti || {};
    t.asu.maia = t.asu.maia || {};   // AV-029: pomotaistelun lasit (Maia näkyy saarella juhlissa, pomo.js juhla)
    t.marcos = t.marcos || {};
    if (!t.paiva || t.paiva.pvm !== paivays()) t.paiva = uusiPaiva();
    return t;
  }
  const tallenna = t => kirjoita(AVAIN, t);
  const lisaa = (n, syy, selitys) => {
    try { return K.mandariinit && K.mandariinit.lisaa ? K.mandariinit.lisaa(n, syy, selitys) || 0 : 0; } catch (e) { return 0; }
  };

  /* Saari.ansio(n, syy, reitti): montako mandariinia oikeasti annetaan. Vain 'acerto' on korin alla. */
  function ansio(n, syy, reitti) {
    if (syy && syy !== 'acerto') return n;
    const t = tila(), d = t.paiva;
    const r = String(reitti || '').replace(/^#/, '') || 'inicio';
    let anto = 0;
    for (let i = 0; i < n; i++) {
      const omat = d.reitit[r] || 0;
      if (d.acertos < KORI && omat < REITTI) anto++;
      else { d.lento = (d.lento || 0) + 1; if (d.lento % HIDAS === 0) anto++; }
      d.acertos++;
      d.reitit[r] = omat + 1;
    }
    tallenna(t);
    return anto;
  }
  /* Kertakaikkinen palkinto: palauttaa annetun määrän (0, jos jo saatu). */
  function marco(avain, n, selitys) {
    const t = tila();
    if (t.marcos[avain]) return 0;
    t.marcos[avain] = Date.now();
    tallenna(t);
    return lisaa(n, 'marco', selitys);
  }
  const onMarco = avain => !!tila().marcos[avain];

  /* ---------- ilmoitus ”+N 🍊 …” (sama ulkoasu kuin .aani-toast, kiinteä ruudun alareunaan) ---------- */
  let toastEl = null, toastAjastin = 0, rivit = [];
  function ilmoita(teksti) {
    if (!document.body) return;
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'aani-toast mandariini-toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      toastEl.hidden = true;
    }
    if (!toastEl.isConnected) document.body.append(toastEl);
    rivit.push(teksti);
    if (rivit.length > 3) rivit = rivit.slice(-3);
    toastEl.innerHTML = '';
    for (const r of rivit) { const s = document.createElement('span'); s.className = 'mandariini-toast-rivi'; s.textContent = r; toastEl.append(s); }
    toastEl.hidden = false;
    clearTimeout(toastAjastin);
    toastAjastin = setTimeout(() => { toastEl.hidden = true; rivit = []; }, 3800);
  }

  /* ---------- päivän ensimmäinen vastaus, putki ja Hoje-kertaus (tottakai:tulos, assets/tulokset.js) ---------- */
  /* Hoje-jonon kertauskohteet: erääntyneet laatikot (assets/tulokset.js), joihin on vastattu viimeksi ennen tätä päivää.
     Saman päivän virhe, joka palaa visan loppuun, ei ole kertaus (muuten tahallinen virhe kannattaisi). */
  let erapaivat = null;
  function paivitaErat() {
    try {
      const laatikot = lue('tulokset-laatikot', {}) || {};
      const nyt = Date.now(), alku = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
      erapaivat = new Set(Object.values(laatikot).filter(x => x && x.seuraava <= nyt && (x.viimeksi || 0) < alku).map(x => x.avain));
    } catch (e) { erapaivat = new Set(); }
  }
  // Erääntyneet lasketaan heti sivun latautuessa: muuten päivän ensimmäinen kertausvastaus ei koskaan maksa, koska
  // Tulokset.kirjaa on jo päivittänyt kohteen viimeksi-ajan ennen tapahtumaa (A6-16).
  paivitaErat();
  document.addEventListener('tottakai:tulos', e => {
    const rivi = e.detail || {};
    if (!erapaivat) paivitaErat();
    const avain = `${rivi.lahde}:${rivi.avain}`;
    const t = tila();
    let muuttui = false;
    if (!t.paiva.bomdia) { t.paiva.bomdia = true; muuttui = true; tallenna(t); lisaa(PAIVA_BONUS, 'dia', 'Bom dia! Primeira resposta de hoje'); }
    if (rivi.oikein && erapaivat.has(avain)) {
      const t2 = tila();
      if (!t2.paiva.kertaus[avain]) { t2.paiva.kertaus[avain] = true; tallenna(t2); lisaa(KERTAUS, 'revisao', 'Revisão em dia'); }
    }
    if (muuttui) {
      let putki = 0;
      try { putki = window.Tulokset && typeof window.Tulokset.putki === 'function' ? Number(window.Tulokset.putki()) || 0 : 0; } catch (x) { putki = 0; }
      for (const [paivia, n] of PUTKI) if (putki >= paivia) marco('putki-' + paivia, n, `${paivia} dias seguidos de estudo!`);
    }
    paivitaErat();
  });

  /* Oppitunnin osa luettu loppuun: loppumerkki näkyvissä ja sivulla vähintään OSA_AIKA. Kerran osaa kohden. */
  function seuraaOsa(juuri, avain, nimi) {
    if (!juuri || onMarco('osa:' + avain) || typeof IntersectionObserver !== 'function') return;
    const merkki = document.createElement('span');
    merkki.className = 'saari-fim';
    merkki.setAttribute('aria-hidden', 'true');
    juuri.append(merkki);
    const alku = Date.now();
    let nakyy = false, ajastin = 0;
    const anna = () => {
      if (!merkki.isConnected) { havainto.disconnect(); return; }
      if (!nakyy) return;
      const jaljella = OSA_AIKA - (Date.now() - alku);
      if (jaljella > 0) { clearTimeout(ajastin); ajastin = setTimeout(anna, jaljella + 50); return; }
      havainto.disconnect();
      marco('osa:' + avain, OSA, `Parte concluída: ${nimi}`);
    };
    const havainto = new IntersectionObserver(merkinnat => { nakyy = merkinnat.some(x => x.isIntersecting); anna(); });
    havainto.observe(merkki);
  }

  /* ---------- piirrokset (kuvitus.js:n tyyliin: tasaiset täytöt, samat värit) ---------- */
  const svg = (vb, sisus) => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${sisus}</svg>`;
  const palmunLehdet = (x, y) => [[-40, 4], [-22, -16], [4, -20], [26, -10], [40, 8], [-8, 18]].map(([dx, dy]) =>
    `<path d="M${x} ${y}Q${x + dx * 0.5} ${y + dy - 10} ${x + dx} ${y + dy + 12}" fill="none" stroke="${dy > 10 ? '#2d6a4f' : '#3f8f3a'}" stroke-width="7" stroke-linecap="round"/>`).join('');
  function flamingo(asento) {
    const runko = '<ellipse cx="28" cy="52" rx="16" ry="10.5" fill="#ff8fab"/><path d="M14 50Q22 42 34 47Q28 56 14 50Z" fill="#f06292"/><path d="M12 50L4 46L8 54Z" fill="#f06292"/>';
    const jalat = asento === 1 ? '<path d="M27 61L27 97M24 97H31" stroke="#e2577a" stroke-width="2.2" stroke-linecap="round" fill="none"/><path d="M31 61L39 72L30 75" stroke="#e2577a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'
      : '<path d="M25 61L24 97M32 61L33 97M21 97H27M30 97H36" stroke="#e2577a" stroke-width="2.2" stroke-linecap="round" fill="none"/>';
    const kaula = asento === 2
      ? '<path d="M40 50Q47 44 41 40" fill="none" stroke="#ff8fab" stroke-width="5" stroke-linecap="round"/><circle cx="37" cy="41" r="5" fill="#ff8fab"/><path d="M33 39Q36 37 39 39" fill="none" stroke="#3d464b" stroke-width="1.2" stroke-linecap="round"/><path d="M33 43L27 46L33 46Z" fill="#2b2b2b"/>' +
        '<text x="42" y="30" font-family="Georgia,serif" font-size="9" font-weight="700" fill="#2b5c6b">z</text>'
      : '<path d="M40 49Q50 38 44 27Q38 16 45 9" fill="none" stroke="#ff8fab" stroke-width="5" stroke-linecap="round"/><circle cx="47" cy="9" r="5" fill="#ff8fab"/><circle cx="48.5" cy="8" r="1.1" fill="#2b2b2b"/>' +
        '<path d="M51 8L58 13L52 14Z" fill="#2b2b2b"/><path d="M51 8L55 10.5L51.5 11.5Z" fill="#fbfaf6"/>';
    return svg('0 0 64 100', jalat + runko + kaula);
  }
  const tiki = x => `<path d="M${x - 3} 40H${x + 3}V98H${x - 3}Z" fill="#b57d3a"/><path d="M${x - 3} 54H${x + 3}M${x - 3} 72H${x + 3}M${x - 3} 88H${x + 3}" stroke="#7b5129" stroke-width="2"/>` +
    `<path d="M${x - 9} 30H${x + 9}L${x + 6} 41H${x - 6}Z" fill="#8d6133"/><path d="M${x - 8} 34H${x + 8}M${x - 7} 38H${x + 7}" stroke="#c9a46b" stroke-width="1"/>` +
    `<g class="saari-liekki"><path d="M${x} 31C${x - 9} 23 ${x - 3} 14 ${x} 3C${x + 4} 12 ${x + 11} 21 ${x} 31Z" fill="#f39a1e"/><path d="M${x} 30C${x - 4} 25 ${x - 1} 19 ${x} 13C${x + 2} 19 ${x + 5} 24 ${x} 30Z" fill="#ffd166"/></g>`;
  const tahtiSvg = (x, y, r) => {
    const p = [];
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, s = i % 2 ? r * 0.45 : r; p.push(`${(x + s * Math.cos(a)).toFixed(1)} ${(y + s * Math.sin(a)).toFixed(1)}`); }
    return `<path d="M${p.join('L')}Z" fill="#fff"/>`;
  };
  // Maian sarjan ”Onnellinen kuin possu” sian pää (taulut: trofeu-t09 ja cavalete); x, y keskipiste, k mittakaava.
  const possuPaa = (x, y, k) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-9 -9L-12 -17L-4 -12Z" fill="#f06292"/><path d="M9 -9L12 -17L4 -12Z" fill="#f06292"/><circle r="11" fill="#ff8fab"/><ellipse cx="0" cy="3.5" rx="5.5" ry="4" fill="#f06292"/><circle cx="-2" cy="3.5" r="1" fill="#8e2a50"/><circle cx="2" cy="3.5" r="1" fill="#8e2a50"/><circle cx="-5" cy="-3" r="1.5" fill="#2b2b2b"/><circle cx="5" cy="-3" r="1.5" fill="#2b2b2b"/><path d="M-4 8Q0 11 4 8" fill="none" stroke="#8e2a50" stroke-width="1" stroke-linecap="round"/></g>`;
  const KUVAT = {
    // Kultapalkinnot (omistaja 18.10.2026): yksinkertaiset kultaiset esineet.
    'trofeu-t00': () => svg('0 0 60 52', '<rect x="12" y="16" width="36" height="28" rx="5" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><path d="M23 16V11Q23 8 26 8H34Q37 8 37 11V16" fill="none" stroke="#9a6b12" stroke-width="3"/><path d="M12 28H48" stroke="#9a6b12" stroke-width="2"/><circle cx="18" cy="46" r="3" fill="#5a3f0e"/><circle cx="42" cy="46" r="3" fill="#5a3f0e"/><path d="M16 20L22 20" stroke="#fff3b8" stroke-width="2" stroke-linecap="round"/>'),
    'trofeu-t01': () => svg('0 0 60 52', '<rect x="6" y="6" width="48" height="40" rx="3" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><rect x="12" y="12" width="36" height="28" rx="2" fill="#fbfaf6"/><circle cx="21" cy="24" r="5" fill="#c99a5b"/><path d="M15 36Q21 29 27 36" fill="#4f74a8"/><path d="M31 20H44M31 26H42M31 32H40" stroke="#6b7c86" stroke-width="2" stroke-linecap="round"/>'),
    'trofeu-t02': () => svg('0 0 60 52', '<path d="M30 46V30" stroke="#9a6b12" stroke-width="4"/><rect x="8" y="6" width="44" height="26" rx="4" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><path d="M18 26V12L24 20L30 12V26" fill="none" stroke="#fbfaf6" stroke-width="3" stroke-linejoin="round"/><circle cx="41" cy="19" r="6" fill="#ff6319"/>'),
    'trofeu-t03': () => svg('0 0 60 52', '<path d="M4 10H12L18 34H48L54 16H15" fill="none" stroke="#9a6b12" stroke-width="3" stroke-linejoin="round"/><path d="M15 16H54L48 34H18Z" fill="#e2b53a"/><path d="M24 18V32M32 18V32M40 18V32" stroke="#9a6b12" stroke-width="1.6"/><circle cx="22" cy="43" r="4" fill="#5a3f0e"/><circle cx="44" cy="43" r="4" fill="#5a3f0e"/>'),
    'trofeu-t04': () => svg('0 0 60 52', '<path d="M8 40L12 14L22 28L30 8L38 28L48 14L52 40Z" fill="#e2b53a" stroke="#9a6b12" stroke-width="2" stroke-linejoin="round"/><rect x="8" y="38" width="44" height="8" rx="2" fill="#d9a521" stroke="#9a6b12" stroke-width="2"/><circle cx="30" cy="30" r="3.5" fill="#d62828"/><circle cx="18" cy="34" r="2.5" fill="#1d4ed8"/><circle cx="42" cy="34" r="2.5" fill="#2e9d4a"/>'),
    'trofeu-t05': () => svg('0 0 60 52', '<rect x="4" y="4" width="52" height="44" rx="3" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><rect x="10" y="10" width="40" height="32" fill="#dff1d6"/><circle cx="20" cy="24" r="4.5" fill="#f1cfb4"/><circle cx="30" cy="21" r="4.5" fill="#e8b996"/><circle cx="40" cy="24" r="4.5" fill="#c68b5e"/><path d="M13 42Q20 30 27 42M23 42Q30 28 37 42M33 42Q40 30 47 42" fill="#4f74a8"/>'),
    // Erä 1 (oppitunnit 6–10, 20.10.2026): kultapalkinnot samaan tyyliin kuin t00–t05.
    'trofeu-t06': () => svg('0 0 60 52', '<rect x="5" y="8" width="50" height="36" rx="4" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><rect x="5" y="14" width="50" height="6" fill="#9a6b12"/><path d="M12 27Q18 24 23 27V40Q18 37 12 40Z" fill="#fbfaf6" stroke="#9a6b12" stroke-width="1.2" stroke-linejoin="round"/><path d="M23 27Q28 24 34 27V40Q28 37 23 40Z" fill="#fff3b8" stroke="#9a6b12" stroke-width="1.2" stroke-linejoin="round"/><path d="M39 28H49M39 33H47M39 38H44" stroke="#9a6b12" stroke-width="2" stroke-linecap="round"/><path d="M9 11H20" stroke="#fff3b8" stroke-width="2" stroke-linecap="round"/>'),
    'trofeu-t07': () => svg('0 0 60 52', '<rect x="1.5" y="23" width="6" height="9" rx="3" fill="#e2b53a" stroke="#9a6b12" stroke-width="1.6"/><rect x="52.5" y="23" width="6" height="9" rx="3" fill="#e2b53a" stroke="#9a6b12" stroke-width="1.6"/><rect x="6" y="12" width="48" height="32" rx="7" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><rect x="11" y="17" width="38" height="22" rx="4" fill="#f3d36b"/><circle cx="30" cy="28" r="9" fill="#fbfaf6" stroke="#9a6b12" stroke-width="1.6"/><circle cx="30" cy="28" r="4" fill="#f39a1e"/><path d="M30 24Q32 21.5 34 22.5" fill="none" stroke="#3f8f3a" stroke-width="1.4" stroke-linecap="round"/><path d="M16 21V35M14 21V26M18 21V26" stroke="#9a6b12" stroke-width="1.4" stroke-linecap="round"/><path d="M44 21V35" stroke="#9a6b12" stroke-width="2.4" stroke-linecap="round"/>'),
    'trofeu-t08': () => svg('0 0 60 52', '<rect x="6" y="6" width="38" height="16" rx="6" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><path d="M12 11H38" stroke="#fff3b8" stroke-width="2" stroke-linecap="round"/><path d="M44 14H52V29H31V35" fill="none" stroke="#9a6b12" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><rect x="26" y="35" width="10" height="15" rx="3" fill="#d9a521" stroke="#9a6b12" stroke-width="2"/>'),
    'trofeu-t09': () => svg('0 0 60 52', '<rect x="4" y="4" width="52" height="44" rx="3" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><rect x="10" y="10" width="40" height="32" fill="#dff1d6"/>' + possuPaa(30, 28, 1) + '<circle cx="49" cy="9" r="4.5" fill="#d62828" stroke="#fbfaf6" stroke-width="1.4"/>'),
    'trofeu-t10': () => svg('0 0 60 52', '<rect x="3" y="11" width="54" height="30" rx="4" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><path d="M40 11V41" stroke="#9a6b12" stroke-width="1.6" stroke-dasharray="3 2.5"/><path d="M9 29L31 18L25 35L20 29Z" fill="#fff3b8" stroke="#9a6b12" stroke-width="1.3" stroke-linejoin="round"/><path d="M20 29L31 18" stroke="#9a6b12" stroke-width="1.2"/><path d="M9 37H27" stroke="#9a6b12" stroke-width="2" stroke-linecap="round"/><path d="M44 17V35M47 17V35M50 17V35M53 17V35" stroke="#5a3f0e" stroke-width="1.4"/><path d="M9 16H20" stroke="#fff3b8" stroke-width="2" stroke-linecap="round"/>'),
    // Erä 2 (oppitunnit 11–15, 20.10.2026): kultapalkinnot samaan tyyliin kuin t00–t10.
    'trofeu-t11': () => svg('0 0 60 52', '<rect x="16" y="45" width="28" height="5" rx="2" fill="#d9a521" stroke="#9a6b12" stroke-width="2"/><path d="M30 45V12" stroke="#9a6b12" stroke-width="4" stroke-linecap="round"/><path d="M8 20L52 10" stroke="#9a6b12" stroke-width="3.5" stroke-linecap="round"/><path d="M8 20L3 36M8 20L13 36M52 10L47 25M52 10L57 25" stroke="#9a6b12" stroke-width="1.3"/><path d="M1 36H15Q14 43 8 43Q2 43 1 36Z" fill="#e2b53a" stroke="#9a6b12" stroke-width="1.6" stroke-linejoin="round"/><path d="M45 25H59Q58 32 52 32Q46 32 45 25Z" fill="#e2b53a" stroke="#9a6b12" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="31" r="5" fill="#f39a1e" stroke="#9a6b12" stroke-width="1.2"/><circle cx="52" cy="21" r="3" fill="#fff3b8" stroke="#9a6b12" stroke-width="1.2"/><circle cx="30" cy="15" r="3.5" fill="#fff3b8" stroke="#9a6b12" stroke-width="1.6"/>'),
    'trofeu-t12': () => svg('0 0 60 52', '<path d="M6 21L11 5H49L54 21Z" fill="#e2b53a" stroke="#9a6b12" stroke-width="2" stroke-linejoin="round"/><path d="M18.6 5L15.6 21M26.2 5L25.2 21M33.8 5L34.8 21M41.4 5L44.4 21" stroke="#fff3b8" stroke-width="2.2"/><path d="M6 21Q12 26 18 21Q24 26 30 21Q36 26 42 21Q48 26 54 21" fill="#e2b53a" stroke="#9a6b12" stroke-width="1.4"/><path d="M10 26V49M50 26V49" stroke="#9a6b12" stroke-width="2.4" stroke-linecap="round"/><rect x="5" y="37" width="50" height="5" rx="1.5" fill="#d9a521" stroke="#9a6b12" stroke-width="1.6"/><rect x="13" y="29" width="8" height="8" rx="1.5" fill="#fbfaf6" stroke="#9a6b12" stroke-width="1.2"/><path d="M21 31Q25 32 21 35" fill="none" stroke="#9a6b12" stroke-width="1.2"/><path d="M31 37Q27 31 31.5 27V25H36.5V27Q41 31 37 37Z" fill="#fff3b8" stroke="#9a6b12" stroke-width="1.2" stroke-linejoin="round"/><rect x="42" y="28" width="9" height="9" fill="#dff1d6" stroke="#9a6b12" stroke-width="1.2"/><circle cx="46.5" cy="32.5" r="2.4" fill="#ff8fab"/><circle cx="30" cy="47" r="4.2" fill="#f3d36b" stroke="#9a6b12" stroke-width="1.4"/><circle cx="30" cy="47" r="2" fill="none" stroke="#9a6b12" stroke-width="1"/>'),
    'trofeu-t13': () => svg('0 0 60 52', '<rect x="4" y="5" width="52" height="42" rx="3" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><rect x="10" y="11" width="40" height="30" fill="#fbfaf6"/><rect x="13" y="16" width="34" height="21" rx="1.5" fill="#fff" stroke="#9a6b12" stroke-width="1.4"/><path d="M13 17L30 29L47 17" fill="none" stroke="#9a6b12" stroke-width="1.4" stroke-linejoin="round"/><rect x="39" y="18.5" width="6" height="7" fill="#1d4fb8" stroke="#fbfaf6" stroke-width=".8"/><circle cx="30" cy="29" r="2.6" fill="#d62828"/><path d="M17 33H26M17 35.2H23" stroke="#6b7c86" stroke-width="1.2" stroke-linecap="round"/><path d="M8 8H18" stroke="#fff3b8" stroke-width="2" stroke-linecap="round"/>'),
    'trofeu-t14': () => svg('0 0 60 52', '<rect x="27" y="1.5" width="6" height="6" rx="2" fill="#d9a521" stroke="#9a6b12" stroke-width="1.6"/><circle cx="30" cy="28" r="22" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><circle cx="30" cy="28" r="17" fill="#fff3b8" stroke="#9a6b12" stroke-width="1.4"/><path d="M30 12V16M30 40V44M14 28H18M42 28H46" stroke="#9a6b12" stroke-width="2" stroke-linecap="round"/><g transform="rotate(35 30 28)"><path d="M30 14L34.5 28H25.5Z" fill="#d62828"/><path d="M30 42L34.5 28H25.5Z" fill="#fbfaf6" stroke="#9a6b12" stroke-width="1" stroke-linejoin="round"/></g><circle cx="30" cy="28" r="2.2" fill="#5a3f0e"/><path d="M11 22Q12.5 16 17 12" fill="none" stroke="#fff3b8" stroke-width="2" stroke-linecap="round"/>'),
    'trofeu-t15': () => {
      const p = [];
      for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, s = i % 2 ? 9 : 19.5; p.push(`${(30 + s * Math.cos(a)).toFixed(1)} ${(22 + s * Math.sin(a)).toFixed(1)}`); }
      return svg('0 0 60 52', '<path d="M20 51L30 37L40 51Z" fill="#3f8f3a" stroke="#2d6a4f" stroke-width="1.4" stroke-linejoin="round"/><circle cx="30" cy="46" r="2" fill="#d62828"/>' +
        `<path d="M${p.join('L')}Z" fill="#e2b53a" stroke="#9a6b12" stroke-width="2" stroke-linejoin="round"/>` +
        '<circle cx="30" cy="23" r="3.5" fill="#fff3b8"/><path d="M5 6L6.2 9L9 10L6.2 11L5 14L3.8 11L1 10L3.8 9Z" fill="#fff3b8"/><path d="M55 4L56 6.6L58.6 7.6L56 8.6L55 11.2L54 8.6L51.4 7.6L54 6.6Z" fill="#fff3b8"/>');
    },
    // Erä 3 (oppitunnit 16–20, 20.10.2026): kultapalkinnot.
    'trofeu-t16': () => svg('0 0 60 52', '<g transform="rotate(-8 30 31)"><rect x="3" y="18" width="54" height="26" rx="4" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><rect x="7" y="23" width="46" height="16" rx="2" fill="#d9a521" stroke="#9a6b12" stroke-width="1.2"/>' +
      Array.from({ length: 10 }, (_, i) => `<rect x="${10.5 + i * 4.2}" y="26" width="2.4" height="10" rx="1.2" fill="#5a3f0e"/>`).join('') +
      '<path d="M8 21H22" stroke="#fff3b8" stroke-width="2" stroke-linecap="round"/><circle cx="5.5" cy="31" r="1.3" fill="#fff3b8"/><circle cx="54.5" cy="31" r="1.3" fill="#fff3b8"/></g>' +
      '<path d="M40 10.5V3.5L50 1.5V8.5" fill="none" stroke="#5a3f0e" stroke-width="1.8" stroke-linejoin="round"/><circle cx="37.6" cy="10.8" r="2.7" fill="#5a3f0e"/><circle cx="47.6" cy="8.8" r="2.7" fill="#5a3f0e"/>'),
    'trofeu-t17': () => svg('0 0 60 52', '<rect x="4" y="4" width="52" height="44" rx="3" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><rect x="10" y="10" width="40" height="32" fill="#fbfaf6"/>' +
      '<ellipse cx="30" cy="29" rx="10.5" ry="11.5" fill="#f1cfb4" stroke="#6b7c86" stroke-width="1.2"/>' +
      '<path d="M19.5 27Q18.5 14 30 14Q41.5 14 40.5 27Q36 21 30 21Q24 21 19.5 27Z" fill="#2b2b2b"/><path d="M25 15Q24 7 32 6Q31 10 36 9Q40 11 36 15Z" fill="#2b2b2b"/>' +
      '<path d="M21.5 24.5L27.5 26.5M38.5 24.5L32.5 26.5" stroke="#2b2b2b" stroke-width="1.5" stroke-linecap="round"/>' +
      '<circle cx="25.5" cy="29.5" r="4.6" fill="#fff" stroke="#2b2b2b" stroke-width="1.7"/><circle cx="34.5" cy="29.5" r="4.6" fill="#fff" stroke="#2b2b2b" stroke-width="1.7"/><path d="M30.1 29Q30 28.2 29.9 29" fill="none" stroke="#2b2b2b" stroke-width="1.4"/><circle cx="26.5" cy="30" r="1.4" fill="#2b2b2b"/><circle cx="35.5" cy="30" r="1.4" fill="#2b2b2b"/>' +
      '<path d="M26 38Q30 36 34 38" fill="none" stroke="#8e2a50" stroke-width="1.4" stroke-linecap="round"/><path d="M8 8H18" stroke="#fff3b8" stroke-width="2" stroke-linecap="round"/>'),
    'trofeu-t18': () => svg('0 0 60 52', '<path d="M12 1H23L36 24H25Z" fill="#d62828"/><path d="M48 1H37L24 24H35Z" fill="#1d4fb8"/>' +
      '<rect x="26" y="21" width="8" height="6" rx="1.5" fill="#d9a521" stroke="#9a6b12" stroke-width="1.4"/>' +
      '<circle cx="30" cy="35" r="16" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><circle cx="30" cy="35" r="11.5" fill="#fff3b8" stroke="#9a6b12" stroke-width="1.4"/>' +
      '<rect x="22.5" y="30" width="15" height="10.5" rx="1.2" fill="#fff" stroke="#9a6b12" stroke-width="1.2"/><path d="M22.5 30.6L30 36.4L37.5 30.6" fill="none" stroke="#9a6b12" stroke-width="1.2" stroke-linejoin="round"/><circle cx="30" cy="37" r="1.5" fill="#d62828"/>' +
      '<path d="M17.5 30Q19 24.5 24 22.5" fill="none" stroke="#fff3b8" stroke-width="2" stroke-linecap="round"/>'),
    'trofeu-t19': () => svg('0 0 60 52', '<path d="M5 46V22Q5 14 11.5 14Q18 14 18 22V46Z" fill="#e2b53a" stroke="#9a6b12" stroke-width="2" stroke-linejoin="round"/><path d="M42 46V22Q42 14 48.5 14Q55 14 55 22V46Z" fill="#e2b53a" stroke="#9a6b12" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M16 46V28Q16 24 20 24Q22 20 26 18Q28 12 30 9Q32 12 34 18Q38 20 40 24Q44 24 44 28V46Z" fill="#e2b53a" stroke="#9a6b12" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M30 1.5V9M26.8 4.6H33.2" stroke="#9a6b12" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M25 46V38Q25 32.5 30 32.5Q35 32.5 35 38V46Z" fill="#5a3f0e"/><circle cx="30" cy="25" r="3.4" fill="#fff3b8" stroke="#9a6b12" stroke-width="1.4"/>' +
      '<path d="M9.5 32V26.5Q9.5 23.5 11.5 23.5Q13.5 23.5 13.5 26.5V32Z" fill="#5a3f0e"/><path d="M46.5 32V26.5Q46.5 23.5 48.5 23.5Q50.5 23.5 50.5 26.5V32Z" fill="#5a3f0e"/>' +
      '<circle cx="11.5" cy="11.5" r="2.3" fill="#d9a521" stroke="#9a6b12" stroke-width="1.2"/><circle cx="48.5" cy="11.5" r="2.3" fill="#d9a521" stroke="#9a6b12" stroke-width="1.2"/>' +
      '<rect x="2" y="46" width="56" height="4.5" rx="1.5" fill="#d9a521" stroke="#9a6b12" stroke-width="1.6"/><path d="M7.5 18V40M19.5 30V42" stroke="#fff3b8" stroke-width="1.6" stroke-linecap="round"/>'),
    'trofeu-t20': () => svg('0 0 60 52', '<rect x="2" y="2" width="56" height="48" rx="3" fill="#cfe0ea"/>' +
      [10, 18, 26, 34, 42, 50].map(x => `<path d="M${x} 2.5V38" stroke="#b9cfdc" stroke-width="1.4"/>`).join('') +
      '<g transform="rotate(-3 30 22)"><path d="M30 3.5L19 10M30 3.5L41 10" stroke="#9a6b12" stroke-width="1" fill="none"/><circle cx="30" cy="3.5" r="1.6" fill="#5a3f0e"/>' +
      '<rect x="13" y="9" width="34" height="27" rx="2" fill="#e2b53a" stroke="#9a6b12" stroke-width="2"/><rect x="17.5" y="13.5" width="25" height="18" fill="#dff1d6"/>' + possuPaa(30, 24, 0.62) + '</g>' +
      '<path d="M4 50V44Q4 40 8 40H52Q56 40 56 44V50Z" fill="#5b6fa8"/><rect x="4" y="45.5" width="52" height="4.5" fill="#4a5c94"/><path d="M12 43H22" stroke="#8fa0cc" stroke-width="1.6" stroke-linecap="round"/>'),
    'oculos-ouro': () => svg('0 0 60 52','<circle cx="19" cy="27" r="11" fill="#3a2a0b" stroke="#e2b53a" stroke-width="4"/><circle cx="41" cy="27" r="11" fill="#3a2a0b" stroke="#e2b53a" stroke-width="4"/><path d="M28 25Q30 22 32 25M8 25L2 21M52 25L58 21" fill="none" stroke="#d9a521" stroke-width="3" stroke-linecap="round"/><path d="M13 23L17 20M35 23L39 20" stroke="#fff3b8" stroke-width="2" stroke-linecap="round"/>'),
    'camisa-ouro': () => svg('0 0 60 52', '<path d="M18 6L8 12L4 24L12 27L14 46H46L48 27L56 24L52 12L42 6Q30 14 18 6Z" fill="#e2b53a" stroke="#9a6b12" stroke-width="2" stroke-linejoin="round"/><path d="M22 34L30 18M34 42L42 28" stroke="#fff3b8" stroke-width="3" stroke-linecap="round" opacity=".7"/>'),
    'mandarineira-ouro': () => svg('0 0 110 130', '<ellipse cx="55" cy="126" rx="34" ry="4" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M55 127V68M55 92L40 76M55 84L70 70" fill="none" stroke="#9a6b12" stroke-width="8" stroke-linecap="round"/>' +
      '<circle cx="34" cy="56" r="22" fill="#b8860b"/><circle cx="76" cy="54" r="22" fill="#b8860b"/><circle cx="55" cy="38" r="27" fill="#d9a521"/><circle cx="40" cy="66" r="16" fill="#d9a521"/><circle cx="72" cy="68" r="16" fill="#d9a521"/>' +
      [[38, 34], [62, 26], [78, 50], [30, 58], [52, 56], [70, 70], [45, 72]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.5" fill="#f39a1e" stroke="#fff3b8" stroke-width="1.2"/><circle cx="${x - 1.5}" cy="${y - 1.5}" r="1.4" fill="#fff3b8"/>`).join('') +
      '<path d="M20 20L24 16M90 24L94 20M50 8L50 3" stroke="#fff3b8" stroke-width="2.5" stroke-linecap="round"/>'),
    flamingo: () => flamingo(paivaNro() % 3),
    tochas: () => svg('0 0 80 100', tiki(18) + tiki(62)),
    coqueiro: () => svg('0 0 100 130', '<ellipse cx="46" cy="126" rx="30" ry="4" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M44 127Q40 80 56 34" fill="none" stroke="#8d6133" stroke-width="10" stroke-linecap="round"/>' +
      '<path d="M40 110Q46 108 50 111M41 92Q47 90 51 93M44 74Q50 72 54 75M48 56Q53 54 57 57" fill="none" stroke="#6a4423" stroke-width="2"/>' +
      palmunLehdet(56, 32) + '<circle cx="52" cy="40" r="5" fill="#7b5129"/><circle cx="60" cy="41" r="5" fill="#6a4423"/>'),
    rede: () => svg('0 0 160 92', '<ellipse cx="80" cy="89" rx="74" ry="3.5" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M14 89V18M146 89V18" stroke="#8d6133" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M14 26L40 46M146 26L120 46" stroke="#c9a46b" stroke-width="2.2"/>' +
      '<path d="M40 46Q80 88 120 46Q80 64 40 46Z" fill="#e2574c"/>' +
      '<path d="M46 50Q80 82 114 50M54 56Q80 80 106 56" fill="none" stroke="#ffd166" stroke-width="3"/>'),
    boombox: () => svg('0 0 84 64', '<g class="saari-nuotit"><text x="8" y="12" font-size="12" fill="#5b6fa8">♪</text><text x="66" y="10" font-size="11" fill="#e2574c">♫</text></g>' +
      '<path d="M22 22Q22 12 42 12Q62 12 62 22" fill="none" stroke="#2b2b2b" stroke-width="3.2"/>' +
      '<rect x="6" y="22" width="72" height="38" rx="7" fill="#5b6fa8"/><rect x="6" y="22" width="72" height="7" rx="3.5" fill="#4a5c94"/>' +
      '<circle cx="22" cy="43" r="11" fill="#2b2b2b"/><circle cx="22" cy="43" r="5" fill="#8a979f"/><circle cx="62" cy="43" r="11" fill="#2b2b2b"/><circle cx="62" cy="43" r="5" fill="#8a979f"/>' +
      '<rect x="35" y="33" width="14" height="9" rx="1.5" fill="#8fd6dd"/><path d="M36 50H48" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>'),
    mehubar: () => svg('0 0 110 112', '<ellipse cx="55" cy="109" rx="50" ry="3.5" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M18 34V106M92 34V106" stroke="#8d6133" stroke-width="5"/>' +
      '<path d="M4 36L55 10L106 36Z" fill="#d9a441"/>' + [14, 26, 38, 50, 62, 74, 86, 98].map(x => `<path d="M${x} ${36 - Math.abs(55 - x) * 0}L${x - 3} 44" stroke="#b57d3a" stroke-width="1.6"/>`).join('') +
      '<rect x="12" y="66" width="86" height="40" rx="3" fill="#e9c48a"/><path d="M12 78H98M12 92H98" stroke="#c99a5c" stroke-width="1.4"/>' +
      '<rect x="30" y="44" width="50" height="14" rx="3" fill="#fbfaf6"/><circle cx="42" cy="51" r="4.5" fill="#f39a1e"/><circle cx="55" cy="51" r="4.5" fill="#ffd166"/><circle cx="68" cy="51" r="4.5" fill="#e2574c"/>' +
      '<path d="M28 50V64H40V50Z" fill="rgba(255,255,255,.7)" stroke="#8d6133" stroke-width="1"/><path d="M29 55H39V63H29Z" fill="#f39a1e"/><path d="M37 46L33 56" stroke="#e2574c" stroke-width="1.6"/>' +
      '<circle cx="74" cy="61" r="5" fill="#f39a1e"/><circle cx="84" cy="62" r="4.5" fill="#f39a1e"/><path d="M74 56L76 53" stroke="#3f8f3a" stroke-width="1.6"/>'),
    algas: () => svg('0 0 120 80', '<ellipse cx="60" cy="74" rx="56" ry="6" fill="#7cc6cc" opacity=".7"/>' +
      '<g class="saari-alga">' + [[16, 30, '#2d6a4f'], [30, 18, '#3f8f3a'], [46, 26, '#2d6a4f'], [62, 12, '#3f8f3a'], [78, 22, '#2d6a4f'], [94, 16, '#3f8f3a'], [106, 32, '#2d6a4f']]
        .map(([x, y, v]) => `<path d="M${x} 76Q${x - 8} ${(76 + y) / 2 + 8} ${x} ${(76 + y) / 2}Q${x + 8} ${(76 + y) / 2 - 8} ${x} ${y}" fill="none" stroke="${v}" stroke-width="5" stroke-linecap="round"/>`).join('') + '</g>' +
      '<circle cx="38" cy="10" r="3" fill="none" stroke="#fff" stroke-width="1.2"/><circle cx="86" cy="6" r="2.2" fill="none" stroke="#fff" stroke-width="1.2"/>'),
    pier: () => svg('0 0 170 72', '<path d="M8 48Q40 44 70 50M96 44Q130 40 164 46" fill="none" stroke="#fff" stroke-width="1.4" opacity=".7"/>' +
      '<path d="M22 44V66M52 52V70M122 34V56M156 42V62" stroke="#7b5129" stroke-width="4.5" stroke-linecap="round"/>' +
      '<path d="M10 40L122 28L162 38L50 52Z" fill="#c48a4f"/>' +
      [0.2, 0.36, 0.52, 0.68, 0.84].map(f => `<path d="M${10 + 112 * f} ${40 - 12 * f}L${50 + 112 * f} ${52 - 14 * f}" stroke="#a5743f" stroke-width="1.4"/>`).join('') +
      '<path d="M10 40L50 52L162 38" fill="none" stroke="#8d6133" stroke-width="2"/>'),
    canoa: () => svg('0 0 150 52', '<path d="M10 40Q75 50 140 40" fill="none" stroke="#fff" stroke-width="1.4" opacity=".7"/>' +
      '<path d="M100 6L64 44" stroke="#8d6133" stroke-width="3" stroke-linecap="round"/><ellipse cx="62" cy="46" rx="5" ry="9" transform="rotate(42 62 46)" fill="#a5743f"/>' +
      '<path d="M6 22Q75 54 144 22Q140 35 120 39H30Q10 35 6 22Z" fill="#c4610f"/>' +
      '<path d="M6 22Q75 34 144 22" fill="none" stroke="#8d3f0a" stroke-width="2.4"/><path d="M40 30H110" stroke="#ffd166" stroke-width="2" opacity=".8"/>'),
    mandarineira: () => svg('0 0 110 130', '<ellipse cx="55" cy="126" rx="34" ry="4" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M55 127V68M55 92L40 76M55 84L70 70" fill="none" stroke="#8d6133" stroke-width="8" stroke-linecap="round"/>' +
      '<circle cx="34" cy="56" r="22" fill="#2d6a4f"/><circle cx="76" cy="54" r="22" fill="#2d6a4f"/><circle cx="55" cy="38" r="27" fill="#3f8f3a"/><circle cx="40" cy="66" r="16" fill="#3f8f3a"/><circle cx="72" cy="68" r="16" fill="#3f8f3a"/>' +
      [[38, 34], [62, 26], [78, 50], [30, 58], [52, 56], [70, 70], [45, 72]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.5" fill="#f39a1e"/><circle cx="${x - 1.5}" cy="${y - 1.5}" r="1.4" fill="#ffd27a"/>`).join('') +
      '<circle cx="84" cy="121" r="5" fill="#f39a1e"/>'),
    sauna: () => svg('0 0 130 122', '<g class="saari-hoyry"><circle cx="97" cy="14" r="6" fill="#fff" opacity=".8"/><circle cx="104" cy="6" r="4.5" fill="#fff" opacity=".7"/><circle cx="92" cy="4" r="3.5" fill="#fff" opacity=".6"/></g>' +
      '<ellipse cx="65" cy="119" rx="60" ry="3.5" fill="rgba(0,0,0,.12)"/>' +
      '<rect x="92" y="22" width="10" height="20" fill="#6a6a6a"/>' +
      '<rect x="14" y="50" width="102" height="66" fill="#a5743f"/>' + [58, 66, 74, 82, 90, 98, 106].map(y => `<path d="M14 ${y}H116" stroke="#7b5129" stroke-width="1.6"/>`).join('') +
      [54, 62, 70, 78, 86, 94, 102, 110].map(y => `<circle cx="13" cy="${y}" r="4" fill="#c48a4f" stroke="#7b5129" stroke-width="1"/><circle cx="117" cy="${y}" r="4" fill="#c48a4f" stroke="#7b5129" stroke-width="1"/>`).join('') +
      '<path d="M4 54L65 20L126 54Z" fill="#5a3d22"/><path d="M14 48L65 26L116 48" fill="none" stroke="#7b5129" stroke-width="2"/>' +
      '<rect x="56" y="74" width="20" height="42" rx="1.5" fill="#7b5129"/><circle cx="72" cy="96" r="1.6" fill="#f2d21b"/>' +
      '<rect x="26" y="70" width="18" height="14" rx="2" fill="#ffd166" stroke="#7b5129" stroke-width="2.4"/>' +
      '<path d="M86 104H104L102 116H88Z" fill="#b57d3a"/><path d="M86 108H104" stroke="#7b5129" stroke-width="1.4"/><path d="M98 104L110 92" stroke="#8d6133" stroke-width="2.4" stroke-linecap="round"/>'),
    disco: () => {
      const laatat = [];
      for (let y = 46; y <= 104; y += 8) for (let x = 6; x <= 64; x += 8) laatat.push(`<rect x="${x}" y="${y}" width="7" height="7" fill="${(x * 7 + y * 3) % 5 === 0 ? '#fff' : (x + y) % 3 ? '#b8c4cc' : '#8a979f'}"/>`);
      return svg('0 0 70 136', '<path d="M35 0V44" stroke="#8a979f" stroke-width="1.6"/>' +
        '<clipPath id="saari-disco-pallo"><circle cx="35" cy="75" r="29"/></clipPath>' +
        '<circle cx="35" cy="75" r="30" fill="#6f7b84"/><g clip-path="url(#saari-disco-pallo)">' + laatat.join('') + '</g>' +
        '<g class="saari-brilho"><path d="M8 50L10 56L16 58L10 60L8 66L6 60L0 58L6 56Z" fill="#fff3b0"/><path d="M62 96L63.5 100L68 101.5L63.5 103L62 107L60.5 103L56 101.5L60.5 100Z" fill="#ff8fab"/>' +
        '<path d="M60 40L61 43L64 44L61 45L60 48L59 45L56 44L59 43Z" fill="#8fd6dd"/></g>');
    },
    // Erä 1 (oppitunnit 6–10, 20.10.2026): kauppatavarat, tasaiset täytöt kuten muillakin.
    estante: () => {
      const kirjat = (y, lista) => { let x = 11; return lista.map(([w, h, v]) => { const s = `<rect x="${x}" y="${y - h}" width="${w}" height="${h}" rx="1" fill="${v}"/>`; x += w + 0.8; return s; }).join(''); };
      return svg('0 0 70 84', '<ellipse cx="35" cy="81" rx="31" ry="3" fill="rgba(0,0,0,.12)"/>' +
        '<rect x="6" y="8" width="58" height="72" rx="1.5" fill="#8d6133"/><rect x="10" y="12" width="50" height="64" fill="#e9c48a"/><path d="M10 33H60M10 55H60" stroke="#8d6133" stroke-width="3"/>' +
        kirjat(33, [[5, 17, '#e2574c'], [4, 14, '#1d4fb8'], [6, 18, '#ffd166'], [4, 15, '#2d6a4f'], [5, 17, '#c2185b'], [7, 13, '#8fd6dd'], [4, 16, '#f39a1e'], [5, 14, '#5b6fa8']]) +
        kirjat(55, [[6, 16, '#2d6a4f'], [4, 18, '#e2574c'], [5, 14, '#ffd166'], [7, 17, '#1d4fb8'], [4, 15, '#8fd6dd'], [6, 18, '#c2185b'], [5, 13, '#f39a1e'], [4, 16, '#5b6fa8']]) +
        '<rect x="11" y="69" width="26" height="7" rx="1" fill="#e2574c"/><rect x="13" y="62" width="22" height="7" rx="1" fill="#1d4fb8"/><rect x="40" y="60" width="5" height="16" fill="#2d6a4f"/><rect x="45.8" y="64" width="4" height="12" fill="#c2185b"/>' +
        '<circle cx="55" cy="72" r="4" fill="#f39a1e"/><path d="M55 68Q57 65 59 66" fill="none" stroke="#3f8f3a" stroke-width="1.4" stroke-linecap="round"/>' +
        '<rect x="38" y="3" width="20" height="5" rx="1" fill="#2d6a4f"/><circle cx="20" cy="4.5" r="3.6" fill="#f39a1e"/>');
    },
    pedras: () => svg('0 0 90 56', '<ellipse cx="45" cy="53" rx="42" ry="3.5" fill="rgba(0,0,0,.14)"/>' +
      '<path d="M36 51L37 26L52 12L70 20L78 51Z" fill="#b5503f"/><path d="M37 26L52 12L57 26L43 33Z" fill="#d97b66"/><path d="M52 12L70 20L64 30L57 26Z" fill="#9a3f30"/>' +
      '<path d="M43 44L57 30L70 38" fill="none" stroke="#fbfaf6" stroke-width="1.6" stroke-linecap="round" opacity=".85"/>' +
      '<path d="M4 51L9 31L25 23L41 32L45 51Z" fill="#8a979f"/><path d="M9 31L25 23L28 35L12 41Z" fill="#b8c4cc"/><path d="M25 23L41 32L34 38L28 35Z" fill="#6f7b84"/>' +
      '<path d="M62 51L66 41L80 37L88 51Z" fill="#6f7b84"/><path d="M66 41L80 37L78 44L68 46Z" fill="#8a979f"/>' +
      '<g class="saari-brilho"><path d="M20 27L21.3 30.4L24.5 31.5L21.3 32.6L20 36L18.7 32.6L15.5 31.5L18.7 30.4Z" fill="#fff3b0"/><path d="M58 17L59 19.5L61.5 20.5L59 21.5L58 24L57 21.5L54.5 20.5L57 19.5Z" fill="#fff3b0"/></g>'),
    'mesa-trabalho': () => svg('0 0 120 84', '<ellipse cx="60" cy="79" rx="52" ry="3" fill="rgba(0,0,0,.10)"/>' +
      '<path d="M2 76Q30 82 60 76T118 76" fill="none" stroke="#fff" stroke-width="1.5" opacity=".75"/>' +
      '<ellipse cx="24" cy="70" rx="10" ry="6" fill="#1d4fb8"/><ellipse cx="96" cy="70" rx="10" ry="6" fill="#1d4fb8"/><path d="M16 68H32M88 68H104" stroke="#fbfaf6" stroke-width="1.6"/>' +
      '<path d="M6 60H114L108 71H12Z" fill="#c48a4f"/><path d="M12 65.5H108" stroke="#8d6133" stroke-width="1.4"/>' +
      '<path d="M26 42V60M94 42V60" stroke="#7b5129" stroke-width="4.5" stroke-linecap="round"/><rect x="16" y="36" width="88" height="7" rx="2" fill="#8d6133"/>' +
      '<rect x="48" y="12" width="28" height="20" rx="2" fill="#2b2b2b"/><rect x="51" y="15" width="22" height="14" fill="#8fd6dd"/><path d="M54 20H68M54 24H64" stroke="#fbfaf6" stroke-width="1.6" stroke-linecap="round"/><path d="M42 36H82L79 32H45Z" fill="#b8c4cc"/>' +
      '<rect x="18" y="31" width="20" height="5" fill="#fbfaf6"/><rect x="20" y="27.5" width="16" height="3.5" fill="#e3ebef"/>' +
      '<rect x="88" y="26" width="9" height="10" rx="2" fill="#fbfaf6" stroke="#8a979f" stroke-width="1"/><path d="M97 28.5Q102 29.5 97 33.5" fill="none" stroke="#8a979f" stroke-width="1.6"/><circle cx="103" cy="33" r="3.2" fill="#f39a1e"/>'),
    cafeteira: () => svg('0 0 70 80', '<ellipse cx="35" cy="77" rx="30" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M12 57L8 76M58 57L62 76" stroke="#7b5129" stroke-width="3.2" stroke-linecap="round"/><rect x="6" y="52" width="58" height="6" rx="2" fill="#8d6133"/>' +
      '<rect x="16" y="14" width="30" height="38" rx="4" fill="#e2574c"/><rect x="14" y="10" width="34" height="8" rx="3" fill="#2b2b2b"/>' +
      '<rect x="20" y="30" width="22" height="22" fill="#a82f27"/><rect x="28" y="19" width="6" height="7" fill="#8a979f"/><circle cx="31" cy="29" r="1.4" fill="#7b3f1a"/><circle cx="40" cy="22.5" r="1.8" fill="#ffd166"/>' +
      '<path d="M23 37H39L37.5 52H24.5Z" fill="#8fd6dd" opacity=".9"/><path d="M24 44H38.6L37.5 52H24.5Z" fill="#7b3f1a"/><path d="M39 40Q44 41 39 47" fill="none" stroke="#2b2b2b" stroke-width="1.8"/>' +
      '<rect x="49" y="42" width="10" height="10" rx="2" fill="#fbfaf6" stroke="#8a979f" stroke-width="1"/><path d="M59 44.5Q64 45.5 59 49.5" fill="none" stroke="#8a979f" stroke-width="1.6"/>' +
      '<g class="saari-hoyry"><circle cx="54" cy="36" r="3" fill="#fff" opacity=".8"/><circle cx="57" cy="30" r="2.4" fill="#fff" opacity=".7"/><circle cx="53" cy="25" r="2" fill="#fff" opacity=".6"/></g>'),
    cavalete: () => svg('0 0 70 110', '<ellipse cx="35" cy="107" rx="28" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M35 6L11 106M35 6L59 106M35 22V104" fill="none" stroke="#8d6133" stroke-width="4" stroke-linecap="round"/>' +
      '<rect x="11" y="14" width="48" height="54" fill="#fbfaf6" stroke="#c9a46b" stroke-width="2"/><rect x="15" y="18" width="40" height="46" fill="#dff1d6"/>' + possuPaa(35, 42, 1.3) +
      '<rect x="7" y="68" width="56" height="6" rx="1.5" fill="#a5743f"/><circle cx="16" cy="71" r="1.8" fill="#e2574c"/><circle cx="23" cy="71" r="1.8" fill="#1d4fb8"/><circle cx="30" cy="71" r="1.8" fill="#ffd166"/>'),
    porquinho: () => svg('0 0 56 44', '<ellipse cx="28" cy="42" rx="22" ry="2.5" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M9 25Q2 22 5 16Q9 14 8 19" fill="none" stroke="#f06292" stroke-width="2.4" stroke-linecap="round"/>' +
      '<rect x="14" y="31" width="5" height="10" rx="2" fill="#e2577a"/><rect x="24" y="32" width="5" height="9" rx="2" fill="#e2577a"/><rect x="34" y="32" width="5" height="9" rx="2" fill="#e2577a"/><rect x="42" y="31" width="5" height="10" rx="2" fill="#e2577a"/>' +
      '<ellipse cx="27" cy="26" rx="19" ry="12.5" fill="#ff8fab"/><circle cx="45" cy="22" r="8.5" fill="#ff8fab"/><path d="M40 16L38 8L46 13Z" fill="#f06292"/><ellipse cx="51.5" cy="24" rx="4" ry="3.2" fill="#f06292"/>' +
      '<circle cx="50.5" cy="24" r=".8" fill="#8e2a50"/><circle cx="52.7" cy="24" r=".8" fill="#8e2a50"/><circle cx="46" cy="19.5" r="1.3" fill="#2b2b2b"/>' +
      '<path d="M44 27.5Q48 31 52 27.5" fill="none" stroke="#8e2a50" stroke-width="1.2" stroke-linecap="round"/><circle cx="42" cy="24.5" r="2" fill="#f06292" opacity=".6"/>' +
      '<path d="M30 10C24 6 25 1 29 2C30 2.5 30 3.5 30 4C30 3.5 31 2.5 32 2C36 1 36 6 30 10Z" fill="#e2574c"/>'),
    'guarda-chuva': () => svg('0 0 110 120', '<ellipse cx="55" cy="117" rx="30" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M55 12V114" stroke="#8d6133" stroke-width="4.5" stroke-linecap="round"/>' +
      '<path d="M6 52C8 24 30 8 55 8C80 8 102 24 104 52Q92 44 80 52Q67 44 55 52Q43 44 30 52Q18 44 6 52Z" fill="#f39a1e"/>' +
      '<path d="M55 8L30 52Q43 44 55 52Z" fill="#fbfaf6"/><path d="M55 8L80 52Q92 44 104 52C102 24 80 8 55 8Z" fill="#fbfaf6"/>' +
      '<path d="M55 8L30 52M55 8V52M55 8L80 52" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="1.3"/><circle cx="55" cy="7" r="3" fill="#8d6133"/>' +
      '<path d="M98 70Q101 76 98 79Q95 76 98 70ZM104 86Q107 92 104 95Q101 92 104 86ZM10 72Q13 78 10 81Q7 78 10 72ZM5 92Q8 98 5 101Q2 98 5 92Z" fill="#8fd6dd"/>'),
    'boneco-areia': () => svg('0 0 70 100', '<ellipse cx="35" cy="97" rx="26" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M19 50L4 41M4 41L2 34M4 41L8 35M51 50L66 43M66 43L68 37M66 43L62 38" fill="none" stroke="#7b5129" stroke-width="2.4" stroke-linecap="round"/>' +
      '<circle cx="35" cy="76" r="22" fill="#e3b866" stroke="#b57d3a" stroke-width="2"/><circle cx="35" cy="48" r="17.5" fill="#e3b866" stroke="#b57d3a" stroke-width="2"/><circle cx="35" cy="26" r="12" fill="#e3b866" stroke="#b57d3a" stroke-width="2"/>' +
      [[26, 70], [44, 82], [30, 88], [41, 66], [28, 52], [43, 56]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1" fill="#b57d3a"/>`).join('') +
      '<path d="M23 21Q23 5 35 5Q47 5 47 21Z" fill="#e2574c"/><rect x="21" y="18" width="28" height="6" rx="3" fill="#fbfaf6"/><circle cx="35" cy="4.5" r="4.5" fill="#f39a1e"/>' +
      '<circle cx="30" cy="28" r="1.8" fill="#2b2b2b"/><circle cx="40" cy="28" r="1.8" fill="#2b2b2b"/><circle cx="35" cy="32" r="3.2" fill="#f39a1e"/><path d="M35 29Q37 27 39 28" fill="none" stroke="#3f8f3a" stroke-width="1.2" stroke-linecap="round"/>' +
      '<path d="M20 37Q35 46 50 37L50 43Q35 52 20 43Z" fill="#e2574c"/><path d="M42 45L46 62L53 60L49 43Z" fill="#e2574c"/><path d="M26 41.5V47M33 44V50M40 44V50" stroke="#fbfaf6" stroke-width="2"/>' +
      '<circle cx="35" cy="57" r="1.8" fill="#2b2b2b"/><circle cx="35" cy="69" r="1.8" fill="#2b2b2b"/><circle cx="35" cy="78" r="1.8" fill="#2b2b2b"/>'),
    aviao: () => svg('0 0 150 80', '<ellipse cx="78" cy="73" rx="50" ry="3.5" fill="rgba(0,0,0,.10)"/>' +
      '<path d="M8 74Q40 80 75 74T142 74" fill="none" stroke="#fff" stroke-width="1.5" opacity=".75"/>' +
      '<path d="M6 36L144 6L72 48Z" fill="#fbfaf6" stroke="#8a979f" stroke-width="1.4" stroke-linejoin="round"/>' +
      '<path d="M72 48L144 6L96 66Z" fill="#dfe6ea" stroke="#8a979f" stroke-width="1.4" stroke-linejoin="round"/><path d="M72 48L96 66L84 44Z" fill="#b8c4cc"/>'),
    'relogio-sol': () => svg('0 0 70 70', '<ellipse cx="35" cy="67" rx="28" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<rect x="19" y="62" width="32" height="5" rx="2" fill="#6f7b84"/><path d="M26 40H44L47 63H23Z" fill="#8a979f"/>' +
      '<ellipse cx="35" cy="38" rx="30" ry="11" fill="#b8c4cc" stroke="#6f7b84" stroke-width="2"/><ellipse cx="35" cy="38" rx="24" ry="8.2" fill="#e6ecef"/>' +
      Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6, c = Math.cos(a), s = Math.sin(a); return `<path d="M${(35 + 20 * c).toFixed(1)} ${(38 + 6.8 * s).toFixed(1)}L${(35 + 24 * c).toFixed(1)} ${(38 + 8.2 * s).toFixed(1)}" stroke="#6f7b84" stroke-width="1.6" stroke-linecap="round"/>`; }).join('') +
      '<path d="M35 38L16 41L18 36Z" fill="rgba(0,0,0,.22)"/><path d="M35 38V10L53 37Z" fill="#c48a4f" stroke="#7b5129" stroke-width="1.4" stroke-linejoin="round"/>'),
    // Erä 2 (oppitunnit 11–15, 20.10.2026): kauppatavarat, tasaiset täytöt kuten muillakin.
    'barraca-queijos': () => {
      const raidat = [0, 1, 2, 3, 4, 5].map(k => {
        const a = k / 6, b = (k + 1) / 6, t0 = 14 + 82 * a, t1 = 14 + 82 * b, b0 = 4 + 102 * a, b1 = 4 + 102 * b;
        return `<path d="M${t0.toFixed(1)} 6H${t1.toFixed(1)}L${b1.toFixed(1)} 28Q${((b0 + b1) / 2).toFixed(1)} 37 ${b0.toFixed(1)} 28Z" fill="${k % 2 ? '#f2c14e' : '#fbfaf6'}"/>`;
      }).join('');
      return svg('0 0 110 104', '<ellipse cx="55" cy="101" rx="50" ry="3.5" fill="rgba(0,0,0,.12)"/>' +
        '<path d="M14 28V98M96 28V98" stroke="#7b5129" stroke-width="5"/>' +
        '<rect x="8" y="64" width="94" height="34" rx="3" fill="#c48a4f"/><path d="M8 76H102M8 88H102" stroke="#8d6133" stroke-width="1.6"/>' +
        '<rect x="14" y="46" width="34" height="16" rx="3" fill="#f2c14e"/><ellipse cx="31" cy="46" rx="17" ry="5.5" fill="#ffe08a"/>' +
        '<circle cx="24" cy="45" r="1.8" fill="#d9a441"/><circle cx="36" cy="47" r="1.4" fill="#d9a441"/><circle cx="29" cy="54" r="2" fill="#d9a441"/><circle cx="41" cy="56" r="1.5" fill="#d9a441"/>' +
        '<rect x="58" y="52" width="28" height="10" rx="2.5" fill="#f2c14e"/><ellipse cx="72" cy="52" rx="14" ry="4.4" fill="#ffe08a"/>' +
        '<rect x="63" y="43" width="18" height="9" rx="2" fill="#f2c14e"/><ellipse cx="72" cy="43" rx="9" ry="3.2" fill="#ffe08a"/><circle cx="68" cy="57" r="1.4" fill="#d9a441"/><circle cx="78" cy="48" r="1.2" fill="#d9a441"/>' +
        '<path d="M89 62H104V53L89 57Z" fill="#ffd166" stroke="#d9a441" stroke-width="1" stroke-linejoin="round"/><circle cx="96" cy="59" r="1.3" fill="#d9a441"/>' +
        '<rect x="4" y="60" width="102" height="7" rx="2.5" fill="#8d6133"/>' +
        '<rect x="30" y="71" width="50" height="19" rx="3" fill="#fbfaf6" stroke="#8d6133" stroke-width="1.6"/><path d="M38 85H52V75Z" fill="#ffd166" stroke="#d9a441" stroke-width="1" stroke-linejoin="round"/><path d="M58 77H73M58 83H68" stroke="#8d6133" stroke-width="2" stroke-linecap="round"/>' +
        raidat);
    },
    bananeira: () => svg('0 0 76 112', '<ellipse cx="38" cy="109" rx="26" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M37 108Q34 76 39 40" fill="none" stroke="#6aa84f" stroke-width="9" stroke-linecap="round"/><path d="M32 98H42M32 82H43M33 66H43" stroke="#4f8a3a" stroke-width="1.5"/>' +
      '<path d="M39 40Q38 20 33 6Q50 18 44 42Z" fill="#3f8f3a"/>' +
      '<path d="M39 40Q18 20 1 34Q14 32 26 38Q34 42 39 44Z" fill="#2d6a4f"/><path d="M39 40Q60 20 75 34Q62 32 52 38Q45 42 39 44Z" fill="#3f8f3a"/>' +
      '<path d="M39 40Q20 30 5 34M39 40Q58 30 71 34M38 38Q37 22 34 9" fill="none" stroke="#256b3a" stroke-width="1.2" stroke-linecap="round"/>' +
      '<path d="M42 46Q48 52 42 64Q36 54 42 46Z" fill="#8e2a50"/>' +
      '<path d="M44 50Q58 54 58 70" fill="none" stroke="#f2c14e" stroke-width="6.5" stroke-linecap="round"/><path d="M42 56Q54 62 52 80" fill="none" stroke="#ffd166" stroke-width="6.5" stroke-linecap="round"/><path d="M41 61Q48 70 45 84" fill="none" stroke="#f2c14e" stroke-width="6.5" stroke-linecap="round"/>' +
      '<circle cx="58" cy="72" r="1.8" fill="#6a4423"/><circle cx="52" cy="82" r="1.8" fill="#6a4423"/><circle cx="45" cy="86" r="1.8" fill="#6a4423"/>' +
      '<path d="M52 104Q59 109 68 102" fill="none" stroke="#f2c14e" stroke-width="5" stroke-linecap="round"/>'),
    banca: () => svg('0 0 124 100', '<ellipse cx="62" cy="97" rx="56" ry="3.2" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M62 20V96" stroke="#8d6133" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M20 83L16 97M104 83L108 97" stroke="#7b5129" stroke-width="4" stroke-linecap="round"/>' +
      '<rect x="14" y="40" width="20" height="26" fill="#fbfaf6" stroke="#c9a46b" stroke-width="2"/><rect x="17" y="43" width="14" height="20" fill="#dff1d6"/><circle cx="24" cy="50" r="4" fill="#f7c948"/><path d="M17 63Q22 55 27 63ZM24 63Q29 57 31 63Z" fill="#3f8f3a"/>' +
      '<rect x="38" y="46" width="16" height="20" fill="#fbfaf6" stroke="#c9a46b" stroke-width="2"/><rect x="40.5" y="48.5" width="11" height="15" fill="#ffd1dc"/><circle cx="46" cy="55" r="3.6" fill="#ff8fab"/><circle cx="44.8" cy="54" r=".8" fill="#2b2b2b"/><circle cx="47.2" cy="54" r=".8" fill="#2b2b2b"/>' +
      '<rect x="60" y="56" width="10" height="10" rx="2" fill="#1d4fb8"/><path d="M70 58Q75 59 70 63" fill="none" stroke="#1d4fb8" stroke-width="1.8"/><rect x="76" y="58" width="9" height="8" rx="2" fill="#e2574c"/><path d="M85 59.5Q89.5 60.5 85 64" fill="none" stroke="#e2574c" stroke-width="1.8"/>' +
      '<path d="M98 66Q93 58 98 52L96 48H106L104 52Q109 58 104 66Z" fill="#2a9d8f"/><path d="M99 48L97 43M103 48L105 42" stroke="#3f8f3a" stroke-width="1.6" stroke-linecap="round"/><circle cx="97" cy="42" r="3" fill="#e2574c"/><circle cx="105" cy="41" r="3" fill="#ffd166"/>' +
      '<rect x="8" y="66" width="108" height="6" rx="2" fill="#8d6133"/><path d="M10 72H114L108 84Q62 90 16 84Z" fill="#ffd166"/><path d="M12 78H112" stroke="#e0a050" stroke-width="1.6"/>' +
      '<path d="M6 38C8 14 34 6 62 6C90 6 116 14 118 38Q104 30 90 38Q76 30 62 38Q48 30 34 38Q20 30 6 38Z" fill="#2a9d8f"/><path d="M62 6L34 38Q48 30 62 38Z" fill="#fbfaf6"/><path d="M62 6L90 38Q104 30 118 38C116 14 90 6 62 6Z" fill="#fbfaf6"/><circle cx="62" cy="5" r="3" fill="#8d6133"/>'),
    provador: () => svg('0 0 70 100', '<ellipse cx="35" cy="97" rx="30" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<rect x="9" y="12" width="52" height="84" fill="#e9c48a"/>' +
      '<rect x="23" y="22" width="24" height="62" rx="4" fill="#8fd6dd" stroke="#8d6133" stroke-width="2.5"/><path d="M28 33L38 25M27 47L43 31" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".85"/>' +
      '<path d="M30 52L26 56L28 62L31 60V76H39V60L42 62L44 56L40 52Q35 56 30 52Z" fill="#f39a1e"/><circle cx="31" cy="66" r="1.2" fill="#fbfaf6"/><circle cx="37" cy="70" r="1.2" fill="#fbfaf6"/><circle cx="34" cy="60" r="1.2" fill="#fbfaf6"/>' +
      '<path d="M9 13H24Q17 36 23 56Q16 76 21 96H9Z" fill="#e2574c"/><path d="M61 13H46Q53 36 47 56Q54 76 49 96H61Z" fill="#e2574c"/><path d="M15 15Q12 50 15 96M55 15Q58 50 55 96" fill="none" stroke="rgba(0,0,0,.16)" stroke-width="1.4"/>' +
      '<path d="M7 98V8M63 98V8" stroke="#8d6133" stroke-width="5" stroke-linecap="round"/><rect x="3" y="3" width="64" height="9" rx="2" fill="#a5743f"/><path d="M6 15H64" stroke="#7b5129" stroke-width="1.8"/>'),
    'caixa-correio': () => svg('0 0 60 80', '<ellipse cx="25" cy="77" rx="19" ry="2.6" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M25 78V36" stroke="#8d6133" stroke-width="6"/>' +
      '<path d="M6 38V22Q6 8 25 8Q44 8 44 22V38Z" fill="#f2c14e"/><rect x="6" y="28" width="38" height="7" fill="#1d4fb8"/><rect x="14" y="16" width="22" height="3.5" rx="1.7" fill="#7b5129"/>' +
      '<path d="M44 27H51V11" fill="none" stroke="#8a979f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="51" y="9" width="8" height="6" fill="#e2574c"/>' +
      '<rect x="32" y="68" width="14" height="9" rx="1" fill="#fff" stroke="#8d6133" stroke-width="1"/><path d="M32 68L39 73L46 68" fill="none" stroke="#8d6133" stroke-width="1"/>'),
    tapete: () => svg('0 0 130 58', '<ellipse cx="66" cy="54" rx="60" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M10 51L28 31H122L104 51Z" fill="#2a9d8f" stroke="#1f7a70" stroke-width="1.6" stroke-linejoin="round"/><path d="M17 47.5L32 34H115L100 47.5Z" fill="none" stroke="#fff" stroke-width="1.2" opacity=".55"/>' +
      '<path d="M52 46H78L82 39H56Z" fill="#ffd166" stroke="#e0a050" stroke-width="1"/><path d="M58 43H80" stroke="#e2574c" stroke-width="1.6"/>' +
      '<rect x="36" y="17" width="7" height="22" rx="2.5" fill="#8fd6dd" stroke="#6b7c86" stroke-width="1"/><rect x="37.5" y="13" width="4" height="4.5" rx="1" fill="#e2574c"/>' +
      '<circle cx="100" cy="28" r="17" fill="#ff8fab"/><path d="M89 21Q93 13 102 12" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/><path d="M85 34Q100 46 115 34" fill="none" stroke="#f06292" stroke-width="2" opacity=".6"/>'),
    mapa: () => svg('0 0 70 100', '<ellipse cx="35" cy="97" rx="26" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M16 98V52M54 98V52" stroke="#8d6133" stroke-width="5" stroke-linecap="round"/>' +
      '<rect x="4" y="5" width="62" height="58" rx="3" fill="#8d6133"/><path d="M9 10H61V58H9Z" fill="#f0dfb0"/><path d="M61 58H52L61 49Z" fill="#d9c58f"/>' +
      '<path d="M20 33Q17 22 29 20Q40 15 47 24Q55 31 49 41Q45 50 32 48Q22 49 20 38Z" fill="#e3b866" stroke="#b57d3a" stroke-width="1.2"/><circle cx="29" cy="30" r="3.2" fill="#3f8f3a"/><circle cx="35" cy="26" r="2.6" fill="#2d6a4f"/>' +
      '<path d="M13 54Q22 43 31 45T43 38" fill="none" stroke="#e2574c" stroke-width="1.8" stroke-dasharray="3 3"/><path d="M42 34L50 42M50 34L42 42" stroke="#d62828" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M12 17Q15 15 18 17T24 17M47 55Q50 53 53 55T59 55" fill="none" stroke="#7cc6cc" stroke-width="1.6" stroke-linecap="round"/>'),
    chafariz: () => svg('0 0 120 90', '<ellipse cx="60" cy="86" rx="54" ry="3.5" fill="rgba(0,0,0,.10)"/>' +
      '<path d="M8 66Q8 82 60 84Q112 82 112 66Q60 80 8 66Z" fill="#8a979f"/><ellipse cx="60" cy="66" rx="52" ry="13" fill="#b8c4cc"/><ellipse cx="60" cy="67" rx="44" ry="9.5" fill="#8fd6dd"/>' +
      '<path d="M24 69Q30 66 36 69M82 68Q88 65 94 68" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>' +
      '<rect x="54" y="42" width="12" height="26" fill="#8a979f"/>' +
      '<path d="M38 40Q40 52 60 54Q80 52 82 40Q60 48 38 40Z" fill="#8a979f"/><ellipse cx="60" cy="40" rx="22" ry="6" fill="#b8c4cc"/><ellipse cx="60" cy="40.5" rx="17" ry="3.8" fill="#8fd6dd"/>' +
      '<rect x="57" y="22" width="6" height="19" fill="#8a979f"/>' +
      '<path d="M60 22V8M60 10Q48 12 42 38M60 10Q72 12 78 38" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".9"/>' +
      '<g class="saari-hoyry"><circle cx="60" cy="5" r="2" fill="#fff"/><circle cx="40" cy="34" r="1.6" fill="#fff"/><circle cx="80" cy="34" r="1.6" fill="#fff"/></g>'),
    'arvore-natal': () => {
      const p = [];
      for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, s = i % 2 ? 4 : 9.5; p.push(`${(45 + s * Math.cos(a)).toFixed(1)} ${(13 + s * Math.sin(a)).toFixed(1)}`); }
      const laranja = ([x, y]) => `<circle cx="${x}" cy="${y}" r="4.6" fill="#f39a1e"/><circle cx="${x - 1.4}" cy="${y - 1.4}" r="1.2" fill="#ffd27a"/>`;
      const bola = ([x, y, v]) => `<circle cx="${x}" cy="${y}" r="3" fill="${v}"/><circle cx="${x - 0.9}" cy="${y - 0.9}" r=".8" fill="#fff" opacity=".8"/>`;
      return svg('0 0 90 120', '<ellipse cx="45" cy="117" rx="30" ry="3" fill="rgba(0,0,0,.12)"/>' +
        '<rect x="39" y="98" width="12" height="17" fill="#8d6133"/>' +
        '<path d="M45 58L8 102H82Z" fill="#2d6a4f"/><path d="M45 36L14 80H76Z" fill="#3f8f3a"/><path d="M45 18L22 56H68Z" fill="#52a84a"/>' +
        '<path d="M26 64Q45 76 64 64M18 90Q45 104 72 90" fill="none" stroke="#ffd166" stroke-width="2.4" stroke-dasharray="3 4" stroke-linecap="round"/>' +
        [[40, 42], [52, 50], [30, 70], [60, 66], [24, 94], [66, 92], [45, 90]].map(laranja).join('') +
        [[47, 31, '#e2574c'], [36, 58, '#5b6fa8'], [56, 80, '#e2574c'], [35, 84, '#5b6fa8'], [73, 98, '#ff8fab']].map(bola).join('') +
        `<path d="M${p.join('L')}Z" fill="#e2b53a" stroke="#9a6b12" stroke-width="1.4" stroke-linejoin="round"/><circle cx="45" cy="14" r="2" fill="#fff3b8"/>`);
    },
    presentes: () => svg('0 0 72 46', '<ellipse cx="36" cy="43" rx="31" ry="2.6" fill="rgba(0,0,0,.12)"/>' +
      '<rect x="3" y="18" width="26" height="24" fill="#e2574c"/><rect x="14" y="18" width="4" height="24" fill="#ffd166"/><rect x="3" y="26" width="26" height="4" fill="#ffd166"/>' +
      '<ellipse cx="11" cy="14" rx="5" ry="3.4" transform="rotate(-25 11 14)" fill="#ffd166"/><ellipse cx="21" cy="14" rx="5" ry="3.4" transform="rotate(25 21 14)" fill="#ffd166"/><circle cx="16" cy="16" r="2.4" fill="#e0a050"/>' +
      '<rect x="32" y="28" width="18" height="14" fill="#1d4fb8"/><rect x="39" y="28" width="3.5" height="14" fill="#fbfaf6"/><ellipse cx="37" cy="26" rx="3.6" ry="2.4" transform="rotate(-20 37 26)" fill="#fbfaf6"/><ellipse cx="45" cy="26" rx="3.6" ry="2.4" transform="rotate(20 45 26)" fill="#fbfaf6"/>' +
      '<rect x="53" y="21" width="16" height="21" fill="#2a9d8f"/><rect x="59.5" y="21" width="3.5" height="21" fill="#fff3b8"/><rect x="53" y="28" width="16" height="3.5" fill="#fff3b8"/><ellipse cx="57" cy="19" rx="3.6" ry="2.4" transform="rotate(-20 57 19)" fill="#fff3b8"/><ellipse cx="65" cy="19" rx="3.6" ry="2.4" transform="rotate(20 65 19)" fill="#fff3b8"/>'),
    // Erä 3 (oppitunnit 16–20, 20.10.2026): kauppatavarat, tasaiset täytöt kuten muillakin.
    tamborim: () => svg('0 0 64 66', '<ellipse cx="32" cy="63" rx="24" ry="2.8" fill="rgba(0,0,0,.12)"/>' +
      '<g class="saari-nuotit"><text x="3" y="12" font-size="12" fill="#e2574c">♪</text><text x="48" y="10" font-size="11" fill="#5b6fa8">♫</text></g>' +
      '<path d="M22 42L13 62M42 42L51 62M32 46V62" stroke="#7b5129" stroke-width="3.2" stroke-linecap="round"/><path d="M16 56H48" stroke="#8d6133" stroke-width="2.2"/>' +
      '<path d="M10 28V34Q10 47 32 47Q54 47 54 34V28Z" fill="#e0a050"/><ellipse cx="32" cy="28" rx="22" ry="17" fill="#f1c40f" stroke="#e0a050" stroke-width="1.6"/>' +
      '<ellipse cx="32" cy="28" rx="17.5" ry="13" fill="#fbfaf6"/><path d="M19 25Q23 19.5 30 18.5" fill="none" stroke="#e3ebef" stroke-width="2.2" stroke-linecap="round"/>' +
      '<path d="M14 36.5V43M20 40V46.5M26 42V48M32 42.5V48.5M38 42V48M44 40V46.5M50 36.5V43" stroke="#e0a050" stroke-width="1.2"/>' +
      '<path d="M43 14L58 4" stroke="#8d6133" stroke-width="2.6" stroke-linecap="round"/><circle cx="43" cy="14" r="2.4" fill="#a5743f"/>'),
    bandeirinhas: () => {
      const cores = ['#e2574c', '#ffd166', '#2a9d8f', '#1d4fb8', '#ff8fab', '#f39a1e'];
      // Naru P0 (12, 8), P1 (75, 30), P2 (138, 8): x = 12 + 126 t, y = 8 + 44 t (1 − t); liput roikkuvat narusta.
      const naru = t => [12 + 126 * t, 8 + 44 * t * (1 - t)];
      const liput = Array.from({ length: 9 }, (_, i) => {
        const t = (i + 0.5) / 9, [xa, ya] = naru(t - 0.04), [xb, yb] = naru(t + 0.04), [x, y] = naru(t);
        return `<path d="M${xa.toFixed(1)} ${ya.toFixed(1)}L${xb.toFixed(1)} ${yb.toFixed(1)}L${x.toFixed(1)} ${(y + 17).toFixed(1)}Z" fill="${cores[i % cores.length]}"/>`;
      }).join('');
      return svg('0 0 150 58', '<ellipse cx="75" cy="55" rx="62" ry="2.8" fill="rgba(0,0,0,.10)"/>' +
        '<path d="M12 4V56M138 4V56" stroke="#8d6133" stroke-width="4" stroke-linecap="round"/><circle cx="12" cy="4" r="3" fill="#ffd166"/><circle cx="138" cy="4" r="3" fill="#ffd166"/>' +
        '<path d="M12 8Q75 30 138 8" fill="none" stroke="#7b5129" stroke-width="1.6"/>' + liput);
    },
    lupa: () => svg('0 0 50 92', '<ellipse cx="25" cy="89" rx="14" ry="2.8" fill="rgba(0,0,0,.14)"/>' +
      '<path d="M25 50V86" stroke="#7b5129" stroke-width="7" stroke-linecap="round"/><path d="M25 58V80" stroke="#a5743f" stroke-width="2" stroke-linecap="round"/>' +
      '<circle cx="25" cy="28" r="21" fill="#dff1f4"/>' +
      '<circle cx="25" cy="30" r="11.5" fill="#f39a1e"/><circle cx="21.5" cy="26.5" r="3" fill="#ffd27a"/><path d="M26 18.5Q29 14.5 33.5 16.5" fill="none" stroke="#3f8f3a" stroke-width="2.4" stroke-linecap="round"/>' +
      '<circle cx="25" cy="28" r="21" fill="none" stroke="#8d6133" stroke-width="5"/><circle cx="25" cy="28" r="23.8" fill="none" stroke="#7b5129" stroke-width="1.2"/>' +
      '<path d="M12 18Q15 11 22 9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>'),
    'cartaz-jay': () => svg('0 0 60 92', '<ellipse cx="30" cy="89" rx="16" ry="2.8" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M30 56V88" stroke="#7b5129" stroke-width="6" stroke-linecap="round"/>' +
      '<rect x="5" y="3" width="50" height="58" rx="2" fill="#a5743f" stroke="#7b5129" stroke-width="2"/><rect x="9" y="7" width="42" height="50" fill="#fbfaf6"/>' +
      '<text x="30" y="17.5" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="7.2" font-weight="700" fill="#d62828">KADONNUT</text>' +
      // Jayn oma muotokuva havaijipaidassa (omistaja 20.10.2026: julisteen Jay näyttää Jaylta: ruskea tukka, sänki,
      // aurinkolasit); varapiirros, jos kuvitus.js puuttuu.
      (((window.Kuvitus && window.Kuvitus.muotokuva && window.Kuvitus.muotokuva('jay', { havaiji: true })) || '')
        .replace(/^<svg /, '<svg x="12" y="19" width="36" height="36" ') ||
      ('<path d="M17 54Q17 42 30 41Q43 42 43 54Z" fill="#2b2b2b"/>' +
      '<circle cx="30" cy="31" r="7.5" fill="#f1cfb4" stroke="#6b7c86" stroke-width="1"/><path d="M22.4 29Q22.8 21.5 30 21.5Q37.2 21.5 37.6 29Q34 25.5 30 25.5Q26 25.5 22.4 29Z" fill="#4e2a16"/>' +
      '<circle cx="27" cy="31" r="1.2" fill="#1d4fb8"/><circle cx="33" cy="31" r="1.2" fill="#1d4fb8"/><path d="M27 35Q30 37 33 35" fill="none" stroke="#8e2a50" stroke-width="1" stroke-linecap="round"/>')) +
      '<circle cx="9.5" cy="6.5" r="2" fill="#e2574c"/><circle cx="50.5" cy="6.5" r="2" fill="#e2574c"/>'),
    radinhos: () => svg('0 0 64 60', '<ellipse cx="32" cy="57" rx="27" ry="2.8" fill="rgba(0,0,0,.12)"/>' +
      '<rect x="5" y="47" width="54" height="8" rx="2" fill="#c48a4f"/><path d="M5 51H59" stroke="#8d6133" stroke-width="1.4"/>' +
      '<path d="M16 6V20M46 10V24" stroke="#2b2b2b" stroke-width="2.4" stroke-linecap="round"/>' +
      '<rect x="8" y="19" width="17" height="29" rx="3.5" fill="#e2574c"/><rect x="11" y="23" width="11" height="7" rx="1.2" fill="#8fd6dd"/><path d="M11 35H22M11 38.5H22M11 42H22" stroke="#a82f27" stroke-width="1.4" stroke-linecap="round"/><circle cx="22.5" cy="26.5" r="1.4" fill="#ffd166"/>' +
      '<rect x="38" y="23" width="17" height="25" rx="3.5" fill="#1d4fb8"/><rect x="41" y="27" width="11" height="7" rx="1.2" fill="#8fd6dd"/><path d="M41 39H52M41 42.5H52" stroke="#163d80" stroke-width="1.4" stroke-linecap="round"/><circle cx="52.5" cy="30.5" r="1.4" fill="#ffd166"/>' +
      '<path d="M26 14Q31 9 36 14M23 9Q31 1 39 9" fill="none" stroke="#5b6fa8" stroke-width="1.6" stroke-linecap="round"/>'),
    'maca-upa': () => svg('0 0 130 66', '<ellipse cx="65" cy="63" rx="56" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M22 40L20 56M108 40L110 56M22 48H108" stroke="#8a979f" stroke-width="3" stroke-linecap="round"/>' +
      '<circle cx="20" cy="59" r="4.6" fill="#2b2b2b"/><circle cx="20" cy="59" r="1.6" fill="#8a979f"/><circle cx="110" cy="59" r="4.6" fill="#2b2b2b"/><circle cx="110" cy="59" r="1.6" fill="#8a979f"/>' +
      '<rect x="8" y="34" width="114" height="7" rx="2" fill="#b8c4cc"/><rect x="6" y="22" width="118" height="14" rx="6" fill="#fbfaf6" stroke="#b8c4cc" stroke-width="1.6"/>' +
      '<rect x="10" y="15" width="30" height="10" rx="5" fill="#e3ebef" stroke="#b8c4cc" stroke-width="1.2"/>' +
      '<path d="M48 23H118V36H48Z" fill="#2a9d8f"/><path d="M48 29H118" stroke="#1f7a70" stroke-width="1.4"/><circle cx="100" cy="29.5" r="6" fill="#fbfaf6"/><path d="M100 25.5V33.5M96 29.5H104" stroke="#d62828" stroke-width="2.6" stroke-linecap="round"/>'),
    'panela-pedra': () => svg('0 0 80 72', '<g class="saari-hoyry"><circle cx="34" cy="13" r="5" fill="#fff" opacity=".8"/><circle cx="44" cy="7" r="4" fill="#fff" opacity=".7"/><circle cx="37" cy="2.5" r="3" fill="#fff" opacity=".6"/></g>' +
      '<ellipse cx="40" cy="69" rx="33" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<ellipse cx="18" cy="58" rx="11" ry="7" fill="#8a979f"/><ellipse cx="62" cy="58" rx="11" ry="7" fill="#6f7b84"/>' +
      '<path d="M18 66L58 58M20 58L62 66" stroke="#7b5129" stroke-width="4.4" stroke-linecap="round"/>' +
      '<g class="saari-liekki"><path d="M40 64C31 60 34 52 40 47C46 52 49 60 40 64Z" fill="#f39a1e"/><path d="M40 63C36.5 60 38 56 40 52C42 56 43.5 60 40 63Z" fill="#ffd166"/></g>' +
      '<path d="M15 33Q15 50 40 51Q65 50 65 33Z" fill="#6f7b84" stroke="#59646c" stroke-width="1.4"/><rect x="6" y="31" width="10" height="5.5" rx="2.7" fill="#59646c"/><rect x="64" y="31" width="10" height="5.5" rx="2.7" fill="#59646c"/>' +
      '<ellipse cx="40" cy="33" rx="25" ry="5.4" fill="#b8c4cc" stroke="#6f7b84" stroke-width="1.4"/><path d="M22 32Q22 20 40 20Q58 20 58 32Z" fill="#8a979f"/><circle cx="40" cy="17.5" r="3.4" fill="#6f7b84"/><path d="M26 28Q28 24 33 22.5" fill="none" stroke="#b8c4cc" stroke-width="1.8" stroke-linecap="round"/>'),
    bingo: () => {
      const bolas = [[27, 26, '#e2574c', '7', '#fff'], [40, 21, '#1d4fb8', '23', '#fff'], [45, 36, '#ffd166', '41', '#2b2b2b'], [29, 41, '#2a9d8f', '58', '#fff'], [22, 34, '#ff8fab', '12', '#2b2b2b']];
      return svg('0 0 72 84', '<ellipse cx="35" cy="81" rx="27" ry="3" fill="rgba(0,0,0,.12)"/>' +
        '<path d="M28 54L16 80M42 54L54 80" stroke="#7b5129" stroke-width="4" stroke-linecap="round"/><path d="M20 70H50" stroke="#8d6133" stroke-width="2.4"/>' +
        '<circle cx="35" cy="32" r="25" fill="#f4f8fa"/>' +
        '<ellipse cx="35" cy="32" rx="11" ry="25" fill="none" stroke="#8a979f" stroke-width="1.5"/><path d="M10 32H60M16 18H54M16 46H54" stroke="#8a979f" stroke-width="1.4"/>' +
        bolas.map(([x, y, v, n, c]) => `<circle cx="${x}" cy="${y}" r="5.8" fill="${v}"/><text x="${x}" y="${y + 2}" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="5.6" font-weight="700" fill="${c}">${n}</text>`).join('') +
        '<circle cx="35" cy="32" r="25" fill="none" stroke="#6f7b84" stroke-width="3"/>' +
        '<path d="M60 32H68" stroke="#6f7b84" stroke-width="3" stroke-linecap="round"/><circle cx="68" cy="32" r="3.2" fill="#e2574c"/>' +
        '<rect x="26" y="56" width="18" height="7" rx="2" fill="#8d6133"/><circle cx="35" cy="60" r="3.6" fill="#ffd166" stroke="#e0a050" stroke-width="1"/>');
    },
    'balde-sauna': () => svg('0 0 64 58', '<g class="saari-hoyry"><circle cx="20" cy="12" r="4" fill="#fff" opacity=".8"/><circle cx="27" cy="6" r="3.2" fill="#fff" opacity=".7"/></g>' +
      '<ellipse cx="30" cy="55" rx="25" ry="2.8" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M18 30Q11 19 14 9Q20 14 23 26Z" fill="#3f8f3a"/><path d="M25 30Q22 17 28 7Q32 17 29 30Z" fill="#2d6a4f"/><path d="M31 30Q35 20 43 14Q43 24 35 32Z" fill="#52a84a"/>' +
      '<path d="M36 36L58 9" stroke="#8d6133" stroke-width="3.2" stroke-linecap="round"/><circle cx="58.5" cy="8.5" r="2" fill="none" stroke="#8d6133" stroke-width="1.6"/>' +
      '<path d="M10 29H50L45 54H15Z" fill="#c48a4f"/><path d="M20 31V54M30 33V54M40 31V54" stroke="#a5743f" stroke-width="1.2"/><path d="M12.4 37H47.6M14 46H46" stroke="#7b5129" stroke-width="2.2"/>' +
      '<ellipse cx="30" cy="29" rx="20" ry="4.6" fill="#8fd6dd" stroke="#8d6133" stroke-width="2"/>'),
    mokki: () => svg('0 0 130 106', '<g class="saari-hoyry"><circle cx="86" cy="15" r="4.5" fill="#fff" opacity=".8"/><circle cx="92" cy="8" r="3.6" fill="#fff" opacity=".7"/><circle cx="84" cy="3.5" r="3" fill="#fff" opacity=".6"/></g>' +
      '<ellipse cx="62" cy="103" rx="56" ry="3.2" fill="rgba(0,0,0,.12)"/>' +
      '<rect x="78" y="20" width="11" height="22" fill="#8d2f27"/><rect x="76" y="18" width="15" height="4" fill="#fbfaf6"/>' +
      '<rect x="12" y="48" width="92" height="54" fill="#b8433a"/>' + [58, 68, 78, 88, 98].map(y => `<path d="M12 ${y}H104" stroke="#9a352d" stroke-width="1.2"/>`).join('') +
      '<rect x="12" y="48" width="5" height="54" fill="#fbfaf6"/><rect x="99" y="48" width="5" height="54" fill="#fbfaf6"/>' +
      '<path d="M4 52L58 17L112 52Z" fill="#555b63"/><path d="M12 49L58 22L104 49" fill="none" stroke="#3f444a" stroke-width="2"/><path d="M4 52L58 17L112 52" fill="none" stroke="#fbfaf6" stroke-width="2.4" stroke-linejoin="round"/>' +
      '<rect x="24" y="62" width="24" height="20" fill="#8fd6dd" stroke="#fbfaf6" stroke-width="3"/><path d="M36 62V82M24 72H48" stroke="#fbfaf6" stroke-width="2"/>' +
      '<rect x="68" y="66" width="20" height="36" fill="#fbfaf6"/><rect x="72" y="70" width="12" height="12" fill="#c8d4da"/><circle cx="84" cy="88" r="1.5" fill="#f2d21b"/><rect x="64" y="102" width="28" height="3" fill="#8a979f"/>' +
      '<path d="M116 102V40" stroke="#8a979f" stroke-width="2.4" stroke-linecap="round"/><circle cx="116" cy="39" r="2" fill="#ffd166"/>' +
      '<rect x="116" y="42" width="14" height="9" fill="#fbfaf6" stroke="#b8c4cc" stroke-width=".6"/><rect x="120" y="42" width="3.2" height="9" fill="#1d4fb8"/><rect x="116" y="45" width="14" height="3.2" fill="#1d4fb8"/>'),
    // Asut (vain kaupan kuvakkeina; saarella ne ovat hahmojen päällä).
    havaiana: () => svg('0 0 80 70', '<path d="M24 6L8 16L14 30L22 26V64H58V26L66 30L72 16L56 6Q48 14 40 14Q32 14 24 6Z" fill="#f39a1e"/>' +
      [[30, 30, '#fff'], [50, 24, '#ffd166'], [44, 44, '#e2574c'], [28, 54, '#ffd166'], [54, 52, '#fff'], [16, 20, '#fff'], [64, 20, '#e2574c']].map(([x, y, v]) => `<circle cx="${x}" cy="${y}" r="4" fill="${v}"/><circle cx="${x}" cy="${y}" r="1.4" fill="#e2574c"/>`).join('') +
      '<path d="M32 9L40 22L48 9" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="1.5"/>'),
    cruzeiro: () => svg('0 0 80 70', '<path d="M24 6L8 16L14 30L22 26V64H58V26L66 30L72 16L56 6Q48 14 40 14Q32 14 24 6Z" fill="#1d4fb8"/>' +
      '<path d="M32 8L40 20L48 8" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M11 22L17 18M69 22L63 18" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>' +
      [[30, 30, 2.6], [30, 44, 2.6], [25, 37, 2.2], [35, 38, 2.2], [33, 42, 1.6]].map(([x, y, r]) => {
        const p = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, s = i % 2 ? r * 0.45 : r; p.push(`${(x + s * Math.cos(a)).toFixed(1)} ${(y + s * Math.sin(a)).toFixed(1)}`); }
        return `<path d="M${p.join('L')}Z" fill="#fff"/>`;
      }).join('')),
    coracao: () => svg('8 25 84 30', window.Kuvitus && window.Kuvitus.aurinkolasit ? window.Kuvitus.aurinkolasit('sydan', 'saari-kauppa-s') : ''),
    'oculos-luta-k01': () => svg('8 25 84 30', window.Kuvitus && window.Kuvitus.aurinkolasit ? window.Kuvitus.aurinkolasit('visiiri', 'saari-kauppa-v') : ''),
    'oculos-luta-k02': () => svg('8 25 84 30', window.Kuvitus && window.Kuvitus.aurinkolasit ? window.Kuvitus.aurinkolasit('kolmio', 'saari-kauppa-k2') : ''),
    'oculos-luta-k03': () => svg('8 25 84 30', window.Kuvitus && window.Kuvitus.aurinkolasit ? window.Kuvitus.aurinkolasit('kapea', 'saari-kauppa-k3') : ''),
    'oculos-luta-k04': () => svg('8 25 84 30', window.Kuvitus && window.Kuvitus.aurinkolasit ? window.Kuvitus.aurinkolasit('avaruus', 'saari-kauppa-k4') : ''),
    espelho: () => svg('8 25 84 30', window.Kuvitus && window.Kuvitus.aurinkolasit ? window.Kuvitus.aurinkolasit('peili', 'saari-kauppa-p') : ''),
    pipos: () => svg('0 0 80 60', '<path d="M10 46Q8 12 40 10Q72 12 70 46Z" fill="#e2574c"/><path d="M22 18V40M31 13V40M40 12V40M49 13V40M58 18V40" stroke="#c13d33" stroke-width="1.8"/>' +
      '<rect x="6" y="38" width="68" height="14" rx="7" fill="#fbfaf6"/><circle cx="40" cy="9" r="7" fill="#f39a1e"/><path d="M40 3Q45 -1 49 2Q45 5 40 3Z" fill="#3f8f3a"/>'),
    // Luonnos 3: aloitusmaja, pomopalkinnot (Havanna-baari, 'Esburger-kioski, Cruzeiro-stadion) ja niiden tavarat.
    cabana: () => svg('0 0 110 104', '<ellipse cx="55" cy="101" rx="48" ry="3.5" fill="rgba(0,0,0,.12)"/>' +
      '<rect x="20" y="52" width="70" height="46" fill="#e9c48a"/>' + [28, 38, 48, 58, 68, 78].map(x => `<path d="M${x} 52V98" stroke="#c99a5c" stroke-width="1.6"/>`).join('') +
      '<rect x="46" y="66" width="18" height="32" rx="1.5" fill="#8d6133"/><rect x="26" y="62" width="14" height="12" rx="1.5" fill="#8fd6dd" stroke="#8d6133" stroke-width="2"/>' +
      '<path d="M6 58L55 14L104 58Z" fill="#d9a441"/>' + [16, 28, 40, 52, 64, 76, 88, 100].map(x => `<path d="M${x} ${58 - Math.max(0, 44 - Math.abs(55 - x) * 0.9)}L${x - 2} 62" stroke="#b57d3a" stroke-width="1.4"/>`).join('')),
    patinho: () => svg('0 0 40 34', '<ellipse cx="20" cy="24" rx="15" ry="8" fill="#ffd166"/><circle cx="27" cy="13" r="7" fill="#ffd166"/><path d="M33 13L39 15L33 17Z" fill="#f39a1e"/>' +
      '<circle cx="29" cy="11" r="1.3" fill="#2b2b2b"/><path d="M10 22Q16 18 22 22" fill="none" stroke="#f2c14e" stroke-width="2"/>'),
    espreguicadeira: () => svg('0 0 110 60', '<ellipse cx="55" cy="57" rx="50" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M14 40L96 40L104 14" fill="none" stroke="#8d6133" stroke-width="3"/><path d="M20 40L16 56M90 40L94 56" stroke="#8d6133" stroke-width="3"/>' +
      '<path d="M14 36H90L98 10L104 12L96 40H14Z" fill="#2a9d8f"/><path d="M30 36V40M46 36V40M62 36V40M78 36V40" stroke="#fff" stroke-width="5"/>'),
    havanna: () => svg('0 0 150 124', '<ellipse cx="75" cy="121" rx="70" ry="3.5" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M14 40V118M136 40V118" stroke="#7b5129" stroke-width="6"/><path d="M4 42L75 12L146 42Z" fill="#3f8f3a"/><path d="M4 42L75 22L146 42" fill="none" stroke="#2d6a4f" stroke-width="3"/>' +
      '<rect x="30" y="46" width="90" height="20" rx="4" fill="#2b2b2b"/><rect x="34" y="50" width="82" height="12" rx="3" fill="none" stroke="#ff47a8" stroke-width="2.4"/>' +
      '<circle cx="50" cy="56" r="3" fill="#ffd166"/><circle cx="75" cy="56" r="3" fill="#8fd6dd"/><circle cx="100" cy="56" r="3" fill="#ff8fab"/>' +
      '<path d="M22 72H128" stroke="#a5743f" stroke-width="3"/>' + [30, 44, 58, 92, 106, 120].map((x, i) => `<rect x="${x}" y="${74 + (i % 2) * 2}" width="6" height="${14 - (i % 2) * 2}" rx="2" fill="${['#e2574c', '#8fd6dd', '#ffd166'][i % 3]}"/>`).join('') +
      '<rect x="12" y="92" width="126" height="28" rx="3" fill="#c48a4f"/><path d="M12 100H138" stroke="#8d6133" stroke-width="2"/>' +
      '<path d="M68 82L82 82L77 92H73Z" fill="#f39a1e" stroke="#fff" stroke-width="1.2"/><path d="M78 82L84 74" stroke="#e2574c" stroke-width="1.6"/>'),
    banquinhos: () => svg('0 0 80 54', [16, 56].map(x => `<ellipse cx="${x}" cy="12" rx="12" ry="5" fill="#e2574c"/><path d="M${x} 16V50M${x - 8} 50H${x + 8}M${x - 6} 36H${x + 6}" stroke="#7b5129" stroke-width="3" stroke-linecap="round"/>`).join('')),
    abacaxi: () => svg('0 0 32 56', '<path d="M10 18Q8 6 12 2M16 18Q16 4 18 0M22 18Q24 6 21 2" fill="none" stroke="#3f8f3a" stroke-width="3" stroke-linecap="round"/>' +
      '<ellipse cx="16" cy="36" rx="12" ry="17" fill="#f2c14e"/><path d="M8 28L24 44M8 40L20 52M12 22L24 34" stroke="#d9a441" stroke-width="1.4"/><path d="M22 20L28 4" stroke="#e2574c" stroke-width="2"/>'),
    kioski: () => svg('0 0 132 122', '<ellipse cx="66" cy="119" rx="62" ry="3.5" fill="rgba(0,0,0,.12)"/>' +
      '<rect x="14" y="44" width="104" height="74" fill="#f4f1e8"/><rect x="14" y="44" width="104" height="10" fill="#1f4fa3"/>' +
      '<path d="M6 44L18 24H114L126 44Z" fill="#d62b2b"/>' + [18, 38, 58, 78, 98].map(x => `<path d="M${x} 24L${x - 4} 44H${x + 8}L${x + 12} 24Z" fill="#fbfaf6"/>`).join('') +
      '<rect x="24" y="60" width="84" height="26" rx="2" fill="#8fd6dd" stroke="#1f4fa3" stroke-width="2"/>' +
      '<ellipse cx="66" cy="8" rx="16" ry="7" fill="#e0a050"/><rect x="50" y="8" width="32" height="5" fill="#3f8f3a"/><rect x="50" y="13" width="32" height="5" rx="2" fill="#7b3f1a"/><ellipse cx="66" cy="20" rx="16" ry="4" fill="#e0a050"/>' +
      '<rect x="14" y="88" width="104" height="30" fill="#1f4fa3"/><path d="M14 96H118" stroke="#163d80" stroke-width="2"/>'),
    churrasqueira: () => svg('0 0 70 74', '<g class="saari-hoyry"><circle cx="28" cy="8" r="5" fill="#fff" opacity=".7"/><circle cx="38" cy="4" r="4" fill="#fff" opacity=".6"/></g>' +
      '<path d="M8 30H62Q60 50 35 52Q10 50 8 30Z" fill="#2b2b2b"/><path d="M10 28H60" stroke="#8a979f" stroke-width="3"/>' +
      '<path d="M18 50L12 72M52 50L58 72M35 52V72" stroke="#2b2b2b" stroke-width="3"/><rect x="18" y="20" width="14" height="7" rx="3" fill="#7b3f1a"/><rect x="38" y="21" width="14" height="6" rx="3" fill="#a0522d"/>'),
    piquenique: () => svg('0 0 120 62', '<ellipse cx="60" cy="59" rx="56" ry="3" fill="rgba(0,0,0,.12)"/>' +
      '<path d="M10 22H110L104 34H16Z" fill="#e2574c"/>' + [22, 38, 54, 70, 86, 102].map(x => `<rect x="${x - 4}" y="22" width="8" height="12" fill="#fbfaf6" opacity=".9"/>`).join('') +
      '<path d="M24 34L18 58M96 34L102 58M8 44H40M80 44H112" stroke="#8d6133" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="44" cy="16" r="6" fill="#f39a1e"/><rect x="62" y="10" width="14" height="10" rx="3" fill="#e0a050"/>'),
    bandeira: () => svg('0 0 70 150', '<path d="M8 148V6" stroke="#8a979f" stroke-width="4" stroke-linecap="round"/><circle cx="8" cy="5" r="4" fill="#ffd166"/>' +
      '<path d="M10 10Q40 4 66 12V56Q40 48 10 54Z" fill="#1d4fb8"/>' +
      [[30, 24, 3.6], [30, 42, 3.6], [22, 33, 3], [38, 33, 3], [35, 38, 2.2]].map(([x, y, r]) => tahtiSvg(x, y, r)).join('') +
      '<path d="M10 54Q40 48 66 56" fill="none" stroke="#fff" stroke-width="3"/>'),
    estadio: () => svg('0 0 230 124', '<path d="M10 100L40 46H200L224 100Z" fill="#3f9b4f"/>' +
      '<path d="M10 100L40 46H200L224 100Z" fill="none" stroke="#fff" stroke-width="2"/><path d="M118 46L117 100" stroke="#fff" stroke-width="2"/><ellipse cx="117" cy="72" rx="20" ry="9" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<path d="M188 58H212V86H200" fill="none" stroke="#fbfaf6" stroke-width="3"/><path d="M190 60L210 84M196 60L212 76M190 70L204 86" stroke="#fbfaf6" stroke-width=".8" opacity=".7"/>' +
      '<path d="M22 100V8" stroke="#8a979f" stroke-width="3"/><path d="M24 10Q60 0 96 12V50Q60 40 24 48Z" fill="#1d4fb8"/>' +
      [[54, 22, 3.2], [54, 38, 3.2], [46, 30, 2.6], [62, 30, 2.6], [59, 35, 2]].map(([x, y, r]) => tahtiSvg(x, y, r)).join('') +
      '<g class="saari-bola"><circle cx="150" cy="84" r="5" fill="#fff" stroke="#2b2b2b" stroke-width="1.2"/><path d="M147 82L150 80L153 82L152 86H148Z" fill="#2b2b2b"/></g>'),
    trofeu: () => svg('0 0 44 60', '<path d="M10 6H34V20Q34 34 22 36Q10 34 10 20Z" fill="#f2c14e"/><path d="M10 10H4Q4 22 12 24M34 10H40Q40 22 32 24" fill="none" stroke="#f2c14e" stroke-width="3"/>' +
      '<path d="M18 36H26V46H18Z" fill="#d9a441"/><rect x="10" y="46" width="24" height="10" rx="2" fill="#1d4fb8"/>' + tahtiSvg(22, 18, 5)),
    arquibancada: () => {
      let torcida = '';
      for (let r = 0; r < 3; r++) for (let x = 14 + r * 6; x < 196 - r * 6; x += 10) torcida += `<circle cx="${x}" cy="${20 + r * 16}" r="3.4" fill="${(x + r) % 3 ? '#1d4fb8' : '#fbfaf6'}"/>`;
      return svg('0 0 210 74', '<path d="M4 70H206L196 14H14Z" fill="#c9d3da"/><path d="M8 54H202M11 38H199M13 24H197" stroke="#8a979f" stroke-width="2"/>' + torcida);
    },
    bombons: () => svg('0 0 60 40', '<rect x="4" y="12" width="52" height="24" rx="3" fill="#7b3f1a"/><path d="M4 18H56" stroke="#e2574c" stroke-width="3"/>' +
      [[14, 26, '#c2185b'], [26, 26, '#e2574c'], [38, 26, '#d9768f'], [50, 26, '#c2185b']].map(([x, y, v]) => `<circle cx="${x}" cy="${y}" r="5" fill="#5a2d14"/><circle cx="${x}" cy="${y}" r="2.2" fill="${v}"/>`).join('') +
      '<path d="M22 12Q30 2 38 12" fill="none" stroke="#e2574c" stroke-width="2.4"/>'),
    lahja: () => svg('0 0 60 52', '<path d="M4 42Q30 50 56 42" fill="none" stroke="#fff" stroke-width="1.6" opacity=".8"/>' +
      '<rect x="12" y="16" width="36" height="26" rx="2" fill="#c48a4f"/><path d="M12 24H48M12 34H48" stroke="#8d6133" stroke-width="1.6"/><path d="M30 16V42" stroke="#8d6133" stroke-width="1.6"/>' +
      '<circle cx="22" cy="12" r="6" fill="#f39a1e"/><circle cx="34" cy="10" r="6" fill="#f39a1e"/><circle cx="28" cy="6" r="5" fill="#ffb347"/><path d="M34 4L37 1" stroke="#3f8f3a" stroke-width="1.6"/>')
  };

  /* ---------- kauppa: tavarat (luonnos 3) ----------
     kat: praia | roupa | agua | grande | cruzeiro | premio. avaa: { mitali: 'tNN' } (oppitunnin mitali, vähintään
     pronssi), { pomo: 'kNN' } (pomovoitto) tai { esine: 'id' } (toinen tavara omistettuna). palkinto: 'kNN' = pomon
     palkinto (saadaan voitosta ilmaiseksi; estadio myös ostettavissa). sana: [leksikon tunniste, merkitys].
     veste: asu hahmoille. paikka: [x %, y % alareuna] kerroksessa, leveys % saaren leveydestä; alvo: tavara
     piirretään toisen (pomo.js:n porealtaan) sisään. lugares: paikat, joihin Capivara (k) tai Peixe-boi (m) voi
     mennä: { h: 'km', x, y } % tavaran laatikosta, fala = repliikki napautukselle. toque: napautuksen efekti.
     falas: [puhuja, repliikki]; {sana} = suomen sana (kupla), {sana|tunniste} jos muoto ≠ tunniste. */
  const KATEGORIAT = [
    ['praia', 'Praia'],
    ['roupa', 'Roupas e óculos'],
    ['agua', 'Na água'],
    ['grande', 'Grandes sonhos'],
    ['cruzeiro', 'Cruzeiro'],
    ['spa', 'Spa (depois da luta final da revisão 1)'],
    ['bar', 'Bar e comida (revisões 2 e 3)']
  ];
  // Pomopalkinnot (kat 'premio') ovat ainutkertaisia: eivät näy kaupassa eivätkä ole ostettavissa (omistaja 17.10.2026).
  const TAVARAT = [
    // Aloitus: rannalle heti ensimmäisillä mandariineilla (omistaja: ”annetaan”, mutta ne ostetaan itse).
    { id: 'coqueiro', nimi: 'Coqueiro', kat: 'praia', hinta: 10, sana: ['iso', 'grande'], paikka: [5, 78], leveys: 13,
      kuvaus: 'Sombra e cocos, grátis para sempre.', lugares: [{ h: 'k', x: 44, y: 82, fala: 'Na sombra do coqueiro eu penso melhor. Em quê eu estava pensando mesmo?' }],
      falas: [['Peixe-boi', 'Grande em finlandês é {iso}. Um coqueiro {iso}. Sombra grátis. Vou ficar embaixo dele uns três anos.'],
        ['Capivara', 'Coqueiro novo! Eu plantei. Quer dizer, eu comprei. Quer dizer: você comprou. Obrigado!']] },
    { id: 'rede', nimi: 'Rede', kat: 'praia', hinta: 15, sana: ['nukkua', 'dormir'], paikka: [70, 69], leveys: 20,
      kuvaus: 'Para cochilar. Quem chegar primeiro, deita.',
      lugares: [{ h: 'km', x: 50, y: 40, fala: 'Zzz… Dormir em finlandês é {nukkua}. Zzz…' }],
      falas: [['Peixe-boi', 'Dormir em finlandês é {nukkua}. Minha palavra finlandesa favorita. Não me acordem até a lição 6.'],
        ['Capivara', 'A rede é dos dois. Eu deito de manhã, ele deita de tarde. Ou era o contrário? Esqueci.']] },
    { id: 'cabana', nimi: 'Cabana de palha', kat: 'praia', conquistas: true, lahja: { mitali: 't00' }, sana: ['talo', 'casa'], paikka: [27, 53], leveys: 20,
      lahjaFala: ['Capivara', 'Você terminou a lição 0! Para comemorar, o Peixe-boi e eu construímos uma cabana. Quer dizer: eu construí, ele supervisionou dormindo. Casa em finlandês é {talo}. Bem-vinda à ilha!'],
      kuvaus: 'A primeira casinha da ilha: presente da lição 0.', lugares: [{ h: 'k', x: 64, y: 70, fala: 'Lar, doce lar. Casa em finlandês é {talo}. Ou é {koti}? As duas! O Jay também sempre confunde.' }],
      falas: [['Capivara', 'Casa em finlandês é {talo}. Nossa primeira {talo}! Eu já perdi a chave duas vezes. Não tem porta com chave. Mesmo assim.'],
        ['Peixe-boi', 'Uma casa. Eu moro na água, mas gosto de visitar. De longe.']] },
    { id: 'flamingo', nimi: 'Flamingo', kat: 'praia', hinta: 15, sana: ['kaunis', 'bonito'], paikka: [84, 81], leveys: 6,
      kuvaus: 'Fica numa perna só. Cada dia numa pose.',
      falas: [['Capivara', 'Um flamingo! Bonito em finlandês é {kaunis}. {Kaunis|kaunis}. Vou repetir até ele aprender também. {Kaunis|kaunis}.'],
        ['Peixe-boi', 'Ele fica numa perna só o dia inteiro. Finalmente alguém que entende de descanso.']] },
    { id: 'tochas', nimi: 'Tochas tiki', kat: 'praia', hinta: 20, sana: ['tuli', 'fogo'], paikka: [45, 75], leveys: 9,
      kuvaus: 'Luz para as noites na ilha.',
      falas: [['Capivara', 'Fogo em finlandês é {tuli|tuli}. Agora a ilha tem luz à noite e eu acho o caminho de casa. Quase sempre.'],
        ['Peixe-boi', 'Tochas. Bonitas. Fiquem longe da minha rede, por favor.']] },
    { id: 'bombons', nimi: 'Bombons da Maia', kat: 'praia', hinta: 25, sana: ['suklaa', 'chocolate'], paikka: [63, 89], leveys: 5, avaa: { mitali: 't03' },
      kuvaus: 'Chocolate com recheio azedinho: framboesa, morango, ruibarbo.', toque: 'pulo',
      falas: [['Capivara', 'Chocolate em finlandês é {suklaa}. Bombons da Maia: framboesa, morango e ruibarbo. Azedinho! Escuro, nunca: regra da Maia.'],
        ['Peixe-boi', 'Comi o de ruibarbo. Azedo. Comi outro para ter certeza. Ainda azedo. Vou ter de comer mais um.']] },
    { id: 'boombox', nimi: 'Boombox', kat: 'praia', hinta: 40, sana: ['kuunnella', 'escutar'], paikka: [57, 80], leveys: 8, avaa: { mitali: 't00' },
      kuvaus: 'Música na ilha. Traz um DJ junto: o WC+.',
      falas: [['Capivara', 'Escutar em finlandês é {kuunnella}. Música na ilha! E o WC+ veio junto, com o reggae dele.'],
        ['Peixe-boi', 'Toca aquela lenta. Não, mais lenta. Perfeito: agora está parada.']] },
    { id: 'espreguicadeira', nimi: 'Espreguiçadeira do spa', kat: 'spa', hinta: 50, sana: ['lämmin', 'quente'], paikka: [33, 87], leveys: 11, avaa: { pomo: 'k01' },
      kuvaus: 'Do Spa do Capivara para a areia.', lugares: [{ h: 'k', x: 55, y: 30, fala: 'Sol {lämmin}, quentinho. Spa é isso: deitar e esquecer. Eu já esqueci até o que ia esquecer.' }],
      falas: [['Capivara', 'Quente em finlandês é {lämmin}. Sol {lämmin}, areia {lämmin}, Capivara feliz.']] },
    { id: 'havaiana', nimi: 'Camisa havaiana do Capivara', kat: 'roupa', hinta: 20, sana: ['kukka', 'flor'], veste: { kertoja: { paita: 'havaiji' } },
      kuvaus: 'Cor de mandarina. O Peixe-boi já tem a dele.',
      falas: [['Capivara', 'Flor em finlandês é {kukka}. {Kukka, kukka, kukka|kukka}: tem flor na camisa toda. Combina com a minha cabeça.'],
        ['Peixe-boi', 'Bem-vinda ao clube. Camisa havaiana não é estilo. É filosofia de vida.']] },
    { id: 'pipos', nimi: 'Pipos finlandeses', kat: 'roupa', hinta: 25, sana: ['pipo', 'gorro de lã'], veste: { kertoja: { pipo: true }, manaatti: { pipo: true } }, avaa: { mitali: 't00' },
      kuvaus: 'Para visitar a Maia em novembro.',
      falas: [['Capivara', 'Gorro de lã em finlandês é {pipo}. Para quando a gente visitar a Maia em novembro. A mandarina fica por cima. Prioridades.'],
        ['Peixe-boi', 'Aqui faz 34 graus. Eu vou usar mesmo assim. Por solidariedade.']] },
    { id: 'coracao', nimi: 'Óculos de coração (Capivara)', kat: 'roupa', hinta: 35, sana: ['punainen', 'vermelho'], veste: { kertoja: { lasit: 'sydan' } }, avaa: { mitali: 't01' },
      kuvaus: 'Os óculos de sempre descansam um pouco.',
      falas: [['Capivara', 'Vermelho em finlandês é {punainen}. Agora eu vejo tudo com amor. E um pouco vermelho.'],
        ['Peixe-boi', 'Ela está olhando pra mim com corações. Vou fingir que estou dormindo. Fácil.']] },
    { id: 'espelho', nimi: 'Óculos espelhados (Peixe-boi)', kat: 'roupa', hinta: 35, sana: ['hieno', 'ótimo'], veste: { manaatti: { lasit: 'peili' } }, avaa: { mitali: 't02' },
      kuvaus: 'Quem olha para ele vê a si mesmo.',
      falas: [['Peixe-boi', 'Ótimo em finlandês é {hieno}. Quando o Capivara olha pra mim, ele se vê. Ele sempre esquece que sou eu.'],
        ['Capivara', 'Que capivara bonita nos óculos dele! Ah. Sou eu.']] },
    { id: 'algas', nimi: 'Jardim de algas do Peixe-boi', kat: 'agua', hinta: 45, sana: ['vihreä', 'verde'], paikka: [9, 35], leveys: 12, avaa: { mitali: 't01' },
      kuvaus: 'Lanche verde e um lugar novo para o Peixe-boi.', lugares: [{ h: 'm', x: 50, y: 52, fala: 'Estou no jardim. Comendo. Ou dormindo. Dá no mesmo, se for devagar.' }],
      falas: [['Peixe-boi', 'Verde em finlandês é {vihreä}. Um jardim só meu. Eu planto, eu como, eu durmo. Ciclo perfeito.'],
        ['Capivara', 'Ele chama isso de jardim. Eu chamo de geladeira dele.']] },
    { id: 'canoa', nimi: 'Canoa', kat: 'agua', hinta: 65, sana: ['vesi', 'água'], paikka: [50, 27], leveys: 15, avaa: { mitali: 't02' },
      kuvaus: 'Para passear pelo rio. Ou para cochilar boiando.',
      lugares: [{ h: 'k', x: 40, y: 10, fala: 'Remando! Para onde eu estava indo? Ah, tanto faz: a água, {vesi}, leva.' }, { h: 'm', x: 82, y: 40, fala: 'Eu empurro a canoa. Devagar. Ela que espere.' }],
      falas: [['Capivara', 'Água em finlandês é {vesi}. Agora dá pra passear pelo rio! Eu remo, o Peixe-boi orienta. De olhos fechados.'],
        ['Peixe-boi', 'Uma canoa. Eu nado ao lado. Devagar. Ela que espere.']] },
    { id: 'pier', nimi: 'Píer de madeira', kat: 'agua', hinta: 80, sana: ['ranta', 'praia'], paikka: [80, 36], leveys: 20, avaa: { mitali: 't03' },
      kuvaus: 'As visitas chegam por aqui. Às vezes um jornalista.', lugares: [{ h: 'm', x: 30, y: 78, fala: 'Debaixo do píer tem sombra e ninguém me pede nada. Paraíso.' }],
      falas: [['Peixe-boi', 'Praia em finlandês é {ranta}. As visitas descem do píer direto na {ranta}. Eu fico embaixo, na sombra.'],
        ['Capivara', 'Um píer! Agora a Maia pode vir nos visitar. De canoa. Ou nadando. Eu já esqueci como ela veio da outra vez.']] },
    { id: 'mehubar', nimi: 'Barraca de suco', kat: 'grande', hinta: 90, sana: ['mehu', 'suco'], paikka: [39, 47], leveys: 12, avaa: { mitali: 't04' },
      kuvaus: 'Suco de mandarina, claro. A Moara vem ajudar.', lugares: [{ h: 'k', x: 50, y: 62, fala: 'Mais um {mehu|mehu}, por favor. Já tomei quantos? Não lembro. Então é o primeiro.' }],
      falas: [['Capivara', 'Suco em finlandês é {mehu}. {Mehu|mehu} de mandarina, claro. Eu provo tudo primeiro. Duas vezes, porque esqueço que provei.'],
        ['Peixe-boi', 'Um suco com canudinho comprido. Assim eu bebo sem levantar.']] },
    { id: 'mandarineira', nimi: 'Mandarineira', kat: 'grande', hinta: 100, sana: ['hyvä', 'bom'], paikka: [15, 56], leveys: 13, avaa: { mitali: 't03' },
      kuvaus: 'Dá mandarinas de presente todo dia: +2 🍊 no presente do dia.', lugares: [{ h: 'k', x: 50, y: 88, fala: 'Debaixo da minha árvore. Cai uma mandarina, eu como. Cai outra, eu como. Ciência.' }],
      falas: [['Capivara', 'Bom em finlandês é {hyvä}. Minha própria mandarineira! Toda manhã uma mandarina nova. Muito {hyvä}.'],
        ['Peixe-boi', 'Uma árvore que dá comida sozinha. Finalmente uma árvore que trabalha como eu: sem pressa.']] },
    { id: 'disco', nimi: 'Globo de discoteca', kat: 'grande', hinta: 120, sana: ['hauska', 'divertido'], paikka: [57, 13], leveys: 7, keskella: true, avaa: { pomo: 'k01' },
      kuvaus: 'Para a festa que não acaba. O Party-Boy Lisko aparece.', toque: 'brilho',
      falas: [['Capivara', 'Divertido em finlandês é {hauska}. Festa {hauska} todo dia! A Partitiivipeto não foi convidada.'],
        ['Peixe-boi', 'Luzes girando. Eu fico parado e o mundo dança por mim.']] },
    { id: 'sauna', nimi: 'Sauna na Amazônia', kat: 'grande', hinta: 160, sana: ['lämmin', 'quente'], paikka: [91, 59], leveys: 16, avaa: { mitali: 't04' },
      kuvaus: 'Uma sauna finlandesa de verdade, no meio do rio.', lugares: [{ h: 'k', x: 24, y: 80, fala: 'Saindo da sauna! {lämmin}, muito {lämmin}. Agora o pulo no rio. Onde fica o rio? Ah, em todo lugar.' }],
      falas: [['Capivara', 'Quente em finlandês é {lämmin}. Uma sauna finlandesa no meio da Amazônia! Lá fora já faz 35 graus, mas tradição é tradição.'],
        ['Peixe-boi', 'Eu entro só na parte que vem depois: o rio frio. Ele já está aqui. Pronto.']] },
    // Erä 1 (oppitunnit 6–10): kauppatavarat; yhteensä 150 🍊 oppituntia kohden.
    { id: 'estante', nimi: 'Estante de livros da cabana', kat: 'praia', hinta: 70, sana: ['kirja', 'livro'], paikka: [38, 60], leveys: 7, avaa: { mitali: 't06' },
      kuvaus: 'Livros da biblioteca, na sombra da cabana. Prazo para devolver: quatro semanas, se alguém lembrar.', toque: 'livro',
      lugares: [{ h: 'k', x: 145, y: 85, fala: 'Lendo na estante. Li a mesma página cinco vezes. Foi uma surpresa todas as vezes. Livro em finlandês é {kirja}.' }],
      falas: [['Capivara', 'Livro em finlandês é {kirja}. Uma estante cheia! Eu li todos. Quer dizer: abri todos. Quer dizer: olhei a capa de todos.'],
        ['Peixe-boi', 'Livros. Muitas palavras. Eu leio devagar: uma página por maré.']] },
    { id: 'pedras', nimi: 'Pedras de Kuusamo', kat: 'agua', hinta: 80, sana: ['kivi', 'pedra'], paikka: [17, 39], leveys: 10, avaa: { mitali: 't06' },
      kuvaus: 'Pedras vermelhas e cinzentas do norte. A Maia e o Jay reconhecem todas. O Capivara reconhece “pedra”.', toque: 'brilho',
      lugares: [{ h: 'k', x: 62, y: 10, fala: 'No topo da pedra mais alta! Que vista. Como foi que eu subi? Esqueci. E como vou descer? Também.' },
        { h: 'm', x: 18, y: 70, fala: 'Água rasa, pedra lisa. Eu fico aqui e observo. Geologia é isso: ficar parado e olhar com atenção.' }],
      falas: [['Capivara', 'Pedra em finlandês é {kivi}. Trazidas de Kuusamo pela Maia e pelo Jay, lá do {tunturi}. Esta é vermelha ou cinza? Pergunte ao Jay. Ele sabe. Ele sempre sabe.'],
        ['Peixe-boi', 'Pedras. Elas ficam paradas. Eu respeito.']] },
    { id: 'mesa-trabalho', nimi: 'Mesa de trabalho do Peixe-boi', kat: 'agua', hinta: 90, sana: ['tietokone', 'computador'], paikka: [68, 41], leveys: 14, avaa: { mitali: 't07' },
      kuvaus: 'Mesa flutuante com computador e caneca. Expediente: quando ele acordar.', toque: 'ping',
      lugares: [{ h: 'm', x: 30, y: 62, fala: 'Estou no escritório, em reunião comigo mesmo. Reunião em finlandês é {kokous}. Pauta: cochilar. Aprovada por unanimidade.' }],
      falas: [['Peixe-boi', 'Computador em finlandês é {tietokone}. Minha mesa de trabalho! Eu sento, abro o {tietokone} e o trabalho acontece. Eu só acompanho.'],
        ['Capivara', 'O Peixe-boi no escritório! Já são dez minutos de trabalho. De olhos fechados, mas é trabalho.']] },
    { id: 'cafeteira', nimi: 'Cafeteira da ilha', kat: 'praia', hinta: 60, sana: ['kahvitauko', 'pausa para o café'], paikka: [60, 66], leveys: 7, avaa: { mitali: 't07' },
      kuvaus: 'Café quente para a pausa. O Jay pede o terceiro antes do primeiro.', toque: 'kahvi',
      lugares: [{ h: 'k', x: 50, y: 55, fala: 'Pausa para o café! A quarta de hoje. Ou a primeira? Esqueci. Então é a primeira, de novo.' }],
      falas: [['Capivara', 'Pausa para o café em finlandês é {kahvitauko}. Agora a ilha tem {kahvitauko} a qualquer hora. O Jay disse que a pausa dele já começou. Ele nem trabalha aqui.'],
        ['Peixe-boi', 'Café. Eu bebo um gole e cochilo meia hora. É o contrário do que o café deveria fazer. Eu sou assim.']] },
    { id: 'cavalete', nimi: 'Cavalete da Maia', kat: 'grande', hinta: 90, sana: ['taulu', 'quadro'], paikka: [23, 78], leveys: 8, avaa: { mitali: 't08' },
      kuvaus: 'O cavalete da Maia, com a série “Feliz como um porquinho”. O sonho dela: pintar em tempo integral.', toque: 'tinta',
      lugares: [{ h: 'k', x: 108, y: 80, fala: 'Posando para a Maia. Ela pediu para eu ficar parado. Isso eu sei fazer! O que ela pediu mesmo? Ah, ficar parado.' }],
      falas: [['Capivara', 'Quadro em finlandês é {taulu}. O cavalete da Maia já tem um porquinho feliz. Eu pedi um capivara feliz. Ela disse: depois. Eu já esqueci o pedido.'],
        ['Peixe-boi', 'A Maia pinta, eu observo. Divisão de trabalho justa. A minha parte já está cumprida.']] },
    { id: 'porquinho', nimi: 'Porquinho feliz', kat: 'praia', hinta: 60, sana: ['possu', 'porquinho'], paikka: [30, 74], leveys: 6, avaa: { mitali: 't08' },
      kuvaus: 'O modelo da série da Maia: come, dorme e sorri.', toque: 'porco',
      falas: [['Capivara', 'Porquinho em finlandês é {possu}. Feliz como um {possu}! Ele posou para a série inteira e não pediu nada. Um modelo perfeito, parecido com o Peixe-boi.'],
        ['Peixe-boi', 'Ele é feliz porque come, dorme e não paga {vuokra}. Eu me identifico.']] },
    { id: 'guarda-chuva', nimi: 'Guarda-chuva gigante', kat: 'praia', hinta: 70, sana: ['sateenvarjo', 'guarda-chuva'], paikka: [92, 95], leveys: 13, avaa: { mitali: 't09' },
      kuvaus: 'Para a chuva de Helsinque. Na ilha serve de sombra.', toque: 'chuva',
      lugares: [{ h: 'k', x: 50, y: 78, fala: 'Debaixo do guarda-chuva gigante. Não está chovendo. Eu fico mesmo assim: já esqueci por que entrei.' }],
      falas: [['Capivara', 'Guarda-chuva em finlandês é {sateenvarjo}. Gigante! Em dezembro Helsinque tem neve e Belo Horizonte tem chuva morna. Eu prefiro a morna. Se eu lembrar qual era.'],
        ['Peixe-boi', 'Um guarda-chuva para quem vive na água. Mas gostei: dá sombra.']] },
    { id: 'boneco-areia', nimi: 'Boneco de neve de areia', kat: 'praia', hinta: 80, sana: ['lumi', 'neve'], paikka: [68, 96], leveys: 8, avaa: { mitali: 't09' },
      kuvaus: 'Neve não tem na ilha, areia tem. Gorro, cachecol e nariz de mandarina.', toque: 'neve',
      lugares: [{ h: 'k', x: 88, y: 72, fala: 'Abraçando o boneco de neve de areia. Ele é quente. Um boneco de neve quente. Isso não deveria acontecer.' }],
      falas: [['Capivara', 'Neve em finlandês é {lumi}. Um boneco de {lumi} feito de areia! A Maia disse que em Helsinque ele seria gelado e branco. Eu não entendi. O boneco também não.'],
        ['Peixe-boi', 'Ele não derrete e não anda. Combina comigo. Só falta um cachecol para mim.']] },
    { id: 'aviao', nimi: 'Avião de papel gigante', kat: 'agua', hinta: 90, sana: ['lentokone', 'avião'], paikka: [84, 27], leveys: 16, avaa: { mitali: 't10' },
      kuvaus: 'Voa pouco e flutua bem. Partida às sete e vinte, se o Capivara lembrar o horário.', toque: 'voo',
      lugares: [{ h: 'm', x: 42, y: 52, fala: 'Eu sou o piloto. Decolagem prevista: quando o rio mandar. Avião em finlandês é {lentokone}. Cinto de segurança: a água.' },
        { h: 'k', x: 72, y: 30, fala: 'Copiloto! Para onde vamos? Esqueci o destino. O piloto também. Vamos para algum lugar.' }],
      falas: [['Capivara', 'Avião em finlandês é {lentokone}. Um {lentokone} gigante, de papel! Ele flutua e eu não preciso de passaporte. Eu já esqueci onde guardei o meu.'],
        ['Peixe-boi', 'Partida às sete e vinte, disse o Capivara. Que dia? Que mês? Ele não lembra. Eu aguardo no portão. Boiando.']] },
    { id: 'relogio-sol', nimi: 'Relógio de sol', kat: 'praia', hinta: 60, sana: ['kello', 'relógio'], paikka: [49, 90], leveys: 7, avaa: { mitali: 't10' },
      kuvaus: 'O único relógio que nunca atrasa. Só não funciona de noite.', toque: 'hora',
      lugares: [{ h: 'k', x: 85, y: 65, fala: 'Perguntei as horas ao relógio de sol. Respondeu: de dia. Perguntei de novo: continua de dia. Educado, mas pouco informativo.' }],
      falas: [['Capivara', 'Relógio em finlandês é {kello}. O relógio de sol marca a hora pela sombra. Agora a ilha sempre sabe que horas são: de dia.'],
        ['Peixe-boi', 'A minha sombra marca sempre a mesma hora: a de descansar. Eu já sou um relógio.']] },
    // Erä 2 (oppitunnit 11–15): kauppatavarat; yhteensä 150 🍊 oppituntia kohden.
    { id: 'barraca-queijos', nimi: 'Barraca de queijos', kat: 'grande', hinta: 90, sana: ['juusto', 'queijo'], paikka: [41.5, 98], leveys: 11, avaa: { mitali: 't11' },
      kuvaus: 'Queijo de Minas, como no Mercado Central. A Moara escolhe, o Capivara prova (duas vezes).', toque: 'queijo',
      lugares: [{ h: 'k', x: -8, y: 62, fala: 'Fiscal de queijo, ao lado do balcão! Cliente: “Quanto custa?” Eu: “Esqueci o preço.” Cliente feliz, eu também. Queijo em finlandês é {juusto}.' }],
      falas: [['Capivara', 'Queijo em finlandês é {juusto}. Uma barraca inteira, como no Mercado Central! Eu provo cada fatia como se fosse a primeira. E é: esqueci a anterior.'],
        ['Peixe-boi', 'Queijo: macio, cheiroso e parado. Comida que combina comigo.']] },
    { id: 'bananeira', nimi: 'Bananeira com cachos', kat: 'praia', hinta: 60, sana: ['banaani', 'banana'], paikka: [5, 53], leveys: 10, avaa: { mitali: 't11' },
      kuvaus: 'A banana do Brasil é a melhor do mundo, disse o Jay, de boca cheia.', toque: 'banana',
      lugares: [{ h: 'k', x: 95, y: 80, fala: 'Debaixo da bananeira, esperando um cacho cair. Já esperei duas horas. Ou dois minutos. Banana em finlandês é {banaani}.' }],
      falas: [['Capivara', 'Banana em finlandês é {banaani}. O Jay disse, sussurrando, que a nossa é maior, mais barata e melhor que a da Finlândia. Ele estava de boca cheia: eu acredito.'],
        ['Peixe-boi', 'Uma árvore que dá comida. Eu não subo, eu espero cair. Estratégia testada.']] },
    { id: 'banca', nimi: 'Banca de artesanato da Maia', kat: 'grande', hinta: 90, sana: ['keramiikka', 'cerâmica'], paikka: [79, 55], leveys: 14, avaa: { mitali: 't12' },
      kuvaus: 'Quadros pequenos e cerâmica, como na Feira Hippie de domingo. Preço em reais, sorriso de graça.', toque: 'venda',
      lugares: [{ h: 'k', x: -10, y: 62, fala: 'Vendedor oficial da banca! Cliente: “Quanto é o vaso?” Eu: “De graça.” A Maia: “Capivara!” Esqueci que não era de graça. Vaso em finlandês é {maljakko}.' }],
      falas: [['Capivara', 'Cerâmica em finlandês é {keramiikka}. A banca da Maia: quadrinhos, xícaras e vasos. A Maia faz, o Jay atende em finlandês e eu cuido do troco. Quer dizer: perco o troco.'],
        ['Peixe-boi', 'Todo mundo trabalhando na banca. Eu supervisiono. De longe. De olhos fechados.']] },
    { id: 'provador', nimi: 'Provador da Savassi', kat: 'praia', hinta: 60, sana: ['sovituskoppi', 'provador'], paikka: [82, 68], leveys: 6, avaa: { mitali: 't12' },
      kuvaus: 'Cortina, espelho e roupa para o calor. O Jay entrou de casaco e saiu de bermuda.', toque: 'provar',
      lugares: [{ h: 'k', x: -60, y: 72, fala: 'Esperando a minha vez no provador. Já esperei duas vezes. Ou é a mesma vez? O espelho diz que fico ótimo de qualquer jeito. Provador em finlandês é {sovituskoppi}.' }],
      falas: [['Capivara', 'Provador em finlandês é {sovituskoppi}. Palavra comprida: dá tempo de trocar de roupa duas vezes. O Jay entrou de casaco e saiu de bermuda: são 32 graus.'],
        ['Peixe-boi', 'Cortina, espelho e sombra. Eu aprovo. Mas trocar de roupa dá trabalho. Fico com a camisa de sempre.']] },
    { id: 'caixa-correio', nimi: 'Caixa de correio do Anderson', kat: 'praia', hinta: 70, sana: ['posti', 'correio'], paikka: [5, 98], leveys: 5, avaa: { mitali: 't13' },
      kuvaus: 'Amarela e azul, com bandeirinha. O Anderson entrega a correspondência da rua toda manhã, às oito em ponto.', toque: 'carta',
      lugares: [{ h: 'k', x: 150, y: 50, fala: 'Esperando o carteiro. Que é o Anderson. Que chega às oito. Todo dia. Correio em finlandês é {posti}. Eu espero uma carta há três dias. Ninguém sabe o meu endereço. Nem eu.' }],
      falas: [['Capivara', 'Correio em finlandês é {posti}. A caixa do Anderson! Ele entrega a {posti} às oito da manhã, de boné e muito sério. Trabalho é trabalho.'],
        ['Peixe-boi', 'Chegou uma carta para o Capivara. Eu avisei. Amanhã. Com calma.']] },
    { id: 'tapete', nimi: 'Tapete de pilates do Walker', kat: 'praia', hinta: 80, sana: ['pilates', 'pilates'], paikka: [79, 98], leveys: 13, avaa: { mitali: 't13' },
      kuvaus: 'O Walker faz pilates às sete da manhã. Aqui o tapete fica o dia todo: ninguém tem pressa.', toque: 'alongar',
      lugares: [{ h: 'k', x: 35, y: -15, fala: 'Pilates! Estou alongando. Ou deitado. Para o Peixe-boi é a mesma coisa. Pilates em finlandês é {pilates}.' }],
      falas: [['Capivara', 'Pilates em finlandês é {pilates}: quase igual! O Walker faz às sete da manhã, com bola e garrafinha. Eu faço quando lembro. Já fiz hoje? Vou fazer de novo, por segurança.'],
        ['Peixe-boi', 'Um tapete no chão seco. Eu deitaria nele, mas é terra. Fico olhando: olhar também é um tipo de pilates.']] },
    { id: 'mapa', nimi: 'Mapa do tesouro da ilha', kat: 'praia', hinta: 60, sana: ['kartta', 'mapa'], paikka: [56, 98], leveys: 8, avaa: { mitali: 't14' },
      kuvaus: 'O X marca o lugar. A Maia diz: “Siga em frente e vire à direita.” O Capivara já virou à esquerda.', toque: 'mapa',
      lugares: [{ h: 'k', x: 150, y: 74, fala: 'Estudando o mapa. O X é aqui. Ou aqui. Eu estou aqui? Mapa em finlandês é {kartta}. Estou perdido, logo estou no mapa.' }],
      falas: [['Capivara', 'Mapa em finlandês é {kartta}. O mapa do tesouro da ilha! Tem um X. Eu cavei no X cinco vezes e só achei areia. Ou achei alguma coisa e esqueci.'],
        ['Peixe-boi', 'Um mapa. Em frente, direita, esquerda. Eu vou para onde a maré for. Isso está no mapa? Não. Funciona mesmo assim.']] },
    { id: 'chafariz', nimi: 'Chafariz da Praça da Liberdade', kat: 'agua', hinta: 90, sana: ['suihkulähde', 'chafariz'], paikka: [37, 30], leveys: 13, avaa: { mitali: 't14' },
      kuvaus: 'Água para cima, água para baixo. Na Praça da Liberdade tem palmeiras; aqui tem o Peixe-boi.', toque: 'pulo',
      lugares: [{ h: 'm', x: 50, y: 74, fala: 'No chafariz! A água sobe, desce e eu fico no meio. Chafariz em finlandês é {suihkulähde}. Calma, {ei hätää}: não tem pressa.' },
        { h: 'k', x: 12, y: 70, fala: 'Na beira do chafariz, com os pés na água. Tem um jato que molha só quem não está olhando. Adivinha quem não estava olhando.' }],
      falas: [['Capivara', 'Chafariz em finlandês é {suihkulähde}. Palavra comprida, jato comprido! A Praça da Liberdade tem palmeiras e passeios sem pressa. Palmeira, a gente já tem. Falta o passeio.'],
        ['Peixe-boi', 'Água subindo e descendo sem eu fazer nada. Finalmente alguém trabalhando por mim.']] },
    { id: 'arvore-natal', nimi: 'Árvore de Natal tropical', kat: 'grande', hinta: 100, sana: ['joulukuusi', 'árvore de Natal'], paikka: [46, 61], leveys: 10, avaa: { mitali: 't15' },
      kuvaus: 'Um pinheiro com mandarinas no lugar das bolas e uma estrela dourada no alto. Natal com 30 graus.', toque: 'estrela',
      lugares: [{ h: 'k', x: 50, y: 62, fala: 'Pendurei uma mandarina. Comi. Pendurei outra. Comi. A árvore ficou sem enfeite e eu, cheio. Árvore de Natal em finlandês é {joulukuusi}.' }],
      falas: [['Capivara', 'Árvore de Natal em finlandês é {joulukuusi}. Com mandarinas no lugar das bolas! Aqui faz 30 graus, mas Natal é Natal. Eu penduro uma e como outra.'],
        ['Peixe-boi', 'Uma árvore enfeitada na areia. Natal é a única época em que ficar parado olhando luzinhas conta como atividade.']] },
    { id: 'presentes', nimi: 'Presentes embaixo da árvore', kat: 'praia', hinta: 50, sana: ['lahja', 'presente'], paikka: [54, 61], leveys: 7, avaa: { mitali: 't15' },
      kuvaus: 'Em Belo Horizonte abre-se à meia-noite do dia 24. O Capivara abre às nove, só para conferir.', toque: 'presente',
      lugares: [{ h: 'k', x: 50, y: -50, fala: 'Sentado atrás dos presentes, sem tocar. Só olhando. Será que algum é meu? Esqueci o que eu pedi. Então todos são surpresa.' }],
      falas: [['Capivara', 'Presente em finlandês é {lahja}. Uma pilha de presentes! Eu não vou abrir. Vou só sacudir. Faz um barulhinho de mandarina.'],
        ['Peixe-boi', 'Presente é a única coisa que chega até mim sem eu me mexer. Respeito.']] },
    // Erä 3 (oppitunnit 16–20): kauppatavarat; yhteensä 150 🍊 oppituntia kohden. Tamborim ja Radinhos soivat napautuksesta (soi).
    { id: 'tamborim', nimi: 'Tamborim da Malu', kat: 'praia', hinta: 80, sana: ['rumpu', 'tambor'], paikka: [6.5, 86.5], leveys: 5, avaa: { mitali: 't16' },
      kuvaus: 'O menor tambor do samba: pequeno, seco e muito barulhento. Toque nele e ele responde.', toque: 'tambor',
      lugares: [{ h: 'k', x: 200, y: 30, fala: 'Tocando o tamborim da Malu! Ela disse “no tempo”. Qual tempo? Toquei no tempo de ontem. Tambor em finlandês é {rumpu}.' }],
      falas: [['Capivara', 'Tambor em finlandês é {rumpu}. O tamborim da Malu é o menor {rumpu} do samba e faz mais barulho que o Jay procurando o celular. Toque nele! Ele responde na hora.'],
        ['Peixe-boi', 'Um tambor pequeno. Eu prefiro o som do rio: não precisa de baqueta nem de ritmo. Mas toque de novo, vá.']] },
    { id: 'bandeirinhas', nimi: 'Bandeirinhas da festa de rua', kat: 'praia', hinta: 70, sana: ['juhla', 'festa'], paikka: [68, 52], leveys: 10, avaa: { mitali: 't16' },
      kuvaus: 'Bandeirinhas coloridas, como na rua dos pais da Maia. A festa durou a noite toda; as bandeirinhas ficam para sempre.', toque: 'festa',
      lugares: [{ h: 'k', x: 150, y: 50, fala: 'Dançando debaixo das bandeirinhas! O Walker toca, a Malu bate o tambor e eu danço fora do ritmo. Ensaiei: danço fora do ritmo muito bem. Festa em finlandês é {juhla}.' }],
      falas: [['Capivara', 'Festa em finlandês é {juhla}. As bandeirinhas da festa de rua! Na rua dos pais da Maia a festa durou a noite toda. Eu cheguei cedo e fui embora tarde, mas do meio não lembro nada.'],
        ['Peixe-boi', 'Bandeirinhas. Um enfeite que não pede nada a ninguém. Eu também sou assim: enfeito a ilha só de estar aqui.']] },
    { id: 'lupa', nimi: 'Lupa de detetive', kat: 'praia', hinta: 60, sana: ['tunnistaa', 'reconhecer'], paikka: [17, 78], leveys: 4, avaa: { mitali: 't17' },
      kuvaus: 'Para achar pistas e reconhecer o culpado. Ou a mandarina que o Capivara guardou ontem e esqueceu onde.', toque: 'lupa',
      lugares: [{ h: 'k', x: 260, y: 60, fala: 'Detetive Capivara em ação! Reconhecer em finlandês é {tunnistaa}. Já achei três pistas: uma pegada, uma pena e uma mandarina. A pegada é minha. A pena também. A mandarina eu comi.' }],
      falas: [['Capivara', 'Reconhecer em finlandês é {tunnistaa}. Uma lupa de detetive! Com ela eu reconheço o topete do Marcus, o casaco preto do Jay e a minha própria pegada. Espere: de quem é esta pegada? Ah, é minha.'],
        ['Peixe-boi', 'Pela lupa a mandarina fica enorme. Boa ideia: assim ela não escapa. Embora nunca tenha escapado: mandarina fica parada, como eu.']] },
    { id: 'cartaz-jay', nimi: 'Cartaz de desaparecido: Jay', kat: 'praia', hinta: 90, sana: ['ilmoitus', 'aviso'], paikka: [13.5, 69.5], leveys: 5, avaa: { mitali: 't17' },
      kuvaus: 'KADONNUT: Jay. Alto, olhos azuis, cabelo claro e casaco preto. Já foi encontrado, mas o cartaz ficou: está bonito.', toque: 'pergunta',
      falas: [['Capivara', 'Aviso em finlandês é {ilmoitus}. “KADONNUT: Jay.” Eu procurei o Jay pela ilha inteira. A Maia disse que ele já foi encontrado. Eu deixei o cartaz: ficou bonito.'],
        ['Peixe-boi', 'Um cartaz de desaparecido. Eu fico parado, então ninguém precisa me procurar. Melhor estratégia de todas.']] },
    { id: 'radinhos', nimi: 'Radinhos', kat: 'praia', hinta: 60, sana: ['radiopuhelin', 'walkie-talkie'], paikka: [77, 85.5], leveys: 5, avaa: { mitali: 't18' },
      kuvaus: 'Dois radinhos para a dupla. Câmbio: entendido? Entendido. O quê? Esqueci.', toque: 'radio',
      lugares: [{ h: 'k', x: 190, y: 30, fala: 'Chamando pelo radinho: “Câmbio!” O Peixe-boi: “Zzz.” Câmbio e desligo. Radinho em finlandês é {radiopuhelin}. Eu sei, eu sei: repito para não esquecer.' }],
      falas: [['Capivara', 'Radinho em finlandês é {radiopuhelin}. Um para mim, outro para o Peixe-boi. Eu falo “câmbio!” e ele responde “…”. Está dormindo. Ou é a técnica de silêncio de rádio dele.'],
        ['Peixe-boi', 'Psst. Capivara. Tem um radinho no seu ouvido. Não, no outro ouvido. Sussurrar é a única coisa que dá para fazer deitado.']] },
    { id: 'maca-upa', nimi: 'Maca da UPA', kat: 'praia', hinta: 90, sana: ['päivystys', 'pronto-socorro'], paikka: [31, 61], leveys: 9, avaa: { mitali: 't18' },
      kuvaus: 'Maca de pronto atendimento, com rodinhas. O Peixe-boi diz que deitar é tratamento.', toque: 'curativo',
      lugares: [{ h: 'm', x: 12, y: -5, fala: 'Internado por vontade própria. Diagnóstico: cansaço. Tratamento: repouso. Duração: indeterminada. Pronto-socorro em finlandês é {päivystys}, mas aqui o plantão é só descanso.' }],
      falas: [['Peixe-boi', 'Pronto-socorro em finlandês é {päivystys}. Uma maca! Deitado, com rodinhas e ainda por cima é tratamento. Finalmente alguém reconhece o meu trabalho.'],
        ['Capivara', 'Uma maca da UPA, como a do Jay! Eu deitei para testar e a Marisa mediu a minha temperatura: trinta e sete. Normal. Febre, para mim, é esquecer onde estou.']] },
    { id: 'panela-pedra', nimi: 'Panela de pedra-sabão', kat: 'praia', hinta: 90, sana: ['vuolukivi', 'pedra-sabão'], paikka: [93, 68], leveys: 6, avaa: { mitali: 't19' },
      kuvaus: 'Feijão tropeiro na panela de pedra-sabão, como em Ouro Preto. Esquenta devagar e esfria devagar.', toque: 'vapor',
      lugares: [{ h: 'k', x: -130, y: 30, fala: 'Mexendo o feijão na panela de pedra-sabão. Já mexi? Mexi. Mexo de novo. Pedra-sabão em finlandês é {vuolukivi}. Repito a cada colherada.' }],
      falas: [['Capivara', 'Pedra-sabão em finlandês é {vuolukivi}. Uma panela de {vuolukivi}, de Ouro Preto! Ela mantém o feijão quente por horas. Eu mantenho o feijão por minutos: não sobra.'],
        ['Peixe-boi', 'Uma panela que esquenta devagar e esfria devagar. Finalmente uma ferramenta que entende o meu ritmo.']] },
    { id: 'bingo', nimi: 'Globo de bingo', kat: 'praia', hinta: 60, sana: ['bingo', 'bingo'], paikka: [29, 97], leveys: 5, avaa: { mitali: 't19' },
      kuvaus: 'Bolinhas numeradas e uma manivela. Cada bolinha pergunta: já esteve em…? O Capivara responde “já” para tudo.', toque: 'bingo',
      lugares: [{ h: 'k', x: 200, y: 20, fala: 'Cantando o bingo: “Trinta e sete!” Quem tem o trinta e sete? Ah, eu. Eu tenho todos os números e nenhuma cartela. Bingo em finlandês é {bingo}.' }],
      falas: [['Capivara', 'Bingo em finlandês é {bingo}: igual! No bingo da lição 19 a pergunta é “Já esteve em…?”. Eu respondo “já” para tudo. Quase tudo é mentira, mas a bolinha não confere.'],
        ['Peixe-boi', 'Eu giro a manivela uma vez por maré. Os números saem sozinhos, o povo grita “bingo” sozinho. Trabalho muito bem delegado.']] },
    { id: 'balde-sauna', nimi: 'Balde e concha da sauna', kat: 'praia', hinta: 50, sana: ['sauna', 'sauna'], paikka: [88, 66], leveys: 4, avaa: { mitali: 't20' },
      kuvaus: 'Balde de madeira, concha e um feixe de ramos de bétula. A água na pedra quente faz o vapor. Em Belo Horizonte, ninguém acredita.', toque: 'loyly',
      falas: [['Capivara', 'Sauna em finlandês é {sauna}: quase igual! Balde, concha e ramos de bétula. Joguei água na pedra quente e saiu vapor. A Maia disse: “É assim mesmo.” O Jay disse: “É o melhor.” Eu disse: “Onde estou?”'],
        ['Peixe-boi', 'Um balde de água. Para mim é pouco. Para a sauna é muito. Eu aprovo o equilíbrio.']] },
    { id: 'mokki', nimi: 'Chalé vermelho de Korppoo', kat: 'grande', hinta: 100, sana: ['mökki', 'chalé'], paikka: [36, 76], leveys: 10, avaa: { mitali: 't20' },
      kuvaus: 'Casinha vermelha de cantos brancos, como as do arquipélago de Korppoo. No verão a noite é clara e ninguém quer dormir. Exceto o Peixe-boi.', toque: 'verao',
      lugares: [{ h: 'k', x: 160, y: 70, fala: 'Na varanda do chalé. O Walker pescou, a Maia pintou e eu escolhi o melhor lugar: o mais perto do lanche. Chalé em finlandês é {mökki}.' }],
      falas: [['Capivara', 'Chalé em finlandês é {mökki}. Vermelho, com cantos brancos, igualzinho aos de Korppoo! A Maia disse que no verão a noite é clara. Eu fiquei acordado a noite toda. Ou dormi o dia todo. Esqueci.'],
        ['Peixe-boi', 'Um {mökki} na beira da água. O Walker pesca, a Maia pinta e eu fico na água ao lado. Veraneio perfeito.']] },
    /* Kultapalkinnot (omistaja 18.10.2026): oppitunnin kultamitalista ainutkertainen palkinto palkintohyllylle
       (kat trofeu: ei kaupassa); kaksikon kultainen asu ensimmäisestä ja kolmannesta kultamitalista; TUDO OURO
       (kaikki oppitunnit kullalla) kasvattaa kultaisen mandariinipuun, jonka jokainen napautus antaa +5 🍊. */
    { id: 'trofeu-t00', nimi: 'Mala de ouro', kat: 'trofeu', lahja: { mitali: 't00', taso: 'ouro' }, sana: ['matkalaukku', 'mala'],
      kuvaus: 'A mala certa, enfim. Ouro no Prólogo.', falas: [['Capivara', 'Mala em finlandês é {matkalaukku}. Uma {matkalaukku} de ouro! E desta vez é a nossa.']] },
    { id: 'trofeu-t01', nimi: 'Carteirinha emoldurada', kat: 'trofeu', lahja: { mitali: 't01', taso: 'ouro' }, sana: ['opiskelijakortti', 'carteirinha de estudante'],
      kuvaus: 'Ouro na lição 1: a carteirinha numa moldura dourada.', falas: [['Peixe-boi', 'Carteirinha de estudante: {opiskelijakortti}. Palavra comprida. Vou ler devagar. Amanhã.']] },
    { id: 'trofeu-t02', nimi: 'Placa dourada do metrô', kat: 'trofeu', lahja: { mitali: 't02', taso: 'ouro' }, sana: ['metro', 'metrô'],
      kuvaus: 'Ouro na lição 2: Sörnäinen, em ouro.', falas: [['Capivara', 'O {metro} de Helsinque em ouro! Próxima estação: a nossa ilha.']] },
    { id: 'trofeu-t03', nimi: 'Carrinho de ouro do Tokmanni', kat: 'trofeu', lahja: { mitali: 't03', taso: 'ouro' }, sana: ['ostoskärry', 'carrinho de compras'],
      kuvaus: 'Ouro na lição 3. Não cabe no caixa de autoatendimento.', falas: [['Capivara', 'Carrinho de compras: {ostoskärry}. De ouro! Cabe uma mandarina. Ou duas, se eu esquecer a primeira.']] },
    { id: 'trofeu-t04', nimi: "Coroa do 'Esburger", kat: 'trofeu', lahja: { mitali: 't04', taso: 'ouro' }, sana: ['kruunu', 'coroa'],
      kuvaus: 'Ouro na lição 4: rei do quiosque.', falas: [['Peixe-boi', 'Coroa em finlandês é {kruunu}. Rei do ’Esburger. O rei não levanta para pegar o pedido.']] },
    { id: 'trofeu-t05', nimi: 'Retrato de família em ouro', kat: 'trofeu', lahja: { mitali: 't05', taso: 'ouro' }, sana: ['perhe', 'família'],
      kuvaus: 'Ouro na lição 5: as duas famílias numa moldura dourada.', falas: [['Capivara', 'Família em finlandês é {perhe}. As duas famílias juntas! E nós dois no canto, de penetras.']] },
    // Erä 1 (oppitunnit 6–10): kultapalkinnot.
    { id: 'trofeu-t06', nimi: 'Cartão da biblioteca de ouro', kat: 'trofeu', lahja: { mitali: 't06', taso: 'ouro' }, sana: ['kirjastokortti', 'cartão da biblioteca'],
      kuvaus: 'Ouro na lição 6: o cartão da biblioteca Oodi, de graça e em ouro.', falas: [['Capivara', 'Cartão da biblioteca em finlandês é {kirjastokortti}. Na Finlândia é de graça! Eu peguei três livros emprestados e devolvi quatro. Ou foi ao contrário?']] },
    { id: 'trofeu-t07', nimi: 'Bandeja de almoço dourada', kat: 'trofeu', lahja: { mitali: 't07', taso: 'ouro' }, sana: ['tarjotin', 'bandeja'],
      kuvaus: 'Ouro na lição 7: o almoço em Otaniemi, servido em ouro.', falas: [['Peixe-boi', 'Bandeja em finlandês é {tarjotin}. Uma {tarjotin} de ouro, e vazia. Alguém pode pôr o almoço nela? Eu espero. Deitado.']] },
    { id: 'trofeu-t08', nimi: 'Rolo de pintura dourado', kat: 'trofeu', lahja: { mitali: 't08', taso: 'ouro' }, sana: ['maali', 'tinta'],
      kuvaus: 'Ouro na lição 8: o apartamento da Purjo, pintado de ouro.', falas: [['Capivara', 'Tinta em finlandês é {maali}. Cuidado: {maali} também é o gol do futebol. Com um rolo dourado, eu pinto a parede ou faço um gol? Esqueci o jogo.']] },
    { id: 'trofeu-t09', nimi: 'Primeiro quadro vendido, emoldurado', kat: 'trofeu', lahja: { mitali: 't09', taso: 'ouro' }, sana: ['ylpeä', 'orgulhoso'],
      kuvaus: 'Ouro na lição 9: o primeiro quadro da Maia, vendido na feira Habituuri.', falas: [['Capivara', 'Orgulhoso em finlandês é {ylpeä}. A Purjo ficou {ylpeä}, a Maia ficou {ylpeä}. Eu fiquei {ylpeä} e nem sei do quê. Mas fiquei.']] },
    { id: 'trofeu-t10', nimi: 'Cartão de embarque de ouro', kat: 'trofeu', lahja: { mitali: 't10', taso: 'ouro' }, sana: ['tarkastuskortti', 'cartão de embarque'],
      kuvaus: 'Ouro na lição 10: Helsinque, Lisboa e Confins num cartão só.', falas: [['Peixe-boi', 'Cartão de embarque em finlandês é {tarkastuskortti}. Palavra comprida, como o voo. Eu já embarquei: na rede, em sonho.']] },
    // Erä 2 (oppitunnit 11–15): kultapalkinnot.
    { id: 'trofeu-t11', nimi: 'Balança dourada do Mercado', kat: 'trofeu', lahja: { mitali: 't11', taso: 'ouro' }, sana: ['paras', 'o melhor'],
      kuvaus: 'Ouro na lição 11: a balança do Mercado Central, em ouro. Sempre pende para o lado mais caro.', falas: [['Peixe-boi', 'O melhor em finlandês é {paras}. A balança dourada decide qual é o {paras}, assim eu não preciso decidir. Decidir cansa.']] },
    { id: 'trofeu-t12', nimi: 'Primeira venda na Feira Hippie', kat: 'trofeu', lahja: { mitali: 't12', taso: 'ouro' }, sana: ['myydä', 'vender'],
      kuvaus: 'Ouro na lição 12: a primeira venda da banca da Maia, numa barraquinha dourada.', falas: [['Capivara', 'Vender em finlandês é {myydä}. A Maia vendeu! E o Jay atendeu em finlandês. Eu ajudei: segurei o troco. Quer dizer: perdi o troco. Quer dizer: já nem lembro o que é troco.']] },
    { id: 'trofeu-t13', nimi: 'Carta para a Purjo, emoldurada', kat: 'trofeu', lahja: { mitali: 't13', taso: 'ouro' }, sana: ['kirje', 'carta'],
      kuvaus: 'Ouro na lição 13: a carta da Maia para a Purjo, escrita no passado, numa moldura dourada.', falas: [['Peixe-boi', 'Carta em finlandês é {kirje}. Eles contaram à Purjo o que fizeram ontem: acordaram às seis, o Anderson entregou cartas, o Jay dormiu até as dez. Eu, ontem: dormi. Anteontem: também.']] },
    { id: 'trofeu-t14', nimi: 'Bússola dourada', kat: 'trofeu', lahja: { mitali: 't14', taso: 'ouro' }, sana: ['suoraan', 'em frente'],
      kuvaus: 'Ouro na lição 14: a bússola que o Jay não tinha no centro, com 12 % de bateria.', falas: [['Capivara', 'Em frente, direto, em finlandês é {suoraan}. A bússola dourada aponta para o norte. Para o Jay, aponta para a Maia. Para mim, aponta para o lanche.']] },
    { id: 'trofeu-t15', nimi: 'Estrela de Natal dourada', kat: 'trofeu', lahja: { mitali: 't15', taso: 'ouro' }, sana: ['tähti', 'estrela'],
      kuvaus: 'Ouro na lição 15: a estrela no alto da árvore de Natal. Ceia na noite do dia 24, 30 graus e saudade de neve.', falas: [['Capivara', 'Estrela em finlandês é {tähti}. Uma {tähti} dourada para o Natal da ilha! Em Helsinque escurece às três da tarde; aqui são trinta graus. Eu pedi neve de presente. Veio areia.']] },
    // Erä 3 (oppitunnit 16–20): kultapalkinnot (t20: sana taulu oppitunnilta 6, koska t20:n leksikko oli kirjoitettaessa vielä tyhjä).
    { id: 'trofeu-t16', nimi: 'Gaita dourada do Walker', kat: 'trofeu', lahja: { mitali: 't16', taso: 'ouro' }, sana: ['huuliharppu', 'gaita de boca'],
      kuvaus: 'Ouro na lição 16: a gaita de boca do Walker, numa festa de rua que durou a noite toda.', falas: [['Capivara', 'Gaita de boca em finlandês é {huuliharppu}: “harpa de lábio”. A Maia disse que o Walker é melhor músico do que economista. Ele nem discutiu. Eu guardo a gaita dourada. Se eu lembrar onde.']] },
    { id: 'trofeu-t17', nimi: 'Retrato falado de ouro', kat: 'trofeu', lahja: { mitali: 't17', taso: 'ouro' }, sana: ['kuvaus', 'descrição'],
      kuvaus: 'Ouro na lição 17: o retrato falado do homem do topete, desenhado só com a descrição. Quem descreve bem, desenha bem.', falas: [['Peixe-boi', 'Descrição em finlandês é {kuvaus}. Eles descreveram o homem só com palavras: topete, óculos grandes, cara de bravo. Saiu um retrato perfeito. Eu descrevo tudo com uma palavra só: sono.']] },
    { id: 'trofeu-t18', nimi: 'Medalha de herói do Anderson', kat: 'trofeu', lahja: { mitali: 't18', taso: 'ouro' }, sana: ['sankari', 'herói'],
      kuvaus: 'Ouro na lição 18: a medalha do Anderson, o carteiro que conhece cada porta da rua. Herói sério, de boné.', falas: [['Capivara', 'Herói em finlandês é {sankari}. O Anderson levou a Maia até a porta certa porque conhece a rua inteira, casa por casa. Medalha dourada, boné de carteiro, trabalho feito. E eu? Esqueci o endereço da minha própria rede.']] },
    { id: 'trofeu-t19', nimi: 'Igreja barroca dourada', kat: 'trofeu', lahja: { mitali: 't19', taso: 'ouro' }, sana: ['kirkko', 'igreja'],
      kuvaus: 'Ouro na lição 19: uma igreja barroca de Ouro Preto, toda dourada. Lá dentro o ouro é de verdade; aqui, só a cor.', falas: [['Capivara', 'Igreja em finlandês é {kirkko}. A igreja dourada de Ouro Preto! Eu subi a ladeira inteira. Ou foi só metade. A Maia ficou olhando o ouro; eu fiquei olhando o banco.']] },
    { id: 'trofeu-t20', nimi: 'Quadro da Maia na parede da Purjo', kat: 'trofeu', lahja: { mitali: 't20', taso: 'ouro' }, sana: ['taulu', 'quadro'],
      kuvaus: 'Ouro na lição 20: o porquinho feliz da Maia na parede do apartamento novo da Purjo, pendurado um pouquinho torto.', falas: [['Capivara', 'Quadro em finlandês é {taulu}. O porquinho feliz da Maia na parede da Purjo, em Helsinque! Todo dia a Purjo olha para ele e fica {ylpeä}. O porquinho também. Eu fico orgulhoso só de olhar.']] },
    /* AV-029 (omistaja 19.10.2026): pomotaistelun palkintolasit tavarakorttina; voitosta lahjana, puettavissa ja riisuttavissa.
       K2–K4: sama malli (lahja { pomo: 'kNN' }, veste maia.lasit = Pomo.lasit.kNN.malli). */
    { id: 'oculos-luta-k01', nimi: 'Óculos de luta: visor amarelo (Maia)', kat: 'roupa', lahja: { pomo: 'k01' }, sana: ['keltainen', 'amarelo'], veste: { maia: { lasit: 'visiiri' } },
      kuvaus: 'Presente da luta final da revisão 1. A Maia usa nas festas da ilha; tire quando quiser.', falas: [['Capivara', 'Amarelo em finlandês é {keltainen}. O visor {keltainen} da luta! Com ele a Maia vê tudo. Eu, sem ele, não vejo nem onde deixei a mandarina.']] },
    { id: 'oculos-luta-k02', nimi: 'Óculos de luta: triangulares, verde e rosa (Maia)', kat: 'roupa', lahja: { pomo: 'k02' }, sana: ['vihreä', 'verde'], veste: { maia: { lasit: 'kolmio' } },
      kuvaus: 'Presente da luta final da revisão 2. Uma lente para a cabeça forte, outra para a fraca. Tire quando quiser.', falas: [['Peixe-boi', 'Verde em finlandês é {vihreä}. Uma lente {vihreä}, outra rosa: a Maia vê a forma forte e a fraca ao mesmo tempo. Eu vejo só o sofá.']] },
    { id: 'oculos-luta-k03', nimi: 'Óculos de luta: estreitos, vermelho-escuros (Maia)', kat: 'roupa', lahja: { pomo: 'k03' }, sana: ['punainen', 'vermelho'], veste: { maia: { lasit: 'kapea' } },
      kuvaus: 'Presente da luta final da revisão 3. Com eles a Maia vê os seis tentáculos ao mesmo tempo. Tire quando quiser.', falas: [['Capivara', 'Vermelho em finlandês é {punainen}. Óculos {punainen}-escuros, estreitos como um olhar de detetive. Eu tentei usar: não vi nada. Combinam com a Maia.']] },
    { id: 'oculos-luta-k04', nimi: 'Óculos de luta: verdes de alienígena (Maia)', kat: 'roupa', lahja: { pomo: 'k04' }, sana: ['aika', 'tempo'], veste: { maia: { lasit: 'avaruus' } },
      kuvaus: 'Presente da luta final da revisão 4. Com eles a Maia vê ontem, hoje e o “se” ao mesmo tempo. Tire quando quiser.', falas: [['Peixe-boi', 'Tempo em finlandês é {aika}. Com estes óculos a Maia vê o {aika} inteiro: ontem, já e se. Eu uso só o agora. É mais devagar.']] },
    { id: 'oculos-ouro', nimi: 'Óculos de ouro (Capivara)', kat: 'roupa', lahja: { ouro: 1 }, sana: ['kulta', 'ouro'], veste: { kertoja: { lasit: 'kulta' } },
      kuvaus: 'Presente da primeira medalha de ouro.', falas: [['Capivara', 'Ouro em finlandês é {kulta}. Óculos de {kulta}! Agora eu brilho. Por fora. Por dentro eu esqueci onde estou.']] },
    { id: 'camisa-ouro', nimi: 'Camisa dourada (Peixe-boi)', kat: 'roupa', lahja: { ouro: 3 }, sana: ['kultainen', 'dourado'], veste: { manaatti: { paita: 'kulta' } },
      kuvaus: 'Presente da terceira medalha de ouro.', falas: [['Peixe-boi', 'Dourado em finlandês é {kultainen}. Uma camisa {kultainen}. Brilha tanto que não preciso me mexer para ser notado.']] },
    { id: 'mandarineira-ouro', nimi: 'Mandarineira de ouro', kat: 'premio', lahja: { saavutus: 'ouro-curso' }, sana: ['mandariini', 'mandarina'], paikka: [33, 39], leveys: 13, toque: 'kultamandariini',
      kuvaus: 'Prêmio de TUDO OURO: cada toque, +5 🍊. Para sempre.', lugares: [{ h: 'k', x: 50, y: 88, fala: 'Debaixo da árvore de ouro. Cai uma {mandariini}, eu como. Cai outra… Nunca acaba!' }],
      falas: [['Capivara', 'Mandarina em finlandês é {mandariini}. Uma árvore de ouro que nunca para de dar {mandariini}! Toque nela. De novo. De novo.'],
        ['Peixe-boi', 'Ouro em todas as lições. Eu dormi em todas. Mas estava torcendo.']] },
    // Cruzeiro: mais caro (omistaja). O estádio também vem de graça na luta final da revisão 4.
    { id: 'cruzeiro', nimi: 'Camisas do Cruzeiro (as duas)', kat: 'cruzeiro', hinta: 150, sana: ['sininen ja valkoinen', 'azul e branco'], veste: { kertoja: { paita: 'cruzeiro' }, manaatti: { paita: 'cruzeiro' } }, avaa: { mitali: 't02' },
      kuvaus: 'Azul e branco, para o Capivara e para o Peixe-boi.',
      falas: [['Capivara', 'Azul e branco em finlandês: {sininen ja valkoinen}! Agora todo mundo sabe pra quem a gente torce.'],
        ['Peixe-boi', 'Eu torço deitado. Já cochilei no segundo tempo, mas com a camisa certa.']] },
    { id: 'bandeira', nimi: 'Bandeira do Cruzeiro', kat: 'cruzeiro', hinta: 220, sana: ['sininen', 'azul'], paikka: [96, 39], leveys: 6, avaa: { mitali: 't05' },
      kuvaus: 'Um mastro alto, uma bandeira azul com as cinco estrelas.', toque: 'heilu',
      falas: [['Capivara', 'Azul em finlandês é {sininen}. A bandeira mais {sininen} do Amazonas!'],
        ['Peixe-boi', 'Ela balança sozinha. Respeito quem trabalha sem se mexer.']] },
    { id: 'estadio', nimi: 'Estádio do Cruzeiro (mini)', kat: 'premio', palkinto: 'k04', sana: ['iso', 'grande'], paikka: [21, 34], leveys: 22,
      kuvaus: 'Prêmio da revisão 4: gol, campinho e um bandeirão. Abre a coleção azul de cima.', toque: 'chute',
      lugares: [{ h: 'k', x: 60, y: 62, fala: 'Chute do Capivara! Gol! Ou foi pra fora? Eu lembro como gol.' }],
      falas: [['Capivara', 'Um estádio {iso}, grande, só nosso! O Cruzeiro em campo, o Capivara de atacante, o Peixe-boi de goleiro.'],
        ['Peixe-boi', 'Goleiro é a posição perfeita: fica parado e todo mundo acha que é estratégia.']] },
    { id: 'trofeu', nimi: 'Troféu do Cruzeiro', kat: 'cruzeiro', hinta: 400, sana: ['hyvä', 'bom'], paikka: [11, 91], leveys: 4, avaa: { esine: 'estadio' },
      kuvaus: 'O topo da coleção azul. Só depois do estádio.', toque: 'brilho',
      falas: [['Capivara', 'Um troféu! Muito {hyvä}. Eu vou lembrar desta conquista para sempre. Que conquista era mesmo?']] },
    { id: 'arquibancada', nimi: 'Arquibancada azul e branca', kat: 'cruzeiro', hinta: 300, sana: ['sininen ja valkoinen', 'azul e branco'], paikka: [26, 16], leveys: 30, avaa: { esine: 'estadio' },
      kuvaus: 'Torcida no estádio. Só depois do estádio.',
      falas: [['Capivara', 'Arquibancada {sininen ja valkoinen}! A torcida canta, eu canto junto. Esqueço a letra, canto mais alto.']] },
    // Pomopalkinnot: ilmaiseksi voitosta; jokainen tuo uusia tavaroita, paikkoja ja napautuksen.
    { id: 'banheira', nimi: 'Banheira de hidromassagem', kat: 'premio', palkinto: 'k01', sana: ['lämmin', 'quente'], alvo: '.ilha-palkinto[data-pomo="k01"]',
      kuvaus: 'Prêmio da revisão 1. Abre os itens do spa.', lugares: [{ h: 'k', x: 50, y: 18, fala: 'Spa do Capivara, filial ilha. Água {lämmin}. Não me chamem. Nem eu me chamo.' }, { h: 'm', x: 72, y: 26, fala: 'Água {lämmin}. Eu boio. É o meu spa. É o meu tudo.' }],
      falas: [['Capivara', 'A banheira {lämmin}! Eu entro, relaxo e esqueço de tudo. É o meu talento.']] },
    { id: 'patinho', nimi: 'Patinho de borracha', kat: 'spa', hinta: 20, sana: ['keltainen', 'amarelo'], alvo: '.ilha-palkinto[data-pomo="k01"]', avaa: { pomo: 'k01' },
      kuvaus: 'Para a banheira. Item do spa.', toque: 'pulo',
      falas: [['Capivara', 'Amarelo em finlandês é {keltainen}. Um patinho {keltainen}! Ele boia, eu boio. Somos iguais.']] },
    { id: 'havanna', nimi: 'Havanna-baari', kat: 'premio', conquistas: true, palkinto: 'k02', sana: ['mehu', 'suco'], paikka: [52, 47], leveys: 15,
      kuvaus: 'Prêmio da revisão 2. Toque: um coquetel de mandarina.', toque: 'coquetel', lugares: [{ h: 'k', x: 50, y: 70, fala: 'Um coquetel de mandarina, sem álcool, com guarda-chuvinha. O garçom sou eu mesmo.' }],
      falas: [['Capivara', 'O Havanna-baari chegou à ilha! Coquetel de mandarina para todo mundo. Suco em finlandês é {mehu}: o resto é guarda-chuvinha.']] },
    { id: 'banquinhos', nimi: 'Banquinhos do bar', kat: 'bar', hinta: 60, sana: ['punainen', 'vermelho'], paikka: [52, 72], leveys: 9, avaa: { pomo: 'k02' },
      kuvaus: 'Para o Havanna-baari.', lugares: [{ h: 'm', x: 30, y: 30, fala: 'Um banquinho. Eu sento e não saio mais. Promessa.' }],
      falas: [['Peixe-boi', 'Banquinhos {punainen}, vermelhos. Eu sento no do meio. E nos dois do lado, por garantia.']] },
    { id: 'abacaxi', nimi: 'Copo de abacaxi', kat: 'bar', hinta: 40, sana: ['keltainen', 'amarelo'], paikka: [60, 53], leveys: 3, avaa: { pomo: 'k02' },
      kuvaus: 'Para o bar: suco servido dentro do abacaxi.', toque: 'pulo',
      falas: [['Capivara', 'Um copo {keltainen} de abacaxi! Eu bebo o suco, depois o copo. Brincadeira. Talvez.']] },
    { id: 'kioski', nimi: "Quiosque do 'Esburger", kat: 'premio', palkinto: 'k03', sana: ['hampurilainen', 'hambúrguer'], paikka: [65, 47], leveys: 12,
      kuvaus: 'Prêmio da revisão 3. Toque: fazer um pedido.', toque: 'pedido', lugares: [{ h: 'k', x: 50, y: 74, fala: 'Na fila do quiosque. A fila não anda. Eu também não. Combinamos.' }],
      falas: [['Capivara', 'Hambúrguer em finlandês é {hampurilainen}. A Maia diz “Esburger”: o H some toda vez. O quiosque já aprendeu.']] },
    { id: 'churrasqueira', nimi: 'Churrasqueira', kat: 'bar', hinta: 85, sana: ['lämmin', 'quente'], paikka: [74, 78], leveys: 7, avaa: { pomo: 'k03' },
      kuvaus: 'Para o quiosque. Cheiro de churrasco na ilha.', lugares: [{ h: 'k', x: 50, y: 10, fala: 'Eu cuido da churrasqueira. Virei a carne? Não lembro. Viro de novo.' }],
      falas: [['Capivara', 'Brasa {lämmin}! Churrasco brasileiro na ilha. O Jay disse que traz a carne. Ele vai esquecer. Eu também.']] },
    { id: 'piquenique', nimi: 'Mesa de piquenique', kat: 'bar', hinta: 65, sana: ['kakku', 'bolo'], paikka: [20, 91], leveys: 12, avaa: { pomo: 'k03' },
      kuvaus: 'Para comer junto. Item do quiosque.', lugares: [{ h: 'm', x: 70, y: 40, fala: 'Mesa posta. Eu já comi a minha parte. E a sua. Estava ótimo.' }],
      falas: [['Peixe-boi', 'Uma mesa. E um bolo, {kakku}. Cuidado com a pronúncia: a Maia já pediu outra coisa uma vez. Uma vez basta.']] }
  ];
  const tavara = id => TAVARAT.find(x => x.id === id);

  /* ---------- kaverit: tulevat tavaroiden mukana ja käyvät satunnaisesti ----------
     kuva: hahmon id (assets/hahmot.js tai alla piirretyt). ehto: esine (jokin omistettu) tai tarina.
     aina: on aina paikalla, muuten todennäköisyys joka käynnillä. paikka: { x, y } % ankkuritavaran laatikosta.
     varaa: kaveri vie tämän tavaran paikat (Esra-Arse nukkuu riippumatossa). */
  const KAVERIT = [
    { id: 'wcplus', nimi: 'WC+', kuva: 'saari-wcplus', ehto: { esine: ['boombox'] }, aina: true, paikka: { x: 170, y: 20 },
      falas: ['Reggae na ilha, irmão. O som é baixinho porque o Peixe-boi pediu. Ele pediu dormindo.', 'Eu toco, o Capivara dança, o Peixe-boi… acompanha o ritmo com a respiração.'] },
    { id: 'lisko', nimi: 'Party-Boy Lisko', kuva: 'saari-lisko', ehto: { esine: ['disco'], havio: ['k03', 'k04'] }, todennakoisyys: 0.6, paikka: { x: 50, y: 160 },
      falas: ['Sou o advogado do Teemu. Meu cliente não responde perguntas antes do pôr do sol. Nem depois.', 'Volume no máximo! (O Peixe-boi tapou os ouvidos com duas folhas de alga.)', 'O Teemu precisa de uma foto do Capivara olhando para o horizonte. Com mistério. Mais mistério. Isso.', 'Terno, gravata e cauda: o Party-Boy Lisko chegou. A festa começa quando eu entro. E quando eu saio, acaba. Então eu fico.'] },
    { id: 'esra', nimi: 'Esra-Arse', kuva: 'saari-esra', ehto: { esine: ['rede'], havio: ['k01', 'k04'] }, todennakoisyys: 0.35, paikka: { x: 50, y: 40 }, varaa: 'rede',
      falas: ['Zzz… (O Esra-Arse está dormindo na rede de novo. O Peixe-boi ficou sem rede hoje.)', 'Zzz… cinco minutinhos… (Ele disse isso ontem às três da tarde.)'] },
    { id: 'teemu', nimi: 'Drug-Teemu', kuva: 'saari-teemu', ehto: { esine: ['pier'], havio: ['k02', 'k04'] }, todennakoisyys: 0.4, paikka: { x: 70, y: 20 }, varaa: 'pier',
      falas: ['Drug-Teemu ocupou o píer com microfone e gravador. O Peixe-boi não consegue cochilar embaixo dele hoje.', 'Pergunta séria, Capivara: as mandarinas sabem que vocês as contam? Eu acho que elas estão se organizando.', 'Peixe-boi, para a reportagem: em que momento exato você percebeu que o rio estava olhando de volta para você?', 'Anotem: dia quatro na ilha. O flamingo continua numa perna só. Ninguém aqui quer falar sobre isso.', 'Capivara, você esqueceu a pergunta ou a pergunta esqueceu você? Responda com calma. Estou gravando.'] },
    { id: 'mirela', nimi: 'Moara', kuva: 'saari-moara', ehto: { esine: ['mehubar', 'kioski'] }, todennakoisyys: 0.5, paikka: { x: 20, y: 30 },
      falas: ['Suco de mandarina com um pouquinho de maracujá. Receita do meu restaurante, perto do Mercado Central!', 'Um dia eu trago pão de queijo para a ilha. O Capivara já pediu três vezes. Ele esqueceu que pediu.'] },
    { id: 'marina', nimi: 'Marisa', kuva: 'saari-marisa', ehto: { esine: ['sauna', 'banheira'] }, todennakoisyys: 0.5, paikka: { x: 90, y: 40 },
      falas: ['Enfermeira de folga, mas de olho: dez minutos de sauna e depois água! Peixe-boi, isso não vale pra você, você já é água.', 'Organizei a fila da banheira: Capivara, Capivara e Capivara.'] },
    { id: 'mateus', nimi: 'Malu', kuva: 'saari-malu', ehto: { esine: ['canoa', 'boombox'] }, todennakoisyys: 0.5, paikka: { x: 125, y: 20 },
      falas: ['Eu conheço todos os caminhos do rio. E toco o tambor com o WC+: samba-reggae da ilha.', 'Dirijo devagar, remo devagar. O Peixe-boi me chama de colega.'] },
    { id: 'murilo', nimi: 'Maíra', kuva: 'saari-maira', ehto: { esine: ['cruzeiro', 'estadio', 'bandeira'] }, todennakoisyys: 0.5, paikka: { x: 78, y: 72 }, bone: true,
      falas: ['Cruzeiro?! Numa ilha?! Eu sou Atlético Mineiro até o fim. Vim só reclamar.', 'Galo forte! Ninguém aqui concorda comigo. Nem o flamingo.'] },
    // Tarinan palkinto (tuleva): Jayn pelastus (oppitunti 18) tuo Jayn saarelle soittamaan bassoa WC+:n kanssa.
    { id: 'jay', nimi: 'Jay', kuva: 'jay', ehto: { tarina: 'jay-baixo' }, aina: true, paikka: { x: 130, y: 60 },
      falas: ['Toco baixo com o WC+. Salvaram a minha vida, o mínimo é tocar uma música. Qual era mesmo? Esqueci. O Capivara também.'] }
  ];
  /* Tarinan erikoispalkinnot: avautuvat tarinan tapahtumasta (oppitunnin mitali tai Saari.tarina(id) koodista). */
  const TARINAT = [
    { id: 'jay-baixo', nimi: 'O Jay toca baixo com o WC+', ehto: { luettu: 't18-b' }, kuvaus: 'Depois do resgate do Jay (lição 18), ele vem à ilha tocar baixo com o WC+.' }
  ];
  const MURILO_BONE = [
    'Ei! Que boné é esse na minha cabeça?! Tira! … Está bem, fica. Só hoje. Ninguém tira foto.',
    'De novo?! Azul não combina comigo! … Combina um pouquinho. NÃO CONTE PRO GALO.',
    'Eu vou reclamar com a administração da ilha. Quem é a administração? O Capivara? Ele já esqueceu da reclamação.'
  ];

  /* Päivän yllätys rannalla: [puhuja, repliikki] (päivän numerolla, sama koko päivän). */
  const YLLATYKSET = [
    ['Capivara', 'Chegou uma garrafa boiando, com um bilhete: “{moi}!” Assinado: a Maia. Dentro tinha mandarinas. Não pergunte como.'],
    ['Peixe-boi', 'Achei estas mandarinas boiando. Eu não nadei até elas. Elas vieram até mim. É assim que eu trabalho.'],
    ['Capivara', 'Um pato trouxe mandarinas, disse “{kiitos}” e foi embora. Eu acho. Pato fala rápido.'],
    ['Capivara', 'Um cartão-postal de Helsinque: “{kylmä}!” Frio! E mandarinas de presente, bem geladinhas.'],
    ['Capivara', 'Hoje cedo eu achei mandarinas debaixo da rede. Fui eu que escondi, ontem. Esqueci. Surpresa!'],
    ['Peixe-boi', 'O rio trouxe mandarinas. O rio não tem pressa, igual a mim. {hyvä}.'],
    ['Capivara', '“{huomenta}!” Bom dia! Uma caixa de mandarinas chegou com o sol. O Capivara agradece. Sou eu.'],
    ['Capivara', 'O Jay mandou mandarinas e um bilhete: “Esqueci o que ia escrever.” Eu entendo, Jay. Eu entendo.'],
    ['Capivara', 'Mandarinas do Jay de novo! Ele mandou ontem também. Ele esqueceu. Eu esqueci que ele esqueceu. Então é surpresa duas vezes.'],
    ['Peixe-boi', 'Recado do Jay: “Mandei mandarinas, mas não lembro para qual ilha.” Acertou. Por acaso.']
  ];

  /* ---------- testiliput (kehitys): ?testipomo=k02,k03,k04 ja ?testimitali=t00,t05 (vain tämän sivun ajan) ---------- */
  const lippu = nimi => { try { const m = location.search.match(new RegExp('[?&]' + nimi + '=([^&]*)')); return new Set(m ? decodeURIComponent(m[1]).split(',').filter(Boolean) : []); } catch (e) { return new Set(); } };
  const TESTI_POMOT = lippu('testipomo');
  const TESTI_MITALIT = lippu('testimitali');
  const TESTI_KAVERIT = lippu('testikaverit').size > 0;   // ?testikaverit=1: kaikki kaverit paikalla
  const TESTI_NIMET = lippu('testinimet').size > 0;       // ?testinimet=1: nimilaput hahmojen päälle (kuvakaappaus omistajalle)
  const voitettu = id => TESTI_POMOT.has(id) || !!(window.Pomo && typeof window.Pomo.voitettu === 'function' && window.Pomo.voitettu(id));

  /* ---------- oppitunnin mitalit ja saavutukset: assets/saari_mitalit.js (AV-071 kohta 6; siirretty sellaisenaan) ---------- */
  // havittu on määritelty alempana (const): välitetään funktiona, jota kutsutaan vasta ajossa.
  const { MITALIT, onMitali, oppitunti, mitaliTila, mitaliTieto, tarkistaMitali, annaLahjat, seuraaTehtavia, yksikonTunniste, edistysRivi, mitaliRivi, SAAVUTUKSET, saavutus, tarkistaSaavutukset, laske, saavutusLista } =
    window.SaariMitalit({ K, lue, kirjoita, tila, tallenna, lisaa, ilmoita, voitettu, TESTI_MITALIT, TAVARAT, pue, havittu: p => havittu(p) });

  /* ---------- tilan apurit ---------- */
  const omistaa = (t, x) => !!x && (!!t.omat[x.id] || (!!x.palkinto && voitettu(x.palkinto)));
  const tarinaAuki = (t, id) => {
    const s = TARINAT.find(x => x.id === id);
    return !!(t.tarinat && t.tarinat[id]) || !!(s && s.ehto && s.ehto.luettu && t.marcos['osa:' + s.ehto.luettu]);
  };
  function avoin(x) {
    if (!x.avaa) return true;
    if (x.avaa.pomo) return voitettu(x.avaa.pomo);
    if (x.avaa.mitali) return onMitali(mitaliTila(x.avaa.mitali).mitali);   // kivi ei avaa (omistaja 23.10.2026)
    if (x.avaa.esine) return omistaa(tila(), tavara(x.avaa.esine));
    return true;
  }
  const kertausNro = id => String(Number(String(id).slice(1)));
  // Portugalin artikkeli jakson nimen edessä: o Prólogo (maskuliini), a Lição / a Revisão.
  const artikkeli = jakso => (/^Pr[óo]logo/i.test(jakso || '') ? 'o' : 'a');
  function lukkoTeksti(x) {
    if (x.avaa && x.avaa.pomo) return `Abre ao vencer a luta final da revisão ${kertausNro(x.avaa.pomo)}`;
    if (x.avaa && x.avaa.esine) return `Abre depois de: ${(tavara(x.avaa.esine) || {}).nimi || x.avaa.esine}`;
    const o = x.avaa && oppitunti(x.avaa.mitali);
    return o ? `Abre com a medalha d${artikkeli(o.jakso)} ${o.jakso}` : 'Abre com a medalha da próxima lição';
  }
  const kaytossa = (t, x) => !!x.veste && Object.entries(x.veste).every(([h, osat]) => Object.entries(osat).every(([k, v]) => t.asu[h][k] === v));
  function pue(t, x, paalle) {
    for (const [h, osat] of Object.entries(x.veste || {})) for (const [k, v] of Object.entries(osat)) {
      if (paalle) t.asu[h][k] = v;
      else if (t.asu[h][k] === v) delete t.asu[h][k];
    }
  }
  // Salainen saavutus (omistaja 18.10.2026): Esra-Arse alkaa käydä vasta, kun peto on kerran saanut Maian kiinni (pomo.js).
  const havittu = pomot => { try { return pomot.some(p => ['true', '1'].includes(localStorage.getItem('tottakai-pomo-havio-' + p))); } catch (e) { return false; } };
  const kaveriAuki = (t, k) => (k.ehto.havio && !havittu(k.ehto.havio)) ? false
    : (k.ehto.tarina ? tarinaAuki(t, k.ehto.tarina) : (k.ehto.esine || []).some(id => omistaa(t, tavara(id))));
  /* Tarinan palkinto: tarinan tapahtuma (osa luettu loppuun, Saari.seuraaOsa) tai koodista Saari.tarina('jay-baixo'). */
  function tarina(id) { const t = tila(); t.tarinat = t.tarinat || {}; t.tarinat[id] = Date.now(); tallenna(t); }

  /* ---------- kaverien kuvat (piirretyt hahmot kuvitus.js:n tyyliin) ---------- */
  if (K.hahmoKuvat) {
    const h = K.hahmoKuvat;
    h['saari-esra'] = h['saari-esra'] || { iho: '#f0c8a8', hiukset: '#6b4a2f', tukka: 'sotkuinen', paita: '#8a8a8a', tausta: '#e5e1f0', ilme: 'neutraali', lisat: ['sanki'] };
    h['saari-wcplus'] = h['saari-wcplus'] || { iho: '#f2cfb6', hiukset: '#d9b26a', tukka: 'sotkuinen', paita: '#2f9e44', tausta: '#fff3b0', ilme: 'virne', lisat: ['tummat-lasit', 'huulipuna'] };   // valkoinen kaveri huulipunassa (omistaja 18.10.2026)
    h['saari-teemu'] = h['saari-teemu'] || { iho: '#f2c9a8', hiukset: '#c99a5b', tukka: 'kalju', paita: '#d9a441', tausta: '#f6e7c8', ilme: 'virne', lisat: ['tummat-lasit', 'viikset'] };
    // Maian M-ystävät (omistaja 20.10.2026: neljä naista, Maia mukaan lukien viisi M:ää; nimet Tottakain omat, ei Passon
    // hahmoja: ”Dont mix Passo with this”). Kuvat määritellään tässä, ei jaetussa assets/hahmot.js:ssä.
    h['saari-moara'] = h['saari-moara'] || { iho: '#9a6142', hiukset: '#1c120d', tukka: 'kihara', paita: '#d35400', tausta: '#fde3cf', ilme: 'iso', lisat: ['korvikset', 'esiliina'] };
    h['saari-marisa'] = h['saari-marisa'] || { iho: '#e0b08c', hiukset: '#5a2e1a', tukka: 'polkka', paita: '#4aa3b5', tausta: '#d8f0f3', ilme: 'iso', lisat: ['stetoskooppi', 'korvikset'] };
    h['saari-malu'] = h['saari-malu'] || { iho: '#7a4a30', hiukset: '#111111', tukka: 'pitka', paita: '#f1c40f', tausta: '#fff4c2', ilme: 'hymy', lisat: ['korvikset'] };
    h['saari-maira'] = h['saari-maira'] || { iho: '#c4906a', hiukset: '#2b2b2b', tukka: 'kihara', paita: '#1a1a1a', tausta: '#e6e6e6', ilme: 'iso', lisat: ['lasit', 'korvikset', 'atletico'] };
  }
  const PAALLE = {
    'saari-esra': i => `<ellipse cx="43.5" cy="46" rx="3.3" ry="2.7" fill="${i}"/><ellipse cx="56.5" cy="46" rx="3.3" ry="2.7" fill="${i}"/>` +
      '<path d="M40.5 46.5Q43.5 49 46.5 46.5M53.5 46.5Q56.5 49 59.5 46.5" fill="none" stroke="#1d1d1d" stroke-width="1.3" stroke-linecap="round"/>' +
      '<text x="68" y="28" font-family="Georgia,serif" font-size="13" font-weight="700" fill="#5b6fa8">z</text><text x="78" y="18" font-family="Georgia,serif" font-size="9" font-weight="700" fill="#5b6fa8">z</text>',
    'saari-wcplus': () => '<path d="M29 46Q29 16 50 16Q71 16 71 46" fill="none" stroke="#2b2b2b" stroke-width="4"/>' +
      '<rect x="24" y="40" width="10" height="15" rx="4" fill="#e2574c"/><rect x="66" y="40" width="10" height="15" rx="4" fill="#e2574c"/>',
    'saari-teemu': () => '<path d="M31 31Q32 15 50 15Q68 15 69 31Z" fill="#c9b27c"/><path d="M21 33Q50 24 79 33Q50 39 21 33Z" fill="#b39a62"/>' +
      '<rect x="66" y="70" width="6" height="22" rx="2" fill="#2b2b2b"/><circle cx="69" cy="67" r="6" fill="#8a979f"/>'
  };
  function liskoSvg() {
    return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><clipPath id="saari-lisko"><circle cx="50" cy="50" r="50"/></clipPath>' +
      '<g clip-path="url(#saari-lisko)"><rect width="100" height="100" fill="#dff1d6"/>' +
      '<path d="M8 104C10 80 30 72 50 72C70 72 90 80 92 104Z" fill="#2b2f4a"/><path d="M42 72L50 88L58 72Z" fill="#fbfaf6"/><path d="M48 76H52L54 92L50 96L46 92Z" fill="#e2574c"/>' +
      '<path d="M40 72L48 90M60 72L52 90" stroke="#1b1e33" stroke-width="2"/>' +
      '<ellipse cx="50" cy="46" rx="23" ry="25" fill="#5cb85c"/><ellipse cx="50" cy="60" rx="15" ry="9" fill="#78c878"/>' +
      '<circle cx="39" cy="37" r="8" fill="#fff"/><circle cx="61" cy="37" r="8" fill="#fff"/><circle cx="40" cy="38" r="3.5" fill="#1d1d1d"/><circle cx="60" cy="38" r="3.5" fill="#1d1d1d"/>' +
      '<circle cx="46" cy="57" r="1.3" fill="#2d6a4f"/><circle cx="54" cy="57" r="1.3" fill="#2d6a4f"/><path d="M40 64Q50 71 60 64" fill="none" stroke="#2d6a4f" stroke-width="1.8" stroke-linecap="round"/>' +
      '<circle cx="34" cy="52" r="2" fill="#3f8f3a"/><circle cx="66" cy="50" r="2.4" fill="#3f8f3a"/><circle cx="58" cy="24" r="2" fill="#3f8f3a"/></g></svg>';
  }
  function kaveriKuva(k, lakki) {
    const s = document.createElement('span');
    s.className = 'hahmokuva';
    if (k.kuva === 'saari-lisko') { s.innerHTML = liskoSvg(); return s; }
    const KV = window.Kuvitus;
    if (!KV || !(K.hahmoKuvat || {})[k.kuva]) return s;
    let svgT = lakki ? KV.muotokuva(k.kuva, { ohita: { lippis: '#1d4fb8' } }) : KV.muotokuva(k.kuva);
    const paalle = PAALLE[k.kuva];
    if (paalle) svgT = svgT.replace(/<\/g><\/svg>$/, paalle(K.hahmoKuvat[k.kuva].iho) + '</g></svg>');
    s.innerHTML = svgT;
    return s;
  }
  const arpa = a => a[Math.floor(Math.random() * a.length)];
  const RANTA_FALAS = {
    kertoja: ['Eu ia dizer uma coisa muito sábia. Esqueci. O Jay disse que acontece com ele também: ontem ele esqueceu o celular na geladeira.',
      'O Jay e eu temos a mesma memória: ótima para coisas inúteis. Eu lembro de todos os partitivos. Não lembro onde deixei a mandarina.',
      'Repita comigo: {kiitos}. De novo: {kiitos}. Eu já disse isso hoje? Melhor dizer de novo.'],
    manaatti: ['Estou trabalhando. Parece que estou boiando, mas é trabalho.', 'Mais uma coisa na ilha e eu ganho um lugar novo para cochilar. Pense nisso.']
  };

  /* ---------- napautuksen äänet (Tamborim da Malu, Radinhos; 20.10.2026) ----------
     Syntetisoitu Web Audiolla kuten pomotaistelun tehosteet (assets/pomo.js): ei tiedostoja, toimii file://:stä.
     AudioContext luodaan vasta napautuksesta (käyttäjän ele). Sama kytkin 'pomo-aanet' (Ajustes) mykistää nämä. */
  let aanto = null;
  function soi(laji) {
    try {
      if (lue('pomo-aanet', true) === false) return;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!aanto) aanto = new AC();
      if (aanto.state === 'suspended') aanto.resume();
      const c = aanto, t = c.currentTime + 0.02;
      const paa = c.createGain();
      paa.gain.value = 0.4;
      paa.connect(c.destination);
      // Sointi: aaltomuoto, taajuus f0 → f1, kesto (s), voima, alku (s).
      const sointi = (tyyppi, f0, f1, kesto, voima, alku) => {
        const o = c.createOscillator(), g = c.createGain(), a = t + alku;
        o.type = tyyppi;
        o.frequency.setValueAtTime(f0, a);
        o.frequency.exponentialRampToValueAtTime(f1, a + kesto);
        g.gain.setValueAtTime(voima, a);
        g.gain.exponentialRampToValueAtTime(0.0001, a + kesto);
        o.connect(g); g.connect(paa);
        o.start(a); o.stop(a + kesto + 0.02);
      };
      // Kohina: suodatettu purskahdus, joka vaimenee.
      const kohina = (tyyppi, taajuus, kesto, voima, alku) => {
        const n = Math.max(1, Math.floor(c.sampleRate * kesto));
        const b = c.createBuffer(1, n, c.sampleRate), d = b.getChannelData(0);
        for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
        const s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
        s.buffer = b; f.type = tyyppi; f.frequency.value = taajuus; g.gain.value = voima;
        s.connect(f); f.connect(g); g.connect(paa);
        s.start(t + alku);
      };
      if (laji === 'tambor') {
        // Tamborim: neljä kuivaa, korkeaa iskua (sambakuvio), ensimmäinen painotettu.
        [[0, 1], [0.15, 0.6], [0.3, 0.75], [0.45, 0.6]].forEach(([alku, v]) => { sointi('triangle', 1250, 640, 0.07, 0.5 * v, alku); kohina('bandpass', 3800, 0.05, 0.9 * v, alku); });
      } else if (laji === 'radio') {
        // Radiopuhelin: ropina, kaksi piippausta ja loppuropina.
        kohina('highpass', 2200, 0.16, 0.7, 0);
        sointi('square', 1200, 1200, 0.07, 0.12, 0.18);
        sointi('square', 1600, 1600, 0.09, 0.12, 0.28);
        kohina('highpass', 2600, 0.12, 0.5, 0.42);
      }
    } catch (e) { /* ääni ei saa kaataa saarta */ }
  }

  /* ---------- näkymä (#ilha) ---------- */
  let ostettu = null;  // juuri ostettu tavara: uudelleenpiirron jälkeen esiin, saari näkyviin ja repliikki
  let jarjestaa = false, valittu = null;

  function nayta(runko, kuva, apu) {
    const el = apu.el;
    annaLahjat();   // myös aiemmin ansaitut (esim. kultamitali ennen kultapalkintoja) saarelle heti
    const t = tila();
    const KIELI = apu.KIELI || 'fi-FI';
    /* Suomen sana repliikissä: {sana} tai {sana|tunniste} → <span class="fi" lang="fi-FI" data-l="tunniste"> (kupla). */
    const repliikki = teksti => {
      const p = el('span', {});
      String(teksti).split(/(\{[^}]+\})/).forEach(osa => {
        const m = osa.match(/^\{([^}|]+)(?:\|([^}]+))?\}$/);
        if (!m) { if (osa) p.append(osa); return; }
        const fi = el('span', { class: 'fi', lang: KIELI, 'data-l': m[2] || null }, m[1]);
        p.append(fi);
        try { apu.glossaa(fi); } catch (e) { /* kupla ei saa kaataa saarta */ }
      });
      return p;
    };
    const suomeksi = (sana, pt) => {
      const fi = el('span', { class: 'fi', lang: KIELI, 'data-l': /\s/.test(sana) ? null : sana }, sana);
      try { apu.glossaa(fi); } catch (e) { /* ohita */ }
      return el('span', { class: 'kauppa-sana' }, fi, ' ', el('span', { class: 'kaannos', lang: 'pt-BR' }, '= ' + pt));
    };

    // Saaren kuva: kerros tavaroille, kuva saa olla vuorovaikutteinen (ei enää aria-hidden).
    kuva.classList.add('saari-kentta');
    kuva.removeAttribute('aria-hidden');
    kuva.setAttribute('role', 'group');
    kuva.setAttribute('aria-label', 'A ilha do Capivara e do Peixe-boi');
    const kapea = (window.innerWidth || 1000) <= 640;   // sama raja kuin CSS:n puhelinasettelu (kuva ei ole vielä sivulla)

    // Asut: Capivara ja Peixe-boi ostetuissa vaatteissa ja laseissa.
    if (window.Kuvitus) for (const h of ['kertoja', 'manaatti']) {
      const a = t.asu[h] || {};
      const s = kuva.querySelector(`.ilha-hahmo[data-hahmo="${h}"]`);
      if (!s || (!a.paita && !a.lasit && !a.pipo)) continue;
      s.innerHTML = window.Kuvitus.muotokuva(h, { asu: { paita: a.paita, pipo: !!a.pipo }, lasit: a.lasit || undefined });
      if (ostettu && tavara(ostettu) && tavara(ostettu).veste && tavara(ostettu).veste[h]) s.classList.add('saari-uusi');
    }

    const kerros = el('div', { class: 'saari-kerros' });
    kuva.prepend(kerros);
    /* Maisema (omistaja 18.10.2026: aurinko, pilvet, vesi, aallot ja ranta, samaa tasaista tyyliä kuin tavarat):
       taivas ylimpänä, joki sen alla (vesitavarat pysyvät joessa), hiekka ja edessä rantavesi, jossa Peixe-boi kelluu. */
    const maisema = el('div', { class: 'saari-maisema', 'aria-hidden': 'true' });
    maisema.innerHTML =
      svg('0 0 120 120', '<g class="saari-sateet" stroke="#f7c948" stroke-width="7" stroke-linecap="round">' +
        [0, 45, 90, 135, 180, 225, 270, 315].map(k => `<path d="M60 8V20" transform="rotate(${k} 60 60)"/>`).join('') + '</g>' +
        '<circle cx="60" cy="60" r="30" fill="#f7c948"/><circle cx="52" cy="52" r="9" fill="#fbe38a"/>').replace('<svg ', '<svg class="saari-aurinko" ') +
      [['saari-pilvi saari-pilvi-1', 1], ['saari-pilvi saari-pilvi-2', 0.8]].map(([c]) => svg('0 0 120 50',
        '<rect x="10" y="26" width="100" height="18" rx="9" fill="#fff"/><circle cx="40" cy="26" r="16" fill="#fff"/><circle cx="66" cy="20" r="20" fill="#fff"/><circle cx="90" cy="28" r="13" fill="#fff"/>' +
        '<rect x="10" y="38" width="100" height="6" rx="3" fill="#e3f1f5"/>').replace('<svg ', `<svg class="${c}" `)).join('');
    kuva.prepend(maisema);
    const aalto = 'M0 14Q25 4 50 14T100 14T150 14T200 14T250 14T300 14T350 14T400 14V40H0Z';
    const etuvesi = el('div', { class: 'saari-etuvesi', 'aria-hidden': 'true' });
    etuvesi.innerHTML = svg('0 0 400 40', `<path d="${aalto}" fill="#5fb8cf"/><path d="${aalto.replace(/V40H0Z$/, '')}" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="14 10" opacity=".85"/>`)
      .replace('<svg ', '<svg class="saari-aallot" preserveAspectRatio="none" ');
    kuva.append(etuvesi);
    const puhe = el('div', { class: 'pomo-juhla saari-puhe', role: 'status', 'aria-live': 'polite', hidden: true });
    const puhu = (kuka, teksti, kasvoEl) => {
      puhe.innerHTML = '';
      const kasvo = kasvoEl || (window.Kuvitus && window.Kuvitus.avatar(kuka === 'Peixe-boi' ? 'manaatti' : 'kertoja', 'pomo-juhla-kasvo'));
      if (kasvoEl) kasvoEl.classList.add('pomo-juhla-kasvo');
      puhe.append(kasvo || '', el('p', {}, el('b', {}, kuka + ': '), repliikki(teksti)));
      puhe.hidden = false;
    };
    const hyppy = s => { s.classList.remove('saari-hyppy'); void s.offsetWidth; s.classList.add('saari-hyppy'); };
    // Napautuksen efekti: emoji nousee (coquetel, pedido, brilho), pallo lentää maaliin (chute), tavara hyppää.
    const EMOJI = { livro: '📚', ping: '💻', kahvi: '☕', tinta: '🎨', porco: '💗', chuva: '☔', neve: '❄️', voo: '✈️', hora: '🕒', coquetel: '🍹', pedido: '🍔', brilho: '✨', heilu: '💙', pulo: '💦',
      queijo: '🧀', banana: '🍌', venda: '💰', provar: '👕', carta: '✉️', alongar: '🧘', mapa: '🗺️', estrela: '⭐', presente: '🎁',
      tambor: '🥁', festa: '🎉', lupa: '🔍', pergunta: '❓', radio: '📻', curativo: '🩹', vapor: '🍲', bingo: '🎱', verao: '☀️', loyly: '♨️' };
    function efekti(s, x) {
      hyppy(s);
      if (x.toque === 'tambor' || x.toque === 'radio') soi(x.toque);
      if (x.toque === 'kultamandariini') {
        lisaa(5, 'kultapuu', '🍊 +5 da mandarineira de ouro');
        const e = el('span', { class: 'saari-efekti', 'aria-hidden': 'true' }, '🍊');
        s.append(e); setTimeout(() => e.remove(), 1300);
        return;
      }
      if (x.toque === 'chute') { s.classList.remove('saari-chute'); void s.offsetWidth; s.classList.add('saari-chute'); laske('chute', 10, 'chute-10'); return; }
      if (!EMOJI[x.toque]) return;
      const e = el('span', { class: 'saari-efekti', 'aria-hidden': 'true' }, EMOJI[x.toque]);
      s.append(e);
      setTimeout(() => e.remove(), 1300);
    }
    const sijoita = (s, x) => {
      const [px, py] = t.paikat[x.id] || x.paikka;
      s.style.left = px + '%';
      s.style.top = py + '%';
      s.style.width = Math.min(40, x.leveys * MITTAKAAVA * syvyys(py) * (kapea ? 1.3 : 1)) + '%';
      s.style.zIndex = String(Math.round(py));
      // keskella: ankkuri on esineen keskellä (discopallo voi roikkua ylhäällä; omistaja 19.10.2026).
      s.classList.toggle('saari-keskella', !!x.keskella);
    };
    const puhuja = {};
    const puhuTavara = (s, x) => {
      const i = puhuja[x.id] = ((puhuja[x.id] === undefined ? -1 : puhuja[x.id]) + 1) % x.falas.length;
      puhu(...x.falas[i]);
      efekti(s, x);
    };
    for (const x of TAVARAT) {
      if (!omistaa(t, x) || !x.paikka || !KUVAT[x.id]) continue;
      const s = el('span', { class: 'saari-esine', 'data-esine': x.id, role: 'img', 'aria-label': x.nimi });
      s.innerHTML = KUVAT[x.id]();
      sijoita(s, x);
      if (x.id === ostettu) s.classList.add('saari-uusi');
      s.addEventListener('click', e => {
        if (e.target.closest('.saari-amigo, .saari-lugar')) return;
        e.stopPropagation();
        if (jarjestaa) { valitse(s); return; }
        puhuTavara(s, x);
        if (x.conquistas) naytaConquistas();
      });
      s.addEventListener('keydown', e => {
        if (e.target !== s) return;
        if (!jarjestaa) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); s.click(); } return; }
        const askel = { ArrowLeft: [-3, 0], ArrowRight: [3, 0], ArrowUp: [0, -4], ArrowDown: [0, 4] }[e.key];
        if (!askel) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); valitse(s); } return; }
        e.preventDefault();
        valitse(s, true);
        const [px, py] = t.paikat[x.id] || x.paikka;
        siirra(x, px + askel[0], py + askel[1]);
      });
      kerros.append(s);
    }
    const kohde = x => (x.alvo ? kuva.querySelector(x.alvo) : kerros.querySelector(`.saari-esine[data-esine="${x.id}"]`));
    // Ostettavat tavarat toisen sisällä (patinho porealtaassa).
    for (const x of TAVARAT) {
      if (!x.alvo || !x.hinta || !omistaa(t, x) || !KUVAT[x.id]) continue;
      const a = kuva.querySelector(x.alvo);
      if (!a) continue;
      const s = el('span', { class: 'saari-sisalla', 'data-esine': x.id, role: 'button', tabindex: '0', 'aria-label': x.nimi });
      s.innerHTML = KUVAT[x.id]();
      s.addEventListener('click', e => { e.stopPropagation(); puhuTavara(s, x); });
      a.append(s);
    }
    // Palkintotavarat, jotka pomo.js piirtää itse (poreallas): napautus = repliikki.
    for (const x of TAVARAT) {
      if (!x.alvo || x.hinta || !omistaa(t, x)) continue;
      const a = kuva.querySelector(x.alvo);
      if (a) a.addEventListener('click', e => { if (e.target.closest('.saari-amigo, .saari-lugar, .saari-sisalla')) return; puhuTavara(a, x); });
    }
    // Kaverit: tulevat tavaroiden mukana, osa käy satunnaisesti; Esra-Arse varaa riippumaton.
    const varattu = new Set();
    for (const k of KAVERIT) {
      if (!kaveriAuki(t, k)) continue;
      if (!k.aina && Math.random() >= (k.todennakoisyys || 0.5) && !TESTI_KAVERIT) continue;
      const ankkuriId = (k.ehto.esine || ['boombox']).find(id => omistaa(t, tavara(id)) && kohde(tavara(id)));
      const ankkuri = ankkuriId ? kohde(tavara(ankkuriId)) : null;
      const paikka = el('span', { class: 'saari-amigo', 'data-amigo': k.id, role: 'button', tabindex: '0', 'aria-label': k.nimi });
      paikka.append(kaveriKuva(k, false));
      if (ankkuri) { paikka.dataset.ankkuri = ankkuriId; paikka.style.left = k.paikka.x + '%'; paikka.style.top = k.paikka.y + '%'; ankkuri.append(paikka); }
      else { paikka.style.left = '93%'; paikka.style.top = '75%'; kerros.append(paikka); }
      if (k.varaa) varattu.add(k.varaa);
      if (k.id === 'wcplus') saavutus('wcplus');
      if (k.id === 'esra' && ankkuriId === 'rede') saavutus('esra-rede');
      let i = -1;
      paikka.addEventListener('click', e => {
        e.stopPropagation();
        hyppy(paikka);
        if (k.bone) {
          // Maíra (Atlético Mineiro, kavereissa id 'murilo'): napautus pakottaa Cruzeiron lippiksen päähän (omistajan toive).
          const t2 = tila();
          t2.murilo = (t2.murilo || 0) + 1;
          tallenna(t2);
          paikka.innerHTML = '';
          paikka.append(kaveriKuva(k, true));
          puhu(k.nimi, MURILO_BONE[Math.min(t2.murilo, MURILO_BONE.length) - 1], kaveriKuva(k, true));
          saavutus('murilo-bone');
          return;
        }
        i = (i + 1) % k.falas.length;
        puhu(k.nimi, k.falas[i], kaveriKuva(k, false));
      });
      paikka.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); paikka.click(); } });
    }
    // Kaverit kerroksen päällimmäisiksi, kun sivu on piirretty (ankkuritavaran sisällä ne jäisivät muiden tavaroiden taakse):
    // sama kohta prosentteina kerroksesta, z-index yli tavaroiden.
    setTimeout(() => {
      const r0 = kerros.getBoundingClientRect();
      if (!r0.width) return;
      for (const a of [...kuva.querySelectorAll('.saari-amigo')]) {
        if (a.parentElement === kerros) { a.style.zIndex = '105'; continue; }
        const r = a.getBoundingClientRect();
        a.style.left = (100 * (r.left + r.width / 2 - r0.left) / r0.width) + '%';
        a.style.top = (100 * (r.top + r.height / 2 - r0.top) / r0.height) + '%';
        a.style.zIndex = '105';
        kerros.append(a);
      }
    }, 0);
    // Capivara ja Peixe-boi menevät satunnaisesti johonkin avautuneeseen paikkaan (tai jäävät rannalle).
    const otettu = new Set();
    for (const [lyh, hid, nimi] of [['k', 'kertoja', 'Capivara'], ['m', 'manaatti', 'Peixe-boi']]) {
      const h = kuva.querySelector(`:scope > .ilha-vieras > .ilha-hahmo[data-hahmo="${hid}"], :scope > .ilha-hahmo[data-hahmo="${hid}"]`);
      if (!h) continue;
      const vaihtoehdot = [];
      for (const x of TAVARAT) (x.lugares || []).forEach((l, j) => {
        if (l.h.includes(lyh) && omistaa(t, x) && !varattu.has(x.id) && !otettu.has(x.id) && kohde(x)) vaihtoehdot.push([x, l]);
      });
      const kantaja = h.parentElement.classList.contains('ilha-vieras') ? h.parentElement : h;
      const valinta = vaihtoehdot.length ? arpa([null, ...vaihtoehdot]) : null;
      if (!valinta) {
        let n = -1;
        h.setAttribute('role', 'button'); h.setAttribute('tabindex', '0'); h.setAttribute('aria-label', nimi);
        h.addEventListener('click', () => { n = (n + 1) % RANTA_FALAS[hid].length; puhu(nimi, RANTA_FALAS[hid][n]); hyppy(h); if (hid === 'kertoja') laske('capivara', 20, 'capivara-20'); });
        h.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); h.click(); } });
        continue;
      }
      const [x, l] = valinta;
      otettu.add(x.id);
      const lugar = el('span', { class: 'saari-lugar', 'data-lugar': x.id, 'data-hahmo': hid, role: 'button', tabindex: '0', 'aria-label': nimi });
      lugar.style.left = l.x + '%';
      lugar.style.top = l.y + '%';
      lugar.append(kantaja);
      kohde(x).append(lugar);
      lugar.addEventListener('click', e => { e.stopPropagation(); puhu(nimi, l.fala); hyppy(lugar); if (hid === 'kertoja') laske('capivara', 20, 'capivara-20'); });
      lugar.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lugar.click(); } });
    }
    // Päivän yllätys rannalla (kerran päivässä).
    if (!t.paiva.lahja && t.omat.cabana) {
      const lahja = el('button', { type: 'button', class: 'saari-lahja', 'aria-label': 'Chegou alguma coisa boiando na praia. Abrir o presente do dia.', title: 'Presente do dia' });
      lahja.innerHTML = KUVAT.lahja();
      lahja.style.left = '53%';
      lahja.style.top = '42%';
      lahja.style.zIndex = '100';
      lahja.style.width = (kapea ? 9 : 5.5) + '%';
      lahja.addEventListener('click', e => {
        e.stopPropagation();
        const t2 = tila();
        if (t2.paiva.lahja) return;
        t2.paiva.lahja = true;
        tallenna(t2);
        lahja.remove();
        const [kuka, teksti] = YLLATYKSET[paivaNro() % YLLATYKSET.length];
        lisaa(LAHJA, 'presente', 'Presente do dia');
        laske('presentes', 7, 'presente-7');
        if (omistaa(t2, tavara('mandarineira'))) lisaa(PUU_LAHJA, 'presente', 'A mandarineira deu frutas');
        puhu(kuka, teksti + ' Volte amanhã: o rio sempre traz alguma coisa.');
        paivitaKori();
      });
      kerros.append(lahja);
    }

    // Siirtäminen: napauta tavara (valitse), sitten paikka saarella; nuolet siirtävät valittua.
    function valitse(s, pida) {
      if (valittu && valittu !== s) valittu.setAttribute('aria-pressed', 'false');
      valittu = (valittu === s && !pida) ? null : s;
      if (valittu) valittu.setAttribute('aria-pressed', 'true'); else s.setAttribute('aria-pressed', 'false');
      ohje.textContent = valittu ? `Agora toque no lugar novo para: ${tavara(valittu.dataset.esine).nimi}. Ou use as setas do teclado.` : 'Toque numa coisa da ilha para escolher, depois no lugar novo.';
    }
    function siirra(x, px, py) {
      px = Math.max(3, Math.min(97, px));
      py = Math.max(x.keskella ? 3 : 12, Math.min(100, py));   // kerros = kuvan ylin 75 % (omistaja 20.10.2026)
      const vanha = t.paikat[x.id] || x.paikka;
      const t2 = tila();
      t2.paikat[x.id] = [Math.round(px), Math.round(py)];
      tallenna(t2);
      laske('mudancas', 10, 'decorador');
      t.paikat[x.id] = t2.paikat[x.id];
      const s = kerros.querySelector(`.saari-esine[data-esine="${x.id}"]`);
      if (s) sijoita(s, x);
      // Kaverit, joiden paikka on tämän tavaran vieressä (WC+ ja Jay boomboxin luona), siirtyvät mukana (omistaja 19.10.2026).
      const [dx, dy] = [t2.paikat[x.id][0] - vanha[0], t2.paikat[x.id][1] - vanha[1]];
      for (const a of kerros.querySelectorAll(`:scope > .saari-amigo[data-ankkuri="${x.id}"]`)) {
        a.style.left = (parseFloat(a.style.left) + dx) + '%'; a.style.top = (parseFloat(a.style.top) + dy) + '%';
      }
    }
    kerros.addEventListener('click', e => {
      if (!jarjestaa || !valittu) return;
      const r = kerros.getBoundingClientRect();
      siirra(tavara(valittu.dataset.esine), 100 * (e.clientX - r.left) / r.width, 100 * (e.clientY - r.top) / r.height);
    });
    const ohje = el('span', { class: 'saari-ohje' }, '');
    const jarjNappi = el('button', { type: 'button', class: 'paanappi toissijainen saari-jarjesta-nappi', 'aria-pressed': 'false' }, 'Mudar as coisas de lugar');
    const palauta = el('button', { type: 'button', class: 'kauppa-pieni' }, 'Voltar tudo ao lugar original');
    palauta.hidden = true;
    const asetaJarjestys = paalla => {
      jarjestaa = paalla;
      kuva.classList.toggle('saari-jarjestaa', paalla);
      jarjNappi.setAttribute('aria-pressed', String(paalla));
      jarjNappi.textContent = paalla ? 'Pronto' : 'Mudar as coisas de lugar';
      palauta.hidden = !paalla;
      ohje.textContent = paalla ? 'Toque numa coisa da ilha para escolher, depois no lugar novo.' : '';
      for (const s of kerros.querySelectorAll('.saari-esine')) {
        s.setAttribute('role', paalla ? 'button' : 'img');
        if (paalla) s.setAttribute('aria-pressed', 'false'); else s.removeAttribute('aria-pressed');
      }
      if (!paalla) valittu = null;
    };
    jarjNappi.addEventListener('click', () => asetaJarjestys(!jarjestaa));
    palauta.addEventListener('click', () => {
      const t2 = tila(); t2.paikat = {}; tallenna(t2); t.paikat = {};
      for (const s of kerros.querySelectorAll('.saari-esine')) sijoita(s, tavara(s.dataset.esine));
    });
    const omia = TAVARAT.some(x => omistaa(t, x) && x.paikka);
    const tyokalut = el('div', { class: 'saari-tyokalut' }, omia ? jarjNappi : null, omia ? palauta : null, ohje);
    kuva.after(tyokalut, puhe);
    // Saavutukset: majan (tai baarin) napautus avaa listan saaren alle.
    let conquistasEl = null;
    function naytaConquistas() {
      if (conquistasEl && conquistasEl.isConnected) { conquistasEl.remove(); conquistasEl = null; return; }
      conquistasEl = saavutusLista(el);
      puhe.after(conquistasEl);
      try { conquistasEl.scrollIntoView({ block: 'nearest' }); } catch (e) { /* ohita */ }
    }
    if (t.omat.cabana) tyokalut.append(el('span', { class: 'saari-ohje' }, 'Toque na cabana para ver as conquistas 🏆.'));
    // Flamingon asennot (salainen saavutus: kaikki kolme nähty).
    if (omistaa(t, tavara('flamingo'))) { const t2 = tila(); t2.flamingos = t2.flamingos || {}; t2.flamingos[paivaNro() % 3] = 1; tallenna(t2); if (Object.keys(t2.flamingos).length >= 3) saavutus('flamingo-3'); }
    tarkistaSaavutukset();
    // Nimilaput (?testinimet=1): jokaisen hahmon pään yläpuolelle, kun sivu on piirretty.
    if (TESTI_NIMET) setTimeout(() => {
      const r0 = kuva.getBoundingClientRect();
      const nimiOf = h => { const a = h.closest('.saari-amigo'); if (a) return a.getAttribute('aria-label'); const id = h.dataset.hahmo; return id === 'kertoja' ? 'Capivara' : id === 'manaatti' ? 'Peixe-boi' : id === 'maia' ? 'Maia' : id; };
      for (const h of kuva.querySelectorAll('.hahmokuva')) {
        if (h.closest('.pomo-juhla')) continue;
        const r = h.getBoundingClientRect();
        const lappu = el('span', { class: 'saari-nimi' }, nimiOf(h));
        lappu.style.left = (r.left - r0.left + r.width / 2) + 'px';
        lappu.style.top = (r.top - r0.top - 4) + 'px';
        kuva.append(lappu);
      }
    }, 200);
    asetaJarjestys(false);
    for (const s of kerros.querySelectorAll('.saari-esine')) s.setAttribute('tabindex', '0');

    // Päivän kori ja ansaitsemisen säännöt.
    const koriTaso = el('span', { class: 'pomo-elama-taso' });
    const koriTeksti = el('p', { class: 'ohje' });
    function paivitaKori() {
      const d = tila().paiva;
      const n = Math.min(KORI, d.acertos);
      koriTaso.style.width = Math.round(100 * n / KORI) + '%';
      koriTeksti.textContent = n < KORI
        ? `Cesta do dia: ${n} de ${KORI} acertos já valeram 1 🍊 cada. Depois de cheia, as mandarinas continuam caindo, só que mais devagar (1 a cada ${HIDAS} acertos). Amanhã a cesta esvazia.`
        : `A cesta de hoje está cheia: ${KORI} acertos! As mandarinas continuam, 1 a cada ${HIDAS} acertos. Amanhã a cesta esvazia. Medalhas, revisões e o que é novo continuam valendo inteiro.`;
    }
    paivitaKori();
    const saannot = el('details', { class: 'saari-saannot' }, el('summary', {}, 'Como ganhar mandarinas'),
      el('ul', {},
        el('li', {}, 'Medalha de cada lição (todos os exercícios das partes A e B e o quiz): bronze 50 🍊 (25 % de primeira), prata 75 🍊 (75 %), ouro 100 🍊 (90 %). Com menos: uma pedra 🪨. É uma pedra. Você simplesmente ganha. Por tentar. Refazer pode subir a medalha: você recebe a diferença.'),
        el('li', {}, 'Acertou de primeira: 1 🍊 (até encher a cesta do dia). Errar nunca tira nada.'),
        el('li', {}, 'Terminou uma rodada: quiz +2 🍊, Treino +3 🍊, jogo +3 🍊. O quiz é o lugar de juntar mandarinas.'),
        el('li', {}, `Pequenos empurrões da primeira vez: parte lida até o fim +${OSA} 🍊, primeiro quiz da lição +3 🍊, pacote de Treino novo +2 🍊, jogo novo +3 🍊.`),
        el('li', {}, `Primeira resposta do dia +${PAIVA_BONUS} 🍊. Cada revisão de “Hoje” certa +${KERTAUS} 🍊.`),
        el('li', {}, 'Dias seguidos: 3 dias +10 🍊, 7 dias +20 🍊, 14 dias +30 🍊, 30 dias +50 🍊. Parou um dia? Nada se perde, a próxima meta espera.'),
        el('li', {}, `Presente do dia na praia da ilha: +${LAHJA} 🍊 (com a mandarineira, +${PUU_LAHJA} 🍊).`),
        el('li', {}, 'Luta final de cada revisão: vitória +40 🍊 e um prêmio grande para a ilha; lutar de novo +5 🍊.')));
    runko.append(el('div', { class: 'saari-kori' }, el('span', { class: 'pomo-elama' }, koriTaso), koriTeksti), saannot);

    // Palkintohylly (omistaja 18.10.2026): oppituntien kultapalkinnot; saamattomat käännettyinä ”🥇 Lição N”.
    const palkinnot = TAVARAT.filter(x => x.kat === 'trofeu');
    if (palkinnot.length) {
      const hylly = el('div', { class: 'kauppa-ruudukko palkintohylly' });
      for (const x of palkinnot) {
        const o = oppitunti(x.lahja.mitali);
        if (omistaa(t, x)) {
          const kuvake = el('span', { class: 'kauppa-kuva', 'aria-hidden': 'true' });
          kuvake.innerHTML = KUVAT[x.id] ? KUVAT[x.id]() : '';
          hylly.append(el('div', { class: 'kauppa-kortti omistettu' }, kuvake, el('b', {}, x.nimi), suomeksi(x.sana[0], x.sana[1]), el('span', { class: 'kauppa-kuvaus' }, x.kuvaus)));
        } else {
          hylly.append(el('div', { class: 'kauppa-kortti kauppa-kaannetty', 'aria-label': `Troféu escondido: ouro n${artikkeli(o && o.jakso)} ${o ? o.jakso : ''}` },
            el('span', { class: 'kauppa-kaannetty-kuvio', 'aria-hidden': 'true' }, `🥇 ${o ? o.jakso : ''}`)));
        }
      }
      const hyllyOsio = el('section', { class: 'osio palkinnot' },
        el('h2', {}, el('span', { class: 'fi', lang: KIELI }, 'Palkintohylly'), ' · troféus de ouro'),
        el('p', { class: 'ohje' }, 'Cada lição com medalha de ouro (90 % de primeira) põe um troféu na prateleira. A primeira medalha de ouro dá óculos de ouro ao Capivara; a terceira, uma camisa dourada ao Peixe-boi.'), hylly);
      try { apu.glossaa(hyllyOsio.querySelector('.fi')); } catch (e) { /* ohita */ }
      runko.append(hyllyOsio);
    }

    // Kauppa.
    const saldo = apu.saldo();
    const kauppa = el('section', { class: 'osio kauppa', id: 'kauppa' });
    const otsikko = el('h2', {}, el('span', { class: 'fi', lang: KIELI }, 'Kauppa'), ' · a lojinha da ilha');
    try { apu.glossaa(otsikko.querySelector('.fi')); } catch (e) { /* ohita */ }
    kauppa.append(otsikko, el('p', { class: 'ohje' }, `O Peixe-boi atende, quando acorda. Você tem ${saldo} 🍊. Coisas novas aparecem quando você tem mandarinas para comprá-las; algumas abrem só com as medalhas das lições. Mudou de ideia? Devolva e as mandarinas voltam inteiras.`));
    const osta = x => {
      const t2 = tila();
      if (omistaa(t2, x) || !avoin(x) || !x.hinta) return;
      if (!apu.kayta(x.hinta)) return;
      t2.omat[x.id] = Date.now();
      t2.ostot = (t2.ostot || 0) + 1;
      if (x.veste) pue(t2, x, true);
      tallenna(t2);
      ostettu = x.id;
      apu.uudelleen();
    };
    const palautaTavara = x => {
      const t2 = tila();
      if (!t2.omat[x.id]) return;
      delete t2.omat[x.id];
      delete t2.paikat[x.id];
      if (x.veste) pue(t2, x, false);
      tallenna(t2);
      apu.kayta(-x.hinta);
      apu.uudelleen(true);
    };
    /* Paljastus (omistaja 18.10.2026): tavara näkyy vasta, kun mandariinit riittävät sen ostoon (tai se on jo oma,
       aiemmin nähty tai x.paljasta(tila) palauttaa true: valmis koukku muille syille). Kerran nähty pysyy näkyvissä
       (t.nahdyt), vaikka mandariinit kuluisivat. Lahjat näkyvät vasta saatuina. Piilossa oleva tavara on kategoriassaan
       kuvapuoli alaspäin käännettynä korttina; juuri paljastunut kortti kääntyy esiin (omistaja 18.10.2026). */
    /* Tarkennus (omistaja 18.10.2026): kortti kääntyy esiin vasta, kun se on ostettavissa: mandariinit riittävät JA
       muut ehdot (mitali) täyttyvät. Sen jälkeen se pysyy esillä; jos mandariinit eivät nyt riitä, kortti on himmeä.
       Vanhan säännön (pelkät mandariinit) paljastamat lukitut kortit käännetään takaisin, kunnes ehto täyttyy. */
    t.nahdyt = t.nahdyt || {};
    let uusiaNahty = false;
    for (const id of Object.keys(t.nahdyt)) {
      const x = TAVARAT.find(y => y.id === id);
      if (x && !omistaa(t, x) && !avoin(x)) { delete t.nahdyt[id]; uusiaNahty = true; }
    }
    const juuriPaljastuneet = new Set();
    const nakyy = x => {
      if (omistaa(t, x) || t.nahdyt[x.id]) return true;
      let syy = !x.lahja && x.hinta && saldo >= x.hinta && avoin(x);
      if (!syy && typeof x.paljasta === 'function') { try { syy = !!x.paljasta(t); } catch (e) { syy = false; } }
      if (syy) { t.nahdyt[x.id] = Date.now(); uusiaNahty = true; juuriPaljastuneet.add(x.id); }
      return syy;
    };
    for (const [kat, katNimi] of KATEGORIAT) {
      const kaikki = TAVARAT.filter(x => x.kat === kat && !x.palkinto).sort((a, b) => (a.hinta || 0) - (b.hinta || 0));
      const tavarat = kaikki.filter(nakyy);
      const piilossa = kaikki.filter(x => !tavarat.includes(x));
      const ruudukko = el('div', { class: 'kauppa-ruudukko' });
      for (const x of tavarat) {
        const auki = avoin(x), on = omistaa(t, x), ostettuItse = !!t.omat[x.id];
        const kortti = el('div', { class: 'kauppa-kortti' + (on ? ' omistettu' : '') + (auki || on ? '' : ' lukossa') + (!on && auki && !x.lahja && saldo < x.hinta ? ' ei-varaa' : '') + (juuriPaljastuneet.has(x.id) ? ' kauppa-kaantyy' : ''), 'data-esine': x.id });
        const kuvake = el('span', { class: 'kauppa-kuva', 'aria-hidden': 'true' });
        kuvake.innerHTML = KUVAT[x.id] ? KUVAT[x.id]() : '';
        kortti.append(kuvake, el('b', {}, x.nimi), suomeksi(x.sana[0], x.sana[1]), el('span', { class: 'kauppa-kuvaus' }, x.kuvaus));
        const rivi = el('div', { class: 'kauppa-rivi' });
        if (on) {
          rivi.append(el('span', { class: 'kauppa-hinta' }, x.veste ? '✓ É seu' : '✓ Na ilha'));
          if (x.veste) {
            const paalla = kaytossa(t, x);
            const vaihda = el('button', { type: 'button', class: 'kauppa-pieni', 'aria-pressed': String(paalla) }, paalla ? 'Tirar' : 'Vestir');
            vaihda.addEventListener('click', () => { const t2 = tila(); pue(t2, x, !kaytossa(t2, x)); tallenna(t2); apu.uudelleen(true); });
            rivi.append(vaihda);
          }
          if (ostettuItse && x.hinta && t.omat[x.id] !== 'lahja') {
            const pois = el('button', { type: 'button', class: 'kauppa-pieni' }, `Devolver: +${x.hinta} 🍊`);
            pois.addEventListener('click', () => palautaTavara(x));
            rivi.append(pois);
          }
        } else if (x.lahja && x.lahja.pomo) {
          rivi.append(el('span', { class: 'kauppa-lukko' }, `🎁 Presente ao vencer a luta final da revisão ${kertausNro(x.lahja.pomo)}`));
        } else if (x.lahja) {
          rivi.append(el('span', { class: 'kauppa-lukko' }, `🎁 Presente ao terminar ${artikkeli((oppitunti(x.lahja.mitali) || {}).jakso)} ${(oppitunti(x.lahja.mitali) || {}).jakso || 'lição'}`));
        } else if (!auki) {
          rivi.append(el('span', { class: 'kauppa-hinta' }, `🍊 ${x.hinta}`), el('span', { class: 'kauppa-lukko' }, '🔒 ' + lukkoTeksti(x)));
        } else if (saldo >= x.hinta) {
          // Hinta ei käänny (omistaja 19.10.2026: selaimen käännös pudotti 🍊:n osasta nappeja).
          const nappi = el('button', { type: 'button', class: 'visa-aloita' }, 'Comprar · ', el('span', { translate: 'no' }, `🍊 ${x.hinta}`));
          nappi.addEventListener('click', () => osta(x));
          rivi.append(nappi);
        } else {
          rivi.append(el('span', { class: 'kauppa-hinta' }, `🍊 ${x.hinta}`), el('span', { class: 'kauppa-falta' }, `Faltam ${x.hinta - saldo} 🍊`));
        }
        kortti.append(rivi);
        ruudukko.append(kortti);
      }
      // Piilossa olevat: käännetyt kortit samassa järjestyksessä (halvin ensin); selkäpuolella vain hinta (omistaja 18.10.2026).
      for (const x of piilossa) ruudukko.append(el('div', { class: 'kauppa-kortti kauppa-kaannetty',
        'aria-label': x.hinta && !x.lahja ? `Carta virada: ${x.hinta} mandarinas` : 'Carta virada: presente' },
        el('span', { class: 'kauppa-kaannetty-kuvio', 'aria-hidden': 'true' }, x.hinta && !x.lahja ? `🍊 ${x.hinta}` : x.lahja && x.lahja.ouro ? `🥇 ×${x.lahja.ouro}` : '🎁'),
        // Avautumisehto selkäpuolelle, jos sellainen on (”Abre com a medalha da lição 1”).
        !avoin(x) && !x.lahja ? el('span', { class: 'kauppa-kaannetty-ehto' }, '🔒 ' + lukkoTeksti(x)) : null));
      kauppa.append(el('h3', {}, katNimi), ruudukko);
    }
    // Tallennetaan vain nähdyt-kartta tuoreeseen tilaan: piirron aikana kirjatut saavutukset, lahjat ja flamingon asennot
    // eivät saa jäädä vanhan t-otoksen alle (A6-14).
    if (uusiaNahty) { const t3 = tila(); t3.nahdyt = t.nahdyt; tallenna(t3); }
    runko.append(kauppa);

    // Pomopalkinnot (ainutkertaiset) luettelona saaren alla; K1:n teksti tulee pomo.js:stä.
    const voitetut = TAVARAT.filter(x => x.palkinto && x.palkinto !== 'k01' && omistaa(t, x));
    if (voitetut.length) tyokalut.after(...voitetut.map(x => el('p', { class: 'ohje' }, `🏆 Prêmio da revisão ${kertausNro(x.palkinto)}: ${x.nimi}. ${x.kuvaus}`)));
    // Lahja (lição 0:n maja): ensimmäisellä käynnillä esiin, Capivara kertoo.
    if (t.uusiLahja && tavara(t.uusiLahja)) {
      const x = tavara(t.uusiLahja);
      const s = kerros.querySelector(`.saari-esine[data-esine="${x.id}"]`);
      if (s) s.classList.add('saari-uusi');
      if (x.lahjaFala) puhu(...x.lahjaFala);
      const t2 = tila(); delete t2.uusiLahja; tallenna(t2);
    }
    // Juuri ostettu: saari näkyviin ja kaksikon repliikki.
    if (ostettu && tavara(ostettu)) {
      const x = tavara(ostettu);
      puhu(...x.falas[0]);
      puhuja[x.id] = 0;
      const vierita = () => { try { kuva.scrollIntoView({ block: 'center', behavior: window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); } catch (e) { kuva.scrollIntoView(); } };
      setTimeout(vierita, 30);
    }
    ostettu = null;
  }

  window.Saari = { TAVARAT, KUVAT, KAVERIT, TARINAT, MITALIT, KORI, REITTI, HIDAS, ansio, marco, onMarco, seuraaOsa, ilmoita, nayta, tila: () => tila(),
    SAAVUTUKSET, saavutus, tarkistaSaavutukset, seuraaTehtavia, yksikonTunniste, tarkistaMitali, mitaliTila, mitaliTieto, mitaliRivi, edistysRivi, tarina, voitettu, avoin };
})();
