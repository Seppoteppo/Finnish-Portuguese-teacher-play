/* Tottakai, lição 12: Savassi ja Feira Hippie (Passon jakso 12 Maian näkökulmasta; OPPITUNNIT_6_20.md §5b Oppitunti 12).
   Oma materiaali, ei kirjan tekstiä. Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t12, ”Parte A · Encontro”): maanantai 21.12. iltapäivällä (lounaan jälkeen, t11), +28 °C, Jay pitkissä housuissa
     ja takissa; Maia vie hänet ostoksille Savassiin. Dialogi A (24 repliikkiä, Maia ja Jay puhuvat kaupassa suomea salakielenä, myyjä vain portugaliksi
     kertojan tekstissä), Frases prontas, kikka A: sovituskoppi (komponentit.js provador, data-lauseet: valmiit
     suomenkieliset .s-repliikit väreittäin; koko = objekti -n, kielto = partitiivi), sanasto, ääntäminen y ja ö (Maian
     virhe ”huva” → hyvä; kyy/kuu, myy/muu, työ/tuo), tehtävät 1–3, Gramática 1 objekti (koko -n / -t, osa, jatkuva,
     kielto ja luku partitiivilla, persoonapronominit -t; tehtävä 4 heti säännön ja partitiiviverbien perään; käsky
     perusmuodolla tunnistukseen), tehtävä 5 (kuuntelu), tehtävä 6 (kirjoitettu objektisarja, 6 aukkoa).
   - osa B (#t12-b, ”Parte B · Aprofundar e fechar”): maanantai-ilta, joulumyyjäiset Feira Hippien paikalla (Avenida Afonso Pena). Gramática 2
     adjektiivin kongruenssi (sinisessä paidassa, isossa kaupassa, kolmannessa kerroksessa) ja tunnistuslaatikko kolmesta
     t08:sta siirretystä vartalotyypistä (vesi, puhelin, rikas; kortti sanatyypit12, reconhecer), tehtävät 7 (vartalotyypit,
     tunnistus, t08:n poistetut kolme kohtaa) ja 8 (adjektiivi), dialogi B
     (23 repliikkiä: K2:n turistit Uuno ja Eenok, Jay palvelee suomeksi; vihjeet: haalarit helteessä, oudot kolikot ja
     juuri oikea raha), peli Feira Hippie (pelit.js), tehtävät 9 (dialogin B ymmärtäminen), 10 (käännös) ja 11 (puhuminen,
     details.vastaus), kulttuuri, Na rua (tän), kotitehtävä, itsearvio.
   Materiaalivaihe 31.10.2026 (q4 a): ”Promessas cumpridas” ja hintatehtävä (reaalit) pois; käännös on nyt 10.
   Uudistus 24.10.2026 (katselmointi REVIEW.md §6, LESSON_MAP_v2, SWAPS R1 ja R12): objektikielioppi kuunteluineen A:han,
   kirjoitettu objektisarja A:han (tehtävä 6); vanhat tehtävät 7 (dialogin B ymmärtäminen) ja 8 (hinnat) palautettu
   B:hen tehtäviksi 9–10 (S5 F1; hinnat odottavat omistajaa, UUDISTUS_KYSYMYKSET 4),
   vartalotyypit t08:sta tunnistukseen; ”Promessas cumpridas” odottaa omistajaa (UUDISTUS_KYSYMYKSET 4).
   Lunastaa lupaukset ”o objeto: lição 12” (t03 kassin, t04 hyvän kahvilan, t05 Minä ymmärrän suomea, t06
   kirjastokortin ja kolmannessa kerroksessa, t08 katsoo asuntoa, Minä otan tämän, maalaan possua, vaaleanpunaista
   maalia, t09 Otan sen): taulukko Gramática 1:ssä. Brasilian jakso: suomea puhuvat vain Maia, Jay ja suomalaiset
   turistit; Martan ja myyjän sanat portugaliksi kertojan tekstissä. Kaikki kirjakieltä; puhekieli vain Na rua -nurkassa.
   Monikon partitiivi (shortseja, maljakoita, tauluja) on oppitunnin 11 asia. Ei omistusliitteitä (lição 17).
   Maian virhe .pala + data-hairio. koko (tamanho) = data-l="koko:mitta" (pelkkä koko = t13:n ”todo, inteiro”).
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat raha, ongelma, panna (+ päälle, t14 → t12), paha (Ei paha!), juuri,
   vaikka, siksi, riittää, itse, jotain muuta, ne (niitä), kuten; dialogit 21 + 19; sanasto 46 → 39; sanalistat 25 → 12. */
