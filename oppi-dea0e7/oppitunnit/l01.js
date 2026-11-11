/* Jakso 1: Videopuhelu Belo Horizonteen. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l01',
  lyhyt: '1',
  jakso: 'Jakso 1',
  otsikko: 'Esittäytyminen: ser ja persoonapronominit',
  lahde: 'Aihe: esittäytyminen, kotipaikka, numerot 0–10 · Kielioppi: ser, persoonapronominit, você / o senhor / a senhora · Ääntäminen: sanapaino',
  aiheet: ['tervehdys', 'ihmiset', 'numerot', 'paikka'],
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi, Jayn tyttöystävä' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, opettelee portugalia' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 1, kuvaus: 'Maian äiti, eläkkeellä oleva sosiaalityöntekijä' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 1, kuvaus: 'Maian isä, eläkkeellä oleva professori' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 2, kuvaus: 'Maian veli' }
  },

  sanasto: [
    'dona', 'seu', 'o senhor', 'a senhora', 'você', 'ele', 'ela', 'nós',
    'a gente', 'vocês', 'eles', 'elas', 'somos', 'são', 'finlandês', 'finlandesa',
    'brasileiro', 'brasileira', 'mineiro', 'desculpa', 'que bom ver você', 'zero', 'quatro', 'cinco',
    'seis', 'sete', 'oito', 'nove', 'dez'
  ],

  sanat: {
    // dialogi
    'horizonte': { fi: 'horisontti', aa: 'o-ri-ZÕ-tsi', ipa: '[oɾiˈzõtʃi]', sl: 'substantiivi, maskuliini', huom: 'alun h on äänetön; Belo Horizonte = kaunis horisontti' },
    'este': { fi: 'tämä (tässä lähellä)', aa: 'ES-tsi', ipa: '[ˈestʃi]', sl: 'osoittava pronomini', huom: 'Brasilian puheessa myös {esse}' },
    'que bom ver você': { fi: 'kiva nähdä sinua', aa: 'KI BÕ VEH vo-SE', ipa: '[ki ˈbõ veh voˈse]', sl: 'ilmaus', huom: 'kirjaimellisesti ”kuinka hyvä nähdä sinut”' },
    'dona': { fi: 'rouva (arkinen kohteliaisuussana naisen etunimen edessä)', aa: 'DÕ-na', ipa: '[ˈdõnɐ]', sl: 'arvonimi, feminiini', huom: 'dona Marta; miehelle {seu}: seu Walker' },
    'seu': { fi: 'sinun; hänen; nimen edessä ”herra” (seu Walker)', aa: 'SEU', ipa: '[sew]', sl: 'omistuspronomini, arvonimi', huom: 'nimen edessä arkinen kohteliaisuussana iäkkäämmälle miehelle, naiselle {dona}' },
    'fala': { fi: 'puhuu, puhut', aa: 'FA-la', ipa: '[ˈfalɐ]', sl: 'verbi', huom: 'perusmuoto {falar}; ”a gente fala” = me puhumme' },
    'falam': { fi: 'puhuvat, puhutte', aa: 'FA-lãu', ipa: '[ˈfalɐ̃w]', sl: 'verbi', huom: 'perusmuoto {falar}; päätteen -am ääntämys on nasaalinen' },
    'o senhor': { fi: 'te, herra (kohtelias sinä, mies)', aa: 'u se-NJOH', ipa: '[u seˈɲoh]', sl: 'kohtelias puhuttelu', huom: 'verbi kuten {ele}: o senhor é; naiselle {a senhora}' },
    'a senhora': { fi: 'te, rouva (kohtelias sinä, nainen)', aa: 'a se-NJO-ra', ipa: '[a seˈɲoɾɐ]', sl: 'kohtelias puhuttelu', huom: 'verbi kuten {ela}: a senhora é; miehelle {o senhor}' },
    'senhor': { fi: 'herra; isäntä', aa: 'se-NJOH', ipa: '[seˈɲoh]', sl: 'substantiivi, maskuliini', huom: 'naiselle {senhora}' },
    'senhora': { fi: 'rouva, nainen (kohtelias)', aa: 'se-NJO-ra', ipa: '[seˈɲoɾɐ]', sl: 'substantiivi, feminiini', huom: 'miehelle {senhor}' },
    'desculpa': { fi: 'anteeksi', aa: 'dis-KUU-pa', ipa: '[dʒisˈkuwpɐ]', sl: 'kohteliaisuus', huom: 'perusmuoto {desculpar}; kohteliaampi {desculpe}' },
    'desculpar': { fi: 'antaa anteeksi; pyytää anteeksi', aa: 'dis-kuu-PAH', ipa: '[dʒiskuwˈpah]', sl: 'verbi, perusmuoto' },
    'mineiro': { fi: 'minasgeraisilainen (mies)', aa: 'mi-NEI-ru', ipa: '[miˈnejɾu]', sl: 'adjektiivi, substantiivi, maskuliini', huom: 'Minas Geraisin osavaltiosta; naiselle {mineira}' },
    'mineira': { fi: 'minasgeraisilainen (nainen)', aa: 'mi-NEI-ra', ipa: '[miˈnejɾɐ]', sl: 'adjektiivi, substantiivi, feminiini', huom: 'miehelle {mineiro}' },
    'sou': { fi: '(minä) olen', aa: 'SOU', ipa: '[sow]', sl: 'verbi {ser}', huom: 'eu sou' },
    'sei': { fi: '(minä) tiedän; osaan', aa: 'SEI', ipa: '[sej]', sl: 'verbi', huom: 'perusmuoto {saber}; ”Sei, sim!” = Osaan kyllä!' },
    'sabe': { fi: 'tietää, tiedät; osaa, osaat', aa: 'SA-bi', ipa: '[ˈsabi]', sl: 'verbi', huom: 'perusmuoto {saber}' },
    'contar': { fi: 'laskea; kertoa', aa: 'kõ-TAH', ipa: '[kõˈtah]', sl: 'verbi, perusmuoto', huom: 'contar até dez = laskea kymmeneen' },
    'em português': { fi: 'portugaliksi', aa: 'ẽi poh-tu-GES', ipa: '[ẽj pohtuˈɡes]', sl: 'ilmaus' },
    'o meu pai': { fi: 'isäni', aa: 'u MEU PAI', ipa: '[u ˈmew paj]', sl: 'ilmaus', huom: 'omistussanan edessä on usein artikkeli' },
    'de belo horizonte': { fi: 'Belo Horizontesta', aa: 'di BE-lu o-ri-ZÕ-tsi', ipa: '[dʒi ˈbɛlu oɾiˈzõtʃi]', sl: 'ilmaus', huom: 'kaupungin nimen edessä ei ole artikkelia' },
    'aqui': { fi: 'täällä, tässä', aa: 'a-KI', ipa: '[aˈki]', sl: 'adverbi', huom: 'Brasiliassa ”aqui a gente fala…” = täällä sanotaan…' },

    // henkilöpronominit ja olla-verbi
    'ela': { fi: 'hän (nainen); se', aa: 'E-la', ipa: '[ˈɛlɐ]', sl: 'persoonapronomini', huom: 'mies {ele}; ela on avoin e (E), ele suljettu e (E-li)' },
    'nós': { fi: 'me', aa: 'NOS', ipa: '[nɔs]', sl: 'persoonapronomini', huom: 'puhekielessä usein {a gente}' },
    'vocês': { fi: 'te', aa: 'vo-SES', ipa: '[voˈses]', sl: 'persoonapronomini, monikko', huom: 'yksikkö {você}' },
    'eles': { fi: 'he (miehet tai sekaryhmä)', aa: 'E-lis', ipa: '[ˈelis]', sl: 'persoonapronomini, monikko', huom: 'naiset {elas}' },
    'elas': { fi: 'he (vain naisia)', aa: 'E-las', ipa: '[ˈɛlɐs]', sl: 'persoonapronomini, monikko', huom: 'miehet ja sekaryhmä {eles}' },
    'somos': { fi: '(me) olemme', aa: 'SO-mus', ipa: '[ˈsomus]', sl: 'verbi {ser}', huom: 'nós somos' },
    'são': { fi: '(he, te) ovat, olette', aa: 'SÃU', ipa: '[sɐ̃w]', sl: 'verbi {ser}', huom: 'vocês são, eles são; nasaalinen, vrt. {sou}' },
    'eu e a maia': { fi: 'minä ja Maia', aa: 'EU i a MAI-a', ipa: '[ew i a ˈmaja]', sl: 'ilmaus', huom: 'me = {nós}' },
    'finlandês': { fi: 'suomalainen (mies); suomen kieli', aa: 'fĩ-lã-DES', ipa: '[fĩlɐ̃ˈdes]', sl: 'adjektiivi, substantiivi, maskuliini', huom: 'naiselle {finlandesa}; ei isoa alkukirjainta' },
    'finlandesa': { fi: 'suomalainen (nainen)', aa: 'fĩ-lã-DE-za', ipa: '[fĩlɐ̃ˈdezɐ]', sl: 'adjektiivi, substantiivi, feminiini', huom: 'miehelle {finlandês}' },
    'brasileiro': { fi: 'brasilialainen (mies)', aa: 'bra-zi-LEI-ru', ipa: '[bɾaziˈlejɾu]', sl: 'adjektiivi, substantiivi, maskuliini', huom: 'naiselle {brasileira}' },
    'brasileira': { fi: 'brasilialainen (nainen)', aa: 'bra-zi-LEI-ra', ipa: '[bɾaziˈlejɾɐ]', sl: 'adjektiivi, substantiivi, feminiini', huom: 'miehelle {brasileiro}' },
    'portuguesa': { fi: 'portugalilainen (nainen)', aa: 'poh-tu-GE-za', ipa: '[pohtuˈɡezɐ]', sl: 'adjektiivi, substantiivi, feminiini', huom: 'miehelle {português}' },
    'geólogo': { fi: 'geologi (mies)', aa: 'zhe-O-lo-gu', ipa: '[ʒeˈɔloɡu]', sl: 'substantiivi, maskuliini', huom: 'naiselle {geóloga}' },
    'geóloga': { fi: 'geologi (nainen)', aa: 'zhe-O-lo-ga', ipa: '[ʒeˈɔloɡɐ]', sl: 'substantiivi, feminiini', huom: 'miehelle {geólogo}' },
    'brasileiros': { fi: 'brasilialaiset (miehet tai sekaryhmä)', aa: 'bra-zi-LEI-rus', ipa: '[bɾaziˈlejɾus]', sl: 'adjektiivi, substantiivi, maskuliini, monikko', huom: 'yksikkö {brasileiro}' },
    'amiga': { fi: 'ystävä (nainen)', aa: 'a-MI-ga', ipa: '[aˈmiɡɐ]', sl: 'substantiivi, feminiini', huom: 'mies {amigo}' },
    'geólogos': { fi: 'geologit (miehet tai sekaryhmä)', aa: 'zhe-O-lo-gus', ipa: '[ʒeˈɔloɡus]', sl: 'substantiivi, maskuliini, monikko' },
    'ele é': { fi: 'hän on', aa: 'E-li E', ipa: '[ˈeli ɛ]', sl: 'ilmaus' },
    'eu sou da finlândia': { fi: 'olen Suomesta', aa: 'EU SOU da fĩ-LÃ-dja', ipa: '[ew ˈsow da fĩˈlɐ̃dʒjɐ]', sl: 'ilmaus' },
    'do brasil': { fi: 'Brasiliasta', aa: 'du bra-ZIU', ipa: '[du bɾaˈziw]', sl: 'ilmaus', huom: '{do} = {de} + {o}; Brasil-sanan edessä on artikkeli' },
    'do': { fi: '-sta, -stä (maskuliinisanan edellä)', aa: 'du', ipa: '[du]', sl: 'prepositio + artikkeli', huom: '{de} + {o}' },
    'usted': { kieli: 'es', fi: 'espanjan kohtelias sinä', aa: 'us-TED', ipa: '[usˈted]', sl: 'espanjaa' },

    // numerot
    'zero': { fi: 'nolla', aa: 'ZE-ru', ipa: '[ˈzɛɾu]', sl: 'lukusana', huom: 'myös substantiivi, maskuliini' },
    'uma': { fi: 'yksi; eräs (feminiinisanan edellä)', aa: 'Ũ-ma', ipa: '[ˈũmɐ]', sl: 'lukusana, artikkeli, feminiini', huom: 'maskuliini {um}' },
    'duas': { fi: 'kaksi (feminiinisanan edellä)', aa: 'DU-as', ipa: '[ˈduɐs]', sl: 'lukusana, feminiini', huom: 'maskuliini {dois}' },
    'quatro': { fi: 'neljä', aa: 'KUA-tru', ipa: '[ˈkwatɾu]', sl: 'lukusana' },
    'cinco': { fi: 'viisi', aa: 'SĨ-ku', ipa: '[ˈsĩku]', sl: 'lukusana' },
    'seis': { fi: 'kuusi', aa: 'SEIS', ipa: '[sejs]', sl: 'lukusana', huom: 'Riossa SEISH' },
    'sete': { fi: 'seitsemän', aa: 'SE-tsi', ipa: '[ˈsɛtʃi]', sl: 'lukusana' },
    'oito': { fi: 'kahdeksan', aa: 'OI-tu', ipa: '[ˈojtu]', sl: 'lukusana' },
    'nove': { fi: 'yhdeksän', aa: 'NO-vi', ipa: '[ˈnɔvi]', sl: 'lukusana' },
    'dez': { fi: 'kymmenen', aa: 'DES', ipa: '[dɛs]', sl: 'lukusana', huom: 'Riossa DEISH' },
    'o número': { fi: 'numero', aa: 'u NU-me-ru', ipa: '[u ˈnumeɾu]', sl: 'ilmaus' },

    // ääntäminen ja esimerkit
    'falar': { fi: 'puhua', aa: 'fa-LAH', ipa: '[faˈlah]', sl: 'verbi, perusmuoto', huom: 'loppu -r: paino viimeisellä tavulla' },
    'número': { fi: 'numero, luku', aa: 'NU-me-ru', ipa: '[ˈnumeɾu]', sl: 'substantiivi, maskuliini', huom: 'paino kolmanneksi viimeisellä tavulla, siksi aksentti' },
    'sábado': { fi: 'lauantai', aa: 'SA-ba-du', ipa: '[ˈsabadu]', sl: 'substantiivi, maskuliini', huom: 'paino kolmanneksi viimeisellä tavulla, siksi aksentti' },
    'maçã': { fi: 'omena', aa: 'ma-SÃ', ipa: '[maˈsɐ̃]', sl: 'substantiivi, feminiini', huom: 'ç = s; ã-päätteinen sana: paino viimeisellä tavulla' },
    'paulo': { fi: 'Paulo (miehen nimi)', aa: 'PAU-lu', ipa: '[ˈpawlu]', sl: 'etunimi' },
    'rapaz': { fi: 'poika, nuori mies', aa: 'ha-PAS', ipa: '[haˈpas]', sl: 'substantiivi, maskuliini', huom: 'loppu -z: paino viimeisellä tavulla' },
    'jovem': { fi: 'nuori', aa: 'ZHO-vẽi', ipa: '[ˈʒovẽj]', sl: 'adjektiivi, substantiivi', huom: 'loppu -em: paino toiseksi viimeisellä tavulla' },

    // ficha do aluno (lukutehtävä ja kotitehtävä)
    'ficha': { fi: 'lomake, kortti', aa: 'FI-sha', ipa: '[ˈfiʃɐ]', sl: 'substantiivi, feminiini' },
    'aluno': { fi: 'oppilas, opiskelija (mies)', aa: 'a-LU-nu', ipa: '[aˈlunu]', sl: 'substantiivi, maskuliini', huom: 'nainen: aluna' },
    'ficha do aluno': { fi: 'oppilaan tietolomake', aa: 'FI-sha du a-LU-nu', ipa: '[ˈfiʃɐ du aˈlunu]', sl: 'ilmaus', huom: '{ficha} + {do} + {aluno}' },
    'nacionalidade': { fi: 'kansalaisuus', aa: 'na-sio-na-li-DA-di', ipa: '[nasjonaliˈdadʒi]', sl: 'substantiivi, feminiini' },
    'idioma': { fi: 'kieli (puhuttu kieli)', aa: 'i-di-O-ma', ipa: '[idʒiˈomɐ]', sl: 'substantiivi, maskuliini', huom: 'maskuliini, vaikka loppuu a:han: o idioma' },
    'idiomas': { fi: 'kielet', aa: 'i-di-O-mas', ipa: '[idʒiˈomɐs]', sl: 'monikko sanasta {idioma}' },

    // kulttuuri
    'apelido': { fi: 'lempinimi', aa: 'a-pe-LI-du', ipa: '[apeˈlidu]', sl: 'substantiivi, maskuliini', huom: 'ansa: espanjaksi apellido on sukunimi' },
    'sobrenome': { fi: 'sukunimi', aa: 'so-bri-NO-mi', ipa: '[sobɾiˈnomi]', sl: 'substantiivi, maskuliini' }
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat esittäytyä ja kysyä toisen nimeä sekä kotipaikkaa.</li>
  <li>Osaat taivuttaa verbin <span class="pt">ser</span> (olla) kaikissa persoonissa.</li>
  <li>Osaat valita oikean sinä-sanan: <span class="pt">você</span>, <span class="pt">o senhor</span> tai <span class="pt">a senhora</span>.</li>
  <li>Osaat laskea nollasta kymmeneen ja asettaa painon oikealle tavulle.</li>
</ul>
<p data-paikka="kallio-hameentie-ilta">Helsinki, Sörnäinen, sateinen lokakuun ilta. Jay ja Maia istuvat sohvalla. Kohta Maian perhe soittaa videopuhelun Belo Horizontesta, ja Jay tapaa Maian vanhemmat ensimmäistä kertaa. Jay on harjoitellut koko viikon.</p>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Dialogi: Muito prazer!</h2>
  <p class="ohje">Kuuntele ensin koko dialogi ilman suomennoksia. Jay tekee virheen espanjan vaikutuksesta: huomaatko missä? Käytä sitten roolileikkiä ja puhu Jayn repliikit ääneen.</p>
  <div class="videopuhelu" data-dialogi="l01-dialogi" data-soittaja="Família da Maia" data-heidan="marta,walker,anderson" data-meidan="jay,maia"
       data-heidan-tausta="belo-horizonte-panoraama" data-meidan-tausta="kallio-hameentie-ilta"
       data-heidan-aika="Belo Horizonte · 14:00" data-meidan-aika="Helsinque · 20:00"></div>
  <p class="ohje">Helsingissä on ilta (<span class="pt">boa noite</span>), Belo Horizontessa iltapäivä (<span class="pt">boa tarde</span>). Aikaero on Suomen kesäaikana 6 tuntia ja talvella 5 tuntia, koska Brasiliassa ei ole kesäaikaa.</p>
  <div class="kpl" id="l01-dialogi" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Helsinki, ilta. Jay ja Maia puhuvat Maian perheen kanssa.">Helsinque, de noite. Jay e Maia falam com a família da Maia.</p>
    <p class="s" data-h="maia" data-fi="Hei, äiti! Hei, isä! Tässä on Jay.">Oi, mãe! Oi, pai! Este é o Jay.</p>
    <p class="s" data-h="marta" data-fi="Hei, Jay! Kiva nähdä sinua!">Oi, Jay! Que bom ver você!</p>
    <p class="s" data-h="jay" data-fi="Hauska tutustua, rouva Marta! Nimeni on Jay.">Muito prazer, dona Marta! Eu me chamo Jay.</p>
    <p class="s" data-h="marta" data-fi="Hauska tutustua, Jay! Minä olen Maian äiti.">Muito prazer, Jay! Eu sou a mãe da Maia.</p>
    <p class="s" data-h="walker" data-fi="Ja minä olen Walker, Maian isä. Mistä sinä olet kotoisin, Jay?">E eu sou o Walker, o pai da Maia. Você é de onde, Jay?</p>
    <p class="s" data-h="jay" data-hairio="tu → você" data-fi="Hauska tutustua, herra Walker! Olen Suomesta. Entä sinä?">Muito prazer, seu Walker! Eu sou da Finlândia. E tu?</p>
    <p class="s" data-h="maia" data-fi="Jay! Täällä sanotaan ”você”, ei ”tu”. Ja isälleni sanotaan ”o senhor”.">Jay! Aqui a gente fala você, não tu. E com o meu pai: o senhor.</p>
    <p class="s" data-h="jay" data-fi="Anteeksi! Mistä te olette kotoisin?">Desculpa! E o senhor é de onde?</p>
    <p class="s" data-h="walker" data-fi="Olen Belo Horizontesta. Olen minasgeraisilainen, kuten Maia.">Sou de Belo Horizonte. Sou mineiro, como a Maia.</p>
    <p class="s" data-h="anderson" data-fi="Hei, Jay! Minä olen Anderson. Oletko sinä ystäväni?">Oi, Jay! Eu sou o Anderson. Você é meu amigo?</p>
    <p class="s" data-h="jay" data-fi="Olen kyllä! Hauska tutustua, Anderson!">Sou, sim! Muito prazer, Anderson!</p>
    <p class="s" data-h="marta" data-fi="Jay, osaatko laskea portugaliksi?">Jay, você sabe contar em português?</p>
    <p class="s" data-h="jay" data-fi="Osaan kyllä! Yksi, kaksi, kolme, neljä, viisi, kuusi, seitsemän, kahdeksan, yhdeksän, kymmenen!">Sei, sim! Um, dois, três, quatro, cinco, seis, sete, oito, nove, dez!</p>
    <p class="s" data-h="anderson" data-fi="Hyvin, Jay!">Muito bem, Jay!</p>
    <p class="s" data-h="walker" data-fi="Hienoa, Jay! Hei hei ja nähdään pian!">Muito bem, Jay! Tchau e até logo!</p>
    <p class="s" data-h="jay" data-fi="Hei hei, rouva Marta! Hei hei, herra Walker! Hei hei, Anderson!">Tchau, dona Marta! Tchau, seu Walker! Tchau, Anderson!</p>
    <p class="s" data-h="kertoja" data-fi="Jay hymyilee. Maia myös.">Jay sorri. A Maia também.</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Kuka? Persoonat" data-sanat="eu,você,ele,ela,nós,a gente,vocês,eles,elas,o senhor,a senhora"></div>
  <div class="teema" data-otsikko="Kansalaisuus ja kotiseutu" data-sanat="finlandês,finlandesa,brasileiro,brasileira,mineiro,mineira,português,portuguesa"></div>
  <div class="teema" data-otsikko="Kohteliaat nimitykset" data-sanat="dona,seu,senhor,senhora,desculpa"></div>
</section>

<section class="osio">
  <h2>Numerot 0–10</h2>
  <p>Kuuntele ja toista. Huomaa, että yksi ja kaksi muuttuvat sukuluvun mukaan: <span class="pt">um</span> ja <span class="pt">dois</span> maskuliinisanan edessä, <span class="pt">uma</span> ja <span class="pt">duas</span> feminiinisanan edessä. Muut luvut eivät muutu.</p>
  <ul class="esim">
    <li class="s" data-fi="nolla">zero</li>
    <li class="s" data-fi="yksi">um</li>
    <li class="s" data-fi="kaksi">dois</li>
    <li class="s" data-fi="kolme">três</li>
    <li class="s" data-fi="neljä">quatro</li>
    <li class="s" data-fi="viisi">cinco</li>
    <li class="s" data-fi="kuusi">seis</li>
    <li class="s" data-fi="seitsemän">sete</li>
    <li class="s" data-fi="kahdeksan">oito</li>
    <li class="s" data-fi="yhdeksän">nove</li>
    <li class="s" data-fi="kymmenen">dez</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> <span class="pt">seis</span> (6) kuulostaa melkein samalta kuin suomen ”seis”, ja <span class="pt">sete</span> (7) alkaa s-äänteellä kuten suomen ”seitsemän”. Kun luet puhelinnumeron, sano numerot yksi kerrallaan: <span class="pt">quatro, zero, cinco</span>.</p>
  </div>
  <p>Espanjasta tuttuja ovat <span class="pt">seis</span> ja <span class="pt">cinco</span> sekä (aksentilla) <span class="pt">três</span>. Varo kuitenkin neljää: <i lang="es">cuatro</i> on portugaliksi <span class="pt">quatro</span>, <i lang="es">siete</i> on <span class="pt">sete</span>, <i lang="es">ocho</i> on <span class="pt">oito</span> ja <i lang="es">nueve</i> on <span class="pt">nove</span>. Näissä sanoissa portugalissa ei ole espanjan diftongia (ue, ie).</p>
</section>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>Kielioppi</h2>

  <h3>1. Persoonapronominit</h3>
  <p>Persoonapronomini kertoo, kuka tekee. Portugalissa on kahdeksan perussanaa. Huomaa, että <span class="pt">você</span> ja <span class="pt">vocês</span> otetaan verbin kanssa kuin hän ja he.</p>
  <table class="taivutus">
    <tr><td>minä</td><td>eu</td></tr>
    <tr><td>sinä</td><td>você</td></tr>
    <tr><td>hän (mies)</td><td>ele</td></tr>
    <tr><td>hän (nainen)</td><td>ela</td></tr>
    <tr><td>me</td><td>nós</td></tr>
    <tr><td>me (puhekieli)</td><td>a gente</td></tr>
    <tr><td>te</td><td>vocês</td></tr>
    <tr><td>he (miehet tai sekaryhmä)</td><td>eles</td></tr>
    <tr><td>he (vain naisia)</td><td>elas</td></tr>
  </table>
  <div class="muista">
    <p><b>Muista:</b> Suomen ”hän” ei kerro sukupuolta, mutta portugalissa pitää valita: <span class="pt">ele</span> on mies ja <span class="pt">ela</span> on nainen. Samat sanat tarkoittavat myös esinettä: ”se”.</p>
  </div>
  <p>Puhekielessä <span class="pt">a gente</span> tarkoittaa ”me” ja korvaa usein sanan <span class="pt">nós</span>. Se näyttää kielioppiopilta yksikköltä (a gente + hän-muoto), vaikka tarkoittaa monta ihmistä: <span class="pt">a gente é</span> = me olemme.</p>

  <h3>2. Verbi ser (olla)</h3>
  <p><span class="pt">Ser</span> on perusmuoto eli verbi sellaisena kuin se on sanakirjassa. Sitä käytetään, kun kerrotaan, kuka tai mikä joku on: nimi, kansalaisuus, kotipaikka, ammatti. <span class="pt">Ser</span> on epäsäännöllinen verbi: muodot pitää opetella ulkoa.</p>
  <table class="taivutus">
    <tr><td>minä olen</td><td>eu sou</td></tr>
    <tr><td>sinä olet</td><td>você é</td></tr>
    <tr><td>hän on</td><td>ele é / ela é</td></tr>
    <tr><td>me olemme</td><td>nós somos / a gente é</td></tr>
    <tr><td>te olette</td><td>vocês são</td></tr>
    <tr><td>he ovat</td><td>eles são / elas são</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Minä olen Suomesta.">Eu sou da Finlândia.</li>
    <li class="s" data-fi="Hän (Maia) on brasilialainen.">Ela é brasileira.</li>
    <li class="s" data-fi="Hän (Jay) on suomalainen.">Ele é finlandês.</li>
    <li class="s" data-fi="Me olemme geologeja. (Minä ja Maia.)">Eu e a Maia somos geólogos.</li>
    <li class="s" data-fi="Mistä te olette?">Vocês são de onde?</li>
    <li class="s" data-fi="He ovat Belo Horizontesta.">Eles são de Belo Horizonte.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> Hän-muoto ja sinä-muoto ovat samat: <span class="pt">ele é</span>, <span class="pt">ela é</span>, <span class="pt">você é</span>. Siksi portugalissa pronomini sanotaan useammin kuin espanjassa tai suomessa. Muuten sen voi jättää pois: <span class="pt">Sou da Finlândia.</span> riittää.</p>
  </div>

  <h3>3. Kysymys, vastaus ja kieltäminen</h3>
  <p>Kyllä-ei-kysymys on sama lause kuin väite, mutta ääni nousee lopussa (kirjoitettuna kysymysmerkki). Suomen kysymyspäätettä -ko/-kö ei ole. Vastaa toistamalla verbi: <span class="pt">Você é brasileiro? Sou, sim.</span> Kieltäminen: <span class="pt">não</span> tulee verbin eteen.</p>
  <ul class="esim">
    <li class="s" data-fi="Oletko sinä Belo Horizontesta?">Você é de Belo Horizonte?</li>
    <li class="s" data-fi="Olen kyllä.">Sou, sim.</li>
    <li class="s" data-fi="Minä en ole brasilialainen.">Eu não sou brasileiro.</li>
    <li class="s" data-fi="Ei, minä olen suomalainen.">Não, eu sou finlandês.</li>
  </ul>

  <h3>4. Mistä olet: ser de</h3>
  <p>Kotipaikka ilmaistaan rakenteella <span class="pt">ser de</span> + paikka. Kaupunkien nimien edessä ei ole artikkelia, maiden nimien edessä on useimmiten: <span class="pt">de Helsinque</span>, <span class="pt">da Finlândia</span> (<span class="pt">de</span> + <span class="pt">a</span>), <span class="pt">do Brasil</span> (<span class="pt">de</span> + <span class="pt">o</span>). Näitä yhdistelmiä selitetään lisää jaksossa 3.</p>
  <ul class="esim">
    <li class="s" data-fi="Olen Helsingistä.">Eu sou de Helsinque.</li>
    <li class="s" data-fi="Olen Suomesta.">Eu sou da Finlândia.</li>
    <li class="s" data-fi="Hän on Brasiliasta.">Ele é do Brasil.</li>
  </ul>

  <h3>5. Kansalaisuus: mies ja nainen</h3>
  <p>Kansalaisuutta ilmaiseva sana (adjektiivi) taipuu sukuun. Miehestä sanotaan <span class="pt">finlandês</span> ja naisesta <span class="pt">finlandesa</span>. Useimmat -o-loppuiset sanat vaihtavat o:n a:ksi: <span class="pt">brasileiro</span> – <span class="pt">brasileira</span>, <span class="pt">mineiro</span> – <span class="pt">mineira</span>. Kansalaisuudet kirjoitetaan pienellä alkukirjaimella.</p>
  <ul class="esim">
    <li class="s" data-fi="Jay on suomalainen.">O Jay é finlandês.</li>
    <li class="s" data-fi="Maia on brasilialainen.">A Maia é brasileira.</li>
    <li class="s" data-fi="Walker on minasgeraisilainen.">O Walker é mineiro.</li>
    <li class="s" data-fi="Marta on minasgeraisilainen.">A Marta é mineira.</li>
  </ul>

  <h3>6. Você, o senhor, a senhora</h3>
  <p>Brasiliassa tavallinen ”sinä” on <span class="pt">você</span>. Se sopii ystäville, työtovereille ja nuorille. Kohteliaampi muoto iäkkäälle tai tuntemattomalle ihmiselle on <span class="pt">o senhor</span> (mies) tai <span class="pt">a senhora</span> (nainen). Verbi on kummassakin hän-muodossa: <span class="pt">o senhor é</span>, <span class="pt">a senhora é</span>.</p>
  <ul class="esim">
    <li class="s" data-fi="Sinä olet suomalainen. (ystävälle)">Você é finlandês.</li>
    <li class="s" data-fi="Te olette minasgeraisilainen. (iäkkäälle miehelle)">O senhor é mineiro.</li>
    <li class="s" data-fi="Te olette brasilialainen. (iäkkäälle naiselle)">A senhora é brasileira.</li>
  </ul>
  <p>Kun puhuttelet vanhempaa ihmistä, voit liittää etunimeen sanan <span class="pt">dona</span> (naiselle) tai <span class="pt">seu</span> (miehelle): <span class="pt">dona Marta</span>, <span class="pt">seu Walker</span>. Se on lämmin ja kohtelias tapa ilman sukunimeä.</p>

  <h3>Vertailu espanjaan</h3>
  <p>Espanjan <i lang="es">tú</i> on portugalin <span class="pt">tu</span>, mutta Brasiliassa ja Belo Horizontessa sanotaan <span class="pt">você</span>. Jayn virhe dialogissa on juuri tämä. Espanjan kohtelias <i lang="es">usted</i> vastaa muotoa <span class="pt">o senhor</span> / <span class="pt">a senhora</span>.</p>
  <table class="taivutus">
    <tr><td>espanja</td><td>portugali (Brasilia)</td></tr>
    <tr><td>yo soy</td><td>eu sou</td></tr>
    <tr><td>tú eres</td><td>você é</td></tr>
    <tr><td>él, ella es</td><td>ele, ela é</td></tr>
    <tr><td>nosotros somos</td><td>nós somos</td></tr>
    <tr><td>ustedes son</td><td>vocês são</td></tr>
    <tr><td>ellos, ellas son</td><td>eles, elas são</td></tr>
  </table>
  <div class="muista">
    <p><b>Muista:</b> espanjan <i lang="es">es</i> = <span class="pt">é</span> (kirjoitetaan aksentilla, ääntyy avoin e), <i lang="es">soy</i> = <span class="pt">sou</span>, <i lang="es">son</i> = <span class="pt">são</span>. <span class="pt">Somos</span> on molemmissa samanlainen. Espanjan <i lang="es">y</i> (ja) on portugaliksi <span class="pt">e</span>.</p>
  </div>
</section>

<section class="osio">
  <h2>Ääntäminen: sanapaino</h2>
  <p>Suomessa paino on aina sanan ensimmäisellä tavulla. Portugalissa paino vaihtelee, ja sen voi usein päätellä sanan lopusta. Painollinen tavu on lausuttava selvästi voimakkaammin ja pidempään. Ääntämisohjeessa se on kirjoitettu isoilla kirjaimilla.</p>

  <div class="saanto">
    <h3>1. Loppu a, e, o (myös -s, -m, -ns perässä): paino toiseksi viimeisellä tavulla</h3>
    <ul class="esim">
      <li class="s">casa</li>
      <li class="s">obrigado</li>
      <li class="s">amigo</li>
      <li class="s">jovem</li>
      <li class="s">falam</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>2. Loppu i, u, l, r, z (myös -im, -um, -ão ja -ã): paino viimeisellä tavulla</h3>
    <ul class="esim">
      <li class="s">Brasil</li>
      <li class="s">senhor</li>
      <li class="s">falar</li>
      <li class="s">feliz</li>
      <li class="s">rapaz</li>
      <li class="s">aqui</li>
      <li class="s">maçã</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>3. Aksenttimerkki kertoo painon</h3>
    <p>Jos sanassa on aksentti (á, é, í, ó, ú, â, ê, ô) tai tilde (ã, õ), paino on aina sillä tavulla. Silloin sääntö 1 tai 2 ei päde. Siksi <span class="pt">número</span> ja <span class="pt">sábado</span> painottuvat kolmanneksi viimeiselle tavulle.</p>
    <ul class="esim">
      <li class="s">você</li>
      <li class="s">português</li>
      <li class="s">finlandês</li>
      <li class="s">número</li>
      <li class="s">sábado</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>4. Diftongi on yksi tavu</h3>
    <p>Diftongi on kaksi vokaalia samalla tavulla (au, ei, eu, oi, ui). Se lasketaan yhdeksi tavuksi, kun paino päätellään. Siksi <span class="pt">Paulo</span> on PAU-lu ja <span class="pt">brasileiro</span> bra-zi-LEI-ru.</p>
    <ul class="esim">
      <li class="s">Paulo</li>
      <li class="s">brasileiro</li>
      <li class="s">muito</li>
    </ul>
  </div>

  <div class="huomio">
    <p><b>Suomalaisen sudenkuoppa:</b> älä paina viimeisiä tavuja liian heikosti ja ensimmäistä liian kovaa. Sanat <span class="pt">falar</span>, <span class="pt">senhor</span> ja <span class="pt">Brasil</span> eivät ole FA-lar, SEN-hor tai BRA-sil: paino on lopussa.</p>
  </div>
</section>

<aside class="kulttuuri" data-paikka="mercado-central-entrada">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Brasilialaiset nimet ja lempinimet</h3>
  <figure class="kuva" data-kuva="mercado-central-entrada">
    <span class="huuto" data-x="22" data-y="30" data-aani="mies" data-vaihto="7" data-fi="José">Zé!</span>
    <span class="huuto" data-x="47" data-y="13" data-aani="mies" data-vaihto="7" data-fi="Francisco">Chico!</span>
    <span class="huuto" data-x="76" data-y="24" data-aani="nainen" data-vaihto="5" data-fi="Marta das Graças">Gracinha!</span>
    <span class="huuto" data-x="12" data-y="48" data-aani="nainen" data-vaihto="5" data-fi="Ana">Aninha!</span>
    <span class="huuto" data-x="60" data-y="40" data-aani="mies" data-vaihto="7" data-fi="Sebastião">Tião!</span>
    <span class="huuto" data-x="88" data-y="47" data-aani="mies" data-vaihto="7" data-fi="Pedro">Pedrinho!</span>
  </figure>
  <p>Brasiliassa ihmisellä on usein kaksi etunimeä tai enemmän ja kaksi sukunimeä. Usein äidin sukunimi tulee ensin ja isän sukunimi viimeiseksi. Siksi monen brasilialaisen koko nimi on pitkä, mutta arjessa käytetään yleensä vain etunimeä, usein jopa työpaikalla ja vanhempien ihmisten kanssa. Sukunimeä sanotaan <span class="pt">sobrenome</span>.</p>
  <p>Lempinimi eli <span class="pt">apelido</span> on hyvin yleinen. Moni nimi lyhenee tai saa pienennyspäätteen: <i>José</i> on <i>Zé</i>, <i>Francisco</i> on <i>Chico</i>, <i>Sebastião</i> on <i>Tião</i>, ja pääte <i>-inho</i> tai <i>-inha</i> tekee nimestä lempeän: <i>Pedro</i> on <i>Pedrinho</i>, <i>Ana</i> on <i>Aninha</i>. Maailman tunnetuin brasilialainen jalkapalloilija tunnetaan lempinimellään <i>Pelé</i>, vaikka hänen oikea nimensä on Edson Arantes do Nascimento.</p>
  <p>Lempinimi on espanjan ansa: espanjan <i lang="es">apellido</i> tarkoittaa sukunimeä, mutta portugalin <span class="pt">apelido</span> tarkoittaa lempinimeä.</p>
  <p>Iäkkäämmille ihmisille sanotaan kohteliaasti <span class="pt">dona</span> tai <span class="pt">seu</span> ja etunimi, kuten dialogissa: <span class="pt">dona Marta</span>, <span class="pt">seu Walker</span>. Lääkäriä, asianajajaa ja usein muutakin tohtoria puhutellaan sanalla <i>doutor</i> tai <i>doutora</i>. Jayn tohtorin arvo kelpaa siis myös Brasiliassa.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="sornainen-vaasanaukio">
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Täydennä verbi ser</h3>
    <p class="ohje">Kirjoita verbin <span class="pt">ser</span> oikea muoto: <span class="pt">sou</span>, <span class="pt">é</span>, <span class="pt">somos</span> tai <span class="pt">são</span>.</p>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="sou"></span> da Finlândia.</p>
      <p>Você <span class="aukko" data-oikea="é"></span> de Belo Horizonte?</p>
      <p>A Maia <span class="aukko" data-oikea="é"></span> brasileira.</p>
      <p>Eu e a Maia <span class="aukko" data-oikea="somos"></span> geólogos.</p>
      <p>Vocês <span class="aukko" data-oikea="são"></span> de onde?</p>
      <p>Eles <span class="aukko" data-oikea="são"></span> amigos.</p>
      <p>A gente <span class="aukko" data-oikea="é"></span> da Finlândia.</p>
      <p>A senhora <span class="aukko" data-oikea="é"></span> mineira?</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Yhdistä pronomini ja suomennos</h3>
    <ul class="yhdista">
      <li data-pari="minä">eu</li>
      <li data-pari="sinä">você</li>
      <li data-pari="hän (mies)">ele</li>
      <li data-pari="hän (nainen)">ela</li>
      <li data-pari="me">nós</li>
      <li data-pari="te">vocês</li>
      <li data-pari="he (vain naisia)">elas</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: kuka? Valitse pronomini</h3>
    <p class="ohje">Puhut kuvan ihmisistä. Valitse oikea sana: <span class="pt">ele</span>, <span class="pt">ela</span>, <span class="pt">eles</span> vai <span class="pt">elas</span>? Muista: jos ryhmässä on yksikin mies, sana on <span class="pt">eles</span>.</p>
    <div class="valinta" data-oikea="ele">
      <p class="kysymys"><span class="ryhma" data-hahmot="walker"></span> Walker</p>
      <div class="vaihtoehdot"><button type="button">ele</button><button type="button">ela</button><button type="button">eles</button><button type="button">elas</button></div>
    </div>
    <div class="valinta" data-oikea="ela">
      <p class="kysymys"><span class="ryhma" data-hahmot="marta"></span> Marta</p>
      <div class="vaihtoehdot"><button type="button">ele</button><button type="button">ela</button><button type="button">eles</button><button type="button">elas</button></div>
    </div>
    <div class="valinta" data-oikea="elas">
      <p class="kysymys"><span class="ryhma" data-hahmot="marta,maia"></span> Marta e Maia</p>
      <div class="vaihtoehdot"><button type="button">ele</button><button type="button">ela</button><button type="button">eles</button><button type="button">elas</button></div>
    </div>
    <div class="valinta" data-oikea="eles">
      <p class="kysymys"><span class="ryhma" data-hahmot="walker,anderson"></span> Walker e Anderson</p>
      <div class="vaihtoehdot"><button type="button">ele</button><button type="button">ela</button><button type="button">eles</button><button type="button">elas</button></div>
    </div>
    <div class="valinta" data-oikea="eles">
      <p class="kysymys"><span class="ryhma" data-hahmot="jay,maia"></span> Jay e Maia</p>
      <div class="vaihtoehdot"><button type="button">ele</button><button type="button">ela</button><button type="button">eles</button><button type="button">elas</button></div>
    </div>
    <div class="valinta" data-oikea="ele">
      <p class="kysymys"><span class="ryhma" data-hahmot="anderson"></span> Anderson</p>
      <div class="vaihtoehdot"><button type="button">ele</button><button type="button">ela</button><button type="button">eles</button><button type="button">elas</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Sinuttelu vai teitittely?</h3>
    <p class="ohje">Valitse, miten puhuttelet henkilöä.</p>
    <div class="valinta" data-oikea="você">
      <p class="kysymys">Jay puhuttelee Maiaa, tyttöystäväänsä.</p>
      <div class="vaihtoehdot"><button type="button">você</button><button type="button">o senhor</button><button type="button">a senhora</button></div>
    </div>
    <div class="valinta" data-oikea="o senhor">
      <p class="kysymys">Jay puhuttelee Walkeria, Maian isää.</p>
      <div class="vaihtoehdot"><button type="button">você</button><button type="button">o senhor</button><button type="button">a senhora</button></div>
    </div>
    <div class="valinta" data-oikea="a senhora">
      <p class="kysymys">Jay puhuttelee Martaa, Maian äitiä.</p>
      <div class="vaihtoehdot"><button type="button">você</button><button type="button">o senhor</button><button type="button">a senhora</button></div>
    </div>
    <div class="valinta" data-oikea="você">
      <p class="kysymys">Marta puhuttelee Jayta, nuorta vierasta, joka on jo melkein perheenjäsen.</p>
      <div class="vaihtoehdot"><button type="button">você</button><button type="button">o senhor</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Kuuntele ja valitse luku</h3>
    <p class="ohje">Paina ▶ ja valitse luku, jonka kuulit.</p>
    <div class="valinta" data-kuuntele="sete" data-oikea="sete">
      <p class="kysymys">Mikä luku?</p>
      <div class="vaihtoehdot"><button type="button">seis</button><button type="button">sete</button><button type="button">oito</button></div>
    </div>
    <div class="valinta" data-kuuntele="nove" data-oikea="nove">
      <p class="kysymys">Mikä luku?</p>
      <div class="vaihtoehdot"><button type="button">nove</button><button type="button">dois</button><button type="button">dez</button></div>
    </div>
    <div class="valinta" data-kuuntele="quatro" data-oikea="quatro">
      <p class="kysymys">Mikä luku?</p>
      <div class="vaihtoehdot"><button type="button">três</button><button type="button">quatro</button><button type="button">cinco</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>Puhelintehtävä: näppäile Jayn numero</h3>
    <p class="ohje">Marta haluaa Jayn puhelinnumeron. Maia lukee sen numero kerrallaan. Paina ▶, kuuntele ja näppäile numero. Jokaisessa näppäimessä on numeron nimi portugaliksi, ja näppäin sanoo sen ääneen.</p>
    <div class="nappaimisto" data-h="maia" data-numero="40 765 4321" data-puhu="Quatro, zero. Sete, seis, cinco. Quatro, três, dois, um." data-nimet="zero,um,dois,três,quatro,cinco,seis,sete,oito,nove"></div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita. Kirjoita luvut sanoilla, ei numeroilla.</p>
    <div class="sanelu" data-puhu="Eu sou da Finlândia."></div>
    <div class="sanelu" data-puhu="Muito prazer, dona Marta!"></div>
    <div class="sanelu" data-puhu="Quatro, zero, cinco, sete."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Mikä tavu painottuu?</h3>
    <p class="ohje">Napsauta painollista tavua. Kuulet sanan ja näet oikean vastauksen.</p>
    <p><span class="paino" data-tavut="se|nhor" data-oikea="2"></span> <span class="paino" data-tavut="fin|lan|dês" data-oikea="3"></span> <span class="paino" data-tavut="bra|si|lei|ro" data-oikea="3"></span> <span class="paino" data-tavut="Bra|sil" data-oikea="2"></span> <span class="paino" data-tavut="mi|nei|ra" data-oikea="2"></span> <span class="paino" data-tavut="vo|cê" data-oikea="2"></span> <span class="paino" data-tavut="nú|me|ro" data-oikea="1"></span> <span class="paino" data-tavut="do|min|go" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Minä olen Suomesta.</p><p class="s" data-fi="Minä olen Suomesta.">Eu sou da Finlândia.</p></div>
    <div class="kaanna"><p class="fi">Hän (Maia) on brasilialainen.</p><p class="s" data-fi="Hän on brasilialainen.">Ela é brasileira.</p></div>
    <div class="kaanna"><p class="fi">Me olemme ystäviä.</p><p class="s" data-fi="Me olemme ystäviä.">Nós somos amigos.</p></div>
    <div class="kaanna"><p class="fi">Oletko sinä Belo Horizontesta?</p><p class="s" data-fi="Oletko sinä Belo Horizontesta?">Você é de Belo Horizonte?</p></div>
    <div class="kaanna"><p class="fi">He eivät ole brasilialaisia.</p><p class="s" data-fi="He eivät ole brasilialaisia.">Eles não são brasileiros.</p></div>
    <div class="kaanna"><p class="fi">Mistä te olette?</p><p class="s" data-fi="Mistä te olette?">De onde vocês são?</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin. Mallit ovat Jayn vastauksia.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Como você se chama?</summary>
      <p class="s" data-puhu="Eu me chamo Jay." data-fi="Nimeni on … (oma nimesi).">Eu me chamo Jay.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você é de onde?</summary>
      <p class="s" data-fi="Olen Suomesta, Helsingistä.">Eu sou da Finlândia, de Helsinque.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você é brasileiro?</summary>
      <p class="s" data-fi="En ole. Olen suomalainen.">Não, eu sou finlandês.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você sabe contar em português?</summary>
      <p class="s" data-fi="Osaan kyllä! Yksi, kaksi, kolme…">Sei, sim! Um, dois, três…</p>
    </details>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>9. Lue Maian lomake</h3>
    <p class="ohje">Maia aloittaa Jayn portugalin tunnit ja täyttää hänestä oppilaskortin. Lue kortti ja vastaa kysymyksiin.</p>
    <div class="dokumentti ficha" lang="pt-BR">
      <div class="ficha-yla"><span class="ficha-koulu">Escola da Maia</span><span class="ficha-otsikko">Ficha do aluno</span></div>
      <div class="ficha-foto" data-hahmo="jay"></div>
      <dl>
        <dt>Nome</dt><dd>Jay</dd>
        <dt>Apelido</dt><dd>o Finlandês</dd>
        <dt>Nacionalidade</dt><dd>finlandês</dd>
        <dt>Cidade</dt><dd>Helsinque</dd>
        <dt>Profissão</dt><dd>geólogo</dd>
        <dt>Idiomas</dt><dd>finlandês, inglês, espanhol (um pouco)</dd>
        <dt>Telefone</dt><dd>+358 40 765 4321</dd>
        <dt>Professora</dt><dd>Maia</dd>
      </dl>
      <p class="ficha-huom">Aluno simpático. Fala espanhol, não português!</p>
    </div>
    <div class="valinta" data-oikea="da Finlândia">
      <p class="kysymys">O Jay é de onde?</p>
      <div class="vaihtoehdot"><button type="button">de Belo Horizonte</button><button type="button">da Finlândia</button><button type="button">da Espanha</button></div>
    </div>
    <div class="valinta" data-oikea="geólogo">
      <p class="kysymys">O Jay é…</p>
      <div class="vaihtoehdot"><button type="button">professor</button><button type="button">geólogo</button><button type="button">brasileiro</button></div>
    </div>
    <div class="valinta" data-oikea="a Maia">
      <p class="kysymys">Quem é a professora?</p>
      <div class="vaihtoehdot"><button type="button">a Marta</button><button type="button">a Maia</button><button type="button">o Anderson</button></div>
    </div>
    <div class="valinta" data-oikea="o Finlandês">
      <p class="kysymys">Qual é o apelido do Jay?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">o Finlandês</button><button type="button">Helsinque</button></div>
    </div>
    <p class="ohje">Huomaa sana <span class="pt">apelido</span>: se on lempinimi, ei sukunimi (sukunimi on <span class="pt">sobrenome</span>).</p>
  </div>

  <div class="kotitehtava" data-id="l01">
    <h3>Kotitehtävä</h3>
    <p><b>1.</b> Täytä oma <span class="pt">ficha do aluno</span> samoilla kohdilla kuin Maian kortissa: <span class="pt">nome</span>, <span class="pt">apelido</span>, <span class="pt">nacionalidade</span>, <span class="pt">cidade</span>, <span class="pt">profissão</span>, <span class="pt">idiomas</span>. Kirjoita suoraan korttiin: se tallentuu tähän selaimeen.</p>
    <div class="dokumentti ficha oma" data-tallenna="l01-ficha" lang="pt-BR">
      <div class="ficha-yla"><span class="ficha-koulu">Escola da Maia</span><span class="ficha-otsikko">Ficha do aluno</span></div>
      <div class="ficha-foto tyhja">sua foto</div>
      <dl>
        <dt>Nome</dt><dd><input name="nome" aria-label="Nome (nimi)"></dd>
        <dt>Apelido</dt><dd><input name="apelido" aria-label="Apelido (lempinimi)"></dd>
        <dt>Nacionalidade</dt><dd><input name="nacionalidade" aria-label="Nacionalidade (kansalaisuus)"></dd>
        <dt>Cidade</dt><dd><input name="cidade" aria-label="Cidade (kaupunki)"></dd>
        <dt>Profissão</dt><dd><input name="profissao" aria-label="Profissão (ammatti)"></dd>
        <dt>Idiomas</dt><dd><input name="idiomas" aria-label="Idiomas (kielet)"></dd>
      </dl>
    </div>
    <p><b>2.</b> Kirjoita viisi lausetta, joilla esittelet itsesi ja yhden ystäväsi Maian perheelle: tervehdi, kerro nimesi, mistä olet, mistä ystäväsi on, ja lopuksi sano puhelinnumerosi kolme viimeistä numeroa sanoilla. Sano teksti sitten ääneen. Muista valita oikea sana: mies sanoo <span class="pt">obrigado</span>, nainen <span class="pt">obrigada</span>.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Hyvää päivää, rouva Marta! Hauska tutustua.">Boa tarde, dona Marta! Muito prazer.</p>
      <p class="s" data-puhu="Eu me chamo Jay." data-fi="Nimeni on … (oma nimesi).">Eu me chamo …</p>
      <p class="s" data-fi="Olen Suomesta, Helsingistä.">Eu sou da Finlândia, de Helsinque.</p>
      <p class="s" data-fi="Ystäväni on Maia. Hän on brasilialainen, Belo Horizontesta.">A minha amiga é a Maia. Ela é brasileira, de Belo Horizonte.</p>
      <p class="s" data-fi="Numeroni on neljä, nolla, viisi.">O meu número é quatro, zero, cinco.</p>
    </details>
  </div>
</section>
`
});
