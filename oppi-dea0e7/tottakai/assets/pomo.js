/* Tottakai: pomotaistelut kertausten lopussa (docs/PELILLISTAMINEN.md §4). VAKIOMALLI kaikille pomoille: §4.1
   (omistaja 20.10.2026; uusi pomo noudattaa sitä, K1 on viitetoteutus). Ensimmäinen pomo: K1 Partitiivipeto
   (”syö yksiköt ja sylkee partitiiveja”); sama koneisto K2–K4:lle (Pomo.pomot-tauluun uusi pomo: kuva, tee, palkinto).
   - Taistelu on koko ruudun areena (aloita → avaa). Pomo tulee jatkuvasti kohti katsojaa ja kasvaa. Oikea vastaus =
     osuma: elämäpalkki laskee ja pomo perääntyy vähän. Väärä vastaus: pomo syöksähtää lähemmäs, oikea muoto ja yhden
     rivin sääntö näytetään. Tarkemmin areenan kommentissa alempana.
   - Kirjoitustila tietokoneelle (a = ä ja o = ö hyväksytään, kuten muualla), napautustila puhelimelle (vaihtoehdot;
     KAYTANNOT H1/H2: jokainen väärä vaihtoehto on saman sanan oikea muoto, joka eroaa yhdellä asialla, ei kirjoitusvirheitä).
     Oletus (AV-027, 20.10.2026): kirjoitus päällä kaikilla laitteilla; valinta näkyy ensimmäisen tappion jälkeen.
   - Ajastimeton tila on oletus (pomo hiipii vain kattoon asti); ”Com relógio” -valinnalla se hiipii nopeammin eikä pysähdy.
   - Kysymykset tehdään leksikosta (Sanasto.paradigma: tallennetut tunnusmuodot, ei arvausta) ja vain sanoista, jotka
     opetettiin ennen kertausta (oppituntien sanasto-listat ja tietueet, joiden o on ennen kertausta profiilin järjestyksessä).
   - Voitto: mandariinit app.js:n funktiolla (apu.lisaaMandariineja; sama kuin Treeni), voitto muistiin
     localStorage 'tottakai-pomo-<id>' (try/catch), saarelle palkinto (Pomo.palkinnot(), app.js naytaIlha).
   - Jokainen vastaus tuloslokiin (apu.kirjaaTulos tai window.Tulokset.kirjaa, suojattuna).
   - prefers-reduced-motion: ei liikettä (tottakai.css, Pomotaistelu).
   - Tarina (omistaja 17.10.2026): Capivara ja Peixe-boi pyytävät Maiaa avuksi saarelle ilmestynyttä petoa vastaan ja
     antavat hänelle aurinkolasit (yksi kaksikolle piirretyistä neljästä mallista, joka taisteluun eri pari: LASIT).
     Maia pitää laseja vain pomotaisteluissa (areena, esittely .pomo-lahja, turvapaikka, voitto) ja saaren juhlissa
     (silloin myös mandariini päässä). Jos peto ehtii Maian luo, se saa hänet (syöksy, silmät sulkeutuvat), ja Maia
     herää saaren riippumatosta: kaksikko pelasti hänet. ”Tentar de novo” (loputtomasti, ei rangaistusta) tai
     ”Voltar ao livro”. Voitto tulee viime tingassa: hidastettu loppuisku, konfetti, fanfaari, Capivaran juhlarepliikki,
     mandariinit ja juhlat rantatalolla saarella (Pomo.juhla, app.js naytaIlha). Äänitehosteet: Aanet (Web Audio).
   Käyttö: app.js kutsuu oppitunnin piirron jälkeen Pomo.aloita(<div class="pomo" data-pomo="k01">, apu). Sivun
   <div class="pomo-lahja" data-pomo="k01"> (esittelykohtaus ennen lämmittelyä) saa samalla lasien luovutuskuvan. */
