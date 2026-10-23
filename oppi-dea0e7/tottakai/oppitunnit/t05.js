/* Tottakai, lição 5: Jayn perhe – Purjo ja Hiisi (Passon jakso 5 Maian näkökulmasta). Oma materiaali, ei kirjan tekstiä.
   Kaksi osaa omina sivuinaan (TYONKULKU 11–15, auditointi 5 C3; käyttäjä 17.10.2026 ”A B separate, cut dialogue”):
   - osa A (#t05): dialogi A (13 repliikkiä), Frases prontas, sanasto, ääntäminen ä ≠ e, tehtävät 1–3.
   - osa B (#t05-b): dialogi B (13 repliikkiä), Frases prontas, kielioppi (minulla on, genetiivi, ikä olla-verbillä),
     Sukupuu-peli (`.peli-upotus` data-peli="sukupuu", assets/pelit.js), tehtävät 4–9, kulttuuri, Na rua, kotitehtävä, itsearvio.
   Kaikki puhuvat kirjakieltä; puhekieli (mun, sun, mulla) vain Na rua -nurkassa (enintään noin 10 %).
   Maian virheet koukkuina: ikä ”Hänellä on 45 vuotta” (← tem 45 anos) ja ääntäminen ä → e (”eiti”, ”ise”, .pala).
   Purjon rallienglanti toistuvana vitsinä (<span class="pala" lang="en">: ei kuplaa). Hiiden autovitsi on nyt täällä
   (oppitunti 1 luopui siitä): yksi repliikki ”Minulla on auto ja kolme sakkoa”.
   Omistusliitteitä (nimeni, äitini) ei opeteta eikä mainita oppituntina (käyttäjä: tulevat myöhemmin opetussuunnitelmassa;
   A5-M4b). Genetiivin -in rajattu vieraisiin nimiin (Andersonin, Walkerin; A5-M4e). */
