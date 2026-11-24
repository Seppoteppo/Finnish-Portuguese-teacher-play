/* Tottakain oma kopio Passon tiedostosta assets/asettelu.js (23.10.2026, AV-063; omistaja jaetuista tiedostoista: ”There shouldnt be.”).
   Passo käyttää edelleen omaa alkuperäistään; muutokset tähän eivät näy Passossa eivätkä Passon muutokset täällä. */
/* Uusi asettelu: oletus 16.10.2026 alkaen (käyttäjän päätös); vanha asettelu valittavissa yläpalkista.
   Valinta yläpalkin napista, muistetaan selaimessa. Moduuli muokkaa valmiiksi piirrettyä sivua yhtenäisten sääntöjen mukaan:
   1. Sanalista (vähintään 4 sanaa tai lyhyttä ilmausta, enintään 4 sanaa kukin) = taulukko: ▶ | kohdekieli | (suku) | lähdekieli.
      Koskee teemasanastoja ja esimerkkiruudukkoja, joissa on vain lyhyitä ilmauksia.
   2. Esimerkkilauseet = leveät rivit (ei kapeita sarakkeita).
   3. Ääntämisesimerkit ilman käännöstä = tiivis rivi.
   4. Taivutus- ja vertailutaulukoissa otsikkorivi; jokaisella kohdekielisellä rivillä ▶.
   5. Neljä huomiolaatikkoa kiinteällä nimellä: Sääntö, Muista, Ansa, Kulttuuri.
   Käyttöliittymän tekstit taulukossa T. Ohjelma ei oleta kieliä: kohdekieli tunnistetaan lang-määreestä ja .w/.pt-luokista.
   Kurssikohtaiset asetukset Kurssi.asettelu (Tottakai, käyttäjä 17.10.2026): { tekstit, nappi: false = aina päällä ilman
   yläpalkin nappia, kohdesolu: 'fi' = taivutustaulukon ▶ ensimmäiseen soluun, jossa on suomea (.fi), ei viimeiseen;
   ohitaLaatikot: valitsin laatikoille, joilla on jo oma otsake (esim. .na-rua) }. */
