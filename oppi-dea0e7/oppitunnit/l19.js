/* Jakso 19: Retket Ouro Pretoon ja Inhotimiin, paluulento. Oma materiaali, ei kirjan tekstiä.
   Kielioppi: adverbit, -íssimo. Ääntäminen: lauseen ääntäminen.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l19',
  lyhyt: '19',
  jakso: 'Jakso 19',
  otsikko: 'Matkakertomus: adverbit ja -íssimo',
  lahde: 'Aihe: auto- ja lentomatka · Kielioppi: adverbit, -íssimo · Ääntäminen: lauseen ääntäminen',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geologi, Jayn opettaja' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, väsynyt turisti' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 1, kuvaus: 'Maian äiti' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 1, kuvaus: 'Maian isä' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 2, kuvaus: 'Maian veli' },
    mateus: { nimi: 'Mateus', tyyppi: 'mies', vaihto: 3, kuvaus: 'sovelluskuljettaja, ajaa varovasti' },
    murilo: { nimi: 'Murilo', tyyppi: 'mies', vaihto: 4, kuvaus: 'historianopettaja' }
  },

  aiheet: ['liike', 'kaupunki', 'luonto', 'aika'],

  sanasto: [
    'devagar', 'depressa', 'rápido', 'bem', 'mal', 'muito', 'pouco', 'bastante', 'demais', 'cedo', 'tarde', 'logo', 'sempre', 'nunca',
    'já', 'ainda', 'perto', 'longe', 'felizmente', 'infelizmente', 'finalmente', 'rapidamente',
    'lindíssimo', 'muitíssimo', 'viajar', 'viagem', 'estrada', 'dirigir', 'avião', 'aeroporto', 'voo', 'mala', 'passaporte', 'escala',
    'cinto', 'ouro', 'igreja', 'ladeira'
  ],

  sanat: {
    'cuidadosamente': { fi: 'huolellisesti, varovasti', aa: 'kui-da-do-za-MẼ-tsi', ipa: '[kujdadɔzɐˈmẽtʃi]', sl: 'adverbi', huom: 'adjektiivista {cuidadoso}' },
    'cuidadoso': { fi: 'huolellinen, varovainen', aa: 'kui-da-DO-zu', ipa: '[kujdaˈdozu]', sl: 'adjektiivi', huom: 'adverbi {cuidadosamente}' },
    // <<SANAT
    // dialogi 1
    'cinto': { fi: 'turvavyö; vyö', aa: 'SĨ-tu', ipa: '[ˈsĩtu]', sl: 'substantiivi, maskuliini', huom: 'cinto de segurança = turvavyö' },
    'dirijo': { fi: 'ajan (autoa)', aa: 'di-RI-zhu', ipa: '[dʒiˈɾiʒu]', sl: 'verbi', huom: 'perusmuoto {dirigir}' },
    'dirige': { fi: 'ajaa (autoa)', aa: 'di-RI-zhi', ipa: '[dʒiˈɾiʒi]', sl: 'verbi', huom: 'perusmuoto {dirigir}; brasilialaisittain dirigir, ei conducir' },
    'graças': { fi: 'kiitos, ansiosta', aa: 'GRA-sas', ipa: '[ˈɡɾasɐs]', sl: 'substantiivi, feminiini, monikko' },
    'graças a deus': { fi: 'luojan kiitos', aa: 'GRA-saz a DEUS', ipa: '[ˈɡɾasɐz a ˈdews]', sl: 'ilmaus' },
    'rapidíssimo': { fi: 'hyvin nopea', aa: 'ha-pi-DI-si-mu', ipa: '[hapiˈdʒisimu]', sl: 'adjektiivi', huom: '{rápido} + -íssimo' },
    'quilômetros': { fi: 'kilometriä', aa: 'ki-LÕ-me-trus', ipa: '[kiˈlõmetɾus]', sl: 'substantiivi, maskuliini, monikko' },
    'preparado': { fi: 'valmis, valmisteltu', aa: 'pre-pa-RA-du', ipa: '[pɾepaˈɾadu]', sl: 'adjektiivi', huom: 'vrt. {pronto}' },
    'lindíssima': { fi: 'aivan ihana (feminiini)', aa: 'lĩ-DI-si-ma', ipa: '[lĩˈdʒisimɐ]', sl: 'adjektiivi, feminiini', huom: '{lindo} + -íssimo' },
    'lindíssimo': { fi: 'aivan ihana', aa: 'lĩ-DI-si-mu', ipa: '[lĩˈdʒisimu]', sl: 'adjektiivi', huom: '{lindo} + -íssimo' },
    'lindíssimos': { fi: 'aivan ihanat (maskuliinin monikko)', aa: 'lĩ-DI-si-mus', ipa: '[lĩˈdʒisimus]', sl: 'adjektiivi, monikko' },
    'lindíssimas': { fi: 'aivan ihanat (feminiinin monikko)', aa: 'lĩ-DI-si-mas', ipa: '[lĩˈdʒisimɐs]', sl: 'adjektiivi, monikko' },
    'igrejas': { fi: 'kirkot', aa: 'i-GRE-zhas', ipa: '[iˈɡɾeʒɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {igreja}' },
    'belíssimas': { fi: 'aivan upeat (feminiinin monikko)', aa: 'be-LI-si-mas', ipa: '[beˈlisimɐs]', sl: 'adjektiivi, monikko', huom: '{belo} + -íssimo' },
    'belíssimo': { fi: 'aivan upea', aa: 'be-LI-si-mu', ipa: '[beˈlisimu]', sl: 'adjektiivi', huom: '{belo} + -íssimo' },
    'ladeira': { fi: 'jyrkkä katu, rinne', aa: 'la-DEI-ra', ipa: '[laˈdejɾɐ]', sl: 'substantiivi, feminiini' },
    'ladeiras': { fi: 'jyrkät kadut', aa: 'la-DEI-ras', ipa: '[laˈdejɾɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {ladeira}' },
    'altíssimas': { fi: 'hyvin korkeat (feminiinin monikko)', aa: 'au-TSI-si-mas', ipa: '[awˈtʃisimɐs]', sl: 'adjektiivi, monikko', huom: '{alto} + -íssimo' },
    'altíssimo': { fi: 'hyvin korkea', aa: 'au-TSI-si-mu', ipa: '[awˈtʃisimu]', sl: 'adjektiivi', huom: '{alto} + -íssimo' },
    'cansadíssimo': { fi: 'aivan poikki', aa: 'kã-sa-DI-si-mu', ipa: '[kɐ̃saˈdʒisimu]', sl: 'adjektiivi', huom: '{cansado} + -íssimo' },
    'respira': { fi: 'hengittää; hengitä', aa: 'hes-PI-ra', ipa: '[hesˈpiɾɐ]', sl: 'verbi', huom: 'perusmuoto respirar' },
    'capital': { fi: 'pääkaupunki', aa: 'ka-pi-TAU', ipa: '[kapiˈtaw]', sl: 'substantiivi, feminiini' },
    'mudou': { fi: 'muutti; vaihtui', aa: 'mu-DOU', ipa: '[muˈdow]', sl: 'verbi, perfekti', huom: 'perusmuoto {mudar}' },
    'portugueses': { fi: 'portugalilaiset', aa: 'poh-tu-GE-zis', ipa: '[pohtuˈɡezis]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {português}' },
    'acharam': { fi: 'löysivät', aa: 'a-SHA-rãu', ipa: '[aˈʃaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {achar}' },
    'construíram': { fi: 'rakensivat', aa: 'kõs-tru-I-rãu', ipa: '[kõstɾuˈiɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto construir' },
    'cheias': { fi: 'täynnä (feminiinin monikko)', aa: 'SHEI-as', ipa: '[ˈʃejɐs]', sl: 'adjektiivi, monikko', huom: 'yksikkö cheia; cheio core' },
    // dialogi 2
    'aeroporto': { fi: 'lentokenttä', aa: 'a-e-ro-POH-tu', ipa: '[aeɾoˈpohtu]', sl: 'substantiivi, maskuliini' },
    'confins': { fi: 'Confins (lentoaseman kaupunki)', aa: 'kõ-FĨS', ipa: '[kõˈfĩs]', sl: 'paikannimi', huom: 'Belo Horizonten lentoasema sijaitsee Confinsissa' },
    'voltam': { fi: 'palaavat', aa: 'VOU-tãu', ipa: '[ˈvɔwtɐ̃w]', sl: 'verbi', huom: 'perusmuoto {voltar}' },
    'voltamos': { fi: 'palaamme', aa: 'vou-TÃ-mus', ipa: '[vowˈtɐ̃mus]', sl: 'verbi', huom: 'perusmuoto {voltar}' },
    'filhos': { fi: 'pojat; lapset', aa: 'FI-ljus', ipa: '[ˈfiʎus]', sl: 'substantiivi, maskuliini, monikko', huom: 'meus filhos = lapseni' },
    'ficaram': { fi: 'jäivät; viipyivät', aa: 'fi-KA-rãu', ipa: '[fiˈkaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {ficar}' },
    'fiquei': { fi: 'jäin; viivyin', aa: 'fi-KEI', ipa: '[fiˈkej]', sl: 'verbi, perfekti', huom: 'perusmuoto {ficar}; c muuttuu qu:ksi' },
    'semanas': { fi: 'viikkoa', aa: 'se-MÃ-nas', ipa: '[seˈmɐ̃nɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {semana}' },
    'principalmente': { fi: 'erityisesti', aa: 'prĩ-si-pau-MẼ-tsi', ipa: '[pɾĩsipawˈmẽtʃi]', sl: 'adverbi' },
    'inhotim': { fi: 'Inhotim (taidemuseo ja puutarha)', aa: 'i-njo-TSĨ', ipa: '[iɲoˈtʃĩ]', sl: 'paikannimi' },
    'muitíssimo': { fi: 'hirveän paljon', aa: 'mũi-TSI-si-mu', ipa: '[mũjˈtʃisimu]', sl: 'adverbi', huom: '{muito} + -íssimo' },
    'pavilhão': { fi: 'paviljonki', aa: 'pa-vi-LJÃU', ipa: '[paviˈʎɐ̃w]', sl: 'substantiivi, maskuliini' },
    'escuta': { fi: 'kuuntelee', aa: 'es-KU-ta', ipa: '[esˈkutɐ]', sl: 'verbi', huom: 'perusmuoto {escutar}' },
    'simba': { fi: 'Simba (Leijonakuninkaan leijonanpentu)', aa: 'SĨ-ba', ipa: '[ˈsĩbɐ]', sl: 'etunimi' },
    'decolar': { fi: 'nousta ilmaan', aa: 'de-ko-LAH', ipa: '[dekoˈlah]', sl: 'verbi, perusmuoto' },
    'decolou': { fi: 'nousi ilmaan', aa: 'de-ko-LOU', ipa: '[dekoˈlow]', sl: 'verbi, perfekti', huom: 'perusmuoto decolar' },
    'sentaram': { fi: 'istuivat', aa: 'sẽ-TA-rãu', ipa: '[sẽˈtaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto sentar' },
    'poltronas': { fi: 'istuimet, nojatuolit', aa: 'pou-TRÕ-nas', ipa: '[powˈtɾõnɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö poltrona; koneessa istuin' },
    'quantas': { fi: 'kuinka monta (feminiinin monikko)', aa: 'KUÃ-tas', ipa: '[ˈkwɐ̃tɐs]', sl: 'kysymyssana', huom: 'maskuliini quantos' },
    'voo': { fi: 'lento', aa: 'VOU', ipa: '[vow]', sl: 'substantiivi, maskuliini' },
    'escala': { fi: 'välilasku; mittakaava', aa: 'es-KA-la', ipa: '[esˈkalɐ]', sl: 'substantiivi, feminiini' },
    'longuíssima': { fi: 'hyvin pitkä (feminiini)', aa: 'lõ-GI-si-ma', ipa: '[lõˈɡisimɐ]', sl: 'adjektiivi, feminiini', huom: '{longo} + -íssimo' },
    'longuíssimo': { fi: 'hyvin pitkä', aa: 'lõ-GI-si-mu', ipa: '[lõˈɡisimu]', sl: 'adjektiivi', huom: '{longo} + -íssimo' },
    'será': { fi: 'olisikohan; tulee olemaan', aa: 'se-RA', ipa: '[seˈɾa]', sl: 'verbi', huom: 'será que = olisikohan niin että' },
    'mandou': { fi: 'lähetti; käski', aa: 'mã-DOU', ipa: '[mɐ̃ˈdow]', sl: 'verbi, perfekti', huom: 'perusmuoto {mandar}' },
    'voou': { fi: 'lensi', aa: 'vo-OU', ipa: '[voˈow]', sl: 'verbi, perfekti', huom: 'perusmuoto voar' },
    'chega': { fi: 'saapuu', aa: 'SHE-ga', ipa: '[ˈʃeɡɐ]', sl: 'verbi', huom: 'perusmuoto {chegar}' },
    'chegamos': { fi: 'saavuimme', aa: 'she-GÃ-mus', ipa: '[ʃeˈɡɐ̃mus]', sl: 'verbi, perfekti', huom: 'perusmuoto {chegar}' },
    'calmo': { fi: 'rauhallinen', aa: 'KAU-mu', ipa: '[ˈkawmu]', sl: 'adjektiivi' },
    'ruas': { fi: 'kadut', aa: 'HU-as', ipa: '[ˈhuɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö rua' },
    'beijos': { fi: 'suukkoja, terveisiä', aa: 'BEI-zhus', ipa: '[ˈbejʒus]', sl: 'substantiivi, maskuliini, monikko', huom: 'kirjeen lopussa: terveisin' },
    // kielioppi
    'rapidamente': { fi: 'nopeasti', aa: 'ha-pi-da-MẼ-tsi', ipa: '[hapidɐˈmẽtʃi]', sl: 'adverbi' },
    'lento': { fi: 'hidas', aa: 'LẼ-tu', ipa: '[ˈlẽtu]', sl: 'adjektiivi' },
    'lentamente': { fi: 'hitaasti', aa: 'lẽ-ta-MẼ-tsi', ipa: '[lẽtɐˈmẽtʃi]', sl: 'adverbi' },
    'claramente': { fi: 'selvästi', aa: 'kla-ra-MẼ-tsi', ipa: '[klaɾɐˈmẽtʃi]', sl: 'adverbi' },
    'infeliz': { fi: 'onneton', aa: 'ĩ-fe-LIS', ipa: '[ĩfeˈlis]', sl: 'adjektiivi' },
    'felizmente': { fi: 'onneksi', aa: 'fe-liz-MẼ-tsi', ipa: '[feˌlizˈmẽtʃi]', sl: 'adverbi', huom: '{feliz} + -mente' },
    'infelizmente': { fi: 'valitettavasti', aa: 'ĩ-fe-liz-MẼ-tsi', ipa: '[ĩfeˌlizˈmẽtʃi]', sl: 'adverbi' },
    'finalmente': { fi: 'vihdoin', aa: 'fi-nau-MẼ-tsi', ipa: '[finawˈmẽtʃi]', sl: 'adverbi' },
    'felicíssimo': { fi: 'aivan onnellinen', aa: 'fe-li-SI-si-mu', ipa: '[feliˈsisimu]', sl: 'adjektiivi', huom: '{feliz} + -íssimo; z muuttuu c:ksi' },
    'facílimo': { fi: 'hyvin helppo', aa: 'fa-SI-li-mu', ipa: '[faˈsilimu]', sl: 'adjektiivi', huom: 'epäsäännöllinen: fácil + -ílimo' },
    'dificílimo': { fi: 'hyvin vaikea', aa: 'di-fi-SI-li-mu', ipa: '[dʒifiˈsilimu]', sl: 'adjektiivi', huom: 'epäsäännöllinen: difícil + -ílimo' },
    'bonitíssimo': { fi: 'aivan ihana', aa: 'bo-ni-TSI-si-mu', ipa: '[boniˈtʃisimu]', sl: 'adjektiivi', huom: '{bonito} + -íssimo' },
    'caríssimo': { fi: 'hyvin kallis', aa: 'ka-RI-si-mu', ipa: '[kaˈɾisimu]', sl: 'adjektiivi', huom: '{caro} + -íssimo' },
    'super': { fi: 'super, tosi', aa: 'SU-peh', ipa: '[ˈsupeh]', sl: 'adverbi', huom: 'arkinen vahvistussana: super legal' },
    'ciclo': { fi: 'kausi, kierto', aa: 'SI-klu', ipa: '[ˈsiklu]', sl: 'substantiivi, maskuliini' },
    'ciclo do ouro': { fi: 'kultakausi', aa: 'SI-klu du OU-ru', ipa: '[ˈsiklu du ˈowɾu]', sl: 'ilmaus' },
    'museu': { fi: 'museo', aa: 'mu-ZEU', ipa: '[muˈzew]', sl: 'substantiivi, maskuliini' },
    'inconfidência': { fi: 'salaliitto, uskottomuus', aa: 'ĩ-kõ-fi-DẼ-sja', ipa: '[ĩkõfiˈdẽsjɐ]', sl: 'substantiivi, feminiini', huom: 'Museu da Inconfidência' },
    'gasolina': { fi: 'bensiini', aa: 'ga-zo-LI-na', ipa: '[ɡazoˈlinɐ]', sl: 'substantiivi, feminiini' },
    'passaporte': { fi: 'passi', aa: 'pa-sa-POH-tsi', ipa: '[pasaˈpɔhtʃi]', sl: 'substantiivi, maskuliini' },
    'mala': { fi: 'matkalaukku', aa: 'MA-la', ipa: '[ˈmalɐ]', sl: 'substantiivi, feminiini' }
    // SANAT>>
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kuvata, miten jokin tehdään: <span class="pt">devagar</span>, <span class="pt">rápido</span>, <span class="pt">bem</span>, <span class="pt">mal</span>.</li>
  <li>Osaat muodostaa -mente-adverbit ja vahvistaa adjektiivin päätteellä -íssimo: <span class="pt">lindíssimo</span>.</li>
  <li>Osaat puhua autoretkestä ja lentomatkasta: <span class="pt">estrada</span>, <span class="pt">voo</span>, <span class="pt">escala</span>.</li>
  <li>Osaat lukea ja sanoa kokonaisen lauseen luonnollisessa rytmissä.</li>
</ul>
<p data-paikka="ouro-preto">Jaysta on tullut turisti. Pelastuksen jälkeen ystävät vievät hänet katsomaan Ouro Pretoa ja Inhotimia, ja sitten Jay ja Maia lentävät takaisin Suomeen.</p>

<section class="osio" data-paikka="ouro-preto">
  <h2>Dialogi 1: A caminho de Ouro Preto</h2>
  <p class="ohje">Mateus ajaa, Murilo kertoo historiaa ja Jay on väsynyt. Etsi adverbit: <b>devagar, logo, tarde, nunca, só</b>. Jay tekee espanjalaisen virheen sanalla <span class="pt">pronto</span>.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi 1">
    <p class="s" data-h="kertoja" data-fi="Maanantaiaamuna Mateus, Murilo, Maia ja Jay lähtevät autolla Ouro Pretoon.">Segunda-feira de manhã. O Mateus, o Murilo, a Maia e o Jay vão de carro pra Ouro Preto.</p>
    <p class="s" data-h="mateus" data-fi="Onko kaikilla turvavyö? Minä ajan hitaasti, okei?">Todo mundo está com o cinto? Eu dirijo devagar, tá?</p>
    <p class="s" data-h="jay" data-fi="Luojan kiitos! Veljeni ajaa tosi nopeasti. Hän ei pysähdy koskaan!">Graças a Deus! O meu irmão dirige rapidíssimo. Ele nunca para!</p>
    <p class="s" data-h="murilo" data-fi="Ouro Preto on noin sadan kilometrin päässä täältä, suunnilleen kahden tunnin ajomatka.">Ouro Preto fica a uns cem quilômetros daqui, mais ou menos duas horas de carro.</p>
    <p class="s" data-h="jay" data-fi="Päästäänkö perille valmiina? (pronto = pian, espanjalaisittain)">Vamos chegar pronto?</p>
    <p class="s" data-h="maia" data-fi="Pronto? Portugaliksi pronto tarkoittaa ”valmis”. Sanalla ”pian” sanotaan logo.">Pronto? Em português “pronto” quer dizer “preparado”. Pra dizer “em pouco tempo”, a gente fala “logo”.</p>
    <p class="s" data-h="jay" data-fi="Ai niin. Päästäänkö perille pian?">Ah, certo. Vamos chegar logo?</p>
    <p class="s" data-h="mateus" data-fi="Päästään. Mutta minä ajan hitaasti. Mieluummin tulen perille myöhään kuin en ollenkaan.">Vamos, sim. Mas eu dirijo devagar. Prefiro chegar tarde do que não chegar.</p>
    <p class="s" data-h="kertoja" data-fi="Kaksi tuntia myöhemmin he saapuivat Ouro Pretoon.">Duas horas depois, eles chegaram a Ouro Preto.</p>
    <p class="s" data-h="murilo" data-fi="Katsokaa! Mikä ihana kaupunki! Kirkot ovat aivan upeita.">Olha só! Que cidade lindíssima! As igrejas são belíssimas.</p>
    <p class="s" data-h="jay" data-fi="Rinteet ovat tosi korkeita! Minä olen aivan poikki!">As ladeiras são altíssimas! Eu estou cansadíssimo!</p>
    <p class="s" data-h="maia" data-fi="Jay, sinä nousit vain yhden kadun. Hengitä rauhallisesti.">Jay, você só subiu uma rua. Respira devagar.</p>
    <p class="s" data-h="murilo" data-fi="Ouro Preto oli Minasin pääkaupunki pitkään. Sen jälkeen pääkaupunki siirtyi Belo Horizonteen.">Ouro Preto foi a capital de Minas durante muito tempo. Depois a capital mudou pra Belo Horizonte.</p>
    <p class="s" data-h="jay" data-fi="Miksi täällä on niin monta kirkkoa?">Por que tem tantas igrejas?</p>
    <p class="s" data-h="murilo" data-fi="Yli kolmesataa vuotta sitten portugalilaiset löysivät täältä paljon kultaa. He rakensivat kirkkoja täyteen kultaa.">Há mais de trezentos anos, os portugueses acharam muito ouro aqui. Eles construíram igrejas cheias de ouro.</p>
    <p class="s" data-h="jay" data-fi="Geologina minun täytyy nähdä se kulta!">Como geólogo, eu preciso ver o ouro!</p>
    <p class="s" data-h="maia" data-fi="Ensin lounas, sitten kulta. Sanoit, että sinulla on nälkä.">Primeiro o almoço, depois o ouro. Você disse que tem fome.</p>
    <p class="s" data-h="mateus" data-fi="Ensin pão de queijoa!">Primeiro o pão de queijo!</p>
  </div>
</section>

<section class="osio" data-paikka="confins">
  <h2>Dialogi 2: No aeroporto de Confins</h2>
  <p class="ohje">Torstaina Confinsin lentokentällä. Tämä on hyvästijakso: etsi -íssimo-sanat ja kuuntele, miten lause soljuu.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi 2">
    <p class="s" data-h="kertoja" data-fi="Torstaina Confinsin lentokentällä. Jay ja Maia palaavat Helsinkiin.">Quinta-feira, no aeroporto de Confins. O Jay e a Maia voltam pra Helsinque.</p>
    <p class="s" data-h="marta" data-fi="Lapseni, te ehditte olla täällä vain vähän aikaa! Vain kaksi viikkoa!">Meus filhos, vocês ficaram pouco! Só duas semanas!</p>
    <p class="s" data-h="jay" data-fi="Se oli ihana matka, rouva Marta. Pidin kaikesta, erityisesti pão de queijosta.">Foi uma viagem lindíssima, dona Marta. Eu gostei de tudo, principalmente do pão de queijo.</p>
    <p class="s" data-h="walker" data-fi="Entä Inhotim? Piditkö Inhotimista?">E o Inhotim? Você gostou do Inhotim?</p>
    <p class="s" data-h="jay" data-fi="Pidin hirveän paljon! Paviljonki, joka kuuntelee maapalloa, on uskomaton! Olin siellä puoli tuntia.">Gostei muitíssimo! O pavilhão que escuta a Terra é incrível! Eu fiquei lá meia hora.</p>
    <p class="s" data-h="marta" data-fi="Ja nyt te palaatte Suomeen. Milloin tulette takaisin?">E agora vocês voltam pra Finlândia. Quando vocês voltam?</p>
    <p class="s" data-h="maia" data-fi="Palaamme pian, äiti. Tulette te kesällä Suomeen!">Voltamos logo, mãe. Vocês vão visitar a gente na Finlândia no verão!</p>
    <p class="s" data-h="walker" data-fi="Minä otan huuliharppuni mukaan!">Eu vou levar a minha gaita de boca!</p>
    <p class="s" data-h="jay" data-fi="Mahtavaa, herra Walker! Suomi tulee rakastamaan sitä!">Que ótimo, seu Walker! A Finlândia vai amar!</p>
    <p class="s" data-h="kertoja" data-fi="Anderson antoi Jaylle piirroksen Simbasta.">O Anderson deu pro Jay um desenho do Simba.</p>
    <p class="s" data-h="anderson" data-fi="Sinulle, Jay. Tämä on Simba. Sinä olet minun ystäväni.">Pra você, Jay. É o Simba. Você é meu amigo.</p>
    <p class="s" data-h="jay" data-fi="Kiitos, Anderson! En unohda sinua koskaan. Laitan Simban seinälle kotona.">Obrigado, Anderson! Eu nunca vou esquecer você. Vou pôr o Simba na parede lá em casa.</p>
    <p class="s" data-h="kertoja" data-fi="Kone nousi ilmaan. Maia ja Jay istuivat ikkunapaikoilla.">O avião decolou. A Maia e o Jay sentaram nas poltronas da janela.</p>
    <p class="s" data-h="jay" data-fi="Kuinka monta tuntia lento kestää?">Quantas horas de voo são?</p>
    <p class="s" data-h="maia" data-fi="Yli kaksikymmentä tuntia välilaskun kanssa. Se on pitkä matka. Nuku vähän.">Mais de vinte horas, com escala. É uma viagem longuíssima. Dorme um pouco.</p>
    <p class="s" data-h="jay" data-fi="Olisikohan Marcus vielä vihainen minulle?">Será que o Marcus ainda está bravo comigo?</p>
    <p class="s" data-h="maia" data-fi="Ei. Hän lähetti viestin: ”Hyvää matkaa, gringo. Ja kiitos pão de queijosta.”">Não. Ele mandou uma mensagem: “Boa viagem, gringo. E obrigado pelo pão de queijo.”</p>
    <p class="s" data-h="kertoja" data-fi="Kone lensi meren yli. Alhaalla Brasilia pieneni pienenemistään.">O avião voou sobre o mar. Lá embaixo, o Brasil ficou cada vez menor.</p>
  </div>
</section>

<section class="osio" data-paikka="inhotim">
  <h2>Postikortti Andersonille</h2>
  <p class="ohje">Anderson jakaa joka päivä toisten kirjeitä, mutta itse hän saa postia harvoin. Jay lähettää hänelle kortin Ouro Pretosta. Napauta kuvaa, niin kortti kääntyy, ja kuuntele viesti. Etsi adverbit (<span class="pt">devagar, rapidamente, cuidadosamente</span>) ja <span class="pt">-íssimo</span>-muodot.</p>
  <div class="postikortti" data-kuva="ouro-preto" data-otsikko="Lembranças de Ouro Preto!" data-h="jay"
       data-osoite="Anderson|Rua das Mangueiras, 45|Belo Horizonte – MG" data-leima="Ouro Preto · 29 DEZ">
    <p data-fi="Rakas Anderson,">Querido Anderson,</p>
    <p data-fi="Ouro Preto on aivan ihana!">Ouro Preto é lindíssima!</p>
    <p data-fi="Kiipesimme hitaasti vanhoja katuja ylös.">A gente subiu devagar as ruas antigas.</p>
    <p data-fi="Mateus ajoi huolellisesti, kuten aina.">O Mateus dirigiu cuidadosamente, como sempre.</p>
    <p data-fi="Murilo puhui nopeasti, mutta minä ymmärsin melkein kaiken.">O Murilo falou rapidamente, mas eu entendi quase tudo.</p>
    <p data-fi="Huomenna menemme Inhotimiin.">Amanhã a gente vai pra Inhotim.</p>
    <p data-fi="Iso halaus, Jay">Um abraço enorme, Jay</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Autolla" data-sanat="carro,estrada,dirigir,cinto,gasolina,parar,viagem,viajar"></div>
  <div class="teema" data-otsikko="Lentokentällä" data-sanat="aeroporto,avião,voo,passaporte,mala,escala,decolar"></div>
  <div class="teema" data-otsikko="Kaupungissa" data-sanat="igreja,ladeira,capital,museu,ouro"></div>
  <div class="teema" data-otsikko="Adverbit" data-sanat="devagar,depressa,rápido,bem,mal,cedo,tarde,perto,longe,sempre,nunca,já,ainda"></div>
</section>

<section class="osio">
  <h2>Kielioppi</h2>

  <h3>1. Adverbit: miten, milloin, missä, kuinka paljon</h3>
  <p><b>Adverbi</b> on sana, joka kertoo lisää verbistä, adjektiivista tai toisesta adverbista. Se vastaa kysymyksiin miten, milloin, missä ja kuinka paljon. Tärkeintä: <b>adverbi ei taivu</b>. Siinä ei ole sukua eikä lukua, toisin kuin adjektiivissa.</p>
  <table class="taivutus">
    <tr><th>Miten?</th><td><span class="pt">bem</span> hyvin · <span class="pt">mal</span> huonosti · <span class="pt">devagar</span> hitaasti · <span class="pt">depressa</span> nopeasti, kiireesti · <span class="pt">rápido</span> nopeasti (puhekielessä)</td></tr>
    <tr><th>Milloin?</th><td><span class="pt">hoje</span> tänään · <span class="pt">cedo</span> aikaisin · <span class="pt">tarde</span> myöhään · <span class="pt">logo</span> pian · <span class="pt">já</span> jo · <span class="pt">ainda</span> vielä · <span class="pt">sempre</span> aina · <span class="pt">nunca</span> ei koskaan</td></tr>
    <tr><th>Missä?</th><td><span class="pt">aqui</span> täällä · <span class="pt">lá</span> siellä · <span class="pt">perto</span> lähellä · <span class="pt">longe</span> kaukana</td></tr>
    <tr><th>Kuinka paljon?</th><td><span class="pt">muito</span> paljon · <span class="pt">pouco</span> vähän · <span class="pt">bastante</span> melko, riittävästi · <span class="pt">demais</span> liikaa · <span class="pt">quase</span> melkein</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Mateus ajaa hitaasti.">O Mateus dirige devagar.</li>
    <li class="s" data-fi="Walker soittaa hyvin.">O Walker toca bem.</li>
    <li class="s" data-fi="Jay joi liikaa.">O Jay bebeu demais.</li>
    <li class="s" data-fi="Me tulimme melkein myöhään.">A gente chegou quase tarde.</li>
    <li class="s" data-fi="Maia on aina aikaisin.">A Maia chega sempre cedo.</li>
  </ul>
  <div class="muista">
    <p><b>Muista: bem vai bom?</b> <span class="pt">Bem</span> on adverbi (hyvin) ja <span class="pt">bom</span> adjektiivi (hyvä): <span class="pt">O Walker toca bem</span> (soittaa hyvin), mutta <span class="pt">O Walker é bom</span> (on hyvä). Samoin <span class="pt">mal</span> (huonosti) ja <span class="pt">mau</span> (paha, huono).</p>
    <p><b>Muista: muito.</b> Verbin tai adjektiivin edessä <span class="pt">muito</span> ei muutu (<span class="pt">muito cansada</span>), mutta substantiivin edessä se on adjektiivi ja taipuu (<span class="pt">muitas pessoas</span>).</p>
  </div>

  <h3>2. Adverbit päätteellä -mente</h3>
  <p>Monista adjektiiveista saa adverbin lisäämällä feminiinimuotoon päätteen <span class="pt">-mente</span>. Tämä vastaa suomen -sti-päätettä ja espanjan <i>-mente</i> -päätettä. Jos adjektiivin feminiinimuoto on sama kuin maskuliini (<span class="pt">feliz</span>, <span class="pt">final</span>), pääte lisätään sellaisenaan.</p>
  <table class="taivutus">
    <tr><td><span class="pt">rápido</span> → <span class="pt">rapidamente</span></td><td>nopeasti</td></tr>
    <tr><td><span class="pt">lento</span> → <span class="pt">lentamente</span></td><td>hitaasti</td></tr>
    <tr><td><span class="pt">feliz</span> → <span class="pt">felizmente</span></td><td>onneksi</td></tr>
    <tr><td><span class="pt">final</span> → <span class="pt">finalmente</span></td><td>vihdoin, lopulta</td></tr>
    <tr><td><span class="pt">claro</span> → <span class="pt">claramente</span></td><td>selvästi</td></tr>
    <tr><td><span class="pt">infeliz</span> → <span class="pt">infelizmente</span></td><td>valitettavasti</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Onneksi Marcus oli kiltti lopussa.">Felizmente, o Marcus ficou calmo no fim.</li>
    <li class="s" data-fi="Valitettavasti meidän täytyy lähteä.">Infelizmente, a gente precisa ir embora.</li>
    <li class="s" data-fi="Vihdoin me saavuimme.">Finalmente, nós chegamos.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> Arkikielessä -mente-adverbeja käytetään vähemmän kuin kirjoituksessa. Puhutaan mieluummin <span class="pt">dirige rápido</span> kuin <span class="pt">dirige rapidamente</span>. Sanat <span class="pt">devagar</span> ja <span class="pt">depressa</span> eivät ole -mente-adverbeja eivätkä muutu.</p>
    <p><b>Sana-asema:</b> <span class="pt">sempre</span>, <span class="pt">nunca</span>, <span class="pt">já</span> ja <span class="pt">ainda</span> tulevat tavallisesti verbin eteen: <span class="pt">Ele nunca para</span>, <span class="pt">Eu já comi</span>, <span class="pt">Eu ainda não comi</span>. Jos <span class="pt">nunca</span> tulee verbin jälkeen, tarvitaan <span class="pt">não</span>: <span class="pt">Ele não para nunca</span>.</p>
  </div>

  <h3>3. -íssimo: erittäin, aivan</h3>
  <p>Päätteellä <b>-íssimo</b> adjektiivin merkitys vahvistuu: <span class="pt">lindo</span> (kaunis) → <span class="pt">lindíssimo</span> (aivan ihastuttava). Pääte tulee adjektiivin viimeisen vokaalin tilalle ja se taipuu sukuun ja lukuun: <span class="pt">lindíssimo, lindíssima, lindíssimos, lindíssimas</span>. Painollinen tavu on <b>-ís-</b>.</p>
  <table class="taivutus">
    <tr><td><span class="pt">lindo</span> → <span class="pt">lindíssimo</span></td><td>kaunis → aivan ihana</td></tr>
    <tr><td><span class="pt">alto</span> → <span class="pt">altíssimo</span></td><td>korkea → hyvin korkea</td></tr>
    <tr><td><span class="pt">cansado</span> → <span class="pt">cansadíssimo</span></td><td>väsynyt → aivan poikki</td></tr>
    <tr><td><span class="pt">rápido</span> → <span class="pt">rapidíssimo</span></td><td>nopea → hyvin nopea (aksentti poistuu)</td></tr>
    <tr><td><span class="pt">feliz</span> → <span class="pt">felicíssimo</span></td><td>onnellinen (z muuttuu c:ksi)</td></tr>
    <tr><td><span class="pt">belo</span> → <span class="pt">belíssimo</span></td><td>kaunis, upea → aivan upea</td></tr>
    <tr><td><span class="pt">caro</span> → <span class="pt">caríssimo</span></td><td>kallis → hyvin kallis</td></tr>
    <tr><td><span class="pt">fácil</span> → <span class="pt">facílimo</span></td><td>helppo (epäsäännöllinen: -ílimo)</td></tr>
    <tr><td><span class="pt">difícil</span> → <span class="pt">dificílimo</span></td><td>vaikea (epäsäännöllinen: -ílimo)</td></tr>
    <tr><td><span class="pt">muito</span> → <span class="pt">muitíssimo</span></td><td>paljon → hirveän paljon (adverbi)</td></tr>
    
  </table>
  <ul class="esim">
    <li class="s" data-fi="Ouro Preto on aivan ihana kaupunki.">Ouro Preto é uma cidade lindíssima.</li>
    <li class="s" data-fi="Matka oli hyvin pitkä.">A viagem foi longuíssima.</li>
    <li class="s" data-fi="Pidin hirveän paljon.">Gostei muitíssimo.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> Arkipuheessa sanotaan useimmiten <span class="pt">muito lindo</span> tai <span class="pt">super lindo</span>. Pääte -íssimo on tunteellisempi ja tulee esiin huudahduksissa ja kehuissa. Vertaa suomeen: ”tosi kaunis” (tavallinen) ja ”aivan ihana” (tunteellinen).</p>
    <p><b>Espanjasta:</b> sama pääte on espanjassa <i>-ísimo</i> ja se tehdään samalla tavalla (<i>lindísimo</i>, <i>muchísimo</i>). Portugalissa s kirjoitetaan kahtena: <b>-íssimo</b>.</p>
  </div>
</section>

<section class="osio">
  <h2>Ääntäminen: lauseen ääntäminen</h2>
  <p>Kun olet oppinut sanat, vielä tarvitaan rytmi. Brasilialaiset eivät sano sanoja erillään, vaan äännetään lause ilman taukoja sanojen välillä. Neljä sääntöä auttaa:</p>
  <div class="saanto">
    <h3>1. Lause äännetään yhtenä jaksona</h3>
    <p>Sanojen välillä ei ole taukoa. Painoton loppu-vokaali ja seuraavan sanan alku-vokaali sulautuvat usein yhteen: <span class="pt">uma amiga</span> kuulostaa melkein ”u-ma-MI-ga”.</p>
    <ul class="esim">
      <li class="s">uma amiga</li>
      <li class="s">de ouro</li>
      <li class="s">Eu estou cansado.</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>2. s sanan lopussa vokaalin edellä on z</h3>
    <p>Kun sana päättyy s:ään ja seuraava sana alkaa vokaalilla, s kuulostaa z:lta: <span class="pt">os amigos</span> = ”uz a-MI-gus”.</p>
    <ul class="esim">
      <li class="s">os amigos</li>
      <li class="s">as igrejas</li>
      <li class="s">dois homens</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>3. Painottomat vokaalit vaimenevat</h3>
    <p>Lauseessa lyhyet sanat kuten <span class="pt">de</span>, <span class="pt">que</span>, <span class="pt">para</span> ovat nopeita ja painottomia. Puhekielessä ne lyhenevät: <span class="pt">para</span> → <span class="pt">pra</span>, <span class="pt">você</span> → <span class="pt">cê</span>, <span class="pt">está</span> → <span class="pt">tá</span>. Painollinen tavu pysyy selkeänä, ja muut kuuluvat kevyesti.</p>
    <ul class="esim">
      <li class="s">Primeiro o almoço, depois o ouro.</li>
      <li class="s">Vamos chegar logo?</li>
      <li class="s">Cê vai pra casa?</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>4. Intonaatio: kysymys ja väite</h3>
    <p>Väite laskee loppua kohti. Kyllä/ei-kysymys nousee viimeiselle painolliselle tavulle: <span class="pt">Você vem?</span> Kysymyssanalla alkava kysymys laskee, kuten suomessa: <span class="pt">Onde você está?</span> Luettelossa ääni nousee jokaisen kohdan jälkeen ja laskee viimeisessä.</p>
    <ul class="esim">
      <li class="s">Você vem comigo?</li>
      <li class="s">Onde você está?</li>
      <li class="s">Eu gosto de café, pão de queijo e feijão.</li>
    </ul>
  </div>
</section>

<aside class="kulttuuri" data-paikka="ouro-preto">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Ouro Preto ja kultakausi</h3>
  <figure class="kuva" data-kuva="ouro-preto"></figure>
  <p><b>Ouro Preto</b> (”musta kulta”) on pieni kaupunki Minas Geraisissa, noin sadan kilometrin päässä Belo Horizontesta. Nimen kerrotaan viittaavan tummaan kultaan, jota alueelta löydettiin. Kulta löytyi 1690-luvun lopulla, ja sen jälkeen alueelle saapui tuhansia ihmisiä. Tätä aikaa sanotaan Brasiliassa kultakaudeksi (<span class="pt">ciclo do ouro</span>). Viidennes (<span class="pt">quinto</span>) kullasta kuului Portugalin kruunulle.</p>
  <p>Ouro Preto oli Minas Geraisin osavaltion pääkaupunki vuoteen 1897, jolloin pääkaupungiksi vihittiin suunniteltu uusi kaupunki Belo Horizonte. Vanha kaupunki on säilynyt lähes ennallaan: jyrkät mukulakivikadut (<span class="pt">ladeiras</span>), barokkikirkot ja valkoiset talot. UNESCO otti kaupungin maailmanperintölistalle vuonna 1980. Tunnetuin barokkitaiteilija oli kuvanveistäjä ja arkkitehti Aleijadinho (Antônio Francisco Lisboa), jonka töitä on myös Ouro Preton kirkoissa.</p>
  <p>Kaupungissa on myös <span class="pt">Museu da Inconfidência</span>, joka kertoo vuoden 1789 salaliitosta Portugalin valtaa vastaan. Sen tunnetuin hahmo oli Tiradentes. Ouro Pretossa on perustettu vuonna 1876 myös <span class="pt">Escola de Minas</span>, kaivos- ja geologikoulu: Jaylle ja Maialle sopiva paikka.</p>
  <h3>Inhotim</h3>
  <figure class="kuva" data-kuva="inhotim"></figure>
  <p><b>Inhotim</b> on nykytaiteen museo ja kasvitieteellinen puutarha Brumadinhon kaupungissa, noin tunnin ajomatkan päässä Belo Horizontesta. Se avattiin yleisölle vuonna 2006, ja sitä pidetään yhtenä Latinalaisen Amerikan suurimmista ulkoilmamuseoista. Taideteokset on sijoitettu galleriapaviljonkeihin ja puistoon. Yksi tunnetuimmista on <i>Sonic Pavilion</i>, lasipaviljonki, johon mikrofonit välittävät ääniä syvästä porareiästä: geologille ihanaa kuunneltavaa.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: Jayn postikortti</h3>
    <p class="ohje">Lue Jayn postikortti (yllä) ja valitse oikea vastaus.</p>
    <div class="valinta" data-oikea="o Anderson">
      <p class="kysymys">Para quem o Jay escreve?</p>
      <div class="vaihtoehdot"><button type="button">a Purjo</button><button type="button">o Anderson</button><button type="button">a Maia</button></div>
    </div>
    <div class="valinta" data-oikea="cuidadosamente">
      <p class="kysymys"><span class="ryhma" data-hahmot="mateus"></span> Como o Mateus dirigiu?</p>
      <div class="vaihtoehdot"><button type="button">rapidamente</button><button type="button">cuidadosamente</button><button type="button">mal</button></div>
    </div>
    <div class="valinta" data-oikea="rapidamente">
      <p class="kysymys"><span class="ryhma" data-hahmot="murilo"></span> Como o Murilo falou?</p>
      <div class="vaihtoehdot"><button type="button">devagar</button><button type="button">rapidamente</button><button type="button">pouco</button></div>
    </div>
    <div class="valinta" data-oikea="lindíssima">
      <p class="kysymys">Ouro Preto é…</p>
      <div class="vaihtoehdot"><button type="button">lindíssima</button><button type="button">longuíssima</button><button type="button">cansadíssima</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Adverbi</h3>
    <p class="ohje">Täydennä lause adverbilla. Suomennos kertoo, mitä sanaa haetaan.</p>
    <div class="aukot">
      <p>O Mateus dirige <span class="aukko" data-oikea="devagar"></span>. (hitaasti)</p>
      <p>O meu irmão <span class="aukko" data-oikea="nunca"></span> para. (ei koskaan)</p>
      <p>Eu <span class="aukko" data-oikea="já"></span> comi. (jo)</p>
      <p>Eu <span class="aukko" data-oikea="ainda"></span> não comi. (vielä)</p>
      <p>O Walker toca <span class="aukko" data-oikea="bem"></span>. (hyvin)</p>
      <p>Vamos chegar <span class="aukko" data-oikea="logo"></span>? (pian)</p>
      <p>A Maia chega <span class="aukko" data-oikea="cedo"></span>, e o Jay chega tarde. (aikaisin)</p>
      <p>O Jay bebeu <span class="aukko" data-oikea="demais"></span>. (liikaa)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. -íssimo</h3>
    <p class="ohje">Vahvista adjektiivi päätteellä -íssimo. Kirjoita myös aksentti. Muista sukumuoto.</p>
    <div class="aukot">
      <p>lindo → <span class="aukko" data-oikea="lindíssimo"></span></p>
      <p>alto → <span class="aukko" data-oikea="altíssimo"></span></p>
      <p>cansado → <span class="aukko" data-oikea="cansadíssimo"></span></p>
      <p>rápido → <span class="aukko" data-oikea="rapidíssimo"></span></p>
      <p>feliz → <span class="aukko" data-oikea="felicíssimo"></span></p>
      <p>caro → <span class="aukko" data-oikea="caríssimo"></span></p>
      <p>difícil → <span class="aukko" data-oikea="dificílimo"></span></p>
      <p>A cidade é lindo → A cidade é <span class="aukko" data-oikea="lindíssima"></span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Bem vai bom? Mal vai mau?</h3>
    <p class="ohje">Valitse adverbi tai adjektiivi.</p>
    <div class="valinta" data-oikea="bem">
      <p class="kysymys">O Walker toca ___. (hyvin)</p>
      <div class="vaihtoehdot"><button type="button">bem</button><button type="button">bom</button></div>
    </div>
    <div class="valinta" data-oikea="bom">
      <p class="kysymys">O Walker é um músico ___. (hyvä)</p>
      <div class="vaihtoehdot"><button type="button">bem</button><button type="button">bom</button></div>
    </div>
    <div class="valinta" data-oikea="mal">
      <p class="kysymys">Eu falo português ___. (huonosti)</p>
      <div class="vaihtoehdot"><button type="button">mal</button><button type="button">mau</button></div>
    </div>
    <div class="valinta" data-oikea="logo">
      <p class="kysymys">Vamos chegar ___? (pian; ei: pronto!)</p>
      <div class="vaihtoehdot"><button type="button">pronto</button><button type="button">logo</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Matkasanasto</h3>
    <p class="ohje">Yhdistä portugali ja suomi.</p>
    <ul class="yhdista">
      <li data-pari="lentokone">o avião</li>
      <li data-pari="lentokenttä">o aeroporto</li>
      <li data-pari="lento">o voo</li>
      <li data-pari="matkalaukku">a mala</li>
      <li data-pari="passi">o passaporte</li>
      <li data-pari="välilasku">a escala</li>
      <li data-pari="maantie">a estrada</li>
      <li data-pari="turvavyö">o cinto</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Kuuntele ja valitse</h3>
    <p class="ohje">Paina ▶ ja valitse sana, jonka kuulit.</p>
    <div class="valinta" data-kuuntele="cedo" data-oikea="cedo">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">cedo</button><button type="button">tarde</button></div>
    </div>
    <div class="valinta" data-kuuntele="perto" data-oikea="perto">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">perto</button><button type="button">longe</button></div>
    </div>
    <div class="valinta" data-kuuntele="devagar" data-oikea="devagar">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">devagar</button><button type="button">depressa</button></div>
    </div>
    <div class="valinta" data-kuuntele="nunca" data-oikea="nunca">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">sempre</button><button type="button">nunca</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause.</p>
    <div class="sanelu" data-puhu="Eu dirijo devagar."></div>
    <div class="sanelu" data-puhu="Que cidade lindíssima!"></div>
    <div class="sanelu" data-puhu="A viagem foi longuíssima."></div>
    <div class="sanelu" data-puhu="Ele nunca para."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Mateus ajaa hitaasti.</p><p class="s" data-fi="Mateus ajaa hitaasti.">O Mateus dirige devagar.</p></div>
    <div class="kaanna"><p class="fi">Olen aivan poikki!</p><p class="s" data-fi="Olen aivan poikki!">Eu estou cansadíssimo!</p></div>
    <div class="kaanna"><p class="fi">Lento oli hyvin pitkä.</p><p class="s" data-fi="Lento oli hyvin pitkä.">O voo foi longuíssimo.</p></div>
    <div class="kaanna"><p class="fi">Hän ei koskaan pysähdy.</p><p class="s" data-fi="Hän ei koskaan pysähdy.">Ele nunca para.</p></div>
    <div class="kaanna"><p class="fi">Valitettavasti minun täytyy lähteä.</p><p class="s" data-fi="Valitettavasti minun täytyy lähteä.">Infelizmente, eu preciso ir embora.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Como o Mateus dirige?</summary>
      <p class="s" data-fi="Hän ajaa hitaasti.">Ele dirige devagar.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Por que Ouro Preto tem tantas igrejas?</summary>
      <p class="s" data-fi="Koska portugalilaiset löysivät paljon kultaa.">Porque os portugueses acharam muito ouro.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Quantas horas de voo são?</summary>
      <p class="s" data-fi="Yli kaksikymmentä tuntia, välilaskun kanssa.">Mais de vinte horas, com escala.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você gosta de viajar de avião?</summary>
      <p class="s" data-fi="Pidän kovasti. / En pidä siitä. (muuta omasi)">Gosto muito. / Não gosto.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l19">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l19-cartao" lang="pt-BR">
      <div class="kal-yla"><b>O meu cartão-postal</b><small>kirjoita postikortti lomaltasi</small></div>
      <div class="kal-rivit">
        <label>Querido/a… <input name="kenelle" placeholder="Querida mãe,"></label>
        <label>Aqui é… <input name="paikka" placeholder="Aqui é lindíssimo!"></label>
        <label>Ontem… <input name="eilen" placeholder="Ontem a gente caminhou devagar na praia."></label>
        <label>Amanhã… <input name="huomenna" placeholder="Amanhã a gente vai pra Hanko."></label>
        <label>Um abraço <input name="loppu" placeholder="Um abraço enorme!"></label>
      </div>
    </div>
    <p>Kirjoita postikortti Ouro Pretosta tai Inhotimista (5–6 lausetta). Käytä ainakin kolmea adverbia (esimerkiksi <span class="pt">devagar, muito, sempre, finalmente</span>) ja kahta -íssimo-sanaa. Sano kortti ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Hei Purjo! Olemme Ouro Pretossa. Kaupunki on aivan ihana.">Oi, Purjo! Estamos em Ouro Preto. A cidade é lindíssima.</p>
      <p class="s" data-fi="Kadut ovat hyvin korkeita, ja minä olen aivan poikki.">As ruas são altíssimas, e eu estou cansadíssimo.</p>
      <p class="s" data-fi="Mateus ajaa hitaasti, mutta me pääsimme perille.">O Mateus dirige devagar, mas a gente chegou.</p>
      <p class="s" data-fi="Täällä on paljon kirkkoja ja paljon kultaa.">Tem muitas igrejas e muito ouro.</p>
      <p class="s" data-fi="Valitettavasti et ole täällä. Terveisin Jay.">Infelizmente, você não está aqui. Beijos, Jay.</p>
    </details>
  </div>
</section>
`
});