Kurssi.lisaa({
  id: 't12',
  lyhyt: '12',
  jakso: 'Lição 12',
  otsikko: 'Savassi e a Feira Hippie: roupas e o objeto',
  lahde: 'Tema: roupas para o calor na Savassi e a banca da Maia na Feira Hippie · Gramática: o objeto inteiro (-n, -t) ou parte (partitivo), a negação com partitivo, o adjetivo no mesmo caso do substantivo (sinisessä paidassa) · Reconhecer: vesi → veden, puhelin → puhelimen, rikas → rikkaan · Pronúncia: y e ö',
  aiheet: ['raha', 'ominaisuus', 'kaupunki', 'toiminta'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga e pintora; vende quadros e cerâmica na Feira Hippie' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; chega ao verão de Belo Horizonte de calça comprida' },
    uuno: { nimi: 'Uuno', tyyppi: 'mies', vaihto: 7, kuvaus: 'turista finlandês do avião; macacão azul-claro, cabelo platinado; viagem da carne' },
    eenok: { nimi: 'Eenok', tyyppi: 'mies', vaihto: 8, kuvaus: 'turista finlandês, irmão do Uuno; o mesmo macacão azul-claro, mesmo no calor' }
  },

  sanasto: [
    'lahja', 'vaate', 'paita', 'housu', 'shortsi', 'mekko', 'hame', 'takki', 'lippis', 'hattu', 'kenkä',
    'sovituskoppi', 'peili', 'koko:mitta', 'sovittaa', 'käyttää', 'katsella', 'myydä', 'panna', 'päälle',
    'sininen', 'punainen', 'keltainen', 'valkoinen', 'musta', 'vihreä',
    'kuppi', 'kulho', 'maljakko', 'keramiikka', 'pussi', 'raha', 'paha', 'juuri', 'vaikka', 'siksi', 'kuten'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Encontro',
      html: `
<ul class="tavoitteet">
  <li>Você conhece as roupas (<span class="fi">paita, housut, shortsit, lippis</span>) e as cores no provador.</li>
  <li>Você ouve e diz os sons <span class="fi pala">y</span> e <span class="fi pala">ö</span>: <span class="fi">kyy</span> × <span class="fi">kuu</span>.</li>
  <li>Você escolhe e escreve a forma do objeto: a coisa inteira (<span class="fi">Otan tämän paidan.</span>), várias coisas inteiras (<span class="fi">Ostan shortsit.</span>) ou o partitivo para uma parte, uma ação em andamento e a negação (<span class="fi">En osta takkia.</span>).</li>
  <li>Na parte B: o adjetivo no mesmo caso (<span class="fi">sinisessä paidassa</span>) e a banca da Maia na feira de Natal.</li>
</ul>
<p data-paikka="savassi">Segunda-feira, 21 de dezembro, à tarde, depois do almoço no restaurante da Maira. Em Belo Horizonte faz 28 graus. O Jay continua de calça comprida e jaqueta, como se fosse pegar o metrô em Sörnäinen. A Maia decide na hora: agora é dia de compras na Savassi, o bairro das lojas. Lá as vendedoras só falam português, então a Maia e o Jay falam finlandês entre eles: a língua secreta dos dois.</p>

<section class="osio" data-paikka="savassi">
  <h2>Diálogo A: <span class="fi">Ostamme shortsit</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Repare no que acontece com as roupas depois de <span class="fi">ostaa</span> (comprar) e <span class="fi">ottaa</span> (levar): <span class="fi">tämän lippiksen</span> e <span class="fi">shortsit</span>, mas <span class="fi">en tarvitse sandaaleja</span> e <span class="fi">katselee mustia shortseja</span>. E numa palavra que a Maia erra. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t12-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="É segunda-feira. Em Belo Horizonte está quente, vinte e oito graus. A Maia e o Jay andam pela Savassi.">On maanantai. Belo Horizontessa on kuuma, kaksikymmentäkahdeksan astetta. Maia ja Jay kävelevät Savassissa.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay ainda está de calça comprida e jaqueta, como de manhã no Mercado Central.">Jayllä on vielä pitkät housut ja takki, kuten aamulla Mercado Centralissa.</p>
    <p class="s" data-h="kertoja" data-pt="As vendedoras da Savassi só falam português. Por isso a Maia e o Jay falam finlandês: as vendedoras não entendem.">Savassin myyjät puhuvat vain portugalia. Siksi Maia ja Jay puhuvat suomea: myyjät eivät ymmärrä sitä.</p>
    <p class="s" data-h="jay" data-pt="Maia, esta calça é quente demais. Eu não tenho bermuda.">Maia, nämä housut ovat liian lämpimät. Minulla ei ole shortseja.</p>
    <p class="s" data-h="maia" data-pt="A calça também tem um furo! Ai, ai, Jay. Você precisa de uma calça nova. Nesta loja tem bermuda. Vem!">Housuissa on myös reikä! Voi sinua, Jay. Sinä tarvitset uudet housut. Tässä kaupassa on shortseja. Tule!</p>
    <p class="s" data-h="jay" data-pt="Esta loja é grande. Loja grande leva muito dinheiro.">Tämä kauppa on iso. Iso kauppa vie paljon rahaa.</p>
    <p class="s" data-h="maia" data-pt="É grande, mas barata.">Se on iso mutta halpa.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay olha as bermudas pretas. Depois ele olha o preço.">Jay katselee mustia shortseja. Sitten hän katsoo hintaa.</p>
    <p class="s" data-h="jay" data-pt="Cem reais! A bermuda é cara demais.">Sata realia! Shortsit ovat liian kalliit.</p>
    <p class="s" data-h="maia" data-pt="Não olha o preço, Jay. Olha as cores! Aqui também tem bermudas verdes e amarelas.">Älä katso hintaa, Jay. Katso värejä! Täällä on myös vihreitä ja keltaisia shortseja.</p>
    <p class="s" data-h="jay" data-pt="Eu procuro justamente bermuda preta.">Minä etsin juuri mustia shortseja.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia dá ao Jay a bermuda preta e um boné amarelo. O Jay prova no provador.">Maia antaa Jaylle mustat shortsit ja keltaisen lippiksen. Jay sovittaa niitä sovituskopissa.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay sai do provador e se olha no espelho.">Jay tulee ulos sovituskopista ja katsoo peiliin.</p>
    <p class="s" data-h="maia" data-hairio="huva → hyvä" data-pt="Amarelo é uma cor muito &quot;huva&quot; para você! (errado: hyvä)">Keltainen on sinulle todella <span class="pala">huva</span> väri!</p>
    <p class="s" data-h="jay" data-pt="&quot;Hyvä&quot;, Maia, não &quot;huva&quot;: y, como em kyy e yö. O boné não é ruim.">Hyvä, Maia, ei <span class="pala">huva</span>: <span class="pala">y</span>, kuten kyy ja yö. Lippis ei ole paha.</p>
    <p class="s" data-h="maia" data-pt="O tamanho está certo. Leva também sandálias! Aqui eu só uso sandália."><span data-l="koko:mitta">Koko</span> on oikea. Ota vielä sandaalit! Minä käytän täällä vain sandaaleja.</p>
    <p class="s" data-h="jay" data-pt="Eu não preciso de sandália. Eu já tenho sapato.">En minä tarvitse sandaaleja. Minulla on jo kengät.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia está feliz: bermuda e boné, já é muito.">Maia on onnellinen: shortsit ja lippis, se on jo paljon.</p>
    <p class="s" data-h="maia" data-pt="Você compra esta bermuda cara?">Ostatko nämä kalliit shortsit?</p>
    <p class="s" data-h="jay" data-pt="Sim. Compro a bermuda, mesmo que seja cara.">Kyllä. Ostan shortsit, vaikka ne ovat kalliit.</p>
    <p class="s" data-h="maia" data-pt="E o boné?">Entä lippis?</p>
    <p class="s" data-h="jay" data-pt="Aqui tem muito sol. Por isso levo também este boné.">Täällä on paljon aurinkoa. Siksi otan myös tämän lippiksen.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay paga com cartão. Ele sorri para a vendedora e diz: &quot;Obrigada!&quot; A Maia ri.">Jay maksaa kortilla. Hän hymyilee myyjälle ja sanoo: <span lang="pt-BR">Obrigada!</span> Maia nauraa.</p>
    <p class="s" data-h="maia" data-pt="Jay, você não é mulher! Diz &quot;obrigado&quot;.">Jay, sinä et ole nainen! Sano <span lang="pt-BR">obrigado</span>.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde estas como blocos prontos. A regra de quase todas vem mais adiante: o objeto na Gramática 1, nesta parte; o adjetivo junto na Gramática 2, na parte B.</p>
    <ul>
      <li><span class="fi">Minulla ei ole shortseja.</span> = eu não tenho bermuda · <span class="fi">shortsit</span> é sempre plural; na negação, partitivo</li>
      <li><span class="fi">Housuissa on myös reikä!</span> = a calça também tem um furo! · <span class="fi">housut</span> é plural, por isso <span class="fi pala">-issa</span></li>
      <li><span class="fi">Jay katselee mustia shortseja.</span> = o Jay olha bermudas pretas · <span class="fi">katsella</span> pede partitivo (Gramática 1)</li>
      <li><span class="fi">Älä katso hintaa. Katso värejä!</span> = não olha o preço. Olha as cores! · <span class="fi">katsoa</span> com partitivo</li>
      <li><span class="fi">Minä etsin juuri mustia shortseja.</span> = eu procuro justamente bermuda preta · <span class="fi">etsiä</span> com partitivo; <span class="fi">juuri</span> = justamente</li>
      <li><span class="fi">En minä tarvitse sandaaleja.</span> = eu não preciso de sandália · negação: partitivo</li>
      <li><span class="fi">Ostan shortsit, vaikka ne ovat kalliit.</span> = compro a bermuda, mesmo que seja cara · o objeto inteiro no plural: <span class="fi pala">-t</span>; <span class="fi">vaikka</span> = mesmo que</li>
      <li><span class="fi">Siksi otan myös tämän lippiksen.</span> = por isso levo também este boné · o objeto inteiro: <span class="fi pala">-n</span>; <span class="fi">siksi</span> = por isso</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="savassi">
  <h2>No provador: <span class="fi">sovituskoppi</span></h2>
  <p class="ohje">O Jay está diante do espelho (<span class="fi">peili</span>). Toque numa cor: o Jay experimenta camisas e bonés, a Maia comenta, e o Jay decide. O boné amarelo da loja também está aqui. Escute o objeto: quando o Jay leva, a roupa ganha <span class="fi pala">-n</span> (<span class="fi">sinisen paidan</span>); quando não leva, fica no partitivo (<span class="fi">punaista paitaa</span>). A regra vem na Gramática 1, mais adiante nesta parte.</p>
  <div class="provador" data-h="jay" data-lauseet>
    <div data-esine="paita" data-osa="paita" data-varit="sininen:#2563eb,punainen:#d62828,keltainen:#f5c518,valkoinen:#ffffff">
      <p class="s" data-h="maia" data-vari="sininen" data-pt="A camisa azul fica bem em você!">Sininen paita sopii sinulle!</p>
      <p class="s" data-h="jay" data-vari="sininen" data-pt="Ótimo. Eu levo a camisa azul.">Hyvä. Otan sinisen paidan.</p>
      <p class="s" data-h="maia" data-vari="punainen" data-pt="A camisa vermelha é bonita.">Punainen paita on kaunis.</p>
      <p class="s" data-h="jay" data-vari="punainen" data-pt="Ela é pequena demais. Não levo a camisa vermelha.">Se on liian pieni. En ota punaista paitaa.</p>
      <p class="s" data-h="maia" data-vari="keltainen" data-pt="A camisa amarela é divertida!">Keltainen paita on hauska!</p>
      <p class="s" data-h="jay" data-vari="keltainen" data-pt="Divertida? Não compro a camisa amarela.">Hauska? En osta keltaista paitaa.</p>
      <p class="s" data-h="maia" data-vari="valkoinen" data-pt="A camisa branca é boa no verão.">Valkoinen paita on hyvä kesällä.</p>
      <p class="s" data-h="jay" data-vari="valkoinen" data-pt="Certo. Eu levo a camisa branca.">Selvä. Otan valkoisen paidan.</p>
    </div>
    <div data-esine="lippis" data-osa="lippis" data-varit="musta:#1b1b1b,keltainen:#f5c518,vihreä:#2e9d4a">
      <p class="s" data-h="maia" data-vari="musta" data-pt="O boné preto fica quente no sol.">Musta lippis on auringossa kuuma.</p>
      <p class="s" data-h="jay" data-vari="musta" data-pt="Então não levo o boné preto.">Sitten en ota mustaa lippistä.</p>
      <p class="s" data-h="maia" data-vari="keltainen" data-pt="Amarelo é uma cor boa para você!">Keltainen on sinulle hyvä väri!</p>
      <p class="s" data-h="jay" data-vari="keltainen" data-pt="Ótimo. Eu levo o boné amarelo.">Hyvä. Otan keltaisen lippiksen.</p>
      <p class="s" data-h="maia" data-vari="vihreä" data-pt="O boné verde é um pouco grande.">Vihreä lippis on vähän iso.</p>
      <p class="s" data-h="jay" data-vari="vihreä" data-pt="Não, ele serve. Eu levo o boné verde.">Ei, se sopii. Otan vihreän lippiksen.</p>
    </div>
  </div>
</section>

<section class="osio" data-paikka="savassi">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="Roupas e a loja" data-sanat="paita,housu,shortsi,mekko,hame,takki,lippis,kenkä,myyjä,sovituskoppi,peili,sovittaa"></div>
  <p>As outras palavras da lição estão no <a href="#t12-vocabulario">Vocabulário da lição</a>.</p>
  <div class="saanto">
    <h3>Roupas que são sempre plural</h3>
    <p>Como “óculos” em português, algumas roupas ficam <b>sempre no plural</b> em finlandês, mesmo quando é uma peça só: <span class="fi">housut</span> (uma calça), <span class="fi">shortsit</span> (um short), <span class="fi">aurinkolasit</span> (uns óculos de sol, lição 9). O verbo também vai no plural: <span class="fi">Shortsit <span data-l="olla#2">ovat</span> kaapissa.</span> (o shorts está no armário). E <span class="fi">Ostan shortsit.</span> é um shorts só.</p>
  </div>
</section>

<section class="osio" data-paikka="bh-sade">
  <h2>Pronúncia: <span class="fi pala">y</span> e <span class="fi pala">ö</span></h2>
  <p>Na saída da loja, volta a chuva de verão de Belo Horizonte, e os dois esperam na porta. O Jay aproveita para treinar com a Maia o som que ela errou na loja: ela disse <span class="fi pala">huva</span> em vez de <span class="fi">hyvä</span>. O português não tem <span class="fi pala">y</span> nem <span class="fi pala">ö</span>, e o ouvido brasileiro troca os dois por <span class="fi pala">u</span> e <span class="fi pala">o</span> (às vezes por <span class="fi pala">i</span> e <span class="fi pala">e</span>). Mas em finlandês a troca muda a palavra: <span class="fi">kyy</span> é uma cobra, <span class="fi">kuu</span> é a lua.</p>
  <div class="saanto">
    <h3>Truque: a língua de uma vogal, os lábios de outra</h3>
    <p><b><span class="fi pala">y</span></b>: diga “i” e, sem mexer a língua, arredonde os lábios como para “u”. <b><span class="fi pala">ö</span></b>: diga “ê” e arredonde os lábios como para “ô”. A língua fica na frente da boca; só os lábios mudam. O acento continua na primeira sílaba: <span class="fi pala">HY-vä</span>, <span class="fi pala">PÖY-tä</span>.</p>
  </div>
  <ul class="esim">
    <li class="s" data-pt="bom, boa">hyvä</li>
    <li class="s" data-pt="vender">myydä</li>
    <li class="s" data-pt="mesa">pöytä</li>
    <li class="s" data-pt="achar, encontrar">löytää</li>
    <li class="s" data-pt="travesseiro, almofada">tyyny</li>
  </ul>
  <p>Agora os pares. Muda <span class="fi pala">y</span> × <span class="fi pala">u</span> ou <span class="fi pala">ö</span> × <span class="fi pala">o</span> (em <span class="fi">työ</span> × <span class="fi">tuo</span>, os dois):</p>
  <ul class="esim">
    <li class="s" data-pt="víbora">kyy</li>
    <li class="s" data-pt="lua">kuu</li>
    <li class="s" data-pt="vende">myy</li>
    <li class="s" data-pt="outro, outra">muu</li>
    <li class="s" data-pt="trabalho">työ</li>
    <li class="s" data-pt="aquele, aquela">tuo</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> na feira, a pergunta <span class="fi">Mitä muuta myyt?</span> (o que mais você vende?) tem os dois sons lado a lado: <span class="fi">muuta</span> com <span class="fi pala">u</span>, <span class="fi">myyt</span> com <span class="fi pala">y</span>. Se os dois saírem iguais, a frase não faz sentido.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Ligue a roupa à tradução</h3>
    <ul class="yhdista">
      <li data-pari="camisa">paita</li>
      <li data-pari="calça">housut</li>
      <li data-pari="shorts">shortsit</li>
      <li data-pari="boné">lippis</li>
      <li data-pari="vestido">mekko</li>
      <li data-pari="saia">hame</li>
      <li data-pari="provador">sovituskoppi</li>
      <li data-pari="espelho">peili</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>2. Ouça: <span class="fi pala">y</span> ou <span class="fi pala">u</span>, <span class="fi pala">ö</span> ou <span class="fi pala">o</span>?</h3>
    <p class="ohje">Aperte ▶ e escolha a palavra que você ouviu. Só muda a vogal da frente (<span class="fi pala">y, ö</span>) ou de trás (<span class="fi pala">u, o</span>).</p>
    <div class="valinta" data-kuuntele="kyy" data-oikea="kyy">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">kyy</button><button type="button">kuu</button></div>
    </div>
    <div class="valinta" data-kuuntele="muu" data-oikea="muu">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">myy</button><button type="button">muu</button></div>
    </div>
    <div class="valinta" data-kuuntele="työ" data-oikea="työ">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">tuo</button><button type="button">työ</button></div>
    </div>
    <div class="valinta" data-kuuntele="myy" data-oikea="myy">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">myy</button><button type="button">muu</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>3. Você entendeu o diálogo A?</h3>
    <div class="valinta" data-oikea="Mustat shortsit ja keltaisen lippiksen.">
      <p class="kysymys"><span class="fi">Mitä Jay ostaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Mustat shortsit ja keltaisen lippiksen.</button><button type="button">Sinisen paidan ja shortsit.</button><button type="button">Sandaalit ja lippiksen.</button></div>
    </div>
    <div class="valinta" data-oikea="Sandaaleja.">
      <p class="kysymys"><span class="fi">Mitä Jay ei osta?</span></p>
      <div class="vaihtoehdot"><button type="button">Sandaaleja.</button><button type="button">Lippistä.</button><button type="button">Shortseja.</button></div>
    </div>
    <div class="valinta" data-oikea="Sata realia.">
      <p class="kysymys"><span class="fi">Paljonko mustat shortsit maksavat?</span></p>
      <div class="vaihtoehdot"><button type="button">Kymmenen realia.</button><button type="button">Kaksisataa realia.</button><button type="button">Sata realia.</button></div>
    </div>
    <div class="valinta" data-oikea="Myyjä.">
      <p class="kysymys"><span class="fi">Kuka ei ymmärrä suomea?</span></p>
      <div class="vaihtoehdot"><button type="button">Maia.</button><button type="button">Myyjä.</button><button type="button">Jay.</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="bh-sade">
  <h2>Gramática 1 · O objeto: a coisa inteira ou só uma parte?</h2>
  <p>O <b>objeto</b> é a coisa que recebe a ação do verbo: “compro <b>a camisa</b>”. Em português ele não muda. Em finlandês ele tem três formas, e a escolha mostra se a ação pega a coisa <b>inteira</b> ou não. Você já viu as três: <span class="fi">Otan sen!</span> (lição 9), <span class="fi">Minä ymmärrän suomea.</span> (lição 5) e <span class="fi">Ota pipo!</span> (lição 9). Agora a regra.</p>
  <table class="taivutus">
    <tr><th>quando</th><th>exemplo</th><th>forma</th></tr>
    <tr><td>uma coisa inteira; a ação termina</td><td><span class="fi">Ostan tämän paidan.</span><span class="kaannos" lang="pt-BR">Compro esta camisa.</span></td><td><span class="fi pala">-n</span>, a mesma forma do genitivo</td></tr>
    <tr><td>várias coisas inteiras, todas aquelas</td><td><span class="fi">Ostan shortsit. Otamme nämä kupit.</span><span class="kaannos" lang="pt-BR">Compro o short. Levamos estas xícaras.</span></td><td><span class="fi pala">-t</span>, o plural da lição 9</td></tr>
    <tr><td>uma parte, uma quantidade, coisas em geral</td><td><span class="fi">Ostan kahvia. Myymme tauluja.</span><span class="kaannos" lang="pt-BR">Compro café. Vendemos quadros.</span></td><td>partitivo (o plural: lição 11)</td></tr>
    <tr><td>a ação está em andamento, não termina</td><td><span class="fi">Maalaan taulua. Luen kirjaa.</span><span class="kaannos" lang="pt-BR">Estou pintando o quadro. Estou lendo o livro.</span></td><td>partitivo</td></tr>
    <tr><td>negação</td><td><span class="fi">En osta takkia.</span><span class="kaannos" lang="pt-BR">Não compro o casaco.</span></td><td>sempre partitivo</td></tr>
    <tr><td>depois de 2, 3, 4… (com <span class="fi">yksi</span>: <span class="fi">Ostan yhden paidan.</span>)</td><td><span class="fi">Ostan kaksi paitaa.</span><span class="kaannos" lang="pt-BR">Compro duas camisas.</span></td><td>partitivo singular (lição 3)</td></tr>
  </table>
  <p><b>Pronomes pessoais:</b> o objeto inteiro de <span class="fi">minä, sinä, hän, me, te, he</span> termina em <span class="fi pala">-t</span>, não em <span class="fi pala">-n</span>: <span class="fi">minut, sinut, hänet, meidät, teidät, heidät</span>. <span class="fi">Tunnen hänet.</span> = eu o conheço (não <span class="pala">Tunnen hänen</span>). Na negação, partitivo, como sempre: <span class="fi">En tunne häntä.</span></p>
  <h3>Três perguntas para escolher</h3>
  <ol>
    <li><b>A frase é negativa?</b> Então partitivo, sempre: <span class="fi">En osta paitaa.</span></li>
    <li><b>É uma parte, uma quantidade, algo em geral, ou a ação ainda está acontecendo?</b> Partitivo: <span class="fi">Juon kahvia. Myymme tauluja. Maalaan taulua.</span></li>
    <li><b>Nenhuma das duas?</b> A coisa é inteira e a ação termina: uma coisa, <span class="fi pala">-n</span>; várias, <span class="fi pala">-t</span>: <span class="fi">Ostan paidan. Ostan kengät.</span></li>
  </ol>
  <p>Alguns verbos quase sempre pedem partitivo, porque a ação não “pega” a coisa inteira: <span class="fi">katsoa</span> (olhar), <span class="fi">etsiä</span> (procurar), <span class="fi">rakastaa</span> (amar), <span class="fi">odottaa</span> (esperar), <span class="fi">kuunnella</span> (escutar), <span class="fi">sovittaa</span> (experimentar), e <span class="fi">puhua</span> e <span class="fi">ymmärtää</span> com línguas.</p>
  <ul class="esim">
    <li class="s" data-pt="Estou procurando um boné.">Etsin lippistä.</li>
    <li class="s" data-pt="O Eenok olha os vasos.">Eenok katsoo maljakoita.</li>
    <li class="s" data-pt="Eu amo cerâmica.">Rakastan keramiikkaa.</li>
    <li class="s" data-pt="Na Finlândia, o Jay não usa shorts.">Suomessa Jay ei käytä shortseja.</li>
  </ul>
  <div class="tehtava" data-tyyppi="lukeminen" data-ei-sivulle>
    <h3>4. Inteiro, várias ou parte? Escolha a forma</h3>
    <p class="ohje">O português entre parênteses diz o sentido. Faça as três perguntas: é negação? É parte ou ação em andamento? Senão, inteiro: <span class="fi pala">-n</span> ou <span class="fi pala">-t</span>.</p>
    <div class="valinta" data-oikea="lippiksen">
      <p class="kysymys"><span class="fi">Jay ostaa ___.</span> (ele compra o boné)</p>
      <div class="vaihtoehdot"><button type="button">lippistä</button><button type="button">lippiksen</button><button type="button">lippis</button></div>
    </div>
    <div class="valinta" data-oikea="takkia">
      <p class="kysymys"><span class="fi">Jay ei osta ___.</span> (ele não compra o casaco)</p>
      <div class="vaihtoehdot"><button type="button">takkia</button><button type="button">takin</button><button type="button">takki</button></div>
    </div>
    <div class="valinta" data-oikea="taulua">
      <p class="kysymys"><span class="fi">Maia katsoo ___.</span> (ela olha o quadro)</p>
      <div class="vaihtoehdot"><button type="button">taulun</button><button type="button">taulu</button><button type="button">taulua</button></div>
    </div>
    <div class="valinta" data-oikea="possut">
      <p class="kysymys"><span class="fi">Uuno ottaa ___.</span> (ele leva os porquinhos, todos)</p>
      <div class="vaihtoehdot"><button type="button">possut</button><button type="button">possuja</button><button type="button">possun</button></div>
    </div>
    <div class="valinta" data-oikea="kulhoa">
      <p class="kysymys"><span class="fi">Eenok ottaa kaksi ___.</span> (ele leva duas tigelas)</p>
      <div class="vaihtoehdot"><button type="button">kulhon</button><button type="button">kulhoa</button><button type="button">kulhot</button></div>
    </div>
    <div class="valinta" data-oikea="tauluja">
      <p class="kysymys"><span class="fi">Maia myy ___.</span> (ela vende quadros, em geral)</p>
      <div class="vaihtoehdot"><button type="button">taulut</button><button type="button">taulun</button><button type="button">tauluja</button></div>
    </div>
  </div>
  <h3>Depois da ordem: a forma básica (só reconhecer)</h3>
  <p>Na ordem não há sujeito, e o objeto inteiro fica na forma básica, sem <span class="fi pala">-n</span>: <span class="fi">Ota tämä!</span> <span class="fi">Osta tuo paita!</span> O mesmo com <span class="fi">täytyy</span> (lição 10): <span class="fi">Minun täytyy ostaa uusi paita.</span> O partitivo não muda: <span class="fi">Älä osta paitaa!</span></p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> deixar o objeto na forma básica, como em português: <span class="pala">Ostan paita</span> está errado; o certo é <span class="fi">Ostan paidan.</span> E na negação nunca vai <span class="fi pala">-n</span>: <span class="pala">En osta paidan</span> está errado; o certo é <span class="fi">En osta paitaa.</span></p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios: o objeto</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Ouça: <span class="fi pala">-n</span>, <span class="fi pala">-t</span> ou partitivo?</h3>
    <p class="ohje">Aperte ▶ e escolha a forma que você ouviu. As três frases existem, mas o sentido muda: <span class="fi">juuston</span> = um queijo inteiro, <span class="fi">juustoa</span> = (um pouco de) queijo, <span class="fi">juustot</span> = os queijos, todos.</p>
    <div class="valinta" data-kuuntele="Eenok ostaa juuston." data-oikea="juuston">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">juuston</button><button type="button">juustoa</button><button type="button">juustot</button></div>
    </div>
    <div class="valinta" data-kuuntele="Maia ostaa kahvia." data-oikea="kahvia">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">kahvin</button><button type="button">kahvit</button><button type="button">kahvia</button></div>
    </div>
    <div class="valinta" data-kuuntele="Jay ostaa paidat." data-oikea="paidat">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">paidan</button><button type="button">paidat</button><button type="button">paitaa</button></div>
    </div>
    <div class="valinta" data-kuuntele="Uuno ottaa leivän." data-oikea="leivän">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">leivän</button><button type="button">leipää</button><button type="button">leivät</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Na loja ao lado: responda na língua secreta</h3>
    <p class="ohje">Na loja ao lado, a vendedora oferece tudo em português. A Maia e o Jay respondem entre eles em finlandês, e ela não entende nada. Escreva o objeto com as três perguntas da Gramática 1: é negação? É parte, quantidade ou um verbo como <span class="fi">etsiä</span>? Senão, inteiro: <span class="fi pala">-n</span> para uma coisa, <span class="fi pala">-t</span> para várias. Depois de número, partitivo singular. (Pode digitar a sem trema.)</p>
    <div class="aukot salaloja" lang="fi-FI">
      <p class="salaloja-myyja" lang="pt-BR"><span class="ryhma" data-hahmot="myyja2"></span><span>“Olha esta xícara, feita à mão aqui em Minas!”</span></p>
      <p class="salaloja-vastaus"><span class="ryhma" data-hahmot="maia"></span><span>Kaunis! Ostan <span class="aukko" data-oikea="kupin"></span>. <span class="salaloja-vihje" data-ei-kuplaa>(kuppi)</span></span></p>
      <p class="salaloja-myyja" lang="pt-BR"><span class="ryhma" data-hahmot="myyja2"></span><span>“E um chapéu para o senhor? Aqui faz muito sol!”</span></p>
      <p class="salaloja-vastaus"><span class="ryhma" data-hahmot="jay"></span><span>En osta <span class="aukko" data-oikea="hattua"></span>. Minulla on jo lippis. <span class="salaloja-vihje" data-ei-kuplaa>(hattu)</span></span></p>
      <p class="salaloja-myyja" lang="pt-BR"><span class="ryhma" data-hahmot="myyja2"></span><span>“Estes vasos azuis são da mesma artista.”</span></p>
      <p class="salaloja-vastaus"><span class="ryhma" data-hahmot="maia"></span><span>Otan nämä <span class="aukko" data-oikea="maljakot"></span>! <span class="salaloja-vihje" data-ei-kuplaa>(maljakko)</span></span></p>
      <p class="salaloja-myyja" lang="pt-BR"><span class="ryhma" data-hahmot="myyja2"></span><span>“Aceitam um chá? É por conta da casa.”</span></p>
      <p class="salaloja-vastaus"><span class="ryhma" data-hahmot="maia"></span><span>Kiitos! Juon <span class="aukko" data-oikea="teetä"></span>. <span class="salaloja-vihje" data-ei-kuplaa>(tee)</span></span></p>
      <p class="salaloja-myyja" lang="pt-BR"><span class="ryhma" data-hahmot="myyja2"></span><span>“O senhor procura alguma coisa?”</span></p>
      <p class="salaloja-vastaus"><span class="ryhma" data-hahmot="jay"></span><span>Etsin <span class="aukko" data-oikea="peiliä"></span>. Lippis on uusi. <span class="emoji">😎</span> <span class="salaloja-vihje" data-ei-kuplaa>(peili)</span></span></p>
      <p class="salaloja-myyja" lang="pt-BR"><span class="ryhma" data-hahmot="myyja2"></span><span>“As camisetas estão em promoção: três por cem reais!”</span></p>
      <p class="salaloja-vastaus"><span class="ryhma" data-hahmot="jay"></span><span>Ostan kolme <span class="aukko" data-oikea="paitaa"></span>! <span class="salaloja-vihje" data-ei-kuplaa>(paita)</span></span></p>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Aprofundar e fechar',
      html: `
<ul class="tavoitteet">
  <li>Você põe o adjetivo no mesmo caso do substantivo: <span class="fi">sinisessä paidassa, isossa kaupassa</span>.</li>
  <li>Você reconhece mais três tipos de radical: <span class="fi">vesi → veden, puhelin → puhelimen, rikas → rikkaan</span>.</li>
  <li>Você usa o objeto na feira: <span class="fi">Minä otan tämän punaisen maljakon.</span> <span class="fi">Me otamme kaikki possut.</span></li>
</ul>

<p data-paikka="belo-horizonte-panoraama">Segunda-feira à noite. Aos domingos, a Avenida Afonso Pena, no centro de Belo Horizonte, vira uma feira enorme, a Feira Hippie; nesta semana de Natal tem também uma feira de Natal à noite. A Maia tem uma banca lá, com quadros pequenos e cerâmica: tigelas, vasos e os porquinhos cor-de-rosa da série <span class="fi">Onnellinen kuin possu</span>. No avião, o Uuno e o Eenok prometeram vir à feira (revisão 6–10). Antes, a gramática do dia: o adjetivo junto do substantivo.</p>

<section class="osio" data-osa="gramatica" data-paikka="belo-horizonte-panoraama">
  <h2>Gramática 2 · O adjetivo vai junto: <span class="fi">sinisessä paidassa</span></h2>
  <p>Em português o adjetivo concorda no gênero e no número: camisa azul, camisas azuis. O finlandês não tem gênero, mas tem casos: o adjetivo recebe <b>o mesmo caso e o mesmo número</b> do substantivo. Os pronomes <span class="fi">tämä, tuo, se</span> (no plural <span class="fi">nämä, nuo, ne</span>, lição 8) e os ordinais também, e as cores, <span class="fi">kuten sininen ja punainen</span> (como azul e vermelho).</p>
  <table class="taivutus">
    <tr><th>forma</th><th>exemplo</th><th>português</th></tr>
    <tr><td>forma básica</td><td><span class="fi">sininen paita</span></td><td>a camisa azul</td></tr>
    <tr><td>objeto inteiro</td><td><span class="fi">Ostan sinisen paidan.</span></td><td>compro a camisa azul</td></tr>
    <tr><td>partitivo</td><td><span class="fi">En osta sinistä paitaa.</span></td><td>não compro a camisa azul</td></tr>
    <tr><td>onde? -ssa</td><td><span class="fi">Jay on sinisessä paidassa.</span></td><td>o Jay está de camisa azul</td></tr>
    <tr><td>plural -t</td><td><span class="fi">siniset paidat</span></td><td>as camisas azuis</td></tr>
  </table>
  <p>Com pronome e adjetivo, os três juntos: <span class="fi">tässä isossa kaupassa</span> (nesta loja grande). Com ordinal: <span class="fi">kolmannessa kerroksessa</span> (no terceiro andar), a promessa da lição 6. O adjetivo tem o seu próprio radical, como qualquer palavra (lição 8): <span class="fi">sininen → sinisen</span>, <span class="fi">uusi → uuden</span>, <span class="fi">kaunis → kauniin</span>. Toque na palavra: a bolha mostra as formas.</p>
  <div class="saanto">
    <h3>Mais três tipos de radical (só reconhecer)</h3>
    <p>Na lição 8 você escreveu dois tipos: <span class="fi">nainen → naisen</span> e <span class="fi">huone → huoneen</span>. Estes três também são comuns. Por enquanto, basta reconhecer a palavra quando o fim muda; a bolha mostra as formas.</p>
    <table class="taivutus">
      <tr><th>final</th><th>forma básica</th><th>genitivo</th><th>partitivo</th></tr>
      <tr><td><span class="fi pala">-si</span> → <span class="fi pala">-de-</span></td><td><span class="fi">vesi</span> (água)</td><td><span class="fi">veden</span></td><td><span class="fi">vettä</span></td></tr>
      <tr><td><span class="fi pala">-in</span> → <span class="fi pala">-ime-</span></td><td><span class="fi">puhelin</span> (telefone)</td><td><span class="fi">puhelimen</span></td><td><span class="fi">puhelinta</span></td></tr>
      <tr><td><span class="fi pala">-as</span> → <span class="fi pala">-aa-</span></td><td><span class="fi">rikas</span> (rico)</td><td><span class="fi">rikkaan</span></td><td><span class="fi">rikasta</span></td></tr>
    </table>
    <p>O adjetivo <span class="fi">uusi → uuden</span> segue o tipo de <span class="fi">vesi</span>.</p>
  </div>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o adjetivo vem <b>antes</b> do substantivo (<span class="fi">sininen paita</span>, nunca “paita sininen”) e não fica parado na forma básica: <span class="fi">isossa kaupassa</span>, não <span class="pala">iso kaupassa</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Exercícios: o radical e o adjetivo junto</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Reconheça o genitivo</h3>
    <p class="ohje">Só reconhecer: qual é o genitivo? Olhe a tabela “Mais três tipos de radical” acima.</p>
    <div class="valinta" data-oikea="veden">
      <p class="kysymys"><span class="fi">vesi</span> → genitivo</p>
      <div class="vaihtoehdot"><button type="button">veden</button><button type="button">vettä</button><button type="button">veteen</button></div>
    </div>
    <div class="valinta" data-oikea="puhelimen">
      <p class="kysymys"><span class="fi">puhelin</span> → genitivo</p>
      <div class="vaihtoehdot"><button type="button">puhelimen</button><button type="button">puhelinta</button><button type="button">puhelimeen</button></div>
    </div>
    <div class="valinta" data-oikea="rikkaan">
      <p class="kysymys"><span class="fi">rikas</span> → genitivo</p>
      <div class="vaihtoehdot"><button type="button">rikasta</button><button type="button">rikkaan</button><button type="button">rikkaaseen</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Ponha o adjetivo no mesmo caso</h3>
    <p class="ohje">Escreva o adjetivo entre parênteses com a mesma terminação do substantivo. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Maia on <span class="aukko" data-oikea="vihreässä"></span> mekossa. <span data-ei-kuplaa>(vihreä)</span></p>
      <p>Tuossa <span class="aukko" data-oikea="isossa"></span> kaupassa on halpoja vaatteita. <span data-ei-kuplaa>(iso)</span></p>
      <p>Otan <span class="aukko" data-oikea="keltaisen"></span> lippiksen. <span data-ei-kuplaa>(keltainen)</span></p>
      <p>En osta <span class="aukko" data-oikea="punaista"></span> paitaa. <span data-ei-kuplaa>(punainen)</span></p>
      <p>Eenok ottaa kaksi <span class="aukko" data-oikea="sinistä"></span> kulhoa. <span data-ei-kuplaa>(sininen)</span></p>
      <p>Uuno katsoo <span class="aukko" data-oikea="pientä"></span> taulua. <span data-ei-kuplaa>(pieni)</span></p>
      <p>Purjo asuu <span class="aukko" data-oikea="uudessa"></span> asunnossa. <span data-ei-kuplaa>(uusi)</span></p>
      <p>Otamme <span class="aukko" data-oikea="valkoiset"></span> kupit. <span data-ei-kuplaa>(valkoinen)</span></p>
    </div>
  </div>
</section>

<p data-paikka="festa-rua">Noite na feira de Natal. A avenida está cheia: barracas de roupa, de bolsas de couro, de brinquedos de madeira, de pão de queijo. A Maia quer uma Coca e deixa o Jay sozinho na banca, de bermuda preta nova, boné amarelo e um português ainda fraco para vender. Antes de sair, ela ensina ao Jay uma frase em português.</p>

<section class="osio" data-paikka="festa-rua">
  <h2>Diálogo B: <span class="fi">Me otamme kaikki possut</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure um objeto inteiro (<span class="fi pala">-n</span>), um objeto inteiro no plural (<span class="fi pala">-t</span>), uma negação com partitivo, um número com partitivo e um preço em reais. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t12-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="Segunda-feira à noite tem a feira de Natal na Avenida Afonso Pena. A Maia tem a sua própria mesa.">Maanantaina illalla <span lang="pt-BR">Avenida Afonso Penalla</span> on joulun messut. Maialla on oma pöytä.</p>
    <p class="s" data-h="kertoja" data-pt="Na mesinha tem quadros pequenos e cerâmica: vasos vermelhos, tigelas azuis e porquinhos cor-de-rosa.">Pienellä pöydällä on pieniä tauluja ja keramiikkaa: punaisia maljakoita, sinisiä kulhoja ja vaaleanpunaisia possuja.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay está de bermuda nova. A Maia quer uma Coca, por isso agora o Jay vende.">Jayllä on uudet shortsit. Maia haluaa kokista, siksi nyt Jay myy.</p>
    <p class="s" data-h="maia" data-pt="Jay, repete: &quot;Cada peça custa vinte reais.&quot;">Jay, toista: <span lang="pt-BR">Cada peça custa vinte reais.</span></p>
    <p class="s" data-h="kertoja" data-pt="A Maia sai. O Jay repete a frase. Cada vez ela fica mais curta.">Maia lähtee. Jay toistaa sen. Joka kerta se on lyhyempi.</p>
    <p class="s" data-h="jay" data-pt="Cada peça custa vinte reais. Custa vinte reais. Vinte."><span lang="pt-BR">Cada peça custa vinte reais. Custa vinte reais. Vinte.</span></p>
    <p class="s" data-h="kertoja" data-pt="Dois homens chegam e olham os porquinhos. São os turistas do avião, o Uuno e o Eenok. Eles estão de macacão azul-claro, mesmo que a noite esteja quente.">Kaksi miestä tulee ja katselee possuja. He ovat lentokoneen turistit, Uuno ja Eenok. Heillä on vaaleansiniset haalarit, vaikka ilta on kuuma.</p>
    <p class="s" data-h="jay" data-pt="Vinte."><span lang="pt-BR">Vinte.</span></p>
    <p class="s" data-h="eenok" data-pt="Boa noite, Jay. Nós falamos finlandês.">Hyvää iltaa, Jay. Me puhumme suomea.</p>
    <p class="s" data-h="jay" data-pt="Ótimo. Tudo custa vinte reais.">Hyvä. Kaikki maksaa kaksikymmentä realia.</p>
    <p class="s" data-h="uuno" data-pt="Eu levo este vaso vermelho.">Minä otan tämän punaisen maljakon.</p>
    <p class="s" data-h="eenok" data-pt="Eu não levo vasos. Levo duas tigelas azuis. Quem faz estes porquinhos?">Minä en ota maljakoita. Otan kaksi sinistä kulhoa. Kuka tekee nämä possut?</p>
    <p class="s" data-h="jay" data-pt="A Maia mesma faz.">Maia tekee ne itse.</p>
    <p class="s" data-h="uuno" data-pt="Nós levamos todos os porquinhos.">Me otamme kaikki possut.</p>
    <p class="s" data-h="eenok" data-pt="Sete porquinhos, duas tigelas e um vaso. Dá duzentos reais ao todo.">Seitsemän possua, kaksi kulhoa ja yksi maljakko. Se on yhteensä kaksisataa realia.</p>
    <p class="s" data-h="jay" data-pt="Obrigado, Eenok. Vocês querem uma sacola?">Kiitos, Eenok. Haluatteko pussin?</p>
    <p class="s" data-h="uuno" data-pt="Duas sacolas, por favor.">Kaksi pussia, kiitos.</p>
    <p class="s" data-h="kertoja" data-pt="O Uuno paga com moedas. As moedas são estranhas. Ele dá ao Jay exatamente duzentos reais. O dinheiro dá certinho.">Uuno maksaa kolikoilla. Kolikot ovat outoja. Hän antaa Jaylle juuri kaksisataa realia. Raha riittää.</p>
    <p class="s" data-h="kertoja" data-pt="O Uuno e o Eenok vão embora. A Maia volta. Na mesa só restam os quadros.">Uuno ja Eenok lähtevät. Maia tulee takaisin. Pöydällä on enää vain taulut.</p>
    <p class="s" data-h="maia" data-pt="Jay! Cadê os porquinhos?">Jay! Missä possut ovat?</p>
    <p class="s" data-h="jay" data-pt="Estão com o Uuno e o Eenok, aqueles caras esquisitos do avião. O dinheiro está aqui: duzentos reais.">Ne ovat nyt Uunolla ja Eenokilla, lentokoneen kummilla miehillä. Raha on tässä: kaksisataa realia.</p>
    <p class="s" data-h="maia" data-pt="Todos os porquinhos! Jay, você é melhor vendedor do que eu!">Kaikki possut! Jay, sinä olet parempi myyjä kuin minä!</p>
    <p class="s" data-h="jay" data-pt="E você é uma boa pintora! Agora a gente come, claro! Dez hambúrgueres!">Ja sinä olet hyvä maalari! Nyt me syömme, tottakai! Kymmenen hampurilaista!</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. Quase todas usam o objeto da Gramática 1 (parte A) e o adjetivo junto da Gramática 2:</p>
    <ul>
      <li><span class="fi">Maialla on oma pöytä.</span> = a Maia tem a sua própria mesa · <span class="fi">oma</span> = próprio</li>
      <li><span class="fi">Pienellä pöydällä on pieniä tauluja.</span> = na mesinha tem quadros pequenos · o adjetivo no mesmo caso: Gramática 2</li>
      <li><span class="fi">Kaikki maksaa kaksikymmentä realia.</span> = tudo custa vinte reais · depois de número, partitivo (lição 3)</li>
      <li><span class="fi">Minä otan tämän punaisen maljakon.</span> = eu levo este vaso vermelho · o objeto inteiro, no pronome e no adjetivo</li>
      <li><span class="fi">Minä en ota maljakoita.</span> = eu não levo vasos · negação: partitivo (plural da lição 11)</li>
      <li><span class="fi">Otan kaksi sinistä kulhoa.</span> = levo duas tigelas azuis · depois de número, partitivo singular, também no adjetivo</li>
      <li><span class="fi">Me otamme kaikki possut.</span> = nós levamos todos os porquinhos · todos: plural <span class="fi pala">-t</span></li>
      <li><span class="fi">Haluatteko pussin? Raha riittää.</span> = vocês querem uma sacola? O dinheiro dá · <span class="fi">pussi</span> inteiro: <span class="fi pala">-n</span></li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="festa-rua">
  <h2>Exercícios: na feira</h2>
  <div class="peli-upotus" data-peli="feira-hippie"></div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>9. Você entendeu o diálogo B?</h3>
    <div class="valinta" data-oikea="Punaisen maljakon.">
      <p class="kysymys"><span class="fi">Mitä Uuno ottaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Punaisen maljakon.</button><button type="button">Kaksi sinistä kulhoa.</button><button type="button">Pienen taulun.</button></div>
    </div>
    <div class="valinta" data-oikea="Kaksi sinistä kulhoa.">
      <p class="kysymys"><span class="fi">Mitä Eenok ottaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Punaisen maljakon.</button><button type="button">Kaksi sinistä kulhoa.</button><button type="button">Kaksi punaista kuppia.</button></div>
    </div>
    <div class="valinta" data-oikea="Kaksisataa realia.">
      <p class="kysymys"><span class="fi">Paljonko kaikki maksaa yhteensä?</span></p>
      <div class="vaihtoehdot"><button type="button">Kaksikymmentä realia.</button><button type="button">Sata realia.</button><button type="button">Kaksisataa realia.</button></div>
    </div>
    <div class="valinta" data-oikea="Maia.">
      <p class="kysymys"><span class="fi">Kuka tekee possut?</span></p>
      <div class="vaihtoehdot"><button type="button">Jay.</button><button type="button">Maia.</button><button type="button">Uuno.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>10. Traduza para o finlandês</h3>
    <p class="ohje">Escreva em finlandês e pense no objeto: inteiro, várias inteiras ou parte? E depois de <span class="fi">ovat</span>, o adjetivo do sujeito plural vai no partitivo plural (lição 11): <span class="fi">ovat halpoja</span>. Depois compare com o modelo.</p>
    <div class="kaanna"><p class="pt">Eu levo esta camisa.</p><p class="s" data-pt="Eu levo esta camisa.">Otan tämän paidan.</p></div>
    <div class="kaanna"><p class="pt">Eu não compro o boné.</p><p class="s" data-pt="Eu não compro o boné.">En osta lippistä.</p></div>
    <div class="kaanna"><p class="pt">Nós estamos olhando os quadros.</p><p class="s" data-pt="Nós estamos olhando os quadros.">Katsomme tauluja.</p></div>
    <div class="kaanna"><p class="pt">O Jay compra o short.</p><p class="s" data-pt="O Jay compra o short.">Jay ostaa shortsit.</p></div>
    <div class="kaanna"><p class="pt">No Brasil, eu uso shorts.</p><p class="s" data-pt="No Brasil, eu uso shorts.">Brasiliassa käytän shortseja.</p></div>
    <div class="kaanna"><p class="pt">Quanto custa? – Cem reais.</p><p class="s" data-pt="Quanto custa? – Cem reais.">Paljonko se maksaa? – Sata realia.</p></div>
    <div class="kaanna"><p class="pt">Eu uso muito dinheiro no Brasil, por isso não compro presentes.</p><p class="s" data-pt="Eu uso muito dinheiro no Brasil, por isso não compro presentes.">Käytän Brasiliassa paljon rahaa, siksi en osta lahjoja.</p></div>
    <div class="kaanna"><p class="pt">Ponha o casaco, mesmo que esteja calor!</p><p class="s" data-pt="Ponha o casaco, mesmo que esteja calor!">Pane takki päälle, vaikka on kuuma!</p></div>
    <div class="kaanna"><p class="pt">As roupas, como as camisas e os shorts, são baratas aqui.</p><p class="s" data-pt="As roupas, como as camisas e os shorts, são baratas aqui.">Vaatteet, kuten paidat ja shortsit, ovat täällä halpoja.</p></div>
    <div class="kaanna"><p class="pt">Esta cor não é ruim. Eu quero exatamente esta camisa.</p><p class="s" data-pt="Esta cor não é ruim. Eu quero exatamente esta camisa.">Tämä väri ei ole paha. Haluan juuri tämän paidan.</p></div>
    <div class="kaanna"><p class="pt">Eu quero uma camisa desse tipo. (<span class="fi">sellainen</span>, lição 8)</p><p class="s" data-pt="Eu quero uma camisa desse tipo.">Haluan sellaisen paidan.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>11. Responda às perguntas</h3>
    <p class="ohje">Responda em voz alta antes de abrir o modelo. Pense no objeto: inteiro (<span class="fi pala">-n</span>, <span class="fi pala">-t</span>), parte ou negação (partitivo)? E o adjetivo vai no mesmo caso.</p>
    <details class="vastaus"><summary lang="fi-FI">Mitä Jay ostaa Savassissa?</summary><p class="s" data-pt="Ele compra a bermuda preta e o boné amarelo.">Hän ostaa mustat shortsit ja keltaisen lippiksen.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä Uuno ja Eenok ottavat?</summary><p class="s" data-pt="Eles levam o vaso vermelho, duas tigelas azuis e todos os porquinhos.">He ottavat punaisen maljakon, kaksi sinistä kulhoa ja kaikki possut.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä et osta Brasiliassa?</summary><p class="s" data-pt="Não compro casaco. No Brasil faz calor.">En osta takkia. Brasiliassa on kuuma.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä etsit kaupasta?</summary><p class="s" data-pt="Procuro bermudas baratas.">Etsin halpoja shortseja.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla tänään sininen paita?</summary><p class="s" data-pt="Não. Estou de camisa branca.">Ei ole. Olen valkoisessa paidassa.</p></details>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>A Feira Hippie: domingo na Avenida Afonso Pena</h3>
  <figure class="kuva" data-kuva="belo-horizonte-panoraama"></figure>
  <p>A feira nasceu em 1969, na Praça da Liberdade, com um grupo pequeno de artesãos e artistas jovens. Daí o apelido “hippie”, que ficou até hoje. Em 1991 ela mudou para a Avenida Afonso Pena, no centro, e cresceu muito: hoje são uns dois mil expositores todo domingo, da manhã até o começo da tarde. Vende-se de tudo: roupa, sapato, bolsa de couro, cerâmica, quadros, brinquedos de madeira e, claro, comida mineira.</p>
  <p>Na Finlândia, a feira mais conhecida é a da praça (<span class="fi">tori</span>), como a Kauppatori de Helsinque: começa cedo, no verão vende morango e ervilha fresca, e no inverno fica quase vazia. Lá quase ninguém pechincha.</p>
  <p>Na nossa história, a feira da Maia é uma feira de Natal numa noite de semana. Duas frases úteis nas duas feiras: <span class="fi">Katselen vain, kiitos.</span> = só estou olhando, obrigado. E para roupa: <span class="fi">Mikä <span data-l="koko:mitta">koko</span>?</span> = qual tamanho?</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3><span class="fi" data-rekisteri="puhe">Mä otan tän!</span> O objeto na fala</h3>
  <p>Na feira e nas lojas, as palavras curtas encolhem: <span class="fi">tämän</span> vira <span class="fi" data-rekisteri="puhe">tän</span>, <span class="fi">tämä</span> vira <span class="fi" data-rekisteri="puhe">tää</span> e <span class="fi">nuo</span> vira <span class="fi" data-rekisteri="puhe">noi</span>. O caso não muda: <span class="fi" data-rekisteri="puhe">tän</span> continua sendo o objeto inteiro. Você <b>não precisa</b> falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">Minä otan tämän.</span></td><td><span class="fi" data-rekisteri="puhe">Mä otan tän.</span></td><td>eu levo este</td></tr>
    <tr><td><span class="fi">Paljonko tämä maksaa?</span></td><td><span class="fi" data-rekisteri="puhe">Paljonks tää maksaa?</span></td><td>quanto custa isto?</td></tr>
    <tr><td><span class="fi">Minä otan nuo kaksi.</span></td><td><span class="fi" data-rekisteri="puhe">Mä otan noi kaks.</span></td><td>eu levo aqueles dois</td></tr>
  </table>
  <p class="s" data-h="eenok" data-kirja="Paljonko tämä maksaa?" data-pt="Quanto custa isto?">Paljonks tää maksaa?</p>
  <p class="s" data-h="uuno" data-kirja="Minä otan tämän!" data-pt="Eu levo este!">Mä otan tän!</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="pao-de-queijo">
  <h2>Para terminar</h2>
  <p>Tarde da noite, a feira de Natal está acabando. Na banca da Maia só restam os quadros. O Jay conta o dinheiro em finlandês, e os dois vão comer os hambúrgueres prometidos.</p>
  <div class="kotitehtava" data-id="t12">
    <h3>Lição de casa</h3>
    <p>Imagine que você está numa loja ou numa feira. Escreva seis frases: duas coisas que você compra (uma com <span class="fi pala">-n</span>, uma com <span class="fi pala">-t</span>), uma que você não compra (partitivo), uma com número, uma com <span class="fi">katsoa</span> ou <span class="fi">etsiä</span> e uma com adjetivo + substantivo em <span class="fi pala">-ssa</span> (a roupa que você veste). Leia em voz alta e cuide do <span class="fi pala">y</span> e do <span class="fi pala">ö</span>.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Eu compro a xícara azul.">Ostan sinisen kupin.</p>
      <p class="s" data-pt="Eu compro um short novo e visto na hora.">Ostan uudet shortsit ja panen ne heti päälle.</p>
      <p class="s" data-pt="Eu não compro o boné preto.">En osta mustaa lippistä.</p>
      <p class="s" data-pt="Eu compro duas tigelas amarelas.">Ostan kaksi keltaista kulhoa.</p>
      <p class="s" data-pt="Estou procurando um quadro pequeno.">Etsin pientä taulua.</p>
      <p class="s" data-pt="Estou na feira de camisa branca.">Olen torilla valkoisessa paidassa.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t12">
    <li>Sei dizer o objeto inteiro: Ostan tämän paidan. Ostan shortsit.</li>
    <li>Sei usar o partitivo na negação e com katsoa e etsiä: En osta takkia. Katson taulua.</li>
    <li>Sei pôr o adjetivo no mesmo caso do substantivo: sinisessä paidassa, isossa kaupassa.</li>
    <li>Reconheço vesi → veden, puhelin → puhelimen, rikas → rikkaan.</li>
    <li>Sei os nomes das roupas: paita, housut, shortsit, lippis.</li>
    <li>Ouço e digo y e ö: kyy × kuu, työ × tuo.</li>
  </ul>
</section>
`
    }
  ],

  kielioppi: [
    {
      id: 'objekti', otsikko: 'O objeto: inteiro ou parte?', taso: 'essencial', hakuosa: 'h-objekti', treeni: 't12-objekti',
      html: `
<p><b>Três formas para o objeto.</b> A coisa inteira: <span class="fi pala">-n</span> no singular (<span class="fi">Ostan tämän paidan.</span>) e <span class="fi pala">-t</span> no plural (<span class="fi">Ostan shortsit.</span>). Uma parte, uma quantidade, uma ação em andamento ou uma negação: partitivo (<span class="fi">Ostan kahvia. Maalaan taulua. En osta takkia.</span>).</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Otan sinisen paidan.</span></td><td>levo a camisa azul · inteira: -n</td></tr>
  <tr><td><span class="fi">Otan siniset paidat.</span></td><td>levo as camisas azuis · todas aquelas: -t</td></tr>
  <tr><td><span class="fi">Otan sinisiä paitoja.</span></td><td>levo umas camisas azuis · algumas: partitivo plural</td></tr>
  <tr><td><span class="fi">En ota sinistä paitaa.</span></td><td>não levo a camisa azul · negação: partitivo</td></tr>
  <tr><td><span class="fi">Otan kaksi sinistä paitaa.</span></td><td>levo duas camisas azuis · número: partitivo singular</td></tr>
</table>
<p>A palavra da lição nas formas do objeto. A bolha chama o <span class="fi pala">-n</span> de “genitivo”, porque a forma é a mesma:</p>
<div class="sijataulu" data-sana="paita" data-sijat="nominatiivi,genetiivi,partitiivi,monikko,mon.part"></div>`
    },
    {
      id: 'partitiiviverbit', otsikko: 'Verbos que pedem partitivo', taso: 'atenção', hakuosa: 'h-partitiivi', treeni: 't12-objekti',
      html: `
<p>Estes verbos falam de uma ação que não “pega” a coisa inteira: o objeto fica no partitivo, também quando a coisa é uma só.</p>
<ul class="esim">
  <li class="s" data-pt="Olho o quadro.">Katson taulua.</li>
  <li class="s" data-pt="Amo cerâmica.">Rakastan keramiikkaa.</li>
  <li class="s" data-pt="Espero o ônibus.">Odotan bussia.</li>
  <li class="s" data-pt="Escuto música.">Kuuntelen musiikkia.</li>
</ul>
<p>Com <span class="fi">ostaa</span> e <span class="fi">ottaa</span>, as duas formas existem e o sentido muda: <span class="fi">Ostan juuston.</span> (um queijo inteiro) × <span class="fi">Ostan juustoa.</span> (um pouco de queijo).</p>`
    },
    {
      id: 'kongruenssi', otsikko: 'O adjetivo no mesmo caso: sinisessä paidassa', taso: 'essencial', hakuosa: 'h-sijat', treeni: 't12-kongruenssi',
      html: `
<p><b>O adjetivo recebe o mesmo caso e o mesmo número do substantivo</b>, e também <span class="fi">tämä, tuo, se</span> e os ordinais: <span class="fi">tässä isossa kaupassa</span>, <span class="fi">kolmannessa kerroksessa</span>.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">sininen paita</span></td><td>a camisa azul (forma básica)</td></tr>
  <tr><td><span class="fi">sinisen paidan</span></td><td>a camisa azul (objeto inteiro); da camisa azul</td></tr>
  <tr><td><span class="fi">sinistä paitaa</span></td><td>partitivo: negação, número, parte</td></tr>
  <tr><td><span class="fi">sinisessä paidassa</span></td><td>de camisa azul, na camisa azul</td></tr>
  <tr><td><span class="fi">siniset paidat</span></td><td>as camisas azuis</td></tr>
</table>
<p>O adjetivo da lição em todos esses casos:</p>
<div class="sijataulu" data-sana="sininen" data-sijat="nominatiivi,genetiivi,partitiivi,inessiivi,monikko"></div>`
    },
    {
      id: 'sanatyypit12', otsikko: 'Mais três radicais: vesi, puhelin, rikas (para reconhecer)', taso: 'reconhecer', hakuosa: 'h-sanatyypit',
      html: `
<p>Só reconhecer. O genitivo mostra o radical, como em <span class="fi">nainen → naisen</span> (lição 8).</p>
<table class="taivutus">
  <tr><th>final</th><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi pala">-si</span> → <span class="fi pala">-de-</span></td><td><span class="fi">vesi, veden, vettä</span></td><td>água</td></tr>
  <tr><td><span class="fi pala">-in</span> → <span class="fi pala">-ime-</span></td><td><span class="fi">puhelin, puhelimen, puhelinta</span></td><td>telefone</td></tr>
  <tr><td><span class="fi pala">-as</span> → <span class="fi pala">-aa-</span></td><td><span class="fi">rikas, rikkaan, rikasta</span></td><td>rico</td></tr>
</table>`
    },
    {
      id: 'vaatteet', otsikko: 'Roupas, e as que são sempre plural', taso: 'essencial', hakuosa: 'h-monikko', treeni: ['t12-vaatteet', 'tilanne-vaatekauppa'],
      html: `
<p>Algumas roupas ficam <b>sempre no plural</b>, como “óculos” em português: <span class="fi">housut</span> (uma calça), <span class="fi">shortsit</span> (um short), <span class="fi">aurinkolasit</span> (uns óculos de sol). Comprar uma: <span class="fi">Ostan housut.</span> Não ter: <span class="fi">Minulla ei ole shortseja.</span></p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">paita</span></td><td>camisa, camiseta</td></tr>
  <tr><td><span class="fi">housut</span></td><td>calça</td></tr>
  <tr><td><span class="fi">shortsit</span></td><td>shorts, bermuda</td></tr>
  <tr><td><span class="fi">mekko</span></td><td>vestido</td></tr>
  <tr><td><span class="fi">hame</span></td><td>saia</td></tr>
  <tr><td><span class="fi">lippis</span></td><td>boné</td></tr>
  <tr><td><span class="fi">hattu</span></td><td>chapéu</td></tr>
  <tr><td><span class="fi">takki</span></td><td>casaco</td></tr>
</table>
<p>Na loja: <span class="fi">Katselen vain, kiitos.</span> (só estou olhando) · <span class="fi">Mikä <span data-l="koko:mitta">koko</span>?</span> (qual tamanho?) · <span class="fi">Sopii. Otan sen.</span> (serve, vou levar).</p>`
    },
    {
      id: 'yo', otsikko: 'Pronúncia: y e ö', taso: 'atenção', hakuosa: 'h-aakkoset',
      html: `
<p><span class="fi pala">y</span> = língua de “i”, lábios de “u”. <span class="fi pala">ö</span> = língua de “ê”, lábios de “ô”. Trocar por <span class="fi pala">u</span> ou <span class="fi pala">o</span> muda a palavra:</p>
<ul class="esim">
  <li class="s" data-pt="víbora">kyy</li>
  <li class="s" data-pt="lua">kuu</li>
  <li class="s" data-pt="vende">myy</li>
  <li class="s" data-pt="outro, outra">muu</li>
  <li class="s" data-pt="trabalho">työ</li>
  <li class="s" data-pt="aquele, aquela">tuo</li>
</ul>
<p>Para treinar a boca: <span class="fi">hyvä, pöytä, löytää</span>.</p>`
    },
    {
      id: 'konjunktiot12', otsikko: 'mutta, siksi, vaikka, kuten', taso: 'essencial', hakuosa: 'h-konjunktiot', treeni: 't12-konjunktiot',
      html: `
<p>Palavras de ligação novas: <span class="fi">siksi</span>, <span class="fi">vaikka</span>, <span class="fi">kuten</span> (<span class="fi">mutta</span> você já conhece). A vírgula vem antes. Depois de <span class="fi">siksi</span>, o verbo pode vir logo.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Se on paras paita, siksi otan sen.</span></td><td>por isso · o verbo pode vir logo depois de siksi</td></tr>
  <tr><td><span class="fi">Pane takki päälle, vaikka on kuuma!</span></td><td>mesmo que</td></tr>
  <tr><td><span class="fi">Vaatteet, kuten paidat ja shortsit, ovat halpoja.</span></td><td>como (por exemplo)</td></tr>
  <tr><td><span class="fi">Paita on kaunis, mutta se on kallis.</span></td><td>mas</td></tr>
</table>`
    },
    {
      id: 'sudenkuopat12', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-objekti',
      html: `
<ul>
  <li><b>O objeto não fica na forma básica:</b> <span class="fi">Ostan paidan.</span>, não “ostan paita”. A forma básica só quando a frase não tem sujeito: depois de uma ordem (<span class="fi">Ota se!</span>) e com <span class="fi">täytyy</span>.</li>
  <li><b>Pronomes pessoais com -t:</b> <span class="fi">Tunnen hänet.</span>, não “tunnen hänen”: <span class="fi">minut, sinut, hänet, meidät, teidät, heidät</span>, também depois de uma ordem.</li>
  <li><b>Negação = partitivo, sempre:</b> <span class="fi">En osta paitaa.</span>, nunca com <span class="fi pala">-n</span>.</li>
  <li><b>Depois de 2, 3, 4…, partitivo singular:</b> <span class="fi">kaksi paitaa</span>, não <span class="fi pala">kaksi paidat</span>.</li>
  <li><b>O adjetivo também muda:</b> <span class="fi">isossa kaupassa</span>, <span class="fi">sinisen paidan</span>.</li>
  <li><b>Roupas no plural:</b> <span class="fi">housut, shortsit</span> são uma peça só.</li>
  <li><b>y não é u:</b> <span class="fi">hyvä</span>, não “huva”; <span class="fi">myy</span> (vende) × <span class="fi">muu</span> (outro).</li>
</ul>`
    }
  ]
});
