/* Tottakai: leksikon rekisteri (sopimus tottakai/sanasto/README.md, kohta 3; määrittely docs/arkisto/SANASTOJARJESTELMA.md).
   Sama koodi sivulla (app.js), kuplissa (kupla.js), tarkistuksissa ja ajureissa (Node, vm): ei DOMia, ei arvausta.
   - Tietueet: Sanasto.lisaa(lahde, [tietue, …]); virheelliset kentät kerätään listaan Sanasto.virheet (ei poikkeusta).
   - Paradigma vain tallennetuista tunnusmuodoista: verbit p1s-vartalosta, p3s, p3p, i3s, pass ja m; nominit
     Taivutus.nominilla (gen, part, ill) + mpart + m; nimetty kolmikko; numeraalit ja pronominit vain tallennetut solut.
   - Pintamuotohakemisto (pienin kirjaimin) → [{ id, solu }]; analyysi lauseyhteyden (ctx) mukaan; -ko/-kö.
   - Sananjakaja: sanat ja ilmaukset (kirjoitusasu tai lemmat), enintään 4 sanaa, ei välimerkin yli; kaava-ilmaus
     (tyyppi kaava: ole hyvä, ei kestä) vain kokonaisena lausahduksena (välimerkki tai tekstin raja molemmin puolin).
     Viivaan päättyvä sana (puhu-, tiedä-) on vartalo: sananjakaja ottaa viivan mukaan ja analyysi antaa solun vartalo.
   - Järjestys (jarjesta): kirjainkoko, rekisteri, lauseyhteys (kielto, subjekti), sitten perustaso: perusmuoto ennen
     taivutettua muotoa, taivutettu ennen käskyä, käsky ennen kieltomuotoa. Tasapeli (eri sanat samalla tasolla, ei
     data-l:ää eikä tietueen oletus-kenttää) näkyy funktiolla Sanasto.tasapeli(pinta, ctx); tarkistus H1/G3 kaatuu siihen.
   Kutsuja (sivu, tarkistus) päättää, mitä ohitetaan (.pala, [lang^=pt], .puhuja …): sananjakaja ei ohita mitään. */
