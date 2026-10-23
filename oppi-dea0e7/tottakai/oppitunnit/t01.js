/* Tottakai, lição 1: videopuhelu Jayn perheelle (Passon jakso 1 Maian näkökulmasta). Oma materiaali, ei kirjan tekstiä.
   Kaksi osaa omina sivuinaan (TYONKULKU 11–15, auditointi 5 C3; kirjoitettu uudelleen 17.10.2026):
   A (#t01) = dialogi (14 repliikkiä), Frases prontas, sanasto, ääntäminen, tehtävät 1–3;
   B (#t01-b) = kielioppi, tehtävät 4–9, kulttuuri, Na rua, kotitehtävä, itsearvio.
   Kaikki puhuvat kirjakieltä (puhekieltä enintään noin 10 %, vain Na rua -nurkassa). Hiisi on Passon Kouvonen; Hiiden
   autovitsi siirtyi pois (oppitunti 5: Hiidellä on auto). Maian virhe: Purjo → ”Purju” (portugalin painoton loppu-o
   ääntyy u:na; merkitty data-hairio ja <span class="pala">, ei kuplaa). Omistusliitteitä (nimeni) ei opeteta eikä
   mainita (käyttäjä 17.10.2026). Sanat ovat leksikossa tottakai/sanasto/t01.js (sopimus tottakai/sanasto/README.md). */
