/* Tottakai, kertaus 2 (k02): Rumo a Confins, oppitunnit 6–10 (OPPITUNNIT_6_20.md §5 ”Kertaus K2”; PELILLISTAMINEN §4.1).
   Oma materiaali, ei kirjan tekstiä. Kertaus ei opeta uutta kielioppia; vähintään 95 % sanoista on opetettu
   oppitunneilla 0–10 (tarkistus: node tottakai/tools/puuttuvat.js k02). Kaksi osaa omina sivuinaan (TYONKULKU 11):
   - osa A (#k02): Kapybaran ja Manaatin kylpyläkohtaus portugaliksi, dialogi lennolla Lissabonista Confinsiin (16
     repliikkiä: Maia ja Jay tapaavat suomalaiset turistit Uunon ja Eenokin (lihamatka; kurssin ainoa Hesburger-repliikki;
     Feira Hippie -kytkös oppitunnille 12),
     saapuminen Confinsiin (Marta, Walker ja Anderson portugaliksi kertojan tekstissä; Andersonin ensimmäinen suomen
     sana Moi!), Frases prontas, koonti ”Onde, de onde, para onde” + täytyy ja kello, tehtävät 1–6 (paikallissijat,
     chat, verbityypit 4–5, kuuntelukoe paljain muodoin, tämä/tuo ja t-monikko, keskustelu), Na rua -tunnistus
     (tehtävä 7), kotitehtävä ja ”Eu sei”-lista (oppituntien 6–10 itsearviot).
   - osa B (#k02-b): esittely (Capivara ja Peixe-boi löytävät Maian Belo Horizontesta ja antavat kolmiolasit,
     .pomo-lahja), lämmittely vahva/heikko aste (tehtävä 8) ja pomotaistelu Astevaihtelun kaksipää (assets/pomo.js),
     kulttuuri (joulu kesällä ja sadekausi; Confins).
   Kuuntelukoe (TYONKULKU 14): äänitteessä vain paljas muoto. Roolit (OPPITUNNIT §2): Uuno mies 7, Eenok mies 8,
   Anderson mies 7 (yksi sana); kasvot assets/oppaat.js (k02-merkki). Kaikki puhuvat kirjakieltä; puhekieli vain
   Na rua -nurkassa. Maian perheen sanat portugaliksi kertojan tekstissä (lang="pt-BR"). */
