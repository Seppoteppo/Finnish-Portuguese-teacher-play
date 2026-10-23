/* Tottakai, lição 6: Kuusamon muistot ja Oodi-kirjasto (Passon jakso 6 Maian näkökulmasta). Oma materiaali, ei kirjan
   tekstiä. Kurssisuunnitelma: tottakai/docs/OPPITUNNIT_6_20.md §5 (oppitunti 6). Kaksi osaa omina sivuinaan:
   - osa A (#t06): sunnuntai-ilta Sörnäisissä; dialogi A (16 repliikkiä) Maian puhelimen kuvagallerian äärellä
     (.galleria, tottakai/assets/komponentit.js: pyyhkäistävä galleria, dialogin repliikki data-galleria vie oikeaan
     kuvaan), Frases prontas, sanasto, ääntäminen (täry-r: Maian ”hautaa” ← rautaa), tehtävät 1–3.
   - osa B (#t06-b): lauantai Oodissa; dialogi B (14 repliikkiä: kirjastokortti, syväsukellus Pohjois-Koreaan, Jay
     studioon), lainausautomaatti (.lainausautomaatti: Lainaa / Palauta, kirjojen selkämykset), studio, kielioppi 1–2
     (sisäsijat, illatiivin muodostus, elatiivi ”aiheesta”, kotona/kotoa/kotiin), tehtävät 4–10 (tehtävä 6 katkaisee
     kieliopin 2 illatiivin jälkeen; Habituurin ilmoitus ja Maian hakemus .dokumentti.ficha tehtävässä 8), kulttuuri
     (kirjastot; Kuusamo ja ruska), Na rua, kotitehtävä (oma hakemus), itsearvio.
   Tasapainotus 21.10.2026 (TYONKULKU 12, rajattu uudelleenkirjoitus): ydinsanat tänne, sinne, täältä, minne, joskus,
   kauan, paikka, asia, miten, nähdä; dialogit 16 + 14; sanasto 56 → 38; sivun sanalistat 51 → 20 sanaa.
   Lupaukset oppitunneilta 1–5 lunastetaan: Olen Brasiliasta, Asun Helsingissä, Tervetuloa Suomeen, Hakaniemen
   kauppahallissa, Hesburgeriin, kotona (kappale ”Você já conhecia”, Gramática 1). Ulkosijoja (-lla, -lta, -lle) ei
   käytetä: ne opetetaan oppitunnilla 7 (Ruka vain perusmuodossa). Imperfekti vain fraaseina (olin, menin: lição 13).
   Kaikki puhuvat kirjakieltä; puhekieli vain Na rua -nurkassa. Sivuhahmot: kirjastonhoitaja (Marokosta, nainen 5),
   lainausautomaatti (kuulutusääni mies 8); kasvot tottakai/assets/oppaat.js. */