Kurssi.lisaa({
  id: 't05',
  lyhyt: '5',
  jakso: 'Lição 5',
  otsikko: 'A família: minulla on (quem tem?) e o genitivo',
  lahde: 'Família e fotos · Gramática: minulla on (quem tem?), genitivo (Jayn äiti), a idade com olla · Pronúncia: ä não é e',
  aiheet: ['ihmiset', 'koti', 'tunteet'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga, conhece a família do Jay de perto' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo, filho da Purjo' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay e do Hiisi, mostra as fotos da família' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; dirige rápido demais' }
  },

  sanasto: [
    'äiti', 'isä', 'veli', 'sisko', 'poika', 'tytär', 'lapsi', 'perhe', 'mummo', 'vaari', 'mies', 'vaimo',
    'tyttöystävä', 'poikaystävä', 'minä', 'sinä', 'hän', 'kuka', 'olla', 'vuosi', 'vanha', 'uusi', 'auto', 'sakko',
    'kuva', 'lääkäri', 'kuolla', 'olen pahoillani', 'tai', 'isänpäivä', 'äitienpäivä'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Café e fotos da família',
      html: `
<ul class="tavoitteet">
  <li>Parte A: as palavras da família (<span class="fi">äiti, isä, veli, sisko, poika, tytär</span>) e o <span class="fi pala">ä</span> aberto: <span class="fi">veli</span> × <span class="fi">väli</span>.</li>
  <li>Parte B: quem tem (<span class="fi">Onko sinulla sisko?</span>), de quem é (<span class="fi">Jayn äiti</span>) e a idade com <span class="fi">olla</span>.</li>
</ul>
<p data-paikka="hameentie-marraskuu">Segundo domingo de novembro: na Finlândia é <span class="fi">isänpäivä</span>, o Dia dos Pais. A Purjo convidou a Maia e o Jay para um café. O pai do Jay, o Pertti, morreu há alguns anos, e neste dia a Purjo gosta de olhar as fotos antigas. Ela fala rápido, e a Maia ainda entende pouco.</p>

<section class="osio">
  <h2>Diálogo A: Kahvia ja kuvia</h2>
  <p class="ohje">Ouça primeiro sem tradução. Preste atenção em <span class="fi">minulla on</span> (eu tenho), <span class="fi">Ei ole</span> (não tenho) e <span class="fi">Jayn isä</span> (o pai do Jay). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t05-dialogi-a" data-nimi="Ouvir o diálogo A">
    <figure class="tarinakuva" data-tarinakuva="t05-1" data-alt="Desenho: no Dia dos Pais, na sala da Purjo, com fotos de família na parede e o entardecer de novembro na janela, a Purjo chega com o bule de café, e a Maia e o Jay sorriem à mesa com xícaras, pães doces e uma bandeirinha da Finlândia."></figure>
    <p class="s" data-h="kertoja" data-pt="Domingo, Dia dos Pais. A Maia e o Jay estão na casa da Purjo.">Sunnuntai, isänpäivä. Maia ja Jay <span data-l="olla#2">ovat</span> Purjon kotona.</p>
    <p class="s" data-h="purjo" data-pt="Bem-vindos! Café e pulla?">Tervetuloa! Kahvia ja pullaa?</p>
    <p class="s" data-h="maia" data-pt="Sim, obrigada!">Kyllä, kiitos!</p>
    <p class="s" data-h="purjo" data-pt="(muito rápido) Ótimo! Aqui está o café, a pulla está boa, e eu tenho muitas fotos, olha só…">Hyvä! Tässä on kahvia, ja pulla on hyvää, ja minulla on paljon kuvia, katso nyt…</p>
    <p class="s" data-h="maia" data-pt="Desculpa, Purjo. Não entendo. Fale devagar, por favor.">Anteeksi, Purjo. En ymmärrä. Puhu hitaasti, kiitos.</p>
    <p class="s" data-h="purjo" data-pt="Ah! (em “inglês de rali”:) Desculpa! Meu inglês não é tão bom.">Voi! <span class="pala" lang="en">Ai em sorry! Mai inklis is not so kuut.</span></p>
    <p class="s" data-h="jay" data-pt="Mãe, a Maia fala finlandês. É só falar devagar.">Äiti, Maia puhuu suomea. Puhu vain hitaasti.</p>
    <figure class="tarinakuva" data-tarinakuva="t05-2" data-alt="Desenho: à mesa, ao lado de uma vela acesa, a Purjo mostra à Maia o retrato do Pertti, o pai do Jay, de jaleco branco e estetoscópio, e o Jay olha por trás."></figure>
    <p class="s" data-h="purjo" data-pt="Está bem. Olha, Maia: este é o Pertti, o pai do Jay. Ele era médico.">Hyvä on. Katso, Maia: tämä on Pertti, Jayn isä. Hän oli lääkäri.</p>
    <p class="s" data-h="jay" data-pt="O pai morreu. Hoje é Dia dos Pais, e a mãe olha as fotos.">Isä kuoli. Tänään on isänpäivä, ja äiti katsoo kuvia.</p>
    <p class="s" data-h="maia" data-pt="Sinto muito.">Olen pahoillani.</p>
    <p class="s" data-h="purjo" data-puhu="Kiitos, kulta. Minulla on kaksi poikaa. Jay, ja Hiisi." data-pt="Obrigada, querida. Eu tenho dois filhos: o Jay e o Hiisi.">Kiitos, kulta. Minulla on kaksi poikaa: Jay ja Hiisi.</p>
    <p class="s" data-h="maia" data-pt="Você também tem filha?">Onko sinulla myös tytär?</p>
    <p class="s" data-h="purjo" data-pt="Não. Mas agora eu tenho a Maia!">Ei ole. Mutta nyt minulla on Maia!</p>
    <p class="s" data-h="kertoja" data-pt="A Maia sorri. O Jay também.">Maia hymyilee. Jay myös.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde estas como blocos prontos. A gramática delas vem mais tarde no curso:</p>
    <ul>
      <li><span class="fi">Purjon kotona</span> = na casa da Purjo · <span class="fi">kotona</span> (em casa): lição 6</li>
      <li><span class="fi">Puhu hitaasti!</span> = fale devagar! · <span class="fi">Katso!</span> = olha! · a ordem (imperativo): lição 9</li>
      <li><span class="fi">Hän oli lääkäri.</span> = ele era médico · <span class="fi">Isä kuoli.</span> = o pai morreu · o passado: lição 13</li>
      <li><span class="fi">äiti katsoo kuvia</span> = a mãe olha as fotos · <span class="fi">kuvia</span>, partitivo plural: lição 11</li>
      <li><span class="fi">Olen pahoillani.</span> = sinto muito · expressão fixa, para pêsames e desculpas sérias</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="toolonlahti-syksy">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="A família" data-sanat="perhe,äiti,isä,veli,sisko,poika,tytär,lapsi,mummo,vaari"></div>
</section>

<section class="osio" data-paikka="helsinki-syksy">
  <h2>Pronúncia: ä não é e</h2>
  <p>A família está cheia de <span class="fi pala">ä</span>: <span class="fi">äiti, isä, hän, tytär</span>. O <span class="fi pala">ä</span> é <b>bem aberto</b>, mais que o “é” de “café”; o <span class="fi pala">e</span> finlandês é mais fechado, perto do “ê” de “você”. O ouvido brasileiro junta os dois num “é”, e a boca diz <span class="fi pala">e</span>: na parte B a Maia vai dizer <span class="fi pala">eiti</span> e <span class="fi pala">ise</span>. Ouça os pares e repita; só muda <span class="fi pala">ä</span> × <span class="fi pala">e</span>:</p>
  <ul class="esim">
    <li class="s" data-pt="irmão">veli</li>
    <li class="s" data-pt="espaço, intervalo">väli</li>
    <li class="s" data-pt="jornal, folha">lehti</li>
    <li class="s" data-pt="partiu, foi embora">lähti</li>
    <li class="s" data-pt="ele, ela">hän</li>
    <li class="s" data-pt="eles, elas">he</li>
  </ul>
  <div class="saanto">
    <h3>Truque: sorria com a boca aberta</h3>
    <p>Diga o “é” de “pé” e vá abrindo o queixo até quase “a”: esse é o <span class="fi pala">ä</span>. Treine com <span class="fi pala">ä-ä-äiti</span>, <span class="fi pala">i-sä</span>, <span class="fi pala">tyt-tär</span>. O acento continua na primeira sílaba: <span class="fi pala">ÄI-ti</span>, <span class="fi pala">I-sä</span>. E em <span class="fi">minulla</span> o <span class="fi pala">ll</span> é longo: <span class="fi pala">mi-nul-la</span>, nunca “minuua”.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinki-syksy">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ligue a palavra à tradução</h3>
    <ul class="yhdista">
      <li data-sanakuva="aiti" data-pari="mãe">äiti</li>
      <li data-sanakuva="isa" data-pari="pai">isä</li>
      <li data-sanakuva="veli" data-pari="irmão">veli</li>
      <li data-sanakuva="sisko" data-pari="irmã">sisko</li>
      <li data-sanakuva="poika" data-pari="filho">poika</li>
      <li data-sanakuva="tytar" data-pari="filha">tytär</li>
      <li data-sanakuva="mummo" data-pari="avó">mummo</li>
      <li data-sanakuva="vaari" data-pari="avô">vaari</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>2. Ouça: ä ou e?</h3>
    <p class="ohje">Aperte ▶ e escolha a palavra que você ouviu. Só muda o <span class="fi pala">ä</span> × <span class="fi pala">e</span>.</p>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="veli" data-oikea="veli">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">veli</button><button type="button">väli</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="lähti" data-oikea="lähti">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">lehti</button><button type="button">lähti</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="hän" data-oikea="hän">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">he</button><button type="button">hän</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="väli" data-oikea="väli">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">väli</button><button type="button">veli</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Você entendeu o diálogo A?</h3>
    <div class="valinta" data-sanakuva="isa" data-oikea="Pertti">
      <p class="kysymys"><span class="fi">Kuka on Jayn isä?</span></p>
      <div class="vaihtoehdot"><button type="button">Walker</button><button type="button">Hiisi</button><button type="button">Pertti</button></div>
    </div>
    <div class="valinta" data-sanakuva="laakari" data-oikea="Pertti">
      <p class="kysymys"><span class="fi">Kuka oli lääkäri?</span></p>
      <div class="vaihtoehdot"><button type="button">Pertti</button><button type="button">Purjo</button><button type="button">Jay</button></div>
    </div>
    <div class="valinta" data-sanakuva="aiti" data-oikea="Kaksi.">
      <p class="kysymys"><span class="fi">Kuinka monta poikaa Purjolla on?</span></p>
      <div class="vaihtoehdot"><button type="button">Yksi.</button><button type="button">Kaksi.</button><button type="button">Kolme.</button></div>
    </div>
    <div class="valinta" data-sanakuva="tytar" data-oikea="Ei ole.">
      <p class="kysymys"><span class="fi">Onko Purjolla tytär?</span></p>
      <div class="vaihtoehdot"><button type="button">On.</button><button type="button">Ei ole.</button><button type="button">En ole.</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Quem tem? De quem?',
      html: `
<ul class="tavoitteet">
  <li>Você diz quem tem: <span class="fi">Minulla on auto.</span> <span class="fi">Onko sinulla sisko?</span></li>
  <li>Você diz de quem é: <span class="fi">Jayn äiti</span>, <span class="fi">Andersonin sisko</span>.</li>
  <li>Você fala a idade com <span class="fi">olla</span>: <span class="fi">Hän on neljäkymmentäviisi vuotta vanha.</span></li>
</ul>

<p data-paikka="kallio-hameentie-ilta">Mais tarde chega o Hiisi, de carro novo e rápido demais, como sempre. Ele faz perguntas para a Maia, e ela comete <b>dois</b> erros bem brasileiros: um de gramática e um de pronúncia. Você percebe quais?</p>

<section class="osio">
  <h2>Diálogo B: Hiisi tulee</h2>
  <p class="ohje">Ouça primeiro sem tradução. Depois ouça de novo com a <b>Tradução</b> ligada e procure os dois erros da Maia.</p>
  <div class="kpl" id="t05-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="maia" data-pt="Hiisi, você tem um carro novo?">Hiisi, onko sinulla uusi auto?</p>
    <p class="s" data-h="hiisi" data-pt="Tenho. Eu tenho um carro e três multas.">On. Minulla on auto ja kolme sakkoa.</p>
    <p class="s" data-h="purjo" data-pt="Hiisi!">Hiisi!</p>
    <p class="s" data-h="hiisi" data-pt="E você, Brasuca? Você tem irmão ou irmã?">Entä sinä, Brassi? Onko sinulla veli tai sisko?</p>
    <p class="s" data-h="maia" data-hairio="eiti, ise → äiti, isä" data-pt="Tenho um irmão, o Anderson. E a “eiti” é a Marta, e o “ise” é o Walker. (errado: äiti, isä)">Minulla on veli, Anderson. <span class="pala">Eiti</span> on Marta, ja <span class="pala">ise</span> on Walker.</p>
    <p class="s" data-h="hiisi" data-pt="Eiti? Ise? Quem é Ise?"><span class="pala">Eiti</span>? <span class="pala">Ise</span>? Kuka on <span class="pala">Ise</span>?</p>
    <p class="s" data-h="jay" data-pt="Äiti e isä, Maia. Ä, não e. A Marta é a mãe da Maia, e o Walker é o pai da Maia.">Äiti ja isä, Maia. <span class="pala">Ä</span>, ei <span class="pala">e</span>. Marta on Maian äiti, ja Walker on Maian isä.</p>
    <p class="s" data-h="purjo" data-pt="Quantos anos o Anderson tem?">Kuinka vanha Anderson on?</p>
    <p class="s" data-h="maia" data-hairio="Hänellä on … vuotta → Hän on … vuotta vanha" data-pt="“Ele tem quarenta e cinco anos.” (errado: a idade vai com olla)">Hänellä on neljäkymmentäviisi vuotta.</p>
    <p class="s" data-h="jay" data-pt="Não, Maia: ele “é” quarenta e cinco anos “velho”.">Ei, Maia: hän on neljäkymmentäviisi vuotta vanha.</p>
    <p class="s" data-h="maia" data-pt="Ele tem quarenta e cinco anos. Obrigada, Jay!">Hän on neljäkymmentäviisi vuotta vanha. Kiitos, Jay!</p>
    <p class="s" data-h="purjo" data-pt="(em “inglês de rali”:) O que você quer? Mais café?"><span class="pala" lang="en">Vat juu vant? Mor kahvi?</span></p>
    <p class="s" data-h="maia" data-pt="Purjo, eu entendo finlandês! Sim, obrigada.">Purjo, minä ymmärrän suomea! Kyllä, kiitos.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Kuinka vanha Anderson on? – Hän on neljäkymmentäviisi vuotta vanha.</span> = quantos anos o Anderson tem? – Ele tem 45 anos. · a idade: veja a Gramática abaixo</li>
      <li><span class="fi">Minä ymmärrän suomea.</span> = eu entendo finlandês · <span class="fi">suomea</span>, o objeto no partitivo: lição 12</li>
      <li><span class="fi">Hän lähettää kuvia.</span> = ela manda fotos (nas mensagens do exercício 7) · <span class="fi">kuvia</span>, partitivo plural: lição 11</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="helsingin-kaupunginosat">
  <h2>Gramática</h2>

  <h3>1. Quem tem? minulla on</h3>
  <p>O finlandês <b>não tem verbo “ter”</b>. Quem tem recebe <span class="fi pala">-lla</span> ou <span class="fi pala">-llä</span> (o caso <b>adessivo</b>, “junto de”) e vem <span class="fi">on</span>, que nunca muda: “junto de mim está um irmão”.</p>
  <table class="taivutus">
    <tr><th>finlandês</th><th>português</th><th>finlandês</th><th>português</th></tr>
    <tr><td><span class="fi">minulla on</span></td><td>eu tenho</td><td><span class="fi">meillä on</span></td><td>nós temos</td></tr>
    <tr><td><span class="fi">sinulla on</span></td><td>você tem</td><td><span class="fi">teillä on</span></td><td>vocês têm</td></tr>
    <tr><td><span class="fi">hänellä on</span></td><td>ele, ela tem</td><td><span class="fi">heillä on</span></td><td>eles, elas têm</td></tr>
  </table>
  <p>Com nomes é igual: <span class="fi">Purjolla on</span>, <span class="fi">Hiidellä on</span>, <span class="fi">äidillä on</span> (<span class="fi pala">-lla/-llä</span>: a harmonia vocálica de <span class="fi pala">-ko/-kö</span>).</p>
  <div class="huomio">
    <p><span class="fi">Onko sinulla…? – On. / Ei ole.</span> No negativo, partitivo: <span class="fi">Minulla ei ole siskoa.</span> <b>Armadilha: a idade</b> não é “ter” (<span class="pala">Minulla on 45 vuotta</span>), vai com <span class="fi">olla</span>: <span class="fi">Hän on neljäkymmentäviisi vuotta vanha</span>. Pergunta: <span class="fi">Kuinka vanha sinä olet?</span></p>
  </div>

  <h3>2. De quem? O genitivo -n</h3>
  <p>Quem possui ganha <span class="fi pala">-n</span> (o caso <b>genitivo</b>) e vem <b>antes</b> da coisa, ao contrário do português: <span class="fi">Jayn äiti</span> = “do Jay mãe” = a mãe do Jay. Sem artigo, sem “de”.</p>
  <table class="taivutus">
    <tr><th>quem?</th><th>de quem?</th><th>exemplo</th><th>português</th></tr>
    <tr><td><span class="fi">Jay</span></td><td><span class="fi">Jayn</span></td><td><span class="fi">Jayn äiti</span></td><td>a mãe do Jay</td></tr>
    <tr><td><span class="fi">Maia</span></td><td><span class="fi">Maian</span></td><td><span class="fi">Maian isä</span></td><td>o pai da Maia</td></tr>
    <tr><td><span class="fi">Anderson</span></td><td><span class="fi">Andersonin</span></td><td><span class="fi">Andersonin sisko</span></td><td>a irmã do Anderson</td></tr>
    <tr><td><span class="fi">äiti</span></td><td><span class="fi">äidin</span></td><td><span class="fi">äidin kuva</span></td><td>a foto da mãe</td></tr>
  </table>
  <p>Nomes em vogal: <span class="fi pala">-n</span> (<span class="fi">Maian, Jayn</span>); <b>nomes estrangeiros</b> em consoante: <span class="fi pala">-in</span> (<span class="fi">Andersonin</span>). Palavras finlandesas mudam por dentro (<span class="fi">äiti → äidin</span>, <span class="fi">Hiisi → Hiiden</span>): a bolha mostra o genitivo.</p>
  <div class="muista">
    <p><b>Lembre:</b> <span class="fi">Kenen auto tämä on? – Hiiden.</span> (de quem?) Pronomes: <span class="fi">Minun.</span> (meu), <span class="fi">Sinun.</span> (seu), <span class="fi">Hänen.</span> (dele, dela).</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinki-lumi">
  <h2>Exercícios da parte B</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Quem tem? Complete</h3>
    <p class="ohje">Escreva a pessoa com <span class="fi pala">-lla/-llä</span>. Quem é está entre parênteses.</p>
    <div class="aukot" lang="fi-FI">
      <p><span class="aukko" data-oikea="Minulla"></span> on veli. <span data-ei-kuplaa>(minä)</span></p>
      <p>Onko <span class="aukko" data-oikea="sinulla"></span> sisko? <span data-ei-kuplaa>(sinä)</span></p>
      <p><span class="aukko" data-oikea="Purjolla"></span> on kaksi poikaa. <span data-ei-kuplaa>(Purjo)</span></p>
      <p><span class="aukko" data-oikea="Hiidellä"></span> on kolme sakkoa. <span data-ei-kuplaa>(Hiisi)</span></p>
      <p><span class="aukko" data-oikea="Maialla"></span> on veli. <span data-ei-kuplaa>(Maia)</span></p>
      <p><span class="aukko" data-oikea="Meillä"></span> on hyvä opettaja. <span data-ei-kuplaa>(me)</span></p>
      <p>Onko <span class="aukko" data-oikea="teillä"></span> kissa? <span data-ei-kuplaa>(te)</span></p>
      <p><span class="aukko" data-oikea="Hänellä"></span> on uusi puhelin. <span data-ei-kuplaa>(hän)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Ouça: de quem ou quem tem?</h3>
    <p class="ohje">Ouça a palavra. Termina em <span class="fi pala">-n</span> (de quem?) ou em <span class="fi pala">-lla/-llä</span> (quem tem)?</p>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="Jayllä" data-oikea="Jayllä">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">Jayn</button><button type="button">Jayllä</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="äidin" data-oikea="äidin">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">äidin</button><button type="button">äidillä</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="Hiidellä" data-oikea="Hiidellä">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">Hiiden</button><button type="button">Hiidellä</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="Maian" data-oikea="Maian">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">Maialla</button><button type="button">Maian</button></div>
    </div>
  </div>

  <div class="peli-upotus" data-peli="sukupuu"></div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Árvore genealógica: de quem?</h3>
    <p class="ohje">Leia a árvore (<span class="fi">sukupuu</span>): quem “possui” vem primeiro, no genitivo. Toque nas palavras para ver as formas. Depois escolha a forma certa.</p>
    <table class="taivutus">
      <tr><th></th><th>Jayn perhe<span class="kaannos" lang="pt-BR">a família do Jay</span></th></tr>
      <tr class="taulu-ryhma"><th colspan="2">Os pais</th></tr>
      <tr><td><span class="ryhma" data-hahmot="pertti"></span></td><td><span class="fi">Pertti (†), Jayn isä</span><span class="kaannos" lang="pt-BR">Pertti, o pai do Jay (faleceu)</span></td></tr>
      <tr><td><span class="ryhma" data-hahmot="purjo"></span></td><td><span class="fi">Purjo, Jayn äiti</span><span class="kaannos" lang="pt-BR">Purjo, a mãe do Jay</span></td></tr>
      <tr class="taulu-ryhma"><th colspan="2">Os filhos</th></tr>
      <tr><td><span class="ryhma" data-hahmot="jay"></span></td><td><span class="fi">Jay, Purjon poika</span><span class="kaannos" lang="pt-BR">Jay, o filho da Purjo</span></td></tr>
      <tr><td><span class="ryhma" data-hahmot="hiisi"></span></td><td><span class="fi">Hiisi, Purjon poika ja Jayn veli</span><span class="kaannos" lang="pt-BR">Hiisi, o filho da Purjo e irmão do Jay</span></td></tr>
      <tr><td><span class="ryhma" data-hahmot="maia"></span></td><td><span class="fi">Maia, Jayn tyttöystävä</span><span class="kaannos" lang="pt-BR">Maia, a namorada do Jay</span></td></tr>
    </table>
    <table class="taivutus">
      <tr><th></th><th>Maian perhe<span class="kaannos" lang="pt-BR">a família da Maia (em Belo Horizonte)</span></th></tr>
      <tr class="taulu-ryhma"><th colspan="2">Os pais</th></tr>
      <tr><td><span class="ryhma" data-hahmot="walker"></span></td><td><span class="fi">Walker, Maian isä</span><span class="kaannos" lang="pt-BR">Walker, o pai da Maia</span></td></tr>
      <tr><td><span class="ryhma" data-hahmot="marta"></span></td><td><span class="fi">Marta, Maian äiti</span><span class="kaannos" lang="pt-BR">Marta, a mãe da Maia</span></td></tr>
      <tr class="taulu-ryhma"><th colspan="2">Os filhos</th></tr>
      <tr><td><span class="ryhma" data-hahmot="anderson"></span></td><td><span class="fi">Anderson, Maian veli</span><span class="kaannos" lang="pt-BR">Anderson, o irmão da Maia</span></td></tr>
      <tr><td><span class="ryhma" data-hahmot="maia"></span></td><td><span class="fi">Maia, Walkerin ja Martan tytär</span><span class="kaannos" lang="pt-BR">Maia, a filha do Walker e da Marta</span></td></tr>
    </table>
    <div class="valinta" data-sanakuva="aiti" data-oikea="Jayn">
      <p class="kysymys"><span class="fi">Purjo on ___ äiti.</span></p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">Jayn</button><button type="button">Jayllä</button></div>
    </div>
    <div class="valinta" data-sanakuva="veli" data-oikea="Jayn">
      <p class="kysymys"><span class="fi">Hiisi on ___ veli.</span></p>
      <div class="vaihtoehdot"><button type="button">Jaylle</button><button type="button">Jay</button><button type="button">Jayn</button></div>
    </div>
    <div class="valinta" data-sanakuva="isa" data-oikea="Maian">
      <p class="kysymys"><span class="fi">Walker on ___ isä.</span></p>
      <div class="vaihtoehdot"><button type="button">Maian</button><button type="button">Maialla</button><button type="button">Maia</button></div>
    </div>
    <div class="valinta" data-sanakuva="auto" data-oikea="Hiiden">
      <p class="kysymys"><span class="fi">Tämä on ___ auto.</span> (o carro é do Hiisi)</p>
      <div class="vaihtoehdot"><button type="button">Hiisi</button><button type="button">Hiidellä</button><button type="button">Hiiden</button></div>
    </div>
    <div class="valinta" data-sanakuva="veli" data-oikea="Maian">
      <p class="kysymys"><span class="fi">Anderson on ___ veli.</span></p>
      <div class="vaihtoehdot"><button type="button">Andersonin</button><button type="button">Maian</button><button type="button">Maialla</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Leia as mensagens do Hiisi</h3>
    <p class="ohje">À noite, o Hiisi manda mensagens para a Maia. Curtas, como ele. Leia e responda.</p>
    <div class="chat" data-otsikko="Hiisi" data-paiva="sunnuntai" data-mina="maia">
      <p data-h="hiisi" data-aika="19.02" data-pt="Oi, Brasuca. A mãe tem um celular novo.">Moi Brassi. Äidillä on uusi puhelin.</p>
      <p data-h="hiisi" data-aika="19.02" data-pt="Agora ela manda fotos. Muitas fotos.">Nyt hän lähettää kuvia. Paljon kuvia.</p>
      <p data-h="maia" data-aika="19.05" data-pt="Ótimo! Eu também tenho fotos: o pai, a mãe e o Anderson."><span data-l="hieno#2">Hienoa</span>! Minulla on myös kuvia: isä, äiti ja Anderson.</p>
      <p data-h="hiisi" data-aika="19.06" data-pt="O Anderson tem carro?">Onko Andersonilla auto?</p>
      <p data-h="maia" data-aika="19.08" data-pt="Não. Mas o pai tem carro.">Ei ole. Mutta isällä on auto.</p>
      <p data-h="hiisi" data-aika="19.08" data-pt="O pai tem multas?">Onko isällä sakkoja?</p>
      <p data-h="maia" data-aika="19.10" data-pt="Não! O pai dirige devagar.">Ei ole! Isä ajaa hitaasti.</p>
      <p data-h="hiisi" data-aika="19.11" data-pt="(cara de paisagem)">😐</p>
    </div>
    <div class="valinta" data-sanakuva="puhelin" data-oikea="Purjolla">
      <p class="kysymys"><span class="fi">Kenellä on uusi puhelin?</span></p>
      <div class="vaihtoehdot"><button type="button">Maialla</button><button type="button">Purjolla</button><button type="button">Hiidellä</button></div>
    </div>
    <div class="valinta" data-sanakuva="auto" data-oikea="Ei ole.">
      <p class="kysymys"><span class="fi">Onko Andersonilla auto?</span></p>
      <div class="vaihtoehdot"><button type="button">On.</button><button type="button">Ei ole.</button><button type="button">En ole.</button></div>
    </div>
    <div class="valinta" data-sanakuva="hitaasti" data-oikea="Maian isä">
      <p class="kysymys"><span class="fi">Kuka ajaa hitaasti?</span></p>
      <div class="vaihtoehdot"><button type="button">Hiisi</button><button type="button">Maian isä</button><button type="button">Purjo</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Traduza para o finlandês</h3>
    <div class="kaanna"><p class="pt">Eu tenho um irmão.</p><p class="s" data-pt="Eu tenho um irmão.">Minulla on veli.</p></div>
    <div class="kaanna"><p class="pt">Você tem carro?</p><p class="s" data-pt="Você tem carro?">Onko sinulla auto?</p></div>
    <div class="kaanna"><p class="pt">A mãe do Jay é a Purjo.</p><p class="s" data-pt="A mãe do Jay é a Purjo.">Jayn äiti on Purjo.</p></div>
    <div class="kaanna"><p class="pt">Eu não tenho irmã.</p><p class="s" data-pt="Eu não tenho irmã.">Minulla ei ole siskoa.</p></div>
    <div class="kaanna"><p class="pt">O Anderson tem 45 anos.</p><p class="s" data-pt="O Anderson tem 45 anos.">Anderson on neljäkymmentäviisi vuotta vanha.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda às perguntas</h3>
    <p class="ohje">Responda sobre a sua família em voz alta antes de abrir o modelo.</p>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla veli?</summary><p class="s" data-pt="Tenho. Eu tenho um irmão.">On. Minulla on veli.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla sisko?</summary><p class="s" data-pt="Não. Não tenho irmã.">Ei ole. Minulla ei ole siskoa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kenen äiti Purjo on?</summary><p class="s" data-pt="Ela é a mãe do Jay e do Hiisi.">Hän on Jayn ja Hiiden äiti.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla auto?</summary><p class="s" data-pt="Não. Não tenho carro. (ou: Tenho.)">Ei ole. Minulla ei ole autoa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kuinka vanha sinä olet?</summary><p class="s" data-pt="Tenho trinta anos. (diga a sua idade)">Olen kolmekymmentä vuotta vanha.</p></details>
  </div>
</section>

<aside class="kulttuuri" data-paikka="helsinki-lumi">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Isänpäivä em novembro, café com pulla no domingo</h3>
  <figure class="kuva" data-kuva="isanpaiva-pulla"></figure>
  <p>Na Finlândia, o Dia dos Pais (<span class="fi">isänpäivä</span>) é no <b>segundo domingo de novembro</b>, no meio do escuro: as bandeiras sobem nos prédios e muitas famílias se encontram para um café. O Dia das Mães (<span class="fi">äitienpäivä</span>) é no segundo domingo de maio, como no Brasil.</p>
  <p>Visita de família quase sempre tem <b>café</b> e <span class="fi">pulla</span>, um pão doce trançado com cardamomo. Os finlandeses estão entre os maiores bebedores de café do mundo; recusar uma xícara é quase estranho.</p>
  <p>Os jovens costumam sair da casa dos pais cedo, muitas vezes por volta dos vinte anos. Todo mundo se chama pelo primeiro nome: a Maia chama a sogra de <span class="fi">Purjo</span>. Os avós são, com carinho, <span class="fi">mummo</span> e <span class="fi">vaari</span>.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Mun, sun, mulla: “meu”, “seu” e “eu tenho” na rua</h3>
  <p>Na rua e em casa, <span class="fi">minun</span> e <span class="fi">sinun</span> encolhem para <span class="fi">mun</span> e <span class="fi">sun</span>, e o “quem tem” também encurta. Você ouve muito <span class="fi">mun äiti</span> (a minha mãe) e <span class="fi">sun auto</span> (o seu carro). Você <b>não precisa</b> falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">minun</span></td><td><span class="fi">mun</span></td><td>meu, minha</td></tr>
    <tr><td><span class="fi">sinun</span></td><td><span class="fi">sun</span></td><td>seu, sua</td></tr>
    <tr><td><span class="fi">minulla on</span></td><td><span class="fi">mulla on</span></td><td>eu tenho</td></tr>
    <tr><td><span class="fi">sinulla on</span></td><td><span class="fi">sulla on</span></td><td>você tem</td></tr>
  </table>
  <p class="s" data-h="hiisi" data-kirja="Kenen auto tämä on? – Minun!" data-pt="De quem é este carro? – Meu!">Kenen auto tämä on? – Mun!</p>
  <p class="s" data-h="hiisi" data-kirja="Minulla on auto ja kolme sakkoa." data-pt="Eu tenho um carro e três multas.">Mulla on auto ja kolme sakkoa.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="helsinki-lumi">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t05">
    <h3>Lição de casa</h3>
    <p>Desenhe a árvore genealógica da sua família num papel, com os nomes. Depois escreva cinco frases: quem você tem (<span class="fi">Minulla on…</span>), quem você não tem (<span class="fi">Minulla ei ole…</span> + partitivo), o nome de duas pessoas com o genitivo (<span class="fi">Äidin nimi on…</span>) e uma pergunta para a Purjo (<span class="fi">Onko sinulla…?</span>). Leia em voz alta e cuide do <span class="fi pala">ä</span>.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Eu tenho um irmão.">Minulla on veli.</p>
      <p class="s" data-pt="Eu não tenho irmã.">Minulla ei ole siskoa.</p>
      <p class="s" data-pt="O nome da mãe é Marta.">Äidin nimi on Marta.</p>
      <p class="s" data-pt="O nome do pai é Walker.">Isän nimi on Walker.</p>
      <p class="s" data-pt="Purjo, você tem um gato?">Purjo, onko sinulla kissa?</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t05">
    <li>Sei dizer quem tem: minulla on, sinulla on, Purjolla on.</li>
    <li>Sei perguntar e responder: Onko sinulla…? – On. / Ei ole.</li>
    <li>Sei dizer de quem é com o genitivo: Jayn äiti, Maian isä.</li>
    <li>Sei dizer a idade com olla, não com minulla on.</li>
    <li>Ouço e digo a diferença entre ä e e: veli × väli.</li>
  </ul>
</section>
`
    }
  ],

  kielioppi: [
    {
      id: 'omistus', otsikko: 'Quem tem? minulla on', taso: 'essencial', hakuosa: 'h-pronominit', treeni: 't05-omistus',
      html: `
<p><b>Forma:</b> quem tem + <span class="fi pala">-lla/-llä</span> (adessivo) + <span class="fi">on</span> + a coisa. O verbo é sempre <span class="fi">on</span>.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">minulla on</span></td><td>eu tenho</td></tr>
  <tr><td><span class="fi">sinulla on</span></td><td>você tem</td></tr>
  <tr><td><span class="fi">hänellä on</span></td><td>ele, ela tem</td></tr>
  <tr><td><span class="fi">meillä on</span></td><td>nós temos</td></tr>
  <tr><td><span class="fi">teillä on</span></td><td>vocês têm</td></tr>
  <tr><td><span class="fi">heillä on</span></td><td>eles, elas têm</td></tr>
</table>
<p><b>Pergunta e resposta:</b> <span class="fi">Onko sinulla sisko? – On. / Ei ole.</span> <b>Negativo</b> com partitivo: <span class="fi">Minulla ei ole siskoa.</span></p>
<p>Com nomes e palavras da família: a mesma terminação. Veja a forma <b>adessivo</b> na tabela:</p>
<div class="sijataulu" data-sana="äiti" data-sijat="nominatiivi,genetiivi,partitiivi,adessiivi"></div>`
    },
    {
      id: 'genetiivi', otsikko: 'De quem? O genitivo -n', taso: 'essencial', hakuosa: 'h-sijat', treeni: 't05-genetiivi',
      html: `
<p><b>Forma:</b> quem possui + <span class="fi pala">-n</span>, <b>antes</b> da coisa: <span class="fi">Jayn äiti</span> (a mãe do Jay), <span class="fi">Purjon poika</span> (o filho da Purjo). Nome estrangeiro terminado em consoante: <span class="fi pala">-in</span> (<span class="fi">Andersonin, Walkerin</span>).</p>
<p><b>Por dentro:</b> as palavras finlandesas têm o seu próprio genitivo, muitas vezes com o radical fraco, então a gradação aparece: <span class="fi">äiti → äidin</span>, <span class="fi">poika → pojan</span>, <span class="fi">tytär → tyttären</span>, <span class="fi">Hiisi → Hiiden</span>. Pergunta: <span class="fi">kenen?</span> (de quem?).</p>
<ul class="esim">
  <li class="s" data-pt="De quem é este carro? – Do Hiisi.">Kenen auto tämä on? – Hiiden.</li>
  <li class="s" data-pt="O nome da mãe é Marta.">Äidin nimi on Marta.</li>
</ul>
<p>“A minha mãe” pede mais uma terminação, que vem mais adiante no curso; por enquanto, use os nomes: <span class="fi">Maian äiti</span>.</p>
<div class="sijataulu" data-sana="poika" data-sijat="nominatiivi,genetiivi,partitiivi,adessiivi"></div>`
    },
    {
      id: 'perhe5', otsikko: 'Palavras da família: de quem? e quem tem?', taso: 'essencial', hakuosa: 'h-sanatyypit', treeni: 't05-perhe',
      html: `
<p>As palavras da lição na forma básica, no genitivo (de quem?) e no adessivo (quem tem?). Aprenda o genitivo junto com a palavra: ele mostra se a palavra muda por dentro.</p>
<table class="taivutus">
  <tr><th>palavra</th><th>de quem?</th><th>quem tem?</th></tr>
  <tr><td><span class="fi">äiti</span><span class="kaannos" lang="pt-BR">mãe</span></td><td><span class="fi">äidin</span></td><td><span class="fi">äidillä</span></td></tr>
  <tr><td><span class="fi">isä</span><span class="kaannos" lang="pt-BR">pai</span></td><td><span class="fi">isän</span></td><td><span class="fi">isällä</span></td></tr>
  <tr><td><span class="fi">veli</span><span class="kaannos" lang="pt-BR">irmão</span></td><td><span class="fi">veljen</span></td><td><span class="fi">veljellä</span></td></tr>
  <tr><td><span class="fi">sisko</span><span class="kaannos" lang="pt-BR">irmã</span></td><td><span class="fi">siskon</span></td><td><span class="fi">siskolla</span></td></tr>
  <tr><td><span class="fi">poika</span><span class="kaannos" lang="pt-BR">filho</span></td><td><span class="fi">pojan</span></td><td><span class="fi">pojalla</span></td></tr>
  <tr><td><span class="fi">tytär</span><span class="kaannos" lang="pt-BR">filha</span></td><td><span class="fi">tyttären</span></td><td><span class="fi">tyttärellä</span></td></tr>
  <tr><td><span class="fi">lapsi</span><span class="kaannos" lang="pt-BR">criança, filho</span></td><td><span class="fi">lapsen</span></td><td><span class="fi">lapsella</span></td></tr>
  <tr><td><span class="fi">mummo</span><span class="kaannos" lang="pt-BR">avó</span></td><td><span class="fi">mummon</span></td><td><span class="fi">mummolla</span></td></tr>
  <tr><td><span class="fi">vaari</span><span class="kaannos" lang="pt-BR">avô</span></td><td><span class="fi">vaarin</span></td><td><span class="fi">vaarilla</span></td></tr>
</table>`
    },
    {
      id: 'sudenkuopat5', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-vokaalisointu',
      html: `
<ul>
  <li><b>Idade não é “ter”:</b> <span class="fi">Hän on neljäkymmentäviisi vuotta vanha</span>, nunca “-lla on … vuotta”.</li>
  <li><b>A ordem do genitivo:</b> quem possui vem primeiro: <span class="fi">Jayn äiti</span>, não “äiti Jayn”.</li>
  <li><b>-in só nos nomes estrangeiros:</b> <span class="fi">Andersonin</span>, mas <span class="fi">mies → miehen</span>, <span class="fi">lapsi → lapsen</span>: veja o genitivo na bolha.</li>
  <li><b>ä não é e:</b> <span class="fi">äiti, isä, hän</span> com a boca bem aberta. <span class="fi">veli</span> é irmão, <span class="fi">väli</span> é espaço.</li>
  <li><b>ll longo:</b> <span class="fi">minulla</span> tem dois l. Segure o som.</li>
</ul>`
    }
  ]
});
