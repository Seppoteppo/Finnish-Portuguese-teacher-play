/* Oppituntien kuvalliset komponentit (oppitunnit 2–5 mallina), rekisteröityvät kuvitukseen (assets/kuvitus.js).
   Kielestä riippuvat osat (lukusanat, fraasipohjat) tulevat profiilista (Kurssi.profiili.luku, .fraasit), joten sama
   ohjelma toimii toisella kieliparilla. Jokainen komponentti on yksi ”sivun rikkova” osa (enintään 1 / oppitunti).

   Merkinnät (ks. tools/OHJE_KIRJOITTAJALLE.md):
   - Metro: <div class="metro" data-dialogi="id" data-linja="M1" data-asemat="A|B|C"></div>
     Dialogin kohdalla näytön yläreunaan tulee metron asemanäyttö, joka etenee lukemisen ja toiston mukana.
   - Kuitti: <div class="kuitti" data-kauppa="…" data-paiva="…"><p data-hinta="12">queijo</p>…</div>
     Kuitti tulostuu, kun se tulee näkyviin; rivin napautus sanoo tuotteen ja hinnan (data-hinta euroina, sentit
     desimaaleina: 4.2 = neljä euroa kaksikymmentä; data-puhu korvaa koneen lauseen).
   - Ruokalista: <div class="cardapio" data-otsikko="…"><div data-ryhma="Bebidas"><p data-hinta="4" data-art="um">café</p></div></div>
     Napauta tuotetta: tilaus kohdekielellä, tilauslista ja lasku lukusanoin.
   - Sukupuu: <div class="sukupuu" data-nakokulmat="jay,maia"><div class="sp-rivi"><div class="sp-perhe">
       <span data-hahmo="purjo" data-nimi="Purjo" data-suku="f" data-jay="a minha mãe|äitini" data-maia="a mãe do Jay|Jayn äiti"></span>
     …</div></div></div>   Näkökulma vaihtuu napista; henkilön napautus sanoo esittelylauseen. */
