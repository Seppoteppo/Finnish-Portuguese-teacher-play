/* Kertaus 16–20: koko tarina, perfekti ja imperfekti, epäsäännölliset perfektit, adverbit ja espanjan ansat.
   Oma materiaali, ei kirjan tekstiä. Ääntämisohjeet noudattavat Belo Horizonten ääntämystä.
   Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'k04',
  lyhyt: 'K4',
  jakso: 'Kertaus 16–20',
  otsikko: 'Kertaus 16–20: perfekti ja imperfekti',
  lahde: 'Kertaus: perfekti, imperfekti, adverbit, -íssimo, kuvailu, kehonosat · Itsearvio',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geologi ja opettaja' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geologi, nyt jo melkein sujuva' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 1, kuvaus: 'Maian äiti' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 1, kuvaus: 'Maian isä' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 2, kuvaus: 'Maian veli, naapuruston postinjakaja' }
  },

  aiheet: ['ajattelu', 'aika', 'ihmiset', 'toiminta'],

  sanasto: [
    'aprender', 'conhecer', 'visitar', 'avisar', 'traduzir', 'parabéns', 'gentil', 'de novo', 'de vez em quando',
    'ainda', 'sempre', 'nunca', 'devagar', 'muitíssimo', 'dói', 'esquisito', 'largo', 'pronto', 'iba', 'ia', 'costas'
  ],

  sanat: {
    'ótima': { fi: 'erinomainen, mahtava (feminiini)', aa: 'O-tsi-ma', ipa: '[ˈɔtʃimɐ]', sl: 'adjektiivi', huom: 'maskuliini {ótimo}' },
    'visitou': { fi: 'vieraili, kävi', aa: 'vi-zi-TOU', ipa: '[viziˈtow]', sl: 'verbi {visitar}, perfekti' },
    'expliquei': { fi: 'selitin', aa: 'es-pli-KEI', ipa: '[espliˈkej]', sl: 'verbi {explicar}, perfekti', huom: 'c muuttuu qu:ksi ennen e:tä' },
    'dizia': { fi: 'sanoin (tapana); sanoi (tapana)', aa: 'di-ZI-a', ipa: '[dʒiˈziɐ]', sl: 'verbi {dizer}, imperfekti' },
    'entreguei': { fi: 'jaoin, toimitin', aa: 'ẽ-tre-GEI', ipa: '[ẽtɾeˈɡej]', sl: 'verbi {entregar}, perfekti', huom: 'g muuttuu gu:ksi ennen e:tä' },
    'ha': { fi: 'hah (nauru)', aa: 'HA', ipa: '[ha]', sl: 'huudahdus', huom: '”ha ha” = hah hah' },
    // <<SANAT
    'começou': { fi: 'alkoi', aa: 'ko-me-SOU', ipa: '[komeˈsow]', sl: 'verbi, perfekti', huom: 'perusmuoto {começar}' },
    'trabalhavam': { fi: 'työskentelivät', aa: 'tra-ba-LJA-vãu', ipa: '[tɾabaˈʎavɐ̃w]', sl: 'verbi, imperfekti', huom: 'perusmuoto {trabalhar}' },
    'queriam': { fi: 'halusivat', aa: 'ke-RI-ãu', ipa: '[keˈɾiɐ̃w]', sl: 'verbi, imperfekti', huom: 'perusmuoto {querer}' },
    'querem': { fi: 'haluavat', aa: 'KE-rẽi', ipa: '[ˈkɛɾẽj]', sl: 'verbi', huom: 'perusmuoto {querer}' },
    'aprender': { fi: 'oppia', aa: 'a-prẽ-DEH', ipa: '[apɾẽˈdeh]', sl: 'verbi, perusmuoto' },
    'aprendeu': { fi: 'oppi', aa: 'a-prẽ-DEU', ipa: '[apɾẽˈdew]', sl: 'verbi, perfekti', huom: 'perusmuoto aprender' },
    'aprendi': { fi: 'opin', aa: 'a-prẽ-DI', ipa: '[apɾẽˈdʒi]', sl: 'verbi, perfekti', huom: 'perusmuoto aprender' },
    'palavras': { fi: 'sanat', aa: 'pa-LA-vras', ipa: '[paˈlavɾɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {palavra}' },
    'básicas': { fi: 'perus- (feminiinin monikko)', aa: 'BA-zi-kas', ipa: '[ˈbazikɐs]', sl: 'adjektiivi, monikko', huom: 'palavras básicas = perussanat' },
    'videochamadas': { fi: 'videopuhelut', aa: 'vi-dju-sha-MA-das', ipa: '[vidʒjoʃaˈmadɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {videochamada}' },
    'ajudou': { fi: 'auttoi', aa: 'a-zhu-DOU', ipa: '[aʒuˈdow]', sl: 'verbi, perfekti', huom: 'perusmuoto {ajudar}' },
    'compraram': { fi: 'ostivat', aa: 'kõ-PRA-rãu', ipa: '[kõˈpɾaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {comprar}' },
    'conheceu': { fi: 'tutustui; tapasi', aa: 'ko-nje-SEU', ipa: '[koɲeˈsew]', sl: 'verbi, perfekti', huom: 'perusmuoto {conhecer}' },
    'visitar': { fi: 'vierailla, käydä (paikassa)', aa: 'vi-zi-TAH', ipa: '[viziˈtah]', sl: 'verbi, perusmuoto' },
    'visitaram': { fi: 'vierailivat', aa: 'vi-zi-TA-rãu', ipa: '[viziˈtaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto visitar' },
    'avisar': { fi: 'ilmoittaa, varoittaa', aa: 'a-vi-ZAH', ipa: '[aviˈzah]', sl: 'verbi, perusmuoto' },
    'avisou': { fi: 'ilmoitti, varoitti', aa: 'a-vi-ZOU', ipa: '[aviˈzow]', sl: 'verbi, perfekti', huom: 'perusmuoto avisar' },
    'voltaram': { fi: 'palasivat', aa: 'vou-TA-rãu', ipa: '[vowˈtaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {voltar}' },
    'nadaram': { fi: 'uivat', aa: 'na-DA-rãu', ipa: '[naˈdaɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto {nadar}' },
    'traduzir': { fi: 'kääntää, tulkata', aa: 'tra-du-ZIH', ipa: '[tɾaduˈzih]', sl: 'verbi, perusmuoto' },
    'traduzia': { fi: 'tulkkasi (tapa)', aa: 'tra-du-ZI-a', ipa: '[tɾaduˈziɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto traduzir' },
    'erra': { fi: 'erehtyy', aa: 'E-ha', ipa: '[ˈɛhɐ]', sl: 'verbi', huom: 'perusmuoto {errar}' },
    'de vez em quando': { fi: 'silloin tällöin', aa: 'di VES ẽi KUÃ-du', ipa: '[dʒi ves ẽj ˈkwɐ̃du]', sl: 'ilmaus' },
    'acordei': { fi: 'heräsin', aa: 'a-koh-DEI', ipa: '[akohˈdej]', sl: 'verbi, perfekti', huom: 'perusmuoto {acordar}; espanjan-ansa: acordar = herätä' },
    'acordou': { fi: 'heräsi', aa: 'a-koh-DOU', ipa: '[akohˈdow]', sl: 'verbi, perfekti', huom: 'perusmuoto {acordar}' },
    'descrever': { fi: 'kuvailla', aa: 'dis-kre-VEH', ipa: '[dʒiskɾeˈveh]', sl: 'verbi, perusmuoto' },
    'riu': { fi: 'nauroi', aa: 'HIU', ipa: '[hiw]', sl: 'verbi, perfekti', huom: 'perusmuoto rir' },
    'promete': { fi: 'lupaat; lupaa', aa: 'pro-ME-tsi', ipa: '[pɾoˈmɛtʃi]', sl: 'verbi', huom: 'perusmuoto prometer' },
    'sabia': { fi: 'tiesi, osasi', aa: 'sa-BI-a', ipa: '[saˈbiɐ]', sl: 'verbi, imperfekti', huom: 'perusmuoto {saber}' },
    'cumprimentar': { fi: 'tervehtiä', aa: 'kũ-pri-mẽ-TAH', ipa: '[kũpɾimẽˈtah]', sl: 'verbi, perusmuoto' },
    'divertido': { fi: 'hauska', aa: 'di-veh-TSI-du', ipa: '[dʒivehˈtʃidu]', sl: 'adjektiivi' },
    'engraçadíssimos': { fi: 'aivan hillittömän hauskat', aa: 'ẽ-gra-sa-DI-si-mus', ipa: '[ẽɡɾasaˈdʒisimus]', sl: 'adjektiivi, monikko', huom: '{engraçado} + -íssimo' },
    'imperfeito': { fi: 'imperfekti', aa: 'ĩ-peh-FEI-tu', ipa: '[ĩpehˈfejtu]', sl: 'substantiivi, maskuliini' },
    'entendo': { fi: 'ymmärrän', aa: 'ẽ-TẼ-du', ipa: '[ẽˈtẽdu]', sl: 'verbi', huom: 'perusmuoto {entender}' },
    'gracias': { fi: 'kiitos (espanjaa)', aa: 'GRA-sjas', ipa: '[ˈɡɾasjas]', sl: 'espanjaa', huom: 'portugaliksi {obrigado} tai {obrigada}' },
    'parti': { fi: 'lähdin', aa: 'pah-TSI', ipa: '[pahˈtʃi]', sl: 'verbi, perfekti', huom: 'perusmuoto partir' },
    'partiu': { fi: 'lähti', aa: 'pah-TSIU', ipa: '[pahˈtʃiw]', sl: 'verbi, perfekti', huom: 'perusmuoto partir' },
    'partimos': { fi: 'lähdimme', aa: 'pah-TSĨ-mus', ipa: '[pahˈtʃĩmus]', sl: 'verbi, perfekti', huom: 'perusmuoto partir' },
    'partiram': { fi: 'lähtivät', aa: 'pah-TSI-rãu', ipa: '[pahˈtʃiɾɐ̃w]', sl: 'verbi, perfekti', huom: 'perusmuoto partir' }
    // SANAT>>
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kertoa menneestä sekä perfektillä (tapahtuma) että imperfektillä (tapa ja tausta).</li>
  <li>Osaat kuvailla ihmisen, kertoa mihin sattuu ja käyttää adverbeja, <b>-íssimo</b>, <span class="pt">mesmo</span> ja <span class="pt">outro</span>.</li>
  <li>Tunnet espanjan tärkeimmät ansat: <span class="pt">esquisito</span>, <span class="pt">largo</span>, <span class="pt">pronto</span>, <span class="pt">contigo</span>, <span class="pt">iba</span>.</li>
  <li>Voit arvioida itse, mitä alkeiskurssista on jo hallussa.</li>
</ul>
<p data-paikka="helsinki-syksy">Tämä on alkeiskurssin viimeinen kertaus. Ensin kertoja kertoo koko tarinan alusta loppuun, sitten Jay ja Maia keskustelevat syksyisessä Helsingissä.</p>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>Tarina alusta loppuun</h2>
  <p class="ohje">Kuuntele ensin koko tarina ilman suomennoksia. Kertoja kertoo sen perfektillä ja imperfektillä: kun jokin tapahtui, hän käyttää perfektiä, kun hän kuvaa taustaa tai tapaa, imperfektiä. Etsi muodot.</p>
  <div class="kpl" data-nimi="Kuuntele kertojan tarina">
    <p class="s" data-h="kertoja" data-fi="Kaikki alkoi Helsingissä, Sörnäisten kaupunginosassa.">Tudo começou em Helsinque, no bairro de Sörnäinen.</p>
    <p class="s" data-paikka="otaniemi-aalto" data-h="kertoja" data-fi="Jay ja Maia olivat geologeja ja työskentelivät yhdessä.">O Jay e a Maia eram geólogos e trabalhavam juntos.</p>
    <p class="s" data-h="kertoja" data-fi="Maia oli Brasiliasta ja halusi opettaa portugalia Jaylle.">A Maia era do Brasil e queria ensinar português pro Jay.</p>
    <p class="s" data-h="kertoja" data-fi="He halusivat viettää joulun Belo Horizontessa Maian perheen kanssa.">Eles queriam passar o Natal em Belo Horizonte com a família da Maia.</p>
    <p class="s" data-h="kertoja" data-fi="Ensin Jay oppi perussanat: tudo bem, obrigado, por favor.">Primeiro, o Jay aprendeu as palavras básicas: tudo bem, obrigado, por favor.</p>
    <p class="s" data-paikka="helsingin-kaupunginosat" data-h="kertoja" data-fi="Hän soitti videopuheluita Maian perheelle ja auttoi äitiään Purjoa löytämään asunnon.">Ele fez videochamadas com a família da Maia e ajudou a mãe, a Purjo, a achar um apartamento.</p>
    <p class="s" data-paikka="helsinki-vantaa" data-h="kertoja" data-fi="He ostivat lahjoja, pakkasivat laukut ja lensivät Belo Horizonteen.">Eles compraram presentes, fizeram as malas e foram de avião pra Belo Horizonte.</p>
    <p class="s" data-paikka="natal-bh" data-h="kertoja" data-fi="Brasiliassa joulu oli kesällä, ja oli kuuma!">No Brasil, o Natal era no verão, e fazia calor!</p>
    <p class="s" data-paikka="bh-bairro" data-h="kertoja" data-fi="Jay tapasi Walkerin, Martan ja Andersonin. Hän tutustui myös Maian ystäviin: Marinaan, Mateukseen, Mirelaan ja Muriloon.">O Jay conheceu o Walker, a Marta e o Anderson. Também conheceu os amigos da Maia: a Marina, o Mateus, a Mirela e o Murilo.</p>
    <p class="s" data-paikka="festa-rua" data-h="kertoja" data-fi="Korttelijuhlissa Walker soitti huuliharppua koko yön, ja Jay joi liikaa.">Na festa da rua, o Walker tocou gaita de boca a noite inteira, e o Jay bebeu demais.</p>
    <p class="s" data-paikka="favela" data-h="kertoja" data-fi="Jay sanoi ”esquisito” väärälle miehelle, ja Marcus vei Jayn Morro do Cascalholle.">O Jay disse “esquisito” pro homem errado, e o Marcus levou o Jay pro Morro do Cascalho.</p>
    <p class="s" data-h="kertoja" data-fi="Anderson näki Jayn ikkunassa ja kertoi kaikille. Ystävät nousivat mäelle ja pelastivat Jayn.">O Anderson viu o Jay na janela e avisou todo mundo. Os amigos subiram o morro e salvaram o Jay.</p>
    <p class="s" data-paikka="ouro-preto" data-h="kertoja" data-fi="Sen jälkeen he kävivät Ouro Pretossa ja Inhotimissa, ja Jay ja Maia palasivat Suomeen.">Depois, eles visitaram Ouro Preto e Inhotim, e o Jay e a Maia voltaram pra Finlândia.</p>
    <p class="s" data-paikka="korppoo" data-h="kertoja" data-fi="Seuraavana kesänä Maian perhe tuli Suomeen. He viipyivät Korppoossa ja Hangossa, kävivät saunassa ja uivat meressä.">No verão seguinte, a família da Maia foi pra Finlândia. Eles ficaram em Korppoo e em Hanko, foram à sauna e nadaram no mar.</p>
    <p class="s" data-paikka="hanko" data-h="kertoja" data-fi="Jay puhui portugalia Martan ja Walkerin kanssa ja tulkkasi Purjolle ja Kouvoselle.">O Jay falava português com a Marta e o Walker, e traduzia pra Purjo e pro Kouvonen.</p>
    <p class="s" data-paikka="helsinki-syksy" data-h="kertoja" data-fi="Nyt Jay puhuu jo aika paljon, mutta erehtyy vielä silloin tällöin!">Agora o Jay já fala bastante, mas ainda erra de vez em quando!</p>
    <p class="s" data-h="kertoja" data-fi="Entä sinä? Sinäkin olet oppinut paljon. Onnea!">E você? Você também aprendeu muito. Parabéns!</p>
  </div>
</section>

<section class="osio" data-paikka="helsinki-syksy">
  <h2>Videopuhelu: eilen illalla</h2>
  <p class="ohje">Vuosi on kulunut. Eilen illalla Maian perhe soitti Belo Horizontesta, aivan kuten ensimmäisellä oppitunnilla. Nyt Jay ymmärtää melkein kaiken! Kuuntele puhelu ilman suomennoksia. Yksi espanjan sana pääsee vielä livahtamaan: kuuletko sen?</p>
  <div class="videopuhelu" data-dialogi="k04-puhelu" data-soittaja="Família da Maia" data-heidan="marta,walker,anderson" data-meidan="jay,maia"
       data-heidan-tausta="bh-bairro" data-meidan-tausta="helsinki-syksy"
       data-heidan-aika="Belo Horizonte · 15:00" data-meidan-aika="Helsinque · 21:00"></div>
  <div class="kpl" id="k04-puhelu" data-nimi="Kuuntele puhelu">
    <p class="s" data-h="marta" data-fi="Hei, lapset! Kuinka ikävä! Millainen viikko oli?">Oi, filhos! Que saudade! Como foi a semana?</p>
    <p class="s" data-h="maia" data-fi="Se oli mahtava, äiti! Jay puhui portugalia töissä.">Foi ótima, mãe! O Jay falou português no trabalho.</p>
    <p class="s" data-h="jay" data-fi="Puhuin! Brasilialainen geologi vieraili RRC:llä, ja minä selitin kaiken portugaliksi.">Falei! Um geólogo brasileiro visitou o RRC, e eu expliquei tudo em português.</p>
    <p class="s" data-h="walker" data-fi="Onneksi olkoon, Jay! Viime vuonna et puhunut mitään!">Parabéns, Jay! No ano passado você não falava nada!</p>
    <p class="s" data-h="jay" data-fi="Totta. Viime vuonna sanoin ”pero” koko ajan.">É verdade. No ano passado eu dizia “pero” o tempo todo.</p>
    <p class="s" data-h="anderson" data-fi="Jay! Eilen minä jaoin sata kirjettä!">Jay! Ontem eu entreguei cem cartas!</p>
    <p class="s" data-h="jay" data-fi="Sata kirjettä! Olet Belo Horizonten paras postinkantaja, Anderson.">Cem cartas! Você é o melhor carteiro de Belo Horizonte, Anderson.</p>
    <p class="s" data-h="marta" data-fi="Voi, kuinka suloista! Tein sinulle kakun, Jay.">Ai, que amor! Eu fiz um bolo pra você, Jay.</p>
    <p class="s" data-h="jay" data-hairio="gracias → obrigado" data-fi="Kiitos, rouva Marta! (väärin: espanjaa)">¡Gracias, dona Marta!</p>
    <p class="s" data-h="marta" data-fi="Hah hah! Ole hyvä, poikani!">Ha ha! De nada, meu filho!</p>
  </div>
</section>

<section class="osio" data-paikka="helsinki-syksy">
  <h2>Dialogi: Um ano depois</h2>
  <p class="ohje">Syksyllä Sörnäisten keittiössä. Jay on oppinut paljon, mutta yksi vanha tapa on yhä tallella. Etsi, mitä Maia sanoo siitä.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Syksy Helsingissä. Jay ja Maia ovat keittiössä Sörnäisissä.">Outono, em Helsinque. O Jay e a Maia estão na cozinha, em Sörnäinen.</p>
    <p class="s" data-h="maia" data-fi="Huomenta, Jay! Mitä kuuluu? Tänään ei ole portugalin tuntia.">Bom dia, Jay! Tudo bem? Hoje não tem aula de português.</p>
    <p class="s" data-h="jay" data-fi="Eikö ole? Mutta minä heräsin jo kahdeksalta!">Não tem? Mas eu acordei às oito!</p>
    <p class="s" data-h="maia" data-fi="Onnea! Heräsit aikaisin ensimmäistä kertaa.">Parabéns! Você acordou cedo pela primeira vez.</p>
    <p class="s" data-h="jay" data-fi="Minä opin paljon vuodessa. Osaan sanoa ”obrigado” ilman virheitä.">Eu aprendi muita coisa em um ano. Eu sei dizer “obrigado” sem errar.</p>
    <p class="s" data-h="maia" data-fi="Se on totta. Osaat myös laskea, tilata kahvin, kuvailla Marcuksen ja puhua äitini kanssa.">É verdade. Você também sabe contar, pedir café, descrever o Marcus e falar com a minha mãe.</p>
    <p class="s" data-h="jay" data-fi="Ja minä en ole sanonut ”esquisito” enää kertaakaan.">E eu nunca mais falei “esquisito”.</p>
    <p class="s" data-h="maia" data-fi="Mutta eilen videopuhelussa sanoit äidilleni ”gracias”!">Mas ontem, na videochamada, você disse “gracias” pra minha mãe!</p>
    <p class="s" data-h="jay" data-fi="Sanoinko? Voi… Nauroiko hän?">Eu disse? Ai… Ela riu?</p>
    <p class="s" data-h="maia" data-fi="Hän nauroi paljon. Sitten hän sanoi: ”Ei kestä, poikani!”">Ela riu muito. Depois ela disse: “De nada, meu filho!”</p>
    <p class="s" data-h="jay" data-fi="Mahtavaa! Perheesi on niin ystävällinen.">Que bom! A sua família é tão gentil.</p>
    <p class="s" data-h="maia" data-fi="He haluavat nähdä meidät taas jouluna.">Eles querem ver a gente no Natal de novo.</p>
    <p class="s" data-h="jay" data-fi="Ihanaa! Tällä kertaa juon vähemmän olutta.">Ótimo! Desta vez eu bebo menos chope.</p>
    <p class="s" data-h="maia" data-fi="Lupaatko?">Promete?</p>
    <p class="s" data-h="jay" data-fi="Lupaan! Tai siis… lupaan juoda vain neljä tuoppia.">Prometo! Quer dizer… eu prometo beber só quatro chopes.</p>
    <p class="s" data-h="kertoja" data-fi="Maia nauroi. Ulkona vuoden ensimmäinen lumi alkoi sataa.">A Maia riu. Lá fora, a primeira neve do ano começou a cair.</p>
  </div>
</section>

<section class="osio">
  <h2>Kertaus: jaksot 16–20 yhdellä silmäyksellä</h2>

  <h3>1. Perfekti ja imperfekti</h3>
  <table class="taivutus">
    <tr><th></th><th>Perfekti: mitä tapahtui</th><th>Imperfekti: millaista oli, mitä oli tapana</th></tr>
    <tr><th><span class="pt">falar</span></th><td><span class="pt">falei, falou, falamos, falaram</span></td><td><span class="pt">falava, falava, falávamos, falavam</span></td></tr>
    <tr><th><span class="pt">comer</span></th><td><span class="pt">comi, comeu, comemos, comeram</span></td><td><span class="pt">comia, comia, comíamos, comiam</span></td></tr>
    <tr><th><span class="pt">partir</span></th><td><span class="pt">parti, partiu, partimos, partiram</span></td><td><span class="pt">partia, partia, partíamos, partiam</span></td></tr>
    <tr><th><span class="pt">ser</span>, <span class="pt">ir</span></th><td><span class="pt">fui, foi, fomos, foram</span></td><td><span class="pt">era, era, éramos, eram</span> (ser) · <span class="pt">ia</span> (ir)</td></tr>
  </table>
  <div class="muista">
    <p><b>Muista:</b> Perfektin epäsäännölliset verbit ovat: <span class="pt">ser/ir</span>, <span class="pt">fazer</span> (<span class="pt">fiz, fez</span>), <span class="pt">ter</span> (<span class="pt">tive, teve</span>), <span class="pt">estar</span> (<span class="pt">estive, esteve</span>), <span class="pt">dizer</span> (<span class="pt">disse</span>), <span class="pt">ver</span> (<span class="pt">vi, viu</span>), <span class="pt">vir</span> (<span class="pt">vim, veio</span>), <span class="pt">dar</span> (<span class="pt">dei, deu</span>), <span class="pt">trazer</span> (<span class="pt">trouxe</span>), <span class="pt">poder</span> (<span class="pt">pude, pôde</span>). Imperfektin epäsäännölliset ovat vain <span class="pt">ser</span> (<span class="pt">era</span>), <span class="pt">ter</span> (<span class="pt">tinha</span>), <span class="pt">vir</span> (<span class="pt">vinha</span>) ja <span class="pt">pôr</span> (<span class="pt">punha</span>).</p>
  </div>
  <ul class="esim">
    <li class="s" data-fi="Kun olin lapsi, uin joka päivä. Eilen uin meressä.">Quando eu era criança, eu nadava todo dia. Ontem eu nadei no mar.</li>
    <li class="s" data-fi="Satoi, kun lähdimme.">Estava chovendo quando a gente saiu.</li>
    <li class="s" data-fi="Yhtäkkiä poliisi pysäytti auton.">De repente, o policial parou o carro.</li>
  </ul>

  <h3>2. Muut tärkeät asiat</h3>
  <table class="taivutus">
    <tr><th>Jakso</th><th>Asia</th><th>Esimerkki</th></tr>
    <tr><td>16</td><td>kanssa-muodot</td><td><span class="pt">comigo, com você, com a gente</span></td></tr>
    <tr><td>17</td><td>viedä ja tuoda</td><td><span class="pt">levar</span> (pois), <span class="pt">trazer</span> (tänne)</td></tr>
    <tr><td>17</td><td>ulkonäkö</td><td><span class="pt">Ele é alto. Ele tem barba. Ele usa óculos.</span></td></tr>
    <tr><td>18</td><td>sama, toinen</td><td><span class="pt">o mesmo, a mesma, outro, outra</span></td></tr>
    <tr><td>18</td><td>sattuminen</td><td><span class="pt">Dói a cabeça. Doem os pés.</span></td></tr>
    <tr><td>19</td><td>adverbi, ei taivu</td><td><span class="pt">devagar, bem, mal, logo, cedo, tarde</span></td></tr>
    <tr><td>19</td><td>vahvistus</td><td><span class="pt">lindíssimo, cansadíssimo, muitíssimo</span></td></tr>
  </table>

  <h3>3. Espanjan ansat jaksoista 16–20</h3>
  <p>Jay teki jokaisessa jaksossa espanjalaisen virheen. Tässä ne kaikki yhdessä:</p>
  <table class="taivutus">
    <tr><th>Jakso</th><th>Espanja</th><th>Portugali</th></tr>
    <tr><td>16</td><td><i>contigo</i> (kanssasi)</td><td><span class="pt">com você</span> (Belo Horizontessa)</td></tr>
    <tr><td>16–17</td><td><i>exquisito</i> (herkullinen)</td><td><span class="pt">esquisito</span> = outo!</td></tr>
    <tr><td>17</td><td><i>largo</i> (pitkä)</td><td><span class="pt">largo</span> = leveä; pitkä = <span class="pt">comprido</span></td></tr>
    <tr><td>18</td><td><i>espalda</i> (selkä)</td><td><span class="pt">costas</span></td></tr>
    <tr><td>18</td><td><i>constipado</i> (flunssainen)</td><td><span class="pt">resfriado</span></td></tr>
    <tr><td>19</td><td><i>pronto</i> (pian)</td><td><span class="pt">logo</span>; <span class="pt">pronto</span> = valmis</td></tr>
    <tr><td>20</td><td><i>iba</i> (meni, kävi)</td><td><span class="pt">ia</span></td></tr>
    <tr><td>kaikki</td><td><i>gracias</i></td><td><span class="pt">obrigado</span>, <span class="pt">obrigada</span></td></tr>
  </table>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>Kuvatehtävä: eilinen videopuhelu</h3>
    <p class="ohje">Muistatko eilisen videopuhelun? Valitse oikea vastaus.</p>
    <div class="valinta" data-oikea="falou português">
      <p class="kysymys"><span class="ryhma" data-hahmot="jay"></span> O que o Jay fez no trabalho?</p>
      <div class="vaihtoehdot"><button type="button">falou português</button><button type="button">dormiu</button><button type="button">fez um bolo</button></div>
    </div>
    <div class="valinta" data-oikea="entregou cem cartas">
      <p class="kysymys"><span class="ryhma" data-hahmot="anderson"></span> O que o Anderson fez ontem?</p>
      <div class="vaihtoehdot"><button type="button">viu O Rei Leão</button><button type="button">entregou cem cartas</button><button type="button">tocou gaita</button></div>
    </div>
    <div class="valinta" data-oikea="dizia">
      <p class="kysymys">No ano passado, o Jay ___ “pero” o tempo todo.</p>
      <div class="vaihtoehdot"><button type="button">disse</button><button type="button">dizia</button><button type="button">diz</button></div>
    </div>
    <div class="valinta" data-oikea="gracias">
      <p class="kysymys">Mikä espanjan sana Jaylta vielä livahti?</p>
      <div class="vaihtoehdot"><button type="button">gracias</button><button type="button">pero</button><button type="button">mucho</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Perfekti vai imperfekti? Kirjoita muoto</h3>
    <p class="ohje">Kirjoita verbi oikeassa muodossa. Mieti, onko kyse tapahtumasta vai taustasta.</p>
    <div class="aukot">
      <p>Quando eu <span class="aukko" data-oikea="era"></span> criança, eu <span class="aukko" data-oikea="nadava"></span> todo dia. (ser, nadar)</p>
      <p>Ontem eu <span class="aukko" data-oikea="fui"></span> à sauna. (ir)</p>
      <p>O Kouvonen <span class="aukko" data-oikea="dirigia"></span> muito rápido quando o policial o <span class="aukko" data-oikea="parou"></span>. (dirigir, parar)</p>
      <p>O Jay <span class="aukko" data-oikea="disse"></span> “esquisito”, e o Marcus <span class="aukko" data-oikea="ficou"></span> bravo. (dizer, ficar)</p>
      <p>O Anderson <span class="aukko" data-oikea="viu"></span> o Jay na janela e <span class="aukko" data-oikea="avisou"></span> todo mundo. (ver, avisar)</p>
      <p>Nós <span class="aukko" data-oikea="fizemos"></span> as malas e <span class="aukko" data-oikea="fomos"></span> pra Belo Horizonte. (fazer, ir)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Mikä muoto sopii?</h3>
    <div class="valinta" data-oikea="tinha">
      <p class="kysymys">Quando eu ___ dez anos, eu morava em Espoo.</p>
      <div class="vaihtoehdot"><button type="button">tinha</button><button type="button">tive</button></div>
    </div>
    <div class="valinta" data-oikea="levaram">
      <p class="kysymys">Os homens ___ o Jay pro morro. (veivät)</p>
      <div class="vaihtoehdot"><button type="button">trouxeram</button><button type="button">levaram</button></div>
    </div>
    <div class="valinta" data-oikea="logo">
      <p class="kysymys">Vamos chegar ___? (pian)</p>
      <div class="vaihtoehdot"><button type="button">pronto</button><button type="button">logo</button></div>
    </div>
    <div class="valinta" data-oikea="com você">
      <p class="kysymys">Quero dançar ___. (kanssasi, Belo Horizonte)</p>
      <div class="vaihtoehdot"><button type="button">contigo</button><button type="button">com você</button></div>
    </div>
    <div class="valinta" data-oikea="costas">
      <p class="kysymys">Dói nas ___. (selkään)</p>
      <div class="vaihtoehdot"><button type="button">espaldas</button><button type="button">costas</button></div>
    </div>
    <div class="valinta" data-oikea="comprido">
      <p class="kysymys">O topete do Marcus é ___. (pitkä)</p>
      <div class="vaihtoehdot"><button type="button">largo</button><button type="button">comprido</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Espanjan ansat</h3>
    <p class="ohje">Yhdistä ansasana ja sen todellinen merkitys portugalissa.</p>
    <ul class="yhdista">
      <li data-pari="outo">esquisito</li>
      <li data-pari="leveä">largo</li>
      <li data-pari="valmis">pronto</li>
      <li data-pari="selkä">costas</li>
      <li data-pari="meni (tapa)">ia</li>
      <li data-pari="kanssasi">com você</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Vahvista adjektiivi</h3>
    <p class="ohje">Kirjoita adjektiivi muodossa -íssimo.</p>
    <div class="aukot">
      <p>cansado → <span class="aukko" data-oikea="cansadíssimo"></span></p>
      <p>lindo → <span class="aukko" data-oikea="lindíssimo"></span></p>
      <p>caro → <span class="aukko" data-oikea="caríssimo"></span></p>
      <p>A casa é alta → A casa é <span class="aukko" data-oikea="altíssima"></span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Kuuntele ja valitse</h3>
    <p class="ohje">Paina ▶ ja valitse, kertooko lause tavasta (imperfekti) vai tapahtumasta (perfekti).</p>
    <div class="valinta" data-kuuntele="Eu brincava na floresta." data-oikea="tapa">
      <p class="kysymys">Tapa vai tapahtuma?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">tapa</button><button type="button">tapahtuma</button></div>
    </div>
    <div class="valinta" data-kuuntele="O Marcus abriu a porta." data-oikea="tapahtuma">
      <p class="kysymys">Tapa vai tapahtuma?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">tapa</button><button type="button">tapahtuma</button></div>
    </div>
    <div class="valinta" data-kuuntele="O céu estava claro." data-oikea="tapa">
      <p class="kysymys">Tapa vai tapahtuma?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">tapa</button><button type="button">tapahtuma</button></div>
    </div>
    <div class="valinta" data-kuuntele="Eu cheguei tarde." data-oikea="tapahtuma">
      <p class="kysymys">Tapa vai tapahtuma?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">tapa</button><button type="button">tapahtuma</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause.</p>
    <div class="sanelu" data-puhu="Eu aprendi muita coisa em um ano."></div>
    <div class="sanelu" data-puhu="O Mateus dirige devagar."></div>
    <div class="sanelu" data-puhu="Dói a cabeça e dói nas costas."></div>
    <div class="sanelu" data-puhu="A gente ia à sauna todo dia."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Minä näin Jayn ja Marcuksen.</p><p class="s" data-fi="Minä näin Jayn ja Marcuksen.">Eu vi o Jay e o Marcus.</p></div>
    <div class="kaanna"><p class="fi">Hän on pitkä, laiha ja hänellä on parta.</p><p class="s" data-fi="Hän on pitkä, laiha ja hänellä on parta.">Ele é alto, magro e tem barba.</p></div>
    <div class="kaanna"><p class="fi">Haluan toisen veden.</p><p class="s" data-fi="Haluan toisen veden.">Eu quero outra água.</p></div>
    <div class="kaanna"><p class="fi">Valitettavasti hän ei tullut.</p><p class="s" data-fi="Valitettavasti hän ei tullut.">Infelizmente, ele não veio.</p></div>
    <div class="kaanna"><p class="fi">Kun olin lapsi, leikin metsässä.</p><p class="s" data-fi="Kun olin lapsi, leikin metsässä.">Quando eu era criança, eu brincava na floresta.</p></div>
    <div class="kaanna"><p class="fi">Kiitos, että tulit kanssani!</p><p class="s" data-fi="Kiitos, että tulit kanssani!">Obrigado por vir comigo!</p></div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>8. Paino</h3>
    <p class="ohje">Napsauta painollista tavua.</p>
    <p><span class="paino" data-tavut="de|va|gar" data-oikea="3"></span> <span class="paino" data-tavut="po|li|ci|al" data-oikea="4"></span> <span class="paino" data-tavut="ca|be|ça" data-oikea="2"></span> <span class="paino" data-tavut="lin|dís|si|mo" data-oikea="2"></span> <span class="paino" data-tavut="cha|lé" data-oikea="2"></span> <span class="paino" data-tavut="bar|ri|ga" data-oikea="2"></span> <span class="paino" data-tavut="fe|liz|men|te" data-oikea="3"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Quem salvou o Jay?</summary>
      <p class="s" data-fi="Anderson ja ystävät pelastivat Jayn.">O Anderson e os amigos salvaram o Jay.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Onde a família da Maia ficou na Finlândia?</summary>
      <p class="s" data-fi="He viipyivät Korppoossa ja Hangossa.">Eles ficaram em Korppoo e em Hanko.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que você fazia quando era criança?</summary>
      <p class="s" data-fi="Minä leikin ja uin joka päivä. (muuta omasi)">Eu brincava e nadava todo dia.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que você fez ontem?</summary>
      <p class="s" data-fi="Minä menin töihin ja tein illallisen. (muuta omasi)">Eu fui ao trabalho e fiz o jantar.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Como é a sua família?</summary>
      <p class="s" data-fi="Minun perheeni on pieni, mutta ystävällinen. (muuta omasi)">A minha família é pequena, mas simpática.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="k04">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="k04-vuosi" lang="pt-BR">
      <div class="kal-yla"><b>Um ano de português</b><small>kirjoita, mitä opit: ennen, nyt ja ensi kerralla</small></div>
      <div class="kal-rivit">
        <label>Antes eu… <input name="ennen" placeholder="Antes eu não falava nada."></label>
        <label>Ontem eu… <input name="eilen" placeholder="Ontem eu li um texto em português."></label>
        <label>Agora eu… <input name="nyt" placeholder="Agora eu sei pedir café e falar do tempo."></label>
        <label>Eu ainda erro… <input name="virheet" placeholder="Eu ainda digo “pero” às vezes."></label>
        <label>No próximo ano… <input name="ensi" placeholder="No próximo ano eu vou ao Brasil!"></label>
      </div>
    </div>
    <p>Kirjoita 6–8 lauseen yhteenveto alkeiskurssistasi: mitä aloitit oppia, mikä oli hauskinta, mikä oli vaikeinta ja mitä haluat tehdä seuraavaksi. Käytä perfektiä (mitä tapahtui), imperfektiä (millaista oli) ja ainakin yhtä adverbia ja yhtä <b>-íssimo</b>-sanaa. Sano teksti ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Aloitin portugalin Helsingissä, kun en osannut sanoa edes kiitos oikein.">Eu comecei o português em Helsinque, e eu não sabia dizer nem “obrigado” direito.</p>
      <p class="s" data-fi="Opin tervehtimään, laskemaan, kuvailemaan ihmisiä ja kertomaan menneestä.">Aprendi a cumprimentar, contar, descrever pessoas e falar do passado.</p>
      <p class="s" data-fi="Hauskinta oli tarina: Marcus ja mikroaaltouuni olivat aivan huvittavia.">O mais divertido foi a história: o Marcus e o micro-ondas foram engraçadíssimos.</p>
      <p class="s" data-fi="Vaikeinta oli imperfekti, koska erottaminen perfektistä vei aikaa.">O mais difícil foi o imperfeito, porque separar do perfeito levou tempo.</p>
      <p class="s" data-fi="Nyt ymmärrän melko paljon, ja puhun joka päivä.">Agora eu entendo bastante, e falo todo dia.</p>
      <p class="s" data-fi="Seuraavaksi haluan matkustaa Belo Horizonteen.">Agora eu quero viajar pra Belo Horizonte.</p>
    </details>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Itsearvio</h2>
  <p class="ohje">Arvioi itseäsi neljällä tasolla: ”En vielä”, ”Vähän”, ”Hyvin” tai ”Erinomaisesti”. Palaa niihin kohtiin, joissa sanoit ”En vielä” tai ”Vähän”, ja tee vastaavan jakson harjoitukset uudelleen.</p>
  <ul class="itsearvio" data-id="k04">
    <li>Osaan kertoa menneestä tapahtumasta säännöllisillä perfekteillä (jakso 16).</li>
    <li>Osaan sanoa ”kanssani” ja ”kanssasi”: <span class="pt">comigo</span>, <span class="pt">com você</span> (jakso 16).</li>
    <li>Osaan yleisimmät epäsäännölliset perfektit: <span class="pt">fui</span>, <span class="pt">fiz</span>, <span class="pt">tive</span>, <span class="pt">disse</span>, <span class="pt">vi</span> (jakso 17).</li>
    <li>Osaan kuvailla ihmisen ulkonäön ja erottaa <span class="pt">levar</span> ja <span class="pt">trazer</span> (jakso 17).</li>
    <li>Osaan kertoa, mihin sattuu, ja nimetä kehonosia (jakso 18).</li>
    <li>Osaan käyttää sanoja <span class="pt">mesmo</span> ja <span class="pt">outro</span> (jakso 18).</li>
    <li>Osaan käyttää adverbeja ja päätettä <b>-íssimo</b> (jakso 19).</li>
    <li>Osaan puhua matkasta ja lentomatkasta (jakso 19).</li>
    <li>Osaan kertoa lapsuudestani imperfektillä (jakso 20).</li>
    <li>Osaan erottaa perfektin ja imperfektin (jaksot 16–20).</li>
    <li>Tunnen espanjan tärkeimmät ansat (<span class="pt">esquisito</span>, <span class="pt">largo</span>, <span class="pt">pronto</span>, <span class="pt">iba</span>).</li>
    <li>Ymmärrän lyhyen portugalinkielisen dialogin ilman suomennosta.</li>
  </ul>
  <div class="muista">
    <p><b>Onnittelut!</b> Olet läpäissyt alkeiskurssin kaikki jaksot. <span class="pt">Parabéns!</span> Jatkossa auttaa eniten kuuntelu ja puhuminen joka päivä, vaikka vain viisi minuuttia: sano lauseita ääneen, käytä ydinsanojen sivua ja palaa tarinan dialogeihin roolileikillä.</p>
  </div>
</section>
`
});
