/* Tottakai, kertaus 3 (k03): Um presente para a Purjo, oppitunnit 11–15 (OPPITUNNIT_6_20.md §5b ”Kertaus K3” ja §5c
   ”Tarinan kalenteri”: la 26.12.2026 päivällä; PELILLISTAMINEN §4.1). Oma materiaali, ei kirjan tekstiä. Kertaus ei opeta
   uutta kielioppia; vähintään 95 % sanoista on opetettu oppitunneilla 0–15 (tarkistus: node tottakai/tools/puuttuvat.js k03).
   Kaksi osaa omina sivuinaan (TYONKULKU 11):
   - osa A (#k03): Kapybaran ja Manaatin kylpyläkohtaus portugaliksi; Purjo soittaa kello kuusi aamulla Belo Horizonten
     aikaa (13 repliikkiä: aikaerovitsi, rallienglanti, kielteinen imperfekti, konditionaali, te-käsky); dialogi Savassin
     kaupassa (14 repliikkiä: Maia, Jay ja Malu ostavat lahjan Purjon uuteen asuntoon: vertailu, monikon partitiivi,
     objekti, kongruenssi, postpositio, imperfekti myönteinen ja kielteinen); Frases prontas; koonti 11–15; tehtävät 1–6
     (vertailu, Purjon viestit, objekti, kuuntelukoe paljain muodoin, imperfekti kyllä ja ei, keskustelu); Na rua
     -tunnistus (tehtävä 7); kotitehtävä ja ”Eu sei”-lista (oppituntien 11–15 itsearviot tiivistettyinä).
   - osa B (#k03-b): esittely (Capivara ja Peixe-boi: joen hiekkasärkän edustalla kuusilonkeroinen kraken; kapeat
     tummanpunaiset lasit, .pomo-lahja), lämmittely kuudella paikallissijalla (tehtävä 8) ja pomotaistelu Paikallissijojen
     kraken (assets/pomo.js), kulttuuri (tupaantuliaiset ja chá de casa nova, kuva savassi).
   Suomea puhuvat vain Maia, Jay ja Purjo (OPPITUNNIT §2 ja §5b; äänet nainen 0, mies 0, nainen 4) sekä kertoja; Malu puhuu
   portugalia kertojan tekstissä. Kuuntelukoe (TYONKULKU 14): äänitteessä vain paljas muoto. Kaikki puhuvat kirjakieltä;
   puhekieli vain Na rua -nurkassa. Purjon rallienglanti .pala lang="en" (ei kuplaa). */