Kurssi.lisaa({
  id: 't01',
  lyhyt: '1',
  jakso: 'Lição 1',
  otsikko: 'Apresentar-se: o verbo olla e os pronomes',
  lahde: 'Tema: apresentar-se, nacionalidade, de onde você é · Gramática: olla, pronomes pessoais, perguntas com -ko/-kö, negação (en ole) · Pronúncia: sons longos e curtos, acento na primeira sílaba',
  aiheet: ['tervehdys', 'ihmiset', 'paikka', 'kysymys'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga brasileira, estuda finlandês' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo finlandês, o professor de finlandês da Maia' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay, aposentada, um pouco ansiosa e muito carinhosa' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; dirige como se as regras fossem para os outros' }
  },

  // Uudet sanat (moi, kiitos, anteeksi, kyllä ovat oppitunnin 0 sanoja; ei on tässä, koska kielto on tämän oppitunnin kielioppia).
  sanasto: [
    'minä', 'sinä', 'hän', 'me', 'te', 'he', 'olla', 'ei',
    'hei', 'hyvää päivää', 'hauska tavata', 'kiitos paljon', 'tervetuloa',
    'suomalainen', 'brasilialainen', 'geologi', 'äiti', 'veli', 'Suomi', 'Brasilia',
    'kuka', 'mistä', 'täällä', 'siellä', 'myös', 'nyt'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Diálogo e pronúncia',
      html: `
<ul class="tavoitteet">
  <li>Você sabe se apresentar e dizer de onde é: <span class="fi">Minä olen Maia. Olen Brasiliasta.</span></li>
  <li>Você conhece o verbo <span class="fi">olla</span> (ser e estar) e os pronomes pessoais: <span class="fi">minä olen, sinä olet, hän on</span>…</li>
  <li>Você sabe fazer uma pergunta com <span class="fi pala">-ko</span> / <span class="fi pala">-kö</span> e responder <span class="fi">Olen.</span> ou <span class="fi">En ole.</span></li>
  <li>Você ouve a diferença entre som curto e longo: <span class="fi">tuli</span>, <span class="fi">tuuli</span>, <span class="fi">tulli</span>.</li>
</ul>
<p data-paikka="hameentie-marraskuu">Helsinque, novembro, domingo. São quatro da tarde e já está escuro. Maia chegou de Belo Horizonte há poucas semanas e estudou finlandês a semana inteira. Hoje é o grande dia: a mãe e o irmão do Jay vão ligar por vídeo. Eles não falam português, e o inglês da Purjo é “só para emergências”.</p>

<section class="osio" data-paikka="hameentie-marraskuu">
  <h2>Diálogo: Hauska tavata!</h2>
  <p class="ohje">Ouça o diálogo inteiro primeiro, sem tradução. A Maia comete um erro bem brasileiro: você percebe qual? Depois ouça de novo com a <b>Tradução</b> ligada (botão no alto da página).</p>
  <div class="videopuhelu" data-dialogi="t01-dialogi" data-soittaja="Äiti" data-heidan="purjo,hiisi" data-meidan="maia,jay"
       data-heidan-tausta="toolonlahti" data-meidan-tausta="sornainen-kurvi" data-heidan-aika="Töölönlahti · 16.00" data-meidan-aika="Helsinki · 16.00"></div>
  <div class="kpl" id="t01-dialogi" data-nimi="Ouvir o diálogo">
    <figure class="tarinakuva" data-tarinakuva="t01-1" data-alt="Desenho: num domingo escuro de novembro, a Maia e o Jay, vistos de costas no sofá, fazem uma videochamada no notebook com a mãe e o irmão do Jay, e pela janela se veem prédios iluminados e uma vela no parapeito."></figure>
    <p class="s" data-h="purjo" data-pt="Alô? Jay? Você está aí?">Haloo? Jay? <span data-l="olla#2">Oletko</span> sinä siellä?</p>
    <p class="s" data-h="jay" data-pt="Oi, mãe! Estou aqui. E a Maia também está aqui.">Hei, äiti! <span data-l="olla#2">Olen</span> täällä. Ja Maia <span data-l="olla#2">on</span> myös täällä.</p>
    <p class="s" data-h="maia" data-pt="Bom dia! Eu sou a Maia. Prazer em conhecer. (formal demais para a sogra)">Hyvää päivää! Minä olen Maia. Hauska tavata.</p>
    <p class="s" data-h="purjo" data-pt="Ah, oi, Maia! Eu sou a Purjo, a mãe do Jay.">Voi, hei Maia! Minä olen Purjo, Jayn äiti.</p>
    <p class="s" data-h="maia" data-hairio="Purju → Purjo" data-pt="Prazer, Purju! (errado: Purjo)">Hauska tavata, <span class="pala">Purju</span>!</p>
    <p class="s" data-h="hiisi" data-pt="Purju! Haha! Mãe, agora você é a Purju!"><span class="pala">Purju</span>! Hahaa! Äiti, sinä olet nyt <span class="pala">Purju</span>!</p>
    <p class="s" data-h="jay" data-pt="Maia, a mãe não é Purju. Ela é Purjo!">Maia, äiti ei ole <span class="pala">Purju</span>. Hän on Purjo!</p>
    <p class="s" data-h="maia" data-pt="Desculpa, Purjo!">Anteeksi, Purjo!</p>
    <p class="s" data-h="hiisi" data-pt="Eu sou o Hiisi, o irmão do Jay. Você é finlandesa? (brincando)">Minä olen Hiisi, Jayn veli. Oletko sinä suomalainen?</p>
    <p class="s" data-h="maia" data-pt="Não sou. Sou brasileira, de Belo Horizonte.">En ole. Olen brasilialainen, Belo Horizontesta.</p>
    <p class="s" data-h="purjo" data-pt="Você também é geóloga?">Oletko sinä myös geologi?</p>
    <p class="s" data-h="maia" data-pt="Sou. O Jay é geólogo, e eu também sou geóloga. O mesmo trabalho!">Olen. Jay on geologi, ja minä olen myös geologi. Sama työ!</p>
    <figure class="tarinakuva" data-tarinakuva="t01-2" data-alt="Desenho: a tela do notebook mostra a Purjo acenando com uma bandeirinha da Finlândia e o Hiisi acenando, com a baía de Töölönlahti na janela atrás deles e, no canto da tela, a imagem pequena da Maia e do Jay."></figure>
    <p class="s" data-h="purjo" data-pt="Bem-vinda à Finlândia, Maia!">Tervetuloa Suomeen, Maia!</p>
    <p class="s" data-h="maia" data-pt="Obrigada! Muito obrigada!">Kiitos! Kiitos paljon!</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Decore estas como blocos. A gramática delas vem depois; por enquanto, basta saber o que querem dizer.</p>
    <ul>
      <li><span class="fi">Hyvää päivää!</span> = bom dia, boa tarde (formal) · é partitivo, que começa na lição 3</li>
      <li><span class="fi">Jayn äiti</span>, <span class="fi">Jayn veli</span> = a mãe do Jay, o irmão do Jay · “de quem?”, lição 5</li>
      <li><span class="fi">Olen Belo Horizontesta.</span> = sou de Belo Horizonte · “de onde?”, lição 6</li>
      <li><span class="fi">Tervetuloa Suomeen!</span> = bem-vinda à Finlândia · “para onde?”, lição 6</li>
      <li><span class="fi">Hauska tavata!</span> = prazer em conhecer · <span class="fi">tavata</span> é um verbo do tipo 4, lição 7</li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="hameentie-marraskuu">
  <h2>Exercícios: o diálogo</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Quem é quem no diálogo?</h3>
    <p class="ohje">Responda pelo diálogo. <span class="fi">Kuka?</span> = quem?</p>
    <div class="valinta" data-sanakuva="aiti" data-oikea="Purjo">
      <p class="kysymys"><span class="fi">Kuka on Jayn äiti?</span></p>
      <div class="vaihtoehdot"><button type="button">Purjo</button><button type="button">Hiisi</button><button type="button">Maia</button></div>
    </div>
    <div class="valinta" data-sanakuva="veli" data-oikea="Hiisi">
      <p class="kysymys"><span class="fi">Kuka on Jayn veli?</span></p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">Hiisi</button><button type="button">Purjo</button></div>
    </div>
    <div class="valinta" data-sanakuva="brasilialainen" data-oikea="Maia">
      <p class="kysymys"><span class="fi">Kuka on brasilialainen?</span></p>
      <div class="vaihtoehdot"><button type="button">Hiisi</button><button type="button">Purjo</button><button type="button">Maia</button></div>
    </div>
    <div class="valinta" data-sanakuva="geologi" data-oikea="Maia">
      <p class="kysymys"><span class="fi">Kuka on geologi, niin kuin Jay?</span></p>
      <div class="vaihtoehdot"><button type="button">Maia</button><button type="button">Purjo</button><button type="button">Hiisi</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="helsingin-kaupunginosat">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="Quem? Pronomes" data-sanat="minä,sinä,hän,me,te,he"></div>
  <div class="teema" data-otsikko="Cumprimentos" data-sanat="moi,hei,hyvää päivää,hauska tavata,kiitos,kiitos paljon,anteeksi,tervetuloa"></div>
  <div class="teema" data-otsikko="Quem é você?" data-sanat="suomalainen,brasilialainen,geologi,äiti,veli,Suomi,Brasilia"></div>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsingin-kaupunginosat">
  <h2>Exercícios: os pronomes</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Ligue o pronome à tradução</h3>
    <ul class="yhdista">
      <li data-pari="eu" data-sanakuva="mina">minä</li>
      <li data-pari="você" data-sanakuva="sina">sinä</li>
      <li data-pari="ele, ela" data-sanakuva="han">hän</li>
      <li data-pari="nós" data-sanakuva="me">me</li>
      <li data-pari="vocês" data-sanakuva="te">te</li>
      <li data-pari="eles, elas" data-sanakuva="he">he</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>Pronúncia: curto ou longo</h2>
  <p>Em finlandês, <b>o comprimento do som muda o sentido</b> da palavra. Letra dobrada = som longo, mais ou menos o dobro do tempo. Isso vale para vogais (<span class="fi">tuuli</span>) e para consoantes (<span class="fi">tulli</span>). Em português o comprimento não muda nada, por isso o ouvido brasileiro precisa de treino. Ouça os pares e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="fogo">tuli</li>
    <li class="s" data-pt="vento">tuuli</li>
    <li class="s" data-pt="alfândega">tulli</li>
    <li class="s" data-pt="quem">kuka</li>
    <li class="s" data-pt="flor">kukka</li>
    <li class="s" data-pt="minhoca">mato</li>
    <li class="s" data-pt="tapete">matto</li>
    <li class="s" data-pt="competição">kisa</li>
    <li class="s" data-pt="gato">kissa</li>
  </ul>
  <div class="saanto">
    <h3>Consoante dupla: uma pausa curtinha</h3>
    <p>Em <span class="fi pala">kk</span>, <span class="fi pala">pp</span> e <span class="fi pala">tt</span>, a boca fecha e <b>segura um instante</b> antes de soltar: <span class="fi pala">mat…to</span>, <span class="fi pala">kuk…ka</span>. Parece o “pizza” do italiano. Em <span class="fi pala">ll</span>, <span class="fi pala">mm</span>, <span class="fi pala">nn</span>, <span class="fi pala">ss</span>, o som simplesmente <b>dura mais</b>: <span class="fi pala">kis-sa</span>. Cuidado: o “rr” e o “ss” do português são curtos; os do finlandês são longos de verdade.</p>
  </div>
  <div class="saanto">
    <h3>Acento sempre na primeira sílaba</h3>
    <p>Toda palavra finlandesa tem o acento na <b>primeira sílaba</b>, sem exceção: <span class="fi pala">PUR-jo</span>, <span class="fi pala">HII-si</span>, <span class="fi pala">HEL-sin-ki</span> e até <span class="fi pala">BRA-si-li-a</span> (não bra-ZI-li-a). Nem palavra comprida muda isso: <span class="fi pala">TER-ve-tu-lo-a</span>.</p>
  </div>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> em português, o o final sem acento vira u (“Paulo” = “Paulu”). Em finlandês, <b>toda vogal soa sempre igual</b>, também no fim: <span class="fi">Purjo</span> termina em o. Por isso a Purjo virou “Purju”. E o e final também fica e: <span class="fi">terve</span>, não “tervi”.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="sornainen-vaasanaukio">
  <h2>Exercícios: curto ou longo</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Ouça: curto ou longo?</h3>
    <p class="ohje">Aperte ▶ e escolha a palavra que você ouviu.</p>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="tuuli" data-oikea="tuuli">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">tuli</button><button type="button">tuuli</button><button type="button">tulli</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="kukka" data-oikea="kukka">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">kuka</button><button type="button">kukka</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="matto" data-oikea="matto">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">mato</button><button type="button">matto</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="kissa" data-oikea="kissa">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">kisa</button><button type="button">kissa</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Gramática e prática',
      html: `
<ul class="tavoitteet">
  <li>Você conjuga <span class="fi">olla</span> e nega: <span class="fi">minä olen</span>, <span class="fi">sinä et ole</span>.</li>
  <li>Você pergunta com <span class="fi pala">-ko</span> / <span class="fi pala">-kö</span> e responde com o verbo: <span class="fi">Oletko sinä suomalainen?</span> – <span class="fi">En ole.</span></li>
  <li>Você diz de onde é e onde mora: <span class="fi">Olen Brasiliasta.</span> <span class="fi">Asun Helsingissä.</span></li>
  <li>Você evita a armadilha: você = <span class="fi">sinä</span> → <span class="fi">olet</span>, não <span class="fi">on</span>.</li>
</ul>

<section class="osio" data-osa="gramatica" data-paikka="helsingin-kaupunginosat">
  <h2>Gramática 1 · Pronomes e o verbo olla (ser e estar)</h2>
  <p>O finlandês tem um verbo só para “ser” e “estar”: <span class="fi">olla</span>. O fim do verbo mostra a pessoa, como no português (sou, é, somos…). Para negar, existe um <b>verbo de negação</b> que muda com a pessoa (<span class="fi">en, et, ei, emme, ette, eivät</span>); depois dele, <span class="fi">olla</span> fica sempre <span class="fi">ole</span>.</p>
  <table class="taivutus">
    <tr><th>afirmativo</th><th>negativo</th><th>português</th></tr>
    <tr><td><span class="fi">minä olen</span></td><td><span class="fi">minä en ole</span></td><td>eu sou, estou · não sou</td></tr>
    <tr><td><span class="fi">sinä olet</span></td><td><span class="fi">sinä et ole</span></td><td>você é, está · não é</td></tr>
    <tr><td><span class="fi">hän on</span></td><td><span class="fi">hän ei ole</span></td><td>ele, ela é, está · não é</td></tr>
    <tr><td><span class="fi">me olemme</span></td><td><span class="fi">me emme ole</span></td><td>nós somos, estamos · não somos</td></tr>
    <tr><td><span class="fi">te olette</span></td><td><span class="fi">te ette ole</span></td><td>vocês são, estão · não são</td></tr>
    <tr><td><span class="fi">he ovat</span></td><td><span class="fi">he eivät ole</span></td><td>eles, elas são, estão · não são</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-pt="Eu sou a Maia.">Minä olen Maia.</li>
    <li class="s" data-pt="A mãe não é Purju.">Äiti ei ole <span class="pala">Purju</span>.</li>
    <li class="s" data-pt="Nós estamos aqui.">Me <span data-l="olla#2">olemme</span> täällä.</li>
  </ul>
  <div class="muista">
    <p><b>Lembre:</b> <span class="fi">hän</span> é ao mesmo tempo “ele” e “ela”. O finlandês não tem gênero: nem nos pronomes, nem nas profissões. <span class="fi">Maia on geologi</span> e <span class="fi">Jay on geologi</span>: a mesma palavra. E o pronome pode cair, porque o fim do verbo já diz a pessoa: <span class="fi">Olen täällä.</span> = <span class="fi">Minä olen täällä.</span></p>
  </div>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> “você” usa o verbo da 3ª pessoa no português (você <b>é</b>), mas <span class="fi">sinä</span> é a 2ª pessoa: <span class="fi">sinä olet</span>, nunca <span class="fi pala">sinä on</span>. E “a gente” é <span class="fi">me</span>: a gente está aqui = <span class="fi">me olemme täällä</span>, não <span class="fi pala">me on</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsingin-kaupunginosat">
  <h2>Exercícios: olla</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Complete com olla</h3>
    <p class="ohje">Escreva a forma de <span class="fi">olla</span>: <span class="fi">olen, olet, on, olemme, olette, ovat</span>; na última frase, a negação. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Minä <span class="aukko" data-oikea="olen"></span> Maia.</p>
      <p>Sinä <span class="aukko" data-oikea="olet"></span> brasilialainen.</p>
      <p>Jay <span class="aukko" data-oikea="on"></span> geologi.</p>
      <p>Me <span class="aukko" data-oikea="olemme"></span> Maia ja Jay.</p>
      <p>Te <span class="aukko" data-oikea="olette"></span> Purjo ja Hiisi.</p>
      <p>Purjo ja Hiisi <span class="aukko" data-oikea="ovat"></span> siellä.</p>
      <p><span class="aukko" data-oikea="Oletko"></span> sinä geologi?</p>
      <p>Hiisi <span class="aukko" data-oikea="ei ole"></span> brasilialainen. <span lang="pt-BR">(não)</span></p>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="vaasankatu-muraali">
  <h2>Gramática 2 · Perguntas e respostas curtas</h2>
  <h3>Pergunta: o verbo vai para a frente e ganha -ko ou -kö</h3>
  <p>Para perguntar “sim ou não”, ponha o verbo no começo e cole <span class="fi pala">-ko</span> ou <span class="fi pala">-kö</span> nele. Não é preciso mudar a entonação: a pergunta já está na palavra.</p>
  <ul class="esim">
    <li class="s" data-pt="Você está aí?"><span data-l="olla#2">Oletko</span> sinä siellä?</li>
    <li class="s" data-pt="A Maia é geóloga?">Onko Maia geologi?</li>
    <li class="s" data-pt="Vocês estão aqui?"><span data-l="olla#2">Oletteko</span> te täällä?</li>
  </ul>
  <p><b>-ko ou -kö?</b> Se a palavra tem <span class="fi pala">a</span>, <span class="fi pala">o</span> ou <span class="fi pala">u</span>, use <span class="fi pala">-ko</span> (<span class="fi">olet<b>ko</b></span>, <span class="fi">on<b>ko</b></span>). Se só tem <span class="fi pala">ä</span>, <span class="fi pala">ö</span>, <span class="fi pala">y</span>, <span class="fi pala">e</span>, <span class="fi pala">i</span>, use <span class="fi pala">-kö</span>: <span class="fi">tiedätkö</span> (você sabe?), <span class="fi">ymmärrätkö</span> (você entende?). Isso se chama harmonia vocálica e aparece em todo o finlandês.</p>

  <h3>Resposta curta: repita o verbo</h3>
  <p>A resposta mais natural <b>repete o verbo</b> na pessoa certa: <span class="fi">Oletko sinä geologi? – Olen.</span> ou <span class="fi">En ole.</span> As palavras <span class="fi">kyllä</span> (sim) e <span class="fi">ei</span> (não) sozinhas existem, mas soam curtas ou formais; o verbo repetido é o jeito normal de responder.</p>
  <ul class="esim">
    <li class="s" data-pt="Você está aí? – Estou."><span data-l="olla#2">Oletko</span> sinä siellä? – <span data-l="olla#2">Olen</span>.</li>
    <li class="s" data-pt="Você é finlandesa? – Não. Sou brasileira.">Oletko sinä suomalainen? – En ole. Olen brasilialainen.</li>
    <li class="s" data-pt="O Hiisi é brasileiro? – Não.">Onko Hiisi brasilialainen? – Ei ole.</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="sornainen-vaasanaukio">
  <h2>Exercícios: perguntas e respostas</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Ditado</h3>
    <p class="ohje">Ouça e escreva.</p>
    <div class="sanelu" data-puhu="Minä olen Maia."></div>
    <div class="sanelu" data-puhu="Oletko sinä suomalainen?"></div>
    <div class="sanelu" data-puhu="En ole."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Responda com o verbo</h3>
    <p class="ohje">Escolha a resposta curta certa.</p>
    <div class="valinta" data-sanakuva="sina" data-oikea="Olen.">
      <p class="kysymys" data-ei-kuplaa><span class="fi">Oletko sinä Maia?</span> (Você é a Maia.)</p>
      <div class="vaihtoehdot"><button type="button">Olen.</button><button type="button">On.</button><button type="button">Olet.</button></div>
    </div>
    <div class="valinta" data-sanakuva="brasilialainen" data-oikea="Ei ole.">
      <p class="kysymys" data-ei-kuplaa><span class="fi">Onko Hiisi brasilialainen?</span></p>
      <div class="vaihtoehdot"><button type="button">En ole.</button><button type="button">Ei ole.</button><button type="button">On.</button></div>
    </div>
    <div class="valinta" data-sanakuva="suomalainen" data-oikea="En ole.">
      <p class="kysymys" data-ei-kuplaa><span class="fi">Oletko sinä suomalainen?</span> (Você é brasileiro ou brasileira.)</p>
      <div class="vaihtoehdot"><button type="button">En ole.</button><button type="button">Ei ole.</button><button type="button">Olen.</button></div>
    </div>
    <div class="valinta" data-sanakuva="te" data-oikea="Olemme.">
      <p class="kysymys" data-ei-kuplaa><span class="fi"><span data-l="olla#2">Oletteko</span> te siellä?</span> (Vocês estão.)</p>
      <div class="vaihtoehdot"><button type="button">Olette.</button><button type="button">Olemme.</button><button type="button">Ovat.</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="sornainen-vaasanaukio">
  <h2>Gramática 3 · De onde? Onde? Frases prontas</h2>
  <p>Por enquanto, guarde estas frases inteiras, como se fossem uma palavra só. O porquê (os casos de lugar) vem na lição 6.</p>
  <ul class="esim">
    <li class="s" data-pt="De onde você é?">Mistä sinä olet?</li>
    <li class="s" data-pt="Sou do Brasil.">Olen Brasiliasta.</li>
    <li class="s" data-pt="Sou da Finlândia.">Olen Suomesta.</li>
    <li class="s" data-pt="Moro em Helsinque.">Asun Helsingissä.</li>
    <li class="s" data-pt="Estou em casa."><span data-l="olla#2">Olen</span> kotona.</li>
  </ul>
  <div class="huomio">
    <p><b>Sem artigo, sem gênero, sem “de”:</b> <span class="fi">Olen Brasiliasta</span> = “sou do Brasil”. O “de” está no fim da palavra (<span class="fi pala">-sta</span>). E brasileiro e brasileira são a mesma palavra: <span class="fi">brasilialainen</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="sornainen-vaasanaukio">
  <h2>Exercícios: apresentar-se</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Leia a ficha da Maia</h3>
    <p class="ohje">O Jay começou a dar aulas de finlandês para a Maia e fez uma ficha de aluna para ela. Leia e responda.</p>
    <div class="dokumentti ficha kortti-fi" lang="fi-FI">
      <div class="ficha-yla"><span class="ficha-koulu">Jayn suomen koulu</span><span class="ficha-otsikko">Oppilaskortti</span></div>
      <div class="ficha-foto" data-hahmo="maia"></div>
      <dl>
        <dt>Nimi</dt><dd>Maia</dd>
        <dt>Kansalaisuus</dt><dd>brasilialainen</dd>
        <dt>Kotikaupunki</dt><dd>Belo Horizonte</dd>
        <dt>Asuinpaikka</dt><dd>Helsinki</dd>
        <dt>Ammatti</dt><dd>geologi</dd>
        <dt>Kielet</dt><dd>portugali, englanti, espanja, suomi (vähän)</dd>
        <dt>Opettaja</dt><dd>Jay</dd>
      </dl>
      <p class="ficha-huom">Ahkera oppilas. Kysyy paljon!</p>
    </div>
    <div class="valinta" data-sanakuva="olankohautus" data-oikea="Belo Horizontesta">
      <p class="kysymys"><span class="fi">Mistä Maia on?</span></p>
      <div class="vaihtoehdot"><button type="button">Helsingistä</button><button type="button">Belo Horizontesta</button><button type="button">Suomesta</button></div>
    </div>
    <div class="valinta" data-sanakuva="suomalainen" data-oikea="Ei ole.">
      <p class="kysymys"><span class="fi">Onko Maia suomalainen?</span></p>
      <div class="vaihtoehdot"><button type="button">On.</button><button type="button">Ei ole.</button></div>
    </div>
    <div class="valinta" data-sanakuva="geologi" data-oikea="On.">
      <p class="kysymys"><span class="fi">Onko Maia geologi?</span></p>
      <div class="vaihtoehdot"><button type="button">On.</button><button type="button">Ei ole.</button></div>
    </div>
    <div class="valinta" data-sanakuva="opettaja" data-oikea="Jay">
      <p class="kysymys"><span class="fi">Kuka on opettaja?</span></p>
      <div class="vaihtoehdot"><button type="button">Hiisi</button><button type="button">Purjo</button><button type="button">Jay</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Traduza para o finlandês</h3>
    <p class="ohje">Escreva em finlandês. Depois compare com o modelo.</p>
    <div class="kaanna"><p class="pt">Eu sou a Maia. Sou do Brasil.</p><p class="s" data-pt="Eu sou a Maia. Sou do Brasil.">Minä olen Maia. Olen Brasiliasta.</p></div>
    <div class="kaanna"><p class="pt">Você é brasileira.</p><p class="s" data-pt="Você é brasileira.">Sinä olet brasilialainen.</p></div>
    <div class="kaanna"><p class="pt">Ele é finlandês.</p><p class="s" data-pt="Ele é finlandês.">Hän on suomalainen.</p></div>
    <div class="kaanna"><p class="pt">Você é geóloga?</p><p class="s" data-pt="Você é geóloga?">Oletko sinä geologi?</p></div>
    <div class="kaanna"><p class="pt">Não, não sou.</p><p class="s" data-pt="Não, não sou.">En ole.</p></div>
    <div class="kaanna"><p class="pt">A gente está em casa.</p><p class="s" data-pt="A gente está em casa.">Me <span data-l="olla#2">olemme</span> kotona.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda às perguntas</h3>
    <p class="ohje">Diga a resposta em voz alta antes de abrir o modelo. Os modelos são as respostas da Maia.</p>
    <details class="vastaus"><summary lang="fi-FI">Kuka sinä olet?</summary><p class="s" data-pt="Eu sou a Maia. (o seu nome)">Minä olen Maia.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mistä sinä olet?</summary><p class="s" data-pt="Sou do Brasil, de Belo Horizonte.">Olen Brasiliasta, Belo Horizontesta.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Oletko sinä suomalainen?</summary><p class="s" data-pt="Não. Sou brasileira.">En ole. Olen brasilialainen.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Oletko sinä geologi?</summary><p class="s" data-pt="Sou. (ou: Não sou.)">Olen.</p></details>
    <details class="vastaus"><summary lang="fi-FI"><span data-l="olla#2">Oletko</span> sinä kotona?</summary><p class="s" data-pt="Estou. Estou em casa."><span data-l="olla#2">Olen</span>. Minä <span data-l="olla#2">olen</span> kotona.</p></details>
  </div>
</section>

<aside class="kulttuuri" data-paikka="sornainen-vaasanaukio">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Moi, hei, terve: como os finlandeses se cumprimentam</h3>
  <figure class="kuva" data-kuva="sornainen-vaasanaukio">
    <span class="huuto" data-x="18" data-y="30" data-aani="nainen" data-vaihto="5" data-pt="oi (o mais comum)">Moi!</span>
    <span class="huuto" data-x="46" data-y="16" data-aani="mies" data-vaihto="7" data-pt="salve">Terve!</span>
    <span class="huuto" data-x="76" data-y="28" data-aani="nainen" data-vaihto="5" data-pt="oi, tchau (carinhoso)">Moikka!</span>
    <span class="huuto" data-x="30" data-y="54" data-aani="mies" data-vaihto="7" data-pt="e aí (bem informal)">Morjens!</span>
    <span class="huuto" data-x="68" data-y="56" data-aani="nainen" data-vaihto="5" data-pt="tchau">Hei hei!</span>
  </figure>
  <p>O cumprimento mais comum é <span class="fi">moi</span>, seguido de <span class="fi">hei</span>. Os dois servem para chegar e para ir embora. <span class="fi">Hyvää päivää</span> existe, mas soa formal, como num banco ou numa carta. Por isso a Purjo sorriu quando a Maia disse <span class="fi">Hyvää päivää!</span> para a futura sogra.</p>
  <p>Na Finlândia todo mundo se trata por <b>você</b> (<span class="fi">sinä</span>), até o chefe e a sogra, e pelo primeiro nome. Não existe “dona Purjo” nem “seu Hiisi”. Apelidos são comuns: o irmão do Jay é “Hiisi” para todo mundo, até para a mãe. Na mitologia finlandesa, um <span class="fi">hiisi</span> é um espírito travesso da floresta.</p>
  <p>Beijo no rosto não é costume. Um aceno de cabeça ou um aperto de mão basta. Abraço, só entre amigos próximos.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Mä oon, sä oot: o finlandês da rua</h3>
  <p>No diálogo, todos falam a <b>língua padrão</b> (<span class="fi">kirjakieli</span>), a dos livros, das notícias e dos cursos: com ela você é entendido em qualquer lugar da Finlândia. Na rua e em casa, muitos finlandeses encurtam as palavras. Você <b>não precisa</b> falar assim; só é bom <b>reconhecer</b> quando ouvir.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">minä olen</span></td><td><span class="fi">mä oon</span></td><td>eu sou</td></tr>
    <tr><td><span class="fi">sinä olet</span></td><td><span class="fi">sä oot</span></td><td>você é</td></tr>
    <tr><td><span class="fi">kyllä</span></td><td><span class="fi">joo</span></td><td>sim</td></tr>
  </table>
  <p class="s" data-kirja="Minä olen Jay." data-pt="Eu sou o Jay.">Mä oon Jay.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="sornainen-vaasanaukio">
  <h2>Lição de casa e autoavaliação</h2>
  <div class="kotitehtava" data-id="t01">
    <h3>Lição de casa</h3>
    <p><b>1.</b> Preencha a sua própria <span class="fi">oppilaskortti</span>. Escreva direto no cartão: fica salvo neste navegador.</p>
    <div class="dokumentti ficha kortti-fi oma" data-tallenna="t01-kortti" lang="fi-FI">
      <div class="ficha-yla"><span class="ficha-koulu">Jayn suomen koulu</span><span class="ficha-otsikko">Oppilaskortti</span></div>
      <div class="ficha-foto tyhja">kuva</div>
      <dl>
        <dt>Nimi</dt><dd><input name="nimi" aria-label="Nimi (nome)"></dd>
        <dt>Kansalaisuus</dt><dd><input name="kansalaisuus" aria-label="Kansalaisuus (nacionalidade)"></dd>
        <dt>Kotikaupunki</dt><dd><input name="kotikaupunki" aria-label="Kotikaupunki (cidade natal)"></dd>
        <dt>Asuinpaikka</dt><dd><input name="asuinpaikka" aria-label="Asuinpaikka (onde mora)"></dd>
        <dt>Ammatti</dt><dd><input name="ammatti" aria-label="Ammatti (profissão)"></dd>
        <dt>Kielet</dt><dd><input name="kielet" aria-label="Kielet (línguas)"></dd>
      </dl>
    </div>
    <p><b>2.</b> Escreva cinco frases para se apresentar à família do Jay: cumprimente, diga quem você é, de onde você é, a sua profissão e termine com uma pergunta para a Purjo. Depois leia em voz alta.</p>
    <details class="malli"><summary>Resposta modelo</summary>
      <p class="s" data-pt="Oi, Purjo!">Hei, Purjo!</p>
      <p class="s" data-pt="Eu sou a Maia.">Minä olen Maia.</p>
      <p class="s" data-pt="Sou do Brasil, de Belo Horizonte.">Olen Brasiliasta, Belo Horizontesta.</p>
      <p class="s" data-pt="Sou geóloga, como o Jay.">Olen geologi, niin kuin Jay.</p>
      <p class="s" data-pt="Você está em casa?"><span data-l="olla#2">Oletko</span> sinä kotona?</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t01">
    <li>Sei me apresentar e dizer de onde sou.</li>
    <li>Sei as formas de olla: olen, olet, on, olemme, olette, ovat.</li>
    <li>Sei fazer uma pergunta com -ko/-kö e responder Olen / En ole.</li>
    <li>Ouço a diferença entre tuli, tuuli e tulli.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md, kolmikerroksinen kielioppi). */
  kielioppi: [
    {
      id: 'pronominit', otsikko: 'Pronomes pessoais', taso: 'essencial', hakuosa: 'h-pronominit',
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">minä</span></td><td>eu</td></tr>
  <tr><td><span class="fi">sinä</span></td><td>você</td></tr>
  <tr><td><span class="fi">hän</span></td><td>ele, ela</td></tr>
  <tr><td><span class="fi">me</span></td><td>nós, a gente</td></tr>
  <tr><td><span class="fi">te</span></td><td>vocês</td></tr>
  <tr><td><span class="fi">he</span></td><td>eles, elas</td></tr>
</table>
<ul>
  <li><span class="fi">hän</span> = ele <b>e</b> ela. Nenhum pronome finlandês tem gênero.</li>
  <li>Não existe “o senhor, a senhora” no dia a dia: <span class="fi">sinä</span> serve para todos. <span class="fi">Te</span> como forma de respeito aparece no atendimento formal.</li>
</ul>`
    },
    {
      id: 'olla', otsikko: 'O verbo olla: afirmativo, negativo, pergunta', taso: 'essencial', hakuosa: 'h-olla', treeni: ['t01-olla', 't01-kielto'],
      html: `
<p><span class="fi">Olla</span> é “ser” e “estar” ao mesmo tempo. É irregular (<span class="fi">on</span>, <span class="fi">ovat</span>), mas as outras formas seguem o modelo de todos os verbos: radical <span class="fi pala">ole-</span> + terminação de pessoa.</p>
<div class="taivutustaulu" data-verbi="olla" data-osat="myonteinen,kielto,kysymys" data-selite="ser, estar"></div>
<p><b>Terminações de pessoa</b> (valem para quase todos os verbos): <span class="fi pala">-n</span> (eu), <span class="fi pala">-t</span> (você), — (ele, ela), <span class="fi pala">-mme</span> (nós), <span class="fi pala">-tte</span> (vocês), <span class="fi pala">-vat/-vät</span> (eles).</p>
<p><b>Negativo:</b> o verbo de negação leva a pessoa (<span class="fi">en, et, ei, emme, ette, eivät</span>), e <span class="fi">olla</span> fica <span class="fi">ole</span> em todas as pessoas.</p>`
    },
    {
      id: 'kysymys', otsikko: 'Perguntas com -ko/-kö e respostas curtas', taso: 'essencial', hakuosa: 'h-kysymys', treeni: 't01-kysymys',
      html: `
<ol>
  <li>Pegue o verbo: <span class="fi">olet</span>.</li>
  <li>Cole <span class="fi pala">-ko</span> ou <span class="fi pala">-kö</span>: <span class="fi">oletko</span>.</li>
  <li>Ponha no começo da frase: <span class="fi">Oletko sinä suomalainen?</span></li>
</ol>
<p>A resposta mais natural repete o verbo na pessoa certa. <span class="fi">Kyllä</span> e <span class="fi">ei</span> sozinhos existem, mas soam curtos ou formais.</p>
<ul class="esim">
  <li class="s" data-pt="Você é finlandês? – Sou.">Oletko sinä suomalainen? – Olen.</li>
  <li class="s" data-pt="A Maia está aí? – Está."><span data-l="olla#2">Onko</span> Maia siellä? – <span data-l="olla#2">On</span>.</li>
  <li class="s" data-pt="O Hiisi é brasileiro? – Não.">Onko Hiisi brasilialainen? – Ei ole.</li>
</ul>`
    },
    {
      id: 'vokaalisointu', otsikko: 'Harmonia vocálica: por que -ko e -kö', taso: 'básico', hakuosa: 'h-vokaalisointu',
      html: `
<p>As vogais finlandesas se dividem em três grupos. Uma palavra simples não mistura o grupo de trás com o da frente.</p>
<table class="taivutus">
  <tr><th>grupo</th><th>vogais</th><th>terminação</th></tr>
  <tr><td>de trás</td><td><span class="fi pala">a, o, u</span></td><td><span class="fi pala">-ko, -ssa, -sta</span></td></tr>
  <tr><td>da frente</td><td><span class="fi pala">ä, ö, y</span></td><td><span class="fi pala">-kö, -ssä, -stä</span></td></tr>
  <tr><td>neutras</td><td><span class="fi pala">e, i</span></td><td>vão com qualquer grupo; sozinhas, pedem o da frente</td></tr>
</table>
<ul class="esim">
  <li class="s" data-pt="você é? (o)">oletko</li>
  <li class="s" data-pt="você sabe? (só ä, e, i)">tiedätkö</li>
  <li class="s" data-pt="do Brasil (a)">Brasiliasta</li>
  <li class="s" data-pt="em Helsinque (só e, i)">Helsingissä</li>
</ul>`
    },
    {
      id: 'pituus', otsikko: 'Pronúncia: sons longos, sons curtos', taso: 'essencial', hakuosa: 'h-pituus', treeni: 't01-pituus',
      html: `
<p>Letra dobrada = som dobrado. É a regra mais importante da pronúncia finlandesa, porque muda o sentido.</p>
<ul class="esim">
  <li class="s" data-pt="fogo">tuli</li>
  <li class="s" data-pt="vento">tuuli</li>
  <li class="s" data-pt="alfândega">tulli</li>
  <li class="s" data-pt="quem">kuka</li>
  <li class="s" data-pt="flor">kukka</li>
  <li class="s" data-pt="gato">kissa</li>
</ul>
<p>Pesquisas com estudantes de finlandês mostram que <b>ouvir</b> a diferença vem antes de <b>produzir</b>. Por isso: ouça muito, depois repita. Grave a sua voz e compare.</p>`
    },
    {
      id: 'mista', otsikko: 'De onde você é? Expressões prontas', taso: 'frase pronta', hakuosa: 'h-paikallissijat',
      html: `
<p>Por enquanto, decore como blocos. O sistema (os casos de lugar) chega na lição 6.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Mistä sinä olet?</span></td><td>De onde você é?</td></tr>
  <tr><td><span class="fi">Olen Brasiliasta.</span></td><td>Sou do Brasil.</td></tr>
  <tr><td><span class="fi">Olen Suomesta.</span></td><td>Sou da Finlândia.</td></tr>
  <tr><td><span class="fi">Asun Helsingissä.</span></td><td>Moro em Helsinque.</td></tr>
  <tr><td><span class="fi"><span data-l="olla#2">Olen</span> kotona.</span></td><td>Estou em casa.</td></tr>
  <tr><td><span class="fi">Tervetuloa Suomeen!</span></td><td>Bem-vindo à Finlândia!</td></tr>
</table>
<p>Repare no fim da palavra: <span class="fi pala">-sta/-stä</span> = de (dentro de), <span class="fi pala">-ssa/-ssä</span> = em, <span class="fi pala">-aan, -oon, -iin…</span> = para. Em vez de preposição antes, o finlandês usa terminação depois.</p>`
    },
    {
      id: 'sudenkuopat', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção',
      html: `
<ul>
  <li><b>Vogal final reduzida:</b> <span class="fi">Purjo</span>, não “Purju”; <span class="fi">terve</span>, não “tervi”. Toda vogal soa igual em qualquer posição.</li>
  <li><b>Acento:</b> sempre na primeira sílaba: <span class="fi pala">BRA-si-li-a-lai-nen</span>.</li>
  <li><b>Você = sinä, 2ª pessoa:</b> “você é” = <span class="fi">sinä olet</span>, não <span class="fi pala">sinä on</span>. O português usa a 3ª pessoa com “você”; o finlandês, não.</li>
  <li><b>A gente = me:</b> “a gente está aqui” = <span class="fi">me olemme täällä</span>, não <span class="fi pala">me on</span>.</li>
  <li><b>Artigo e gênero:</b> não existem. “O Jay é finlandês, a Maia é brasileira” = <span class="fi">Jay on suomalainen, Maia on brasilialainen.</span></li>
  <li><b>Sim e não:</b> <span class="fi">kyllä</span> ou <span class="fi">ei</span> sozinhos soam curtos ou formais. O natural é repetir o verbo: <span class="fi">Olen. / En ole.</span></li>
</ul>`
    }
  ]
});
