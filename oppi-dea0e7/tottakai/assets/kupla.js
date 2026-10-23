/* Tottakai: sanakuplat ja sanasivu (sopimus tottakai/sanasto/README.md, kohta 4; docs/arkisto/SANASTOJARJESTELMA.md, kohta 5).
   Kupla.data(teksti, ctx) → kuplan tiedot (puhdas funktio: sama sivulla, tarkistuksissa ja ajureissa, ei DOMia),
   Kupla.html(tiedot) → HTML-merkkijono, Kupla.sivu(id) → sanasivun HTML (#palavra-<id>), Kupla.aa(teksti, id) → ääntäminen.
   Kaikki tieto tulee leksikosta (assets/sanasto.js) ja käsitetaulusta (sanasto/kasitteet.js): solujen ja sanalajien
   nimet, Gramática-linkit ja vakiomäärä luetaan vain Kasitteista. Kuplan järjestys (ei piilotettuja osia):
   1) sana ▶ ja sanalaji, 2) ääntäminen (tietueen aa voittaa; IPA vain sanasivulla), 3) merkitys ja ”também: …”
   (ei puhekielen sanoja kirjakielisellä sivulla, ei johdosta), 4) perusmuoto · solun nimi (puhekieli: ”padrão: minä”;
   johdos: ”ordinal de kolme”), 5) paneeli vakiomäärän mukaan, tämä muoto korostettuna (ei-vakiorivi lisätään),
   vaihtuva konsonantti värillä, 6) enintään yksi huomautus, 7) enintään yksi Gramática-linkki + ”Tudo sobre … →”.
   Solujen nimet: vokaalisointu näytetystä muodosta (kenellä → -llä), nimi sanan käytön mukaan (Kasitteet.solu, kaytto).
   Muoto ennen opetusta (auditointi 5, A5-M3 kohta 2 ja A5-M5): jos muodon sijaa tai aikamuotoa ei ole vielä opetettu
   kuplan oppitunnilla (Kasitteet.OPETUS; oppitunti ctx.oppitunti, osoite tai Tulokset.edistys), kupla näyttää
   merkityksen, selkokielisen nimen ilman sijan nimeä (Kasitteet.selko), ”tema da lição N” ja Gramática-linkin lyhyeen
   johdantoon (Kasitteet.johdanto: h-paikallissijat, h-sijat, h-aikamuodot, h-monikko), ei h-sijatauluun. Tiedot:
   d.oppitunti, d.adiante = { solu, oppitunti, nimi } | null. Ei piilotettuja osia eikä ”mais”-nappia (omistaja). */
