/* Jakso 5: Jay esittelee perheensä. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l05',
  lyhyt: '5',
  jakso: 'Jakso 5',
  otsikko: 'Perhe ja omistaminen: ter ja omistussanat',
  lahde: 'Aihe: perhe ja suku · Kielioppi: ter, omistussanat, este / esse · Ääntäminen: kysymyksen intonaatio',
  aiheet: ['ihmiset', 'tunteet', 'numerot', 'ominaisuus'],
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, esittelee perheensä' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi, Jayn tyttöystävä' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 1, kuvaus: 'Maian äiti, eläkkeellä oleva sosiaalityöntekijä' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 1, kuvaus: 'Maian isä, eläkkeellä oleva professori' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 2, kuvaus: 'Maian veli' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'Jayn äiti, ei osaa portugalia, mutta on opetellut muutaman sanan' },
    kouvonen: { nimi: 'Kouvonen', tyyppi: 'mies', vaihto: 6, kuvaus: 'Jayn veli, ajaa autoa, ei osaa portugalia' }
  },

  sanasto: [
    'ter', 'tenho', 'têm', 'quantos anos', 'pais', 'irmão', 'irmã', 'irmãos',
    'filho', 'filha', 'avô', 'avó', 'tio', 'tia', 'primo', 'prima',
    'marido', 'esposa', 'namorado', 'namorada', 'sobrinho', 'meu', 'minha', 'dele',
    'dela', 'nosso', 'esta', 'esse', 'sinto muito', 'simpático'
  ],

  sanat: {
    // dialogi
    'videochamada': { fi: 'videopuhelu', aa: 'vi-di-o-sha-MA-da', ipa: '[vidʒioʃaˈmadɐ]', sl: 'substantiivi, feminiini' },
    'videochamada de natal': { fi: 'joulun videopuhelu', aa: 'vi-di-o-sha-MA-da di na-TAU', ipa: '[vidʒioʃaˈmadɐ dʒi naˈtaw]', sl: 'ilmaus' },
    'mostra': { fi: 'näyttää, esittelee', aa: 'MOS-tra', ipa: '[ˈmɔstɾɐ]', sl: 'verbi', huom: 'perusmuoto {mostrar}' },
    'mostrar': { fi: 'näyttää', aa: 'mos-TRAH', ipa: '[mosˈtɾah]', sl: 'verbi, perusmuoto' },
    'dele': { fi: 'hänen (miehen); hänen (esineen)', aa: 'DE-li', ipa: '[ˈdeli]', sl: 'omistuspronomini', huom: '{de} + {ele}; naisen {dela}' },
    'dela': { fi: 'hänen (naisen)', aa: 'DE-la', ipa: '[ˈdɛlɐ]', sl: 'omistuspronomini', huom: '{de} + {ela}; miehen {dele}' },
    'deles': { fi: 'heidän (miesten tai sekaryhmän)', aa: 'DE-lis', ipa: '[ˈdelis]', sl: 'omistuspronomini', huom: '{de} + {eles}' },
    'delas': { fi: 'heidän (naisten)', aa: 'DE-las', ipa: '[ˈdɛlɐs]', sl: 'omistuspronomini', huom: '{de} + {elas}' },
    'a família dele': { fi: 'hänen perheensä', aa: 'a fa-MI-lja DE-li', ipa: '[a faˈmiʎɐ ˈdeli]', sl: 'ilmaus' },
    'esta': { fi: 'tämä (feminiini)', aa: 'ES-ta', ipa: '[ˈɛstɐ]', sl: 'osoittava pronomini', huom: 'maskuliini {este}; avoin e' },
    'estes': { fi: 'nämä (maskuliini)', aa: 'ES-tsis', ipa: '[ˈestʃis]', sl: 'osoittava pronomini', huom: 'yksikkö {este}' },
    'estas': { fi: 'nämä (feminiini)', aa: 'ES-tas', ipa: '[ˈɛstɐs]', sl: 'osoittava pronomini', huom: 'yksikkö {esta}' },
    'essa': { fi: 'tuo (feminiini)', aa: 'E-sa', ipa: '[ˈɛsɐ]', sl: 'osoittava pronomini', huom: 'maskuliini {esse}' },
    'esses': { fi: 'nuo (maskuliini)', aa: 'E-sis', ipa: '[ˈesis]', sl: 'osoittava pronomini', huom: 'yksikkö {esse}' },
    'essas': { fi: 'nuo (feminiini)', aa: 'E-sas', ipa: '[ˈɛsɐs]', sl: 'osoittava pronomini', huom: 'yksikkö {essa}' },
    'isto': { fi: 'tämä (neutri, asia)', aa: 'IS-tu', ipa: '[ˈistu]', sl: 'osoittava pronomini', huom: 'ei sukua; vrt. {isso}' },
    'esta é meu mãe': { fi: '(väärin) tämä on minun äitini', aa: 'ES-ta E MEU MÃI', ipa: '[ˈɛstɐ ɛ ˈmew mɐ̃j]', sl: 'virhe', huom: 'oikein: esta é a minha mãe' },
    'esta é': { fi: 'tämä (nainen) on', aa: 'ES-ta E', ipa: '[ˈɛstɐ ɛ]', sl: 'ilmaus' },
    'este é': { fi: 'tämä (mies) on', aa: 'ES-tsi E', ipa: '[ˈestʃi ɛ]', sl: 'ilmaus' },
    'meu mãe': { fi: '(väärin) minun äitini', aa: 'MEU MÃI', ipa: '[ˈmew mɐ̃j]', sl: 'virhe', huom: 'mãe on feminiini, joten oikein {minha} mãe. Espanjan mi madre on sukuneutraali' },
    'minha mãe': { fi: 'äitini', aa: 'MĨ-nja MÃI', ipa: '[ˈmĩɲɐ mɐ̃j]', sl: 'ilmaus' },
    'o meu irmão': { fi: 'veljeni', aa: 'u MEU ih-MÃU', ipa: '[u ˈmew ihˈmɐ̃w]', sl: 'ilmaus' },
    'feminino': { fi: 'feminiini, naisellinen', aa: 'fe-mi-NI-nu', ipa: '[femiˈninu]', sl: 'adjektiivi', huom: 'maskuliini = masculino' },
    'masculino': { fi: 'maskuliini, miehinen', aa: 'mas-ku-LI-nu', ipa: '[maskuˈlinu]', sl: 'adjektiivi', huom: 'feminiini = {feminino}' },
    'mãe é feminino': { fi: 'mãe on feminiini', aa: 'MÃI E fe-mi-NI-nu', ipa: '[mɐ̃j ɛ femiˈninu]', sl: 'ilmaus' },
    'celular': { fi: 'matkapuhelin', aa: 'se-lu-LAH', ipa: '[seluˈlah]', sl: 'substantiivi, maskuliini', huom: 'Brasiliassa matkapuhelin; Portugalissa telemóvel' },
    'o celular': { fi: 'matkapuhelin', aa: 'u se-lu-LAH', ipa: '[u seluˈlah]', sl: 'ilmaus' },
    'na mão': { fi: 'kädessä', aa: 'na MÃU', ipa: '[na mɐ̃w]', sl: 'ilmaus' },
    'simpático': { fi: 'ystävällinen, mukava', aa: 'sĩ-PA-tsi-ku', ipa: '[sĩˈpatʃiku]', sl: 'adjektiivi, maskuliini', huom: 'naiselle {simpática}' },
    'simpática': { fi: 'ystävällinen, mukava (nainen)', aa: 'sĩ-PA-tsi-ka', ipa: '[sĩˈpatʃikɐ]', sl: 'adjektiivi, feminiini', huom: 'miehelle {simpático}' },
    'simpáticos': { fi: 'ystävälliset, mukavat', aa: 'sĩ-PA-tsi-kus', ipa: '[sĩˈpatʃikus]', sl: 'adjektiivi, maskuliini, monikko', huom: 'yksikkö {simpático}' },
    'que simpáticos': { fi: 'kuinka mukavia!', aa: 'KI sĩ-PA-tsi-kus', ipa: '[ki sĩˈpatʃikus]', sl: 'huudahdus' },
    'liga o rádio': { fi: 'laittaa radion päälle', aa: 'LI-ga u HA-di-u', ipa: '[ˈliɡɐ u ˈhadʒiu]', sl: 'ilmaus' },
    'liga': { fi: 'kytkee päälle; soittaa', aa: 'LI-ga', ipa: '[ˈliɡɐ]', sl: 'verbi', huom: 'perusmuoto {ligar}' },
    'rádio': { fi: 'radio', aa: 'HA-di-u', ipa: '[ˈhadʒiu]', sl: 'substantiivi, maskuliini', huom: 'aksentti: paino kolmanneksi viimeisellä tavulla' },
    'tenho': { fi: '(minä) minulla on', aa: 'TẼ-nju', ipa: '[ˈtẽɲu]', sl: 'verbi {ter}', huom: 'eu tenho; espanjan tengo' },
    'temos': { fi: '(me) meillä on', aa: 'TẼ-mus', ipa: '[ˈtẽmus]', sl: 'verbi {ter}', huom: 'nós temos' },
    'têm': { fi: '(he, te) heillä on', aa: 'TẼI', ipa: '[tẽj]', sl: 'verbi {ter}', huom: 'vocês têm, eles têm; kirjoitetaan sirkumfleksilla, ääntyy samoin kuin {tem}' },
    'ter': { fi: 'olla jollakin, omistaa', aa: 'TEH', ipa: '[teh]', sl: 'verbi, perusmuoto', huom: 'muodot: {tenho}, {tem}, {temos}, {têm}' },
    'você tem': { fi: 'sinulla on', aa: 'vo-SE TẼI', ipa: '[voˈse tẽj]', sl: 'ilmaus' },
    'você tem outros irmãos': { fi: 'onko sinulla muita sisaruksia?', aa: 'vo-SE TẼI O-trus ih-MÃUS', ipa: '[voˈse tẽj ˈotɾus ihˈmɐ̃ws]', sl: 'kysymys' },
    'eu só tenho um irmão': { fi: 'minulla on vain yksi veli', aa: 'EU SO TẼ-nju Ũ ih-MÃU', ipa: '[ew sɔ ˈtẽɲu ũ ihˈmɐ̃w]', sl: 'lause' },
    'só tenho': { fi: 'minulla on vain', aa: 'SO TẼ-nju', ipa: '[sɔ ˈtẽɲu]', sl: 'ilmaus' },
    'um irmão': { fi: 'yksi veli', aa: 'Ũ ih-MÃU', ipa: '[ũ ihˈmɐ̃w]', sl: 'ilmaus' },
    'uma irmã': { fi: 'yksi sisko', aa: 'U-ma ih-MÃ', ipa: '[ˈumɐ ihˈmɐ̃]', sl: 'ilmaus' },
    'outros': { fi: 'muut, toiset (maskuliini monikko)', aa: 'O-trus', ipa: '[ˈotɾus]', sl: 'pronomini', huom: 'yksikkö {outro}' },
    'morreu': { fi: 'kuoli', aa: 'mo-HEU', ipa: '[moˈhew]', sl: 'verbi', huom: 'perusmuoto {morrer}' },
    'morrer': { fi: 'kuolla', aa: 'mo-HEH', ipa: '[moˈheh]', sl: 'verbi, perusmuoto' },
    'sinto muito': { fi: 'otan osaa; olen pahoillani', aa: 'SĨ-tu MŨI-tu', ipa: '[ˈsĩtu ˈmũjtu]', sl: 'kohteliaisuus', huom: 'kirjaimellisesti ”tunnen paljon”; espanjaksi siento mucho' },
    'sinto': { fi: '(minä) tunnen', aa: 'SĨ-tu', ipa: '[ˈsĩtu]', sl: 'verbi', huom: 'perusmuoto {sentir}' },
    'filhos': { fi: 'lapset; pojat', aa: 'FI-ljus', ipa: '[ˈfiʎus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {filho}; tytär {filha}' },
    'quantos filhos': { fi: 'kuinka monta lasta', aa: 'KUÃ-tus FI-ljus', ipa: '[ˈkwɐ̃tus ˈfiʎus]', sl: 'ilmaus' },
    'quantos': { fi: 'kuinka monta (maskuliini)', aa: 'KUÃ-tus', ipa: '[ˈkwɐ̃tus]', sl: 'kysymyssana', huom: 'feminiini {quantas}' },
    'quantas': { fi: 'kuinka monta (feminiini)', aa: 'KUÃ-tas', ipa: '[ˈkwɐ̃tɐs]', sl: 'kysymyssana', huom: 'maskuliini {quantos}' },
    'dois filhos': { fi: 'kaksi lasta', aa: 'DOIS FI-ljus', ipa: '[dojs ˈfiʎus]', sl: 'ilmaus' },
    'a senhora tem': { fi: 'teillä on', aa: 'a se-NJO-ra TẼI', ipa: '[a seˈɲoɾɐ tẽj]', sl: 'ilmaus' },
    'o melhor irmão': { fi: 'paras veli', aa: 'u me-LJOH ih-MÃU', ipa: '[u meˈʎɔh ihˈmɐ̃w]', sl: 'ilmaus' },
    'do mundo': { fi: 'maailman', aa: 'du MŨ-du', ipa: '[du ˈmũdu]', sl: 'ilmaus' },
    'maior': { fi: 'suurempi; suurin', aa: 'ma-IOH', ipa: '[maˈjɔh]', sl: 'adjektiivi', huom: 'sama muoto miehelle ja naiselle' },
    'a nossa família': { fi: 'meidän perheemme', aa: 'a NO-sa fa-MI-lja', ipa: '[a ˈnɔsɐ faˈmiʎɐ]', sl: 'ilmaus' },
    'nossa': { fi: 'meidän (feminiinisanan edellä); myös huudahdus: vau!', aa: 'NO-sa', ipa: '[ˈnɔsɐ]', sl: 'omistuspronomini, huudahdus', huom: 'maskuliini {nosso}; huudahduksena puhekieltä' },
    'nosso': { fi: 'meidän (maskuliinisanan edellä)', aa: 'NO-su', ipa: '[ˈnɔsu]', sl: 'omistuspronomini', huom: 'feminiini {nossa}' },
    'nossos': { fi: 'meidän (maskuliini monikko)', aa: 'NO-sus', ipa: '[ˈnɔsus]', sl: 'omistuspronomini', huom: 'yksikkö {nosso}' },
    'nossas': { fi: 'meidän (feminiini monikko)', aa: 'NO-sas', ipa: '[ˈnɔsɐs]', sl: 'omistuspronomini', huom: 'yksikkö {nossa}' },
    'esse carro': { fi: 'tuo auto', aa: 'E-si KA-hu', ipa: '[ˈesi ˈkahu]', sl: 'ilmaus' },
    'esse carro é dele': { fi: 'tuo auto on hänen', aa: 'E-si KA-hu E DE-li', ipa: '[ˈesi ˈkahu ɛ ˈdeli]', sl: 'lause' },
    'é dele': { fi: 'se on hänen', aa: 'E DE-li', ipa: '[ɛ ˈdeli]', sl: 'ilmaus' },
    'ele sempre está': { fi: 'hän on aina', aa: 'E-li SẼ-pri es-TA', ipa: '[ˈeli ˈsẽpɾi esˈta]', sl: 'ilmaus' },
    'sempre': { fi: 'aina', aa: 'SẼ-pri', ipa: '[ˈsẽpɾi]', sl: 'adverbi' },
    'no carro': { fi: 'autossa', aa: 'nu KA-hu', ipa: '[nu ˈkahu]', sl: 'ilmaus' },
    'está no carro': { fi: 'on autossa', aa: 'es-TA nu KA-hu', ipa: '[esˈta nu ˈkahu]', sl: 'ilmaus' },

    // perhe
    'a família': { fi: 'perhe', aa: 'a fa-MI-lja', ipa: '[a faˈmiʎɐ]', sl: 'ilmaus' },
    'o pai': { fi: 'isä', aa: 'u PAI', ipa: '[u paj]', sl: 'ilmaus' },
    'pequena': { fi: 'pieni (feminiini)', aa: 'pe-KẼ-na', ipa: '[peˈkẽnɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini pequeno' },
    'mães': { fi: 'äidit', aa: 'MÃIS', ipa: '[mɐ̃js]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {mãe}; dia das mães = äitienpäivä' },
    'pais': { fi: 'vanhemmat; isät', aa: 'PAIS', ipa: '[pajs]', sl: 'substantiivi, maskuliini, monikko', huom: 'os pais = vanhemmat (isä ja äiti); espanjan padres' },
    'os pais': { fi: 'vanhemmat', aa: 'us PAIS', ipa: '[us pajs]', sl: 'ilmaus' },
    'irmão': { fi: 'veli', aa: 'ih-MÃU', ipa: '[ihˈmɐ̃w]', sl: 'substantiivi, maskuliini', huom: 'monikko irmãos = sisarukset tai veljekset' },
    'irmã': { fi: 'sisko', aa: 'ih-MÃ', ipa: '[ihˈmɐ̃]', sl: 'substantiivi, feminiini' },
    'irmãos': { fi: 'sisarukset; veljekset', aa: 'ih-MÃUS', ipa: '[ihˈmɐ̃ws]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {irmão}; nais- ja sekaryhmästä silti maskuliini' },
    'filha': { fi: 'tytär', aa: 'FI-lja', ipa: '[ˈfiʎɐ]', sl: 'substantiivi, feminiini', huom: 'poika {filho}' },
    'avós': { fi: 'isovanhemmat', aa: 'a-VOS', ipa: '[aˈvɔs]', sl: 'substantiivi, monikko', huom: 'yksikkö {avó} (isoäiti) ja {avô} (isoisä)' },
    'vovó': { fi: 'mummo (hellittelynimi)', aa: 'vo-VO', ipa: '[voˈvɔ]', sl: 'substantiivi, feminiini', huom: 'isoisä {vovô}' },
    'vovô': { fi: 'ukki (hellittelynimi)', aa: 'vo-VO', ipa: '[voˈvo]', sl: 'substantiivi, maskuliini', huom: 'isoäiti {vovó}' },
    'tio': { fi: 'setä, eno', aa: 'TSI-u', ipa: '[ˈtʃiu]', sl: 'substantiivi, maskuliini', huom: 'täti {tia}' },
    'primo': { fi: 'serkku (mies)', aa: 'PRI-mu', ipa: '[ˈpɾimu]', sl: 'substantiivi, maskuliini', huom: 'nainen {prima}' },
    'prima': { fi: 'serkku (nainen)', aa: 'PRI-ma', ipa: '[ˈpɾimɐ]', sl: 'substantiivi, feminiini', huom: 'mies {primo}' },
    'marido': { fi: 'aviomies', aa: 'ma-RI-du', ipa: '[maˈɾidu]', sl: 'substantiivi, maskuliini' },
    'esposa': { fi: 'aviovaimo', aa: 'es-PO-za', ipa: '[esˈpozɐ]', sl: 'substantiivi, feminiini', huom: 'myös {mulher}; espanjassa esposa' },
    'namorado': { fi: 'poikaystävä', aa: 'na-mo-RA-du', ipa: '[namoˈɾadu]', sl: 'substantiivi, maskuliini', huom: 'tyttöystävä {namorada}' },
    'namorada': { fi: 'tyttöystävä', aa: 'na-mo-RA-da', ipa: '[namoˈɾadɐ]', sl: 'substantiivi, feminiini', huom: 'poikaystävä {namorado}' },
    'sobrinho': { fi: 'veljenpoika, sisarenpoika', aa: 'so-BRĨ-nju', ipa: '[soˈbɾĩɲu]', sl: 'substantiivi, maskuliini', huom: 'tyttö {sobrinha}' },
    'sobrinha': { fi: 'veljentytär, sisarentytär', aa: 'so-BRĨ-nja', ipa: '[soˈbɾĩɲɐ]', sl: 'substantiivi, feminiini', huom: 'poika {sobrinho}' },
    'neto': { fi: 'pojanpoika, tyttärenpoika', aa: 'NE-tu', ipa: '[ˈnɛtu]', sl: 'substantiivi, maskuliini', huom: 'tyttölapsenlapsi {neta}' },
    'neta': { fi: 'pojantytär, tyttärentytär', aa: 'NE-ta', ipa: '[ˈnɛtɐ]', sl: 'substantiivi, feminiini', huom: 'poika {neto}' },
    'padre': { fi: 'pappi', aa: 'PA-dri', ipa: '[ˈpadɾi]', sl: 'substantiivi, maskuliini', huom: 'ansa: espanjan padre = isä, portugalin padre = katolinen pappi' },

    // anos
    'anos': { fi: 'vuotta', aa: 'Ã-nus', ipa: '[ˈɐ̃nus]', sl: 'substantiivi, maskuliini, monikko', huom: 'ikä sanotaan verbillä {ter}: tenho vinte anos' },
    'quantos anos': { fi: 'kuinka monta vuotta; kuinka vanha', aa: 'KUÃ-tus Ã-nus', ipa: '[ˈkwɐ̃tus ˈɐ̃nus]', sl: 'kysymys' },
    'quantos anos você tem': { fi: 'kuinka vanha sinä olet?', aa: 'KUÃ-tus Ã-nus vo-SE TẼI', ipa: '[ˈkwɐ̃tus ˈɐ̃nus voˈse tẽj]', sl: 'kysymys' },
    'o anderson tem': { fi: 'Andersonilla on', aa: 'u ã-DRE TẼI', ipa: '[u ɐ̃ˈdɾɛ tẽj]', sl: 'ilmaus' },
    'quarenta e cinco anos': { fi: 'neljäkymmentäviisi vuotta', aa: 'kua-RẼ-ta i SĨ-ku Ã-nus', ipa: '[kwaˈɾẽtɐ i ˈsĩku ˈɐ̃nus]', sl: 'ilmaus' },

    // omistussanat ja esimerkit
    'meus': { fi: 'minun (maskuliini monikko)', aa: 'MEUS', ipa: '[mews]', sl: 'omistuspronomini', huom: 'yksikkö {meu}' },
    'minhas': { fi: 'minun (feminiini monikko)', aa: 'MĨ-njas', ipa: '[ˈmĩɲɐs]', sl: 'omistuspronomini', huom: 'yksikkö {minha}' },
    'seus': { fi: 'sinun (maskuliini monikko)', aa: 'SEUS', ipa: '[sews]', sl: 'omistuspronomini', huom: 'yksikkö {seu}' },
    'sua': { fi: 'sinun, hänen (feminiinisanan edellä)', aa: 'SU-a', ipa: '[ˈsuɐ]', sl: 'omistuspronomini', huom: 'maskuliini {seu}' },
    'suas': { fi: 'sinun, hänen (feminiini monikko)', aa: 'SU-as', ipa: '[ˈsuɐs]', sl: 'omistuspronomini', huom: 'yksikkö {sua}' },
    'a sua mãe': { fi: 'sinun äitisi', aa: 'a SU-a MÃI', ipa: '[a ˈsuɐ mɐ̃j]', sl: 'ilmaus' },
    'a mãe dele': { fi: 'hänen äitinsä', aa: 'a MÃI DE-li', ipa: '[a mɐ̃j ˈdeli]', sl: 'ilmaus' },
    'a mãe dela': { fi: 'hänen äitinsä (naisen)', aa: 'a MÃI DE-la', ipa: '[a mɐ̃j ˈdɛlɐ]', sl: 'ilmaus' },
    'o irmão dele': { fi: 'hänen veljensä', aa: 'u ih-MÃU DE-li', ipa: '[u ihˈmɐ̃w ˈdeli]', sl: 'ilmaus' },
    'a casa deles': { fi: 'heidän talonsa', aa: 'a KA-za DE-lis', ipa: '[a ˈkazɐ ˈdelis]', sl: 'ilmaus' },
    'os meus irmãos': { fi: 'sisarukseni', aa: 'us MEUS ih-MÃUS', ipa: '[us mews ihˈmɐ̃ws]', sl: 'ilmaus' },
    'as minhas irmãs': { fi: 'siskoni', aa: 'az MĨ-njas ih-MÃS', ipa: '[as ˈmĩɲɐs ihˈmɐ̃s]', sl: 'ilmaus' },
    'irmãs': { fi: 'siskot', aa: 'ih-MÃS', ipa: '[ihˈmɐ̃s]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {irmã}' },
    'o nosso carro': { fi: 'meidän automme', aa: 'u NO-su KA-hu', ipa: '[u ˈnɔsu ˈkahu]', sl: 'ilmaus' },
    'a nossa casa': { fi: 'meidän kotimme', aa: 'a NO-sa KA-za', ipa: '[a ˈnɔsɐ ˈkazɐ]', sl: 'ilmaus' },
    'minha prima': { fi: 'serkkuni', aa: 'MĨ-nja PRI-ma', ipa: '[ˈmĩɲɐ ˈpɾimɐ]', sl: 'ilmaus' },
    'meu primo': { fi: 'serkkuni (mies)', aa: 'MEU PRI-mu', ipa: '[ˈmew ˈpɾimu]', sl: 'ilmaus' },
    'esse livro': { fi: 'tuo kirja', aa: 'E-si LI-vru', ipa: '[ˈesi ˈlivɾu]', sl: 'ilmaus' },
    'essa casa': { fi: 'tuo talo', aa: 'E-sa KA-za', ipa: '[ˈɛsɐ ˈkazɐ]', sl: 'ilmaus' },
    'este livro': { fi: 'tämä kirja', aa: 'ES-tsi LI-vru', ipa: '[ˈestʃi ˈlivɾu]', sl: 'ilmaus' },
    'esta casa': { fi: 'tämä talo', aa: 'ES-ta KA-za', ipa: '[ˈɛstɐ ˈkazɐ]', sl: 'ilmaus' },
    'isso é': { fi: 'se on', aa: 'I-su E', ipa: '[ˈisu ɛ]', sl: 'ilmaus' },
    'o que é isso': { fi: 'mikä tuo on?', aa: 'u KI E I-su', ipa: '[u ki ɛ ˈisu]', sl: 'kysymys' },
    'aposentado': { fi: 'eläkkeellä oleva (mies)', aa: 'a-po-zẽ-TA-du', ipa: '[apozẽˈtadu]', sl: 'adjektiivi, maskuliini', huom: 'naiselle {aposentada}' },
    'aposentada': { fi: 'eläkkeellä oleva (nainen)', aa: 'a-po-zẽ-TA-da', ipa: '[apozẽˈtadɐ]', sl: 'adjektiivi, feminiini', huom: 'miehelle {aposentado}' },

    // intonaatio
    'você tem irmãos': { fi: 'onko sinulla sisaruksia?', aa: 'vo-SE TẼI ih-MÃUS', ipa: '[voˈse tẽj ihˈmɐ̃ws]', sl: 'kysymys' },
    'quantos irmãos você tem': { fi: 'kuinka monta sisarusta sinulla on?', aa: 'KUÃ-tus ih-MÃUS vo-SE TẼI', ipa: '[ˈkwɐ̃tus ihˈmɐ̃ws voˈse tẽj]', sl: 'kysymys' },
    'tem, sim': { fi: 'on kyllä', aa: 'TẼI SĨ', ipa: '[tẽj sĩ]', sl: 'vastaus' },

    // kulttuuri
    'dia das mães': { fi: 'äitienpäivä', aa: 'DI-a das MÃIS', ipa: '[ˈdʒiɐ das mɐ̃js]', sl: 'ilmaus', huom: 'Brasiliassa toukokuun toinen sunnuntai' },
    'dia dos pais': { fi: 'isänpäivä', aa: 'DI-a dus PAIS', ipa: '[ˈdʒiɐ dus pajs]', sl: 'ilmaus', huom: 'Brasiliassa elokuun toinen sunnuntai' },
    'padrinho': { fi: 'kummisetä', aa: 'pa-DRĨ-nju', ipa: '[paˈdɾĩɲu]', sl: 'substantiivi, maskuliini', huom: 'kummitäti {madrinha}' },
    'madrinha': { fi: 'kummitäti', aa: 'ma-DRĨ-nja', ipa: '[maˈdɾĩɲɐ]', sl: 'substantiivi, feminiini', huom: 'kummisetä {padrinho}' },
    'almoço': { fi: 'lounas', aa: 'au-MO-su', ipa: '[awˈmosu]', sl: 'substantiivi, maskuliini' },
    'almoço de domingo': { fi: 'sunnuntailounas', aa: 'au-MO-su di do-MĨ-gu', ipa: '[awˈmosu dʒi doˈmĩɡu]', sl: 'ilmaus' }
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kertoa perheestäsi: kenellä on sisaruksia, lapsia ja vanhempia.</li>
  <li>Osaat taivuttaa verbin <span class="pt">ter</span> ja kysyä ikää: <span class="pt">Quantos anos você tem?</span></li>
  <li>Osaat käyttää omistussanoja <span class="pt">meu</span>, <span class="pt">minha</span>, <span class="pt">seu</span>, <span class="pt">dele</span>, <span class="pt">dela</span>, <span class="pt">nosso</span> oikeassa suvussa ja luvussa.</li>
  <li>Osaat erottaa <span class="pt">este</span> ja <span class="pt">esse</span> ja kuulla kysymyksen intonaation.</li>
</ul>
<p data-paikka="kallio-hameentie-ilta">Helsinki, Sörnäinen, joulukuun ilta. Perhe ei ole vain Belo Horizontessa: jouluviikolla Jay esittelee omat läheisensä videopuhelussa. Jayn äiti Purjo ja veli Kouvonen eivät puhu portugalia, mutta Jay on opettanut heille muutaman sanan.</p>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Dialogi: A minha família</h2>
  <p class="ohje">Kuuntele ensin ilman suomennoksia. Jay tekee espanjasta tulevan virheen omistussanalla: mikä virhe se on? Hyödynnä roolileikkiä ja puhu Jayn repliikit.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Helsinki, jouluviikon videopuhelu. Jay esittelee perheensä Maian perheelle.">Helsinque, videochamada de Natal. Jay mostra a família dele para a família da Maia.</p>
    <p class="s" data-h="jay" data-fi="Hei, rouva Marta! Hei, herra Walker! Tässä on äitini, Purjo. (väärin)">Oi, dona Marta! Oi, seu Walker! Esta é meu mãe, a Purjo.</p>
    <p class="s" data-h="maia" data-fi="Minha mãe, Jay! Mãe on feminiini: minha mãe, ei meu mãe.">Minha mãe, Jay! Mãe é feminino: minha mãe, não meu mãe.</p>
    <p class="s" data-h="jay" data-fi="Ai niin! Tässä on äitini, Purjo, ja tässä on veljeni, Kouvonen.">Ah, é! Esta é a minha mãe, a Purjo, e este é o meu irmão, o Kouvonen.</p>
    <p class="s" data-h="purjo" data-fi="Hyvää päivää! Mitä kuuluu? Kiitos! (opeteltuja sanoja)">Bom dia! Tudo bem? Obrigada!</p>
    <p class="s" data-h="kouvonen" data-fi="Hei! Mitä kuuluu! Kiitos! (opeteltuja sanoja)">Oi! Tudo bem! Obrigado!</p>
    <p class="s" data-h="kertoja" data-fi="Kouvonen on autossa ja puhuu puhelimeen, puhelin kädessä.">O Kouvonen está no carro e fala com o celular na mão.</p>
    <p class="s" data-h="marta" data-fi="Kuinka mukavia! Hauska tutustua, Purjo! Hauska tutustua, Kouvonen!">Que simpáticos! Muito prazer, Purjo! Muito prazer, Kouvonen!</p>
    <p class="s" data-h="walker" data-fi="Jay, onko sinulla muita sisaruksia?">Jay, você tem outros irmãos?</p>
    <p class="s" data-h="jay" data-fi="Ei, minulla on vain yksi veli. Isäni Pertti kuoli.">Não, eu só tenho um irmão. O meu pai, o Pertti, morreu.</p>
    <p class="s" data-h="marta" data-fi="Otan osaa, Jay.">Sinto muito, Jay.</p>
    <p class="s" data-h="jay" data-fi="Kiitos, rouva Marta. Mutta minulla on äiti, veli ja Maia!">Obrigado, dona Marta. Mas eu tenho uma mãe, um irmão e a Maia!</p>
    <p class="s" data-h="jay" data-fi="Entä te, rouva Marta? Montako lasta teillä on?">E a senhora, dona Marta? Quantos filhos a senhora tem?</p>
    <p class="s" data-h="marta" data-fi="Minulla on kaksi lasta: Maia ja Anderson.">Eu tenho dois filhos: a Maia e o Anderson.</p>
    <p class="s" data-h="anderson" data-fi="Minulla on sisko. Hän on Maia!">Eu tenho uma irmã. Ela é a Maia!</p>
    <p class="s" data-h="maia" data-fi="Ja minulla on veli. Anderson on maailman paras veli!">E eu tenho um irmão. O Anderson é o melhor irmão do mundo!</p>
    <p class="s" data-h="walker" data-fi="Nyt meidän perheemme on isompi, Jay.">Agora a nossa família é maior, Jay.</p>
    <p class="s" data-h="jay" data-fi="Meidän perheemme? Kiitos, herra Walker.">A nossa família? Obrigado, seu Walker.</p>
    <p class="s" data-h="walker" data-fi="Onko tuo auto hänen?">Esse carro é dele?</p>
    <p class="s" data-h="jay" data-fi="On kyllä. Hän on aina autossa.">É, sim. Ele sempre está no carro.</p>
    <p class="s" data-h="kertoja" data-fi="Kouvonen hymyilee ja laittaa radion päälle.">O Kouvonen sorri e liga o rádio.</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Lähiperhe" data-sanat="família,pai,mãe,pais,irmão,irmã,irmãos,filho,filha,filhos"></div>
  <div class="teema" data-otsikko="Suku" data-sanat="avô,avó,avós,tio,tia,primo,prima,sobrinho,sobrinha,neto,neta"></div>
  <div class="teema" data-otsikko="Parisuhde" data-sanat="marido,esposa,mulher,namorado,namorada"></div>
  <div class="teema" data-otsikko="Omistus ja ikä" data-sanat="ter,tenho,tem,temos,têm,anos,quantos anos,meu,minha,dele,dela,nosso,nossa"></div>
</section>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>Perhe ja suku</h2>
  <p>Perhesanat ovat maskuliini–feminiini-pareja: ero näkyy yleensä päätteessä (<span class="pt">filho</span> – <span class="pt">filha</span>, <span class="pt">tio</span> – <span class="pt">tia</span>, <span class="pt">primo</span> – <span class="pt">prima</span>). Monikko maskuliinimuodossa tarkoittaa sekä miehiä että naisia:</p>
  <table class="taivutus">
    <tr><td>isä ja äiti</td><td>os pais</td></tr>
    <tr><td>veljet ja sisaret (sisarukset)</td><td>os irmãos</td></tr>
    <tr><td>pojat ja tyttäret (lapset)</td><td>os filhos</td></tr>
    <tr><td>isovanhemmat</td><td>os avós</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Vanhemmat ovat Belo Horizontessa.">Os pais estão em Belo Horizonte.</li>
    <li class="s" data-fi="Minulla on yksi veli ja kaksi siskoa.">Eu tenho um irmão e duas irmãs.</li>
    <li class="s" data-fi="Hänellä on kaksi lasta.">Ela tem dois filhos.</li>
    <li class="s" data-fi="Meillä on iso perhe.">A gente tem uma família grande.</li>
  </ul>
  <p>Brasiliassa lapset sanovat isovanhemmilleen usein <span class="pt">vovó</span> (isoäiti) ja <span class="pt">vovô</span> (isoisä). Aviopuolisoita sanotaan <span class="pt">marido</span> ja <span class="pt">esposa</span> (myös <span class="pt">mulher</span> on ”vaimo”). Seurustelukumppani on <span class="pt">namorado</span> tai <span class="pt">namorada</span>. Jay on Maian <span class="pt">namorado</span>.</p>
  <div class="huomio">
    <p><b>Espanjan ansa:</b> espanjan <i lang="es">padre</i> ja <i lang="es">madre</i> ovat isä ja äiti, mutta portugalissa isä on <span class="pt">pai</span>, äiti <span class="pt">mãe</span>. Portugalin <span class="pt">padre</span> tarkoittaa katolista pappia. Ja espanjan <i lang="es">hermano</i> ja <i lang="es">hermana</i> ovat portugaliksi <span class="pt">irmão</span> ja <span class="pt">irmã</span>.</p>
  </div>
  <h3>Sukupuu: kuka on kuka?</h3>
  <p class="ohje">Napauta henkilöä: kuulet, miten Jay (tai Maia) esittelee hänet. Vaihda puhujaa ylhäältä: omistussana muuttuu. Jaylle Purjo on <span class="pt">a minha mãe</span>, Maialle <span class="pt">a mãe do Jay</span>.</p>
  <div class="sukupuu" data-nakokulmat="jay,maia">
    <div class="sp-rivi">
      <div class="sp-perhe">
        <span data-hahmo="pertti" data-nimi="Pertti" data-suku="m" data-jay="o meu pai|isäni" data-maia="o pai do Jay|Jayn isä" data-kuollut></span>
        <span data-hahmo="purjo" data-nimi="Purjo" data-suku="f" data-jay="a minha mãe|äitini" data-maia="a mãe do Jay|Jayn äiti"></span>
      </div>
      <div class="sp-perhe">
        <span data-hahmo="walker" data-nimi="Walker" data-suku="m" data-jay="o pai da Maia|Maian isä" data-maia="o meu pai|isäni"></span>
        <span data-hahmo="marta" data-nimi="Marta" data-suku="f" data-jay="a mãe da Maia|Maian äiti" data-maia="a minha mãe|äitini"></span>
      </div>
    </div>
    <div class="sp-rivi">
      <div class="sp-perhe">
        <span data-hahmo="kouvonen" data-nimi="Kouvonen" data-suku="m" data-jay="o meu irmão|veljeni" data-maia="o irmão do Jay|Jayn veli"></span>
        <span data-hahmo="jay" data-nimi="Jay" data-suku="m" data-jay="|" data-maia="o meu namorado|poikaystäväni"></span>
      </div>
      <div class="sp-perhe">
        <span data-hahmo="maia" data-nimi="Maia" data-suku="f" data-jay="a minha namorada|tyttöystäväni" data-maia="|"></span>
        <span data-hahmo="anderson" data-nimi="Anderson" data-suku="m" data-jay="o irmão da Maia|Maian veli" data-maia="o meu irmão|veljeni"></span>
      </div>
    </div>
  </div>
</section>

<section class="osio">
  <h2>Kielioppi</h2>

  <h3>1. Verbi ter: olla jollakin</h3>
  <p><span class="pt">Ter</span> tarkoittaa ”omistaa”, ”olla jollakin”. Suomessa sama ilmaistaan rakenteella ”minulla on” (omistaja saa -lla-päätteen), mutta portugalissa omistaja on lauseen tekijä: <span class="pt">eu tenho</span>. <span class="pt">Ter</span> on epäsäännöllinen verbi.</p>
  <table class="taivutus">
    <tr><td>minulla on</td><td>eu tenho</td></tr>
    <tr><td>sinulla on</td><td>você tem</td></tr>
    <tr><td>hänellä on</td><td>ele tem / ela tem</td></tr>
    <tr><td>meillä on</td><td>nós temos / a gente tem</td></tr>
    <tr><td>teillä on</td><td>vocês têm</td></tr>
    <tr><td>heillä on</td><td>eles têm / elas têm</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Minulla on yksi veli.">Eu tenho um irmão.</li>
    <li class="s" data-fi="Onko sinulla sisaruksia?">Você tem irmãos?</li>
    <li class="s" data-fi="Maialla on veli ja äiti.">A Maia tem um irmão e uma mãe.</li>
    <li class="s" data-fi="Heillä on kaksi lasta.">Eles têm dois filhos.</li>
    <li class="s" data-fi="Minulla ei ole siskoa.">Eu não tenho irmã.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> yksikön <span class="pt">tem</span> ja monikon <span class="pt">têm</span> ääntyvät samoin (”TẼI”). Ero näkyy vain kirjoituksessa: monikossa on sirkumfleksi (ê). Samalla verbillä kerrotaan <b>ikä</b>: portugalissa ei ”olla” 45-vuotias, vaan ”omistaa” 45 vuotta: <span class="pt">O Anderson tem quarenta e cinco anos.</span> Kysymys on <span class="pt">Quantos anos você tem?</span>.</p>
  </div>
  <p>Arkipuheessa <span class="pt">tem</span> tarkoittaa myös ”on olemassa” kuten <span class="pt">há</span> jaksossa 3: <span class="pt">Tem café?</span> (onko kahvia?).</p>
  <p><b>Espanjaan verrattuna:</b> <i lang="es">tengo, tienes, tiene, tenemos, tienen</i> ↔ <span class="pt">tenho, tem, temos, têm</span>. Huomaa <span class="pt">tenho</span> (nh, ei ng) ja se, että portugalissa ei ole diftongia <i lang="es">ie</i>.</p>

  <h3>2. Omistussanat</h3>
  <p>Omistussana kertoo, kenen jokin on: ”minun”, ”sinun”. Portugalissa omistussana taipuu sen asian suvun ja luvun mukaan, <b>jota omistetaan</b>, ei omistajan mukaan. Siksi Maia sanoo <span class="pt">minha mãe</span> (äiti on feminiini) ja Jay yrittää väärin <span class="pt">meu mãe</span>.</p>
  <table class="taivutus">
    <tr><td></td><td>maskuliini</td><td>feminiini</td><td>maskuliini mon.</td><td>feminiini mon.</td></tr>
    <tr><td>minun</td><td>meu</td><td>minha</td><td>meus</td><td>minhas</td></tr>
    <tr><td>sinun, hänen</td><td>seu</td><td>sua</td><td>seus</td><td>suas</td></tr>
    <tr><td>meidän</td><td>nosso</td><td>nossa</td><td>nossos</td><td>nossas</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Isäni on Belo Horizontessa. (maskuliini)">O meu pai está em Belo Horizonte.</li>
    <li class="s" data-fi="Äitini on Belo Horizontessa. (feminiini)">A minha mãe está em Belo Horizonte.</li>
    <li class="s" data-fi="Sisarukseni ovat Helsingissä. (maskuliini monikko)">Os meus irmãos estão em Helsinque.</li>
    <li class="s" data-fi="Siskoni ovat Helsingissä. (feminiini monikko)">As minhas irmãs estão em Helsinque.</li>
    <li class="s" data-fi="Meidän perheemme on iso.">A nossa família é grande.</li>
    <li class="s" data-fi="Meidän autonne on tässä.">O nosso carro está aqui.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> <span class="pt">seu</span> ja <span class="pt">sua</span> tarkoittavat ”sinun” (kun puhuteltavana on <span class="pt">você</span>), mutta myös ”hänen” ja ”heidän”. Epäselvyyden välttämiseksi arkipuheessa käytetään kolmannelle henkilölle muotoja <span class="pt">dele</span> (hänen, mies), <span class="pt">dela</span> (hänen, nainen), <span class="pt">deles</span> ja <span class="pt">delas</span> (heidän) omistetun sanan jälkeen. Ne eivät taivu omistetun asian mukaan.</p>
  </div>
  <ul class="esim">
    <li class="s" data-fi="Sinun äitisi. / Sinun perheesi.">A sua mãe. / A sua família.</li>
    <li class="s" data-fi="Hänen äitinsä (Jayn).">A mãe dele.</li>
    <li class="s" data-fi="Hänen äitinsä (Maian).">A mãe dela.</li>
    <li class="s" data-fi="Hänen veljensä.">O irmão dele.</li>
    <li class="s" data-fi="Heidän talonsa.">A casa deles.</li>
  </ul>
  <p>Brasilian portugalissa määräinen artikkeli omistussanan edessä on valinnainen: <span class="pt">a minha mãe</span> ja <span class="pt">minha mãe</span> ovat molemmat oikein. Puheessa artikkeli on yleinen; erityisesti keskustelun alussa sitä usein ei sanota.</p>
  <p><b>Espanjaan verrattuna:</b> espanjan <i lang="es">mi, tu, su</i> eivät taivu sukuun (<i lang="es">mi madre, mi padre</i>), vain lukuun (<i lang="es">mis hermanos</i>). Portugalissa suku on mukana: <span class="pt">minha mãe</span>, <span class="pt">meu pai</span>. Tämä on tavallisin espanjankielisen virhe.</p>

  <h3>3. Este ja esse: tämä ja tuo</h3>
  <p>Osoittava pronomini kertoo, mihin puhuja osoittaa. Se taipuu sukuun ja lukuun kuten omistussana.</p>
  <table class="taivutus">
    <tr><td></td><td>maskuliini</td><td>feminiini</td><td>maskuliini mon.</td><td>feminiini mon.</td></tr>
    <tr><td>tämä (lähellä minua)</td><td>este</td><td>esta</td><td>estes</td><td>estas</td></tr>
    <tr><td>tuo (lähellä sinua)</td><td>esse</td><td>essa</td><td>esses</td><td>essas</td></tr>
    <tr><td>tämä asia (ei sukua)</td><td colspan="4">isto / isso</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Tässä on veljeni.">Este é o meu irmão.</li>
    <li class="s" data-fi="Tässä on äitini.">Esta é a minha mãe.</li>
    <li class="s" data-fi="Tuo auto on hänen.">Esse carro é dele.</li>
    <li class="s" data-fi="Mikä tämä on?">O que é isto?</li>
    <li class="s" data-fi="Se on kirja.">Isso é um livro.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> kirjoitetussa kielessä <span class="pt">este</span> on lähellä puhujaa ja <span class="pt">esse</span> lähellä kuulijaa. Brasilian puheessa <span class="pt">esse</span> ja <span class="pt">essa</span> korvaavat usein myös <span class="pt">este</span> ja <span class="pt">esta</span>, joten kuulet <span class="pt">esse</span> -muotoa paljon. Kun esittelet jonkun, kumpikin käy: <span class="pt">Esse é o meu irmão.</span> Kolmas osoittava sana, <span class="pt">aquele</span> (tuo kauempana), tulee jaksossa 8.</p>
  </div>
  <p><b>Espanjaan verrattuna:</b> espanjan <i lang="es">este, ese</i> ja <i lang="es">aquel</i> toimivat samoin. Portugalin <span class="pt">isto</span> ja <span class="pt">isso</span> vastaavat espanjan <i lang="es">esto</i> ja <i lang="es">eso</i>.</p>
</section>

<section class="osio">
  <h2>Ääntäminen: kysymyksen intonaatio</h2>
  <p>Suomessa kyllä-ei-kysymys erotetaan väitteestä päätteellä -ko tai -kö (”Onko sinulla veljeä?”). Portugalissa sanat ovat samat kuin väitteessä (”Você tem irmão?” ja ”Você tem irmão.”) ja ero kuuluu vain sävelkulussa eli intonaatiossa. Kuuntele, miten ääni nousee kysymyksen lopussa.</p>

  <div class="saanto">
    <h3>1. Kyllä-ei-kysymys: ääni nousee lopussa</h3>
    <ul class="esim">
      <li class="s">Você tem irmãos?</li>
      <li class="s">Esta é a sua irmã?</li>
      <li class="s">Tudo bem?</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>2. Väite: ääni laskee lopussa</h3>
    <ul class="esim">
      <li class="s">Eu tenho um irmão.</li>
      <li class="s">Esta é a minha irmã.</li>
      <li class="s">Tudo bem.</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>3. Kysymyssanalla alkava kysymys: ääni laskee</h3>
    <p>Kun lause alkaa kysymyssanalla (<span class="pt">quantos</span>, <span class="pt">onde</span>, <span class="pt">como</span>), ääni laskee kuten väitteessä, koska kysymyssana jo kertoo, että kyseessä on kysymys.</p>
    <ul class="esim">
      <li class="s">Quantos irmãos você tem?</li>
      <li class="s">Onde fica Otaniemi?</li>
      <li class="s">Quantos anos você tem?</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>4. Vahvistuskysymys né?</h3>
    <p>Lyhyt <span class="pt">né?</span> lauseen lopussa pyytää vahvistusta ja nostaa äänen. Se vastaa suomen ”eikö niin?” ja ”vai mitä?”.</p>
    <ul class="esim">
      <li class="s">Ele é simpático, né?</li>
      <li class="s">A sua família é grande, né?</li>
    </ul>
  </div>

  <div class="huomio">
    <p><b>Suomalaisen sudenkuoppa:</b> älä jätä kysymysmerkkiä kirjoitukseen: kysymys näkyy vain siinä ja äänessä. Harjoittele sanomalla sama lause kahdesti, ensin väitteenä ja sitten kysymyksenä: <span class="pt">Ela é brasileira. / Ela é brasileira?</span> Ero ei ole sanoissa vaan sävelessä.</p>
  </div>
</section>

<aside class="kulttuuri" data-paikka="belo-horizonte-panoraama">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Brasilialainen perhe</h3>
  <p class="perhekuva"><span class="ryhma" data-hahmot="walker,marta,anderson,maia,jay"></span><br><small>Maian perhe ja Jay jouluna Belo Horizontessa (piirros).</small></p>
  <p>Brasiliassa perhe on hyvin keskeinen, ja siihen kuuluvat usein isovanhemmat, tädit, sedät ja serkut. Monessa perheessä viikonlopun tärkein tapahtuma on yhteinen sunnuntailounas, <span class="pt">almoço de domingo</span>, johon kokoontuu koko suku.</p>
  <p>Lapsen kummit ovat tärkeitä. Kummisetä on <span class="pt">padrinho</span> ja kummitäti <span class="pt">madrinha</span>, ja lapsen vanhemmat ja kummit sanovat toisilleen <i>compadre</i> ja <i>comadre</i>. Lapset kutsuvat vanhempiensa ystäviä ja naapureita usein <span class="pt">tio</span> ja <span class="pt">tia</span> (setä ja täti), vaikka he eivät olisi sukua. Siksi sanat kuulee Brasiliassa paljon muissakin kuin sukulaisten yhteydessä.</p>
  <p>Brasiliassa äitienpäivä (<span class="pt">Dia das Mães</span>) on toukokuun toinen sunnuntai ja isänpäivä (<span class="pt">Dia dos Pais</span>) elokuun toinen sunnuntai. Jayn kannattaa opetella sanat <span class="pt">meu</span> ja <span class="pt">minha</span> hyvin ennen joulua, sillä Maian perheessä niitä kuulee jatkuvasti.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Täydennä verbi ter</h3>
    <p class="ohje">Kirjoita oikea muoto: <span class="pt">tenho</span>, <span class="pt">tem</span>, <span class="pt">temos</span> tai <span class="pt">têm</span>.</p>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="tenho"></span> um irmão.</p>
      <p>Você <span class="aukko" data-oikea="tem"></span> irmãos?</p>
      <p>A Marta <span class="aukko" data-oikea="tem"></span> dois filhos.</p>
      <p>Nós <span class="aukko" data-oikea="temos"></span> uma família grande.</p>
      <p>Eles <span class="aukko" data-oikea="têm"></span> um carro.</p>
      <p>O Anderson <span class="aukko" data-oikea="tem"></span> quarenta e cinco anos.</p>
      <p>Vocês <span class="aukko" data-oikea="têm"></span> filhos?</p>
      <p>A gente <span class="aukko" data-oikea="tem"></span> um amigo mineiro.</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Meu, minha, meus vai minhas?</h3>
    <p class="ohje">Valitse omistussana omistetun asian mukaan.</p>
    <div class="valinta" data-oikea="meu">
      <p class="kysymys">___ irmão</p>
      <div class="vaihtoehdot"><button type="button">meu</button><button type="button">minha</button><button type="button">meus</button><button type="button">minhas</button></div>
    </div>
    <div class="valinta" data-oikea="minha">
      <p class="kysymys">___ irmã</p>
      <div class="vaihtoehdot"><button type="button">meu</button><button type="button">minha</button><button type="button">meus</button><button type="button">minhas</button></div>
    </div>
    <div class="valinta" data-oikea="meus">
      <p class="kysymys">___ filhos</p>
      <div class="vaihtoehdot"><button type="button">meu</button><button type="button">minha</button><button type="button">meus</button><button type="button">minhas</button></div>
    </div>
    <div class="valinta" data-oikea="minhas">
      <p class="kysymys">___ amigas</p>
      <div class="vaihtoehdot"><button type="button">meu</button><button type="button">minha</button><button type="button">meus</button><button type="button">minhas</button></div>
    </div>
    <div class="valinta" data-oikea="nossa">
      <p class="kysymys">___ família (meidän)</p>
      <div class="vaihtoehdot"><button type="button">nosso</button><button type="button">nossa</button><button type="button">nossos</button></div>
    </div>
    <div class="valinta" data-oikea="dele">
      <p class="kysymys">A mãe ___ (Jayn äiti)</p>
      <div class="vaihtoehdot"><button type="button">dele</button><button type="button">dela</button><button type="button">deles</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Yhdistä perhesanat</h3>
    <ul class="yhdista">
      <li data-pari="isä">o pai</li>
      <li data-pari="äiti">a mãe</li>
      <li data-pari="veli">o irmão</li>
      <li data-pari="sisko">a irmã</li>
      <li data-pari="isoisä">o avô</li>
      <li data-pari="isoäiti">a avó</li>
      <li data-pari="setä, eno">o tio</li>
      <li data-pari="serkku (nainen)">a prima</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Kuka on kuka?</h3>
    <p class="ohje">Yhdistä sukulaisuuden kuvaus portugalinkieliseen sanaan.</p>
    <ul class="yhdista">
      <li data-pari="äitini äiti">a minha avó</li>
      <li data-pari="isäni veli">o meu tio</li>
      <li data-pari="tätini lapsi (tyttö)">a minha prima</li>
      <li data-pari="siskoni poika">o meu sobrinho</li>
      <li data-pari="lapseni lapsi (poika)">o meu neto</li>
      <li data-pari="vaimoni">a minha esposa</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Este vai esse?</h3>
    <p class="ohje">Valitse oikea sana. Jos esittelet läheistä henkilöä, kumpi tahansa kelpaa, mutta valitse suku oikein.</p>
    <div class="valinta" data-oikea="Esta">
      <p class="kysymys">___ é a minha mãe. (nainen)</p>
      <div class="vaihtoehdot"><button type="button">Este</button><button type="button">Esta</button></div>
    </div>
    <div class="valinta" data-oikea="Este">
      <p class="kysymys">___ é o meu irmão. (mies)</p>
      <div class="vaihtoehdot"><button type="button">Este</button><button type="button">Esta</button></div>
    </div>
    <div class="valinta" data-oikea="Isso">
      <p class="kysymys">___ é um livro. (asia, ei sukua)</p>
      <div class="vaihtoehdot"><button type="button">Esse</button><button type="button">Isso</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Kuuntele ja valitse lause</h3>
    <p class="ohje">Paina ▶ ja valitse lause, jonka kuulit.</p>
    <div class="valinta" data-kuuntele="Eu tenho um irmão." data-oikea="Eu tenho um irmão.">
      <p class="kysymys">Mikä lause?</p>
      <div class="vaihtoehdot"><button type="button">Eu tenho um irmão.</button><button type="button">Eu tenho uma irmã.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Elas têm dois filhos." data-oikea="Elas têm dois filhos.">
      <p class="kysymys">Mikä lause?</p>
      <div class="vaihtoehdot"><button type="button">Ela tem dois filhos.</button><button type="button">Elas têm dois filhos.</button></div>
    </div>
    <div class="valinta" data-kuuntele="A minha mãe é simpática." data-oikea="A minha mãe é simpática.">
      <p class="kysymys">Mikä lause?</p>
      <div class="vaihtoehdot"><button type="button">O meu pai é simpático.</button><button type="button">A minha mãe é simpática.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause. Kirjoita luvut sanoilla.</p>
    <div class="sanelu" data-puhu="Esta é a minha mãe."></div>
    <div class="sanelu" data-puhu="Você tem irmãos?"></div>
    <div class="sanelu" data-puhu="O Anderson tem quarenta e cinco anos."></div>
    <div class="sanelu" data-puhu="A nossa família é grande."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Minulla on kaksi veljeä ja yksi sisko.</p><p class="s" data-fi="Minulla on kaksi veljeä ja yksi sisko.">Eu tenho dois irmãos e uma irmã.</p></div>
    <div class="kaanna"><p class="fi">Tässä on äitini ja tässä on isäni.</p><p class="s" data-fi="Tässä on äitini ja tässä on isäni.">Esta é a minha mãe e este é o meu pai.</p></div>
    <div class="kaanna"><p class="fi">Hänen veljensä on autossa.</p><p class="s" data-fi="Hänen veljensä on autossa.">O irmão dele está no carro.</p></div>
    <div class="kaanna"><p class="fi">Kuinka vanha sinä olet?</p><p class="s" data-fi="Kuinka vanha sinä olet?">Quantos anos você tem?</p></div>
    <div class="kaanna"><p class="fi">Meidän perheemme on iso.</p><p class="s" data-fi="Meidän perheemme on iso.">A nossa família é grande.</p></div>
    <div class="kaanna"><p class="fi">Onko teillä lapsia?</p><p class="s" data-fi="Onko teillä lapsia?">Vocês têm filhos?</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Vastaa kysymyksiin</h3>
    <p class="ohje">Vastaa omasta perheestäsi. Mallit ovat Jayn vastauksia.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Você tem irmãos?</summary>
      <p class="s" data-fi="Minulla on yksi veli.">Tenho, sim. Eu tenho um irmão.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Como se chama a sua mãe?</summary>
      <p class="s" data-fi="Äitini nimi on Purjo.">A minha mãe se chama Purjo.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você tem filhos?</summary>
      <p class="s" data-fi="Minulla ei ole lapsia.">Não, eu não tenho filhos.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">A sua família é grande?</summary>
      <p class="s" data-fi="Ei, se on pieni.">Não, é pequena.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l05">
    <h3>Kotitehtävä</h3>
    <p>Kirjoita kuusi lausetta omasta perheestäsi, ikään kuin esittelisit sen Maian perheelle. Kerro, keitä perheeseesi kuuluu (<span class="pt">Eu tenho…</span>), kuinka vanha joku on (<span class="pt">… tem … anos</span>) ja missä he asuvat. Käytä ainakin kahta omistussanaa (<span class="pt">meu</span>, <span class="pt">minha</span>, <span class="pt">dele</span> tai <span class="pt">dela</span>) ja sanaa <span class="pt">este</span> tai <span class="pt">esta</span>.</p>
    <details class="malli"><summary>Mallivastaus (Jay)</summary>
      <p class="s" data-fi="Minulla on äiti ja veli.">Eu tenho uma mãe e um irmão.</p>
      <p class="s" data-fi="Tässä on äitini. Hänen nimensä on Purjo.">Esta é a minha mãe. O nome dela é Purjo.</p>
      <p class="s" data-fi="Tässä on veljeni. Hänen nimensä on Kouvonen.">Este é o meu irmão. O nome dele é Kouvonen.</p>
      <p class="s" data-fi="Isäni Pertti kuoli.">O meu pai, o Pertti, morreu.</p>
      <p class="s" data-fi="Maia on tyttöystäväni. Hänellä on iso perhe.">A Maia é a minha namorada. Ela tem uma família grande.</p>
      <p class="s" data-fi="Kaikki hänen perheensä ovat Belo Horizontessa.">A família dela está em Belo Horizonte.</p>
    </details>
  </div>
</section>
`
});
