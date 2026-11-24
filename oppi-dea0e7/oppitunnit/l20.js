/* Jakso 20: Kesä Suomessa. Oma materiaali, ei kirjan tekstiä.
   Kielioppi: imperfekti (pretérito imperfeito). Ääntämisohjeet noudattavat Belo Horizonten ääntämystä.
   Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l20',
  lyhyt: '20',
  jakso: 'Jakso 20',
  otsikko: 'Muistelu: imperfekti',
  lahde: 'Aihe: muistot, poliisi · Kielioppi: imperfekti · Kulttuuri: Korppoo, Hanko ja suomalainen kesä',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geologi, vie perheensä Suomeen' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, tulkkaa' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 1, kuvaus: 'Maian äiti, Suomessa ensimmäistä kertaa' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 1, kuvaus: 'Maian isä, huuliharppu mukana' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 2, kuvaus: 'Maian veli' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'Jayn äiti, osaa kaksi portugalin sanaa' },
    kouvonen: { nimi: 'Kouvonen', tyyppi: 'mies', vaihto: 6, kuvaus: 'Jayn veli, ajaa liian lujaa' }
  },

  aiheet: ['aika', 'luonto', 'ihmiset', 'toiminta'],

  sanasto: [
    'era', 'tinha', 'ia', 'estava', 'falava', 'comia', 'antigamente', 'naquela época', 'todo dia', 'às vezes', 'quando eu era criança',
    'chalé', 'sauna', 'ilha', 'mar', 'floresta', 'pescar', 'nadar', 'brincar', 'bicicleta', 'claro', 'escuro', 'gelado',
    'policial', 'multa', 'placa', 'limite', 'documentos', 'perigoso', 'praia', 'sorvete'
  ],

  sanat: {
    // <<SANAT
    // paikat
    'korppoo': { kieli: 'fi', fi: 'Korppoo (saaristokunta Lounais-Suomessa)', aa: 'KOR-poo', ipa: '[ˈkorpoː]', sl: 'paikannimi', huom: 'suomalainen paikannimi, ruotsiksi Korpo' },
    'hanko': { kieli: 'fi', fi: 'Hanko (kaupunki Etelä-Suomessa)', aa: 'HAN-ko', ipa: '[ˈhɑŋko]', sl: 'paikannimi', huom: 'suomalainen paikannimi, ruotsiksi Hangö' },
    'espoo': { kieli: 'fi', fi: 'Espoo', aa: 'ES-poo', ipa: '[ˈespoː]', sl: 'paikannimi', huom: 'suomalainen paikannimi' },
    // dialogi 1
    'eram': { fi: 'olivat; kello oli (monikko)', aa: 'E-rãu', ipa: '[ˈɛɾɐ̃w]', sl: 'verbi, imperfekti', huom: 'perusmuoto {ser}; eram onze horas = kello oli yksitoista' },
    'era': { fi: 'oli', aa: 'E-ra', ipa: '[ˈɛɾɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {ser}' },
    'éramos': { fi: 'olimme', aa: 'E-ra-mus', ipa: '[ˈɛɾɐmus]', sl: 'verbi, imperfekti', huom: 'perusmuoto {ser}' },
    'estava': { fi: 'oli (tilassa tai paikassa)', aa: 'es-TA-va', ipa: '[esˈtavɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {estar}' },
    'linda': { fi: 'kaunis (feminiini)', aa: 'LĨ-da', ipa: '[ˈlĩdɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {lindo}' },
    'pescar': { fi: 'kalastaa', aa: 'pes-KAH', ipa: '[pesˈkah]', sl: 'verbi, perusmuoto' },
    'pescava': { fi: 'kalasti', aa: 'pes-KA-va', ipa: '[pesˈkavɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto pescar' },
    'traduziu': { fi: 'tulkkasi, käänsi', aa: 'tra-du-ZIU', ipa: '[tɾaduˈziw]', sl: 'verbi, perfekti', huom: 'perusmuoto traduzir' },
    'ouvia': { fi: 'kuunteli, kuuli', aa: 'o-VI-a', ipa: '[oˈviɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {ouvir}' },
    'muita': { fi: 'paljon, monta (feminiini)', aa: 'MŨI-ta', ipa: '[ˈmũjtɐ]', sl: 'pronomini, feminiini', huom: 'muita atenção = paljon tarkkaavaisuutta' },
    'fazia': { fi: 'teki (tapa)', aa: 'fa-ZI-a', ipa: '[faˈziɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {fazer}' },
    'faziam': { fi: 'tekivät (tapa)', aa: 'fa-ZI-ãu', ipa: '[faˈziɐ̃w]', sl: 'verbi, imperfekti', huom: 'perusmuoto {fazer}' },
    'morava': { fi: 'asui', aa: 'mo-RA-va', ipa: '[moˈɾavɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {morar}' },
    'brincava': { fi: 'leikki', aa: 'brĩ-KA-va', ipa: '[bɾĩˈkavɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {brincar}' },
    'floresta': { fi: 'metsä', aa: 'flo-RES-ta', ipa: '[floˈɾɛstɐ]', sl: 'substantiivi, feminiini' },
    'andava': { fi: 'käveli; kulki', aa: 'ã-DA-va', ipa: '[ɐ̃ˈdavɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {andar}; andar de bicicleta = ajaa polkupyörällä' },
    'bicicleta': { fi: 'polkupyörä', aa: 'bi-si-KLE-ta', ipa: '[bisiˈklɛtɐ]', sl: 'substantiivi, feminiini' },
    'parava': { fi: 'pysähtyi', aa: 'pa-RA-va', ipa: '[paˈɾavɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {parar}' },
    'tinha': { fi: 'oli (jollakin); oli (ikä)', aa: 'TSĨ-nja', ipa: '[ˈtʃĩɲɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {ter}' },
    'assistente': { fi: 'avustaja', aa: 'a-sis-TẼ-tsi', ipa: '[asisˈtẽtʃi]', sl: 'substantiivi' },
    'social': { fi: 'sosiaalinen', aa: 'so-si-AU', ipa: '[sosiˈaw]', sl: 'adjektiivi' },
    'assistente social': { fi: 'sosiaalityöntekijä', aa: 'a-sis-TẼ-tsi so-si-AU', ipa: '[asisˈtẽtʃi sosiˈaw]', sl: 'ilmaus' },
    'cheia': { fi: 'täynnä (feminiini)', aa: 'SHEI-a', ipa: '[ˈʃejɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini cheio' },
    'via': { fi: 'näki; katsoi (tapa)', aa: 'VI-a', ipa: '[ˈviɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {ver}' },
    'leão': { fi: 'leijona', aa: 'le-ÃU', ipa: '[leˈɐ̃w]', sl: 'substantiivi, maskuliini', huom: 'O Rei Leão = Leijonakuningas' },
    'iba': { fi: 'meni (espanjaa)', aa: 'I-ba', ipa: '[ˈibɐ]', sl: 'verbi, espanjaa', huom: 'espanjan imperfekti, portugaliksi {ia}' },
    'ia': { fi: 'meni (tapa); oli menossa', aa: 'I-a', ipa: '[ˈiɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {ir}' },
    'nadar': { fi: 'uida', aa: 'na-DAH', ipa: '[naˈdah]', sl: 'verbi, perusmuoto' },
    'nadava': { fi: 'ui', aa: 'na-DA-va', ipa: '[naˈdavɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {nadar}' },
    'gelado': { fi: 'jäinen, jääkylmä', aa: 'zhe-LA-du', ipa: '[ʒeˈladu]', sl: 'adjektiivi' },
    'gelada': { fi: 'jääkylmä (feminiini)', aa: 'zhe-LA-da', ipa: '[ʒeˈladɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {gelado}' },
    'quentíssima': { fi: 'tulikuuma (feminiini)', aa: 'kẽ-TSI-si-ma', ipa: '[kẽˈtʃisimɐ]', sl: 'adjektiivi, feminiini', huom: '{quente} + -íssimo' },
    'sentia': { fi: 'tunsi', aa: 'sẽ-TSI-a', ipa: '[sẽˈtʃiɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {sentir}' },
    'escura': { fi: 'pimeä (feminiini)', aa: 'es-KU-ra', ipa: '[esˈkuɾɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini escuro' },
    'escuro': { fi: 'pimeä', aa: 'es-KU-ru', ipa: '[esˈkuɾu]', sl: 'adjektiivi', huom: 'vastakohta {claro}' },
    // dialogi 2
    'dirigia': { fi: 'ajoi (autoa)', aa: 'di-ri-ZHI-a', ipa: '[dʒiɾiˈʒiɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {dirigir}' },
    'dirigindo': { fi: 'ajaen', aa: 'di-ri-ZHĨ-du', ipa: '[dʒiɾiˈʒĩdu]', sl: 'verbi, gerundi', huom: 'estava dirigindo = oli ajamassa' },
    'apareceu': { fi: 'ilmestyi', aa: 'a-pa-re-SEU', ipa: '[apaɾeˈsew]', sl: 'verbi, perfekti', huom: 'perusmuoto aparecer' },
    'polícia': { fi: 'poliisi', aa: 'po-LI-sja', ipa: '[poˈlisjɐ]', sl: 'substantiivi, feminiini' },
    'policial': { fi: 'poliisi (henkilö)', aa: 'po-li-si-AU', ipa: '[polisiˈaw]', sl: 'substantiivi' },
    'documentos': { fi: 'paperit, asiakirjat', aa: 'do-ku-MẼ-tus', ipa: '[dokuˈmẽtus]', sl: 'substantiivi, maskuliini, monikko', huom: 'pedir os documentos = pyytää papereita' },
    'falava': { fi: 'puhui (tapa)', aa: 'fa-LA-va', ipa: '[faˈlavɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {falar}' },
    'dizendo': { fi: 'sanoen', aa: 'di-ZẼ-du', ipa: '[dʒiˈzẽdu]', sl: 'verbi, gerundi', huom: 'está dizendo = sanoo parhaillaan' },
    'placa': { fi: 'kyltti; rekisterikilpi', aa: 'PLA-ka', ipa: '[ˈplakɐ]', sl: 'substantiivi, feminiini' },
    'acredita': { fi: 'uskoo', aa: 'a-kre-DI-ta', ipa: '[akɾeˈdʒitɐ]', sl: 'verbi', huom: 'perusmuoto {acreditar}' },
    'multa': { fi: 'sakko', aa: 'MUU-ta', ipa: '[ˈmuwtɐ]', sl: 'substantiivi, feminiini' },
    'frase': { fi: 'lause', aa: 'FRA-zi', ipa: '[ˈfɾazi]', sl: 'substantiivi, feminiini' },
    'minutos': { fi: 'minuuttia', aa: 'mi-NU-tus', ipa: '[miˈnutus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {minuto}' },
    'caminhou': { fi: 'käveli', aa: 'ka-mi-NJOU', ipa: '[kamiˈɲow]', sl: 'verbi, perfekti', huom: 'perusmuoto caminhar' },
    'tomou': { fi: 'otti; joi; söi', aa: 'to-MOU', ipa: '[toˈmow]', sl: 'verbi, perfekti', huom: 'perusmuoto {tomar}; tomar sorvete = syödä jäätelöä' },
    'sorvete': { fi: 'jäätelö', aa: 'soh-VE-tsi', ipa: '[sohˈvetʃi]', sl: 'substantiivi, maskuliini' },
    'cais': { fi: 'laituri', aa: 'KAIS', ipa: '[kajs]', sl: 'substantiivi, maskuliini' },
    'amou': { fi: 'rakasti', aa: 'a-MOU', ipa: '[aˈmow]', sl: 'verbi, perfekti', huom: 'perusmuoto {amar}' },
    'parou': { fi: 'pysäytti; pysähtyi', aa: 'pa-ROU', ipa: '[paˈɾow]', sl: 'verbi, perfekti', huom: 'perusmuoto {parar}' },
    // kielioppi
    'comia': { fi: 'söi (tapa)', aa: 'ko-MI-a', ipa: '[koˈmiɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {comer}' },
    'partia': { fi: 'lähti (tapa)', aa: 'pah-TSI-a', ipa: '[pahˈtʃiɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {partir}' },
    'partir': { fi: 'lähteä', aa: 'pah-TSIH', ipa: '[pahˈtʃih]', sl: 'verbi, perusmuoto' },
    'falavam': { fi: 'puhuivat (tapa)', aa: 'fa-LA-vãu', ipa: '[faˈlavɐ̃w]', sl: 'verbi, imperfekti', huom: 'perusmuoto {falar}' },
    'comiam': { fi: 'söivät (tapa)', aa: 'ko-MI-ãu', ipa: '[koˈmiɐ̃w]', sl: 'verbi, imperfekti', huom: 'perusmuoto {comer}' },
    'partiam': { fi: 'lähtivät (tapa)', aa: 'pah-TSI-ãu', ipa: '[pahˈtʃiɐ̃w]', sl: 'verbi, imperfekti', huom: 'perusmuoto {partir}' },
    'falávamos': { fi: 'puhuimme (tapa)', aa: 'fa-LA-va-mus', ipa: '[faˈlavɐmus]', sl: 'verbi, imperfekti', huom: 'perusmuoto {falar}' },
    'comíamos': { fi: 'söimme (tapa)', aa: 'ko-MI-a-mus', ipa: '[koˈmiɐmus]', sl: 'verbi, imperfekti', huom: 'perusmuoto {comer}' },
    'partíamos': { fi: 'lähdimme (tapa)', aa: 'pah-TSI-a-mus', ipa: '[pahˈtʃiɐmus]', sl: 'verbi, imperfekti', huom: 'perusmuoto {partir}' },
    'tínhamos': { fi: 'meillä oli', aa: 'TSĨ-nja-mus', ipa: '[ˈtʃĩɲɐmus]', sl: 'verbi, imperfekti', huom: 'perusmuoto {ter}' },
    'tinham': { fi: 'heillä oli', aa: 'TSĨ-njãu', ipa: '[ˈtʃĩɲɐ̃w]', sl: 'verbi, imperfekti', huom: 'perusmuoto {ter}' },
    'vinha': { fi: 'tuli (tapa)', aa: 'VĨ-nja', ipa: '[ˈvĩɲɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {vir}' },
    'vínhamos': { fi: 'tulimme (tapa)', aa: 'VĨ-nja-mus', ipa: '[ˈvĩɲɐmus]', sl: 'verbi, imperfekti', huom: 'perusmuoto {vir}' },
    'vinham': { fi: 'tulivat (tapa)', aa: 'VĨ-njãu', ipa: '[ˈvĩɲɐ̃w]', sl: 'verbi, imperfekti', huom: 'perusmuoto {vir}' },
    'punha': { fi: 'pani (tapa)', aa: 'PŨ-nja', ipa: '[ˈpũɲɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {pôr}' },
    'púnhamos': { fi: 'panimme (tapa)', aa: 'PŨ-nja-mus', ipa: '[ˈpũɲɐmus]', sl: 'verbi, imperfekti', huom: 'perusmuoto {pôr}' },
    'punham': { fi: 'panivat (tapa)', aa: 'PŨ-njãu', ipa: '[ˈpũɲɐ̃w]', sl: 'verbi, imperfekti', huom: 'perusmuoto {pôr}' },
    'íamos': { fi: 'menimme (tapa)', aa: 'I-a-mus', ipa: '[ˈiɐmus]', sl: 'verbi, imperfekti', huom: 'perusmuoto {ir}' },
    'iam': { fi: 'menivät (tapa)', aa: 'I-ãu', ipa: '[ˈiɐ̃w]', sl: 'verbi, imperfekti', huom: 'perusmuoto {ir}' },
    'antigamente': { fi: 'ennen vanhaan', aa: 'ã-tsi-ga-MẼ-tsi', ipa: '[ɐ̃tʃiɡɐˈmẽtʃi]', sl: 'adverbi' },
    'época': { fi: 'aikakausi', aa: 'E-po-ka', ipa: '[ˈɛpokɐ]', sl: 'substantiivi, feminiini' },
    'naquela época': { fi: 'siihen aikaan', aa: 'na-KE-la E-po-ka', ipa: '[naˈkɛlɐ ˈɛpokɐ]', sl: 'ilmaus', huom: 'naquela = em + aquela' },
    'quando eu era criança': { fi: 'kun olin lapsi', aa: 'KUÃ-du EU E-ra kri-Ã-sa', ipa: '[ˈkwɐ̃du ew ˈɛɾɐ kɾiˈɐ̃sɐ]', sl: 'ilmaus' },
    'nadei': { fi: 'uin', aa: 'na-DEI', ipa: '[naˈdej]', sl: 'verbi, perfekti', huom: 'perusmuoto {nadar}' },
    'chalé': { fi: 'mökki, pieni talo', aa: 'sha-LE', ipa: '[ʃaˈlɛ]', sl: 'substantiivi, maskuliini' },
    'casa de campo': { fi: 'maalaistalo, kesämökki', aa: 'KA-za di KÃ-pu', ipa: '[ˈkazɐ dʒi ˈkɐ̃pu]', sl: 'ilmaus' },
    'esquiava': { fi: 'hiihti', aa: 'es-ki-A-va', ipa: '[eskiˈavɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto esquiar' },
    'quentinha': { fi: 'lämmin (feminiini, kodikas)', aa: 'kẽ-TSĨ-nja', ipa: '[kẽˈtʃĩɲɐ]', sl: 'adjektiivi, feminiini', huom: 'quente + -inha, hellittelymuoto' },
    'correndo': { fi: 'juosten', aa: 'ko-HẼ-du', ipa: '[koˈhẽdu]', sl: 'verbi, gerundi', huom: 'perusmuoto {correr}' }
    // SANAT>>
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kertoa muistoja ja kuvata, millaista ennen oli: <span class="pt">eu morava</span>, <span class="pt">era</span>, <span class="pt">tinha</span>.</li>
  <li>Osaat taivuttaa imperfektin: -ava, -ia sekä epäsäännölliset <span class="pt">ser, ter, vir, pôr</span>.</li>
  <li>Osaat erottaa imperfektin ja perfektin: tila ja tapa vai tapahtuma.</li>
  <li>Osaat kertoa kesästä Suomessa: sauna, meri, poliisi.</li>
</ul>
<p data-paikka="korppoo">Seuraavana kesänä Maian perhe vierailee Suomessa. He viettävät aikaa mökillä Korppoossa ja käyvät Hangossa. Jay tulkkaa Purjolle ja Kouvoselle, ja Kouvonen ajaa kuten aina.</p>

<section class="osio" data-paikka="korppoo">
  <h2>Dialogi 1: No chalé em Korppoo</h2>
  <p class="ohje">Mökin laiturilla puhutaan lapsuudesta ja siitä, millaista ennen oli. Etsi imperfektit: <b>era, pescava, morava, brincava, tinha, via, ia</b>. Jay tekee espanjalaisen virheen sanalla <span class="pt">iba</span>.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi 1">
    <p class="s" data-h="kertoja" data-fi="Heinäkuu, Korppoo. Kello oli yksitoista illalla, mutta taivas oli vielä valoisa.">Julho, em Korppoo. Eram onze da noite, mas o céu ainda estava claro.</p>
    <p class="s" data-h="marta" data-fi="Kuinka kaunista! Brasiliassa on jo pimeää yhdeltätoista illalla.">Que coisa linda! No Brasil, às onze da noite já está escuro.</p>
    <p class="s" data-h="walker" data-fi="Kun olin lapsi, kalastin isäni kanssa joka sunnuntai.">Quando eu era criança, eu pescava com o meu pai todo domingo.</p>
    <p class="s" data-h="kertoja" data-fi="Jay tulkkasi Purjolle, joka kuunteli kaiken tarkasti.">O Jay traduziu pra Purjo, que ouvia tudo com muita atenção.</p>
    <p class="s" data-h="purjo" data-fi="Mitä kuuluu? Kiitos!">Tudo bem? Obrigada!</p>
    <p class="s" data-h="marta" data-fi="Oikein hyvin, rouva Purjo! Entä sinä, Jay? Mitä sinä teit pienenä?">Muito bem, dona Purjo! E você, Jay? O que você fazia quando era pequeno?</p>
    <p class="s" data-h="jay" data-fi="Minä asuin Espoossa. Leikin metsässä veljeni kanssa.">Eu morava em Espoo. Eu brincava na floresta com o meu irmão.</p>
    <p class="s" data-h="walker" data-fi="Entä veljesi? Millainen hän oli?">E o seu irmão? Como ele era?</p>
    <p class="s" data-h="jay" data-fi="Kouvonen oli jo silloin vaarallinen. Hän ajoi polkupyörällä tosi lujaa eikä koskaan pysähtynyt!">O Kouvonen já era perigoso. Ele andava de bicicleta rapidíssimo e nunca parava!</p>
    <p class="s" data-h="marta" data-fi="Entä äitisi?">E a sua mãe?</p>
    <p class="s" data-h="jay" data-fi="Äitini oli sairaanhoitaja. Hänellä oli aina suunnitelma kaikkeen.">A minha mãe era enfermeira. Ela sempre tinha um plano pra tudo.</p>
    <p class="s" data-h="marta" data-fi="Minä olin sosiaalityöntekijä. Meidän kotimme oli aina täynnä ihmisiä.">Eu era assistente social. A nossa casa estava sempre cheia de gente.</p>
    <p class="s" data-h="anderson" data-fi="Minä katsoin Leijonakuningasta joka viikko. Ja katson vieläkin!">Eu via O Rei Leão toda semana. E eu ainda vejo!</p>
    <p class="s" data-h="walker" data-fi="Mitä te teitte täällä Suomessa kesällä?">E aqui na Finlândia, o que vocês faziam no verão?</p>
    <p class="s" data-h="jay" data-fi="Me käytiin saunassa joka päivä. (espanjalainen muoto)">A gente iba à sauna todo dia.</p>
    <p class="s" data-h="maia" data-fi="Iba? Portugaliksi se on ”ia”: a gente ia.">Iba? Em português é “ia”: a gente ia.</p>
    <p class="s" data-h="jay" data-fi="Me käytiin saunassa joka päivä ja uitiin sen jälkeen meressä.">A gente ia à sauna todo dia e depois nadava no mar.</p>
    <p class="s" data-h="marta" data-fi="Meressä? Eikö vesi ollut jääkylmää?">No mar? A água não estava gelada?</p>
    <p class="s" data-h="jay" data-fi="Oli! Mutta sauna oli tulikuuma, emmekä tunteneet mitään.">Estava! Mas a sauna era quentíssima, e a gente não sentia nada.</p>
    <p class="s" data-h="kertoja" data-fi="Kukaan ei mennyt nukkumaan. Yö ei tullut koskaan pimeäksi.">Ninguém foi dormir. A noite nunca ficou escura.</p>
  </div>
</section>

<section class="osio" data-paikka="hanko">
  <h2>Dialogi 2: A caminho de Hanko</h2>
  <p class="ohje">Lauantaina matka jatkuu Hankoon. Kouvonen ajaa, ja Jay tulkkaa, mitä poliisi sanoo. Huomaa, miten tapahtuma (<b>apareceu, pediu, deu</b>) ja tausta (<b>dirigia, era, estava</b>) kulkevat yhdessä.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi 2">
    <p class="s" data-h="kertoja" data-fi="Lauantaina matkalla Hankoon. Kouvonen ajoi, ja hän ajoi tosi lujaa, kuten aina.">Sábado, a caminho de Hanko. O Kouvonen dirigia, e dirigia muito rápido, como sempre.</p>
    <p class="s" data-h="walker" data-fi="Jay, ajaako veljesi kuin Mateus?">Jay, o seu irmão dirige como o Mateus?</p>
    <p class="s" data-h="jay" data-fi="Ei yhtään! Mateus ajaa hitaasti. Kouvonen ei tiedä, mitä se on.">Nem um pouco! O Mateus dirige devagar. O Kouvonen não sabe o que é isso.</p>
    <p class="s" data-h="kertoja" data-fi="Yhtäkkiä auton takana ilmestyi sininen valo.">De repente, uma luz azul apareceu atrás do carro.</p>
    <p class="s" data-h="maia" data-fi="Jay, se on poliisi!">Jay, é a polícia!</p>
    <p class="s" data-h="kertoja" data-fi="Poliisi pyysi papereita. Kouvonen puhui ja puhui ja puhui…">O policial pediu os documentos. O Kouvonen falava, falava, falava…</p>
    <p class="s" data-h="walker" data-fi="Mitä poliisi sanoo, Jay?">O que o policial está dizendo, Jay?</p>
    <p class="s" data-h="jay" data-fi="Hän sanoo, että rajoitus oli kahdeksankymmentä ja Kouvonen ajoi sataakymmentä!">Ele diz que o limite era oitenta, e o Kouvonen estava a cento e dez!</p>
    <p class="s" data-h="marta" data-fi="Sataakymmentä?! Voi jumala!">Cento e dez?! Meu Deus!</p>
    <p class="s" data-h="jay" data-fi="Nyt Kouvonen sanoo, ettei hän nähnyt kylttiä.">Agora o Kouvonen diz que não via a placa.</p>
    <p class="s" data-h="maia" data-fi="Uskooko poliisi?">E o policial acredita?</p>
    <p class="s" data-h="jay" data-fi="Ei. Hän sanoo, että kyltti oli valtava ja päivä oli kirkas.">Não. Ele diz que a placa era enorme e que o dia estava claro.</p>
    <p class="s" data-h="walker" data-fi="Kysy, pitääkö hän huuliharpusta! Voin soittaa kappaleen!">Pergunta se ele gosta de gaita de boca! Eu posso tocar uma música!</p>
    <p class="s" data-h="jay" data-fi="Herra Walker, nyt ei ole hyvä hetki!">Seu Walker, essa não é uma boa hora!</p>
    <p class="s" data-h="kertoja" data-fi="Poliisi antoi Kouvoselle sakon ja sanoi yhden lauseen suomeksi.">O policial deu uma multa pro Kouvonen e disse uma frase em finlandês.</p>
    <p class="s" data-h="maia" data-fi="Mitä hän sanoi?">O que ele disse?</p>
    <p class="s" data-h="jay" data-fi="Hän sanoi: ”Hyvää matkaa. Ja hitaasti, kiitos!”">Ele disse: “Boa viagem. E devagar, por favor!”</p>
    <p class="s" data-h="kouvonen" data-fi="Hitaasti! Hitaasti!">Devagar! Devagar!</p>
    <p class="s" data-h="kertoja" data-fi="Kymmenen minuuttia myöhemmin Kouvonen ajoi taas sataa.">Dez minutos depois, o Kouvonen já dirigia a cem de novo.</p>
    <p class="s" data-h="walker" data-fi="Minä menen mieluummin polkupyörällä!">Eu prefiro ir de bicicleta!</p>
    <p class="s" data-h="kertoja" data-fi="Hangossa kaikki kävelivät rannalla ja söivät jäätelöä. Walker soitti laiturilla huuliharppua, ja koko Suomi rakasti sitä.">Em Hanko, todo mundo caminhou na praia e tomou sorvete. O Walker tocou gaita de boca no cais, e a Finlândia inteira amou.</p>
  </div>
</section>

<section class="osio" data-paikka="korppoo">
  <h2>Martan valokuva-albumi</h2>
  <p class="ohje">Kotona Belo Horizontessa Marta liimaa kesän kuvat albumiin ja muistelee. Selaa albumia nuolilla ja napauta kuvatekstiä. Huomaa imperfekti: se kertoo, mitä oli tapana tehdä (<span class="pt">pescava, ia, dirigia</span>).</p>
  <div class="albumi" data-otsikko="Verão na Finlândia">
    <figure data-kuva="korppoo" data-hahmot="walker" data-h="marta" data-fi="Korppoossa Walker kalasti joka aamu."><figcaption>Em Korppoo, o Walker pescava todas as manhãs.</figcaption></figure>
    <figure data-kuva="korppoo" data-hahmot="jay,maia" data-h="marta" data-fi="Illalla mentiin saunaan ja sitten uitiin meressä."><figcaption>À noite, a gente ia pra sauna e depois nadava no mar.</figcaption></figure>
    <figure data-kuva="helsingin-kaupunginosat" data-hahmot="purjo" data-h="marta" data-fi="Helsingissä Purjo keitti kahvia kaikille.">
      <figcaption>Em Helsinque, a Purjo fazia café pra todo mundo.</figcaption></figure>
    <figure data-kuva="hanko" data-hahmot="kouvonen" data-h="marta" data-fi="Kouvonen ajoi aivan liian kovaa, ja minä rukoilin."><figcaption>O Kouvonen dirigia rápido demais, e eu rezava.</figcaption></figure>
    <figure data-kuva="hanko" data-hahmot="anderson" data-h="marta" data-fi="Hangossa Anderson leikki rannalla ja lauloi Leijonakuningasta."><figcaption>Em Hanko, o Anderson brincava na praia e cantava O Rei Leão.</figcaption></figure>
    <figure data-kuva="korppoo" data-hahmot="jay" data-h="marta" data-fi="Entä Jay? Hän käänsi kaiken ja oli hyvin onnellinen."><figcaption>E o Jay? Ele traduzia tudo e era muito feliz.</figcaption></figure>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Suomalainen kesä" data-sanat="chalé,sauna,mar,ilha,praia,floresta,sorvete,bicicleta"></div>
  <div class="teema" data-otsikko="Tapahtumat ja toiminta" data-sanat="pescar,nadar,brincar,caminhar,tocar,dirigir"></div>
  <div class="teema" data-otsikko="Poliisi ja tie" data-sanat="polícia,policial,multa,placa,limite,documentos,perigoso"></div>
  <div class="teema" data-otsikko="Milloin? Ennen vanhaan" data-sanat="antigamente,naquela época,todo dia,às vezes,de repente,sempre,nunca"></div>
</section>

<section class="osio">
  <h2>Kielioppi</h2>

  <h3>1. Imperfekti: mitä tapahtui ja mitä oli tapana</h3>
  <p>Portugalissa on kaksi menneen ajan aikamuotoa. <b>Perfekti</b> (<span class="pt">falou</span>) kertoo tapahtumasta, joka on tapahtunut ja päättynyt. <b>Imperfekti</b> (<span class="pt">falava</span>) kertoo, millaista oli, mitä tehtiin tapana tai mitä oli meneillään. Suomessa molemmat ovat samaa imperfektiä (puhui), joten ero täytyy ajatella uudella tavalla.</p>
  <p>Imperfektin muodostaminen on helppoa: se on lähes täysin säännöllinen. Verbistä otetaan perusmuodon pääte pois ja lisätään pääte:</p>
  <table class="taivutus">
    <tr><th></th><th>-ar: <span class="pt">falar</span></th><th>-er: <span class="pt">comer</span></th><th>-ir: <span class="pt">partir</span></th></tr>
    <tr><th>eu</th><td><span class="pt">falava</span></td><td><span class="pt">comia</span></td><td><span class="pt">partia</span></td></tr>
    <tr><th>você, ele, ela, a gente</th><td><span class="pt">falava</span></td><td><span class="pt">comia</span></td><td><span class="pt">partia</span></td></tr>
    <tr><th>nós</th><td><span class="pt">falávamos</span></td><td><span class="pt">comíamos</span></td><td><span class="pt">partíamos</span></td></tr>
    <tr><th>vocês, eles, elas</th><td><span class="pt">falavam</span></td><td><span class="pt">comiam</span></td><td><span class="pt">partiam</span></td></tr>
  </table>
  <p>Huomaa: <span class="pt">eu</span>- ja <span class="pt">você</span>-muodot ovat samat. Painollinen tavu on päätettä edeltävä tavu (fa-LA-va, co-MI-a), ja <span class="pt">nós</span>-muodossa aksentti kertoo painon (<span class="pt">falávamos</span>). Puhekielessä <span class="pt">a gente falava</span> korvaa <span class="pt">nós falávamos</span>.</p>
  <h3>Neljä epäsäännöllistä verbiä</h3>
  <p>Imperfektissä on vain neljä epäsäännöllistä verbiä. Verbi <span class="pt">ir</span> on säännöllinen (<span class="pt">ia</span>).</p>
  <table class="taivutus">
    <tr><th>perusmuoto</th><th>eu</th><th>você, ele, ela, a gente</th><th>nós</th><th>vocês, eles</th></tr>
    <tr><td><span class="pt">ser</span></td><td><span class="pt">era</span></td><td><span class="pt">era</span></td><td><span class="pt">éramos</span></td><td><span class="pt">eram</span></td></tr>
    <tr><td><span class="pt">ter</span></td><td><span class="pt">tinha</span></td><td><span class="pt">tinha</span></td><td><span class="pt">tínhamos</span></td><td><span class="pt">tinham</span></td></tr>
    <tr><td><span class="pt">vir</span></td><td><span class="pt">vinha</span></td><td><span class="pt">vinha</span></td><td><span class="pt">vínhamos</span></td><td><span class="pt">vinham</span></td></tr>
    <tr><td><span class="pt">pôr</span></td><td><span class="pt">punha</span></td><td><span class="pt">punha</span></td><td><span class="pt">púnhamos</span></td><td><span class="pt">punham</span></td></tr>
    <tr><td><span class="pt">ir</span> (säännöllinen)</td><td><span class="pt">ia</span></td><td><span class="pt">ia</span></td><td><span class="pt">íamos</span></td><td><span class="pt">iam</span></td></tr>
  </table>

  <h3>2. Milloin käytetään imperfektiä?</h3>
  <ul class="esim">
    <li class="s" data-fi="Kun olin lapsi, asuin Belo Horizontessa. (tapa, tila menneisyydessä)">Quando eu era criança, eu morava em Belo Horizonte.</li>
    <li class="s" data-fi="Me uitiin joka päivä. (toistuva, tapa)">A gente nadava todo dia.</li>
    <li class="s" data-fi="Kello oli yksitoista. (kellonaika)">Eram onze horas.</li>
    <li class="s" data-fi="Minulla oli kymmenen vuotta. (ikä)">Eu tinha dez anos.</li>
    <li class="s" data-fi="Taivas oli kirkas. (kuvaus, tausta)">O céu estava claro.</li>
    <li class="s" data-fi="Hän oli pitkä ja ajoi lujaa. (kuvaus)">Ele era alto e dirigia rápido.</li>
    <li class="s" data-fi="Haluaisin kahvin. (kohtelias pyyntö)">Eu queria um café, por favor.</li>
  </ul>
  <p>Merkkisanoja, jotka usein kuuluvat imperfektiin: <span class="pt">antigamente</span> (ennen vanhaan), <span class="pt">naquela época</span> (siihen aikaan), <span class="pt">todo dia</span> (joka päivä), <span class="pt">às vezes</span> (joskus), <span class="pt">sempre</span> (aina), <span class="pt">quando eu era criança</span> (kun olin lapsi).</p>
  <p>Tavallista on myös <span class="pt">estar</span> imperfektissä + gerúndio, kun jokin oli käynnissä: <span class="pt">estava chovendo</span> (satoi), <span class="pt">estava dirigindo</span> (ajoi).</p>

  <h3>3. Perfekti vai imperfekti?</h3>
  <p>Kysy: tapahtuiko tässä jotain (perfekti) vai kuvaanko, millaista oli (imperfekti)? Usein lauseessa on molemmat: imperfekti kuvaa taustan ja perfekti tapahtuman, joka keskeyttää sen.</p>
  <table class="taivutus">
    <tr><th>Perfekti: tapahtuma</th><th>Imperfekti: tausta ja tapa</th></tr>
    <tr><td><span class="pt">De repente, uma luz azul apareceu.</span></td><td><span class="pt">O Kouvonen dirigia rápido.</span></td></tr>
    <tr><td><span class="pt">O policial pediu os documentos.</span></td><td><span class="pt">O limite era oitenta.</span></td></tr>
    <tr><td><span class="pt">Ontem eu nadei no mar.</span></td><td><span class="pt">Todo dia eu nadava no mar.</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Minä söin, kun poliisi tuli.">Eu comia quando o policial chegou.</li>
    <li class="s" data-fi="Satoi, kun lähdimme.">Estava chovendo quando a gente saiu.</li>
    <li class="s" data-fi="Eilen kävin saunassa. Kun olin lapsi, kävin joka päivä.">Ontem eu fui à sauna. Quando era criança, eu ia todo dia.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> Perfekti vastaa kysymykseen ”mitä tapahtui?” ja imperfekti kysymykseen ”millaista oli?”. Jos et ole varma, kysy itseltäsi, voiko lauseen alkuun laittaa ”joka päivä” tai ”tuolloin”. Jos voi, käytä imperfektiä.</p>
  </div>
  <div class="muista">
    <p><b>Espanjasta:</b> espanjassa on sama kaksijako (<i>hablaba</i> / <i>hablé</i>). Muodot ovat lähellä: <i>-aba</i> = <b>-ava</b> (b ↔ v), <i>-ía</i> = <b>-ia</b>. Mutta epäsäännölliset verbit ovat eri: espanjan <i>ir</i> on <i>iba</i>, portugalin <span class="pt">ia</span>; espanjan <i>ver</i> on <i>veía</i>, portugalin <span class="pt">via</span> (säännöllinen). Portugalissa epäsäännöllinen on taas <span class="pt">ter</span>: <span class="pt">tinha</span>, ei <i>tenía</i>. Jayn virhe <span class="pt">iba</span> on tavallisin.</p>
  </div>
</section>

<aside class="kulttuuri" data-paikka="hanko">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Korppoo, Hanko ja suomalainen kesä</h3>
  <figure class="kuva" data-kuva="korppoo"></figure>
  <p><b>Korppoo</b> (ruotsiksi <i>Korpo</i>) on saaristokylä Lounais-Suomessa Saaristomerellä. Se liitettiin vuonna 2009 Länsi-Turunmaan kaupunkiin, joka on vuodesta 2012 ollut nimeltään Parainen, ja alueella on tuhansia saaria, niemiä ja lahtia. Saaria yhdistävät sillat ja lauttayhteydet, ja alueella puhutaan paljon myös ruotsia. Monella suomalaisella perheellä on siellä kesämökki, ja portugaliksi sitä voi sanoa vaikkapa <span class="pt">chalé</span> tai <span class="pt">casa de campo</span>.</p>
  <figure class="kuva" data-kuva="hanko"></figure>
  <p><b>Hanko</b> (ruotsiksi <i>Hangö</i>) on Suomen mantereen eteläisin kaupunki Hankoniemen kärjessä. Kaupunki sai kaupunkioikeudet 1870-luvulla, ja 1800-luvun lopulla siitä tuli suosittu kylpyläkaupunki. Siellä on säilynyt kauniita puuvilloja, pitkiä hiekkarantoja ja iso vierasvenesatama, ja kesällä kaupunki täyttyy purjehtijoista ja lomailijoista.</p>
  <p><b>Suomalainen kesä</b> on brasilialaiselle vieras ja ihmeellinen: Etelä-Suomessa kesä-heinäkuussa yöt ovat valoisia, aurinko laskee myöhään ja nousee varhain. Juhannusta vietetään kesäkuun lopussa kokkojen, saunan ja mökkeilyn parissa. Sauna on lähes jokaisessa kodissa ja mökissä, ja saunasta mennään uimaan järveen tai mereen. <b>Jokamiehenoikeus</b> sallii liikkumisen luonnossa ja marjojen ja sienten poimimisen maanomistajan luvatta. Brasilialaisesta se kuulostaa uskomattomalta.</p>
  <p><b>Tarinassa:</b> Maian perhe tulee Suomeen ensimmäistä kertaa, ja Jay tulkkaa heidän ja Purjon sekä Kouvosen välillä. Purjo oppi kaksi portugalin sanaa, <span class="pt">obrigada</span> ja <span class="pt">tudo bem</span>, ja käyttää niitä kaikkeen.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: Martan albumi</h3>
    <p class="ohje">Selaa Martan albumia (yllä) ja valitse oikea vastaus.</p>
    <div class="valinta" data-oikea="pescava">
      <p class="kysymys"><span class="ryhma" data-hahmot="walker"></span> O que o Walker fazia todas as manhãs?</p>
      <div class="vaihtoehdot"><button type="button">nadava</button><button type="button">pescava</button><button type="button">dormia</button></div>
    </div>
    <div class="valinta" data-oikea="rápido demais">
      <p class="kysymys"><span class="ryhma" data-hahmot="kouvonen"></span> Como o Kouvonen dirigia?</p>
      <div class="vaihtoehdot"><button type="button">devagar</button><button type="button">rápido demais</button><button type="button">bem</button></div>
    </div>
    <div class="valinta" data-oikea="a Purjo">
      <p class="kysymys">Quem fazia café pra todo mundo?</p>
      <div class="vaihtoehdot"><button type="button">a Marta</button><button type="button">a Purjo</button><button type="button">a Maia</button></div>
    </div>
    <div class="valinta" data-oikea="cantava">
      <p class="kysymys"><span class="ryhma" data-hahmot="anderson"></span> Em Hanko, o Anderson ___ O Rei Leão.</p>
      <div class="vaihtoehdot"><button type="button">cantou</button><button type="button">cantava</button><button type="button">canta</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Imperfekti</h3>
    <p class="ohje">Kirjoita verbi imperfektissä. Perusmuoto on sulkeissa.</p>
    <div class="aukot">
      <p>Quando eu era criança, eu <span class="aukko" data-oikea="nadava"></span> todo dia. (nadar)</p>
      <p>O Walker <span class="aukko" data-oikea="pescava"></span> com o pai. (pescar)</p>
      <p>A gente <span class="aukko" data-oikea="ia"></span> à sauna. (ir)</p>
      <p>Eles <span class="aukko" data-oikea="tinham"></span> muitos amigos. (ter)</p>
      <p>Eu <span class="aukko" data-oikea="era"></span> pequeno. (ser)</p>
      <p>Nós <span class="aukko" data-oikea="morávamos"></span> em Espoo. (morar)</p>
      <p>A Marta <span class="aukko" data-oikea="comia"></span> pão de queijo. (comer)</p>
      <p>O céu <span class="aukko" data-oikea="estava"></span> claro. (estar)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Perfekti vai imperfekti?</h3>
    <p class="ohje">Valitse oikea muoto. Mieti: tapahtuma vai tausta?</p>
    <div class="valinta" data-oikea="era">
      <p class="kysymys">Quando eu ___ criança, eu morava no Brasil.</p>
      <div class="vaihtoehdot"><button type="button">era</button><button type="button">fui</button></div>
    </div>
    <div class="valinta" data-oikea="apareceu">
      <p class="kysymys">De repente, uma luz azul ___.</p>
      <div class="vaihtoehdot"><button type="button">aparecia</button><button type="button">apareceu</button></div>
    </div>
    <div class="valinta" data-oikea="estava">
      <p class="kysymys">O dia ___ lindo.</p>
      <div class="vaihtoehdot"><button type="button">estava</button><button type="button">esteve</button></div>
    </div>
    <div class="valinta" data-oikea="fui">
      <p class="kysymys">Ontem eu ___ à sauna.</p>
      <div class="vaihtoehdot"><button type="button">ia</button><button type="button">fui</button></div>
    </div>
    <div class="valinta" data-oikea="pescava">
      <p class="kysymys">Todo domingo ele ___ com o pai.</p>
      <div class="vaihtoehdot"><button type="button">pescava</button><button type="button">pescou</button></div>
    </div>
    <div class="valinta" data-oikea="deu">
      <p class="kysymys">O policial ___ uma multa pro Kouvonen.</p>
      <div class="vaihtoehdot"><button type="button">dava</button><button type="button">deu</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Aikailmaukset</h3>
    <p class="ohje">Yhdistä portugali ja suomi.</p>
    <ul class="yhdista">
      <li data-pari="joka päivä">todo dia</li>
      <li data-pari="ennen vanhaan">antigamente</li>
      <li data-pari="siihen aikaan">naquela época</li>
      <li data-pari="joskus">às vezes</li>
      <li data-pari="yhtäkkiä">de repente</li>
      <li data-pari="aina">sempre</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Kuuntele ja valitse</h3>
    <p class="ohje">Kuuntele lause ja valitse, kertooko se tavasta (imperfekti) vai tapahtumasta (perfekti).</p>
    <div class="valinta" data-kuuntele="Eu nadava no mar todo dia." data-oikea="tapa">
      <p class="kysymys">Tapa vai tapahtuma?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">tapa</button><button type="button">tapahtuma</button></div>
    </div>
    <div class="valinta" data-kuuntele="Ontem eu nadei no mar." data-oikea="tapahtuma">
      <p class="kysymys">Tapa vai tapahtuma?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">tapa</button><button type="button">tapahtuma</button></div>
    </div>
    <div class="valinta" data-kuuntele="O Kouvonen dirigia muito rápido." data-oikea="tapa">
      <p class="kysymys">Tapa vai tapahtuma?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">tapa</button><button type="button">tapahtuma</button></div>
    </div>
    <div class="valinta" data-kuuntele="O policial deu uma multa." data-oikea="tapahtuma">
      <p class="kysymys">Tapa vai tapahtuma?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">tapa</button><button type="button">tapahtuma</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause.</p>
    <div class="sanelu" data-puhu="Quando eu era criança, eu morava em Espoo."></div>
    <div class="sanelu" data-puhu="A gente ia à sauna todo dia."></div>
    <div class="sanelu" data-puhu="O céu estava claro."></div>
    <div class="sanelu" data-puhu="O Kouvonen dirigia muito rápido."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Kun olin lapsi, kalastin isäni kanssa.</p><p class="s" data-fi="Kun olin lapsi, kalastin isäni kanssa.">Quando eu era criança, eu pescava com o meu pai.</p></div>
    <div class="kaanna"><p class="fi">Kello oli yksitoista, ja taivas oli kirkas.</p><p class="s" data-fi="Kello oli yksitoista, ja taivas oli kirkas.">Eram onze horas, e o céu estava claro.</p></div>
    <div class="kaanna"><p class="fi">Veljeni ajoi tosi lujaa.</p><p class="s" data-fi="Veljeni ajoi tosi lujaa.">O meu irmão dirigia muito rápido.</p></div>
    <div class="kaanna"><p class="fi">Yhtäkkiä poliisi pysäytti auton.</p><p class="s" data-fi="Yhtäkkiä poliisi pysäytti auton.">De repente, o policial parou o carro.</p></div>
    <div class="kaanna"><p class="fi">Me uitiin meressä joka päivä.</p><p class="s" data-fi="Me uitiin meressä joka päivä.">A gente nadava no mar todo dia.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>7. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin. Oma vastauksesi voi olla toinen.</p>
    <details class="vastaus">
      <summary lang="pt-BR">O que você fazia quando era criança?</summary>
      <p class="s" data-fi="Minä leikin ulkona ja uin kesällä.">Eu brincava na rua e nadava no verão.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Onde você morava?</summary>
      <p class="s" data-fi="Minä asuin pienessä kaupungissa. (muuta omasi)">Eu morava numa cidade pequena.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Como o Kouvonen dirigia?</summary>
      <p class="s" data-fi="Hän ajoi tosi lujaa.">Ele dirigia muito rápido.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que o Walker tocou em Hanko?</summary>
      <p class="s" data-fi="Hän soitti huuliharppua.">Ele tocou gaita de boca.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l20">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l20-muisto" lang="pt-BR">
      <div class="kal-yla"><b>Quando eu era criança…</b><small>muistele lapsuuttasi imperfektillä</small></div>
      <div class="kal-rivit">
        <label>Eu morava… <input name="asuin" placeholder="Eu morava em Tampere."></label>
        <label>Todo verão… <input name="kesa" placeholder="Todo verão a gente ia pro chalé."></label>
        <label>Eu gostava de… <input name="pidin" placeholder="Eu gostava de nadar no lago."></label>
        <label>O meu amigo… <input name="ystava" placeholder="O meu melhor amigo se chamava Mikko."></label>
        <label>Eu sempre… <input name="aina" placeholder="Eu sempre comia sorvete."></label>
      </div>
    </div>
    <p>Kirjoita 5–6 lausetta lapsuudestasi: missä asuit, mitä teit usein, millainen kotisi tai ystäväsi oli (imperfekti). Lisää yksi lause yhdestä tapahtumasta, joka keskeytti tavallisen päivän (perfekti: <span class="pt">de repente</span>…). Sano teksti ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Kun olin lapsi, asuin pienessä kaupungissa.">Quando eu era criança, eu morava numa cidade pequena.</p>
      <p class="s" data-fi="Meidän kotimme oli lähellä metsää.">A nossa casa era perto de uma floresta.</p>
      <p class="s" data-fi="Leikin joka päivä ystävien kanssa, ja talvella hiihdin.">Todo dia eu brincava com os amigos, e no inverno eu esquiava.</p>
      <p class="s" data-fi="Äitini teki aina pullaa, ja talo oli lämmin.">A minha mãe sempre fazia pão, e a casa era quentinha.</p>
      <p class="s" data-fi="Yhtäkkiä yhtenä päivänä koira juoksi sisään taloon.">De repente, um dia, o cachorro entrou correndo em casa.</p>
    </details>
  </div>
</section>
`
});
