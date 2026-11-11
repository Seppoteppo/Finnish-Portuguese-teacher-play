/* Jakso 13: Perheen arki. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l13',
  lyhyt: '13',
  jakso: 'Jakso 13',
  otsikko: 'Päivärutiini: refleksiiviverbit',
  lahde: 'Aihe: päivärutiini ja harrastukset · Kielioppi: refleksiiviverbit · Ääntäminen: vokaalien kertaus',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi, kotona Belo Horizontessa' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, opettelee portugalia' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 1, kuvaus: 'Maian äiti, eläkkeellä oleva sosiaalityöntekijä' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 1, kuvaus: 'Maian isä, eläkkeellä oleva professori; pilates, kalastus ja huuliharppu' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 2, kuvaus: 'Maian veli; jakaa naapureille postin joka päivä' }
  },

  aiheet: ['aika', 'toiminta', 'vapaa', 'koti', 'ihmiset'],

  sanasto: ['acordar', 'levantar-se', 'tomar banho', 'escovar os dentes', 'vestir-se', 'almoçar', 'deitar-se', 'dormir', 'cedo', 'tarde',
    'todo dia', 'às vezes', 'sempre', 'nunca', 'fazer pilates', 'pescar', 'tocar gaita', 'gaita', 'vizinho', 'bairro',
    'carta', 'carteiro', 'entregar', 'preguiçoso', 'lembrar-se', 'divertir-se', 'sentir-se', 'sentar-se', 'três vezes por semana'],

  sanat: {
    // dialogi
    'dos': { fi: '-sta, -stä (maskuliinin monikko)', aa: 'dus', ipa: '[dus]', sl: 'prepositio + artikkeli', huom: '{de} + {os}' },
    'das': { fi: '-sta, -stä (feminiinin monikko)', aa: 'das', ipa: '[das]', sl: 'prepositio + artikkeli', huom: '{de} + {as}' },
    'horas': { fi: 'tunnit; kello', aa: 'O-ras', ipa: '[ˈɔɾɐs]', sl: 'substantiivi, feminiini, monikko', huom: '”São sete horas” = kello on seitsemän' },
    'acordada': { fi: 'hereillä (feminiinisanan edellä)', aa: 'a-koh-DA-da', ipa: '[akohˈdadɐ]', sl: 'adjektiivi', huom: 'maskuliini ”acordado”' },
    'levanta': { fi: 'nostaa; nousee ylös', aa: 'le-VÃ-ta', ipa: '[leˈvɐ̃tɐ]', sl: 'verbi {levantar-se}', huom: '”você se levanta” = sinä nouset' },
    'levanto': { fi: 'minä nousen', aa: 'le-VÃ-tu', ipa: '[leˈvɐ̃tu]', sl: 'verbi {levantar-se}' },
    'levantam': { fi: 'he nousevat; te nousette', aa: 'le-VÃ-tãu', ipa: '[leˈvɐ̃tɐ̃w]', sl: 'verbi {levantar-se}' },
    'levantar-se': { fi: 'nousta ylös', aa: 'le-vã-TAH-si', ipa: '[levɐ̃ˈtahsi]', sl: 'refleksiiviverbi, perusmuoto', huom: 'eu {me} levanto, você {se} levanta' },
    'às': { fi: 'kello (aikaa ilmaistaessa); -lle (feminiinin monikko)', aa: 'as', ipa: '[as]', sl: 'prepositio + artikkeli', huom: '{a} + {as}; ”às seis” = kuudelta' },
    'toma': { fi: 'ottaa; juo; syö (aamiaista)', aa: 'TÕ-ma', ipa: '[ˈtõmɐ]', sl: 'verbi {tomar}', huom: '”tomar café” = juoda kahvia, syödä aamiaista' },
    'pilates': { fi: 'pilates', aa: 'pi-LA-tsis', ipa: '[piˈlatʃis]', sl: 'substantiivi, maskuliini' },
    'fazer pilates': { fi: 'tehdä pilatesta', aa: 'fa-ZEH pi-LA-tsis', ipa: '[faˈzeh piˈlatʃis]', sl: 'ilmaus' },
    'vezes': { fi: 'kertaa', aa: 'VE-zis', ipa: '[ˈvezis]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {vez}' },
    'três vezes por semana': { fi: 'kolme kertaa viikossa', aa: 'TREZ VE-zis poh se-MÃ-na', ipa: '[tɾez ˈvezis poh seˈmɐ̃nɐ]', sl: 'ilmaus' },
    'sente': { fi: 'tuntee; hän tuntee', aa: 'SẼ-tsi', ipa: '[ˈsẽtʃi]', sl: 'verbi {sentir}' },
    'sinto': { fi: 'minä tunnen', aa: 'SĨ-tu', ipa: '[ˈsĩtu]', sl: 'verbi {sentir}', huom: 'e muuttuu i:ksi eu-muodossa' },
    'sentir-se': { fi: 'tuntea olonsa', aa: 'sẽ-TSIH-si', ipa: '[sẽˈtʃihsi]', sl: 'refleksiiviverbi, perusmuoto', huom: '”Eu me sinto bem” = minulla on hyvä olo' },
    'dorme': { fi: 'nukkuu; sinä nukut', aa: 'DOH-mi', ipa: '[ˈdɔhmi]', sl: 'verbi {dormir}' },
    'durmo': { fi: 'minä nukun', aa: 'DUH-mu', ipa: '[ˈduhmu]', sl: 'verbi {dormir}' },
    'deito': { fi: 'minä menen makuulle', aa: 'DEI-tu', ipa: '[ˈdejtu]', sl: 'verbi {deitar-se}' },
    'deita': { fi: 'menee makuulle', aa: 'DEI-ta', ipa: '[ˈdejtɐ]', sl: 'verbi {deitar-se}' },
    'deitam': { fi: 'he menevät makuulle; te menette', aa: 'DEI-tãu', ipa: '[ˈdejtɐ̃w]', sl: 'verbi {deitar-se}' },
    'deitar': { fi: 'laittaa makuulle', aa: 'dei-TAH', ipa: '[dejˈtah]', sl: 'verbi, perusmuoto', huom: 'tavallisesti {deitar-se}' },
    'deitar-se': { fi: 'mennä makuulle, mennä nukkumaan', aa: 'dei-TAH-si', ipa: '[dejˈtahsi]', sl: 'refleksiiviverbi, perusmuoto', huom: 'eu {me} deito' },
    'onze': { fi: 'yksitoista', aa: 'Õ-zi', ipa: '[ˈõzi]', sl: 'lukusana' },
    'duas': { fi: 'kaksi (feminiinisanan edellä)', aa: 'DU-as', ipa: '[ˈduɐs]', sl: 'lukusana', huom: 'maskuliini {dois}; ”às duas” = kahdelta' },
    'lembro': { fi: 'minä muistan', aa: 'LẼ-bru', ipa: '[ˈlẽbɾu]', sl: 'verbi {lembrar-se}', huom: '”eu me lembro” = minä muistan' },
    'lembrar-se': { fi: 'muistaa', aa: 'lẽ-BRAH-si', ipa: '[lẽˈbɾahsi]', sl: 'refleksiiviverbi, perusmuoto', huom: 'espanjaksi ”acordarse”; portugaliksi {acordar} = herätä!' },
    'entrego': { fi: 'minä jaan, luovutan', aa: 'ẽ-TRE-gu', ipa: '[ẽˈtɾeɡu]', sl: 'verbi {entregar}' },
    'entrega': { fi: 'jakaa, luovuttaa', aa: 'ẽ-TRE-ga', ipa: '[ẽˈtɾɛɡɐ]', sl: 'verbi {entregar}' },
    'cartas': { fi: 'kirjeet', aa: 'KAH-tas', ipa: '[ˈkahtɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {carta}' },
    'carta': { fi: 'kirje', aa: 'KAH-ta', ipa: '[ˈkahtɐ]', sl: 'substantiivi, feminiini' },
    'carteiro': { fi: 'postinkantaja', aa: 'kah-TEI-ru', ipa: '[kahˈtejɾu]', sl: 'substantiivi, maskuliini' },
    'vizinho': { fi: 'naapuri', aa: 'vi-ZĨ-nju', ipa: '[viˈzĩɲu]', sl: 'substantiivi, maskuliini', huom: 'nainen ”vizinha”' },
    'vizinhos': { fi: 'naapurit', aa: 'vi-ZĨ-njus', ipa: '[viˈzĩɲus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {vizinho}' },
    'bairro': { fi: 'kaupunginosa, naapurusto', aa: 'BAI-hu', ipa: '[ˈbajhu]', sl: 'substantiivi, maskuliini' },
    'veste': { fi: 'pukee; pukeutuu', aa: 'VES-tsi', ipa: '[ˈvɛstʃi]', sl: 'verbi {vestir-se}' },
    'vestir-se': { fi: 'pukeutua', aa: 'ves-TSIH-si', ipa: '[vesˈtʃihsi]', sl: 'refleksiiviverbi, perusmuoto', huom: 'eu {me} visto, você {se} veste' },
    'vestimos': { fi: 'me pukeudumme', aa: 'ves-TSI-mus', ipa: '[vesˈtʃimus]', sl: 'verbi {vestir-se}' },
    'pega': { fi: 'ottaa, tarttuu', aa: 'PE-ga', ipa: '[ˈpɛɡɐ]', sl: 'verbi {pegar}', huom: 'espanjan ansa: espanjassa ”pegar” = lyödä, liimata; portugalissa ”ottaa, napata”' },
    'sai': { fi: 'lähtee', aa: 'SAI', ipa: '[saj]', sl: 'verbi {sair}' },
    'saio': { fi: 'minä lähden', aa: 'SAI-u', ipa: '[ˈsaju]', sl: 'verbi {sair}' },
    'conheço': { fi: 'minä tunnen', aa: 'ko-NJE-su', ipa: '[koˈɲesu]', sl: 'verbi {conhecer}' },
    'ando': { fi: 'minä kävelen', aa: 'Ã-du', ipa: '[ˈɐ̃du]', sl: 'verbi {andar}', huom: '”andar rápido” = kävellä nopeasti' },
    'converso': { fi: 'minä juttelen', aa: 'kõ-VEH-su', ipa: '[kõˈvɛhsu]', sl: 'verbi {conversar}' },
    'cozinho': { fi: 'minä laitan ruokaa', aa: 'ko-ZĨ-nju', ipa: '[koˈzĩɲu]', sl: 'verbi {cozinhar}' },
    'cozinhar': { fi: 'laittaa ruokaa', aa: 'ko-zĩ-NJAH', ipa: '[kozĩˈɲah]', sl: 'verbi, perusmuoto' },
    'divirto': { fi: 'minä pidän hauskaa', aa: 'di-VIH-tu', ipa: '[dʒiˈvihtu]', sl: 'verbi {divertir-se}' },
    'diverte': { fi: 'pitää hauskaa; hauskuuttaa', aa: 'di-VEH-tsi', ipa: '[dʒiˈvɛhtʃi]', sl: 'verbi {divertir-se}' },
    'divertir-se': { fi: 'pitää hauskaa', aa: 'di-veh-TSIH-si', ipa: '[dʒivehˈtʃihsi]', sl: 'refleksiiviverbi, perusmuoto', huom: 'eu {me} divirto' },
    'pesco': { fi: 'minä kalastan', aa: 'PES-ku', ipa: '[ˈpesku]', sl: 'verbi {pescar}' },
    'pesca': { fi: 'kalastaa', aa: 'PES-ka', ipa: '[ˈpɛskɐ]', sl: 'verbi {pescar}' },
    'pescar': { fi: 'kalastaa', aa: 'pes-KAH', ipa: '[pesˈkah]', sl: 'verbi, perusmuoto' },
    'toco': { fi: 'minä soitan', aa: 'TO-ku', ipa: '[ˈtoku]', sl: 'verbi {tocar}' },
    'tocar gaita': { fi: 'soittaa huuliharppua', aa: 'to-KAH GAI-ta', ipa: '[toˈkah ˈɡajtɐ]', sl: 'ilmaus' },
    'gaita': { fi: 'huuliharppu', aa: 'GAI-ta', ipa: '[ˈɡajtɐ]', sl: 'substantiivi, feminiini', huom: 'myös ”gaita de boca”' },
    'preguiçoso': { fi: 'laiska; laiskuri', aa: 'pre-gi-SO-zu', ipa: '[pɾeɡiˈsozu]', sl: 'adjektiivi, substantiivi, maskuliini', huom: 'feminiini ”preguiçosa”' },
    'sei': { fi: 'minä tiedän', aa: 'SEI', ipa: '[sej]', sl: 'verbi {saber}' },
    'sentam': { fi: 'he istuutuvat; te istuudutte', aa: 'SẼ-tãu', ipa: '[ˈsẽtɐ̃w]', sl: 'verbi {sentar-se}' },
    'senta': { fi: 'istuutuu; istu!', aa: 'SẼ-ta', ipa: '[ˈsẽtɐ]', sl: 'verbi {sentar-se}', huom: 'puhekielessä myös käsky: ”senta aí!”' },
    'sentar-se': { fi: 'istuutua', aa: 'sẽ-TAH-si', ipa: '[sẽˈtahsi]', sl: 'refleksiiviverbi, perusmuoto', huom: 'eu {me} sento' },
    'tomo': { fi: 'minä otan; minä juon', aa: 'TO-mu', ipa: '[ˈtomu]', sl: 'verbi {tomar}' },
    'leio': { fi: 'minä luen', aa: 'LEI-u', ipa: '[ˈleju]', sl: 'verbi {ler}' },
    'filmes': { fi: 'elokuvat', aa: 'FIU-mis', ipa: '[ˈfiwmis]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {filme}' },
    'ver filmes': { fi: 'katsoa elokuvia', aa: 'VEH FIU-mis', ipa: '[veh ˈfiwmis]', sl: 'ilmaus' },
    'vê': { fi: 'näkee; sinä näet', aa: 'VE', ipa: '[ve]', sl: 'verbi {ver}', huom: '”a gente se vê” = nähdään' },
    'amam': { fi: 'he rakastavat', aa: 'Ã-mãu', ipa: '[ˈɐ̃mɐ̃w]', sl: 'verbi {amar}' },
    'chamar-se': { fi: 'olla nimeltään', aa: 'sha-MAH-si', ipa: '[ʃaˈmahsi]', sl: 'refleksiiviverbi, perusmuoto', huom: 'eu {me} chamo' },
    'escovar': { fi: 'harjata', aa: 'es-ko-VAH', ipa: '[eskoˈvah]', sl: 'verbi, perusmuoto' },
    'dentes': { fi: 'hampaat', aa: 'DẼ-tsis', ipa: '[ˈdẽtʃis]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {dente}' },
    'escovar os dentes': { fi: 'harjata hampaat', aa: 'es-ko-VAH uz DẼ-tsis', ipa: '[eskoˈvah uz ˈdẽtʃis]', sl: 'ilmaus' },
    'almoçar': { fi: 'syödä lounas', aa: 'au-mo-SAH', ipa: '[awmoˈsah]', sl: 'verbi, perusmuoto', huom: '{almoço} = lounas' },
    'almoço': { fi: 'lounas', aa: 'au-MO-su', ipa: '[awˈmosu]', sl: 'substantiivi, maskuliini' },
    'tomar banho': { fi: 'käydä suihkussa tai kylvyssä', aa: 'to-MAH BÃ-nju', ipa: '[toˈmah ˈbɐ̃ɲu]', sl: 'ilmaus', huom: 'kirjaimellisesti ”ottaa kylpy”' },
    'tomar café da manhã': { fi: 'syödä aamiaista', aa: 'to-MAH ka-FE da mã-NJÃ', ipa: '[toˈmah kaˈfɛ da mɐ̃ˈɲɐ̃]', sl: 'ilmaus', huom: 'myös lyhyesti ”tomar café”' },
    'à tarde': { fi: 'iltapäivällä', aa: 'a TAH-di', ipa: '[a ˈtahdʒi]', sl: 'ilmaus', huom: '{a} + {a} tarde' },
    'à noite': { fi: 'illalla, yöllä', aa: 'a NOI-tsi', ipa: '[a ˈnojtʃi]', sl: 'ilmaus' },
    'todo dia': { fi: 'joka päivä', aa: 'TO-du DI-a', ipa: '[ˈtodu ˈdʒiɐ]', sl: 'ilmaus' },
    'às vezes': { fi: 'joskus', aa: 'AZ VE-zis', ipa: '[az ˈvezis]', sl: 'ilmaus', huom: 'kirjaimellisesti ”kerroilla”' },
    'caminhar': { fi: 'kävellä; kävellä retkellä', aa: 'ka-mĩ-NJAH', ipa: '[kamĩˈɲah]', sl: 'verbi, perusmuoto' },
    'pintar': { fi: 'maalata', aa: 'pĩ-TAH', ipa: '[pĩˈtah]', sl: 'verbi, perusmuoto' },
    'jogar futebol': { fi: 'pelata jalkapalloa', aa: 'zho-GAH fu-tsi-BOU', ipa: '[ʒoˈɡah futʃiˈbɔw]', sl: 'ilmaus' },
    'futebol': { fi: 'jalkapallo', aa: 'fu-tsi-BOU', ipa: '[futʃiˈbɔw]', sl: 'substantiivi, maskuliini' },
    // ääntäminen
    'ovos': { fi: 'munat', aa: 'O-vus', ipa: '[ˈɔvus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {ovo}; monikossa avoin o' },
    'novos': { fi: 'uudet', aa: 'NO-vus', ipa: '[ˈnɔvus]', sl: 'adjektiivi, maskuliini, monikko', huom: 'yksikkö {novo}; monikossa avoin o' },
    'fogos': { fi: 'ilotulitus, ilotulitteet', aa: 'FO-gus', ipa: '[ˈfɔɡus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {fogo} = tuli' },
    'pau': { fi: 'keppi, sauva', aa: 'PAU', ipa: '[paw]', sl: 'substantiivi, maskuliini', huom: 'vrt. {pão}' },
    'lã': { fi: 'villa', aa: 'LÃ', ipa: '[lɐ̃]', sl: 'substantiivi, feminiini', huom: 'vrt. {lá}' },
    'boi': { fi: 'härkä', aa: 'BOI', ipa: '[boj]', sl: 'substantiivi, maskuliini' },
    // kulttuuri
    'atlético mineiro': { fi: 'Clube Atlético Mineiro (Belo Horizonten jalkapalloseura)', aa: 'a-tsi-LE-tsi-ku mi-NEI-ru', ipa: '[atʃiˈlɛtʃiku miˈnejɾu]', sl: 'seuran nimi', huom: 'lempinimi {galo}' },
    'atlético': { fi: 'Atlético (Belo Horizonten jalkapalloseura)', aa: 'a-tsi-LE-tsi-ku', ipa: '[atʃiˈlɛtʃiku]', sl: 'seuran nimi' },
    'mineiro': { fi: 'Minas Geraisin, minasilainen', aa: 'mi-NEI-ru', ipa: '[miˈnejɾu]', sl: 'adjektiivi, substantiivi', huom: 'Minas Geraisin asukas on {mineiro}' },
    'galo': { fi: 'kukko', aa: 'GA-lu', ipa: '[ˈɡalu]', sl: 'substantiivi, maskuliini', huom: 'Atléticon lempinimi' },
    'cruzeiro': { fi: 'Cruzeiro (Belo Horizonten jalkapalloseura); risti', aa: 'kru-ZEI-ru', ipa: '[kɾuˈzejɾu]', sl: 'seuran nimi' },
    'raposa': { fi: 'kettu', aa: 'ha-PO-za', ipa: '[haˈpozɐ]', sl: 'substantiivi, feminiini', huom: 'Cruzeiron lempinimi' },
    'palestra italia': { fi: 'Palestra Italia (Cruzeiron entinen nimi)', aa: 'pa-LES-tra i-ta-LI-a', ipa: '[paˈlɛstɾɐ itaˈliɐ]', sl: 'seuran nimi' },
    'palestra': { fi: 'luento; harjoitussali (italiaa)', aa: 'pa-LES-tra', ipa: '[paˈlɛstɾɐ]', sl: 'substantiivi, feminiini' },
    'italia': { fi: 'Italia (nimessä italialainen kirjoitusasu)', aa: 'i-ta-LI-a', ipa: '[itaˈliɐ]', sl: 'maan nimi', huom: 'portugaliksi ”Itália”' },
    'clássico mineiro': { fi: 'Clássico Mineiro (Atléticon ja Cruzeiron derby)', aa: 'KLA-si-ku mi-NEI-ru', ipa: '[ˈklasiku miˈnejɾu]', sl: 'ilmaus' },
    'clássico': { fi: 'klassikko, derby', aa: 'KLA-si-ku', ipa: '[ˈklasiku]', sl: 'substantiivi, maskuliini' },
    'torcedores': { fi: 'kannattajat, fanit', aa: 'toh-se-DO-ris', ipa: '[tohseˈdoɾis]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö ”torcedor”' },
    'torcer': { fi: 'kannustaa, kannattaa', aa: 'toh-SEH', ipa: '[tohˈseh]', sl: 'verbi, perusmuoto', huom: '”torcer para o Atlético” = kannattaa Atléticoa' },
    'mineirão': { fi: 'Mineirão (Belo Horizonten suuri stadion)', aa: 'mi-nei-RÃU', ipa: '[minejˈɾɐ̃w]', sl: 'paikan nimi' },
    'cruzeiro do sul': { fi: 'Etelän risti (tähdistö)', aa: 'kru-ZEI-ru du SUU', ipa: '[kɾuˈzejɾu du suw]', sl: 'ilmaus' },
    'semana': { fi: 'viikko', aa: 'se-MÃ-na', ipa: '[seˈmɐ̃nɐ]', sl: 'substantiivi, feminiini', huom: '”por semana” = viikossa; ”fim de semana” = viikonloppu' },
    'sempre': { fi: 'aina', aa: 'SẼ-pri', ipa: '[ˈsẽpɾi]', sl: 'adverbi' },
    'levantamos': { fi: 'me nousemme', aa: 'le-vã-TÃ-mus', ipa: '[levɐ̃ˈtɐ̃mus]', sl: 'verbi {levantar-se}' },
    'sento': { fi: 'minä istuudun', aa: 'SẼ-tu', ipa: '[ˈsẽtu]', sl: 'verbi {sentar-se}' },
    'lembra': { fi: 'muistaa; sinä muistat', aa: 'LẼ-bra', ipa: '[ˈlẽbɾɐ]', sl: 'verbi {lembrar-se}' },
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kertoa oman päivärutiinisi: milloin nouset, syöt ja menet nukkumaan.</li>
  <li>Osaat kysyä kellonaikaa ja kuinka usein jokin tapahtuu.</li>
  <li>Osaat käyttää refleksiiviverbejä: <span class="pt">eu me levanto</span>, <span class="pt">ele se veste</span>.</li>
  <li>Osaat kertoa harrastuksistasi ja kuunnella perheen arjesta.</li>
</ul>
<p data-paikka="bh-bairro">Belo Horizonte, Maian vanhempien koti. Jay herää ensimmäisenä aamuna ja huomaa, että perhe on ollut hereillä jo tunteja: Walker lähtee pilatekseen ja Anderson jakaa kirjeet naapureille.</p>

<section class="osio" data-paikka="bh-bairro">
  <h2>Dialogi: A rotina da família</h2>
  <p class="ohje">Kuuntele ensin koko dialogi. Huomaa Jayn virhe: espanjan <i>acordarse</i> tarkoittaa ”muistaa”, mutta portugalin <span class="pt">acordar</span> tarkoittaa ”herätä”. Paina sitten roolileikkiä ja puhu Jayn repliikit.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Belo Horizonte, Maian vanhempien koti. Kello on seitsemän aamulla.">Belo Horizonte, casa dos pais da Maia. São sete horas da manhã.</p>
    <p class="s" data-h="kertoja" data-fi="Perhe on jo hereillä. Jay nousee ylös vasta nyt.">A família já está acordada. O Jay se levanta agora.</p>
    <p class="s" data-h="marta" data-fi="Huomenta, Jay! Sinä nouset myöhään, eikö niin?">Bom dia, Jay! Você se levanta tarde, né?</p>
    <p class="s" data-h="jay" data-fi="Huomenta! Täällä kaikki nousevat aikaisin! Mihin aikaan Walker nousee?">Bom dia! Aqui todo mundo se levanta cedo! A que horas o Walker se levanta?</p>
    <p class="s" data-h="marta" data-fi="Kuudelta. Sitten hän juo aamukahvin ja menee pilatekseen.">Às seis. Depois ele toma café e vai para o pilates.</p>
    <p class="s" data-h="jay" data-fi="Pilatekseen? Maian isä tekee pilatesta?">Pilates? O pai da Maia faz pilates?</p>
    <p class="s" data-h="maia" data-fi="Kyllä, kolme kertaa viikossa. Hän sanoo tuntevansa itsensä nuoreksi.">Faz, três vezes por semana. Ele diz que se sente jovem.</p>
    <p class="s" data-h="walker" data-fi="Huomenta, Jay! Nukutko täällä hyvin?">Bom dia, Jay! Você dorme bem aqui?</p>
    <p class="s" data-h="jay" data-fi="Hyvin! Menen nukkumaan yhdeltätoista, ja sen jälkeen en ”herää” mihinkään! (Jay tarkoittaa: en muista mitään)">Muito bem! Eu me deito às onze e depois eu não me acordo de nada!</p>
    <p class="s" data-h="walker" data-fi="Kuinka hauskaa! ”Acordar” on herätä aamulla. Muistamisesta sanotaan ”me lembro”.">Que engraçado! “Acordar” é acordar de manhã. Para lembrar, a gente diz “me lembro”.</p>
    <p class="s" data-h="jay" data-fi="Ai, selvä! Yhdentoista jälkeen en muista mitään.">Ah, entendi! Depois das onze, eu não me lembro de nada.</p>
    <p class="s" data-h="anderson" data-fi="Huomenta! Minä jaan naapureiden kirjeet.">Bom dia! Eu entrego as cartas dos vizinhos.</p>
    <p class="s" data-h="marta" data-fi="Anderson pukeutuu, ottaa laukun ja lähtee kahdeksalta. Hän tuntee koko kaupunginosan.">O Anderson se veste, pega a bolsa e sai às oito. Ele conhece o bairro inteiro.</p>
    <p class="s" data-h="anderson" data-fi="Kaikki tuntevat minut, ja minä tunnen kaikki!">Todo mundo me conhece e eu conheço todo mundo!</p>
    <p class="s" data-h="jay" data-fi="Se on tärkeä työ, Anderson. Voinko tulla mukaasi?">É um trabalho importante, Anderson. Posso ir com você?</p>
    <p class="s" data-h="anderson" data-fi="Voit! Mutta minä kävelen nopeasti, selvä?">Pode! Mas eu ando rápido, tá?</p>
    <p class="s" data-h="marta" data-fi="Ja minä juttelen naapureiden kanssa ja laitan ruokaa. Minulla on kovasti hauskaa!">E eu converso com os vizinhos e cozinho. Me divirto muito!</p>
    <p class="s" data-h="walker" data-fi="Iltapäivisin minä kalastan tai soitan huuliharppua.">À tarde eu pesco ou toco gaita.</p>
    <p class="s" data-h="jay" data-fi="Entä illalla? Menettekö te nukkumaan aikaisin?">E à noite? Vocês se deitam cedo?</p>
    <p class="s" data-h="marta" data-fi="Me menemme nukkumaan kymmeneltä.">A gente se deita às dez.</p>
    <p class="s" data-h="jay" data-fi="Kymmeneltäkö? Minä menen nukkumaan kahdelta!">Às dez? Eu me deito às duas!</p>
    <p class="s" data-h="maia" data-fi="Tiedän, laiskuri. Huomenna nouset ylös Andersonin kanssa!">Eu sei, preguiçoso. Amanhã você se levanta com o Anderson!</p>
  </div>
</section>

<section class="osio" data-paikka="bh-bairro">
  <h2>Perheen päivä kellotaululla</h2>
  <p class="ohje">Napauta riviä: kello kääntyy oikeaan aikaan ja kertoja lukee lauseen. ”Soita kaikki” käy läpi koko päivän aamusta yöhön. Huomaa refleksiiviverbit: <span class="pt">se levanta, se veste, se deitam</span>.</p>
  <div class="aikajana">
    <p data-aika="6:00" data-hahmo="walker" data-fi="Walker nousee kuudelta.">O Walker se levanta às seis.</p>
    <p data-aika="6:30" data-hahmo="walker" data-fi="Hän juo aamukahvin ja menee pilatekseen.">Ele toma café e vai para o pilates.</p>
    <p data-aika="7:00" data-hahmo="jay" data-fi="Jay nousee seitsemältä. Myöhään!">O Jay se levanta às sete. Tarde!</p>
    <p data-aika="8:00" data-hahmo="anderson" data-fi="Anderson pukeutuu ja lähtee jakamaan kirjeitä.">O Anderson se veste e sai com as cartas.</p>
    <p data-aika="10:00" data-hahmo="marta" data-fi="Marta juttelee naapureiden kanssa.">A Marta conversa com os vizinhos.</p>
    <p data-aika="12:00" data-hahmo="marta" data-fi="Perhe syö lounasta keskipäivällä.">A família almoça ao meio-dia.</p>
    <p data-aika="15:00" data-hahmo="walker" data-fi="Iltapäivällä Walker kalastaa tai soittaa huuliharppua.">À tarde, o Walker pesca ou toca gaita.</p>
    <p data-aika="22:00" data-hahmo="marta" data-fi="Marta ja Walker menevät nukkumaan kymmeneltä.">A Marta e o Walker se deitam às dez.</p>
    <p data-aika="2:00" data-hahmo="jay" data-fi="Jay menee nukkumaan kahdelta yöllä!">O Jay se deita às duas da manhã!</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Aamusta iltaan" data-sanat="acordar,levantar-se,tomar banho,escovar os dentes,vestir-se,tomar café da manhã,almoçar,jantar,deitar-se,dormir"></div>
  <div class="teema" data-otsikko="Milloin ja kuinka usein" data-sanat="cedo,tarde,de manhã,à tarde,à noite,todo dia,sempre,às vezes,nunca,três vezes por semana"></div>
  <div class="teema" data-otsikko="Harrastukset" data-sanat="fazer pilates,pescar,tocar gaita,cozinhar,caminhar,pintar,dançar,ver filmes,jogar futebol,ler"></div>
  <div class="teema" data-otsikko="Naapurusto ja posti" data-sanat="vizinho,bairro,carta,bolsa,entregar,rua"></div>
</section>

<section class="osio">
  <h2>Kielioppi</h2>

  <h3>1. Refleksiiviverbit: levantar-se</h3>
  <p><b>Refleksiiviverbi</b> on verbi, jonka tekijä kohdistaa toiminnan itseensä: nousta (nostaa itsensä ylös), pukeutua (pukea itsensä), mennä nukkumaan (laittaa itsensä makuulle). Suomessa tätä merkitään usein verbin päätteellä (-utua, -eutua). Portugalissa verbin eteen tulee pikkusana, joka kertoo, kuka on tekijä. Sanakirjassa verbin perässä on <span class="pt">-se</span>: <span class="pt">levantar-se</span>.</p>
  <table class="taivutus">
    <tr><td><span class="pt">eu</span></td><td><span class="pt">me levanto</span></td></tr>
    <tr><td><span class="pt">você</span></td><td><span class="pt">se levanta</span></td></tr>
    <tr><td><span class="pt">ele, ela</span></td><td><span class="pt">se levanta</span></td></tr>
    <tr><td><span class="pt">nós</span></td><td><span class="pt">nos levantamos</span></td></tr>
    <tr><td><span class="pt">a gente</span></td><td><span class="pt">se levanta</span></td></tr>
    <tr><td><span class="pt">vocês</span></td><td><span class="pt">se levantam</span></td></tr>
    <tr><td><span class="pt">eles, elas</span></td><td><span class="pt">se levantam</span></td></tr>
  </table>
  <p>Pikkusana vastaa aina tekijää: <span class="pt">eu</span> → <span class="pt">me</span>, <span class="pt">você / ele / ela / a gente / vocês / eles</span> → <span class="pt">se</span>, <span class="pt">nós</span> → <span class="pt">nos</span>. Verbi taipuu kuten tavallinen -ar-verbi. Sanan <span class="pt">você</span> kanssa käytetään aina sanaa <span class="pt">se</span>, ei sanaa <span class="pt">te</span>.</p>
  <ul class="esim">
    <li class="s" data-fi="Minä nousen kuudelta.">Eu me levanto às seis.</li>
    <li class="s" data-fi="Hän pukeutuu ja lähtee.">Ele se veste e sai.</li>
    <li class="s" data-fi="Me menemme nukkumaan kymmeneltä.">A gente se deita às dez.</li>
    <li class="s" data-fi="He istuvat pöytään.">Eles se sentam à mesa.</li>
    <li class="s" data-fi="Minulla on hauskaa.">Eu me divirto.</li>
  </ul>

  <h3>Tavallisimmat refleksiiviverbit</h3>
  <table class="taivutus">
    <tr><td><span class="pt">levantar-se</span> nousta ylös</td><td><span class="pt">eu me levanto, você se levanta</span></td></tr>
    <tr><td><span class="pt">deitar-se</span> mennä makuulle, nukkumaan</td><td><span class="pt">eu me deito, você se deita</span></td></tr>
    <tr><td><span class="pt">sentar-se</span> istuutua</td><td><span class="pt">eu me sento, você se senta</span></td></tr>
    <tr><td><span class="pt">vestir-se</span> pukeutua</td><td><span class="pt">eu me visto, você se veste</span></td></tr>
    <tr><td><span class="pt">sentir-se</span> tuntea olonsa</td><td><span class="pt">eu me sinto, você se sente</span></td></tr>
    <tr><td><span class="pt">divertir-se</span> pitää hauskaa</td><td><span class="pt">eu me divirto, você se diverte</span></td></tr>
    <tr><td><span class="pt">lembrar-se</span> muistaa</td><td><span class="pt">eu me lembro, você se lembra</span></td></tr>
    <tr><td><span class="pt">chamar-se</span> olla nimeltään</td><td><span class="pt">eu me chamo, você se chama</span></td></tr>
  </table>
  <p>Huomaa, että -ir-verbeissä <span class="pt">vestir, sentir, divertir</span> verbin e muuttuu eu-muodossa i:ksi: <span class="pt">visto, sinto, divirto</span>. Sama muutos oli sanoissa <span class="pt">prefiro</span> ja <span class="pt">peço</span>.</p>

  <h3>Paikka lauseessa</h3>
  <p>Kuten muillakin pikkusanoilla, refleksiivipronomini tulee verbin eteen. Kieltosana <span class="pt">não</span> on sen edessä. Kun verbejä on kaksi, pronomini tulee perusmuodon eteen.</p>
  <ul class="esim">
    <li class="s" data-fi="Minä en nouse aikaisin.">Eu não me levanto cedo.</li>
    <li class="s" data-fi="Aion mennä nukkumaan.">Vou me deitar.</li>
    <li class="s" data-fi="Saanko istua?">Posso me sentar?</li>
    <li class="s" data-fi="Mihin aikaan sinä nouset?">A que horas você se levanta?</li>
  </ul>
  <p>Sama pikkusana <span class="pt">se</span> tarkoittaa myös ”toisiaan”: <span class="pt">A gente se vê!</span> (Nähdään!) ja <span class="pt">Eles se amam.</span> (He rakastavat toisiaan.)</p>

  <div class="muista">
    <p><b>Muista:</b> kaikki suomen refleksiiviverbit eivät ole refleksiivisiä portugalissa. Sanotaan <span class="pt">eu acordo</span> (herään), <span class="pt">eu durmo</span> (nukun), <span class="pt">eu vou embora</span> (lähden), ilman pikkusanaa. Puheessa kuulee myös <span class="pt">eu levanto às seis</span> ilman <span class="pt">me</span>-sanaa, mutta oikea muoto on <span class="pt">me levanto</span>.</p>
  </div>

  <h3>Suomeen ja espanjaan verrattuna</h3>
  <p><b>Suomi:</b> pukeutua, nousta, istuutua (pääte -utua, -ua). <b>Espanja:</b> rakenne on lähes sama: <i>me levanto</i> = <span class="pt">me levanto</span>, <i>se sienta</i> = <span class="pt">se senta</span>. Älä silti käännä kaikkea suoraan:</p>
  <table class="taivutus">
    <tr><td>espanja</td><td>portugali</td></tr>
    <tr><td><i>acordarse</i> (muistaa)</td><td><span class="pt">lembrar-se</span> (muistaa) · <span class="pt">acordar</span> = herätä</td></tr>
    <tr><td><i>despertarse</i> (herätä)</td><td><span class="pt">acordar</span></td></tr>
    <tr><td><i>irse</i> (lähteä)</td><td><span class="pt">ir embora</span></td></tr>
    <tr><td><i>ducharse, bañarse</i></td><td><span class="pt">tomar banho</span></td></tr>
    <tr><td><i>quedarse</i> (jäädä)</td><td><span class="pt">ficar</span></td></tr>
  </table>

  <h3>2. Päivä ja toistuvuus</h3>
  <p>Kellonajan kanssa käytetään sanaa <span class="pt">às</span> (”kello”): <span class="pt">às seis</span>, <span class="pt">às sete e meia</span>. Kysyessä sanotaan <span class="pt">A que horas…?</span> Päivänosat ovat <span class="pt">de manhã</span> (aamulla), <span class="pt">à tarde</span> (iltapäivällä), <span class="pt">à noite</span> (illalla, yöllä).</p>
  <table class="taivutus">
    <tr><td><span class="pt">sempre</span></td><td>aina</td></tr>
    <tr><td><span class="pt">todo dia</span></td><td>joka päivä</td></tr>
    <tr><td><span class="pt">três vezes por semana</span></td><td>kolme kertaa viikossa</td></tr>
    <tr><td><span class="pt">às vezes</span></td><td>joskus</td></tr>
    <tr><td><span class="pt">nunca</span></td><td>ei koskaan</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Walker tekee pilatesta kolme kertaa viikossa.">O Walker faz pilates três vezes por semana.</li>
    <li class="s" data-fi="Anderson jakaa postin joka päivä.">O Anderson entrega as cartas todo dia.</li>
    <li class="s" data-fi="Jay ei koskaan nouse aikaisin.">O Jay nunca se levanta cedo.</li>
    <li class="s" data-fi="Joskus me kalastamme.">Às vezes a gente pesca.</li>
  </ul>
  <p>Kieltolauseessa <span class="pt">nunca</span> voi olla ennen verbiä ilman erillistä <span class="pt">não</span>-sanaa: <span class="pt">Eu nunca me deito cedo.</span> Jos <span class="pt">nunca</span> on verbin jälkeen, tarvitaan <span class="pt">não</span> myös: <span class="pt">Eu não me deito cedo nunca.</span></p>
</section>

<section class="osio">
  <h2>Ääntäminen: vokaalien kertaus</h2>
  <p>Kertaa vokaalit. Portugalin vokaalit ovat suomea monipuolisempia.</p>
  <div class="saanto">
    <h3>1. Avoin ja suljettu e ja o</h3>
    <p>Painollisessa tavussa <span class="pt">e</span> ja <span class="pt">o</span> voivat olla avoimia (é, ó, suu auki) tai suljettuja (ê, ô, suu pienemmällä aukolla). Painomerkki kertoo laadun. Ilman merkkiä laatu pitää oppia sanan mukana. Monikossa o voi muuttua avoimeksi, vaikka kirjoitus on sama:</p>
    <ul class="esim">
      <li class="s" data-fi="muna">ovo</li>
      <li class="s" data-fi="munat">ovos</li>
      <li class="s" data-fi="uusi">novo</li>
      <li class="s" data-fi="uudet">novos</li>
      <li class="s" data-fi="tuli">fogo</li>
      <li class="s" data-fi="ilotulitus">fogos</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>2. Painoton vokaali sanan lopussa</h3>
    <p>Sanan lopussa painoton a on hyvin lyhyt ja heikko a-äänne (IPA ɐ), painoton e on i ja painoton o on u. Suomalaiselle helpoin tapa on sanoa lopun a lyhyesti ja heikosti, jotta se ei kuulosta painolliselta.</p>
    <ul class="esim">
      <li class="s">casa</li>
      <li class="s">leite</li>
      <li class="s">trabalho</li>
      <li class="s">pilates</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>3. Nasaali ja suullinen vokaali</h3>
    <p>Nasaalisuus muuttaa sanan. Kuuntele parit: ero on vain siinä, kulkeeko ilma myös nenän kautta.</p>
    <ul class="esim">
      <li class="s" data-fi="leipä">pão</li>
      <li class="s" data-fi="sauva, keppi">pau</li>
      <li class="s" data-fi="käsi">mão</li>
      <li class="s" data-fi="huono">mau</li>
      <li class="s" data-fi="villa">lã</li>
      <li class="s" data-fi="siellä">lá</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>4. Diftongit</h3>
    <p>Kaksi vokaalia samassa tavussa muodostaa diftongin: <b>ai, ei, oi, au, eu, ou</b>. Toinen vokaali on lyhyt liuku.</p>
    <ul class="esim">
      <li class="s">saia</li>
      <li class="s">leite</li>
      <li class="s">boi</li>
      <li class="s">pouco</li>
      <li class="s">meu</li>
      <li class="s">pau</li>
    </ul>
  </div>
</section>

<aside class="kulttuuri" data-paikka="mineirao">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Atlético, Cruzeiro ja Mineirão</h3>
  <figure class="kuva" data-kuva="mineirao"></figure>
  <p>Belo Horizontessa on kaksi suurta jalkapalloseuraa, ja kaupunki on jaettu niiden välillä. <span class="pt">Atlético Mineiro</span> eli Atlético (lempinimi <span class="pt">Galo</span>, ”kukko”) pelaa mustavalkoisissa paidoissa ja on perustettu vuonna 1908. <span class="pt">Cruzeiro</span> (lempinimi <span class="pt">Raposa</span>, ”kettu”) pelaa sinivalkoisissa paidoissa ja on perustettu vuonna 1921. Nimi tulee eteläisen taivaan Etelän Rististä (<span class="pt">Cruzeiro do Sul</span>), joka on seuran vaakunassa. Alkuun seura oli nimeltään <span class="pt">Palestra Italia</span>, ja nykyisen nimen se otti 1942.</p>
  <p>Seurojen välistä ottelua kutsutaan nimellä <span class="pt">Clássico Mineiro</span>. Fanit ovat <span class="pt">torcedores</span>, ja verbi <span class="pt">torcer</span> tarkoittaa ”kannustaa”. Moni perhe on jakautunut kahteen leiriin.</p>
  <p><span class="pt">Mineirão</span> on kaupungin suuri stadion Pampulhan alueella. Sen virallinen nimi on Estádio Governador Magalhães Pinto, ja se avattiin vuonna 1965. Molemmat seurat ovat pelanneet siellä kotiotteluitaan. Vuoden 2014 jalkapallon MM-kisoissa Mineirãossa pelattiin Brasilian ja Saksan välierä, jonka Saksa voitti 7–1. Tarinassa Murilo, Maian ystävä ja historianopettaja, on Atléticon fani.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: perheen päivä</h3>
    <p class="ohje">Katso kellotaulua ja perheen päivää yllä. Valitse oikea vastaus.</p>
    <div class="valinta" data-oikea="às seis">
      <p class="kysymys"><span class="ryhma" data-hahmot="walker"></span> A que horas o Walker se levanta?</p>
      <div class="vaihtoehdot"><button type="button">às seis</button><button type="button">às sete</button><button type="button">às oito</button></div>
    </div>
    <div class="valinta" data-oikea="o Anderson">
      <p class="kysymys">Quem sai com as cartas às oito?</p>
      <div class="vaihtoehdot"><button type="button">a Marta</button><button type="button">o Anderson</button><button type="button">o Jay</button></div>
    </div>
    <div class="valinta" data-oikea="conversa com os vizinhos">
      <p class="kysymys"><span class="ryhma" data-hahmot="marta"></span> O que a Marta faz às dez da manhã?</p>
      <div class="vaihtoehdot"><button type="button">pesca</button><button type="button">conversa com os vizinhos</button><button type="button">faz pilates</button></div>
    </div>
    <div class="valinta" data-oikea="o Jay">
      <p class="kysymys">Quem se deita às duas?</p>
      <div class="vaihtoehdot"><button type="button">o Walker</button><button type="button">a Marta</button><button type="button">o Jay</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Täydennä refleksiiviverbi</h3>
    <p class="ohje">Kirjoita puuttuva pikkusana tai verbin muoto.</p>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="me"></span> levanto às seis.</p>
      <p>Você <span class="aukko" data-oikea="se"></span> deita tarde?</p>
      <p>A gente <span class="aukko" data-oikea="se"></span> diverte muito.</p>
      <p>Nós <span class="aukko" data-oikea="nos"></span> vestimos rápido.</p>
      <p>Eles se <span class="aukko" data-oikea="sentam"></span> à mesa. (sentar)</p>
      <p>Eu me <span class="aukko" data-oikea="visto"></span> e saio. (vestir)</p>
      <p>Eu me <span class="aukko" data-oikea="sinto"></span> muito bem. (sentir)</p>
      <p>O Walker se <span class="aukko" data-oikea="levanta"></span> às seis. (levantar)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Yhdistä päivärutiini</h3>
    <ul class="yhdista">
      <li data-pari="herätä">acordar</li>
      <li data-pari="nousta ylös">levantar-se</li>
      <li data-pari="käydä suihkussa">tomar banho</li>
      <li data-pari="harjata hampaat">escovar os dentes</li>
      <li data-pari="pukeutua">vestir-se</li>
      <li data-pari="syödä lounas">almoçar</li>
      <li data-pari="mennä nukkumaan">deitar-se</li>
      <li data-pari="nukkua">dormir</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Acordar vai lembrar?</h3>
    <p class="ohje">Valitse oikea portugalin verbi.</p>
    <div class="valinta" data-oikea="me lembro">
      <p class="kysymys">En muista mitään: eu não ___ de nada.</p>
      <div class="vaihtoehdot"><button type="button">me acordo</button><button type="button">me lembro</button></div>
    </div>
    <div class="valinta" data-oikea="acordo">
      <p class="kysymys">Herään kuudelta: eu ___ às seis.</p>
      <div class="vaihtoehdot"><button type="button">acordo</button><button type="button">me lembro</button></div>
    </div>
    <div class="valinta" data-oikea="se levanta">
      <p class="kysymys">Me nousemme aikaisin: a gente ___ cedo.</p>
      <div class="vaihtoehdot"><button type="button">me levanto</button><button type="button">se levanta</button><button type="button">nos levantam</button></div>
    </div>
    <div class="valinta" data-oikea="eles">
      <p class="kysymys">Mikä pronomini sopii? ___ se deitam cedo.</p>
      <div class="vaihtoehdot"><button type="button">eu</button><button type="button">eles</button><button type="button">nós</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Kuuntele ja valitse</h3>
    <p class="ohje">Paina ▶ ja valitse sana, jonka kuulit. Kuuntele nasaali tarkasti.</p>
    <div class="valinta" data-kuuntele="pão" data-oikea="pão">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">pau</button><button type="button">pão</button></div>
    </div>
    <div class="valinta" data-kuuntele="mau" data-oikea="mau">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">mau</button><button type="button">mão</button></div>
    </div>
    <div class="valinta" data-kuuntele="ovos" data-oikea="ovos">
      <p class="kysymys">Yksikkö vai monikko?</p>
      <div class="vaihtoehdot"><button type="button">ovo</button><button type="button">ovos</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause.</p>
    <div class="sanelu" data-puhu="Eu me levanto às seis."></div>
    <div class="sanelu" data-puhu="A que horas você se deita?"></div>
    <div class="sanelu" data-puhu="O Anderson entrega as cartas todo dia."></div>
    <div class="sanelu" data-puhu="Eu não me lembro de nada."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Nousen kuudelta.</p><p class="s" data-fi="Nousen kuudelta.">Eu me levanto às seis.</p></div>
    <div class="kaanna"><p class="fi">Mihin aikaan sinä menet nukkumaan?</p><p class="s" data-fi="Mihin aikaan sinä menet nukkumaan?">A que horas você se deita?</p></div>
    <div class="kaanna"><p class="fi">Walker tekee pilatesta kolme kertaa viikossa.</p><p class="s" data-fi="Walker tekee pilatesta kolme kertaa viikossa.">O Walker faz pilates três vezes por semana.</p></div>
    <div class="kaanna"><p class="fi">Me pukeudumme ja juomme kahvia.</p><p class="s" data-fi="Me pukeudumme ja juomme kahvia.">A gente se veste e toma café.</p></div>
    <div class="kaanna"><p class="fi">En muista mitään.</p><p class="s" data-fi="En muista mitään.">Eu não me lembro de nada.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Mikä tavu on painollinen?</h3>
    <p class="ohje">Napauta painollista tavua.</p>
    <p><span class="paino" data-tavut="le|van|tar" data-oikea="3"></span> <span class="paino" data-tavut="al|mo|ço" data-oikea="2"></span> <span class="paino" data-tavut="pi|la|tes" data-oikea="2"></span> <span class="paino" data-tavut="vi|zi|nho" data-oikea="2"></span></p>
    <p><span class="paino" data-tavut="pre|gui|ço|so" data-oikea="3"></span> <span class="paino" data-tavut="es|co|var" data-oikea="3"></span> <span class="paino" data-tavut="gai|ta" data-oikea="1"></span> <span class="paino" data-tavut="car|tei|ro" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Mitä vastaat?</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">A que horas você se levanta?</summary>
      <p class="s" data-fi="Nousen seitsemältä.">Eu me levanto às sete.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que você faz à tarde?</summary>
      <p class="s" data-fi="Iltapäivällä minä työskentelen ja kävelen.">À tarde eu trabalho e caminho.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você se deita cedo ou tarde?</summary>
      <p class="s" data-fi="Menen nukkumaan myöhään.">Eu me deito tarde.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l13">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l13-rutiini" lang="pt-BR">
      <div class="kal-yla"><b>O meu dia</b><small>kirjoita oma päiväsi kellonaikoineen</small></div>
      <div class="kal-rivit">
        <label>De manhã <input name="aamu" placeholder="Eu me levanto às sete."></label>
        <label>Depois <input name="sitten" placeholder="Eu tomo banho e me visto."></label>
        <label>À tarde <input name="iltapaiva" placeholder="À tarde eu trabalho."></label>
        <label>À noite <input name="ilta" placeholder="Eu me deito às onze."></label>
        <label>Às vezes <input name="joskus" placeholder="Às vezes eu pesco, como o Walker."></label>
      </div>
    </div>
    <p>Kirjoita 6 lausetta omasta päivästäsi: milloin nouset, pukeudut ja menet nukkumaan, ja mitä teet vapaa-ajalla. Käytä vähintään kolmea refleksiiviverbiä ja kahta kellonaikaa. Lue vastauksesi ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Minä nousen seitsemältä.">Eu me levanto às sete.</p>
      <p class="s" data-fi="Sitten otan suihkun, pukeudun ja juon kahvia.">Depois eu tomo banho, me visto e tomo café.</p>
      <p class="s" data-fi="Menen töihin kahdeksalta.">Eu vou para o trabalho às oito.</p>
      <p class="s" data-fi="Illalla minä luen tai katson elokuvia.">À noite eu leio ou vejo filmes.</p>
      <p class="s" data-fi="Menen nukkumaan yhdeltätoista.">Eu me deito às onze.</p>
      <p class="s" data-fi="Viikonloppuisin minulla on hauskaa ystävien kanssa.">No fim de semana eu me divirto com os amigos.</p>
    </details>
  </div>
</section>
`
});
