/* Jakso 3: Joululahjaostoksilla Hakaniemen kauppahallissa. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l03',
  lyhyt: '3',
  jakso: 'Jakso 3',
  otsikko: 'Asiointi: há, artikkelit ja suku',
  lahde: 'Aihe: asiointi, kaupat, numerot 11–20 · Kielioppi: há, suku ja luku, artikkelit, no / na / do / da · Ääntäminen: nasaalivokaalit',
  aiheet: ['raha', 'ruoka', 'numerot', 'kaupunki'],
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi, tekee joululahjalistaa' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, haluaisi oluen' },
    vendedora: { nimi: 'Myyjä', tyyppi: 'nainen', vaihto: 5, kuvaus: 'brasilialainen kauppahallin myyjä Helsingissä' }
  },

  sanasto: [
    'há', 'tem', 'quanto custa', 'custa', 'caro', 'barato', 'euro', 'cada',
    'de nada', 'boas festas', 'mercado', 'loja', 'padaria', 'farmácia', 'livraria', 'correio',
    'queijo', 'cerveja', 'presente', 'onze', 'doze', 'treze', 'catorze', 'quinze',
    'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte'
  ],

  sanat: {
    // dialogi
    'no mercado de hakaniemi': { fi: 'Hakaniemen kauppahallissa', aa: 'nu meh-KA-du di a-ka-NIE-mi', ipa: '[nu mehˈkadu dʒi akaˈni̯emi]', sl: 'ilmaus' },
    'mercado': { fi: 'tori, kauppahalli; (Brasiliassa) ruokakauppa', aa: 'meh-KA-du', ipa: '[mehˈkadu]', sl: 'substantiivi, maskuliini', huom: 'Brasiliassa ”ir ao mercado” tarkoittaa usein ruokaostoksille menoa' },
    'hakaniemi': { kieli: 'fi', fi: 'Hakaniemi (Helsingin kaupunginosa)', aa: 'HA-ka-nie-mi', ipa: '[ˈhɑkɑnieːmi]', sl: 'paikannimi' },
    'compram': { fi: 'ostavat, ostatte', aa: 'KÕ-prãu', ipa: '[ˈkõpɾɐ̃w]', sl: 'verbi', huom: 'perusmuoto {comprar}; ”elas compram” = he ostavat' },
    'presentes': { fi: 'lahjat', aa: 'pre-ZẼ-tsis', ipa: '[pɾeˈzẽtʃis]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {presente}' },
    'presente': { fi: 'lahja', aa: 'pre-ZẼ-tsi', ipa: '[pɾeˈzẽtʃi]', sl: 'substantiivi, maskuliini', huom: 'myös ”nykyisyys”; presentes = lahjat' },
    'presentes de natal': { fi: 'joululahjat', aa: 'pre-ZẼ-tsis di na-TAU', ipa: '[pɾeˈzẽtʃis dʒi naˈtaw]', sl: 'ilmaus' },
    'natal': { fi: 'joulu', aa: 'na-TAU', ipa: '[naˈtaw]', sl: 'substantiivi, maskuliini', huom: 'myös ”syntymä”; Natal on myös kaupungin nimi' },
    'queijo': { fi: 'juusto', aa: 'KEI-zhu', ipa: '[ˈkejʒu]', sl: 'substantiivi, maskuliini', huom: 'espanjaksi queso' },
    'cafés': { fi: 'kahvit', aa: 'ka-FES', ipa: '[kaˈfɛs]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {café}; ”dois cafés” = kaksi kahvia' },
    'chocolate': { fi: 'suklaa', aa: 'sho-ko-LA-tsi', ipa: '[ʃokoˈlatʃi]', sl: 'substantiivi, maskuliini' },
    'chocolates': { fi: 'suklaat, suklaakonvehdit', aa: 'sho-ko-LA-tsis', ipa: '[ʃokoˈlatʃis]', sl: 'substantiivi, maskuliini, monikko' },
    'cerveja': { fi: 'olut', aa: 'seh-VE-zha', ipa: '[sehˈveʒɐ]', sl: 'substantiivi, feminiini' },
    'peixe': { fi: 'kala', aa: 'PEI-shi', ipa: '[ˈpejʃi]', sl: 'substantiivi, maskuliini' },
    'lista': { fi: 'lista', aa: 'LIS-ta', ipa: '[ˈlistɐ]', sl: 'substantiivi, feminiini' },
    'para o meu pai': { fi: 'isälleni', aa: 'PA-ra u MEU PAI', ipa: '[ˈpaɾɐ u ˈmew paj]', sl: 'ilmaus' },
    'para a minha mãe': { fi: 'äidilleni', aa: 'PA-ra a MĨ-nja MÃI', ipa: '[ˈpaɾɐ a ˈmĩɲɐ mɐ̃j]', sl: 'ilmaus' },
    'para mim': { fi: 'minulle', aa: 'PA-ra MĨ', ipa: '[ˈpaɾɐ ˈmĩ]', sl: 'ilmaus', huom: 'prepositioiden jälkeen {mim}, ei {eu}' },
    'mim': { fi: 'minua, minulle (prepositioiden jälkeen)', aa: 'MĨ', ipa: '[mĩ]', sl: 'persoonapronomini', huom: 'para mim, de mim' },
    'há': { fi: 'on, löytyy, on olemassa', aa: 'A', ipa: '[a]', sl: 'verbi {haver}', huom: 'ei muutu monikossa; puheessa usein {tem}. Espanjan hay.' },
    'há cerveja aqui': { fi: 'onko täällä olutta?', aa: 'A seh-VE-zha a-KI', ipa: '[a sehˈveʒɐ aˈki]', sl: 'kysymys' },
    'os presentes': { fi: 'lahjat', aa: 'us pre-ZẼ-tsis', ipa: '[us pɾeˈzẽtʃis]', sl: 'ilmaus' },
    'os': { fi: 'määräinen artikkeli, maskuliini monikko', aa: 'us', ipa: '[us]', sl: 'artikkeli', huom: 'yksikkö {o}; feminiini {as}' },
    'as': { fi: 'määräinen artikkeli, feminiini monikko', aa: 'as', ipa: '[as]', sl: 'artikkeli', huom: 'yksikkö {a}; maskuliini {os}' },
    'uns': { fi: 'joitakin (maskuliini monikko)', aa: 'ũs', ipa: '[ũs]', sl: 'artikkeli, monikko', huom: 'yksikkö {um}; feminiini {umas}' },
    'umas': { fi: 'joitakin (feminiini monikko)', aa: 'U-mas', ipa: '[ˈumɐs]', sl: 'artikkeli, monikko', huom: 'yksikkö {uma}; maskuliini {uns}' },
    'na lista': { fi: 'listalla', aa: 'na LIS-ta', ipa: '[na ˈlistɐ]', sl: 'ilmaus', huom: '{em} + {a}' },
    'na': { fi: '-ssa, -ssä (feminiinisanan edellä)', aa: 'na', ipa: '[na]', sl: 'prepositio + artikkeli', huom: '{em} + {a}' },
    'nos': { fi: '-ssa, -ssä (maskuliini monikon edellä)', aa: 'nus', ipa: '[nus]', sl: 'prepositio + artikkeli', huom: '{em} + {os}' },
    'nas': { fi: '-ssa, -ssä (feminiini monikon edellä)', aa: 'nas', ipa: '[nas]', sl: 'prepositio + artikkeli', huom: '{em} + {as}' },
    'dos': { fi: '-sta, -stä (maskuliini monikon edellä)', aa: 'dus', ipa: '[dus]', sl: 'prepositio + artikkeli', huom: '{de} + {os}' },
    'das': { fi: '-sta, -stä (feminiini monikon edellä)', aa: 'das', ipa: '[das]', sl: 'prepositio + artikkeli', huom: '{de} + {as}' },
    'a sua família': { fi: 'sinun perheesi', aa: 'a SU-a fa-MI-lja', ipa: '[a ˈsuɐ faˈmiʎɐ]', sl: 'ilmaus' },
    'também': { fi: 'myös', aa: 'tã-BẼI', ipa: '[tɐ̃ˈbẽj]', sl: 'adverbi', huom: 'espanjaksi también' },
    'quanto': { fi: 'kuinka paljon, kuinka monta', aa: 'KUÃ-tu', ipa: '[ˈkwɐ̃tu]', sl: 'kysymyssana' },
    'quanto custa': { fi: 'paljonko maksaa?', aa: 'KUÃ-tu KUS-ta', ipa: '[ˈkwɐ̃tu ˈkustɐ]', sl: 'kysymys' },
    'quanto custa o queijo': { fi: 'paljonko juusto maksaa?', aa: 'KUÃ-tu KUS-ta u KEI-zhu', ipa: '[ˈkwɐ̃tu ˈkustɐ u ˈkejʒu]', sl: 'kysymys' },
    'custa': { fi: 'maksaa', aa: 'KUS-ta', ipa: '[ˈkustɐ]', sl: 'verbi', huom: 'perusmuoto {custar}; espanjassa cuesta' },
    'custar': { fi: 'maksaa', aa: 'kus-TAH', ipa: '[kusˈtah]', sl: 'verbi, perusmuoto' },
    'custam': { fi: 'maksavat', aa: 'KUS-tãu', ipa: '[ˈkustɐ̃w]', sl: 'verbi', huom: 'perusmuoto {custar}' },
    'cuesta': { kieli: 'es', fi: 'maksaa (espanjaa!)', aa: 'KUES-ta', ipa: '[ˈkwestɐ]', sl: 'espanjaa', huom: 'Jayn espanjalainen virhe: oikein {custa}' },
    'euro': { fi: 'euro', aa: 'EU-ru', ipa: '[ˈewɾu]', sl: 'substantiivi, maskuliini' },
    'euros': { fi: 'euroa', aa: 'EU-rus', ipa: '[ˈewɾus]', sl: 'substantiivi, maskuliini, monikko' },
    'que caro': { fi: 'kuinka kallista!', aa: 'KI KA-ru', ipa: '[ki ˈkaɾu]', sl: 'huudahdus' },
    'barato': { fi: 'halpa', aa: 'ba-RA-tu', ipa: '[baˈɾatu]', sl: 'adjektiivi', huom: 'vastakohta {caro}' },
    'vendedora': { fi: 'myyjä (nainen)', aa: 'vẽ-de-DO-ra', ipa: '[vẽdeˈdoɾɐ]', sl: 'substantiivi, feminiini', huom: 'mies {vendedor}' },
    'vendedor': { fi: 'myyjä (mies)', aa: 'vẽ-de-DOH', ipa: '[vẽdeˈdoh]', sl: 'substantiivi, maskuliini', huom: 'nainen {vendedora}' },
    'cada': { fi: 'jokainen, kukin', aa: 'KA-da', ipa: '[ˈkadɐ]', sl: 'pronomini', huom: 'ei muutu sukuluvun mukaan' },
    'cada café': { fi: 'jokainen kahvi', aa: 'KA-da ka-FE', ipa: '[ˈkadɐ kaˈfɛ]', sl: 'ilmaus' },
    'são dezoito euros': { fi: 'se on kahdeksantoista euroa', aa: 'SÃU de-ZOI-tu EU-rus', ipa: '[sɐ̃w deˈzojtu ˈewɾus]', sl: 'ilmaus', huom: 'hinta kerrotaan verbillä {ser}' },
    'está certo': { fi: 'se on oikein', aa: 'es-TA SEH-tu', ipa: '[esˈta ˈsɛhtu]', sl: 'ilmaus' },
    'certo': { fi: 'oikea; selvä', aa: 'SEH-tu', ipa: '[ˈsɛhtu]', sl: 'adjektiivi', huom: 'puheessa ”certo!” = selvä!' },
    'loja': { fi: 'kauppa, myymälä', aa: 'LO-zha', ipa: '[ˈlɔʒɐ]', sl: 'substantiivi, feminiini' },
    'na loja ao lado': { fi: 'viereisessä kaupassa', aa: 'na LO-zha AU LA-du', ipa: '[na ˈlɔʒɐ aw ˈladu]', sl: 'ilmaus' },
    'ao lado': { fi: 'vieressä', aa: 'AU LA-du', ipa: '[aw ˈladu]', sl: 'ilmaus', huom: 'myös {ao lado de} + sana' },
    'só uma': { fi: 'vain yksi', aa: 'SO U-ma', ipa: '[sɔ ˈumɐ]', sl: 'ilmaus' },
    'de nada': { fi: 'ole hyvä; ei kestä', aa: 'di NA-da', ipa: '[dʒi ˈnadɐ]', sl: 'kohteliaisuus', huom: 'vastaus kiitokseen' },
    'boas festas': { fi: 'hyvää joulua ja uutta vuotta!', aa: 'BO-as FES-tas', ipa: '[ˌboɐs ˈfɛstɐs]', sl: 'tervehdys', huom: 'kirjaimellisesti ”hyvät juhlat”; sanotaan jouluna' },
    'boas': { fi: 'hyvät (feminiini monikko)', aa: 'BO-as', ipa: '[ˈboɐs]', sl: 'adjektiivi, feminiini, monikko', huom: 'yksikkö {boa}; maskuliini bons' },
    'festa': { fi: 'juhla', aa: 'FES-ta', ipa: '[ˈfɛstɐ]', sl: 'substantiivi, feminiini', huom: 'festas = juhlat' },
    'festas': { fi: 'juhlat', aa: 'FES-tas', ipa: '[ˈfɛstɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {festa}' },
    'doze euros': { fi: 'kaksitoista euroa', aa: 'DO-zi EU-rus', ipa: '[ˈdozi ˈewɾus]', sl: 'ilmaus' },
    'doze mais seis': { fi: 'kaksitoista plus kuusi', aa: 'DO-zi MAIS SEIS', ipa: '[ˈdozi majs sejs]', sl: 'ilmaus' },
    'um queijo e dois cafés': { fi: 'yksi juusto ja kaksi kahvia', aa: 'Ũ KEI-zhu i DOIS ka-FES', ipa: '[ũ ˈkejʒu i dojs kaˈfɛs]', sl: 'ilmaus' },
    'eu sou do rio': { fi: 'olen Riosta', aa: 'EU SOU du HI-u', ipa: '[ew ˈsow du ˈhiu]', sl: 'ilmaus', huom: 'Rio de Janeiron asukasta sanotaan {carioca}' },
    'carioca': { fi: 'Rio de Janeiron asukas', aa: 'ka-ri-O-ka', ipa: '[kaɾiˈɔkɐ]', sl: 'substantiivi, adjektiivi', huom: 'sama sukupuolesta riippumatta' },

    // numerot 11–20
    'onze': { fi: 'yksitoista', aa: 'Õ-zi', ipa: '[ˈõzi]', sl: 'lukusana' },
    'doze': { fi: 'kaksitoista', aa: 'DO-zi', ipa: '[ˈdozi]', sl: 'lukusana' },
    'treze': { fi: 'kolmetoista', aa: 'TRE-zi', ipa: '[ˈtɾezi]', sl: 'lukusana' },
    'catorze': { fi: 'neljätoista', aa: 'ka-TOH-zi', ipa: '[kaˈtohzi]', sl: 'lukusana', huom: 'myös {quatorze}' },
    'quatorze': { fi: 'neljätoista', aa: 'kua-TOH-zi', ipa: '[kwaˈtohzi]', sl: 'lukusana', huom: 'sama kuin {catorze}' },
    'quinze': { fi: 'viisitoista', aa: 'KĨ-zi', ipa: '[ˈkĩzi]', sl: 'lukusana' },
    'dezesseis': { fi: 'kuusitoista', aa: 'de-ze-SEIS', ipa: '[dezeˈsejs]', sl: 'lukusana', huom: 'Portugalin portugalissa dezasseis' },
    'dezessete': { fi: 'seitsemäntoista', aa: 'de-ze-SE-tsi', ipa: '[dezeˈsɛtʃi]', sl: 'lukusana', huom: 'Portugalin portugalissa dezassete' },
    'dezoito': { fi: 'kahdeksantoista', aa: 'de-ZOI-tu', ipa: '[deˈzojtu]', sl: 'lukusana' },
    'dezenove': { fi: 'yhdeksäntoista', aa: 'de-ze-NO-vi', ipa: '[dezeˈnɔvi]', sl: 'lukusana', huom: 'Portugalin portugalissa dezanove' },
    'vinte': { fi: 'kaksikymmentä', aa: 'VĨ-tsi', ipa: '[ˈvĩtʃi]', sl: 'lukusana' },
    'quinze presentes': { fi: 'viisitoista lahjaa', aa: 'KĨ-zi pre-ZẼ-tsis', ipa: '[ˈkĩzi pɾeˈzẽtʃis]', sl: 'ilmaus' },

    // kaupat
    'supermercado': { fi: 'ruokakauppa, supermarket', aa: 'su-peh-meh-KA-du', ipa: '[supehmehˈkadu]', sl: 'substantiivi, maskuliini' },
    'padaria': { fi: 'leipomo', aa: 'pa-da-RI-a', ipa: '[padaˈɾiɐ]', sl: 'substantiivi, feminiini', huom: 'Brasiliassa myös lähikahvila ja pikaruokapaikka' },
    'farmácia': { fi: 'apteekki', aa: 'fah-MA-sja', ipa: '[fahˈmasjɐ]', sl: 'substantiivi, feminiini' },
    'livraria': { fi: 'kirjakauppa', aa: 'li-vra-RI-a', ipa: '[livɾaˈɾiɐ]', sl: 'substantiivi, feminiini', huom: 'ansa: ei ”kirjasto”; kirjasto = biblioteca' },
    'livro': { fi: 'kirja', aa: 'LI-vru', ipa: '[ˈlivɾu]', sl: 'substantiivi, maskuliini' },
    'correio': { fi: 'posti', aa: 'ko-HEI-u', ipa: '[koˈheju]', sl: 'substantiivi, maskuliini' },
    'feira': { fi: 'tori, katumarkkinat; messut', aa: 'FEI-ra', ipa: '[ˈfejɾɐ]', sl: 'substantiivi, feminiini', huom: 'Brasiliassa feira on usein viikoittainen kadun hedelmä- ja vihannestori' },
    'banco': { fi: 'pankki; penkki', aa: 'BÃ-ku', ipa: '[ˈbɐ̃ku]', sl: 'substantiivi, maskuliini' },
    'remédio': { fi: 'lääke', aa: 'he-ME-dju', ipa: '[heˈmɛdʒju]', sl: 'substantiivi, maskuliini' },
    'carta': { fi: 'kirje', aa: 'KAH-ta', ipa: '[ˈkahtɐ]', sl: 'substantiivi, feminiini', huom: 'myös pelikortti; ansa: ruokalista = cardápio' },

    // kielioppi
    'tem': { fi: 'on; omistaa (puheessa myös: löytyy)', aa: 'TẼI', ipa: '[tẽj]', sl: 'verbi {ter}', huom: 'puheessa ”tem queijo?” = onko juustoa? Ks. jakso 5' },
    'há queijo': { fi: 'on juustoa', aa: 'A KEI-zhu', ipa: '[a ˈkejʒu]', sl: 'ilmaus' },
    'não há': { fi: 'ei ole, ei löydy', aa: 'NÃU A', ipa: '[nɐ̃w a]', sl: 'ilmaus' },
    'o queijo': { fi: 'juusto', aa: 'u KEI-zhu', ipa: '[u ˈkejʒu]', sl: 'ilmaus' },
    'a cerveja': { fi: 'olut', aa: 'a seh-VE-zha', ipa: '[a sehˈveʒɐ]', sl: 'ilmaus' },
    'um café': { fi: 'yksi kahvi', aa: 'Ũ ka-FE', ipa: '[ũ kaˈfɛ]', sl: 'ilmaus' },
    'uma cerveja': { fi: 'yksi olut', aa: 'U-ma seh-VE-zha', ipa: '[ˈumɐ sehˈveʒɐ]', sl: 'ilmaus' },
    'amigos': { fi: 'ystävät', aa: 'a-MI-gus', ipa: '[aˈmiɡus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {amigo}; naiset {amigas}' },
    'amigas': { fi: 'ystävättäret', aa: 'a-MI-gas', ipa: '[aˈmiɡɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {amiga}' },
    'lojas': { fi: 'kaupat', aa: 'LO-zhas', ipa: '[ˈlɔʒɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {loja}' },
    'queijos': { fi: 'juustot', aa: 'KEI-zhus', ipa: '[ˈkejʒus]', sl: 'substantiivi, maskuliini, monikko' },
    'cervejas': { fi: 'oluet', aa: 'seh-VE-zhas', ipa: '[sehˈveʒɐs]', sl: 'substantiivi, feminiini, monikko' },
    'no mercado': { fi: 'kauppahallissa', aa: 'nu meh-KA-du', ipa: '[nu mehˈkadu]', sl: 'ilmaus', huom: '{em} + {o}' },
    'da loja': { fi: 'kaupasta', aa: 'da LO-zha', ipa: '[da ˈlɔʒɐ]', sl: 'ilmaus', huom: '{de} + {a}' },
    'dos amigos': { fi: 'ystävien', aa: 'duz a-MI-gus', ipa: '[duz aˈmiɡus]', sl: 'ilmaus', huom: '{de} + {os}' },
    'das amigas': { fi: 'ystävättärien', aa: 'daz a-MI-gas', ipa: '[daz aˈmiɡɐs]', sl: 'ilmaus', huom: '{de} + {as}' },
    'nos mercados': { fi: 'kauppahalleissa', aa: 'nus meh-KA-dus', ipa: '[nus mehˈkadus]', sl: 'ilmaus', huom: '{em} + {os}' },
    'nas lojas': { fi: 'kaupoissa', aa: 'nas LO-zhas', ipa: '[nas ˈlɔʒɐs]', sl: 'ilmaus', huom: '{em} + {as}' },
    'mercados': { fi: 'torit, kauppahallit', aa: 'meh-KA-dus', ipa: '[mehˈkadus]', sl: 'substantiivi, maskuliini, monikko' },
    'num': { fi: 'yhdessä (em + um)', aa: 'nũ', ipa: '[nũ]', sl: 'prepositio + artikkeli', huom: '{em} + {um}; feminiini {numa}' },
    'numa': { fi: 'yhdessä (em + uma)', aa: 'NU-ma', ipa: '[ˈnumɐ]', sl: 'prepositio + artikkeli', huom: '{em} + {uma}' },
    'problema': { fi: 'ongelma', aa: 'pro-BLE-ma', ipa: '[pɾoˈblemɐ]', sl: 'substantiivi, maskuliini', huom: 'a-päätteinen mutta maskuliini: o problema' },
    'mão': { fi: 'käsi', aa: 'MÃU', ipa: '[mɐ̃w]', sl: 'substantiivi, feminiini', huom: 'o-päätteinen mutta feminiini: a mão' },
    'ação': { fi: 'teko, toiminta', aa: 'a-SÃU', ipa: '[aˈsɐ̃w]', sl: 'substantiivi, feminiini' },
    'viagem': { fi: 'matka', aa: 'vi-A-zhẽi', ipa: '[viˈaʒẽj]', sl: 'substantiivi, feminiini' },
    'estudante': { fi: 'opiskelija', aa: 'es-tu-DÃ-tsi', ipa: '[estuˈdɐ̃tʃi]', sl: 'substantiivi, maskuliini ja feminiini', huom: 'sama muoto miehelle ja naiselle: o estudante, a estudante' },
    'o jay é geólogo': { fi: 'Jay on geologi', aa: 'u ZHEI E zhe-O-lo-gu', ipa: '[u ˈʒej ɛ ʒeˈɔloɡu]', sl: 'ilmaus' },
    'uma vendedora': { fi: 'myyjä (nainen)', aa: 'U-ma vẽ-de-DO-ra', ipa: '[ˈumɐ vẽdeˈdoɾɐ]', sl: 'ilmaus' },

    // ääntäminen
    'lã': { fi: 'villa', aa: 'LÃ', ipa: '[lɐ̃]', sl: 'substantiivi, feminiini' },
    'limão': { fi: 'sitruuna', aa: 'li-MÃU', ipa: '[liˈmɐ̃w]', sl: 'substantiivi, maskuliini' },
    'campo': { fi: 'pelto, maaseutu; kenttä', aa: 'KÃ-pu', ipa: '[ˈkɐ̃pu]', sl: 'substantiivi, maskuliini', huom: 'geologille tärkeä sana: trabalho de campo = kenttätyö' },
    'mundo': { fi: 'maailma', aa: 'MŨ-du', ipa: '[ˈmũdu]', sl: 'substantiivi, maskuliini' },
    'santo': { fi: 'pyhä; pyhimys', aa: 'SÃ-tu', ipa: '[ˈsɐ̃tu]', sl: 'adjektiivi, substantiivi', huom: 'São, Santo: São Paulo' },
    'cama': { fi: 'sänky', aa: 'KÃ-ma', ipa: '[ˈkɐ̃mɐ]', sl: 'substantiivi, feminiini' },
    'ano': { fi: 'vuosi', aa: 'Ã-nu', ipa: '[ˈɐ̃nu]', sl: 'substantiivi, maskuliini' },

    // kulttuuri
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kysyä, mitä jokin maksaa, ja ymmärtää hinnan lukuihin 11–20 asti.</li>
  <li>Osaat sanoa, että jotakin on olemassa: <span class="pt">Há cerveja aqui?</span></li>
  <li>Osaat valita oikean artikkelin (<span class="pt">o</span>, <span class="pt">a</span>, <span class="pt">um</span>, <span class="pt">uma</span>) ja yhdistelmät <span class="pt">no</span>, <span class="pt">na</span>, <span class="pt">do</span>, <span class="pt">da</span>.</li>
  <li>Osaat lausua nasaalivokaalit: <span class="pt">pão</span>, <span class="pt">bom</span>, <span class="pt">quinze</span>.</li>
</ul>
<p data-paikka="hakaniemen-kauppahalli">Helsinki, Hakaniemen kauppahalli, lauantai joulukuussa. Halli on täynnä ihmisiä. Jay ja Maia ostavat lahjoja Maian perheelle Belo Horizonteen. Maialla on lista. Jaylla on suunnitelma: olutta.</p>

<section class="osio">
  <h2>Dialogi: Quanto custa?</h2>
  <p class="ohje">Kuuntele ensin koko dialogi ilman suomennoksia. Seuraa hintoja ja lukuja. Jay tekee espanjan vaikutuksesta virheen, kun hän kysyy hintaa: huomaatko missä?</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-puhu="Helsinque, no mercado de Hakaniemi. Jay e Maia compram presentes de Natal." data-fi="Helsinki, Hakaniemen kauppahallissa. Jay ja Maia ostavat joululahjoja.">Helsinque, no mercado de Hakaniemi. Jay e Maia compram presentes de Natal.</p>
    <p class="s" data-h="maia" data-fi="Äidilleni juustoa. Isälleni kahvia. Andersonille suklaata.">Para a minha mãe, queijo. Para o meu pai, café. Para o Anderson, chocolate.</p>
    <p class="s" data-h="jay" data-fi="Entä minulle? Onko täällä olutta?">E para mim? Há cerveja aqui?</p>
    <p class="s" data-h="maia" data-fi="Jay! Lahjat ovat minun perheelleni.">Jay! Os presentes são para a minha família.</p>
    <p class="s" data-h="maia" data-fi="Listalla on viisitoista lahjaa.">Na lista há quinze presentes.</p>
    <p class="s" data-h="jay" data-fi="Viisitoista? Sinun perheesi on todella iso!">Quinze? A sua família é muito grande!</p>
    <p class="s" data-h="maia" data-fi="Ja ystävätkin ovat mukana.">E os amigos também.</p>
    <p class="s" data-h="jay" data-fi="Selvä. Hei! Paljonko juusto maksaa? (väärin)">Tá bom. Oi! Quanto cuesta o queijo?</p>
    <p class="s" data-h="maia" data-fi="Jay, se on ”custa”, ei ”cuesta”!">Jay, é custa, não cuesta!</p>
    <p class="s" data-h="vendedora" data-fi="Se maksaa kaksitoista euroa. Oletteko brasilialaisia?">Custa doze euros. Vocês são brasileiros?</p>
    <p class="s" data-h="maia" data-fi="Minä olen brasilialainen, Belo Horizontesta. Hän on suomalainen.">Eu sou brasileira, de Belo Horizonte. Ele é finlandês.</p>
    <p class="s" data-h="jay" data-fi="Kaksitoista euroa? Kuinka kallista!">Doze euros? Que caro!</p>
    <p class="s" data-h="vendedora" data-fi="Kuinka kivaa, minasgeraisilainen! Minä olen Riosta. Mutta juusto on todella hyvää.">Que legal, uma mineira! Eu sou do Rio. Mas o queijo é muito bom.</p>
    <p class="s" data-h="maia" data-fi="Sitten yksi juusto ja kaksi kahvia, kiitos.">Então um queijo e dois cafés, por favor.</p>
    <p class="s" data-h="vendedora" data-fi="Yksi juusto ja kaksi kahvia. Kukin kahvi maksaa kolme euroa. Se on kahdeksantoista euroa.">Um queijo e dois cafés. Cada café custa três euros. São dezoito euros.</p>
    <p class="s" data-h="jay" data-fi="Kaksitoista plus kuusi… se on kahdeksantoista. Se on oikein!">Doze mais seis… são dezoito. Está certo!</p>
    <p class="s" data-h="maia" data-fi="Kiitos! Hei hei!">Obrigada! Tchau!</p>
    <p class="s" data-h="vendedora" data-fi="Ei kestä! Hyvää joulua!">De nada! Boas festas!</p>
    <p class="s" data-h="jay" data-fi="Entä minun olueni?">E a minha cerveja?</p>
    <p class="s" data-h="maia" data-fi="Viereisessä kaupassa on suomalaista olutta. Mutta vain yksi!">Na loja ao lado há cerveja finlandesa. Mas só uma!</p>
  </div>
  <p class="ohje">Myyjä tulostaa kuitin. Napauta riviä: kuulet tuotteen ja hinnan portugaliksi.</p>
  <div class="kuitti" data-kauppa="Queijos do Rio · Hakaniemi" data-paiva="13/12 · 11:42" data-loppu="Obrigada e boas festas!">
    <p data-hinta="12">queijo da Serra</p>
    <p data-hinta="3">café</p>
    <p data-hinta="3">café</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Kaupat ja paikat" data-sanat="mercado,supermercado,loja,padaria,farmácia,livraria,correio,banco,feira"></div>
  <div class="teema" data-otsikko="Ostettavaa" data-sanat="queijo,café,chocolate,cerveja,peixe,pão,leite,vinho,água,livro,presente"></div>
  <div class="teema" data-otsikko="Asiointi ja hinnat" data-sanat="quanto custa,custa,caro,barato,euro,cada,por favor,obrigado,de nada,boas festas,vendedora,lista"></div>
</section>

<section class="osio">
  <h2>Numerot 11–20</h2>
  <p>Luvut 11–15 ovat omia sanojaan. Luvut 16–19 on muodostettu sanasta <span class="pt">dez</span> (10), sanasta <span class="pt">e</span> (ja) ja yksiköstä: <span class="pt">dezesseis</span> (dez + e + seis), <span class="pt">dezessete</span> (dez + e + sete), <span class="pt">dezoito</span> (dez + oito) ja <span class="pt">dezenove</span> (dez + e + nove). Luku 14 on <span class="pt">catorze</span> tai <span class="pt">quatorze</span>, molemmat käyvät.</p>
  <ul class="esim">
    <li class="s" data-fi="11">onze</li>
    <li class="s" data-fi="12">doze</li>
    <li class="s" data-fi="13">treze</li>
    <li class="s" data-fi="14">catorze</li>
    <li class="s" data-fi="15">quinze</li>
    <li class="s" data-fi="16">dezesseis</li>
    <li class="s" data-fi="17">dezessete</li>
    <li class="s" data-fi="18">dezoito</li>
    <li class="s" data-fi="19">dezenove</li>
    <li class="s" data-fi="20">vinte</li>
  </ul>
  <p>Hinnasta kysytään verbillä <span class="pt">custar</span> (maksaa). Vastaukseksi käy joko <span class="pt">custa</span> tai verbin <span class="pt">ser</span> monikkomuoto <span class="pt">são</span>, kun summa on useampi kuin yksi euro:</p>
  <ul class="esim">
    <li class="s" data-fi="Paljonko juusto maksaa?">Quanto custa o queijo?</li>
    <li class="s" data-fi="Se maksaa kaksitoista euroa.">Custa doze euros.</li>
    <li class="s" data-fi="Paljonko kaikki on yhteensä?">Quanto é?</li>
    <li class="s" data-fi="Se on kahdeksantoista euroa.">São dezoito euros.</li>
    <li class="s" data-fi="Se on kallista!">É caro!</li>
  </ul>
  <div class="huomio">
    <p><b>Espanjan ansa:</b> espanjassa <i lang="es">cuesta</i>, portugalissa <span class="pt">custa</span>. Jay sanoo dialogissa <span class="pt">cuesta</span>, koska hän ajattelee espanjaa. Ja huomaa: espanjan <i lang="es">¿Cuánto cuesta?</i> on portugaliksi <span class="pt">Quanto custa?</span> (ei aksenttia, eikä ”ue”).</p>
  </div>
  <div class="muista">
    <p><b>Muista:</b> euro on <span class="pt">euro</span> (monikko <span class="pt">euros</span>). Luvut 12–20 eivät muutu, mutta <span class="pt">um</span> ja <span class="pt">dois</span> muuttuvat feminiinin edessä: <span class="pt">uma cerveja</span>, <span class="pt">duas cervejas</span>.</p>
  </div>
</section>

<section class="osio">
  <h2>Kaupat</h2>
  <p>Kaupoilla on omat nimensä. Moni niistä päättyy -aria tai -ia ja on feminiini:</p>
  <ul class="esim">
    <li class="s" data-fi="leipomo">a padaria</li>
    <li class="s" data-fi="apteekki">a farmácia</li>
    <li class="s" data-fi="kirjakauppa">a livraria</li>
    <li class="s" data-fi="ruokakauppa">o supermercado</li>
    <li class="s" data-fi="posti">o correio</li>
    <li class="s" data-fi="pankki">o banco</li>
  </ul>
  <p><span class="pt">Mercado</span> tarkoittaa Brasiliassa usein ruokakauppaa: <span class="pt">Vou ao mercado</span> = menen ruokaostoksille. Hakaniemen kauppahallin kaltaista kokonaisuutta sanotaan myös <span class="pt">mercado</span>. <span class="pt">Feira</span> on viikoittainen kadun tori, ja sana tulee myös viikonpäivien nimissä (<span class="pt">segunda-feira</span>).</p>
</section>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>Kielioppi</h2>

  <h3>1. Há: on olemassa</h3>
  <p><span class="pt">Há</span> kertoo, että jokin on olemassa tai löytyy jostakin. Se on verbi <span class="pt">haver</span> hän-muodossa, mutta sitä käytetään vain yhtenä muotona. <span class="pt">Há</span> ei muutu monikossa: <span class="pt">há um queijo</span>, <span class="pt">há dois queijos</span>. Kielteinen muoto on <span class="pt">não há</span>.</p>
  <ul class="esim">
    <li class="s" data-fi="Täällä on juustoa.">Aqui há queijo.</li>
    <li class="s" data-fi="Listalla on viisitoista lahjaa.">Na lista há quinze presentes.</li>
    <li class="s" data-fi="Onko täällä olutta?">Há cerveja aqui?</li>
    <li class="s" data-fi="Kyllä on. / Ei ole.">Há, sim. / Não há.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> arkipuheessa Brasiliassa sanotaan useimmiten <span class="pt">tem</span> (verbi <span class="pt">ter</span>, ks. jakso 5): <span class="pt">Tem cerveja aqui?</span> – <span class="pt">Tem, sim.</span> Kirjoitetussa kielessä ja kohteliaassa puheessa <span class="pt">há</span> on yleisempi. Opettele molemmat, sillä kuulet molempia.</p>
  </div>
  <p><b>Espanjaan verrattuna:</b> espanjan <i lang="es">hay</i> on portugaliksi <span class="pt">há</span>. Espanjan <i lang="es">hay</i> sisältää y-kirjaimen, <span class="pt">há</span> ei: kirjoita aina aksentilla.</p>

  <h3>2. Suku: maskuliini ja feminiini</h3>
  <p>Portugalissa jokainen substantiivi (nimeä esine, ihminen tai ilmiö) on joko maskuliini (m.) tai feminiini (f.). Suomessa tällaista jakoa ei ole, joten suku pitää opetella sanan mukana. Hyvä sääntö: opettele sana aina artikkelin kanssa (<span class="pt">o queijo</span>, <span class="pt">a cerveja</span>).</p>
  <ul class="esim">
    <li class="s" data-fi="juusto (m.)">o queijo</li>
    <li class="s" data-fi="olut (f.)">a cerveja</li>
    <li class="s" data-fi="kahvi (m.)">o café</li>
    <li class="s" data-fi="kauppa (f.)">a loja</li>
  </ul>
  <p>Suurimmassa osassa sanoja päätteestä näkee sukua:</p>
  <ul>
    <li>Pääte <b>-o</b> on yleensä maskuliini: <span class="pt">o queijo</span>, <span class="pt">o amigo</span>, <span class="pt">o livro</span>.</li>
    <li>Pääte <b>-a</b> on yleensä feminiini: <span class="pt">a loja</span>, <span class="pt">a casa</span>, <span class="pt">a cerveja</span>.</li>
    <li>Päätteet <b>-ção</b> (<span class="pt">a estação</span>), <b>-dade</b> (<span class="pt">a cidade</span>) ja <b>-agem</b> (<span class="pt">a viagem</span>) ovat feminiinejä.</li>
    <li>Joillakin yleisillä sanoilla on päinvastainen pääte: <span class="pt">o dia</span> (päivä), <span class="pt">o problema</span> ja <span class="pt">o sofá</span> ovat maskuliineja, <span class="pt">a mão</span> (käsi) on feminiini.</li>
  </ul>
  <p>Ihmisistä miehen ja naisen muodot erotetaan yleensä päätteellä: <span class="pt">amigo</span> – <span class="pt">amiga</span>, <span class="pt">vendedor</span> – <span class="pt">vendedora</span>. Joidenkin sanojen muoto on sama: <span class="pt">o estudante</span> – <span class="pt">a estudante</span>.</p>

  <h3>3. Luku: yksikkö ja monikko</h3>
  <p>Monikko eli kahden tai useamman asian muoto on helppo: kun sana päättyy vokaaliin, lisää <b>-s</b>. Muut päätteet (-r, -l, -m, -ão) opitaan jaksossa 9.</p>
  <ul class="esim">
    <li class="s" data-fi="yksi juusto – kolme juustoa">um queijo – três queijos</li>
    <li class="s" data-fi="yksi lahja – viisitoista lahjaa">um presente – quinze presentes</li>
    <li class="s" data-fi="yksi olut – kaksi olutta">uma cerveja – duas cervejas</li>
    <li class="s" data-fi="yksi kahvi – kaksi kahvia">um café – dois cafés</li>
  </ul>

  <h3>4. Artikkelit</h3>
  <p>Artikkeli on pieni sana substantiivin edessä. Se kertoo, onko kyseessä jokin tietty asia (määräinen artikkeli) vai jokin yleinen (epämääräinen artikkeli). Suomessa artikkeleita ei ole. Portugalissa artikkeli taipuu suvun ja luvun mukaan:</p>
  <table class="taivutus">
    <tr><td></td><td>maskuliini</td><td>feminiini</td></tr>
    <tr><td>määräinen, yksikkö</td><td>o</td><td>a</td></tr>
    <tr><td>määräinen, monikko</td><td>os</td><td>as</td></tr>
    <tr><td>epämääräinen, yksikkö</td><td>um</td><td>uma</td></tr>
    <tr><td>epämääräinen, monikko</td><td>uns</td><td>umas</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="se juusto / ne lahjat">o queijo / os presentes</li>
    <li class="s" data-fi="se olut / ne kaupat">a cerveja / as lojas</li>
    <li class="s" data-fi="yksi kahvi / joitakin ystäviä">um café / uns amigos</li>
    <li class="s" data-fi="yksi kauppa / joitakin oluita">uma loja / umas cervejas</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> portugalissa määräistä artikkelia käytetään enemmän kuin espanjassa, ja paljon enemmän kuin suomessa. Sitä käytetään (1) omistussanan edessä: <span class="pt">a minha mãe</span>; (2) ihmisten etunimien edessä puheessa: <span class="pt">o Jay</span>, <span class="pt">a Maia</span>; (3) maiden edessä: <span class="pt">a Finlândia</span>, <span class="pt">o Brasil</span>; (4) yleisnimien edessä: <span class="pt">o café é bom</span>. Sitä ei käytetä kaupunkien edessä (<span class="pt">Helsinque</span>) eikä ammatin tai kansalaisuuden edessä: <span class="pt">O Jay é geólogo.</span> (ei <span class="pt">um geólogo</span>).</p>
  </div>

  <h3>5. No, na, do, da: kun prepositio ja artikkeli yhtyvät</h3>
  <p>Jaksossa 2 näit, että <span class="pt">em</span> + <span class="pt">o</span> = <span class="pt">no</span> ja <span class="pt">de</span> + <span class="pt">a</span> = <span class="pt">da</span>. Sama sääntö koskee kaikkia artikkeleita ja myös monikkoa. Yhdistyminen on pakollinen sekä puheessa että kirjoituksessa.</p>
  <table class="taivutus">
    <tr><td>em + o / a / os / as</td><td>no / na / nos / nas</td></tr>
    <tr><td>de + o / a / os / as</td><td>do / da / dos / das</td></tr>
    <tr><td>em + um / uma</td><td>num / numa</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Olemme kauppahallissa.">Estamos no mercado.</li>
    <li class="s" data-fi="Olut on kaupassa.">A cerveja está na loja.</li>
    <li class="s" data-fi="Se on Maian ystävien lahja.">É o presente dos amigos da Maia.</li>
    <li class="s" data-fi="He ovat kaupoissa.">Elas estão nas lojas.</li>
    <li class="s" data-fi="Jay on yhdessä kaupassa.">O Jay está numa loja.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> kun substantiivin edessä on <span class="pt">um</span> tai <span class="pt">uma</span>, yhdistelmä <span class="pt">em</span> + <span class="pt">um</span> kirjoitetaan <span class="pt">num</span> ja <span class="pt">em</span> + <span class="pt">uma</span> <span class="pt">numa</span>. Puheessa kuulet myös lyhennetyn sanan <span class="pt">pra</span> (<span class="pt">para a</span>).</p>
  </div>

  <h3>Vertailu espanjaan</h3>
  <table class="taivutus">
    <tr><td>espanja</td><td>portugali</td></tr>
    <tr><td>el, la, los, las</td><td>o, a, os, as</td></tr>
    <tr><td>un, una, unos, unas</td><td>um, uma, uns, umas</td></tr>
    <tr><td>hay</td><td>há</td></tr>
    <tr><td>en el, del</td><td>no, do</td></tr>
  </table>
  <p>Suurin ero on yhdistyminen: espanjassa <i lang="es">en el</i> kirjoitetaan erillisinä sanoina ja vain <i lang="es">a el</i> ja <i lang="es">de el</i> yhtyvät (<i lang="es">al</i>, <i lang="es">del</i>). Portugalissa prepositio ja artikkeli yhtyvät useammin: <span class="pt">no</span>, <span class="pt">na</span>, <span class="pt">do</span>, <span class="pt">da</span>.</p>
</section>

<section class="osio">
  <h2>Ääntäminen: nasaalivokaalit</h2>
  <p>Nasaalivokaali on vokaali, jonka aikana osa ilmasta kulkee nenän kautta. Portugalissa niitä on paljon, ja ne ovat tärkeä osa kieltä. Suomessa nasaalivokaaleja ei ole. Portugalissa m tai n jää usein kokonaan äänettömäksi ja vain vokaali soi nenässä: sana <span class="pt">bom</span> ei ole ”bon” eikä ”bom”, vaan pelkkä nenään soiva ”bõ”.</p>

  <div class="saanto">
    <h3>1. Tilde (ã, õ)</h3>
    <p>Tildemerkki tekee vokaalista aina nasaalin. Yhdistelmät <b>ão</b>, <b>ãe</b> ja <b>õe</b> ovat diftongeja, joissa toinen osa on lyhyt u tai i.</p>
    <ul class="esim">
      <li class="s">pão</li>
      <li class="s">mãe</li>
      <li class="s">mão</li>
      <li class="s">maçã</li>
      <li class="s">limão</li>
      <li class="s">coração</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>2. m tai n tavun lopussa</h3>
    <p>Kun vokaalin perässä on m tai n ja sitten konsonantti tai sanan loppu, edeltävä vokaali on nasaali eikä m tai n kuulu itse. Esimerkiksi <span class="pt">quinze</span> äännetään ”KĨ-zi”, ei ”kin-zi”.</p>
    <ul class="esim">
      <li class="s">bom</li>
      <li class="s">sim</li>
      <li class="s">um</li>
      <li class="s">quinze</li>
      <li class="s">campo</li>
      <li class="s">mundo</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>3. Verbin pääte -am</h3>
    <p>Verbin monikon päätteet -am ja -em ääntyvät nasaalisesti. Pääte <b>-am</b> kuulostaa ”-ãu”, ja siitä erottaa he-muodon: <span class="pt">falo</span> (puhun) mutta <span class="pt">falam</span> (puhuvat).</p>
    <ul class="esim">
      <li class="s">falo</li>
      <li class="s">falam</li>
      <li class="s">compram</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>4. Vertaa: suullinen ja nasaalinen</h3>
    <p>Kuuntele pareja. Ensimmäisessä vokaali ei ole nasaali, toisessa on. Ero ei ole vain äänenlaatu vaan myös merkitys.</p>
    <ul class="esim">
      <li class="s">sou</li>
      <li class="s">são</li>
      <li class="s">vou</li>
      <li class="s">vão</li>
      <li class="s">estou</li>
      <li class="s">estão</li>
    </ul>
  </div>

  <div class="huomio">
    <p><b>Suomalaisen sudenkuoppa:</b> älä lausu sanojen <span class="pt">sim</span>, <span class="pt">bom</span> ja <span class="pt">um</span> lopussa m-äännettä huulet kiinni. Anna vokaalin soida nenässä ja lopeta ääni ilman m:ää.</p>
  </div>
</section>

<aside class="kulttuuri" data-paikka="hakaniemen-kauppahalli">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Hakaniemen kauppahalli</h3>
  <figure class="kuva" data-kuva="hakaniemen-kauppahalli"></figure>
  <p>Hakaniemen kauppahalli on Helsingin Hakaniemessä, aivan Kallion kaupunginosan vieressä, Hakaniemen torin vierellä. Se avattiin vuonna 1914. Helsingissä on kolme vanhaa kauppahallia: Vanha kauppahalli (1889), Hietalahden kauppahalli (1903) ja Hakaniemen kauppahalli (1914). Hakaniemen hallissa myydään kalaa, lihaa, juustoa, leipää, vihanneksia ja paikallisia herkkuja, ja siellä on myös kahviloita.</p>
  <p>Kauppahalli on hyvä paikka ostaa lahjoja, koska siellä on suomalaisia tuotteita, jotka sopivat tuliaisiksi ulkomaille. Jay ja Maia ostavat tuliaisiksi juustoa ja kahvia: Suomi on yksi maailman suurimmista kahvinjuojista asukasta kohti, ja tämä yllättää brasilialaiset, koska heidän oma maansa on kahvin suurtuottaja.</p>
  <p>Brasiliassa sama tehtävä on ruokatorilla (<span class="pt">feira</span>) ja kauppahallilla (<span class="pt">mercado</span>). Belo Horizontessa tunnetuin on Mercado Central, johon palaamme jaksossa 11.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Täydennä: há, artikkeli tai yhdistelmä</h3>
    <p class="ohje">Kirjoita puuttuva sana: <span class="pt">há</span>, <span class="pt">o</span>, <span class="pt">a</span>, <span class="pt">uma</span>, <span class="pt">no</span>, <span class="pt">na</span>, <span class="pt">do</span>, <span class="pt">da</span> tai <span class="pt">dos</span>.</p>
    <div class="aukot">
      <p>Aqui <span class="aukko" data-oikea="há"></span> cerveja finlandesa.</p>
      <p><span class="aukko" data-oikea="O|o"></span> café é muito bom.</p>
      <p><span class="aukko" data-oikea="A|a"></span> loja é grande.</p>
      <p>Nós estamos <span class="aukko" data-oikea="no"></span> mercado.</p>
      <p>O Jay está <span class="aukko" data-oikea="na"></span> loja.</p>
      <p>O queijo é <span class="aukko" data-oikea="da"></span> Finlândia.</p>
      <p>Os presentes são <span class="aukko" data-oikea="dos"></span> amigos.</p>
      <p>Eu quero <span class="aukko" data-oikea="uma"></span> cerveja.</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. O vai a?</h3>
    <p class="ohje">Valitse artikkeli. Muista, että päätteestä ei aina näe sukua.</p>
    <div class="valinta" data-oikea="o">
      <p class="kysymys">___ queijo</p>
      <div class="vaihtoehdot"><button type="button">o</button><button type="button">a</button></div>
    </div>
    <div class="valinta" data-oikea="a">
      <p class="kysymys">___ cerveja</p>
      <div class="vaihtoehdot"><button type="button">o</button><button type="button">a</button></div>
    </div>
    <div class="valinta" data-oikea="a">
      <p class="kysymys">___ cidade</p>
      <div class="vaihtoehdot"><button type="button">o</button><button type="button">a</button></div>
    </div>
    <div class="valinta" data-oikea="o">
      <p class="kysymys">___ problema</p>
      <div class="vaihtoehdot"><button type="button">o</button><button type="button">a</button></div>
    </div>
    <div class="valinta" data-oikea="a">
      <p class="kysymys">___ mão</p>
      <div class="vaihtoehdot"><button type="button">o</button><button type="button">a</button></div>
    </div>
    <div class="valinta" data-oikea="a">
      <p class="kysymys">___ estação</p>
      <div class="vaihtoehdot"><button type="button">o</button><button type="button">a</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Yhdistä luku ja numero</h3>
    <ul class="yhdista">
      <li data-pari="11">onze</li>
      <li data-pari="13">treze</li>
      <li data-pari="15">quinze</li>
      <li data-pari="16">dezesseis</li>
      <li data-pari="17">dezessete</li>
      <li data-pari="18">dezoito</li>
      <li data-pari="19">dezenove</li>
      <li data-pari="20">vinte</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Yhdistä kauppa ja tuote</h3>
    <ul class="yhdista">
      <li data-pari="leipä">a padaria</li>
      <li data-pari="lääke">a farmácia</li>
      <li data-pari="kirja">a livraria</li>
      <li data-pari="kirje">o correio</li>
      <li data-pari="raha">o banco</li>
      <li data-pari="olut ja ruoka">o supermercado</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: Jayn kuitti</h3>
    <p class="ohje">Maia sanoi: <span class="pt">Mas só uma!</span> Tässä on Jayn kuitti viereisestä kaupasta. Napauta rivejä ja vastaa. Huomaa: <i lang="es">cerveza</i> on espanjaa. Portugaliksi olut on <span class="pt">cerveja</span>.</p>
    <div class="kuitti" data-kauppa="Loja ao lado · Hakaniemi" data-paiva="13/12 · 11:57" data-loppu="Volte sempre!">
      <p data-hinta="4">cerveja finlandesa</p>
      <p data-hinta="4">cerveja finlandesa</p>
      <p data-hinta="5">cerveza espanhola</p>
      <p data-hinta="3">chocolate</p>
    </div>
    <div class="valinta" data-oikea="três">
      <p class="kysymys">Quantas cervejas o Jay compra?</p>
      <div class="vaihtoehdot"><button type="button">uma</button><button type="button">duas</button><button type="button">três</button></div>
    </div>
    <div class="valinta" data-oikea="quatro euros">
      <p class="kysymys">Quanto custa uma cerveja?</p>
      <div class="vaihtoehdot"><button type="button">três euros</button><button type="button">quatro euros</button><button type="button">onze euros</button></div>
    </div>
    <div class="valinta" data-oikea="dezesseis euros">
      <p class="kysymys">Quanto é o total?</p>
      <div class="vaihtoehdot"><button type="button">onze euros</button><button type="button">dezesseis euros</button><button type="button">dezoito euros</button></div>
    </div>
    <div class="valinta" data-oikea="cinco euros">
      <p class="kysymys">Quanto custa a cerveza espanhola?</p>
      <div class="vaihtoehdot"><button type="button">quatro euros</button><button type="button">cinco euros</button><button type="button">quinze euros</button></div>
    </div>
    <div class="valinta" data-oikea="para a Maia">
      <p class="kysymys">E o chocolate? É para quem? (Jay tietää, että Maia ei ole iloinen.)</p>
      <div class="vaihtoehdot"><button type="button">para o Jay</button><button type="button">para a Maia</button><button type="button">para o Anderson</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Kuuntele ja valitse luku</h3>
    <p class="ohje">Paina ▶ ja valitse luku, jonka kuulit.</p>
    <div class="valinta" data-kuuntele="treze" data-oikea="treze">
      <p class="kysymys">Mikä luku?</p>
      <div class="vaihtoehdot"><button type="button">doze</button><button type="button">treze</button><button type="button">quinze</button></div>
    </div>
    <div class="valinta" data-kuuntele="dezoito" data-oikea="dezoito">
      <p class="kysymys">Mikä luku?</p>
      <div class="vaihtoehdot"><button type="button">dezessete</button><button type="button">dezoito</button><button type="button">dezenove</button></div>
    </div>
    <div class="valinta" data-kuuntele="onze" data-oikea="onze">
      <p class="kysymys">Mikä luku?</p>
      <div class="vaihtoehdot"><button type="button">onze</button><button type="button">dez</button><button type="button">doze</button></div>
    </div>
    <div class="valinta" data-kuuntele="são" data-oikea="são">
      <p class="kysymys">Mikä verbi? (suullinen vai nasaali)</p>
      <div class="vaihtoehdot"><button type="button">sou</button><button type="button">são</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause. Kirjoita luvut sanoilla.</p>
    <div class="sanelu" data-puhu="Quanto custa o queijo?"></div>
    <div class="sanelu" data-puhu="Custa doze euros."></div>
    <div class="sanelu" data-puhu="Na lista há quinze presentes."></div>
    <div class="sanelu" data-puhu="São dezoito euros."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Täällä on juustoa.</p><p class="s" data-fi="Täällä on juustoa.">Aqui há queijo.</p></div>
    <div class="kaanna"><p class="fi">Paljonko kahvi maksaa?</p><p class="s" data-fi="Paljonko kahvi maksaa?">Quanto custa o café?</p></div>
    <div class="kaanna"><p class="fi">Se maksaa viisitoista euroa.</p><p class="s" data-fi="Se maksaa viisitoista euroa.">Custa quinze euros.</p></div>
    <div class="kaanna"><p class="fi">Listalla on kaksitoista lahjaa.</p><p class="s" data-fi="Listalla on kaksitoista lahjaa.">Na lista há doze presentes.</p></div>
    <div class="kaanna"><p class="fi">Lahja on äidilleni.</p><p class="s" data-fi="Lahja on äidilleni.">O presente é para a minha mãe.</p></div>
    <div class="kaanna"><p class="fi">Kuinka kallista! Mutta juusto on hyvää.</p><p class="s" data-fi="Kuinka kallista! Mutta juusto on hyvää.">Que caro! Mas o queijo é bom.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Roolileikki: kauppahallissa</h3>
    <p class="ohje">Käytä dialogin roolileikkiä ja puhu Jayn repliikit. Vastaa sitten omin sanoin näihin kysymyksiin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Quanto custa o café?</summary>
      <p class="s" data-fi="Se maksaa kolme euroa.">Custa três euros.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Há queijo aqui?</summary>
      <p class="s" data-fi="Kyllä on. Yksi juusto maksaa kaksitoista euroa.">Há, sim. Um queijo custa doze euros.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você é brasileiro?</summary>
      <p class="s" data-fi="En, olen suomalainen.">Não, eu sou finlandês.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l03">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l03-lista" lang="pt-BR">
      <div class="kal-yla"><b>Lista de presentes</b><small>kenelle, mitä, paljonko</small></div>
      <div class="kal-rivit">
        <label>Para a minha mãe <input name="mae" placeholder="queijo, doze euros"></label>
        <label>Para o meu pai <input name="pai"></label>
        <label>Para… <input name="x1"></label>
        <label>Para… <input name="x2"></label>
        <label>Para mim <input name="eu" placeholder="cerveja? só uma!"></label>
      </div>
    </div>
    <p>Kirjoita lyhyt ostoslista ja pieni asiointidialogi. Ensin viisi lahjaa viidelle ihmiselle (<span class="pt">Para o … , …</span>), sitten kaksi riviä, joissa kysyt hintaa ja myyjä vastaa. Käytä lukuja 11–20. Sano teksti ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Isälleni kahvia. Äidilleni juustoa. Andersonille suklaata.">Para o meu pai, café. Para a minha mãe, queijo. Para o Anderson, chocolate.</p>
      <p class="s" data-fi="Paljonko suklaa maksaa?">Quanto custa o chocolate?</p>
      <p class="s" data-fi="Se maksaa neljätoista euroa.">Custa quatorze euros.</p>
      <p class="s" data-fi="Kaksi kahvia ja yksi suklaa: se on kaksikymmentä euroa.">Dois cafés e um chocolate: são vinte euros.</p>
    </details>
  </div>
</section>
`
});
