/* Tottakai, lição 6: Kuusamon muistot ja Oodi-kirjasto (Passon jakso 6 Maian näkökulmasta). Oma materiaali, ei kirjan
   tekstiä. Kurssisuunnitelma: tottakai/docs/OPPITUNNIT_6_20.md §5 (oppitunti 6). Kaksi osaa omina sivuinaan
   (katselmoinnin A/B-sääntö 24.10.2026, REVIEW.md §6 ja LESSON_MAP_v2.md: A 24,5 ja B 31,0 kaavaminuuttia):
   ASS-uudistus 30.10.2026: molemmat dialogit omistajan lukitsemat tekstit (tottakai/ass/luonnokset/t06-a-1_lopullinen.md,
   t06-b-1_lopullinen.md); aineisto sovitettu niihin (ass/oppitunnit/t06.md §3): syväsukellus Tšernobyliin, Jay menee
   kotiin nukkumaan, ”Na saída” korvaa ”No estúdio” -osion (tarinapala tyhjältä sivulta, ass/luonnokset/
   t06-b-aineisto_na-saida.md), kirjoitetut illatiivi- ja elatiiviaukot (tehtävä 7), vinkkikortin lisäkohdat.
   - osa A (#t06, Parte A · Encontro): sunnuntai-ilta Sörnäisissä; dialogi A (22 repliikkiä) Maian puhelimen
     kuvagallerian äärellä (.galleria, tottakai/assets/komponentit.js: pyyhkäistävä galleria, dialogin repliikki
     data-galleria vie oikeaan kuvaan), Frases prontas, sanasto, kulttuuri (Kuusamo ja ruska), ääntäminen (täry-r: Maian
     ”hautaa” ← rautaa), kielioppi 1 (sisäsijat -ssa, -sta, kysymyssanat; Frases prontas kotona/kotoa/kotiin, täällä,
     tänne …), tehtävät 1–5 (tunnistus 1–4, kirjoitettu tuotos 5: -ssa/-ssä-aukot).
   - osa B (#t06-b, Parte B · Aprofundar e fechar): lauantai Oodissa; dialogi B (13 repliikkiä: kirjastokortti,
     syväsukellus Tšernobyliin, Jay kotiin), valinnainen lisä lainausautomaatti (details ”Extra (opcional)”,
     .lainausautomaatti: Lainaa / Palauta, kirjojen selkämykset; R10), Na saída (Habituurin lomake), kielioppi 2
     (illatiivin muodostus, elatiivi ”aiheesta”), tehtävät 6–10 (tehtävä 6 kieliopin 2 illatiivin jälkeen), kulttuuri
     (kirjastot), Na rua,
     kotitehtävä (oma Habituuri-hakemus), itsearvio. Entinen tehtävä 8 (Habituurin ilmoitus ja Maian hakemus) poistettu
     (SWAPS R10).
   Tasapainotus 21.10.2026 (TYONKULKU 12, rajattu uudelleenkirjoitus): ydinsanat tänne, sinne, täältä, minne, joskus,
   kauan, paikka, asia, miten, nähdä; dialogit 16 + 15; sanasto 56 → 38 (24.10.2026: 37, taiteilija pois tehtävän 8
   mukana); sivun sanalistat 51 → 20 sanaa.
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
  lahde: 'Tema: lembranças de Kuusamo e a biblioteca Oodi · Gramática: casos de lugar “dentro” (-ssa, -sta, ilativo -aan, -oon, -iin…, -han, -hön…, -seen), missä? mistä? mihin?, kotona / kotoa / kotiin, o elativo “sobre” (kirja Tšernobylistä) · Pronúncia: o r vibrante (rauta, não hauta)',
  aiheet: ['paikka', 'liike', 'luonto', 'vapaa'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga e artista; lembra de tudo de Kuusamo' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; esquece tudo e só quer dormir' },
    kirjastonhoitaja: { nimi: 'Bibliotecária', tyyppi: 'nainen', vaihto: 5, kuvaus: 'bibliotecária da Oodi; veio do Marrocos' },
    automaatti: { nimi: 'Máquina', tyyppi: 'mies', vaihto: 8, kuvaus: 'a máquina de empréstimo da Oodi' }
  },

  sanasto: [
    'päästä', 'missä', 'mistä', 'mihin', 'minne', 'kotona', 'takaisin',
    'metsä', 'järvi', 'joki', 'poro', 'ruska', 'kivi', 'rauta', 'sauna', 'mökki', 'paikka', 'pimeä', 'marraskuu',
    'muistaa', 'huono', 'tietysti', 'koska', 'joskus', 'kauan',
    'kirjasto', 'kirja', 'kirjastokortti', 'hylly', 'kerros', 'hissi', 'lainata', 'palauttaa', 'ilmainen',
    'löytää', 'aihe', 'vaikea', 'tärkeä', 'taulu', 'hakemus'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Encontro',
      html: `
<ul class="tavoitteet">
  <li>Você diz onde algo está, de onde vem e para onde vai: <span class="fi">metsässä, joesta, järveen</span>.</li>
  <li>Você pergunta com <span class="fi">missä?</span> (onde?), <span class="fi">mistä?</span> (de onde?) e <span class="fi">mihin?</span> (para onde?).</li>
  <li>Você forma o <span class="fi pala">-ssa</span> e o <span class="fi pala">-sta</span> a partir do genitivo e escreve: <span class="fi">kauppa → kaupan → kaupassa</span>.</li>
  <li>Você usa <span class="fi">kotona, kotoa, kotiin</span> e <span class="fi">täällä, tänne, sinne</span> como frases prontas.</li>
  <li>Você pronuncia o <span class="fi pala">r</span> finlandês: <span class="fi">rauta</span> (ferro), não <span class="fi">hauta</span> (túmulo).</li>
  <li>Na parte B: a biblioteca Oodi, como formar o ilativo (<span class="fi">kirjastoon</span>) e o elativo “sobre”: <span class="fi">kirja Tšernobylistä</span>.</li>
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
    <figure data-piirros="ruska"><p class="s" data-h="maia" data-pt="A ruska: a floresta está vermelha e amarela.">Ruska. Metsä <span data-l="olla#2">on</span> punainen ja keltainen.</p></figure>
  </div>
  <div class="kpl" id="t06-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="É domingo, novembro. A Maia e o Jay estão em casa, em Sörnäinen. São quatro horas, mas lá fora já está escuro.">On sunnuntai, marraskuu. Maia ja Jay <span data-l="olla#2">ovat</span> kotona Sörnäisissä. Kello on neljä, mutta ulkona <span data-l="olla#2">on</span> jo pimeää.</p>
    <p class="s" data-h="maia" data-pt="Jay, vem cá! Eu tenho fotos de Kuusamo no celular.">Jay, tule tänne! Minulla on puhelimessa kuvia Kuusamosta.</p>
    <p class="s" data-h="jay" data-pt="De onde?">Mistä?</p>
    <p class="s" data-h="maia" data-galleria="1" data-pt="Ai, Jay! Kuusamo é um lugar lindo! Em setembro eu estava lá a trabalho, e você também.">Voi, Jay! Kuusamo on hieno paikka! Syyskuussa <span data-l="olla#2">olin</span> siellä töissä ja sinä myös.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay olha as fotos.">Jay katsoo kuvia.</p>
    <p class="s" data-h="jay" data-galleria="2" data-pt="Uma rena na floresta? Eu não lembro da rena.">Poro metsässä? Minä en muista poroa.</p>
    <p class="s" data-h="maia" data-pt="Claro que você não lembra. Você sempre esquece tudo!">Tietysti sinä et muista. Sinä muistat aina huonosti!</p>
    <p class="s" data-h="maia" data-galleria="3" data-pt="Ai, Jay! E aquele rio? Você lembra dele?">Voi, Jay! Entä <span data-l="tuo">tuo</span> joki? Muistatko sen?</p>
    <p class="s" data-h="jay" data-pt="Disso eu lembro, claro! A nossa pedra vermelha é do rio.">Minä muistan, tietysti! Meidän punainen kivi on joesta.</p>
    <p class="s" data-h="maia" data-pt="Onde está a pedra agora?">Missä se kivi <span data-l="olla#2">on</span> nyt?</p>
    <p class="s" data-h="jay" data-pt="Está na estante, claro.">Se <span data-l="olla#2">on</span> hyllyssä, tottakai.</p>
    <p class="s" data-h="maia" data-hairio="hautaa → rautaa" data-pt="A pedra é vermelha porque tem muito “túmulo” nela. (errado: rautaa = ferro)">Kivi on punainen, koska siinä on paljon hautaa.</p>
    <p class="s" data-h="jay" data-pt="Túmulo? Na pedra não tem túmulo. Ferro, Maia! R, não h.">Hautaa? Kivessä ei ole hautaa. Rautaa, Maia! <span class="pala">R</span>, ei <span class="pala">h</span>.</p>
    <p class="s" data-h="maia" data-pt="Rrrrautaa! Ela tem muito ferro."><span class="pala">Rrrrautaa</span>! Siinä on paljon <span class="pala">rrrrautaa</span>.</p>
    <p class="s" data-h="maia" data-galleria="4" data-pt="E nesta foto tem a sauna. Da sauna, eu fui para onde?">Ja tässä kuvassa on sauna. Mihin minä menin saunasta?</p>
    <p class="s" data-h="jay" data-galleria="5" data-pt="Para o lago, três vezes! Eu fiquei no lago só dez segundos. Água fria é ruim.">Järveen, kolme kertaa! Minä <span data-l="olla#2">olin</span> järvessä vain kymmenen sekuntia. Kylmä vesi on huono.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia ama água gelada. Ela ri porque dez segundos é muito pouco.">Maia rakastaa kylmää vettä. Hän nauraa, koska kymmenen sekuntia on todella vähän.</p>
    <p class="s" data-h="maia" data-pt="Eu entrei no lago três vezes. Água fria é muito boa!">Minä menin järveen kolme kertaa. Kylmä vesi on todella hyvä!</p>
    <p class="s" data-h="maia" data-galleria="6" data-pt="E olha esta ruska! Eu quero voltar para Kuusamo.">Ja katso tätä ruskaa! Minä haluan mennä takaisin Kuusamoon.</p>
    <p class="s" data-h="jay" data-pt="Eu também. Mas eu não fico muito tempo no lago.">Minä myös. Mutta minä en ole järvessä kauan.</p>
    <p class="s" data-h="maia" data-pt="Combinado! Você fica na sauna, e eu fico no lago.">Sopii! Sinä <span data-l="olla#2">olet</span> saunassa ja minä <span data-l="olla#2">olen</span> järvessä.</p>
    <p class="s" data-h="kertoja" data-pt="E agora há duas pedras de Kuusamo na estante.">Ja nyt hyllyssä on kaksi kiveä Kuusamosta.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos. Depois do · está a lição em que a gramática vem.</p>
    <ul>
      <li><span class="fi">On sunnuntai, marraskuu.</span> = é domingo, novembro · <span class="fi">syyskuussa</span> = em setembro: o <span class="fi pala">-ssa</span> também diz “quando?” · todos os meses e os dias: <a href="#h-aika">Dias, meses e horas</a>, e a lição 9</li>
      <li><span class="fi">kuvia Kuusamosta</span> = fotos de Kuusamo · <span class="fi">kuvia</span>, o partitivo plural: lição 11</li>
      <li><span class="fi">Syyskuussa olin siellä töissä.</span> = em setembro eu estava lá a trabalho · <span class="fi">Minä menin järveen.</span> = eu fui para o lago · o passado: lição 13</li>
      <li><span class="fi">Muistatko sen?</span> = você lembra dele? · <span class="fi">sen</span> = o objeto “ele, ela”: lição 12</li>
      <li><span class="fi">siinä</span> = nela, nisso (<span class="fi">se</span> + <span class="fi pala">-ssa</span>) · as formas de <span class="fi">tämä, tuo, se</span>: lição 8</li>
      <li><span class="fi">Tietysti! Tottakai!</span> = claro! · <span class="fi">koska</span> = porque</li>
      <li><span class="fi">Maia rakastaa kylmää vettä.</span> = a Maia ama água gelada · <span class="fi">vettä</span> é o partitivo de <span class="fi">vesi</span></li>
      <li><span class="fi">Tule tänne!</span> = vem cá! · <span class="fi">Haluan mennä takaisin Kuusamoon.</span> = quero voltar para Kuusamo · <span class="fi">takaisin</span> = de volta</li>
      <li><span class="fi">Sopii!</span> = combinado!</li>
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
  <h2>Exercícios: palavras e pronúncia</h2>

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

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>2. Ouça: r ou h?</h3>
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

<section class="osio" data-osa="gramatica">
  <h2>Gramática 1 · Onde, de onde, para onde: os casos “dentro”</h2>
  <p>O português põe a preposição <b>antes</b> da palavra (em, de, para). O finlandês põe uma terminação <b>no fim</b>. Para lugares “dentro” (uma casa, uma loja e, quase sempre, uma cidade ou um país) são três casos, e a palavra de pergunta já tem a mesma terminação:</p>
  <table class="taivutus">
    <tr><th>pergunta</th><th>terminação</th><th>exemplo</th></tr>
    <tr><td><span class="fi">missä?</span><span class="kaannos" lang="pt-BR">onde?</span></td><td><span class="fi pala">-ssa / -ssä</span></td><td><span class="fi">kirjastossa, Helsingissä</span><span class="kaannos" lang="pt-BR">na biblioteca, em Helsinque</span></td></tr>
    <tr><td><span class="fi">mistä?</span><span class="kaannos" lang="pt-BR">de onde?</span></td><td><span class="fi pala">-sta / -stä</span></td><td><span class="fi">kirjastosta, Helsingistä</span><span class="kaannos" lang="pt-BR">da biblioteca, de Helsinque</span></td></tr>
    <tr><td><span class="fi">mihin?</span><span class="kaannos" lang="pt-BR">para onde?</span></td><td><span class="fi pala">-aan, -oon, -iin…, -han, -hön…, -seen</span></td><td><span class="fi">kirjastoon, Helsinkiin</span><span class="kaannos" lang="pt-BR">para a biblioteca, para Helsinque</span></td></tr>
  </table>
  <p><b>Como formar -ssa e -sta:</b> pegue o genitivo (lição 5), tire o <span class="fi pala">-n</span> e cole a terminação. Assim a gradação aparece sozinha: <span class="fi">kauppa → kaupan → kaupassa</span>, <span class="fi">Helsinki → Helsingin → Helsingissä</span>, <span class="fi">joki → joen → joessa</span>. <b>-ssa ou -ssä?</b> A harmonia vocálica de sempre (lição 1): <span class="fi">saunassa</span>, mas <span class="fi">metsässä</span> e <span class="fi">järvessä</span>.</p>
  <p><b>Você já conhecia:</b> as frases prontas das lições 1–5 usam estes casos. <span class="fi">Olen Brasiliasta</span> (de onde? <span class="fi pala">-sta</span>), <span class="fi">Asun Helsingissä</span> e <span class="fi">Hakaniemen kauppahallissa</span> (onde? <span class="fi pala">-ssa</span>), <span class="fi">Tervetuloa Suomeen!</span> e <span class="fi">Hesburgeriin!</span> (para onde?). <span class="fi">Purjon kotona</span> é uma forma especial: veja as frases prontas logo abaixo.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> na fala, o brasileiro diz “vou <b>no</b> mercado”, com “em” para a direção. Em finlandês, a direção tem um caso próprio, diferente do “onde”. Para os lugares “dentro” desta lição, é o ilativo: <span class="fi">Menen kauppaan.</span> (vou ao mercado), nunca <span class="fi pala">menen kaupassa</span>. <span class="fi">Kaupassa</span> é onde você já está. Para os lugares “em cima, junto”, a direção é o <span class="fi pala">-lle</span> (lição 7).</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas: em casa, aqui, lá</h3>
    <p>Guarde como blocos. A palavra <span class="fi">koti</span> (casa, lar) tem duas formas especiais, <span class="fi">kotona</span> e <span class="fi">kotoa</span>; <span class="fi">kotiin</span> é o ilativo normal, que você aprende a formar na Gramática 2 (parte B).</p>
    <ul>
      <li><span class="fi"><span data-l="olla#2">Olen</span> kotona.</span> = estou em casa</li>
      <li><span class="fi">Tulen kotoa.</span> = venho de casa</li>
      <li><span class="fi">Menen kotiin.</span> = vou para casa</li>
      <li><span class="fi">täällä, täältä, tänne</span> = aqui, daqui, para cá</li>
      <li><span class="fi">siellä, sieltä, sinne</span> = lá, de lá, para lá</li>
      <li><span class="fi">Minne?</span> = o mesmo que <span class="fi">mihin?</span> (para onde?)</li>
    </ul>
  </div>
  <ul class="esim">
    <li class="s" data-pt="Vem cá! – Já vou, estou indo daqui.">Tule tänne! – Tulen! Lähden täältä nyt.</li>
    <li class="s" data-pt="Para onde você vai? – Para lá, para a Oodi.">Minne sinä menet? – Sinne, Oodiin.</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: onde e de onde</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>3. Onde? De onde? Para onde? Responda pelas fotos</h3>
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

  <aside class="kulttuuri">
    <p class="yla">Você sabia? · Tiesitkö?</p>
    <h3>Kuusamo: renas, ruska e pedras muito antigas</h3>
    <figure class="kuva" data-kuva="kuusamo"></figure>
    <p><span class="fi">Kuusamo</span> fica no nordeste da Finlândia, perto da fronteira com a Rússia. Lá está o parque nacional de Oulanka (<span class="fi">kansallispuisto</span>), com rios rápidos e trilhas de vários dias, e a montanha <span class="fi">Ruka</span>, cheia de esquiadores no inverno. Na região, as renas (<span class="fi">poro</span>) andam soltas e atravessam a estrada sem pressa.</p>
    <p>Em setembro vem a <span class="fi">ruska</span>: as folhas das bétulas e das plantas baixas ficam amarelas, laranja e vermelhas, e muita gente viaja só para ver. Para geólogos como a Maia e o Jay, Kuusamo também é interessante por baixo da terra: as rochas da região têm mais de dois bilhões de anos. E depois do trabalho de campo, claro, vem a sauna à beira do lago.</p>
  </aside>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Ouça: onde, de onde ou para onde?</h3>
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
    <div class="valinta" data-kuuntele="Oodista" data-oikea="Mistä?">
      <p class="kysymys">Qual pergunta?</p>
      <div class="vaihtoehdot"><button type="button">Missä?</button><button type="button">Mistä?</button><button type="button">Mihin?</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Onde? Escreva a forma com -ssa ou -ssä</h3>
    <p class="ohje">A palavra básica está entre parênteses. Pense no genitivo: <span class="fi">kauppa → kaupan → kaupassa</span>. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Maia on <span class="aukko" data-oikea="kirjastossa"></span>. <span data-ei-kuplaa>(kirjasto)</span></p>
      <p>Kirja on <span class="aukko" data-oikea="hyllyssä"></span>. <span data-ei-kuplaa>(hylly)</span></p>
      <p>Maia on <span class="aukko" data-oikea="hississä"></span>. <span data-ei-kuplaa>(hissi)</span></p>
      <p>Me asumme <span class="aukko" data-oikea="Helsingissä"></span>. <span data-ei-kuplaa>(Helsinki)</span></p>
      <p>Poro on <span class="aukko" data-oikea="metsässä"></span>. <span data-ei-kuplaa>(metsä)</span></p>
      <p>Kivi on <span class="aukko" data-oikea="joessa"></span>. <span data-ei-kuplaa>(joki)</span></p>
      <p>Ostan leipää <span class="aukko" data-oikea="kaupassa"></span>. <span data-ei-kuplaa>(kauppa)</span></p>
      <p>Jay on <span class="aukko" data-oikea="järvessä"></span> vain kymmenen sekuntia. <span data-ei-kuplaa>(järvi)</span></p>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Aprofundar e fechar',
      html: `
<ul class="tavoitteet">
  <li>Você diz para onde vai, com o ilativo: <span class="fi">Menen kirjastoon.</span> <span class="fi">Jay menee kotiin.</span></li>
  <li>Você forma o ilativo de três jeitos: <span class="fi">talo → taloon</span>, <span class="fi">maa → maahan</span>, <span class="fi">huone → huoneeseen</span>.</li>
  <li>Você diz o tema de um livro com o elativo: <span class="fi">kirja Tšernobylistä</span>.</li>
  <li>Você fala de você em finlandês: onde mora, de onde é, para onde vai e que livro quer.</li>
</ul>
<p data-paikka="toolonlahti-syksy">Sábado. A Maia e o Jay vão à <span class="fi">Oodi</span>, a biblioteca central de Helsinque, à beira da baía Töölönlahti. A Maia quer um cartão da biblioteca e livros sobre um tema novo. Ela sempre tem um tema novo, e mergulha nele inteira. O Jay só quer dormir.</p>

<section class="osio">
  <h2>Diálogo B: <span class="fi">Oodissa</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure os três casos: onde (<span class="fi pala">-ssa</span>), de onde (<span class="fi pala">-sta</span>) e para onde (<span class="fi">Oodiin, kotiin, hissiin</span>).</p>
  <div class="kpl" id="t06-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="É sábado. A Maia e o Jay vão à Oodi. A Oodi é a nova biblioteca de Helsinque.">On lauantai. Maia ja Jay menevät Oodiin. Oodi on Helsingin uusi kirjasto.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia quer um cartão da biblioteca. Ela também quer encontrar livros sobre um tema novo. O Jay só quer dormir.">Maia haluaa kirjastokortin. Hän haluaa myös löytää kirjoja uudesta aiheesta. Jay haluaa vain nukkua.</p>
    <p class="s" data-h="maia" data-pt="Eu queria um cartão da biblioteca, por favor.">Haluaisin kirjastokortin, kiitos.</p>
    <p class="s" data-h="kirjastonhoitaja" data-pt="Certo. Onde você mora?">Selvä. Missä sinä asut?</p>
    <p class="s" data-h="maia" data-pt="Eu moro em Sörnäinen. Mas eu sou do Brasil, de Belo Horizonte.">Minä asun Sörnäisissä. Mutta minä olen Brasiliasta, Belo Horizontesta.</p>
    <p class="s" data-h="kirjastonhoitaja" data-pt="Eu sou do Marrocos. Bem-vinda à Oodi! Aqui está o cartão da biblioteca.">Minä olen Marokosta. Tervetuloa Oodiin! Tässä on kirjastokortti.</p>
    <p class="s" data-h="maia" data-pt="Obrigada! Eu também queria livros sobre Chernobyl.">Kiitos! Haluaisin myös kirjoja Tšernobylistä.</p>
    <p class="s" data-h="jay" data-pt="De novo?">Taas?</p>
    <p class="s" data-h="maia" data-pt="De novo. Em Chernobyl tem uma floresta vermelha, e eu quero saber por quê.">Taas. Tšernobylissä on punainen metsä ja minä haluan tietää, miksi.</p>
    <p class="s" data-h="jay" data-pt="Claro, é um assunto importante. E onde eu posso dormir?">Tietysti, se on tärkeä aihe. Entä missä minä voin nukkua?</p>
    <p class="s" data-h="kirjastonhoitaja" data-pt="Os livros sobre Chernobyl estão no terceiro andar. E você pode dormir em casa.">Kirjat Tšernobylistä <span data-l="olla#2">ovat</span> kolmannessa kerroksessa. Ja sinä voit nukkua kotona.</p>
    <p class="s" data-h="jay" data-pt="Claro! Casa é um bom lugar.">Tottakai! Koti on hyvä paikka.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay vai para casa. A Maia entra no elevador e encontra um livro.">Jay menee kotiin. Maia menee hissiin ja löytää kirjan.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos. Depois do · está a lição em que a gramática vem.</p>
    <ul>
      <li><span class="fi">Haluaisin kirjastokortin.</span> = eu queria um cartão da biblioteca · <span class="fi">kirjastokortin</span>, o objeto inteiro: lição 12</li>
      <li><span class="fi">Missä sinä asut? – Asun Sörnäisissä.</span> = onde você mora? – moro em Sörnäinen</li>
      <li><span class="fi">kirjoja Tšernobylistä</span> = livros sobre Chernobyl · <span class="fi">kirjoja</span>, o partitivo plural: lição 11 · o tema vai no <span class="fi pala">-sta/-stä</span>: Gramática 2</li>
      <li><span class="fi">Minä haluan tietää, miksi.</span> = eu quero saber por quê · <span class="fi">tietää</span> = saber</li>
      <li><span class="fi">kolmannessa kerroksessa</span> = no terceiro andar · o número também ganha <span class="fi pala">-ssa</span>: lição 12</li>
      <li><span class="fi">Sinä voit nukkua kotona.</span> = você pode dormir em casa · <span class="fi">voida</span> + verbo = poder</li>
      <li><span class="fi">Maia löytää kirjan.</span> = a Maia acha um livro · <span class="fi">löytää</span> = achar, encontrar</li>
    </ul>
  </div>
</section>

<section class="osio">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="Na biblioteca" data-sanat="kirjasto,kirja,kirjastokortti,hylly,kerros,lainata,palauttaa,ilmainen"></div>
  <p>As outras palavras da lição estão no <a href="#t06-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Extra (opcional): na máquina, <span class="fi" data-l="lainata:imper.2s">Lainaa</span> ou <span class="fi" data-l="palauttaa:imper.2s">Palauta</span>?</h2>
  <details>
  <summary>Abrir o extra (opcional): a máquina de empréstimo da Oodi. Não faz parte da lição; pode pular.</summary>
  <p>No terceiro andar, a Maia junta uma pilha de livros. Na Oodi ninguém carimba nada: cada um empresta e devolve na máquina. <span class="fi" data-l="lainata:imper.2s">Lainaa</span> = pegue emprestado; <span class="fi" data-l="palauttaa:imper.2s">Palauta</span> = devolva. A Maia ainda traz na sacola um livro da semana passada.</p>
  <p class="ohje">Toque num livro: a máquina lê o título. Depois aperte <span class="fi" data-l="lainata:imper.2s">Lainaa</span> (o livro vai para a sacola da Maia) ou <span class="fi" data-l="palauttaa:imper.2s">Palauta</span> (o livro volta para a estante). O título diz o tema com <span class="fi pala">-sta</span>; a máquina diz onde o livro está com <span class="fi pala">-ssa</span>. E se a Maia levar os três livros sobre Chernobyl…</p>
  <div class="lainausautomaatti" data-otsikko="Oodi · empréstimo e devolução">
    <p class="s" data-h="automaatti" data-viesti="alku" data-pt="Escolha um livro da estante.">Valitse kirja hyllystä.</p>
    <p class="s" data-h="automaatti" data-viesti="lainattu" data-pt="O livro agora está emprestado. Da estante para a sacola!">Kirja on nyt lainassa. Hyllystä kassiin!</p>
    <p class="s" data-h="automaatti" data-viesti="palautettu" data-pt="O livro está de novo na biblioteca. Da sacola para a estante!">Kirja on taas kirjastossa. Kassista hyllyyn!</p>
    <p class="s" data-h="automaatti" data-viesti="jo-lainassa" data-pt="Este livro já está emprestado.">Tämä kirja on jo lainassa.</p>
    <p class="s" data-h="automaatti" data-viesti="ei-lainassa" data-pt="Este livro não está emprestado.">Tämä kirja ei ole lainassa.</p>
    <p class="s" data-h="maia" data-viesti="tsernobyl" data-pt="Três livros! O Jay vai dizer: de novo.">Kolme kirjaa! Jay sanoo: taas.</p>
    <p class="la-alue" data-alue="hylly" lang="fi-FI">Hyllyssä</p>
    <p class="la-alue" data-alue="kassi" lang="fi-FI">Maian kassissa</p>
    <div class="la-kirja" data-nimi="Tšernobyl" data-vari="1" data-sarja="tsernobyl"><p class="s" data-h="automaatti" data-pt="Um livro sobre Chernobyl.">Kirja Tšernobylistä.</p></div>
    <div class="la-kirja" data-nimi="Punainen metsä" data-vari="2" data-sarja="tsernobyl"><p class="s" data-h="automaatti" data-pt="Um livro sobre a floresta vermelha.">Kirja punaisesta metsästä.</p></div>
    <div class="la-kirja" data-nimi="Pripjat" data-vari="3" data-sarja="tsernobyl"><p class="s" data-h="automaatti" data-pt="Um livro sobre Pripyat, a cidade vazia ao lado de Chernobyl.">Kirja Pripjatista.</p></div>
    <div class="la-kirja" data-nimi="Kuusamo" data-vari="4"><p class="s" data-h="automaatti" data-pt="Um livro sobre Kuusamo.">Kirja Kuusamosta.</p></div>
    <div class="la-kirja" data-nimi="Brasilia" data-vari="5"><p class="s" data-h="automaatti" data-pt="Um livro sobre o Brasil.">Kirja Brasiliasta.</p></div>
    <div class="la-kirja" data-nimi="sauna" data-vari="6" data-paikalla="kassi"><p class="s" data-h="automaatti" data-pt="Um livro sobre a sauna.">Kirja saunasta.</p></div>
  </div>
  </details>
</section>

<section class="osio">
  <h2>Na saída</h2>
  <p>O Jay foi para casa dormir, e a Maia desce de elevador com os livros sobre Chernobyl. Perto da porta, um cartaz amarelo diz que a <span class="fi">Habituuri</span>, uma feira de design, procura artistas.</p>
  <p class="s" data-h="maia" data-pt="Habituuri… Será que eu consigo entrar lá?">Habituuri… Pääsenkö minä sinne?</p>
  <p>A Maia pinta e faz cerâmica, mas não sabe se é uma artista de verdade. Ela pega a ficha de inscrição e manda uma mensagem para o Jay.</p>
  <p class="s" data-h="maia" data-pt="Jay! Eu tenho uma ficha de inscrição para a Habituuri.">Jay! Minulla on hakemus Habituuriin.</p>
  <p class="s" data-h="jay" data-pt="Que bom. Eu estou dormindo.">Hyvä. Minä nukun.</p>
  <p>A Maia guarda a ficha na bolsa. Na lição 7, você também preenche a sua.</p>
</section>

<section class="osio" data-osa="gramatica" data-paikka="helsinki-lumi">
  <h2>Gramática 2 · O ilativo e o elativo “sobre”</h2>
  <h3>1. Para onde? Três jeitos de formar o ilativo</h3>
  <p>O ilativo sai do radical <b>forte</b>. Na maioria das palavras, ele é a própria forma básica (<span class="fi">talo, kirja, kauppa</span>). Nas palavras em <span class="fi pala">-i</span> como <span class="fi">kivi, joki, järvi</span>, o radical termina em <span class="fi pala">-e</span>: <span class="fi">kiveen, jokeen, järveen</span>. Olhe o fim do radical e escolha a regra:</p>
  <table class="taivutus">
    <tr><th>quando?</th><th>regra</th><th>exemplos</th></tr>
    <tr><td>quase sempre</td><td>repita a última vogal + <span class="fi pala">n</span></td><td><span class="fi">talo → taloon, kirja → kirjaan, koti → kotiin, Oodi → Oodiin, hylly → hyllyyn, kivi → kiveen</span><span class="kaannos" lang="pt-BR">casa, livro, lar, Oodi, estante, pedra (radical kive-)</span></td></tr>
    <tr><td>palavra de uma sílaba, com vogal longa ou ditongo</td><td><span class="fi pala">h</span> + a mesma vogal + <span class="fi pala">n</span></td><td><span class="fi">maa → maahan, yö → yöhön, tie → tiehen</span><span class="kaannos" lang="pt-BR">país, noite, estrada</span></td></tr>
    <tr><td>palavra de duas ou mais sílabas com vogal longa no fim do radical</td><td><span class="fi pala">-seen</span></td><td><span class="fi">huone → huoneeseen, aihe → aiheeseen, Espoo → Espooseen</span><span class="kaannos" lang="pt-BR">quarto, tema, Espoo</span></td></tr>
  </table>
  <div class="huomio">
    <p><b>Atenção à gradação:</b> <span class="fi pala">-ssa</span> e <span class="fi pala">-sta</span> usam o radical do genitivo (fraco em <span class="fi">kauppa, joki, Helsinki</span>), mas o ilativo usa o radical <b>forte</b>: <span class="fi">kauppa → kaupassa, kaupasta</span>, mas <span class="fi">kauppaan</span>; <span class="fi">Helsinki → Helsingissä</span>, mas <span class="fi">Helsinkiin</span>; <span class="fi">joki → joessa</span>, mas <span class="fi">jokeen</span> (radical forte <span class="fi pala">joke-</span>). Na dúvida, toque na palavra: a bolha mostra as formas.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinki-lumi">
  <h2>Exercícios: o ilativo</h2>

  <div class="tehtava" data-tyyppi="lukeminen" data-ei-sivulle>
    <h3>6. Para onde? Escolha o ilativo</h3>
    <p class="ohje">Para onde? Escolha o ilativo, formado pela regra da tabela acima (última vogal repetida, <span class="fi pala">h</span> + vogal ou <span class="fi pala">-seen</span>). Cuidado: o ilativo usa o radical forte.</p>
    <div class="valinta" data-oikea="taloon">
      <p class="kysymys"><span class="fi">talo → Menen ___.</span></p>
      <div class="vaihtoehdot"><button type="button">talossa</button><button type="button">taloon</button><button type="button">talosta</button></div>
    </div>
    <div class="valinta" data-oikea="puuhun">
      <p class="kysymys"><span class="fi">puu → Kissa menee ___. <span data-ei-kuplaa>(puu = árvore)</span></span></p>
      <div class="vaihtoehdot"><button type="button">puuhun</button><button type="button">puussa</button><button type="button">puusta</button></div>
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
</section>

<section class="osio" data-osa="gramatica" data-paikka="helsinki-lumi">
  <h3>2. De onde… e “sobre”: o elativo</h3>
  <p>O <span class="fi pala">-sta</span> funciona como o nosso “de”: diz de onde algo vem (<span class="fi">kivi joesta</span>, uma pedra do rio) e também o <b>tema</b>, como em “falar <b>de</b> Kuusamo”. Para o tema, o português também diz “sobre”.</p>
  <ul class="esim">
    <li class="s" data-pt="livros sobre Chernobyl">kirjoja Tšernobylistä</li>
    <li class="s" data-pt="O livro fala de Kuusamo.">Kirja kertoo Kuusamosta.</li>
    <li class="s" data-pt="O Jay fala da sauna.">Jay puhuu saunasta.</li>
    <li class="s" data-pt="Sobre o que é o livro? – Sobre a sauna.">Mistä kirja kertoo? – Saunasta.</li>
  </ul>
  <p><b>Atenção: dois sentidos.</b> Sozinha, <span class="fi">kirja Brasiliasta</span> pode ser “um livro <b>sobre</b> o Brasil” ou “um livro que <b>veio</b> do Brasil”, como “um livro do Brasil” em português. O verbo decide: com <span class="fi">kertoa</span>, <span class="fi">puhua</span> e <span class="fi">lukea</span> é o tema; com <span class="fi">tulla</span> é a origem. Na biblioteca, quase sempre é o tema.</p>
  <ul class="esim">
    <li class="s" data-pt="O livro fala do Brasil. (tema)">Kirja kertoo Brasiliasta.</li>
    <li class="s" data-pt="O livro vem do Brasil. (origem)">Kirja tulee Brasiliasta.</li>
  </ul>
  <div class="muista">
    <p><b>Lembre:</b> estes são os casos “dentro”. Para “em cima, junto” (na mesa, na estação, na praça) o finlandês tem outros três: <span class="fi pala">-lla, -lta, -lle</span>. Eles vêm na lição 7. Por isso a Maia ainda não diz onde fica a montanha <span class="fi">Ruka</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinki-lumi">
  <h2>Exercícios: para onde e sobre o quê</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Escreva: para onde? e sobre o quê?</h3>
    <p class="ohje">A palavra básica está entre parênteses. Nas frases com “para onde”, escreva o ilativo (radical forte!); nas frases com um tema, o <span class="fi pala">-sta/-stä</span>. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Maia ja Jay menevät <span class="aukko" data-oikea="Oodiin"></span>. <span data-ei-kuplaa>(Oodi)</span></p>
      <p>Jay menee <span class="aukko" data-oikea="kotiin"></span>. <span data-ei-kuplaa>(koti)</span></p>
      <p>Maia menee <span class="aukko" data-oikea="hissiin"></span>. <span data-ei-kuplaa>(hissi)</span></p>
      <p>Saunasta Maia menee <span class="aukko" data-oikea="järveen"></span>. <span data-ei-kuplaa>(järvi)</span></p>
      <p>Minä menen <span class="aukko" data-oikea="kauppaan"></span>. <span data-ei-kuplaa>(kauppa)</span></p>
      <p>Tervetuloa <span class="aukko" data-oikea="Helsinkiin"></span>! <span data-ei-kuplaa>(Helsinki)</span></p>
      <p>Jay menee <span class="aukko" data-oikea="huoneeseen"></span>. <span data-ei-kuplaa>(huone)</span></p>
      <p>Haluaisin kirjan <span class="aukko" data-oikea="Kuusamosta"></span>. <span data-ei-kuplaa>(Kuusamo)</span></p>
      <p>Mistä kirja kertoo? – <span class="aukko" data-oikea="Saunasta"></span>. <span data-ei-kuplaa>(sauna)</span></p>
      <p>Maia puhuu aina <span class="aukko" data-oikea="Brasiliasta"></span>. <span data-ei-kuplaa>(Brasilia)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>8. Escolha a pergunta</h3>
    <p class="ohje">A resposta diz qual pergunta foi feita: <span class="fi pala">-ssa</span> → <span class="fi">missä?</span>, <span class="fi pala">-sta</span> → <span class="fi">mistä?</span>, para dentro → <span class="fi">mihin?</span></p>
    <div class="valinta" data-oikea="Mihin">
      <p class="kysymys" data-ei-kuplaa><span class="fi">___ Maia menee? – Hissiin.</span></p>
      <div class="vaihtoehdot"><button type="button">Missä</button><button type="button">Mistä</button><button type="button">Mihin</button></div>
    </div>
    <div class="valinta" data-oikea="Mistä">
      <p class="kysymys" data-ei-kuplaa><span class="fi">___ sinä olet? – Brasiliasta.</span></p>
      <div class="vaihtoehdot"><button type="button">Mistä</button><button type="button">Mihin</button><button type="button">Missä</button></div>
    </div>
    <div class="valinta" data-oikea="Mistä">
      <p class="kysymys" data-ei-kuplaa><span class="fi">___ kirja kertoo? – Tšernobylistä.</span></p>
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
      <p class="kysymys" data-ei-kuplaa><span class="fi">___ Jay nukkuu? – Kotona.</span></p>
      <div class="vaihtoehdot"><button type="button">Missä</button><button type="button">Mistä</button><button type="button">Mihin</button></div>
    </div>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Bibliotecas: a sala de estar dos finlandeses</h3>
  <figure class="kuva" data-kuva="oodi-lukusali"></figure>
  <p>Na Finlândia, o cartão da biblioteca (<span class="fi">kirjastokortti</span>) é <span class="fi">ilmainen</span>: de graça, para quem mora no país. Com ele você empresta livros, filmes e música, e em muitas bibliotecas também instrumentos (<span class="fi">soitin</span>), máquinas de costura, ferramentas e até raquetes. Os finlandeses estão entre os povos que mais usam bibliotecas no mundo.</p>
  <p>A <span class="fi">Oodi</span>, a biblioteca central de Helsinque, abriu em dezembro de 2018, em frente ao Parlamento, na ponta da baía Töölönlahti. Tem três andares: no térreo, café e cinema; no segundo, estúdios de música, impressoras 3D e máquinas de costura que qualquer um pode reservar; no terceiro, o “céu dos livros”, com cerca de cem mil livros e uma varanda sobre a cidade. O nome <span class="fi">Oodi</span> quer dizer “ode”, um poema de homenagem.</p>
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
  <h2>Exercícios: traduzir e responder</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>9. Traduza para o finlandês</h3>
    <p class="ohje">Escreva em finlandês. Depois compare com o modelo.</p>
    <div class="kaanna"><p class="pt">Eu moro em Helsinque.</p><p class="s" data-pt="Eu moro em Helsinque.">Asun Helsingissä.</p></div>
    <div class="kaanna"><p class="pt">Eu vou para a biblioteca.</p><p class="s" data-pt="Eu vou para a biblioteca.">Menen kirjastoon.</p></div>
    <div class="kaanna"><p class="pt">O Jay vem da biblioteca.</p><p class="s" data-pt="O Jay vem da biblioteca.">Jay tulee kirjastosta.</p></div>
    <div class="kaanna"><p class="pt">Um livro sobre a Finlândia, por favor.</p><p class="s" data-pt="Um livro sobre a Finlândia, por favor.">Kirja Suomesta, kiitos.</p></div>
    <div class="kaanna"><p class="pt">A gente vai para casa.</p><p class="s" data-pt="A gente vai para casa. (Também certo, sem o pronome: Menemme kotiin.)">Me menemme kotiin.</p></div>
    <div class="kaanna"><p class="pt">A Maia está em casa.</p><p class="s" data-pt="A Maia está em casa.">Maia <span data-l="olla#2">on</span> kotona.</p></div>
    <div class="kaanna"><p class="pt">Vem cá! Eu quero ir para lá.</p><p class="s" data-pt="Vem cá! Eu quero ir para lá.">Tule tänne! Haluan mennä sinne.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>10. Responda às perguntas</h3>
    <p class="ohje">Responda em voz alta antes de abrir o modelo. Os modelos são as respostas da Maia.</p>
    <details class="vastaus"><summary lang="fi-FI">Missä sinä asut?</summary><p class="s" data-pt="Moro em Helsinque, em Sörnäinen.">Asun Helsingissä, Sörnäisissä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mistä sinä olet?</summary><p class="s" data-pt="Sou do Brasil, de Belo Horizonte.">Olen Brasiliasta, Belo Horizontesta.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mihin sinä menet lauantaina?</summary><p class="s" data-pt="Vou para a Oodi. E depois para a sauna.">Menen Oodiin. Ja sitten saunaan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Pääsetkö sinä lauantaina Oodiin?</summary><p class="s" data-pt="Consigo! E depois vou para casa.">Pääsen! Ja sitten menen kotiin.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla kirjastokortti?</summary><p class="s" data-pt="Tenho. Ele é de graça!">On. Se on ilmainen!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko Helsinki hyvä paikka?</summary><p class="s" data-pt="É. Aqui tem uma biblioteca boa, e às vezes eu vou à sauna.">On. Täällä on hyvä kirjasto ja joskus menen saunaan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mistä sinä haluat lukea?</summary><p class="s" data-pt="Quero ler sobre a história do Brasil. É um tema difícil, mas importante.">Haluan lukea Brasilian historiasta. Se on vaikea mutta tärkeä aihe.</p></details>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinki-lumi">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t06">
    <h3>Lição de casa</h3>
    <p>Escreva cinco frases: onde você mora (<span class="fi">Asun…</span>), de onde você é (<span class="fi">Olen…</span>), para onde você vai no sábado (<span class="fi">Lauantaina menen…</span>), um livro que você quer (<span class="fi">kirja</span> + <span class="fi pala">-sta</span>) e onde você está agora. Leia em voz alta e cuide do <span class="fi pala">r</span>.</p>
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
    <li>Sei dizer o tema de um livro com o elativo: kirja Tšernobylistä.</li>
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
<div class="sijataulu" data-sana="kirjasto" data-sijat="nominatiivi,genetiivi,inessiivi,elatiivi,illatiivi"></div>`
    },
    {
      id: 'illatiivi', otsikko: 'Para onde? Como formar o ilativo', taso: 'essencial', hakuosa: 'h-paikallissijat', treeni: 't06-mihin',
      html: `
<p>O ilativo usa o radical <b>forte</b>: quase sempre a forma básica, mas <span class="fi">kivi, joki, järvi</span> têm o radical em <span class="fi pala">-e</span> (<span class="fi">kiveen, jokeen, järveen</span>). Três regras, pelo fim do radical:</p>
<ol>
  <li><b>Quase sempre:</b> repita a última vogal + <span class="fi pala">n</span>: <span class="fi">talo → taloon</span>, <span class="fi">Oodi → Oodiin</span>, <span class="fi">kivi → kiveen</span> (radical <span class="fi pala">kive-</span>).</li>
  <li><b>Uma sílaba com vogal longa ou ditongo:</b> <span class="fi pala">h</span> + a mesma vogal + <span class="fi pala">n</span>: <span class="fi">maa → maahan</span>, <span class="fi">yö → yöhön</span>, <span class="fi">tie → tiehen</span>.</li>
  <li><b>Duas sílabas ou mais, vogal longa no fim do radical:</b> <span class="fi pala">-seen</span>: <span class="fi">huone → huoneeseen</span>, <span class="fi">Espoo → Espooseen</span>.</li>
</ol>
<ul class="esim">
  <li class="s" data-pt="Vou para a sauna.">Menen saunaan.</li>
  <li class="s" data-pt="Bem-vindo(a) à Finlândia!">Tervetuloa Suomeen!</li>
</ul>`
    },
    {
      id: 'astevaihtelu6', otsikko: 'Gradação: fraco no -ssa e -sta, forte no ilativo', taso: 'atenção', hakuosa: 'h-astevaihtelu', treeni: 't06-mihin',
      html: `
<p>Palavras com gradação mudam por dentro. O <span class="fi pala">-ssa</span> e o <span class="fi pala">-sta</span> vêm do radical do genitivo (fraco nestas palavras); o ilativo fica com o radical forte: <span class="fi">kauppaan</span>, <span class="fi">Helsinkiin</span>, <span class="fi">jokeen</span> (radical <span class="fi pala">joke-</span>, não a forma básica <span class="fi">joki</span>).</p>
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
<p>O <span class="fi pala">-sta</span> diz de onde algo vem e também o <b>tema</b>: sobre o que é um livro, de que se fala. Como o “de” do português: “falar <b>de</b> Kuusamo”.</p>
<ul class="esim">
  <li class="s" data-pt="livros sobre Chernobyl">kirjoja Tšernobylistä</li>
  <li class="s" data-pt="O livro fala de Kuusamo.">Kirja kertoo Kuusamosta.</li>
  <li class="s" data-pt="O Jay fala da sauna.">Jay puhuu saunasta.</li>
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
`
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
  <li><b>Direção não é “em”:</b> “vou no mercado” = <span class="fi">menen kauppaan</span> (ilativo), não <span class="fi pala">menen kaupassa</span>. A direção tem caso próprio: nos lugares “dentro”, o ilativo; nos lugares “em cima, junto”, o <span class="fi pala">-lle</span> (lição 7).</li>
  <li><b>O ilativo é forte:</b> <span class="fi">kaupassa</span>, mas <span class="fi">kauppaan</span>; <span class="fi">Helsingissä</span>, mas <span class="fi">Helsinkiin</span>.</li>
  <li><b>-ssa ou -ssä:</b> harmonia vocálica: <span class="fi">saunassa</span>, <span class="fi">metsässä</span>, <span class="fi">Helsingissä</span>.</li>
  <li><b>“De” sobre um tema:</b> <span class="fi">kirja Tšernobylistä</span> (elativo), como “falar de Kuusamo”.</li>
  <li><b>kotona, kotoa, kotiin:</b> <span class="fi">kotona</span> e <span class="fi">kotoa</span> são formas especiais; “estou em casa” é <span class="fi">kotona</span>, não <span class="fi pala">kodissa</span>. <span class="fi">Kotiin</span> é o ilativo normal.</li>
  <li><b>Consoante dupla:</b> <span class="fi">kirjastossa</span>, nunca <span class="fi pala">kirjastosa</span>.</li>
  <li><b>Procurar é “de onde”:</b> <span class="fi">Mistä löydän kirjan?</span></li>
  <li><b>O pronome pode cair:</b> <span class="fi">Menemme kotiin</span> também está certo.</li>
  <li><b>O r:</b> sempre da ponta da língua: <span class="fi">rauta</span>, nunca “hauta”.</li>
</ul>`
    }
  ]
});