window.Kupla = (function () {
  'use strict';
  const S = () => window.Sanasto;
  const KA = () => window.Kasitteet;
  const T = () => window.Taivutus;
  const K = () => window.Kurssi || {};
  const esc = s => String(s === undefined || s === null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const VOK = 'aeiouyäöå';
  const onV = c => !!c && VOK.includes(c);
  const KIELLOT = { '1s': 'en', '2s': 'et', '3s': 'ei', '1p': 'emme', '2p': 'ette', '3p': 'eivät' };   // jos ei-tietuetta ei ole
  const NOMINIRIVIT = ['nom', 'gen', 'part', 'acc', 'ines', 'ela', 'ill', 'ade', 'abl', 'all', 'ess', 'transl'];
  const MONIKKORIVIT = ['mon.nom', 'mon.gen', 'mon.part', 'mon.ines'];
  const TERMI = k => (KA().TERMIT || {})[k] || k;
  const hrefSana = id => '#palavra-' + encodeURIComponent(id);

  /* ---------- apurit ---------- */
  // Sanan käyttö solun nimeä varten (Kasitteet.solu, kaytto): kieltoverbi, kieli (suomeksi), ajan sana (marraskuussa).
  function kaytto(id) {
    const r = S().hae(id);
    if (!r) return null;
    if (r.l === 'kielto') return 'kielto';
    if (r.paikka === 'kieli') return 'kieli';
    if (r.paikka === 'aika' || r.aikasana) return 'aika';
    return null;
  }
  // Solun nimi: vokaalisointu NÄYTETYSTÄ muodosta (kenellä → -llä), muuten tunnisteesta; nimi sanan käytön mukaan.
  // ot = oppitunti, jolla kupla näytetään: jos solua ei ole vielä opetettu, selkokielinen nimi ilman sijan nimeä.
  function soluNimi(solu, id, muoto, ot, ctx) {
    const h = muoto ? T().harmonia(String(muoto)) : S().harmonia(id);
    if (ot && !opetettu(solu, id, ot, ctx)) { const sk = KA().selko(solu, h, kaytto(id), (S().hae(id) || {}).l, ctx); if (sk) return sk; }
    const s = KA().solu(solu, h, kaytto(id));
    return s ? s.nimi : solu;
  }
  /* Opetusjärjestys (A5-M3 kohta 2, A5-M5; Kasitteet.OPETUS). Kuplan oppitunti: ctx.oppitunti, muuten osoitteen
     oppitunti ctx.oppitunti (app.js: #t03, #t03-gramatica, #treino-t03-luku …); muualla ei rajoitusta. */
  function opetettu(solu, id, ot, ctx) {
    if (!ot || typeof KA().opetettu !== 'function') return true;
    const r = S().hae(id);
    return KA().opetettu(solu, ot, r ? r.l : null, ctx);
  }
  function kuplanOppitunti(ctx) {
    // Vain kuplan omasta kontekstista (app.js ctxSanasta: oppitunti, kun osoite kuuluu oppitunnille). Ei osoitteesta eikä
    // selaimen muistista: kupla lasketaan joskus myöhemmin kuin se kerätään (kuplakartta), ja tuloksen pitää toistua.
    return (ctx && ctx.oppitunti) || null;
  }

  function oppitunninNimi(id) {
    const o = (K().sisallys || []).find(x => x.id === id) || (K().oppitunnit || []).find(x => x.id === id);
    const j = o && o.jakso ? String(o.jakso) : `Lição ${Number(String(id).slice(1))}`;
    return j.charAt(0).toLowerCase() + j.slice(1);
  }
  // Gramática-sivun lyhyt nimi sivun otsikosta (”Casos de lugar: em, de, para” → ”casos de lugar”).
  function sivunNimi(sivu) {
    const x = (K().hakuosa || []).find(y => y.id === sivu);
    const t = x && x.otsikko ? String(x.otsikko).split(/:\s/)[0].replace(/\s*\([^()]*\)\s*$/, '') : 'introdução';
    return t.charAt(0).toLowerCase() + t.slice(1);
  }
  function soluGramatica(solu, id) {
    const s = KA().solu(solu, S().harmonia(id), kaytto(id));
    return s ? s.gramatica : null;
  }
  // johdos-kenttä (kolmas = kolme:jarj): [kohde, solu] tai null.
  function johdos(r) {
    if (!r || typeof r.johdos !== 'string') return null;
    const k = r.johdos.lastIndexOf(':');
    const kohde = r.johdos.slice(0, k), solu = r.johdos.slice(k + 1);
    return S().hae(kohde) ? [kohde, solu] : null;
  }
  // Muoto HTML:nä, vaihtuva konsonanttiryhmä korostettuna (.av); ryhmän jälkeen vokaali tai sanan loppu.
  function korosta(muoto, av) {
    if (!av || !muoto) return esc(muoto);
    const m = String(muoto).toLowerCase();
    if (!m.startsWith(av.alku)) return esc(muoto);
    const n = av.alku.length, loput = m.slice(n);
    for (const r of [av.vahva, av.heikko].filter(Boolean).sort((x, y) => y.length - x.length)) {
      const seur = loput[r.length];
      if (loput.startsWith(r) && (!seur || onV(seur))) return esc(muoto.slice(0, n)) + `<span class="av">${esc(muoto.slice(n, n + r.length))}</span>` + esc(muoto.slice(n + r.length));
    }
    // heikko '' (k : –): näytetään kohta, josta konsonantti puuttuu, vain sanan lopun vokaalin edellä
    return esc(muoto);
  }
  const sanaLinkki = (id, teksti, av) => `<a class="w pk-sanalinkki" data-k="${esc(String(teksti).toLowerCase())}" data-l="${esc(id)}" href="${hrefSana(id)}" lang="fi-FI" translate="no">${av ? korosta(teksti, av) : esc(teksti)}</a>`;
  function gramaticaOlemassa(sivu) {
    if (!sivu) return false;
    const h = K().hakuosa;
    return !h || !h.length || h.some(x => x.id === sivu);
  }
  // Linkkiteksti lyhyesti (käsitetaulun nimestä): ”para onde? -lle (alativo)” → ”alativo”, ”tipo 4 (vogal …)” → ”tipo 4”.
  function lyhyesti(nimi) {
    const m = String(nimi).match(/^(.*?)\s*\(([^()]*)\)$/);
    if (!m) return nimi;
    return /^[\p{L}]+$/u.test(m[2]) ? m[2] : m[1];
  }
  const onOppitunti = id => (K().oppitunnit || []).some(o => o.id === id);
  function kolmikko(r) {
    if (r.paikka && typeof r.paikka === 'object') return ['missa', 'mista', 'mihin'];
    return KA().KOLMIKKO[r.paikka] || [];
  }

  /* Ääntäminen: tietueen aa/ipa (kirjoitusasun mukaan) voittaa; muuten lasketaan (yhdyssanassa osittain). */
  function aa(teksti, id) {
    const r = id ? S().hae(id) : null;
    const omat = (kentta) => r && r[kentta] ? (r[kentta][teksti] || r[kentta][String(teksti).toLowerCase()] || null) : null;
    const osat = r && r.yhd ? r.yhd : null;
    return { aa: omat('aa') || T().ohje(teksti, osat), ipa: omat('ipa') || T().ipa(teksti, osat), kasin: !!omat('aa') };
  }

  /* ---------- paneelit ---------- */
  function verbiPaneeli(r, an, pinta, av, ot) {
    const p = S().paradigma(r.id);
    const rivit = [];
    const persoonat = KA().PERSOONAT.map(k => ({ pron: KA().PRONOMINI[k], muoto: p['prees.' + k], solu: 'prees.' + k }));
    if (p.kielto) rivit.push({ muoto: p.kielto, nimi: soluNimi('kielto', r.id, p.kielto, ot), solu: 'kielto' });
    if (p['imperf.3s']) rivit.push({ muoto: p['imperf.3s'], nimi: soluNimi('imperf.3s', r.id, p['imperf.3s'], ot), solu: 'imperf.3s' });
    return { laji: 'verbi', otsake: KA().AJAT.prees.nimi, vaihtelu: av, persoonat, rivit };
  }
  function kieltoPaneeli(r) {
    const p = S().paradigma(r.id);
    return { laji: 'verbi', otsake: KA().LUOKAT.kielto.nimi, persoonat: KA().PERSOONAT.map(k => ({ pron: KA().PRONOMINI[k], muoto: p['prees.' + k], solu: 'prees.' + k })), rivit: [] };
  }
  function taulu(r, solut, av, ot) {
    const p = S().paradigma(r.id);
    const rivit = [];
    for (const solu of solut) if (p[solu]) rivit.push({ muoto: p[solu], nimi: soluNimi(solu, r.id, p[solu], ot), solu });
    return { laji: 'taulu', vaihtelu: av, rivit };
  }
  // Ilmauksen osat: merkitysnumero osassa (hauska#2 = agradável) valitsee osan merkityksen (Sanasto.osat).
  function osatPaneeli(r, an, sanat) {
    const osat = S().osat(r.id).map(({ sana: osa, mi }, i) => {
      const lemma = an && an.osat && an.osat[i];
      const pinta = sanat && sanat[i] ? sanat[i] : osa;
      const a = lemma || S().analysoi(osa)[0] || S().analysoi(osa.charAt(0).toUpperCase() + osa.slice(1))[0];
      const o = a ? S().hae(a.id) : null;
      const pt = o ? (mi !== null && o.pt[mi] ? o.pt[mi] : o.pt[0]) : '';
      return { sana: pinta, id: a ? a.id : null, pt, solu: a ? a.solu : null };
    });
    return { laji: 'osat', osat, kaava: r.l === 'rakenne' ? r.kaava || null : null };
  }
  function hahmoPaneeli(r) {
    let kuvaus = '';
    for (const o of K().oppitunnit || []) { const h = (o.hahmot || {})[r.hahmo]; if (h && h.kuvaus) { kuvaus = h.kuvaus; break; } }
    return r.hahmo ? { hahmo: r.hahmo, kuvaus } : null;
  }

  /* Paneeli vakiomäärän (Kasitteet.VAKIOMAARA) mukaan; analysoitu solu korostetaan ja lisätään, jos se ei ole vakiorivi. */
  function paneeli(r, an, pinta, av, sanat, ot, ctx) {
    const ohje = (KA().VAKIOMAARA[r.l] || { paneeli: [] }).paneeli;
    let pn = null;
    if (r.l === 'verbi') pn = verbiPaneeli(r, an, pinta, av, ot);
    else if (r.l === 'kielto') pn = kieltoPaneeli(r);
    else if (r.l === 'ilmaus' || r.l === 'rakenne') return osatPaneeli(r, an, sanat);
    else if (r.l === 'puhe' || r.l === 'taipumaton') return null;
    else {
      const solut = [];
      for (const o of ohje) {
        if (o === 'kolmikko') solut.push(...kolmikko(r));
        else if (o === 'solut') solut.push(...KA().PRONOMINISOLUT.filter(k => r.t && r.t[k]));
        else if (o !== 'hahmo') solut.push(o);
      }
      pn = taulu(r, solut, av, ot);
      if (ohje.includes('hahmo')) pn.hahmo = hahmoPaneeli(r);
    }
    // Korostus: analysoitu solu (perusmuoto = nom, jos se on paneelissa).
    const solu = an && an.solu ? an.solu : null;
    if (solu) {
      const p = S().paradigma(r.id);
      const loydetty = (pn.persoonat || []).find(x => x.solu === solu) || pn.rivit.find(x => x.solu === solu);
      const pintaPieni = String(pinta).toLowerCase();
      const muoto = p[solu] && String(p[solu]).toLowerCase() === pintaPieni ? p[solu] : pinta;
      if (loydetty && String(loydetty.muoto).toLowerCase() === String(muoto).toLowerCase()) loydetty.tama = true;
      else pn.rivit.push({ muoto, nimi: soluNimi(solu, r.id, muoto, ot, ctx), solu, tama: true, lisa: true });
    } else {
      const nom = pn.rivit.find(x => x.solu === 'nom');
      if (nom) nom.tama = true;
    }
    return pn;
  }

  /* ---------- kuplan tiedot ---------- */
  function data(teksti, ctx) {
    ctx = ctx || {};
    teksti = String(teksti || '').replace(/\s+/g, ' ').trim();
    const analyysit = S().analysoi(teksti, ctx);
    if (!analyysit.length) {
      const y = S().ydin(teksti);
      if (!y) return null;
      const a = aa(teksti, null);
      // Ydinsana ilman tietuetta: sanalaji ydinlistasta, jos se tiedetään; ”tradução automática” vain huomautuksena.
      const sl = y.sl && (KA().YDINLUOKAT || {})[y.sl];
      return { teksti, avain: teksti.toLowerCase(), analyysit: [], id: null, solu: null, kone: true, luokka: 'kone',
        luokkaNimi: sl || KA().LUOKAT.kone.nimi, vari: KA().LUOKAT.kone.vari, aa: a.aa, ipa: a.ipa, merkitys: y.pt, myos: [],
        perus: null, paneeli: null, huom: TERMI('kone'), linkit: [] };
    }
    const an = analyysit[0];
    const r = S().hae(an.id);
    const ot = kuplanOppitunti(ctx);
    const L = KA().LUOKAT[r.l];
    const av = S().vaihtelu(r.id);
    const a = aa(teksti, r.id);
    const mi = an.mi !== undefined && an.mi !== null && r.pt[an.mi] ? an.mi : 0;
    const d = {
      teksti, avain: teksti.toLowerCase(), analyysit, id: r.id, solu: an.solu || null, liite: an.liite || null, kone: false,
      luokka: r.l, luokkaNimi: L.nimi, vari: L.vari, aa: a.aa, ipa: a.ipa, merkitys: r.pt[mi],
      // kontekstissa: merkitys, joka näkyy vain, kun lauseyhteyden sääntö valitsee sen (olla apuverbinä, lição 19).
      myos: r.pt.filter((_, i) => i !== mi && !(r.kontekstissa || []).includes(i)), perus: null, paneeli: null, huom: r.huom || null, linkit: [], vaihtelu: av,
      oppitunti: ot, adiante: null
    };
    // Muoto, jonka sijaa tai aikamuotoa ei ole vielä opetettu tällä oppitunnilla: selkokielinen nimi, ”tema da lição N”
    // ja linkki lyhyeen johdantoon (ei sijataulukkoon). Ei piilotettuja osia (omistaja: vain linkkejä).
    const uusiSolu = an.solu && an.solu !== 'nom' && !opetettu(an.solu, r.id, ot, ctx) ? an.solu : null;
    if (uusiSolu) { const o = KA().opetus(uusiSolu, r.l, ctx); d.adiante = { solu: uusiSolu, oppitunti: o || null, nimi: o ? oppitunninNimi(o) : null }; }
    // Muut tulkinnat (eri sana, sama kirjoitusasu): ”também: fogo (tuli)”. Ei: puhekielen sana kirjakielisellä
    // sivulla (et = että vain Na rua -kohdissa), eikä saman sanan johdos (kolmas = kolme:jarj näkyy perusmuotorivillä).
    const jd = an.solu ? null : johdos(r);
    const kirjakieli = (ctx.rekisteri || 'kirja') !== 'puhe';
    const nahty = new Set([r.id]);
    for (const x of analyysit.slice(1)) {
      if (nahty.has(x.id)) continue;
      const o = S().hae(x.id);
      if (!o) continue;
      if (kirjakieli && o.l === 'puhe') continue;
      if (jd && x.id === jd[0] && x.solu === jd[1]) continue;
      // Laajennuksen solu (imperfekti, konditionaali, monikon sijat …), jota tällä oppitunnilla ei vielä opeteta: ei ”também”-riville
      // (teillä = vocês, ei ”estrada · plural” oppitunnilla 5). Gramáticassa (ei oppituntia) näkyy kaikki.
      if (x.solu && ot && S().LAAJAT && S().LAAJAT.has(x.solu) && !opetettu(x.solu, x.id, ot, ctx)) continue;
      nahty.add(x.id);
      d.myos.push(`${o.pt[0]} (${S().nimi(x.id)}${x.solu ? ' · ' + soluNimi(x.solu, x.id, teksti, ot) : ''})`);
    }
    // 4) perusmuoto + solun nimi yhdellä rivillä
    const nimet = [];
    if (an.solu && an.solu !== 'nom') nimet.push(soluNimi(an.solu, r.id, teksti, ot, ctx));
    if (an.liite === 'ko' || an.liite === 'kö') nimet.push(KA().AJAT.kys.nimi);
    if (an.osat) for (const o of an.osat) if (o.solu && o.solu !== 'nom') nimet.push(soluNimi(o.solu, o.id, null, ot));
    // Puhekielinen sana: ”padrão: minä” (kirjakielinen vastine linkkeinä).
    if (r.l === 'puhe' && r.kirja) d.perus = { kirja: r.kirja, nimi: TERMI('padrao') };
    else if (nimet.length) d.perus = { id: r.id, nayta: S().nimi(r.id), nimi: nimet.join(' + ') + (d.adiante && d.adiante.nimi ? ` · tema da ${d.adiante.nimi}` : '') };
    // Johdos: ”ordinal de kolme”, ”comparativo de hyvä”, muuten ”koti · onde?”.
    else if (jd) {
      const nimi = soluNimi(jd[1], jd[0], S().nimi(r.id), ot);
      const lyhyt = lyhyesti(nimi);
      // Johdos, jonka solua ei ole vielä opetettu (kotona = koti · onde?): ”koti · onde? · tema da lição 6”.
      const jo = !opetettu(jd[1], jd[0], ot) ? KA().opetus(jd[1], (S().hae(jd[0]) || {}).l) : null;
      if (jo) d.adiante = { solu: jd[1], oppitunti: jo, nimi: oppitunninNimi(jo), johdos: true };
      d.perus = /^[\p{L}]+$/u.test(lyhyt) && !jo
        ? { id: jd[0], nayta: S().nimi(jd[0]), nimi: lyhyt, eteen: true }
        : { id: jd[0], nayta: S().nimi(jd[0]), nimi: jo ? `${nimi} · tema da ${oppitunninNimi(jo)}` : nimi };
    }
    // 5) paneeli
    d.paneeli = paneeli(r, an, teksti.replace(/(ko|kö)$/i, an.liite ? '' : '$1'), av, teksti.split(' '), ot, ctx);
    // 7) yksi Gramática-linkki: solun sivu, muuten verbityyppi tai sanalajin sivu; -ko/-kö → kysymys.
    let sivu = null, nimi = null;
    const sg = an.solu ? soluGramatica(an.solu, r.id) : null;
    const aika = an.solu && an.solu.match(/^(prees|kys|imperf|kond)\./);
    if (uusiSolu && KA().johdanto(uusiSolu)) { sivu = KA().johdanto(uusiSolu); nimi = sivunNimi(sivu); }
    else if (d.adiante && d.adiante.johdos && KA().johdanto(d.adiante.solu)) { sivu = KA().johdanto(d.adiante.solu); nimi = sivunNimi(sivu); }
    else if (sg) { sivu = sg; nimi = r.l === 'kielto' ? L.nimi : aika ? KA().AJAT[aika[1]].nimi : soluNimi(an.solu, r.id, teksti); }
    else if (an.liite && KA().AJAT.kys.gramatica) { sivu = KA().AJAT.kys.gramatica; nimi = KA().AJAT.kys.nimi; }
    else if ((KA().SANASIVUT || {})[r.id]) { [sivu, nimi] = KA().SANASIVUT[r.id]; }
    else if (r.l === 'verbi' && r.t && KA().TYYPIT[r.t.tyyppi]) { sivu = L.gramatica; nimi = KA().TYYPIT[r.t.tyyppi]; }
    else if (L.gramatica) { sivu = L.gramatica; nimi = L.nimi; }
    if (sivu && gramaticaOlemassa(sivu)) d.linkit.push([sivu, `Gramática: ${lyhyesti(nimi)}`]);
    d.linkit.push([hrefSana(r.id).slice(1), `Tudo sobre ${S().nimi(r.id)} →`]);
    return d;
  }

  // Kirjakielinen vastine (kirja-kenttä) linkkeinä: sanat linkeiksi, välit ja välimerkit sellaisinaan (myös, kanssa).
  function kirjaLinkit(kirja, linkki) {
    const t = String(kirja);
    let kohta = 0;
    const o = [];
    for (const x of S().tokenoi(t)) {
      o.push(esc(t.slice(kohta, x.alku)));
      const a = S().analysoi(x.teksti)[0];
      o.push(a ? linkki(a.id, x.teksti) : esc(x.teksti));
      kohta = x.loppu;
    }
    o.push(esc(t.slice(kohta)));
    return o.join('');
  }

  /* ---------- HTML ---------- */
  function aaRivi(aaTeksti, ipa) {
    const tavut = esc(aaTeksti).split(/(\s+|-|·)/).map(o => {
      if (o === '-') return '<span class="tavuviiva">-</span>';
      if (!o || /^\s+$/.test(o) || o === '·') return o;
      return /\p{Lu}/u.test(o) && o === o.toUpperCase() ? `<b>${o.toLowerCase()}</b>` : o;
    }).join('');
    const ipaT = esc(String(ipa || '').replace(/^\s*\[|\]\s*$/g, '')).replace(/ˈ[^ɑæeiouyø\sˈˌ]*[ɑæeiouyø]ː?/gu, m => `<b>${m}</b>`);
    return `<div class="pk-aa" translate="no"><span class="aa-fi" title="Sílabas; a sílaba tônica em MAIÚSCULAS">${tavut}</span>` +
      (ipa ? ` <span class="aa-ipa" title="Alfabeto Fonético Internacional (IPA)">${ipaT}</span>` : '') + '</div>';
  }
  function paneeliHtml(p) {
    if (!p) return '';
    const o = ['<div class="pk-paneeli">'];
    const av = p.vaihtelu;
    const avTeksti = av ? ` · ${esc(TERMI('vaihtelu'))} <span class="av">${esc(av.vahva)} : ${esc(av.heikko || '–')}</span>` : '';
    if (p.laji === 'verbi') {
      o.push(`<div class="pk-otsake">${esc(p.otsake)}${avTeksti}</div><div class="pk-persoonat" lang="fi-FI" translate="no">`);
      for (const r of p.persoonat) o.push(`<span${r.tama ? ' class="tama"' : ''}>${esc(r.pron)} ${korosta(r.muoto, av)}</span>`);
      o.push('</div>');
    } else if (p.laji === 'taulu' && p.hahmo) {
      o.push(`<div class="pk-hahmo"><span class="hahmokuva" data-hahmo="${esc(p.hahmo.hahmo)}"></span>${p.hahmo.kuvaus ? `<span>${esc(p.hahmo.kuvaus)}</span>` : ''}</div>`);
    } else if (p.laji === 'taulu' && avTeksti) o.push(`<div class="pk-otsake">${avTeksti.replace(/^ · /, '')}</div>`);
    if (p.laji === 'osat') {
      o.push('<div class="pk-otsake">palavra por palavra</div><div class="pk-osat">');
      for (const x of p.osat) {
        const lisa = x.solu && x.solu !== 'nom' ? ` <small>(${esc(S().nimi(x.id))} · ${esc(soluNimi(x.solu, x.id))})</small>` : '';
        o.push(`${x.id ? sanaLinkki(x.id, x.sana) : `<span lang="fi-FI">${esc(x.sana)}</span>`}<span>${esc(x.pt)}${lisa}</span>`);
      }
      o.push('</div>');
      if (p.kaava) o.push(`<div class="pk-kaava">${esc(p.kaava)}</div>`);
    }
    if (p.rivit && p.rivit.length) {
      o.push('<table class="pk-taulu">');
      for (const r of p.rivit) o.push(`<tr${r.tama ? ' class="tama"' : ''}><td lang="fi-FI" translate="no">${korosta(r.muoto, av)}</td><td>${esc(r.nimi)}</td></tr>`);
      o.push('</table>');
    }
    o.push('</div>');
    return o.join('');
  }
  function html(d) {
    if (!d) return '';
    const o = [`<div class="pk" data-luokka="${esc(d.luokka)}">`];
    o.push(`<div class="pk-yla"><span class="pk-sana" lang="fi-FI" translate="no">${esc(d.teksti)}</span><span class="pk-soita" data-sano="${esc(d.teksti)}"></span><span class="pk-luokka ${esc(d.vari)}">${esc(d.luokkaNimi)}</span></div>`);
    // Ääntäminen ilman IPA:a (IPA vain sanasivulla, auditointi 3 löydös 4).
    o.push(aaRivi(d.aa, null));
    if (d.merkitys) o.push(`<div class="pk-merkitys">${esc(d.merkitys)}</div>`);
    if (d.myos && d.myos.length) o.push(`<div class="pk-myos">também: ${esc(d.myos.join('; '))}</div>`);
    if (d.perus && d.perus.kirja) {
      // Puhekielinen sana: ”padrão: minä” (sovittu muoto; kirjakielinen vastine linkkeinä, välimerkit säilyvät).
      o.push(`<div class="pk-perus">${esc(d.perus.nimi)}: ${kirjaLinkit(d.perus.kirja, sanaLinkki)}</div>`);
    } else if (d.perus && d.perus.eteen) o.push(`<div class="pk-perus">${esc(d.perus.nimi)} ${esc(TERMI('johdos'))} ${sanaLinkki(d.perus.id, d.perus.nayta)}</div>`);
    else if (d.perus) o.push(`<div class="pk-perus">${sanaLinkki(d.perus.id, d.perus.nayta, d.vaihtelu)} · ${esc(d.perus.nimi)}</div>`);
    o.push(paneeliHtml(d.paneeli));
    if (d.huom) o.push(`<div class="pk-huom${d.kone ? ' pk-kone' : ''}">${esc(d.huom)}</div>`);
    if (d.linkit.length) o.push(`<div class="pk-linkit">${d.linkit.map(([h, t]) => `<a href="#${esc(h)}">${esc(t)}</a>`).join('')}</div>`);
    o.push('</div>');
    return o.join('');
  }

  /* ---------- sanasivu ---------- */
  // Oppituntien lauseet (.s-elementit) ilman DOMia: sama sananjakaja ja analyysi kuin sivulla.
  let esiintymat = null;
  const ENTITEETIT = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&nbsp;': ' ', '&#39;': "'" };
  const entiteetit = t => t.replace(/&[#a-z0-9]+;/gi, m => ENTITEETIT[m] || ' ');
  /* Lauseen HTML kahdeksi: osat = [{ teksti, laji }] (laji: 'fi' = analysoidaan, 'pala' = esimerkkipala tai Maian
     tahallinen virhe (.pala), 'pt' = portugalia (lang="pt…"); .puhuja ja .kaannos jätetään pois). Palat ja portugali
     pysyvät näkyvissä sanasivun esimerkissä mutta eivät saa kuplaa (sivu ohittaa .pala ja [lang^=pt]). */
  function lauseenOsat(h) {
    const osat = [];
    const pino = [];   // avoimet elementit: { laji, l } (laji null = ei muutosta; l = data-l-merkintä)
    const nyt = () => { for (let i = pino.length - 1; i >= 0; i--) if (pino[i].laji) return pino[i].laji; return 'fi'; };
    const nytL = () => { for (let i = pino.length - 1; i >= 0; i--) if (pino[i].l) return pino[i].l; return null; };
    const TYHJAT = /^(br|img|wbr|hr|input)$/i;
    for (const m of String(h).matchAll(/<(\/?)([a-z0-9]+)\b([^>]*)>|([^<]+)/gi)) {
      if (m[4] !== undefined) {
        const laji = nyt();
        if (laji !== 'pois') osat.push({ teksti: entiteetit(m[4]), laji, l: nytL() });
        continue;
      }
      const [, kiinni, tagi, attrs] = m;
      if (TYHJAT.test(tagi)) { if (/^br$/i.test(tagi)) osat.push({ teksti: ' ', laji: nyt(), l: null }); continue; }
      if (kiinni) { pino.pop(); continue; }
      let laji = null;
      if (/\bclass="[^"]*\b(puhuja|kaannos)\b/.test(attrs)) laji = 'pois';
      else if (/\bclass="[^"]*\bpala\b/.test(attrs)) laji = 'pala';
      else if (/\blang="pt/i.test(attrs)) laji = 'pt';
      const l = (attrs.match(/\bdata-l="([^"]*)"/) || [])[1] || null;
      pino.push({ laji: nyt() === 'pois' ? 'pois' : laji, l });
    }
    // Yhdistä vierekkäiset saman lajin (ja saman data-l:n) osat ja siisti välit.
    const ulos = [];
    for (const o of osat) { const v = ulos[ulos.length - 1]; if (v && v.laji === o.laji && v.l === o.l) v.teksti += o.teksti; else ulos.push(Object.assign({}, o)); }
    if (ulos.length) { ulos[0].teksti = ulos[0].teksti.replace(/^\s+/, ''); ulos[ulos.length - 1].teksti = ulos[ulos.length - 1].teksti.replace(/\s+$/, ''); }
    for (const o of ulos) o.teksti = o.teksti.replace(/\s+/g, ' ');
    return ulos.filter(o => o.teksti);
  }
  const osatHtml = osat => osat.map(o => o.laji === 'pala' ? `<span class="pala">${esc(o.teksti)}</span>`
    : o.laji === 'pt' ? `<span lang="pt-BR">${esc(o.teksti)}</span>`
    : o.l ? `<span data-l="${esc(o.l)}">${esc(o.teksti)}</span>` : esc(o.teksti)).join('');
  /* Oppitunnin .s-lauseet: [{ kirja, hairio, pt, sisus }] (T15.8: jäsennys DOMParserilla, ei säännöllisellä lausekkeella,
     joten sisäkkäiset samannimiset elementit eivät katkaise lausetta). Sisempi .s ulomman .s:n sisällä ei ole oma lause
     (kuten ennen). Ilman DOMParseria (Node-työkalut) vanha säännöllinen lauseke. */
  const S_VALITSIN = 'p.s, li.s, div.s, span.s';
  function oppitunninLauseet(html) {
    if (typeof DOMParser === 'function') {
      const d = new DOMParser().parseFromString(`<body>${html}</body>`, 'text/html');
      return [...d.body.querySelectorAll(S_VALITSIN)].filter(e => !e.parentElement.closest(S_VALITSIN)).map(e => ({
        kirja: e.hasAttribute('data-kirja'), hairio: e.hasAttribute('data-hairio') || !!e.querySelector('[data-hairio]'),
        pt: e.getAttribute('data-pt') || '', sisus: e.innerHTML }));
    }
    return [...String(html).matchAll(/<(p|li|div|span)\b([^>]*\bclass="(?:[^"]*\s)?s(?:\s[^"]*)?"[^>]*)>([\s\S]*?)<\/\1>/g)].map(m => ({
      kirja: /data-kirja=/.test(m[2]), hairio: /data-hairio=/.test(m[2]) || /data-hairio=/.test(m[3]),
      pt: (m[2].match(/\bdata-pt="([^"]*)"/) || [])[1] || '', sisus: m[3] }));
  }
  function rakennaEsiintymat() {
    esiintymat = new Map();
    for (const o of K().oppitunnit || []) {
      for (const x of oppitunninLauseet(String(o.html || (o.osat || []).map(y => y.html).join(' ')))) {
        if (x.kirja) continue;    // Na rua -lause (puhekieltä) ei ole esimerkki kirjakielen sanalle
        if (x.hairio) continue;   // Maian tahallinen virhe (kusi on …)
        const osat = lauseenOsat(x.sisus);
        const lause = osat.map(y => y.teksti).join('').trim();
        if (!lause || !osat.some(y => y.laji === 'fi' && /\p{L}/u.test(y.teksti))) continue;
        const pt = x.pt;
        // Analyysi kuten sivulla: vain suomenkieliset osat, lauseyhteys (kaikki aiemmat sanat, lähin ensin) yli osien.
        const ed = [];
        const loydetyt = new Set();
        for (const osa of osat) {
          if (osa.laji !== 'fi') continue;
          const tok = S().tokenoi(osa.teksti);
          tok.forEach((t, i) => {
            const ctx = { ed: ed.slice().reverse(), alku: !ed.length, rekisteri: 'kirja' };
            if (osa.l) ctx.l = osa.l;
            const a = S().analysoi(t.teksti, ctx)[0];
            if (a) for (const id of [a.id].concat((a.osat || []).map(x => x.id))) loydetyt.add(id);
            ed.push(...t.avain.split(' '));
            const jalkeen = osa.teksti.slice(t.loppu, (tok[i + 1] || { alku: osa.teksti.length }).alku);
            if (/[.!?…;:]/.test(jalkeen)) ed.length = 0;
          });
        }
        const html = osatHtml(osat);
        for (const id of loydetyt) {
          if (!esiintymat.has(id)) esiintymat.set(id, []);
          const lista = esiintymat.get(id);
          if (!lista.some(x => x.lause === lause)) lista.push({ o: o.id, lause, html, pt: entiteetit(pt) });
        }
      }
    }
  }
  // Taulukon solu: { muoto, l: 'tunniste:solu', eteen?: { muoto, l } } → kuplasana (.w), jonka tulkinta on kiinnitetty
  // data-l:llä (ei glossausta: vaihtuvan konsonantin korostus pilkkoisi tekstin).
  const kuplaSana = (muoto, l, av) => `<span class="w" data-k="${esc(String(muoto).toLowerCase())}" data-l="${esc(l)}" tabindex="0" lang="fi-FI" translate="no">${korosta(muoto, av)}</span>`;
  /* Sanasivun taulun muoto: kuplasana, jos muoto on sanan paradigmassa tällä solulla (tai perusmuoto); muuten (laskettu
     monikon sija, aikamuoto) pelkkä muoto ilman kuplaa (data-ei-kuplaa), jotta kupla ei väitä paradigmasta puuttuvaa solua. */
  function muotoHtml(muoto, l, av) {
    const k = String(l || '').lastIndexOf(':');
    const id = k > 0 && !S().hae(l) ? l.slice(0, k) : l, solu = k > 0 && !S().hae(l) ? l.slice(k + 1) : null;
    const pm = String(muoto).toLowerCase();
    const tunnettu = id && S().hae(id) && (solu ? S().muodot(id).some(x => x.solu === solu && String(x.muoto).toLowerCase() === pm) : String(S().nimi(id)).toLowerCase() === pm);
    return tunnettu ? kuplaSana(muoto, l, av) : `<span class="sanasivu-muoto" data-ei-kuplaa lang="fi-FI" translate="no">${korosta(muoto, av)}</span>`;
  }
  const soluTieto = (id, solu, muoto) => (muoto ? { muoto, l: `${id}:${solu}` } : null);
  // Taulukon rivi: [nimi | { nimi, huom }, solu…], rivi.luokka = tr-luokka (sanasivu-harv); { ryhma: teksti } = väliotsikko.
  // Solu: { muoto, l, eteen?: { muoto, l } tai lista (en ole puhunut) }.
  function muotoTaulu(otsikot, rivit, av, luokka, eka = 28) {
    // Oma colgroup (ei neljännesruudukkoa): nimisarake 28 %, muotosarakkeet tasan, jotta ▶ ja muoto mahtuvat 375 px:iin.
    // Ei omaa colgroupia: sivun neljännesruudukko (app.js neljannekset/linjaa) linjaa sarakkeet koko sivulla (KAYTANNOT).
    const cg = '';
    const kiintea = cg ? ` sanasivu-kiintea${eka === 18 ? ' sanasivu-verbi' : eka === 16 ? ' sanasivu-kysy' : ''}` : '';
    const o = [`<div class="vieritys"><table class="taivutus sanasivu-taulu${kiintea}${luokka ? ' ' + luokka : ''}">${cg}<thead><tr>`, ...otsikot.map(x => `<th>${esc(x)}</th>`), '</tr></thead><tbody>'];
    // ▶ jokaisessa solussa (koko solun teksti: en ole ottanut); app.js naytaSanasivu tekee .pk-soita-paikasta painikkeen.
    const solu = c => {
      if (!c) return '–';
      const osat = [].concat(c.eteen || []).filter(Boolean).map(e => Object.assign({}, e, { av: null })).concat(Object.assign({}, c, { av }));
      return `<span class="pk-soita" data-sano="${esc(osat.map(x => x.muoto).join(' '))}"></span>` + osat.map(x => muotoHtml(x.muoto, x.l, x.av)).join(' ');
    };
    for (const r of rivit) {
      if (r.ryhma) { o.push(`<tr class="taulu-ryhma"><th colspan="${otsikot.length}">${esc(r.ryhma)}</th></tr>`); continue; }
      const n = r[0] && typeof r[0] === 'object' ? esc(r[0].nimi) + (r[0].huom ? ` <span class="sanasivu-huom">${esc(r[0].huom)}</span>` : '') : esc(r[0]);
      o.push(`<tr${r.luokka ? ` class="${esc(r.luokka)}"` : ''}><th scope="row">${n}</th>` + r.slice(1).map(c => `<td>${solu(c)}</td>`).join('') + '</tr>');
    }
    o.push('</tbody></table></div>');
    return o.join('');
  }
  /* Sanasivun sijataulu: sija | yksikkö | monikko (Taivutus.monikko tallennetuista tunnusmuodoista; tallennettu solu
     voittaa). Harvinaiset sijat (abessiivi, komitatiivi, instruktiivi) harmaina omassa ryhmässään kuten h-sijataulussa. */
  const SIJANIMET = { nom: 'nominativo', gen: 'genitivo', part: 'partitivo', acc: 'acusativo', ines: 'inessivo', ela: 'elativo', ill: 'ilativo',
    ade: 'adessivo', abl: 'ablativo', all: 'alativo', ess: 'essivo', transl: 'translativo', abess: 'abessivo', kom: 'comitativo', instr: 'instrutivo' };
  const SIJAPARIT = [['nom', 'mon.nom'], ['gen', 'mon.gen'], ['part', 'mon.part'], ['acc', null], ['ines', 'mon.ines'], ['ela', 'mon.ela'], ['ill', 'mon.ill'],
    ['ade', 'mon.ade'], ['abl', 'mon.abl'], ['all', 'mon.all'], ['ess', 'mon.ess'], ['transl', 'mon.transl']];
  const HARVAT = [['abess', 'mon.abess', null], [null, 'kom', 'só no plural, sempre com sufixo possessivo: -en = seu, sua'], [null, 'instr', 'só no plural, em expressões fixas']];
  const NOMSOLU = { genetiivi: 'gen', partitiivi: 'part', illatiivi: 'ill', inessiivi: 'ines', elatiivi: 'ela', adessiivi: 'ade', ablatiivi: 'abl',
    allatiivi: 'all', essiivi: 'ess', translatiivi: 'transl' };
  // Yksikön ja monikon solut tunnusmuodoista { nom, gen, part, ill, mpart, h }.
  function nominiSolut(tieto) {
    const yks = { nom: tieto.nom };
    if (!tieto.gen) return { yks, mon: {} };
    const n = T().nomini(tieto);
    for (const [sija, solu] of Object.entries(NOMSOLU)) if (n[sija]) yks[solu] = n[sija];
    yks.abess = tieto.gen.replace(/n$/, '') + T().sointu('tta', tieto.h);
    return { yks, mon: T().monikko(tieto) };
  }
  function sijaTaulu(yks, mon, l, av, luokka) {
    const tieto = (solu, muoto) => (muoto ? { muoto, l: l(solu) } : null);
    const rivit = SIJAPARIT.map(([a, b]) => [SIJANIMET[a], tieto(a, yks[a]), b ? tieto(b, mon[b]) : null]).filter(r => r[1] || r[2]);
    const harvat = HARVAT.map(([a, b, huom]) => Object.assign([{ nimi: SIJANIMET[a || b], huom }, a ? tieto(a, yks[a]) : null, tieto(b, mon[b])], { luokka: 'sanasivu-harv' })).filter(r => r[1] || r[2]);
    if (harvat.length) rivit.push({ ryhma: 'Raros: basta reconhecer' }, ...harvat);
    return muotoTaulu(['caso', 'singular', 'plural'], rivit, av, luokka);
  }
  function sivu(id) {
    const r = S().hae(id);
    if (!r) return '';
    const L = KA().LUOKAT[r.l];
    const nimi = S().nimi(id);
    const av = S().vaihtelu(id);
    const p = S().paradigma(id);
    const kaikki = S().muodot(id);
    const a = aa(nimi, id);
    const o = [`<article class="sanasivu" data-id="${esc(id)}">`];
    o.push(`<header class="op-otsake"><p class="yla"><span class="pk-luokka ${esc(L.vari)}">${esc(L.nimi)}</span></p>` +
      `<h1 lang="fi-FI" translate="no"><span class="pk-soita" data-sano="${esc(nimi)}"></span> ${esc(nimi)}</h1>${aaRivi(a.aa, a.ipa)}</header>`);
    o.push('<div class="op-runko">');
    // Merkitykset
    o.push('<section class="osio"><h2>Significados</h2><ol class="sanasivu-merkitykset">' + r.pt.map(x => `<li>${esc(x)}</li>`).join('') + '</ol>');
    if (r.huom) o.push(`<p class="huomio">${esc(r.huom)}</p>`);
    if (r.l === 'puhe' && r.kirja) {
      const sanat = kirjaLinkit(r.kirja, (x, teksti) => `<a href="${hrefSana(x)}" class="fi">${esc(teksti)}</a>`);
      o.push(`<p>${esc(L.nimi)} · ${esc(TERMI('padrao'))}: ${sanat}</p>`);
    }
    o.push('</section>');
    // Muodot
    const muodot = [];
    const naytetyt = new Set();
    const merkitse = (...solut) => solut.forEach(s => naytetyt.add(s));
    const P = KA().PERSOONAT;
    // Solun data-l: tunniste:solu, jos käsitetaulu tuntee solun (kupla nimeää sen); muuten pelkkä tunniste (perusmuoto).
    const lSolu = solu => (KA().solu(solu) ? `${id}:${solu}` : id);
    if (r.l === 'verbi') {
      // Aikamuodot tallennetuista tunnusmuodoista (Taivutus.verbi); muoto, jota ei voi johtaa varmasti, puuttuu.
      const q = Object.assign(T().verbi(Object.assign({ inf: nimi }, r.t || {})), p);
      const ei = S().hae('ei') ? S().paradigma('ei') : {};
      const en = k => ({ muoto: ei['prees.' + k] || KIELLOT[k], l: S().hae('ei') ? 'ei:prees.' + k : 'ei' });
      const ro = S().hae('olla');
      const ol = ro ? Object.assign(T().verbi(Object.assign({ inf: 'olla' }, ro.t || {})), S().paradigma('olla')) : {};
      const olla = solu => (ol[solu] ? { muoto: ol[solu], l: KA().solu(solu) ? 'olla:' + solu : 'olla' } : null);
      const st = (solu, eteen) => (q[solu] ? { muoto: q[solu], l: lSolu(solu), eteen } : null);
      const pt = k => (/p$/.test(k) ? 'part.mon' : 'part.yks');
      const sana = (m, l) => ({ muoto: m, l: S().hae(l) ? l : '' });
      const pron = k => KA().PRONOMINI[k];
      const taulu = (otsikko, rivit, harv) => {
        if (!rivit.some(x => x[1] || x[2])) return;
        muodot.push(`<h3>${esc(otsikko)}${harv ? ' <span class="sanasivu-huom">raro: basta reconhecer</span>' : ''}</h3>` +
          muotoTaulu(['', 'afirmativo', 'negativo'], rivit, av, harv ? 'sanasivu-harv' : '', 18));
      };
      const kielto = k => (p.kielto ? { muoto: p.kielto, l: `${id}:kielto`, eteen: en(k) } : null);
      const rivit = P.map(k => [pron(k), soluTieto(id, 'prees.' + k, p['prees.' + k]), kielto(k), soluTieto(id, 'kys.' + k, p['kys.' + k])]);
      muodot.push('<h3>Presente</h3>' + muotoTaulu(['', 'afirmativo', 'negativo', KA().AJAT.kys.nimi], rivit, av, '', 16));
      taulu('Passado (imperfeito)', P.map(k => [pron(k), st('imperf.' + k), st(pt(k), en(k))]));
      if (ol['prees.1s']) taulu('Perfeito (olen + particípio)', P.map(k => [pron(k), st(pt(k), olla('prees.' + k)), st(pt(k), [en(k), olla('kielto')])]));
      taulu('Condicional (“…ria”)', P.map(k => [pron(k), st('kond.' + k), st('kond.3s', en(k))]));
      taulu('Imperativo (ordens)', [
        ['sinä', st('imper.2s'), st('kielto', sana('älä', 'älä'))],
        Object.assign(['me', st('imper.1p'), st('imper.neg.1p', sana('älkäämme', 'älkäämme'))], { luokka: 'sanasivu-harv' }),
        ['te', st('imper.2p'), st('imper.neg.2p', sana('älkää', 'älkää'))]]);
      taulu('Passivo (impessoal: “fala-se”)', [['presente', st('pass'), st('pass.kielto', en('3s'))], ['passado', st('pass.imperf'), st('pass.part', en('3s'))]]);
      if (ol['imperf.1s']) taulu('Mais-que-perfeito (olin + particípio)', P.map(k => [pron(k), st(pt(k), olla('imperf.' + k)), st(pt(k), [en(k), olla(pt(k))])]), true);
      taulu('Potencial (“talvez”)', P.map(k => [pron(k), st('pot.' + k), st('pot.kielto', en(k))]), true);
      const inf = [['1º infinitivo (forma básica)', { muoto: nimi, l: id }], ['3º infinitivo: para … (-maan)', st('inf3.ill')],
        ['3º infinitivo: fazendo (-massa)', st('inf3.ines')], ['3º infinitivo: de … (-masta)', st('inf3.ela')],
        ['particípio presente (-va)', st('part.va')], ['particípio passado (-nut)', st('part.yks')], ['particípio passivo (-ttu)', st('pass.part')]].filter(x => x[1]);
      muodot.push(`<div class="sanasivu-laatikko"><h3>Infinitivos e particípios</h3>${muotoTaulu(['', 'forma'], inf, av)}</div>`);
      merkitse(...Object.keys(q).filter(k => k !== 'vartalo'));
    } else if (r.l === 'kielto') {
      muodot.push(muotoTaulu(['', KA().LUOKAT.kielto.nimi], KA().PERSOONAT.map(k => [KA().PRONOMINI[k], soluTieto(id, 'prees.' + k, p['prees.' + k])]), null));
      merkitse(...KA().PERSOONAT.map(k => 'prees.' + k));
    } else if (r.l === 'henkilo') {
      // Henkilön nimi: vain vakiopaneelin muodot (gen, all) ja tallennetut muodot, ei laskettua sijataulukkoa (*Maiat).
      const solut = ['gen', 'part', 'ill', 'all'].filter(k => r.t && r.t[k]);
      merkitse(...NOMINIRIVIT, ...MONIKKORIVIT);
      if (solut.length) muodot.push(muotoTaulu(['', 'forma'], solut.map(k => [soluNimi(k, id, p[k]), soluTieto(id, k, p[k])]), av));
    } else if (['paikka', 'nimi'].includes(r.l)) {
      // Paikan nimi: yksikön sijat, paikallissijoista vain oikea sarja (sisa: -ssa, -sta, -Vn; ulko: -lla, -lta, -lle;
      // nimetty kolmikko: vain se).
      const kaikki6 = KA().KOLMIKKO.sisa.concat(KA().KOLMIKKO.ulko);
      const sarja = KA().KOLMIKKO[r.paikka] && ['sisa', 'ulko'].includes(r.paikka) ? KA().KOLMIKKO[r.paikka] : null;
      const pois = r.paikka && typeof r.paikka === 'object' ? kaikki6 : sarja ? kaikki6.filter(k => !sarja.includes(k)) : [];
      const solut = NOMINIRIVIT.concat(kolmikko(r).filter(k => !NOMINIRIVIT.includes(k))).filter(k => p[k] && !pois.includes(k));
      merkitse(...NOMINIRIVIT, ...kolmikko(r), 'mon.nom');   // paikan nimellä ei monikkoa
      muodot.push(muotoTaulu(['caso', 'singular'], solut.map(k => [SIJANIMET[k] || soluNimi(k, id, p[k]), soluTieto(id, k, p[k])]), av));
    } else if (['substantiivi', 'adjektiivi', 'numeraali', 'pronomini'].includes(r.l)) {
      const t = r.t || {};
      const h = S().harmonia(id);
      const pron = r.l === 'pronomini';
      const { yks, mon } = pron ? { yks: {}, mon: {} } : nominiSolut({ nom: nimi, gen: t.gen, part: t.part, ill: t.ill, mpart: t.mpart, h });
      for (const [k, m] of Object.entries(p)) {
        if (k === 'jarj' || k === 'komp' || k === 'sup') continue;
        (/^mon\.|^(kom|instr)$/.test(k) ? mon : yks)[k] = m;   // tallennettu voittaa
      }
      muodot.push(sijaTaulu(yks, mon, lSolu, av));
      merkitse(...Object.keys(yks).filter(k => SIJANIMET[k]), ...Object.keys(mon));
      // Omistusliitteet (AV-041; oppitunti 17, tunnistettaviksi): muodot sanasto.js muotolistasta (Taivutus.omistus).
      // 3. persoona on sama hänen- ja heidän-muodolle (kirjansa), joten rivejä on viisi.
      const POSS = [['poss.1s', 'minun', 'meu, minha'], ['poss.2s', 'sinun', 'seu, sua (de você)'], ['poss.3', 'hänen, heidän', 'dele, dela, deles'],
        ['poss.1p', 'meidän', 'nosso, nossa'], ['poss.2p', 'teidän', 'de vocês']].filter(([k]) => p[k]);
      if (POSS.length) {
        muodot.push(`<div class="sanasivu-laatikko"><h3>Posse (lição 17: para reconhecer)</h3>${muotoTaulu(['', 'forma'],
          POSS.map(([k, pr, pt]) => [{ nimi: `${pr} …`, huom: pt }, soluTieto(id, k, p[k])]), av)}</div>`);
        merkitse(...POSS.map(([k]) => k));
      }
      if (r.l === 'numeraali' && p.jarj) { muodot.push(muotoTaulu(['', 'forma'], [[soluNimi('jarj', id, p.jarj), soluTieto(id, 'jarj', p.jarj)]], null)); merkitse('jarj'); }
      // Vertailuasteet omina sijatauluinaan, kun ne ovat säännöllisiä (iso → isompi, isoin); muuten ne näkyvät alla.
      if (r.l === 'adjektiivi' && Array.isArray(r.vert) && t.gen) {
        const so = x => T().sointu(x, h);
        const [komp, sup] = r.vert;
        const aste = (solu, otsikko, muoto, tieto) => {
          const n = nominiSolut(Object.assign({ nom: muoto, h }, tieto));
          muodot.push(`<h3>${esc(otsikko)}: <span lang="fi-FI" translate="no">${esc(muoto)}</span></h3>` +
            sijaTaulu(n.yks, n.mon, k => (k === 'nom' ? `${id}:${solu}` : id), null));
          merkitse(solu);
        };
        if (komp && komp === t.gen.replace(/n$/, '') + 'mpi') {
          const b = komp.slice(0, -1);
          aste('komp', 'Comparativo', komp, { gen: komp.slice(0, -3) + 'mman', part: b + so('aa'), ill: b + so('aan'), mpart: b + so('ia') });
        }
        if (sup && /in$/.test(sup)) {
          const b = sup.slice(0, -2);
          aste('sup', 'Superlativo', sup, { gen: b + 'imman', part: sup + so('ta'), ill: b + so('impaan'), mpart: b + so('impia') });
        }
      }
    }
    // Muut tallennetut muodot (imperfekti, passiivi, vartalo, m-lisämuodot …) omina riveinään; henkilön nimellä vain
    // tallennetut lisämuodot (Jayllä), ei laskettuja.
    const omatM = new Set(Object.keys(r.m || {}));
    const muut = kaikki.filter(x => !naytetyt.has(x.solu) && !(x.solu === 'nom') && (r.l !== 'henkilo' || omatM.has(x.muoto)));
    if (muut.length) muodot.push(muotoTaulu(['', 'outras formas'], muut.map(x => [soluNimi(x.solu, id, x.muoto), soluTieto(id, x.solu, x.muoto)]), av));
    if (r.osat) {
      const pn = osatPaneeli(r, null, null);
      muodot.push('<div class="pk sanasivu-osat">' + paneeliHtml(pn) + '</div>');
    }
    // Sanakirjan taivutusluokka (Kotus-tyyppi, AV-041): vain kun Taivutus.sanatyyppi on varma; mallisana kuplana.
    const ty = T().sanatyyppi ? T().sanatyyppi(r) : null;
    const tyyppi = ty && ty.varma ? `<p class="sanasivu-tyyppi">Classe no dicionário (Kotus): tipo ${esc(ty.kotus)}, como ${muotoHtml(ty.malli, ty.malli)}</p>` : '';
    if (muodot.length) o.push(`<section class="osio"><h2>Formas</h2>${tyyppi}${av ? `<p>${esc(TERMI('vaihtelu'))}: <span class="av">${esc(av.vahva)} : ${esc(av.heikko || '–')}</span></p>` : ''}${muodot.join('')}</section>`);
    if (r.l === 'henkilo' && r.hahmo) {
      const h = hahmoPaneeli(r);
      if (h) o.push(`<section class="osio"><div class="pk-hahmo"><span class="hahmokuva" data-hahmo="${esc(h.hahmo)}"></span>${h.kuvaus ? `<span>${esc(h.kuvaus)}</span>` : ''}</div></section>`);
    }
    // Na rua: puhekieliset vastineet (puhe-tietueet, joiden kirja viittaa tähän sanaan). Merkitty puhekielen osio.
    const puhe = S().kaikki().filter(x => x.l === 'puhe' && x.kirja && S().tokenoi(x.kirja).some(t => (S().analysoi(t.teksti)[0] || {}).id === id));
    if (puhe.length) {
      o.push(`<aside class="kulttuuri na-rua"><p class="yla">Na rua · Puhekieli</p><p>Na rua: ${puhe.map(x => `<a href="${hrefSana(x.id)}" class="fi" lang="fi-FI">${esc(x.id)}</a> (= ${esc(x.kirja)})`).join(' · ')}</p></aside>`);
    }
    // Esiintymät oppitunneilla
    if (!esiintymat) rakennaEsiintymat();
    const es = esiintymat.get(id) || [];
    if (es.length) {
      o.push('<section class="osio"><h2>Nas lições</h2>');
      for (const ot of K().oppitunnit || []) {
        const omat = es.filter(x => x.o === ot.id).slice(0, 4);
        if (!omat.length) continue;
        o.push(`<h3><a href="#${esc(ot.id)}">${esc(ot.jakso || ot.id)} · ${esc(ot.otsikko || '')}</a></h3><div class="sanasivu-esimerkit">`);
        for (const x of omat) o.push(`<p class="s"${x.pt ? ` data-pt="${esc(x.pt)}"` : ''}>${x.html}</p>`);
        o.push('</div>');
      }
      o.push('</section>');
    }
    // Linkit: Gramática (sanan oma sivu kuten kuplassa: olla → ”o verbo olla”; muuten verbityyppi tai sanalaji),
    // sanaston sivu ja Treeni (oppitunnin kielioppikortin paketit tälle sanalle, muuten oppitunnin Treeni).
    const omaSivu = (KA().SANASIVUT || {})[id];
    const [sivuG, nimiG] = omaSivu || [L.gramatica, r.l === 'verbi' && r.t ? KA().TYYPIT[r.t.tyyppi] || L.nimi : L.nimi];
    const linkit = [];
    if (sivuG && gramaticaOlemassa(sivuG)) linkit.push(`<a href="#${esc(sivuG)}">Gramática: ${esc(omaSivu ? nimiG : lyhyesti(nimiG))} →</a>`);
    if (r.o && onOppitunti(r.o)) linkit.push(`<a href="#${esc(r.o)}-vocabulario">Vocabulário da lição →</a>`);
    const TR = window.Treeni;
    if (TR && r.o && onOppitunti(r.o)) {
      const ot = (K().oppitunnit || []).find(x => x.id === r.o) || {};
      const kortti = (ot.kielioppi || []).find(k => k.id === id && Array.isArray(k.treeni) && k.treeni.length);
      const paketit = kortti ? kortti.treeni.map(t => TR.hae(t)).filter(Boolean) : [];
      if (paketit.length) for (const pk of paketit) linkit.push(`<a href="#treino-${esc(pk.id)}">Treino: ${esc(pk.otsikko)} →</a>`);
      else if (TR.oppitunnin && TR.oppitunnin(r.o).length) linkit.push(`<a href="#treino-${esc(r.o)}">Treino da lição →</a>`);
    }
    if (linkit.length) o.push(`<p class="kk-linkit">${linkit.join('')}</p>`);
    o.push('</div></article>');
    return o.join('');
  }

  return { data, html, sivu, aa, korosta, paneeliHtml, nollaaEsiintymat() { esiintymat = null; } };
})();
