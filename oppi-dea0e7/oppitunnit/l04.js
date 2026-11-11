/* Jakso 4: Kahvilassa ja baarissa, Jayn filosofiaa. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l04',
  lyhyt: '4',
  jakso: 'Jakso 4',
  otsikko: 'Tilaaminen ja hinnat: -ar-, -er- ja -ir-verbit',
  lahde: 'Aihe: kahvila, hinnat, numerot 20–100 · Kielioppi: -ar / -er / -ir-verbit, ir + perusmuoto · Ääntäminen: h, ch, nh, lh',
  aiheet: ['ruoka', 'raha', 'numerot', 'toiminta', 'ajattelu'],
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi ja taiteilija, maksaa laskun' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi ja harrastelijafilosofi' }
  },

  sanasto: [
    'bolo', 'sanduíche', 'cafezinho', 'pão de queijo', 'suco', 'chope', 'conta', 'eu queria',
    'gostar', 'eu gosto de', 'eu como', 'penso', 'eu trabalho', 'abro', 'vou beber', 'vamos beber',
    'cem', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa',
    'salgado', 'troco', 'quanto é'
  ],

  sanat: {
    'cardápio': { fi: 'ruokalista', aa: 'kah-DA-pju', ipa: '[kahˈdapju]', sl: 'substantiivi, maskuliini', huom: 'myös menu' },
    'bebidas': { fi: 'juomat', aa: 'be-BI-das', ipa: '[beˈbidɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {bebida}' },
    'bebida': { fi: 'juoma', aa: 'be-BI-da', ipa: '[beˈbidɐ]', sl: 'substantiivi, feminiini', huom: 'monikko {bebidas}' },
    'comidas': { fi: 'ruoat', aa: 'ko-MI-das', ipa: '[koˈmidɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {comida}' },
    // dialogi
    'num café': { fi: 'kahvilassa', aa: 'nũ ka-FE', ipa: '[nũ kaˈfɛ]', sl: 'ilmaus', huom: '{em} + {um} = {num}' },
    'kallio': { kieli: 'fi', fi: 'Kallio (Helsingin kaupunginosa)', aa: 'KAL-li-o', ipa: '[ˈkɑlːio]', sl: 'paikannimi', huom: 'suomalainen nimi sanotaan niin kuin suomeksi' },
    'quê': { fi: 'mikä, mitä (kysymyksen lopussa)', aa: 'KE', ipa: '[ke]', sl: 'kysymyssana', huom: 'em quê? = mistä? mihin? Aksentti, kun sana on painollinen ja lauseen lopussa' },
    'eu quero': { fi: 'haluan', aa: 'EU KE-ru', ipa: '[ew ˈkɛɾu]', sl: 'ilmaus', huom: 'perusmuoto {querer}' },
    'quero': { fi: '(minä) haluan', aa: 'KE-ru', ipa: '[ˈkɛɾu]', sl: 'verbi', huom: 'perusmuoto {querer}; ”eu queria” on kohteliaampi' },
    'bolo': { fi: 'kakku, leivos', aa: 'BO-lu', ipa: '[ˈbolu]', sl: 'substantiivi, maskuliini' },
    'um café e um bolo': { fi: 'kahvi ja kakkupala', aa: 'Ũ ka-FE i Ũ BO-lu', ipa: '[ũ kaˈfɛ i ũ ˈbolu]', sl: 'ilmaus' },
    'eu bebo': { fi: 'juon', aa: 'EU BE-bu', ipa: '[ew ˈbebu]', sl: 'ilmaus', huom: 'perusmuoto {beber}' },
    'bebo': { fi: '(minä) juon', aa: 'BE-bu', ipa: '[ˈbebu]', sl: 'verbi', huom: 'perusmuoto {beber}' },
    'bebem': { fi: 'juovat, juotte', aa: 'BE-bẽi', ipa: '[ˈbebẽj]', sl: 'verbi', huom: 'perusmuoto {beber}' },
    'me gosta': { fi: '(väärin) minua miellyttää', aa: 'mi GOS-ta', ipa: '[mi ˈɡostɐ]', sl: 'virhe', huom: 'espanjan me gusta; portugaliksi {eu gosto de}' },
    'gosta': { fi: 'pitää (hän pitää; sinä pidät)', aa: 'GOS-ta', ipa: '[ˈɡɔstɐ]', sl: 'verbi', huom: 'perusmuoto {gostar}; aina prepositio {de}' },
    'gosto': { fi: '(minä) pidän', aa: 'GOS-tu', ipa: '[ˈɡostu]', sl: 'verbi', huom: 'perusmuoto {gostar}; aina prepositio {de}; myös substantiivi ”maku”' },
    'gostar': { fi: 'pitää jostakin', aa: 'gos-TAH', ipa: '[ɡosˈtah]', sl: 'verbi, perusmuoto', huom: 'gostar de + sana: eu gosto de café. Ansa: ei espanjan me gusta -rakenne' },
    'eu gosto de': { fi: 'minä pidän (jostakin)', aa: 'EU GOS-tu di', ipa: '[ew ˈɡostu dʒi]', sl: 'ilmaus' },
    'eu gosto do café': { fi: 'pidän kahvista', aa: 'EU GOS-tu du ka-FE', ipa: '[ew ˈɡostu du kaˈfɛ]', sl: 'ilmaus' },
    'gostar é com': { fi: 'gostar on aina prepositiolla', aa: 'gos-TAH E kõ', ipa: '[ɡosˈtah ɛ kõ]', sl: 'ilmaus' },
    'forte': { fi: 'vahva, voimakas', aa: 'FOH-tsi', ipa: '[ˈfɔhtʃi]', sl: 'adjektiivi', huom: 'sama muoto miehelle ja naiselle' },
    'comem': { fi: 'syövät, syötte', aa: 'KO-mẽi', ipa: '[ˈkomẽj]', sl: 'verbi', huom: 'perusmuoto {comer}' },
    'eles bebem': { fi: 'he juovat', aa: 'E-lis BE-bẽi', ipa: '[ˈelis ˈbebẽj]', sl: 'ilmaus' },
    'trabalhar': { fi: 'tehdä työtä', aa: 'tra-ba-LJAH', ipa: '[tɾabaˈʎah]', sl: 'verbi, perusmuoto' },
    'vamos trabalhar': { fi: 'me aiomme tehdä töitä', aa: 'VÃ-mus tra-ba-LJAH', ipa: '[ˈvɐ̃mus tɾabaˈʎah]', sl: 'ilmaus' },
    'nós vamos trabalhar': { fi: 'me aiomme tehdä töitä', aa: 'NOS VÃ-mus tra-ba-LJAH', ipa: '[nɔs ˈvɐ̃mus tɾabaˈʎah]', sl: 'ilmaus' },
    'eu não vou trabalhar': { fi: 'en aio tehdä töitä', aa: 'EU NÃU VOU tra-ba-LJAH', ipa: '[ew nɐ̃w vow tɾabaˈʎah]', sl: 'ilmaus' },
    'eu vou pensar': { fi: 'minä aion ajatella', aa: 'EU VOU pẽ-SAH', ipa: '[ew vow pẽˈsah]', sl: 'ilmaus' },
    'pensa': { fi: 'ajattelee, ajattelet', aa: 'PẼ-sa', ipa: '[ˈpẽsɐ]', sl: 'verbi', huom: 'perusmuoto {pensar}' },
    'pensar': { fi: 'ajatella', aa: 'pẽ-SAH', ipa: '[pẽˈsah]', sl: 'verbi, perusmuoto', huom: 'pensar em = ajatella jotakin' },
    'penso': { fi: '(minä) ajattelen', aa: 'PẼ-su', ipa: '[ˈpẽsu]', sl: 'verbi', huom: 'perusmuoto {pensar}' },
    'em quê': { fi: 'mistä? mitä? (”pensar em quê?”)', aa: 'ẽi KE', ipa: '[ẽj ˈke]', sl: 'kysymys', huom: 'kysymyksen lopussa quê saa aksentin' },
    'pensar em quê': { fi: 'ajatella mitä?', aa: 'pẽ-SAH ẽi KE', ipa: '[pẽˈsah ẽj ˈke]', sl: 'kysymys' },
    'na vida': { fi: 'elämästä (kirjaimellisesti: elämässä)', aa: 'na VI-da', ipa: '[na ˈvidɐ]', sl: 'ilmaus', huom: '{em} + {a}' },
    'existo': { fi: '(minä) olen olemassa', aa: 'e-ZIS-tu', ipa: '[eˈzistu]', sl: 'verbi', huom: 'perusmuoto {existir}' },
    'existir': { fi: 'olla olemassa', aa: 'e-zis-TSIH', ipa: '[ezisˈtʃih]', sl: 'verbi, perusmuoto' },
    'à noite': { fi: 'illalla, yöllä', aa: 'a NOI-tsi', ipa: '[a ˈnojtʃi]', sl: 'ilmaus', huom: '{a} + {a}; ”de noite” on yhtä tavallinen' },
    'eles estão num bar': { fi: 'he ovat baarissa', aa: 'E-lis es-TÃU nũ BAH', ipa: '[ˈelis esˈtɐ̃w nũ bah]', sl: 'lause' },
    'agora eu bebo': { fi: 'nyt minä juon', aa: 'a-GO-ra EU BE-bu', ipa: '[aˈɡɔɾɐ ew ˈbebu]', sl: 'ilmaus' },
    'abro': { fi: '(minä) avaan', aa: 'A-bru', ipa: '[ˈabɾu]', sl: 'verbi', huom: 'perusmuoto {abrir}' },
    'abre': { fi: 'avaa, avaat', aa: 'A-bri', ipa: '[ˈabɾi]', sl: 'verbi', huom: 'perusmuoto {abrir}' },
    'abrimos': { fi: '(me) avaamme', aa: 'a-BRĨ-mus', ipa: '[aˈbɾĩmus]', sl: 'verbi', huom: 'perusmuoto {abrir}' },
    'abrem': { fi: 'avaavat, avaatte', aa: 'A-brẽi', ipa: '[ˈabɾẽj]', sl: 'verbi', huom: 'perusmuoto {abrir}' },
    'abrir': { fi: 'avata', aa: 'a-BRIH', ipa: '[aˈbɾih]', sl: 'verbi, perusmuoto' },
    'a mente': { fi: 'mieli', aa: 'a MẼ-tsi', ipa: '[a ˈmẽtʃi]', sl: 'ilmaus' },
    'mente': { fi: 'mieli, ajatus', aa: 'MẼ-tsi', ipa: '[ˈmẽtʃi]', sl: 'substantiivi, feminiini' },
    'você abre': { fi: 'sinä avaat', aa: 'vo-SE A-bri', ipa: '[voˈse ˈabɾi]', sl: 'ilmaus' },
    'só a garrafa': { fi: 'vain pullon', aa: 'SO a ga-HA-fa', ipa: '[sɔ a ɡaˈhafɐ]', sl: 'ilmaus' },
    'garrafa': { fi: 'pullo', aa: 'ga-HA-fa', ipa: '[ɡaˈhafɐ]', sl: 'substantiivi, feminiini' },
    'simples': { fi: 'yksinkertainen', aa: 'SĨ-plis', ipa: '[ˈsĩplis]', sl: 'adjektiivi', huom: 'sama muoto miehelle ja naiselle' },
    'eu como': { fi: 'syön', aa: 'EU KO-mu', ipa: '[ew ˈkomu]', sl: 'ilmaus', huom: 'ansa: {como} tarkoittaa myös ”miten, kuten”. Verbi {comer}' },
    'comer': { fi: 'syödä', aa: 'ko-MEH', ipa: '[koˈmeh]', sl: 'verbi, perusmuoto' },
    'beber': { fi: 'juoda', aa: 'be-BEH', ipa: '[beˈbeh]', sl: 'verbi, perusmuoto' },
    'eu trabalho': { fi: 'minä teen työtä', aa: 'EU tra-BA-lju', ipa: '[ew tɾaˈbaʎu]', sl: 'ilmaus' },
    'eu pinto': { fi: 'minä maalaan', aa: 'EU PĨ-tu', ipa: '[ew ˈpĩtu]', sl: 'ilmaus' },
    'pinto': { fi: '(minä) maalaan', aa: 'PĨ-tu', ipa: '[ˈpĩtu]', sl: 'verbi', huom: 'perusmuoto {pintar}' },
    'pinta': { fi: 'maalaa, maalaat', aa: 'PĨ-ta', ipa: '[ˈpĩtɐ]', sl: 'verbi', huom: 'perusmuoto {pintar}' },
    'pintar': { fi: 'maalata', aa: 'pĩ-TAH', ipa: '[pĩˈtah]', sl: 'verbi, perusmuoto' },
    'eu pago a conta': { fi: 'minä maksan laskun', aa: 'EU PA-gu a KÕ-ta', ipa: '[ew ˈpaɡu a ˈkõtɐ]', sl: 'lause' },
    'pago': { fi: '(minä) maksan', aa: 'PA-gu', ipa: '[ˈpaɡu]', sl: 'verbi', huom: 'perusmuoto {pagar}' },
    'pagar': { fi: 'maksaa (jotakin)', aa: 'pa-GAH', ipa: '[paˈɡah]', sl: 'verbi, perusmuoto' },
    'a conta': { fi: 'lasku', aa: 'a KÕ-ta', ipa: '[a ˈkõtɐ]', sl: 'ilmaus' },
    'conta': { fi: 'lasku; tili', aa: 'KÕ-ta', ipa: '[ˈkõtɐ]', sl: 'substantiivi, feminiini', huom: 'myös verbi {contar}: hän laskee, kertoo' },
    'quanto é a conta': { fi: 'paljonko lasku on?', aa: 'KUÃ-tu E a KÕ-ta', ipa: '[ˈkwɐ̃tu ɛ a ˈkõtɐ]', sl: 'kysymys' },
    'quanto é': { fi: 'paljonko se on?', aa: 'KUÃ-tu E', ipa: '[ˈkwɐ̃tu ɛ]', sl: 'kysymys', huom: 'maksaessa' },
    'sanduíche': { fi: 'voileipä, sämpylä', aa: 'sã-du-I-shi', ipa: '[sɐ̃duˈiʃi]', sl: 'substantiivi, maskuliini', huom: 'myös {sanduíches}; kirjoitetaan aksentilla' },
    'sanduíches': { fi: 'voileivät', aa: 'sã-du-I-shis', ipa: '[sɐ̃duˈiʃis]', sl: 'substantiivi, maskuliini, monikko' },
    'trinta e cinco': { fi: 'kolmekymmentäviisi', aa: 'TRĨ-ta i SĨ-ku', ipa: '[ˈtɾĩtɐ i ˈsĩku]', sl: 'lukusana' },
    'trinta e cinco euros': { fi: 'kolmekymmentäviisi euroa', aa: 'TRĨ-ta i SĨ-ku EU-rus', ipa: '[ˈtɾĩtɐ i ˈsĩku ˈewɾus]', sl: 'ilmaus' },
    'mais barata': { fi: 'halvempi (feminiini)', aa: 'MAIS ba-RA-ta', ipa: '[majs baˈɾatɐ]', sl: 'ilmaus', huom: 'mais + adjektiivi = vertailu; barata sopii feminiinisanaan' },
    'barata': { fi: 'halpa (feminiini)', aa: 'ba-RA-ta', ipa: '[baˈɾatɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {barato}' },
    'né': { fi: 'eikö niin?, vai mitä?', aa: 'NE', ipa: '[nɛ]', sl: 'puhekieli', huom: 'lyhenne sanoista não é' },
    'a gente vai beber': { fi: 'me aiomme juoda', aa: 'a ZHẼ-tsi VAI be-BEH', ipa: '[a ˈʒẽtʃi vaj beˈbeh]', sl: 'ilmaus' },
    'beber cerveja': { fi: 'juoda olutta', aa: 'be-BEH seh-VE-zha', ipa: '[beˈbeh sehˈveʒɐ]', sl: 'ilmaus' },
    'comer pão de queijo': { fi: 'syödä juustoleipää', aa: 'ko-MEH PÃU di KEI-zhu', ipa: '[koˈmeh pɐ̃w dʒi ˈkejʒu]', sl: 'ilmaus' },
    'pão de queijo': { fi: 'juustoleipä (minasgeraisilainen pikkuleipä)', aa: 'PÃU di KEI-zhu', ipa: '[ˈpɐ̃w dʒi ˈkejʒu]', sl: 'substantiivi, maskuliini', huom: 'tehdään maniokkitärkkelyksestä ja juustosta' },
    'adoro': { fi: '(minä) rakastan, ihailen', aa: 'a-DO-ru', ipa: '[aˈdoɾu]', sl: 'verbi', huom: 'perusmuoto {adorar}; ei prepositiota: eu adoro café' },
    'eu adoro': { fi: 'minä rakastan (jotakin)', aa: 'EU a-DO-ru', ipa: '[ew aˈdoɾu]', sl: 'ilmaus', huom: 'ei prepositiota, toisin kuin {gostar}' },
    'amo': { fi: '(minä) rakastan', aa: 'Ã-mu', ipa: '[ˈɐ̃mu]', sl: 'verbi', huom: 'perusmuoto {amar}' },

    // teemasanasto: kahvila
    'cafezinho': { fi: 'pieni vahva kahvi', aa: 'ka-fe-ZĨ-nju', ipa: '[kafeˈzĩɲu]', sl: 'substantiivi, maskuliini', huom: 'café + pääte -zinho = pikkukahvi' },
    'café com leite': { fi: 'maitokahvi', aa: 'ka-FE kõ LEI-tsi', ipa: '[kaˈfɛ kõ ˈlejtʃi]', sl: 'ilmaus' },
    'suco': { fi: 'mehu', aa: 'SU-ku', ipa: '[ˈsuku]', sl: 'substantiivi, maskuliini' },
    'refrigerante': { fi: 'limsa, virvoitusjuoma', aa: 'he-fri-zhe-RÃ-tsi', ipa: '[hefɾiʒeˈɾɐ̃tʃi]', sl: 'substantiivi, maskuliini' },
    'chope': { fi: 'tuoppi (hanaolut)', aa: 'SHO-pi', ipa: '[ˈʃopi]', sl: 'substantiivi, maskuliini', huom: 'Brasiliassa kylmä hanaolut' },
    'doce': { fi: 'makea; jälkiruoka, makeinen', aa: 'DO-si', ipa: '[ˈdosi]', sl: 'adjektiivi, substantiivi', huom: 'sama muoto miehelle ja naiselle' },
    'salgado': { fi: 'suolainen; suolainen välipala', aa: 'sau-GA-du', ipa: '[sawˈɡadu]', sl: 'adjektiivi, substantiivi', huom: 'kahviloissa salgado = suolainen leivonnainen' },
    'troco': { fi: 'vaihtoraha', aa: 'TRO-ku', ipa: '[ˈtɾoku]', sl: 'substantiivi, maskuliini' },
    'eu queria': { fi: 'haluaisin (kohtelias tilaus)', aa: 'EU ke-RI-a', ipa: '[ew keˈɾiɐ]', sl: 'ilmaus', huom: 'kohteliaampi kuin {eu quero}' },
    'queria': { fi: 'halusi; haluaisi', aa: 'ke-RI-a', ipa: '[keˈɾiɐ]', sl: 'verbi', huom: 'perusmuoto {querer}' },
    'um cafezinho': { fi: 'pieni kahvi', aa: 'Ũ ka-fe-ZĨ-nju', ipa: '[ũ kafeˈzĩɲu]', sl: 'ilmaus' },
    'água': { fi: 'vesi', aa: 'A-gua', ipa: '[ˈaɡwɐ]', sl: 'substantiivi, feminiini' },

    // numerot 20–100
    'trinta': { fi: 'kolmekymmentä', aa: 'TRĨ-ta', ipa: '[ˈtɾĩtɐ]', sl: 'lukusana' },
    'quarenta': { fi: 'neljäkymmentä', aa: 'kua-RẼ-ta', ipa: '[kwaˈɾẽtɐ]', sl: 'lukusana' },
    'cinquenta': { fi: 'viisikymmentä', aa: 'sĩ-KUẼ-ta', ipa: '[sĩˈkwẽtɐ]', sl: 'lukusana' },
    'sessenta': { fi: 'kuusikymmentä', aa: 'se-SẼ-ta', ipa: '[seˈsẽtɐ]', sl: 'lukusana' },
    'setenta': { fi: 'seitsemänkymmentä', aa: 'se-TẼ-ta', ipa: '[seˈtẽtɐ]', sl: 'lukusana' },
    'oitenta': { fi: 'kahdeksankymmentä', aa: 'oi-TẼ-ta', ipa: '[ojˈtẽtɐ]', sl: 'lukusana' },
    'noventa': { fi: 'yhdeksänkymmentä', aa: 'no-VẼ-ta', ipa: '[noˈvẽtɐ]', sl: 'lukusana' },
    'cem': { fi: 'sata', aa: 'SẼI', ipa: '[sẽj]', sl: 'lukusana', huom: 'vain kun luku on tasan 100; 101 = cento e um' },
    'vinte e um': { fi: 'kaksikymmentäyksi', aa: 'VĨ-tsi i Ũ', ipa: '[ˈvĩtʃi i ũ]', sl: 'lukusana' },
    'vinte e uma': { fi: 'kaksikymmentäyksi (feminiini)', aa: 'VĨ-tsi i U-ma', ipa: '[ˈvĩtʃi i ˈumɐ]', sl: 'lukusana' },
    'vinte e dois': { fi: 'kaksikymmentäkaksi', aa: 'VĨ-tsi i DOIS', ipa: '[ˈvĩtʃi i dojs]', sl: 'lukusana' },
    'trinta e três': { fi: 'kolmekymmentäkolme', aa: 'TRĨ-ta i TRES', ipa: '[ˈtɾĩtɐ i tɾes]', sl: 'lukusana' },
    'quarenta e sete': { fi: 'neljäkymmentäseitsemän', aa: 'kua-RẼ-ta i SE-tsi', ipa: '[kwaˈɾẽtɐ i ˈsɛtʃi]', sl: 'lukusana' },
    'cinquenta e oito': { fi: 'viisikymmentäkahdeksan', aa: 'sĩ-KUẼ-ta i OI-tu', ipa: '[sĩˈkwẽtɐ i ˈojtu]', sl: 'lukusana' },
    'sessenta e nove': { fi: 'kuusikymmentäyhdeksän', aa: 'se-SẼ-ta i NO-vi', ipa: '[seˈsẽtɐ i ˈnɔvi]', sl: 'lukusana' },
    'setenta e quatro': { fi: 'seitsemänkymmentäneljä', aa: 'se-TẼ-ta i KUA-tru', ipa: '[seˈtẽtɐ i ˈkwatɾu]', sl: 'lukusana' },
    'oitenta e cinco': { fi: 'kahdeksankymmentäviisi', aa: 'oi-TẼ-ta i SĨ-ku', ipa: '[ojˈtẽtɐ i ˈsĩku]', sl: 'lukusana' },
    'noventa e seis': { fi: 'yhdeksänkymmentäkuusi', aa: 'no-VẼ-ta i SEIS', ipa: '[noˈvẽtɐ i sejs]', sl: 'lukusana' },
    'cento': { fi: 'sata (yhdistelmissä)', aa: 'SẼ-tu', ipa: '[ˈsẽtu]', sl: 'lukusana', huom: 'cento e um = 101' },

    // kielioppi: verbimuodot ja esimerkit
    'falamos': { fi: '(me) puhumme', aa: 'fa-LÃ-mus', ipa: '[faˈlɐ̃mus]', sl: 'verbi', huom: 'perusmuoto {falar}' },
    'comemos': { fi: '(me) syömme', aa: 'ko-MẼ-mus', ipa: '[koˈmẽmus]', sl: 'verbi', huom: 'perusmuoto {comer}' },
    'come': { fi: 'syö, syöt', aa: 'KO-mi', ipa: '[ˈkomi]', sl: 'verbi', huom: 'perusmuoto {comer}' },
    'bebemos': { fi: '(me) juomme', aa: 'be-BE-mus', ipa: '[beˈbemus]', sl: 'verbi', huom: 'perusmuoto {beber}' },
    'trabalhamos': { fi: '(me) työskentelemme', aa: 'tra-ba-LJÃ-mus', ipa: '[tɾabaˈʎɐ̃mus]', sl: 'verbi', huom: 'perusmuoto {trabalhar}' },
    'trabalha': { fi: 'työskentelee, työskentelet', aa: 'tra-BA-lja', ipa: '[tɾaˈbaʎɐ]', sl: 'verbi', huom: 'perusmuoto {trabalhar}' },
    'moro': { fi: '(minä) asun', aa: 'MO-ru', ipa: '[ˈmɔɾu]', sl: 'verbi', huom: 'perusmuoto {morar}' },
    'mora': { fi: 'asuu, asut', aa: 'MO-ra', ipa: '[ˈmɔɾɐ]', sl: 'verbi', huom: 'perusmuoto {morar}' },
    'moram': { fi: 'asuvat, asutte', aa: 'MO-rãu', ipa: '[ˈmoɾɐ̃w]', sl: 'verbi', huom: 'perusmuoto {morar}' },
    'morar': { fi: 'asua', aa: 'mo-RAH', ipa: '[moˈɾah]', sl: 'verbi, perusmuoto' },
    'compra': { fi: 'ostaa, ostat', aa: 'KÕ-pra', ipa: '[ˈkõpɾɐ]', sl: 'verbi', huom: 'perusmuoto {comprar}' },
    'comprar': { fi: 'ostaa', aa: 'kõ-PRAH', ipa: '[kõˈpɾah]', sl: 'verbi, perusmuoto' },
    'falo': { fi: '(minä) puhun', aa: 'FA-lu', ipa: '[ˈfalu]', sl: 'verbi', huom: 'perusmuoto {falar}' },
    'vendo': { fi: '(minä) myyn', aa: 'VẼ-du', ipa: '[ˈvẽdu]', sl: 'verbi', huom: 'perusmuoto {vender}; ansa: ei ver (nähdä)' },
    'vende': { fi: 'myy, myyt', aa: 'VẼ-di', ipa: '[ˈvẽdʒi]', sl: 'verbi', huom: 'perusmuoto {vender}' },
    'vender': { fi: 'myydä', aa: 'vẽ-DEH', ipa: '[vẽˈdeh]', sl: 'verbi, perusmuoto' },
    'decido': { fi: '(minä) päätän', aa: 'de-SI-du', ipa: '[deˈsidu]', sl: 'verbi', huom: 'perusmuoto {decidir}' },
    'decidir': { fi: 'päättää', aa: 'de-si-DIH', ipa: '[desiˈdʒih]', sl: 'verbi, perusmuoto' },
    'o jay bebe': { fi: 'Jay juo', aa: 'u ZHEI BE-bi', ipa: '[u ˈʒej ˈbebi]', sl: 'ilmaus' },
    'bebe': { fi: 'juo, juot', aa: 'BE-bi', ipa: '[ˈbebi]', sl: 'verbi', huom: 'perusmuoto {beber}' },
    'a maia pinta': { fi: 'Maia maalaa', aa: 'a MAI-a PĨ-ta', ipa: '[a ˈmaja ˈpĩtɐ]', sl: 'ilmaus' },
    'o jay não trabalha': { fi: 'Jay ei tee töitä', aa: 'u ZHEI NÃU tra-BA-lja', ipa: '[u ˈʒej nɐ̃w tɾaˈbaʎɐ]', sl: 'ilmaus' },
    'vou comprar': { fi: 'aion ostaa', aa: 'VOU kõ-PRAH', ipa: '[vow kõˈpɾah]', sl: 'ilmaus' },
    'vamos beber': { fi: 'aiomme juoda; juodaan', aa: 'VÃ-mus be-BEH', ipa: '[ˈvɐ̃mus beˈbeh]', sl: 'ilmaus' },
    'vão comer': { fi: 'aikovat syödä', aa: 'VÃU ko-MEH', ipa: '[vɐ̃w koˈmeh]', sl: 'ilmaus' },
    'vai pagar': { fi: 'aikoo maksaa', aa: 'VAI pa-GAH', ipa: '[vaj paˈɡah]', sl: 'ilmaus' },
    'vou beber': { fi: 'aion juoda', aa: 'VOU be-BEH', ipa: '[vow beˈbeh]', sl: 'ilmaus' },
    'não vou': { fi: 'en aio, en mene', aa: 'NÃU VOU', ipa: '[nɐ̃w vow]', sl: 'ilmaus' },
    'depois': { fi: 'sen jälkeen, myöhemmin', aa: 'de-POIS', ipa: '[deˈpojs]', sl: 'adverbi' },

    // ääntäminen
    'chuva': { fi: 'sade', aa: 'SHU-va', ipa: '[ˈʃuvɐ]', sl: 'substantiivi, feminiini' },
    'chegar': { fi: 'saapua', aa: 'she-GAH', ipa: '[ʃeˈɡah]', sl: 'verbi, perusmuoto' },
    'banho': { fi: 'kylpy, suihku', aa: 'BÃ-nju', ipa: '[ˈbɐ̃ɲu]', sl: 'substantiivi, maskuliini' },
    'olho': { fi: 'silmä', aa: 'O-lju', ipa: '[ˈoʎu]', sl: 'substantiivi, maskuliini' },
    'mulher': { fi: 'nainen; vaimo', aa: 'mu-LJEH', ipa: '[muˈʎɛh]', sl: 'substantiivi, feminiini', huom: 'monikko mulheres' },
    'hora': { fi: 'tunti; kellonaika', aa: 'O-ra', ipa: '[ˈɔɾɐ]', sl: 'substantiivi, feminiini', huom: 'alun h on äänetön' },
    'ninho': { fi: 'pesä', aa: 'NĨ-nju', ipa: '[ˈnĩɲu]', sl: 'substantiivi, maskuliini' },
    'chave': { fi: 'avain', aa: 'SHA-vi', ipa: '[ˈʃavi]', sl: 'substantiivi, feminiini' },
    'folha': { fi: 'lehti; paperiarkki', aa: 'FO-lja', ipa: '[ˈfoʎɐ]', sl: 'substantiivi, feminiini' }
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat tilata kahvilassa ja baarissa ja pyytää laskun.</li>
  <li>Osaat lukea hinnat lukuihin 100 asti.</li>
  <li>Osaat taivuttaa säännöllisiä <b>-ar</b>-, <b>-er</b>- ja <b>-ir</b>-verbejä ja kertoa, mitä aiot tehdä (<span class="pt">vou beber</span>).</li>
  <li>Osaat sanoa, mistä pidät (<span class="pt">gostar de</span>) ja lausua äänteet ch, nh ja lh.</li>
</ul>
<p data-paikka="kallio-kahvila">Helsinki, Kallio, lauantai. Jay ja Maia istuvat ensin kahvilassa ja illalla baarissa. Jay filosofoi, kuten aina, ja Maia maksaa laskun.</p>

<section class="osio">
  <h2>Dialogi: Penso, logo existo</h2>
  <p class="ohje">Kuuntele ensin ilman suomennoksia. Jay tekee heti alussa espanjasta tulevan virheen verbillä <span class="pt">gostar</span>. Kuuntele, miten Maia korjaa sen.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Helsinki, Kallio. Jay ja Maia ovat kahvilassa.">Helsinque, no Kallio. Jay e Maia estão num café.</p>
    <p class="s" data-h="maia" data-fi="Haluan kahvin ja kakkupalan. Entä sinä, Jay?">Eu quero um café e um bolo. E você, Jay?</p>
    <p class="s" data-h="jay" data-fi="Minäkin juon kahvin. Minua miellyttää suomalainen kahvi (väärin): se on vahvaa!">Eu bebo um café também. Me gosta o café finlandês: é forte!</p>
    <p class="s" data-h="maia" data-fi="Jay! Portugaliksi sanotaan eu gosto de café. Gostar on aina prepositiolla de.">Jay! Em português é eu gosto de café. Gostar é sempre com de.</p>
    <p class="s" data-h="jay" data-fi="Anteeksi! Minä pidän suomalaisesta kahvista.">Desculpa! Eu gosto do café finlandês.</p>
    <p class="s" data-h="kertoja" data-fi="He juovat kahvia ja syövät kakkua.">Eles bebem café e comem bolo.</p>
    <p class="s" data-h="maia" data-fi="Tänään me teemme paljon töitä, Jay.">Hoje nós vamos trabalhar muito, Jay.</p>
    <p class="s" data-h="jay" data-fi="Minä en aio tehdä paljon töitä. Minä aion ajatella.">Eu não vou trabalhar muito. Eu vou pensar.</p>
    <p class="s" data-h="maia" data-fi="Ajatella mitä?">Pensar em quê?</p>
    <p class="s" data-h="jay" data-fi="Elämästä! Minä ajattelen, siis olen olemassa.">Na vida! Eu penso, logo eu existo.</p>
    <p class="s" data-paikka="kallio-hameentie-ilta" data-h="kertoja" data-fi="Illalla he ovat baarissa.">À noite, eles estão num bar.</p>
    <p class="s" data-h="jay" data-fi="Nyt minä juon oluen ja avaan mieleni.">Agora eu bebo uma cerveja e abro a mente.</p>
    <p class="s" data-h="maia" data-fi="Sinä avaat vain pullon, Jay!">Você abre só a garrafa, Jay!</p>
    <p class="s" data-h="jay" data-fi="Elämä on yksinkertaista: minä syön, minä juon, minä ajattelen.">A vida é simples: eu como, eu bebo, eu penso.</p>
    <p class="s" data-h="maia" data-fi="Ja minä teen töitä, maalaan ja maksan laskun!">E eu trabalho, eu pinto e eu pago a conta!</p>
    <p class="s" data-h="jay" data-fi="Paljonko lasku on?">Quanto é a conta?</p>
    <p class="s" data-h="maia" data-fi="Kaksi olutta ja kolme voileipää: se on kolmekymmentäviisi euroa.">Duas cervejas e três sanduíches: são trinta e cinco euros.</p>
    <p class="s" data-h="jay" data-fi="Kolmekymmentäviisi euroa! Belo Horizontessa olut on halvempaa, eikö niin?">Trinta e cinco euros! Em Belo Horizonte a cerveja é mais barata, né?</p>
    <p class="s" data-h="maia" data-fi="On kyllä. Belo Horizontessa me juomme olutta ja syömme juustoleipää.">É, sim. Em Belo Horizonte a gente vai beber cerveja e comer pão de queijo.</p>
    <p class="s" data-h="jay" data-fi="Juustoleipää? Minä rakastan juustoleipää!">Pão de queijo? Eu adoro pão de queijo!</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Juomat" data-sanat="café,cafezinho,café com leite,chá,suco,água,refrigerante,cerveja,chope,vinho,leite"></div>
  <div class="teema" data-otsikko="Syötävää" data-sanat="bolo,sanduíche,pão,pão de queijo,queijo,doce,salgado,chocolate"></div>
  <div class="teema" data-otsikko="Tilaaminen ja maksaminen" data-sanat="eu queria,eu quero,por favor,a conta,quanto é,pagar,troco,garrafa"></div>
</section>

<section class="osio">
  <h2>Kahvilassa ja baarissa</h2>
  <p>Brasiliassa tilataan usein sanoilla <span class="pt">Eu queria</span> (haluaisin) tai <span class="pt">Eu quero</span> (haluan). Ensimmäinen on kohteliaampi. Maksettaessa pyydetään lasku.</p>
  <ul class="esim">
    <li class="s" data-fi="Haluaisin pienen kahvin, kiitos.">Eu queria um cafezinho, por favor.</li>
    <li class="s" data-fi="Haluan maitokahvin ja leivonnaisen.">Eu quero um café com leite e um salgado.</li>
    <li class="s" data-fi="Lasku, kiitos.">A conta, por favor.</li>
    <li class="s" data-fi="Paljonko se on?">Quanto é?</li>
    <li class="s" data-fi="Tässä on vaihtoraha.">Aqui está o troco.</li>
  </ul>
  <h3>Bar &amp; Café Kallio: tilaa itse</h3>
  <p class="ohje">Tämä on Jayn ja Maian kantakahvilan liitutaulu. Napauta tuotetta: kuulet tilauksen portugaliksi (<span class="pt">Eu queria…</span>), ja tuote tulee tilaukseesi. Pyydä lopuksi lasku: hinta kuuluu luvuin 20–100. Montako tuotetta tarvitaan, jotta lasku on yli <span class="pt">cinquenta</span> euroa?</p>
  <div class="cardapio" data-otsikko="Cardápio · Bar &amp; Café Kallio">
    <div data-ryhma="Bebidas">
      <p data-hinta="2" data-art="um">cafezinho</p>
      <p data-hinta="3" data-art="um">café</p>
      <p data-hinta="4" data-art="um">café com leite</p>
      <p data-hinta="3" data-art="um">chá</p>
      <p data-hinta="5" data-art="um">suco</p>
      <p data-hinta="4" data-art="um">refrigerante</p>
      <p data-hinta="2" data-art="uma">água</p>
      <p data-hinta="7" data-art="uma">cerveja</p>
      <p data-hinta="9" data-art="um">vinho</p>
    </div>
    <div data-ryhma="Comidas">
      <p data-hinta="5" data-art="um">bolo</p>
      <p data-hinta="4" data-art="um">pão de queijo</p>
      <p data-hinta="4" data-art="um">salgado</p>
      <p data-hinta="7" data-art="um">sanduíche</p>
    </div>
  </div>
</section>

<section class="osio">
  <h2>Numerot 20–100</h2>
  <p>Kymmenluvut ovat omia sanojaan. Väliluvut muodostetaan kymmenluvusta, sanasta <span class="pt">e</span> (ja) ja yksiköstä. Kirjoita luku sanoina ja erota osat sanalla <span class="pt">e</span>: <span class="pt">trinta e cinco</span>.</p>
  <ul class="esim">
    <li class="s" data-fi="20">vinte</li>
    <li class="s" data-fi="30">trinta</li>
    <li class="s" data-fi="40">quarenta</li>
    <li class="s" data-fi="50">cinquenta</li>
    <li class="s" data-fi="60">sessenta</li>
    <li class="s" data-fi="70">setenta</li>
    <li class="s" data-fi="80">oitenta</li>
    <li class="s" data-fi="90">noventa</li>
    <li class="s" data-fi="100">cem</li>
  </ul>
  <ul class="esim">
    <li class="s" data-fi="21">vinte e um</li>
    <li class="s" data-fi="22">vinte e dois</li>
    <li class="s" data-fi="33">trinta e três</li>
    <li class="s" data-fi="47">quarenta e sete</li>
    <li class="s" data-fi="58">cinquenta e oito</li>
    <li class="s" data-fi="69">sessenta e nove</li>
    <li class="s" data-fi="74">setenta e quatro</li>
    <li class="s" data-fi="85">oitenta e cinco</li>
    <li class="s" data-fi="96">noventa e seis</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> yksi ja kaksi muuttuvat sukuluvun mukaan myös yhdistelmissä: <span class="pt">vinte e um</span> euros mutta <span class="pt">vinte e uma</span> cervejas. Luku 100 on tasan <span class="pt">cem</span>. Kun sata on mukana yhdistelmässä (101, 150), se on <span class="pt">cento</span>: <span class="pt">cento e um</span>. Espanjan <i lang="es">cien</i> ja <i lang="es">ciento</i> toimivat samalla tavalla.</p>
  </div>
  <p>Espanjasta tuttuja ovat <span class="pt">trinta</span> (<i lang="es">treinta</i>), <span class="pt">noventa</span> ja <span class="pt">setenta</span>. Mutta kirjoitusasu on eri: <span class="pt">quarenta</span> (<i lang="es">cuarenta</i>), <span class="pt">cinquenta</span> (<i lang="es">cincuenta</i>), <span class="pt">sessenta</span> (<i lang="es">sesenta</i>), <span class="pt">oitenta</span> (<i lang="es">ochenta</i>). Ja välissä on <span class="pt">e</span>, ei <i lang="es">y</i>.</p>
</section>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>Kielioppi</h2>

  <h3>1. Säännölliset verbit: -ar, -er, -ir</h3>
  <p>Perusmuoto eli infinitiivi päättyy portugalissa aina kolmeen eri päätteeseen: <b>-ar</b> (<span class="pt">falar</span>, <span class="pt">trabalhar</span>), <b>-er</b> (<span class="pt">comer</span>, <span class="pt">beber</span>) tai <b>-ir</b> (<span class="pt">abrir</span>, <span class="pt">decidir</span>). Poista pääte ja lisää nykyajan (preesensin) pääte henkilön mukaan. Preesens kertoo, mitä yleensä tapahtuu tai mitä tapahtuu nyt.</p>
  <table class="taivutus">
    <tr><td></td><td>-ar: falar</td><td>-er: comer</td><td>-ir: abrir</td></tr>
    <tr><td>eu</td><td>falo</td><td>como</td><td>abro</td></tr>
    <tr><td>você, ele, ela, a gente</td><td>fala</td><td>come</td><td>abre</td></tr>
    <tr><td>nós</td><td>falamos</td><td>comemos</td><td>abrimos</td></tr>
    <tr><td>vocês, eles, elas</td><td>falam</td><td>comem</td><td>abrem</td></tr>
  </table>
  <p>Huomaa, että <b>-er</b>- ja <b>-ir</b>-verbit eroavat toisistaan vain muodossa <span class="pt">nós</span> (<span class="pt">comemos</span> / <span class="pt">abrimos</span>). Pronominin voi jättää pois, mutta koska <span class="pt">você</span>, <span class="pt">ele</span> ja <span class="pt">ela</span> ottavat saman muodon, se sanotaan usein.</p>
  <ul class="esim">
    <li class="s" data-fi="Minä puhun portugalia.">Eu falo português.</li>
    <li class="s" data-fi="Maia työskentelee RRC:llä.">A Maia trabalha no RRC.</li>
    <li class="s" data-fi="Jay ei tee töitä paljon.">O Jay não trabalha muito.</li>
    <li class="s" data-fi="Me juomme kahvia.">Nós bebemos café.</li>
    <li class="s" data-fi="He syövät kakkua.">Eles comem bolo.</li>
    <li class="s" data-fi="Maia maalaa.">A Maia pinta.</li>
    <li class="s" data-fi="Minä maksan laskun.">Eu pago a conta.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> <span class="pt">eu como</span> on ”minä syön”, mutta <span class="pt">como</span> yksinään tarkoittaa ”miten, kuten”. Konteksti kertoo, kumpi: <span class="pt">Como você está?</span> (miten voit) ja <span class="pt">Eu como bolo</span> (minä syön kakkua). Kieltäminen tapahtuu sanalla <span class="pt">não</span> verbin edessä: <span class="pt">Eu não bebo café.</span></p>
  </div>
  <p><b>Espanjaan verrattuna:</b> espanjassa on erilliset muodot <i lang="es">tú hablas</i> ja <i lang="es">usted habla</i>, <i lang="es">vosotros habláis</i> ja <i lang="es">ustedes hablan</i>. Brasilian portugalissa <span class="pt">você</span> ottaa aina hän-muodon (<span class="pt">você fala</span> = <i lang="es">usted habla</i>), ja monikko <span class="pt">vocês</span> ottaa he-muodon (<span class="pt">vocês falam</span>). Päätteet <b>-o</b>, <b>-a</b>, <b>-amos</b>, <b>-am</b> muistuttavat espanjan päätteitä, mutta <b>-ir</b>-verbin <span class="pt">nós</span>-muoto on <span class="pt">abrimos</span> (<i lang="es">abrimos</i>) ja <b>-er</b>-verbin <span class="pt">comemos</span>.</p>

  <h3>2. Gostar de: pitää jostakin</h3>
  <p>Suomessa sanotaan ”minä pidän kahvista”, ja portugalissa samoin: tekijä on <span class="pt">eu</span> ja kohteen edessä on prepositio <span class="pt">de</span>. Kun kohteen edessä on artikkeli, prepositio yhtyy: <span class="pt">de</span> + <span class="pt">o</span> = <span class="pt">do</span>.</p>
  <ul class="esim">
    <li class="s" data-fi="Minä pidän kahvista.">Eu gosto de café.</li>
    <li class="s" data-fi="Minä pidän suomalaisesta kahvista.">Eu gosto do café finlandês.</li>
    <li class="s" data-fi="Maia pitää juustoleivästä.">A Maia gosta de pão de queijo.</li>
    <li class="s" data-fi="Pidätkö oluesta?">Você gosta de cerveja?</li>
    <li class="s" data-fi="En pidä kahvista.">Eu não gosto de café.</li>
  </ul>
  <div class="huomio">
    <p><b>Espanjan ansa:</b> espanjassa sanotaan <i lang="es">me gusta el café</i>: kohde on lauseen tekijä ja ”minä” on pronominissa <i lang="es">me</i>. Portugalissa tekijä on henkilö itse: <span class="pt">eu gosto de café</span>. Ei siis <span class="pt">me gosta</span>! Kun haluat sanoa ”rakastan jotakin”, käytä <span class="pt">adorar</span> tai <span class="pt">amar</span> ilman prepositiota: <span class="pt">eu adoro pão de queijo</span>.</p>
  </div>

  <h3>3. Tulevaisuus: ir + perusmuoto</h3>
  <p>Tulevasta asiasta puhutaan lähes aina rakenteella <span class="pt">ir</span> (jaksosta 2 tuttu verbi, taivutettu) + perusmuoto. Se vastaa suomen ”aion tehdä” tai ”tulen tekemään”, ja sitä käytetään sekä lähitulevaisuudesta että varmasta suunnitelmasta.</p>
  <ul class="esim">
    <li class="s" data-fi="Minä aion juoda oluen.">Eu vou beber uma cerveja.</li>
    <li class="s" data-fi="Me aiomme tehdä töitä.">Nós vamos trabalhar.</li>
    <li class="s" data-fi="Maia aikoo maksaa laskun.">A Maia vai pagar a conta.</li>
    <li class="s" data-fi="He aikovat syödä juustoleipää.">Eles vão comer pão de queijo.</li>
    <li class="s" data-fi="En aio tehdä töitä huomenna.">Eu não vou trabalhar amanhã.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> verbi <span class="pt">ir</span> taipuu (<span class="pt">vou, vai, vamos, vão</span>), mutta toinen verbi pysyy perusmuodossa. Espanjassa on välissä a (<i lang="es">voy a beber</i>), portugalissa ei: <span class="pt">vou beber</span>, ei ”vou a beber”.</p>
  </div>
</section>

<section class="osio">
  <h2>Ääntäminen: h, ch, nh, lh</h2>
  <p>Kirjain <b>h</b> on portugalissa itsenäisenä aina hiljainen. Mutta se muuttaa edellisen kirjaimen äänteen kolmessa yhdistelmässä: ch, nh ja lh.</p>

  <div class="saanto">
    <h3>1. Alun h on äänetön</h3>
    <ul class="esim">
      <li class="s">hoje</li>
      <li class="s">hora</li>
      <li class="s">hotel</li>
      <li class="s">homem</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>2. ch = sh</h3>
    <p>Kuten suomen sanassa ”shakki” tai englannin sanassa ”shop”. Espanjan <i lang="es">ch</i> on ts-äänne, joten portugalissa <span class="pt">chá</span> ei ole ”tsaa”.</p>
    <ul class="esim">
      <li class="s">chá</li>
      <li class="s">chocolate</li>
      <li class="s">chave</li>
      <li class="s">chuva</li>
      <li class="s">chegar</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>3. nh = nj</h3>
    <p>Yksi pehmeä n-äänne, kielen keskiosa painuu suulakea vasten, kuten espanjan <i lang="es">ñ</i> sanassa <i lang="es">mañana</i>. Älä erota ”n” ja ”h” kahdeksi äänteeksi.</p>
    <ul class="esim">
      <li class="s">vinho</li>
      <li class="s">minha</li>
      <li class="s">banho</li>
      <li class="s">ninho</li>
      <li class="s">senhor</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>4. lh = lj</h3>
    <p>Yksi pehmeä l-äänne: kielen keskiosa painuu suulakea vasten. Se kuulostaa suunnilleen yhtenä äänteenä lausutulta ”lj”-yhdistelmältä, kuten italian sanassa <i>figlio</i>. Espanjassa tätä vastaa usein kirjain j: <span class="pt">filho</span> = <i lang="es">hijo</i>, <span class="pt">olho</span> = <i lang="es">ojo</i>, <span class="pt">trabalho</span> = <i lang="es">trabajo</i>.</p>
    <ul class="esim">
      <li class="s">filho</li>
      <li class="s">trabalho</li>
      <li class="s">olho</li>
      <li class="s">mulher</li>
      <li class="s">melhor</li>
      <li class="s">folha</li>
    </ul>
  </div>

  <div class="huomio">
    <p><b>Suomalaisen sudenkuoppa:</b> <span class="pt">filho</span> ei ole ”fil-ho” eikä ”fi-lio”. Kuuntele tarkasti, miten kieli nousee suulakea vasten. Hyvä harjoitus: toista <span class="pt">trabalho, filho, olho</span> hitaasti viisi kertaa.</p>
  </div>
</section>

<aside class="kulttuuri" data-paikka="pao-de-queijo">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Cafezinho ja pão de queijo</h3>
  <figure class="kuva" data-kuva="pao-de-queijo"></figure>
  <p>Brasilia on pitkään ollut maailman suurin kahvin tuottaja, ja Minas Gerais on sen suurin kahvinviljelyosavaltio: noin puolet Brasilian kahvista tulee sieltä. Siksi kahvi kuuluu Belo Horizonten arkeen. Pieni vahva kahvi, <span class="pt">cafezinho</span>, tarjotaan vieraalle, kaupassa, toimistossa ja kotona. Se on usein valmiiksi makeutettu ja tarjotaan pienessä kupissa.</p>
  <p><span class="pt">Pão de queijo</span> on Minas Geraisin tunnetuin leivonnainen. Se on pieni, pehmeä ja rapea pallo, joka tehdään maniokkitärkkelyksestä, juustosta, munasta, maidosta ja öljystä. Koska siinä ei ole vehnäjauhoja, se on luonnostaan gluteeniton. Belo Horizontessa sitä syödään aamiaisella ja välipalana, lähes aina kahvin kanssa, ja sitä myydään lähes jokaisessa leipomossa (<span class="pt">padaria</span>).</p>
  <p>Suomi on maailman suurimpia kahvinjuojia asukasta kohden, joten Jay ja Maia löytävät yhteisen aiheen: kahvi.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Täydennä verbi</h3>
    <p class="ohje">Taivuta sulkeissa oleva verbi nykyaikaan.</p>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="falo"></span> português. (falar)</p>
      <p>Você <span class="aukko" data-oikea="come"></span> bolo? (comer)</p>
      <p>Nós <span class="aukko" data-oikea="abrimos"></span> a loja. (abrir)</p>
      <p>Eles <span class="aukko" data-oikea="bebem"></span> cerveja. (beber)</p>
      <p>A Maia <span class="aukko" data-oikea="pinta"></span> no ateliê. (pintar)</p>
      <p>Nós <span class="aukko" data-oikea="trabalhamos"></span> no RRC. (trabalhar)</p>
      <p>Eu <span class="aukko" data-oikea="pago"></span> a conta. (pagar)</p>
      <p>Vocês <span class="aukko" data-oikea="abrem"></span> o café? (abrir)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Mikä lause on oikein?</h3>
    <p class="ohje">Valitse portugalin mukainen lause. Yksi vaihtoehdoista on espanjan mukainen.</p>
    <div class="valinta" data-oikea="Eu gosto de café.">
      <p class="kysymys">Minä pidän kahvista.</p>
      <div class="vaihtoehdot"><button type="button">Eu gosto de café.</button><button type="button">Me gosta café.</button><button type="button">Eu gosto café.</button></div>
    </div>
    <div class="valinta" data-oikea="Ela gosta de pão de queijo.">
      <p class="kysymys">Maia pitää juustoleivästä.</p>
      <div class="vaihtoehdot"><button type="button">Ela gosta de pão de queijo.</button><button type="button">Ela gosta pão de queijo.</button><button type="button">Le gosta pão de queijo.</button></div>
    </div>
    <div class="valinta" data-oikea="Eu vou beber uma cerveja.">
      <p class="kysymys">Minä aion juoda oluen.</p>
      <div class="vaihtoehdot"><button type="button">Eu vou a beber uma cerveja.</button><button type="button">Eu vou beber uma cerveja.</button><button type="button">Eu bebo vou uma cerveja.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Täydennä: gostar de tai ir + perusmuoto</h3>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="gosto"></span> <span class="aukko" data-oikea="de"></span> chá.</p>
      <p>Ele <span class="aukko" data-oikea="gosta"></span> <span class="aukko" data-oikea="do"></span> café finlandês.</p>
      <p>Amanhã nós <span class="aukko" data-oikea="vamos"></span> trabalhar.</p>
      <p>A Maia <span class="aukko" data-oikea="vai"></span> pagar a conta.</p>
      <p>Eles <span class="aukko" data-oikea="vão"></span> comer pão de queijo.</p>
      <p>Eu <span class="aukko" data-oikea="vou"></span> beber um suco.</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Yhdistä numero ja luku</h3>
    <ul class="yhdista">
      <li data-pari="20">vinte</li>
      <li data-pari="30">trinta</li>
      <li data-pari="40">quarenta</li>
      <li data-pari="50">cinquenta</li>
      <li data-pari="60">sessenta</li>
      <li data-pari="70">setenta</li>
      <li data-pari="80">oitenta</li>
      <li data-pari="90">noventa</li>
      <li data-pari="100">cem</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: Jayn ja Maian lasku</h3>
    <p class="ohje">Katso liitutaulua oppitunnin alussa (<span class="pt">Cardápio</span>) ja laske. Dialogissa Maia maksaa kaksi olutta ja kolme voileipää.</p>
    <div class="valinta" data-oikea="sete euros">
      <p class="kysymys">Quanto custa uma cerveja no Bar &amp; Café Kallio?</p>
      <div class="vaihtoehdot"><button type="button">cinco euros</button><button type="button">sete euros</button><button type="button">nove euros</button></div>
    </div>
    <div class="valinta" data-oikea="trinta e cinco euros">
      <p class="kysymys">Duas cervejas e três sanduíches: quanto é?</p>
      <div class="vaihtoehdot"><button type="button">vinte e oito euros</button><button type="button">trinta e cinco euros</button><button type="button">quarenta e dois euros</button></div>
    </div>
    <div class="valinta" data-oikea="vinte euros">
      <p class="kysymys">A conta é trinta euros. A Maia paga com cinquenta. Quanto é o troco?</p>
      <div class="vaihtoehdot"><button type="button">quinze euros</button><button type="button">vinte euros</button><button type="button">trinta euros</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Kuuntele ja valitse luku</h3>
    <p class="ohje">Paina ▶ ja valitse luku, jonka kuulit.</p>
    <div class="valinta" data-kuuntele="quarenta" data-oikea="quarenta">
      <p class="kysymys">Mikä luku?</p>
      <div class="vaihtoehdot"><button type="button">quarenta</button><button type="button">cinquenta</button><button type="button">sessenta</button></div>
    </div>
    <div class="valinta" data-kuuntele="setenta" data-oikea="setenta">
      <p class="kysymys">Mikä luku?</p>
      <div class="vaihtoehdot"><button type="button">sessenta</button><button type="button">setenta</button><button type="button">oitenta</button></div>
    </div>
    <div class="valinta" data-kuuntele="trinta e cinco" data-oikea="trinta e cinco">
      <p class="kysymys">Mikä luku?</p>
      <div class="vaihtoehdot"><button type="button">trinta e cinco</button><button type="button">trinta e quatro</button><button type="button">quarenta e cinco</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause. Kirjoita luvut sanoilla.</p>
    <div class="sanelu" data-puhu="A conta, por favor."></div>
    <div class="sanelu" data-puhu="Eu gosto de café."></div>
    <div class="sanelu" data-puhu="São trinta e cinco euros."></div>
    <div class="sanelu" data-puhu="Eu vou beber uma cerveja."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Haluaisin kahvin ja kakkupalan, kiitos.</p><p class="s" data-fi="Haluaisin kahvin ja kakkupalan, kiitos.">Eu queria um café e um bolo, por favor.</p></div>
    <div class="kaanna"><p class="fi">Minä pidän juustoleivästä.</p><p class="s" data-fi="Minä pidän juustoleivästä.">Eu gosto de pão de queijo.</p></div>
    <div class="kaanna"><p class="fi">Maia työskentelee ja Jay ajattelee.</p><p class="s" data-fi="Maia työskentelee ja Jay ajattelee.">A Maia trabalha e o Jay pensa.</p></div>
    <div class="kaanna"><p class="fi">Me aiomme juoda kahvia huomenna.</p><p class="s" data-fi="Me aiomme juoda kahvia huomenna.">Nós vamos beber café amanhã.</p></div>
    <div class="kaanna"><p class="fi">Paljonko lasku on? – Neljäkymmentäseitsemän euroa.</p><p class="s" data-fi="Paljonko lasku on? – Neljäkymmentäseitsemän euroa.">Quanto é a conta? – São quarenta e sete euros.</p></div>
    <div class="kaanna"><p class="fi">He eivät juo olutta.</p><p class="s" data-fi="He eivät juo olutta.">Eles não bebem cerveja.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Você gosta de café?</summary>
      <p class="s" data-fi="Kyllä, pidän kahvista.">Sim, eu gosto de café.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que você bebe de manhã?</summary>
      <p class="s" data-fi="Aamulla juon kahvia.">De manhã eu bebo café.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que você vai comer hoje?</summary>
      <p class="s" data-fi="Aion syödä juustoleipää.">Eu vou comer pão de queijo.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Quanto é um cafezinho?</summary>
      <p class="s" data-fi="Se on kolme euroa.">São três euros.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l04">
    <h3>Kotitehtävä</h3>
    <p>Kirjoita kuusi lausetta: mitä juot ja syöt aamulla, mistä pidät ja mistä et, mitä aiot tehdä huomenna ja mitä jokin maksaa. Käytä vähintään yhtä lukua väliltä 20–100 ja kahta eri verbiä (<b>-ar</b>, <b>-er</b> tai <b>-ir</b>).</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Aamulla juon kahvia ja syön leipää.">De manhã eu bebo café e como pão.</p>
      <p class="s" data-fi="Pidän kahvista, mutta en pidä teestä.">Eu gosto de café, mas não gosto de chá.</p>
      <p class="s" data-fi="Huomenna aion työskennellä kotona.">Amanhã eu vou trabalhar em casa.</p>
      <p class="s" data-fi="Illalla aion juoda oluen.">À noite eu vou beber uma cerveja.</p>
      <p class="s" data-fi="Kahvi maksaa neljä euroa.">O café custa quatro euros.</p>
      <p class="s" data-fi="Lasku on kaksikymmentäkahdeksan euroa.">A conta é vinte e oito euros.</p>
    </details>
  </div>
</section>
`
});
