/* Tottakai: sivujen rakentaminen (navigointi, sanakuplat, toisto, harjoitukset, sanastot, visat, kielioppiosiot,
   Treeni ja mandariinit). Haarautettu Passon assets/app.js:stä (päätös 16.10.2026, docs/PAATOKSET.md): kohdekieli on
   suomi ja käyttöliittymä portugaliksi; jaetut moduulit (aani, kuvitus, komponentit) ovat yhteisiä Passon kanssa.
   Erot Passoon: leksikko ja kuplat (assets/sanasto.js, assets/kupla.js; sopimus tottakai/sanasto/README.md), kirjakieli
   (puhekieli vain Na rua -nurkissa), sanasivu #palavra-<tunniste>, kielioppiosio jokaisen oppitunnin alla, Treeni-paketit
   (assets/treeni.js) ja mandariinipisteet. Sivu ei arvaa taivutusta: kaikki muodot tulevat leksikon tunnusmuodoista. */
(function () {
  'use strict';

  const K = window.Kurssi;
  const A = window.Aani;
  const S = window.Sanasto;
  const KA = window.Kasitteet;
  const Kp = window.Kupla;
  const U = K.ui.app;
  /* T15.9 (A6-09): oppituntien järjestys on vain assets/profiili.js:n jarjestys. Kurssi.oppitunnit (latausjärjestys) ja
     valikon sisällys järjestetään sen mukaan; listaan puuttuva oppitunti jää loppuun omaan järjestykseensä.
     tools/tarkista_sanasto.js tarkistaa, että index.html:n skriptijärjestys on sama. */
  const JARJESTYS = (K.profiili && K.profiili.jarjestys) || [];
  const jarjestysNro = id => { const i = JARJESTYS.indexOf(id); return i < 0 ? 1e6 : i; };
  if (JARJESTYS.length && Array.isArray(K.oppitunnit)) {
    const alku = new Map(K.oppitunnit.map((o, i) => [o, i]));
    K.oppitunnit.sort((a, b) => (jarjestysNro(a.id) - jarjestysNro(b.id)) || (alku.get(a) - alku.get(b)));
  }
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const KIELI = 'fi-FI';
  const MUISTI = 'tottakai-';

  let nykyinenOppitunti = null;

  /* Äänitepakettien luettelo (auditointi 5 C2/m6): Tottakailla ei vielä ole äänitteitä (tottakai/aanet/ puuttuu), joten
     paketteja ei pyydetä lainkaan (ei 404-virheitä). Kun paketti tehdään (tottakai/tools/tee_aanet.py), sen nimi
     lisätään luetteloon Kurssi.profiili.aanipaketit (assets/profiili.js), esim. ['yleinen', 't01']. */
  if (K.aanipaketit === undefined && !(K.profiili && Array.isArray(K.profiili.aanipaketit))) K.aanipaketit = [];

  /* ---------- apurit ---------- */
  function el(tag, attrs, ...lapset) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === null || v === undefined || v === false) continue;
      e.setAttribute(k, v === true ? '' : v);
    }
    // Suomenkielinen teksti ja ääntämisohje eivät mene selaimen automaattiseen käännökseen (käännös sotki IPA:n ˈ:n).
    if ((attrs || {}).lang === 'fi-FI' && !('translate' in (attrs || {}))) e.setAttribute('translate', 'no');
    for (const l of lapset) if (l !== null && l !== undefined) e.append(l);
    return e;
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = s => s.toLowerCase().replace(/[.,!?;:"“”«»()¿¡…–—]/g, '').replace(/\s+/g, ' ').trim();
  const muisti = {
    lue(k, oletus) { try { const v = localStorage.getItem(MUISTI + k); return v === null ? oletus : JSON.parse(v); } catch (e) { return oletus; } },
    kirjoita(k, v) { try { localStorage.setItem(MUISTI + k, JSON.stringify(v)); } catch (e) { /* yksityinen ikkuna */ } }
  };
  const sekoita = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  // Sanakuva (AV-073, sarja 1: Fluent Flat + omat litteät piirrokset, 40 px): assets/ikonit/<nimi>.svg. Koriste: sana on
  // kuvan vieressä, joten kuva on ruudunlukijalta piilossa (alt="").
  // Olankohautus (kysymyssanat) vaihtelee viiden ihmisen välillä vuorotellen (omistaja 22.10.2026: ”vary it, the colors, the hair,
  // make like 5 different kinds and use alternatively”).
  let olankohautuksia = 0;
  const sanaIkoni = nimi => el('img', { class: 'sana-ikoni', src: `assets/ikonit/${nimi === 'olankohautus' ? `olankohautus-${olankohautuksia++ % 5 + 1}` : nimi}.svg`, width: '40', height: '40', alt: '' });   // pienet tiedostot: ladataan heti (lazy jätti kuvan hetkeksi tyhjäksi)

  /* ---------- ydinsanat: puhutun suomen 1000 yleisintä perusmuotoa (assets/ydinsanat.js) ---------- */
  const YDIN = new Map();
  (function () {
    const y = K.ydin || { sanat: [], puhekieli: [] };
    y.sanat.forEach(([s, pt, aihe, sl], i) => {
      const sija = i + 1;
      YDIN.set(s, { s, pt, aihe, sl, sija, taso: sija <= 100 ? 100 : sija <= 300 ? 300 : sija <= 500 ? 500 : 1000 });
    });
    y.puhekieli.forEach(([s, pt, kirja, huom]) => {
      const vanha = YDIN.get(s);
      if (!vanha) YDIN.set(s, { s, pt, aihe: 'puhekieli', sl: '', kirja, huom, sija: 0, taso: 'puhe', puhe: true });
    });
  })();
  const PUHEKIELI = (K.ydin ? K.ydin.puhekieli : []).map(r => r[0]);

  /* Sanan tiedot leksikosta (assets/sanasto.js) sanastolistoille, visalle, Treenille ja Gramática-haulle:
     { id, pt (ensimmäinen merkitys), kaikki, sl (sanalajin nimi), huom, oppitunti, l }. Ydinsana ilman tietuetta saa
     vain koneen merkityksen (luokka kone). Taivutettu muoto: perus = tunniste, solu = analyysin solu. */
  const isolla = t => t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
  const nimi = id => S.nimi(id);
  function tiedot(r) {
    return { id: r.id, pt: r.pt[0], kaikki: r.pt, sl: KA.LUOKAT[r.l].nimi, huom: r.huom || '', oppitunti: r.o || null, l: r.l, piilota: !!r.piilota };
  }
  function haeSuoraan(avain) {
    if (!avain) return null;
    const r = S.hae(avain);
    if (r) return tiedot(r);
    const y = S.ydin(avain);
    return y ? { id: null, pt: y.pt, kaikki: [y.pt], sl: KA.LUOKAT.kone.nimi, huom: '', oppitunti: null, l: 'kone', kone: true } : null;
  }
  // ctx: analyysin lauseyhteys (esim. { rekisteri: 'puhe' } puhekielen listalle: et = että, ollaan = me-passiivi).
  // Lauseyhteyden kanssa analyysi voittaa koneen ydinsanan (puhekielen et ei ole ydinsana-et).
  function haeSana(avain, ctx) {
    if (!avain) return null;
    const suora = ctx ? (S.hae(avain) ? tiedot(S.hae(avain)) : null) : haeSuoraan(avain);
    if (suora) return suora;
    const a = S.analysoi(avain, ctx)[0] || S.analysoi(isolla(avain), ctx)[0];
    if (!a) return ctx ? haeSuoraan(avain) : null;
    return Object.assign(tiedot(S.hae(a.id)), { perus: a.id, solu: a.solu || null, johdettu: !!a.solu });
  }
  K.haeSana = avain => haeSana(avain);
  K.ohjain = (...a) => ohjain(...a);

  /* Ydinsanojen jako oppitunneille kuten Passossa: aiheen mukaiset, yleisimmät, puhekieli ja kertaus. */
  // Puhekielen sanoja ei jaeta oppitunneille (käyttäjä 16.10.2026: kirjakieli pohjana, puhekieli vain Na rua -nurkissa).
  const JAKO = { aihe: 8, runko: 5, puhe: 0, kertaus: 3, kertausvali: 3 };
  function jaaYdinsanat() {
    const esitelty = new Map();
    const kerrattu = new Set();
    // Sana, jonka leksikon tietue kuuluu myöhemmälle oppitunnille, ei ole aiemman oppitunnin ydinsana (auditointi 5 M1:
    // ydinsanalaatikko näyttää sanat oppitunnilla, eikä sana saa näkyä ennen omaa oppituntiaan, tarkistus O2).
    const oma = new Map();
    K.oppitunnit.forEach((o, i) => { for (const id of oppitunninTunnisteet(o)) { const k = nimi(id).toLowerCase(); if (!oma.has(k)) oma.set(k, i); } });
    K.oppitunnit.forEach((o, i) => {
      // Oppitunnin leksikkosanat (tietueen o = oppitunti) lasketaan esitellyiksi, ettei samaa sanaa tarjota kahdesti.
      for (const id of oppitunninTunnisteet(o)) { const k = nimi(id).toLowerCase(); if (!esitelty.has(k)) esitelty.set(k, i); }
      const vapaat = tila => (tila === 'puhe' ? PUHEKIELI.map(s => YDIN.get(s)).filter(Boolean) : [...YDIN.values()].filter(y => y.taso !== 'puhe'))
        .filter(y => !esitelty.has(y.s) && !(oma.has(y.s) && oma.get(y.s) > i))
        // Ydinlistan sana, jonka leksikon tietue on puhekieltä (ihan, kiva …), ei kirjakieliseen ydinlaatikkoon (portti R1).
        .filter(y => tila === 'puhe' || !(S.hae(y.s) && S.hae(y.s).l === 'puhe'));
      const aiheet = new Set(o.aiheet || []);
      const ota = (lista, n) => { const v = lista.slice(0, n); v.forEach(y => esitelty.set(y.s, i)); return v.map(y => y.s); };
      // Kertaus (k01 …) ei esittele uusia ydinsanoja (TYONKULKU: kertauksessa ≥ 95 % opetettua); vain kertaussanat.
      const kertausOsa = /^k\d/.test(o.id);
      const aihe = kertausOsa ? [] : ota(vapaat().filter(y => aiheet.has(y.aihe)), JAKO.aihe);
      const runko = kertausOsa ? [] : ota(vapaat(), JAKO.runko);
      const puhe = ota(vapaat('puhe'), JAKO.puhe);
      const kertaus = [...esitelty.entries()]
        .filter(([s, j]) => j <= i - JAKO.kertausvali && YDIN.has(s) && !kerrattu.has(s))
        .sort((a, b) => (YDIN.get(a[0]).sija || 0) - (YDIN.get(b[0]).sija || 0))
        .slice(0, JAKO.kertaus).map(([s]) => s);
      kertaus.forEach(s => kerrattu.add(s));
      o._ydin = { aihe, runko, puhe, kertaus };
    });
  }
  // Oppitunnin sanat = leksikon tietueet, joiden o on oppitunti (sanasto-listan järjestyksessä ensin), ei piilotettuja
  // eikä puhekielisiä (puhekieli vain Na rua -osioissa, käyttäjä 16.10.2026).
  function oppitunninTunnisteet(o) {
    const omat = S.kaikki().filter(r => r.o === o.id && !r.piilota && r.l !== 'puhe').map(r => r.id);
    const jarjestys = new Map((o.sanasto || []).map((k, i) => [k, i]));
    return omat.map((id, i) => [id, jarjestys.has(id) ? jarjestys.get(id) : 1e6 + i]).sort((x, y) => x[1] - y[1]).map(x => x[0]);
  }
  /* Oppitunnin sivuilla oikeasti käytetyt leksikkotunnisteet (AV-020): oppitunnin osat ja Gramática da lição -kortit
     irrallisessa kopiossa samalla jakajalla (glossaa) kuin sivulla; jokaisesta sanasta sama ensimmäinen tulkinta kuin
     kuplassa (ctxSanasta). Mukana myös tehtävien näkyvät vihjeet ([data-ei-kuplaa], esim. ”(kirjoittaa)”), aukkojen
     oikeat vastaukset (data-oikea), Na rua -lauseiden kirjakielinen asu (data-kirja), taivutustaulujen data-verbi ja
     teemasanaston data-sanat.
     Ei esimerkkipaloja (.pala), Maian tahallisia virheitä (data-hairio), käännöksiä eikä portugalinkielisiä kohtia
     (lang="pt…"), kuten Vocabulário da lição -sivulla. Tulos välimuistiin oppituntia kohden.
     muodot (AV-042, Hoje): kirjakieliset taivutetut muodot pinta → { id, solu } samasta läpikäynnistä. */
  const kaytetytMuisti = new WeakMap();
  const oppitunnillaKaytetyt = o => oppitunninAnalyysi(o).ids;
  function oppitunninAnalyysi(o) {
    if (kaytetytMuisti.has(o)) return kaytetytMuisti.get(o);
    const ids = new Set(), muodot = new Map();
    try {
      const pohja = document.createElement('div');
      pohja.innerHTML = oppitunninOsat(o).map(x => x.html || '').concat((o.kielioppi || []).map(k => k.html || '')).join(' ');
      $$('.pala, [data-hairio], .kaannos, [lang^="pt"], script, style, template', pohja).forEach(x => x.remove());
      $$('[data-verbi]', pohja).forEach(x => { if (S.hae(x.dataset.verbi)) ids.add(x.dataset.verbi); });
      // Teemasanasto (.teema data-sanat) näkyy sivulla sanaruudukkona: tunnisteet sellaisinaan.
      $$('.teema[data-sanat]', pohja).forEach(x => x.dataset.sanat.split(',').map(k => k.trim()).filter(k => S.hae(k)).forEach(k => ids.add(k)));
      $$('[data-ei-kuplaa]', pohja).forEach(x => x.removeAttribute('data-ei-kuplaa'));
      $$('.aukko[data-oikea]', pohja).forEach(x => x.append(' ' + x.dataset.oikea.split('|')[0] + ' '));
      $$('.s[data-kirja]', pohja).forEach(x => x.append(el('span', { class: 'kirja', lang: KIELI }, ' ' + x.dataset.kirja + ' ')));
      glossaa(pohja);
      for (const w of $$('.w', pohja)) {
        const an = S.analysoi(w.textContent, ctxSanasta(w))[0];
        if (!an || !an.id) continue;
        ids.add(an.id);
        const pinta = w.textContent.trim().toLowerCase(), r = S.hae(an.id);
        if (an.solu && !an.liite && w.dataset.rek !== 'puhe' && r && r.l !== 'puhe' && !r.piilota && !/[\s:-]/.test(pinta)
          && pinta !== nimi(an.id).toLowerCase() && !muodot.has(pinta)) muodot.set(pinta, { id: an.id, solu: an.solu });
      }
    } catch (e) { /* ohita: kortti jää silloin pois (verbilista tyhjä) */ }
    const tulos = { ids, muodot };
    kaytetytMuisti.set(o, tulos);
    return tulos;
  }
  function oppitunninSanat(o) {
    const tulos = new Map();
    for (const id of oppitunninTunnisteet(o)) tulos.set(id, 'oppitunti');
    const y = o._ydin || {};
    for (const [syy, lista] of [['aihe', y.aihe], ['runko', y.runko], ['puhe', y.puhe], ['kertaus', y.kertaus]]) {
      for (const k of lista || []) if (!tulos.has(k)) tulos.set(k, syy);
    }
    return tulos;
  }

  const IKONI_SOITA = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9.5-5.5z"/></svg>';
  const IKONI_SEIS = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.5" y="3.5" width="9" height="9" rx="1"/></svg>';

  /* Ääntämisohje: tavut viivalla, painollinen (aina ensimmäinen) tavu ISOIN kirjaimin; lasketaan kirjoitusasusta
     (yhdyssana osittain), ellei leksikon tietueessa ole käsin kirjoitettua (Kupla.aa). */
  function aaHtml(aa) {
    return aa.split(/(\s+|-|·)/).map(osa => {
      if (osa === '-') return '<span class="tavuviiva">-</span>';
      if (/^\s+$/.test(osa) || !osa || osa === '·') return osa;
      const paino = /\p{Lu}/u.test(osa) && osa === osa.toUpperCase();
      return paino ? `<b>${esc(osa.toLowerCase())}</b>` : esc(osa);
    }).join('');
  }
  const IPA_VOKAALI = 'ɑæeiouyø';
  const IPA_PAINO = new RegExp(`ˈ[^${IPA_VOKAALI}\\sˈ]*[${IPA_VOKAALI}]ː?`, 'gu');
  function ipaHtml(ipa) {
    const t = esc(String(ipa).replace(/^\s*\[|\]\s*$/g, ''));
    return t.replace(IPA_PAINO, m => `<b>${m}</b>`);
  }
  function aantaminen(teksti, id, luokka) {
    const k = el('div', { class: luokka, translate: 'no' });
    const { aa, ipa } = Kp.aa(teksti, id || null);
    const i = el('span', { class: 'aa-ipa', title: 'Alfabeto Fonético Internacional (IPA)' });
    i.innerHTML = ipaHtml(ipa);
    const f = el('span', { class: 'aa-fi', title: 'Sílabas; a sílaba tônica (sempre a primeira) em MAIÚSCULAS' });
    f.innerHTML = aaHtml(aa);
    k.append(i, f);
    return k;
  }

  function lataaKuva(img, kuva) { img.src = typeof kuva === 'string' ? kuva : kuva.src; }

  /* Merkintäteksti, jossa {sana} viittaa sanastoon: viittauksesta tulee oma, sisäkkäin avautuva kupla. */
  function merkinta(teksti) {
    const frag = document.createDocumentFragment();
    String(teksti || '').split(/\{([^}]+)\}/).forEach((osa, i) => {
      if (i % 2 === 0) { if (osa) frag.append(osa); return; }
      const avain = norm(osa);
      const s = haeSana(osa) || haeSana(avain);
      frag.append(s
        ? el('span', { class: 'w', 'data-k': avain, 'data-l': s.perus || s.id || null, tabindex: '0', lang: KIELI }, osa)
        : el('span', { class: 'fi', lang: KIELI }, osa));
    });
    return frag;
  }

  /* ---------- kun laite ei osaa puhua suomea (auditointi 5 C2) ----------
     voi() = äänitteet tai suomen puheääni on käytössä (Aani.voiPuhua). eiAanta() = selain on jo kertonut äänilistansa
     eikä suomea voi soittaa: body saa luokan ei-aanta, jolloin kuuntelutehtävien ilmoitus ja Pular-napit näkyvät ja
     roolileikin napit piiloutuvat (tottakai.css). Äänen kanssa kaikki toimii kuten ennenkin. */
  const voi = () => (A.voiPuhua ? A.voiPuhua(KIELI) : true);
  const eiAanta = () => (A.aanetHaettu ? A.aanetHaettu() : true) && !voi();
  const EI_AANTA_TEKSTI = 'Sem voz finlandesa neste aparelho.';
  function paivitaAaniLuokka() { document.body.classList.toggle('ei-aanta', eiAanta()); }
  // Yksi rivi kuuntelutehtävän ja visan alkuun (näkyy vain body.ei-aanta).
  function eiAantaIlmoitus() {
    return el('p', { class: 'ei-aanta-ilmoitus', lang: 'pt-BR' }, EI_AANTA_TEKSTI + ' Instale uma voz (',
      el('a', { href: '#inicio' }, 'Início → Testar o som'), ') ou pule.');
  }
  /* Pieni ilmoitus ▶-napin vieressä, kun mitään ei voi soittaa (napin painallus ei saa jäädä ilman vastetta). */
  const toastEl = el('div', { class: 'aani-toast', role: 'status', 'aria-live': 'polite', hidden: true });
  let toastAjastin = 0, viimeKlikkaus = { el: null, aika: 0 };
  function toast(kohde, teksti) {
    if (!toastEl.isConnected) document.body.append(toastEl);
    toastEl.textContent = teksti || EI_AANTA_TEKSTI + ' Veja Início → Testar o som.';
    toastEl.hidden = false;
    const r = kohde && kohde.isConnected ? kohde.getBoundingClientRect() : null;
    const vw = document.documentElement.clientWidth;
    const leveys = toastEl.offsetWidth;
    const x = r ? Math.max(8, Math.min(r.left, vw - leveys - 8)) : Math.max(8, (vw - leveys) / 2);
    const y = r ? r.bottom + 6 : 70;
    toastEl.style.left = (x + window.scrollX) + 'px';
    toastEl.style.top = (y + window.scrollY) + 'px';
    clearTimeout(toastAjastin);
    toastAjastin = setTimeout(() => { toastEl.hidden = true; }, 4000);
  }
  // Aani kertoo (aani-virhe), ettei tekstille ollut äänitettä eikä ääntä: ilmoitus äsken painetun kohdan viereen.
  document.addEventListener('click', e => {
    const k = e.target.closest && e.target.closest('button, a, [role="button"], span.fi, .w');
    viimeKlikkaus = { el: k || e.target, aika: Date.now() };
  }, true);
  document.addEventListener('aani-virhe', () => { if (Date.now() - viimeKlikkaus.aika < 4000) toast(viimeKlikkaus.el); });

  /* ---------- virheraja (A6-07): reitin vaihdon ja käynnistyksen yksi kaatuva vaihe ei kaada muita ----------
     Virhe kirjataan konsoliin (console.error vain oikeasta virheestä: sivutarkistus laskee ne) ja Ajustesin
     rengaspuskuriin (ajustes.js kuuntelee window-tason error-tapahtumaa; puskuriin ei ole suoraa kirjoitustietä), ja
     lukijalle näytetään enintään yksi ilmoitus reitin vaihtoa kohden. Sen jälkeen jatketaan seuraavaan vaiheeseen. */
  let virheIlmoitettu = false;
  function kirjaaVirhe(vaihe, e) {
    const viesti = `Tottakai: ${vaihe}: ${e && e.message ? e.message : String(e)}`;
    console.error(viesti, e);
    try { window.dispatchEvent(new ErrorEvent('error', { message: viesti, filename: 'assets/app.js' })); } catch (x) { /* vanha selain */ }
    if (virheIlmoitettu) return;
    virheIlmoitettu = true;
    try { toast(null, `Algo deu errado nesta página (${vaihe}). Se faltar alguma coisa, recarregue a página. Detalhes em Ajustes → Diagnóstico.`); } catch (x) { /* ilmoitus ei saa kaataa */ }
  }
  const suojaa = (vaihe, f) => { try { f(); } catch (e) { kirjaaVirhe(vaihe, e); } };
  // Automaattinen toisto (vastausnapin jälkeen, visan kuuntelukysymys): vain, jos ääni on käytössä.
  const soitaJosVoi = jono => { if (voi()) A.soita(jono); };

  /* ---------- tulosloki (assets/tulokset.js, auditointi 5 M7; puuttuessa ei mitään) ---------- */
  // Tehtävän tunniste tuloslokin avaimeen (A6-28; saari.js yksikonTunniste): 'tNN:valinta:h1a2b3c:vastaus', jotta kahden
  // tehtävän sama vastaus ei ole sama kertauskohde. Ilman Saarta vanha muoto 'tNN:valinta:vastaus'.
  const yksikkoAvain = kohde => {
    try {
      const y = kohde && kohde.closest ? kohde.closest('.valinta, .aukot, .sanelu, .tehtava, .nappaimisto') : null;
      const t = y && window.Saari && typeof window.Saari.yksikonTunniste === 'function' ? window.Saari.yksikonTunniste(y) : '';
      return t ? t + ':' : '';
    } catch (e) { return ''; }
  };
  function kirjaaTulos(tieto) {
    try {
      if (window.Tulokset && typeof window.Tulokset.kirjaa === 'function') {
        window.Tulokset.kirjaa(Object.assign({ oppitunti: nykyinenOppitunti ? nykyinenOppitunti.id : null, reitti: '#' + reittiNyt() }, tieto));
      }
    } catch (e) { /* tulosloki ei saa kaataa tehtävää */ }
  }

  /* ---------- toistopainike ▶ ---------- */
  function ohjain(hae, { aina = false, nimi = U.kuuntele, teksti = '' } = {}) {
    const kehys = el('span', { class: 'ohj' + (aina ? ' aina' : '') });
    const nappi = el('button', { type: 'button', class: 'soita', 'aria-label': nimi, title: nimi });
    nappi.innerHTML = IKONI_SOITA + (teksti ? `<span>${esc(teksti)}</span>` : '');
    const tila = {
      alku() { kehys.classList.add('paalla'); nappi.querySelector('svg').outerHTML = IKONI_SEIS; },
      loppu() { kehys.classList.remove('paalla'); nappi.querySelector('svg').outerHTML = IKONI_SOITA; }
    };
    nappi.addEventListener('click', e => {
      e.stopPropagation();
      if (kehys.classList.contains('paalla')) { A.pysayta(); return; }
      if (!voi()) { toast(nappi); return; }
      const jono = hae();
      if (jono.length) A.soita(jono, { ohjain: tila });
    });
    kehys.append(nappi);
    return kehys;
  }
  function alkio(s) {
    const h = s.dataset.h || s.closest('[data-h]')?.dataset.h;
    const hahmo = (nykyinenOppitunti && nykyinenOppitunti.hahmot || {})[h] || {};
    return { teksti: s.dataset.puhu, tyyppi: hahmo.tyyppi || 'kertoja', vaihto: hahmo.vaihto || 0, el: s };
  }
  const sana = (teksti, elementti) => [{ teksti, tyyppi: 'kertoja', el: elementti || null }];
  /* T12.4 (AV-010): puhekielinen sana (data-rek="puhe": Na rua -osio tai [data-rekisteri="puhe"]) soi puhe-roolilla
     (tyyppi 'puhe', vaihto 0 = aanet_roolit.json puhe0). Ei Gramática-sivuilla (#tNN-gramatica, #gramatica, hakuosan
     sivut) eikä Na rua -taulukon kirjakielisessä sarakkeessa (solu ilman [data-rekisteri="puhe"]). Ilman puhe0-leikettä
     yhteinen aani.js käyttää selaimen ääntä. */
  const gramaticaSivu = () => { const r = nykyReitti || ''; return /-gramatica$/.test(r) || r === 'gramatica' || r === 'hakuosa' || (K.hakuosa || []).some(h => h.id === r); };
  const PUHE_ROOLI_KAYTOSSA = false;   // true = puhekielisen sanan kupla ja Na rua -solu puhe0-äänellä (T12.4). Pois 23.10.2026: puhe0-leikkeitä ei ole (399 riviä), odottaa omistajan äänityslupaa
  const puheSana = w => PUHE_ROOLI_KAYTOSSA && !!w && !!w.dataset && w.dataset.rek === 'puhe' && !gramaticaSivu() && !(w.closest('.na-rua td') && !w.closest('[data-rekisteri="puhe"]'));
  const puheella = (teksti, elementti) => [{ teksti, tyyppi: 'puhe', vaihto: 0, el: elementti || null }];

  /* ---------- sanojen glossaus ---------- */
  /* Sama sananjakaja kuin tarkistuksissa (Sanasto.tokenoi). Jokaiselle sanalle tallennetaan lauseyhteys kuplaa varten:
     lauseen aiemmat sanat (data-ed, 8 lähintä ensin), seuraavat sanat (data-seur, 3), lauseen alku (data-alku), lähin
     data-l (merkitys tai solu) ja rekisteri (data-rek: puhe, jos sana on Na rua -osiossa tai [data-rekisteri="puhe"]
     -kääreessä). Ei kuplaa: .pala (esimerkkipala), [data-ei-kuplaa] (tehtävän kehote tai vihje, jonka kupla paljastaisi
     vastauksen, auditointi 4 P-M2),
     portugalinkieliset kohdat ([lang^=pt] juuren sisällä), puhujan nimi, käännös ja toistopainike. */
  const PUHEKONTEKSTI = '.na-rua, [data-rekisteri="puhe"]';
  const OHITA = '.w, [data-ei-kuplaa], .puhuja, .kaannos, .ohj, .pala, .kupla, script, style, button.soita';
  function ohitetaanko(p, juuri, lisa) {
    if (p.closest(OHITA) || (lisa && p.closest(lisa))) return true;
    const kieli = p.closest('[lang]');
    return !!kieli && (kieli === juuri || juuri.contains(kieli)) && /^(pt|en|es)/i.test(kieli.getAttribute('lang'));
  }
  function glossaa(juuri, lisa) {
    const kavelija = document.createTreeWalker(juuri, NodeFilter.SHOW_TEXT);
    const solmut = [];
    while (kavelija.nextNode()) solmut.push(kavelija.currentNode);
    let ed = [];   // lauseen aiemmat sanat pienin kirjaimin (nollautuu . ! ? jälkeen); kuplalle 8 lähintä
    const LOPPU = /[.!?…]/;
    for (const solmu of solmut) {
      const p = solmu.parentElement;
      const teksti = solmu.nodeValue;
      if (!p || ohitetaanko(p, juuri, lisa)) { if (LOPPU.test(teksti)) ed = []; continue; }
      const sanat = S.tokenoi(teksti);
      if (!sanat.length) { if (LOPPU.test(teksti)) ed = []; continue; }
      const lMerkki = p.closest('[data-l]');
      const l = lMerkki && (lMerkki === juuri || juuri.contains(lMerkki)) ? lMerkki.dataset.l : null;
      const rek = p.closest(PUHEKONTEKSTI) ? 'puhe' : 'kirja';
      const frag = document.createDocumentFragment();
      let kohta = 0;
      sanat.forEach((t, i) => {
        const vali = teksti.slice(kohta, t.alku);
        if (LOPPU.test(vali)) ed = [];
        frag.append(vali);
        // Seuraavat sanat (enintään 3) saman tekstin sisällä lauseen loppuun asti.
        const seur = [];
        for (let j = i + 1; j < sanat.length && seur.length < 3; j++) {
          if (LOPPU.test(teksti.slice(sanat[j - 1].loppu, sanat[j].alku))) break;
          seur.push(...sanat[j].avain.split(' '));
        }
        const ctx = { ed: ed.slice(-8).reverse(), seur: seur.slice(0, 3), alku: !ed.length, l, rekisteri: rek };
        if (S.analysoi(t.teksti, ctx).length || S.ydin(t.teksti)) {
          frag.append(el('span', { class: 'w', 'data-k': t.avain, 'data-ed': ctx.ed.join(' ') || null, 'data-seur': ctx.seur.join(' ') || null,
            'data-alku': ctx.alku ? '1' : null, 'data-l': l, 'data-rek': rek === 'puhe' ? 'puhe' : null, tabindex: '0', translate: 'no' }, t.teksti));
        } else frag.append(t.teksti);
        ed.push(...t.avain.split(' '));
        kohta = t.loppu;
      });
      const loppu = teksti.slice(kohta);
      if (LOPPU.test(loppu)) ed = [];
      frag.append(loppu);
      solmu.replaceWith(frag);
    }
  }
  /* Muut suomenkieliset alueet (auditointi 3, löydös 8 / G1): lang="fi…"-lohkot (aukkotehtävien lauseet, kysymys-
     summaryt, oppilaskortti), kuvan huudot ja chat-viestit glossataan valmistelun ja kuvituksen jälkeen. Ei kuplaa:
     vastausnapit, yhdistä-parit ja numeronäppäimistö (kupla paljastaisi vastauksen), visan sana, kentät, käännökset (.huuto small, .chat-fi). */
  const SUOMI_ALUE = '[lang^="fi"], .huuto, .chat-teksti';
  const EI_GLOSSATA = 'button:not(.chat-kupla), .vaihtoehdot, .visa-sana, .yhdista, .yhd-kehys, .nappaimisto, input, textarea, select, option, .op-nav, '
    + '#valikko, .huuto > small, .chat-fi, .chat-aika, .ficha-tallennus, template';
  function glossaaSuomi(juuri) {
    for (const a of $$(SUOMI_ALUE, juuri)) {
      if (a.closest(EI_GLOSSATA) || a.closest(OHITA)) continue;
      const yla = a.parentElement && a.parentElement.closest(SUOMI_ALUE);
      if (yla && juuri.contains(yla) && !yla.closest(EI_GLOSSATA) && !yla.closest(OHITA)) continue;   // uloin alue riittää
      glossaa(a, EI_GLOSSATA);
    }
  }
  // Yksi sana, jonka osa on korostettu (<span class="fi">olet<b>ko</b></span>): kupla koko sanalle, korostus säilyy.
  function kokoSana(p) {
    if (!p.children.length || p.querySelector('.w, .pala, [lang]') || p.closest(OHITA)) return false;
    const teksti = p.textContent, t = S.tokenoi(teksti);
    if (t.length !== 1 || t[0].teksti !== teksti.trim()) return false;
    const l = p.closest('[data-l]') ? p.closest('[data-l]').dataset.l : null;
    const rek = p.closest(PUHEKONTEKSTI) ? 'puhe' : 'kirja';
    if (!S.analysoi(t[0].teksti, { ed: [], alku: true, l, rekisteri: rek }).length && !S.ydin(t[0].teksti)) return false;
    const w = el('span', { class: 'w', 'data-k': t[0].avain, 'data-alku': '1', 'data-l': l, 'data-rek': rek === 'puhe' ? 'puhe' : null, tabindex: '0', translate: 'no' });
    while (p.firstChild) w.append(p.firstChild);
    p.append(w);
    return true;
  }
  const ctxSanasta = w => ({
    ed: (w.dataset.ed || '').split(' ').filter(Boolean), seur: (w.dataset.seur || '').split(' ').filter(Boolean),
    alku: w.dataset.alku === '1', l: w.dataset.l || null,
    rekisteri: w.dataset.rek || (w.closest(PUHEKONTEKSTI) ? 'puhe' : 'kirja'),
    // Kuplan opetusjärjestys (kupla.js kuplanOppitunti); vain kurssin oppitunnit (tNN, kNN), ei testisivuja.
    // Oppitunti osoitteesta (#t03, #t03-b, #t03-gramatica, #treino-t03…), ei nykyinenOppitunti-muuttujasta: se voi jäädä
    // edelliseltä sivulta, jolloin kupla riippuisi selausjärjestyksestä (kuplakartta ei toistuisi).
    oppitunti: osoitteenOppitunti()
  });
  function osoitteenOppitunti() {
    let h = '';
    try { h = decodeURIComponent(location.hash || ''); } catch (e) { h = location.hash || ''; }
    const m = h.replace(/^#/, '').match(/^(?:treino-)?([tk]\d\d)(?=$|[-#])/);
    return m && K.oppitunnit.some(o => o.id === m[1]) ? m[1] : null;
  }


  /* ---------- sanakupla (assets/kupla.js) ---------- */
  /* Tietokoneella sisäkkäiset kuplat hiiren alla. Puhelimella (ei hiirtä tai kapea näyttö) kupla on alareunan arkki:
     napautus avaa ilman ääntä (ääni vain ▶-napista), sisäkkäinen sana vaihtaa arkin sisällön ja ”← voltar” palaa. */
  const kuplat = [];
  let piiloAjastin = 0;
  let historia = [];   // arkin edelliset sanat { teksti, ctx, el }
  const kuplanTaso = e => { const k = e.closest('.kupla'); return k ? Number(k.dataset.taso) + 1 : 0; };
  const kosketus = window.matchMedia('(hover: none)');
  const kapea = window.matchMedia('(max-width: 640px)');
  const arkkiTila = () => kosketus.matches || kapea.matches;
  // Arkki avataan napautuksesta (click), ei osoittimen focusinista: focus tulee ennen clickiä, ja jos arkki ehtii
  // auki (ja sivu vierii), click osuu arkin alle jääneeseen kohtaan ja sulkee sen heti (auditointi 3, löydös 1).
  // Näppäimistön focus avaa arkin edelleen. Lisäksi ulkoklikkaus ohitetaan ARKKI_SUOJA ms avaamisen jälkeen.
  const ARKKI_SUOJA = 400;
  let osoitinAika = 0, arkkiAvattu = 0;
  const osoitin = () => { osoitinAika = Date.now(); };
  for (const t of ['pointerdown', 'touchstart', 'mousedown']) document.addEventListener(t, osoitin, { capture: true, passive: true });
  const osoittimenFocus = () => Date.now() - osoitinAika < 1000;

  /* Arkki ja takaisin-nappi: arkin avautuessa historiaan lisätään merkintä (sama osoite), joten puhelimen tai selaimen
     takaisin sulkee arkin eikä poistu sivulta. ✕, ulkoklikkaus ja Esc poistavat merkinnän (history.back); linkki
     (”Tudo sobre”, Gramática) avataan vasta merkinnän poistuttua, ettei historiaan jää tyhjää askelta. */
  let arkkiMerkinta = false;   // nykyinen historiamerkintä on arkin
  let paluu = null;            // history.back() kesken: { jatko, ajastin }
  let merkitseJalkeen = false; // arkki avattiin uudelleen ennen kuin paluu valmistui
  const arkkiAuki = () => !!(kuplat[0] && kuplat[0].el.classList.contains('kupla-arkki'));
  function merkitseArkki() {
    if (arkkiMerkinta) return;
    if (paluu) { merkitseJalkeen = true; return; }
    const tila = history.state || {};
    if (tila.kupla) { arkkiMerkinta = true; return; }   // vanha merkintä (eteenpäin-nappi, uudelleenlataus)
    try { history.pushState(Object.assign({}, tila, { kupla: 1 }), ''); arkkiMerkinta = true; } catch (e) { /* file:// tms. */ }
  }
  function paluuValmis() {
    if (!paluu) return;
    const { jatko, ajastin } = paluu;
    paluu = null;
    clearTimeout(ajastin);
    if (merkitseJalkeen) { merkitseJalkeen = false; if (arkkiAuki()) merkitseArkki(); }
    if (jatko) jatko();
  }
  function puraMerkinta(jatko) {
    if (!arkkiMerkinta) { if (paluu) { if (jatko) paluu.jatko = jatko; } else if (jatko) jatko(); return; }
    arkkiMerkinta = false;
    paluu = { jatko: jatko || null, ajastin: setTimeout(paluuValmis, 600) };   // varmistus, jos popstate ei tule
    history.back();
  }
  window.addEventListener('popstate', () => {
    if (paluu) { paluuValmis(); return; }
    if (arkkiMerkinta) { arkkiMerkinta = false; suljeTasot(0); }
  });

  function rakennaKupla(kupla, kohde, d) {
    kupla.innerHTML = Kp.html(d);
    $$('.pk-soita[data-sano]', kupla).forEach(x => {
      const teksti = x.dataset.sano;
      x.replaceWith(ohjain(() => (puheSana(kohde.el) ? puheella : sana)(teksti, kohde.el && kohde.el.isConnected ? kohde.el : null), { aina: true, nimi: U.kuunteleSana }));
    });
    $$('.hahmokuva[data-hahmo]', kupla).forEach(x => {
      const kuva = window.Kuvitus && window.Kuvitus.avatar(x.dataset.hahmo, 'pk-hahmokuva');
      if (kuva) x.replaceWith(kuva); else x.remove();
    });
    if (kupla.classList.contains('kupla-arkki')) {
      const palkki = el('div', { class: 'kupla-palkki' + (historia.length ? '' : ' kelluva') });
      if (historia.length) {
        const takaisin = el('button', { type: 'button', class: 'kupla-takaisin' }, '← voltar');
        takaisin.addEventListener('click', e => { e.stopPropagation(); nayta(historia.pop(), true); });
        palkki.append(takaisin);
      }
      const sulje = el('button', { type: 'button', class: 'kupla-sulje', 'aria-label': 'Fechar' }, '×');
      sulje.addEventListener('click', e => { e.stopPropagation(); piilotaKuplat(true); });
      palkki.append(sulje);
      kupla.prepend(palkki);
      kupla.scrollTop = 0;
    }
  }
  const suljeTasot = alkaen => {
    while (kuplat.length > alkaen) kuplat.pop().el.remove();
    if (!alkaen) { historia = []; document.body.classList.remove('arkki-auki'); }
  };
  // Arkki: yksi kupla, jonka sisältö vaihtuu. takaisin = ”← voltar” (ei lisätä historiaan).
  function nayta(kohde, takaisin) {
    const d = Kp.data(kohde.teksti, kohde.ctx);
    if (!d) return;
    let kupla = kuplat[0] && kuplat[0].el;
    if (!kupla) {
      kupla = el('div', { class: 'kupla kupla-arkki', role: 'dialog', 'aria-label': kohde.teksti, 'data-taso': '0' });
      document.body.append(kupla);
      kuplat.push({ el: kupla, sana: kohde.el, kohde });
      arkkiAvattu = Date.now();
      merkitseArkki();
    } else if (!takaisin && kuplat[0].kohde) historia.push(kuplat[0].kohde);
    kuplat[0].sana = kohde.el;
    kuplat[0].kohde = kohde;
    rakennaKupla(kupla, kohde, d);
    // Luettava lause jää näkyviin arkin yläpuolelle.
    document.body.classList.add('arkki-auki');
    if (kohde.el && kohde.el.isConnected && !kohde.el.closest('.kupla')) {
      const r = kohde.el.getBoundingClientRect(), vapaa = window.innerHeight - kupla.offsetHeight - 12;
      if (r.bottom > vapaa) window.scrollBy({ top: r.bottom - vapaa + 8, behavior: 'smooth' });
    }
  }
  function naytaKupla(sanaEl) {
    const kohde = { teksti: sanaEl.textContent, ctx: ctxSanasta(sanaEl), el: sanaEl };
    clearTimeout(piiloAjastin);
    if (arkkiTila()) {
      if (kuplat[0] && kuplat[0].sana === sanaEl) return;
      if (!sanaEl.closest('.kupla')) suljeTasot(0);
      nayta(kohde, false);
      return;
    }
    const taso = kuplanTaso(sanaEl);
    if (kuplat[taso] && kuplat[taso].sana === sanaEl) { suljeTasot(taso + 1); return; }
    const d = Kp.data(kohde.teksti, kohde.ctx);
    if (!d) return;
    suljeTasot(taso);
    const kupla = el('div', { class: 'kupla', role: 'tooltip', 'data-taso': String(taso) });
    // Pelikerroksen (z 60, body.peli-auki) päällä kupla nousee 20:llä (A6-23, T15.11); pomo- ja kassa-areenat hoitaa CSS.
    kupla.style.zIndex = String(50 + taso + (document.body.classList.contains('peli-auki') ? 20 : 0));
    rakennaKupla(kupla, kohde, d);
    document.body.append(kupla);
    kuplat.push({ el: kupla, sana: sanaEl, kohde });
    sijoita(kupla, sanaEl.getBoundingClientRect(), taso);
    const sisus = kupla.firstElementChild;
    if (sisus) sisus.addEventListener('scroll', () => suljeTasot(taso + 1), { passive: true });
  }
  /* Kupla sille puolelle sanaa (alle tai yläpuolelle), jossa on tilaa; jos kumpikaan ei riitä, tilavampi puoli ja
     korkeusraja: sisältö (.pk) vierii kuplan sisällä (kuplan oma reuna jää näkyviin, ja sen näkymätön reunus pitää
     hiiren matkan sanasta kuplaan). Vaakasuunnassa 12 px reunasta. Kiinteä yläpalkki lasketaan yläreunaksi. */
  const KUPLA_VALI = 8, KUPLA_REUNA = 12;
  function sijoita(kupla, r, taso) {
    const vw = document.documentElement.clientWidth, vh = window.innerHeight;
    const palkki = $('.ylapalkki');
    const ylaraja = palkki && /sticky|fixed/.test(getComputedStyle(palkki).position) ? Math.max(0, palkki.getBoundingClientRect().bottom) : 0;
    const alla = vh - r.bottom - KUPLA_VALI - KUPLA_REUNA;
    const ylla = r.top - KUPLA_VALI - Math.max(KUPLA_REUNA, ylaraja + 4);
    const sisus = kupla.firstElementChild;
    let korkeus = kupla.offsetHeight;
    const alas = korkeus <= alla || (korkeus > ylla && alla >= ylla);
    const tila = Math.max(alas ? alla : ylla, 120);
    if (korkeus > tila && sisus) {
      sisus.style.maxHeight = Math.max(60, tila - (korkeus - sisus.offsetHeight)) + 'px';
      sisus.style.overflowY = 'auto';
      sisus.style.overscrollBehavior = 'contain';
      korkeus = kupla.offsetHeight;
    }
    const leveys = kupla.offsetWidth;
    let x = r.left + (taso ? 24 : r.width / 2 - leveys / 2);
    x = Math.max(KUPLA_REUNA, Math.min(x, vw - leveys - KUPLA_REUNA));
    const y = alas ? r.bottom + KUPLA_VALI : r.top - KUPLA_VALI - korkeus;
    kupla.style.left = (x + window.scrollX) + 'px';
    kupla.style.top = (y + window.scrollY) + 'px';
  }
  function piilotaKuplat(heti, jatko) {
    clearTimeout(piiloAjastin);
    if (heti) { suljeTasot(0); puraMerkinta(jatko); }
    else piiloAjastin = setTimeout(() => suljeTasot(0), 320);
  }
  // Hiiren alla kupla aukeaa 0,5 s viiveellä, sulkeutuu heti (omistaja 19.10.2026); napautus ja klikkaus avaavat heti.
  let avausAjastin = null;
  document.addEventListener('mouseover', e => {
    if (arkkiTila()) return;
    const w = e.target.closest('.w');
    if (w) { clearTimeout(piiloAjastin); clearTimeout(avausAjastin); avausAjastin = setTimeout(() => { if (w.isConnected) naytaKupla(w); }, 500); return; }
    if (e.target.closest('.kupla')) clearTimeout(piiloAjastin);
  });
  document.addEventListener('mouseout', e => {
    if (arkkiTila()) return;
    if (!e.target.closest('.w, .kupla')) return;
    if (e.target.closest('.w') && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.w') === e.target.closest('.w'))) clearTimeout(avausAjastin);
    const minne = e.relatedTarget;
    if (minne && minne.closest && minne.closest('.w, .kupla')) return;
    piilotaKuplat(true);
  });
  document.addEventListener('focusin', e => {
    const w = e.target.closest('.w');
    if (!w || (arkkiTila() && osoittimenFocus())) return;   // napautus: arkki avataan clickistä
    naytaKupla(w);
  });
  // Napautus tai klikkaus avaa kuplan ilman ääntä (päätös P6); ääni vain ▶-napista. Kuplan sanalinkki (a.w) vie
  // tietokoneella sanasivulle; arkissa se vaihtaa arkin sisällön. Arkin ollessa auki sivun sisäinen linkki avataan
  // vasta, kun arkin historiamerkintä on poistettu. Sana napin sisällä (chat-viesti, kuvan huuto): kupla avautuu,
  // napin oma toiminto (ääni, käännös) ei.
  document.addEventListener('click', e => {
    const w = e.target.closest && e.target.closest('.w');
    if (!w || w.closest('.kupla') || !w.parentElement.closest('button, [role="button"]')) return;
    e.stopPropagation();
    klikkaus(e);
  }, true);
  document.addEventListener('click', klikkaus);
  function klikkaus(e) {
    const arkki = arkkiTila() && arkkiAuki();
    const sisalla = !!e.target.closest('.kupla');
    if (arkki && !sisalla && Date.now() - arkkiAvattu < ARKKI_SUOJA) { e.preventDefault(); return; }
    const w = e.target.closest('.w');
    const a = !w && e.target.closest('a[href^="#"]');
    if (arkki && a && !a.target && !e.defaultPrevented && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      const h = a.getAttribute('href');
      piilotaKuplat(true, () => { if (location.hash !== h) location.hash = h; });
      return;
    }
    if (w) {
      clearTimeout(avausAjastin);
      if (w.tagName === 'A' && arkkiTila()) e.preventDefault();
      if (w.tagName !== 'A' || arkkiTila()) naytaKupla(w);
      return;
    }
    const p = e.target.closest('span.fi');
    if (p && !e.target.closest('.kupla')) { A.soita(sana(p.textContent, p)); return; }
    if (!e.target.closest('.kupla')) piilotaKuplat(true);
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { A.pysayta(); piilotaKuplat(true); }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList?.contains('w') && e.target.tagName !== 'A') { e.preventDefault(); A.soita(sana(e.target.textContent, e.target)); }
  });

  /* ---------- mandariinit (pisteet) ja tulokset ---------- */
  const PISTEET = 'pisteet';
  const pisteet = () => muisti.lue(PISTEET, { mandariinit: 0, paketit: {}, oppitunnit: {} });
  /* Mandariinitalous (assets/saari.js, PELILLISTAMINEN ”Mandariinitalous ja kauppa”): syy 'acerto' (oletus) menee
     päivän korin kautta (Saari.ansio: korin jälkeen hitaammin); muut syyt (quiz, treino, jogo, marco, dia, revisao,
     presente, pomo) annetaan sellaisenaan. Selitys → ilmoitus ”+N 🍊 selitys” ruudun alareunaan. Palauttaa annetun määrän. */
  function lisaaMandariineja(n, syy, selitys) {
    const Sa = window.Saari;
    let annettu = n;
    try { if (Sa && typeof Sa.ansio === 'function') annettu = Sa.ansio(n, syy || 'acerto', '#' + reittiNyt()); } catch (e) { annettu = n; }
    if (!(annettu > 0)) return 0;
    const p = pisteet();
    p.mandariinit += annettu;
    p.ansaittu = (p.ansaittu || 0) + annettu;
    muisti.kirjoita(PISTEET, p);
    paivitaMandariinit(annettu, syy);
    if (selitys && Sa && typeof Sa.ilmoita === 'function') Sa.ilmoita(`+${annettu} 🍊 ${selitys}`);
    return annettu;
  }
  // Kauppa (assets/saari.js): n > 0 ostaa (false, jos ei riitä), n < 0 palauttaa ostoksen hinnan.
  function kaytaMandariineja(n) {
    const p = pisteet();
    if (n > 0 && p.mandariinit < n) return false;
    p.mandariinit -= n;
    p.kaytetty = (p.kaytetty || 0) + n;
    muisti.kirjoita(PISTEET, p);
    paivitaMandariinit(-n);
    return true;
  }
  // Yläpalkin luku laskee uuteen arvoon (ei reduced-motionissa), +N tai −N nousee ja mandariini hypähtää.
  let naytettyMaara = null, laskuri = 0;
  function paivitaMandariinit(lisays) {
    const m = $('#mandariinit');
    const uusi = pisteet().mandariinit;
    const luku = $('#sisalto .ilha-luku b');
    if (luku) luku.textContent = String(uusi);
    if (!m) return;
    const b = m.querySelector('b');
    const vanha = naytettyMaara === null ? uusi : naytettyMaara;
    naytettyMaara = uusi;
    const liike = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    cancelAnimationFrame(laskuri);
    if (lisays && liike && Math.abs(uusi - vanha) > 1) {
      const alku = performance.now(), kesto = 600;
      const askel = nyt => {
        const f = Math.min(1, (nyt - alku) / kesto);
        b.textContent = String(Math.round(vanha + (uusi - vanha) * f));
        if (f < 1) laskuri = requestAnimationFrame(askel);
      };
      laskuri = requestAnimationFrame(askel);
    } else b.textContent = String(uusi);
    if (lisays) {
      const pop = el('span', { class: 'mandariini-pop' + (lisays < 0 ? ' miinus' : '') }, (lisays > 0 ? '+' : '−') + Math.abs(lisays));
      m.append(pop);
      setTimeout(() => pop.remove(), 1200);
      m.classList.remove('mandariini-hyppy');
      void m.offsetWidth;
      m.classList.add('mandariini-hyppy');
    }
  }
  // Tehtävän ensimmäinen tulos ratkaisee mandariinin (passo:tulos-tapahtuma, kuten Passon manaatti kuuntelee): oikein
  // ensimmäisellä yrityksellä = 1 🍊; väärän tai osittaisen jälkeen myöhempi oikea ei anna mitään (A6-15, T15.3).
  const palkitut = new WeakSet();
  document.addEventListener('passo:tulos', e => {
    const kohde = e.target.closest('.valinta, .aukot, .sanelu, .tehtava, .treeni-kohta, .visa, .nappaimisto') || e.target;
    if (palkitut.has(kohde)) return;
    palkitut.add(kohde);
    if (e.detail.tulos === 'oikein') lisaaMandariineja(1, 'acerto');
  });
  K.mandariinit = { lisaa: lisaaMandariineja, kayta: kaytaMandariineja, pisteet };
  /* T15.1 (A6-13): kaksi välilehteä. pisteet() lukee localStoragen juuri ennen jokaista kirjoitusta (lisaa, kayta),
     joten toisen välilehden ansiot eivät katoa. Toisen välilehden muutos ('storage'-tapahtuma) mitätöi tämän
     välilehden näkyvät kopiot: yläpalkin mandariiniluku (naytettyMaara), etusivun Hoje ja valikon tehty-merkit. */
  window.addEventListener('storage', e => {
    if (e.key !== null && !String(e.key).startsWith(MUISTI)) return;
    const k = e.key === null ? null : e.key.slice(MUISTI.length);
    try {
      if (k === null || k === PISTEET) { naytettyMaara = null; paivitaMandariinit(0); }
      if (k === null || /^tulokset-|^tahdet$/.test(k)) { const m = $('#sisalto'); if (m && $('#hoje', m)) hoje(m); }
      if (k === null || k === PISTEET || /^(visa|koti-|arvio-|saari)/.test(k)) paivitaMerkit();
    } catch (x) { /* sivu ei vielä valmis */ }
  });
  // Kertakaikkinen palkinto (Saari.marco: osa luettu, ensimmäinen quiz, uusi paketti tai peli); 0, jos jo saatu.
  const marco = (avain, n, selitys) => { try { return window.Saari && typeof window.Saari.marco === 'function' ? window.Saari.marco(avain, n, selitys) : 0; } catch (e) { return 0; } };

  /* ---------- sisällön valmistelu ---------- */
  // Emojit eivät ole kursiivilla (omistaja 19.10.2026): emoji omaan span.emoji-elementtiin, jonka tyyli on pysty.
  const EMOJI = /(\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic})*)/u;
  function erotaEmojit(juuri) {
    const kulkija = document.createTreeWalker(juuri, NodeFilter.SHOW_TEXT);
    const solmut = [];
    while (kulkija.nextNode()) if (EMOJI.test(kulkija.currentNode.nodeValue)) solmut.push(kulkija.currentNode);
    for (const n of solmut) {
      const osat = n.nodeValue.split(EMOJI);
      n.replaceWith(...osat.filter(Boolean).map(x => EMOJI.test(x) ? el('span', { class: 'emoji' }, x) : document.createTextNode(x)));
    }
  }
  function valmistele(juuri, o) {
    // Teemapelien aloituskortit oppitunnin osassa (peli-upotus → peliKortti).
    $$('.peli-upotus[data-peli]', juuri).forEach(x => { const pl = window.Pelit && window.Pelit.hae(x.dataset.peli); if (pl) x.replaceWith(peliKortti(pl)); else x.remove(); });
    const hahmot = (o && o.hahmot) || {};
    const jarjestys = Object.keys(hahmot);
    $$('.s', juuri).forEach(s => {
      const lause = el('span', { class: 'lause', lang: KIELI });
      while (s.firstChild) lause.append(s.firstChild);
      s.dataset.puhu = s.dataset.puhu || lause.textContent.trim().replace(/\s+/g, ' ');
      glossaa(lause);
      erotaEmojit(lause);
      const h = s.dataset.h;
      const puhuja = h && hahmot[h] ? el('span', { class: 'puhuja', 'data-p': String(jarjestys.indexOf(h) % 4) }, hahmot[h].nimi) : null;
      s.append(ohjain(() => [alkio(s)], { nimi: U.kuunteleLause }));
      if (puhuja) {
        const kasvo = window.Kuvitus && window.Kuvitus.avatar(h, 'puhuja-kasvo');
        // Hahmo ilman piirrettyä kuvaa: värillinen ympyrä paikanpitäjäksi, jotta repliikit ovat linjassa (käyttäjä 17.10.2026).
        puhuja.prepend(kasvo || el('span', { class: 'hahmokuva puhuja-kasvo puhuja-paikka', 'aria-hidden': 'true' }));
        s.append(puhuja); s.classList.add('on-puhuja');
      }
      s.append(lause);
      // Kirjakielinen asu Na rua -nurkan puhekielisen lauseen alla (aina näkyvissä) ja käännös portugaliksi.
      if (s.dataset.kirja && norm(s.dataset.kirja) !== norm(s.dataset.puhu)) {
        const kirja = el('span', { class: 'kirja', lang: KIELI }, s.dataset.kirja);
        glossaa(kirja);
        s.append(kirja); s.classList.add('on-kirja');
      }
      if (s.dataset.pt) s.append(el('span', { class: 'kaannos', lang: 'pt-BR' }, s.dataset.pt));
    });
    $$('.kpl', juuri).forEach(k => {
      const nimi = k.dataset.nimi || U.kuunteleKappale;
      const palkki = el('div', { class: 'kpl-palkki' });
      palkki.append(ohjain(() => $$('.s', k).map(alkio), { aina: true, nimi, teksti: nimi }));
      k.prepend(palkki);
    });
    $$('span.fi, b.fi, i.fi', juuri).forEach(p => { p.setAttribute('lang', KIELI); p.setAttribute('translate', 'no'); kokoSana(p) || glossaa(p); });
    valmisteleTehtavat(juuri, hahmot);
    taivutustaulut(juuri);
    $$('.ficha-tallennus', juuri).forEach(p => p.setAttribute('lang', 'pt-BR'));
    glossaaSuomi(juuri);
    $$('table', juuri).forEach(t => {
      if (t.closest('.taulukko-kaari, .vieritys')) return;
      const kaari = el('div', { class: 'vieritys' });
      t.replaceWith(kaari);
      kaari.append(t);
    });
    $$('.valinta', juuri).forEach(v => {
      const oikea = norm(v.dataset.oikea || '');
      // Useampi oikea vastaus: data-oikea="juustoa|juuston" (omistaja 19.10.2026: kokonainen juusto tai siivuja).
      const oikeat = (v.dataset.oikea || '').split('|').map(norm);
      const palaute = el('p', { class: 'palaute', 'aria-live': 'polite' });
      if (v.dataset.kuuntele) {
        const kohta = $('.kysymys', v) || v.firstElementChild;
        kohta.prepend(ohjain(() => sana(v.dataset.kuuntele), { aina: true, nimi: U.kuunteleTehtava }));
      }
      // Kysymyksen kuva (AV-073, sarja 1): data-sanakuva="nimi" (ei data-ikoni: matkabingo käyttää sitä emojille) → assets/ikonit/nimi.svg kysymyksen eteen. Kuvassa ei ole
      // tekstiä, joten yksikön tunniste (saari.js yksikonTeksti) ei muutu.
      if (v.dataset.sanakuva) ($('.kysymys', v) || v.firstElementChild).prepend(sanaIkoni(v.dataset.sanakuva));
      let kirjattu = false;
      $$('.vaihtoehdot button', v).forEach(b => {
        // Portugalinkieliset vaihtoehdot (<div class="vaihtoehdot" lang="pt-BR">) eivät ole kohdekieltä: niitä ei lueta.
        const portugaliksi = !!b.closest('[lang="pt-BR"]');
        if (!portugaliksi) b.setAttribute('lang', KIELI);
        // Alkuperäinen teksti talteen ennen selaimen käännöstä (omistaja 19.10.2026: L4B e6 ”tipo 2” käännettiin
        // ”type 2”, ja jokainen vastaus näytti väärältä).
        const arvo = b.textContent;
        b.addEventListener('click', () => {
          const ok = oikeat.includes(norm(arvo));
          $$('.vaihtoehdot button', v).forEach(x => x.classList.remove('vaarin'));
          b.classList.add(ok ? 'oikein' : 'vaarin');
          palaute.textContent = ok ? U.oikein : U.eiAivanKuuntele;
          palaute.className = 'palaute ' + (ok ? 'ok' : 'ei');
          v.classList.remove('ohitettu');
          ilmoitaTulos(v, ok ? 'oikein' : 'vaarin');
          // Tulosloki: ensimmäinen vastaus ratkaisee (myöhempi oikea arvaus ei tee väärästä oikeaa).
          if (!kirjattu) { kirjattu = true; kirjaaTulos({ lahde: 'tehtava', avain: `${(nykyinenOppitunti || {}).id || ''}:valinta:${yksikkoAvain(v)}${oikea}`, teksti: v.dataset.oikea || '', oikein: ok }); }
          if (!portugaliksi) soitaJosVoi(sana(arvo));
        });
      });
      v.append(palaute);
      // Kuuntelukohta ilman ääntä: ”Pular” ohittaa kohdan; ohitus ei ole tulos (ei mandariinia, ei lokia).
      if (v.dataset.kuuntele) {
        const ohita = el('button', { type: 'button', class: 'pieni-nappi toissijainen pular-nappi' }, 'Pular');
        ohita.addEventListener('click', () => {
          v.classList.add('ohitettu');
          palaute.className = 'palaute';
          palaute.textContent = 'Pulado: não conta. Volte quando tiver som.';
        });
        palaute.before(ohita);
      }
    });
  }

  /* Taivutustaulut leksikosta (Sanasto.paradigma, ei arvausta): <div class="taivutustaulu" data-verbi="puhua"
     data-osat="myonteinen,kielto,kysymys"></div> ja <div class="sijataulu" data-sana="talo" data-sijat="…"></div>
     (sijataulu: leksikon tietue, tai data-gen, data-part ja data-ill, joista Taivutus.nomini laskee yksikön sijat).
     Sarakkeiden ja sijojen nimet käsitetaulusta (Kasitteet). Verbi, jota ei ole leksikossa: ei taulua (konsoliin varoitus). */
  const SIJASOLU = { nominatiivi: 'nom', genetiivi: 'gen', partitiivi: 'part', inessiivi: 'ines', elatiivi: 'ela', illatiivi: 'ill',
    adessiivi: 'ade', ablatiivi: 'abl', allatiivi: 'all', essiivi: 'ess', translatiivi: 'transl', monikko: 'mon.nom' };
  const NOMINISIJAT = { genetiivi: 'gen', partitiivi: 'part', illatiivi: 'ill', inessiivi: 'ines', elatiivi: 'ela', adessiivi: 'ade',
    ablatiivi: 'abl', allatiivi: 'all', essiivi: 'ess', translatiivi: 'transl', monikko: 'mon.nom' };
  function taivutustaulut(juuri) {
    $$('.taivutustaulu[data-verbi]', juuri).forEach(d => {
      const inf = d.dataset.verbi;
      const r = S.hae(inf);
      if (!r || r.l !== 'verbi') { console.warn('Tottakai: taivutustaulu, verbiä ei ole leksikossa:', inf); d.remove(); return; }
      const p = S.paradigma(inf);
      const ei = S.hae('ei') ? S.paradigma('ei') : {};
      const KIELLOT = { '1s': 'en', '2s': 'et', '3s': 'ei', '1p': 'emme', '2p': 'ette', '3p': 'eivät' };
      const osat = (d.dataset.osat || 'myonteinen,kielto').split(',').filter(o => ['myonteinen', 'kielto', 'kysymys'].includes(o));
      const OTS = { myonteinen: KA.AJAT.prees.nimi, kielto: KA.solu('kielto').nimi, kysymys: KA.AJAT.kys.nimi };
      const t = el('table', { class: 'taivutus taivutuskone', lang: KIELI });
      t.append(el('caption', {}, el('span', { class: 'fi' }, inf), el('span', { lang: 'pt-BR' }, ` · ${d.dataset.selite || KA.TYYPIT[r.t.tyyppi] || ''}`)));
      const yla = el('tr', {}, el('th', { lang: 'pt-BR' }, ''), ...osat.map(o => el('th', { lang: 'pt-BR' }, OTS[o])));
      t.append(el('thead', {}, yla));
      const tb = el('tbody');
      for (const k of KA.PERSOONAT) {
        const pron = KA.PRONOMINI[k];
        // Persoona myös portugaliksi (käyttäjä 17.10.2026: ei pelkkää suomea): minä / eu.
        const tr = el('tr', {}, el('th', { scope: 'row' }, el('span', { class: 'pron' }, pron), el('span', { class: 'kaannos', lang: 'pt-BR' }, KA.PERSOONA[k])));
        for (const o of osat) {
          const m = o === 'myonteinen' ? `${pron} ${p['prees.' + k]}` : o === 'kielto' ? `${pron} ${ei['prees.' + k] || KIELLOT[k]} ${p.kielto}` : `${p['kys.' + k]} ${pron}?`;
          tr.append(el('td', {}, ohjain(() => sana(m), { aina: true, nimi: U.kuuntele + ': ' + m }), el('span', {}, m)));
        }
        tb.append(tr);
      }
      t.append(tb);
      $$('caption .fi, tbody th > .pron, tbody td > span', t).forEach(x => glossaa(x));
      d.replaceWith(t);
    });
    $$('.sijataulu[data-sana]', juuri).forEach(d => {
      const sanaId = d.dataset.sana;
      let p = {};
      if (S.hae(sanaId)) p = S.paradigma(sanaId);
      else if (d.dataset.gen) {
        const n = window.Taivutus.nomini({ nom: sanaId, gen: d.dataset.gen, part: d.dataset.part, ill: d.dataset.ill });
        p = { nom: sanaId };
        for (const [sija, solu] of Object.entries(NOMINISIJAT)) if (n[sija]) p[solu] = n[sija];
      }
      const sijat = (d.dataset.sijat || 'nominatiivi,genetiivi,partitiivi,inessiivi,elatiivi,illatiivi,adessiivi,ablatiivi,allatiivi,essiivi,translatiivi,monikko').split(',')
        .map(x => SIJASOLU[x] || x).filter(solu => p[solu]);
      const t = el('table', { class: 'taivutus taivutuskone' });
      t.innerHTML = '<thead><tr><th>forma</th><th>caso</th></tr></thead>';
      const tb = el('tbody');
      for (const solu of sijat) {
        const m = p[solu];
        tb.append(el('tr', {}, el('td', { lang: KIELI }, ohjain(() => sana(m), { aina: true }), el('span', {}, m)), el('td', {}, KA.solu(solu, S.harmonia(sanaId)).nimi)));
      }
      t.append(tb);
      $$('tbody td[lang] > span', t).forEach(x => glossaa(x));
      d.replaceWith(t);
    });
  }

  /* ---------- tehtäväkomponentit (kuten Passossa, portugaliksi) ---------- */
  const TYYPIT = { keskustelu: ['🗣', 'Conversa'], kuuntelu: ['🎧', 'Escuta'], kirjoitus: ['✍', 'Escrita'], lukeminen: ['📖', 'Leitura'] };
  const vertaa = s => norm(s).replace(/\s+/g, ' ');
  // Ääkkösiä ei vaadita näppäimistöltä: a = ä ja o = ö hyväksytään, ja palaute näyttää oikean kirjoitusasun.
  const ilmanAakkosia = s => s.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/å/g, 'a');
  function arvioi(vastaus, oikeat) {
    const v = vertaa(vastaus);
    if (!v) return 'tyhja';
    for (const o of oikeat) {
      if (v === vertaa(o)) return 'oikein';
      if (ilmanAakkosia(v) === ilmanAakkosia(vertaa(o))) return 'aksentti';
    }
    return 'vaarin';
  }
  const PALAUTE = { oikein: U.oikein, aksentti: U.oikein, vaarin: U.eiAivan, tyhja: '' };
  const ilmoitaTulos = (kohde, tulos, tieto = {}) => {
    if (kohde) kohde.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: Object.assign({ tulos }, tieto) }));
  };
  const hyvaksytty = tulos => tulos === 'oikein' || tulos === 'aksentti';
  // Lyhyt merkitys: leksikon ensimmäinen merkitys; ydinsanan (kone) merkityksestä ensimmäinen ;-osa vain näyttöön.
  const ptLyhyt = s => !s ? '' : s.kone ? String(s.pt || '').split(';')[0].trim() : (s.pt || '');

  function valmisteleTehtavat(juuri, hahmot) {
    $$('.tehtava', juuri).forEach(t => {
      const tyyppi = TYYPIT[t.dataset.tyyppi];
      if (tyyppi && !t.querySelector('.tehtava-merkki')) t.prepend(el('span', { class: 'tehtava-merkki', 'data-tyyppi': t.dataset.tyyppi, title: tyyppi[1] }, tyyppi[0] + ' ' + tyyppi[1]));
    });
    // Kuuntelutehtävät (auditointi 5 C2): ilmoitusrivi otsikon alle; näkyy vain, kun laite ei osaa puhua suomea.
    const kuuntelu = new Set($$('.tehtava[data-tyyppi="kuuntelu"], .valinta[data-kuuntele], .sanelu', juuri).map(x => x.closest('.tehtava') || x));
    for (const t of kuuntelu) {
      if (t.querySelector(':scope > .ei-aanta-ilmoitus')) continue;
      const otsikko = t.querySelector(':scope > h3, :scope > h4');
      if (otsikko) otsikko.after(eiAantaIlmoitus()); else t.prepend(eiAantaIlmoitus());
    }
    // Käännöstehtävä (auditointi 5 M8): ei koneen tarkistusta, joten se sanotaan: autoavaliação.
    const kaannokset = new Set($$('.kaanna', juuri).map(x => x.closest('.tehtava') || x));
    for (const t of kaannokset) {
      if (t.querySelector(':scope > .autoarvio')) continue;
      const merkki = el('p', { class: 'autoarvio', lang: 'pt-BR' }, el('b', {}, 'Autoavaliação:'), ' sem correção automática; você mesmo compara com o modelo.');
      const otsikko = t.querySelector(':scope > h3, :scope > h4');
      if (otsikko) otsikko.after(merkki); else t.prepend(merkki);
    }
    // Aukkotehtävä: <span class="aukko" data-oikea="olen|oon"></span>
    $$('.aukot', juuri).forEach(ryhma => {
      const kentat = [];
      $$('.aukko', ryhma).forEach(a => {
        const oikeat = (a.dataset.oikea || '').split('|');
        const syote = el('input', { type: 'text', class: 'aukko-syote', size: String(Math.max(4, ...oikeat.map(o => o.length)) + 1), 'aria-label': U.vastaus, autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', lang: KIELI });
        // Kentän alle mahtuu oikea muoto (auditointi 5 M8: näkyy ilman hiirtä, myös puhelimella). data-oikea kulkee
        // kehykseen, jotta tehtävän tunniste (saari.js yksikonTunniste) on sama ennen ja jälkeen piirron.
        const kaari = el('span', { class: 'aukko-kaari', 'data-oikea': a.dataset.oikea || null }, syote);
        a.replaceWith(kaari);
        kentat.push([syote, oikeat, kaari]);
      });
      const tila = el('p', { class: 'palaute', 'aria-live': 'polite' });
      const tarkista = el('button', { type: 'button', class: 'pieni-nappi' }, U.tarkista);
      const nayta = el('button', { type: 'button', class: 'pieni-nappi toissijainen' }, U.naytaVastaukset);
      // Oikea muoto kentän alla: heti, jos vain ä/ö puuttui; toisen väärän tarkistuksen jälkeen, jos vastaus on väärin.
      const vihje = (kaari, teksti, luokka) => {
        let v = kaari.querySelector('.aukko-oikea');
        if (!teksti) { if (v) v.remove(); return; }
        if (!v) { v = el('span', { class: 'aukko-oikea', lang: KIELI, 'data-ei-kuplaa': '' }); kaari.append(v); }
        v.textContent = teksti;
        v.dataset.laji = luokka;
      };
      const kirjatut = new WeakSet();
      tarkista.addEventListener('click', () => {
        // Kaikki kentät tyhjiä: ei tulosta (A6-15: vahinkopainallus ei kirjaa nollaa eikä käytä ensimmäistä yritystä).
        if (kentat.every(([s, o]) => arvioi(s.value, o) === 'tyhja')) { tila.textContent = 'Preencha pelo menos um campo antes de conferir.'; tila.className = 'palaute'; return; }
        // Paljastettu tehtävä (Mostrar respostas): kentät saavat palautteen, mutta tulos on väärin, ei lokia eikä mandariinia.
        const paljastettu = !!ryhma.dataset.paljastettu;
        let ok = 0;
        for (const [s, o, kaari] of kentat) {
          const tulos = arvioi(s.value, o);
          s.dataset.tulos = tulos;
          s.title = tulos === 'aksentti' ? `${U.oikein} ${o[0]}` : PALAUTE[tulos];
          if (hyvaksytty(tulos)) ok++;
          if (tulos === 'vaarin') s.dataset.virheet = String(Number(s.dataset.virheet || 0) + 1);
          if (tulos === 'aksentti') vihje(kaari, '✓ ' + o[0], 'aksentti');
          else if (tulos === 'vaarin' && Number(s.dataset.virheet) >= 2) vihje(kaari, '→ ' + o[0], 'oikea');
          else if (tulos !== 'vaarin') vihje(kaari, '');
          // Tulosloki: kentän ensimmäinen ei-tyhjä tarkistus; paljastettu vastaus ei ole oppijan oma.
          if (!paljastettu && tulos !== 'tyhja' && !kirjatut.has(s)) { kirjatut.add(s); kirjaaTulos({ lahde: 'tehtava', avain: `${(nykyinenOppitunti || {}).id || ''}:aukko:${yksikkoAvain(ryhma)}${o[0]}`, teksti: o[0], oikein: hyvaksytty(tulos) }); }
        }
        tila.textContent = `${ok} / ${kentat.length} certas.` + (paljastettu ? ' Respostas mostradas: desta vez não conta. Refaça o exercício numa próxima visita.'
          : ok < kentat.length && kentat.some(([s]) => s.dataset.tulos === 'vaarin' && Number(s.dataset.virheet) < 2) ? ' Tente de novo os campos em vermelho; na segunda vez, a forma certa aparece embaixo.' : '');
        tila.className = 'palaute ' + (ok === kentat.length && !paljastettu ? 'ok' : 'ei');
        ilmoitaTulos(ryhma, paljastettu ? 'vaarin' : ok === kentat.length ? 'oikein' : ok ? 'osittain' : 'vaarin', { oikein: paljastettu ? 0 : ok, yhteensa: kentat.length, paljastettu });
      });
      nayta.addEventListener('click', () => {
        for (const [s, o, kaari] of kentat) { s.value = o[0]; s.dataset.tulos = 'naytetty'; vihje(kaari, ''); }
        // A6-15: paljastettu tehtävä on tehty arvolla 0 (mitali: ei koskematon) ja ensimmäinen yritys on käytetty, joten
        // tulos väärin ilmoitetaan heti; myöhempi Conferir ei anna mitään (kuuntelijat muistavat kohteen).
        if (!ryhma.dataset.paljastettu) { ryhma.dataset.paljastettu = '1'; ilmoitaTulos(ryhma, 'vaarin', { oikein: 0, yhteensa: kentat.length, paljastettu: true }); }
      });
      ryhma.append(el('div', { class: 'tehtava-napit' }, tarkista, nayta), tila);
    });
    // Yhdistä parit: <ul class="yhdista"><li data-pari="eu">minä</li>…</ul> (vasemmalla suomi)
    $$('.yhdista', juuri).forEach(lista => {
      const parit = $$('li', lista).map(li => [li.textContent.trim(), li.dataset.pari, li.dataset.sanakuva]);
      const vasen = el('div', { class: 'yhd-sarake' }), oikea = el('div', { class: 'yhd-sarake' });
      let valittu = null, loydetty = 0;
      const tila = el('p', { class: 'palaute', 'aria-live': 'polite' });
      for (const [fi] of sekoita(parit)) {
        const b = el('button', { type: 'button', class: 'yhd-nappi', lang: KIELI, 'data-fi': fi }, fi);
        b.addEventListener('click', () => {
          if (b.dataset.valmis) return;
          $$('.yhd-nappi.valittu', vasen).forEach(x => x.classList.remove('valittu'));
          b.classList.add('valittu'); valittu = b;
          soitaJosVoi(sana(fi));
        });
        vasen.append(b);
      }
      for (const [fi, pt, ikoni] of sekoita(parit)) {
        // Portugalinkielisen puolen kuva (AV-073, sarja 1): li[data-sanakuva] → kuva sanan eteen.
        const b = el('button', { type: 'button', class: 'yhd-nappi', lang: 'pt-BR', 'data-fi': fi }, ...(ikoni ? [sanaIkoni(ikoni)] : []), pt);
        b.addEventListener('click', () => {
          if (!valittu || b.dataset.valmis) return;
          if (valittu.dataset.fi === b.dataset.fi) {
            [valittu, b].forEach(x => { x.dataset.valmis = '1'; x.classList.remove('valittu'); x.classList.add('oikein'); });
            valittu = null; loydetty++;
            tila.textContent = loydetty === parit.length ? U.kaikkiParit : `${loydetty} / ${parit.length}`;
            tila.className = 'palaute ok';
            if (loydetty === parit.length) ilmoitaTulos(b, 'oikein');
          } else {
            b.classList.add('vaarin'); setTimeout(() => b.classList.remove('vaarin'), 600);
            ilmoitaTulos(b, 'vaarin');
          }
        });
        oikea.append(b);
      }
      // data-parit: parien data-pari-arvot tehtävän tunnisteelle (saari.js yksikonTunniste), napit ovat sekoitettuja.
      const kehys = el('div', { class: 'yhd-kehys', 'data-parit': parit.map(p => p[1] || '').join('|') }, vasen, oikea);
      lista.replaceWith(kehys);
      kehys.after(tila);
    });
    // Sanelu: <div class="sanelu" data-puhu="Minä olen Maia."></div>
    $$('.sanelu', juuri).forEach(s => {
      const teksti = s.dataset.puhu;
      const syote = el('input', { type: 'text', class: 'sanelu-syote', 'aria-label': U.kirjoitaKuulemasi, autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', lang: KIELI });
      const tila = el('span', { class: 'palaute' });
      const tarkista = el('button', { type: 'button', class: 'pieni-nappi' }, U.tarkista);
      let kirjattu = false;
      tarkista.addEventListener('click', () => {
        const tulos = arvioi(syote.value, [teksti]);
        syote.dataset.tulos = tulos;
        tila.textContent = tulos === 'vaarin' ? U.oikeaOlisi + teksti : tulos === 'aksentti' ? `${U.oikein} ${teksti}` : PALAUTE[tulos];
        tila.className = 'palaute ' + (hyvaksytty(tulos) ? 'ok' : 'ei');
        if (tulos !== 'tyhja') ilmoitaTulos(s, hyvaksytty(tulos) ? 'oikein' : 'vaarin');
        if (tulos !== 'tyhja' && !kirjattu) { kirjattu = true; kirjaaTulos({ lahde: 'tehtava', avain: `${(nykyinenOppitunti || {}).id || ''}:sanelu:${yksikkoAvain(s)}${teksti}`, teksti, oikein: hyvaksytty(tulos) }); }
      });
      // Ilman ääntä sanelua ei voi tehdä: ”Pular” (ei tulosta, ei mandariinia).
      const ohita = el('button', { type: 'button', class: 'pieni-nappi toissijainen pular-nappi' }, 'Pular');
      ohita.addEventListener('click', () => { s.classList.add('ohitettu'); tila.className = 'palaute'; tila.textContent = 'Pulado: não conta.'; });
      s.append(ohjain(() => [{ teksti, tyyppi: 'kertoja', el: null }], { aina: true, nimi: U.kuuntele }), syote, tarkista, ohita, tila);
    });
    // Käännös: <div class="kaanna"><p class="pt">…</p><p class="s">malli</p></div>
    $$('.kaanna', juuri).forEach(k => {
      const malli = $('.s', k);
      if (!malli) return;
      malli.hidden = true;
      const syote = el('textarea', { class: 'kaanna-syote', rows: '2', 'aria-label': U.kaannoksesi, lang: KIELI, spellcheck: 'false' });
      const nappi = el('button', { type: 'button', class: 'pieni-nappi toissijainen' }, U.naytaMalli);
      nappi.addEventListener('click', () => { malli.hidden = !malli.hidden; nappi.textContent = malli.hidden ? U.naytaMalli : U.piilotaMalli; });
      malli.before(syote, nappi);
    });
    // Kotitehtävä: <div class="kotitehtava" data-id="t01"><p>…</p><details class="malli">…</details></div>
    $$('.kotitehtava', juuri).forEach(k => {
      const avain = 'koti-' + (k.dataset.id || '');
      const alue = el('textarea', { class: 'koti-syote', rows: '5', 'aria-label': U.vastaus, lang: KIELI, placeholder: U.kotiOhje });
      alue.value = muisti.lue(avain, '');
      alue.addEventListener('input', () => { muisti.kirjoita(avain, alue.value); paivitaMerkit(); });
      const malli = $('details.malli', k);
      if (malli) malli.before(alue); else k.append(alue);
    });
    // Teemasanasto: <div class="teema" data-otsikko="Pronomes" data-sanat="minä,sinä,hän"></div>
    $$('.teema', juuri).forEach(t => {
      const lista = el('ul', { class: 'teema-lista' });
      for (const k of (t.dataset.sanat || '').split(',').map(x => x.trim()).filter(Boolean)) {
        const s = haeSana(k);
        const n = S.hae(k) ? nimi(k) : k;   // tunniste (kuusi:puu → kuusi) tai kirjoitusasu
        lista.append(el('li', {}, ohjain(() => sana(n), { aina: true, nimi: U.kuuntele + ' ' + n }),
          el('span', { class: 'w', 'data-k': n.toLowerCase(), 'data-l': s ? s.perus || s.id || null : null, tabindex: '0', lang: KIELI }, n), el('span', { class: 'teema-fi' }, ptLyhyt(s))));
      }
      t.append(el('h4', {}, t.dataset.otsikko || 'Vocabulário'), lista);
    });
    // Itsearvio: <ul class="itsearvio" data-id="t01"><li>Sei me apresentar.</li>…</ul>
    $$('ul.itsearvio', juuri).forEach(u => {
      const avain = 'arvio-' + (u.dataset.id || '');
      const tallennettu = muisti.lue(avain, {});
      $$('li', u).forEach((li, i) => {
        const valinnat = el('span', { class: 'arvio-valinnat', role: 'group' });
        U.arviot.forEach((nimi, j) => {
          const b = el('button', { type: 'button', class: 'arvio', 'aria-pressed': String(tallennettu[i] === j) }, nimi);
          b.addEventListener('click', () => {
            tallennettu[i] = j;
            $$('.arvio', valinnat).forEach((x, n) => x.setAttribute('aria-pressed', String(n === j)));
            muisti.kirjoita(avain, tallennettu);
            paivitaMerkit();
          });
          valinnat.append(b);
        });
        li.append(valinnat);
      });
    });
    // Valokuva: <figure class="kuva" data-kuva="metro-sisalla"></figure>
    $$('figure.kuva', juuri).forEach(f => {
      const kuva = (K.kuvat || {})[f.dataset.kuva];
      if (!kuva) { f.remove(); return; }
      const lahde = kuva.lahde ? el('a', { href: kuva.lahde, target: '_blank', rel: 'noopener' }, kuva.tekija) : kuva.tekija;
      const img = el('img', { alt: kuva.alt || '' });
      lataaKuva(img, kuva);
      f.prepend(img);
      f.append(el('figcaption', {}, `${kuva.kuvateksti || ''} Foto: `, lahde, `, ${kuva.lisenssi}.`));
    });
    // Roolileikki: oppija puhuu valitsemansa hahmon repliikit
    $$('.kpl', juuri).forEach(k => {
      const roolit = [...new Set($$('.s', k).map(s => s.dataset.h).filter(h => h && h !== 'kertoja' && hahmot[h]))];
      const palkki = $('.kpl-palkki', k);
      if (!roolit.length || !palkki) return;
      for (const r of roolit) {
        const b = el('button', { type: 'button', class: 'pieni-nappi toissijainen rooli-nappi', title: `Ouça o diálogo, mas fale você as falas de ${hahmot[r].nimi}` }, `Encenar: ser ${hahmot[r].nimi}`);
        b.addEventListener('click', () => {
          const jono = [];
          for (const s of $$('.s', k)) {
            const a = alkio(s);
            if (s.dataset.h === r) jono.push({ tauko: 1500 + 90 * a.teksti.length, el: s });
            jono.push(a);
          }
          k.classList.add('roolileikki');
          A.soita(jono, { ohjain: { alku() {}, loppu() { k.classList.remove('roolileikki'); } } });
        });
        palkki.append(b);
      }
    });
  }

  /* ---------- näkymät ---------- */
  const paa = () => { if (window.Kuvitus) window.Kuvitus.purkaNayttamo(); return $('#sisalto'); };
  // Pelin oma piirretty kuvake (AV-028: 🍔 näkyi joillakin laitteilla ”???”); muuten emoji.
  function peliIkoni(peli) {
    const s = el('span', { class: 'peli-svg-ikoni', 'aria-hidden': 'true' });
    s.innerHTML = peli.ikoniSvg;
    return s;
  }
  function otsake(yla, otsikko, kuvaus) {
    const o = el('header', { class: 'op-otsake' });
    o.innerHTML = `<p class="yla">${esc(yla)}</p><h1>${esc(otsikko)}</h1>` + (kuvaus ? `<p class="lahde-rivi">${esc(kuvaus)}</p>` : '');
    return o;
  }

  const AAKKOSET = { fi: 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'.split(''), pt: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') };
  // Sanalistan rivi [avain, tiedot]: avain on leksikon tunniste (kuusi:puu → kuusi) tai ydinsana.
  // Taivutettu muoto (puhekielen lista: ollaan) näytetään sellaisenaan, ei perusmuotona.
  const nayttoNimi = (k, s) => (s && s.id && !s.johdettu ? nimi(s.id) : k);
  const ptHaku = s => ((s && s.pt) || '').replace(/^[^\p{L}]+/u, '').replace(/^\(.*?\)\s*/, '').replace(/[{}]/g, '');
  const ilmanMerkkeja = t => t.normalize('NFD').replace(/\p{M}/gu, '');
  function kirjain(teksti, kieli) {
    const k = (teksti || '').trim().charAt(0).toUpperCase();
    if (kieli === 'fi') return 'ÅÄÖ'.includes(k) ? k : ilmanMerkkeja(k);
    return ilmanMerkkeja(k);
  }
  /* Sanalista. suunta 'fi' = Finlandês–Português (oletus), 'pt' = Português–Finlandês. Suomi on aina vasemmalla. */
  function sanalista(rivit, suunta, { naytaOppitunti = false, ryhmitys = null } = {}) {
    const kieli = suunta === 'pt' ? 'pt' : 'fi';
    const avainteksti = ([k, s]) => (kieli === 'pt' ? ptHaku(s) : nayttoNimi(k, s));
    const jarjestetty = rivit.slice().sort((x, y) => avainteksti(x).localeCompare(avainteksti(y), kieli === 'pt' ? 'pt' : 'fi', { sensitivity: 'base' }));
    const kaari = el('div', { class: 'taulukko-kaari' });
    const t = el('table', { class: 'sanasto' });
    const sarakkeet = kieli === 'pt' ? ['Português', 'Finlandês', 'Pronúncia'] : ['Finlandês', 'Pronúncia', 'Português'];
    if (naytaOppitunti) sarakkeet.push('Lição');
    t.innerHTML = '<thead><tr>' + sarakkeet.map(x => `<th>${x}</th>`).join('') + '</tr></thead>';
    const ryhmat = ryhmitys ? new Map(ryhmitys) : new Map();
    for (const rivi of ryhmitys ? [] : jarjestetty) {
      const kir = kirjain(avainteksti(rivi), kieli);
      if (!ryhmat.has(kir)) ryhmat.set(kir, []);
      ryhmat.get(kir).push(rivi);
    }
    for (const [kir, ryhma] of ryhmat) {
      const tb = el('tbody', { 'data-kirjain': kir });
      if (kir !== null) tb.append(el('tr', { class: 'kirjainrivi' }, el('th', { colspan: String(sarakkeet.length) }, kir)));
      for (const [k, s] of ryhma) {
        const tr = el('tr');
        const n = nayttoNimi(k, s);
        // Puhekielinen sana (leksikon luokka puhe) kirjakielisellä listalla: kupla rekisterillä puhe (R1).
        const fi = el('td', { class: 'pt-sana' }, el('span', { class: 'w', 'data-k': n.toLowerCase(), 'data-l': s.merkinta || s.id || null,
          'data-rek': s.l === 'puhe' ? 'puhe' : null, tabindex: '0', lang: KIELI }, n));
        // ▶ sanan omassa solussa (ei omaa saraketta; neljännesruudukko, käyttäjä 17.10.2026)
        fi.prepend(ohjain(() => sana(n, fi), { aina: true, nimi: U.kuuntele + ' ' + n }));
        const aa = el('td', { class: 'aa' }, aantaminen(n, s.id, 'aa-pari'));
        const pt = el('td', { class: 'fi-sana', lang: 'pt-BR' }, merkinta(s.pt));
        if (s.sl || s.huom) {
          const sl = el('span', { class: 'sl' }, merkinta(s.sl || ''));
          if (s.sl && s.huom) sl.append(' · ');
          if (s.huom) sl.append(merkinta(s.huom));
          pt.append(sl);
        }
        if (kieli === 'pt') tr.append(pt, fi, aa); else tr.append(fi, aa, pt);
        if (naytaOppitunti) {
          const o = K.oppitunnit.find(x => x.id === s.oppitunti);
          tr.append(el('td', { class: 'lahde' }, o ? el('a', { href: '#' + o.id }, o.lyhyt || o.id) : ''));
        }
        tb.append(tr);
      }
      t.append(tb);
    }
    kaari.append(t);
    return { taulukko: kaari, kirjaimet: new Set(ryhmat.keys()), aakkoset: AAKKOSET[kieli] };
  }
  function naytaSanalista({ yla, otsikko, kuvaus, rivit, suunta, reitti, naytaOppitunti, ryhma, muut, muutOtsikko }) {
    const m = paa();
    m.innerHTML = '';
    m.append(otsake(yla, otsikko, kuvaus));
    const suunnat = el('div', { class: 'segmentti suunnat', role: 'group', 'aria-label': 'Direção' });
    for (const [s, nimi] of [['fi', 'Finlandês–Português'], ['pt', 'Português–Finlandês']]) {
      suunnat.append(el('a', { href: '#' + reitti(s), 'aria-current': s === suunta ? 'page' : null }, nimi));
    }
    const kirjainpalkki = el('nav', { class: 'kirjaimet', 'aria-label': 'Ir para a letra' });
    const haku = el('input', { type: 'search', id: 'sanahaku', placeholder: 'Procure em finlandês ou português…', 'aria-label': 'Procurar no vocabulário' });
    const paikka = el('div');
    m.append(el('div', { class: 'sanasto-ohjaimet' }, suunnat, kirjainpalkki, el('div', { class: 'haku' }, haku)), paikka);
    const piirra = () => {
      const q = haku.value.trim().toLowerCase();
      const suodata = rr => (q ? rr.filter(([k, s]) => k.includes(q) || (s.pt || '').toLowerCase().includes(q)) : rr);
      const suodatettu = suodata(rivit);
      const lista = sanalista(suodatettu, suunta, { naytaOppitunti });
      paikka.innerHTML = '';
      if (ryhma) paikka.append(el('h2', {}, ryhma));
      paikka.append(suodatettu.length ? lista.taulukko : el('p', { class: 'ohje' }, 'Nada encontrado.'));
      // Oppitunnin muut sanat (auditointi 4 P-M8): taitettuna, oma taulukko.
      const muutS = muut ? suodata(muut) : [];
      if (muutS.length) {
        const d = el('details', { class: 'sanasto-muut' }, el('summary', {}, `${muutOtsikko} (${muutS.length})`));
        d.append(sanalista(muutS, suunta, { naytaOppitunti }).taulukko);
        paikka.append(d);
      }
      kirjainpalkki.innerHTML = '';
      for (const k of lista.aakkoset) {
        const b = el('button', { type: 'button', disabled: !lista.kirjaimet.has(k) }, k);
        b.addEventListener('click', () => { const kohde = paikka.querySelector(`tbody[data-kirjain="${k}"]`); if (kohde) kohde.scrollIntoView({ block: 'start', behavior: 'smooth' }); });
        kirjainpalkki.append(b);
      }
    };
    haku.addEventListener('input', piirra);
    piirra();
  }

  /* Oppitunti: teksti, sitten koneella lisätyt osat (kielioppiosio, Treeni, sanasto ja pikavisa). */
  /* Oppitunnin osat (A/B omina sivuinaan, käyttäjä 17.10.2026, TYONKULKU 11): o.osat = [{ id, otsikko, html }];
     vanha muoto o.html = yksi osa. oppitunninHtml(o) = koko oppitunnin teksti (sanasto, tarkistukset). */
  const oppitunninOsat = o => (o.osat && o.osat.length ? o.osat : [{ id: 'a', otsikko: '', html: o.html || '' }]);

  // Oppitunnin lisäosat: kielioppi ja Treeni omille sivuilleen (kortit).
  function lisakortit(o) {
    const lisat = el('section', { class: 'osio oppitunnin-lisat' }, el('h2', {}, 'Continue com esta lição'));
    const kortit = el('div', { class: 'lisakortit' });
    if (o.kielioppi) kortit.append(el('a', { class: 'lisakortti', href: `#${o.id}-gramatica` }, el('b', {}, '📘 Gramática da lição'),
      el('span', {}, `${o.kielioppi.length} cartões: ${o.kielioppi.map(k => k.otsikko).join(' · ')}`)));
    const paketit = (window.Treeni ? window.Treeni.oppitunnin(o.id) : []);
    if (paketit.length) kortit.append(el('a', { class: 'lisakortti', href: `#treino-${o.id}` }, el('b', {}, '🍊 Treino'),
      el('span', {}, `${paketit.length} pacotes de 8 perguntas: ${paketit.map(p => p.otsikko).join(' · ')}`)));
    // Oppituntien 3–5 teemapelit (assets/pelit.js): kortti osan B lopussa, reitti #peli-<id>.
    // Teemapelit ovat nyt oppitunnin osan sisällä (peli-upotus) ja sivuvalikossa; loppukorttia ei enää tarvita.
    lisat.append(kortit);
    return lisat;
  }

  /* Ydinsanalaatikko ja visan sanat (auditointi 5 M1). Laatikossa oppitunnin ydinsanat (jaaYdinsanat: aiheen sanat,
     sitten yleisimmät) ▶:llä ja merkityksellä. Visa kysyy vain opetettua: oppitunnin oma sanasto-lista ja laatikon
     sanat, sitten aiempien oppituntien vastaavat; muut ydinsanat ovat vain vääriä vaihtoehtoja. */
  const LAATIKKO = 8;
  function laatikonSanat(o) {
    const y = o._ydin || {};
    const omat = new Set((o.sanasto || []).map(k => nimi(k).toLowerCase()));
    return [...new Set([...(y.aihe || []), ...(y.runko || [])])].filter(k => haeSana(k) && !omat.has(k.toLowerCase())).slice(0, LAATIKKO);
  }
  function opetetut(o) {
    const omat = [...new Set([...(o.sanasto || []), ...laatikonSanat(o)])].filter(k => haeSana(k));
    const i = K.oppitunnit.indexOf(o);
    const aiemmat = [...new Set(K.oppitunnit.slice(0, Math.max(0, i)).flatMap(x => [...(x.sanasto || []), ...laatikonSanat(x)]))]
      .filter(k => haeSana(k) && !omat.includes(k));
    return { omat, aiemmat };
  }
  function ydinLaatikko(o) {
    const sanat = laatikonSanat(o);
    if (!sanat.length) return null;
    const lista = el('ul', { class: 'ydin-lista' });
    for (const k of sanat) {
      const s = haeSana(k);
      const n = S.hae(k) ? nimi(k) : k;
      lista.append(el('li', {}, ohjain(() => sana(n), { aina: true, nimi: U.kuuntele + ' ' + n }),
        el('span', { class: 'w', 'data-k': n.toLowerCase(), 'data-l': s ? s.perus || s.id || null : null, tabindex: '0', lang: KIELI }, n),
        el('span', { class: 'ydin-merkitys', lang: 'pt-BR' }, merkinta(ptLyhyt(s)))));
    }
    return el('section', { class: 'osio ydin-laatikko' }, el('h2', {}, `${sanat.length} palavras que aparecem em toda conversa`),
      el('p', { class: 'ohje' }, 'Não são o tema da lição, mas aparecem em toda conversa. Ouça e guarde o significado: elas também entram no quiz.'), lista);
  }

  /* Dialogi ensimmäisellä käynnillä ilman käännöstä (auditointi 5 m1): oppitunnin osan ensimmäisellä käynnillä dialogien
     (.kpl) käännökset ovat piilossa, vaikka Tradução olisi päällä. Tradução-napin painallus näyttää ne (ks. rakennaYlapalkki). */
  function ensinIlmanKaannosta(m, o, osa) {
    const avain = `${o.id}-${osa.id}`;
    const nahdyt = muisti.lue('kuullut-osat', {});
    if (nahdyt[avain]) return;
    $$('.kpl', m).forEach(k => k.classList.add('kaannos-piilossa'));
    nahdyt[avain] = true;
    muisti.kirjoita('kuullut-osat', nahdyt);
  }

  function naytaOppitunti(o, osaId) {
    nykyinenOppitunti = o;
    A.asetaPaketti(o.id);
    const m = paa();
    m.innerHTML = '';
    m.dataset.oppitunti = o.id;   // AV-030/AV-077: oppitunnin osan merkki CSS:lle (#sisalto[data-oppitunti="k01"]); reititä poistaa sen
    const o1 = otsake(o.jakso, o.otsikko, o.lahde);
    if (o.hahmot) {
      const hl = el('ul', { class: 'hahmot' });
      Object.entries(o.hahmot).forEach(([id, h], i) => {
        const li = el('li', { 'data-p': String(i % 4) });
        const kasvo = window.Kuvitus && window.Kuvitus.avatar(id, 'hahmolista-kasvo');
        if (kasvo) li.append(kasvo);
        li.append(el('b', {}, h.nimi));
        if (h.kuvaus) li.append(el('span', {}, h.kuvaus));
        hl.append(li);
      });
      o1.append(hl);
    }
    // Edistysrivi otsikon alle (assets/saari.js edistysRivi, T15.17): sama teksti kuin osan lopussa ja etusivulla.
    if (window.Saari && typeof window.Saari.edistysRivi === 'function') {
      try { const rivi = window.Saari.edistysRivi(o.id); rivi.classList.add('edistys-otsake'); o1.querySelector('h1').after(rivi); } catch (e) { /* ohita */ }
    }
    m.append(o1);
    const osat = oppitunninOsat(o);
    const osa = osat.find(x => x.id === osaId) || osat[0];
    const nro = osat.indexOf(osa);
    // Osien navigointi (vain, jos osia on useampi).
    const osaNav = () => osat.length > 1 ? el('nav', { class: 'osa-nav', 'aria-label': 'Partes da lição' },
      ...osat.map((x, i) => el('a', { href: '#' + o.id + (i ? '-' + x.id : ''), 'aria-current': x === osa ? 'page' : null }, x.otsikko || 'Parte ' + x.id.toUpperCase()))) : null;
    if (osat.length > 1) m.append(osaNav());
    const runko = el('div', { class: 'op-runko' });
    runko.innerHTML = osa.html;
    m.append(runko);
    const viimeinen = nro === osat.length - 1;
    // Ydinsanalaatikko (auditointi 5 M1): osan A lopussa, ennen jatkolinkkiä ja visaa.
    if (nro === 0) { const y = ydinLaatikko(o); if (y) runko.append(y); }
    /* ”Continue com esta lição” -kortit (auditointi 5 M6): vain osan lopussa (koordinaattori 17.10.2026: ei keskelle
       oppituntia), sen osan, jossa oppitunnin kielioppi on (osio, jonka otsikko alkaa ”Gramática”), ja viimeisen osan
       lopussa, ”seuraava osa” -linkin vieressä. */
    // T15.8 (A6-20): osion merkintä section[data-osa="gramatica"] ratkaisee; otsikon teksti (”Gramática …”) on varalla,
    // kunnes kaikkien oppituntien kielioppiosioissa on merkintä.
    const kielioppiOsio = !!runko.querySelector(':scope > section.osio[data-osa="gramatica"]')
      || $$(':scope > section.osio', runko).some(s => { const h = s.querySelector('h2'); return h && /^\s*(Parte [A-Z] · )?Gramática\b/.test(h.textContent) && !/Gramática da lição/.test(h.textContent); });
    if (kielioppiOsio || viimeinen) runko.append(lisakortit(o));
    if (!viimeinen) {
      runko.append(el('p', { class: 'osa-seuraava' }, el('a', { class: 'sanasto-linkki', href: `#${o.id}-${osat[nro + 1].id}` }, `${osat[nro + 1].otsikko || 'Próxima parte'} →`)));
    }
    // Sanasto ja pikavisa vain viimeisessä osassa.
    const uudet = (o.sanasto || []).filter(k => haeSana(k)).length;
    if (viimeinen && opetetut(o).omat.length) {
      const osio = el('section', { class: 'osio', id: 'oppitunnin-sanasto' }, el('h2', {}, 'Vocabulário e quiz rápido'));
      osio.append(el('p', {}, `${uudet} palavras ${/^k\d/.test(o.id) ? 'para revisar (nenhuma nova)' : 'novas nesta lição'}. O quiz pergunta só o que a lição ensinou: estas palavras, as das lições anteriores e as palavras de toda conversa do quadro da lição.`));
      osio.append(el('div', { class: 'linkkirivi' },
        el('a', { class: 'sanasto-linkki', href: `#${o.id}-vocabulario` }, 'Vocabulário da lição →'),
        el('a', { class: 'sanasto-linkki', href: `#${o.id}-quiz` }, 'Quiz completo →')));
      const pika = el('div', { class: 'visa-paikka' });
      const aloitus = el('button', { type: 'button', class: 'visa-aloita' }, 'Começar o quiz rápido (5 perguntas)');
      aloitus.addEventListener('click', () => { pika.innerHTML = ''; visa(pika, o, 5); });
      pika.append(aloitus);
      osio.append(pika);
      runko.append(osio);
    }
    // Taustakuvien tekijät oppitunnin lopussa (näyttämön kelluva kuvateksti on piilotettu, käyttäjä 16.10.2026;
    // CC BY -lisenssit vaativat tekijän maininnan).
    // Taustakuvat tekijätietoihin: näyttämön paikat ja videopuhelun molempien puolten taustat (lisenssi vaatii maininnan).
    const taustat = [...new Set([...$$('[data-paikka]', runko).map(e => e.dataset.paikka),
      ...$$('.videopuhelu', runko).flatMap(e => [e.dataset.heidanTausta, e.dataset.meidanTausta])].filter(Boolean))].filter(k => (K.kuvat || {})[k]);
    if (taustat.length) runko.append(kuvalahteet(taustat, 'Fotos de fundo: '));
    valmistele(m, o);
    if (window.Kuvitus) window.Kuvitus.oppitunti(m, o, { alkio });
    // Kuvitus ja komponentit (huudot, chat, lomakkeet) piirtävät omat osansa vasta nyt. Huudon käännös ja lomakkeen
    // tallennusteksti ovat portugalia suomenkielisen kehyksen sisällä.
    $$('.ficha-tallennus, .huuto > small', m).forEach(p => p.setAttribute('lang', 'pt-BR'));
    glossaaSuomi(m);
    ensinIlmanKaannosta(m, o, osa);
    // Pomotaistelu kertauksen lopussa (assets/pomo.js, PELILLISTAMINEN §4): sama apu kuin Treenillä + mandariinit.
    if (window.Pomo) $$('.pomo[data-pomo]', m).forEach(p => window.Pomo.aloita(p, { el, sana, alkio, arvioi, hyvaksytty, ilmoitaTulos, kirjaaTulos,
      voiPuhua: voi, eiAanta, toast, lisaaMandariineja, KIELI }));
    // Mitali (assets/saari.js): osan arvioitavat tehtävät seurantaan ja edistysrivi osan loppuun.
    if (window.Saari && typeof window.Saari.seuraaTehtavia === 'function') {
      try { window.Saari.seuraaTehtavia(runko, o.id, osa.id); runko.append(window.Saari.edistysRivi(o.id)); } catch (e) { /* ohita */ }
    }
    // Osa luettu loppuun: +2 🍊 kerran (assets/saari.js seuraaOsa: loppumerkki näkyvissä ja sivulla tarpeeksi kauan).
    if (window.Saari && typeof window.Saari.seuraaOsa === 'function') {
      try { window.Saari.seuraaOsa(runko, `${o.id}-${osa.id}`, o.jakso + (osat.length > 1 ? ' · ' + (osa.otsikko || 'Parte ' + osa.id.toUpperCase()) : '')); } catch (e) { /* ohita */ }
    }
    m.append(oppituntiNav(o));
  }
  function oppituntiNav(o) {
    const i = K.oppitunnit.indexOf(o);
    const nav = el('nav', { class: 'op-nav' });
    if (i > 0) nav.append(el('a', { href: '#' + K.oppitunnit[i - 1].id }, '← ' + K.oppitunnit[i - 1].otsikko));
    if (i < K.oppitunnit.length - 1) nav.append(el('a', { href: '#' + K.oppitunnit[i + 1].id, class: 'seur' }, K.oppitunnit[i + 1].otsikko + ' →'));
    return nav;
  }

  /* Oppitunnin kielioppiosio: Hakuosan osat tämän jakson syvyydellä, erikseen avattavina kortteina, vaikeustähdellä. */
  function naytaKielioppi(o) {
    nykyinenOppitunti = o;
    A.asetaPaketti(o.id);
    const m = paa();
    m.innerHTML = '';
    m.append(otsake(`${o.jakso} · ${o.otsikko}`, 'Gramática da lição',
      'Só o que esta lição usa, em cartões separados. Abra um de cada vez. Marque com ★ o que for difícil: os cartões marcados aparecem no Treino e nas revisões.'));
    const runko = el('div', { class: 'op-runko kielioppi' });
    runko.append(el('div', { class: 'kielioppi-alku' }));
    const tahdet = muisti.lue('tahdet', {});
    (o.kielioppi || []).forEach((k, i) => {
      const avain = `${o.id}:${k.id}`;
      const kortti = el('details', { class: 'kielioppikortti', id: 'k-' + k.id, open: i === 0 ? true : null });
      const tahti = el('button', { type: 'button', class: 'tahti', 'aria-pressed': String(!!tahdet[avain]), title: 'Marcar como difícil: este tema vem primeiro no Treino e volta na revisão “Hoje” da página inicial', 'aria-label': 'Marcar como difícil' }, '★');
      tahti.addEventListener('click', e => {
        e.preventDefault(); e.stopPropagation();
        const t = muisti.lue('tahdet', {});
        if (t[avain]) delete t[avain]; else t[avain] = true;
        muisti.kirjoita('tahdet', t);
        tahti.setAttribute('aria-pressed', String(!!t[avain]));
      });
      const yhteenveto = el('summary', {}, el('span', { class: 'kk-nro' }, String(i + 1)), el('span', { class: 'kk-otsikko' }, k.otsikko),
        k.taso ? el('span', { class: 'kk-taso' }, k.taso) : null, tahti);
      const sisus = el('div', { class: 'kk-sisus' });
      sisus.innerHTML = k.html;
      const linkit = el('p', { class: 'kk-linkit' });
      if (k.hakuosa) linkit.append(el('a', { href: '#' + k.hakuosa }, 'Tudo sobre este tema na Gramática →'));
      if (k.treeni) for (const p of [].concat(k.treeni)) {
        const pk = window.Treeni && window.Treeni.hae(p);
        if (pk) linkit.append(el('a', { href: '#treino-' + p }, `Treinar: ${pk.otsikko} 🍊`));
      }
      sisus.append(linkit);
      kortti.append(yhteenveto, sisus);
      runko.append(kortti);
    });
    // Oppitunnin sanat kaikissa tähän mennessä opituissa muodoissa (koneella).
    // Taulukot tarvitsevat persoonapronominit (minä, sinä …): ei taulukoita ennen oppituntia, joka ne opettaa
    // (oppitunti 0 opettaa verbejä vain valmiina ilmauksina, esim. Toista!; tarkistus O2).
    const pron = S.hae('minä');
    const pronIndeksi = pron && pron.o ? K.oppitunnit.findIndex(x => x.id === pron.o) : -1;
    // AV-020 (omistaja 18.10.2026): vain oppitunnilla käytetyt verbit, ei kaikkia leksikkotiedoston verbejä.
    const kaytetyt = oppitunnillaKaytetyt(o);
    const verbit = K.oppitunnit.indexOf(o) < pronIndeksi ? [] : oppitunninTunnisteet(o).filter(id => S.hae(id).l === 'verbi' && kaytetyt.has(id));
    if (verbit.length) {
      const kortti = el('details', { class: 'kielioppikortti' });
      kortti.append(el('summary', {}, el('span', { class: 'kk-nro' }, '+'), el('span', { class: 'kk-otsikko' }, 'Os verbos da lição em todas as formas aprendidas')));
      const sisus = el('div', { class: 'kk-sisus' });
      sisus.append(el('p', {}, 'Tabelas feitas a partir do vocabulário do curso: presente, negativo e pergunta. Toque ▶ para ouvir.'));
      for (const v of verbit) sisus.append(el('div', { class: 'taivutustaulu', 'data-verbi': v, 'data-osat': o.verbiosat || 'myonteinen,kielto' }));
      kortti.append(sisus);
      runko.append(kortti);
    }
    m.append(runko);
    valmistele(m, o);
    const onTreeni = !!(window.Treeni && window.Treeni.oppitunnin(o.id).length);
    m.append(el('nav', { class: 'op-nav' }, el('a', { href: '#' + o.id }, '← ' + o.otsikko),
      onTreeni ? el('a', { href: `#treino-${o.id}`, class: 'seur' }, 'Treino →') : el('a', { href: `#${o.id}-vocabulario`, class: 'seur' }, 'Vocabulário →')));
  }

  function naytaKokoSanasto(suunta) {
    nykyinenOppitunti = null;
    A.asetaPaketti(null);
    naytaSanalista({ yla: 'Vocabulário do curso', otsikko: suunta === 'pt' ? 'Português–Finlandês' : 'Finlandês–Português',
      kuvaus: 'Todas as palavras e expressões das lições, em ordem alfabética.',
      rivit: S.kaikki().filter(r => !r.piilota && r.l !== 'puhe').map(r => [r.id, tiedot(r)]), suunta, reitti: s => (s === 'pt' ? 'pt-fi' : 'fi-pt'), naytaOppitunti: true });
  }
  function naytaOppitunninSanasto(o) {
    nykyinenOppitunti = o;
    A.asetaPaketti(o.id);
    // Käyttäjä 17.10.2026: oppitunnin sanasto on yksi lista ilman suunnan valintaa, kirjainriviä, hakua ja ryhmiä;
    // sanat siinä järjestyksessä, jossa ne esiintyvät oppitunnilla ensimmäisen kerran (lista = oppitunnin sanasto-kenttä).
    // Esimerkkipalat (.pala) ja Maian tahalliset virheet (data-hairio) eivät ole sanastossa.
    const pohja = document.createElement('template');
    pohja.innerHTML = oppitunninOsat(o).map(x => x.html).join(' ');
    $$('.pala, [data-hairio], .kaannos, [lang^="pt"]', pohja.content).forEach(x => x.remove());
    const ensin = new Map();
    let i = 0;
    for (const t of S.tokenoi(pohja.content.textContent) || []) {
      i++;
      const pinta = String(t.teksti).toLowerCase();
      if (!ensin.has(pinta)) ensin.set(pinta, i);
      for (const an of S.analysoi(t.teksti, {}) || []) if (!ensin.has(an.id)) ensin.set(an.id, i);
    }
    const paikka = k => ensin.get(k) || ensin.get(String(k).toLowerCase()) || ensin.get(nimi(k).toLowerCase()) || Infinity;
    const rivit = (o.sanasto || []).filter(k => haeSana(k)).map((k, n) => ({ k, n, p: paikka(k) }))
      .sort((x, y) => x.p - y.p || x.n - y.n).map(({ k }) => [k, haeSana(k)]);
    const m = paa();
    m.innerHTML = '';
    m.append(otsake(`${o.jakso} · ${o.otsikko}`, 'Vocabulário da lição', /^k\d/.test(o.id) ? 'Palavras para revisar (nenhuma nova), na ordem em que aparecem.' : 'As palavras novas da lição, na ordem em que aparecem.'));
    m.append(sanalista(rivit, 'fi', { ryhmitys: [[null, rivit]] }).taulukko);
    valmistele(m, null);
  }

  /* ---------- tietovisa ---------- */
  function visa(paikka, o, n) {
    const N = k => (S.hae(k) ? nimi(k) : k);   // näytettävä sana (tunniste kuusi:puu → kuusi)
    // Vain opetetut sanat (auditointi 5 M1): oppitunnin omat ensin, sitten aiempien oppituntien sanat.
    const { omat: omatSanat, aiemmat } = opetetut(o);
    const pooli = [...omatSanat, ...aiemmat];
    if (pooli.length < 4) { paikka.append(el('p', {}, 'O quiz precisa de pelo menos quatro palavras.')); return; }
    const harhat = [...YDIN.keys()].filter(k => YDIN.get(k).taso !== 'puhe').slice(0, 300);
    const kysymykset = [...sekoita(omatSanat), ...sekoita(aiemmat)].slice(0, n).map((k, i) => ({ k, tyyppi: ['fi-pt', 'pt-fi', 'ouvir'][i % 3] }));
    // Ilman suomen ääntä ei kuuntelukysymyksiä: ”ouvir” vaihtuu tyypiksi fi-pt (päätetään kysymys kerrallaan, koska
    // selain voi kertoa äänilistansa vasta hetken kuluttua).
    const tyyppiNyt = t => (t === 'ouvir' && !voi() ? 'fi-pt' : t);
    const uusinta = new Set();
    let kohta = 0, oikein = 0, vastattu = 0;
    const vaarat = [];
    paikka.append(eiAantaIlmoitus());
    const laatikko = el('div', { class: 'visa' });
    paikka.append(laatikko);
    function vaihtoehdot(k, tyyppi) {
      // Väärät vaihtoehdot: saman oppitunnin sanat, sitten aiempien, viimeisenä yleiset ydinsanat.
      const omat = [...sekoita(omatSanat.filter(x => x !== k)), ...sekoita(aiemmat.filter(x => x !== k))];
      const muut = sekoita(harhat.filter(x => x !== k && !pooli.includes(x)));
      const valitut = [k, ...omat.slice(0, 3)];
      while (valitut.length < 4) valitut.push(muut.pop());
      const teksti = x => (tyyppi === 'fi-pt' ? ptLyhyt(haeSana(x)) : N(x));
      // Sama teksti kahdesti (kuusi / kuusi:puu): oikea vastaus (ensimmäinen) säilyy, toinen pois.
      const nahdyt = new Set(), lista = [];
      for (const x of valitut) { const t = teksti(x); if (!nahdyt.has(t)) { nahdyt.add(t); lista.push({ x, teksti: t }); } }
      return sekoita(lista);
    }
    function nayta() {
      laatikko.innerHTML = '';
      if (kohta >= kysymykset.length) return lopetus();
      const k = kysymykset[kohta].k;
      const tyyppi = tyyppiNyt(kysymykset[kohta].tyyppi);
      const s = haeSana(k);
      laatikko.append(el('p', { class: 'visa-tila' }, `Pergunta ${kohta + 1} / ${kysymykset.length} · certas ${oikein}`));
      const kysymys = el('div', { class: 'visa-kysymys' });
      if (tyyppi === 'fi-pt') kysymys.append(el('span', { class: 'visa-ohje' }, 'O que significa?'), el('span', { class: 'visa-sana', lang: KIELI }, N(k)), ohjain(() => sana(N(k)), { aina: true }));
      else if (tyyppi === 'pt-fi') kysymys.append(el('span', { class: 'visa-ohje' }, 'Como se diz em finlandês?'), el('span', { class: 'visa-sana', lang: 'pt-BR' }, ptLyhyt(s)));
      else { kysymys.append(el('span', { class: 'visa-ohje' }, 'Ouça e escolha a palavra que ouviu.'), ohjain(() => sana(N(k)), { aina: true, teksti: U.kuuntele })); soitaJosVoi(sana(N(k))); }
      laatikko.append(kysymys);
      const valinnat = el('div', { class: 'vaihtoehdot' });
      const palaute = el('p', { class: 'palaute', 'aria-live': 'polite' });
      const seuraava = el('button', { type: 'button', class: 'visa-seuraava', hidden: true }, 'Próxima →');
      for (const v of vaihtoehdot(k, tyyppi)) {
        const b = el('button', { type: 'button', lang: tyyppi === 'fi-pt' ? 'pt-BR' : KIELI }, v.teksti);
        b.addEventListener('click', () => {
          if (valinnat.dataset.vastattu) return;
          valinnat.dataset.vastattu = '1';
          const ok = v.x === k;
          vastattu++;
          if (ok) oikein++;
          else {
            vaarat.push(k);
            if (!uusinta.has(k)) { uusinta.add(k); kysymykset.push({ k, tyyppi: tyyppi === 'ouvir' ? 'fi-pt' : 'ouvir' }); }
          }
          b.classList.add(ok ? 'oikein' : 'vaarin');
          if (!ok) [...valinnat.children].forEach(x => { if (x.textContent === (tyyppi === 'fi-pt' ? ptLyhyt(s) : N(k))) x.classList.add('oikein'); });
          palaute.className = 'palaute ' + (ok ? 'ok' : 'ei');
          palaute.textContent = ok ? U.oikein : `Resposta certa: ${N(k)} = ${ptLyhyt(s)}. A palavra volta no fim.`;
          ilmoitaTulos(laatikko, ok ? 'oikein' : 'vaarin');
          kirjaaTulos({ lahde: 'visa', oppitunti: o.id, avain: k, teksti: N(k), oikein: ok, tyyppi, reitti: `#${o.id}-quiz` });
          palkitut.delete && palkitut.delete(laatikko);
          soitaJosVoi(sana(N(k)));
          seuraava.hidden = false;
          seuraava.focus();
        });
        valinnat.append(b);
      }
      seuraava.addEventListener('click', () => { kohta++; nayta(); });
      laatikko.append(valinnat, palaute, seuraava);
    }
    function lopetus() {
      const pros = Math.round(100 * oikein / Math.max(1, vastattu));
      const kaikki = muisti.lue('visa', {});
      const paras = Math.max(kaikki[o.id] || 0, pros);
      kaikki[o.id] = paras;
      muisti.kirjoita('visa', kaikki);
      paivitaMerkit();
      lisaaMandariineja(2, 'quiz', `Quiz terminado: ${o.jakso}`);   // ilmoitus ”+2 🍊 …” (A6-33, T15.17)
      // Ensimmäinen kokonainen quiz (12 kysymystä) oppitunnilta: +5 kerran (Saari.marco).
      const eka = n >= 12 ? marco('quiz:' + o.id, 3, `Primeiro quiz: ${o.jakso}`) : 0;
      // Mitali (assets/saari.js): quiz kerran tehtynä voi olla oppitunnin viimeinen puuttuva osa.
      if (window.Saari && window.Saari.tarkistaMitali) { try { window.Saari.tarkistaMitali(o.id); } catch (e) { /* ohita */ } }
      laatikko.append(el('p', { class: 'visa-tulos' }, `${oikein} / ${vastattu} certas (${pros} %). +2 🍊 por terminar.` + (eka ? ` +${eka} 🍊 pelo primeiro quiz da lição.` : '')),
        el('p', { class: 'ohje' }, `Seu melhor resultado nesta lição: ${paras} %.`));
      if (vaarat.length) {
        const lista = el('p', {}, 'Revise: ');
        [...new Set(vaarat)].forEach((k, i) => { if (i) lista.append(', '); lista.append(el('span', { class: 'w', 'data-k': N(k).toLowerCase(), 'data-l': S.hae(k) ? k : null, tabindex: '0', lang: KIELI }, N(k))); });
        laatikko.append(lista);
      }
      const uudelleen = el('button', { type: 'button', class: 'visa-aloita' }, 'Nova rodada');
      uudelleen.addEventListener('click', () => { paikka.innerHTML = ''; visa(paikka, o, n); });
      laatikko.append(uudelleen);
    }
    nayta();
  }
  function naytaVisa(o) {
    nykyinenOppitunti = o;
    A.asetaPaketti(o.id);
    const m = paa();
    m.innerHTML = '';
    m.append(otsake(`${o.jakso} · ${o.otsikko}`, 'Quiz', '12 perguntas só sobre o que a lição ensinou: as palavras novas, o quadro “palavras que aparecem em toda conversa” e as palavras das lições anteriores. As erradas voltam no fim da rodada.'));
    // Quiz on Manaattilaa kuten Treeni (käyttäjä 17.10.2026): Peixe-boi isona kehyksen yläpuolella, quiz havaijikehyksessä.
    const paikka = el('div', { class: 'visa-paikka' });
    m.append(el('div', { 'data-apu': 'visa' }), el('section', { class: 'osio manaattila' }, paikka));
    visa(paikka, o, 12);
  }

  /* ---------- Treeni (assets/treeni.js tekee kysymykset) ---------- */
  function naytaTreeni(oppituntiId) {
    nykyinenOppitunti = K.oppitunnit.find(x => x.id === oppituntiId) || null;
    A.asetaPaketti(oppituntiId || null);
    const m = paa();
    m.innerHTML = '';
    m.append(otsake('Treino', oppituntiId ? `Treino · ${nykyinenOppitunti.otsikko}` : 'Treino: pacotes curtos',
      'Cada pacote é um assunto só: 8 perguntas, 3 a 5 minutos. Acertou de primeira: 1 🍊 (até encher a cesta do dia). Terminou a rodada: +3 🍊; pacote novo: mais +2 🍊. Errar não tira nada.'));
    const runko = el('div', { class: 'op-runko' }, el('div', { class: 'treeni-alku' }));
    const p = pisteet();
    const Tr = window.Treeni;
    const tahdella = id => !!(Tr && typeof Tr.onTahdella === 'function' && Tr.onTahdella(id));
    const kortti = pk => treeniKortti(pk, p, tahdella(pk.id));
    // ★-merkityt aiheet ensin (auditointi 5 M7: Gramática da lição -kortin tähti vie paketin Treenin alkuun).
    const tahdelliset = !oppituntiId && Tr && typeof Tr.tahdelliset === 'function' ? Tr.tahdelliset() : [];
    if (tahdelliset.length) {
      runko.append(el('section', { class: 'osio manaattila' }, el('h2', {}, '★ Marcados por você'),
        el('p', { class: 'ohje' }, 'Temas que você marcou como difíceis na Gramática da lição.'),
        el('div', { class: 'treeni-ruudukko' }, ...tahdelliset.map(kortti))));
    }
    if (oppituntiId) {
      // Oppitunnin Treeni luokittain (omistaja 18.10.2026): Palavras, Verbos, Nomes e casos, Ouvir… vain tämän oppitunnin paketit.
      const lista = Tr.oppitunnin(oppituntiId);
      for (const kat of Tr.KATEGORIAT) {
        const omat = lista.filter(pk => pk.luokka === kat.id);
        if (!omat.length) continue;
        // Treeni on Manaattilaa: sama havaijipaitakehys kuin oppitunnin harjoituksissa (käyttäjä 17.10.2026).
        runko.append(el('section', { class: 'osio manaattila' }, el('h2', {}, `${kat.ikoni} ${kat.nimi}`),
          el('div', { class: 'treeni-ruudukko' }, ...omat.map(kortti))));
      }
    } else {
      // Yleissivu: luokat korteiksi; luokan sivulla paketit ryhmittäin (#treino-<luokka>).
      const ruudukko = el('div', { class: 'treeni-ruudukko' });
      for (const kat of Tr.KATEGORIAT) {
        const lista = Tr.kategorian(kat.id);
        const tehdyt = lista.filter(pk => ((p.paketit || {})[pk.id] || {}).kierrokset > 0).length;
        ruudukko.append(el('a', { class: 'treeni-kortti', href: '#treino-' + kat.id },
          el('b', {}, `${kat.ikoni} ${kat.nimi}`), el('span', {}, kat.kuvaus),
          el('span', { class: 'treeni-tila' }, lista.length ? `${tehdyt} / ${lista.length} pacotes feitos` : 'em breve')));
      }
      runko.append(el('section', { class: 'osio manaattila' }, el('h2', {}, 'Escolha o que treinar'), ruudukko));
    }
    m.append(runko);
    valmistele(m, nykyinenOppitunti);
  }
  /* Oppitunnit, joille oppija on jo tullut (avattu osa tai tehty visa): niiden paketit normaalisti, tulevat himmeinä
     ”a partir da lição N” (omistaja 18.10.2026: himmeä mutta avattavissa). Paketti ilman oppituntia on aina auki. */
  function saavutetut() {
    const s = new Set(Object.keys(muisti.lue('kuullut-osat', {})).map(k => k.split('-')[0]));
    Object.keys(muisti.lue('visa', {})).forEach(k => s.add(k));
    return s;
  }
  // Paras tulos ”oikein/kysymyksiä” (AV-033: ruudukkopaketin kierros on 4, ei 8). Vanha tallennus ilman yhteensa: 8.
  const parasTulos = t => `${t.paras}/${t.yhteensa || 8}`;
  function treeniKortti(pk, p, tahti, himmea) {
    const tila = (p.paketit || {})[pk.id] || {};
    const o = pk.oppitunti ? K.oppitunnit.find(x => x.id === pk.oppitunti) : null;
    return el('a', { class: 'treeni-kortti' + (himmea ? ' treeni-tuleva' : ''), href: '#treino-' + pk.id },
      el('b', {}, (tahti ? '★ ' : '') + pk.otsikko), el('span', {}, pk.kuvaus || ''),
      el('span', { class: 'treeni-tila' }, himmea && o ? `a partir da ${o.jakso.toLowerCase()}`
        : tila.kierrokset ? `${tila.kierrokset} rodada(s) · melhor ${parasTulos(tila)}` : 'ainda não feito'));
  }
  function naytaTreeniLuokka(kat) {
    nykyinenOppitunti = null;
    A.asetaPaketti(null);
    const Tr = window.Treeni;
    const m = paa();
    m.innerHTML = '';
    m.append(otsake('Treino', `${kat.ikoni} ${kat.nimi}`, kat.kuvaus));
    const runko = el('div', { class: 'op-runko' }, el('div', { class: 'treeni-alku' }));
    const p = pisteet();
    const auki = saavutetut();
    const lista = Tr.kategorian(kat.id);
    if (!lista.length) runko.append(el('section', { class: 'osio manaattila' }, el('p', { class: 'ohje' }, 'Pacotes deste tipo chegam em breve.')));
    for (const ryhma of [...new Set(lista.map(pk => pk.ryhma))]) {
      runko.append(el('section', { class: 'osio manaattila' }, el('h2', {}, ryhma),
        el('div', { class: 'treeni-ruudukko' }, ...lista.filter(pk => pk.ryhma === ryhma)
          .map(pk => treeniKortti(pk, p, Tr.onTahdella(pk.id), !!pk.oppitunti && !auki.has(pk.oppitunti))))));
    }
    m.append(runko, el('nav', { class: 'op-nav' }, el('a', { href: '#treino' }, '← Todos os tipos de treino')));
    valmistele(m, null);
  }
  function naytaPaketti(pk) {
    nykyinenOppitunti = K.oppitunnit.find(x => x.id === pk.oppitunti) || null;
    A.asetaPaketti(pk.oppitunti || 'treeni');   // aihe- ja tilannepaketit: äänet paketissa treeni
    const m = paa();
    m.innerHTML = '';
    m.append(otsake(`Treino · ${nykyinenOppitunti ? nykyinenOppitunti.jakso : ''}`, pk.otsikko, pk.kuvaus));
    const paikka = el('div', { class: 'treeni-paikka' });
    m.append(el('div', { class: 'treeni-alku' }), el('section', { class: 'osio manaattila' }, paikka));
    window.Treeni.aja(pk, paikka, {
      el, sana, ohjain, arvioi, hyvaksytty, haeSana, ptLyhyt, KIELI, ilmoitaTulos, glossaa,
      // Auditointi 5 C2: ilman suomen ääntä kuuntelukohdat ohitetaan (voiPuhua/eiAanta, ilmoitusrivi, toast ▶:n viereen).
      voiPuhua: voi, eiAanta, eiAantaIlmoitus, toast, kirjaaTulos,
      valmis(tulos) {
        const p = pisteet();
        const t = p.paketit[pk.id] || { kierrokset: 0, paras: 0 };
        t.kierrokset++;
        // Paras kierros ja sen kysymysmäärä yhdessä (ohitetut eivät ole mukana, Treeni.aja yhteensa).
        // Enemmän oikein voittaa; tasatulos pienemmällä kysymysmäärällä myös (vanha tallennus ilman yhteensa = 8).
        if (tulos.oikein > t.paras || (tulos.oikein === t.paras && (tulos.yhteensa || 8) <= (t.yhteensa || 8))) { t.paras = tulos.oikein; if (tulos.yhteensa) t.yhteensa = tulos.yhteensa; }
        p.paketit[pk.id] = t;
        muisti.kirjoita(PISTEET, p);
        lisaaMandariineja(3, 'treino', `Rodada de treino: ${pk.otsikko}`);   // ilmoitus ”+3 🍊 …” (A6-33, T15.17)
        if (!pk.sana) marco('treino:' + pk.id, 2, `Pacote novo: ${pk.otsikko}`);   // sanan treeni: ei uuden paketin lisää jokaisesta sanasta
        paivitaMerkit();
      }
    });
    // Paluu: oppitunnin Treeni, tai aihepaketilla (ei oppituntia) sen luokan sivu.
    const kat = window.Treeni.kategoria(pk.luokka);
    m.append(el('nav', { class: 'op-nav' }, pk.paluu ? el('a', { href: pk.paluu, lang: KIELI }, `← ${pk.sana.replace(/:.*/, '')}`)
      : pk.oppitunti ? el('a', { href: '#treino-' + pk.oppitunti }, '← Todos os pacotes da lição')
      : el('a', { href: '#treino-' + pk.luokka }, `← ${kat ? kat.nimi : 'Treino'}`),
      nykyinenOppitunti ? el('a', { href: `#${pk.oppitunti}-gramatica`, class: 'seur' }, 'Gramática da lição →') : null));
  }

  /* ---------- pelit (assets/pelit.js): oppituntien 3–5 teemapelit, reitti #peli-<id> ----------
     Manaattilan kehys kuten Treenissä (Peixe-boi isona .peli-alku, oppaat.js); sama apu kuin Treenillä. Valmis kierros
     +3 🍊 ja tallennus pisteet().pelit[id] (✓ valikossa); ensimmäinen oikea vastaus 1 🍊 (passo:tulos). */
  function naytaPeli(peli) {
    nykyinenOppitunti = K.oppitunnit.find(x => x.id === peli.oppitunti) || null;
    A.asetaPaketti(peli.oppitunti);
    const m = paa();
    m.innerHTML = '';
    piirraPeli(peli, m);
    const osa = peli.osa === 'a' ? `#${peli.oppitunti}` : `#${peli.oppitunti}-${peli.osa || 'b'}`;
    m.append(el('nav', { class: 'op-nav' }, el('a', { href: osa }, `← ${nykyinenOppitunti ? nykyinenOppitunti.jakso : ''}, parte ${(peli.osa || 'b').toUpperCase()}`),
      el('a', { href: `#treino-${peli.oppitunti}`, class: 'seur' }, 'Treino →')));
  }
  // Pelin sisältö (otsake, Peixe-boi, Manaattila-kehys, taustakuva): oma sivu #peli-<id> tai koko ruudun kerros oppitunnilla
  // (kerros annettu: valokuva kerroksen omaksi taustaksi, ei näyttämöä – A6-17, T15.5).
  function piirraPeli(peli, m, kerros) {
    const o = K.oppitunnit.find(x => x.id === peli.oppitunti) || null;
    const pOts = otsake(`Jogo · ${o ? o.jakso : ''}`, peli.ikoniSvg ? peli.nimi : `${peli.ikoni} ${peli.nimi}`, peli.kuvaus);
    if (peli.ikoniSvg) pOts.querySelector('h1').prepend(peliIkoni(peli), ' ');
    m.append(pOts);
    const paikka = el('div', { class: 'peli' });
    m.append(el('div', { class: 'peli-alku' }), el('section', { class: 'osio manaattila', 'data-paikka': peli.paikka || null }, paikka));
    window.Pelit.aja(peli, paikka, {
      el, sana, ohjain, arvioi, hyvaksytty, haeSana, KIELI, ilmoitaTulos, glossaa,
      voiPuhua: voi, eiAanta, eiAantaIlmoitus, toast, kirjaaTulos,
      valmis(tulos) {
        const p = pisteet();
        p.pelit = p.pelit || {};
        const t = p.pelit[peli.id] || { kierrokset: 0, paras: 0 };
        t.kierrokset++; t.paras = Math.max(t.paras, tulos.oikein || 0);
        p.pelit[peli.id] = t;
        muisti.kirjoita(PISTEET, p);
        lisaaMandariineja(3, 'jogo', `Rodada do jogo: ${peli.nimi}`);   // ilmoitus ”+3 🍊 …” (A6-33, T15.17)
        marco('jogo:' + peli.id, 3, `Jogo novo: ${peli.nimi}`);
        paivitaMerkit();
        $$(`.peli-kortti[data-peli="${peli.id}"] .peli-kortti-tila`).forEach(x => { x.textContent = peliTila(peli); });
        // Mainos pelin jälkeen (omistaja 18.10.2026): Peixe-boi kertoo, missä Treenissä tätä harjoitellaan lisää.
        const kehys = m.querySelector('.osio.manaattila');
        if (kehys && !m.querySelector('.peli-mainos')) { const mainos = peliMainos(peli); if (mainos) kehys.after(mainos); }
      }
    });
    // Taustakuva ja sen tekijä kuten oppitunnilla: omalla sivulla näyttämö (data-paikka, Kuvitus.oppitunti); kerroksessa
    // kuva ja huntu kerroksen pohjalle (.peli-kerros-kuva, tottakai.css) – Kuvitus.oppitunti purkaisi oppitunnin näyttämön,
    // eikä kiinteä kerros näyttäisi sitä (A6-17). Tekijä ja lisenssi .kuvalahteet-rivillä kerroksen sisällä.
    if (peli.paikka && (K.kuvat || {})[peli.paikka]) {
      const kuva = K.kuvat[peli.paikka];
      if (kerros) kerros.prepend(el('img', { class: 'peli-kerros-kuva', src: kuva.src, alt: '', 'aria-hidden': 'true' }), el('div', { class: 'peli-kerros-huntu', 'aria-hidden': 'true' }));
      else if (window.Kuvitus && o) window.Kuvitus.oppitunti(m, o, { alkio });
      m.append(kuvalahteet([peli.paikka], 'Foto de fundo: '));
    }
  }

  /* Pelit tarinan sisällä (omistaja 18.10.2026: ”main features … integrated into Part A and Part B, otherwise the user might
     miss that they exist”): oppitunnin <div class="peli-upotus" data-peli="…"> → aloituskortti; Começar avaa pelin koko
     ruudun kerrokseen oppitunnin päälle, ja sulkeminen palaa samaan kohtaan. Sivuvalikon linkki #peli-<id> säilyy. */
  function peliMainos(peli) {
    const Tr = window.Treeni;
    const paketit = (peli.treeni || []).map(id => Tr && Tr.hae(id)).filter(Boolean);
    const kuva = window.Kuvitus && window.Kuvitus.avatar('manaatti', 'apuhahmo-kasvo');
    if (!paketit.length || !kuva) return null;
    const polku = pk => { const k = Tr.kategoria(pk.luokka); return `${k ? k.ikoni + ' ' + k.nimi : 'Treino'} → ${pk.otsikko}`; };
    return el('div', { class: 'apuhahmo apuhahmo-iso peli-mainos' }, kuva,
      el('div', { class: 'apuhahmo-kupla' }, el('b', {}, 'Peixe-boi: '),
        'Gostou? Eu também. Quer treinar mais isso, sem fila e sem suspiro? Está no Treino:',
        el('span', { class: 'peli-mainos-linkit' }, ...paketit.map(pk => el('a', { href: '#treino-' + pk.id, class: 'pieni-nappi' }, `🍊 ${polku(pk)}`)))));
  }
  function peliTila(peli) {
    const t = ((pisteet().pelit || {})[peli.id]) || {};
    return t.kierrokset ? `✓ ${t.kierrokset} rodada(s)` : 'Ainda não jogado';
  }
  function peliKortti(peli) {
    const aloita = el('button', { type: 'button', class: 'visa-aloita' }, 'Começar ▶');
    aloita.addEventListener('click', () => avaaPeli(peli, aloita));
    return el('div', { class: 'peli-kortti', 'data-peli': peli.id },
      el('b', { class: 'peli-kortti-nimi' }, ...(peli.ikoniSvg ? [peliIkoni(peli), ` Jogo: ${peli.nimi}`] : [`${peli.ikoni} Jogo: ${peli.nimi}`])), el('p', { class: 'ohje' }, peli.kuvaus),
      el('p', { class: 'peli-kortti-rivi' }, aloita, el('span', { class: 'peli-kortti-tila' }, peliTila(peli))));
  }
  function avaaPeli(peli, paluu) {
    const vieritys = window.scrollY;
    const sulje = el('button', { type: 'button', class: 'pieni-nappi peli-sulje' }, '✕ Voltar à lição');
    const sisus = el('div', { class: 'peli-kerros-sisus' });
    const kerros = el('div', { class: 'peli-kerros', role: 'dialog', 'aria-modal': 'true', 'aria-label': peli.nimi }, sulje, sisus);
    const kiinni = () => {
      document.removeEventListener('keydown', nappain);
      try { A.pysayta && A.pysayta(); } catch (e) { /* ohita */ }
      kerros.remove();
      document.body.classList.remove('peli-auki');
      window.scrollTo(0, vieritys);
      if (paluu && paluu.isConnected) paluu.focus();
    };
    const nappain = e => { if (e.key === 'Escape') kiinni(); };
    sulje.addEventListener('click', kiinni);
    document.addEventListener('keydown', nappain);
    // Linkki kerroksesta (esim. Peixe-boin mainos Treeniin) vaihtaa sivun: kerros pois, ei paluuvieritystä.
    window.addEventListener('hashchange', () => { document.removeEventListener('keydown', nappain); kerros.remove(); document.body.classList.remove('peli-auki'); }, { once: true });
    document.body.append(kerros);
    document.body.classList.add('peli-auki');
    piirraPeli(peli, sisus, kerros);
    kerros.scrollTop = 0;
    sulje.focus();
  }

  /* ---------- ydinsanasivu ---------- */
  const YDIN_RYHMAT = [
    ['pron', 'Pronomes: eu, você, isto'], ['v', 'Verbos básicos'], ['kysymys', 'Palavras interrogativas'],
    ['tervehdys', 'Cumprimentos e cortesia'], ['conj', 'Conjunções: e, mas, que'], ['post', 'Pós-posições e preposições'],
    ['adv', 'Advérbios e partículas: não, já, ainda'], ['ihmiset', 'Pessoas e família'], ['keho', 'Corpo e saúde'],
    ['tunteet', 'Sentimentos'], ['ajattelu', 'Pensamento'], ['viestinta', 'Falar e comunicar'], ['toiminta', 'Ações'],
    ['liike', 'Movimento'], ['aika', 'Tempo'], ['paikka', 'Lugar e direção'], ['koti', 'Casa e dia a dia'],
    ['ruoka', 'Comida e bebida'], ['kaupunki', 'Cidade e transporte'], ['tyo', 'Trabalho e estudo'], ['raha', 'Dinheiro e compras'],
    ['vapaa', 'Lazer'], ['luonto', 'Natureza e animais'], ['numerot', 'Números e quantidades'], ['ominaisuus', 'Características: como é?'],
    ['asiat', 'Coisas e assuntos'], ['puhekieli', 'Língua falada']
  ];
  function ydinRyhma(y) {
    if (y.taso === 'puhe') return 'puhekieli';
    if (y.aihe === 'perus') return y.sl === 'prep' ? 'post' : ['pron', 'v', 'conj', 'post', 'adv'].includes(y.sl) ? y.sl : 'asiat';
    return y.aihe || 'asiat';
  }
  /* Puhekielen selitys (assets/hakuosa.js h-puhekieli) Língua falada -sivun alkuun: sivut yhdistetty (käyttäjä 17.10.2026). */
  function puheOhje() {
    const h = (K.hakuosa || []).find(x => x.id === 'h-puhekieli');
    const d = el('div', { class: 'op-runko hakusivu' });
    d.innerHTML = h ? (typeof h.html === 'function' ? h.html() : h.html) : '';
    return d;
  }
  function naytaYdinsanat(taso) {
    nykyinenOppitunti = null;
    A.asetaPaketti(taso === 'fala' ? 'gramatica' : null);
    const rajat = { 100: [1, 100], 300: [101, 300], 500: [301, 500], 1000: [501, 1000] };
    const [a, b] = rajat[taso] || [0, 0];
    const sanat = taso === 'fala' ? PUHEKIELI.map(s => YDIN.get(s)).filter(Boolean) : [...YDIN.values()].filter(y => y.sija >= a && y.sija <= b);
    const ryhmat = new Map(YDIN_RYHMAT.map(([k]) => [k, []]));
    // Ydinsana ilman leksikon tietuetta: koneen merkitys (puhekielen listalla myös kirjakielinen vastine).
    // Puhekielen sivulla analyysi rekisterillä puhe (et = että, ollaan = me-passiivi, mitä); puhekielen se = hän (se#2).
    const FALA_MERKINNAT = { se: 'se#2' };
    const tieto = y => {
      const s = taso === 'fala' ? haeSana(y.s, { rekisteri: 'puhe' }) : haeSana(y.s);
      if (s) return taso === 'fala' && FALA_MERKINNAT[y.s] ? Object.assign({}, s, { merkinta: FALA_MERKINNAT[y.s] }) : s;
      return { id: null, pt: y.pt, kaikki: [y.pt], sl: KA.LUOKAT.kone.nimi, huom: y.kirja ? `= ${y.kirja}` : '', l: 'kone', kone: true };
    };
    for (const y of sanat) (ryhmat.get(taso === 'fala' ? 'puhekieli' : ydinRyhma(y)) || ryhmat.get('asiat')).push([y.s, tieto(y)]);
    const nimet = Object.fromEntries(YDIN_RYHMAT);
    const ryhmitys = [...ryhmat].filter(([, r]) => r.length).map(([k, r]) => [nimet[k], r]);
    const m = paa();
    m.innerHTML = '';
    const kattavuus = (K.ydin && K.ydin.kattavuus) || {};
    const nimi = taso === 'fala' ? 'Língua falada' : `Palavras ${a}–${b}`;
    m.append(otsake('As 1000 palavras mais úteis', nimi, taso === 'fala'
      ? 'Formas da língua falada (mä, sä, oon…) e o equivalente da língua escrita. Os finlandeses falam assim no dia a dia.'
      : `Do finlandês falado (legendas de filmes e séries, OpenSubtitles). As ${b} palavras mais comuns cobrem cerca de ${kattavuus[String(b)] || '?'} % de tudo o que se diz. Agrupadas por tema; dentro do grupo, a mais comum primeiro.`));
    const taulukko = sanalista([], 'fi', { ryhmitys }).taulukko;
    // Puhekieli vain selvästi merkityssä Na rua -kehyksessä (omistajan sääntö): kuplat saavat rekisterin puhe.
    m.append(taso === 'fala' ? el('section', { class: 'kulttuuri na-rua', 'data-rekisteri': 'puhe' },
      el('p', { class: 'yla' }, 'Na rua · Puhekieli'), puheOhje()) : taulukko);   // lista poistettu: kaikki sanat ovat selityksissä (käyttäjä 17.10.2026)
    valmistele(m, null);
  }

  /* ---------- Hakuosa (assets/hakuosa.js) ---------- */
  function naytaHakusivu(h) {
    nykyinenOppitunti = null;
    A.asetaPaketti('gramatica');
    const m = paa();
    m.innerHTML = '';
    m.append(otsake(h.osio ? `Gramática · ${h.osio}` : 'Gramática', h.otsikko, h.kuvaus));
    const runko = el('div', { class: 'op-runko hakusivu' });
    runko.innerHTML = typeof h.html === 'function' ? h.html() : h.html;
    m.append(runko);
    valmistele(m, null);
  }
  /* Hakuosan etusivu ja haku taivutetusta tai puhekielisestä muodosta perusmuotoon. */
  /* Tuleva oppitunti (sisällys): otsikko ja sisältö, ”em preparação”. */
  function naytaSuunnitelma(s) {
    nykyinenOppitunti = null;
    const m = paa();
    m.innerHTML = '';
    m.append(otsake(s.jakso + ' · em preparação', s.otsikko, 'Esta parte do curso ainda está sendo escrita. Ela vai incluir:'));
    m.append(el('section', { class: 'osio' }, el('ul', {}, ...s.kohdat.map(k => el('li', {}, k)))));
  }

  function naytaHakuosa() {
    nykyinenOppitunti = null;
    A.asetaPaketti('gramatica');
    const m = paa();
    m.innerHTML = '';
    m.append(otsake('Gramática', 'Gramática: consulta completa',
      'Tudo sobre a pronúncia e a gramática do finlandês, em português. Cada lição mostra só a parte de que precisa; aqui está tudo junto.'));
    const haku = el('input', { type: 'search', placeholder: 'Digite qualquer forma: talossa, mä oon, tiedän, kaupoissa…', 'aria-label': 'Procurar forma' });
    const tulos = el('div', { class: 'hakutulos', 'aria-live': 'polite' });
    // Haku leksikosta (Sanasto.analysoi): kaikki tulkinnat, kirjainkoosta riippumatta (helsingissä → Helsinki).
    haku.addEventListener('input', () => {
      const q = norm(haku.value);
      tulos.innerHTML = '';
      if (!q) return;
      const nahty = new Set();
      const osumat = S.analysoi(q).concat(S.analysoi(isolla(q))).filter(a => { const k = a.id + '|' + a.solu; if (nahty.has(k)) return false; nahty.add(k); return true; });
      const kone = !osumat.length && S.ydin(q);
      if (!osumat.length && !kone) { tulos.append(el('p', { class: 'ohje' }, 'Ainda não conheço esta forma. (A busca conhece as palavras do vocabulário do curso e todas as formas delas.)')); return; }
      if (kone) tulos.append(el('p', {}, el('span', { class: 'w', 'data-k': q, tabindex: '0', lang: KIELI }, q), ' = ', kone.pt, el('span', { class: 'sl' }, ' · ', KA.LUOKAT.kone.nimi)));
      for (const a of osumat) {
        const r = S.hae(a.id);
        const kuvaus = a.solu && a.solu !== 'nom' ? KA.solu(a.solu, S.harmonia(a.id)).nimi : KA.LUOKAT[r.l].nimi;
        tulos.append(el('p', {}, el('b', { lang: KIELI }, q), ' → ', el('a', { href: '#palavra-' + encodeURIComponent(a.id), class: 'fi', lang: KIELI }, nimi(a.id)),
          ` (${r.pt[0]}): ${kuvaus}${a.liite ? ' + ' + KA.AJAT.kys.nimi : ''}`));
      }
    });
    m.append(el('section', { class: 'osio' }, el('h2', {}, 'Procurar uma forma'),
      el('p', {}, 'O finlandês muda o fim das palavras. Digite a forma que você viu ou ouviu, e eu procuro a forma básica (a do dicionário).'), haku, tulos));
    for (const [osio, sivut] of gramaticaRyhmat()) {   // samat ryhmät ja järjestys kuin valikossa
      m.append(el('section', { class: 'osio' }, el('h2', {}, osio), el('ul', { class: 'hakuosa-lista' },
        ...sivut.map(h => el('li', {}, el('a', { href: '#' + h.id }, h.otsikko), h.kuvaus ? el('span', {}, ' · ' + h.kuvaus) : null)))));
    }
    valmistele(m, null);
  }

  /* ---------- sanasivu #palavra-<tunniste> (Kupla.sivu) ---------- */
  function naytaSanasivu(id) {
    nykyinenOppitunti = null;
    const r = S.hae(id);
    const ks = r && K.sanasto[norm(S.nimi(r.id))];
    A.asetaPaketti(r && r.o ? r.o : (ks && ks.lahde) || null);
    const m = paa();
    m.innerHTML = '';
    if (!r) { m.append(otsake('Vocabulário', 'Palavra não encontrada', `“${id}” não está no vocabulário do curso.`)); return; }
    // Puhekielisen sanan sivu on kokonaan Na rua -kehyksessä (puhekieli vain merkityssä osiossa, omistajan sääntö).
    const puhe = r.l === 'puhe';
    const runko = el('div', { class: 'sanasivu-kehys' + (puhe ? ' kulttuuri na-rua' : ''), 'data-rekisteri': puhe ? 'puhe' : null });
    runko.innerHTML = (puhe ? '<p class="yla">Na rua · Puhekieli</p>' : '') + Kp.sivu(id);
    $$('.pk-soita[data-sano]', runko).forEach(x => { const t = x.dataset.sano; x.replaceWith(ohjain(() => sana(t), { aina: true, nimi: U.kuuntele + ' ' + t })); });
    $$('.hahmokuva[data-hahmo]', runko).forEach(x => { const kuva = window.Kuvitus && window.Kuvitus.avatar(x.dataset.hahmo, 'pk-hahmokuva'); if (kuva) x.replaceWith(kuva); else x.remove(); });
    m.append(runko);
    // Yhden sanan treeni (omistaja 18.10.2026): linkki, jos sanalla on harjoiteltavia muotoja.
    if (!puhe && window.Treeni && window.Treeni.sanapaketti(id, saavutetut())) {
      m.append(el('a', { class: 'lisakortti', href: '#treino-sana-' + encodeURIComponent(id) }, el('b', {}, '🍊 Treinar esta palavra'),
        el('span', {}, 'As formas desta palavra que o curso já ensinou, 8 perguntas.')));
    }
    valmistele(m, null);
  }

  /* ---------- hiekkasärkkä (luonnos; pelillistäminen tarkennetaan, docs/PELILLISTAMINEN.md) ---------- */
  function naytaIlha() {
    nykyinenOppitunti = null;
    A.asetaPaketti(null);
    const m = paa();
    m.innerHTML = '';
    const p = pisteet();
    m.append(otsake('Mandarinas', 'A ilha do Capivara e do Peixe-boi',
      'Um banco de areia no meio do Amazonas. Com mandarinas, a ilha cresce: rede, coqueiros, boombox, camisas do Cruzeiro… Tudo na lojinha, lá embaixo.'));
    const runko = el('div', { class: 'op-runko ilha' });
    runko.append(el('p', { class: 'ilha-luku' }, el('span', { 'aria-hidden': 'true' }, '🍊 '), el('b', {}, String(p.mandariinit)), ' mandarinas'));
    runko.append(el('div', { class: 'ilha-kuva', 'aria-hidden': 'true' },
      window.Kuvitus ? window.Kuvitus.avatar('kertoja', 'ilha-hahmo', { mandariini: true }) || '' : '',
      window.Kuvitus ? window.Kuvitus.avatar('manaatti', 'ilha-hahmo', { havaiji: true }) || '' : '',
      // Pomovoittojen palkinnot (assets/pomo.js): K1 Partitiivipeto → poreallas.
      ...(window.Pomo ? window.Pomo.palkinnot() : [])));
    // Pomovoiton jälkeen juhlat rantatalolla (assets/pomo.js Pomo.juhla: lisäkerros saaren kuvan päälle).
    if (window.Pomo && window.Pomo.juhla) window.Pomo.juhla(runko.querySelector('.ilha-kuva'));
    if (window.Pomo) for (const t of window.Pomo.palkintoTekstit()) runko.append(el('p', { class: 'ohje' }, '🏆 ' + t));
    // Kauppa ja ostetut tavarat (assets/saari.js): kerros saaren kuvaan, päivän kori, säännöt ja Kauppa-osio.
    if (window.Saari && typeof window.Saari.nayta === 'function') {
      try {
        window.Saari.nayta(runko, runko.querySelector('.ilha-kuva'), {
          el, KIELI, glossaa: x => glossaa(x), kayta: kaytaMandariineja, saldo: () => pisteet().mandariinit,
          uudelleen() {
            const y = window.scrollY;
            naytaIlha();
            if (window.Asettelu) window.Asettelu.kayta($('#sisalto'));
            neljannekset($('#sisalto'));
            window.scrollTo(0, y);
          }
        });
      } catch (e) { console.warn('Tottakai: saari', e); }
    } else runko.append(el('p', {}, 'Por enquanto as mandarinas só se acumulam. Logo será possível gastá-las na ilha.'));
    const tehdyt = Object.entries(p.paketit || {});
    if (tehdyt.length) {
      const ul = el('ul');
      for (const [id, t] of tehdyt) { const pk = window.Treeni.hae(id); if (pk) ul.append(el('li', {}, `${pk.otsikko}: ${t.kierrokset} rodada(s), melhor ${parasTulos(t)}`)); }
      runko.append(el('h2', {}, 'Seus pacotes de treino'), ul);
    }
    m.append(runko);
  }

  /* ---------- kuvien tekijät ---------- */
  function kuvalahteet(avaimet, alku) {
    const p = el('p', { class: 'kuvalahteet' }, alku);
    avaimet.forEach((k, i) => {
      const kuva = K.kuvat[k];
      const tekija = kuva.lahde ? el('a', { href: kuva.lahde, target: '_blank', rel: 'noopener' }, kuva.tekija) : kuva.tekija;
      p.append(i ? ' · ' : '', `${kuva.paikka || kuva.alt}: `, tekija, `, ${kuva.lisenssi}`);
    });
    p.append(' · ', el('a', { href: '#creditos' }, 'todos os créditos'));
    return p;
  }
  function naytaKrediitit() {
    nykyinenOppitunti = null;
    A.asetaPaketti(null);
    const m = paa();
    m.innerHTML = '';
    m.append(otsake('Créditos', 'Fotos', 'As fotos do curso têm licença livre. Obrigado aos fotógrafos.'));
    const runko = el('div', { class: 'op-runko' });
    const ul = el('ul', { class: 'krediitit' });
    for (const kuva of Object.values(K.kuvat || {})) {
      const tekija = kuva.lahde ? el('a', { href: kuva.lahde, target: '_blank', rel: 'noopener' }, kuva.tekija) : kuva.tekija;
      ul.append(el('li', {}, el('b', {}, kuva.paikka || kuva.alt || ''), ' · Foto: ', tekija, `, ${kuva.lisenssi}`));
    }
    runko.append(ul);
    m.append(runko);
  }

  /* ---------- etusivu ---------- */
  function naytaEtusivu() {
    nykyinenOppitunti = null;
    A.asetaPaketti(null);
    const m = paa();
    m.innerHTML = $('#etusivu-pohja').innerHTML;
    const lista = $('#oppituntilista', m);
    for (const o of K.oppitunnit) {
      const a = el('a', { href: '#' + o.id }, el('span', { class: 'jakso' }, o.jakso), el('span', { class: 'nimi' }, o.otsikko));
      if (o.lahde) a.append(el('span', { class: 'lahde' }, o.lahde));
      // Edistysrivi (assets/saari.js edistysRivi, T15.17): sama teksti kuin oppitunnin otsakkeessa ja osan lopussa.
      if (window.Saari && typeof window.Saari.edistysRivi === 'function') {
        try { const rivi = window.Saari.edistysRivi(o.id); rivi.classList.add('edistys-luettelo'); a.append(rivi); } catch (e) { /* ohita */ }
      }
      lista.append(el('li', {}, a));
    }
    // Pääpainike (auditointi 5 C1/M10): lição 0; jos sitä ei vielä ole, ensimmäinen valmis oppitunti.
    const aloita = $('#aloita', m);
    const eka = K.oppitunnit.find(o => o.id === 't00') || K.oppitunnit[0];
    if (aloita && eka) { aloita.href = '#' + eka.id; aloita.textContent = `Começar pela lição ${eka.lyhyt || eka.id.replace(/^t0?/, '')}`; }
    valmistele(m, null);
    hoje(m);
    paivitaAaniTila();
  }
  /* ”Hoje” (auditointi 5 M7): jatka siitä, mihin jäit, ja enintään 10 kertauskohdetta (assets/tulokset.js: virheet
     Leitnerin laatikoista ja ★-kortit). Piilossa, jos kumpaakaan ei ole tai tuloslokia ei ole ladattu.
     AV-042 (16.10.2026): kertaus myös taivutettujen muotojen tasolla. Jonon yksisanainen taivutettu muoto näyttää
     perusmuodon (kirjoitatte → kirjoittaa). Lisäksi enintään 3 päivän muotoa (”Formas de hoje”), jotka oppija on
     nähnyt: ensin tuloslokin (Tulokset.loki) taivutetut muodot, sitten kolmen viimeisimmän avatun oppitunnin tekstien
     ja taulukoiden muodot (oppitunninAnalyysi). Muoto ensin ilman kuplaa; ”Ver a resposta” näyttää perusmuodon, muodon
     nimen ja merkityksen; ”Acertei”/”Errei” kirjaa tuloksen (lahde 'forma'): väärä menee Leitnerin laatikkoon 1 ja
     palaa jonoon, oikea erääntynyt kertaus maksaa +2 🍊 kuten muutkin (saari.js). Päivän valinta on sama koko päivän. */
  const HOJE_MUOTOJA = 3;
  // Taivutettu yksisanainen muoto → { pinta, id, solu } tai null (perusmuoto, monisanainen tai puhekielinen).
  function taivutettuMuoto(teksti) {
    const pinta = String(teksti || '').trim().replace(/[.!?…,;]+$/, '');
    if (!pinta || /[\s:]/.test(pinta)) return null;
    const an = S.analysoi(pinta, { alku: true })[0] || S.analysoi(pinta.toLowerCase(), { alku: true })[0];
    const r = an && S.hae(an.id);
    if (!r || !an.solu || an.liite || r.l === 'puhe' || r.piilota || pinta.toLowerCase() === nimi(an.id).toLowerCase()) return null;
    return { pinta: pinta.toLowerCase(), id: an.id, solu: an.solu };
  }
  const muodonNimi = f => { try { return KA.solu(f.solu, S.harmonia(f.id)).nimi || ''; } catch (e) { return ''; } };
  function paivanMuodot(T, jonossa, kesken) {
    const tanaan = new Date().toDateString();
    const loki = typeof T.loki === 'function' ? (T.loki() || []) : [];
    const kaytetty = new Set(jonossa);
    // Päivän muodot, joihin on jo vastattu, kuuluvat päivän kolmeen (ei loputonta täydennystä).
    const vastatut = new Set(loki.filter(r => r.lahde === 'forma' && new Date(r.aika).toDateString() === tanaan).map(r => String(r.avain)));
    vastatut.forEach(k => kaytetty.add(k));
    const ehdokkaat = [];
    const lisaa = (f, oppitunti) => { if (f && !kaytetty.has(f.pinta)) { kaytetty.add(f.pinta); ehdokkaat.push(Object.assign({ oppitunti }, f)); } };
    // 1) Tuloslokin muodot (tehtävät, Treeni, pomot; visa kysyy perusmuotoja): väärät ensin, uusimmat ensin.
    const lokista = loki.filter(r => r.lahde !== 'forma' && r.lahde !== 'visa').slice().reverse();
    for (const r of [...lokista.filter(r => !r.oikein), ...lokista.filter(r => r.oikein)]) lisaa(taivutettuMuoto(r.teksti), r.oppitunti);
    // 2) Kolmen viimeisimmän avatun oppitunnin muodot (tekstit ja taulukot), päivän mukaan sekoitettuna.
    const pisin = typeof T.edistys === 'function' ? T.edistys() : null;
    const i = pisin ? K.oppitunnit.findIndex(x => x.id === pisin) : -1;
    const sivuilta = [];
    for (const o of i < 0 ? [] : K.oppitunnit.slice(Math.max(0, i - 2), i + 1).reverse()) {
      // Analysoimaton oppitunti (pitkä oppitunti 100–300 ms) lasketaan vasta etusivun piirron jälkeen (hoje: setTimeout).
      if (!kaytetytMuisti.has(o)) { kesken.push(o); continue; }
      for (const [pinta, f] of oppitunninAnalyysi(o).muodot) sivuilta.push(Object.assign({ pinta, oppitunti: o.id }, f));
    }
    let siemen = 0;
    for (const c of tanaan) siemen = (siemen * 31 + c.charCodeAt(0)) >>> 0;
    const jarj = x => { let h = siemen; for (const c of x.pinta) h = (h * 33 + c.charCodeAt(0)) >>> 0; return h; };
    sivuilta.sort((a, b) => jarj(a) - jarj(b)).forEach(f => lisaa(f, f.oppitunti));
    return ehdokkaat.slice(0, Math.max(0, HOJE_MUOTOJA - vastatut.size));
  }
  // Yksi muotorivi: muoto, ”Ver a resposta” → perusmuoto · muodon nimi · merkitys, sitten ”Acertei” / ”Errei”.
  function muotoRivi(T, f) {
    const o = K.oppitunnit.find(x => x.id === f.oppitunti);
    const nakyva = /^[A-ZÅÄÖ]/.test(nimi(f.id)) ? isolla(f.pinta) : f.pinta;   // erisnimi isolla (Hakaniemen)
    const li = el('li', { class: 'hoje-muoto' }, el('span', { class: 'hoje-teksti', lang: KIELI, translate: 'no' }, nakyva),
      o ? el('span', { class: 'hoje-mista' }, o.jakso) : null);
    const nayta = el('button', { type: 'button', class: 'hoje-nayta' }, 'Ver a resposta');
    nayta.addEventListener('click', () => {
      const s = haeSana(f.id);
      const nimiF = muodonNimi(f);
      const vastaus = el('span', { class: 'hoje-perus' }, '= ',
        el('a', { href: '#palavra-' + encodeURIComponent(f.id), class: 'fi', lang: KIELI, translate: 'no' }, nimi(f.id)),
        nimiF ? ' · ' + nimiF : '', s && ptLyhyt(s) ? ' · ' + ptLyhyt(s) : '');
      const kirjaa = oikein => () => {
        try { T.kirjaa({ lahde: 'forma', oppitunti: f.oppitunti || null, avain: f.pinta, teksti: f.pinta, oikein, reitti: '#palavra-' + encodeURIComponent(f.id) }); } catch (e) { /* ei muistia */ }
      };
      const ok = el('button', { type: 'button', class: 'hoje-arvio' }, 'Acertei');
      const ei = el('button', { type: 'button', class: 'hoje-arvio' }, 'Errei');
      ok.addEventListener('click', kirjaa(true));
      ei.addEventListener('click', kirjaa(false));
      nayta.replaceWith(vastaus, el('span', { class: 'hoje-arviot' }, ok, ei));
    });
    li.append(nayta);
    return li;
  }
  function hoje(m) {
    const osio = $('#hoje', m);
    const T = window.Tulokset;
    if (!osio || !T) return;
    let viimeisin = null, jono = [], muodot = [];
    try { viimeisin = typeof T.viimeisin === 'function' ? T.viimeisin() : null; } catch (e) { viimeisin = null; }
    try { jono = typeof T.jono === 'function' ? (T.jono(10) || []).slice(0, 10) : []; } catch (e) { jono = []; }
    const reitti = viimeisin && (typeof viimeisin === 'string' ? viimeisin : viimeisin.reitti);
    try {
      // Jonossa jo olevat muodot (myös tehtävän vastauksena, kirjoitatte → kirjoittaa) eivät tule toiseen kertaan.
      const jonossa = jono.filter(j => !j.tahti).map(j => { const fm = taivutettuMuoto(j.teksti); return fm ? fm.pinta : String(j.teksti || '').toLowerCase(); });
      const kesken = [];
      muodot = reitti ? paivanMuodot(T, jonossa, kesken) : [];
      if (kesken.length) {
        muodot = [];   // ei puolikasta listaa: muodot näkyvät, kun oppitunnit on analysoitu
        setTimeout(() => { kesken.forEach(oppitunninAnalyysi); const m2 = $('#sisalto'); if (m2 && $('#hoje', m2)) hoje(m2); }, 30);
      }
    } catch (e) { muodot = []; }
    while (osio.children.length > 1) osio.lastChild.remove();
    if (!reitti && !jono.length) { osio.hidden = true; return; }
    if (reitti) {
      const href = reitti[0] === '#' ? reitti : '#' + reitti;
      osio.append(el('p', { class: 'hoje-jatka' }, el('a', { class: 'paanappi toissijainen', href }, 'Continue de onde parou →'),
        (viimeisin && viimeisin.otsikko) ? el('span', { class: 'hoje-mista' }, viimeisin.otsikko) : null));
    }
    let putki = 0;
    try { putki = typeof T.putki === 'function' ? Number(T.putki()) || 0 : 0; } catch (e) { putki = 0; }
    if (putki > 0) osio.append(el('p', { class: 'hoje-putki' }, `🍊 ${putki} ${putki === 1 ? 'dia' : 'dias seguidos'} de estudo.`));
    if (jono.length) {
      osio.append(el('h3', {}, `Para revisar hoje (${jono.length})`), el('p', { class: 'ohje' }, 'Cada revisão certa vale +2 🍊.'));
      const ul = el('ul', { class: 'hoje-jono' });
      for (const j of jono) {
        // Muotokertaus (AV-042) kerrataan tässä samalla tavalla kuin ”Formas de hoje”.
        const fm = j.lahde === 'forma' ? taivutettuMuoto(j.teksti) : null;
        if (fm) { ul.append(muotoRivi(T, Object.assign({ oppitunti: j.oppitunti }, fm))); continue; }
        const href = j.reitti ? (j.reitti[0] === '#' ? j.reitti : '#' + j.reitti) : (j.oppitunti ? '#' + j.oppitunti : '#treino');
        const o = K.oppitunnit.find(x => x.id === j.oppitunti);
        // Visan ja tehtävien teksti on suomea: sanat saavat kuplan. ★-kortin otsikko on portugalia.
        const teksti = el('span', { class: 'hoje-teksti', lang: j.tahti ? 'pt-BR' : KIELI }, (j.tahti ? '★ ' : '') + (j.teksti || ''));
        if (!j.tahti) glossaa(teksti);
        // Taivutettu muoto: perusmuoto näkyviin (kirjoitatte → kirjoittaa), AV-042.
        const f = j.tahti ? null : taivutettuMuoto(j.teksti);
        ul.append(el('li', {}, teksti, f ? el('span', { class: 'hoje-perus', lang: KIELI, translate: 'no' }, '→ ' + nimi(f.id)) : null,
          o ? el('span', { class: 'hoje-mista' }, o.jakso) : null,
          el('a', { href }, j.tahti ? 'Treinar →' : 'Revisar →')));
      }
      osio.append(ul);
    }
    if (muodot.length) {
      osio.append(el('h3', {}, 'Formas de hoje'),
        el('p', { class: 'ohje' }, 'Formas que você já viu nas lições. Qual é a forma básica e o que quer dizer? Pense e toque em “Ver a resposta”.'));
      osio.append(el('ul', { class: 'hoje-jono hoje-muodot' }, ...muodot.map(f => muotoRivi(T, f))));
    }
    osio.hidden = false;
  }
  // Uusi tulos etusivun ollessa auki: Hoje päivittyy.
  document.addEventListener('tottakai:tulos', () => { const m = $('#sisalto'); if (m && $('#hoje', m)) hoje(m); });
  document.addEventListener('tottakai:mitali', () => paivitaMerkit());

  // Sivun nimi otsakkeesta (Hoje-linkin teksti): ”Lição 1 · Apresentar-se … · Parte B · …”.
  function sivunOtsikko() {
    const o = $('#sisalto .op-otsake');
    if (!o) return null;
    const osa = $('#sisalto .osa-nav a[aria-current]');
    return [$('.yla', o), $('h1', o), osa].filter(Boolean).map(x => x.textContent.trim()).filter(Boolean).join(' · ');
  }

  // Oppitunnin nimen aria-expanded = alalinkit näkyvissä (sama ehto kuin rengasmerkin pisteellä tottakai.css:ssä).
  function oppitunninAria(li) {
    const a = li.querySelector(':scope > a.v-oppitunti');
    if (a) a.setAttribute('aria-expanded', String(li.classList.contains('aktiivinen') && !li.classList.contains('v-kiinni')));
  }
  function paivitaValikko(id) {
    // Osallisen oppitunnin nimi ei ole ”nyt”: korostus on Parte A -alalinkissä (sama osoite).
    $$('#valikko a').forEach(a => a.classList.toggle('nyt', a.getAttribute('href') === '#' + id && !a.classList.contains('v-oppitunti')));
    const oppitunti = id.replace(/-(vocabulario(-pt)?|quiz|gramatica|[a-z])$/, '').replace(/^treino-/, '');
    const peli = /^peli-/.test(id) && window.Pelit ? window.Pelit.hae(id.slice(5)) : null;   // #peli-<id> kuuluu oppitunnilleen
    $$('#valikko [data-oppitunti]').forEach(li => { li.classList.toggle('aktiivinen', li.dataset.oppitunti === oppitunti || (id.startsWith('treino-' + li.dataset.oppitunti)) || (!!peli && peli.oppitunti === li.dataset.oppitunti)); oppitunninAria(li); });
    $$('#valikko .v-ryhma li:not([data-oppitunti])').forEach(li => {
      const a = li.querySelector(':scope > a');
      li.classList.toggle('aktiivinen', !!a && a.getAttribute('href') === '#' + id);
    });
    // Alaryhmä, jossa avoin sivu on, avautuu kokonaan (omistaja 18.10.2026: muuten ei näe, että ryhmässä on muitakin
    // sivuja) ja näkyy kokonaan suljetussakin Gramáticassa; muita alaryhmiä ei avata.
    $$('#valikko .v-alaryhma').forEach(r => {
      const nyt = !!r.querySelector('a.nyt');
      r.classList.toggle('aktiivinen', nyt);
      if (nyt && r.avaa) r.avaa();
    });
    const v_ = $('#valikko');
    if (v_ && v_.__paivitaKaikki) v_.__paivitaKaikki();
  }

  /* Valmis-merkit ✓ sivuvalikon alalinkeissä (auditointi 5 M6) olemassa olevasta tallennuksesta: visa (paras tulos
     tallennettu), Treeni (oppitunnin jokainen paketti tehty kerran), osa, jossa kotitehtävä (koti-tNN, ei tyhjä) ja
     itsearvio (arvio-tNN, vähintään yksi vastaus) ovat. Gramática da lição ja Vocabulário: ei tallennusta, ei merkkiä. */
  const osaDom = new WeakMap();   // oppitunnin osan jäsennetty HTML (paivitaMerkit, T15.8)
  function paivitaMerkit() {
    const visat = muisti.lue('visa', {});
    const p = pisteet();
    for (const o of K.oppitunnit) {
      const li = $(`#valikko [data-oppitunti="${o.id}"]`);
      if (!li) continue;
      const tehty = new Map();
      tehty.set(`#${o.id}-quiz`, visat[o.id] !== undefined);
      const paketit = window.Treeni ? window.Treeni.oppitunnin(o.id) : [];
      tehty.set(`#treino-${o.id}`, paketit.length > 0 && paketit.every(pk => ((p.paketit || {})[pk.id] || {}).kierrokset > 0));
      for (const pl of window.Pelit ? window.Pelit.oppitunnin(o.id) : []) tehty.set('#peli-' + pl.id, ((p.pelit || {})[pl.id] || {}).kierrokset > 0);
      const osat = oppitunninOsat(o);
      // T15.8 (A6-20): osan HTML jäsennetään (template) ja luokat haetaan querySelectorilla, ei regexillä
      // (class="kotitehtava malli" tai luokkien järjestys ei enää riko merkkiä).
      const jasenna = x => { if (!osaDom.has(x)) { const t = document.createElement('template'); t.innerHTML = x.html || ''; osaDom.set(x, t.content); } return osaDom.get(x); };
      const i = osat.findIndex(x => !!jasenna(x).querySelector('.kotitehtava, .itsearvio'));
      if (i >= 0) {
        const dom = jasenna(osat[i]);
        const koti = !dom.querySelector('.kotitehtava') || String(muisti.lue('koti-' + o.id, '')).trim() !== '';
        const arvio = !dom.querySelector('.itsearvio') || Object.keys(muisti.lue('arvio-' + o.id, {})).length > 0;
        tehty.set(i ? `#${o.id}-${osat[i].id}` : `#${o.id}`, koti && arvio);
      }
      // Mitali oppitunnin nimen perään (assets/saari.js).
      const paaLinkki = li.querySelector(':scope > a');
      if (paaLinkki && window.Saari && window.Saari.mitaliTila) {
        const vanha = paaLinkki.querySelector('.mitali-merkki');
        if (vanha) vanha.remove();
        const mt = window.Saari.mitaliTieto(window.Saari.mitaliTila(o.id).mitali);
        if (mt) paaLinkki.append(el('span', { class: 'mitali-merkki', title: mt.kivi ? 'Pedra: lição completa' : 'Medalha de ' + mt.nimi, 'aria-label': mt.kivi ? 'pedra: lição completa' : 'medalha de ' + mt.nimi }, mt.ikoni));
      }
      $$(':scope > a', li).forEach(a => {
        const t = !!tehty.get(a.getAttribute('href'));
        a.classList.toggle('tehty', t);
        if (t) a.setAttribute('title', 'Feito'); else a.removeAttribute('title');
      });
    }
  }

  /* Vierityskohta historiamerkinnöittäin (sessionStorage, muuten muisti): takaisin-napilla sivu palaa samaan kohtaan ja
     samat kielioppikortit (details) ovat auki; uusi siirtymä (linkki) alkaa ylhäältä. Merkinnän tunniste on
     history.state.avain (arkin merkintä jakaa sivunsa tunnisteen). */
  const VIERITYS = 'vieritys', VIERITYS_MAX = 60;
  const reittiNyt = () => (location.hash || '#inicio').slice(1);
  const vieritykset = (() => { try { return JSON.parse(sessionStorage.getItem(MUISTI + VIERITYS)) || {}; } catch (e) { return {}; } })();
  let nykyAvain = null, nykyReitti = null, vieritysAjastin = 0;
  function kirjoitaVieritykset() {
    const avaimet = Object.keys(vieritykset);
    for (const k of avaimet.slice(0, Math.max(0, avaimet.length - VIERITYS_MAX))) delete vieritykset[k];
    try { sessionStorage.setItem(MUISTI + VIERITYS, JSON.stringify(vieritykset)); } catch (e) { /* yksityinen ikkuna: muisti riittää */ }
  }
  function tallennaVieritys() {
    if (!nykyAvain || reittiNyt() !== nykyReitti) return;   // osoite vaihtui, uutta sivua ei vielä piirretty
    const v = vieritykset[nykyAvain] || (vieritykset[nykyAvain] = { y: 0, d: null });
    v.y = Math.round(window.scrollY);
    clearTimeout(vieritysAjastin);
    vieritysAjastin = setTimeout(kirjoitaVieritykset, 200);
  }
  window.addEventListener('scroll', tallennaVieritys, { passive: true });
  function tallennaAvaukset() {
    if (!nykyAvain || !vieritykset[nykyAvain] || reittiNyt() !== nykyReitti) return;
    vieritykset[nykyAvain].d = $$('#sisalto details').map((d, i) => (d.open ? i : -1)).filter(i => i >= 0);
    clearTimeout(vieritysAjastin);
    vieritysAjastin = setTimeout(kirjoitaVieritykset, 200);
  }
  document.addEventListener('toggle', e => { if (e.target.closest && e.target.closest('#sisalto')) tallennaAvaukset(); }, true);
  // Kuvat ja kuvitus voivat kasvattaa sivua piirtämisen jälkeen: kohta asetetaan uudelleen hetken ajan, ellei lukija vieritä.
  function palautaVieritys(y) {
    window.scrollTo(0, y);
    if (!y) return;
    const loppu = Date.now() + 1500;
    let edellinen = window.scrollY;
    const yrita = () => {
      if (Date.now() > loppu || Math.abs(window.scrollY - edellinen) > 2) return;
      if (Math.abs(window.scrollY - y) > 2) window.scrollTo(0, y);
      edellinen = window.scrollY;
      if (Math.abs(edellinen - y) > 2) setTimeout(yrita, 100);
    };
    setTimeout(yrita, 60);
  }
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) { /* vanha selain */ }

  /* Taulukoiden neljännesruudukko (Passon sääntö, assets/tyyli.css; käyttäjä 17.10.2026 myös Tottakaihin): enintään
     4 sarakkeen taulukossa sarakkeet alkavat 0, 25, 50 ja 75 %:n kohdalta, viimeinen sarake saa loput. Yli 4 saraketta,
     verbien taivutusruudukko, .vapaa-taulu ja oma colgroup: vapaa mitoitus. ▶ on aina tekstinsä solussa, ei omana sarakkeenaan. */
  function neljannekset(juuri) {
    $$('table', juuri).forEach(t => {
      if (t.classList.contains('vapaa-taulu') || t.classList.contains('verbitaulu') || t.querySelector('colgroup')) return;
      const sarakkeita = Math.max(0, ...[...t.rows].map(r => [...r.cells].reduce((n, c) => n + (c.colSpan || 1), 0)));
      if (sarakkeita < 2 || sarakkeita > 4) return;
      const cg = document.createElement('colgroup');
      for (let i = 0; i < sarakkeita; i++) {
        const col = document.createElement('col');
        if (i === 0) col.className = 'ensimmainen';
        else col.style.width = (i < sarakkeita - 1 ? 25 : 100 - 25 * (sarakkeita - 1)) + '%';
        cg.append(col);
      }
      t.prepend(cg);
      t.classList.add('neljannes');
    });
    linjaa(juuri);
  }
  /* Linjaus koko sivun neljänneksiin (käyttäjä 17.10.2026): sarakerajat ovat samoissa kohdissa koko sivulla, myös
     laatikon (Na rua, kielioppikortti) sisällä olevassa taulukossa, jonka vasen reuna on sisennetty. Rajat lasketaan
     #sisalto-alueesta (enintään 1200 px): ensimmäinen raja max(25 %, 9rem), seuraavat 50 % ja 75 %; viimeinen sarake
     saa loput. Lasketaan uudelleen ikkunan koon muuttuessa ja kortin avautuessa. */
  function linjaa(juuri) {
    const sis = $('#sisalto');
    const sr = sis && sis.getBoundingClientRect();
    if (!sr || !sr.width) return;
    const W = Math.min(sr.width, 1200);
    // Kapea näyttö (auditointi 4 P-C1): ei neljännesrajoja eikä 9rem/48 px -ketjua; selain mitoittaa sarakkeet
    // (tottakai.css: table-layout auto alle 560 px), jotta sanat eivät katkea kesken.
    if (window.matchMedia && window.matchMedia('(max-width: 560px)').matches) {
      $$('table.neljannes > colgroup > col', juuri || sis).forEach(c => { c.style.width = ''; });
      return;
    }
    const min1 = 9 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    $$('table.neljannes', juuri || sis).forEach(t => {
      const r = t.getBoundingClientRect();
      if (!r.width) return;
      const cols = $$(':scope > colgroup > col', t);
      const rajat = [Math.max(W / 4, min1)];
      for (let k = 2; k < cols.length; k++) rajat.push(Math.max(k * W / 4, rajat[k - 2] + 48));
      let ed = r.left - sr.left;
      cols.forEach((c, i) => {
        if (i === cols.length - 1) { c.style.width = ''; return; }
        const w = Math.max(rajat[i] - ed, 40);
        c.style.width = w + 'px';
        ed += w;
      });
    });
  }
  let linjausAjastin = null;
  // #sisalto:n leveys muuttuu myös ilman ikkunan koon muutosta (vierityspalkki ilmestyy sivun piirron jälkeen).
  const linjaaPian = () => { clearTimeout(linjausAjastin); linjausAjastin = setTimeout(() => linjaa(), 60); };
  window.addEventListener('resize', linjaaPian);
  const tarkkaile = () => { const s = $('#sisalto'); if (s && window.ResizeObserver) new ResizeObserver(linjaaPian).observe(s); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tarkkaile); else tarkkaile();
  document.addEventListener('toggle', e => { if (e.target.open) linjaa(e.target); }, true);


  function reititä() {
    virheIlmoitettu = false;   // enintään yksi ilmoitus lukijalle reitin vaihtoa kohden
    const id = reittiNyt();
    let avain = null, uusi = true;
    // Virheraja (A6-07): sivun piirron virhe kirjataan, ja yhteiset vaiheet (valikko, merkit, asettelu) ajetaan silti.
    suojaa('reititä', () => {
      A.pysayta();
      { const s0 = $('#sisalto'); if (s0) delete s0.dataset.oppitunti; }   // vain naytaOppitunti asettaa sen uudelleen
      arkkiMerkinta = false;   // osoite vaihtui: arkin merkintä ei ole enää nykyinen
      piilotaKuplat(true);
      const tila = history.state || {};
      avain = tila.avain;
      uusi = !avain || !vieritykset[avain];
      if (!avain) {
        avain = 'v' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
        try { history.replaceState(Object.assign({}, tila, { avain }), ''); } catch (e) { /* file:// tms. */ }
      }
      nykyAvain = avain;
      nykyReitti = id;
      let m;
      const o = K.oppitunnit.find(x => x.id === id);
      if (o) naytaOppitunti(o);
      else if ((m = id.match(/^(.+)-([a-z])$/)) && K.oppitunnit.find(x => x.id === m[1] && (x.osat || []).some(s => s.id === m[2]))) naytaOppitunti(K.oppitunnit.find(x => x.id === m[1]), m[2]);
      else if ((m = id.match(/^(.+)-vocabulario(-pt)?$/)) && K.oppitunnit.find(x => x.id === m[1])) naytaOppitunninSanasto(K.oppitunnit.find(x => x.id === m[1]), m[2] ? 'pt' : 'fi');
      else if ((m = id.match(/^(.+)-quiz$/)) && K.oppitunnit.find(x => x.id === m[1])) naytaVisa(K.oppitunnit.find(x => x.id === m[1]));
      else if ((m = id.match(/^(.+)-gramatica$/)) && K.oppitunnit.find(x => x.id === m[1])) naytaKielioppi(K.oppitunnit.find(x => x.id === m[1]));
      else if (id === 'treino') naytaTreeni(null);
      else if ((m = id.match(/^treino-(.+)$/)) && K.oppitunnit.find(x => x.id === m[1])) naytaTreeni(m[1]);
      else if (id.startsWith('treino-sana-')) {
        const sid = decodeURIComponent(id.slice('treino-sana-'.length));
        const pk = window.Treeni.sanapaketti(sid, saavutetut());
        if (pk) naytaPaketti(pk); else naytaSanasivu(sid);
      }
      else if ((m = id.match(/^treino-(.+)$/)) && window.Treeni.kategoria(m[1])) naytaTreeniLuokka(window.Treeni.kategoria(m[1]));
      else if ((m = id.match(/^treino-(.+)$/)) && window.Treeni.hae(m[1])) naytaPaketti(window.Treeni.hae(m[1]));
      else if (id === 'gramatica' || id === 'hakuosa') naytaHakuosa();
      else if (id === 'h-puhekieli') naytaYdinsanat('fala');   // yhdistetty Língua falada -sivuun (käyttäjä 17.10.2026)
      else if ((K.hakuosa || []).some(h => h.id === id)) naytaHakusivu(K.hakuosa.find(h => h.id === id));
      else if ((m = id.match(/^nucleo-(100|300|500|1000|fala)$/))) naytaYdinsanat(m[1]);
      else if (id === 'fi-pt' || id === 'pt-fi') naytaKokoSanasto(id === 'pt-fi' ? 'pt' : 'fi');
      else if (id.startsWith('palavra-')) naytaSanasivu(decodeURIComponent(id.slice('palavra-'.length)));
      else if (id.startsWith('plano-') && (K.sisallys || []).some(s => s.id === id.slice(6))) naytaSuunnitelma(K.sisallys.find(s => s.id === id.slice(6)));
      else if ((m = id.match(/^peli-(.+)$/)) && window.Pelit && window.Pelit.hae(m[1])) naytaPeli(window.Pelit.hae(m[1]));
      else if (id === 'ilha') naytaIlha();
      else if (id === 'creditos') naytaKrediitit();
      // Ajustes ja edistymisen siirto (assets/ajustes.js, assets/siirto.js): #ajustes, #enviar, #receber, #tuonti=…
      else if (id === 'ajustes' && window.Ajustes) { nykyinenOppitunti = null; const m2 = paa(); m2.innerHTML = ''; window.Ajustes.nayta(m2, el); }
      else if (id === 'enviar' && window.Siirto) { nykyinenOppitunti = null; const m2 = paa(); m2.innerHTML = ''; window.Siirto.naytaVienti(m2, el); }
      else if ((id === 'receber' || id.startsWith('tuonti=')) && window.Siirto) {
        nykyinenOppitunti = null;
        const m2 = paa(); m2.innerHTML = '';
        if (id.startsWith('tuonti=')) { window.Siirto.vastaanota(id); try { history.replaceState(history.state, '', '#receber'); } catch (e) { /* file:// */ } }
        window.Siirto.naytaVastaanotto(m2, el);
      }
      else naytaEtusivu();
    });
    // Yhteiset vaiheet, jokainen omassa virherajassaan: yhden kaatuminen ei estä seuraavia.
    suojaa('Kuvitus.apuhahmot', () => { if (window.Kuvitus) window.Kuvitus.apuhahmot($('#sisalto')); });
    suojaa('Asettelu.kayta', () => { if (window.Asettelu) window.Asettelu.kayta($('#sisalto')); });   // yhtenäinen asettelu (Kurssi.asettelu, ui.js)
    suojaa('naRuaToisto', () => naRuaToisto($('#sisalto')));
    suojaa('tarinakuvat', () => tarinakuvat($('#sisalto')));
    suojaa('neljannekset', () => neljannekset($('#sisalto')));
    suojaa('paivitaValikko', () => paivitaValikko(id));
    suojaa('paivitaMerkit', paivitaMerkit);
    suojaa('paivitaAaniLuokka', paivitaAaniLuokka);
    // ”Continue de onde parou” (etusivun Hoje): jokainen sisältösivu muistiin, paitsi etusivu, sanasivut (kuplan
    // ”Tudo sobre”), krediitit ja mandariinisaari.
    suojaa('Tulokset.merkitse', () => {
      if (window.Tulokset && typeof window.Tulokset.merkitse === 'function' && $('#sisalto .op-otsake') && !$('#sisalto .etusivu-otsake')
        && !/^(inicio|creditos|ilha|palavra-|ajustes|enviar|receber|tuonti)/.test(id)) {
        window.Tulokset.merkitse('#' + id, sivunOtsikko());
      }
    });
    suojaa('vieritys', () => {
      if (!avain) return;   // reitin vaihto kaatui ennen merkinnän tunnistetta
      const v = uusi ? null : vieritykset[avain];
      if (v && Array.isArray(v.d)) $$('#sisalto details').forEach((d, i) => { d.open = v.d.includes(i); });
      if (!vieritykset[avain]) vieritykset[avain] = { y: 0, d: null };
      palautaVieritys(v ? v.y : 0);
    });
  }

  /* Na rua -taulukot (omistaja 22.10.2026: ”All Na Rua columns need a play button = all puhekieli needs a voice line”):
     jaettu asettelu (assets/asettelu.js) antaa ▶:n vain rivin ensimmäiseen suomenkieliseen soluun (kirjakieli). Tämä lisää
     ▶:n jokaiseen muuhun Na rua -taulukon soluun, jossa on suomea (puhekielinen asu). Ilman äänitettä soi selaimen ääni. */
  /* Tarinakuvat (AV-073, sarja 2; omistaja 22.10.2026: ”they could be on right side of dialogo in browser, and inline with
     dialogue in phone (interrupting the dialogue in suitable places)”): <figure class="tarinakuva" data-tarinakuva="t02-1"
     data-alt="…"> dialogin (.kpl) repliikkien väliin, sen repliikin eteen, jonka kohdalla kuva alkaa. Kuva on
     assets/tarinakuvat/<nimi>.svg. Leveällä näytöllä kuva on dialogin oikealla puolella repliikkinsä korkeudella (CSS),
     kapealla repliikkien välissä. Kuvassa ei ole tekstiä, eikä se ole .s-rivi, joten dialogin toisto ohittaa sen. */
  function tarinakuvat(juuri) {
    $$('figure.tarinakuva[data-tarinakuva]', juuri).forEach(f => {
      if (f.querySelector('img')) return;
      f.append(el('img', { src: `assets/tarinakuvat/${f.dataset.tarinakuva}.svg`, width: '300', height: '300', alt: f.dataset.alt || '' }));
      const kpl = f.closest('.kpl');
      if (kpl) kpl.classList.add('on-tarinakuvia');
    });
  }

  function naRuaToisto(juuri) {
    $$('.na-rua table tr', juuri).forEach(tr => {
      $$(':scope > td', tr).forEach(td => {
        if (td.querySelector('button')) return;
        const fi = $$('span.fi, b.fi, i.fi', td).map(x => x.textContent.trim()).filter(Boolean).join(' ');
        if (!fi) return;
        // T12.4: na rua -sarake (data-rekisteri="puhe") puhe-roolilla, kirjakielinen sarake kertojalla.
        const puhe = PUHE_ROOLI_KAYTOSSA && !gramaticaSivu() && !!td.querySelector('[data-rekisteri="puhe"]');
        td.prepend(ohjain(() => (puhe ? puheella : sana)(fi, null), { aina: true, nimi: U.kuuntele + ': ' + fi }));
      });
    });
  }

  /* ---------- valikko ja yläpalkki ---------- */
  // ala = alaryhmä ryhmän sisällä (Gramática, omistaja 18.10.2026): oma avattava alaotsake. Jokaisen ryhmän tila on
  // muistissa erikseen, joten koko Gramátican sulkeminen ja avaaminen palauttaa alaryhmät ennalleen.
  function valikkoryhma(nimi, avain, oletusAuki, kohdat, ala = false) {
    const ryhma = el('li', { class: ala ? 'v-alaryhma' : 'v-ryhma' });
    const lista = el('ul', { id: 'v-' + avain });
    const otsake_ = el('button', { type: 'button', class: ala ? 'v-alaotsake' : 'v-otsake', 'aria-controls': 'v-' + avain }, el('span', {}, nimi), el('span', { class: 'v-nuoli', 'aria-hidden': 'true' }, '▸'));
    kohdat.forEach(k => lista.append(k));
    let auki = muisti.lue('valikko-' + avain, oletusAuki);
    const aseta = (x, tallenna) => {
      // Avoimen sivun alaryhmä ei sulkeudu koskaan (omistaja 18.10.2026): ei otsakkeesta eikä Fechar tudo -napista.
      if (!x && ala && ryhma.classList.contains('aktiivinen')) x = true;
      auki = x;
      ryhma.classList.toggle('kiinni', !x);
      otsake_.setAttribute('aria-expanded', String(x));
      if (tallenna) muisti.kirjoita('valikko-' + avain, x);
    };
    otsake_.addEventListener('click', () => aseta(!auki, true));
    ryhma.avaa = () => { if (!auki) aseta(true, true); };
    ryhma.aseta = x => aseta(x, true);
    aseta(auki, false);
    ryhma.append(otsake_, lista);
    return ryhma;
  }
  const linkki = (href, nimi) => el('li', {}, el('a', { href }, nimi));
  // Gramática-sivut ryhmittäin tässä järjestyksessä (valikko ja hakemisto); ryhmän sisällä hakuosa.js:n järjestys.
  // siirretty: sivu näytetään muualla (h-puhekieli → nucleo-fala).
  const GRAMATICA_RYHMAT = ['Pronúncia', 'Verbos', 'Perguntas e negação', 'Pronomes', 'Substantivos e casos',
    'Como a palavra muda', 'Números e tempo', 'Frases úteis', 'Termos de gramática'];
  function gramaticaRyhmat() {
    const j = o => { const i = GRAMATICA_RYHMAT.indexOf(o); return i < 0 ? 99 : i; };
    const ryhmat = new Map();
    for (const h of (K.hakuosa || []).filter(x => !x.siirretty).sort((a, b) => j(a.osio) - j(b.osio))) {
      if (!ryhmat.has(h.osio)) ryhmat.set(h.osio, []);
      ryhmat.get(h.osio).push(h);
    }
    return ryhmat;
  }
  function rakennaValikko() {
    const v = $('#valikko');
    v.innerHTML = '';
    v.append(linkki('#inicio', 'Início'));
    // Sisällys (assets/sisallys.js): valmiit oppitunnit omalla paikallaan, tulevat himmeinä (#plano-<id>).
    const sisallys = K.sisallys || [];
    const valmis = id => K.oppitunnit.find(o => o.id === id);
    const kohdat = [...sisallys.map(s => valmis(s.id) || s), ...K.oppitunnit.filter(o => !sisallys.some(s => s.id === o.id))]
      .map((x, i) => [x, i]).sort((x, y) => (jarjestysNro(x[0].id) - jarjestysNro(y[0].id)) || (x[1] - y[1])).map(x => x[0]);   // T15.9
    v.append(valikkoryhma('Lições', 'oppitunnit', false, kohdat.map(o => {
      if (!valmis(o.id)) return el('li', { class: 'v-tulossa' }, el('a', { href: '#plano-' + o.id }, el('span', { class: 'v-nro' }, o.lyhyt || ''), el('span', {}, o.otsikko)));
      const osia = (o.osat || []).length > 1;
      // Oppitunnin nimi on otsake (omistaja 18.10.2026): muun oppitunnin nimi vie osaan A ja avaa alalinkit; avoimen
      // oppitunnin nimi sulkee tai avaa alalinkit (23.10.2026, alla). Osat A ja B näkyvät omina alalinkkeinään.
      const a = el('a', { href: '#' + o.id, class: osia ? 'v-oppitunti' : null }, el('span', { class: 'v-nro' }, o.lyhyt || ''), el('span', {}, o.otsikko),
        osia ? el('span', { class: 'v-nuoli', 'aria-hidden': 'true' }, '▸') : null);
      const li = el('li', { 'data-oppitunti': o.id }, a);
      /* Omistaja 23.10.2026: ”the first click on the lesson title minimizes the lesson submenu, and leaves the lesson
         page that was open (eg vocabulario) open on the page (instead of forcing you to part A of the lesson)”.
         Avoimen oppitunnin (li.aktiivinen: mikä tahansa sen sivu, myös Treino, Quiz, Parte B tai peli) nimi sulkee ja
         avaa alalinkit siirtymättä; muun oppitunnin nimi vie osaan A ja avaa sen alalinkit kuten ennen. Välilyönti
         toimii kuten Enter. aria-expanded seuraa samaa tilaa kuin rengasmerkki (paivitaValikko → oppitunninAria). */
      if (osia) {
        a.addEventListener('click', e => {
          if (!li.classList.contains('aktiivinen')) { li.classList.remove('v-kiinni'); return; }
          e.preventDefault();
          li.classList.toggle('v-kiinni');
          oppitunninAria(li);
        });
        a.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); a.click(); } });
      }
      const osaLinkit = osia ? o.osat.map((x, i) => [i ? `#${o.id}-${x.id}` : `#${o.id}`, `Parte ${x.id.toUpperCase()}`, true]) : [];
      // Treino vain, jos oppitunnilla on paketteja (oppitunti 0: ei Treeniä; omistaja 18.10.2026).
      const onTreeni = !!(window.Treeni && window.Treeni.oppitunnin(o.id).length);
      for (const [href, nimi, osa] of [...osaLinkit, [`#${o.id}-gramatica`, 'Gramática da lição'], ...(onTreeni ? [[`#treino-${o.id}`, 'Treino']] : []),
        [`#${o.id}-vocabulario`, 'Vocabulário'], [`#${o.id}-quiz`, 'Quiz']]) {
        li.append(el('a', { href, class: 'v-ala' + (osa ? ' v-osa' : '') }, el('span', { class: 'v-nro' }), el('span', {}, nimi)));
      }
      // Teemapelit (assets/pelit.js) Quizin jälkeen: ”Jogo: Kassapaniikki”.
      for (const pl of window.Pelit ? window.Pelit.oppitunnin(o.id) : []) li.append(el('a', { href: '#peli-' + pl.id, class: 'v-ala' }, el('span', { class: 'v-nro' }), el('span', {}, 'Jogo: ' + pl.nimi)));
      return li;
    })));
    // Treino samannäköisenä kuin ryhmien otsakkeet (Lições, Gramática…), mandariini säilyy (käyttäjä 17.10.2026).
    // Treino alavalikkona (omistaja 18.10.2026): yleissivu ja luokat, oletuksena kiinni kuten muut ryhmät.
    v.append(valikkoryhma('🍊 Treino', 'treeni', false, [linkki('#treino', 'Visão geral'),
      ...(window.Treeni ? window.Treeni.KATEGORIAT : []).map(k => linkki('#treino-' + k.id, `${k.ikoni} ${k.nimi}`))]));
    // Gramática alaryhmittäin (omistaja 18.10.2026): jokainen ryhmä avattava; yhden sivun ryhmä (Glossário) on suora
    // linkki hakemiston vieressä.
    const hakukohdat = [linkki('#gramatica', 'Índice e busca de formas')];
    const ryhmat = gramaticaRyhmat();
    for (const [osio, sivut] of ryhmat) if (sivut.length === 1) hakukohdat.push(linkki('#' + sivut[0].id, sivut[0].otsikko));
    const alaryhmat = [];
    for (const [osio, sivut] of ryhmat) if (sivut.length > 1) {
      alaryhmat.push(valikkoryhma(osio, 'hakuosa-' + norm(osio).replace(/[^a-z0-9]+/g, '-'), false, sivut.map(h => linkki('#' + h.id, h.otsikko)), true));
    }
    // Ensimmäisenä aina ”Abrir tudo / Fechar tudo” (omistaja 18.10.2026): avaa kaikki alaryhmät, jos jokin on kiinni,
    // muuten sulkee kaikki; tilat tallentuvat kuten yksitellen avattaessa.
    const kaikkiNappi = el('button', { type: 'button', class: 'v-kaikki' });
    const paivitaKaikki = () => { kaikkiNappi.textContent = alaryhmat.some(r => r.classList.contains('kiinni')) ? '⊞ Abrir tudo' : '⊟ Fechar tudo'; };
    kaikkiNappi.addEventListener('click', () => { const avaa = alaryhmat.some(r => r.classList.contains('kiinni')); alaryhmat.forEach(r => r.aseta(avaa)); paivitaKaikki(); });
    alaryhmat.forEach(r => r.querySelector('.v-alaotsake').addEventListener('click', paivitaKaikki));
    paivitaKaikki();
    v.append(valikkoryhma('Gramática', 'hakuosa', false, [el('li', { class: 'v-kaikki-rivi' }, kaikkiNappi), ...hakukohdat, ...alaryhmat]));
    v.__paivitaKaikki = paivitaKaikki;   // paivitaValikko avaa avoimen sivun alaryhmän
    v.append(valikkoryhma('1000 palavras', 'ydinsanat', false,
      [['100', 'Palavras 1–100'], ['300', 'Palavras 101–300'], ['500', 'Palavras 301–500'], ['1000', 'Palavras 501–1000'], ['fala', 'Língua falada']]
        .map(([t, nimi]) => linkki(`#nucleo-${t}`, nimi))));
    v.append(valikkoryhma('Vocabulário', 'sanasto', false, [linkki('#fi-pt', 'Finlandês–Português'), linkki('#pt-fi', 'Português–Finlandês')]));
  }

  function kytkin(nappi, avain, luokka) {
    let auki = muisti.lue(avain, false);
    const aseta = x => { auki = x; document.body.classList.toggle(luokka, x); nappi.setAttribute('aria-pressed', String(x)); muisti.kirjoita(avain, x); };
    nappi.addEventListener('click', () => aseta(!auki));
    aseta(auki);
  }
  function rakennaYlapalkki() {
    $('#sivun-toisto').append(ohjain(() => $$('#sisalto .s').filter(s => !s.closest('.valinta, [data-ei-sivulle]')).map(alkio),
      { aina: true, nimi: U.kuunteleKokoSivu, teksti: U.kokoSivu }));
    $('#pysayta').addEventListener('click', () => A.pysayta());
    // Dialogin käännös piilossa ensimmäisellä käynnillä (ensinIlmanKaannosta): Tradução näyttää ne. Jos Tradução on jo
    // päällä, ensimmäinen painallus vain näyttää dialogin käännökset (ei sammuta kytkintä).
    $('#kaannokset').addEventListener('click', e => {
      const piilossa = $$('#sisalto .kpl.kaannos-piilossa');
      if (!piilossa.length) return;
      piilossa.forEach(k => k.classList.remove('kaannos-piilossa'));
      if (document.body.classList.contains('kaannokset-auki')) e.stopImmediatePropagation();
    });
    kytkin($('#kaannokset'), 'traducoes', 'kaannokset-auki');
    const paneeli = $('#aanipaneeli');
    $('#aanet-nappi').addEventListener('click', () => { paneeli.hidden = !paneeli.hidden; $('#aanet-nappi').setAttribute('aria-expanded', String(!paneeli.hidden)); });
    $('#aanitteet').addEventListener('change', e => A.aseta('aanitteet', e.target.checked));
    for (const rooli of ['kertoja', 'nainen', 'mies']) $('#valitse-' + rooli).addEventListener('change', e => A.aseta(rooli, e.target.value));
    const NAYTE = { kertoja: 'Tervetuloa suomen kurssille!', nainen: 'Moi! Minä olen Maia.', mies: 'Moi! Mä oon Jay.' };
    $$('[data-testaa]').forEach(b => b.addEventListener('click', () => A.soita([{ teksti: NAYTE[b.dataset.testaa], tyyppi: b.dataset.testaa, el: null }])));
    A.kuuntele(paivitaAaniTila);
    A.kuuntele(paivitaAaniLuokka);
    paivitaMandariinit();
  }
  function kayttojarjestelma() {
    const u = navigator.userAgent;
    if (/Android/.test(u)) return 'android';
    if (/iPhone|iPad/.test(u)) return 'ios';
    if (/Mac OS X|Macintosh/.test(u)) return 'mac';
    if (/Linux/.test(u)) return 'linux';
    return 'win';
  }
  const ASENNUSOHJE = {
    win: 'Windows: Configurações → Hora e idioma → Fala → Gerenciar vozes → Adicionar vozes → Finlandês (Suomi). Depois reinicie o navegador.',
    mac: 'Mac: Ajustes do Sistema → Acessibilidade → Conteúdo Falado → Voz do Sistema → Gerenciar Vozes → Finlandês. Depois reinicie o navegador.',
    linux: 'Linux: instale speech-dispatcher e espeak-ng e reinicie o navegador.',
    android: 'Android: Configurações → Acessibilidade → Conversão de texto em voz → Serviços de fala do Google → Instalar dados de voz → Finlandês.',
    ios: 'iPhone e iPad: Ajustes → Acessibilidade → Conteúdo Falado → Vozes → Finlandês.'
  };
  function paivitaAaniTila() {
    const aanet = A.aanet();
    for (const rooli of ['kertoja', 'nainen', 'mies']) {
      const s = $('#valitse-' + rooli);
      if (!s) continue;
      const nyt = A.asetus(rooli);
      s.innerHTML = '';
      s.append(el('option', { value: '' }, 'Escolha automática'));
      for (const v of aanet) s.append(el('option', { value: v.voiceURI, selected: v.voiceURI === nyt }, v.name.replace(/^Microsoft\s+/, '')));
    }
    const ruutu = $('#aanitteet');
    if (ruutu) ruutu.checked = !!A.asetus('aanitteet');
    let viesti, taso;
    if (A.asetus('aanitteet') && A.leikkeita()) { viesti = 'As gravações prontas estão em uso: soam iguais em todos os aparelhos.'; taso = 'ok'; }
    else if (!A.tuettu) { viesti = 'As gravações finais ainda serão feitas, e este navegador não sabe ler em voz alta.'; taso = 'ei'; }
    else if (!aanet.length) { viesti = 'As gravações finais ainda serão feitas (protótipo). Para ouvir agora, instale uma voz finlandesa no aparelho. ' + (ASENNUSOHJE[kayttojarjestelma()] || ''); taso = 'ei'; }
    else { viesti = `Protótipo: as gravações finais ainda serão feitas. Por enquanto, voz finlandesa do navegador (${aanet.length}).`; taso = 'huom'; }
    $$('.aanitila').forEach(e => { e.textContent = viesti; e.dataset.taso = taso; });
  }
  const ilmoitusRuutu = el('div', { class: 'aani-ilmoitus', role: 'status', hidden: true });
  let ilmoitusAjastin = 0;
  document.addEventListener('aani-ilmoitus', e => {
    ilmoitusRuutu.textContent = 'Som: ' + e.detail;
    ilmoitusRuutu.hidden = false;
    clearTimeout(ilmoitusAjastin);
    ilmoitusAjastin = setTimeout(() => { ilmoitusRuutu.hidden = true; }, 7000);
  });
  document.addEventListener('aani-virhe', e => { $$('.aanitila').forEach(x => { x.textContent = e.detail; x.dataset.taso = 'ei'; }); });

  /* Äänitesti (Passon äänitesti, käyttäjä 17.10.2026): soittaa suomenkielisen näytteen ja kertoo selkokielellä, onko
     laitteessa suomen puheääni (äänitteitä ei vielä ole). Tekniset rivit (A.testi) avattavassa osassa vianetsintää varten. */
  async function aanitesti() {
    const tulos = $('#aanitesti-tulos');
    if (!tulos) return;
    tulos.textContent = 'Testando…';
    const synth = window.speechSynthesis;
    let aanet = synth ? synth.getVoices() : [];
    if (synth && !aanet.length) aanet = await new Promise(r => { const ok = () => r(synth.getVoices()); synth.onvoiceschanged = ok; setTimeout(ok, 1500); });
    const fi = aanet.filter(v => /^fi/i.test(v.lang));
    const nayte = $('#sisalto .osio .s[data-h]');
    if (nayte) { const nappi = nayte.querySelector('.ohj button'); if (nappi) nappi.click(); }
    tulos.textContent = '';
    tulos.append(el('p', {}, fi.length
      ? `✓ Seu aparelho tem voz em finlandês (${fi.map(v => v.name).join(', ')}). Se mesmo assim não ouviu nada, confira o volume e se o som do navegador está ligado.`
      : '✗ Não encontrei voz em finlandês neste aparelho, e o curso ainda não tem gravações. Instale uma voz finlandesa: Windows: Configurações → Hora e idioma → Fala; Android: Configurações → Idioma → Saída de texto para fala (Google, finlandês); iPhone/Mac: Ajustes → Acessibilidade → Conteúdo falado → Vozes → Suomi. Depois recarregue a página.'));
    const tekn = el('details', {}, el('summary', {}, 'Detalhes técnicos'));
    try { tekn.append(el('pre', {}, (await A.testi()).join('\n'))); } catch (e) { tekn.append(el('pre', {}, String(e))); }
    tulos.append(tekn);
  }

  function kaynnista() {
    // Virheraja (A6-07): yksi kaatuva vaihe ei estä valikkoa, yläpalkkia eikä reititystä.
    suojaa('kaynnista', () => {
      document.body.append(ilmoitusRuutu);
      document.addEventListener('click', e => { if (e.target.closest('#aanitesti')) aanitesti(); });
    });
    suojaa('Sanasto.valmis', () => {
      S.valmis();   // Kurssi.sanasto (äänitepaketit) ja viittausten tarkistus
      if (S.virheet.length) console.warn(`Tottakai: leksikossa ${S.virheet.length} virhettä: ` + S.virheet.join(' | '));
    });
    suojaa('jaaYdinsanat', jaaYdinsanat);
    suojaa('rakennaValikko', rakennaValikko);
    suojaa('rakennaYlapalkki', rakennaYlapalkki);
    window.addEventListener('hashchange', reititä);
    reititä();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', kaynnista);
  else kaynnista();
})();
