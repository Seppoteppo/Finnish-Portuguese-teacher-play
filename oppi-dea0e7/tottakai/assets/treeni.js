/* Tottakai: Treeni eli harjoituspaketit (docs/RAKENNE.md, Harjoitukset pieninä paloina).
   Jokainen paketti on yksi asia, 8 kysymystä kierroksella. Kysymykset tehdään koneella paketin sanalistasta ja leksikon
   muodoista (Sanasto.paradigma: tallennetut tunnusmuodot, ei arvausta), joten kierrokset vaihtelevat. Verbi, jota ei
   ole leksikossa (sanasto/*.js), jätetään pois. Tila: napautus (vaihtoehdot) tai kirjoitus (✍), jos paketti sallii.
   Paketin kentät: id, oppitunti, rekisteri ('kirja' | 'puhe': tarkistus R1), otsikko, kuvaus, saanto (sääntörivi
   väärän vastauksen palautteeseen, A5-M8), kirjoitus (sallitaanko kirjoitustila), tee() → kysymys:
   { kysymys: teksti, kieli ('fi-FI' | 'pt-BR'), puhu (luettava teksti), oikea, vaihtoehdot: [...], selitys,
     miksi: { väärä vaihtoehto pienin: mikä siinä on väärin }, solu (oikean muodon paradigman solu: ”olla · ele, ela · presente”) }.
   KAYTANNOT H1: vihje ei sulje yhtään vaihtoehtoa pois, ja jokainen väärä vaihtoehto eroaa oikeasta yhdellä asialla.
   Jokainen vastaus kirjataan (Tulokset.kirjaa, assets/tulokset.js); ★-merkittyjen korttien paketit ensin (oppitunnin). */
(function () {
  'use strict';
  const T = window.Taivutus;   // vain vokaalisointu (-ko/-kö-paketti)
  const S = window.Sanasto;
  const KA = window.Kasitteet;
  // T15.9 (A6-09): oppituntien ainoa järjestys (assets/profiili.js); ilman profiilia (Node-työkalut) latausjärjestys.
  const jarjestysLista = () => { const K0 = window.Kurssi || {}; return (K0.profiili && K0.profiili.jarjestys) || (K0.oppitunnit || []).map(o => o.id); };
  const KIERROS = 8;
  const sekoita = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const arpa = a => a[Math.floor(Math.random() * a.length)];
  const yksilolliset = a => [...new Set(a)];
  // Vaihtoehdot: oikea + harhautukset (ei kaksoiskappaleita), enintään 4, sekoitettuna.
  const vaihtoehdot = (oikea, harhat, n = 4) => sekoita([oikea, ...sekoita(yksilolliset(harhat).filter(x => x !== oikea)).slice(0, n - 1)]);
  const P = KA.PRONOMINI;
  const PERS = KA.PERSOONAT;
  const KIELLOT = { '1s': 'en', '2s': 'et', '3s': 'ei', '1p': 'emme', '2p': 'ette', '3p': 'eivät' };
  /* Verbin muodot leksikosta samassa muodossa kuin ennen taivutuskoneelta: { myonteinen, kielto, vahva, heikko }. */
  function muodot(verbi) {
    const p = S.paradigma(verbi);
    const ei = S.hae('ei') ? S.paradigma('ei') : {};
    const f = { myonteinen: {}, kielto: {}, vaihtelu: S.vaihtelu(verbi) };
    for (const k of PERS) { f.myonteinen[k] = p['prees.' + k]; f.kielto[k] = `${ei['prees.' + k] || KIELLOT[k]} ${p.kielto}`; }
    return f;
  }
  const onVerbi = v => { const r = S.hae(v); return !!(r && r.l === 'verbi'); };
  const merkitys = v => { const r = S.hae(v); return r ? r.pt[0] : ''; };
  const PT_PRON = { '1s': 'eu', '2s': 'você', '3s': 'ele / ela', '1p': 'nós', '2p': 'vocês', '3p': 'eles / elas' };
  // Termit käsitetaulusta (sanasto/kasitteet.js TERMIT), samat kuin kuplassa: yksi termi kaikkialla.
  const VAIHTELU = (KA.TERMIT && KA.TERMIT.vaihtelu) || 'consoante que muda (gradação)';
  const KIELTOMUOTO = (KA.TERMIT && KA.TERMIT.kieltomuoto) || 'forma negativa';
  // Paradigman solun nimi käsitetaulusta (sama kuin kuplassa): ”ele, ela · presente”, ”parte, quantidade (partitivo)”.
  const soluNimi = (solu, h) => { const s = KA.solu(solu, h || 'a'); return s ? s.nimi : solu; };
  const pieni = s => String(s || '').toLowerCase();
  /* miksi-kenttä (KAYTANNOT H1): { väärä vaihtoehto pienin: mikä siinä on väärin }. Henkilövirhe: sama sija tai
     aikamuoto, väärä persoona. */
  function persoonaMiksi(muodot, k, eteen) {
    const m = {};
    for (const x of PERS) {
      if (x === k || !muodot[x] || pieni(muodot[x]) === pieni(muodot[k])) continue;
      m[pieni(muodot[x])] = `pessoa errada: ${muodot[x]} vai com ${eteen ? eteen(x) : P[x]} (${PT_PRON[x]})`;
    }
    return m;
  }

  /* Oppitunnin 1 lauseet (vain oppitunnin 1 sanoja): [loppuosa, portugaliksi ilman verbiä, vain yksikkö]. Monikon
     partitiivia (suomalaisia) ei opeteta vielä, joten kansallisuus ja ammatti vain yksikön persoonilla; paikan sanat
     (täällä, kotona, Helsingissä) eivät taivu persoonan mukaan. */
  const LAUSEET_OLLA = [
    ['suomalainen', 'finlandês', true], ['brasilialainen', 'brasileiro/a', true], ['geologi', 'geólogo/a', true],
    ['täällä', 'aqui', false], ['siellä', 'lá', false], ['kotona', 'em casa', false], ['Helsingissä', 'em Helsinque', false]
  ];
  // Lause, joka sopii persoonalle k (monikon persoonille vain paikan sanat).
  const lauseelle = k => arpa(LAUSEET_OLLA.filter(x => S.hae(x[0]) && (k[1] === 's' || !x[2])));
  const lauseOlla = (k, loppu, kielto) => {
    const f = muodot('olla');
    return `${P[k]} ${kielto ? f.kielto[k] : f.myonteinen[k]} ${loppu}.`;
  };

  const TYYPPI1 = ['puhua', 'asua', 'nukkua', 'ymmärtää', 'tietää', 'lukea', 'odottaa', 'istua', 'sanoa', 'kysyä', 'ottaa', 'kirjoittaa'];
  const tyyppi1 = () => TYYPPI1.filter(onVerbi);

  const PITUUS = [   // [oikea, harhat, portugaliksi]
    ['tuuli', ['tuli', 'tulli'], 'vento'], ['tuli', ['tuuli', 'tulli'], 'fogo; (ele) veio'], ['tulli', ['tuli', 'tuuli'], 'alfândega'],
    ['kukka', ['kuka'], 'flor'], ['kuka', ['kukka'], 'quem'], ['matto', ['mato'], 'tapete'], ['mato', ['matto'], 'minhoca'],
    ['kissa', ['kisa'], 'gato'], ['kisa', ['kissa'], 'competição'], ['mutta', ['muta'], 'mas'], ['muta', ['mutta'], 'lama'],
    ['tapaan', ['tapan'], '(eu) encontro'], ['tapan', ['tapaan'], '(eu) mato'], ['tee', ['te'], 'chá'], ['te', ['tee'], 'vocês'],
    ['kuusi', ['kusi'], 'seis'], ['kansa', ['kanssa'], 'povo'],
    ['kanssa', ['kansa'], 'com'], ['muuta', ['muta', 'mutta'], 'outra coisa'], ['kylä', ['kyllä'], 'aldeia'], ['kyllä', ['kylä'], 'sim']
  ];
  // -ko/-kö (oppitunti 1): olla-verbin muodot ja oppitunnin 1 sanat (ei vielä opetettuja verbejä).
  const KO = ['olet', 'on', 'olen', 'olemme', 'olette', 'ovat', 'ymmärrät', 'tiedät', 'täällä', 'nyt', 'kotona',
    'Maia', 'Purjo', 'Jay', 'Helsinki', 'Suomi', 'suomalainen', 'brasilialainen'];
  const LUVUT = ['nolla', 'yksi', 'kaksi', 'kolme', 'neljä', 'viisi', 'kuusi', 'seitsemän', 'kahdeksan', 'yhdeksän', 'kymmenen'];

  const PAKETIT = [
    {
      id: 't01-olla', oppitunti: 't01', luokka: 'verbos', ryhma: 'olla', rekisteri: 'kirja', otsikko: 'olla: a forma certa', kirjoitus: true,
      kuvaus: 'Complete com o verbo olla (ser, estar): olen, olet, on, olemme, olette, ovat.',
      saanto: 'olla muda com a pessoa: minä olen, sinä olet, hän on, me olemme, te olette, he ovat.',
      tee() {
        const k = arpa(PERS); const [loppu, pt] = lauseelle(k);
        const f = muodot('olla');
        const lause = lauseOlla(k, loppu);
        return { kysymys: `${P[k]} ___ ${lause.split(' ').slice(2).join(' ')}`, kieli: 'fi-FI', puhu: lause, oikea: f.myonteinen[k],
          vaihtoehdot: vaihtoehdot(f.myonteinen[k], PERS.map(x => f.myonteinen[x])), miksi: persoonaMiksi(f.myonteinen, k),
          solu: `olla · ${soluNimi('prees.' + k)}`, selitys: `${lause} = ${PT_PRON[k]} + ser/estar: ${pt}.` };
      }
    },
    {
      id: 't01-kielto', oppitunti: 't01', luokka: 'verbos', ryhma: 'Negação', rekisteri: 'kirja', otsikko: 'Negação: en ole, et ole, ei ole…', kirjoitus: true,
      kuvaus: 'Transforme em negativa. O verbo de negação muda com a pessoa; olla fica sempre “ole”.',
      saanto: 'negação = en, et, ei, emme, ette, eivät (muda com a pessoa) + ole (sempre igual).',
      tee() {
        const k = arpa(PERS); const [loppu] = lauseelle(k);
        const f = muodot('olla');
        const kielto = lauseOlla(k, loppu, true);
        const ei = f.kielto[k].split(' ')[0];
        // H1: jokainen väärä vaihtoehto eroaa yhdellä asialla: väärä persoona kieltoverbissä (et ole) tai pääverbi
        // persoonamuodossa (en olen). Myönteistä muotoa (olen) ei tarjota: tehtävä pyytää kieltoa, joten se sulkeutuisi pois.
        const taipunut = `${ei} ${f.myonteinen[k]}`;
        const miksi = persoonaMiksi(f.kielto, k, x => P[x]);
        miksi[pieni(taipunut)] = `depois de ${ei} o verbo fica ole, sem terminação de pessoa`;
        return { kysymys: `${lauseOlla(k, loppu)} → ${P[k]} ___ ${kielto.split(' ').slice(3).join(' ')}`, kieli: 'fi-FI', puhu: kielto,
          oikea: f.kielto[k], vaihtoehdot: sekoita([f.kielto[k], taipunut, ...sekoita(PERS.filter(x => x !== k).map(x => f.kielto[x])).slice(0, 2)]), miksi,
          solu: `${ei} = ${PT_PRON[k]} (verbo de negação) + ole (${KIELTOMUOTO})`,
          selitys: `${kielto} Negação = ${ei} (pessoa ${PT_PRON[k]}) + ole.` };
      }
    },
    {
      id: 't01-kysymys', oppitunti: 't01', luokka: 'verbos', ryhma: 'Perguntas -ko/-kö', rekisteri: 'kirja', otsikko: '-ko ou -kö?', kuvaus: 'Faça a pergunta. A terminação segue a harmonia vocálica: a, o, u → -ko; senão → -kö.',
      saanto: 'a, o ou u na palavra → -ko; só e, i, ä, ö, y → -kö.',
      tee() {
        const s = arpa(KO.filter(x => S.analysoi(x).length));
        const h = T.harmonia(s);
        const oikea = s + (h === 'a' ? 'ko' : 'kö');
        const paate = h === 'a' ? '-ko' : '-kö';
        const miksi = h === 'a' ? { '-kö': `${s} tem a, o ou u: -kö só para palavras sem essas vogais` } : { '-ko': `${s} não tem a, o nem u: -ko só com essas vogais` };
        return { kysymys: `${s} → pergunta: -ko ou -kö?`, kieli: 'fi-FI', puhu: oikea, oikea: paate, vaihtoehdot: ['-ko', '-kö'], miksi,
          selitys: h === 'a' ? `${s} tem a, o ou u → ${oikea}` : `${s} só tem vogais de frente (e, i, ä, ö, y) → ${oikea}` };
      }
    },
    {
      id: 't01-pituus', oppitunti: 't01', luokka: 'ouvir', ryhma: 'Vogal longa ou curta', rekisteri: 'kirja', kuuntelu: true, otsikko: 'Vogal longa ou curta?', kuvaus: 'Em finlandês, o comprimento muda o sentido: tuli (fogo), tuuli (vento), tulli (alfândega). Ouça e escolha pelo sentido.',
      saanto: 'letra dobrada = som longo; o comprimento muda o sentido da palavra.',
      tee() {
        const [oikea, harhat, pt] = arpa(PITUUS);
        const miksi = {};
        for (const h of harhat) { const x = PITUUS.find(y => y[0] === h); if (x) miksi[pieni(h)] = `${h} = ${x[2]}`; }
        return { kysymys: `Qual é “${pt}”?`, kieli: 'pt-BR', puhu: oikea, kuuntele: oikea, oikea, vaihtoehdot: sekoita([oikea, ...harhat]), miksi,
          selitys: `${oikea} = ${pt}. Letra dobrada = som longo.` };
      }
    },
    {
      id: 't02-tyyppi1', oppitunti: 't02', luokka: 'verbos', ryhma: 'Presente', rekisteri: 'kirja', otsikko: 'Verbo tipo 1: presente', kirjoitus: true,
      kuvaus: `puhua → puhun, puhut, puhuu, puhumme, puhutte, puhuvat. Atenção à ${VAIHTELU}: nukkua → nukun, mas hän nukkuu.`,
      saanto: `tipo 1: radical + -n, -t, vogal dobrada (hän), -mme, -tte, -vat; ${VAIHTELU}: hän e he têm o radical forte (nukkuu, nukkuvat), os outros o fraco (nukun).`,
      tee() {
        const v = arpa(tyyppi1()); const k = arpa(PERS);
        const f = muodot(v);
        const av = f.vaihtelu;
        return { kysymys: `${P[k]} (${v}) → ?`, kieli: 'fi-FI', puhu: `${P[k]} ${f.myonteinen[k]}`, oikea: f.myonteinen[k],
          vaihtoehdot: vaihtoehdot(f.myonteinen[k], PERS.map(x => f.myonteinen[x])), miksi: persoonaMiksi(f.myonteinen, k),
          solu: `${v} · ${soluNimi('prees.' + k)}`,
          selitys: `${P[k]} ${f.myonteinen[k]} = ${PT_PRON[k]} + ${merkitys(v) || v}` + (av ? ` (${VAIHTELU} ${av.vahva} : ${av.heikko || '–'}: ${f.myonteinen['3s']}, ${f.myonteinen['1s']})` : '') };
      }
    },
    {
      id: 't02-kielto', oppitunti: 't02', luokka: 'verbos', ryhma: 'Negação', rekisteri: 'kirja', otsikko: 'Negação do tipo 1', kirjoitus: true,
      kuvaus: `minä puhun → minä en puhu. O verbo principal fica na ${KIELTOMUOTO}: o radical do “eu”, sem a terminação de pessoa (minä nukun → minä en nuku; hän nukkuu → hän ei nuku).`,
      saanto: `en, et, ei… + ${KIELTOMUOTO}: o radical do “eu” sem terminação (minä nukun → minä en nuku).`,
      tee() {
        const v = arpa(tyyppi1()); const k = arpa(PERS);
        const f = muodot(v);
        const ei = f.kielto[k].split(' ')[0];
        const kv = f.kielto[k].split(' ')[1];
        // Väärät vaihtoehdot: sama verbi, mutta persoonapääte (puhun, puhuu, puhuvat) tai perusmuoto (puhua).
        const miksi = {};
        for (const x of [k, '3s', '3p']) miksi[pieni(f.myonteinen[x])] = `${f.myonteinen[x]} tem terminação de pessoa (${PT_PRON[x]}); depois de ${ei} o verbo fica sem ela`;
        miksi[pieni(v)] = `${v} é a forma básica (dicionário); depois de ${ei} vem a ${KIELTOMUOTO}`;
        return { kysymys: `${P[k]} ${f.myonteinen[k]} → ${P[k]} ${ei} ___`, kieli: 'fi-FI', puhu: `${P[k]} ${f.kielto[k]}`,
          oikea: kv, vaihtoehdot: vaihtoehdot(kv, [f.myonteinen[k], f.myonteinen['3s'], v, f.myonteinen['3p']]), miksi,
          solu: `${v} · ${KIELTOMUOTO}: ${kv}`,
          selitys: `${P[k]} ${f.kielto[k]}: depois de en/et/ei… vem a ${KIELTOMUOTO} (${kv}), o radical sem terminação de pessoa.` };
      }
    },
    {
      id: 't02-perusmuoto', oppitunti: 't02', luokka: 'verbos', ryhma: 'Forma básica', rekisteri: 'kirja', otsikko: 'Ache a forma básica', kuvaus: `tiedän → tietää. Atenção à ${VAIHTELU}: d↔t, k↔kk, rr↔rt… Reconheça a palavra do dicionário.`,
      saanto: `a forma básica (do dicionário) termina em -a/-ä e tem o radical forte: tiedän → tietää (${VAIHTELU}).`,
      tee() {
        const v = arpa(tyyppi1().concat(['pitää', 'lähteä', 'tuntea', 'oppia', 'antaa', 'löytää'].filter(onVerbi)));
        const f = muodot(v);
        const k = arpa(['1s', '2s', '1p', '2p']);
        const muoto = f.myonteinen[k];
        // H1: väärät vaihtoehdot ovat saman verbin muita persoonamuotoja (yksi ero: persoona eikä perusmuoto). Ei
        // kysymyksen omaa muotoa (sulkeutuisi pois) eikä toista verbiä (eroaisi kaikessa).
        const muut = PERS.filter(x => x !== k && pieni(f.myonteinen[x]) !== pieni(v) && pieni(f.myonteinen[x]) !== pieni(muoto));
        const miksi = {};
        for (const x of muut) miksi[pieni(f.myonteinen[x])] = `${f.myonteinen[x]} é ${P[x]} (${PT_PRON[x]}), não a forma básica`;
        return { kysymys: `${muoto} → forma básica?`, kieli: 'fi-FI', puhu: v, kuuntele: muoto, oikea: v,
          vaihtoehdot: vaihtoehdot(v, muut.map(x => f.myonteinen[x])), miksi, solu: `${muoto} = ${v} · ${soluNimi('prees.' + k)}`,
          selitys: `${muoto} é ${k === '1s' ? 'eu' : k === '2s' ? 'você' : k === '1p' ? 'nós' : 'vocês'} de ${v} (${merkitys(v)}).` };
      }
    },
    {
      id: 't02-luvut', oppitunti: 't02', luokka: 'palavras', ryhma: 'Números', rekisteri: 'kirja', otsikko: 'Números 0–10', kirjoitus: true, kuvaus: 'nolla, yksi, kaksi… kymmenen. Do algarismo à palavra e da palavra ao algarismo.',
      saanto: 'nolla 0, yksi 1, kaksi 2, kolme 3, neljä 4, viisi 5, kuusi 6, seitsemän 7, kahdeksan 8, yhdeksän 9, kymmenen 10.',
      tee() {
        const n = Math.floor(Math.random() * 11);
        const miksi = {};
        LUVUT.forEach((s, i) => { if (i !== n) { miksi[s] = `${s} = ${i}`; miksi[String(i)] = `${i} = ${s}`; } });
        if (Math.random() < 0.5) return { kysymys: String(n), kieli: 'pt-BR', puhu: LUVUT[n], oikea: LUVUT[n], vaihtoehdot: vaihtoehdot(LUVUT[n], LUVUT), miksi, selitys: `${n} = ${LUVUT[n]}` };
        return { kysymys: LUVUT[n], kieli: 'fi-FI', puhu: LUVUT[n], kuuntele: LUVUT[n], oikea: String(n), vaihtoehdot: vaihtoehdot(String(n), LUVUT.map((_, i) => String(i))), miksi, selitys: `${LUVUT[n]} = ${n}`, eiKirjoitus: true };
      }
    },
    {
      // A5-M2 / TYONKULKU 14: äänite on pelkkä verbimuoto (ei pronominia, ei ei-sanaa), joten vastaus kuullaan vain pituudesta.
      id: 't02-pituus', oppitunti: 't02', luokka: 'ouvir', ryhma: 'Vogal longa ou curta', rekisteri: 'kirja', kuuntelu: true, otsikko: 'puhuu ou puhu? Vogal longa ou curta',
      kuvaus: 'Ouça só o verbo e escolha: vogal longa no fim (hän puhuu, ele fala) ou curta (en puhu, puhu!).',
      saanto: 'hän: a última vogal dobra (puhuu, istuu, kysyy); a forma negativa e a ordem têm vogal curta (en puhu, puhu!). Letra dobrada = som longo.',
      tee() {
        // Tyypin 1 verbit, joissa hän-muoto = kieltomuoto + sama vokaali (ei astevaihtelua: nukkuu/nuku jää pois).
        const verbit = tyyppi1().concat(['kertoa', 'loppua', 'oppia', 'sopia', 'pysähtyä'].filter(onVerbi)).filter(v => {
          const p = S.paradigma(v);
          return p.kielto && p['prees.3s'] === p.kielto + p.kielto.slice(-1);
        });
        const v = arpa(verbit);
        const p = S.paradigma(v);
        const pitka = p['prees.3s'], lyhyt = p.kielto;
        const oikea = Math.random() < 0.5 ? pitka : lyhyt;
        const miksi = {
          [pieni(pitka)]: `${pitka} tem vogal longa no fim (${pitka.slice(-2)}): hän ${pitka} = ele, ela ${merkitys(v).split(',')[0]}`,
          [pieni(lyhyt)]: `${lyhyt} tem vogal curta no fim: en ${lyhyt} (${KIELTOMUOTO}) ou ${lyhyt}! (ordem)`
        };
        return { kysymys: 'Ouça: vogal longa ou curta no fim?', kieli: 'pt-BR', puhu: oikea, kuuntele: oikea, oikea, avain: oikea,
          vaihtoehdot: sekoita([pitka, lyhyt]), miksi,
          solu: oikea === pitka ? `${v} · ${soluNimi('prees.3s')}` : `${v} · ${KIELTOMUOTO}`,
          selitys: oikea === pitka ? `${pitka}: hän ${pitka} (vogal longa).` : `${lyhyt}: en ${lyhyt}, ${lyhyt}! (vogal curta).` };
      }
    },
    // Lição 3: partitivo depois de números e ao comprar, preços. Muodot leksikosta (sanasto/t03.js, gramatica.js).
    {
      id: 't03-luku', oppitunti: 't03', luokka: 'nomes', ryhma: 'Partitivo', rekisteri: 'kirja', otsikko: 'Número + partitivo', kirjoitus: true,
      kuvaus: 'yksi pulla, mas kaksi pullaa: com 1, forma básica; a partir de 2, partitivo singular (nunca plural).',
      saanto: 'com 1, forma básica (yksi pulla); a partir de 2, partitivo singular (kaksi pullaa).',
      tee() {
        const SANAT = ['pulla', 'leipä', 'juusto', 'kahvi', 'suklaa', 'euro', 'sentti', 'gramma', 'kilo', 'paketti', 'asema', 'numero'];
        const s = arpa(SANAT.filter(x => S.hae(x)));
        const p = S.paradigma(s);
        const n = Math.random() < 0.25 ? 1 : 2 + Math.floor(Math.random() * 9);
        const oikea = n === 1 ? p.nom : p.part;
        const miksi = {};
        if (n === 1) miksi[pieni(p.part)] = `${p.part} é partitivo: só a partir de 2; com 1, forma básica`;
        else miksi[pieni(p.nom)] = `${p.nom} é a forma básica: só com 1; a partir de 2, partitivo`;
        if (p.gen) miksi[pieni(p.gen)] = `${p.gen} é o genitivo (-n, de …): depois de número, não`;
        return { kysymys: `${LUVUT[n]} ___ (${s})`, kieli: 'fi-FI', puhu: `${LUVUT[n]} ${oikea}`, oikea,
          vaihtoehdot: vaihtoehdot(oikea, [p.nom, p.part, p.gen]), miksi,
          solu: `${s} · ${n === 1 ? soluNimi('nom') : soluNimi('part', S.harmonia(s))}: ${oikea}`,
          selitys: n === 1 ? `${LUVUT[n]} ${oikea}: com 1, a forma básica (${merkitys(s)}).` : `${LUVUT[n]} ${oikea}: a partir de 2, partitivo singular (${merkitys(s)}).` };
      }
    },
    {
      id: 't03-muoto', oppitunti: 't03', luokka: 'nomes', ryhma: 'Partitivo', rekisteri: 'kirja', otsikko: 'Forme o partitivo', kirjoitus: true,
      kuvaus: 'pulla → pullaa, leipä → leipää, suklaa → suklaata, tuore → tuoretta, suomalainen → suomalaista. O partitivo usa o radical forte.',
      saanto: 'partitivo singular: vogal curta + -a/-ä; vogal longa ou ditongo + -ta/-tä; -nen → -sta/-stä; a maioria das palavras em -e + -tta/-ttä.',
      tee() {
        const SANAT = ['pulla', 'leipä', 'juusto', 'kahvi', 'sentti', 'euro', 'paketti', 'suklaa', 'tee', 'maa', 'työ', 'tuore', 'huone', 'suomalainen', 'belgialainen', 'halpa'];
        const s = arpa(SANAT.filter(x => S.hae(x)));
        const p = S.paradigma(s);
        const oikea = p.part;
        const tapa = /nen$/.test(s) ? '-nen → -sta/-stä' : /tt[aä]$/.test(oikea) ? 'a maioria das palavras em -e: + -tta/-ttä'
          : /(aa|ee|ii|oo|uu|yy|ää|öö|uo|yö|ie)$/.test(s) ? 'vogal longa ou ditongo: + -ta/-tä' : 'vogal curta: + -a/-ä';
        // H1: väärät vaihtoehdot ovat saman sanan muita muotoja (väärä sija tai monikko); ei perusmuotoa, joka on
        // kysymyksessä itse (”→ partitivo?” sulkee sen pois).
        const miksi = {};
        if (p.gen) miksi[pieni(p.gen)] = `${p.gen} é o genitivo (-n, de …), não o partitivo`;
        if (p.ill) miksi[pieni(p.ill)] = `${p.ill} é para dentro: para onde? (ilativo), não o partitivo`;
        if (p['mon.part']) miksi[pieni(p['mon.part'])] = `${p['mon.part']} é o partitivo plural; aqui, singular`;
        return { kysymys: `${s} → partitivo?`, kieli: 'fi-FI', puhu: oikea, oikea,
          vaihtoehdot: vaihtoehdot(oikea, [p.gen, p.ill, p['mon.part']].filter(Boolean)), miksi,
          solu: `${s} · ${soluNimi('part', S.harmonia(s))}: ${oikea}`,
          selitys: `${s} → ${oikea} (${merkitys(s)}): ${tapa}.` };
      }
    },
    {
      id: 't03-hinnat', oppitunti: 't03', luokka: 'ouvir', ryhma: 'Números e preços', rekisteri: 'kirja', kuuntelu: true, otsikko: 'Preços em euros', kirjoitus: false,
      kuvaus: 'kolme euroa viisikymmentä = 3,50 €. Ouça ou leia o preço e escolha.',
      saanto: 'primeiro os euros (1 = yksi euro, 2 ou mais = euroa), depois os centavos: kolme euroa viisikymmentä = 3,50 €.',
      tee() {
        const luku = n => window.Kurssi.profiili.luku(n);
        const sanoin = (e, c) => (e === 1 ? 'yksi euro' : `${luku(e)} euroa`) + (c ? ' ' + luku(c) : '');
        const numeroin = (e, c) => `${e},${String(c).padStart(2, '0')} €`;
        const arvo = () => [1 + Math.floor(Math.random() * 20), Math.floor(Math.random() * 10) * 10];
        const [e, c] = arvo();
        // H1: jokainen harha eroaa yhdellä asialla: sama euro ja eri sentit (kaksi eri), tai samat sentit ja eri euro
        // (±1, ±10). Ei satunnaista hintaa (eroaisi molemmissa).
        const sentit = sekoita([10, 20, 30, 40, 50, 60, 70, 80, 90].map(x => (c + x) % 100)).slice(0, 2);
        const muut = [[e, sentit[0]], [e, sentit[1]], [e === 20 ? 19 : e + 1, c], [e > 10 ? e - 10 : e + 10, c]];
        const miksi = {};
        for (const [a, b] of muut) {
          const ero = a === e ? 'os euros estão certos, os centavos não' : 'os centavos estão certos, os euros não';
          miksi[pieni(sanoin(a, b))] = `${sanoin(a, b)} = ${numeroin(a, b)}: ${ero}`;
          miksi[pieni(numeroin(a, b))] = `${numeroin(a, b)} = ${sanoin(a, b)}: ${ero}`;
        }
        if (Math.random() < 0.5) {
          return { kysymys: numeroin(e, c), kieli: 'pt-BR', puhu: sanoin(e, c), oikea: sanoin(e, c),
            vaihtoehdot: vaihtoehdot(sanoin(e, c), muut.map(([a, b]) => sanoin(a, b))), miksi, selitys: `${numeroin(e, c)} = ${sanoin(e, c)}.` };
        }
        return { kysymys: 'Quanto custa?', kieli: 'pt-BR', puhu: sanoin(e, c), kuuntele: sanoin(e, c), oikea: numeroin(e, c),
          vaihtoehdot: vaihtoehdot(numeroin(e, c), muut.map(([a, b]) => numeroin(a, b))), miksi, selitys: `${sanoin(e, c)} = ${numeroin(e, c)}.`, eiKirjoitus: true };
      }
    },
    // --- t04 (Hesburger ja Kallion kahvila): tyypit 2–3, partitiivi tilauksessa, h-äänne ---
    {
      id: 't04-tyypit', oppitunti: 't04', luokka: 'verbos', ryhma: 'Presente', rekisteri: 'kirja', otsikko: 'Verbos dos tipos 2 e 3: presente', kirjoitus: true,
      kuvaus: 'Tipo 2: syödä → syön, hän syö. Tipo 3: tulla → tulen, hän tulee (o e dobra). As terminações são as mesmas de sempre.',
      saanto: 'tipo 2 (syödä): tire -da/-dä → syö-n, hän syö; tipo 3 (tulla): radical em -e → tule-n, hän tulee (o e dobra). Terminações: -n, -t, (hän), -mme, -tte, -vat.',
      tee() {
        const v = arpa(['syödä', 'juoda', 'saada', 'voida', 'myydä', 'tulla', 'mennä', 'kuulla', 'kävellä', 'pestä'].filter(onVerbi));
        const k = arpa(PERS);
        const f = muodot(v);
        const tyyppi = (S.hae(v).t || {}).tyyppi;
        return { kysymys: `${P[k]} (${v}) → ?`, kieli: 'fi-FI', puhu: `${P[k]} ${f.myonteinen[k]}`, oikea: f.myonteinen[k],
          vaihtoehdot: vaihtoehdot(f.myonteinen[k], PERS.map(x => f.myonteinen[x])), miksi: persoonaMiksi(f.myonteinen, k),
          solu: `${v} · tipo ${tyyppi} · ${soluNimi('prees.' + k)}`,
          selitys: `${P[k]} ${f.myonteinen[k]} = ${PT_PRON[k]} + ${merkitys(v) || v} (tipo ${tyyppi}).` };
      }
    },
    {
      id: 't04-tilaus', oppitunti: 't04', luokka: 'nomes', ryhma: 'Partitivo', rekisteri: 'kirja', otsikko: 'O pedido: partitivo', kirjoitus: true,
      kuvaus: 'Haluaisin kahvia. Saisinko vettä? Kaksi hampurilaista, kiitos. A coisa pedida vai para o partitivo.',
      saanto: 'o que se pede vai no partitivo singular: Haluaisin kahvia; Saisinko vettä?; Kaksi hampurilaista.',
      tee() {
        // [sana, portugaliksi, pohja]: pohja 'luku' = lukusanan jälkeen (kaksi …), muuten haluaisin/saisinko.
        const SANAT = [['kahvi', 'café'], ['tee', 'chá'], ['vesi', 'água'], ['maito', 'leite'], ['mehu', 'suco'], ['kakku', 'bolo'],
          ['pulla', 'pão doce'], ['suklaakakku', 'bolo de chocolate'], ['hampurilainen', 'hambúrgueres', 'luku'], ['korvapuusti', 'rolinhos de canela', 'luku']];
        const [id, pt, pohja] = arpa(SANAT.filter(x => S.hae(x[0])));
        const t = S.hae(id).t;
        const lause = pohja === 'luku' ? arpa(['Kaksi', 'Kolme']) + ' ___, kiitos.' : arpa(['Haluaisin ___.', 'Saisinko ___?']);
        // H1: väärät vaihtoehdot ovat saman sanan muita muotoja (yksi ero: sija; lukusanan jälkeen myös monikko).
        // Ei toisen sanan muotoja (pulloa, kakkaa eroavat sanana). Monikon partitiivi vain lukusanan jälkeen, jossa se on
        // väärin (Haluaisin pullia olisi oikein).
        const harhat = [id, t.gen, t.ill].concat(pohja === 'luku' && t.mpart ? [t.mpart] : []);
        const miksi = {};
        miksi[pieni(id)] = `${id} é a forma básica; a coisa pedida vai no partitivo`;
        if (t.gen) miksi[pieni(t.gen)] = `${t.gen} é o genitivo (-n, de …), não o partitivo`;
        if (t.ill) miksi[pieni(t.ill)] = `${t.ill} é para dentro: para onde? (ilativo), não o partitivo`;
        if (pohja === 'luku' && t.mpart) miksi[pieni(t.mpart)] = `${t.mpart} é o partitivo plural; depois de número, singular`;
        return { kysymys: `${lause} (${id})`, kieli: 'fi-FI', puhu: lause.replace('___', t.part), oikea: t.part,
          vaihtoehdot: vaihtoehdot(t.part, harhat), miksi, solu: `${id} · ${soluNimi('part', S.harmonia(id))}: ${t.part}`,
          selitys: `${lause.replace('___', t.part)} ${t.part} = ${pt}, no partitivo.` };
      }
    },
    {
      id: 't04-h', oppitunti: 't04', luokka: 'ouvir', ryhma: 'Com h ou sem h', rekisteri: 'kirja', kuuntelu: true, otsikko: 'Com h ou sem h?', kuvaus: 'Em finlandês o h sempre soa: Hesburger, não ’Esburger. Sem o h, a palavra vira outra. Ouça e escolha pelo sentido.',
      saanto: 'o h finlandês sempre soa (sopre o ar); sem o h é outra palavra.',
      tee() {
        const PARIT = [['haamu', 'aamu', 'fantasma'], ['aamu', 'haamu', 'manhã'], ['hovi', 'ovi', 'corte (do rei)'], ['ovi', 'hovi', 'porta'],
          ['hauta', 'auta', 'túmulo'], ['auta', 'hauta', 'ajude!'], ['hei', 'ei', 'oi'], ['ei', 'hei', 'não']];
        const [oikea, harha, pt] = arpa(PARIT);
        const toinen = PARIT.find(x => x[0] === harha);
        const miksi = toinen ? { [pieni(harha)]: `${harha} = ${toinen[2]}` } : {};
        return { kysymys: `Qual é “${pt}”?`, kieli: 'pt-BR', puhu: oikea, kuuntele: oikea, oikea, vaihtoehdot: sekoita([oikea, harha]), miksi,
          selitys: `${oikea} = ${pt}. ${oikea[0] === 'h' ? 'Com h: sopre o ar.' : 'Sem h.'}` };
      }
    },
    // --- t05 (Jayn perhe): minulla on (quem tem?), genetiivi (Jayn äiti), sukulaissanat. Muodot leksikosta (sanasto/t05.js). ---
    {
      id: 't05-omistus', oppitunti: 't05', luokka: 'verbos', ryhma: 'Ter: minulla on', rekisteri: 'kirja', otsikko: 'Quem tem? minulla on', kirjoitus: true,
      kuvaus: 'Quem tem ganha -lla/-llä (adessivo) e vem on: minulla on, sinulla on, Purjolla on, äidillä on…',
      saanto: 'quem tem: -lla/-llä + on (minulla on, Purjolla on); a coisa que se tem fica na forma básica.',
      tee() {
        // Portugalinkielinen vihje (ei suomen pronominia): oppija päättelee henkilön ja sijan. Jokainen väärä vaihtoehto
        // eroaa oikeasta yhdellä asialla: väärä henkilö (sama sija) tai väärä sija (sama henkilö). KAYTANNOT.md H1.
        const KUKA = [['minä', 'Eu tenho'], ['sinä', 'Você tem'], ['hän', 'Ele tem'], ['me', 'Nós temos'], ['te', 'Vocês têm'],
          ['he', 'Eles têm'], ['Purjo', 'A Purjo tem'], ['Hiisi', 'O Hiisi tem'], ['Maia', 'A Maia tem'], ['Jay', 'O Jay tem']];
        const ASIAT = ['auto', 'veli', 'sisko', 'kissa', 'kuva', 'puhelin', 'tytär', 'poika'];
        const [kuka, pt] = arpa(KUKA.filter(([x]) => S.hae(x)));
        const asia = arpa(ASIAT.filter(x => S.hae(x) && x !== kuka));
        const p = S.paradigma(kuka);
        const oikea = p.ade;
        const toinen = arpa(KUKA.filter(([x]) => x !== kuka && S.hae(x)));
        const vaaraHenkilo = S.paradigma(toinen[0]).ade;
        const pieni = s => s.charAt(0).toLowerCase() + s.slice(1);
        const mita = merkitys(asia).split(',')[0];
        // Minä ja me: toteamus (kysymys omasta perheestä olisi outo); muut: kysymys.
        const toteamus = kuka === 'minä' || kuka === 'me';
        const miksi = {};
        miksi[String(vaaraHenkilo).toLowerCase()] = `caso certo (-lla/-llä), pessoa errada: ${vaaraHenkilo} = ${pieni(toinen[1])}`;
        if (p.gen) miksi[p.gen.toLowerCase()] = `pessoa certa, caso errado: ${p.gen} (-n) = de quem; quem tem = -lla/-llä`;
        if (p.all) miksi[p.all.toLowerCase()] = `pessoa certa, caso errado: ${p.all} (-lle) = para quem; quem tem = -lla/-llä`;
        if (p.part) miksi[p.part.toLowerCase()] = `pessoa certa, caso errado: ${p.part} é partitivo; quem tem = -lla/-llä`;
        const fi = toteamus ? `${oikea.charAt(0).toUpperCase() + oikea.slice(1)} on ${asia}.` : `Onko ${oikea} ${asia}?`;
        return { kysymys: toteamus ? `“${pt} ${mita}.” → ___ on ${asia}.` : `“${pt} ${mita}?” → Onko ___ ${asia}?`, kieli: 'fi-FI', puhu: fi, oikea,
          vaihtoehdot: sekoita([oikea, vaaraHenkilo, ...sekoita([p.gen, p.all, p.part].filter(Boolean)).slice(0, 2)]), miksi,
          solu: `${kuka} · quem tem? -lla/-llä (adessivo): ${oikea}`,
          selitys: `${fi} = ${pt} ${mita}${toteamus ? '.' : '?'} Quem tem: -lla/-llä + on.` };
      }
    },
    {
      id: 't05-genetiivi', oppitunti: 't05', luokka: 'nomes', ryhma: 'Genitivo', rekisteri: 'kirja', otsikko: 'De quem? O genitivo -n', kirjoitus: true,
      kuvaus: 'Quem possui vem primeiro, no genitivo: Jayn äiti (a mãe do Jay), Hiiden auto, äidin kuva.',
      saanto: 'quem possui vem antes, no genitivo -n: Jayn äiti (a mãe do Jay), äidin kuva.',
      tee() {
        const OMISTAJAT = ['Jay', 'Maia', 'Purjo', 'Hiisi', 'Anderson', 'Marta', 'äiti', 'isä', 'veli', 'poika'];
        const SANAT = ['äiti', 'isä', 'veli', 'sisko', 'auto', 'kuva', 'perhe', 'nimi', 'puhelin', 'opettaja'];
        const o = arpa(OMISTAJAT.filter(x => S.hae(x)));
        const s = arpa(SANAT.filter(x => S.hae(x) && x !== o));
        const p = S.paradigma(o);
        const oikea = p.gen;
        // Väärät vaihtoehdot: sama omistaja, väärä sija (yksi ero).
        const miksi = { [pieni(o)]: `${o} é a forma básica; quem possui vai no genitivo -n` };
        if (p.ade) miksi[pieni(p.ade)] = `${p.ade} (-lla/-llä) = quem tem ou onde; de quem = -n`;
        if (p.all) miksi[pieni(p.all)] = `${p.all} (-lle) = para quem; de quem = -n`;
        if (p.part) miksi[pieni(p.part)] = `${p.part} é partitivo; de quem = -n`;
        return { kysymys: `${o} + ${s} → ___ ${s}`, kieli: 'fi-FI', puhu: `${oikea} ${s}`, oikea,
          vaihtoehdot: vaihtoehdot(oikea, [o, p.ade, p.all, p.part].filter(Boolean)), miksi,
          solu: `${o} · ${soluNimi('gen')}: ${oikea}`,
          selitys: `${oikea} ${s} = ${merkitys(s)} de ${o}: quem possui vem antes, no genitivo (-n).` };
      }
    },
    {
      id: 't05-perhe', oppitunti: 't05', luokka: 'palavras', ryhma: 'Família', rekisteri: 'kirja', otsikko: 'Palavras da família', kirjoitus: true,
      kuvaus: 'äiti, isä, veli, sisko, poika, tytär, mummo, vaari… Do português ao finlandês, com o genitivo na explicação.',
      saanto: 'família: äiti, isä, veli, sisko, poika, tytär, lapsi, mummo, vaari…',
      tee() {
        const SANAT = ['äiti', 'isä', 'veli', 'sisko', 'poika', 'tytär', 'lapsi', 'mummo', 'vaari', 'perhe', 'mies', 'vaimo', 'tyttöystävä', 'poikaystävä'].filter(x => S.hae(x));
        const s = arpa(SANAT);
        const p = S.paradigma(s);
        const miksi = {};
        for (const x of SANAT) if (x !== s) miksi[pieni(x)] = `${x} = ${merkitys(x)}`;
        return { kysymys: `“${merkitys(s)}” em finlandês?`, kieli: 'pt-BR', puhu: s, oikea: s,
          vaihtoehdot: vaihtoehdot(s, SANAT), miksi, selitys: `${s} = ${merkitys(s)}; de quem? ${p.gen}; quem tem? ${p.ade} on.` };
      }
    },
    // ==== t06: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    /* --- t06 (Kuusamo ja Oodi): sisäpaikallissijat -ssa, -sta, -Vn/-hVn/-seen, kysymyssanat missä/mistä/mihin ja täry-r.
       Muodot leksikosta (Sanasto.paradigma: ines, ela, ill; koti ja Sörnäinen: nimetty kolmikko missa/mista/mihin).
       H1: väärät vaihtoehdot ovat saman sanan muita sisäsijoja (yksi ero: sija) tai muita kysymyssanoja. Apufunktiot ovat
       paketin omassa funktiossa, jotta lisäys pysyy tämän merkkirivin alla (OPPITUNNIT_6_20.md §8). --- */
    ...(function () {
      // Paikat lauseisiin ”Missä Maia on? – ___”: vain sisäsijaiset paikat (ulkosijat -lla/-lta/-lle: oppitunti 7).
      const PAIKAT = ['kirjasto', 'kauppa', 'kahvila', 'sauna', 'metsä', 'järvi', 'studio', 'Oodi', 'Helsinki', 'Kuusamo',
        'Espoo', 'Kallio', 'kauppahalli', 'toimisto', 'hissi', 'mökki', 'metro', 'Suomi', 'Brasilia', 'Sörnäinen', 'koti'];
      // Aiheet: ”Mistä kirja kertoo? – ___” (elatiivi = sobre).
      const AIHEET = ['Pohjois-Korea', 'Kuusamo', 'sauna', 'Brasilia', 'Suomi', 'Helsinki', 'ruoka', 'musiikki', 'historia', 'poro', 'Marokko', 'basso'];
      // Illatiivin muodostus (muoto ilman lausetta): kaikki kolme tapaa.
      const ILL = ['talo', 'kirja', 'hylly', 'kivi', 'joki', 'kauppa', 'Helsinki', 'Oodi', 'järvi', 'metsä', 'studio',
        'maa', 'yö', 'tie', 'kuu', 'huone', 'aihe', 'perhe', 'Espoo', 'sade', 'lomake'];
      const KUKA = ['Maia', 'Jay', 'Purjo', 'Hiisi'];
      const SOLUT = ['missa', 'mista', 'mihin'];
      const KYSY = { missa: 'Missä', mista: 'Mistä', mihin: 'Mihin' };
      const VERBI = { missa: 'on', mista: 'tulee', mihin: 'menee' };
      const NIMI = { missa: 'onde? (missä?, -ssa/-ssä)', mista: 'de onde? (mistä?, -sta/-stä)', mihin: 'para onde? (mihin?, -aan, -oon, -iin…, -han, -hön…, -seen)' };
      const PT = { missa: 'onde', mista: 'de onde', mihin: 'para onde' };
      // Sanan kolme sisäsijaa: nimetty kolmikko (kotona, kotoa, kotiin) tai inessiivi, elatiivi, illatiivi.
      const kolme = id => {
        const p = S.paradigma(id) || {};
        return p.missa && p.mista && p.mihin ? { missa: p.missa, mista: p.mista, mihin: p.mihin } : { missa: p.ines, mista: p.ela, mihin: p.ill };
      };
      const tapa = ill => (/seen$/.test(ill) ? '-seen (vogal longa no fim de palavra com duas sílabas ou mais)'
        : /[aeiouyäö]h[aeiouyäö]n$/.test(ill) ? '-' + ill.slice(-3) + ' (h + a última vogal + n: palavra de uma sílaba com vogal longa ou ditongo)' : '-' + ill.slice(-3) + ' (a última vogal dobra + n)');
      const sijaMiksi = (f, solu) => {
        const m = {};
        for (const k of SOLUT) if (k !== solu && f[k] && pieni(f[k]) !== pieni(f[solu])) m[pieni(f[k])] = `${f[k]} responde ${NIMI[k]}; aqui a pergunta é ${KYSY[solu].toLowerCase()}? (${PT[solu]}?)`;
        return m;
      };
      // Lauseellinen kysymys: paikka (Missä Maia on?) tai aihe (Mistä kirja kertoo?, vain elatiivi).
      function lause(solu, aiheesta) {
        const s = arpa((aiheesta ? AIHEET : PAIKAT).filter(x => S.hae(x)));
        const f = kolme(s);
        if (!f.missa || !f.mista || !f.mihin) return null;
        const kysymys = aiheesta ? 'Mistä kirja kertoo?' : `${KYSY[solu]} ${arpa(KUKA.filter(x => S.hae(x)))} ${VERBI[solu]}?`;
        const oikea = f[solu];
        return { kysymys: `${kysymys} – ___ (${s})`, kieli: 'fi-FI', puhu: `${kysymys} ${oikea.charAt(0).toUpperCase() + oikea.slice(1)}.`, oikea,
          avain: `${s}:${solu}${aiheesta ? ':aihe' : ''}`, vaihtoehdot: vaihtoehdot(oikea, SOLUT.map(k => f[k])), miksi: sijaMiksi(f, solu),
          solu: `${s} · ${NIMI[solu]}`,
          selitys: aiheesta ? `${kysymys} ${oikea}: o tema vai no elativo (-sta/-stä), como “sobre”: ${merkitys(s)}.`
            : `${kysymys} ${oikea} (${PT[solu]}?: ${merkitys(s)}).` + (solu === 'mihin' ? ` Ilativo: ${tapa(oikea)}.` : '') };
      }
      return [
        {
          id: 't06-missa', oppitunti: 't06', luokka: 'nomes', ryhma: 'Casos de lugar', rekisteri: 'kirja', otsikko: 'Onde? -ssa / -ssä (inessivo)', kirjoitus: true,
          kuvaus: 'Missä Maia on? – Kirjastossa. O -ssa/-ssä vai no radical do genitivo: kauppa → kaupan → kaupassa. Casa é especial: kotona.',
          saanto: 'onde? (missä?): genitivo sem o -n + -ssa/-ssä: kirjasto → kirjastossa, kauppa → kaupassa, Helsinki → Helsingissä; em casa = kotona.',
          tee() { return lause('missa', false); }
        },
        {
          id: 't06-mista', oppitunti: 't06', luokka: 'nomes', ryhma: 'Casos de lugar', rekisteri: 'kirja', otsikko: 'De onde? Sobre o quê? -sta / -stä (elativo)', kirjoitus: true,
          kuvaus: 'Mistä Jay tulee? – Studiosta. E o tema: kirja Pohjois-Koreasta (um livro sobre a Coreia do Norte). De casa = kotoa.',
          saanto: 'de onde? e sobre o quê? (mistä?): genitivo sem o -n + -sta/-stä: kirjastosta, Helsingistä, Pohjois-Koreasta; de casa = kotoa.',
          tee() { return lause('mista', Math.random() < 0.4); }
        },
        {
          id: 't06-mihin', oppitunti: 't06', luokka: 'nomes', ryhma: 'Casos de lugar', rekisteri: 'kirja', otsikko: 'Para onde? O ilativo: -aan, -oon, -iin…, -han, -hön…, -seen', kirjoitus: true,
          kuvaus: 'talo → taloon, maa → maahan, huone → huoneeseen. O ilativo usa o radical forte: kauppa → kauppaan (mas kaupassa). Para casa = kotiin.',
          saanto: 'para onde? (mihin?): quase sempre a última vogal dobra + n (taloon, kauppaan); uma sílaba com vogal longa: h + a última vogal + n (maahan, työhön); vogal longa no fim de palavra maior: -seen (huoneeseen).',
          tee() {
            if (Math.random() < 0.5) return lause('mihin', false);
            const s = arpa(ILL.filter(x => S.hae(x)));
            const f = kolme(s);
            if (!f.missa || !f.mista || !f.mihin) return null;
            return { kysymys: `${s} (${merkitys(s).split(',')[0]}) → para onde? (mihin?)`, kieli: 'fi-FI', puhu: f.mihin, oikea: f.mihin, avain: `${s}:muoto`,
              vaihtoehdot: vaihtoehdot(f.mihin, SOLUT.map(k => f[k])), miksi: sijaMiksi(f, 'mihin'), solu: `${s} · ${NIMI.mihin}`,
              selitys: `${s} → ${f.mihin}: ${tapa(f.mihin)}.` };
          }
        },
        {
          id: 't06-kysymys', oppitunti: 't06', luokka: 'nomes', ryhma: 'Casos de lugar', rekisteri: 'kirja', otsikko: 'Missä, mistä ou mihin?',
          kuvaus: 'A resposta mostra a pergunta: Kirjastossa → Missä? · Kirjastosta → Mistä? · Kirjastoon → Mihin?',
          saanto: '-ssa/-ssä e kotona → missä? (onde?); -sta/-stä e kotoa → mistä? (de onde?, sobre o quê?); -aan, -oon, -iin…, -han, -hön…, -seen e kotiin → mihin? (para onde?).',
          tee() {
            const solu = arpa(SOLUT);
            const aiheesta = solu === 'mista' && Math.random() < 0.35;
            const s = arpa((aiheesta ? AIHEET : PAIKAT).filter(x => S.hae(x)));
            const f = kolme(s);
            if (!f[solu]) return null;
            const vastaus = f[solu].charAt(0).toUpperCase() + f[solu].slice(1);
            const loppu = aiheesta ? 'kirja kertoo?' : `${arpa(KUKA.filter(x => S.hae(x)))} ${VERBI[solu]}?`;
            const oikea = KYSY[solu] + '?';
            const miksi = {};
            for (const k of SOLUT) if (k !== solu) miksi[pieni(KYSY[k] + '?')] = `${KYSY[k]}? = ${PT[k]}?; a resposta ${vastaus} responde ${NIMI[solu]}`;
            return { kysymys: `___ ${loppu} – ${vastaus}.`, kieli: 'fi-FI', puhu: `${KYSY[solu]} ${loppu} ${vastaus}.`, oikea, avain: `${s}:${solu}${aiheesta ? ':aihe' : ''}`,
              vaihtoehdot: sekoita(SOLUT.map(k => KYSY[k] + '?')), miksi, solu: `${vastaus}: ${NIMI[solu]}`,
              selitys: `${KYSY[solu]} ${loppu} – ${vastaus}. (${PT[solu]}?)` };
          }
        },
        {
          id: 't06-r', oppitunti: 't06', luokka: 'ouvir', ryhma: 'R vibrante', rekisteri: 'kirja', kuuntelu: true, otsikko: 'r ou h?',
          kuvaus: 'O r finlandês é da ponta da língua, também no começo da palavra. O r “de garganta” soa como h e troca a palavra: rauta (ferro) × hauta (túmulo).',
          saanto: 'r finlandês = ponta da língua, vibrado (como o r de “caro”); o r de garganta soa como h e vira outra palavra.',
          tee() {
            const PARIT = [['rauta', 'hauta', 'ferro'], ['hauta', 'rauta', 'túmulo'], ['riisi', 'Hiisi', 'arroz'], ['Hiisi', 'riisi', 'o irmão do Jay'],
              ['rinta', 'hinta', 'peito'], ['hinta', 'rinta', 'preço'], ['retki', 'hetki', 'passeio'], ['hetki', 'retki', 'momento']].filter(x => S.hae(x[0]) && S.hae(x[1]));
            const [oikea, harha, pt] = arpa(PARIT);
            const toinen = PARIT.find(x => x[0] === harha);
            return { kysymys: `Qual é “${pt}”?`, kieli: 'pt-BR', puhu: oikea, kuuntele: oikea, oikea, avain: oikea, vaihtoehdot: sekoita([oikea, harha]),
              miksi: toinen ? { [pieni(harha)]: `${harha} = ${toinen[2]}` } : {},
              selitys: `${oikea} = ${pt}. ${/^r/i.test(oikea) ? 'Com r: a ponta da língua vibra.' : 'Com h: só um sopro de ar.'}` };
          }
        }
      ];
    })(),
    // ==== t07: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    /* --- t07 (lounas Otaniemessä): verbityypit 4 ja 5, ulkosijat -lla/-lta/-lle (paikka, ihminen, väline), ammatit ja
       kuuntelu -lla/-lta/-lle. Muodot leksikosta (Sanasto.paradigma). H1: väärä vaihtoehto on saman verbin toinen
       persoona tai muoto, saman sanan toinen paikallissija (yksi ero: sija) tai toinen ammatti. Apufunktiot paketin omassa
       funktiossa, jotta lisäys pysyy merkkirivin alla (OPPITUNNIT_6_20.md §8). --- */
    ...(function () {
      const TYYPPI4 = ['haluta', 'tavata', 'osata', 'tilata', 'siivota', 'avata', 'pelata', 'maalata', 'korjata', 'arvata', 'pelätä', 'maata'];
      const TYYPPI5 = ['tarvita', 'valita', 'häiritä'];
      // Persoonamuoto: ”minä (haluta) → ?”; väärät = saman verbin muut persoonat.
      function persoona(v, tyyppi) {
        const k = arpa(PERS);
        const f = muodot(v);
        const av = f.vaihtelu;
        return { kysymys: `${P[k]} (${v}) → ?`, kieli: 'fi-FI', puhu: `${P[k]} ${f.myonteinen[k]}`, oikea: f.myonteinen[k],
          vaihtoehdot: vaihtoehdot(f.myonteinen[k], PERS.map(x => f.myonteinen[x])), miksi: persoonaMiksi(f.myonteinen, k),
          solu: `${v} · tipo ${tyyppi} · ${soluNimi('prees.' + k)}`,
          selitys: `${P[k]} ${f.myonteinen[k]} = ${PT_PRON[k]} + ${merkitys(v) || v} (tipo ${tyyppi}).` +
            (tyyppi === 4 && av ? ` ${VAIHTELU} ao contrário: ${v} → ${f.myonteinen['1s']}, todas as pessoas com a consoante forte.` : '') };
      }
      // Kielto: ”minä en ___ (tarvita)”; väärät = persoonamuodot ja perusmuoto (ei muotoa, joka on sama kuin kieltomuoto).
      function kielto(v) {
        const k = arpa(PERS);
        const f = muodot(v);
        const [ei, kv] = f.kielto[k].split(' ');
        const harhat = [f.myonteinen[k], f.myonteinen['3s'], v, f.myonteinen['3p']].filter(x => x && pieni(x) !== pieni(kv));
        const miksi = {};
        for (const x of [k, '3s', '3p']) if (pieni(f.myonteinen[x]) !== pieni(kv)) miksi[pieni(f.myonteinen[x])] = `${f.myonteinen[x]} tem terminação de pessoa (${PT_PRON[x]}); depois de ${ei} vem a ${KIELTOMUOTO}, sem terminação`;
        miksi[pieni(v)] = `${v} é a forma básica (do dicionário); depois de ${ei} vem a ${KIELTOMUOTO}`;
        return { kysymys: `${P[k]} ${ei} ___ (${v})`, kieli: 'fi-FI', puhu: `${P[k]} ${f.kielto[k]}`, oikea: kv,
          vaihtoehdot: vaihtoehdot(kv, harhat), miksi, solu: `${v} · ${KIELTOMUOTO}: ${kv}`,
          selitys: `${P[k]} ${f.kielto[k]}: depois de ${ei} vem o radical sem terminação de pessoa (${kv}).` };
      }
      // Ulkosijat lauseessa: [lause, sana, solu, merkitys portugaliksi]. Portugali kiinnittää merkityksen, ei päätettä.
      const LAUSEET = [
        ['Leipä on ___.', 'pöytä', 'ade', 'na mesa'], ['Kahvi on ___.', 'tarjotin', 'ade', 'na bandeja'],
        ['Jay on ___.', 'asema', 'ade', 'na estação'], ['Kaisa on ___.', 'lounas', 'ade', 'no almoço'],
        ['Maia ottaa leipää ___.', 'pöytä', 'abl', 'da mesa'], ['Ravi tulee ___.', 'lounas', 'abl', 'do almoço'],
        ['Jay tulee ___.', 'asema', 'abl', 'da estação'], ['Me menemme ___.', 'asema', 'all', 'para a estação'],
        ['Maia menee ___.', 'tori', 'all', 'para a praça'], ['Kaisa menee ___.', 'lounas', 'all', 'para o almoço'],
        ['Maia soittaa ___.', 'Purjo', 'all', 'liga para a Purjo'], ['Ravi antaa kahvia ___.', 'Kaisa', 'all', 'dá café para a Kaisa'],
        ['Maia kysyy ___.', 'Ravi', 'abl', 'pergunta ao Ravi'], ['Jay saa kahvia ___.', 'Kaisa', 'abl', 'ganha café da Kaisa'],
        ['Maksan ___.', 'kortti', 'ade', 'com cartão'], ['Menen töihin ___.', 'metro', 'ade', 'de metrô'],
        ['Hiisi menee töihin ___.', 'auto', 'ade', 'de carro'], ['Ravi tekee töitä ___.', 'tietokone', 'ade', 'no computador']
      ];
      const SISA = { ade: 'ines', abl: 'ela', all: 'ill' };
      const NIMI = { ade: 'onde?, com quê?, quem tem? (-lla/-llä)', abl: 'de onde?, de quem? (-lta/-ltä)', all: 'para onde?, para quem? (-lle)',
        ines: 'onde? dentro (-ssa/-ssä)', ela: 'de dentro (-sta/-stä)', ill: 'para dentro (-aan, -oon, -iin…)' };
      const ULKO = ['ade', 'abl', 'all'];
      const AMMATIT = ['geologi', 'insinööri', 'laborantti', 'sairaanhoitaja', 'lääkäri', 'kokki', 'opettaja', 'myyjä', 'kuljettaja',
        'toimittaja', 'siivooja', 'taiteilija', 'taidemaalari', 'maalari', 'keraamikko'];
      const KUULE = ['pöytä', 'asema', 'tori', 'lounas', 'tarjotin', 'kortti', 'Maia', 'Purjo', 'äiti', 'Kaisa'];
      return [
        {
          id: 't07-tyyppi4', oppitunti: 't07', luokka: 'verbos', ryhma: 'Presente', rekisteri: 'kirja', otsikko: 'Verbos do tipo 4: presente', kirjoitus: true,
          kuvaus: 'haluta → haluan, hän haluaa; tilata → tilaan, hän tilaa. Atenção à gradação ao contrário: tavata → tapaan, pelätä → pelkään.',
          saanto: `tipo 4 (vogal + -ta/-tä): tire -ta, ponha a vogal: halua-n, halua-t, hän haluaa, halua-mme, halua-tte, halua-vat. ${VAIHTELU} ao contrário: o infinitivo é fraco, todas as pessoas são fortes (tavata → tapaan, hän tapaa).`,
          tee() { return persoona(arpa(TYYPPI4.filter(onVerbi)), 4); }
        },
        {
          id: 't07-tyyppi5', oppitunti: 't07', luokka: 'verbos', ryhma: 'Presente', rekisteri: 'kirja', otsikko: 'Verbos do tipo 5: presente e negativo', kirjoitus: true,
          kuvaus: 'tarvita → tarvitsen, hän tarvitsee; en tarvitse. O radical ganha -se-: tarvitse-, valitse-, häiritse-.',
          saanto: `tipo 5 (-ita/-itä): tire o -a e ponha -se-: tarvitse-n, tarvitse-t, hän tarvitsee, tarvitse-mme, tarvitse-tte, tarvitse-vat; negativo: en tarvitse (${KIELTOMUOTO}).`,
          tee() { const v = arpa(TYYPPI5.filter(onVerbi)); return Math.random() < 0.4 ? kielto(v) : persoona(v, 5); }
        },
        {
          id: 't07-ulko', oppitunti: 't07', luokka: 'nomes', ryhma: 'Casos de lugar', rekisteri: 'kirja', otsikko: '-lla, -lta ou -lle?', kirjoitus: true,
          kuvaus: 'Em cima, junto, num lugar aberto, com pessoas e com instrumento: pöydällä (na mesa), pöydältä (da mesa), pöydälle (para a mesa), Jaylle (para o Jay), kortilla (com cartão).',
          saanto: 'onde? -lla/-llä · de onde? -lta/-ltä · para onde? -lle; pessoas sempre com estes (soitan Purjolle, kysyn Ravilta); com quê? também -lla (kortilla, metrolla).',
          tee() {
            const [lause, s, solu, pt] = arpa(LAUSEET.filter(x => S.hae(x[1])));
            const p = S.paradigma(s);
            const oikea = p[solu];
            const muut = ULKO.concat(SISA[solu]).filter(x => x !== solu && p[x] && pieni(p[x]) !== pieni(oikea));
            const miksi = {};
            for (const x of muut) miksi[pieni(p[x])] = `${p[x]} = ${NIMI[x]}; aqui: ${pt} → ${NIMI[solu]}`;
            const fi = lause.replace('___', oikea);
            return { kysymys: `${lause} (${s} · ${pt})`, kieli: 'fi-FI', puhu: fi, oikea, avain: `${s}:${solu}:${lause}`,
              vaihtoehdot: vaihtoehdot(oikea, muut.map(x => p[x])), miksi,
              solu: `${s} · ${soluNimi(solu, S.harmonia(s))}`, selitys: `${fi} = ${pt}: ${NIMI[solu]}.` };
          }
        },
        {
          id: 't07-ammatit', oppitunti: 't07', luokka: 'palavras', ryhma: 'Profissões', rekisteri: 'kirja', otsikko: 'Profissões', kirjoitus: true,
          kuvaus: 'insinööri, sairaanhoitaja, kokki, opettaja… Do português ao finlandês. A profissão não tem artigo nem gênero: Olen kokki.',
          saanto: 'profissões: geologi, insinööri, laborantti, sairaanhoitaja, lääkäri, kokki, opettaja, myyjä, kuljettaja, toimittaja, siivooja, taiteilija, taidemaalari, maalari, keraamikko.',
          tee() {
            const SANAT = AMMATIT.filter(x => S.hae(x));
            const s = arpa(SANAT);
            const miksi = {};
            for (const x of SANAT) if (x !== s) miksi[pieni(x)] = `${x} = ${merkitys(x)}`;
            return { kysymys: `“${merkitys(s)}” em finlandês?`, kieli: 'pt-BR', puhu: s, oikea: s, vaihtoehdot: vaihtoehdot(s, SANAT), miksi,
              selitys: `${s} = ${merkitys(s)}. Olen ${s}: sem artigo, sem gênero.` };
          }
        },
        {
          id: 't07-kuule', oppitunti: 't07', luokka: 'ouvir', ryhma: 'Ouvir o caso: -lla, -lta, -lle', rekisteri: 'kirja', kuuntelu: true, otsikko: 'Ouça: -lla, -lta ou -lle?',
          kuvaus: 'pöydällä, pöydältä, pöydälle: só muda o fim. Ouça a palavra e escolha a forma.',
          saanto: 'ouça o fim: -lla/-llä (ll + vogal) = onde?, -lta/-ltä (lt) = de onde?, -lle (ll + e) = para onde?',
          tee() {
            const s = arpa(KUULE.filter(x => S.hae(x)));
            const p = S.paradigma(s);
            const solu = arpa(ULKO);
            const oikea = p[solu];
            const miksi = {};
            for (const x of ULKO) if (x !== solu && p[x]) miksi[pieni(p[x])] = `${p[x]} termina em ${x === 'ade' ? '-lla/-llä' : x === 'abl' ? '-lta/-ltä' : '-lle'}: ${NIMI[x]}`;
            return { kysymys: 'Ouça: qual forma?', kieli: 'pt-BR', puhu: oikea, kuuntele: oikea, oikea, avain: oikea,
              vaihtoehdot: sekoita(ULKO.map(x => p[x])), miksi, solu: `${s} · ${soluNimi(solu, S.harmonia(s))}`,
              selitys: `${oikea}: ${NIMI[solu]} (${merkitys(s)}).` };
          }
        }
      ];
    })(),
    // ==== t08: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    // --- t08 (Purjon asunto, Clas Ohlson): tämä/tuo/se ja niiden sijat, sanatyypit (genetiivi), luvut 100–1000. ---
    {
      id: 't08-tamatuo', oppitunti: 't08', luokka: 'nomes', ryhma: 'Tämä, tuo, se', rekisteri: 'kirja', otsikko: 'tämä, tuo, se: a forma certa', kirjoitus: true,
      kuvaus: 'tämä (perto de mim), se (perto de você), tuo (lá, apontando). Com um substantivo, o pronome vai no mesmo caso: tässä talossa, tähän asuntoon, Ei tätä, tuota!',
      saanto: 'tämä = perto de quem fala; se = perto de quem ouve ou já mencionado; tuo = longe dos dois. Com substantivo, o mesmo caso: tässä talossa, tähän asuntoon.',
      tee() {
        const iso = s => s.charAt(0).toUpperCase() + s.slice(1);
        const PRON = ['tämä', 'tuo', 'se'].filter(x => S.hae(x));
        if (Math.random() < 0.35) {
          // Merkitys: kuka on missä (vihje portugaliksi). Vaihtoehdot ovat kolme pronominia; vain paikka ratkaisee.
          const HUONEET = [['olohuone', 'a sala'], ['keittiö', 'a cozinha'], ['makuuhuone', 'o quarto'], ['parveke', 'a varanda'], ['eteinen', 'o hall de entrada']].filter(x => S.hae(x[0]));
          const [sana, pt] = arpa(HUONEET);
          const [pron, vihje] = arpa([['tämä', 'aqui comigo'], ['se', 'aí, perto de você'], ['tuo', 'ali, eu aponto']]);
          const MIKSI = { 'tämä': 'tämä = perto de quem fala', se: 'se = perto de quem ouve, ou já mencionado', tuo: 'tuo = longe dos dois: quem fala aponta' };
          const miksi = {};
          for (const x of PRON) if (x !== pron) miksi[x] = MIKSI[x];
          return { kysymys: `(${vihje}) ___ on ${sana}.`, kieli: 'fi-FI', puhu: `${iso(pron)} on ${sana}.`, oikea: iso(pron),
            vaihtoehdot: sekoita(PRON.map(iso)), miksi, avain: pron + '|' + sana, solu: `${pron} · ${soluNimi('nom')}`,
            selitys: `${iso(pron)} on ${sana}: ${pt}, ${vihje}. ${MIKSI[pron]}.` };
        }
        // Sija: pronomini samassa sijassa kuin substantiivi (tai ei + partitiivi). [lause, pronomini, solu, portugaliksi]
        const LAUSEET = [
          ['___ talossa on sauna.', 'tämä', 'ines', 'Neste prédio tem sauna.'],
          ['Purjo muuttaa ___ asuntoon.', 'tämä', 'ill', 'A Purjo vai se mudar para este apartamento.'],
          ['Minä pidän ___ asunnosta.', 'tämä', 'ela', 'Eu gosto deste apartamento.'],
          ['___ asunnon vuokra on kallis.', 'tämä', 'gen', 'O aluguel deste apartamento é caro.'],
          ['Ei ___, tuota!', 'tämä', 'part', 'Este não, aquele!'],
          ['___ hyllyssä on maalia.', 'tuo', 'ines', 'Naquela prateleira tem tinta.'],
          ['Purjo pitää ___ lampusta.', 'tuo', 'ela', 'A Purjo gosta daquela luminária.'],
          ['Maia menee ___ huoneeseen.', 'tuo', 'ill', 'A Maia vai para aquele quarto.'],
          ['Ei sitä, ___!', 'tuo', 'part', 'Esse não, aquele!'],
          ['___ lampun hinta on sata euroa.', 'tuo', 'gen', 'O preço daquela luminária é cem euros.'],
          ['Onko ___ talossa hissi?', 'se', 'ines', 'Tem elevador nesse prédio (de que você falou)?'],
          ['Vuokra on kallis, mutta Purjo pitää ___.', 'se', 'ela', 'O aluguel é caro, mas a Purjo gosta dele (do apartamento).'],
          ['Ei ___, tätä!', 'se', 'part', 'Esse não, este!']
        ].filter(x => S.hae(x[1]));
        const [kehys, pron, solu, pt] = arpa(LAUSEET);
        const p = S.paradigma(pron);
        const h = S.harmonia(pron);
        const alussa = kehys.startsWith('___');
        const muoto = s => (alussa ? iso(s) : s);
        const SOLUT = ['nom', 'gen', 'part', 'ines', 'ela', 'ill'].filter(x => p[x]);
        const oikea = muoto(p[solu]);
        const nimi = x => (x === 'nom' ? 'forma básica' : soluNimi(x, h));
        // H1: väärät vaihtoehdot ovat saman pronominin muita sijoja (yksi ero: sija).
        const miksi = {};
        for (const x of SOLUT) if (x !== solu) miksi[pieni(p[x])] = `${p[x]} = ${nimi(x)}; aqui: ${nimi(solu)}`;
        const lause = kehys.replace('___', oikea);
        return { kysymys: `${kehys} (${pron})`, kieli: 'fi-FI', puhu: lause, oikea,
          vaihtoehdot: vaihtoehdot(oikea, SOLUT.filter(x => x !== solu).map(x => muoto(p[x]))), miksi,
          solu: `${pron} · ${nimi(solu)}: ${p[solu]}`, selitys: `${lause} = ${pt}` };
      }
    },
    {
      id: 't08-sanatyypit', oppitunti: 't08', luokka: 'nomes', ryhma: 'Tipos de palavra', rekisteri: 'kirja', otsikko: 'Tipos de palavra: o genitivo', kirjoitus: true,
      kuvaus: 'nainen → naisen, vesi → veden, huone → huoneen, puhelin → puhelimen, rikas → rikkaan, lamppu → lampun: o fim da palavra muda antes da terminação.',
      saanto: '-nen → -sen; -si → -den; -e → -een; -in → -imen; -as → -aan; -s → -ksen; kk, pp, tt, nt, nk enfraquecem: lamppu → lampun.',
      tee() {
        const SANAT = [['nainen', '-nen → -se-'], ['eteinen', '-nen → -se-'], ['onnellinen', '-nen → -se-'], ['vesi', '-si → -de-'],
          ['käsi', '-si → -de-'], ['kuukausi', '-si → -de-'], ['huone', '-e → -ee-'], ['olohuone', '-e → -ee-'], ['parveke', '-e → -ee-, k → kk'],
          ['puhelin', '-in → -ime-'], ['soitin', '-in → -ime-'], ['rikas', '-as → -aa-, k → kk'], ['kerros', '-s → -kse-'], ['lamppu', 'pp → p'],
          ['katto', 'tt → t'], ['asunto', 'nt → nn'], ['sänky', 'nk → ng'], ['kauppa', 'pp → p']].filter(x => S.hae(x[0]));
        const [s, tapa] = arpa(SANAT);
        const p = S.paradigma(s);
        const h = S.harmonia(s);
        const solu = Math.random() < 0.7 ? 'gen' : 'ines';
        const oikea = p[solu];
        // H1: saman sanan muut sijat (yksi ero: sija); kirjoitustilassa koko muoto vartaloineen.
        const muut = ['gen', 'part', 'ill', 'ines'].filter(x => x !== solu && p[x] && p[x] !== oikea);
        const miksi = {};
        for (const x of muut) miksi[pieni(p[x])] = `${p[x]} = ${soluNimi(x, h)}; aqui: ${soluNimi(solu, h)}`;
        return { kysymys: `${s} → ${solu === 'gen' ? 'genitivo (de quem? de quê?)' : 'onde? (dentro)'}`, kieli: 'fi-FI', puhu: oikea, oikea,
          vaihtoehdot: vaihtoehdot(oikea, muut.map(x => p[x])), miksi, avain: solu,
          solu: `${s} · ${soluNimi(solu, h)}: ${oikea}`, selitys: `${s} → ${oikea} (${merkitys(s)}): ${tapa}.` };
      }
    },
    {
      id: 't08-sadat', oppitunti: 't08', luokka: 'ouvir', ryhma: 'Números e preços', rekisteri: 'kirja', kuuntelu: true, otsikko: 'Centenas: 100–1000 euros', kirjoitus: false,
      kuvaus: 'sata, kaksisataa… yhdeksänsataa, tuhat: o aluguel e as compras da Purjo. Ouça ou leia o preço e escolha.',
      saanto: '100 = sata; 200–900 = número + sataa (kaksisataa); 1000 = tuhat. -sataa = centenas (600), -kymmentä = dezenas (60).',
      tee() {
        const SADAT = ['', 'sata', 'kaksisataa', 'kolmesataa', 'neljäsataa', 'viisisataa', 'kuusisataa', 'seitsemänsataa', 'kahdeksansataa', 'yhdeksänsataa', 'tuhat'];
        const KYMMENET = ['', 'kymmenen', 'kaksikymmentä', 'kolmekymmentä', 'neljäkymmentä', 'viisikymmentä', 'kuusikymmentä', 'seitsemänkymmentä', 'kahdeksankymmentä', 'yhdeksänkymmentä'];
        const n = 1 + Math.floor(Math.random() * 10);
        const sanoin = k => `${SADAT[k]} euroa`;
        const numeroin = k => `${k * 100} €`;
        // H1: naapurisadat (ero: satojen luku) ja samalla numerolla kymmenet (ero: -kymmentä ↔ -sataa).
        const lahi = n === 10 ? [9, 8] : n === 1 ? [2, 3] : sekoita([n - 1, n + 1]);
        const kymmenet = n <= 9 && S.hae(KYMMENET[n]) ? n : 0;
        const miksi = {};
        for (const k of lahi) {
          miksi[pieni(sanoin(k))] = `${sanoin(k)} = ${numeroin(k)}: outra centena`;
          miksi[pieni(numeroin(k))] = `${numeroin(k)} = ${sanoin(k)}: outra centena`;
        }
        if (kymmenet) {
          miksi[pieni(`${KYMMENET[n]} euroa`)] = `${KYMMENET[n]} euroa = ${n * 10} €: -kymmentä são as dezenas; as centenas terminam em -sataa`;
          miksi[pieni(`${n * 10} €`)] = `${n * 10} € = ${KYMMENET[n]} euroa (dezenas); ${SADAT[n]} é centena`;
        }
        if (Math.random() < 0.5) {
          return { kysymys: numeroin(n), kieli: 'pt-BR', puhu: sanoin(n), oikea: sanoin(n), avain: 'luku' + n,
            vaihtoehdot: vaihtoehdot(sanoin(n), [...lahi.map(sanoin), ...(kymmenet ? [`${KYMMENET[n]} euroa`] : [])]), miksi, selitys: `${numeroin(n)} = ${sanoin(n)}.` };
        }
        return { kysymys: 'Quanto custa?', kieli: 'pt-BR', puhu: sanoin(n), kuuntele: sanoin(n), oikea: numeroin(n), avain: 'kuule' + n,
          vaihtoehdot: vaihtoehdot(numeroin(n), [...lahi.map(numeroin), ...(kymmenet ? [`${n * 10} €`] : [])]), miksi, selitys: `${sanoin(n)} = ${numeroin(n)}.`, eiKirjoitus: true };
      }
    },
    // ==== t09: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    // --- t09 (kaamos, matkalaukku, Habituuri): monikko -t, käsky sinä (Ota! Älä ota!), sää ja ajan sijat, loppukahdennus.
    //     Muodot leksikosta (Sanasto.paradigma: mon.nom, imper.2s, kielto, ines, ade); väärä vaihtoehto = saman sanan toinen muoto. ---
    {
      id: 't09-monikko', oppitunti: 't09', luokka: 'nomes', ryhma: 'Plural', rekisteri: 'kirja', otsikko: 'O plural -t: pipot, kengät', kirjoitus: true,
      kuvaus: `pipo → pipot, kenkä → kengät, ihminen → ihmiset. O plural -t usa o radical do genitivo: troque o -n por -t (atenção à ${VAIHTELU}).`,
      saanto: 'plural -t = genitivo sem o -n + t: pipon → pipot, kengän → kengät, ihmisen → ihmiset. Depois de número, nunca plural: kaksi kenkää.',
      tee() {
        const SANAT = ['pipo', 'hanska', 'sukka', 'kenkä', 'paita', 'takki', 'huivi', 'sandaali', 'possu', 'taulu', 'ihminen', 'nainen',
          'huone', 'talo', 'kauppa', 'villasukka', 'toppatakki', 'sateenvarjo', 'kaappi', 'osasto'];
        const s = arpa(SANAT.filter(x => S.hae(x) && S.paradigma(x)['mon.nom']));
        const p = S.paradigma(s);
        const mon = p['mon.nom'];
        const pt = merkitys(s).replace(/\s*\([^)]*\)\s*$/, '');
        const miksi = {};
        if (Math.random() < 0.7) {
          // Yksiköstä monikko: väärät vaihtoehdot ovat saman sanan muita sijoja (yksi ero: sija tai luku).
          if (p.gen) miksi[pieni(p.gen)] = `${p.gen} é o genitivo (-n, de …); o plural troca esse -n por -t`;
          if (p.part) miksi[pieni(p.part)] = `${p.part} é o partitivo singular (parte, depois de número), não o plural`;
          if (p['mon.part']) miksi[pieni(p['mon.part'])] = `${p['mon.part']} é o partitivo plural (algumas …, lição 11); aqui, o plural -t`;
          return { kysymys: `${s} → plural?`, kieli: 'fi-FI', puhu: mon, oikea: mon,
            vaihtoehdot: vaihtoehdot(mon, [p.gen, p.part, p['mon.part']].filter(Boolean)), miksi,
            solu: `${s} · ${soluNimi('mon.nom')}: ${mon}`,
            selitys: `${s} → genitivo ${p.gen} → plural ${mon} (${pt}): o genitivo sem -n, mais -t.` };
        }
        // Monikosta perusmuoto (lukutaito): väärät vaihtoehdot ovat saman sanan yksikön muita muotoja.
        const vaarat = [p.gen, p.part, p.ill].filter(x => x && pieni(x) !== pieni(s));
        if (p.gen) miksi[pieni(p.gen)] = `${p.gen} é o genitivo (de …); a forma básica não tem terminação`;
        if (p.part) miksi[pieni(p.part)] = `${p.part} é o partitivo; a forma básica não tem terminação`;
        if (p.ill) miksi[pieni(p.ill)] = `${p.ill} é para dentro: para onde? (ilativo); a forma básica não tem terminação`;
        return { kysymys: `${mon} → uma só (forma básica)?`, kieli: 'fi-FI', puhu: s, kuuntele: mon, oikea: s,
          vaihtoehdot: vaihtoehdot(s, vaarat), miksi, solu: `${mon} = ${s} · ${soluNimi('mon.nom')}`,
          selitys: `${mon} = várias; uma só: ${s} (${pt}).` };
      }
    },
    {
      id: 't09-kasky', oppitunti: 't09', luokka: 'verbos', ryhma: 'Imperativo', rekisteri: 'kirja', otsikko: 'Ordens: Ota! Älä ota!', kirjoitus: true,
      kuvaus: 'A ordem para “você” é a forma do “eu” sem o -n: otan → Ota! Para proibir: älä + a mesma forma: Älä ota! (nunca “ei ota”).',
      saanto: 'ordem para você = forma do “eu” sem -n (otan → ota!); não! = älä + a mesma forma (älä ota!), sem -t e sem ei.',
      tee() {
        const VERBIT = ['ottaa', 'tulla', 'mennä', 'katsoa', 'kuunnella', 'puhua', 'odottaa', 'muistaa', 'unohtaa', 'pakata', 'ostaa', 'istua',
          'kysyä', 'maksaa', 'lukea', 'kirjoittaa', 'syödä', 'juoda', 'tehdä', 'olla'].filter(onVerbi);
        const v = arpa(VERBIT);
        const p = S.paradigma(v);
        const kasky = p['imper.2s'];
        if (!kasky || !p['prees.1s']) return null;
        const isolla = t => t.charAt(0).toUpperCase() + t.slice(1);
        const pt = merkitys(v).split(/[,(]/)[0].trim();
        const tapa = Math.random();
        if (tapa < 0.45) {
          // Myönteinen käsky: väärät ovat saman verbin persoonamuotoja tai perusmuoto (yksi ero: pääte).
          const miksi = {};
          miksi[pieni(p['prees.2s'])] = `${p['prees.2s']} = você ${pt} (afirmação, com -t); a ordem não tem terminação: ${kasky}!`;
          miksi[pieni(p['prees.1s'])] = `${p['prees.1s']} = eu ${pt}; tire o -n: ${kasky}!`;
          if (pieni(v) !== pieni(kasky)) miksi[pieni(v)] = `${v} é a forma básica (do dicionário); a ordem é o “eu” sem -n: ${kasky}!`;
          return { kysymys: `${v} (${pt}) → ordem para você?`, kieli: 'fi-FI', puhu: `${isolla(kasky)}!`, oikea: kasky,
            vaihtoehdot: vaihtoehdot(kasky, [p['prees.2s'], p['prees.1s'], v]), miksi,
            solu: `${v} · ${soluNimi('imper.2s')}: ${kasky}`,
            selitys: `${p['prees.1s']} (eu) → ${isolla(kasky)}! A ordem é a forma do “eu” sem o -n.` };
        }
        if (tapa < 0.75) {
          // Kielteinen käsky: älä + kieltomuoto; väärät: persoonapääte (älä otat) tai perusmuoto (älä ottaa).
          const kv = p.kielto;
          const miksi = {};
          miksi[pieni(p['prees.2s'])] = `${p['prees.2s']} tem terminação de pessoa (-t); depois de älä vem a ${KIELTOMUOTO}: ${kv}`;
          if (pieni(v) !== pieni(kv)) miksi[pieni(v)] = `${v} é a forma básica; depois de älä vem a ${KIELTOMUOTO}: ${kv}`;
          if (pieni(p['prees.3s']) !== pieni(kv)) miksi[pieni(p['prees.3s'])] = `${p['prees.3s']} = ele, ela ${pt}; depois de älä vem a ${KIELTOMUOTO}: ${kv}`;
          return { kysymys: `Älä ___! (${v}, ${pt})`, kieli: 'fi-FI', puhu: `Älä ${kv}!`, oikea: kv,
            vaihtoehdot: vaihtoehdot(kv, [p['prees.2s'], v, p['prees.3s']]), miksi,
            solu: `${v} · ${soluNimi('kielto')}: ${kv}`,
            selitys: `Älä ${kv}! = não ${pt}: älä + a mesma forma que vem depois de en (en ${kv}).` };
        }
        // Kieltosana: älä (käsky) vai ei / et (toteamus)? Kaikki vaihtoehdot ovat kielteisiä; ero on vain kieltosanassa.
        const oikea = `Älä ${kasky}!`;
        const miksi = {
          [pieni(`Ei ${kasky}!`)]: `ei = não, para ele ou ela (hän ei ${kasky}); na ordem, “não” é älä`,
          [pieni(`Et ${kasky}!`)]: `et = você não (sinä et ${kasky}: uma afirmação); na ordem, “não” é älä`
        };
        return { kysymys: `Proíba: ${v} (${pt}). Não …!`, kieli: 'pt-BR', puhu: oikea, oikea,
          vaihtoehdot: sekoita([oikea, `Ei ${kasky}!`, `Et ${kasky}!`]), miksi,
          solu: `älä = ${soluNimi('imper.2s')} · ${v}: ${KIELTOMUOTO}`,
          selitys: `${oikea} A ordem negativa usa älä, nunca ei.` };
      }
    },
    {
      id: 't09-saa', oppitunti: 't09', luokka: 'palavras', ryhma: 'Tempo e estações', rekisteri: 'kirja', otsikko: 'O tempo, os meses e as estações', kirjoitus: true,
      kuvaus: 'sää, lumi, sade, pakkanen, aste… e “quando?”: os meses com -ssa (joulukuussa), as estações com -lla (talvella).',
      saanto: 'meses: -ssa/-ssä (joulukuussa = em dezembro); estações: -lla/-llä (talvella = no inverno, kesällä = no verão).',
      tee() {
        const tapa = Math.random();
        if (tapa < 0.4) {
          const SANAT = ['sää', 'sääennuste', 'aste', 'pakkanen', 'lumi', 'sade', 'aurinko', 'tuuli', 'kaamos', 'talvi', 'kevät', 'kesä', 'syksy'].filter(x => S.hae(x));
          const s = arpa(SANAT);
          const miksi = {};
          for (const x of SANAT) if (x !== s) miksi[pieni(x)] = `${x} = ${merkitys(x)}`;
          return { kysymys: `“${merkitys(s)}” em finlandês?`, kieli: 'pt-BR', puhu: s, oikea: s, vaihtoehdot: vaihtoehdot(s, SANAT), miksi,
            selitys: `${s} = ${merkitys(s)}.` };
        }
        if (tapa < 0.7) {
          // Kuukausi: quando? = inessiivi. Väärät: saman sanan perusmuoto, genetiivi ja illatiivi.
          const M = ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'].filter(x => S.hae(x));
          const s = arpa(M);
          const p = S.paradigma(s);
          const oikea = p.ines, h = S.harmonia(s);
          const aika = (KA.solu('ines', h, 'aika') || {}).nimi || soluNimi('ines', h);
          const miksi = { [pieni(s)]: `${s} é o nome do mês; “em …” = -ssa/-ssä: ${oikea}` };
          if (p.gen) miksi[pieni(p.gen)] = `${p.gen} é o genitivo (de …: ${p.gen} alussa = no começo de …); “em …” = ${oikea}`;
          if (p.ill) miksi[pieni(p.ill)] = `${p.ill} = até …, para dentro (ilativo); “em …” = ${oikea}`;
          return { kysymys: `em ${merkitys(s)} → ?`, kieli: 'pt-BR', puhu: oikea, oikea,
            vaihtoehdot: vaihtoehdot(oikea, [s, p.gen, p.ill].filter(Boolean)), miksi, solu: `${s} · ${aika}: ${oikea}`,
            selitys: `${oikea} = em ${merkitys(s)}: os meses dizem “quando?” com -ssa/-ssä.` };
        }
        // Vuodenaika: quando? = adessiivi. Väärät: perusmuoto, inessiivi ja genetiivi.
        const V = [['talvi', 'no inverno'], ['kevät', 'na primavera'], ['kesä', 'no verão'], ['syksy', 'no outono']].filter(x => S.hae(x[0]));
        const [s, pt] = arpa(V);
        const p = S.paradigma(s);
        const oikea = p.ade;
        const miksi = { [pieni(s)]: `${s} é a forma básica; “${pt}” = -lla/-llä: ${oikea}` };
        if (p.ines) miksi[pieni(p.ines)] = `${p.ines} é -ssa (dentro); as estações dizem “quando?” com -lla/-llä: ${oikea}`;
        if (p.gen) miksi[pieni(p.gen)] = `${p.gen} é o genitivo (de …); “${pt}” = ${oikea}`;
        return { kysymys: `${pt} → ?`, kieli: 'pt-BR', puhu: oikea, oikea, vaihtoehdot: vaihtoehdot(oikea, [s, p.ines, p.gen].filter(Boolean)), miksi,
          solu: `${s} · -lla/-llä (quando?): ${oikea}`, selitys: `${oikea} = ${pt}: as estações dizem “quando?” com -lla/-llä.` };
      }
    },
    {
      // TYONKULKU 14: äänite on koko lause ilman paljastavaa sanaa; ero kuuluu vain verbistä (lyhyt vokaali + kahdennus vai pitkä vokaali).
      id: 't09-kahdennus', oppitunti: 't09', luokka: 'ouvir', ryhma: 'Ordem ou afirmação', rekisteri: 'kirja', kuuntelu: true, otsikko: 'Tule tänne! ou Tulee tänne?',
      kuvaus: 'A ordem tem vogal curta e dobra a primeira consoante da palavra seguinte (Tule tänne! soa “tulet tänne”). A afirmação com “ele” tem vogal longa (Jay tulee tänne). Ouça e escolha.',
      saanto: 'ordem: vogal curta + consoante dobrada na palavra seguinte (tule tänne → “tulet tänne”); ele, ela: vogal longa (tulee tänne).',
      tee() {
        const PARIT = [   // [käsky, toteamus, käsky portugaliksi, toteamus portugaliksi]
          ['Jay, tule tänne!', 'Jay tulee tänne.', 'Jay, venha cá!', 'O Jay vem para cá.'],
          ['Maia, osta maitoa!', 'Maia ostaa maitoa.', 'Maia, compre leite!', 'A Maia compra leite.'],
          ['Hiisi, puhu hitaasti!', 'Hiisi puhuu hitaasti.', 'Hiisi, fale devagar!', 'O Hiisi fala devagar.'],
          ['Purjo, katso tätä!', 'Purjo katsoo tätä.', 'Purjo, olhe isto!', 'A Purjo olha isto.'],
          ['Jay, mene kotiin!', 'Jay menee kotiin.', 'Jay, vá para casa!', 'O Jay vai para casa.'],
          ['Maia, istu tähän!', 'Maia istuu tähän.', 'Maia, sente aqui!', 'A Maia se senta aqui.'],
          ['Hiisi, kuuntele tätä!', 'Hiisi kuuntelee tätä.', 'Hiisi, escute isto!', 'O Hiisi escuta isto.'],
          ['Jay, maksa kortilla!', 'Jay maksaa kortilla.', 'Jay, pague com cartão!', 'O Jay paga com cartão.']
        ];
        const [kasky, toteamus, ptK, ptT] = arpa(PARIT);
        const oikea = Math.random() < 0.5 ? kasky : toteamus;
        const miksi = {
          [pieni(kasky)]: `${kasky} é uma ordem (${ptK}): vogal curta, e a consoante da palavra seguinte dobra`,
          [pieni(toteamus)]: `${toteamus} é uma afirmação (${ptT}): vogal longa no fim do verbo, sem consoante dobrada`
        };
        return { kysymys: 'Ouça: ordem ou afirmação?', kieli: 'pt-BR', puhu: oikea, kuuntele: oikea, oikea, avain: oikea,
          vaihtoehdot: sekoita([kasky, toteamus]), miksi, eiKirjoitus: true,
          selitys: oikea === kasky ? `${kasky} = ${ptK} (ordem: vogal curta + consoante dobrada).` : `${toteamus} = ${ptT} (afirmação: vogal longa).` };
      }
    },
    // ==== t10: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    // --- t10 (lentokenttä): kellonajat (sanoin ↔ numeroin, kuunnellen), täytyy + genetiivi + infinitiivi, henkilöt
    //     -lle/-lta/-lla ja Situações: lähtöselvitys. Kellonaika lasketaan (profiilin luku: vain leksikon lukusanat 1–12,
    //     5, 10, 15, 20); väärä vaihtoehto = sama aika peilattuna (yli ↔ vaille, puoli väärään tuntiin) tai tunti ±1. ---
    ...(() => {
      const luku = n => window.Kurssi.profiili.luku(n);
      const h12 = h => ((h - 1 + 1200) % 12) + 1;   // 0 → 12, 13 → 1
      // Puheen kello (12 tuntia): minuutit + yli + tunti; minuutit + vaille + seuraava tunti; puoli + seuraava tunti.
      const sanoin = (h, m) => {
        const t = h12(h), seur = h12(h + 1);
        if (m === 0) return luku(t);
        if (m === 15) return `varttia yli ${luku(t)}`;
        if (m === 30) return `puoli ${luku(seur)}`;
        if (m === 45) return `varttia vaille ${luku(seur)}`;
        return m < 30 ? `${luku(m)} yli ${luku(t)}` : `${luku(60 - m)} vaille ${luku(seur)}`;
      };
      const numeroin = (h, m) => `${h12(h)}.${String(m).padStart(2, '0')}`;
      const MINUUTIT = [0, 5, 10, 15, 20, 30, 40, 45, 50, 55];
      // Peilikuva: samat sanat, väärä suunta (varttia yli neljä ↔ varttia vaille neljä); puoli → puoli väärä tunti.
      const peili = (h, m) => (m === 0 ? [h - 1, 30] : m === 30 ? [h - 1, 30] : m < 30 ? [h - 1, 60 - m] : [h + 1, 60 - m]);
      const harhat = (h, m) => [peili(h, m), [h + 1, m], [h - 1, m]];
      // Selitys harhalle: puolen tunnin harhat (tunti ±1) ovat aina puoli-sääntöä, muuten peili = suunta, muut = tunti.
      const syy = (m, x) => (m === 30 ? 'puoli conta para a hora seguinte: puoli viisi = 4.30'
        : x === 0 ? (m === 0 ? 'hora cheia: só o número' : 'yli = passado de; vaille = faltando para a hora seguinte') : 'a hora está errada');
      const kello = [
        {
          id: 't10-kello', oppitunti: 't10', luokka: 'palavras', ryhma: 'Horas', rekisteri: 'kirja', otsikko: 'Que horas são? Kello on…', kirjoitus: true,
          kuvaus: 'Do relógio para as palavras e de volta: 4.15 = varttia yli neljä, 4.30 = puoli viisi, 4.45 = varttia vaille viisi.',
          saanto: 'minutos + yli + a hora; minutos + vaille + a hora seguinte; puoli + a hora seguinte (puoli viisi = 4.30); varttia = 15 minutos.',
          tee() {
            const h = 1 + Math.floor(Math.random() * 12), m = arpa(MINUUTIT);
            const sana = sanoin(h, m), nro = numeroin(h, m);
            const muut = harhat(h, m);
            const miksi = {};
            if (Math.random() < 0.5) {
              muut.forEach(([a, b], i) => { if (sanoin(a, b) !== sana) miksi[pieni(sanoin(a, b))] = `${sanoin(a, b)} = ${numeroin(a, b)}: ${syy(m, i)}`; });
              return { kysymys: `${nro} → Kello on ___.`, kieli: 'fi-FI', puhu: `Kello on ${sana}.`, oikea: sana, avain: nro,
                vaihtoehdot: vaihtoehdot(sana, muut.map(([a, b]) => sanoin(a, b))), miksi,
                selitys: `${nro} = Kello on ${sana}.` };
            }
            muut.forEach(([a, b], i) => { if (numeroin(a, b) !== nro) miksi[numeroin(a, b)] = `${numeroin(a, b)} = ${sanoin(a, b)}: ${syy(m, i)}`; });
            return { kysymys: `Kello on ${sana}.`, kieli: 'fi-FI', puhu: `Kello on ${sana}.`, oikea: nro, avain: 'n' + nro,
              vaihtoehdot: vaihtoehdot(nro, muut.map(([a, b]) => numeroin(a, b))), miksi, eiKirjoitus: true,
              selitys: `Kello on ${sana} = ${nro}.` };
          }
        },
        {
          // TYONKULKU 14: äänitteessä on vain kellonaika (tai lennon kohde ja aika), ei vastausta paljastavaa sanaa.
          id: 't10-kuuntele', oppitunti: 't10', luokka: 'ouvir', ryhma: 'Números e preços', rekisteri: 'kirja', kuuntelu: true, otsikko: 'Ouça a hora',
          kuvaus: 'Ouça a hora ou o horário do voo e escolha o relógio: puoli viisi = 4.30; kello kuusitoista kymmenen = 16.10.',
          saanto: 'puoli + a hora seguinte (puoli viisi = 4.30); no relógio de 24 horas, hora + minutos: kuusitoista kymmenen = 16.10.',
          tee() {
            if (Math.random() < 0.6) {
              const h = 1 + Math.floor(Math.random() * 12), m = arpa(MINUUTIT);
              const nro = numeroin(h, m), teksti = `Kello on ${sanoin(h, m)}.`;
              const muut = harhat(h, m);
              const miksi = {};
              muut.forEach(([a, b], i) => { if (numeroin(a, b) !== nro) miksi[numeroin(a, b)] = `${numeroin(a, b)} = ${sanoin(a, b)}: ${syy(m, i)}`; });
              return { kysymys: 'Que horas são?', kieli: 'pt-BR', puhu: teksti, kuuntele: teksti, oikea: nro, avain: nro,
                vaihtoehdot: vaihtoehdot(nro, muut.map(([a, b]) => numeroin(a, b))), miksi, eiKirjoitus: true, selitys: `${teksti} = ${nro}.` };
            }
            // 24 tunnin kello (lennot): tunti 13–21, minuutit kymmenittäin. Harhat: ”-toista” kuulematta (16 → 6), tunti +1, minuutit.
            const H = 13 + Math.floor(Math.random() * 9), M = 10 * Math.floor(Math.random() * 6);
            const KOHTEET = [['Lissaboniin', 'Lisboa'], ['Confinsiin', 'Confins'], ['Lontooseen', 'Londres'], ['Pariisiin', 'Paris'], ['Ouluun', 'Oulu']];
            const [kohde, pt] = arpa(KOHTEET);
            const kk = (a, b) => `${a}.${String(b).padStart(2, '0')}`;
            const nro = kk(H, M);
            const teksti = `Lento ${kohde} lähtee kello ${luku(H)}${M ? ' ' + luku(M) : ''}.`;
            const muut = [[H - 10, M, `${luku(H)} = ${H}: ${luku(H - 10)} sozinho seria ${H - 10}`], [H + 1, M, `a hora é ${luku(H)} (${H})`],
              [H, (M + 20) % 60, M ? `os minutos são ${luku(M)} (${M})` : 'hora cheia: sem minutos']];
            const miksi = {};
            for (const [a, b, s] of muut) miksi[kk(a, b)] = `${kk(a, b)}: ${s}`;
            return { kysymys: `A que horas sai o voo para ${pt}?`, kieli: 'pt-BR', puhu: teksti, kuuntele: teksti, oikea: nro, avain: kohde + nro,
              vaihtoehdot: vaihtoehdot(nro, muut.map(([a, b]) => kk(a, b))), miksi, eiKirjoitus: true, selitys: `${teksti} = ${nro}.` };
          }
        }
      ];
      // täytyy: kuka tarvitsee (genetiivi) tai toinen verbi (infinitiivi). Vihje portugaliksi, ei suomen pronominia (H1).
      const isolla = t => t.charAt(0).toUpperCase() + t.slice(1);
      const taytyy = {
        id: 't10-taytyy', oppitunti: 't10', luokka: 'verbos', ryhma: 'Preciso: täytyy', rekisteri: 'kirja', otsikko: 'Preciso: minun täytyy…', kirjoitus: true,
        kuvaus: 'Quem precisa vai no genitivo, täytyy não muda, e o segundo verbo fica no infinitivo: Minun täytyy lähteä. Maian täytyy juosta.',
        saanto: 'genitivo (minun, sinun, Maian…) + täytyy + infinitivo (lähteä, juosta…). Nunca minä täytyy; nunca minun täytyy lähden.',
        tee() {
          const KUKA = [['minä', 'Eu preciso'], ['sinä', 'Você precisa'], ['hän', 'Ele precisa'], ['me', 'Nós precisamos'], ['te', 'Vocês precisam'],
            ['he', 'Eles precisam'], ['Maia', 'A Maia precisa'], ['Jay', 'O Jay precisa'], ['Purjo', 'A Purjo precisa'], ['Hiisi', 'O Hiisi precisa'],
            ['äiti', 'A mãe precisa']].filter(([x]) => S.hae(x));
          const TEOT = [['lähteä', 'ir embora'], ['nukkua', 'dormir'], ['juosta', 'correr'], ['odottaa', 'esperar'], ['maksaa', 'pagar'],
            ['mennä', 'ir'], ['soittaa', 'ligar'], ['lentää', 'voar']].filter(([v]) => onVerbi(v));
          const [kuka, pt] = arpa(KUKA);
          const [v, vpt] = arpa(TEOT);
          const p = S.paradigma(kuka);
          const gen = p.gen;
          if (Math.random() < 0.65) {
            // Kuka: väärät vaihtoehdot ovat saman henkilön muita sijoja (yksi ero: sija).
            const miksi = { [pieni(kuka)]: `${kuka} é o sujeito comum (nominativo); com täytyy, quem precisa vai no genitivo: ${gen}` };
            if (p.ade) miksi[pieni(p.ade)] = `${p.ade} (-lla/-llä) = quem tem, com quem; com täytyy, genitivo: ${gen}`;
            if (p.all) miksi[pieni(p.all)] = `${p.all} (-lle) = para quem; com täytyy, genitivo: ${gen}`;
            return { kysymys: `“${pt} ${vpt}.” → ___ täytyy ${v}.`, kieli: 'fi-FI', puhu: `${isolla(gen)} täytyy ${v}.`, oikea: gen,
              vaihtoehdot: vaihtoehdot(gen, [kuka, p.ade, p.all].filter(Boolean)), miksi,
              solu: `${kuka} · ${soluNimi('gen')}: ${gen}`, selitys: `${isolla(gen)} täytyy ${v}. = ${pt} ${vpt}. Quem precisa: genitivo.` };
          }
          // Toinen verbi: infinitiivi; väärät = saman verbin persoonamuoto tai kieltomuoto (yksi ero: pääte).
          const P2 = S.paradigma(v);
          const muodot2 = [P2['prees.1s'], P2['prees.3s'], P2.kielto].filter(x => x && pieni(x) !== pieni(v));
          const miksi = {};
          for (const x of muodot2) miksi[pieni(x)] = x === P2.kielto ? `${x} é a ${KIELTOMUOTO} (depois de en, ei…); depois de täytyy, o infinitivo: ${v}`
            : `${x} tem terminação de pessoa; depois de täytyy o verbo fica no infinitivo: ${v}`;
          return { kysymys: `“${pt} ${vpt}.” → ${isolla(gen)} täytyy ___.`, kieli: 'fi-FI', puhu: `${isolla(gen)} täytyy ${v}.`, oikea: v,
            vaihtoehdot: vaihtoehdot(v, muodot2), miksi, solu: `${v} · infinitivo (forma do dicionário)`,
            selitys: `${isolla(gen)} täytyy ${v}. Depois de täytyy, o verbo fica na forma do dicionário.` };
        }
      };
      // Henkilöt: -lle (para quem), -lta (de quem, perguntar a), -lla (com quem). Väärät = saman henkilön muut sijat.
      const henkilot = {
        id: 't10-henkilot', oppitunti: 't10', luokka: 'nomes', ryhma: 'Pessoas: -lle, -lta, -lla', rekisteri: 'kirja', otsikko: 'Para quem, de quem, com quem?', kirjoitus: true,
        kuvaus: 'Com pessoas, sempre os casos de fora: Anna passi Jaylle! (para) · Minulla on viesti äidiltä. (de) · Passit ovat Maialla. (com) · Kysy Jayltä! (perguntar a)',
        saanto: 'para quem? -lle · de quem, vindo de quem? -lta/-ltä · com quem, quem tem? -lla/-llä. Perguntar a alguém: kysyä + -lta.',
        tee() {
          const IHMISET = [['Jay', 'o', 'Jay'], ['Maia', 'a', 'Maia'], ['Purjo', 'a', 'Purjo'], ['Hiisi', 'o', 'Hiisi'], ['Marta', 'a', 'Marta'],
            ['äiti', 'a', 'mãe'], ['isä', 'o', 'pai'], ['virkailija', 'a', 'atendente']].filter(([x]) => S.hae(x));
          const de = a => (a === 'o' ? 'do' : 'da'), ao = a => (a === 'o' ? 'ao' : 'à');
          const MALLIT = [
            ['all', 'Anna passi ___!', (a, n) => `Dê o passaporte para ${a} ${n}!`],
            ['all', 'Soita ___!', (a, n) => `Ligue para ${a} ${n}!`],
            ['all', 'Kakku on ___.', (a, n) => `O bolo é para ${a} ${n}.`],
            ['abl', 'Minulla on viesti ___.', (a, n) => `Eu tenho uma mensagem ${de(a)} ${n}.`],
            ['abl', 'Kysy ___!', (a, n) => `Pergunte ${ao(a)} ${n}!`],
            ['abl', 'Tämä kakku on ___.', (a, n) => `Este bolo vem ${de(a)} ${n}.`],
            ['ade', 'Passit ovat ___.', (a, n) => `Os passaportes estão com ${a} ${n}.`],
            ['ade', '___ on kakku.', (a, n) => `${isolla(a)} ${n} tem um bolo.`]
          ];
          const [id, art, nimi] = arpa(IHMISET);
          const [sija, lause, ptf] = arpa(MALLIT);
          const p = S.paradigma(id);
          const oikea = p[sija];
          if (!oikea) return null;
          const SELITE = { all: `-lle = para ${art} ${nimi}`, abl: `-lta/-ltä = ${de(art)} ${nimi}, vindo ${de(art)} ${nimi}`, ade: `-lla/-llä = com ${art} ${nimi}, ${art} ${nimi} tem` };
          const muut = ['all', 'abl', 'ade'].filter(x => x !== sija && p[x]);
          const miksi = {};
          for (const x of muut) miksi[pieni(p[x])] = `${p[x]}: ${SELITE[x]}`;
          // Brasilialaisen virhe: para → -Vn (sisään), de → -sta (sisältä). Henkilö ei ole suljettu paikka.
          const lisa = sija === 'all' ? 'ill' : sija === 'abl' ? 'ela' : null;
          if (lisa && p[lisa] && pieni(p[lisa]) !== pieni(oikea)) {
            muut.push(lisa);
            miksi[pieni(p[lisa])] = `${p[lisa]} = ${lisa === 'ill' ? 'para dentro de' : 'de dentro de, sobre'}: pessoa não é lugar fechado; use ${sija === 'all' ? '-lle' : '-lta/-ltä'}`;
          }
          const pt = ptf(art, nimi);
          const valmis = lause.replace('___', oikea);
          return { kysymys: `${lause} (${pt})`, kieli: 'fi-FI', puhu: lause.startsWith('___') ? isolla(valmis) : valmis, oikea, avain: sija + id + lause,
            vaihtoehdot: vaihtoehdot(oikea, muut.map(x => p[x])), miksi, solu: `${id} · ${soluNimi(sija, S.harmonia(id))}: ${oikea}`,
            selitys: `${lause.startsWith('___') ? isolla(valmis) : valmis} = ${pt} (${SELITE[sija]}).` };
        }
      };
      // Situações: lähtöselvitys (tilannePaketti on funktion määrittely, joten se on käytettävissä jo tässä; sen tee()
      // käyttää myöhemmin määriteltyjä vakioita vasta ajon aikana). Oppitunti t10, jotta tilanne kuuluu oppitunnin Treeniin.
      const lahtoselvitys = Object.assign(tilannePaketti({ id: 'lahtoselvitys', nimi: 'No check-in do aeroporto', myyja: 'nainen5',
        kuvaus: 'Passaporte, destino, mala, janela ou corredor… e de repente o voo está atrasado.',
        askeleet: [
          { myyja: 'Huomenta! Passi, kiitos.', pt: 'Bom dia! O passaporte, por favor.', tilanteet: [{ pt: 'Você entrega o passaporte.', v: 'Tässä.' }] },
          { myyja: 'Mihin te lennätte?', pt: 'Para onde vocês voam?', tilanteet: [{ pt: 'Vocês vão para Lisboa.', v: 'Lissaboniin.' }, { pt: 'Vocês vão para Londres.', v: 'Lontooseen.' }] },
          { myyja: 'Kuinka monta laukkua?', pt: 'Quantas malas vão despachar?', tilanteet: [{ pt: 'Vocês despacham uma mala.', v: 'Yksi.' }, { pt: 'Vocês despacham duas malas.', v: 'Kaksi.' }] },
          { myyja: 'Ikkunapaikka vai käytäväpaikka?', pt: 'Janela ou corredor?', tilanteet: [{ pt: 'Você quer ver a paisagem.', v: 'Ikkunapaikka, kiitos.' }, { pt: 'Você levanta muito durante o voo.', v: 'Käytäväpaikka, kiitos.' }] },
          { myyja: 'Hyvää matkaa!', pt: 'Boa viagem!', tilanteet: [{ pt: 'A atendente deseja boa viagem.', v: 'Kiitos!' }] },
          { myyja: 'Lento on myöhässä. Uusi lähtöaika on puoli yhdeksän.', pt: 'O voo está atrasado. O novo horário é 8h30.', yllatys: true,
            tilanteet: [{ pt: 'Tudo bem, você espera.', v: 'Selvä, odotan.' }] }
        ] }), { oppitunti: 't10' });
      return [...kello, taytyy, henkilot, lahtoselvitys];
    })(),
    // ==== k02: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    // ==== t11: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    // --- t11 (Mercado Central): komparatiivi -mpi ja kuin, superlatiivi -in, monikon partitiivi, kuuntele vertailu.
    //     Muodot leksikosta (Sanasto.paradigma: komp ja sup = tietueen vert-kenttä; part, mon.nom, mon.part = mpart); väärä
    //     vaihtoehto = saman sanan toinen muoto (vertailuaste tai luku/sija), KAYTANNOT H1. Hinnat = Moaran vaaka (oppitunti 11 A). ---
    ...(() => {
      const isolla = t => t.charAt(0).toUpperCase() + t.slice(1);
      // [adjektiivi, mais …, o mais …]: vain adjektiivit, joilla on vertailumuodot leksikossa.
      const ADJ = [['halpa', 'mais barato', 'o mais barato'], ['kallis', 'mais caro', 'o mais caro'], ['iso', 'maior', 'o maior'],
        ['pieni', 'menor', 'o menor'], ['hyvä', 'melhor', 'o melhor'], ['huono', 'pior', 'o pior'], ['vanha', 'mais velho', 'o mais velho'],
        ['uusi', 'mais novo', 'o mais novo'], ['kaunis', 'mais bonito', 'o mais bonito'], ['kylmä', 'mais frio', 'o mais frio'],
        ['kuuma', 'mais quente', 'o mais quente'], ['tuore', 'mais fresco', 'o mais fresco'], ['tulinen', 'mais ardido', 'o mais ardido'],
        ['herkullinen', 'mais gostoso', 'o mais gostoso']].filter(([a]) => { const r = S.hae(a); return r && Array.isArray(r.vert); });
      const adj = a => ADJ.find(x => x[0] === a);
      // Muodostus sanoin (selitykseen): genetiivi − n + mpi; kaksitavuinen -a/-ä → e; hyvä epäsäännöllinen.
      const muodostus = a => {
        const p = S.paradigma(a);
        if (a === 'hyvä') return 'hyvä → parempi → paras é irregular';
        const runko = (p.gen || '').replace(/n$/, '');
        return p.komp === runko + 'mpi' ? `genitivo ${p.gen} sem o -n + -mpi` : `genitivo ${p.gen} sem o -n; o a/ä final vira e: ${p.komp}`;
      };
      // Lauseet, joiden väite pitää paikkansa: [A, B, adjektiivi] → ”A on <komp> kuin B.”
      const KEHYKSET = [['juusto', 'kahvi', 'kallis'], ['banaani', 'ananas', 'halpa'], ['Belo Horizonte', 'Helsinki', 'iso'],
        ['Suomi', 'Brasilia', 'kylmä'], ['Brasilia', 'Suomi', 'kuuma'], ['pippuri', 'tomaatti', 'tulinen'], ['tomaatti', 'ananas', 'pieni'],
        ['Purjo', 'Jay', 'vanha'], ['ananas', 'juusto', 'halpa'], ['mango', 'banaani', 'kallis']]
        .filter(([x, y, a]) => S.hae(x) && S.hae(y) && adj(a));
      const komparatiivi = {
        id: 't11-komparatiivi', oppitunti: 't11', luokka: 'nomes', ryhma: 'Comparar: -mpi, -in', rekisteri: 'kirja', otsikko: 'Mais barato: o comparativo -mpi', kirjoitus: true,
        kuvaus: 'halpa → halvempi, kallis → kalliimpi, iso → isompi, hyvä → parempi. Mais … que = comparativo + kuin: Juusto on kalliimpi kuin kahvi.',
        saanto: 'comparativo = genitivo sem o -n + -mpi (ison → isompi); duas sílabas em -a/-ä: a → e (halvan → halvempi); hyvä → parempi. “do que” = kuin.',
        tee() {
          const kehys = Math.random() < 0.5 && KEHYKSET.length ? arpa(KEHYKSET) : null;
          const [a, ptK, ptS] = kehys ? adj(kehys[2]) : arpa(ADJ);
          const p = S.paradigma(a);
          const komp = p.komp, sup = p.sup;
          if (!komp || !sup) return null;
          const miksi = {
            [pieni(sup)]: `${sup} é o superlativo (${ptS}); “${ptK} … que” é o comparativo: ${komp}`,
            [pieni(a)]: `${a} é a forma básica; o comparativo (${ptK}) termina em -mpi: ${komp}`
          };
          const harhat = [sup, a];
          if (p.part && pieni(p.part) !== pieni(komp)) { miksi[pieni(p.part)] = `${p.part} é o partitivo de ${a}; o comparativo é ${komp}`; harhat.push(p.part); }
          if (kehys) {
            const [x, y] = kehys;
            const lause = `${isolla(x)} on ${komp} kuin ${y}.`;
            return { kysymys: `${isolla(x)} on ___ kuin ${y}. (${ptK})`, kieli: 'fi-FI', puhu: lause, oikea: komp, avain: lause,
              vaihtoehdot: vaihtoehdot(komp, harhat), miksi, solu: `${a} · ${soluNimi('komp')}: ${komp}`,
              selitys: `${lause} ${komp} = ${ptK}: ${muodostus(a)}.` };
          }
          return { kysymys: `${a} → ${ptK}?`, kieli: 'fi-FI', puhu: komp, oikea: komp,
            vaihtoehdot: vaihtoehdot(komp, harhat), miksi, solu: `${a} · ${soluNimi('komp')}: ${komp}`,
            selitys: `${a} → ${komp} (${ptK}): ${muodostus(a)}.` };
        }
      };
      // Superlatiivi: [lause ___-aukolla, adjektiivi, portugaliksi]; väitteet pitävät paikkansa (hinnat: Moaran vaaka).
      const SUP_LAUSEET = [['Banaani on kaikkein ___.', 'halpa', 'A banana é a mais barata de todas.'],
        ['Juusto on kaikkein ___.', 'kallis', 'O queijo é o mais caro de todos.'],
        ['Tämä on maailman ___ ruoka.', 'hyvä', 'Esta é a melhor comida do mundo.'],
        ['Pippuri on kaikkein ___.', 'tulinen', 'A pimenta é a mais ardida de todas.'],
        ['Brasilian banaani on maailman ___.', 'hyvä', 'A banana do Brasil é a melhor do mundo.'],
        ['Ananas on kaikkein ___.', 'iso', 'O abacaxi é o maior de todos.']].filter(([, a]) => adj(a));
      const superlatiivi = {
        id: 't11-superlatiivi', oppitunti: 't11', luokka: 'nomes', ryhma: 'Comparar: -mpi, -in', rekisteri: 'kirja', otsikko: 'O mais barato: o superlativo -in', kirjoitus: true,
        kuvaus: 'halpa → halvin, kallis → kallein, iso → isoin, hyvä → paras. “De todos” = kaikkein; “do mundo” = maailman.',
        saanto: 'superlativo = radical + -in (halvin, kallein, isoin, uusin); hyvä → parempi → paras. kaikkein = de todos; maailman paras = o melhor do mundo.',
        tee() {
          const kehys = Math.random() < 0.5 && SUP_LAUSEET.length ? arpa(SUP_LAUSEET) : null;
          const [a, ptK, ptS] = kehys ? adj(kehys[1]) : arpa(ADJ);
          const p = S.paradigma(a);
          const komp = p.komp, sup = p.sup;
          if (!komp || !sup) return null;
          const miksi = {
            [pieni(komp)]: `${komp} é o comparativo (${ptK}, com kuin); “${ptS}” é o superlativo: ${sup}`,
            [pieni(a)]: `${a} é a forma básica; “${ptS}” termina em -in: ${sup}`
          };
          if (kehys) {
            const [lause, , pt] = kehys;
            const valmis = lause.replace('___', sup);
            return { kysymys: `${lause} (${ptS})`, kieli: 'fi-FI', puhu: valmis, oikea: sup, avain: lause,
              vaihtoehdot: vaihtoehdot(sup, [komp, a]), miksi, solu: `${a} · ${soluNimi('sup')}: ${sup}`,
              selitys: `${valmis} = ${pt}` };
          }
          return { kysymys: `${a} → ${ptS}?`, kieli: 'fi-FI', puhu: sup, oikea: sup,
            vaihtoehdot: vaihtoehdot(sup, [komp, a]), miksi, solu: `${a} · ${soluNimi('sup')}: ${sup}`,
            selitys: `${a} → ${komp} → ${sup} (${ptS}).` };
        }
      };
      // Monikon partitiivi: [sana, portugaliksi monikossa]; väärät = saman sanan yksikön partitiivi ja monikon -t.
      const MONI = [['banaani', 'bananas'], ['juusto', 'queijos'], ['omena', 'maçãs'], ['kuva', 'fotos'], ['makkara', 'linguiças'],
        ['ananas', 'abacaxis'], ['mango', 'mangas'], ['hedelmä', 'frutas'], ['kukka', 'flores'], ['kirja', 'livros'],
        ['tomaatti', 'tomates'], ['peruna', 'batatas'], ['kivi', 'pedras'], ['taulu', 'quadros']]
        .filter(([x]) => { const r = S.hae(x); return r && S.paradigma(x)['mon.part'] && S.paradigma(x)['mon.nom'] && S.paradigma(x).part; });
      const MONI_LAUSEET = [['Haluaisin ___, kiitos.', 'Eu queria {pt}, por favor.'], ['Purjolla on paljon ___.', 'A Purjo tem um monte de {pt}.'],
        ['Ostan ___ torilta.', 'Compro {pt} na feira.'], ['Torilla on ___.', 'Na feira há {pt}.']];
      const monikonPartitiivi = {
        id: 't11-monikon-partitiivi', oppitunti: 't11', luokka: 'nomes', ryhma: 'Plural', rekisteri: 'kirja', otsikko: 'Várias coisas: o partitivo plural', kirjoitus: true,
        kuvaus: 'Haluaisin banaaneja. Purjolla on paljon kuvia. O partitivo plural termina em -ja/-jä, -ia/-iä ou -ita/-itä. Depois de número, o singular: kaksi banaania.',
        saanto: 'várias coisas que se contam, sem número = partitivo plural (-ja/-jä, -ia/-iä, -ita/-itä); depois de número = partitivo singular (kaksi banaania); “as …, todas” = plural -t.',
        tee() {
          const [s, pt] = arpa(MONI);
          const p = S.paradigma(s);
          const mpart = p['mon.part'], part = p.part, mon = p['mon.nom'];
          if (Math.random() < 0.25) {
            // Luvun jälkeen yksikön partitiivi; väärät: monikon partitiivi ja monikon -t (yksi ero: luku tai sija).
            const lause = `kaksi ${part}`;
            const miksi = {
              [pieni(mpart)]: `${mpart} é o partitivo plural; depois de número vem sempre o partitivo singular: kaksi ${part}`,
              [pieni(mon)]: `${mon} é o plural -t (as ${pt}, todas); depois de número: kaksi ${part}`
            };
            return { kysymys: `Kaksi ___ (dois/duas: ${pt})`, kieli: 'fi-FI', puhu: `Kaksi ${part}.`, oikea: part, avain: 'luku' + s,
              vaihtoehdot: vaihtoehdot(part, [mpart, mon]), miksi, solu: `${s} · ${soluNimi('part')}: ${part}`,
              selitys: `${isolla(lause)}: depois de número, partitivo singular, nunca plural.` };
          }
          const [lause, ptl] = arpa(MONI_LAUSEET);
          const valmis = lause.replace('___', mpart);
          const ptValmis = ptl.replace('{pt}', pt);
          const miksi = {
            [pieni(part)]: `${part} é o partitivo singular (um pouco de uma coisa só, ou depois de número); várias ${pt} = ${mpart}`,
            [pieni(mon)]: `${mon} é o plural -t (as ${pt}: todas, certas); uma quantidade qualquer de ${pt} = ${mpart}`
          };
          return { kysymys: `${lause} (${ptValmis})`, kieli: 'fi-FI', puhu: valmis, oikea: mpart, avain: lause + s,
            vaihtoehdot: vaihtoehdot(mpart, [part, mon]), miksi, solu: `${s} · ${soluNimi('mon.part')}: ${mpart}`,
            selitys: `${valmis} = ${ptValmis} (${s} → ${mpart}).` };
        }
      };
      // Kuuntele vertailu (TYONKULKU 14: äänitteessä on koko lause; vastaus vaatii, että kuulee -mpi-sanan ja kuin-järjestyksen).
      const HINNAT = { juusto: 60, kahvi: 30, makkara: 30, ananas: 12, mango: 8, banaani: 6, tomaatti: 5 };
      const kuin = {
        id: 't11-kuin', oppitunti: 't11', luokka: 'ouvir', ryhma: 'Ouvir a comparação', rekisteri: 'kirja', kuuntelu: true, otsikko: 'Ouça: qual é mais caro?',
        kuvaus: 'Ouça a comparação da Maia (os preços da balança da Moara) e diga qual é mais caro ou mais barato: Juusto on kalliimpi kuin kahvi.',
        saanto: 'A on kalliimpi kuin B = A é mais caro que B; A on halvempi kuin B = A é mais barato que B. kuin = do que.',
        tee() {
          const T2 = Object.keys(HINNAT).filter(x => S.hae(x));
          const a = arpa(T2);
          const b = arpa(T2.filter(x => x !== a && HINNAT[x] !== HINNAT[a]));
          if (!b) return null;
          const kallis = HINNAT[a] > HINNAT[b] ? a : b, halpa = kallis === a ? b : a;
          // Lause: ensimmäinen sana on subjekti; komparatiivi valitaan niin, että väite pitää paikkansa.
          const [x, y] = Math.random() < 0.5 ? [a, b] : [b, a];
          const kp = S.paradigma('kallis').komp, hp = S.paradigma('halpa').komp;
          const lause = `${isolla(x)} on ${x === kallis ? kp : hp} kuin ${y}.`;
          const kysyKallis = Math.random() < 0.5;
          const oikea = kysyKallis ? kallis : halpa;
          const vaara = oikea === x ? y : x;
          const miksi = { [pieni(vaara)]: `${lause} = ${x} é ${x === kallis ? 'mais caro' : 'mais barato'} que ${y}: então ${kysyKallis ? 'o mais caro' : 'o mais barato'} é ${oikea}` };
          return { kysymys: kysyKallis ? 'Qual é mais caro?' : 'Qual é mais barato?', kieli: 'pt-BR', puhu: lause, kuuntele: lause, oikea,
            avain: lause + (kysyKallis ? 'k' : 'h'), vaihtoehdot: sekoita([x, y]), miksi, eiKirjoitus: true,
            selitys: `${lause} = ${x} é ${x === kallis ? 'mais caro' : 'mais barato'} que ${y}.` };
        }
      };
      return [komparatiivi, superlatiivi, monikonPartitiivi, kuin];
    })(),
    // ==== t12: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    // --- t12 (Savassi, Feira Hippie): objektin sija (koko: -n / -t; osa, jatkuva, kielto ja luku: partitiivi), adjektiivin
    //     kongruenssi (sinisessä paidassa), vaatteet ja Situações: vaatekauppa. Muodot leksikosta (Sanasto.paradigma: nom,
    //     gen, part, ines, mon.nom, mon.part); väärä vaihtoehto = saman sanan tai ilmauksen toinen muoto (H1). Vihje
    //     portugaliksi kiinnittää merkityksen (inteiro, todos, não, em geral), ei muotoa. ---
    ...(() => {
      const isolla = t => t.charAt(0).toUpperCase() + t.slice(1);
      const art = (g, mon) => (g === 'f' ? (mon ? 'as' : 'a') : (mon ? 'os' : 'o'));
      const um = g => (g === 'f' ? 'uma' : 'um');
      const dois = g => (g === 'f' ? 'duas' : 'dois');
      const inteiro = g => (g === 'f' ? 'inteira' : 'inteiro');
      const todos = g => (g === 'f' ? 'todas' : 'todos');
      // [tunniste, portugaliksi yksikkö, monikko, suku]
      const ESINEET = [['paita', 'camisa', 'camisas', 'f'], ['takki', 'casaco', 'casacos', 'm'], ['lippis', 'boné', 'bonés', 'm'],
        ['mekko', 'vestido', 'vestidos', 'm'], ['hattu', 'chapéu', 'chapéus', 'm'], ['kuppi', 'xícara', 'xícaras', 'f'],
        ['kulho', 'tigela', 'tigelas', 'f'], ['maljakko', 'vaso', 'vasos', 'm'], ['taulu', 'quadro', 'quadros', 'm'], ['kirja', 'livro', 'livros', 'm']];
      const esineet = () => ESINEET.filter(([s]) => S.hae(s));
      const SELITE = { nom: 'forma básica (sujeito, ou depois de uma ordem)', gen: '-n: uma coisa inteira, a ação termina',
        part: 'partitivo: parte, negação, número ou ação em andamento', 'mon.nom': 'plural -t: várias coisas inteiras, todas aquelas',
        'mon.part': 'partitivo plural: algumas, em geral' };
      // [lause, oikea solu, väärät solut, vihje(esine), sääntö]
      const MALLIT = [
        ['Ostan ___.', 'gen', ['part', 'nom'], e => `compro ${art(e[3])} ${e[1]} ${inteiro(e[3])}`, 'uma coisa inteira: -n'],
        ['Otan ___.', 'mon.nom', ['mon.part', 'gen'], e => `levo ${art(e[3], true)} ${e[2]}, ${todos(e[3])}`, 'várias coisas inteiras, todas aquelas: plural -t'],
        ['En osta ___.', 'part', ['gen', 'nom'], e => `não compro ${art(e[3])} ${e[1]}`, 'negação: sempre partitivo'],
        ['Ostan kaksi ___.', 'part', ['gen', 'mon.nom'], e => `compro ${dois(e[3])} ${e[2]}`, 'depois de 2, 3, 4…: partitivo singular'],
        ['Etsin ___.', 'part', ['gen', 'nom'], e => `procuro ${um(e[3])} ${e[1]}`, 'etsiä (procurar) quase sempre pede partitivo'],
        ['Katson ___.', 'part', ['gen', 'nom'], e => `olho ${art(e[3])} ${e[1]}`, 'katsoa (olhar) quase sempre pede partitivo'],
        ['Myymme ___.', 'mon.part', ['mon.nom', 'part'], e => `vendemos ${e[2]} (em geral)`, 'em geral, uma quantidade: partitivo plural']
      ];
      const objekti = {
        id: 't12-objekti', oppitunti: 't12', luokka: 'nomes', ryhma: 'Objeto: inteiro ou parte', rekisteri: 'kirja', otsikko: 'O objeto: inteiro ou parte?', kirjoitus: true,
        kuvaus: 'Ostan paidan (a camisa inteira) · Otan paidat (todas) · En osta paitaa (negação) · Etsin paitaa (procuro) · Myymme paitoja (em geral): o sentido decide a forma do objeto.',
        saanto: 'negação, parte, quantidade, ação em andamento, katsoa e etsiä: partitivo; senão, a coisa inteira: -n (uma) ou -t (várias); depois de número: partitivo singular.',
        tee() {
          const e = arpa(esineet());
          if (!e) return null;
          const [lause, solu, muutSolut, vihje, saanto] = arpa(MALLIT);
          const s = e[0], p = S.paradigma(s), h = S.harmonia(s);
          const oikea = p[solu];
          if (!oikea) return null;
          const muut = muutSolut.filter(x => p[x] && pieni(p[x]) !== pieni(oikea));
          const miksi = {};
          for (const x of muut) miksi[pieni(p[x])] = `${p[x]} = ${SELITE[x]}; aqui: ${saanto}`;
          const valmis = lause.replace('___', oikea);
          const pt = vihje(e);
          return { kysymys: `${lause} (${s}: ${pt})`, kieli: 'fi-FI', puhu: valmis, oikea, avain: solu + '|' + s + '|' + lause,
            vaihtoehdot: vaihtoehdot(oikea, muut.map(x => p[x])), miksi,
            solu: `${s} · ${solu === 'nom' ? 'forma básica' : soluNimi(solu, h)}: ${oikea}`, selitys: `${valmis} = ${isolla(pt)}. Regra: ${saanto}.` };
        }
      };
      // Kongruenssi: adjektiivi samaan sijaan kuin substantiivi. Väärät vaihtoehdot eroavat vain adjektiivin muodosta.
      const VARIT = ['sininen', 'punainen', 'keltainen', 'valkoinen', 'musta', 'vihreä', 'uusi', 'pieni', 'kaunis', 'kallis'];
      const KOOT = ['iso', 'pieni', 'uusi', 'vanha', 'kaunis', 'halpa'];
      const PAIKAT = ['kauppa', 'kahvila', 'talo', 'asunto', 'ravintola'];
      const VAATTEET = ['paita', 'takki', 'lippis', 'mekko', 'hattu'];
      const OBJEKTIT = ['paita', 'takki', 'lippis', 'kuppi', 'kulho', 'maljakko', 'taulu', 'kirja'];
      // [lause, solu, adjektiivit, substantiivit, vihje]
      const K_MALLIT = [
        ['Jay on ___.', 'ines', KOOT, PAIKAT, 'onde? dentro'],
        ['Jay tulee ulos ___.', 'ines', VARIT, VAATTEET, 'sair (ou estar) de camisa azul: a roupa vai com -ssa, “dentro” dela'],
        ['Ostan ___.', 'gen', VARIT, OBJEKTIT, 'compro, inteiro'],
        ['En osta ___.', 'part', VARIT, OBJEKTIT, 'não compro'],
        ['Ostan kaksi ___.', 'part', VARIT, OBJEKTIT, 'compro dois, duas'],
        ['Otan ___.', 'mon.nom', VARIT, OBJEKTIT, 'levo todos, todas']
      ];
      const kongruenssi = {
        id: 't12-kongruenssi', oppitunti: 't12', luokka: 'nomes', ryhma: 'Adjetivo + substantivo', rekisteri: 'kirja', otsikko: 'O adjetivo junto: sinisessä paidassa', kirjoitus: true,
        kuvaus: 'O adjetivo recebe o mesmo caso do substantivo: iso kauppa → isossa kaupassa, sininen paita → sinisen paidan, sinistä paitaa, siniset paidat.',
        saanto: 'o adjetivo vem antes e vai no mesmo caso e número do substantivo: isossa kaupassa, sinisen paidan, kaksi sinistä paitaa, siniset paidat.',
        tee() {
          const [lause, solu, adjt, subt, vihje] = arpa(K_MALLIT);
          const a = arpa(adjt.filter(x => S.hae(x))), n = arpa(subt.filter(x => S.hae(x)));
          if (!a || !n) return null;
          const pa = S.paradigma(a), pn = S.paradigma(n);
          if (!pa[solu] || !pn[solu]) return null;
          const oikea = `${pa[solu]} ${pn[solu]}`;
          const toinen = solu === 'gen' ? 'part' : 'gen';
          const ha = S.harmonia(a);
          const vaarat = [`${a} ${pn[solu]}`, pa[toinen] ? `${pa[toinen]} ${pn[solu]}` : null].filter(x => x && pieni(x) !== pieni(oikea));
          const miksi = {
            [pieni(`${a} ${pn[solu]}`)]: `${a} é a forma básica do adjetivo; ele também muda: ${pa[solu]}`,
            [pieni(`${pa[toinen]} ${pn[solu]}`)]: `${pa[toinen]} = ${soluNimi(toinen, ha)}; o adjetivo vai no mesmo caso do substantivo: ${pa[solu]}`
          };
          const valmis = lause.replace('___', oikea);
          return { kysymys: `${lause} (${a} ${n} · ${vihje})`, kieli: 'fi-FI', puhu: valmis, oikea, avain: solu + '|' + a + '|' + n,
            vaihtoehdot: vaihtoehdot(oikea, vaarat), miksi, solu: `${a} · ${soluNimi(solu, ha)}: ${pa[solu]}`,
            selitys: `${valmis} O adjetivo e o substantivo têm a mesma terminação.` };
        }
      };
      // Vaatteet: sana portugalista suomeksi; aina monikossa käytetyt (housut, shortsit, aurinkolasit) monikkona.
      const VAATESANAT = [['paita', 'camisa, camiseta'], ['housu', 'calça', 'housut'], ['shortsi', 'shorts, bermuda', 'shortsit'], ['mekko', 'vestido'],
        ['hame', 'saia'], ['takki', 'casaco'], ['lippis', 'boné'], ['hattu', 'chapéu'], ['kenkä', 'sapato'], ['sandaali', 'sandália'],
        ['sukka', 'meia'], ['huivi', 'cachecol'], ['uimapuku', 'maiô'], ['aurinkolasi', 'óculos de sol', 'aurinkolasit'], ['vaate', 'roupa, peça de roupa'],
        ['sovituskoppi', 'provador'], ['peili', 'espelho']];
      // Vihje ”esta …”: kokonainen, määrätty esine (Ostan housut); ilman sitä myös ”Ostan housuja” olisi oikein.
      const MONIKOSSA = [['housu', 'esta calça', 'housut'], ['shortsi', 'este short', 'shortsit'], ['aurinkolasi', 'estes óculos de sol', 'aurinkolasit']];
      const vaatteet = {
        id: 't12-vaatteet', oppitunti: 't12', luokka: 'palavras', ryhma: 'Roupas', rekisteri: 'kirja', otsikko: 'Roupas: paita, housut, shortsit…', kirjoitus: true,
        kuvaus: 'paita, housut, shortsit, mekko, hame, lippis, hattu, takki… e as que são sempre plural: uma calça = housut.',
        saanto: 'housut (calça), shortsit (shorts) e aurinkolasit (óculos de sol) são sempre plural, mesmo uma peça só: Ostan housut.',
        tee() {
          const lista = VAATESANAT.filter(([s]) => S.hae(s));
          if (Math.random() < 0.25) {
            const m = arpa(MONIKOSSA.filter(([s]) => S.hae(s)));
            if (!m) return null;
            const p = S.paradigma(m[0]);
            const oikea = m[2];
            const vaarat = [p.gen, p['mon.part']].filter(x => x && pieni(x) !== pieni(oikea));
            const miksi = {};
            if (p.gen) miksi[pieni(p.gen)] = `${p.gen} seria uma peça no singular; ${m[2]} é sempre plural, também para ${m[1]}`;
            if (p['mon.part']) miksi[pieni(p['mon.part'])] = `${p['mon.part']} é o partitivo plural (algumas, em geral); comprar ${m[1]} = ${m[2]}`;
            return { kysymys: `Ostan ___. (compro ${m[1]})`, kieli: 'fi-FI', puhu: `Ostan ${oikea}.`, oikea, avain: 'mon|' + m[0],
              vaihtoehdot: vaihtoehdot(oikea, vaarat), miksi, selitys: `Ostan ${oikea}. = Compro ${m[1]}: ${oikea} é sempre plural.` };
          }
          const [s, pt, nayta] = arpa(lista);
          const oikea = nayta || s;
          const miksi = {};
          for (const [x, xpt, xn] of lista) if (x !== s) miksi[pieni(xn || x)] = `${xn || x} = ${xpt}`;
          return { kysymys: `“${pt}” em finlandês?`, kieli: 'pt-BR', puhu: oikea, oikea, avain: s,
            vaihtoehdot: vaihtoehdot(oikea, lista.map(x => x[2] || x[0])), miksi, selitys: `${oikea} = ${pt}.` };
        }
      };
      // Situações: vaatekauppa (sama tilannePaketti kuin t10:n lähtöselvitys; oppitunti t12).
      const vaatekauppa = Object.assign(tilannePaketti({ id: 'vaatekauppa', nimi: 'Na loja de roupas', myyja: 'mies7',
        kuvaus: 'Só olhando ou procurando uma camisa? Tamanho, provador, serve ou não serve, cartão… e o tamanho que acabou.',
        askeleet: [
          { myyja: 'Hei! Voinko auttaa?', pt: 'Oi! Posso ajudar?', tilanteet: [{ pt: 'Você só está olhando.', v: 'Katselen vain, kiitos.' }, { pt: 'Você procura uma camisa.', v: 'Etsin paitaa.' }] },
          { myyja: 'Mikä koko?', pt: 'Qual tamanho?', tilanteet: [{ pt: 'Você quer o tamanho grande.', v: 'Iso, kiitos.' }, { pt: 'Você quer o tamanho pequeno.', v: 'Pieni, kiitos.' }] },
          { myyja: 'Haluatko sovittaa?', pt: 'Quer experimentar?', tilanteet: [{ pt: 'Você quer experimentar.', v: 'Kyllä, kiitos.' }, { pt: 'Você não tem tempo.', v: 'Ei, kiitos.' }] },
          { myyja: 'Sopiiko?', pt: 'Serviu?', tilanteet: [{ pt: 'A camisa serve, e você vai levar.', v: 'Sopii. Otan sen.' }, { pt: 'A camisa ficou pequena.', v: 'Ei sovi. Se on liian pieni.' }] },
          { myyja: 'Kortilla vai käteisellä?', pt: 'No cartão ou em dinheiro?', tilanteet: [{ pt: 'Você paga com cartão.', v: 'Kortilla.' }, { pt: 'Você paga em dinheiro.', v: 'Käteisellä.' }] },
          { myyja: 'Kuitti?', pt: 'Quer o recibo?', tilanteet: [{ pt: 'Você não precisa do recibo.', v: 'Ei tarvitse, kiitos.' }, { pt: 'Você quer o recibo.', v: 'Kyllä, kiitos.' }] },
          { myyja: 'Iso koko loppui. Käykö pieni?', pt: 'O tamanho grande acabou. Pode ser o pequeno?', yllatys: true,
            tilanteet: [{ pt: 'O pequeno serve.', v: 'Käy, kiitos.' }, { pt: 'Você não quer o pequeno.', v: 'Ei, kiitos.' }] },
          { myyja: 'Kiitos, hei!', pt: 'Obrigado, tchau!', tilanteet: [{ pt: 'O vendedor se despede.', v: 'Hei hei!' }] }
        ] }), { oppitunti: 't12' });
      return [objekti, kongruenssi, vaatteet, vaatekauppa];
    })(),
    // ==== t13: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    /* --- t13 (perheen päivä): imperfekti persoonittain (t13-imperfekti), imperfektin vartalo verbeittäin (t13-vartalo),
       ajanilmaukset (t13-aika) ja kuuntelu preesens vai imperfekti (t13-kuuntele). Muodot taivutuskoneelta
       (Sanasto.paradigma: imperf.*), ei käsin. H1: väärä vaihtoehto = saman verbin toinen persoona imperfektissä tai sama
       persoona preesensissä (yksi ero: persoona tai aikamuoto); toisen verbin imperfekti tai perusmuoto (yksi ero: verbi);
       ajanilmaus, jossa yksi osa on toinen; sama lause toisessa aikamuodossa. Ei keksittyjä virhemuotoja (H2). --- */
    ...(function () {
      const IMPERF = ['puhua', 'nukkua', 'lukea', 'ostaa', 'antaa', 'ottaa', 'odottaa', 'kirjoittaa', 'soittaa', 'istua',
        'sanoa', 'kysyä', 'ajaa', 'jakaa', 'keittää', 'juoda', 'syödä', 'käydä', 'tehdä', 'nähdä', 'saada', 'olla', 'mennä',
        'tulla', 'kuunnella', 'jutella', 'kävellä', 'haluta', 'herätä', 'tavata', 'pelata', 'tarvita', 'valita', 'lähteä',
        'kertoa', 'katsoa', 'tuntea', 'opettaa', 'ymmärtää', 'tietää'];
      // Vain verbit, joiden imperfekti on paradigmassa (oppia puuttuu tahallaan: opin on sekä preesens että imperfekti).
      const verbit = () => IMPERF.filter(v => onVerbi(v) && S.paradigma(v)['imperf.1s'] && S.paradigma(v)['imperf.3s']);
      const imperf = v => { const p = S.paradigma(v); const f = {}; for (const k of PERS) f[k] = p['imperf.' + k]; return f; };
      // Heikko aste näkyy, kun minä-muodon vartalo eroaa hän-muodosta (nukui- × nukkui, annoi- × antoi).
      const heikko = f => pieni(f['1s'].slice(0, -1)) !== pieni(f['3s']);
      // Vartalon muutos portugaliksi hän-muodoista (selitysrivi; sama jako kuin oppitunnin taulukossa).
      function muutos(v) {
        const r = S.hae(v) || {}, t = (r.t || {}).tyyppi;
        const p = S.paradigma(v), nyt = p['prees.3s'] || '', i3 = p['imperf.3s'] || '';
        if (r.t && r.t.epas) return `${v} é irregular: aprenda hän ${i3} junto com o verbo.`;
        if (t === 2) return `tipo 2: a vogal longa ou o ditongo encurta antes do -i (hän ${nyt} → hän ${i3}).`;
        if (t === 3) return `tipo 3: o e do radical vira i (hän ${nyt} → hän ${i3}).`;
        if (t === 4) return `tipo 4: + si (hän ${nyt} → hän ${i3}).`;
        if (t === 5) return `tipo 5: -tsi (hän ${nyt} → hän ${i3}).`;
        if (/si$/.test(i3)) return `t vira s antes do -i (hän ${nyt} → hän ${i3}).`;
        if (/oi$/.test(i3) && /[aä][aä]$/.test(nyt)) return `o a vira oi (hän ${nyt} → hän ${i3}).`;
        if (/[aä][aä]$/.test(nyt)) return `o a cai antes do -i (hän ${nyt} → hän ${i3}).`;
        if (/ee$/.test(nyt)) return `o e cai antes do -i (hän ${nyt} → hän ${i3}).`;
        return `depois de o, u, y, ö, só + i (hän ${nyt} → hän ${i3}).`;
      }
      const AIKA = { 'eilen': 'ontem', 'tänään': 'hoje', 'huomenna': 'amanhã', 'aamulla': 'de manhã', 'iltapäivällä': 'à tarde',
        'illalla': 'à noite', 'yöllä': 'de madrugada', 'viime viikolla': 'na semana passada', 'viime vuonna': 'no ano passado',
        'kaksi päivää sitten': 'há dois dias', 'kolme päivää sitten': 'há três dias', 'eilen illalla': 'ontem à noite',
        'eilen aamulla': 'ontem de manhã', 'tänään aamulla': 'hoje de manhã', 'tänään illalla': 'hoje à noite',
        'huomenna aamulla': 'amanhã de manhã', 'huomenna illalla': 'amanhã à noite' };
      // [oikea, harhat]: harha vaihtaa yhden osan (päivä, vuorokaudenaika tai jakso).
      const AIKAKYSYMYKSET = [
        ['eilen', ['tänään', 'huomenna', 'viime viikolla']], ['tänään', ['eilen', 'huomenna', 'illalla']],
        ['huomenna', ['eilen', 'tänään', 'aamulla']], ['aamulla', ['illalla', 'iltapäivällä', 'yöllä']],
        ['iltapäivällä', ['aamulla', 'illalla', 'yöllä']], ['illalla', ['aamulla', 'iltapäivällä', 'yöllä']],
        ['yöllä', ['illalla', 'aamulla', 'iltapäivällä']], ['viime viikolla', ['viime vuonna', 'kaksi päivää sitten', 'eilen']],
        ['viime vuonna', ['viime viikolla', 'kaksi päivää sitten', 'eilen']],
        ['kaksi päivää sitten', ['kolme päivää sitten', 'viime viikolla', 'eilen']],
        ['kolme päivää sitten', ['kaksi päivää sitten', 'viime viikolla', 'eilen']],
        ['eilen illalla', ['eilen aamulla', 'tänään illalla', 'viime viikolla']],
        ['tänään aamulla', ['eilen aamulla', 'tänään illalla', 'huomenna aamulla']],
        ['eilen aamulla', ['tänään aamulla', 'eilen illalla', 'viime viikolla']],
        ['tänään illalla', ['eilen illalla', 'tänään aamulla', 'huomenna illalla']]
      ];
      // [preesens, imperfekti, portugaliksi nyt, portugaliksi ennen]: sama lause, vain verbin aikamuoto vaihtuu.
      const PARIT = [
        ['Maia puhuu suomea.', 'Maia puhui suomea.', 'a Maia fala finlandês', 'a Maia falou finlandês'],
        ['Jay tulee kotiin.', 'Jay tuli kotiin.', 'o Jay vem para casa', 'o Jay veio para casa'],
        ['Walker menee pilatekseen.', 'Walker meni pilatekseen.', 'o Walker vai para o pilates', 'o Walker foi para o pilates'],
        ['Anderson syö leipää.', 'Anderson söi leipää.', 'o Anderson come pão', 'o Anderson comeu pão'],
        ['Marta juo kahvia.', 'Marta joi kahvia.', 'a Marta bebe café', 'a Marta bebeu café'],
        ['Jay lukee kirjaa.', 'Jay luki kirjaa.', 'o Jay lê um livro', 'o Jay leu um livro'],
        ['Maia ostaa juustoa.', 'Maia osti juustoa.', 'a Maia compra queijo', 'a Maia comprou queijo'],
        ['Purjo soittaa Jaylle.', 'Purjo soitti Jaylle.', 'a Purjo liga para o Jay', 'a Purjo ligou para o Jay'],
        ['Hiisi ajaa nopeasti.', 'Hiisi ajoi nopeasti.', 'o Hiisi dirige rápido', 'o Hiisi dirigiu rápido'],
        ['Anderson jakaa postia.', 'Anderson jakoi postia.', 'o Anderson entrega a correspondência', 'o Anderson entregou a correspondência'],
        ['Walker on kotona.', 'Walker oli kotona.', 'o Walker está em casa', 'o Walker estava em casa'],
        ['Jay nukkuu hyvin.', 'Jay nukkui hyvin.', 'o Jay dorme bem', 'o Jay dormiu bem']
      ];
      return [
        {
          id: 't13-imperfekti', oppitunti: 't13', luokka: 'verbos', ryhma: 'Passado (imperfekti)', rekisteri: 'kirja', otsikko: 'O passado: heräsin, heräsit, heräsi…', kirjoitus: true,
          kuvaus: 'Ontem: a pessoa certa no passado. Eilen minä heräsin, sinä nukuit, hän nukkui. Atenção à consoante: fraca em eu, você, nós, vocês.',
          saanto: `passado = radical + -i- + terminação (-n, -t, –, -mme, -tte, -vat): heräsin, heräsit, hän heräsi. Tipo 1: ${VAIHTELU} como no presente: minä nukuin, mas hän nukkui.`,
          tee() {
            const v = arpa(verbit());
            const k = arpa(PERS);
            const f = imperf(v);
            const oikea = f[k];
            const nyt = S.paradigma(v)['prees.' + k];
            const muut = sekoita(PERS.filter(x => x !== k && f[x] && pieni(f[x]) !== pieni(oikea))).slice(0, 2).map(x => f[x]);
            const miksi = persoonaMiksi(f, k);
            if (nyt && pieni(nyt) !== pieni(oikea)) miksi[pieni(nyt)] = `${nyt} é o presente (${PT_PRON[k]}); eilen pede o passado: ${oikea}`;
            const lause = `Eilen ${P[k]} ${oikea}.`;
            const aste = heikko(f) ? ` ${VAIHTELU}: ${f['1s']}, ${f['2s']}, ${f['1p']}, ${f['2p']} com a fraca; ${f['3s']}, ${f['3p']} com a forte.` : '';
            return { kysymys: `Eilen ${P[k]} ___ (${v})`, kieli: 'fi-FI', puhu: lause, oikea, avain: v + ':' + k,
              vaihtoehdot: sekoita(yksilolliset([oikea, ...muut, nyt].filter(Boolean))), miksi,
              solu: `${v} · ${soluNimi('imperf.' + k)}`, selitys: `${lause} = ontem: ${PT_PRON[k]} + ${merkitys(v)}, no passado.${aste}` };
          }
        },
        {
          id: 't13-vartalo', oppitunti: 't13', luokka: 'verbos', ryhma: 'Passado (imperfekti)', rekisteri: 'kirja', otsikko: 'O passado de cada verbo: osti, antoi, luki, söi', kirjoitus: true,
          kuvaus: 'Do infinitivo para o passado de “ele” e de volta: ostaa → osti, antaa → antoi, lukea → luki, syödä → söi, haluta → halusi.',
          saanto: 'hän no passado: o, u, y, ö + i (puhui); e cai (luki); a cai ou vira oi (osti, antoi); t vira s (tiesi); tipo 2 encurta (söi, joi); tipo 3 e → i (tuli, oli); tipo 4 + si (halusi); tipo 5 -tsi (tarvitsi).',
          tee() {
            const vs = verbit();
            const v = arpa(vs);
            const i3 = S.paradigma(v)['imperf.3s'];
            const muut = sekoita(vs.filter(x => x !== v && pieni(S.paradigma(x)['imperf.3s']) !== pieni(i3)));
            // Lähimmät harhat ensin: sama alkukirjain (ostaa: otti, oli, odotti), sitten muut.
            const valitut = [...muut.filter(x => x[0] === v[0]), ...muut.filter(x => x[0] !== v[0])].slice(0, 3);
            if (Math.random() < 0.5) {
              const miksi = {};
              for (const x of valitut) { const m = S.paradigma(x)['imperf.3s']; miksi[pieni(m)] = `${m} é o passado de ${x} (${merkitys(x)})`; }
              return { kysymys: `${v} (${merkitys(v)}) → eilen hän ___`, kieli: 'fi-FI', puhu: `Eilen hän ${i3}.`, oikea: i3, avain: 'i:' + v,
                vaihtoehdot: sekoita([i3, ...valitut.map(x => S.paradigma(x)['imperf.3s'])]), miksi,
                solu: `${v} · ${soluNimi('imperf.3s')}`, selitys: `${v} → eilen hän ${i3}: ${muutos(v)}` };
            }
            const miksi = {};
            for (const x of valitut) miksi[pieni(x)] = `${x} (${merkitys(x)}) → hän ${S.paradigma(x)['imperf.3s']}`;
            return { kysymys: `Eilen hän ${i3}. → forma básica?`, kieli: 'fi-FI', puhu: `Eilen hän ${i3}.`, oikea: v, avain: 'p:' + v,
              vaihtoehdot: sekoita([v, ...valitut]), miksi, solu: `${v} · forma básica (infinitivo)`,
              selitys: `hän ${i3} = ${merkitys(v)} no passado → ${v}: ${muutos(v)}` };
          }
        },
        {
          id: 't13-aika', oppitunti: 't13', luokka: 'palavras', ryhma: 'Quando? Expressões de tempo', rekisteri: 'kirja', otsikko: 'Quando? eilen, viime viikolla…', kirjoitus: true,
          kuvaus: 'Ontem, de manhã, à noite, na semana passada, há dois dias: do português para o finlandês.',
          saanto: 'eilen = ontem, tänään = hoje, huomenna = amanhã; aamulla, iltapäivällä, illalla, yöllä = de manhã, à tarde, à noite, de madrugada; viime viikolla = na semana passada, viime vuonna = no ano passado; kaksi päivää sitten = há dois dias.',
          tee() {
            const [oikea, harhat] = arpa(AIKAKYSYMYKSET);
            const miksi = {};
            for (const h of harhat) miksi[pieni(h)] = `${h} = ${AIKA[h]}`;
            return { kysymys: `“${AIKA[oikea]}” em finlandês?`, kieli: 'pt-BR', puhu: oikea, oikea, avain: oikea,
              vaihtoehdot: sekoita([oikea, ...harhat]), miksi, selitys: `${oikea} = ${AIKA[oikea]}.` };
          }
        },
        {
          // TYONKULKU 14: äänitteessä ei ole ajan sanaa; vain verbin aikamuoto erottaa lauseet.
          id: 't13-kuuntele', oppitunti: 't13', luokka: 'ouvir', ryhma: 'Presente ou passado', rekisteri: 'kirja', kuuntelu: true, otsikko: 'Ouça: presente ou passado?',
          kuvaus: 'A mesma frase no presente e no passado: Jay tulee kotiin × Jay tuli kotiin. Ouça o fim do verbo e escolha.',
          saanto: 'presente: muitas vezes vogal longa no fim (puhuu, tulee, menee); passado: -i curto (puhui, tuli, meni); tipo 2 troca as vogais (syö → söi, juo → joi).',
          tee() {
            const [nyt, enn, ptNyt, ptEnn] = arpa(PARIT);
            const menneessa = Math.random() < 0.5;
            const oikea = menneessa ? enn : nyt, vaara = menneessa ? nyt : enn;
            const miksi = { [pieni(vaara)]: menneessa ? `${vaara} = ${ptNyt} (presente); a frase que tocou é o passado: ${oikea}`
              : `${vaara} = ${ptEnn} (passado); a frase que tocou é o presente: ${oikea}` };
            return { kysymys: 'Ouça: presente ou passado?', kieli: 'pt-BR', puhu: oikea, kuuntele: oikea, oikea, avain: oikea,
              vaihtoehdot: [nyt, enn], miksi, eiKirjoitus: true,
              selitys: `${oikea} = ${menneessa ? ptEnn : ptNyt} (${menneessa ? 'passado' : 'presente'}).` };
          }
        }
      ];
    })(),
    // ==== t14: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    // --- t14 (Jay eksyy, Praça da Liberdade): käsky te (-kaa/-kää), kielteinen käsky te (älkää + -ko/-kö), postpositio
    //     genetiivin kanssa ja suunnat. Muodot leksikosta (Sanasto.paradigma: imper.2p, imper.neg.2p, imper.2s, kielto,
    //     prees.2s/2p, gen); väärä vaihtoehto = saman sanan toinen muoto tai saman joukon toinen sana (H1). Kuuntelutehtävän
    //     vaihtoehdot ovat nuolia (TYONKULKU 14: äänitteessä vain käsky). ---
    ...(() => {
      const isolla = t => t.charAt(0).toUpperCase() + t.slice(1);
      const KASKYVERBIT = ['tulla', 'mennä', 'odottaa', 'istua', 'katsoa', 'kuunnella', 'ottaa', 'puhua', 'kääntyä', 'juosta',
        'kävellä', 'syödä', 'juoda', 'tehdä', 'ostaa', 'soittaa', 'maksaa', 'pysähtyä', 'leikkiä'];
      const kaskyt = () => KASKYVERBIT.filter(v => onVerbi(v) && (p => p['imper.2p'] && p['imper.neg.2p'] && p['imper.2s'] && p['prees.2p'])(S.paradigma(v)));
      // Käskyn merkitys portugaliksi (leksikon ensimmäinen merkitys ei aina ole käskyn: maksaa = custar, käskynä pagar).
      const PT_KASKY = { tulla: 'vir', mennä: 'ir', odottaa: 'esperar', istua: 'sentar', katsoa: 'olhar', kuunnella: 'escutar',
        ottaa: 'pegar', puhua: 'falar', kääntyä: 'virar', juosta: 'correr', kävellä: 'andar', syödä: 'comer', juoda: 'beber',
        tehdä: 'fazer', ostaa: 'comprar', soittaa: 'ligar', maksaa: 'pagar', pysähtyä: 'parar', leikkiä: 'brincar' };
      const ptVerbi = v => PT_KASKY[v] || merkitys(v).split(/[,(;]/)[0].trim();
      const kaskyTe = {
        id: 't14-kasky-te', oppitunti: 't14', luokka: 'verbos', ryhma: 'Imperativo', rekisteri: 'kirja', otsikko: 'Ordens para vocês: Tulkaa! Menkää!', kirjoitus: true,
        kuvaus: 'Para duas ou mais pessoas (e para “o senhor, a senhora”), a ordem termina em -kaa/-kää, sobre o radical do infinitivo: tulla → Tulkaa!, mennä → Menkää!, odottaa → Odottakaa!',
        saanto: 'ordem para vocês = infinitivo sem o fim + -kaa/-kää (tulla → tulkaa, odottaa → odottakaa); para você, sem terminação (tule!); afirmação: tulette.',
        tee() {
          const v = arpa(kaskyt());
          const p = S.paradigma(v);
          const te = p['imper.2p'], sina = p['imper.2s'], pt = ptVerbi(v);
          if (Math.random() < 0.55) {
            // Perusmuodosta käsky te: väärät ovat saman verbin käsky sinä, preesens te ja perusmuoto (yksi ero: muoto).
            const miksi = {
              [pieni(sina)]: `${isolla(sina)}! é a ordem para você (uma pessoa); para vocês: ${isolla(te)}!`,
              [pieni(p['prees.2p'])]: `${p['prees.2p']} = vocês ${pt} (afirmação, -tte); a ordem para vocês termina em -kaa/-kää: ${te}`
            };
            if (pieni(v) !== pieni(te)) miksi[pieni(v)] = `${v} é a forma básica (do dicionário); a ordem para vocês: ${te}`;
            return { kysymys: `${v} (${pt}) → ordem para vocês?`, kieli: 'fi-FI', puhu: `${isolla(te)}!`, oikea: te,
              vaihtoehdot: vaihtoehdot(te, [sina, p['prees.2p'], v]), miksi, solu: `${v} · ${soluNimi('imper.2p')}: ${te}`,
              selitys: `${isolla(te)}! = ordem para vocês (${pt}): o radical do infinitivo + -kaa/-kää.` };
          }
          // Kenelle käsky? Yksi henkilö (sinä) vai kaksi (te). Vihje kiinnittää verbin; ero on vain luvussa (H1).
          const yksi = Math.random() < 0.5;
          const KENELLE = yksi ? [['Jay'], ['Anderson'], ['Maia'], ['Purjo']] : [['Jay ja Anderson'], ['Maia ja Malu'], ['Purjo ja Hiisi']];
          const [kuka] = arpa(KENELLE.filter(([x]) => x.split(' ja ').every(n => S.hae(n))));
          const oikea = yksi ? sina : te;
          const vaara3 = yksi ? p['prees.2s'] : p['prees.2p'];
          const miksi = yksi
            ? { [pieni(te)]: `${isolla(te)}! é para duas ou mais pessoas; ${kuka} é uma pessoa só: ${isolla(sina)}!`,
              [pieni(vaara3)]: `${vaara3} = você ${pt} (afirmação, -t); a ordem não tem terminação: ${isolla(sina)}!` }
            : { [pieni(sina)]: `${isolla(sina)}! é para uma pessoa; ${kuka} são duas: ${isolla(te)}!`,
              [pieni(vaara3)]: `${vaara3} = vocês ${pt} (afirmação, -tte); a ordem para vocês: ${isolla(te)}!` };
          return { kysymys: `${kuka}, ___! (${pt})`, kieli: 'fi-FI', puhu: `${kuka}, ${oikea}!`, oikea, avain: (yksi ? '1-' : '2-') + v,
            vaihtoehdot: sekoita([sina, te, vaara3]), miksi,
            solu: `${v} · ${soluNimi(yksi ? 'imper.2s' : 'imper.2p')}: ${oikea}`,
            selitys: `${kuka}, ${oikea}! ${yksi ? 'Uma pessoa: a ordem sem terminação.' : 'Duas pessoas: -kaa/-kää.'}` };
        }
      };
      const kieltoTe = {
        id: 't14-kielto-te', oppitunti: 't14', luokka: 'verbos', ryhma: 'Imperativo', rekisteri: 'kirja', otsikko: 'Vocês, não! Älkää juosko!', kirjoitus: true,
        kuvaus: 'Para proibir algo a vocês: älkää + o radical + -ko/-kö. Troque o -kaa da ordem por -ko: Juoskaa! → Älkää juosko! Menkää! → Älkää menkö!',
        saanto: 'vocês, não! = älkää + -ko/-kö (juoskaa → älkää juosko); para você: älä + forma negativa (älä juokse); afirmação: ette juokse.',
        tee() {
          const v = arpa(kaskyt());
          const p = S.paradigma(v);
          const neg = p['imper.neg.2p'], te = p['imper.2p'], pt = ptVerbi(v);
          if (Math.random() < 0.6) {
            // älkää + ___: väärät ovat saman verbin myönteinen käsky te, kieltomuoto (älä-käskyn muoto) ja preesens te.
            const miksi = {
              [pieni(te)]: `${te} é a ordem afirmativa (façam!); depois de älkää vem -ko/-kö: ${neg}`,
              [pieni(p.kielto)]: `${p.kielto} vem depois de älä (para você); depois de älkää: ${neg}`,
              [pieni(p['prees.2p'])]: `${p['prees.2p']} tem terminação de pessoa (-tte); depois de älkää: ${neg}`
            };
            return { kysymys: `Älkää ___! (${v}, ${pt})`, kieli: 'fi-FI', puhu: `Älkää ${neg}!`, oikea: neg,
              vaihtoehdot: vaihtoehdot(neg, [te, p.kielto, p['prees.2p']]), miksi,
              solu: `${v} · ${soluNimi('imper.neg.2p')}: ${neg}`,
              selitys: `Älkää ${neg}! = vocês, não (${pt})! älkää + -ko/-kö.` };
          }
          // Kieltosana: älkää (käsky vocês), älä (käsky você) vai ette (toteamus)? Verbin -ko/-kö kiinnittää vastauksen.
          const miksi = {
            'älä': `älä vai com a forma negativa para você (Älä ${p.kielto}!); com ${neg}, älkää`,
            'ette': `ette = vocês não, numa afirmação (Te ette ${p.kielto}.); na ordem, älkää`
          };
          return { kysymys: `___ ${neg}! (${pt})`, kieli: 'fi-FI', puhu: `Älkää ${neg}!`, oikea: 'Älkää', avain: 'sana-' + v,
            vaihtoehdot: sekoita(['Älkää', 'Älä', 'Ette']), miksi, solu: `ei · ${soluNimi('imper.2p')}: älkää`,
            selitys: `Älkää ${neg}! A ordem negativa para vocês: älkää + -ko/-kö.` };
        }
      };
      // Postpositio + genetiivi. [tunniste, ”de X” portugaliksi]; alla vain palmulle ja penkille.
      const PAIKAT14 = [['kirkko', 'da igreja'], ['pankki', 'do banco'], ['apteekki', 'da farmácia'], ['museo', 'do museu'], ['palatsi', 'do palácio'],
        ['hotelli', 'do hotel'], ['kahvila', 'do café'], ['suihkulähde', 'do chafariz'], ['kauppa', 'da loja'], ['kirjasto', 'da biblioteca'],
        ['asema', 'da estação'], ['koulu', 'da escola'], ['palmu', 'da palmeira'], ['penkki', 'do banco de sentar']];
      const PP = [['edessä', 'na frente'], ['takana', 'atrás'], ['vieressä', 'ao lado'], ['lähellä', 'perto'], ['alla', 'debaixo'], ['kohdalla', 'na altura']];
      const KEHYS = [['Jay odottaa', 'O Jay espera'], ['Anderson istuu', 'O Anderson está sentado'], ['Maia odottaa', 'A Maia espera'], ['Malu pysähtyy', 'A Malu para']];
      const sopii = (pp, id) => (pp === 'alla' ? ['palmu', 'penkki'].includes(id) : !['palmu', 'penkki'].includes(id) || pp !== 'kohdalla');
      const postpositiot = {
        id: 't14-postpositiot', oppitunti: 't14', luokka: 'nomes', ryhma: 'Posposições', rekisteri: 'kirja', otsikko: 'Onde fica? Genitivo + posposição', kirjoitus: true,
        kuvaus: 'Em finlandês, “na frente de” vem depois do lugar, e o lugar fica no genitivo: kirkon edessä (na frente da igreja), pankin vieressä (ao lado do banco).',
        saanto: 'lugar no genitivo (-n) + posposição: kirkon edessä, palmun alla, museon vieressä. Nunca a forma básica, o partitivo ou -ssa antes da posposição.',
        tee() {
          const kehys = arpa(KEHYS.filter(([f]) => S.hae(f.split(' ')[0])));
          const [kuka, ptKuka] = kehys;
          const pp = arpa(PP.filter(([x]) => S.hae(x)));
          const [id, ptX] = arpa(PAIKAT14.filter(([x]) => S.hae(x) && sopii(pp[0], x)));
          const p = S.paradigma(id);
          const gen = p.gen;
          const pt = `${ptKuka} ${pp[1]} ${ptX}.`;
          if (Math.random() < 0.6) {
            // Genetiivi: väärät ovat saman sanan perusmuoto, partitiivi ja missä-sija (yksi ero: sija).
            const missa = S.hae(id).paikka === 'ulko' ? p.ade : p.ines;
            const miksi = { [pieni(id)]: `${id} é a forma básica; antes de ${pp[0]}, o genitivo: ${gen}` };
            if (p.part) miksi[pieni(p.part)] = `${p.part} é o partitivo; antes de ${pp[0]}, o genitivo -n: ${gen}`;
            if (missa) miksi[pieni(missa)] = `${missa} já é “onde?” sozinho (${soluNimi(S.hae(id).paikka === 'ulko' ? 'ade' : 'ines', S.harmonia(id))}); com ${pp[0]}, o genitivo: ${gen}`;
            return { kysymys: `${kuka} ___ ${pp[0]}. (${pt})`, kieli: 'fi-FI', puhu: `${kuka} ${gen} ${pp[0]}.`, oikea: gen, avain: id + pp[0],
              vaihtoehdot: vaihtoehdot(gen, [id, p.part, missa].filter(Boolean)), miksi, solu: `${id} · ${soluNimi('gen')}: ${gen}`,
              selitys: `${kuka} ${gen} ${pp[0]}. = ${pt} Lugar no genitivo + posposição.` };
          }
          // Posposition merkitys: väärät ovat muita postpositioita (yksi ero: merkitys), genetiivi on valmiina.
          const muut = PP.filter(([x]) => x !== pp[0] && S.hae(x) && sopii(x, id));
          const miksi = {};
          for (const [x, xpt] of muut) miksi[pieni(x)] = `${x} = ${xpt} de…; aqui: ${pp[1]} (${pp[0]})`;
          return { kysymys: `${kuka} ${gen} ___. (${pt})`, kieli: 'fi-FI', puhu: `${kuka} ${gen} ${pp[0]}.`, oikea: pp[0], avain: 'pp-' + id + pp[0],
            vaihtoehdot: vaihtoehdot(pp[0], muut.map(([x]) => x)), miksi, solu: `${pp[0]} = ${pp[1]} de (+ genitivo)`,
            selitys: `${kuka} ${gen} ${pp[0]}. = ${pt}` };
        }
      };
      // Suunnat: oikealle/oikealla, vasemmalle/vasemmalla, suoraan. Kirjoitus- ja napautustila sekä kuuntelu nuolin.
      const SUUNTA_PT = { oikealle: 'para a direita (para onde?)', oikealla: 'à direita (onde?)', vasemmalle: 'para a esquerda (para onde?)',
        vasemmalla: 'à esquerda (onde?)', suoraan: 'reto, em frente' };
      const SUUNTA_LAUSEET = [   // [lause, portugaliksi, oikea, harhat]
        ['Käänny ___!', 'Vire à direita!', 'oikealle', ['oikealla', 'vasemmalle']],
        ['Käänny ___!', 'Vire à esquerda!', 'vasemmalle', ['vasemmalla', 'oikealle']],
        ['Kääntykää ___!', 'Virem à direita!', 'oikealle', ['oikealla', 'vasemmalle']],
        ['Mene ___ kulmaan!', 'Vá reto até a esquina!', 'suoraan', ['oikealle', 'vasemmalle']],
        ['Apteekki on ___.', 'A farmácia fica à direita.', 'oikealla', ['oikealle', 'vasemmalla']],
        ['Kirkko on ___.', 'A igreja fica à esquerda.', 'vasemmalla', ['vasemmalle', 'oikealla']],
        ['Pankki on ___.', 'O banco fica à direita.', 'oikealla', ['oikealle', 'vasemmalla']],
        ['Menkää ___!', 'Vão reto!', 'suoraan', ['oikealle', 'vasemmalle']]
      ];
      const NUOLET = [['Käänny oikealle!', '➡'], ['Käänny vasemmalle!', '⬅'], ['Mene suoraan!', '⬆'], ['Kääntykää oikealle!', '➡'],
        ['Kääntykää vasemmalle!', '⬅'], ['Menkää suoraan!', '⬆']];
      const NUOLI_PT = { '➡': 'para a direita', '⬅': 'para a esquerda', '⬆': 'reto, em frente' };
      const suunnat = {
        id: 't14-suunnat', oppitunti: 't14', luokka: 'palavras', ryhma: 'Direções', rekisteri: 'kirja', otsikko: 'Direções: oikealle, vasemmalla, suoraan', kirjoitus: true,
        kuvaus: 'Para onde? oikealle, vasemmalle (-lle). Onde? oikealla, vasemmalla (-lla). Reto: suoraan. Às vezes você só ouve a Maia e escolhe a seta.',
        saanto: 'para onde? -lle: Käänny oikealle! · onde? -lla: Apteekki on oikealla. · reto, em frente: suoraan (direita é oikea).',
        tee() {
          if (Math.random() < 0.35) {
            const [lause, nuoli] = arpa(NUOLET);
            const miksi = {};
            for (const x of Object.keys(NUOLI_PT)) if (x !== nuoli) miksi[x] = `${x} = ${NUOLI_PT[x]}; ${lause} = ${NUOLI_PT[nuoli]}`;
            return { kysymys: 'Ouça a Maia: para onde? (⬅ esquerda · ⬆ reto · ➡ direita)', kieli: 'pt-BR', puhu: lause, kuuntele: lause, oikea: nuoli,
              avain: 'kuule-' + lause, vaihtoehdot: sekoita(['⬅', '⬆', '➡']), miksi, eiKirjoitus: true, selitys: `${lause} = ${NUOLI_PT[nuoli]} ${nuoli}` };
          }
          const [lause, pt, oikea, harhat] = arpa(SUUNTA_LAUSEET.filter(x => S.hae(x[2])));
          const miksi = {};
          for (const h of harhat) miksi[pieni(h)] = `${h} = ${SUUNTA_PT[h]}; aqui: ${SUUNTA_PT[oikea]}`;
          const valmis = lause.replace('___', oikea);
          return { kysymys: `${lause} (${pt})`, kieli: 'fi-FI', puhu: valmis, oikea, avain: lause + oikea,
            vaihtoehdot: vaihtoehdot(oikea, harhat), miksi, solu: `${oikea} = ${SUUNTA_PT[oikea]}`, selitys: `${valmis} = ${pt}` };
        }
      };
      return [kaskyTe, kieltoTe, postpositiot, suunnat];
    })(),
    // ==== t15: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    /* --- t15 (jouluaatto): kielteinen imperfekti persoonittain (t15-kielto-imperfekti), partisiippi verbeittäin
       (t15-partisiippi), konditionaali kohteliaisuusfraaseina (t15-konditionaali) ja joulusanat (t15-joulu). Muodot
       taivutuskoneelta (Sanasto.paradigma: part.yks, part.mon, kond.*, prees.*, imperf.*, kielto), ei käsin. H1: väärä
       vaihtoehto = sama kieltoverbi ja partisiipin väärä luku, preesensin kieltomuoto tai imperfektin persoonamuoto
       (brasilialaisen ansa *en söin*); partisiipissa toisen verbin partisiippi tai perusmuoto (yksi ero: verbi);
       konditionaalissa sama verbi preesensissä, imperfektissä tai toisessa persoonassa; sanoissa toinen joulusana.
       tietää jätetty pois: taivutuskone antaa partisiipiksi *tietänyt* (oikein tiennyt; raportoitu koordinaattorille). --- */
    ...(function () {
      const isolla = t => t.charAt(0).toUpperCase() + t.slice(1);
      const KIELTOVERBIT = ['nukkua', 'syödä', 'juoda', 'mennä', 'tulla', 'olla', 'tehdä', 'nähdä', 'saada', 'käydä', 'puhua',
        'ostaa', 'lukea', 'ottaa', 'soittaa', 'haluta', 'herätä', 'avata', 'tarvita', 'ajaa', 'kirjoittaa', 'istua', 'kuulla',
        'ymmärtää', 'lähteä', 'kävellä', 'tavata', 'pelata', 'keittää', 'hakea', 'kattaa', 'laskea', 'siivota'];
      const verbit = () => KIELTOVERBIT.filter(v => onVerbi(v) && (p => p['part.yks'] && p['part.mon'] && p.kielto && p['imperf.1s'] && p['imperf.3p'])(S.paradigma(v)));
      // Partisiipin muodostus portugaliksi verbityypin mukaan (sama jako kuin oppitunnin taulukossa).
      function tapa(v) {
        const r = S.hae(v) || {}, t = (r.t || {}).tyyppi, py = S.paradigma(v)['part.yks'];
        if (t === 2) return `tipo 2: tire o -da/-dä e ponha -nut/-nyt (${v} → ${py}).`;
        if (t === 3) return `tipo 3: a consoante do radical dobra (${v} → ${py}).`;
        if (t === 4 || t === 5) return `tipo ${t}: -nnut/-nnyt (${v} → ${py}).`;
        return `tipo 1: tire o -a/-ä e ponha -nut/-nyt, com a consoante forte do infinitivo (${v} → ${py}).`;
      }
      const kieltoImperf = {
        id: 't15-kielto-imperfekti', oppitunti: 't15', luokka: 'verbos', ryhma: 'Passado negativo', rekisteri: 'kirja', otsikko: 'Não fiz: en nukkunut, emme syöneet', kirjoitus: true,
        kuvaus: 'Do passado afirmativo para o negativo: minä nukuin → minä en nukkunut, me söimme → me emme syöneet. A negação leva a pessoa; o particípio só o número.',
        saanto: 'passado negativo = en, et, ei, emme, ette, eivät + particípio: -nut/-nyt no singular (en nukkunut), -neet no plural (emme nukkuneet). Nunca en nukuin.',
        tee() {
          const v = arpa(verbit());
          const k = arpa(PERS);
          const p = S.paradigma(v);
          const ei = KIELLOT[k], yks = k[1] === 's';
          const part = p[yks ? 'part.yks' : 'part.mon'], toinen = p[yks ? 'part.mon' : 'part.yks'];
          const imperf = p['imperf.' + k];
          const oikea = `${ei} ${part}`;
          const vLuku = `${ei} ${toinen}`, vNyt = `${ei} ${p.kielto}`, vAnsa = `${ei} ${imperf}`;
          const miksi = {
            [pieni(vLuku)]: `${toinen} é o particípio ${yks ? 'do plural (nós, vocês, eles)' : 'do singular (eu, você, ele)'}; com ${ei} (${PT_PRON[k]}): ${part}`,
            [pieni(vNyt)]: `${vNyt} é o presente negativo (agora); para o passado, o particípio: ${oikea}`,
            [pieni(vAnsa)]: `${imperf} é o passado afirmativo, com pessoa; depois de ${ei} vem o particípio: ${oikea}`
          };
          return { kysymys: `${isolla(P[k])} ${imperf}. → ${isolla(P[k])} ___ (negação)`, kieli: 'fi-FI', puhu: `${isolla(P[k])} ${oikea}.`, oikea, avain: v + ':' + k,
            vaihtoehdot: sekoita(yksilolliset([oikea, vLuku, vNyt, vAnsa])), miksi,
            solu: `${v} · ${soluNimi(yks ? 'part.yks' : 'part.mon')}`,
            selitys: `${isolla(P[k])} ${oikea}. = ${PT_PRON[k]}, não + ${merkitys(v)}, no passado: ${ei} (a pessoa) + ${part} (o particípio${yks ? '' : ' plural'}).` };
        }
      };
      const partisiippi = {
        id: 't15-partisiippi', oppitunti: 't15', luokka: 'verbos', ryhma: 'Passado negativo', rekisteri: 'kirja', otsikko: 'O particípio de cada verbo: syönyt, mennyt, halunnut', kirjoitus: true,
        kuvaus: 'Do infinitivo para o particípio e de volta: syödä → hän ei syönyt, mennä → hän ei mennyt, haluta → hän ei halunnut.',
        saanto: 'particípio: tipo 1 tira -a/-ä + nut/nyt (nukkunut); tipo 2 tira -da/-dä (syönyt, tehnyt); tipo 3 dobra a consoante (mennyt, tullut, ollut); tipos 4 e 5: -nnut/-nnyt (halunnut, tarvinnut).',
        tee() {
          const vs = verbit();
          const v = arpa(vs);
          const py = S.paradigma(v)['part.yks'];
          const muut = sekoita(vs.filter(x => x !== v && pieni(S.paradigma(x)['part.yks']) !== pieni(py)));
          // Lähimmät harhat ensin: sama alkukirjain (syödä: saanut, soittanut), sitten muut.
          const valitut = [...muut.filter(x => x[0] === v[0]), ...muut.filter(x => x[0] !== v[0])].slice(0, 3);
          if (Math.random() < 0.5) {
            const miksi = {};
            for (const x of valitut) { const m = S.paradigma(x)['part.yks']; miksi[pieni(m)] = `${m} é o particípio de ${x} (${merkitys(x)})`; }
            return { kysymys: `${v} (${merkitys(v)}) → eilen hän ei ___`, kieli: 'fi-FI', puhu: `Eilen hän ei ${py}.`, oikea: py, avain: 'p:' + v,
              vaihtoehdot: sekoita([py, ...valitut.map(x => S.paradigma(x)['part.yks'])]), miksi,
              solu: `${v} · ${soluNimi('part.yks')}`, selitys: `${v} → eilen hän ei ${py}: ${tapa(v)}` };
          }
          const miksi = {};
          for (const x of valitut) miksi[pieni(x)] = `${x} (${merkitys(x)}) → hän ei ${S.paradigma(x)['part.yks']}`;
          return { kysymys: `Eilen hän ei ${py}. → forma básica?`, kieli: 'fi-FI', puhu: `Eilen hän ei ${py}.`, oikea: v, avain: 'i:' + v,
            vaihtoehdot: sekoita([v, ...valitut]), miksi, solu: `${v} · forma básica (infinitivo)`,
            selitys: `hän ei ${py} = ele, ela não + ${merkitys(v)}, no passado → ${v}: ${tapa(v)}` };
        }
      };
      // [verbi, persoona, lause (___ = verbi), portugaliksi, kysymys?]: kohteliaisuus ja toive, ei jos-lausetta (lição 20).
      const KOHTELIAAT = [
        ['haluta', '1s', '___ kakkua, kiitos.', 'eu queria bolo, por favor'],
        ['haluta', '1s', '___ olla Suomessa.', 'eu queria estar na Finlândia'],
        ['haluta', '1p', 'Me ___ nähdä lunta.', 'nós queríamos ver neve'],
        ['haluta', '3s', 'Purjo ___ kuvan joulupöydästä.', 'a Purjo queria uma foto da mesa de Natal'],
        ['olla', '3s', '___ mukava nähdä lunta.', 'seria bom ver neve'],
        ['olla', '3s', '___ mukava mennä saunaan.', 'seria bom ir à sauna'],
        ['voida', '2s', '___ lähettää kuvan?', 'você poderia mandar uma foto?', true],
        ['voida', '2p', '___ auttaa minua?', 'vocês poderiam me ajudar?', true],
        ['saada', '1s', '___ kahvia?', 'poderia me dar um café?', true],
        ['saada', '1s', '___ kakkua?', 'poderia me dar bolo?', true],
        ['syödä', '1s', 'Minä ___ nyt kinkkua!', 'eu comeria presunto agora!'],
        ['juoda', '1s', 'Minä ___ nyt kylmää vettä.', 'eu beberia água gelada agora']
      ];
      const TOINEN = { '1s': '2s', '2s': '1s', '3s': '1s', '1p': '2p', '2p': '1p', '3p': '3s' };
      const konditionaali = {
        id: 't15-konditionaali', oppitunti: 't15', luokka: 'verbos', ryhma: 'Condicional: haluaisin', rekisteri: 'kirja', otsikko: 'Eu gostaria: haluaisin, voisitko, olisi', kirjoitus: true,
        kuvaus: 'Pedir e desejar com educação: o condicional com -isi-. Haluaisin kakkua. Voisitko lähettää kuvan? Olisi mukava nähdä lunta.',
        saanto: 'condicional = radical + -isi- + terminação: haluan → haluaisin, voit → voisit, on → olisi, saan → saisin. Pergunta: voisitko?, saisinko? O passado (halusin) não é educado: é só passado.',
        tee() {
          const [v, k, malli, pt, kys] = arpa(KOHTELIAAT.filter(x => onVerbi(x[0])));
          const p = S.paradigma(v);
          const alku = malli.startsWith('___');
          const muoto = s => { const m = kys ? s + (T.harmonia(s) === 'a' ? 'ko' : 'kö') : s; return alku ? isolla(m) : m; };
          const oikea = muoto(p['kond.' + k]);
          const nyt = muoto(p['prees.' + k]), enn = muoto(p['imperf.' + k]), toinen = muoto(p['kond.' + TOINEN[k]]);
          const miksi = {};
          if (pieni(nyt) !== pieni(oikea)) miksi[pieni(nyt)] = `${nyt} é o presente (${PT_PRON[k]}): direto demais para “${pt}”; com educação: ${oikea}`;
          if (pieni(enn) !== pieni(oikea) && pieni(enn) !== pieni(nyt)) miksi[pieni(enn)] = `${enn} é o passado (${PT_PRON[k]}); em finlandês o passado não é pedido educado: ${oikea}`;
          if (pieni(toinen) !== pieni(oikea)) miksi[pieni(toinen)] = `pessoa errada: ${toinen} é ${PT_PRON[TOINEN[k]]}; aqui: ${PT_PRON[k]}`;
          const valmis = malli.replace('___', oikea);
          return { kysymys: `${malli} (${pt})`, kieli: 'fi-FI', puhu: valmis, oikea, avain: v + ':' + k + ':' + malli,
            vaihtoehdot: sekoita(yksilolliset([oikea, nyt, enn, toinen])), miksi,
            solu: `${v} · ${soluNimi('kond.' + k)}`, selitys: `${valmis} = ${pt}: ${oikea} tem a marca -isi- do condicional.` };
        }
      };
      const JOULU = {
        joulu: 'Natal', jouluaatto: 'véspera de Natal', joulupukki: 'Papai Noel', joulukuusi: 'árvore de Natal', lahja: 'presente',
        tähti: 'estrela', kynttilä: 'vela', piparkakku: 'biscoito de gengibre', tonttu: 'duende de Natal', joululaulu: 'canção de Natal',
        joulukortti: 'cartão de Natal', kinkku: 'presunto de Natal', kalkkuna: 'peru', joulupuuro: 'mingau de arroz de Natal',
        joulusauna: 'sauna de Natal', joulurauha: 'paz de Natal', joulupöytä: 'mesa de Natal', keskiyö: 'meia-noite',
        joulukalenteri: 'calendário do Advento', joulukoriste: 'enfeite de Natal'
      };
      const joulu = {
        id: 't15-joulu', oppitunti: 't15', luokka: 'palavras', ryhma: 'Natal', rekisteri: 'kirja', otsikko: 'Palavras do Natal: joulupukki, joulukuusi, lahja…', kirjoitus: true,
        kuvaus: 'Do português para o finlandês: as palavras do Natal finlandês. Muitas começam com joulu (Natal), e o j é i: IOU-lu.',
        saanto: 'joulu = Natal: joulu + kuusi (abeto) = joulukuusi, joulu + pukki = joulupukki, joulu + sauna = joulusauna. O j finlandês soa i.',
        tee() {
          const sanat = Object.keys(JOULU).filter(x => S.hae(x));
          const s = arpa(sanat);
          // Harhat: muut joulusanat; joulu-yhdyssanalle ensin muut joulu-yhdyssanat (yksi ero: jälkiosa).
          const muut = sekoita(sanat.filter(x => x !== s));
          const lahi = s.startsWith('joulu') ? [...muut.filter(x => x.startsWith('joulu')), ...muut.filter(x => !x.startsWith('joulu'))] : muut;
          const harhat = lahi.slice(0, 3);
          const miksi = {};
          for (const h of harhat) miksi[pieni(h)] = `${h} = ${JOULU[h]}`;
          return { kysymys: `“${JOULU[s]}” em finlandês?`, kieli: 'pt-BR', puhu: s, oikea: s, avain: s,
            vaihtoehdot: sekoita([s, ...harhat]), miksi, selitys: `${s} = ${JOULU[s]}.` };
        }
      };
      return [kieltoImperf, partisiippi, konditionaali, joulu];
    })(),
    // ==== k03: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    // ==== t16: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    /* --- t16 (katujuhlat): essiivi (t16-essiivi: rooli olla töissä + -na, elämänvaihe lapsena/nuorena, päivä ja juhla),
       translatiivi (t16-translatiivi: muutos tulla/muuttua + -ksi ja kieli sano/kirjoita/käännä + -ksi) ja diftongit
       kuuntelemalla (t16-kuuntele). Muodot taivutuskoneelta (Sanasto.paradigma: ess, transl, ade, part, ines), ei käsin.
       H1: väärä vaihtoehto = saman sanan toinen muoto (yksi ero: sija): perusmuoto, translatiivi tai essiivi; ajan sanoissa
       myös -lla (aamulla-analogia); muutoksessa partitiivi; kielissä partitiivi (puhun suomea) ja inessiivi. Aukko on aina
       lauseen keskellä, joten vaihtoehdot ovat pienellä. Kuuntelussa sama lause, jossa vain diftongin sana vaihtuu. --- */
    ...(function () {
      // [sana, lause (___ = aukko), portugaliksi, käyttö]: rooli (olla töissä + -na), vaihe (lapsena, nuorena), aika.
      const ESS = [
        ['geologi', 'Maia on töissä ___.', 'a Maia trabalha como geóloga', 'rooli'],
        ['kuljettaja', 'Malu on töissä ___.', 'a Malu trabalha como motorista', 'rooli'],
        ['lääkäri', 'Pertti oli töissä ___.', 'o Pertti trabalhava como médico', 'rooli'],
        ['taloustieteilijä', 'Walker oli töissä ___.', 'o Walker trabalhava como economista', 'rooli'],
        ['kokki', 'Moara on töissä ___.', 'a Moara trabalha como cozinheira', 'rooli'],
        ['muusikko', 'Walker on ___ parempi kuin taloustieteilijänä.', 'como músico, o Walker é melhor do que como economista', 'rooli'],
        ['lapsi', 'Maia tanssi ___ kadulla.', 'quando criança, a Maia dançava na rua', 'vaihe'],
        ['lapsi', 'Jay rakasti ___ lunta.', 'quando criança, o Jay amava a neve', 'vaihe'],
        // Ei ”Purjo oli ___ sairaanhoitaja”: siinä myös perusmuoto (nuori sairaanhoitaja) olisi oikein (kielikatselmointi).
        ['nuori', 'Purjo oli ___ töissä sairaalassa.', 'quando jovem, a Purjo trabalhava no hospital', 'vaihe'],
        ['joulu', 'Täällä on ___ aina juhlat.', 'no Natal sempre tem festa aqui', 'aika'],
        ['lauantai', 'Kadulla on ___ juhlat.', 'no sábado tem festa na rua', 'aika'],
        ['maanantai', 'Jay menee ___ töihin.', 'na segunda-feira o Jay vai para o trabalho', 'aika'],
        ['jouluaatto', 'Maia teki ___ salaatin.', 'na véspera de Natal a Maia fez a salada', 'aika'],
        ['sunnuntai', 'Purjo käy ___ saunassa.', 'no domingo a Purjo vai à sauna', 'aika'],
        ['perjantai', 'Hiisi ajaa ___ mökille.', 'na sexta-feira o Hiisi dirige até a casa de campo', 'aika']
      ];
      // [subjekti, verbi, sana, portugaliksi]: muutos (tulla tai muuttua + -ksi).
      const MUUTOS = [
        ['Jay', 'tuli', 'rohkea', 'o Jay ficou corajoso'], ['Eenok', 'tuli', 'väsynyt', 'o Eenok ficou cansado'],
        ['Uuno', 'tuli', 'iloinen', 'o Uuno ficou alegre'], ['Purjo', 'tulee', 'hullu', 'a Purjo fica louca'],
        ['Jay', 'tulee', 'hölmö', 'o Jay fica bobo'], ['Anderson', 'tuli', 'sairas', 'o Anderson ficou doente'],
        ['Maia', 'tuli', 'hiljainen', 'a Maia ficou quieta'], ['Juhla', 'muuttui', 'hiljainen', 'a festa ficou quieta'],
        ['Helsinki', 'muuttui', 'valkoinen', 'Helsinque ficou branca'], ['Tie', 'muuttui', 'jää', 'a estrada virou gelo'],
        ['Auto', 'muuttui', 'kelkka', 'o carro virou trenó'], ['Mies', 'muuttui', 'punainen', 'o homem ficou vermelho']
      ];
      // [lause (___ = aukko), kieli, portugaliksi]: kieli, jolla sanotaan, kirjoitetaan tai käännetään.
      const KIELI = [
        ['Sano se ___!', 'suomi', 'diga isso em finlandês!'], ['Maia kirjoittaa Purjolle viestin ___.', 'suomi', 'a Maia escreve uma mensagem para a Purjo em finlandês'],
        ['Jay sanoo sen ___.', 'portugali', 'o Jay diz isso em português'], ['Purjo kirjoittaa viestin ___.', 'englanti', 'a Purjo escreve a mensagem em inglês'],
        ['Maia kääntää listan ___.', 'suomi', 'a Maia traduz a lista para o finlandês']
      ];
      const KAYTTO = { rooli: 'o papel (como?)', vaihe: 'a fase da vida (quando criança, quando jovem)', aika: 'quando? (dia ou festa)' };
      const nimi = (solu, id, kaytto) => { const s = KA.solu(solu, S.harmonia(id), kaytto); return s ? s.nimi : solu; };
      const iso = t => t.charAt(0).toUpperCase() + t.slice(1);
      // ”Jay tuli ___.” → koko lause oikealla muodolla; aukko ei ole koskaan lauseen alussa.
      const tayta = (lause, muoto) => lause.replace('___', muoto);
      // [sana, verbi, sana, pt] → ”Eenok tuli ___.” (subjektin iso alkukirjain säilyy).
      const muutosLause = (sub, verbi) => `${sub} ${verbi} ___.`;
      const PARIT = [
        ['Jay juo olutta.', 'Jay joi olutta.', 'o Jay bebe cerveja', 'o Jay bebeu cerveja', 'uo (juo) é o presente; no passado, oi (joi)'],
        ['Maia syö kakkua.', 'Maia söi kakkua.', 'a Maia come bolo', 'a Maia comeu bolo', 'yö (syö) é o presente; no passado, öi (söi)'],
        ['Malu vie rummun kotiin.', 'Malu vei rummun kotiin.', 'a Malu leva o tambor para casa', 'a Malu levou o tambor para casa', 'ie (vie) é o presente; no passado, ei (vei)'],
        ['Missä tie on?', 'Missä tee on?', 'onde fica a estrada?', 'onde está o chá?', 'tie (estrada) tem o ditongo ie; tee (chá) tem um e longo'],
        ['Tuoli on tuolla.', 'Tuli on tuolla.', 'a cadeira está ali', 'o fogo está ali', 'tuoli (cadeira) tem o ditongo uo; tuli (fogo) tem um u curto'],
        ['Hiisi juo kahvia.', 'Hiisi joi kahvia.', 'o Hiisi bebe café', 'o Hiisi bebeu café', 'uo (juo) é o presente; no passado, oi (joi)']
      ];
      return [
        {
          id: 't16-essiivi', oppitunti: 't16', luokka: 'nomes', ryhma: 'Essivo e translativo', rekisteri: 'kirja', otsikko: 'Como? Quando? O essivo -na/-nä', kirjoitus: true,
          kuvaus: 'Malu on töissä kuljettajana, Maia tanssi lapsena kadulla, jouluna täällä on juhlat: o papel, a fase da vida e o dia ou a festa com -na/-nä.',
          saanto: 'essivo = radical forte (o do ilativo) + -na/-nä: lapsi → lapsena, opettaja → opettajana, joulu → jouluna, lauantai → lauantaina. Com olla sozinho a profissão fica na forma básica; com olla töissä (trabalhar como), -na. Partes do dia sem “aquele, um”: -lla (aamulla); com eles, -na (sinä iltana). Adjetivos em -s: kaunis → kauniina.',
          tee() {
            const [id, lause, pt, kaytto] = arpa(ESS.filter(x => S.hae(x[0])));
            const p = S.paradigma(id);
            const oikea = p.ess, perus = id, transl = p.transl, ade = p.ade;
            if (!oikea || !transl) return null;
            const miksi = {
              [pieni(perus)]: `${perus} é a forma básica: falta o -${oikea.slice(-2)} do essivo (${KAYTTO[kaytto]})`,
              [pieni(transl)]: `${transl} é o translativo (-ksi: ficar, virar); aqui é ${KAYTTO[kaytto]}: ${oikea}`
            };
            // Ajasta (päivä, juhla) ei translatiivia harhaksi: jouluksi, perjantaiksi (= até, para) ovat myös oikein.
            const harhat = kaytto === 'aika' ? [perus] : [perus, transl];
            if (kaytto === 'aika' && ade) { harhat.push(ade); miksi[pieni(ade)] = `${ade} tem -lla, como aamulla e illalla; dias e festas pedem -na: ${oikea}`; }
            const valmis = tayta(lause, oikea);
            return { kysymys: `${lause} (${id})`, kieli: 'fi-FI', puhu: valmis, oikea, avain: id + ':' + kaytto + ':' + lause.slice(0, 6),
              vaihtoehdot: sekoita(yksilolliset([oikea, ...harhat])), miksi,
              solu: `${id} · ${nimi('ess', id, kaytto === 'aika' ? 'aika' : undefined)}`,
              selitys: `${valmis} = ${pt}. ${oikea}: essivo (-${oikea.slice(-2)}), ${KAYTTO[kaytto]}.` };
          }
        },
        {
          id: 't16-translatiivi', oppitunti: 't16', luokka: 'nomes', ryhma: 'Essivo e translativo', rekisteri: 'kirja', otsikko: 'Ficar, virar, em que língua: o translativo -ksi', kirjoitus: true,
          kuvaus: 'Jay tuli rohkeaksi, juhla muuttui hiljaiseksi, sano se suomeksi: a mudança com tulla e muuttua, e a língua em que se diz alguma coisa.',
          saanto: 'translativo = radical do genitivo (sem o -n) + -ksi: iloinen → iloisen → iloiseksi, jää → jääksi, suomi → suomeksi. Mudança: tulla, muuttua + -ksi. Estado: olla + forma básica (on väsynyt). Saber uma língua: partitivo (puhun suomea); em que língua se diz algo agora: suomeksi (puhun nyt suomeksi).',
          tee() {
            if (Math.random() < 0.3) {
              const [lause, id, pt] = arpa(KIELI.filter(x => S.hae(x[1])));
              const p = S.paradigma(id);
              const oikea = p.transl, part = p.part, ines = p.ines;
              if (!oikea || !part || !ines) return null;
              const miksi = {
                [pieni(id)]: `${id} é a forma básica; em que língua se diz ou escreve: ${oikea}`,
                [pieni(part)]: `${part} é a língua que se fala (puhun ${part}); dizer, escrever, traduzir em: ${oikea}`,
                [pieni(ines)]: `${ines} é “dentro de” (-ssa), a língua como assunto; em que língua se diz: ${oikea}`
              };
              const valmis = tayta(lause, oikea);
              return { kysymys: `${lause} (${id})`, kieli: 'fi-FI', puhu: valmis, oikea, avain: 'kieli:' + lause.slice(0, 8),
                vaihtoehdot: sekoita([oikea, id, part, ines]), miksi, solu: `${id} · ${nimi('transl', id, 'kieli')}`,
                selitys: `${valmis} = ${/[?!.]$/.test(pt) ? pt : pt + '.'} Em que língua? -ksi: ${oikea}.` };
            }
            const [sub, verbi, id, pt] = arpa(MUUTOS.filter(x => S.hae(x[2])));
            const p = S.paradigma(id);
            const oikea = p.transl, ess = p.ess, part = p.part;
            if (!oikea || !ess || !part) return null;
            const lause = muutosLause(sub, verbi);
            const miksi = {
              [pieni(id)]: `${id} é a forma básica (o estado: on ${id}); a mudança, depois de ${verbi}, pede -ksi: ${oikea}`,
              [pieni(ess)]: `${ess} é o essivo (-na: como? quando?); aqui alguma coisa muda: ${oikea}`,
              [pieni(part)]: `${part} é o partitivo; depois de ${verbi}, a mudança vai no translativo: ${oikea}`
            };
            const valmis = tayta(lause, oikea);
            return { kysymys: `${lause} (${id}: ${pt})`, kieli: 'fi-FI', puhu: valmis, oikea, avain: sub + ':' + id,
              vaihtoehdot: sekoita([oikea, id, ess, part]), miksi, solu: `${id} · ${nimi('transl', id)}`,
              selitys: `${valmis} = ${pt}. ${iso(verbi)} + -ksi: ${id} → ${p.gen} → ${oikea}.` };
          }
        },
        {
          // TYONKULKU 14: äänitteessä ei ole sanaa, joka paljastaisi vastauksen; vain diftongin sana erottaa lauseet.
          id: 't16-kuuntele', oppitunti: 't16', luokka: 'ouvir', ryhma: 'Ditongos ie, uo, yö', rekisteri: 'kirja', kuuntelu: true, otsikko: 'Ouça: ie, uo, yö',
          kuvaus: 'Jay juo (bebe) × Jay joi (bebeu), tie (estrada) × tee (chá), tuoli (cadeira) × tuli (fogo). Ouça a frase e escolha: o ditongo é uma sílaba só, que desliza.',
          saanto: 'ie, uo, yö = duas vogais numa sílaba só, deslizando: tie, tuoli, juo, syö, vie. No passado do tipo 2 o ditongo muda: uo → oi, yö → öi, ie → ei (juo → joi, syö → söi, vie → vei).',
          tee() {
            const [a, b, ptA, ptB, selite] = arpa(PARIT);
            const ensimmainen = Math.random() < 0.5;
            const oikea = ensimmainen ? a : b, vaara = ensimmainen ? b : a;
            const piste = s => (/[?!.]$/.test(s) ? s : s + '.');
            const miksi = { [pieni(vaara)]: `${vaara} = ${ensimmainen ? ptB : ptA}; a frase que tocou é ${oikea} (${ensimmainen ? ptA : ptB}). ${selite}.` };
            return { kysymys: 'Ouça: que frase você ouviu?', kieli: 'pt-BR', puhu: oikea, kuuntele: oikea, oikea, avain: oikea,
              vaihtoehdot: sekoita([a, b]), miksi, eiKirjoitus: true,
              selitys: `${oikea} = ${piste(ensimmainen ? ptA : ptB)} ${selite}.` };
          }
        }
      ];
    })(),
    // ==== t17: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    /* --- t17 (Jay on kadonnut, ihmisen kuvailu): adjektiivi kehonosan kanssa samassa luvussa (t17-kuvailu: siniset silmät,
       ruskea tukka), monikon genetiivi (t17-monikon-genetiivi: ystävien kanssa, vanhempien koti, talojen välissä) ja
       omistusliitteen tunnistus (t17-omistusliite: nimeni, ystäväni; vain sanat, joilla on poss.1s leksikossa). Muodot
       leksikosta (Sanasto.paradigma: nom, part, gen, mon.nom, mon.part, mon.gen, poss.1s), ei käsin. H1: väärä vaihtoehto
       eroaa oikeasta yhdellä asialla (luku tai sija). Monikon genetiivi vain sanoille, joiden konemuoto on tavallisin
       (ei mies, lapsi, nainen: kone antaa miehien, lapsien, naisien; tavallisempi on miesten, lasten, naisten). --- */
    ...(() => {
      const isolla = t => t.charAt(0).toUpperCase() + t.slice(1);
      // [substantiivi, monikossa?, adjektiivit, portugaliksi]
      const PIIRTEET = [
        ['silmä', true, ['sininen', 'ruskea', 'vihreä', 'iso'], 'olhos'],
        ['hius', true, ['vaalea', 'tumma', 'musta', 'ruskea', 'pitkä', 'lyhyt'], 'cabelo, os fios'],
        ['viiksi', true, ['musta', 'vaalea', 'harmaa', 'iso'], 'bigode'],
        ['silmälasi', true, ['iso', 'musta', 'pieni'], 'óculos'],
        ['tukka', false, ['sotkuinen', 'kihara', 'lyhyt', 'pitkä', 'vaalea', 'ruskea', 'musta', 'tyhmä'], 'cabelo, o cabelo todo'],
        ['parta', false, ['lyhyt', 'pitkä', 'harmaa', 'musta'], 'barba'],
        ['töyhtö', false, ['iso', 'vaalea'], 'topete'],
        ['paita', false, ['mustavalkoinen', 'sininen', 'punainen'], 'camisa']
      ];
      const KEHYKSET = ['Hänellä on', 'Hänellä oli', 'Maialla on', 'Marcuksella oli'];
      const kuvailu = {
        id: 't17-kuvailu', oppitunti: 't17', luokka: 'nomes', ryhma: 'Adjetivo + substantivo', rekisteri: 'kirja', otsikko: 'Descrever: siniset silmät, ruskea tukka', kirjoitus: true,
        kuvaus: 'Hänellä on ___ silmät, ___ tukka: o adjetivo no mesmo número da parte do corpo. siniset silmät, isot silmälasit, mas ruskea tukka, lyhyt parta.',
        saanto: 'plural -t por vocabulário: silmät, hiukset, viikset, silmälasit (e o adjetivo também: siniset silmät, ruskeat hiukset); no singular: tukka, parta (ruskea tukka, lyhyt parta). Na descrição simples, forma básica (Hänellä on siniset silmät); o partitivo vem na negação (Hänellä ei ole partaa).',
        tee() {
          const n = arpa(PIIRTEET.filter(([s]) => S.hae(s)));
          if (!n) return null;
          const [s, mon, adjt, pt] = n;
          const a = arpa(adjt.filter(x => S.hae(x)));
          if (!a) return null;
          const pn = S.paradigma(s), pa = S.paradigma(a);
          const sana = mon ? pn['mon.nom'] : s;
          const oikea = mon ? pa['mon.nom'] : a;
          const toinen = mon ? a : pa['mon.nom'];
          const osa = mon ? pa['mon.part'] : pa.part;
          if (!sana || !oikea || !toinen || !osa) return null;
          const kehys = arpa(KEHYKSET);
          const miksi = {
            [pieni(toinen)]: mon ? `${toinen} é singular; ${sana} (${pt}) é plural, e o adjetivo vai junto no plural: ${oikea}`
              : `${toinen} é plural; ${sana} (${pt}) é singular, e o adjetivo fica no singular: ${oikea}`,
            [pieni(osa)]: `${osa} é o partitivo (uma parte, uma quantidade); na descrição simples, forma básica: ${oikea} ${sana}`
          };
          const lause = `${kehys} ${oikea} ${sana}.`;
          return { kysymys: `${kehys} ___ ${sana}. (${a})`, kieli: 'fi-FI', puhu: lause, oikea, avain: s + '|' + a,
            vaihtoehdot: sekoita([oikea, toinen, osa]), miksi,
            solu: `${a} · ${mon ? soluNimi('mon.nom', S.harmonia(a)) : 'forma básica'}: ${oikea}`,
            selitys: `${lause} ${isolla(sana)} (${pt}) é ${mon ? 'plural' : 'singular'}, e o adjetivo vai no mesmo número.` };
        }
      };
      // [lause, sana, vihje portugaliksi (vários), yksikkö portugaliksi]
      const MG = [
        ['Maia puhuu ___ kanssa.', 'ystävä', 'com os amigos', 'um amigo só'],
        ['Marta juttelee ___ kanssa.', 'naapuri', 'com os vizinhos', 'um vizinho só'],
        ['Anderson pelaa ___ kanssa.', 'poika', 'com os meninos', 'um menino só'],
        ['Uuno ja Eenok puhuvat ___ kanssa.', 'turisti', 'com os turistas', 'um turista só'],
        ['Tämä on Maian ___ koti.', 'vanhempi', 'a casa dos pais', 'o pai ou a mãe só'],
        ['Mikä on Jayn ___ väri?', 'silmä', 'a cor dos olhos', 'um olho só'],
        ['Mikä on Andersonin ___ väri?', 'kenkä', 'a cor dos sapatos', 'um sapato só'],
        ['Äiti kirjoittaa ___ ryhmään.', 'naapuri', 'no grupo dos vizinhos', 'um vizinho só'],
        ['Auto on ___ välissä.', 'talo', 'entre as casas', 'uma casa só'],
        ['Anderson odottaa ___ takana.', 'talo', 'atrás das casas', 'uma casa só'],
        ['Uuno katsoo ___ kuvia.', 'ystävä', 'as fotos dos amigos', 'um amigo só']
      ];
      const monikonGenetiivi = {
        id: 't17-monikon-genetiivi', oppitunti: 't17', luokka: 'nomes', ryhma: 'Plural', rekisteri: 'kirja', otsikko: 'Genitivo plural: ystävien kanssa', kirjoitus: true,
        kuvaus: 'ystävien kanssa, vanhempien koti, silmien väri, talojen välissä: o genitivo de vários, com kanssa, com o dono e com as posposições.',
        saanto: 'genitivo plural: -ien, -jen, -iden (ystävien, talojen, naapureiden); vem com kanssa, antes do dono (vanhempien koti) e antes das posposições (talojen välissä). Um só: genitivo singular -n (ystävän).',
        tee() {
          const x = arpa(MG.filter(r => S.hae(r[1])));
          if (!x) return null;
          const [lause, s, vihje, yks] = x;
          const p = S.paradigma(s);
          const oikea = p['mon.gen'];
          if (!oikea) return null;
          const harhat = [p.gen, p['mon.part'], p['mon.nom']].filter(y => y && pieni(y) !== pieni(oikea));
          const miksi = {};
          if (p.gen) miksi[pieni(p.gen)] = `${p.gen} é o genitivo singular (${yks}); aqui são vários: ${oikea}`;
          if (p['mon.part']) miksi[pieni(p['mon.part'])] = `${p['mon.part']} é o partitivo plural; aqui o lugar pede o genitivo: ${oikea}`;
          if (p['mon.nom']) miksi[pieni(p['mon.nom'])] = `${p['mon.nom']} é o plural da forma básica (sujeito); aqui o lugar pede o genitivo: ${oikea}`;
          const valmis = lause.replace('___', oikea);
          return { kysymys: `${lause} (${s}: ${vihje})`, kieli: 'fi-FI', puhu: valmis, oikea, avain: s + '|' + lause,
            vaihtoehdot: vaihtoehdot(oikea, harhat), miksi, solu: `${s} · ${soluNimi('mon.gen', S.harmonia(s))}: ${oikea}`,
            selitys: `${valmis} = ${vihje}: vários, no genitivo plural.` };
        }
      };
      // [sana, portugaliksi ”o meu …”, lause minun-kehyksellä, monikossa?]
      const OMAT = [
        ['nimi', 'o meu nome', 'Minun ___ on Maia.', false],
        ['numero', 'o meu número', 'Tässä on minun ___.', false],
        ['ystävä', 'a minha amiga', 'Moara on minun ___.', false],
        ['tukka', 'o meu cabelo (tukka)', 'Minun ___ on sotkuinen.', false],
        ['hius', 'o meu cabelo (hiukset)', 'Minun ___ ovat ruskeat.', true],
        ['silmä', 'os meus olhos', 'Minun ___ ovat siniset.', true],
        ['silmälasi', 'os meus óculos', 'Missä minun ___ ovat?', true]
      ];
      const omistusliite = {
        id: 't17-omistusliite', oppitunti: 't17', luokka: 'nomes', ryhma: 'Sufixo possessivo: -ni', rekisteri: 'kirja', otsikko: 'Reconhecer o -ni: nimeni, ystäväni',
        kuvaus: 'Qual forma quer dizer “meu, minha”? nimeni (o meu nome), ystäväni (a minha amiga), silmälasini (os meus óculos). Só reconhecer.',
        saanto: '-ni no fim = meu, minha: nimeni, numeroni, ystäväni. Na escrita, minun + -ni (minun nimeni); sem -ni é a forma básica (nimi), com -n é o genitivo (nimen).',
        tee() {
          const x = arpa(OMAT.filter(r => S.hae(r[0])));
          if (!x) return null;
          const [s, pt, lause, mon] = x;
          const p = S.paradigma(s);
          const oikea = p['poss.1s'];
          const perus = mon ? p['mon.nom'] : s;
          const gen = mon ? p['mon.gen'] : p.gen;
          if (!oikea || !perus || !gen) return null;
          const miksi = {
            [pieni(perus)]: `${perus} é a forma básica${mon ? ' no plural' : ''}, sem “meu”; na fala (mun ${perus}) é comum, mas na escrita minun pede o -ni: ${oikea}`,
            [pieni(gen)]: `${gen} é o genitivo${mon ? ' plural' : ''} (“de …”), sem “meu”: ${oikea}`
          };
          if (Math.random() < 0.5) {
            return { kysymys: `“${pt}” em finlandês?`, kieli: 'pt-BR', puhu: oikea, oikea, avain: 'p|' + s,
              vaihtoehdot: sekoita([oikea, perus, gen]), miksi, solu: `${s} · ${soluNimi('poss.1s')}: ${oikea}`,
              selitys: `${oikea} = ${pt}: o -ni no fim é “meu, minha”.` };
          }
          const valmis = lause.replace('___', oikea);
          return { kysymys: `${lause} (${pt})`, kieli: 'fi-FI', puhu: valmis, oikea, avain: 'l|' + s,
            vaihtoehdot: sekoita([oikea, perus, gen]), miksi, solu: `${s} · ${soluNimi('poss.1s')}: ${oikea}`,
            selitys: `${valmis} Na escrita, minun + -ni: ${oikea}.` };
        }
      };
      return [kuvailu, monikonGenetiivi, omistusliite];
    })(),
    // ==== t18: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    /* --- t18 (pelastus ja UPA): kehonosat (t18-keho), kivun rakenteet (t18-sattuu: sattuu + illatiivi, särkee +
       partitiivi, minulla on kipeä + perusmuoto, minua sattuu), hätäkäskyt sinä/te myönteisinä ja kielteisinä
       (t18-hatakasky) sekä Situações-tilanne terveyskeskuksessa (tilanne-terveyskeskus). Muodot leksikosta
       (Sanasto.paradigma: ill, part, gen, all, imper.2s, imper.2p, kielto, imper.neg.2p, prees.2s/2p). H1: väärä vaihtoehto
       = saman sanan toinen sija (kehonosa, pronomini) tai saman verbin toinen luku, napaisuus tai toteamus (käsky). Ei
       vääriksi vaihtoehdoiksi muotoja, jotka voivat olla myös oikein: minuun sattuu, minulla on kuume, pää särkee
       (perusmuoto jätetty pois sattuu- ja särkee-kehyksistä). --- */
    ...(function () {
      const isolla = t => t.charAt(0).toUpperCase() + t.slice(1);
      // [tunniste, merkitys portugaliksi, lyhyt muoto ”dor: …”]; särkee luontevasti vain osalle (SARKEE18).
      const KEHO18 = [['pää', 'a cabeça', 'a cabeça'], ['kurkku', 'a garganta', 'a garganta'], ['rinta', 'o peito', 'o peito'],
        ['vatsa', 'a barriga', 'a barriga'], ['selkä', 'as costas', 'as costas'], ['käsi', 'a mão, o braço', 'a mão'],
        ['jalka', 'a perna, o pé', 'a perna'], ['polvi', 'o joelho', 'o joelho']];
      const SARKEE18 = ['pää', 'selkä', 'vatsa', 'jalka', 'polvi', 'käsi'];
      const keho = () => KEHO18.filter(([id]) => S.hae(id) && (p => p.ill && p.part && p.gen && p.all)(S.paradigma(id)));
      const kehoPaketti = {
        id: 't18-keho', oppitunti: 't18', luokka: 'palavras', ryhma: 'Corpo e saúde', rekisteri: 'kirja', otsikko: 'O corpo: pää, kurkku, vatsa, polvi…', kirjoitus: true,
        kuvaus: 'As partes do corpo em finlandês. Às vezes você só ouve o Jay dizer onde dói (Polveen sattuu.) e escolhe a palavra.',
        saanto: 'pää = cabeça, kurkku = garganta, rinta = peito, vatsa = barriga, selkä = costas, käsi = mão e braço, jalka = perna e pé, polvi = joelho.',
        tee() {
          const kaikki = keho();
          const [id, pt, lyhyt] = arpa(kaikki);
          const muut = sekoita(kaikki.filter(x => x[0] !== id)).slice(0, 3);
          const miksi = {};
          for (const [h, hpt] of muut) miksi[pieni(h)] = `${h} = ${hpt}`;
          if (Math.random() < 0.35) {
            // Kuuntele: Jay sanoo illatiivin (Polveen sattuu.), oppija valitsee perusmuodon; äänitteessä vain kehonosa.
            const ill = S.paradigma(id).ill;
            const lause = `${isolla(ill)} sattuu.`;
            return { kysymys: 'Ouça o Jay: onde dói? Escolha a parte do corpo.', kieli: 'pt-BR', puhu: lause, kuuntele: lause, avain: 'kuule-' + id,
              oikea: id, vaihtoehdot: sekoita([id, ...muut.map(x => x[0])]), miksi, eiKirjoitus: true,
              solu: `${id} · ${soluNimi('ill', S.harmonia(id))}: ${ill}`,
              selitys: `${lause} = dor: ${lyhyt}. ${ill} é a forma “para onde?” de ${id} (${pt}).` };
          }
          return { kysymys: `“${pt}” em finlandês?`, kieli: 'pt-BR', puhu: id, oikea: id, avain: id,
            vaihtoehdot: sekoita([id, ...muut.map(x => x[0])]), miksi, selitys: `${id} = ${pt}.` };
        }
      };
      const sattuu = {
        id: 't18-sattuu', oppitunti: 't18', luokka: 'nomes', ryhma: 'Dói: sattuu, särkee', rekisteri: 'kirja', otsikko: 'Onde dói? sattuu, särkee, kipeä', kirjoitus: true,
        kuvaus: 'Três jeitos de dizer que dói: Polveen sattuu (ilativo), Päätä särkee (partitivo), Minulla on kipeä polvi (forma básica). E a pessoa: Minua sattuu.',
        saanto: 'sattuu + ilativo (polveen sattuu) · särkee + partitivo (päätä särkee) · minulla on kipeä + forma básica (kipeä polvi) · a pessoa no partitivo: minua sattuu.',
        tee() {
          const r = Math.random();
          if (r < 0.15) {
            // Persoona partitiivissa: väärät ovat saman pronominin adessiivi, genetiivi ja perusmuoto (yksi ero: sija).
            const [pron, kehys, pt] = arpa([['minä', '___ sattuu!', 'está doendo em mim!'], ['sinä', 'Sattuuko ___?', 'está doendo em você?'], ['hän', '___ sattuu.', 'está doendo nele.']]);
            const p = S.paradigma(pron);
            const muoto = s => (kehys.startsWith('___') ? isolla(s) : s);
            const oikea = muoto(p.part);
            const miksi = {
              [pieni(p.ade)]: `${p.ade} é “quem tem?” (${p.ade} on kipeä käsi); com sattuu, a pessoa vai no partitivo: ${p.part}`,
              [pieni(p.gen)]: `${p.gen} é o genitivo (de quem?); com sattuu, o partitivo: ${p.part}`,
              [pieni(pron)]: `${pron} seria o sujeito, mas sattuu não tem sujeito: ${p.part}`
            };
            const valmis = kehys.replace('___', oikea);
            return { kysymys: `${kehys} (${pt})`, kieli: 'fi-FI', puhu: valmis, oikea, avain: 'pers-' + pron,
              vaihtoehdot: sekoita([oikea, muoto(p.ade), muoto(p.gen), muoto(pron)]), miksi, solu: `${pron} · ${soluNimi('part')}: ${p.part}`,
              selitys: `${valmis} = ${pt} Com sattua, a pessoa vai no partitivo.` };
          }
          const tapa = r < 0.5 ? 'sattuu' : r < 0.78 ? 'sarkee' : 'kipea';
          // ”Minulla on kipeä rinta” ei ole luonteva: kipeä ei rinnalle. Pää omalla sanajärjestyksellään: Minulla on pää kipeä
          // (omistaja 20.10.2026: Maialla ja Purjolla on migreeni, joten pää kipeä kuuluu mukaan).
          const lista = keho().filter(([id]) => (tapa !== 'sarkee' || SARKEE18.includes(id)) && (tapa !== 'kipea' || id !== 'rinta'));
          const [id, , lyhyt] = arpa(lista);
          const p = S.paradigma(id);
          if (tapa === 'sattuu') {
            const oikea = isolla(p.ill);
            const miksi = {
              [pieni(p.part)]: `${p.part} é o partitivo: vai com särkee; com sattuu, a forma “para onde?”: ${p.ill}`,
              [pieni(p.gen)]: `${p.gen} é o genitivo (de …); com sattuu, o ilativo: ${p.ill}`,
              [pieni(p.all)]: `${p.all} é -lle (em cima de, para alguém); o corpo é “dentro”: ${p.ill}`
            };
            return { kysymys: `___ sattuu. (dor: ${lyhyt})`, kieli: 'fi-FI', puhu: `${oikea} sattuu.`, oikea, avain: 's-' + id,
              vaihtoehdot: sekoita([oikea, isolla(p.part), isolla(p.gen), isolla(p.all)]), miksi,
              solu: `${id} · ${soluNimi('ill', S.harmonia(id))}: ${p.ill}`, selitys: `${oikea} sattuu. = dor: ${lyhyt}. sattuu + ilativo (para onde?).` };
          }
          if (tapa === 'sarkee') {
            const oikea = isolla(p.part);
            const miksi = {
              [pieni(p.ill)]: `${p.ill} é “para onde?”: vai com sattuu; com särkee, o partitivo: ${p.part}`,
              [pieni(p.gen)]: `${p.gen} é o genitivo (de …); com särkee, o partitivo: ${p.part}`,
              [pieni(p.all)]: `${p.all} é -lle (em cima de, para alguém); com särkee, o partitivo: ${p.part}`
            };
            return { kysymys: `___ särkee. (dor: ${lyhyt})`, kieli: 'fi-FI', puhu: `${oikea} särkee.`, oikea, avain: 'r-' + id,
              vaihtoehdot: sekoita([oikea, isolla(p.ill), isolla(p.gen), isolla(p.all)]), miksi,
              solu: `${id} · ${soluNimi('part')}: ${p.part}`, selitys: `${oikea} särkee. = dor: ${lyhyt}, uma dor que lateja. särkee + partitivo.` };
          }
          const miksi = {
            [pieni(p.part)]: `${p.part} é o partitivo; depois de minulla on kipeä, a forma básica: ${id}`,
            [pieni(p.ill)]: `${p.ill} vai com sattuu; com minulla on kipeä, a forma básica: ${id}`,
            [pieni(p.gen)]: `${p.gen} é o genitivo (de …); aqui a forma básica: ${id}`
          };
          if (id === 'pää') {
            return { kysymys: `Minulla on ___ kipeä. (dor: ${lyhyt})`, kieli: 'fi-FI', puhu: 'Minulla on pää kipeä.', oikea: id, avain: 'k-' + id,
              vaihtoehdot: sekoita([id, p.part, p.ill, p.gen]), miksi, solu: `${id} · forma básica`,
              selitys: 'Minulla on pää kipeä. = estou com dor de cabeça. Com pää, o kipeä vem depois. Enxaqueca: Minulla on migreeni.' };
          }
          return { kysymys: `Minulla on kipeä ___. (dor: ${lyhyt})`, kieli: 'fi-FI', puhu: `Minulla on kipeä ${id}.`, oikea: id, avain: 'k-' + id,
            vaihtoehdot: sekoita([id, p.part, p.ill, p.gen]), miksi, solu: `${id} · forma básica`,
            selitys: `Minulla on kipeä ${id}. = estou com dor (${lyhyt}). minulla on + kipeä + a forma básica.` };
        }
      };
      // [verbi, myönteinen?, sinä portugaliksi, te portugaliksi, lauseen loppu]
      const HATA = [
        ['liikkua', false, 'não se mexa!', 'não se mexam!', ''], ['puhua', false, 'não fale!', 'não falem!', ''],
        ['katsoa', false, 'não olhe para cá!', 'não olhem para cá!', ' tänne'], ['mennä', false, 'não vá para lá!', 'não vão para lá!', ' sinne'],
        ['hätäillä', false, 'não se afobe!', 'não se afobem!', ''], ['juosta', true, 'corra!', 'corram!', ''],
        ['odottaa', true, 'espere!', 'esperem!', ''], ['tulla', true, 'venha cá!', 'venham cá!', ' tänne'],
        ['kuunnella', true, 'escute!', 'escutem!', ''], ['auttaa', true, 'me ajude!', 'me ajudem!', ''],
        ['istua', true, 'sente-se!', 'sentem-se!', ''], ['levätä', true, 'descanse!', 'descansem!', '']
      ];
      const YKSI = ['Jay', 'Maia', 'Anderson', 'Malu'], KAKSI = ['Jay ja Maia', 'Maia ja Malu', 'Jay ja Anderson'];
      const hatakasky = {
        id: 't18-hatakasky', oppitunti: 't18', luokka: 'verbos', ryhma: 'Imperativo', rekisteri: 'kirja', otsikko: 'Ordens urgentes: Älä liiku! Juoskaa!', kirjoitus: true,
        kuvaus: 'Na emergência: a ordem certa para uma pessoa ou para duas, afirmativa ou negativa. Jay, älä liiku! · Jay ja Maia, juoskaa!',
        saanto: 'você: Juokse! / Älä juokse! · vocês: Juoskaa! / Älkää juosko! · a afirmação (juokset, ette juokse) não é ordem.',
        tee() {
          const [v, myon, ptS, ptT, loppu] = arpa(HATA.filter(([x]) => onVerbi(x)
            && (p => p['imper.2s'] && p['imper.2p'] && p['imper.neg.2p'] && p.kielto && p['prees.2s'] && p['prees.2p'])(S.paradigma(x))));
          const p = S.paradigma(v);
          const yksi = Math.random() < 0.5;
          const kuka = arpa((yksi ? YKSI : KAKSI).filter(x => x.split(' ja ').every(n => S.hae(n))));
          const m = {
            s: p['imper.2s'], t: p['imper.2p'], sNeg: `älä ${p.kielto}`, tNeg: `älkää ${p['imper.neg.2p']}`,
            sTot: p['prees.2s'], tTot: p['prees.2p'], sTotNeg: `et ${p.kielto}`, tTotNeg: `ette ${p.kielto}`
          };
          const oikea = yksi ? (myon ? m.s : m.sNeg) : (myon ? m.t : m.tNeg);
          const luku = yksi ? (myon ? m.t : m.tNeg) : (myon ? m.s : m.sNeg);     // väärä luku
          const napa = yksi ? (myon ? m.sNeg : m.s) : (myon ? m.tNeg : m.t);     // väärä napaisuus
          const tot = yksi ? (myon ? m.sTot : m.sTotNeg) : (myon ? m.tTot : m.tTotNeg);   // toteamus, ei käsky
          const pt = yksi ? ptS : ptT;
          const miksi = {
            [pieni(luku)]: yksi ? `${luku} é para duas ou mais pessoas; ${kuka} é uma pessoa só: ${oikea}` : `${luku} é para uma pessoa; ${kuka} são duas: ${oikea}`,
            [pieni(napa)]: myon ? `${napa} proíbe (não…!); aqui é ordem afirmativa: ${oikea}` : `${napa} manda fazer; aqui é proibição (não…!): ${oikea}`,
            [pieni(tot)]: `${tot} é afirmação (${yksi ? 'você' : 'vocês'} …), não ordem: ${oikea}`
          };
          const valmis = `${kuka}, ${oikea}${loppu}!`;
          return { kysymys: `${kuka}, ___${loppu}! (${pt})`, kieli: 'fi-FI', puhu: valmis, oikea, avain: (yksi ? 's' : 't') + (myon ? '+' : '-') + v,
            vaihtoehdot: sekoita([oikea, luku, napa, tot]), miksi,
            solu: `${v} · ${soluNimi(yksi ? 'imper.2s' : (myon ? 'imper.2p' : 'imper.neg.2p'))}`,
            selitys: `${valmis} = ${pt} ${yksi ? 'Uma pessoa' : 'Duas pessoas'}, ${myon ? 'ordem afirmativa' : 'proibição'}: ${oikea}.` };
        }
      };
      // Situações: terveyskeskus (Suomi). Hoitajan avausrepliikkiin ei tarjota kuumevastausta, koska se olisi oikein myös
      // kysymykseen ”Onko teillä kuumetta?” (H1). Oppitunti t18, jotta tilanne kuuluu oppitunnin Treeniin (vrt. t10).
      const terveyskeskus = Object.assign(tilannePaketti({ id: 'terveyskeskus', nimi: 'No centro de saúde', myyja: 'nainen5',
        kuvaus: 'No terveyskeskus finlandês: o que você tem, onde dói, febre, documento… e de repente o médico só chega às quatro.',
        askeleet: [
          { myyja: 'Hei! Mikä hätänä?', pt: 'Olá! O que houve?', tilanteet: [{ pt: 'A sua cabeça dói.', v: 'Päätäni särkee.' }, { pt: 'A sua garganta dói.', v: 'Minulla on kipeä kurkku.' }] },
          { myyja: 'Mihin sattuu?', pt: 'Onde dói?', tilanteet: [{ pt: 'O joelho dói.', v: 'Polveen.' }, { pt: 'As costas doem.', v: 'Selkään.' }, { pt: 'A barriga dói.', v: 'Vatsaan.' }] },
          { myyja: 'Onko teillä kuumetta?', pt: 'O senhor, a senhora está com febre?', tilanteet: [{ pt: 'Você está com febre.', v: 'On.' }, { pt: 'Você não está com febre.', v: 'Ei ole.' }] },
          { myyja: 'Milloin se alkoi?', pt: 'Quando começou?', tilanteet: [{ pt: 'Começou ontem.', v: 'Eilen.' }, { pt: 'Começou há dois dias.', v: 'Kaksi päivää sitten.' }] },
          { myyja: 'Henkilökortti, kiitos.', pt: 'Um documento de identidade, por favor.', tilanteet: [{ pt: 'Você entrega o documento.', v: 'Tässä.' }] },
          { myyja: 'Istukaa ja odottakaa hetki.', pt: 'Sente-se e espere um momento, por favor.', tilanteet: [{ pt: 'Tudo bem, você espera.', v: 'Selvä, odotan.' }] },
          { myyja: 'Lääkäri tulee vasta kello neljä.', pt: 'O médico só chega às quatro.', yllatys: true, tilanteet: [{ pt: 'Tudo bem, você espera.', v: 'Selvä, odotan.' }] }
        ] }), { oppitunti: 't18' });
      return [kehoPaketti, sattuu, hatakasky, terveyskeskus];
    })(),
    // ==== t19: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    /* --- t19 (Ouro Preto ja jäähyväiset): perfekti persoonittain (t19-perfekti), kielteinen perfekti (t19-perfekti-kielto),
       monikon paikallissijat (t19-monikon-sijat) ja kuuntelu: perfekti vai imperfekti, ollut vai olut (t19-kuuntele).
       Muodot taivutuskoneelta (Sanasto.paradigma: olla prees.*, part.yks, part.mon, kielto, prees.*, mon.ines … mon.all),
       ei käsin. H1: väärä vaihtoehto = olla toisessa persoonassa (sama luku), partisiippi toisessa luvussa tai saman
       verbin preesens (yksi ero: persoona, luku tai aikamuoto); kiellossa ilman olea (kielteinen imperfekti) tai
       preesensin kieltomuoto; sijoissa sama sija yksikössä tai sama monikko toisessa paikallissijassa (yksi ero: luku
       tai sija). Kieltopaketti käyttää vain kehyksiä ilman kokonaisobjektia (kielto vaihtaisi objektin partitiiviin). --- */
    ...(function () {
      const isolla = t => t.charAt(0).toUpperCase() + t.slice(1);
      // [verbi, loppuosa, portugaliksi (perusmuoto), sopii kieltoon]: lauseet, jotka sopivat kaikille persoonille.
      const PERF = [
        ['käydä', 'Ouro Pretossa', 'ir a Ouro Preto', true], ['käydä', 'saunassa', 'ir à sauna', true],
        ['olla', 'Brasiliassa', 'estar no Brasil', true], ['nähdä', 'vuolukiveä', 'ver pedra-sabão', true],
        ['nähdä', 'kultaisen kirkon', 'ver a igreja de ouro', false], ['syödä', 'mangoa', 'comer manga', true],
        ['juoda', 'kahvia', 'tomar café', true], ['oppia', 'portugalia', 'aprender português', true],
        ['puhua', 'suomea', 'falar finlandês', true], ['tulla', 'Suomeen', 'vir para a Finlândia', true],
        ['ostaa', 'postikortin', 'comprar um cartão-postal', false], ['kirjoittaa', 'Purjolle', 'escrever para a Purjo', true],
        ['tavata', 'Uunon', 'encontrar o Uuno', false], ['kävellä', 'paljon', 'andar muito', true]
      ];
      const OLLA = () => S.paradigma('olla');
      const kelpaa = ([v]) => onVerbi(v) && (p => p['part.yks'] && p['part.mon'] && p.kielto && p['prees.1s'])(S.paradigma(v));
      // Sama luku, toinen persoona (H1: yksi ero).
      const TOINEN = { '1s': '2s', '2s': '1s', '3s': '2s', '1p': '2p', '2p': '1p', '3p': '1p' };
      const perfekti = {
        id: 't19-perfekti', oppitunti: 't19', luokka: 'verbos', ryhma: 'Perfeito: olen käynyt', rekisteri: 'kirja', otsikko: 'O perfeito: olen käynyt, olemme nähneet', kirjoitus: true,
        kuvaus: 'Já fiz, até agora: olla no presente + particípio. Minä olen käynyt, me olemme käyneet, hän on nähnyt.',
        saanto: 'perfeito = olla (olen, olet, on, olemme, olette, ovat) + particípio: -nut/-nyt no singular (olen käynyt), -neet no plural (olemme käyneet).',
        tee() {
          const [v, loppu, pt] = arpa(PERF.filter(kelpaa));
          const k = arpa(PERS);
          const p = S.paradigma(v), o = OLLA();
          const yks = k[1] === 's';
          const part = p[yks ? 'part.yks' : 'part.mon'], toinen = p[yks ? 'part.mon' : 'part.yks'];
          const oikea = `${o['prees.' + k]} ${part}`;
          // Te + yksikön partisiippi (Te olette käynyt) on oikein teititeltäessä: ei harhaksi 2p:lle.
          const vPers = `${o['prees.' + TOINEN[k]]} ${part}`, vLuku = k === '2p' ? null : `${o['prees.' + k]} ${toinen}`;
          // Preesens harhana vain, kun se ei ole myös imperfekti (oppia: opin = aprendo ja aprendi).
          const vNyt = pieni(p['prees.' + k]) !== pieni(p['imperf.' + k]) ? p['prees.' + k] : null;
          const miksi = {
            [pieni(vPers)]: `pessoa errada: ${o['prees.' + TOINEN[k]]} vai com ${P[TOINEN[k]]} (${PT_PRON[TOINEN[k]]}); com ${P[k]}: ${oikea}`,
            [pieni(vLuku)]: `${toinen} é o particípio ${yks ? 'do plural (nós, vocês, eles)' : 'do singular (eu, você, ele)'}; com ${P[k]}: ${part}`
          };
          if (vNyt) miksi[pieni(vNyt)] = `${vNyt} é o presente (agora); “já …, até agora” pede o perfeito: ${oikea}`;
          const lause = `${isolla(P[k])} ${oikea} ${loppu}.`;
          return { kysymys: `${isolla(P[k])} ___ ${loppu}. (${v} · já, até agora)`, kieli: 'fi-FI', puhu: lause, oikea, avain: v + ':' + loppu + ':' + k,
            vaihtoehdot: sekoita(yksilolliset([oikea, vPers, vLuku, vNyt].filter(Boolean))), miksi,
            solu: `${v} · ${soluNimi(yks ? 'part.yks' : 'part.mon')}`,
            selitys: `${lause} = ${PT_PRON[k]} + já + ${pt}: olla (${o['prees.' + k]}) + particípio (${part}).` };
        }
      };
      const perfektiKielto = {
        id: 't19-perfekti-kielto', oppitunti: 't19', luokka: 'verbos', ryhma: 'Perfeito: olen käynyt', rekisteri: 'kirja', otsikko: 'Ainda não: en ole käynyt, emme ole nähneet', kirjoitus: true,
        kuvaus: 'Do perfeito afirmativo para o negativo: minä olen käynyt → minä en ole käynyt, me olemme nähneet → me emme ole nähneet.',
        saanto: 'perfeito negativo = en, et, ei, emme, ette, eivät + ole + particípio (-nut/-nyt, plural -neet). Sem ole é o passado negativo (en käynyt).',
        tee() {
          const [v, loppu, pt] = arpa(PERF.filter(x => x[3] && kelpaa(x)));
          const k = arpa(PERS);
          const p = S.paradigma(v), o = OLLA();
          const yks = k[1] === 's', ei = KIELLOT[k];
          const part = p[yks ? 'part.yks' : 'part.mon'], toinen = p[yks ? 'part.mon' : 'part.yks'];
          const oikea = `${ei} ole ${part}`;
          const vLuku = k === '2p' ? null : `${ei} ole ${toinen}`, vImperf = `${ei} ${part}`, vNyt = `${ei} ${p.kielto}`;
          const miksi = {
            [pieni(vLuku)]: `${toinen} é o particípio ${yks ? 'do plural (nós, vocês, eles)' : 'do singular (eu, você, ele)'}; com ${ei} (${PT_PRON[k]}): ${part}`,
            [pieni(vImperf)]: `${vImperf} é o passado negativo (não fiz, num momento certo); o perfeito negativo tem ole: ${oikea}`,
            [pieni(vNyt)]: `${vNyt} é o presente negativo (agora); o perfeito negativo: ${oikea}`
          };
          const lause = `${isolla(P[k])} ${oikea} ${loppu}.`;
          return { kysymys: `${isolla(P[k])} ${o['prees.' + k]} ${part} ${loppu}. → ${isolla(P[k])} ___ ${loppu}. (negação)`, kieli: 'fi-FI', puhu: lause, oikea, avain: v + ':' + loppu + ':' + k,
            vaihtoehdot: sekoita(yksilolliset([oikea, vLuku, vImperf, vNyt].filter(Boolean))), miksi,
            solu: `${v} · ${soluNimi(yks ? 'part.yks' : 'part.mon')}`,
            selitys: `${lause} = ${PT_PRON[k]}: ainda não / nunca + ${pt}. ${ei} (a pessoa) + ole + ${part} (o particípio${yks ? '' : ' plural'}).` };
        }
      };
      // Monikon paikallissijat: [sana, portugaliksi monikossa, suku]; sisa → ines/ela/ill, ulko → ade/abl/all.
      const PAIKAT19 = [
        ['kirkko', 'igrejas', 'f'], ['museo', 'museus', 'm'], ['kaupunki', 'cidades', 'f'], ['talo', 'casas', 'f'],
        ['kauppa', 'lojas', 'f'], ['sauna', 'saunas', 'f'], ['ravintola', 'restaurantes', 'm'],
        ['hotelli', 'hotéis', 'm'], ['tori', 'feiras', 'f'], ['katu', 'ruas', 'f']
      ];
      const SIJAT19 = { sisa: ['ines', 'ela', 'ill'], ulko: ['ade', 'abl', 'all'] };
      // Kehys sijan suunnan mukaan (0 = missä, 1 = mistä, 2 = mihin): suomeksi ja portugaliksi.
      const KEHYS19 = [['Turistit ovat ___.', 'os turistas estão', s => (s === 'f' ? 'nas' : 'nos')],
        ['Turistit tulevat ___.', 'os turistas vêm', s => (s === 'f' ? 'das' : 'dos')],
        ['Turistit menevät ___.', 'os turistas vão', s => (s === 'f' ? 'para as' : 'para os')]];
      const SUUNTA_PT = ['onde?', 'de onde?', 'para onde?'];
      const monikonSijat = {
        id: 't19-monikon-sijat', oppitunti: 't19', luokka: 'nomes', ryhma: 'Plural', rekisteri: 'kirja', otsikko: 'No plural: kirkoissa, museoista, saunoihin', kirjoitus: true,
        kuvaus: 'Os casos de lugar no plural: -i- antes da terminação. kirkossa → kirkoissa (nas igrejas), kirkoista (das igrejas), kirkkoihin (para as igrejas); torilla → toreilla.',
        saanto: 'plural de lugar = radical + -i- + terminação: -issa, -ista, -ihin (ou -iin); -illa, -ilta, -ille. Consoante fraca como no singular (kirkoissa), forte em -ihin (kirkkoihin).',
        tee() {
          const ok = PAIKAT19.filter(([s]) => { const r = S.hae(s); return r && SIJAT19[r.paikka] && SIJAT19[r.paikka].every(c => S.paradigma(s)['mon.' + c] && S.paradigma(s)[c]); });
          const [s, ptMon, suku] = arpa(ok);
          const sijat = SIJAT19[S.hae(s).paikka];
          const i = Math.floor(Math.random() * 3);
          const p = S.paradigma(s), c = sijat[i];
          const oikea = p['mon.' + c];
          const [kehys, ptVerbi, prep] = KEHYS19[i];
          const ptFrase = `${prep(suku)} ${ptMon}`;
          const miksi = { [pieni(p[c])]: `${p[c]} é o singular (uma só); “${ptFrase}” é plural: ${oikea}` };
          const muut = sijat.filter(x => x !== c).map(x => p['mon.' + x]);
          sijat.forEach((x, j) => { if (x !== c) miksi[pieni(p['mon.' + x])] = `${p['mon.' + x]} = ${KEHYS19[j][2](suku)} ${ptMon} (${SUUNTA_PT[j]}); aqui: ${SUUNTA_PT[i]}`; });
          const lause = kehys.replace('___', oikea);
          return { kysymys: `${kehys} (${s} → “${ptFrase}”)`, kieli: 'fi-FI', puhu: lause, oikea, avain: s + ':' + c,
            vaihtoehdot: sekoita(yksilolliset([oikea, p[c], ...muut])), miksi,
            solu: `${s} · ${soluNimi('mon.' + c)}`, selitys: `${lause} = ${ptVerbi} ${ptFrase}: ${oikea} (${soluNimi('mon.' + c)}).` };
        }
      };
      // [perfekti, imperfekti, portugaliksi perfekti, portugaliksi imperfekti]: sama lause, vain aikamuoto vaihtuu.
      // TYONKULKU 14: äänitteessä ei ajan sanaa; vain verbi erottaa lauseet.
      const PARIT19 = [
        ['Olemme käyneet kirkossa.', 'Kävimme kirkossa.', 'nós já fomos à igreja (até agora)', 'nós fomos à igreja (num momento certo)'],
        ['Jay on nähnyt kultaisen kirkon.', 'Jay näki kultaisen kirkon.', 'o Jay já viu a igreja de ouro', 'o Jay viu a igreja de ouro (num momento certo)'],
        ['Oletko syönyt?', 'Söitkö?', 'você já comeu?', 'você comeu? (num momento certo)'],
        ['Hän on ollut Brasiliassa.', 'Hän oli Brasiliassa.', 'ele já esteve no Brasil', 'ele estava no Brasil'],
        ['Olen lukenut kirjan.', 'Luin kirjan.', 'eu já li o livro', 'eu li o livro (num momento certo)'],
        ['He ovat tulleet kotiin.', 'He tulivat kotiin.', 'eles já vieram para casa', 'eles vieram para casa (num momento certo)'],
        ['Uuno on ostanut kupin.', 'Uuno osti kupin.', 'o Uuno já comprou a xícara', 'o Uuno comprou a xícara (num momento certo)'],
        ['Emme ole menneet saunaan.', 'Emme menneet saunaan.', 'nós (ainda) não fomos à sauna', 'nós não fomos à sauna (num momento certo)']
      ];
      const kuuntele = {
        id: 't19-kuuntele', oppitunti: 't19', luokka: 'ouvir', ryhma: 'Perfeito ou passado', rekisteri: 'kirja', kuuntelu: true, otsikko: 'Ouça: perfeito ou passado? ollut ou olut?',
        kuvaus: 'Olemme käyneet × kävimme: o perfeito tem olla + particípio. E ollut (particípio de olla, com ll) × olut (cerveja, com um l só).',
        saanto: 'perfeito = olla + particípio (olemme käyneet, on nähnyt); passado = um verbo só com -i- (kävimme, näki). ollut tem ll longo; olut (cerveja) tem um l curto.',
        tee() {
          if (Math.random() < 0.25 && S.hae('olut') && S.paradigma('olla')['part.yks'] === 'ollut') {
            const sana = Math.random() < 0.5 ? 'ollut' : 'olut', toinen = sana === 'ollut' ? 'olut' : 'ollut';
            const pt = { ollut: 'estado, sido (particípio de olla: ll longo)', olut: 'cerveja (um l só, curto)' };
            return { kysymys: 'Ouça: qual palavra?', kieli: 'pt-BR', puhu: sana, kuuntele: sana, oikea: sana, avain: 'olut:' + sana,
              vaihtoehdot: ['ollut', 'olut'], miksi: { [toinen]: `${toinen} = ${pt[toinen]}; a palavra que tocou: ${sana}` }, eiKirjoitus: true,
              selitys: `${sana} = ${pt[sana]}.` };
          }
          const [perf, imp, ptPerf, ptImp] = arpa(PARIT19);
          const perfektina = Math.random() < 0.5;
          const oikea = perfektina ? perf : imp, vaara = perfektina ? imp : perf;
          const miksi = { [pieni(vaara)]: perfektina ? `${vaara} = ${ptImp} (passado); a frase que tocou é o perfeito: ${oikea}`
            : `${vaara} = ${ptPerf} (perfeito); a frase que tocou é o passado: ${oikea}` };
          return { kysymys: 'Ouça: perfeito ou passado?', kieli: 'pt-BR', puhu: oikea, kuuntele: oikea, oikea, avain: oikea,
            vaihtoehdot: [perf, imp], miksi, eiKirjoitus: true,
            selitys: `${oikea} = ${perfektina ? ptPerf : ptImp} (${perfektina ? 'perfeito' : 'passado'}).` };
        }
      };
      return [perfekti, perfektiKielto, monikonSijat, kuuntele];
    })(),
    // ==== t20: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    /* --- Konjunktiot (omistaja 21.10.2026: ”Add treino pack to few conjunction heavy lessons”): t12 (vaikka, siksi, kuten),
       t16 (vaan, kun, tai) ja t20 (joten, jos). Lauseet ovat oppitunnin omia tai sen sanoista; portugalinkielinen vihje
       kiinnittää merkityksen, joten vain yksi konjunktio on oikein. H1: väärät vaihtoehdot ovat saman oppitunnin
       konjunktioita, jotka eivät käy tähän merkitykseen (vaikka-lausetta ei tarjota mutta-lauseen harhaksi eikä
       päinvastoin; kysymyksessä ”tai” olisi ”vai”, joten tai-lauseet ovat väitteitä). Gramática: h-konjunktiot. --- */
    ...(function () {
      const MERK = {
        ja: 'e', mutta: 'mas', tai: 'ou', 'että': 'que (o que se diz, pensa, sabe, vê)', koska: 'porque', kun: 'quando',
        jos: 'se (condição)', vaan: 'e sim, mas sim (só depois de uma negação)', vaikka: 'mesmo que, embora',
        siksi: 'por isso', kuten: 'como (por exemplo, assim como)', joten: 'então, portanto'
      };
      // [lause (___ = aukko), oikea, väärät, portugaliksi]
      const LAUSEET = {
        t12: [
          ['Se on paras paita, ___ otan sen.', 'siksi', ['vaikka', 'kuten'], 'Ela é a melhor camisa, por isso eu levo.'],
          ['Käytän Brasiliassa paljon rahaa, ___ en osta lahjoja.', 'siksi', ['vaikka', 'että'], 'Eu uso muito dinheiro no Brasil, por isso não compro presentes.'],
          ['Pane takki päälle, ___ on kuuma!', 'vaikka', ['siksi', 'koska'], 'Ponha o casaco, mesmo que esteja calor!'],
          ['Vaatteet, ___ paidat ja shortsit, ovat täällä halpoja.', 'kuten', ['vaikka', 'että'], 'As roupas, como as camisas e os shorts, são baratas aqui.'],
          ['Paita on kaunis, ___ se on kallis.', 'mutta', ['siksi', 'kuten'], 'A camisa é bonita, mas é cara.'],
          ['Ostan paidan, ___ se on halpa.', 'koska', ['vaikka', 'kuten'], 'Compro a camisa porque ela é barata.'],
          ['Tiedän, ___ Maia rakastaa keramiikkaa.', 'että', ['koska', 'kuten'], 'Eu sei que a Maia ama cerâmica.']
        ],
        t16: [
          ['En ole väsynyt, ___ iloinen!', 'vaan', ['mutta', 'koska'], 'Não estou cansado, e sim feliz!'],
          ['Tulen iloiseksi, ___ aurinko paistaa.', 'kun', ['koska', 'vaan'], 'Eu fico feliz quando faz sol.'],
          ['Tulen hulluksi, ___ Hiisi ajaa.', 'kun', ['että', 'vaikka'], 'Eu fico louca quando o Hiisi dirige.'],
          ['Nukuin vain vähän, ___ musiikki oli niin hyvää.', 'koska', ['kun', 'vaan'], 'Dormi só um pouco, porque a música era tão boa.'],
          ['Juhla on lopussa, ___ Walker soittaa yhä.', 'mutta', ['vaan', 'koska'], 'A festa está no fim, mas o Walker ainda toca.'],
          ['Mies näkee, ___ Jay nauraa.', 'että', ['vaan', 'tai'], 'O homem vê que o Jay está rindo.'],
          ['Juhla on lauantaina ___ sunnuntaina.', 'tai', ['vaan', 'että'], 'A festa é no sábado ou no domingo.']
        ],
        t20: [
          ['Sataa, ___ emme ui.', 'joten', ['jos', 'vaikka'], 'Está chovendo, então não nadamos.'],
          ['Aloitan huomenna, ___ nyt lepään.', 'joten', ['vaikka', 'kuten'], 'Começo amanhã, então agora eu descanso.'],
          ['Emme ui, ___ saunomme.', 'vaan', ['mutta', 'joten'], 'Não nadamos, e sim fazemos sauna.'],
          ['Täällä on kaunista, ___ vesi on liian kylmää.', 'mutta', ['joten', 'jos'], 'Aqui é lindo, mas a água é fria demais.'],
          ['Mene hetkeksi ulos, ___ sinulla on liian kuuma.', 'jos', ['vaikka', 'joten'], 'Saia um momento, se estiver quente demais.'],
          ['Kesällä, ___ juhannuksena, saunotaan paljon.', 'kuten', ['jos', 'vaan'], 'No verão, como no juhannus, se faz muita sauna.'],
          ['Uin meressä ___ järvessä.', 'tai', ['vaan', 'kuten'], 'Eu nado no mar ou no lago.'],
          ['Purjo toivoo, ___ tulette taas.', 'että', ['jos', 'kun'], 'A Purjo espera que vocês venham de novo.']
        ]
      };
      const SAANTO = 'A conjunção liga duas frases, e a ordem das palavras não muda depois dela. Vírgula antes de mutta, vaan, että, koska, kun, jos, vaikka e joten; ja e tai sem vírgula. vaan só depois de uma negação.';
      const paketti = (o, otsikko, kuvaus) => ({
        id: `${o}-konjunktiot`, oppitunti: o, luokka: 'palavras', ryhma: 'Conjunções', rekisteri: 'kirja', otsikko, kuvaus, saanto: SAANTO,
        tee() {
          const [lause, oikea, vaarat, pt] = arpa(LAUSEET[o]);
          const valmis = lause.replace('___', oikea);
          const miksi = {};
          for (const v of vaarat) miksi[v] = `${v} = ${MERK[v]}; aqui a frase diz “${pt}”: ${oikea} = ${MERK[oikea]}`;
          return { kysymys: `${lause} (${pt})`, kieli: 'fi-FI', puhu: valmis, oikea, avain: `${o}:${lause.slice(0, 14)}`,
            vaihtoehdot: sekoita([oikea, ...vaarat]), miksi, solu: `${oikea} · conjunção: ${MERK[oikea]}`,
            selitys: `${valmis} = ${pt} ${oikea} = ${MERK[oikea]}.` };
        }
      });
      return [
        paketti('t12', 'Mas, por isso, mesmo que: mutta, siksi, vaikka', 'Se on paras paita, siksi otan sen. Pane takki päälle, vaikka on kuuma! Escolha a conjunção que dá o sentido da frase em português.'),
        paketti('t16', 'Quando, porque, e sim: kun, koska, vaan', 'Tulen iloiseksi, kun aurinko paistaa. En ole väsynyt, vaan iloinen! Escolha a conjunção que dá o sentido da frase em português.'),
        paketti('t20', 'Então, se, ou: joten, jos, tai', 'Sataa, joten emme ui. Mene ulos, jos sinulla on kuuma. Escolha a conjunção que dá o sentido da frase em português.')
      ];
    })(),
    /* --- t20 (kesä Suomessa): passiivi preesens (t20-passiivi), konditionaali persoonittain (t20-konditionaali),
       jos-lause: kuviteltu (konditionaali) vai mahdollinen (preesens) (t20-jos) ja kuuntelu: passiivi, me-muoto vai
       konditionaali (t20-kuuntele). Muodot taivutuskoneelta (Sanasto.paradigma: pass, prees.*, imperf.*, kond.*), ei
       käsin; passiivi vain verbeille, joiden tietueessa on pass (muut jätetään pois). H1: passiivissa väärä vaihtoehto =
       saman verbin hän- tai he-muoto tai perusmuoto (yksi ero: muoto; kehyksessä ei subjektia, vihje ”se …”);
       konditionaalissa sama verbi preesensissä, imperfektissä tai toisessa persoonassa; jos-lauseessa sama verbi toisessa
       tavassa, imperfektissä tai toisessa persoonassa (vihje imaginado / possível ratkaisee tavan). --- */
    ...(function () {
      const isolla = t => t.charAt(0).toUpperCase() + t.slice(1);
      // Passiivin muodostus portugaliksi verbityypin mukaan (sama sääntö kuin oppitunnin Gramáticassa).
      function passTapa(v) {
        const r = S.hae(v) || {}, t = (r.t || {}).tyyppi, pass = S.paradigma(v).pass;
        if (t === 1) {
          const vart = String(r.t.p1s || '').replace(/n$/, '');
          const ae = /[aä]$/.test(vart) ? `; o -${vart.slice(-1)} do radical vira e` : '';
          return `tipo 1: radical do “eu” (${r.t.p1s} → ${vart}-) + -taan/-tään${ae} (${v} → ${pass})`;
        }
        return `tipo ${t}: infinitivo + -an/-än (${v} → ${pass})`;
      }
      // [verbi, kehys (___ = verbi; ei subjektia), portugaliksi impessoal ”se …”]
      const PASS20 = [
        ['saunoa', 'Suomessa ___ paljon.', 'na Finlândia se faz muita sauna'],
        ['uida', 'Saunan jälkeen ___ meressä.', 'depois da sauna se nada no mar'],
        ['puhua', 'Korppoossa ___ ruotsia.', 'em Korppoo se fala sueco'],
        ['kalastaa', 'Laiturilla ___ aamulla.', 'no píer se pesca de manhã'],
        ['grillata', 'Rannalla ___ makkaraa.', 'na praia se assa linguiça'],
        ['tanssia', 'Juhlissa ___.', 'nas festas se dança'],
        ['laulaa', 'Juhannuksena ___ paljon.', 'no juhannus se canta muito'],
        ['juhlia', 'Juhannusta ___ mökillä.', 'o juhannus se comemora na casa de campo'],
        ['viettää', 'Kesää ___ mökillä.', 'o verão se passa na casa de campo'],
        ['mennä', 'Juhannuksena ___ mökille.', 'no juhannus se vai para a casa de campo'],
        ['heittää', 'Saunassa ___ löylyä.', 'na sauna se joga água nas pedras'],
        ['polttaa', 'Juhannuksena ___ kokko.', 'no juhannus se acende a fogueira'],
        ['ajaa', 'Suomessa ___ oikealla.', 'na Finlândia se dirige pela direita']
      ];
      const passiivi = {
        id: 't20-passiivi', oppitunti: 't20', luokka: 'verbos', ryhma: 'Passivo: saunotaan', rekisteri: 'kirja', otsikko: 'O passivo: Suomessa saunotaan', kirjoitus: true,
        kuvaus: 'O que se faz, sem dizer quem: Suomessa saunotaan (na Finlândia se faz sauna), Saunan jälkeen uidaan meressä (depois da sauna se nada no mar).',
        saanto: 'passivo: tipo 1 = radical do “eu” + -taan/-tään (sauno- → saunotaan; -a/-ä vira e: heitä- → heitetään); outros tipos = infinitivo + -an/-än (uida → uidaan, mennä → mennään). Uma forma só, sem pessoa.',
        tee() {
          // Harhat: hän- ja he-muoto (vaativat subjektin) ja perusmuoto; me-muotoa ei tarjota, koska se on oikeaa suomea
          // (”me saunomme”) ja eroaa vain merkitykseltään (kielikatselmointi 20.10.2026).
          const [v, kehys, pt] = arpa(PASS20.filter(([x]) => onVerbi(x) && (p => p.pass && p['prees.3s'] && p['prees.3p'])(S.paradigma(x))));
          const p = S.paradigma(v);
          const oikea = p.pass, v3s = p['prees.3s'], v3p = p['prees.3p'];
          const miksi = {
            [pieni(v3p)]: `${v3p} é “eles, elas” e pede sujeito (he ${v3p}); sem sujeito, “se …”: o passivo ${oikea}`,
            [pieni(v)]: `${v} é a forma básica (infinitivo); a frase precisa do verbo conjugado: o passivo ${oikea}`
          };
          // kalastaa, heittää: hän-muoto = perusmuoto (yksi vaihtoehto, yksi selitys).
          miksi[pieni(v3s)] = pieni(v3s) === pieni(v)
            ? `${v} é a forma básica e também “ele, ela” (hän ${v3s}), que pede sujeito; sem sujeito, “se …”: o passivo ${oikea}`
            : `${v3s} é “ele, ela” e pede sujeito (hän ${v3s}); sem sujeito, “se …”: o passivo ${oikea}`;
          const lause = kehys.replace('___', oikea);
          return { kysymys: `${kehys} (${v} · “${pt}”)`, kieli: 'fi-FI', puhu: lause, oikea, avain: v + ':' + kehys,
            vaihtoehdot: sekoita(yksilolliset([oikea, v3s, v3p, v])), miksi,
            solu: `${v} · ${soluNimi('pass')}`, selitys: `${lause} = ${pt}. ${passTapa(v)}.` };
        }
      };
      // [verbi, loppuosa, portugaliksi]: päälause kehyksessä ”Jos olisi kesä, …” (sopii kaikille persoonille).
      const KOND20 = [
        ['uida', 'meressä', 'nadar no mar'], ['saunoa', 'joka ilta', 'fazer sauna toda noite'],
        ['kalastaa', 'laiturilla', 'pescar no píer'], ['asua', 'mökillä', 'morar na casa de campo'],
        ['nukkua', 'laiturilla', 'dormir no píer'], ['syödä', 'makkaraa', 'comer linguiça'],
        ['juoda', 'kahvia ulkona', 'tomar café lá fora'], ['mennä', 'Hankoon', 'ir a Hanko'],
        ['tulla', 'Suomeen', 'vir para a Finlândia'], ['grillata', 'rannalla', 'grelhar na praia'],
        ['puhua', 'suomea', 'falar finlandês'], ['tanssia', 'koko yön', 'dançar a noite inteira']
      ];
      const TOINEN20 = { '1s': '2s', '2s': '1s', '3s': '1s', '1p': '2p', '2p': '1p', '3p': '3s' };
      const konditionaali = {
        id: 't20-konditionaali', oppitunti: 't20', luokka: 'verbos', ryhma: 'Condicional: haluaisin', rekisteri: 'kirja', otsikko: 'Eu faria: o condicional em todas as pessoas', kirjoitus: true,
        kuvaus: 'Jos olisi kesä… (se fosse verão…): minä uisin, sinä uisit, me uisimme. O condicional com -isi- e a terminação da pessoa.',
        saanto: 'condicional = radical forte do “ele” + -isi- + terminação: asuu → asuisin, nukkuu → nukkuisin, tulee → tulisin (o e cai); syö → söisin, juo → joisin, ui → uisin; tehdä, nähdä: tekee → tekisin, näkee → näkisin. O presente (uimme) e o passado (ui, uimme) não são “…ria”.',
        tee() {
          const [v, loppu, pt] = arpa(KOND20.filter(([x]) => onVerbi(x) && (p => p['kond.1s'] && p['imperf.1s'] && p['prees.1s'])(S.paradigma(x))));
          const k = arpa(PERS);
          const p = S.paradigma(v);
          const oikea = p['kond.' + k];
          const nyt = p['prees.' + k], enn = p['imperf.' + k], toinen = p['kond.' + TOINEN20[k]];
          const miksi = {};
          if (pieni(nyt) !== pieni(oikea)) miksi[pieni(nyt)] = `${nyt} é o presente (${PT_PRON[k]}); depois de “jos olisi kesä”, algo imaginado: o condicional ${oikea}`;
          if (pieni(enn) !== pieni(oikea) && pieni(enn) !== pieni(nyt)) miksi[pieni(enn)] = `${enn} é o passado (${PT_PRON[k]}); para “…ria”, o condicional: ${oikea}`;
          if (pieni(toinen) !== pieni(oikea)) miksi[pieni(toinen)] = `pessoa errada: ${toinen} vai com ${P[TOINEN20[k]]} (${PT_PRON[TOINEN20[k]]}); aqui: ${P[k]}`;
          const lause = `Jos olisi kesä, ${P[k]} ${oikea} ${loppu}.`;
          return { kysymys: `Jos olisi kesä, ${P[k]} ___ ${loppu}. (${v} · “…ria”)`, kieli: 'fi-FI', puhu: lause, oikea, avain: v + ':' + k,
            vaihtoehdot: sekoita(yksilolliset([oikea, nyt, enn, toinen])), miksi,
            solu: `${v} · ${soluNimi('kond.' + k)}`,
            selitys: `${lause} = se fosse verão, ${PT_PRON[k]} + ${pt}, no condicional (“…ria”): ${oikea}.` };
        }
      };
      /* Jos-lause: kuviteltu (konditionaali molemmissa osissa) vai mahdollinen (preesens tai käsky päälauseessa, preesens
         jos-lauseessa). Päälause ratkaisee. [kehys (___ = jos-lauseen verbi), verbi, muodon persoona, kuviteltu?,
         portugaliksi, väärän persoonan harha tai null] */
      const JOS20 = [
        ['Jos minulla ___ mökki, asuisin siellä joka kesä.', 'olla', '3s', true, 'se eu tivesse uma casa de campo, moraria lá todos os verões', '1s'],
        ['Jos meillä ___ rahaa, ostaisimme veneen.', 'olla', '3s', true, 'se nós tivéssemos dinheiro, compraríamos um barco', '1p'],
        ['Jos sinulla ___ aikaa huomenna, mennään Hankoon!', 'olla', '3s', false, 'se você tiver tempo amanhã, vamos a Hanko!', '2s'],
        ['Jos huomenna ___, saunomme koko päivän.', 'sataa', '3s', false, 'se chover amanhã, fazemos sauna o dia inteiro', null],
        ['Jos Hiisi ___ hitaasti, olisimme vielä Helsingissä.', 'ajaa', '3s', true, 'se o Hiisi dirigisse devagar, ainda estaríamos em Helsinque', '1s'],
        ['Jos sinä ___ Suomessa, saunoisit joka päivä.', 'asua', '2s', true, 'se você morasse na Finlândia, faria sauna todo dia', '1s'],
        ['Jos te ___ Korppooseen, tulkaa mökille!', 'tulla', '2p', false, 'se vocês vierem a Korppoo, venham para a casa de campo!', '1p'],
        ['Jos Marta ___ suomea, hän puhuisi Purjolle.', 'osata', '3s', true, 'se a Marta soubesse finlandês, ela falaria com a Purjo', '1s'],
        ['Jos Anderson ___ saunaan, hänelle tulee kuuma.', 'mennä', '3s', false, 'se o Anderson for à sauna, ele vai sentir calor', '1s']
      ];
      const jos = {
        id: 't20-jos', oppitunti: 't20', luokka: 'verbos', ryhma: 'Se…: jos', rekisteri: 'kirja', otsikko: 'Se eu tivesse × se eu tiver: jos + condicional ou presente', kirjoitus: true,
        kuvaus: 'Imaginado: Jos minulla olisi mökki, asuisin siellä (em geral, condicional nas duas partes). Possível: Jos huomenna sataa, saunomme (presente). Quem fala decide; a pista diz qual dos dois.',
        saanto: 'quem fala decide: imaginado (“se eu tivesse”) = condicional no jos, e em geral também na outra parte (olisi … asuisin); possível (“se chover, se você tiver”) = presente no jos, e na outra parte presente, ordem ou um condicional educado (sataa … saunomme; on aikaa … voisimme mennä). O passado não serve para “se eu tivesse”.',
        tee() {
          const [kehys, v, k, kuviteltu, pt, vk] = arpa(JOS20.filter(x => onVerbi(x[1]) && (p => p['kond.' + x[2]] && p['prees.' + x[2]] && p['imperf.' + x[2]])(S.paradigma(x[1]))));
          const p = S.paradigma(v);
          const kond = p['kond.' + k], nyt = p['prees.' + k], enn = p['imperf.' + k];
          const oikea = kuviteltu ? kond : nyt, toinenTapa = kuviteltu ? nyt : kond;
          const vPers = vk ? p[(kuviteltu ? 'kond.' : 'prees.') + vk] : null;
          const miksi = {
            [pieni(toinenTapa)]: kuviteltu
              ? `${nyt} é o presente: serve para o possível (“se chover”, “se você tiver”). Aqui é imaginado (“${pt}”): ${kond}`
              : `${kond} é o condicional, para o imaginado (“se eu tivesse”). Aqui é possível (“${pt}”): ${nyt}`
          };
          if (pieni(enn) !== pieni(oikea) && pieni(enn) !== pieni(toinenTapa)) miksi[pieni(enn)] = `${enn} é o passado (algo que aconteceu); aqui o “se” ${kuviteltu ? 'imagina: condicional, ' + kond : 'fala de algo possível: presente, ' + nyt}`;
          if (vPers && pieni(vPers) !== pieni(oikea)) miksi[pieni(vPers)] = `pessoa errada: ${vPers} vai com ${P[vk]} (${PT_PRON[vk]})${v === 'olla' && k === '3s' ? '; em “minulla on, meillä on” o verbo fica sempre na forma de “ele”' : ''}`;
          const lause = kehys.replace('___', oikea);
          return { kysymys: `${kehys} (${v} · ${kuviteltu ? 'imaginado' : 'possível'})`, kieli: 'fi-FI', puhu: lause, oikea, avain: kehys,
            vaihtoehdot: sekoita(yksilolliset([oikea, toinenTapa, enn, vPers].filter(Boolean))), miksi,
            solu: `${v} · ${soluNimi((kuviteltu ? 'kond.' : 'prees.') + k)}`,
            selitys: `${lause} = ${pt}${/[.!?]$/.test(pt) ? '' : '.'} ${kuviteltu ? 'Imaginado: condicional no jos (e em geral também na outra parte)' : 'Possível: presente no jos'}.` };
        }
      };
      // [verbi, alku, loppu]: sama lause passiivina, me-muotona ja konditionaalina (TYONKULKU 14: vain verbi vaihtuu).
      const KUULE20 = [['saunoa', 'Mökillä', ''], ['kalastaa', 'Laiturilla', 'aamulla'], ['grillata', 'Rannalla', 'makkaraa'],
        ['tanssia', 'Juhlissa', ''], ['puhua', 'Korppoossa', 'ruotsia'], ['heittää', 'Saunassa', 'löylyä'], ['uida', 'Saunan jälkeen', 'meressä']];
      const LAJIT20 = [['pass', 'passivo: sem pessoa, “se …”'], ['prees.1p', 'presente com “nós” (-mme)'], ['kond.1p', 'condicional com “nós” (-isimme)']];
      const kuuntele = {
        id: 't20-kuuntele', oppitunti: 't20', luokka: 'ouvir', ryhma: 'Passivo, presente ou condicional', rekisteri: 'kirja', kuuntelu: true,
        otsikko: 'Ouça: saunotaan, saunomme ou saunoisimme?',
        kuvaus: 'Três formas que soam parecidas: o passivo (saunotaan, sem pessoa), o presente com nós (saunomme) e o condicional com nós (saunoisimme). Ouça e escolha a frase.',
        saanto: 'passivo termina em -taan/-tään (ou -daan, -laan, -naan…: uidaan, ollaan, mennään); atenção: osaan, grillaan também terminam em -aan, mas são “eu”; “nós” no presente termina em -mme (saunomme); o condicional tem -isi- antes do -mme (saunoisimme). Na fala, me saunotaan = nós fazemos sauna.',
        tee() {
          const [v, alku, loppu] = arpa(KUULE20.filter(([x]) => onVerbi(x) && (p => p.pass && p['prees.1p'] && p['kond.1p'])(S.paradigma(x))));
          const p = S.paradigma(v);
          const lauseet = LAJIT20.map(([s, nimi]) => ({ lause: `${alku} ${p[s]}${loppu ? ' ' + loppu : ''}.`, nimi, muoto: p[s] }));
          const valittu = arpa(lauseet);
          const miksi = {};
          for (const x of lauseet) if (x !== valittu) miksi[pieni(x.lause)] = `${x.muoto} = ${x.nimi}; a frase que tocou tem ${valittu.muoto} (${valittu.nimi})`;
          return { kysymys: 'Ouça: qual frase?', kieli: 'pt-BR', puhu: valittu.lause, kuuntele: valittu.lause, oikea: valittu.lause, avain: v + ':' + valittu.muoto,
            vaihtoehdot: sekoita(lauseet.map(x => x.lause)), miksi, eiKirjoitus: true,
            selitys: `${valittu.lause} ${valittu.muoto} = ${valittu.nimi}.` };
        }
      };
      return [passiivi, konditionaali, jos, kuuntele];
    })(),
    // ==== k04: Treeni-paketit (lisää tämän rivin perään; OPPITUNNIT_6_20.md §8) ====
    /* ---------- Aihesanasto (omistaja 18.10.2026: värit, kuukaudet…; oppitunti: null = auki alusta asti) ----------
       Suljetut sarjat ja tavallisimmat sanat. Kysymys portugaliksi tai kuvana (väri, järjestys), vastaus suomeksi. */
    {
      id: 'aihe-luvut', oppitunti: null, luokka: 'palavras', ryhma: 'Números', rekisteri: 'kirja', otsikko: 'Números 11–20', kirjoitus: true,
      kuvaus: 'yksitoista, kaksitoista… kaksikymmentä. Veja o número e escolha a palavra.',
      saanto: '11–19 = número + -toista (yksitoista, kaksitoista…); 20 = kaksikymmentä (kaksi + kymmentä).',
      tee() {
        const L = [['yksitoista', 11], ['kaksitoista', 12], ['kolmetoista', 13], ['neljätoista', 14], ['viisitoista', 15], ['kuusitoista', 16],
          ['seitsemäntoista', 17], ['kahdeksantoista', 18], ['yhdeksäntoista', 19], ['kaksikymmentä', 20]].filter(x => S.hae(x[0]));
        const [s, n] = arpa(L);
        const miksi = {};
        for (const [x, m] of L) if (x !== s) miksi[pieni(x)] = `${x} = ${m}`;
        return { kysymys: String(n), kieli: 'pt-BR', puhu: s, oikea: s, vaihtoehdot: vaihtoehdot(s, L.map(x => x[0])), miksi, selitys: `${n} = ${s}.` };
      }
    },
    {
      id: 'aihe-paivat', oppitunti: null, luokka: 'palavras', ryhma: 'Dias e meses', rekisteri: 'kirja', otsikko: 'Dias da semana', kirjoitus: true,
      kuvaus: 'maanantai, tiistai… sunnuntai: o nome do dia e a ordem da semana.',
      saanto: 'A semana começa na segunda: maanantai, tiistai, keskiviikko, torstai, perjantai, lauantai, sunnuntai.',
      tee() {
        const D = ['maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai', 'sunnuntai'];
        const i = Math.floor(Math.random() * 7), s = D[i];
        const miksi = {};
        for (const x of D) if (x !== s) miksi[x] = `${x} = ${merkitys(x)}`;
        if (Math.random() < 0.5) {
          return { kysymys: `“${merkitys(s)}” em finlandês?`, kieli: 'pt-BR', puhu: s, oikea: s, vaihtoehdot: vaihtoehdot(s, D), miksi, selitys: `${s} = ${merkitys(s)}.` };
        }
        const ed = D[(i + 6) % 7];
        return { kysymys: `${ed} → ?`, kieli: 'fi-FI', puhu: s, oikea: s, vaihtoehdot: vaihtoehdot(s, D), miksi,
          selitys: `Depois de ${ed} (${merkitys(ed)}) vem ${s} (${merkitys(s)}).` };
      }
    },
    {
      id: 'aihe-kuukaudet', oppitunti: null, luokka: 'palavras', ryhma: 'Dias e meses', rekisteri: 'kirja', otsikko: 'Os meses', kirjoitus: true,
      kuvaus: 'tammikuu… joulukuu: todos terminam em -kuu (kuu = lua, mês).',
      saanto: 'Os meses terminam em -kuu: tammikuu (1), helmikuu (2), maaliskuu (3) … joulukuu (12).',
      tee() {
        const M = ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'];
        const i = Math.floor(Math.random() * 12), s = M[i];
        const miksi = {};
        for (const [j, x] of M.entries()) if (x !== s) miksi[x] = `${x} = ${merkitys(x)} (${j + 1})`;
        const tapa = Math.random();
        if (tapa < 0.4) return { kysymys: `“${merkitys(s)}” em finlandês?`, kieli: 'pt-BR', puhu: s, oikea: s, vaihtoehdot: vaihtoehdot(s, M), miksi, selitys: `${s} = ${merkitys(s)}.` };
        if (tapa < 0.7) return { kysymys: `${i + 1}º mês`, kieli: 'pt-BR', puhu: s, oikea: s, vaihtoehdot: vaihtoehdot(s, M), miksi, selitys: `O ${i + 1}º mês: ${s} (${merkitys(s)}).` };
        const ed = M[(i + 11) % 12];
        return { kysymys: `${ed} → ?`, kieli: 'fi-FI', puhu: s, oikea: s, vaihtoehdot: vaihtoehdot(s, M), miksi, selitys: `Depois de ${ed} vem ${s} (${merkitys(s)}).` };
      }
    },
    {
      id: 'aihe-varit', oppitunti: null, luokka: 'palavras', ryhma: 'Cores', rekisteri: 'kirja', otsikko: 'As cores', kirjoitus: true,
      kuvaus: 'musta, valkoinen, punainen, sininen… Veja a cor e escolha a palavra.',
      saanto: 'As cores básicas: musta, valkoinen, punainen, sininen, vihreä, keltainen, ruskea, harmaa.',
      tee() {
        const V = [['musta', '#1b1b1b'], ['valkoinen', '#ffffff'], ['punainen', '#d62828'], ['sininen', '#1d4ed8'], ['vihreä', '#2e9d4a'],
          ['keltainen', '#f5c518'], ['ruskea', '#7a4a24'], ['harmaa', '#8a8f94']].filter(x => S.hae(x[0]));
        const [s, vari] = arpa(V);
        const miksi = {};
        for (const [x] of V) if (x !== s) miksi[x] = `${x} = ${merkitys(x)}`;
        const kuva = Math.random() < 0.6;
        return { kysymys: kuva ? 'Que cor é esta?' : `“${merkitys(s)}” em finlandês?`, vari: kuva ? vari : null, avain: kuva ? s : '', kieli: 'pt-BR', puhu: s, oikea: s,
          vaihtoehdot: vaihtoehdot(s, V.map(x => x[0])), miksi, selitys: `${s} = ${merkitys(s)}.` };
      }
    },
    {
      id: 'aihe-ruoka', oppitunti: null, luokka: 'palavras', ryhma: 'Comida e bebida', rekisteri: 'kirja', otsikko: 'Comida e bebida', kirjoitus: true,
      kuvaus: 'kahvi, vesi, leipä, juusto, keitto, salaatti… as palavras do café, do mercado e do almoço.',
      saanto: 'comida e bebida: kahvi, tee, maito, vesi, mehu, leipä, juusto, keitto, salaatti, kala, liha…',
      tee() {
        const R = ['kahvi', 'tee', 'maito', 'vesi', 'mehu', 'olut', 'viini', 'leipä', 'voileipä', 'pulla', 'kakku', 'juusto', 'suklaa', 'keitto',
          'salaatti', 'kala', 'liha', 'kana', 'peruna', 'riisi', 'muna', 'omena', 'banaani', 'hampurilainen'].filter(x => S.hae(x));
        const s = arpa(R);
        const miksi = {};
        for (const x of R) if (x !== s) miksi[x] = `${x} = ${merkitys(x)}`;
        return { kysymys: `“${merkitys(s)}” em finlandês?`, kieli: 'pt-BR', puhu: s, oikea: s, vaihtoehdot: vaihtoehdot(s, R), miksi,
          selitys: `${s} = ${merkitys(s)}; um pouco de…: ${S.paradigma(s).part}.` };
      }
    },
    /* ---------- AV-033 b (omistaja 23.10.2026): aihepaketit kellonajat, sää, ammatit, paikat ja luvut 21–100 ----------
       Toisin kuin yllä olevat (oppitunti: null), nämä sidotaan oppituntiin, joka opettaa aiheen kieliopin: luvut 21–100
       t03 (”Preços e números 11–100”), sää t09, kellonajat t10, ammatit t07, paikat t14 (sanat apteekki, museo, pankki,
       hotelli, puisto: o = t14). Ennen sitä paketti näkyy himmeänä (app.js). Väärät vaihtoehdot eroavat yhdellä asialla. */
    {
      id: 'aihe-luvut-100', oppitunti: 't03', luokka: 'palavras', ryhma: 'Números', rekisteri: 'kirja', otsikko: 'Números 21–100', kirjoitus: true,
      kuvaus: 'kaksikymmentäyksi, kolmekymmentäviisi… sata. Dezena + kymmentä + unidade, tudo junto numa palavra.',
      saanto: 'dezenas: número + kymmentä (kolmekymmentä = 30); 21–99: dezena + unidade numa palavra só (kolmekymmentäviisi = 35); 100 = sata.',
      tee() {
        const luku = n => window.Kurssi.profiili.luku(n);
        const n = 21 + Math.floor(Math.random() * 80);
        const s = luku(n);
        if (!S.hae(s)) return null;
        // H1: sama kymmen, eri ykkönen (n ± 1) tai sama ykkönen, eri kymmen (n ± 10), tai numerot toisin päin (35 ↔ 53).
        const k = Math.floor(n / 10), y = n % 10;
        const muut = [n + 1, n - 1, n + 10, n - 10, y ? y * 10 + k : 0].filter(m => m >= 21 && m <= 100 && m !== n && S.hae(luku(m)));
        const syy = m => (Math.floor(m / 10) === k ? 'a dezena está certa, a unidade não' : m % 10 === y ? 'a unidade está certa, a dezena não' : 'os números estão trocados');
        const miksi = {};
        for (const m of muut) { miksi[pieni(luku(m))] = `${luku(m)} = ${m}: ${syy(m)}`; miksi[String(m)] = `${m} = ${luku(m)}: ${syy(m)}`; }
        if (Math.random() < 0.5) return { kysymys: String(n), kieli: 'pt-BR', puhu: s, oikea: s, avain: 'sana' + n, vaihtoehdot: vaihtoehdot(s, muut.map(luku)), miksi, selitys: `${n} = ${s}.` };
        return { kysymys: s, kieli: 'fi-FI', puhu: s, kuuntele: s, oikea: String(n), avain: 'nro' + n, vaihtoehdot: vaihtoehdot(String(n), muut.map(String)), miksi, eiKirjoitus: true, selitys: `${s} = ${n}.` };
      }
    },
    {
      id: 'aihe-kellonajat', oppitunti: 't10', luokka: 'palavras', ryhma: 'Horas', rekisteri: 'kirja', otsikko: 'Horas do dia: 24 horas, aamulla, illalla', kirjoitus: true,
      kuvaus: 'No horário (trem, voo, loja) se usa o relógio de 24 horas: kello kuusitoista = 16h. Na conversa: kello neljä + aamulla, päivällä, illalla ou yöllä.',
      saanto: 'relógio de 24 horas: 13 = kolmetoista … 23 = kaksikymmentäkolme; período do dia: aamulla (de manhã), päivällä (de dia), illalla (à noite, até umas 22h), yöllä (de madrugada).',
      tee() {
        const luku = n => window.Kurssi.profiili.luku(n);
        if (Math.random() < 0.55) {
          // 24 tunnin kello: tunti 13–23 → sana. Harhat: sama tunti 12 tunnin kellossa sanana (16 → kuusi: ”-toista” puuttuu) ja tunti ± 1.
          const h = 13 + Math.floor(Math.random() * 11);
          const oikea = luku(h);
          const muut = [h - 10, h + 1, h - 1].filter(m => m > 0 && m <= 23 && S.hae(luku(m)));
          const miksi = {};
          for (const m of muut) miksi[pieni(luku(m))] = m === h - 10 ? `${luku(m)} = ${m}: ${h} é ${oikea}` : `${luku(m)} = ${m}.00: a hora está errada`;
          return { kysymys: `${h}.00 → Kello on ___.`, kieli: 'pt-BR', puhu: `Kello on ${oikea}.`, oikea, avain: 'h' + h,
            vaihtoehdot: vaihtoehdot(oikea, muut.map(luku)), miksi, solu: 'relógio de 24 horas', selitys: `${h}.00 = kello ${oikea}.` };
        }
        // Vuorokaudenaika: kellonaika ja portugalinkielinen vihje kiinnittävät ajan; vaihtoehdot ovat neljä aikaa (sama sija).
        const AJAT = [['aamu', 'de manhã', [7, 8, 9]], ['päivä', 'de dia', [12, 1, 2]], ['ilta', 'à noite', [7, 8, 9]], ['yö', 'de madrugada', [2, 3, 4]]].filter(x => S.hae(x[0]));
        const [sana, pt, tunnit] = arpa(AJAT);
        const t = arpa(tunnit);
        const p = S.paradigma(sana);
        const oikea = p.ade;
        const KELLO = { aamu: t, 'päivä': t === 12 ? 12 : t + 12, ilta: t + 12, 'yö': t };
        const miksi = {};
        for (const [x, xpt] of AJAT) if (x !== sana) miksi[pieni(S.paradigma(x).ade)] = `${S.paradigma(x).ade} = ${xpt}; ${KELLO[sana]}h é ${pt}`;
        return { kysymys: `Kello ${luku(t)} ___ (${KELLO[sana]}h, ${pt})`, kieli: 'fi-FI', puhu: `Kello ${luku(t)} ${oikea}.`, oikea, avain: sana + t,
          vaihtoehdot: sekoita(AJAT.map(x => S.paradigma(x[0]).ade)), miksi, solu: `${sana} · quando? -lla/-llä`,
          selitys: `Kello ${luku(t)} ${oikea} = ${KELLO[sana]}h (${pt}).` };
      }
    },
    {
      id: 'aihe-saa', oppitunti: 't09', luokka: 'palavras', ryhma: 'Tempo e estações', rekisteri: 'kirja', otsikko: 'Como está o tempo? Sataa, aurinko paistaa…', kirjoitus: true,
      kuvaus: 'Frases curtas de tempo: Sataa. Sataa lunta. Aurinko paistaa. On kylmä. On pakkasta. On kaksikymmentä astetta.',
      saanto: 'chover = sataa (sem sujeito: Sataa.); nevar = sataa lunta; “está frio” = on kylmä; abaixo de zero = pakkasta (partitivo).',
      tee() {
        // [suomeksi, portugaliksi, ryhmä]: saman ryhmän lauseet eivät ole toistensa harhoja (lämmin ~ kuuma: H1).
        const L = [['Sataa.', 'Está chovendo.', 'sade'], ['Sataa lunta.', 'Está nevando.', 'lumi'], ['Aurinko paistaa.', 'Faz sol.', 'aurinko'],
          ['On kylmä.', 'Está frio.', 'kylma'], ['On pakkasta.', 'Está abaixo de zero.', 'kylma'], ['On lämmin.', 'Está quentinho, agradável.', 'lammin'],
          ['On kuuma.', 'Está muito calor.', 'lammin'], ['On kaksikymmentä astetta.', 'Faz vinte graus.', 'aste'], ['On kymmenen astetta pakkasta.', 'Faz dez graus abaixo de zero.', 'kylma']];
        const [fi, pt, r] = arpa(L);
        const muut = L.filter(x => x[2] !== r);
        const miksi = {};
        for (const [x, xpt] of muut) miksi[pieni(x)] = `${x} = ${xpt.replace(/\.$/, '')}`;
        return { kysymys: `“${pt}”`, kieli: 'pt-BR', puhu: fi, oikea: fi, avain: fi, vaihtoehdot: vaihtoehdot(fi, muut.map(x => x[0])), miksi, selitys: `${fi} = ${pt}` };
      }
    },
    {
      id: 'aihe-ammatit', oppitunti: 't07', luokka: 'palavras', ryhma: 'Profissões', rekisteri: 'kirja', otsikko: 'Onde trabalha? Profissões e lugares', kirjoitus: true,
      kuvaus: 'Opettaja on töissä koulussa. Kokki on töissä ravintolassa. Quem trabalha onde, e onde trabalha quem.',
      saanto: 'olla töissä + onde? -ssa/-ssä: Opettaja on töissä koulussa (o professor trabalha na escola).',
      tee() {
        // [ammatti, paikka]; sama paikka kahdelle (sairaala) → toinen ei ole harha (H1: ei toista oikeaa vastausta).
        const PARIT = [['opettaja', 'koulu'], ['kokki', 'ravintola'], ['laborantti', 'laboratorio'], ['myyjä', 'kauppa'], ['lääkäri', 'sairaala'],
          ['sairaanhoitaja', 'sairaala'], ['toimittaja', 'lehti']].filter(([a, b]) => S.hae(a) && S.hae(b));
        const [ammatti, paikka] = arpa(PARIT);
        const ines = x => S.paradigma(x).ines;
        const iso = x => x.charAt(0).toUpperCase() + x.slice(1);
        const miksi = {};
        if (Math.random() < 0.5) {
          const muut = PARIT.filter(x => x[1] !== paikka);
          for (const [a, b] of muut) miksi[pieni(ines(b))] = `${ines(b)} = ${merkitys(b).split(',')[0]}: ali trabalha ${a} (${merkitys(a).split(',')[0]})`;
          return { kysymys: `${iso(ammatti)} on töissä ___. (${merkitys(ammatti).split(',')[0]})`, kieli: 'fi-FI', puhu: `${iso(ammatti)} on töissä ${ines(paikka)}.`,
            oikea: ines(paikka), avain: ammatti + ':paikka', vaihtoehdot: vaihtoehdot(ines(paikka), muut.map(x => ines(x[1]))), miksi,
            solu: `${paikka} · ${soluNimi('ines', S.harmonia(paikka))}`, selitys: `${iso(ammatti)} on töissä ${ines(paikka)} = ${merkitys(ammatti).split(',')[0]} trabalha em: ${merkitys(paikka).split(',')[0]}.` };
        }
        const muut = PARIT.filter(x => x[1] !== paikka);
        for (const [a, b] of muut) miksi[pieni(a)] = `${a} = ${merkitys(a).split(',')[0]}: trabalha ${ines(b)}`;
        return { kysymys: `___ on töissä ${ines(paikka)}. (${merkitys(paikka).split(',')[0]})`, kieli: 'fi-FI', puhu: `${iso(ammatti)} on töissä ${ines(paikka)}.`,
          oikea: iso(ammatti), avain: ammatti + ':kuka', vaihtoehdot: vaihtoehdot(iso(ammatti), muut.map(x => iso(x[0]))), miksi,
          selitys: `${iso(ammatti)} on töissä ${ines(paikka)} (${merkitys(ammatti).split(',')[0]}).` };
      }
    },
    {
      id: 'aihe-paikat', oppitunti: 't14', luokka: 'palavras', ryhma: 'Lugares na cidade', rekisteri: 'kirja', otsikko: 'Lugares na cidade: Mihin menet?', kirjoitus: true,
      kuvaus: 'kirjasto, apteekki, pankki, asema, museo… O nome do lugar e para onde você vai: kirjastoon, asemalle.',
      saanto: 'para onde? lugar fechado: -aan, -oon, -iin… (kirjastoon, apteekkiin); estação, praça, aeroporto: -lle (asemalle, torille, lentokentälle).',
      tee() {
        // [paikka, mitä oppija haluaa]: tarkoitus kiinnittää paikan; vaihtoehdot ovat muiden paikkojen suuntamuodot (yksi ero: paikka).
        const P2 = [['kirjasto', 'Você quer pegar um livro emprestado.'], ['apteekki', 'Você precisa de um remédio.'], ['asema', 'Você vai pegar o trem.'],
          ['ravintola', 'Você quer jantar fora.'], ['kahvila', 'Você quer um café e um pão doce.'], ['museo', 'Você quer ver arte e história.'],
          ['hotelli', 'Você precisa de um quarto para dormir.'], ['sairaala', 'Você quebrou a perna.'], ['pankki', 'Você precisa falar com alguém sobre o seu dinheiro.'],
          ['puisto', 'Você quer passear entre as árvores.'], ['lentokenttä', 'Você vai viajar de avião.'], ['tori', 'Você quer comprar frutas na feira, ao ar livre.']].filter(x => S.hae(x[0]));
        const [s, tarkoitus] = arpa(P2);
        const r = S.hae(s);
        const minne = x => { const p = S.paradigma(x); return S.hae(x).paikka === 'ulko' ? p.all : p.ill; };
        const miksi = {};
        if (Math.random() < 0.45) {
          for (const [x] of P2) if (x !== s) miksi[pieni(x)] = `${x} = ${merkitys(x).split(',')[0]}`;
          return { kysymys: `“${merkitys(s).split(',')[0]}” em finlandês?`, kieli: 'pt-BR', puhu: s, oikea: s, avain: s, vaihtoehdot: vaihtoehdot(s, P2.map(x => x[0])), miksi,
            selitys: `${s} = ${merkitys(s)}; para lá: ${minne(s)}.` };
        }
        const oikea = minne(s);
        for (const [x] of P2) if (x !== s) miksi[pieni(minne(x))] = `${minne(x)} = para ${merkitys(x).split(',')[0]}`;
        return { kysymys: `${tarkoitus} → Menen ___.`, kieli: 'pt-BR', puhu: `Menen ${oikea}.`, oikea, avain: s + ':minne',
          vaihtoehdot: vaihtoehdot(oikea, P2.filter(x => x[0] !== s).map(x => minne(x[0]))), miksi,
          solu: `${s} · ${r.paikka === 'ulko' ? soluNimi('all', S.harmonia(s)) : soluNimi('ill', S.harmonia(s))}`,
          selitys: `Menen ${oikea}: ${r.paikka === 'ulko' ? 'estação, praça e aeroporto usam -lle' : 'lugar fechado: para dentro'} (${merkitys(s).split(',')[0]}).` };
      }
    },
    /* ---------- AV-036: sijamuotojen lajitteluruudukko Treenin pakettityyppinä (k.ruudukko, aja → ruudukkoNakyma) ----------
       Oppitunti = se, joka opettaa käytetyt sijat (Kasitteet.OPETUS): t06 sisäpaikallissijat (kaksi sanaa rinnakkain),
       t07 sisä- ja ulkopaikallissijat, t17 mikä?/minkä?/mitä? yksikkö ja monikko (mon.nom t09, mon.part t11, mon.gen t17),
       t19 sisäpaikallissijat yksikkö ja monikko (mon.ines, mon.ela, mon.ill t19). Kierros on 4 ruudukkoa. vaihtoehdot =
       ruudukon muodot (tarkistus M: jokainen on leksikon muoto). */
    ...(function () {
      const PAIKKA3 = [['missa', 'missä?', 'ines'], ['mista', 'mistä?', 'ela'], ['mihin', 'mihin?', 'ill']];
      const ULKO3 = ['ade', 'abl', 'all'];
      const muoto = (id, solu) => { const p = S.paradigma(id) || {}; return p[solu] || null; };
      function ruudukko(rivit, sarakkeet, solut, otsikko, sanaSelitys) {
        const kaikki = solut.flat();
        if (kaikki.some(x => !x) || new Set(kaikki.map(pieni)).size !== kaikki.length) return null;   // puuttuva tai kaksi samaa muotoa
        return { ruudukko: { rivit, sarakkeet, solut }, sanat: sekoita(kaikki), kysymys: otsikko, kieli: 'pt-BR', avain: sanaSelitys,
          oikea: rivit.map((r, i) => `${r.nimi} ${solut[i].join(' / ')}`).join(' · '), vaihtoehdot: kaikki, puhu: kaikki.join(', '), eiKirjoitus: false,
          selitys: `${sanaSelitys}: ${rivit.map((r, i) => `${r.nimi} ${solut[i].join(', ')}`).join('; ')}.` };
      }
      // Ruudukko ei synny, jos sanalta puuttuu muoto tai kaksi ruutua saisi saman muodon: uusi sana (enintään 20 yritystä).
      const toista = f => { for (let i = 0; i < 20; i++) { const k = f(); if (k) return k; } return null; };
      const SISA_SANAT = ['kirjasto', 'kauppa', 'kahvila', 'sauna', 'metsä', 'järvi', 'studio', 'talo', 'kirja', 'Helsinki', 'Kuusamo', 'Espoo', 'Oodi', 'toimisto', 'mökki'];
      return [
        {
          id: 'ruudukko-t06', oppitunti: 't06', luokka: 'nomes', ryhma: 'Tabela dos casos', rekisteri: 'kirja', otsikko: 'Tabela: missä, mistä, mihin?', kirjoitus: true, kierros: 4,
          kuvaus: 'Duas palavras, três perguntas: coloque cada forma na casa certa (kirjastossa, kirjastosta, kirjastoon…).',
          saanto: 'missä? (onde?) -ssa/-ssä · mistä? (de onde?) -sta/-stä · mihin? (para onde?) -aan, -oon, -iin…, -han, -hön…, -seen.',
          tee() { return toista(() => {
            const [a, b] = sekoita(SISA_SANAT.filter(x => S.hae(x))).slice(0, 2);
            const f = (id, k) => { const p = S.paradigma(id) || {}; return p[k[0]] || p[k[2]]; };   // nimetty kolmikko (koti) tai sija
            return ruudukko(PAIKKA3.map(x => ({ nimi: x[1] })), [{ nimi: a, kieli: 'fi-FI' }, { nimi: b, kieli: 'fi-FI' }],
              PAIKKA3.map(k => [f(a, k), f(b, k)]), `Coloque as formas de ${a} e ${b} na tabela.`, `${a} + ${b}`);
          }); }
        },
        {
          id: 'ruudukko-t07', oppitunti: 't07', luokka: 'nomes', ryhma: 'Tabela dos casos', rekisteri: 'kirja', otsikko: 'Tabela: dentro (-ssa) ou em cima, junto (-lla)?', kirjoitus: true, kierros: 4,
          kuvaus: 'järvessä (dentro do lago) × järvellä (no lago, de barco); mökissä × mökillä. Seis formas, seis casas.',
          saanto: 'dentro: -ssa, -sta, -aan/-oon… · em cima, junto, num lugar aberto: -lla, -lta, -lle.',
          tee() { return toista(() => {
            // Sanat, joille molemmat sarjat ovat luontevia (K8): järvessä/järvellä, mökissä/mökillä, talossa/talolla…
            const s = arpa(['järvi', 'mökki', 'talo', 'kauppa', 'sauna', 'kirjasto'].filter(x => S.hae(x)));
            return ruudukko(PAIKKA3.map(x => ({ nimi: x[1] })), [{ nimi: 'dentro (-ssa…)' }, { nimi: 'em cima, junto (-lla…)' }],
              PAIKKA3.map((k, i) => [muoto(s, k[2]), muoto(s, ULKO3[i])]), `Coloque as formas de ${s} (${merkitys(s).split(',')[0]}) na tabela.`, s);
          }); }
        },
        {
          id: 'ruudukko-t17', oppitunti: 't17', luokka: 'nomes', ryhma: 'Tabela dos casos', rekisteri: 'kirja', otsikko: 'Tabela: mikä?, minkä?, mitä? no singular e no plural', kirjoitus: true, kierros: 4,
          kuvaus: 'talo, talon, taloa · talot, talojen, taloja: a forma básica, o genitivo e o partitivo, singular e plural.',
          saanto: 'singular: talo, talon, taloa · plural: talot (-t), talojen (-jen/-en/-ien), taloja (-ja/-ia/-a).',
          tee() { return toista(() => {
            const s = arpa(['talo', 'kirja', 'kissa', 'auto', 'kenkä', 'kauppa', 'ystävä', 'kuva', 'lapsi', 'kivi', 'huone', 'nainen'].filter(x => S.hae(x)));
            const RIVIT = [['nom', 'mon.nom', 'mikä? mitkä?'], ['gen', 'mon.gen', 'minkä? (de …)'], ['part', 'mon.part', 'mitä? (parte)']];
            return ruudukko(RIVIT.map(x => ({ nimi: x[2] })), [{ nimi: 'singular' }, { nimi: 'plural' }],
              RIVIT.map(x => [muoto(s, x[0]), muoto(s, x[1])]), `Coloque as formas de ${s} (${merkitys(s).split(',')[0]}) na tabela.`, s);
          }); }
        },
        {
          id: 'ruudukko-t19', oppitunti: 't19', luokka: 'nomes', ryhma: 'Tabela dos casos', rekisteri: 'kirja', otsikko: 'Tabela: missä, mistä, mihin? no singular e no plural', kirjoitus: true, kierros: 4,
          kuvaus: 'kirkossa, kirkoissa · museosta, museoista · saunaan, saunoihin. O plural ganha -i- antes da terminação.',
          saanto: 'plural dos casos de lugar: radical + -i- + terminação: kirkoissa, museoista, saunoihin (-ihin, -isiin).',
          tee() { return toista(() => {
            const s = arpa(['kirkko', 'museo', 'sauna', 'kauppa', 'talo', 'kirjasto', 'huone', 'järvi', 'mökki', 'kahvila', 'hotelli'].filter(x => S.hae(x)));
            return ruudukko(PAIKKA3.map(x => ({ nimi: x[1] })), [{ nimi: 'singular' }, { nimi: 'plural' }],
              PAIKKA3.map(k => [muoto(s, k[2]), muoto(s, 'mon.' + k[2])]), `Coloque as formas de ${s} (${merkitys(s).split(',')[0]}) na tabela.`, s);
          }); }
        }
      ];
    })(),
  ];

  /* Kierroksen ajaminen. apu: app.js:n apufunktiot (el, sana, ohjain, arvioi, hyvaksytty, ilmoitaTulos, valmis). */
  function aja(pk, paikka, apu) {
    const { el } = apu;
    // Oma kierros (AV-033 d): ensin valinta (luokat, oppituntiin asti, tila), sitten kierros koostepaketilla.
    if (pk.valitsin) return valitsin(pk, paikka, apu);
    // Ääni (auditointi 5 C2): app.js antaa voiPuhua, eiAanta, eiAantaIlmoitus, toast ja kirjaaTulos; puuttuva ei kaada mitään.
    const fn = n => (typeof apu[n] === 'function' ? apu[n] : null);
    const voiPuhua = () => { try { return fn('voiPuhua') ? !!apu.voiPuhua() : true; } catch (e) { return true; } };
    let kirjoitus = false;
    try { const v = localStorage.getItem('tottakai-kirjoitustila'); kirjoitus = !!pk.kirjoitus && (v === 'true' || v === '1'); } catch (e) { /* oletus */ }   // JSON-totuusarvo; vanha '1' kelpaa (A6-31)
    // Koostepaketin kiinteä tila (oma kierros): 'napautus' | 'kirjoitus' | 'kuuntelu'; silloin ei ✍-valintaa.
    if (pk.tila) kirjoitus = pk.tila === 'kirjoitus';
    let kohta = 0, oikein = 0, ohitetut = 0;
    // Puhe roolin äänellä (Situações: myyjä, Maia), muuten kertoja kuten ennen.
    const jonoksi = (teksti, r, kohde) => (r ? [{ teksti, tyyppi: r.tyyppi, vaihto: r.vaihto, el: kohde || null }] : apu.sana(teksti, kohde || null));
    const KIERROKSELLA = pk.kierros || KIERROS;   // ruudukko: 4 (yksi ruudukko on kuusi vastausta)
    const kysymykset = [];
    if (typeof pk.kysymykset === 'function') {
      // Koostepaketti (Revisão, oma kierros): kysymykset tulevat muista paketeista; k._pk = lähdepaketti.
      try { kysymykset.push(...(pk.kysymykset(KIERROKSELLA) || []).filter(k => k && k.oikea)); } catch (e) { /* tyhjä kierros */ }
    } else {
      const nahdyt = new Set();
      for (let i = 0; kysymykset.length < KIERROKSELLA && i < 60; i++) {
        // Paketin sana puuttuu leksikosta → kysymys jää pois (ei arvausta).
        let k = null;
        try { k = pk.tee(); } catch (e) { k = null; }
        if (!k || !k.oikea) continue;
        // Sama kysymys kerran kierroksella; kuuntelukysymyksillä sama teksti, joten tunnus = teksti + avain (vastaus).
        const tunnus = k.kysymys + '|' + (k.avain || '');
        if (nahdyt.has(tunnus) && i < 40) continue;
        nahdyt.add(tunnus);
        kysymykset.push(k);
      }
    }
    paikka.innerHTML = '';
    if (!kysymykset.length) {
      paikka.append(el('p', { class: 'ohje' }, pk.tyhja || 'Este pacote ainda não tem palavras no vocabulário do curso.'));
      if (pk.alkuun) { const b = el('button', { type: 'button', class: 'visa-aloita' }, 'Mudar a escolha'); b.addEventListener('click', () => aja(pk.alkuun, paikka, apu)); paikka.append(b); }
      return;
    }
    const laatikko = el('div', { class: 'visa treeni' });
    // ★ (A5-M7): paketti kuuluu kielioppikorttiin, jonka oppija on merkinnyt vaikeaksi.
    if (onTahdella(pk.id)) paikka.append(el('p', { class: 'ohje' }, '★ Você marcou este tema como difícil na Gramática da lição: ele aparece primeiro no Treino e na revisão de hoje.'));
    // Kuuntelupaketti: ilmoitusrivi (näkyy vain body.ei-aanta, tottakai.css) kuten oppitunnin kuuntelutehtävissä.
    if ((pk.kuuntelu || pk.tila === 'kuuntelu') && fn('eiAantaIlmoitus')) { try { paikka.append(apu.eiAantaIlmoitus()); } catch (e) { /* ohita */ } }
    if (pk.kirjoitus && !pk.tila) {
      const tila = el('label', { class: 'valintaruutu treeni-tila' }, el('input', { type: 'checkbox' }), ' ✍ Modo escrita (digitar a resposta; ä = a e ö = o são aceitos)');
      const ruutu = tila.querySelector('input');
      ruutu.checked = kirjoitus;
      ruutu.addEventListener('change', () => { kirjoitus = ruutu.checked; try { localStorage.setItem('tottakai-kirjoitustila', kirjoitus ? 'true' : 'false'); } catch (e) { /* ohita */ } nayta(); });
      paikka.append(tila);
    }
    paikka.append(laatikko);
    const palkki = el('div', { class: 'treeni-palkki' }, ...kysymykset.map(() => el('i')));
    function nayta() {
      laatikko.innerHTML = '';
      if (kohta >= kysymykset.length) return loppu();
      const k = kysymykset[kohta];
      const lahde = k._pk || pk;   // koostepaketissa kysymyksen oma paketti (sääntö, kirjaus, kuuntelu, kirjoitus)
      laatikko.append(palkki);
      Array.from(palkki.children).forEach((x, i) => { x.classList.toggle('nyt', i === kohta); x.classList.toggle('tehty', i < kohta); });
      // Situações: mitä oppija haluaa (portugaliksi) ennen myyjän repliikkiä.
      if (k.tilanne) laatikko.append(el('p', { class: 'treeni-tilanne', lang: 'pt-BR' }, k.tilanne));
      const rivi = el('div', { class: 'visa-kysymys treeni-kohta' }, el('span', { class: 'visa-sana', lang: k.kieli }, k.kysymys));
      // Värinäyte (aihe-varit): väri CSS-muuttujana, ei style-attribuuttia lähdekoodissa.
      if (k.vari) { const nayte = el('span', { class: 'treeni-vari', 'aria-hidden': 'true' }); nayte.style.setProperty('--vari', k.vari); rivi.prepend(nayte); }
      // Kuuntelukysymys: ▶ ennen vastausta (kuuntele = luettava teksti, joka ei paljasta vastausta). Ilman ääntä ▶ näyttää
      // ilmoituksen napin vieressä (toast; app.js:n ohjain tekee saman, tämä varmistaa).
      if (k.kuuntele) {
        const ohj = apu.ohjain(() => jonoksi(k.kuuntele, k.kuunteleRooli), { aina: true, teksti: 'Ouvir' });
        // Myyjä puhuu heti (Próxima-painallus on ele, joten puhelinkin sallii äänen).
        if (k.soitaHeti && voiPuhua() && window.Aani) setTimeout(() => { try { window.Aani.soita(jonoksi(k.kuuntele, k.kuunteleRooli)); } catch (e) { /* ohita */ } }, 250);
        const nappi = ohj.querySelector ? ohj.querySelector('button') : null;
        if (nappi && fn('toast')) nappi.addEventListener('click', () => { if (!voiPuhua()) { try { apu.toast(nappi); } catch (e) { /* ohita */ } } }, true);
        rivi.append(ohj);
      }
      laatikko.append(rivi);
      const palaute = el('p', { class: 'palaute', 'aria-live': 'polite' });
      const seuraava = el('button', { type: 'button', class: 'visa-seuraava', hidden: true }, kohta < kysymykset.length - 1 ? 'Próxima →' : 'Ver resultado →');
      let yritetty = false;
      // Kuuntelukohta ilman ääntä: ”Pular” (näkyy vain body.ei-aanta) ohittaa kohdan: ei tulosta, ei mandariinia, ei lokia.
      let ohita = null;
      if ((lahde.kuuntelu || pk.tila === 'kuuntelu') && k.kuuntele) {
        ohita = el('button', { type: 'button', class: 'pieni-nappi toissijainen pular-nappi' }, 'Pular');
        ohita.addEventListener('click', () => {
          if (yritetty) return;
          yritetty = true;
          ohitetut++;
          laatikko.querySelectorAll('.vaihtoehdot button, .treeni-kirjoitus input, .treeni-kirjoitus button, .sijaruudukko button, .sijaruudukko input').forEach(x => { x.disabled = true; });
          palaute.className = 'palaute';
          palaute.textContent = 'Pulado: não conta. Volte quando tiver som.';
          ohita.remove();
          seuraava.hidden = false;
          seuraava.focus();
        });
      }
      // miksi: { väärä vaihtoehto: selitys } – palaute kertoo, mikä vastauksessa oli väärin (käytäntö H1, KAYTANNOT.md).
      // Väärä vastaus (A5-M8): mikä oli väärin + oikea muoto ja sen paradigman solu + paketin sääntörivi + selitys.
      const vastaa = (ok, nappi, annettu) => {
        if (ok && !yritetty) oikein++;
        const eka = !yritetty;
        yritetty = true;
        palaute.className = 'palaute ' + (ok ? 'ok' : 'ei');
        const miksi = !ok && k.miksi ? k.miksi[String(annettu || '').trim().toLowerCase()] : null;
        palaute.textContent = ok ? `Certo! ${k.selitys || ''}`
          : `Ainda não${miksi ? ': ' + miksi : ''}. Certo: ${k.oikea}${k.solu ? ` (${k.solu})` : ''}${/[.!?]$/.test(k.oikea) && !k.solu ? '' : '.'}` +
            (lahde.saanto ? ` Regra: ${lahde.saanto}` : '') + (k.selitys ? ` ${k.selitys}` : '');
        // Tulosloki ja kertausjono (A5-M7): vain ensimmäinen yritys; väärä vastaus tulee etusivun ”Hoje”-jonoon.
        // Koostepaketin kysymys kirjataan lähdepakettinsa nimiin: Revisão lukee lokin ja oikea vastaus siirtää laatikkoa.
        if (eka) {
          const tieto = { lahde: 'treeni', oppitunti: lahde.oppitunti, avain: `${lahde.id}:${k.avain || k.oikea}`,
            teksti: `${k.kysymys} → ${k.oikea}`, oikein: ok, reitti: '#treino-' + lahde.id };
          try { if (fn('kirjaaTulos')) apu.kirjaaTulos(tieto); else if (window.Tulokset) window.Tulokset.kirjaa(tieto); } catch (e) { /* loki ei estä harjoitusta */ }
        }
        if (ohita) ohita.remove();
        if (ok && eka) apu.ilmoitaTulos(rivi, 'oikein');
        else if (!ok) apu.ilmoitaTulos(rivi, 'vaarin');
        if (k.puhu && voiPuhua()) window.Aani.soita(jonoksi(k.puhu, k.puhuRooli, nappi || null));
        seuraava.hidden = false;
        seuraava.focus();
      };
      const kirjoitetaan = kirjoitus && (lahde === pk || !!lahde.kirjoitus) && !k.eiKirjoitus;
      if (k.ruudukko) {
        // AV-036: sijamuotojen lajitteluruudukko (napautus: sana → ruutu; kirjoitus: muodot ruutuihin).
        laatikko.append(ruudukkoNakyma(k, el, kirjoitetaan, apu, (ok, annettu) => vastaa(ok, null, annettu)));
      } else if (kirjoitetaan) {
        const syote = el('input', { type: 'text', class: 'aukko-syote treeni-syote', lang: 'fi-FI', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Resposta' });
        const tarkista = el('button', { type: 'button', class: 'pieni-nappi' }, 'Conferir');
        const tee = () => { const t = apu.arvioi(syote.value, [k.oikea]); if (t === 'tyhja') return; syote.dataset.tulos = t; vastaa(apu.hyvaksytty(t), null, syote.value); };
        tarkista.addEventListener('click', tee);
        syote.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (seuraava.hidden) tee(); else seuraava.click(); } });
        laatikko.append(el('div', { class: 'treeni-kirjoitus' }, syote, tarkista));
        setTimeout(() => syote.focus(), 0);
      } else {
        const valinnat = el('div', { class: 'vaihtoehdot' });
        for (const v of k.vaihtoehdot) {
          const b = el('button', { type: 'button', lang: /^\d+$/.test(v) ? null : 'fi-FI' }, v);
          b.addEventListener('click', () => {
            if (valinnat.dataset.vastattu) return;
            const ok = v === k.oikea;
            b.classList.add(ok ? 'oikein' : 'vaarin');
            if (!ok) [...valinnat.children].forEach(x => { if (x.textContent === k.oikea) x.classList.add('oikein'); });
            valinnat.dataset.vastattu = '1';
            vastaa(ok, b, b.textContent);
          });
          valinnat.append(b);
        }
        laatikko.append(valinnat);
      }
      seuraava.addEventListener('click', () => { kohta++; nayta(); });
      if (ohita) laatikko.append(ohita);
      laatikko.append(palaute, seuraava);
    }
    function loppu() {
      // Ohitetut kuuntelukohdat eivät ole tulos; kokonaan ohitettu kierros ei anna mandariineja.
      const yhteensa = kysymykset.length - ohitetut;
      if (!yhteensa) {
        laatikko.append(el('p', { class: 'visa-tulos' }, 'Rodada pulada: sem som, nada conta.'), el('p', { class: 'ohje' }, 'Volte quando tiver uma voz finlandesa (Início → Testar o som).'));
      } else {
        laatikko.append(el('p', { class: 'visa-tulos' }, `Rodada completa! ${oikein} / ${yhteensa} de primeira. +3 🍊`),
          el('p', { class: 'ohje' }, oikein === yhteensa ? 'Perfeito. O Capivara vai lembrar disso para sempre (ou até amanhã).'
            : oikein >= yhteensa - 2 ? 'Muito bem! Mais uma rodada e fica automático.' : 'Bom treino. Errar faz parte: as perguntas mudam a cada rodada.'));
        apu.valmis({ oikein, yhteensa });
      }
      const uudelleen = el('button', { type: 'button', class: 'visa-aloita' }, 'Nova rodada');
      uudelleen.addEventListener('click', () => aja(pk, paikka, apu));
      laatikko.append(uudelleen);
      // Oma kierros: takaisin valintaan (luokat, oppitunti, tila).
      if (pk.alkuun) {
        const vaihda = el('button', { type: 'button', class: 'pieni-nappi toissijainen' }, 'Mudar a escolha');
        vaihda.addEventListener('click', () => aja(pk.alkuun, paikka, apu));
        laatikko.append(vaihda);
      }
    }
    nayta();
  }

  /* ---------- AV-036: sijamuotojen lajitteluruudukko (omistaja 17.10.2026; ”do it” 23.10.2026) ----------
     Rivit = kysymyssanat (missä? mistä? mihin? tai mikä? minkä? mitä?), sarakkeet = yksikkö / monikko (tai kaksi sanaa,
     tai sisä- ja ulkosijat ennen monikon sijoja). Napautus: valitse muoto, sitten ruutu (tai ruutu ensin, sitten muoto);
     täytetyn ruudun napautus palauttaa muodon. Näppäimistö: kaikki ovat painikkeita (Tab, Enter, välilyönti), Esc poistaa
     valinnan. Kirjoitustila: ruudut ovat kenttiä, ja oppija kirjoittaa muodot. Muodot leksikosta (Sanasto.paradigma). */
  function ruudukkoNakyma(k, el, kirjoitetaan, apu, valmis) {
    const R = k.ruudukko;
    const juuri = el('div', { class: 'sijaruudukko' });
    // Ruudukon otsakkeet ja rivien nimet ovat tehtävän rakennetta (sanat ovat vastausnapeissa): ei kuplia.
    const taulu = el('table', { class: 'sijaruudukko-taulu', 'data-ei-kuplaa': true });
    const otsake = el('tr', {}, el('th', { scope: 'col' }, ''), ...R.sarakkeet.map(s => el('th', { scope: 'col', lang: s.kieli || 'pt-BR' }, s.nimi)));
    taulu.append(el('thead', {}, otsake));
    const runko = el('tbody', {});
    const ruudut = [];   // { r, s, oikea, el, arvo }
    let valittuSana = null, valittuRuutu = null;
    const sanat = el('div', { class: 'sijaruudukko-sanat', role: 'group', 'aria-label': 'Formas para colocar' });
    const tarkista = el('button', { type: 'button', class: 'pieni-nappi', disabled: true }, 'Conferir');
    const kaikkiTaynna = () => ruudut.every(x => (kirjoitetaan ? x.el.value.trim() : x.arvo));
    const paivita = () => {
      tarkista.disabled = !kaikkiTaynna();
      sanat.querySelectorAll('button').forEach(b => { b.setAttribute('aria-pressed', b === valittuSana ? 'true' : 'false'); b.classList.toggle('valittu', b === valittuSana); });
      ruudut.forEach(x => { if (!kirjoitetaan) x.el.classList.toggle('valittu', x === valittuRuutu); });
    };
    const aseta = (ruutu, nappi) => {
      if (ruutu.arvo) palauta(ruutu);
      ruutu.arvo = nappi.textContent;
      ruutu.el.textContent = ruutu.arvo;
      ruutu.el.setAttribute('aria-label', `${R.rivit[ruutu.r].nimi} · ${R.sarakkeet[ruutu.s].nimi}: ${ruutu.arvo}`);
      nappi.hidden = true;
      valittuSana = null; valittuRuutu = null;
      paivita();
    };
    const palauta = ruutu => {
      const n = [...sanat.querySelectorAll('button')].find(b => b.hidden && b.textContent === ruutu.arvo);
      if (n) n.hidden = false;
      ruutu.arvo = '';
      ruutu.el.textContent = '·';
      ruutu.el.setAttribute('aria-label', `${R.rivit[ruutu.r].nimi} · ${R.sarakkeet[ruutu.s].nimi}: vazio`);
    };
    R.rivit.forEach((rivi, r) => {
      const tr = el('tr', {}, el('th', { scope: 'row', lang: 'fi-FI' }, rivi.nimi));
      R.sarakkeet.forEach((_, s) => {
        const ruutu = { r, s, oikea: R.solut[r][s], arvo: '' };
        if (kirjoitetaan) {
          ruutu.el = el('input', { type: 'text', class: 'aukko-syote sijaruudukko-syote', lang: 'fi-FI', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false',
            'aria-label': `${rivi.nimi} · ${R.sarakkeet[s].nimi}` });
          ruutu.el.addEventListener('input', paivita);
          ruutu.el.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); if (!tarkista.disabled) tarkista.click(); } });
        } else {
          ruutu.el = el('button', { type: 'button', class: 'sijaruudukko-solu', lang: 'fi-FI' }, '·');
          ruutu.el.setAttribute('aria-label', `${rivi.nimi} · ${R.sarakkeet[s].nimi}: vazio`);
          ruutu.el.addEventListener('click', () => {
            if (juuri.dataset.vastattu) return;
            if (valittuSana) return aseta(ruutu, valittuSana);
            if (ruutu.arvo) { palauta(ruutu); valittuRuutu = null; return paivita(); }
            valittuRuutu = valittuRuutu === ruutu ? null : ruutu;
            paivita();
          });
        }
        ruudut.push(ruutu);
        tr.append(el('td', {}, ruutu.el));
      });
      runko.append(tr);
    });
    taulu.append(runko);
    if (!kirjoitetaan) {
      for (const muoto of k.sanat) {
        const b = el('button', { type: 'button', class: 'sijaruudukko-sana', lang: 'fi-FI', 'aria-pressed': 'false' }, muoto);
        b.addEventListener('click', () => {
          if (juuri.dataset.vastattu) return;
          if (valittuRuutu) return aseta(valittuRuutu, b);
          valittuSana = valittuSana === b ? null : b;
          paivita();
        });
        sanat.append(b);
      }
      juuri.append(el('p', { class: 'ohje' }, 'Toque numa forma e depois na casa certa (ou a casa primeiro). Toque numa casa cheia para devolver a forma.'), sanat);
    } else {
      juuri.append(el('p', { class: 'ohje' }, 'Escreva a forma certa em cada casa (ä = a e ö = o são aceitos).'));
    }
    juuri.addEventListener('keydown', e => { if (e.key === 'Escape') { valittuSana = null; valittuRuutu = null; paivita(); } });
    const kehys = el('div', { class: 'sijaruudukko-kehys' }, taulu);
    juuri.append(kehys, el('div', { class: 'treeni-kirjoitus' }, tarkista));
    tarkista.addEventListener('click', () => {
      if (juuri.dataset.vastattu || !kaikkiTaynna()) return;
      juuri.dataset.vastattu = '1';
      const vaarat = [];
      for (const x of ruudut) {
        const annettu = kirjoitetaan ? x.el.value : x.arvo;
        const ok = kirjoitetaan ? apu.hyvaksytty(apu.arvioi(annettu, [x.oikea])) : pieni(annettu) === pieni(x.oikea);
        x.el.classList.add(ok ? 'oikein' : 'vaarin');
        if (!ok) {
          vaarat.push(`${annettu.trim()} → ${R.rivit[x.r].nimi} ${R.sarakkeet[x.s].nimi}: ${x.oikea}`);
          if (!kirjoitetaan) x.el.textContent = `${x.arvo} → ${x.oikea}`;
        }
        x.el.disabled = true;
      }
      sanat.querySelectorAll('button').forEach(b => { b.disabled = true; });
      tarkista.disabled = true;
      const avain = 'ruudukko-virheet';
      k.miksi = vaarat.length ? { [avain]: `${vaarat.length} casa(s) errada(s): ${vaarat.join('; ')}` } : {};
      valmis(!vaarat.length, avain);
    });
    paivita();
    return juuri;
  }

  /* ---------- AV-033 c, d: Revisão (omat virheet) ja oma kierros ----------
     Eivät ole PAKETIT-listassa (tarkista_sanasto.js M ajaa jokaisen PAKETIT-paketin tee():n, ja nämä lukevat oppijan
     lokia), mutta Treeni.hae ja Treeni.kategorian löytävät ne: reitit #treino-revisao-erros ja #treino-oma-kierros,
     luokan sivu #treino-revisao. Kysymykset tehdään lähdepaketin tee():llä, joten vaihtoehdot ovat tarkistettuja. */
  const pyyda = (pk, ehto, n) => { for (let i = 0; i < (n || 1); i++) { let k = null; try { k = pk.tee(); } catch (e) { k = null; } if (k && k.oikea && (!ehto || ehto(k))) return Object.assign(k, { _pk: pk }); } return null; };
  // Oppitunnit, joihin oppija on edennyt (Tulokset.edistys(): pisin käyty oppitunti); ilman tietoa kaikki.
  function edennyt() {
    let e = null;
    try { e = window.Tulokset && window.Tulokset.edistys(); } catch (x) { e = null; }
    const kaikki = (window.Kurssi.oppitunnit || []).map(o => o.id);
    return new Set(e ? kaikki.filter(id => JARJ(id) <= JARJ(e)) : kaikki);
  }
  // Lokin avain ”paketti:kysymys” → lähdepaketti (pisin osuva tunniste; sanan treeni ”sana-<sana>:<solu>”, sanassa voi olla ”:”).
  function lahdePaketti(avain) {
    const ehdokkaat = [];
    if (avain.startsWith('sana-')) {
      const loppu = avain.slice(5);
      for (let i = loppu.lastIndexOf(':'); i > 0; i = loppu.lastIndexOf(':', i - 1)) {
        const pk = sanapaketti(loppu.slice(0, i), edennyt());
        if (pk) ehdokkaat.push(pk);
      }
    } else {
      const pk = PAKETIT.filter(p => avain.startsWith(p.id + ':')).sort((a, b) => b.id.length - a.id.length)[0];
      if (pk) ehdokkaat.push(pk);
    }
    return ehdokkaat;
  }
  // Virheet lokista: kohteet, joiden viimeisin vastaus oli väärä, ensin (uusin ensin); sitten muut kerran väärin menneet.
  function virheet() {
    let loki = [];
    try { loki = (window.Tulokset && window.Tulokset.loki()) || []; } catch (e) { loki = []; }
    const viimeisin = new Map(), kertaalleen = new Set();
    for (const r of loki) {
      if (r.lahde !== 'treeni' || !r.avain) continue;
      viimeisin.set(r.avain, r);
      if (!r.oikein) kertaalleen.add(r.avain);
    }
    const auki = [...viimeisin.values()].filter(r => !r.oikein).sort((a, b) => b.aika - a.aika).map(r => r.avain);
    const korjatut = [...kertaalleen].filter(a => !auki.includes(a)).reverse();
    // Laatikoissa yhä olevat Treeni-virheet, joita loki (viimeiset 400 riviä) ei enää näe: auki-listan perään.
    let vanhat = [];
    try {
      const L = window.Tulokset && typeof window.Tulokset.laatikot === 'function' ? window.Tulokset.laatikot() : [];
      vanhat = L.filter(x => x.lahde === 'treeni' && x.avain.startsWith('treeni:')).sort((a, b) => (b.viimeksi || 0) - (a.viimeksi || 0))
        .map(x => x.avain.slice('treeni:'.length)).filter(a => !viimeisin.has(a));
    } catch (e) { vanhat = []; }
    return auki.concat(vanhat, korjatut);
  }
  const REVISAO = {
    id: 'revisao-erros', oppitunti: null, luokka: 'revisao', ryhma: 'Meus erros', rekisteri: 'kirja', otsikko: 'Meus erros', kirjoitus: true,
    kuvaus: 'As perguntas que você errou no Treino, de todos os pacotes: primeiro as que ainda estão erradas, depois as que você já acertou depois.',
    saanto: '', tyhja: 'Ainda não há erros no Treino. Faça alguns pacotes: o que você errar aparece aqui.',
    kysymykset(n) {
      const ulos = [];
      for (const avain of virheet()) {
        if (ulos.length >= n) break;
        // Sama kysymys uudelleen (sama avain), muuten saman paketin uusi kysymys.
        for (const pk of lahdePaketti(avain)) {
          const k = pyyda(pk, x => `${pk.id}:${x.avain || x.oikea}` === avain, 80) || pyyda(pk, null, 5);
          if (k) { ulos.push(k); break; }
        }
      }
      return ulos;
    }
  };
  const OMA = {
    id: 'oma-kierros', oppitunti: null, luokka: 'revisao', ryhma: 'Rodada sob medida', rekisteri: 'kirja', otsikko: 'Rodada sob medida', valitsin: true,
    kuvaus: 'Você escolhe: quais tipos de treino, até qual lição e o modo (tocar, escrever ou ouvir). 8 perguntas misturadas.'
  };
  const OMA_AVAIN = 'tottakai-oma-kierros';
  const TILAT = [['napautus', 'Tocar (escolher a resposta)'], ['kirjoitus', '✍ Escrever a resposta'], ['kuuntelu', '👂 Ouvir e escolher']];
  // Paketit valinnan mukaan: luokat, oppitunti enintään N (paketti ilman oppituntia aina), tila (kirjoitus/kuuntelu rajaa).
  function omatPaketit(v) {
    const raja = JARJ(v.asti);
    return PAKETIT.filter(p => v.luokat.includes(p.luokka) && (!p.oppitunti || JARJ(p.oppitunti) <= raja) &&
      (v.tila !== 'kirjoitus' || p.kirjoitus) && (v.tila !== 'kuuntelu' || p.kuuntelu || p.luokka === 'situacoes'));
  }
  function valitsin(pk, paikka, apu) {
    const { el } = apu;
    const oppitunnit = (window.Kurssi.oppitunnit || []).filter(o => o.id !== 't00');
    let v = null;
    try { v = JSON.parse(localStorage.getItem(OMA_AVAIN) || 'null'); } catch (e) { v = null; }
    let e = null;
    try { e = window.Tulokset && window.Tulokset.edistys(); } catch (x) { e = null; }
    if (!v || !Array.isArray(v.luokat)) v = { luokat: ['palavras', 'verbos', 'nomes'], asti: e || 't05', tila: 'napautus' };
    if (!oppitunnit.some(o => o.id === v.asti)) v.asti = (oppitunnit[0] || {}).id;
    paikka.innerHTML = '';
    const luokat = KATEGORIAT.filter(k => k.id !== 'revisao');
    const ruudut = luokat.map(k => {
      const r = el('input', { type: 'checkbox', value: k.id });
      r.checked = v.luokat.includes(k.id);
      return [k, r];
    });
    const asti = el('select', { class: 'treeni-valitsin-asti', 'aria-label': 'Até a lição' },
      ...oppitunnit.map(o => { const x = el('option', { value: o.id }, `${o.jakso}: ${o.otsikko}`); if (o.id === v.asti) x.selected = true; return x; }));
    const tilat = TILAT.map(([id, nimi]) => { const r = el('input', { type: 'radio', name: 'oma-kierros-tila', value: id }); r.checked = v.tila === id; return [id, nimi, r]; });
    const maara = el('p', { class: 'ohje', 'aria-live': 'polite' });
    const aloita = el('button', { type: 'button', class: 'visa-aloita' }, 'Começar a rodada');
    const lue = () => ({ luokat: ruudut.filter(([, r]) => r.checked).map(([k]) => k.id), asti: asti.value, tila: (tilat.find(x => x[2].checked) || ['napautus'])[0] });
    const laske = () => {
      const n = omatPaketit(lue()).length;
      maara.textContent = n ? `${n} pacote(s) entram na rodada.` : 'Nenhum pacote com esta escolha: marque mais tipos ou uma lição mais adiante.';
      aloita.disabled = !n;
    };
    [...ruudut.map(x => x[1]), asti, ...tilat.map(x => x[2])].forEach(x => x.addEventListener('change', laske));
    aloita.addEventListener('click', () => {
      const valinta = lue();
      try { localStorage.setItem(OMA_AVAIN, JSON.stringify(valinta)); } catch (x) { /* ohita */ }
      const lista = omatPaketit(valinta);
      if (!lista.length) return;
      // Koostepaketti: sama tunniste kuin valitsimella (tulos ja mandariinit samalle kortille), kysymykset sekaisin.
      const kooste = Object.assign({}, pk, { valitsin: false, alkuun: pk, tila: valinta.tila, kirjoitus: valinta.tila === 'kirjoitus',
        kuuntelu: valinta.tila === 'kuuntelu', tyhja: 'Não saiu nenhuma pergunta com esta escolha.',
        kysymykset(n) {
          const ulos = [], nahdyt = new Set();
          const ehto = k => (valinta.tila === 'kuuntelu' ? !!k.kuuntele : valinta.tila === 'kirjoitus' ? !k.eiKirjoitus : true);
          for (let i = 0; ulos.length < n && i < n * 12; i++) {
            const k = pyyda(arpa(lista), ehto, 3);
            if (!k) continue;
            const tunnus = k._pk.id + '|' + k.kysymys + '|' + (k.avain || '');
            if (nahdyt.has(tunnus)) continue;
            nahdyt.add(tunnus);
            ulos.push(k);
          }
          return ulos;
        } });
      aja(kooste, paikka, apu);
    });
    const kentta = (otsikko, ...sisalto) => el('fieldset', { class: 'treeni-valitsin' }, el('legend', {}, otsikko), ...sisalto);
    paikka.append(
      kentta('Tipos de treino', ...ruudut.map(([k, r]) => el('label', { class: 'valintaruutu' }, r, ` ${k.ikoni} ${k.nimi}`))),
      kentta('Até a lição', asti),
      kentta('Modo', ...tilat.map(([, nimi, r]) => el('label', { class: 'valintaruutu' }, r, ` ${nimi}`))),
      maara, aloita);
    laske();
  }

  /* ★-kortit → paketit (A5-M7: ”os cartões marcados aparecem no Treino”). Kortin treeni-kenttä (yksi tai lista)
     ratkaisee; jos kortilla ei ole pakettia, koko sen oppitunnin paketit. Tähdet luetaan Tulokset.tahdet():stä. */
  function tahdellaIdt() {
    const ids = new Set();
    const tl = window.Tulokset;
    if (!tl || typeof tl.tahdet !== 'function') return ids;
    let tahdet = [];
    try { tahdet = tl.tahdet(); } catch (e) { tahdet = []; }
    for (const t of tahdet) {
      const omat = (t.treeni || []).filter(id => PAKETIT.some(p => p.id === id));
      (omat.length ? omat : PAKETIT.filter(p => p.oppitunti === t.oppitunti).map(p => p.id)).forEach(id => ids.add(id));
    }
    return ids;
  }
  const onTahdella = id => tahdellaIdt().has(id);
  // Oppitunnin paketit: ★-korttien paketit ensin, muuten alkuperäinen järjestys.
  // Kertauksen (k01 = oppitunnit 1–5, k02 = 6–10 …) Treeni on sen oppituntien paketit (omistaja 18.10.2026: tyhjä Treeni pois).
  // T15.9 (A6-09): jaksot luetaan oppituntien ainoasta järjestyksestä (assets/profiili.js jarjestys): kertauksen jaksot ovat
  // edellisen kertauksen (tai alun) ja sen välissä, prologia t00 lukuun ottamatta (k01 = t01–t05, k02 = t06–t10 …).
  function kertaa(id) {
    if (!/^k\d\d$/.test(id || '')) return null;
    const j = jarjestysLista(), i = j.indexOf(id);
    if (i < 0) return null;
    let a = i;
    while (a > 0 && !/^k\d\d$/.test(j[a - 1])) a--;
    return j.slice(a, i).filter(x => /^t\d\d$/.test(x) && x !== 't00');
  }
  function oppitunnin(id) {
    const t = tahdellaIdt();
    const kt = kertaa(id);
    const lista = kt ? PAKETIT.filter(p => kt.includes(p.oppitunti)) : PAKETIT.filter(p => p.oppitunti === id);
    return lista.filter(p => t.has(p.id)).concat(lista.filter(p => !t.has(p.id)));
  }

  /* ---------- Situações: tiskin jatkokysymykset (omistaja 18.10.2026) ----------
     ”Avausrepliikki on harjoiteltu; tiskin jatkokysymys saa vaihtamaan englantiin.” Jokainen tilanne: myyjän repliikit
     (kirjakieli; puhe = tavallinen puhuttu asu, jos eri), mitä oppija haluaa (tilanteet: pt + oikea vastaus) ja yllätykset.
     Kaksi kysymystyyppiä: 1) myyjä kysyy → valitse oma vastaus (osa vain kuunneltuna), 2) toinen puoli tiskiä: asiakas
     vastasi näin → mitä myyjä kysyi? Väärät vaihtoehdot ovat saman tilanteen muita vastauksia tai kysymyksiä.
     Roolit: myyjä = muut naiset / muut miehet (nainen5, mies7), oppijan vastaus = Maia (nainen0); äänitys Treeni.puheet(). */
  const ROOLI = { nainen5: { tyyppi: 'nainen', vaihto: 5 }, mies7: { tyyppi: 'mies', vaihto: 7 }, nainen0: { tyyppi: 'nainen', vaihto: 0 } };
  const TILANTEET = [
    { id: 'kahvila', nimi: 'No café', myyja: 'nainen5', kuvaus: 'Você já pediu o café. E agora: grande ou pequeno, leite, aqui ou para levar, cartão, recibo…',
      askeleet: [
        { myyja: 'Seuraava, kiitos!', pt: 'Próximo, por favor!', tilanteet: [{ pt: 'Você quer um café.', v: 'Yksi kahvi, kiitos.' }, { pt: 'Você quer um chá.', v: 'Yksi tee, kiitos.' }] },
        { myyja: 'Iso vai pieni?', pt: 'Grande ou pequeno?', tilanteet: [{ pt: 'Você quer um café grande.', v: 'Iso, kiitos.' }, { pt: 'Você quer um café pequeno.', v: 'Pieni, kiitos.' }] },
        { myyja: 'Maitoa?', pt: 'Com leite?', tilanteet: [{ pt: 'Você toma café preto.', v: 'Ei, kiitos.' }, { pt: 'Você quer leite no café.', v: 'Kyllä, kiitos.' }] },
        { myyja: 'Täällä vai mukaan?', pt: 'Para tomar aqui ou para levar?', tilanteet: [{ pt: 'Você vai sentar ali na mesa.', v: 'Täällä.' }, { pt: 'Você está com pressa.', v: 'Mukaan, kiitos.' }] },
        { myyja: 'Mukaan?', pt: 'Para levar?', tilanteet: [{ pt: 'Você está com pressa.', v: 'Kyllä, kiitos.' }, { pt: 'Você vai sentar ali na mesa.', v: 'Täällä.' }] },
        { myyja: 'Tuleeko muuta?', puhe: 'Tuleeks muuta?', pt: 'Mais alguma coisa?', tilanteet: [{ pt: 'É só isso.', v: 'Ei muuta, kiitos.' }, { pt: 'Você quer também um pão doce.', v: 'Ja yksi pulla.' }] },
        { myyja: 'Kortilla vai käteisellä?', pt: 'No cartão ou em dinheiro?', tilanteet: [{ pt: 'Você paga com cartão.', v: 'Kortilla.' }, { pt: 'Você paga em dinheiro.', v: 'Käteisellä.' }] },
        { myyja: 'Kuitti?', pt: 'Quer o recibo?', tilanteet: [{ pt: 'Você não precisa do recibo.', v: 'Ei tarvitse, kiitos.' }, { pt: 'Você quer o recibo.', v: 'Kyllä, kiitos.' }] },
        { myyja: 'Pulla loppui. Käykö korvapuusti?', pt: 'Acabou o pão doce. Pode ser um rolinho de canela?', yllatys: true,
          tilanteet: [{ pt: 'Rolinho de canela serve.', v: 'Käy, kiitos.' }, { pt: 'Você não quer outra coisa.', v: 'Ei, kiitos. Ei muuta.' }] },
        { myyja: 'Kestää noin viisi minuuttia.', pt: 'Demora uns cinco minutos.', yllatys: true, tilanteet: [{ pt: 'Tudo bem, você espera.', v: 'Selvä, odotan.' }] }
      ] },
    { id: 'lounas', nimi: 'Almoço para levar', myyja: 'mies7', kuvaus: 'Você pediu o almoço. Comer aqui ou levar, esquentar, molho, talheres, bebida, recibo… e o que acabou.',
      askeleet: [
        { myyja: 'Syötkö täällä vai otatko mukaan?', puhe: 'Syöks täällä vai otaks mukaan?', pt: 'Vai comer aqui ou levar?', tilanteet: [{ pt: 'Você vai comer no escritório.', v: 'Otan mukaan.' }, { pt: 'Você vai comer no restaurante.', v: 'Syön täällä.' }] },
        // te-muoto: vanhemmalle asiakkaalle tai ryhmälle; ryhmä vastaa me-muodossa.
        { myyja: 'Syöttekö täällä vai otatteko mukaan?', pt: 'Vocês vão comer aqui ou levar? (te: para um grupo ou, educado, para uma pessoa mais velha)', tilanteet: [{ pt: 'Vocês (um grupo) vão comer no escritório.', v: 'Otamme mukaan.' }, { pt: 'Vocês (um grupo) vão comer no restaurante.', v: 'Syömme täällä.' }] },
        { myyja: 'Lämmitetäänkö?', puhe: 'Lämmitetäänks?', pt: 'Quer que esquente?', tilanteet: [{ pt: 'Você quer a comida quente.', v: 'Kyllä, kiitos.' }, { pt: 'Você vai comer mais tarde.', v: 'Ei tarvitse.' }] },
        { myyja: 'Tulinen vai mieto kastike?', pt: 'Molho apimentado ou suave?', tilanteet: [{ pt: 'Você não gosta de pimenta.', v: 'Mieto, kiitos.' }, { pt: 'Você adora pimenta.', v: 'Tulinen, kiitos.' }] },
        { myyja: 'Kastike erikseen?', pt: 'O molho à parte?', tilanteet: [{ pt: 'Você quer o molho num potinho separado.', v: 'Kyllä, erikseen.' }, { pt: 'Pode pôr o molho em cima.', v: 'Ei tarvitse.' }] },
        { myyja: 'Haluatko haarukan ja veitsen?', pt: 'Quer garfo e faca?', tilanteet: [{ pt: 'Você tem talheres no escritório.', v: 'Ei tarvitse, kiitos.' }, { pt: 'Você não tem talheres.', v: 'Kyllä, kiitos.' }] },
        { myyja: 'Mitä juotavaa?', pt: 'O que vai beber?', tilanteet: [{ pt: 'Você quer água.', v: 'Vettä, kiitos.' }, { pt: 'Você quer suco.', v: 'Mehua, kiitos.' }] },
        { myyja: 'Juoma isona vai pienenä?', pt: 'A bebida grande ou pequena?', tilanteet: [{ pt: 'Você está com muita sede.', v: 'Isona.' }, { pt: 'Você quer só um pouco.', v: 'Pienenä.' }] },
        { myyja: 'Pussi?', pt: 'Quer um saquinho?', tilanteet: [{ pt: 'Você leva na mão.', v: 'Ei tarvitse.' }, { pt: 'Você precisa de um saquinho.', v: 'Kyllä, kiitos.' }] },
        { myyja: 'Haluatko kuitin?', pt: 'Quer o recibo?', tilanteet: [{ pt: 'Você não precisa do recibo.', v: 'Ei tarvitse, kiitos.' }, { pt: 'O almoço é do trabalho; você precisa do recibo.', v: 'Kyllä, kiitos.' }] },
        { myyja: 'Lohi loppui. Käykö kana?', pt: 'O salmão acabou. Pode ser frango?', yllatys: true,
          tilanteet: [{ pt: 'Frango serve.', v: 'Käy, kiitos.' }, { pt: 'Você não come frango; então quer a sopa.', v: 'Ei, kiitos. Otan keiton.' }] },
        { myyja: 'Kortti ei toimi. Uudestaan?', pt: 'O cartão não funcionou. De novo?', yllatys: true, tilanteet: [{ pt: 'Você tenta de novo.', v: 'Selvä.' }] }
      ] },
    { id: 'kassa', nimi: 'No caixa do mercado', myyja: 'nainen5', kuvaus: 'Cartão de fidelidade, sacola, cartão, recibo… e a balança que você esqueceu.',
      askeleet: [
        { myyja: 'Moi!', pt: 'Oi!', tilanteet: [{ pt: 'A caixa cumprimenta você.', v: 'Moi!' }] },
        { myyja: 'Onko bonuskorttia?', puhe: 'Onks bonarii?', pt: 'Tem cartão de fidelidade? (no S-market é o S-etukortti, no K-market o Plussa)', tilanteet: [{ pt: 'Você não tem o cartão.', v: 'Ei ole.' }, { pt: 'Você tem o cartão e mostra.', v: 'On. Tässä.' }] },
        { myyja: 'Löytyykö bonuskorttia?', pt: 'Tem cartão de fidelidade?', tilanteet: [{ pt: 'Você não tem o cartão.', v: 'Ei ole.' }, { pt: 'Você tem o cartão e mostra.', v: 'Löytyy. Tässä.' }] },
        { myyja: 'Tarvitsetko kassin?', puhe: 'Tarviiks kassii?', pt: 'Precisa de sacola?', tilanteet: [{ pt: 'Você trouxe a sua sacola.', v: 'Ei, kiitos.' }, { pt: 'Você esqueceu a sacola em casa.', v: 'Kyllä, kiitos.' }] },
        { myyja: 'Kortilla?', pt: 'No cartão?', tilanteet: [{ pt: 'Você paga com cartão.', v: 'Kyllä.' }, { pt: 'Você paga em dinheiro.', v: 'Käteisellä.' }] },
        { myyja: 'Saako olla muuta?', pt: 'Mais alguma coisa?', tilanteet: [{ pt: 'É só isso.', v: 'Ei kiitos, siinä kaikki.' }, { pt: 'Você quer também um chocolate.', v: 'Ja yksi suklaa.' }] },
        { myyja: 'Tarvitsetko kuittia?', puhe: 'Tarviiks kuittii?', pt: 'Precisa do recibo?', tilanteet: [{ pt: 'Você quer o recibo.', v: 'Kyllä, kiitos.' }, { pt: 'Você não quer o recibo.', v: 'Ei, kiitos.' }] },
        { myyja: 'Nämä pitää punnita!', pt: 'Isto aqui precisa ser pesado!', yllatys: true, tilanteet: [{ pt: 'Você esqueceu de pesar as bananas.', v: 'Anteeksi!' }] },
        { myyja: 'Saanko nähdä henkilökortin?', pt: 'Posso ver a sua identidade?', yllatys: true, tilanteet: [{ pt: 'Você comprou cerveja e mostra a identidade.', v: 'Tässä.' }] },
        { myyja: 'Kiitos, hei!', pt: 'Obrigada, tchau!', tilanteet: [{ pt: 'A caixa se despede.', v: 'Hei hei!' }] }
      ] },
    { id: 'ravintola', nimi: 'No restaurante', myyja: 'nainen5', kuvaus: 'Mesa para quantos, reserva, bebida, alergias, “estava bom?” e a conta: junto ou separado.',
      askeleet: [
        { myyja: 'Montako henkeä?', pt: 'Para quantas pessoas?', tilanteet: [{ pt: 'Vocês são dois.', v: 'Kaksi.' }, { pt: 'Você está sozinho.', v: 'Yksi.' }] },
        { myyja: 'Onko pöytävaraus?', pt: 'Tem reserva?', tilanteet: [{ pt: 'Você não reservou.', v: 'Ei ole.' }, { pt: 'Você reservou uma mesa.', v: 'On.' }] },
        { myyja: 'Saako olla jotain juotavaa?', pt: 'Algo para beber?', tilanteet: [{ pt: 'Você quer água.', v: 'Vettä, kiitos.' }, { pt: 'Você quer uma cerveja.', v: 'Yksi olut, kiitos.' }] },
        { myyja: 'Onko allergioita?', pt: 'Tem alguma alergia?', tilanteet: [{ pt: 'Você não tem alergias.', v: 'Ei ole.' }, { pt: 'Você não pode comer peixe.', v: 'Ei kalaa, kiitos.' }] },
        { myyja: 'Maistuiko?', pt: 'Estava bom?', tilanteet: [{ pt: 'A comida estava ótima.', v: 'Kyllä, oli hyvää.' }] },
        { myyja: 'Yhdessä vai erikseen?', pt: 'A conta junta ou separada?', tilanteet: [{ pt: 'Você paga tudo.', v: 'Yhdessä.' }, { pt: 'Cada um paga o seu.', v: 'Erikseen.' }] },
        { myyja: 'Tämä pöytä on varattu.', pt: 'Esta mesa está reservada.', yllatys: true, tilanteet: [{ pt: 'Você sentou na mesa errada.', v: 'Anteeksi!' }] }
      ] }
  ];
  /* AV-033 a (omistaja 23.10.2026: ”do it”): kioski, leipomo, bussi/juna, apteekki. Jokainen on sidottu oppituntiin
     (kuten t10:n lähtöselvitys): repliikit ja vastaukset käyttävät vain sanoja ja kielioppia, jotka ovat käytössä siihen
     oppituntiin mennessä (tarkistettu leksikon o-kentistä). Kioski t04 (tilaus, partitiivi, kortilla), leipomo t11
     (monikon partitiivi fraasina: Pullia, kiitos), bussi ja juna t14 (suunnat: kaupan edessä, keskustaan, lentokentälle),
     apteekki t18 (särkee, kipeä kurkku; te-käsky Ottakaa, t14). Uudet sanat sanasto/treeni.js:ssä, puhekieli
     sanasto/pelit.js:ssä (mitäs, pussii; tuleeks, tarviiks, meet olivat jo). */
  const LISATILANTEET = [
    { id: 'kioski', oppitunti: 't04', nimi: 'No quiosque', myyja: 'mies7', kuvaus: 'No quiosque da esquina (tipo R-kioski): um café, esquentar o pão doce, saquinho, cartão… e o cartão que não passa.',
      askeleet: [
        { myyja: 'Moi! Mitä saa olla?', puhe: 'Moi! Mitäs sulle?', pt: 'Oi! O que vai ser?', tilanteet: [{ pt: 'Você quer um café.', v: 'Yksi kahvi, kiitos.' }, { pt: 'Você quer uma garrafa de água.', v: 'Yksi vesi, kiitos.' }] },
        { myyja: 'Lämmitetäänkö?', puhe: 'Lämmitetäänks?', pt: 'Quer que esquente? (o pão doce)', tilanteet: [{ pt: 'Você quer o pão doce quentinho.', v: 'Kyllä, kiitos.' }, { pt: 'Você vai comer mais tarde.', v: 'Ei tarvitse.' }] },
        { myyja: 'Tuleeko muuta?', puhe: 'Tuleeks muuta?', pt: 'Mais alguma coisa?', tilanteet: [{ pt: 'É só isso.', v: 'Ei muuta, kiitos.' }, { pt: 'Você quer também um chocolate.', v: 'Ja yksi suklaa.' }] },
        { myyja: 'Pussi?', puhe: 'Pussii?', pt: 'Quer um saquinho?', tilanteet: [{ pt: 'Você leva na mão.', v: 'Ei tarvitse.' }, { pt: 'Você precisa de um saquinho.', v: 'Kyllä, kiitos.' }] },
        { myyja: 'Kortilla?', pt: 'No cartão?', tilanteet: [{ pt: 'Você paga com cartão.', v: 'Kyllä.' }, { pt: 'Você paga em dinheiro.', v: 'Käteisellä.' }] },
        { myyja: 'Kuitti?', pt: 'Quer o recibo?', tilanteet: [{ pt: 'Você não precisa do recibo.', v: 'Ei tarvitse, kiitos.' }, { pt: 'Você quer o recibo.', v: 'Kyllä, kiitos.' }] },
        { myyja: 'Kahvi loppui. Käykö tee?', pt: 'O café acabou. Pode ser chá?', yllatys: true,
          tilanteet: [{ pt: 'Chá serve.', v: 'Käy, kiitos.' }, { pt: 'Você não quer chá.', v: 'Ei, kiitos.' }] },
        { myyja: 'Kortti ei mene läpi. Uudestaan?', pt: 'O cartão não passou. De novo?', yllatys: true, tilanteet: [{ pt: 'Você tenta de novo.', v: 'Selvä.' }] }
      ] },
    { id: 'leipomo', oppitunti: 't11', nimi: 'Na padaria', myyja: 'nainen5', kuvaus: 'Na padaria: pão de centeio ou pães doces, quantos, fatiar ou não, saquinho… e o pão doce que acabou.',
      askeleet: [
        { myyja: 'Hei! Mitä saisi olla?', pt: 'Oi! O que vai ser?', tilanteet: [{ pt: 'Você quer um pão de centeio.', v: 'Ruisleipä, kiitos.' }, { pt: 'Você quer alguns pães doces.', v: 'Pullia, kiitos.' }] },
        { myyja: 'Montako pullaa?', pt: 'Quantos pães doces?', tilanteet: [{ pt: 'Você quer quatro.', v: 'Neljä.' }, { pt: 'Você quer seis.', v: 'Kuusi.' }] },
        { myyja: 'Iso vai pieni ruisleipä?', pt: 'Pão de centeio grande ou pequeno?', tilanteet: [{ pt: 'Vocês são uma família grande.', v: 'Iso, kiitos.' }, { pt: 'Você mora sozinho.', v: 'Pieni, kiitos.' }] },
        { myyja: 'Leikataanko?', pt: 'Quer que eu fatie?', tilanteet: [{ pt: 'Você quer o pão fatiado.', v: 'Kyllä, kiitos.' }, { pt: 'Você quer o pão inteiro.', v: 'Ei tarvitse.' }] },
        { myyja: 'Tuleeko muuta?', puhe: 'Tuleeks muuta?', pt: 'Mais alguma coisa?', tilanteet: [{ pt: 'É só isso.', v: 'Ei muuta, kiitos.' }, { pt: 'Você quer também dois pastéis da Carélia.', v: 'Ja kaksi karjalanpiirakkaa.' }] },
        { myyja: 'Pussiin?', pt: 'Ponho num saquinho?', tilanteet: [{ pt: 'Você trouxe a sua sacola.', v: 'Ei, kiitos.' }, { pt: 'Você precisa de um saquinho.', v: 'Kyllä, kiitos.' }] },
        { myyja: 'Kortilla vai käteisellä?', pt: 'No cartão ou em dinheiro?', tilanteet: [{ pt: 'Você paga com cartão.', v: 'Kortilla.' }, { pt: 'Você paga em dinheiro.', v: 'Käteisellä.' }] },
        { myyja: 'Pulla loppui. Käykö munkki?', pt: 'Acabou o pão doce. Pode ser um sonho?', yllatys: true,
          tilanteet: [{ pt: 'Sonho serve.', v: 'Käy, kiitos.' }, { pt: 'Você não quer outra coisa.', v: 'Ei, kiitos. Ei muuta.' }] }
      ] },
    { id: 'bussi', oppitunti: 't14', nimi: 'No ônibus e no trem', myyja: 'mies7', kuvaus: 'Achar o ponto, dizer para onde vai, adulto ou criança, mostrar o bilhete… e o ônibus errado.',
      askeleet: [
        { myyja: 'Hei! Voinko auttaa?', pt: 'Oi! Posso ajudar? (alguém na rua)', tilanteet: [{ pt: 'Você procura o ponto de ônibus.', v: 'Missä on bussipysäkki?' }, { pt: 'Você procura a estação de trem.', v: 'Missä on rautatieasema?' }] },
        { myyja: 'Bussipysäkki on tuolla, kaupan edessä.', pt: 'O ponto de ônibus é ali, na frente da loja.', tilanteet: [{ pt: 'Você agradece.', v: 'Kiitos!' }] },
        { myyja: 'Mihin menet?', puhe: 'Mihin meet?', pt: 'Para onde você vai? (o motorista)', tilanteet: [{ pt: 'Você vai para o centro.', v: 'Keskustaan.' }, { pt: 'Você vai para o aeroporto.', v: 'Lentokentälle.' }] },
        { myyja: 'Aikuinen vai lapsi?', pt: 'Adulto ou criança?', tilanteet: [{ pt: 'O bilhete é para você.', v: 'Aikuinen.' }, { pt: 'O bilhete é para o seu filho de oito anos.', v: 'Lapsi.' }] },
        { myyja: 'Kortilla vai käteisellä?', pt: 'No cartão ou em dinheiro?', tilanteet: [{ pt: 'Você paga com cartão.', v: 'Kortilla.' }, { pt: 'Você paga em dinheiro.', v: 'Käteisellä.' }] },
        { myyja: 'Liput, kiitos!', pt: 'Os bilhetes, por favor! (o fiscal no trem)', tilanteet: [{ pt: 'Você mostra o bilhete no celular.', v: 'Tässä.' }] },
        { myyja: 'Tämä bussi ei mene keskustaan.', pt: 'Este ônibus não vai para o centro.', yllatys: true, tilanteet: [{ pt: 'Você entrou no ônibus errado.', v: 'Anteeksi!' }] },
        { myyja: 'Juna on kymmenen minuuttia myöhässä.', pt: 'O trem está dez minutos atrasado.', yllatys: true, tilanteet: [{ pt: 'Tudo bem, você espera.', v: 'Selvä, odotan.' }] }
      ] },
    { id: 'apteekki', oppitunti: 't18', nimi: 'Na farmácia', myyja: 'nainen5', kuvaus: 'Na farmácia: o que você sente, receita, alergia, como tomar o remédio, saquinho… e o remédio em falta.',
      askeleet: [
        { myyja: 'Hei! Miten voin auttaa?', pt: 'Oi! Como posso ajudar?', tilanteet: [{ pt: 'A sua cabeça dói.', v: 'Päätäni särkee.' }, { pt: 'A sua garganta dói.', v: 'Minulla on kipeä kurkku.' }] },
        { myyja: 'Onko teillä resepti?', pt: 'O senhor, a senhora tem receita?', tilanteet: [{ pt: 'Você tem a receita do médico.', v: 'On. Tässä.' }, { pt: 'Você não tem receita.', v: 'Ei ole.' }] },
        { myyja: 'Onko allergioita?', pt: 'Tem alguma alergia?', tilanteet: [{ pt: 'Você não tem alergias.', v: 'Ei ole.' }] },
        { myyja: 'Ottakaa kaksi tablettia kolme kertaa päivässä.', pt: 'Tome dois comprimidos três vezes por dia.', tilanteet: [{ pt: 'Você entendeu.', v: 'Selvä, kiitos.' }] },
        { myyja: 'Tarvitsetko pussin?', puhe: 'Tarviiks pussin?', pt: 'Precisa de saquinho?', tilanteet: [{ pt: 'Você leva na mão.', v: 'Ei tarvitse.' }, { pt: 'Você precisa de um saquinho.', v: 'Kyllä, kiitos.' }] },
        { myyja: 'Kortilla vai käteisellä?', pt: 'No cartão ou em dinheiro?', tilanteet: [{ pt: 'Você paga com cartão.', v: 'Kortilla.' }, { pt: 'Você paga em dinheiro.', v: 'Käteisellä.' }] },
        { myyja: 'Tätä lääkettä ei nyt ole. Käykö toinen?', pt: 'Este remédio está em falta agora. Pode ser outro?', yllatys: true,
          tilanteet: [{ pt: 'Outro serve.', v: 'Käy, kiitos.' }, { pt: 'Você prefere voltar outro dia.', v: 'Ei, kiitos.' }] },
        { myyja: 'Kiitos, hei!', pt: 'Obrigada, tchau!', tilanteet: [{ pt: 'A farmacêutica se despede.', v: 'Hei hei!' }] }
      ] }
  ];
  // Kaikki vastaukset ja myyjän repliikit tilanteittain (väärät vaihtoehdot saman tilanteen sisältä).
  const vastaukset = t => [...new Set(t.askeleet.flatMap(a => a.tilanteet.map(x => x.v)))];
  /* Samaa tarkoittavat vastaukset (KAYTANNOT H1: väärä vaihtoehto ei saa olla myös oikein): myöntävä ja kuittaus,
     kieltävä. Jos oikea vastaus kuuluu ryhmään, saman ryhmän vastaukset eivät ole vääriä vaihtoehtoja; toisen puolen
     kysymykseen kelpaa vain vastaus, joka kuuluu yhteen myyjän kysymykseen eikä mihinkään ryhmään. */
  const MYONTO = ['Kyllä.', 'Kyllä, kiitos.', 'Käy, kiitos.', 'On.', 'On. Tässä.', 'Löytyy. Tässä.', 'Mukaan, kiitos.', 'Kyllä, erikseen.', 'Selvä.', 'Selvä, odotan.', 'Tässä.', 'Selvä, kiitos.'];
  const KIELTO = ['Ei, kiitos.', 'Ei tarvitse.', 'Ei tarvitse, kiitos.', 'Ei ole.', 'Ei muuta, kiitos.', 'Ei kiitos, siinä kaikki.', 'Täällä.', 'Ei, kiitos. Ei muuta.', 'Ei, kiitos. Otan keiton.'];
  const ryhma = v => (MYONTO.includes(v) ? MYONTO : KIELTO.includes(v) ? KIELTO : [v]);
  function tilannePaketti(t) {
    return {
      id: 'tilanne-' + t.id, oppitunti: null, luokka: 'situacoes', ryhma: t.nimi, rekisteri: 'kirja', otsikko: t.nimi, kuvaus: t.kuvaus,
      saanto: 'Ouça a pergunta do atendente e responda curto: Kyllä, kiitos. / Ei, kiitos. / Ei tarvitse. / Täällä. / Mukaan.',
      tilanne: t,
      tee() {
        const a = arpa(t.askeleet);
        const myyjaRooli = ROOLI[t.myyja];
        const repliikki = a.puhe || a.myyja;
        const kaikki = vastaukset(t);
        // 2) Toinen puoli tiskiä (noin joka neljäs): asiakas vastasi näin → mikä oli myyjän kysymys?
        const kysyttavat = t.askeleet.filter(x => x.tilanteet.length > 1 || !x.yllatys);
        const yksiloivat = a.tilanteet.filter(y => ryhma(y.v).length === 1 && t.askeleet.filter(x => x.tilanteet.some(z => z.v === y.v)).length === 1);
        if (Math.random() < 0.3 && yksiloivat.length) {
          const ti = arpa(yksiloivat);
          const muut = kysyttavat.filter(x => x !== a && !x.tilanteet.some(y => y.v === ti.v)).map(x => x.myyja);
          const miksi = {};
          for (const x of t.askeleet) if (x !== a) miksi[x.myyja.toLowerCase()] = `${x.myyja} = ${x.pt}`;
          return { kysymys: `Você é o atendente. O cliente respondeu: “${ti.v}” O que você perguntou?`, kieli: 'pt-BR', avain: 'toinen:' + a.myyja + ti.v,
            oikea: a.myyja, vaihtoehdot: vaihtoehdot(a.myyja, muut), miksi, eiKirjoitus: true, puhu: a.myyja, puhuRooli: myyjaRooli,
            selitys: `${a.myyja} = ${a.pt} → ${ti.v}` };
        }
        // 1) Myyjä kysyy → oppijan vastaus. Kuunneltava: noin joka kolmas vain äänenä (teksti selityksessä).
        const ti = arpa(a.tilanteet);
        const sama = ryhma(ti.v);
        const vaarat = kaikki.filter(v => v !== ti.v && !sama.includes(v) && !a.tilanteet.some(y => y.v === v && y !== ti));
        const omat = a.tilanteet.filter(y => y !== ti && !sama.includes(y.v)).map(y => y.v);
        const miksi = {};
        for (const v of kaikki) if (v !== ti.v) {
          const kenelle = t.askeleet.find(x => x.tilanteet.some(y => y.v === v));
          miksi[v.toLowerCase()] = omat.includes(v) ? `é a resposta certa para outra situação (${a.tilanteet.find(y => y.v === v).pt.toLowerCase()})`
            : `isso responde a outra pergunta: ${kenelle.myyja} (${kenelle.pt.toLowerCase()})`;
        }
        const vainAani = Math.random() < 0.35;
        return { tilanne: ti.pt + (a.yllatys ? ' ⚡ Surpresa!' : ''),
          kysymys: vainAani ? '🔊 Ouça o atendente e responda.' : repliikki, kieli: vainAani ? 'pt-BR' : 'fi-FI', avain: a.myyja + '|' + ti.v,
          kuuntele: repliikki, kuunteleRooli: myyjaRooli, soitaHeti: true,
          oikea: ti.v, vaihtoehdot: vaihtoehdot(ti.v, [...omat, ...vaarat]), miksi, eiKirjoitus: true,
          puhu: ti.v, puhuRooli: ROOLI.nainen0,
          selitys: `${repliikki}${a.puhe ? ` (= ${a.myyja})` : ''} = ${a.pt} → ${ti.v}` };
      }
    };
  }
  // Äänitettävät repliikit (poimi_aanet.js): myyjä omalla äänellään, vastaukset Maian äänellä; paketti treeni.
  // Kaikki tilannepaketit (myös oppitunnin omat, esim. t10:n lähtöselvitys): oppitunti = paketti, jonka Treeni-sivu
  // lataa (pk.oppitunti || 'treeni'), joten poimi_aanet.js äänittää repliikit oikeaan pakettiin (äänitarve, 20.10.2026).
  function puheet() {
    const ulos = [];
    const avain = r => r.tyyppi + r.vaihto;
    for (const pk of PAKETIT) {
      const t = pk.tilanne;
      if (!t || !Array.isArray(t.askeleet)) continue;
      const myyja = ROOLI[t.myyja] || ROOLI.nainen5;
      for (const a of t.askeleet) {
        ulos.push({ rooli: avain(myyja), teksti: a.myyja, oppitunti: pk.oppitunti || null });
        if (a.puhe) ulos.push({ rooli: avain(myyja), teksti: a.puhe, oppitunti: pk.oppitunti || null });
        for (const x of a.tilanteet || []) ulos.push({ rooli: 'nainen0', teksti: x.v, oppitunti: pk.oppitunti || null });
      }
    }
    return ulos;
  }

  /* Luokat (omistaja 18.10.2026: ”treinar coisas específicas: cores, meses, formas dos verbos…”). Jokaisella paketilla
     luokka + ryhma; sama luokitus oppitunnin Treenissä, Treenin yleissivulla ja sivuvalikossa. ryhmat = järjestys
     luokan sivulla: yleisin ja tarpeellisin ensin (kurssin pääperiaate). Paketti ilman oppituntia (oppitunti: null) on
     auki alusta asti (aihesanasto, päätös 18.10.2026); tulevien oppituntien paketit näkyvät himmeinä (app.js). */
  TILANTEET.forEach(t => PAKETIT.push(tilannePaketti(t)));
  LISATILANTEET.forEach(t => PAKETIT.push(Object.assign(tilannePaketti(t), { oppitunti: t.oppitunti })));
  const KATEGORIAT = [
    { id: 'situacoes', nimi: 'Situações', ikoni: '☕', kuvaus: 'O que dizem do outro lado do balcão, e o que você responde: café, almoço, caixa, restaurante, quiosque, padaria, farmácia, ônibus.',
      ryhmat: ['No café', 'Almoço para levar', 'No caixa do mercado', 'No restaurante', 'No quiosque', 'Na padaria', 'No ônibus e no trem', 'No check-in do aeroporto', 'Na loja de roupas', 'Na farmácia', 'No centro de saúde'] },
    { id: 'palavras', nimi: 'Palavras', ikoni: '📚', kuvaus: 'Vocabulário por tema: números, dias e meses, cores, família, comida…',
      ryhmat: ['Números', 'Dias e meses', 'Cores', 'Família', 'Comida e bebida', 'Tempo e estações', 'Horas', 'Profissões', 'Lugares na cidade', 'Direções', 'Quando? Expressões de tempo', 'Roupas', 'Natal', 'Corpo e saúde', 'Conjunções'] },
    { id: 'verbos', nimi: 'Verbos', ikoni: '🏃', kuvaus: 'olla, os tipos de verbo, negação e perguntas: as formas que você usa em toda frase.',
      ryhmat: ['olla', 'Presente', 'Negação', 'Perguntas -ko/-kö', 'Ter: minulla on', 'Forma básica', 'Imperativo', 'Preciso: täytyy', 'Passado (imperfekti)', 'Passado negativo', 'Condicional: haluaisin', 'Perfeito: olen käynyt', 'Passivo: saunotaan', 'Se…: jos'] },
    { id: 'nomes', nimi: 'Nomes e casos', ikoni: '🧩', kuvaus: 'As terminações dos substantivos: partitivo, genitivo e os casos de lugar.',
      ryhmat: ['Partitivo', 'Genitivo', 'Casos de lugar', 'Tabela dos casos', 'Plural', 'Tämä, tuo, se', 'Tipos de palavra', 'Pessoas: -lle, -lta, -lla', 'Posposições', 'Comparar: -mpi, -in', 'Objeto: inteiro ou parte', 'Adjetivo + substantivo', 'Essivo e translativo', 'Sufixo possessivo: -ni', 'Dói: sattuu, särkee'] },
    { id: 'ouvir', nimi: 'Ouvir e pronunciar', ikoni: '👂', kuvaus: 'Ouça e escolha: vogal longa ou curta, h, números e preços falados.',
      ryhmat: ['Vogal longa ou curta', 'Com h ou sem h', 'R vibrante', 'Números e preços', 'Ordem ou afirmação', 'Ouvir o caso: -lla, -lta, -lle', 'Ouvir a comparação', 'Presente ou passado', 'Ditongos ie, uo, yö', 'Perfeito ou passado', 'Passivo, presente ou condicional'] },
    // AV-033 c, d: omat virheet ja oma kierros (ERIKOIS: eivät ole PAKETIT-listassa, ks. REVISAO).
    { id: 'revisao', nimi: 'Revisão', ikoni: '🔁', kuvaus: 'Os seus erros de todos os pacotes, e uma rodada do seu jeito: tipos, até qual lição, tocar, escrever ou ouvir.',
      ryhmat: ['Meus erros', 'Rodada sob medida'] }
  ];
  const ERIKOIS = [REVISAO, OMA];
  const JARJ = id => jarjestysLista().indexOf(id);   // T15.9: profiilin järjestys; tuntematon -1 kuten ennen
  function kategorian(id) {
    const k = KATEGORIAT.find(x => x.id === id);
    if (!k) return [];
    const r = pk => { const i = k.ryhmat.indexOf(pk.ryhma); return i < 0 ? k.ryhmat.length : i; };
    return PAKETIT.concat(ERIKOIS).filter(p => p.luokka === id).sort((a, b) => r(a) - r(b) || JARJ(a.oppitunti) - JARJ(b.oppitunti));
  }

  /* Yhden sanan treeni (omistaja 18.10.2026: ”Treinar esta palavra” sanasivulla): sanan omat muodot leksikosta
     (Sanasto.paradigma, ei arvausta). Nomini: partitiivi ja genetiivi (oppitunnit 3 ja 5), paikan sijat vasta kun
     oppitunti 6 on saavutettu; verbi: preesens persoonittain ja kielto. Väärät vaihtoehdot ovat saman sanan muita
     muotoja (H1: eroaa yhdellä asialla). Ei kuulu PAKETIT-listaan: syntyy sanasivun linkistä #treino-sana-<id>. */
  const NOMINIT = ['substantiivi', 'adjektiivi'];
  function sanapaketti(id, saavutetut) {
    const r = S.hae(id);
    if (!r || r.piilota || !(NOMINIT.includes(r.l) || r.l === 'verbi')) return null;   // piilotettu = virhemuoto tai kirjainesimerkki
    const p = S.paradigma(id) || {};
    const nimi = id.replace(/:.*/, '');
    const pk = { id: 'sana-' + id, sana: id, paluu: '#palavra-' + encodeURIComponent(id), oppitunti: null, luokka: 'palavras', ryhma: '',
      rekisteri: 'kirja', otsikko: `Treinar: ${nimi}`, kirjoitus: true };
    if (r.l === 'verbi') {
      if (!p['prees.1s'] || !p.kielto) return null;
      const f = muodot(id);
      pk.kuvaus = `${nimi} (${merkitys(id)}): eu, você, ele… e a negação.`;
      pk.saanto = `${nimi}: ${PERS.map(k => `${P[k]} ${f.myonteinen[k]}`).join(', ')}; negação: en ${p.kielto}, et ${p.kielto}…`;
      pk.tee = () => {
        const k = arpa(PERS);
        if (Math.random() < 0.3) {
          const vaarat = [f.myonteinen[k], f.myonteinen['3s'], nimi].filter(x => x !== p.kielto);
          return { kysymys: `${P[k]} ${KIELLOT[k]} ___ (${nimi})`, kieli: 'fi-FI', puhu: `${P[k]} ${f.kielto[k]}`, oikea: p.kielto,
            vaihtoehdot: vaihtoehdot(p.kielto, vaarat), avain: 'kielto' + k, solu: `${nimi} · ${KIELTOMUOTO}`,
            miksi: Object.fromEntries(vaarat.map(x => [pieni(x), `${x} é a forma afirmativa ou a forma básica; depois de ${KIELLOT[k]} vem a ${KIELTOMUOTO}`])),
            selitys: `${P[k]} ${f.kielto[k]} = ${PT_PRON[k]} não…` };
        }
        return { kysymys: `${P[k]} ___ (${nimi})`, kieli: 'fi-FI', puhu: `${P[k]} ${f.myonteinen[k]}`, oikea: f.myonteinen[k],
          vaihtoehdot: vaihtoehdot(f.myonteinen[k], PERS.map(x => f.myonteinen[x])), miksi: persoonaMiksi(f.myonteinen, k), avain: k,
          solu: `${nimi} · ${soluNimi('prees.' + k)}`, selitys: `${P[k]} ${f.myonteinen[k]} (${PT_PRON[k]}).` };
      };
      return pk;
    }
    const auki = saavutetut && typeof saavutetut.has === 'function' ? saavutetut : new Set();   // Set (myös toisesta ikkunasta tai Node-vm:stä)
    // Muoto, joka on samalla piilotetun tietueen tunniste (katu → katua = piilotettu verbi katua, erä 2; kutsu → kutsua,
    // erä 1), ei ole kysymys eikä vaihtoehto: napin kupla näyttäisi piilotetun sanan (tarkistus M).
    const piilossa = x => { const h = x ? S.hae(x) : null; return !!(h && h.piilota && h.id !== id); };
    /* AV-033 e (omistaja 23.10.2026): paikan sijat ja monikko, kun oppitunti on saavutettu (Kasitteet.OPETUS): sisäsijat
       t06, ulkosijat t07, monikko -t t09, monikon partitiivi t11, genetiivi t17, monikon paikallissijat t19. Solu on auki,
       kun sen oppitunti on saavutetuissa tai ennen pisintä saavutettua. Nimen (Helsinki) monikkoa ei kysytä. */
    const ylin = Math.max(-1, ...[...auki].map(o => KA.jarjestys(o)).filter(x => x !== null));
    const auki2 = x => { const o = KA.opetus(x, r.l); if (o === undefined) return true; return !!o && (auki.has(o) || KA.jarjestys(o) <= ylin); };
    const EHDOKKAAT = ['part', 'gen', 'ines', 'ela', 'ill', 'ade', 'abl', 'all', 'mon.nom', 'mon.part', 'mon.gen', 'mon.ines', 'mon.ela', 'mon.ill', 'mon.ade', 'mon.abl', 'mon.all'];
    const nimiSana = /^[A-ZÄÖÅ]/.test(nimi);
    // K8: ihminen, eläin tai asema (paikka ulko) ei ole sisäpaikka: äidillä, äidille, ei *äidissä.
    const sisaPois = r.paikka === 'ulko';
    const solut = EHDOKKAAT.filter(x => (x === 'part' || x === 'gen' || auki2(x)) && !(nimiSana && /^mon\./.test(x)) && !(sisaPois && /^(mon\.)?(ines|ela|ill)$/.test(x)))
      .filter(x => p[x] && p[x] !== nimi && !piilossa(p[x]));
    if (!solut.length) return null;
    const muodotNomini = ['nom', ...solut].filter(x => p[x] && !piilossa(p[x]));
    pk.kuvaus = `${nimi} (${merkitys(id)}): ${solut.map(x => soluNimi(x)).join(', ')}.`;
    pk.saanto = `${nimi}: ${solut.map(x => `${soluNimi(x)} ${p[x]}`).join('; ')}.`;
    // H1: lähimmät harhat ensin: sama sija toisessa luvussa (kirjastossa ↔ kirjastoissa) ja saman sarjan muut sijat.
    const SARJA = { ines: 'sisa', ela: 'sisa', ill: 'sisa', ade: 'ulko', abl: 'ulko', all: 'ulko' };
    const perus = x => x.replace(/^mon\./, '');
    pk.tee = () => {
      const solu = arpa(solut);
      const oikea = p[solu];
      const lahella = muodotNomini.filter(x => x !== solu && (perus(x) === perus(solu) || (SARJA[perus(x)] && SARJA[perus(x)] === SARJA[perus(solu)] && /^mon\./.test(x) === /^mon\./.test(solu))));
      const muut = muodotNomini.filter(x => x !== solu && !lahella.includes(x));
      const vaarat = yksilolliset(sekoita(lahella).concat(sekoita(muut)).map(x => p[x])).filter(x => x !== oikea).slice(0, 3);
      const miksi = {};
      for (const x of muodotNomini) if (p[x] !== oikea && !miksi[pieni(p[x])]) miksi[pieni(p[x])] = `${p[x]} = ${x === 'nom' ? 'forma básica' : soluNimi(x)}`;
      return { kysymys: `${nimi} → ${soluNimi(solu)}`, kieli: 'pt-BR', puhu: oikea, oikea, vaihtoehdot: sekoita([oikea, ...vaarat]), miksi, avain: solu,
        solu: `${nimi} · ${soluNimi(solu)}`, selitys: `${nimi} → ${oikea}.` };
    };
    return pk;
  }

  window.Treeni = {
    paketit: PAKETIT,
    sanapaketti,
    KATEGORIAT,
    kategoria: id => KATEGORIAT.find(x => x.id === id) || null,
    kategorian,
    puheet,
    oppitunnin,
    hae: id => PAKETIT.find(p => p.id === id) || ERIKOIS.find(p => p.id === id) || null,
    tahdelliset: () => { const t = tahdellaIdt(); return PAKETIT.filter(p => t.has(p.id)); },
    onTahdella,
    aja
  };
})();
