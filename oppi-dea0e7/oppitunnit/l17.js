/* Jakso 17: Jay on kadonnut! Oma materiaali, ei kirjan tekstiä.
   Kielioppi: epäsäännöllinen perfekti, levar ja trazer, ulkonäön kuvailu. Ääntäminen: painolliset a, e, o.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l17',
  lyhyt: '17',
  jakso: 'Jakso 17',
  otsikko: 'Ihmisen kuvaileminen: epäsäännöllinen perfekti',
  lahde: 'Aihe: ulkonäkö · Kielioppi: epäsäännöllinen perfekti, levar/trazer · Ääntäminen: painolliset a, e, o',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geologi, huolissaan Jaysta' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, kadonnut' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 1, kuvaus: 'Maian äiti' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 1, kuvaus: 'Maian isä' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 2, kuvaus: 'Maian veli, jakaa postia naapurustossa' },
    marina: { nimi: 'Marina', tyyppi: 'nainen', vaihto: 2, kuvaus: 'Maian ystävä, sairaanhoitaja' },
    mirela: { nimi: 'Mirela', tyyppi: 'nainen', vaihto: 3, kuvaus: 'Maian ystävä' },
    mateus: { nimi: 'Mateus', tyyppi: 'mies', vaihto: 3, kuvaus: 'Maian ystävä' },
    murilo: { nimi: 'Murilo', tyyppi: 'mies', vaihto: 4, kuvaus: 'Maian ystävä, historianopettaja' },
    marcus: { nimi: 'Marcus', tyyppi: 'mies', vaihto: 5, kuvaus: 'jengipomo, koominen konna' }
  },

  aiheet: ['ihmiset', 'ominaisuus', 'keho', 'toiminta'],

  sanasto: [
    'alto', 'baixo', 'magro', 'forte', 'cabelo', 'curto', 'comprido', 'loiro', 'castanho', 'liso', 'cacheado', 'careca',
    'barba', 'bigode', 'topete', 'óculos', 'olhos', 'azul', 'verde', 'cara', 'bobo', 'camiseta', 'calça',
    'fui', 'foi', 'fiz', 'fez', 'tive', 'teve', 'esteve', 'disse', 'vi', 'viu', 'veio', 'vim', 'deu', 'trouxe',
    'levar', 'trazer', 'foi embora', 'desaparecer', 'bairro', 'morro', 'gringo', 'último', 'pela última vez'
  ],

  sanat: {
    // <<SANAT
    // dialogi 1
    'domingo': { fi: 'sunnuntai', aa: 'do-MĨ-gu', ipa: '[doˈmĩɡu]', sl: 'substantiivi, maskuliini' },
    'achei': { fi: 'löysin; arvelin', aa: 'a-SHEI', ipa: '[aˈʃej]', sl: 'verbi, perfekti', huom: 'perusmuoto {achar}' },
    'última': { fi: 'viimeinen (feminiinisanan edellä)', aa: 'UU-tsi-ma', ipa: '[ˈuwtʃimɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {último}' },
    'pela última vez': { fi: 'viimeisen kerran', aa: 'PE-la UU-tsi-ma VES', ipa: '[ˈpelɐ ˈuwtʃimɐ ves]', sl: 'ilmaus', huom: 'pela = por + a' },
    'filha': { fi: 'tytär', aa: 'FI-lja', ipa: '[ˈfiʎɐ]', sl: 'substantiivi, feminiini', huom: 'poika {filho}; minha filha on myös hellittelysana' },
    'às': { fi: '-lta, -ltä (kellonajassa; a + as)', aa: 'as', ipa: '[as]', sl: 'prepositio + artikkeli', huom: 'às duas = kello kaksi' },
    'disse': { fi: 'sanoi; sanoin', aa: 'DI-si', ipa: '[ˈdʒisi]', sl: 'verbi, perfekti', huom: 'perusmuoto {dizer}' },
    'vi': { fi: 'näin', aa: 'VI', ipa: '[vi]', sl: 'verbi, perfekti', huom: 'perusmuoto {ver}' },
    'viu': { fi: 'näki', aa: 'VIU', ipa: '[viw]', sl: 'verbi, perfekti', huom: 'perusmuoto {ver}' },
    'foi': { fi: 'meni; oli', aa: 'FOI', ipa: '[foj]', sl: 'verbi, perfekti', huom: 'perusmuoto {ir} tai {ser}' },
    'foi embora': { fi: 'lähti pois', aa: 'FOI ẽ-BO-ra', ipa: '[foj ẽˈbɔɾɐ]', sl: 'ilmaus', huom: 'ir embora = lähteä pois' },
    'foram': { fi: 'menivät; olivat', aa: 'FO-rãu', ipa: '[ˈfoɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {ir} tai {ser}' },
    'juntos': { fi: 'yhdessä (monikko)', aa: 'ZHŨ-tus', ipa: '[ˈʒũtus]', sl: 'adverbi', huom: 'yksikkö {junto}' },
    'anos': { fi: 'vuotta', aa: 'Ã-nus', ipa: '[ˈɐ̃nus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {ano}' },
    'vejo': { fi: 'näen', aa: 'VE-zhu', ipa: '[ˈveʒu]', sl: 'verbi', huom: 'perusmuoto {ver}' },
    'esteve': { fi: 'oli (jossakin)', aa: 'es-TE-vi', ipa: '[esˈtevi]', sl: 'verbi, perfekti', huom: 'perusmuoto {estar}' },
    'veio': { fi: 'tuli', aa: 'VEI-u', ipa: '[ˈveju]', sl: 'verbi, perfekti', huom: 'perusmuoto {vir}' },
    'convite': { fi: 'kutsu', aa: 'kõ-VI-tsi', ipa: '[kõˈvitʃi]', sl: 'substantiivi, maskuliini', huom: 'sem convite = ilman kutsua' },
    'deus': { fi: 'Jumala', aa: 'DEUS', ipa: '[dews]', sl: 'substantiivi, maskuliini' },
    'meu deus': { fi: 'voi jumalani', aa: 'MEU DEUS', ipa: '[mew dews]', sl: 'huudahdus' },
    'vamos': { fi: 'mennään; lähdetään; tehdään', aa: 'VÃ-mus', ipa: '[ˈvɐ̃mus]', sl: 'verbi {ir}', huom: 'vamos + perusmuoto = tehdään jotakin yhdessä' },
    'bairro': { fi: 'kaupunginosa, naapurusto', aa: 'BAI-hu', ipa: '[ˈbajhu]', sl: 'substantiivi, maskuliini' },
    'escrevo': { fi: 'kirjoitan', aa: 'es-KRE-vu', ipa: '[esˈkɾevu]', sl: 'verbi', huom: 'perusmuoto {escrever}' },
    'magro': { fi: 'laiha', aa: 'MA-gru', ipa: '[ˈmaɡɾu]', sl: 'adjektiivi' },
    'curto': { fi: 'lyhyt', aa: 'KUH-tu', ipa: '[ˈkuhtu]', sl: 'adjektiivi', huom: 'vastakohta {comprido}' },
    'loiro': { fi: 'vaalea(tukkainen)', aa: 'LOI-ru', ipa: '[ˈlojɾu]', sl: 'adjektiivi', huom: 'feminiini {loira}' },
    'loira': { fi: 'vaalea(tukkainen, nainen)', aa: 'LOI-ra', ipa: '[ˈlojɾɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {loiro}' },
    'olhos': { fi: 'silmät', aa: 'O-ljus', ipa: '[ˈɔʎus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {olho}' },
    'azuis': { fi: 'siniset', aa: 'a-ZUIS', ipa: '[aˈzujs]', sl: 'adjektiivi, monikko', huom: 'yksikkö {azul}' },
    'barba': { fi: 'parta', aa: 'BAH-ba', ipa: '[ˈbahbɐ]', sl: 'substantiivi, feminiini' },
    'veste': { fi: 'pukee; hänellä on yllään', aa: 'VES-tsi', ipa: '[ˈvɛstʃi]', sl: 'verbi', huom: 'perusmuoto {vestir}' },
    'camiseta': { fi: 't-paita', aa: 'ka-mi-ZE-ta', ipa: '[kamiˈzetɐ]', sl: 'substantiivi, feminiini' },
    'calça': { fi: 'housut', aa: 'KAU-sa', ipa: '[ˈkawsɐ]', sl: 'substantiivi, feminiini', huom: 'usein monikossa as calças' },
    'preta': { fi: 'musta (feminiinisanan edellä)', aa: 'PRE-ta', ipa: '[ˈpɾetɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {preto}' },
    'usa': { fi: 'käyttää; käytät', aa: 'U-za', ipa: '[ˈuzɐ]', sl: 'verbi', huom: 'perusmuoto {usar}' },
    'redondos': { fi: 'pyöreät', aa: 'he-DÕ-dus', ipa: '[heˈdõdus]', sl: 'adjektiivi, monikko', huom: 'yksikkö redondo' },
    'enormes': { fi: 'valtavat', aa: 'e-NOH-mis', ipa: '[eˈnɔhmis]', sl: 'adjektiivi, monikko', huom: 'yksikkö enorme' },
    'dele': { fi: 'hänen (mies); hänestä', aa: 'DE-li', ipa: '[ˈdeli]', sl: 'pronomini', huom: 'de + ele; o cabelo dele = hänen hiuksensa' },
    'lados': { fi: 'sivut', aa: 'LA-dus', ipa: '[ˈladus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {lado}' },
    'topete': { fi: 'töyhtö, tupee', aa: 'to-PE-tsi', ipa: '[toˈpetʃi]', sl: 'substantiivi, maskuliini', huom: 'pystyyn kammattu etutukka' },
    'descrição': { fi: 'kuvaus', aa: 'dis-kri-SÃU', ipa: '[dʒiskɾiˈsɐ̃w]', sl: 'substantiivi, feminiini' },
    'nessa': { fi: 'tässä, tuossa (em + essa)', aa: 'NE-sa', ipa: '[ˈnɛsɐ]', sl: 'prepositio + pronomini', huom: 'nessa hora = tällä hetkellä, silloin' },
    'entrou': { fi: 'meni sisään', aa: 'ẽ-TROU', ipa: '[ẽˈtɾow]', sl: 'verbi, perfekti', huom: 'perusmuoto {entrar}' },
    'cartas': { fi: 'kirjeet', aa: 'KAH-tas', ipa: '[ˈkahtɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {carta}' },
    'trouxe': { fi: 'toi; toin', aa: 'TROU-si', ipa: '[ˈtɾowsi]', sl: 'verbi, perfekti', huom: 'perusmuoto {trazer}' },
    // dialogi 2
    'num': { fi: 'yhdessä (em + um)', aa: 'nũ', ipa: '[nũ]', sl: 'prepositio + artikkeli', huom: 'em + um' },
    'morro': { fi: 'mäki, kukkula', aa: 'MO-hu', ipa: '[ˈmohu]', sl: 'substantiivi, maskuliini', huom: 'Brasiliassa usein asuttu rinne' },
    'cascalho': { fi: 'sora', aa: 'kas-KA-lju', ipa: '[kasˈkaʎu]', sl: 'substantiivi, maskuliini', huom: 'geologien sana: irtonainen sora' },
    'gringo': { fi: 'ulkomaalainen, gringo', aa: 'GRĨ-gu', ipa: '[ˈɡɾĩɡu]', sl: 'substantiivi, maskuliini', huom: 'arkinen, joskus leikillinen' },
    'fiz': { fi: 'tein', aa: 'FIS', ipa: '[fis]', sl: 'verbi, perfekti', huom: 'perusmuoto {fazer}' },
    'fez': { fi: 'teki', aa: 'FEIS', ipa: '[fejs]', sl: 'verbi, perfekti', huom: 'perusmuoto {fazer}' },
    'feio': { fi: 'ruma', aa: 'FEI-u', ipa: '[ˈfeju]', sl: 'adjektiivi', huom: 'vastakohta {bonito}' },
    'comprido': { fi: 'pitkä (esine, hiukset)', aa: 'kõ-PRI-du', ipa: '[kõˈpɾidu]', sl: 'adjektiivi', huom: 'vastakohta {curto}; ihmisestä {alto}; ei {largo}' },
    'vim': { fi: 'tulin', aa: 'VĨ', ipa: '[vĩ]', sl: 'verbi, perfekti', huom: 'perusmuoto {vir}' },
    'vim parar': { fi: 'päädyin', aa: 'VĨ pa-RAH', ipa: '[vĩ paˈɾah]', sl: 'ilmaus', huom: 'como eu vim parar aqui = miten päädyin tänne' },
    'meus': { fi: 'minun (monikko)', aa: 'MEUS', ipa: '[mews]', sl: 'omistuspronomini', huom: 'yksikkö {meu}' },
    'homens': { fi: 'miehet', aa: 'O-mẽis', ipa: '[ˈomẽjs]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {homem}' },
    'levaram': { fi: 'veivät', aa: 'le-VA-rãu', ipa: '[leˈvaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {levar}' },
    'trouxeram': { fi: 'toivat', aa: 'trou-SE-rãu', ipa: '[tɾowˈseɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {trazer}' },
    'dormiu': { fi: 'nukkui', aa: 'doh-MIU', ipa: '[dohˈmiw]', sl: 'verbi, perfekti', huom: 'perusmuoto {dormir}' },
    'deixei': { fi: 'jätin', aa: 'dei-SHEI', ipa: '[dejˈʃej]', sl: 'verbi, perfekti', huom: 'perusmuoto {deixar}' },
    'carteira': { fi: 'lompakko', aa: 'kah-TEI-ra', ipa: '[kahˈtejɾɐ]', sl: 'substantiivi, feminiini' },
    'micro-ondas': { fi: 'mikroaaltouuni', aa: 'mi-kru-Õ-das', ipa: '[mikɾuˈõdɐs]', sl: 'substantiivi, maskuliini', huom: 'sama muoto yksikössä ja monikossa' },
    'geólogo': { fi: 'geologi', aa: 'zhe-O-lo-gu', ipa: '[ʒeˈɔloɡu]', sl: 'substantiivi, maskuliini', huom: 'nainen {geóloga}' },
    'pequena': { fi: 'pieni (feminiinisanan edellä)', aa: 'pe-KẼ-na', ipa: '[peˈkẽnɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {pequeno}' },
    // kielioppi
    'tive': { fi: 'minulla oli; sain', aa: 'TSI-vi', ipa: '[ˈtʃivi]', sl: 'verbi, perfekti', huom: 'perusmuoto {ter}' },
    'teve': { fi: 'hänellä oli', aa: 'TE-vi', ipa: '[ˈtevi]', sl: 'verbi, perfekti', huom: 'perusmuoto {ter}' },
    'fui': { fi: 'menin; olin', aa: 'FUI', ipa: '[ˈfuj]', sl: 'verbi, perfekti', huom: 'perusmuoto {ir} tai {ser}' },
    'fomos': { fi: 'menimme; olimme', aa: 'FO-mus', ipa: '[ˈfomus]', sl: 'verbi, perfekti', huom: 'perusmuoto {ir} tai {ser}' },
    'fizemos': { fi: 'teimme', aa: 'fi-ZẼ-mus', ipa: '[fiˈzẽmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {fazer}' },
    'fizeram': { fi: 'tekivät', aa: 'fi-ZE-rãu', ipa: '[fiˈzeɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {fazer}' },
    'tivemos': { fi: 'meillä oli', aa: 'tsi-VẼ-mus', ipa: '[tʃiˈvẽmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {ter}' },
    'tiveram': { fi: 'heillä oli', aa: 'tsi-VE-rãu', ipa: '[tʃiˈveɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {ter}' },
    'estive': { fi: 'olin (jossakin)', aa: 'es-TSI-vi', ipa: '[esˈtʃivi]', sl: 'verbi, perfekti', huom: 'perusmuoto {estar}' },
    'estivemos': { fi: 'olimme (jossakin)', aa: 'es-tsi-VẼ-mus', ipa: '[estʃiˈvẽmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {estar}' },
    'estiveram': { fi: 'olivat (jossakin)', aa: 'es-tsi-VE-rãu', ipa: '[estʃiˈveɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {estar}' },
    'dissemos': { fi: 'sanoimme', aa: 'di-SẼ-mus', ipa: '[dʒiˈsẽmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {dizer}' },
    'disseram': { fi: 'sanoivat', aa: 'di-SE-rãu', ipa: '[dʒiˈseɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {dizer}' },
    'vimos': { fi: 'näimme', aa: 'VĨ-mus', ipa: '[ˈvĩmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {ver}' },
    'viram': { fi: 'näkivät', aa: 'VI-rãu', ipa: '[ˈviɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {ver}' },
    'viemos': { fi: 'tulimme', aa: 'vi-Ẽ-mus', ipa: '[viˈẽmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {vir}' },
    'vieram': { fi: 'tulivat', aa: 'vi-E-rãu', ipa: '[viˈeɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {vir}' },
    'dei': { fi: 'annoin', aa: 'DEI', ipa: '[dej]', sl: 'verbi, perfekti', huom: 'perusmuoto {dar}' },
    'deu': { fi: 'antoi', aa: 'DEU', ipa: '[dew]', sl: 'verbi, perfekti', huom: 'perusmuoto {dar}' },
    'demos': { fi: 'annoimme', aa: 'DẼ-mus', ipa: '[ˈdẽmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {dar}' },
    'deram': { fi: 'antoivat', aa: 'DE-rãu', ipa: '[ˈdeɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {dar}' },
    'pude': { fi: 'pystyin', aa: 'PU-di', ipa: '[ˈpudʒi]', sl: 'verbi, perfekti', huom: 'perusmuoto {poder}' },
    'pôde': { fi: 'pystyi', aa: 'PO-di', ipa: '[ˈpodʒi]', sl: 'verbi, perfekti', huom: 'perusmuoto {poder}; vrt. pode (preesens) [ˈpɔdʒi]' },
    'puderam': { fi: 'pystyivät', aa: 'pu-DE-rãu', ipa: '[puˈdeɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {poder}' },
    'quis': { fi: 'halusin; halusi', aa: 'KIS', ipa: '[kis]', sl: 'verbi, perfekti', huom: 'perusmuoto {querer}' },
    'quiseram': { fi: 'halusivat', aa: 'ki-ZE-rãu', ipa: '[kiˈzeɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {querer}' },
    'soube': { fi: 'sain tietää; sai tietää', aa: 'SOU-bi', ipa: '[ˈsowbi]', sl: 'verbi, perfekti', huom: 'perusmuoto {saber}' },
    'souberam': { fi: 'saivat tietää', aa: 'sou-BE-rãu', ipa: '[sowˈbeɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {saber}' },
    'pus': { fi: 'panin', aa: 'PUS', ipa: '[pus]', sl: 'verbi, perfekti', huom: 'perusmuoto {pôr}' },
    'pôs': { fi: 'pani', aa: 'POIS', ipa: '[pojs]', sl: 'verbi, perfekti', huom: 'perusmuoto {pôr}' },
    'puseram': { fi: 'panivat', aa: 'pu-ZE-rãu', ipa: '[puˈzeɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {pôr}' },
    'levar': { fi: 'viedä; ottaa mukaan; kestää (aikaa)', aa: 'le-VAH', ipa: '[leˈvah]', sl: 'verbi, perusmuoto', huom: 'vastakohta {trazer}' },
    'levo': { fi: 'vien', aa: 'LE-vu', ipa: '[ˈlɛvu]', sl: 'verbi', huom: 'perusmuoto {levar}' },
    'leva': { fi: 'vie', aa: 'LE-va', ipa: '[ˈlɛvɐ]', sl: 'verbi', huom: 'perusmuoto {levar}' },
    'levamos': { fi: 'viemme', aa: 'le-VÃ-mus', ipa: '[leˈvɐ̃mus]', sl: 'verbi', huom: 'perusmuoto {levar}' },
    'levam': { fi: 'viennit (he)', aa: 'LE-vãu', ipa: '[ˈlɛvɐ̃w]', sl: 'verbi', huom: 'perusmuoto {levar}' },
    'trago': { fi: 'tuon', aa: 'TRA-gu', ipa: '[ˈtɾaɡu]', sl: 'verbi', huom: 'perusmuoto {trazer}' },
    'traz': { fi: 'tuo', aa: 'TRAS', ipa: '[tɾas]', sl: 'verbi', huom: 'perusmuoto {trazer}' },
    'trazemos': { fi: 'tuomme', aa: 'tra-ZẼ-mus', ipa: '[tɾaˈzẽmus]', sl: 'verbi', huom: 'perusmuoto {trazer}' },
    'trazem': { fi: 'tuovat', aa: 'TRA-zẽi', ipa: '[ˈtɾazẽj]', sl: 'verbi', huom: 'perusmuoto {trazer}' },
    'altura': { fi: 'pituus', aa: 'au-TU-ra', ipa: '[awˈtuɾɐ]', sl: 'substantiivi, feminiini' },
    'média': { fi: 'keskimääräinen (feminiini)', aa: 'ME-dja', ipa: '[ˈmɛdʒjɐ]', sl: 'adjektiivi, feminiini', huom: 'de altura média = keskipitkä' },
    'nova': { fi: 'uusi (feminiinisanan edellä)', aa: 'NO-va', ipa: '[ˈnɔvɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {novo}' },
    'castanho': { fi: 'ruskea', aa: 'kas-TÃ-nju', ipa: '[kasˈtɐ̃ɲu]', sl: 'adjektiivi', huom: 'silmille ja hiuksille' },
    'castanhos': { fi: 'ruskeat (monikko)', aa: 'kas-TÃ-njus', ipa: '[kasˈtɐ̃ɲus]', sl: 'adjektiivi, monikko', huom: 'yksikkö {castanho}' },
    'muitas': { fi: 'monet (feminiinin monikko)', aa: 'MŨI-tas', ipa: '[ˈmũjtɐs]', sl: 'pronomini, monikko', huom: 'muitas vezes = usein' },
    'alta': { fi: 'pitkä (nainen)', aa: 'AU-ta', ipa: '[ˈawtɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {alto}' },
    'verdes': { fi: 'vihreät', aa: 'VEH-dis', ipa: '[ˈvehdʒis]', sl: 'adjektiivi, monikko', huom: 'yksikkö {verde}' },
    'videochamada': { fi: 'videopuhelu', aa: 'vi-di-o-sha-MA-da', ipa: '[vidʒioʃaˈmadɐ]', sl: 'substantiivi, feminiini' },
    'liso': { fi: 'suora (hius)', aa: 'LI-zu', ipa: '[ˈlizu]', sl: 'adjektiivi' },
    'cacheado': { fi: 'kihara', aa: 'ka-she-A-du', ipa: '[kaʃeˈadu]', sl: 'adjektiivi' },
    'careca': { fi: 'kalju', aa: 'ka-RE-ka', ipa: '[kaˈɾɛkɐ]', sl: 'adjektiivi' },
    'bigode': { fi: 'viikset', aa: 'bi-GO-di', ipa: '[biˈɡɔdʒi]', sl: 'substantiivi, maskuliini' },
    'vila': { fi: 'kylä; asuinalue, kaupunginosa', aa: 'VI-la', ipa: '[ˈvilɐ]', sl: 'substantiivi, feminiini' },
    'aglomerado': { fi: 'taajama, asutuskeskittymä; favela (Belo Horizontessa)', aa: 'a-glo-me-RA-du', ipa: '[aɡlomeˈɾadu]', sl: 'substantiivi, maskuliini' }
    // SANAT>>
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kuvailla ihmisen ulkonäön: pituus, hiukset, silmät, silmälasit.</li>
  <li>Osaat yleisimpien epäsäännöllisten verbien perfektin: <span class="pt">fui</span>, <span class="pt">fiz</span>, <span class="pt">tive</span>, <span class="pt">disse</span>, <span class="pt">vi</span>.</li>
  <li>Osaat erottaa toisistaan <span class="pt">levar</span> (viedä) ja <span class="pt">trazer</span> (tuoda).</li>
  <li>Osaat ääntää painolliset a, e ja o oikein.</li>
</ul>
<p data-paikka="bh-bairro">Sunnuntaiaamu Belo Horizontessa. Juhlat ovat ohi, mutta Jay ei ole palannut. Ystävät ja perhe yrittävät kuvailla Jayn ja miehen, jonka kanssa hän lähti.</p>

<section class="osio" data-paikka="bh-bairro">
  <h2>Dialogi 1: Cadê o Jay?</h2>
  <p class="ohje">Maian vanhempien keittiössä mietitään, missä Jay on. Etsi epäsäännölliset perfektit: <b>vi, disse, foi, foram, esteve, veio</b>. Katso myös, miten Jayta ja Marcusta kuvaillaan.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi 1">
    <p class="s" data-h="kertoja" data-fi="Sunnuntaiaamu. Jay ei palannut juhlista.">Domingo de manhã. O Jay não voltou da festa.</p>
    <p class="s" data-h="maia" data-fi="Voi ei, en ole löytänyt Jayta mistään!">Gente, eu não achei o Jay em lugar nenhum!</p>
    <p class="s" data-h="marta" data-fi="Milloin näit Jayn viimeksi, tyttäreni?">Quando você viu o Jay pela última vez, minha filha?</p>
    <p class="s" data-h="maia" data-fi="Näin hänet kolmelta yöllä. Hän sanoi: ”Menen hakemaan lisää tuoppeja.” Sitten hän lähti.">Eu vi o Jay às três da manhã. Ele disse: “Vou buscar mais chope.” Depois ele foi embora.</p>
    <p class="s" data-h="marina" data-fi="Minä näin hänet Marcuksen kanssa. He lähtivät yhdessä!">Eu vi o Jay com o Marcus. Os dois foram embora juntos!</p>
    <p class="s" data-h="murilo" data-fi="Yhdessä? Siitä on kaksikymmentä vuotta, kun viimeksi näin Marcuksen.">Juntos? Faz vinte anos que eu não vejo o Marcus.</p>
    <p class="s" data-h="walker" data-fi="Kuka tämä Marcus on? Oliko hän juhlissa?">Quem é esse Marcus? Ele esteve na festa?</p>
    <p class="s" data-h="mirela" data-fi="Oli kyllä. Hän tuli ilman kutsua.">Esteve, sim. Ele veio sem convite.</p>
    <p class="s" data-h="marta" data-fi="Voi Jumalani! Lähetetään viesti naapuruston ryhmään.">Meu Deus! Vamos mandar uma mensagem pro grupo do bairro.</p>
    <p class="s" data-h="marina" data-fi="Minä kirjoitan. Maia, millainen Jay on?">Eu escrevo. Maia, como o Jay é?</p>
    <p class="s" data-h="maia" data-fi="Jay on pitkä ja laiha. Hänellä on lyhyet vaaleat hiukset, siniset silmät ja parta.">O Jay é alto e magro. Ele tem cabelo curto e loiro, olhos azuis e barba.</p>
    <p class="s" data-h="marina" data-fi="Mitä hänellä on yllään?">E o que ele veste?</p>
    <p class="s" data-h="maia" data-fi="Hänellä on sininen t-paita ja mustat housut.">Ele está de camiseta azul e calça preta.</p>
    <p class="s" data-h="marina" data-fi="Hyvä. Entä Marcus? Millainen hän on?">Ótimo. E o Marcus? Como ele é?</p>
    <p class="s" data-h="mirela" data-fi="Marcus on lyhyt ja käyttää isoja pyöreitä silmälaseja. Hänen tukkansa on tosi outo: sivuilta lyhyt ja päältä valtava töyhtö!">O Marcus é baixo e usa óculos redondos enormes. O cabelo dele é muito estranho: curto dos lados e um topete enorme em cima!</p>
    <p class="s" data-h="mateus" data-fi="Ja hänellä on tyhmä naama!">E ele tem cara de bobo!</p>
    <p class="s" data-h="murilo" data-fi="Mateus! Se ei ole kuvaus, se on mielipide.">Mateus! Isso não é uma descrição, é uma opinião.</p>
    <p class="s" data-h="kertoja" data-fi="Silloin Anderson tuli sisään kortteliin tarkoitettujen kirjeiden kanssa.">Nessa hora, o Anderson entrou com as cartas do bairro.</p>
    <p class="s" data-h="anderson" data-fi="Huomenta, kaikki! Toin kirjeet.">Bom dia, gente! Eu trouxe as cartas.</p>
    <p class="s" data-h="marta" data-fi="Kiitos, Anderson. Ei nyt, poikani. Jay on kadonnut.">Obrigada, Anderson. Agora não, meu filho. O Jay desapareceu.</p>
    <p class="s" data-h="anderson" data-fi="Isot silmälasit? Iso töyhtö? Minä tunnen tuon miehen!">Óculos grandes? Topete? Eu conheço esse homem!</p>
  </div>
</section>

<section class="osio" data-paikka="favela">
  <h2>Dialogi 2: Enquanto isso, no morro</h2>
  <p class="ohje">Samaan aikaan Jay herää pienessä huoneessa. Hän tekee kaksi espanjalaisvaikutteista virhettä: <span class="pt">esquisito</span> ja <span class="pt">largo</span>. Kuuntele, miten Marcus korjaa ne.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi 2">
    <p class="s" data-h="kertoja" data-fi="Samaan aikaan pienessä huoneessa, Morro do Cascalho -mäen laella…">Enquanto isso, num quarto pequeno, no alto do Morro do Cascalho…</p>
    <p class="s" data-h="jay" data-fi="Voi, päätäni… Missä minä olen?">Ai, minha cabeça… Onde eu estou?</p>
    <p class="s" data-h="marcus" data-fi="Huomenta, gringo. Olet minun kodissani, Morro do Cascalholla.">Bom dia, gringo. Você está na minha casa, no Morro do Cascalho.</p>
    <p class="s" data-h="jay" data-fi="Kuka sinä olet? Mitä minä tein? Miksi minä olen täällä?">Quem é você? O que eu fiz? Por que eu estou aqui?</p>
    <p class="s" data-h="marcus" data-fi="Minä olen Marcus. Eilen illalla sinä sanoit kamalan asian minun tukastani.">Eu sou o Marcus. Ontem à noite você disse uma coisa terrível sobre o meu cabelo.</p>
    <p class="s" data-h="jay" data-fi="Minä? Minä sanoin vain: ”Mikä outo tukka!” Se oli kehu! Espanjassa…">Eu? Eu só disse: “Que cabelo esquisito!” Foi um elogio! Em espanhol…</p>
    <p class="s" data-h="marcus" data-fi="Kehu?! Esquisito on ruma ja outo, gringo!">Um elogio?! Esquisito é feio e estranho, gringo!</p>
    <p class="s" data-h="jay" data-fi="Voi… anteeksi. Tukkasi on tosi kaunis ja tosi leveä!">Ah… desculpa. O seu cabelo é muito bonito e muito largo!</p>
    <p class="s" data-h="marcus" data-fi="Leveä?! Töyhtö on pitkä, ei leveä! Pitkä on comprido. Largo on toinen asia.">Largo?! O topete é comprido, não é largo! Largo é outra coisa.</p>
    <p class="s" data-h="jay" data-fi="Selvä, selvä… Comprido. Miten minä tulin tänne?">Tá, tá… Comprido. Como eu vim parar aqui?</p>
    <p class="s" data-h="marcus" data-fi="Mieheni veivät sinut juhlista autooni ja toivat sinut tänne. Nukuit koko ajan!">Meus homens levaram você da festa pro meu carro e trouxeram você pra cá. Você dormiu o tempo todo!</p>
    <p class="s" data-h="jay" data-fi="Mitä sinä haluat? Minulla ei ole rahaa. Jätin lompakon kotiin.">O que você quer? Eu não tenho dinheiro. Eu deixei a carteira em casa.</p>
    <p class="s" data-h="marcus" data-fi="En halua rahaa. Haluan kunnioitusta! Ja minulla on iso mikroaaltouuni.">Eu não quero dinheiro. Eu quero respeito! E eu tenho um micro-ondas grande.</p>
    <p class="s" data-h="jay" data-fi="Mikroaaltouuni? Minä en ole ruokaa! Minä olen geologi!">Micro-ondas? Eu não sou comida! Eu sou geólogo!</p>
    <p class="s" data-h="kertoja" data-fi="Jay katsoi ikkunasta. Alhaalla kaupunki on pieni ja kaunis.">Pela janela, o Jay viu a cidade lá embaixo. Ela é pequena e bonita.</p>
    <p class="s" data-h="jay" data-fi="Maia, missä sinä olet?">Maia, onde você está?</p>
  </div>
</section>

<section class="osio" data-paikka="bh-bairro">
  <h2>Retrato falado: miltä Marcus näyttää?</h2>
  <p class="ohje">Naapuruston viestiryhmään tarvitaan kuva miehestä, jonka kanssa Jay lähti. Mirela muistaa hänet. Kuuntele Mirelan kuvaus ja rakenna kasvokuva: valitse tukka, hiusten väri, lasit ja viikset. Jokainen valinta sanotaan ääneen. Paina lopuksi ”Tarkista”.</p>
  <div class="retrato" data-h="mirela" data-pohja="iho:#d9a982;paita:#6b2fa0;tausta:#efd9f7;ilme:virne"
       data-kuvaus="O Marcus é baixo. Ele tem um topete enorme e loiro. Ele usa óculos redondos enormes e tem bigode."
       data-oikea="tukka:topete;hiukset:loiro;lasit:isot-lasit;viikset:viikset">
    <p data-osa="tukka" data-arvo="lyhyt" data-nappi="curto">Ele tem cabelo curto.</p>
    <p data-osa="tukka" data-arvo="pitka" data-nappi="comprido">Ele tem cabelo comprido.</p>
    <p data-osa="tukka" data-arvo="topete" data-nappi="topete">Ele tem um topete enorme.</p>
    <p data-osa="tukka" data-arvo="kalju" data-nappi="careca">Ele é careca.</p>
    <p data-osa="hiukset" data-arvo="preto" data-vari="#1c120d" data-nappi="preto">O cabelo dele é preto.</p>
    <p data-osa="hiukset" data-arvo="castanho" data-vari="#6b3e1f" data-nappi="castanho">O cabelo dele é castanho.</p>
    <p data-osa="hiukset" data-arvo="loiro" data-vari="#e8c547" data-nappi="loiro">O cabelo dele é loiro.</p>
    <p data-osa="hiukset" data-arvo="ruivo" data-vari="#b5541c" data-nappi="ruivo">O cabelo dele é ruivo.</p>
    <p data-osa="lasit" data-arvo="ei" data-nappi="sem óculos">Ele não usa óculos.</p>
    <p data-osa="lasit" data-arvo="lasit" data-nappi="óculos">Ele usa óculos.</p>
    <p data-osa="lasit" data-arvo="tummat-lasit" data-nappi="óculos escuros">Ele usa óculos escuros.</p>
    <p data-osa="lasit" data-arvo="isot-lasit" data-nappi="óculos redondos">Ele usa óculos redondos enormes.</p>
    <p data-osa="viikset" data-arvo="ei" data-nappi="sem bigode">Ele não tem bigode.</p>
    <p data-osa="viikset" data-arvo="viikset" data-nappi="com bigode">Ele tem bigode.</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Vartalo ja ikä" data-sanat="alto,baixo,magro,forte,jovem,velho"></div>
  <div class="teema" data-otsikko="Hiukset ja kasvot" data-sanat="cabelo,curto,comprido,liso,cacheado,loiro,castanho,preto,careca,barba,bigode,topete,cara,óculos,olhos"></div>
  <div class="teema" data-otsikko="Värit" data-sanat="azul,verde,preto,branco,vermelho"></div>
  <div class="teema" data-otsikko="Vaatteet" data-sanat="camiseta,calça"></div>
  <div class="teema" data-otsikko="Luonne" data-sanat="bobo,bravo,engraçado,simpático"></div>
</section>

<section class="osio">
  <h2>Kielioppi</h2>

  <h3>1. Epäsäännölliset perfektit</h3>
  <p>Viime jaksossa opit säännölliset perfektit (<span class="pt">falei, falou</span>). Yleisimmillä verbeillä perfekti on epäsäännöllinen: muoto on opeteltava ulkoa. Hyvä uutinen: ne ovat samoja verbejä, joita käytät koko ajan, joten ne tulevat tutuiksi nopeasti. Espanjan epäsäännölliset perfektit ovat lähes samat, joten sinulla on etumatka.</p>
  <table class="taivutus">
    <tr><th>perusmuoto</th><th>eu</th><th>você, ele, ela, a gente</th><th>nós</th><th>vocês, eles</th></tr>
    <tr><td><span class="pt">ser</span> ja <span class="pt">ir</span></td><td><span class="pt">fui</span></td><td><span class="pt">foi</span></td><td><span class="pt">fomos</span></td><td><span class="pt">foram</span></td></tr>
    <tr><td><span class="pt">fazer</span></td><td><span class="pt">fiz</span></td><td><span class="pt">fez</span></td><td><span class="pt">fizemos</span></td><td><span class="pt">fizeram</span></td></tr>
    <tr><td><span class="pt">ter</span></td><td><span class="pt">tive</span></td><td><span class="pt">teve</span></td><td><span class="pt">tivemos</span></td><td><span class="pt">tiveram</span></td></tr>
    <tr><td><span class="pt">estar</span></td><td><span class="pt">estive</span></td><td><span class="pt">esteve</span></td><td><span class="pt">estivemos</span></td><td><span class="pt">estiveram</span></td></tr>
    <tr><td><span class="pt">dizer</span></td><td><span class="pt">disse</span></td><td><span class="pt">disse</span></td><td><span class="pt">dissemos</span></td><td><span class="pt">disseram</span></td></tr>
    <tr><td><span class="pt">ver</span></td><td><span class="pt">vi</span></td><td><span class="pt">viu</span></td><td><span class="pt">vimos</span></td><td><span class="pt">viram</span></td></tr>
    <tr><td><span class="pt">vir</span></td><td><span class="pt">vim</span></td><td><span class="pt">veio</span></td><td><span class="pt">viemos</span></td><td><span class="pt">vieram</span></td></tr>
    <tr><td><span class="pt">dar</span></td><td><span class="pt">dei</span></td><td><span class="pt">deu</span></td><td><span class="pt">demos</span></td><td><span class="pt">deram</span></td></tr>
  </table>
  <table class="taivutus">
    <tr><th>perusmuoto</th><th>eu</th><th>você, ele, ela, a gente</th><th>vocês, eles</th></tr>
    <tr><td><span class="pt">trazer</span></td><td><span class="pt">trouxe</span></td><td><span class="pt">trouxe</span></td><td><span class="pt">trouxeram</span></td></tr>
    <tr><td><span class="pt">poder</span></td><td><span class="pt">pude</span></td><td><span class="pt">pôde</span></td><td><span class="pt">puderam</span></td></tr>
    <tr><td><span class="pt">querer</span></td><td><span class="pt">quis</span></td><td><span class="pt">quis</span></td><td><span class="pt">quiseram</span></td></tr>
    <tr><td><span class="pt">saber</span></td><td><span class="pt">soube</span></td><td><span class="pt">soube</span></td><td><span class="pt">souberam</span></td></tr>
    <tr><td><span class="pt">pôr</span></td><td><span class="pt">pus</span></td><td><span class="pt">pôs</span></td><td><span class="pt">puseram</span></td></tr>
  </table>
  <p>Kolme huomiota auttaa muistamaan:</p>
  <ul>
    <li><span class="pt">ser</span> ja <span class="pt">ir</span> ovat perfektissä täsmälleen samat: <span class="pt">fui</span>, <span class="pt">foi</span>, <span class="pt">fomos</span>, <span class="pt">foram</span>. Yhteys kertoo, kumpi on kyseessä. Espanjassa on sama ilmiö.</li>
    <li>Muoto <span class="pt">nós</span> syntyy eu-muodon varresta: <span class="pt">fiz</span> → <span class="pt">fizemos</span>, <span class="pt">tive</span> → <span class="pt">tivemos</span>, <span class="pt">disse</span> → <span class="pt">dissemos</span>.</li>
    <li>Muoto <span class="pt">vocês, eles</span> päättyy aina -ram: <span class="pt">fizeram</span>, <span class="pt">disseram</span>, <span class="pt">foram</span>.</li>
  </ul>
  <ul class="esim">
    <li class="s" data-fi="Minä menin juhliin.">Eu fui à festa.</li>
    <li class="s" data-fi="Se oli kehu.">Foi um elogio.</li>
    <li class="s" data-fi="Mitä sinä teit?">O que você fez?</li>
    <li class="s" data-fi="Hän sanoi sen minulle.">Ele disse isso pra mim.</li>
    <li class="s" data-fi="Näin Jayn kolmelta.">Eu vi o Jay às três.</li>
    <li class="s" data-fi="Miksi et tullut?">Por que você não veio?</li>
    <li class="s" data-fi="Meillä oli hauskaa.">A gente teve um dia ótimo.</li>
    <li class="s" data-fi="He olivat juhlissa.">Eles estiveram na festa.</li>
    <li class="s" data-fi="En voinut tulla.">Eu não pude vir.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> Espanjan perfekti on hyvin samanlainen: <i>hice, hizo</i> = <span class="pt">fiz, fez</span>; <i>dije, dijo</i> = <span class="pt">disse</span>; <i>tuve, tuvo</i> = <span class="pt">tive, teve</span>; <i>vine, vino</i> = <span class="pt">vim, veio</span>; <i>puse, puso</i> = <span class="pt">pus, pôs</span>. Älä silti kirjoita espanjalaisia loppuja (<i>-ió, -ó</i>): portugalissa on <span class="pt">viu</span>, <span class="pt">deu</span>, <span class="pt">veio</span>.</p>
  </div>

  <h3>2. Levar ja trazer: viedä ja tuoda</h3>
  <p>Molemmat tarkoittavat kantamista paikasta toiseen. Ero on suunnassa:</p>
  <ul>
    <li><span class="pt">levar</span>: viedä, viedä mukana. Liike lähtee pois puhujasta tai paikasta, jossa puhuja on.</li>
    <li><span class="pt">trazer</span>: tuoda. Liike tulee kohti puhujaa tai paikkaa, jossa puhuja on.</li>
  </ul>
  <table class="taivutus">
    <tr><th></th><td><b>levar</b> (säännöllinen)</td><td><b>trazer</b> (epäsäännöllinen preesens)</td></tr>
    <tr><th>eu</th><td><span class="pt">levo</span></td><td><span class="pt">trago</span></td></tr>
    <tr><th>você, ele, ela, a gente</th><td><span class="pt">leva</span></td><td><span class="pt">traz</span></td></tr>
    <tr><th>nós</th><td><span class="pt">levamos</span></td><td><span class="pt">trazemos</span></td></tr>
    <tr><th>vocês, eles</th><td><span class="pt">levam</span></td><td><span class="pt">trazem</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Minä vien sinut kotiin.">Eu levo você pra casa.</li>
    <li class="s" data-fi="Tuo minulle kahvi, ole hyvä.">Traz um café pra mim, por favor.</li>
    <li class="s" data-fi="Miehet veivät Jayn mäelle.">Os homens levaram o Jay pro morro.</li>
    <li class="s" data-fi="He toivat hänet tänne.">Eles trouxeram ele pra cá.</li>
    <li class="s" data-fi="Anderson toi kirjeet.">O Anderson trouxe as cartas.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> Suomessa tuoda ja viedä ovat myös eri verbit, joten ajattele samoin. Espanjassa <i>llevar</i> ja <i>traer</i> toimivat samalla tavalla, mutta <i>llevar</i> tarkoittaa lisäksi ”pitää yllä” ja ”kestää aikaa”. Portugalissa <span class="pt">levar</span> voi myös kestää aikaa: <span class="pt">leva duas horas</span>.</p>
  </div>

  <h3>3. Ulkonäön kuvailu: ser, ter, usar, estar de</h3>
  <p>Ulkonäköä kuvaillaan neljällä rakenteella:</p>
  <ul class="esim">
    <li class="s" data-fi="Jay on pitkä ja laiha. (ser + adjektiivi)">O Jay é alto e magro.</li>
    <li class="s" data-fi="Hänellä on lyhyet hiukset ja parta. (ter + substantiivi)">Ele tem cabelo curto e barba.</li>
    <li class="s" data-fi="Marcus käyttää silmälaseja. (usar)">O Marcus usa óculos.</li>
    <li class="s" data-fi="Hänellä on yllään sininen t-paita. (estar de)">Ele está de camiseta azul.</li>
    <li class="s" data-fi="mies, jolla on silmälasit (de + substantiivi)">um homem de óculos</li>
  </ul>
  <p>Adjektiivi tulee yleensä substantiivin jälkeen ja taipuu sen mukana sukuun ja lukuun: <span class="pt">cabelo curto</span>, <span class="pt">olhos azuis</span>, <span class="pt">Maia é alta</span>, <span class="pt">a Marina é loira</span>. Värit <span class="pt">azul</span> ja <span class="pt">verde</span> eivät muutu sukuun, mutta ne saavat monikon (<span class="pt">azuis</span>, <span class="pt">verdes</span>).</p>
  <div class="muista">
    <p><b>Muista:</b> Portugalissa <span class="pt">cabelo</span> on yksikössä, vaikka suomessa sanotaan ”hiukset”. Silmät sen sijaan ovat monikossa: <span class="pt">olhos</span>. Silmälasit ovat aina monikossa: <span class="pt">óculos</span>.</p>
    <p><b>Espanjasta:</b> <i>pelo</i> = <span class="pt">cabelo</span>, <i>gafas</i> = <span class="pt">óculos</span>, <i>rubio</i> = <span class="pt">loiro</span>, <i>delgado</i> = <span class="pt">magro</span>, <i>bigote</i> = <span class="pt">bigode</span>. Varo ansaa: espanjan <i>largo</i> on ”pitkä”, mutta portugalin <span class="pt">largo</span> on ”leveä”. Pitkä on <span class="pt">comprido</span> (hiukset, esineet) tai <span class="pt">alto</span> (ihminen).</p>
  </div>
</section>

<section class="osio">
  <h2>Ääntäminen: painolliset a, e ja o</h2>
  <p>Painollisessa tavussa e ja o voivat olla avoimia (suu auki) tai suljettuja (suu enemmän kiinni). Aksenttimerkki kertoo äänteen laadun: <b>é, ó</b> ovat avoimia ja <b>ê, ô</b> suljettuja. Erolla on joskus merkitystä.</p>
  <ul class="esim">
    <li class="s">avó</li>
    <li class="s">avô</li>
    <li class="s">café</li>
    <li class="s">você</li>
    <li class="s">pode</li>
    <li class="s">pôde</li>
  </ul>
  <p>Ilman aksenttimerkkiä laatu on opeteltava sanoittain. Muutamia hyödyllisiä pareja:</p>
  <ul class="esim">
    <li class="s">ele</li>
    <li class="s">ela</li>
    <li class="s">olho</li>
    <li class="s">olhos</li>
    <li class="s">novo</li>
    <li class="s">nova</li>
  </ul>
  <div class="saanto">
    <h3>Nenä-äänteen vaikutus</h3>
    <p>Kun painollisen vokaalin jälkeen tulee m, n tai nh, vokaali nasalisoituu hieman ja sulkeutuu: <span class="pt">cama</span> (sänky) kuulostaa ”KÃ-ma”, <span class="pt">banho</span> ”BÃ-nju” ja <span class="pt">uma</span> ”Ũ-ma”. Kuuntele, kuinka eri tavalla <span class="pt">cama</span> ja <span class="pt">casa</span> kuulostavat.</p>
    <ul class="esim">
      <li class="s">cama</li>
      <li class="s">casa</li>
      <li class="s">banho</li>
      <li class="s">uma</li>
      <li class="s">cabelo</li>
    </ul>
  </div>
  <div class="muista">
    <p><b>Muista:</b> Jos et ole varma, katso sanan ääntämisohjetta: painollinen tavu on kirjoitettu isoilla kirjaimilla. Kuunteleminen ja toistaminen opettaa tämän parhaiten.</p>
  </div>
</section>

<aside class="kulttuuri" data-paikka="favela">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Favelat eli aglomerados</h3>
  <figure class="kuva" data-kuva="favela"></figure>
  <p><b>Favela</b> on Brasiliassa tiiviisti rakennettu asuinalue, joka on syntynyt ilman kaupungin suunnitelmaa, usein rinteille ja mäille. Ihmiset, joilla ei ollut varaa asuntoon valmiilla alueella, ovat rakentaneet kotinsa itse. Sanan kerrotaan tulleen Rio de Janeiron mäestä, jota kutsuttiin aiemmin nimellä <i>Morro da Favela</i>. Belo Horizontessa tällaisista alueista käytetään usein sanoja <span class="pt">vila</span> ja <span class="pt">aglomerado</span>, ja tilastoissa aluetta on kutsuttu myös termillä <i>aglomerado subnormal</i>. Nykyään tilastokeskus IBGE käyttää termiä <i>favelas e comunidades urbanas</i> eli ”kaupunkien favelat ja yhteisöt”.</p>
  <p>Favelat ovat tavallisia asuinalueita. Siellä asuvat ihmiset käyvät töissä ja lapset koulussa. Alueilla on kauppoja, kahviloita, kirkkoja, jalkapallokenttiä ja usein vahva naapuruus: ihmiset tuntevat toisensa, auttavat toisiaan ja juhlivat yhdessä musiikin kanssa. Suurin osa asukkaista ei liity rikollisuuteen, ja mediassa näkyvä kuva on usein yksipuolinen.</p>
  <p><b>Tarinassa:</b> <span class="pt">Morro do Cascalho</span> on keksitty paikka. Sana <span class="pt">cascalho</span> tarkoittaa soraa, eli geologille sopiva nimi. Marcus on koominen konna, mutta mäen muut asukkaat ovat aivan tavallisia ihmisiä, ja osa heistä auttaa Jayta.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: Jay ja Marcus</h3>
    <p class="ohje">Katso hahmojen kuvia ja muista kuvaukset. Kumpi on kyseessä?</p>
    <div class="valinta" data-oikea="o Marcus">
      <p class="kysymys"><span class="ryhma" data-hahmot="jay,marcus"></span> Quem tem um topete enorme?</p>
      <div class="vaihtoehdot"><button type="button">o Jay</button><button type="button">o Marcus</button></div>
    </div>
    <div class="valinta" data-oikea="o Jay">
      <p class="kysymys"><span class="ryhma" data-hahmot="jay,marcus"></span> Quem é alto e magro?</p>
      <div class="vaihtoehdot"><button type="button">o Jay</button><button type="button">o Marcus</button></div>
    </div>
    <div class="valinta" data-oikea="óculos redondos enormes">
      <p class="kysymys"><span class="ryhma" data-hahmot="marcus"></span> O Marcus usa…</p>
      <div class="vaihtoehdot"><button type="button">óculos escuros</button><button type="button">óculos redondos enormes</button><button type="button">um boné</button></div>
    </div>
    <div class="valinta" data-oikea="curto e loiro">
      <p class="kysymys"><span class="ryhma" data-hahmot="jay"></span> O cabelo do Jay é…</p>
      <div class="vaihtoehdot"><button type="button">comprido e preto</button><button type="button">curto e loiro</button><button type="button">careca</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Epäsäännöllinen perfekti</h3>
    <p class="ohje">Kirjoita verbi perfektissä. Perusmuoto on sulkeissa.</p>
    <div class="aukot">
      <p>Ontem eu <span class="aukko" data-oikea="fui"></span> à festa. (ir)</p>
      <p>O Jay <span class="aukko" data-oikea="disse"></span> “esquisito”. (dizer)</p>
      <p>Nós <span class="aukko" data-oikea="fizemos"></span> um bolo. (fazer)</p>
      <p>A Marina <span class="aukko" data-oikea="viu"></span> o Jay com o Marcus. (ver)</p>
      <p>Eles <span class="aukko" data-oikea="tiveram"></span> medo. (ter)</p>
      <p>Eu <span class="aukko" data-oikea="vim"></span> de ônibus. (vir)</p>
      <p>Você <span class="aukko" data-oikea="esteve"></span> na festa? (estar)</p>
      <p>Os homens <span class="aukko" data-oikea="trouxeram"></span> o Jay pra cá. (trazer)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Levar vai trazer?</h3>
    <p class="ohje">Valitse oikea verbi. Mieti, mihin suuntaan liike menee.</p>
    <div class="valinta" data-oikea="traz">
      <p class="kysymys">Maia, ___ um café pra mim, por favor. (tuo tänne)</p>
      <div class="vaihtoehdot"><button type="button">leva</button><button type="button">traz</button></div>
    </div>
    <div class="valinta" data-oikea="levaram">
      <p class="kysymys">Os homens ___ o Jay da festa pro carro. (veivät pois)</p>
      <div class="vaihtoehdot"><button type="button">levaram</button><button type="button">trouxeram</button></div>
    </div>
    <div class="valinta" data-oikea="levo">
      <p class="kysymys">Eu ___ você pra casa. (viedä)</p>
      <div class="vaihtoehdot"><button type="button">trago</button><button type="button">levo</button></div>
    </div>
    <div class="valinta" data-oikea="trouxe">
      <p class="kysymys">O Anderson ___ as cartas aqui pra casa. (toi tänne)</p>
      <div class="vaihtoehdot"><button type="button">levou</button><button type="button">trouxe</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Kuka on kyseessä?</h3>
    <p class="ohje">Kuuntele kuvaus ja valitse, onko kyse Jaysta vai Marcuksesta.</p>
    <div class="valinta" data-kuuntele="Ele é baixo e usa óculos redondos." data-oikea="Marcus">
      <p class="kysymys">Kuka?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">Marcus</button></div>
    </div>
    <div class="valinta" data-kuuntele="Ele é alto e tem olhos azuis e barba." data-oikea="Jay">
      <p class="kysymys">Kuka?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">Marcus</button></div>
    </div>
    <div class="valinta" data-kuuntele="O cabelo dele é curto e loiro." data-oikea="Jay">
      <p class="kysymys">Kuka?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">Marcus</button></div>
    </div>
    <div class="valinta" data-kuuntele="Ele tem um topete enorme." data-oikea="Marcus">
      <p class="kysymys">Kuka?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">Marcus</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Yhdistä</h3>
    <p class="ohje">Yhdistä portugali ja suomi.</p>
    <ul class="yhdista">
      <li data-pari="pitkä (ihminen)">alto</li>
      <li data-pari="lyhyt (ihminen)">baixo</li>
      <li data-pari="laiha">magro</li>
      <li data-pari="vaalea">loiro</li>
      <li data-pari="kiharainen">cacheado</li>
      <li data-pari="kalju">careca</li>
      <li data-pari="parta">barba</li>
      <li data-pari="silmälasit">óculos</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause.</p>
    <div class="sanelu" data-puhu="Ele é alto e magro."></div>
    <div class="sanelu" data-puhu="Eu fui à festa."></div>
    <div class="sanelu" data-puhu="O Marcus fez uma coisa terrível."></div>
    <div class="sanelu" data-puhu="Ela disse que veio de carro."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Minä näin Jayn kolmelta.</p><p class="s" data-fi="Minä näin Jayn kolmelta.">Eu vi o Jay às três.</p></div>
    <div class="kaanna"><p class="fi">Mitä hän sanoi?</p><p class="s" data-fi="Mitä hän sanoi?">O que ele disse?</p></div>
    <div class="kaanna"><p class="fi">Maialla on pitkät mustat hiukset.</p><p class="s" data-fi="Maialla on pitkät mustat hiukset.">A Maia tem cabelo comprido e preto.</p></div>
    <div class="kaanna"><p class="fi">He veivät Jayn mäelle.</p><p class="s" data-fi="He veivät Jayn mäelle.">Eles levaram o Jay pro morro.</p></div>
    <div class="kaanna"><p class="fi">Miksi sinä et tullut juhliin?</p><p class="s" data-fi="Miksi sinä et tullut juhliin?">Por que você não veio à festa?</p></div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. Paino</h3>
    <p class="ohje">Napsauta painollista tavua.</p>
    <p><span class="paino" data-tavut="a|zul" data-oikea="2"></span> <span class="paino" data-tavut="ma|gro" data-oikea="1"></span> <span class="paino" data-tavut="loi|ro" data-oikea="1"></span> <span class="paino" data-tavut="cas|ta|nho" data-oikea="2"></span> <span class="paino" data-tavut="ca|re|ca" data-oikea="2"></span> <span class="paino" data-tavut="bar|ba" data-oikea="1"></span> <span class="paino" data-tavut="to|pe|te" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Como o Jay é?</summary>
      <p class="s" data-fi="Jay on pitkä ja laiha. Hänellä on vaaleat hiukset ja parta.">O Jay é alto e magro. Ele tem cabelo loiro e barba.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Como o Marcus é?</summary>
      <p class="s" data-fi="Marcus on lyhyt. Hän käyttää isoja silmälaseja ja hänellä on iso töyhtö.">O Marcus é baixo. Ele usa óculos grandes e tem um topete enorme.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Quando você viu o Jay pela última vez?</summary>
      <p class="s" data-fi="Näin hänet kolmelta yöllä.">Eu vi o Jay às três da manhã.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Como é o seu cabelo?</summary>
      <p class="s" data-fi="Minun hiukseni ovat lyhyet ja ruskeat. (muuta omasi)">O meu cabelo é curto e castanho.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l17">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l17-kuvaus" lang="pt-BR">
      <div class="kal-yla"><b>Procura-se!</b><small>kuvaile joku tuttu (tai itsesi) etsintäkuulutukseen</small></div>
      <div class="kal-rivit">
        <label>Nome <input name="nimi" placeholder="o meu irmão, Kouvonen"></label>
        <label>Ele / Ela é… <input name="on" placeholder="Ele é alto e magro."></label>
        <label>Tem… <input name="tukka" placeholder="Ele tem cabelo curto e loiro."></label>
        <label>Usa… <input name="kayttaa" placeholder="Ele usa óculos escuros."></label>
        <label>Está de… <input name="vaatteet" placeholder="Ele está de jaqueta preta."></label>
      </div>
    </div>
    <p>Kuvaile kirjallisesti yksi tuttu ihminen (4–5 lausetta): pituus, hiukset, silmät, vaatteet. Kirjoita sitten kolme lausetta siitä, mitä teit eilen, käyttäen kolmea epäsäännöllistä perfektiä (<span class="pt">fui, fiz, vi, tive, disse</span>…). Sano teksti ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Maia on keskipitkä. Hänellä on pitkät mustat hiukset ja ruskeat silmät.">A Maia é de altura média. Ela tem cabelo comprido e preto e olhos castanhos.</p>
      <p class="s" data-fi="Hän käyttää usein sinistä paitaa.">Ela usa muitas vezes uma camiseta azul.</p>
      <p class="s" data-fi="Eilen menin töihin, ja minulla oli paljon työtä.">Ontem eu fui ao trabalho e tive muito trabalho.</p>
      <p class="s" data-fi="Illalla tein illallisen, ja Maia sanoi: ”Tämä on loistavaa!”">À noite eu fiz o jantar, e a Maia disse: “Está ótimo!”</p>
      <p class="s" data-fi="Näin myös Walkerin videopuhelussa.">Eu vi também o Walker na videochamada.</p>
    </details>
  </div>
</section>
`
});