Kurssi.lisaa({
  id: 'k03',
  lyhyt: 'R3',
  jakso: 'Revisão 11–15',
  otsikko: 'Um presente para a Purjo: revisão das lições 11–15',
  lahde: 'Revisão: comparativo e superlativo (halvempi, kallein, paras), partitivo plural, o objeto (-n, -t, partitivo) e o adjetivo junto, o passado (söimme, ajoi), ordens para vocês (Nukkukaa! Älkää…!) e posposições (ikkunan vieressä), o passado negativo (en nukkunut) e o condicional educado (Voisitko…?, haluaisin) · Luta final: Paikallissijojen kraken',
  aiheet: ['raha', 'ominaisuus', 'aika', 'koti'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; procura um presente para a casa nova da Purjo' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; quer o presente bom e barato' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; liga de Helsinque e nunca lembra da diferença de horário' }
  },

  // Kertauksen sanasto: oppituntien 11–15 tärkeimmät sanat (sanastosivu ja visa).
  sanasto: [
    'kumpi', 'kuin', 'yhtä', 'kaikkein', 'halpa', 'kallis', 'parempi', 'paras', 'maailma', 'real', 'hedelmä', 'makkara',
    'vaate', 'paita', 'housu', 'shortsi', 'lippis', 'myyjä', 'sovituskoppi', 'peili', 'kuppi', 'maljakko', 'tyyny', 'myydä', 'sovittaa',
    'herätä', 'jakaa', 'keittää', 'jutella', 'posti', 'naapuri', 'eilen', 'viime viikolla', 'päivää sitten', 'koko', 'vihdoin',
    'oikealle', 'vasemmalle', 'suoraan', 'kääntyä', 'keskusta', 'katu', 'kulma', 'aukio', 'kirkko', 'pankki',
    'edessä', 'takana', 'vieressä', 'lähellä', 'luona', 'kautta',
    'jouluaatto', 'joulupukki', 'joulukuusi', 'lahja', 'kinkku', 'kalkkuna', 'täynnä', 'hakea', 'kattaa', 'mukava',
    'lamppu', 'Savassi'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Revisão na Savassi',
      html: `
<ul class="tavoitteet">
  <li>Parte A: uma ligação às seis da manhã e uma compra na Savassi, só com o que você já aprendeu; o quadro das lições 11 a 15, uma prova curta de escuta e seis exercícios mistos.</li>
  <li>Parte B: aquecimento e a luta final contra o <span class="fi">Paikallissijojen kraken</span>, o kraken de seis tentáculos: um para cada caso de lugar.</li>
</ul>

<section class="osio">
  <h2>De volta ao Spa do Capivara</h2>
  <p><span class="ryhma" data-hahmot="kertoja,manaatti"></span></p>
  <p><b>Capivara:</b> Spa de novo! Água quente, mandarina na cabeça e mais cinco lições para revisar, da 11 à 15. Eu lembro de todas. A 11 tinha banana. A 15 tinha bolo. As do meio tinham roupa, o passado e um Jay perdido no centro.</p>
  <p><b>Peixe-boi:</b> Revisão logo depois do Natal. Comida demais, lição nova nenhuma. É a semana perfeita.</p>
  <p><b>Capivara:</b> Hoje é 26 de dezembro. A Maia, o Jay e a Malu vão à Savassi comprar um presente para o apartamento novo da Purjo. Mas antes a Purjo liga. Às seis da manhã. Depois você mostra o que sabe. E na parte B… alguma coisa se mexe no fundo do rio.</p>
  <p><b>Peixe-boi:</b> No fundo do rio? É lá que eu durmo. Eu dormia.</p>
</section>

<p data-paikka="bh-bairro">Sábado, 26 de dezembro, seis horas da manhã. Na casa dos pais da Maia, todo mundo dorme: depois da ceia, do Natal e de dois dias de comida, até o Walker ficou na cama. O celular da Maia toca. Na tela: Purjo. Em Helsinque já são onze horas. A diferença é de cinco horas, e a Purjo nunca lembra.</p>

<section class="osio" data-paikka="bh-bairro">
  <h2>A ligação: <span class="fi">Kello on kuusi aamulla!</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure: um passado negativo (<span class="fi pala">en …-nut</span>), um pedido educado (<span class="fi">Voisitko…?</span>), uma ordem para vocês e um superlativo.</p>
  <div class="saapuva" data-dialogi="k03-puhelu" data-h="purjo" data-soittaja="Purjo"></div>
  <div class="kpl" id="k03-puhelu" data-nimi="Ouvir a ligação">
    <p class="s" data-h="purjo" data-pt="(em “inglês de rali”:) Bom dia! Bom dia, Maia!"><span class="pala" lang="en">Kuud mörning!</span> Huomenta, Maia!</p>
    <p class="s" data-h="maia" data-pt="Purjo… Aqui são seis da manhã. A gente está dormindo.">Purjo… Täällä kello on kuusi aamulla. Me nukumme.</p>
    <p class="s" data-h="purjo" data-pt="Seis? Ai, não! Aqui já são onze. Desculpa, desculpa!">Kuusi? Voi ei! Täällä kello on jo yksitoista. Anteeksi, anteeksi!</p>
    <p class="s" data-h="jay" data-pt="Mãe? Por que você está ligando às seis?">Äiti? Miksi sinä soitat kello kuusi?</p>
    <p class="s" data-h="purjo" data-pt="Eu não dormi à noite. O apartamento novo está tão vazio: lá só tem uma cama e uma cadeira.">Minä en nukkunut yöllä. Uusi asunto on niin tyhjä: siellä on vain sänky ja tuoli.</p>
    <p class="s" data-h="maia" data-pt="Purjo, o que você fez ontem?">Purjo, mitä sinä teit eilen?</p>
    <p class="s" data-h="purjo" data-pt="Eu estava na casa do Hiisi. O Hiisi dirigiu rápido demais. E vocês?">Olin Hiiden luona. Hiisi ajoi liian nopeasti. Entä te?</p>
    <p class="s" data-h="maia" data-pt="A gente comeu muito. O Jay comeu bolo de manhã e de noite.">Me söimme paljon. Jay söi kakkua aamulla ja illalla.</p>
    <p class="s" data-h="jay" data-pt="Foi o melhor bolo do mundo!">Se oli maailman paras kakku!</p>
    <p class="s" data-h="purjo" data-pt="(em “inglês de rali”:) Que bom! Maia, você poderia mandar uma foto?"><span class="pala" lang="en">Sou kuut!</span> Maia, voisitko lähettää kuvan?</p>
    <p class="s" data-h="maia" data-pt="Mando. Mas agora a gente está dormindo.">Lähetän. Mutta nyt me nukumme.</p>
    <p class="s" data-h="purjo" data-pt="Está bem. Durmam agora! Tchau, tchau!">Hyvä on. Nukkukaa nyt! Moi moi!</p>
    <p class="s" data-h="kertoja" data-pt="A Maia e o Jay não dormem mais.">Maia ja Jay eivät nuku enää.</p>
  </div>
  <p>A Maia fica olhando para o teto. Um apartamento novo, em Helsinque, em dezembro, com uma cama e uma cadeira. Às dez horas ela liga para a Malu: <span lang="pt-BR">“Malu, você leva a gente na Savassi? Precisamos de um presente para a Purjo.”</span> A Malu, claro, leva. Devagar.</p>
</section>

<section class="osio" data-paikka="savassi">
  <h2>Diálogo: Savassin kaupassa</h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure: uma pergunta com <span class="fi">kumpi</span>, um comparativo e um superlativo, um objeto inteiro e um no partitivo, uma posposição e um passado negativo.</p>
  <div class="kpl" id="k03-dialogi" data-nimi="Ouvir o diálogo">
    <p class="s" data-h="kertoja" data-pt="São onze horas. A Maia, o Jay e a Malu estão na Savassi, numa loja pequena.">Kello on yksitoista. Maia, Jay ja Malu ovat Savassissa, pienessä kaupassa.</p>
    <p class="s" data-h="maia" data-pt="Jay, olha! Nesta loja tem luminárias, almofadas e vasos.">Jay, katso! Tässä kaupassa on lamppuja, tyynyjä ja maljakoita.</p>
    <p class="s" data-h="jay" data-pt="Qual é o presente melhor, o vaso ou a luminária?">Kumpi on parempi lahja, maljakko vai lamppu?</p>
    <p class="s" data-h="maia" data-pt="O vaso é mais bonito. Mas a luminária é mais barata.">Maljakko on kauniimpi. Mutta lamppu on halvempi.</p>
    <p class="s" data-h="jay" data-pt="Quanto custa o vaso?">Paljonko maljakko maksaa?</p>
    <p class="s" data-h="maia" data-pt="Duzentos reais. É o vaso mais caro da loja.">Kaksisataa realia. Se on kaupan kallein maljakko.</p>
    <p class="s" data-h="jay" data-pt="Duzentos! A gente não compra o vaso.">Kaksisataa! Emme osta maljakkoa.</p>
    <p class="s" data-h="maia" data-pt="Olha, ali, ao lado da janela: almofadas!">Katso, tuolla, ikkunan vieressä: tyynyjä!</p>
    <p class="s" data-h="jay" data-pt="Esperem! Esta luminária é boa. A Purjo sempre lê à noite.">Odottakaa! Tämä lamppu on hyvä. Purjo lukee aina illalla.</p>
    <p class="s" data-h="maia" data-pt="Ótimo! A gente leva esta luminária e duas almofadas azuis.">Hyvä! Otamme tämän lampun ja kaksi sinistä tyynyä.</p>
    <p class="s" data-h="kertoja" data-pt="A vendedora põe a luminária e as almofadas na sacola. O Jay paga com cartão.">Myyjä laittaa lampun ja tyynyt pussiin. Jay maksaa kortilla.</p>
    <p class="s" data-h="maia" data-pt="Jay, você não disse “obrigada” para a vendedora!">Jay, sinä et sanonut myyjälle ”<span lang="pt-BR">obrigada</span>”!</p>
    <p class="s" data-h="jay" data-pt="Não disse! Eu disse “obrigado”. Eu aprendi!">En sanonut! Minä sanoin ”<span lang="pt-BR">obrigado</span>”. Minä <span data-l="oppia:imperf.1s">opin</span>!</p>
    <p class="s" data-h="kertoja" data-pt="A Malu dirige para casa. Devagar e sempre.">Malu ajaa kotiin. Hitaasti mutta varmasti.</p>
  </div>
  <p>Na lição 12, o Jay agradeceu a vendedora com <span lang="pt-BR">“obrigada”</span>. Desta vez ele treinou no carro, a Malu corrigiu duas vezes, e saiu certo. No caminho de volta, a Malu quer saber por que o Jay estava tão feliz na loja. A Maia traduz: <span lang="pt-BR">“Ele achou a coisa mais barata da loja que não era feia.”</span></p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas que voltam</h3>
    <p>Nada de novo: são blocos das lições 11 a 15. Aqui você vê de onde vem cada pedaço.</p>
    <ul>
      <li><span class="fi">Minä en nukkunut yöllä.</span> = eu não dormi à noite (lição 15) · o passado negativo: <span class="fi">en</span> + <span class="fi pala">-nut</span></li>
      <li><span class="fi">Olin Hiiden luona.</span> = eu estava na casa do Hiisi (lições 13 e 14) · <span class="fi">luona</span> depois do genitivo</li>
      <li><span class="fi">Se oli maailman paras kakku!</span> = foi o melhor bolo do mundo! (lição 11) · <span class="fi">maailman</span> + superlativo</li>
      <li><span class="fi">Maia, voisitko lähettää kuvan?</span> = Maia, você poderia mandar uma foto? (lição 15) · o condicional educado</li>
      <li><span class="fi">Nukkukaa nyt!</span> = durmam agora! (lição 14) · a ordem para vocês: <span class="fi pala">-kaa/-kää</span></li>
      <li><span class="fi">Emme osta maljakkoa.</span> = a gente não compra o vaso (lição 12) · negação: partitivo</li>
      <li><span class="fi">Otamme tämän lampun ja kaksi sinistä tyynyä.</span> = levamos esta luminária e duas almofadas azuis (lição 12) · inteira: <span class="fi pala">-n</span>; depois de número: partitivo</li>
      <li><span class="fi">ikkunan vieressä</span> = ao lado da janela (lição 14) · genitivo + posposição</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="savassi">
  <h2>O quadro das lições 11 a 15</h2>
  <p>Cinco lições, cinco coisas que agora voltam o tempo todo. Toque nas palavras para ver as formas e ouça os exemplos.</p>
  <table class="taivutus">
    <tr><th>o que é</th><th>exemplo</th><th>lição</th></tr>
    <tr><td>comparar: <span class="fi pala">-mpi</span> e <span class="fi pala">kuin</span>; o mais: <span class="fi pala">-in</span></td><td><span class="fi">Maljakko on kauniimpi kuin lamppu.</span><span class="kaannos" lang="pt-BR">O vaso é mais bonito que a luminária.</span> <span class="fi">Se on kaupan kallein.</span><span class="kaannos" lang="pt-BR">É o mais caro da loja.</span></td><td>11</td></tr>
    <tr><td>várias coisas: o partitivo plural</td><td><span class="fi">Kaupassa on lamppuja ja tyynyjä.</span><span class="kaannos" lang="pt-BR">Na loja tem luminárias e almofadas.</span></td><td>11</td></tr>
    <tr><td>o objeto: inteiro ou parte</td><td><span class="fi">Otamme tämän lampun.</span><span class="kaannos" lang="pt-BR">Levamos esta luminária.</span> <span class="fi">Emme osta maljakkoa.</span><span class="kaannos" lang="pt-BR">Não compramos o vaso.</span></td><td>12</td></tr>
    <tr><td>o adjetivo no mesmo caso</td><td><span class="fi">pienessä kaupassa, kaksi sinistä tyynyä</span><span class="kaannos" lang="pt-BR">numa loja pequena, duas almofadas azuis</span></td><td>12</td></tr>
    <tr><td>o passado: <span class="fi pala">-i-</span></td><td><span class="fi">Eilen söimme paljon. Hiisi ajoi liian nopeasti.</span><span class="kaannos" lang="pt-BR">Ontem a gente comeu muito. O Hiisi dirigiu rápido demais.</span></td><td>13</td></tr>
    <tr><td>ordens para vocês: <span class="fi pala">-kaa/-kää</span>, <span class="fi pala">älkää</span> + <span class="fi pala">-ko/-kö</span></td><td><span class="fi">Nukkukaa nyt! Odottakaa! Älkää juosko!</span><span class="kaannos" lang="pt-BR">Durmam agora! Esperem! Não corram!</span></td><td>14</td></tr>
    <tr><td>posposições: genitivo + palavra de lugar</td><td><span class="fi">ikkunan vieressä, Hiiden luona, kaupan edessä</span><span class="kaannos" lang="pt-BR">ao lado da janela, na casa do Hiisi, na frente da loja</span></td><td>14</td></tr>
    <tr><td>o passado negativo: <span class="fi pala">en</span> + particípio <span class="fi pala">-nut/-nyt, -neet</span></td><td><span class="fi">En nukkunut. Et sanonut. Emme ostaneet.</span><span class="kaannos" lang="pt-BR">Não dormi. Você não disse. Não compramos.</span></td><td>15</td></tr>
    <tr><td>o condicional educado: <span class="fi pala">-isi-</span></td><td><span class="fi">Voisitko lähettää kuvan? Olisi mukava nähdä lunta.</span><span class="kaannos" lang="pt-BR">Você poderia mandar uma foto? Seria bom ver neve.</span></td><td>15</td></tr>
  </table>
  <div class="muista">
    <p><b>Lembre:</b> no passado negativo o verbo de negação fica no presente (<span class="fi">en, et, ei, emme</span>), e o verbo principal vai para a forma <span class="fi pala">-nut/-nyt</span> (singular) ou <span class="fi pala">-neet</span> (plural): <span class="fi">en nukkunut, emme ostaneet</span>. E o objeto de uma frase negativa vai sempre no partitivo, também no passado: <span class="fi">Emme ostaneet maljakkoa.</span> Mais na <a href="#h-vertailu">Gramática: comparar</a>, na <a href="#h-objekti">Gramática: o objeto</a>, na <a href="#h-imperfekti">Gramática: o passado</a>, na <a href="#h-postpositiot">Gramática: posposições</a> e na <a href="#h-konditionaali">Gramática: o condicional</a>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Mais e o mais: -mpi e -in</h3>
    <p class="ohje">Escreva o comparativo (<span class="fi pala">-mpi</span>) ou o superlativo (<span class="fi pala">-in</span>) da palavra entre parênteses. Lembre: <span class="fi">hyvä → parempi → paras</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Maljakko on <span class="aukko" data-oikea="kauniimpi"></span> kuin lamppu. <span data-ei-kuplaa lang="pt-BR">(kaunis, mais)</span></p>
      <p>Lamppu on <span class="aukko" data-oikea="halvempi"></span> kuin maljakko. <span data-ei-kuplaa lang="pt-BR">(halpa, mais)</span></p>
      <p>Se on kaupan <span class="aukko" data-oikea="kallein"></span> maljakko. <span data-ei-kuplaa lang="pt-BR">(kallis, o mais)</span></p>
      <p>Se oli maailman <span class="aukko" data-oikea="paras"></span> kakku. <span data-ei-kuplaa lang="pt-BR">(hyvä, o mais)</span></p>
      <p>Tyyny on <span class="aukko" data-oikea="pienempi"></span> kuin lamppu. <span data-ei-kuplaa lang="pt-BR">(pieni, mais)</span></p>
      <p>Mercado Central on <span class="aukko" data-oikea="isompi"></span> kuin Hakaniemen kauppahalli. <span data-ei-kuplaa lang="pt-BR">(iso, mais)</span></p>
      <p>Banaani on kaikkein <span class="aukko" data-oikea="halvin"></span>. <span data-ei-kuplaa lang="pt-BR">(halpa, o mais)</span></p>
      <p>Kahvi on <span class="aukko" data-oikea="parempi"></span> kuin tee. <span data-ei-kuplaa lang="pt-BR">(hyvä, mais)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>2. Leia as mensagens da Purjo</h3>
    <p class="ohje">Às três da tarde, em Helsinque já é noite. A Purjo escreve de novo. Leia e responda.</p>
    <div class="chat" data-otsikko="Purjo" data-paiva="lauantai" data-mina="maia">
      <p data-h="purjo" data-aika="15.02" data-pt="Maia! O que vocês fizeram hoje?">Maia! Mitä te teitte tänään?</p>
      <p data-h="maia" data-aika="15.05" data-pt="A gente estava na Savassi com a Malu. Compramos uma surpresa para você.">Olimme Savassissa Malun kanssa. Ostimme sinulle yllätyksen.</p>
      <p data-h="purjo" data-aika="15.06" data-pt="Uma surpresa? O que é?">Yllätyksen? Mikä se on?</p>
      <p data-h="maia" data-aika="15.08" data-pt="Eu não conto! A gente não comprou o vaso: ele era caro demais.">En kerro! Emme ostaneet maljakkoa: se oli liian kallis.</p>
      <p data-h="purjo" data-aika="15.09" data-pt="Você poderia mandar uma foto?">Voisitko lähettää kuvan?</p>
      <p data-h="maia" data-aika="15.11" data-pt="Não posso! É surpresa. Mas o Jay mandou uma foto da loja.">En voi! Se on yllätys. Mutta Jay lähetti kuvan kaupasta.</p>
      <p data-h="purjo" data-aika="15.12" data-pt="(em “inglês de rali”:) Que bonito! E onde está o Jay agora?"><span class="pala" lang="en">Sou pjuutiful!</span> Missä Jay on nyt?</p>
      <p data-h="maia" data-aika="15.14" data-pt="Ele está esperando na frente da loja, no carro da Malu.">Hän odottaa kaupan edessä Malun autossa.</p>
    </div>
    <div class="valinta" data-oikea="Savassissa.">
      <p class="kysymys"><span class="fi">Missä Maia ja Jay olivat tänään?</span></p>
      <div class="vaihtoehdot"><button type="button">Savassiin.</button><button type="button">Savassissa.</button><button type="button">Savassista.</button></div>
    </div>
    <div class="valinta" data-oikea="Malun kanssa.">
      <p class="kysymys"><span class="fi">Kenen kanssa he olivat siellä?</span></p>
      <div class="vaihtoehdot"><button type="button">Martan kanssa.</button><button type="button">Purjon kanssa.</button><button type="button">Malun kanssa.</button></div>
    </div>
    <div class="valinta" data-oikea="Maljakkoa.">
      <p class="kysymys"><span class="fi">Mitä he eivät ostaneet?</span></p>
      <div class="vaihtoehdot"><button type="button">Maljakkoa.</button><button type="button">Lamppua.</button><button type="button">Tyynyä.</button></div>
    </div>
    <div class="valinta" data-oikea="Kuvan.">
      <p class="kysymys"><span class="fi">Mitä Purjo haluaa?</span> (o que ela pede com <span class="fi">voisitko</span>)</p>
      <div class="vaihtoehdot"><button type="button">Lahjan.</button><button type="button">Kuvan.</button><button type="button">Kakun.</button></div>
    </div>
    <div class="valinta" data-oikea="Kaupan edessä.">
      <p class="kysymys"><span class="fi">Missä Jay odottaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kaupan takana.</button><button type="button">Kaupan vieressä.</button><button type="button">Kaupan edessä.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. O objeto: inteiro ou parte?</h3>
    <p class="ohje">Escolha a forma certa. Entre parênteses está o que a frase quer dizer. Negação: partitivo. Parte, quantidade ou ação em andamento: partitivo. Senão, inteiro: <span class="fi pala">-n</span> ou <span class="fi pala">-t</span>.</p>
    <div class="valinta" data-oikea="lampun">
      <p class="kysymys"><span class="fi">Jay ostaa ___.</span> (ele compra a luminária)</p>
      <div class="vaihtoehdot"><button type="button">lamppua</button><button type="button">lampun</button><button type="button">lamppu</button></div>
    </div>
    <div class="valinta" data-oikea="maljakkoa">
      <p class="kysymys"><span class="fi">Emme osta ___.</span> (não compramos o vaso)</p>
      <div class="vaihtoehdot"><button type="button">maljakkoa</button><button type="button">maljakon</button><button type="button">maljakko</button></div>
    </div>
    <div class="valinta" data-oikea="tyynyt">
      <p class="kysymys"><span class="fi">Myyjä laittaa ___ pussiin.</span> (as almofadas, todas)</p>
      <div class="vaihtoehdot"><button type="button">tyynyjä</button><button type="button">tyynyn</button><button type="button">tyynyt</button></div>
    </div>
    <div class="valinta" data-oikea="tyynyä">
      <p class="kysymys"><span class="fi">Otamme kaksi ___.</span> (duas almofadas)</p>
      <div class="vaihtoehdot"><button type="button">tyynyt</button><button type="button">tyynyä</button><button type="button">tyynyn</button></div>
    </div>
    <div class="valinta" data-oikea="lamppua">
      <p class="kysymys"><span class="fi">Jay katsoo ___.</span> (ele olha a luminária)</p>
      <div class="vaihtoehdot"><button type="button">lamppua</button><button type="button">lampun</button><button type="button">lamput</button></div>
    </div>
    <div class="valinta" data-oikea="tauluja">
      <p class="kysymys"><span class="fi">Maia myy ___.</span> (ela vende quadros, em geral)</p>
      <div class="vaihtoehdot"><button type="button">taulut</button><button type="button">tauluja</button><button type="button">taulun</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Prova de escuta</h3>
    <p class="ohje">Cinco sons das lições 11 a 15. Você ouve só a forma, nada mais. Aperte ▶ e escolha o que ouviu.</p>
    <div class="valinta" data-kuuntele="halvin" data-oikea="halvin">
      <p class="kysymys">Lição 11 · barato, mais barato ou o mais barato?</p>
      <div class="vaihtoehdot"><button type="button">halpa</button><button type="button">halvempi</button><button type="button">halvin</button></div>
    </div>
    <div class="valinta" data-kuuntele="lampun" data-oikea="lampun">
      <p class="kysymys">Lição 12 · inteira, parte ou todas?</p>
      <div class="vaihtoehdot"><button type="button">lampun</button><button type="button">lamppua</button><button type="button">lamput</button></div>
    </div>
    <div class="valinta" data-kuuntele="tuli" data-oikea="tuli">
      <p class="kysymys">Lição 13 · presente ou passado?</p>
      <div class="vaihtoehdot"><button type="button">tulee</button><button type="button" data-l="tulla:imperf.3s">tuli</button></div>
    </div>
    <div class="valinta" data-kuuntele="menkää" data-oikea="menkää">
      <p class="kysymys">Lição 14 · para você ou para vocês?</p>
      <div class="vaihtoehdot"><button type="button">mene</button><button type="button">menkää</button></div>
    </div>
    <div class="valinta" data-kuuntele="en nukkunut" data-oikea="en nukkunut">
      <p class="kysymys">Lição 15 · presente ou passado?</p>
      <div class="vaihtoehdot"><button type="button">en nuku</button><button type="button">en nukkunut</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. O passado: sim e não</h3>
    <p class="ohje">Escreva o verbo no passado, na pessoa certa. Com <b>negativo</b> entre parênteses, escreva também o verbo de negação: <span class="fi">en nukkunut, emme ostaneet</span>. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Eilen minä <span class="aukko" data-oikea="heräsin"></span> kello kuusi. <span data-ei-kuplaa>(herätä)</span></p>
      <p>Me <span class="aukko" data-oikea="menimme"></span> Savassiin. <span data-ei-kuplaa>(mennä)</span></p>
      <p>Jay <span class="aukko" data-oikea="osti"></span> lampun. <span data-ei-kuplaa>(ostaa)</span></p>
      <p>Me <span class="aukko" data-oikea="emme ostaneet"></span> maljakkoa. <span data-ei-kuplaa lang="pt-BR">(ostaa, negativo)</span></p>
      <p>Purjo <span class="aukko" data-oikea="ei nukkunut"></span> yöllä. <span data-ei-kuplaa lang="pt-BR">(nukkua, negativo)</span></p>
      <p>Sinä <span class="aukko" data-oikea="söit"></span> kakkua aamulla. <span data-ei-kuplaa>(syödä)</span></p>
      <p>Minä <span class="aukko" data-oikea="en kertonut"></span> Purjolle. <span data-ei-kuplaa lang="pt-BR">(kertoa, negativo)</span></p>
      <p>Purjo <span class="aukko" data-oikea="oli"></span> Hiiden luona. <span data-ei-kuplaa>(olla)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>6. Responda em voz alta</h3>
    <p class="ohje">A Purjo liga de novo às nove da noite. Em Helsinque são duas da manhã: ela continua sem dormir. Responda em voz alta antes de abrir o modelo.</p>
    <details class="vastaus"><summary lang="fi-FI">Kumpi on kauniimpi, maljakko vai lamppu?</summary><p class="s" data-pt="O vaso é mais bonito que a luminária.">Maljakko on kauniimpi kuin lamppu.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä te ostitte tänään?</summary><p class="s" data-pt="Compramos uma luminária e duas almofadas.">Ostimme lampun ja kaksi tyynyä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Ostitteko te maljakon?</summary><p class="s" data-pt="Não compramos. Ele era caro demais.">Emme ostaneet. Se oli liian kallis.</p></details>
    <details class="vastaus"><summary><span lang="fi-FI">Missä Malun auto on?</span> <span lang="pt-BR">(na frente da loja)</span></summary><p class="s" data-pt="Está na frente da loja.">Se on kaupan edessä.</p></details>
    <details class="vastaus"><summary><span lang="fi-FI">Mitä sinä sanot Jaylle ja Malulle?</span> <span lang="pt-BR">(venham aqui!)</span></summary><p class="s" data-pt="Venham aqui!">Tulkaa tänne!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä haluaisit nyt?</summary><p class="s" data-pt="Eu queria café. (ou: Eu queria dormir.)">Haluaisin kahvia.</p></details>
  </div>
</section>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Ouvido da rua: ku, tän, me oltiin, mee</h3>
  <p>Nas lições 11 a 15 vieram mais formas da língua falada. Você <b>não precisa</b> falar assim; o importante é <b>reconhecer</b>.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">kuin</span></td><td><span class="fi" data-rekisteri="puhe">ku</span></td><td>do que (lição 11)</td></tr>
    <tr><td><span class="fi">tämän</span></td><td><span class="fi" data-rekisteri="puhe">tän</span></td><td>este, esta, como objeto (lição 12)</td></tr>
    <tr><td><span class="fi">me olimme</span></td><td><span class="fi" data-rekisteri="puhe">me oltiin</span></td><td>nós estávamos (lição 13)</td></tr>
    <tr><td><span class="fi">Mene!</span></td><td><span class="fi" data-rekisteri="puhe">Mee!</span></td><td>vá! (lição 14)</td></tr>
    <tr><td><span class="fi">en syönyt kinkkua</span></td><td><span class="fi" data-rekisteri="puhe">en syöny kinkkuu</span></td><td>não comi presunto (lição 15)</td></tr>
  </table>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. O que a pessoa disse, em padrão?</h3>
    <p class="ohje">Ouça (ou leia) a frase da rua e escolha a mesma frase na língua padrão.</p>
    <div class="valinta" data-kuuntele="Tää on parempi ku toi." data-oikea="Tämä on parempi kuin tuo.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Tää on parempi ku toi.</span></p>
      <div class="vaihtoehdot"><button type="button">Tuo on parempi kuin tämä.</button><button type="button">Tämä on parempi kuin tuo.</button><button type="button">Tämä on halvempi kuin tuo.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mä otan tän." data-oikea="Minä otan tämän.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Mä otan tän.</span></p>
      <div class="vaihtoehdot"><button type="button">Minä otan tämän.</button><button type="button">Minä otan tuon.</button><button type="button">Sinä otat tämän.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Me oltiin Savassissa." data-oikea="Me olimme Savassissa.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Me oltiin Savassissa.</span></p>
      <div class="vaihtoehdot"><button type="button">Me olemme Savassissa.</button><button type="button">Te olitte Savassissa.</button><button type="button">Me olimme Savassissa.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mee suoraan!" data-oikea="Mene suoraan!">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Mee suoraan!</span></p>
      <div class="vaihtoehdot"><button type="button">Mene suoraan!</button><button type="button">Menkää suoraan!</button><button type="button">Menen suoraan.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mä en syöny kinkkuu." data-oikea="Minä en syönyt kinkkua.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Mä en syöny kinkkuu.</span></p>
      <div class="vaihtoehdot"><button type="button">Minä en syö kinkkua.</button><button type="button">Minä en syönyt kinkkua.</button><button type="button">Me emme syöneet kinkkua.</button></div>
    </div>
  </div>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Para terminar a parte A</h2>
  <div class="kotitehtava" data-id="k03">
    <h3>Lição de casa</h3>
    <p>Escreva uma mensagem para a Purjo em seis frases: onde você estava hoje (<span class="fi">Tänään olin…</span>), o que comprou (objeto inteiro, <span class="fi pala">-n</span>), o que não comprou (<span class="fi">en ostanut</span> + partitivo), uma comparação (<span class="fi">… on halvempi kuin …</span>), uma coisa de ontem (<span class="fi">Eilen…</span>) e um pedido educado (<span class="fi">Voisitko…?</span>). Leia em voz alta.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Oi, Purjo! Hoje a gente estava na Savassi.">Hei Purjo! Tänään olimme Savassissa.</p>
      <p class="s" data-pt="Compramos um presente para você.">Ostimme sinulle lahjan.</p>
      <p class="s" data-pt="Não compramos o vaso: ele era caro demais.">Emme ostaneet maljakkoa: se oli liian kallis.</p>
      <p class="s" data-pt="A luminária era mais barata que o vaso.">Lamppu oli halvempi kuin maljakko.</p>
      <p class="s" data-pt="Ontem a gente comeu muito bolo.">Eilen söimme paljon kakkua.</p>
      <p class="s" data-pt="Você poderia mandar uma foto do apartamento novo?">Voisitko lähettää kuvan uudesta asunnosta?</p>
    </details>
  </div>

  <h3>Eu sei: o que você aprendeu nas lições 11 a 15</h3>
  <p class="ohje">A lista junta as autoavaliações das lições. Marque com sinceridade: o que ainda não está firme, revise na lição indicada antes da lição 16.</p>
  <ul class="itsearvio" data-id="k03">
    <li>Comparo com -mpi e kuin, e digo o mais: halvempi kuin…, halvin, paras, maailman paras (lição 11).</li>
    <li>Uso kumpi entre dois e yhtä … kuin para “tão … quanto” (lição 11).</li>
    <li>Peço várias coisas com o partitivo plural e uso o singular depois de número: banaaneja, kaksi banaania (lição 11).</li>
    <li>Escolho a forma do objeto: Ostan tämän paidan. Ostan shortsit. En osta takkia. Katson taulua. (lição 12)</li>
    <li>Ponho o adjetivo no mesmo caso do substantivo: sinisessä paidassa, isossa kaupassa (lição 12).</li>
    <li>Sei os nomes das roupas e entendo preços em reais: kaksisataa realia (lição 12).</li>
    <li>Conto o que fiz, com o radical certo: heräsin, osti, antoi, söi, oli (lição 13).</li>
    <li>Uso a consoante fraca em eu e você: nukuin, otit, mas hän nukkui (lição 13).</li>
    <li>Digo quando: eilen, aamulla, viime viikolla, kaksi päivää sitten (lição 13).</li>
    <li>Dou ordens para vocês e proíbo: Tulkaa! Odottakaa! Älkää juosko! (lição 14)</li>
    <li>Digo onde fica com genitivo + posposição e dou direções: pankin edessä, Maian luona, Käänny oikealle! (lição 14)</li>
    <li>Digo o que não fiz, com o particípio: en nukkunut, emme syöneet, en halunnut (lição 15).</li>
    <li>Peço e desejo com educação: haluaisin, voisitko, saisinko, olisi mukava nähdä lunta (lição 15).</li>
    <li>Entendo uma lista de tarefas e conheço o Natal finlandês: hae tuolit, kattakaa pöytä; joulupukki, kinkku, joulusauna (lição 15).</li>
    <li>Pronuncio sem nasalizar, com y e ö, ouço presente e passado, o n que muda e o j que é i: banaani, hyvä, puhuu × puhui, pankin kohdalla, joulu (lições 11 a 15).</li>
  </ul>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · A luta final',
      html: `
<ul class="tavoitteet">
  <li>Aquecimento: sete frases para acordar os seis casos de lugar.</li>
  <li>A luta final: o Capivara e o Peixe-boi pedem ajuda à Maia de novo. Derrote o <span class="fi">Paikallissijojen kraken</span> com respostas certas. O prêmio vai para a ilha do Capivara e do Peixe-boi.</li>
</ul>

<section class="osio" data-paikka="bh-bairro">
  <h2>Socorro! Um kraken no rio</h2>
  <p>Sábado à tarde, na casa dos pais da Maia. A Maia embrulha a luminária e as almofadas em papel de Natal. À noite tem festa na rua, e a Marta já espalhou cadeiras pela calçada. De repente, alguém bate na janela: o Capivara, de boia no pescoço, e atrás dele o Peixe-boi, dentro de uma banheira de plástico que alguém deixou na calçada.</p>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Maia! Emergência de novo! Subiu um kraken do fundo do rio, bem na frente do nosso banco de areia. Ele tem seis tentáculos.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Seis. Eu contei duas vezes, para ter certeza. Deu seis as duas vezes, o que me assustou mais ainda.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> E cada tentáculo é uma terminação: <span class="fi pala">-ssa</span>, <span class="fi pala">-sta</span>, <span class="fi pala">-aan</span>, <span class="fi pala">-lla</span>, <span class="fi pala">-lta</span>, <span class="fi pala">-lle</span>. Ele agarra o nosso barco e pergunta: <span class="fi">missä?</span> <span class="fi">mistä?</span> <span class="fi">mihin?</span> Quem erra, ele puxa para o fundo.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="maia"></span>
    <p class="apuhahmo-kupla"><b>Maia:</b> Os casos de lugar! Três de dentro e três de fora. Esses eu uso todo dia: hoje de manhã eu estive <span class="fi">Savassissa</span>, saí <span class="fi">kaupasta</span> e voltei <span class="fi">kotiin</span>.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Por isso trouxemos isto: óculos de luta novos. Estreitos e vermelho-escuros, da cor do kraken. Debaixo d’água, só óculos estreitos enxergam bem. Eu li isso em algum lugar. Ou sonhei.</p>
  </div>
  <div class="pomo-lahja" data-pomo="k03"></div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="maia"></span>
    <p class="apuhahmo-kupla"><b>Maia:</b> <span class="fi">Tottakai!</span> Quer dizer: claro que eu ajudo. Mas eu volto antes da festa na rua: o meu pai prometeu tocar gaita.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Primeiro um aquecimento. Depois o kraken. E depois a festa. Eu sei boiar no ritmo do samba. Bem devagar.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: aquecimento</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Seis tentáculos, seis terminações</h3>
    <p class="ohje">Dentro (casa, loja, cidade): <span class="fi pala">-ssa</span> (onde?), <span class="fi pala">-sta</span> (de onde?), <span class="fi pala">-aan, -oon, -iin…</span> (para onde?). Fora (lugar aberto, em cima, pessoas): <span class="fi pala">-lla</span>, <span class="fi pala">-lta</span>, <span class="fi pala">-lle</span>. Entre parênteses: a palavra e a pergunta.</p>
    <div class="valinta" data-oikea="kaupassa">
      <p class="kysymys"><span class="fi">Maia ja Jay ovat ___.</span> (kauppa, onde?)</p>
      <div class="vaihtoehdot"><button type="button">kaupasta</button><button type="button">kaupassa</button><button type="button">kauppaan</button></div>
    </div>
    <div class="valinta" data-oikea="Savassista">
      <p class="kysymys"><span class="fi">Malu ajaa ___ kotiin.</span> (Savassi, de onde?)</p>
      <div class="vaihtoehdot"><button type="button">Savassista</button><button type="button">Savassissa</button><button type="button">Savassiin</button></div>
    </div>
    <div class="valinta" data-oikea="Mercado Centraliin">
      <p class="kysymys"><span class="fi">Huomenna menemme ___.</span> (Mercado Central, para onde?)</p>
      <div class="vaihtoehdot"><button type="button">Mercado Centralissa</button><button type="button">Mercado Centraliin</button><button type="button">Mercado Centralista</button></div>
    </div>
    <div class="valinta" data-oikea="aukiolla">
      <p class="kysymys"><span class="fi">Jay odottaa ___.</span> (aukio, onde? lugar aberto)</p>
      <div class="vaihtoehdot"><button type="button">aukiolle</button><button type="button">aukiolta</button><button type="button">aukiolla</button></div>
    </div>
    <div class="valinta" data-oikea="Purjolta">
      <p class="kysymys"><span class="fi">Maia saa viestin ___.</span> (Purjo, de quem?)</p>
      <div class="vaihtoehdot"><button type="button">Purjolta</button><button type="button">Purjolle</button><button type="button">Purjolla</button></div>
    </div>
    <div class="valinta" data-oikea="Purjolle">
      <p class="kysymys"><span class="fi">Jay lähettää lahjan ___.</span> (Purjo, para quem?)</p>
      <div class="vaihtoehdot"><button type="button">Purjolla</button><button type="button">Purjolle</button><button type="button">Purjolta</button></div>
    </div>
    <div class="valinta" data-oikea="kadulle">
      <p class="kysymys"><span class="fi">Illalla Marta laittaa tuolit ___.</span> (katu, para onde? lugar aberto)</p>
      <div class="vaihtoehdot"><button type="button">kadulla</button><button type="button">kadulta</button><button type="button">kadulle</button></div>
    </div>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: a luta final</h2>
  <div class="pomo" data-pomo="k03"></div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Presente para casa nova: chá de casa nova e tupaantuliaiset</h3>
  <figure class="kuva" data-kuva="savassi"></figure>
  <p>No Brasil, quem muda de casa muitas vezes faz um <b>chá de casa nova</b>: os amigos vêm conhecer o lugar e trazem coisas para a casa, como panos de prato, copos, uma panela ou uma planta. Às vezes o dono da casa faz até uma lista, como num chá de bebê.</p>
  <p>Na Finlândia, a visita à casa nova se chama <span class="fi">tupaantuliaiset</span>. O presente tradicional é pão e sal: pão para nunca faltar comida, sal para a vida ter gosto. Hoje se leva também uma vela, flores, uma planta ou alguma coisa para a cozinha, e o dono da casa serve café e pulla.</p>
  <p>Uma luminária para ler e duas almofadas são um presente muito finlandês: em dezembro, em Helsinque, o dia claro dura menos de seis horas, e a noite é comprida. A Purjo vai ler muito.</p>
</aside>
`
    }
  ],

  /* Gramática da lição: kertauskortit (ei uutta kielioppia), linkit oppituntien 11–15 Treeni-paketteihin. */
  kielioppi: [
    {
      id: 'kertaus-vertailu', otsikko: 'Comparar: -mpi, -in e kuin (lição 11)', taso: 'revisão', hakuosa: 'h-vertailu', treeni: ['t11-komparatiivi', 't11-superlatiivi', 't11-kuin'],
      html: `
<table class="taivutus">
  <tr><th>forma básica</th><th>mais</th><th>o mais</th></tr>
  <tr><td><span class="fi">halpa</span><span class="kaannos" lang="pt-BR">barato</span></td><td><span class="fi">halvempi</span></td><td><span class="fi">halvin</span></td></tr>
  <tr><td><span class="fi">kallis</span><span class="kaannos" lang="pt-BR">caro</span></td><td><span class="fi">kalliimpi</span></td><td><span class="fi">kallein</span></td></tr>
  <tr><td><span class="fi">kaunis</span><span class="kaannos" lang="pt-BR">bonito</span></td><td><span class="fi">kauniimpi</span></td><td><span class="fi">kaunein</span></td></tr>
  <tr><td><span class="fi">hyvä</span><span class="kaannos" lang="pt-BR">bom</span></td><td><span class="fi">parempi</span></td><td><span class="fi">paras</span></td></tr>
</table>
<p><span class="fi">kuin</span> = do que · <span class="fi">yhtä … kuin</span> = tão … quanto · <span class="fi">kumpi?</span> = qual (de dois)? · <span class="fi">maailman paras</span> = o melhor do mundo.</p>
<ul class="esim">
  <li class="s" data-pt="O vaso é mais bonito que a luminária.">Maljakko on kauniimpi kuin lamppu.</li>
  <li class="s" data-pt="É o vaso mais caro da loja.">Se on kaupan kallein maljakko.</li>
</ul>`
    },
    {
      id: 'kertaus-monikon-partitiivi', otsikko: 'Várias coisas: o partitivo plural (lição 11)', taso: 'revisão', hakuosa: 'h-monikko', treeni: ['t11-monikon-partitiivi'],
      html: `
<p>Várias coisas que se contam, sem número: <span class="fi pala">-ja/-jä, -ia/-iä, -ita/-itä</span>. Depois de número, o partitivo <b>singular</b>.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Kaupassa on lamppuja, tyynyjä ja maljakoita.</span></td><td>Na loja tem luminárias, almofadas e vasos.</td></tr>
  <tr><td><span class="fi">Otamme kaksi tyynyä.</span></td><td>Levamos duas almofadas.</td></tr>
</table>`
    },
    {
      id: 'kertaus-objekti', otsikko: 'O objeto e o adjetivo junto (lição 12)', taso: 'revisão', hakuosa: 'h-objekti', treeni: ['t12-objekti', 't12-kongruenssi', 't12-vaatteet'],
      html: `
<table class="taivutus">
  <tr><th>quando</th><th>exemplo</th></tr>
  <tr><td>uma coisa inteira</td><td><span class="fi">Otamme tämän lampun.</span><span class="kaannos" lang="pt-BR">Levamos esta luminária.</span></td></tr>
  <tr><td>várias inteiras, todas</td><td><span class="fi">Myyjä laittaa tyynyt pussiin.</span><span class="kaannos" lang="pt-BR">A vendedora põe as almofadas na sacola.</span></td></tr>
  <tr><td>negação</td><td><span class="fi">Emme osta maljakkoa.</span><span class="kaannos" lang="pt-BR">Não compramos o vaso.</span></td></tr>
  <tr><td>depois de número</td><td><span class="fi">kaksi sinistä tyynyä</span><span class="kaannos" lang="pt-BR">duas almofadas azuis</span></td></tr>
</table>
<p>O adjetivo vai no mesmo caso do substantivo: <span class="fi">pienessä kaupassa</span>, <span class="fi">sinisen paidan</span>.</p>`
    },
    {
      id: 'kertaus-imperfekti', otsikko: 'O passado (lição 13)', taso: 'revisão', hakuosa: 'h-imperfekti', treeni: ['t13-imperfekti', 't13-vartalo', 't13-aika', 't13-kuuntele'],
      html: `
<table class="taivutus">
  <tr><th>infinitivo</th><th>minä</th><th>hän</th></tr>
  <tr><td><span class="fi">syödä</span><span class="kaannos" lang="pt-BR">comer</span></td><td><span class="fi">söin</span></td><td><span class="fi">söi</span></td></tr>
  <tr><td><span class="fi">ajaa</span><span class="kaannos" lang="pt-BR">dirigir</span></td><td><span class="fi">ajoin</span></td><td><span class="fi">ajoi</span></td></tr>
  <tr><td><span class="fi">nukkua</span><span class="kaannos" lang="pt-BR">dormir</span></td><td><span class="fi">nukuin</span></td><td><span class="fi">nukkui</span></td></tr>
  <tr><td><span class="fi">herätä</span><span class="kaannos" lang="pt-BR">acordar</span></td><td><span class="fi">heräsin</span></td><td><span class="fi">heräsi</span></td></tr>
</table>
<p>Um <span class="fi pala">-i-</span> antes da terminação; eu e você com a consoante fraca (<span class="fi">nukuin</span>), ele com a forte (<span class="fi">nukkui</span>). Quando: <span class="fi">eilen, aamulla, viime viikolla, kaksi päivää sitten</span>.</p>`
    },
    {
      id: 'kertaus-kasky-te', otsikko: 'Ordens para vocês (lição 14)', taso: 'revisão', hakuosa: 'h-imperatiivi', treeni: ['t14-kasky-te', 't14-kielto-te'],
      html: `
<table class="taivutus">
  <tr><th>para você</th><th>para vocês</th><th>vocês, não!</th></tr>
  <tr><td><span class="fi">Nuku!</span><span class="kaannos" lang="pt-BR">durma!</span></td><td><span class="fi">Nukkukaa!</span><span class="kaannos" lang="pt-BR">durmam!</span></td><td><span class="fi">Älkää nukkuko!</span><span class="kaannos" lang="pt-BR">não durmam!</span></td></tr>
  <tr><td><span class="fi">Odota!</span><span class="kaannos" lang="pt-BR">espere!</span></td><td><span class="fi">Odottakaa!</span><span class="kaannos" lang="pt-BR">esperem!</span></td><td><span class="fi">Älkää odottako!</span><span class="kaannos" lang="pt-BR">não esperem!</span></td></tr>
  <tr><td><span class="fi">Tule!</span><span class="kaannos" lang="pt-BR">venha!</span></td><td><span class="fi">Tulkaa!</span><span class="kaannos" lang="pt-BR">venham!</span></td><td><span class="fi">Älkää tulko!</span><span class="kaannos" lang="pt-BR">não venham!</span></td></tr>
</table>
<p>A ordem para vocês usa o radical do infinitivo, com a consoante forte: <span class="fi">Odottakaa!</span>, mas <span class="fi">Odota!</span></p>`
    },
    {
      id: 'kertaus-postpositiot', otsikko: 'Posposições e direções (lição 14)', taso: 'revisão', hakuosa: 'h-postpositiot', treeni: ['t14-postpositiot', 't14-suunnat'],
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">ikkunan vieressä</span></td><td>ao lado da janela</td></tr>
  <tr><td><span class="fi">kaupan edessä</span></td><td>na frente da loja</td></tr>
  <tr><td><span class="fi">Hiiden luona</span></td><td>na casa do Hiisi</td></tr>
  <tr><td><span class="fi">keskustan kautta</span></td><td>pelo centro</td></tr>
  <tr><td><span class="fi">Käänny oikealle!</span></td><td>vire à direita!</td></tr>
</table>
<p>O lugar vai no genitivo <span class="fi pala">-n</span>, e a posposição vem depois: <span class="fi">kaupan edessä</span>, nunca “edessä kauppa”.</p>`
    },
    {
      id: 'kertaus-kielto-imperfekti', otsikko: 'O passado negativo: en + particípio (lição 15)', taso: 'revisão', hakuosa: 'h-imperfekti', treeni: ['t15-kielto-imperfekti', 't15-partisiippi'],
      html: `
<table class="taivutus">
  <tr><th>passado</th><th>passado negativo</th><th>português</th></tr>
  <tr><td><span class="fi">nukuin</span></td><td><span class="fi">en nukkunut</span></td><td>dormi · não dormi</td></tr>
  <tr><td><span class="fi">sanoit</span></td><td><span class="fi">et sanonut</span></td><td>você disse · você não disse</td></tr>
  <tr><td><span class="fi">ostimme</span></td><td><span class="fi">emme ostaneet</span></td><td>compramos · não compramos</td></tr>
  <tr><td><span class="fi">he söivät</span></td><td><span class="fi">he eivät syöneet</span></td><td>eles comeram · eles não comeram</td></tr>
</table>
<p>O verbo de negação leva a pessoa (<span class="fi">en, et, ei, emme, ette, eivät</span>); o particípio só tem número: <span class="fi pala">-nut/-nyt</span> no singular, <span class="fi pala">-neet</span> no plural, com a consoante forte (<span class="fi">nukkunut</span>). O objeto vai no partitivo: <span class="fi">Emme ostaneet maljakkoa.</span></p>`
    },
    {
      id: 'kertaus-konditionaali', otsikko: 'Eu gostaria: o condicional educado (lição 15)', taso: 'revisão', hakuosa: 'h-konditionaali', treeni: ['t15-konditionaali'],
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Haluaisin kahvia.</span></td><td>Eu queria café.</td></tr>
  <tr><td><span class="fi">Voisitko lähettää kuvan?</span></td><td>Você poderia mandar uma foto?</td></tr>
  <tr><td><span class="fi">Olisi mukava nähdä lunta.</span></td><td>Seria bom ver neve.</td></tr>
  <tr><td><span class="fi">Saisinko kahvia?</span></td><td>Poderia me dar um café?</td></tr>
</table>
<p>Radical + <span class="fi pala">-isi-</span> + a terminação de pessoa: <span class="fi">haluan → haluaisin</span>, <span class="fi">voit → voisit</span>, <span class="fi">on → olisi</span>. Para pedir, nunca o passado: <span class="fi">halusin</span> = eu quis.</p>`
    },
    {
      id: 'kertaus-paikallissijat', otsikko: 'Os seis casos de lugar: os tentáculos do kraken (lições 6, 7 e 10)', taso: 'revisão', hakuosa: 'h-paikallissijat', treeni: ['t06-missa', 't06-mista', 't06-mihin', 't07-ulko', 't10-henkilot'],
      html: `
<table class="taivutus">
  <tr><th>pergunta</th><th>dentro</th><th>fora, pessoa</th></tr>
  <tr><td><span class="fi">missä?</span><span class="kaannos" lang="pt-BR">onde?</span></td><td><span class="fi">kaupassa</span></td><td><span class="fi">aukiolla</span></td></tr>
  <tr><td><span class="fi">mistä?</span><span class="kaannos" lang="pt-BR">de onde?</span></td><td><span class="fi">kaupasta</span></td><td><span class="fi">Purjolta</span></td></tr>
  <tr><td><span class="fi">mihin?</span><span class="kaannos" lang="pt-BR">para onde?</span></td><td><span class="fi">kauppaan</span></td><td><span class="fi">Purjolle</span></td></tr>
</table>
<p>Dentro com a forma fraca em <span class="fi pala">-ssa</span> e <span class="fi pala">-sta</span> (<span class="fi">kaupassa</span>), forte no ilativo (<span class="fi">kauppaan</span>). É isso que o <span class="fi">Paikallissijojen kraken</span> pergunta na luta.</p>`
    }
  ]
});