Kurssi.lisaa({
  id: 'k02',
  lyhyt: 'R2',
  jakso: 'Revisão 6–10',
  otsikko: 'Rumo a Confins: revisão das lições 6–10',
  lahde: 'Revisão: -ssa, -sta, -aan, -oon, -iin… e -lla, -lta, -lle (lugares e pessoas), verbos dos tipos 4 e 5, tämä/tuo/se, plural -t, ordens (Ota! Älä ota!), as horas e minun täytyy · Luta final: Astevaihtelun kaksipää',
  aiheet: ['liike', 'paikka', 'aika', 'tervehdys'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; volta para casa no Natal' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; primeira vez no Brasil, só quer dormir' },
    uuno: { nimi: 'Uuno', tyyppi: 'mies', vaihto: 7, kuvaus: 'turista finlandês; macacão azul-claro, cabelo platinado; viagem da carne' },
    eenok: { nimi: 'Eenok', tyyppi: 'mies', vaihto: 8, kuvaus: 'turista finlandês, irmão do Uuno; o mesmo macacão e o mesmo cabelo; adora hambúrguer' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; aprendeu uma palavra em finlandês' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; não dorme enquanto o filho viaja' }
  },

  // Kertauksen sanasto: oppituntien 6–10 tärkeimmät sanat (sanastosivu ja visa).
  sanasto: [
    'kirjasto', 'kirja', 'muistaa', 'järvi', 'sauna', 'taide', 'taulu', 'maalata',
    'ravintola', 'kollega', 'unelma', 'tilata', 'tarvita', 'valita', 'tavata', 'osata', 'haluta',
    'asunto', 'ikkuna', 'tuoli', 'vuokra', 'muuttaa', 'onnellinen', 'tämä', 'tuo',
    'lumi', 'sataa', 'kesä', 'talvi', 'toppatakki', 'aurinkolasi', 'sukka', 'pakata', 'unohtaa', 'valmis',
    'minun täytyy', 'lento', 'lentokone', 'lentokenttä', 'passi', 'matka', 'turisti', 'tunti', 'myöhässä', 'Confins'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Revisão no avião',
      html: `
<ul class="tavoitteet">
  <li>Parte A: um diálogo novo no avião só com o que você já aprendeu, o mapa de “onde, de onde, para onde”, uma prova curta de escuta e seis exercícios mistos.</li>
  <li>Parte B: aquecimento e a luta final contra o <span class="fi">Astevaihtelun kaksipää</span>, a fera de duas cabeças: uma forte e uma fraca.</li>
</ul>

<section class="osio">
  <h2>De volta ao Spa do Capivara</h2>
  <p><span class="ryhma" data-hahmot="kertoja,manaatti"></span></p>
  <p><b>Capivara:</b> De volta ao spa! Água quente, mandarina na cabeça e mais cinco lições para revisar, da 6 à 10. Eu lembro de todas. A 7 tinha almoço, isso eu lembro muito bem. As outras… tinham palavras.</p>
  <p><b>Peixe-boi:</b> Revisão de novo. Nada de novo, de novo. Hoje eu estou especialmente feliz.</p>
  <p><b>Capivara:</b> A Maia e o Jay estão no avião de Lisboa para Confins. No avião viajam dois finlandeses que não sabem nada de Belo Horizonte, e a Maia explica tudo: para onde ir, a que horas e o que eles precisam levar. Depois você mostra o que sabe. E na parte B… vem um bicho com duas cabeças.</p>
  <p><b>Peixe-boi:</b> Duas cabeças? Eu mal uso uma. Vou tirar um cochilo e torcer por você daqui.</p>
</section>

<p data-paikka="belo-horizonte-panoraama">Domingo, 20 de dezembro. Em Lisboa, a Maia e o Jay trocaram de avião; agora são nove horas de voo até Confins, o aeroporto de Belo Horizonte. O Jay quer dormir. Mas na fileira do lado viajam dois finlandeses de macacão azul-claro e cabelo platinado, o Uuno e o Eenok: os dois homens da fila da segurança em Helsinque. É a primeira vez deles no Brasil. Eles leem o cartão de segurança do avião com muito interesse, do começo ao fim, duas vezes. Quase tudo o que eles dizem vem das lições 1 a 10.</p>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Diálogo: Lentokoneessa</h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure: um <span class="fi pala">para onde</span> com ilativo, um <span class="fi">täytyy</span>, uma hora, uma ordem, <span class="fi">tämä</span> e <span class="fi">tuo</span>.</p>
  <div class="kpl" id="k02-dialogi" data-nimi="Ouvir o diálogo">
    <p class="s" data-h="kertoja" data-pt="O avião voa de Lisboa para Confins. No avião há também dois turistas finlandeses, o Uuno e o Eenok.">Lentokone lentää Lissabonista Confinsiin. Lentokoneessa on myös kaksi suomalaista turistia, Uuno ja Eenok.</p>
    <p class="s" data-h="uuno" data-pt="Com licença, vocês falam finlandês?">Anteeksi, puhutteko te suomea?</p>
    <p class="s" data-h="jay" data-pt="Falamos. Eu sou o Jay, e esta é a Maia. A Maia é de Belo Horizonte.">Puhumme. Minä olen Jay, ja tämä on Maia. Maia on Belo Horizontesta.</p>
    <p class="s" data-h="eenok" data-pt="Prazer! A gente vai para Belo Horizonte, numa viagem da carne. Aonde a gente precisa ir lá?">Hauska tavata! Me menemme Belo Horizonteen lihamatkalle. Mihin meidän täytyy siellä mennä?</p>
    <p class="s" data-h="maia" data-pt="Ao mercado municipal! Lá tem carne boa, queijo e café. Vocês precisam ir lá de manhã, às nove.">Kauppahalliin! Siellä on hyvää lihaa, juustoa ja kahvia. Teidän täytyy mennä sinne aamulla, kello yhdeksän.</p>
    <p class="s" data-h="eenok" data-pt="Lá está frio agora? Eu estou com este casaco de inverno.">Onko siellä nyt kylmä? Minulla on tämä toppatakki.</p>
    <p class="s" data-h="jay" data-pt="Põe na mala! Lá agora é verão, e faz vinte e oito graus. Leve os óculos de sol!">Laita se laukkuun! Siellä on nyt kesä, ja lämmintä on kaksikymmentäkahdeksan astetta. Ota aurinkolasit!</p>
    <p class="s" data-h="uuno" data-pt="Maia, o que é aquilo lá? É carne?">Maia, mikä tuo on? Onko se lihaa?</p>
    <p class="s" data-h="maia" data-pt="Isto aqui, no meu prato? Não. É peixe.">Tämä? Ei. Se on kalaa.</p>
    <p class="s" data-h="eenok" data-pt="E hambúrguer? Você gosta de carne?">Entä hampurilainen? Pidätkö sinä lihasta?</p>
    <p class="s" data-h="maia" data-hairio="’Esburgerissa → Hesburgerissa" data-pt="Gosto! O melhor hambúrguer é no ’Esburger. Mas ele fica na Finlândia. (errado: Hesburger)">Pidän! Paras hampurilainen on <span class="pala">’Esburgerissa</span>. Mutta se on Suomessa.</p>
    <p class="s" data-h="uuno" data-pt="Ah, vocês também têm Hesburger na Finlândia? Carne finlandesa… (os dois ficam sonhando)">Ai, teillä on myös Suomessa Hesburger? Suomalaista lihaa…</p>
    <p class="s" data-h="maia" data-pt="No domingo eu vendo arte na feira. O nome dela é Feira Hippie. Lá também tem comida.">Sunnuntaina myyn taidetta torilla. Sen nimi on <span lang="pt-BR">Feira Hippie</span>. Siellä on myös ruokaa.</p>
    <p class="s" data-h="jay" data-pt="Eu também fico lá. Eu durmo na cadeira.">Minä olen siellä myös. Minä nukun tuolilla.</p>
    <p class="s" data-h="eenok" data-pt="Ótimo! A gente vai lá no domingo.">Hyvä! Me tulemme sinne sunnuntaina.</p>
    <p class="s" data-h="kertoja" data-pt="São sete da noite. O avião chega a Confins.">Kello on seitsemän illalla. Lentokone saapuu Confinsiin.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas que voltam</h3>
    <p>Nada de novo: são blocos das lições 1 a 10. Aqui você vê de onde vem cada pedaço.</p>
    <ul>
      <li><span class="fi">Hauska tavata!</span> = prazer! (lição 1) · <span class="fi">tavata</span> é do tipo 4 (lição 7)</li>
      <li><span class="fi">Mihin meidän täytyy mennä?</span> = aonde a gente precisa ir? (lição 10) · <span class="fi">mihin</span> + ilativo (lição 6)</li>
      <li><span class="fi">Laita se laukkuun!</span> = põe na mala! (lição 9) · <span class="fi pala">laukku → laukkuun</span>: o ilativo fica forte</li>
      <li><span class="fi">Ota aurinkolasit!</span> = leve os óculos de sol! (lição 9) · depois da ordem, o plural <span class="fi pala">-t</span></li>
      <li><span class="fi">Mikä tuo on? – Tämä?</span> = o que é aquilo? – Isto aqui? (lição 8) · <span class="fi">Onko se lihaa?</span>: carne como substância, no partitivo</li>
      <li><span class="fi">Pidätkö sinä lihasta? – Pidän!</span> = você gosta de carne? – gosto! (lição 10) · <span class="fi">pitää</span> = gostar, com a coisa no elativo <span class="fi pala">-sta</span></li>
      <li><span class="fi">torilla, tuolilla</span> = na feira, na cadeira (lição 7) · <span class="fi pala">-lla</span>: em cima, lugar aberto</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="confins">
  <h2>Chegada em Confins</h2>
  <p>Às sete da noite o avião pousa em Confins. Lá fora faz 28 graus. O Uuno e o Eenok descem do avião de macacão azul-claro, o Eenok com o casaco de inverno no braço. Os dois acenam: até domingo, na feira!</p>
  <p>No saguão, três pessoas esperam. A Marta segura um cartaz enorme: <span lang="pt-BR">BEM-VINDOS, MAIA E JAY!</span> Ela abraça a Maia e não solta mais: <span lang="pt-BR">“Minha filha, que saudade!”</span> O Walker, com a gaita no bolso, aperta a mão do Jay: <span lang="pt-BR">“Seja bem-vindo a Minas, Jay!”</span> E o Anderson, de boné do Rei Leão, treinou a semana inteira ao telefone com a Maia. Ele dá um passo à frente e diz ao Jay a sua primeira palavra em finlandês:</p>
  <div class="kpl" id="k02-saapuminen" data-nimi="Ouvir a chegada">
    <p class="s" data-h="anderson" data-pt="Oi!">Moi!</p>
    <p class="s" data-h="jay" data-pt="Oi, Anderson! Feliz Natal!">Moi, Anderson! Hyvää joulua!</p>
    <p class="s" data-h="kertoja" data-pt="O Anderson ri. Agora ele fala finlandês. Um pouco.">Anderson nauraa. Nyt hän puhuu suomea. Vähän.</p>
  </div>
</section>

<section class="osio">
  <h2>Onde, de onde, para onde: o mapa das lições 6 a 10</h2>
  <p>Seis terminações respondem a três perguntas. As de dentro (<span class="fi pala">-ssa, -sta, -aan, -oon, -iin…</span>) são da lição 6; as de fora, para lugares abertos e para pessoas (<span class="fi pala">-lla, -lta, -lle</span>), das lições 7 e 10. Toque nas palavras para ver as formas.</p>
  <table class="taivutus">
    <tr><th>pergunta</th><th>dentro</th><th>em cima, lugar aberto, pessoa</th><th>lição</th></tr>
    <tr><td><span class="fi">missä?</span> onde?</td><td><span class="fi">kirjastossa</span><span class="kaannos" lang="pt-BR">na biblioteca</span> <span class="fi">Helsingissä</span><span class="kaannos" lang="pt-BR">em Helsinque</span></td><td><span class="fi">torilla</span><span class="kaannos" lang="pt-BR">na feira</span> <span class="fi">Martalla</span><span class="kaannos" lang="pt-BR">com a Marta</span></td><td>6, 7, 10</td></tr>
    <tr><td><span class="fi">mistä?</span> de onde?</td><td><span class="fi">kirjastosta</span><span class="kaannos" lang="pt-BR">da biblioteca</span> <span class="fi">Lissabonista</span><span class="kaannos" lang="pt-BR">de Lisboa</span></td><td><span class="fi">asemalta</span><span class="kaannos" lang="pt-BR">da estação</span> <span class="fi">äidiltä</span><span class="kaannos" lang="pt-BR">da mãe</span></td><td>6, 7, 10</td></tr>
    <tr><td><span class="fi">mihin?</span> para onde?</td><td><span class="fi">kirjastoon</span><span class="kaannos" lang="pt-BR">para a biblioteca</span> <span class="fi">laukkuun</span><span class="kaannos" lang="pt-BR">para dentro da mala</span></td><td><span class="fi">asemalle</span><span class="kaannos" lang="pt-BR">para a estação</span> <span class="fi">Jaylle</span><span class="kaannos" lang="pt-BR">para o Jay</span></td><td>6, 7, 10</td></tr>
    <tr><td>em casa</td><td colspan="2"><span class="fi">kotona</span><span class="kaannos" lang="pt-BR">em casa</span> · <span class="fi">kotoa</span><span class="kaannos" lang="pt-BR">de casa</span> · <span class="fi">kotiin</span><span class="kaannos" lang="pt-BR">para casa</span></td><td>6</td></tr>
  </table>
  <p>E mais duas coisas que voltam o tempo todo nas lições 9 e 10: quem precisa e que horas são.</p>
  <table class="taivutus">
    <tr><th>finlandês</th><th>português</th><th>lição</th></tr>
    <tr><td><span class="fi">Minun täytyy lähteä.</span></td><td>Eu preciso ir embora.</td><td>10</td></tr>
    <tr><td><span class="fi">Teidän täytyy mennä sinne aamulla.</span></td><td>Vocês precisam ir lá de manhã.</td><td>10</td></tr>
    <tr><td><span class="fi">Maian täytyy juosta.</span></td><td>A Maia precisa correr.</td><td>10</td></tr>
    <tr><td><span class="fi">Kello on puoli viisi.</span></td><td>São quatro e meia.</td><td>10</td></tr>
    <tr><td><span class="fi">Kello on viisi yli neljä.</span></td><td>São quatro e cinco.</td><td>10</td></tr>
    <tr><td><span class="fi">Kello on kaksikymmentä vaille viisi.</span></td><td>São vinte para as cinco.</td><td>10</td></tr>
    <tr><td><span class="fi">Ota aurinkolasit! Älä ota toppatakkia!</span></td><td>Leve os óculos de sol! Não leve o casaco de inverno!</td><td>9</td></tr>
  </table>
  <div class="muista">
    <p><b>Lembre:</b> quem precisa vai no genitivo: <span class="fi">minun, sinun, Maian täytyy</span>, e o verbo fica no infinitivo. <span class="fi pala">puoli</span> conta para a hora <b>seguinte</b>: <span class="fi">puoli viisi</span> = 4h30. Mais na <a href="#h-paikallissijat">Gramática: os casos de lugar</a> e na <a href="#h-taytyy">Gramática: täytyy</a>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="confins">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Onde, de onde, para onde: dentro e fora</h3>
    <p class="ohje">Escreva a forma certa. Entre parênteses: a palavra e a pergunta. Lugar fechado: <span class="fi pala">-ssa, -sta, -aan, -oon, -iin…</span>. Lugar aberto ou pessoa: <span class="fi pala">-lla, -lta, -lle</span>. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Uuno ja Eenok ovat <span class="aukko" data-oikea="lentokoneessa"></span>. <span data-ei-kuplaa lang="pt-BR">(lentokone, onde?)</span></p>
      <p>Lentokone lentää <span class="aukko" data-oikea="Lissabonista"></span> Confinsiin. <span data-ei-kuplaa lang="pt-BR">(Lissabon, de onde?)</span></p>
      <p>Toppatakki menee <span class="aukko" data-oikea="laukkuun"></span>. <span data-ei-kuplaa lang="pt-BR">(laukku, para onde?)</span></p>
      <p>Sunnuntaina Maia on <span class="aukko" data-oikea="torilla"></span>. <span data-ei-kuplaa lang="pt-BR">(tori, onde?)</span></p>
      <p>Jay nukkuu <span class="aukko" data-oikea="tuolilla"></span>. <span data-ei-kuplaa lang="pt-BR">(tuoli, onde?)</span></p>
      <p>Maia soittaa <span class="aukko" data-oikea="äidille"></span>. <span data-ei-kuplaa lang="pt-BR">(äiti, para quem?)</span></p>
      <p>Jayllä on viesti <span class="aukko" data-oikea="Purjolta"></span>. <span data-ei-kuplaa lang="pt-BR">(Purjo, de quem?)</span></p>
      <p>Huomenna me menemme <span class="aukko" data-oikea="kauppahalliin"></span>. <span data-ei-kuplaa lang="pt-BR">(kauppahalli, para onde?)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>2. Leia as mensagens da Purjo</h3>
    <p class="ohje">Em Confins, o celular da Maia apita. Na Finlândia já é madrugada, mas a Purjo não dorme enquanto o filho viaja. Leia e responda.</p>
    <div class="chat" data-otsikko="Purjo" data-paiva="sunnuntai" data-mina="maia">
      <p data-h="purjo" data-aika="19.40" data-pt="Maia! Onde vocês estão agora? Aqui em Helsinque é meia-noite e quarenta, e eu não durmo.">Maia! Missä te olette nyt? Täällä Helsingissä kello on kaksikymmentä vaille yksi, ja minä en nuku.</p>
      <p data-h="maia" data-aika="19.41" data-pt="Oi, Purjo! Estamos em Confins. Aqui faz calor: vinte e oito graus.">Hei, Purjo! Olemme Confinsissa. Täällä on kuuma: lämmintä on kaksikymmentäkahdeksan astetta.</p>
      <p data-h="purjo" data-aika="19.42" data-pt="Que bom! O bolo está na mala?">Hyvä! Onko kakku laukussa?</p>
      <p data-h="maia" data-aika="19.43" data-pt="Não está. O bolo agora está com a Marta. A Marta está feliz!">Ei ole. Kakku on nyt Martalla. Marta on onnellinen!</p>
      <p data-h="purjo" data-aika="19.43" data-pt="E o Jay? Ele está dormindo?">Entä Jay? Nukkuuko hän?</p>
      <p data-h="maia" data-aika="19.44" data-pt="Não. Ele está ensinando finlandês para o Anderson.">Ei nuku. Hän opettaa Andersonille suomea.</p>
      <p data-h="purjo" data-aika="19.45" data-pt="Diga para o Jay: ele precisa comer bem. Feliz Natal!">Sano Jaylle: hänen täytyy syödä hyvin. Hyvää joulua!</p>
      <p data-h="maia" data-aika="19.46" data-pt="Digo! Feliz Natal, Purjo!">Sanon! Hyvää joulua, Purjo!</p>
    </div>
    <div class="valinta" data-oikea="Confinsissa">
      <p class="kysymys"><span class="fi">Missä Maia ja Jay ovat?</span></p>
      <div class="vaihtoehdot"><button type="button">Confinsiin</button><button type="button">Confinsissa</button><button type="button">Confinsista</button></div>
    </div>
    <div class="valinta" data-oikea="0h40">
      <p class="kysymys"><span class="fi">Paljonko kello on Helsingissä?</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">0h40</button><button type="button">1h20</button><button type="button">0h20</button></div>
    </div>
    <div class="valinta" data-oikea="Martalla">
      <p class="kysymys"><span class="fi">Kenellä kakku on nyt?</span></p>
      <div class="vaihtoehdot"><button type="button">Maialla</button><button type="button">Purjolla</button><button type="button">Martalla</button></div>
    </div>
    <div class="valinta" data-oikea="Andersonille">
      <p class="kysymys"><span class="fi">Kenelle Jay opettaa suomea?</span></p>
      <div class="vaihtoehdot"><button type="button">Andersonille</button><button type="button">Andersonilta</button><button type="button">Andersonilla</button></div>
    </div>
    <div class="valinta" data-oikea="Syödä hyvin.">
      <p class="kysymys"><span class="fi">Mitä Jayn täytyy tehdä?</span> (o que a Purjo diz)</p>
      <div class="vaihtoehdot"><button type="button">Nukkua hyvin.</button><button type="button">Syödä hyvin.</button><button type="button">Juosta.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Verbos dos tipos 4 e 5 (e um tipo 1)</h3>
    <p class="ohje">O infinitivo está entre parênteses. Tipo 4 (vogal + <span class="fi pala">-ta, -tä</span>): tire o <span class="fi pala">-t-</span> e junte as vogais, com a forma forte: <span class="fi">tavata → tapaan</span>. Tipo 5 (<span class="fi pala">-ita</span>): <span class="fi pala">-itse-</span>: <span class="fi">tarvita → tarvitsen</span>. Tipo 1 com gradação: <span class="fi">nukkua → nukun</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Me <span class="aukko" data-oikea="tapaamme"></span> sunnuntaina torilla. <span data-ei-kuplaa>(tavata)</span></p>
      <p>Uuno <span class="aukko" data-oikea="haluaa"></span> ostaa lihaa. <span data-ei-kuplaa>(haluta)</span></p>
      <p><span class="aukko" data-oikea="Osaatko"></span> sinä portugalia? <span data-ei-kuplaa lang="pt-BR">(osata, pergunta)</span></p>
      <p><span class="aukko" data-oikea="Tarvitsenko"></span> minä sateenvarjoa? <span data-ei-kuplaa lang="pt-BR">(tarvita, pergunta)</span></p>
      <p>Eenok <span class="aukko" data-oikea="tilaa"></span> kahvia. <span data-ei-kuplaa>(tilata)</span></p>
      <p>Mitä te <span class="aukko" data-oikea="valitsette"></span>? <span data-ei-kuplaa>(valita)</span></p>
      <p>Jay ei <span class="aukko" data-oikea="osaa"></span> maalata. <span data-ei-kuplaa>(osata)</span></p>
      <p>Minä <span class="aukko" data-oikea="nukun"></span> lentokoneessa. <span data-ei-kuplaa>(nukkua)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Prova de escuta</h3>
    <p class="ohje">Cinco sons das lições 6 a 10. Você ouve só a palavra ou a hora, nada mais. Aperte ▶ e escolha o que ouviu.</p>
    <div class="valinta" data-kuuntele="kirjastosta" data-oikea="kirjastosta">
      <p class="kysymys">Lição 6 · onde, de onde ou para onde?</p>
      <div class="vaihtoehdot"><button type="button">kirjastossa</button><button type="button">kirjastosta</button><button type="button">kirjastoon</button></div>
    </div>
    <div class="valinta" data-kuuntele="asemalle" data-oikea="asemalle">
      <p class="kysymys">Lição 7 · onde, de onde ou para onde?</p>
      <div class="vaihtoehdot"><button type="button">asemalla</button><button type="button">asemalta</button><button type="button">asemalle</button></div>
    </div>
    <div class="valinta" data-kuuntele="tuossa" data-oikea="tuossa">
      <p class="kysymys">Lição 8 · perto ou longe?</p>
      <div class="vaihtoehdot"><button type="button">tässä</button><button type="button">tuossa</button></div>
    </div>
    <div class="valinta" data-kuuntele="paidat" data-oikea="paidat">
      <p class="kysymys">Lição 9 · uma ou várias?</p>
      <div class="vaihtoehdot"><button type="button">paita</button><button type="button">paidat</button></div>
    </div>
    <div class="valinta" data-kuuntele="puoli viisi" data-oikea="4h30">
      <p class="kysymys">Lição 10 · que horas?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">5h30</button><button type="button">4h15</button><button type="button">4h30</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. tämä ou tuo? Um ou vários?</h3>
    <p class="ohje">Escolha a forma certa. Entre parênteses está o que a frase quer dizer.</p>
    <div class="valinta" data-oikea="Tämä">
      <p class="kysymys"><span class="fi">___ laukku on minun, ja tuo on Jayn.</span> (esta, aqui comigo)</p>
      <div class="vaihtoehdot"><button type="button">Tämä</button><button type="button">Tuo</button><button type="button">Se</button></div>
    </div>
    <div class="valinta" data-oikea="tuo">
      <p class="kysymys"><span class="fi">Mikä ___ on? Tuolla, ikkunassa.</span> (aquilo, longe de nós dois)</p>
      <div class="vaihtoehdot"><button type="button">tämä</button><button type="button">tuo</button><button type="button">se</button></div>
    </div>
    <div class="valinta" data-oikea="tähän">
      <p class="kysymys"><span class="fi">Laita kakku ___ laukkuun!</span> (para dentro desta mala)</p>
      <div class="vaihtoehdot"><button type="button">tässä</button><button type="button">tästä</button><button type="button">tähän</button></div>
    </div>
    <div class="valinta" data-oikea="aurinkolasit">
      <p class="kysymys"><span class="fi">Ota ___!</span> (os óculos de sol)</p>
      <div class="vaihtoehdot"><button type="button">aurinkolasit</button><button type="button">aurinkolasi</button><button type="button">aurinkolasin</button></div>
    </div>
    <div class="valinta" data-oikea="sukat">
      <p class="kysymys"><span class="fi">Pakkaa ___!</span> (as meias, todas)</p>
      <div class="vaihtoehdot"><button type="button">sukka</button><button type="button">sukan</button><button type="button">sukat</button></div>
    </div>
    <div class="valinta" data-oikea="kengät">
      <p class="kysymys"><span class="fi">Tässä ovat ___.</span> (os sapatos)</p>
      <div class="vaihtoehdot"><button type="button">kengän</button><button type="button">kengät</button><button type="button">kenkä</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>6. Responda em voz alta</h3>
    <p class="ohje">O Uuno e o Eenok ainda têm perguntas. Responda em voz alta antes de abrir o modelo.</p>
    <details class="vastaus"><summary lang="fi-FI">Mistä sinä olet?</summary><p class="s" data-pt="Sou do Brasil, de Belo Horizonte.">Olen Brasiliasta, Belo Horizontesta.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mihin meidän täytyy mennä?</summary><p class="s" data-pt="Vocês precisam ir ao mercado municipal.">Teidän täytyy mennä kauppahalliin.</p></details>
    <details class="vastaus"><summary><span lang="fi-FI">Paljonko kello on nyt?</span> <span lang="pt-BR">(16h30)</span></summary><p class="s" data-pt="São quatro e meia.">Kello on puoli viisi.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko Belo Horizontessa kuuma?</summary><p class="s" data-pt="É. Lá faz vinte e oito graus.">On. Siellä on lämmintä kaksikymmentäkahdeksan astetta.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä minun täytyy ottaa?</summary><p class="s" data-pt="Leve os óculos de sol! Não leve o casaco de inverno!">Ota aurinkolasit! Älä ota toppatakkia!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kenelle sinä soitat Confinsissa?</summary><p class="s" data-pt="Ligo para a mãe.">Soitan äidille.</p></details>
  </div>
</section>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Ouvido da rua: mä meen, tää, tuu, puol viis</h3>
  <p>Nas lições 6 a 10 vieram mais formas da língua falada. Você <b>não precisa</b> falar assim; o importante é <b>reconhecer</b>.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">minä menen</span></td><td><span class="fi" data-rekisteri="puhe">mä meen</span></td><td>eu vou</td></tr>
    <tr><td><span class="fi">minulle</span></td><td><span class="fi" data-rekisteri="puhe">mulle</span></td><td>pra mim</td></tr>
    <tr><td><span class="fi">tämä, tuo</span></td><td><span class="fi" data-rekisteri="puhe">tää, toi</span></td><td>este, aquele</td></tr>
    <tr><td><span class="fi">Tule!</span></td><td><span class="fi" data-rekisteri="puhe">Tuu!</span></td><td>venha!</td></tr>
    <tr><td><span class="fi">puoli viisi</span></td><td><span class="fi" data-rekisteri="puhe">puol viis</span></td><td>quatro e meia</td></tr>
  </table>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. O que a pessoa disse, em padrão?</h3>
    <p class="ohje">Ouça (ou leia) a frase da rua e escolha a mesma frase na língua padrão.</p>
    <div class="valinta" data-kuuntele="Mä meen kotiin." data-oikea="Minä menen kotiin.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Mä meen kotiin.</span></p>
      <div class="vaihtoehdot"><button type="button">Sinä menet kotiin.</button><button type="button">Minä menen kotiin.</button><button type="button">Minä menen kauppaan.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Tuu tänne!" data-oikea="Tule tänne!">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Tuu tänne!</span></p>
      <div class="vaihtoehdot"><button type="button">Tule tänne!</button><button type="button">Tulet tänne.</button><button type="button">Mene sinne!</button></div>
    </div>
    <div class="valinta" data-kuuntele="Kello on puol viis." data-oikea="Kello on puoli viisi.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Kello on puol viis.</span></p>
      <div class="vaihtoehdot"><button type="button">Kello on viisi.</button><button type="button">Kello on puoli kuusi.</button><button type="button">Kello on puoli viisi.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mulle kahvi, kiitos." data-oikea="Minulle kahvi, kiitos.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Mulle kahvi, kiitos.</span></p>
      <div class="vaihtoehdot"><button type="button">Sinulle kahvi, kiitos.</button><button type="button">Minulle kahvi, kiitos.</button><button type="button">Minulle tee, kiitos.</button></div>
    </div>
  </div>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Para terminar a parte A</h2>
  <div class="kotitehtava" data-id="k02">
    <h3>Lição de casa</h3>
    <p>Escreva conselhos para o Uuno e o Eenok em cinco frases: aonde eles precisam ir (<span class="fi">Teidän täytyy mennä…</span> + ilativo), a que horas (<span class="fi">kello…</span>), onde você está no domingo (<span class="fi pala">-lla</span> ou <span class="fi pala">-ssa</span>), uma ordem para o Eenok (<span class="fi">Ota…!</span> ou <span class="fi">Älä ota…!</span>) e uma frase com <span class="fi">tämä</span> e <span class="fi">tuo</span>. Leia em voz alta.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Vocês precisam ir ao mercado municipal.">Teidän täytyy mennä kauppahalliin.</p>
      <p class="s" data-pt="Vocês precisam estar lá às nove.">Teidän täytyy <span data-l="olla#2">olla</span> siellä kello yhdeksän.</p>
      <p class="s" data-pt="No domingo eu fico na feira.">Sunnuntaina olen torilla.</p>
      <p class="s" data-pt="Eenok, leve os óculos de sol! Não leve o casaco de inverno!">Eenok, ota aurinkolasit! Älä ota toppatakkia!</p>
      <p class="s" data-pt="Este quadro é barato, mas aquele é caro.">Tämä taulu on halpa, mutta tuo on kallis.</p>
    </details>
  </div>

  <h3>Eu sei: o que você aprendeu nas lições 6 a 10</h3>
  <p class="ohje">A lista junta as autoavaliações das lições. Marque com sinceridade: o que ainda não está firme, revise na lição indicada antes da lição 11.</p>
  <ul class="itsearvio" data-id="k02">
    <li>Digo onde estou, de onde venho e para onde vou: kirjastossa, kirjastosta, kirjastoon (lição 6).</li>
    <li>Formo o ilativo (taloon, maahan, huoneeseen) e uso kotona, kotoa, kotiin (lição 6).</li>
    <li>Uso -lla, -lta e -lle com lugares e com pessoas: torilla, asemalta, äidille (lições 7 e 10).</li>
    <li>Digo com quê: kortilla, metrolla (lição 7).</li>
    <li>Conjugo verbos dos tipos 4 e 5: haluan, osaan, tapaan, tarvitsen, valitsen (lição 7).</li>
    <li>Falo de profissões e sonhos: Olen geologi. Haluan olla taidemaalari. (lição 7)</li>
    <li>Escolho entre tämä, tuo e se e ponho o pronome no caso da palavra: tässä talossa, tähän laukkuun (lição 8).</li>
    <li>Reconheço o tipo da palavra pelo genitivo e a gradação: lamppu → lampun (lição 8).</li>
    <li>Digo preços de 100 a 1000: kuusisataa euroa (lição 8).</li>
    <li>Falo do tempo e digo quando: Sataa lunta; joulukuussa, talvella (lição 9).</li>
    <li>Formo o plural -t e dou ordens: kengät; Ota! Älä ota! (lição 9)</li>
    <li>Digo as horas e o que preciso fazer: Kello on puoli viisi. Minun täytyy lähteä. (lição 10)</li>
    <li>Pronuncio o r vibrante, o t antes de i sem “tch” e o nk de Helsinki (lições 6, 7 e 10).</li>
  </ul>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · A luta final',
      html: `
<ul class="tavoitteet">
  <li>Aquecimento: sete frases para acordar a forma forte e a fraca.</li>
  <li>A luta final: o Capivara e o Peixe-boi pedem ajuda à Maia, que está de férias no Brasil. Derrote o <span class="fi">Astevaihtelun kaksipää</span> com respostas certas. O prêmio vai para a ilha do Capivara e do Peixe-boi.</li>
</ul>

<section class="osio" data-paikka="natal-bh">
  <h2>Socorro! Uma fera de duas cabeças</h2>
  <p>Noite de segunda-feira em Belo Horizonte. A Maia passeia com a família debaixo das luzes de Natal da Praça da Liberdade. De repente, duas figuras molhadas atravessam a praça: o Capivara, correndo, e o Peixe-boi, dentro de um carrinho de feira cheio de água, empurrado pelo Capivara.</p>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Maia! Achamos você! Não foi longe: a ilha fica logo ali, no Amazonas… mais ou menos. Três mil quilômetros, mais ou menos.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Viemos de rio, de chuva e de carrinho. Mais de carrinho.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Emergência de novo! Apareceu uma fera de duas cabeças no nosso banco de areia. A cabeça forte grita: <span class="fi">kauppa! nukkua! äiti!</span> A cabeça fraca sussurra: <span class="fi">kaupassa… nukun… äidin…</span></p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> As duas brigam o tempo todo. E quando a gente responde errado, as duas riem juntas. Isso é o pior.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="maia"></span>
    <p class="apuhahmo-kupla"><b>Maia:</b> Ah, é a gradação! A mesma palavra com a consoante forte ou fraca: <span class="fi pala">pp</span> e <span class="fi pala">p</span>, <span class="fi pala">kk</span> e <span class="fi pala">k</span>, <span class="fi pala">t</span> e <span class="fi pala">d</span>. Isso eu revisei no avião.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Por isso trouxemos isto: óculos de luta novos. Triangulares, um verde-neon e um rosa. Um olho para a cabeça forte, o outro para a fraca. Foi ideia minha. Acho.</p>
  </div>
  <div class="pomo-lahja" data-pomo="k02"></div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="maia"></span>
    <p class="apuhahmo-kupla"><b>Maia:</b> <span class="fi">Tottakai!</span> Quer dizer: claro que eu ajudo. Só preciso voltar antes do jantar: a minha mãe fez feijão tropeiro.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Primeiro um aquecimento. Depois a luta. Feijão tropeiro… eu também posso ir ao jantar?</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: aquecimento</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Forma forte ou fraca?</h3>
    <p class="ohje">A forma <b>fraca</b> vem com <span class="fi pala">-ssa, -sta, -lla, -lta, -lle</span>, com o genitivo <span class="fi pala">-n</span>, com o plural <span class="fi pala">-t</span>, com <span class="fi">minä</span> (<span class="fi pala">-n</span>) e na negação: <span class="fi">kaupassa, äidin, kengät, nukun, en ota</span>. A forma <b>forte</b> fica no ilativo e com <span class="fi">hän</span>: <span class="fi">kauppaan, nukkuu</span>. O tipo 4 é ao contrário: <span class="fi">tavata → tapaan</span>.</p>
    <div class="valinta" data-oikea="kaupassa">
      <p class="kysymys"><span class="fi">Uuno on ___.</span> (kauppa, onde?)</p>
      <div class="vaihtoehdot"><button type="button">kauppaan</button><button type="button">kaupassa</button><button type="button">kauppa</button></div>
    </div>
    <div class="valinta" data-oikea="kauppaan">
      <p class="kysymys"><span class="fi">Eenok menee ___.</span> (kauppa, para onde?)</p>
      <div class="vaihtoehdot"><button type="button">kauppaan</button><button type="button">kaupassa</button><button type="button">kaupasta</button></div>
    </div>
    <div class="valinta" data-oikea="nukun">
      <p class="kysymys"><span class="fi">Minä ___ lentokoneessa.</span> (nukkua)</p>
      <div class="vaihtoehdot"><button type="button">nukkuu</button><button type="button">nukkua</button><button type="button">nukun</button></div>
    </div>
    <div class="valinta" data-oikea="äidin">
      <p class="kysymys"><span class="fi">Tämä on ___ laukku.</span> (äiti, de quem?)</p>
      <div class="vaihtoehdot"><button type="button">äidin</button><button type="button">äiti</button><button type="button">äidille</button></div>
    </div>
    <div class="valinta" data-oikea="tapaamme">
      <p class="kysymys"><span class="fi">Me ___ torilla sunnuntaina.</span> (tavata)</p>
      <div class="vaihtoehdot"><button type="button">tavata</button><button type="button">tapaamme</button><button type="button">tapaavat</button></div>
    </div>
    <div class="valinta" data-oikea="kengät">
      <p class="kysymys"><span class="fi">Missä ovat minun ___?</span> (kenkä, plural)</p>
      <div class="vaihtoehdot"><button type="button">kenkä</button><button type="button">kengän</button><button type="button">kengät</button></div>
    </div>
    <div class="valinta" data-oikea="ota">
      <p class="kysymys"><span class="fi">Jay ei ___ kakkua.</span> (ottaa, negativo)</p>
      <div class="vaihtoehdot"><button type="button">ota</button><button type="button">ottaa</button><button type="button">otan</button></div>
    </div>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: a luta final</h2>
  <div class="pomo" data-pomo="k02"></div>
</section>

<aside class="kulttuuri" data-paikka="bh-sade">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Natal no verão, com chuva</h3>
  <figure class="kuva" data-kuva="bh-sade"></figure>
  <p>Quem chega a Belo Horizonte em dezembro desce em Confins, um aeroporto a uns 40 quilômetros da cidade; o caminho até o centro leva cerca de uma hora de carro ou de ônibus. Na Finlândia é <span class="fi">kaamos</span>, o tempo escuro do inverno; em Minas é verão e estação das chuvas: dias quentes, de 25 a 30 graus, e muitas vezes uma tempestade forte no fim da tarde.</p>
  <p>O Natal brasileiro tem luzes, presépio e ceia na noite do dia 24, mas com ventilador ligado. Para um finlandês, o mais estranho é o Papai Noel de casaco vermelho debaixo de 30 graus. O Eenok, que chegou a Confins com um casaco de inverno no braço, achou o Papai Noel muito bem vestido.</p>
</aside>
`
    }
  ],

  /* Gramática da lição: kertauskortit (ei uutta kielioppia), linkit oppituntien 6–10 Treeni-paketteihin. */
  kielioppi: [
    {
      id: 'kertaus-paikka', otsikko: 'Onde, de onde, para onde: dentro e fora (lições 6, 7 e 10)', taso: 'revisão', hakuosa: 'h-paikallissijat', treeni: ['t06-missa', 't06-mista', 't06-mihin', 't07-ulko', 't10-henkilot'],
      html: `
<table class="taivutus">
  <tr><th>pergunta</th><th>dentro</th><th>em cima, lugar aberto, pessoa</th></tr>
  <tr><td><span class="fi">missä?</span></td><td><span class="fi">kaupassa</span><span class="kaannos" lang="pt-BR">na loja</span></td><td><span class="fi">torilla</span><span class="kaannos" lang="pt-BR">na feira</span></td></tr>
  <tr><td><span class="fi">mistä?</span></td><td><span class="fi">kaupasta</span><span class="kaannos" lang="pt-BR">da loja</span></td><td><span class="fi">äidiltä</span><span class="kaannos" lang="pt-BR">da mãe</span></td></tr>
  <tr><td><span class="fi">mihin?</span></td><td><span class="fi">kauppaan</span><span class="kaannos" lang="pt-BR">para a loja</span></td><td><span class="fi">Jaylle</span><span class="kaannos" lang="pt-BR">para o Jay</span></td></tr>
</table>
<p>O ilativo pega a última vogal: <span class="fi">talo → taloon</span>, <span class="fi">maa → maahan</span>, <span class="fi">huone → huoneeseen</span>. Com <span class="fi pala">-lla</span> também se diz com quê: <span class="fi">kortilla, metrolla</span>.</p>`
    },
    {
      id: 'kertaus-tyypit45', otsikko: 'Verbos dos tipos 4 e 5 (lição 7)', taso: 'revisão', hakuosa: 'h-tyypit45', treeni: ['t07-tyyppi4', 't07-tyyppi5'],
      html: `
<table class="taivutus">
  <tr><th>tipo</th><th>infinitivo</th><th>minä</th><th>hän</th></tr>
  <tr><td>4 · vogal + <span class="fi pala">-ta, -tä</span></td><td><span class="fi">haluta</span><span class="kaannos" lang="pt-BR">querer</span></td><td><span class="fi">haluan</span></td><td><span class="fi">haluaa</span></td></tr>
  <tr><td>4 · com gradação</td><td><span class="fi">tavata</span><span class="kaannos" lang="pt-BR">encontrar</span></td><td><span class="fi">tapaan</span></td><td><span class="fi">tapaa</span></td></tr>
  <tr><td>5 · <span class="fi pala">-ita</span></td><td><span class="fi">tarvita</span><span class="kaannos" lang="pt-BR">precisar de</span></td><td><span class="fi">tarvitsen</span></td><td><span class="fi">tarvitsee</span></td></tr>
</table>
<p>No tipo 4 a gradação é ao contrário: o infinitivo tem a forma fraca (<span class="fi">tavata</span>), a pessoa tem a forte (<span class="fi">tapaan</span>). Negativo: <span class="fi">en halua, en tapaa, en tarvitse</span>.</p>`
    },
    {
      id: 'kertaus-osoittavat', otsikko: 'tämä, tuo, se (lição 8)', taso: 'revisão', hakuosa: 'h-osoittavat', treeni: ['t08-tamatuo', 't08-sanatyypit'],
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>onde está a coisa</th><th>no caso</th></tr>
  <tr><td><span class="fi">tämä</span><span class="kaannos" lang="pt-BR">este, isto</span></td><td>perto de mim</td><td><span class="fi">tässä laukussa, tähän laukkuun</span></td></tr>
  <tr><td><span class="fi">tuo</span><span class="kaannos" lang="pt-BR">aquele, aquilo</span></td><td>longe de nós dois</td><td><span class="fi">tuossa talossa</span></td></tr>
  <tr><td><span class="fi">se</span><span class="kaannos" lang="pt-BR">esse, isso; ele (coisa)</span></td><td>perto de você, ou já falado</td><td><span class="fi">Laita se laukkuun!</span></td></tr>
</table>
<p>O pronome vai no mesmo caso que a palavra: <span class="fi">tässä talossa</span>, nunca <span class="fi pala">tämä talossa</span>.</p>`
    },
    {
      id: 'kertaus-monikko-kasky', otsikko: 'O plural -t e as ordens (lição 9)', taso: 'revisão', hakuosa: 'h-imperatiivi', treeni: ['t09-monikko', 't09-kasky'],
      html: `
<table class="taivutus">
  <tr><th>forma básica</th><th>plural -t</th><th>ordem</th><th>proibição</th></tr>
  <tr><td><span class="fi">kenkä</span></td><td><span class="fi">kengät</span></td><td><span class="fi">Ota!</span><span class="kaannos" lang="pt-BR">pegue!</span></td><td><span class="fi">Älä ota!</span><span class="kaannos" lang="pt-BR">não pegue!</span></td></tr>
  <tr><td><span class="fi">sukka</span></td><td><span class="fi">sukat</span></td><td><span class="fi">Nuku!</span><span class="kaannos" lang="pt-BR">durma!</span></td><td><span class="fi">Älä nuku!</span><span class="kaannos" lang="pt-BR">não durma!</span></td></tr>
  <tr><td><span class="fi">paita</span></td><td><span class="fi">paidat</span></td><td><span class="fi">Tule!</span><span class="kaannos" lang="pt-BR">venha!</span></td><td><span class="fi">Älä tule!</span><span class="kaannos" lang="pt-BR">não venha!</span></td></tr>
</table>
<p>O plural <span class="fi pala">-t</span> e a ordem usam a forma fraca: <span class="fi">kengät, Nuku!</span> Depois de <span class="fi">Älä</span>, a coisa vai no partitivo: <span class="fi">Älä ota toppatakkia!</span></p>`
    },
    {
      id: 'kertaus-kello', otsikko: 'As horas e minun täytyy (lição 10)', taso: 'revisão', hakuosa: 'h-taytyy', treeni: ['t10-kello', 't10-taytyy'],
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Kello on viisi yli neljä.</span></td><td>São quatro e cinco.</td></tr>
  <tr><td><span class="fi">Kello on puoli viisi.</span></td><td>São quatro e meia.</td></tr>
  <tr><td><span class="fi">Kello on kaksikymmentä vaille viisi.</span></td><td>São vinte para as cinco.</td></tr>
  <tr><td><span class="fi">Minun täytyy lähteä.</span></td><td>Eu preciso ir embora.</td></tr>
  <tr><td><span class="fi">Maian täytyy juosta.</span></td><td>A Maia precisa correr.</td></tr>
</table>
<p>Quem precisa vai no genitivo <span class="fi pala">-n</span>, com a forma fraca: <span class="fi">äiti → äidin täytyy</span>. Mais em <a href="#h-aika">Gramática: o tempo e as horas</a>.</p>`
    },
    {
      id: 'kertaus-astevaihtelu', otsikko: 'Forma forte e forma fraca (lições 6 a 10)', taso: 'revisão', hakuosa: 'h-astevaihtelu', treeni: ['t06-mihin', 't09-monikko'],
      html: `
<table class="taivutus">
  <tr><th>forte</th><th>fraca</th><th>quando fica fraca</th></tr>
  <tr><td><span class="fi">kauppa, kauppaan</span></td><td><span class="fi">kaupassa, kaupasta</span></td><td><span class="fi pala">-ssa, -sta</span> (lição 6)</td></tr>
  <tr><td><span class="fi">äiti</span></td><td><span class="fi">äidille, äidin</span></td><td><span class="fi pala">-lle</span>, genitivo (lições 7 e 10)</td></tr>
  <tr><td><span class="fi">lamppu</span></td><td><span class="fi">lampun</span></td><td>genitivo (lição 8)</td></tr>
  <tr><td><span class="fi">kenkä, nukkuu</span></td><td><span class="fi">kengät, nukun, Nuku!</span></td><td>plural <span class="fi pala">-t</span>, <span class="fi">minä</span>, ordem (lição 9)</td></tr>
</table>
<p>O ilativo e a forma de <span class="fi">hän</span> ficam fortes: <span class="fi">kauppaan, nukkuu</span>. É isso que o <span class="fi">Astevaihtelun kaksipää</span> pergunta na luta.</p>`
    }
  ]
});
