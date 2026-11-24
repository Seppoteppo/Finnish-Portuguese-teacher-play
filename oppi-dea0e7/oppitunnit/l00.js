/* Oppitunti 0: valmistava jakso ennen kirjaa. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet (aa = suomalaisin kirjaimin, ipa = kansainvälinen) noudattavat Belo Horizonten ääntämystä.
   Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l00',
  lyhyt: '0',
  jakso: 'Ennen kirjaa',
  otsikko: 'Äänteet ja ensimmäiset tervehdykset',
  lahde: 'Valmistava oppitunti. Ei vastaa mitään kirjan jaksoa.',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', kuvaus: 'brasilialainen geologi Belo Horizontesta, asuu Helsingissä' },
    jay: { nimi: 'Jay', tyyppi: 'mies', kuvaus: 'suomalainen geologi, opettelee portugalia' }
  },

  /* Aiheet, joiden mukaan oppitunnin sanastoon lisätään ydinsanoja (ks. AIHEET app.js:ssä). */
  aiheet: ['tervehdys', 'ihmiset', 'kysymys', 'paikka'],

  /* Oppitunnin oma sanasto: uudet ja tärkeät asiat. Pikkusanat ja ääntämisesimerkit saavat kuplan, mutta eivät ole listalla. */
  sanasto: [
    'bom dia', 'boa tarde', 'boa noite', 'oi', 'olá', 'tchau', 'até logo',
    'tudo bem', 'obrigado', 'obrigada', 'por favor', 'sim', 'não',
    'como você se chama', 'eu me chamo', 'muito prazer', 'você é de onde', 'eu sou', 'da finlândia',
    'que legal', 'eu', 'você', 'ser', 'estar', 'bem-vindo', 'bem-vinda', 'boas-vindas', 'manhã', 'hoje', 'agora',
    'cozinha', 'aula', 'homem', 'minha', 'trabalho', 'muito bem'
  ],

  sanat: {
    // dialogi
    'belo horizonte': { fi: 'Belo Horizonte (kaupunki Minas Geraisin osavaltiossa)', aa: 'BE-lu o-ri-ZÕ-tsi', ipa: '[ˈbɛlu oɾiˈzõtʃi]', sl: 'kaupungin nimi', huom: 'kirjaimellisesti ”kaunis horisontti”' },
    'de manhã': { fi: 'aamulla', aa: 'di ma-NJÃ', ipa: '[dʒi maˈɲɐ̃]', sl: 'ilmaus' },
    'manhã': { fi: 'aamu', aa: 'mã-NJÃ', ipa: '[mɐ̃ˈɲɐ̃]', sl: 'substantiivi, feminiini' },
    'de': { fi: '-sta, -stä; jonkun (omistus)', aa: 'di', ipa: '[dʒi]', sl: 'prepositio' },
    'encontra': { fi: 'tapaa', aa: 'ẽ-KÕ-tra', ipa: '[ẽˈkõtɾɐ]', sl: 'verbi', huom: 'perusmuoto {encontrar}' },
    'encontrar': { fi: 'tavata, löytää', aa: 'ẽ-kõ-TRAH', ipa: '[ẽkõˈtɾah]', sl: 'verbi, perusmuoto' },
    'helsinque': { fi: 'Helsinki', aa: 'eu-SĨ-ki', ipa: '[ewˈsĩki]', sl: 'kaupungin nimi', huom: 'portugaliksi kaupunkien nimet usein mukautuvat' },
    'estão': { fi: 'ovat (he ovat)', aa: 'es-TÃU', ipa: '[esˈtɐ̃w]', sl: 'verbi {estar}', huom: 'olla jossakin paikassa tai tilassa' },
    'estar': { fi: 'olla (tila, sijainti)', aa: 'es-TAH', ipa: '[esˈtah]', sl: 'verbi, perusmuoto', huom: 'vrt. {ser}' },
    'na cozinha': { fi: 'keittiössä', aa: 'na ko-ZĨ-nja', ipa: '[na koˈzĩɲɐ]', sl: 'ilmaus', huom: '{na} = {em} + {a}' },
    'cozinha': { fi: 'keittiö', aa: 'ko-ZĨ-nja', ipa: '[koˈzĩɲɐ]', sl: 'substantiivi, feminiini' },
    'hoje': { fi: 'tänään', aa: 'O-zhi', ipa: '[ˈoʒi]', sl: 'adverbi' },
    'aula': { fi: 'oppitunti', aa: 'AU-la', ipa: '[ˈawlɐ]', sl: 'substantiivi, feminiini' },
    'aula de português': { fi: 'portugalin tunti', aa: 'AU-la di poh-tu-GES', ipa: '[ˈawlɐ dʒi pohtuˈɡes]', sl: 'ilmaus' },
    'agora': { fi: 'nyt', aa: 'a-GO-ra', ipa: '[aˈɡɔɾɐ]', sl: 'adverbi' },
    'minha': { fi: 'minun (feminiinisanan edellä)', aa: 'MĨ-nja', ipa: '[ˈmĩɲɐ]', sl: 'omistuspronomini', huom: 'maskuliini {meu}' },
    'meu': { fi: 'minun (maskuliinisanan edellä)', aa: 'MEU', ipa: '[mew]', sl: 'omistuspronomini', huom: 'feminiini {minha}' },
    'a minha mãe': { fi: 'äitini', aa: 'a MĨ-nja MÃI', ipa: '[a ˈmĩɲɐ mɐ̃j]', sl: 'ilmaus', huom: 'omistussanan edellä on usein artikkeli {a}' },
    'homem': { fi: 'mies', aa: 'O-mẽi', ipa: '[ˈomẽj]', sl: 'substantiivi, maskuliini', huom: 'nainen = mulher' },
    'ah': { fi: 'ai, ahaa', aa: 'A', ipa: '[a]', sl: 'huudahdus' },
    'muito bem': { fi: 'hyvä!, hienosti!', aa: 'MŨI-tu BẼI', ipa: '[ˈmũjtu bẽj]', sl: 'kehu' },
    'vai': { fi: 'menee', aa: 'VAI', ipa: '[vaj]', sl: 'verbi', huom: 'perusmuoto {ir}' },
    'ir': { fi: 'mennä', aa: 'IH', ipa: '[ih]', sl: 'verbi, perusmuoto' },
    'para o trabalho': { fi: 'töihin', aa: 'PA-ra u tra-BA-lju', ipa: '[ˈpaɾɐ u tɾaˈbaʎu]', sl: 'ilmaus', huom: 'puhekielessä usein {pro} trabalho' },
    'para': { fi: '-lle, -hin; varten', aa: 'PA-ra', ipa: '[ˈpaɾɐ]', sl: 'prepositio', huom: 'puhekielessä {pra}' },
    'trabalho': { fi: 'työ; työpaikka', aa: 'tra-BA-lju', ipa: '[tɾaˈbaʎu]', sl: 'substantiivi, maskuliini' },
    'na': { fi: '-ssa, -llä (feminiinisanan edellä)', aa: 'na', ipa: '[na]', sl: 'prepositio + artikkeli', huom: '{em} + {a}' },
    'em': { fi: '-ssa, -ssä, -lla, -llä', aa: 'ẽi', ipa: '[ẽj]', sl: 'prepositio' },
    'a': { fi: 'feminiinin määräinen artikkeli; myös ”-lle”', aa: 'a', ipa: '[a]', sl: 'artikkeli, prepositio', huom: 'maskuliini {o}' },
    'o': { fi: 'maskuliinin määräinen artikkeli', aa: 'u', ipa: '[u]', sl: 'artikkeli', huom: 'feminiini {a}' },
    'bom dia': { fi: 'hyvää huomenta, hyvää päivää', aa: 'BÕ DI-a', ipa: '[bõ ˈdʒiɐ]', sl: 'tervehdys', huom: 'aamusta puoleenpäivään' },
    'bom': { fi: 'hyvä', aa: 'BÕ', ipa: '[bõ]', sl: 'adjektiivi, maskuliini', huom: 'feminiini {boa}' },
    'dia': { fi: 'päivä', aa: 'DI-a', ipa: '[ˈdʒiɐ]', sl: 'substantiivi, maskuliini' },
    'tudo bem': { fi: 'mitä kuuluu?; kaikki hyvin', aa: 'TU-du BẼI', ipa: '[ˈtudu bẽj]', sl: 'tervehdys', huom: 'sama ilmaus käy kysymykseksi ja vastaukseksi' },
    'tudo': { fi: 'kaikki', aa: 'TU-du', ipa: '[ˈtudu]', sl: 'pronomini' },
    'bem': { fi: 'hyvin', aa: 'BẼI', ipa: '[bẽj]', sl: 'adverbi' },
    'e': { fi: 'ja; kysymyksen alussa: entä', aa: 'i', ipa: '[i]', sl: 'konjunktio' },
    'você': { fi: 'sinä', aa: 'vo-SE', ipa: '[voˈse]', sl: 'persoonapronomini', huom: 'Brasilian tavallinen sinä-sana' },
    'obrigado': { fi: 'kiitos (miehen sanomana)', aa: 'o-bri-GA-du', ipa: '[obɾiˈɡadu]', sl: 'kohteliaisuus', huom: 'nainen sanoo {obrigada}' },
    'obrigada': { fi: 'kiitos (naisen sanomana)', aa: 'o-bri-GA-da', ipa: '[obɾiˈɡadɐ]', sl: 'kohteliaisuus', huom: 'mies sanoo {obrigado}' },
    'como você se chama': { fi: 'mikä sinun nimesi on?', aa: 'KO-mu vo-SE si SHÃ-ma', ipa: '[ˈkomu voˈse si ˈʃɐ̃mɐ]', sl: 'kysymys', huom: 'kirjaimellisesti ”miten sinä kutsut itseäsi?”' },
    'como': { fi: 'miten, kuinka', aa: 'KO-mu', ipa: '[ˈkomu]', sl: 'kysymyssana' },
    'se': { fi: 'itseään, itseäsi', aa: 'si', ipa: '[si]', sl: 'refleksiivipronomini' },
    'chama': { fi: 'kutsuu, kutsut', aa: 'SHÃ-ma', ipa: '[ˈʃɐ̃mɐ]', sl: 'verbi', huom: 'perusmuoto {chamar}' },
    'chamar': { fi: 'kutsua', aa: 'sha-MAH', ipa: '[ʃaˈmah]', sl: 'verbi, perusmuoto' },
    'eu me chamo': { fi: 'minun nimeni on', aa: 'EU mi SHÃ-mu', ipa: '[ew mi ˈʃɐ̃mu]', sl: 'ilmaus', huom: 'kirjaimellisesti ”minä kutsun itseäni”' },
    'eu': { fi: 'minä', aa: 'EU', ipa: '[ew]', sl: 'persoonapronomini' },
    'me': { fi: 'itseäni, minua', aa: 'mi', ipa: '[mi]', sl: 'refleksiivipronomini' },
    'chamo': { fi: 'kutsun', aa: 'SHÃ-mu', ipa: '[ˈʃɐ̃mu]', sl: 'verbi', huom: 'perusmuoto {chamar}' },
    'muito prazer': { fi: 'hauska tutustua', aa: 'MŨI-tu pra-ZEH', ipa: '[ˈmũjtu pɾaˈzeh]', sl: 'kohteliaisuus', huom: 'kirjaimellisesti ”paljon iloa”' },
    'muito': { fi: 'paljon; hyvin, todella', aa: 'MŨI-tu', ipa: '[ˈmũjtu]', sl: 'adverbi' },
    'prazer': { fi: 'ilo, mielihyvä', aa: 'pra-ZEH', ipa: '[pɾaˈzeh]', sl: 'substantiivi, maskuliini' },
    'você é de onde': { fi: 'mistä sinä olet kotoisin?', aa: 'vo-SE E di Õ-di', ipa: '[voˈse ɛ dʒi ˈõdʒi]', sl: 'kysymys' },
    'de onde': { fi: 'mistä', aa: 'di Õ-di', ipa: '[dʒi ˈõdʒi]', sl: 'kysymyssana' },
    'onde': { fi: 'missä', aa: 'Õ-di', ipa: '[ˈõdʒi]', sl: 'kysymyssana' },
    'é': { fi: 'on; olet', aa: 'E', ipa: '[ɛ]', sl: 'verbi {ser}', huom: '{ele} é = hän on, {você} é = sinä olet' },
    'ser': { fi: 'olla (pysyvä ominaisuus, alkuperä)', aa: 'SEH', ipa: '[seh]', sl: 'verbi, perusmuoto', huom: 'muotoja: {eu sou}, {você} {é}' },
    'ele': { fi: 'hän (mies), se', aa: 'E-li', ipa: '[ˈeli]', sl: 'persoonapronomini' },
    'eu sou': { fi: 'minä olen', aa: 'EU SOU', ipa: '[ew ˈsow]', sl: 'verbi {ser}' },
    'sou': { fi: '(minä) olen', aa: 'SOU', ipa: '[sow]', sl: 'verbi {ser}' },
    'da finlândia': { fi: 'Suomesta', aa: 'da fĩ-LÃ-dja', ipa: '[da fĩˈlɐ̃dʒjɐ]', sl: 'ilmaus', huom: '{da} = {de} + {a}' },
    'da': { fi: '-sta, -stä (feminiinisanan edellä)', aa: 'da', ipa: '[da]', sl: 'prepositio + artikkeli', huom: '{de} + {a}' },
    'finlândia': { fi: 'Suomi', aa: 'fĩ-LÃ-dja', ipa: '[fĩˈlɐ̃dʒjɐ]', sl: 'maan nimi, feminiini' },
    'que legal': { fi: 'kuinka kivaa!, siistiä!', aa: 'KI le-GAU', ipa: '[ki leˈɡaw]', sl: 'huudahdus', huom: 'arkikieltä' },
    'que': { fi: 'mikä; kuinka; että', aa: 'ki', ipa: '[ki]', sl: 'kysymyssana, konjunktio' },
    'legal': { fi: 'kiva, siisti', aa: 'le-GAU', ipa: '[leˈɡaw]', sl: 'adjektiivi', huom: 'arkikieltä; myös ”laillinen”' },
    'sorri': { fi: 'hymyilee', aa: 'so-HI', ipa: '[soˈhi]', sl: 'verbi', huom: 'perusmuoto {sorrir}' },
    'sorrir': { fi: 'hymyillä', aa: 'so-HIH', ipa: '[soˈhih]', sl: 'verbi, perusmuoto' },
    'tchau': { fi: 'hei hei, moikka', aa: 'TSAU', ipa: '[tʃaw]', sl: 'hyvästely' },
    'até logo': { fi: 'nähdään pian', aa: 'a-TE LO-gu', ipa: '[aˈtɛ ˈlɔɡu]', sl: 'hyvästely' },
    'até': { fi: 'asti, kunnes', aa: 'a-TE', ipa: '[aˈtɛ]', sl: 'prepositio' },
    'logo': { fi: 'pian', aa: 'LO-gu', ipa: '[ˈlɔɡu]', sl: 'adverbi' },
    // tervehdykset
    'oi': { fi: 'moi, hei', aa: 'OI', ipa: '[oj]', sl: 'tervehdys', huom: 'arkinen' },
    'olá': { fi: 'hei, terve', aa: 'o-LA', ipa: '[oˈla]', sl: 'tervehdys', huom: 'hieman muodollisempi kuin {oi}' },
    'boa tarde': { fi: 'hyvää päivää (iltapäivällä)', aa: 'BO-a TAH-di', ipa: '[ˈboɐ ˈtahdʒi]', sl: 'tervehdys', huom: 'puolestapäivästä pimeän tuloon' },
    'boa noite': { fi: 'hyvää iltaa; hyvää yötä', aa: 'BO-a NOI-tsi', ipa: '[ˈboɐ ˈnojtʃi]', sl: 'tervehdys', huom: 'pimeän tultua, myös hyvästellessä' },
    'boa': { fi: 'hyvä', aa: 'BO-a', ipa: '[ˈboɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {bom}' },
    'tarde': { fi: 'iltapäivä', aa: 'TAH-di', ipa: '[ˈtahdʒi]', sl: 'substantiivi, feminiini' },
    'noite': { fi: 'ilta, yö', aa: 'NOI-tsi', ipa: '[ˈnojtʃi]', sl: 'substantiivi, feminiini' },
    'sim': { fi: 'kyllä', aa: 'SĨ', ipa: '[sĩ]', sl: 'vastaussana' },
    'não': { fi: 'ei', aa: 'NÃU', ipa: '[nɐ̃w]', sl: 'vastaussana' },
    'por favor': { fi: 'ole hyvä ja…, kiitos (pyytäessä)', aa: 'poh fa-VOH', ipa: '[poh faˈvoh]', sl: 'kohteliaisuus' },
    'bem-vindo': { fi: 'tervetuloa (miehelle)', aa: 'bẽi-VĨ-du', ipa: '[bẽjˈvĩdu]', sl: 'tervehdys', huom: 'naiselle {bem-vinda}; kaikille {boas-vindas}' },
    'bem-vinda': { fi: 'tervetuloa (naiselle)', aa: 'bẽi-VĨ-da', ipa: '[bẽjˈvĩdɐ]', sl: 'tervehdys', huom: 'miehelle {bem-vindo}; kaikille {boas-vindas}' },
    'boas-vindas': { fi: 'tervetuloa (kenelle tahansa)', aa: 'BO-az-VĨ-das', ipa: '[ˌboɐzˈvĩdɐs]', sl: 'tervehdys', huom: 'kirjaimellisesti ”hyvät tulemiset”' },
    'ao': { fi: '-lle, -hon (maskuliinisanan edellä)', aa: 'AU', ipa: '[aw]', sl: 'prepositio + artikkeli', huom: '{a} + {o}' },
    'curso': { fi: 'kurssi', aa: 'KUH-su', ipa: '[ˈkuhsu]', sl: 'substantiivi, maskuliini' },
    'português': { fi: 'portugali (kieli); portugalilainen', aa: 'poh-tu-GES', ipa: '[pohtuˈɡes]', sl: 'substantiivi, maskuliini' },
    // ääntämisesimerkit
    'um': { fi: 'yksi; eräs', aa: 'Ũ', ipa: '[ũ]', sl: 'lukusana, artikkeli, maskuliini' },
    'café': { fi: 'kahvi; kahvila', aa: 'ka-FE', ipa: '[kaˈfɛ]', sl: 'substantiivi, maskuliini' },
    'brasil': { fi: 'Brasilia', aa: 'bra-ZIU', ipa: '[bɾaˈziw]', sl: 'maan nimi, maskuliini' },
    'leite': { fi: 'maito', aa: 'LEI-tsi', ipa: '[ˈlejtʃi]', sl: 'substantiivi, maskuliini' },
    'cidade': { fi: 'kaupunki', aa: 'si-DA-di', ipa: '[siˈdadʒi]', sl: 'substantiivi, feminiini' },
    'tia': { fi: 'täti', aa: 'TSI-a', ipa: '[ˈtʃiɐ]', sl: 'substantiivi, feminiini' },
    'rio': { fi: 'joki', aa: 'HI-u', ipa: '[ˈhiu]', sl: 'substantiivi, maskuliini' },
    'rio de janeiro': { fi: 'Rio de Janeiro', aa: 'HI-u di zha-NEI-ru', ipa: '[ˈhiu dʒi ʒaˈnejɾu]', sl: 'kaupungin nimi', huom: 'kirjaimellisesti ”tammikuun joki”' },
    'carro': { fi: 'auto', aa: 'KA-hu', ipa: '[ˈkahu]', sl: 'substantiivi, maskuliini', huom: 'vrt. {caro} = kallis' },
    'caro': { fi: 'kallis; rakas', aa: 'KA-ru', ipa: '[ˈkaɾu]', sl: 'adjektiivi', huom: 'vrt. {carro} = auto' },
    'mar': { fi: 'meri', aa: 'MAH', ipa: '[mah]', sl: 'substantiivi, maskuliini' },
    'dois': { fi: 'kaksi', aa: 'DOIS', ipa: '[dojs]', sl: 'lukusana', huom: 'Riossa DOISH' },
    'três': { fi: 'kolme', aa: 'TRES', ipa: '[tɾes]', sl: 'lukusana', huom: 'Riossa TRESH' },
    'mesmo': { fi: 'sama; todella', aa: 'MEZ-mu', ipa: '[ˈmezmu]', sl: 'adjektiivi, adverbi', huom: 'Riossa MEZH-mu' },
    'casa': { fi: 'talo, koti', aa: 'KA-za', ipa: '[ˈkazɐ]', sl: 'substantiivi, feminiini' },
    'pão': { fi: 'leipä', aa: 'PÃU', ipa: '[pɐ̃w]', sl: 'substantiivi, maskuliini' },
    'mãe': { fi: 'äiti', aa: 'MÃI', ipa: '[mɐ̃j]', sl: 'substantiivi, feminiini' },
    'filho': { fi: 'poika (jonkun lapsi)', aa: 'FI-lju', ipa: '[ˈfiʎu]', sl: 'substantiivi, maskuliini' },
    'vinho': { fi: 'viini', aa: 'VĨ-nju', ipa: '[ˈvĩɲu]', sl: 'substantiivi, maskuliini' },
    'chá': { fi: 'tee', aa: 'SHA', ipa: '[ʃa]', sl: 'substantiivi, maskuliini' },
    'janeiro': { fi: 'tammikuu', aa: 'zha-NEI-ru', ipa: '[ʒaˈnejɾu]', sl: 'substantiivi, maskuliini' },
    'gente': { fi: 'ihmiset, väki', aa: 'ZHẼ-tsi', ipa: '[ˈʒẽtʃi]', sl: 'substantiivi, feminiini' },
    'sol': { fi: 'aurinko', aa: 'SOU', ipa: '[sɔw]', sl: 'substantiivi, maskuliini' },
    'hotel': { fi: 'hotelli', aa: 'o-TEU', ipa: '[oˈtɛw]', sl: 'substantiivi, maskuliini' }
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat lukea portugalin sanoja ääneen yhdeksän ääntämissäännön avulla.</li>
  <li>Osaat tervehtiä, kertoa nimesi ja mistä olet kotoisin.</li>
  <li>Osaat kiittää oikein: obrigado vai obrigada.</li>
</ul>
<p>Helsinki, Sörnäinen. Maia pitää Jaylle ensimmäisen portugalin tunnin aamiaispöydässä.</p>

<section class="osio">
  <h2>Mistä aloitetaan</h2>
  <p>Tämä oppitunti tulee ennen kirjan ensimmäistä lukua. Se opettaa kaksi asiaa: miten portugalin kirjaimet äännetään ja miten tervehditään. Kun äänteet ovat tuttuja, kirjan ensimmäiset dialogit on helpompi lukea ääneen.</p>
  <div class="huomio">
    <p><b>Tärkein ero suomeen:</b> portugalia ei lausuta niin kuin se kirjoitetaan. Moni kirjain kuulostaa erilaiselta sanan alussa, keskellä ja lopussa. Säännöt alla kattavat suurimman osan tapauksista.</p>
    <p><b>Kaksi ääntämystä:</b> äänitteet ovat Belo Horizonten ääntämystä. Rio de Janeiron ääntämys eroaa lähinnä s- ja r-äänteissä (säännöt 4 ja 5).</p>
  </div>
</section>

<div class="huomio"><p><b>Hakuosassa:</b> ääntämisen yhdeksän sääntöä ja ääntämismerkinnät ovat sivulla <a href="#aantaminen">Ääntäminen</a>, ja kaikki tervehdykset sivulla <a href="#tervehdykset">Tervehdykset</a>. Lue säännöt ennen dialogia ja palaa niihin aina, kun et muista, miten jokin kirjain äännetään.</p></div>


<section class="osio">
  <h2>Dialogi: Bom dia!</h2>
  <p class="ohje">Maia opettaa Jaylle portugalia ja leikkii omaa äitiään Martaa, jonka Jay tapaa jouluna Brasiliassa. Kuuntele ensin koko dialogi ilman suomennoksia. Lue sitten jokainen repliikki ääneen hahmon jälkeen.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Helsinki, aamulla.">Helsinque, de manhã.</p>
    <p class="s" data-h="kertoja" data-fi="Jay ja Maia ovat keittiössä.">Jay e Maia estão na cozinha.</p>
    <p class="s" data-h="maia" data-fi="Hyvää huomenta, Jay! Mitä kuuluu?">Bom dia, Jay! Tudo bem?</p>
    <p class="s" data-h="jay" data-fi="Hyvää huomenta! Hyvää. Entä sinulle?">Bom dia! Tudo bem. E você?</p>
    <p class="s" data-h="maia" data-fi="Hyvää, kiitos. Tänään on portugalin tunti!">Tudo bem, obrigada. Hoje é aula de português!</p>
    <p class="s" data-h="jay" data-fi="Kuinka kivaa!">Que legal!</p>
    <p class="s" data-h="maia" data-fi="Nyt minä olen äitini Marta. Mikä sinun nimesi on?">Agora eu sou a minha mãe, Marta. Como você se chama?</p>
    <p class="s" data-h="jay" data-fi="Nimeni on Jay. Hauska tutustua!">Eu me chamo Jay. Muito prazer!</p>
    <p class="s" data-h="maia" data-fi="Hauska tutustua! Mistä sinä olet kotoisin?">Muito prazer! Você é de onde?</p>
    <p class="s" data-h="jay" data-fi="Olen Suomesta. Kiitos! (naisen muoto)">Eu sou da Finlândia. Obrigada!</p>
    <p class="s" data-h="maia" data-fi="Ei, Jay! Obrigado. Sinä olet mies!">Não, Jay! Obrigado. Você é homem!</p>
    <p class="s" data-h="jay" data-fi="Ai niin… Kiitos!">Ah… Obrigado!</p>
    <p class="s" data-h="kertoja" data-fi="Maia hymyilee.">Maia sorri.</p>
    <p class="s" data-h="maia" data-fi="Hyvä! Hei hei, Jay! Nähdään pian!">Muito bem! Tchau, Jay! Até logo!</p>
    <p class="s" data-h="kertoja" data-fi="Maia lähtee töihin.">Maia vai para o trabalho.</p>
    <p class="s" data-h="jay" data-fi="Hei hei! Nähdään pian!">Tchau! Até logo!</p>
  </div>
</section>

<section class="osio">
  <h2>Kielioppia</h2>

  <h3>Obrigado vai obrigada?</h3>
  <p>Kiitoksen muoto riippuu siitä, kuka kiittää. Mies sanoo aina <span class="pt">obrigado</span> ja nainen aina <span class="pt">obrigada</span>, riippumatta siitä, ketä kiitetään. Sana tarkoittaa alun perin ”kiitollisuudenvelassa oleva”.</p>

  <h3>Você on ”sinä”</h3>
  <p>Brasiliassa tavallinen sinä-sana on <span class="pt">você</span>. Portugalissa ja osassa Brasiliaa käytetään myös sanaa <span class="pt">tu</span>, mutta Belo Horizontessa pärjää hyvin pelkällä <span class="pt">você</span>-sanalla. Puhekielessä se lyhenee usein muotoon <span class="pt">cê</span>. Verbi taipuu <span class="pt">você</span>-sanan kanssa samoin kuin hän-muodossa.</p>

  <h3>Olla-verbi: sou ja é</h3>
  <p>Kotipaikka ja kansallisuus ilmaistaan verbillä <span class="pt">ser</span> (olla). Tässä oppitunnissa tarvitaan kaksi muotoa:</p>
  <ul class="esim">
    <li class="s" data-fi="minä olen">eu sou</li>
    <li class="s" data-fi="sinä olet">você é</li>
  </ul>

  <h3>Eu me chamo: ”minä kutsun itseäni”</h3>
  <p>Portugaliksi nimeä ei ”omisteta” vaan itseä ”kutsutaan” jollakin nimellä. Pikkusana <span class="pt">me</span> tarkoittaa itseäni ja <span class="pt">se</span> itseään tai itseäsi. Ne tulevat verbin eteen.</p>
  <ul class="esim">
    <li class="s" data-fi="minun nimeni on Jay">Eu me chamo Jay.</li>
    <li class="s" data-fi="mikä sinun nimesi on?">Como você se chama?</li>
  </ul>

  <h3>Tervetuloa: bem-vindo, bem-vinda, boas-vindas</h3>
  <p>Myös tervetulotoivotus mukautuu siihen, ketä toivotetaan tervetulleeksi: miehelle <span class="pt">bem-vindo</span>, naiselle <span class="pt">bem-vinda</span>. Kun ei tiedetä tai haluta valita, sanotaan <span class="pt">boas-vindas</span>.</p>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
  <h3>1. Kuuntele ja valitse</h3>
  <p class="ohje">Paina ▶ ja valitse sana, jonka kuulit. Vastauksen jälkeen kuulet valitsemasi sanan.</p>
  <div class="valinta" data-kuuntele="carro" data-oikea="carro">
    <p class="kysymys">Kumpi sana?</p>
    <div class="vaihtoehdot"><button type="button">caro</button><button type="button">carro</button></div>
  </div>
  <div class="valinta" data-kuuntele="tia" data-oikea="tia">
    <p class="kysymys">Kumpi sana?</p>
    <div class="vaihtoehdot"><button type="button">dia</button><button type="button">tia</button></div>
  </div>
  <div class="valinta" data-kuuntele="bem" data-oikea="bem">
    <p class="kysymys">Kumpi sana?</p>
    <div class="vaihtoehdot"><button type="button">bom</button><button type="button">bem</button></div>
  </div>

  </div>
  <div class="tehtava" data-tyyppi="kirjoitus">
  <h3>2. Kumpi kiitos?</h3>
  <div class="valinta" data-oikea="obrigada">
    <p class="kysymys">Maia kiittää Jayta. Mitä Maia sanoo?</p>
    <div class="vaihtoehdot"><button type="button">obrigado</button><button type="button">obrigada</button></div>
  </div>
  <div class="valinta" data-oikea="obrigado">
    <p class="kysymys">Jay kiittää Maiaa. Mitä Jay sanoo?</p>
    <div class="vaihtoehdot"><button type="button">obrigado</button><button type="button">obrigada</button></div>
  </div>

  </div>
  <div class="tehtava" data-tyyppi="kirjoitus">
  <h3>3. Mikä tervehdys?</h3>
  <div class="valinta" data-oikea="boa tarde">
    <p class="kysymys">Kello on 15.00.</p>
    <div class="vaihtoehdot"><button type="button">bom dia</button><button type="button">boa tarde</button><button type="button">boa noite</button></div>
  </div>
  <div class="valinta" data-oikea="boa noite">
    <p class="kysymys">Kello on 21.00.</p>
    <div class="vaihtoehdot"><button type="button">bom dia</button><button type="button">boa tarde</button><button type="button">boa noite</button></div>
  </div>
  <div class="valinta" data-oikea="bom dia">
    <p class="kysymys">Kello on 8.00.</p>
    <div class="vaihtoehdot"><button type="button">bom dia</button><button type="button">boa tarde</button><button type="button">boa noite</button></div>
  </div>

  </div>
  <div class="tehtava" data-tyyppi="keskustelu">
  <h3>4. Mitä vastaat?</h3>
  <p class="ohje">Sano vastaus ääneen ennen kuin avaat sen.</p>
  <details class="vastaus">
    <summary lang="pt-BR">Tudo bem?</summary>
    <p class="s" data-fi="Hyvää, kiitos. Entä sinulle?">Tudo bem, obrigado. E você?</p>
  </details>
  <details class="vastaus">
    <summary lang="pt-BR">Como você se chama?</summary>
    <p class="s" data-puhu="Eu me chamo Jay." data-fi="Nimeni on … (oma nimesi)">Eu me chamo …</p>
  </details>
  <details class="vastaus">
    <summary lang="pt-BR">Você é de onde?</summary>
    <p class="s" data-fi="Olen Suomesta.">Eu sou da Finlândia.</p>
  </details>
  </div>

  <div class="kotitehtava" data-id="l00">
    <h3>Kotitehtävä</h3>
    <p>Kirjoita lyhyt esittäytyminen portugaliksi, ikään kuin tapaisit Maian äidin Martan: tervehdi, kerro nimesi ja mistä olet kotoisin, ja kiitä. Sano se sitten ääneen. Muista: mies sanoo <span class="pt">obrigado</span>, nainen <span class="pt">obrigada</span>.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Hyvää huomenta! Mitä kuuluu?">Bom dia! Tudo bem?</p>
      <p class="s" data-puhu="Eu me chamo Jay." data-fi="Nimeni on … (oma nimesi).">Eu me chamo …</p>
      <p class="s" data-fi="Olen Suomesta. Hauska tutustua!">Eu sou da Finlândia. Muito prazer!</p>
      <p class="s" data-fi="Kiitos!">Obrigado!</p>
    </details>
  </div>
</section>
`
});