(function () {
  'use strict';
  const K = window.Kurssi;
  const T = {
    linja: 'Linja', seuraava: 'Seuraava asema', paateasema: 'Pääteasema', kuuntele: 'Kuuntele',
    tilaus: 'Tilauksesi', tyhja: 'Napauta tuotetta, niin tilaat sen.', lasku: 'Pyydä lasku', alusta: 'Tyhjennä',
    yhteensa: 'Yhteensä', nakokulma: 'Kuka puhuu?', kuollut: 'kuollut',
    kirjoittaa: 'digitando…', katso: 'Katso lähetys', tekstitys: 'Tekstitys', suomeksi: 'Suomeksi', lahetys: 'LIVE',
    lahdot: ['Hora', 'Destino', 'Voo', 'Portão', 'Situação'], kuuluta: 'Napauta lentoa: kuulet kuulutuksen.', minaOlen: 'Jay seisoo tässä',
    vaakaOhje: 'Valitse kaksi tuotetta: vaaka vertaa hintoja.', soitaKaikki: 'Toista koko päivä',
    karttaKuuntele: 'Kuuntele ohjeet', karttaAlusta: 'Alusta', karttaOhje: 'Kuuntele ohjeet ja ohjaa Jay perille napeilla.',
    valmis: 'Valmis!', kirjakieli: 'kirjakielessä',
    vastaaja: 'Vastaaja', uusia: 'uutta viestiä', teksti: 'Teksti', kuuntele2: 'Kuuntele',
    retratoOsat: { tukka: 'Tukka', hiukset: 'Hiusten väri', lasit: 'Lasit', viikset: 'Viikset' },
    kuvaus: 'Kuuntele kuvaus', tarkista: 'Tarkista', retratoOikein: 'Oikein! Tämä on hän.', retratoVaarin: 'Ei vielä. Kuuntele kuvaus uudelleen: väärin on',
    kehoOhje: 'Napauta kehon osaa: Jay kertoo, mihin sattuu.', kehoKysy: 'Marina kysyy', kehoOikein: 'Oikein!', kehoVaarin: 'Ei tuo. Yritä uudelleen.',
    kaanna: 'Käännä kortti', lueKortti: 'Lue kortti', edellinen: '◀', seuraava2: '▶', sivu: 'sivu'
  };
  Object.assign(T, (K.ui && K.ui.komponentit) || {});   // toisen kurssin käyttöliittymäkieli
  const iso = t => t ? t[0].toUpperCase() + t.slice(1) : t;
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const el = (tag, attrs, ...lapset) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) if (v !== null && v !== undefined && v !== false) e.setAttribute(k, v === true ? '' : v);
    for (const l of lapset) if (l !== null && l !== undefined) e.append(l);
    return e;
  };
  const P = () => (K.profiili && K.profiili.fraasit) || {};
  const luku = n => (K.profiili && K.profiili.luku) ? K.profiili.luku(n) : String(n);
  const tayta = (pohja, arvot) => String(pohja || '').replace(/\{(\w+)\}/g, (_, k) => arvot[k] !== undefined ? arvot[k] : '');
  const puhu = (teksti, el_, tyyppi = 'kertoja', vaihto = 0) => window.Aani.soita([{ teksti, tyyppi, vaihto, el: el_ || null }]);
  const kohdeLang = () => (K.profiili && K.profiili.kohdekieli && K.profiili.kohdekieli.bcp47) || 'pt-BR';
  const KAANNOS = (K.profiili && K.profiili.kentat && K.profiili.kentat.kaannos) || 'fi';   // data-fi (Passo), data-pt (Tottakai)

  /* ---------- metro: asemanäyttö dialogin ajan ---------- */
  function metro(m) {
    const dialogi = document.getElementById(m.dataset.dialogi);
    const asemat = (m.dataset.asemat || '').split('|').filter(Boolean);
    if (!dialogi || asemat.length < 2) return;
    const linja = m.dataset.linja || 'M';
    const pisteet = asemat.map(a => el('span', { class: 'metro-asema' }, el('i'), el('small', {}, a)));
    m.append(el('div', { class: 'metro-kortti' }, el('span', { class: 'metro-merkki' }, linja), el('div', { class: 'metro-viiva' }, ...pisteet)));
    const nimi = el('b', { lang: kohdeLang() });
    const ala = el('small');
    const juna = el('i', { class: 'metro-juna' });
    const kuuntele = el('button', { type: 'button', class: 'metro-kuuntele', 'aria-label': T.kuuntele }, '▶');
    const naytto = el('div', { class: 'metro-naytto', 'aria-live': 'polite', hidden: true },
      el('span', { class: 'metro-merkki' }, linja), el('div', { class: 'metro-teksti' }, ala, nimi), kuuntele,
      el('div', { class: 'metro-edistys' }, juna));
    document.body.append(naytto);
    let kohta = -1;
    const rivit = $$('.s', dialogi);
    const kuulutus = i => i >= asemat.length - 1 ? tayta(P().paateasema, { asema: asemat[asemat.length - 1] }) : tayta(P().seuraava, { asema: asemat[i + 1] });
    const aseta = i => {
      i = Math.max(0, Math.min(asemat.length - 1, i));
      if (i === kohta) return;
      kohta = i;
      ala.textContent = i >= asemat.length - 1 ? T.paateasema : `${T.seuraava} · ${asemat[i]} →`;
      nimi.textContent = kuulutus(i);
      juna.style.left = (100 * i / (asemat.length - 1)) + '%';
      pisteet.forEach((p, j) => { p.classList.toggle('ohi', j < i); p.classList.toggle('nyt', j === i); });
    };
    kuuntele.addEventListener('click', () => puhu(kuulutus(Math.max(0, kohta)), kuuntele));
    let odottaa = false;
    const paivita = () => {
      odottaa = false;
      if (!dialogi.isConnected) { naytto.remove(); window.removeEventListener('scroll', kuuntelija); return; }
      const r = dialogi.getBoundingClientRect();
      if (!r.height) return;   // sivua ei ole vielä asemoitu: ei arvata (muuten kaikki repliikit näyttävät luetuilta)
      // Näyttö tulee esiin vasta, kun dialogin otsikko (esim. ”Dialogi: Vamos!”) on vierinyt yläpalkin alle, jotta se ei
      // peitä oppitunnin otsikkoa eikä dialogin otsikkoa (käyttäjän toive 16.10.2026).
      const otsikko = m.closest('section') && m.closest('section').querySelector('h2');
      const ylaraja = (document.querySelector('.ylapalkki') || { getBoundingClientRect: () => ({ bottom: 80 }) }).getBoundingClientRect().bottom;
      const nakyy = (otsikko ? otsikko.getBoundingClientRect().bottom < ylaraja : r.top < innerHeight * 0.3) && r.bottom > 160;
      naytto.hidden = !nakyy;
      // Asema luetaan siitä repliikistä, jota lukija on lukemassa (lukulinja heti näytön alla), ei ruudun keskikohdasta:
      // ensimmäiset repliikit (laiturilla) = ensimmäinen asema (käyttäjä 17.10.2026: juna ei ollut koskaan Sörnäisissä).
      const lukulinja = ylaraja + 110;
      let luettu = -1;
      rivit.forEach((s, j) => { if (s.getBoundingClientRect().top <= lukulinja) luettu = j; });
      aseta(asemaRivista(Math.max(0, luettu)));
    };
    // Repliikki → asema. Repliikki voi kiinnittää aseman: <p class="s" data-asema="Keilaniemi">; kiinnitysten välillä
    // asema kulkee tasaisesti. Ilman kiinnityksiä dialogi jaetaan tasaisesti asemien kesken.
    const ankkurit = rivit.map((s, j) => [j, asemat.indexOf(s.dataset.asema || '')]).filter(([, a]) => a >= 0);
    const asemaRivista = j => {
      if (ankkurit.length < 2) return Math.min(asemat.length - 1, Math.floor(j * asemat.length / Math.max(1, rivit.length)));
      if (j <= ankkurit[0][0]) return ankkurit[0][1];
      for (let k = 1; k < ankkurit.length; k++) {
        const [j0, a0] = ankkurit[k - 1], [j1, a1] = ankkurit[k];
        if (j <= j1) return a0 + Math.floor((a1 - a0) * (j - j0) / Math.max(1, j1 - j0));
      }
      return ankkurit[ankkurit.length - 1][1];
    };
    const kuuntelija = () => { if (!odottaa) { odottaa = true; requestAnimationFrame(paivita); } };
    window.addEventListener('scroll', kuuntelija, { passive: true });
    // Dialogin toisto vie junaa eteenpäin repliikki kerrallaan (sama sääntö kuin vierityksessä).
    new MutationObserver(() => {
      const i = rivit.findIndex(s => s.classList.contains('soi'));
      if (i >= 0) aseta(asemaRivista(i));
    }).observe(dialogi, { subtree: true, attributes: true, attributeFilter: ['class'] });
    paivita();
    requestAnimationFrame(paivita);
    window.addEventListener('load', paivita, { once: true });
  }

  /* ---------- kuitti: tulostuu näkyviin tultaessa ---------- */
  // Rahasumma sanoin pohjaan: profiilin luku() lukee vain kokonaislukuja, joten sentit (data-hinta="4.2") sanotaan
  // erikseen pohjan rahayksikön jälkeen, ennen loppupistettä: ”suklaa: neljä euroa kaksikymmentä.” Summa pyöristetään
  // sentteihin ennen lukemista (liukuluvut: 4.2 + 9.8 ei ole aina tasan 14). Kokonaisluku luetaan kuten ennen (A6-48).
  const hintaSanoin = (pohja, arvot, hinta) => {
    const sentit = Math.round(hinta * 100);
    const teksti = tayta(pohja, Object.assign({}, arvot, { summa: luku(Math.floor(sentit / 100)) }));
    return sentit % 100 ? teksti.replace(/\s*([.!]?)\s*$/, ` ${luku(sentit % 100)}$1`) : teksti;
  };
  function kuitti(k) {
    const rivit = $$(':scope > p[data-hinta]', k);
    if (!rivit.length) return;
    const paperi = el('div', { class: 'kuitti-paperi', lang: kohdeLang() });
    paperi.append(el('div', { class: 'kuitti-yla' }, el('b', {}, k.dataset.kauppa || ''), el('small', {}, k.dataset.paiva || '')));
    let summa = 0;
    rivit.forEach((p, i) => {
      const hinta = Number(p.dataset.hinta);
      summa += hinta;
      const tuote = p.textContent.trim();
      const teksti = p.dataset.puhu || hintaSanoin(P().hinta, { tuote }, hinta);
      const r = el('button', { type: 'button', class: 'kuitti-rivi', style: `--i:${i}` }, el('span', {}, tuote), el('span', {}, hinta.toFixed(2).replace('.', ',')));
      r.addEventListener('click', () => puhu(teksti, r));
      paperi.append(r);
    });
    const yht = hintaSanoin(P().yhteensa, {}, summa);
    const yhtRivi = el('button', { type: 'button', class: 'kuitti-rivi kuitti-yht', style: `--i:${rivit.length}` }, el('span', {}, 'TOTAL'), el('span', {}, summa.toFixed(2).replace('.', ',') + ' €'));
    yhtRivi.addEventListener('click', () => puhu(yht, yhtRivi));
    paperi.append(yhtRivi, el('p', { class: 'kuitti-ala', style: `--i:${rivit.length + 1}` }, k.dataset.loppu || ''));
    rivit.forEach(p => p.remove());
    k.append(paperi);
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(m => { if (m.some(x => x.isIntersecting)) { io.disconnect(); k.classList.add('tulostuu'); } }, { threshold: 0.3 });
      io.observe(k);
    } else k.classList.add('tulostuu');
  }

  /* ---------- ruokalista: tilaa napauttamalla, lasku lukusanoin ---------- */
  function cardapio(c) {
    const lista = el('ul', { class: 'cd-tilaus-lista' });
    const yht = el('p', { class: 'cd-yht' });
    const tilatut = [];
    const piirra = () => {
      lista.textContent = '';
      if (!tilatut.length) lista.append(el('li', { class: 'cd-tyhja' }, T.tyhja));
      tilatut.forEach(t => lista.append(el('li', {}, el('span', { lang: kohdeLang() }, t.tuote), el('span', {}, t.hinta + ' €'))));
      const s = tilatut.reduce((a, t) => a + t.hinta, 0);
      yht.textContent = s ? `${T.yhteensa}: ${s} € = ${luku(s)} euros` : '';
    };
    $$('[data-ryhma]', c).forEach(r => {
      const otsikko = el('h4', { lang: kohdeLang() }, r.dataset.ryhma);
      const tuotteet = $$('p[data-hinta]', r).map(p => {
        const tuote = p.textContent.trim(), hinta = Number(p.dataset.hinta);
        const b = el('button', { type: 'button', class: 'cd-tuote', lang: kohdeLang() }, el('span', {}, tuote), el('span', { class: 'cd-hinta' }, hinta));
        b.addEventListener('click', () => {
          tilatut.push({ tuote, hinta });
          piirra();
          puhu(tayta(P().tilaus, { tuote: (p.dataset.art ? p.dataset.art + ' ' : '') + tuote }), b, 'mies', 0);
        });
        return b;
      });
      r.replaceChildren(otsikko, ...tuotteet);
    });
    const lasku = el('button', { type: 'button', class: 'cd-nappi' }, T.lasku);
    lasku.addEventListener('click', () => {
      const s = tilatut.reduce((a, t) => a + t.hinta, 0);
      if (!s) return;
      puhu(tayta(P().lasku, { summa: luku(s) }), lasku, 'nainen', 5);
    });
    const alusta = el('button', { type: 'button', class: 'cd-nappi toissijainen' }, T.alusta);
    alusta.addEventListener('click', () => { tilatut.length = 0; piirra(); });
    const taulu = el('div', { class: 'cd-taulu' }, el('h3', { lang: kohdeLang() }, c.dataset.otsikko || 'Cardápio'), ...$$('[data-ryhma]', c));
    c.replaceChildren(taulu, el('div', { class: 'cd-tilaus' }, el('h4', {}, T.tilaus), lista, yht, el('div', { class: 'cd-napit' }, lasku, alusta)));
    piirra();
  }

  /* ---------- sukupuu: näkökulman mukaan vaihtuvat omistussanat ---------- */
  function sukupuu(s) {
    const nakokulmat = (s.dataset.nakokulmat || '').split(',').filter(Boolean);
    if (!nakokulmat.length) return;
    const nimiHahmo = id => ((K.oppitunnit.find(o => o.hahmot && o.hahmot[id]) || {}).hahmot || {})[id];
    let nyt = nakokulmat[0];
    const henkilot = $$('[data-hahmo]', s);
    const lause = h => {
      const nimi = h.dataset.nimi || h.dataset.hahmo;
      const suku = h.dataset.suku || 'm';
      if (h.dataset.hahmo === nyt) return tayta(P()['mina_' + suku], { nimi });
      const [suhde] = (h.dataset[nyt] || '').split('|');
      return tayta(P()['esittely_' + suku], { suhde, nimi });
    };
    const puhuja = () => { const h = nimiHahmo(nyt) || {}; return { tyyppi: h.tyyppi || 'kertoja', vaihto: h.vaihto || 0 }; };
    const piirra = () => {
      henkilot.forEach(h => {
        const [suhde, fi] = (h.dataset[nyt] || '').split('|');
        h.querySelector('.sp-suhde').textContent = h.dataset.hahmo === nyt ? 'eu' : suhde || '';
        h.querySelector('.sp-fi').textContent = h.dataset.hahmo === nyt ? '' : fi || '';
        h.classList.toggle('sp-mina', h.dataset.hahmo === nyt);
      });
      $$('.sp-nakokulma button', s).forEach(b => b.setAttribute('aria-pressed', String(b.dataset.k === nyt)));
    };
    henkilot.forEach(h => {
      const kuva = window.Kuvitus && window.Kuvitus.avatar(h.dataset.hahmo, 'sp-kasvo');
      const b = el('button', { type: 'button', class: 'sp-nappi' + (h.hasAttribute('data-kuollut') ? ' sp-kuollut' : '') }, kuva,
        el('b', {}, h.dataset.nimi || ''), el('span', { class: 'sp-suhde', lang: kohdeLang() }), el('small', { class: 'sp-fi' }));
      if (h.hasAttribute('data-kuollut')) b.title = T.kuollut;
      b.addEventListener('click', () => { const p = puhuja(); puhu(lause(h), b, p.tyyppi, p.vaihto); });
      h.append(b);
    });
    const valinta = el('div', { class: 'sp-nakokulma' }, el('span', {}, T.nakokulma),
      ...nakokulmat.map(k => {
        const b = el('button', { type: 'button', 'data-k': k, 'aria-pressed': 'false' }, window.Kuvitus && window.Kuvitus.avatar(k, 'sp-pieni'), (nimiHahmo(k) || {}).nimi || k);
        b.addEventListener('click', () => { nyt = k; piirra(); });
        return b;
      }));
    s.prepend(valinta);
    piirra();
  }

  /* ---------- chat: vanha viestiketju, viestit ilmestyvät yksi kerrallaan ----------
     <div class="chat" data-otsikko="Maia" data-paiva="Kuusamo" data-mina="jay"><p data-h="maia" data-aika="18:02" data-fi="…">…</p></div>
     data-mina = kenen puhelin (omat viestit oikealla). Napautus: viesti soi puhujan äänellä ja suomennos näkyy. */
  function chat(c, o, apu) {
    const viestit = $$(':scope > p', c);
    if (!viestit.length) return;
    const mina = c.dataset.mina || '';
    const vastapuoli = (viestit.find(p => p.dataset.h && p.dataset.h !== mina) || {}).dataset || {};
    const yla = el('div', { class: 'chat-yla' }, window.Kuvitus && window.Kuvitus.avatar(vastapuoli.h, 'chat-kasvo'),
      el('div', {}, el('b', {}, c.dataset.otsikko || ''), el('small', {}, c.dataset.paiva || '')));
    const runko = el('div', { class: 'chat-runko', lang: kohdeLang() });
    const kirjoittaa = el('div', { class: 'chat-kirjoittaa', hidden: true }, T.kirjoittaa);
    const kuplat = viestit.map(p => {
      const oma = p.dataset.h === mina;
      const teksti = p.textContent.trim();
      // Kupla rakennetaan kappaleen solmuista (ei textContentista), jotta sisäiset merkinnät (data-l, .pala, lang)
      // säilyvät ja sivun glossaus näkee ne (auditointi A-M1). Reunojen tyhjä tila poistetaan kuten trim().
      const sisalto = el('span', { class: 'chat-teksti' }, ...[...p.childNodes].map(n => n.cloneNode(true)));
      const reuna = (n, alku) => { if (n && n.nodeType === 3) n.nodeValue = alku ? n.nodeValue.replace(/^\s+/, '') : n.nodeValue.replace(/\s+$/, ''); };
      reuna(sisalto.firstChild, true); reuna(sisalto.lastChild, false);
      const b = el('button', { type: 'button', class: 'chat-kupla odottaa' + (oma ? ' oma' : '') },
        sisalto, el('small', { class: 'chat-aika' }, p.dataset.aika || ''),
        p.dataset[KAANNOS] ? el('span', { class: 'chat-fi', hidden: true }, p.dataset[KAANNOS]) : null);
      b.addEventListener('click', () => {
        const fi = b.querySelector('.chat-fi');
        if (fi) fi.hidden = false;
        if (!/\p{L}/u.test(teksti)) return;   // pelkkä emoji (😐): ei puhuttavaa, ei TTS:ää (A6-37)
        const s = el('span'); s.dataset.puhu = teksti; s.dataset.h = p.dataset.h || '';
        window.Aani.soita([Object.assign(apu.alkio(s), { el: b })]);
      });
      return b;
    });
    viestit.forEach(p => p.remove());
    runko.append(...kuplat, kirjoittaa);
    c.append(el('div', { class: 'chat-puhelin' }, yla, runko));
    // Puhelin on heti täysikokoinen (käyttäjä 17.10.2026): tulevat viestit varaavat paikkansa näkymättöminä
    // (.odottaa = visibility: hidden), ja korkeuteen lasketaan mukaan ”kirjoittaa…”-rivi, joten puhelin ei kasva
    // eikä tarvitse vierityspalkkia viestien tullessa.
    const mitoita = () => {
      kirjoittaa.hidden = false;
      runko.style.minHeight = '';
      runko.style.minHeight = runko.scrollHeight + 'px';
      kirjoittaa.hidden = !runko.contains(kirjoittaa) || kirjoittaa.dataset.nakyy !== '1';
    };
    mitoita();
    if ('ResizeObserver' in window) new ResizeObserver(() => mitoita()).observe(c);
    const nayta = i => {
      if (i >= kuplat.length) { kirjoittaa.hidden = true; kirjoittaa.dataset.nakyy = ''; return; }
      // ”kirjoittaa…” seuraavan viestin paikalle (ei puhelimen alalaitaan tyhjien paikkojen alle).
      runko.insertBefore(kirjoittaa, kuplat[i]);
      kirjoittaa.hidden = false; kirjoittaa.dataset.nakyy = '1';
      kirjoittaa.classList.toggle('oma', kuplat[i].classList.contains('oma'));
      setTimeout(() => { kuplat[i].classList.remove('odottaa'); nayta(i + 1); }, 650 + Math.min(1600, kuplat[i].textContent.length * 22));
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(m => { if (m.some(x => x.isIntersecting)) { io.disconnect(); nayta(0); } }, { threshold: 0.35 });
      io.observe(c);
    } else kuplat.forEach(b => b.classList.remove('odottaa'));
  }

  /* ---------- pohjapiirros: este / esse / aquele etäisyyden mukaan ----------
     <div class="pohjapiirros" data-h="jay" data-mina="sala"><span data-huone="sala" data-nimi="a sala" data-suku="f"
       data-etaisyys="1" style="grid-area: 1 / 1 / 3 / 3"></span>…</div>   etäisyys 1 = tämä, 2 = tuo, 3 = tuo tuolla. */
  function pohjapiirros(p, o, apu) {
    const huoneet = $$('[data-huone]', p);
    const os = (K.profiili && K.profiili.osoittavat) || {};
    huoneet.forEach(h => {
      const et = h.dataset.etaisyys || '1', suku = h.dataset.suku || 'm';
      const pron = ((os[et] || {})[suku]) || '';
      const lause = tayta(P().huone, { pron, huone: h.dataset.nimi || '' });
      const b = el('button', { type: 'button', class: 'ph-huone ph-et' + et, lang: kohdeLang() },
        el('b', {}, h.dataset.nimi || ''), el('small', { class: 'ph-pron' }, pron.toLowerCase()), el('small', { class: 'ph-fi' }, h.dataset[KAANNOS] || ''));
      if (h.dataset.huone === p.dataset.mina) {
        const kuva = window.Kuvitus && window.Kuvitus.avatar(p.dataset.h, 'ph-mina');
        if (kuva) { kuva.title = T.minaOlen; b.append(kuva); }
      }
      b.addEventListener('click', () => {
        const s = el('span'); s.dataset.puhu = lause; s.dataset.h = p.dataset.h || '';
        window.Aani.soita([Object.assign(apu.alkio(s), { el: b })]);
      });
      b.setAttribute('style', h.getAttribute('style') || '');
      h.replaceWith(b);
    });
    p.classList.add('ph-valmis');
  }

  /* ---------- televisio: lähetys kuuntelutehtävänä (tekstitys oletuksena pois) ----------
     <div class="tv" data-kanava="…" data-h="apresentadora"><div data-kortti="Helsinque" data-saa="❄️" data-lampo="-5 °C"></div>
       <p data-kortti="Helsinque" data-fi="…">…</p></div>   Rivin data-kortti korostaa kortin, kun rivi soi. */
  function tv(t, o, apu) {
    const kortit = $$(':scope > div[data-kortti]', t).map(d => {
      const k = el('div', { class: 'tv-kortti', 'data-kortti': d.dataset.kortti }, el('span', { class: 'tv-saa', 'aria-hidden': 'true' }, d.dataset.saa || ''),
        el('b', {}, d.dataset.kortti), el('span', { class: 'tv-lampo' }, d.dataset.lampo || ''));
      d.remove();
      return k;
    });
    const rivit = $$(':scope > p', t);
    const tekstit = el('div', { class: 'tv-tekstit', lang: kohdeLang() });
    const jono = rivit.map(p => {
      const r = el('div', { class: 'tv-rivi', 'data-kortti': p.dataset.kortti || '' }, el('span', { class: 'tv-pt' }, p.textContent.trim()), el('span', { class: 'tv-fi' }, p.dataset[KAANNOS] || ''));
      tekstit.append(r);
      const s = el('span'); s.dataset.puhu = p.textContent.trim(); s.dataset.h = t.dataset.h || '';
      return Object.assign(apu.alkio(s), { el: r });
    });
    rivit.forEach(p => p.remove());
    const juontaja = window.Kuvitus && window.Kuvitus.avatar(t.dataset.h, 'tv-juontaja');
    const ruutu = el('div', { class: 'tv-ruutu ei-teksti ei-fi' },
      el('div', { class: 'tv-yla' }, el('span', { class: 'tv-live' }, T.lahetys), el('span', {}, t.dataset.kanava || '')),
      el('div', { class: 'tv-studio' }, juontaja, el('div', { class: 'tv-kortit' }, ...kortit)), tekstit,
      el('div', { class: 'tv-nauha' }, el('span', {}, t.dataset.nauha || t.dataset.kanava || '')));
    const katso = el('button', { type: 'button', class: 'tv-nappi' }, '▶ ' + T.katso);
    const tekstitys = el('button', { type: 'button', class: 'tv-nappi toissijainen', 'aria-pressed': 'false' }, T.tekstitys);
    const suomeksi = el('button', { type: 'button', class: 'tv-nappi toissijainen', 'aria-pressed': 'false' }, T.suomeksi);
    tekstitys.addEventListener('click', () => { const p = tekstitys.getAttribute('aria-pressed') !== 'true'; tekstitys.setAttribute('aria-pressed', String(p)); ruutu.classList.toggle('ei-teksti', !p); });
    suomeksi.addEventListener('click', () => { const p = suomeksi.getAttribute('aria-pressed') !== 'true'; suomeksi.setAttribute('aria-pressed', String(p)); ruutu.classList.toggle('ei-fi', !p); });
    const seuraaja = new MutationObserver(() => {
      const soi = tekstit.querySelector('.tv-rivi.soi');
      kortit.forEach(k => k.classList.toggle('esilla', !!soi && soi.dataset.kortti === k.dataset.kortti));
      if (juontaja) juontaja.classList.toggle('puhuu', !!soi);
    });
    seuraaja.observe(tekstit, { subtree: true, attributes: true, attributeFilter: ['class'] });
    katso.addEventListener('click', () => window.Aani.soita(jono, { ohjain: { alku() { ruutu.classList.add('paalla'); }, loppu() { ruutu.classList.remove('paalla'); } } }));
    t.append(el('div', { class: 'tv-laite' }, ruutu, el('div', { class: 'tv-jalka' })), el('div', { class: 'tv-napit' }, katso, tekstitys, suomeksi));
  }

  /* ---------- lähtötaulu: lennot ja kuulutukset ----------
     <div class="lahtotaulu" data-otsikko="…"><p data-aika="07:35" data-kohde="Lisboa" data-lento="TP 1235" data-portti="32"
       data-tila="Embarque" data-puhu="kuulutus"></p></div> */
  function lahtotaulu(l) {
    const lennot = $$(':scope > p', l);
    const taulu = el('div', { class: 'lt-taulu', role: 'table', lang: kohdeLang() },
      el('div', { class: 'lt-otsikko' }, el('b', {}, '✈ ' + (l.dataset.otsikko || '')), el('span', { class: 'lt-kello' }, l.dataset.kello || '')),
      el('div', { class: 'lt-rivi lt-sarakkeet', role: 'row' }, ...T.lahdot.map(t => el('span', { role: 'columnheader' }, t))));
    lennot.forEach((p, i) => {
      const kentat = [p.dataset.aika, p.dataset.kohde, p.dataset.lento, p.dataset.portti, p.dataset.tila];
      const r = el('button', { type: 'button', class: 'lt-rivi', role: 'row', style: `--i:${i}` },
        ...kentat.map((k, j) => el('span', { role: 'cell', class: j === 4 ? 'lt-tila lt-' + String(k || '').toLowerCase().normalize('NFD').replace(/[^a-z]/g, '') : null },
          ...[...String(k || '')].map((m, n) => el('i', { style: `--n:${n}` }, m)))));
      r.addEventListener('click', () => puhu(p.dataset.puhu || '', r, 'nainen', 5));
      taulu.append(r);
      p.remove();
    });
    l.append(taulu, el('p', { class: 'lt-ohje' }, T.kuuluta));
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(m => { if (m.some(x => x.isIntersecting)) { io.disconnect(); l.classList.add('kaantyy'); } }, { threshold: 0.3 });
      io.observe(l);
    } else l.classList.add('kaantyy');
  }

  /* ---------- vaaka: kahden tuotteen hintavertailu (comparativos) ----------
     <div class="vaaka" data-h="mirela" data-valuutta="R$"><p data-tuote="o queijo canastra" data-suku="m" data-hinta="60" data-ikoni="🧀">queijo canastra</p>…</div>
     Lause: profiilin fraasit kalliimpi_/halvempi_/yhta_ + suku (m/f) tuotteen A mukaan. */
  function vaaka(v, o, apu) {
    const tuotteet = $$(':scope > p[data-hinta]', v).map(p => ({ nimi: p.dataset.tuote || p.textContent.trim(), lyhyt: p.textContent.trim(), suku: p.dataset.suku || 'm', hinta: Number(p.dataset.hinta), ikoni: p.dataset.ikoni || '' }));
    $$(':scope > p[data-hinta]', v).forEach(p => p.remove());
    const valuutta = v.dataset.valuutta || '€';
    const vasen = el('div', { class: 'vk-kuppi' }), oikea = el('div', { class: 'vk-kuppi' });
    const varsi = el('div', { class: 'vk-varsi' }, vasen, oikea);
    const lause = el('p', { class: 'vk-lause', lang: kohdeLang(), 'aria-live': 'polite' }, T.vaakaOhje);
    let valitut = [];
    const kortit = tuotteet.map(t => {
      const b = el('button', { type: 'button', class: 'vk-tuote', lang: kohdeLang() }, el('span', { class: 'vk-ikoni', 'aria-hidden': 'true' }, t.ikoni), el('b', {}, t.lyhyt), el('small', {}, `${valuutta} ${t.hinta}`));
      b.addEventListener('click', () => {
        if (valitut.length === 2) valitut = [];
        valitut.push(t);
        kortit.forEach((k, i) => k.classList.toggle('valittu', valitut.includes(tuotteet[i])));
        vasen.replaceChildren(valitut[0] ? el('span', {}, valitut[0].ikoni, el('small', {}, valitut[0].lyhyt)) : '');
        oikea.replaceChildren(valitut[1] ? el('span', {}, valitut[1].ikoni, el('small', {}, valitut[1].lyhyt)) : '');
        if (valitut.length < 2) { varsi.style.transform = ''; return; }
        const [a, c] = valitut;
        const laji = a.hinta > c.hinta ? 'kalliimpi' : a.hinta < c.hinta ? 'halvempi' : 'yhta';
        varsi.style.transform = `rotate(${laji === 'kalliimpi' ? -10 : laji === 'halvempi' ? 10 : 0}deg)`;
        const teksti = iso(tayta(P()[laji + '_' + a.suku], { a: a.nimi, b: c.nimi }));
        lause.textContent = teksti;
        const s = el('span'); s.dataset.puhu = teksti; s.dataset.h = v.dataset.h || '';
        window.Aani.soita([Object.assign(apu.alkio(s), { el: lause })]);
      });
      return b;
    });
    v.append(el('div', { class: 'vk-laite' }, el('div', { class: 'vk-jalka' }), varsi), lause, el('div', { class: 'vk-tuotteet' }, ...kortit));
  }

  /* ---------- sovituskoppi: värin valinta, myyjän kommentti ja Jayn vastaus (objektipronomini) ----------
     <div class="provador" data-h="jay" data-myyja="marina"><div data-esine="a camisa" data-suku="f" data-osa="paita"
       data-varit="vermelha:#c0392b,azul:#2b55a6"></div></div>   osa: paita | lippis (mitä hahmokuvassa vaihdetaan). */
  function provador(pr, o, apu) {
    const jay = pr.dataset.h || 'jay';
    const kuva = el('div', { class: 'pv-kuva' });
    const asu = {};
    const piirra = () => { kuva.innerHTML = window.Kuvitus ? window.Kuvitus.muotokuva(jay, { ohita: asu }) : ''; };
    const lauseet = el('div', { class: 'pv-lauseet', lang: kohdeLang(), 'aria-live': 'polite' });
    const esineet = $$(':scope > div[data-esine]', pr).map(d => {
      const esine = d.dataset.esine, suku = d.dataset.suku || 'f', osa = d.dataset.osa || 'paita';
      const varit = (d.dataset.varit || '').split(',').filter(Boolean).map(x => x.split(':'));
      const rivi = el('div', { class: 'pv-rivi' }, el('b', { lang: kohdeLang() }, esine));
      varit.forEach(([nimi, vari]) => {
        const b = el('button', { type: 'button', class: 'pv-vari', style: `--vari:${vari}`, lang: kohdeLang(), title: nimi }, el('i'), el('span', {}, nimi));
        b.addEventListener('click', () => {
          asu[osa] = vari;
          if (osa === 'lippis') asu.lisatLippis = true;
          piirra();
          const myyja = tayta(P()['sopii_' + suku], { esine: iso(esine), vari: nimi });
          const vastaus = tayta(P()['levan_' + suku], {});
          lauseet.replaceChildren(el('p', {}, el('b', {}, ((o.hahmot || {})[pr.dataset.myyja] || {}).nimi + ': '), myyja),
            el('p', {}, el('b', {}, ((o.hahmot || {})[jay] || {}).nimi + ': '), vastaus, el('small', {}, ` (${T.kirjakieli}: ${tayta(P()['levan_kirja_' + suku], {})})`)));
          const a = el('span'); a.dataset.puhu = myyja; a.dataset.h = pr.dataset.myyja || '';
          const c = el('span'); c.dataset.puhu = vastaus; c.dataset.h = jay;
          window.Aani.soita([Object.assign(apu.alkio(a), { el: lauseet.firstChild }), Object.assign(apu.alkio(c), { el: lauseet.lastChild })]);
        });
        rivi.append(b);
      });
      d.remove();
      return rivi;
    });
    piirra();
    pr.append(el('div', { class: 'pv-koppi' }, el('div', { class: 'pv-peili' }, kuva), el('div', { class: 'pv-valinnat' }, ...esineet, lauseet)));
  }

  /* ---------- aikajana: kello ja päivän tapahtumat ----------
     <div class="aikajana"><p data-aika="6:00" data-hahmo="walker" data-h="kertoja" data-fi="…">O Walker se levanta às seis.</p></div> */
  function aikajana(a, o, apu) {
    const rivit = $$(':scope > p[data-aika]', a);
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 100 100'); svg.setAttribute('class', 'aj-kello'); svg.setAttribute('aria-hidden', 'true');
    let merkit = '<circle cx="50" cy="50" r="46" fill="#fffdf6" stroke="#23262a" stroke-width="3"/>';
    for (let i = 0; i < 12; i++) { const k = i * Math.PI / 6; merkit += `<line x1="${50 + 38 * Math.sin(k)}" y1="${50 - 38 * Math.cos(k)}" x2="${50 + 43 * Math.sin(k)}" y2="${50 - 43 * Math.cos(k)}" stroke="#23262a" stroke-width="${i % 3 ? 1.5 : 3}"/>`; }
    svg.innerHTML = merkit + '<line class="aj-tunti" x1="50" y1="50" x2="50" y2="26" stroke="#23262a" stroke-width="4" stroke-linecap="round"/>' +
      '<line class="aj-minuutti" x1="50" y1="50" x2="50" y2="14" stroke="#b4561e" stroke-width="2.5" stroke-linecap="round"/><circle cx="50" cy="50" r="3" fill="#23262a"/>';
    const aseta = aika => {
      const [h, m] = aika.split(':').map(Number);
      svg.querySelector('.aj-tunti').style.transform = `rotate(${(h % 12) * 30 + m / 2}deg)`;
      svg.querySelector('.aj-minuutti').style.transform = `rotate(${m * 6}deg)`;
    };
    const lista = el('ol', { class: 'aj-lista', lang: kohdeLang() });
    const jono = rivit.map(p => {
      const li = el('li', { class: 'aj-rivi' }, el('span', { class: 'aj-aika' }, p.dataset.aika), window.Kuvitus && window.Kuvitus.avatar(p.dataset.hahmo, 'aj-kasvo'),
        el('span', { class: 'aj-teksti' }, el('span', {}, p.textContent.trim()), el('small', {}, p.dataset[KAANNOS] || '')));
      li.dataset.aika = p.dataset.aika;
      const s = el('span'); s.dataset.puhu = p.textContent.trim(); s.dataset.h = p.dataset.h || 'kertoja';
      const alkio = Object.assign(apu.alkio(s), { el: li });
      li.addEventListener('click', () => { aseta(p.dataset.aika); window.Aani.soita([alkio]); });
      lista.append(li);
      return alkio;
    });
    rivit.forEach(p => p.remove());
    new MutationObserver(() => { const soi = lista.querySelector('.aj-rivi.soi'); if (soi) aseta(soi.dataset.aika); })
      .observe(lista, { subtree: true, attributes: true, attributeFilter: ['class'] });
    const kaikki = el('button', { type: 'button', class: 'tv-nappi' }, '▶ ' + T.soitaKaikki);
    kaikki.addEventListener('click', () => window.Aani.soita(jono));
    if (rivit[0]) aseta(rivit[0].dataset.aika);
    a.append(el('div', { class: 'aj-runko' }, el('div', { class: 'aj-vasen' }, svg, kaikki), lista));
  }

  /* ---------- kartta: ohjaa Jay perille käskymuodoilla ----------
     <div class="kartta" data-h="mateus" data-kartta="###..G|###.##|....##|.#####|J#####" data-nimet="0,0:Igreja;…"
       data-maali="Praça da Liberdade" data-ohjeet="kuulutettava ohjelause"></div>   # = talo, . = katu, J = alku, G = maali.
     Jay katsoo alussa ylös (pohjoiseen). */
  function kartta(k, o, apu) {
    const rivit = (k.dataset.kartta || '').split('|');
    const nimet = Object.fromEntries((k.dataset.nimet || '').split(';').filter(Boolean).map(x => { const [xy, n] = x.split(':'); return [xy, n]; }));
    const leveys = Math.max(...rivit.map(r => r.length)), korkeus = rivit.length;
    const ruudut = [];
    let alku = [0, 0];
    const ruudukko = el('div', { class: 'kt-ruudukko', style: `grid-template-columns: repeat(${leveys}, 1fr)` });
    rivit.forEach((r, y) => [...r].forEach((c, x) => {
      if (c === 'J') alku = [x, y];
      const ruutu = el('div', { class: 'kt-ruutu ' + (c === '#' ? 'kt-talo' : c === 'G' ? 'kt-maali' : 'kt-katu') },
        c === '#' && nimet[`${x},${y}`] ? el('small', { lang: kohdeLang() }, nimet[`${x},${y}`]) : c === 'G' ? el('small', { lang: kohdeLang() }, '🌴 ' + (k.dataset.maali || '')) : '');
      ruudut.push(ruutu); ruudukko.append(ruutu);
    }));
    const solu = (x, y) => (rivit[y] || '')[x] || '#';
    const jay = el('div', { class: 'kt-jay' }, window.Kuvitus && window.Kuvitus.avatar(k.dataset.jay || 'jay', 'kt-kasvo'), el('i', { class: 'kt-nuoli' }, '▲'));
    ruudukko.append(jay);
    const SUUNNAT = [[0, -1], [1, 0], [0, 1], [-1, 0]];   // pohjoinen, itä, etelä, länsi
    let paikka = alku.slice(), suunta = 0, perilla = false;
    const tila = el('p', { class: 'kt-tila', 'aria-live': 'polite' }, T.karttaOhje);
    const piirra = () => {
      jay.style.left = `${(paikka[0] + 0.5) * 100 / leveys}%`;
      jay.style.top = `${(paikka[1] + 0.5) * 100 / korkeus}%`;
      jay.querySelector('.kt-nuoli').style.transform = `rotate(${suunta * 90}deg)`;
    };
    const sano = (teksti, kohde, puhuja) => { const s = el('span'); s.dataset.puhu = teksti; s.dataset.h = puhuja || k.dataset.h || ''; window.Aani.soita([Object.assign(apu.alkio(s), { el: kohde })]); };
    const nappi = (avain, toiminto) => {
      const b = el('button', { type: 'button', class: 'kt-nappi', lang: kohdeLang() }, P()[avain] || avain);
      b.addEventListener('click', () => {
        if (perilla) return;
        const tulos = toiminto();
        piirra();
        if (tulos === 'este') { tila.textContent = P().kartta_este; ruudukko.classList.add('kt-tormays'); setTimeout(() => ruudukko.classList.remove('kt-tormays'), 400); sano(P().kartta_este, tila); return; }
        if (solu(...paikka) === 'G') {
          perilla = true;
          const t = tayta(P().kartta_perilla, { paikka: k.dataset.maali || '' });
          tila.textContent = t; k.classList.add('kt-perilla');
          b.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: { tulos: 'oikein' } }));
          sano(t, tila);
          return;
        }
        sano(P()[avain], b);
      });
      return b;
    };
    const eteen = nappi('kartta_eteen', () => {
      const [dx, dy] = SUUNNAT[suunta];
      const nx = paikka[0] + dx, ny = paikka[1] + dy;
      if (nx < 0 || ny < 0 || nx >= leveys || ny >= korkeus || solu(nx, ny) === '#') return 'este';
      paikka = [nx, ny];
    });
    const oikealle = nappi('kartta_oikea', () => { suunta = (suunta + 1) % 4; });
    const vasemmalle = nappi('kartta_vasen', () => { suunta = (suunta + 3) % 4; });
    const kuuntele = el('button', { type: 'button', class: 'tv-nappi' }, '▶ ' + T.karttaKuuntele);
    kuuntele.addEventListener('click', () => sano(k.dataset.ohjeet || '', kuuntele));
    const alusta = el('button', { type: 'button', class: 'tv-nappi toissijainen' }, T.karttaAlusta);
    alusta.addEventListener('click', () => { paikka = alku.slice(); suunta = 0; perilla = false; k.classList.remove('kt-perilla'); tila.textContent = T.karttaOhje; piirra(); });
    k.append(el('div', { class: 'kt-runko' }, ruudukko, el('div', { class: 'kt-ohjaus' },
      el('div', { class: 'kt-mateus' }, window.Kuvitus && window.Kuvitus.avatar(k.dataset.h, 'kt-ohjaaja'), kuuntele),
      el('div', { class: 'kt-napit' }, vasemmalle, eteen, oikealle), tila, alusta)));
    piirra();
  }

  /* ---------- tehtävälista: Martan käskyt, lopuksi konfettia ----------
     <div class="tehtavalista" data-h="marta" data-otsikko="…" data-valmis="Feliz Natal! …"><p data-kenelle="jay" data-fi="…">Jay, ponha a mesa!</p></div> */
  function tehtavalista(t, o, apu) {
    const tehtavat = $$(':scope > p', t);
    const lista = el('ul', { class: 'tl-lista', lang: kohdeLang() });
    const puhu_ = (teksti, kohde) => { const s = el('span'); s.dataset.puhu = teksti; s.dataset.h = t.dataset.h || ''; window.Aani.soita([Object.assign(apu.alkio(s), { el: kohde })]); };
    let tehty = 0;
    tehtavat.forEach(p => {
      const teksti = p.textContent.trim();
      const ruksi = el('input', { type: 'checkbox', 'aria-label': T.valmis });
      const li = el('li', { class: 'tl-rivi' }, ruksi, window.Kuvitus && window.Kuvitus.avatar(p.dataset.kenelle, 'tl-kasvo'),
        el('button', { type: 'button', class: 'tl-kasky' }, el('span', {}, teksti), el('small', {}, p.dataset[KAANNOS] || '')));
      li.querySelector('.tl-kasky').addEventListener('click', () => puhu_(teksti, li));
      ruksi.addEventListener('change', () => {
        li.classList.toggle('tehty', ruksi.checked);
        tehty += ruksi.checked ? 1 : -1;
        if (tehty === tehtavat.length) {
          konfetti();
          puhu_(t.dataset.valmis || '', t);
          t.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: { tulos: 'oikein' } }));
        }
      });
      lista.append(li);
      p.remove();
    });
    t.append(el('div', { class: 'tl-taulu' }, el('h4', { lang: kohdeLang() }, t.dataset.otsikko || ''), lista, el('p', { class: 'tl-valmis', lang: kohdeLang() }, t.dataset.valmis || '')));
  }
  function konfetti() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const kerros = el('div', { class: 'konfetti', 'aria-hidden': 'true' });
    const varit = ['#e2574c', '#ffd166', '#2a9d8f', '#f4a261', '#8fb0f2', '#6cc485'];
    for (let i = 0; i < 90; i++) {
      kerros.append(el('i', { style: `left:${Math.random() * 100}%;background:${varit[i % varit.length]};animation-delay:${Math.random() * .8}s;animation-duration:${2.2 + Math.random() * 1.6}s;transform:rotate(${Math.random() * 360}deg)` }));
    }
    document.body.append(kerros);
    setTimeout(() => kerros.remove(), 4500);
  }

  /* ---------- vastaaja: puhelimen ääniviestit (kuuntelutehtävä) ----------
     <div class="vastaaja" data-otsikko="Correio de voz"><p data-h="maia" data-aika="02:10" data-fi="…">Jay, cadê você?</p></div> */
  function vastaaja(v, o, apu) {
    const viestit = $$(':scope > p', v);
    const lista = el('ul', { class: 'va-lista' });
    const laskuri = el('span', { class: 'va-laskuri' });
    let kuulematta = viestit.length;
    const paivita = () => { laskuri.textContent = kuulematta ? `${kuulematta} ${T.uusia}` : ''; };
    viestit.forEach(p => {
      const teksti = p.textContent.trim();
      const nimi = ((o.hahmot || {})[p.dataset.h] || {}).nimi || p.dataset.h || '';
      const avaa = el('button', { type: 'button', class: 'va-teksti-nappi', 'aria-expanded': 'false' }, T.teksti);
      const tekstiosa = el('div', { class: 'va-teksti', hidden: true, lang: kohdeLang() }, el('span', {}, teksti), el('small', {}, p.dataset[KAANNOS] || ''));
      const soita = el('button', { type: 'button', class: 'va-soita', 'aria-label': T.kuuntele2 }, '▶');
      const li = el('li', { class: 'va-viesti uusi' },
        el('div', { class: 'va-rivi' }, window.Kuvitus && window.Kuvitus.avatar(p.dataset.h, 'va-kasvo'),
          el('div', { class: 'va-tiedot' }, el('b', {}, nimi), el('small', {}, p.dataset.aika || '')),
          el('span', { class: 'va-aalto', 'aria-hidden': 'true' }, ...Array.from({ length: 14 }, (_, i) => el('i', { style: `--k:${(i * 37) % 10}` }))),
          soita, avaa), tekstiosa);
      const s = el('span'); s.dataset.puhu = teksti; s.dataset.h = p.dataset.h || '';
      const alkio = Object.assign(apu.alkio(s), { el: li });
      soita.addEventListener('click', () => {
        if (li.classList.contains('uusi')) { li.classList.remove('uusi'); kuulematta--; paivita(); }
        window.Aani.soita([alkio]);
      });
      avaa.addEventListener('click', () => { const auki = tekstiosa.hidden; tekstiosa.hidden = !auki; avaa.setAttribute('aria-expanded', String(auki)); });
      lista.append(li);
      p.remove();
    });
    paivita();
    v.append(el('div', { class: 'va-puhelin' },
      el('div', { class: 'va-yla' }, el('span', {}, '📶 ' + (v.dataset.kello || '')), el('span', {}, '🔋')),
      el('div', { class: 'va-otsikko' }, el('b', {}, v.dataset.otsikko || T.vastaaja), laskuri), lista));
  }

  /* ---------- retrato falado: rakenna kasvokuva kuvauksen perusteella ----------
     <div class="retrato" data-h="mirela" data-kuvaus="…" data-oikea="tukka:topete;hiukset:loiro;lasit:isot-lasit;viikset:viikset"
       data-pohja="iho:#d9a982;paita:#6b2fa0;tausta:#efd9f7;ilme:virne">
       <p data-osa="tukka" data-arvo="lyhyt" data-nappi="curto">Ele tem cabelo curto.</p>
       <p data-osa="hiukset" data-arvo="loiro" data-vari="#e8c547" data-nappi="loiro">O cabelo dele é loiro.</p>
       <p data-osa="lasit" data-arvo="ei" data-nappi="sem óculos">Ele não usa óculos.</p> … </div>
     osa: tukka (tukan muoto), hiukset (väri, data-vari), muut = lisä (arvo = hahmokuvan lisä tai ”ei”). */
  function retrato(r, o, apu) {
    const pohja = Object.fromEntries((r.dataset.pohja || '').split(';').filter(Boolean).map(x => x.split(':')));
    const oikea = Object.fromEntries((r.dataset.oikea || '').split(';').filter(Boolean).map(x => x.split(':')));
    const valinnat = $$(':scope > p[data-osa]', r).map(p => ({ osa: p.dataset.osa, arvo: p.dataset.arvo, vari: p.dataset.vari, nappi: p.dataset.nappi || p.dataset.arvo, teksti: p.textContent.trim() }));
    $$(':scope > p[data-osa]', r).forEach(p => p.remove());
    const osat = [...new Set(valinnat.map(v => v.osa))];
    const valittu = Object.fromEntries(osat.map(osa => [osa, valinnat.find(v => v.osa === osa)]));
    const kuva = el('div', { class: 'rt-kuva' });
    const piirra = () => {
      const h = { iho: pohja.iho || '#d9a982', hiukset: '#333', tukka: 'lyhyt', paita: pohja.paita || '#6b6b6b', tausta: pohja.tausta || '#eee', ilme: pohja.ilme || 'hymy', lisat: [] };
      for (const v of Object.values(valittu)) {
        if (v.osa === 'tukka') h.tukka = v.arvo;
        else if (v.osa === 'hiukset') h.hiukset = v.vari || h.hiukset;
        else if (v.arvo !== 'ei') h.lisat.push(v.arvo);
      }
      kuva.innerHTML = window.Kuvitus ? window.Kuvitus.muotokuva(null, { kuva: h }) : '';
    };
    const tila = el('p', { class: 'rt-tila', 'aria-live': 'polite' });
    const rivit = osat.map(osa => {
      const napit = valinnat.filter(v => v.osa === osa).map(v => {
        const b = el('button', { type: 'button', class: 'rt-nappi', lang: kohdeLang(), 'aria-pressed': String(valittu[osa] === v) }, v.vari ? el('i', { style: `background:${v.vari}` }) : null, v.nappi);
        b.addEventListener('click', () => {
          valittu[osa] = v;
          b.parentNode.querySelectorAll('.rt-nappi').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
          rivi.classList.remove('rt-vaarin');
          piirra();
          const s = el('span'); s.dataset.puhu = v.teksti; s.dataset.h = r.dataset.h || '';
          tila.textContent = v.teksti;
          window.Aani.soita([Object.assign(apu.alkio(s), { el: tila })]);
        });
        return b;
      });
      const rivi = el('div', { class: 'rt-rivi', 'data-osa': osa }, el('b', {}, (T.retratoOsat || {})[osa] || osa), el('div', { class: 'rt-napit' }, ...napit));
      return rivi;
    });
    const kuuntele = el('button', { type: 'button', class: 'tv-nappi' }, '▶ ' + T.kuvaus);
    kuuntele.addEventListener('click', () => { const s = el('span'); s.dataset.puhu = r.dataset.kuvaus || ''; s.dataset.h = r.dataset.h || ''; window.Aani.soita([Object.assign(apu.alkio(s), { el: kuuntele })]); });
    const tarkista = el('button', { type: 'button', class: 'tv-nappi toissijainen' }, T.tarkista);
    tarkista.addEventListener('click', () => {
      const vaarin = osat.filter(osa => oikea[osa] && valittu[osa].arvo !== oikea[osa]);
      rivit.forEach(rv => rv.classList.toggle('rt-vaarin', vaarin.includes(rv.dataset.osa)));
      tila.textContent = vaarin.length ? `${T.retratoVaarin} ${vaarin.map(x => ((T.retratoOsat || {})[x] || x).toLowerCase()).join(', ')}.` : T.retratoOikein;
      r.classList.toggle('rt-valmis', !vaarin.length);
      tarkista.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: { tulos: vaarin.length ? 'vaarin' : 'oikein' } }));
    });
    piirra();
    r.append(el('div', { class: 'rt-runko' }, el('div', { class: 'rt-vasen' }, el('div', { class: 'rt-kehys' }, kuva, el('span', { class: 'rt-leima' }, 'PROCURA-SE')), kuuntele),
      el('div', { class: 'rt-oikea' }, ...rivit, el('div', { class: 'rt-alas' }, tarkista), tila)));
  }

  /* ---------- keho: mihin sattuu? ----------
     <div class="keho" data-h="jay" data-kysyja="marina"><p data-osa="cabeca" data-nimi="a cabeça" data-fi="…">Ai, a minha cabeça!</p></div>
     Osat: cabeca, garganta, peito, barriga, braco, mao, perna, joelho, pe. */
  const KEHO_ALUEET = {
    cabeca: '<circle cx="100" cy="40" r="25"/>',
    garganta: '<rect x="91" y="64" width="18" height="16" rx="4"/>',
    peito: '<rect x="73" y="82" width="54" height="40" rx="8"/>',
    barriga: '<rect x="75" y="122" width="50" height="38" rx="8"/>',
    braco: '<rect x="49" y="86" width="20" height="70" rx="10"/><rect x="131" y="86" width="20" height="70" rx="10"/>',
    mao: '<circle cx="59" cy="166" r="11"/><circle cx="141" cy="166" r="11"/>',
    perna: '<rect x="77" y="162" width="21" height="88" rx="9"/><rect x="102" y="162" width="21" height="88" rx="9"/>',
    joelho: '<circle cx="87.5" cy="206" r="10"/><circle cx="112.5" cy="206" r="10"/>',
    pe: '<ellipse cx="84" cy="262" rx="15" ry="8"/><ellipse cx="116" cy="262" rx="15" ry="8"/>'
  };
  function keho(k, o, apu) {
    const h = ((K.hahmoKuvat || {})[k.dataset.h]) || {};
    const osat = $$(':scope > p[data-osa]', k).map(p => ({ osa: p.dataset.osa, nimi: p.dataset.nimi || '', fi: p.dataset[KAANNOS] || '', teksti: p.textContent.trim() }));
    $$(':scope > p[data-osa]', k).forEach(p => p.remove());
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 200 280'); svg.setAttribute('class', 'kh-keho'); svg.setAttribute('role', 'group');
    const iho = h.iho || '#e8c4a0', paita = h.paita || '#3c5a78';
    // Piirrosjärjestys: housut ja paita ensin, sitten iho, lopuksi napautettavat alueet läpinäkyvinä päällä.
    svg.innerHTML = `<g class="kh-pohja">` +
      `<rect x="77" y="158" width="46" height="70" rx="8" fill="#2d3e57"/><rect x="77" y="228" width="21" height="26" fill="${iho}"/><rect x="102" y="228" width="21" height="26" fill="${iho}"/>` +
      `<ellipse cx="84" cy="262" rx="15" ry="8" fill="#5a3b22"/><ellipse cx="116" cy="262" rx="15" ry="8" fill="#5a3b22"/>` +
      `<rect x="49" y="86" width="20" height="62" rx="10" fill="${iho}"/><rect x="131" y="86" width="20" height="62" rx="10" fill="${iho}"/>` +
      `<path d="M66 84Q100 72 134 84L130 162H70Z" fill="${paita}"/><rect x="49" y="86" width="20" height="30" rx="10" fill="${paita}"/><rect x="131" y="86" width="20" height="30" rx="10" fill="${paita}"/>` +
      `<circle cx="59" cy="160" r="10" fill="${iho}"/><circle cx="141" cy="160" r="10" fill="${iho}"/>` +
      `<rect x="91" y="60" width="18" height="18" fill="${iho}"/><circle cx="100" cy="40" r="24" fill="${iho}"/>` +
      `<path d="M76 34Q78 14 100 14Q122 14 124 34Q114 24 100 26Q86 24 76 34Z" fill="${h.hiukset || '#d9b35c'}"/>` +
      `<circle cx="91" cy="40" r="2.4" fill="#222"/><circle cx="109" cy="40" r="2.4" fill="#222"/><path d="M92 53Q100 48 108 53" fill="none" stroke="#6b2f2f" stroke-width="2" stroke-linecap="round"/>` +
      `</g>`;
    const tila = el('p', { class: 'kh-tila', 'aria-live': 'polite' }, T.kehoOhje);
    let kysytty = null;
    const sano = (teksti, puhuja, kohde) => { const s = el('span'); s.dataset.puhu = teksti; s.dataset.h = puhuja || ''; window.Aani.soita([Object.assign(apu.alkio(s), { el: kohde })]); };
    for (const x of osat) {
      if (!KEHO_ALUEET[x.osa]) continue;
      const g = document.createElementNS(ns, 'g');
      g.setAttribute('class', 'kh-alue'); g.setAttribute('data-osa', x.osa); g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button');
      g.setAttribute('aria-label', x.nimi);
      g.innerHTML = KEHO_ALUEET[x.osa];
      const valitse = () => {
        if (kysytty) {
          const oikein = kysytty.osa === x.osa;
          g.classList.add(oikein ? 'kh-oikein' : 'kh-vaarin');
          setTimeout(() => g.classList.remove('kh-oikein', 'kh-vaarin'), 900);
          tila.textContent = oikein ? `${T.kehoOikein} ${x.nimi}: ${x.teksti}` : T.kehoVaarin;
          g.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: { tulos: oikein ? 'oikein' : 'vaarin' } }));
          if (!oikein) return;
          kysytty = null;
        } else {
          tila.textContent = `${x.nimi}: ${x.teksti}`;
        }
        g.classList.add('kh-soi'); setTimeout(() => g.classList.remove('kh-soi'), 900);
        sano(x.teksti, k.dataset.h, tila);
      };
      g.addEventListener('click', valitse);
      g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); valitse(); } });
      svg.append(g);
    }
    const kysy = el('button', { type: 'button', class: 'tv-nappi' }, '▶ ' + T.kehoKysy);
    kysy.addEventListener('click', () => {
      const vaihtoehdot = osat.filter(x => KEHO_ALUEET[x.osa] && x !== kysytty);
      kysytty = vaihtoehdot[Math.floor(Math.random() * vaihtoehdot.length)];
      const t = tayta(P().keho_kysy, { osa: kysytty.nimi });
      tila.textContent = t;
      sano(t, k.dataset.kysyja, tila);
    });
    k.append(el('div', { class: 'kh-runko' }, el('div', { class: 'kh-vasen' }, svg),
      el('div', { class: 'kh-oikea' }, el('div', { class: 'kh-kysyja' }, window.Kuvitus && window.Kuvitus.avatar(k.dataset.kysyja, 'kh-kasvo'), kysy), tila)));
  }

  /* ---------- postikortti: käännettävä kortti, kuva edessä ja viesti takana ----------
     <div class="postikortti" data-kuva="ouro-preto" data-otsikko="Lembranças de Ouro Preto!" data-h="jay"
       data-osoite="Purjo|Kallio, Helsinque|Finlândia" data-leima="Ouro Preto · 27 DEZ"><p data-fi="…">Querida mãe,</p></div> */
  function postikortti(pk, o, apu) {
    const kuvatieto = (K.kuvat || {})[pk.dataset.kuva] || {};
    const rivit = $$(':scope > p', pk);
    const viesti = el('div', { class: 'pk-viesti', lang: kohdeLang() });
    const jono = rivit.map(p => {
      const r = el('p', { class: 'pk-rivi' }, el('span', {}, p.textContent.trim()), el('small', {}, p.dataset[KAANNOS] || ''));
      viesti.append(r);
      const s = el('span'); s.dataset.puhu = p.textContent.trim(); s.dataset.h = p.dataset.h || pk.dataset.h || '';
      return Object.assign(apu.alkio(s), { el: r });
    });
    rivit.forEach(p => p.remove());
    const etu = el('div', { class: 'pk-etu' },
      kuvatieto.src ? el('img', { src: kuvatieto.src, alt: kuvatieto.alt || '', loading: 'lazy' }) : null,
      el('span', { class: 'pk-tervehdys', lang: kohdeLang() }, pk.dataset.otsikko || ''));
    const osoite = el('div', { class: 'pk-osoite', lang: kohdeLang() }, ...(pk.dataset.osoite || '').split('|').map(x => el('span', {}, x)));
    const taka = el('div', { class: 'pk-taka' }, viesti, el('div', { class: 'pk-oikea' },
      el('div', { class: 'pk-merkki', 'aria-hidden': 'true' }, '🦜'), el('div', { class: 'pk-leima', 'aria-hidden': 'true' }, pk.dataset.leima || ''), osoite));
    const kortti = el('div', { class: 'pk-kortti' }, el('div', { class: 'pk-sisus' }, etu, taka));
    const kaanna = el('button', { type: 'button', class: 'tv-nappi toissijainen', 'aria-pressed': 'false' }, '↻ ' + T.kaanna);
    const kaannaKortti = auki => { kortti.classList.toggle('kaannetty', auki); kaanna.setAttribute('aria-pressed', String(auki)); };
    kaanna.addEventListener('click', () => kaannaKortti(!kortti.classList.contains('kaannetty')));
    etu.addEventListener('click', () => kaannaKortti(true));
    const lue = el('button', { type: 'button', class: 'tv-nappi' }, '▶ ' + T.lueKortti);
    lue.addEventListener('click', () => { kaannaKortti(true); window.Aani.soita(jono); });
    viesti.querySelectorAll('.pk-rivi').forEach((r, i) => r.addEventListener('click', () => window.Aani.soita([jono[i]])));
    pk.append(kortti, el('div', { class: 'pk-napit' }, kaanna, lue));
  }

  /* ---------- albumi: valokuva-albumi, sivu kerrallaan ----------
     <div class="albumi" data-otsikko="Verão na Finlândia"><figure data-kuva="korppoo" data-hahmot="walker,marta" data-h="marta" data-fi="…">
       <figcaption>Todo dia a gente ia para a sauna.</figcaption></figure></div> */
  function albumi(a, o, apu) {
    const sivut = $$(':scope > figure', a).map(f => {
      const kt = (K.kuvat || {})[f.dataset.kuva] || {};
      const teksti = (f.querySelector('figcaption') || f).textContent.trim();
      const kuvateksti = el('figcaption', { class: 'al-teksti', lang: kohdeLang() }, el('span', {}, teksti), el('small', {}, f.dataset[KAANNOS] || ''));
      const hahmot = (f.dataset.hahmot || '').split(',').filter(Boolean).map(id => window.Kuvitus && window.Kuvitus.avatar(id, 'al-kasvo'));
      const sivu = el('figure', { class: 'al-sivu' },
        el('div', { class: 'al-kuva' }, kt.src ? el('img', { src: kt.src, alt: kt.alt || '', loading: 'lazy' }) : null, el('div', { class: 'al-hahmot' }, ...hahmot)),
        kuvateksti);
      const s = el('span'); s.dataset.puhu = teksti; s.dataset.h = f.dataset.h || 'kertoja';
      const alkio = Object.assign(apu.alkio(s), { el: sivu });
      kuvateksti.addEventListener('click', () => window.Aani.soita([alkio]));
      f.remove();
      return { sivu, alkio };
    });
    let nyt = 0;
    const laskuri = el('span', { class: 'al-laskuri' });
    const nayta = (i, suunta) => {
      nyt = (i + sivut.length) % sivut.length;
      sivut.forEach((s, j) => { s.sivu.hidden = j !== nyt; });
      sivut[nyt].sivu.classList.remove('al-oikealle', 'al-vasemmalle');
      void sivut[nyt].sivu.offsetWidth;
      if (suunta) sivut[nyt].sivu.classList.add(suunta > 0 ? 'al-oikealle' : 'al-vasemmalle');
      laskuri.textContent = `${nyt + 1} / ${sivut.length}`;
    };
    const edel = el('button', { type: 'button', class: 'al-nappi', 'aria-label': T.edellinen + ' ' + T.sivu }, T.edellinen);
    const seur = el('button', { type: 'button', class: 'al-nappi', 'aria-label': T.seuraava2 + ' ' + T.sivu }, T.seuraava2);
    edel.addEventListener('click', () => nayta(nyt - 1, -1));
    seur.addEventListener('click', () => nayta(nyt + 1, 1));
    const kaikki = el('button', { type: 'button', class: 'tv-nappi' }, '▶ ' + T.soitaKaikki);
    kaikki.addEventListener('click', () => window.Aani.soita(sivut.map(s => s.alkio)));
    const kirja = el('div', { class: 'al-kirja' }, el('h4', { class: 'al-otsikko', lang: kohdeLang() }, a.dataset.otsikko || ''), ...sivut.map(s => s.sivu));
    new MutationObserver(() => { const i = sivut.findIndex(s => s.sivu.classList.contains('soi')); if (i >= 0 && i !== nyt) nayta(i, 1); })
      .observe(kirja, { subtree: true, attributes: true, attributeFilter: ['class'] });
    a.append(kirja, el('div', { class: 'al-ohjaus' }, edel, laskuri, seur, kaikki));
    nayta(0);
  }

  const rekisteroi = () => window.Kuvitus && window.Kuvitus.rekisteroi && window.Kuvitus.rekisteroi((juuri, o, apu) => {
    $$('.metro[data-dialogi]', juuri).forEach(metro);
    $$('.kuitti', juuri).forEach(kuitti);
    $$('.cardapio', juuri).forEach(cardapio);
    $$('.sukupuu', juuri).forEach(sukupuu);
    $$('.chat', juuri).forEach(c => chat(c, o, apu));
    $$('.pohjapiirros', juuri).forEach(p => pohjapiirros(p, o, apu));
    $$('.tv', juuri).forEach(t => tv(t, o, apu));
    $$('.lahtotaulu', juuri).forEach(lahtotaulu);
    $$('.vaaka', juuri).forEach(v => vaaka(v, o, apu));
    $$('.provador', juuri).forEach(p => provador(p, o, apu));
    $$('.aikajana', juuri).forEach(a => aikajana(a, o, apu));
    $$('.kartta', juuri).forEach(k => kartta(k, o, apu));
    $$('.tehtavalista', juuri).forEach(t => tehtavalista(t, o, apu));
    $$('.vastaaja', juuri).forEach(v => vastaaja(v, o, apu));
    $$('.retrato', juuri).forEach(r => retrato(r, o, apu));
    $$('.keho', juuri).forEach(k => keho(k, o, apu));
    $$('.postikortti', juuri).forEach(p => postikortti(p, o, apu));
    $$('.albumi', juuri).forEach(a => albumi(a, o, apu));
  });
  rekisteroi();
  window.Komponentit = { T };
})();
