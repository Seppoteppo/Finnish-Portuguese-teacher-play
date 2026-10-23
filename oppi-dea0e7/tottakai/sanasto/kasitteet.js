/* Tottakai: käsitetaulu ja vakiomäärä (docs/arkisto/SANASTOJARJESTELMA.md, sopimus tottakai/sanasto/README.md).
   AINOA paikka, jossa kuplan ja sanasivun kielioppinimet, sanalajien nimet, Gramática-linkit ja vakiomäärä on
   määritelty. Generaattori (assets/kupla.js), sanasivu ja tarkistukset lukevat vain tätä. Nimissä {a} = a tai ä
   sanan vokaalisoinnun mukaan. */
window.Kasitteet = (function () {
  'use strict';

  // Sanalajit: nimi kuplassa (portugaliksi), värin CSS-luokka, Gramática-sivu.
  const LUOKAT = {
    verbi: { nimi: 'verbo', vari: 'l-verbi', gramatica: 'h-verbityypit' },
    kielto: { nimi: 'verbo de negação', vari: 'l-verbi', gramatica: 'h-kielto' },
    substantiivi: { nimi: 'substantivo', vari: 'l-subs', gramatica: 'h-sijat' },
    adjektiivi: { nimi: 'adjetivo', vari: 'l-adj', gramatica: 'h-sijat' },
    pronomini: { nimi: 'pronome', vari: 'l-pron', gramatica: 'h-pronominit' },
    numeraali: { nimi: 'número', vari: 'l-num', gramatica: 'h-luvut' },
    paikka: { nimi: 'nome de lugar', vari: 'l-nimi', gramatica: 'h-paikallissijat' },
    henkilo: { nimi: 'nome de pessoa', vari: 'l-nimi', gramatica: 'h-sijat' },
    nimi: { nimi: 'nome próprio', vari: 'l-nimi', gramatica: 'h-sijat' },
    ilmaus: { nimi: 'expressão', vari: 'l-expr', gramatica: 'h-fraasit' },
    rakenne: { nimi: 'frase pronta', vari: 'l-expr', gramatica: 'h-fraasit' },
    taipumaton: { nimi: 'palavra fixa', vari: 'l-fixa', gramatica: null },
    paikkasana: { nimi: 'advérbio de lugar', vari: 'l-fixa', gramatica: 'h-osoittavat' },
    puhe: { nimi: 'falado', vari: 'l-fala', gramatica: 'h-puhekieli' },
    kone: { nimi: 'tradução automática', vari: 'l-kone', gramatica: null }
  };

  const PERSOONAT = ['1s', '2s', '3s', '1p', '2p', '3p'];
  const PERSOONA = { '1s': 'eu', '2s': 'você', '3s': 'ele, ela', '1p': 'nós', '2p': 'vocês', '3p': 'eles, elas' };
  const PRONOMINI = { '1s': 'minä', '2s': 'sinä', '3s': 'hän', '1p': 'me', '2p': 'te', '3p': 'he' };

  /* Solut: tunniste → { nimi, gramatica }. Verbin persoonasolut (prees.1s, kys.3p, imperf.1s …) muodostetaan
     funktiolla solu() persoonasta ja ajasta, joten niitä ei luetella erikseen. */
  const AJAT = {
    prees: { nimi: 'presente', gramatica: null },                                  // null = verbityypin sivu
    kys: { nimi: 'pergunta (-ko/-kö)', gramatica: 'h-kysymys' },
    imperf: { nimi: 'pretérito (falei, falava)', gramatica: 'h-imperfekti', selko: 'passado' },
    kond: { nimi: '“…ria” (condicional)', gramatica: 'h-aikamuodot', selko: 'forma educada “…ria”' }
  };
  const SOLUT = {
    // verbit, persoonattomat solut
    kielto: { nimi: 'forma negativa (após en, ei, älä)', gramatica: 'h-kielto' },
    vartalo: { nimi: 'radical (sem terminação)', gramatica: 'h-verbityypit' },
    'imper.2s': { nimi: 'ordem para você (imperativo)', gramatica: 'h-imperatiivi', kielto: 'ordem negativa para você (älä + forma negativa)', selko: 'ordem para você' },
    'imper.2p': { nimi: 'ordem para vocês (imperativo)', gramatica: 'h-imperatiivi', kielto: 'ordem negativa para vocês (älkää …)', selko: 'ordem para vocês' },
    'imper.neg.2p': { nimi: 'ordem negativa para vocês (älkää …)', gramatica: 'h-kielto' },
    pass: { nimi: 'passivo (impessoal: “…-se”; na fala, nós)', gramatica: 'h-passiivi', selko: 'impessoal: “…-se”' },
    'pass.kielto': { nimi: 'passivo negativo (ei …: ei saunota)', gramatica: 'h-passiivi', selko: 'impessoal negativo: “não se …”' },
    'part.yks': { nimi: 'particípio passado (en …, olen …)', gramatica: 'h-aikamuodot', selko: 'forma do passado (en …, olen …)' },
    'part.mon': { nimi: 'particípio passado, plural (emme …)', gramatica: 'h-aikamuodot', selko: 'forma do passado, plural (emme …)' },
    // nominit
    nom: { nimi: 'forma básica', gramatica: null },
    gen: { nimi: 'de … (genitivo) -n', gramatica: 'h-sijat', selko: 'de …, de quem? -n' },
    part: { nimi: 'parte, quantidade (partitivo)', gramatica: 'h-partitiivi', selko: 'parte, quantidade' },
    acc: { nimi: 'objeto inteiro (acusativo) -t', gramatica: 'h-sijat', selko: 'objeto inteiro -t' },
    ill: { nimi: 'para dentro: para onde? (ilativo)', gramatica: 'h-paikallissijat', aika: 'até quando? (ilativo)', selko: { nimi: 'para dentro: para onde?', aika: 'até quando?' } },
    ines: { nimi: 'dentro: onde? -ss{a} (inessivo)', gramatica: 'h-paikallissijat', aika: 'quando? em … -ss{a} (inessivo)', selko: { nimi: 'dentro: onde? -ss{a}', aika: 'quando? em …' } },
    ela: { nimi: 'de dentro: de onde? -st{a} (elativo)', gramatica: 'h-paikallissijat', aika: 'desde quando? -st{a} (elativo)', selko: { nimi: 'de dentro: de onde? -st{a}', aika: 'desde quando?' } },
    ade: { nimi: 'em, junto: onde? -ll{a} (adessivo)', gramatica: 'h-paikallissijat', selko: { nimi: 'em, junto: onde? -ll{a}', omistaja: 'quem tem? -ll{a}' } },
    abl: { nimi: 'de onde? -lt{a} (ablativo)', gramatica: 'h-paikallissijat', selko: 'de onde?, de quem? -lt{a}' },
    all: { nimi: 'para onde?, para quem? -lle (alativo)', gramatica: 'h-paikallissijat', selko: 'para onde?, para quem? -lle' },
    ess: { nimi: 'como? na qualidade de … -n{a} (essivo)', gramatica: 'h-essiivi', aika: 'quando? -n{a} (essivo)', selko: { nimi: 'como? na qualidade de …', aika: 'quando?' } },
    transl: { nimi: 'vira, fica … -ksi (translativo)', gramatica: 'h-essiivi', kieli: 'em (língua): suomeksi = em finlandês -ksi (translativo)', selko: { nimi: 'vira, fica …', kieli: 'em (língua): suomeksi = em finlandês' } },
    'mon.nom': { nimi: 'plural -t', gramatica: 'h-monikko', selko: 'mais de um (plural)' },
    'mon.gen': { nimi: 'plural: de … (genitivo)', gramatica: 'h-monikko', selko: 'plural: de …' },
    'mon.part': { nimi: 'plural: parte, quantidade (partitivo)', gramatica: 'h-monikko', selko: 'plural: parte, quantidade' },
    'mon.ines': { nimi: 'plural: onde? (inessivo)', gramatica: 'h-monikko', selko: 'plural: onde?' },
    // monikon muut sijat: Gramática h-monikko (A5-M5: kuplasta ei linkkiä h-sijatauluun)
    'mon.ela': { nimi: 'plural: de onde? (elativo)', gramatica: 'h-monikko', selko: 'plural: de onde?' },
    'mon.ill': { nimi: 'plural: para onde? (ilativo)', gramatica: 'h-monikko', selko: 'plural: para onde?' },
    'mon.ade': { nimi: 'plural: em, junto: onde? (adessivo)', gramatica: 'h-monikko', selko: 'plural: em, junto: onde?' },
    'mon.abl': { nimi: 'plural: de onde?, de quem? (ablativo)', gramatica: 'h-monikko', selko: 'plural: de onde?, de quem?' },
    'mon.all': { nimi: 'plural: para onde?, para quem? (alativo)', gramatica: 'h-monikko', selko: 'plural: para onde?, para quem?' },
    'mon.ess': { nimi: 'plural: como? (essivo)', gramatica: 'h-monikko', selko: 'plural: como?' },
    'mon.transl': { nimi: 'plural: vira …, fica … (translativo)', gramatica: 'h-monikko', selko: 'plural: vira …, fica …' },
    'mon.abess': { nimi: 'plural: sem … (abessivo)', gramatica: 'h-monikko', selko: 'plural: sem …' },
    'poss.1s': { nimi: 'meu, minha (-ni)', gramatica: 'h-pronominit', selko: 'meu, minha' },
    'poss.2s': { nimi: 'seu, sua: de você (-si)', gramatica: 'h-omistusliitteet', selko: 'seu, sua (de você)' },
    'poss.3': { nimi: 'dele, dela, deles (-nsa/-nsä)', gramatica: 'h-omistusliitteet', selko: 'dele, dela, deles' },
    'poss.1p': { nimi: 'nosso, nossa (-mme)', gramatica: 'h-omistusliitteet', selko: 'nosso, nossa' },
    'poss.2p': { nimi: 'de vocês (-nne)', gramatica: 'h-omistusliitteet', selko: 'de vocês' },
    abess: { nimi: 'sem … (abessivo) -tt{a}', gramatica: 'h-sijat', selko: 'sem …' },
    kom: { nimi: 'com os seus … (comitativo) -ine-', gramatica: 'h-sijat', selko: 'com os seus …' },
    instr: { nimi: 'instrutivo (raro, expressões fixas)', gramatica: 'h-sijat', selko: 'forma fixa (expressões)' },
    komp: { nimi: 'mais … (comparativo)', gramatica: 'h-vertailu', selko: 'mais …' },
    sup: { nimi: 'o mais … (superlativo)', gramatica: 'h-vertailu', selko: 'o mais …' },
    jarj: { nimi: 'ordinal', gramatica: 'h-luvut' },
    // nimetty paikkakolmikko (epäsäännöllinen: kotona, kotoa, kotiin; monikko: töissä, töistä, töihin)
    missa: { nimi: 'onde?', gramatica: 'h-paikallissijat' },
    mista: { nimi: 'de onde?', gramatica: 'h-paikallissijat' },
    mihin: { nimi: 'para onde?', gramatica: 'h-paikallissijat' },
    // puhekieli
    'klit.pa': { nimi: 'com ênfase (-pa/-pä)', gramatica: null },
    puhe: { nimi: 'falado', gramatica: 'h-puhekieli' }
  };

  // Verbityyppien linkkiteksti (Gramática: h-verbityypit). Sama tunnistusvihje kuin Gramáticassa.
  const TYYPIT = {
    1: 'tipo 1 (vogal + -a/-ä: puhua)', 2: 'tipo 2 (-da/-dä: syödä)', 3: 'tipo 3 (-lla, -nna, -rra, -sta: tulla)',
    4: 'tipo 4 (vogal + -ta/-tä: haluta)', 5: 'tipo 5 (-ita/-itä: tarvita)', 6: 'tipo 6 (-eta/-etä: vanheta)'
  };

  /* Termit, jotka toistuvat kuplassa, sanasivulla ja Treenissä (yksi termi yhdessä paikassa, auditointi 3 löydös 17). */
  const TERMIT = {
    vaihtelu: 'consoante que muda (gradação)',     // astevaihtelu: kk : k, t : d …
    kieltomuoto: 'forma negativa',                  // kieltomuoto (en puhu); sama sana kuin solun kielto nimessä
    padrao: 'padrão',                               // puhekielisen sanan kirjakielinen vastine: ”padrão: minä”
    kone: 'tradução automática, ainda não revisada', // ydinsana ilman leksikon tietuetta
    johdos: 'de'                                    // ”ordinal de kolme”, ”comparativo de hyvä”
  };

  /* Ydinsanalistan (assets/ydinsanat.js) sanaluokat: kone-kuplan sanalajirivi, kun sanaa ei ole leksikossa. */
  const YDINLUOKAT = {
    v: 'verbo', s: 'substantivo', a: 'adjetivo', adv: 'advérbio', post: 'posposição', prep: 'preposição', conj: 'conjunção',
    pron: 'pronome', num: 'número', interj: 'interjeição', part: 'partícula'
  };

  // Sanat, joilla on oma Gramática-sivu (linkki sanalajin sivun sijaan).
  const SANASIVUT = { olla: ['h-olla', 'o verbo olla'] };

  /* Paikkakolmikko tietueen paikka-kentän mukaan (sopimus, kohta Tietue). */
  const KOLMIKKO = {
    sisa: ['ines', 'ela', 'ill'],
    ulko: ['ade', 'abl', 'all'],
    kieli: ['transl'],
    aika: ['ess']
  };

  /* Vakiomäärä: mitä tietueessa on oltava (pakolliset) ja mitä paneeli näyttää (solut järjestyksessä).
     'kolmikko' = KOLMIKKO[paikka] tai nimetty kolmikko missa/mista/mihin. */
  const VAKIOMAARA = {
    verbi: { pakolliset: ['t.tyyppi', 't.p1s', 't.p3s', 't.p3p', 't.i3s'], paneeli: ['persoonat', 'kielto', 'imperf.3s'] },
    kielto: { pakolliset: ['t.1s', 't.2s', 't.3s', 't.1p', 't.2p', 't.3p'], paneeli: ['kieltopersoonat'] },
    substantiivi: { pakolliset: ['t.gen', 't.part', 't.ill', 't.mpart', 'paikka'], paneeli: ['nom', 'gen', 'part', 'mon.part', 'kolmikko'] },
    adjektiivi: { pakolliset: ['t.gen', 't.part', 't.ill', 't.mpart', 'vert'], paneeli: ['nom', 'gen', 'part', 'mon.part', 'komp', 'sup'] },
    numeraali: { pakolliset: ['t.gen', 't.part', 't.jarj'], paneeli: ['nom', 'gen', 'part', 'jarj'] },
    pronomini: { pakolliset: ['t'], paneeli: ['nom', 'solut'] },
    paikka: { pakolliset: ['t.gen', 't.part', 't.ill', 'paikka'], paneeli: ['kolmikko'] },
    henkilo: { pakolliset: ['t.gen', 't.all'], paneeli: ['hahmo', 'gen', 'all'] },
    nimi: { pakolliset: ['t.gen'], paneeli: ['gen', 'kolmikko'] },
    ilmaus: { pakolliset: ['osat'], paneeli: ['osat'] },
    rakenne: { pakolliset: ['osat'], paneeli: ['osat', 'kaava'] },
    taipumaton: { pakolliset: [], paneeli: [] },
    paikkasana: { pakolliset: ['paikka'], paneeli: ['kolmikko'] },   // täällä/täältä/tänne, siellä…, tuolla…
    puhe: { pakolliset: ['kirja'], paneeli: [] }
  };
  // Pronominien solujärjestys (paneeli näyttää tietueen t-kentän solut tässä järjestyksessä).
  const PRONOMINISOLUT = ['gen', 'part', 'acc', 'ines', 'ela', 'ill', 'ade', 'abl', 'all'];

  const sointu = (teksti, h) => teksti.replace(/\{a\}/g, h === 'ä' ? 'ä' : 'a');
  /* solu(tunniste, h, kaytto) → { nimi, gramatica } | null. h = vokaalisointu ('a' / 'ä'): kutsuja antaa sen NÄYTETYSTÄ
     muodosta (kenellä → -llä), ei tunnisteesta. kaytto (valinnainen) valitsee nimen sanan käytön mukaan:
     'aika' (ajan sanat: marraskuussa = quando?, maanantaina), 'kieli' (kielet: suomeksi = em finlandês),
     'kielto' (kieltoverbin persoonamuodot: en = eu, ei aikamuotoa). Ilman vaihtoehtoa käytetään perusnimeä. */
  function solu(id, h, kaytto) {
    const m = id.match(/^(prees|kys|imperf|kond)\.(1s|2s|3s|1p|2p|3p)$/);
    if (m && kaytto === 'kielto' && m[1] === 'prees') return { nimi: PERSOONA[m[2]], gramatica: SOLUT.kielto.gramatica };
    if (m) return { nimi: `${PERSOONA[m[2]]} · ${AJAT[m[1]].nimi}`, gramatica: AJAT[m[1]].gramatica };
    const s = SOLUT[id];
    if (!s) return null;
    const nimi = (kaytto && typeof s[kaytto] === 'string') ? s[kaytto] : s.nimi;
    return { nimi: sointu(nimi, h), gramatica: s.gramatica };
  }

  /* Opetusjärjestys (auditointi 5: A5-M3 kohta 2, A5-M5). Solu → oppitunti, jossa sija tai aikamuoto opetetaan
     (docs/SUUNNITELMA.md §3–4, assets/sisallys.js). Aiemmalla oppitunnilla kupla näyttää muodosta merkityksen ja
     selkokielisen nimen (selko(): ei sijan nimeä), maininnan ”tema da lição N” ja Gramática-linkin lyhyeen johdantoon
     (johdanto(): h-paikallissijat, h-sijat, h-aikamuodot, h-monikko …), ei koskaan h-sijatauluun. Ei piilotettuja osia.
     Arvo: oppitunti | [oletus, { sanalaji: oppitunti }] | null (vain Gramáticassa, kurssi ei opeta). Solu, jota taulussa
     ei ole (nom, jarj, missa ilman kolmikkoa …), ei rajoitu. Aikamuodot: AJAT-avain (prees.1s → prees). */
  const OPETUS = {
    prees: 't01', kys: 't01', kielto: 't01', vartalo: 't02', imperf: 't13', kond: 't15',
    'imper.2s': 't09', 'imper.2p': 't14', 'imper.neg.2p': 't14', 'part.yks': 't15', 'part.mon': 't15', pass: 't20', 'pass.kielto': 't20',
    part: 't03', gen: 't05', acc: 't12',
    ines: 't06', ela: 't06', ill: 't06', missa: 't06', mista: 't06', mihin: 't06',
    ade: ['t07', { pronomini: 't05', henkilo: 't05' }],   // minulla on, Purjolla on (lição 5); paikka -lla (lição 7)
    abl: 't07', all: 't07', ess: 't16', transl: 't16',
    'mon.nom': 't09', 'mon.part': 't11', 'mon.gen': 't17', 'mon.ines': 't19', 'mon.ela': 't19', 'mon.ill': 't19',
    'mon.ade': 't19', 'mon.abl': 't19', 'mon.all': 't19', 'mon.ess': 't19', 'mon.transl': 't19', 'mon.abess': null,
    komp: 't11', sup: 't11', 'poss.1s': 't17', 'poss.2s': 't17', 'poss.3': 't17', 'poss.1p': 't17', 'poss.2p': 't17', abess: null, kom: null, instr: null
  };
  /* Oppitunnin järjestysluku (T15.9, A6-09): paikka oppituntien ainoassa järjestyksessä assets/profiili.js jarjestys
     (t00 = 0 … t05 = 5, k01 = 6, t06 = 7 …); osan tai sivun tunniste (t06-b, t06-quiz) = oppitunnin luku. Luvut ovat vain
     vertailua varten (pienempi = aiemmin). Tuntematon → null. Ilman profiilia (Node-työkalu, joka ei lataa profiili.js:ää)
     vanha laskutapa t00 = 0, k01 = 5,5, t06 = 6 …, jossa järjestys on sama. */
  function jarjestys(id) {
    const m = String(id || '').match(/^([tk])(\d\d)/);
    if (!m) return null;
    const K0 = typeof Kurssi !== 'undefined' ? Kurssi : (typeof window !== 'undefined' ? window.Kurssi : null);
    const J = K0 && K0.profiili && K0.profiili.jarjestys;
    if (J && J.length) { const i = J.indexOf(m[0]); return i < 0 ? null : i; }
    return m[1] === 't' ? Number(m[2]) : Number(m[2]) * 5 + 0.5;
  }
  /* opetus(solu, l, ctx) → oppitunti, jossa solu opetetaan | null (ei kurssilla) | undefined (ei rajoitusta).
     l = sanalaji (pronomini, henkilo …); ctx.seur[0] === 'on' adessiivin jälkeen = omistaja (äidillä on, lição 5). */
  function opetus(id, l, ctx) {
    const m = String(id).match(/^(prees|kys|imperf|kond)\./);
    let o = OPETUS[m ? m[1] : id];
    if (o === undefined) return undefined;
    if (Array.isArray(o)) o = (l && o[1][l]) || o[0];
    if (id === 'ade' && omistaja(null, ctx)) o = 't05';
    return o;
  }
  /* opetettu(solu, oppitunti, l, ctx) → onko solu opetettu oppitunnilla `oppitunti` tai ennen. Ilman oppituntia: true. */
  function opetettu(id, oppitunti, l, ctx) {
    const o = opetus(id, l, ctx);
    if (o === undefined) return true;
    const nyt = jarjestys(oppitunti);
    if (nyt === null) return true;
    return o !== null && jarjestys(o) <= nyt;
  }
  // Adessiivi omistajana (minulla on, Purjolla on, äidillä on): pronomini tai henkilö, tai heti perässä on.
  const omistaja = (l, ctx) => l === 'pronomini' || l === 'henkilo' || !!(ctx && Array.isArray(ctx.seur) && String(ctx.seur[0] || '').toLowerCase() === 'on');
  /* selko(solu, h, kaytto, l, ctx) → selkokielinen nimi ilman kieliopin termiä (”dentro: onde? -ssa”, ”eu · passado”,
     adessiivi omistajana ”quem tem? -lla”). */
  function selko(id, h, kaytto, l, ctx) {
    if (id === 'ade' && omistaja(l, ctx)) kaytto = 'omistaja';
    const m = String(id).match(/^(prees|kys|imperf|kond)\.(1s|2s|3s|1p|2p|3p)$/);
    if (m && kaytto === 'kielto' && m[1] === 'prees') return PERSOONA[m[2]];
    if (m) return `${PERSOONA[m[2]]} · ${AJAT[m[1]].selko || AJAT[m[1]].nimi}`;
    const s = SOLUT[id];
    if (!s) return null;
    const sk = s.selko;
    const nimi = (sk && typeof sk === 'object') ? ((kaytto && sk[kaytto]) || sk.nimi) : (sk || ((kaytto && typeof s[kaytto] === 'string') ? s[kaytto] : s.nimi));
    return sointu(nimi, h);
  }
  /* johdanto(solu) → Gramática-sivu ennen opetusta: lyhyt johdanto (johdanto-kenttä), muuten solun oma sivu;
     verbin aikamuodot h-aikamuodot. Ei koskaan h-sijataulu (A5-M5). */
  function johdanto(id) {
    const m = String(id).match(/^(prees|kys|imperf|kond)\./);
    if (m) return AJAT[m[1]].gramatica || 'h-aikamuodot';
    const s = SOLUT[id];
    if (!s) return null;
    if (s.johdanto) return s.johdanto;
    return s.gramatica === 'h-sijataulu' ? 'h-sijat' : s.gramatica;
  }

  return { SANASIVUT, LUOKAT, PERSOONAT, PERSOONA, PRONOMINI, AJAT, SOLUT, TYYPIT, KOLMIKKO, VAKIOMAARA, PRONOMINISOLUT, TERMIT, YDINLUOKAT, OPETUS, solu, jarjestys, opetus, opetettu, selko, johdanto };
})();