(function () {
  'use strict';
  const K = window.Kurssi;
  const AVAIN = 'passo-a-passo-asettelu';
  const A = K.asettelu || {};
  const T = {
    nappi: 'Uusi asettelu',
    kohde: 'Portugali',
    lahde: 'Suomi',
    suku: 'Suku',
    kuuntele: 'Kuuntele',
    laatikot: { saanto: 'Sääntö', muista: 'Muista', huomio: 'Ansa', kulttuuri: 'Kulttuuri' }
  };
  Object.assign(T, A.tekstit || {});
  const MAKS_SANAT = 4;   // sanalistan ilmaus on enintään näin monta sanaa
  const MIN_RIVIT = 4;    // lyhyempi luettelo saa jäädä tekstin lomaan

  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const el = (tag, attrs, ...lapset) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) if (v !== null && v !== undefined) e.setAttribute(k, v);
    for (const l of lapset) if (l !== null && l !== undefined) e.append(l);
    return e;
  };
  // Oletus on uusi asettelu (käyttäjän päätös 16.10.2026); vanhan saa takaisin yläpalkin napista.
  let paalla = true;
  if (A.nappi !== false) try { paalla = localStorage.getItem(AVAIN) !== 'nykyinen'; } catch (e) { /* oletus: uusi */ }

  const sanoja = t => t.trim().split(/\s+/).filter(Boolean).length;
  const SARAKKEET = { [T.kohde]: 'kohdesolu', [T.lahde]: 'lahdesolu' };
  const taulu = (otsikot, luokka) => {
    const t = el('table', { class: 'yhten-taulu ' + (luokka || '') });
    const tr = el('tr');
    otsikot.forEach(o => tr.append(el('th', { scope: 'col', class: SARAKKEET[o] || null }, o)));
    t.append(el('thead', {}, tr), el('tbody'));
    return t;
  };
  /* Toistonappi taulukon soluun. Käyttää sivun omaa nappia (K.ohjain), jos se on saatavilla. */
  function nappi(teksti) {
    if (K.ohjain) return K.ohjain(() => [{ teksti, tyyppi: 'kertoja', el: null }], { aina: true, nimi: `${T.kuuntele}: ${teksti}` });
    const b = el('button', { type: 'button', class: 'soita', 'aria-label': T.kuuntele }, '▶');
    b.addEventListener('click', () => window.Aani.soita([{ teksti, tyyppi: 'kertoja', el: null }]));
    return b;
  }

  /* 1. Teemasanasto: luettelon rivit taulukoksi (solut siirretään sellaisinaan, joten kuplat ja napit toimivat). */
  function teemat(juuri) {
    $$('.teema-lista', juuri).forEach(lista => {
      const t = taulu([T.kohde, T.lahde], 'sanataulu');
      const tb = t.tBodies[0];
      $$(':scope > li', lista).forEach(li => {
        const tr = el('tr');
        // ▶ ja sukumerkki ensimmäiseen soluun, jotta taulukon sarakkeet noudattavat neljännesruudukkoa.
        tr.append(el('td', { class: 'kohdesolu' }, li.querySelector('.ohj'), li.querySelector('.w'), li.querySelector('.suku') || ''),
          el('td', { class: 'lahdesolu' }, li.querySelector('.teema-fi') || ''));
        tb.append(tr);
      });
      lista.replaceWith(el('div', { class: 'vieritys' }, t));
    });
  }

  /* 1–3. Esimerkkiruudukot: lyhyet ilmaukset taulukoksi, ilman käännöstä tiiviiksi riviksi, lauseet leveiksi riveiksi. */
  function esimerkit(juuri) {
    $$('ul.esim', juuri).forEach(ul => {
      const rivit = $$(':scope > li.s', ul);
      if (!rivit.length) return;
      const lyhyet = rivit.every(li => sanoja((li.querySelector('.lause') || li).textContent) <= MAKS_SANAT);
      const kaannokset = rivit.some(li => li.querySelector('.kaannos'));
      if (lyhyet && !kaannokset) { ul.classList.add('esim-sirut'); return; }
      if (!lyhyet || rivit.length < MIN_RIVIT) { ul.classList.add('esim-lauseet'); return; }
      const t = taulu([T.kohde, T.lahde], 'sanataulu');
      const tb = t.tBodies[0];
      // li.s siirretään soluun sellaisenaan (ei rakenneta uudelleen): kuplat, korostus ja ”Koko sivu” osuvat samaan
      // solmuun; .kaannos-solmu siirtyy käännössoluun, jolloin käännöskytkin (td .kaannos) toimii (A6-18).
      rivit.forEach(li => {
        const tr = el('tr', { class: 's-rivi' });
        const kaannos = li.querySelector('.kaannos');
        tr.append(el('td', { class: 'kohdesolu' }, li), el('td', { class: 'lahdesolu' }, kaannos));
        tb.append(tr);
      });
      ul.replaceWith(el('div', { class: 'vieritys' }, t));
    });
  }

  /* 4. Taivutustaulukot: otsikkorivi ja ▶. Käytäntö (CLAUDE.md): kohdekieli on viimeisessä sarakkeessa.
     Ensimmäinen rivi on otsikko, jos sen viimeinen solu ei ole sanastossa (esim. ”portugali (Brasilia)”). */
  const sanastossa = teksti => {
    const sana = (teksti || '').toLowerCase().trim().split(/[\s,/]+/)[0];
    return !!(sana && K.haeSana && K.haeSana(sana));
  };
  function taivutukset(juuri) {
    $$('table.taivutus', juuri).forEach(t => {
      const rivit = $$('tr', t);
      if (!rivit.length) return;
      const eka = rivit[0];
      const viimeinen = tr => tr.children[tr.children.length - 1];
      const otsakeRivi = !!eka.querySelector('th') || !sanastossa(viimeinen(eka).textContent);
      const otsikot = otsakeRivi ? [...eka.children].map(c => c.textContent)
        : eka.children.length === 2 ? [T.lahde, T.kohde] : null;
      // Tottakai (kohdesolu 'fi'): valmis th-otsikkorivi siirretään sellaisenaan (lang-merkinnät ja kuplat säilyvät).
      // Passo: otsikkorivi rakennetaan uudelleen kuten ennen (scope=col).
      const sailyta = A.kohdesolu === 'fi' && eka.querySelector('th');
      if (sailyta && eka.parentNode.tagName !== 'THEAD') (t.tHead || t.createTHead()).append(eka);
      else if (!sailyta && otsakeRivi) eka.remove();
      if (otsikot && !sailyta) {
        const tr = el('tr');
        otsikot.forEach(o => tr.append(el('th', { scope: 'col' }, o)));
        (t.tHead || t.createTHead()).append(tr);
      }
      // ▶ kohdekieliseen soluun (ei omaa saraketta), jotta neljännesruudukko säilyy. kohdesolu 'fi': ensimmäinen
      // solu, jossa on suomea; ▶ lukee vain sen suomenkielisen osan.
      $$('tr', t).forEach(tr => {
        if (tr.parentNode.tagName === 'THEAD') return;
        if (A.kohdesolu === 'fi') {
          const fi = tr.querySelector('td .fi:not(.pala), td [lang^="fi"]:not(.pala)');
          const solu = fi && fi.closest('td');
          if (solu && !solu.querySelector('.ohj')) solu.prepend(nappi($$('.fi:not(.pala), [lang^="fi"]:not(.pala)', solu).map(x => x.textContent.trim()).join(' ')));
          return;
        }
        const kohde = viimeinen(tr);
        if (kohde && kohde.textContent.trim()) kohde.prepend(nappi(kohde.textContent.trim()));
      });
      t.classList.add('yhten-taulu');
    });
    // Hakuosan taulukot: ▶ ensimmäiseen (kohdekieliseen) soluun.
    $$('table.hakutaulu', juuri).forEach(t => {
      $$('tbody td.pt-solu', t).forEach(td => {
        const teksti = $$('.pt, .w', td).map(x => x.textContent).join(' ').trim() || td.textContent.trim();
        if (teksti) td.prepend(nappi(teksti.split(/\s+·\s+|,\s+/)[0]));
      });
      t.classList.add('yhten-taulu');
    });
  }

  /* 5. Huomiolaatikot: nimi näkyviin. */
  function laatikot(juuri) {
    for (const [luokka, nimi] of Object.entries(T.laatikot)) {
      $$('.' + luokka, juuri).forEach(b => {
        if (b.querySelector(':scope > .laatikko-nimi') || (A.ohitaLaatikot && b.matches(A.ohitaLaatikot))) return;
        b.classList.add('laatikko');
        // Tekstin oma ”Muista:”-alku jää pois, kun nimi on jo laatikon yläreunassa.
        const alku = b.querySelector(':scope > p:first-of-type > b:first-child, :scope > p:first-of-type > strong:first-child');
        if (alku && alku.textContent.replace(/:\s*$/, '').trim().toLowerCase() === nimi.toLowerCase()) {
          const seur = alku.nextSibling;
          if (seur && seur.nodeType === 3) seur.nodeValue = seur.nodeValue.replace(/^\s+/, '');
          alku.remove();
        }
        b.prepend(el('span', { class: 'laatikko-nimi laatikko-' + luokka }, nimi));
      });
    }
  }

  function kayta(juuri) {
    document.documentElement.toggleAttribute('data-asettelu-uusi', paalla);
    if (!paalla || !juuri) return;
    teemat(juuri);
    esimerkit(juuri);
    taivutukset(juuri);
    laatikot(juuri);
  }

  function nappiYlapalkkiin() {
    const paikka = document.querySelector('.toiminnot');
    if (A.nappi === false || !paikka || document.getElementById('asettelu-nappi')) return;
    const b = el('button', { class: 'tyonappi', id: 'asettelu-nappi', type: 'button', 'aria-pressed': String(paalla), title: 'Vaihda nykyisen ja uuden asettelun välillä' }, T.nappi);
    b.addEventListener('click', () => {
      paalla = !paalla;
      try { localStorage.setItem(AVAIN, paalla ? 'uusi' : 'nykyinen'); } catch (e) { /* ohita */ }
      b.setAttribute('aria-pressed', String(paalla));
      const y = window.scrollY;
      window.dispatchEvent(new HashChangeEvent('hashchange'));   // piirtää sivun uudelleen
      window.scrollTo(0, y);
    });
    paikka.prepend(b);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', nappiYlapalkkiin);
  else nappiYlapalkkiin();
  window.Asettelu = { kayta, T };
})();
