/* Jakso 18: Pelastus. Oma materiaali, ei kirjan tekstiä.
   Kielioppi: perfekti kerronnassa, mesmo ja outro, doer. Ääntäminen: diftongit.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l18',
  lyhyt: '18',
  jakso: 'Jakso 18',
  otsikko: 'Lääkärissä: perfekti kertomisessa',
  lahde: 'Aihe: lääkärissä, kehonosat · Kielioppi: perfekti kerronnassa, mesmo/outro · Ääntäminen: diftongit',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geologi, pelastaa Jayn' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, pelastettu' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 2, kuvaus: 'Maian veli, pelastuksen sankari' },
    marina: { nimi: 'Marina', tyyppi: 'nainen', vaihto: 2, kuvaus: 'sairaanhoitaja' },
    mirela: { nimi: 'Mirela', tyyppi: 'nainen', vaihto: 3, kuvaus: 'Maian ystävä, tuo pão de queijoa' },
    mateus: { nimi: 'Mateus', tyyppi: 'mies', vaihto: 3, kuvaus: 'Maian ystävä' },
    murilo: { nimi: 'Murilo', tyyppi: 'mies', vaihto: 4, kuvaus: 'Maian ystävä, historianopettaja' },
    marcus: { nimi: 'Marcus', tyyppi: 'mies', vaihto: 5, kuvaus: 'jengipomo, koominen konna' },
    cida: { nimi: 'Dona Cida', tyyppi: 'nainen', vaihto: 5, kuvaus: 'mäen asukas, auttaa ystäviä' }
  },

  aiheet: ['keho', 'toiminta', 'ihmiset', 'viestinta'],

  sanasto: [
    'cabeça', 'costas', 'barriga', 'estômago', 'garganta', 'pescoço', 'ombro', 'braço', 'perna', 'joelho', 'pé', 'dente', 'nariz', 'orelha',
    'doer', 'dor', 'dor de cabeça', 'febre', 'remédio', 'médico', 'enfermeira', 'farmácia', 'descansar',
    'mesmo', 'mesma coisa', 'agora mesmo', 'outro', 'outra', 'outra vez', 'primeiro', 'depois', 'de repente', 'por fim',
    'herói', 'soltar', 'salvar', 'acenar', 'vizinho', 'amarelo'
  ],

  sanat: {
    // <<SANAT
    // dialogi 1
    'entrego': { fi: 'vien (perille), jaan', aa: 'ẽ-TRE-gu', ipa: '[ẽˈtɾeɡu]', sl: 'verbi', huom: 'perusmuoto {entregar}; entregar uma carta = toimittaa kirje' },
    'passei': { fi: 'kävin, ohitin; vietin', aa: 'pa-SEI', ipa: '[paˈsej]', sl: 'verbi, perfekti', huom: 'perusmuoto {passar}' },
    'passou': { fi: 'kävi, ohitti; vietti', aa: 'pa-SOU', ipa: '[paˈsow]', sl: 'verbi, perfekti', huom: 'perusmuoto {passar}' },
    'acenar': { fi: 'vilkuttaa', aa: 'a-se-NAH', ipa: '[aseˈnah]', sl: 'verbi, perusmuoto' },
    'acenei': { fi: 'vilkutin', aa: 'a-se-NEI', ipa: '[aseˈnej]', sl: 'verbi, perfekti', huom: 'perusmuoto {acenar}' },
    'acenou': { fi: 'vilkutti', aa: 'a-se-NOU', ipa: '[aseˈnow]', sl: 'verbi, perfekti', huom: 'perusmuoto {acenar}' },
    'corri': { fi: 'juoksin', aa: 'ko-HI', ipa: '[koˈhi]', sl: 'verbi, perfekti', huom: 'perusmuoto {correr}' },
    'correu': { fi: 'juoksi', aa: 'ko-HEU', ipa: '[koˈhew]', sl: 'verbi, perfekti', huom: 'perusmuoto {correr}' },
    'moça': { fi: 'neiti, nuori nainen', aa: 'MO-sa', ipa: '[ˈmosɐ]', sl: 'substantiivi, feminiini', huom: 'puhuttelu: ”hei neiti”' },
    'procuram': { fi: 'etsivät; etsitte', aa: 'pro-KU-rãu', ipa: '[pɾoˈkuɾɐ̃w]', sl: 'verbi', huom: 'perusmuoto {procurar}' },
    'amarela': { fi: 'keltainen (feminiinisanan edellä)', aa: 'a-ma-RE-la', ipa: '[amaˈɾɛlɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {amarelo}' },
    'neto': { fi: 'pojanpoika, lapsenlapsi', aa: 'NE-tu', ipa: '[ˈnɛtu]', sl: 'substantiivi, maskuliini', huom: 'nainen neta' },
    'levou': { fi: 'vei', aa: 'le-VOU', ipa: '[leˈvow]', sl: 'verbi, perfekti', huom: 'perusmuoto {levar}' },
    'chorou': { fi: 'itki', aa: 'sho-ROU', ipa: '[ʃoˈɾow]', sl: 'verbi, perfekti', huom: 'perusmuoto {chorar}' },
    'cida': { fi: 'Cida (etunimi, Aparecida)', aa: 'SI-da', ipa: '[ˈsidɐ]', sl: 'etunimi', huom: 'dona Cida = rouva Cida' },
    'parem': { fi: 'pysähtykää', aa: 'PA-rẽi', ipa: '[ˈpaɾẽj]', sl: 'verbi, käskymuoto', huom: 'perusmuoto {parar}' },
    'solte': { fi: 'päästä irti', aa: 'SOU-tsi', ipa: '[ˈsowtʃi]', sl: 'verbi, käskymuoto', huom: 'perusmuoto {soltar}' },
    'soltou': { fi: 'päästi irti', aa: 'sou-TOU', ipa: '[sowˈtow]', sl: 'verbi, perfekti', huom: 'perusmuoto {soltar}' },
    'bola de gude': { fi: 'marmorikuula', aa: 'BO-la di GU-di', ipa: '[ˈbɔlɐ dʒi ˈɡudʒi]', sl: 'ilmaus', huom: 'lasten leikki' },
    'gude': { fi: 'marmorikuula (bola de gude)', aa: 'GU-di', ipa: '[ˈɡudʒi]', sl: 'substantiivi, maskuliini' },
    'vermelha': { fi: 'punainen (feminiinisanan edellä)', aa: 'veh-ME-lja', ipa: '[vehˈmeʎɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {vermelho}' },
    'pediu': { fi: 'pyysi', aa: 'pe-DIU', ipa: '[peˈdʒiw]', sl: 'verbi, perfekti', huom: 'perusmuoto {pedir}' },
    'lanche': { fi: 'välipala, eväs', aa: 'LÃ-shi', ipa: '[ˈlɐ̃ʃi]', sl: 'substantiivi, maskuliini', huom: 'koulussa evästä sanotaan lanche' },
    'pensou': { fi: 'ajatteli', aa: 'pẽ-SOU', ipa: '[pẽˈsow]', sl: 'verbi, perfekti', huom: 'perusmuoto {pensar}' },
    'portunhol': { fi: 'portunhol (portugalin ja espanjan sekoitus)', aa: 'poh-tu-NJOU', ipa: '[pohtuˈɲɔw]', sl: 'substantiivi, maskuliini', huom: 'leikillinen sana' },
    'funciona': { fi: 'toimii', aa: 'fũ-si-Õ-na', ipa: '[fũsiˈõnɐ]', sl: 'verbi', huom: 'perusmuoto {funcionar}' },
    'vizinho': { fi: 'naapuri', aa: 'vi-ZĨ-nju', ipa: '[viˈzĩɲu]', sl: 'substantiivi, maskuliini' },
    'vizinhos': { fi: 'naapurit', aa: 'vi-ZĨ-njus', ipa: '[viˈzĩɲus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {vizinho}' },
    'aplaudiu': { fi: 'taputti', aa: 'ap-lau-DIU', ipa: '[aplawˈdʒiw]', sl: 'verbi, perfekti', huom: 'perusmuoto aplaudir' },
    'aplaudiram': { fi: 'taputtivat', aa: 'ap-lau-DI-rãu', ipa: '[aplawˈdʒiɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto aplaudir' },
    'salvar': { fi: 'pelastaa', aa: 'sau-VAH', ipa: '[sawˈvah]', sl: 'verbi, perusmuoto' },
    'salvou': { fi: 'pelasti', aa: 'sau-VOU', ipa: '[sawˈvow]', sl: 'verbi, perfekti', huom: 'perusmuoto {salvar}' },
    'salvaram': { fi: 'pelastivat', aa: 'sau-VA-rãu', ipa: '[sawˈvaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {salvar}' },
    'herói': { fi: 'sankari', aa: 'e-ROI', ipa: '[eˈɾɔj]', sl: 'substantiivi, maskuliini', huom: 'nainen heroína' },
    'hakuna': { fi: 'hakuna (swahilia)', aa: 'a-KU-na', ipa: '[aˈkunɐ]', sl: 'ilmaus', huom: 'hakuna matata = ei huolia, laulu Leijonakuninkaasta' },
    'matata': { fi: 'matata (swahilia)', aa: 'ma-TA-ta', ipa: '[maˈtatɐ]', sl: 'ilmaus', huom: 'hakuna matata = ei huolia' },
    // dialogi 2
    'upa': { fi: 'UPA, kiirevastaanotto', aa: 'U-pa', ipa: '[ˈupɐ]', sl: 'substantiivi, feminiini', huom: 'Unidade de Pronto Atendimento' },
    'cuida': { fi: 'hoitaa', aa: 'KUI-da', ipa: '[ˈkujdɐ]', sl: 'verbi', huom: 'perusmuoto {cuidar}; cuidar de = pitää huolta' },
    'senta': { fi: 'istu', aa: 'SẼ-ta', ipa: '[ˈsẽtɐ]', sl: 'verbi, käskymuoto', huom: 'perusmuoto sentar; puhekielessä sama kuin hän-muoto' },
    'dói': { fi: 'sattuu', aa: 'DOI', ipa: '[dɔj]', sl: 'verbi', huom: 'perusmuoto {doer}' },
    'doem': { fi: 'sattuvat', aa: 'DO-ẽi', ipa: '[ˈdɔẽj]', sl: 'verbi', huom: 'perusmuoto {doer}' },
    'doer': { fi: 'sattua', aa: 'do-EH', ipa: '[doˈeh]', sl: 'verbi, perusmuoto' },
    'espalda': { kieli: 'es', fi: 'selkä (espanjaa)', aa: 'es-PAL-da', ipa: '[esˈpawdɐ]', sl: 'substantiivi, espanjaa', huom: 'portugaliksi {costas}' },
    'barriga': { fi: 'vatsa', aa: 'ba-HI-ga', ipa: '[baˈhiɡɐ]', sl: 'substantiivi, feminiini' },
    'abra': { fi: 'avaa', aa: 'A-bra', ipa: '[ˈabɾɐ]', sl: 'verbi, käskymuoto', huom: 'perusmuoto {abrir}; kohtelias käsky' },
    'respire': { fi: 'hengitä', aa: 'hes-PI-ri', ipa: '[hesˈpiɾi]', sl: 'verbi, käskymuoto', huom: 'perusmuoto respirar' },
    'febre': { fi: 'kuume', aa: 'FE-bri', ipa: '[ˈfɛbɾi]', sl: 'substantiivi, feminiini' },
    'deixa': { fi: 'anna; jätä', aa: 'DEI-sha', ipa: '[ˈdejʃɐ]', sl: 'verbi', huom: 'perusmuoto {deixar}; deixa eu ver = annahan minun katsoa' },
    'grave': { fi: 'vakava', aa: 'GRA-vi', ipa: '[ˈɡɾavi]', sl: 'adjektiivi' },
    'toma': { fi: 'ota; juo', aa: 'TÕ-ma', ipa: '[ˈtõmɐ]', sl: 'verbi', huom: 'perusmuoto {tomar}; puhekielessä käsky' },
    'descansa': { fi: 'lepää', aa: 'dis-KÃ-sa', ipa: '[dʒisˈkɐ̃sɐ]', sl: 'verbi', huom: 'perusmuoto {descansar}; puhekielessä käsky' },
    'prometo': { fi: 'lupaan', aa: 'pro-ME-tu', ipa: '[pɾoˈmetu]', sl: 'verbi', huom: 'perusmuoto {prometer}' },
    'dorme': { fi: 'nuku', aa: 'DOH-mi', ipa: '[ˈdɔhmi]', sl: 'verbi', huom: 'perusmuoto {dormir}; puhekielessä käsky' },
    // kielioppi
    'mesma': { fi: 'sama (feminiini)', aa: 'MEZ-ma', ipa: '[ˈmezmɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {mesmo}' },
    'mesma coisa': { fi: 'sama asia', aa: 'MEZ-ma KOI-za', ipa: '[ˈmezmɐ ˈkojzɐ]', sl: 'ilmaus' },
    'agora mesmo': { fi: 'juuri nyt', aa: 'a-GO-ra MEZ-mu', ipa: '[aˈɡɔɾɐ ˈmezmu]', sl: 'ilmaus' },
    'venho': { fi: 'tulen', aa: 'VẼ-nju', ipa: '[ˈvẽɲu]', sl: 'verbi', huom: 'perusmuoto {vir}' },
    'outra': { fi: 'toinen (feminiini)', aa: 'OU-tra', ipa: '[ˈowtɾɐ]', sl: 'pronomini, feminiini', huom: 'maskuliini {outro}' },
    'outra vez': { fi: 'taas, uudestaan', aa: 'OU-tra VES', ipa: '[ˈowtɾɐ ves]', sl: 'ilmaus' },
    'outros': { fi: 'toiset (maskuliinin monikko)', aa: 'O-trus', ipa: '[ˈotɾus]', sl: 'pronomini, monikko', huom: 'yksikkö {outro}' },
    'outras': { fi: 'toiset (feminiinin monikko)', aa: 'OU-tras', ipa: '[ˈowtɾɐs]', sl: 'pronomini, monikko', huom: 'yksikkö {outra}' },
    'ajudaram': { fi: 'auttoivat', aa: 'a-zhu-DA-rãu', ipa: '[aʒuˈdaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {ajudar}' },
    'pés': { fi: 'jalat, jalkaterät', aa: 'PES', ipa: '[pɛs]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {pé}' },
    'contou': { fi: 'kertoi; laski', aa: 'kõ-TOU', ipa: '[kõˈtow]', sl: 'verbi, perfekti', huom: 'perusmuoto {contar}' },
    'mostrou': { fi: 'näytti', aa: 'mos-TROU', ipa: '[mosˈtɾow]', sl: 'verbi, perfekti', huom: 'perusmuoto {mostrar}' },
    'subiram': { fi: 'nousivat', aa: 'su-BI-rãu', ipa: '[suˈbiɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {subir}' },
    'subi': { fi: 'nousin', aa: 'su-BI', ipa: '[suˈbi]', sl: 'verbi, perfekti', huom: 'perusmuoto {subir}' },
    'subiu': { fi: 'nousi', aa: 'su-BIU', ipa: '[suˈbiw]', sl: 'verbi, perfekti', huom: 'perusmuoto {subir}' },
    'subimos': { fi: 'nousimme', aa: 'su-BĨ-mus', ipa: '[suˈbĩmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {subir}' },
    'saí': { fi: 'lähdin', aa: 'sa-I', ipa: '[saˈi]', sl: 'verbi, perfekti', huom: 'perusmuoto {sair}' },
    'saímos': { fi: 'lähdimme', aa: 'sa-Ĩ-mus', ipa: '[saˈĩmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {sair}' },
    'saíram': { fi: 'lähtivät', aa: 'sa-I-rãu', ipa: '[saˈiɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {sair}' },
    'ouvi': { fi: 'kuulin', aa: 'o-VI', ipa: '[oˈvi]', sl: 'verbi, perfekti', huom: 'perusmuoto {ouvir}' },
    'ouviu': { fi: 'kuuli', aa: 'o-VIU', ipa: '[oˈviw]', sl: 'verbi, perfekti', huom: 'perusmuoto {ouvir}' },
    'ouvimos': { fi: 'kuulimme', aa: 'o-VĨ-mus', ipa: '[oˈvĩmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {ouvir}' },
    'ouviram': { fi: 'kuulivat', aa: 'o-VI-rãu', ipa: '[oˈviɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {ouvir}' },
    'li': { fi: 'luin', aa: 'LI', ipa: '[li]', sl: 'verbi, perfekti', huom: 'perusmuoto {ler}' },
    'leu': { fi: 'luki', aa: 'LEU', ipa: '[lew]', sl: 'verbi, perfekti', huom: 'perusmuoto {ler}' },
    'lemos': { fi: 'luimme', aa: 'LẼ-mus', ipa: '[ˈlẽmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {ler}' },
    'leram': { fi: 'lukivat', aa: 'LE-rãu', ipa: '[ˈlɛɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {ler}' },
    'resfriado': { fi: 'flunssainen; flunssa', aa: 'hes-fri-A-du', ipa: '[hesfɾiˈadu]', sl: 'adjektiivi, substantiivi', huom: 'Brasiliassa tavallinen sana flunssalle' },
    'constipado': { fi: 'ummetuksessa oleva', aa: 'kõs-tsi-PA-du', ipa: '[kõstʃiˈpadu]', sl: 'adjektiivi', huom: 'ansa: espanjan constipado = flunssainen' },
    'pães': { fi: 'leivät', aa: 'PÃIS', ipa: '[pɐ̃js]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {pão}' },
    'mães': { fi: 'äidit', aa: 'MÃIS', ipa: '[mɐ̃js]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {mãe}' },
    'corações': { fi: 'sydämet', aa: 'ko-ra-SÕIS', ipa: '[koɾɐˈsõjs]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {coração}' },
    'boi': { fi: 'härkä', aa: 'BOI', ipa: '[boj]', sl: 'substantiivi, maskuliini' },
    'põe': { fi: 'panee', aa: 'PÕI', ipa: '[põj]', sl: 'verbi', huom: 'perusmuoto {pôr}' },
    // kehonosat ja kulttuuri
    'estômago': { fi: 'vatsalaukku', aa: 'es-TÕ-ma-gu', ipa: '[esˈtõmɐɡu]', sl: 'substantiivi, maskuliini' },
    'garganta': { fi: 'kurkku', aa: 'gah-GÃ-ta', ipa: '[ɡahˈɡɐ̃tɐ]', sl: 'substantiivi, feminiini' },
    'pescoço': { fi: 'kaula', aa: 'pes-KO-su', ipa: '[pesˈkosu]', sl: 'substantiivi, maskuliini' },
    'ombro': { fi: 'olkapää', aa: 'Õ-bru', ipa: '[ˈõbɾu]', sl: 'substantiivi, maskuliini' },
    'joelho': { fi: 'polvi', aa: 'zho-E-lju', ipa: '[ʒoˈeʎu]', sl: 'substantiivi, maskuliini' },
    'nariz': { fi: 'nenä', aa: 'na-RIS', ipa: '[naˈɾis]', sl: 'substantiivi, maskuliini' },
    'orelha': { fi: 'korva', aa: 'o-RE-lja', ipa: '[oˈɾeʎɐ]', sl: 'substantiivi, feminiini' },
    'dor de cabeça': { fi: 'päänsärky', aa: 'DOH di ka-BE-sa', ipa: '[doh dʒi kaˈbesɐ]', sl: 'ilmaus' },
    'ubs': { fi: 'UBS, perusterveysasema', aa: 'U BE E-si', ipa: '[u be ˈɛsi]', sl: 'lyhenne', huom: 'Unidade Básica de Saúde' },
    'samu': { fi: 'SAMU, ambulanssipalvelu', aa: 'SA-mu', ipa: '[ˈsamu]', sl: 'lyhenne', huom: 'hätänumero 192' },
    'posto': { fi: 'asema, piste', aa: 'POS-tu', ipa: '[ˈpostu]', sl: 'substantiivi, maskuliini', huom: 'posto de saúde = terveysasema' },
    'de repente': { fi: 'yhtäkkiä', aa: 'di he-PẼ-tsi', ipa: '[dʒi heˈpẽtʃi]', sl: 'ilmaus' },
    'por fim': { fi: 'lopuksi', aa: 'poh FĨ', ipa: '[poh fĩ]', sl: 'ilmaus', huom: 'myös finalmente' }
    // SANAT>>
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kertoa tapahtumaketjun perfektillä: ensin, sitten, lopuksi.</li>
  <li>Osaat nimetä kehonosat ja sanoa, mihin sattuu: <span class="pt">dói a cabeça</span>.</li>
  <li>Osaat käyttää sanoja <span class="pt">mesmo</span> (sama, todella) ja <span class="pt">outro</span> (toinen).</li>
  <li>Osaat ääntää portugalin diftongit eli kaksoisvokaalit.</li>
</ul>
<p data-paikka="favela">Sunnuntai Belo Horizontessa. Anderson tietää, mistä Jay löytyy. Ystävät nousevat Morro do Cascalho -mäelle, ja sen jälkeen Marina tutkii Jayn terveysasemalla.</p>

<section class="osio" data-paikka="favela">
  <h2>Dialogi 1: A casa amarela</h2>
  <p class="ohje">Ystävät kiipeävät mäelle. Kuuntele ensin ja mieti, miten Marcus lopulta rauhoittuu. Huomaa, miten tapahtumat kerrotaan perfektillä järjestyksessä.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi 1">
    <p class="s" data-h="kertoja" data-fi="Puoli tuntia myöhemmin ryhmä on Morro do Cascalho -mäen juurella.">Meia hora depois, o grupo está no pé do Morro do Cascalho.</p>
    <p class="s" data-h="maia" data-fi="Anderson, mistä sinä tiedät, missä mies asuu?">Anderson, como você sabe onde o homem mora?</p>
    <p class="s" data-h="anderson" data-fi="Minä vien hänen kirjeensä joka viikko. Tänä aamuna kävin siellä ja näin Jayn ikkunassa. Vilkutin hänelle, ja hän vilkutti minulle. Sitten juoksin kotiin.">Eu entrego as cartas dele toda semana. Hoje cedo eu passei lá e vi o Jay na janela. Eu acenei pra ele, e ele acenou pra mim. Depois eu corri pra casa.</p>
    <p class="s" data-h="cida" data-fi="Neiti, etsittekö te sitä ulkomaalaista poikaa? Hän on keltaisessa talossa tuolla ylhäällä. Pojanpoikani vei hänelle ruokaa aamulla. Parka itki paljon.">Moça, vocês procuram o rapaz gringo? Ele está na casa amarela, lá em cima. Meu neto levou comida pra ele hoje cedo. O pobre rapaz chorou muito.</p>
    <p class="s" data-h="maia" data-fi="Kiitos paljon, rouva Cida!">Muito obrigada, dona Cida!</p>
    <p class="s" data-h="kertoja" data-fi="Keltaisen talon ovella Marcus seisoo mikroaaltouuni kädessään.">Na casa amarela, o Marcus está na porta, com um micro-ondas na mão.</p>
    <p class="s" data-h="marcus" data-fi="Seis! Minulla on se ulkomaalainen, ja minä aion panna hänet mikroaaltouuniin!">Parem! Eu tenho o gringo, e eu vou colocar ele no micro-ondas!</p>
    <p class="s" data-h="jay" data-fi="Maia! Minä en ole pão de queijo!">Maia! Eu não sou pão de queijo!</p>
    <p class="s" data-h="maia" data-fi="Marcus, päästä Jay heti vapaaksi!">Marcus, solte o Jay agora!</p>
    <p class="s" data-h="murilo" data-fi="Marcus? Minä olen Murilo, viidenneltä luokalta!">Marcus? Sou eu, o Murilo, da quinta série!</p>
    <p class="s" data-h="marina" data-fi="Ja minä olen Marina. Sinä annoit minulle punaisen marmorikuulan!">E eu sou a Marina. Você me deu uma bola de gude vermelha!</p>
    <p class="s" data-h="mirela" data-fi="Ja minä toin pão de queijoa, sinun lempparisi! Pyysit koulussa aina minun eväitäni.">E eu trouxe pão de queijo, o seu favorito! Você sempre pediu o meu lanche na escola.</p>
    <p class="s" data-h="marcus" data-fi="Mirelan pão de queijo… Minä söin sinun eväsi joka päivä. Anteeksi, Mirela.">O pão de queijo da Mirela… Eu comi o seu lanche todo dia. Desculpa, Mirela.</p>
    <p class="s" data-h="mateus" data-fi="Marcus, Jay ei puhunut sinusta pahaa. Hän ajatteli espanjaksi. Hän puhuu portunholia!">Marcus, o Jay não falou mal de você. Ele pensou em espanhol. Ele fala portunhol!</p>
    <p class="s" data-h="marcus" data-fi="Selvä, selvä. En pane ketään mikroaaltouuniin. Se ei edes toimi!">Tá bom, tá bom. Eu não vou colocar ninguém no micro-ondas. Ele nem funciona!</p>
    <p class="s" data-h="kertoja" data-fi="Marcus avasi oven, ja Jay tuli ulos. Rouva Cida ja naapurit taputtivat.">O Marcus abriu a porta, e o Jay saiu. Dona Cida e os vizinhos aplaudiram.</p>
    <p class="s" data-h="jay" data-fi="Kiitos, Anderson! Sinä pelastit minut!">Obrigado, Anderson! Você me salvou!</p>
    <p class="s" data-h="maia" data-fi="Anderson, sinä olet meidän sankarimme!">Anderson, você é o nosso herói!</p>
    <p class="s" data-h="anderson" data-fi="Ei kestä, Jay! Hakuna matata!">De nada, Jay! Hakuna matata!</p>
  </div>
</section>

<section class="osio" data-paikka="upa">
  <h2>Dialogi 2: Na UPA</h2>
  <p class="ohje">Marina työskentelee terveysasemalla ja tutkii Jayn. Jay sanoo yhden sanan espanjaksi: huomaa, miten Marina korjaa sen.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi 2">
    <p class="s" data-h="kertoja" data-fi="Tunti myöhemmin UPA-terveysasemalla. Marina työskentelee siellä, ja tänään hän hoitaa Jayta.">Uma hora depois, na UPA. A Marina trabalha lá, e hoje ela cuida do Jay.</p>
    <p class="s" data-h="marina" data-fi="Jay, istu tähän. Mihin sattuu?">Jay, senta aqui. Onde dói?</p>
    <p class="s" data-h="jay" data-fi="Päähän sattuu, ja selkään sattuu paljon. (espanjalainen sana)">Dói a cabeça, e dói muito a espalda.</p>
    <p class="s" data-h="marina" data-fi="Espalda? Portugaliksi se on ”costas”. Sattuuko selkään?">Espalda? Em português é “costas”. Dói nas costas?</p>
    <p class="s" data-h="jay" data-fi="Juuri niin! Selkään sattuu. Ja vatsaankin.">Isso! Dói nas costas. E a barriga também.</p>
    <p class="s" data-h="marina" data-fi="Avaa suu. Hengitä syvään.">Abra a boca. Respire fundo.</p>
    <p class="s" data-h="jay" data-fi="Aaaa…">Ah…</p>
    <p class="s" data-h="marina" data-fi="Onko sinulla kuumetta? Katsotaan. Kolmekymmentäseitsemän pilkku kaksi. Normaali.">Você tem febre? Deixa eu ver. Trinta e sete e dois. Normal.</p>
    <p class="s" data-h="jay" data-fi="Join liikaa, eikö niin?">Eu bebi demais, né?</p>
    <p class="s" data-h="marina" data-fi="Joit todella! Kuusi tuoppia ja yö mäellä. Mutta sinulla ei ole mitään vakavaa.">Bebeu mesmo! Seis chopes e uma noite no morro. Mas você não tem nada grave.</p>
    <p class="s" data-h="jay" data-fi="Kiitos, Marina. Haluan vielä yhden tuopin.">Obrigado, Marina. Eu quero outro chope.</p>
    <p class="s" data-h="marina" data-fi="Toisen tuopin? Ei missään nimessä! Juo toinen vesi.">Outro chope? De jeito nenhum! Toma outra água.</p>
    <p class="s" data-h="marina" data-fi="Apteekista saa lääkettä päänsärkyyn. Mutta paras lääke on nukkua.">Tem remédio na farmácia pra dor de cabeça. Mas o melhor remédio é dormir.</p>
    <p class="s" data-h="jay" data-fi="Sinä olet oikea sairaanhoitaja, Marina.">Você é enfermeira de verdade, Marina.</p>
    <p class="s" data-h="marina" data-fi="Ja sinä olet oikea potilas! Lepää. Äläkä enää koskaan sano Marcukselle ”esquisito”.">E você é paciente mesmo! Descansa. E nunca mais fala “esquisito” pro Marcus.</p>
    <p class="s" data-h="jay" data-fi="Ei enää koskaan. Lupaan.">Nunca mais. Eu prometo.</p>
    <p class="s" data-h="kertoja" data-fi="Jay nukkui kaksitoista tuntia. Maia pysyi hänen vieressään.">O Jay dormiu doze horas. A Maia ficou do lado dele.</p>
  </div>
</section>

<section class="osio" data-paikka="upa">
  <h2>Mihin sattuu? Marina tutkii Jayn</h2>
  <p class="ohje">Napauta kehon osaa, niin Jay kertoo, mihin sattuu ja miksi (perfektillä). Paina sitten ”Marina kysyy”: Marina kysyy, sattuuko johonkin, ja sinä näytät kohdan.</p>
  <div class="keho" data-h="jay" data-kysyja="marina">
    <p data-osa="cabeca" data-nimi="a cabeça" data-fi="Pää on kipeä. Join liikaa olutta.">Dói a cabeça. Eu bebi chope demais.</p>
    <p data-osa="garganta" data-nimi="a garganta" data-fi="Kurkku on kipeä. Lauloin koko yön.">Dói a garganta. Eu cantei a noite toda.</p>
    <p data-osa="barriga" data-nimi="a barriga" data-fi="Vatsaan sattuu. Söin kaksikymmentä juustoleipää.">Dói a barriga. Eu comi vinte pães de queijo.</p>
    <p data-osa="braco" data-nimi="o braço" data-fi="Käsivarteen sattuu. Halasin lyhtypylvästä.">Dói o braço. Eu abracei o poste.</p>
    <p data-osa="mao" data-nimi="a mão" data-fi="Käteen sattuu. Vilkutin Andersonille koko aamun.">Dói a mão. Eu acenei pro Anderson a manhã toda.</p>
    <p data-osa="joelho" data-nimi="o joelho" data-fi="Polveen sattuu. Kaaduin mäellä.">Dói o joelho. Eu caí no morro.</p>
    <p data-osa="pe" data-nimi="o pé" data-fi="Jalkaan sattuu. Tanssin pöydän päällä.">Dói o pé. Eu dancei em cima da mesa.</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Pää ja kasvot" data-sanat="cabeça,olho,nariz,boca,dente,orelha,garganta"></div>
  <div class="teema" data-otsikko="Vartalo" data-sanat="pescoço,ombro,peito,costas,barriga,estômago,coração"></div>
  <div class="teema" data-otsikko="Kädet ja jalat" data-sanat="braço,mão,dedo,perna,joelho,pé"></div>
  <div class="teema" data-otsikko="Terveysasemalla" data-sanat="médico,enfermeira,remédio,farmácia,febre,dor,doer,descansar"></div>
</section>

<section class="osio">
  <h2>Kielioppi</h2>

  <h3>1. Perfekti kerronnassa</h3>
  <p>Perfektillä kerrotaan tapahtumat siinä järjestyksessä kuin ne tapahtuivat. Jokainen verbi vie tarinaa eteenpäin: <span class="pt">Anderson passou, viu, acenou, correu</span> (Anderson kävi, näki, vilkutti, juoksi). Järjestystä näytetään sanoilla:</p>
  <table class="taivutus">
    <tr><td><span class="pt">primeiro</span></td><td>ensin</td></tr>
    <tr><td><span class="pt">depois</span>, <span class="pt">então</span></td><td>sitten, sen jälkeen</td></tr>
    <tr><td><span class="pt">de repente</span></td><td>yhtäkkiä</td></tr>
    <tr><td><span class="pt">por fim</span></td><td>lopuksi</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Ensin Jay joi. Sitten hän tanssi. Lopuksi hän katosi.">Primeiro o Jay bebeu. Depois ele dançou. Por fim, ele desapareceu.</li>
    <li class="s" data-fi="Yhtäkkiä Marcus avasi oven.">De repente, o Marcus abriu a porta.</li>
    <li class="s" data-fi="Sitten kaikki taputtivat.">Então todo mundo aplaudiu.</li>
  </ul>
  <p>Muutamissa tavallisissa verbeissä on pieniä erikoisuuksia. Ne tulevat tutuiksi toistamalla:</p>
  <table class="taivutus">
    <tr><th>perusmuoto</th><th>eu</th><th>você, ele, ela, a gente</th><th>nós</th><th>vocês, eles</th></tr>
    <tr><td><span class="pt">sair</span></td><td><span class="pt">saí</span></td><td><span class="pt">saiu</span></td><td><span class="pt">saímos</span></td><td><span class="pt">saíram</span></td></tr>
    <tr><td><span class="pt">ouvir</span></td><td><span class="pt">ouvi</span></td><td><span class="pt">ouviu</span></td><td><span class="pt">ouvimos</span></td><td><span class="pt">ouviram</span></td></tr>
    <tr><td><span class="pt">subir</span></td><td><span class="pt">subi</span></td><td><span class="pt">subiu</span></td><td><span class="pt">subimos</span></td><td><span class="pt">subiram</span></td></tr>
    <tr><td><span class="pt">ler</span></td><td><span class="pt">li</span></td><td><span class="pt">leu</span></td><td><span class="pt">lemos</span></td><td><span class="pt">leram</span></td></tr>
  </table>
  <div class="muista">
    <p><b>Muista:</b> Perfektin <span class="pt">eu</span>-muoto (<span class="pt">saí</span>, <span class="pt">ouvi</span>) ja <span class="pt">você</span>-muoto (<span class="pt">saiu</span>, <span class="pt">ouviu</span>) kuulostavat erilaisilta, vaikka ero on vain viimeinen kirjain. Kun ymmärrät kuullusta, kuuntele sanan loppua: -i tarkoittaa minä, -iu, -eu tai -ou tarkoittaa hän.</p>
  </div>

  <h3>2. Mesmo: sama, todella, itse</h3>
  <p>Sana <span class="pt">mesmo</span> on tavallisimpia puhekielen sanoja. Sillä on neljä pääasiallista merkitystä:</p>
  <table class="taivutus">
    <tr><td><b>sama</b></td><td><span class="pt">o mesmo</span>, <span class="pt">a mesma</span> (taipuu sukuun ja lukuun)</td></tr>
    <tr><td><b>todella, kyllä oikeasti</b></td><td><span class="pt">bebeu mesmo</span> (ei taivu)</td></tr>
    <tr><td><b>juuri</b></td><td><span class="pt">agora mesmo</span> (juuri nyt)</td></tr>
    <tr><td><b>itse</b></td><td><span class="pt">eu mesmo</span>, <span class="pt">ela mesma</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Se on sama asia.">É a mesma coisa.</li>
    <li class="s" data-fi="Me menimme samaan paikkaan.">A gente foi ao mesmo lugar.</li>
    <li class="s" data-fi="Joit todella!">Bebeu mesmo!</li>
    <li class="s" data-fi="Minä tulen juuri nyt.">Eu venho agora mesmo.</li>
    <li class="s" data-fi="Minä itse näin sen.">Eu mesmo vi isso.</li>
  </ul>

  <h3>3. Outro: toinen, eräs muu</h3>
  <p><span class="pt">Outro</span> taipuu sukuun ja lukuun: <span class="pt">outro</span>, <span class="pt">outra</span>, <span class="pt">outros</span>, <span class="pt">outras</span>. Toisin kuin suomessa ja englannissa, sen eteen ei laiteta <span class="pt">um</span>-sanaa: ”toinen tuoppi” on <span class="pt">outro chope</span>, ei <span class="pt">um outro chope</span> (jälkimmäinen on kuitenkin mahdollinen ja kuulostaa korostavammalta).</p>
  <ul class="esim">
    <li class="s" data-fi="Haluan toisen tuopin.">Eu quero outro chope.</li>
    <li class="s" data-fi="Juo toinen vesi.">Toma outra água.</li>
    <li class="s" data-fi="Toinen mies on Marcus.">O outro homem é o Marcus.</li>
    <li class="s" data-fi="Taas, uudestaan.">Outra vez.</li>
    <li class="s" data-fi="Muut ihmiset auttoivat.">As outras pessoas ajudaram.</li>
  </ul>
  <div class="muista">
    <p><b>Espanjasta:</b> <span class="pt">outro</span> on espanjan <i>otro</i>, ja sekin esiintyy ilman <i>un</i>-sanaa. <span class="pt">Mesmo</span> on espanjan <i>mismo</i>: <i>lo mismo</i> = <span class="pt">o mesmo</span>.</p>
  </div>

  <h3>4. Mihin sattuu? Doer ja dor</h3>
  <p>Verbissä <span class="pt">doer</span> (sattua) kipeä kehonosa on lauseen subjekti, joten verbi taipuu sen mukaan: yksi kehonosa <span class="pt">dói</span>, useampi <span class="pt">doem</span>. Toinen mahdollisuus on rakenne <span class="pt">dói</span> + <span class="pt">em</span> + kehonosa, jossa verbi pysyy aina yksikössä.</p>
  <ul class="esim">
    <li class="s" data-fi="Päähän sattuu.">Dói a cabeça.</li>
    <li class="s" data-fi="Selkään sattuu.">Dói nas costas.</li>
    <li class="s" data-fi="Jalkaan sattuu.">Dói no pé.</li>
    <li class="s" data-fi="Jalkoihin sattuu.">Doem os pés.</li>
    <li class="s" data-fi="Minulla on päänsärky.">Eu tenho dor de cabeça.</li>
    <li class="s" data-fi="Minulla on kuumetta.">Eu estou com febre.</li>
    <li class="s" data-fi="Minulla on vatsakipu.">Eu estou com dor de barriga.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> Dialogissa Marina sanoo <span class="pt">Abra a boca</span> (kirjakielinen käsky), mutta <span class="pt">senta</span>, <span class="pt">toma</span> ja <span class="pt">descansa</span> (puhekielinen käsky, sama kuin hän-muoto). Molemmat kelpaavat. Kehonosan edessä käytetään määräistä artikkelia: <span class="pt">dói a cabeça</span>, ei <span class="pt">dói cabeça</span>. Kun halutaan sanoa ”minun päähäni sattuu”, voi sanoa <span class="pt">minha cabeça dói</span>. Kysymys on <span class="pt">Onde dói?</span> (Mihin sattuu?).</p>
    <p><b>Espanjasta:</b> espanjan <i>me duele la cabeza</i> on portugaliksi <span class="pt">dói a cabeça</span> tai <span class="pt">minha cabeça dói</span>, ei <i>me dói</i>. Sana <i>espalda</i> (selkä) on portugaliksi <span class="pt">costas</span>. Espanjan <i>dolor</i> on <span class="pt">dor</span>. Huom: Brasiliassa <span class="pt">resfriado</span> on flunssainen; sana <span class="pt">constipado</span> tarkoittaa siellä ummetuksessa olevaa, eli ansa espanjan <i>constipado</i>-sanalle (= flunssainen).</p>
  </div>
</section>

<section class="osio">
  <h2>Ääntäminen: diftongit</h2>
  <p>Diftongi eli kaksoisvokaali on kaksi vokaalia samassa tavussa: toinen on vahva, toinen lyhyt ja liukuva (i tai u). Portugalissa ne kuulostavat samoilta kuin suomen diftongit, mutta eri sanoissa. Aloita näistä:</p>
  <ul class="esim">
    <li class="s">pai</li>
    <li class="s">leite</li>
    <li class="s">boi</li>
    <li class="s">muito</li>
    <li class="s">mau</li>
    <li class="s">meu</li>
    <li class="s">viu</li>
    <li class="s">céu</li>
    <li class="s">herói</li>
  </ul>
  <h3>Nasaalidiftongit</h3>
  <p>Nämä ovat portugalin tunnusmerkki. Ne ovat nenään soivia, ja jälkimmäinen vokaali liukuu pois:</p>
  <ul class="esim">
    <li class="s">pão</li>
    <li class="s">mãe</li>
    <li class="s">bem</li>
    <li class="s">homem</li>
    <li class="s">põe</li>
    <li class="s">falam</li>
  </ul>
  <p>Monikko tuo usein s-päätteen: <span class="pt">pão → pães</span>, <span class="pt">mãe → mães</span>, <span class="pt">coração → corações</span>. Sana <span class="pt">homem</span> muuttuu muotoon <span class="pt">homens</span>.</p>
  <div class="muista">
    <p><b>Muista:</b> Yhdistelmä <b>ou</b> äännetään kirjakielessä kuin suomen ”ou” (<span class="pt">outro</span>, <span class="pt">trouxe</span>). Puhekielessä se lyhenee joskus pelkäksi o:ksi (<span class="pt">pouco</span> ≈ PO-ku). Molemmat ymmärretään.</p>
  </div>
</section>

<aside class="kulttuuri" data-paikka="upa">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Terveydenhuolto Brasiliassa: SUS ja UPA</h3>
  <figure class="kuva" data-kuva="upa"></figure>
  <p><b>SUS</b> eli <span class="pt">Sistema Único de Saúde</span> (”yhtenäinen terveysjärjestelmä”) on Brasilian julkinen terveydenhuolto. Se perustettiin 1988 vahvistetun perustuslain pohjalta, ja se on tarkoitettu kaikille maassa oleville ilmaiseksi, myös ulkomaalaisille. Rinnalla toimii yksityinen terveydenhuolto, johon moni ostaa vakuutuksen (<span class="pt">plano de saúde</span>).</p>
  <p>Tavallinen sairaus hoidetaan lähimmällä terveysasemalla, joka on <span class="pt">UBS</span> eli <i>Unidade Básica de Saúde</i> (perusterveysasema, myös <span class="pt">posto de saúde</span>). Kiireellisempään apuun on <span class="pt">UPA</span> eli <i>Unidade de Pronto Atendimento</i> (kiirevastaanotto), joka on auki vuorokauden ympäri. Siellä hoitaja arvioi ensin, kuinka kiireellinen potilaan tila on, ja vakavat tapaukset menevät ensin.</p>
  <p>Hätänumerot ovat Brasiliassa lyhyitä: <b>190</b> poliisi, <b>192</b> ambulanssi (<span class="pt">SAMU</span>) ja <b>193</b> palokunta. Lääkkeitä saa apteekista (<span class="pt">farmácia</span>), ja farmaseutti neuvoo pienissä vaivoissa.</p>
  <p><b>Tarinassa:</b> Marina on sairaanhoitaja (<span class="pt">enfermeira</span>) ja työskentelee UPAssa. Hän tutkii Jayn nopeasti: kuume mitataan, suu tarkistetaan ja potilas lähetetään lepäämään.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: mihin Jayhin sattuu?</h3>
    <p class="ohje">Muistatko, mitä Jay kertoi Marinalle (yllä)? Valitse oikea vaihtoehto.</p>
    <div class="valinta" data-oikea="a garganta">
      <p class="kysymys"><span class="ryhma" data-hahmot="jay"></span> O Jay cantou a noite toda. Agora dói…</p>
      <div class="vaihtoehdot"><button type="button">a garganta</button><button type="button">o pé</button><button type="button">o joelho</button></div>
    </div>
    <div class="valinta" data-oikea="o braço">
      <p class="kysymys"><span class="ryhma" data-hahmot="jay"></span> O Jay abraçou o poste. Agora dói…</p>
      <div class="vaihtoehdot"><button type="button">a cabeça</button><button type="button">o braço</button><button type="button">a barriga</button></div>
    </div>
    <div class="valinta" data-oikea="comeu">
      <p class="kysymys">Dói a barriga, porque ele ___ vinte pães de queijo.</p>
      <div class="vaihtoehdot"><button type="button">comeu</button><button type="button">come</button><button type="button">comia</button></div>
    </div>
    <div class="valinta" data-oikea="Dói">
      <p class="kysymys">___ a cabeça.</p>
      <div class="vaihtoehdot"><button type="button">Dói</button><button type="button">Doem</button><button type="button">Dor</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Kerro tarina perfektillä</h3>
    <p class="ohje">Kirjoita verbi perfektissä. Perusmuoto on sulkeissa.</p>
    <div class="aukot">
      <p>Primeiro o Anderson <span class="aukko" data-oikea="viu"></span> o Jay na janela. (ver)</p>
      <p>Depois ele <span class="aukko" data-oikea="voltou"></span> pra casa. (voltar)</p>
      <p>Os amigos <span class="aukko" data-oikea="subiram"></span> o morro. (subir)</p>
      <p>O Marcus <span class="aukko" data-oikea="abriu"></span> a porta. (abrir)</p>
      <p>O Jay <span class="aukko" data-oikea="saiu"></span> da casa. (sair)</p>
      <p>Eles <span class="aukko" data-oikea="ouviram"></span> o Anderson. (ouvir)</p>
      <p>A dona Cida <span class="aukko" data-oikea="ajudou"></span> os amigos. (ajudar)</p>
      <p>Eu <span class="aukko" data-oikea="li"></span> a mensagem. (ler)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Mesmo vai outro?</h3>
    <p class="ohje">Valitse oikea sana.</p>
    <div class="valinta" data-oikea="outro">
      <p class="kysymys">Eu quero ___ chope. (toisen)</p>
      <div class="vaihtoehdot"><button type="button">outro</button><button type="button">mesmo</button></div>
    </div>
    <div class="valinta" data-oikea="mesma">
      <p class="kysymys">Ele disse a ___ coisa. (saman)</p>
      <div class="vaihtoehdot"><button type="button">outra</button><button type="button">mesma</button></div>
    </div>
    <div class="valinta" data-oikea="outra">
      <p class="kysymys">Toma ___ água. (toinen)</p>
      <div class="vaihtoehdot"><button type="button">outra</button><button type="button">mesma</button></div>
    </div>
    <div class="valinta" data-oikea="mesmo">
      <p class="kysymys">Você bebeu ___! (todella)</p>
      <div class="vaihtoehdot"><button type="button">outro</button><button type="button">mesmo</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Kehonosat</h3>
    <p class="ohje">Yhdistä portugali ja suomi.</p>
    <ul class="yhdista">
      <li data-pari="pää">a cabeça</li>
      <li data-pari="selkä">as costas</li>
      <li data-pari="vatsa">a barriga</li>
      <li data-pari="kaula">o pescoço</li>
      <li data-pari="polvi">o joelho</li>
      <li data-pari="hammas">o dente</li>
      <li data-pari="jalka (koko jalka)">a perna</li>
      <li data-pari="jalkaterä">o pé</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause.</p>
    <div class="sanelu" data-puhu="Dói a cabeça."></div>
    <div class="sanelu" data-puhu="Doem os pés."></div>
    <div class="sanelu" data-puhu="Eu vi o Anderson na rua."></div>
    <div class="sanelu" data-puhu="Ele abriu a porta."></div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Kuuntele ja valitse</h3>
    <p class="ohje">Paina ▶ ja valitse sana, jonka kuulit.</p>
    <div class="valinta" data-kuuntele="pão" data-oikea="pão">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">pai</button><button type="button">pão</button></div>
    </div>
    <div class="valinta" data-kuuntele="mãe" data-oikea="mãe">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">mau</button><button type="button">mãe</button></div>
    </div>
    <div class="valinta" data-kuuntele="bem" data-oikea="bem">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">bom</button><button type="button">bem</button></div>
    </div>
    <div class="valinta" data-kuuntele="viu" data-oikea="viu">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">vi</button><button type="button">viu</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Mihin sattuu?</p><p class="s" data-fi="Mihin sattuu?">Onde dói?</p></div>
    <div class="kaanna"><p class="fi">Minulla on päänsärky ja kuumetta.</p><p class="s" data-fi="Minulla on päänsärky ja kuumetta.">Eu tenho dor de cabeça e estou com febre.</p></div>
    <div class="kaanna"><p class="fi">Anderson näki Jayn ikkunassa.</p><p class="s" data-fi="Anderson näki Jayn ikkunassa.">O Anderson viu o Jay na janela.</p></div>
    <div class="kaanna"><p class="fi">Haluan toisen veden.</p><p class="s" data-fi="Haluan toisen veden.">Eu quero outra água.</p></div>
    <div class="kaanna"><p class="fi">Se on sama asia.</p><p class="s" data-fi="Se on sama asia.">É a mesma coisa.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. Paino</h3>
    <p class="ohje">Napsauta painollista tavua.</p>
    <p><span class="paino" data-tavut="ca|be|ça" data-oikea="2"></span> <span class="paino" data-tavut="bar|ri|ga" data-oikea="2"></span> <span class="paino" data-tavut="cos|tas" data-oikea="1"></span> <span class="paino" data-tavut="pes|co|ço" data-oikea="2"></span> <span class="paino" data-tavut="es|tô|ma|go" data-oikea="2"></span> <span class="paino" data-tavut="jo|e|lho" data-oikea="2"></span> <span class="paino" data-tavut="o|re|lha" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Quem salvou o Jay?</summary>
      <p class="s" data-fi="Anderson ja ystävät pelastivat Jayn.">O Anderson e os amigos salvaram o Jay.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Onde dói?</summary>
      <p class="s" data-fi="Päähän sattuu ja selkään sattuu. (muuta omasi)">Dói a cabeça e dói nas costas.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você tem febre?</summary>
      <p class="s" data-fi="Ei, minulla ei ole kuumetta.">Não, eu não tenho febre.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que a Marina falou pro Jay?</summary>
      <p class="s" data-fi="Hän sanoi: juo vettä ja nuku.">Ela falou: toma água e dorme.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l18">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l18-ficha" lang="pt-BR">
      <div class="kal-yla"><b>Ficha da UPA</b><small>täytä potilaskortti: mihin sattuu ja mitä tapahtui?</small></div>
      <div class="kal-rivit">
        <label>Nome <input name="nimi" placeholder="Jay"></label>
        <label>O que dói? <input name="kipu" placeholder="Dói a cabeça e as costas."></label>
        <label>Desde quando? <input name="milloin" placeholder="Desde ontem à noite."></label>
        <label>O que aconteceu? <input name="tapahtui" placeholder="Eu caí na rua."></label>
        <label>Febre? <input name="kuume" placeholder="Não, trinta e sete."></label>
      </div>
    </div>
    <p>Kerro Jayn pelastus 5–6 lauseella perfektillä. Käytä sanoja <span class="pt">primeiro</span>, <span class="pt">depois</span>, <span class="pt">de repente</span> ja <span class="pt">por fim</span>. Lisää yksi lause siitä, mihin Jayta sattui. Sano tarina ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Ensin Anderson näki Jayn ikkunassa.">Primeiro o Anderson viu o Jay na janela.</p>
      <p class="s" data-fi="Sitten hän juoksi kotiin ja kertoi kaikille.">Depois ele correu pra casa e contou pra todo mundo.</p>
      <p class="s" data-fi="Ystävät nousivat mäelle.">Os amigos subiram o morro.</p>
      <p class="s" data-fi="Yhtäkkiä Mirela otti esiin pão de queijon.">De repente, a Mirela mostrou o pão de queijo.</p>
      <p class="s" data-fi="Lopuksi Marcus päästi Jayn vapaaksi.">Por fim, o Marcus soltou o Jay.</p>
      <p class="s" data-fi="Jayta sattui päähän ja vatsaan.">Dói a cabeça e a barriga do Jay.</p>
    </details>
  </div>
</section>
`
});
