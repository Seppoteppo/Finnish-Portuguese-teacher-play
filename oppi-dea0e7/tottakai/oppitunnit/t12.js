/* Tottakai, lição 12: Savassi ja Feira Hippie (Passon jakso 12 Maian näkökulmasta; OPPITUNNIT_6_20.md §5b Oppitunti 12).
   Oma materiaali, ei kirjan tekstiä. Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t12): lauantai, +32 °C, Jay pitkissä housuissa ja takissa; Maia vie hänet ostoksille Savassiin. Dialogi A
     (21 repliikkiä, Maia ja Jay puhuvat kaupassa suomea salakielenä, myyjä vain portugaliksi kertojan tekstissä),
     Frases prontas, kikka A: sovituskoppi (komponentit.js provador, data-lauseet: valmiit suomenkieliset .s-repliikit
     väreittäin, Jay vaihtaa paidan ja lippiksen peilin edessä; koko = objekti -n, kielto = partitiivi), sanasto,
     ääntäminen y ja ö (Maian virhe ”huva” → hyvä; kyy/kuu, myy/muu, työ/tuo), tehtävät 1–3.
   - osa B (#t12-b): sunnuntai Feira Hippiellä (Avenida Afonso Pena). Gramática 1 objekti (koko -n / -t, osa, jatkuva,
     kielto ja luku partitiivilla; tehtävä 4 heti säännön ja partitiiviverbien perään; käsky perusmuodolla
     tunnistukseen, lunastetut lupaukset), tehtävä 5, Gramática 2 adjektiivin kongruenssi
     (sinisessä paidassa, isossa kaupassa, kolmannessa kerroksessa), tehtävä 6, dialogi B (21 repliikkiä: K2:n turistit
     Uuno ja Eenok, Jay palvelee suomeksi; vihjeet: haalarit helteessä, oudot kolikot ja juuri oikea raha), peli Feira Hippie (pelit.js), tehtävät 7–9, kulttuuri, Na rua (tän),
     kotitehtävä, itsearvio.
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
  lahde: 'Tema: roupas para o calor na Savassi e a banca da Maia na Feira Hippie · Gramática: o objeto inteiro (-n, -t) ou parte (partitivo), a negação com partitivo, o adjetivo no mesmo caso do substantivo (sinisessä paidassa) · Pronúncia: y e ö',
  aiheet: ['raha', 'ominaisuus', 'kaupunki', 'toiminta'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga e pintora; vende quadros e cerâmica na Feira Hippie' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; chega ao verão de Belo Horizonte de calça comprida' },
    uuno: { nimi: 'Uuno', tyyppi: 'mies', vaihto: 7, kuvaus: 'turista finlandês do avião; macacão azul-claro, cabelo platinado; viagem da carne' },
    eenok: { nimi: 'Eenok', tyyppi: 'mies', vaihto: 8, kuvaus: 'turista finlandês, irmão do Uuno; o mesmo macacão azul-claro, mesmo com trinta graus' }
  },

  sanasto: [
    'lahja', 'vaate', 'paita', 'housu', 'shortsi', 'mekko', 'hame', 'takki', 'lippis', 'hattu', 'kenkä', 'sandaali',
    'myyjä', 'sovituskoppi', 'peili', 'koko:mitta', 'sovittaa', 'käyttää', 'katsella', 'myydä', 'panna', 'päälle',
    'sininen', 'punainen', 'keltainen', 'valkoinen', 'musta', 'vihreä',
    'kuppi', 'kulho', 'maljakko', 'keramiikka', 'pussi', 'raha', 'paha', 'juuri', 'vaikka', 'siksi', 'kuten'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Roupas para o calor',
      html: `
<ul class="tavoitteet">
  <li>Parte A: as roupas (<span class="fi">paita, housut, shortsit, lippis</span>), as cores no provador e os sons <span class="fi pala">y</span> e <span class="fi pala">ö</span>: <span class="fi">kyy</span> × <span class="fi">kuu</span>.</li>
  <li>Parte B: o objeto inteiro ou só uma parte (<span class="fi">Otan tämän paidan. En osta takkia.</span>), o adjetivo no mesmo caso (<span class="fi">sinisessä paidassa</span>) e a banca da Maia na Feira Hippie, com preços em reais.</li>
</ul>
<p data-paikka="bh-bairro">Sábado de manhã, na casa dos pais da Maia, em Belo Horizonte. O termômetro da cozinha marca 32 graus. O Jay desce a escada de calça comprida, meias de lã e casaco, como se fosse pegar o metrô em Sörnäinen. A Marta olha para ele e diz: “Meu filho, você vai derreter!” A Maia decide na hora: hoje é dia de compras na Savassi, o bairro das lojas. Lá a vendedora só fala português, então a Maia e o Jay falam finlandês entre eles: a língua secreta dos dois.</p>

<section class="osio" data-paikka="savassi">
  <h2>Diálogo A: <span class="fi">Ostamme shortsit</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Repare no que acontece com as roupas depois de <span class="fi">ostaa</span> (comprar) e <span class="fi">ottaa</span> (levar): <span class="fi">tämän sinisen paidan</span> e <span class="fi">nämä shortsit</span>, mas <span class="fi">en ota punaista lippistä</span>. E numa palavra que a Maia erra. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t12-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="Sábado, Savassi. É meio-dia, e lá fora faz trinta e dois graus.">Lauantai, Savassi. Kello on kaksitoista, ja ulkona on kolmekymmentäkaksi astetta lämmintä.</p>
    <p class="s" data-h="maia" data-pt="Jay, você está de calça comprida e de casaco! Você está com calor?">Jay, sinulla on pitkät housut ja takki! Onko sinulla kuuma?</p>
    <p class="s" data-h="jay" data-pt="Estou. Mas eu não tenho shorts.">On. Mutta minulla ei ole shortseja.</p>
    <p class="s" data-h="maia" data-pt="Então a gente compra um short. Vem! Naquela loja grande tem roupa barata.">Sitten ostamme shortsit. Tule! Tuossa isossa kaupassa on halpoja vaatteita.</p>
    <p class="s" data-h="jay" data-pt="Bom. Mas eu não tenho muito dinheiro.">Hyvä. Mutta minulla ei ole paljon rahaa.</p>
    <p class="s" data-h="maia" data-pt="Sem problema. Aqui tudo é barato.">Ei ongelmaa. Täällä kaikki on halpaa.</p>
    <p class="s" data-h="kertoja" data-pt="Na loja, a Maia e o Jay falam finlandês. A vendedora não entende.">Kaupassa Maia ja Jay puhuvat suomea. Myyjä ei ymmärrä.</p>
    <p class="s" data-h="jay" data-pt="Maia, esta camisa custa cem reais! É cara.">Maia, tämä paita maksaa sata realia! Se on kallis.</p>
    <p class="s" data-h="maia" data-pt="Não olhe o preço. Olhe a cor! A camisa azul fica bem em você.">Älä katso hintaa. Katso väriä! Sininen paita sopii sinulle.</p>
    <p class="s" data-h="jay" data-pt="Está bem. Estou experimentando esta camisa azul.">Hyvä on. Sovitan tätä sinistä paitaa.</p>
    <p class="s" data-h="maia" data-pt="Ponha também estes shorts!">Pane myös nämä shortsit päälle!</p>
    <p class="s" data-h="kertoja" data-pt="O Jay vai para o provador. Depois ele sai de camisa azul.">Jay menee sovituskoppiin. Sitten hän tulee ulos sinisessä paidassa.</p>
    <p class="s" data-h="maia" data-hairio="huva → hyvä" data-pt="Ai, “huva”! Fica bem em você. (errado: hyvä)">Voi, <span class="pala">huva</span>! Se sopii sinulle.</p>
    <p class="s" data-h="jay" data-pt="“Huva”? Hyvä, Maia. Y, não u."><span class="pala">Huva</span>? Hyvä, Maia. <span class="pala">Y</span>, ei <span class="pala">u</span>.</p>
    <p class="s" data-h="jay" data-pt="(no espelho) Nada mal! Mas não é pequena demais?">Ei paha! Mutta onko se liian pieni?</p>
    <p class="s" data-h="maia" data-pt="Não é. Está exatamente bom.">Ei ole. Se on juuri hyvä.</p>
    <p class="s" data-h="maia" data-pt="Hyvä! E este boné vermelho? Leva!">Hyvä! Entä tämä punainen lippis? Ota se!</p>
    <p class="s" data-h="jay" data-pt="Não levo o boné vermelho. Levo esta camisa azul e estes shorts.">En ota punaista lippistä. Otan tämän sinisen paidan ja nämä shortsit.</p>
    <p class="s" data-h="maia" data-pt="Mesmo que a camisa seja cara?">Vaikka paita on kallis?</p>
    <p class="s" data-h="jay" data-pt="Mesmo assim. Ela é a melhor camisa, por isso eu levo.">Vaikka. Se on paras paita, siksi otan sen.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay paga com cartão e diz à vendedora, em português: “Obrigada!” A Maia ri.">Jay maksaa kortilla ja sanoo myyjälle portugaliksi: ”<span lang="pt-BR">Obrigada!</span>” Maia nauraa.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde estas como blocos prontos. A regra de quase todas vem na parte B desta lição:</p>
    <ul>
      <li><span class="fi">Onko sinulla kuuma?</span> = você está com calor? · calor e frio vão com <span class="fi">minulla on</span>: <span class="fi">minulla on kuuma, minulla on kylmä</span></li>
      <li><span class="fi">kolmekymmentäkaksi astetta lämmintä</span> = trinta e dois graus · como na previsão do tempo (lição 9)</li>
      <li><span class="fi">Tuossa isossa kaupassa</span> = naquela loja grande · o pronome e o adjetivo ganham a mesma terminação da palavra</li>
      <li><span class="fi">Sovitan tätä sinistä paitaa.</span> = estou experimentando esta camisa azul · partitivo: a ação ainda está acontecendo</li>
      <li><span class="fi">Hän tulee ulos sinisessä paidassa.</span> = ele sai de camisa azul · “estar (ou sair) de camisa azul”: a roupa vai com <span class="fi pala">-ssa</span>, “dentro” da roupa</li>
      <li><span class="fi">Ota se!</span> = leva! · depois da ordem, a forma básica, sem <span class="fi pala">-n</span> (lição 9)</li>
      <li><span class="fi">portugaliksi</span> = em português · o caso <span class="fi pala">-ksi</span>: lição 16</li>
      <li><span class="fi">Ei paha!</span> = nada mal! · <span class="fi">juuri hyvä</span> = exatamente bom · <span class="fi">vaikka</span> = mesmo que · <span class="fi">siksi</span> = por isso</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="savassi">
  <h2>No provador: <span class="fi">sovituskoppi</span></h2>
  <p class="ohje">O Jay está diante do espelho (<span class="fi">peili</span>). Toque numa cor: o Jay troca a camisa ou o boné, a Maia comenta, e o Jay decide. Escute o objeto: quando o Jay leva, a roupa ganha <span class="fi pala">-n</span> (<span class="fi">sinisen paidan</span>); quando não leva, fica no partitivo (<span class="fi">punaista paitaa</span>). A regra vem na parte B.</p>
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
    <div data-esine="lippis" data-osa="lippis" data-varit="musta:#1b1b1b,sininen:#2563eb,vihreä:#2e9d4a">
      <p class="s" data-h="maia" data-vari="musta" data-pt="O boné preto fica quente no sol.">Musta lippis on auringossa kuuma.</p>
      <p class="s" data-h="jay" data-vari="musta" data-pt="Então não levo o boné preto.">Sitten en ota mustaa lippistä.</p>
      <p class="s" data-h="maia" data-vari="sininen" data-pt="Boné azul e camisa azul!">Sininen lippis ja sininen paita!</p>
      <p class="s" data-h="jay" data-vari="sininen" data-pt="Ótimo. Eu levo o boné azul.">Hyvä. Otan sinisen lippiksen.</p>
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
  <p>À tarde cai a chuva de verão de Belo Horizonte, e os dois ficam em casa. O Jay aproveita para treinar com a Maia o som que ela errou na loja: ela disse <span class="fi pala">huva</span> em vez de <span class="fi">hyvä</span>. O português não tem <span class="fi pala">y</span> nem <span class="fi pala">ö</span>, e o ouvido brasileiro troca os dois por <span class="fi pala">u</span> e <span class="fi pala">o</span> (às vezes por <span class="fi pala">i</span> e <span class="fi pala">e</span>). Mas em finlandês a troca muda a palavra: <span class="fi">kyy</span> é uma cobra, <span class="fi">kuu</span> é a lua.</p>
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

  <div class="tehtava" data-tyyppi="kirjoitus">
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
    <div class="valinta" data-oikea="Sinisen paidan ja shortsit.">
      <p class="kysymys"><span class="fi">Mitä Jay ostaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Sinisen paidan ja punaisen lippiksen.</button><button type="button">Sinisen paidan ja shortsit.</button><button type="button">Punaisen lippiksen ja shortsit.</button></div>
    </div>
    <div class="valinta" data-oikea="Punaista lippistä.">
      <p class="kysymys"><span class="fi">Mitä Jay ei osta?</span></p>
      <div class="vaihtoehdot"><button type="button">Punaista lippistä.</button><button type="button">Sinistä paitaa.</button><button type="button">Shortseja.</button></div>
    </div>
    <div class="valinta" data-oikea="Sata realia.">
      <p class="kysymys"><span class="fi">Paljonko sininen paita maksaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kymmenen realia.</button><button type="button">Kaksisataa realia.</button><button type="button">Sata realia.</button></div>
    </div>
    <div class="valinta" data-oikea="Myyjä.">
      <p class="kysymys"><span class="fi">Kuka ei ymmärrä suomea?</span></p>
      <div class="vaihtoehdot"><button type="button">Maia.</button><button type="button">Myyjä.</button><button type="button">Jay.</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · A Feira Hippie e o objeto',
      html: `
<ul class="tavoitteet">
  <li>Você escolhe a forma do objeto: a coisa inteira (<span class="fi">Otan tämän paidan.</span>), várias coisas inteiras (<span class="fi">Ostan shortsit.</span>) ou o partitivo para uma parte, uma ação em andamento e a negação (<span class="fi">En osta takkia.</span>).</li>
  <li>Você põe o adjetivo no mesmo caso do substantivo: <span class="fi">sinisessä paidassa, isossa kaupassa</span>.</li>
  <li>Você vende na feira e diz o preço em reais: <span class="fi">Se maksaa kaksisataa realia.</span></li>
</ul>

<p data-paikka="belo-horizonte-panoraama">Domingo. Todo domingo, a Avenida Afonso Pena, no centro de Belo Horizonte, vira uma feira enorme: a Feira Hippie. Hoje a Maia tem uma banca lá, com quadros pequenos e cerâmica: xícaras, tigelas, pratos, vasos e os porquinhos cor-de-rosa da série <span class="fi">Onnellinen kuin possu</span>, em quadro e em cerâmica. No avião, o Uuno e o Eenok prometeram vir à feira (revisão 6–10). Antes, a gramática do dia: o objeto.</p>

<section class="osio" data-osa="gramatica" data-paikka="belo-horizonte-panoraama">
  <h2>Gramática 1 · O objeto: a coisa inteira ou só uma parte?</h2>
  <p>O <b>objeto</b> é a coisa que recebe a ação do verbo: “compro <b>a camisa</b>”. Em português ele não muda. Em finlandês ele tem três formas, e a escolha mostra se a ação pega a coisa <b>inteira</b> ou não. Você já viu as três: <span class="fi">Otan sen!</span> (lição 9), <span class="fi">Minä ymmärrän suomea.</span> (lição 5) e <span class="fi">Ota pipo!</span> (lição 9). Agora a regra.</p>
  <table class="taivutus">
    <tr><th>quando</th><th>exemplo</th><th>forma</th></tr>
    <tr><td>uma coisa inteira; a ação termina</td><td><span class="fi">Ostan tämän paidan.</span><span class="kaannos" lang="pt-BR">Compro esta camisa.</span></td><td><span class="fi pala">-n</span>, a mesma forma do genitivo</td></tr>
    <tr><td>várias coisas inteiras, todas aquelas</td><td><span class="fi">Ostan shortsit. Otamme nämä kupit.</span><span class="kaannos" lang="pt-BR">Compro o short. Levamos estas xícaras.</span></td><td><span class="fi pala">-t</span>, o plural da lição 9</td></tr>
    <tr><td>uma parte, uma quantidade, coisas em geral</td><td><span class="fi">Ostan kahvia. Myymme tauluja.</span><span class="kaannos" lang="pt-BR">Compro café. Vendemos quadros.</span></td><td>partitivo (o plural: lição 11)</td></tr>
    <tr><td>a ação está em andamento, não termina</td><td><span class="fi">Sovitan paitaa. Katson taulua.</span><span class="kaannos" lang="pt-BR">Estou experimentando a camisa. Olho o quadro.</span></td><td>partitivo</td></tr>
    <tr><td>negação</td><td><span class="fi">En osta takkia.</span><span class="kaannos" lang="pt-BR">Não compro o casaco.</span></td><td>sempre partitivo</td></tr>
    <tr><td>depois de 2, 3, 4… (com <span class="fi">yksi</span>: <span class="fi">Ostan yhden paidan.</span>)</td><td><span class="fi">Ostan kaksi paitaa.</span><span class="kaannos" lang="pt-BR">Compro duas camisas.</span></td><td>partitivo singular (lição 3)</td></tr>
  </table>
  <h3>Três perguntas para escolher</h3>
  <ol>
    <li><b>A frase é negativa?</b> Então partitivo, sempre: <span class="fi">En osta paitaa.</span></li>
    <li><b>É uma parte, uma quantidade, algo em geral, ou a ação ainda está acontecendo?</b> Partitivo: <span class="fi">Juon kahvia. Myymme tauluja. Sovitan paitaa.</span></li>
    <li><b>Nenhuma das duas?</b> A coisa é inteira e a ação termina: uma coisa, <span class="fi pala">-n</span>; várias, <span class="fi pala">-t</span>: <span class="fi">Ostan paidan. Ostan kengät.</span></li>
  </ol>
  <p>Alguns verbos quase sempre pedem partitivo, porque a ação não “pega” a coisa inteira: <span class="fi">katsoa</span> (olhar), <span class="fi">etsiä</span> (procurar), <span class="fi">rakastaa</span> (amar), <span class="fi">odottaa</span> (esperar), <span class="fi">kuunnella</span> (escutar), <span class="fi">sovittaa</span> (experimentar), e <span class="fi">puhua</span> e <span class="fi">ymmärtää</span> com línguas.</p>
  <ul class="esim">
    <li class="s" data-pt="Estou procurando um boné.">Etsin lippistä.</li>
    <li class="s" data-pt="O Eenok olha os vasos.">Eenok katsoo maljakoita.</li>
    <li class="s" data-pt="Eu amo cerâmica.">Rakastan keramiikkaa.</li>
    <li class="s" data-pt="Na Finlândia, o Jay não usa shorts.">Suomessa Jay ei käytä shortseja.</li>
  </ul>
  <div class="tehtava" data-tyyppi="kirjoitus" data-ei-sivulle>
    <h3>4. Inteiro, várias ou parte? Escolha a forma</h3>
    <p class="ohje">O português entre parênteses diz o sentido. Faça as três perguntas: é negação? É parte ou ação em andamento? Senão, inteiro: <span class="fi pala">-n</span> ou <span class="fi pala">-t</span>.</p>
    <div class="valinta" data-oikea="paidan">
      <p class="kysymys"><span class="fi">Jay ostaa ___.</span> (ele compra a camisa)</p>
      <div class="vaihtoehdot"><button type="button">paitaa</button><button type="button">paidan</button><button type="button">paita</button></div>
    </div>
    <div class="valinta" data-oikea="takkia">
      <p class="kysymys"><span class="fi">Jay ei osta ___.</span> (ele não compra o casaco)</p>
      <div class="vaihtoehdot"><button type="button">takkia</button><button type="button">takin</button><button type="button">takki</button></div>
    </div>
    <div class="valinta" data-oikea="taulua">
      <p class="kysymys"><span class="fi">Maia katsoo ___.</span> (ela olha o quadro)</p>
      <div class="vaihtoehdot"><button type="button">taulun</button><button type="button">taulu</button><button type="button">taulua</button></div>
    </div>
    <div class="valinta" data-oikea="kupit">
      <p class="kysymys"><span class="fi">Uuno ottaa ___.</span> (ele leva as xícaras, todas)</p>
      <div class="vaihtoehdot"><button type="button">kupit</button><button type="button">kuppeja</button><button type="button">kupin</button></div>
    </div>
    <div class="valinta" data-oikea="maljakkoa">
      <p class="kysymys"><span class="fi">Eenok ostaa kaksi ___.</span> (ele compra dois vasos)</p>
      <div class="vaihtoehdot"><button type="button">maljakon</button><button type="button">maljakkoa</button><button type="button">maljakot</button></div>
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
  <h3>Promessas cumpridas</h3>
  <p>As lições anteriores prometeram explicar estas frases aqui. Agora você sabe por quê:</p>
  <table class="taivutus">
    <tr><th>frase</th><th>lição</th><th>por quê</th></tr>
    <tr><td><span class="fi">Tarvitsetteko kassin?</span><span class="kaannos" lang="pt-BR">Precisa de sacola?</span></td><td>3</td><td>uma sacola inteira: <span class="fi pala">-n</span></td></tr>
    <tr><td><span class="fi">Minä tunnen hyvän kahvilan.</span><span class="kaannos" lang="pt-BR">Eu conheço um café bom.</span></td><td>4</td><td>um café inteiro: <span class="fi pala">-n</span>, também no adjetivo</td></tr>
    <tr><td><span class="fi">Minä ymmärrän suomea.</span><span class="kaannos" lang="pt-BR">Eu entendo finlandês.</span></td><td>5</td><td>língua depois de <span class="fi">ymmärtää</span>: partitivo</td></tr>
    <tr><td><span class="fi">Haluaisin kirjastokortin.</span><span class="kaannos" lang="pt-BR">Eu queria um cartão da biblioteca.</span></td><td>6</td><td>o cartão inteiro: <span class="fi pala">-n</span></td></tr>
    <tr><td><span class="fi">Hän katsoo asuntoa.</span><span class="kaannos" lang="pt-BR">Ela vai ver um apartamento.</span></td><td>8</td><td><span class="fi">katsoa</span> pede partitivo</td></tr>
    <tr><td><span class="fi">Minä maalaan possua.</span><span class="kaannos" lang="pt-BR">Estou pintando um porquinho.</span></td><td>8</td><td>em andamento: partitivo</td></tr>
    <tr><td><span class="fi">vaaleanpunaista maalia</span><span class="kaannos" lang="pt-BR">tinta rosa</span></td><td>8</td><td>tinta é quantidade: partitivo, e o adjetivo junto</td></tr>
    <tr><td><span class="fi">Minä otan tämän! Otan sen!</span><span class="kaannos" lang="pt-BR">Eu fico com este! Vou levar!</span></td><td>8, 9</td><td>uma coisa inteira: <span class="fi">tämän, sen</span></td></tr>
  </table>
</section>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Exercício: ouvir o objeto</h2>

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
</section>

<section class="osio" data-osa="gramatica" data-paikka="belo-horizonte-panoraama">
  <h2>Gramática 2 · O adjetivo vai junto: <span class="fi">sinisessä paidassa</span></h2>
  <p>Em português o adjetivo concorda no gênero e no número: camisa azul, camisas azuis. O finlandês não tem gênero, mas tem casos: o adjetivo recebe <b>o mesmo caso e o mesmo número</b> do substantivo. Os pronomes <span class="fi">tämä, tuo, se</span> e os ordinais também, e as cores, <span class="fi">kuten sininen ja punainen</span> (como azul e vermelho).</p>
  <table class="taivutus">
    <tr><th>forma</th><th>exemplo</th><th>português</th></tr>
    <tr><td>forma básica</td><td><span class="fi">sininen paita</span></td><td>a camisa azul</td></tr>
    <tr><td>objeto inteiro</td><td><span class="fi">Ostan sinisen paidan.</span></td><td>compro a camisa azul</td></tr>
    <tr><td>partitivo</td><td><span class="fi">En osta sinistä paitaa.</span></td><td>não compro a camisa azul</td></tr>
    <tr><td>onde? -ssa</td><td><span class="fi">Jay on sinisessä paidassa.</span></td><td>o Jay está de camisa azul</td></tr>
    <tr><td>plural -t</td><td><span class="fi">siniset paidat</span></td><td>as camisas azuis</td></tr>
  </table>
  <p>Com pronome e adjetivo, os três juntos: <span class="fi">tässä isossa kaupassa</span> (nesta loja grande). Com ordinal: <span class="fi">kolmannessa kerroksessa</span> (no terceiro andar), a promessa da lição 6. O adjetivo tem o seu próprio radical, como qualquer palavra (lição 8): <span class="fi">sininen → sinisen</span>, <span class="fi">uusi → uuden</span>, <span class="fi">kaunis → kauniin</span>. Toque na palavra: a bolha mostra as formas.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o adjetivo vem <b>antes</b> do substantivo (<span class="fi">sininen paita</span>, nunca “paita sininen”) e não fica parado na forma básica: <span class="fi">isossa kaupassa</span>, não <span class="pala">iso kaupassa</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Exercício: o adjetivo junto</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Ponha o adjetivo no mesmo caso</h3>
    <p class="ohje">Escreva o adjetivo entre parênteses com a mesma terminação do substantivo. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Jay tulee ulos <span class="aukko" data-oikea="sinisessä"></span> paidassa. <span data-ei-kuplaa>(sininen)</span></p>
      <p>Tuossa <span class="aukko" data-oikea="isossa"></span> kaupassa on halpoja vaatteita. <span data-ei-kuplaa>(iso)</span></p>
      <p>Otan <span class="aukko" data-oikea="punaisen"></span> lippiksen. <span data-ei-kuplaa>(punainen)</span></p>
      <p>En osta <span class="aukko" data-oikea="keltaista"></span> paitaa. <span data-ei-kuplaa>(keltainen)</span></p>
      <p>Eenok ostaa kaksi <span class="aukko" data-oikea="vihreää"></span> maljakkoa. <span data-ei-kuplaa>(vihreä)</span></p>
      <p>Uuno katsoo <span class="aukko" data-oikea="pientä"></span> taulua. <span data-ei-kuplaa>(pieni)</span></p>
      <p>Purjo asuu <span class="aukko" data-oikea="uudessa"></span> asunnossa. <span data-ei-kuplaa>(uusi)</span></p>
      <p>Otamme <span class="aukko" data-oikea="valkoiset"></span> kupit. <span data-ei-kuplaa>(valkoinen)</span></p>
    </div>
  </div>
</section>

<p data-paikka="festa-rua">Meio-dia na feira. A avenida está cheia: barracas de roupa, de bolsas de couro, de brinquedos de madeira, de pão de queijo. A Maia quer um café e deixa o Jay sozinho na banca, de shorts novos, boné azul e um português ainda fraco para vender. Por sorte, quem chega são dois finlandeses conhecidos: de macacão azul-claro, com trinta graus, e muito tranquilos.</p>

<section class="osio" data-paikka="festa-rua">
  <h2>Diálogo B: <span class="fi">Otan sen!</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure um objeto inteiro (<span class="fi pala">-n</span>), uma negação com partitivo, um número com partitivo e um preço em reais. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t12-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="Domingo, Feira Hippie. Na banca da Maia há quadros pequenos e cerâmica.">Sunnuntai, <span lang="pt-BR">Feira Hippie</span>. Maian pöydällä on pieniä tauluja ja keramiikkaa.</p>
    <p class="s" data-h="maia" data-pt="Jay, eu vou ao café. Agora o vendedor é você!">Jay, minä menen kahvilaan. Ole sinä nyt myyjä!</p>
    <p class="s" data-h="kertoja" data-pt="Chegam à banca o Uuno e o Eenok, os turistas finlandeses do avião. Eles estão de macacão, mesmo com calor.">Pöydälle tulevat Uuno ja Eenok, suomalaiset turistit lentokoneesta. Heillä on haalarit, vaikka on kuuma.</p>
    <p class="s" data-h="uuno" data-pt="Oi, Jay! Aqui estamos. Cadê a Maia?">Hei, Jay! Tässä me olemme. Missä Maia on?</p>
    <p class="s" data-h="jay" data-pt="No café. Agora quem vende sou eu!">Kahvilassa. Nyt minä olen myyjä!</p>
    <p class="s" data-h="eenok" data-pt="Vocês vendem café?">Myyttekö te kahvia?</p>
    <p class="s" data-h="jay" data-pt="Café a gente não vende. Vendemos quadros e cerâmica.">Emme myy kahvia. Myymme tauluja ja keramiikkaa.</p>
    <p class="s" data-h="uuno" data-pt="Aquele quadro pequeno é lindo. Um porquinho! Porquinho bom! Quanto custa?">Tuo pieni taulu on kaunis. Possu! Hyvä possu! Paljonko se maksaa?</p>
    <p class="s" data-h="jay" data-pt="Duzentos reais.">Kaksisataa realia.</p>
    <p class="s" data-h="uuno" data-pt="Cem reais bastam?">Riittääkö sata realia?</p>
    <p class="s" data-h="jay" data-pt="Não bastam. O quadro é da Maia, e a Maia não está aqui.">Ei riitä. Taulu on Maian, ja Maia ei ole täällä.</p>
    <p class="s" data-h="uuno" data-pt="Está bem. Vou levar! E esta xícara azul.">Hyvä on. Otan sen! Ja tämän sinisen kupin.</p>
    <p class="s" data-h="eenok" data-pt="Eu não compro quadro. Eu estou olhando os vasos.">Minä en osta taulua. Minä katson maljakoita.</p>
    <p class="s" data-h="jay" data-pt="Você quer o vaso verde? Custa sessenta reais.">Haluatko vihreän maljakon? Se maksaa kuusikymmentä realia.</p>
    <p class="s" data-h="eenok" data-pt="Vou levar dois vasos verdes!">Otan kaksi vihreää maljakkoa!</p>
    <p class="s" data-h="jay" data-pt="Obrigado! Precisa de sacola?">Kiitos! Tarvitsetteko pussin?</p>
    <p class="s" data-h="eenok" data-pt="Preciso, obrigado. E vocês têm mais alguma coisa?">Kyllä, kiitos. Onko teillä vielä jotain muuta?</p>
    <p class="s" data-h="jay" data-pt="Temos. Porquinhos! A Maia mesma faz.">On. Possuja! Maia tekee niitä itse.</p>
    <p class="s" data-h="uuno" data-pt="Porquinhos! Levamos todos os porquinhos!">Possuja! Otamme kaikki possut!</p>
    <p class="s" data-h="kertoja" data-pt="O Uuno e o Eenok dão ao Jay umas moedas estranhas, e o dinheiro dá certinho.">Uuno ja Eenok antavat Jaylle outoja kolikoita, ja raha riittää juuri.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia volta do café. O Jay é um bom vendedor!">Maia tulee takaisin kahvilasta. Jay on hyvä myyjä!</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. Quase todas usam a gramática desta parte:</p>
    <ul>
      <li><span class="fi">Maian pöydällä</span> = na banca da Maia · <span class="fi">pöytä</span> = mesa; na feira, a banca (o caso <span class="fi pala">-lla</span>, lição 7)</li>
      <li><span class="fi">Ole sinä nyt myyjä!</span> = agora o vendedor é você! · a ordem com <span class="fi">sinä</span> dá ênfase</li>
      <li><span class="fi">Tässä me olemme.</span> = aqui estamos</li>
      <li><span class="fi">Emme myy kahvia.</span> = não vendemos café · negação: partitivo</li>
      <li><span class="fi">Otan sen! Ja tämän sinisen kupin.</span> = vou levar! E esta xícara azul · o objeto inteiro, no pronome e no adjetivo</li>
      <li><span class="fi">Otamme kaikki possut!</span> = levamos todos os porquinhos! · várias coisas inteiras, todas: plural <span class="fi pala">-t</span></li>
      <li><span class="fi">Minä katson maljakoita.</span> = estou olhando os vasos · <span class="fi">katsoa</span> com partitivo (plural da lição 11)</li>
      <li><span class="fi">kaksisataa realia</span> = duzentos reais · depois de número, partitivo, como <span class="fi">euroa</span> (lição 3) · <span class="fi">Riittääkö?</span> = basta?</li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="festa-rua">
  <h2>Exercícios: na feira</h2>
  <div class="peli-upotus" data-peli="feira-hippie"></div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Você entendeu o diálogo B?</h3>
    <div class="valinta" data-oikea="Pienen taulun ja sinisen kupin.">
      <p class="kysymys"><span class="fi">Mitä Uuno ostaa ensin?</span></p>
      <div class="vaihtoehdot"><button type="button">Pienen taulun ja vihreän maljakon.</button><button type="button">Pienen taulun ja sinisen kupin.</button><button type="button">Kaksi vihreää maljakkoa.</button></div>
    </div>
    <div class="valinta" data-oikea="Kaksi vihreää maljakkoa.">
      <p class="kysymys"><span class="fi">Mitä Eenok ostaa ensin?</span></p>
      <div class="vaihtoehdot"><button type="button">Kaksi vihreää maljakkoa.</button><button type="button">Pienen taulun.</button><button type="button">Kaksi sinistä kuppia.</button></div>
    </div>
    <div class="valinta" data-oikea="Kaksisataa realia.">
      <p class="kysymys"><span class="fi">Paljonko pieni taulu maksaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kaksikymmentä realia.</button><button type="button">Kuusikymmentä realia.</button><button type="button">Kaksisataa realia.</button></div>
    </div>
    <div class="valinta" data-oikea="Ei myy.">
      <p class="kysymys"><span class="fi">Myykö Maia kahvia?</span></p>
      <div class="vaihtoehdot"><button type="button">Myy.</button><button type="button">Ei myy.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>8. Ouça o preço em reais</h3>
    <p class="ohje">Na feira, os preços são em reais: <span class="fi">sata realia</span> = R$ 100. Aperte ▶ e escolha o número. <span class="fi pala">-kymmentä</span> = dezenas, <span class="fi pala">-sataa</span> = centenas, <span class="fi pala">-toista</span> = de 11 a 19.</p>
    <div class="valinta" data-kuuntele="Kaksisataa realia." data-oikea="R$ 200">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">R$ 20</button><button type="button">R$ 200</button><button type="button">R$ 300</button></div>
    </div>
    <div class="valinta" data-kuuntele="Kuusikymmentä realia." data-oikea="R$ 60">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">R$ 60</button><button type="button">R$ 16</button><button type="button">R$ 600</button></div>
    </div>
    <div class="valinta" data-kuuntele="Kolmekymmentä realia." data-oikea="R$ 30">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">R$ 13</button><button type="button">R$ 300</button><button type="button">R$ 30</button></div>
    </div>
    <div class="valinta" data-kuuntele="Sata realia." data-oikea="R$ 100">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">R$ 100</button><button type="button">R$ 10</button><button type="button">R$ 1000</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>9. Traduza para o finlandês</h3>
    <p class="ohje">Escreva em finlandês e pense no objeto: inteiro, várias inteiras ou parte? Depois compare com o modelo.</p>
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
    <div class="kaanna"><p class="pt">Eu quero uma camisa desse tipo.</p><p class="s" data-pt="Eu quero uma camisa desse tipo.">Haluan sellaisen paidan.</p></div>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>A Feira Hippie: domingo na Avenida Afonso Pena</h3>
  <figure class="kuva" data-kuva="belo-horizonte-panoraama"></figure>
  <p>A feira nasceu em 1969, na Praça da Liberdade, com um grupo pequeno de artesãos e artistas jovens. Daí o apelido “hippie”, que ficou até hoje. Em 1991 ela mudou para a Avenida Afonso Pena, no centro, e cresceu muito: hoje são uns dois mil expositores todo domingo, da manhã até o começo da tarde. Vende-se de tudo: roupa, sapato, bolsa de couro, cerâmica, quadros, brinquedos de madeira e, claro, comida mineira.</p>
  <p>Na Finlândia, a feira mais conhecida é a da praça (<span class="fi">tori</span>), como a Kauppatori de Helsinque: começa cedo, no verão vende morango e ervilha fresca, e no inverno fica quase vazia. Lá quase ninguém pechincha.</p>
  <p>Duas frases úteis nas duas feiras: <span class="fi">Katselen vain, kiitos.</span> = só estou olhando, obrigado. E para roupa: <span class="fi">Mikä <span data-l="koko:mitta">koko</span>?</span> = qual tamanho?</p>
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
  <p>No começo da tarde, a feira está acabando e a banca está quase vazia. A Maia compra pão de queijo para os dois, e o Jay conta o dinheiro em finlandês.</p>
  <div class="kotitehtava" data-id="t12">
    <h3>Lição de casa</h3>
    <p>Imagine que você está numa loja ou numa feira. Escreva seis frases: duas coisas que você compra (uma com <span class="fi pala">-n</span>, uma com <span class="fi pala">-t</span>), uma que você não compra (partitivo), uma com número, uma com <span class="fi">katsoa</span> ou <span class="fi">etsiä</span> e uma com adjetivo + substantivo em <span class="fi pala">-ssa</span> (a roupa que você veste). Leia em voz alta e cuide do <span class="fi pala">y</span> e do <span class="fi pala">ö</span>.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Eu compro a xícara azul.">Ostan sinisen kupin.</p>
      <p class="s" data-pt="Eu compro um short novo.">Ostan uudet shortsit.</p>
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
    <li>Sei os nomes das roupas e entendo preços em reais: kaksisataa realia.</li>
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
<p><b>Três formas para o objeto.</b> A coisa inteira: <span class="fi pala">-n</span> no singular (<span class="fi">Ostan tämän paidan.</span>) e <span class="fi pala">-t</span> no plural (<span class="fi">Ostan shortsit.</span>). Uma parte, uma quantidade, uma ação em andamento ou uma negação: partitivo (<span class="fi">Ostan kahvia. Sovitan paitaa. En osta takkia.</span>).</p>
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
  <li class="s" data-pt="Procuro um boné.">Etsin lippistä.</li>
  <li class="s" data-pt="Amo cerâmica.">Rakastan keramiikkaa.</li>
  <li class="s" data-pt="Espero o ônibus.">Odotan bussia.</li>
  <li class="s" data-pt="Escuto música.">Kuuntelen musiikkia.</li>
  <li class="s" data-pt="Estou experimentando a camisa.">Sovitan paitaa.</li>
  <li class="s" data-pt="Entendo finlandês.">Ymmärrän suomea.</li>
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
<p>Para treinar a boca: <span class="fi">hyvä, myydä, pöytä, löytää, tyyny</span>.</p>`
    },
    {
      id: 'konjunktiot12', otsikko: 'Mas, por isso, mesmo que: mutta, siksi, vaikka', taso: 'essencial', hakuosa: 'h-konjunktiot', treeni: 't12-konjunktiot',
      html: `
<p>Nesta lição chegam três conjunções novas. A ordem das palavras não muda depois delas, e a vírgula vem antes:</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Se on paras paita, siksi otan sen.</span></td><td>por isso · o verbo vem logo depois de siksi</td></tr>
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
  <li><b>Negação = partitivo, sempre:</b> <span class="fi">En osta paitaa.</span>, nunca com <span class="fi pala">-n</span>.</li>
  <li><b>Depois de 2, 3, 4…, partitivo singular:</b> <span class="fi">kaksi paitaa</span>, não <span class="fi pala">kaksi paidat</span>.</li>
  <li><b>O adjetivo também muda:</b> <span class="fi">isossa kaupassa</span>, <span class="fi">sinisen paidan</span>.</li>
  <li><b>Roupas no plural:</b> <span class="fi">housut, shortsit</span> são uma peça só.</li>
  <li><b>y não é u:</b> <span class="fi">hyvä</span>, não “huva”; <span class="fi">myy</span> (vende) × <span class="fi">muu</span> (outro).</li>
</ul>`
    }
  ]
});
