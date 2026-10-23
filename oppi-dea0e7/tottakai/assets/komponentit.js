/* Tottakain oma kopio (omistaja 20.10.2026: ”Copy”; ei jaettuja tiedostoja Passon kanssa, AVOIMET AV-063). Kopioitu
   ../assets/komponentit.js:stä 20.10.2026; ero: metro ja kuitti lukevat puhujan äänen (data-aani + data-vaihto, kuten .huuto).
   Oppituntien kuvalliset komponentit (oppitunnit 2–5 mallina), rekisteröityvät kuvitukseen (assets/kuvitus.js).
   Kielestä riippuvat osat (lukusanat, fraasipohjat) tulevat profiilista (Kurssi.profiili.luku, .fraasit), joten sama
   ohjelma toimii toisella kieliparilla. Jokainen komponentti on yksi ”sivun rikkova” osa (enintään 1 / oppitunti).

   Merkinnät (ks. tottakai/docs/MERKINNAT.md, osa B):
   - Metro: <div class="metro" data-dialogi="id" data-linja="M1" data-asemat="A|B|C" data-aani="mies" data-vaihto="8"></div>
     (data-aani + data-vaihto = kuulutusten ääni; ilman niitä kertoja. Sama kuitissa.)
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
    kaanna: 'Käännä kortti', lueKortti: 'Lue kortti', edellinen: '◀', seuraava2: '▶', sivu: 'sivu',
    // AV-025 (23.10.2026): puhelimen napit. Tämä kopio on vain Tottakain, joten oletukset ovat portugaliksi (oppijan
    // käyttöliittymä); Kurssi.ui.komponentit voi korvata ne. Puhelun napit samat kuin videopuhelussa (Kurssi.ui.kuvitus).
    uusiViesti: 'nova mensagem', avaaViesti: 'Abrir a mensagem', kirjoita: 'Escrever', vastaaViestiin: 'Responder',
    soittaaPuhelu: 'está ligando…', vastaa: 'Atender', hylkaa: 'Recusar', lopeta: 'Desligar',
    puhelullaNyt: 'Em chamada', paattyi: 'Chamada encerrada', menetetty: 'Chamada perdida', uudelleenPuhelu: 'Ouvir a ligação de novo',
    soitaTakaisin: 'Ouvir a ligação'
  };
  for (const k of ['vastaa', 'hylkaa', 'lopeta', 'paattyi']) if (K.ui && K.ui.kuvitus && K.ui.kuvitus[k]) T[k] = K.ui.kuvitus[k];
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
  // Komponentin oma puhuja-ääni (data-aani + data-vaihto, kuten .huuto ja tools/poimi_aanet.js); ilman = kertoja.
  const aaniEl = e => [e.dataset.aani || 'kertoja', Number(e.dataset.vaihto || 0)];
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
    kuuntele.addEventListener('click', () => puhu(kuulutus(Math.max(0, kohta)), kuuntele, ...aaniEl(m)));
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
      r.addEventListener('click', () => puhu(teksti, r, ...aaniEl(k)));
      paperi.append(r);
    });
    const yht = hintaSanoin(P().yhteensa, {}, summa);
    const yhtRivi = el('button', { type: 'button', class: 'kuitti-rivi kuitti-yht', style: `--i:${rivit.length}` }, el('span', {}, 'TOTAL'), el('span', {}, summa.toFixed(2).replace('.', ',') + ' €'));
    yhtRivi.addEventListener('click', () => puhu(yht, yhtRivi, ...aaniEl(k)));
    paperi.append(yhtRivi, el('p', { class: 'kuitti-ala', style: `--i:${rivit.length + 1}` }, k.dataset.loppu || ''));
    rivit.forEach(p => p.remove());
    k.append(paperi);
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(m => { if (m.some(x => x.isIntersecting)) { io.disconnect(); k.classList.add('tulostuu'); } }, { threshold: 0.3 });
      io.observe(k);
    } else k.classList.add('tulostuu');
  }

  /* ---------- ruokalista: tilaa napauttamalla, lasku lukusanoin ----------
     Tottakai t07 (henkilöstöravintolan lista ja tarjotin): valinnaiset määreet; ilman niitä toiminta on ennallaan.
     .cardapio: data-aani + data-vaihto = tilaajan ääni (oletus mies 0), data-kassa-aani + data-kassa-vaihto = kassan ääni
     (oletus nainen 5), data-sano-hinta = kassa sanoo tuotteen hinnan tilauksen jälkeen (profiilin fraasi hinta),
     data-tilaus-otsikko ja data-lasku-nappi = tilauksen otsikko ja laskunapin teksti, data-lasku = kassan lause
     ({summa} = eurot sanoin, {sentit} = sentit sanoin tai tyhjä). Tuote: data-puhu = oma tilauslause, data-ikoni = kuva
     tuotteelle ja tilausriville. Sentit (7.2 = 7,20 €) näytetään pilkulla ja sanotaan kuten kuitissa (hintaSanoin). */
  function cardapio(c) {
    const lista = el('ul', { class: 'cd-tilaus-lista' });
    const yht = el('p', { class: 'cd-yht' });
    const tilatut = [];
    const tilaaja = c.dataset.aani ? aaniEl(c) : ['mies', 0];
    const kassa = [c.dataset.kassaAani || 'nainen', Number(c.dataset.kassaVaihto || 5)];
    const nayta = h => Number.isInteger(h) ? String(h) : h.toFixed(2).replace('.', ',');
    const summa = () => Math.round(tilatut.reduce((a, t) => a + t.hinta, 0) * 100) / 100;
    const ikoni = k => k ? el('span', { class: 'emoji cd-ikoni', 'aria-hidden': 'true' }, k) : null;
    const piirra = () => {
      lista.textContent = '';
      if (!tilatut.length) lista.append(el('li', { class: 'cd-tyhja' }, T.tyhja));
      tilatut.forEach(t => lista.append(el('li', {}, el('span', { lang: kohdeLang() }, ikoni(t.ikoni), t.tuote), el('span', {}, nayta(t.hinta) + ' €'))));
      const s = summa();
      if (!s) yht.textContent = '';
      else if (P().yhteensa) yht.replaceChildren(`${T.yhteensa}: ${nayta(s)} € · `, el('span', { lang: kohdeLang() }, hintaSanoin(P().yhteensa, {}, s)));
      else yht.textContent = `${T.yhteensa}: ${s} € = ${luku(s)} euros`;
    };
    $$('[data-ryhma]', c).forEach(r => {
      const otsikko = el('h4', { lang: kohdeLang() }, r.dataset.ryhma);
      const tuotteet = $$('p[data-hinta]', r).map(p => {
        const tuote = p.textContent.trim(), hinta = Number(p.dataset.hinta), kuva = p.dataset.ikoni || '';
        const b = el('button', { type: 'button', class: 'cd-tuote', lang: kohdeLang() }, el('span', {}, ikoni(kuva), tuote), el('span', { class: 'cd-hinta' }, nayta(hinta)));
        b.addEventListener('click', () => {
          tilatut.push({ tuote, hinta, ikoni: kuva });
          piirra();
          const tilaus = p.dataset.puhu || tayta(P().tilaus, { tuote: (p.dataset.art ? p.dataset.art + ' ' : '') + tuote });
          const jono = [{ teksti: tilaus, tyyppi: tilaaja[0], vaihto: tilaaja[1], el: b }];
          if (c.hasAttribute('data-sano-hinta')) jono.push({ teksti: hintaSanoin(P().hinta, { tuote: iso(tuote) }, hinta), tyyppi: kassa[0], vaihto: kassa[1], el: b });
          window.Aani.soita(jono);
        });
        return b;
      });
      r.replaceChildren(otsikko, ...tuotteet);
    });
    const lasku = el('button', { type: 'button', class: 'cd-nappi' }, c.dataset.laskuNappi || T.lasku);
    lasku.addEventListener('click', () => {
      const s = summa();
      if (!s) return;
      const s100 = Math.round(s * 100), sentit = s100 % 100;
      const lause = c.dataset.lasku
        ? tayta(c.dataset.lasku, { summa: luku(Math.floor(s100 / 100)), sentit: sentit ? luku(sentit) : '' }).replace(/\s+([.!?,])/g, '$1').replace(/\s{2,}/g, ' ')
        : hintaSanoin(P().lasku, {}, s);
      puhu(lause, lasku, ...kassa);
    });
    const alusta = el('button', { type: 'button', class: 'cd-nappi toissijainen' }, T.alusta);
    alusta.addEventListener('click', () => { tilatut.length = 0; piirra(); });
    const taulu = el('div', { class: 'cd-taulu' }, el('h3', { lang: kohdeLang() }, c.dataset.otsikko || 'Cardápio'), ...$$('[data-ryhma]', c));
    c.replaceChildren(taulu, el('div', { class: 'cd-tilaus' }, el('h4', {}, c.dataset.tilausOtsikko || T.tilaus), lista, yht, el('div', { class: 'cd-napit' }, lasku, alusta)));
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
    // AV-025 (L2B harjoitus 8: ”puhelimeen Vastaa-nappi; keskustelu etenee vain napista”; omistaja 23.10.2026: ”is
    // this for all phone related things there are several, do it”): viestit eivät enää ilmesty itsestään, kun puhelin
    // tulee näkyviin. Alussa näkyy saapuvan viestin ilmoitus (kuka) ja nappi Abrir; sen jälkeen jokainen Responder-
    // painallus näyttää seuraavat omat viestit ja niiden jälkeen tulevat vastaukset (”kirjoittaa…” kuten ennen).
    // Puhelin, joka alkaa omalla viestillä (data-mina kirjoittaa ensin), alkaa napista Escrever.
    const oma = i => kuplat[i].classList.contains('oma');
    let kohta = 0;
    const nappi = el('button', { type: 'button', class: 'chat-vastaa' });
    const ala = el('div', { class: 'chat-ala' }, nappi);
    const ilmoitus = oma(0) ? null : el('div', { class: 'chat-ilmoitus' },
      window.Kuvitus && window.Kuvitus.avatar(vastapuoli.h, 'chat-kasvo'),
      el('div', {}, el('b', {}, c.dataset.otsikko || ''), el('small', { lang: 'pt-BR' }, T.uusiViesti)));
    if (ilmoitus) runko.prepend(ilmoitus);
    const asetaNappi = () => {
      ala.classList.toggle('chat-ala-loppu', kohta >= kuplat.length);   // tila säilyy: puhelin ei pienene lopussa
      if (kohta >= kuplat.length) return;
      nappi.disabled = false;
      nappi.textContent = kohta === 0 ? (ilmoitus ? T.avaaViesti : T.kirjoita) : T.vastaaViestiin;
    };
    // Näyttää viestit kohdasta i alkaen: ensin omat (lyhyt viive), sitten vastapuolen viestit ”kirjoittaa…”-rivin
    // kanssa; pysähtyy seuraavan oman viestin kohdalle, jota nappi odottaa.
    const nayta = (i, omatKay) => {
      if (i >= kuplat.length || (!omatKay && oma(i))) {
        kirjoittaa.hidden = true; kirjoittaa.dataset.nakyy = ''; kohta = i; asetaNappi(); return;
      }
      // ”kirjoittaa…” seuraavan viestin paikalle (ei puhelimen alalaitaan tyhjien paikkojen alle).
      runko.insertBefore(kirjoittaa, kuplat[i]);
      kirjoittaa.hidden = oma(i); kirjoittaa.dataset.nakyy = oma(i) ? '' : '1';
      kirjoittaa.classList.toggle('oma', oma(i));
      const viive = oma(i) ? 350 : 650 + Math.min(1600, kuplat[i].textContent.length * 22);
      setTimeout(() => { kuplat[i].classList.remove('odottaa'); nayta(i + 1, omatKay && oma(i)); }, viive);
    };
    // Yksi painallus soittaa koko keskustelun (omistaja 23.10.2026: ”when this is pressed once, the whole conversations
    // plays out automatically”): viesti kerrallaan näkyviin (vastapuolelle ”kirjoittaa…”) ja puhujan äänellä; seuraava
    // alkaa, kun ääni loppuu. Muu napautus sivulla (esim. kuplan ▶) keskeyttää; nappi jää jatkamaan samasta kohdasta.
    const puhuttava = b => { const t = b.querySelector('.chat-teksti'); return t ? t.textContent.trim() : ''; };
    let ajo = null;
    const keskeyta = () => {
      if (!ajo) return;
      ajo.ohi = true; document.removeEventListener('click', ajo.kuuntelija, true); ajo = null;
      kirjoittaa.hidden = true; kirjoittaa.dataset.nakyy = ''; asetaNappi();
    };
    const soitaKaikki = i => {
      const oma2 = ajo;
      if (!oma2 || oma2.ohi) return;
      if (i >= kuplat.length) { kohta = i; keskeyta(); return; }
      kohta = i;
      runko.insertBefore(kirjoittaa, kuplat[i]);
      kirjoittaa.hidden = oma(i); kirjoittaa.dataset.nakyy = oma(i) ? '' : '1';
      kirjoittaa.classList.toggle('oma', oma(i));
      const viive = oma(i) ? 350 : 650 + Math.min(1600, kuplat[i].textContent.length * 22);
      setTimeout(() => {
        if (oma2.ohi) return;
        kuplat[i].classList.remove('odottaa');
        kirjoittaa.hidden = true; kirjoittaa.dataset.nakyy = '';
        const teksti = puhuttava(kuplat[i]);
        const seuraava = () => { if (!oma2.ohi) setTimeout(() => soitaKaikki(i + 1), 400); };
        if (!window.Aani || !/\p{L}/u.test(teksti)) { setTimeout(seuraava, 900); return; }   // pelkkä emoji: ei puhetta
        const s = el('span'); s.dataset.puhu = teksti; s.dataset.h = viestit[i].dataset.h || '';
        window.Aani.soita([Object.assign(apu.alkio(s), { el: kuplat[i] })], { ohjain: { alku() {}, loppu: seuraava } });
      }, viive);
    };
    nappi.addEventListener('click', () => {
      nappi.disabled = true;
      if (ilmoitus && ilmoitus.isConnected) ilmoitus.remove();
      // Ääni avataan heti napautuksessa (puhelimet sallivat äänen vain suoraan käyttäjän painalluksesta).
      if (window.Aani) window.Aani.soita([]);
      ajo = { ohi: false, kuuntelija: e => { if (!nappi.contains(e.target)) keskeyta(); } };
      setTimeout(() => { if (ajo) document.addEventListener('click', ajo.kuuntelija, true); }, 0);
      soitaKaikki(kohta);
    });
    c.querySelector('.chat-puhelin').append(ala);
    asetaNappi();
  }

  /* ---------- saapuva puhelu ennen puhelindialogia (AV-025, 23.10.2026) ----------
     <div class="saapuva" data-dialogi="k03-puhelu" data-h="purjo" data-soittaja="Purjo"></div> (ennen .kpl:ää)
     Puhelin soi: kortti (kasvot, nimi, ”está ligando…”) ja napit Recusar / Atender, kuten oppitunnin 1 videopuhelussa.
     Mitään ei soi itsestään. Atender käynnistää dialogin oman toiston (.kpl-palkki, app.js), joten toisto, pysäytys ja
     korostus ovat samat kuin ▶:ssä; toiston ajan kortissa on Desligar, lopussa ”Chamada encerrada”. Recusar: ”Chamada
     perdida” ja nappi, joka soittaa dialogin. Dialogin teksti näkyy sivulla koko ajan (kuten videopuhelussa). */
  function saapuva(s, o) {
    const dialogi = document.getElementById(s.dataset.dialogi);
    if (!dialogi) return;
    const nimi = s.dataset.soittaja || ((o.hahmot || {})[s.dataset.h] || {}).nimi || '';
    const tila = el('small', { class: 'sa-tila' }, T.soittaaPuhelu);
    const napit = el('div', { class: 'sa-napit' });
    const kortti = el('div', { class: 'sa-kortti sa-soi', role: 'group', 'aria-label': `${nimi} ${T.soittaaPuhelu}` },
      window.Kuvitus && window.Kuvitus.avatar(s.dataset.h, 'sa-kasvo'),
      el('div', { class: 'sa-tiedot' }, el('b', { lang: kohdeLang() }, nimi), tila), napit);
    s.append(kortti);
    const nappi = (luokka, teksti, toiminto) => {
      const b = el('button', { type: 'button', class: luokka }, el('span', {}, teksti));
      b.addEventListener('click', toiminto);
      return b;
    };
    const toisto = () => dialogi.querySelector('.kpl-palkki button.soita');
    const soi = () => { const b = toisto(); return !!b && b.closest('.ohj').classList.contains('paalla'); };
    const vaihe = luokka => { kortti.classList.remove('sa-soi', 'sa-puhelu', 'sa-ohi'); kortti.classList.add(luokka); };
    function puhelussa() {
      vaihe('sa-puhelu');
      tila.textContent = T.puhelullaNyt;
      napit.replaceChildren(nappi('vp-pyorea vp-hylkaa', T.lopeta, () => { if (soi()) window.Aani.pysayta(); else loppu(T.paattyi); }));
    }
    function loppu(teksti) {
      vaihe('sa-ohi');
      tila.textContent = teksti;
      napit.replaceChildren(nappi('pieni-nappi toissijainen', teksti === T.menetetty ? T.soitaTakaisin : T.uudelleenPuhelu, vastaa));
    }
    // Dialogin toiston tila (app.js ohjain: .ohj.paalla): myös dialogin oma ▶ vie kortin puheluun, ja toiston loppu
    // (tai pysäytys) päättää puhelun.
    let seuraaja = null;
    const seuraa = () => {
      const b = toisto();
      if (!b || seuraaja) return b;
      const ohj = b.closest('.ohj');
      seuraaja = new MutationObserver(() => {
        const paalla = ohj.classList.contains('paalla');
        if (paalla && !kortti.classList.contains('sa-puhelu')) puhelussa();
        else if (!paalla && kortti.classList.contains('sa-puhelu')) loppu(T.paattyi);
      });
      seuraaja.observe(ohj, { attributes: true, attributeFilter: ['class'] });
      return b;
    };
    function soiNyt() {
      vaihe('sa-soi');
      tila.textContent = T.soittaaPuhelu;
      napit.replaceChildren(nappi('vp-pyorea vp-hylkaa', T.hylkaa, () => loppu(T.menetetty)), nappi('vp-pyorea vp-ok', T.vastaa, vastaa));
    }
    function vastaa() {
      const b = seuraa();
      puhelussa();
      if (!b || soi()) return;
      b.click();   // ohjain.alku() asettaa .paalla heti (aani.js soita); jos ääntä ei ole, app.js näyttää ilmoituksen
      if (!soi()) soiNyt();   // ei ääntä: puhelin soi yhä, oppija voi yrittää uudelleen
    }
    soiNyt();
    seuraa();
  }

  /* ---------- pohjapiirros: este / esse / aquele etäisyyden mukaan ----------
     <div class="pohjapiirros" data-h="jay" data-mina="sala"><span data-huone="sala" data-nimi="a sala" data-suku="f"
       data-etaisyys="1" style="grid-area: 1 / 1 / 3 / 3"></span>…</div>   etäisyys 1 = tämä, 2 = tuo, 3 = tuo tuolla. */
  function pohjapiirros(p, o, apu) {
    if (p.hasAttribute('data-kolmijako')) return pohjapiirrosKolmijako(p, o, apu);   // suomen tämä / se / tuo (t08)
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
       data-tila="Embarque" data-puhu="kuulutus"></p></div>
     Tottakai (t10): valinnaiset data-sarakkeet="Aika|Kohde|…" (sarakkeiden otsikot taulun kielellä), data-ohje (ohjerivi
     käyttöliittymän kielellä) ja data-aani + data-vaihto (kuulutusten ääni, kuten metro ja kuitti); ilman niitä ennallaan. */
  function lahtotaulu(l) {
    const lennot = $$(':scope > p', l);
    const sarakkeet = l.dataset.sarakkeet ? l.dataset.sarakkeet.split('|') : T.lahdot;
    const aani = l.dataset.aani ? aaniEl(l) : ['nainen', 5];
    const taulu = el('div', { class: 'lt-taulu', role: 'table', lang: kohdeLang() },
      el('div', { class: 'lt-otsikko' }, el('b', {}, '✈ ' + (l.dataset.otsikko || '')), el('span', { class: 'lt-kello' }, l.dataset.kello || '')),
      el('div', { class: 'lt-rivi lt-sarakkeet', role: 'row' }, ...sarakkeet.map(t => el('span', { role: 'columnheader' }, t))));
    lennot.forEach((p, i) => {
      const kentat = [p.dataset.aika, p.dataset.kohde, p.dataset.lento, p.dataset.portti, p.dataset.tila];
      const r = el('button', { type: 'button', class: 'lt-rivi', role: 'row', style: `--i:${i}` },
        ...kentat.map((k, j) => el('span', { role: 'cell', class: j === 4 ? 'lt-tila lt-' + String(k || '').toLowerCase().normalize('NFD').replace(/[^a-z]/g, '') : null },
          ...[...String(k || '')].map((m, n) => el('i', { style: `--n:${n}` }, m)))));
      r.addEventListener('click', () => puhu(p.dataset.puhu || '', r, ...aani));
      taulu.append(r);
      p.remove();
    });
    l.append(taulu, el('p', { class: 'lt-ohje' }, l.dataset.ohje || T.kuuluta));
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(m => { if (m.some(x => x.isIntersecting)) { io.disconnect(); l.classList.add('kaantyy'); } }, { threshold: 0.3 });
      io.observe(l);
    } else l.classList.add('kaantyy');
  }

  /* ---------- vaaka: kahden tuotteen hintavertailu (comparativos) ----------
     <div class="vaaka" data-h="mirela" data-valuutta="R$"><p data-tuote="o queijo canastra" data-suku="m" data-hinta="60" data-ikoni="🧀">queijo canastra</p>…</div>
     Lause: profiilin fraasit kalliimpi_/halvempi_/yhta_ + suku (m/f) tuotteen A mukaan. */
  function vaaka(v, o, apu) {
    if (v.dataset.vert) return vaakaVertailu(v, o, apu);   // t11: suomen vertailu leksikon vert-kentästä (valinnainen data-vert)
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
    if (pr.hasAttribute('data-lauseet')) return provadorLauseet(pr, o, apu);   // valmiit kohdekielen repliikit (t12)
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
     Jay katsoo alussa ylös (pohjoiseen).
     Tottakai (t14): valinnaiset lapsirivit <p data-rivi="ohjeet|eteen|oikea|vasen|este|perilla" data-puhu="…"> antavat
     kohdekielen fraasit (korvaavat data-ohjeet- ja profiilin kartta_*-fraasit; äänipoiminta lukee data-puhu-rivit
     puhujan data-h äänellä), ja data-ohje, data-nappi-ohjeet, data-nappi-alusta antavat käyttöliittymän tekstit.
     Ilman niitä ennallaan. */
  function kartta(k, o, apu) {
    const omat = {};
    $$(':scope > p[data-rivi]', k).forEach(p => { omat['kartta_' + p.dataset.rivi] = p.dataset.puhu || p.textContent.trim(); p.remove(); });
    const F = avain => omat[avain] || P()[avain];
    const ohje = k.dataset.ohje || T.karttaOhje;
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
    const tila = el('p', { class: 'kt-tila', 'aria-live': 'polite' }, ohje);
    const piirra = () => {
      jay.style.left = `${(paikka[0] + 0.5) * 100 / leveys}%`;
      jay.style.top = `${(paikka[1] + 0.5) * 100 / korkeus}%`;
      jay.querySelector('.kt-nuoli').style.transform = `rotate(${suunta * 90}deg)`;
    };
    const sano = (teksti, kohde, puhuja) => { const s = el('span'); s.dataset.puhu = teksti; s.dataset.h = puhuja || k.dataset.h || ''; window.Aani.soita([Object.assign(apu.alkio(s), { el: kohde })]); };
    const nappi = (avain, toiminto) => {
      const b = el('button', { type: 'button', class: 'kt-nappi', lang: kohdeLang() }, F(avain) || avain);
      b.addEventListener('click', () => {
        if (perilla) return;
        const tulos = toiminto();
        piirra();
        if (tulos === 'este') { tila.textContent = F('kartta_este'); ruudukko.classList.add('kt-tormays'); setTimeout(() => ruudukko.classList.remove('kt-tormays'), 400); sano(F('kartta_este'), tila); return; }
        if (solu(...paikka) === 'G') {
          perilla = true;
          const t = tayta(F('kartta_perilla'), { paikka: k.dataset.maali || '' });
          tila.textContent = t; k.classList.add('kt-perilla');
          b.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: { tulos: 'oikein' } }));
          sano(t, tila);
          return;
        }
        sano(F(avain), b);
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
    const kuuntele = el('button', { type: 'button', class: 'tv-nappi' }, '▶ ' + (k.dataset.nappiOhjeet || T.karttaKuuntele));
    kuuntele.addEventListener('click', () => sano(omat.kartta_ohjeet || k.dataset.ohjeet || '', kuuntele));
    const alusta = el('button', { type: 'button', class: 'tv-nappi toissijainen' }, k.dataset.nappiAlusta || T.karttaAlusta);
    alusta.addEventListener('click', () => { paikka = alku.slice(); suunta = 0; perilla = false; k.classList.remove('kt-perilla'); tila.textContent = ohje; piirra(); });
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
      // t16: jos viestissä on data-l-kiinnitys (Soitin = soittaa, ei soitin-substantiivi), merkinnät säilyvät tekstissä;
      // ilman niitä teksti kuten ennen.
      const tekstiosa = el('div', { class: 'va-teksti', hidden: true, lang: kohdeLang() }, el('span', {}, ...(p.querySelector('[data-l]') ? Array.from(p.childNodes) : [teksti])), el('small', {}, p.dataset[KAANNOS] || ''));
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
    // t17 (valinnainen): data-nimet="silmat:Olhos;parta:Barba" = rivien nimet osille, joita T.retratoOsat ei tunne.
    const nimet = Object.fromEntries((r.dataset.nimet || '').split(';').filter(Boolean).map(x => x.split(':')));
    const osanNimi = osa => nimet[osa] || (T.retratoOsat || {})[osa] || osa;
    const valinnat = $$(':scope > p[data-osa]', r).map(p => ({ osa: p.dataset.osa, arvo: p.dataset.arvo, vari: p.dataset.vari, nappi: p.dataset.nappi || p.dataset.arvo, teksti: p.textContent.trim() }));
    $$(':scope > p[data-osa]', r).forEach(p => p.remove());
    const osat = [...new Set(valinnat.map(v => v.osa))];
    const valittu = Object.fromEntries(osat.map(osa => [osa, valinnat.find(v => v.osa === osa)]));
    const kuva = el('div', { class: 'rt-kuva' });
    const piirra = () => {
      const h = { iho: pohja.iho || '#d9a982', hiukset: '#333', tukka: 'lyhyt', paita: pohja.paita || '#6b6b6b', tausta: pohja.tausta || '#eee', ilme: pohja.ilme || 'hymy', lisat: [] };
      let silmat = null;
      for (const v of Object.values(valittu)) {
        if (v.osa === 'tukka') h.tukka = v.arvo;
        else if (v.osa === 'hiukset') h.hiukset = v.vari || h.hiukset;
        else if (v.osa === 'silmat') silmat = v.vari || null;   // t17: silmien väri (osa silmat + data-vari)
        else if (v.arvo !== 'ei') h.lisat.push(v.arvo);
      }
      let svg = window.Kuvitus ? window.Kuvitus.muotokuva(null, { kuva: h }) : '';
      // t17: iiris pupillin ympärille (kuvitus.js piirtää silmät 1,9:n mustina ympyröinä kohtiin 43,5 ja 56,5).
      if (silmat) svg = svg.replace(/<circle cx="(43\.5|56\.5)" cy="46" r="1\.9" fill="#1d1d1d"\/>/g,
        (_, x) => `<circle cx="${x}" cy="46" r="2.7" fill="${silmat}"/><circle cx="${x}" cy="46" r="1.2" fill="#1d1d1d"/>`);
      kuva.innerHTML = svg;
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
      const rivi = el('div', { class: 'rt-rivi', 'data-osa': osa }, el('b', {}, osanNimi(osa)), el('div', { class: 'rt-napit' }, ...napit));
      return rivi;
    });
    const kuuntele = el('button', { type: 'button', class: 'tv-nappi' }, '▶ ' + T.kuvaus);
    kuuntele.addEventListener('click', () => { const s = el('span'); s.dataset.puhu = r.dataset.kuvaus || ''; s.dataset.h = r.dataset.h || ''; window.Aani.soita([Object.assign(apu.alkio(s), { el: kuuntele })]); });
    const tarkista = el('button', { type: 'button', class: 'tv-nappi toissijainen' }, T.tarkista);
    tarkista.addEventListener('click', () => {
      const vaarin = osat.filter(osa => oikea[osa] && valittu[osa].arvo !== oikea[osa]);
      rivit.forEach(rv => rv.classList.toggle('rt-vaarin', vaarin.includes(rv.dataset.osa)));
      tila.textContent = vaarin.length ? `${T.retratoVaarin} ${vaarin.map(x => osanNimi(x).toLowerCase()).join(', ')}.` : T.retratoOikein;
      r.classList.toggle('rt-valmis', !vaarin.length);
      tarkista.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: { tulos: vaarin.length ? 'vaarin' : 'oikein' } }));
    });
    piirra();
    r.append(el('div', { class: 'rt-runko' }, el('div', { class: 'rt-vasen' }, el('div', { class: 'rt-kehys' }, kuva, el('span', { class: 'rt-leima' }, 'PROCURA-SE')), kuuntele),
      el('div', { class: 'rt-oikea' }, ...rivit, el('div', { class: 'rt-alas' }, tarkista), tila)));
  }

  /* ---------- keho: mihin sattuu? ----------
     <div class="keho" data-h="jay" data-kysyja="marina"><p data-osa="cabeca" data-nimi="a cabeça" data-fi="…">Ai, a minha cabeça!</p></div>
     Osat: cabeca, garganta, peito, barriga, braco, mao, perna, joelho, pe.
     t18 (valinnaiset, taaksepäin yhteensopivat): p[data-kysy] = kysyjän (data-kysyja) kysymys tästä osasta valmiina
     lauseena (ilman sitä profiilin fraasit.keho_kysy); juuren data-kaannokset = tilarivin perään osan käännös (data-pt /
     data-fi) .kaannos-rivinä, joka näkyy Tradução-napista. Ilman näitä komponentti toimii kuten ennen. */
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
    const osat = $$(':scope > p[data-osa]', k).map(p => ({ osa: p.dataset.osa, nimi: p.dataset.nimi || '', fi: p.dataset[KAANNOS] || '', teksti: p.textContent.trim(), kysy: p.dataset.kysy || '' }));
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
    // t18: käännösrivi vain, kun juuressa on data-kaannokset (lähdekielen lang, ei kuplaa).
    const kaannosRivi = x => { if (k.hasAttribute('data-kaannokset') && x.fi) tila.append(el('span', { class: 'kaannos kh-kaannos', lang: (K.profiili && K.profiili.lahdekieli && K.profiili.lahdekieli.bcp47) || null }, x.fi)); };
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
        kaannosRivi(x);
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
      const t = kysytty.kysy || tayta(P().keho_kysy, { osa: kysytty.nimi });
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

  // ==== t06: komponenttien funktiot (lisää tämän rivin perään) ====
  /* ---------- t06: galleria (Maian puhelimen kuvagalleria, pyyhkäistävä) ----------
     <div class="galleria" data-dialogi="t06-dialogi-a" data-otsikko="Galeria · Kuusamo, setembro">
       <figure data-kuva="kuusamo"><p class="s" data-h="maia" data-pt="…">Kuusamossa, syyskuussa.</p></figure>
       <figure data-piirros="poro"><p class="s" data-h="maia" data-pt="…">Poro metsässä.</p></figure></div>
     data-kuva = valokuva Kurssi.kuvat-rekisteristä (tekijä ja lisenssi kuvan alle), data-piirros = piirros
     (GALLERIA_PIIRROKSET). Kuvateksti on app.js:n valmiiksi glossaama .s-lause (▶, kupla, käännös); se siirretään
     sellaisenaan. Selaus: pyyhkäisy (scroll-snap), nuolet ‹ › ja näppäimet ← →. Dialogin repliikki data-galleria="n"
     vie kuvaan n, kun se soi. .albumi on varattu oppitunnille 20 (OPPITUNNIT_6_20.md §5). */
  // Piirrokset sarjan 2 tyyliin (Noto-tyyli, omistajan koe 22.10.2026, AVOIMET AV-073; piirtänyt Claude Opus).
  const GALLERIA_PIIRROKSET = {
    poro: { alt: 'Desenho: uma rena na floresta de outono, entre bétulas amarelas, abetos e arbustos vermelhos.',
      svg: '<svg viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs>' +
        '<linearGradient id="ga-poro-g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8ECFF0"/>' +
        '<stop offset="1" stop-color="#E3F3FB"/></linearGradient><linearGradient id="ga-poro-g2" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#C9A54E"/><stop offset="1" stop-color="#93702F"/></linearGradient></defs>' +
        '<rect width="160" height="120" fill="url(#ga-poro-g1)"/>' +
        '<path d="M0 60Q30 48 64 54T130 50T160 52V80H0Z" fill="#9DB06A"/>' +
        '<path d="M0 70L3 56L6 70L9 50.5L12 70L15 54.3L18 70L21 54.7L24 70L27 51.6L30 70L33 52.8L36 70L39 54L42 70L45 51.5L48 70L51 51.5L54 70L57 52.7L60 70L63 51.9L66 70L69 52.2L72 70L75 51.1L78 70L81 54.5L84 70L87 53.8L90 70L93 51.8L96 70L99 51.8L102 70L105 55.7L108 70L111 51.9L114 70L117 53.2L120 70L123 50.5L126 70L129 51.2L132 70L135 55.3L138 70L141 52.9L144 70L147 50.5L150 70L153 51.9L156 70L159 52.1L162 70L165 52.5L168 70V74H0Z" fill="#4F7A45"/>' +
        '<path d="M0 76Q80 68 160 76V120H0Z" fill="url(#ga-poro-g2)"/>' +
        '<path d="M8 10L16.5 44.4H-0.5ZM8 31.5L20.8 70.2H-4.8ZM8 53L25 96H-9ZM152 8L161 44H143ZM152 30.5L165.5 71H138.5ZM152 53L170 98H134ZM112 36L116.5 52H107.5ZM112 46L118.8 64H105.3ZM112 56L121 76H103Z" fill="#1E5E2A"/>' +
        '<path d="M8 10V44.4H-0.5ZM8 31.5V70.2H-4.8ZM8 53V96H-9ZM152 8V44H143ZM152 30.5V71H138.5ZM152 53V98H134ZM112 36V52H107.5ZM112 46V64H105.3ZM112 56V76H103Z" fill="#3C8C3F"/>' +
        '<path d="M24.4 36H27.6L28.6 96H23.4ZM132.4 34H135.6L136.6 94H131.4Z" fill="#F7F4EE"/>' +
        '<path d="M24.2 54h2.6v1.4h-2.6ZM25.4 66h2.6v1.3h-2.6ZM23.8 78h3v1.4h-3ZM25.6 88h2.8v1.4h-2.8ZM132.2 52h2.6v1.4h-2.6ZM133.4 64h2.6v1.3h-2.6ZM131.8 76h3v1.4h-3ZM133.6 86h2.8v1.4h-2.8Z" fill="#4A4040"/>' +
        '<path d="M10.5 38a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M20.5 29a10 10 0 1 0 20 0a10 10 0 1 0 -20 0M26.5 40a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M18.5 45a7 7 0 1 0 14 0a7 7 0 1 0 -14 0M118.5 36a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M128.5 27a10 10 0 1 0 20 0a10 10 0 1 0 -20 0M134.5 38a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M126.5 43a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" fill="#E08A00"/>' +
        '<path d="M9 36a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M19 27a10 10 0 1 0 20 0a10 10 0 1 0 -20 0M25 38a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M17 43a7 7 0 1 0 14 0a7 7 0 1 0 -14 0M117 34a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M127 25a10 10 0 1 0 20 0a10 10 0 1 0 -20 0M133 36a9 9 0 1 0 18 0a9 9 0 1 0 -18 0M125 41a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" fill="#FFC21A"/>' +
        '<path d="M16.5 32a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0M23 24a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M29.6 34a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0M124.5 30a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0M131 22a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M137.6 32a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0" fill="#FFE27A"/>' +
        '<path d="M-7 111a18 11 0 0 1 36 0ZM27 117a16 8 0 0 1 32 0ZM111 113a20 11 0 0 1 40 0ZM144 105a13 9 0 0 1 26 0ZM85 119a14 6 0 0 1 28 0ZM54 81a9 3.5 0 0 1 18 0ZM113 81a8 3 0 0 1 16 0Z" fill="#9A2A12"/>' +
        '<path d="M-6.9 110a16.9 10.1 0 0 1 33.8 0ZM27 116a15 7.4 0 0 1 30.1 0ZM111.2 112a18.8 10.1 0 0 1 37.6 0ZM143.8 104a12.2 8.3 0 0 1 24.4 0ZM84.8 118a13.2 5.5 0 0 1 26.3 0ZM53.5 80a8.5 3.2 0 0 1 16.9 0ZM112.5 80a7.5 2.8 0 0 1 15 0Z" fill="#D9461C"/>' +
        '<path d="M1.3 104a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0M10 101.8a1.8 1.8 0 1 0 3.5 0a1.8 1.8 0 1 0 -3.5 0M34.6 111.6a1.8 1.8 0 1 0 3.5 0a1.8 1.8 0 1 0 -3.5 0M42.3 110a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0M120.6 106a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0M130.2 103.8a1.8 1.8 0 1 0 3.5 0a1.8 1.8 0 1 0 -3.5 0M149.5 99a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M155.9 97.3a1.4 1.4 0 1 0 2.9 0a1.4 1.4 0 1 0 -2.9 0M91.8 114.7a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0M98.4 113.5a1 1 0 1 0 1.9 0a1 1 0 1 0 -1.9 0M57.9 78.1a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M62.1 77.4a0.8 0.8 0 1 0 1.6 0a0.8 0.8 0 1 0 -1.6 0M116.2 78.3a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M120 77.8a0.8 0.8 0 1 0 1.6 0a0.8 0.8 0 1 0 -1.6 0" fill="#FF8A5C"/>' +
        '<path d="M44 106a30 3.2 0 1 0 60 0a30 3.2 0 1 0 -60 0" fill="#3E2723" opacity=".28"/>' +
        '<path d="M104 43.5C105 36 102 30 97 24M102.8 34L108 28.5M99.6 28L100.5 21.5" fill="none" stroke="#A88566" stroke-width="2.2" stroke-linecap="round"/>' +
        '<path d="M56 84h4.2l-.6 19.5h-3ZM84.5 84h4l-.8 19.5h-3Z" fill="#5D4037"/>' +
        '<path d="M46 76C46 66 54 63 64 63H84C94 63 98 70 97 77C96 85 90 88 82 88H60C50 88 46 84 46 76Z" fill="#8D6E63"/>' +
        '<path d="M51 69C55 64.5 61 63.6 66 63.6H84C90 63.6 94 66 95.6 70C84 66.6 66 66.4 51 69Z" fill="#AE9384"/>' +
        '<path d="M50 83C54 87 58 88 62 88H82C88 88 93 86 95.6 81C84 85.6 64 86 50 83Z" fill="#6D4C41"/>' +
        '<path d="M47.5 76C47 86 51.5 90 53.5 92L52.8 105.5H56.8L58.6 90C62 86 62.5 80 58.5 75Z M88 82H92.4L91.6 105.5H88.2Z" fill="#7A5646"/>' +
        '<path d="M52.6 104.6h4.4v2.6h-4.6ZM88 104.6h3.8v2.6h-3.8ZM55.8 102.6h3.8v2.2h-3.8ZM84.6 102.6h3.6v2.2h-3.6Z" fill="#33221C"/>' +
        '<path d="M84 70C86 60 92 52 98 47L106 50C102 58 98 66 96 76Z" fill="#8D6E63"/>' +
        '<path d="M86 80C86 70 90 62 96 56L101 59C100 68 98 76 95 86C91 86 87 84 86 80Z" fill="#F1E6D2"/>' +
        '<path d="M89 79C89 72 91.5 66 95 61L97 63C95.5 70 94.5 77 93.5 84C91 83.5 89 81.5 89 79Z" fill="#DCCBB0"/>' +
        '<path d="M45.5 70C42.5 68 41.5 71.5 44 74.5Z" fill="#F1E6D2"/>' +
        '<path d="M99 46C96 43 93 43 92 44C94 46.5 96 47.6 99 48.2Z" fill="#6D4C41"/>' +
        '<path d="M96 49C97 44 102 42 107 43L117 49C120 51 120 55 117 56L108 57C101 57 96 54 96 49Z" fill="#7B5A4A"/>' +
        '<path d="M111 47.5L117 49C120 51 120 55 117 56L111.5 56.6C113 53.5 113 50.5 111 47.5Z" fill="#A68A78"/>' +
        '<path d="M98 47C100 44 103 43 106 43.4C103 44.4 100.5 46 98.6 49Z" fill="#9C7B68"/>' +
        '<path d="M117 52.6a1.4 1.7 0 1 0 2.8 0a1.4 1.7 0 1 0 -2.8 0" fill="#2B1B16"/>' +
        '<path d="M104.6 48.6a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0 -2.8 0" fill="#1B1210"/>' +
        '<path d="M106 48.1a0.5 0.5 0 1 0 0.9 0a0.5 0.5 0 1 0 -0.9 0" fill="#FFFFFF"/>' +
        '<path d="M101 44C99 37 94 31 87 27M96.2 33.4L95 25.5M91.2 29.6L86 33.5M99.4 40L104 39.6" fill="none" stroke="#D9BC92" stroke-width="2.5" stroke-linecap="round"/>' +
        '<path d="M98.6 38.4C97 34.6 94 31.6 90.4 29.4" fill="none" stroke="#F3E2C4" stroke-width="1" stroke-linecap="round"/>' +
        '</svg>' },
    kivi: { alt: 'Desenho: uma pedra vermelha com listras claras no fundo de um rio de água limpa, entre seixos cinzentos, e uma lupa que mostra as listras.',
      svg: '<svg viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs>' +
        '<linearGradient id="ga-kivi-g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E2CF9F"/>' +
        '<stop offset="1" stop-color="#A88C5C"/></linearGradient><linearGradient id="ga-kivi-g2" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#4FC3F7" stop-opacity="0.38"/><stop offset="1" stop-color="#0277BD" stop-opacity="0.22"/>' +
        '</linearGradient><linearGradient id="ga-kivi-g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E8574A"/>' +
        '<stop offset="0.55" stop-color="#C62828"/><stop offset="1" stop-color="#8E1B1B"/></linearGradient>' +
        '<clipPath id="ga-kivi-c1"><circle cx="117" cy="44" r="16"/></clipPath></defs>' +
        '<rect width="160" height="120" fill="url(#ga-kivi-g1)"/>' +
        '<path d="M7 23.6a14 9 0 1 0 28 0a14 9 0 1 0 -28 0M128 17.6a13 8 0 1 0 26 0a13 8 0 1 0 -26 0M-2 99.6a17 10 0 1 0 34 0a17 10 0 1 0 -34 0M130 103.6a17 11 0 1 0 34 0a17 11 0 1 0 -34 0M51 111.6a12 6 0 1 0 24 0a12 6 0 1 0 -24 0M100 13.6a9 5.5 0 1 0 18 0a9 5.5 0 1 0 -18 0M144 61.6a8 6 0 1 0 16 0a8 6 0 1 0 -16 0M1 59.6a7 5 0 1 0 14 0a7 5 0 1 0 -14 0M35 10.6a8 5 0 1 0 16 0a8 5 0 1 0 -16 0M106 105.6a9 5 0 1 0 18 0a9 5 0 1 0 -18 0" fill="#6F6660"/>' +
        '<path d="M6.6 22a13.4 8.1 0 1 0 26.9 0a13.4 8.1 0 1 0 -26.9 0M127.5 16a12.5 7.2 0 1 0 25 0a12.5 7.2 0 1 0 -25 0M-2.3 98a16.3 9 0 1 0 32.6 0a16.3 9 0 1 0 -32.6 0M129.7 102a16.3 9.9 0 1 0 32.6 0a16.3 9.9 0 1 0 -32.6 0M50.5 110a11.5 5.4 0 1 0 23 0a11.5 5.4 0 1 0 -23 0M99.4 12a8.6 5 0 1 0 17.3 0a8.6 5 0 1 0 -17.3 0M143.3 60a7.7 5.4 0 1 0 15.4 0a7.7 5.4 0 1 0 -15.4 0M0.3 58a6.7 4.5 0 1 0 13.4 0a6.7 4.5 0 1 0 -13.4 0M34.3 9a7.7 4.5 0 1 0 15.4 0a7.7 4.5 0 1 0 -15.4 0M105.4 104a8.6 4.5 0 1 0 17.3 0a8.6 4.5 0 1 0 -17.3 0" fill="#9E958E"/>' +
        '<path d="M9.5 19.1a7.7 3.6 0 1 0 15.4 0a7.7 3.6 0 1 0 -15.4 0M130.3 13.4a7.2 3.2 0 1 0 14.3 0a7.2 3.2 0 1 0 -14.3 0M1.2 94.8a9.4 4 0 1 0 18.7 0a9.4 4 0 1 0 -18.7 0M133.3 98.5a9.4 4.4 0 1 0 18.7 0a9.4 4.4 0 1 0 -18.7 0M53 108.1a6.6 2.4 0 1 0 13.2 0a6.6 2.4 0 1 0 -13.2 0M101.3 10.2a5 2.2 0 1 0 9.9 0a5 2.2 0 1 0 -9.9 0M145 58.1a4.4 2.4 0 1 0 8.8 0a4.4 2.4 0 1 0 -8.8 0M1.7 56.4a3.9 2 0 1 0 7.7 0a3.9 2 0 1 0 -7.7 0M36 7.4a4.4 2 0 1 0 8.8 0a4.4 2 0 1 0 -8.8 0M107.3 102.4a5 2 0 1 0 9.9 0a5 2 0 1 0 -9.9 0" fill="#CBBDB0"/>' +
        '<path d="M0 0H160V120H0Z" fill="url(#ga-kivi-g2)"/>' +
        '<path d="M52 72a34 18 0 1 0 68 0a34 18 0 1 0 -68 0" fill="#1F3A44" opacity=".35"/>' +
        '<path d="M47 66C44 54 52 44 64 40C76 36 90 37 102 41C112 45 118 53 116 64C114 76 104 84 88 86C72 88 52 82 47 66Z" fill="url(#ga-kivi-g3)"/>' +
        '<path d="M50 55C55 46 62 42 70 40.6C80 38.8 92 39.4 102 43C108 45.6 112 49.6 113.6 54C102 47.6 70 46 50 55Z" fill="#F07A68"/>' +
        '<path d="M46.4 59C58 52 74 56 86 52C96 49 106 52 115.4 57L115.8 61C106 56.6 96 54 86 56.4C74 59.6 58 56 46.6 63.4Z M48 70C60 63 74 68 86 64C98 60.4 106 64 114.6 67L113 71C104 67.6 96 65 86 68C74 71.6 60 67.6 49.6 74.4Z M56 80C66 75.6 78 79 90 76C98 74.4 104 76 108 77.6L104 80.6C98 78.8 92 79 86 80.6C76 83 66 80.6 59.6 83Z" fill="#F4BDA8"/>' +
        '<path d="M47 63.4C58 56 74 59.6 86 56.4C96 54 106 56.6 115.8 61L115.6 62.6C106 58.6 96 56 86 58.4C74 61.4 58 58 47.2 65Z M49.6 74.4C60 67.6 74 71.6 86 68C96 65 104 67.6 113 71L112 73C104 70 96 67.6 86 70.4C74 73.8 60 70 50.8 76.4Z" fill="#7D1510"/>' +
        '<path d="M57 47a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" fill="#FFFFFF" opacity=".75"/>' +
        '<path d="M72.6 43.6a2.4 1.2 0 1 0 4.8 0a2.4 1.2 0 1 0 -4.8 0" fill="#FFFFFF" opacity=".8"/>' +
        '<path d="M4 34Q18 28 30 36T56 32M60 22Q76 16 92 24M98 30Q112 24 126 30T156 28M6 76Q20 70 34 78M122 84Q136 78 150 86M30 116Q46 108 60 114M84 100Q98 96 108 102" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" opacity=".55"/>' +
        '<g clip-path="url(#ga-kivi-c1)"><rect x="100" y="27" width="34" height="34" fill="#BFD9C9"/>' +
        '<path d="M76 56C76 30 108 18 136 22C164 26 170 52 160 74C120 82 80 80 76 56Z" fill="#D33A30"/>' +
        '<path d="M96 40C112 30 134 30 150 38L148 46C132 39 112 39 98 50Z" fill="#F6C2B0"/>' +
        '<path d="M100 60C116 52 136 52 152 58L150 64C134 59 116 60 102 68Z" fill="#F6C2B0"/></g>' +
        '<path d="M101 44a16 16 0 1 0 32 0a16 16 0 1 0 -32 0" fill="#E1F5FE" opacity=".18"/>' +
        '<path d="M127.5 56.5L143 74" stroke="#5D4037" stroke-width="6.5" stroke-linecap="round"/>' +
        '<path d="M129 56.4L142 71.4" stroke="#8D6E63" stroke-width="2" stroke-linecap="round"/>' +
        '<circle cx="117" cy="44" r="16" fill="none" stroke="#37474F" stroke-width="3.6"/>' +
        '<path d="M104.6 38A13.6 13.6 0 0 1 114 30.6" fill="none" stroke="#90A4AE" stroke-width="1.2" stroke-linecap="round"/>' +
        '<path d="M107 44A10 10 0 0 1 112 35.6" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity=".8"/>' +
        '</svg>' },
    sauna: { alt: 'Desenho: um chalé vermelho e uma pequena sauna vermelha à beira do lago ao entardecer; a chaminé da sauna solta fumaça, a janela brilha e há um píer.',
      svg: '<svg viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs>' +
        '<linearGradient id="ga-sauna-g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5867B5"/>' +
        '<stop offset="0.5" stop-color="#C08BB6"/><stop offset="1" stop-color="#FFB872"/></linearGradient>' +
        '<linearGradient id="ga-sauna-g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2A978"/>' +
        '<stop offset="0.3" stop-color="#8A79AE"/><stop offset="1" stop-color="#2F3A73"/></linearGradient>' +
        '<linearGradient id="ga-sauna-g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4E7A3A"/>' +
        '<stop offset="1" stop-color="#253F22"/></linearGradient></defs>' +
        '<rect width="160" height="70" fill="url(#ga-sauna-g1)"/>' +
        '<path d="M112 62a16 16 0 1 0 32 0a16 16 0 1 0 -32 0" fill="#FFE082" opacity=".35"/>' +
        '<path d="M119 62a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" fill="#FFD54F"/>' +
        '<path d="M0 68L0.5 52L3 60.7L5.5 49.8L8 61.9L10.5 46L13 60.8L15.5 48.4L18 60.6L20.5 48.7L23 61.2L25.5 50.5L28 59.9L30.5 51L33 60.9L35.5 47.9L38 59.5L40.5 49.3L43 61.7L45.5 50.5L48 59.8L50.5 47.9L53 60.3L55.5 48.6L58 61.3L60.5 49.8L63 59.6L65.5 51.9L68 61.4L70.5 48L73 59.9L75.5 51.9L78 60.8L80.5 45.8L83 60.4L85.5 51.3L88 60.2L90.5 45.3L93 61L95.5 45.7L98 61.9L100.5 47L103 59.6L105.5 45.4L108 61.1L110.5 50.8L113 59.6L115.5 45.4L118 59.8L120.5 45L123 59.6L125.5 49L128 61.2L130.5 47.7L133 61.9L135.5 45.3L138 59.5L140.5 49.5L143 59.4L145.5 52L148 60L150.5 45.3L153 60.4L155.5 47.2L158 60.5L160.5 46L163 60.7L165.5 45.5L168 59L160 68Z" fill="#5B5E8C"/>' +
        '<path d="M0 70L0.5 54.4L4 64.4L7.5 54L11 65.5L14.5 56.7L18 65.9L21.5 52L25 65.8L28.5 54.9L32 64.9L35.5 54.7L39 65.1L42.5 56.4L46 65.2L49.5 56L53 64.9L56.5 53.7L60 64.2L63.5 56.4L67 64L70.5 51L74 64.5L77.5 53.6L81 65.3L84.5 51.8L88 64.7L91.5 54L95 65.4L98.5 53.8L102 65.5L105.5 51.2L109 64.9L112.5 51.5L116 65.7L119.5 56L123 64.1L126.5 52.9L130 65.4L133.5 52L137 65.3L140.5 51.7L144 65L147.5 53.9L151 65.5L154.5 56.4L158 64.4L161.5 51.8L165 65.5L168.5 52.5L172 65.3L160 70Z" fill="#353B5E"/>' +
        '<rect y="69" width="160" height="51" fill="url(#ga-sauna-g2)"/>' +
        '<path d="M118 74h20v1.6h-20ZM114 80h28v1.6h-28ZM121 86h16v1.4h-16ZM110 100h12v1.2h-12Z" fill="#FFD54F" opacity=".75"/>' +
        '<path d="M98 98.5V107M120 97.6V106M142 96.8V105" fill="none" stroke="#3E2723" stroke-width="2.4"/>' +
        '<path d="M86 96.5L152 93.5V96L86 99.2Z" fill="#5D4037"/><path d="M84 92.6L150 89.6L152 93.5L86 96.5Z" fill="#BCAAA4"/>' +
        '<path d="M100 91.9l1.3 3.9M116 91.2l1.3 3.9M132 90.4l1.3 3.9" fill="none" stroke="#8D6E63" stroke-width=".7"/>' +
        '<path d="M0 70C30 70 60 74 84 82C94 86 100 98 104 120H0Z" fill="url(#ga-sauna-g3)"/>' +
        '<path d="M0 70C30 70 60 74 84 82C70 78 40 74 0 75Z" fill="#6E9A50"/>' +
        '<path d="M78 98a6 3.2 0 1 0 12 0a6 3.2 0 1 0 -12 0M89 108a5 2.6 0 1 0 10 0a5 2.6 0 1 0 -10 0M1 112a7 3.4 0 1 0 14 0a7 3.4 0 1 0 -14 0" fill="#78808E"/>' +
        '<path d="M5 64L16 53L27 64V82H5Z" fill="#C62828"/><path d="M27 64L47 61V79.5L27 82Z" fill="#8E1F1F"/>' +
        '<path d="M16 52.4L36.4 49.2L49.4 61.6L26.6 65Z" fill="#37474F"/>' +
        '<path d="M16 52.4L36.4 49.2L37.8 50.6L17.4 53.8Z" fill="#7A8B95"/>' +
        '<path d="M3.6 65.4L16 53L28.4 65.4" fill="none" stroke="#ECEFF1" stroke-width="1.4"/>' +
        '<path d="M5.6 64.6V82M26.6 65V82M46.4 61.6V79.6" fill="none" stroke="#ECEFF1" stroke-width="1.2"/>' +
        '<path d="M11.5 67.5h9v7h-9ZM32 67.6l7-1v5.6l-7 1Z" fill="#FFC94A" stroke="#ECEFF1" stroke-width="1"/>' +
        '<path d="M78 60h4.4v12h-4.4Z" fill="#78909C"/><path d="M78 60h1.6v12H78Z" fill="#B0BEC5"/>' +
        '<path d="M77.2 58.6h6v2.2h-6Z" fill="#455A64"/><path d="M54 82L62 73L70 82V95H54Z" fill="#C62828"/>' +
        '<path d="M70 82L88 79.6V92.6L70 95Z" fill="#8E1F1F"/>' +
        '<path d="M62 72.4L79.6 69.6L89.6 79.8L69.4 82.8Z" fill="#37474F"/>' +
        '<path d="M62 72.4L79.6 69.6L80.8 70.8L63.2 73.6Z" fill="#7A8B95"/>' +
        '<path d="M52.6 83.4L62 73L71.4 83.4M54.6 82.4V95M69.6 82.8V95M87.4 80V92.8" fill="none" stroke="#ECEFF1" stroke-width="1.1"/>' +
        '<path d="M59 85h6v10h-6Z" fill="#5D4037"/>' +
        '<path d="M74 84.4l9-1.2v4.6l-9 1.2Z" fill="#FF9800" stroke="#ECEFF1" stroke-width=".9"/>' +
        '<path d="M75.2 85.2l6.6-.9v1.8l-6.6.9Z" fill="#FFE082"/>' +
        '<path d="M76.8 55a3.6 3.6 0 1 0 7.2 0a3.6 3.6 0 1 0 -7.2 0M73 49.6a4.6 4.6 0 1 0 9.2 0a4.6 4.6 0 1 0 -9.2 0M67.4 44.6a5.6 5.6 0 1 0 11.2 0a5.6 5.6 0 1 0 -11.2 0M60.4 41a6.2 6.2 0 1 0 12.4 0a6.2 6.2 0 1 0 -12.4 0M52.6 39a6.4 6.4 0 1 0 12.8 0a6.4 6.4 0 1 0 -12.8 0M46.6 38.6a5.4 5.4 0 1 0 10.8 0a5.4 5.4 0 1 0 -10.8 0" fill="#A9AFC6" opacity=".95"/>' +
        '<path d="M53 35.4C56 31.6 63 31.4 67 34.4C70 35.6 72.6 37.4 74 40.4C70.6 38.2 66.6 37.4 62.6 37.6C59.4 36.2 56 35.6 53 35.4Z" fill="#E9EBF4"/>' +
        '<path d="M96 104q5-2 10 0M126 101q6-2 12 0M140 110q6-2 12 0" fill="none" stroke="#C5CAE9" stroke-width="1" opacity=".7" stroke-linecap="round"/>' +
        '</svg>' },
    jarvi: { alt: 'Desenho: uma pessoa pula no lago ao lado do píer, com os braços para cima, entre espuma e gotas; à esquerda, a sauna vermelha solta vapor.',
      svg: '<svg viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs>' +
        '<linearGradient id="ga-jarvi-g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FB6E6"/>' +
        '<stop offset="1" stop-color="#FFD9A6"/></linearGradient><linearGradient id="ga-jarvi-g2" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#6FB6DE"/><stop offset="1" stop-color="#1B6597"/></linearGradient></defs>' +
        '<rect width="160" height="56" fill="url(#ga-jarvi-g1)"/>' +
        '<path d="M0 54L1 40L4 48.7L7 34.6L10 49.4L13 35.4L16 49.8L19 38.4L22 49.2L25 37.2L28 48.7L31 33.6L34 48.8L37 38.9L40 49.7L43 38.1L46 48.7L49 37.5L52 49.9L55 33.6L58 49.3L61 39.4L64 49.1L67 33.4L70 48.7L73 38.4L76 48.7L79 36.8L82 49.5L85 39.4L88 49L91 36.1L94 48.4L97 37.8L100 49.5L103 35.2L106 48.7L109 38.9L112 48.4L115 33.3L118 48.3L121 38.4L124 48.2L127 35.7L130 48.5L133 38.2L136 49.3L139 38.9L142 49.2L145 37.5L148 49.6L151 34.2L154 49.2L157 38.7L160 49.3L163 34.4L166 48.3L160 54Z" fill="#2F5E3E"/>' +
        '<rect y="53" width="160" height="67" fill="url(#ga-jarvi-g2)"/>' +
        '<path d="M40 60h22v1.2H40ZM120 58h26v1.2h-26ZM60 112h20v1.2H60Z" fill="#D4ECF8" opacity=".6"/>' +
        '<path d="M0 80L36 78L42 96L0 100Z" fill="#4E7A3A"/><path d="M0 80L36 78L37 81L0 83Z" fill="#7CA85A"/>' +
        '<path d="M-2 32L30 36V82L-2 84Z" fill="#C62828"/><path d="M-4 33.5L32 37.6L28 30L-4 25Z" fill="#37474F"/>' +
        '<path d="M-4 25L28 30L29.4 32.4L-4 27.6Z" fill="#7A8B95"/><path d="M10 52L22 53.4V80.6L10 81.6Z" fill="#5D2B1F"/>' +
        '<path d="M12 55L20 56V80L12 80.8Z" fill="#FFB74D"/><path d="M13.4 58L18.6 58.6V70L13.4 69.8Z" fill="#FFE0A0"/>' +
        '<path d="M29 36.4V82" fill="none" stroke="#ECEFF1" stroke-width="1.4"/>' +
        '<path d="M18.6 52a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0 -6.8 0M20 46a4.4 4.4 0 1 0 8.8 0a4.4 4.4 0 1 0 -8.8 0M22.6 39.6a5 5 0 1 0 10 0a5 5 0 1 0 -10 0M26.2 33a5.4 5.4 0 1 0 10.8 0a5.4 5.4 0 1 0 -10.8 0M30.8 27a4.6 4.6 0 1 0 9.2 0a4.6 4.6 0 1 0 -9.2 0" fill="#DCE7EF" opacity=".92"/>' +
        '<path d="M21.4 47.6C21 43 23.4 38 27.4 34.6C28.6 30.4 31.4 27.4 35 26C32.4 29 31 32 30.6 35.4C27.2 38 24.6 42.6 21.4 47.6Z" fill="#FFFFFF"/>' +
        '<path d="M44 88V98M66 88V98M86 88V97" fill="none" stroke="#3E2723" stroke-width="2.4"/>' +
        '<path d="M22 84L92 82.6V85.4L22 88.6Z" fill="#5D4037"/><path d="M22 80.2L90 79L92 82.6L22 84Z" fill="#BCAAA4"/>' +
        '<path d="M38 79.8l.8 3.9M54 79.5l.8 3.9M70 79.2l.8 3.9" fill="none" stroke="#8D6E63" stroke-width=".7"/>' +
        '<path d="M80 96a34 6 0 1 0 68 0a34 6 0 1 0 -68 0" fill="none" stroke="#E1F5FE" stroke-width="1.4" opacity=".7"/>' +
        '<path d="M68 98a46 9 0 1 0 92 0a46 9 0 1 0 -92 0" fill="none" stroke="#E1F5FE" stroke-width="1.1" opacity=".4"/>' +
        '<path d="M107.6 79L100.8 58M120.4 79L127.2 58" fill="none" stroke="#F0A868" stroke-width="4.4" stroke-linecap="round"/>' +
        '<path d="M107 79L100.6 59M120.8 79L127 59" fill="none" stroke="#FFCC80" stroke-width="2.6" stroke-linecap="round"/>' +
        '<path d="M97.8 56.4a2.6 2.6 0 1 0 5.2 0a2.6 2.6 0 1 0 -5.2 0M124.8 56.4a2.6 2.6 0 1 0 5.2 0a2.6 2.6 0 1 0 -5.2 0" fill="#FFCC80"/>' +
        '<path d="M106 78C106 75 109 74 114 74C119 74 122 75 122 78V94H106Z" fill="#F7B77A"/>' +
        '<path d="M106 78C106 75 109 74 114 74C116 74 118 74.2 119 74.6C114 76 110 79 109 94H106Z" fill="#FFD39A"/>' +
        '<path d="M107.4 67a6.6 6.6 0 1 0 13.2 0a6.6 6.6 0 1 0 -13.2 0" fill="#FFCC80"/>' +
        '<path d="M107.4 66.4C107 60 111 58 114 58C118 58 121.4 60.6 120.6 66.4C118 62.6 110 62.6 107.4 66.4Z" fill="#4E342E"/>' +
        '<path d="M110.5 67.6a0.9 1.2 0 1 0 1.8 0a0.9 1.2 0 1 0 -1.8 0M115.7 67.6a0.9 1.2 0 1 0 1.8 0a0.9 1.2 0 1 0 -1.8 0" fill="#2B1B16"/>' +
        '<path d="M112 71a2 1.7 0 1 0 4 0a2 1.7 0 1 0 -4 0" fill="#B23A2A"/>' +
        '<path d="M107.3 69.6a1.3 0.8 0 1 0 2.6 0a1.3 0.8 0 1 0 -2.6 0M118.1 69.6a1.3 0.8 0 1 0 2.6 0a1.3 0.8 0 1 0 -2.6 0" fill="#FF8A65" opacity=".6"/>' +
        '<path d="M90 96C92 90 94 86 96 80L99 88L102 76L106 86L110 80L114 88L118 80L122 86L126 76L129 88L132 80C134 86 136 90 138 96C124 100 104 100 90 96Z" fill="#B3E5FC"/>' +
        '<path d="M93 95C95 91 96.5 88 98 84L100.6 90.4L103 81.6L106.6 89.4L110 84L114 90.6L118 84L121.4 89.4L125 81.6L127.6 90.4L130 84C131.6 88 133 91 135 95C122 98 106 98 93 95Z" fill="#FFFFFF"/>' +
        '<path d="M89.8 66a2.2 2.2 0 1 0 4.4 0a2.2 2.2 0 1 0 -4.4 0M95.2 57a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0 -3.6 0M102.5 49a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0M122.4 49a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0M129 57a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M134.7 66a2.3 2.3 0 1 0 4.6 0a2.3 2.3 0 1 0 -4.6 0M86.4 78a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0M140.3 77a1.7 1.7 0 1 0 3.4 0a1.7 1.7 0 1 0 -3.4 0M110.7 44a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0M144.8 60a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0M82.8 60a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0" fill="#FFFFFF"/>' +
        '<path d="M91.5 66.8a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0M96.5 57.6a0.9 0.9 0 1 0 1.8 0a0.9 0.9 0 1 0 -1.8 0M103.6 49.5a0.8 0.8 0 1 0 1.5 0a0.8 0.8 0 1 0 -1.5 0M123.6 49.6a0.8 0.8 0 1 0 1.6 0a0.8 0.8 0 1 0 -1.6 0M130.5 57.7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M136.4 66.8a1.1 1.1 0 1 0 2.3 0a1.1 1.1 0 1 0 -2.3 0" fill="#81D4FA"/>' +
        '</svg>' },
    ruska: { alt: 'Desenho: o tunturi Ruka, um morro arredondado sem árvores no topo, com a floresta vermelha e amarela nas encostas e duas pessoas pequenas no cume.',
      svg: '<svg viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs>' +
        '<linearGradient id="ga-ruska-g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5AAEF2"/>' +
        '<stop offset="1" stop-color="#D6ECFA"/></linearGradient><linearGradient id="ga-ruska-g2" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#D9B48A"/><stop offset="0.5" stop-color="#B88458"/>' +
        '<stop offset="1" stop-color="#9A5E3A"/></linearGradient></defs>' +
        '<rect width="160" height="120" fill="url(#ga-ruska-g1)"/>' +
        '<path d="M18 22a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M24.5 18a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0 -15 0M35.5 22a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0M18 22h28v6H18Z" fill="#FFFFFF"/>' +
        '<path d="M18 25.6h28v2.4H18Z" fill="#C8E3F8"/>' +
        '<path d="M121 14a5 5 0 1 0 10 0a5 5 0 1 0 -10 0M127 11a6 6 0 1 0 12 0a6 6 0 1 0 -12 0M135.5 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0M121 14h24v5h-24Z" fill="#FFFFFF"/>' +
        '<path d="M121 17h24v2h-24Z" fill="#C8E3F8"/><path d="M86 76Q124 36 172 54V96H86Z" fill="#9FB4C6"/>' +
        '<path d="M108 58Q130 42 160 50Q132 48 112 62Z" fill="#C3D2DE"/>' +
        '<path d="M-10 96C10 72 42 34 78 34C114 34 142 58 172 80V120H-10Z" fill="url(#ga-ruska-g2)"/>' +
        '<path d="M40 52C52 40 64 35.6 78 35.6C94 35.6 108 42 118 50C104 44 92 41.4 78 41.4C64 41.4 52 45 40 52Z" fill="#ECD2AE"/>' +
        '<path d="M47 52a7 2.2 0 1 0 14 0a7 2.2 0 1 0 -14 0M94 48a6 1.8 0 1 0 12 0a6 1.8 0 1 0 -12 0M113 58a5 1.6 0 1 0 10 0a5 1.6 0 1 0 -10 0M66 46a4 1.2 0 1 0 8 0a4 1.2 0 1 0 -8 0" fill="#B5552E" opacity=".55"/>' +
        '<path d="M60 40.8c1-1.4 3-1.6 4-.4h-4ZM92 44.2c1-1.2 2.6-1.4 3.4-.3Z" fill="#8D8D8D"/>' +
        '<path d="M76 36C72 44 82 50 74 58C66 66 80 72 70 82" fill="none" stroke="#F2E2C4" stroke-width="1.1" stroke-linecap="round" stroke-dasharray="2 2"/>' +
        '<path d="M-10 104C4 86 22 70 42 64C58 60 70 66 84 63C104 60 124 66 142 72C154 76 164 82 172 86V120H-10Z" fill="#A9471F"/>' +
        '<path d="M-10 104a4 4 0 0 1 8 -8a4 4 0 0 1 8 -8a4 4 0 0 1 8 -6a4 4 0 0 1 8 -4a4 4 0 0 1 8 -3a4 4 0 0 1 8 -6a4 4 0 0 1 8 -2a4 4 0 0 1 8 -1a4 4 0 0 1 8 3a4 4 0 0 1 8 -3a4 4 0 0 1 8 2a4 4 0 0 1 8 -1a4 4 0 0 1 8 -2a4 4 0 0 1 8 0a4 4 0 0 1 8 3a4 4 0 0 1 8 -1a4 4 0 0 1 8 2a4 4 0 0 1 8 3a4 4 0 0 1 8 3a4 4 0 0 1 8 3a4 4 0 0 1 8 3a4 4 0 0 1 8 7V120H-10Z" fill="#E2A83A"/>' +
        '<path d="M-8 94a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M8 80a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M24 73a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M40 65a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M56 64a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M72 64a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M88 63a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M104 63a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M120 65a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M136 70a1 1 0 1 0 2 0a1 1 0 1 0 -2 0M152 76a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="#F6CF6E"/>' +
        '<path d="M-14 115a5 5 0 0 1 10 -10a5 5 0 0 1 10 -8a5 5 0 0 1 10 -10a5 5 0 0 1 10 -2a5 5 0 0 1 10 -8a5 5 0 0 1 10 -3a5 5 0 0 1 10 3a5 5 0 0 1 10 -3a5 5 0 0 1 10 2a5 5 0 0 1 10 -4a5 5 0 0 1 10 0a5 5 0 0 1 10 4a5 5 0 0 1 10 2a5 5 0 0 1 10 -2a5 5 0 0 1 10 8a5 5 0 0 1 10 -1a5 5 0 0 1 10 8a5 5 0 0 1 10 5V120H-10Z" fill="#D2401E"/>' +
        '<path d="M-12 103a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M8 85a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M28 75a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M48 72a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M68 72a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M88 70a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M108 74a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M128 74a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M148 81a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" fill="#F2774F"/>' +
        '<path d="M24 77L28.5 92H19.5ZM40 71L44.5 86H35.5ZM156 83L160.5 98H151.5ZM33 74L37.5 89H28.5Z" fill="#2E6B35"/>' +
        '<path d="M-15 124a6 6 0 0 1 12 -11a6 6 0 0 1 12 -9a6 6 0 0 1 12 -13a6 6 0 0 1 12 -5a6 6 0 0 1 12 -3a6 6 0 0 1 12 2a6 6 0 0 1 12 0a6 6 0 0 1 12 -6a6 6 0 0 1 12 3a6 6 0 0 1 12 -1a6 6 0 0 1 12 4a6 6 0 0 1 12 3a6 6 0 0 1 12 1a6 6 0 0 1 12 8a6 6 0 0 1 12 5a6 6 0 0 1 12 3V120H-10Z" fill="#FFBA1A"/>' +
        '<path d="M-13 110a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M11 88a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M35 80a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M59 82a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M83 76a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M107 78a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M131 85a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M155 94a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" fill="#FFE07A"/>' +
        '<path d="M-18 137a8 8 0 0 1 16 -12a8 8 0 0 1 16 -17a8 8 0 0 1 16 -6a8 8 0 0 1 16 -10a8 8 0 0 1 16 4a8 8 0 0 1 16 -6a8 8 0 0 1 16 2a8 8 0 0 1 16 -3a8 8 0 0 1 16 10a8 8 0 0 1 16 4a8 8 0 0 1 16 6a8 8 0 0 1 16 5V120H-10Z" fill="#CC3417"/>' +
        '<path d="M-14 121a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M18 98a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M50 88a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M82 86a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M114 85a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M146 99a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" fill="#F2714A"/>' +
        '<path d="M134 93L139.7 112H128.3ZM21 98L26.7 117H15.3ZM44 89L49.7 108H38.3ZM48 89L53.7 108H42.3Z" fill="#2E6B35"/>' +
        '<path d="M-15 147a10 10 0 0 1 20 -20a10 10 0 0 1 20 -18a10 10 0 0 1 20 -7a10 10 0 0 1 20 5a10 10 0 0 1 20 2a10 10 0 0 1 20 -8a10 10 0 0 1 20 4a10 10 0 0 1 20 16a10 10 0 0 1 20 5a10 10 0 0 1 20 4V120H-10Z" fill="#FFAE00"/>' +
        '<path d="M-11 123a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M29 98a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M69 103a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M109 97a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M149 117a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" fill="#FFDC70"/>' +
        '<path d="M71.6 34.4L72.4 30.4M74.4 34.4L73.6 30.4" fill="none" stroke="#37474F" stroke-width="1.3" stroke-linecap="round"/>' +
        '<path d="M73.9 25.4h2.6c.6 0 1 .4 1 1v3.6c0 .5-.4 .9-.9 .9h-2.7Z" fill="#FFC107"/>' +
        '<path d="M71 26.6c0-1 .8-1.6 2-1.6s2 .6 2 1.6v4.4h-4Z" fill="#E53935"/>' +
        '<path d="M71.4 23.4a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0" fill="#F5C08A"/>' +
        '<path d="M71.3 23.2c0-1.4.8-2.2 1.7-2.2s1.7.8 1.7 2.2Z" fill="#455A64"/>' +
        '<path d="M80.1 34.4L80.9 30.4M82.9 34.4L82.1 30.4" fill="none" stroke="#37474F" stroke-width="1.3" stroke-linecap="round"/>' +
        '<path d="M82.4 25.4h2.6c.6 0 1 .4 1 1v3.6c0 .5-.4 .9-.9 .9h-2.7Z" fill="#FF7043"/>' +
        '<path d="M79.5 26.6c0-1 .8-1.6 2-1.6s2 .6 2 1.6v4.4h-4Z" fill="#1E88E5"/>' +
        '<path d="M79.9 23.4a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0" fill="#F5C08A"/>' +
        '<path d="M79.8 23.2c0-1.4.8-2.2 1.7-2.2s1.7.8 1.7 2.2Z" fill="#455A64"/></svg>' }
  };
  function galleria(g, o, apu) {
    const kuvat = $$(':scope > figure', g);
    if (!kuvat.length) return;
    const nauha = el('div', { class: 'ga-nauha', tabindex: '0', role: 'region', 'aria-label': g.dataset.otsikko || 'Galeria' });
    const pisteet = el('div', { class: 'ga-pisteet', 'aria-hidden': 'true' });
    const laskuri = el('span', { class: 'ga-laskuri' });
    const sivut = kuvat.map((f, i) => {
      const kuva = el('div', { class: 'ga-kuva' });
      const kt = f.dataset.kuva ? (K.kuvat || {})[f.dataset.kuva] : null;
      const piirros = GALLERIA_PIIRROKSET[f.dataset.piirros || ''];
      if (kt && kt.src) kuva.append(el('img', { src: kt.src, alt: kt.alt || '', loading: i ? 'lazy' : null }));
      else if (piirros) {
        kuva.innerHTML = piirros.svg;
        const s = kuva.firstElementChild;
        if (s) { s.setAttribute('role', 'img'); s.setAttribute('aria-label', piirros.alt); }
      }
      const sivu = el('div', { class: 'ga-sivu' }, kuva, el('div', { class: 'ga-teksti' }, ...Array.from(f.childNodes)));
      if (kt && kt.tekija) sivu.append(el('p', { class: 'ga-lahde', lang: 'pt-BR' }, `Foto: ${kt.tekija} · ${kt.lisenssi || ''}`));
      pisteet.append(el('span', { class: 'ga-piste' }));
      f.remove();
      return sivu;
    });
    nauha.append(...sivut);
    let nyt = 0;
    const merkitse = i => {
      nyt = Math.max(0, Math.min(sivut.length - 1, i));
      laskuri.textContent = `${nyt + 1} / ${sivut.length}`;
      Array.from(pisteet.children).forEach((p, j) => p.classList.toggle('nyt', j === nyt));
    };
    const nayta = i => {
      const j = Math.max(0, Math.min(sivut.length - 1, i));
      const tasainen = !(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
      nauha.scrollTo({ left: j * nauha.clientWidth, behavior: tasainen ? 'smooth' : 'auto' });
      merkitse(j);
    };
    let odottaa = false;
    nauha.addEventListener('scroll', () => {
      if (odottaa) return;
      odottaa = true;
      requestAnimationFrame(() => { odottaa = false; if (nauha.clientWidth) merkitse(Math.round(nauha.scrollLeft / nauha.clientWidth)); });
    }, { passive: true });
    nauha.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); nayta(nyt + 1); } else if (e.key === 'ArrowLeft') { e.preventDefault(); nayta(nyt - 1); }
    });
    const edel = el('button', { type: 'button', class: 'ga-nappi', 'aria-label': 'Foto anterior' }, '‹');
    const seur = el('button', { type: 'button', class: 'ga-nappi', 'aria-label': 'Próxima foto' }, '›');
    edel.addEventListener('click', () => nayta(nyt - 1));
    seur.addEventListener('click', () => nayta(nyt + 1));
    g.append(el('div', { class: 'ga-puhelin' },
      el('div', { class: 'ga-yla', lang: 'pt-BR' }, el('span', {}, g.dataset.otsikko || ''), laskuri),
      nauha, el('div', { class: 'ga-ohjaus' }, edel, pisteet, seur)));
    merkitse(0);
    // Dialogin toisto: repliikki, jolla on data-galleria="n", vie kuvaan n (sama tapa kuin metro: luokka .soi).
    const dialogi = g.dataset.dialogi ? document.getElementById(g.dataset.dialogi) : null;
    if (dialogi) new MutationObserver(() => {
      const s = dialogi.querySelector('.s.soi[data-galleria]');
      if (s) { const n = Number(s.dataset.galleria) - 1; if (n >= 0 && n !== nyt) nayta(n); }
    }).observe(dialogi, { subtree: true, attributes: true, attributeFilter: ['class'] });
  }

  /* ---------- t06: lainausautomaatti (Oodin itsepalvelu: Lainaa / Palauta ja kirjojen selkämykset) ----------
     <div class="lainausautomaatti" data-otsikko="Oodi · …">
       <p class="s" data-h="automaatti" data-viesti="alku | lainattu | palautettu | jo-lainassa | ei-lainassa" data-pt="…">…</p>
       <p class="s" data-h="maia" data-viesti="korea">…</p>   (kerran, kun kaikki data-sarja="korea"-kirjat ovat kassissa)
       <p class="la-alue" data-alue="hylly" lang="fi-FI">Hyllyssä</p> <p class="la-alue" data-alue="kassi" lang="fi-FI">…</p>
       <div class="la-kirja" data-nimi="Pohjois-Korea" data-vari="1" data-sarja="korea" [data-paikalla="kassi"]>
         <p class="s" data-h="automaatti" data-pt="…">Kirja Pohjois-Koreasta.</p></div></div>
     Selkämys on nappi (nimi suomeksi, lang fi-FI: sivutarkistus M lukee sen); napautus näyttää ja lukee kirjan lauseen.
     Lainaa / Palauta siirtävät valitun kirjan hyllyn ja kassin välillä ja näyttävät automaatin viestin. Kaikki suomi on
     valmiiksi glossattuja .s-lauseita (ei ajonaikaista tekstiä ilman kuplaa); näytössä näkyvät vain kuuluvat lauseet.
     Napit: data-lainaa / data-palauta korvaavat oletustekstit. */
  function lainausautomaatti(l, o, apu) {
    const viestit = {};
    $$(':scope > .s[data-viesti]', l).forEach(s => { viestit[s.dataset.viesti] = s; });
    const alueet = {};
    $$(':scope > [data-alue]', l).forEach(p => { alueet[p.dataset.alue] = p; });
    const kirjat = $$(':scope > .la-kirja', l).map((k, i) => ({ k, s: k.querySelector('.s'), nimi: k.dataset.nimi || '',
      vari: /^[1-6]$/.test(k.dataset.vari || '') ? k.dataset.vari : String(i % 6 + 1), sarja: k.dataset.sarja || '',
      paikka: k.dataset.paikalla === 'kassi' ? 'kassi' : 'hylly' }));
    if (!kirjat.length || !alueet.hylly || !alueet.kassi || !viestit.alku) return;
    const naytto = el('div', { class: 'la-naytto', 'aria-live': 'polite' });
    [...Object.values(viestit), ...kirjat.map(b => b.s).filter(Boolean)].forEach(s => { s.hidden = true; naytto.append(s); });
    const hylly = el('div', { class: 'la-rivi' }), kassi = el('div', { class: 'la-rivi la-kassi' });
    let valittu = null, reagoitu = false;
    // Näkyvät lauseet annetussa järjestyksessä: kirjan nimi, automaatin viesti, Maian repliikki.
    const nayta = (...rivit) => {
      $$(':scope > .s', naytto).forEach(s => { s.hidden = !rivit.includes(s); });
      rivit.filter(Boolean).forEach(s => naytto.append(s));
    };
    const soita = (...rivit) => {
      const jono = rivit.filter(Boolean).map(s => apu.alkio(s));
      if (jono.length && window.Aani) window.Aani.soita(jono);
    };
    const sano = (kirja, viesti, lisa) => { nayta(kirja ? kirja.s : null, viesti, lisa); soita(viesti, lisa); };
    const piirra = () => kirjat.forEach(b => { (b.paikka === 'kassi' ? kassi : hylly).append(b.nappi); b.nappi.setAttribute('aria-pressed', String(b === valittu)); });
    kirjat.forEach(b => {
      b.nappi = el('button', { type: 'button', class: `la-selka la-vari-${b.vari}`, lang: 'fi-FI', 'aria-pressed': 'false' }, el('span', { class: 'la-selka-nimi' }, b.nimi));
      b.nappi.addEventListener('click', () => { valittu = b; piirra(); nayta(b.s); soita(b.s); });
      b.k.remove();
    });
    const lainaa = el('button', { type: 'button', class: 'la-nappi', lang: 'fi-FI' }, l.dataset.lainaa || 'Lainaa');
    const palauta = el('button', { type: 'button', class: 'la-nappi la-palauta', lang: 'fi-FI' }, l.dataset.palauta || 'Palauta');
    lainaa.addEventListener('click', () => {
      if (!valittu) { sano(null, viestit.alku); return; }
      if (valittu.paikka === 'kassi') { sano(valittu, viestit['jo-lainassa']); return; }
      valittu.paikka = 'kassi';
      piirra();
      // Sarjan kaikki kirjat kassissa (Maian syväsukellus): oma repliikki kerran.
      const sarja = valittu.sarja ? kirjat.filter(b => b.sarja === valittu.sarja) : [];
      const reaktio = !reagoitu && sarja.length > 1 && sarja.every(b => b.paikka === 'kassi') ? viestit[valittu.sarja] || null : null;
      if (reaktio) reagoitu = true;
      sano(valittu, viestit.lainattu, reaktio);
    });
    palauta.addEventListener('click', () => {
      if (!valittu) { sano(null, viestit.alku); return; }
      if (valittu.paikka === 'hylly') { sano(valittu, viestit['ei-lainassa']); return; }
      valittu.paikka = 'hylly';
      piirra();
      sano(valittu, viestit.palautettu);
    });
    l.append(
      el('div', { class: 'la-kone' }, el('div', { class: 'la-yla', lang: 'pt-BR' }, l.dataset.otsikko || ''), naytto,
        el('div', { class: 'la-napit' }, lainaa, palauta)),
      el('div', { class: 'la-paikat' }, el('div', { class: 'la-paikka' }, alueet.hylly, hylly), el('div', { class: 'la-paikka' }, alueet.kassi, kassi)));
    piirra();
    nayta(viestit.alku);
  }
  // ==== t07: komponenttien funktiot (lisää tämän rivin perään) ====
  /* ---------- Arvaa ammatti (t07): korttipeli monivalinnoista ----------
     <div class="arvaa-ammatti"><div class="valinta arvaa-kortti" data-oikea="kokki">
       <p class="arvaa-kuva"><span class="emoji">🍳</span> <span class="fi">kokki</span></p> vihje (.s) + .kysymys + .vaihtoehdot
     </div>…</div>
     Monivalinta toimii kuten muutkin (app.js: tulos, mandariini, mitali). Oikea vastaus (passo:tulos ’oikein’) kääntää
     kortin: .arvaa-kaannetty näyttää kuvan ja ammatin (CSS), laskuri päivittyy, ja kaikki arvattu → .arvaa-valmis. */
  function arvaaAmmatti(a) {
    const kortit = $$('.arvaa-kortti', a);
    if (!kortit.length || a.querySelector(':scope > .arvaa-laskuri')) return;
    const laskuri = el('p', { class: 'arvaa-laskuri', 'aria-live': 'polite' });
    const paivita = () => {
      const n = kortit.filter(k => k.classList.contains('arvaa-kaannetty')).length;
      const kaikki = n === kortit.length;
      laskuri.textContent = `${T.arvaaLaskuri || 'Cartas viradas'}: ${n} / ${kortit.length}` + (kaikki ? ` · ${T.arvaaValmis || 'Todas! O Ravi aplaude.'}` : '');
      a.classList.toggle('arvaa-valmis', kaikki);
    };
    kortit.forEach(k => k.addEventListener('passo:tulos', e => {
      if (!e.detail || e.detail.tulos !== 'oikein' || k.classList.contains('arvaa-kaannetty')) return;
      k.classList.add('arvaa-kaannetty');
      paivita();
    }));
    a.prepend(laskuri);
    paivita();
  }
  // ==== t08: komponenttien funktiot (lisää tämän rivin perään) ====
  /* ---------- t08: pohjapiirros suomen kolmijaolla (data-kolmijako; pohjapiirros() ohjaa tänne) ----------
     <div class="pohjapiirros ph-kolmi" data-kolmijako data-h="maia" data-mina="olohuone" data-kuulija="purjo" data-sina="keittio">
       <span data-huone="olohuone" data-nimi="olohuone" data-pt="sala" data-suku="f" data-esine="sohva" data-esine-pt="um sofá"
         data-alue="2 / 1 / 4 / 3"></span>…</div>
     Puhuja (data-h) seisoo huoneessa data-mina, kuulija (data-kuulija) huoneessa data-sina. Puhujan huone = tämä (myös,
     jos kuulija on samassa), kuulijan huone = se, muut = tuo (puhuja osoittaa). Napautus: puhuja sanoo ”Tämä on
     olohuone. Tässä on sohva.” Tilanapit siirtävät puhujan tai kuulijan toiseen huoneeseen. Kaikki lauseet tehdään
     valmiiksi piiloon (lang fi-FI), jotta app.js glossaa ne komponentin jälkeen (glossaaSuomi); napautus näyttää oikean.
     data-alue = grid-area (lasketaan elementin style-kenttään, ei style-attribuuttia sisällössä; KAYTANNOT T2). */
  const PH_KOLMI = {
    1: { pron: 'Tämä', paikka: 'Tässä', pt: f => (f ? 'Esta' : 'Este'), ptPaikka: 'Aqui' },
    2: { pron: 'Se', paikka: 'Siinä', pt: f => (f ? 'Essa' : 'Esse'), ptPaikka: 'Aí' },
    3: { pron: 'Tuo', paikka: 'Tuossa', pt: f => (f ? 'Aquela' : 'Aquele'), ptPaikka: 'Ali' }
  };
  function pohjapiirrosKolmijako(p, o, apu) {
    const puhuja = p.dataset.h || '', kuulija = p.dataset.kuulija || '';
    const nimi = id => ((((o && o.hahmot) || {})[id]) || {}).nimi || id;
    const lahteet = $$(':scope > [data-huone]', p);
    const huoneet = lahteet.map(h => ({ id: h.dataset.huone, nimi: h.dataset.nimi || h.dataset.huone, pt: h.dataset[KAANNOS] || '',
      f: h.dataset.suku === 'f', esine: h.dataset.esine || '', esinePt: h.dataset.esinePt || '', alue: h.dataset.alue || '' }));
    lahteet.forEach(h => h.remove());
    if (!huoneet.length) return;
    let mina = p.dataset.mina || huoneet[0].id, sina = p.dataset.sina || '', tila = 'osoita';
    const et = id => (id === mina ? 1 : id === sina ? 2 : 3);
    // Lauseet valmiiksi: huone × etäisyys (glossataan sivulla komponentin jälkeen).
    const puhe = el('div', { class: 'ph-puhe', 'aria-live': 'polite' });
    // Ohje: kiinteä (suomen sanat lang-merkittyinä, glossataan) ja siirtotilan ohje (vain portugalia, vaihtuu).
    const fiSana = t => el('span', { lang: kohdeLang() }, t);
    const vihje = el('p', { class: 'ph-vihje', lang: 'pt-BR' }, `Quem fala: ${nimi(puhuja)}${kuulija ? ` · quem ouve: ${nimi(kuulija)}` : ''}. Toque num cômodo: `,
      fiSana(PH_KOLMI[1].pron.toLowerCase()), ' = onde está quem fala; ',
      ...(kuulija ? [fiSana(PH_KOLMI[2].pron.toLowerCase()), ' = onde está quem ouve; '] : []),
      fiSana(PH_KOLMI[3].pron.toLowerCase()), ' = os outros, para onde quem fala aponta.');
    const siirtoVihje = el('p', { class: 'ph-vihje', lang: 'pt-BR', hidden: true });
    puhe.append(vihje, siirtoVihje);
    const lauseet = {};
    for (const h of huoneet) for (const e of [1, 2, 3]) {
      const k = PH_KOLMI[e];
      const fi = `${k.pron} on ${h.nimi}.` + (h.esine ? ` ${k.paikka} on ${h.esine}.` : '');
      const pt = `${k.pt(h.f)} é ${h.f ? 'a' : 'o'} ${h.pt}.` + (h.esinePt ? ` ${k.ptPaikka} tem ${h.esinePt}.` : '');
      const rivi = el('p', { class: 'ph-lause', hidden: true }, el('span', { lang: 'fi-FI' }, fi), el('span', { class: 'kaannos', lang: 'pt-BR' }, pt));
      lauseet[h.id + '|' + e] = { rivi, fi };
      puhe.append(rivi);
    }
    const tilaNappi = (t, teksti) => {
      const b = el('button', { type: 'button', class: 'pieni-nappi toissijainen ph-tila', 'aria-pressed': 'false' }, teksti);
      b.addEventListener('click', () => { tila = t; paivita(); });
      return b;
    };
    const tilat = { osoita: tilaNappi('osoita', '👆 Apontar'), puhuja: tilaNappi('puhuja', `🚶 ${nimi(puhuja)} muda de cômodo`) };
    if (kuulija) tilat.kuulija = tilaNappi('kuulija', `🚶 ${nimi(kuulija)} muda de cômodo`);
    const napit = huoneet.map(h => {
      // Nappi ilman omaa lang-määrettä (ei vastausvaihtoehto, tarkistus M); suomi sen sisällä lang-merkinnöin.
      const pron = el('span', { class: 'ph-pron', lang: kohdeLang() });
      const kasvot = el('span', { class: 'ph-kasvot' });
      const b = el('button', { type: 'button', class: 'ph-huone' }, el('b', { lang: kohdeLang() }, h.nimi), pron,
        el('span', { class: 'ph-pt', lang: 'pt-BR' }, h.pt), kasvot);
      if (h.alue) b.style.gridArea = h.alue;
      b.addEventListener('click', () => valitse(h, b));
      p.append(b);
      return { h, b, pron, kasvot };
    });
    function valitse(h, b) {
      if (tila === 'puhuja' || tila === 'kuulija') {
        if (tila === 'puhuja') mina = h.id; else sina = h.id;
        tila = 'osoita';
        Object.values(lauseet).forEach(l => { l.rivi.hidden = true; });
        return paivita();
      }
      const x = lauseet[h.id + '|' + et(h.id)];
      Object.values(lauseet).forEach(l => { l.rivi.hidden = l !== x; });
      napit.forEach(n => n.b.classList.toggle('soi', n.b === b));
      const s = el('span'); s.dataset.puhu = x.fi; s.dataset.h = puhuja;
      try { window.Aani.soita([Object.assign(apu.alkio(s), { el: b })]); } catch (e) { /* ääni ei estä komponenttia */ }
    }
    function paivita() {
      for (const [t, b] of Object.entries(tilat)) b.setAttribute('aria-pressed', String(t === tila));
      for (const n of napit) {
        const e = et(n.h.id);
        n.b.classList.remove('ph-k1', 'ph-k2', 'ph-k3');
        n.b.classList.add('ph-k' + e);
        n.pron.textContent = PH_KOLMI[e].pron.toLowerCase();
        n.kasvot.replaceChildren();
        if (n.h.id === mina && window.Kuvitus) n.kasvot.append(window.Kuvitus.avatar(puhuja, 'ph-kasvo') || '');
        if (kuulija && n.h.id === sina && window.Kuvitus) n.kasvot.append(window.Kuvitus.avatar(kuulija, 'ph-kasvo') || '');
        n.b.setAttribute('aria-label', `${n.h.nimi} (${n.h.pt}): ${PH_KOLMI[e].pron.toLowerCase()}`);
      }
      vihje.hidden = tila !== 'osoita';
      siirtoVihje.hidden = tila === 'osoita';
      siirtoVihje.textContent = tila === 'osoita' ? '' : `Toque no cômodo novo (${nimi(tila === 'puhuja' ? puhuja : kuulija)}).`;
    }
    p.before(el('div', { class: 'ph-tilat', role: 'group', 'aria-label': 'O que o toque faz' }, ...Object.values(tilat)));
    p.after(puhe);
    paivita();
  }

  /* ---------- t08: värityskirja (AV-037): väritä suomenkielisten ohjeiden mukaan ----------
     <div class="varityskirja" data-h="purjo"><ol class="vk-ohjeet" lang="fi-FI">
       <li data-alue="sohva" data-vari="sininen" data-pt="O sofá é azul.">Sohva on sininen.</li>…</ol>
       <p class="vk-valmis-lause" lang="fi-FI" hidden>Kaunis olohuone! Kiitos, kulta!</p></div>
     Piirros: Purjon olohuone (VK_ALUEET: seina, lattia, verho, possu, matto, sohva, lamppu). Valitse väri paletista ja
     napauta aluetta (myös näppäimistöllä). Conferir tarkistaa kaikki ohjeet: passo:tulos oikein / vaarin (ensimmäinen
     ratkaisee mandariinin, app.js). Värien nimet ovat leksikon sanoja (gramatica.js; vaaleanpunainen t08). Ohjeiden ol ja
     valmis-lause glossataan sivulla (lang fi-FI); ▶ lukee ohjeen data-h:n äänellä, käännös data-pt → .kaannos.
     AV-037 (omistaja 16.10.2026: ”myöhemmin käänteisesti ja translatiivi”; 23.10.2026 ”do it”):
     - Käänteinen tila: data-tila="kaanteinen". Kuva on valmiiksi väritetty ohjeiden data-vari-väreillä; ohjeen
       värisana on aukko (nappi). Oppija napauttaa aukkoa tai kuvan osaa ja valitsee värin paletista; Conferir
       tarkistaa samoin kuin värityksessä. Ei ▶-nappia (se paljastaisi värin); data-pt kirjoitetaan niin, ettei se
       kerro väriä.
     - Translatiivi (oppitunti 16, OPPITUNNIT_6_20 §4): tavallinen tila, ohjeet muodossa ”Maalaa sohva siniseksi.”;
       data-vari on värin perusmuoto, jonka oppija valitsee paletista. Ei omaa koodia.
     - Valinnaiset: data-kuvaus = kuvan aria-label, data-valmis = onnistumisen palaute portugaliksi. */
  const VK_VARIT = { musta: '#1b1b1b', valkoinen: '#ffffff', punainen: '#d62828', sininen: '#2563eb', 'vihreä': '#2e9d4a',
    keltainen: '#f5c518', ruskea: '#8a5a2b', harmaa: '#9aa0a6', vaaleanpunainen: '#f4a6c1' };
  const VK_PT = { seina: 'a parede', lattia: 'o chão', verho: 'a cortina', possu: 'o porquinho do quadro', matto: 'o tapete',
    sohva: 'o sofá', lamppu: 'a luminária' };
  // Piirtojärjestys: taka-alalta eteen. Kiinteät osat (ikkuna, kehys, jalat, varsi) eivät ole värialueita.
  const VK_PIIRROS = [
    ['seina', '<rect x="0" y="0" width="400" height="200"/>'],
    ['lattia', '<rect x="0" y="200" width="400" height="80"/>'],
    [null, '<rect x="240" y="34" width="110" height="96" fill="#cfe8ff" stroke="#333" stroke-width="3"/><path d="M295 34V130M240 82H350" stroke="#333" stroke-width="3"/><path d="M220 26H370" stroke="#333" stroke-width="4"/>'],
    ['verho', '<path d="M226 26H252V152Q239 142 226 152Z"/><path d="M338 26H364V152Q351 142 338 152Z"/>'],
    [null, '<rect x="40" y="36" width="124" height="88" fill="#fffdf6" stroke="#5a3b22" stroke-width="6"/><path d="M62 86q-8-4-4 6" fill="none" stroke="#333" stroke-width="2"/>'],
    ['possu', '<ellipse cx="94" cy="88" rx="30" ry="19"/><circle cx="126" cy="80" r="13"/><path d="M118 68L122 59L129 68Z"/><ellipse cx="138" cy="84" rx="5" ry="4"/><rect x="74" y="102" width="7" height="12"/><rect x="104" y="102" width="7" height="12"/>'],
    [null, '<circle cx="129" cy="77" r="2" fill="#222"/>'],
    ['matto', '<ellipse cx="185" cy="246" rx="135" ry="22"/>'],
    [null, '<rect x="36" y="203" width="10" height="12" fill="#333"/><rect x="204" y="203" width="10" height="12" fill="#333"/><path d="M335 262V140" stroke="#333" stroke-width="4"/><ellipse cx="335" cy="263" rx="22" ry="5" fill="#333"/>'],
    ['sohva', '<rect x="30" y="140" width="190" height="45" rx="10"/><rect x="24" y="172" width="202" height="32" rx="8"/><rect x="14" y="158" width="24" height="47" rx="8"/><rect x="212" y="158" width="24" height="47" rx="8"/>'],
    ['lamppu', '<path d="M308 140L318 104H352L362 140Z"/>']
  ];
  function varityskirja(d, o, apu) {
    const lista = d.querySelector('.vk-ohjeet');
    if (!lista) return;
    const ohjeet = $$(':scope > li[data-alue]', lista).map(li => ({ li, alue: li.dataset.alue, vari: li.dataset.vari, teksti: li.textContent.trim().replace(/\s+/g, ' ') }));
    const valmisLause = d.querySelector('.vk-valmis-lause');
    const sano = (teksti, kohde, puhuja) => {
      const s = el('span'); s.dataset.puhu = teksti; s.dataset.h = puhuja || '';
      try { window.Aani.soita([Object.assign(apu.alkio(s), { el: kohde })]); } catch (e) { /* ääni ei estä komponenttia */ }
    };
    const kaanteinen = d.dataset.tila === 'kaanteinen';
    const ALKU = kaanteinen ? 'Toque numa frase (ou numa parte do desenho) e escolha a cor.' : 'Escolha uma cor e toque numa parte do desenho.';
    // Käänteinen tila: ohjeen värisana → aukko-nappi. Aukko korvaa sanan tekstisolmusta (ennen glossausta).
    let aktiivinen = null;
    const aktivoi = x => {
      aktiivinen = x;
      ohjeet.forEach(y => y.li.classList.toggle('vk-valittu', y === x));
      Object.entries(alueet).forEach(([a, g]) => g.classList.toggle('vk-valittu-alue', !!x && a === x.alue));
    };
    const aukoksi = x => {
      const aukko = el('button', { type: 'button', class: 'vk-aukko', 'aria-label': 'Escolher a cor' }, '___');
      aukko.addEventListener('click', () => aktivoi(x));
      const re = new RegExp('(^|[^\\p{L}])(' + x.vari + ')(?![\\p{L}])', 'iu');
      // Sivu on voinut jo glossata ohjeen (sana omana kuplaelementtinään): koko sanan elementti korvataan aukolla,
      // muuten sana leikataan tekstisolmusta.
      const kulku = document.createTreeWalker(x.li, NodeFilter.SHOW_TEXT);
      let solmu = null;
      for (let n = kulku.nextNode(); n; n = kulku.nextNode()) if (re.test(n.nodeValue)) { solmu = n; break; }
      if (!solmu) { x.li.append(' ', aukko); return aukko; }
      const isa = solmu.parentElement;
      if (isa !== x.li && isa.textContent.trim().toLowerCase() === x.vari.toLowerCase()) { isa.replaceWith(aukko); return aukko; }
      const m = re.exec(solmu.nodeValue), alku = m.index + m[1].length;
      solmu.replaceWith(solmu.nodeValue.slice(0, alku), aukko, solmu.nodeValue.slice(alku + m[2].length));
      return aukko;
    };
    // ▶ ja käännös jokaiselle ohjeelle (nappi ei glossaudu; .kaannos näkyy Tradução-napista).
    for (const x of ohjeet) {
      if (kaanteinen) x.aukko = aukoksi(x);
      else {
        const b = el('button', { type: 'button', class: 'vk-soita', 'aria-label': 'Ouvir a frase' }, '▶');
        b.addEventListener('click', () => sano(x.teksti, x.li, d.dataset.h));
        x.li.prepend(b, ' ');
      }
      if (x.li.dataset[KAANNOS]) x.li.append(' ', el('span', { class: 'kaannos', lang: 'pt-BR' }, x.li.dataset[KAANNOS]));
    }
    const tila = {};
    let valittu = null;
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 400 280'); svg.setAttribute('class', 'vk-kuva'); svg.setAttribute('role', 'group');
    svg.setAttribute('aria-label', d.dataset.kuvaus || 'A sala da Purjo para colorir');
    const palaute = el('p', { class: 'vk-palaute', lang: 'pt-BR', 'aria-live': 'polite' }, ALKU);
    const alueet = {};
    for (const [alue, muodot] of VK_PIIRROS) {
      const g = document.createElementNS(ns, 'g');
      g.innerHTML = muodot;
      if (!alue) { g.setAttribute('class', 'vk-kiintea'); svg.append(g); continue; }
      g.setAttribute('class', 'vk-alue'); g.setAttribute('data-alue', alue); g.setAttribute('fill', VK_VARIT.valkoinen);
      g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button'); g.setAttribute('aria-label', VK_PT[alue] || alue);
      const ohje = ohjeet.find(x => x.alue === alue);
      if (kaanteinen && ohje && VK_VARIT[ohje.vari]) g.setAttribute('fill', VK_VARIT[ohje.vari]);
      const vari = () => {
        if (kaanteinen) { if (ohje) aktivoi(ohje); return; }   // käänteinen: kuvan osa valitsee lauseen
        if (!valittu) { palaute.textContent = 'Escolha uma cor primeiro.'; return; }
        tila[alue] = valittu;
        g.setAttribute('fill', VK_VARIT[valittu]);
        g.setAttribute('aria-label', `${VK_PT[alue] || alue}: ${valittu}`);
        palaute.textContent = `${(VK_PT[alue] || alue).replace(/^./, c => c.toUpperCase())}: ${valittu}.`;
      };
      g.addEventListener('click', vari);
      g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); vari(); } });
      alueet[alue] = g;
      svg.append(g);
    }
    const paletti = el('div', { class: 'vk-paletti', role: 'group', 'aria-label': 'Cores' });
    for (const [nimi, hex] of Object.entries(VK_VARIT)) {
      const nayte = el('span', { class: 'vk-nayte', 'aria-hidden': 'true' });
      nayte.style.setProperty('--vari', hex);
      const b = el('button', { type: 'button', class: 'vk-vari', lang: kohdeLang(), 'aria-pressed': 'false' }, nayte, nimi);
      b.addEventListener('click', () => {
        valittu = nimi;
        $$('.vk-vari', paletti).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
        try { window.Aani.soita([{ teksti: nimi, tyyppi: 'kertoja', vaihto: 0, el: b }]); } catch (e) { /* ohita */ }
        if (kaanteinen) {
          if (!aktiivinen) { palaute.textContent = 'Toque numa frase (ou numa parte do desenho) primeiro.'; return; }
          tila[aktiivinen.alue] = nimi;
          aktiivinen.aukko.textContent = nimi;
          aktiivinen.aukko.classList.add('vk-taytetty');
          aktiivinen.li.classList.remove('vk-oikein', 'vk-vaarin');
          // Seuraava täyttämätön lause valituksi (jos kaikki täynnä, valinta jää viimeiseen).
          const i = ohjeet.indexOf(aktiivinen);
          const seur = ohjeet.slice(i + 1).concat(ohjeet.slice(0, i)).find(x => !tila[x.alue]);
          if (seur) aktivoi(seur);
        }
      });
      paletti.append(b);
    }
    const tarkista = el('button', { type: 'button', class: 'pieni-nappi' }, 'Conferir');
    const tyhjenna = el('button', { type: 'button', class: 'pieni-nappi toissijainen' }, 'Apagar tudo');
    tyhjenna.addEventListener('click', () => {
      for (const [alue, g] of Object.entries(alueet)) {
        delete tila[alue];
        if (kaanteinen) continue;   // käänteinen: kuva pysyy väritettynä, vain vastaukset tyhjenevät
        g.setAttribute('fill', VK_VARIT.valkoinen); g.setAttribute('aria-label', VK_PT[alue] || alue);
      }
      if (kaanteinen) { ohjeet.forEach(x => { x.aukko.textContent = '___'; x.aukko.classList.remove('vk-taytetty'); }); aktivoi(null); }
      ohjeet.forEach(x => x.li.classList.remove('vk-oikein', 'vk-vaarin'));
      if (valmisLause) valmisLause.hidden = true;
      palaute.textContent = ALKU;
    });
    tarkista.addEventListener('click', () => {
      const vaarin = ohjeet.filter(x => tila[x.alue] !== x.vari);
      ohjeet.forEach(x => { x.li.classList.toggle('vk-vaarin', vaarin.includes(x)); x.li.classList.toggle('vk-oikein', !vaarin.includes(x)); });
      if (vaarin.length) {
        palaute.textContent = `Ainda não: ${vaarin.map(x => VK_PT[x.alue] || x.alue).join(', ')}. `
          + (kaanteinen ? 'Olhe a cor no desenho e escolha de novo.' : 'Releia a frase e confira a cor.');
      } else {
        palaute.textContent = d.dataset.valmis || 'Pronto! A sala ficou do jeito que a Purjo pediu.';
        if (valmisLause) { valmisLause.hidden = false; sano(valmisLause.textContent.trim().replace(/\s+/g, ' '), valmisLause, d.dataset.h); }
      }
      tarkista.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: { tulos: vaarin.length ? 'vaarin' : 'oikein' } }));
    });
    const oikea = el('div', { class: 'vk-oikea' }, paletti, lista, el('div', { class: 'vk-napit' }, tarkista, tyhjenna), palaute);
    if (valmisLause) oikea.append(valmisLause);
    d.append(el('div', { class: 'vk-runko' }, el('div', { class: 'vk-vasen' }, svg), oikea));
  }
  // ==== t09: komponenttien funktiot (lisää tämän rivin perään) ====
  /* Televisio kohdekielellä (t09 sääennuste). tv() kirjoittaa lähetyksen tekstit kohdekielellä ja käännöksen .tv-fi-
     riville; tämä ajetaan tv():n jälkeen ja merkitsee kielet, jotta app.js glossaaSuomi (ajetaan komponenttien jälkeen)
     antaa kuplan vain kohdekielen sanoille: käännösrivi lähdekielelle (Tottakaissa pt-BR, ei kuplaa), kanavan nimi,
     uutisnauha ja korttien paikannimet kohdekielelle (kupla). Ääni: tv() lukee puhujan data-h:sta oppitunnin hahmoista
     (t09: saajuontaja = mies 8); data-aani + data-vaihto .tv-elementissä kertoo saman roolin äänipoiminnalle.
     Toimii jokaiselle .tv-lähetykselle; ei muuta mitään muuta. */
  function tvKielet(t) {
    const lahde = (K.profiili && K.profiili.lahdekieli && K.profiili.lahdekieli.bcp47) || 'fi-FI';
    $$('.tv-fi', t).forEach(e => e.setAttribute('lang', lahde));
    $$('.tv-nauha > span, .tv-yla > span:not(.tv-live), .tv-kortti > b', t).forEach(e => e.setAttribute('lang', kohdeLang()));
  }
  // ==== t10: komponenttien funktiot (lisää tämän rivin perään) ====
  // ==== k02: komponenttien funktiot (lisää tämän rivin perään) ====
  // ==== t11: komponenttien funktiot (lisää tämän rivin perään) ====
  /* ---------- t11: vaaka suomeksi: vertailulause leksikon vert-kentästä (vaaka() ohjaa tänne, kun data-vert on annettu) ----------
     <div class="vaaka" data-h="maia" data-valuutta="R$" data-vert="kallis|halpa" data-pt-vert="caro,cara|barato,barata"
          data-ohje="ohje portugaliksi"><p data-hinta="60" data-pt="o queijo" data-suku="m" data-ikoni="🧀">juusto</p>…</div>
     data-vert = kaksi adjektiivin tunnistetta: ensimmäinen kalliimmalle, toinen halvemmalle. Lause ”A on <vert[0]> kuin B.”
     (Sanasto.hae(id).vert: kallis → kalliimpi, halpa → halvempi); sama hinta: ”A on yhtä <ensimmäinen perusmuoto> kuin B.”
     Tuotteen nimi = p:n teksti (suomeksi); käännös data-pt + data-suku ja data-pt-vert (m,f | m,f). Kaikki parit tehdään
     valmiiksi piiloon (span lang fi-FI + .kaannos), jotta app.js glossaa ne komponentin jälkeen (glossaaSuomi); napautus
     näyttää oikean lauseen ja soittaa sen puhujan (data-h) äänellä. Kalliimman kuppi painuu alas. Ilman data-vert-määrettä
     vaaka() toimii kuten ennen (profiilin fraasit). Ei <small>-tageja (KAYTANNOT T3). */
  function vaakaVertailu(v, o, apu) {
    const S = window.Sanasto;
    const [yla, ala] = (v.dataset.vert || '').split('|').map(x => x.trim());
    const komp = id => { const r = S && id ? S.hae(id) : null; return r && Array.isArray(r.vert) ? r.vert[0] : null; };
    const ptAdj = (v.dataset.ptVert || '').split('|').map(x => x.split(',').map(y => y.trim()));
    const pta = (i, f) => { const m = ptAdj[i] || []; return (f && m[1]) || m[0] || ''; };
    const lahteet = $$(':scope > p[data-hinta]', v);
    const tuotteet = lahteet.map(p => ({ nimi: p.textContent.trim(), pt: p.dataset[KAANNOS] || '', f: p.dataset.suku === 'f',
      hinta: Number(p.dataset.hinta), ikoni: p.dataset.ikoni || '' }));
    lahteet.forEach(p => p.remove());
    if (tuotteet.length < 2 || !komp(yla) || !komp(ala)) return;
    const valuutta = v.dataset.valuutta || '€';
    const vasen = el('div', { class: 'vk-kuppi' }), oikea = el('div', { class: 'vk-kuppi' });
    const varsi = el('div', { class: 'vk-varsi' }, vasen, oikea);
    const ohje = el('p', { class: 'vk-lause', lang: 'pt-BR' }, v.dataset.ohje || 'Toque em dois produtos: o prato do mais caro desce.');
    const alue = el('div', { class: 'vk-vertailu', 'aria-live': 'polite' }, ohje);
    // Lauseet valmiiksi: jokainen järjestetty pari (A ensin = vasen kuppi ja lauseen subjekti).
    const lauseet = new Map();
    for (const a of tuotteet) for (const c of tuotteet) {
      if (a === c) continue;
      const laji = a.hinta > c.hinta ? 0 : a.hinta < c.hinta ? 1 : 2;   // 0 kalliimpi, 1 halvempi, 2 yhtä kallis
      // Pohja profiilista (sama kuin äänitarpeen poiminnassa tools/poimi_aanet.js).
      const pohja = (p, arvot) => String(p).replace(/\{(\w+)\}/g, (_, k) => arvot[k] !== undefined ? arvot[k] : '');
      const fi = laji === 2 ? pohja(P().vertailuSama || '{a} on yhtä {adj} kuin {b}.', { a: iso(a.nimi), adj: yla, b: c.nimi })
        : pohja(P().vertailu || '{a} on {komp} kuin {b}.', { a: iso(a.nimi), komp: komp(laji ? ala : yla), b: c.nimi });
      const pt = laji === 2 ? `${iso(a.pt)} é tão ${pta(0, a.f)} quanto ${c.pt}.` : `${iso(a.pt)} é mais ${pta(laji, a.f)} que ${c.pt}.`;
      const rivi = el('p', { class: 'vk-fi-lause', hidden: true }, el('span', { lang: 'fi-FI' }, fi), ' ', el('span', { class: 'kaannos', lang: 'pt-BR' }, pt));
      lauseet.set(a.nimi + '|' + c.nimi, { rivi, fi, laji });
      alue.append(rivi);
    }
    const kuppi = t => el('span', { class: 'vk-kuppi-sisalto' }, t.ikoni, el('span', { class: 'vk-kuppi-hinta', lang: 'pt-BR' }, `${valuutta} ${t.hinta}`));
    let valitut = [];
    const kortit = tuotteet.map(t => {
      // Nappi ilman omaa lang-määrettä (ei vastausvaihtoehto, tarkistus M); suomen nimi lang-merkittynä sen sisällä.
      const b = el('button', { type: 'button', class: 'vk-tuote' }, el('span', { class: 'vk-ikoni', 'aria-hidden': 'true' }, t.ikoni),
        el('b', { lang: 'fi-FI' }, t.nimi), el('span', { class: 'vk-hinta', lang: 'pt-BR' }, `${valuutta} ${t.hinta}`));
      b.addEventListener('click', () => {
        if (valitut.length === 2 || valitut[0] === t) valitut = [];
        valitut.push(t);
        kortit.forEach((k, i) => k.classList.toggle('valittu', valitut.includes(tuotteet[i])));
        vasen.replaceChildren(valitut[0] ? kuppi(valitut[0]) : '');
        oikea.replaceChildren(valitut[1] ? kuppi(valitut[1]) : '');
        lauseet.forEach(x => { x.rivi.hidden = true; x.rivi.classList.remove('soi'); });
        if (valitut.length < 2) { varsi.style.transform = ''; ohje.hidden = false; return; }
        const x = lauseet.get(valitut[0].nimi + '|' + valitut[1].nimi);
        if (!x) return;
        varsi.style.transform = `rotate(${x.laji === 0 ? -10 : x.laji === 1 ? 10 : 0}deg)`;
        ohje.hidden = true;
        x.rivi.hidden = false;
        const s = el('span'); s.dataset.puhu = x.fi; s.dataset.h = v.dataset.h || '';
        try { window.Aani.soita([Object.assign(apu.alkio(s), { el: x.rivi })]); } catch (e) { /* ääni ei estä komponenttia */ }
      });
      return b;
    });
    v.append(el('div', { class: 'vk-laite' }, el('div', { class: 'vk-jalka' }), varsi), alue, el('div', { class: 'vk-tuotteet' }, ...kortit));
  }

  /* ---------- t11: salakieli (Maian ja Jayn suomi kuiskauksina; kuulija, esim. Moara, ei ymmärrä) ----------
     <div class="salakieli" data-kuulija="moara" data-kuiskaajat="maia,jay">
       <div class="kpl" id="…" data-nimi="…">
         <p class="sk-pt" data-h="moara" lang="pt-BR">Kuulijan oma repliikki portugaliksi (ei kuplaa, ei ääntä)</p>
         <p class="s" data-h="jay" data-pt="…">Kuiskaus suomeksi.</p>
         <p class="sk-ajatus" data-h="moara" lang="pt-BR">Kuulijan ajatus (näkyy vain kuulijan korvalla)</p>
       </div></div>
     Kaksi korvaa: kuulijan korva (oletus: kuiskaukset sumeina ”psst… psst…”, kuplat ja käännökset pois, ajatukset näkyvät)
     ja Maian korva (kuiskaukset haaleina kuplina, luettavina ja glossattuina). Kuiskaajien .s-repliikit saavat luokan
     sk-kuiskaus; kertojan repliikit eivät ole kuiskauksia. .sk-pt ja .sk-ajatus saavat puhujan kasvot ja nimen
     (Kuvitus.avatar). Dialogin .s-repliikit toimivat kuten muuallakin (▶, kupla, käännös, dialogin toisto). Napit ja
     ohjeet: data-korva-kuulija, data-korva-mina, data-ohje-kuulija, data-ohje-mina (oletukset portugaliksi). */
  function salakieli(sk, o, apu) {
    if (sk.querySelector(':scope > .sk-korvat')) return;
    const kuiskaajat = (sk.dataset.kuiskaajat || 'maia,jay').split(',').map(x => x.trim()).filter(Boolean);
    const kuulija = sk.dataset.kuulija || '';
    const nimi = id => ((((o && o.hahmot) || {})[id]) || {}).nimi || id;
    $$('.s[data-h]', sk).forEach(s => { if (kuiskaajat.includes(s.dataset.h)) s.classList.add('sk-kuiskaus'); });
    $$('.sk-pt[data-h], .sk-ajatus[data-h]', sk).forEach(p => {
      const kasvo = window.Kuvitus && window.Kuvitus.avatar ? window.Kuvitus.avatar(p.dataset.h, 'sk-kasvo') : null;
      const teksti = el('span', { class: 'sk-teksti' }, ...Array.from(p.childNodes));
      p.append(el('span', { class: 'sk-puhuja' }, kasvo || '', el('b', {}, nimi(p.dataset.h))), teksti);
    });
    const OHJEET = {
      kuulija: sk.dataset.ohjeKuulija || `Ouvido da ${nimi(kuulija)}: o finlandês é só “psst… psst…”; ela só vê as caras. Toque em 👂 Ouvido da Maia para entender os cochichos.`,
      mina: sk.dataset.ohjeMina || 'Ouvido da Maia: os cochichos em finlandês ficam claros. Toque nas palavras e ligue a Tradução.'
    };
    const ohje = el('p', { class: 'sk-ohje', lang: 'pt-BR', 'aria-live': 'polite' });
    const nappi = (tila, teksti) => {
      const b = el('button', { type: 'button', class: 'pieni-nappi toissijainen sk-korva', 'aria-pressed': 'false', lang: 'pt-BR' }, teksti);
      b.addEventListener('click', () => aseta(tila));
      return b;
    };
    const napit = { kuulija: nappi('kuulija', sk.dataset.korvaKuulija || `👂 Ouvido da ${nimi(kuulija)}`), mina: nappi('mina', sk.dataset.korvaMina || '👂 Ouvido da Maia') };
    function aseta(tila) {
      sk.classList.toggle('sk-ei-ymmarra', tila === 'kuulija');
      for (const [t, b] of Object.entries(napit)) b.setAttribute('aria-pressed', String(t === tila));
      ohje.textContent = OHJEET[tila];
    }
    sk.prepend(el('div', { class: 'sk-korvat', role: 'group', 'aria-label': 'Quem escuta?' }, napit.kuulija, napit.mina), ohje);
    aseta(kuulija ? 'kuulija' : 'mina');
  }
  // ==== t12: komponenttien funktiot (lisää tämän rivin perään) ====
  /* ---------- t12: sovituskoppi valmiilla repliikeillä (data-lauseet; provador() ohjaa tänne) ----------
     <div class="provador" data-h="jay" data-lauseet>
       <div data-esine="paita" data-osa="paita" data-varit="sininen:#2563eb,punainen:#d62828">
         <p class="s" data-h="maia" data-vari="sininen" data-pt="…">Sininen paita sopii sinulle!</p>
         <p class="s" data-h="jay" data-vari="sininen" data-pt="…">Hyvä. Otan sinisen paidan.</p> …</div></div>
     Värin napautus vaihtaa vaatteen hahmon muotokuvassa (Kuvitus.muotokuva, ohita: paita | lippis), näyttää sen värin
     repliikit ja soittaa ne järjestyksessä puhujien äänillä. Repliikit ovat app.js:n valmiiksi glossaamia .s-lauseita
     (▶, kupla, puhuja ja käännös), joten ajonaikaista kohdekieltä ei tarvita eikä profiilin fraasipohjia (sopii_, levan_)
     käytetä: suomen objekti (sinisen paidan / punaista paitaa) on kirjoitettu lauseisiin. Esineen nimi (data-esine)
     näytetään kohdekielellä (lang), ja app.js glossaa sen komponentin jälkeen. Ilman data-lauseet provador() toimii kuten
     ennen. Väri annetaan CSS-muuttujana elementin style-kentässä (ei style-attribuuttia, KAYTANNOT T2). */
  function provadorLauseet(pr, o, apu) {
    const jay = pr.dataset.h || 'jay';
    const kuva = el('div', { class: 'pv-kuva' });
    const asu = {};
    const piirra = () => { kuva.innerHTML = window.Kuvitus ? window.Kuvitus.muotokuva(jay, { ohita: asu }) : ''; };
    const lauseet = el('div', { class: 'pv-lauseet', 'aria-live': 'polite' });
    const kaikki = [];
    const rivit = $$(':scope > div[data-esine]', pr).map(d => {
      const osa = d.dataset.osa || 'paita';
      const omat = $$(':scope > .s[data-vari]', d);
      omat.forEach(s => { s.hidden = true; lauseet.append(s); kaikki.push(s); });
      const varit = (d.dataset.varit || '').split(',').filter(Boolean).map(x => x.split(':'));
      const rivi = el('div', { class: 'pv-rivi' }, el('b', { lang: kohdeLang() }, d.dataset.esine || ''));
      varit.forEach(([nimi, vari]) => {
        const nayte = el('span', { class: 'pv-nayte', 'aria-hidden': 'true' });
        const b = el('button', { type: 'button', class: 'pv-vari', lang: kohdeLang(), title: nimi, 'aria-pressed': 'false' }, nayte, el('span', {}, nimi));
        b.style.setProperty('--vari', vari);
        b.addEventListener('click', () => {
          asu[osa] = vari;
          piirra();
          $$('.pv-vari', pr).forEach(x => { if (x.closest('.pv-rivi') === rivi) x.setAttribute('aria-pressed', String(x === b)); });
          const nyt = omat.filter(s => s.dataset.vari === nimi);
          kaikki.forEach(s => { s.hidden = !nyt.includes(s); });
          if (nyt.length && window.Aani) { try { window.Aani.soita(nyt.map(s => apu.alkio(s))); } catch (e) { /* ääni ei estä komponenttia */ } }
        });
        rivi.append(b);
      });
      d.remove();
      return rivi;
    });
    piirra();
    pr.append(el('div', { class: 'pv-koppi' }, el('div', { class: 'pv-peili' }, kuva), el('div', { class: 'pv-valinnat' }, ...rivit, lauseet)));
  }
  // ==== t13: komponenttien funktiot (lisää tämän rivin perään) ====
  /* Aikajana kohdekielellä (t13 perheen päivä). aikajana() kirjoittaa rivit kohdekielellä (ol lang = kohdekieli) ja
     käännöksen <small>-riville; Tottakaissa käännös on lähdekieltä (pt-BR), joten se saa lähdekielen lang-arvon ja
     .kaannos-luokan (ei kuplaa; Tradução-nappi näyttää, tottakai.css t13). Suomenkielisellä kurssilla kellonaika näytetään
     pisteellä (6.00; data-aika ja kellotaulu ennallaan) ja ”soita kaikki” -nappi käyttöliittymän kielellä, kun
     Kurssi.ui.komponentit ei anna omaa tekstiä. Ajetaan aikajana():n jälkeen; ei muuta komponentin toimintaa. */
  function aikajanaKielet(a) {
    const lahde = (K.profiili && K.profiili.lahdekieli && K.profiili.lahdekieli.bcp47) || 'fi-FI';
    $$('.aj-teksti > small', a).forEach(s => { s.setAttribute('lang', lahde); s.classList.add('kaannos'); });
    if (!/^fi/.test(kohdeLang())) return;
    $$('.aj-aika', a).forEach(s => { s.textContent = s.textContent.replace(':', '.'); });
    const nappi = a.querySelector('.aj-vasen > .tv-nappi');
    if (nappi && !(K.ui && K.ui.komponentit && K.ui.komponentit.soitaKaikki)) nappi.textContent = '▶ Ouvir o dia inteiro';
  }
  // ==== t14: komponenttien funktiot (lisää tämän rivin perään) ====
  /* Kartan akkumittari (t14: Jayn puhelimen akku on loppumassa). Lisäosa kartta()-komponentille, ajetaan sen jälkeen:
     <div class="kartta" data-akku="12" data-akku-nimi="…" data-akku-loppu="…">. Mittari ohjauspaneelin alkuun; jokainen
     käskynappi (.kt-nappi) vie yhden prosentin; nollassa käsky pysäytetään kaappausvaiheessa ennen kartan omaa käsittelijää,
     ja tilarivi näyttää data-akku-loppu-tekstin (käyttöliittymän kieli) kunnes Alusta-nappi lataa akun. Perillä akku ei
     enää kulu. Ilman data-akku ei tee mitään. */
  function karttaAkku(k) {
    const taysi = Number(k.dataset.akku);
    const ohjaus = k.querySelector('.kt-ohjaus'), tila = k.querySelector('.kt-tila');
    if (!taysi || !ohjaus) return;
    let akku = taysi, oliPerilla = false;
    const taso = el('span', { class: 'kt-akku-taso' });
    const luku_ = el('b', { class: 'kt-akku-luku' }, '');
    const mittari = el('div', { class: 'kt-akku', role: 'meter', 'aria-valuemin': '0', 'aria-valuemax': String(taysi), 'aria-label': k.dataset.akkuNimi || '🔋' },
      el('span', { class: 'kt-akku-kuvake emoji', 'aria-hidden': 'true' }, '🔋'), el('span', { class: 'kt-akku-runko' }, taso), luku_);
    const piirra = () => {
      taso.style.width = `${Math.max(0, akku) * 100 / taysi}%`;
      luku_.textContent = `${Math.max(0, akku)} %`;
      mittari.setAttribute('aria-valuenow', String(Math.max(0, akku)));
      mittari.classList.toggle('kt-akku-vahissa', akku <= Math.ceil(taysi / 4));
      k.classList.toggle('kt-akku-tyhja', akku <= 0);
    };
    k.addEventListener('click', e => {
      if (!e.target.closest('.kt-nappi')) return;
      oliPerilla = k.classList.contains('kt-perilla');
      if (akku > 0 || oliPerilla) return;
      e.stopPropagation();
      if (tila) tila.textContent = k.dataset.akkuLoppu || '0 %';
    }, true);
    k.addEventListener('click', e => {
      if (e.target.closest('.kt-ohjaus .toissijainen')) { akku = taysi; piirra(); return; }
      if (!e.target.closest('.kt-nappi') || oliPerilla || akku <= 0) return;
      akku -= 1;
      piirra();
      if (akku <= 0 && !k.classList.contains('kt-perilla') && tila) tila.textContent = k.dataset.akkuLoppu || '0 %';
    });
    ohjaus.prepend(mittari);
    piirra();
  }
  // ==== t15: komponenttien funktiot (lisää tämän rivin perään) ====
  /* Tehtävälista kohdekielellä (t15 Martan lista suomeksi). tehtavalista() kirjoittaa käskyn napin sisään ja käännöksen
     <small>-riville napin alle; Tottakaissa käännös on lähdekieltä (pt-BR), joten se saa lähdekielen lang-arvon ja
     .kaannos-luokan (ei kuplaa; Tradução-nappi näyttää, tottakai.css t15), kuten aikajanaKielet (t13). Ajetaan
     tehtavalista():n jälkeen; ei muuta komponentin toimintaa. Äänet: käskyn p-elementin data-puhu = sama teksti, jotta
     tools/poimi_aanet.js (KOMPONENTTI_JUURET: tehtavalista) poimii rivin listan puhujan (data-h) äänellä. */
  function tehtavalistaKielet(t) {
    const lahde = (K.profiili && K.profiili.lahdekieli && K.profiili.lahdekieli.bcp47) || 'fi-FI';
    $$('.tl-kasky > small', t).forEach(s => { s.setAttribute('lang', lahde); s.classList.add('kaannos'); });
  }
  /* ---------- t15: joulukalenteri (Purjon kalenteri: luukut avautuvat suomen joulusanoiksi) ----------
     <div class="joulukalenteri" data-otsikko="Purjon joulukalenteri">
       <div data-paiva="13" data-ikoni="⭐"><p class="s" data-h="jay" data-pt="estrela">tähti</p></div> …
       <p class="s jk-loppu" data-h="jay" data-pt="…">Hyvää joulua, Maia!</p></div>
     Luukku on nappi, jossa on vain päivän numero (ei suomea: ei vastausvaihtoehto). Napautus avaa luukun: sen takana on
     ikoni ja app.js:n valmiiksi glossaama .s-lause (▶, kupla, puhuja, käännös), joka soi puhujan äänellä (data-h).
     Avattu luukku pysyy auki (lauseen ▶ soittaa sen uudelleen). Kun kaikki ovat auki: .jk-loppu-lause näkyy ja soi,
     konfettia ja passo:tulos 'oikein'. Äänet: .s-lauseet poimitaan kuten dialogit (tools/poimi_aanet.js, ei data-puhu-
     rivejä), joten luokkaa ei tarvitse lisätä KOMPONENTTI_JUURET-listaan. Otsikko kohdekielellä (lang), app.js glossaa
     sen komponentin jälkeen. Tekstit portugaliksi: data-laskuri (laskurin alku), data-luukku (napin nimi ruudunlukijalle). */
  function joulukalenteri(j, o, apu) {
    if (j.querySelector(':scope > .jk-ruudukko')) return;
    const luukut = $$(':scope > div[data-paiva]', j);
    if (!luukut.length) return;
    const loppu = j.querySelector(':scope > .jk-loppu');
    const laskuri = el('p', { class: 'jk-laskuri', lang: 'pt-BR', 'aria-live': 'polite' });
    const ruudukko = el('div', { class: 'jk-ruudukko' });
    let auki = 0;
    const paivita = () => { laskuri.textContent = `${j.dataset.laskuri || 'Portinhas abertas'}: ${auki} / ${luukut.length}`; };
    const soita = s => { if (s && window.Aani) { try { window.Aani.soita([apu.alkio(s)]); } catch (e) { /* ääni ei estä komponenttia */ } } };
    luukut.forEach(d => {
      const s = d.querySelector('.s');
      const taka = el('div', { class: 'jk-taka' }, el('span', { class: 'jk-ikoni emoji', 'aria-hidden': 'true' }, d.dataset.ikoni || '🎄'), ...Array.from(d.childNodes));
      taka.hidden = true;
      const nappi = el('button', { type: 'button', class: 'jk-luukku', 'aria-label': `${j.dataset.luukku || 'Portinha'} ${d.dataset.paiva || ''}` },
        el('span', { class: 'jk-numero' }, d.dataset.paiva || ''));
      const solu = el('div', { class: 'jk-solu' }, nappi, taka);
      nappi.addEventListener('click', () => {
        if (solu.classList.contains('jk-auki')) return;
        solu.classList.add('jk-auki');
        nappi.hidden = true;
        taka.hidden = false;
        auki++;
        paivita();
        soita(s);
        if (auki === luukut.length) {
          if (loppu) { loppu.hidden = false; setTimeout(() => soita(loppu), 1200); }
          konfetti();
          j.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: { tulos: 'oikein' } }));
        }
      });
      ruudukko.append(solu);
      d.remove();
    });
    if (loppu) loppu.hidden = true;
    j.prepend(el('h4', { class: 'jk-otsikko', lang: kohdeLang() }, j.dataset.otsikko || ''), laskuri);
    j.insertBefore(ruudukko, loppu || null);
    paivita();
  }
  // ==== k03: komponenttien funktiot (lisää tämän rivin perään) ====
  // ==== t16: komponenttien funktiot (lisää tämän rivin perään) ====
  /* Vastaaja kohdekielellä (t16 Jayn puhelin juhlapöydällä). vastaaja() kirjoittaa viestin tekstin (lang = kohdekieli) ja
     käännöksen <small>-riville; Tottakaissa käännös on lähdekieltä (pt-BR), joten se saa lähdekielen lang-arvon ja
     .kaannos-luokan (ei kuplaa; Tradução-nappi näyttää, tottakai.css t16), kuten aikajanaKielet (t13). Ajetaan
     vastaaja():n jälkeen; ei muuta komponentin toimintaa. Äänet: viestin p-elementin data-puhu = sama teksti, jotta
     tools/poimi_aanet.js (KOMPONENTTI_JUURET: vastaaja) poimii rivin. */
  function vastaajaKielet(v) {
    const lahde = (K.profiili && K.profiili.lahdekieli && K.profiili.lahdekieli.bcp47) || 'fi-FI';
    $$('.va-teksti > small', v).forEach(s => { s.setAttribute('lang', lahde); s.classList.add('kaannos'); });
  }
  // ==== t17: komponenttien funktiot (lisää tämän rivin perään) ====
  // t17: ei uutta funktiota. retrato (yllä) sai kaksi valinnaista lisää: data-nimet (rivien nimet uusille osille, esim.
  // silmat, parta, paita) ja silmien värin (osa silmat, data-vari). Ilman niitä retrato toimii kuten ennen.
  // ==== t18: komponenttien funktiot (lisää tämän rivin perään) ====
  // ==== t19: komponenttien funktiot (lisää tämän rivin perään) ====
  /* Postikortti kohdekielellä (t19 Maian kortti Purjolle). postikortti() kirjoittaa rivin käännöksen <small>-riville;
     Tottakaissa käännös on lähdekieltä (pt-BR), joten se saa lähdekielen lang-arvon ja .kaannos-luokan (ei kuplaa;
     Tradução-nappi näyttää, tottakai.css t19), kuten aikajanaKielet (t13) ja tehtavalistaKielet (t15). Ajetaan
     postikortti():n jälkeen; ei muuta komponentin toimintaa. Äänet: rivin p-elementin data-puhu (KOMPONENTTI_JUURET:
     postikortti), puhuja kortin data-h. */
  function postikorttiKielet(pk) {
    const lahde = (K.profiili && K.profiili.lahdekieli && K.profiili.lahdekieli.bcp47) || 'fi-FI';
    $$('.pk-rivi > small', pk).forEach(s => { s.setAttribute('lang', lahde); s.classList.add('kaannos'); });
  }
  /* ---------- t19: bingo (matkabingo: ruudut täyttyvät oikeasta vastauksesta) ----------
     <div class="bingo" data-otsikko="Oletko käynyt…?" data-laskuri="Casas marcadas" data-bingo="BINGO! …" data-auki="Casa">
       <div class="valinta" data-oikea="…" data-ikoni="⛪" data-kenelle="uuno3" data-vihje="Uuno: igreja de ouro?">
         <p class="kysymys">…</p> [<p class="s" data-h="eenok3">kuunneltava vastaus</p>]
         <div class="vaihtoehdot"><button type="button">…</button>…</div>
         [<p class="s bingo-vastaus" data-h="uuno3" data-pt="…">vastaus, joka näkyy ja soi oikean jälkeen</p>]
       </div> … (9 ruutua, 3 × 3)
       <p class="s bingo-loppu" data-h="eenok3" data-pt="…">loppurepliikki, kun kaikki ruudut ovat täynnä</p></div>
     Ruudut ovat tavallisia .valinta-tehtäviä: app.js on jo kytkenyt napit, palautteen ja tuloslokin, ja .s-lauseet on
     glossattu (kupla, ▶, puhuja). Komponentti tekee niistä 3 × 3 -ruudukon: ruudun napissa on ikoni, kysyttävän kasvot
     (data-kenelle, pilkuin useampi) ja lyhyt portugalinkielinen vihje. Napautus siirtää ruudun .valinta-osan ruudukon
     alle paneeliin (elementit pysyvät DOMissa; edellinen palaa piiloon omaan soluunsa). Tunnistusruudussa (.s ilman
     .bingo-vastaus) on 👂-merkki. Kun ruudun .valinta ilmoittaa passo:tulos 'oikein', ruutu täyttyy (✓), vastaus näkyy
     ja soi puhujan äänellä; ensimmäinen täysi rivi, sarake tai lävistäjä näyttää data-bingo-tekstin ja konfetin; kun
     kaikki ovat täynnä, .bingo-loppu näkyy ja soi, konfettia ja passo:tulos 'oikein'. Äänet: .s-lauseet poimitaan kuten
     dialogit (tools/poimi_aanet.js), ei data-puhu-rivejä, joten luokkaa ei tarvitse lisätä KOMPONENTTI_JUURET-listaan.
     Otsikko kohdekielellä (lang), app.js glossaa sen komponentin jälkeen. Tekstit portugaliksi datasta. */
  function bingo(b, o, apu) {
    if (b.querySelector(':scope > .bg-ruudukko')) return;
    const ruudut = $$(':scope > .valinta', b);
    if (!ruudut.length) return;
    const loppu = b.querySelector(':scope > .bingo-loppu');
    const laskuri = el('p', { class: 'bg-laskuri', lang: 'pt-BR', 'aria-live': 'polite' });
    const ilmoitus = el('p', { class: 'bg-ilmoitus', lang: 'pt-BR', role: 'status' }, b.dataset.bingo || 'BINGO!');
    ilmoitus.hidden = true;
    const ruudukko = el('div', { class: 'bg-ruudukko' });
    const paneeli = el('div', { class: 'bg-paneeli' });
    paneeli.hidden = true;
    const taydet = new Set();
    const solut = [];
    let auki = -1, bingoNaytetty = false;
    const paivita = () => { laskuri.textContent = `${b.dataset.laskuri || 'Casas marcadas'}: ${taydet.size} / ${ruudut.length}`; };
    const soita = s => { if (s && window.Aani) { try { window.Aani.soita([apu.alkio(s)]); } catch (e) { /* ääni ei estä komponenttia */ } } };
    // Rivit, sarakkeet ja lävistäjät neliöruudukossa (9 ruutua = 3 × 3).
    const n = Math.round(Math.sqrt(ruudut.length));
    const linjat = [];
    if (n * n === ruudut.length) {
      for (let i = 0; i < n; i++) {
        linjat.push(Array.from({ length: n }, (_, j) => i * n + j));
        linjat.push(Array.from({ length: n }, (_, j) => j * n + i));
      }
      linjat.push(Array.from({ length: n }, (_, j) => j * n + j));
      linjat.push(Array.from({ length: n }, (_, j) => j * n + (n - 1 - j)));
    }
    const sulje = () => {
      if (auki < 0) return;
      const { solu, v, nappi } = solut[auki];
      v.hidden = true; solu.append(v); nappi.setAttribute('aria-expanded', 'false'); solu.classList.remove('bg-auki');
      auki = -1; paneeli.hidden = true;
    };
    ruudut.forEach((v, i) => {
      const vastaus = v.querySelector(':scope > .bingo-vastaus');
      if (vastaus) vastaus.hidden = true;
      const tunnistus = !!v.querySelector(':scope > .s:not(.bingo-vastaus)');
      const kasvot = (v.dataset.kenelle || '').split(',').map(x => x.trim()).filter(Boolean)
        .map(id => window.Kuvitus && window.Kuvitus.avatar(id, 'bg-kasvo'));
      const nappi = el('button', { type: 'button', class: 'bg-ruutu', lang: 'pt-BR', 'aria-expanded': 'false',
        'aria-label': `${b.dataset.auki || 'Casa'} ${i + 1}: ${v.dataset.vihje || ''}` },
        el('span', { class: 'bg-ikoni emoji', 'aria-hidden': 'true' }, v.dataset.ikoni || '⭐'),
        el('span', { class: 'bg-kasvot', 'aria-hidden': 'true' }, ...kasvot),
        el('span', { class: 'bg-vihje' }, v.dataset.vihje || ''),
        tunnistus ? el('span', { class: 'bg-korva emoji', 'aria-hidden': 'true' }, '👂') : null,
        el('span', { class: 'bg-leima', 'aria-hidden': 'true' }, '✓'));
      const solu = el('div', { class: 'bg-solu' }, nappi);
      v.hidden = true;
      solu.append(v);
      solut.push({ solu, v, nappi });
      nappi.addEventListener('click', () => {
        if (auki === i) { sulje(); return; }
        sulje();
        auki = i;
        paneeli.append(v); v.hidden = false; paneeli.hidden = false;
        nappi.setAttribute('aria-expanded', 'true'); solu.classList.add('bg-auki');
      });
      v.addEventListener('passo:tulos', e => {
        if (!e.detail || e.detail.tulos !== 'oikein' || taydet.has(i)) return;
        taydet.add(i);
        solu.classList.add('bg-taysi');
        paivita();
        if (vastaus) { vastaus.hidden = false; setTimeout(() => soita(vastaus), 1600); }
        if (!bingoNaytetty && linjat.some(l => l.every(x => taydet.has(x)))) {
          bingoNaytetty = true; ilmoitus.hidden = false; konfetti();
        }
        if (taydet.size === ruudut.length) {
          if (loppu) { loppu.hidden = false; setTimeout(() => soita(loppu), vastaus ? 4200 : 1600); }
          konfetti();
          b.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: { tulos: 'oikein' } }));
        }
      });
      ruudukko.append(solu);
    });
    if (loppu) loppu.hidden = true;
    b.prepend(el('h4', { class: 'bg-otsikko', lang: kohdeLang() }, b.dataset.otsikko || ''), laskuri, ilmoitus);
    b.insertBefore(ruudukko, loppu || null);
    b.insertBefore(paneeli, loppu || null);
    paivita();
  }
  // ==== t20: komponenttien funktiot (lisää tämän rivin perään) ====
  /* Albumi kohdekielellä (t20 Maian kesäalbumi Purjolle). albumi() kirjoittaa kuvatekstin käännöksen <small>-riville;
     Tottakaissa käännös on lähdekieltä (pt-BR), joten se saa lähdekielen lang-arvon ja .kaannos-luokan (ei kuplaa;
     Tradução-nappi näyttää, tottakai.css t20), kuten postikorttiKielet (t19). Ajetaan albumi():n jälkeen; ei muuta
     komponentin toimintaa. Äänet: figuren data-puhu = kuvateksti (KOMPONENTTI_JUURET: albumi), puhuja figuren data-h. */
  function albumiKielet(a) {
    const lahde = (K.profiili && K.profiili.lahdekieli && K.profiili.lahdekieli.bcp47) || 'fi-FI';
    $$('.al-teksti > small', a).forEach(s => { s.setAttribute('lang', lahde); s.classList.add('kaannos'); });
  }
  /* ---------- t20: tulkkaus (Maia tulkkaa kahden kielen välillä, kaksi palstaa) ----------
     <div class="tulkkaus" data-otsikko="Maia tulkkaa" data-vasen="marta" data-oikea="purjo"
          data-vasen-nimi="Marta · português" data-oikea-nimi="Purjo · finlandês" data-laskuri="Falas interpretadas">
       <div class="tk-vuoro">                                    ← lähdekielinen repliikki (vasen palsta)
         <p class="tk-alku" lang="pt-BR">…</p>
         <div class="valinta" data-oikea="…"><p class="kysymys">…</p><div class="vaihtoehdot"><button type="button">…</button>…</div></div>
         <p class="s tk-tulkki" data-h="maia" data-pt="…">Maian suomennos (oikea palsta)</p></div>
       <div class="tk-vuoro">                                    ← kohdekielinen repliikki (oikea palsta)
         <p class="s tk-alku" data-h="purjo" data-pt="…">…</p>
         <div class="valinta" data-oikea="…">…<div class="vaihtoehdot" lang="pt-BR">…</div></div>
         <p class="tk-tulkki" lang="pt-BR">Maian käännös (vasen palsta)</p></div>
       …
       <p class="s tk-loppu" data-h="purjo" data-pt="…">loppurepliikki, kun kaikki on tulkattu</p></div>
     Vuorot ovat tavallisia .valinta-tehtäviä: app.js on jo kytkenyt napit, palautteen ja tuloslokin, ja .s-lauseet on
     glossattu (kupla, ▶, puhuja). Komponentti tekee jokaisesta vuorosta rivin kahteen palstaan: lähderepliikki omalle
     puolelleen (lang^=pt → vasen, muuten oikea), tulkinta toiselle puolelle (piilossa, paikalla ”…”), ja .valinta rivin
     alle koko leveydelle. Vuorot näkyvät yksi kerrallaan: kun vuoron .valinta ilmoittaa passo:tulos 'oikein', tulkinta
     näkyy, tehtävä piiloutuu ja seuraava vuoro tulee esiin; jos sen lähde on kohdekielinen .s, se soi puhujan äänellä.
     Lopuksi .tk-loppu näkyy ja soi, konfettia ja passo:tulos 'oikein'. Äänet: .s-lauseet poimitaan kuten dialogit
     (tools/poimi_aanet.js), ei data-puhu-rivejä, joten luokkaa ei tarvitse lisätä KOMPONENTTI_JUURET-listaan.
     Otsikko kohdekielellä (lang), app.js glossaa sen komponentin jälkeen; palstojen nimet lähdekielellä datasta. */
  function tulkkaus(t, o, apu) {
    if (t.querySelector(':scope > .tk-palstat')) return;
    const vuorot = $$(':scope > .tk-vuoro', t);
    if (!vuorot.length) return;
    const lahde = (K.profiili && K.profiili.lahdekieli && K.profiili.lahdekieli.bcp47) || 'pt-BR';
    const loppu = t.querySelector(':scope > .tk-loppu');
    const kasvo = id => (id && window.Kuvitus) ? window.Kuvitus.avatar(id, 'tk-kasvo') : null;
    const otsake = (id, nimi, puoli) => el('div', { class: 'tk-otsake tk-' + puoli, lang: lahde }, kasvo(id), el('span', {}, nimi || ''));
    const palstat = el('div', { class: 'tk-palstat' },
      otsake(t.dataset.vasen, t.dataset.vasenNimi, 'vasen'), otsake(t.dataset.oikea, t.dataset.oikeaNimi, 'oikea'));
    const laskuri = el('p', { class: 'tk-laskuri', lang: lahde, 'aria-live': 'polite' });
    let valmiit = 0;
    const paivita = () => { laskuri.textContent = `${t.dataset.laskuri || 'Falas interpretadas'}: ${valmiit} / ${vuorot.length}`; };
    const soita = s => { if (s && window.Aani) { try { window.Aani.soita([apu.alkio(s)]); } catch (e) { /* ääni ei estä komponenttia */ } } };
    const rivit = vuorot.map((v, i) => {
      const alku = v.querySelector(':scope > .tk-alku');
      const valinta = v.querySelector(':scope > .valinta');
      const tulkki = v.querySelector(':scope > .tk-tulkki');
      const vasemmalla = !!(alku && /^pt/.test(alku.getAttribute('lang') || ''));
      const odottaa = el('span', { class: 'tk-odottaa', lang: lahde, 'aria-hidden': 'true' }, '…');
      const lahdeSolu = el('div', { class: 'tk-solu' }, alku);
      const kohdeSolu = el('div', { class: 'tk-solu tk-kohde' }, odottaa, tulkki);
      const rivi = el('div', { class: 'tk-rivi' }, vasemmalla ? lahdeSolu : kohdeSolu, vasemmalla ? kohdeSolu : lahdeSolu);
      if (tulkki) tulkki.hidden = true;
      v.prepend(rivi);
      if (valinta) v.append(valinta);
      v.hidden = i > 0;
      let tehty = false;
      if (valinta) valinta.addEventListener('passo:tulos', e => {
        if (!e.detail || e.detail.tulos !== 'oikein' || tehty) return;
        tehty = true;
        valmiit++;
        paivita();
        v.classList.add('tk-valmis');
        odottaa.remove();
        if (tulkki) tulkki.hidden = false;
        setTimeout(() => { valinta.hidden = true; }, 900);
        const seuraava = vuorot[i + 1];
        if (seuraava) {
          setTimeout(() => {
            seuraava.hidden = false;
            const s = seuraava.querySelector('.tk-alku.s');
            if (s) setTimeout(() => soita(s), 300);
            if (seuraava.scrollIntoView) seuraava.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }, 1200);
        } else {
          if (loppu) { loppu.hidden = false; setTimeout(() => soita(loppu), 1500); }
          konfetti();
          t.dispatchEvent(new CustomEvent('passo:tulos', { bubbles: true, detail: { tulos: 'oikein' } }));
        }
      });
      return rivi;
    });
    if (loppu) loppu.hidden = true;
    t.prepend(el('h4', { class: 'tk-otsikko', lang: kohdeLang() }, t.dataset.otsikko || ''), palstat, laskuri);
    if (loppu) t.append(loppu);
    paivita();
    return rivit;
  }
  // ==== k04: komponenttien funktiot (lisää tämän rivin perään) ====

  const rekisteroi = () => window.Kuvitus && window.Kuvitus.rekisteroi && window.Kuvitus.rekisteroi((juuri, o, apu) => {
    $$('.metro[data-dialogi]', juuri).forEach(metro);
    $$('.kuitti', juuri).forEach(kuitti);
    $$('.cardapio', juuri).forEach(cardapio);
    $$('.sukupuu', juuri).forEach(sukupuu);
    $$('.chat', juuri).forEach(c => chat(c, o, apu));
    $$('.saapuva[data-dialogi]', juuri).forEach(s => saapuva(s, o));
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
    // ==== t06: rekisteröinti ====
    $$('.galleria', juuri).forEach(g => galleria(g, o, apu));
    $$('.lainausautomaatti', juuri).forEach(l => lainausautomaatti(l, o, apu));
    // ==== t07: rekisteröinti ====
    $$('.arvaa-ammatti', juuri).forEach(arvaaAmmatti);
    // ==== t08: rekisteröinti ====
    $$('.varityskirja', juuri).forEach(v => varityskirja(v, o, apu));
    // ==== t09: rekisteröinti ====
    $$('.tv', juuri).forEach(tvKielet);
    // ==== t10: rekisteröinti ====
    // ==== k02: rekisteröinti ====
    // ==== t11: rekisteröinti ====
    $$('.salakieli', juuri).forEach(s => salakieli(s, o, apu));
    // ==== t12: rekisteröinti ====
    // ==== t13: rekisteröinti ====
    $$('.aikajana', juuri).forEach(aikajanaKielet);
    // ==== t14: rekisteröinti ====
    $$('.kartta[data-akku]', juuri).forEach(karttaAkku);
    // ==== t15: rekisteröinti ====
    $$('.tehtavalista', juuri).forEach(tehtavalistaKielet);
    $$('.joulukalenteri', juuri).forEach(j => joulukalenteri(j, o, apu));
    // ==== k03: rekisteröinti ====
    // ==== t16: rekisteröinti ====
    $$('.vastaaja', juuri).forEach(vastaajaKielet);
    // ==== t17: rekisteröinti ====
    // ==== t18: rekisteröinti ====
    // ==== t19: rekisteröinti ====
    $$('.postikortti', juuri).forEach(postikorttiKielet);
    $$('.bingo', juuri).forEach(b => bingo(b, o, apu));
    // ==== t20: rekisteröinti ====
    $$('.albumi', juuri).forEach(albumiKielet);
    $$('.tulkkaus', juuri).forEach(t => tulkkaus(t, o, apu));
    // ==== k04: rekisteröinti ====
  });
  rekisteroi();
  window.Komponentit = { T };
})();
