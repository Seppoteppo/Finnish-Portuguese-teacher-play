/* Tottakai, kertaus 1 (k01): Kapybaran kylpylä, oppitunnit 1–5 (SUUNNITELMA §2 K1 ja §6 R1–R4; PELILLISTAMINEN §4).
   Oma materiaali, ei kirjan tekstiä. Kertaus ei opeta uutta kielioppia; vähintään 95 % sanoista on opetettu
   oppitunneilla 0–5 (tarkistus: node tottakai/tools/puuttuvat.js k01). Kaksi osaa omina sivuinaan (TYONKULKU 11):
   - osa A (#k01): Kapybaran ja Manaatin kylpyläkohtaus portugaliksi, uusi dialogi (14 repliikkiä, Maia tapaa Purjon ja
     Hiiden Hakaniemen kauppahallissa), Frases prontas, Perguntas-laatikko (kaikki kysymyssanat), tehtävät 1–6
     (olla ja -ko/-kö, chat, verbityypit 1–3, kuuntelukoe paljain muodoin, partitiivi/omistus/genetiivi, keskustelu),
     Na rua -tunnistus (tehtävä 7, vain tunnistus, ≤ 10 %), kotitehtävä ja ”Eu sei”-lista (oppituntien itsearviot).
   - osa B (#k01-b): esittely (Capivara ja Peixe-boi pyytävät Maiaa avuksi ja antavat taistelulasit, .pomo-lahja),
     lämmittely (tehtävä 8) ja pomotaistelu Partitiivipeto (assets/pomo.js), kulttuuri.
   Kuuntelukoe (TYONKULKU 14): äänitteessä vain paljas muoto, ei vastauksen paljastavaa sanaa. Ilman suomen ääntä
   app.js näyttää ilmoituksen ja Pular-napit (auditointi 5 C2). Roolit: olemassa olevat (Purjo nainen4, Hiisi mies6,
   myyjä nainen5). Kaikki puhuvat kirjakieltä; puhekieli vain Na rua -nurkassa. */
