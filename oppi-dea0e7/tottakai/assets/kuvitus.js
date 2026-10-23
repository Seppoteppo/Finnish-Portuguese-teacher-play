/* Tottakain oma kopio Passon tiedostosta assets/kuvitus.js (23.10.2026, AV-063; omistaja jaetuista tiedostoista: ”There shouldnt be.”).
   Passo käyttää edelleen omaa alkuperäistään; muutokset tähän eivät näy Passossa eivätkä Passon muutokset täällä. */
/* Kuvitus: piirretyt hahmot, vaihtuva näyttämö, videopuhelu ja muut kuvalliset osat.
   Ohjelma on kieliriippumaton: sisältö (hahmojen piirteet, kuvat, tekstit) tulee oppitunneista ja tiedostoista
   assets/hahmot.js ja assets/kuvat.js. Käyttöliittymän tekstit ovat taulukossa T (käännetään yhdessä paikassa).

   Oppitunnin HTML:n merkinnät (ks. tools/OHJE_KIRJOITTAJALLE.md):
   - data-paikka="kuva-avain" millä tahansa elementillä: sivun tausta vaihtuu tähän kuvaan, kun lukija on kohdassa.
   - <div class="videopuhelu" data-dialogi="id" …>: saapuva videopuhelu, joka esittää dialogin (sivun ”rikkova” osa).
   - <span class="ryhma" data-hahmot="marta,maia"></span>: hahmojen kuvat rivissä (esim. pronominitehtävä).
   - <span class="huuto" data-x="20" data-y="30" data-aani="nainen" data-fi="José">Zé!</span> figure.kuva:n sisällä:
     kuvaan sijoitettu puhekupla, joka soi napautuksesta.
   - <div class="nappaimisto" data-numero="40 765 4321" data-puhu="…" data-h="maia"></div>: puhelimen näppäimistö.
   - <div class="ficha-foto" data-hahmo="jay"></div>: hahmon kuva paperiliittimellä lomakkeessa.
   - <div class="dokumentti ficha oma" data-tallenna="avain"> … <input> …: oppijan oma lomake, tallentuu selaimeen. */
