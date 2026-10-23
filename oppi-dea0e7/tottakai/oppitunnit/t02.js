/* Tottakai, lição 2: metrolla Otaniemeen (Passon jakso 2 Maian näkökulmasta). Oma materiaali, ei kirjan tekstiä.
   Kielioppi: verbityyppi 1 (preesens, kielto, kysymys), astevaihtelu tunnistettavana, luvut 0–10. Kaikki puhuvat kirjakieltä; puhekieli vain Na rua -nurkassa
   (käyttäjä 16.10.2026: enintään noin 10 %).
   Kaksi osaa omina sivuinaan (TYONKULKU 11–15, auditointi 5 C3/M2/M3/m9; käyttäjä 17.10.2026 ”A B separate, cut dialogue”):
   osa A (#t02) = dialogi 14 repliikkiä + Frases prontas + sanasto + luvut + ääntäminen + tehtävät 1–3;
   osa B (#t02-b) = kielioppi + Perguntas-laatikko + tehtävät 4–9 + kulttuuri + Na rua + kotitehtävä + itsearvio.
   Maian virhe: kuusi → ”kusi” (pituus; tunnettu oppijan sudenkuoppa). Komponentit: metron asemanäyttö (komponentit.js;
   repliikit kiinnittävät aseman data-asema-attribuutilla), ovikoodin näppäimistö ja chat-viestit (kuvitus.js, komponentit.js). */
