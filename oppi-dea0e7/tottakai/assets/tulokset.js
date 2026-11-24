/* Tottakai: tulosloki ja kertausjono (auditointi 5, A5-M7; docs/RAKENNE.md §3 ”Päivän kertaus”, PELILLISTAMINEN.md §1).
   Ei palvelinta: kaikki selaimen localStorageen (try/catch; jos tallennus ei toimi, muisti vain tämän sivun ajan).
   Jokainen vastaus (visa, Treeni, oppitunnin tehtävä) kirjataan: kirjaa({ lahde, oppitunti, avain, teksti, oikein }).
   Kertausjono on Leitnerin laatikot 1–5: väärä vastaus → laatikko 1 (kertaus heti ja seuraavana päivänä), oikea →
   seuraava laatikko (väli 1, 2, 4, 8 päivää), oikein laatikossa 5 → poistuu jonosta. ★-merkityt kielioppikortit
   (app.js kirjoittaa avaimen tottakai-tahdet: { "t05:kortti": true }) ovat jonossa aina, kunnes tähti poistetaan.
   API:
     Tulokset.kirjaa({ lahde: 'visa'|'treeni'|'tehtava'|'peli'|'pomo', oppitunti, avain, teksti, oikein, reitti? }) → kohde | null
     Tulokset.jono(n = 10) → [{ avain, teksti, oppitunti, reitti, lahde, laatikko, tahti }]   (erääntyneet + ★)
     Tulokset.merkitse(reitti, otsikko?) · Tulokset.viimeisin() → { reitti, otsikko, oppitunti, aika } | null
     Tulokset.edistys() → pisin oppitunti, jolla oppija on käynyt (kurssin järjestyksessä) | null
     Tulokset.tahdet() → [{ avain, oppitunti, kortti, otsikko, treeni: [paketti], reitti }]
     Tulokset.loki(n?) → viimeiset kirjaukset (uusin viimeisenä) · Tulokset.putki() → peräkkäiset päivät, joina vastattu
   Kirjaus lähettää documentille tapahtuman 'tottakai:tulos' (detail = kirjaus), jotta etusivun ”Hoje” voi päivittyä. */