(function () {
  'use strict';
  const K = window.Kurssi;
  const T = {
    soittaa: 'soittaa videopuhelua…',
    ja: ' e ',   // nimiluettelon viimeinen sidesana (kohdekielellä, koska puhelu on kohdekielinen)
    vastaa: 'Vastaa',
    hylkaa: 'Hylkää',
    lopeta: 'Lopeta puhelu',
    paattyi: 'Puhelu päättyi',
    uudelleen: 'Katso puhelu uudelleen',
    sulje: 'Sulje',
    suomennos: 'Suomennos',
    saapuva: 'Saapuva videopuhelu',
    katso: 'Katso dialogi videopuheluna',
    kuuntele: 'Kuuntele numero',
    pyyhi: 'Pyyhi',
    tarkista: 'Tarkista',
    oikein: 'Oikein!',
    vaarin: 'Ei aivan. Kuuntele uudelleen.',
    kuva: 'Kuva',
    tallennettu: 'Tallennettu tähän selaimeen.',
    kelluvaNappi: 'Manaatti (napauta: mietelause)',
    oikeinPieni: 'oikein',
    vaarinLyhyt: 'Väärin.'
  };
  Object.assign(T, (K.ui && K.ui.kuvitus) || {});   // toisen kurssin käyttöliittymäkieli (esim. Tottakai: portugali)
  const PROF = K.profiili || {};
  const KIELI = (PROF.kohdekieli && PROF.kohdekieli.bcp47) || 'pt-BR';
  const MUISTI = (PROF.muistiavain || 'passo-a-passo') + '-';
  const KAANNOS = (PROF.kentat && PROF.kentat.kaannos) || 'fi';   // käännöksen data-määre: data-fi (Passo), data-pt (Tottakai)
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  function el(tag, attrs, ...lapset) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === null || v === undefined || v === false) continue;
      e.setAttribute(k, v === true ? '' : v);
    }
    for (const l of lapset) if (l !== null && l !== undefined) e.append(l);
    return e;
  }
  const muisti = {
    lue(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    kirjoita(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* yksityinen ikkuna tms. */ } }
  };
  const kuva = avain => (K.kuvat || {})[avain] || null;

  /* ---------- piirretyt muotokuvat ---------- */
  let idLaskuri = 0;
  const TUKAT_TAKA = {
    pitka: '<path d="M27 50C22 28 36 15 50 15C66 15 79 28 73 50C77 64 74 76 66 80L34 80C26 76 23 64 27 50Z"/>',
    polkka: '<path d="M28 50C26 30 37 18 50 18C63 18 74 30 72 50L73 63C67 66 62 61 62 56L38 56C38 61 33 66 27 63Z"/>',
    kihara: '<path d="M29 52C24 32 37 19 50 19C64 19 76 32 71 52C70 60 63 62 60 58L40 58C37 62 30 60 29 52Z"/>' +
      [[30, 40], [33, 29], [41, 21], [50, 19], [59, 21], [67, 29], [70, 40], [30, 50], [70, 50]]
        .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.5"/>`).join('')
  };
  const TUKAT_ETU = {
    sotkuinen: '<path d="M31 42L33 29L37 32L39 22L44 28L48 18L52 27L57 20L59 28L64 24L65 32L69 42C65 34 58 31 50 31C42 31 35 34 31 42Z"/>',
    pitka: '<path d="M32 43C33 27 43 22 51 22C61 22 68 29 68 43C63 33 56 29 47 31C41 32 36 36 32 43Z"/>',
    kihara: '<path d="M32 40C34 28 43 24 50 24C58 24 66 28 68 40C63 34 57 31 50 31C43 31 37 34 32 40Z"/>',
    kalju: '<path d="M32 50C31 40 33 35 36 33L37.5 50Z"/><path d="M68 50C69 40 67 35 64 33L62.5 50Z"/>',
    lyhyt: '<path d="M33 41C32 27 42 22 50 22C59 22 68 27 67 41C64 33 58 30 50 30C42 30 36 33 33 41Z"/>',
    topete: '<path d="M33 41C32 31 36 27 42 26C38 18 42 7 55 5C66 4 73 9 71 14C64 11 57 14 56 23C63 25 68 31 67 41C64 34 58 31 50 31C42 31 36 34 33 41Z"/>',
    polkka: '<path d="M32 40C32 26 41 21 50 21C59 21 68 26 68 40C61 34 39 34 32 40Z"/>'
  };
  const SUUT = {
    hymy: '<path d="M44.5 55.5Q50 59.5 55.5 55.5" fill="none" stroke="#6b2f2f" stroke-width="1.6" stroke-linecap="round"/>',
    virne: '<path d="M45 56.5Q51 58.5 56 54" fill="none" stroke="#6b2f2f" stroke-width="1.6" stroke-linecap="round"/>',
    iso: '<path d="M44 54.5Q50 62 56 54.5Z" fill="#6b2f2f"/><path d="M45.6 55.1Q50 56.6 54.4 55.1" fill="none" stroke="#fff" stroke-width="1.2"/>',
    // 😐 Ilmeetön suora suu (Tottakain Hiisi, käyttäjä 16.10.2026).
    neutraali: '<path d="M45 56H55" fill="none" stroke="#6b2f2f" stroke-width="1.6" stroke-linecap="round"/>',
    // Harmaa suora suu (Uuno ja Eenok vaihe 3; omistaja 23.10.2026: ”straight not wavy”).
    harmaa: '<path d="M45 56H55" fill="none" stroke="#5e625f" stroke-width="1.7" stroke-linecap="round"/>'
  };
  /* Kasvojen mittasuhteet (Tottakai 23.10.2026, AV-076: Uuno ja Eenok; omistaja: ”Eyes just a little bit too far apart.
     Mouths just a bit too wide. … Like you barely notice, but somethings off”). Hahmon kentät (Kurssi.hahmoKuvat.<id>):
       silmavali  lisäväli kummallekin puolelle viewBox-yksikköinä (oletus 0 = nykyinen kuva; silmät 43,5 ja 56,5).
                  Kulmakarvat ja lasit (lasit, tummat-lasit, isot-lasit) seuraavat silmiä.
       suunLeveys suun (ja huulipunan) leveyden kerroin keskikohdan x = 50 ympäri (oletus 1 = nykyinen kuva).
       kulmaNakyvyys kulmakarvojen peittävyys 0–1 (oletus 1; 0 = ei kulmakarvoja). suuAlas = suun siirto alaspäin
                  viewBox-yksikköinä (oletus 0). Omistaja 23.10.2026: vaiheessa 3 ei kulmakarvoja, suu alempana ja leveämpi.
       poski      poskien väri (oletus punertava rgba(220,90,90,.18)); Uunolla ja Eenokilla vihertävän ruskea vaiheittain.
       aluspaita  V-kauluksen sisään näkyvä aluspaita (väri, esim. '#fff'); kaulus = V-kauluksen viivan väri (oletus
                  läpikuultava harmaa). Omistajan Uuno-kuva 23.10.2026.
     Oletusarvoilla kuva on merkki merkiltä sama kuin ennen. */
  const luku = v => String(+v.toFixed(2));
  // Polun vaakaskaalaus x = 50 ympäri: absoluuttiset M L Q C S T (x,y-parit) ja H; suhteelliset vain kertoimella.
  function leveaPolku(d, k) {
    if (k === 1) return d;
    let komento = '', i = 0;
    return d.replace(/([MLHVQCSTZmlhvqcstz])|(-?\d*\.?\d+)/g, (osuma, kirjain, numero) => {
      if (kirjain) { komento = kirjain; i = 0; return kirjain; }
      const v = parseFloat(numero), onX = /[Hh]/.test(komento) || (!/[Vv]/.test(komento) && i % 2 === 0);
      i++;
      if (!onX) return numero;
      return luku(komento === komento.toUpperCase() ? 50 + (v - 50) * k : v * k);
    });
  }
  const leveaSuu = (svg, k) => (k === 1 ? svg : svg.replace(/ d="([^"]+)"/g, (m, d) => ` d="${leveaPolku(d, k)}"`));
  function vaalea(vari) {
    const n = parseInt(vari.slice(1), 16);
    return ((n >> 16) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000 > 150;
  }

  /* Kapybaran ja Manaatin aurinkolasit (käyttäjän mallikuvat 17.10.2026): 'avaruus' (vihreät alien-lasit),
     'kolmio' (epäsymmetriset neonvihreä + pinkki), 'kapea' (kapeat tummanpunaiset), 'visiiri' (keltainen yksiosainen
     visiiri). Piirretty kapybaran kehykseen (linssien keskikohta 50,42, leveys n. 60); Manaatille sama pienennettynä.
     Oletuksena hahmoilla on alkuperäiset lasit (käyttäjä 17.10.2026); nämä ovat varalla, esim. mandariineilla
     ostettaviksi. Hahmon kenttä lasit: 'avaruus' | 'kolmio' | 'kapea' | 'visiiri' vaihtaa mallin. */
  function aurinkolasit(tyyli, leike) {
    const kiilto = (a, b) => `<path d="${a}" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".55"/>` +
      (b ? `<path d="${b}" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".55"/>` : '');
    const sangat = vari => `<path d="M20 37.5L13 33M80 37.5L87 33" stroke="${vari}" stroke-width="2.2" stroke-linecap="round"/>`;
    const liuku = (id, a, b, c) => `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/>` +
      `<stop offset=".55" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></linearGradient>`;
    if (tyyli === 'avaruus') {
      const linssi = 'M44.5 47.5Q42 51.5 36.5 50.5Q24 47.5 20.5 36.5Q19.5 31 26.5 31Q38 32 44 40Q47 44 44.5 47.5Z';
      return `<defs>${liuku(leike + 'a', '#2b2350', '#4b3f9a', '#8f7cf0')}</defs>` + sangat('#3fae2e') +
        `<path d="${linssi}" fill="url(#${leike}a)" stroke="#3fae2e" stroke-width="3" stroke-linejoin="round"/>` +
        `<path d="${linssi}" transform="matrix(-1 0 0 1 100 0)" fill="url(#${leike}a)" stroke="#3fae2e" stroke-width="3" stroke-linejoin="round"/>` +
        `<path d="M44 41Q50 37.5 56 41" fill="none" stroke="#3fae2e" stroke-width="3" stroke-linecap="round"/>` +
        kiilto('M26 36L31 42', 'M57 41L61 45');
    }
    if (tyyli === 'kolmio') {
      return `<defs>${liuku(leike + 'a', '#1a1a1a', '#2b2b2b', '#5a5a5a')}</defs>` + sangat('#8ee52a') +
        `<path d="M17 47.5L48.5 26.5Q51 26 51.5 29L52.5 43.5Q46 50.5 35 50.5Z" fill="#9bf02e" stroke="#6fbf1a" stroke-width="1"/>` +
        `<path d="M24 46L45.5 33.5L46.5 43.5Q42 47.5 34 47.5Z" fill="url(#${leike}a)"/>` +
        `<path d="M51.5 42Q66 37.5 83 33.5Q81 46 70.5 49Q58 51.5 52.5 46.5Z" fill="#ff47a8" stroke="#d92f88" stroke-width="1"/>` +
        `<path d="M56 43.5Q67 40.5 77.5 38Q75.5 45 68.5 46.8Q60 48.3 56 45.5Z" fill="url(#${leike}a)"/>` +
        kiilto('M30 44L38 39', 'M61 44L69 41.5');
    }
    if (tyyli === 'kapea') {
      return `<defs>${liuku(leike + 'a', '#8a1c22', '#4a0c10', '#2a0608')}</defs>` + sangat('#5a1015') +
        `<rect x="20" y="35.5" width="60" height="11" rx="2.5" fill="url(#${leike}a)" stroke="#3a070a" stroke-width="1"/>` +
        `<rect x="24.5" y="39" width="20" height="4.2" rx="1.6" fill="#141012"/><rect x="55.5" y="39" width="20" height="4.2" rx="1.6" fill="#141012"/>` +
        `<path d="M22 37.5H78" stroke="#c0545a" stroke-width=".8" opacity=".6"/>`;
    }
    if (tyyli === 'visiiri') {
      return `<defs>${liuku(leike + 'a', '#3a2f3a', '#120e14', '#4a3a5a')}</defs>` + sangat('#f2d21b') +
        `<path d="M18 38Q50 32.5 82 38V44.5Q50 50 18 44.5Z" fill="url(#${leike}a)" stroke="#f2d21b" stroke-width="3" stroke-linejoin="round"/>` +
        kiilto('M27 41.5Q38 38.5 47 38.5');
    }
    /* Saaren kaupan lasit (Tottakai, tottakai/assets/saari.js; pomojen neljä mallia yllä pysyvät pomoille):
       'sydan' (sydänlasit, punainen) ja 'peili' (pisaranmuotoiset peililasit, kultasangat). */
    if (tyyli === 'sydan') {
      const sydan = cx => `M${cx} 50C${cx - 17} 41 ${cx - 11} 28 ${cx} 35.5C${cx + 11} 28 ${cx + 17} 41 ${cx} 50Z`;
      return `<defs>${liuku(leike + 'a', '#ff7aa2', '#e2365f', '#9c1340')}</defs>` + sangat('#b0174a') +
        `<path d="${sydan(34.5)}" fill="url(#${leike}a)" stroke="#7a0f33" stroke-width="1.5" stroke-linejoin="round"/>` +
        `<path d="${sydan(65.5)}" fill="url(#${leike}a)" stroke="#7a0f33" stroke-width="1.5" stroke-linejoin="round"/>` +
        `<path d="M46 37.5Q50 35.5 54 37.5" fill="none" stroke="#7a0f33" stroke-width="2" stroke-linecap="round"/>` +
        kiilto('M27 38L30 42', 'M58 38L61 42');
    }
    if (tyyli === 'peili') {
      const linssi = 'M21.5 36.5Q21.5 33 26 33H44.5Q48.5 33 48 37.5Q47 50.5 35.5 50.5Q22.5 50 21.5 36.5Z';
      return `<defs>${liuku(leike + 'a', '#e6f4ff', '#6aa8e8', '#9d7ee0')}</defs>` + sangat('#d4a73a') +
        `<path d="${linssi}" fill="url(#${leike}a)" stroke="#d4a73a" stroke-width="1.6" stroke-linejoin="round"/>` +
        `<path d="${linssi}" transform="matrix(-1 0 0 1 100 0)" fill="url(#${leike}a)" stroke="#d4a73a" stroke-width="1.6" stroke-linejoin="round"/>` +
        `<path d="M47.5 36Q50 34 52.5 36M44 33H56" fill="none" stroke="#d4a73a" stroke-width="1.6" stroke-linecap="round"/>` +
        `<path d="M24 41L46 37.5M54 37.5L76 41" stroke="#fff" stroke-width="2" opacity=".55"/>` +
        kiilto('M27 45L31 47.5', 'M59 45L63 47.5');
    }
    // Kultalasit (Tottakai, ensimmäinen kultamitali, omistaja 18.10.2026): pyöreät kultasankaiset, kullanruskeat linssit.
    if (tyyli === 'kulta') {
      return `<defs>${liuku(leike + 'a', '#fff2b0', '#e2b53a', '#9a6b12')}${liuku(leike + 'b', '#6b4a10', '#2e2008', '#5a3f0e')}</defs>` + sangat('#d9a521') +
        `<circle cx="34.5" cy="41" r="10.5" fill="url(#${leike}b)" stroke="url(#${leike}a)" stroke-width="3"/>` +
        `<circle cx="65.5" cy="41" r="10.5" fill="url(#${leike}b)" stroke="url(#${leike}a)" stroke-width="3"/>` +
        `<path d="M45 39Q50 36 55 39" fill="none" stroke="#d9a521" stroke-width="2.4" stroke-linecap="round"/>` +
        kiilto('M28.5 37L32 34.5', 'M59.5 37L63 34.5');
    }
    return '';
  }

  /* Saaren kaupan asut (Tottakai, tottakai/assets/saari.js): h.asu = { paita: 'cruzeiro' | 'havaiji', pipo: true }.
     Paita piirretään vartalon päälle ennen päätä (pää peittää kauluksen), pipo ennen kapybaran mandariinia (mandariini
     jää pipon päälle tupsuksi). Cruzeiro: sininen paita, valkoinen kaulus ja viisi pientä tähteä (Etelän risti), ei logoa. */
  const tahti = (x, y, r) => {
    const p = [];
    for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, s = i % 2 ? r * 0.45 : r; p.push(`${(x + s * Math.cos(a)).toFixed(1)} ${(y + s * Math.sin(a)).toFixed(1)}`); }
    return `<path d="M${p.join('L')}Z" fill="#fff"/>`;
  };
  function asuPaita(asu, vartalo, kaulusY) {
    if (!asu || !asu.paita) return '';
    if (asu.paita === 'cruzeiro') {
      return `<path d="${vartalo}" fill="#1d4fb8"/>` +
        `<path d="M14 98Q17 88 24 82M86 98Q83 88 76 82" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>` +
        `<path d="M40 ${kaulusY}L50 ${kaulusY + 11}L60 ${kaulusY}" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>` +
        [[29, 85, 2.3], [29, 96, 2.3], [24.5, 90, 2], [33.5, 91, 2], [31.5, 94, 1.4]].map(([x, y, r]) => tahti(x, y, r)).join('');
    }
    if (asu.paita === 'havaiji') return `<path d="${vartalo}" fill="#f39a1e"/>` + HAVAIJI;
    // Kultainen paita (Tottakai, kolme kultamitalia): kulta ja kaksi kiiltoraitaa.
    if (asu.paita === 'kulta') {
      return `<path d="${vartalo}" fill="#e2b53a"/>` +
        '<path d="M22 100L34 80M64 100L78 82" stroke="#fff3b8" stroke-width="3" stroke-linecap="round" opacity=".7"/>' +
        `<path d="M40 ${kaulusY}L50 ${kaulusY + 11}L60 ${kaulusY}" fill="none" stroke="#9a6b12" stroke-width="3" stroke-linejoin="round"/>`;
    }
    return '';
  }
  const PIPO = {
    kapybara: '<path d="M26.5 31Q26 11.5 50 10.5Q74 11.5 73.5 31Z" fill="#e2574c"/>' +
      '<path d="M34 14V27M42 11.5V27M50 11V27M58 11.5V27M66 14V27" stroke="#c13d33" stroke-width="1.4"/>' +
      '<rect x="24" y="24" width="52" height="9" rx="4.5" fill="#fbfaf6"/><path d="M29 28.5H71" stroke="#e2ddd2" stroke-width="1.2" stroke-dasharray="2 2"/>',
    manaatti: '<path d="M23 34Q22.5 12 50 11Q77.5 12 77 34Z" fill="#e2574c"/>' +
      '<path d="M32 15V29M41 12V29M50 11.5V29M59 12V29M68 15V29" stroke="#c13d33" stroke-width="1.4"/>' +
      '<rect x="21" y="27" width="58" height="9" rx="4.5" fill="#fbfaf6"/><path d="M26 31.5H74" stroke="#e2ddd2" stroke-width="1.2" stroke-dasharray="2 2"/>' +
      '<circle cx="50" cy="10" r="5" fill="#fbfaf6"/>'
  };
  const asuPipo = (asu, laji) => (asu && asu.pipo ? PIPO[laji] : '');

  /* Kapybara (kertoja): viisas vanha kapybara todella siisteissä aurinkolaseissa. Harmaat kulmat ja parta kertovat iästä,
     kultaketju ja lasien heijastus tyylistä. h.lasit vaihtaa lasit (aurinkolasit()). */
  function kapybara(h, leike) {
    const turkki = h.turkki || '#9c6a3e', tumma = h.tumma || '#7a4f2e';
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<clipPath id="${leike}"><circle cx="50" cy="50" r="50"/></clipPath>` +
      `<g clip-path="url(#${leike})"><rect width="100" height="100" fill="${h.tausta || '#efe3c6'}"/>` +
      `<path d="M8 104C10 78 28 69 50 69C72 69 90 78 92 104Z" fill="${tumma}"/>` +
      asuPaita(h.asu, 'M8 104C10 78 28 69 50 69C72 69 90 78 92 104Z', 70) +
      `<path d="M36 78Q50 90 64 78" fill="none" stroke="#e2b13c" stroke-width="2.2"/><circle cx="50" cy="86" r="3.2" fill="#e2b13c"/>` +
      `<ellipse cx="31" cy="21" rx="5" ry="4" fill="${tumma}"/><ellipse cx="69" cy="21" rx="5" ry="4" fill="${tumma}"/>` +
      `<path d="M29 22Q50 13 71 22Q79 42 77 62Q75 81 50 81Q25 81 23 62Q21 42 29 22Z" fill="${turkki}"/>` +
      `<path d="M34 26l2 4M42 21l1 4M58 21l-1 4M66 26l-2 4" stroke="${tumma}" stroke-width="1.2" stroke-linecap="round" opacity=".6"/>` +
      `<path d="M27 52Q27 46 34 46H66Q73 46 73 52V68Q73 80 50 80Q27 80 27 68Z" fill="${tumma}"/>` +
      `<ellipse cx="41" cy="53.5" rx="3.6" ry="2.2" fill="#2e1b0e"/><ellipse cx="59" cy="53.5" rx="3.6" ry="2.2" fill="#2e1b0e"/>` +
      `<path d="M50 56V63M44 65Q50 68.5 56 65" fill="none" stroke="#2e1b0e" stroke-width="1.6" stroke-linecap="round"/>` +
      `<path d="M43 72Q50 83 57 72Q50 76 43 72Z" fill="#d8d2c6"/>` +
      `<path d="M30 31Q36 28 42 30.5M58 30.5Q64 28 70 31" fill="none" stroke="#d8d2c6" stroke-width="2.4" stroke-linecap="round"/>` +
      asuPipo(h.asu, 'kapybara') +
      `<circle cx="50" cy="12" r="7" fill="#f39a1e"/><circle cx="48" cy="10" r="1.6" fill="#ffd27a"/>` +
      `<path d="M50 5.5Q55 1 59 4Q55 7.5 50 5.5Z" fill="#3f8f3a"/>` +
      (h.lasit ? aurinkolasit(h.lasit, leike) :
        `<defs><linearGradient id="${leike}l" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b4a6b"/>` +
        `<stop offset=".45" stop-color="#0d0f14"/><stop offset=".55" stop-color="#1c1030"/><stop offset="1" stop-color="#7a2d6b"/></linearGradient></defs>` +
        `<path d="M20 35H80V39Q80 48.5 69 48.5H59.5Q54.5 48.5 53.2 41.5H46.8Q45.5 48.5 40.5 48.5H31Q20 48.5 20 39Z" fill="url(#${leike}l)" stroke="#0a0a0a" stroke-width="1.2"/>` +
        `<path d="M25 38L30 45M29 37.5L33 43M60 38L65 45M64 37.5L68 43" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".55"/>` +
        `<path d="M20 36.5L13 33M80 36.5L87 33" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round"/>`) +
      `</g></svg>`;
  }

  /* Manaatti (kertojan kaveri, läksyjen ja visojen vastaava): laiska vanha manaatti äärimmäisen siisteissä
     pisaralaseissa ja havaijipaidassa. Nokoset kesken (z z). h.lasit vaihtaa lasit (aurinkolasit()). */
  function manaatti(h, leike) {
    const iho = h.iho || '#8e9ba3', kuono = h.kuono || '#aab5bb';
    const kukat = [[24, 90], [38, 96], [62, 95], [77, 89], [31, 82], [70, 81]]
      .map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="3.2" fill="${i % 2 ? '#ffd166' : '#fff'}"/><circle cx="${x}" cy="${y}" r="1.1" fill="#e2574c"/>`).join('');
    const pisteet = [[38, 62], [42, 66], [46, 63], [54, 63], [58, 66], [62, 62], [40, 69], [60, 69]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".8" fill="#5b666c"/>`).join('');
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<clipPath id="${leike}"><circle cx="50" cy="50" r="50"/></clipPath>` +
      `<g clip-path="url(#${leike})"><rect width="100" height="100" fill="${h.tausta || '#bfe3e6'}"/>` +
      `<path d="M0 70Q25 64 50 70T100 70V100H0Z" fill="#9fd3d8" opacity=".6"/>` +
      `<path d="M6 106C8 82 28 74 50 74C72 74 92 82 94 106Z" fill="${h.paita || '#2a9d8f'}"/>${kukat}` +
      asuPaita(h.asu, 'M6 106C8 82 28 74 50 74C72 74 92 82 94 106Z', 75) +
      `<path d="M40 74L50 84L60 74" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="1.5"/>` +
      `<ellipse cx="50" cy="50" rx="31" ry="27" fill="${iho}"/>` +
      `<path d="M34 30Q42 27 50 28M44 25Q52 23 60 26" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="1.4" stroke-linecap="round"/>` +
      `<ellipse cx="50" cy="63" rx="21" ry="14" fill="${kuono}"/>` +
      `<path d="M43 55.5q2-2 4 0M53 55.5q2-2 4 0" fill="none" stroke="#3d464b" stroke-width="1.5" stroke-linecap="round"/>` + pisteet +
      `<path d="M45 73Q50 75.5 55 73" fill="none" stroke="#3d464b" stroke-width="1.5" stroke-linecap="round"/>` +
      asuPipo(h.asu, 'manaatti') +
      (h.lasit ? `<g transform="rotate(-7 50 44) translate(50 44.5) scale(.8) translate(-50 -42)">${aurinkolasit(h.lasit, leike)}</g>` :
        `<defs><linearGradient id="${leike}l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff9a3c"/>` +
        `<stop offset=".5" stop-color="#e2456b"/><stop offset="1" stop-color="#5a2a8a"/></linearGradient></defs>` +
        `<g transform="rotate(-7 50 44)"><path d="M27 41Q27 37 33 37H45.5Q49 37 48.5 41Q47.5 51.5 38 51.5Q28 51.5 27 41Z" fill="url(#${leike}l)" stroke="#d4a73a" stroke-width="1.6"/>` +
        `<path d="M73 41Q73 37 67 37H54.5Q51 37 51.5 41Q52.5 51.5 62 51.5Q72 51.5 73 41Z" fill="url(#${leike}l)" stroke="#d4a73a" stroke-width="1.6"/>` +
        `<path d="M48.5 39.5Q50 38 51.5 39.5M45 37H55M27.5 39L19 37M72.5 39L81 37" fill="none" stroke="#d4a73a" stroke-width="1.6" stroke-linecap="round"/>` +
        `<path d="M31 40L35 46M58 40L62 46" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity=".6"/></g>`) +
      `<text x="71" y="27" font-family="Georgia,serif" font-size="11" font-weight="700" fill="#2b5c6b">z</text>` +
      `<text x="79" y="19" font-family="Georgia,serif" font-size="7.5" font-weight="700" fill="#2b5c6b">z</text>` +
      `</g></svg>`;
  }

  /* Havaijipaidan kukat (Manaattilassa havaijipaita on pakollinen, käyttäjän päätös 16.10.2026). */
  const HAVAIJI = '<g>' + [[22, 92], [36, 98], [50, 90], [64, 98], [78, 92], [30, 82], [70, 82]]
    .map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="3.4" fill="${['#fff', '#ffd166', '#e2574c'][i % 3]}"/><circle cx="${x}" cy="${y}" r="1.2" fill="${i % 3 === 2 ? '#ffd166' : '#e2574c'}"/>`)
    .join('') + '<path d="M26 87q4-3 7 0M58 86q4-3 7 0M44 96q4-3 7 0" fill="none" stroke="#2d6a4f" stroke-width="1.6" stroke-linecap="round"/></g>';
  const lisaaHavaiji = svg => svg.replace(/<\/g><\/svg>$/, HAVAIJI + '</g></svg>');
  /* Mandariini päälaella (Kapybaran kylpylässä pakollinen). */
  const MANDARIINI = '<circle cx="50" cy="13" r="7.5" fill="#f39a1e"/><circle cx="47.8" cy="10.8" r="1.7" fill="#ffd27a"/>' +
    '<path d="M50 6Q55 1.5 59 4.5Q55 8 50 6Z" fill="#3f8f3a"/>';
  const lisaaMandariini = svg => svg.replace(/<\/g><\/svg>$/, MANDARIINI + '</g></svg>');

  /* Palauttaa SVG-merkkijonon. Tuntematon hahmo: neutraali siluetti, jotta sivu ei hajoa.
     valinnat.havaiji: kukkakuvio paitaan (Manaattila).
     valinnat.lasit: 'avaruus' | 'kolmio' | 'kapea' | 'visiiri' = aurinkolasit() tälle kuvalle (myös ihmiselle: Tottakain
     pomotaistelussa Maia saa kaksikon lasit, tottakai/assets/pomo.js). valinnat.vinossa: lasit vinossa ja suu auki
     (tyrmätty, koominen; vain ihmisen kuvassa). valinnat.asu: Tottakain saaren asu kapybaralle ja manaatille
     ({ paita: 'cruzeiro' | 'havaiji', pipo }, asuPaita). */
  function muotokuva(id, valinnat = {}) {
    const laji = ((K.hahmoKuvat || {})[id] || {}).laji;
    const lasiValinnat = valinnat.lasit || valinnat.asu ? { lasit: valinnat.lasit, vinossa: valinnat.vinossa, asu: valinnat.asu } : {};
    if (valinnat.havaiji && laji !== 'manaatti') return lisaaHavaiji(muotokuva(id, lasiValinnat));
    if (valinnat.mandariini && laji !== 'kapybara') return lisaaMandariini(muotokuva(id, lasiValinnat));
    if (valinnat.kuva) {
      // Kasvokuva suoraan annetuista tiedoista (retrato falado: assets/komponentit.js).
      const vanha = K.hahmoKuvat.__kuva;
      K.hahmoKuvat.__kuva = valinnat.kuva;
      const svg = muotokuva('__kuva');
      if (vanha) K.hahmoKuvat.__kuva = vanha; else delete K.hahmoKuvat.__kuva;
      return svg;
    }
    if (valinnat.ohita) {
      // Sovituskoppi: hahmon paidan ja lippiksen värin vaihto (assets/komponentit.js provador).
      const alku = (K.hahmoKuvat || {})[id] || {};
      const h2 = Object.assign({}, alku, valinnat.ohita.paita ? { paita: valinnat.ohita.paita } : {});
      if (valinnat.ohita.lippis) {
        h2.lisat = [...new Set([...(alku.lisat || []).filter(x => x !== 'aurinkolasit'), 'lippis'])];
        h2.lippis = valinnat.ohita.lippis;
      }
      const vanha = K.hahmoKuvat[id];
      K.hahmoKuvat[id] = h2;
      let svg = muotokuva(id);
      K.hahmoKuvat[id] = vanha;
      return svg;
    }
    const h0 = (K.hahmoKuvat || {})[id] || { iho: '#c9a58a', hiukset: '#555', tukka: 'lyhyt', paita: '#7a8a90', tausta: '#e3e8ea', ilme: 'hymy', lisat: [] };
    const h = valinnat.lasit || valinnat.asu ? Object.assign({}, h0, valinnat.lasit ? { lasit: valinnat.lasit } : {}, valinnat.asu ? { asu: valinnat.asu } : {}) : h0;
    if (h.laji === 'kapybara') return kapybara(h, 'hk' + (++idLaskuri));
    if (h.laji === 'manaatti') return manaatti(h, 'hk' + (++idLaskuri));
    const lisa = new Set(h.lisat || []);
    const leike = 'hk' + (++idLaskuri);
    const kulmat = vaalea(h.hiukset) ? '#8a6a3a' : h.hiukset;
    const sv = +h.silmavali || 0, suuK = +h.suunLeveys || 1;
    const vas = x => luku(x - sv), oik = x => luku(x + sv);   // vasemman ja oikean silmän puoli
    const osat = [
      `<clipPath id="${leike}"><circle cx="50" cy="50" r="50"/></clipPath>`,
      `<g clip-path="url(#${leike})">`,
      `<rect width="100" height="100" fill="${h.tausta}"/>`,
      TUKAT_TAKA[h.tukka] ? `<g fill="${h.hiukset}">${TUKAT_TAKA[h.tukka]}</g>` : '',
      `<path d="M12 104C14 80 30 71 50 71C70 71 86 80 88 104Z" fill="${h.paita}"/>`,
      // Atlético Mineiron pelipaita: mustavalkoiset pystyraidat paidan muodon sisällä (Marcus, käyttäjä 16.10.2026).
      lisa.has('atletico') ? `<clipPath id="${leike}p"><path d="M12 104C14 80 30 71 50 71C70 71 86 80 88 104Z"/></clipPath>` +
        `<g clip-path="url(#${leike}p)" fill="#f4f4f4">${[17, 29, 41, 53, 65, 77].map(x => `<rect x="${x}" y="70" width="6" height="36"/>`).join('')}</g>` : '',
      h.aluspaita ? `<path d="M42 71L50 79L58 71Z" fill="${h.aluspaita}"/>` : '',
      `<path d="M42 71L50 79L58 71" fill="none" stroke="${h.kaulus || 'rgba(0,0,0,.25)'}" stroke-width="${h.kaulus ? 2.2 : 1.5}"/>`,
      `<rect x="44" y="57" width="12" height="15" fill="${h.iho}"/><rect x="44" y="57" width="12" height="15" fill="rgba(0,0,0,.12)"/>`,
      `<circle cx="33" cy="47" r="4" fill="${h.iho}"/><circle cx="67" cy="47" r="4" fill="${h.iho}"/>`,
      `<ellipse cx="50" cy="45" rx="17" ry="20" fill="${h.iho}"/>`,
      `<circle cx="40" cy="52" r="3" fill="${h.poski || 'rgba(220,90,90,.18)'}"/><circle cx="60" cy="52" r="3" fill="${h.poski || 'rgba(220,90,90,.18)'}"/>`,
      lisa.has('sanki') ? '<path d="M35 50C36 60 43 65 50 65C57 65 64 60 65 50C62 57 57 60 50 60C43 60 38 57 35 50Z" fill="rgba(120,90,50,.3)"/>' : '',
      `<circle cx="${vas(43.5)}" cy="46" r="1.9" fill="#1d1d1d"/><circle cx="${oik(56.5)}" cy="46" r="1.9" fill="#1d1d1d"/>`,
      `<path d="M${vas(39.5)} 41.5Q${vas(43.5)} 39.5 ${vas(47)} 41.2M${oik(53)} 41.2Q${oik(56.5)} 39.5 ${oik(60.5)} 41.5" fill="none" stroke="${kulmat}" stroke-width="1.4" stroke-linecap="round"${h.kulmaNakyvyys != null && +h.kulmaNakyvyys !== 1 ? ` stroke-opacity="${+h.kulmaNakyvyys}"` : ''}/>`,
      '<path d="M50 47Q48.5 51.5 50.5 52" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="1.2" stroke-linecap="round"/>',
      (+h.suuAlas ? `<g transform="translate(0 ${+h.suuAlas})">` : '') + leveaSuu(SUUT[valinnat.vinossa ? 'iso' : h.ilme] || SUUT.hymy, suuK) + (+h.suuAlas ? '</g>' : ''),
      lisa.has('viikset') ? `<path d="M43 53Q50 49.5 57 53Q50 55.5 43 53Z" fill="${h.hiukset}"/>` : '',
      lisa.has('esiliina') ? '<path d="M38 76H62V100H38Z" fill="#f4f1e8"/><path d="M38 76L33 72M62 76L67 72" stroke="#f4f1e8" stroke-width="2"/>' : '',
      // Farkkutakki valkoisella karvakauluksella (Tottakain Hiisi, käyttäjä 16.10.2026): tumma paita kauluksen välissä,
      // keskisauma, rintataskut oransseine tikkauksineen ja pörröinen kaulus palloista.
      lisa.has('farkkutakki') ? '<path d="M44 73L50 86L56 73Z" fill="#2b2b2b"/><path d="M50 86V104" stroke="rgba(0,0,0,.35)" stroke-width="1.4"/>' +
        '<g fill="none" stroke="#d9a441" stroke-width=".9" stroke-dasharray="1.6 1.2"><rect x="29" y="89" width="11" height="8" rx="1"/><rect x="60" y="89" width="11" height="8" rx="1"/></g>' +
        '<g fill="#fbfaf6" stroke="#e2ddd2" stroke-width=".5">' + [[34, 77, 4.6], [38.5, 73.5, 4.2], [43, 72, 3.6], [37.5, 82, 4.2], [42.5, 85.5, 3.6], [46.5, 81, 3.2],
          [66, 77, 4.6], [61.5, 73.5, 4.2], [57, 72, 3.6], [62.5, 82, 4.2], [57.5, 85.5, 3.6], [53.5, 81, 3.2]]
          .map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('') + '</g>' : '',
      lisa.has('stetoskooppi') ? '<path d="M40 72Q38 86 47 88Q56 90 56 80" fill="none" stroke="#444" stroke-width="1.8"/><circle cx="56" cy="79" r="2.6" fill="#888"/>' : '',
      lisa.has('tummat-lasit') ? `<g fill="#151515"><rect x="${vas(37)}" y="42" width="12" height="7" rx="3"/><rect x="${oik(51)}" y="42" width="12" height="7" rx="3"/></g><path d="M${vas(49)} 44.5L${oik(51)} 44.5M${vas(37)} 44L${vas(33)} 43M${oik(63)} 44L${oik(67)} 43" stroke="#151515" stroke-width="1.5"/><path d="M${vas(39)} 44L${vas(42)} 47M${oik(53)} 44L${oik(56)} 47" stroke="#fff" stroke-width="1" opacity=".5"/>` : '',
      lisa.has('isot-lasit') ? `<g fill="rgba(255,255,255,.15)" stroke="#111" stroke-width="2"><circle cx="${vas(42)}" cy="46" r="7.5"/><circle cx="${oik(58)}" cy="46" r="7.5"/><path d="M${vas(49.5)} 46L${oik(50.5)} 46M${vas(34.5)} 45L${vas(31)} 44M${oik(65.5)} 45L${oik(69)} 44"/></g>` : '',
      lisa.has('lasit') ? `<g fill="rgba(255,255,255,.18)" stroke="#333" stroke-width="1.4"><circle cx="${vas(43.5)}" cy="46" r="5.2"/><circle cx="${oik(56.5)}" cy="46" r="5.2"/><path d="M${vas(48.7)} 46L${oik(51.3)} 46"/></g>` : '',
      // valinnat.lasit: kapybaran kehykseen piirretyt aurinkolasit pienennettyinä ihmisen silmille (keskikohta 50,42 → 50,46).
      h.lasit ? `<g transform="${valinnat.vinossa ? 'rotate(18 50 46) translate(1.5 4) ' : ''}translate(50 46) scale(.56) translate(-50 -41.5)">${aurinkolasit(h.lasit, leike + 'l')}</g>` : '',
      TUKAT_ETU[h.tukka] ? `<g fill="${h.hiukset}">${TUKAT_ETU[h.tukka]}</g>` : '',
      lisa.has('harmaa') ? '<path d="M43 26C46 27.5 49 29.5 51 31.5" fill="none" stroke="#d9d9d9" stroke-width="3" stroke-linecap="round"/>' : '',
      lisa.has('lippis') ? `<path d="M32 37C33 24 42 19 50 19C59 19 67 24 68 37Z" fill="${h.lippis || '#c0392b'}"/><path d="M50 35C60 34 72 35 78 38C70 39.5 60 39.5 50 38Z" fill="${h.lippis || '#a32f23'}"/><path d="M50 35C60 34 72 35 78 38C70 39.5 60 39.5 50 38Z" fill="rgba(0,0,0,.18)"/>` : '',
      // Pikaruokalan lippa (Tottakai t04, käyttäjä 18.10.2026): sininen otsanauha ja lippa, punainen H valkoisella hehkulla.
      lisa.has('visiiri-h') ? '<path d="M33 33C35 28 42 26 50 26C58 26 65 28 67 33L67 37L33 37Z" fill="#1f4fa3"/><path d="M33 35C42 35 58 35 74 39C64 41 44 41 33 38Z" fill="#163d80"/>' +
        '<circle cx="50" cy="31.5" r="5" fill="#fff" opacity=".9"/><path d="M47.3 28.6V34.4M52.7 28.6V34.4M47.3 31.5H52.7" stroke="#d62b2b" stroke-width="1.9" stroke-linecap="square"/>' : '',
      // Leipurin kokinhattu (Tottakai t03, käyttäjä 18.10.2026): korkea valkoinen pöhö ja nauha.
      lisa.has('kokinhattu') ? '<g fill="#fbfaf6" stroke="#ddd8cc" stroke-width=".8"><circle cx="38" cy="14" r="9"/><circle cx="50" cy="9" r="10"/><circle cx="62" cy="14" r="9"/><path d="M33 16H67V31H33Z"/></g><path d="M33 26H67V32H33Z" fill="#efebe2" stroke="#ddd8cc" stroke-width=".8"/>' : '',
      lisa.has('aurinkolasit') ? '<g fill="#222"><rect x="37.5" y="24.5" width="11" height="6" rx="3"/><rect x="51.5" y="24.5" width="11" height="6" rx="3"/></g><path d="M48.5 27L51.5 27" stroke="#222" stroke-width="1.4"/>' : '',
      // Huulipuna (Tottakain WC+, omistaja 18.10.2026): punaiset huulet suun päälle.
      lisa.has('huulipuna') ? leveaSuu('<path d="M43.5 55.2Q47 53.4 50 54.6Q53 53.4 56.5 55.2Q53 58.6 50 58.6Q47 58.6 43.5 55.2Z" fill="#c2185b"/><path d="M44.5 55.4Q50 56.6 55.5 55.4" stroke="#7a0f3a" stroke-width=".7" fill="none"/>', suuK) : '',
      lisa.has('korvikset') ? '<circle cx="33" cy="53" r="1.8" fill="#e2b13c"/><circle cx="67" cy="53" r="1.8" fill="#e2b13c"/>' : '',
      lisa.has('kaulakoru') ? '<path d="M42 72Q50 80 58 72" fill="none" stroke="#e2b13c" stroke-width="1.2"/><circle cx="50" cy="77.5" r="1.7" fill="#e2b13c"/>' : '',
      lisa.has('maali') ? '<path d="M58.5 51.5q3-2 5 0q1 2-1 3q-3 1-4-3z" fill="#2b7fb5"/><circle cx="32" cy="88" r="2.2" fill="#2b7fb5"/><circle cx="36" cy="92" r="1.4" fill="#f2c94c"/><circle cx="66" cy="90" r="1.8" fill="#2f9e6e"/>' : '',
      lisa.has('leijona') ? '<circle cx="50" cy="90" r="7.5" fill="#c4610f"/><circle cx="50" cy="90" r="4.6" fill="#f2c06b"/><circle cx="48.4" cy="89.2" r=".7" fill="#333"/><circle cx="51.6" cy="89.2" r=".7" fill="#333"/>' : '',
      '</g>'
    ];
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${osat.join('')}</svg>`;
  }

  function avatar(id, luokka, valinnat) {
    if (!id || !(K.hahmoKuvat || {})[id]) return null;
    const s = el('span', { class: 'hahmokuva' + (luokka ? ' ' + luokka : ''), 'data-hahmo': id });
    s.innerHTML = muotokuva(id, valinnat);
    return s;
  }

  /* ---------- näyttämö: tausta vaihtuu lukukohdan mukaan ---------- */
  let nayttamo = null;
  function purkaNayttamo() {
    poistaKelluva();
    if (!nayttamo) return;
    window.removeEventListener('scroll', nayttamo.kuuntelija);
    window.removeEventListener('resize', nayttamo.kuuntelija);
    nayttamo.kerros.remove();
    document.body.classList.remove('on-nayttamo');
    nayttamo = null;
  }
  function rakennaNayttamo(juuri) {
    purkaNayttamo();
    const kohdat = $$('[data-paikka]', juuri).filter(e => kuva(e.dataset.paikka));
    if (!kohdat.length) return;
    const tasot = [el('div', { class: 'nayttamo-kuva' }), el('div', { class: 'nayttamo-kuva' })];
    const huntu = el('div', { class: 'nayttamo-huntu' });
    const merkki = el('div', { class: 'nayttamo-paikka', 'aria-live': 'polite' });
    const kerros = el('div', { class: 'nayttamo', 'aria-hidden': 'true' }, tasot[0], tasot[1], huntu);
    document.body.append(kerros);
    document.body.append(merkki);
    document.body.classList.add('on-nayttamo');
    let nyt = null, paalla = 0, odottaa = false;
    const vaihda = avain => {
      if (avain === nyt) return;
      nyt = avain;
      const k = kuva(avain);
      paalla = 1 - paalla;
      tasot[paalla].style.backgroundImage = `url("${k.src}")`;
      tasot[paalla].classList.add('nakyy');
      tasot[1 - paalla].classList.remove('nakyy');
      merkki.textContent = '';
      merkki.append(el('b', {}, k.paikka || k.alt || ''), el('span', {}, ` · ${T.kuva}: ${k.tekija}, ${k.lisenssi}`));
    };
    const paivita = () => {
      odottaa = false;
      if (!juuri.isConnected) { purkaNayttamo(); merkki.remove(); return; }
      const raja = window.innerHeight * 0.45;
      let valittu = kohdat[0];
      for (const e of kohdat) if (e.getBoundingClientRect().top < raja) valittu = e;
      vaihda(valittu.dataset.paikka);
    };
    const kuuntelija = () => { if (!odottaa) { odottaa = true; requestAnimationFrame(paivita); } };
    window.addEventListener('scroll', kuuntelija, { passive: true });
    window.addEventListener('resize', kuuntelija);
    nayttamo = { kerros: { remove() { kerros.remove(); merkki.remove(); } }, kuuntelija };
    paivita();
  }

  /* ---------- videopuhelu (enintään yksi ”sivun rikkova” osa oppituntia kohden) ---------- */
  function videopuhelu(paikka, o, apu) {
    const dialogi = document.getElementById(paikka.dataset.dialogi);
    if (!dialogi) return;
    const heidan = (paikka.dataset.heidan || '').split(',').filter(Boolean);
    const meidan = (paikka.dataset.meidan || '').split(',').filter(Boolean);
    const nimi = id => ((o.hahmot || {})[id] || {}).nimi || id;
    const luettelo = ids => { const n = ids.map(nimi); return n.length < 2 ? n.join('') : n.slice(0, -1).join(', ') + T.ja + n[n.length - 1]; };
    const soittaja = paikka.dataset.soittaja || luettelo(heidan);
    const avain = MUISTI + 'puhelu-' + o.id;

    const kortti = el('div', { class: 'puhelukortti' },
      el('span', { class: 'puhelukortti-kuvat' }, ...heidan.map(id => avatar(id))),
      el('span', { class: 'puhelukortti-teksti' }, el('small', {}, T.saapuva), el('b', { lang: KIELI }, soittaja)),
      el('button', { type: 'button', class: 'puhelu-vastaa' }, T.katso));
    paikka.append(kortti);
    kortti.querySelector('button').addEventListener('click', () => avaa(true));

    // Ensimmäisellä kerralla puhelu ”soi”, kun lukija on viipynyt dialogin kohdalla 1,5 sekuntia.
    if (!muisti.lue(avain) && 'IntersectionObserver' in window) {
      let ajastin = null;
      const io = new IntersectionObserver(m => {
        clearTimeout(ajastin);
        if (!m.some(x => x.isIntersecting)) return;
        ajastin = setTimeout(() => {
          if (!paikka.isConnected || document.querySelector('.vp')) return;
          io.disconnect(); muisti.kirjoita(avain, '1'); avaa(false);
        }, 1500);
      }, { threshold: 0.6 });
      io.observe(paikka);
    }

    function ruutu(ids, taustaAvain, aika, luokka) {
      const t = kuva(taustaAvain);
      return el('div', { class: 'vp-ruutu ' + luokka, style: t ? `background-image:url("${t.src}")` : null },
        el('div', { class: 'vp-henkilot' }, ...ids.map(id => { const a = avatar(id, 'vp-kasvo'); if (a) a.title = nimi(id); return a; })),
        el('div', { class: 'vp-tiedot' }, el('b', {}, luettelo(ids)), el('span', { lang: KIELI }, aika || '')));
    }

    function avaa(heti) {
      const kehys = el('div', { class: 'vp', role: 'dialog', 'aria-modal': 'true', 'aria-label': `${T.saapuva}: ${soittaja}` });
      const sulje = () => { window.Aani.pysayta(); document.removeEventListener('keydown', nappain); window.removeEventListener('hashchange', sulje); kehys.remove(); document.body.classList.remove('vp-auki'); };
      const nappain = e => { if (e.key === 'Escape') sulje(); };
      document.addEventListener('keydown', nappain);
      window.addEventListener('hashchange', sulje);   // reitin vaihto (esim. Takaisin-nappi) sulkee puhelun kuten pelit ja pomo (A6-22)
      document.body.classList.add('vp-auki');

      // 1. Soittoruutu
      const soitto = el('div', { class: 'vp-soitto' },
        el('div', { class: 'vp-soitto-kuvat' }, ...heidan.map(id => avatar(id, 'vp-iso'))),
        el('p', { class: 'vp-soittaja', lang: KIELI }, soittaja),
        el('p', { class: 'vp-soittaa' }, T.soittaa),
        el('div', { class: 'vp-soitto-napit' },
          el('button', { type: 'button', class: 'vp-pyorea vp-hylkaa', 'aria-label': T.hylkaa }, el('span', {}, T.hylkaa)),
          el('button', { type: 'button', class: 'vp-pyorea vp-ok', 'aria-label': T.vastaa }, el('span', {}, T.vastaa))));
      kehys.append(soitto);
      document.body.append(kehys);
      soitto.querySelector('.vp-hylkaa').addEventListener('click', sulje);
      soitto.querySelector('.vp-ok').addEventListener('click', () => { soitto.remove(); puhelu(); });
      soitto.querySelector('.vp-ok').focus();
      if (heti) { soitto.remove(); puhelu(); }

      // 2. Puhelu: dialogi soi, puhuja hehkuu, tekstitys alhaalla
      function puhelu() {
        const ruudut = el('div', { class: 'vp-ruudut' },
          ruutu(heidan, paikka.dataset.heidanTausta, paikka.dataset.heidanAika, 'vp-heidan'),
          ruutu(meidan, paikka.dataset.meidanTausta, paikka.dataset.meidanAika, 'vp-meidan'));
        const leima = el('div', { class: 'vp-leima', hidden: true });
        const tekstit = el('div', { class: 'vp-tekstit' });
        const fiNappi = el('button', { type: 'button', class: 'vp-pieni', 'aria-pressed': 'true' }, T.suomennos);
        const ajastin = el('span', { class: 'vp-aika' }, '00:00');
        const lopeta = el('button', { type: 'button', class: 'vp-pyorea vp-hylkaa', 'aria-label': T.lopeta }, el('span', {}, T.lopeta));
        const yla = el('div', { class: 'vp-yla' }, el('b', { lang: KIELI }, soittaja), ajastin, fiNappi);
        const ala = el('div', { class: 'vp-ala' }, tekstit, el('div', { class: 'vp-napit' }, lopeta));
        kehys.append(yla, ruudut, leima, ala);
        fiNappi.addEventListener('click', () => {
          const p = fiNappi.getAttribute('aria-pressed') !== 'true';
          fiNappi.setAttribute('aria-pressed', String(p));
          kehys.classList.toggle('vp-ei-fi', !p);
        });
        lopeta.addEventListener('click', sulje);
        lopeta.focus();
        const alku = Date.now();
        const kello = setInterval(() => {
          if (!kehys.isConnected) return clearInterval(kello);
          const s = Math.floor((Date.now() - alku) / 1000);
          ajastin.textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
        }, 500);

        const rivit = $$('.s', dialogi);
        const jono = rivit.map(s => {
          const lause = (s.querySelector('.lause') || s).textContent.trim();
          const rivi = el('div', { class: 'vp-rivi', 'data-h': s.dataset.h || '' },
            el('b', {}, s.dataset.h && s.dataset.h !== 'kertoja' ? nimi(s.dataset.h) : ''),
            el('span', { class: 'vp-pt', lang: KIELI }, lause),
            el('span', { class: 'vp-fi' }, s.dataset[KAANNOS] || ''));
          if (s.dataset.hairio) rivi.dataset.hairio = s.dataset.hairio;
          tekstit.append(rivi);
          return Object.assign(apu.alkio(s), { el: rivi });
        });
        // Puhujan vaihtuminen näkyy, kun ääni merkitsee rivin soivaksi (luokka soi).
        const seuraaja = new MutationObserver(() => {
          const soi = tekstit.querySelector('.vp-rivi.soi');
          $$('.vp-kasvo', kehys).forEach(a => a.classList.toggle('puhuu', !!soi && a.dataset.hahmo === soi.dataset.h));
          kehys.classList.toggle('vp-kertoja', !!soi && !heidan.concat(meidan).includes(soi.dataset.h));
          if (soi && soi.dataset.hairio) {
            leima.hidden = false;
            leima.textContent = soi.dataset.hairio;
            ruudut.classList.add('vp-hairio');
            setTimeout(() => ruudut.classList.remove('vp-hairio'), 1400);
          } else if (soi && !soi.previousElementSibling?.dataset.hairio) leima.hidden = true;
        });
        seuraaja.observe(tekstit, { subtree: true, attributes: true, attributeFilter: ['class'] });
        window.Aani.soita(jono, {
          ohjain: {
            alku() {},
            loppu() {
              seuraaja.disconnect();
              if (!kehys.isConnected) return;
              const loppu = el('div', { class: 'vp-loppu' }, el('p', {}, T.paattyi),
                el('div', { class: 'vp-soitto-napit' },
                  el('button', { type: 'button', class: 'vp-pieni', 'data-t': 'uudelleen' }, T.uudelleen),
                  el('button', { type: 'button', class: 'vp-pieni', 'data-t': 'sulje' }, T.sulje)));
              kehys.append(loppu);
              loppu.querySelector('[data-t="sulje"]').addEventListener('click', sulje);
              loppu.querySelector('[data-t="uudelleen"]').addEventListener('click', () => { sulje(); avaa(true); });
              loppu.querySelector('[data-t="sulje"]').focus();
            }
          }
        });
      }
    }
  }

  /* ---------- puhelimen näppäimistö: kuuntele numero ja näppäile ---------- */
  function nappaimisto(n, o, apu) {
    const oikea = (n.dataset.numero || '').replace(/\D/g, '');
    const nimet = n.dataset.nimet ? n.dataset.nimet.split(',') : null;   // numeroiden nimet kohdekielellä 0–9
    const naytto = el('div', { class: 'np-naytto', 'aria-live': 'polite' });
    const palaute = el('p', { class: 'np-palaute' });
    let syote = '';
    const piirra = () => { naytto.textContent = syote || '·'; };
    const nappi = (merkki, nimi) => {
      const b = el('button', { type: 'button', class: 'np-nappi' }, el('b', {}, merkki), nimi ? el('small', { lang: KIELI }, nimi) : null);
      b.addEventListener('click', () => {
        if (syote.length >= 15) return;
        syote += merkki; piirra(); palaute.textContent = '';
        if (nimi) window.Aani.soita([{ teksti: nimi, tyyppi: 'kertoja', el: b }]);
      });
      return b;
    };
    const ruudukko = el('div', { class: 'np-ruudukko' });
    for (const m of ['1', '2', '3', '4', '5', '6', '7', '8', '9']) ruudukko.append(nappi(m, nimet && nimet[+m]));
    const pyyhi = el('button', { type: 'button', class: 'np-nappi np-toiminto', 'aria-label': T.pyyhi }, '⌫');
    pyyhi.addEventListener('click', () => { syote = syote.slice(0, -1); piirra(); });
    ruudukko.append(pyyhi, nappi('0', nimet && nimet[0]));
    const tarkista = el('button', { type: 'button', class: 'np-nappi np-toiminto np-ok', 'aria-label': T.tarkista }, '✓');
    tarkista.addEventListener('click', () => {
      const ok = syote === oikea;
      palaute.textContent = ok ? T.oikein : T.vaarin;
      palaute.className = 'np-palaute ' + (ok ? 'oikein' : 'vaarin');
      tarkista.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: { tulos: ok ? 'oikein' : 'vaarin' } }));
    });
    ruudukko.append(tarkista);
    const kuuntele = el('button', { type: 'button', class: 'np-kuuntele' }, '▶ ' + T.kuuntele);
    kuuntele.addEventListener('click', () => {
      const s = el('span');
      s.dataset.puhu = n.dataset.puhu;
      s.dataset.h = n.dataset.h || '';
      window.Aani.soita([Object.assign(apu.alkio(s), { el: kuuntele })]);
    });
    const kuvaH = avatar(n.dataset.h, 'np-soittaja');
    n.append(el('div', { class: 'np-puhelin' },
      el('div', { class: 'np-yla' }, kuvaH, el('span', {}, ((o.hahmot || {})[n.dataset.h] || {}).nimi || '')),
      naytto, kuuntele, ruudukko, palaute));
    piirra();
  }

  /* ---------- oppijan oma lomake: kentät tallentuvat selaimeen ---------- */
  function omaLomake(f) {
    const avain = MUISTI + 'lomake-' + f.dataset.tallenna;
    let arvot = {};
    try { arvot = JSON.parse(muisti.lue(avain) || '{}'); } catch (e) { arvot = {}; }
    $$('input, textarea', f).forEach((i, n) => {
      const k = i.name || String(n);
      if (arvot[k]) i.value = arvot[k];
      i.addEventListener('input', () => { arvot[k] = i.value; muisti.kirjoita(avain, JSON.stringify(arvot)); });
    });
    f.append(el('p', { class: 'ficha-tallennus' }, T.tallennettu));
  }

  /* ---------- apuhahmot: kurssin oppaat tietyissä osissa (Kurssi.apuhahmot, assets/hahmot.js) ----------
     Esim. { kotitehtava: { hahmo: 'manaatti', valitsin: '.kotitehtava', repliikit: [...] } }. Repliikki valitaan sivun
     osoitteen mukaan aina samaksi, jotta se ei vaihdu joka latauksella. */
  /* Kentät: hahmo, valitsin, otsikko (vain osiot, joiden h2 sisältää tämän tekstin), teema (luokka kohteelle, esim.
     manaattila), koko ('iso'), repliikit. Teeman sisällä kaikki hahmokuvat piirretään havaijipaidassa. */
  /* Harjoitusosio tunnistetaan rakenteesta, ei otsikon tekstistä (T15.8, A6-20 ”piilosopimus otsikossa”; Tottakai
     23.10.2026): section[data-ei-sivulle] on harjoitusosio, ellei siinä ole kotitehtävää (.kotitehtava: ”Para terminar”
     -osio, jolla on oma apuhahmonsa). Näin myös yksikön otsikot (”Exercício: …”) saavat apuhahmon. Muut valitsimet kuin
     section[data-ei-sivulle]: a.otsikko verrataan h2:n tekstiin kuten ennen. */
  function sopiiOsioon(k, a) {
    if (!a.otsikko) return true;
    if (k.matches('section[data-ei-sivulle]')) return !k.querySelector('.kotitehtava');
    return ((k.querySelector('h2') || {}).textContent || '').includes(a.otsikko);
  }
  function apuhahmot(juuri) {
    const kaikki = K.apuhahmot || {};
    const siemen = [...location.hash].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
    const sivu = (location.hash || '#etusivu').slice(1);
    for (const a of Object.values(kaikki)) {
      if (a.sivut && !new RegExp(a.sivut).test(sivu)) continue;
      if (a.eiSivut && new RegExp(a.eiSivut).test(sivu)) continue;
      $$(a.valitsin, juuri).filter(k => sopiiOsioon(k, a)).forEach((kohta, i) => {
        if (kohta.querySelector(':scope > .apuhahmo')) return;
        const kuva = avatar(a.hahmo, 'apuhahmo-kasvo');
        if (!kuva) return;
        const r = a.repliikit || [];
        const teksti = r.length ? r[(siemen + i) % r.length] : '';
        const nimi = ((K.hahmoKuvat || {})[a.hahmo] || {}).nimi || '';
        const hahmo = el('div', { class: 'apuhahmo' + (a.koko ? ' apuhahmo-' + a.koko : '') }, kuva,
          el('p', { class: 'apuhahmo-kupla' }, nimi ? el('b', {}, nimi + ': ') : null, teksti));
        const otsikko = a.otsikko && kohta.querySelector(':scope > h2');
        if (otsikko) otsikko.after(hahmo); else kohta.prepend(hahmo);
        if (a.teema) {
          kohta.classList.add(a.teema);
          if (otsikko && a.kyltti) otsikko.dataset.kyltti = a.kyltti;
          const asu = a.asu || 'havaiji';
          $$('.hahmokuva[data-hahmo]', kohta).forEach(h => { h.innerHTML = muotokuva(h.dataset.hahmo, { [asu]: true }); });
        }
        if (a.kelluva) kelluva(kohta, a);
      });
    }
  }

  /* ---------- kelluva apuhahmo (Manaattila): seuraa lukijaa osion läpi, kommentoi tuloksia ja miettii välillä ----------
     Näkyy oikeassa alakulmassa, kun osion alun iso hahmo on vierinyt ohi ja osiota on vielä jäljellä. Kuuntelee
     tapahtumaa passo:tulos (app.js ja komponentit). Repliikit: Kurssi.apuhahmot.<nimi>.palaute ja .mietteet. */
  let kelluvaTila = null;
  function poistaKelluva() {
    if (!kelluvaTila) return;
    const t = kelluvaTila;
    kelluvaTila = null;
    document.removeEventListener('passo:tulos', t.tulos);
    window.removeEventListener('scroll', t.kuuntelija);
    clearTimeout(t.puheAjastin); clearTimeout(t.miettiAjastin);
    t.k.remove();
  }
  function kelluva(kohta, a) {
    poistaKelluva();
    const valitse = l => (l && l.length) ? l[Math.floor(Math.random() * l.length)] : '';
    const P = a.palaute || {};
    const kupla = el('div', { class: 'kelluva-kupla', hidden: true, 'aria-live': 'polite' });
    const kuva = avatar(a.hahmo, 'kelluva-kasvo');
    const k = el('div', { class: 'kelluva-hahmo', hidden: true }, kupla, el('button', { type: 'button', class: 'kelluva-nappi', 'aria-label': T.kelluvaNappi }, kuva));
    document.body.append(k);
    const intro = kohta.querySelector(':scope > .apuhahmo');
    const tila = { k, puheAjastin: null, miettiAjastin: null, viimeksi: 0, puhuu: false };
    const puhu = (osat, kesto) => {
      kupla.replaceChildren(...osat);
      kupla.hidden = false; tila.puhuu = true; tila.viimeksi = Date.now();
      clearTimeout(tila.puheAjastin);
      tila.puheAjastin = setTimeout(() => { kupla.hidden = true; tila.puhuu = false; }, kesto);
    };
    const miete = () => puhu([el('span', { class: 'kelluva-miete' }, valitse(a.mietteet))], 9000);
    tila.tulos = e => {
      if (!kohta.contains(e.target) || k.hidden) return;
      const t = e.detail.tulos;
      const laji = t === 'oikein' ? 'ok' : t === 'osittain' ? 'osittain' : 'ei';
      const otsikko = t === 'osittain' ? `${e.detail.oikein}/${e.detail.yhteensa} ${T.oikeinPieni}` : valitse(P[t]) || (t === 'oikein' ? T.oikein : T.vaarinLyhyt);
      const osat = [el('b', { class: 'kelluva-' + laji }, otsikko)];
      const lisa = valitse(P[t === 'oikein' ? 'lisa_oikein' : 'lisa_vaarin']);
      if (lisa && Math.random() < (a.lisaOsuus || 0.35)) osat.push(el('span', {}, ' ' + lisa));
      puhu(osat, osat.length > 1 ? 7000 : 3500);
    };
    document.addEventListener('passo:tulos', tila.tulos);
    k.querySelector('.kelluva-nappi').addEventListener('click', miete);
    let odottaa = false;
    const paivita = () => {
      odottaa = false;
      if (!kohta.isConnected) return poistaKelluva();
      const r = kohta.getBoundingClientRect();
      const introOhi = intro ? intro.getBoundingClientRect().bottom < 70 : r.top < 0;
      k.hidden = !(introOhi && r.bottom > innerHeight * 0.4);
    };
    tila.kuuntelija = () => { if (!odottaa) { odottaa = true; requestAnimationFrame(paivita); } };
    window.addEventListener('scroll', tila.kuuntelija, { passive: true });
    // Mietteet satunnaisesti 50–120 sekunnin välein, vain jos hahmo näkyy eikä juuri puhunut.
    const ajoita = () => {
      tila.miettiAjastin = setTimeout(() => {
        if (!kohta.isConnected) return;
        if (!k.hidden && !tila.puhuu && Date.now() - tila.viimeksi > 20000 && Math.random() < 0.7) miete();
        ajoita();
      }, 50000 + Math.random() * 70000);
    };
    ajoita();
    kelluvaTila = tila;
    paivita();
  }

  /* Muut komponentit (assets/komponentit.js) rekisteröityvät tänne ja ajetaan jokaisella oppitunnilla. */
  const rekisteroidyt = [];
  function rekisteroi(f) { rekisteroidyt.push(f); }

  /* ---------- oppitunnin käsittely: app.js kutsuu valmistelun jälkeen ---------- */
  function oppitunti(juuri, o, apu) {
    $$('.ryhma[data-hahmot]', juuri).forEach(r => r.dataset.hahmot.split(',').forEach(id => { const a = avatar(id.trim(), 'ryhma-kasvo'); if (a) r.append(a); }));
    $$('.ficha-foto[data-hahmo]', juuri).forEach(f => { const a = avatar(f.dataset.hahmo); if (a) f.append(a); });
    $$('.dokumentti.oma[data-tallenna]', juuri).forEach(omaLomake);
    $$('.nappaimisto', juuri).forEach(n => nappaimisto(n, o, apu));
    // Puhekuplat valokuvassa: siirretään kuvan päälle omaan kehykseen.
    $$('figure.kuva', juuri).forEach(f => {
      const huudot = $$('.huuto', f);
      const img = f.querySelector('img');
      if (!huudot.length || !img) return;
      const alue = el('div', { class: 'kuva-alue' });
      img.replaceWith(alue);
      alue.append(img);
      huudot.forEach(h => {
        h.style.left = (h.dataset.x || 50) + '%';
        h.style.top = (h.dataset.y || 50) + '%';
        h.setAttribute('role', 'button');
        h.setAttribute('tabindex', '0');
        h.setAttribute('lang', KIELI);
        if (h.dataset[KAANNOS]) h.append(el('small', {}, h.dataset[KAANNOS]));
        const soita = () => {
          const s = el('span');
          s.dataset.puhu = h.dataset.puhu || [...h.childNodes].filter(n => n.nodeName !== 'SMALL').map(n => n.textContent).join('').replace(/\s+/g, ' ').trim();
          window.Aani.soita([{ teksti: s.dataset.puhu, tyyppi: h.dataset.aani || 'kertoja', vaihto: +(h.dataset.vaihto || 0), el: h }]);
        };
        h.addEventListener('click', soita);
        h.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); soita(); } });
        alue.append(h);
      });
    });
    $$('.videopuhelu[data-dialogi]', juuri).forEach(v => videopuhelu(v, o, apu));
    for (const f of rekisteroidyt) { try { f(juuri, o, apu); } catch (e) { console.error('kuvitus:', e); } }
    rakennaNayttamo(juuri);
  }

  window.Kuvitus = { muotokuva, avatar, aurinkolasit, oppitunti, apuhahmot, purkaNayttamo, rekisteroi, T };
})();