(function () {
  'use strict';
  const S = window.Sanasto;
  const K = window.Kurssi;
  const ETULIITE = 'tottakai-';
  const sekoita = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const arpa = a => a[Math.floor(Math.random() * a.length)];
  const lue = (k, oletus) => { try { const v = localStorage.getItem(ETULIITE + k); return v === null ? oletus : JSON.parse(v); } catch (e) { return oletus; } };
  const kirjoita = (k, v) => { try { localStorage.setItem(ETULIITE + k, JSON.stringify(v)); } catch (e) { /* yksityinen ikkuna: ei muistia */ } };
  const pieni = s => String(s || '').trim().toLowerCase();
  const isolla = s => s.charAt(0).toUpperCase() + s.slice(1);
  const LUVUT = ['nolla', 'yksi', 'kaksi', 'kolme', 'neljä', 'viisi', 'kuusi', 'seitsemän', 'kahdeksan', 'yhdeksän', 'kymmenen'];

  /* Sanat, jotka oppija on nähnyt ennen kertausta: profiilin järjestyksessä ennen kertauksen id:tä olevat oppitunnit. */
  function opetetut(asti) {
    const jarj = (K.profiili && K.profiili.jarjestys) || K.oppitunnit.map(o => o.id);
    const i = jarj.indexOf(asti);
    const ennen = new Set(i < 0 ? jarj : jarj.slice(0, i));
    const ids = new Set();
    for (const o of K.oppitunnit) if (ennen.has(o.id)) (o.sanasto || []).forEach(k => ids.add(k));
    for (const r of S.kaikki()) if (r.o && ennen.has(r.o)) ids.add(r.id);
    return ids;
  }
  const muodot = id => { try { return S.hae(id) ? S.paradigma(id) : null; } catch (e) { return null; } };

  /* ---------- Partitiivipeto (K1): kysymykset ---------- */
  // [sana, portugaliksi]; lauseet ja vihjeet portugaliksi kiinnittävät merkityksen (H1), testattava on muoto.
  // Lauseiden tarkistus 21.10.2026 (omistaja: ”jos se ei ole järkevää oikeassa elämässä, pois”): jokaisella sanalla omat
  // luvut, joita ihminen oikeasti sanoo (ei *Kymmenen kakkua, kiitos*, *Minulla on kahdeksan autoa*); pois paketti ja
  // kilo (mitä?), kuva, sakko ja kortti lukulauseista, Sinulla (toiselle hänen omasta perheestään kertominen on outoa).
  const OSTOS = ['pulla', 'korvapuusti', 'hampurilainen', 'kakku', 'kahvi', 'tee', 'mehu', 'kassi'];
  const OMAT = ['euro', 'auto', 'kissa', 'poika', 'tytär', 'sisko', 'veli', 'lapsi', 'puhelin'];
  const LUVUT_SANALLE = { pulla: [1, 2, 3, 4], korvapuusti: [1, 2, 3, 4], hampurilainen: [1, 2, 3], kakku: [1], kahvi: [1, 2, 3, 4],
    tee: [1, 2, 3], mehu: [1, 2, 3], kassi: [1, 2], euro: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], auto: [1, 2], kissa: [1, 2, 3],
    poika: [1, 2, 3], tytär: [1, 2, 3], sisko: [1, 2, 3], veli: [1, 2, 3], lapsi: [1, 2, 3, 4], puhelin: [2] };
  const PYYNTO = ['kahvi', 'tee', 'vesi', 'maito', 'mehu', 'kakku', 'pulla', 'leipä', 'juusto', 'suklaa', 'suklaakakku'];
  const ESINE = ['auto', 'sisko', 'veli', 'kissa', 'puhelin', 'kortti', 'kassi', 'tytär', 'poika'];
  const OMISTAJAT = ['Minulla', 'Hänellä'];
  const SUKU = [['Purjo on ___ äiti.', 'Jay'], ['Hiisi on ___ veli.', 'Jay'], ['Walker on ___ isä.', 'Maia'],
    ['Marta on ___ äiti.', 'Maia'], ['Tämä on ___ auto.', 'Hiisi'], ['Jay on ___ poika.', 'Purjo']];
  const SAANTO = {
    luku: 'a partir de 2, partitivo singular (kaksi pullaa); com 1, forma básica (yksi pulla).',
    pyynto: 'ao pedir sem número, a coisa vai no partitivo: Saisinko kahvia? Haluaisin teetä.',
    kielto: 'no negativo de “ter”, a coisa vai no partitivo: Minulla ei ole autoa.',
    omistus: 'no positivo de “ter”, forma básica: Minulla on auto.',
    genetiivi: 'de quem? Genitivo -n, antes da coisa: Jayn äiti.'
  };
  const merkitys = id => { const r = S.hae(id); return r && r.pt ? r.pt[0] : ''; };

  function partitiivipeto(sanat) {
    const ok = (lista, ...solut) => lista.filter(id => sanat.has(id) && (p => p && solut.every(s => p[s]))(muodot(id)));
    const pool = {
      ostos: ok(OSTOS, 'nom', 'part', 'gen'), omat: ok(OMAT, 'nom', 'part', 'gen'),
      pyynto: ok(PYYNTO, 'nom', 'part', 'gen'), esine: ok(ESINE, 'nom', 'part', 'gen'),
      // Myönteinen omistus ilman puhelinta (*Minulla on puhelin.* on itsestään selvä; kielteinen käy: Minulla ei ole puhelinta).
      omistus: ok(ESINE.filter(id => id !== 'puhelin'), 'nom', 'part', 'gen')
    };
    const miksiPart = (p, miksi) => {
      miksi[pieni(p.nom)] = `${p.nom} é a forma básica; aqui vem o partitivo`;
      if (p.gen) miksi[pieni(p.gen)] = `${p.gen} é o genitivo (-n, de quem?), não o partitivo`;
    };
    const tekijat = [
      // Lukusana + substantiivi: 2–10 → partitiivi; joskus 1 → perusmuoto (ajatus pysyy hereillä).
      [35, () => {
        const ostos = Math.random() < 0.55 && pool.ostos.length;
        const id = arpa(ostos ? pool.ostos : pool.omat);
        if (!id) return null;
        const p = muodot(id);
        // Vain sanan omat luvut (LUVUT_SANALLE); 1 noin 15 %:ssa, jos se on sanalle luonteva.
        const luvut = LUVUT_SANALLE[id] || [2, 3];
        const yli1 = luvut.filter(x => x > 1);
        const n = (luvut.includes(1) && (Math.random() < 0.15 || !yli1.length)) ? 1 : arpa(yli1);
        const oikea = n === 1 ? p.nom : p.part;
        const miksi = {};
        if (n === 1) {
          miksi[pieni(p.part)] = `${p.part} é partitivo: só a partir de 2; com 1, forma básica`;
          if (p.gen) miksi[pieni(p.gen)] = `${p.gen} é o genitivo (-n, de quem?): depois de número, não`;
        } else {
          miksiPart(p, miksi);
          if (p['mon.part']) miksi[pieni(p['mon.part'])] = `${p['mon.part']} é o partitivo plural; depois de número, singular`;
        }
        const luku = LUVUT[n];
        const lause = ostos ? `${isolla(luku)} ___, kiitos.` : `Minulla on ${luku} ___.`;
        return { laji: 'luku', lause, vihje: id, oikea, harhat: n === 1 ? [p.part, p.gen] : [p.nom, p.gen, p['mon.part']], miksi };
      }],
      // Pyyntö: Saisinko ___? / Haluaisin ___. → partitiivi. Ei monikon partitiivia (Haluaisin pullia olisi oikein).
      [25, () => {
        const id = arpa(pool.pyynto);
        if (!id) return null;
        const p = muodot(id);
        const miksi = {};
        miksiPart(p, miksi);
        if (p.ill) miksi[pieni(p.ill)] = `${p.ill} é para dentro (para onde?), não o partitivo`;
        return { laji: 'pyynto', lause: arpa(['Saisinko ___?', 'Haluaisin ___.']), vihje: id, oikea: p.part, harhat: [p.nom, p.gen, p.ill], miksi };
      }],
      // Kielteinen omistus: Minulla ei ole ___. → partitiivi. Ei monikon partitiivia (Minulla ei ole autoja olisi oikein).
      [20, () => {
        const id = arpa(pool.esine);
        if (!id) return null;
        const p = muodot(id);
        const miksi = {};
        miksiPart(p, miksi);
        if (p.ade) miksi[pieni(p.ade)] = `${p.ade} é quem tem (-lla/-llä), não a coisa`;
        return { laji: 'kielto', lause: `${arpa(OMISTAJAT)} ei ole ___.`, vihje: id, oikea: p.part, harhat: [p.nom, p.gen, p.ade], miksi };
      }],
      // Myönteinen omistus ilman lukua: perusmuoto (vastapari kiellolle).
      [10, () => {
        const id = arpa(pool.omistus);
        if (!id) return null;
        const p = muodot(id);
        const miksi = {};
        miksi[pieni(p.part)] = `${p.part} é partitivo; no positivo de “ter”, sem número, forma básica`;
        if (p.gen) miksi[pieni(p.gen)] = `${p.gen} é o genitivo (-n, de quem?), não a forma básica`;
        return { laji: 'omistus', lause: `${arpa(OMISTAJAT)} on ___.`, vihje: id, oikea: p.nom, harhat: [p.part, p.gen], miksi };
      }],
      // Genetiivi: kenen? (oppitunti 5).
      [10, () => {
        const [lause, kuka] = arpa(SUKU.filter(([, k]) => sanat.has(k) && muodot(k) && muodot(k).gen));
        if (!lause) return null;
        const p = muodot(kuka);
        const harhat = [kuka, p.ade || p.all].filter(Boolean);
        const miksi = {};
        miksi[pieni(kuka)] = `${kuka} é a forma básica; de quem? = -n`;
        if (p.ade) miksi[pieni(p.ade)] = `${p.ade} é quem tem (-lla/-llä); de quem? = -n`;
        else if (p.all) miksi[pieni(p.all)] = `${p.all} é para quem (-lle); de quem? = -n`;
        return { laji: 'genetiivi', lause, vihje: kuka, oikea: p.gen, harhat, miksi };
      }]
    ];
    const summa = tekijat.reduce((a, [w]) => a + w, 0);
    return function tee() {
      let r = Math.random() * summa;
      for (const [w, f] of tekijat) { if ((r -= w) <= 0) return f(); }
      return tekijat[0][1]();
    };
  }

  /* ---------- Astevaihtelun kaksipää (K2): kysymykset ----------
     Kaksi päätä: vahva (kauppa, nukkua, äiti, tavata) ja heikko (kaupassa, nukun, äidin). Kysymykset leksikon
     muodoista (oppitunnit 0–10): paikallissijat sisä/ulko tietueen paikka-kentän mukaan (oppitunnit 6–7), illatiivi
     vahvana, verbin persoonat (minä heikko, hän vahva; tyyppi 4 käänteinen: tavata → tapaan), kieltomuoto ja käsky
     (heikko, oppitunti 9), t-monikko (heikko, oppitunti 9) ja täytyy + genetiivi (oppitunti 10). Väärät vaihtoehdot ovat
     saman sanan oikeita muotoja (H1/H2). Listat ovat ehdokkaita: vain opetetut sanat, joilla on tarvittava muoto. */
  // Sanat: oppituntien 6–10 sanat ja aiemmat (K2-kirjoittajan otanta 20.10.2026: sänky, hylly, katto ja koulu pois, koska
  // kaksi sijaa on oikein tai sija on outo; kaappi, tarjotin, portti … mukaan). Opettamaton sana suodattuu pois ajossa.
  // Lauseiden tarkistus 21.10.2026 (omistaja: jokainen lause järkevä oikeassa elämässä; mennä ja tulla vain paikkoihin,
  // joihin mennään arkena): K2_PAIKAT = arjen paikat (kaikki kehykset); K2_MATKAT = matkakohteet vain missä-kehykseen
  // (Hän on Lapissa käy, *Hän menee Lappiin* ja *Hän tulee Lontoosta* eivät). Pois järvi ja joki (*Hän on järvessä*),
  // mökki (luonteva on mökillä, ei mökissä), asunto (*Hän on asunnossa*); kissalta pois lautanen ja tarjotin.
  const K2_PAIKAT = ['kauppa', 'kirjasto', 'ravintola', 'kahvila', 'sauna', 'keittiö', 'parveke', 'metsä', 'kauppahalli',
    'asema', 'toimisto', 'tori', 'Otaniemi', 'lentokenttä', 'portti', 'bussipysäkki', 'sairaala', 'olohuone', 'kylpyhuone',
    'kellari', 'lentokone', 'Oodi'];
  const K2_MATKAT = ['Helsinki', 'Kuusamo', 'Lappi', 'Ruka', 'tunturi', 'kansallispuisto', 'Lissabon', 'Lontoo'];
  const K2_EI_MISTA = ['portti', 'lentokone'];            // *Jay tulee portilta*, *Jay tulee lentokoneesta*
  const K2_ESINEET = ['pöytä', 'matto', 'laukku', 'sohva', 'matkalaukku', 'kassi', 'tuoli', 'kaappi', 'lattia'];
  const K2_EI_HYPPAA = { mista: ['matto', 'lattia'], mihin: ['matto'] };   // *Kissa hyppää lattialta*
  // Verbi ilman objektia: vain verbit, joiden lause on kokonainen jokaisella persoonalla (Minä nukun, Me tiedämme);
  // pois antaa, ottaa, pitää, tavata, palauttaa, sopia, kertoa, unohtaa, oppia (*Hän antaa.*, *Minä tapaan.*) ja
  // liikeverbit ilman paikkaa: lähteä, lentää, muuttaa (*Hän lentää.*, *Minä muutan.*: minne?).
  const K2_VERBIT = ['nukkua', 'tietää', 'ymmärtää', 'lukea', 'odottaa', 'kirjoittaa', 'osata', 'tilata', 'pakata', 'ehtiä'];
  // Kieltolause: verbi ja sallitut persoonat. Vain lauseet, jotka sanotaan sellaisinaan (En ymmärrä. Sinä et ehdi.
  // Hän ei kerro. En unohda.); pois *En anna*, *En pidä*, *En palauta*, liikeverbit *Hän ei lennä*, *En lähde*,
  // *En muuta* ja persoonat, joilla lause tarvitsee yhteyden (*Sinä et nuku*, *Hän ei unohda*).
  const K2_KIELTO = { ymmärtää: ['1s', '2s', '3s'], tietää: ['1s', '2s', '3s'], osata: ['1s', '2s', '3s'], ehtiä: ['1s', '2s', '3s'],
    oppia: ['1s', '2s', '3s'], nukkua: ['1s', '3s'], odottaa: ['1s', '3s'], kertoa: ['1s', '3s'], unohtaa: ['1s'] };
  // Käsky ilman objektia: Kerro nyt! Nuku nyt! Odota nyt! Pakkaa nyt! (pois *Ota nyt* ja liikeverbi *Lähde nyt*).
  const K2_KASKY = ['nukkua', 'odottaa', 'kertoa', 'pakata'];
  // Tässä ovat ___: asiat, jotka ojennetaan tai näytetään; pois *joet*, *parvekkeet*, *portit*, *tyttäret*, *sängyt* …
  const K2_MONIKKO = ['kenkä', 'sukka', 'takki', 'kukka', 'poika', 'hanska', 'pipo', 'kassi', 'paita', 'lomake', 'lippu'];
  const K2_OMISTAJAT = ['poika', 'äiti', 'tytär', 'veli', 'sisko', 'isä', 'lapsi', 'opettaja', 'Jay', 'Maia', 'Hiisi', 'Purjo'];
  const K2_SAANTO = {
    missa: 'onde? = -ssa/-ssä (dentro) ou -lla/-llä (em cima, lugar aberto), com a forma FRACA: kauppa → kaupassa, pöytä → pöydällä.',
    mista: 'de onde? = -sta/-stä ou -lta/-ltä, forma FRACA: kaupunki → kaupungista, ranta → rannalta.',
    mihin: 'para onde? = -aan, -oon, -iin… (dentro, forma FORTE: kauppa → kauppaan) ou -lle (em cima, forma fraca: ranta → rannalle).',
    verbi: 'eu, você, nós, vocês: forma fraca (nukun); ele e eles: forma forte (nukkuu, nukkuvat). Tipo 4 ao contrário: tavata → tapaan.',
    kielto: 'depois de en, et, ei…: a forma fraca sem terminação (en nuku, en ota, en tiedä).',
    kasky: 'a ordem para você é a mesma forma fraca: Nuku! Ota! Odota! (lição 9).',
    monikko: 'plural -t: forma fraca + t (kenkä → kengät, takki → takit); o tipo ao contrário fica forte (tytär → tyttäret).',
    taytyy: 'täytyy: quem precisa vai no genitivo -n, com a forma fraca: poika → pojan täytyy, äiti → äidin täytyy.'
  };
  function kaksipaa(sanat) {
    const KA = window.Kasitteet;
    const nimiSolu = (solu, muoto) => { try { const x = KA.solu(solu, /[aou]/.test(String(muoto)) ? 'a' : 'ä'); return x ? x.nimi : solu; } catch (e) { return solu; } };
    const on = (id, ...solut) => sanat.has(id) && (p => !!p && solut.every(x => p[x]))(muodot(id));
    const tieto = id => S.hae(id) || {};
    const miksiMuodot = (p, oikea, solut) => {
      const m = {};
      for (const x of solut) if (p[x] && pieni(p[x]) !== pieni(oikea) && !m[pieni(p[x])]) m[pieni(p[x])] = `${p[x]} = ${x === 'nom' ? 'forma básica' : nimiSolu(x, p[x])}`;
      return m;
    };
    const kelpaa = lista => lista.filter(id => ['sisa', 'ulko'].includes(tieto(id).paikka) && on(id, 'ines', 'ela', 'ill', 'ade', 'abl', 'all'));
    const paikat = kelpaa(K2_PAIKAT), matkat = kelpaa(K2_MATKAT), esineet = kelpaa(K2_ESINEET);
    const ilman = (lista, pois) => lista.filter(id => !pois.includes(id));
    // Sija tietueen paikan mukaan: sisa → ines/ela/ill, ulko → ade/abl/all.
    const SIJA = { missa: { sisa: 'ines', ulko: 'ade' }, mista: { sisa: 'ela', ulko: 'abl' }, mihin: { sisa: 'ill', ulko: 'all' } };
    // Jokaisella kehyksellä oma lista: matkakohteet vain missä-kehyksessä, kissan hypyt vain järkeviin kohtiin.
    const LAUSE = {
      missa: [['Missä Maia on? Hän on ___.', paikat.concat(matkat)], ['Missä kissa on? Se on ___.', esineet]],
      mista: [['Mistä Jay tulee? Hän tulee ___.', ilman(paikat, K2_EI_MISTA)], ['Mistä kissa hyppää? Se hyppää ___.', ilman(esineet, K2_EI_HYPPAA.mista)]],
      mihin: [['Mihin Maia menee? Hän menee ___.', paikat], ['Mihin kissa hyppää? Se hyppää ___.', ilman(esineet, K2_EI_HYPPAA.mihin)]]
    };
    const sijaKysymys = laji => {
      const vaihtoehdot = LAUSE[laji].filter(([, l]) => l.length);
      if (!vaihtoehdot.length) return null;
      const [lause, lista] = arpa(vaihtoehdot);
      // Kaksipää rakastaa astevaihtelua: sanat, joiden vartalo vaihtuu, kolme kertaa todennäköisemmin.
      const id = arpa(lista.flatMap(x => (S.vaihtelu(x) ? [x, x, x] : [x])));
      const p = muodot(id), paikka = tieto(id).paikka;
      const solu = SIJA[laji][paikka];
      const oikea = p[solu];
      const muut = paikka === 'sisa' ? ['ines', 'ela', 'ill'] : ['ade', 'abl', 'all'];
      const toinen = SIJA[laji][paikka === 'sisa' ? 'ulko' : 'sisa'];
      const harhat = [...muut.filter(x => x !== solu).map(x => p[x]), p[toinen]];
      return { laji, lause, vihje: id, oikea, harhat, miksi: miksiMuodot(p, oikea, [...muut, toinen, 'nom']) };
    };
    const PRON = { '1s': 'Minä', '2s': 'Sinä', '3s': 'Hän', '1p': 'Me', '2p': 'Te', '3p': 'He' };
    // Väärät vaihtoehdot: eri muodot kuin oikea (pienellä vertaillen), enintään kolme.
    const erilaiset = (oikea, lista) => [...new Set(lista.filter(x => x && pieni(x) !== pieni(oikea)))].slice(0, 3);
    const verbit = K2_VERBIT.filter(id => on(id, 'prees.1s', 'prees.3s', 'kielto'));
    const kieltoVerbit = Object.keys(K2_KIELTO).filter(id => on(id, 'prees.1s', 'prees.3s', 'kielto'));
    const kaskyt = K2_KASKY.filter(id => on(id, 'imper.2s', 'prees.1s'));
    const monikot = K2_MONIKKO.filter(id => on(id, 'mon.nom', 'gen', 'mon.part'));
    const omistajat = K2_OMISTAJAT.filter(id => on(id, 'gen'));
    const tekijat = [
      [15, () => sijaKysymys('missa')],
      [10, () => sijaKysymys('mista')],
      [15, () => sijaKysymys('mihin')],
      // Verbin persoona: minä/sinä/me/te heikko, hän/he vahva (tyyppi 4 päinvastoin).
      [20, () => {
        const id = arpa(verbit);
        if (!id) return null;
        const p = muodot(id);
        const k = arpa(['1s', '2s', '3s', '1p', '2p', '3p']);
        const oikea = p['prees.' + k];
        const vastapari = k === '3s' || k === '3p' ? '1s' : '3s';
        const harhat = erilaiset(oikea, [p['prees.' + vastapari], p['prees.' + (k === '2s' ? '1p' : '2s')], p['prees.3p'], id]);
        const miksi = {};
        for (const kk of Object.keys(PRON)) if (kk !== k && p['prees.' + kk] && pieni(p['prees.' + kk]) !== pieni(oikea)) miksi[pieni(p['prees.' + kk])] = `${p['prees.' + kk]} é a forma de ${PRON[kk].toLowerCase()}, não de ${PRON[k].toLowerCase()}`;
        miksi[pieni(id)] = `${id} é o infinitivo (forma do dicionário); aqui o verbo leva a pessoa`;
        return { laji: 'verbi', lause: `${PRON[k]} ___.`, vihje: id, oikea, harhat, miksi };
      }],
      // Kieltomuoto: heikko vartalo (oma lista K2_KIELTO).
      [12, () => {
        const id = arpa(kieltoVerbit);
        if (!id) return null;
        const p = muodot(id);
        const k = arpa(K2_KIELTO[id]);
        const ei = { '1s': 'en', '2s': 'et', '3s': 'ei' }[k];
        const miksi = {};
        miksi[pieni(p['prees.1s'])] = `${p['prees.1s']} tem a terminação de “eu”; depois de ${ei}, sem terminação`;
        miksi[pieni(p['prees.3s'])] = `${p['prees.3s']} é a forma de “ele”; depois de ${ei}, a forma negativa`;
        miksi[pieni(id)] = `${id} é o infinitivo; depois de ${ei}, a forma negativa`;
        // Tyyppi 4: kieltomuoto = hän-muoto (osaa): harhat vain muodoista, jotka eroavat oikeasta.
        const harhat = erilaiset(p.kielto, [p['prees.1s'], p['prees.3s'], p['prees.3p'], id]);
        return { laji: 'kielto', lause: `${PRON[k]} ${ei} ___.`, vihje: id, oikea: p.kielto, harhat, miksi };
      }],
      // Käsky sinälle (oppitunti 9): heikko vartalo.
      [10, () => {
        const id = arpa(kaskyt);
        if (!id) return null;
        const p = muodot(id);
        const oikea = isolla(p['imper.2s']);
        const miksi = {};
        miksi[pieni(p['prees.1s'])] = `${p['prees.1s']} é “eu …”; a ordem não tem terminação`;
        miksi[pieni(p['prees.3s'])] = `${p['prees.3s']} é “ele …”; a ordem é a forma fraca sem terminação`;
        miksi[pieni(id)] = `${id} é o infinitivo; a ordem é a forma fraca sem terminação`;
        const harhat = erilaiset(oikea, [p['prees.1s'], p['prees.3s'], p['prees.3p'], id].map(isolla));
        return { laji: 'kasky', lause: '___ nyt, Jay!', vihje: id, oikea, harhat, miksi };
      }],
      // t-monikko (oppitunti 9).
      [10, () => {
        const id = arpa(monikot);
        if (!id) return null;
        const p = muodot(id);
        return { laji: 'monikko', lause: 'Tässä ovat ___.', vihje: id, oikea: p['mon.nom'], harhat: [p.nom, p.gen, p['mon.part']],
          miksi: miksiMuodot(p, p['mon.nom'], ['nom', 'gen', 'mon.part']) };
      }],
      // täytyy + genetiivi (oppitunti 10).
      [8, () => {
        const id = arpa(omistajat);
        if (!id) return null;
        const p = muodot(id);
        const perus = p.nom || S.nimi(id);
        const harhat = [isolla(perus), p.ade ? isolla(p.ade) : null, p.part ? isolla(p.part) : null].filter(Boolean);
        const miksi = {};
        miksi[pieni(perus)] = `${perus} é a forma básica; com täytyy, quem precisa vai no genitivo -n`;
        if (p.ade) miksi[pieni(p.ade)] = `${p.ade} é “quem tem” (-lla/-llä); com täytyy, genitivo -n`;
        if (p.part) miksi[pieni(p.part)] = `${p.part} é o partitivo; com täytyy, genitivo -n`;
        return { laji: 'taytyy', lause: '___ täytyy lähteä nyt.', vihje: id, oikea: isolla(p.gen), harhat, miksi };
      }]
    ];
    const summa = tekijat.reduce((x, [w]) => x + w, 0);
    return function tee() {
      let r = Math.random() * summa;
      for (const [w, f] of tekijat) { if ((r -= w) <= 0) return f(); }
      return tekijat[0][1]();
    };
  }
  /* ---------- Paikallissijojen kraken (K3): kysymykset ----------
     Kuusi lonkeroa = kuusi paikallissijaa (missä / mistä / mihin × sisä -ssa -sta -Vn ja ulko -lla -lta -lle; oppitunnit
     6–7, kertaus 11–15). Lisäksi postpositio genetiivin kanssa (oppitunti 14: kirkon vieressä), imperfekti kehyksessä
     (oppitunti 13: Mihin menit eilen? – Menin ___.) ja ihmiset -lle/-lta (oppitunti 10). Väärät vaihtoehdot ovat saman
     sanan muita sijoja (H1/H2). Listat ovat ehdokkaita: vain opetetut sanat, joilla on tarvittava muoto. */
  // K3-kirjoittajan otanta 20.10.2026: pois sanat, joilla myös ulkosija on oikein (koulu → koululle, kirkko → kirkolle,
  // hotelli, järvi, sauna) ja sanat ilman tietuetta ennen K3:a (kaupunki, Ouro Preto); mukaan oppituntien 11–14 paikat.
  // Lauseiden tarkistus 21.10.2026 (omistaja: *Mihin menit eilen? Menin Suomeen.* ei ole järkevä: maahan matkustetaan,
  // sinne ei mennä eilen; jokainen lause järkevä oikeassa elämässä). K3_PAIKAT = arjen paikat, joihin mennään päivässä
  // (kaikki kehykset). Maat ja kaupungit vain olemiseen ja kotipaikkaan (Missä Maia on? Hän on Brasiliassa. Mistä sinä
  // tulet? Minä tulen Suomesta.), ei menemiseen. Pois Kuusamo, Lappi, Lissabon ja Confins (eivät kuulu joulun Belo
  // Horizonteen), katu, aukio ja penkki (*Hän on kadulla*, *Menin penkille*), ranta ja toimisto (ei rantaa, lomalla).
  const K3_PAIKAT = ['kauppa', 'kirjasto', 'ravintola', 'kahvila', 'kauppahalli', 'keittiö', 'metsä', 'museo', 'sairaala', 'tori',
    'asema', 'lentokenttä', 'parveke', 'puisto', 'Savassi', 'Mercado Central', 'keskusta', 'pankki', 'bussipysäkki'];
  const K3_OLLAAN = ['Brasilia', 'Belo Horizonte', 'Suomi', 'Helsinki'];   // vain Missä … on? -kehyksiin
  const K3_KOTOISIN = { jay: ['Suomi'], sina: ['Brasilia', 'Belo Horizonte', 'Suomi', 'Helsinki'] };   // Mistä … tulee?
  const K3_EI_EILEN = ['keittiö', 'parveke', 'bussipysäkki'];   // *Mihin menit eilen? Menin keittiöön.*
  // Ihmiset: lahja ja nälkä vain läheisille (ei *Annan lahjan myyjälle*, *Onko lääkärillä nälkä?*); kysyä voi keneltä vain.
  const K3_LAHEISET = ['äiti', 'isä', 'veli', 'sisko', 'Jay', 'Maia', 'Purjo', 'Hiisi', 'Anderson', 'Marta', 'Walker', 'Moara', 'Malu'];
  const K3_IHMISET = K3_LAHEISET.concat(['myyjä', 'opettaja', 'lääkäri', 'Uuno', 'Eenok', 'naapuri']);
  // Postpositiot: jokaisella omat omistajat, joiden luona tai kohdalla oikeasti odotetaan tai käännytään. Maia odottaa
  // kirkon edessä / oven takana / äidin luona; kohdalla on reittiohjeen sana (oppitunti 14: Käänny kirkon kohdalla
  // vasemmalle). Pois ihmiset muista kuin luona (*Maia odottaa Jayn edessä*), huonekalut ja pöytä (*sohvan takana*),
  // auto, ikkuna, palmu ja penkki muualta kuin vieressä, Jay luona-lauseesta (asuvat yhdessä).
  const K3_RAKENNUKSET = ['kauppa', 'kirjasto', 'ravintola', 'kahvila', 'kauppahalli', 'museo', 'kirkko', 'koulu', 'sairaala',
    'hotelli', 'asema', 'pankki', 'apteekki'];
  const K3_POSTPOSITIOT = [
    ['vieressä', 'ao lado de', K3_RAKENNUKSET.concat(['suihkulähde', 'palmu', 'auto', 'ikkuna', 'ovi'])],
    ['edessä', 'na frente de', K3_RAKENNUKSET.concat(['suihkulähde', 'ovi'])],
    ['takana', 'atrás de', ['ovi', 'asema', 'kauppa']],
    // luona: ihmiset, joilla on oma koti (Maian vanhemmat ja Anderson asuvat yhdessä: ei *Walkerin luona*).
    ['luona', 'na casa de, com', ['äiti', 'Purjo', 'Hiisi', 'Moara', 'Malu', 'naapuri']],
    ['lähellä', 'perto de', K3_RAKENNUKSET.concat(['puisto', 'suihkulähde'])],
    ['kohdalla', 'na altura de', K3_RAKENNUKSET]];
  const K3_SAANTO = {
    missa: 'onde? dentro: -ssa/-ssä (kaupassa); em cima, lugar aberto: -lla/-llä (torilla). Forma FRACA.',
    mista: 'de onde? dentro: -sta/-stä (kaupasta); em cima: -lta/-ltä (torilta). Forma FRACA.',
    mihin: 'para onde? dentro: -aan, -oon, -iin…, -han, -hön…, -seen (kauppaan, FORTE); em cima: -lle (torille).',
    ihmiset: 'pessoas usam os casos de fora: Jaylle (para o Jay), äidiltä (da mãe), Purjolla (com a Purjo).',
    postpositio: 'posposição depois do genitivo -n: kirkon vieressä, Maian luona, pankin edessä.',
    menneet: 'mihin menit? → menin + para onde? (-aan, -oon, -iin… ou -lle): Menin kauppaan. Menin torille.'
  };
  function kraken(sanat) {
    const KA = window.Kasitteet;
    const nimiSolu = (solu, muoto) => { try { const x = KA.solu(solu, /[aou]/.test(String(muoto)) ? 'a' : 'ä'); return x ? x.nimi : solu; } catch (e) { return solu; } };
    const on = (id, ...solut) => sanat.has(id) && (p => !!p && solut.every(x => p[x]))(muodot(id));
    const tieto = id => S.hae(id) || {};
    const erilaiset = (oikea, lista) => [...new Set(lista.filter(x => x && pieni(x) !== pieni(oikea)))].slice(0, 3);
    const SIJAT6 = ['ines', 'ela', 'ill', 'ade', 'abl', 'all'];
    const miksiSijat = (p, oikea) => {
      const m = {};
      for (const x of SIJAT6.concat(['nom', 'gen'])) if (p[x] && pieni(p[x]) !== pieni(oikea) && !m[pieni(p[x])]) m[pieni(p[x])] = `${p[x]} = ${x === 'nom' ? 'forma básica' : nimiSolu(x, p[x])}`;
      return m;
    };
    const kelpaa = lista => lista.filter(id => ['sisa', 'ulko'].includes(tieto(id).paikka) && on(id, ...SIJAT6));
    const paikat = kelpaa(K3_PAIKAT), ollaan = kelpaa(K3_OLLAAN);
    const kotoisin = { jay: kelpaa(K3_KOTOISIN.jay), sina: kelpaa(K3_KOTOISIN.sina) };
    const eilen = paikat.filter(id => !K3_EI_EILEN.includes(id));
    const ihmiset = K3_IHMISET.filter(id => on(id, 'gen', 'ade', 'abl', 'all'));
    const laheiset = ihmiset.filter(id => K3_LAHEISET.includes(id));
    // Jokaisella postpositiolla omat omistajat (K3_POSTPOSITIOT); kehyksen subjekti on Maia, joten Maia ei ole omistaja.
    const postpositiot = K3_POSTPOSITIOT.filter(([pp]) => sanat.has(pp))
      .map(([pp, pt, lista]) => [pp, pt, lista.filter(id => id !== 'Maia' && on(id, 'gen'))]).filter(([, , l]) => l.length);
    const SIJA = { missa: { sisa: 'ines', ulko: 'ade' }, mista: { sisa: 'ela', ulko: 'abl' }, mihin: { sisa: 'ill', ulko: 'all' } };
    // Kehys ja sen oma paikkalista: maat ja kaupungit vain olemiseen ja kotipaikkaan, menemiseen vain arjen paikat.
    const KEHYS = {
      missa: [['Missä Maia on? Hän on ___.', paikat.concat(ollaan)], ['Missä te olette? Me olemme ___.', paikat.concat(ollaan)]],
      mista: [['Mistä Jay tulee? Hän tulee ___.', paikat.concat(kotoisin.jay)], ['Mistä sinä tulet? Minä tulen ___.', paikat.concat(kotoisin.sina)]],
      mihin: [['Mihin Maia menee? Hän menee ___.', paikat], ['Mihin te menette? Me menemme ___.', paikat]]
    };
    const sija = laji => {
      const vaihtoehdot = KEHYS[laji].filter(([, l]) => l.length);
      if (!vaihtoehdot.length) return null;
      const [lause, lista] = arpa(vaihtoehdot);
      const id = arpa(lista);
      const p = muodot(id), paikka = tieto(id).paikka;
      const oikea = p[SIJA[laji][paikka]];
      const harhat = erilaiset(oikea, SIJAT6.filter(x => x !== SIJA[laji][paikka]).sort(() => Math.random() - 0.5).map(x => p[x]));
      return { laji, lause, vihje: id, oikea, harhat, miksi: miksiSijat(p, oikea) };
    };
    const tekijat = [
      [18, () => sija('missa')],
      [14, () => sija('mista')],
      [18, () => sija('mihin')],
      // Ihmiset: -lle / -lta / -lla (oppitunti 10).
      [15, () => {
        // Kehykset, joissa vain yksi sija käy (K3-otanta: ”Kahvi on Martalla/Martalle/Martalta” olivat kaikki oikein);
        // lahja ja nälkä vain läheisille (lahja myös naapurille), kysyä voi keneltä tahansa.
        const [lause, solu, lista] = arpa([['Annan lahjan ___.', 'all', laheiset.concat(ihmiset.filter(x => x === 'naapuri'))],
          ['Kysyn ___.', 'abl', ihmiset], ['Onko ___ nälkä?', 'ade', laheiset]]);
        const id = arpa(lista);
        if (!id) return null;
        const p = muodot(id);
        const oikea = p[solu];
        return { laji: 'ihmiset', lause, vihje: id, oikea, harhat: erilaiset(oikea, [p.all, p.abl, p.ade, p.gen]), miksi: miksiSijat(p, oikea) };
      }],
      // Postpositio + genetiivi (oppitunti 14).
      [20, () => {
        const pp = arpa(postpositiot);
        const id = pp ? arpa(pp[2]) : null;
        if (!pp || !id) return null;
        const p = muodot(id);
        const oikea = p.gen;
        const harhat = erilaiset(oikea, [p.nom || S.nimi(id), p.ines || p.ade, p.part]);
        const miksi = miksiSijat(p, oikea);
        if (p.part && pieni(p.part) !== pieni(oikea)) miksi[pieni(p.part)] = `${p.part} é o partitivo; antes de ${pp[0]}, genitivo -n`;
        // kohdalla on reittiohjeen sana (oppitunti 14), muut odottamisen paikkoja.
        const lause = pp[0] === 'kohdalla' ? 'Käänny ___ kohdalla vasemmalle.' : `Maia odottaa ___ ${pp[0]}.`;
        return { laji: 'postpositio', lause, vihje: id, oikea, harhat, miksi };
      }],
      // Imperfekti kehyksessä (oppitunti 13): Mihin menit eilen? – Menin ___. Vain arjen paikat, joihin lähdetään
      // (ei maita, kaupunkeja eikä kotona keittiöön tai parvekkeelle: K3_EI_EILEN).
      [15, () => {
        const id = arpa(eilen);
        if (!id || !on('mennä', 'imperf.1s')) return null;
        const p = muodot(id), paikka = tieto(id).paikka;
        const oikea = p[SIJA.mihin[paikka]];
        const harhat = erilaiset(oikea, [p[SIJA.missa[paikka]], p[SIJA.mista[paikka]], p[SIJA.mihin[paikka === 'sisa' ? 'ulko' : 'sisa']]]);
        return { laji: 'menneet', lause: 'Mihin menit eilen? Menin ___.', vihje: id, oikea, harhat, miksi: miksiSijat(p, oikea) };
      }]
    ];
    const summa = tekijat.reduce((x, [w]) => x + w, 0);
    return function tee() {
      let r = Math.random() * summa;
      for (const [w, f] of tekijat) { if ((r -= w) <= 0) return f(); }
      return tekijat[0][1]();
    };
  }
  /* ---------- Aikakoneen golem (K4, loppupomo): kysymykset ----------
     Golem sotkee aikamuodot: imperfekti (oppitunti 13: Eilen menin), kielteinen imperfekti (15: en mennyt, emme menneet),
     perfekti (19: olen käynyt, olemme käyneet), konditionaali (15 ja 20: menisin, jos…) ja passiivi (20: Suomessa
     saunotaan). Aikasana kiinnittää aikamuodon, verbin vihje merkityksen (H1); väärät vaihtoehdot ovat saman verbin muita
     aikamuotoja (H2). Passiivi vain verbeille, joiden tietueessa on pass. Listat ovat ehdokkaita: vain opetetut. */
  // K4-otanta 20.10.2026: pois verbit, jotka tarvitsevat objektin tai täydennyksen (olla, ottaa, antaa, tavata, katsoa,
  // tehdä, nähdä, ymmärtää, haluta, asua) ja matkustaa (ei tietuetta); mukaan opetetut laulaa, grillata, pelata, levätä,
  // siivota, juosta.
  const K4_VERBIT = ['mennä', 'tulla', 'syödä', 'juoda', 'ostaa', 'nukkua', 'käydä', 'puhua', 'lukea', 'kirjoittaa', 'ajaa',
    'maalata', 'uida', 'saunoa', 'tanssia', 'soittaa', 'lähteä', 'oppia', 'herätä', 'odottaa', 'kuunnella', 'myydä',
    'kalastaa', 'unohtaa', 'laulaa', 'grillata', 'pelata', 'levätä', 'siivota', 'juosta', 'lentää'];
  // Lauseiden tarkistus 21.10.2026 (omistaja: jokainen lause järkevä oikeassa elämässä): jokaisella kehyksellä oma
  // verbilista, koska kehyksessä ei ole objektia eikä paikkaa. Aikasana ja verbi sopivat yhteen: *Eilen minä menin.*,
  // *Eilen minä söin.*, *Eilen minä heräsin.*, *Jos Jay voisi, hän nukkuisi joka päivä.*, *Suomessa puhutaan paljon.* pois.
  // Liikeverbit (mennä, tulla, lähteä, lentää, juosta) vain kehyksissä, joissa on paikka: Eilen minä tulin kotiin.
  // Viime viikolla Jay lensi Brasiliaan. Oletko sinä jo lähtenyt kotiin? (ei *Eilen minä tulin.*, *Minä olen jo lähtenyt.*).
  const K4_TEOT = ['grillata', 'kalastaa', 'maalata', 'pelata', 'saunoa', 'siivota', 'tanssia', 'uida'];   // Eilen minä saunoin.
  const K4_TEOT_ME = K4_TEOT;                                       // Kaksi päivää sitten me saunoimme.
  // Viime viikolla: kertaluonteiset teot (ei *Viime viikolla Jay juoksi / ui / saunoi*, jotka ovat arkea).
  const K4_TEOT_VIIKKO = ['kalastaa', 'siivota', 'maalata', 'grillata'];   // Viime viikolla Jay siivosi.
  const K4_KOTIIN = ['tulla', 'lähteä', 'mennä'];                  // Eilen minä tulin kotiin. Oletko sinä jo lähtenyt kotiin?
  const K4_MATKA = ['lähteä', 'lentää'];                           // Viime viikolla Jay lensi Brasiliaan.
  const K4_EI_EILEN = ['saunoa', 'nukkua', 'uida', 'siivota'];      // Eilen me emme nukkuneet.
  const K4_EI_EILEN_MINA = K4_EI_EILEN.concat(['maalata', 'syödä']);    // Eilen minä en maalannut (ei *me emme syöneet*).
  const K4_EI_JOULUNA = ['saunoa', 'laulaa'];                       // Viime jouluna Jay ei saunonut.
  const K4_JO = ['syödä', 'herätä', 'siivota', 'saunoa', 'unohtaa'];   // Oletko sinä jo syönyt?
  const K4_JOS_MINA = ['maalata', 'lukea', 'kalastaa', 'levätä', 'nukkua', 'saunoa', 'uida', 'tanssia', 'pelata', 'kirjoittaa',
    'siivota'];                                                     // Jos minulla olisi aikaa, minä maalaisin.
  const K4_JOS_JAY = ['saunoa', 'kalastaa', 'uida', 'pelata', 'tanssia', 'laulaa', 'lukea', 'grillata'];   // … joka päivä.
  // Passiivi omalla listallaan, ja kummallakin kehyksellä oma osa.
  const K4_PASSIIVI = ['saunoa', 'uida', 'tanssia', 'laulaa', 'kalastaa', 'grillata', 'juhlia', 'puhua', 'lukea', 'syödä',
    'juoda', 'nukkua', 'ajaa', 'kävellä', 'pelata'];
  const K4_PASS_SUOMI = ['saunoa', 'juoda', 'kalastaa', 'lukea', 'uida'];                 // Suomessa saunotaan paljon.
  const K4_PASS_MOKKI = ['saunoa', 'uida', 'kalastaa', 'grillata', 'lukea', 'pelata'];    // Kesällä mökillä uidaan …
  const K4_SAANTO = {
    imperf: 'ontem, ano passado: imperfeito com -i- (menin, söin, ostin); eu e você com a forma fraca (nukuin).',
    kielto: 'passado negativo: en, et, ei + particípio -nut/-nyt (en mennyt); nós, vocês, eles: -neet (emme menneet).',
    perfekti: 'já, alguma vez: olla + particípio (olen käynyt, oletko nähnyt); plural -neet (olemme käyneet).',
    kond: 'se…, eu gostaria: condicional -isi- (menisin, ostaisin, olisi).',
    passiivi: 'na Finlândia se faz, a gente faz: passivo -taan/-tään, -daan/-dään (saunotaan, mennään).'
  };
  function golem(sanat) {
    const on = (id, ...solut) => sanat.has(id) && (p => !!p && solut.every(x => p[x]))(muodot(id));
    const erilaiset = (oikea, lista) => [...new Set(lista.filter(x => x && pieni(x) !== pieni(oikea)))].slice(0, 3);
    const verbit = K4_VERBIT.filter(id => on(id, 'prees.1s', 'imperf.1s', 'imperf.3s', 'imperf.1p', 'kond.1s', 'kond.3s', 'part.yks', 'part.mon'));
    const passiivit = K4_PASSIIVI.filter(id => on(id, 'pass', 'prees.3s', 'kond.3s', 'part.yks'));
    const NIMI = { 'prees': 'presente', 'imperf': 'imperfeito (passado)', 'kond': 'condicional', 'part.yks': 'particípio (singular)',
      'part.mon': 'particípio (plural)', 'kielto': 'forma negativa do presente', 'pass': 'passivo' };
    const selitys = (p, oikea, solut) => {
      const m = {};
      for (const x of solut) {
        const v = p[x];
        if (!v || pieni(v) === pieni(oikea) || m[pieni(v)]) continue;
        const laji = x.startsWith('part.') || x === 'kielto' || x === 'pass' ? x : x.split('.')[0];
        m[pieni(v)] = `${v} = ${NIMI[laji] || x}`;
      }
      return m;
    };
    const SOLUT = ['prees.1s', 'prees.3s', 'imperf.1s', 'imperf.3s', 'imperf.1p', 'kond.1s', 'kond.3s', 'part.yks', 'part.mon', 'kielto', 'pass'];
    // Kehys = [lause, oikea solu, väärien vaihtoehtojen solut, kehyksen oma verbilista]; verbi arvotaan kehyksen listasta.
    const kehys = (laji, vaihtoehdot) => {
      const kaytossa = vaihtoehdot.map(([l, s, v, lista]) => [l, s, v, verbit.filter(id => lista.includes(id))]).filter(x => x[3].length);
      if (!kaytossa.length) return null;
      const [lause, solu, vasta, lista] = arpa(kaytossa);
      const id = arpa(lista);
      const p = muodot(id);
      const oikea = p[solu];
      return { laji, lause, vihje: id, oikea, harhat: erilaiset(oikea, vasta.map(x => p[x])), miksi: selitys(p, oikea, SOLUT) };
    };
    const tekijat = [
      // Imperfekti myönteinen: Eilen minä ___ / Viime viikolla Jay ___ / Kaksi päivää sitten me ___.
      [26, () => kehys('imperf', [['Eilen minä ___.', 'imperf.1s', ['prees.1s', 'kond.1s', 'part.yks'], K4_TEOT],
        ['Viime viikolla Jay ___.', 'imperf.3s', ['prees.3s', 'kond.3s', 'part.yks'], K4_TEOT_VIIKKO],
        ['Kaksi päivää sitten me ___.', 'imperf.1p', ['prees.1s', 'imperf.1s', 'part.mon'], K4_TEOT_ME],
        // Liikeverbit vain paikan kanssa.
        ['Eilen minä ___ kotiin.', 'imperf.1s', ['prees.1s', 'kond.1s', 'part.yks'], K4_KOTIIN],
        ['Kaksi päivää sitten me ___ kotiin.', 'imperf.1p', ['prees.1s', 'imperf.1s', 'part.mon'], K4_KOTIIN],
        ['Viime viikolla Jay ___ Brasiliaan.', 'imperf.3s', ['prees.3s', 'kond.3s', 'part.yks'], K4_MATKA]])],
      // Kielteinen imperfekti: en + -nut/-nyt, emme + -neet.
      [20, () => kehys('kielto', [['Eilen minä en ___.', 'part.yks', ['kielto', 'imperf.1s', 'part.mon'], K4_EI_EILEN_MINA],
        ['Viime jouluna Jay ei ___.', 'part.yks', ['kielto', 'imperf.3s', 'part.mon'], K4_EI_JOULUNA],
        ['Eilen me emme ___.', 'part.mon', ['part.yks', 'kielto', 'imperf.1p'], K4_EI_EILEN]])],
      // Perfekti: olla + partisiippi.
      [22, () => kehys('perfekti', [['Minä olen jo ___.', 'part.yks', ['imperf.1s', 'prees.1s', 'part.mon'], K4_JO],
        ['Oletko sinä jo ___?', 'part.yks', ['imperf.1s', 'kond.1s', 'part.mon'], K4_JO],
        ['Oletko sinä jo ___ kotiin?', 'part.yks', ['imperf.1s', 'kond.1s', 'part.mon'], K4_KOTIIN],
        ['Me olemme jo ___.', 'part.mon', ['part.yks', 'imperf.1p', 'prees.1s'], K4_JO]])],
      // Konditionaali: jos-lause ja toive.
      [20, () => kehys('kond', [['Jos minulla olisi aikaa, minä ___.', 'kond.1s', ['imperf.1s', 'prees.1s', 'part.yks'], K4_JOS_MINA],
        ['Jos Jay voisi, hän ___ joka päivä.', 'kond.3s', ['imperf.3s', 'prees.3s', 'kond.1s'], K4_JOS_JAY]])],
      // Passiivi (oppitunti 20): Suomessa ___ paljon. Kummallakin kehyksellä oma verbilista.
      [12, () => {
        const vaihtoehdot = [['Suomessa ___ paljon.', K4_PASS_SUOMI], ['Kesällä mökillä ___ joka päivä.', K4_PASS_MOKKI]]
          .map(([l, lista]) => [l, passiivit.filter(id => lista.includes(id))]).filter(([, l]) => l.length);
        if (!vaihtoehdot.length) return null;
        const [lause, lista] = arpa(vaihtoehdot);
        const id = arpa(lista);
        const p = muodot(id);
        const oikea = p.pass;
        return { laji: 'passiivi', lause, vihje: id, oikea,
          harhat: erilaiset(oikea, [p['prees.3s'], p['kond.3s'], p['part.yks']]), miksi: selitys(p, oikea, SOLUT) };
      }]
    ];
    const summa = tekijat.reduce((x, [w]) => x + w, 0);
    return function tee() {
      let r = Math.random() * summa;
      for (const [w, f] of tekijat) { if ((r -= w) <= 0) return f(); }
      return tekijat[0][1]();
    };
  }
  /* Golem: kivinen jättiläinen, rinnassa kellotaulu, jonka viisarit pyörivät väärään suuntaan (kuvitus.js:n tyyliin). */
  function golemKuva() {
    const lohkot = [[22, 60, 20, 26], [68, 60, 20, 26], [30, 86, 18, 14], [62, 86, 18, 14]]
      .map(([x, y, w, h]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="#6d6a7c"/>`).join('');
    const merkit = Array.from({ length: 12 }, (_, i) => {
      const a = i * Math.PI / 6, x = 55 + Math.sin(a) * 13, y = 56 - Math.cos(a) * 13;
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${i % 3 ? 0.9 : 1.6}" fill="#3a2d5c"/>`;
    }).join('');
    return `<svg viewBox="0 0 110 104" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<ellipse cx="55" cy="100" rx="38" ry="4" fill="rgba(0,0,0,.25)"/>` +
      lohkot +
      `<rect x="30" y="34" width="50" height="50" rx="9" fill="#857f99"/>` +
      `<path d="M34 40L44 46M74 76L66 70M40 78L46 72" stroke="#5c5870" stroke-width="2" stroke-linecap="round"/>` +
      `<circle cx="55" cy="56" r="16" fill="#e9e2ff" stroke="#c9a2ff" stroke-width="2.5"/>` + merkit +
      `<path d="M55 56L55 45M55 56L63 60" stroke="#3a2d5c" stroke-width="2.4" stroke-linecap="round"/>` +
      `<path d="M66 41A16 16 0 0 0 44 41" fill="none" stroke="#9b6bff" stroke-width="1.8" marker-end="none"/><path d="M44 41l-1-4 4 1z" fill="#9b6bff"/>` +
      `<rect x="36" y="6" width="38" height="28" rx="8" fill="#9b95b0"/>` +
      `<path d="M38 10Q44 8 46 12L40 14Z" fill="#7c7692"/><path d="M68 28Q72 26 72 31L67 32Z" fill="#7c7692"/>` +
      `<path d="M33 66Q38 63 41 68L35 71Z" fill="#6d6a7c"/><path d="M71 44Q76 42 77 47L72 49Z" fill="#6d6a7c"/>` +
      `<circle cx="47" cy="20" r="5.5" fill="#7cffb2"/><circle cx="63" cy="20" r="5.5" fill="#7cffb2"/>` +
      `<path d="M40 12L52 15M70 12L58 15" stroke="#3a3650" stroke-width="2.6" stroke-linecap="round"/>` +
      `<circle cx="47" cy="20" r="2" fill="#123b26"/><circle cx="63" cy="20" r="2" fill="#123b26"/>` +
      `<path d="M47 29Q55 26 63 29" fill="none" stroke="#3a3650" stroke-width="2.2" stroke-linecap="round"/>` +
      `<path d="M55 6L55 0M51 1h8" stroke="#c9a2ff" stroke-width="2" stroke-linecap="round"/><circle cx="55" cy="0.5" r="2" fill="#7cffb2"/>` +
      `</svg>`;
  }
  /* Kraken: kuusi lonkeroa, jokaisessa sijan pääte (kuvitus.js:n tyyliin, tasaiset täytöt). */
  function krakenKuva() {
    const lonkerot = [['-ssa', 12, 92, 4, 70], ['-sta', 26, 100, 20, 78], ['-aan', 42, 104, 40, 84], ['-lla', 68, 104, 70, 84], ['-lta', 84, 100, 90, 78], ['-lle', 98, 92, 106, 70]]
      .map(([t, x, y, cx, cy]) => `<path d="M55 64Q${cx} ${cy} ${x} ${y}" fill="none" stroke="#7a2e45" stroke-width="7" stroke-linecap="round"/>` +
        `<circle cx="${x}" cy="${y - 1}" r="5.5" fill="#f4c7d4"/><text x="${x}" y="${y + 1.5}" text-anchor="middle" font-family="Georgia,serif" font-size="4.6" font-weight="700" fill="#5a1a2d">${t}</text>`).join('');
    return `<svg viewBox="0 0 110 104" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      lonkerot +
      `<path d="M24 52Q22 10 55 8Q88 10 86 52Q86 70 55 72Q24 70 24 52Z" fill="#a8445f"/>` +
      `<ellipse cx="55" cy="24" rx="20" ry="9" fill="#c25f7a" opacity=".7"/>` +
      `<circle cx="42" cy="46" r="9" fill="#ffe28a"/><circle cx="68" cy="46" r="9" fill="#ffe28a"/>` +
      `<rect x="39" y="38" width="6" height="16" rx="3" fill="#2a0f18"/><rect x="65" y="38" width="6" height="16" rx="3" fill="#2a0f18"/>` +
      `<path d="M31 36L50 40M79 36L60 40" stroke="#4a1323" stroke-width="3" stroke-linecap="round"/>` +
      `<path d="M47 60Q55 66 63 60" fill="none" stroke="#4a1323" stroke-width="2.6" stroke-linecap="round"/>` +
      `<circle cx="34" cy="20" r="2.4" fill="#e78aa3"/><circle cx="74" cy="16" r="3" fill="#e78aa3"/><circle cx="60" cy="13" r="1.8" fill="#e78aa3"/>` +
      `</svg>`;
  }
  /* Kaksipää: vahva pää iso, punainen ja äänekäs; heikko pää pieni, sininen ja ujo (kuvitus.js:n tyyliin). */
  function kaksipaaKuva() {
    const hampaat = [[20, 33], [25, 34.5], [30, 35], [35, 34.5], [40, 33]]
      .map(([x, y]) => `<path d="M${x - 2.4} ${y - 3}L${x} ${y + 1.8}L${x + 2.4} ${y - 3.2}Z" fill="#fff"/>`).join('');
    return `<svg viewBox="0 0 110 104" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<ellipse cx="55" cy="99" rx="40" ry="4.5" fill="rgba(0,0,0,.2)"/>` +
      `<ellipse cx="36" cy="94" rx="11" ry="6" fill="#1f4b3f"/><ellipse cx="76" cy="94" rx="11" ry="6" fill="#1f4b3f"/>` +
      `<path d="M30 50Q22 40 28 30" fill="none" stroke="#2f7d62" stroke-width="13" stroke-linecap="round"/>` +
      `<path d="M78 52Q88 44 86 36" fill="none" stroke="#2f7d62" stroke-width="9" stroke-linecap="round"/>` +
      `<path d="M16 68Q14 42 55 40Q96 42 94 68Q94 93 55 94Q16 93 16 68Z" fill="#2f7d62"/>` +
      `<path d="M16 64Q5 66 8 77Q12 83 19 77Z" fill="#256650"/><path d="M94 64Q105 66 102 77Q98 83 91 77Z" fill="#256650"/>` +
      `<ellipse cx="55" cy="77" rx="25" ry="12" fill="#8fd3b0"/>` +
      `<text x="55" y="81" text-anchor="middle" font-family="Georgia,serif" font-size="10" font-weight="700" fill="#1f4b3f">kk · k</text>` +
      `<path d="M14 14L10 2L22 9Z" fill="#f39a1e"/><path d="M46 14L50 2L38 9Z" fill="#f39a1e"/>` +
      `<circle cx="30" cy="22" r="17" fill="#e2574c"/>` +
      `<circle cx="23" cy="18" r="5" fill="#fff"/><circle cx="37" cy="18" r="5" fill="#fff"/>` +
      `<circle cx="24.5" cy="19.5" r="2.3" fill="#1d1028"/><circle cx="35.5" cy="19.5" r="2.3" fill="#1d1028"/>` +
      `<path d="M16 11L28 15M44 11L32 15" stroke="#5a1410" stroke-width="2.6" stroke-linecap="round"/>` +
      `<path d="M17 29Q30 25 43 29Q40 39 30 39Q20 39 17 29Z" fill="#7a1f2b"/>${hampaat}` +
      `<circle cx="87" cy="28" r="11" fill="#5b8fd6"/>` +
      `<circle cx="83" cy="26" r="3" fill="#fff"/><circle cx="91" cy="26" r="3" fill="#fff"/>` +
      `<circle cx="83.5" cy="27" r="1.4" fill="#1d1028"/><circle cx="91.5" cy="27" r="1.4" fill="#1d1028"/>` +
      `<path d="M80 21.5L85 23M94 21.5L89 23" stroke="#24456f" stroke-width="1.4" stroke-linecap="round"/>` +
      `<ellipse cx="87" cy="33" rx="2.2" ry="1.6" fill="#24456f"/>` +
      `<path d="M98 20Q100 24 98 26Q96 24 98 20Z" fill="#bfe6ff"/>` +
      `</svg>`;
  }

  /* ---------- pomon kuva (kuvitus.js:n tyyliin: tasaiset täytöt, viewBox, ei tekstuureja) ---------- */
  function petoKuva() {
    const hampaat = [[40, 64], [47, 66], [54, 67], [61, 66], [68, 64]]
      .map(([x, y]) => `<path d="M${x - 3} ${y - 4}L${x} ${y + 2}L${x + 3} ${y - 4.5}Z" fill="#fff"/>`).join('');
    return `<svg viewBox="0 0 110 104" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<ellipse cx="55" cy="99" rx="38" ry="4.5" fill="rgba(0,0,0,.18)"/>` +
      `<path d="M25 30L19 8L36 22Z" fill="#f39a1e"/><path d="M85 30L91 8L74 22Z" fill="#f39a1e"/>` +
      `<ellipse cx="34" cy="94" rx="11" ry="6" fill="#3e2357"/><ellipse cx="76" cy="94" rx="11" ry="6" fill="#3e2357"/>` +
      `<path d="M14 62Q12 26 55 22Q98 26 96 62Q96 92 55 93Q14 92 14 62Z" fill="#6a3d8f"/>` +
      `<path d="M14 58Q3 60 6 72Q10 78 17 72Z" fill="#5a3179"/><path d="M96 58Q107 60 104 72Q100 78 93 72Z" fill="#5a3179"/>` +
      `<ellipse cx="55" cy="78" rx="27" ry="13" fill="#b58ad0"/>` +
      `<text x="55" y="83" text-anchor="middle" font-family="Georgia,serif" font-size="10" font-weight="700" fill="#3e2357">-a · -ta</text>` +
      `<circle cx="40" cy="41" r="9" fill="#fff"/><circle cx="70" cy="41" r="9" fill="#fff"/>` +
      `<circle cx="42" cy="43" r="4" fill="#1d1028"/><circle cx="68" cy="43" r="4" fill="#1d1028"/>` +
      `<circle cx="43.4" cy="41.6" r="1.3" fill="#fff"/><circle cx="69.4" cy="41.6" r="1.3" fill="#fff"/>` +
      `<path d="M29 30L48 35M81 30L62 35" stroke="#2a1640" stroke-width="3.2" stroke-linecap="round"/>` +
      `<path d="M34 58Q55 52 76 58Q72 72 55 73Q38 72 34 58Z" fill="#7a1f2b"/>${hampaat}` +
      `<circle cx="55" cy="67" r="4.5" fill="#e9b872"/><path d="M52.5 66Q55 64 57.5 66" fill="none" stroke="#b57d3a" stroke-width="1"/>` +
      `</svg>`;
  }
  /* Saaren palkinto: poreallas (puinen amme, vesi, kuplat, höyry ja mandariini). */
  function porealtaanKuva() {
    const kuplat = [[38, 37, 2.2], [52, 34, 1.6], [66, 38, 2.4], [80, 35, 1.8], [46, 41, 1.4], [74, 41, 1.5]]
      .map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity=".85"/>`).join('');
    return `<svg viewBox="0 0 120 86" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<path d="M40 22Q36 14 42 8M60 20Q56 11 62 4M80 22Q76 14 82 8" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".75"/>` +
      `<path d="M14 38H106L100 78Q99 82 94 82H26Q21 82 20 78Z" fill="#a5743f"/>` +
      `<path d="M17 52H103M19 66H101" stroke="#7b5129" stroke-width="2"/>` +
      `<path d="M30 40V80M50 40V82M70 40V82M90 40V80" stroke="#8d6133" stroke-width="1.2" opacity=".7"/>` +
      `<ellipse cx="60" cy="38" rx="47" ry="8" fill="#5bb8c4"/><ellipse cx="60" cy="37" rx="40" ry="5" fill="#8fd6dd"/>${kuplat}` +
      `<circle cx="88" cy="36" r="5" fill="#f39a1e"/><path d="M88 31.5Q91 28.5 94 30.5Q91 33 88 31.5Z" fill="#3f8f3a"/>` +
      `<rect x="10" y="34" width="100" height="6" rx="3" fill="#c48a4f"/>` +
      `</svg>`;
  }

  /* Saaren juhla (Pomo.juhla): rantatalo, lippunauha ja valot, juhlahattu (kuvitus.js:n tyyliin, tasaiset täytöt). */
  function taloKuva() {
    const olki = [24, 36, 48, 60, 72, 84, 96].map(x => `<path d="M${x} ${(19 + Math.abs(60 - x) * 0.73).toFixed(1)}L${x - 3} 53" stroke="#b57d3a" stroke-width="1.4"/>`).join('');
    const valot = [16, 30, 44, 58, 72, 86, 100].map((x, i) => `<circle class="ilha-valo" cx="${x}" cy="${54 + (i % 2) * 2}" r="2.6" fill="${['#ffd166', '#ff8fab', '#8fd6dd'][i % 3]}"/>`).join('');
    return `<svg viewBox="0 0 120 112" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<path d="M30 88V108M50 88V110M70 88V110M90 88V108" stroke="#7b5129" stroke-width="4" stroke-linecap="round"/>` +
      `<rect x="18" y="50" width="84" height="40" rx="2" fill="#e9c48a"/>` +
      `<path d="M18 62H102M18 76H102" stroke="#c99a5c" stroke-width="1.4"/>` +
      `<rect x="28" y="58" width="18" height="14" rx="2" fill="#8fd6dd" stroke="#8d6133" stroke-width="2"/>` +
      `<rect x="54" y="60" width="16" height="30" rx="1.5" fill="#8d6133"/><circle cx="66" cy="76" r="1.4" fill="#f2d21b"/>` +
      `<rect x="78" y="58" width="16" height="14" rx="2" fill="#8fd6dd" stroke="#8d6133" stroke-width="2"/>` +
      `<path d="M8 54L60 16L112 54Z" fill="#d9a441"/>${olki}` +
      `<path d="M10 54Q60 64 110 54" fill="none" stroke="#5a3d22" stroke-width="1"/>${valot}` +
      `<rect x="10" y="88" width="100" height="5" rx="2.5" fill="#a5743f"/>` +
      `</svg>`;
  }
  function koristeKuva() {
    // Lippunauha kaarena (y = 6 + 56·t(1−t), t = x/600) ja valot lippujen välissä.
    const y = x => 6 + 56 * (x / 600) * (1 - x / 600);
    const varit = ['#e2574c', '#ffd166', '#2a9d8f', '#ff8fab', '#5b6fa8', '#f39a1e'];
    let liput = '', valot = '';
    for (let x = 24, i = 0; x <= 576; x += 36, i++) {
      const yy = y(x).toFixed(1);
      liput += `<path d="M${x - 11} ${yy}L${x + 11} ${yy}L${x} ${(+yy + 20).toFixed(1)}Z" fill="${varit[i % varit.length]}"/>`;
      if (x + 18 < 600) valot += `<circle class="ilha-valo" cx="${x + 18}" cy="${(y(x + 18) + 2).toFixed(1)}" r="3.4" fill="${['#fff3b0', '#ffd166'][i % 2]}"/>`;
    }
    return `<svg viewBox="0 0 600 46" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<path d="M0 6Q300 62 600 6" fill="none" stroke="#5a3d22" stroke-width="1.6"/>${liput}${valot}</svg>`;
  }
  /* Turvapaikka (peto sai Maian kiinni): saaren riippumatto kahden kookospalmun välissä. */
  /* Varoituskyltti pomotaistelun alkuun (omistaja 20.10.2026: ”CAUTION DANGER ZONE plague or similar”): keltamusta
     raitareunus, punainen soikio ”VAARA!”, alla portugaliksi. Oma piirros, ei kuvaa. */
  /* Pitkä kylttirivi puristetaan paneeliin (208 px, marginaali 6 px): textLength, kun arvioitu leveys (merkkiä × leveys
     merkkiä kohden, Chromiumissa mitattu) ylittää 196 px (K3-kirjoittajan mittaus 20.10.2026: K2–K4 leikkautuivat). */
  const sovita = (t, perMerkki) => String(t).length * perMerkki > 196 ? ' textLength="196" lengthAdjust="spacingAndGlyphs"' : '';
  function vaaraKyltti(k) {
    k = Object.assign({ otsikko: 'VAARA!', rivi1: 'PERIGO', rivi2: 'ZONA DA FERA' }, k || {});   // P.kyltti: oma teksti joka pomolle (§4.1)
    return `<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<defs><pattern id="pomo-raidat" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">` +
      `<rect width="20" height="20" fill="#ffd21f"/><rect width="10" height="20" fill="#1b1b1b"/></pattern></defs>` +
      `<rect x="2" y="2" width="236" height="146" rx="12" fill="url(#pomo-raidat)" stroke="#1b1b1b" stroke-width="3"/>` +
      `<rect x="16" y="16" width="208" height="118" rx="6" fill="#fbfaf3"/>` +
      `<ellipse cx="120" cy="52" rx="92" ry="27" fill="#d7161e"/>` +
      `<text x="120" y="65" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="36" fill="#fff" letter-spacing="2">${k.otsikko}</text>` +
      `<text x="120" y="102" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="22" fill="#1b1b1b" letter-spacing="3"${sovita(k.rivi1, 18.4)}>${k.rivi1}</text>` +
      `<text x="120" y="124" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="15" fill="#d7161e" letter-spacing="1"${sovita(k.rivi2, 9.8)}>${k.rivi2}</text>` +
      `<circle cx="9" cy="9" r="3" fill="#888"/><circle cx="231" cy="9" r="3" fill="#888"/></svg>`;
  }

  function riippumattoKuva() {
    const palmu = (x, suunta) => {
      const latva = x + 20 * suunta;
      const lehdet = [[-38, 6], [-18, -14], [6, -18], [28, -6], [40, 12]].map(([dx, dy]) =>
        `<path d="M${latva} 30Q${latva + dx * 0.5} ${30 + dy - 10} ${latva + dx * suunta} ${30 + dy + 12}" fill="none" stroke="#3f8f3a" stroke-width="7" stroke-linecap="round"/>`).join('');
      return `<path d="M${x} 150Q${x - 6 * suunta} 90 ${latva} 30" fill="none" stroke="#8d6133" stroke-width="9" stroke-linecap="round"/>` + lehdet +
        `<circle cx="${latva - 4}" cy="38" r="5" fill="#7b5129"/><circle cx="${latva + 5}" cy="40" r="5" fill="#6a4423"/>`;
    };
    return `<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<ellipse cx="150" cy="146" rx="140" ry="7" fill="rgba(0,0,0,.12)"/>` + palmu(40, 1) + palmu(260, -1) +
      `<path d="M62 58L96 84M238 58L204 84" stroke="#c9a46b" stroke-width="2.4"/>` +
      `<path d="M96 84Q150 132 204 84Q150 106 96 84Z" fill="#e2574c"/>` +
      `<path d="M102 88Q150 124 198 88M110 94Q150 122 190 94" fill="none" stroke="#ffd166" stroke-width="3"/>` +
      `</svg>`;
  }
  function hattuKuva(vari) {
    return `<svg viewBox="0 0 40 46" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<path d="M20 6L35 40Q20 46 5 40Z" fill="${vari}"/>` +
      `<path d="M11 27L27 21M8 35L31 27" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>` +
      `<circle cx="20" cy="6" r="4.5" fill="#ffd166"/></svg>`;
  }

  /* Aurinkolasit pomotaisteluihin (omistaja 17.10.2026): kaksikolle piirretyt neljä mallia (assets/kuvitus.js
     aurinkolasit()) Maialle, joka taisteluun eri pari. K1 Partitiivipeto: visiiri. K2–K4 (PELILLISTAMINEN §4) on varattu
     tässä: Astevaihtelun kaksipää saa epäsymmetriset kolmiolasit (kaksi eri päätä, kaksi eri linssiä), Paikallissijojen
     kraken kapeat tummanpunaiset, Aikakoneen golem avaruuslasit. Uusi pomo: POMOT-tauluun lasit: LASIT.k02 jne. */
  const LASIT = {
    k01: { malli: 'visiiri', nimi: 'o visor amarelo' },
    k02: { malli: 'kolmio', nimi: 'os triangulares, um verde-neon e um rosa' },
    k03: { malli: 'kapea', nimi: 'os estreitos, vermelho-escuros' },
    k04: { malli: 'avaruus', nimi: 'os verdes de alienígena' }
  };

  /* ---------- pomojen taulu ---------- */
  const POMOT = {
    k01: {
      id: 'k01', nimi: 'Partitiivipeto', reitti: '#k01-b',
      osumat: 10, matka: 6, varaus: 2.1, palkinto: 40, uusinta: 5,   // varaus: AV-027 kalibrointi (virheetön voitto n. 2,5 askeleen päästä; omistaja 20.10.: 2,9 → 10–20 % vaikeammaksi)
      lasit: LASIT.k01,
      kyltti: { otsikko: 'VAARA!', rivi1: 'PERIGO', rivi2: 'ZONA DA FERA' },   // §4.1: vaihtelee pomoittain
      kuvaus: 'A Partitiivipeto come a forma básica e cospe o partitivo. Ela vem vindo o tempo todo e fica cada vez maior. Cada resposta certa é um golpe: a vida dela desce e ela recua um pouco. Cada resposta errada: ela avança de uma vez. Se chegar até a Maia… pega a Maia. Mas o Capivara e o Peixe-boi estão de olho, e você pode tentar quantas vezes quiser.',
      kuva: petoKuva,
      palkintoKuva: porealtaanKuva,
      palkintoNimi: 'Prêmio da revisão 1: uma banheira de hidromassagem. O Spa do Capivara agora tem filial na ilha.',
      juhla: [
        'Venceu! No último segundo! A Partitiivipeto explodiu em confete de partitivos. Eu vou lembrar desta vitória para sempre. Ou pelo menos até a lição 6.',
        'Que luta! Ela estava quase em cima de você! Dois pães doces, três cafés, nenhum carro: tudo no partitivo, como gente grande. Vou contar pro Peixe-boi assim que ele acordar.'
      ],
      tappio: 'A Partitiivipeto pulou em cima da Maia, comeu o pão doce dela e derrubou a Maia com um arroto de partitivos. Tudo ficou escuro. Quando a Maia abriu os olhos, estava na rede da ilha: o Capivara e o Peixe-boi tinham puxado ela de lá.',
      // Turvapaikassa (peto sai Maian kiinni): [puhuja, repliikki]; puhuja Capivara tai Peixe-boi.
      pelastus: [
        ['Capivara', 'Acordou! Você está na nossa rede, na ilha. Aqui a fera não entra: aqui é zona de soneca. Quantos dedos tem aqui? Não responda: eu também esqueci.'],
        ['Peixe-boi', 'Resgate devagar também é resgate. Eu puxei, o Capivara segurou os óculos. Respira, Maia. Ela só comeu o seu pão doce. A gente traz outro.'],
        ['Capivara', 'Tiramos você de lá bem na hora! Os óculos ficaram tortos, mas o estilo continua. Eu lembro de cada golpe que você deu. Os erros eu esqueço primeiro, prometo.']
      ],
      jaVoitettu: 'A banheira já está na ilha. Esta vitória vale mais algumas mandarinas, e a festa continua.',
      festa: 'E hoje tem festa na casa de praia do Capivara e do Peixe-boi. A convidada de honra é você, de óculos de luta.',
      // Saaren juhla (Pomo.juhla): [puhuja, repliikki], näytetään saaren kuvan alla.
      ilhaJuhla: [
        ['Capivara', 'Festa na casa de praia! A fera foi embora, a banheira chegou e a Maia veio de óculos de luta. Eu vou lembrar desta noite para sempre.'],
        ['Peixe-boi', 'Eu cuido da música. Está tocando bem baixinho, no meu ritmo. Alguém me acorde na hora do bolo.']
      ],
      tee: sanat => partitiivipeto(sanat)
    },
    /* K2 (nimi omistajalta 17.10.2026; vakiomalli §4.1, vaihtelu: kyltti, alkukommentit, kuva, areenan värit, äänet,
       lasit, palkinto ja repliikit). Havanna-baari on saari.js:n palkintotavara (palkinto: 'k02'), joten tässä ei ole
       palkintoKuva-kenttää (muuten baari piirtyisi saarelle kahdesti). Vaikeus kuten K1 (osumat 10, matka 6, varaus 2,1). */
    k02: {
      id: 'k02', nimi: 'Astevaihtelun kaksipää', reitti: '#k02-b',
      osumat: 10, matka: 6, varaus: 2.1, palkinto: 40, uusinta: 5,
      lasit: LASIT.k02,
      kyltti: { otsikko: 'VAARA!', rivi1: 'DUAS CABEÇAS', rivi2: 'UMA FORTE · UMA FRACA' },
      alku: {
        eka: 'Ela tem duas cabeças e as duas falam ao mesmo tempo: uma grita kauppa, a outra cochicha kaupassa. Óculos no rosto. Escute as duas.',
        havio: 'Ela pegou você, mas a gente puxou você de volta. Dica do Peixe-boi: a cabeça forte manda no “para onde?” e no “ele”; a fraca, no resto. Agora você escolhe como lutar.',
        voitti: 'As duas cabeças voltaram. Elas brigam entre si, mas contra você elas se juntam. Óculos no rosto!'
      },
      aanet: { drone: [49, 49.5, 73.4, 98], suodin: 220, murina: [96, 60] },
      saanto: K2_SAANTO,
      kuvaus: 'A Astevaihtelun kaksipää tem duas cabeças: a forte grita kauppa, nukkua, äiti; a fraca cochicha kaupassa, nukun, äidin. Ela vem vindo e fica cada vez maior. Cada resposta certa é um golpe; cada errada, ela avança.',
      kuva: kaksipaaKuva,
      palkintoNimi: 'Prêmio da revisão 2: o Havanna-baari. A ilha agora tem bar, guarda-chuvinha e coquetel de mandarina.',
      juhla: [
        'Venceu! As duas cabeças desmaiaram ao mesmo tempo: uma de raiva, a outra de vergonha. Eu vou lembrar desta vitória para sempre. Da forte e da fraca.',
        'Que luta! Kaupassa, kauppaan, nukun, nukkuu: você deu a cabeça certa para cada palavra. O Peixe-boi já pediu o primeiro coquetel do bar novo.'
      ],
      tappio: 'As duas cabeças pularam em cima da Maia ao mesmo tempo. Uma gritou “KAUPPA!”, a outra cochichou “kaupassa…”, e a Maia ficou tonta. Tudo escureceu. Quando ela abriu os olhos, estava na rede da ilha.',
      pelastus: [
        ['Capivara', 'Acordou! Você está na rede. A fera de duas cabeças não entra aqui: ela nunca decide por qual porta. Respira.'],
        ['Peixe-boi', 'Eu puxei você bem devagar, com a cabeça fraca da fera olhando. Ela até pediu desculpa. A forte, não.'],
        ['Capivara', 'Os óculos triangulares ficaram tortos, um verde e um rosa. Combina. Eu lembro de cada golpe certo. Os errados, eu já esqueci.']
      ],
      jaVoitettu: 'O Havanna-baari já está na ilha. Esta vitória vale mais algumas mandarinas, e o bar continua aberto.',
      festa: 'Hoje tem festa no bar novo da ilha. A convidada de honra é você, de óculos triangulares.',
      ilhaJuhla: [
        ['Capivara', 'Festa no Havanna-baari! Coquetel de mandarina para todo mundo. A fera de duas cabeças foi embora brigando consigo mesma.'],
        ['Peixe-boi', 'Eu sentei no banquinho do bar e não levanto mais. Forte ou fraco, um banquinho é sempre um banquinho.']
      ],
      tee: sanat => kaksipaa(sanat)
    },
    /* K3 (nimi PELILLISTAMINEN §4; vakiomalli §4.1, vaihtelu: kyltti, alkukommentit, kuva, areenan värit (merenpohja), äänet,
       lasit, palkinto ja repliikit). 'Esburger-kioski on saari.js:n palkintotavara (palkinto: 'k03'), joten ei palkintoKuvaa.
       Vaikeus kuten K1–K2 (osumat 10, matka 6, varaus 2,1). */
    k03: {
      id: 'k03', nimi: 'Paikallissijojen kraken', reitti: '#k03-b',
      osumat: 10, matka: 6, varaus: 2.1, palkinto: 40, uusinta: 5,
      lasit: LASIT.k03,
      kyltti: { otsikko: 'VAARA!', rivi1: 'SEIS TENTÁCULOS', rivi2: 'ONDE · DE ONDE · PARA ONDE' },
      alku: {
        eka: 'Saiu do rio uma lula gigante! Seis tentáculos, e em cada um uma terminação: -ssa, -sta, -aan, -lla, -lta, -lle. Óculos no rosto. Onde, de onde, para onde: é só isso que ela quer saber.',
        havio: 'Ela pegou você com os seis braços, mas a gente desenrolou você. Dica do Peixe-boi: primeiro pergunte “dentro ou em cima?”, depois “onde, de onde ou para onde?”. Agora você escolhe como lutar.',
        voitti: 'O kraken voltou. Seis braços de novo, e nenhum deles aprendeu nada. Óculos no rosto!'
      },
      aanet: { drone: [41, 41.4, 61.7, 82.6], suodin: 140, murina: [70, 38] },
      saanto: K3_SAANTO,
      kuvaus: 'O Paikallissijojen kraken tem seis tentáculos, um para cada caso de lugar. Ele vem do fundo do rio e fica cada vez maior. Cada resposta certa corta o caminho dele; cada errada, ele avança.',
      kuva: krakenKuva,
      palkintoNimi: 'Prêmio da revisão 3: o quiosque do ’Esburger. A ilha agora tem hambúrguer, e o Capivara e o Peixe-boi têm fila preferencial.',
      juhla: [
        'Venceu! O kraken soltou os seis tentáculos e afundou no rio. Eu vou lembrar desta vitória para sempre. Onde? Aqui. Para onde? Para o quiosque!',
        'Que luta! Kaupassa, kaupasta, kauppaan, torilla, torilta, torille: seis respostas, seis tentáculos a menos. O Peixe-boi já está na fila do ’Esburger.'
      ],
      tappio: 'Os seis tentáculos enrolaram a Maia: um puxava para dentro, outro para fora, outro para cima. Ela não sabia mais onde estava, nem de onde vinha. Tudo escureceu. Quando abriu os olhos, estava na rede da ilha.',
      pelastus: [
        ['Capivara', 'Acordou! Você está na rede, em cima da ilha: rede-LLA. Viu? Eu ainda lembro dos casos. Dos golpes errados eu já esqueci.'],
        ['Peixe-boi', 'Eu nadei até o kraken bem devagar e fiz cócegas no tentáculo -lle. Ele soltou você na hora. Ninguém aguenta cócega.'],
        ['Capivara', 'Os óculos estreitos ficaram tortos, mas o vermelho-escuro combina com você. Respira. O kraken só sabe seis palavras.']
      ],
      jaVoitettu: 'O quiosque do ’Esburger já está na ilha. Esta vitória vale mais algumas mandarinas, e a grelha continua acesa.',
      festa: 'Hoje tem festa no quiosque da ilha. A convidada de honra é você, de óculos vermelho-escuros.',
      ilhaJuhla: [
        ['Capivara', 'Festa no quiosque do ’Esburger! Hambúrguer para todo mundo. O kraken voltou para o fundo do rio, sem saber para onde ia.'],
        ['Peixe-boi', 'Eu estou na fila desde a vitória. A fila não anda. Eu também não. Está ótimo assim.']
      ],
      tee: sanat => kraken(sanat)
    },
    /* K4, loppupomo (nimi PELILLISTAMINEN §4; vakiomalli §4.1, vaihtelu: kyltti, alkukommentit, kuva, areenan värit
       (aikakoneen violetti tähtitaivas), äänet, lasit, palkinto ja repliikit). Cruzeiro-stadion on saari.js:n palkintotavara
       (palkinto: 'k04'), joten ei palkintoKuvaa. Tappio tuo kaikki kolme kaveria (saari.js KAVERIT, havio k04).
       Vaikeus hieman yli K1–K3: osumat 12 (OPPITUNNIT_6_20 §5c). */
    k04: {
      id: 'k04', nimi: 'Aikakoneen golem', reitti: '#k04-b',
      osumat: 12, matka: 6, varaus: 2.1, palkinto: 60, uusinta: 5,
      lasit: LASIT.k04,
      kyltti: { otsikko: 'VAARA!', rivi1: 'O GOLEM', rivi2: 'MÁQUINA DO TEMPO' },
      alku: {
        eka: 'Uma máquina do tempo caiu na praia, e dela saiu um golem de pedra com um relógio no peito. Os ponteiros giram para trás. Ele mistura ontem, já e se. Óculos verdes no rosto: diga para ele em que tempo estamos.',
        havio: 'O golem pegou você, mas a gente puxou você de volta. Dica do Capivara: primeiro olhe a palavra de tempo. Eilen? Passado. Jo? Olen + particípio. Jos? -isi-. Agora você escolhe como lutar.',
        voitti: 'O golem voltou da máquina do tempo. Para ele, a derrota ainda não aconteceu. Óculos verdes no rosto!'
      },
      aanet: { drone: [36.7, 37.1, 55, 73.4], suodin: 180, murina: [55, 30] },
      saanto: K4_SAANTO,
      kuvaus: 'O Aikakoneen golem é de pedra e tem um relógio no peito. Ele confunde os tempos: diz menen quando é ontem e menin quando é se. Ele vem vindo e fica cada vez maior. Cada resposta certa acerta o relógio dele; cada errada, ele avança.',
      kuva: golemKuva,
      palkintoNimi: 'Prêmio da revisão final: o Estádio do Cruzeiro, em miniatura. A ilha agora tem estádio, e o Capivara e o Peixe-boi têm cadeira cativa.',
      juhla: [
        'Venceu! O relógio do golem parou, e ele virou uma estátua bonita de pedra. Eu vou lembrar desta vitória para sempre. Eu já lembrei. Eu lembraria de novo.',
        'Que luta! Menin, en mennyt, olen käynyt, menisin: você colocou cada tempo no lugar. O curso acabou, e o Peixe-boi já comprou ingresso para o estádio.'
      ],
      tappio: 'O golem girou os ponteiros para trás, e a Maia não sabia mais se era ontem, hoje ou se. Tudo escureceu. Quando ela abriu os olhos, estava na rede da ilha, e a ilha estava cheia de visitas.',
      pelastus: [
        ['Capivara', 'Acordou! Você está na rede, na ilha, hoje. Não ontem, não amanhã: hoje. Eu conferi três vezes.'],
        ['Peixe-boi', 'Eu entrei na máquina do tempo e voltei cinco minutos antes da derrota. Cheguei atrasado mesmo assim. É o meu ritmo.'],
        ['Capivara', 'Os óculos verdes ficaram tortos. E chegaram os três amigos do Jay ao mesmo tempo. Ninguém convidou. Eles disseram que vieram consolar.']
      ],
      jaVoitettu: 'O Estádio do Cruzeiro já está na ilha. Esta vitória vale mais algumas mandarinas, e o placar continua aceso.',
      festa: 'Hoje tem festa no estádio da ilha. A convidada de honra é você, de óculos verdes de alienígena.',
      ilhaJuhla: [
        ['Capivara', 'Festa no estádio! O golem virou estátua na entrada. Eu já disse que vou lembrar para sempre? Vou dizer de novo.'],
        ['Peixe-boi', 'Eu estou na arquibancada desde o apito inicial. O jogo acabou ontem. Para mim, ainda está no intervalo.']
      ],
      tee: sanat => golem(sanat)
    }
  };

  /* ---------- äänitehosteet (omistaja 17.10.2026: ”Add some sounds effects also. Its a BOSS FIGHT!”) ----------
     Syntetisoitu Web Audiolla: ei tiedostoja, toimii file://:stä. AudioContext luodaan vasta käyttäjän eleestä
     (Começar a luta / 🔊). Kytkin muistissa 'tottakai-pomo-aanet' (try/catch lue/kirjoita). Sivuston Som-paneelissa ei
     ole mykistystä (vain äänitteiden ja puheäänten valinta), joten tehosteilla on oma kytkin taistelun yläpalkissa. */
  const Aanet = (function () {
    let ctx = null, paa = null, drone = null;
    // Pomokohtaiset äänet (§4.1 vaihtelu): { drone: [Hz, …], suodin: Hz, murina: [alku Hz, loppu Hz] }; puuttuva = K1.
    let saato = {};
    const asetukset = a => { saato = a || {}; };
    let paalla = lue('pomo-aanet', true) !== false;
    function herata() {
      if (!paalla) return null;
      try {
        if (!ctx) {
          const AC = window.AudioContext || window.webkitAudioContext;
          if (!AC) return null;
          ctx = new AC();
          paa = ctx.createGain();
          paa.gain.value = 0.45;
          paa.connect(ctx.destination);
        }
        if (ctx.state === 'suspended') ctx.resume();
      } catch (e) { ctx = null; }
      return ctx;
    }
    const t0 = alku => ctx.currentTime + (alku || 0);
    // Oskillaattori: aaltomuoto, taajuus f0 → f1, kesto, voimakkuus, alku (s), suodin [tyyppi, taajuus].
    function aani(tyyppi, f0, f1, kesto, voima, alku, suodin) {
      const o = ctx.createOscillator(), g = ctx.createGain(), t = t0(alku);
      o.type = tyyppi;
      o.frequency.setValueAtTime(f0, t);
      if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + kesto);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(voima, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + kesto);
      let x = o;
      if (suodin) { const f = ctx.createBiquadFilter(); f.type = suodin[0]; f.frequency.value = suodin[1]; o.connect(f); x = f; }
      x.connect(g); g.connect(paa);
      o.start(t); o.stop(t + kesto + 0.05);
      return o;
    }
    function kohina(kesto, voima, alku, tyyppi, taajuus) {
      const n = Math.max(1, Math.floor(ctx.sampleRate * kesto));
      const b = ctx.createBuffer(1, n, ctx.sampleRate), d = b.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
      const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
      s.buffer = b; f.type = tyyppi || 'lowpass'; f.frequency.value = taajuus || 400; g.gain.value = voima;
      s.connect(f); f.connect(g); g.connect(paa);
      s.start(t0(alku));
    }
    const TEHOSTEET = {
      // Osuma: laser-zap ylhäältä alas ja napsahdus.
      osuma: () => { aani('square', 1500, 160, 0.17, 0.22); aani('sawtooth', 2400, 420, 0.1, 0.1, 0.02); kohina(0.07, 0.35, 0, 'highpass', 2600); },
      // Virhe: tömähdys ja matala jyrinä.
      virhe: () => { aani('sine', 130, 36, 0.45, 0.9); kohina(0.8, 0.8, 0, 'lowpass', 150); aani('sawtooth', 52, 38, 0.7, 0.14, 0, ['lowpass', 180]); },
      // Murina: peto astuu lähemmäs (sahalaita, nopea vibrato, alipäästö).
      murina: () => {
        const [m0, m1] = saato.murina || [82, 52];
        const o = aani('sawtooth', m0, m1, 0.85, 0.32, 0.12, ['lowpass', 520]);
        const lfo = ctx.createOscillator(), syvyys = ctx.createGain();
        lfo.frequency.value = 22; syvyys.gain.value = 18;
        lfo.connect(syvyys); syvyys.connect(o.frequency);
        lfo.start(t0(0.12)); lfo.stop(t0(1.05));
      },
      // Sydämenlyönti: kaksi matalaa iskua.
      sydan: () => { aani('sine', 72, 44, 0.16, 0.85); aani('sine', 66, 40, 0.16, 0.6, 0.2); },
      // Tyrmäys: ”plaft” (kohinaläiske + tömähdys) ja piirrettyjen laskeva vihellys.
      plaft: () => { kohina(0.3, 1, 0, 'bandpass', 900); aani('sine', 170, 32, 0.45, 1); aani('triangle', 1100, 140, 0.7, 0.18, 0.15); },
      // Syöksy (peto saa Maian): kova karjaisu, kohinapurkaus ja jysäys.
      syoksy: () => {
        const o = aani('sawtooth', 140, 45, 1.1, 0.7, 0, ['lowpass', 900]);
        const lfo = ctx.createOscillator(), syvyys = ctx.createGain();
        lfo.frequency.value = 30; syvyys.gain.value = 35;
        lfo.connect(syvyys); syvyys.connect(o.frequency);
        lfo.start(t0()); lfo.stop(t0(1.15));
        aani('square', 95, 40, 0.9, 0.25, 0, ['lowpass', 400]);
        kohina(0.6, 1.2, 0, 'lowpass', 1400);
        aani('sine', 110, 28, 0.9, 1, 0.05);
      },
      // Turvapaikka: pehmeä kolmisointu (Maia herää).
      turva: () => { [392, 494, 587, 784].forEach((f, i) => aani('triangle', f, null, 0.9, 0.12, i * 0.16)); },
      // Loppuisku: hidastettu jymähdys (matala pyyhkäisy ja pitkä kohina).
      loppuisku: () => { aani('sine', 220, 30, 1.4, 1); aani('sawtooth', 600, 60, 1.2, 0.18, 0, ['lowpass', 1200]); kohina(1.4, 0.9, 0, 'lowpass', 700); kohina(0.5, 0.8, 1.35, 'lowpass', 2000); },
      // Voitto: fanfaari (nouseva arpeggio ja sointu).
      fanfaari: () => {
        [523, 659, 784, 1047].forEach((f, i) => { aani('square', f, null, 0.16, 0.13, i * 0.13, ['lowpass', 3000]); aani('triangle', f, null, 0.18, 0.2, i * 0.13); });
        [523, 659, 784, 1047].forEach(f => aani('triangle', f, null, 1.1, 0.16, 0.6));
        aani('square', 1047, null, 1.1, 0.06, 0.6, ['lowpass', 2500]);
      },
      /* Takaa-ajon tehosteet (AV-077, omistaja: ”siren, tyres, fanfare”). */
      // Renkaat: kirskuna (kaistanpäästetty kohina ja vinkuva sahalaita).
      renkaat: () => { kohina(0.55, 0.9, 0, 'bandpass', 2600); aani('sawtooth', 1900, 1450, 0.5, 0.07, 0, ['bandpass', 2000]); },
      // Kaasu: moottori kiihtyy (matala sahalaita nousee).
      kaasu: () => { aani('sawtooth', 70, 190, 0.7, 0.3, 0, ['lowpass', 700]); kohina(0.5, 0.25, 0, 'lowpass', 500); },
      // Jarru: lyhyt vihellys ja tömähdys (hidastus, pysähdys).
      jarru: () => { kohina(0.35, 0.7, 0, 'bandpass', 1800); aani('sine', 120, 60, 0.3, 0.5, 0.25); },
      // Ankka: kaksi pientä kvaakkausta (Odota!: ankat ylittävät kadun).
      kvaak: () => { [0, 0.22].forEach(t => aani('square', 520, 330, 0.14, 0.12, t, ['bandpass', 900])); },
      // BUSTED: surullinen trumpetti (neljä laskevaa säveltä, viimeinen pitkä).
      surullinen: () => { [[392, 0], [370, 0.42], [349, 0.84]].forEach(([f, t]) => aani('sawtooth', f, f * 0.97, 0.38, 0.13, t, ['lowpass', 1100]));
        const o = aani('sawtooth', 330, 300, 1.3, 0.14, 1.26, ['lowpass', 1100]);
        const lfo = ctx.createOscillator(), syvyys = ctx.createGain(); lfo.frequency.value = 6; syvyys.gain.value = 6;
        lfo.connect(syvyys); syvyys.connect(o.frequency); lfo.start(t0(1.4)); lfo.stop(t0(2.6)); }
    };
    function soita(nimi) {
      if (!paalla || !ctx || !TEHOSTEET[nimi]) return;
      try { TEHOSTEET[nimi](); } catch (e) { /* ääni ei estä peliä */ }
    }
    // Hiljainen jännitysmatto taistelun ajaksi: kaksi viritettyä sahalaitaa, alipäästö, hidas huojunta.
    function aloitaDrone() {
      if (!paalla || !ctx || drone) return;
      try {
        const g = ctx.createGain(), f = ctx.createBiquadFilter(), lfo = ctx.createOscillator(), lfoG = ctx.createGain();
        f.type = 'lowpass'; f.frequency.value = saato.suodin || 170;
        lfo.frequency.value = 0.18; lfoG.gain.value = 70; lfo.connect(lfoG); lfoG.connect(f.frequency);
        g.gain.setValueAtTime(0.0001, t0()); g.gain.exponentialRampToValueAtTime(0.05, t0(1.5));
        const o = (saato.drone || [55, 55.6, 82.4]).map(hz => { const x = ctx.createOscillator(); x.type = 'sawtooth'; x.frequency.value = hz; x.connect(f); x.start(); return x; });
        f.connect(g); g.connect(paa); lfo.start();
        drone = { g, o: [...o, lfo] };
      } catch (e) { drone = null; }
    }
    function pysaytaDrone() {
      if (!drone || !ctx) { drone = null; return; }
      const d = drone; drone = null;
      try { d.g.gain.cancelScheduledValues(t0()); d.g.gain.setTargetAtTime(0.0001, t0(), 0.15); d.o.forEach(x => x.stop(t0(0.8))); } catch (e) { /* ohita */ }
    }
    /* Sireeni (AV-077): kaksisävelinen (noin 620/860 Hz, neliö-LFO), kaistanpäästö; voimakkuus poliisin etäisyyden mukaan
       (taso 0–3). Pysäytys ”ohi” = Doppler: sävel laskee ja ääni hiipuu kahdessa sekunnissa (pakomatka). */
    let sireeniNyt = null;
    const SIREENI = [0.025, 0.05, 0.09, 0.14];
    function aloitaSireeni() {
      if (!paalla || !ctx || sireeniNyt) return;
      try {
        const o = ctx.createOscillator(), lfo = ctx.createOscillator(), lfoG = ctx.createGain(), f = ctx.createBiquadFilter(), g = ctx.createGain();
        o.type = 'sawtooth'; o.frequency.value = 740;
        lfo.type = 'square'; lfo.frequency.value = 0.85; lfoG.gain.value = 120; lfo.connect(lfoG); lfoG.connect(o.frequency);
        f.type = 'bandpass'; f.frequency.value = 1100; f.Q.value = 0.7;
        g.gain.setValueAtTime(0.0001, t0()); g.gain.exponentialRampToValueAtTime(SIREENI[0], t0(0.9));
        o.connect(f); f.connect(g); g.connect(paa); o.start(); lfo.start();
        sireeniNyt = { o, lfo, g };
      } catch (e) { sireeniNyt = null; }
    }
    function sireeni(taso) {
      if (!sireeniNyt || !ctx) return;
      try { sireeniNyt.g.gain.setTargetAtTime(SIREENI[Math.max(0, Math.min(3, taso))], t0(), 0.25); } catch (e) { /* ohita */ }
    }
    function pysaytaSireeni(ohi) {
      if (!sireeniNyt || !ctx) { sireeniNyt = null; return; }
      const s = sireeniNyt; sireeniNyt = null;
      try {
        const kesto = ohi ? 2.2 : 0.5;
        if (ohi) { s.o.detune.setValueAtTime(0, t0()); s.o.detune.linearRampToValueAtTime(-380, t0(1.2)); }
        s.g.gain.cancelScheduledValues(t0()); s.g.gain.setTargetAtTime(0.0001, t0(ohi ? 0.4 : 0), ohi ? 0.45 : 0.12);
        s.o.stop(t0(kesto)); s.lfo.stop(t0(kesto));
      } catch (e) { /* ohita */ }
    }
    function aseta(p) {
      paalla = !!p;
      kirjoita('pomo-aanet', paalla);
      if (!paalla) { pysaytaDrone(); pysaytaSireeni(); } else herata();
    }
    return { herata, soita, aloitaDrone, pysaytaDrone, aloitaSireeni, sireeni, pysaytaSireeni, aseta, asetukset, paalla: () => paalla };
  })();

  let nykyinen = null;   // viimeksi näytetty kysymys (testit: Pomo.nykyinen())
  const voitettu = id => { const v = lue('pomo-' + id, null); return !!(v && v.voitettu); };

  /* Tila: kirjoitus vai napautus. Käyttäjän oma valinta muistissa; muuten kirjoitus (AV-027). */
  function oletusKirjoitus() {
    // Yksi kirjoitustila-asetus koko kurssille (Treeni, pelit, pomo; A6-31): JSON-totuusarvo, vanha '1' kelpaa.
    let oma = null;
    try { const v = localStorage.getItem('tottakai-kirjoitustila'); oma = v === 'true' || v === '1' ? true : v === 'false' || v === '0' ? false : null; } catch (e) { oma = null; }
    if (oma === null) { const vanha = lue('pomo-kirjoitus', null); if (vanha === true || vanha === false) oma = vanha; }
    // AV-027 (omistaja 19.10.2026): Kirjoitustila ja Kello oletuksena päällä (myös puhelimella); valinnat näkyvät
    // ensimmäisen tappion jälkeen.
    return oma === false ? false : true;
  }

  /* Yhteiset apuvälineet (pomotaistelu ja takaa-ajo, AV-077): app.js:n apu (el, arvioi, tulosloki) tai varakeinot. */
  function tyokalut(apu) {
    const fn = n => (typeof apu[n] === 'function' ? apu[n] : null);
    const el = fn('el') || function (tag, attrs, ...lapset) {
      const e = document.createElement(tag);
      for (const [k, v] of Object.entries(attrs || {})) if (v !== null && v !== undefined && v !== false) e.setAttribute(k, v === true ? '' : v);
      for (const l of lapset) if (l !== null && l !== undefined) e.append(l);
      return e;
    };
    const ilmanAakkosia = s => s.replace(/ä/g, 'a').replace(/ö/g, 'o');
    const vertaa = s => pieni(s).replace(/[.!?,]+$/g, '').replace(/\s+/g, ' ');
    const arvioi = (v, oikea) => {
      if (fn('arvioi')) { const t = apu.arvioi(v, [oikea]); return t === 'tyhja' ? null : (fn('hyvaksytty') ? apu.hyvaksytty(t) : t === 'oikein' || t === 'aksentti'); }
      if (!vertaa(v)) return null;
      return ilmanAakkosia(vertaa(v)) === ilmanAakkosia(vertaa(oikea));
    };
    const voiPuhua = () => { try { return fn('voiPuhua') ? !!apu.voiPuhua() : false; } catch (e) { return false; } };
    const kirjaa = tieto => {
      try { if (fn('kirjaaTulos')) apu.kirjaaTulos(tieto); else if (window.Tulokset && typeof window.Tulokset.kirjaa === 'function') window.Tulokset.kirjaa(tieto); }
      catch (e) { /* loki ei estä peliä */ }
    };
    return { fn, el, arvioi, voiPuhua, kirjaa };
  }

  /* ---------- taistelu ---------- */
  function aloita(paikka, apu) {
    apu = apu || {};
    // AV-077: takaa-ajo käyttää samaa paikkamerkintää (.pomo[data-pomo="ajo-t20"]), joten app.js:ää ei tarvitse muuttaa.
    if (AJOT[paikka.dataset.pomo]) { if (S && K) takaaAjo(paikka, apu, AJOT[paikka.dataset.pomo]); return; }
    const P = POMOT[paikka.dataset.pomo];
    if (!P || !S || !K) return;
    const { fn, el, arvioi, voiPuhua, kirjaa } = tyokalut(apu);
    const tee = P.tee(opetetut(P.id));
    let kirjoitus = oletusKirjoitus();
    let kello = lue('pomo-kello', true) !== false;   // AV-027: oletus päällä
    let elama, matka, kysymys, vastattu, viimeiset = [];

    const kuvaEl = () => { const s = el('span', { class: 'pomo-peto', role: 'img', 'aria-label': P.nimi }); s.innerHTML = P.kuva(); return s; };
    const malli = P.lasit ? P.lasit.malli : null;
    // Maia taistelussa: kaksikon antamat lasit (vain pomotaisteluissa); vinossa = tyrmätty.
    const kasvo = (id, luokka, valinnat) => (window.Kuvitus && window.Kuvitus.avatar(id, luokka, valinnat)) || null;
    const maia = (vinossa, luokka) => kasvo('maia', luokka || 'pomo-maia', { lasit: malli, vinossa: !!vinossa }) || el('span', { class: luokka || 'pomo-maia' });
    const tahdet = () => el('span', { class: 'pomo-tahdet', 'aria-hidden': 'true' }, el('span', {}, '★'), el('span', {}, '✦'), el('span', {}, '★'));
    lahja();

    /* Esittelykohtaus (sivun .pomo-lahja[data-pomo]): Capivara ojentaa lasit, Maia laittaa ne päähän. */
    function lahja() {
      const juuri = paikka.closest('main') || document;
      juuri.querySelectorAll(`.pomo-lahja[data-pomo="${P.id}"]`).forEach(kohde => {
        if (!P.lasit || !window.Kuvitus || typeof window.Kuvitus.aurinkolasit !== 'function') return;
        kohde.innerHTML = '';
        const lasit = el('span', { class: 'pomo-lahja-lasit' });
        lasit.innerHTML = `<svg viewBox="8 25 84 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${window.Kuvitus.aurinkolasit(malli, 'pomolahja' + P.id)}</svg>`;
        kohde.append(el('div', { class: 'pomo-lahja-kuva', role: 'img', 'aria-label': 'O Capivara entrega os óculos de luta, e a Maia já está com eles.' },
          kasvo('kertoja', 'pomo-lahja-kasvo', { mandariini: true }), lasit, maia(false, 'pomo-lahja-kasvo')),
          el('p', {}, el('b', {}, 'Óculos de luta: '), P.lasit.nimi + '. A Maia só usa estes óculos nas lutas finais. Cada luta, um par novo.'));
      });
    }

    /* AV-027 (omistaja 19.10.2026): ei esittelylaatikkoa (peto, kuvaus), koska taistelun pitää olla yllätys: vain Capivaran
       kuvake, kommentti ja ”Começar a luta”. Kirjoitustila ja Kello näkyvät vasta ensimmäisen tappion (tai voiton) jälkeen. */
    function alku() {
      paikka.innerHTML = '';
      let havio = false;
      try { const v = localStorage.getItem('tottakai-pomo-havio-' + P.id); havio = v === 'true' || v === '1'; } catch (e) { havio = false; }
      const voitti = voitettu(P.id);
      const ak = P.alku || {};   // §4.1 vaihtelu: Capivaran kommentit pomoittain (oletus = K1)
      const kommentti = voitti ? (ak.voitti || 'De novo? A fera voltou, mas você já sabe o caminho. Óculos no rosto!')
        : havio ? (ak.havio || 'Ela pegou você, mas a gente puxou você de volta. Agora você pode escolher como lutar. Respira e vai.')
          : (ak.eka || 'Não dá tempo de explicar. Óculos no rosto, dedo no botão. O Peixe-boi já está… acordando.');
      const nappi = el('button', { type: 'button', class: 'visa-aloita' }, 'Começar a luta');
      nappi.addEventListener('click', () => avaa(nappi));
      const kyltti = el('span', { class: 'pomo-vaara-kyltti', role: 'img', 'aria-label': 'Placa: ' + [(P.kyltti || {}).otsikko || 'VAARA!', (P.kyltti || {}).rivi1 || 'PERIGO', (P.kyltti || {}).rivi2 || 'ZONA DA FERA'].join(' · ') });
      kyltti.innerHTML = vaaraKyltti(P.kyltti);
      const osat = [kyltti, el('div', { class: 'apuhahmo pomo-alku' }, kasvo('kertoja', 'pomo-alku-kasvo', { mandariini: true }),
        el('p', { class: 'apuhahmo-kupla' }, el('b', {}, 'Capivara: '), kommentti))];
      if (voitti) osat.push(el('p', { class: 'ohje' }, `Você já venceu esta fera. Lutar de novo vale +${P.uusinta} 🍊 no fim.`));
      if (havio || voitti) {
        const valinnat = el('div', { class: 'pomo-valinnat' });
        const kirjoitusRuutu = el('input', { type: 'checkbox' });
        kirjoitusRuutu.checked = kirjoitus;
        kirjoitusRuutu.addEventListener('change', () => { kirjoitus = kirjoitusRuutu.checked; try { localStorage.setItem('tottakai-kirjoitustila', kirjoitus ? 'true' : 'false'); } catch (e) { /* ohita */ } });
        const kelloRuutu = el('input', { type: 'checkbox' });
        kelloRuutu.checked = kello;
        kelloRuutu.addEventListener('change', () => { kello = kelloRuutu.checked; kirjoita('pomo-kello', kello); });
        valinnat.append(
          el('label', { class: 'valintaruutu' }, kirjoitusRuutu, ' ✍ Modo escrita: digitar a resposta (a = ä e o = ö são aceitos). Desligado: tocar numa das opções.'),
          el('label', { class: 'valintaruutu' }, kelloRuutu, ' ⏱ Com relógio: a fera nunca para. Desligado: ela chega bem perto, mas espera a sua resposta.'));
        osat.push(valinnat);
      }
      osat.push(nappi);
      paikka.append(...osat);
    }

    /* ---------- koko ruudun areena ----------
       Omistaja 17.10.2026: ”full screen event … high intensity … separate from the rest”; ”the beast is coming, and right
       answers slow it down or knock it back slightly. But its always increasing in size, and if you fail too much, then it
       GETS YOU!”; ”Even when you win, it should feel like it was kind of last minute.”
       - Kehys kuten Kassapaniikki (.vp, body.vp-auki: sivu ei vieri alla). Sair / Esc / reitin vaihto sulkee. AV-026: areena
     koko leveydeltä, kirjoitus-UI ja Maia alapalkin keskellä, isku = sivuttainen palkki, väärä = Maia tärisee.
       - Matka 0…P.matka on jatkuva, ja peto tulee kohti katsojaa (korkeus ja alareuna lasketaan matkasta, T2).
         Peto hiipii koko ajan, kun kysymys odottaa vastausta (palautteen lukemisen ajan se odottaa). Ilman kelloa
         hiipiminen pysähtyy kattoon (pohja + HIIPIMA, enintään P.matka − 0,5): pelkkä hitaus ei kaada aloittelijaa.
         Kellotilassa hiipiminen on nopeampaa eikä pysähdy.
       - Oikea vastaus lyö pedon vähän taaksepäin (TAKAISKU), mutta ei pohjan alle. Pohja nousee jokaisesta osumasta
         ((osumat / P.osumat) · (P.matka − P.varaus)). Jokaisen uuden kysymyksen alussa peto astuu (astu: aina vähän, pohjan
         alla enemmän), ja pohjan alla se myös hiipii kolminkertaisella nopeudella: se kasvaa koko ajan, ja voittokin
         tulee viime tingassa (virheettömässäkin voitossa peto on lopussa n. 2,5 askeleen päässä, AV-027).
         Virheettömän voiton voi aina saada: ilman kelloa hiipiminen ja askeleet pysähtyvät kattoon.
       - Väärä vastaus: +VIRHE (tärinä, punainen ja sininen välähdys, tömähdys ja murina). Kun matka on P.matka, peto
         SAA MAIAN: syöksy ruudun täyteen, silmät sulkeutuvat (luomet, sumeus, musta), ja Maia herää turvapaikassa
         (saaren riippumatossa), jonne Capivara ja Peixe-boi pelastivat hänet: Tentar de novo / Voltar ao livro.
       - Viimeinen osuma: hidastettu loppuisku, peto räjähtää konfetiksi, fanfaari, voittopaneeli.
       - prefers-reduced-motion: ei tärinää, syöksyä eikä hidastusta; vain lyhyt värisävy ja nopea häivytys mustaan. */
    const HIIPIMA = 0.8, TAKAISKU = 0.5, VIRHE = 1;
    // Matkaa sekunnissa. AV-027 (omistaja 19.10.2026: paras mahdollinen voitto 1,7 askeleen päästä oli liian vaikea muille):
    // kello 1/16 → 1/22, rauhallinen 1/22 → 1/30, askel 0,15 → 0,1, pohjan varaus 1,2 → P.varaus 2,1 (simulointi: virheetön
    // voitto 2,5 askeleen päästä; kellolla 10 s / vastaus ja 3 virhettä voittaa viime tingassa, 15 s ja 2 virhettä ei).
    const NOPEUS = { rauhallinen: 1 / 30, kello: 1 / 22 };
    let ruutu = null, a, palkki, tila, pipit, laatikko, ohjaus, maiaRuutu, aaniNappi, ajatus, runko, alaSeuraaja = null;
    let syke = 0, sykeVali = 0, tehoste = 0, tikki = 0, viimeTikki = 0, ajossa = false, ajastimet = [];
    const auki = () => !!(ruutu && ruutu.isConnected);
    const liike = () => { try { return !window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return true; } };
    // Ajastin, joka peruuntuu, kun areena suljetaan tai taistelu alkaa alusta.
    const viive = (f, ms) => { const t = setTimeout(() => { ajastimet = ajastimet.filter(x => x !== t); if (auki()) f(); }, ms); ajastimet.push(t); };
    const pohja = () => ((P.osumat - elama) / P.osumat) * (P.matka - (P.varaus || 1.2));
    // Askel jokaisen uuden kysymyksen alussa: peto tulee aina vähän (0,1) ja pohjan alla enemmän (70 % erosta).
    function astu() {
      const katto = kello ? P.matka : Math.min(P.matka - 0.5, pohja() + HIIPIMA);
      const uusi = Math.min(katto, matka + 0.1 + 0.7 * Math.max(0, pohja() - matka));
      if (uusi <= matka + 0.01) return false;
      matka = uusi;
      paivita();
      valahda('lahestyy');
      Aanet.soita('murina');
      return matka >= P.matka;
    }
    const luku = x => x.toFixed(1).replace('.', ',');
    function nappain(e) { if (e.key === 'Escape' && !document.querySelector('.kupla')) sulje(); }
    function reittiVaihtui() { sulje(true); }

    function avaa(mista) {
      Aanet.herata();   // käyttäjän ele: vasta nyt ääni saa alkaa
      if (auki()) sulje(true);
      palkki = el('span', { class: 'pomo-elama-taso' });
      tila = el('span', { class: 'visa-tila' });
      pipit = el('span', { class: 'pomo-matka', 'aria-hidden': 'true' });
      for (let i = 0; i < P.matka; i++) pipit.append(el('span'));
      aaniNappi = el('button', { type: 'button', class: 'vp-pieni pomo-aani', 'aria-label': 'Efeitos sonoros', 'aria-pressed': String(Aanet.paalla()) }, Aanet.paalla() ? '🔊' : '🔇');
      aaniNappi.addEventListener('click', () => {
        Aanet.aseta(!Aanet.paalla());
        aaniNappi.textContent = Aanet.paalla() ? '🔊' : '🔇';
        aaniNappi.setAttribute('aria-pressed', String(Aanet.paalla()));
        if (Aanet.paalla() && ajossa) Aanet.aloitaDrone();
      });
      const suljeNappi = el('button', { type: 'button', class: 'vp-pieni', 'aria-label': 'Sair da luta' }, '✕ Sair');
      suljeNappi.addEventListener('click', () => sulje());
      a = el('div', { class: 'pomo-naytto' });
      laatikko = el('div', { class: 'visa pomo-kehys' });
      maiaRuutu = el('div', { class: 'pomo-maia-ruutu' });
      // Omistaja 21.10.2026: väärän vastauksen selitys ponnahtaa ajatuskuplana Maian kuvakkeesta (ei kortissa).
      ajatus = el('div', { class: 'pomo-ajatus' });
      // AV-026 (omistaja 20.10.2026: ”similar to the ui of doom”): kirjoitus-UI ja Maian kuvake yhdessä alareunan keskellä.
      ohjaus = el('div', { class: 'pomo-ohjaus' }, maiaRuutu, laatikko);
      ruutu = el('div', { class: 'vp pomo-ruutu', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Luta final: ' + P.nimi },
        el('div', { class: 'vp-yla pomo-hud' }, el('b', {}, '⚔ ' + P.nimi),
          el('span', { class: 'pomo-elama', role: 'progressbar', 'aria-label': 'Vida da fera', 'aria-valuemin': '0', 'aria-valuemax': String(P.osumat) }, palkki),
          tila, pipit, aaniNappi, suljeNappi),
        runko = el('div', { class: 'pomo-runko' }, a, ohjaus));   // AV-026: areena koko leveydeltä, palkki alla
      /* Omistaja 21.10.2026: ”I want the ui part in the lower part of the screen to take minimum space … Remove the background
         completely so the boss arena shows behind the ui box”. Taistelun aikana alapalkki on areenan päällä (tottakai.css);
         --pomo-ala = palkin korkeus, jotta horisontti ja peto mitoittuvat palkin yläpuolelle jäävään näyttämöön. */
      // --pomo-kupla-ala: kapealla ruudulla ajatuskupla on koko palkin yläpuolella (ei peitä kysymystä), Maian kohdalla.
      const asetaAla = () => {
        if (!runko || !ohjaus) return;
        runko.style.setProperty('--pomo-ala', ohjaus.offsetHeight + 'px');
        const m = maiaRuutu.getBoundingClientRect(), o = ohjaus.getBoundingClientRect();
        if (m.height) runko.style.setProperty('--pomo-kupla-ala', Math.round(m.bottom - o.top + 22) + 'px');
      };
      if (window.ResizeObserver) { alaSeuraaja = new ResizeObserver(asetaAla); alaSeuraaja.observe(ohjaus); }
      setTimeout(asetaAla, 0);
      ruutu.dataset.pomo = P.id;   // §4.1 vaihtelu: areenan tausta ja värit pomoittain (tottakai.css .pomo-ruutu[data-pomo])
      Aanet.asetukset(P.aanet);     // §4.1 vaihtelu: drone ja murina pomoittain (oletus = K1)
      document.body.append(ruutu);
      document.body.classList.add('vp-auki', 'pomo-auki');
      document.addEventListener('keydown', nappain);
      window.addEventListener('hashchange', reittiVaihtui);
      if (mista) mista.blur();
      taistelu();
    }
    // Sulje areena: ajastimet ja äänet pois, sivu takaisin (vain = reitti vaihtui: ei uutta alkua eikä fokusta).
    function sulje(vain) {
      seis();
      ajastimet.forEach(clearTimeout); ajastimet = [];
      clearTimeout(tehoste);
      document.removeEventListener('keydown', nappain);
      window.removeEventListener('hashchange', reittiVaihtui);
      if (alaSeuraaja) { alaSeuraaja.disconnect(); alaSeuraaja = null; }
      document.body.classList.remove('vp-auki', 'pomo-auki');
      if (ruutu) ruutu.remove();
      ruutu = null;
      if (vain || !paikka.isConnected) return;
      alku();
      const n = paikka.querySelector('.visa-aloita');
      if (n) n.focus();
    }
    // Hiipiminen, syke ja jännitysmatto seis (tulos, kiinni, sulkeminen).
    function seis() {
      ajossa = false;
      clearInterval(tikki); tikki = 0;
      clearInterval(syke); syke = 0; sykeVali = 0;
      Aanet.pysaytaDrone();
    }

    function taistelu() {
      if (!auki()) return;
      seis();
      ajastimet.forEach(clearTimeout); ajastimet = [];
      elama = P.osumat; matka = 0; viimeiset = [];
      ruutu.classList.remove('virhe', 'isku', 'sulkeutuu', 'turvassa', 'tuloksessa', 'kiinni');
      const vanhat = ruutu.querySelector('.pomo-silmat');
      if (vanhat) vanhat.remove();
      a.className = 'pomo-naytto';
      a.innerHTML = '';
      a.append(el('span', { class: 'pomo-horisontti', 'aria-hidden': 'true' }), kuvaEl(),
        el('span', { class: 'pomo-valo', 'aria-hidden': 'true' }));
      maiaRuutu.replaceChildren(maia(), ajatus);
      ajatus.replaceChildren();
      ajatus.classList.remove('nakyy');
      Aanet.aloitaDrone();
      paivita();
      seuraava();
      viimeTikki = Date.now();
      tikki = setInterval(hiipi, 200);
    }
    // Peto hiipii (200 ms välein). Pohjan alla se kiihdyttää (kolminkertainen nopeus), kunnes on taas pohjalla.
    function hiipi() {
      const nyt = Date.now(), dt = Math.min(1, (nyt - viimeTikki) / 1000);
      viimeTikki = nyt;
      if (!auki() || !ajossa) return;
      const katto = kello ? P.matka : Math.min(P.matka - 0.5, pohja() + HIIPIMA);
      if (matka >= katto) return;
      const ennen = Math.floor(matka);
      const nopeus = (kello ? NOPEUS.kello : NOPEUS.rauhallinen) * (matka < pohja() ? 3 : 1);
      matka = Math.min(katto, matka + dt * nopeus);
      paivita();
      if (Math.floor(matka) > ennen) { valahda('lahestyy'); Aanet.soita('murina'); }
      if (matka >= P.matka) { vastattu = true; saaKiinni(); }
    }
    function paivita() {
      palkki.style.width = Math.round(100 * elama / P.osumat) + '%';
      palkki.parentNode.setAttribute('aria-valuenow', String(elama));
      tila.textContent = `Vida ${elama}/${P.osumat} · distância ${luku(Math.max(0, P.matka - matka))}`;
      [...pipit.children].forEach((s, i) => s.classList.toggle('lahella', i >= P.matka - Math.round(matka)));
      a.dataset.lahella = String(Math.floor(matka));
      // Peto tulee kohti katsojaa: korkeus ja alareuna lasketaan matkasta (T2: vain lasketut mitat). --t = 0…1; tottakai.css
      // mitoittaa pedon alapalkin yläpuolelle jäävästä näyttämöstä (korkeus 24 % → 190 %, alareuna 30 % → −55 %).
      const peto = a.querySelector('.pomo-peto');
      if (peto) peto.style.setProperty('--t', Math.pow(Math.min(1, matka / P.matka), 1.6).toFixed(3));
      // Sydämenlyönti ja punainen reunus, kun peto on aivan lähellä (viimeiset kaksi askelta).
      const vaara = ajossa && elama > 0 && matka >= P.matka - 2 && matka < P.matka;
      const vali = matka >= P.matka - 1 ? 560 : 860;
      a.classList.toggle('vaara', vaara);
      if (!vaara && syke) { clearInterval(syke); syke = 0; sykeVali = 0; }
      if (vaara && sykeVali !== vali) {
        clearInterval(syke);
        syke = setInterval(() => Aanet.soita('sydan'), vali);
        sykeVali = vali;
      }
    }
    function valahda(luokka) {
      a.classList.remove('osuma', 'lahestyy');
      void a.offsetWidth;   // animaatio alkaa alusta
      a.classList.add(luokka);
      setTimeout(() => { if (a) a.classList.remove(luokka); }, 650);
    }
    /* AV-026: onnistunut isku = koko näytön kirkas sivuttainen palkki (omistaja 20.10.2026: lasersäde pois, palkki jää). */
    function pyyhkaisy() {
      if (!ruutu || !liike()) return;
      const palkki = el('span', { class: 'pomo-pyyhkaisy', 'aria-hidden': 'true' });
      ruutu.append(palkki);
      setTimeout(() => palkki.remove(), 650);
    }
    // Koko ruudun tehoste: 'virhe' (tärinä + punainen/sininen välähdys) tai 'isku' (valkoinen välähdys), n. 400 ms.
    function efekti(luokka) {
      if (!ruutu) return;
      clearTimeout(tehoste);
      ruutu.classList.remove('virhe', 'isku');
      void ruutu.offsetWidth;
      ruutu.classList.add(luokka);
      tehoste = setTimeout(() => { if (ruutu) ruutu.classList.remove(luokka); }, 450);
    }

    function uusiKysymys() {
      for (let i = 0; i < 40; i++) {
        let k = null;
        try { k = tee(); } catch (e) { k = null; }
        if (!k || !k.oikea) continue;
        const tunnus = k.lause + '|' + k.vihje;
        if (viimeiset.includes(tunnus) && i < 30) continue;
        viimeiset = [tunnus, ...viimeiset].slice(0, 6);
        return k;
      }
      return null;
    }
    function seuraava() {
      if (!auki()) return;
      laatikko.innerHTML = '';
      ajatus.replaceChildren();
      ajatus.classList.remove('nakyy');
      laatikko.classList.toggle('napautus', !kirjoitus);   // Continuar sivussa (tottakai.css)
      ohjaus.scrollTop = 0;
      // Ensimmäisen kysymyksen jälkeen peto astuu ennen jokaista uutta kysymystä (se tulee aina).
      if (viimeiset.length && astu()) { vastattu = true; saaKiinni(); return; }
      kysymys = uusiKysymys();
      nykyinen = kysymys;
      vastattu = false;
      if (!kysymys) { ajossa = false; laatikko.append(el('p', { class: 'ohje' }, 'Faltam palavras no vocabulário do curso para esta luta.')); return; }
      ajossa = true;
      viimeTikki = Date.now();
      const k = kysymys;
      const rivi = el('p', { class: 'visa-kysymys' },
        el('span', { class: 'visa-sana', lang: 'fi-FI', 'data-ei-kuplaa': '' }, k.lause),
        // AV-026 (omistaja 20.10.2026): taivutettava sana lähes kysymyksen kokoisena, kirkkaalla korostuksella, ilman sulkeita.
        el('span', { class: 'visa-ohje', lang: 'pt-BR' }, el('span', { class: 'pomo-sana', lang: 'fi-FI', 'data-ei-kuplaa': '' }, k.vihje),
          merkitys(k.vihje) && merkitys(k.vihje).toLowerCase() !== String(k.vihje).toLowerCase() ? ' · ' + merkitys(k.vihje) : ''));
      laatikko.append(rivi);
      const palaute = el('p', { class: 'palaute', 'aria-live': 'polite' });
      /* Omistaja 20.10.2026: ei uutta Continuar-nappia; kirjoitustilassa Atacar muuttuu Continuariksi, ja kortti pysyy aina
         saman kokoisena (palautteella kiinteä korkeus; napautustilassa Continuar on paikallaan näkymättömänä). */
      let voiJatkaa = false;
      const jatka = () => { if (voiJatkaa && !a.classList.contains('kiinni') && elama > 0) { voiJatkaa = false; seuraava(); } };
      const jatko = el('button', { type: 'button', class: 'visa-seuraava pomo-jatko-sivu pomo-odottaa', tabindex: '-1' }, 'Continuar →');   // napautustila: kortin oikeassa yläkulmassa (omistaja 20.10.)
      jatko.addEventListener('click', jatka);
      let atacar = null;
      const vastaa = (annettu, ok, nappi) => {
        if (vastattu) return;
        vastattu = true;
        ajossa = false;   // palautteen lukemisen ajan peto odottaa
        const tieto = { lahde: 'pomo', oppitunti: P.id, avain: `pomo-${P.id}:${k.laji}:${k.oikea}`, teksti: `${k.lause} (${k.vihje}) → ${k.oikea}`, oikein: ok, reitti: P.reitti };
        kirjaa(tieto);
        const lause = k.lause.replace('___', k.oikea);
        let kiinni = false;
        if (ok) {
          const lattia = pohja();   // osuma ei koskaan tuo petoa lähemmäs
          elama = Math.max(0, elama - 1);
          matka = Math.max(Math.min(matka, lattia), matka - TAKAISKU);
          paivita();
          valahda('osuma');
          efekti('isku');
          pyyhkaisy();
          Aanet.soita('osuma');
          const heitto = el('span', { class: 'pomo-heitto', lang: 'fi-FI', 'aria-hidden': 'true' }, k.oikea);
          a.append(heitto);
          setTimeout(() => heitto.remove(), 900);
          palaute.className = 'palaute ok';
          palaute.textContent = (elama <= 0 ? 'Golpe final! ' : 'Golpe! A fera recuou um pouco. ') + lause;
          // Osuma = 1 🍊 (app.js:n passo:tulos-kuuntelija palkitsee kohteen kerran; heitto on uusi elementti joka osumalla,
          // ei .visa-laatikon sisällä, joten jokainen osuma lasketaan kuten Treenin jokainen oikea vastaus).
          if (fn('ilmoitaTulos')) apu.ilmoitaTulos(heitto, 'oikein');
        } else {
          matka = Math.min(P.matka, matka + VIRHE);
          kiinni = matka >= P.matka;
          paivita();
          valahda('lahestyy');
          efekti('virhe');
          Aanet.soita('virhe');
          if (!kiinni) setTimeout(() => Aanet.soita('murina'), 160);
          const miksi = k.miksi[pieni(annettu)];
          palaute.className = 'palaute ei';
          palaute.textContent = `A fera avançou${miksi ? ': ' + miksi : ''}. Certo: ${lause} Regra: ${(P.saanto && P.saanto[k.laji]) || SAANTO[k.laji]}` + (kiinni ? ' E agora… ela pegou a Maia!' : '');
          ajatus.classList.add('nakyy');   // ajatuskupla Maian kuvakkeesta (omistaja 21.10.2026)
          if (fn('ilmoitaTulos')) apu.ilmoitaTulos(a, 'vaarin');
          if (nappi) nappi.classList.add('vaarin');
        }
        // Omistaja 21.10.2026: ”Boss fights dont really need voicelines … Cut all voice lines from all bosses (that have not
        // been produced, can be added later).” Valmis leike soi (K1, osa K2); muuten hiljaista, ei selaimen puhetta.
        if (voiPuhua() && window.Aani && fn('sana')) { try { window.Aani.soita(apu.sana(lause), { vainLeike: true }); } catch (e) { /* ääni ei estä peliä */ } }
        if (elama <= 0) { loppuisku(); return; }
        if (kiinni) { viive(saaKiinni, 650); return; }
        voiJatkaa = true;
        if (atacar) { atacar.textContent = 'Continuar →'; atacar.classList.add('pomo-jatka'); atacar.focus(); }
        else { jatko.classList.remove('pomo-odottaa'); jatko.removeAttribute('tabindex'); jatko.focus(); }
      };
      if (kirjoitus) {
        const syote = el('input', { type: 'text', class: 'aukko-syote treeni-syote', lang: 'fi-FI', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Resposta' });
        const nappi = el('button', { type: 'button', class: 'pieni-nappi' }, 'Atacar');
        atacar = nappi;
        const tarkista = () => {
          if (vastattu) return;
          const tulos = arvioi(syote.value, k.oikea);
          if (tulos === null) return;
          syote.dataset.tulos = tulos ? 'oikein' : 'vaarin';
          syote.readOnly = true;
          vastaa(syote.value, tulos, null);
        };
        nappi.addEventListener('click', () => { if (!vastattu) tarkista(); else jatka(); });
        syote.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (!vastattu) tarkista(); else jatka(); } });
        laatikko.append(el('div', { class: 'treeni-kirjoitus' }, syote, nappi));
        setTimeout(() => { if (syote.isConnected) syote.focus(); }, 0);
      } else {
        const valinnat = el('div', { class: 'vaihtoehdot' });
        const vaihtoehdot = sekoita([...new Set([k.oikea, ...k.harhat.filter(Boolean)])].slice(0, 4));
        for (const v of vaihtoehdot) {
          const b = el('button', { type: 'button', lang: 'fi-FI' }, v);
          b.addEventListener('click', () => {
            if (vastattu) return;
            const ok = v === k.oikea;
            if (ok) b.classList.add('oikein');
            else [...valinnat.children].forEach(x => { if (x.textContent === k.oikea) x.classList.add('oikein'); });
            vastaa(v, ok, ok ? null : b);
          });
          valinnat.append(b);
        }
        laatikko.append(valinnat);
      }
      // Palaute kortin sijaan Maian ajatuskuplaan: kupla näkyy vain väärästä vastauksesta (omistaja 21.10.2026); oikean
      // vastauksen teksti jää näkymättömäksi ruudunlukijalle (aria-live), kortti pysyy saman kokoisena.
      ajatus.replaceChildren(palaute);
      if (!kirjoitus) laatikko.append(jatko);
    }

    // Kaksikon kasvot: Capivara mandariini päässä, Peixe-boi havaijipaidassa (kuten saarella).
    const kaksikko = (id, luokka) => kasvo(id, luokka, id === 'kertoja' ? { mandariini: true } : { havaiji: true });
    function tulos(otsikko, puhuja, teksti, { kuva = null, lisat = [], nappi = 'Lutar de novo' } = {}) {
      seis();
      laatikko.innerHTML = '';
      ajatus.replaceChildren();
      ajatus.classList.remove('nakyy');
      ohjaus.scrollTop = 0;
      const uudelleen = el('button', { type: 'button', class: 'visa-aloita' }, nappi);
      uudelleen.addEventListener('click', taistelu);
      const kirjaan = el('button', { type: 'button', class: 'pieni-nappi toissijainen' }, 'Voltar ao livro');
      kirjaan.addEventListener('click', () => sulje());
      laatikko.append(...[el('p', { class: 'visa-tulos' }, otsikko), kuva,
        el('div', { class: 'pomo-juhla' }, kaksikko(puhuja === 'Peixe-boi' ? 'manaatti' : 'kertoja', 'pomo-juhla-kasvo'), el('p', {}, el('b', {}, puhuja + ': '), teksti)),
        ...lisat, el('div', { class: 'tehtava-napit' }, uudelleen, kirjaan)].filter(Boolean));
      ruutu.classList.add('tuloksessa');   // kortti saa enemmän tilaa (tulos alkaa ylhäältä, ei vieritetä napin kohdalle)
      uudelleen.focus({ preventScroll: true });
    }
    // Konfetti: sijainti lasketaan (T2), värit ja viiveet tulevat CSS:stä (.pomo-konfetti span:nth-child).
    function konfetti() {
      const k = el('span', { class: 'pomo-konfetti', 'aria-hidden': 'true' });
      for (let i = 0; i < 24; i++) { const c = el('span'); c.style.left = ((i * 41 + 7) % 97) + '%'; k.append(c); }
      return k;
    }

    /* Loppuisku: hidastettu isku (peto välähtää ja jähmettyy), sitten se räjähtää konfetiksi ja fanfaari soi. */
    function loppuisku() {
      seis();
      laatikko.querySelectorAll('button, input').forEach(x => { x.disabled = true; });
      const hidas = liike();
      a.classList.add('loppuisku');
      Aanet.soita('loppuisku');
      viive(() => {
        a.classList.add('rajahti');
        a.append(el('span', { class: 'pomo-pamaus', 'aria-hidden': 'true' }), konfetti());
        Aanet.soita('fanfaari');
      }, hidas ? 1400 : 200);
      viive(voitto, hidas ? 2300 : 500);
    }
    function voitto() {
      const ensimmainen = !voitettu(P.id);
      const vanha = lue('pomo-' + P.id, null) || {};
      kirjoita('pomo-' + P.id, { voitettu: true, aika: Date.now(), kerrat: (vanha.kerrat || 0) + 1 });
      const n = ensimmainen ? P.palkinto : P.uusinta;
      try { if (fn('lisaaMandariineja')) apu.lisaaMandariineja(n, 'pomo'); else if (K.mandariinit) K.mandariinit.lisaa(n, 'pomo'); } catch (e) { /* ohita */ }
      if (!auki()) return;
      a.classList.add('voitettu');
      const juhla = el('div', { class: 'pomo-voitto', role: 'img', 'aria-label': 'Festa: o Capivara, a Maia e o Peixe-boi pulam de alegria no meio de confete.' },
        konfetti(), el('span', { class: 'pomo-voitto-ryhma' }, kaksikko('kertoja', 'pomo-voitto-kasvo'), maia(false, 'pomo-voitto-kasvo'), kaksikko('manaatti', 'pomo-voitto-kasvo')));
      const ilhalle = el('a', { href: '#ilha' }, 'Ver a festa na ilha →');
      tulos(`Vitória! +${n} 🍊`, 'Capivara', arpa(P.juhla), {
        kuva: juhla,
        lisat: [el('p', { class: 'ohje' }, `Por um fio: a fera estava a ${luku(Math.max(0, P.matka - matka))} passos da Maia.`),
          ensimmainen ? el('p', {}, P.palkintoNimi, ' ', P.festa || '', ' ', ilhalle)
            : el('p', { class: 'ohje' }, (P.jaVoitettu || 'O prêmio já está na ilha. Esta vitória vale mais algumas mandarinas.') + ' ', ilhalle)]
      });
    }

    /* Peto saa Maian: syöksy ruudun täyteen (kova karjaisu), silmät sulkeutuvat (luomet ylhäältä ja alhaalta, sumeus,
       musta), sitten turvapaikka. Reduced motion: ei syöksyä, nopea häivytys mustaan. */
    function saaKiinni() {
      // Salainen saavutus (omistaja 18.10.2026): Jayn kaverit (paitsi WC+) ovat riesa ja tulevat saarelle tappioista:
      // K1 Esra-Arse, K2 Drug-Teemu, K3 Party-Boy Lisko, K4 kaikki kolme kerralla (saari.js, ehto havio).
      const TULIJAT = { k01: 'o Esra-Arse ouviu falar da derrota e veio dormir na ilha',
        k02: 'o Drug-Teemu soube da derrota e veio entrevistar todo mundo na ilha',
        k03: 'o Party-Boy Lisko ouviu falar da derrota e trouxe a festa dele para a ilha',
        k04: 'os três amigos do Jay chegaram juntos para "consolar" a Maia' };
      try {
        const avain = 'tottakai-pomo-havio-' + P.id;
        const oli = localStorage.getItem(avain);
        if (oli !== 'true' && oli !== '1') {   // JSON-totuusarvo; vanha '1' kelpaa (A6-31)
          localStorage.setItem(avain, 'true');
          // Saavutus saari.js:n listaan (Conquistas); vanha ilmoitus varalla, jos saari.js puuttuu.
          if (window.Saari && typeof window.Saari.saavutus === 'function') { window.Saari.saavutus('havio-' + P.id); window.Saari.ilmoita('Na ilha: ' + TULIJAT[P.id] + '.'); }
          else if (TULIJAT[P.id] && window.Saari && typeof window.Saari.ilmoita === 'function') window.Saari.ilmoita('🏅 Conquista secreta: ' + TULIJAT[P.id] + '.');
        }
      } catch (e) { /* ei muistia: ei saavutusta */ }
      if (!auki() || a.classList.contains('kiinni')) return;
      seis();
      laatikko.querySelectorAll('button, input').forEach(x => { x.disabled = true; });
      const hidas = liike();
      a.classList.add('kiinni');
      ruutu.classList.add('kiinni');   // Maia (alapalkissa) tärisee
      Aanet.soita('syoksy');
      ruutu.append(el('span', { class: 'pomo-silmat', 'aria-hidden': 'true' }, el('span', { class: 'pomo-luomi' }), el('span', { class: 'pomo-luomi' })));
      viive(() => { ruutu.classList.add('sulkeutuu'); }, hidas ? 520 : 30);
      viive(() => Aanet.soita('plaft'), hidas ? 1500 : 300);
      viive(turvaan, hidas ? 2500 : 750);
    }
    /* Turvapaikka: Maia herää saaren riippumatossa (lasit vinossa, tähdet), Capivara ja Peixe-boi vieressä. */
    function turvaan() {
      const k = kysymys;
      a.className = 'pomo-naytto pomo-turva';
      a.innerHTML = '';
      const riippu = el('span', { class: 'pomo-turva-kuva' });
      riippu.innerHTML = riippumattoKuva();
      const lepaa = el('span', { class: 'pomo-turva-maia' }, maia(true, 'pomo-turva-kasvo'), tahdet());
      a.append(el('div', { class: 'pomo-turva-nayttamo', role: 'img', 'aria-label': 'A Maia acorda numa rede entre dois coqueiros, na ilha. O Capivara e o Peixe-boi estão do lado dela.' },
        riippu, lepaa, kaksikko('kertoja', 'pomo-turva-kaveri'), kaksikko('manaatti', 'pomo-turva-kaveri')));
      ruutu.classList.remove('sulkeutuu');
      ruutu.classList.add('turvassa');
      const silmat = ruutu.querySelector('.pomo-silmat');
      if (silmat) { silmat.classList.add('aukeaa'); viive(() => silmat.remove(), 1400); }
      Aanet.soita('turva');
      const [puhuja, repliikki] = arpa(P.pelastus && P.pelastus.length ? P.pelastus : [['Capivara', P.tappio]]);
      tulos('Ela pegou a Maia… mas a Maia está salva', puhuja, repliikki, {
        nappi: 'Tentar de novo',
        lisat: [el('p', {}, P.tappio),
          k ? el('p', { class: 'ohje' }, 'A última frase, certinha: ', el('span', { lang: 'fi-FI', 'data-ei-kuplaa': '' }, k.lause.replace('___', k.oikea))) : null,
          el('p', { class: 'ohje' }, `Você acertou ${P.osumat - elama} de ${P.osumat} golpes. Errar não tira nada: tente de novo quantas vezes quiser, ou volte ao livro e revise.`)].filter(Boolean)
      });
    }
    alku();
  }

  /* ---------- AV-077: takaa-ajo peruutuspeilissä (oppitunti 20, osa B) ----------
     Omistaja 22.10.2026: ”Its the boss arena style view. But its a car with the center mirror. Maia is riding with Hiisi.
     Hiisi ofcourse as utter disdain for even the most basic of traffic rules. The cops show up! They are visible in the
     rear view mirror, and the view becomes focused on the mirror. They are driving in a strange city, and Maia must give
     Hiisi directions to avoid the cops (suoraan, vasemmalle, käänny ympäri, nopeammin, hitaammin, etc). Wrong instructions
     bring the cops closer and finally BUSTED. Right instructions lead to a getaway Hiisi style.” Omistaja 23.10.: ”do it”.
     Pomomoottorista käytössä: sama koko ruudun areena (.vp.pomo-ruutu, HUD, alapalkki .pomo-ohjaus, Maian kuvake ja
     ajatuskupla, välähdykset .pomo-valo), Kirjoitustila ja Kello (samat asetukset kuin pomoilla: tottakai-kirjoitustila,
     pomo-kello; valinnat näkyvät ensimmäisen tappion tai voiton jälkeen), äänet (Aanet: moottori = drone, sireeni,
     renkaat, fanfaari), aloituskyltti (vaaraKyltti) ja tulosloki. Omat osat: tuulilasinäkymä, peili, kartta, kierrokset.
     - Käskyt yksikössä (Maia puhuu Hiidelle). Oppitunti 14: Käänny vasemmalle! Käänny oikealle! Aja suoraan! Käänny
       ympäri! (ympäri ilman genetiiviä: rakenne kääntyä ympäri, t20-leksikko) Pysähdy! (t02/t10) Odota! (t00);
       oppitunti 20: Aja hitaammin! Aja nopeammin! (-mmin; hitaammin = hitaasti:komp, nopeammin oma tietue t20).
       Verbin muoto taivutuskoneelta (Sanasto.paradigma: imper.2s), ei käsin.
     - Väärät vaihtoehdot (H1/H2: kukin eroaa oikeasta yhdellä asialla): te-muoto (Kääntykää, oppitunti 14), minä- tai
       hän-muoto (Käännyn, Kääntyy = väite, ei käsky) ja vastakkainen käsky (vasemmalle ↔ oikealle, hitaammin ↔ nopeammin).
     - Risteys lähestyy tuulilasissa kellon tahtiin. Väärä käsky tai liian hidas (Kello: risteys tulee) = poliisi
       lähemmäs peilissä, sireeni kovemmalle, näkymä zoomaa peiliin. A.virheet (3) virhettä = BUSTED (Hiisi: ”Poliisi.
       Taas.” ja kulttuurilaatikko päiväsakoista). Kaikki risteykset = pakomatka Hiiden tapaan: hän pysäköi rauhallisesti
       saunan eteen, Purjo odottaa siellä.
     - Kalibrointi (A.aika, sekuntia risteystä kohden, Kello päällä): napautus 9, kirjoitus 16 (kymmenen risteystä; arvio
       21.10. pomojen tahdista: 10 s / vastaus kellolla). Ilman Kelloa risteys pysähtyy eteen ja odottaa.
     - Palkinto: jokainen oikea käsky 1 🍊 (apu.ilmoitaTulos), ensimmäinen pakomatka A.palkinto, uusinta A.uusinta
       (apu.lisaaMandariineja). Voitto muistiin 'tottakai-pomo-<id>' kuten pomoilla; tappio 'tottakai-pomo-havio-<id>'.
     - prefers-reduced-motion: ei zoomausta, tärinää eikä auton heilahduksia; risteyksen lähestyminen (kello) näkyy. */
  const AJO_KASKYT = {
    vasen: { verbi: 'kääntyä', sana: 'vasemmalle', vasta: 'oikea', pt: 'vire à esquerda', merkki: '⬅', aani: 'renkaat', liike: 'vasen',
      tilanne: 'Cruzamento! A rota de fuga no mapa:' },
    oikea: { verbi: 'kääntyä', sana: 'oikealle', vasta: 'vasen', pt: 'vire à direita', merkki: '➡', aani: 'renkaat', liike: 'oikea',
      tilanne: 'Cruzamento! A rota de fuga no mapa:' },
    suoraan: { verbi: 'ajaa', sana: 'suoraan', vasta: 'ympari', pt: 'siga reto', merkki: '⬆', aani: 'kaasu', liike: 'eteen',
      tilanne: 'Cruzamento! A rota de fuga no mapa:' },
    ympari: { verbi: 'kääntyä', sana: 'ympäri', vasta: 'suoraan', pt: 'dê meia-volta', merkki: '🧱', aani: 'renkaat', liike: 'ympari',
      tilanne: 'Rua sem saída! Um muro no fim da rua.' },
    hitaammin: { verbi: 'ajaa', sana: 'hitaammin', vasta: 'nopeammin', pt: 'mais devagar', merkki: '🏫', aani: 'jarru', liike: 'hidas',
      tilanne: 'Uma escola e uma lombada. Crianças na calçada!' },
    nopeammin: { verbi: 'ajaa', sana: 'nopeammin', vasta: 'hitaammin', pt: 'mais rápido', merkki: '🚓', aani: 'kaasu', liike: 'eteen',
      tilanne: 'Rua livre pela frente, e a polícia quase no para-choque!' },
    pysahdy: { verbi: 'pysähtyä', sana: '', vasta: 'nopeammin', pt: 'pare', merkki: '🦆', aani: 'jarru', liike: 'hidas',
      tilanne: 'Uma família de patos atravessa a rua!' },
    odota: { verbi: 'odottaa', sana: '', vasta: 'suoraan', pt: 'espere', merkki: '🦆', aani: 'kvaak', liike: 'hidas',
      tilanne: 'O carro parou, mas os patos ainda estão atravessando, um por um.' }
  };
  const ajoAvain = s => pieni(s).replace(/[.!?,]+/g, '').replace(/\s+/g, ' ').replace(/ä/g, 'a').replace(/ö/g, 'o');
  const ajoLause = (muoto, sana) => `${isolla(muoto)}${sana ? ' ' + sana : ''}!`;
  /* Kysymys käskyn avaimesta: oikea käsky ja enintään kolme väärää (te-muoto, minä/hän, vastakkainen käsky). */
  /* Hiisin repliikit takaa-ajossa (omistaja 23.10.2026: ”the sound effects on correct answer is a weird snap-crash …
     Just make hiisi say like okei, and selvä, etc. And on wrong answer he curses!”). Ääni vain valmiista leikkeestä
     (vainLeike, kuten pomoilla); siihen asti puhekupla. */
  const AJO_HIISI = {
    ok: ['Okei!', 'Selvä!', 'Joo joo!', 'Selvä, pomo!', 'Okei, okei!'],
    kirous: ['Perkele!', 'Hitto!', 'Voi helkkari!', 'Voi pahus!', 'Hemmetti!']
  };
  function ajoKysymys(avain) {
    const k = AJO_KASKYT[avain];
    const p = k && muodot(k.verbi);
    if (!p || !p['imper.2s']) return null;
    const kasky = isolla(p['imper.2s']);
    const oikea = ajoLause(p['imper.2s'], k.sana);
    const harhat = [], miksi = {};
    const lisaa = (x, syy) => { if (x && ajoAvain(x) !== ajoAvain(oikea) && !harhat.includes(x)) { harhat.push(x); miksi[ajoAvain(x)] = syy; } };
    if (p['imper.2p']) lisaa(ajoLause(p['imper.2p'], k.sana), `${isolla(p['imper.2p'])} é para vocês (te, lição 14); o Hiisi é um só: ${kasky}!`);
    const h = arpa(['prees.1s', 'prees.3s']);
    if (p[h]) lisaa(ajoLause(p[h], k.sana), h === 'prees.1s' ? `${isolla(p[h])} é “eu …”: a Maia falaria dela mesma. Ordem para o Hiisi: ${kasky}!`
      : `${isolla(p[h])} é “ele …”, uma afirmação, não uma ordem. Ordem: ${kasky}!`);
    const v = AJO_KASKYT[k.vasta], pv = v && muodot(v.verbi);
    if (pv && pv['imper.2s']) lisaa(ajoLause(pv['imper.2s'], v.sana), `${ajoLause(pv['imper.2s'], v.sana)} = ${v.pt}. Aqui: ${k.pt}.`);
    return { laji: avain, lause: oikea, oikea, vihje: k.verbi, harhat, miksi, pt: k.pt };
  }
  /* Reitti: kaikki kahdeksan käskyä kerran (Odota! aina heti Pysähdy!-käskyn jälkeen: ankat ylittävät vielä katua) ja
     loput (n − 8) käännöksiä tai suoraan. Sama käsky ei tule kahdesti peräkkäin; alku ei ole ympäri eikä pysähdys. */
  function ajoReitti(n) {
    const perus = ['vasen', 'oikea', 'suoraan', 'ympari', 'hitaammin', 'nopeammin', 'pysahdy'];
    for (let y = 0; y < 300; y++) {
      const r = sekoita(perus.concat(sekoita(['vasen', 'oikea', 'suoraan', 'vasen', 'oikea']).slice(0, Math.max(0, n - 8))));
      r.splice(r.indexOf('pysahdy') + 1, 0, 'odota');
      if (r.some((x, j) => j && x === r[j - 1]) || ['ympari', 'pysahdy'].includes(r[0]) || r[r.length - 1] === 'odota') continue;
      return r;
    }
    return ['vasen', 'suoraan', 'oikea', 'hitaammin', 'vasen', 'pysahdy', 'odota', 'nopeammin', 'ympari', 'oikea'].slice(0, Math.max(8, n));
  }
  /* Kartta: reitin pisteet (alku 0,0, suunta ylös); jokainen käsky siirtää yhden korttelin (Odota!: ei siirtoa). */
  function ajoPisteet(reitti) {
    let x = 0, y = 0, dx = 0, dy = -1;
    const pisteet = [[0, 0]];
    for (const k of reitti) {
      if (k === 'vasen') [dx, dy] = [dy, -dx];
      else if (k === 'oikea') [dx, dy] = [-dy, dx];
      else if (k === 'ympari') [dx, dy] = [-dx, -dy];
      if (k !== 'odota') { x += dx; y += dy; }
      pisteet.push([x, y]);
    }
    return pisteet;
  }
  function ajoKartta(pisteet, nro) {
    const xs = pisteet.map(p => p[0]), ys = pisteet.map(p => p[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const s = 76 / Math.max(1, x1 - x0, y1 - y0);
    const ox = 50 - ((x0 + x1) / 2) * s, oy = 50 - ((y0 + y1) / 2) * s;
    const P = ([x, y]) => `${(ox + x * s).toFixed(1)} ${(oy + y * s).toFixed(1)}`;
    let ruudukko = '';
    for (let x = x0 - 1; x <= x1 + 1; x++) ruudukko += `<path d="M${(ox + x * s).toFixed(1)} 0V100"/>`;
    for (let y = y0 - 1; y <= y1 + 1; y++) ruudukko += `<path d="M0 ${(oy + y * s).toFixed(1)}H100"/>`;
    const viiva = lista => lista.length > 1 ? 'M' + lista.map(P).join('L') : '';
    const i = Math.min(nro, pisteet.length - 1);
    const loppu = pisteet[pisteet.length - 1];
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<rect width="100" height="100" fill="#f4f1e6"/><g stroke="#d9d2bd" stroke-width="3.2">${ruudukko}</g>` +
      `<path d="${viiva(pisteet.slice(i))}" fill="none" stroke="#2a6cff" stroke-width="2.6" stroke-dasharray="3 3" stroke-linecap="round"/>` +
      `<path d="${viiva(pisteet.slice(0, i + 1))}" fill="none" stroke="#9aa3b5" stroke-width="2.6" stroke-linecap="round"/>` +
      `<path d="${viiva(pisteet.slice(i, i + 2))}" fill="none" stroke="#2a6cff" stroke-width="4.4" stroke-linecap="round"/>` +
      `<g transform="translate(${P(loppu)})"><path d="M-6 -2L0 -8L6 -2Z" fill="#a8322d"/><rect x="-5" y="-2" width="10" height="7" fill="#c0392b"/><rect x="2" y="-9" width="2" height="4" fill="#5a3d22"/></g>` +
      `<circle cx="${P(pisteet[i]).split(' ')[0]}" cy="${P(pisteet[i]).split(' ')[1]}" r="4.2" fill="#e2574c" stroke="#fff" stroke-width="1.6"/></svg>`;
  }
  /* Tuulilasinäkymä (kuvitus.js:n tyyliin, tasaiset täytöt): outo kaupunki, tie, risteys (g.ajo-risteys, sijainti ja koko
     kellon mukaan), A-pilarit ja kojelauta. Risteyksen kohde (kyltti, muuri, koulu, ankat) vaihtuu käskyn mukaan. */
  function ajoNakymaKuva() {
    const viivat = [[124, 130, 1.2], [140, 154, 2.4], [166, 186, 4], [202, 236, 6.5]]
      .map(([a, b, w]) => `<path d="M${200 - w / 2} ${a}H${200 + w / 2}L${200 + w * 0.7} ${b}H${200 - w * 0.7}Z" fill="#f4f1e8"/>`).join('');
    return `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<defs><linearGradient id="ajo-taivas" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cc4ef"/><stop offset="1" stop-color="#f7e3c2"/></linearGradient></defs>` +
      `<rect width="400" height="124" fill="url(#ajo-taivas)"/>` +
      // Outo kaupunki: kallistunut torni, sipulikupoli, talo jolla on silmä, raidallinen torni ja pyöreäikkunainen talo.
      `<rect x="0" y="66" width="44" height="56" fill="#c96f8a"/><circle cx="12" cy="80" r="4" fill="#fbe3ea"/><circle cx="30" cy="80" r="4" fill="#fbe3ea"/><circle cx="12" cy="98" r="4" fill="#fbe3ea"/><circle cx="30" cy="98" r="4" fill="#fbe3ea"/>` +
      `<g transform="rotate(-9 70 122)"><rect x="58" y="34" width="24" height="88" fill="#6c7fc4"/><rect x="62" y="44" width="6" height="8" fill="#ffe28a"/><rect x="72" y="60" width="6" height="8" fill="#ffe28a"/><path d="M56 34L70 18L84 34Z" fill="#3c4a8a"/></g>` +
      `<rect x="96" y="84" width="36" height="38" fill="#e9b44c"/><path d="M100 84Q100 62 114 58Q128 62 128 84Z" fill="#3aa58f"/><path d="M114 58V48" stroke="#3aa58f" stroke-width="2"/><rect x="108" y="98" width="12" height="24" fill="#a8742c"/>` +
      `<rect x="140" y="96" width="22" height="26" fill="#d98c4a"/><rect x="236" y="98" width="24" height="24" fill="#4a9bd9"/>` +
      `<rect x="262" y="58" width="42" height="64" fill="#8a6cc4"/><ellipse cx="283" cy="78" rx="12" ry="7" fill="#fff"/><circle cx="285" cy="78" r="4.5" fill="#1d1028"/><path d="M270 70Q283 62 296 70" fill="none" stroke="#3e2a6a" stroke-width="2"/>` +
      `<rect x="312" y="46" width="22" height="76" fill="#e2574c"/><path d="M312 58H334M312 72H334M312 86H334M312 100H334" stroke="#fff" stroke-width="5"/><circle cx="323" cy="44" r="7" fill="#ffd166"/>` +
      `<rect x="342" y="74" width="58" height="48" fill="#5aa36b"/><path d="M342 74L371 56L400 74Z" fill="#3f7d4d"/>` +
      `<rect y="120" width="400" height="120" fill="#8aa66a"/>` +
      `<path d="M193 120H207L398 240H2Z" fill="#45484f"/>${viivat}` +
      `<g class="ajo-risteys" transform="translate(200 121) scale(.15)"><rect x="-700" y="-8" width="1400" height="16" fill="#45484f"/>` +
      `<rect x="-30" y="9" width="60" height="2.4" fill="#f4f1e8"/><g class="ajo-kohde"></g></g>` +
      `<path d="M0 0H30L0 240Z" fill="#1d1f24"/><path d="M400 0H370L400 240Z" fill="#1d1f24"/><rect width="400" height="9" fill="#1d1f24"/>` +
      `<path d="M0 208Q200 190 400 208V240H0Z" fill="#26282e"/>` +
      `<circle cx="104" cy="262" r="50" fill="none" stroke="#111" stroke-width="10"/><path d="M58 254H150" stroke="#111" stroke-width="8"/>` +
      `<circle cx="292" cy="224" r="13" fill="#111" stroke="#55585f" stroke-width="2"/><path class="ajo-neula" d="M292 224L284 216" stroke="#ff6b3d" stroke-width="2.4" stroke-linecap="round"/>` +
      `</svg>`;
  }
  const ajoKyltti = svg => `<g transform="translate(38 0) scale(.6) translate(-38 0)">${svg}</g>`;
  const AJO_KOHTEET = {
    nuoli: d => ajoKyltti(`<rect x="35" y="-36" width="2.4" height="34" fill="#8a8f99"/><rect x="25" y="-54" width="22" height="20" rx="2.5" fill="#1f5fbf" stroke="#fff" stroke-width="1.4"/>` +
      `<path d="${d}" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`),
    ankat: (x0, n) => Array.from({ length: n }, (_, i) => { const x = x0 + i * 9, iso = i === 0 ? 1.35 : 1;
      return `<g transform="translate(${x} 2) scale(${iso})"><ellipse cx="0" cy="0" rx="4.2" ry="3" fill="${i ? '#ffd23f' : '#8a6a3a'}"/>` +
        `<circle cx="3.6" cy="-3" r="2.2" fill="${i ? '#ffd23f' : '#3f7d4d'}"/><path d="M5.4 -3.2L8 -2.6L5.4 -2Z" fill="#f39a1e"/></g>`; }).join('')
  };
  const ajoKohde = avain => ({
    vasen: AJO_KOHTEET.nuoli('M42 -44H30M34.5 -48.5L30 -44L34.5 -39.5'),
    oikea: AJO_KOHTEET.nuoli('M30 -44H42M37.5 -48.5L42 -44L37.5 -39.5'),
    suoraan: AJO_KOHTEET.nuoli('M36 -38V-50M31.5 -45.5L36 -50L40.5 -45.5'),
    ympari: `<rect x="-36" y="-18" width="72" height="18" fill="#b5523b"/><path d="M-36 -12H36M-36 -6H36M-24 -18V-12M0 -18V-12M24 -18V-12M-12 -12V-6M12 -12V-6M-24 -6V0M0 -6V0M24 -6V0" stroke="#7e3526" stroke-width="1.2"/>` +
      ajoKyltti(`<rect x="40" y="-38" width="2.4" height="38" fill="#8a8f99"/><rect x="32" y="-54" width="18" height="18" rx="2" fill="#1f5fbf" stroke="#fff" stroke-width="1.2"/><path d="M41 -40V-50" stroke="#fff" stroke-width="3"/><path d="M37 -50H45" stroke="#d7161e" stroke-width="3.4"/>`),
    hitaammin: `<path d="M-30 6Q0 -3 30 6Z" fill="#e8c547"/><path d="M-20 4.6L-16 2M-6 3L-2 1M8 3L12 1.6M20 4.4L24 3" stroke="#1b1b1b" stroke-width="1.6"/>` +
      ajoKyltti(`<rect x="39" y="-34" width="2.4" height="34" fill="#8a8f99"/><path d="M40 -56L52 -36H28Z" fill="#fff" stroke="#d7161e" stroke-width="2.6" stroke-linejoin="round"/>` +
      `<circle cx="37" cy="-47" r="2" fill="#1b1b1b"/><path d="M37 -45V-40M35 -38L37 -40L39 -38" stroke="#1b1b1b" stroke-width="1.6"/><circle cx="43.5" cy="-45" r="1.7" fill="#1b1b1b"/><path d="M43.5 -43V-39" stroke="#1b1b1b" stroke-width="1.6"/>`) +
      `<circle cx="-44" cy="-10" r="3.2" fill="#e2574c"/><rect x="-46.5" y="-7" width="5" height="8" rx="2" fill="#2a9d8f"/><circle cx="-54" cy="-9" r="2.8" fill="#ffd166"/><rect x="-56" y="-6.4" width="4.4" height="7" rx="2" fill="#5b6fa8"/>`,
    nopeammin: '',
    pysahdy: AJO_KOHTEET.ankat(-28, 5),
    odota: AJO_KOHTEET.ankat(-4, 5)
  })[avain] || '';
  /* Peili: näkymä taaksepäin ja sininen-valkoinen poliisiauto edestä (g.ajo-poliisi, koko etäisyyden mukaan; teksti peilissä
     väärin päin kuten oikeassa peilissä). */
  function ajoPeiliKuva() {
    const ruudut = Array.from({ length: 10 }, (_, i) => `<rect x="${-55 + i * 11}" y="-25" width="5.5" height="4.5" fill="#1f4fb4"/><rect x="${-49.5 + i * 11}" y="-20.5" width="5.5" height="4.5" fill="#1f4fb4"/>`).join('');
    return `<svg viewBox="0 0 260 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<rect width="260" height="52" fill="#a8d8f2"/><rect x="0" y="30" width="34" height="22" fill="#5aa36b"/><rect x="40" y="22" width="20" height="30" fill="#e2574c"/>` +
      `<rect x="200" y="26" width="26" height="26" fill="#8a6cc4"/><rect x="232" y="34" width="28" height="18" fill="#e9b44c"/>` +
      `<rect y="50" width="260" height="50" fill="#8aa66a"/><path d="M124 50H136L236 100H24Z" fill="#45484f"/><path d="M129.4 54H130.6L131.6 62H128.4ZM128.4 70H131.6L133 86H127Z" fill="#f4f1e8"/>` +
      `<g class="ajo-poliisi" transform="translate(130 96) scale(0)">` +
      `<rect x="-55" y="-6" width="15" height="9" rx="2" fill="#111"/><rect x="40" y="-6" width="15" height="9" rx="2" fill="#111"/>` +
      `<path d="M-60 0V-30Q-58 -38 -47 -40L-35 -60Q-31 -66 -22 -66H22Q31 -66 35 -60L47 -40Q58 -38 60 -30V0Z" fill="#f7f7f4" stroke="#c9ccd2" stroke-width="1.4"/>` +
      `<path d="M-31 -58H31L41 -41H-41Z" fill="#2c3e55"/><path d="M-26 -56L-14 -56L-26 -44Z" fill="#fff" opacity=".25"/>` +
      `<rect x="-60" y="-27" width="120" height="13" fill="#fff"/>${ruudut}` +
      `<text x="0" y="-31" transform="scale(-1 1)" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="9" fill="#1f4fb4">POLIISI</text>` +
      `<ellipse cx="-45" cy="-34" rx="9" ry="4.6" fill="#fff6c8"/><ellipse cx="45" cy="-34" rx="9" ry="4.6" fill="#fff6c8"/>` +
      `<rect x="-48" y="-12" width="96" height="9" rx="3" fill="#2b2d33"/>` +
      `<rect class="ajo-valo-a" x="-22" y="-73" width="20" height="7" rx="2.5" fill="#2a6cff"/><rect class="ajo-valo-b" x="2" y="-73" width="20" height="7" rx="2.5" fill="#2a6cff"/>` +
      `</g><path d="M0 0H70L26 100H0Z" fill="#fff" opacity=".13"/></svg>`;
  }
  /* Pakomatkan loppu: punainen rantasauna, savu, järvi, laituri ja Hiiden auto pysäköitynä (hahmot HTML:nä päällä). */
  function ajoSaunaKuva() {
    return `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<rect width="400" height="150" fill="#f6d9b0"/><circle cx="330" cy="60" r="26" fill="#ffb86b" opacity=".85"/>` +
      `<path d="M0 118Q60 96 120 112Q190 92 260 110Q330 94 400 112V150H0Z" fill="#3f7d4d"/>` +
      `<rect y="140" width="400" height="34" fill="#5bb8c4"/><path d="M300 150H400M320 160H400" stroke="#8fd6dd" stroke-width="2"/>` +
      `<rect x="300" y="146" width="90" height="5" fill="#a5743f"/><rect y="170" width="400" height="70" fill="#8aa66a"/>` +
      `<path d="M150 70Q144 54 152 40M158 70Q164 52 156 34" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".7"/>` +
      `<rect x="96" y="96" width="120" height="80" fill="#a8322d"/><path d="M84 100L156 58L228 100Z" fill="#3a2a22"/><rect x="146" y="64" width="12" height="20" fill="#5a3d22"/>` +
      `<rect x="112" y="118" width="26" height="58" fill="#6a2a22"/><rect x="164" y="114" width="34" height="22" fill="#f4e6c8" stroke="#fff" stroke-width="3"/>` +
      `<path d="M96 110H216M96 130H216M96 150H216" stroke="#8f2a26" stroke-width="1.5"/>` +
      `<g transform="translate(250 196)"><rect x="0" y="-26" width="96" height="24" rx="8" fill="#4f74a8"/><path d="M14 -26L26 -44H66L80 -26Z" fill="#4f74a8"/><path d="M28 -40H46V-28H20ZM50 -40H64L74 -28H50Z" fill="#cfe6f2"/>` +
      `<circle cx="22" cy="-2" r="9" fill="#1b1b1b"/><circle cx="76" cy="-2" r="9" fill="#1b1b1b"/><circle cx="22" cy="-2" r="3.5" fill="#888"/><circle cx="76" cy="-2" r="3.5" fill="#888"/></g>` +
      `</svg>`;
  }

  const AJOT = {
    'ajo-t20': {
      id: 'ajo-t20', oppitunti: 't20', reitti: '#t20-b', nimi: 'Fuga no retrovisor',
      kierrokset: 10, virheet: 3, aika: { napautus: 9, kirjoitus: 16 }, palkinto: 20, uusinta: 5,
      kyltti: { otsikko: 'POLIISI', rivi1: 'PERSEGUIÇÃO', rivi2: 'NO RETROVISOR' },
      aanet: { drone: [46, 46.6, 69], suodin: 260 },   // moottorin jyrinä (sama jännitysmatto kuin pomoilla)
      // Kulttuurilaatikko BUSTED- ja pakomatkaruudussa; parittomat osat ovat suomea (kursiivilla, lang fi-FI).
      kulttuuri: ['Na Finlândia, um excesso pequeno de velocidade dá uma multa de valor fixo. Um excesso maior dá ', 'päiväsakot', ', as “multas-dia”: o número de dias depende da gravidade, e o valor de cada dia depende da renda de quem dirige. Quem ganha mais paga mais pelo mesmo erro. Por isso, de vez em quando, um empresário finlandês vira notícia com uma multa de dezenas de milhares de euros.']
    }
  };

  function takaaAjo(paikka, apu, A) {
    const { fn, el, arvioi, voiPuhua, kirjaa } = tyokalut(apu);
    const kasvo = (id, luokka, valinnat) => (window.Kuvitus && window.Kuvitus.avatar(id, luokka, valinnat)) || el('span', { class: luokka });
    const liike = () => { try { return !window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return true; } };
    const svgEl = (tag, attrs, svg) => { const e = el(tag, attrs); e.innerHTML = svg; return e; };
    const lueHavio = () => { try { const v = localStorage.getItem('tottakai-pomo-havio-' + A.id); return v === 'true' || v === '1'; } catch (e) { return false; } };
    let kirjoitus = oletusKirjoitus();
    let kello = lue('pomo-kello', true) !== false;

    /* Aloitus sivulla: kyltti, Hiisi ja Começar (kuten pomoilla: valinnat vasta tappion tai voiton jälkeen). */
    function alku() {
      paikka.innerHTML = '';
      const havio = lueHavio(), voitti = voitettu(A.id);
      const kommentti = voitti ? 'De novo? O Hiisi já está no carro. Ele nunca saiu de lá.'
        : havio ? 'Da última vez a polícia pegou vocês. Agora você escolhe como dar as ordens ao Hiisi.'
          : 'A polícia vai aparecer no retrovisor. Dê uma ordem ao Hiisi em cada cruzamento, em finlandês, antes que o cruzamento chegue.';
      const kyltti = svgEl('span', { class: 'pomo-vaara-kyltti', role: 'img', 'aria-label': 'Placa: ' + [A.kyltti.otsikko, A.kyltti.rivi1, A.kyltti.rivi2].join(' · ') }, vaaraKyltti(A.kyltti));
      const nappi = el('button', { type: 'button', class: 'visa-aloita' }, 'Começar a fuga');
      nappi.addEventListener('click', () => avaa(nappi));
      const osat = [kyltti, el('div', { class: 'apuhahmo pomo-alku' }, kasvo('hiisi', 'pomo-alku-kasvo'),
        el('p', { class: 'apuhahmo-kupla' }, el('b', {}, 'Hiisi: '), el('span', { lang: 'fi-FI', 'data-ei-kuplaa': '' }, 'Minä ajan.'), ' (Eu dirijo.) ', kommentti))];
      if (voitti) osat.push(el('p', { class: 'ohje' }, `Vocês já fugiram uma vez. Fugir de novo vale +${A.uusinta} 🍊 no fim.`));
      if (havio || voitti) {
        const kirjoitusRuutu = el('input', { type: 'checkbox' });
        kirjoitusRuutu.checked = kirjoitus;
        kirjoitusRuutu.addEventListener('change', () => { kirjoitus = kirjoitusRuutu.checked; try { localStorage.setItem('tottakai-kirjoitustila', kirjoitus ? 'true' : 'false'); } catch (e) { /* ohita */ } });
        const kelloRuutu = el('input', { type: 'checkbox' });
        kelloRuutu.checked = kello;
        kelloRuutu.addEventListener('change', () => { kello = kelloRuutu.checked; kirjoita('pomo-kello', kello); });
        osat.push(el('div', { class: 'pomo-valinnat' },
          el('label', { class: 'valintaruutu' }, kirjoitusRuutu, ' ✍ Modo escrita: digitar a ordem (a = ä e o = ö são aceitos). Desligado: tocar numa das opções.'),
          el('label', { class: 'valintaruutu' }, kelloRuutu, ' ⏱ Com relógio: o cruzamento chega, e quem demora perde tempo. Desligado: o carro espera a sua ordem.')));
      }
      osat.push(nappi);
      paikka.append(...osat);
    }

    let ruutu = null, a, nakyma, kehys, risteys, kohde, peili, poliisi, kartta, hudTila, pipit, laatikko, ohjaus, maiaRuutu, ajatus, runko, aaniNappi;
    let alaSeuraaja = null, ajastimet = [], tehoste = 0, raf = 0;
    let reitti = [], pisteet = [], nro = -1, virheita = 0, oikeat = 0, kysymys = null, vastattu = true, ajossa = false, kulunut = 0, viimeksi = 0, kelloPalkki = null;
    const auki = () => !!(ruutu && ruutu.isConnected);
    const viive = (f, ms) => { const t = setTimeout(() => { ajastimet = ajastimet.filter(x => x !== t); if (auki()) f(); }, ms); ajastimet.push(t); };
    function nappain(e) { if (e.key === 'Escape' && !document.querySelector('.kupla')) sulje(); }
    function reittiVaihtui() { sulje(true); }

    function avaa(mista) {
      Aanet.herata();
      if (auki()) sulje(true);
      hudTila = el('span', { class: 'visa-tila' });
      pipit = el('span', { class: 'pomo-matka', 'aria-hidden': 'true' });
      for (let i = 0; i < A.virheet; i++) pipit.append(el('span'));
      aaniNappi = el('button', { type: 'button', class: 'vp-pieni pomo-aani', 'aria-label': 'Efeitos sonoros', 'aria-pressed': String(Aanet.paalla()) }, Aanet.paalla() ? '🔊' : '🔇');
      aaniNappi.addEventListener('click', () => {
        Aanet.aseta(!Aanet.paalla());
        aaniNappi.textContent = Aanet.paalla() ? '🔊' : '🔇';
        aaniNappi.setAttribute('aria-pressed', String(Aanet.paalla()));
        if (Aanet.paalla() && ajossa) { Aanet.aloitaDrone(); Aanet.aloitaSireeni(); Aanet.sireeni(virheita); }
      });
      const suljeNappi = el('button', { type: 'button', class: 'vp-pieni', 'aria-label': 'Sair da fuga' }, '✕ Sair');
      suljeNappi.addEventListener('click', () => sulje());
      a = el('div', { class: 'pomo-naytto ajo-naytto' });
      laatikko = el('div', { class: 'visa pomo-kehys' });
      maiaRuutu = el('div', { class: 'pomo-maia-ruutu' });
      ajatus = el('div', { class: 'pomo-ajatus' });
      ohjaus = el('div', { class: 'pomo-ohjaus' }, maiaRuutu, laatikko);
      ruutu = el('div', { class: 'vp pomo-ruutu', role: 'dialog', 'aria-modal': 'true', 'aria-label': A.nimi },
        el('div', { class: 'vp-yla pomo-hud' }, el('b', {}, '🚓 ' + A.nimi), hudTila, pipit, aaniNappi, suljeNappi),
        runko = el('div', { class: 'pomo-runko' }, a, ohjaus));
      ruutu.dataset.pomo = 'ajo';
      const asetaAla = () => {
        if (!runko || !ohjaus) return;
        runko.style.setProperty('--pomo-ala', ohjaus.offsetHeight + 'px');
        const m = maiaRuutu.getBoundingClientRect(), o = ohjaus.getBoundingClientRect();
        if (m.height) runko.style.setProperty('--pomo-kupla-ala', Math.round(m.bottom - o.top + 22) + 'px');
      };
      if (window.ResizeObserver) { alaSeuraaja = new ResizeObserver(asetaAla); alaSeuraaja.observe(ohjaus); }
      setTimeout(asetaAla, 0);
      Aanet.asetukset(A.aanet);
      document.body.append(ruutu);
      document.body.classList.add('vp-auki', 'pomo-auki');
      document.addEventListener('keydown', nappain);
      window.addEventListener('hashchange', reittiVaihtui);
      if (mista) mista.blur();
      ajo();
    }
    function seis() {
      ajossa = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      Aanet.pysaytaDrone();
    }
    function sulje(vain) {
      seis();
      Aanet.pysaytaSireeni();
      ajastimet.forEach(clearTimeout); ajastimet = [];
      clearTimeout(tehoste);
      document.removeEventListener('keydown', nappain);
      window.removeEventListener('hashchange', reittiVaihtui);
      if (alaSeuraaja) { alaSeuraaja.disconnect(); alaSeuraaja = null; }
      document.body.classList.remove('vp-auki', 'pomo-auki');
      if (ruutu) ruutu.remove();
      ruutu = null;
      if (vain || !paikka.isConnected) return;
      alku();
      const n = paikka.querySelector('.visa-aloita');
      if (n) n.focus();
    }
    // Koko ruudun tehoste kuten pomoilla: 'virhe' (tärinä ja välähdys) tai 'isku' (valkoinen välähdys).
    function efekti(luokka) {
      if (!ruutu) return;
      clearTimeout(tehoste);
      ruutu.classList.remove('virhe', 'isku');
      void ruutu.offsetWidth;
      ruutu.classList.add(luokka);
      tehoste = setTimeout(() => { if (ruutu) ruutu.classList.remove(luokka); }, 450);
    }
    // Hiisin puhekupla kuskin paikan yläpuolella ja ääni valmiista leikkeestä (sama repliikki ei heti uudestaan).
    let hiisiKupla = null, hiisiEdellinen = '', hiisiAjastin = 0;
    function hiisiSanoo(lista) {
      if (!nakyma) return;
      const vaihtoehdot = lista.filter(x => x !== hiisiEdellinen);
      const teksti = vaihtoehdot[Math.floor(Math.random() * vaihtoehdot.length)];
      hiisiEdellinen = teksti;
      if (!hiisiKupla || !hiisiKupla.isConnected) { hiisiKupla = el('div', { class: 'ajo-hiisi-sanoo', lang: 'fi-FI', 'aria-live': 'polite' }); nakyma.append(hiisiKupla); }
      hiisiKupla.textContent = teksti;
      hiisiKupla.classList.remove('nakyy'); void hiisiKupla.offsetWidth; hiisiKupla.classList.add('nakyy');
      clearTimeout(hiisiAjastin);
      hiisiAjastin = setTimeout(() => { if (hiisiKupla) hiisiKupla.classList.remove('nakyy'); }, 1600);
      if (voiPuhua() && window.Aani && fn('alkio')) {
        try { const sp = el('span'); sp.dataset.puhu = teksti; sp.dataset.h = 'hiisi'; window.Aani.soita([apu.alkio(sp)], { vainLeike: true }); } catch (e) { /* ääni ei estä peliä */ }
      }
    }
    // Näkymä zoomaa peiliin (omistaja: ”the view becomes focused on the mirror”); reduced motion: ei zoomausta.
    function zoomaa(ms) {
      if (!liike() || !kehys) return;
      kehys.classList.add('zoom');
      viive(() => kehys.classList.remove('zoom'), ms);
    }
    function liikahda(luokka) {
      if (!liike() || !kehys) return;
      kehys.classList.remove('liike-vasen', 'liike-oikea', 'liike-ympari', 'liike-eteen', 'liike-hidas');
      void kehys.offsetWidth;
      kehys.classList.add('liike-' + luokka);
    }
    function asetaRisteys(t) {
      // Risteys tulee horisontista (y 121, pieni) tuulilasin alareunaan (y 196, iso); mittakaava = tien puolileveys / 30.
      const y = 121 + 75 * t, s = 0.23 + 3.95 * t;
      if (risteys) risteys.setAttribute('transform', `translate(200 ${y.toFixed(1)}) scale(${s.toFixed(3)})`);
    }
    function asetaPoliisi(taso) {
      const s = taso < 0 ? 0 : [0.34, 0.56, 0.8, 1.15][Math.min(3, taso)];
      if (poliisi) poliisi.setAttribute('transform', `translate(130 ${(96 + 6 * Math.max(0, taso)).toFixed(0)}) scale(${s})`);
      [...pipit.children].forEach((x, i) => x.classList.toggle('lahella', i < taso));
      a.dataset.lahella = String(Math.max(0, taso));
    }
    function paivitaHud() {
      hudTila.textContent = `Cruzamento ${Math.min(reitti.length, nro + 1)}/${reitti.length} · erros ${virheita}/${A.virheet}`;
    }

    /* Ajo alusta: auto liikkeelle, hetken päästä poliisi peiliin (sireeni, zoomaus peiliin), sitten ensimmäinen risteys. */
    function ajo() {
      if (!auki()) return;
      seis();
      Aanet.pysaytaSireeni();
      ajastimet.forEach(clearTimeout); ajastimet = [];
      reitti = ajoReitti(A.kierrokset);
      pisteet = ajoPisteet(reitti);
      nro = -1; virheita = 0; oikeat = 0; kysymys = null; vastattu = true;
      ruutu.classList.remove('virhe', 'isku', 'tuloksessa', 'kiinni', 'turvassa');
      a.className = 'pomo-naytto ajo-naytto';
      a.innerHTML = '';
      risteys = null;
      const kuva = svgEl('div', { class: 'ajo-kuva' }, ajoNakymaKuva());
      peili = svgEl('div', { class: 'ajo-peili', role: 'img', 'aria-label': 'Retrovisor: um carro da polícia, branco e azul, vem atrás de vocês.' }, ajoPeiliKuva());
      kartta = el('div', { class: 'ajo-kartta', role: 'img', 'aria-label': 'Mapa da rota de fuga até a sauna' });
      kehys = el('div', { class: 'ajo-kehys' }, kuva, peili, kartta, kasvo('hiisi', 'ajo-hiisi'));
      nakyma = el('div', { class: 'ajo-nakyma' }, kehys);
      a.append(nakyma, el('span', { class: 'pomo-valo', 'aria-hidden': 'true' }));
      risteys = kuva.querySelector('.ajo-risteys');
      kohde = kuva.querySelector('.ajo-kohde');
      poliisi = peili.querySelector('.ajo-poliisi');
      asetaPoliisi(-1);
      asetaRisteys(0.05);
      kartta.innerHTML = ajoKartta(pisteet, 0);
      maiaRuutu.replaceChildren(kasvo('maia', 'pomo-maia'), ajatus);
      ajatus.replaceChildren();
      ajatus.classList.remove('nakyy');
      laatikko.innerHTML = '';
      laatikko.append(el('p', { class: 'ohje' }, 'A Maia vai no banco do carona com o mapa no celular. O Hiisi dirige. Ele não olha o mapa. Nem as placas.'));
      paivitaHud();
      Aanet.aloitaDrone();
      viive(poliisiTulee, liike() ? 1400 : 300);
    }
    function poliisiTulee() {
      a.classList.add('poliisi');
      asetaPoliisi(0);
      Aanet.aloitaSireeni();
      Aanet.sireeni(0);
      a.append(el('span', { class: 'ajo-huuto', 'aria-hidden': 'true' }, 'POLIISI!'));
      laatikko.innerHTML = '';
      laatikko.append(el('p', { class: 'ohje', 'aria-live': 'polite' }, 'Polícia no retrovisor! Uma ordem por cruzamento. Três erros, e acabou a fuga.'));
      zoomaa(1700);
      viive(() => { const h = a.querySelector('.ajo-huuto'); if (h) h.remove(); seuraava(); }, liike() ? 2300 : 600);
    }

    function seuraava() {
      if (!auki()) return;
      nro++;
      ajatus.replaceChildren();
      ajatus.classList.remove('nakyy');
      if (nro >= reitti.length) { perilla(); return; }
      paivitaHud();
      kartta.innerHTML = ajoKartta(pisteet, nro);
      kysymys = ajoKysymys(reitti[nro]);
      nykyinen = kysymys;
      laatikko.innerHTML = '';
      laatikko.classList.toggle('napautus', !kirjoitus);
      ohjaus.scrollTop = 0;
      if (!kysymys) { laatikko.append(el('p', { class: 'ohje' }, 'Faltam palavras no vocabulário do curso para esta fuga.')); return; }
      const k = kysymys, tieto = AJO_KASKYT[k.laji];
      kohde.innerHTML = ajoKohde(k.laji);
      a.dataset.kasky = k.laji;
      asetaRisteys(0);
      kelloPalkki = el('span', { class: 'ajo-kello-taso' });
      const merkki = el('span', { class: 'ajo-merkki', 'aria-label': tieto.merkki === '⬅' ? 'seta para a esquerda' : tieto.merkki === '➡' ? 'seta para a direita' : tieto.merkki === '⬆' ? 'seta para a frente' : null }, tieto.merkki);
      laatikko.append(el('span', { class: 'ajo-kello', 'aria-hidden': 'true' }, kelloPalkki),
        el('p', { class: 'visa-kysymys' },
          el('span', { class: 'ajo-tilanne', lang: 'pt-BR' }, merkki, ' ', tieto.tilanne),
          kirjoitus ? el('span', { class: 'visa-ohje', lang: 'pt-BR' }, 'Diga ao Hiisi: ', el('span', { class: 'pomo-sana', lang: 'fi-FI', 'data-ei-kuplaa': '' }, k.vihje), ' + …') : null));
      const palaute = el('p', { class: 'palaute', 'aria-live': 'polite' });
      const jatko = el('button', { type: 'button', class: 'visa-seuraava pomo-jatko-sivu pomo-odottaa', tabindex: '-1' }, 'Continuar →');
      let voiJatkaa = false;
      const jatka = () => { if (voiJatkaa) { voiJatkaa = false; seuraava(); } };
      jatko.addEventListener('click', jatka);
      let toimi = null;
      const vastaa = (annettu, ok, nappi, hidas) => {
        if (vastattu) return;
        vastattu = true;
        ajossa = false;
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
        kirjaa({ lahde: 'pomo', oppitunti: A.oppitunti, avain: `${A.id}:${k.laji}:${k.oikea}`, teksti: `${k.pt} → ${k.oikea}`, oikein: ok, reitti: A.reitti });
        if (ok) {
          oikeat++;
          liikahda(tieto.liike);
          efekti('isku');
          asetaRisteys(1);
          const heitto = el('span', { class: 'pomo-heitto', lang: 'fi-FI', 'aria-hidden': 'true' }, k.oikea);
          a.append(heitto);
          setTimeout(() => heitto.remove(), 900);
          palaute.className = 'palaute ok';
          palaute.textContent = 'Isso! ' + k.oikea;
          if (fn('ilmoitaTulos')) apu.ilmoitaTulos(heitto, 'oikein');
          hiisiSanoo(AJO_HIISI.ok);
          laatikko.querySelectorAll('button, input').forEach(x => { if (x !== jatko) x.disabled = true; });
          viive(seuraava, liike() ? 1100 : 600);
          return;
        }
        virheita++;
        paivitaHud();
        asetaPoliisi(virheita);
        Aanet.sireeni(virheita);
        Aanet.soita('virhe');
        efekti('virhe');
        hiisiSanoo(AJO_HIISI.kirous);
        zoomaa(900);
        const miksi = annettu ? k.miksi[ajoAvain(annettu)] : null;
        palaute.className = 'palaute ei';
        palaute.textContent = (hidas ? 'Demorou! O Hiisi decidiu sozinho, e a polícia chegou mais perto.' : `A polícia chegou mais perto${miksi ? ': ' + miksi : '.'}`) +
          ` Certo: ${k.oikea} (${k.pt})` + (virheita >= A.virheet ? ' E agora… a polícia pegou vocês!' : '');
        ajatus.classList.add('nakyy');
        if (fn('ilmoitaTulos')) apu.ilmoitaTulos(a, 'vaarin');
        if (nappi) nappi.classList.add('vaarin');
        laatikko.querySelectorAll('.vaihtoehdot button').forEach(x => { if (x.textContent === k.oikea) x.classList.add('oikein'); });
        if (virheita >= A.virheet) { laatikko.querySelectorAll('button, input').forEach(x => { x.disabled = true; }); viive(kiinni, 1100); return; }
        voiJatkaa = true;
        if (toimi) { toimi.textContent = 'Continuar →'; toimi.classList.add('pomo-jatka'); toimi.disabled = false; toimi.focus(); }
        else { jatko.classList.remove('pomo-odottaa'); jatko.removeAttribute('tabindex'); jatko.focus(); }
      };
      if (kirjoitus) {
        const syote = el('input', { type: 'text', class: 'aukko-syote treeni-syote', lang: 'fi-FI', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Ordem para o Hiisi' });
        const nappi = el('button', { type: 'button', class: 'pieni-nappi' }, 'Dizer');
        toimi = nappi;
        const tarkista = () => {
          if (vastattu) return;
          const tulos = arvioi(syote.value.replace(/[.!]+\s*$/, ''), k.oikea.replace(/!$/, ''));
          if (tulos === null) return;
          syote.dataset.tulos = tulos ? 'oikein' : 'vaarin';
          syote.readOnly = true;
          vastaa(syote.value, tulos, null, false);
        };
        nappi.addEventListener('click', () => { if (!vastattu) tarkista(); else jatka(); });
        syote.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (!vastattu) tarkista(); else jatka(); } });
        laatikko.append(el('div', { class: 'treeni-kirjoitus' }, syote, nappi));
        setTimeout(() => { if (syote.isConnected) syote.focus(); }, 0);
      } else {
        const valinnat = el('div', { class: 'vaihtoehdot' });
        for (const v of sekoita([...new Set([k.oikea, ...k.harhat])].slice(0, 4))) {
          const b = el('button', { type: 'button', lang: 'fi-FI' }, v);
          b.addEventListener('click', () => { if (vastattu) return; const ok = v === k.oikea; if (ok) b.classList.add('oikein'); vastaa(v, ok, ok ? null : b, false); });
          valinnat.append(b);
        }
        laatikko.append(valinnat, jatko);
      }
      ajatus.replaceChildren(palaute);
      // Kello: risteys lähestyy; ilman Kelloa se pysähtyy eteen (t 0,85) ja odottaa.
      const hidas = () => { if (!vastattu) { const s = laatikko.querySelector('.treeni-syote'); if (s) s.readOnly = true; vastaa('', false, null, true); } };
      vastattu = false;
      ajossa = true;
      kulunut = 0;
      viimeksi = performance.now();
      const kulje = nyt => {
        raf = 0;
        if (!auki() || !ajossa || vastattu) return;
        kulunut += Math.min(0.25, Math.max(0, (nyt - viimeksi) / 1000));
        viimeksi = nyt;
        const t = kulunut / (kirjoitus ? A.aika.kirjoitus : A.aika.napautus);
        asetaRisteys(kello ? Math.min(1, t) : Math.min(0.85, t));
        kelloPalkki.style.width = (kello ? Math.max(0, 100 * (1 - t)) : 100).toFixed(1) + '%';
        if (kello && t >= 1) { hidas(); return; }
        raf = requestAnimationFrame(kulje);
      };
      raf = requestAnimationFrame(kulje);
    }

    /* Tulos (kuten pomon tulos): otsikko, puhuja kasvoineen, lisät, Tentar de novo ja Voltar à lição. */
    function tulos(otsikko, puhuja, repliikki, kaannos, lisat) {
      seis();
      try { if (window.Saari && typeof window.Saari.tarkistaSaavutukset === 'function') window.Saari.tarkistaSaavutukset(); } catch (e) { /* saavutukset: saari.js pomo-ajo-t20, havio-ajo-t20 */ }
      laatikko.innerHTML = '';
      ajatus.replaceChildren();
      ajatus.classList.remove('nakyy');
      ohjaus.scrollTop = 0;
      const uudelleen = el('button', { type: 'button', class: 'visa-aloita' }, 'Tentar de novo');
      uudelleen.addEventListener('click', ajo);
      const kirjaan = el('button', { type: 'button', class: 'pieni-nappi toissijainen' }, 'Voltar à lição');
      kirjaan.addEventListener('click', () => sulje());
      laatikko.append(el('p', { class: 'visa-tulos' }, otsikko),
        el('div', { class: 'pomo-juhla' }, kasvo(puhuja, 'pomo-juhla-kasvo'),
          el('p', {}, el('b', {}, (puhuja === 'hiisi' ? 'Hiisi' : 'Purjo') + ': '), el('span', { lang: 'fi-FI', 'data-ei-kuplaa': '' }, repliikki), ` (${kaannos})`)),
        ...lisat.filter(Boolean),
        el('div', { class: 'ajo-kulttuuri', lang: 'pt-BR' }, el('b', {}, 'Você sabia? Multas pela renda: '),
          ...A.kulttuuri.map((x, i) => (i % 2 ? el('span', { class: 'fi', lang: 'fi-FI', 'data-ei-kuplaa': '' }, x) : x))),
        el('div', { class: 'tehtava-napit' }, uudelleen, kirjaan));
      ruutu.classList.add('tuloksessa');
      uudelleen.focus({ preventScroll: true });
      setTimeout(() => { if (ohjaus) ohjaus.scrollTop = 0; }, 60);   // tulos alkaa ylhäältä (otsikko näkyviin)
    }
    /* BUSTED: poliisi pysäyttää auton (valot välkkyvät koko ruudulla, leima), Hiisi tyynenä: ”Poliisi. Taas.” */
    function kiinni() {
      if (!auki()) return;
      seis();
      try { localStorage.setItem('tottakai-pomo-havio-' + A.id, 'true'); } catch (e) { /* ei muistia */ }
      a.classList.add('kiinni');
      ruutu.classList.add('kiinni');
      asetaPoliisi(3);
      Aanet.sireeni(3);
      Aanet.soita('jarru');
      viive(() => Aanet.soita('surullinen'), 500);
      a.append(el('span', { class: 'ajo-leima', 'aria-hidden': 'true' }, 'BUSTED!'));
      viive(() => Aanet.pysaytaSireeni(), 2600);
      viive(() => {
        const k = kysymys;
        tulos('BUSTED! A polícia pegou vocês.', 'hiisi', 'Poliisi. Taas.', 'Polícia. De novo.', [
          el('p', {}, 'O carro branco e azul para atrás de vocês. O Hiisi abaixa o vidro, mostra a carteira de motorista e não diz mais nada. A Maia olha para o mapa. O mapa não ajuda.'),
          k ? el('p', { class: 'ohje' }, 'A última ordem, certinha: ', el('span', { lang: 'fi-FI', 'data-ei-kuplaa': '' }, k.oikea), ` (${k.pt})`) : null,
          el('p', { class: 'ohje' }, `Você deu ${oikeat} ordens certas em ${Math.min(reitti.length, nro + 1)} cruzamentos. Errar não tira nada: tente de novo quantas vezes quiser.`)]);
      }, liike() ? 2000 : 400);
    }
    /* Pakomatka Hiiden tapaan: poliisi ajaa ohi (sireeni hiipuu), Hiisi pysäköi rauhallisesti saunan eteen, Purjo odottaa. */
    function perilla() {
      seis();
      Aanet.pysaytaSireeni(true);
      viive(() => Aanet.soita('fanfaari'), 900);
      const ensimmainen = !voitettu(A.id);
      const vanha = lue('pomo-' + A.id, null) || {};
      kirjoita('pomo-' + A.id, { voitettu: true, aika: Date.now(), kerrat: (vanha.kerrat || 0) + 1 });
      const n = ensimmainen ? A.palkinto : A.uusinta;
      try { if (fn('lisaaMandariineja')) apu.lisaaMandariineja(n, 'jogo', 'Fuga no retrovisor'); else if (K.mandariinit) K.mandariinit.lisaa(n, 'jogo'); } catch (e) { /* ohita */ }
      a.classList.add('perilla');
      a.append(el('div', { class: 'ajo-sauna', role: 'img', 'aria-label': 'O carro do Hiisi estacionado em frente à sauna vermelha da casa de campo. A Purjo espera na porta.' },
        svgEl('span', { class: 'ajo-sauna-kuva' }, ajoSaunaKuva()),
        el('span', { class: 'ajo-sauna-hahmot' }, kasvo('purjo', 'ajo-sauna-kasvo'), kasvo('hiisi', 'ajo-sauna-kasvo'), kasvo('maia', 'ajo-sauna-kasvo'))));
      viive(() => tulos(`Fuga à moda do Hiisi! +${n} 🍊`, 'hiisi', 'Sauna.', 'Sauna.', [
        el('p', {}, 'O Hiisi entra num lava-rápido, sai do outro lado com o carro brilhando, e o carro da polícia passa reto com a sirene. Vinte minutos depois, ele estaciona devagar, de ré, em frente à sauna da casa de campo, desliga o motor e diz uma palavra só. A Purjo está esperando na porta, de braços cruzados.'),
        el('div', { class: 'pomo-juhla' }, kasvo('purjo', 'pomo-juhla-kasvo'), el('p', {}, el('b', {}, 'Purjo: '), el('span', { lang: 'fi-FI', 'data-ei-kuplaa': '' }, 'Hiisi! Missä te olette olleet?'), ' (Hiisi! Onde vocês estiveram?)')),
        el('p', { class: 'ohje' }, `Você deu ${oikeat} ordens certas em ${reitti.length} cruzamentos, com ${virheita} ${virheita === 1 ? 'erro' : 'erros'}.`)]), liike() ? 1800 : 300);
    }
    alku();
  }

  /* Saaren palkinnot voitetuista pomoista (app.js naytaIlha). */
  function palkinnot() {
    const ulos = [];
    for (const P of Object.values(POMOT)) {
      if (!voitettu(P.id) || !P.palkintoKuva) continue;
      const s = document.createElement('span');
      s.className = 'ilha-palkinto';
      s.setAttribute('role', 'img');
      s.setAttribute('aria-label', P.palkintoNimi);
      s.dataset.pomo = P.id;
      s.innerHTML = P.palkintoKuva();
      ulos.push(s);
    }
    return ulos;
  }
  const palkintoTekstit = () => Object.values(POMOT).filter(P => voitettu(P.id) && P.palkintoNimi).map(P => P.palkintoNimi);

  /* Juhlat rantatalolla (app.js naytaIlha kutsuu saaren kuvalle .ilha-kuva): voiton jälkeen lisäkerros saaren päälle.
     Rantatalo ja lippunauha valoineen, Capivaralle ja Peixe-boille juhlahatut (party mode), Maia vieraana viimeksi
     saarella puetuissa laseissa (AV-029; oletus: voitetun taistelun lasit, jotka annetaan lahjana puettuina). Ilman voittoa ei mitään. Teksti portugaliksi kuvan alle (kuva itse on aria-hidden). */
  function juhla(kuva) {
    if (!kuva || !kuva.parentNode || kuva.classList.contains('ilha-juhlii')) return;
    const voitot = Object.values(POMOT).filter(P => voitettu(P.id))
      .map(P => ({ P, aika: (lue('pomo-' + P.id, null) || {}).aika || 0 })).sort((x, y) => y.aika - x.aika);
    if (!voitot.length) return;
    const P = voitot[0].P;
    const svgSpan = (luokka, svg) => { const s = document.createElement('span'); s.className = luokka; s.innerHTML = svg; return s; };
    const vieras = (hahmo, hattu) => {
      const v = document.createElement('span');
      v.className = 'ilha-vieras';
      v.append(hahmo);
      if (hattu) v.append(svgSpan('ilha-hattu', hattuKuva(hattu)));
      return v;
    };
    kuva.classList.add('ilha-juhlii');
    const hatut = ['#e2574c', '#5b6fa8'];
    [...kuva.querySelectorAll(':scope > .ilha-hahmo')].forEach((h, i) => { const seuraava = h.nextSibling; kuva.insertBefore(vieras(h, hatut[i % 2]), seuraava); });
    // Maian lasit = saarella puetut (AV-029: lasit ovat tavarakortti, Saari.tila().asu.maia); ilman saarta viimeisimmän voiton lasit.
    let lasit = P.lasit ? P.lasit.malli : null;
    // Lahja annetaan saaren piirrossa (Saari annaLahjat) vasta juhlan jälkeen: ennen sitä voitetun taistelun lasit.
    try {
      const t = window.Saari && typeof window.Saari.tila === 'function' ? window.Saari.tila() : null;
      if (t && t.omat['oculos-luta-' + P.id]) lasit = (t.asu.maia || {}).lasit || null;
    } catch (e) { /* ohita */ }
    const m = window.Kuvitus && window.Kuvitus.avatar('maia', 'ilha-hahmo', { lasit, mandariini: true });
    const viimeinen = [...kuva.querySelectorAll(':scope > .ilha-vieras')].pop();
    if (m) { const v = vieras(m, null); if (viimeinen) viimeinen.after(v); else kuva.append(v); }
    kuva.prepend(svgSpan('ilha-koristeet', koristeKuva()), svgSpan('ilha-talo', taloKuva()));
    const tekstit = rivit => { const d = document.createElement('div'); d.className = 'ilha-juhla-teksti'; for (const [kuka, repliikki] of rivit) { const p = document.createElement('p'); const b = document.createElement('b'); b.textContent = kuka + ': '; p.append(b, repliikki); d.append(p); } return d; };
    kuva.after(tekstit(P.ilhaJuhla && P.ilhaJuhla.length ? P.ilhaJuhla : [['Capivara', 'Festa na casa de praia!']]));
  }

  /* Pomojen lauseet (tottakai/tools/poimi_painikkeet.js, T07): jokaisen pomon kysymyslauseet vastauksella täytettynä.
     Omistaja 21.10.2026: pomoille ei tehdä uusia puheita (tee_aanet.py EI_PUHEITA_LUOKAT); lista pysyy, jotta valmiit
     leikkeet näkyvät kirjanpidossa ja puheet voidaan myöhemmin palauttaa. Alkuperäinen kuvaus:
     sama teksti kuin taistelun vastaa() soittaa (k.lause.replace('___', k.oikea), kertojan äänellä). Generaattorit
     arpovat, joten pooli kerätään siemennetyllä arvonnalla (kiinteä siemen, 20 000 arpaa: jokainen yhdistelmä osuu
     käytännössä varmasti) ja palautetaan aakkosjärjestyksessä: sama tulos joka ajolla. id = pomon tunnus (oletus kaikki). */
  function puheet(id) {
    const ulos = new Set();
    const alku = Math.random;
    let s = 0x2545f491;
    Math.random = () => {   // mulberry32
      s = (s + 0x6d2b79f5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    try {
      for (const P of Object.values(POMOT)) {
        if (id && P.id !== id) continue;
        const tee = P.tee(opetetut(P.id));
        for (let i = 0; i < 20000; i++) {
          let k = null;
          try { k = tee(); } catch (e) { k = null; }
          if (k && k.oikea && k.lause) ulos.add(k.lause.replace('___', k.oikea));
        }
      }
    } finally { Math.random = alku; }
    return [...ulos].sort();
  }

  window.Pomo = { pomot: POMOT, lasit: LASIT, ajot: AJOT, ajoKaskyt: AJO_KASKYT, ajoHiisi: AJO_HIISI, ajoKysymys, ajoReitti, aloita, voitettu, palkinnot, palkintoTekstit, juhla, puheet, nykyinen: () => nykyinen };
})();