window.Sanasto = (function () {
  'use strict';
  const KA = () => window.Kasitteet;
  const T = () => window.Taivutus;
  const MAKS_SANOJA = 4;
  // Sana: kirjaimet, sisäinen viiva tai heittomerkki (Aalto-yliopisto), kaksoispistetaivutus (RRC:llä yhtenä) ja
  // loppuviiva (puhu- = vartalo), kun viivan jälkeen ei tule kirjainta.
  const SANA = /[\p{L}\p{M}]+(?:[-'][\p{L}\p{M}]+)*(?::[\p{L}\p{M}]+)?(?:-(?![\p{L}\p{M}]))?/gu;
  const LIITTEET = /^(.+?)(ko|kö|kä|pa|pä|han|hän)$/;   // kieltosanan liitteet: etkö, enkä, eipä
  const KIELTOSANAT = new Set(['en', 'et', 'ei', 'emme', 'ette', 'eivät']);
  const KIELTOKASKY = new Set(['älä', 'älkää']);
  const SUBJEKTILUOKAT = new Set(['pronomini', 'henkilo', 'nimi', 'substantiivi', 'paikka', 'puhe']);
  const PAIKAT = new Set(['sisa', 'ulko', 'kieli', 'aika']);
  const KOLMIKKO_NIMET = ['missa', 'mista', 'mihin'];
  const NOMINISOLUT = { genetiivi: 'gen', partitiivi: 'part', illatiivi: 'ill', inessiivi: 'ines', elatiivi: 'ela',
    adessiivi: 'ade', ablatiivi: 'abl', allatiivi: 'all', essiivi: 'ess', translatiivi: 'transl', monikko: 'mon.nom' };
  // Laajennus 20.10.2026: Taivutus.verbi- ja Taivutus.monikko-solut, jotka kurssi opettaa (Kasitteet.OPETUS). Ei
  // potentiaalia, 3. infinitiiviä, abessiivia, komitatiivia eikä instruktiivia (vain Gramáticassa, ei kupliin).
  const VERBI_LAAJAT = ['imperf.1s', 'imperf.2s', 'imperf.1p', 'imperf.2p', 'imperf.3p',
    'kond.1s', 'kond.2s', 'kond.3s', 'kond.1p', 'kond.2p', 'kond.3p', 'imper.2p', 'imper.neg.2p', 'part.yks', 'part.mon', 'pass.kielto'];
  const MONIKKO_LAAJAT = ['mon.gen', 'mon.ines', 'mon.ela', 'mon.ill', 'mon.ade', 'mon.abl', 'mon.all', 'mon.ess', 'mon.transl'];

  const rekisteri = new Map();   // id → tietue
  const lahteet = new Map();     // id → lähde ('t01', 'gramatica' …)
  const virheet = [];
  let hakemisto = null;          // pinta (pienin) → [{ id, solu }]
  let fraasit = null;            // ensimmäinen sana (pienin) → [{ id, solu, sanat: [...] }]
  let lemmaFraasit = null;       // ensimmäinen lemma → [{ id, lemmat }]
  const paradigmat = new Map();

  /* ---------- apurit ---------- */
  const pieni = s => String(s || '').toLowerCase();
  const onIso = s => { const c = String(s || '').charAt(0); return c !== c.toLowerCase(); };
  const nimi = id => String(id).replace(/:[\p{L}\d]+$/u, '');   // kuusi:puu → kuusi
  const virhe = (lahde, id, viesti) => virheet.push(`${lahde}: ${id || '?'}: ${viesti}`);
  const sulkeetTasan = t => { let n = 0; for (const c of String(t)) { if (c === '(') n++; if (c === ')') n--; if (n < 0) return false; } return n === 0; };
  const hae = id => rekisteri.get(id) || null;

  /* ---------- tarkistus (kerätään, ei heitetä) ---------- */
  function tarkista(lahde, r) {
    const K = KA();
    if (!r || typeof r !== 'object') { virhe(lahde, null, 'tietue ei ole olio'); return false; }
    if (!r.id || typeof r.id !== 'string') { virhe(lahde, null, 'id puuttuu'); return false; }
    let ok = true;
    if (!K.LUOKAT[r.l] || r.l === 'kone') { virhe(lahde, r.id, `tuntematon sanalaji l: ${r.l}`); ok = false; }
    if (!Array.isArray(r.pt) || !r.pt.length || r.pt.some(p => typeof p !== 'string' || !p.trim() || /^(\?|todo)$/i.test(p.trim()))) {
      virhe(lahde, r.id, 'pt: lista merkityksiä puuttuu tai on täyte'); ok = false;
    }
    for (const t of [].concat(r.pt || [], r.huom || [], r.kaava || [])) if (typeof t === 'string' && !sulkeetTasan(t)) virhe(lahde, r.id, `sulkeet eivät ole tasan: ${t}`);
    const v = K.VAKIOMAARA[r.l];
    if (v) {
      for (const polku of v.pakolliset) {
        const [a, b] = polku.split('.');
        const arvo = b ? (r[a] || {})[b] : r[a];
        if (arvo === undefined || (b !== 'mpart' && arvo === null) || arvo === '') { virhe(lahde, r.id, `pakollinen kenttä puuttuu: ${polku}`); ok = false; }
      }
    }
    if (r.paikka !== undefined) {
      const p = r.paikka;
      const nimetty = p && typeof p === 'object' && KOLMIKKO_NIMET.every(k => typeof p[k] === 'string' && p[k]);
      if (!PAIKAT.has(p) && !nimetty) virhe(lahde, r.id, `paikka: tuntematon arvo ${JSON.stringify(p)}`);
    }
    if (r.l === 'verbi' && r.t) {
      if (!(r.t.tyyppi >= 1 && r.t.tyyppi <= 6)) virhe(lahde, r.id, `verbityyppi ei ole 1–6: ${r.t.tyyppi}`);
      if (typeof r.t.p1s === 'string' && !/n$/.test(r.t.p1s)) virhe(lahde, r.id, `p1s ei pääty -n: ${r.t.p1s}`);
    }
    if (r.l === 'adjektiivi' && r.vert !== undefined && r.vert !== false && !(Array.isArray(r.vert) && r.vert.length === 2)) virhe(lahde, r.id, 'vert: [komparatiivi, superlatiivi] tai false');
    for (const [muoto, solu] of Object.entries(r.m || {})) if (!K.solu(solu)) virhe(lahde, r.id, `m: tuntematon solu ${solu} (${muoto})`);
    if (r.l === 'kielto') for (const k of Object.keys(r.t || {})) if (!K.solu(/^(1s|2s|3s|1p|2p|3p)$/.test(k) ? 'prees.' + k : k)) virhe(lahde, r.id, `t: tuntematon solu ${k}`);
    if (r.l === 'pronomini') for (const k of Object.keys(r.t || {})) if (!K.solu(k)) virhe(lahde, r.id, `t: tuntematon solu ${k}`);
    const ilmanValeja = t => pieni(t).replace(/[-\s]/g, '');   // Aalto-yliopisto = Aalto + yliopisto
    if (r.yhd && (!Array.isArray(r.yhd) || ilmanValeja(r.yhd.join('')) !== ilmanValeja(nimi(r.id)))) virhe(lahde, r.id, `yhd: osat eivät muodosta sanaa (${r.yhd})`);
    for (const k of ['aa', 'ipa']) if (r[k] !== undefined && (typeof r[k] !== 'object' || Array.isArray(r[k]))) virhe(lahde, r.id, `${k}: { muoto: ohje }`);
    // Käsin kirjoitettu ääntämisohje (aa) → IPA on pakollinen samalle muodolle (laskettu IPA ei vastaa käsin kirjoitettua).
    if (r.aa && typeof r.aa === 'object') for (const muoto of Object.keys(r.aa)) if (!r.ipa || typeof r.ipa[muoto] !== 'string') virhe(lahde, r.id, `ipa puuttuu muodolle ${muoto} (aa on kirjoitettu käsin, joten ipa on pakollinen)`);
    if (r.oletus !== undefined && !(Array.isArray(r.oletus) && r.oletus.length && r.oletus.every(x => typeof x === 'string' && x === pieni(x)))) virhe(lahde, r.id, 'oletus: lista pienin kirjaimin kirjoitettuja muotoja ["teen"]');
    if (r.puuttuu !== undefined && !(Array.isArray(r.puuttuu) && r.puuttuu.every(x => K.solu(x)))) virhe(lahde, r.id, 'puuttuu: lista solutunnisteita ["imper.2s"]');
    if (r.johdos !== undefined && !(typeof r.johdos === 'string' && /^.+:[^:]+$/.test(r.johdos))) virhe(lahde, r.id, 'johdos: "tunniste:solu" (kolme:jarj)');
    if (r.aikasana !== undefined && r.aikasana !== true) virhe(lahde, r.id, 'aikasana: true tai kenttä pois');
    for (const o of Array.isArray(r.osat) ? r.osat : []) if (typeof o !== 'string' || !/^[^#]+(#[1-9]\d*)?$/.test(o)) virhe(lahde, r.id, `osat: ${o} (sana tai sana#merkitys)`);
    return ok;
  }
  // Viittaukset toisiin tietueisiin tarkistetaan, kun kaikki on ladattu.
  function tarkistaViittaukset() {
    for (const r of rekisteri.values()) {
      const lahde = lahteet.get(r.id);
      for (const l of r.lemmat || []) if (!rekisteri.has(l)) virhe(lahde, r.id, `lemmat: ${l} ei ole leksikossa`);
      if (r.l === 'puhe' && r.kirja && !tokenoi(r.kirja).every(t => analysoi(t.teksti).length)) virhe(lahde, r.id, `kirja: ${r.kirja} ei tunnistu`);
      // oletus: jokainen muoto on tämän sanan muoto ja todella monitulkintainen (muuten kenttä on turha).
      for (const m of Array.isArray(r.oletus) ? r.oletus : []) {
        const ids = new Set(raaka(m).map(x => x.id));
        if (!ids.has(r.id)) virhe(lahde, r.id, `oletus: ${m} ei ole tämän sanan muoto`);
        else if (ids.size < 2) virhe(lahde, r.id, `oletus: ${m} ei ole monitulkintainen (poista se)`);
      }
      // johdos: kolmas = kolme:jarj (järjestysluku), parempi = hyvä:komp. Kohteen solun muoto on tämä sana.
      if (typeof r.johdos === 'string') {
        const k = r.johdos.lastIndexOf(':');
        const kohde = r.johdos.slice(0, k), solu = r.johdos.slice(k + 1);
        if (!rekisteri.has(kohde)) virhe(lahde, r.id, `johdos: ${kohde} ei ole leksikossa`);
        else if (!muodot(kohde).some(x => x.solu === solu && pieni(x.muoto) === pieni(nimi(r.id)))) virhe(lahde, r.id, `johdos: ${kohde}:${solu} ei ole ${nimi(r.id)}`);
      }
      for (const o of osaLista(r)) {
        if (o.mi === null) continue;
        const a = (raaka(o.sana)[0] || raaka(o.sana.charAt(0).toUpperCase() + o.sana.slice(1))[0]);
        const kohde = a ? hae(a.id) : null;
        if (!kohde || !kohde.pt[o.mi]) virhe(lahde, r.id, `osat: ${o.sana}#${o.mi + 1}: sanalla ei ole merkitystä ${o.mi + 1}`);
      }
    }
  }

  function lisaa(lahde, tietueet) {
    for (const r of tietueet || []) {
      if (!tarkista(lahde, r)) { if (r && r.id && !rekisteri.has(r.id)) { /* virheellinen tietue jätetään pois */ } continue; }
      if (rekisteri.has(r.id)) { virhe(lahde, r.id, `tunniste kahdesti (ensimmäinen: ${lahteet.get(r.id)})`); continue; }
      rekisteri.set(r.id, r);
      lahteet.set(r.id, lahde);
    }
    hakemisto = null; fraasit = null; lemmaFraasit = null; paradigmat.clear();
  }

  /* ---------- vokaalisointu ja astevaihtelu ---------- */
  function harmonia(id) {
    const r = hae(id);
    if (r && r.yhd && r.yhd.length) return T().harmonia(r.yhd[r.yhd.length - 1]);
    const sanat = nimi(id).split(/[\s-]+/).filter(Boolean);
    return T().harmonia(sanat[sanat.length - 1] || String(id));
  }
  const VOK = 'aeiouyäöå';
  const onV = c => !!c && VOK.includes(c);
  // Vahva : heikko (sama luettelo kuin taivutus.js:n HEIKOKSI, lisäksi lk:lj ja rk:rj).
  const PARIT = [['kk', 'k'], ['pp', 'p'], ['tt', 't'], ['nk', 'ng'], ['mp', 'mm'], ['lt', 'll'], ['nt', 'nn'], ['rt', 'rr'],
    ['ht', 'hd'], ['lp', 'lv'], ['rp', 'rv'], ['lk', 'lj'], ['rk', 'rj'], ['lk', 'l'], ['rk', 'r'], ['hk', 'h'], ['p', 'v'],
    ['t', 'd'], ['k', 'j'], ['k', 'v'], ['k', '']];
  /* Vaihtuva konsonanttiryhmä kahden muodon välillä (a = oletettu vahva, b = heikko). Palauttaa { alku, vahva, heikko }
     tai null. Käänteinen suunta (sade : sateen) tunnistetaan, kun pari löytyy toisin päin. */
  function ero(a, b) {
    a = pieni(a); b = pieni(b);
    if (!a || !b || a === b) return null;
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    let s = i;
    while (s > 0 && !onV(a[s - 1])) s--;
    if (s === 0) return null;
    let ea = s; while (ea < a.length && !onV(a[ea])) ea++;
    let eb = s; while (eb < b.length && !onV(b[eb])) eb++;
    const ra = a.slice(s, ea), rb = b.slice(s, eb);
    if (!ra && !rb) return null;
    const sopii = (x, y, v, h) => x.endsWith(v) && y.endsWith(h) && x.slice(0, x.length - v.length) === y.slice(0, y.length - h.length);
    for (const [v, h] of PARIT) {
      if (sopii(ra, rb, v, h)) return { alku: a.slice(0, s) + ra.slice(0, ra.length - v.length), vahva: v, heikko: h };
      if (sopii(rb, ra, v, h)) return { alku: a.slice(0, s) + ra.slice(0, ra.length - h.length), vahva: v, heikko: h };
    }
    return null;
  }
  // Astevaihtelu tunnusmuodoista: verbi p3s ↔ p1s-vartalo (tyypit 1, 2, 5), muuten vartalo ↔ infinitiivi (3, 4, 6);
  // nomini perusmuoto ↔ genetiivin vartalo (myös käänteinen: sade → sateen).
  function vaihtelu(id) {
    const r = hae(id);
    if (!r || !r.t) return null;
    const t = r.t;
    if (r.l === 'verbi') {
      if (!t.p1s) return null;
      const vartalo = t.p1s.replace(/n$/, '');
      return ero(t.p3s, vartalo) || ero(vartalo, nimi(r.id));
    }
    if (['substantiivi', 'adjektiivi', 'numeraali', 'paikka', 'nimi', 'henkilo'].includes(r.l) && t.gen) {
      return ero(nimi(r.id), t.gen.replace(/n$/, ''));
    }
    return null;
  }

  /* ---------- paradigma: [{ solu, muoto }] tallennetuista muodoista ---------- */
  function muotolista(r) {
    const lista = [];
    const lisaaMuoto = (solu, muoto) => { if (muoto && !lista.some(x => x.solu === solu && x.muoto === muoto)) lista.push({ solu, muoto }); };
    const t = r.t || {};
    const perus = nimi(r.id);
    if (r.l === 'verbi' && t.p1s) {
      const v = t.p1s.replace(/n$/, '');
      // Kysymysliite vartalon sointuvokaalin mukaan (seison → seisonko), muuten sanan (teen → teenkö).
      const ko = (/[aouäöy]/.test(v) ? T().harmonia(v) : harmonia(r.id)) === 'a' ? 'ko' : 'kö';
      const prees = { '1s': t.p1s, '2s': v + 't', '3s': t.p3s, '1p': v + 'mme', '2p': v + 'tte', '3p': t.p3p };
      for (const k of KA().PERSOONAT) lisaaMuoto('prees.' + k, prees[k]);
      lisaaMuoto('kielto', v);
      lisaaMuoto('imper.2s', v);
      for (const k of KA().PERSOONAT) if (prees[k]) lisaaMuoto('kys.' + k, prees[k] + ko);
      lisaaMuoto('imperf.3s', t.i3s);
      lisaaMuoto('pass', t.pass);
      // Vartalo (Gramáticassa viivalla: puhu-, tiedä-, tule-): heikko = p1s ilman -n; vahva = p3s ilman pitkän
      // loppuvokaalin toista osaa (tekee → teke-, ottaa → otta-), jos se eroaa heikosta. Tyypin 2 hän-muoto (syö,
      // saa) on itse vartalo; olla (on) ei saa vahvaa vartaloa.
      lisaaMuoto('vartalo', v + '-');
      const p3 = String(t.p3s || '');
      const pitkaLoppu = p3.length > 2 && onV(p3.slice(-1)) && p3.slice(-1) === p3.slice(-2, -1);
      if (p3 && p3 !== v && pitkaLoppu && p3.slice(0, -1) !== v) lisaaMuoto('vartalo', p3.slice(0, -1) + '-');
      /* Laajennus (omistaja 20.10.2026 ”Extend engine”, oppitunnit 6–20): imperfekti persoonittain, konditionaali,
         imperatiivi (te), partisiipit Taivutus.verbillä samoista tunnusmuodoista. Säännöllinen johdos, ei arvausta:
         solu puuttuu, jos tunnusmuoto ei riitä. Tallennettu m-muoto lisätään myöhemmin; paradigmassa ensimmäinen voittaa. */
      const laaja = T().verbi({ inf: perus, tyyppi: t.tyyppi, p1s: t.p1s, p3s: t.p3s, i3s: t.i3s, pass: t.pass });
      for (const solu of VERBI_LAAJAT) lisaaMuoto(solu, laaja[solu]);
    } else if (r.l === 'kielto') {
      for (const [k, m] of Object.entries(t)) lisaaMuoto(/^(1s|2s|3s|1p|2p|3p)$/.test(k) ? 'prees.' + k : k, m);
    } else if (['substantiivi', 'adjektiivi', 'paikka', 'nimi', 'henkilo'].includes(r.l)) {
      lisaaMuoto('nom', perus);
      // Tallennetut solut ensin; lasketut (Taivutus.nomini genetiivistä ja illatiivista) vain soluihin, joita ei ole tallennettu.
      for (const k of ['gen', 'part', 'ill', 'all']) if (t[k]) lisaaMuoto(k, t[k]);
      if (t.gen) {
        // Lasketut solut vain, jos solua ei ole tallennettu t:hen eikä lisämuotona m:ään (HSL:nä, ei laskettua *HSL:änä).
        const mSolut = new Set(Object.values(r.m || {}));
        const n = T().nomini({ nom: perus, gen: t.gen, part: t.part, ill: t.ill, h: harmonia(r.id) });
        for (const [sija, solu] of Object.entries(NOMINISOLUT)) if (n[sija] && !t[solu] && !mSolut.has(solu)) lisaaMuoto(solu, n[sija]);
        // Omistusliitteet (AV-041; oppitunti 17, tunnistettaviksi): Taivutus.omistus samoista tunnusmuodoista, vain
        // yleisnimille (kirjani, kirjasi, kirjansa, kirjamme, kirjanne). Tallennettu m-solu voittaa.
        if (r.l === 'substantiivi' && T().omistus) {
          const o = T().omistus({ nom: perus, gen: t.gen, part: t.part, ill: t.ill, h: harmonia(r.id) });
          for (const [solu, muoto] of Object.entries(o || {})) if (!mSolut.has(solu)) lisaaMuoto(solu, muoto);
        }
      }
      if (t.mpart) lisaaMuoto('mon.part', t.mpart);
      // Monikon sijat (laajennus 20.10.2026; oppitunnit 17 ja 19): Taivutus.monikko monikon partitiivista, vain yleisnimille.
      if (t.mpart && t.gen && (r.l === 'substantiivi' || r.l === 'adjektiivi')) {
        const mSolut = new Set(Object.values(r.m || {}));
        // Nimetty kolmikko voittaa (töissä = työ · onde?, ei monikon inessiivi): sama muoto jätetään pois monikosta.
        const kolmikko = new Set(r.paikka && typeof r.paikka === 'object' ? KOLMIKKO_NIMET.map(k => pieni(r.paikka[k])) : []);
        const mon = T().monikko({ nom: perus, gen: t.gen, part: t.part, ill: t.ill, mpart: t.mpart, h: harmonia(r.id) });
        for (const solu of MONIKKO_LAAJAT) if (!mSolut.has(solu) && mon[solu] && !kolmikko.has(pieni(mon[solu]))) lisaaMuoto(solu, mon[solu]);
      }
      if (r.paikka && typeof r.paikka === 'object') for (const k of KOLMIKKO_NIMET) lisaaMuoto(k, r.paikka[k]);
      if (r.l === 'adjektiivi' && Array.isArray(r.vert)) { lisaaMuoto('komp', r.vert[0]); lisaaMuoto('sup', r.vert[1]); }
    } else if (r.l === 'numeraali') {
      lisaaMuoto('nom', perus);
      for (const k of ['gen', 'part', 'ill', 'jarj']) if (t[k]) lisaaMuoto(k, t[k]);
    } else if (r.l === 'pronomini') {
      lisaaMuoto('nom', perus);
      for (const [k, m] of Object.entries(t)) lisaaMuoto(k, m);
    } else if (r.l === 'paikkasana' && r.paikka && typeof r.paikka === 'object') {
      // Paikan adverbi (täällä, täältä, tänne): vain nimetty kolmikko, ei perusmuotoriviä.
      for (const k of KOLMIKKO_NIMET) lisaaMuoto(k, r.paikka[k]);
    }
    for (const [muoto, solu] of Object.entries(r.m || {})) lisaaMuoto(solu, muoto);
    // Puuttuvat muodot (voida: ei käskyä *voi!): solu pois paradigmasta, joten sitä ei tunnisteta eikä näytetä.
    const puuttuu = new Set(Array.isArray(r.puuttuu) ? r.puuttuu : []);
    return puuttuu.size ? lista.filter(x => !puuttuu.has(x.solu)) : lista;
  }
  /* Ilmauksen osat: ["hauska#2", "tavata"] → [{ sana: 'hauska', mi: 1 }, { sana: 'tavata', mi: null }]. Merkitysnumero
     (1 = ensimmäinen) valitsee osan merkityksen kuplan ”palavra por palavra” -rivillä (hauska#2 = agradável). */
  function osaLista(r) {
    return (r && Array.isArray(r.osat) ? r.osat : []).map(o => {
      const m = String(o).match(/^(.*?)(?:#(\d+))?$/);
      return { sana: m[1], mi: m[2] ? Number(m[2]) - 1 : null };
    });
  }
  const osaSanat = r => osaLista(r).map(o => o.sana);
  function muodot(id) {
    const r = hae(id);
    if (!r) return [];
    if (!paradigmat.has(id)) paradigmat.set(id, muotolista(r));
    return paradigmat.get(id);
  }
  // { solu: muoto }; sama solu kahdesti (m-lisämuoto): ensimmäinen voittaa, kaikki muodot: Sanasto.muodot(id).
  function paradigma(id) {
    const p = {};
    for (const { solu, muoto } of muodot(id)) if (!(solu in p)) p[solu] = muoto;
    return p;
  }

  /* ---------- hakemisto ---------- */
  function lisaaHakemistoon(pinta, kohde) {
    const k = pieni(pinta).replace(/\s+/g, ' ').trim();
    if (!k) return;
    if (k.includes(' ')) {
      const sanat = k.split(' ');
      if (!fraasit.has(sanat[0])) fraasit.set(sanat[0], []);
      const l = fraasit.get(sanat[0]);
      if (!l.some(x => x.id === kohde.id && x.solu === kohde.solu && x.sanat.join(' ') === k)) l.push(Object.assign({ sanat }, kohde));
      return;
    }
    if (!hakemisto.has(k)) hakemisto.set(k, []);
    const l = hakemisto.get(k);
    if (!l.some(x => x.id === kohde.id && x.solu === kohde.solu)) l.push(kohde);
  }
  function rakenna() {
    if (hakemisto) return;
    hakemisto = new Map(); fraasit = new Map(); lemmaFraasit = new Map();
    for (const r of rekisteri.values()) {
      const perus = nimi(r.id);
      // Paikan adverbin perusmuoto on itse kolmikon missä-muoto (täällä = täällä:missa).
      lisaaHakemistoon(perus, { id: r.id, solu: r.l === 'paikkasana' ? 'missa' : null });
      if (r.osat && pieni(osaSanat(r).join(' ')) !== pieni(perus)) lisaaHakemistoon(osaSanat(r).join(' '), { id: r.id, solu: null });
      for (const { solu, muoto } of muodot(r.id)) {
        if (solu === 'nom' && muoto === perus) continue;
        lisaaHakemistoon(muoto, { id: r.id, solu });
      }
      if (r.lemmat && r.lemmat.length > 1) {
        const eka = r.lemmat[0];
        if (!lemmaFraasit.has(eka)) lemmaFraasit.set(eka, []);
        lemmaFraasit.get(eka).push({ id: r.id, lemmat: r.lemmat });
      }
    }
  }

  /* ---------- analyysi ---------- */
  // Kirjainkokosääntö: pieni alkukirjain → vain pienellä alkavat tunnisteet; iso → erisnimet ensin, muut perässä.
  function kokosaanto(pinta, lista) {
    if (!onIso(pinta)) return lista.filter(x => !onIso(x.id));
    return lista.filter(x => onIso(x.id)).concat(lista.filter(x => !onIso(x.id)));
  }
  const raaka = k => { rakenna(); return (hakemisto.get(pieni(k)) || []).slice(); };
  // Onko sana subjekti (pronomini, nimi tai substantiivi perusmuodossa)? Kirjainkoko ei ratkaise (ctx.ed on pienin).
  function subjekti(sana) {
    return raaka(sana).some(x => {
      const r = hae(x.id);
      return r && SUBJEKTILUOKAT.has(r.l) && (x.solu === null || x.solu === 'nom');
    });
  }
  // data-l: 'sopia#2' (merkitys), 'tulla:imperf.3s' (solu), 'kuusi:puu' (tunniste), 'kuusi:puu#1'.
  function lueMerkinta(l) {
    if (!l) return null;
    let id = String(l), mi = null, solu = null;
    const h = id.match(/^(.*)#(\d+)$/);
    if (h) { id = h[1]; mi = Number(h[2]) - 1; }
    if (!rekisteri.has(id)) {
      const k = id.lastIndexOf(':');
      if (k > 0 && rekisteri.has(id.slice(0, k)) && KA().solu(id.slice(k + 1))) { solu = id.slice(k + 1); id = id.slice(0, k); }
    }
    return { id, solu, mi };
  }
  /* Kieltosana: en, et, ei, emme, ette, eivät, älä, älkää myös liitteen kanssa (etkö, eikö, enkä, eipä). */
  function kieltosana(w) {
    let s = pieni(w);
    for (let i = 0; i < 3; i++) {
      if (KIELTOSANAT.has(s) || KIELTOKASKY.has(s)) return s;
      const m = s.match(LIITTEET);
      if (!m) return null;
      s = m[1];
    }
    return null;
  }
  /* Onko sana kiellon alueella? ed = lauseen aiemmat sanat, lähin ensin. Kieltosana kahden edellisen joukossa
     (en aja, en minä aja, etkö sinä tule, älä puhu); ja/tai jatkaa kieltoa, kun sitä edeltävä sana on itse kiellon
     alueella oleva kieltomuoto (älä puhu ja aja → aja). */
  function kiellonAlueella(ed, syvyys = 0) {
    if (ed.slice(0, 2).some(w => kieltosana(w))) return true;
    if (syvyys < 4 && ed.length >= 2 && (ed[0] === 'ja' || ed[0] === 'tai') && raaka(ed[1]).some(x => x.solu === 'kielto'))
      return kiellonAlueella(ed.slice(2), syvyys + 1);
    return false;
  }
  /* Pisteet (pienempi = parempi). Perustaso ilman lauseyhteyttä: perusmuoto 0 < taivutettu muoto 1 < käsky 3 < kieltomuoto 4
     (tapa ennen tappaa-käskyä, tee = chá ennen tehdä-käskyä, kuulla-verbi ennen kuu-adessiivia). Lauseyhteys:
     kiellon alueella kieltomuoto voittaa kaiken (Älä tee!); edellä subjekti → verbin persoonamuoto ennen nominia
     (Maia tuli); muoto = perusmuoto = hän-muoto (tarkoittaa): subjektin jälkeen prees.3s. Kirjainkoko ja rekisteri
     ovat omia kerroksiaan; tunniste kaksoispisteellä (kuusi:puu) on samannäköisen sanan jälkeen. */
  function pisteet(x, pinta, ehto) {
    const r = hae(x.id);
    let p;
    if (x.solu === null || x.solu === 'nom') p = r && r.l === 'kielto' ? 1.5 : 0;   // ei = hän ei (prees.3s) ensin
    else if (x.solu === 'kielto') p = ehto.kielto ? -30 : 4;
    else if (x.solu === 'imper.2s') p = ehto.kielto ? 6 : 3;
    else p = 1;
    if (r && r.l === 'verbi') {
      if (x.solu === 'prees.3s' && pieni(pinta) === pieni(nimi(x.id))) p = ehto.subjekti ? -3 : 1;
      else if (/^(prees|imperf|kond)\./.test(x.solu || '') && ehto.subjekti) p = -2;
    }
    if (onIso(pinta) && onIso(x.id)) p -= 100;
    if (r && r.l === 'puhe') p += ehto.puhe ? -50 : 50;
    if (/:/.test(x.id)) p += 0.5;
    return p;
  }
  /* Järjestys ja tasapeli. Palauttaa { lista, tasapeli }: tasapeli = parhaat ehdokkaat (eri tunnisteet samoilla
     pisteillä), kun mikään sääntö, data-l tai tietueen oletus-kenttä ei ratkaise; muuten null. Tasapelissä järjestys on
     rekisteröintijärjestys, joka ei ole päätös: tarkistus kaatuu siihen (Sanasto.tasapeli). */
  function arvioi(lista, pinta, ctx) {
    const ed = (ctx.ed || []).map(pieni).filter(Boolean);
    const ehto = { kielto: kiellonAlueella(ed), subjekti: !!(ed.length && subjekti(ed[0])), puhe: ctx.rekisteri === 'puhe' };
    const k = pieni(pinta);
    const oletus = x => { const r = hae(x.id); return !!(r && Array.isArray(r.oletus) && r.oletus.includes(k)); };
    const pisteytetty = lista.map((x, i) => ({ x, i, p: pisteet(x, pinta, ehto) }));
    let tasapeli = null;
    if (pisteytetty.length > 1) {
      const paras = Math.min(...pisteytetty.map(o => o.p));
      const karki = pisteytetty.filter(o => o.p === paras);
      if (new Set(karki.map(o => o.x.id)).size > 1) {
        const omat = karki.filter(o => oletus(o.x));
        if (omat.length && new Set(omat.map(o => o.x.id)).size === 1) omat.forEach(o => { o.p -= 0.25; });
        else tasapeli = karki.map(o => ({ id: o.x.id, solu: o.x.solu }));
      }
    }
    return { lista: pisteytetty.sort((a, b) => a.p - b.p || a.i - b.i).map(o => o.x), tasapeli };
  }
  const jarjesta = (lista, pinta, ctx) => arvioi(lista, pinta, ctx).lista;

  /* Merkityssäännöt lauseyhteydestä (data-l voittaa aina): olla = estar (olla#2), kun paikka on lähellä:
     seuraavien kahden sanan joukossa (ctx.seur: Oletko sinä siellä?, Jay on kotona, Olen parkkipaikalla) tai heti edellä
     paikan adverbi (Missä Maia on?, Ulkona on pimeää). Paikka = paikan adverbi tai substantiivin/paikannimen inessiivi,
     adessiivi tai nimetty missä-muoto; pronominin adessiivi ei (Onko sinulla … = ter). */
  const PAIKKA_ADVERBIT = new Set(['täällä', 'siellä', 'tuolla', 'kotona', 'ulkona', 'töissä', 'missä', 'sisällä']);
  const PAIKKASOLUT = new Set(['ines', 'ade', 'missa', 'mon.ines']);
  function onPaikka(w) {
    if (PAIKKA_ADVERBIT.has(w)) return true;
    return raaka(w).some(x => { const r = hae(x.id); return PAIKKASOLUT.has(x.solu) && r && ['substantiivi', 'paikka', 'nimi'].includes(r.l); });
  }
  // Perfektin apuverbi (t19:n löydös 20.10.2026): olla, jota seuraa partisiippi kolmen sanan sisällä (Olen käynyt, Oletko
  // nähnyt, en ole käynyt) = merkitys 2. Partisiippi = muoto, joka ei ole oma tietue (väsynyt-adjektiivi ei laukaise).
  const onPartisiippi = w => !hae(w) && raaka(w).some(x => x.solu === 'part.yks' || x.solu === 'part.mon');
  const MERKITYSSAANNOT = [
    { id: 'olla', mi: 2, ehto: (ed, seur) => seur.slice(0, 3).some(onPartisiippi) },
    { id: 'olla', mi: 1, ehto: (ed, seur) => seur.slice(0, 2).some(onPaikka) || ed.slice(0, 2).some(w => PAIKKA_ADVERBIT.has(w)) }
  ];
  function merkitys(lista, ctx) {
    if (!lista.length) return lista;
    const ed = (ctx.ed || []).map(pieni).filter(Boolean), seur = (ctx.seur || []).map(pieni).filter(Boolean);
    const s = MERKITYSSAANNOT.find(x => x.id === lista[0].id && x.ehto(ed, seur));
    return s ? lista.map(x => x.id === s.id && x.mi === undefined ? Object.assign({}, x, { mi: s.mi }) : x) : lista;
  }
  /* Kaikki tulkinnat, paras ensin: [{ id, solu, mi?, liite? }]. pinta voi olla monisanainen (ilmaus). */
  // Ehdokkaat ilman järjestystä: [{ id, solu, liite?, osat? }].
  function ehdokkaat(teksti) {
    let lista;
    if (teksti.includes(' ')) return fraasi(teksti.split(' '));
    lista = kokosaanto(teksti, raaka(teksti));
    if (!lista.length) lista = liitteet(teksti);
    if (!lista.length && /-$/.test(teksti) && teksti.length > 1) {
      // Loppuviiva ilman vartaloanalyysia (metro- ja bussiasema): yhdyssanan alkuosa = perusmuoto.
      const alku = teksti.slice(0, -1);
      lista = kokosaanto(alku, raaka(alku)).filter(x => x.solu === null).map(x => Object.assign({}, x, { liite: '-' }));
    }
    if (!lista.length && teksti.includes(':')) {
      // Kaksoispistetaivutus (RRC:llä): perusmuoto ennen kaksoispistettä.
      const [alku, loppu] = teksti.split(':');
      lista = kokosaanto(alku, raaka(alku)).filter(x => x.solu === null).map(x => Object.assign({}, x, { liite: ':' + loppu }));
    }
    return lista;
  }
  /* Analyysi ja tasapeli yhdellä kertaa: { lista, tasapeli }. data-l ratkaisee aina (ei tasapeliä). */
  function tulkinnat(pinta, ctx) {
    ctx = ctx || {};
    rakenna();
    const teksti = String(pinta || '').replace(/\s+/g, ' ').trim();
    if (!teksti) return { lista: [], tasapeli: null };
    const merkinta = lueMerkinta(ctx.l);
    let lista = ehdokkaat(teksti);
    // ctx.alku === false (lauseen keskellä) ja iso alkukirjain: erisnimi, jos sellainen on (Maia asuu Suomessa → vain
    // Suomi, ei kieltä suomi ”também”-rivillä). Lauseen alussa ja ilman lauseyhteyttä molemmat (erisnimi ensin).
    if (ctx.alku === false && onIso(teksti) && lista.some(x => onIso(x.id))) lista = lista.filter(x => onIso(x.id));
    if (merkinta && rekisteri.has(merkinta.id)) {
      let omat = lista.filter(x => x.id === merkinta.id && (!merkinta.solu || x.solu === merkinta.solu));
      if (!omat.length) omat = [{ id: merkinta.id, solu: merkinta.solu }];
      omat = omat.map(x => merkinta.mi !== null ? Object.assign({}, x, { mi: merkinta.mi }) : x);
      return { lista: omat.concat(lista.filter(x => !omat.some(o => o.id === x.id && o.solu === x.solu))), tasapeli: null };
    }
    const tulos = arvioi(lista, teksti, ctx);
    tulos.lista = merkitys(tulos.lista, ctx);
    return tulos;
  }
  function analysoi(pinta, ctx) { return tulkinnat(pinta, ctx).lista; }
  /* Tasapeli (tarkistukset H1/G3): null, jos paras tulkinta on päätetty (sääntö, data-l tai oletus), muuten parhaat
     ehdokkaat [{ id, solu }] (vähintään kaksi eri tunnistetta). */
  function tasapeli(pinta, ctx) { return tulkinnat(pinta, ctx).tasapeli; }
  /* Homografikartta ilman lauseyhteyttä: jokainen hakemiston muoto (pienellä ja isolla alkukirjaimella), jolla on
     tasapeli → [{ pinta, ehdokkaat }]. Ratkaisu: tietueen oletus-kenttä (["teen"]) tai data-l tekstissä. */
  function homografit() {
    rakenna();
    const ulos = [];
    for (const k of hakemisto.keys()) {
      for (const pinta of new Set([k, k.charAt(0).toUpperCase() + k.slice(1)])) {
        const t = tulkinnat(pinta, {}).tasapeli;
        if (t && !ulos.some(x => x.pinta.toLowerCase() === k && JSON.stringify(x.ehdokkaat) === JSON.stringify(t))) ulos.push({ pinta, ehdokkaat: t });
      }
    }
    return ulos;
  }
  // -ko/-kö irrotetaan vain, jos suoraa analyysia ei ole ja vokaalisointu täsmää (nytkö, Helsingissäkö; ei taloko*).
  function liitteet(teksti) {
    const m = teksti.match(/^(.+?)(ko|kö)$/i);
    if (!m || m[1].length < 2) return [];
    if (T().harmonia(m[1]) !== (pieni(m[2]) === 'ko' ? 'a' : 'ä')) return [];
    return kokosaanto(m[1], raaka(m[1])).filter(x => !String(x.solu || '').startsWith('kys.'))
      .map(x => Object.assign({}, x, { liite: pieni(m[2]) }));
  }
  // Monisanainen pinta: kirjoitusasu (ilmaukset, monisanaiset nimet ja niiden muodot) tai lemmat peräkkäin.
  function fraasi(sanat) {
    rakenna();
    const k = sanat.map(pieni);
    const tulos = (fraasit.get(k[0]) || []).filter(x => x.sanat.length === k.length && x.sanat.every((w, i) => w === k[i]))
      .map(x => ({ id: x.id, solu: x.solu }));
    const alkuIso = onIso(sanat[0]);
    const suodatettu = tulos.filter(x => alkuIso || !onIso(x.id));
    if (suodatettu.length) return suodatettu;
    // Lemmat: jokainen sana on lemman muoto (nousevat ulos → nousta + ulos).
    const ekat = raaka(sanat[0]);
    for (const e of ekat) {
      for (const f of lemmaFraasit.get(e.id) || []) {
        if (f.lemmat.length !== sanat.length) continue;
        const osat = [{ id: e.id, solu: e.solu }];
        let ok = true;
        for (let i = 1; i < sanat.length && ok; i++) {
          const o = raaka(sanat[i]).find(x => x.id === f.lemmat[i]);
          if (o) osat.push({ id: o.id, solu: o.solu }); else ok = false;
        }
        if (ok) return [{ id: f.id, solu: null, osat }];
      }
    }
    return [];
  }

  /* ---------- sananjakaja ---------- */
  // [{ teksti, alku, loppu, avain, tunnettu }]; ilmaukset ensin (pisin ensin), sitten sanat.
  // Kaava-ilmaus (tyyppi kaava) vain kokonaisena lausahduksena: ennen ja jälkeen tekstin raja tai välimerkki
  // (Ole hyvä! · Kiitos! – Ei kestä. · Hauska tavata, Jay!), ei lauseen keskellä (En ole hyvä opettaja, Se ei kestä kauan).
  const onKaava = x => { const r = hae(x.id); return !!(r && r.l === 'ilmaus' && r.tyyppi === 'kaava'); };
  function tokenoi(teksti) {
    teksti = String(teksti || '');
    const sanat = [];
    for (const m of teksti.matchAll(SANA)) sanat.push({ teksti: m[0], alku: m.index, loppu: m.index + m[0].length });
    const raja = (a, b) => /[^\s]/.test(teksti.slice(a, b));   // väli sisältää välimerkin
    const tulos = [];
    let i = 0;
    while (i < sanat.length) {
      let osuma = null;
      for (let n = Math.min(MAKS_SANOJA, sanat.length - i); n >= 2 && !osuma; n--) {
        const valit = [];
        for (let j = i; j < i + n - 1; j++) valit.push(teksti.slice(sanat[j].loppu, sanat[j + 1].alku));
        if (!valit.every(v => /^\s+$/.test(v))) continue;   // ei välimerkin yli
        const ryhma = sanat.slice(i, i + n);
        let loydetyt = fraasi(ryhma.map(s => s.teksti));
        if (loydetyt.some(onKaava)) {
          const alussa = i === 0 || raja(sanat[i - 1].loppu, ryhma[0].alku);
          const lopussa = i + n === sanat.length || raja(ryhma[n - 1].loppu, sanat[i + n].alku);
          if (!(alussa && lopussa)) loydetyt = loydetyt.filter(x => !onKaava(x));
        }
        if (loydetyt.length) osuma = { n, alku: ryhma[0].alku, loppu: ryhma[n - 1].loppu };
      }
      if (osuma) {
        const t = teksti.slice(osuma.alku, osuma.loppu);
        tulos.push({ teksti: t, alku: osuma.alku, loppu: osuma.loppu, avain: pieni(t).replace(/\s+/g, ' '), tunnettu: true });
        i += osuma.n;
      } else {
        const s = sanat[i];
        tulos.push({ teksti: s.teksti, alku: s.alku, loppu: s.loppu, avain: pieni(s.teksti), tunnettu: !!(raaka(s.teksti).length || analysoi(s.teksti).length || ydin(s.teksti)) });
        i += 1;
      }
    }
    return tulos;
  }

  /* ---------- ydinsanat ilman tietuetta: vain merkitys (luokka kone) ---------- */
  let ydinKartta = null;
  function ydin(pinta) {
    if (!ydinKartta) {
      ydinKartta = new Map();
      const y = (window.Kurssi && window.Kurssi.ydin) || { sanat: [] };
      for (const [s, pt, , sl] of y.sanat || []) if (!ydinKartta.has(s)) ydinKartta.set(s, { pt, sl: sl || null });
    }
    const k = pieni(pinta);
    if (!ydinKartta.has(k)) return null;
    // Leksikon tietue voittaa: ydinsana saa koneen merkityksen vain, jos sitä ei ole leksikossa millään kirjoitusasulla.
    if (raaka(k).some(x => x.solu === null)) return null;
    const y = ydinKartta.get(k);
    return { pt: y.pt, l: 'kone', sl: y.sl };   // sl = ydinlistan sanaluokka (v, s, a, adv …; Kasitteet.YDINLUOKAT)
  }
  /* Ydinsanalistan otsikkosanat, jotka eivät analysoidu itsekseen eivätkä koneen sanaksi (sopimus: ydinsana = oma
     tietue tai kone): [{ sana, analyysi }]. Tyhjä lista = kunnossa. */
  function ydinVirheet() {
    const y = (window.Kurssi && window.Kurssi.ydin) || { sanat: [] };
    const ulos = [];
    for (const [s] of y.sanat || []) {
      const a = analysoi(s, {})[0];
      // Paikan adverbin kolmikko (sinne = siellä:mihin) on ydinlistan oma otsikkosana mutta oikea analyysi.
      const pa = a && hae(a.id);
      if (pa && pa.l === 'paikkasana' && KOLMIKKO_NIMET.includes(a.solu)) continue;
      if (a && pieni(nimi(a.id)) !== pieni(s)) ulos.push({ sana: s, analyysi: a.id + (a.solu ? ':' + a.solu : '') });
    }
    return ulos;
  }

  /* ---------- valmis: Kurssi.sanasto (äänitepaketit, assets/aani.js) ja viittausten tarkistus ---------- */
  let valmisJo = false;
  function valmis() {
    rakenna();
    if (valmisJo) return;
    valmisJo = true;
    tarkistaViittaukset();
    const K = window.Kurssi;
    if (!K) return;
    K.sanasto = K.sanasto || {};
    const tayta = (pinta, r) => {
      const k = pieni(pinta).replace(/[.,!?;:"“”«»()¿¡…–—]/g, '').replace(/\s+/g, ' ').trim();
      if (!k || K.sanasto[k]) return;
      const lahde = lahteet.get(r.id);
      const oppitunti = (K.oppitunnit || []).some(o => o.id === r.o);
      K.sanasto[k] = oppitunti ? { pt: r.pt[0], oppitunti: r.o, id: r.id } : { pt: r.pt[0], oppitunti: null, lahde: lahde || undefined, id: r.id };
    };
    for (const r of rekisteri.values()) {
      tayta(nimi(r.id), r);
      for (const { muoto, solu } of muodot(r.id)) if (solu !== 'vartalo') tayta(muoto, r);
    }
  }

  return {
    lisaa, hae, kaikki: () => [...rekisteri.values()], lahde: id => lahteet.get(id) || null, virheet,
    paradigma, muodot, analysoi, tokenoi, ydin, harmonia, vaihtelu, ero, nimi, valmis,
    // tasapeli ja homografit (tarkistukset H1, G3), ydinsanojen sääntö, ilmauksen osat merkitysnumeroineen, kieltosana
    tasapeli, homografit, ydinVirheet, osat: id => osaLista(hae(id)), kieltosana,
    // tarkistuksille ja ajureille: hakemiston koko ja raakahaku ilman lauseyhteyttä
    hakemisto: () => { rakenna(); return hakemisto; }, raaka,
    // laajennuksen solut (20.10.2026): kupla.js jättää ne pois ”também”-riviltä ennen kuin oppitunti opettaa ne
    LAAJAT: new Set(VERBI_LAAJAT.concat(MONIKKO_LAAJAT))
  };
})();
