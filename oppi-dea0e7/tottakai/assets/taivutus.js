/* Tottakai: suomen taivutuskone ja ääntämisohje (docs/RAKENNE.md, Taivutuskone; sopimus tottakai/sanasto/README.md).
   AJON AIKANA sivu käyttää vain tavutusta, ääntämisohjetta, IPA:a, vokaalisointua ja nominin sijoja tallennetuista
   tunnusmuodoista (nomini). Verbien paradigmat tulevat leksikon tunnusmuodoista (assets/sanasto.js): tyypin ja
   astevaihtelun arvaavat funktiot (tyyppi, vartalot, preesens, heikko, vahva, tunnista) ovat vain kehitystyökaluja ja
   testejä varten (tools/testaa_taivutus.js, tunnusmuotojen vertailu), eikä sivu kutsu niitä.
   - Verbit: verbityyppi 1–6 infinitiivistä (tai sanaston kentästä tyyppi), astevaihtelu (vahva ↔ heikko), preesens
     myönteinen, kielteinen ja kysyvä, passiivi (puhekielen me-muoto: me puhutaan) ja puhekielen muodot.
     Poikkeukset: EPASAANNOLLISET (olla, nähdä, tehdä …) ja sanaston kentät vahva / heikko.
   - Nominit: tunnusmuodoista (nominatiivi, genetiivi, partitiivi, illatiivi) johdetaan yksikön sijat.
   - Kotus-sanatyypit (kotus, kotusVerbi, sanatyyppi) ja omistusliitteet (omistus, omistusLauseet) tunnusmuodoista
     (AV-041, 23.10.2026): sanasivu voi kutsua niitä ajon aikana, koska ne lukevat vain tallennettuja muotoja.
   - Käänteinen haku: taivutettu tai puhekielinen muoto → perusmuoto ja selitys (sanakuplat, Hakuosan haku).
   - Ääntämisohje ja IPA kirjoitusasusta: suomi kirjoitetaan lähes niin kuin äännetään, joten tavutus ja pituudet saadaan
     säännöillä (paino aina ensimmäisellä tavulla).
   Käyttöliittymän kieli on portugali (selitykset oppijalle). */
