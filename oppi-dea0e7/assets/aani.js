/* Puhe. Ensisijaisesti valmiit äänitteet (aanet/*.js, tehty tools/tee_aanet.py:llä), jotka soivat samoin
   kaikilla laitteilla ja selaimilla. Jos äänitettä ei ole, käytetään selaimen omaa puheääntä (Web Speech API).
   Ääntämys Belo Horizonte (mineiro), normaali puhenopeus. */
(function () {
  'use strict';

  const K = window.Kurssi;
  const PROF = K.profiili || {};
  // Kohdekieli ja muistiavain kurssiprofiilista (Passo: pt-BR, Tottakai: fi-FI).
  const KIELI = (PROF.kohdekieli && PROF.kohdekieli.bcp47) || 'pt-BR';
  const KOODI = KIELI.split('-')[0];
  const T = Object.assign({
    eiAanta: 'Tälle tekstille ei ole äänitettä, eikä selain osaa lukea ääneen.',
    eiKielta: 'Tälle tekstille ei ole vielä äänitettä, eikä selaimessa ole portugalin puheääntä (muu kieli ääntäisi väärin).',
    eiTehty: nimi => `oppitunnin ${nimi} äänitteitä ei ole vielä tehty`,
    kesti: 'äänitepakettien lataus kesti liian kauan: '
  }, (K.ui && K.ui.aani) || {});
  const NOPEUS = 1.0;
  const TAUKO_MS = 650;
  const synth = window.speechSynthesis || null;
  const NAINEN = /francisca|thalita|brenda|elza|giovanna|leila|let[ií]cia|manuela|yara|luciana|maria|vit[oó]ria|camila|google portugu[eê]s|heidi|noora|selma|satu|google suomi/i;
  const MIES = /ant[oô]nio|donato|f[aá]bio|j[uú]lio|humberto|nicolau|val[eé]rio|felipe|daniel|thiago|harri|onni/i;
  // Lyhyt hiljainen mp3: soitetaan heti napautuksessa, jotta puhelimet sallivat myöhemmät äänet.
  const HILJAISUUS = 'data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjYwLjE2LjEwMAAAAAAAAAAAAAAA//NExAAAAANIAAAAAExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExFMAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKYAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
  const AVAIN = (PROF.muistiavain || 'passo-a-passo') + '-aanet';
  const OLETUS = { kertoja: '', nainen: '', mies: '', aanitteet: true };

  let aanet = [];
  let asetukset = lue();
  let vuoro = 0;
  let nykyinen = null;   // käynnissä olevan toiston ohjain { alku(), loppu() }
  let korostettu = null;
  const kuuntelijat = new Set();
  const soitin = new Audio();
  soitin.preload = 'auto';

  /* ---------- asetukset ---------- */

  function lue() {
    try { return Object.assign({}, OLETUS, JSON.parse(localStorage.getItem(AVAIN) || '{}')); }
    catch (e) { return Object.assign({}, OLETUS); }
  }
  function tallenna() {
    try { localStorage.setItem(AVAIN, JSON.stringify(asetukset)); } catch (e) { /* ei tallennusta */ }
  }
  const ilmoita = () => kuuntelijat.forEach(f => f());

  /* ---------- valmiit äänitteet ---------- */

  const leikkeet = {};          // avain -> [oletus, alt] (base64-mp3; tyhjä alt = sama kuin oletus)
  const tekstihaku = new Map();   // norm(teksti) -> ensimmäinen avain, roolista riippumatta
  const paketit = {};           // nimi -> Promise
  const ladatut = new Set();
  const puuttuvat = new Set();   // paketit, joita ei (vielä) ole äänitetty

  const norm = s => s.toLowerCase().replace(/[.,!?;:"“”«»()¿¡…–—]/g, '').replace(/\s+/g, ' ').trim();
  const rooliAvain = (tyyppi, vaihto) => (!tyyppi || tyyppi === 'kertoja') ? 'kertoja' : `${tyyppi}${vaihto || 0}`;

  window.Kurssi.aanet = function (data) {
    Object.assign(leikkeet, data.leikkeet);
    for (const avain of Object.keys(data.leikkeet)) {
      const t = avain.slice(avain.indexOf('|') + 1);
      const n = norm(t);
      if (!tekstihaku.has(n)) tekstihaku.set(n, avain);
    }
    ladatut.add(data.paketti);
    ilmoita();
  };

  /* Äänitepakettien luettelo (lisäys 17.10.2026, Tottakain auditointi 5 C2/m6): jos kurssi kertoo, mitkä paketit on
     olemassa (Kurssi.aanipaketit tai Kurssi.profiili.aanipaketit = ['yleinen', 't01', …]), muita ei pyydetä lainkaan
     (ei 404-virheitä konsoliin). Ilman luetteloa (Passo) kaikki paketit pyydetään kuten ennenkin. */
  function luettelo() {
    const l = window.Kurssi.aanipaketit !== undefined ? window.Kurssi.aanipaketit : PROF.aanipaketit;
    return Array.isArray(l) ? l : null;
  }
  const luettelossa = n => { const l = luettelo(); return !l || l.includes(n); };
  /* Tottakain muotopaketit (T16, A6-08): sanasivujen taivutusmuodot ovat oppituntikohtaisissa paketeissa muodot-<oppitunti>
     (luettelon nimet). Siirtymän ajan, kun uusia ei vielä ole julkaistu, vanha yhteinen muodot. Ilman luetteloa (Passo) ei mitään. */
  function muotopaketit() {
    const l = luettelo();
    if (!l) return [];
    const uudet = l.filter(n => n.startsWith('muodot-'));
    return uudet.length ? uudet : l.filter(n => n === 'muodot');
  }

  function lataa(nimi) {
    if (!nimi) return Promise.resolve();
    if (paketit[nimi]) return paketit[nimi];
    const olemassa = luettelo();
    if (olemassa && !olemassa.includes(nimi)) { puuttuvat.add(nimi); paketit[nimi] = Promise.resolve(); return paketit[nimi]; }
    // Versioleima (T16, A6-08): julkaistulla sivulla window.TottakaiVersio.numero (sivut.yml kirjoittaa assets/versio.js:n), jotta
    // selain ei soita vanhaa pakettia päivityksen jälkeen; levyltä (file:) ja paikallisesti (numero null) ilman leimaa.
    const versio = window.TottakaiVersio && window.TottakaiVersio.numero;
    const polku = `aanet/${nimi}.js` + (versio && location.protocol !== 'file:' ? `?v=${encodeURIComponent(versio)}` : '');
    paketit[nimi] = new Promise(valmis => {
      if (location.protocol === 'file:') {
        // Levyltä avattuna fetch ei toimi, mutta skriptitagi toimii.
        const s = document.createElement('script');
        s.src = polku;
        s.onload = () => valmis();
        s.onerror = () => { puuttuvat.add(nimi); kirjaa(T.eiTehty(nimi), null, true); valmis(); };
        document.head.append(s);
      } else {
        fetch(polku).then(r => {
          if (r.status === 404) { puuttuvat.add(nimi); kirjaa(T.eiTehty(nimi), null, true); }
          else if (!r.ok) kirjaa(`äänitepaketti ${nimi}: HTTP ${r.status}`);
          return r.ok ? r.text() : '';
        }).then(t => {
          if (t) window.Kurssi.aanet(JSON.parse(t.slice(t.indexOf('(') + 1, t.lastIndexOf(')'))));
        }).catch(e => { kirjaa(`äänitepaketti ${nimi} ei latautunut`, e); paketit[nimi] = null; }).finally(valmis);
      }
    });
    return paketit[nimi];
  }

  function etsiLeike(k, alt) {
    const r = rooliAvain(k.tyyppi, k.vaihto);
    const n = norm(k.teksti);
    const l = leikkeet[`${r}|${k.teksti}`] || leikkeet[`${r}|${n}`] || leikkeet[`kertoja|${n}`]
      || (tekstihaku.has(n) ? leikkeet[tekstihaku.get(n)] : null);
    if (!l) return null;
    // 2. kenttä on Passossa vaihtoehtoinen leike (base64), Tottakaissa tuottotapa ('toisto', 'varalla'): vain pitkä on leike.
    return (alt && l[1] && l[1].length > 100) ? l[1] : l[0];
  }

  /* Ydinsanojen äänitteet ovat omissa paketeissaan yleisyyden mukaan (ydin1 = 1–100 ja puhekieli, ydin2 = 101–300,
     ydin3 = 301–500, ydin4 = 501–1000). */
  let ydinSijat = null;
  function ydinPaketti(sana) {
    if (!ydinSijat) {
      ydinSijat = new Map();
      const y = window.Kurssi.ydin || { sanat: [], puhekieli: [] };
      y.sanat.forEach((r, i) => ydinSijat.set(r[0], i + 1));
      y.puhekieli.forEach(r => ydinSijat.set(r[0], 1));
    }
    const sija = ydinSijat.get(sana);
    if (!sija) return null;
    return sija <= 100 ? 'ydin1' : sija <= 300 ? 'ydin2' : sija <= 500 ? 'ydin3' : 'ydin4';
  }

  /* Paketit, joista puhe todennäköisesti löytyy: etusivu, nykyinen oppitunti, sanan oma oppitunti ja ydinsanapaketti. */
  let nykyinenPaketti = null;
  function tarvittavat(jono) {
    const n = new Set(['yleinen']);
    if (nykyinenPaketti) n.add(nykyinenPaketti);
    // Tottakain sanasivun (#palavra-<sana>) taivutusmuodot ovat sanan oppitunnin muotopaketissa muodot-<oppitunti> (T16, A6-08;
    // ennen yksi 17 Mt:n paketti muodot). Oppitunti leksikosta (Kurssi.sanasto[norm(sana)].oppitunti), muuten sivun paketista,
    // muuten muodot-gramatica; vain luettelon paketti pyydetään (muut muotopaketit varalla, soita/aloita). Passossa ei sanasivuja.
    const sanasivu = /^#palavra-(.+)$/.exec(location.hash);
    if (sanasivu) {
      let sana = sanasivu[1];
      try { sana = decodeURIComponent(sana); } catch (e) { /* virheellinen osoite: sellaisenaan */ }
      const s = window.Kurssi.sanasto && window.Kurssi.sanasto[norm(sana.replace(/:[\p{L}\d]+$/u, ''))];   // kuusi:puu → kuusi (Sanasto.nimi)
      const mp = `muodot-${(s && s.oppitunti) || (/^[tk]\d\d$/.test(nykyinenPaketti || '') ? nykyinenPaketti : 'gramatica')}`;
      if (luettelossa(mp)) n.add(mp);
    }
    for (const k of jono) {
      if (!k.teksti) continue;
      const avain = norm(k.teksti);
      const s = window.Kurssi.sanasto[avain];
      if (s && s.oppitunti) n.add(s.oppitunti);
      if (s && s.lahde) n.add(s.lahde);
      const yp = ydinPaketti(avain);
      if (yp) n.add(yp);
      // Yleisimpien sanojen paketti ydin1 ei enää esilataudu joka sivulla (T16, asetaPaketti): tuntematon yksittäinen sana hakee
      // sen ensimmäisellä sanan soitolla (sanakuplat).
      else if (!/\s/.test(avain)) n.add('ydin1');
      const es = window.Kurssi.espanja && window.Kurssi.espanja.sanat[avain];
      if (!yp && es && es[3]) n.add('espanja');
    }
    return [...n];
  }

  /* ---------- selaimen äänet (varalla) ---------- */

  const luonnollinen = v => /natural|online|neural|premium|enhanced/i.test(v.name);
  function sukupuoli(v) {
    if (MIES.test(v.name)) return 'mies';
    if (NAINEN.test(v.name)) return 'nainen';
    return '?';
  }
  let aanetHaettu = !synth;   // selaimen äänilista on kysytty (Chrome antaa listan vasta voiceschanged-tapahtumassa)
  function lataaAanet(lopullinen) {
    if (!synth) return;
    const kaikki = synth.getVoices();
    if (kaikki.length || lopullinen === true) aanetHaettu = true;
    const tarkka = KIELI.toLowerCase().replace('_', '-');
    let pt = kaikki.filter(v => v.lang.toLowerCase().replace('_', '-') === tarkka);
    if (!pt.length) pt = kaikki.filter(v => v.lang.toLowerCase().startsWith(KOODI));
    aanet = pt.sort((a, b) => luonnollinen(b) - luonnollinen(a));
    ilmoita();
  }
  if (synth) {
    lataaAanet();
    if ('onvoiceschanged' in synth) synth.addEventListener('voiceschanged', () => lataaAanet(true));
    setTimeout(() => lataaAanet(true), 600);
  }
  const etsi = uri => aanet.find(v => v.voiceURI === uri) || null;
  function kertojanAani() {
    return etsi(asetukset.kertoja) || aanet.find(v => sukupuoli(v) === 'mies') || aanet[0] || null;
  }
  function rooli(tyyppi, vaihto) {
    const kertoja = kertojanAani();
    if (tyyppi === 'kertoja' || !tyyppi) return { voice: kertoja, pitch: 1 };
    const lista = aanet.filter(v => sukupuoli(v) === tyyppi && v !== kertoja);
    const valittu = etsi(asetukset[tyyppi]);
    if (lista.length) {
      const alku = valittu ? Math.max(0, lista.indexOf(valittu)) : 0;
      return { voice: lista[(alku + (vaihto || 0)) % lista.length], pitch: 1 };
    }
    if (valittu) return { voice: valittu, pitch: 1 };
    return { voice: kertoja, pitch: tyyppi === 'nainen' ? 1.3 : 0.8 };
  }

  /* ---------- toisto ---------- */

  function korosta(el) {
    if (korostettu) korostettu.classList.remove('soi');
    korostettu = el || null;
    if (korostettu) {
      korostettu.classList.add('soi');
      const r = korostettu.getBoundingClientRect();
      if (r.top < 90 || r.bottom > window.innerHeight - 20) korostettu.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }

  /* ---------- äänitteen toisto ----------
     Ensisijaisesti Web Audio (ei riipu sivun mediarajoituksista), sitten audio-elementti blob-osoitteella,
     viimeisenä selaimen puheääni. Viimeisin virhe näkyy ääniasetuksissa vianetsintää varten. */
  let actx = null;
  let lahde = null;
  let viimeVirhe = '';
  let menetelma = '';
  const kirjaa = (t, e, hiljaa) => {
    viimeVirhe = t + (e && e.name ? ` (${e.name})` : '') + (e && e.message ? ': ' + e.message : (e && typeof e === 'string') ? ': ' + e : '');
    ilmoita();
    if (!hiljaa) document.dispatchEvent(new CustomEvent('aani-ilmoitus', { detail: viimeVirhe }));
  };

  /* Puhelimet (erityisesti Brave ja Chrome Androidilla upotetulla sivulla) sallivat audio-elementin play()-kutsun
     vain suoraan napautuksesta. Kun elementti on kerran käynnistetty napautuksessa, sama elementti saa soittaa
     myöhemmätkin leikkeet. Siksi jokainen napautus käynnistää elementin heti hiljaisella leikkeellä. */
  let hiljaisuusUrl = null;
  function avaaElementti() {
    try {
      if (!hiljaisuusUrl) hiljaisuusUrl = URL.createObjectURL(new Blob([puskuriksi(HILJAISUUS.split(',')[1])], { type: 'audio/mpeg' }));
      soitin.onended = soitin.onerror = null;
      soitin.src = hiljaisuusUrl;
      const p = soitin.play();
      if (p && p.catch) p.catch(() => { /* seuraava leike keskeyttää tämän; varsinainen virhe näkyy leikkeen toistossa */ });
    } catch (e) { kirjaa('audio-elementti ei avaudu', e, true); }
  }

  function avaaAani() {           // kutsutaan heti napautuksessa
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!actx) {
        actx = new AC();
        // Hiljainen jatkuva signaali pitää äänilaitteen hereillä leikkeiden välillä (Tottakain omistaja 18.10.2026:
        // laitteen herätyksen häivytys söi yksittäisten sanojen ensimmäisen konsonantin).
        if (actx.createConstantSource) {
          const c = actx.createConstantSource(), g = actx.createGain();
          g.gain.value = 0; c.connect(g); g.connect(actx.destination); c.start();
        }
      }
      if (actx.state === 'suspended') actx.resume();
      const b = actx.createBuffer(1, 1, 22050);
      const s = actx.createBufferSource();
      s.buffer = b; s.connect(actx.destination); s.start(0);
    } catch (e) { kirjaa('Web Audio ei käynnisty', e); actx = null; }
  }
  function puskuriksi(b64) {
    const bin = atob(b64);
    const u = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return u.buffer;
  }
  // Purettujen leikkeiden välimuisti tavurajalla (T16, A6-08): enintään 50 Mt purettua ääntä (float32), vanhimmat pois ensin
  // (Map säilyttää lisäysjärjestyksen). Ennen raja oli 300 leikettä, mikä saattoi olla satoja megatavuja.
  const dekoodatut = new Map();        // b64 -> Promise<AudioBuffer>
  const dekoodatutTavut = new Map();   // b64 -> puretun puskurin koko tavuina
  let dekoodattuYht = 0;
  const VALIMUISTI_TAVUT = 50 * 1024 * 1024;
  function dekoodaa(b64) {
    if (!dekoodatut.has(b64)) {
      const p = new Promise((ok, ei) => {
        const r = actx.decodeAudioData(puskuriksi(b64), ok, ei);
        if (r && r.then) r.then(ok, ei);
      });
      dekoodatut.set(b64, p);
      p.then(buf => {
        const t = buf.length * buf.numberOfChannels * 4;
        dekoodatutTavut.set(b64, t); dekoodattuYht += t;
        for (const [k, v] of dekoodatutTavut) {
          if (dekoodattuYht <= VALIMUISTI_TAVUT || k === b64) break;
          dekoodatut.delete(k); dekoodatutTavut.delete(k); dekoodattuYht -= v;
        }
      }, () => { dekoodatut.delete(b64); });   // epäonnistunut purku ei jää välimuistiin
    }
    return dekoodatut.get(b64);
  }
  function soitaElementilla(b64, valmis, virhe) {
    try {
      const url = URL.createObjectURL(new Blob([puskuriksi(b64)], { type: 'audio/mpeg' }));
      soitin.onended = () => { URL.revokeObjectURL(url); menetelma = 'audio-elementti'; valmis(); };
      soitin.onerror = () => { kirjaa('audio-elementti ei toista'); virhe(); };
      soitin.src = url;
      const p = soitin.play();
      if (p && p.catch) p.catch(e => {
        if (e && e.name === 'AbortError') return;   // uusi toisto keskeytti tämän
        if (e && e.name === 'NotAllowedError') {
          kirjaa('selain esti äänen. Napauta ▶ uudelleen. Jos ääni ei vieläkään kuulu, kokeile Chromea tai sulje Brave Shields tältä sivulta', e);
          pysayta();
          return;
        }
        kirjaa('audio-elementti estetty', e); virhe();
      });
    } catch (e) { kirjaa('audio-elementti', e); virhe(); }
  }
  function soitaLeike(b64, valmis, virhe) {
    // Jos selain pitää Web Audion pysäytettynä (esim. upotetun sivun äänirajoitus), käytetään audio-elementtiä.
    if (!actx || actx.state !== 'running') return soitaElementilla(b64, valmis, virhe);
    let ohi = false;
    const kerran = f => () => { if (!ohi) { ohi = true; f(); } };
    const ok = kerran(valmis);
    dekoodaa(b64).then(buf => {
      if (actx.state === 'suspended') actx.resume();
      lahde = actx.createBufferSource();
      lahde.buffer = buf;
      lahde.connect(actx.destination);
      lahde.onended = () => { menetelma = 'Web Audio'; ok(); };
      lahde.start(0);
      // varmistus: jos ääni ei käynnisty (esim. konteksti jumissa), jatketaan kuitenkin
      setTimeout(() => {
        if (actx.state !== 'running') { kirjaa('Web Audio pysähdyksissä (' + actx.state + ')'); }
        ok();
      }, buf.duration * 1000 + 1500);
    }).catch(e => { kirjaa('äänitteen purku epäonnistui', e); if (!ohi) { ohi = true; soitaElementilla(b64, valmis, virhe); } });
  }

  function pysayta() {
    vuoro++;
    if (lahde) { try { lahde.onended = null; lahde.stop(); } catch (e) { /* jo pysähtynyt */ } lahde = null; }
    soitin.onended = soitin.onerror = null;
    soitin.pause();
    // Turha cancel-kutsu saa Androidin puheäänen keskeyttämään seuraavan lauseen (”interrupted”).
    if (synth && (synth.speaking || synth.pending)) synth.cancel();
    korosta(null);
    if (nykyinen) { const n = nykyinen; nykyinen = null; n.loppu(); }
  }

  function puhuSelaimella(k, jatka) {
    const oma = vuoro;
    if (!synth) {
      document.dispatchEvent(new CustomEvent('aani-virhe', { detail: T.eiAanta }));
      return jatka();
    }
    if (!aanet.length) {
      document.dispatchEvent(new CustomEvent('aani-virhe', { detail: T.eiKielta }));
      menetelma = 'ei ääntä';
      return jatka();
    }
    const r = rooli(k.tyyppi, k.vaihto);
    const u = new SpeechSynthesisUtterance(k.teksti);
    u.lang = KIELI;
    if (r.voice) u.voice = r.voice;
    u.rate = NOPEUS;
    u.pitch = r.pitch;
    let ohi = false;
    const kerran = () => { if (!ohi) { ohi = true; jatka(); } };
    u.onend = kerran;
    u.onerror = e => {
      if (e && (e.error === 'interrupted' || e.error === 'canceled') && oma !== vuoro) return kerran();   // käyttäjä pysäytti
      kirjaa('selaimen puhe epäonnistui', e && e.error); kerran();
    };
    synth.speak(u);
    setTimeout(() => { if (!ohi) { kirjaa('selaimen puhe ei vastannut'); kerran(); } }, 2500 + 120 * k.teksti.length);
    menetelma = 'selaimen puhe';
  }

  /* jono: [{ teksti, tyyppi, vaihto, el }]; valinnat: { alt, ohjain: { alku(), loppu() } } */
  function soita(jono, valinnat = {}) {
    pysayta();
    // valinnat.vainLeike (Tottakain pomotaistelu, omistaja 21.10.2026: ”Cut all voice lines from all bosses (that have not
    // been produced)”): soitetaan vain valmis leike; puuttuva puhe ohitetaan hiljaa (ei selaimen puhetta, ei varapaketteja).
    const vainLeike = !!valinnat.vainLeike;
    const oma = vuoro;
    nykyinen = valinnat.ohjain || null;
    if (nykyinen) nykyinen.alku();
    // Puhelimet sallivat äänen vain suoraan napautuksesta: avataan ääni heti.
    if (asetukset.aanitteet) {
      avaaAani();
      avaaElementti();
    }
    if (synth && synth.paused) synth.resume();

    let i = 0;
    const lopeta = () => {
      korosta(null);
      if (nykyinen) { const n = nykyinen; nykyinen = null; n.loppu(); }
    };
    const seuraava = () => {
      if (oma !== vuoro) return;
      if (i >= jono.length) return lopeta();
      const k = jono[i++];
      let jatkettu = false;
      const jatka = () => {
        if (jatkettu || oma !== vuoro) return;
        jatkettu = true;
        setTimeout(seuraava, TAUKO_MS);
      };
      if (k.tauko) {           // roolileikki: oppijan vuoro, hiljaisuus
        korosta(k.el);
        if (k.el) k.el.classList.add('vuoro');
        setTimeout(() => { if (k.el) k.el.classList.remove('vuoro'); jatka(); }, k.tauko);
        return;
      }
      const leike = asetukset.aanitteet ? etsiLeike(k, valinnat.alt) : null;
      korosta(k.el);
      if (leike) {
        soitaLeike(leike, jatka, () => { if (oma === vuoro && !jatkettu) { if (vainLeike) jatka(); else puhuSelaimella(k, jatka); } });
      } else if (vainLeike) {
        jatka();
      } else {
        puhuSelaimella(k, jatka);
      }
    };
    // Jos kaikki äänitteet ovat jo muistissa, ensimmäinen leike alkaa samassa napautuksessa ilman odotusta.
    const puuttuu = () => jono.some(k => !k.tauko && !etsiLeike(k, valinnat.alt));
    const varapaketit = () => ['gramatica', 'treeni', 'pelit'].concat(muotopaketit()).filter(n => luettelossa(n) && !ladatut.has(n) && !puuttuvat.has(n));
    const tarve = tarvittavat(jono);
    const aloita = () => {
      // Toinen vaihe: jos jokin puhe puuttuu vielä, ladataan varapaketit ja kaikki muotopaketit (vain tarvittaessa: ne ovat isoja).
      const vara = asetukset.aanitteet && !vainLeike && puuttuu() ? varapaketit() : [];
      if (!vara.length) return seuraava();
      Promise.race([Promise.all(vara.map(lataa)), new Promise(ok => setTimeout(ok, 10000))]).then(seuraava);
    };
    if (!asetukset.aanitteet || !puuttuu() || tarve.every(n => ladatut.has(n))) aloita();
    else {
      // Lataus saa kestää enintään 10 s; sen jälkeen jatketaan (puuttuvat puheet selaimen äänellä).
      let valmiina = false;
      const kaikki = Promise.all(tarve.map(lataa)).then(() => { valmiina = true; });
      const aikaraja = new Promise(ok => setTimeout(() => {
        const kesken = tarve.filter(n => !ladatut.has(n) && !puuttuvat.has(n));
        if (!valmiina && kesken.length) kirjaa(T.kesti + kesken.join(', '));
        ok();
      }, 10000));
      Promise.race([kaikki, aikaraja]).then(aloita);
    }
  }

  window.Aani = {
    tuettu: !!synth,
    soita,
    pysayta,
    asetaPaketti(nimi) {
      nykyinenPaketti = nimi;
      // Etusivun ja sivun oma paketti heti. Yleisimpien sanojen paketti ydin1 ei enää esilataudu joka sivulla (T16, A6-08):
      // tarvittavat() hakee sen ensimmäisellä sanan soitolla.
      Promise.all([lataa('yleinen'), nimi && lataa(nimi)]);
    },
    leikkeita: () => Object.keys(leikkeet).length,
    // Testi ja kattavuustarkistus: löytyykö puheelle leike, kun tarvittavat paketit on ladattu (ei soita).
    async loytyy(k) {
      const tarve = tarvittavat([k]).concat(['gramatica', 'treeni', 'pelit'], muotopaketit());
      await Promise.all(tarve.filter(luettelossa).map(lataa));
      return !!etsiLeike(k, false);
    },
    /* Voiko laite puhua kieltä (lisäys 17.10.2026, Tottakain auditointi 5 C2): nykyisen paketin (tai ilman pakettia
       minkä tahansa) äänitteet on ladattu ja käytössä, tai selaimessa on sen kielen puheääni. kieli = BCP 47
       (oletus kurssin kohdekieli). Ennen kuin selain on antanut äänilistansa, palauttaa true (ei turhaa varoitusta);
       aanetHaettu() kertoo, onko lista jo kysytty. */
    voiPuhua(kieli) {
      const k = String(kieli || KIELI).toLowerCase().replace('_', '-');
      const oma = k.split('-')[0] === KOODI;
      if (oma && asetukset.aanitteet && (nykyinenPaketti ? ladatut.has(nykyinenPaketti) : ladatut.size > 0) && Object.keys(leikkeet).length) return true;
      if (!synth) return false;
      if (!aanetHaettu) return true;
      if (oma) return aanet.length > 0;
      return synth.getVoices().some(v => v.lang.toLowerCase().replace('_', '-').split('-')[0] === k.split('-')[0]);
    },
    aanetHaettu: () => aanetHaettu,
    diagnoosi: () => ({ virhe: viimeVirhe, menetelma, webAudio: actx ? actx.state : 'ei', paketit: [...ladatut].join(', '), puuttuvat: [...puuttuvat] }),
    /* Äänitesti: kokeilee jokaisen toistotavan erikseen ja palauttaa raportin rivit. Kutsutaan napautuksesta. */
    async testi() {
      const rivit = [];
      rivit.push('Sivun osoite: ' + location.origin);
      rivit.push('Selain: ' + navigator.userAgent.replace(/^Mozilla\/5\.0 /, '').slice(0, 120));
      avaaAani();
      rivit.push('Web Audio: ' + (actx ? 'tila heti ' + actx.state : 'ei käytettävissä'));
      if (actx) {
        try { await Promise.race([actx.resume(), new Promise(r => setTimeout(r, 1500))]); } catch (e) { rivit.push('resume-virhe: ' + e.name); }
        rivit.push('Web Audio: tila resume-kutsun jälkeen ' + actx.state);
      }
      const nayte = Object.values(leikkeet)[0];
      rivit.push('Äänitteitä ladattu: ' + Object.keys(leikkeet).length + ' (paketit: ' + [...ladatut].join(', ') + ')');
      if (nayte && actx) {
        try { const buf = await dekoodaa(nayte[0]); rivit.push(`Äänitteen purku: onnistui (${buf.duration.toFixed(1)} s)`); }
        catch (e) { rivit.push('Äänitteen purku: epäonnistui ' + (e && e.name)); }
      }
      if (nayte) {
        try {
          const url = URL.createObjectURL(new Blob([puskuriksi(nayte[0])], { type: 'audio/mpeg' }));
          const a = new Audio(url);
          await a.play();
          rivit.push('Audio-elementti: toisto alkoi');
        } catch (e) { rivit.push('Audio-elementti: estetty ' + e.name + (e.message ? ' – ' + e.message : '')); }
      }
      rivit.push('Selaimen puheäänet: ' + (synth ? synth.getVoices().length + ' kpl' : 'ei tukea'));
      if (viimeVirhe) rivit.push('Viimeisin virhe: ' + viimeVirhe);
      return rivit;
    },
    aanet: () => aanet.slice(),
    sukupuoli,
    luonnollinen,
    kertojanAani,
    asetus: k => asetukset[k],
    aseta(k, v) { asetukset[k] = v; tallenna(); ilmoita(); },
    kuuntele(f) { kuuntelijat.add(f); }
  };
})();