Kurssi.lisaa({
  id: 'k01',
  lyhyt: 'R1',
  jakso: 'Revisão 1–5',
  otsikko: 'Spa do Capivara: revisão das lições 1–5',
  lahde: 'Revisão: olla, perguntas com -ko/-kö, verbos dos tipos 1–3, partitivo (números, pedidos, negativo), minulla on, genitivo, números e preços · Luta final: Partitiivipeto',
  aiheet: ['tervehdys', 'ruoka', 'raha', 'ihmiset'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga, já pede café em finlandês' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; quer pagar tudo' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; carro novo, multa nova' },
    kahvilamyyja: { nimi: 'Atendente', tyyppi: 'nainen', vaihto: 5, kuvaus: 'atendente do café do mercado' }
  },

  // Kertauksen sanasto: oppituntien 1–5 tärkeimmät sanat (ei uusia sanoja; sanastosivu ja visa).
  sanasto: [
    'olla', 'minä', 'sinä', 'hän', 'kuka', 'mistä', 'missä', 'paljonko', 'kuinka monta',
    'puhua', 'nukkua', 'ymmärtää', 'lukea', 'syödä', 'juoda', 'tulla', 'mennä', 'ostaa', 'maksaa',
    'kahvi', 'tee', 'vesi', 'pulla', 'korvapuusti', 'kakku', 'leipä', 'juusto', 'euro', 'hinta', 'yhteensä',
    'äiti', 'isä', 'veli', 'sisko', 'auto', 'sakko', 'uusi', 'vanha', 'kortti', 'aina', 'taas'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Revisão no mercado',
      html: `
<ul class="tavoitteet">
  <li>Parte A: um diálogo novo só com o que você já aprendeu, todas as palavras de pergunta, uma prova curta de escuta e seis exercícios mistos.</li>
  <li>Parte B: aquecimento e a luta final contra a <span class="fi">Partitiivipeto</span>, a fera que come a forma básica e cospe o partitivo.</li>
</ul>

<section class="osio">
  <h2>No Spa do Capivara</h2>
  <p><span class="ryhma" data-hahmot="kertoja,manaatti"></span></p>
  <p><b>Capivara:</b> Bem-vindo ao spa! Água quente, mandarina na cabeça e cinco lições para revisar. Eu lembro de todas. Quer dizer: lembro que foram cinco.</p>
  <p><b>Peixe-boi:</b> Revisão é a melhor aula. Nada de novo. Nada de novo é o meu esporte favorito.</p>
  <p><b>Capivara:</b> Primeiro a Maia encontra a Purjo e o Hiisi no mercado de Hakaniemi. Depois você mostra o que já sabe. E na parte B… vem um bicho. Um bicho que come singular e cospe partitivo.</p>
  <p><b>Peixe-boi:</b> Eu fico boiando aqui, torcendo por você. De olhos fechados, mas torcendo.</p>
</section>

<p data-paikka="hakaniemen-kauppahalli-syksy">Sábado de manhã. O Jay ficou dormindo. A Maia vai sozinha ao mercado de Hakaniemi e encontra a Purjo e o Hiisi no café do mercado. Desta vez ela não precisa do Jay: tudo o que ela diz vem das lições 1 a 5.</p>

<section class="osio" data-paikka="hakaniemen-kauppahalli-syksy">
  <h2>Diálogo: Kauppahallin kahvilassa</h2>
  <p class="ohje">Ouça primeiro sem tradução. Você conhece todas as palavras. Procure: uma pergunta com <span class="fi pala">-ko</span>, um pedido com partitivo, um preço e quem tem o quê.</p>
  <div class="kpl" id="k01-dialogi" data-nimi="Ouvir o diálogo">
    <figure class="tarinakuva" data-tarinakuva="k01-1" data-alt="Desenho: no café do mercado de Hakaniemi, a Maia, de costas, chega à mesa onde a Purjo acena sorrindo e o Hiisi, de jaqueta jeans com gola branca de pelúcia, toma café sem nenhuma expressão, com a atendente e a máquina de café ao fundo."></figure>
    <p class="s" data-h="kertoja" data-pt="No sábado, Maia, Purjo e Hiisi estão no mercado de Hakaniemi.">Lauantaina Maia, Purjo ja Hiisi <span data-l="olla#2">ovat</span> Hakaniemen kauppahallissa.</p>
    <p class="s" data-h="purjo" data-pt="Oi, Maia! Onde está o Jay?">Hei, Maia! Missä Jay <span data-l="olla#2">on</span>?</p>
    <p class="s" data-h="maia" data-pt="Oi, Purjo! O Jay está dormindo em casa.">Hei, Purjo! Jay nukkuu kotona.</p>
    <p class="s" data-h="hiisi" data-puhu="Jay nukkuu aina." data-pt="O Jay sempre dorme. (cara de paisagem)">Jay nukkuu aina. 😐</p>
    <p class="s" data-h="kahvilamyyja" data-pt="Bom dia! O que vai ser?">Huomenta! Mitä saa olla?</p>
    <p class="s" data-h="maia" data-pt="Pode me dar três cafés e dois rolinhos de canela?">Saisinko kolme kahvia ja kaksi korvapuustia?</p>
    <p class="s" data-h="kahvilamyyja" data-pt="Claro. No total, doze euros e cinquenta.">Selvä. Yhteensä kaksitoista euroa viisikymmentä.</p>
    <p class="s" data-h="purjo" data-pt="(em “inglês de rali”:) Eu pago! Eu pago!"><span class="pala" lang="en">Ai pei! Ai pei!</span></p>
    <p class="s" data-h="maia" data-pt="Não, Purjo, obrigada. Eu pago com cartão.">Ei, Purjo, kiitos. Minä maksan kortilla.</p>
    <p class="s" data-h="hiisi" data-pt="Brasuca, agora você fala finlandês!">Brassi, sinä puhut nyt suomea!</p>
    <p class="s" data-h="maia" data-pt="Falo, um pouco. E você, Hiisi? Você tem um carro novo de novo?">Puhun, vähän. Entä sinä, Hiisi? Onko sinulla taas uusi auto?</p>
    <figure class="tarinakuva" data-tarinakuva="k01-2" data-alt="Desenho: à mesa do café do mercado, o Hiisi, sem expressão, levanta a chave do carro novo numa mão e duas multas amarelas na outra, a Purjo ergue a mão de boca aberta e a Maia ri, com cafés e dois pães de canela na mesa."></figure>
    <p class="s" data-h="hiisi" data-pt="Tenho. Eu tenho um carro novo. E duas multas.">On. Minulla on uusi auto. Ja kaksi sakkoa.</p>
    <p class="s" data-h="purjo" data-pt="Hiisi!">Hiisi!</p>
    <p class="s" data-h="kertoja" data-puhu="Maia nauraa. Hiisi ei naura." data-pt="A Maia ri. O Hiisi não ri.">Maia nauraa. Hiisi ei naura. 😐</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas que voltam</h3>
    <p>Nada de novo: estes blocos você já viu nas lições 1 a 5. A gramática deles vem mais adiante.</p>
    <ul>
      <li><span class="fi">Hakaniemen kauppahallissa</span> = no mercado de Hakaniemi (lição 3) · <span class="fi pala">-ssa</span> (em, dentro): lição 6</li>
      <li><span class="fi">kotona</span> = em casa (lição 1) · lição 6</li>
      <li><span class="fi">Mitä saa olla?</span> = o que vai ser? (lição 4) · frase fixa</li>
      <li><span class="fi">Saisinko…?</span> = pode me dar…? (lições 3 e 4) · a forma educada: mais tarde</li>
      <li><span class="fi">maksan kortilla</span> = pago com cartão (lição 4) · lição 7</li>
      <li><span class="fi">Minulla on…</span> = eu tenho… (lição 5): esta já não é frase pronta, é gramática que você sabe</li>
    </ul>
  </div>
</section>

<section class="osio">
  <h2>Perguntas: todas as palavras para perguntar</h2>
  <p>Estas são todas as perguntas das lições 1 a 5. Toque nas palavras para ver as formas e ouça os exemplos.</p>
  <table class="taivutus">
    <tr><th>pergunta</th><th>português</th><th>exemplo</th><th>lição</th></tr>
    <tr><td><span class="fi">kuka?</span></td><td>quem?</td><td><span class="fi">Kuka on Jayn äiti?</span><span class="kaannos" lang="pt-BR">Quem é a mãe do Jay?</span></td><td>1</td></tr>
    <tr><td><span class="fi">mistä?</span></td><td>de onde?</td><td><span class="fi">Mistä sinä olet?</span><span class="kaannos" lang="pt-BR">De onde você é?</span></td><td>1</td></tr>
    <tr><td><span class="fi pala">-ko/-kö</span></td><td>sim ou não?</td><td><span class="fi">Oletko sinä suomalainen?</span><span class="kaannos" lang="pt-BR">Você é finlandesa?</span></td><td>1</td></tr>
    <tr><td><span class="fi">mikä?</span></td><td>qual?, o quê?</td><td><span class="fi">Mikä asema on numero kuusi?</span><span class="kaannos" lang="pt-BR">Qual estação é a número seis?</span></td><td>2</td></tr>
    <tr><td><span class="fi">mitä?</span></td><td>o quê? (partitivo de <span class="fi">mikä</span>)</td><td><span class="fi">Mitä se tarkoittaa?</span><span class="kaannos" lang="pt-BR">O que isso significa?</span></td><td>2, 3</td></tr>
    <tr><td><span class="fi">missä?</span></td><td>onde?</td><td><span class="fi">Missä sinä asut?</span><span class="kaannos" lang="pt-BR">Onde você mora?</span></td><td>2</td></tr>
    <tr><td><span class="fi">kuinka monta?</span></td><td>quantos?</td><td><span class="fi">Kuinka monta pullaa?</span><span class="kaannos" lang="pt-BR">Quantos pães doces?</span></td><td>2, 3</td></tr>
    <tr><td><span class="fi">paljonko?</span></td><td>quanto custa?, quanto?</td><td><span class="fi">Paljonko se maksaa?</span><span class="kaannos" lang="pt-BR">Quanto custa?</span></td><td>3</td></tr>
    <tr><td><span class="fi">mihin?</span></td><td>para onde?</td><td><span class="fi">Mihin me menemme?</span><span class="kaannos" lang="pt-BR">Aonde a gente vai?</span></td><td>4</td></tr>
    <tr><td><span class="fi">miksi?</span></td><td>por quê?</td><td><span class="fi">Miksi sinä naurat?</span><span class="kaannos" lang="pt-BR">Por que você está rindo?</span></td><td>4</td></tr>
    <tr><td><span class="fi">entä…?</span></td><td>e…?, e quanto a…?</td><td><span class="fi">Entä juoma?</span><span class="kaannos" lang="pt-BR">E para beber?</span></td><td>4</td></tr>
    <tr><td><span class="fi">kenen?</span></td><td>de quem?</td><td><span class="fi">Kenen auto tämä on?</span><span class="kaannos" lang="pt-BR">De quem é este carro?</span></td><td>5</td></tr>
    <tr><td><span class="fi">kenellä?</span></td><td>quem tem?</td><td><span class="fi">Kenellä on uusi puhelin?</span><span class="kaannos" lang="pt-BR">Quem tem um celular novo?</span></td><td>5</td></tr>
    <tr><td><span class="fi">kuinka vanha?</span></td><td>quantos anos?</td><td><span class="fi">Kuinka vanha sinä olet?</span><span class="kaannos" lang="pt-BR">Quantos anos você tem?</span></td><td>5</td></tr>
  </table>
  <div class="muista">
    <p><b>Lembre:</b> com palavra de pergunta, nada de <span class="fi pala">-ko/-kö</span>: <span class="fi">Missä sinä asut?</span> Sem palavra de pergunta, o verbo vem primeiro e ganha <span class="fi pala">-ko/-kö</span>: <span class="fi">Asutko sinä Helsingissä?</span> A resposta curta repete o verbo: <span class="fi">Asun.</span> / <span class="fi">En asu.</span> Mais na <a href="#h-kysymyssanat">Gramática: palavras de pergunta</a>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="hakaniemen-kauppahalli">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. olla, negação e pergunta</h3>
    <p class="ohje">Escreva a forma de <span class="fi">olla</span>. Entre parênteses: negativo ou pergunta. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Minä <span class="aukko" data-oikea="olen"></span> Maia.</p>
      <p>Purjo ja Hiisi <span class="aukko" data-oikea="ovat"></span> kauppahallissa.</p>
      <p><span class="aukko" data-oikea="Oletko"></span> sinä geologi? <span data-ei-kuplaa lang="pt-BR">(pergunta)</span></p>
      <p>Me <span class="aukko" data-oikea="olemme"></span> täällä.</p>
      <p>Hiisi <span class="aukko" data-oikea="ei ole"></span> brasilialainen. <span data-ei-kuplaa lang="pt-BR">(negativo)</span></p>
      <p><span class="aukko" data-oikea="Onko"></span> Jay kotona? <span data-ei-kuplaa lang="pt-BR">(pergunta)</span></p>
      <p>Te <span class="aukko" data-oikea="olette"></span> Helsingissä.</p>
      <p>Minä <span class="aukko" data-oikea="en ole"></span> suomalainen. <span data-ei-kuplaa lang="pt-BR">(negativo)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>2. Leia as mensagens do Hiisi</h3>
    <p class="ohje">À tarde, o Hiisi manda mensagens para a Maia. Curtas, como sempre. Leia e responda.</p>
    <div class="chat" data-otsikko="Hiisi" data-paiva="lauantai" data-mina="maia">
      <p data-h="hiisi" data-aika="14.02" data-pt="Oi, Brasuca. A mãe diz: a Maia fala bem finlandês.">Moi Brassi. Äiti sanoo: Maia puhuu hyvin suomea.</p>
      <p data-h="maia" data-aika="14.05" data-pt="Obrigada! Eu leio muito.">Kiitos! Minä luen paljon.</p>
      <p data-h="hiisi" data-aika="14.06" data-pt="Você entende a mãe?">Ymmärrätkö sinä äitiä?</p>
      <p data-h="maia" data-aika="14.08" data-pt="Entendo. Mas a mãe fala rápido!">Ymmärrän. Mutta äiti puhuu nopeasti!</p>
      <p data-h="hiisi" data-aika="14.09" data-pt="Eu dirijo rápido. A mãe fala rápido. O Jay dorme.">Minä ajan nopeasti. Äiti puhuu nopeasti. Jay nukkuu.</p>
      <p data-h="maia" data-aika="14.10" data-pt="E eu tomo café. Três cafés!">Ja minä juon kahvia. Kolme kahvia!</p>
      <p data-h="hiisi" data-aika="14.11" data-pt="(cara de paisagem)">😐</p>
    </div>
    <div class="valinta" data-sanakuva="nopeasti" data-oikea="Purjo">
      <p class="kysymys"><span class="fi">Kuka puhuu nopeasti?</span></p>
      <div class="vaihtoehdot"><button type="button">Maia</button><button type="button">Purjo</button><button type="button">Jay</button></div>
    </div>
    <div class="valinta" data-sanakuva="suomenkieli" data-oikea="Puhuu.">
      <p class="kysymys"><span class="fi">Puhuuko Maia hyvin suomea?</span> (o que a Purjo diz)</p>
      <div class="vaihtoehdot"><button type="button">Puhuu.</button><button type="button">Ei puhu.</button><button type="button">En puhu.</button></div>
    </div>
    <div class="valinta" data-sanakuva="kahvi" data-oikea="Kolme.">
      <p class="kysymys"><span class="fi">Kuinka monta kahvia Maia juo?</span></p>
      <div class="vaihtoehdot"><button type="button">Kaksi.</button><button type="button">Yksi.</button><button type="button">Kolme.</button></div>
    </div>
    <div class="valinta" data-sanakuva="auto" data-oikea="Ajaa.">
      <p class="kysymys"><span class="fi">Ajaako Hiisi nopeasti?</span></p>
      <div class="vaihtoehdot"><button type="button">Ajaa.</button><button type="button">Ei aja.</button><button type="button">Ajan.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Verbos dos tipos 1, 2 e 3</h3>
    <p class="ohje">O infinitivo está entre parênteses. Tipo 1: tire o último <span class="fi pala">-a/-ä</span> (cuidado com a gradação). Tipo 2: tire <span class="fi pala">-da/-dä</span>. Tipo 3: tire duas letras e ponha <span class="fi pala">-e</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Minä <span class="aukko" data-oikea="puhun"></span> suomea. <span data-ei-kuplaa>(puhua)</span></p>
      <p>Jay <span class="aukko" data-oikea="nukkuu"></span> kotona. <span data-ei-kuplaa>(nukkua)</span></p>
      <p>Sinä <span class="aukko" data-oikea="juot"></span> kahvia. <span data-ei-kuplaa>(juoda)</span></p>
      <p>Me <span class="aukko" data-oikea="tulemme"></span> huomenna. <span data-ei-kuplaa>(tulla)</span></p>
      <p>Maia <span class="aukko" data-oikea="lukee"></span> karttaa. <span data-ei-kuplaa>(lukea)</span></p>
      <p>He <span class="aukko" data-oikea="syövät"></span> pullaa. <span data-ei-kuplaa>(syödä)</span></p>
      <p>Minä en <span class="aukko" data-oikea="ymmärrä"></span>. <span data-ei-kuplaa>(ymmärtää)</span></p>
      <p>Hiisi ei <span class="aukko" data-oikea="tule"></span> tänään. <span data-ei-kuplaa>(tulla)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Prova de escuta</h3>
    <p class="ohje">Cinco sons das lições 1 a 5. Você ouve só a palavra ou o preço, nada mais. Aperte ▶ e escolha o que ouviu.</p>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="tuuli" data-oikea="tuuli">
      <p class="kysymys">Lição 1 · qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">tuli</button><button type="button">tuuli</button><button type="button">tulli</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="puhu" data-oikea="puhu">
      <p class="kysymys">Lição 2 · vogal longa ou curta?</p>
      <div class="vaihtoehdot"><button type="button">puhuu</button><button type="button">puhu</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="viisi euroa kaksikymmentä" data-oikea="5,20 €">
      <p class="kysymys">Lição 3 · quanto custa?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">5,30 €</button><button type="button">6,20 €</button><button type="button">5,20 €</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="kakkua" data-oikea="kakkua">
      <p class="kysymys">Lição 4 · bolo ou cocô?</p>
      <div class="vaihtoehdot"><button type="button">kakkaa</button><button type="button">kakkua</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="väli" data-oikea="väli">
      <p class="kysymys">Lição 5 · ä ou e?</p>
      <div class="vaihtoehdot"><button type="button">väli</button><button type="button">veli</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Partitivo, quem tem e de quem</h3>
    <p class="ohje">Escolha a forma certa. Entre parênteses está o que a frase quer dizer.</p>
    <div class="valinta" data-sanakuva="pulla" data-oikea="pullaa">
      <p class="kysymys"><span class="fi">Kaksi ___, kiitos.</span> (dois pães doces)</p>
      <div class="vaihtoehdot"><button type="button">pulla</button><button type="button">pullaa</button><button type="button">pullan</button></div>
    </div>
    <div class="valinta" data-sanakuva="vesi" data-oikea="vettä">
      <p class="kysymys"><span class="fi">Saisinko ___?</span> (água)</p>
      <div class="vaihtoehdot"><button type="button">veden</button><button type="button">vesi</button><button type="button">vettä</button></div>
    </div>
    <div class="valinta" data-sanakuva="auto" data-oikea="autoa">
      <p class="kysymys"><span class="fi">Minulla ei ole ___.</span> (eu não tenho carro)</p>
      <div class="vaihtoehdot"><button type="button">autoa</button><button type="button">auto</button><button type="button">auton</button></div>
    </div>
    <div class="valinta" data-sanakuva="auto" data-oikea="Hiidellä">
      <p class="kysymys"><span class="fi">___ on uusi auto.</span> (o Hiisi tem um carro novo)</p>
      <div class="vaihtoehdot"><button type="button">Hiiden</button><button type="button">Hiidellä</button><button type="button">Hiisi</button></div>
    </div>
    <div class="valinta" data-sanakuva="aiti" data-oikea="Jayn">
      <p class="kysymys"><span class="fi">Purjo on ___ äiti.</span> (a mãe do Jay)</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">Jayllä</button><button type="button">Jayn</button></div>
    </div>
    <div class="valinta" data-sanakuva="raha" data-oikea="euroa">
      <p class="kysymys"><span class="fi">Pulla maksaa kaksi ___.</span> (dois euros)</p>
      <div class="vaihtoehdot"><button type="button">euron</button><button type="button">euroa</button><button type="button">euro</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>6. Responda em voz alta</h3>
    <p class="ohje">Você está no café do mercado com a Purjo. Responda em voz alta antes de abrir o modelo.</p>
    <details class="vastaus"><summary lang="fi-FI">Mistä sinä olet?</summary><p class="s" data-pt="Sou do Brasil.">Olen Brasiliasta.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Puhutko sinä suomea?</summary><p class="s" data-pt="Falo, um pouco.">Puhun, vähän.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä saa olla?</summary><p class="s" data-pt="Pode me dar café e pão doce?">Saisinko kahvia ja pullaa?</p></details>
    <details class="vastaus"><summary><span lang="fi-FI">Paljonko pulla maksaa?</span> <span lang="pt-BR">(2,50 €)</span></summary><p class="s" data-pt="Custa dois euros e cinquenta.">Se maksaa kaksi euroa viisikymmentä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla sisko?</summary><p class="s" data-pt="Não. Eu não tenho irmã. (ou: Tenho. Eu tenho uma irmã.)">Ei ole. Minulla ei ole siskoa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kenen äiti Purjo on?</summary><p class="s" data-pt="Ela é a mãe do Jay e do Hiisi.">Hän on Jayn ja Hiiden äiti.</p></details>
  </div>
</section>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Ouvido da rua: mä oon, kaks, kiitti</h3>
  <p>Nas lições você viu a língua falada em cantinhos como este. Na rua, no mercado e na família, você vai ouvir estas formas o tempo todo. Você <b>não precisa</b> falar assim; o importante é <b>reconhecer</b>.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">minä olen</span></td><td><span class="fi">mä oon</span></td><td>eu sou, eu estou</td></tr>
    <tr><td><span class="fi">sinä olet</span></td><td><span class="fi">sä oot</span></td><td>você é, você está</td></tr>
    <tr><td><span class="fi">kaksi</span></td><td><span class="fi">kaks</span></td><td>dois</td></tr>
    <tr><td><span class="fi">kiitos</span></td><td><span class="fi">kiitti</span></td><td>obrigado, valeu</td></tr>
    <tr><td><span class="fi">minulla on</span></td><td><span class="fi">mulla on</span></td><td>eu tenho</td></tr>
  </table>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. O que a pessoa disse, em padrão?</h3>
    <p class="ohje">Ouça (ou leia) a frase da rua e escolha a mesma frase na língua padrão.</p>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="Mä oon kotona." data-oikea="Minä olen kotona.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Mä oon kotona.</span></p>
      <div class="vaihtoehdot"><button type="button">Sinä olet kotona.</button><button type="button">Minä olen kotona.</button><button type="button">Minä en ole kotona.</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="Kaks kahvia, kiitti!" data-oikea="Kaksi kahvia, kiitos!">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Kaks kahvia, kiitti!</span></p>
      <div class="vaihtoehdot"><button type="button">Kaksi kahvia, kiitos!</button><button type="button">Kaksi teetä, kiitos!</button><button type="button">Kolme kahvia, kiitos!</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="Mulla on sisko." data-oikea="Minulla on sisko.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Mulla on sisko.</span></p>
      <div class="vaihtoehdot"><button type="button">Sinulla on sisko.</button><button type="button">Minulla ei ole siskoa.</button><button type="button">Minulla on sisko.</button></div>
    </div>
  </div>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Para terminar a parte A</h2>
  <div class="kotitehtava" data-id="k01">
    <h3>Lição de casa</h3>
    <p>Escreva o seu sábado no mercado em cinco frases: onde você está (<span class="fi">Olen…</span>), o que você pede (<span class="fi">Saisinko…?</span> + partitivo), quanto custa (<span class="fi">Se maksaa…</span>), o que você tem e não tem (<span class="fi">Minulla on…</span>, <span class="fi">Minulla ei ole…</span> + partitivo) e uma pergunta para o Hiisi com <span class="fi pala">-ko/-kö</span>. Leia em voz alta.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Estou no mercado de Hakaniemi."><span data-l="olla#2">Olen</span> Hakaniemen kauppahallissa.</p>
      <p class="s" data-pt="Pode me dar dois pães doces?">Saisinko kaksi pullaa?</p>
      <p class="s" data-pt="Custa quatro euros.">Se maksaa neljä euroa.</p>
      <p class="s" data-pt="Eu tenho um cartão. Eu não tenho carro.">Minulla on kortti. Minulla ei ole autoa.</p>
      <p class="s" data-pt="Hiisi, você dirige devagar?">Hiisi, ajatko sinä hitaasti?</p>
    </details>
  </div>

  <h3>Eu sei: o que você aprendeu nas lições 1 a 5</h3>
  <p class="ohje">A lista junta as autoavaliações das lições. Marque com sinceridade: o que ainda não está firme, revise na lição indicada antes da lição 6.</p>
  <ul class="itsearvio" data-id="k01">
    <li>Sei me apresentar e dizer de onde sou (lição 1).</li>
    <li>Sei as formas de olla e respondo Olen. / En ole. (lição 1)</li>
    <li>Pergunto com -ko/-kö e com as palavras de pergunta: kuka, missä, paljonko… (lições 1–5)</li>
    <li>Conjugo verbos dos tipos 1, 2 e 3 no presente: puhun, juon, tulen (lições 2 e 4).</li>
    <li>Nego com en, et, ei e o radical: en puhu, ei tule (lições 1, 2 e 4).</li>
    <li>Conto de 0 a 100 e entendo preços: kaksi euroa kymmenen (lições 2 e 3).</li>
    <li>Uso o partitivo depois de números, ao pedir e no negativo: kaksi pullaa, Saisinko kahvia?, Minulla ei ole autoa (lições 3–5).</li>
    <li>Peço com educação: haluaisin, saisinko, voisinko (lições 3 e 4).</li>
    <li>Digo quem tem e de quem é: minulla on, Jayn äiti (lição 5).</li>
    <li>Ouço o som longo e o curto, o h e o ä: tuuli, Hesburger, väli (lições 1–5).</li>
  </ul>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · A luta final',
      html: `
<ul class="tavoitteet">
  <li>Aquecimento: cinco frases para acordar o partitivo.</li>
  <li>A luta final: o Capivara e o Peixe-boi pedem ajuda à Maia. Derrote a <span class="fi">Partitiivipeto</span> com respostas certas. O prêmio e a festa vão para a ilha do Capivara e do Peixe-boi.</li>
</ul>

<section class="osio" data-paikka="kuusamo">
  <h2>Socorro! Uma fera na ilha</h2>
  <p>A Maia está saindo do spa quando o Capivara e o Peixe-boi chegam pela praia a toda a velocidade. O Capivara vem correndo. O Peixe-boi vem rolando.</p>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Maia! Emergência! Apareceu uma fera no nosso banco de areia. Ela come a forma básica e cospe partitivo. Já comeu a rede, a placa da ilha e o meu lanche. O lanche doeu mais.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Eu vim o mais rápido que pude. Foi bem devagar, mas eu vim. A fera só tem medo de uma coisa: resposta certa. E a gente só tem resposta errada.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="maia"></span>
    <p class="apuhahmo-kupla"><b>Maia:</b> Eu? Lutar contra uma fera? Eu sou geóloga. Eu luto com pedras, e pedra não morde.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Por isso trouxemos isto: óculos escuros de luta. A gente comprou para nós dois, mas ficam muito melhor em você. Dão mais dez de coragem. Inventei esse número agora, mas acredito nele.</p>
  </div>
  <div class="pomo-lahja" data-pomo="k01"></div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="maia"></span>
    <p class="apuhahmo-kupla"><b>Maia:</b> <span class="fi">Tottakai!</span> Quer dizer: claro que eu ajudo. Cadê a fera?</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Primeiro um aquecimento. Depois a luta. Se ela derrubar você, a gente puxa você de volta. Puxar devagar é a minha especialidade.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: aquecimento</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Forma básica ou partitivo?</h3>
    <p class="ohje">Com <span class="fi">yksi</span> e com <span class="fi">Minulla on…</span>: forma básica. Depois de 2 ou mais, ao pedir e no negativo: partitivo.</p>
    <div class="valinta" data-sanakuva="pulla" data-oikea="pulla">
      <p class="kysymys"><span class="fi">Yksi ___ maksaa kaksi euroa.</span> (pão doce)</p>
      <div class="vaihtoehdot"><button type="button">pullaa</button><button type="button">pulla</button><button type="button">pullan</button></div>
    </div>
    <div class="valinta" data-sanakuva="pulla" data-oikea="pullaa">
      <p class="kysymys"><span class="fi">Kolme ___, kiitos.</span> (pães doces)</p>
      <div class="vaihtoehdot"><button type="button">pulla</button><button type="button">pullan</button><button type="button">pullaa</button></div>
    </div>
    <div class="valinta" data-sanakuva="tee" data-oikea="teetä">
      <p class="kysymys"><span class="fi">Haluaisin ___.</span> (chá)</p>
      <div class="vaihtoehdot"><button type="button">teetä</button><button type="button">tee</button><button type="button" data-l="tee:gen">teen</button></div>
    </div>
    <div class="valinta" data-sanakuva="sisko" data-oikea="siskoa">
      <p class="kysymys"><span class="fi">Minulla ei ole ___.</span> (irmã)</p>
      <div class="vaihtoehdot"><button type="button">sisko</button><button type="button">siskoa</button><button type="button">siskon</button></div>
    </div>
    <div class="valinta" data-sanakuva="sisko" data-oikea="sisko">
      <p class="kysymys"><span class="fi">Minulla on ___.</span> (irmã)</p>
      <div class="vaihtoehdot"><button type="button">siskon</button><button type="button">siskoa</button><button type="button">sisko</button></div>
    </div>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: a luta final</h2>
  <div class="pomo" data-pomo="k01"></div>
</section>

<aside class="kulttuuri" data-paikka="kuusamo">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Spa à finlandesa</h3>
  <figure class="kuva" data-kuva="avanto-peurunka"></figure>
  <p>Um spa na Finlândia, a <span class="fi">kylpylä</span>, é programa de família: piscinas quentes, toboágua, hidromassagem e, claro, sauna. Muitos ficam perto de lagos, e no inverno os mais corajosos alternam a sauna com um mergulho num buraco aberto no gelo.</p>
  <p>Na sauna, a regra é calma e silêncio; na banheira de hidromassagem, conversa. O Capivara prefere a hidromassagem: dá para conversar e comer mandarina ao mesmo tempo.</p>
</aside>
`
    }
  ],

  /* Gramática da lição: kertauskortit (ei uutta kielioppia), linkit oppituntien Treeni-paketteihin. */
  kielioppi: [
    {
      id: 'kertaus-partitiivi', otsikko: 'Quando vem o partitivo? (lições 3–5)', taso: 'revisão', hakuosa: 'h-partitiivi', treeni: ['t03-luku', 't04-tilaus'],
      html: `
<p>O partitivo singular termina em <span class="fi pala">-a/-ä</span> ou <span class="fi pala">-ta/-tä</span>. Até agora ele veio em três lugares:</p>
<table class="taivutus">
  <tr><th>quando?</th><th>forma básica</th><th>partitivo</th></tr>
  <tr><td>depois de 2 ou mais</td><td><span class="fi">yksi pulla</span><span class="kaannos" lang="pt-BR">um pão doce</span></td><td><span class="fi">kaksi pullaa</span><span class="kaannos" lang="pt-BR">dois pães doces</span></td></tr>
  <tr><td>ao pedir, sem número</td><td><span class="fi">kahvi</span><span class="kaannos" lang="pt-BR">café</span></td><td><span class="fi">Saisinko kahvia?</span><span class="kaannos" lang="pt-BR">Pode me dar café?</span></td></tr>
  <tr><td>no negativo de “ter”</td><td><span class="fi">Minulla on auto.</span><span class="kaannos" lang="pt-BR">Eu tenho carro.</span></td><td><span class="fi">Minulla ei ole autoa.</span><span class="kaannos" lang="pt-BR">Eu não tenho carro.</span></td></tr>
</table>
<p><b>Não muda:</b> com <span class="fi">yksi</span> e no positivo de “ter”: <span class="fi">yksi pulla</span>, <span class="fi">Minulla on sisko.</span></p>`
    },
    {
      id: 'kertaus-olla', otsikko: 'olla, negação e pergunta (lição 1)', taso: 'revisão', hakuosa: 'h-olla', treeni: ['t01-olla', 't01-kysymys'],
      html: `
<table class="taivutus">
  <tr><th>afirmativo</th><th>negativo</th><th>pergunta</th></tr>
  <tr><td><span class="fi">minä olen</span><span class="kaannos" lang="pt-BR">eu sou</span></td><td><span class="fi">minä en ole</span><span class="kaannos" lang="pt-BR">eu não sou</span></td><td><span class="fi">olenko minä?</span><span class="kaannos" lang="pt-BR">eu sou?</span></td></tr>
  <tr><td><span class="fi">sinä olet</span><span class="kaannos" lang="pt-BR">você é</span></td><td><span class="fi">sinä et ole</span><span class="kaannos" lang="pt-BR">você não é</span></td><td><span class="fi">oletko sinä?</span><span class="kaannos" lang="pt-BR">você é?</span></td></tr>
  <tr><td><span class="fi">hän on</span><span class="kaannos" lang="pt-BR">ele, ela é</span></td><td><span class="fi">hän ei ole</span><span class="kaannos" lang="pt-BR">ele, ela não é</span></td><td><span class="fi">onko hän?</span><span class="kaannos" lang="pt-BR">ele, ela é?</span></td></tr>
  <tr><td><span class="fi">me olemme</span><span class="kaannos" lang="pt-BR">nós somos</span></td><td><span class="fi">me emme ole</span><span class="kaannos" lang="pt-BR">nós não somos</span></td><td><span class="fi">olemmeko me?</span><span class="kaannos" lang="pt-BR">nós somos?</span></td></tr>
  <tr><td><span class="fi">te olette</span><span class="kaannos" lang="pt-BR">vocês são</span></td><td><span class="fi">te ette ole</span><span class="kaannos" lang="pt-BR">vocês não são</span></td><td><span class="fi">oletteko te?</span><span class="kaannos" lang="pt-BR">vocês são?</span></td></tr>
  <tr><td><span class="fi">he ovat</span><span class="kaannos" lang="pt-BR">eles, elas são</span></td><td><span class="fi">he eivät ole</span><span class="kaannos" lang="pt-BR">eles, elas não são</span></td><td><span class="fi">ovatko he?</span><span class="kaannos" lang="pt-BR">eles, elas são?</span></td></tr>
</table>
<p>Resposta curta: repita o verbo. <span class="fi">Oletko sinä geologi? – Olen. / En ole.</span></p>`
    },
    {
      id: 'kertaus-verbit', otsikko: 'Verbos dos tipos 1, 2 e 3 (lições 2 e 4)', taso: 'revisão', hakuosa: 'h-verbityypit', treeni: ['t02-tyyppi1', 't04-tyypit'],
      html: `
<table class="taivutus">
  <tr><th>tipo</th><th>infinitivo</th><th>minä</th><th>hän</th></tr>
  <tr><td>1 · duas vogais</td><td><span class="fi">puhua</span><span class="kaannos" lang="pt-BR">falar</span></td><td><span class="fi">puhun</span></td><td><span class="fi">puhuu</span></td></tr>
  <tr><td>1 · com gradação</td><td><span class="fi">nukkua</span><span class="kaannos" lang="pt-BR">dormir</span></td><td><span class="fi">nukun</span></td><td><span class="fi">nukkuu</span></td></tr>
  <tr><td>2 · <span class="fi pala">-da/-dä</span></td><td><span class="fi">juoda</span><span class="kaannos" lang="pt-BR">beber</span></td><td><span class="fi">juon</span></td><td><span class="fi">juo</span></td></tr>
  <tr><td>3 · <span class="fi pala">-lla, -nna…</span></td><td><span class="fi">tulla</span><span class="kaannos" lang="pt-BR">vir</span></td><td><span class="fi">tulen</span></td><td><span class="fi">tulee</span></td></tr>
</table>
<p>As terminações são sempre as mesmas: <span class="fi pala">-n, -t, (hän), -mme, -tte, -vat/-vät</span>. Negativo: <span class="fi">en</span> + o radical sem terminação: <span class="fi">en puhu, en nuku, en juo, en tule</span>.</p>`
    },
    {
      id: 'kertaus-omistus', otsikko: 'Quem tem? De quem? (lição 5)', taso: 'revisão', hakuosa: 'h-pronominit', treeni: ['t05-omistus', 't05-genetiivi'],
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Minulla on veli.</span></td><td>Eu tenho um irmão.</td></tr>
  <tr><td><span class="fi">Onko sinulla auto? – On. / Ei ole.</span></td><td>Você tem carro? – Tenho. / Não tenho.</td></tr>
  <tr><td><span class="fi">Hiidellä on kaksi sakkoa.</span></td><td>O Hiisi tem duas multas.</td></tr>
  <tr><td><span class="fi">Purjo on Jayn äiti.</span></td><td>A Purjo é a mãe do Jay.</td></tr>
  <tr><td><span class="fi">Kenen auto tämä on? – Hiiden.</span></td><td>De quem é este carro? – Do Hiisi.</td></tr>
</table>
<p>Quem tem: <span class="fi pala">-lla/-llä</span> + <span class="fi">on</span>. De quem: <span class="fi pala">-n</span>, antes da coisa. A idade vai com <span class="fi">olla</span>: <span class="fi">Hän on neljäkymmentäviisi vuotta vanha.</span></p>`
    }
  ]
});
