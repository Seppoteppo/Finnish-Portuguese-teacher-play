/* Jakso 10: Kouvonen ajaa lentokentälle, lento Belo Horizonteen. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet (aa = suomalaisin kirjaimin, ipa = kansainvälinen) noudattavat Belo Horizonten ääntämystä.
   Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l10',
  lyhyt: '10',
  jakso: 'Jakso 10',
  otsikko: 'Matkustaminen ja kellonajat: kysymyssanat',
  lahde: 'Aihe: matkustaminen, kulkuneuvot, kellonajat · Kielioppi: vir, trazer, pôr; quem, por que, quando · Ääntäminen: q, x, z',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, pelkää veljensä ajotapaa' }
  },

  aiheet: ['liike', 'aika', 'paikka', 'kysymys'],

  sanasto: [
    'aeroporto', 'voo', 'passagem', 'passaporte', 'escala', 'chegada', 'partida', 'bagagem', 'atrasado', 'embarque',
    'avião', 'ônibus', 'trem', 'metrô', 'táxi', 'bicicleta', 'a pé', 'de carro', 'pegar',
    'vir', 'trazer', 'pôr', 'levar',
    'quem', 'por que', 'porque', 'quando',
    'que horas são', 'meio-dia', 'meia-noite', 'e meia', 'da manhã', 'da tarde', 'da noite', 'a que horas'
  ],

  sanat: {
    'partidas': { fi: 'lähtevät (lennot)', aa: 'pah-TSI-das', ipa: '[pahˈtʃidɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'saapuvat = chegadas' },
    'portão': { fi: 'portti (lentokentällä)', aa: 'poh-TÃU', ipa: '[pohˈtɐ̃w]', sl: 'substantiivi, maskuliini' },
    'embarque': { fi: 'koneeseen nousu', aa: 'ẽ-BAH-ki', ipa: '[ẽˈbahki]', sl: 'substantiivi, maskuliini' },
    'atrasado': { fi: 'myöhässä', aa: 'a-tra-ZA-du', ipa: '[atɾaˈzadu]', sl: 'adjektiivi', huom: 'feminiini {atrasada}' },
    'atrasada': { fi: 'myöhässä (feminiini)', aa: 'a-tra-ZA-da', ipa: '[atɾaˈzadɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {atrasado}' },
    'cancelado': { fi: 'peruttu', aa: 'kã-se-LA-du', ipa: '[kɐ̃seˈladu]', sl: 'adjektiivi' },
    'última chamada': { fi: 'viimeinen kutsu', aa: 'UU-tsi-ma sha-MA-da', ipa: '[ˈuwtʃimɐ ʃaˈmadɐ]', sl: 'ilmaus' },
    'atenção': { fi: 'huomio!', aa: 'a-tẽ-SÃU', ipa: '[atẽˈsɐ̃w]', sl: 'substantiivi, feminiini' },
  // <SANAT>
    // paikat ja nimet
    'confins': { fi: 'Confins (Belo Horizonten lentoasema ja kunta)', aa: 'kõ-FĨS', ipa: '[kõˈfĩs]', sl: 'paikan nimi', huom: 'virallisesti Aeroporto Internacional Tancredo Neves' },
    'tancredo': { fi: 'Tancredo (etunimi)', aa: 'tã-KRE-du', ipa: '[tɐ̃ˈkɾedu]', sl: 'etunimi' },
    'neves': { fi: 'Neves (sukunimi)', aa: 'NE-vis', ipa: '[ˈnɛvis]', sl: 'sukunimi' },
    'carlos': { fi: 'Carlos (etunimi)', aa: 'KAH-lus', ipa: '[ˈkahlus]', sl: 'etunimi' },
    'drummond': { fi: 'Drummond (sukunimi)', aa: 'dru-MÕ-di', ipa: '[dɾuˈmõdʒi]', sl: 'sukunimi' },
    'andrade': { fi: 'Andrade (sukunimi)', aa: 'ã-DRA-di', ipa: '[ɐ̃ˈdɾadʒi]', sl: 'sukunimi' },
    'internacional': { fi: 'kansainvälinen', aa: 'ĩ-teh-na-sio-NAU', ipa: '[ĩtehnasjoˈnaw]', sl: 'adjektiivi' },
    // lentokenttä
    'aeroporto': { fi: 'lentokenttä', aa: 'a-e-ro-POH-tu', ipa: '[aeɾoˈpohtu]', sl: 'substantiivi, maskuliini' },
    'voo': { fi: 'lento', aa: 'VOU', ipa: '[vow]', sl: 'substantiivi, maskuliini' },
    'passagem': { fi: 'lippu (matka)', aa: 'pa-SA-zhẽi', ipa: '[paˈsaʒẽj]', sl: 'substantiivi, feminiini', huom: 'espanjaksi pasaje, billete' },
    'passagens': { fi: 'liput (matka)', aa: 'pa-SA-zhẽis', ipa: '[paˈsaʒẽjs]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö {passagem}' },
    'passaporte': { fi: 'passi', aa: 'pa-sa-POH-tsi', ipa: '[pasaˈpɔhtʃi]', sl: 'substantiivi, maskuliini' },
    'passaportes': { fi: 'passit', aa: 'pa-sa-POH-tsis', ipa: '[pasaˈpɔhtʃis]', sl: 'substantiivi, maskuliini monikko', huom: 'yksikkö {passaporte}' },
    'bagagem': { fi: 'matkatavarat', aa: 'ba-GA-zhẽi', ipa: '[baˈɡaʒẽj]', sl: 'substantiivi, feminiini' },
    'escala': { fi: 'välilasku', aa: 'es-KA-la', ipa: '[esˈkalɐ]', sl: 'substantiivi, feminiini' },
    'chegada': { fi: 'saapuminen, saapuvat', aa: 'she-GA-da', ipa: '[ʃeˈɡadɐ]', sl: 'substantiivi, feminiini', huom: 'verbi {chegar}' },
    'partida': { fi: 'lähtö, lähtevät', aa: 'pah-TSI-da', ipa: '[pahˈtʃidɐ]', sl: 'substantiivi, feminiini' },
    'atrasado': { fi: 'myöhässä', aa: 'a-tra-ZA-du', ipa: '[atɾaˈzadu]', sl: 'adjektiivi', huom: 'o voo está atrasado = lento on myöhässä' },
    'embarque': { fi: 'nousu koneeseen', aa: 'ẽ-BAH-ki', ipa: '[ẽˈbahki]', sl: 'substantiivi, maskuliini' },
    'malas': { fi: 'matkalaukut', aa: 'MA-las', ipa: '[ˈmalɐs]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö {mala}' },
    // kulkuneuvot
    'táxi': { fi: 'taksi', aa: 'TAK-si', ipa: '[ˈtaksi]', sl: 'substantiivi, maskuliini' },
    'bicicleta': { fi: 'polkupyörä', aa: 'bi-si-KLE-ta', ipa: '[bisiˈklɛtɐ]', sl: 'substantiivi, feminiini' },
    'a pé': { fi: 'jalan', aa: 'a PE', ipa: '[a pɛ]', sl: 'ilmaus', huom: 'kirjaimellisesti ”jalkaa”; vrt. {pé}' },
    'de carro': { fi: 'autolla', aa: 'di KA-hu', ipa: '[dʒi ˈkahu]', sl: 'ilmaus', huom: 'myös de ônibus, de avião' },
    // verbit
    'leva': { fi: 'vie; viet', aa: 'LE-va', ipa: '[ˈlɛvɐ]', sl: 'verbi {levar}' },
    'levo': { fi: '(minä) vien', aa: 'LE-vu', ipa: '[ˈlɛvu]', sl: 'verbi {levar}' },
    'levar': { fi: 'viedä, ottaa mukaan', aa: 'le-VAH', ipa: '[leˈvah]', sl: 'verbi, perusmuoto', huom: 'vastakohta {trazer}' },
    'dirige': { fi: 'ajaa; ajat', aa: 'di-RI-zhi', ipa: '[dʒiˈɾiʒi]', sl: 'verbi {dirigir}' },
    'respira': { fi: 'hengittää', aa: 'hes-PI-ra', ipa: '[hesˈpiɾɐ]', sl: 'verbi {respirar}' },
    'chega': { fi: 'saapuu; saavut', aa: 'SHE-ga', ipa: '[ˈʃeɡɐ]', sl: 'verbi {chegar}', huom: 'chegar a = saapua johonkin' },
    'chego': { fi: '(minä) saavun', aa: 'SHE-gu', ipa: '[ˈʃeɡu]', sl: 'verbi {chegar}' },
    'dorme': { fi: 'nukkuu; nukut', aa: 'DOH-mi', ipa: '[ˈdɔhmi]', sl: 'verbi {dormir}' },
    'durmo': { fi: '(minä) nukun', aa: 'DUH-mu', ipa: '[ˈduhmu]', sl: 'verbi {dormir}' },
    'acorda': { fi: 'herää; herätä!', aa: 'a-KOH-da', ipa: '[aˈkɔhdɐ]', sl: 'verbi {acordar}', huom: 'ANSA! Espanjan acordar = sopia. Portugaliksi {acordar} = herätä' },
    'espera': { fi: 'odottaa; odotat', aa: 'es-PE-ra', ipa: '[esˈpɛɾɐ]', sl: 'verbi {esperar}' },
    'saio': { fi: '(minä) lähden', aa: 'SAI-u', ipa: '[ˈsaju]', sl: 'verbi {sair}' },
    'pego': { fi: '(minä) otan, nappaan', aa: 'PE-gu', ipa: '[ˈpɛɡu]', sl: 'verbi {pegar}', huom: 'pegar o ônibus = ottaa bussi' },
    'amo': { fi: '(minä) rakastan', aa: 'Ã-mu', ipa: '[ˈɐ̃mu]', sl: 'verbi {amar}' },
    'venho': { fi: '(minä) tulen', aa: 'VẼ-nju', ipa: '[ˈvẽɲu]', sl: 'verbi {vir}', huom: 'espanjassa vengo' },
    'vem': { fi: 'tulee; tulet', aa: 'VẼI', ipa: '[vẽj]', sl: 'verbi {vir}' },
    'vimos': { fi: '(me) tulemme', aa: 'VĨ-mus', ipa: '[ˈvĩmus]', sl: 'verbi {vir}' },
    'vêm': { fi: '(he) tulevat', aa: 'VẼI', ipa: '[vẽj]', sl: 'verbi {vir}', huom: 'kirjoitus eroaa sanasta {vem}, puheessa ääntyy lähes samoin; vrt. {têm}' },
    'têm': { fi: '(he) heillä on', aa: 'TẼI', ipa: '[tẽj]', sl: 'verbi {ter}', huom: 'yksikkö {tem}' },
    'trago': { fi: '(minä) tuon', aa: 'TRA-gu', ipa: '[ˈtɾaɡu]', sl: 'verbi {trazer}', huom: 'espanjassa traigo' },
    'traz': { fi: 'tuo; tuot', aa: 'TRAS', ipa: '[tɾas]', sl: 'verbi {trazer}' },
    'trazemos': { fi: '(me) tuomme', aa: 'tra-ZẼ-mus', ipa: '[tɾaˈzẽmus]', sl: 'verbi {trazer}' },
    'trazem': { fi: '(he) tuovat', aa: 'TRA-zẽi', ipa: '[ˈtɾazẽj]', sl: 'verbi {trazer}' },
    'ponho': { fi: '(minä) panen', aa: 'PÕ-nju', ipa: '[ˈpõɲu]', sl: 'verbi {pôr}', huom: 'ei {pongo}!' },
    'pongo': { kieli: 'es', fi: '(espanjaa) panen', aa: 'PÕ-go', ipa: '[ˈpõŋɡo]', sl: 'espanjan verbi', huom: 'VÄÄRIN portugaliksi! Oikein on {ponho}' },
    'põe': { fi: 'panee; panet', aa: 'PÕI', ipa: '[põj]', sl: 'verbi {pôr}' },
    'pomos': { fi: '(me) panemme', aa: 'PÕ-mus', ipa: '[ˈpõmus]', sl: 'verbi {pôr}' },
    'põem': { fi: '(he) panevat', aa: 'PÕ-ẽi', ipa: '[ˈpõẽj]', sl: 'verbi {pôr}' },
    // kysymyssanat
    'quem': { fi: 'kuka', aa: 'KẼI', ipa: '[kẽj]', sl: 'kysymyssana', huom: 'espanjaksi quién' },
    'de quem': { fi: 'kenen', aa: 'DI KẼI', ipa: '[dʒi kẽj]', sl: 'kysymyssana' },
    'por que': { fi: 'miksi', aa: 'poh KE', ipa: '[poh ˈke]', sl: 'kysymyssana', huom: 'vastauksessa {porque}' },
    'por quê': { fi: 'miksi (lauseen lopussa)', aa: 'poh KE', ipa: '[poh ˈke]', sl: 'kysymyssana' },
    'porque': { fi: 'koska', aa: 'POH-ki', ipa: '[ˈpohki]', sl: 'konjunktio', huom: 'kysymyksessä {por que}' },
    'quando': { fi: 'milloin; kun', aa: 'KUÃ-du', ipa: '[ˈkwɐ̃du]', sl: 'kysymyssana, konjunktio' },
    // kellonaika
    'horas': { fi: 'tunnit; kellonaika', aa: 'O-ras', ipa: '[ˈɔɾɐs]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö {hora}' },
    'que horas são': { fi: 'paljonko kello on?', aa: 'ki O-ras SÃU', ipa: '[ki ˈɔɾɐs sɐ̃w]', sl: 'kysymys', huom: 'kirjaimellisesti ”mitkä tunnit ovat?”' },
    'a que horas': { fi: 'mihin aikaan?', aa: 'a ki O-ras', ipa: '[a ki ˈɔɾɐs]', sl: 'kysymys' },
    'meia': { fi: 'puoli', aa: 'MEI-a', ipa: '[ˈmejɐ]', sl: 'numero, feminiini', huom: 'e meia = ja puoli' },
    'e meia': { fi: 'ja puoli (kello on …puoli)', aa: 'i MEI-a', ipa: '[i ˈmeja]', sl: 'ilmaus' },
    'meio-dia': { fi: 'keskipäivä, kello 12', aa: 'MEI-u-DI-a', ipa: '[ˈmejuˈdʒiɐ]', sl: 'substantiivi, maskuliini' },
    'meia-noite': { fi: 'keskiyö, kello 24', aa: 'MEI-a-NOI-tsi', ipa: '[ˈmejaˈnojtʃi]', sl: 'substantiivi, feminiini' },
    'da manhã': { fi: 'aamulla', aa: 'da mã-NJÃ', ipa: '[da mɐ̃ˈɲɐ̃]', sl: 'ilmaus', huom: 'kellonajan perässä' },
    'da tarde': { fi: 'iltapäivällä', aa: 'da TAH-di', ipa: '[da ˈtahdʒi]', sl: 'ilmaus' },
    'da noite': { fi: 'illalla', aa: 'da NOI-tsi', ipa: '[da ˈnojtʃi]', sl: 'ilmaus' },
    'da madrugada': { fi: 'yöllä (pimeään aikaan)', aa: 'da ma-dru-GA-da', ipa: '[da madɾuˈɡadɐ]', sl: 'ilmaus' },
    'madrugada': { fi: 'yön pimeät tunnit', aa: 'ma-dru-GA-da', ipa: '[madɾuˈɡadɐ]', sl: 'substantiivi, feminiini' },
    'às': { fi: '-lla (kellonaika, monikko)', aa: 'as', ipa: '[as]', sl: 'prepositio + artikkeli', huom: '{a} + {as}' },
    'à': { fi: '-lle; -lla (feminiini)', aa: 'a', ipa: '[a]', sl: 'prepositio + artikkeli', huom: '{a} + {a}; à uma hora = kello yhdeltä' },
    'nove': { fi: 'yhdeksän', aa: 'NO-vi', ipa: '[ˈnɔvi]', sl: 'lukusana' },
    'dezenove': { fi: 'yhdeksäntoista', aa: 'de-ze-NO-vi', ipa: '[dezeˈnɔvi]', sl: 'lukusana' },
    // ääntäminen ja muut
    'muitas': { fi: 'monta (feminiini monikko)', aa: 'MŨI-tas', ipa: '[ˈmũjtɐs]', sl: 'pronomini' },
    'xícara': { fi: 'kuppi', aa: 'SHI-ka-ra', ipa: '[ˈʃikaɾɐ]', sl: 'substantiivi, feminiini' },
    'exame': { fi: 'koe, tutkimus', aa: 'e-ZÃ-mi', ipa: '[eˈzɐ̃mi]', sl: 'substantiivi, maskuliini' },
    'exemplo': { fi: 'esimerkki', aa: 'e-ZẼ-plu', ipa: '[eˈzẽplu]', sl: 'substantiivi, maskuliini' },
    'fixo': { fi: 'kiinteä', aa: 'FIK-su', ipa: '[ˈfiksu]', sl: 'adjektiivi' },
    'zero': { fi: 'nolla', aa: 'ZE-ru', ipa: '[ˈzɛɾu]', sl: 'lukusana' },
    'nh': { fi: 'nh (kirjainyhdistelmä, ääntyy nj)', aa: 'E-ni a-GA', ipa: '[ˈeni aˈɡa]', sl: 'kirjainyhdistelmä' }
  // </SANAT>
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kysyä ja kertoa kellonajan sekä sanoa, mihin aikaan jokin tapahtuu.</li>
  <li>Osaat kulkuneuvojen nimet ja sanoa, millä kulkuneuvolla menet.</li>
  <li>Osaat verbit <span class="pt">vir</span>, <span class="pt">trazer</span> ja <span class="pt">pôr</span> sekä kysymyssanat <span class="pt">quem</span>, <span class="pt">por que</span> ja <span class="pt">quando</span>.</li>
  <li>Osaat lukea kirjaimet q, x ja z oikein.</li>
</ul>
<p data-paikka="helsinki-lumi">Helsinki, 20. joulukuuta, neljä aamulla, pakkasta ja pimeää. Jayn veli Kouvonen ajaa Jayn ja Maian Helsinki-Vantaan lentoasemalle omaan tyyliinsä. Matka Brasiliaan alkaa.</p>

<section class="osio">
  <h2>Dialogi: Do carro do Kouvonen ao avião</h2>
  <p class="ohje">Kuuntele ensin ilman suomennoksia. Jay tekee espanjan vaikuttaman virheen sanalla <span class="pt">pongo</span>. Löydätkö sen? Sitten roolileikki: puhu Jayn osuudet. Kouvonen ei puhu portugalia, joten kertoja puhuu hänestä.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Helsinki, 20. joulukuuta, neljältä aamulla.">Helsinque, dia vinte de dezembro, quatro da manhã.</p>
    <p class="s" data-h="kertoja" data-fi="Kouvonen, Jayn veli, vie Jayn ja Maian lentokentälle.">O Kouvonen, irmão do Jay, leva Jay e Maia para o aeroporto.</p>
    <p class="s" data-h="jay" data-fi="Maia, paljonko kello on?">Maia, que horas são?</p>
    <p class="s" data-h="maia" data-fi="Kello on puoli viisi. Meidän lentomme on kaksikymmentä yli seitsemän.">São quatro e meia. O nosso voo é às sete e vinte.</p>
    <p class="s" data-h="jay" data-fi="Kuka ajaa? Veljenikö?! Voi voi voi.">Quem dirige? O meu irmão?! Ai, ai, ai.</p>
    <p class="s" data-h="kertoja" data-fi="Kouvonen ei pysähdy liikennevaloissa.">O Kouvonen não para no sinal.</p>
    <p class="s" data-h="maia" data-fi="Miksi hän ajaa noin?">Por que ele dirige assim?</p>
    <p class="s" data-h="jay" data-fi="Koska hän on Kouvonen.">Porque ele é o Kouvonen.</p>
    <p class="s" data-paikka="helsinki-vantaa" data-h="kertoja" data-fi="Lentokentällä Kouvonen pysäyttää auton. Jay hengittää.">No aeroporto, o Kouvonen para o carro. Jay respira.</p>
    <p class="s" data-h="jay" data-fi="Minä pongo laukut tähän. (väärin: espanjan pongo)">Eu pongo as malas aqui.</p>
    <p class="s" data-h="maia" data-fi="Ponho! Portugaliksi se on ”ponho”, nh:lla.">Ponho! Em português é “ponho”, com “nh”.</p>
    <p class="s" data-h="jay" data-fi="Ponho, ponho. Minä panen laukut tähän ja sinä tuot passit.">Ponho, ponho. Eu ponho as malas aqui e você traz os passaportes.</p>
    <p class="s" data-h="maia" data-fi="Minä tuon passit ja liput.">Eu trago os passaportes e as passagens.</p>
    <p class="s" data-h="jay" data-fi="Milloin kone saapuu Belo Horizonteen?">Quando o avião chega a Belo Horizonte?</p>
    <p class="s" data-h="maia" data-fi="Samana päivänä, seitsemältä illalla. Meillä on välilasku.">No mesmo dia, às sete da noite. Tem uma escala.</p>
    <p class="s" data-h="kertoja" data-fi="Koneessa Jay nukkuu ja Maia piirtää.">No avião, Jay dorme e Maia desenha.</p>
    <p class="s" data-paikka="confins" data-h="kertoja" data-fi="Monta tuntia myöhemmin kone saapuu Confinsiin, lähelle Belo Horizontea.">Muitas horas depois, o avião chega a Confins, perto de Belo Horizonte.</p>
    <p class="s" data-h="maia" data-fi="Jay, herää! Olemme Brasiliassa!">Jay, acorda! Estamos no Brasil!</p>
    <p class="s" data-h="jay" data-fi="Jo? Paljonko kello on?">Já? Que horas são?</p>
    <p class="s" data-h="maia" data-fi="Kello on seitsemän illalla. Täällä on viisi tuntia vähemmän kuin Helsingissä.">São sete da noite. Aqui são cinco horas a menos que em Helsinque.</p>
    <p class="s" data-h="jay" data-fi="Mahtavaa. Minä tulen talvesta, ja nyt on kesä!">Ótimo. Eu venho do inverno e agora é verão!</p>
    <p class="s" data-h="kertoja" data-fi="Ulkona on kuuma. Maian perhe odottaa.">Lá fora faz calor. A família da Maia espera.</p>
  </div>
</section>

<section class="osio" data-paikka="helsinki-vantaa">
  <h2>Lähtötaulu: Partidas</h2>
  <p class="ohje">Helsinki-Vantaa, 6.50. Jay ja Maia katsovat lähtötaulua. Napauta lentoa: kuulet kuulutuksen portugaliksi (kellonajat ja numerot). Mikä on Jayn ja Maian lento? Miksi kuulutus mainitsee heidän nimensä?</p>
  <div class="lahtotaulu" data-otsikko="Helsinki-Vantaa · Partidas" data-kello="06:50">
    <p data-aika="06:55" data-kohde="Estocolmo" data-lento="AY 803" data-portti="21" data-tila="Embarque" data-puhu="Atenção: voo AY oitocentos e três para Estocolmo. Embarque no portão vinte e um."></p>
    <p data-aika="07:20" data-kohde="Lisboa" data-lento="TP 1235" data-portti="32" data-tila="Última chamada" data-puhu="Última chamada para o voo para Lisboa, às sete e vinte, portão trinta e dois. Jay e Maia, por favor!"></p>
    <p data-aika="07:45" data-kohde="Londres" data-lento="AY 1331" data-portti="35" data-tila="Atrasado" data-puhu="Atenção: o voo para Londres está atrasado. A nova hora é às oito e meia."></p>
    <p data-aika="08:10" data-kohde="Paris" data-lento="AF 1171" data-portti="28" data-tila="No horário" data-puhu="O voo para Paris sai às oito e dez, do portão vinte e oito."></p>
    <p data-aika="09:00" data-kohde="Nova York" data-lento="AY 5" data-portti="—" data-tila="Cancelado" data-puhu="Atenção: o voo para Nova York está cancelado."></p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto: matkustaminen</h2>
  <div class="teema" data-otsikko="Lentokentällä" data-sanat="aeroporto,voo,passagem,passaporte,mala,bagagem,escala,chegada,partida,atrasado"></div>
  <div class="teema" data-otsikko="Kulkuneuvot" data-sanat="carro,ônibus,trem,metrô,avião,táxi,bicicleta,barco"></div>
  <div class="teema" data-otsikko="Kellonaika" data-sanat="hora,minuto,meio-dia,meia-noite,da manhã,da tarde,da noite,cedo,tarde"></div>
  <div class="teema" data-otsikko="Verbit" data-sanat="vir,trazer,pôr,levar,pegar,viajar,chegar,partir,dirigir"></div>
</section>

<section class="osio" data-paikka="helsinki-vantaa">
  <h2>Kielioppi</h2>

  <h3>1. Vir, trazer, pôr</h3>
  <p>Kolme epäsäännöllistä verbiä lisää. Minä-muoto on taas erikoinen, ja verbillä <span class="pt">vir</span> myös he-muodossa on aksentti (<span class="pt">vêm</span>).</p>
  <table class="taivutus">
    <tr><th></th><th>vir (tulla)</th><th>trazer (tuoda)</th><th>pôr (panna)</th></tr>
    <tr><td>eu</td><td><span class="pt">venho</span></td><td><span class="pt">trago</span></td><td><span class="pt">ponho</span></td></tr>
    <tr><td>você, ele, ela, a gente</td><td><span class="pt">vem</span></td><td><span class="pt">traz</span></td><td><span class="pt">põe</span></td></tr>
    <tr><td>nós</td><td><span class="pt">vimos</span></td><td><span class="pt">trazemos</span></td><td><span class="pt">pomos</span></td></tr>
    <tr><td>vocês, eles, elas</td><td><span class="pt">vêm</span></td><td><span class="pt">trazem</span></td><td><span class="pt">põem</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Tulen talvesta.">Eu venho do inverno.</li>
    <li class="s" data-fi="Kouvonen tulee kentälle.">O Kouvonen vem ao aeroporto.</li>
    <li class="s" data-fi="Tuon passit.">Eu trago os passaportes.</li>
    <li class="s" data-fi="Maia tuo liput.">A Maia traz as passagens.</li>
    <li class="s" data-fi="Panen laukut autoon.">Eu ponho as malas no carro.</li>
    <li class="s" data-fi="He tulevat Brasiliasta.">Eles vêm do Brasil.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> <span class="pt">trazer</span> tarkoittaa tuoda <b>tänne, puhujan luo</b>, ja <span class="pt">levar</span> viedä <b>pois puhujasta</b>. <span class="pt">Vir</span> tarkoittaa tulla puhujan tai kuuntelijan luo, <span class="pt">ir</span> mennä pois. Vertaa: <span class="pt">Eu levo a mala para o carro</span> (vien laukun autolle) ja <span class="pt">Eu trago a mala para você</span> (tuon laukun sinulle). Verbi <span class="pt">pôr</span> kirjoitetaan aksentilla, jotta sen voi erottaa sanasta <span class="pt">por</span>. Verbit <span class="pt">ter</span> ja <span class="pt">vir</span> ovat samanlaisia: <span class="pt">ele tem, eles têm</span> ja <span class="pt">ele vem, eles vêm</span>.</p>
  </div>
  <div class="huomio">
    <p><b>Espanjasta apua ja ansat:</b> minä-muodot: <span class="pt">venho</span> (es. vengo), <span class="pt">trago</span> (traigo), <span class="pt">ponho</span> (pongo, g muuttuu nh:ksi). Älä sano <span class="pt">pongo</span>! Muut muodot ovat lähellä espanjaa (<span class="pt">vem</span> = viene, <span class="pt">traz</span> = trae). Verbi <span class="pt">pegar</span> on ansa: portugalissa se tarkoittaa ottaa, napata, ja sillä otetaan kulkuneuvo: <span class="pt">pegar o ônibus</span>, <span class="pt">pegar um táxi</span>, <span class="pt">pegar o avião</span>. Espanjassa pegar tarkoittaa lyödä.</p>
  </div>

  <h3>2. Kulkuneuvo: de carro, a pé</h3>
  <p>Kun kerrot, millä kulkuneuvolla menet, käytä prepositiota <span class="pt">de</span> (ei <span class="pt">em</span>): <span class="pt">de carro, de ônibus, de avião, de metrô, de bicicleta</span>. Kävellen sanotaan <span class="pt">a pé</span>. Preposition <span class="pt">em</span> käytetään vasta, kun kerrot, <b>missä</b> olet: <span class="pt">no ônibus</span> (bussissa).</p>
  <ul class="esim">
    <li class="s" data-fi="Menemme autolla lentokentälle.">A gente vai de carro para o aeroporto.</li>
    <li class="s" data-fi="Maia tulee töihin metrolla.">A Maia vem de metrô para o trabalho.</li>
    <li class="s" data-fi="Minä menen kotiin kävellen.">Eu vou para casa a pé.</li>
    <li class="s" data-fi="Jay on koneessa.">O Jay está no avião.</li>
    <li class="s" data-fi="Otan taksin.">Eu pego um táxi.</li>
  </ul>

  <h3>3. Quem, por que, quando</h3>
  <p>Kolme uutta kysymyssanaa tuntemiesi (<span class="pt">onde, como, o que, qual, quanto</span>) lisäksi.</p>
  <table class="taivutus">
    <tr><th>sana</th><th>merkitys</th><th>esimerkki</th></tr>
    <tr><td><span class="pt">quem</span></td><td>kuka (ihminen)</td><td><span class="pt">Quem dirige?</span></td></tr>
    <tr><td><span class="pt">de quem</span></td><td>kenen</td><td><span class="pt">De quem é a mala?</span></td></tr>
    <tr><td><span class="pt">por que</span></td><td>miksi</td><td><span class="pt">Por que ele dirige assim?</span></td></tr>
    <tr><td><span class="pt">quando</span></td><td>milloin</td><td><span class="pt">Quando o avião chega?</span></td></tr>
  </table>
  <p><span class="pt">Por que</span> ja <span class="pt">porque</span> näyttävät samalta, mutta ne ovat eri sanoja:</p>
  <table class="taivutus">
    <tr><th>kirjoitus</th><th>merkitys</th><th>esimerkki</th></tr>
    <tr><td><span class="pt">por que</span> (kaksi sanaa)</td><td>miksi (kysymys)</td><td><span class="pt">Por que você viaja?</span></td></tr>
    <tr><td><span class="pt">por quê</span> (aksentti, lauseen lopussa)</td><td>miksi (lopussa)</td><td><span class="pt">Você viaja, por quê?</span></td></tr>
    <tr><td><span class="pt">porque</span> (yksi sana)</td><td>koska (vastaus)</td><td><span class="pt">Porque eu quero.</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Kuka tulee lentokentälle?">Quem vem ao aeroporto?</li>
    <li class="s" data-fi="Kenen tämä laukku on?">De quem é esta mala?</li>
    <li class="s" data-fi="Milloin me matkustamme?">Quando a gente viaja?</li>
    <li class="s" data-fi="Miksi sinä matkustat? Koska rakastan Maiaa.">Por que você viaja? Porque eu amo a Maia.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> kysymyksessä <span class="pt">por que</span> ja vastauksessa <span class="pt">porque</span>. Espanjassa on sama jako (¿por qué? – porque), joten sama tapa toimii. Sana <span class="pt">quem</span> vastaa espanjan sanaa quién: portugalissa ei ole aksenttia.</p>
  </div>

  <h3>4. Kellonajat</h3>
  <p>Kellonaika kysytään monikossa: <span class="pt">Que horas são?</span> (kirjaimellisesti ”Mitkä tunnit ovat?”). Vastaus alkaa sanalla <span class="pt">É</span> kellon ollessa yksi ja sanalla <span class="pt">São</span> muulloin. Mihin aikaan jokin tapahtuu, kysytään <span class="pt">A que horas…?</span> ja vastataan <span class="pt">às</span> + tunti.</p>
  <table class="taivutus">
    <tr><th>kello</th><th>portugaliksi</th></tr>
    <tr><td>1.00</td><td><span class="pt">É uma hora.</span></td></tr>
    <tr><td>2.00</td><td><span class="pt">São duas horas.</span></td></tr>
    <tr><td>4.30</td><td><span class="pt">São quatro e meia.</span></td></tr>
    <tr><td>7.20</td><td><span class="pt">São sete e vinte.</span></td></tr>
    <tr><td>8.15</td><td><span class="pt">São oito e quinze.</span></td></tr>
    <tr><td>2.50 (kymmentä vaille kolme)</td><td><span class="pt">São dez para as três.</span></td></tr>
    <tr><td>12.00 päivällä</td><td><span class="pt">É meio-dia.</span></td></tr>
    <tr><td>24.00</td><td><span class="pt">É meia-noite.</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Paljonko kello on?">Que horas são?</li>
    <li class="s" data-fi="Kello on kolme iltapäivällä.">São três da tarde.</li>
    <li class="s" data-fi="Mihin aikaan lento on?">A que horas é o voo?</li>
    <li class="s" data-fi="Lento on kaksikymmentä yli seitsemän.">O voo é às sete e vinte.</li>
    <li class="s" data-fi="Lento on yhdeltä.">O voo é à uma hora.</li>
    <li class="s" data-fi="Syön lounasta keskipäivällä.">Eu almoço ao meio-dia.</li>
  </ul>
  <p>Vuorokaudenaika lisätään tunnin perään, koska kellosta ei muuten tiedä, onko aamu vai ilta: <span class="pt">da manhã</span> (aamu), <span class="pt">da tarde</span> (iltapäivä), <span class="pt">da noite</span> (ilta ja yö), <span class="pt">da madrugada</span> (yön pimeät tunnit). Aikatauluissa käytetään myös 24 tunnin kelloa: <span class="pt">às dezenove horas</span>.</p>
  <div class="muista">
    <p><b>Muista:</b> yksi on erikoistapaus: <span class="pt">É uma hora</span> ja <span class="pt">à uma hora</span> (<span class="pt">a + a = à</span>). Muuten <span class="pt">às</span> (<span class="pt">a + as</span>): <span class="pt">às duas, às três</span>. Sana <span class="pt">meia</span> (puoli) on feminiini, koska se viittaa sanaan <span class="pt">hora</span>: <span class="pt">quatro e meia</span>. Espanjasta apua: ”Son las dos” ja <span class="pt">São duas</span> toimivat samoin, mutta portugalin kysymys on monikossa <span class="pt">horas</span>, espanjan yksikössä hora.</p>
  </div>
</section>

<section class="osio">
  <h2>Ääntäminen: q, x ja z</h2>
  <div class="saanto">
    <h3>q on aina qu: ennen e:tä ja i:tä u on äänetön</h3>
    <p>Kirjain q esiintyy vain yhdessä u:n kanssa. Ennen e:tä ja i:tä <b>qu</b> = k (u ei kuulu). Ennen a:ta ja o:ta kuuluu <b>kua</b> tai <b>kuo</b>.</p>
    <ul class="esim">
      <li class="s">que</li>
      <li class="s">quem</li>
      <li class="s">aqui</li>
      <li class="s">quando</li>
      <li class="s">quanto</li>
      <li class="s">quatro</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>x voi olla sh, z, ks tai s</h3>
    <p>Kirjain x äännetään neljällä tavalla. Yleisin on sh, ja muut täytyy opetella sanoittain tai muistisäännön avulla.</p>
    <ul class="esim">
      <li class="s" data-fi="sh: laatikko">caixa</li>
      <li class="s" data-fi="sh: kuppi">xícara</li>
      <li class="s" data-fi="z: esimerkki (ex + vokaali)">exemplo</li>
      <li class="s" data-fi="z: koe, tutkimus">exame</li>
      <li class="s" data-fi="ks: taksi">táxi</li>
      <li class="s" data-fi="ks: kiinteä">fixo</li>
      <li class="s" data-fi="s: kuudes (x ennen konsonanttia)">sexta</li>
      <li class="s" data-fi="s: lähin">próximo</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>z on z, mutta sanan lopussa s</h3>
    <p>Sanan alussa ja vokaalien välissä z on soinnillinen z. Sanan lopussa se on Belo Horizontessa s (Riossa sh).</p>
    <ul class="esim">
      <li class="s">zero</li>
      <li class="s">azul</li>
      <li class="s">vez</li>
      <li class="s">luz</li>
      <li class="s">feliz</li>
    </ul>
  </div>
  <div class="huomio">
    <p><b>Espanjan vaikutus:</b> espanjan z (zapato, cielo) on joillakin alueilla th-äänne, ja espanjan x on usein ks tai s. Portugalissa z on aina z (paitsi lopussa s), ja x on useimmiten sh. Sano <span class="pt">caixa</span> ”KAI-sha”, ei ”kak-sa”.</p>
  </div>
</section>

<aside class="kulttuuri" data-paikka="confins">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Belo Horizonten lentoasema: Confins</h3>
  <figure class="kuva" data-kuva="confins"></figure>
  <p>Belo Horizonten kansainvälinen lentoasema on virallisesti <span class="pt">Aeroporto Internacional Tancredo Neves</span>, mutta sitä kutsutaan lähes aina nimellä <span class="pt">Confins</span>. Se sijaitsee Confinsin kunnassa, noin 40 kilometrin päässä Belo Horizonten keskustasta, ja se avattiin vuonna 1984. Nimensä lentoasema on saanut Tancredo Nevesistä, joka oli valittu Brasilian presidentiksi mutta kuoli ennen virkaanastumistaan vuonna 1985.</p>
  <p>Kaupungin omassa lähellä olevassa Pampulhan lentoasemassa (<span class="pt">Carlos Drummond de Andrade</span>) lennetään pienemmillä koneilla. Confinsista keskustaan ajetaan autolla yleensä noin tunti, jos liikenne sujuu.</p>
  <p>Helsinki-Vantaan lentoasema sijaitsee Vantaalla, noin 19 kilometrin päässä Helsingin keskustasta. Se avattiin vuonna 1952 ennen Helsingin olympialaisia. Joulukuussa Brasilian Belo Horizonten kello on viisi tuntia jäljessä Suomea, koska Brasiliassa ei ole nykyään kesäaikaa. Siksi Jay ja Maia saapuvat samana iltana, vaikka matka kestää monta tuntia.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>Kuuntelutehtävä: lähtötaulu</h3>
    <p class="ohje">Kuuntele kuulutukset lähtötaulusta (yllä) ja vastaa.</p>
    <div class="valinta" data-oikea="às sete e vinte">
      <p class="kysymys">A que horas sai o voo para Lisboa?</p>
      <div class="vaihtoehdot"><button type="button">às seis e cinquenta e cinco</button><button type="button">às sete e vinte</button><button type="button">às oito e dez</button></div>
    </div>
    <div class="valinta" data-oikea="trinta e dois">
      <p class="kysymys">Qual é o portão do voo para Lisboa?</p>
      <div class="vaihtoehdot"><button type="button">vinte e um</button><button type="button">vinte e oito</button><button type="button">trinta e dois</button></div>
    </div>
    <div class="valinta" data-oikea="o voo para Londres">
      <p class="kysymys">Qual voo está atrasado?</p>
      <div class="vaihtoehdot"><button type="button">o voo para Paris</button><button type="button">o voo para Londres</button><button type="button">o voo para Estocolmo</button></div>
    </div>
    <div class="valinta" data-oikea="está cancelado">
      <p class="kysymys">O voo para Nova York…</p>
      <div class="vaihtoehdot"><button type="button">sai às nove</button><button type="button">está atrasado</button><button type="button">está cancelado</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Vir, trazer, pôr</h3>
    <p class="ohje">Kirjoita verbin oikea muoto.</p>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="venho"></span> da Finlândia. (vir)</p>
      <p>O Kouvonen <span class="aukko" data-oikea="vem"></span> ao aeroporto. (vir)</p>
      <p>Eu <span class="aukko" data-oikea="trago"></span> os passaportes. (trazer)</p>
      <p>A Maia <span class="aukko" data-oikea="traz"></span> as passagens. (trazer)</p>
      <p>Eu <span class="aukko" data-oikea="ponho"></span> as malas no carro. (pôr)</p>
      <p>O Jay <span class="aukko" data-oikea="põe"></span> o casaco na mala. (pôr)</p>
      <p>Eles <span class="aukko" data-oikea="vêm"></span> de Belo Horizonte. (vir)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Por que vai porque?</h3>
    <p class="ohje">Valitse oikea kirjoitusasu.</p>
    <div class="valinta" data-oikea="Por que">
      <p class="kysymys">___ ele dirige assim?</p>
      <div class="vaihtoehdot"><button type="button">Por que</button><button type="button">Porque</button></div>
    </div>
    <div class="valinta" data-oikea="Porque">
      <p class="kysymys">— Por que você viaja? — ___ eu quero ver a família.</p>
      <div class="vaihtoehdot"><button type="button">Por que</button><button type="button">Porque</button></div>
    </div>
    <div class="valinta" data-oikea="Quem">
      <p class="kysymys">___ dirige o carro? O Kouvonen!</p>
      <div class="vaihtoehdot"><button type="button">Quem</button><button type="button">Quando</button><button type="button">Quanto</button></div>
    </div>
    <div class="valinta" data-oikea="Quando">
      <p class="kysymys">___ o avião chega? Às sete da noite.</p>
      <div class="vaihtoehdot"><button type="button">Quem</button><button type="button">Quando</button><button type="button">Qual</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Kuuntele kellonaika</h3>
    <p class="ohje">Paina ▶ ja valitse kellonaika, jonka kuulit.</p>
    <div class="valinta" data-kuuntele="São quatro e meia." data-oikea="4.30">
      <p class="kysymys">Paljonko kello on?</p>
      <div class="vaihtoehdot"><button type="button">3.30</button><button type="button">4.30</button><button type="button">5.30</button></div>
    </div>
    <div class="valinta" data-kuuntele="São sete e vinte." data-oikea="7.20">
      <p class="kysymys">Paljonko kello on?</p>
      <div class="vaihtoehdot"><button type="button">7.20</button><button type="button">8.20</button><button type="button">7.40</button></div>
    </div>
    <div class="valinta" data-kuuntele="É uma hora." data-oikea="1.00">
      <p class="kysymys">Paljonko kello on?</p>
      <div class="vaihtoehdot"><button type="button">1.00</button><button type="button">2.00</button><button type="button">12.00</button></div>
    </div>
    <div class="valinta" data-kuuntele="São dez para as três." data-oikea="2.50">
      <p class="kysymys">Paljonko kello on?</p>
      <div class="vaihtoehdot"><button type="button">3.10</button><button type="button">2.50</button><button type="button">3.50</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Yhdistä kulkuneuvo ja suomennos</h3>
    <p class="ohje">Paina portugalinkielistä sanaa ja sitten sen suomennosta.</p>
    <ul class="yhdista">
      <li data-pari="lentokone">o avião</li>
      <li data-pari="bussi">o ônibus</li>
      <li data-pari="juna">o trem</li>
      <li data-pari="metro">o metrô</li>
      <li data-pari="taksi">o táxi</li>
      <li data-pari="polkupyörä">a bicicleta</li>
      <li data-pari="kävellen">a pé</li>
      <li data-pari="matkalaukku">a mala</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. De, em vai a?</h3>
    <p class="ohje">Valitse oikea prepositio.</p>
    <div class="valinta" data-oikea="de">
      <p class="kysymys">A gente vai ___ ônibus para o centro.</p>
      <div class="vaihtoehdot"><button type="button">de</button><button type="button">em</button><button type="button">a</button></div>
    </div>
    <div class="valinta" data-oikea="a">
      <p class="kysymys">Eu vou para casa ___ pé.</p>
      <div class="vaihtoehdot"><button type="button">de</button><button type="button">em</button><button type="button">a</button></div>
    </div>
    <div class="valinta" data-oikea="no">
      <p class="kysymys">O Jay está ___ avião agora.</p>
      <div class="vaihtoehdot"><button type="button">de</button><button type="button">no</button><button type="button">a</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause. Luvut kirjoitetaan sanoin.</p>
    <div class="sanelu" data-puhu="Que horas são?"></div>
    <div class="sanelu" data-puhu="O voo é às sete e vinte."></div>
    <div class="sanelu" data-puhu="Eu trago os passaportes."></div>
    <div class="sanelu" data-puhu="Por que ele dirige assim?"></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Missä on paino?</h3>
    <p class="ohje">Paina tavua, jolla on paino. Kuuntele sana lopuksi.</p>
    <p><span class="paino" data-tavut="a|e|ro|por|to" data-oikea="4"></span> <span class="paino" data-tavut="pas|sa|por|te" data-oikea="3"></span> <span class="paino" data-tavut="pas|sa|gem" data-oikea="2"></span> <span class="paino" data-tavut="a|vi|ão" data-oikea="3"></span> <span class="paino" data-tavut="bi|ci|cle|ta" data-oikea="3"></span> <span class="paino" data-tavut="a|tra|sa|do" data-oikea="3"></span> <span class="paino" data-tavut="mo|to|ris|ta" data-oikea="3"></span> <span class="paino" data-tavut="vi|a|gem" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Käännä portugaliksi</h3>
    <p class="ohje">Kirjoita oma käännöksesi ja avaa sitten malli.</p>
    <div class="kaanna"><p class="fi">Paljonko kello on? Kello on neljä ja puoli.</p><p class="s" data-fi="Paljonko kello on? Kello on neljä ja puoli.">Que horas são? São quatro e meia.</p></div>
    <div class="kaanna"><p class="fi">Mihin aikaan lentomme on? Se on kahdeksalta aamulla.</p><p class="s" data-fi="Mihin aikaan lentomme on? Se on kahdeksalta aamulla.">A que horas é o nosso voo? É às oito da manhã.</p></div>
    <div class="kaanna"><p class="fi">Tuon passit ja panen laukut autoon.</p><p class="s" data-fi="Tuon passit ja panen laukut autoon.">Eu trago os passaportes e ponho as malas no carro.</p></div>
    <div class="kaanna"><p class="fi">Kuka tulee lentokentälle? Veljeni tulee autolla.</p><p class="s" data-fi="Kuka tulee lentokentälle? Veljeni tulee autolla.">Quem vem ao aeroporto? O meu irmão vem de carro.</p></div>
    <div class="kaanna"><p class="fi">Miksi sinä olet väsynyt? Koska en nuku.</p><p class="s" data-fi="Miksi sinä olet väsynyt? Koska en nuku.">Por que você está cansado? Porque eu não durmo.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin. Vaihda tiedot omiksi.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Que horas são agora?</summary>
      <p class="s" data-fi="Kello on kymmenen illalla.">São dez da noite.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Como você vai para o trabalho?</summary>
      <p class="s" data-fi="Menen töihin metrolla.">Eu vou de metrô.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">A que horas você acorda?</summary>
      <p class="s" data-fi="Herään seitsemältä.">Eu acordo às sete.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Por que você estuda português?</summary>
      <p class="s" data-fi="Koska rakastan Brasiliaa.">Porque eu amo o Brasil.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l10">
    <div class="dokumentti kalenteri oma" data-tallenna="l10-lento" lang="pt-BR">
      <div class="kal-yla"><b>O meu voo</b><small>keksi oma lento ja kirjoita siitä kuulutus</small></div>
      <div class="kal-rivit">
        <label>Destino <input name="kohde" placeholder="Belo Horizonte"></label>
        <label>Hora <input name="aika" placeholder="às dez e quinze"></label>
        <label>Portão <input name="portti" placeholder="portão doze"></label>
        <label>Kuulutus <input name="kuulutus" placeholder="Atenção: o voo para … sai às …, do portão …"></label>
      </div>
    </div>
    <h3>Kotitehtävä</h3>
    <p>Kuvaa matkaa kotoa töihin tai kouluun portugaliksi 5–6 lauseella: millä kulkuneuvolla menet (<span class="pt">de</span> + kulkuneuvo), mihin aikaan lähdet ja milloin saavut, kuka tulee mukaasi (<span class="pt">quem</span>) ja miksi valitset tuon kulkuneuvon (<span class="pt">porque</span>). Käytä ainakin yhtä verbeistä <span class="pt">vir</span>, <span class="pt">trazer</span> ja <span class="pt">pôr</span>. Sano teksti sitten ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Menen töihin metrolla.">Eu vou para o trabalho de metrô.</p>
      <p class="s" data-fi="Lähden kotoa kahdeksalta aamulla.">Eu saio de casa às oito da manhã.</p>
      <p class="s" data-fi="Saavun RRC:lle yhdeksältä.">Eu chego ao RRC às nove.</p>
      <p class="s" data-fi="Maia tulee mukaani, koska hän työskentelee RRC:llä.">A Maia vem comigo, porque ela trabalha no RRC.</p>
      <p class="s" data-fi="Tuon kahvin työpaikalle.">Eu trago o café para o trabalho.</p>
      <p class="s" data-fi="Pidän metrosta, koska se ei pysähdy liikennevaloissa.">Eu gosto do metrô, porque ele não para no sinal.</p>
    </details>
  </div>
</section>
`
});