Kurssi.lisaa({
  id: 't02',
  lyhyt: '2',
  jakso: 'Lição 2',
  otsikko: 'No metrô: verbos do tipo 1 e números 0–10',
  lahde: 'Tema: o caminho para o trabalho, o metrô, contar · Gramática: verbos do tipo 1 (presente, negativo, pergunta), gradação consonantal (reconhecer) · Pronúncia: o som longo muda a forma (puhuu × puhu); t antes de i',
  aiheet: ['liike', 'kaupunki', 'numerot', 'aika', 'tyo'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga, não é muito de manhã' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo, professor de finlandês no metrô' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay, manda mensagens' }
  },

  sanasto: [
    'puhua', 'nukkua', 'ymmärtää', 'tietää', 'lukea', 'kertoa', 'kirjoittaa', 'odottaa', 'opettaa', 'tarkoittaa', 'istua', 'sopia',
    'nolla', 'yksi', 'kaksi', 'kolme', 'neljä', 'viisi', 'kuusi', 'seitsemän', 'kahdeksan', 'yhdeksän', 'kymmenen',
    'metro', 'asema', 'seuraava', 'kartta', 'numero', 'huomenta', 'nopeasti', 'hitaasti', 'tänään', 'huomenna',
    'kuinka monta', 'ei se mitään', 'mennä'
  ],

  // Kielioppiosion koneelliset taulut: myönteinen, kielto ja kysymys (kirjakieli).
  verbiosat: 'myonteinen,kielto,kysymys',

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Diálogo e sons',
      html: `
<ul class="tavoitteet">
  <li>Você conjuga verbos do tipo 1, nega e pergunta: <span class="fi">puhun, puhuu</span>, <span class="fi">en puhu</span>, <span class="fi">puhutko?</span></li>
  <li>Você reconhece a gradação consonantal: <span class="fi">nukkua → nukun</span>, <span class="fi">tietää → tiedän</span>.</li>
  <li>Você conta de 0 a 10 e entende os anúncios do metrô.</li>
</ul>
<p data-paikka="sornainen-metroasema">Segunda, 7h40, ainda escuro. Maia e Jay vão de metrô de Sörnäinen a Otaniemi, ao Centro de Pesquisa de Rochas. No metrô, o Jay vira professor.</p>

<section class="osio">
  <h2>Diálogo: Seuraava asema</h2>
  <p class="ohje">Ouça primeiro sem tradução; o painel do metrô avança com a conversa. Toque nos verbos: a bolha mostra o infinitivo.</p>
  <div class="metro" data-aani="mies" data-vaihto="8" data-dialogi="t02-dialogi" data-linja="M2" data-asemat="Sörnäinen|Hakaniemi|Helsingin yliopisto|Rautatientori|Kamppi|Ruoholahti|Lauttasaari|Koivusaari|Keilaniemi|Aalto-yliopisto"></div>
  <div class="kpl" id="t02-dialogi" data-nimi="Ouvir o diálogo">
    <figure class="tarinakuva" data-tarinakuva="t02-1" data-alt="Desenho: a estação subterrânea de metrô de Sörnäinen às 7h40, com o metrô laranja de portas abertas, a placa laranja com a letra M, um relógio e a Maia e o Jay, de costas, indo para a porta."></figure>
    <p class="s" data-h="kertoja" data-asema="Sörnäinen" data-paikka="metro-sisalla" data-pt="Segunda de manhã. A Maia está sentada no metrô com o Jay.">Maanantaiaamu. Maia istuu metrossa Jayn kanssa.</p>
    <p class="s" data-h="jay" data-pt="Bom dia! Você ainda está dormindo?">Huomenta! Nukutko sinä vielä?</p>
    <p class="s" data-h="maia" data-pt="Não estou dormindo. Quase… Jay, o que significa “seuraava asema”?">En nuku. Melkein… Jay, mitä ”seuraava asema” tarkoittaa?</p>
    <p class="s" data-h="jay" data-asema="Sörnäinen" data-puhu="Se tarkoittaa proxima estasao. Kuuntele. Seuraava asema, Hakaniemi." data-pt="Significa “próxima estação”. Escute: próxima estação, Hakaniemi.">Se tarkoittaa ”<span lang="pt-BR">próxima estação</span>”. Kuuntele: seuraava asema, Hakaniemi.</p>
    <p class="s" data-h="maia" data-pt="Entendi! Eu leio o mapa: um, dois, três… nove estações!">Ymmärrän! Minä luen karttaa: yksi, kaksi, kolme… yhdeksän asemaa!</p>
    <figure class="tarinakuva" data-tarinakuva="t02-2" data-alt="Desenho: dentro do metrô, a Maia e o Jay estão sentados, e a Maia aponta para o mapa da linha acima da janela, onde a sexta estação depois de Sörnäinen está marcada em amarelo."></figure>
    <p class="s" data-h="jay" data-pt="Certo! Qual estação é a número seis?">Oikein! Mikä asema on numero kuusi?</p>
    <p class="s" data-h="maia" data-hairio="kusi → kuusi" data-pt="Eu sei! A número… “kusi” é Lauttasaari. (errado: kuusi)">Tiedän! Numero… kusi on Lauttasaari.</p>
    <p class="s" data-h="jay" data-pt="Kuusi! U longo. “Kusi” é outra coisa, totalmente diferente.">Kuusi! Pitkä <span class="pala">uu</span>. Kusi on aivan eri asia.</p>
    <p class="s" data-h="maia" data-pt="O que isso significa?">Mitä se tarkoittaa?</p>
    <p class="s" data-h="jay" data-pt="Eu conto em casa.">Kerron kotona.</p>
    <p class="s" data-h="maia" data-pt="Jay, você fala rápido. Eu falo devagar. Como eu vou aprender finlandês?">Jay, sinä puhut nopeasti. Minä puhun hitaasti. Miten minä opin suomea?</p>
    <p class="s" data-h="jay" data-pt="Tudo bem. Hoje eu ensino finlandês, amanhã você ensina português.">Ei se mitään. Tänään minä opetan suomea, huomenna sinä opetat portugalia.</p>
    <p class="s" data-h="maia" data-asema="Keilaniemi" data-pt="Combinado! Olha, isto já é Keilaniemi. A próxima estação é Aalto-yliopisto."><span data-l="sopia#2">Sopii</span>! Katso, tämä on jo Keilaniemi. Seuraava asema on Aalto-yliopisto.</p>
    <p class="s" data-h="jay" data-asema="Aalto-yliopisto" data-paikka="aalto-metroasema" data-pt="Aalto-yliopisto. Agora é hora de ir!">Aalto-yliopisto. Nyt on aika mennä!</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos; a gramática vem mais tarde.</p>
    <ul>
      <li><span class="fi">metrossa</span> = no metrô (<span class="pala">-ssa</span>, como em <span class="fi">Helsingissä</span>) · lição 6</li>
      <li><span class="fi">kotona</span> = em casa · lição 6</li>
      <li><span class="fi">Maia istuu metrossa Jayn kanssa.</span> = a Maia está no metrô com o Jay · <span class="fi">kanssa</span> (com) vem depois do genitivo <span class="fi">Jayn</span> (“de quem?”, lição 5): lição 7</li>
      <li><span class="fi">Kuuntele!</span> = escute! <span class="fi">Katso!</span> = olhe! (já no prólogo; o imperativo · lição 9)</li>
      <li><span class="fi">luen karttaa</span>, <span class="fi">yhdeksän asemaa</span>, <span class="fi">opetan suomea</span>: <span class="pala">-a/-ä</span> (o partitivo) · lição 3</li>
      <li><span class="fi">Ei se mitään.</span> = tudo bem · expressão fixa</li>
      <li><span class="fi">Nyt on aika mennä!</span> = agora é hora de ir · <span class="fi">on aika</span> + infinitivo, expressão fixa; <span class="fi">aika</span> = tempo, hora</li>
    </ul>
  </div>
</section>

<section class="osio">
  <h2>Vocabulário e números 0–10</h2>
  <div class="teema" data-otsikko="Palavras-chave" data-sanat="puhua,nukkua,ymmärtää,tietää,asema"></div>
  <p>Números: ouça e repita. Estique o <b>uu</b> de <span class="fi">kuusi</span> (6): <span class="fi">kusi</span> é palavrão.</p>
  <ul class="esim">
    <li class="s" data-puhu="nolla, yksi." data-pt="zero, um">0 nolla · 1 yksi</li>
    <li class="s" data-puhu="kaksi, kolme." data-pt="dois, três">2 kaksi · 3 kolme</li>
    <li class="s" data-puhu="neljä, viisi." data-pt="quatro, cinco">4 neljä · 5 viisi</li>
    <li class="s" data-puhu="kuusi, seitsemän." data-pt="seis, sete">6 kuusi · 7 seitsemän</li>
    <li class="s" data-puhu="kahdeksan, yhdeksän." data-pt="oito, nove">8 kahdeksan · 9 yhdeksän</li>
    <li class="s" data-puhu="kymmenen." data-pt="dez">10 kymmenen</li>
  </ul>
</section>

<section class="osio">
  <h2>Pronúncia: o som longo muda a forma</h2>
  <p>O comprimento muda a forma: <span class="fi">puhuu</span> (3ª pessoa, vogal <b>longa</b>) × <span class="fi">ei puhu</span> (vogal <b>curta</b>). Ouça os pares. E <span class="pala">ti</span> nunca vira “tchi” (Gramática da lição).</p>
  <ul class="esim">
    <li class="s" data-pt="A Maia fala. – A Maia não fala.">Maia puhuu. – Maia ei puhu.</li>
    <li class="s" data-pt="O Jay está sentado. – O Jay não está sentado.">Jay istuu. – Jay ei istu.</li>
    <li class="s" data-pt="A Purjo pergunta. – A Purjo não pergunta.">Purjo kysyy. – Purjo ei kysy.</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="aalto-metroasema">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Você entendeu o diálogo?</h3>
    <p class="ohje">Leia o diálogo de novo, se precisar, e escolha.</p>
    <div class="valinta" data-sanakuva="kartta" data-oikea="yhdeksän">
      <p class="kysymys">Quantas estações a Maia conta no mapa?</p>
      <div class="vaihtoehdot"><button type="button">kuusi</button><button type="button">yhdeksän</button><button type="button">kymmenen</button></div>
    </div>
    <div class="valinta" data-sanakuva="metro" data-oikea="Lauttasaari">
      <p class="kysymys">Qual estação é a número seis?</p>
      <div class="vaihtoehdot"><button type="button">Hakaniemi</button><button type="button">Keilaniemi</button><button type="button">Lauttasaari</button></div>
    </div>
    <div class="valinta" data-sanakuva="hitaasti" data-oikea="Maia">
      <p class="kysymys">Quem fala devagar?</p>
      <div class="vaihtoehdot"><button type="button">Maia</button><button type="button">Jay</button></div>
    </div>
    <div class="valinta" data-sanakuva="kello" data-oikea="Nyt on aika mennä!">
      <p class="kysymys">Como o Jay diz “agora é hora de ir”?</p>
      <div class="vaihtoehdot"><button type="button">Huomenta!</button><button type="button">Nyt on aika mennä!</button><button type="button">Sopii!</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Ligue o número à palavra</h3>
    <ul class="yhdista">
      <li data-pari="0" data-sanakuva="maara0">nolla</li>
      <li data-pari="3" data-sanakuva="maara3">kolme</li>
      <li data-pari="4" data-sanakuva="maara4">neljä</li>
      <li data-pari="5" data-sanakuva="maara5">viisi</li>
      <li data-pari="7" data-sanakuva="maara7">seitsemän</li>
      <li data-pari="8" data-sanakuva="maara8">kahdeksan</li>
      <li data-pari="10" data-sanakuva="maara10">kymmenen</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Código da porta: digite o que o Jay diz</h3>
    <p class="ohje">No Centro de Pesquisa de Rochas a porta tem código. O Jay diz o código. Aperte ▶, ouça e digite. Cada tecla tem o nome do número em finlandês e fala em voz alta.</p>
    <div class="nappaimisto" data-h="jay" data-numero="6039" data-puhu="Kuusi, nolla, kolme, yhdeksän." data-nimet="nolla,yksi,kaksi,kolme,neljä,viisi,kuusi,seitsemän,kahdeksan,yhdeksän"></div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Gramática e prática',
      html: `
<ul class="tavoitteet">
  <li>Você conjuga verbos do tipo 1 no presente: <span class="fi">puhun, puhut, puhuu</span>…</li>
  <li>Você reconhece a gradação consonantal: <span class="fi">nukkua → nukun</span>, <span class="fi">tietää → tiedän</span>.</li>
  <li>Você nega e pergunta: <span class="fi">en puhu</span>, <span class="fi">puhutko?</span></li>
  <li>Você ouve a diferença entre <span class="fi">puhuu</span> e <span class="fi">puhu</span>.</li>
</ul>

<p>Na parte A, a Maia e o Jay foram de metrô até Otaniemi. Agora você vê a gramática que está no diálogo: <span class="fi">nukutko, en nuku, luen, tiedän, kerron, puhut, puhun</span>. Volte à <a href="#t02">parte A</a> para ouvir o diálogo de novo.</p>

<section class="osio" data-osa="gramatica" data-paikka="metro-sisalla">
  <h2>Gramática</h2>

  <h3>1. Verbos do tipo 1</h3>
  <p>O finlandês tem seis tipos de verbo, como o português tem -ar, -er e -ir. O <b>tipo 1</b> é o maior: o infinitivo termina em <b>duas vogais</b>, a última é <span class="fi pala">a</span> ou <span class="fi pala">ä</span>: <span class="fi">puhua, asua, nukkua, tietää, lukea, kysyä</span>.</p>
  <p><b>Como conjugar:</b> tire o último <span class="fi pala">-a/-ä</span> e você tem o radical: <span class="fi">puhua → puhu-</span>. Depois cole a terminação de pessoa (as mesmas de <span class="fi">olla</span>). Na 3ª pessoa do singular, a última vogal fica longa.</p>
  <table class="taivutus">
    <tr><th>finlandês</th><th>português</th></tr>
    <tr><td><span class="fi">minä puhun</span></td><td>eu falo</td></tr>
    <tr><td><span class="fi">sinä puhut</span></td><td>você fala</td></tr>
    <tr><td><span class="fi">hän puhuu</span></td><td>ele, ela fala</td></tr>
    <tr><td><span class="fi">me puhumme</span></td><td>nós falamos</td></tr>
    <tr><td><span class="fi">te puhutte</span></td><td>vocês falam</td></tr>
    <tr><td><span class="fi">he puhuvat</span></td><td>eles, elas falam</td></tr>
  </table>
  <div class="muista">
    <p><b>Lembre:</b> <span class="fi pala">-vat</span> com vogais de trás (<span class="fi">puhuvat</span>), <span class="fi pala">-vät</span> com vogais da frente (<span class="fi">tietävät</span>). É a mesma harmonia vocálica de <span class="fi pala">-ko/-kö</span>. E <b>você</b> é <span class="fi">sinä</span>: <span class="fi">sinä puhut</span>, com <span class="pala">-t</span>, nunca a forma de <span class="fi">hän</span>.</p>
  </div>

  <h3>2. Gradação consonantal: a consoante que muda</h3>
  <p>Em muitas palavras, a consoante do meio <b>enfraquece</b> em algumas formas: <span class="fi">nukkua → minä nukun</span> (kk vira k), <span class="fi">tietää → minä tiedän</span> (t vira d). Os pesquisadores dizem que essa é a maior dificuldade de quem aprende finlandês adulto, então vamos devagar: <b>por enquanto, só reconheça</b>. Todos os exemplos abaixo estão no diálogo.</p>
  <table class="taivutus">
    <tr><th>forte (hän, he)</th><th>fraco (minä, sinä, me, te)</th><th>mudança</th></tr>
    <tr><td><span class="fi">hän nukkuu</span><span class="kaannos" lang="pt-BR">ele, ela dorme</span></td><td><span class="fi">sinä nukut</span><span class="kaannos" lang="pt-BR">você dorme</span></td><td>kk → k</td></tr>
    <tr><td><span class="fi">hän tietää</span><span class="kaannos" lang="pt-BR">ele, ela sabe</span></td><td><span class="fi">minä tiedän</span><span class="kaannos" lang="pt-BR">eu sei</span></td><td>t → d</td></tr>
    <tr><td><span class="fi">hän ymmärtää</span><span class="kaannos" lang="pt-BR">ele, ela entende</span></td><td><span class="fi">minä ymmärrän</span><span class="kaannos" lang="pt-BR">eu entendo</span></td><td>rt → rr</td></tr>
    <tr><td><span class="fi">hän kertoo</span><span class="kaannos" lang="pt-BR">ele, ela conta</span></td><td><span class="fi">minä kerron</span><span class="kaannos" lang="pt-BR">eu conto</span></td><td>rt → rr</td></tr>
    <tr><td><span class="fi">hän lukee</span><span class="kaannos" lang="pt-BR">ele, ela lê</span></td><td><span class="fi">minä luen</span><span class="kaannos" lang="pt-BR">eu leio</span></td><td>k → (some)</td></tr>
    <tr><td><span class="fi">hän odottaa</span><span class="kaannos" lang="pt-BR">ele, ela espera</span></td><td><span class="fi">minä odotan</span><span class="kaannos" lang="pt-BR">eu espero</span></td><td>tt → t</td></tr>
  </table>
  <div class="saanto">
    <h3>Regra prática para o tipo 1</h3>
    <p><b>hän</b> e <b>he</b>: forte, como no infinitivo (<span class="fi">nukkuu, nukkuvat</span>). <b>Todas as outras pessoas e o negativo</b>: fraco (<span class="fi">nukun, nukut, nukumme, nukutte, en nuku</span>). Por quê? A consoante enfraquece quando a sílaba seguinte fica “fechada” por uma consoante (<span class="fi pala">nu-kun</span>). Não precisa decorar isso agora.</p>
  </div>

  <h3>3. Negação e pergunta</h3>
  <p>Negação: <span class="fi">en, et, ei, emme, ette, eivät</span> + o radical <b>fraco sem terminação</b>: <span class="fi">minä en puhu</span>, <span class="fi">hän ei nuku</span>, <span class="fi">me emme tiedä</span>. Pergunta: verbo + <span class="fi pala">-ko/-kö</span> no começo: <span class="fi">Puhutko sinä suomea? Ymmärrätkö?</span> A resposta curta repete o verbo.</p>
  <ul class="esim">
    <li class="s" data-pt="Você entende? – Entendo.">Ymmärrätkö? – Ymmärrän.</li>
    <li class="s" data-pt="Você está dormindo? – Não estou.">Nukutko sinä? – En nuku.</li>
    <li class="s" data-pt="A Maia fala devagar? – Fala.">Puhuuko Maia hitaasti? – Puhuu.</li>
  </ul>
  <div class="fraasit-laatikko">
    <h3>Perguntas: as palavras para perguntar</h3>
    <p>Você já usou estas perguntas. Guarde-as como frases prontas; o porquê das formas vem depois.</p>
    <ul>
      <li><span class="fi">Mikä?</span> = qual?, o quê? · <span class="fi">Mikä asema on numero kuusi?</span></li>
      <li><span class="fi">Mitä se tarkoittaa?</span> = o que isso significa? (<span class="fi">mitä</span> é uma forma de <span class="fi">mikä</span>, o partitivo · lição 3)</li>
      <li><span class="fi">Kuka?</span> = quem? · <span class="fi">Kuka sinä olet?</span></li>
      <li><span class="fi">Miten?</span> = como? · <span class="fi">Miten minä opin suomea?</span></li>
      <li><span class="fi">Missä?</span> = onde? · <span class="fi">Missä sinä asut?</span> <span class="fi">Mistä?</span> = de onde? · <span class="fi">Mistä sinä olet?</span> (o sistema onde, de onde, para onde · lição 6)</li>
      <li><span class="fi">Kuinka monta?</span> = quantos? · <span class="fi">Kuinka monta asemaa?</span> (a palavra depois vai para o partitivo · lição 3)</li>
      <li>Sem palavra de pergunta: o verbo vem primeiro e ganha <span class="fi pala">-ko/-kö</span> · <span class="fi">Nukutko sinä vielä?</span></li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="aalto-metroasema">
  <h2>Exercícios da parte B</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>4. Qual é a forma básica?</h3>
    <p class="ohje">Você vê a forma do texto. Escolha o infinitivo (a forma do dicionário).</p>
    <div class="valinta" data-sanakuva="tietaa" data-oikea="tietää">
      <p class="kysymys" data-ei-kuplaa><span class="fi">minä tiedän</span></p>
      <div class="vaihtoehdot"><button type="button">tiedän</button><button type="button">tietää</button><button type="button">tietävät</button></div>
    </div>
    <div class="valinta" data-sanakuva="nukkua" data-oikea="nukkua">
      <p class="kysymys" data-ei-kuplaa><span class="fi">sinä nukut</span></p>
      <div class="vaihtoehdot"><button type="button">nukut</button><button type="button">nukkua</button><button type="button">nukkuu</button></div>
    </div>
    <div class="valinta" data-sanakuva="ymmartaa" data-oikea="ymmärtää">
      <p class="kysymys" data-ei-kuplaa><span class="fi">minä ymmärrän</span></p>
      <div class="vaihtoehdot"><button type="button">ymmärrän</button><button type="button">ymmärtää</button><button type="button">ymmärtävät</button></div>
    </div>
    <div class="valinta" data-sanakuva="lukea" data-oikea="lukea">
      <p class="kysymys" data-ei-kuplaa><span class="fi">minä luen</span></p>
      <div class="vaihtoehdot"><button type="button">luet</button><button type="button">lukea</button><button type="button">lukee</button></div>
    </div>
    <div class="valinta" data-sanakuva="kertoa" data-oikea="kertoa">
      <p class="kysymys" data-ei-kuplaa><span class="fi">minä kerron</span></p>
      <div class="vaihtoehdot"><button type="button">kertoa</button><button type="button">kerron</button><button type="button">kertoo</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Complete com o verbo</h3>
    <p class="ohje">O infinitivo está entre parênteses. Atenção à gradação!</p>
    <div class="aukot" lang="fi-FI">
      <p>Minä <span class="aukko" data-oikea="puhun"></span> hitaasti. <span data-ei-kuplaa>(puhua)</span></p>
      <p>Sinä <span class="aukko" data-oikea="nukut"></span> metrossa. <span data-ei-kuplaa>(nukkua)</span></p>
      <p>Maia <span class="aukko" data-oikea="lukee"></span> karttaa. <span data-ei-kuplaa>(lukea)</span></p>
      <p>Me <span class="aukko" data-oikea="odotamme"></span> metroa. <span data-ei-kuplaa>(odottaa)</span></p>
      <p>Jay <span class="aukko" data-oikea="kertoo"></span> kotona. <span data-ei-kuplaa>(kertoa)</span></p>
      <p>He <span class="aukko" data-oikea="istuvat"></span> metrossa. <span data-ei-kuplaa>(istua)</span></p>
      <p>Minä <span class="aukko" data-oikea="opetan"></span> portugalia. <span data-ei-kuplaa>(opettaa)</span></p>
      <p>Te <span class="aukko" data-oikea="kirjoitatte"></span> nopeasti. <span data-ei-kuplaa>(kirjoittaa)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Ouça: longo ou curto?</h3>
    <p class="ohje">Você ouve só o verbo, sem pronome. É a forma longa (a de <span class="fi">hän</span>) ou a curta (a que vem depois de <span class="fi">ei</span>)? Só o comprimento da última vogal mostra.</p>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="puhuu" data-oikea="puhuu">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">puhuu</button><button type="button">puhu</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="istu" data-oikea="istu">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">istuu</button><button type="button">istu</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="kysyy" data-oikea="kysyy">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">kysy</button><button type="button">kysyy</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="asu" data-oikea="asu">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">asu</button><button type="button">asuu</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Responda que não</h3>
    <p class="ohje">Depois de <span class="fi">en, et, ei…</span> vem o radical fraco, sem terminação.</p>
    <div class="aukot" lang="fi-FI">
      <p>Nukutko sinä? – En <span class="aukko" data-oikea="nuku"></span>.</p>
      <p>Ymmärrätkö sinä? – En <span class="aukko" data-oikea="ymmärrä"></span>.</p>
      <p>Tiedätkö sinä? – En <span class="aukko" data-oikea="tiedä"></span>.</p>
      <p>Puhuuko Jay hitaasti? – Ei <span class="aukko" data-oikea="puhu"></span>.</p>
      <p>Luetteko te karttaa? – Emme <span class="aukko" data-oikea="lue"></span>.</p>
      <p>Istuvatko he metrossa? – Eivät <span class="aukko" data-oikea="istu"></span>.</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>8. Leia as mensagens da Purjo</h3>
    <p class="ohje">À tarde, a Purjo manda mensagens para a Maia. Ela escreve devagar e simples, especialmente para a Maia. <span class="fi">töissä</span> = no trabalho (frase pronta, como <span class="fi">metrossa</span>). Leia e responda.</p>
    <div class="chat" data-otsikko="Purjo" data-paiva="maanantai" data-mina="maia">
      <p data-h="purjo" data-aika="13.02" data-pt="Oi, Maia! Aqui é a Purjo. Você está no trabalho?">Hei Maia! Täällä Purjo. <span data-l="olla#2">Oletko</span> sinä töissä?</p>
      <p data-h="maia" data-aika="13.05" data-pt="Oi, Purjo! Estou. Estamos em Otaniemi.">Hei Purjo! <span data-l="olla#2">Olen</span>. Me <span data-l="olla#2">olemme</span> Otaniemessä.</p>
      <p data-h="purjo" data-aika="13.06" data-pt="Você fala finlandês no trabalho?">Puhutko sinä suomea töissä?</p>
      <p data-h="maia" data-aika="13.09" data-pt="Não falo. No trabalho falamos inglês.">En puhu. Töissä me puhumme englantia.</p>
      <p data-h="purjo" data-aika="13.10" data-pt="Você entende?">Ymmärrätkö sinä?</p>
      <p data-h="maia" data-aika="13.12" data-pt="Entendo! Eu leio devagar. Obrigada, Purjo!">Ymmärrän! Minä luen hitaasti. Kiitos, Purjo!</p>
      <p data-h="purjo" data-aika="13.13" data-pt="Ótimo! Eu estou estudando português. Obrigada!"><span data-l="hieno#2">Hienoa</span>! Minä <span data-l="lukea#2">luen</span> portugalia. <span lang="pt-BR">Obrigada</span>!</p>
    </div>
    <div class="valinta" data-sanakuva="olankohautus" data-oikea="Otaniemessä">
      <p class="kysymys"><span class="fi">Missä Maia <span data-l="olla#2">on</span>?</span></p>
      <div class="vaihtoehdot"><button type="button">Helsingissä</button><button type="button">Otaniemessä</button><button type="button">kotona</button></div>
    </div>
    <div class="valinta" data-sanakuva="suomenkieli" data-oikea="Ei puhu.">
      <p class="kysymys"><span class="fi">Puhuuko Maia suomea töissä?</span></p>
      <div class="vaihtoehdot"><button type="button">Puhuu.</button><button type="button">Ei puhu.</button><button type="button">En puhu.</button></div>
    </div>
    <div class="valinta" data-sanakuva="hitaasti" data-oikea="Lukee.">
      <p class="kysymys"><span class="fi">Lukeeko Maia hitaasti?</span></p>
      <div class="vaihtoehdot"><button type="button">Lukee.</button><button type="button">Luen.</button><button type="button">Ei lue.</button></div>
    </div>
    <div class="valinta" data-sanakuva="lukea" data-oikea="portugalia">
      <p class="kysymys"><span class="fi">Mitä Purjo <span data-l="lukea#2">lukee</span>?</span></p>
      <div class="vaihtoehdot"><button type="button">suomea</button><button type="button">englantia</button><button type="button">portugalia</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda às perguntas em voz alta</h3>
    <p class="ohje">Responda primeiro sozinho, em voz alta. Depois abra e compare.</p>
    <details class="vastaus"><summary lang="fi-FI">Puhutko sinä suomea?</summary><p class="s" data-pt="Falo, um pouco.">Puhun, vähän.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Ymmärrätkö sinä?</summary><p class="s" data-pt="Entendo. (ou: Não entendo.)">Ymmärrän.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Missä sinä asut?</summary><p class="s" data-pt="Moro em Helsinque.">Asun Helsingissä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Nukutko sinä metrossa?</summary><p class="s" data-pt="Não durmo. Eu leio.">En nuku. Minä luen.</p></details>
  </div>
</section>

<aside class="kulttuuri" data-paikka="aalto-metroasema">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>O metrô mais silencioso do mundo?</h3>
  <figure class="kuva" data-kuva="metro-sisalla"></figure>
  <p>O metrô de Helsinque tem duas linhas, M1 e M2, que dividem quase todo o caminho. Desde 2017 ele vai até Espoo (o <span class="fi">Länsimetro</span>, metrô do oeste), e as estações novas foram escavadas na rocha: granito e gnaisse de quase dois bilhões de anos. Os dois geólogos adoram.</p>
  <p>Os anúncios são em duas línguas, finlandês e sueco, porque a Finlândia é oficialmente bilíngue: <span class="fi">Seuraava asema: Kamppi</span>, depois <span lang="sv">Nästa station: Kampen</span>. As placas também têm os dois nomes.</p>
  <p>E o mais importante: no metrô, <b>quase ninguém conversa</b>. Falar alto ao telefone é falta de educação. Por isso todo mundo olhou quando a Maia gritou <span class="fi">kusi</span>.</p>
  <p>O bilhete é do <b>HSL</b>, a empresa de transporte da região. Ele vale para metrô, ônibus, bonde, trem local e até para a balsa de Suomenlinna. Compra-se no aplicativo e mostra-se só se o fiscal pedir.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Kaks, viis, kuus: números da rua</h3>
  <p>No caixa do mercado e ao dizer um número de telefone, muitos finlandeses encurtam os números. Você pode sempre usar a forma padrão; só é bom <b>reconhecer</b> estas:</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th></th></tr>
    <tr><td><span class="fi">yksi</span></td><td><span class="fi">yks</span></td><td>1</td></tr>
    <tr><td><span class="fi">kaksi</span></td><td><span class="fi">kaks</span></td><td>2</td></tr>
    <tr><td><span class="fi">viisi</span></td><td><span class="fi">viis</span></td><td>5</td></tr>
    <tr><td><span class="fi">kuusi</span></td><td><span class="fi">kuus</span></td><td>6</td></tr>
  </table>
</aside>

<section class="osio" data-ei-sivulle data-paikka="otaniemi-aalto">
  <div class="kotitehtava" data-id="t02">
    <h3>Lição de casa</h3>
    <p>Escreva cinco frases sobre a sua manhã com verbos do tipo 1: se você dorme no metrô ou no ônibus (<span class="fi">nukun…</span>), o que você lê (<span class="fi">luen…</span>), que línguas fala (<span class="fi">puhun…</span> <span class="fi pala">-a/-ä</span>), se entende finlandês (<span class="fi">ymmärrän…</span>) e uma pergunta para o Jay (<span class="fi pala">-ko/-kö</span>). Depois diga o seu número de telefone em voz alta, algarismo por algarismo.</p>
    <details class="malli"><summary>Resposta modelo</summary>
      <p class="s" data-pt="Eu não durmo no metrô.">Minä en nuku metrossa.</p>
      <p class="s" data-pt="Eu leio o mapa.">Minä luen karttaa.</p>
      <p class="s" data-pt="Falo português e inglês.">Puhun portugalia ja englantia.</p>
      <p class="s" data-pt="Entendo um pouco de finlandês.">Ymmärrän vähän suomea.</p>
      <p class="s" data-pt="Jay, você entende português?">Jay, ymmärrätkö sinä portugalia?</p>
      <p class="s" data-pt="Quatro, zero, sete, um, cinco…">Neljä, nolla, seitsemän, yksi, viisi…</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t02">
    <li>Sei conjugar um verbo do tipo 1 no presente.</li>
    <li>Reconheço a forma básica: tiedän → tietää, nukun → nukkua.</li>
    <li>Sei negar e perguntar: en puhu, puhutko?</li>
    <li>Sei contar de 0 a 10 e entendo os anúncios do metrô.</li>
    <li>Ouço a diferença entre puhuu e puhu.</li>
  </ul>
</section>
`
    }
  ],

  kielioppi: [
    {
      id: 'tyyppi1', otsikko: 'Verbos do tipo 1: presente', taso: 'essencial', hakuosa: 'h-verbityypit', treeni: 't02-tyyppi1',
      html: `
<p><b>Reconhecer:</b> o infinitivo termina em duas vogais, a última <span class="fi pala">a</span> ou <span class="fi pala">ä</span>: <span class="fi">puhua, asua, kysyä, lukea, tietää</span>.</p>
<p><b>Conjugar:</b> radical (tire o último <span class="fi pala">-a/-ä</span>) + terminação. Na 3ª do singular, a vogal final dobra. Na 3ª do plural, <span class="fi pala">-vat/-vät</span>.</p>
<div class="taivutustaulu" data-verbi="puhua" data-osat="myonteinen,kielto" data-selite="falar · sem gradação"></div>
<div class="taivutustaulu" data-verbi="tietää" data-osat="myonteinen,kielto" data-selite="saber · gradação t : d"></div>`
    },
    {
      id: 'astevaihtelu', otsikko: 'Gradação consonantal: reconhecer', taso: 'reconhecer', hakuosa: 'h-astevaihtelu', treeni: 't02-perusmuoto',
      html: `
<p>Algumas consoantes mudam dentro da palavra: forma <b>forte</b> e forma <b>fraca</b>. Nesta lição, basta reconhecer a palavra quando ela muda.</p>
<table class="taivutus">
  <tr><th>forte</th><th>fraco</th><th>exemplo</th></tr>
  <tr><td><span class="fi pala">kk</span></td><td><span class="fi pala">k</span></td><td><span class="fi">nukkua → nukun</span><span class="kaannos" lang="pt-BR">dormir → eu durmo</span></td></tr>
  <tr><td><span class="fi pala">tt</span></td><td><span class="fi pala">t</span></td><td><span class="fi">odottaa → odotan</span><span class="kaannos" lang="pt-BR">esperar → eu espero</span></td></tr>
  <tr><td><span class="fi pala">pp</span></td><td><span class="fi pala">p</span></td><td><span class="fi">oppia → opin</span><span class="kaannos" lang="pt-BR">aprender → eu aprendo</span></td></tr>
  <tr><td><span class="fi pala">t</span></td><td><span class="fi pala">d</span></td><td><span class="fi">tietää → tiedän</span><span class="kaannos" lang="pt-BR">saber → eu sei</span></td></tr>
  <tr><td><span class="fi pala">k</span></td><td>(some)</td><td><span class="fi">lukea → luen</span><span class="kaannos" lang="pt-BR">ler → eu leio</span></td></tr>
  <tr><td><span class="fi pala">p</span></td><td><span class="fi pala">v</span></td><td><span class="fi">sopia → sovin</span><span class="kaannos" lang="pt-BR">combinar → eu combino</span></td></tr>
  <tr><td><span class="fi pala">rt</span></td><td><span class="fi pala">rr</span></td><td><span class="fi">ymmärtää → ymmärrän</span><span class="kaannos" lang="pt-BR">entender → eu entendo</span></td></tr>
  <tr><td><span class="fi pala">nt</span></td><td><span class="fi pala">nn</span></td><td><span class="fi">tuntea → tunnen</span><span class="kaannos" lang="pt-BR">conhecer → eu conheço</span></td></tr>
</table>
<p><b>Tipo 1:</b> forte em <span class="fi">hän</span> e <span class="fi">he</span> (como o infinitivo); fraco em <span class="fi">minä, sinä, me, te</span> e no negativo. A mesma gradação aparece nos substantivos: <span class="fi">Helsinki → Helsingissä</span>.</p>
<div class="taivutustaulu" data-verbi="nukkua" data-osat="myonteinen,kielto" data-selite="dormir · gradação kk : k"></div>`
    },
    {
      id: 'kielto1', otsikko: 'Negação e pergunta com verbos do tipo 1', taso: 'essencial', hakuosa: 'h-kielto', treeni: 't02-kielto',
      html: `
<p><b>Negação:</b> <span class="fi">en, et, ei, emme, ette, eivät</span> + radical fraco, sem terminação. É a mesma forma para todas as pessoas: <span class="fi">en puhu, et puhu, ei puhu</span>.</p>
<p><b>Pergunta:</b> forma afirmativa + <span class="fi pala">-ko/-kö</span>: <span class="fi">puhutko, ymmärrätkö, nukkuuko</span>. A resposta repete o verbo: <span class="fi">Ymmärrätkö? – Ymmärrän. / En ymmärrä.</span></p>
<div class="taivutustaulu" data-verbi="ymmärtää" data-osat="kysymys,kielto" data-selite="entender · gradação rt : rr"></div>`
    },
    {
      id: 'luvut', otsikko: 'Números 0–10', taso: 'essencial', hakuosa: 'h-luvut', treeni: 't02-luvut',
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th></th></tr>
  <tr><td><span class="fi">nolla</span></td><td>0</td></tr>
  <tr><td><span class="fi">yksi</span></td><td>1</td></tr>
  <tr><td><span class="fi">kaksi</span></td><td>2</td></tr>
  <tr><td><span class="fi">kolme</span></td><td>3</td></tr>
  <tr><td><span class="fi">neljä</span></td><td>4</td></tr>
  <tr><td><span class="fi">viisi</span></td><td>5</td></tr>
  <tr><td><span class="fi">kuusi</span></td><td>6</td></tr>
  <tr><td><span class="fi">seitsemän</span></td><td>7</td></tr>
  <tr><td><span class="fi">kahdeksan</span></td><td>8</td></tr>
  <tr><td><span class="fi">yhdeksän</span></td><td>9</td></tr>
  <tr><td><span class="fi">kymmenen</span></td><td>10</td></tr>
</table>
<p>Números de telefone são ditos algarismo por algarismo: <span class="fi">nolla, neljä, nolla…</span> Depois de um número a partir de 2, o substantivo vai para o partitivo: <span class="fi">yhdeksän asemaa</span> (nove estações). Isso é o tema da lição 3.</p>`
    },
    {
      id: 'sudenkuopat2', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção',
      html: `
<ul>
  <li><b class="fi">kuusi × kusi:</b> estique o <span class="fi pala">uu</span>. Sempre. (E <span class="fi" data-l="kuusi:puu">kuusi</span> também é “abeto”, a árvore de Natal: o mesmo som, dois sentidos.)</li>
  <li><b>puhuu × puhu:</b> o comprimento separa <span class="fi">Maia puhuu</span> (a Maia fala) de <span class="fi">Maia ei puhu</span> (a Maia não fala).</li>
  <li><b>você = sinä:</b> “você fala” é <span class="fi">sinä puhut</span>, com <span class="pala">-t</span>. O português usa a 3ª pessoa com “você”; o finlandês não: <span class="pala">sinä puhuu</span> está errado.</li>
  <li><b>t antes de i:</b> no Brasil, “ti” vira “tchi” e “di” vira “dji” (“tia”, “dia”). Em finlandês, <b>nunca</b>: o <span class="pala">t</span> e o <span class="pala">d</span> são secos, com a ponta da língua nos dentes, como “tia” e “dia” falados em Portugal. Ouça e repita: <span class="fi">tietää</span>, <span class="fi">tiedän</span>, <span class="fi">Rautatientori</span>.</li>
  <li><b>ä não é e:</b> <span class="fi">tietää</span> termina num som bem aberto, como o “é” de “café” bem aberto. Abra a boca.</li>
</ul>`
    }
  ]
});
