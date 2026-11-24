/* Jakso 14: Jay eksyy keskustassa. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l14',
  lyhyt: '14',
  jakso: 'Jakso 14',
  otsikko: 'Tien kysyminen: käskymuoto',
  lahde: 'Aihe: tien kysyminen ja kaupunki · Kielioppi: käskymuodot (säännölliset) · Ääntäminen: puhekielen lyhenteet',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi, kotona Belo Horizontessa' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, opettelee portugalia' },
    mateus: { nimi: 'Mateus', tyyppi: 'mies', vaihto: 3, kuvaus: 'Maian lapsuudenystävä, sovelluskuljettaja ja sambarumpali; tuntee jokaisen kadun ja ajaa varovasti' }
  },

  aiheet: ['liike', 'paikka', 'kaupunki', 'kysymys'],

  sanasto: ['direita', 'esquerda', 'em frente', 'direto', 'esquina', 'quarteirão', 'sinal', 'farmácia', 'praça', 'avenida',
    'fonte', 'palmeira', 'perto de', 'longe de', 'ao lado de', 'virar', 'seguir', 'continuar', 'atravessar', 'subir',
    'descer', 'parar', 'esperar', 'estou perdido', 'onde fica', 'como chego', 'é logo ali', 'devagar', 'sozinho'],

  sanat: {
    // dialogi
    'sozinho': { fi: 'yksin', aa: 'so-ZĨ-nju', ipa: '[soˈzĩɲu]', sl: 'adjektiivi', huom: 'feminiini ”sozinha”' },
    'queda': { fi: 'putoaminen, lasku; (espanjaa:) sijaita', aa: 'KE-da', ipa: '[ˈkɛdɐ]', sl: 'substantiivi, feminiini', huom: 'portugaliksi sijaintia kysytään sanalla {ficar}: ”onde fica?”. Espanjan ”¿dónde queda?” on ansa' },
    'praça': { fi: 'aukio, tori', aa: 'PRA-sa', ipa: '[ˈpɾasɐ]', sl: 'substantiivi, feminiini' },
    'praça da liberdade': { fi: 'Praça da Liberdade (Belo Horizonten tunnettu aukio)', aa: 'PRA-sa da li-beh-DA-di', ipa: '[ˈpɾasɐ da libehˈdadʒi]', sl: 'paikan nimi', huom: 'kirjaimellisesti ”Vapauden aukio”' },
    'liberdade': { fi: 'vapaus', aa: 'li-beh-DA-di', ipa: '[libehˈdadʒi]', sl: 'substantiivi, feminiini' },
    'todas': { fi: 'kaikki (feminiinin monikko)', aa: 'TO-das', ipa: '[ˈtodɐs]', sl: 'pronomini', huom: 'maskuliini ”todos”; ”todas as ruas” = kaikki kadut' },
    'ruas': { fi: 'kadut', aa: 'HU-as', ipa: '[ˈhuɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {rua}' },
    'desculpa': { fi: 'anteeksi (arkinen); hän pyytää anteeksi', aa: 'dis-KUU-pa', ipa: '[dʒisˈkuwpɐ]', sl: 'verbi {desculpar}', huom: 'arkikieli: ”Desculpa!” = Anteeksi!' },
    'fale': { fi: 'puhu! (käskymuoto)', aa: 'FA-li', ipa: '[ˈfali]', sl: 'verbi {falar}, käskymuoto', huom: 'eu falo → fale' },
    'farmácia': { fi: 'apteekki', aa: 'fah-MA-sja', ipa: '[fahˈmasjɐ]', sl: 'substantiivi, feminiini' },
    'siga': { fi: 'jatka! seuraa! (käskymuoto)', aa: 'SI-ga', ipa: '[ˈsiɡɐ]', sl: 'verbi {seguir}, käskymuoto', huom: 'eu sigo → siga' },
    'esquina': { fi: 'kadunkulma', aa: 'es-KĨ-na', ipa: '[esˈkĩnɐ]', sl: 'substantiivi, feminiini' },
    'vire': { fi: 'käänny! (käskymuoto)', aa: 'VI-ri', ipa: '[ˈviɾi]', sl: 'verbi {virar}, käskymuoto', huom: 'eu viro → vire' },
    'viro': { fi: 'minä käännyn', aa: 'VI-ru', ipa: '[ˈviɾu]', sl: 'verbi {virar}' },
    'vira': { fi: 'kääntyy; käänny! (puhekielen käsky)', aa: 'VI-ra', ipa: '[ˈviɾɐ]', sl: 'verbi {virar}' },
    'direita': { fi: 'oikea; oikealla', aa: 'di-REI-ta', ipa: '[dʒiˈɾejtɐ]', sl: 'substantiivi, adjektiivi, feminiini', huom: '”à direita” = oikealle; vastakohta {esquerda}. Ei ”suoraan” (se on {direto})' },
    'derecho': { kieli: 'es', fi: 'espanjan ”suoraan; oikea”', aa: 'de-RE-tso', ipa: '[deˈɾetʃo]', sl: 'espanjan sana', huom: 'portugaliksi suoraan = {direto} tai {reto}' },
    'reto': { fi: 'suora; suoraan', aa: 'HE-tu', ipa: '[ˈhɛtu]', sl: 'adjektiivi, adverbi', huom: '”siga reto” = jatka suoraan' },
    'continue': { fi: 'jatka! (käskymuoto)', aa: 'kõ-tsi-NUI', ipa: '[kõtʃiˈnuj]', sl: 'verbi {continuar}, käskymuoto', huom: 'eu continuo → continue' },
    'quarteirão': { fi: 'kortteli', aa: 'kuah-tei-RÃU', ipa: '[kwahtejˈɾɐ̃w]', sl: 'substantiivi, maskuliini', huom: 'puhekielessä myös ”quadra”' },
    'quarteirões': { fi: 'korttelit', aa: 'kuah-tei-RÕIS', ipa: '[kwahtejˈɾõjs]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {quarteirão}' },
    'atravessar': { fi: 'ylittää', aa: 'a-tra-ve-SAH', ipa: '[atɾaveˈsah]', sl: 'verbi, perusmuoto' },
    'atravesso': { fi: 'minä ylitän', aa: 'a-tra-VE-su', ipa: '[atɾaˈvesu]', sl: 'verbi {atravessar}' },
    'atravesse': { fi: 'ylitä! (käskymuoto)', aa: 'a-tra-VE-si', ipa: '[atɾaˈvesi]', sl: 'verbi {atravessar}, käskymuoto' },
    'suba': { fi: 'nouse! kävele ylös! (käskymuoto)', aa: 'SU-ba', ipa: '[ˈsubɐ]', sl: 'verbi {subir}, käskymuoto', huom: 'eu subo → suba' },
    'subo': { fi: 'minä nousen', aa: 'SU-bu', ipa: '[ˈsubu]', sl: 'verbi {subir}' },
    'preguiça': { fi: 'laiskuus; laiskotus', aa: 'pre-GI-sa', ipa: '[pɾeˈɡisɐ]', sl: 'substantiivi, feminiini', huom: '”Que preguiça!” = voi, kun laiskottaa!' },
    'reclame': { fi: 'valita! (käskymuoto)', aa: 'he-KLÃ-mi', ipa: '[heˈklɐ̃mi]', sl: 'verbi {reclamar}, käskymuoto', huom: '”Não reclame!” = älä valita!' },
    'reclamar': { fi: 'valittaa', aa: 'he-kla-MAH', ipa: '[heklaˈmah]', sl: 'verbi, perusmuoto' },
    'subida': { fi: 'ylämäki, nousu', aa: 'su-BI-da', ipa: '[suˈbidɐ]', sl: 'substantiivi, feminiini' },
    'pequena': { fi: 'pieni (feminiinisanan edellä)', aa: 'pe-KẼ-na', ipa: '[peˈkẽnɐ]', sl: 'adjektiivi', huom: 'maskuliini {pequeno}' },
    'palmeira': { fi: 'palmu', aa: 'pau-MEI-ra', ipa: '[pawˈmejɾɐ]', sl: 'substantiivi, feminiini' },
    'palmeiras': { fi: 'palmut', aa: 'pau-MEI-ras', ipa: '[pawˈmejɾɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {palmeira}' },
    'fonte': { fi: 'suihkulähde; lähde', aa: 'FÕ-tsi', ipa: '[ˈfõtʃi]', sl: 'substantiivi, feminiini', huom: 'espanjaksi ”fuente”' },
    'pare': { fi: 'pysähdy! (käskymuoto)', aa: 'PA-ri', ipa: '[ˈpaɾi]', sl: 'verbi {parar}, käskymuoto' },
    'espere': { fi: 'odota! (käskymuoto)', aa: 'es-PE-ri', ipa: '[esˈpeɾi]', sl: 'verbi {esperar}, käskymuoto', huom: 'eu espero → espere' },
    'espero': { fi: 'minä odotan', aa: 'es-PE-ru', ipa: '[esˈpeɾu]', sl: 'verbi {esperar}' },
    'esperem': { fi: 'odottakaa! (monikko)', aa: 'es-PE-rẽi', ipa: '[esˈpeɾẽj]', sl: 'verbi {esperar}, käskymuoto' },
    'chego': { fi: 'minä saavun', aa: 'SHE-gu', ipa: '[ˈʃeɡu]', sl: 'verbi {chegar}' },
    'chega': { fi: 'saapuu', aa: 'SHE-ga', ipa: '[ˈʃeɡɐ]', sl: 'verbi {chegar}' },
    'chegue': { fi: 'saavu! (käskymuoto)', aa: 'SHE-gi', ipa: '[ˈʃeɡi]', sl: 'verbi {chegar}, käskymuoto', huom: 'eu chego → chegue (g säilyy)' },
    'minutos': { fi: 'minuutit', aa: 'mi-NU-tus', ipa: '[miˈnutus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {minuto}' },
    'fique': { fi: 'pysy! (käskymuoto)', aa: 'FI-ki', ipa: '[ˈfiki]', sl: 'verbi {ficar}, käskymuoto', huom: 'eu fico → fique (c → qu)' },
    'ande': { fi: 'kävele! (käskymuoto)', aa: 'Ã-di', ipa: '[ˈɐ̃dʒi]', sl: 'verbi {andar}, käskymuoto', huom: 'eu ando → ande' },
    'dirijo': { fi: 'minä ajan (autoa)', aa: 'di-RI-zhu', ipa: '[dʒiˈɾiʒu]', sl: 'verbi {dirigir}' },
    'próxima': { fi: 'seuraava (feminiinisanan edellä)', aa: 'PRO-si-ma', ipa: '[ˈpɾɔsimɐ]', sl: 'adjektiivi', huom: '”da próxima vez” = ensi kerralla' },
    'ligue': { fi: 'soita! (käskymuoto)', aa: 'LI-gi', ipa: '[ˈliɡi]', sl: 'verbi {ligar}, käskymuoto', huom: '”Me ligue!” = soita minulle!' },
    'pegue': { fi: 'ota! (käskymuoto)', aa: 'PE-gi', ipa: '[ˈpeɡi]', sl: 'verbi {pegar}, käskymuoto', huom: 'eu pego → pegue (g säilyy)' },
    'primeira': { fi: 'ensimmäinen (feminiinisanan edellä)', aa: 'pri-MEI-ra', ipa: '[pɾiˈmejɾɐ]', sl: 'järjestysluku', huom: 'maskuliini {primeiro}' },
    'segunda': { fi: 'toinen (feminiinisanan edellä); maanantai', aa: 'se-GŨ-da', ipa: '[seˈɡũdɐ]', sl: 'järjestysluku', huom: 'maskuliini {segundo}' },
    'indo': { fi: 'menossa', aa: 'Ĩ-du', ipa: '[ˈĩdu]', sl: 'gerúndio, verbi {ir}', huom: '”eu tô indo” = olen menossa' },
    'bora': { fi: 'mennään!', aa: 'BO-ra', ipa: '[ˈbɔɾɐ]', sl: 'huudahdus', huom: 'puhekielen lyhenne sanoista ”vamos embora”' },
    'vamos': { fi: 'mennään; me menemme', aa: 'VÃ-mus', ipa: '[ˈvɐ̃mus]', sl: 'verbi {ir}', huom: '”Vamos!” = mennään!' },
    'vamos embora': { fi: 'lähdetään', aa: 'VÃ-muz ẽ-BO-ra', ipa: '[ˈvɐ̃muz ẽˈbɔɾɐ]', sl: 'ilmaus' },
    'embora': { fi: 'pois (lähtemisessä); vaikka', aa: 'ẽ-BO-ra', ipa: '[ẽˈbɔɾɐ]', sl: 'adverbi, konjunktio', huom: '”ir embora” = lähteä pois' },
    'avenidas': { fi: 'isot kadut', aa: 'a-ve-NI-das', ipa: '[aveˈnidɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {avenida}' },
    'daqui': { fi: 'täältä', aa: 'da-KI', ipa: '[daˈki]', sl: 'adverbi', huom: '{de} + {aqui}' },
    'palácio': { fi: 'palatsi', aa: 'pa-LA-siu', ipa: '[paˈlasju]', sl: 'substantiivi, maskuliini' },
    'circuito': { fi: 'kierros, piiri', aa: 'sih-KUI-tu', ipa: '[sihˈkujtu]', sl: 'substantiivi, maskuliini' },
    'cultural': { fi: 'kulttuuri-', aa: 'kuu-tu-RAU', ipa: '[kuwtuˈɾaw]', sl: 'adjektiivi' },
    // kielioppi
    'imperativo': { fi: 'käskymuoto', aa: 'ĩ-pe-ra-TSI-vu', ipa: '[ĩpeɾaˈtʃivu]', sl: 'substantiivi, maskuliini' },
    'coma': { fi: 'syö! (käskymuoto)', aa: 'KO-ma', ipa: '[ˈkomɐ]', sl: 'verbi {comer}, käskymuoto', huom: 'eu como → coma' },
    'abro': { fi: 'minä avaan', aa: 'A-bru', ipa: '[ˈabɾu]', sl: 'verbi {abrir}' },
    'abra': { fi: 'avaa! (käskymuoto)', aa: 'A-bra', ipa: '[ˈabɾɐ]', sl: 'verbi {abrir}, käskymuoto' },
    'sigo': { fi: 'minä jatkan, seuraan', aa: 'SI-gu', ipa: '[ˈsiɡu]', sl: 'verbi {seguir}' },
    'segue': { fi: 'jatkaa; jatka! (puhekieli)', aa: 'SE-gi', ipa: '[ˈseɡi]', sl: 'verbi {seguir}' },
    'falem': { fi: 'puhukaa! (monikko)', aa: 'FA-lẽi', ipa: '[ˈfalẽj]', sl: 'verbi {falar}, käskymuoto' },
    'comam': { fi: 'syökää! (monikko)', aa: 'KO-mãu', ipa: '[ˈkomɐ̃w]', sl: 'verbi {comer}, käskymuoto' },
    'abram': { fi: 'avatkaa! (monikko)', aa: 'A-brãu', ipa: '[ˈabɾɐ̃w]', sl: 'verbi {abrir}, käskymuoto' },
    'busque': { fi: 'hae! etsi! (käskymuoto)', aa: 'BUS-ki', ipa: '[ˈbuski]', sl: 'verbi {buscar}, käskymuoto', huom: 'eu busco → busque (c → qu)' },
    'comece': { fi: 'aloita! (käskymuoto)', aa: 'ko-ME-si', ipa: '[koˈmesi]', sl: 'verbi {começar}, käskymuoto', huom: 'eu começo → comece (ç → c)' },
    'ajude': { fi: 'auta! (käskymuoto)', aa: 'a-ZHU-di', ipa: '[aˈʒudʒi]', sl: 'verbi {ajudar}, käskymuoto', huom: '”Me ajude!” = auta minua!' },
    'ajude-me': { fi: 'auta minua! (kirjakieli)', aa: 'a-ZHU-di-mi', ipa: '[aˈʒudʒimi]', sl: 'käskymuoto + objektipronomini', huom: 'puheessa ”me ajude”' },
    // tien kysyminen
    'em frente': { fi: 'eteenpäin, suoraan', aa: 'ẽi FRẼ-tsi', ipa: '[ẽj ˈfɾẽtʃi]', sl: 'ilmaus' },
    'direto': { fi: 'suoraan; suora', aa: 'di-RE-tu', ipa: '[dʒiˈɾɛtu]', sl: 'adverbi, adjektiivi', huom: '”siga direto” = jatka suoraan. Ei sama kuin {direita} (oikea)' },
    'perto de': { fi: 'lähellä (jotakin)', aa: 'PEH-tu di', ipa: '[ˈpɛhtu dʒi]', sl: 'ilmaus', huom: '{perto} + {de}' },
    'longe de': { fi: 'kaukana (jostakin)', aa: 'LÕ-zhi di', ipa: '[ˈlõʒi dʒi]', sl: 'ilmaus' },
    'ao lado de': { fi: 'jonkin vieressä', aa: 'au LA-du di', ipa: '[aw ˈladu dʒi]', sl: 'ilmaus', huom: 'kirjaimellisesti ”kyljessä”' },
    'calçada': { fi: 'jalkakäytävä', aa: 'kau-SA-da', ipa: '[kawˈsadɐ]', sl: 'substantiivi, feminiini' },
    'ponto de ônibus': { fi: 'bussipysäkki', aa: 'PÕ-tu di Õ-ni-bus', ipa: '[ˈpõtu dʒi ˈõnibus]', sl: 'ilmaus' },
    'onde fica': { fi: 'missä on, missä sijaitsee', aa: 'Õ-di FI-ka', ipa: '[ˈõdʒi ˈfikɐ]', sl: 'ilmaus', huom: 'Espanjassa ”dónde queda”; portugaliksi aina {ficar}' },
    'como chego': { fi: 'miten pääsen (perille)', aa: 'KO-mu SHE-gu', ipa: '[ˈkomu ˈʃeɡu]', sl: 'ilmaus' },
    'está longe': { fi: 'on kaukana', aa: 'es-TA LÕ-zhi', ipa: '[esˈta ˈlõʒi]', sl: 'ilmaus' },
    'fica perto': { fi: 'on lähellä', aa: 'FI-ka PEH-tu', ipa: '[ˈfikɐ ˈpɛhtu]', sl: 'ilmaus' },
    'pode me ajudar': { fi: 'voitko auttaa minua', aa: 'PO-di mi a-zhu-DAH', ipa: '[ˈpɔdʒi mi aʒuˈdah]', sl: 'ilmaus', huom: 'kohtelias tapa pyytää apua' },
    'estou perdido': { fi: 'olen eksyksissä', aa: 'es-TOU peh-DI-du', ipa: '[esˈtow pehˈdʒidu]', sl: 'ilmaus', huom: 'nainen sanoo ”estou perdida”' },
    'é logo ali': { fi: 'se on aivan tuossa', aa: 'E LO-gu a-LI', ipa: '[ɛ ˈlɔɡu aˈli]', sl: 'ilmaus', huom: '{logo} tarkoittaa tässä ”heti”' },
    'ali': { fi: 'tuolla, tuossa', aa: 'a-LI', ipa: '[aˈli]', sl: 'adverbi' },
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kysyä tietä: missä jokin on ja miten sinne pääsee.</li>
  <li>Osaat neuvoa suuntia: käänny, jatka, ylitä, pysähdy.</li>
  <li>Osaat muodostaa säännölliset käskymuodot sanalle <span class="pt">você</span>.</li>
  <li>Ymmärrät lyhentyneen puhekielen: <span class="pt">tá, tô, cê, pra, né, bora</span>.</li>
</ul>
<p data-paikka="belo-horizonte-panoraama">Belo Horizonte, keskusta. Jay lähtee yksin kävelylle, eksyy ja puhelimen akku on melkein tyhjä. Onneksi Maia on Mateuksen kanssa, ja Mateus tuntee jokaisen kadun.</p>

<section class="osio">
  <h2>Dialogi: Estou perdido!</h2>
  <p class="ohje">Kuuntele ensin koko dialogi. Huomaa Jayn kaksi espanjan vaikutuksesta syntynyttä virhettä: <span class="pt">queda</span> ja <span class="pt">derecho</span>. Paina sitten roolileikkiä ja puhu Jayn repliikit.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Belo Horizonte, keskusta. Jay on yksin kadulla ja eksyksissä.">Belo Horizonte, centro. O Jay está sozinho na rua e está perdido.</p>
    <p class="s" data-h="jay" data-fi="Maia? Olen eksyksissä! Missä Praça da Liberdade on? (virhe: espanjan ”queda”)">Maia? Estou perdido! Onde queda a Praça da Liberdade?</p>
    <p class="s" data-h="maia" data-fi="Rauhoitu, Jay. Olen Mateuksen kanssa. Hän tuntee kaikki kadut.">Calma, Jay. Eu estou com o Mateus. Ele conhece todas as ruas.</p>
    <p class="s" data-h="mateus" data-fi="Hei, Jay! Täällä sanotaan ”onde fica”, ei ”onde queda”.">Oi, Jay! Aqui a gente diz “onde fica”, não “onde queda”.</p>
    <p class="s" data-h="jay" data-fi="Anteeksi! Missä aukio on?">Desculpa! Onde fica a praça?</p>
    <p class="s" data-h="mateus" data-fi="Kerro ensin, mitä näet.">Primeiro, fale o que você vê.</p>
    <p class="s" data-h="jay" data-fi="Näen punaisen liikennevalon ja apteekin.">Vejo um sinal vermelho e uma farmácia.</p>
    <p class="s" data-h="mateus" data-fi="Hienoa! Jatka suoraan kadunkulmaan. Käänny sitten oikealle.">Ótimo! Siga direto até a esquina. Depois vire à direita.</p>
    <p class="s" data-h="jay" data-fi="Direto? Direita? Espanjassa ”derecho” on suoraan! (virhe)">Direto? Direita? Em espanhol “derecho” é reto!</p>
    <p class="s" data-h="mateus" data-fi="Direto on suoraan eteenpäin. Direita on oikean käden puoli, selvä?">Direto é em frente. Direita é o lado da mão direita, tá?</p>
    <p class="s" data-h="jay" data-fi="Ymmärsin. Entä sitten?">Entendi. E depois?</p>
    <p class="s" data-h="mateus" data-fi="Jatka kaksi korttelia. Ylitä iso katu ja kävele ylämäkeen.">Continue por dois quarteirões. Atravesse a avenida e suba a rua.</p>
    <p class="s" data-h="jay" data-fi="Ylöspäinkö? Voi, kun on laiskottaa!">Subir? Ai, que preguiça!</p>
    <p class="s" data-h="mateus" data-fi="Älä valita, Jay! Se on vain pieni ylämäki.">Não reclame, Jay! É só uma subida pequena.</p>
    <p class="s" data-paikka="praca-da-liberdade" data-h="jay" data-fi="Näen palmuja! Ja suihkulähteen!">Estou vendo palmeiras! E uma fonte!</p>
    <p class="s" data-h="mateus" data-fi="Se on tuossa! Pysähdy sisäänkäynnille ja odota. Tulen viidessä minuutissa.">É ali! Pare na entrada e espere. Eu chego em cinco minutos.</p>
    <p class="s" data-h="maia" data-fi="Pysy siinä, Jay! Äläkä kävele enää yksin!">Fique aí, Jay! E não ande mais sozinho!</p>
    <p class="s" data-h="kertoja" data-fi="Kymmenen minuuttia myöhemmin Mateus tulee autolla.">Dez minutos depois, o Mateus chega de carro.</p>
    <p class="s" data-h="mateus" data-fi="Nouse sisään, Jay! Minä ajan hitaasti.">Entre, Jay! Eu dirijo devagar.</p>
    <p class="s" data-h="jay" data-fi="Kiitos, Mateus! Sinä tunnet kaikki kadut!">Obrigado, Mateus! Você conhece todas as ruas!</p>
    <p class="s" data-h="mateus" data-fi="Tunnen kyllä. Se on työtäni!">Conheço, sim. É o meu trabalho!</p>
    <p class="s" data-h="maia" data-fi="Ensi kerralla soita minulle ensin!">Da próxima vez, me ligue antes!</p>
  </div>
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Kartta: ohjaa Jay aukiolle</h2>
  <p class="ohje">Nyt sinä olet Mateus. Kuuntele ensin Mateuksen reittiohje (▶). Ohjaa sitten Jay käskyillä Praça da Liberdadelle: <span class="pt">Siga reto!</span> vie yhden korttelin eteenpäin, <span class="pt">Vire à direita!</span> ja <span class="pt">Vire à esquerda!</span> kääntävät Jayta. Nuoli näyttää, mihin suuntaan Jay katsoo. Jos Jay kävelee taloa päin, aloita alusta tai käänny.</p>
  <div class="kartta" data-h="mateus" data-kartta="###..G|###.##|....##|.#####|J#####"
       data-nimet="0,0:Igreja;1,1:Banco;4,1:Palácio;1,3:Farmácia" data-maali="Praça da Liberdade"
       data-ohjeet="Siga reto até a esquina. Vire à direita e siga reto até o fim da rua. Depois vire à esquerda e suba a rua. No palácio, vire à direita: a praça fica ali!"></div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Suunnat" data-sanat="direita,esquerda,em frente,direto,reto,atrás,ao lado de,perto de,longe de,entre"></div>
  <div class="teema" data-otsikko="Kaupunki" data-sanat="rua,avenida,praça,esquina,quarteirão,sinal,farmácia,palácio,fonte,palmeira,calçada,ponto de ônibus"></div>
  <div class="teema" data-otsikko="Käskyverbit" data-sanat="virar,seguir,continuar,atravessar,subir,descer,parar,esperar,entrar,perguntar"></div>
  <div class="teema" data-otsikko="Tien kysyminen" data-sanat="onde fica,como chego,está longe,fica perto,pode me ajudar,estou perdido,é logo ali"></div>
</section>

<section class="osio">
  <h2>Kielioppi</h2>

  <h3>1. Käskymuoto: vire, siga, pare</h3>
  <p><b>Käskymuoto</b> (<span class="pt">imperativo</span>) on verbin muoto, jolla pyydetään, neuvotaan tai käsketään: ”Käänny!”, ”Odota!”. Tässä oppitunnissa opit sanan <span class="pt">você</span> käskymuodon, joka on kohtelias ja toimii kaikissa tilanteissa. Se muodostetaan yksinkertaisella säännöllä:</p>
  <div class="saanto">
    <h3>Sääntö</h3>
    <p>1. Ota verbin <b>eu-muoto</b> (esimerkiksi <span class="pt">eu falo</span>). 2. Poista loppu-<b>o</b>. 3. Lisää <b>-ar-verbeille -e</b>, <b>-er- ja -ir-verbeille -a</b>.</p>
  </div>
  <table class="taivutus">
    <tr><td><span class="pt">virar</span> (käännä)</td><td><span class="pt">eu viro</span> → <span class="pt">vire</span></td></tr>
    <tr><td><span class="pt">falar</span> (puhu)</td><td><span class="pt">eu falo</span> → <span class="pt">fale</span></td></tr>
    <tr><td><span class="pt">esperar</span> (odota)</td><td><span class="pt">eu espero</span> → <span class="pt">espere</span></td></tr>
    <tr><td><span class="pt">atravessar</span> (ylitä)</td><td><span class="pt">eu atravesso</span> → <span class="pt">atravesse</span></td></tr>
    <tr><td><span class="pt">comer</span> (syö)</td><td><span class="pt">eu como</span> → <span class="pt">coma</span></td></tr>
    <tr><td><span class="pt">abrir</span> (avaa)</td><td><span class="pt">eu abro</span> → <span class="pt">abra</span></td></tr>
    <tr><td><span class="pt">subir</span> (nouse)</td><td><span class="pt">eu subo</span> → <span class="pt">suba</span></td></tr>
    <tr><td><span class="pt">seguir</span> (seuraa, jatka)</td><td><span class="pt">eu sigo</span> → <span class="pt">siga</span></td></tr>
  </table>
  <p>Huomaa, että vokaali kääntyy vastakkaiseksi: <b>a → e</b> ja <b>e/i → a</b>. Monikko (<span class="pt">vocês</span>) saadaan lisäämällä <b>-m</b>: <span class="pt">falem, comam, abram</span>. Kielteinen käsky saa eteensä sanan <span class="pt">não</span>: <span class="pt">não vire</span>, <span class="pt">não fale</span>.</p>
  <ul class="esim">
    <li class="s" data-fi="Käänny oikealle.">Vire à direita.</li>
    <li class="s" data-fi="Jatka suoraan eteenpäin.">Siga em frente.</li>
    <li class="s" data-fi="Jatka kaksi korttelia.">Continue por dois quarteirões.</li>
    <li class="s" data-fi="Ylitä katu.">Atravesse a rua.</li>
    <li class="s" data-fi="Älä käänny vasemmalle.">Não vire à esquerda.</li>
    <li class="s" data-fi="Odottakaa tässä.">Esperem aqui.</li>
  </ul>

  <h3>Oikeinkirjoituksen muutokset</h3>
  <p>Kun -e lisätään verbeihin, joiden viimeinen kirjain on c, g tai ç, äänne muuttuisi, ellei kirjoitusta muuteta. Portugalissa c ja g ennen e:tä äännetään eri tavalla (<b>ce</b> = se, <b>ge</b> = zhe). Siksi:</p>
  <table class="taivutus">
    <tr><td><b>-car → -que</b></td><td><span class="pt">ficar</span> → <span class="pt">fique</span> · <span class="pt">buscar</span> → <span class="pt">busque</span></td></tr>
    <tr><td><b>-gar → -gue</b></td><td><span class="pt">chegar</span> → <span class="pt">chegue</span> · <span class="pt">pegar</span> → <span class="pt">pegue</span> · <span class="pt">ligar</span> → <span class="pt">ligue</span></td></tr>
    <tr><td><b>-çar → -ce</b></td><td><span class="pt">começar</span> → <span class="pt">comece</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Pysy tässä.">Fique aqui.</li>
    <li class="s" data-fi="Ota ensimmäinen katu.">Pegue a primeira rua.</li>
    <li class="s" data-fi="Soita minulle.">Me ligue.</li>
    <li class="s" data-fi="Tule ajoissa.">Chegue cedo.</li>
  </ul>

  <h3>Pikkusanat käskymuodossa</h3>
  <p>Objektipronomini (<span class="pt">me, te, nos</span>) tulee Brasiliassa käskymuodon <b>eteen</b>: <span class="pt">Me ajude!</span> (Auta minua!), <span class="pt">Me ligue!</span> (Soita minulle!). Kirjakielessä se voi olla verbin perässä viivalla (<span class="pt">ajude-me</span>), mutta puheessa niin ei sanota.</p>

  <div class="huomio">
    <p><b>Brasilian puhekieli.</b> Arjessa kuulet usein käskyn, joka näyttää samalta kuin hän-muoto: <span class="pt">Vira à direita. Segue em frente. Para aqui. Pega a primeira rua.</span> Se on tuttavallisempi ja hyvin yleinen myös Belo Horizontessa. Muoto <span class="pt">vire</span> kuuluu kirjoitettuihin ohjeisiin, kylteihin ja kohteliaaseen puheeseen. Opettele ensin <span class="pt">vire</span>-muoto. Kielteisessä käskyssä pysy muodossa <span class="pt">não vire</span>.</p>
    <p>Tien kysymiseen kannattaa käyttää kysymystä, ei käskyä: <span class="pt">Pode me ajudar?</span> on kohteliaampi kuin <span class="pt">Me ajude!</span> Lisää tarvittaessa <span class="pt">por favor</span>.</p>
  </div>

  <h3>Suomeen ja espanjaan verrattuna</h3>
  <p><b>Suomi:</b> käsky on lyhyt verbimuoto: ”käänny”, ”jatka”, ”odota”. Portugalissa se lasketaan eu-muodosta. <b>Espanja:</b> sinulle tuttu <i>usted</i>-käsky <i>gire, siga, coma</i> tehdään samalla säännöllä, joten <span class="pt">vire, siga, coma</span> ovat helppoja. Ansoja: espanjan <i>doblar</i> (kääntyä) on portugaliksi <span class="pt">virar</span>; espanjan <i>¿dónde queda?</i> on portugaliksi <span class="pt">onde fica?</span>; ja espanjan <i>derecho</i> (suoraan) ei ole portugalin <span class="pt">direita</span> (oikea) vaan <span class="pt">direto</span> tai <span class="pt">reto</span>.</p>

  <h3>2. Tien kysyminen ja neuvominen</h3>
  <p>Paikkaa kysytään sanoilla <span class="pt">Onde fica…?</span> ja tietä sanoilla <span class="pt">Como eu chego…?</span> Verbi <span class="pt">ficar</span> tarkoittaa tässä ”sijaita”.</p>
  <ul class="esim">
    <li class="s" data-fi="Missä apteekki on?">Onde fica a farmácia?</li>
    <li class="s" data-fi="Miten pääsen aukiolle?">Como eu chego na praça?</li>
    <li class="s" data-fi="Onko se lähellä vai kaukana?">Fica perto ou longe?</li>
    <li class="s" data-fi="Voitko auttaa minua? Olen eksyksissä.">Pode me ajudar? Estou perdido.</li>
    <li class="s" data-fi="Se on aivan tuossa.">É logo ali.</li>
  </ul>
  <p>Sijaintia kerrotaan prepositioilla. Ne yhdistyvät artikkeleihin kuten aiemmin (<span class="pt">de + a = da</span>, <span class="pt">de + o = do</span>, <span class="pt">a + o = ao</span>):</p>
  <table class="taivutus">
    <tr><td><span class="pt">perto de</span> lähellä</td><td><span class="pt">perto da praça</span></td></tr>
    <tr><td><span class="pt">longe de</span> kaukana</td><td><span class="pt">longe do centro</span></td></tr>
    <tr><td><span class="pt">ao lado de</span> vieressä</td><td><span class="pt">ao lado do banco</span></td></tr>
    <tr><td><span class="pt">em frente a</span> vastapäätä</td><td><span class="pt">em frente à farmácia</span></td></tr>
    <tr><td><span class="pt">atrás de</span> takana</td><td><span class="pt">atrás do palácio</span></td></tr>
    <tr><td><span class="pt">entre</span> välissä</td><td><span class="pt">entre a rua e a praça</span></td></tr>
  </table>
  <p>Etäisyyden voi kertoa ajalla: <span class="pt">a cinco minutos a pé</span> (viiden minuutin kävelymatkan päässä), <span class="pt">de carro</span> (autolla), <span class="pt">de ônibus</span> (bussilla). Järjestysluvut sopivat kadun valintaan: <span class="pt">a primeira rua, a segunda rua</span>.</p>

  <div class="muista">
    <p><b>Muista:</b> (1) käsky: eu-muoto, poista -o, lisää -e (-ar) tai -a (-er, -ir). (2) c, g, ç säilyttävät äänteensä: <span class="pt">fique, pegue, comece</span>. (3) <span class="pt">direita</span> = oikea, <span class="pt">direto</span> = suoraan. (4) <span class="pt">à direita</span> ja <span class="pt">à esquerda</span> kirjoitetaan gravismerkillä (<span class="pt">a + a</span>).</p>
  </div>
</section>

<section class="osio">
  <h2>Ääntäminen: puhekielen lyhenteet</h2>
  <p>Brasilialaiset puhuvat nopeasti, ja moni tuttu sana lyhenee. Oppitunnilla 0–10 olet jo kuullut joitakin. Nämä kannattaa tunnistaa korvalla, vaikka kirjoitat ja puhut ensin täysillä muodoilla.</p>
  <table class="taivutus">
    <tr><td><span class="pt">você está</span></td><td><span class="pt">cê tá</span></td></tr>
    <tr><td><span class="pt">eu estou</span></td><td><span class="pt">eu tô</span></td></tr>
    <tr><td><span class="pt">para a</span> (prepositio + artikkeli)</td><td><span class="pt">pra</span></td></tr>
    <tr><td><span class="pt">para o</span></td><td><span class="pt">pro</span></td></tr>
    <tr><td><span class="pt">não é</span></td><td><span class="pt">né</span></td></tr>
    <tr><td><span class="pt">vamos embora</span></td><td><span class="pt">bora</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Missä sinä olet?">Cê tá onde?</li>
    <li class="s" data-fi="Minä olen matkalla kotiin.">Eu tô indo pra casa.</li>
    <li class="s" data-fi="Mennään!">Bora!</li>
    <li class="s" data-fi="Se on lähellä, eikö?">É perto, né?</li>
  </ul>
  <div class="saanto">
    <h3>Sanojen yhteenliittyminen</h3>
    <p>Kun sana loppuu s-kirjaimeen ja seuraava sana alkaa vokaalilla, s kuuluu z-äänteenä ja liittyy seuraavaan sanaan, kuin ne olisivat yksi sana. Kaksi samaa vokaalia peräkkäin sulautuu yhdeksi.</p>
    <ul class="esim">
      <li class="s">os amigos</li>
      <li class="s">as avenidas</li>
      <li class="s">uma amiga</li>
      <li class="s">a avenida</li>
    </ul>
  </div>
</section>

<aside class="kulttuuri" data-paikka="praca-da-liberdade">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Praça da Liberdade</h3>
  <figure class="kuva" data-kuva="praca-da-liberdade"></figure>
  <p>Praça da Liberdade (”Vapauden aukio”) on yksi Belo Horizonten tunnetuimmista aukioista. Se kuului jo kaupungin alkuperäiseen suunnitelmaan 1890-luvulla, ja se sijaitsee Funcionários-kaupunginosassa lähellä Savassia. Aukio on puistomainen: siinä on korkeita palmuja, suihkulähteitä, kukkapenkkejä ja kävelyteitä, ja ihmiset tulevat sinne kävelemään ja istumaan.</p>
  <p>Aukion laidalla on <span class="pt">Palácio da Liberdade</span>, jossa osavaltion hallitus toimi pitkään. Hallinto muutti uuteen hallintokeskukseen vuonna 2010, ja aukion ympärille on sen jälkeen kehitetty kulttuurialue, <span class="pt">Circuito Cultural Praça da Liberdade</span>, jossa on useita museoita ja kulttuurikeskuksia.</p>
  <p>Tarinassa aukio on Jayn tavoite, kun hän eksyy keskustassa. Belo Horizonte on mäkinen kaupunki, joten ylämäet kuuluvat asiaan, kun kävelee kadulta toiselle.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: kartta</h3>
    <p class="ohje">Katso karttaa ja Mateuksen reittiohjetta yllä. Valitse oikea vaihtoehto.</p>
    <div class="valinta" data-oikea="à direita">
      <p class="kysymys">Na primeira esquina, o Jay vira…</p>
      <div class="vaihtoehdot"><button type="button">à direita</button><button type="button">à esquerda</button><button type="button">direto</button></div>
    </div>
    <div class="valinta" data-oikea="à esquerda">
      <p class="kysymys">No fim da rua, o Jay vira…</p>
      <div class="vaihtoehdot"><button type="button">à direita</button><button type="button">à esquerda</button></div>
    </div>
    <div class="valinta" data-oikea="o palácio">
      <p class="kysymys">O que fica perto da praça?</p>
      <div class="vaihtoehdot"><button type="button">a farmácia</button><button type="button">a igreja</button><button type="button">o palácio</button></div>
    </div>
    <div class="valinta" data-oikea="Siga reto!">
      <p class="kysymys">Mitä sanot, kun Jayn pitää jatkaa suoraan?</p>
      <div class="vaihtoehdot"><button type="button">Vire à direita!</button><button type="button">Siga reto!</button><button type="button">Pare aqui!</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Muodosta käskymuoto</h3>
    <p class="ohje">Kirjoita verbin käskymuoto sanalle <span class="pt">você</span>.</p>
    <div class="aukot">
      <p><span class="aukko" data-oikea="vire"></span> à direita. (virar)</p>
      <p><span class="aukko" data-oikea="siga"></span> em frente. (seguir)</p>
      <p><span class="aukko" data-oikea="continue"></span> por dois quarteirões. (continuar)</p>
      <p><span class="aukko" data-oikea="pegue"></span> a segunda rua. (pegar)</p>
      <p><span class="aukko" data-oikea="pare"></span> aqui. (parar)</p>
      <p><span class="aukko" data-oikea="espere"></span> um minuto. (esperar)</p>
      <p><span class="aukko" data-oikea="atravesse"></span> a avenida. (atravessar)</p>
      <p>Não <span class="aukko" data-oikea="vire"></span> à esquerda. (virar)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Yhdistä sanat</h3>
    <ul class="yhdista">
      <li data-pari="oikea">direita</li>
      <li data-pari="vasen">esquerda</li>
      <li data-pari="suoraan eteenpäin">em frente</li>
      <li data-pari="kadunkulma">a esquina</li>
      <li data-pari="kortteli">o quarteirão</li>
      <li data-pari="liikennevalo">o sinal</li>
      <li data-pari="lähellä">perto</li>
      <li data-pari="kaukana">longe</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Mihin Mateus neuvoo?</h3>
    <p class="ohje">Paina ▶ ja valitse, mitä kuulit.</p>
    <div class="valinta" data-kuuntele="Vire à esquerda na esquina." data-oikea="Käänny vasemmalle kadunkulmassa.">
      <p class="kysymys">Mitä Mateus sanoo?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">Käänny oikealle kadunkulmassa.</button><button type="button">Käänny vasemmalle kadunkulmassa.</button><button type="button">Pysähdy kadunkulmassa.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Siga direto por três quarteirões." data-oikea="Jatka suoraan kolme korttelia.">
      <p class="kysymys">Mitä Mateus sanoo?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">Jatka suoraan kolme korttelia.</button><button type="button">Käänny kolmannella kadulla.</button><button type="button">Odota kolme minuuttia.</button></div>
    </div>
    <div class="valinta" data-kuuntele="A farmácia fica ao lado do banco." data-oikea="Apteekki on pankin vieressä.">
      <p class="kysymys">Mitä Mateus sanoo?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">Apteekki on pankin takana.</button><button type="button">Apteekki on pankin vieressä.</button><button type="button">Apteekki on pankin edessä.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Direita vai direto?</h3>
    <div class="valinta" data-oikea="direto">
      <p class="kysymys">Jatka suoraan: siga ___ até a esquina.</p>
      <div class="vaihtoehdot"><button type="button">direita</button><button type="button">direto</button></div>
    </div>
    <div class="valinta" data-oikea="à direita">
      <p class="kysymys">Käänny oikealle: vire ___.</p>
      <div class="vaihtoehdot"><button type="button">à direita</button><button type="button">direto</button><button type="button">à esquerda</button></div>
    </div>
    <div class="valinta" data-oikea="fica">
      <p class="kysymys">Missä apteekki on? Onde ___ a farmácia?</p>
      <div class="vaihtoehdot"><button type="button">queda</button><button type="button">fica</button><button type="button">sou</button></div>
    </div>
    <div class="valinta" data-oikea="Pode me ajudar?">
      <p class="kysymys">Kumpi on kohteliaampi pyyntö?</p>
      <div class="vaihtoehdot"><button type="button">Pode me ajudar?</button><button type="button">Me ajude!</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause. Muista gravismerkki.</p>
    <div class="sanelu" data-puhu="Vire à direita na esquina."></div>
    <div class="sanelu" data-puhu="Onde fica a praça?"></div>
    <div class="sanelu" data-puhu="Atravesse a avenida e suba a rua."></div>
    <div class="sanelu" data-puhu="Não ande sozinho."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Käänny oikealle.</p><p class="s" data-fi="Käänny oikealle.">Vire à direita.</p></div>
    <div class="kaanna"><p class="fi">Jatka suoraan kaksi korttelia.</p><p class="s" data-fi="Jatka suoraan kaksi korttelia.">Siga em frente por dois quarteirões.</p></div>
    <div class="kaanna"><p class="fi">Missä apteekki on?</p><p class="s" data-fi="Missä apteekki on?">Onde fica a farmácia?</p></div>
    <div class="kaanna"><p class="fi">Älä kävele yksin.</p><p class="s" data-fi="Älä kävele yksin.">Não ande sozinho.</p></div>
    <div class="kaanna"><p class="fi">Voitko auttaa minua? Olen eksyksissä.</p><p class="s" data-fi="Voitko auttaa minua? Olen eksyksissä.">Pode me ajudar? Estou perdido.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Mikä tavu on painollinen?</h3>
    <p class="ohje">Napauta painollista tavua.</p>
    <p><span class="paino" data-tavut="a|ve|ni|da" data-oikea="3"></span> <span class="paino" data-tavut="es|qui|na" data-oikea="2"></span> <span class="paino" data-tavut="quar|tei|rão" data-oikea="3"></span> <span class="paino" data-tavut="far|má|cia" data-oikea="2"></span></p>
    <p><span class="paino" data-tavut="pa|lá|cio" data-oikea="2"></span> <span class="paino" data-tavut="di|rei|ta" data-oikea="2"></span> <span class="paino" data-tavut="es|quer|da" data-oikea="2"></span> <span class="paino" data-tavut="pal|mei|ra" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Neuvo turistille tie</h3>
    <p class="ohje">Turisti kysyy, missä apteekki on. Apteekki on ensimmäisellä kadulla oikealla, pankin vieressä. Sano neuvo ääneen ennen kuin avaat mallin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Com licença, onde fica a farmácia?</summary>
      <p class="s" data-fi="Käänny ensimmäiselle kadulle oikealle. Apteekki on pankin vieressä.">Vire na primeira rua à direita. A farmácia fica ao lado do banco.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Fica longe daqui?</summary>
      <p class="s" data-fi="Ei, se on aivan tuossa. Viiden minuutin kävelymatka.">Não, é logo ali. Fica a cinco minutos a pé.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Muito obrigado!</summary>
      <p class="s" data-fi="Ei kestä!">De nada!</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l14">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l14-reitti" lang="pt-BR">
      <div class="kal-yla"><b>Como eu chego?</b><small>neuvo tie kotoasi lähimpään kauppaan</small></div>
      <div class="kal-rivit">
        <label>Destino <input name="kohde" placeholder="o supermercado"></label>
        <label>Primeiro <input name="eka" placeholder="Saia de casa e vire à esquerda."></label>
        <label>Depois <input name="toka" placeholder="Siga reto por dois quarteirões."></label>
        <label>No fim <input name="loppu" placeholder="Atravesse a rua. O supermercado fica ali."></label>
        <label>Está longe? <input name="matka" placeholder="Não, fica perto: cinco minutos."></label>
      </div>
    </div>
    <p>Kirjoita 5–6 lauseen ohje: miten kodistasi pääsee lähimpään kauppaan tai pysäkille? Käytä vähintään neljää käskymuotoa ja kahta paikkaprepositiota (<span class="pt">perto de, ao lado de</span>). Lue ohje lopuksi ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Käänny vasemmalle talon edestä.">Vire à esquerda na frente do prédio.</p>
      <p class="s" data-fi="Jatka suoraan kaksi korttelia.">Siga em frente por dois quarteirões.</p>
      <p class="s" data-fi="Ylitä katu liikennevaloissa.">Atravesse a rua no sinal.</p>
      <p class="s" data-fi="Käänny sitten oikealle.">Depois vire à direita.</p>
      <p class="s" data-fi="Kauppa on pankin vieressä.">O mercado fica ao lado do banco.</p>
      <p class="s" data-fi="Se on lähellä, viiden minuutin kävelymatkan päässä.">É perto, a cinco minutos a pé.</p>
    </details>
  </div>
</section>
`
});
