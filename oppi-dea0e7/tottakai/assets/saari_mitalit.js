/* Tottakai: oppituntien mitalit ja saaren saavutukset (Conquistas). Siirretty sellaisenaan assets/saari.js:stä (AV-071
   kohta 6, 23.10.2026): sama koodi, samat tallennusavaimet (tottakai-mitalit, saaren tila) ja samat window.Saari-nimet.
   Ladataan ennen assets/saari.js:ää (index.html). saari.js kutsuu SaariMitalit(apu) samassa kohdassa, jossa koodi ennen
   oli, joten tapahtumakuuntelijat (tottakai:mitali, tottakai:tulos) rekisteröityvät samassa järjestyksessä kuin ennen.
   apu = saaren tilan apurit: { K, lue, kirjoita, tila, tallenna, lisaa, ilmoita, voitettu, TESTI_MITALIT, TAVARAT, pue, havittu }.
   Palauttaa: { MITALIT, oppitunti, mitaliTila, mitaliTieto, tarkistaMitali, annaLahjat, seuraaTehtavia, yksikonTunniste, edistysRivi, mitaliRivi, SAAVUTUKSET, saavutus, tarkistaSaavutukset, laske, saavutusLista }. */
window.SaariMitalit = function (apu) {
  'use strict';
  const { K, lue, kirjoita, tila, tallenna, lisaa, ilmoita, voitettu, TESTI_MITALIT, TAVARAT, pue, havittu } = apu;

  /* ---------- oppitunnin mitalit (omistaja 17.10.2026) ----------
     Oppitunti on valmis, kun osien A ja B kaikki arvioitavat tehtävät on tehty (tai ilman ääntä ohitettu, ”Pular”) ja
     quiz on tehty ainakin kerran. Mitali ensimmäisen yrityksen osuudesta: pronssi ≥ 25 % 50 🍊, hopea ≥ 75 % 75 🍊,
     kulta ≥ 90 % 100 🍊. Kivi (pedra 🪨) on valmiin oppitunnin merkki, ei mitali (omistaja 23.10.2026: ”It is a rock.
     Then bronze silver gold” … ”Its a rock. You just get it. For trying.” … ”The rock does not unlock medal stuff. It is a
     medal like object that is not a medal. It is a marker mostly that you have finished the lesson”): ei mandariineja,
     ei avaa kauppaa, lahjoja eikä saavutuksia; ne vaativat yhä vähintään pronssin (onMitali). Tehtävän uusiminen voi nostaa mitalia: maksetaan vain erotus. Quiz ei vaikuta mitaliin.
     Arvioitava tehtävä = sisin .valinta, .aukot, .sanelu, .nappaimisto tai .tehtava, jossa .yhdista (käännös- ja
     keskustelutehtävät ilman tulosta eivät ole mukana). Tallennus tottakai-mitalit: { tNN: { osat: { a: { n, u, ohi } },
     mitali, maksettu } }; u ja ohi ovat olioita yksikön tunnisteen mukaan (yksikonTunniste; ennen 19.10.2026 indeksin
     mukaan, seuraaTehtavia siirtää vanhan muodon kerran). */
  const MITALIT = [{ id: 'ouro', nimi: 'ouro', raja: 0.9, arvo: 100, ikoni: '🥇' }, { id: 'prata', nimi: 'prata', raja: 0.75, arvo: 75, ikoni: '🥈' },
    { id: 'bronze', nimi: 'bronze', raja: 0.25, arvo: 50, ikoni: '🥉' }, { id: 'pedra', nimi: 'pedra', raja: 0, arvo: 0, ikoni: '🪨', kivi: true }];
  // Oikea mitali (pronssi, hopea tai kulta); kivi ei kelpaa mihinkään, mikä vaatii mitalin.
  const onMitali = id => !!id && id !== 'pedra';
  const YKSIKKO = '.valinta, .aukot, .sanelu, .nappaimisto, .tehtava';
  const lueMitalit = () => lue('mitalit', {}) || {};
  const oppitunti = id => (K.oppitunnit || []).find(o => o.id === id) || null;
  const yksikot = juuri => [...juuri.querySelectorAll(YKSIKKO)].filter(e => !e.querySelector(YKSIKKO) &&
    !e.closest('.pomo, #oppitunnin-sanasto, .visa-paikka, .ydin-laatikko') && (!e.matches('.tehtava') || e.querySelector('.yhdista, .yhd-kehys')));
  /* Yksikön tunniste (A6-06; docs/PELILLISTAMINEN.md ”Yksikön tunniste”): data-yksikko, jos sisältö antaa sen, muuten
     'h' + kysymystekstin 32-bittinen FNV-1a-tiiviste kantaluvussa 36. Tulos pysyy tehtävällään, kun tehtäviä lisätään,
     poistetaan tai järjestetään uudelleen. Teksti lajin mukaan: .valinta = .kysymys + data-oikea + data-kuuntele (sama
     kysymys ”Qual palavra?” toistuu kuuntelutehtävissä), .sanelu = data-puhu, .aukot = aukkojen data-oikea (app.js
     siirtää sen .aukko-kaari-kehykseen), yhdistä = parit lajiteltuina (li[data-pari] tai .yhd-kehys[data-parit]),
     .nappaimisto = data-numero. Indeksi i on varalla vain, kun tekstiä ei ole ('i' + i). */
  function fnv1a(s) {
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return (h >>> 0).toString(36);
  }
  const siisti = t => String(t || '').replace(/\s+/g, ' ').trim();
  function yksikonTeksti(el) {
    const d = el.dataset || {};
    if (el.matches('.valinta')) {
      const k = el.querySelector('.kysymys');
      // ▶-painike (.ohj) ja palaute lisätään kysymykseen sivulla: ne eivät kuulu tekstiin.
      const kysymys = k ? [...k.childNodes].filter(n => !(n.nodeType === 1 && n.matches('.ohj, button, .palaute'))).map(n => n.textContent).join('') : '';
      return [siisti(kysymys), siisti(d.oikea), siisti(d.kuuntele)].filter(Boolean).join('|');
    }
    if (el.matches('.sanelu')) return siisti(d.puhu);
    if (el.matches('.nappaimisto')) return siisti(d.numero);
    if (el.matches('.aukot')) return [...el.querySelectorAll('.aukko[data-oikea], .aukko-kaari[data-oikea]')].map(a => siisti(a.dataset.oikea)).join('|');
    const parit = [...el.querySelectorAll('.yhdista li[data-pari]')].map(li => li.dataset.pari);
    if (!parit.length) { const kehys = el.querySelector('.yhd-kehys[data-parit]'); if (kehys) parit.push(...kehys.dataset.parit.split('|')); }
    return parit.map(siisti).filter(Boolean).sort().join('|');
  }
  function yksikonTunniste(el, i) {
    if (!el || !el.matches) return 'i' + (i || 0);
    if (el.dataset && el.dataset.yksikko) return el.dataset.yksikko;
    const t = yksikonTeksti(el);
    return t ? 'h' + fnv1a(t) : 'i' + (i || 0);
  }
  // Osan yksiköiden tunnisteet DOM-järjestyksessä; sama teksti toiseen kertaan saa jälkiliitteen -2, -3 …
  function tunnisteet(lista) {
    const nahty = new Map();
    return lista.map((y, i) => {
      const t = yksikonTunniste(y, i);
      const n = (nahty.get(t) || 0) + 1;
      nahty.set(t, n);
      return n > 1 ? `${t}-${n}` : t;
    });
  }
  // Ajustesin rengaspuskuri (ajustes.js kuuntelee window-tason error-tapahtumaa; muuta kirjoitustietä siihen ei ole).
  const lokiin = teksti => { try { if (window.Ajustes) window.dispatchEvent(new ErrorEvent('error', { message: teksti, filename: 'assets/saari.js' })); } catch (e) { /* ohita */ } };
  function mitaliTila(oId) {
    const o = oppitunti(oId);
    const osat = o ? (o.osat && o.osat.length ? o.osat : [{ id: 'a' }]).map(x => x.id) : [];
    const r = lueMitalit()[oId] || {};
    let tehty = 0, yht = 0, summa = 0, nahty = true;
    for (const id of osat) {
      const p = (r.osat || {})[id];
      if (!p || p.n === undefined) { nahty = false; continue; }
      // u ja ohi tunnisteen mukaan (vanha indeksimuoto luetaan samoin: arvot ovat samat, avaimet siirtyvät avattaessa).
      const u = p.u || {}, ohi = p.ohi || {};
      yht += Math.max(0, p.n - Object.keys(ohi).filter(k => ohi[k]).length);
      for (const [k, v] of Object.entries(u)) { if (ohi[k]) continue; tehty++; summa += v; }
    }
    const visa = (lue('visa', {}) || {})[oId] !== undefined;
    const testi = TESTI_MITALIT.has(oId);
    return { valmis: testi || (nahty && tehty >= yht && visa), tehty, yht, visa, nahty, pros: yht ? Math.min(1, summa / yht) : 1,
      mitali: r.mitali || (testi ? 'bronze' : null), maksettu: r.maksettu || 0 };
  }
  const mitaliTieto = id => MITALIT.find(m => m.id === id) || null;
  function tarkistaMitali(oId) {
    const s = mitaliTila(oId);
    const m = s.valmis && !TESTI_MITALIT.has(oId) ? MITALIT.find(x => s.pros >= x.raja) : null;
    if (m && m.kivi && !s.mitali) {   // valmis alle 25 %:lla: kivi merkiksi, ei mandariineja
      const M = lueMitalit();
      const r = M[oId] = M[oId] || {};
      r.mitali = 'pedra'; r.maksettu = 0; r.aika = Date.now();
      kirjoita('mitalit', M);
      ilmoita('🪨 É uma pedra. Você simplesmente ganha. Por tentar.');   // omistajan repliikki käännettynä
      try { document.dispatchEvent(new CustomEvent('tottakai:mitali', { detail: { oppitunti: oId, mitali: 'pedra' } })); } catch (e) { /* ohita */ }
    } else if (m && !m.kivi && m.arvo > s.maksettu) {
      const M = lueMitalit();
      const r = M[oId] = M[oId] || {};
      r.mitali = m.id; r.maksettu = m.arvo; r.aika = Date.now();
      kirjoita('mitalit', M);
      const o = oppitunti(oId);
      lisaa(m.arvo - s.maksettu, 'mitali', `${m.ikoni} Medalha de ${m.nimi}: ${o ? o.jakso : oId}` + (s.maksettu ? ' (a diferença)' : ''));
      annaLahjat();
      try { document.dispatchEvent(new CustomEvent('tottakai:mitali', { detail: { oppitunti: oId, mitali: m.id } })); } catch (e) { /* ohita */ }
    }
    paivitaRivit();   // edistysrivit (T15.17): tehdyt ja quizin paras näkyviin heti, myös ilman uutta mitalia
  }
  /* Lahjat (ilmaiseksi saarelle, kaksikko esittelee seuraavalla käynnillä): lahja = { pomo } (pomovoitto, AV-029), { mitali, taso? } (oppitunnin mitali;
     taso 'ouro' = vain kulta), { ouro: n } (n kultamitalia kaikkiaan) tai { saavutus: id } (saavutus saatu). Kutsutaan
     mitalin ja saavutuksen jälkeen; puettava lahja puetaan heti. */
  const kultia = () => (K.oppitunnit || []).filter(o => mitaliTila(o.id).mitali === 'ouro').length;
  function lahjaEhto(l, t) {
    if (l.pomo) return voitettu(l.pomo);   // AV-029: pomon lasit
    if (l.saavutus) return !!(t.conquistas || {})[l.saavutus];
    if (l.ouro) return kultia() >= l.ouro;
    if (l.mitali) { const m = mitaliTila(l.mitali).mitali; return l.taso ? m === l.taso : onMitali(m); }
    return false;
  }
  function annaLahjat() {
    const t = tila();
    let uusi = false;
    for (const x of TAVARAT) if (x.lahja && !t.omat[x.id] && lahjaEhto(x.lahja, t)) {
      t.omat[x.id] = 'lahja'; t.uusiLahja = x.id; uusi = true;
      if (x.veste) pue(t, x, true);
      ilmoita(`${x.kat === 'trofeu' || x.lahja.taso || x.lahja.ouro ? '🥇' : '🎁'} Presente na ilha: ${x.nimi}!`);
    }
    if (uusi) tallenna(t);
  }
  /* Seuraa oppitunnin osan tehtäviä (app.js naytaOppitunti): ensimmäinen tulos tällä käynnillä, paras säilyy. */
  function seuraaTehtavia(juuri, oId, osaId) {
    if (!juuri) return;
    const lista = yksikot(juuri);
    const ids = tunnisteet(lista);
    const M = lueMitalit();
    const r = M[oId] = M[oId] || {};
    r.osat = r.osat || {};
    const p = r.osat[osaId] = r.osat[osaId] || { u: {}, ohi: {} };
    p.u = p.u || {}; p.ohi = p.ohi || {};
    // Siirto vanhasta muodosta (ennen 19.10.2026 avain oli tehtävän indeksi): indeksi → tunniste nykyisessä
    // DOM-järjestyksessä, kerran ja ennen uusia tuloksia. Yksi rivi Ajustesin puskuriin.
    const vanha = o => Object.keys(o).length > 0 && Object.keys(o).every(k => /^\d+$/.test(k));
    if (vanha(p.u) || vanha(p.ohi)) {
      let ilman = 0;
      const siirra = o => { const uusi = {}; for (const [k, v] of Object.entries(o)) { const t = /^\d+$/.test(k) ? ids[+k] : k; if (t) uusi[t] = v; else ilman++; } return uusi; };
      p.u = siirra(p.u); p.ohi = siirra(p.ohi);
      lokiin(`Tottakai: mitalit ${oId}/${osaId}: indeksit siirretty tunnisteisiin (${Object.keys(p.u).length} tulosta` + (ilman ? `, ${ilman} ilman tehtävää` : '') + ')');
    }
    // Poistetun tai muuttuneen tehtävän tulos pois, jotta tehdyt ja n täsmäävät (sama kuin ennen: indeksi ≥ n ei näkynyt).
    for (const o of [p.u, p.ohi]) for (const k of Object.keys(o)) if (!ids.includes(k)) delete o[k];
    p.n = lista.length;
    kirjoita('mitalit', M);
    paivitaRivit();   // ensimmäinen avaus: otsakkeen edistysrivi näkyviin (D10)
    const nahty = new WeakSet();
    const tallennaYksikko = (y, f) => {
      const i = lista.indexOf(y);
      if (i < 0) return;
      const M2 = lueMitalit();
      const r2 = M2[oId] = M2[oId] || {};
      r2.osat = r2.osat || {};
      const q = r2.osat[osaId] = r2.osat[osaId] || { n: lista.length, u: {}, ohi: {} };
      q.u = q.u || {}; q.ohi = q.ohi || {};
      f(q, ids[i]);
      kirjoita('mitalit', M2);
      tarkistaMitali(oId);   // päivittää myös edistysrivit
    };
    juuri.addEventListener('passo:tulos', e => {
      const y = e.target.closest(YKSIKKO);
      if (!y || nahty.has(y)) return;
      nahty.add(y);
      const d = e.detail || {};
      const arvo = d.tulos === 'oikein' ? 1 : d.tulos === 'osittain' && d.yhteensa ? (d.oikein || 0) / d.yhteensa : 0;
      tallennaYksikko(y, (q, t) => { q.u[t] = Math.max(q.u[t] || 0, arvo); });
    });
    juuri.addEventListener('click', e => {
      const b = e.target.closest('.pular-nappi');
      if (b) tallennaYksikko(b.closest(YKSIKKO), (q, t) => { q.ohi[t] = 1; });
    });
  }
  /* Edistysrivi (A6-33, T15.17): yksi esitys kolmessa paikassa – osan loppu, oppitunnin otsake (app.js naytaOppitunti) ja
     etusivun luettelo (naytaEtusivu): ”✓ n/m · melhor p % · <mitalin ehto tai saatu mitali>”. n/m = tehdyt ja kaikki
     arvioitavat tehtävät avatuista osista (mitaliTila), p = quizin paras tulos (tottakai-visa) tai –. ”partes A e B” vain,
     kun oppitunnissa on kaksi osaa. Rivit päivittyvät tuloksen, quizin ja mitalin jälkeen (tarkistaMitali → paivitaRivit). */
  const rivit2 = new Set();
  function edistysTeksti(oId) {
    const s = mitaliTila(oId);
    const o = oppitunti(oId);
    const osia = o && o.osat && o.osat.length ? o.osat.length : 1;
    const paras = (lue('visa', {}) || {})[oId];
    const m = mitaliTieto(s.mitali);
    const pct = Math.round(100 * s.pros);
    let ehto;
    if (m && m.kivi) {
      ehto = '🪨 É uma pedra. Você simplesmente ganha. Por tentar.';   // omistaja 23.10.2026: ”Its a rock. You just get it. For trying.”
    } else if (m) {
      const seur = MITALIT[MITALIT.indexOf(m) - 1];
      ehto = `${m.ikoni} Medalha de ${m.nimi} nesta lição (${pct} % de primeira).` +
        (seur ? ` Refaça exercícios para chegar a ${seur.nimi} (${Math.round(seur.raja * 100)} %): você recebe só a diferença.` : ' Ouro! O Capivara vai lembrar disso para sempre. Ou até amanhã.');
    } else if (s.valmis) {
      ehto = `Lição completa (${pct} % de primeira).`;   // ei pitäisi tapahtua: valmis antaa aina vähintään kiven
    } else {
      const osat = osia === 2 ? 'das partes A e B' : osia > 2 ? 'de todas as partes' : 'da lição';
      const avaa = s.nahty ? '' : osia > 1 ? ' (abra todas as partes)' : ' (abra a lição)';
      ehto = `Medalha da lição: faça todos os exercícios ${osat}${avaa} e o quiz ${s.visa ? '✓' : '(ainda não)'}. ` +
        'Bronze 50 🍊 (25 % de primeira), prata 75 🍊 (75 %), ouro 100 🍊 (90 %). Com menos, você ganha uma pedra 🪨.';
    }
    return `✓ ${s.tehty}/${s.yht} · melhor ${typeof paras === 'number' ? paras : '–'} % · ${ehto}`;
  }
  function edistysRivi(oId) {
    const p = document.createElement('p');
    p.className = 'mitali-rivi';
    p.dataset.oppitunti = oId;
    p.setAttribute('aria-live', 'polite');
    rivit2.add(p);
    paivitaRivi(p);
    return p;
  }
  const mitaliRivi = oId => edistysRivi(oId);   // vanha nimi (osan loppu ennen T15.17)
  // Avaamaton oppitunti (omistaja 20.10.2026, D10: ”dont show anything until opened, then the checkmark”): rivi piilossa, kunnes
  // jokin osa on avattu (seuraaTehtavia kirjasi sen) tai quiz tehty.
  const avattu = oId => Object.values((lueMitalit()[oId] || {}).osat || {}).some(x => x && x.n !== undefined) || (lue('visa', {}) || {})[oId] !== undefined;
  function paivitaRivi(p) { const auki = avattu(p.dataset.oppitunti); p.hidden = !auki; p.textContent = auki ? edistysTeksti(p.dataset.oppitunti) : ''; }
  function paivitaRivit() { for (const p of [...rivit2]) { if (!p.isConnected) rivit2.delete(p); else paivitaRivi(p); } }
  document.addEventListener('tottakai:mitali', paivitaRivit);

  /* ---------- saavutukset (Conquistas, omistaja 18.10.2026) ----------
     Näkyvät saarelta: napauta majaa (tai Havanna-baaria, kun se on). Tila saaren tilassa: t.conquistas { id: aika },
     laskurit t.contadores. Avoimet näkyvät aina (saavuttamattomat harmaina), salaiset ”???” kunnes saatu, tulevat
     (tarinan tapahtumat oppitunneilta, joita ei vielä ole) näkyvät harmaina ”em breve”. ehto(t) tarkistetaan
     (tarkistaSaavutukset), muut annetaan tapahtumasta (saavutus(id)). Kuvakkeet: TODO, piirretään myöhemmin. */
  // T15.9 (A6-09): oppituntien järjestys vain assets/profiili.js:n jarjestys-listasta; valilta('t06', 't10') = jaksot t06…t10.
  const jarjestys = () => (K.profiili && K.profiili.jarjestys) || (K.oppitunnit || []).map(o => o.id);
  const valilta = (a, b) => { const j = jarjestys(), i = j.indexOf(a), k = j.indexOf(b); return i < 0 || k < i ? [] : j.slice(i, k + 1).filter(id => /^t\d\d$/.test(id)); };
  const lukuOppitunnit = valilta('t01', 't05');
  const mitaliOn = (id, m) => { const s = mitaliTila(id); return m ? s.mitali === m : onMitali(s.mitali); };
  const ostettavat = () => TAVARAT.filter(x => x.hinta && !x.palkinto && !x.lahja);
  const ostettuja = t => ostettavat().filter(x => t.omat[x.id] && t.omat[x.id] !== 'lahja').length;
  const kaikkiPelit = () => { try { return (K.oppitunnit || []).flatMap(o => (window.Pelit ? window.Pelit.oppitunnin(o.id) : []).map(p => p.id)); } catch (e) { return []; } };
  const putkiNyt = () => { try { return window.Tulokset && window.Tulokset.putki ? Number(window.Tulokset.putki()) || 0 : 0; } catch (e) { return 0; } };
  const SAAVUTUKSET = [
    { id: 'licao-0', nimi: 'Bem-vinda à ilha', kuvaus: 'A lição 0 está concluída e a dupla ganhou a cabana.', miten: 'Termine a lição 0 (exercícios e quiz).', ehto: () => mitaliOn('t00') },
    { id: 'licoes-1-5', nimi: 'Primeiro bloco', kuvaus: 'Lições 1 a 5 concluídas.', miten: 'Ganhe uma medalha em cada lição de 1 a 5.', ehto: () => lukuOppitunnit.every(id => mitaliOn(id)) },
    { id: 'licoes-6-10', nimi: 'Segundo bloco', kuvaus: 'Lições 6 a 10 concluídas: de Kuusamo ao aeroporto.', miten: 'Ganhe uma medalha em cada lição de 6 a 10.', ehto: () => valilta('t06', 't10').every(id => mitaliOn(id)) },
    { id: 'licoes-11-15', nimi: 'Terceiro bloco', kuvaus: 'Lições 11 a 15 concluídas: do Mercado Central à véspera de Natal.', miten: 'Ganhe uma medalha em cada lição de 11 a 15.', ehto: () => valilta('t11', 't15').every(id => mitaliOn(id)) },
    { id: 'licoes-16-20', nimi: 'Quarto bloco', kuvaus: 'Lições 16 a 20 concluídas: da festa de rua ao verão na Finlândia.', miten: 'Ganhe uma medalha em cada lição de 16 a 20.', ehto: () => valilta('t16', 't20').every(id => mitaliOn(id)) },
    { id: 'ouro-1', nimi: 'Primeiro ouro', kuvaus: 'Uma lição com 90 % de primeira.', miten: 'Ganhe uma medalha de ouro.', ehto: () => (K.oppitunnit || []).some(o => mitaliOn(o.id, 'ouro')) },
    { id: 'ouro-0-5', nimi: 'Tudo dourado', kuvaus: 'Ouro em todas as lições de 0 a 5.', miten: 'Medalha de ouro nas lições 0 a 5.', ehto: () => valilta('t00', 't05').every(id => mitaliOn(id, 'ouro')) },
    { id: 'ouro-curso', nimi: 'TUDO OURO', kuvaus: 'Ouro em todas as lições do curso. A mandarineira de ouro nasceu na ilha.', miten: 'Medalha de ouro em todas as lições, de 0 a 20.',
      ehto: () => { const ids = jarjestys().filter(id => /^t\d\d$/.test(id)); return ids.length > 0 && ids.every(id => mitaliOn(id, 'ouro')); } },
    { id: 'pomo-k01', nimi: 'Adeus, Partitiivipeto', kuvaus: 'Venceu a luta final da revisão 1.', miten: 'Vença a luta final da revisão 1.', ehto: () => voitettu('k01') },
    { id: 'pomo-k02', nimi: 'Fera da revisão 2', kuvaus: 'Venceu a luta final da revisão 2.', miten: 'Vença a luta final da revisão 2.', ehto: () => voitettu('k02') },
    { id: 'pomo-k03', nimi: 'Fera da revisão 3', kuvaus: 'Venceu a luta final da revisão 3.', miten: 'Vença a luta final da revisão 3.', ehto: () => voitettu('k03') },
    { id: 'pomo-k04', nimi: 'Fera da revisão 4', kuvaus: 'Venceu a luta final da revisão 4. O estádio é seu.', miten: 'Vença a luta final da revisão 4.', ehto: () => voitettu('k04') },
    // AV-077: takaa-ajo ”Fuga no retrovisor” (pomo.js AJOT['ajo-t20']; voitto tottakai-pomo-ajo-t20, tappio tottakai-pomo-havio-ajo-t20).
    { id: 'pomo-ajo-t20', nimi: 'Fuga à moda do Hiisi', kuvaus: 'Fugiu da polícia com o Hiisi até a sauna, dando as ordens certas.', miten: 'Chegue à sauna na perseguição da lição 20 (parte B).', ehto: () => voitettu('ajo-t20') },
    { id: 'compra-1', nimi: 'Primeira compra', kuvaus: 'Comprou a primeira coisa para a ilha.', miten: 'Compre qualquer coisa na lojinha.', ehto: t => ostettuja(t) >= 1 },
    { id: 'compra-10', nimi: 'Ilha arrumada', kuvaus: 'Dez coisas compradas.', miten: 'Tenha 10 coisas compradas ao mesmo tempo.', ehto: t => ostettuja(t) >= 10 },
    { id: 'compra-todas', nimi: 'Lojinha vazia', kuvaus: 'Tudo o que a lojinha vende é seu.', miten: 'Compre todas as coisas da lojinha.', ehto: t => ostettuja(t) === ostettavat().length },
    { id: 'putki-3', nimi: 'Três dias seguidos', kuvaus: 'Estudou 3 dias seguidos.', miten: 'Responda alguma coisa 3 dias seguidos.', ehto: () => putkiNyt() >= 3 },
    { id: 'putki-7', nimi: 'Uma semana', kuvaus: 'Estudou 7 dias seguidos.', miten: 'Responda alguma coisa 7 dias seguidos.', ehto: () => putkiNyt() >= 7 },
    { id: 'putki-30', nimi: 'Um mês', kuvaus: 'Estudou 30 dias seguidos.', miten: 'Responda alguma coisa 30 dias seguidos.', ehto: () => putkiNyt() >= 30 },
    { id: 'hoje-zero', nimi: 'Revisão em dia', kuvaus: 'A lista “Para revisar hoje” ficou vazia.', miten: 'Revise tudo o que aparece em “Hoje”.' },
    { id: 'jogos-todos', nimi: 'Jogou tudo', kuvaus: 'Cada jogo do curso, pelo menos uma vez.', miten: 'Termine uma rodada de cada jogo.', ehto: () => { const p = (K.mandariinit && K.mandariinit.pisteet().pelit) || {}; const k = kaikkiPelit(); return k.length > 0 && k.every(id => (p[id] || {}).kierrokset > 0); } },
    // Tulevat tarinan tapahtumat (oppitunnit, joita ei vielä ole): määritelty, ei vielä saatavissa.
    // Erä 1 (20.10.2026): Habituuri-messut ovat oppitunnin 9 osassa B; ensimmäinen myyty taulu = oppitunnin 9 mitali.
    { id: 'habituuri-1', nimi: 'Primeira exposição', kuvaus: 'A Maia expõe na Habituuri.', miten: 'Leia a feira Habituuri na lição 9 (parte B).', ehto: t => !!t.marcos['osa:t09-b'] },
    { id: 'habituuri-2', nimi: 'Artista que vende', kuvaus: 'O primeiro quadro da Maia vendido.', miten: 'Ganhe a medalha da lição 9.', ehto: () => mitaliOn('t09') },
    { id: 'jay-salvo', nimi: 'Jay resgatado', kuvaus: 'A Maia e os amigos salvaram o Jay.', miten: 'Leia o resgate e a UPA na lição 18 (parte B).', ehto: t => !!t.marcos['osa:t18-b'] },
    { id: 'feira-hippie', nimi: 'Feira Hippie', kuvaus: 'A banca da Maia na feira de Belo Horizonte.', miten: 'Leia a Feira Hippie na lição 12 (parte B).', ehto: t => !!t.marcos['osa:t12-b'] },
    { id: 'verao-finlandia', nimi: 'Verão na Finlândia', kuvaus: 'A família da Maia visita a Finlândia.', miten: 'Leia o verão na Finlândia na lição 20 (parte B).', ehto: t => !!t.marcos['osa:t20-b'] },
    // Salaiset.
    { id: 'havio-k01', nimi: 'Visita indesejada', kuvaus: 'Perdeu para a fera da revisão 1 e o Esra-Arse veio dormir na ilha.', salainen: true, ehto: () => havittu(['k01']) },
    { id: 'havio-k02', nimi: 'Entrevista exclusiva', kuvaus: 'Perdeu para a fera da revisão 2 e o Drug-Teemu chegou com o microfone.', salainen: true, ehto: () => havittu(['k02']) },
    { id: 'havio-k03', nimi: 'Festa que ninguém pediu', kuvaus: 'Perdeu para a fera da revisão 3 e o Party-Boy Lisko trouxe a festa.', salainen: true, ehto: () => havittu(['k03']) },
    { id: 'havio-k04', nimi: 'Os três de uma vez', kuvaus: 'Perdeu para a fera da revisão 4: os três amigos do Jay chegaram juntos.', salainen: true, ehto: () => havittu(['k04']) },
    { id: 'havio-ajo-t20', nimi: 'Poliisi. Taas.', kuvaus: 'A polícia pegou vocês na perseguição da lição 20. O Hiisi nem se surpreendeu.', salainen: true, ehto: () => havittu(['ajo-t20']) },
    { id: 'murilo-bone', nimi: 'Azul combina com você', kuvaus: 'A Maíra usou o boné do Cruzeiro. À força.', salainen: true },
    { id: 'esra-rede', nimi: 'Rede ocupada', kuvaus: 'O Esra-Arse dormindo na rede do Peixe-boi.', salainen: true },
    { id: 'wcplus', nimi: 'Som na ilha', kuvaus: 'O WC+ chegou com o reggae.', salainen: true },
    { id: 'chute-10', nimi: 'Artilheiro', kuvaus: 'Dez chutes no estádio do Cruzeiro.', salainen: true },
    { id: 'flamingo-3', nimi: 'Fotógrafo de flamingo', kuvaus: 'Viu o flamingo nas três poses.', salainen: true },
    { id: 'capivara-20', nimi: 'Memória de capivara', kuvaus: 'Falou com o Capivara 20 vezes. Ele não lembra de nenhuma.', salainen: true },
    { id: 'decorador', nimi: 'Decorador de ilha', kuvaus: 'Mudou as coisas de lugar 10 vezes.', salainen: true },
    { id: 'presente-7', nimi: 'O rio sempre traz', kuvaus: 'Abriu o presente do dia 7 vezes.', salainen: true }
  ];
  const saavutusTieto = id => SAAVUTUKSET.find(x => x.id === id);
  function saavutus(id) {
    const s = saavutusTieto(id);
    const t = tila();
    t.conquistas = t.conquistas || {};
    if (!s || t.conquistas[id]) return false;
    t.conquistas[id] = Date.now();
    tallenna(t);
    ilmoita(`🏆 Conquista: ${s.nimi}`);
    annaLahjat();   // saavutuksen palkinto (TUDO OURO → kultainen mandariinipuu)
    try { document.dispatchEvent(new CustomEvent('tottakai:conquista', { detail: { id } })); } catch (e) { /* ohita */ }
    return true;
  }
  function tarkistaSaavutukset() {
    const t = tila();
    for (const s of SAAVUTUKSET) {
      if (!s.ehto || (t.conquistas || {})[s.id]) continue;
      let ok = false;
      try { ok = !!s.ehto(t); } catch (e) { ok = false; }
      if (ok) saavutus(s.id);
    }
  }
  function laske(nimi, raja, id) {
    const t = tila();
    t.contadores = t.contadores || {};
    t.contadores[nimi] = (t.contadores[nimi] || 0) + 1;
    tallenna(t);
    if (t.contadores[nimi] >= raja) saavutus(id);
  }
  // Hoje-jono tyhjeni: ensimmäinen kerta, kun jonossa on ollut jotain ja nyt ei ole mitään.
  document.addEventListener('tottakai:tulos', () => {
    try {
      const T = window.Tulokset;
      if (!T || !T.jono) return;
      const n = T.jono(1).length, t = tila();
      if (n) { if (!t.oliJono) { t.oliJono = true; tallenna(t); } }
      else if (t.oliJono) saavutus('hoje-zero');
    } catch (e) { /* ohita */ }
    tarkistaSaavutukset();
  });
  document.addEventListener('tottakai:mitali', () => tarkistaSaavutukset());
  function saavutusLista(el) {
    const t = tila(), saadut = t.conquistas || {};
    const n = SAAVUTUKSET.filter(s => saadut[s.id]).length;
    const ul = el('ul', { class: 'conquistas-lista' });
    for (const s of SAAVUTUKSET) {
      const on = !!saadut[s.id], piilo = s.salainen && !on;
      const li = el('li', { class: 'conquista' + (on ? '' : ' ei') + (s.tuleva && !on ? ' tuleva' : ''), 'data-conquista': s.id });
      li.append(el('span', { class: 'conquista-ikoni', 'aria-hidden': 'true' }, on ? '🏆' : piilo ? '?' : '·'),
        el('span', { class: 'conquista-teksti' }, el('b', {}, piilo ? '???' : s.nimi),
          el('span', {}, piilo ? 'Conquista secreta.' : s.kuvaus),
          el('span', { class: 'ohje' }, on ? 'Conquistada!' : piilo ? 'Continue explorando a ilha.' : (s.tuleva ? 'Em breve: ' : 'Como: ') + s.miten)));
      ul.append(li);
    }
    return el('section', { class: 'osio saari-conquistas', id: 'conquistas', 'aria-label': 'Conquistas' },
      el('h2', {}, `🏆 Conquistas (${n} de ${SAAVUTUKSET.filter(s => !s.tuleva).length})`),
      el('p', { class: 'ohje' }, 'As cinzas ainda faltam. As secretas aparecem como ??? até você descobrir. Ícones: em breve.'), ul);
  }

  return { MITALIT, onMitali, oppitunti, mitaliTila, mitaliTieto, tarkistaMitali, annaLahjat, seuraaTehtavia, yksikonTunniste, edistysRivi, mitaliRivi, SAAVUTUKSET, saavutus, tarkistaSaavutukset, laske, saavutusLista };
};
