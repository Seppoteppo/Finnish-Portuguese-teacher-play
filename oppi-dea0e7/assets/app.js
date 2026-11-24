/* Sivujen rakentaminen: navigointi, sisäkkäiset sanapuhekuplat, toistopainikkeet ja harjoitukset. */
(function () {
  'use strict';

  const K = window.Kurssi;
  const A = window.Aani;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const MAKS_FRAASI = 4;
  const KAANNOS_AVAIN = 'passo-a-passo-kaannokset';

  let nykyinenOppitunti = null;

  /* ---------- apurit ---------- */

  function el(tag, attrs, ...lapset) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === null || v === undefined || v === false) continue;
      e.setAttribute(k, v === true ? '' : v);
    }
    for (const l of lapset) if (l !== null && l !== undefined) e.append(l);
    return e;
  }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = s => s.toLowerCase().replace(/[.,!?;:"“”«»()¿¡…–—]/g, '').replace(/\s+/g, ' ').trim();

  /* ---------- ydinsanat: puhutun brasilianportugalin 1000 yleisintä sanaa (assets/ydinsanat.js) ---------- */
  const YDIN = new Map();
  (function () {
    const y = K.ydin || { sanat: [], puhekieli: [] };
    y.sanat.forEach(([s, fi, aihe, ipa, aa], i) => {
      const sija = i + 1;
      YDIN.set(s, { s, fi, aihe, ipa, aa, sija, taso: sija <= 100 ? 100 : sija <= 300 ? 300 : sija <= 500 ? 500 : 1000 });
    });
    y.puhekieli.forEach(([s, fi, aihe, ipa, aa, huom]) => {
      const vanha = YDIN.get(s);
      if (vanha) Object.assign(vanha, { fi, ipa, aa, huom, puhe: true });   // esim. né on myös Top 1000 -sana
      else YDIN.set(s, { s, fi, aihe, ipa, aa, huom, sija: 0, taso: 'puhe', puhe: true });
    });
    // Käsin tarkistettu ääntämys voittaa (CLAUDE.md): jos oppitunti määrittelee sanan, ydinsanalista käyttää sen ohjetta
    // ja IPA:ta, jotta sama sana kuulostaa ja näyttää samalta kaikilla sivuilla.
    for (const [s, v] of YDIN) {
      const k = K.sanasto[s];
      if (k && k.aa && k.ipa) Object.assign(v, { aa: k.aa, ipa: k.ipa });
    }
  })();
  const PUHEKIELI = (K.ydin ? K.ydin.puhekieli : []).map(r => r[0]);
  const AIHEET = {
    perus: 'perussana', tervehdys: 'tervehdykset ja kohteliaisuus', ihmiset: 'ihmiset ja perhe', aika: 'aika',
    paikka: 'paikka ja suunta', liike: 'liikkuminen', koti: 'koti ja arki', ruoka: 'ruoka ja juoma', tunteet: 'tunteet',
    viestinta: 'puhuminen ja viestintä', tyo: 'työ ja opiskelu', keho: 'keho ja terveys', luonto: 'luonto ja eläimet',
    numerot: 'numerot ja määrät', ominaisuus: 'ominaisuudet', toiminta: 'toiminta', ajattelu: 'ajattelu',
    vapaa: 'vapaa-aika', kaupunki: 'kaupunki ja liikenne', kysymys: 'kysymyssanat', raha: 'raha ja ostokset',
    puhekieli: 'puhekieli'
  };
  /* Espanjan vertailu (assets/espanja.js): [vastine, laji, huomautus, suomennos]. */
  const ESP = (K.espanja && K.espanja.sanat) || {};
  /* Taivutusmuoto perusmuodosta: monikko (-s, -es, -is → -l, -ns → -m, -ões/-ães → -ão) ja feminiini (-a → -o, -ora → -or,
     -esa → -ês). Käytetään vain, jos sanaa ei ole sanastossa sellaisenaan. Palauttaa [perusmuoto, selite]-pareja,
     jotta kupla kertoo, onko kyse monikosta vai feminiinistä. */
  function perusmuodot(s) {
    const t = new Map();
    const mon = [[/ões$/, 'ão'], [/ães$/, 'ão'], [/is$/, 'l'], [/ns$/, 'm'], [/es$/, ''], [/s$/, '']];
    const yks = [[s, '']];
    for (const [re, k] of mon) if (re.test(s)) yks.push([s.replace(re, k), 'monikko']);
    for (const [y, laji] of yks) {
      if (!t.has(y)) t.set(y, laji);
      const fem = laji ? 'feminiinin monikko' : 'feminiini';
      if (/ora$/.test(y) && !t.has(y.slice(0, -1))) t.set(y.slice(0, -1), fem);
      if (/esa$/.test(y) && !t.has(y.slice(0, -3) + 'ês')) t.set(y.slice(0, -3) + 'ês', fem);
      if (/a$/.test(y) && !t.has(y.slice(0, -1) + 'o')) t.set(y.slice(0, -1) + 'o', fem);
    }
    t.delete(s);
    return [...t];
  }
  /* Henkilönnimiä ei taivuteta: muuten Maia → maio (toukokuu) ja Ana → ano (vuosi). Nimet tulevat oppituntien
     hahmoista ja kurssin nimilistasta (Kurssi.nimet, assets/hahmot.js). */
  let nimiJoukko = null;
  const onNimi = avain => {
    if (!nimiJoukko) {
      nimiJoukko = new Set((K.nimet || []).map(n => n.toLowerCase()));
      for (const o of K.oppitunnit || []) for (const h of Object.values(o.hahmot || {})) if (h.nimi) nimiJoukko.add(h.nimi.toLowerCase());
    }
    return nimiJoukko.has(avain);
  };
  const haeSana = avain => {
    const s = haeSuoraan(avain);
    if (s || !avain || avain.includes(' ') || onNimi(avain)) return s;
    for (const [p, laji] of perusmuodot(avain)) {
      const b = haeSuoraan(p);
      if (b) return { fi: b.fi, sl: `${laji || 'taivutusmuoto'} sanasta {${p}}`, huom: '', johdettu: true };
    }
    return null;
  };
  K.haeSana = avain => haeSana(avain);   // tools/tarkista_sivusto.js käyttää samaa hakua
  K.ohjain = (...a) => ohjain(...a);     // assets/asettelu.js käyttää samaa toistonappia
  function haeSuoraan(avain) {
    // Avoinna olevan oppitunnin oma merkintä ensin: sama sana voi tarkoittaa eri oppitunneilla eri asiaa
    // (falta = puuttuu / jalkapallossa virhe). Muualla näkyy ensimmäinen määritelmä.
    const oma = nykyinenOppitunti && nykyinenOppitunti.sanat && nykyinenOppitunti.sanat[avain];
    if (oma && K.sanasto[avain] && K.sanasto[avain].oppitunti !== nykyinenOppitunti.id) return Object.assign({ oppitunti: nykyinenOppitunti.id }, oma, { aa: K.sanasto[avain].aa, ipa: K.sanasto[avain].ipa });
    if (K.sanasto[avain]) return K.sanasto[avain];
    const y = YDIN.get(avain);
    if (y) return { fi: y.fi, aa: y.aa, ipa: y.ipa, sl: AIHEET[y.aihe] || '', huom: y.huom || '', ydin: true };
    const e = ESP[avain];
    return e && e[3] ? { fi: e[3], sl: '', huom: '' } : null;
  }
  function espanjaRivi(avain) {
    const e = ESP[avain];
    if (!e) return null;
    const rivi = el('div', { class: 'k-es' },
      el('span', { class: 'aa-nimi' }, 'espanjaksi'),
      el('span', { class: 'es-sana', lang: 'es' }, e[0]));
    if (e[2]) rivi.append(el('span', { class: 'es-huom' }, e[2]));
    return rivi;
  }

  /* Ydinsanojen jako oppitunneille. Jokainen oppitunti saa aiheisiinsa (o.aiheet) sopivia ydinsanoja, yleisimpiä
     vielä opettelemattomia ydinsanoja ja puhekielen sanoja sekä kertaukseen vähintään KERTAUSVALI oppituntia
     aiemmin esiteltyjä ydinsanoja. Jako on aina sama, joten sanat eivät vaihdu sivua ladattaessa. */
  const JAKO = { aihe: 8, runko: 5, puhe: 3, kertaus: 3, kertausvali: 3 };
  function jaaYdinsanat() {
    const esitelty = new Map();   // sana -> oppitunnin indeksi
    const kerrattu = new Set();
    K.oppitunnit.forEach((o, i) => {
      for (const k of o.sanasto || []) if (!esitelty.has(k)) esitelty.set(k, i);
      const vapaat = tila => (tila === 'puhe' ? PUHEKIELI.map(s => YDIN.get(s)) : [...YDIN.values()].filter(y => y.taso !== 'puhe'))
        .filter(y => !esitelty.has(y.s));
      const aiheet = new Set(o.aiheet || []);
      const ota = (lista, n) => { const v = lista.slice(0, n); v.forEach(y => esitelty.set(y.s, i)); return v.map(y => y.s); };
      const aihe = ota(vapaat().filter(y => aiheet.has(y.aihe)), JAKO.aihe);
      const runko = ota(vapaat(), JAKO.runko);
      const puhe = ota(vapaat('puhe'), JAKO.puhe);
      const kertaus = [...esitelty.entries()]
        .filter(([s, j]) => j <= i - JAKO.kertausvali && YDIN.has(s) && !kerrattu.has(s))
        .sort((a, b) => (YDIN.get(a[0]).sija || 0) - (YDIN.get(b[0]).sija || 0))
        .slice(0, JAKO.kertaus).map(([s]) => s);
      kertaus.forEach(s => kerrattu.add(s));
      o._ydin = { aihe, runko, puhe, kertaus };
    });
  }
  /* Oppitunnin kaikki opeteltavat sanat syineen. */
  function oppitunninSanat(o) {
    const tulos = new Map();
    for (const k of o.sanasto || []) if (haeSana(k)) tulos.set(k, 'oppitunti');
    const y = o._ydin || {};
    for (const [syy, lista] of [['aihe', y.aihe], ['runko', y.runko], ['puhe', y.puhe], ['kertaus', y.kertaus]]) {
      for (const k of lista || []) if (!tulos.has(k)) tulos.set(k, syy);
    }
    return tulos;
  }

  const IKONI_SOITA = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9.5-5.5z"/></svg>';
  const IKONI_SEIS = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.5" y="3.5" width="9" height="9" rx="1"/></svg>';

  /* Suomalainen ääntämisohje: tavut viivalla, painollinen tavu ISOIN kirjaimin. */
  function aaHtml(aa) {
    return aa.split(/(\s+|-)/).map(osa => {
      if (osa === '-') return '<span class="tavuviiva">-</span>';
      if (/^\s+$/.test(osa) || !osa) return osa;
      const paino = /\p{Lu}/u.test(osa) && osa === osa.toUpperCase();
      return paino ? `<b>${esc(osa.toLowerCase())}</b>` : esc(osa);
    }).join('');
  }

  /* IPA ilman hakasulkeita; pääpainollinen tavu (painomerkistä ˈ tavun vokaaliin asti) ja sivupainon merkki ˌ
     punaisella. IPA:ssa ei ole tavurajoja, joten korostus päättyy painollisen tavun vokaaliin. */
  const IPA_VOKAALI = 'aeiouɐɛɔæʊɪyəɨãẽĩõũ';
  const IPA_PAINO = new RegExp(`ˈ[^${IPA_VOKAALI}\\sˈˌ.]*[${IPA_VOKAALI}]\u0303?(?:[ʊɪjw]\u0303?)?`, 'u');
  function ipaHtml(ipa) {
    const t = esc(String(ipa).replace(/^\s*\[|\]\s*$/g, ''));
    return t.replace(IPA_PAINO, m => `<b>${m}</b>`).replace(/ˌ/g, '<i>ˌ</i>');
  }

  /* Ääntämisen kaksi riviä ilman otsikoita: ylempänä IPA (punainen paino), alempana suomalainen ohje (sininen paino). */
  function aantaminen(s, luokka) {
    const k = el('div', { class: luokka });
    if (s.ipa) {
      const ipa = el('span', { class: 'aa-ipa', title: 'Kansainvälinen foneettinen aakkosto (IPA)' });
      ipa.innerHTML = ipaHtml(s.ipa);
      k.append(ipa);
    }
    if (s.aa) {
      const fi = el('span', { class: 'aa-fi', title: 'Ääntämisohje suomalaisin kirjaimin' });
      fi.innerHTML = aaHtml(s.aa);
      k.append(fi);
    }
    return k;
  }

  /* Kuvat ladataan suoraan tiedostosta (toimii levyltä ja palvelimelta kaikissa selaimissa). */
  function lataaKuva(img, kuva) {
    img.src = typeof kuva === 'string' ? kuva : kuva.src;
  }

  /* Merkintäteksti, jossa {sana} viittaa sanastoon: viittauksesta tulee oma, sisäkkäin avautuva kupla. */
  function merkinta(teksti) {
    const frag = document.createDocumentFragment();
    const osat = String(teksti || '').split(/\{([^}]+)\}/);
    osat.forEach((osa, i) => {
      if (i % 2 === 0) { if (osa) frag.append(osa); return; }
      const avain = norm(osa);
      frag.append(haeSana(avain)
        ? el('span', { class: 'w', 'data-k': avain, tabindex: '0', lang: 'pt-BR' }, osa)
        : el('span', { class: 'pt', lang: 'pt-BR' }, osa));
    });
    return frag;
  }

  /* ---------- toistopainike ▶ (Belo Horizonten ääntämys) ---------- */

  function ohjain(hae, { aina = false, nimi = 'Kuuntele', teksti = '' } = {}) {
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

  /* ---------- sanojen glossaus ---------- */

  function glossaa(juuri) {
    const kavelija = document.createTreeWalker(juuri, NodeFilter.SHOW_TEXT);
    const solmut = [];
    while (kavelija.nextNode()) solmut.push(kavelija.currentNode);
    for (const solmu of solmut) {
      if (solmu.parentElement.closest('.w, .puhuja, .kaannos, .ohj')) continue;
      const osat = solmu.nodeValue.split(/([\p{L}\p{M}]+(?:[-'][\p{L}\p{M}]+)*)/u);
      const sanat = [];
      for (let i = 1; i < osat.length; i += 2) sanat.push(i);
      if (!sanat.length) continue;
      const frag = document.createDocumentFragment();
      let kohta = 0;
      let si = 0;
      while (si < sanat.length) {
        let osuma = null;
        for (let n = Math.min(MAKS_FRAASI, sanat.length - si); n >= 1; n--) {
          const alku = sanat[si], loppu = sanat[si + n - 1];
          const teksti = osat.slice(alku, loppu + 1).join('');
          if (n > 1 && /[.,!?;:]/.test(teksti)) continue;
          const avain = norm(teksti);
          if (haeSana(avain)) { osuma = { n, alku, loppu, teksti, avain }; break; }
        }
        if (osuma) {
          frag.append(osat.slice(kohta, osuma.alku).join(''));
          frag.append(el('span', { class: 'w', 'data-k': osuma.avain, tabindex: '0' }, osuma.teksti));
          kohta = osuma.loppu + 1;
          si += osuma.n;
        } else {
          si += 1;
        }
      }
      frag.append(osat.slice(kohta).join(''));
      solmu.replaceWith(frag);
    }
  }

  /* ---------- sisäkkäiset puhekuplat ---------- */

  const kuplat = [];   // [{ el, sana }], indeksi = taso
  let piiloAjastin = 0, nayttoAjastin = 0;

  function kuplanTaso(elementti) {
    const k = elementti.closest('.kupla');
    return k ? Number(k.dataset.taso) + 1 : 0;
  }

  function rakennaKupla(kupla, sanaEl) {
    const avain = sanaEl.dataset.k;
    const s = haeSana(avain);
    const naytetty = sanaEl.textContent;
    kupla.innerHTML = '';
    const yla = el('div', { class: 'k-yla' });
    yla.append(el('span', { class: 'k-pt', lang: 'pt-BR' }, naytetty));
    yla.append(ohjain(() => sana(naytetty, sanaEl), { aina: true, nimi: 'Kuuntele sana' }));
    kupla.append(yla);
    if (s.aa || s.ipa) kupla.append(aantaminen(s, 'k-aa'));
    kupla.append(el('div', { class: 'k-fi' }, merkinta(s.fi)));
    if (s.sl || s.huom) {
      const t = el('div', { class: 'k-sl' }, merkinta(s.sl || ''));
      if (s.sl && s.huom) t.append(' · ');
      if (s.huom) t.append(merkinta(s.huom));
      kupla.append(t);
    }
    const es = espanjaRivi(avain);
    if (es) kupla.append(es);
    const osat = avain.split(' ');
    if (osat.length > 1) {
      const lista = el('div', { class: 'k-osat' });
      for (const w of osat) {
        if (!haeSana(w)) continue;
        const rivi = el('div', { class: 'k-osa' });
        rivi.append(el('span', { class: 'w k-osa-pt', 'data-k': w, tabindex: '0', lang: 'pt-BR' }, w),
          el('span', { class: 'k-osa-fi' }, haeSana(w).fi));
        lista.append(rivi);
      }
      if (lista.childElementCount) kupla.append(el('div', { class: 'k-otsake' }, 'Sana sanalta'), lista);
    }
  }

  function suljeTasot(alkaen) {
    while (kuplat.length > alkaen) kuplat.pop().el.remove();
  }

  function naytaKupla(sanaEl) {
    if (!haeSana(sanaEl.dataset.k)) return;
    clearTimeout(piiloAjastin);
    const taso = kuplanTaso(sanaEl);
    if (kuplat[taso] && kuplat[taso].sana === sanaEl) { suljeTasot(taso + 1); return; }
    suljeTasot(taso);
    const kupla = el('div', { class: 'kupla', role: 'tooltip', 'data-taso': String(taso) });
    kupla.style.zIndex = String(50 + taso);
    rakennaKupla(kupla, sanaEl);
    document.body.append(kupla);
    kuplat.push({ el: kupla, sana: sanaEl });
    const r = sanaEl.getBoundingClientRect();
    const leveys = kupla.offsetWidth, korkeus = kupla.offsetHeight;
    let x = r.left + window.scrollX + (taso ? 24 : r.width / 2 - leveys / 2);
    x = Math.max(window.scrollX + 12, Math.min(x, window.scrollX + document.documentElement.clientWidth - leveys - 12));
    let y = r.bottom + window.scrollY + 8;
    if (r.bottom + korkeus + 16 > window.innerHeight && r.top > korkeus + 16) y = r.top + window.scrollY - korkeus - 8;
    kupla.style.left = x + 'px';
    kupla.style.top = y + 'px';
  }
  function piilotaKuplat(heti) {
    clearTimeout(nayttoAjastin);
    clearTimeout(piiloAjastin);
    if (heti) suljeTasot(0);
    else piiloAjastin = setTimeout(() => suljeTasot(0), 320);
  }

  const kosketus = window.matchMedia('(hover: none)');

  /* Kupla avautuu ja sulkeutuu ilman viivettä. Sanan ja kuplan välinen rako on katettu näkymättömällä reunalla
     (.kupla::before/::after), joten osoittimen voi viedä kuplaan; kupla sulkeutuu vasta, kun osoitin menee muualle. */
  document.addEventListener('mouseover', e => {
    if (kosketus.matches) return;
    const w = e.target.closest('.w');
    if (w) { clearTimeout(piiloAjastin); clearTimeout(nayttoAjastin); naytaKupla(w); return; }
    if (e.target.closest('.kupla')) clearTimeout(piiloAjastin);
  });
  document.addEventListener('mouseout', e => {
    if (kosketus.matches) return;
    if (!e.target.closest('.w, .kupla')) return;
    const minne = e.relatedTarget;
    if (minne && minne.closest && minne.closest('.w, .kupla')) return;
    piilotaKuplat(true);
  });
  document.addEventListener('focusin', e => { const w = e.target.closest('.w'); if (w) naytaKupla(w); });
  document.addEventListener('click', e => {
    const w = e.target.closest('.w');
    if (w) {
      naytaKupla(w);
      A.soita(sana(w.textContent, w));
      return;
    }
    const p = e.target.closest('.pt');
    if (p) { A.soita(sana(p.textContent, p)); return; }
    if (!e.target.closest('.kupla')) piilotaKuplat(true);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { A.pysayta(); piilotaKuplat(true); }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList?.contains('w')) {
      e.preventDefault();
      A.soita(sana(e.target.textContent, e.target));
    }
  });

  /* ---------- sisällön valmistelu ---------- */

  function valmistele(juuri, o) {
    const hahmot = (o && o.hahmot) || {};
    const jarjestys = Object.keys(hahmot);

    $$('.s', juuri).forEach(s => {
      const lause = el('span', { class: 'lause', lang: 'pt-BR' });
      while (s.firstChild) lause.append(s.firstChild);
      s.dataset.puhu = s.dataset.puhu || lause.textContent.trim().replace(/\s+/g, ' ');
      glossaa(lause);
      const h = s.dataset.h;
      const puhuja = h && hahmot[h]
        ? el('span', { class: 'puhuja', 'data-p': String(jarjestys.indexOf(h)) }, hahmot[h].nimi)
        : null;
      const kaannos = s.dataset.fi ? el('span', { class: 'kaannos' }, s.dataset.fi) : null;
      s.append(ohjain(() => [alkio(s)], { nimi: 'Kuuntele lause' }));
      if (puhuja) {
        const kasvo = window.Kuvitus && window.Kuvitus.avatar(h, 'puhuja-kasvo');
        if (kasvo) puhuja.prepend(kasvo);
        s.append(puhuja); s.classList.add('on-puhuja');
      }
      s.append(lause);
      if (kaannos) s.append(kaannos);
    });

    $$('.kpl', juuri).forEach(k => {
      const nimi = k.dataset.nimi || 'Kuuntele kappale';
      const palkki = el('div', { class: 'kpl-palkki' });
      palkki.append(ohjain(() => $$('.s', k).map(alkio), { aina: true, nimi, teksti: nimi }));
      k.prepend(palkki);
    });

    $$('.pt', juuri).forEach(p => { p.setAttribute('lang', 'pt-BR'); glossaa(p); });

    valmisteleTehtavat(juuri, hahmot);

    // Leveät taulukot vierivät omassa laatikossaan, jottei koko sivu leviä puhelimella.
    $$('table', juuri).forEach(t => {
      if (t.closest('.taulukko-kaari, .vieritys')) return;
      const kaari = el('div', { class: 'vieritys' });
      t.replaceWith(kaari);
      kaari.append(t);
    });

    $$('.valinta', juuri).forEach(v => {
      const oikea = norm(v.dataset.oikea || '');
      const palaute = el('p', { class: 'palaute', 'aria-live': 'polite' });
      if (v.dataset.kuuntele) {
        const kohta = $('.kysymys', v) || v.firstElementChild;
        kohta.prepend(ohjain(() => sana(v.dataset.kuuntele), { aina: true, nimi: 'Kuuntele tehtävä' }));
      }
      $$('.vaihtoehdot button', v).forEach(b => {
        // Suomenkieliset vaihtoehdot (<div class="vaihtoehdot" lang="fi">) eivät ole kohdekieltä: niitä ei lueta ääneen.
        const suomeksi = !!b.closest('[lang="fi"]');
        if (!suomeksi) b.setAttribute('lang', 'pt-BR');
        b.addEventListener('click', () => {
          const ok = norm(b.textContent) === oikea;
          $$('.vaihtoehdot button', v).forEach(x => x.classList.remove('vaarin'));
          b.classList.add(ok ? 'oikein' : 'vaarin');
          palaute.textContent = ok ? 'Oikein!' : 'Ei aivan. Kuuntele uudelleen ja kokeile toista.';
          palaute.className = 'palaute ' + (ok ? 'ok' : 'ei');
          ilmoitaTulos(v, ok ? 'oikein' : 'vaarin');
          if (!suomeksi) A.soita(sana(b.textContent));
        });
      });
      v.append(palaute);
    });
  }

  /* ---------- tehtäväkomponentit ---------- */

  const TYYPIT = { keskustelu: ['🗣', 'Keskustelu'], kuuntelu: ['🎧', 'Kuuntelu'], kirjoitus: ['✍', 'Kirjoitus'] };
  const vertaa = s => norm(s).replace(/\s+/g, ' ');
  const ilmanAksentteja = s => s.normalize('NFD').replace(/\p{M}/gu, '');
  function arvioi(vastaus, oikeat) {
    const v = vertaa(vastaus);
    if (!v) return 'tyhja';
    for (const o of oikeat) {
      if (v === vertaa(o)) return 'oikein';
      if (ilmanAksentteja(v) === ilmanAksentteja(vertaa(o))) return 'aksentti';
    }
    return 'vaarin';
  }
  // Aksentit saa jättää kirjoittamatta (käyttäjän päätös 16.10.2026: e = é, sao = são). Vastaus hyväksytään, ja
  // palaute näyttää oikean kirjoitusasun, jotta aksentit tulevat tutuiksi.
  const PALAUTE = { oikein: 'Oikein!', aksentti: 'Oikein!', vaarin: 'Ei aivan.', tyhja: '' };
  /* Tehtävän tulos tapahtumana (passo:tulos): tulos 'oikein' | 'vaarin' | 'osittain', lisäksi oikein/yhteensa.
     Kuuntelija: Manaattilan kelluva manaatti (assets/kuvitus.js). */
  const ilmoitaTulos = (kohde, tulos, tieto = {}) => {
    if (kohde) kohde.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: Object.assign({ tulos }, tieto) }));
  };
  const hyvaksytty = tulos => tulos === 'oikein' || tulos === 'aksentti';

  function valmisteleTehtavat(juuri, hahmot) {
    // Tehtävän otsikko ja tyyppimerkki
    $$('.tehtava', juuri).forEach(t => {
      const tyyppi = TYYPIT[t.dataset.tyyppi];
      if (tyyppi && !t.querySelector('.tehtava-merkki')) {
        t.prepend(el('span', { class: 'tehtava-merkki', 'data-tyyppi': t.dataset.tyyppi, title: tyyppi[1] }, tyyppi[0] + ' ' + tyyppi[1]));
      }
    });

    // Aukkotehtävä: <span class="aukko" data-oikea="sou|é"></span>
    $$('.aukot', juuri).forEach(ryhma => {
      const kentat = [];
      $$('.aukko', ryhma).forEach(a => {
        const oikeat = (a.dataset.oikea || '').split('|');
        const syote = el('input', { type: 'text', class: 'aukko-syote', size: String(Math.max(4, ...oikeat.map(o => o.length)) + 1), 'aria-label': 'Vastaus', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', lang: 'pt-BR' });
        a.replaceWith(syote);
        kentat.push([syote, oikeat]);
      });
      const tila = el('p', { class: 'palaute', 'aria-live': 'polite' });
      const tarkista = el('button', { type: 'button', class: 'pieni-nappi' }, 'Tarkista');
      const nayta = el('button', { type: 'button', class: 'pieni-nappi toissijainen' }, 'Näytä vastaukset');
      tarkista.addEventListener('click', () => {
        let ok = 0;
        for (const [s, o] of kentat) {
          const tulos = arvioi(s.value, o);
          s.dataset.tulos = tulos;
          s.title = tulos === 'aksentti' ? `Oikein! Aksentein: ${o[0]}` : PALAUTE[tulos];
          if (hyvaksytty(tulos)) ok++;
        }
        tila.textContent = `${ok} / ${kentat.length} oikein.`;
        tila.className = 'palaute ' + (ok === kentat.length ? 'ok' : 'ei');
        ilmoitaTulos(ryhma, ok === kentat.length ? 'oikein' : ok ? 'osittain' : 'vaarin', { oikein: ok, yhteensa: kentat.length });
      });
      nayta.addEventListener('click', () => { for (const [s, o] of kentat) { s.value = o[0]; s.dataset.tulos = 'naytetty'; } });
      ryhma.append(el('div', { class: 'tehtava-napit' }, tarkista, nayta), tila);
    });

    // Yhdistä parit: <ul class="yhdista"><li data-pari="minä">eu</li>…</ul>
    $$('.yhdista', juuri).forEach(lista => {
      const parit = $$('li', lista).map(li => [li.textContent.trim(), li.dataset.pari]);
      const vasen = el('div', { class: 'yhd-sarake' }), oikea = el('div', { class: 'yhd-sarake' });
      let valittu = null;
      const tila = el('p', { class: 'palaute', 'aria-live': 'polite' });
      let loydetty = 0;
      for (const [pt] of sekoita(parit)) {
        const b = el('button', { type: 'button', class: 'yhd-nappi', lang: 'pt-BR', 'data-pt': pt }, pt);
        b.addEventListener('click', () => {
          if (b.dataset.valmis) return;
          $$('.yhd-nappi.valittu', vasen).forEach(x => x.classList.remove('valittu'));
          b.classList.add('valittu'); valittu = b;
          A.soita(sana(pt));
        });
        vasen.append(b);
      }
      for (const [pt, fi] of sekoita(parit)) {
        const b = el('button', { type: 'button', class: 'yhd-nappi', 'data-pt': pt }, fi);
        b.addEventListener('click', () => {
          if (!valittu || b.dataset.valmis) return;
          if (valittu.dataset.pt === b.dataset.pt) {
            [valittu, b].forEach(x => { x.dataset.valmis = '1'; x.classList.remove('valittu'); x.classList.add('oikein'); });
            valittu = null;
            loydetty++;
            tila.textContent = loydetty === parit.length ? 'Kaikki parit löytyivät!' : `${loydetty} / ${parit.length}`;
            tila.className = 'palaute ok';
            if (loydetty === parit.length) ilmoitaTulos(b, 'oikein');
          } else {
            b.classList.add('vaarin'); setTimeout(() => b.classList.remove('vaarin'), 600);
            ilmoitaTulos(b, 'vaarin');
          }
        });
        oikea.append(b);
      }
      const kehys = el('div', { class: 'yhd-kehys' }, vasen, oikea);
      lista.replaceWith(kehys);
      kehys.after(tila);
    });

    // Sanelu: <div class="sanelu" data-puhu="Eu sou da Finlândia."></div>
    $$('.sanelu', juuri).forEach(s => {
      const teksti = s.dataset.puhu;
      const syote = el('input', { type: 'text', class: 'sanelu-syote', 'aria-label': 'Kirjoita kuulemasi', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', lang: 'pt-BR' });
      const tila = el('span', { class: 'palaute' });
      const tarkista = el('button', { type: 'button', class: 'pieni-nappi' }, 'Tarkista');
      tarkista.addEventListener('click', () => {
        const tulos = arvioi(syote.value, [teksti]);
        syote.dataset.tulos = tulos;
        tila.textContent = tulos === 'vaarin' ? `Oikein olisi: ${teksti}` : tulos === 'aksentti' ? `Oikein! Aksentein: ${teksti}` : PALAUTE[tulos];
        tila.className = 'palaute ' + (hyvaksytty(tulos) ? 'ok' : 'ei');
        if (tulos !== 'tyhja') ilmoitaTulos(s, hyvaksytty(tulos) ? 'oikein' : 'vaarin');
      });
      s.append(ohjain(() => [{ teksti, tyyppi: 'kertoja', el: null }], { aina: true, nimi: 'Kuuntele' }), syote, tarkista, tila);
    });

    // Käännös: <div class="kaanna"><p class="fi">…</p><p class="s">malli</p></div>
    $$('.kaanna', juuri).forEach(k => {
      const malli = $('.s', k);
      if (!malli) return;
      malli.hidden = true;
      const syote = el('textarea', { class: 'kaanna-syote', rows: '2', 'aria-label': 'Käännöksesi', lang: 'pt-BR', spellcheck: 'false' });
      const nappi = el('button', { type: 'button', class: 'pieni-nappi toissijainen' }, 'Näytä malli');
      nappi.addEventListener('click', () => { malli.hidden = !malli.hidden; nappi.textContent = malli.hidden ? 'Näytä malli' : 'Piilota malli'; });
      malli.before(syote, nappi);
    });

    // Paino: <span class="paino" data-tavut="o|bri|ga|do" data-oikea="3"></span> (tavun indeksi 1:stä)
    $$('.paino', juuri).forEach(p => {
      const tavut = (p.dataset.tavut || '').split('|');
      const oikea = Number(p.dataset.oikea);
      const sanaTeksti = tavut.join('');
      const kehys = el('span', { class: 'paino-sana', lang: 'pt-BR' });
      tavut.forEach((t, i) => {
        const b = el('button', { type: 'button', class: 'tavu' }, t);
        b.addEventListener('click', () => {
          $$('.tavu', kehys).forEach(x => x.classList.remove('oikein', 'vaarin'));
          b.classList.add(i + 1 === oikea ? 'oikein' : 'vaarin');
          if (i + 1 !== oikea) $$('.tavu', kehys)[oikea - 1].classList.add('oikein');
          ilmoitaTulos(kehys, i + 1 === oikea ? 'oikein' : 'vaarin');
          A.soita(sana(sanaTeksti));
        });
        kehys.append(b);
      });
      p.replaceWith(kehys);
    });

    // Kotitehtävä: <div class="kotitehtava" data-id="l01-1"><p>…</p><details class="malli">…</details></div>
    $$('.kotitehtava', juuri).forEach(k => {
      const avain = 'passo-a-passo-koti-' + (k.dataset.id || '');
      const alue = el('textarea', { class: 'koti-syote', rows: '5', 'aria-label': 'Vastauksesi', lang: 'pt-BR', placeholder: 'Kirjoita vastauksesi tähän. Se tallentuu tähän selaimeen.' });
      try { alue.value = localStorage.getItem(avain) || ''; } catch (e) { /* ei tallennusta */ }
      alue.addEventListener('input', () => { try { localStorage.setItem(avain, alue.value); } catch (e) { /* ohita */ } });
      const malli = $('details.malli', k);
      if (malli) malli.before(alue); else k.append(alue);
    });

    // Teemasanasto: <div class="teema" data-otsikko="Perhe" data-sanat="mãe,pai,irmão"></div>
    $$('.teema', juuri).forEach(t => {
      const lista = el('ul', { class: 'teema-lista' });
      for (const k of (t.dataset.sanat || '').split(',').map(x => x.trim()).filter(Boolean)) {
        const s = haeSana(k);
        const suku = s && /feminiini/.test(s.sl || '') ? 'f.' : s && /maskuliini/.test(s.sl || '') ? 'm.' : '';
        lista.append(el('li', {},
          ohjain(() => sana(k), { aina: true, nimi: 'Kuuntele ' + k }),
          el('span', { class: 'w', 'data-k': k, tabindex: '0', lang: 'pt-BR' }, k),
          suku ? el('span', { class: 'suku' }, suku) : null,
          el('span', { class: 'teema-fi' }, s ? fiLyhyt(s) : '')));
      }
      t.append(el('h4', {}, t.dataset.otsikko || 'Sanasto'), lista);
    });

    // Itsearvio: <ul class="itsearvio" data-id="l01"><li>Osaan esittäytyä.</li>…</ul>
    $$('ul.itsearvio', juuri).forEach(u => {
      const avain = 'passo-a-passo-arvio-' + (u.dataset.id || '');
      let tallennettu = {};
      try { tallennettu = JSON.parse(localStorage.getItem(avain) || '{}'); } catch (e) { /* oletus */ }
      $$('li', u).forEach((li, i) => {
        const valinnat = el('span', { class: 'arvio-valinnat', role: 'group', 'aria-label': 'Arvio' });
        ['En vielä', 'Vähän', 'Hyvin', 'Erinomaisesti'].forEach((nimi, j) => {
          const b = el('button', { type: 'button', class: 'arvio', 'aria-pressed': String(tallennettu[i] === j) }, nimi);
          b.addEventListener('click', () => {
            tallennettu[i] = j;
            $$('.arvio', valinnat).forEach((x, n) => x.setAttribute('aria-pressed', String(n === j)));
            try { localStorage.setItem(avain, JSON.stringify(tallennettu)); } catch (e) { /* ohita */ }
          });
          valinnat.append(b);
        });
        li.append(valinnat);
      });
    });

    // Kulttuurinurkkauksen kuva: <figure class="kuva" data-kuva="mercado-central"></figure>
    $$('figure.kuva', juuri).forEach(f => {
      const kuva = (K.kuvat || {})[f.dataset.kuva];
      if (!kuva) { f.remove(); return; }
      const lahde = kuva.lahde ? el('a', { href: kuva.lahde, target: '_blank', rel: 'noopener' }, kuva.tekija) : kuva.tekija;
      const img = el('img', { alt: kuva.alt || '' });
      lataaKuva(img, kuva);
      f.append(img, el('figcaption', {}, `${kuva.kuvateksti || ''} Kuva: `, lahde, `, ${kuva.lisenssi}.`));
    });
    $$('img[data-kuva]', juuri).forEach(img => { const k = (K.kuvat || {})[img.dataset.kuva]; if (k) lataaKuva(img, k); });
    $$('img[data-src]', juuri).forEach(img => lataaKuva(img, img.dataset.src));

    // Roolileikki dialogeissa: oppija puhuu valitsemansa hahmon repliikit
    $$('.kpl', juuri).forEach(k => {
      const roolit = [...new Set($$('.s', k).map(s => s.dataset.h).filter(h => h && h !== 'kertoja' && hahmot[h]))];
      if (!roolit.length) return;
      const palkki = $('.kpl-palkki', k);
      if (!palkki) return;
      for (const r of roolit) {
        const b = el('button', { type: 'button', class: 'pieni-nappi toissijainen rooli-nappi', title: `Kuuntele dialogi, mutta sano ${hahmot[r].nimi}n repliikit itse` }, `Roolileikki: ole ${hahmot[r].nimi}`);
        b.addEventListener('click', () => {
          const jono = [];
          for (const s of $$('.s', k)) {
            const a = alkio(s);
            if (s.dataset.h === r) {
              jono.push({ tauko: 1500 + 90 * a.teksti.length, el: s });
              jono.push(a);
            } else jono.push(a);
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

  const AAKKOSET = {
    pt: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    fi: 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'.split('')
  };
  /* Suomenkielinen hakusana: merkitys ilman alun välimerkkejä ja sulkeita. */
  const fiHaku = s => (s.fi || '').replace(/^[^\p{L}]+/u, '').replace(/[{}]/g, '');
  const ilmanMerkkeja = t => t.normalize('NFD').replace(/\p{M}/gu, '');
  function kirjain(teksti, kieli) {
    const k = (teksti || '').trim().charAt(0).toUpperCase();
    if (kieli === 'fi') return 'ÅÄÖ'.includes(k) ? k : ilmanMerkkeja(k);
    return ilmanMerkkeja(k);
  }

  /* Sanalista kirjaimittain. suunta 'pt' = Portugali–Suomi, 'fi' = Suomi–Portugali. */
  function sanalista(rivit, suunta, { naytaOppitunti = false, syyt = null, ryhmitys = null } = {}) {
    const kieli = suunta === 'fi' ? 'fi' : 'pt';
    const avainteksti = ([k, s]) => (kieli === 'fi' ? fiHaku(s) : k);
    const jarjestetty = rivit.slice().sort((x, y) =>
      avainteksti(x).localeCompare(avainteksti(y), kieli === 'fi' ? 'fi' : 'pt', { sensitivity: 'base' }));
    const kaari = el('div', { class: 'taulukko-kaari' });
    const t = el('table', { class: 'sanasto' });
    const sarakkeet = kieli === 'fi'
      ? ['Suomi', '', 'Portugali', 'Ääntäminen']
      : ['', 'Portugali', 'Ääntäminen', 'Suomi'];
    if (naytaOppitunti) sarakkeet.push('Opittu');
    t.innerHTML = '<thead><tr>' + sarakkeet.map(x => `<th>${x}</th>`).join('') + '</tr></thead>';
    const ryhmat = ryhmitys ? new Map(ryhmitys) : new Map();
    for (const rivi of ryhmitys ? [] : jarjestetty) {
      const kir = kirjain(avainteksti(rivi), kieli);
      if (!ryhmat.has(kir)) ryhmat.set(kir, []);
      ryhmat.get(kir).push(rivi);
    }
    for (const [kir, ryhma] of ryhmat) {
      const tb = el('tbody', { 'data-kirjain': kir });
      tb.append(el('tr', { class: 'kirjainrivi' }, el('th', { colspan: String(sarakkeet.length) }, kir)));
      for (const [k, s] of ryhma) {
        const tr = el('tr');
        const pt = el('td', { class: 'pt-sana' }, el('span', { class: 'w', 'data-k': k, tabindex: '0', lang: 'pt-BR' }, k));
        const soitto = el('td', { class: 'soitto' }, ohjain(() => sana(k, pt), { aina: true, nimi: 'Kuuntele ' + k }));
        const aa = el('td', { class: 'aa' }, aantaminen(s, 'aa-pari'));
        const fi = el('td', { class: 'fi-sana' }, merkinta(s.fi));
        if (s.sl || s.huom) {
          const sl = el('span', { class: 'sl' }, merkinta(s.sl || ''));
          if (s.sl && s.huom) sl.append(' · ');
          if (s.huom) sl.append(merkinta(s.huom));
          fi.append(sl);
        }
        if (kieli === 'fi') tr.append(fi, soitto, pt, aa); else tr.append(soitto, pt, aa, fi);
        if (naytaOppitunti) {
          const o = K.oppitunnit.find(x => x.id === s.oppitunti);
          const td = el('td', { class: 'lahde' });
          if (o) td.append(el('a', { href: '#' + o.id }, o.lyhyt || o.id));
          tr.append(td);
        }
        tb.append(tr);
      }
      t.append(tb);
    }
    kaari.append(t);
    return { taulukko: kaari, kirjaimet: new Set(ryhmat.keys()), aakkoset: AAKKOSET[kieli] };
  }

  /* Sanastonäkymä: suunnan valinta, kirjainpalkki, haku ja lista. */
  function naytaSanalista({ yla, otsikko, kuvaus, rivit, suunta, reitti, naytaOppitunti, syyt = null, lisa = null }) {
    const m = paa();
    m.innerHTML = '';
    const otsake = el('header', { class: 'op-otsake' });
    otsake.innerHTML = `<p class="yla">${esc(yla)}</p><h1>${esc(otsikko)}</h1><p class="lahde-rivi">${esc(kuvaus)}</p>`;
    m.append(otsake);
    if (lisa) m.append(lisa);
    const suunnat = el('div', { class: 'segmentti suunnat', role: 'group', 'aria-label': 'Sanaston suunta' });
    for (const [s, nimi] of [['pt', 'Portugali–Suomi'], ['fi', 'Suomi–Portugali']]) {
      suunnat.append(el('a', { href: '#' + reitti(s), 'aria-current': s === suunta ? 'page' : null }, nimi));
    }
    const kirjainpalkki = el('nav', { class: 'kirjaimet', 'aria-label': 'Hyppää kirjaimeen' });
    const haku = el('input', { type: 'search', id: 'sanahaku', placeholder: 'Etsi portugaliksi tai suomeksi…', 'aria-label': 'Etsi sanastosta' });
    const paikka = el('div');
    m.append(el('div', { class: 'sanasto-ohjaimet' }, suunnat, kirjainpalkki, el('div', { class: 'haku' }, haku)), paikka);
    const piirra = () => {
      const q = haku.value.trim().toLowerCase();
      const suodatettu = q ? rivit.filter(([k, s]) => k.includes(q) || (s.fi || '').toLowerCase().includes(q)) : rivit;
      const lista = sanalista(suodatettu, suunta, { naytaOppitunti, syyt });
      paikka.innerHTML = '';
      paikka.append(suodatettu.length ? lista.taulukko : el('p', { class: 'ohje' }, 'Ei osumia.'));
      kirjainpalkki.innerHTML = '';
      for (const k of lista.aakkoset) {
        const b = el('button', { type: 'button', disabled: !lista.kirjaimet.has(k) }, k);
        b.addEventListener('click', () => {
          const kohde = paikka.querySelector(`tbody[data-kirjain="${k}"]`);
          if (kohde) kohde.scrollIntoView({ block: 'start', behavior: 'smooth' });
        });
        kirjainpalkki.append(b);
      }
    };
    haku.addEventListener('input', piirra);
    piirra();
  }

  function naytaOppitunti(o) {
    nykyinenOppitunti = o;
    A.asetaPaketti(o.id);
    const m = paa();
    m.innerHTML = '';
    const otsake = el('header', { class: 'op-otsake' });
    otsake.innerHTML = `<p class="yla">${esc(o.jakso)}</p><h1>${esc(o.otsikko)}</h1>` +
      (o.lahde ? `<p class="lahde-rivi">${esc(o.lahde)}</p>` : '');
    if (o.hahmot) {
      const hl = el('ul', { class: 'hahmot' });
      Object.entries(o.hahmot).forEach(([id, h], i) => {
        const li = el('li', { 'data-p': String(i) });
        const kasvo = window.Kuvitus && window.Kuvitus.avatar(id, 'hahmolista-kasvo');
        if (kasvo) li.append(kasvo);
        li.append(el('b', {}, h.nimi));
        if (h.kuvaus) li.append(el('span', {}, h.kuvaus));
        hl.append(li);
      });
      otsake.append(hl);
    }
    m.append(otsake);
    const runko = el('div', { class: 'op-runko' });
    runko.innerHTML = o.html;
    m.append(runko);
    const kaikki = new Set([...Object.keys(o.sanat || {}), ...oppitunninSanat(o).keys()]);
    const ansat = [...kaikki].filter(k => ESP[k] && (ESP[k][1] === 'ansa' || ESP[k][1] === 'eri'));
    const samat = [...kaikki].filter(k => ESP[k] && ESP[k][1] === 'sama');
    if (ansat.length || samat.length) {
      const osio = el('section', { class: 'osio espanja-osio' });
      osio.append(el('h2', {}, 'Espanjasta apua'));
      if (samat.length) {
        const p = el('p', {}, `Nämä ${samat.length} oppitunnin sanaa ovat samat kuin espanjassa: `);
        samat.forEach((k, i) => { if (i) p.append(', '); p.append(el('span', { class: 'w', 'data-k': k, tabindex: '0', lang: 'pt-BR' }, k)); });
        osio.append(p);
      }
      if (ansat.length) {
        osio.append(el('p', {}, 'Näissä espanja johtaa harhaan. Opettele portugalin sana erikseen:'));
        const t = el('table', { class: 'es-taulu' });
        t.innerHTML = '<thead><tr><th>Portugali</th><th>Espanja</th><th>Huomaa</th></tr></thead>';
        const tb = el('tbody');
        for (const k of ansat) {
          const e = ESP[k];
          tb.append(el('tr', {},
            el('td', {}, el('span', { class: 'w', 'data-k': k, tabindex: '0', lang: 'pt-BR' }, k)),
            el('td', { lang: 'es' }, e[0]),
            el('td', {}, e[2] || (haeSana(k) ? fiLyhyt(haeSana(k)) : ''))));
        }
        t.append(tb);
        osio.append(el('div', { class: 'taulukko-kaari' }, t));
      }
      runko.append(osio);
    }
    const sanat = oppitunninSanat(o);
    if (sanat.size) {
      const osio = el('section', { class: 'osio', id: 'oppitunnin-sanasto' });
      osio.append(el('h2', {}, 'Sanasto ja pikavisa'));
      const ydinta = [...sanat.values()].filter(s => s !== 'oppitunti').length;
      osio.append(el('p', {}, `Oppitunnin sanastossa on ${sanat.size} sanaa ja ilmausta. Niistä ${ydinta} on lisätty puhutun portugalin yleisimpien sanojen listalta, koska niitä tarvitaan jokaisessa keskustelussa.`));
      const linkit = el('div', { class: 'linkkirivi' },
        el('a', { class: 'sanasto-linkki', href: `#${o.id}-sanasto` }, 'Oppitunnin sanasto →'),
        el('a', { class: 'sanasto-linkki', href: `#${o.id}-visa` }, 'Koko tietovisa →'));
      osio.append(linkit);
      const pika = el('div', { class: 'visa-paikka' });
      const aloitus = el('button', { type: 'button', class: 'visa-aloita' }, 'Aloita pikavisa (5 kysymystä)');
      aloitus.addEventListener('click', () => { pika.innerHTML = ''; visa(pika, o, 5); });
      pika.append(aloitus);
      osio.append(pika);
      runko.append(osio);
    }
    valmistele(m, o);
    if (window.Kuvitus) window.Kuvitus.oppitunti(m, o, { alkio });
    const i = K.oppitunnit.indexOf(o);
    const nav = el('nav', { class: 'op-nav' });
    if (i > 0) nav.append(el('a', { href: '#' + K.oppitunnit[i - 1].id }, '← ' + K.oppitunnit[i - 1].otsikko));
    if (i < K.oppitunnit.length - 1) nav.append(el('a', { href: '#' + K.oppitunnit[i + 1].id, class: 'seur' }, K.oppitunnit[i + 1].otsikko + ' →'));
    m.append(nav);
  }

  function naytaKokoSanasto(suunta) {
    nykyinenOppitunti = null;
    A.asetaPaketti(null);
    naytaSanalista({
      yla: 'Koko kurssin sanasto',
      otsikko: suunta === 'fi' ? 'Suomi–Portugali' : 'Portugali–Suomi',
      kuvaus: 'Kaikki tähän asti opitut sanat ja ilmaukset aakkosjärjestyksessä.',
      rivit: Object.entries(K.sanasto),
      suunta,
      reitti: s => (s === 'fi' ? 'fi-pt' : 'pt-fi'),
      naytaOppitunti: true
    });
  }

  function naytaOppitunninSanasto(o, suunta) {
    nykyinenOppitunti = o;
    A.asetaPaketti(o.id);
    naytaSanalista({
      yla: `${o.jakso} · ${o.otsikko}`,
      otsikko: 'Oppitunnin sanasto',
      kuvaus: 'Oppitunnin uudet sanat sekä tähän aiheeseen sopivat puhutun portugalin yleisimmät sanat.',
      rivit: [...oppitunninSanat(o).keys()].map(k => [k, haeSana(k)]),
      syyt: oppitunninSanat(o),
      suunta,
      reitti: s => `${o.id}-sanasto${s === 'fi' ? '-fi' : ''}`,
      naytaOppitunti: false
    });
  }

  /* ---------- tietovisa ---------- */

  const VISA_AVAIN = 'passo-a-passo-visa';
  const fiLyhyt = s => (s.fi || '').replace(/[{}]/g, '').split(';')[0].trim();
  const sekoita = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

  /* Visa: n kysymystä oppitunnin sanoista. Kolme kysymystyyppiä; väärin menneet kysytään uudelleen lopussa. */
  function visa(paikka, o, n) {
    const pooli = [...oppitunninSanat(o).keys()].filter(k => haeSana(k));
    if (pooli.length < 4) { paikka.append(el('p', {}, 'Visaan tarvitaan vähintään neljä sanaa.')); return; }
    const harhat = [...YDIN.keys()].filter(k => YDIN.get(k).taso !== 'puhe').slice(0, 300);
    let kysymykset = sekoita(pooli).slice(0, n).map((k, i) => ({ k, tyyppi: ['pt-fi', 'fi-pt', 'kuuntele'][i % 3] }));
    const uusinta = new Set();
    let kohta = 0, oikein = 0, vastattu = 0;
    const vaarat = [];
    const laatikko = el('div', { class: 'visa' });
    paikka.append(laatikko);

    function vaihtoehdot(k, tyyppi) {
      const omat = sekoita(pooli.filter(x => x !== k));
      const muut = sekoita(harhat.filter(x => x !== k && !pooli.includes(x)));
      const valitut = [k, ...omat.slice(0, 3)];
      while (valitut.length < 4) valitut.push(muut.pop());
      const teksti = x => (tyyppi === 'pt-fi' ? fiLyhyt(haeSana(x)) : x);
      // ei kahta samannäköistä vaihtoehtoa
      const nahdyt = new Set();
      return sekoita(valitut).filter(x => { const t = teksti(x); if (nahdyt.has(t)) return false; nahdyt.add(t); return true; })
        .map(x => ({ x, teksti: teksti(x) }));
    }

    function nayta() {
      laatikko.innerHTML = '';
      if (kohta >= kysymykset.length) return lopetus();
      const { k, tyyppi } = kysymykset[kohta];
      const s = haeSana(k);
      laatikko.append(el('p', { class: 'visa-tila' }, `Kysymys ${kohta + 1} / ${kysymykset.length} · oikein ${oikein}`));
      const kysymys = el('div', { class: 'visa-kysymys' });
      if (tyyppi === 'pt-fi') {
        kysymys.append(el('span', { class: 'visa-ohje' }, 'Mitä tämä tarkoittaa?'),
          el('span', { class: 'visa-sana', lang: 'pt-BR' }, k), ohjain(() => sana(k), { aina: true, nimi: 'Kuuntele' }));
      } else if (tyyppi === 'fi-pt') {
        kysymys.append(el('span', { class: 'visa-ohje' }, 'Miten tämä sanotaan portugaliksi?'), el('span', { class: 'visa-sana' }, fiLyhyt(s)));
      } else {
        kysymys.append(el('span', { class: 'visa-ohje' }, 'Kuuntele ja valitse kuulemasi sana.'),
          ohjain(() => sana(k), { aina: true, nimi: 'Kuuntele', teksti: 'Kuuntele' }));
        A.soita(sana(k));
      }
      laatikko.append(kysymys);
      const valinnat = el('div', { class: 'vaihtoehdot' });
      const palaute = el('p', { class: 'palaute', 'aria-live': 'polite' });
      for (const v of vaihtoehdot(k, tyyppi)) {
        const b = el('button', { type: 'button', lang: tyyppi === 'pt-fi' ? 'fi' : 'pt-BR' }, v.teksti);
        b.addEventListener('click', () => {
          if (valinnat.dataset.vastattu) return;
          valinnat.dataset.vastattu = '1';
          const ok = v.x === k;
          vastattu++;
          if (ok) oikein++;
          else {
            vaarat.push(k);
            if (!uusinta.has(k)) { uusinta.add(k); kysymykset.push({ k, tyyppi: tyyppi === 'kuuntele' ? 'pt-fi' : 'kuuntele' }); }
          }
          b.classList.add(ok ? 'oikein' : 'vaarin');
          if (!ok) [...valinnat.children].forEach(x => { if (x.textContent === (tyyppi === 'pt-fi' ? fiLyhyt(s) : k)) x.classList.add('oikein'); });
          palaute.className = 'palaute ' + (ok ? 'ok' : 'ei');
          palaute.textContent = ok ? 'Oikein!' : `Oikea vastaus: ${k} = ${fiLyhyt(s)}. Sana kysytään vielä uudelleen.`;
          A.soita(sana(k));
          seuraava.hidden = false;
          seuraava.focus();
        });
        valinnat.append(b);
      }
      const seuraava = el('button', { type: 'button', class: 'visa-seuraava', hidden: true }, 'Seuraava →');
      seuraava.addEventListener('click', () => { kohta++; nayta(); });
      laatikko.append(valinnat, palaute, seuraava);
    }

    function lopetus() {
      const pros = Math.round(100 * oikein / Math.max(1, vastattu));
      let paras = 0;
      try {
        const kaikki = JSON.parse(localStorage.getItem(VISA_AVAIN) || '{}');
        paras = Math.max(kaikki[o.id] || 0, pros);
        kaikki[o.id] = paras;
        localStorage.setItem(VISA_AVAIN, JSON.stringify(kaikki));
      } catch (e) { paras = pros; }
      laatikko.append(el('p', { class: 'visa-tulos' }, `${oikein} / ${vastattu} oikein (${pros} %).`),
        el('p', { class: 'ohje' }, `Paras tuloksesi tästä oppitunnista: ${paras} %.`));
      if (vaarat.length) {
        const lista = el('p', {}, 'Kertaa nämä: ');
        [...new Set(vaarat)].forEach((k, i) => {
          if (i) lista.append(', ');
          lista.append(el('span', { class: 'w', 'data-k': k, tabindex: '0', lang: 'pt-BR' }, k));
        });
        laatikko.append(lista);
      }
      const uudelleen = el('button', { type: 'button', class: 'visa-aloita' }, 'Uusi kierros');
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
    const otsake = el('header', { class: 'op-otsake' });
    otsake.innerHTML = `<p class="yla">${esc(o.jakso)} · ${esc(o.otsikko)}</p><h1>Tietovisa</h1>` +
      '<p class="lahde-rivi">12 kysymystä oppitunnin sanastosta ja siihen lisätyistä ydinsanoista. Väärin menneet sanat kysytään uudelleen kierroksen lopussa.</p>';
    m.append(otsake);
    const paikka = el('div', { class: 'visa-paikka' });
    m.append(paikka);
    visa(paikka, o, 12);
  }

  /* ---------- espanjasivu ---------- */

  function naytaEspanja() {
    nykyinenOppitunti = null;
    A.asetaPaketti('espanja');
    const m = paa();
    m.innerHTML = '';
    const otsake = el('header', { class: 'op-otsake' });
    otsake.innerHTML = '<p class="yla">Ydinsanat</p><h1>Espanjasta apua</h1><p class="lahde-rivi">Portugali ja espanja ovat sukukieliä: suuri osa sanoista on samoja tai lähes samoja. Osa tutuilta näyttävistä sanoista tarkoittaa kuitenkin aivan muuta. Nämä ansat kannattaa opetella erikseen.</p>';
    m.append(otsake);
    const kaavat = el('section', { class: 'osio' }, el('h2', {}, 'Muunnoskaavat'),
      el('p', { class: 'ohje' }, 'Näillä säännöillä espanjan sanasta pääsee usein portugalin sanaan.'));
    const kt = el('table', { class: 'es-taulu' });
    kt.innerHTML = '<thead><tr><th>Portugali ↔ espanja</th><th>Esimerkkejä</th></tr></thead>';
    const ktb = el('tbody');
    for (const [kaava, esim] of (K.espanja ? K.espanja.kaavat : [])) ktb.append(el('tr', {}, el('td', { class: 'kaava' }, kaava), el('td', {}, esim)));
    kt.append(ktb);
    kaavat.append(el('div', { class: 'taulukko-kaari' }, kt));
    m.append(kaavat);
    const ryhmat = [
      ['ansa', 'Ansat: tuttu muoto, eri merkitys', 'Nämä sanat näyttävät espanjalta, mutta merkitys tai käyttö on eri. Espanjaa osaavan yleisimmät virheet.'],
      ['eri', 'Yleiset sanat, jotka ovat espanjaksi erilaiset', 'Nämä pitää opetella uusina sanoina.'],
      ['lahes', 'Lähes samat', 'Tunnistat nämä espanjan kautta; huomaa kirjoitusasu ja ääntäminen.'],
      ['sama', 'Samat sanat', 'Kirjoitetaan samoin ja tarkoittavat samaa. Ääntäminen on silti portugalin mukainen!']
    ];
    for (const [laji, otsikko, selitys] of ryhmat) {
      const osio = el('section', { class: 'osio' }, el('h2', {}, otsikko), el('p', { class: 'ohje' }, selitys));
      const t = el('table', { class: 'es-taulu' });
      t.innerHTML = '<thead><tr><th></th><th>Portugali</th><th>Espanja</th><th>Suomi / huomaa</th></tr></thead>';
      const tb = el('tbody');
      for (const [k, e] of Object.entries(ESP).filter(([, e]) => e[1] === laji)) {
        const s = haeSana(k);
        const td = el('td', {}, s ? fiLyhyt(s) : '');
        if (e[2]) td.append(el('span', { class: 'sl' }, e[2]));
        tb.append(el('tr', {},
          el('td', { class: 'soitto' }, ohjain(() => sana(k), { aina: true, nimi: 'Kuuntele ' + k })),
          el('td', { class: 'pt-sana' }, el('span', { class: 'w', 'data-k': k, tabindex: '0', lang: 'pt-BR' }, k)),
          el('td', { lang: 'es' }, e[0]), td));
      }
      t.append(tb);
      osio.append(el('div', { class: 'taulukko-kaari' }, t));
      m.append(osio);
    }
  }

  /* ---------- ydinsanasivu ---------- */

  /* Ydinsanat ryhmitellään aiheittain (”muistipalatsi”): ensin persoonat, perusverbit ja pienet sanat, sitten arjen
     aihepiirit. Ryhmän sisällä yleisin sana ensin. Laajan perus-ryhmän sanat jaetaan tarkempiin ryhmiin. */
  const YDIN_RYHMAT = [
    ['persoonat', 'Persoonat: minä, sinä, hän'], ['osoitus', 'Omistus ja osoitus: minun, tämä, sama'],
    ['perusverbit', 'Perusverbit: olla, voida, täytyä'], ['kysymys', 'Kysymyssanat'], ['tervehdys', 'Tervehdykset ja kohteliaisuus'],
    ['pienet', 'Pienet sanat: artikkelit ja prepositiot'], ['sidesanat', 'Sidesanat: ja, mutta, koska'],
    ['maara', 'Määrä: paljon, kaikki, jokin'], ['korostus', 'Kielto ja korostus: ei, todella'],
    ['ihmiset', 'Ihmiset ja perhe'], ['keho', 'Keho ja terveys'], ['tunteet', 'Tunteet'], ['ajattelu', 'Ajattelu'],
    ['viestinta', 'Puhuminen ja viestintä'], ['toiminta', 'Tekeminen'], ['liike', 'Liikkuminen'], ['aika', 'Aika'],
    ['paikka', 'Paikka ja suunta'], ['koti', 'Koti ja arki'], ['ruoka', 'Ruoka ja juoma'], ['kaupunki', 'Kaupunki ja liikenne'],
    ['tyo', 'Työ ja opiskelu'], ['raha', 'Raha ja ostokset'], ['vapaa', 'Vapaa-aika'], ['luonto', 'Luonto ja eläimet'],
    ['numerot', 'Numerot'], ['ominaisuus', 'Ominaisuudet: millainen?'], ['asiat', 'Asiat ja tavat'], ['puhekieli', 'Puhekieli']
  ];
  const PERUS_RYHMA = {};
  for (const [r, sanat] of Object.entries({
    persoonat: 'eu você ele nós me te mim lhe comigo si tu se',
    osoitus: 'seu meu nosso esse este aquele isso isto aquilo próprio mesmo outro',
    perusverbit: 'ser estar ter haver poder dever existir faltar permitir bastar pertencer depender',
    pienet: 'o a um de em para por com sem sobre até contra além exceto apesar',
    sidesanat: 'e mas ou que porque pois nem então assim também caso ora',
    maara: 'muito mais todo tudo pouco menos tanto bastante demais cada algum alguém algo nada ninguém nenhum qualquer vários ambos maioria inteiro monte resto parte suficiente tal só apenas somente quase tão',
    korostus: 'não realmente exatamente simplesmente totalmente completamente especialmente sequer né junto',
    ominaisuus: 'necessário'
  })) sanat.split(' ').forEach(w => { PERUS_RYHMA[w] = r; });
  const ydinRyhma = y => (y.aihe === 'perus' ? PERUS_RYHMA[y.s] || 'asiat' : y.aihe) || 'asiat';

  function naytaYdinsanat(taso) {
    nykyinenOppitunti = null;
    A.asetaPaketti(null);
    const rajat = { 100: [1, 100], 300: [101, 300], 500: [301, 500], 1000: [501, 1000] };
    const [a, b] = rajat[taso] || [0, 0];
    const sanat = taso === 'puhe' ? PUHEKIELI.map(s => YDIN.get(s)) : [...YDIN.values()].filter(y => y.sija >= a && y.sija <= b);
    const ryhmat = new Map(YDIN_RYHMAT.map(([k]) => [k, []]));
    for (const y of sanat) {
      const r = taso === 'puhe' ? 'puhekieli' : ydinRyhma(y);
      (ryhmat.get(r) || ryhmat.get('asiat')).push([y.s, haeSana(y.s)]);
    }
    const nimet = Object.fromEntries(YDIN_RYHMAT);
    const ryhmitys = [...ryhmat].filter(([, r]) => r.length).map(([k, r]) => [nimet[k], r]);
    const m = paa();
    m.innerHTML = '';
    m.append(sanalista([], 'pt', { ryhmitys }).taulukko);
    valmistele(m, null);
  }

  /* Hakuosan sivu (assets/hakuosa.js): yleinen tieto, johon palataan oppituntien aikana. */
  function naytaHakusivu(h) {
    nykyinenOppitunti = null;
    A.asetaPaketti('hakuosa');
    const m = paa();
    m.innerHTML = '';
    const otsake = el('header', { class: 'op-otsake' });
    otsake.innerHTML = `<p class="yla">${h.valikko === 'ydinsanat' ? 'Ydinsanat' : 'Hakuosa'}</p><h1>${esc(h.otsikko)}</h1><p class="lahde-rivi">${esc(h.kuvaus)}</p>`;
    m.append(otsake);
    const runko = el('div', { class: 'op-runko hakusivu' });
    runko.innerHTML = h.html();
    m.append(runko);
    // Verbihakemiston linkit vierittävät kortille vaihtamatta osoitetta.
    $$('[data-hyppy]', runko).forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      const kohde = document.getElementById(a.dataset.hyppy);
      if (kohde) kohde.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
    valmistele(m, null);
  }

  function naytaEtusivu() {
    nykyinenOppitunti = null;
    A.asetaPaketti(null);
    const m = paa();
    m.innerHTML = $('#etusivu-pohja').innerHTML;
    const lista = $('#oppituntilista', m);
    for (const o of K.oppitunnit) {
      const li = el('li');
      const a = el('a', { href: '#' + o.id });
      a.append(el('span', { class: 'jakso' }, o.jakso), el('span', { class: 'nimi' }, o.otsikko));
      if (o.lahde) a.append(el('span', { class: 'lahde' }, o.lahde));
      li.append(a);
      lista.append(li);
    }
    valmistele(m, null);
    paivitaAaniTila();
  }

  function paivitaValikko(id) {
    $$('#valikko a').forEach(a => a.classList.toggle('nyt', a.getAttribute('href') === '#' + id));
    const oppitunti = id.replace(/-(sanasto(-fi)?|visa)$/, '');
    $$('#valikko [data-oppitunti]').forEach(li => li.classList.toggle('aktiivinen', li.dataset.oppitunti === oppitunti));
    $$('#valikko .v-ryhma li:not([data-oppitunti])').forEach(li => {
      const a = li.querySelector('a');
      li.classList.toggle('aktiivinen', !!a && a.getAttribute('href') === '#' + id);
    });
  }

  function reititä() {
    A.pysayta();
    piilotaKuplat(true);
    const id = (location.hash || '#etusivu').slice(1);
    const sanastoOsuma = id.match(/^(.+)-sanasto(-fi)?$/);
    const visaOsuma = id.match(/^(.+)-visa$/);
    const ov = visaOsuma && K.oppitunnit.find(x => x.id === visaOsuma[1]);
    const ydinOsuma = id.match(/^ydin-(100|300|500|1000|puhe)$/);
    const o = K.oppitunnit.find(x => x.id === id);
    const os = sanastoOsuma && K.oppitunnit.find(x => x.id === sanastoOsuma[1]);
    let valikossa = 'etusivu';
    if (o) { naytaOppitunti(o); valikossa = id; }
    else if (os) { naytaOppitunninSanasto(os, sanastoOsuma[2] ? 'fi' : 'pt'); valikossa = `${os.id}-sanasto`; }
    else if (ov) { naytaVisa(ov); valikossa = `${ov.id}-visa`; }
    else if (id === 'espanja') { naytaEspanja(); valikossa = 'espanja'; }
    else if ((K.hakuosa || []).some(h => h.id === id)) { naytaHakusivu(K.hakuosa.find(h => h.id === id)); valikossa = id; }
    else if (ydinOsuma || id === 'ydinsanat') { const t = ydinOsuma ? ydinOsuma[1] : '100'; naytaYdinsanat(t); valikossa = `ydin-${t}`; }
    else if (id === 'pt-fi' || id === 'fi-pt' || id === 'sanasto') { naytaKokoSanasto(id === 'fi-pt' ? 'fi' : 'pt'); valikossa = id === 'fi-pt' ? 'fi-pt' : 'pt-fi'; }
    else naytaEtusivu();
    if (window.Kuvitus) window.Kuvitus.apuhahmot($('#sisalto'));   // oppaat läksyissä ja visoissa
    if (window.Asettelu) window.Asettelu.kayta($('#sisalto'));   // vaihtoehtoinen asettelu, jos valittu
    neljannekset($('#sisalto'));
    paivitaValikko(valikossa);
    window.scrollTo(0, 0);
  }

  /* Taulukoiden neljännesruudukko (tyyli.css): enintään 4 sarakkeen taulukossa sarakkeet alkavat 0, 25, 50 ja 75 %:n
     kohdalta, viimeinen sarake saa loput. Yli 4 saraketta, verbien taivutusruudukko ja .vapaa-taulu: vapaa mitoitus. */
  function neljannekset(juuri) {
    $$('table', juuri).forEach(t => {
      if (t.classList.contains('vapaa-taulu') || t.classList.contains('verbitaulu') || t.querySelector('colgroup')) return;
      const sarakkeita = Math.max(0, ...[...t.rows].map(r => [...r.cells].reduce((n, c) => n + (c.colSpan || 1), 0)));
      if (sarakkeita < 2 || sarakkeita > 4) return;
      const cg = el('colgroup');
      for (let i = 0; i < sarakkeita; i++) {
        const leveys = i < sarakkeita - 1 ? 25 : 100 - 25 * (sarakkeita - 1);
        cg.append(el('col', i === 0 ? { class: 'ensimmainen' } : { style: `width:${leveys}%` }));
      }
      t.prepend(cg);
      t.classList.add('neljannes');
    });
  }

  /* ---------- yläpalkki ja ääniasetukset ---------- */

  /* Sivuvalikon ryhmät avautuvat ja sulkeutuvat otsakkeesta (tila muistetaan selaimessa). Kiinni ollessaan ryhmä
     näyttää vain avoinna olevan sivun. Oppitunnin Sanasto- ja Tietovisa-linkit näkyvät vain avoinna olevalla oppitunnilla. */
  function valikkoryhma(nimi, avain, oletusAuki, kohdat) {
    const ryhma = el('li', { class: 'v-ryhma' });
    const lista = el('ul', { id: 'v-' + avain });
    const otsake = el('button', { type: 'button', class: 'v-otsake', 'aria-controls': 'v-' + avain },
      el('span', {}, nimi), el('span', { class: 'v-nuoli', 'aria-hidden': 'true' }, '▸'));
    kohdat.forEach(k => lista.append(k));
    const muisti = 'passo-a-passo-valikko-' + avain;
    let auki = oletusAuki;
    try { const t = localStorage.getItem(muisti); if (t !== null) auki = t === '1'; } catch (e) { /* oletus */ }
    const aseta = (x, tallenna) => {
      auki = x;
      ryhma.classList.toggle('kiinni', !x);
      otsake.setAttribute('aria-expanded', String(x));
      if (tallenna) { try { localStorage.setItem(muisti, x ? '1' : '0'); } catch (e) { /* ohita */ } }
    };
    otsake.addEventListener('click', () => aseta(!auki, true));
    aseta(auki, false);
    ryhma.append(otsake, lista);
    return ryhma;
  }
  const linkki = (href, nimi) => el('li', {}, el('a', { href }, nimi));

  function rakennaValikko() {
    const v = $('#valikko');
    v.innerHTML = '';
    v.append(linkki('#etusivu', 'Etusivu'));
    // Hakuosa: Ääntäminen ensin, sitten kielioppi ja sanalistat omien alaotsikoidensa alla, Espanjasta apua viimeisenä.
    const hakukohdat = [];
    let edellinen = null;
    for (const h of (K.hakuosa || []).filter(x => !x.valikko)) {
      if (h.osio && h.osio !== edellinen) hakukohdat.push(el('li', { class: 'v-alaotsikko' }, h.osio));
      edellinen = h.osio;
      hakukohdat.push(linkki('#' + h.id, h.otsikko));
    }
    hakukohdat.push(el('li', { class: 'v-alaotsikko' }, 'Muuta'), linkki('#espanja', 'Espanjasta apua'));
    // Ydinsanat: yleisyyden mukaan lasketut listat ja aihepiirien sanalistat (hakuosa.js, valikko: 'ydinsanat').
    const ydinkohdat = [el('li', { class: 'v-alaotsikko' }, 'Yleisyyden mukaan'),
      ...[['100', 'Sanat 1–100'], ['300', 'Sanat 101–300'], ['500', 'Sanat 301–500'], ['1000', 'Sanat 501–1000'], ['puhe', 'Puhekieli']]
        .map(([t, nimi]) => linkki(`#ydin-${t}`, nimi)),
      el('li', { class: 'v-alaotsikko' }, 'Aihepiireittäin'),
      ...(K.hakuosa || []).filter(x => x.valikko === 'ydinsanat').map(h => linkki('#' + h.id, h.otsikko))];
    v.append(valikkoryhma('Hakuosa', 'hakuosa', false, hakukohdat));
    v.append(valikkoryhma('Oppitunnit', 'oppitunnit', false, K.oppitunnit.map(o => {
      const a = el('a', { href: '#' + o.id });
      a.append(el('span', { class: 'v-nro' }, o.lyhyt || ''), el('span', {}, o.otsikko));
      const li = el('li', { 'data-oppitunti': o.id }, a);
      li.append(el('a', { href: `#${o.id}-sanasto`, class: 'v-ala' }, el('span', { class: 'v-nro' }), el('span', {}, 'Sanasto')));
      li.append(el('a', { href: `#${o.id}-visa`, class: 'v-ala' }, el('span', { class: 'v-nro' }), el('span', {}, 'Tietovisa')));
      return li;
    })));
    v.append(valikkoryhma('Ydinsanat', 'ydinsanat', false, ydinkohdat));
    v.append(valikkoryhma('Sanasto', 'sanasto', false, [linkki('#pt-fi', 'Portugali–Suomi'), linkki('#fi-pt', 'Suomi–Portugali')]));
    // Sisarkurssi Tottakai (sama julkaisu, kansio tottakai/).
    v.append(el('li', {}, el('a', { href: 'tottakai/index.html' }, el('span', {}, 'Tottakai: suomea portugalinkielisille →'))));
  }

  function rakennaYlapalkki() {
    $('#sivun-toisto').append(ohjain(
      () => $$('#sisalto .s').filter(s => !s.closest('.valinta, [data-ei-sivulle]')).map(alkio),
      { aina: true, nimi: 'Kuuntele koko sivu', teksti: 'Koko sivu' }));

    $('#pysayta').addEventListener('click', () => A.pysayta());

    const kaannosNappi = $('#kaannokset');
    let auki = false;
    try { auki = localStorage.getItem(KAANNOS_AVAIN) === '1'; } catch (e) { /* oletus */ }
    const asetaKaannos = v => {
      auki = v;
      document.body.classList.toggle('kaannokset-auki', v);
      kaannosNappi.setAttribute('aria-pressed', String(v));
      try { localStorage.setItem(KAANNOS_AVAIN, v ? '1' : '0'); } catch (e) { /* ohita */ }
    };
    kaannosNappi.addEventListener('click', () => asetaKaannos(!auki));
    asetaKaannos(auki);

    const paneeli = $('#aanipaneeli');
    $('#aanet-nappi').addEventListener('click', () => {
      paneeli.hidden = !paneeli.hidden;
      $('#aanet-nappi').setAttribute('aria-expanded', String(!paneeli.hidden));
    });
    $('#aanitteet').addEventListener('change', e => A.aseta('aanitteet', e.target.checked));
    for (const rooli of ['kertoja', 'nainen', 'mies']) {
      $('#valitse-' + rooli).addEventListener('change', e => A.aseta(rooli, e.target.value));
    }
    const NAYTE = {
      kertoja: 'Olá! Boas-vindas ao curso de português.',
      nainen: 'Oi! Eu me chamo Maia. Tudo bem?',
      mies: 'Oi! Eu me chamo Jay. Muito prazer!'
    };
    $$('[data-testaa]').forEach(b => b.addEventListener('click', () => {
      const r = b.dataset.testaa;
      A.soita([{ teksti: NAYTE[r], tyyppi: r, el: null }]);
    }));
    A.kuuntele(paivitaAaniTila);
  }

  function kayttojarjestelma() {
    const u = navigator.userAgent;
    if (/Android/.test(u)) return 'android';
    if (/iPhone|iPad/.test(u)) return 'ios';
    if (/Windows/.test(u)) return 'win';
    if (/Mac OS X|Macintosh/.test(u)) return 'mac';
    if (/Linux/.test(u)) return 'linux';
    return 'win';
  }
  /* Selaimen omat äänet tulevat käyttöjärjestelmästä; niitä tarvitaan vain, jos äänitettä ei ole. */
  const ASENNUSOHJE = {
    win: 'Windows: Asetukset → Aika ja kieli → Puhe → Hallitse ääniä → Lisää ääniä → Portugali (Brasilia). Käynnistä selain sen jälkeen uudelleen.',
    mac: 'Mac: Järjestelmäasetukset → Käyttöapu → Puhuttu sisältö → Järjestelmän ääni → Hallitse ääniä → Portugali (Brasilia). Käynnistä selain sen jälkeen uudelleen.',
    linux: 'Linux: asenna paketit speech-dispatcher ja espeak-ng ja käynnistä selain uudelleen.',
    android: 'Android: Asetukset → Esteettömyys → Tekstistä puheeksi → Googlen puhepalvelut → Asenna äänidata → Portugali (Brasilia).',
    ios: 'iPhone ja iPad: Asetukset → Käyttöapu → Puhuttu sisältö → Äänet → Portugali (Brasilia).'
  };

  function aaniNimi(v) {
    const sp = { nainen: 'nainen', mies: 'mies' }[A.sukupuoli(v)] || 'tuntematon';
    return `${v.name.replace(/^Microsoft\s+/, '').replace(/\s*-\s*Portuguese.*$/, '')} (${sp}${A.luonnollinen(v) ? ', luonnollinen' : ''})`;
  }

  function paivitaAaniTila() {
    const aanet = A.aanet();
    for (const rooli of ['kertoja', 'nainen', 'mies']) {
      const s = $('#valitse-' + rooli);
      if (!s) continue;
      const nyt = A.asetus(rooli);
      s.innerHTML = '';
      s.append(el('option', { value: '' }, 'Automaattinen valinta'));
      for (const v of aanet) s.append(el('option', { value: v.voiceURI, selected: v.voiceURI === nyt }, aaniNimi(v)));
    }
    const ruutu = $('#aanitteet');
    if (ruutu) ruutu.checked = !!A.asetus('aanitteet');

    let viesti, taso;
    if (A.asetus('aanitteet') && A.leikkeita()) {
      viesti = 'Valmiit äänitteet ovat käytössä, ja ne kuulostavat samalta kaikilla laitteilla. ▶ toistaa Belo Horizonten ääntämyksellä.';
      taso = 'ok';
    } else if (A.asetus('aanitteet')) {
      viesti = 'Ladataan äänitteitä…';
      taso = 'huom';
    } else if (!A.tuettu) { viesti = 'Valmiit äänitteet on kytketty pois, eikä selain osaa lukea ääneen.'; taso = 'ei'; }
    else if (!aanet.length) { viesti = 'Valmiit äänitteet on kytketty pois, eikä koneelta löytynyt brasilianportugalin ääntä. ' + (ASENNUSOHJE[kayttojarjestelma()] || ''); taso = 'ei'; }
    else { viesti = `Selaimen äänet käytössä (${aanet.length} kpl).`; taso = 'huom'; }
    const d = A.diagnoosi ? A.diagnoosi() : null;
    if (d) {
      if (d.menetelma) viesti += ` Viimeksi soitettu: ${d.menetelma}.`;
      if (d.virhe) { viesti += ` Viimeisin äänivirhe: ${d.virhe}.`; if (taso === 'ok') taso = 'huom'; }
    }
    $$('.aanitila').forEach(e => { e.textContent = viesti; e.dataset.taso = taso; });
  }

  /* Äänen ongelmat näkyviin ruudun alareunaan, jotta syy näkyy myös puhelimella. */
  const ilmoitusRuutu = el('div', { class: 'aani-ilmoitus', role: 'status', hidden: true });
  let ilmoitusAjastin = 0;
  document.addEventListener('aani-ilmoitus', e => {
    ilmoitusRuutu.textContent = 'Ääni: ' + e.detail;
    ilmoitusRuutu.hidden = false;
    clearTimeout(ilmoitusAjastin);
    ilmoitusAjastin = setTimeout(() => { ilmoitusRuutu.hidden = true; }, 7000);
  });

  document.addEventListener('aani-virhe', e => {
    $$('.aanitila').forEach(x => { x.textContent = e.detail; x.dataset.taso = 'ei'; });
  });

  function kaynnista() {
    document.body.append(ilmoitusRuutu);
    const testiNappi = $('#aanitesti');
    if (testiNappi) testiNappi.addEventListener('click', async () => {
      const tulos = $('#aanitesti-tulos');
      tulos.textContent = 'Testataan…';
      const rivit = await A.testi();
      tulos.textContent = rivit.join('\n');
    });
    jaaYdinsanat();
    rakennaValikko();
    rakennaYlapalkki();
    window.addEventListener('hashchange', reititä);
    reititä();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', kaynnista);
  else kaynnista();
})();