Kurssi.lisaa({
  id: 't06',
  lyhyt: '6',
  jakso: 'Lição 6',
  otsikko: 'Onde, de onde, para onde: os casos -ssa, -sta e -aan, -oon, -iin…',
  lahde: 'Tema: lembranças de Kuusamo e a biblioteca Oodi · Gramática: casos de lugar “dentro” (-ssa, -sta, ilativo -aan, -oon, -iin…, -han, -hön…, -seen), missä? mistä? mihin?, kotona / kotoa / kotiin, o elativo “sobre” (kirja Pohjois-Koreasta) · Pronúncia: o r vibrante (rauta, não hauta)',
  aiheet: ['paikka', 'liike', 'luonto', 'vapaa'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga e artista; lembra de tudo de Kuusamo' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; lembra das pedras e toca baixo' },
    kirjastonhoitaja: { nimi: 'Bibliotecária', tyyppi: 'nainen', vaihto: 5, kuvaus: 'bibliotecária da Oodi; veio do Marrocos' },
    automaatti: { nimi: 'Máquina', tyyppi: 'mies', vaihto: 8, kuvaus: 'a máquina de empréstimo da Oodi' }
  },

  sanasto: [
    'päästä', 'missä', 'mistä', 'mihin', 'minne', 'kotona',
    'metsä', 'järvi', 'joki', 'poro', 'ruska', 'kivi', 'rauta', 'sauna', 'mökki', 'paikka',
    'muistaa', 'huono', 'tietysti', 'koska', 'joskus', 'kauan',
    'kirjasto', 'kirja', 'kirjastokortti', 'hylly', 'kerros', 'hissi', 'lainata', 'palauttaa', 'ilmainen',
    'studio', 'basso', 'aihe', 'vaikea', 'tärkeä', 'taiteilija', 'taulu', 'hakemus'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · As fotos de Kuusamo',
      html: `
<ul class="tavoitteet">
  <li>Você diz onde algo está, de onde vem e para onde vai: <span class="fi">metsässä, joesta, järveen</span>.</li>
  <li>Você pergunta com <span class="fi">missä?</span> (onde?), <span class="fi">mistä?</span> (de onde?) e <span class="fi">mihin?</span> (para onde?).</li>
  <li>Você pronuncia o <span class="fi pala">r</span> finlandês: <span class="fi">rauta</span> (ferro), não <span class="fi">hauta</span> (túmulo).</li>
  <li>Na parte B: a biblioteca Oodi, o ilativo (<span class="fi">kirjastoon</span>) e o elativo “sobre”: <span class="fi">kirja Pohjois-Koreasta</span>.</li>
</ul>
<p data-paikka="hameentie-marraskuu">Domingo de novembro, quatro da tarde, e já está escuro. No sofá, em Sörnäinen, a Maia acha no celular as fotos de Kuusamo. Em setembro, ela e o Jay passaram uma semana lá em trabalho de campo, procurando pedras. Naquela época eles eram só colegas. Foi lá, entre as pedras e a sauna, que tudo começou. Depois da sauna, a Maia corria para o lago gelado, porque adora água fria; o Jay só entrava porque ela puxava.</p>
<p>Você já usa frases como <span class="fi">Olen Brasiliasta</span> (lição 1), <span class="fi">Tervetuloa Suomeen!</span> (lição 1) e <span class="fi">Hakaniemen kauppahallissa</span> (lição 3). Nesta lição você descobre o sistema que existe por trás delas: o fim da palavra diz onde, de onde e para onde.</p>

<section class="osio" data-paikka="kallio-hameentie-ilta">
  <h2>Diálogo A: <span class="fi">Kuvia Kuusamosta</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Deslize as fotos do celular da Maia com o dedo ou com as setas; quando o diálogo toca, a galeria vai para a foto certa. Repare no fim das palavras: <span class="fi pala">-ssa</span> (onde?), <span class="fi pala">-sta</span> (de onde?) e <span class="fi pala">-aan, -oon, -iin…</span> (para onde?). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="galleria" data-dialogi="t06-dialogi-a" data-otsikko="Galeria · Kuusamo, setembro">
    <figure data-kuva="kuusamo"><p class="s" data-h="maia" data-pt="Em Kuusamo, em setembro.">Kuusamossa, syyskuussa.</p></figure>
    <figure data-piirros="poro"><p class="s" data-h="maia" data-pt="Uma rena na floresta.">Poro metsässä.</p></figure>
    <figure data-piirros="kivi"><p class="s" data-h="maia" data-pt="Uma pedra vermelha do rio.">Punainen kivi joesta.</p></figure>
    <figure data-piirros="sauna"><p class="s" data-h="maia" data-pt="O chalé e a sauna. Na sauna está quente!">Mökki ja sauna. Saunassa on kuuma!</p></figure>
    <figure data-piirros="jarvi"><p class="s" data-h="maia" data-pt="Da sauna para o lago!">Saunasta järveen!</p></figure>
    <figure data-piirros="ruska"><p class="s" data-h="maia" data-pt="A Ruka é um tunturi. A floresta está vermelha e amarela.">Ruka on tunturi. Metsä <span data-l="olla#2">on</span> punainen ja keltainen.</p></figure>
  </div>
  <div class="kpl" id="t06-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="Domingo. A Maia e o Jay estão em casa, em Sörnäinen. Lá fora está escuro.">Sunnuntai. Maia ja Jay <span data-l="olla#2">ovat</span> kotona Sörnäisissä. Ulkona <span data-l="olla#2">on</span> pimeää.</p>
    <p class="s" data-h="maia" data-pt="Jay, vem cá! Eu tenho no celular fotos de Kuusamo.">Jay, tule tänne! Minulla on puhelimessa kuvia Kuusamosta.</p>
    <p class="s" data-h="jay" data-galleria="1" data-pt="De Kuusamo! O trabalho de campo, setembro. Onde é isto?">Kuusamosta! Kenttätyö, syyskuu. Missä tämä <span data-l="olla#2">on</span>?</p>
    <p class="s" data-h="maia" data-galleria="2" data-pt="Em Kuusamo, no parque nacional. E aqui tem uma rena na floresta!">Kuusamossa, kansallispuistossa. Ja tässä on poro metsässä!</p>
    <p class="s" data-h="jay" data-pt="Rena? Não lembro da rena.">Poro? En muista poroa.</p>
    <p class="s" data-h="maia" data-galleria="3" data-pt="Claro que você não lembra. Você tem memória ruim, nerd de pedras. De onde é esta pedra?">Tietysti et muista. Sinulla on huono muisti, kivinörtti. Mistä tämä kivi on?</p>
    <p class="s" data-h="jay" data-pt="Do rio! E agora ela está aqui, na estante.">Joesta! Ja nyt se <span data-l="olla#2">on</span> täällä, hyllyssä.</p>
    <p class="s" data-h="maia" data-hairio="hautaa → rautaa" data-pt="Ela é vermelha porque tem muito “túmulo” dentro. (errado: rautaa = ferro)">Se on punainen, koska siinä on paljon hautaa.</p>
    <p class="s" data-h="jay" data-pt="Túmulo? Na pedra não tem túmulo. Ferro, Maia! R, não h.">Hautaa? Kivessä ei ole hautaa. Rautaa, Maia! <span class="pala">R</span>, ei <span class="pala">h</span>.</p>
    <p class="s" data-h="maia" data-galleria="4" data-pt="Rrrautaa: ferro. E aqui está a sauna. Lembra?"><span class="pala">Rrrautaa</span>. Ja tässä on sauna. Muistatko?</p>
    <p class="s" data-h="jay" data-galleria="5" data-pt="Lembro. E depois, da sauna para o lago. Brr!">Muistan. Ja sitten saunasta järveen. <span class="pala">Brr</span>!</p>
    <p class="s" data-h="maia" data-pt="Eu fui para o lago três vezes! Água fria é uma delícia.">Minä menin järveen kolme kertaa! Kylmä vesi on hyvää.</p>
    <p class="s" data-h="jay" data-pt="E eu fiquei no lago dez segundos. E você ri até hoje!">Minä <span data-l="olla#2">olin</span> järvessä kymmenen sekuntia. Ja sinä naurat vielä!</p>
    <p class="s" data-h="maia" data-galleria="6" data-pt="Olha, a ruska! Kuusamo é um lugar bom. Quero ir para lá de novo.">Katso, ruska! Kuusamo on hyvä paikka. Haluan sinne taas.</p>
    <p class="s" data-h="jay" data-pt="Eu também! Mas no lago eu não fico muito tempo.">Minä myös! Mutta järvessä en ole kauan.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia ri. Na estante está a pedra vermelha de Kuusamo.">Maia nauraa. Hyllyssä on punainen kivi Kuusamosta.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos. Depois do · está a lição em que a gramática vem.</p>
    <ul>
      <li><span class="fi">kuvia Kuusamosta</span> = fotos de Kuusamo · <span class="fi">kuvia</span>, o partitivo plural: lição 11</li>
      <li><span class="fi">Olin järvessä.</span> = eu estava no lago · <span class="fi">Minä menin järveen.</span> = eu fui para o lago · o passado: lição 13</li>
      <li><span class="fi">syyskuussa</span> = em setembro · o <span class="fi pala">-ssa</span> também diz “quando?”: lição 9</li>
      <li><span class="fi">siinä</span> = nela, nisso (<span class="fi">se</span> + <span class="fi pala">-ssa</span>) · as formas de <span class="fi">tämä, tuo, se</span>: lição 8</li>
      <li><span class="fi">Tietysti!</span> = claro! · <span class="fi">koska</span> = porque</li>
      <li><span class="fi">Tule tänne!</span> = vem cá! · <span class="fi">Haluan sinne.</span> = quero ir para lá · <span class="fi">tänne, sinne</span> = para cá, para lá: Gramática 2 desta lição</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="kuusamo">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="Kuusamo: a natureza e as lembranças" data-sanat="metsä,järvi,joki,poro,ruska,kivi,rauta,mökki,sauna,paikka,muistaa,kauan"></div>
  <p>As outras palavras da lição estão no <a href="#t06-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio">
  <h2>Pronúncia: o r vibrante</h2>
  <p>O brasileiro costuma dizer o r do começo da palavra “de garganta”, quase um h. Em finlandês, isso troca a palavra: a Maia queria dizer <span class="fi">rautaa</span> (ferro) e disse <span class="fi">hautaa</span> (túmulo). O <span class="fi pala">r</span> finlandês é sempre da <b>ponta da língua</b>, como o r de “para”, só que vibrado. Truque: diga “pa-ra” e comece a palavra com essa batidinha: <span class="fi pala">r-auta</span>. Ouça os pares; só muda o primeiro som:</p>
  <table class="taivutus">
    <tr><th>com r</th><th>com h</th></tr>
    <tr><td><span class="fi">rauta</span><span class="kaannos" lang="pt-BR">ferro</span></td><td><span class="fi">hauta</span><span class="kaannos" lang="pt-BR">túmulo</span></td></tr>
    <tr><td><span class="fi">riisi</span><span class="kaannos" lang="pt-BR">arroz</span></td><td><span class="fi">Hiisi</span><span class="kaannos" lang="pt-BR">o irmão do Jay</span></td></tr>
    <tr><td><span class="fi">rinta</span><span class="kaannos" lang="pt-BR">peito</span></td><td><span class="fi">hinta</span><span class="kaannos" lang="pt-BR">preço</span></td></tr>
    <tr><td><span class="fi">retki</span><span class="kaannos" lang="pt-BR">passeio</span></td><td><span class="fi">hetki</span><span class="kaannos" lang="pt-BR">momento</span></td></tr>
  </table>
</section>

<section class="osio" data-ei-sivulle data-paikka="kuusamo">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ligue a palavra à tradução</h3>
    <ul class="yhdista">
      <li data-pari="rena">poro</li>
      <li data-pari="floresta">metsä</li>
      <li data-pari="lago">järvi</li>
      <li data-pari="rio">joki</li>
      <li data-pari="pedra">kivi</li>
      <li data-pari="chalé">mökki</li>
      <li data-pari="ferro">rauta</li>
      <li data-pari="cores do outono">ruska</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>2. Onde? De onde? Para onde? Responda pelas fotos</h3>
    <p class="ohje">Olhe a galeria e o diálogo. A pergunta mostra o caso da resposta: <span class="fi">missä?</span> → <span class="fi pala">-ssa</span>, <span class="fi">mistä?</span> → <span class="fi pala">-sta</span>, <span class="fi">mihin?</span> → para dentro.</p>
    <div class="valinta" data-oikea="Metsässä.">
      <p class="kysymys"><span class="fi">Missä poro <span data-l="olla#2">on</span>?</span></p>
      <div class="vaihtoehdot"><button type="button">Metsästä.</button><button type="button">Metsässä.</button><button type="button">Metsään.</button></div>
    </div>
    <div class="valinta" data-oikea="Joesta.">
      <p class="kysymys"><span class="fi">Mistä kivi on?</span></p>
      <div class="vaihtoehdot"><button type="button">Joesta.</button><button type="button">Joessa.</button><button type="button">Jokeen.</button></div>
    </div>
    <div class="valinta" data-oikea="Hyllyssä.">
      <p class="kysymys"><span class="fi">Missä kivi <span data-l="olla#2">on</span> nyt?</span></p>
      <div class="vaihtoehdot"><button type="button">Hyllyyn.</button><button type="button">Hyllystä.</button><button type="button">Hyllyssä.</button></div>
    </div>
    <div class="valinta" data-oikea="Järveen.">
      <p class="kysymys"><span class="fi">Mihin Maia menee saunasta?</span></p>
      <div class="vaihtoehdot"><button type="button">Järveen.</button><button type="button">Järvessä.</button><button type="button">Järvestä.</button></div>
    </div>
    <div class="valinta" data-oikea="Kotona.">
      <p class="kysymys"><span class="fi">Missä Maia ja Jay <span data-l="olla#2">ovat</span> sunnuntaina?</span></p>
      <div class="vaihtoehdot"><button type="button">Kotiin.</button><button type="button">Kotona.</button><button type="button">Kotoa.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Ouça: r ou h?</h3>
    <p class="ohje">Aperte ▶ e escolha a palavra que você ouviu. Só muda o primeiro som.</p>
    <div class="valinta" data-kuuntele="rauta" data-oikea="rauta">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">hauta</button><button type="button">rauta</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hiisi" data-oikea="Hiisi">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">Hiisi</button><button type="button">riisi</button></div>
    </div>
    <div class="valinta" data-kuuntele="rinta" data-oikea="rinta">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">rinta</button><button type="button">hinta</button></div>
    </div>
    <div class="valinta" data-kuuntele="hetki" data-oikea="hetki">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">retki</button><button type="button">hetki</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Na biblioteca Oodi',
      html: `
<ul class="tavoitteet">
  <li>Você diz para onde vai, com o ilativo: <span class="fi">Menen kirjastoon.</span> <span class="fi">Jay menee studioon.</span></li>
  <li>Você forma o ilativo de três jeitos: <span class="fi">talo → taloon</span>, <span class="fi">maa → maahan</span>, <span class="fi">huone → huoneeseen</span>.</li>
  <li>Você diz o tema de um livro com o elativo: <span class="fi">kirja Pohjois-Koreasta</span>.</li>
  <li>Você usa <span class="fi">kotona, kotoa, kotiin</span> e lê um formulário de inscrição.</li>
</ul>
<p data-paikka="toolonlahti-syksy">Sábado. A Maia e o Jay vão à <span class="fi">Oodi</span>, a biblioteca central de Helsinque, à beira da baía Töölönlahti. A Maia quer um cartão da biblioteca. O Jay quer o estúdio de música: lá dá para tocar baixo de graça. E a Maia tem um tema novo para estudar. Ela sempre tem.</p>

<section class="osio">
  <h2>Diálogo B: <span class="fi">Oodissa</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure os três casos: onde (<span class="fi pala">-ssa</span>), de onde (<span class="fi pala">-sta</span>) e para onde (<span class="fi">Oodiin, studioon, hissiin</span>).</p>
  <div class="kpl" id="t06-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="No sábado, a Maia e o Jay vão à Oodi. A Oodi é a nova biblioteca de Helsinque.">Lauantaina Maia ja Jay menevät Oodiin. Oodi on Helsingin uusi kirjasto.</p>
    <p class="s" data-h="kirjastonhoitaja" data-pt="Oi! Bem-vindos à Oodi! Posso ajudar?">Hei! Tervetuloa Oodiin! Voinko auttaa?</p>
    <p class="s" data-h="maia" data-pt="Oi! Eu queria um cartão da biblioteca.">Hei! Haluaisin kirjastokortin.</p>
    <p class="s" data-h="kirjastonhoitaja" data-pt="Certo. Onde você mora?">Selvä. Missä sinä asut?</p>
    <p class="s" data-h="maia" data-pt="Moro em Helsinque, em Sörnäinen. Sou do Brasil.">Asun Helsingissä, Sörnäisissä. Olen Brasiliasta.</p>
    <p class="s" data-h="kirjastonhoitaja" data-pt="Do Brasil! Eu sou do Marrocos. Aqui está o cartão. Ele é de graça.">Brasiliasta! Minä olen Marokosta. Tässä on kortti. Se on ilmainen.</p>
    <p class="s" data-h="maia" data-pt="De graça? Obrigada! Onde eu acho um livro sobre a Coreia do Norte?">Ilmainen? Kiitos! Mistä löydän kirjan Pohjois-Koreasta?</p>
    <p class="s" data-h="jay" data-pt="Sobre a Coreia do Norte? De novo?">Pohjois-Koreasta? Taas?</p>
    <p class="s" data-h="maia" data-pt="De novo. É um tema difícil, mas é uma coisa importante.">Taas. Se on vaikea aihe, mutta se on tärkeä asia.</p>
    <p class="s" data-h="jay" data-pt="Às vezes você também lê sobre Kuusamo.">Joskus sinä luet myös Kuusamosta.</p>
    <p class="s" data-h="kirjastonhoitaja" data-pt="No terceiro andar. Está vendo? O elevador é ali.">Kolmannessa kerroksessa. Näetkö? Hissi <span data-l="olla#2">on</span> tuolla.</p>
    <p class="s" data-h="maia" data-pt="Estou vendo. Obrigada!">Näen. Kiitos!</p>
    <p class="s" data-h="jay" data-pt="Eu vou para o estúdio. Vou tocar baixo. Como eu chego lá?">Minä menen studioon. <span data-l="soittaa#2">Soitan</span> bassoa. Miten pääsen sinne?</p>
    <p class="s" data-h="kirjastonhoitaja" data-pt="O estúdio fica no segundo andar. Tem um baixo no estúdio.">Studio <span data-l="olla#2">on</span> toisessa kerroksessa. Studiossa on basso.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay vai para o estúdio, e a Maia vai para o elevador.">Jay menee studioon, ja Maia menee hissiin.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos. Depois do · está a lição em que a gramática vem.</p>
    <ul>
      <li><span class="fi">Haluaisin kirjastokortin.</span> = eu queria um cartão da biblioteca · <span class="fi">kirjastokortin</span>, o objeto inteiro: lição 12</li>
      <li><span class="fi">Mistä löydän…?</span> = onde eu acho…? · o finlandês pergunta “de onde” quando procura alguma coisa</li>
      <li><span class="fi">kolmannessa kerroksessa</span> = no terceiro andar · o número também ganha <span class="fi pala">-ssa</span>: lição 12</li>
      <li><span class="fi"><span data-l="soittaa#2">Soitan</span> bassoa.</span> = toco baixo · o instrumento vai no partitivo</li>
      <li><span class="fi">Studiossa on basso.</span> = no estúdio tem um baixo · o lugar vem primeiro: lugar + <span class="fi">on</span> + coisa = “tem”, “há”</li>
      <li><span class="fi">Miten pääsen sinne?</span> = como eu chego lá? · <span class="fi">päästä</span> = conseguir ir, chegar</li>
      <li><span class="fi">Näetkö? – Näen.</span> = está vendo? – estou · <span class="fi">nähdä</span> = ver</li>
    </ul>
  </div>
</section>

<section class="osio">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="Na biblioteca" data-sanat="kirjasto,kirja,kirjastokortti,hylly,kerros,lainata,palauttaa,ilmainen"></div>
  <p>As outras palavras da lição estão no <a href="#t06-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio">
  <h2>Na máquina: <span class="fi" data-l="lainata:imper.2s">Lainaa</span> ou <span class="fi" data-l="palauttaa:imper.2s">Palauta</span>?</h2>
  <p>No terceiro andar, a Maia junta uma pilha de livros. Na Oodi ninguém carimba nada: cada um empresta e devolve na máquina. <span class="fi" data-l="lainata:imper.2s">Lainaa</span> = pegue emprestado; <span class="fi" data-l="palauttaa:imper.2s">Palauta</span> = devolva. A Maia ainda traz na sacola um livro da semana passada.</p>
  <p class="ohje">Toque num livro: a máquina lê o título. Depois aperte <span class="fi" data-l="lainata:imper.2s">Lainaa</span> (o livro vai para a sacola da Maia) ou <span class="fi" data-l="palauttaa:imper.2s">Palauta</span> (o livro volta para a estante). O título diz o tema com <span class="fi pala">-sta</span>; a máquina diz onde o livro está com <span class="fi pala">-ssa</span>. E se a Maia levar os três livros sobre a Coreia…</p>
  <div class="lainausautomaatti" data-otsikko="Oodi · empréstimo e devolução">
    <p class="s" data-h="automaatti" data-viesti="alku" data-pt="Escolha um livro da estante.">Valitse kirja hyllystä.</p>
    <p class="s" data-h="automaatti" data-viesti="lainattu" data-pt="O livro agora está emprestado. Da estante para a sacola!">Kirja on nyt lainassa. Hyllystä kassiin!</p>
    <p class="s" data-h="automaatti" data-viesti="palautettu" data-pt="O livro está de novo na biblioteca. Da sacola para a estante!">Kirja on taas kirjastossa. Kassista hyllyyn!</p>
    <p class="s" data-h="automaatti" data-viesti="jo-lainassa" data-pt="Este livro já está emprestado.">Tämä kirja on jo lainassa.</p>
    <p class="s" data-h="automaatti" data-viesti="ei-lainassa" data-pt="Este livro não está emprestado.">Tämä kirja ei ole lainassa.</p>
    <p class="s" data-h="maia" data-viesti="korea" data-pt="Três livros! O Jay vai dizer: de novo.">Kolme kirjaa! Jay sanoo: taas.</p>
    <p class="la-alue" data-alue="hylly" lang="fi-FI">Hyllyssä</p>
    <p class="la-alue" data-alue="kassi" lang="fi-FI">Maian kassissa</p>
    <div class="la-kirja" data-nimi="Pohjois-Korea" data-vari="1" data-sarja="korea"><p class="s" data-h="automaatti" data-pt="Um livro sobre a Coreia do Norte.">Kirja Pohjois-Koreasta.</p></div>
    <div class="la-kirja" data-nimi="Korean sota" data-vari="2" data-sarja="korea"><p class="s" data-h="automaatti" data-pt="Um livro sobre a Guerra da Coreia.">Kirja Korean sodasta.</p></div>
    <div class="la-kirja" data-nimi="Pjongjang" data-vari="3" data-sarja="korea"><p class="s" data-h="automaatti" data-pt="Um livro sobre Pyongyang.">Kirja Pjongjangista.</p></div>
    <div class="la-kirja" data-nimi="Kuusamo" data-vari="4"><p class="s" data-h="automaatti" data-pt="Um livro sobre Kuusamo.">Kirja Kuusamosta.</p></div>
    <div class="la-kirja" data-nimi="Brasilia" data-vari="5"><p class="s" data-h="automaatti" data-pt="Um livro sobre o Brasil.">Kirja Brasiliasta.</p></div>
    <div class="la-kirja" data-nimi="sauna" data-vari="6" data-paikalla="kassi"><p class="s" data-h="automaatti" data-pt="Um livro sobre a sauna.">Kirja saunasta.</p></div>
  </div>
</section>

<section class="osio">
  <h2>No estúdio</h2>
  <p>A Maia desce ao segundo andar com a sacola pesada. Atrás de um vidro, o Jay toca baixo de fones e olhos fechados. Tum, tum, tum. Ela bate no vidro.</p>
  <p class="s" data-h="jay" data-pt="Está ouvindo? O baixo!">Kuuletko? Basso!</p>
  <p class="s" data-h="maia" data-pt="Estou. Música boa, Jay!">Kuulen. Hyvää musiikkia, Jay!</p>
  <p>Na saída, perto da porta, há um quadro de avisos. Um cartaz amarelo chama a atenção da Maia: uma feira de design procura artistas. Ela pega um formulário. Você lê os dois no exercício 8.</p>
</section>

<section class="osio" data-osa="gramatica" data-paikka="helsinki-syksy">
  <h2>Gramática 1 · Onde, de onde, para onde: os casos “dentro”</h2>
  <p>O português põe a preposição <b>antes</b> da palavra (em, de, para). O finlandês põe uma terminação <b>no fim</b>. Para lugares “dentro” (uma casa, uma loja, uma cidade, um país) são três casos, e a palavra de pergunta já tem a mesma terminação:</p>
  <table class="taivutus">
    <tr><th>pergunta</th><th>terminação</th><th>exemplo</th></tr>
    <tr><td><span class="fi">missä?</span><span class="kaannos" lang="pt-BR">onde?</span></td><td><span class="fi pala">-ssa / -ssä</span></td><td><span class="fi">kirjastossa, Helsingissä</span><span class="kaannos" lang="pt-BR">na biblioteca, em Helsinque</span></td></tr>
    <tr><td><span class="fi">mistä?</span><span class="kaannos" lang="pt-BR">de onde?</span></td><td><span class="fi pala">-sta / -stä</span></td><td><span class="fi">kirjastosta, Helsingistä</span><span class="kaannos" lang="pt-BR">da biblioteca, de Helsinque</span></td></tr>
    <tr><td><span class="fi">mihin?</span><span class="kaannos" lang="pt-BR">para onde?</span></td><td><span class="fi pala">-aan, -oon, -iin…, -han, -hön…, -seen</span></td><td><span class="fi">kirjastoon, Helsinkiin</span><span class="kaannos" lang="pt-BR">para a biblioteca, para Helsinque</span></td></tr>
  </table>
  <p><b>Como formar -ssa e -sta:</b> pegue o genitivo (lição 5), tire o <span class="fi pala">-n</span> e cole a terminação. Assim a gradação aparece sozinha: <span class="fi">kauppa → kaupan → kaupassa</span>, <span class="fi">Helsinki → Helsingin → Helsingissä</span>, <span class="fi">joki → joen → joessa</span>. <b>-ssa ou -ssä?</b> A harmonia vocálica de sempre (lição 1): <span class="fi">saunassa</span>, mas <span class="fi">metsässä</span> e <span class="fi">järvessä</span>.</p>
  <p><b>Você já conhecia:</b> as frases prontas das lições 1–5 usam estes casos. <span class="fi">Olen Brasiliasta</span> (de onde? <span class="fi pala">-sta</span>), <span class="fi">Asun Helsingissä</span> e <span class="fi">Hakaniemen kauppahallissa</span> (onde? <span class="fi pala">-ssa</span>), <span class="fi">Tervetuloa Suomeen!</span> e <span class="fi">Hesburgeriin!</span> (para onde?). <span class="fi">Purjon kotona</span> é uma forma especial: veja a Gramática 2.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> na fala, o brasileiro diz “vou <b>no</b> mercado”, com “em” para a direção. Em finlandês, a direção é sempre o ilativo: <span class="fi">Menen kauppaan.</span> (vou ao mercado), nunca <span class="fi pala">menen kaupassa</span>. <span class="fi">Kaupassa</span> é onde você já está.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinki-syksy">
  <h2>Exercícios: onde e de onde</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Onde? Escreva a forma com -ssa ou -ssä</h3>
    <p class="ohje">A palavra básica está entre parênteses. Pense no genitivo: <span class="fi">kauppa → kaupan → kaupassa</span>. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Maia on <span class="aukko" data-oikea="kirjastossa"></span>. <span data-ei-kuplaa>(kirjasto)</span></p>
      <p>Kirja on <span class="aukko" data-oikea="hyllyssä"></span>. <span data-ei-kuplaa>(hylly)</span></p>
      <p>Jay soittaa bassoa <span class="aukko" data-oikea="studiossa"></span>. <span data-ei-kuplaa>(studio)</span></p>
      <p>Me asumme <span class="aukko" data-oikea="Helsingissä"></span>. <span data-ei-kuplaa>(Helsinki)</span></p>
      <p>Poro on <span class="aukko" data-oikea="metsässä"></span>. <span data-ei-kuplaa>(metsä)</span></p>
      <p>Kivi on <span class="aukko" data-oikea="joessa"></span>. <span data-ei-kuplaa>(joki)</span></p>
      <p>Ostan leipää <span class="aukko" data-oikea="kaupassa"></span>. <span data-ei-kuplaa>(kauppa)</span></p>
      <p>Kortti on <span class="aukko" data-oikea="puhelimessa"></span>. <span data-ei-kuplaa>(puhelin)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Ouça: onde, de onde ou para onde?</h3>
    <p class="ohje">Você ouve só uma palavra. Pelo fim dela, escolha a pergunta que ela responde.</p>
    <div class="valinta" data-kuuntele="kirjastoon" data-oikea="Mihin?">
      <p class="kysymys">Qual pergunta?</p>
      <div class="vaihtoehdot"><button type="button">Missä?</button><button type="button">Mistä?</button><button type="button">Mihin?</button></div>
    </div>
    <div class="valinta" data-kuuntele="Kuusamosta" data-oikea="Mistä?">
      <p class="kysymys">Qual pergunta?</p>
      <div class="vaihtoehdot"><button type="button">Missä?</button><button type="button">Mistä?</button><button type="button">Mihin?</button></div>
    </div>
    <div class="valinta" data-kuuntele="saunassa" data-oikea="Missä?">
      <p class="kysymys">Qual pergunta?</p>
      <div class="vaihtoehdot"><button type="button">Missä?</button><button type="button">Mistä?</button><button type="button">Mihin?</button></div>
    </div>
    <div class="valinta" data-kuuntele="hissiin" data-oikea="Mihin?">
      <p class="kysymys">Qual pergunta?</p>
      <div class="vaihtoehdot"><button type="button">Missä?</button><button type="button">Mistä?</button><button type="button">Mihin?</button></div>
    </div>
    <div class="valinta" data-kuuntele="studiosta" data-oikea="Mistä?">
      <p class="kysymys">Qual pergunta?</p>
      <div class="vaihtoehdot"><button type="button">Missä?</button><button type="button">Mistä?</button><button type="button">Mihin?</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="helsinki-lumi">
  <h2>Gramática 2 · O ilativo, o elativo “sobre” e kotona</h2>
  <h3>1. Para onde? Três jeitos de formar o ilativo</h3>
  <p>O ilativo sai do radical <b>forte</b> (o da forma básica). Olhe o fim do radical e escolha a regra:</p>
  <table class="taivutus">
    <tr><th>quando?</th><th>regra</th><th>exemplos</th></tr>
    <tr><td>quase sempre</td><td>repita a última vogal + <span class="fi pala">n</span></td><td><span class="fi">talo → taloon, kirja → kirjaan, Oodi → Oodiin, hylly → hyllyyn, kivi → kiveen</span><span class="kaannos" lang="pt-BR">casa, livro, Oodi, estante, pedra (radical kive-)</span></td></tr>
    <tr><td>palavra de uma sílaba, com vogal longa ou ditongo</td><td><span class="fi pala">h</span> + a mesma vogal + <span class="fi pala">n</span></td><td><span class="fi">maa → maahan, yö → yöhön, tie → tiehen</span><span class="kaannos" lang="pt-BR">país, noite, estrada</span></td></tr>
    <tr><td>palavra de duas ou mais sílabas com vogal longa no fim do radical</td><td><span class="fi pala">-seen</span></td><td><span class="fi">huone → huoneeseen, aihe → aiheeseen, Espoo → Espooseen</span><span class="kaannos" lang="pt-BR">quarto, tema, Espoo</span></td></tr>
  </table>
  <div class="huomio">
    <p><b>Atenção à gradação:</b> <span class="fi pala">-ssa</span> e <span class="fi pala">-sta</span> usam o radical fraco do genitivo, mas o ilativo usa o <b>forte</b>, igual à forma básica: <span class="fi">kauppa → kaupassa, kaupasta</span>, mas <span class="fi">kauppaan</span>; <span class="fi">Helsinki → Helsingissä</span>, mas <span class="fi">Helsinkiin</span>; <span class="fi">joki → joessa</span>, mas <span class="fi">jokeen</span>. Na dúvida, toque na palavra: a bolha mostra as formas.</p>
  </div>
  <div class="tehtava" data-tyyppi="lukeminen" data-ei-sivulle>
    <h3>6. Para onde? Escolha o ilativo</h3>
    <p class="ohje">Para onde? Escolha o ilativo, formado pela regra da tabela acima (última vogal repetida, <span class="fi pala">h</span> + vogal ou <span class="fi pala">-seen</span>). Cuidado: o ilativo usa o radical forte.</p>
    <div class="valinta" data-oikea="taloon">
      <p class="kysymys"><span class="fi">talo → Menen ___.</span></p>
      <div class="vaihtoehdot"><button type="button">talossa</button><button type="button">taloon</button><button type="button">talosta</button></div>
    </div>
    <div class="valinta" data-oikea="maahan">
      <p class="kysymys"><span class="fi">maa → Tervetuloa ___!</span></p>
      <div class="vaihtoehdot"><button type="button">maahan</button><button type="button">maassa</button><button type="button">maasta</button></div>
    </div>
    <div class="valinta" data-oikea="huoneeseen">
      <p class="kysymys"><span class="fi">huone → Jay menee ___.</span></p>
      <div class="vaihtoehdot"><button type="button">huoneessa</button><button type="button">huoneesta</button><button type="button">huoneeseen</button></div>
    </div>
    <div class="valinta" data-oikea="kauppaan">
      <p class="kysymys"><span class="fi">kauppa → Menen ___.</span></p>
      <div class="vaihtoehdot"><button type="button">kaupasta</button><button type="button">kauppaan</button><button type="button">kaupassa</button></div>
    </div>
  </div>
  <h3>2. De onde… e “sobre”: o elativo</h3>
  <p>O <span class="fi pala">-sta</span> funciona como o nosso “de”: diz de onde algo vem (<span class="fi">kivi joesta</span>, uma pedra do rio) e também o <b>tema</b>, como em “um livro <b>de</b> história” ou “falar <b>de</b> Kuusamo”. Para o tema, o português também diz “sobre”.</p>
  <ul class="esim">
    <li class="s" data-pt="um livro sobre a Coreia do Norte">kirja Pohjois-Koreasta</li>
    <li class="s" data-pt="O livro fala de Kuusamo.">Kirja kertoo Kuusamosta.</li>
    <li class="s" data-pt="O Jay fala do baixo.">Jay puhuu bassosta.</li>
    <li class="s" data-pt="Sobre o que é o livro? – Sobre a sauna.">Mistä kirja kertoo? – Saunasta.</li>
  </ul>
  <p><b>Atenção: dois sentidos.</b> Sozinha, <span class="fi">kirja Pohjois-Koreasta</span> pode ser “um livro <b>sobre</b> a Coreia do Norte” ou “um livro que <b>veio</b> da Coreia do Norte”, como “um livro da Coreia do Norte” em português. O verbo decide: com <span class="fi">kertoa</span>, <span class="fi">puhua</span> e <span class="fi">lukea</span> é o tema; com <span class="fi">tulla</span> é a origem. Na biblioteca, quase sempre é o tema.</p>
  <ul class="esim">
    <li class="s" data-pt="O livro fala da Coreia do Norte. (tema)">Kirja kertoo Pohjois-Koreasta.</li>
    <li class="s" data-pt="O livro vem da Coreia do Norte. (origem)">Kirja tulee Pohjois-Koreasta.</li>
  </ul>
  <h3>3. Em casa: kotona, kotoa, kotiin</h3>
  <p>A palavra <span class="fi">koti</span> (casa, lar) tem três formas especiais: <span class="fi"><span data-l="olla#2">Olen</span> kotona.</span> (estou em casa) · <span class="fi">Tulen kotoa.</span> (venho de casa) · <span class="fi">Menen kotiin.</span> (vou para casa). As palavras de lugar fazem a mesma trinca: <span class="fi">täällä, täältä, tänne</span> (aqui, daqui, para cá) e <span class="fi">siellä, sieltä, sinne</span> (lá, de lá, para lá). <span class="fi">Minne?</span> é o mesmo que <span class="fi">mihin?</span></p>
  <ul class="esim">
    <li class="s" data-pt="Vem cá! – Já vou, estou indo daqui.">Tule tänne! – Tulen! Lähden täältä nyt.</li>
    <li class="s" data-pt="Para onde você vai? – Para lá, para a Oodi.">Minne sinä menet? – Sinne, Oodiin.</li>
  </ul>
  <div class="muista">
    <p><b>Lembre:</b> estes são os casos “dentro”. Para “em cima, junto” (na mesa, na estação, na praça) o finlandês tem outros três: <span class="fi pala">-lla, -lta, -lle</span>. Eles vêm na lição 7. Por isso a Maia ainda não diz onde fica a montanha <span class="fi">Ruka</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinki-lumi">
  <h2>Exercícios: para onde e sobre o quê</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Escolha a pergunta</h3>
    <p class="ohje">A resposta diz qual pergunta foi feita: <span class="fi pala">-ssa</span> → <span class="fi">missä?</span>, <span class="fi pala">-sta</span> → <span class="fi">mistä?</span>, para dentro → <span class="fi">mihin?</span></p>
    <div class="valinta" data-oikea="Mihin">
      <p class="kysymys" data-ei-kuplaa><span class="fi">___ Jay menee? – Studioon.</span></p>
      <div class="vaihtoehdot"><button type="button">Missä</button><button type="button">Mistä</button><button type="button">Mihin</button></div>
    </div>
    <div class="valinta" data-oikea="Mistä">
      <p class="kysymys" data-ei-kuplaa><span class="fi">___ sinä olet? – Brasiliasta.</span></p>
      <div class="vaihtoehdot"><button type="button">Mistä</button><button type="button">Mihin</button><button type="button">Missä</button></div>
    </div>
    <div class="valinta" data-oikea="Mistä">
      <p class="kysymys" data-ei-kuplaa><span class="fi">___ kirja kertoo? – Pohjois-Koreasta.</span></p>
      <div class="vaihtoehdot"><button type="button">Missä</button><button type="button">Mihin</button><button type="button">Mistä</button></div>
    </div>
    <div class="valinta" data-oikea="Missä">
      <p class="kysymys" data-ei-kuplaa><span class="fi">___ Maia on? – Kirjastossa.</span></p>
      <div class="vaihtoehdot"><button type="button">Missä</button><button type="button">Mistä</button><button type="button">Mihin</button></div>
    </div>
    <div class="valinta" data-oikea="Mihin">
      <p class="kysymys" data-ei-kuplaa><span class="fi">___ te menette? – Kotiin.</span></p>
      <div class="vaihtoehdot"><button type="button">Mihin</button><button type="button">Missä</button><button type="button">Mistä</button></div>
    </div>
    <div class="valinta" data-oikea="Mistä">
      <p class="kysymys" data-ei-kuplaa><span class="fi">___ Jay tulee? – Kotoa.</span></p>
      <div class="vaihtoehdot"><button type="button">Missä</button><button type="button">Mistä</button><button type="button">Mihin</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>8. Leia o cartaz e o formulário da Maia</h3>
    <p class="ohje">O cartaz amarelo do quadro de avisos e o formulário que a Maia preencheu. Leia e responda.</p>
    <div class="dokumentti juliste" lang="fi-FI">
      <p class="juliste-otsikko">Habituuri</p>
      <p>Messut Helsingissä joulukuussa.</p>
      <p>Oletko taiteilija? Maalaatko? Tule Habituuriin!</p>
      <p class="juliste-ala">Hakemus on kirjastossa ja netissä.</p>
    </div>
    <div class="dokumentti ficha kortti-fi" lang="fi-FI">
      <div class="ficha-yla"><span class="ficha-koulu">Habituuri · messut</span><span class="ficha-otsikko">Hakemus</span></div>
      <div class="ficha-foto" data-hahmo="maia"></div>
      <dl>
        <dt>Nimi</dt><dd>Maia</dd>
        <dt>Kotikaupunki</dt><dd>Belo Horizonte</dd>
        <dt>Asuinpaikka</dt><dd>Helsinki, Sörnäinen</dd>
        <dt>Ammatti</dt><dd>geologi ja taiteilija</dd>
        <dt>Taide</dt><dd>maalaus ja keramiikka</dd>
        <dt>Taulun nimi</dt><dd>Ruska Kuusamossa</dd>
      </dl>
      <p class="ficha-huom">Maia on hyvä taiteilija! – Jay</p>
    </div>
    <div class="valinta" data-oikea="Helsingissä.">
      <p class="kysymys"><span class="fi">Missä Habituuri <span data-l="olla#2">on</span>?</span></p>
      <div class="vaihtoehdot"><button type="button">Helsinkiin.</button><button type="button">Helsingissä.</button><button type="button">Helsingistä.</button></div>
    </div>
    <div class="valinta" data-oikea="Kirjastossa ja netissä.">
      <p class="kysymys"><span class="fi">Missä hakemus <span data-l="olla#2">on</span>?</span></p>
      <div class="vaihtoehdot"><button type="button">Kirjastossa ja netissä.</button><button type="button">Kirjastosta ja netistä.</button><button type="button">Kirjastoon ja nettiin.</button></div>
    </div>
    <div class="valinta" data-oikea="Belo Horizontesta.">
      <p class="kysymys"><span class="fi">Mistä Maia on?</span></p>
      <div class="vaihtoehdot"><button type="button">Belo Horizontessa.</button><button type="button">Belo Horizonteen.</button><button type="button">Belo Horizontesta.</button></div>
    </div>
    <div class="valinta" data-oikea="Ruska Kuusamossa.">
      <p class="kysymys"><span class="fi">Mikä on taulun nimi?</span></p>
      <div class="vaihtoehdot"><button type="button">Ruska Kuusamosta.</button><button type="button">Ruska Kuusamossa.</button><button type="button">Ruska Kuusamoon.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>9. Traduza para o finlandês</h3>
    <p class="ohje">Escreva em finlandês. Depois compare com o modelo.</p>
    <div class="kaanna"><p class="pt">Eu moro em Helsinque.</p><p class="s" data-pt="Eu moro em Helsinque.">Asun Helsingissä.</p></div>
    <div class="kaanna"><p class="pt">Eu vou para a biblioteca.</p><p class="s" data-pt="Eu vou para a biblioteca.">Menen kirjastoon.</p></div>
    <div class="kaanna"><p class="pt">O Jay vem do estúdio.</p><p class="s" data-pt="O Jay vem do estúdio.">Jay tulee studiosta.</p></div>
    <div class="kaanna"><p class="pt">Um livro sobre a Finlândia, por favor.</p><p class="s" data-pt="Um livro sobre a Finlândia, por favor.">Kirja Suomesta, kiitos.</p></div>
    <div class="kaanna"><p class="pt">A gente vai para casa.</p><p class="s" data-pt="A gente vai para casa.">Me menemme kotiin.</p></div>
    <div class="kaanna"><p class="pt">A Maia está em casa.</p><p class="s" data-pt="A Maia está em casa.">Maia <span data-l="olla#2">on</span> kotona.</p></div>
    <div class="kaanna"><p class="pt">Vem cá! Eu quero ir para lá.</p><p class="s" data-pt="Vem cá! Eu quero ir para lá.">Tule tänne! Haluan sinne.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>10. Responda às perguntas</h3>
    <p class="ohje">Responda em voz alta antes de abrir o modelo. Os modelos são as respostas da Maia.</p>
    <details class="vastaus"><summary lang="fi-FI">Missä sinä asut?</summary><p class="s" data-pt="Moro em Helsinque, em Sörnäinen.">Asun Helsingissä, Sörnäisissä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mistä sinä olet?</summary><p class="s" data-pt="Sou do Brasil, de Belo Horizonte.">Olen Brasiliasta, Belo Horizontesta.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mihin sinä menet lauantaina?</summary><p class="s" data-pt="Vou para a Oodi. E depois para a sauna.">Menen Oodiin. Ja sitten saunaan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla kirjastokortti?</summary><p class="s" data-pt="Tenho. Ele é de graça!">On. Se on ilmainen!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko Helsinki hyvä paikka?</summary><p class="s" data-pt="É. Aqui tem uma biblioteca boa, e às vezes eu vou à sauna.">On. Täällä on hyvä kirjasto, ja joskus menen saunaan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mistä sinä haluat lukea?</summary><p class="s" data-pt="Quero ler sobre a história do Brasil. É um tema difícil, mas importante.">Haluan lukea Brasilian historiasta. Se on vaikea mutta tärkeä aihe.</p></details>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Bibliotecas: a sala de estar dos finlandeses</h3>
  <figure class="kuva" data-kuva="oodi-lukusali"></figure>
  <p>Na Finlândia, o cartão da biblioteca (<span class="fi">kirjastokortti</span>) é <span class="fi">ilmainen</span>: de graça, para quem mora no país. Com ele você empresta livros, filmes e música, e em muitas bibliotecas também instrumentos (<span class="fi">soitin</span>), máquinas de costura, ferramentas e até raquetes. Os finlandeses estão entre os povos que mais usam bibliotecas no mundo.</p>
  <p>A <span class="fi">Oodi</span>, a biblioteca central de Helsinque, abriu em dezembro de 2018, em frente ao Parlamento, na ponta da baía Töölönlahti. Tem três andares: no térreo, café e cinema; no segundo, estúdios de música, impressoras 3D e máquinas de costura que qualquer um pode reservar; no terceiro, o “céu dos livros”, com cerca de cem mil livros e uma varanda sobre a cidade. O nome <span class="fi">Oodi</span> quer dizer “ode”, um poema de homenagem.</p>
</aside>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Kuusamo: renas, ruska e pedras muito antigas</h3>
  <figure class="kuva" data-kuva="kuusamo"></figure>
  <p><span class="fi">Kuusamo</span> fica no nordeste da Finlândia, perto da fronteira com a Rússia. Lá está o parque nacional de Oulanka (<span class="fi">kansallispuisto</span>), com rios rápidos e trilhas de vários dias, e a montanha <span class="fi">Ruka</span>, cheia de esquiadores no inverno. Na região, as renas (<span class="fi">poro</span>) andam soltas e atravessam a estrada sem pressa.</p>
  <p>Em setembro vem a <span class="fi">ruska</span>: as folhas das bétulas e das plantas baixas ficam amarelas, laranja e vermelhas, e muita gente viaja só para ver. Para geólogos como a Maia e o Jay, Kuusamo também é interessante por baixo da terra: as rochas da região têm mais de dois bilhões de anos. E depois do trabalho de campo, claro, vem a sauna à beira do lago.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Mihin sä meet? Para onde você vai, na rua</h3>
  <p>Na rua e em casa, <span class="fi">minä</span> e <span class="fi">sinä</span> viram <span class="fi">mä</span> e <span class="fi">sä</span>, e o verbo encurta. Os casos de lugar <b>não mudam</b>: <span class="fi">kotiin</span> e <span class="fi">kotona</span> são iguais na fala. Você não precisa falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">sinä menet</span></td><td><span class="fi">sä meet</span></td><td>você vai</td></tr>
    <tr><td><span class="fi">minä menen</span></td><td><span class="fi">mä meen</span></td><td>eu vou</td></tr>
    <tr><td><span class="fi">minä olen</span></td><td><span class="fi">mä oon</span></td><td>eu sou, eu estou</td></tr>
  </table>
  <p class="s" data-h="jay" data-kirja="Mihin sinä menet?" data-pt="Para onde você vai?">Mihin sä meet?</p>
  <p class="s" data-h="maia" data-kirja="Minä menen kotiin." data-pt="Vou para casa.">Mä meen kotiin.</p>
  <p class="s" data-h="jay" data-kirja="Minä olen jo kotona." data-pt="Eu já estou em casa.">Mä oon jo kotona.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="helsinki-lumi">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t06">
    <h3>Lição de casa</h3>
    <p><b>1.</b> Preencha o seu próprio formulário para a <span class="fi">Habituuri</span>. Escreva direto nele: fica salvo neste navegador.</p>
    <div class="dokumentti ficha kortti-fi oma" data-tallenna="t06-hakemus" lang="fi-FI">
      <div class="ficha-yla"><span class="ficha-koulu">Habituuri · messut</span><span class="ficha-otsikko">Hakemus</span></div>
      <div class="ficha-foto tyhja">kuva</div>
      <dl>
        <dt>Nimi</dt><dd><input name="nimi" aria-label="Nimi (nome)"></dd>
        <dt>Kotikaupunki</dt><dd><input name="kotikaupunki" aria-label="Kotikaupunki (cidade natal)"></dd>
        <dt>Asuinpaikka</dt><dd><input name="asuinpaikka" aria-label="Asuinpaikka (onde mora)"></dd>
        <dt>Ammatti</dt><dd><input name="ammatti" aria-label="Ammatti (profissão)"></dd>
        <dt>Taide</dt><dd><input name="taide" aria-label="Taide (arte)"></dd>
        <dt>Taulun nimi</dt><dd><input name="taulu" aria-label="Taulun nimi (nome do quadro)"></dd>
      </dl>
    </div>
    <p><b>2.</b> Escreva cinco frases: onde você mora (<span class="fi">Asun…</span>), de onde você é (<span class="fi">Olen…</span>), para onde você vai no sábado (<span class="fi">Lauantaina menen…</span>), um livro que você quer (<span class="fi">kirja</span> + <span class="fi pala">-sta</span>) e onde você está agora. Leia em voz alta e cuide do <span class="fi pala">r</span>.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Moro em Helsinque.">Asun Helsingissä.</p>
      <p class="s" data-pt="Sou do Brasil.">Olen Brasiliasta.</p>
      <p class="s" data-pt="No sábado vou à biblioteca.">Lauantaina menen kirjastoon.</p>
      <p class="s" data-pt="Eu queria um livro sobre Kuusamo.">Haluaisin kirjan Kuusamosta.</p>
      <p class="s" data-pt="Agora estou em casa.">Nyt <span data-l="olla#2">olen</span> kotona.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t06">
    <li>Sei dizer onde estou, de onde venho e para onde vou: kirjastossa, kirjastosta, kirjastoon.</li>
    <li>Sei formar o ilativo: taloon, maahan, huoneeseen.</li>
    <li>Sei perguntar com missä?, mistä? e mihin? e responder com o caso certo.</li>
    <li>Sei dizer o tema de um livro com o elativo: kirja Pohjois-Koreasta.</li>
    <li>Sei usar kotona, kotoa e kotiin.</li>
    <li>Pronuncio o r vibrante: rauta, ruoka, kirja.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md, kolmikerroksinen kielioppi). */
  kielioppi: [
    {
      id: 'sisasijat', otsikko: 'Onde, de onde, para onde: -ssa, -sta e o ilativo', taso: 'essencial', hakuosa: 'h-paikallissijat', treeni: ['t06-missa', 't06-mista', 't06-mihin'],
      html: `
<p>Três casos para lugares “dentro”. A palavra de pergunta tem a mesma terminação da resposta.</p>
<table class="taivutus">
  <tr><th>pergunta</th><th>caso e terminação</th><th>exemplo</th></tr>
  <tr><td><span class="fi">missä?</span><span class="kaannos" lang="pt-BR">onde?</span></td><td>inessivo <span class="fi pala">-ssa/-ssä</span></td><td><span class="fi">kirjastossa</span><span class="kaannos" lang="pt-BR">na biblioteca</span></td></tr>
  <tr><td><span class="fi">mistä?</span><span class="kaannos" lang="pt-BR">de onde?</span></td><td>elativo <span class="fi pala">-sta/-stä</span></td><td><span class="fi">kirjastosta</span><span class="kaannos" lang="pt-BR">da biblioteca</span></td></tr>
  <tr><td><span class="fi">mihin?</span><span class="kaannos" lang="pt-BR">para onde?</span></td><td>ilativo <span class="fi pala">-aan, -oon, -iin…, -han, -hön…, -seen</span></td><td><span class="fi">kirjastoon</span><span class="kaannos" lang="pt-BR">para a biblioteca</span></td></tr>
</table>
<p><b>-ssa e -sta:</b> genitivo sem o <span class="fi pala">-n</span> + terminação: <span class="fi">Kuusamo → Kuusamon → Kuusamossa, Kuusamosta</span>. As palavras da lição em todos estes casos:</p>
<div class="sijataulu" data-sana="kirjasto" data-sijat="nominatiivi,genetiivi,inessiivi,elatiivi,illatiivi"></div>
<div class="sijataulu" data-sana="järvi" data-sijat="nominatiivi,genetiivi,inessiivi,elatiivi,illatiivi"></div>`
    },
    {
      id: 'illatiivi', otsikko: 'Para onde? Como formar o ilativo', taso: 'essencial', hakuosa: 'h-paikallissijat', treeni: 't06-mihin',
      html: `
<p>O ilativo usa o radical <b>forte</b>. Três regras, pelo fim do radical:</p>
<ol>
  <li><b>Quase sempre:</b> repita a última vogal + <span class="fi pala">n</span>: <span class="fi">talo → taloon</span>, <span class="fi">kirja → kirjaan</span>, <span class="fi">hylly → hyllyyn</span>, <span class="fi">Oodi → Oodiin</span>, <span class="fi">kivi → kiveen</span> (radical <span class="fi pala">kive-</span>).</li>
  <li><b>Uma sílaba com vogal longa ou ditongo:</b> <span class="fi pala">h</span> + a mesma vogal + <span class="fi pala">n</span>: <span class="fi">maa → maahan</span>, <span class="fi">yö → yöhön</span>, <span class="fi">tie → tiehen</span>.</li>
  <li><b>Duas sílabas ou mais, vogal longa no fim do radical:</b> <span class="fi pala">-seen</span>: <span class="fi">huone → huoneeseen</span>, <span class="fi">aihe → aiheeseen</span>, <span class="fi">Espoo → Espooseen</span>.</li>
</ol>
<ul class="esim">
  <li class="s" data-pt="Vou para a sauna.">Menen saunaan.</li>
  <li class="s" data-pt="Bem-vindo(a) à Finlândia!">Tervetuloa Suomeen!</li>
  <li class="s" data-pt="O Jay vai para o estúdio.">Jay menee studioon.</li>
</ul>`
    },
    {
      id: 'astevaihtelu6', otsikko: 'Gradação: fraco no -ssa e -sta, forte no ilativo', taso: 'atenção', hakuosa: 'h-astevaihtelu', treeni: 't06-mihin',
      html: `
<p>Palavras com gradação mudam por dentro. O <span class="fi pala">-ssa</span> e o <span class="fi pala">-sta</span> vêm do genitivo (radical fraco); o ilativo fica com o radical forte da forma básica.</p>
<table class="taivutus">
  <tr><th>forma básica</th><th>onde?</th><th>de onde?</th><th>para onde?</th></tr>
  <tr><td><span class="fi">kauppa</span><span class="kaannos" lang="pt-BR">loja</span></td><td><span class="fi">kaupassa</span></td><td><span class="fi">kaupasta</span></td><td><span class="fi">kauppaan</span></td></tr>
  <tr><td><span class="fi">Helsinki</span><span class="kaannos" lang="pt-BR">Helsinque</span></td><td><span class="fi">Helsingissä</span></td><td><span class="fi">Helsingistä</span></td><td><span class="fi">Helsinkiin</span></td></tr>
  <tr><td><span class="fi">joki</span><span class="kaannos" lang="pt-BR">rio</span></td><td><span class="fi">joessa</span></td><td><span class="fi">joesta</span></td><td><span class="fi">jokeen</span></td></tr>
  <tr><td><span class="fi">ruoka</span><span class="kaannos" lang="pt-BR">comida</span></td><td><span class="fi">ruoassa</span></td><td><span class="fi">ruoasta</span></td><td><span class="fi">ruokaan</span></td></tr>
</table>
<div class="sijataulu" data-sana="kauppa" data-sijat="nominatiivi,genetiivi,inessiivi,elatiivi,illatiivi"></div>`
    },
    {
      id: 'elatiivi-aihe', otsikko: 'Um livro sobre…: o elativo “sobre”', taso: 'essencial', hakuosa: 'h-sijat', treeni: 't06-mista',
      html: `
<p>O <span class="fi pala">-sta</span> diz de onde algo vem e também o <b>tema</b>: sobre o que é um livro, de que se fala. Como o “de” do português: “um livro <b>de</b> história”, “falar <b>de</b> Kuusamo”.</p>
<ul class="esim">
  <li class="s" data-pt="um livro sobre a Coreia do Norte">kirja Pohjois-Koreasta</li>
  <li class="s" data-pt="um livro sobre a sauna">kirja saunasta</li>
  <li class="s" data-pt="O livro fala de Kuusamo.">Kirja kertoo Kuusamosta.</li>
  <li class="s" data-pt="O Jay fala do baixo.">Jay puhuu bassosta.</li>
</ul>
<p>Pergunta: <span class="fi">Mistä kirja kertoo?</span> (sobre o que é o livro?) A mesma pergunta de “de onde?”: o sentido vem da frase.</p>`
    },
    {
      id: 'kysymyssanat6', otsikko: 'missä? mistä? mihin? e kotona, kotoa, kotiin', taso: 'essencial', hakuosa: 'h-kysymyssanat', treeni: 't06-kysymys',
      html: `
<table class="taivutus">
  <tr><th>pergunta</th><th>resposta</th><th>em casa</th><th>aqui</th></tr>
  <tr><td><span class="fi">missä?</span><span class="kaannos" lang="pt-BR">onde?</span></td><td><span class="fi">kirjastossa</span></td><td><span class="fi">kotona</span></td><td><span class="fi">täällä</span></td></tr>
  <tr><td><span class="fi">mistä?</span><span class="kaannos" lang="pt-BR">de onde?</span></td><td><span class="fi">kirjastosta</span></td><td><span class="fi">kotoa</span></td><td><span class="fi">täältä</span></td></tr>
  <tr><td><span class="fi">mihin?</span><span class="kaannos" lang="pt-BR">para onde?</span></td><td><span class="fi">kirjastoon</span></td><td><span class="fi">kotiin</span></td><td><span class="fi">tänne</span></td></tr>
</table>
<p><span class="fi">Minne?</span> é o mesmo que <span class="fi">mihin?</span>. Com palavra de pergunta, nada de <span class="fi pala">-ko/-kö</span>: <span class="fi">Mihin sinä menet?</span></p>
<ul class="esim">
  <li class="s" data-pt="Onde você mora? – Em Helsinque.">Missä sinä asut? – Helsingissä.</li>
  <li class="s" data-pt="De onde você vem? – De casa.">Mistä sinä tulet? – Kotoa.</li>
  <li class="s" data-pt="Para onde vocês vão? – Para a Oodi.">Mihin te menette? – Oodiin.</li>
</ul>`
    },
    {
      id: 'r', otsikko: 'Pronúncia: o r vibrante', taso: 'essencial', hakuosa: 'h-sudenkuopat', treeni: 't06-r',
      html: `
<p>O <span class="fi pala">r</span> finlandês é da ponta da língua, como o r de “caro”, e vibra também no começo da palavra. O r “de garganta” do português soa como <span class="fi pala">h</span> e troca a palavra:</p>
<table class="taivutus">
  <tr><th>com r</th><th>com h</th></tr>
  <tr><td><span class="fi">rauta</span><span class="kaannos" lang="pt-BR">ferro</span></td><td><span class="fi">hauta</span><span class="kaannos" lang="pt-BR">túmulo</span></td></tr>
  <tr><td><span class="fi">riisi</span><span class="kaannos" lang="pt-BR">arroz</span></td><td><span class="fi">Hiisi</span><span class="kaannos" lang="pt-BR">o irmão do Jay</span></td></tr>
  <tr><td><span class="fi">rinta</span><span class="kaannos" lang="pt-BR">peito</span></td><td><span class="fi">hinta</span><span class="kaannos" lang="pt-BR">preço</span></td></tr>
  <tr><td><span class="fi">retki</span><span class="kaannos" lang="pt-BR">passeio</span></td><td><span class="fi">hetki</span><span class="kaannos" lang="pt-BR">momento</span></td></tr>
</table>
<ul class="esim">
  <li class="s" data-pt="comida">ruoka</li><li class="s" data-pt="rena">poro</li><li class="s" data-pt="livro">kirja</li><li class="s" data-pt="andar (de prédio)">kerros</li>
</ul>`
    },
    {
      id: 'menneet6', otsikko: 'Olin, menin: o passado como frase pronta', taso: 'frase pronta', hakuosa: 'h-aikamuodot',
      html: `
<p>Lembranças pedem o passado. Por enquanto, guarde estas formas como blocos; o sistema vem na lição 13.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi"><span data-l="olla#2">Olin</span> järvessä.</span></td><td>Eu estava no lago.</td></tr>
  <tr><td><span class="fi">Minä menin järveen.</span></td><td>Eu fui para o lago.</td></tr>
</table>`
    },
    {
      id: 'sudenkuopat6', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-paikallissijat',
      html: `
<ul>
  <li><b>Direção não é “em”:</b> “vou no mercado” = <span class="fi">menen kauppaan</span> (ilativo), não <span class="fi pala">menen kaupassa</span>.</li>
  <li><b>O ilativo é forte:</b> <span class="fi">kaupassa</span>, mas <span class="fi">kauppaan</span>; <span class="fi">Helsingissä</span>, mas <span class="fi">Helsinkiin</span>.</li>
  <li><b>-ssa ou -ssä:</b> harmonia vocálica: <span class="fi">saunassa</span>, <span class="fi">metsässä</span>, <span class="fi">Helsingissä</span>.</li>
  <li><b>“De” sobre um tema:</b> <span class="fi">kirja Pohjois-Koreasta</span> (elativo), como “um livro de história”.</li>
  <li><b>kotona, kotoa, kotiin:</b> formas especiais; “estou em casa” é <span class="fi">kotona</span>, não <span class="fi pala">kodissa</span>.</li>
  <li><b>O r:</b> sempre da ponta da língua: <span class="fi">rauta</span>, nunca “hauta”.</li>
</ul>`
    }
  ]
});