(function () {
  'use strict';
  const V = 'aeiouyäö';
  const onV = c => !!c && V.includes(c);
  const DIFT = new Set(['ai', 'ei', 'oi', 'ui', 'yi', 'äi', 'öi', 'au', 'eu', 'iu', 'ou', 'ey', 'äy', 'öy']);
  // ie, uo, yö ovat diftongeja vain (yhdyssanan osan) ensimmäisessä tavussa: SUO-mi, mutta ki-vi-en; Ota|niemi osina.
  const DIFT_ALKU = new Set(['ie', 'uo', 'yö']);

  /* ---------- vokaalisointu ---------- */
  function harmonia(sana) {
    // Yhdyssanassa ratkaisee viimeinen osa; yksinkertaistus: viimeinen takavokaali tai etuvokaali voittaa.
    const s = sana.toLowerCase();
    for (let i = s.length - 1; i >= 0; i--) {
      if ('aou'.includes(s[i])) return 'a';
      if ('äöy'.includes(s[i])) return 'ä';
    }
    return 'ä';
  }
  const sointu = (pääte, h) => h === 'a' ? pääte : pääte.replace(/a/g, 'ä').replace(/o/g, 'ö').replace(/u/g, 'y');

  /* ---------- tavutus, ääntämisohje ja IPA ---------- */
  /* Tavut. osat (valinnainen): yhdyssanan osat (['metro', 'asemalla']); jokainen osa tavutetaan erikseen. */
  function tavut(sana, osat) {
    if (osat && osat.length > 1 && osat.join('').toLowerCase() === sana.toLowerCase()) return osat.flatMap(o => tavut(o));
    const s = sana.toLowerCase();
    const tulos = [];
    let nyt = '', ydin = '';
    let vokaaliNahty = false;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (onV(c)) {
        if (ydin) {
          const pari = ydin.slice(-1) + c;
          const eka = tulos.length === 0;
          // -us/-ys-loppu ensimmäisen tavun jälkeen on oma tavunsa: ta-lo-us, kor-ke-us (ei diftongi ou, eu).
          const usLoppu = !eka && (c === 'u' || c === 'y') && s[i + 1] === 's' && i + 2 === s.length;
          const yhdistyy = ydin.length === 1 && (ydin === c || (DIFT.has(pari) && !usLoppu) || (eka && DIFT_ALKU.has(pari)));
          if (!yhdistyy) { tulos.push(nyt); nyt = ''; ydin = ''; }
        }
        nyt += c; ydin += c; vokaaliNahty = true;
      } else {
        // Konsonantti ennen vokaalia aloittaa uuden tavun (paitsi sanan alun konsonanttiryhmässä).
        if (vokaaliNahty && onV(s[i + 1]) && nyt) { tulos.push(nyt); nyt = ''; }
        nyt += c; ydin = '';
      }
    }
    if (nyt) tulos.push(nyt);
    return tulos;
  }
  // Yhdyssanan osat sanan kirjoitusasussa: osat ['metro', 'asema'] + sana 'metroasemalla' → ['metro', 'asemalla'].
  function osiin(sana, osat) {
    if (!osat || osat.length < 2) return null;
    const s = sana.toLowerCase();
    const alku = osat.slice(0, -1).join('').toLowerCase();
    if (!s.startsWith(alku) || s.length <= alku.length) return null;
    const tulos = [];
    let k = 0;
    for (const o of osat.slice(0, -1)) { tulos.push(sana.slice(k, k + o.length)); k += o.length; }
    tulos.push(sana.slice(k));
    return tulos;
  }
  /* Ääntämisohje: tavut viivalla, painollinen (ensimmäinen) tavu ISOIN kirjaimin: KII-tos, MAT-to. Yhdyssanassa
     (osat) jokaisen osan ensimmäinen tavu isolla (sivupaino): MET-ro-A-se-ma. */
  function ohje(teksti, osat) {
    return teksti.split(/(\s+)/).map(osa => {
      if (/^\s+$/.test(osa) || !osa) return osa;
      return osa.split('-').map(sana => {
        const puhdas = sana.replace(/[^\p{L}]/gu, '');
        const palat = osiin(puhdas, osat) || [puhdas];
        return palat.map(p => tavut(p).map((x, i) => i === 0 ? x.toUpperCase() : x).join('-')).join('-');
      }).join(' · ');
    }).join('');
  }
  const IPA_V = { a: 'ɑ', ä: 'æ', o: 'o', ö: 'ø', u: 'u', y: 'y', e: 'e', i: 'i' };
  const IPA_K = { v: 'ʋ', g: 'ɡ', j: 'j', r: 'r', h: 'h', s: 's', d: 'd', p: 'p', t: 't', k: 'k', l: 'l', m: 'm', n: 'n', f: 'f', b: 'b', c: 'k', w: 'ʋ', z: 'ts', x: 'ks', š: 'ʃ', ž: 'ʒ' };
  function ipaSana(sana, sivu) {
    const s = sana.toLowerCase().replace(/[^a-zåäöšž]/g, '');
    let r = sivu ? 'ˌ' : 'ˈ';
    for (let i = 0; i < s.length; i++) {
      const c = s[i], n = s[i + 1];
      // ng vokaalien välissä = pitkä [ŋː] (kengän, Helsingin); konsonantin edellä lyhyt [ŋ] (englanti [ˈeŋlɑnti]).
      if (c === 'n' && n === 'g') { r += onV(s[i + 2]) ? 'ŋː' : 'ŋ'; i++; continue; }
      if (c === 'n' && n === 'k') { r += 'ŋ'; continue; }
      const m = onV(c) ? IPA_V[c] : (IPA_K[c] || c);
      if (n === c) { r += m + 'ː'; i++; continue; }
      r += m;
    }
    return r;
  }
  // osat: yhdyssanan osat kuten ohje(); osan alku saa sivupainon ˌ.
  const ipa = (teksti, osat) => '[' + teksti.split(/[\s-]+/).filter(Boolean).map(sana => {
    const palat = osiin(sana.replace(/[^\p{L}]/gu, ''), osat);
    return palat ? palat.map((p, i) => ipaSana(p, i > 0)).join('') : ipaSana(sana);
  }).join(' ') + ']';

  /* ---------- astevaihtelu ---------- */
  // Vahva → heikko. Järjestys: pidemmät ryhmät ensin. Ei vaihtelua s:n, t:n ja h:n jälkeisissä ryhmissä (st, sk, tk, sp).
  const HEIKOKSI = [['kk', 'k'], ['pp', 'p'], ['tt', 't'], ['nk', 'ng'], ['mp', 'mm'], ['lt', 'll'], ['nt', 'nn'], ['rt', 'rr'],
    ['ht', 'hd'], ['lp', 'lv'], ['rp', 'rv'], ['lk', 'l'], ['rk', 'r'], ['hk', 'h'], ['p', 'v'], ['t', 'd'], ['k', '']];
  const VAHVAKSI = [['ng', 'nk'], ['mm', 'mp'], ['ll', 'lt'], ['nn', 'nt'], ['rr', 'rt'], ['hd', 'ht'], ['lv', 'lp'], ['rv', 'rp'],
    ['k', 'kk'], ['p', 'pp'], ['t', 'tt'], ['d', 't'], ['v', 'p']];
  const EI_VAIHTELUA = /(st|sk|sp|tk|ts|ks|ps|kt|pt)$/;
  // Jakaa vartalon: alku + konsonanttiryhmä + loppuvokaali(t) (viimeisen tavun alku).
  function jaa(vartalo) {
    const m = vartalo.match(new RegExp(`^(.*?[${V}])([^${V}]+)([${V}]+)$`));
    return m ? { alku: m[1], ryhma: m[2], loppu: m[3] } : null;
  }
  function heikko(vartalo) {
    const o = jaa(vartalo);
    if (!o || EI_VAIHTELUA.test(o.ryhma)) return vartalo;
    for (const [v, h] of HEIKOKSI) {
      if (!o.ryhma.endsWith(v)) continue;
      const ennen = o.ryhma.slice(0, -v.length);
      if (v === 'k' && ennen === '') {
        // k:v kahden u:n tai y:n välissä (luku → luvun), lke/rke → lje/rje hoidetaan ryhmissä lk/rk.
        const edel = o.alku.slice(-1);
        if ((edel === 'u' && o.loppu[0] === 'u') || (edel === 'y' && o.loppu[0] === 'y')) return o.alku + 'v' + o.loppu;
      }
      if ((v === 'lk' || v === 'rk') && o.loppu[0] === 'e') return o.alku + ennen + v[0] + 'j' + o.loppu;   // kulkea → kuljen
      if (ennen && /[^lrnmh]$/.test(ennen) && v.length === 1) return vartalo;   // esim. ks, ps
      return o.alku + ennen + h + o.loppu;
    }
    return vartalo;
  }
  function vahva(vartalo) {
    const o = jaa(vartalo);
    if (!o) return vartalo;
    for (const [h, v] of VAHVAKSI) {
      if (o.ryhma === h || (o.ryhma.endsWith(h) && h.length === 2)) return o.alku + o.ryhma.slice(0, -h.length) + v + o.loppu;
    }
    return vartalo;
  }

  /* ---------- verbit ---------- */
  const PERSOONAT = ['1s', '2s', '3s', '1p', '2p', '3p'];
  const PRONOMINIT = { '1s': 'minä', '2s': 'sinä', '3s': 'hän', '1p': 'me', '2p': 'te', '3p': 'he' };
  const PUHE_PRON = { '1s': 'mä', '2s': 'sä', '3s': 'se', '1p': 'me', '2p': 'te', '3p': 'ne' };
  const KIELTO = { '1s': 'en', '2s': 'et', '3s': 'ei', '1p': 'emme', '2p': 'ette', '3p': 'eivät' };

  function tyyppi(inf) {
    if (/(d[aä])$/.test(inf)) return 2;
    if (/([lnr][lnr][aä]|st[aä])$/.test(inf)) return 3;
    if (/[aeiouyäö][aä]$/.test(inf)) return 1;
    if (/it[aä]$/.test(inf)) return 5;
    if (/et[aä]$/.test(inf)) return 6;
    if (/t[aä]$/.test(inf)) return 4;
    return 1;
  }
  // Epäsäännölliset ja poikkeukselliset verbit: tyyppi, vahva ja heikko vartalo sekä erikoismuodot.
  const EPASAANNOLLISET = {
    olla: { tyyppi: 3, vahva: 'ole', heikko: 'ole', erikois: { '3s': 'on', '3p': 'ovat' },
      puhe: { '1s': 'oon', '2s': 'oot', '3s': 'on', '1p': 'ollaan', '2p': 'ootte', '3p': 'on' } },
    nähdä: { vahva: 'näke', heikko: 'näe' },
    tehdä: { vahva: 'teke', heikko: 'tee' },
    juosta: { vahva: 'juokse', heikko: 'juokse' },
    maata: { tyyppi: 4, vahva: 'makaa', heikko: 'makaa' },
    pelätä: { vahva: 'pelkää', heikko: 'pelkää' },
    paeta: { tyyppi: 6, vahva: 'pakene', heikko: 'pakene' },
    selvitä: { tyyppi: 4 }, hävitä: { tyyppi: 4 }
  };
  // Tyypeissä 3, 4 ja 6 infinitiivi on heikossa asteessa ja vartalo vahvassa (ajatella → ajattele-, tavata → tapaa-).
  // v:p on monitulkintainen (avata → avaa, kävellä → kävele), joten se vahvistuu vain näissä sanoissa.
  const V_VAHVISTUU = new Set(['tavata', 'luvata', 'kaivata', 'levätä']);
  const VAHVISTA = { ng: 'nk', mm: 'mp', ll: 'lt', nn: 'nt', rr: 'rt', hd: 'ht', d: 't', k: 'kk', p: 'pp', t: 'tt' };
  function vahvista(ryhma, inf) {
    if (ryhma === 'v') return V_VAHVISTUU.has(inf) ? 'p' : 'v';
    return VAHVISTA[ryhma] || ryhma;
  }
  function vahvaJuuri(juuri, inf) {
    // Tyyppi 3 (ajatel-) ja 6: vaihteleva ryhmä on viimeisen vokaalin edessä, juuri päättyy konsonanttiin.
    let m = juuri.match(new RegExp(`^(.*?[${V}])([^${V}]+)([${V}]+)([^${V}]+)$`));
    if (m) return m[1] + vahvista(m[2], inf) + m[3] + m[4];
    m = juuri.match(new RegExp(`^(.*?[${V}])([^${V}]+)([${V}]+)$`));   // tyyppi 4 (tava-)
    if (m) return m[1] + vahvista(m[2], inf) + m[3];
    return juuri;
  }

  /* Verbin vartalot: { tyyppi, vahva, heikko } (vahva = hän/he-muodon vartalo, heikko = minä-muodon ja kieltomuodon vartalo). */
  function vartalot(inf, tieto = {}) {
    const e = EPASAANNOLLISET[inf] || {};
    const t = tieto.tyyppi || e.tyyppi || tyyppi(inf);
    const h = harmonia(inf);
    let vah, hei;
    if (t === 1) { vah = inf.slice(0, -1); hei = heikko(vah); }
    else if (t === 2) { vah = hei = inf.slice(0, -2); }
    else if (t === 3) { const j = inf.slice(0, -2); vah = hei = (/st[aä]$/.test(inf) ? j : vahvaJuuri(j, inf)) + 'e'; }
    else if (t === 4) { vah = hei = vahvaJuuri(inf.slice(0, -2), inf) + h; }
    else if (t === 5) { vah = hei = inf.slice(0, -1) + 'se'; }
    else { vah = hei = vahvaJuuri(inf.slice(0, -2), inf) + 'ne'; }
    if (e.vahva) vah = e.vahva;
    if (e.heikko) hei = e.heikko;
    if (tieto.vahva) vah = tieto.vahva;
    if (tieto.heikko) hei = tieto.heikko;
    return { tyyppi: t, vahva: vah, heikko: hei, h };
  }

  function preesens(inf, tieto = {}) {
    const e = EPASAANNOLLISET[inf] || {};
    const { tyyppi: t, vahva: vah, heikko: hei, h } = vartalot(inf, tieto);
    const p = {};
    p['1s'] = hei + 'n';
    p['2s'] = hei + 't';
    // Hän-muoto: vartalon viimeinen vokaali pitenee, ellei vartalo pääty pitkään vokaaliin tai diftongiin.
    const loppu2 = vah.slice(-2);
    const pitka = (onV(loppu2[0]) && loppu2[0] === loppu2[1]) || DIFT.has(loppu2) || DIFT_ALKU.has(loppu2) || !onV(vah.slice(-1));
    p['3s'] = pitka ? vah : vah + vah.slice(-1);
    p['1p'] = hei + 'mme';
    p['2p'] = hei + 'tte';
    p['3p'] = vah + sointu('vat', h);
    if (e.erikois) Object.assign(p, e.erikois);
    const kielto = {};
    // Kieltomuoto: heikko vartalo (tyypit 1, 2, 5, 6) tai infinitiivin vartalo (tyypit 3, 4: tule, halua).
    const kieltoVartalo = inf === 'olla' ? 'ole' : hei;
    for (const k of PERSOONAT) kielto[k] = KIELTO[k] + ' ' + kieltoVartalo;
    const kysymys = {};
    const ko = sointu('ko', h);
    for (const k of PERSOONAT) kysymys[k] = p[k] + ko;
    // Passiivi (me-muoto puhekielessä: me puhutaan).
    let pass;
    if (t === 1) pass = hei.replace(/[aä]$/, 'e') + sointu('taan', h);
    else pass = inf + sointu('an', h);
    const passKielto = 'ei ' + pass.replace(/[aä]n$/, '');
    const puhe = {};
    for (const k of PERSOONAT) puhe[k] = `${PUHE_PRON[k]} ${k === '1p' ? pass : k === '3p' ? p['3s'] : p[k]}`;
    if (e.puhe) for (const [k, v] of Object.entries(e.puhe)) puhe[k] = `${PUHE_PRON[k]} ${v}`;
    const puheKielto = {};
    for (const k of PERSOONAT) puheKielto[k] = `${PUHE_PRON[k]} ${k === '1p' ? passKielto : k === '3p' ? 'ei ' + kieltoVartalo : kielto[k]}`;
    return { tyyppi: t, vahva: vah, heikko: hei, myonteinen: p, kielto, kysymys, passiivi: pass, passiiviKielto: passKielto, puhe, puheKielto };
  }

  /* ---------- nominit: yksikön sijat tunnusmuodoista ---------- */
  // tieto: { nom, gen, part, ill, h? } (genetiivistä heikko vokaalivartalo, illatiivista vahva vartalo; h = vokaalisointu
  // 'a' / 'ä', kun sana ei itse kerro sitä: yhdyssanassa ja monisanaisessa nimessä viimeinen osa).
  const PITKA_SEEN = /([aeiouyäö])\1seen$/i;
  const VHVN = /([aeiouyäö])h\1n$/i;
  function nomini(tieto) {
    const h = tieto.h || harmonia(tieto.nom);
    const heikkoV = tieto.gen.replace(/n$/, '');
    let vahvaV = heikkoV;
    if (tieto.ill) {
      // talo·on, kauppa·an, keskukse·en → talo, kauppa, keskukse; maa·han, työ·hön → maa, työ; huonee·seen → huonee.
      // -seen vain pitkän vokaalin jälkeen (huoneeseen), muuten -Vn (keskukseen → keskukse-).
      // Ristiriidassa (kuuseen: kuu·seen vai kuuse·en?) ratkaisee genetiivin vartalon pituus: vahva vartalo on yhtä pitkä
      // (huonee- : huoneen, kuuse- : kuusen).
      const pituus = heikkoV.length;
      if (PITKA_SEEN.test(tieto.ill) && tieto.ill.length - 4 === pituus) vahvaV = tieto.ill.slice(0, -4);
      else if (VHVN.test(tieto.ill) && tieto.ill.length - 3 === pituus) vahvaV = tieto.ill.slice(0, -3);
      else vahvaV = tieto.ill.slice(0, -2);
    }
    const ohita = tieto.sijat || {};
    return Object.assign({
      nominatiivi: tieto.nom, genetiivi: tieto.gen, partitiivi: tieto.part, illatiivi: tieto.ill,
      inessiivi: heikkoV + sointu('ssa', h), elatiivi: heikkoV + sointu('sta', h),
      adessiivi: heikkoV + sointu('lla', h), ablatiivi: heikkoV + sointu('lta', h), allatiivi: heikkoV + 'lle',
      essiivi: tieto.ill ? vahvaV + sointu('na', h) : undefined, translatiivi: heikkoV + 'ksi', monikko: heikkoV + 't'
    }, ohita);
  }
  /* ---------- sanasivun laajat taulut (assets/kupla.js Kupla.sivu): vain tallennetuista tunnusmuodoista ----------
     Astevaihtelun siirto: vartalopari vahva : heikko (kauppa : kaupa) → sama vaihto toiseen vahvaan muotoon
     (kauppoi → kaupoi, otti → oti). Jos muoto ei ala vaihtuvalla kohdalla, se palautetaan sellaisenaan. */
  function heikonna(muoto, vahva, heikko) {
    if (!muoto || !vahva || !heikko || vahva === heikko) return muoto;
    let c = 0;
    while (c < vahva.length && c < heikko.length && vahva[c] === heikko[c]) c++;
    let s = 0;
    const max = Math.min(vahva.length, heikko.length) - c;
    while (s < max && vahva[vahva.length - 1 - s] === heikko[heikko.length - 1 - s]) s++;
    const ax = vahva.slice(0, vahva.length - s), ay = heikko.slice(0, heikko.length - s);
    return muoto.startsWith(ax) ? ay + muoto.slice(ax.length) : muoto;
  }
  /* Monikon sijat: tieto { gen, ill, mpart, h } (yksikön genetiivi ja illatiivi, monikon partitiivi). Monikon vahva
     vartalo monikon partitiivista (taloja → taloi, leipiä → leipi, maita → mai), heikko astevaihtelulla (leivi-).
     Palauttaa { 'mon.nom', 'mon.gen', …, 'mon.abess', kom, instr }; ilman monikon partitiivia vain mon.nom. */
  const MON_GEN = { mies: 'miesten', lapsi: 'lasten', hius: 'hiusten', vesi: 'vesien' };
  function monikko(tieto) {
    const h = tieto.h || harmonia(tieto.gen || '');
    const heikkoV = String(tieto.gen || '').replace(/n$/, '');
    const n = nomini({ nom: tieto.nom || '', gen: tieto.gen, part: tieto.part, ill: tieto.ill, h });
    const vahvaV = n.essiivi ? n.essiivi.slice(0, -2) : heikkoV;
    const o = { 'mon.nom': heikkoV + 't' };
    const mp = tieto.mpart;
    if (!mp || !/[aä]$/.test(mp)) return o;
    let vah, gen, ill;
    if (/it[aä]$/.test(mp)) {                       // maita, huoneita, kalliita: mai-, huonei-, kallii-
      vah = mp.slice(0, -2); gen = vah + 'den';
      ill = vah + (PITKA_SEEN.test(tieto.ill || '') ? 'siin' : 'hin');
    } else if (/j[aä]$/.test(mp)) {                 // taloja, kauppoja, kahveja: taloi-, kauppoi-, kahvei-
      vah = mp.slice(0, -2) + 'i';
      gen = /ej[aä]$/.test(mp) ? mp.slice(0, -3) + 'ien' : mp.slice(0, -1) + 'en';
      ill = vah + 'hin';
    } else if (/i[aä]$/.test(mp)) {                 // leipiä, kiviä: leipi-, kivi-
      vah = mp.slice(0, -1); gen = vah + 'en'; ill = vah + 'in';
    } else return o;
    // Monikon genetiivi: tavallisempi muoto (t17:n löydös 20.10.2026): -nen-sanat -sten (naisten, ihmisten, suomalaisten;
    // -sien on harvinaisempi rinnakkaismuoto) ja muutama yleinen erikoismuoto.
    const nom = String(tieto.nom || '');
    if (MON_GEN[nom]) gen = MON_GEN[nom];
    else if (/nen$/.test(nom)) gen = nom.slice(0, -3) + 'sten';
    const hei = heikonna(vah, vahvaV, heikkoV);
    return Object.assign(o, {
      'mon.gen': gen, 'mon.part': mp, 'mon.ines': hei + sointu('ssa', h), 'mon.ela': hei + sointu('sta', h), 'mon.ill': ill,
      'mon.ade': hei + sointu('lla', h), 'mon.abl': hei + sointu('lta', h), 'mon.all': hei + 'lle', 'mon.ess': vah + sointu('na', h),
      'mon.transl': hei + 'ksi', 'mon.abess': hei + sointu('tta', h), kom: vah + 'neen', instr: hei + 'n'
    });
  }
  /* Verbin muodot tallennetuista tunnusmuodoista: tieto { inf, tyyppi, p1s, p3s, i3s, pass }. Vain muodot, jotka
     johtuvat niistä säännöllisesti; muuten solu puuttuu (ei arvausta). Solut: imperf.*, kond.*, pot.*, pot.kielto,
     part.yks, part.mon, imper.2p, imper.neg.2p, imper.1p, imper.neg.1p, pass, pass.kielto, pass.imperf, pass.part,
     inf3.ill, inf3.ines, inf3.ela, part.va. */
  function verbi(tieto) {
    const inf = tieto.inf, p1s = tieto.p1s, p3s = tieto.p3s;
    if (!inf || !p1s || !p3s || !/n$/.test(p1s)) return {};
    const t = tieto.tyyppi || tyyppi(inf);
    const h = harmonia(inf);
    const so = x => sointu(x, h);
    const tupla = s => s.length > 1 && onV(s.slice(-1)) && s.slice(-1) === s.slice(-2, -1);
    const hei = p1s.slice(0, -1);
    // Vartalon vokaalisointu (t14:n löydös 20.10.2026: seistä → seiso-: seisoivat, seisomaan, ei *seisoivät): vartaloon
    // perustuvat päätteet (imperfekti, konditionaali, 3. infinitiivi, -va) vartalon mukaan, jos siinä on sointuvokaali;
    // infinitiiviin perustuvat (partisiippi, potentiaali, imperatiivi te, passiivi: seissyt, seiskää, seistään) infinitiivin.
    const hv = /[aouäöy]/.test(hei) ? harmonia(hei) : h;
    const sov = x => sointu(x, hv);
    let vah = null;
    if (t === 1) vah = tupla(p3s) ? p3s.slice(0, -1) : null;
    else if (t === 2) vah = p3s === inf.slice(0, -2) ? p3s : tupla(p3s) ? p3s.slice(0, -1) : null;
    else vah = hei;
    const o = {};
    const P = ['1s', '2s', '3s', '1p', '2p', '3p'];
    const persoonat = (pre, va, kolmas) => { const e = { '1s': 'n', '2s': 't', '3s': '', '1p': 'mme', '2p': 'tte', '3p': pre === 'pot' ? so('vat') : sov('vat') };
      for (const k of P) o[pre + '.' + k] = (k === '3s' || k === '3p' ? va : kolmas) + e[k]; };
    if (tieto.i3s && vah) { persoonat('imperf', tieto.i3s, heikonna(tieto.i3s, vah, hei)); o['imperf.3s'] = tieto.i3s; }
    // Konditionaali: vahva vartalo (e putoaa, pitkä vokaali lyhenee) + isi; tyyppi 2 imperfektistä (söi → söisi).
    let ks = null;
    if (t === 2) ks = tieto.i3s ? tieto.i3s + 'si' : null;
    else if (vah) { let s = vah; if (/e$/.test(s)) s = s.slice(0, -1); else if (tupla(s)) s = s.slice(0, -1); ks = s + (/i$/.test(s) ? 'si' : 'isi'); }
    if (ks) persoonat('kond', ks, ks);
    // Partisiipit: aktiivin 2. partisiippi infinitiivistä.
    let nut = null;
    if (t === 1) nut = inf.slice(0, -1) + so('nut');
    else if (t === 2) nut = inf.slice(0, -2) + so('nut');
    else if (t === 3) { const b = inf.slice(0, -2); nut = b + b.slice(-1) + so('ut'); }
    else nut = inf.slice(0, -2) + so('nnut');
    // Poikkeus (t15:n löydös 20.10.2026): tietää → tiennyt (ei *tietänyt), kuten kirjakieli.
    if (inf === 'tietää') nut = 'tiennyt';
    o['part.yks'] = nut; o['part.mon'] = nut.slice(0, -2) + 'eet';
    if (inf !== 'olla') { const pb = nut.slice(0, -2) + 'e'; persoonat('pot', pb, pb); o['pot.3s'] = pb + 'e'; o['pot.kielto'] = pb; }
    // Imperatiivi (te, me): infinitiivin vartalo + kaa / ko / kaamme.
    const ib = (t === 2 || t === 3) ? inf.slice(0, -2) : inf.slice(0, -1);
    o['imper.2p'] = ib + so('kaa'); o['imper.neg.2p'] = ib + so('ko'); o['imper.1p'] = ib + so('kaamme'); o['imper.neg.1p'] = ib + so('ko');
    // Passiivi: tallennettu tai heikosta vartalosta (tyyppi 1: ote-taan) / infinitiivistä (tullaan, syödään).
    const pass = tieto.pass || (t === 1 ? hei.replace(/[aä]$/, 'e') + so('taan') : inf + so('an'));
    o.pass = pass; o['pass.kielto'] = pass.slice(0, -2);
    const pv = /[aeiouyäö]t[aä][aä]n$/.test(pass) ? pass.slice(0, -3) : /[aä][aä]n$/.test(pass) ? pass.slice(0, -4) : null;
    if (pv) { o['pass.imperf'] = pv + 'tiin'; o['pass.part'] = pv + so('tu'); }
    if (vah) { o['inf3.ill'] = vah + sov('maan'); o['inf3.ines'] = vah + sov('massa'); o['inf3.ela'] = vah + sov('masta'); o['part.va'] = vah + sov('va'); }
    return o;
  }

  /* ---------- Kotus-sanatyypit (AV-041, 23.10.2026) ----------
     Kotuksen Nykysuomen sanalistan taivutustyyppi (nominit 1–49, verbit 52–78) ja astevaihtelun kirjain (A–M) tallennetuista
     tunnusmuodoista. Sääntöjä, ei sanalistaa: kun samat tunnusmuodot sopivat useaan tyyppiin (tuli 23, uni 24, toimi 25,
     pieni 26), ratkaisee KOTUS_SANAT; muuten tulos on { varma: false } ja sanasivu voi jättää tyypin näyttämättä.
     sanatyyppi(tietue) on sanasivun (assets/kupla.js) kutsu: { kotus, malli, av, varma, teksti } tai null. */
  const KOTUS_MALLIT = { 1: 'valo', 2: 'palvelu', 3: 'valtio', 4: 'laatikko', 5: 'risti', 6: 'paperi', 7: 'ovi', 8: 'nalle', 9: 'kala',
    10: 'koira', 11: 'omena', 12: 'kulkija', 13: 'katiska', 14: 'solakka', 15: 'korkea', 16: 'vanhempi', 17: 'vapaa', 18: 'maa', 19: 'suo',
    20: 'filee', 21: 'rosé', 22: 'parfait', 23: 'tuli', 24: 'uni', 25: 'toimi', 26: 'pieni', 27: 'käsi', 28: 'kynsi', 29: 'lapsi',
    30: 'veitsi', 31: 'kaksi', 32: 'sisar', 33: 'kytkin', 34: 'onneton', 35: 'lämmin', 36: 'sisin', 37: 'vasen', 38: 'nainen',
    39: 'vastaus', 40: 'kalleus', 41: 'vieras', 42: 'mies', 43: 'ohut', 44: 'kevät', 45: 'kahdeksas', 46: 'tuhat', 47: 'kuollut',
    48: 'hame', 49: 'askel', 52: 'sanoa', 53: 'muistaa', 54: 'huutaa', 55: 'soutaa', 56: 'kaivaa', 57: 'saartaa', 58: 'laskea',
    59: 'tuntea', 60: 'lähteä', 61: 'sallia', 62: 'voida', 63: 'saada', 64: 'juoda', 65: 'käydä', 66: 'rohkaista', 67: 'tulla',
    68: 'tupakoida', 69: 'valita', 70: 'juosta', 71: 'nähdä', 72: 'vanheta', 73: 'salata', 74: 'katketa', 75: 'selvitä', 76: 'taitaa' };
  // Sanat, joiden tyyppiä tunnusmuodot eivät ratkaise (-li, -ni, -ri, -si: genetiivi -en, partitiivi -ltA/-ntA/-rtA/-stA),
  // ja muutama tavallinen poikkeus. Arvo: tyyppi.
  const KOTUS_SANAT = { tuli: 23, lohi: 23, uni: 24, meri: 24, hiiri: 24, sääri: 24, toimi: 25, lumi: 25, liemi: 25, niemi: 25,
    pieni: 26, kieli: 26, mieli: 26, saari: 26, suuri: 26, juuri: 26, veri: 26, sieni: 26, vuori: 26, tuuli: 26, nuori: 26, sääli: 7,
    omena: 11, peruna: 12, ikkuna: 12, vasen: 37, kaksi: 31, mies: 42, tuhat: 46, seitsemän: 10, kahdeksan: 10, yhdeksän: 10,
    kymmenen: 32, veli: 7 };
  const AV = { A: ['kk', 'k'], B: ['pp', 'p'], C: ['tt', 't'], D: ['k', ''], E: ['p', 'v'], F: ['t', 'd'], G: ['nk', 'ng'],
    H: ['mp', 'mm'], I: ['lt', 'll'], J: ['nt', 'nn'], K: ['rt', 'rr'], L: ['k', 'j'], M: ['k', 'v'] };
  /* Astevaihtelun kirjain kahdesta vartalosta (kumpi tahansa järjestys): kauppa : kaupa → A, ruoka : ruoa → D, sade : satee → F.
     Yhteinen alku perutaan vokaalin jälkeen, ja verrataan sen jälkeisiä konsonanttiryhmiä. */
  function astevaihtelu(a, b) {
    a = String(a || '').toLowerCase(); b = String(b || '').toLowerCase();
    if (!a || !b) return null;
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    while (i > 0 && !onV(a[i - 1])) i--;
    // aika : ajan, poika : pojan: k katoaa ja diftongin i kirjoitetaan j:ksi (Kotus D).
    if ((/^ik/.test(a.slice(i)) && /^j/.test(b.slice(i))) || (/^ik/.test(b.slice(i)) && /^j/.test(a.slice(i)))) return 'D';
    let ra = a.slice(i).match(new RegExp(`^[^${V}]*`))[0], rb = b.slice(i).match(new RegExp(`^[^${V}]*`))[0];
    if (ra === rb) return null;
    // Ensin koko ryhmä (nk : ng, lt : ll), sitten ilman yhteistä alkua (rtt : rt → tt : t = C, ht : hd → F, lk : lj → L, hk : h → D).
    for (;;) {
      for (const [k, [v, h]] of Object.entries(AV)) {
        if ((ra === v && rb === h) || (ra === h && rb === v)) {
          // k : v vain u- ja y-ympäristössä (puku : puvun), muuten v : p on E.
          if (k === 'M' && !/[uy]$/.test(a.slice(0, i))) continue;
          return k;
        }
      }
      if (!ra || !rb || ra[0] !== rb[0]) return null;
      ra = ra.slice(1); rb = rb.slice(1);
    }
  }
  const tavuja = s => tavut(String(s || '').replace(/[^\p{L}]/gu, '')).length;
  /* Nominin Kotus-tyyppi: tieto { nom, gen, part, ill, mpart } (yhdyssanasta viimeinen osa, ks. sanatyyppi). */
  function kotus(tieto) {
    const nom = String(tieto.nom || '').toLowerCase(), gen = String(tieto.gen || '').toLowerCase();
    const part = String(tieto.part || '').toLowerCase(), mp = String(tieto.mpart || '').toLowerCase();
    if (!nom || !/n$/.test(gen) || /[^\p{L}]/u.test(nom + gen)) return null;
    const gv = gen.slice(0, -1);
    const vahvaV = (() => { try { const n = nomini({ nom, gen, part, ill: tieto.ill || null }); return n.essiivi ? n.essiivi.slice(0, -2) : gv; } catch (e) { return gv; } })();
    // Tyypeissä 27, 28, 31, 40, 42 ja 46 vartalon vaihtelu (käsi : käden, rakkaus : rakkauden) kuuluu tyyppiin: ei kirjainta.
    const t = (tyyppi, varma = true) => tyyppi ? { kotus: tyyppi, malli: KOTUS_MALLIT[tyyppi], av: [27, 28, 31, 40, 42, 46].includes(tyyppi) ? null : astevaihtelu(nom.replace(new RegExp(`[^${V}]+$`), ''), tyyppi >= 32 ? vahvaV : gv) || astevaihtelu(vahvaV, gv), varma } : null;
    if (KOTUS_SANAT[nom]) return t(KOTUS_SANAT[nom]);
    const n = tavuja(nom);
    const loppu = nom.slice(-1);
    if (/mpi$/.test(nom) && /mm[aä]n$/.test(gen)) return t(16);
    if (!onV(loppu)) {
      if (gen === nom + 'in') return t(5);   // lainasana konsonanttiin (Esburger, golf, Confins)
      if (/nen$/.test(nom) && /sen$/.test(gen)) return t(38);
      if (/mies$/.test(nom)) return t(42);
      if (/[^aeiouyäö]in$/.test(nom) && /mm[aä]n$/.test(gen)) return t(36);
      if (/mmin$/.test(nom) && /mp[ia]m[aä]n$/.test(gen.replace(/mpim/, 'mpim'))) return t(35);
      if (/in$/.test(nom) && /im[aä]n$/.test(gen) && /mpim[aä]n$/.test(gen)) return t(35);
      if (/in$/.test(nom) && /im[ae]n$/.test(gen.replace(/ä/g, 'a')) && !/imm/.test(gen)) return t(33);
      if (/t[oö]n$/.test(nom) && /tt[oö]m[aä]n$/.test(gen)) return t(34);
      if (/s$/.test(nom)) {
        if (/ksen$/.test(gen)) return t(39);
        if (/[uy]s$/.test(nom) && /[uy]den$/.test(gen)) return t(40);
        if (/nnen$/.test(gen)) return t(45);
        if (/([aeiouyäö])\1n$/.test(gen)) return t(41);
        return null;
      }
      if (/[uy]t$/.test(nom) && /[uy]en$/.test(gen)) return t(43);
      if (/[uy]t$/.test(nom) && /een$/.test(gen)) return t(47);
      if (/t$/.test(nom) && /([aeiouyäö])\1n$/.test(gen)) return t(44);
      if (/[lrn]$/.test(nom) && /een$/.test(gen) && gen.length > nom.length + 2) return t(49);
      if (/[lrn]$/.test(nom) && /[^e]en$/.test(gen)) return t(32);   // sisar, tytär : tyttären
      return null;
    }
    if (n === 1) {
      if (/(ie|uo|yö)$/.test(nom)) return t(19);
      if (/([aeiouyäö])\1$/.test(nom) || DIFT.has(nom.slice(-2))) return t(18);
      return null;
    }
    if (DIFT.has(nom.slice(-2)) && /i$/.test(nom) && /hin$/.test(String(tieto.ill || ''))) return t(18);   // lauantai : lauantaihin
    if (/([aeiouyäö])\1$/.test(nom)) return /ee$/.test(nom) && /h/.test(String(tieto.ill || '').slice(-3)) ? t(20) : t(17);
    if (loppu === 'e') {
      if (/een$/.test(gen) && /tt[aä]$/.test(part)) return t(48);
      if (/[^e]en$/.test(gen) && /e[aä]$/.test(part)) return t(8);   // nalle, nukke : nuken
      return null;
    }
    if (loppu === 'i') {
      // -i säilyy (risti : ristin, kortti : kortin, äiti : äidin): 6, jos monikko -eitA (paperi), muuten 5.
      if (/in$/.test(gen) && part === nom + harmonia(nom)) return /eit[aä]$/.test(mp) ? t(6) : t(5, n < 3 || !!mp);
      if (/en$/.test(gen) && /e[aä]$/.test(part)) return t(7);   // ovi, joki : joen, lehti : lehden
      if (gen !== nom.slice(0, -1) + 'en') {
        if (/si$/.test(nom) && /den$/.test(gen)) return t(27);
        if (/[nlr]si$/.test(nom) && /(nn|ll|rr)en$/.test(gen)) return t(28);
        if (/ksi$/.test(nom) && /hden$/.test(gen)) return t(31);
        return null;
      }
      if (/[pk]si$/.test(nom) && /st[aä]$/.test(part)) return t(29);
      if (/tsi$/.test(nom) && /st[aä]$/.test(part)) return t(30);
      if (/mi$/.test(nom) && /nt[aä]$/.test(part)) return t(25);
      if (/si$/.test(nom) && /st[aä]$/.test(part)) return t(24, false);
      if (/[lnr]i$/.test(nom)) return t(26, false);
      return null;
    }
    if (/[ouyö]$/.test(loppu)) {
      if (/[ei][oö]$/.test(nom)) return t(3);
      if (n >= 3 && /kk[oö]$/.test(nom)) return t(4);
      if (n >= 3) return t(2, !!mp);   // numero, palvelu, opisto (monikko -oitA/-ojA)
      return t(1);
    }
    if (/[aä]$/.test(loppu)) {
      if (/[eio][aä]$/.test(nom) && /[ei]it[aä]$/.test(mp)) return t(15);
      if (n === 2) return /[oö]j[aä]$/.test(mp) ? t(9) : /i[aä]$/.test(mp) || loppu === 'ä' ? t(10) : t(mp ? 10 : 9, !!mp);
      if (/(kk|pp|tt)[aä]$/.test(nom) && /[oö]it[aä]$/.test(mp)) return t(14);
      if (/[oö]j[aä]$/.test(mp)) return t(13);
      if (/[oö]it[aä]$/.test(mp)) return t(12);
      if (/i[aä]$/.test(mp)) return t(10);
      return null;
    }
    return null;
  }
  /* Verbin Kotus-tyyppi: tieto { inf, tyyppi (1–6), p1s, p3s, i3s }. */
  function kotusVerbi(tieto) {
    const inf = String(tieto.inf || '').toLowerCase(), p1s = String(tieto.p1s || '').toLowerCase(), i3s = String(tieto.i3s || '').toLowerCase();
    if (!inf || !/n$/.test(p1s)) return null;
    const vt = tieto.tyyppi || tyyppi(inf);
    const hei = p1s.slice(0, -1);
    let k = null;
    if (vt === 1) {
      const vartalo = inf.slice(0, -1);
      if (/[aä][aä]$/.test(inf)) {
        if (inf === 'taitaa' || inf === 'tietää') k = 76;
        else if (/[oö]i$/.test(i3s) && i3s.slice(0, -2) === vartalo.slice(0, -1)) k = 56;
        else if (/rt[aä][aä]$/.test(inf) && /rsi$/.test(i3s)) k = 57;
        else if (/t[aä][aä]$/.test(inf) && /si$/.test(i3s)) k = 54;
        else k = 53;
      } else if (/e[aä]$/.test(inf)) k = inf === 'lähteä' ? 60 : /si$/.test(i3s) ? 59 : 58;
      else if (/i[aä]$/.test(inf)) k = 61;
      else k = 52;
    } else if (vt === 2) {
      if (inf === 'nähdä' || inf === 'tehdä') k = 71;
      else if (inf === 'käydä') k = 65;
      else if (/(ie|uo|yö)d[aä]$/.test(inf)) k = 64;
      else if (/([aeiouyäö])\1d[aä]$/.test(inf)) k = 63;
      else if (/id[aä]$/.test(inf)) k = 62;
    } else if (vt === 3) {
      if (inf === 'juosta') k = 70;
      else if (/ist[aä]$/.test(inf) && /isen$/.test(p1s)) k = 66;
      else k = 67;
    } else if (vt === 4) {
      if (/it[aä]$/.test(inf) && /i[aä]n$/.test(p1s)) k = 75;
      else if (/[aä]t[aä]$/.test(inf) && /([aä])\1n$/.test(p1s)) k = 73;
      else if (/([aä])\1n$/.test(p1s)) k = 73;   // maata → makaan
      else k = 74;
    } else if (vt === 5) k = 69;
    else if (vt === 6) k = 72;
    if (!k) return null;
    // Astevaihtelu: infinitiivin vartalo vs. minä-muodon vartalo (ottaa : ota-, tavata : tapaa-, ajatella : ajattele-).
    const iv = vt === 1 ? inf.slice(0, -1) : inf.replace(/(d|t|l|n|r|s)[aä]$/, '');
    return { kotus: k, malli: KOTUS_MALLIT[k], av: k === 71 ? null : astevaihtelu(iv, hei), varma: true };
  }
  const AV_TEKSTI = k => k && AV[k] ? `${AV[k][0]} : ${AV[k][1] || '–'}` : '';
  /* Sanasivun kutsu: leksikon tietue { id, l, t, yhd } → { kotus, malli, av, avPari, varma, teksti } | null.
     teksti portugaliksi: ”tipo 9 (kala), gradação A: kk : k”. */
  function sanatyyppi(r) {
    if (!r || !r.t) return null;
    const perus = String(r.id || '').replace(/:.*/, '');
    let tulos = null;
    if (r.l === 'verbi' && r.t.p1s) tulos = kotusVerbi({ inf: perus, tyyppi: r.t.tyyppi, p1s: r.t.p1s, p3s: r.t.p3s, i3s: r.t.i3s });
    else if (['substantiivi', 'adjektiivi', 'numeraali', 'paikka', 'nimi'].includes(r.l) && r.t.gen) {
      // Yhdyssana taipuu viimeisen osansa mukaan: alkuosa pois kaikista tunnusmuodoista.
      // Monisanainen nimi tai yhdysmerkki (Helsingin yliopisto, Aalto-yliopisto): viimeinen sana.
      const yhd = Array.isArray(r.yhd) ? r.yhd : null;
      const vali = Math.max(perus.lastIndexOf(' '), perus.lastIndexOf('-'));
      const alku = vali > 0 ? perus.slice(0, vali + 1).toLowerCase() : yhd && yhd.length > 1 ? yhd.slice(0, -1).join('').toLowerCase() : '';
      const pois = s => (s && alku && String(s).toLowerCase().startsWith(alku)) ? String(s).slice(alku.length) : s;
      tulos = kotus({ nom: pois(perus), gen: pois(r.t.gen), part: pois(r.t.part), ill: pois(r.t.ill), mpart: pois(r.t.mpart) });
    }
    if (!tulos) return null;
    tulos.avPari = AV_TEKSTI(tulos.av);
    tulos.teksti = `tipo ${tulos.kotus} (${tulos.malli})` + (tulos.av ? `, gradação ${tulos.av}: ${tulos.avPari}` : '');
    return tulos;
  }

  /* ---------- omistusliitteet (AV-041, 23.10.2026) ----------
     Nomini: tieto { nom, gen, part, ill, h } → { 'poss.1s': kirjani, 'poss.2s': kirjasi, 'poss.3': kirjansa, 'poss.1p': kirjamme,
     'poss.2p': kirjanne }. Pääte tulee vahvaan vokaalivartaloon (sama kuin essiivin: kauppa → kauppani, huone → huoneeni,
     käsi → käteni). Sijamuoto (valinnainen toinen argumentti, esim. 'ines'): kaupassani, kaupassaan (3. persoona
     sijamuodossa -Vn, perusmuodossa -nsa). Taipumaton sana tai postpositio: tieto { muoto: 'kanssa' } → kanssani,
     kanssasi, kanssaan, kanssamme, kanssanne; -n-loppuinen (jälkeen, mukaan) → jälkeeni, jälkeensä. */
  const OMISTUS = ['1s', '2s', '3', '1p', '2p'];
  const GEN_PRON = { '1s': 'minun', '2s': 'sinun', '3s': 'hänen', '1p': 'meidän', '2p': 'teidän', '3p': 'heidän' };
  function liitteet(pohja, h, sija) {
    // pohja: muoto ilman loppu-n:ää (kirjaa-, jälkee-) tai vokaaliin päättyvä sijamuoto (kirjassa, kanssa).
    const lyhyt = onV(pohja.slice(-1)) && pohja.slice(-1) !== pohja.slice(-2, -1);
    const kolmas = sija && lyhyt ? pohja + pohja.slice(-1) + 'n' : pohja + sointu('nsa', h);
    return { 'poss.1s': pohja + 'ni', 'poss.2s': pohja + 'si', 'poss.3': kolmas, 'poss.1p': pohja + 'mme', 'poss.2p': pohja + 'nne' };
  }
  function omistus(tieto, sija) {
    if (tieto && tieto.muoto) {
      const m = String(tieto.muoto), h = tieto.h || harmonia(m);
      if (/ksi$/.test(m)) return liitteet(m.slice(0, -1) + 'e', h, true);
      if (/n$/.test(m)) return liitteet(m.slice(0, -1), h, false);
      if (!onV(m.slice(-1))) return null;
      return liitteet(m, h, true);
    }
    if (!tieto || !tieto.gen) return null;
    const h = tieto.h || harmonia(tieto.nom || tieto.gen);
    const n = nomini(Object.assign({}, tieto, { nom: tieto.nom || '', h }));
    if (!sija || sija === 'nom' || sija === 'gen') {
      const pohja = n.essiivi ? n.essiivi.slice(0, -2) : String(tieto.gen).replace(/n$/, '');
      return liitteet(pohja, h, false);
    }
    const SIJA = { part: 'partitiivi', ill: 'illatiivi', ines: 'inessiivi', ela: 'elatiivi', ade: 'adessiivi', abl: 'ablatiivi', all: 'allatiivi', ess: 'essiivi', transl: 'translatiivi' };
    const muoto = n[SIJA[sija]];
    if (!muoto) return null;
    return omistus({ muoto, h });
  }
  /* Omistusrakenne pronominin kanssa: { '1s': 'minun kirjani', …, '3p': 'heidän kirjansa' } (postpositio: minun kanssani). */
  function omistusLauseet(tieto, sija) {
    const o = omistus(tieto, sija);
    if (!o) return null;
    const p = { '1s': 'poss.1s', '2s': 'poss.2s', '3s': 'poss.3', '1p': 'poss.1p', '2p': 'poss.2p', '3p': 'poss.3' };
    return Object.fromEntries(Object.entries(p).map(([k, s]) => [k, `${GEN_PRON[k]} ${o[s]}`]));
  }

  const SIJAT = {
    nominatiivi: ['nominativo', 'forma básica', ''], genetiivi: ['genitivo', 'de (posse): Jayn = do Jay', '-n'],
    partitiivi: ['partitivo', 'parte, quantidade, objeto incompleto', '-a/-ä, -ta/-tä'],
    illatiivi: ['ilativo', 'para dentro de', '-aan, -oon, -iin…, -han, -hön…, -seen'], inessiivi: ['inessivo', 'em, dentro de', '-ssa/-ssä'],
    elatiivi: ['elativo', 'de dentro de, sobre (assunto)', '-sta/-stä'], adessiivi: ['adessivo', 'em cima de, em (lugar aberto); com (instrumento); ter (minulla on)', '-lla/-llä'],
    ablatiivi: ['ablativo', 'de (cima de, pessoa)', '-lta/-ltä'], allatiivi: ['alativo', 'para (cima de, pessoa)', '-lle'],
    essiivi: ['essivo', 'como, na qualidade de', '-na/-nä'], translatiivi: ['translativo', 'tornar-se, em (língua): suomeksi', '-ksi'],
    monikko: ['plural (nominativo)', 'plural', '-t']
  };

  /* ---------- käänteinen haku ---------- */
  const HENKILO = { '1s': '1ª pessoa do singular (eu)', '2s': '2ª pessoa do singular (você)', '3s': '3ª pessoa do singular (ele, ela)',
    '1p': '1ª pessoa do plural (nós)', '2p': '2ª pessoa do plural (vocês)', '3p': '3ª pessoa do plural (eles, elas)' };
  let hakemisto = null;
  function rakennaHakemisto(sanasto) {
    hakemisto = new Map();
    // tieto: rakenteinen analyysi kuplan generaattorille (assets/kupla.js): laji, persoona, aika, sija.
    const lisaa = (muoto, perus, selitys, tieto = {}) => {
      const k = muoto.toLowerCase();
      if (k === perus) return;
      if (!hakemisto.has(k)) hakemisto.set(k, []);
      const l = hakemisto.get(k);
      if (!l.some(x => x.perus === perus && x.selitys === selitys)) l.push(Object.assign({ perus, selitys }, tieto));
    };
    for (const [avain, s] of Object.entries(sanasto)) {
      if (s.verbi) {
        const f = preesens(avain, s.verbi === true ? {} : s.verbi);
        for (const k of PERSOONAT) {
          lisaa(f.myonteinen[k], avain, `presente, ${HENKILO[k]}`, { laji: 'verbi', persoona: k, aika: 'presente' });
          lisaa(f.kysymys[k], avain, `pergunta, ${HENKILO[k]}`, { laji: 'verbi', persoona: k, aika: 'pergunta' });
        }
        const kv = f.kielto['1s'].split(' ')[1];
        lisaa(kv, avain, `forma negativa (en ${kv}, et ${kv}…) e imperativo (${kv}! = ${avain === 'olla' ? 'seja!' : 'faça isto!'})`, { laji: 'verbi', aika: 'negativo' });
        lisaa(f.passiivi, avain, 'passivo; na fala: nós (me ' + f.passiivi + ')', { laji: 'verbi', aika: 'passivo' });
        lisaa(f.passiiviKielto.split(' ')[1], avain, 'passivo negativo (ei ' + f.passiiviKielto.split(' ')[1] + ')', { laji: 'verbi', aika: 'passivo negativo' });
        for (const k of PERSOONAT) {
          const m = f.puhe[k].split(' ').pop();
          if (!Object.values(f.myonteinen).includes(m) && m !== f.passiivi) lisaa(m, avain, `língua falada, ${HENKILO[k]}`, { laji: 'verbi', persoona: k, aika: 'falado' });
        }
      }
      if (s.nomini) {
        const n = nomini(Object.assign({ nom: avain }, s.nomini));
        for (const [sija, muoto] of Object.entries(n)) if (muoto && sija !== 'nominatiivi') lisaa(muoto, avain, `${SIJAT[sija][0]}: ${SIJAT[sija][1]}`, { laji: 'nomini', sija });
      }
      for (const [muoto, selitys] of Object.entries(s.muodot || {})) lisaa(muoto, avain, selitys, { laji: 'muodot' });
    }
  }
  function tunnista(muoto, sanasto) {
    if (!hakemisto) rakennaHakemisto(sanasto || (window.Kurssi && window.Kurssi.sanasto) || {});
    return hakemisto.get(String(muoto).toLowerCase()) || [];
  }

  window.Taivutus = { harmonia, sointu, tavut, osiin, ohje, ipa, heikko, vahva, tyyppi, vartalot, preesens, nomini, monikko, verbi, heikonna, SIJAT, PERSOONAT, PRONOMINIT,
    kotus, kotusVerbi, sanatyyppi, astevaihtelu, KOTUS_MALLIT, AV, omistus, omistusLauseet, OMISTUS, GEN_PRON,
    PUHE_PRON, HENKILO, tunnista, rakennaHakemisto, nollaa() { hakemisto = null; } };
})();