window.Tulokset = (function () {
  'use strict';
  const ETULIITE = 'tottakai-';
  const LOKI_MAX = 400;          // kirjauksia muistissa (vanhimmat pois)
  const PAIVAT_MAX = 120;        // päivät, joina vastattu (putki; 100 päivän virstanpylväs tarvitsee yli 100, A6-16)
  const PAIVA = 24 * 3600 * 1000;
  const VALI = [0, 0, 1, 2, 4, 8]; // laatikon n seuraava kertaus n päivän päästä (laatikko 1: heti)
  const LAATIKKO_MAX = 5;
  const varalla = {};            // muisti, jos localStorage ei toimi (yksityinen ikkuna, file:// eräissä selaimissa)

  function lue(k, oletus) {
    try {
      const v = localStorage.getItem(ETULIITE + k);
      if (v !== null) return JSON.parse(v);
    } catch (e) { /* varalla */ }
    return Object.prototype.hasOwnProperty.call(varalla, k) ? JSON.parse(varalla[k]) : oletus;
  }
  function kirjoita(k, v) {
    const s = JSON.stringify(v);
    varalla[k] = s;
    try { localStorage.setItem(ETULIITE + k, s); } catch (e) { /* vain muistissa */ }
  }
  const nyt = () => Date.now();
  const paiva = t => { const d = new Date(t); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  // Seuraava kertaus: paikallisen päivän alku + n päivää (laatikko 2 = huomenna, vaikka vastaus olisi illalla).
  const eraantyy = (t, paivia) => { if (!paivia) return t; const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime() + paivia * PAIVA; };

  /* Oppitunnin järjestysluku: Kasitteet.jarjestys (T15.9: paikka profiili.js:n jarjestys-listassa). Ilman Kasitteita vanha
     laskutapa t00 = 0, t05 = 5, k01 = 5.5, t06 = 6 …, jossa järjestys on sama. */
  function jarjestys(id) {
    if (window.Kasitteet && typeof window.Kasitteet.jarjestys === 'function') return window.Kasitteet.jarjestys(id);
    const m = String(id || '').match(/^([tk])(\d\d)/);
    return m ? (m[1] === 't' ? Number(m[2]) : Number(m[2]) * 5 + 0.5) : null;
  }
  const oppitunnista = reitti => { const m = String(reitti || '').replace(/^#/, '').match(/^(?:treino-)?([tk]\d\d)/); return m ? m[1] : null; };
  const oletusReitti = (lahde, oppitunti, avain) => {
    if (lahde === 'visa' && oppitunti) return `#${oppitunti}-quiz`;
    if (lahde === 'treeni') { const pk = String(avain || '').split(':')[0]; return pk ? `#treino-${pk}` : oppitunti ? `#treino-${oppitunti}` : '#treino'; }
    return oppitunti ? `#${oppitunti}` : '';
  };

  /* ---------- kirjaus ja laatikot ---------- */
  // Kertaluonteinen siivous (T09, 19.10.2026): vanhan muotoiset harjoitusavaimet (tehtava:tNN:tyyppi:vastaus, ilman yksikön
  // tunnistetta) eivät enää vastaa mitään, joten ne jäisivät Hoje-jonoon ikuisesti; poistetaan laatikoista.
  try {
    const l = lue('tulokset-laatikot', {}) || {};
    let n = 0;
    for (const k of Object.keys(l)) if (/^tehtava:[tk]\d\d:(valinta|aukko|sanelu):[^:]+$/.test(k)) { delete l[k]; n++; }
    if (n) kirjoita('tulokset-laatikot', l);
  } catch (e) { /* ei muistia */ }

  function kirjaa(t) {
    if (!t || !t.avain) return null;
    const aika = nyt();
    const lahde = t.lahde || 'tehtava';
    const oikein = !!t.oikein;
    const avain = `${lahde}:${t.avain}`;
    const rivi = { lahde, oppitunti: t.oppitunti || null, avain: String(t.avain), teksti: String(t.teksti || t.avain), oikein, aika };
    const loki = lue('tulokset-loki', []);
    loki.push(rivi);
    if (loki.length > LOKI_MAX) loki.splice(0, loki.length - LOKI_MAX);
    kirjoita('tulokset-loki', loki);
    const paivat = lue('tulokset-paivat', []);
    const tanaan = paiva(aika);
    if (paivat[paivat.length - 1] !== tanaan) { paivat.push(tanaan); if (paivat.length > PAIVAT_MAX) paivat.splice(0, paivat.length - PAIVAT_MAX); kirjoita('tulokset-paivat', paivat); }
    // Leitner: vain kerran väärin vastattu kohde tulee laatikoihin; oikea vastaus siirtää eteenpäin.
    const laatikot = lue('tulokset-laatikot', {});
    let kohde = laatikot[avain] || null;
    if (!oikein) {
      kohde = Object.assign(kohde || { vaarin: 0, oikein: 0 }, { avain, lahde, oppitunti: rivi.oppitunti, teksti: rivi.teksti,
        reitti: t.reitti || (kohde && kohde.reitti) || oletusReitti(lahde, rivi.oppitunti, t.avain), laatikko: 1, seuraava: aika, viimeksi: aika });
      kohde.vaarin++;
      laatikot[avain] = kohde;
    } else if (kohde) {
      kohde.oikein++;
      kohde.viimeksi = aika;
      if (kohde.laatikko >= LAATIKKO_MAX) { delete laatikot[avain]; kohde = null; }
      else { kohde.laatikko++; kohde.seuraava = eraantyy(aika, VALI[kohde.laatikko]); }
    }
    kirjoita('tulokset-laatikot', laatikot);
    try { document.dispatchEvent(new CustomEvent('tottakai:tulos', { detail: rivi })); } catch (e) { /* ei DOMia */ }
    return kohde ? Object.assign({}, kohde) : null;
  }

  /* ---------- ★-kortit ---------- */
  function tahdet() {
    const t = lue('tahdet', {});
    const oppitunnit = (window.Kurssi && window.Kurssi.oppitunnit) || [];
    const ulos = [];
    for (const avain of Object.keys(t || {})) {
      if (!t[avain]) continue;
      const k = avain.indexOf(':');
      const oppitunti = avain.slice(0, k), kortti = avain.slice(k + 1);
      const o = oppitunnit.find(x => x.id === oppitunti);
      const kk = o && (o.kielioppi || []).find(x => x.id === kortti);
      if (!kk) continue;   // kortti poistunut tai oppitunti ei ladattu
      ulos.push({ avain, oppitunti, kortti, otsikko: kk.otsikko, treeni: kk.treeni ? [].concat(kk.treeni) : [], reitti: `#${oppitunti}-gramatica` });
    }
    return ulos.sort((a, b) => (jarjestys(a.oppitunti) - jarjestys(b.oppitunti)) || 0);
  }

  /* ---------- kertausjono ---------- */
  function jono(n) {
    n = n === undefined ? 10 : n;
    const aika = nyt();
    const laatikot = lue('tulokset-laatikot', {});
    const virheet = Object.values(laatikot).filter(x => x.seuraava <= aika)
      .sort((a, b) => (a.laatikko - b.laatikko) || (a.seuraava - b.seuraava))
      .map(x => ({ avain: x.avain, teksti: x.teksti, oppitunti: x.oppitunti, reitti: x.reitti, lahde: x.lahde, laatikko: x.laatikko, tahti: false }));
    // ★-kortti → sen Treeni-paketti (ensimmäinen linkitetty; muuten oppitunnin Treeni), muuten kortti itse.
    const TR = window.Treeni;
    const tahti = tahdet().map(x => {
      const pk = x.treeni.map(id => TR && TR.hae(id)).find(Boolean);
      const reitti = pk ? `#treino-${pk.id}` : (TR && TR.oppitunnin(x.oppitunti).length ? `#treino-${x.oppitunti}` : x.reitti);
      return { avain: 'tahti:' + x.avain, teksti: x.otsikko, oppitunti: x.oppitunti, reitti, lahde: 'tahti', laatikko: 0, tahti: true };
    });
    // Vuorotellen virhe ja ★, jotta kumpikaan ei peitä toista; ensin virheet (ne ovat tuoreimpia).
    const ulos = [];
    for (let i = 0; ulos.length < n && (i < virheet.length || i < tahti.length); i++) {
      if (virheet[i]) ulos.push(virheet[i]);
      if (tahti[i] && ulos.length < n) ulos.push(tahti[i]);
    }
    return ulos;
  }

  /* ---------- ”jatka siitä, mihin jäit” ---------- */
  function merkitse(reitti, otsikko) {
    reitti = String(reitti || '');
    if (!reitti || reitti === '#') return;
    if (reitti[0] !== '#') reitti = '#' + reitti;
    const oppitunti = oppitunnista(reitti);
    kirjoita('tulokset-reitti', { reitti, otsikko: otsikko || null, oppitunti, aika: nyt() });
    if (oppitunti) {
      const vanha = lue('tulokset-edistys', null);
      if (!vanha || jarjestys(oppitunti) > jarjestys(vanha)) kirjoita('tulokset-edistys', oppitunti);
    }
  }
  const viimeisin = () => lue('tulokset-reitti', null);
  const edistys = () => lue('tulokset-edistys', null);

  function loki(n) { const l = lue('tulokset-loki', []); return n ? l.slice(-n) : l; }
  function putki() {
    const paivat = lue('tulokset-paivat', []);
    if (!paivat.length) return 0;
    let p = 0;
    // Askel kalenteripäivittäin (setDate), ei 24 tunnin erin: kesäajan vaihto ei katkaise putkea (A6-16).
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    if (paivat[paivat.length - 1] !== paiva(d.getTime())) d.setDate(d.getDate() - 1);   // tänään ei vielä vastattu: putki eiliseen asti
    for (let i = paivat.length - 1; i >= 0; i--, d.setDate(d.getDate() - 1)) { if (paivat[i] === paiva(d.getTime())) p++; else break; }
    return p;
  }

  /* Leitnerin laatikot kopioina: [{ avain: 'lahde:avain', lahde, oppitunti, teksti, laatikko, seuraava, viimeksi, vaarin,
     oikein, reitti }] (raportti_treeni: Revisão näkee myös virheet, jotka ovat pudonneet lokin LOKI_MAX riviltä). */
  const laatikot = () => Object.values(lue('tulokset-laatikot', {}) || {}).filter(x => x && x.avain).map(x => Object.assign({}, x));

  return { kirjaa, jono, merkitse, viimeisin, edistys, tahdet, loki, putki, jarjestys, laatikot };
})();
