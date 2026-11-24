/* Jakso 16: Korttelijuhlat ja Walkerin huuliharppu. Oma materiaali, ei kirjan tekstiä.
   Kielioppi: pretérito perfeito (säännölliset verbit), comigo ja muut com-muodot. Ääntäminen: tavun lopun l.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l16',
  lyhyt: '16',
  jakso: 'Jakso 16',
  otsikko: 'Mitä tapahtui? Perfekti',
  lahde: 'Aihe: vapaa-aika, musiikki · Kielioppi: perfekti (säännölliset verbit), comigo · Ääntäminen: tavun lopun l',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geologi, Jayn opettaja' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, juhlissa liian innostunut' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 1, kuvaus: 'Maian äiti, tarjoilee kaikille' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 1, kuvaus: 'Maian isä, soittaa huuliharppua' },
    marina: { nimi: 'Marina', tyyppi: 'nainen', vaihto: 2, kuvaus: 'Maian ystävä, sairaanhoitaja' },
    mirela: { nimi: 'Mirela', tyyppi: 'nainen', vaihto: 3, kuvaus: 'Maian ystävä, ravintoloitsija' },
    mateus: { nimi: 'Mateus', tyyppi: 'mies', vaihto: 3, kuvaus: 'Maian ystävä, sambarumpali' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 2, kuvaus: 'Maian veli, jakaa naapuruston postin' }
  },

  aiheet: ['vapaa', 'ruoka', 'toiminta', 'tunteet'],

  sanasto: [
    'festa', 'música', 'gaita de boca', 'tambor', 'samba', 'cantar', 'dançar', 'tocar', 'boteco', 'chope', 'petisco',
    'cozinhar', 'abraçar', 'ontem', 'ontem à noite', 'anteontem', 'já', 'ainda não', 'de novo', 'a noite inteira',
    'comigo', 'com você', 'com a gente', 'com ele', 'esquisito', 'todo mundo', 'pessoal', 'faz uma hora'
  ],

  sanat: {
    // <<SANAT
    // dialogi 1
    'sábado': { fi: 'lauantai', aa: 'SA-ba-du', ipa: '[ˈsabadu]', sl: 'substantiivi, maskuliini' },
    'à': { fi: '-lle, -hin; à noite = illalla (a + a)', aa: 'a', ipa: '[a]', sl: 'prepositio + artikkeli', huom: '{a} + {a}' },
    'horizonte': { fi: 'horisontti', aa: 'o-ri-ZÕ-tsi', ipa: '[oɾiˈzõtʃi]', sl: 'substantiivi, maskuliini' },
    'dos': { fi: '-sta, -stä (monikko, de + os)', aa: 'dus', ipa: '[dus]', sl: 'prepositio + artikkeli', huom: '{de} + os' },
    'está': { fi: 'on (hän on); olet', aa: 'es-TA', ipa: '[esˈta]', sl: 'verbi {estar}', huom: 'olla jossakin tai jossakin tilassa' },
    'tem': { fi: 'on, hänellä on; (puhekieli) on olemassa', aa: 'TẼI', ipa: '[tẽj]', sl: 'verbi {ter}', huom: 'tem pão de queijo = pão de queijoa on tarjolla' },
    'queijo': { fi: 'juusto', aa: 'KEI-zhu', ipa: '[ˈkejʒu]', sl: 'substantiivi, maskuliini' },
    'pão de queijo': { fi: 'juustoleipä (pieni, pehmeä juustopulla)', aa: 'PÃU di KEI-zhu', ipa: '[ˈpɐ̃w dʒi ˈkejʒu]', sl: 'ilmaus', huom: 'Minas Geraisin tunnetuin leivonnainen' },
    'feijão': { fi: 'pavut; papu', aa: 'fei-ZHÃU', ipa: '[fejˈʒɐ̃w]', sl: 'substantiivi, maskuliini', huom: 'Brasiliassa syödään lähes päivittäin' },
    'comeu': { fi: 'söi', aa: 'ko-MEU', ipa: '[koˈmew]', sl: 'verbi, perfekti', huom: 'perusmuoto {comer}' },
    'comi': { fi: 'söin', aa: 'ko-MI', ipa: '[koˈmi]', sl: 'verbi, perfekti', huom: 'perusmuoto {comer}' },
    'comer': { fi: 'syödä', aa: 'ko-MEH', ipa: '[koˈmeh]', sl: 'verbi, perusmuoto' },
    'bebeu': { fi: 'joi', aa: 'be-BEU', ipa: '[beˈbew]', sl: 'verbi, perfekti', huom: 'perusmuoto {beber}' },
    'bebi': { fi: 'join', aa: 'be-BI', ipa: '[beˈbi]', sl: 'verbi, perfekti', huom: 'perusmuoto {beber}' },
    'alguma': { fi: 'jokin (feminiinisanan edellä)', aa: 'au-GŨ-ma', ipa: '[awˈɡũmɐ]', sl: 'pronomini', huom: 'maskuliini {algum}' },
    'alguma coisa': { fi: 'jotain', aa: 'au-GŨ-ma KOI-za', ipa: '[awˈɡũmɐ ˈkojzɐ]', sl: 'ilmaus' },
    'chope': { fi: 'tuoppi, tynnyriolut', aa: 'SHO-pi', ipa: '[ˈʃopi]', sl: 'substantiivi, maskuliini', huom: 'kylmä tynnyriolut, tyypillinen {boteco}ssa' },
    'chopes': { fi: 'tuopit', aa: 'SHO-pis', ipa: '[ˈʃopis]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {chope}' },
    'dona': { fi: 'rouva (kohtelias puhuttelu etunimen edellä)', aa: 'DÕ-na', ipa: '[ˈdõnɐ]', sl: 'substantiivi, feminiini', huom: 'Brasiliassa iäkkäämpää naista puhutellaan dona + etunimi' },
    'pegou': { fi: 'otti, nappasi', aa: 'pe-GOU', ipa: '[peˈɡow]', sl: 'verbi, perfekti', huom: 'perusmuoto {pegar}' },
    'gaita': { fi: 'huuliharppu; (etelässä) harmonikka', aa: 'GAI-ta', ipa: '[ˈɡajtɐ]', sl: 'substantiivi, feminiini' },
    'gaita de boca': { fi: 'huuliharppu', aa: 'GAI-ta di BO-ka', ipa: '[ˈɡajtɐ dʒi ˈbokɐ]', sl: 'ilmaus', huom: 'kirjaimellisesti ”suun gaita”' },
    'toco': { fi: 'soitan', aa: 'TO-ku', ipa: '[ˈtoku]', sl: 'verbi', huom: 'perusmuoto {tocar}' },
    'toca': { fi: 'soittaa, soitat', aa: 'TO-ka', ipa: '[ˈtɔkɐ]', sl: 'verbi', huom: 'perusmuoto {tocar}' },
    'tocou': { fi: 'soitti', aa: 'to-KOU', ipa: '[toˈkow]', sl: 'verbi, perfekti', huom: 'perusmuoto {tocar}' },
    'toquei': { fi: 'soitin', aa: 'to-KEI', ipa: '[toˈkej]', sl: 'verbi, perfekti', huom: 'perusmuoto {tocar}; c muuttuu qu:ksi' },
    'vocês': { fi: 'te (monikko), te kaikki', aa: 'vo-SES', ipa: '[voˈses]', sl: 'persoonapronomini', huom: 'yksikkö {você}' },
    'uma': { fi: 'yksi, eräs (feminiinisanan edellä)', aa: 'Ũ-ma', ipa: '[ˈũmɐ]', sl: 'artikkeli, lukusana', huom: 'maskuliini {um}' },
    'do': { fi: '-sta, -stä (maskuliinisanan edellä, de + o)', aa: 'du', ipa: '[du]', sl: 'prepositio + artikkeli', huom: '{de} + {o}' },
    'esquina': { fi: 'kadunkulma', aa: 'es-KĨ-na', ipa: '[esˈkĩnɐ]', sl: 'substantiivi, feminiini' },
    'toda': { fi: 'koko, kaikki (feminiinisanan edellä)', aa: 'TO-da', ipa: '[ˈtodɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {todo}' },
    'cantou': { fi: 'lauloi', aa: 'kã-TOU', ipa: '[kɐ̃ˈtow]', sl: 'verbi, perfekti', huom: 'perusmuoto {cantar}' },
    'cantei': { fi: 'lauloin', aa: 'kã-TEI', ipa: '[kɐ̃ˈtej]', sl: 'verbi, perfekti', huom: 'perusmuoto {cantar}' },
    'gostou': { fi: 'piti', aa: 'gos-TOU', ipa: '[ɡosˈtow]', sl: 'verbi, perfekti', huom: 'perusmuoto {gostar}' },
    'gostei': { fi: 'pidin', aa: 'gos-TEI', ipa: '[ɡosˈtej]', sl: 'verbi, perfekti', huom: 'perusmuoto {gostar}; rakenne gostar de' },
    'quer': { fi: 'haluaa; haluat', aa: 'KEH', ipa: '[kɛh]', sl: 'verbi', huom: 'perusmuoto {querer}' },
    'quero': { fi: 'haluan', aa: 'KE-ru', ipa: '[ˈkɛɾu]', sl: 'verbi', huom: 'perusmuoto {querer}' },
    'contigo': { fi: 'kanssasi (tu-muoto)', aa: 'kõ-TSI-gu', ipa: '[kõˈtʃiɡu]', sl: 'prepositio + pronomini', huom: 'Belo Horizontessa sanotaan {com você}; espanjaksi contigo' },
    'fala': { fi: 'puhuu; puhut', aa: 'FA-la', ipa: '[ˈfalɐ]', sl: 'verbi', huom: 'perusmuoto {falar}' },
    'eles': { fi: 'he (miehet tai sekaryhmä)', aa: 'E-lis', ipa: '[ˈelis]', sl: 'persoonapronomini', huom: 'naiset {elas}' },
    'elas': { fi: 'he (naiset)', aa: 'E-las', ipa: '[ˈɛlɐs]', sl: 'persoonapronomini', huom: '{eles}' },
    'ela': { fi: 'hän (nainen)', aa: 'E-la', ipa: '[ˈɛlɐ]', sl: 'persoonapronomini', huom: 'mies {ele}' },
    'dançaram': { fi: 'tanssivat', aa: 'dã-SA-rãu', ipa: '[dɐ̃ˈsaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {dançar}' },
    'dançou': { fi: 'tanssi', aa: 'dã-SOU', ipa: '[dɐ̃ˈsow]', sl: 'verbi, perfekti', huom: 'perusmuoto {dançar}' },
    'dancei': { fi: 'tanssin', aa: 'dã-SEI', ipa: '[dɐ̃ˈsej]', sl: 'verbi, perfekti', huom: 'perusmuoto {dançar}; ç muuttuu c:ksi' },
    'dançamos': { fi: 'tanssimme', aa: 'dã-SÃ-mus', ipa: '[dɐ̃ˈsɐ̃mus]', sl: 'verbi, perfekti', huom: 'perusmuoto {dançar}' },
    'pisar': { fi: 'astua, polkea', aa: 'pi-ZAH', ipa: '[piˈzah]', sl: 'verbi, perusmuoto' },
    'pisou': { fi: 'astui', aa: 'pi-ZOU', ipa: '[piˈzow]', sl: 'verbi, perfekti', huom: 'perusmuoto {pisar}' },
    'no': { fi: '-ssa, -ssä (maskuliinisanan edellä, em + o)', aa: 'nu', ipa: '[nu]', sl: 'prepositio + artikkeli', huom: '{em} + {o}' },
    'duas': { fi: 'kaksi (feminiinisanan edellä)', aa: 'DU-as', ipa: '[ˈduɐs]', sl: 'lukusana', huom: 'maskuliini {dois}' },
    'vezes': { fi: 'kertaa', aa: 'VE-zis', ipa: '[ˈvezis]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {vez}' },
    'desculpa': { fi: 'anteeksi', aa: 'dis-KUU-pa', ipa: '[dʒisˈkuwpɐ]', sl: 'huudahdus', huom: 'arkinen; kirjaimellisesti ”(hän) antaa anteeksi”' },
    'errei': { fi: 'erehdyin, tein virheen', aa: 'e-HEI', ipa: '[eˈhej]', sl: 'verbi, perfekti', huom: 'perusmuoto {errar}' },
    'essa': { fi: 'tämä, tuo (feminiinisanan edellä)', aa: 'E-sa', ipa: '[ˈɛsɐ]', sl: 'pronomini', huom: 'maskuliini {esse}' },
    // dialogi 2
    'continua': { fi: 'jatkuu', aa: 'kõ-tsi-NU-a', ipa: '[kõtʃiˈnuɐ]', sl: 'verbi', huom: 'perusmuoto {continuar}' },
    'inteira': { fi: 'koko (feminiinisanan edellä)', aa: 'ĩ-TEI-ra', ipa: '[ĩˈtejɾɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {inteiro}' },
    'a noite inteira': { fi: 'koko yön', aa: 'a NOI-tsi ĩ-TEI-ra', ipa: '[a ˈnojtʃi ĩˈtejɾɐ]', sl: 'ilmaus' },
    'cozinhar': { fi: 'laittaa ruokaa', aa: 'ko-zĩ-NJAH', ipa: '[kozĩˈɲah]', sl: 'verbi, perusmuoto' },
    'cozinhei': { fi: 'laitoin ruokaa', aa: 'ko-zĩ-NJEI', ipa: '[kozĩˈɲej]', sl: 'verbi, perfekti', huom: 'perusmuoto {cozinhar}' },
    'cinquenta': { fi: 'viisikymmentä', aa: 'sĩ-KUẼ-ta', ipa: '[sĩˈkwẽtɐ]', sl: 'lukusana' },
    'pessoas': { fi: 'ihmiset', aa: 'pe-SO-as', ipa: '[peˈsoɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {pessoa}' },
    'todo mundo': { fi: 'kaikki (ihmiset)', aa: 'TO-du MŨ-du', ipa: '[ˈtodu ˈmũdu]', sl: 'ilmaus', huom: 'kirjaimellisesti ”koko maailma”; verbi on hän-muodossa' },
    'tambor': { fi: 'rumpu', aa: 'tã-BOH', ipa: '[tɐ̃ˈboh]', sl: 'substantiivi, maskuliini' },
    'as': { fi: '-t (feminiinin monikon artikkeli); as oito = kello kahdeksan', aa: 'as', ipa: '[as]', sl: 'artikkeli', huom: 'maskuliini {os}' },
    'os': { fi: '-t (maskuliinin monikon artikkeli)', aa: 'us', ipa: '[us]', sl: 'artikkeli', huom: 'feminiini {as}' },
    'morreu': { fi: 'kuoli', aa: 'mo-HEU', ipa: '[moˈhew]', sl: 'verbi, perfekti', huom: 'perusmuoto {morrer}' },
    'horas': { fi: 'tuntia', aa: 'O-ras', ipa: '[ˈɔɾɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {hora}' },
    'contei': { fi: 'laskin; kerroin', aa: 'kõ-TEI', ipa: '[kõˈtej]', sl: 'verbi, perfekti', huom: 'perusmuoto {contar}' },
    'abraçar': { fi: 'halata', aa: 'a-bra-SAH', ipa: '[abɾaˈsah]', sl: 'verbi, perusmuoto' },
    'abraçou': { fi: 'halasi', aa: 'a-bra-SOU', ipa: '[abɾaˈsow]', sl: 'verbi, perfekti', huom: 'perusmuoto {abraçar}' },
    'abracei': { fi: 'halasin', aa: 'a-bra-SEI', ipa: '[abɾaˈsej]', sl: 'verbi, perfekti', huom: 'perusmuoto {abraçar}; ç muuttuu c:ksi' },
    'poste': { fi: 'pylväs, lyhtypylväs', aa: 'POS-tsi', ipa: '[ˈpostʃi]', sl: 'substantiivi, maskuliini' },
    'falou': { fi: 'puhui', aa: 'fa-LOU', ipa: '[faˈlow]', sl: 'verbi, perfekti', huom: 'perusmuoto {falar}' },
    'falei': { fi: 'puhuin', aa: 'fa-LEI', ipa: '[faˈlej]', sl: 'verbi, perfekti', huom: 'perusmuoto {falar}' },
    'falamos': { fi: 'puhuimme', aa: 'fa-LÃ-mus', ipa: '[faˈlɐ̃mus]', sl: 'verbi, perfekti', huom: 'perusmuoto {falar}' },
    'falaram': { fi: 'puhuivat', aa: 'fa-LA-rãu', ipa: '[faˈlaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {falar}' },
    'óculos': { fi: 'silmälasit', aa: 'O-ku-lus', ipa: '[ˈɔkulus]', sl: 'substantiivi, maskuliini, monikko', huom: 'aina monikossa' },
    'grandes': { fi: 'isot', aa: 'GRÃ-dis', ipa: '[ˈɡɾɐ̃dʒis]', sl: 'adjektiivi, monikko', huom: 'yksikkö {grande}' },
    'olhou': { fi: 'katsoi', aa: 'o-LJOU', ipa: '[oˈʎow]', sl: 'verbi, perfekti', huom: 'perusmuoto {olhar}' },
    'espanhol': { fi: 'espanja (kieli); espanjalainen', aa: 'es-pã-NJOU', ipa: '[espɐ̃ˈɲɔw]', sl: 'substantiivi, maskuliini' },
    'achou': { fi: 'arveli, luuli', aa: 'a-SHOU', ipa: '[aˈʃow]', sl: 'verbi, perfekti', huom: 'perusmuoto {achar}' },
    'elogio': { fi: 'kehu', aa: 'e-LO-zhju', ipa: '[eˈlɔʒju]', sl: 'substantiivi, maskuliini' },
    'ficou': { fi: 'jäi; tuli joksikin', aa: 'fi-KOU', ipa: '[fiˈkow]', sl: 'verbi, perfekti', huom: 'perusmuoto {ficar}; ficou bravo = suuttui' },
    'conheço': { fi: 'tunnen', aa: 'ko-NJE-su', ipa: '[koˈɲesu]', sl: 'verbi', huom: 'perusmuoto {conhecer}' },
    'saiu': { fi: 'lähti, meni ulos', aa: 'sa-IU', ipa: '[saˈiw]', sl: 'verbi, perfekti', huom: 'perusmuoto {sair}' },
    'faz': { fi: 'tekee; faz uma hora = tunti sitten', aa: 'FAS', ipa: '[fas]', sl: 'verbi {fazer}', huom: 'aikamääreenä: ”X aikaa sitten”' },
    'faz uma hora': { fi: 'tunti sitten', aa: 'FAIS Ũ-ma O-ra', ipa: '[fajs ˈũmɐ ˈɔɾɐ]', sl: 'ilmaus' },
    'voltou': { fi: 'palasi', aa: 'vou-TOU', ipa: '[vowˈtow]', sl: 'verbi, perfekti', huom: 'perusmuoto {voltar}' },
    'virou': { fi: 'kääntyi', aa: 'vi-ROU', ipa: '[viˈɾow]', sl: 'verbi, perfekti', huom: 'perusmuoto {virar}' },
    'desapareceu': { fi: 'katosi', aa: 'di-za-pa-re-SEU', ipa: '[dʒizapaɾeˈsew]', sl: 'verbi, perfekti', huom: 'perusmuoto {desaparecer}' },
    // kielioppi
    'vem': { fi: 'tulee; tulet', aa: 'VẼI', ipa: '[vẽj]', sl: 'verbi {vir}', huom: 'vem com a gente = tulee mukaan' },
    'beberam': { fi: 'joivat', aa: 'be-BE-rãu', ipa: '[beˈbeɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {beber}' },
    'beber': { fi: 'juoda', aa: 'be-BEH', ipa: '[beˈbeh]', sl: 'verbi, perusmuoto' },
    'comemos': { fi: 'söimme', aa: 'ko-MẼ-mus', ipa: '[koˈmẽmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {comer}' },
    'comeram': { fi: 'söivät', aa: 'ko-ME-rãu', ipa: '[koˈmeɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {comer}' },
    'abri': { fi: 'avasin', aa: 'a-BRI', ipa: '[aˈbɾi]', sl: 'verbi, perfekti', huom: 'perusmuoto {abrir}' },
    'abriu': { fi: 'avasi', aa: 'a-BRIU', ipa: '[aˈbɾiw]', sl: 'verbi, perfekti', huom: 'perusmuoto {abrir}' },
    'abrimos': { fi: 'avasimme', aa: 'a-BRĨ-mus', ipa: '[aˈbɾĩmus]', sl: 'verbi, perfekti', huom: 'perusmuoto {abrir}' },
    'abriram': { fi: 'avasivat', aa: 'a-BRI-rãu', ipa: '[aˈbɾiɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {abrir}' },
    'busquei': { fi: 'etsin, haeksin', aa: 'bus-KEI', ipa: '[busˈkej]', sl: 'verbi, perfekti', huom: 'perusmuoto {buscar}; c muuttuu qu:ksi' },
    'paguei': { fi: 'maksoin', aa: 'pa-GEI', ipa: '[paˈɡej]', sl: 'verbi, perfekti', huom: 'perusmuoto {pagar}; g muuttuu gu:ksi' },
    'cheguei': { fi: 'saavuin', aa: 'she-GEI', ipa: '[ʃeˈɡej]', sl: 'verbi, perfekti', huom: 'perusmuoto {chegar}; g muuttuu gu:ksi' },
    'chegou': { fi: 'saapui', aa: 'she-GOU', ipa: '[ʃeˈɡow]', sl: 'verbi, perfekti', huom: 'perusmuoto {chegar}' },
    'chegaram': { fi: 'saapuivat', aa: 'she-GA-rãu', ipa: '[ʃeˈɡaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {chegar}' },
    'comecei': { fi: 'aloitin', aa: 'ko-me-SEI', ipa: '[komeˈsej]', sl: 'verbi, perfekti', huom: 'perusmuoto {começar}; ç muuttuu c:ksi' },
    'conosco': { fi: 'kanssamme (kirjakieli)', aa: 'ko-NOS-ku', ipa: '[koˈnosku]', sl: 'prepositio + pronomini', huom: 'puhekielessä {com a gente}' },
    'com você': { fi: 'kanssasi', aa: 'kõ vo-SE', ipa: '[kõ voˈse]', sl: 'ilmaus', huom: 'Brasiliassa tavallinen' },
    'com a gente': { fi: 'kanssamme (puhekieli)', aa: 'kõ a ZHẼ-tsi', ipa: '[kõ a ˈʒẽtʃi]', sl: 'ilmaus' },
    'com ele': { fi: 'hänen kanssaan', aa: 'kõ E-li', ipa: '[kõ ˈeli]', sl: 'ilmaus' },
    // kulttuuri ja harjoitukset
    'boteco': { fi: 'boteco, kulmakuppila', aa: 'bo-TE-ku', ipa: '[boˈtɛku]', sl: 'substantiivi, maskuliini', huom: 'vaatimaton baari' },
    'botequim': { fi: 'boteco (toinen nimi)', aa: 'bo-tsi-KĨ', ipa: '[botʃiˈkĩ]', sl: 'substantiivi, maskuliini', huom: 'sama kuin {boteco}' },
    'petisco': { fi: 'pikkupurtava, välipala', aa: 'pe-TSIS-ku', ipa: '[peˈtʃisku]', sl: 'substantiivi, maskuliini' },
    'tira-gosto': { fi: 'pikkupurtava (olutpöydässä)', aa: 'TSI-ra-GOS-tu', ipa: '[ˌtʃiɾaˈɡostu]', sl: 'substantiivi, maskuliini', huom: 'kirjaimellisesti ”vie maun pois”, syödään juoman kanssa' },
    'samba': { fi: 'samba', aa: 'SÃ-ba', ipa: '[ˈsɐ̃bɐ]', sl: 'substantiivi, maskuliini' },
    'futebol': { fi: 'jalkapallo', aa: 'fu-tsi-BOU', ipa: '[futʃiˈbɔw]', sl: 'substantiivi, maskuliini' },
    'falta': { fi: 'puute; virhe (jalkapallossa)', aa: 'FAU-ta', ipa: '[ˈfawtɐ]', sl: 'substantiivi, feminiini' },
    'amigos': { fi: 'ystävät', aa: 'a-MI-gus', ipa: '[aˈmiɡus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {amigo}' },
    'ontem à noite': { fi: 'eilen illalla', aa: 'Õ-tẽi a NOI-tsi', ipa: '[ˈõtẽj a ˈnojtʃi]', sl: 'ilmaus' },
    'anteontem': { fi: 'toissapäivänä', aa: 'ã-tsi-Õ-tẽi', ipa: '[ɐ̃tʃiˈõtẽj]', sl: 'adverbi' },
    'ainda não': { fi: 'ei vielä', aa: 'a-Ĩ-da NÃU', ipa: '[aˈĩdɐ nɐ̃w]', sl: 'ilmaus' },
    'de novo': { fi: 'taas, uudestaan', aa: 'di NO-vu', ipa: '[dʒi ˈnovu]', sl: 'ilmaus' }
    // SANAT>>
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kertoa, mitä jonkun kanssa tapahtui: <span class="pt">Walker tocou</span>, <span class="pt">eu comi</span>.</li>
  <li>Osaat taivuttaa säännölliset -ar-, -er- ja -ir-verbit perfektissä.</li>
  <li>Osaat sanoa ”kanssani” ja ”kanssasi”: <span class="pt">comigo</span>, <span class="pt">com você</span>.</li>
  <li>Osaat ääntää tavun lopun l:n u-äänteenä.</li>
</ul>
<p data-paikka="festa-rua">Lauantai-ilta Belo Horizontessa. Maian vanhempien kadulla on korttelijuhlat, ja Walker on tuonut huuliharppunsa.</p>

<section class="osio" data-paikka="festa-rua">
  <h2>Dialogi 1: Festa na rua</h2>
  <p class="ohje">Juhlat ovat alkaneet. Marta tarjoilee, Walker soittaa ja Jay yrittää tanssia. Kuuntele ensin ilman suomennoksia, sitten lue Jayn repliikit ääneen. Huomaa, mitä Maia korjaa.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi 1">
    <p class="s" data-h="kertoja" data-fi="Lauantai-ilta Belo Horizontessa.">Sábado à noite, em Belo Horizonte.</p>
    <p class="s" data-h="kertoja" data-fi="Maian vanhempien katu juhlii.">A rua dos pais da Maia está em festa.</p>
    <p class="s" data-h="marta" data-fi="Jay, oletko jo syönyt? Täällä on pão de queijoa ja papuja!">Jay, você já comeu? Tem pão de queijo e feijão!</p>
    <p class="s" data-h="jay" data-fi="Olen jo syönyt, kiitos! Söin paljon pão de queijoa.">Já comi, obrigado! Comi muito pão de queijo.</p>
    <p class="s" data-h="marta" data-fi="Entä oletko juonut jotain?">E bebeu alguma coisa?</p>
    <p class="s" data-h="jay" data-fi="Join vain yhden tuopin, rouva Marta.">Bebi só um chope, dona Marta.</p>
    <p class="s" data-h="kertoja" data-fi="Walker otti huuliharppunsa.">O Walker pegou a gaita de boca.</p>
    <p class="s" data-h="walker" data-fi="Hyvää iltaa, väki! Tänään soitan teille.">Boa noite, pessoal! Hoje eu toco para vocês.</p>
    <p class="s" data-h="kertoja" data-fi="Hän soitti Clube da Esquinan kappaleen, ja koko katu lauloi mukana.">Ele tocou uma música do Clube da Esquina, e a rua toda cantou junto.</p>
    <p class="s" data-h="maia" data-fi="Piditkö siitä, Jay?">Gostou, Jay?</p>
    <p class="s" data-h="jay" data-fi="Pidin paljon! Walker soittaa tosi hyvin.">Gostei muito! O Walker toca muito bem.</p>
    <p class="s" data-h="maia" data-fi="Kiva! Haluatko tanssia kanssani?">Que bom! Quer dançar comigo?</p>
    <p class="s" data-h="jay" data-fi="Haluan tanssia kanssasi! (espanjalainen muoto)">Quero dançar contigo!</p>
    <p class="s" data-h="maia" data-fi="Contigo? Täällä sanotaan ”com você”. Contigo kuuluu niille, jotka sanovat ”tu”.">Contigo? Aqui a gente fala “com você”. “Contigo” é de quem fala “tu”.</p>
    <p class="s" data-h="jay" data-fi="Ai niin, selvä! Haluan tanssia kanssasi.">Ah, certo! Quero dançar com você.</p>
    <p class="s" data-h="kertoja" data-fi="He tanssivat. Jay astui Maian jalkaan kahdesti.">Eles dançaram. O Jay pisou no pé da Maia duas vezes.</p>
    <p class="s" data-h="maia" data-fi="Auts! Astuit taas jalkaani!">Ai! Você pisou no meu pé de novo!</p>
    <p class="s" data-h="jay" data-fi="Anteeksi! Askel meni väärin.">Desculpa! Eu errei o passo.</p>
  </div>
</section>

<section class="osio" data-paikka="festa-rua">
  <h2>Dialogi 2: Quatro da manhã</h2>
  <p class="ohje">Kello on neljä aamulla. Marina, Mirela ja Mateus kertovat, mitä kukin on tehnyt illan aikana. Nyt melkein joka repliikissä on perfekti. Etsi verbien päätteet: <b>-ei</b>, <b>-ou</b>, <b>-eu</b>, <b>-iu</b>.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi 2">
    <p class="s" data-h="kertoja" data-fi="Aamuneljä. Juhlat jatkuvat.">Quatro da manhã. A festa continua.</p>
    <p class="s" data-h="marina" data-fi="Voi että mikä juhla! Me tanssittiin koko yö.">Gente, que festa! A gente dançou a noite inteira.</p>
    <p class="s" data-h="mirela" data-fi="Minä laitoin ruokaa viidellekymmenelle, ja kaikki söivät kaiken!">Eu cozinhei para cinquenta pessoas, e todo mundo comeu tudo!</p>
    <p class="s" data-h="mateus" data-fi="Minä soitin rumpua kahdeksasta asti. Käteni on aivan poikki!">Eu toquei o tambor desde as oito. Minha mão morreu!</p>
    <p class="s" data-h="marina" data-fi="Ja Walker soitti huuliharppua viisi tuntia!">E o Walker tocou gaita por cinco horas!</p>
    <p class="s" data-h="mirela" data-fi="Entä Jay? Hän joi paljon tuoppeja, eikö niin?">E o Jay? Ele bebeu muito chope, né?</p>
    <p class="s" data-h="marina" data-fi="Joi! Minä laskin kuusi tuoppia.">Bebeu! Eu contei seis chopes.</p>
    <p class="s" data-h="mateus" data-fi="Hän lauloi, tanssi pöydän päällä ja halasi lyhtypylvästä.">Ele cantou, dançou em cima da mesa e abraçou o poste.</p>
    <p class="s" data-h="mirela" data-fi="Sitten hän puhui miehelle, jolla oli isot silmälasit.">Depois ele falou com um homem de óculos grandes.</p>
    <p class="s" data-h="marina" data-fi="Mitä hän sanoi?">O que ele falou?</p>
    <p class="s" data-h="mirela" data-fi="Hän katsoi miehen hiuksia ja sanoi: ”Mikä outo tukka!”">Olhou o cabelo do homem e falou: “Que cabelo esquisito!”</p>
    <p class="s" data-h="marina" data-fi="Esquisito? Esquisito on outo! Espanjassa sama sana (exquisito) on kehu, mutta portugalissa ei!">Esquisito? Esquisito é estranho! Em espanhol essa palavra é um elogio, mas em português não!</p>
    <p class="s" data-h="mateus" data-fi="Jay luuli, että se on kehu, kuten espanjassa.">O Jay achou que é um elogio, como em espanhol.</p>
    <p class="s" data-h="mirela" data-fi="Mies suuttui kovasti. Minä tunnen hänet: hän on Marcus meidän koulusta!">O homem ficou muito bravo. Eu conheço ele: é o Marcus, da nossa escola!</p>
    <p class="s" data-h="marina" data-fi="Marcus? Voi ei! Missä Jay nyt on?">O Marcus? Nossa! E cadê o Jay agora?</p>
    <p class="s" data-h="mirela" data-fi="Hän lähti tunti sitten hakemaan lisää tuoppeja. Hän ei ole palannut.">Ele saiu faz uma hora pra buscar mais chope. Não voltou.</p>
    <p class="s" data-h="mateus" data-fi="Uai… missä Jay on?">Uai… cadê o Jay?</p>
    <p class="s" data-h="kertoja" data-fi="Kadunkulmassa musta auto kääntyi ja katosi.">Na esquina, um carro preto virou e desapareceu.</p>
  </div>
</section>

<section class="osio" data-paikka="bh-bairro">
  <h2>Jayn vastaaja</h2>
  <p class="ohje">Sunnuntaiaamuna Maia löytää Jayn puhelimen juhlapöydältä. Jay lähti ilman sitä. Puhelimessa on viisi ääniviestiä. Kuuntele ne ensin ilman tekstiä: kuka soitti, mihin aikaan ja mitä tapahtui? Avaa teksti vasta sitten. Kaikki viestit kertovat perfektillä, mitä yöllä tapahtui.</p>
  <div class="vastaaja" data-otsikko="Correio de voz · Jay" data-kello="07:30">
    <p data-h="maia" data-aika="03:20" data-fi="Jay, missä olet? Etsin sinua koko juhlista. Soita minulle, jooko?">Jay, cadê você? Eu procurei você na festa toda. Me liga, tá?</p>
    <p data-h="mirela" data-aika="03:45" data-fi="Jay, täällä Mirela. Puhuitko Marcuksen kanssa? Hän suuttui kovasti. Ole varovainen!">Jay, aqui é a Mirela. Você falou com o Marcus? Ele ficou muito bravo. Cuidado!</p>
    <p data-h="mateus" data-aika="04:10" data-fi="Jay, Mateus täällä. Unohdit aurinkolasisi pöydälle. Otin ne talteen sinulle.">Jay, o Mateus falando. Você esqueceu os óculos escuros na mesa. Eu guardei pra você.</p>
    <p data-h="walker" data-aika="05:30" data-fi="Jay, Walker tässä. Juhlat loppuivat. Minä soitin viiteen asti! Palasitko kotiin?">Jay, o Walker aqui. A festa acabou. Eu toquei até as cinco! Você voltou pra casa?</p>
    <p data-h="anderson" data-aika="07:15" data-fi="Jay, huomenta! Heräsin aikaisin ja löysin lippiksen kadunkulmasta. Onko se sinun?">Jay, bom dia! Eu acordei cedo e encontrei um boné na esquina. É seu?</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Juhla ja musiikki" data-sanat="festa,música,gaita de boca,tambor,samba,cantar,dançar,tocar"></div>
  <div class="teema" data-otsikko="Boteco" data-sanat="boteco,chope,cerveja,petisco,mesa,pão de queijo,feijão"></div>
  <div class="teema" data-otsikko="Milloin tapahtui?" data-sanat="ontem,ontem à noite,anteontem,faz uma hora,já,ainda não,de novo,a noite inteira"></div>
</section>

<section class="osio">
  <h2>Kielioppi</h2>

  <h3>1. Perfekti: mitä tapahtui</h3>
  <p>Portugalin <b>pretérito perfeito</b> kertoo, mitä tapahtui ja mikä on jo päättynyt: <span class="pt">Walker tocou gaita</span> (Walker soitti huuliharppua). Suomessa tätä vastaa tavallisesti imperfekti (soitti) ja usein myös perfekti (on soittanut): <span class="pt">Já comi</span> tarkoittaa sekä ”söin jo” että ”olen jo syönyt”. Portugalissa ei siis tarvita apuverbiä kuten suomen ”olla”.</p>
  <p>Perfektin pääte riippuu verbin perusmuodon päätteestä (-ar, -er vai -ir). Päätteessä on painollinen vokaali, joten pääte on sama verbistä toiseen:</p>
  <table class="taivutus">
    <tr><th></th><td><b>-ar</b>: <span class="pt">falar</span></td><td><b>-er</b>: <span class="pt">comer</span></td><td><b>-ir</b>: <span class="pt">abrir</span></td></tr>
    <tr><th>eu</th><td><span class="pt">falei</span></td><td><span class="pt">comi</span></td><td><span class="pt">abri</span></td></tr>
    <tr><th>você, ele, ela, a gente</th><td><span class="pt">falou</span></td><td><span class="pt">comeu</span></td><td><span class="pt">abriu</span></td></tr>
    <tr><th>nós</th><td><span class="pt">falamos</span></td><td><span class="pt">comemos</span></td><td><span class="pt">abrimos</span></td></tr>
    <tr><th>vocês, eles, elas</th><td><span class="pt">falaram</span></td><td><span class="pt">comeram</span></td><td><span class="pt">abriram</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Minä söin jo.">Eu já comi.</li>
    <li class="s" data-fi="Walker soitti viisi tuntia.">O Walker tocou por cinco horas.</li>
    <li class="s" data-fi="Me tanssittiin koko yö.">A gente dançou a noite inteira.</li>
    <li class="s" data-fi="He joivat paljon.">Eles beberam muito.</li>
    <li class="s" data-fi="Minä avasin oven.">Eu abri a porta.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> <span class="pt">a gente</span> (me) käyttää hän-muotoa: <span class="pt">a gente dançou</span>. Muoto <span class="pt">nós dançamos</span> on kirjakieltä. Muoto <span class="pt">nós</span> on -ar-verbeillä samanlainen kuin preesensissä (<span class="pt">falamos</span>), joten tilanne kertoo, onko kyse nykyhetkestä vai menneestä.</p>
  </div>

  <h3>2. Kysyminen, kieltäminen ja lyhyt vastaus</h3>
  <p>Kysymys tehdään äänenpainolla, ei sanajärjestyksellä: <span class="pt">Você comeu?</span> Kieltosana <span class="pt">não</span> tulee verbin eteen. Lyhyessä vastauksessa toistetaan verbi, aivan kuten suomessa: ”Söitkö?” – ”Söin.”</p>
  <ul class="esim">
    <li class="s" data-fi="Söitkö jo?">Você já comeu?</li>
    <li class="s" data-fi="Söin.">Comi.</li>
    <li class="s" data-fi="En ole vielä syönyt.">Ainda não comi.</li>
    <li class="s" data-fi="Piditkö siitä?">Gostou?</li>
    <li class="s" data-fi="Pidin paljon.">Gostei muito.</li>
  </ul>

  <h3>3. Ääntämisen vuoksi muuttuvat kirjoitusasut</h3>
  <p>Kun verbin kantaan tulee pääte <b>-ei</b>, jotkin kirjaimet muuttuvat, jotta ääntäminen pysyy samana (sama ilmiö on espanjassa):</p>
  <table class="taivutus">
    <tr><th>-car → -quei</th><td><span class="pt">tocar</span> → <span class="pt">toquei</span></td><td><span class="pt">buscar</span> → <span class="pt">busquei</span></td></tr>
    <tr><th>-gar → -guei</th><td><span class="pt">chegar</span> → <span class="pt">cheguei</span></td><td><span class="pt">pagar</span> → <span class="pt">paguei</span></td></tr>
    <tr><th>-çar → -cei</th><td><span class="pt">começar</span> → <span class="pt">comecei</span></td><td><span class="pt">abraçar</span> → <span class="pt">abracei</span></td></tr>
  </table>
  <p>Muut muodot (<span class="pt">tocou</span>, <span class="pt">chegou</span>) ovat säännöllisiä. Muutos koskee vain muotoa <span class="pt">eu</span>.</p>

  <h3>4. Comigo, com você: ”kanssani, kanssasi”</h3>
  <p>Prepositio <span class="pt">com</span> (kanssa) sulautuu ”minä”- ja ”sinä”-sanojen kanssa yhteen. Muut henkilöt ovat tavallisia.</p>
  <table class="taivutus">
    <tr><th>kanssani</th><td><span class="pt">comigo</span></td></tr>
    <tr><th>kanssasi</th><td><span class="pt">com você</span></td></tr>
    <tr><th>hänen kanssaan</th><td><span class="pt">com ele</span>, <span class="pt">com ela</span></td></tr>
    <tr><th>kanssamme</th><td><span class="pt">com a gente</span> (puhekieli), <span class="pt">conosco</span> (kirjakieli)</td></tr>
    <tr><th>teidän kanssanne</th><td><span class="pt">com vocês</span></td></tr>
    <tr><th>heidän kanssaan</th><td><span class="pt">com eles</span>, <span class="pt">com elas</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Haluatko tanssia kanssani?">Quer dançar comigo?</li>
    <li class="s" data-fi="Minä puhuin hänen kanssaan.">Eu falei com ele.</li>
    <li class="s" data-fi="Tuletko meidän kanssamme?">Você vem com a gente?</li>
  </ul>
  <div class="muista">
    <p><b>Muista, espanjasta tuleville:</b> <span class="pt">comigo</span> on lähes sama kuin espanjan <i>conmigo</i>. Mutta espanjan <i>contigo</i> (kanssasi) vastaa portugalissa <span class="pt">contigo</span> vain silloin, kun sanotaan <span class="pt">tu</span>. Belo Horizontessa sanotaan <span class="pt">com você</span>. Espanjan perfekti ja portugalin perfekti ovat hyvin samanlaisia (<i>hablé, habló</i> = <span class="pt">falei, falou</span>), mutta portugalissa sanassa <span class="pt">comi</span> ei ole aksenttimerkkiä (espanjaksi <i>comí</i>).</p>
  </div>
</section>

<section class="osio">
  <h2>Ääntäminen: tavun lopun l</h2>
  <p>Brasiliassa l ei ole l, kun se on tavun lopussa. Silloin se äännetään u:ksi, kuin lyhyt u-loppuääni vokaalin perässä. Tavun alussa l pysyy l:nä.</p>
  <ul class="esim">
    <li class="s">Brasil</li>
    <li class="s">final</li>
    <li class="s">papel</li>
    <li class="s">azul</li>
    <li class="s">futebol</li>
    <li class="s">alto</li>
    <li class="s">calma</li>
    <li class="s">falta</li>
  </ul>
  <p>Vertaa tavun alun l:ään, joka äännetään tavallisesti:</p>
  <ul class="esim">
    <li class="s">lua</li>
    <li class="s">bola</li>
    <li class="s">falar</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> Sanat, jotka päättyvät l:ään, ovat painollisia viimeiseltä tavulta: <span class="pt">papel</span> (pa-PEL), <span class="pt">final</span> (fi-NAL), <span class="pt">futebol</span> (fu-te-BOL).</p>
  </div>
</section>

<aside class="kulttuuri" data-paikka="clube-da-esquina">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Botecot ja Clube da Esquina</h3>
  <figure class="kuva" data-kuva="clube-da-esquina"></figure>
  <p><b>Boteco</b> (myös <span class="pt">botequim</span>) on Brasiliassa tavallinen, vaatimaton kulmakuppila. Siellä istutaan pöydän ääressä, juodaan kylmää olutta ja syödään pieniä annoksia, joita sanotaan nimellä <span class="pt">petisco</span> tai <span class="pt">tira-gosto</span>. Olut tarjoillaan usein tuoppina, jota sanotaan <span class="pt">chope</span>. Belo Horizontea kutsutaan usein ”botecojen pääkaupungiksi”, ja kaupungissa on lukematon määrä pieniä, perheyritysten pitämiä botecoja.</p>
  <p><b>Clube da Esquina</b> (”kulmakerho”) oli 1960- ja 1970-lukujen vaihteessa Belo Horizontessa syntynyt muusikkojen ystäväpiiri. Siihen kuuluivat muun muassa Milton Nascimento, Lô Borges ja Beto Guedes. Nimi tulee kadunkulmasta Santa Terezan kaupunginosassa, jossa ystävät kokoontuivat soittamaan ja juttelemaan. Vuonna 1972 ilmestyi kaksoislevy nimeltä <i>Clube da Esquina</i>. Musiikki yhdistää brasilialaista laulua, jazzia ja rockia, ja se tunnetaan koko Brasiliassa.</p>
  <p><b>Tarinassa:</b> Walker on soittanut Clube da Esquinan kappaleita huuliharpulla jo vuosia. Brasiliassa huuliharppua kutsutaan nimellä <span class="pt">gaita de boca</span>, ”suun gaita”.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>Kuvatehtävä: Jayn vastaaja</h3>
    <p class="ohje">Kuuntele Jayn ääniviestit (yllä) ja valitse oikea vastaus.</p>
    <div class="valinta" data-oikea="a Maia">
      <p class="kysymys">Quem ligou primeiro?</p>
      <div class="vaihtoehdot"><button type="button">a Mirela</button><button type="button">a Maia</button><button type="button">o Anderson</button></div>
    </div>
    <div class="valinta" data-oikea="os óculos escuros">
      <p class="kysymys"><span class="ryhma" data-hahmot="mateus"></span> O que o Jay esqueceu na mesa?</p>
      <div class="vaihtoehdot"><button type="button">o celular</button><button type="button">os óculos escuros</button><button type="button">o boné</button></div>
    </div>
    <div class="valinta" data-oikea="até as cinco">
      <p class="kysymys"><span class="ryhma" data-hahmot="walker"></span> O Walker tocou gaita…</p>
      <div class="vaihtoehdot"><button type="button">até as três</button><button type="button">até as cinco</button><button type="button">até as sete</button></div>
    </div>
    <div class="valinta" data-oikea="um boné">
      <p class="kysymys"><span class="ryhma" data-hahmot="anderson"></span> O que o Anderson encontrou na esquina?</p>
      <div class="vaihtoehdot"><button type="button">um boné</button><button type="button">uma carta</button><button type="button">a carteira</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Perfekti</h3>
    <p class="ohje">Kirjoita verbi perfektissä. Perusmuoto on sulkeissa. Muista kirjoitusasun muutokset (-quei, -guei, -cei).</p>
    <div class="aukot">
      <p>Ontem eu <span class="aukko" data-oikea="cantei"></span> no boteco. (cantar)</p>
      <p>A Marina <span class="aukko" data-oikea="dançou"></span> a noite inteira. (dançar)</p>
      <p>Nós <span class="aukko" data-oikea="comemos"></span> pão de queijo. (comer)</p>
      <p>O Walker <span class="aukko" data-oikea="tocou"></span> gaita de boca. (tocar)</p>
      <p>Eu <span class="aukko" data-oikea="toquei"></span> o tambor. (tocar)</p>
      <p>Eles <span class="aukko" data-oikea="beberam"></span> muito chope. (beber)</p>
      <p>Eu <span class="aukko" data-oikea="cheguei"></span> tarde na festa. (chegar)</p>
      <p>Você <span class="aukko" data-oikea="abriu"></span> a porta? (abrir)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>2. Kuuntele ja valitse</h3>
    <p class="ohje">Paina ▶ ja valitse muoto, jonka kuulit.</p>
    <div class="valinta" data-kuuntele="Ele falou" data-oikea="falou">
      <p class="kysymys">Ele ___</p>
      <div class="vaihtoehdot"><button type="button">falou</button><button type="button">falaram</button></div>
    </div>
    <div class="valinta" data-kuuntele="Eles comeram" data-oikea="comeram">
      <p class="kysymys">Eles ___</p>
      <div class="vaihtoehdot"><button type="button">comeu</button><button type="button">comeram</button></div>
    </div>
    <div class="valinta" data-kuuntele="Eu falei" data-oikea="falei">
      <p class="kysymys">Eu ___</p>
      <div class="vaihtoehdot"><button type="button">falei</button><button type="button">falou</button></div>
    </div>
    <div class="valinta" data-kuuntele="Eu abri a porta" data-oikea="abri">
      <p class="kysymys">Eu ___ a porta.</p>
      <div class="vaihtoehdot"><button type="button">abri</button><button type="button">abriu</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Com-muodot</h3>
    <p class="ohje">Valitse oikea muoto Belo Horizonten puhekielessä.</p>
    <div class="valinta" data-oikea="comigo">
      <p class="kysymys">Quer dançar ___? (kanssani)</p>
      <div class="vaihtoehdot"><button type="button">comigo</button><button type="button">com eu</button><button type="button">conmigo</button></div>
    </div>
    <div class="valinta" data-oikea="com você">
      <p class="kysymys">Eu quero dançar ___. (kanssasi)</p>
      <div class="vaihtoehdot"><button type="button">contigo</button><button type="button">com você</button><button type="button">com tu</button></div>
    </div>
    <div class="valinta" data-oikea="com a gente">
      <p class="kysymys">A Marta vai ___ ao boteco. (meidän kanssamme, puhekieli)</p>
      <div class="vaihtoehdot"><button type="button">com a gente</button><button type="button">comigo</button><button type="button">com eles</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Yhdistä</h3>
    <p class="ohje">Yhdistä suomi ja portugali.</p>
    <ul class="yhdista">
      <li data-pari="kanssani">comigo</li>
      <li data-pari="kanssasi">com você</li>
      <li data-pari="kanssamme (puhekieli)">com a gente</li>
      <li data-pari="hänen kanssaan (nainen)">com ela</li>
      <li data-pari="heidän kanssaan">com eles</li>
      <li data-pari="teidän kanssanne">com vocês</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause. Muista pisteet ja aksenttimerkit.</p>
    <div class="sanelu" data-puhu="Eu já comi."></div>
    <div class="sanelu" data-puhu="O Walker tocou gaita."></div>
    <div class="sanelu" data-puhu="Você dançou comigo."></div>
    <div class="sanelu" data-puhu="Eles chegaram tarde."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Söitkö jo?</p><p class="s" data-fi="Söitkö jo?">Você já comeu?</p></div>
    <div class="kaanna"><p class="fi">Minä join vain yhden tuopin.</p><p class="s" data-fi="Minä join vain yhden tuopin.">Eu bebi só um chope.</p></div>
    <div class="kaanna"><p class="fi">Me tanssittiin koko yö.</p><p class="s" data-fi="Me tanssittiin koko yö.">A gente dançou a noite inteira.</p></div>
    <div class="kaanna"><p class="fi">Haluatko tanssia kanssani?</p><p class="s" data-fi="Haluatko tanssia kanssani?">Quer dançar comigo?</p></div>
    <div class="kaanna"><p class="fi">Mateus soitti rumpua kahdeksasta asti.</p><p class="s" data-fi="Mateus soitti rumpua kahdeksasta asti.">O Mateus tocou o tambor desde as oito.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. Paino</h3>
    <p class="ohje">Napsauta painollista tavua. L-loppuiset sanat ovat painollisia viimeiseltä tavulta.</p>
    <p><span class="paino" data-tavut="pa|pel" data-oikea="2"></span> <span class="paino" data-tavut="fi|nal" data-oikea="2"></span> <span class="paino" data-tavut="fu|te|bol" data-oikea="3"></span> <span class="paino" data-tavut="a|ni|mal" data-oikea="3"></span> <span class="paino" data-tavut="cho|pe" data-oikea="1"></span> <span class="paino" data-tavut="bo|te|co" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin. Oma vastauksesi voi olla toinen.</p>
    <details class="vastaus">
      <summary lang="pt-BR">O que você comeu ontem?</summary>
      <p class="s" data-fi="Söin pão de queijoa ja papuja.">Comi pão de queijo e feijão.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você dançou ontem à noite?</summary>
      <p class="s" data-fi="Tanssin / En tanssinut.">Dancei. / Não dancei.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Quem tocou gaita de boca na festa?</summary>
      <p class="s" data-fi="Walker soitti huuliharppua.">O Walker tocou.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você quer dançar comigo?</summary>
      <p class="s" data-fi="Haluan tanssia kanssasi!">Quero dançar com você!</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l16">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l16-viesti" lang="pt-BR">
      <div class="kal-yla"><b>A minha mensagem de voz</b><small>jätä ääniviesti ystävälle: mitä teit eilen?</small></div>
      <div class="kal-rivit">
        <label>Para… <input name="kenelle" placeholder="Oi, Maia!"></label>
        <label>Ontem eu… <input name="eilen" placeholder="Ontem eu dancei a noite toda."></label>
        <label>Depois eu… <input name="sitten" placeholder="Depois eu comi pão de queijo."></label>
        <label>Você…? <input name="kysymys" placeholder="Você gostou da festa?"></label>
        <label>No fim <input name="loppu" placeholder="Me liga! Tchau!"></label>
      </div>
    </div>
    <p>Kirjoita 5–6 lausetta siitä, mitä teit eilen illalla tai viime viikonloppuna. Käytä ainakin yhtä -ar-, yhtä -er- ja yhtä -ir-verbiä perfektissä ja yhtä <span class="pt">com</span>-muotoa. Sano teksti sitten ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Eilen illalla minä tanssin ystävien kanssa.">Ontem à noite eu dancei com os amigos.</p>
      <p class="s" data-fi="Me söimme pão de queijoa.">A gente comeu pão de queijo.</p>
      <p class="s" data-fi="Minä join vain yhden oluen.">Eu bebi só uma cerveja.</p>
      <p class="s" data-fi="Maia avasi ison pullon vettä.">A Maia abriu uma garrafa de água.</p>
      <p class="s" data-fi="Minä tulin kotiin myöhään, eikä Walker soittanut.">Eu cheguei em casa tarde, e o Walker não tocou.</p>
    </details>
  </div>
</section>
`
});
