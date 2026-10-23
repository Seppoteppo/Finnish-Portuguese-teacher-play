/* Tottakai, lição 13: perheen päivä Belo Horizontessa, imperfekti (Passon jakso 13 Maian näkökulmasta). Oma materiaali,
   ei kirjan tekstiä. Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5b ”Oppitunti 13”.
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t13): tiistai 22.12., ensimmäinen aamu kotona Maian vanhempien luona (maanantaina Mercado Central, t11); dialogi A (21 repliikkiä, Maia ja Jay
     puhuvat keittiössä suomea), Frases prontas, sanasto, kikka: Maian viesti Purjolle kellotaululla (`.aikajana`, perheen
     päivä imperfektissä; Tottakain komponentit.js:n t13-lisäys antaa käännösriville lang=pt-BR ja .kaannos-luokan),
     ääntäminen (preesens vai imperfekti korvalla: puhuu / puhui, tulee / tuli), tehtävät 1–3.
   - osa B (#t13-b): keskiviikon lounas; dialogi B (17 repliikkiä: Jay ja Anderson jakoivat postia, Maian virhe
     ”nukkuin” → nukuin, Anderson oppii Jaylta sanan Kiitos!), Frases prontas, kielioppi kolmena lohkona tehtävineen
     (1: -i- ja vartalon muutokset tyypeittäin → tehtävä 4; 2: heikko aste 1. ja 2. persoonassa → tehtävä 5;
     3: ajanilmaukset → tehtävät 6–9; Purjon ja Hiiden viestit .chat-komponentissa
     tehtävässä 7), kulttuuri (kaivoslaisen päivä, kuva pao-de-queijo), Na rua (me oltiin, me mentiin), kotitehtävä, itsearvio.
   Lunastaa lupaukset ”Hän oli lääkäri / Isä kuoli · o passado: lição 13” (t05) ja ”Olin järvessä / menin järveen · lição
   13” (t06): kielioppi B, kohta 1. Maian perheen sanat portugaliksi kertojan tekstissä; Anderson sanoo vain yhden suomen
   sanan (mies 7). Kaikki puhuvat kirjakieltä; puhekieli vain Na rua -nurkassa. Hiiden 😐 merkitään .emoji.
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat yksin (t14 → t13), tärkeä asia, ehkä, tai, joku, tapahtua (jotain),
   mikään, varmaan, että, yrittää, koska, tyttö, lopettaa, jatkaa, elää, silloin; dialogit 21 + 17; sanalistat 20 → 12.
   Uuno ja Eenok eivät näy tällä oppitunnilla. Korvanappi ja pyöreä talo poistettu 23.10.2026 (omistaja: ”Just remove
   the whole part of the earpiece … Return to the previous where jay just teaches finnish to anderson and he just knows
   the guy from mail rounds”). */
Kurssi.lisaa({
  id: 't13',
  lyhyt: '13',
  jakso: 'Lição 13',
  otsikko: 'Um dia em família: o passado',
  lahde: 'Tema: a rotina da família em Belo Horizonte · Gramática: o passado (imperfekti) afirmativo, o radical de cada tipo, a consoante fraca em eu, você, nós, vocês; quando? (eilen, viime viikolla, kaksi päivää sitten) · Pronúncia: presente ou passado pelo ouvido (puhuu × puhui)',
  aiheet: ['aika', 'koti', 'toiminta', 'viestinta'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; em casa, com os pais, em Belo Horizonte' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; dorme como uma pedra' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; entrega as cartas da rua toda manhã' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; lê as mensagens da Maia em Helsinque' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; dirige como se as regras fossem para os outros' }
  },

  sanasto: [
    'herätä', 'nukkua', 'keittää', 'jutella', 'jakaa', 'posti', 'kirje', 'naapuri', 'pilates', 'aamukahvi', 'unikeko',
    'hereillä', 'koko', 'vihdoin', 'paitsi', 'yksin', 'tyttö', 'lopettaa', 'jatkaa', 'elää',
    'eilen', 'aamu', 'iltapäivä', 'ilta', 'yö', 'viikko', 'viime', 'viime viikolla', 'viime vuonna', 'päivää sitten', 'silloin'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · A primeira manhã em casa',
      html: `
<ul class="tavoitteet">
  <li>Você entende o que alguém fez: <span class="fi">Walker meni pilatekseen.</span> <span class="fi">Anderson jakoi postia.</span></li>
  <li>Você diz quando: <span class="fi">aamulla, iltapäivällä, illalla, eilen</span>.</li>
  <li>Você ouve a diferença entre presente e passado: <span class="fi">puhuu</span> × <span class="fi">puhui</span>.</li>
  <li>Parte B: o passado em todas as pessoas (<span class="fi">heräsin, heräsit, heräsimme</span>), o radical de cada tipo (<span class="fi">ostaa → osti, antaa → antoi</span>), a consoante fraca (<span class="fi">nukuin</span>) e <span class="fi">viime viikolla</span>, <span class="fi">kaksi päivää sitten</span>.</li>
</ul>
<p data-paikka="bh-bairro">Terça-feira, 22 de dezembro: a primeira manhã em casa, na casa dos pais da Maia (ontem foi o dia do Mercado Central). Casa mineira acorda cedo. O Walker sai às sete para o pilates. O Anderson sai às oito, de boné do Rei Leão, para entregar as cartas dos vizinhos, como faz todo dia. A Marta já fez café e já conversou com meia rua por cima do muro. O Jay, depois da viagem e de um dia inteiro no Mercado Central, dorme. Às dez ele aparece na cozinha. Na cozinha, a Maia e o Jay falam finlandês: nesta casa, é a língua secreta dos dois.</p>

<section class="osio">
  <h2>Diálogo A: Missä kaikki ovat?</h2>
  <p class="ohje">Ouça primeiro sem tradução. Quase todos os verbos estão no passado: procure o <span class="fi pala">-i-</span> depois do radical (<span class="fi">heräsivät</span>; na forma de “ele”, no fim: <span class="fi">meni, keitti</span>). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t13-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="Terça-feira, dez horas da manhã. O Jay entra na cozinha.">Tiistai, kello kymmenen aamulla. Jay tulee keittiöön.</p>
    <p class="s" data-h="jay" data-pt="Bom dia! Onde está todo mundo?">Huomenta! Missä kaikki <span data-l="olla#2">ovat</span>?</p>
    <p class="s" data-h="maia" data-pt="Bom dia, dorminhoco! O pai e a mãe acordaram já às seis.">Huomenta, unikeko! Isä ja äiti heräsivät jo kello kuusi.</p>
    <p class="s" data-h="jay" data-pt="Às seis? Por quê?">Kello kuusi? Miksi?</p>
    <p class="s" data-h="maia" data-pt="O pai foi para o pilates. Ele vai lá três vezes por semana.">Isä meni pilatekseen. Hän käy siellä kolme kertaa viikossa.</p>
    <p class="s" data-h="jay" data-pt="E o Anderson? Onde ele está?">Entä Anderson? Missä hän <span data-l="olla#2">on</span>?</p>
    <p class="s" data-h="maia" data-pt="O Anderson saiu às oito. Ele entrega a correspondência sempre de manhã.">Anderson lähti kello kahdeksan. Hän jakaa postia aina aamulla.</p>
    <p class="s" data-h="jay" data-pt="Sozinho? Todo dia?">Yksin? Joka päivä?</p>
    <p class="s" data-h="maia" data-pt="Sozinho. Para ele, é uma coisa importante.">Yksin. Se on hänelle tärkeä asia.</p>
    <p class="s" data-h="jay" data-pt="E a Marta? O que ela fez?">Entä Marta? Mitä hän teki?</p>
    <p class="s" data-h="maia" data-pt="Ela fez café e conversou com a vizinha. Duas horas!">Hän keitti kahvia ja jutteli naapurin kanssa. Kaksi tuntia!</p>
    <p class="s" data-h="jay" data-pt="Duas horas? Sobre o que elas falaram?">Kaksi tuntia? Mistä he puhuivat?</p>
    <p class="s" data-h="maia" data-pt="Talvez sobre o Natal. Ou sobre você!">Ehkä joulusta. Tai sinusta!</p>
    <p class="s" data-h="jay" data-pt="E você? O que você fez?">Entä sinä? Mitä sinä teit?</p>
    <p class="s" data-h="maia" data-pt="Eu acordei às sete, tomei café e li o jornal. Depois esperei você.">Minä heräsin kello seitsemän, join kahvia ja luin lehteä. Sitten odotin sinua.</p>
    <p class="s" data-h="jay" data-pt="Desculpa. Eu dormi como uma pedra.">Anteeksi. Minä nukuin kuin kivi.</p>
    <p class="s" data-h="maia" data-pt="Claro. Geólogo dorme como pedra. Mas alguém ligou às três da madrugada. Aconteceu alguma coisa?">Tietysti. Geologi nukkuu kuin kivi. Mutta joku soitti kello kolme yöllä. Tapahtuiko jotain?</p>
    <p class="s" data-h="jay" data-pt="Não sei. Eu dormi. Eu não sei de nada.">En tiedä. Minä nukuin. En tiedä mitään.</p>
    <p class="s" data-h="maia" data-pt="Provavelmente foi a Purjo. Ela não lembra que aqui é noite.">Se oli varmaan Purjo. Hän ei muista, että täällä on yö.</p>
    <p class="s" data-h="kertoja" data-pt="A Marta entra na cozinha. Ela dá café para o Jay.">Marta tulee keittiöön. Hän antaa Jaylle kahvia.</p>
  </div>
  <p>— Bom dia, Jay! Pão de queijo? — diz a Marta, em português, e põe na mesa uma cesta quentinha. O Jay entende duas palavras, “pão” e “queijo”. É o suficiente. Às dez e meia ele já comeu seis.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Isä ja äiti heräsivät. Isä meni pilatekseen.</span> = o pai e a mãe acordaram; o pai foi para o pilates · o passado com <span class="fi pala">-i-</span>: parte B desta lição</li>
      <li><span class="fi">kolme kertaa viikossa</span> = três vezes por semana · <span class="fi">viikossa</span>: “em cada semana”, com <span class="fi pala">-ssa</span></li>
      <li><span class="fi">Hän jakaa postia.</span> = ele entrega a correspondência · <span class="fi">postia</span>: partitivo, uma quantidade sem contar (lição 3)</li>
      <li><span class="fi">naapurin kanssa</span> = com a vizinha · <span class="fi">kanssa</span> (com) vem depois do genitivo, como <span class="fi">Maian kanssa</span></li>
      <li><span class="fi">Odotin sinua.</span> = eu esperei você · <span class="fi">odottaa</span> pede o partitivo: <span class="fi">sinua</span></li>
      <li><span class="fi">Minä nukuin kuin kivi.</span> = eu dormi como uma pedra · <span class="fi">kuin</span> = como (como em <span class="fi">Onnellinen kuin possu</span>, lição 8)</li>
      <li><span class="fi">Huomenta, unikeko!</span> = bom dia, dorminhoco! · <span class="fi">unikeko</span> é “monte de sono”: carinhoso</li>
      <li><span class="fi">Tapahtuiko jotain?</span> = aconteceu alguma coisa? · <span class="fi">En tiedä mitään.</span> = não sei de nada (<span class="fi">mitään</span> só com <span class="fi">ei</span>) · <span class="fi">varmaan</span> = provavelmente</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="bh-bairro">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="O dia da família e quando" data-sanat="herätä,keittää,jutella,jakaa,posti,naapuri,aamu,iltapäivä,ilta,eilen,viikko,viime"></div>
  <p>As outras palavras da lição estão no <a href="#t13-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>A mensagem da Maia: o dia da família no relógio</h2>
  <p>À noite, a Maia escreve para a Purjo, em finlandês, o que todos fizeram. Ela escreve como geóloga em trabalho de campo: hora por hora. Repare: quase todos os verbos têm um <span class="fi pala">-i-</span> depois do radical (<span class="fi">heräsivät, keitti, meni, söimme</span>). É o passado. A regra completa vem na parte B.</p>
  <p class="s" data-h="maia" data-pt="Oi, Purjo! Aqui está o dia em Belo Horizonte, hora por hora.">Hei Purjo! Tässä on päivä Belo Horizontessa, tunti tunnilta.</p>
  <p class="ohje">Toque numa linha: o relógio gira até a hora e você ouve a frase. O botão embaixo do relógio toca o dia inteiro.</p>
  <div class="aikajana" data-h="maia">
    <p data-aika="6:00" data-hahmo="walker" data-h="maia" data-puhu="Isä ja äiti heräsivät kello kuusi." data-pt="O pai e a mãe acordaram às seis.">Isä ja äiti heräsivät kello kuusi.</p>
    <p data-aika="6:30" data-hahmo="marta" data-h="maia" data-puhu="Äiti keitti kahvia." data-pt="A mãe fez café.">Äiti keitti kahvia.</p>
    <p data-aika="7:00" data-hahmo="walker" data-h="maia" data-puhu="Isä meni pilatekseen." data-pt="O pai foi para o pilates.">Isä meni pilatekseen.</p>
    <p data-aika="7:15" data-hahmo="maia" data-h="maia" data-puhu="Minä heräsin ja join kahvia." data-pt="Eu acordei e tomei café.">Minä heräsin ja join kahvia.</p>
    <p data-aika="8:00" data-hahmo="anderson" data-h="maia" data-puhu="Anderson lähti ja jakoi postia." data-pt="O Anderson saiu e entregou a correspondência.">Anderson lähti ja jakoi postia.</p>
    <p data-aika="9:00" data-hahmo="marta" data-h="maia" data-puhu="Äiti jutteli naapurin kanssa." data-pt="A mãe conversou com a vizinha.">Äiti jutteli naapurin kanssa.</p>
    <p data-aika="9:30" data-hahmo="walker" data-h="maia" data-puhu="Isä tuli kotiin. Hän osti leipää." data-pt="O pai voltou para casa. Ele comprou pão.">Isä tuli kotiin. Hän osti leipää.</p>
    <p data-aika="10:00" data-hahmo="jay" data-h="maia" data-puhu="Jay heräsi. Vihdoin!" data-pt="O Jay acordou. Finalmente!">Jay heräsi. Vihdoin!</p>
    <p data-aika="12:00" data-hahmo="marta" data-h="maia" data-puhu="Me söimme lounasta." data-pt="Nós almoçamos.">Me söimme lounasta.</p>
    <p data-aika="15:00" data-hahmo="walker" data-h="maia" data-puhu="Iltapäivällä satoi. Isä luki lehteä." data-pt="À tarde choveu. O pai leu o jornal.">Iltapäivällä satoi. Isä luki lehteä.</p>
    <p data-aika="20:00" data-hahmo="anderson" data-h="maia" data-puhu="Anderson ja Jay katsoivat Leijonakuningasta." data-pt="O Anderson e o Jay assistiram ao Rei Leão.">Anderson ja Jay katsoivat Leijonakuningasta.</p>
    <p data-aika="22:00" data-hahmo="jay" data-h="maia" data-puhu="Kello kymmenen kaikki nukkuivat. Paitsi Jay!" data-pt="Às dez todo mundo dormia. Menos o Jay!">Kello kymmenen kaikki nukkuivat. Paitsi Jay!</p>
  </div>
  <p class="s" data-h="maia" data-pt="Um abraço, Maia. O Jay diz: oi!">Terveisin Maia. Jay sanoo: moi!</p>
  <p>Uma frase em português pede dois passados: “acordaram” (uma vez) e “dormia” (durante um tempo). Em finlandês, os dois são o mesmo: <span class="fi">heräsivät</span>, <span class="fi">nukkuivat</span>. Não há dois passados simples: um só, para os dois.</p>
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Pronúncia: presente ou passado? Ouça o fim</h2>
  <p>Presente e passado às vezes diferem por uma letra. No presente, a forma de “ele” muitas vezes termina em vogal <b>longa</b>: <span class="fi">puhuu, tulee, menee</span>. No passado, termina num <span class="fi pala">i</span> <b>curto</b>: <span class="fi">puhui</span>, <span class="fi"><span data-l="tulla:imperf.3s">tuli</span></span>, <span class="fi">meni</span>. É o comprimento de novo (lição 0): <span class="fi pala">ee</span> longo × <span class="fi pala">i</span> curto. No tipo 2, as vogais trocam de lugar: <span class="fi">syö → söi</span>, <span class="fi">juo → joi</span>. Ouça os pares e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="Ela fala.">Hän puhuu.</li>
    <li class="s" data-pt="Ela falou.">Hän puhui.</li>
    <li class="s" data-pt="Ele vem.">Hän tulee.</li>
    <li class="s" data-pt="Ele veio.">Hän tuli.</li>
    <li class="s" data-pt="Ele vai.">Hän menee.</li>
    <li class="s" data-pt="Ele foi.">Hän meni.</li>
    <li class="s" data-pt="Ele come.">Hän syö.</li>
    <li class="s" data-pt="Ele comeu.">Hän söi.</li>
  </ul>
  <p><b>Truque:</b> o acento fica na primeira sílaba, mas o fim decide o tempo: <span class="fi pala">TU-lee</span> tem <span class="fi pala">ee</span> longo, <span class="fi pala">TU-li</span> tem <span class="fi pala">i</span> curto. Em <span class="fi">puhui</span> e <span class="fi">söi</span>, o <span class="fi pala">i</span> faz ditongo, como em “pai” e “dói”.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ligue: quando?</h3>
    <ul class="yhdista">
      <li data-pari="ontem">eilen</li>
      <li data-pari="hoje">tänään</li>
      <li data-pari="amanhã">huomenna</li>
      <li data-pari="de manhã">aamulla</li>
      <li data-pari="à tarde">iltapäivällä</li>
      <li data-pari="à noite">illalla</li>
      <li data-pari="na semana passada">viime viikolla</li>
      <li data-pari="há dois dias">kaksi päivää sitten</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>2. Ouça: presente ou passado?</h3>
    <p class="ohje">Aperte ▶ sem ler. Não há palavra de tempo na frase: decida pelo fim do verbo (vogal longa ou <span class="fi pala">-i</span>).</p>
    <div class="valinta" data-kuuntele="Jay puhui suomea." data-oikea="passado">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">presente</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Maia tulee kotiin." data-oikea="presente">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">presente</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Anderson meni ulos." data-oikea="passado">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">presente</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Marta syö leipää." data-oikea="presente">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">presente</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Walker joi kahvia." data-oikea="passado">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">presente</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Jay lukee kirjaa." data-oikea="presente">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">presente</button><button type="button">passado</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>3. Você entendeu? A manhã e a mensagem da Maia</h3>
    <p class="ohje">Volte ao diálogo e ao relógio se precisar.</p>
    <div class="valinta" data-oikea="Jay">
      <p class="kysymys"><span class="fi">Kuka heräsi kello kymmenen?</span></p>
      <div class="vaihtoehdot"><button type="button">Maia</button><button type="button">Jay</button><button type="button">Walker</button></div>
    </div>
    <div class="valinta" data-oikea="Pilatekseen.">
      <p class="kysymys"><span class="fi">Mihin Walker meni aamulla?</span></p>
      <div class="vaihtoehdot"><button type="button">Pilatekseen.</button><button type="button">Kauppaan.</button><button type="button">Keittiöön.</button></div>
    </div>
    <div class="valinta" data-oikea="Hän jakoi postia.">
      <p class="kysymys"><span class="fi">Mitä Anderson teki kello kahdeksan?</span></p>
      <div class="vaihtoehdot"><button type="button">Hän keitti kahvia.</button><button type="button">Hän luki lehteä.</button><button type="button">Hän jakoi postia.</button></div>
    </div>
    <div class="valinta" data-oikea="Naapurin kanssa.">
      <p class="kysymys"><span class="fi">Kenen kanssa Marta jutteli?</span></p>
      <div class="vaihtoehdot"><button type="button">Jayn kanssa.</button><button type="button">Naapurin kanssa.</button><button type="button">Walkerin kanssa.</button></div>
    </div>
    <div class="valinta" data-oikea="Leijonakuningasta.">
      <p class="kysymys"><span class="fi">Mitä Anderson ja Jay katsoivat illalla?</span></p>
      <div class="vaihtoehdot"><button type="button">Leijonakuningasta.</button><button type="button">Televisiota.</button><button type="button">Lehteä.</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · O que vocês fizeram? O passado',
      html: `
<ul class="tavoitteet">
  <li>Você conta o que fez: <span class="fi">Heräsin kello seitsemän. Söimme lounasta.</span></li>
  <li>Você forma o passado de cada tipo: <span class="fi">ostaa → osti, antaa → antoi, lukea → luki, olla → oli, mennä → meni, syödä → söi, haluta → halusi, tarvita → tarvitsi</span>.</li>
  <li>Você usa a consoante fraca em eu, você, nós e vocês: <span class="fi">minä nukuin, sinä otit</span>, mas <span class="fi">hän nukkui</span>.</li>
  <li>Você diz quando: <span class="fi">eilen, viime viikolla, kaksi päivää sitten</span>.</li>
</ul>

<p data-paikka="bh-bairro">Quarta-feira, 23 de dezembro. Hoje o Jay acordou às sete: o Anderson bateu na porta do quarto, de boné do Rei Leão e com a bolsa de cartas no ombro. Os dois entregaram as cartas da rua inteira, e em cada casa alguém oferecia um cafezinho. Ao meio-dia em ponto a família está à mesa, porque em Minas o almoço é ao meio-dia. A Marta serve arroz, feijão e frango. E a Maia quer saber, em finlandês, como foi a manhã.</p>

<section class="osio">
  <h2>Diálogo B: Lounaalla</h2>
  <p class="ohje">Ouça primeiro sem tradução. A Maia comete um erro no passado de <span class="fi">nukkua</span>: qual? E o Anderson diz a sua segunda palavra em finlandês.</p>
  <div class="kpl" id="t13-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="Quarta-feira, meio-dia. A família inteira está almoçando.">Keskiviikko, kello kaksitoista. Koko perhe syö lounasta.</p>
    <p class="s" data-h="maia" data-pt="Jay, o que vocês fizeram de manhã?">Jay, mitä te teitte aamulla?</p>
    <p class="s" data-h="jay" data-pt="Nós entregamos a correspondência. Andamos três horas!">Me jaoimme postia. Kävelimme kolme tuntia!</p>
    <p class="s" data-h="maia" data-pt="Três horas? Você andou três horas?">Kolme tuntia? Sinä kävelit kolme tuntia?</p>
    <p class="s" data-h="jay" data-pt="Andei. E tomei seis cafés. E você? Dormiu?">Kävelin. Ja join kuusi kahvia. Entä sinä? Nukuitko sinä?</p>
    <p class="s" data-h="maia" data-hairio="nukkuin → nukuin" data-pt="Dormi! Eu dormi até as oito. (errado: nukkuin)"><span class="pala">Nukkuin</span>! Minä <span class="pala">nukkuin</span> kello kahdeksaan.</p>
    <p class="s" data-h="jay" data-pt="É nukuin, Maia. Eu nukuin, você nukuit, mas ele nukkui.">Nukuin, Maia. Minä nukuin, sinä nukuit, mutta hän nukkui.</p>
    <p class="s" data-h="maia" data-pt="Nukuin. Obrigada, professor!">Nukuin. Kiitos, opettaja!</p>
    <p class="s" data-h="jay" data-pt="E eu tentei falar português com os vizinhos.">Ja minä yritin puhua portugalia naapureille.</p>
    <p class="s" data-h="maia" data-pt="E eles entenderam você?">Ymmärsivätkö he sinua?</p>
    <p class="s" data-h="jay" data-pt="Um pouco. Mas todos me deram café, porque eu estava com o Anderson.">Vähän. Mutta kaikki antoivat minulle kahvia, koska olin Andersonin kanssa.</p>
    <p class="s" data-h="kertoja" data-pt="A Marta serve comida para o Anderson.">Marta antaa Andersonille ruokaa.</p>
    <p class="s" data-h="anderson" data-pt="Obrigado!">Kiitos!</p>
    <p class="s" data-h="kertoja" data-pt="A Marta não entende. O Walker ri.">Marta ei ymmärrä. Walker nauraa.</p>
    <p class="s" data-h="jay" data-pt="Eu ensinei isso hoje de manhã. O Anderson disse isso vinte vezes.">Minä opetin sen aamulla. Anderson sanoi sen kaksikymmentä kertaa.</p>
    <p class="s" data-h="kertoja" data-pt="A menina da vizinha chega à porta. Ela tem um bolo para a Marta.">Ovelle tulee naapurin tyttö. Hänellä on kakku Martalle.</p>
    <p class="s" data-h="anderson" data-pt="Obrigado! Obrigado! Obrigado!">Kiitos! Kiitos! Kiitos!</p>
  </div>
  <p>A Maia explica para a mãe, em português, que <span class="fi">kiitos</span> é “obrigado”. Daqui até o Natal, o Anderson agradece tudo em finlandês: o café, o pão de queijo, o feijão e o carteiro de verdade, que não entende nada.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Mitä te teitte aamulla?</span> = o que vocês fizeram de manhã? · <span class="fi">tehdä</span>: <span class="fi">tein, teit, teki, teimme, teitte, tekivät</span></li>
      <li><span class="fi">Kävelimme kolme tuntia.</span> = andamos três horas · o tempo que dura vai no partitivo, como depois de todo número (lição 3)</li>
      <li><span class="fi">Nukuitko sinä?</span> = você dormiu? · a pergunta no passado leva <span class="fi pala">-ko/-kö</span> no verbo, como no presente</li>
      <li><span class="fi">kello kahdeksaan</span> = até as oito · <span class="fi pala">-aan</span> (o “para onde?”, lição 6) com horas: “até quando?”</li>
      <li><span class="fi">Kiitos, opettaja!</span> = obrigada, professor!</li>
      <li><span class="fi">Minä opetin sen.</span> = eu ensinei isso · <span class="fi">sen</span>: o objeto inteiro (lição 12)</li>
      <li><span class="fi">koko perhe</span> = a família inteira · <span class="fi">koko</span> vem antes e não muda</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="bh-sade">
  <h2>Gramática 1 · O passado: um <span class="fi pala">-i-</span> antes da terminação</h2>

  <h3>1. Um só passado</h3>
  <p>O finlandês tem <b>um só passado</b> simples, o <b>imperfekti</b>. Ele é “falei” e também “falava”. A marca é um <span class="fi pala">-i-</span> entre o radical e a terminação de pessoa. As terminações são as mesmas do presente; só a forma de “ele” muda: termina no próprio <span class="fi pala">-i</span>, sem vogal longa.</p>
  <table class="taivutus">
    <tr><th>presente</th><th>passado</th><th>português</th></tr>
    <tr><td><span class="fi">minä puhun</span></td><td><span class="fi">minä puhuin</span></td><td>eu falei, falava</td></tr>
    <tr><td><span class="fi">sinä puhut</span></td><td><span class="fi">sinä puhuit</span></td><td>você falou, falava</td></tr>
    <tr><td><span class="fi">hän puhuu</span></td><td><span class="fi">hän puhui</span></td><td>ele, ela falou, falava</td></tr>
    <tr><td><span class="fi">me puhumme</span></td><td><span class="fi">me puhuimme</span></td><td>nós falamos, falávamos</td></tr>
    <tr><td><span class="fi">te puhutte</span></td><td><span class="fi">te puhuitte</span></td><td>vocês falaram, falavam</td></tr>
    <tr><td><span class="fi">he puhuvat</span></td><td><span class="fi">he puhuivat</span></td><td>eles, elas falaram, falavam</td></tr>
  </table>
  <p>Lembra das frases prontas? Na lição 5, a Purjo disse <span class="fi">Hän oli lääkäri.</span> e o Jay disse <span class="fi">Isä kuoli.</span> Na lição 6, a Maia disse <span class="fi">Minä menin järveen.</span> e o Jay <span class="fi">Minä <span data-l="olla#2">olin</span> järvessä.</span> Agora você vê o sistema: <span class="fi">ole- → oli</span>, <span class="fi">kuole- → kuoli</span>, <span class="fi">mene- → menin</span>.</p>

  <h3>2. O radical muda antes do -i-</h3>
  <p>O <span class="fi pala">-i-</span> encosta no radical, e a última vogal se ajusta. Parta da forma de “ele” no presente:</p>
  <table class="taivutus">
    <tr><th>tipo</th><th>presente</th><th>passado</th><th>o que acontece</th></tr>
    <tr><td>1</td><td><span class="fi">hän puhuu, kysyy</span></td><td><span class="fi">hän puhui, kysyi</span></td><td>depois de o, u, y, ö: só + i</td></tr>
    <tr><td>1</td><td><span class="fi">hän lukee, lähtee</span></td><td><span class="fi">hän luki, lähti</span></td><td>o e cai</td></tr>
    <tr><td>1</td><td><span class="fi">hän ostaa, ottaa</span></td><td><span class="fi">hän osti, otti</span></td><td>o a cai (primeira vogal o ou u)</td></tr>
    <tr><td>1</td><td><span class="fi">hän antaa, jakaa</span></td><td><span class="fi">hän antoi, jakoi</span></td><td>-aa com a na 1ª sílaba: o a vira oi (em -ää, o ä só cai: keittää → keitti)</td></tr>
    <tr><td>1</td><td><span class="fi">hän tietää, ymmärtää</span></td><td><span class="fi">hän tiesi, ymmärsi</span></td><td>t vira s</td></tr>
    <tr><td>2</td><td><span class="fi">hän syö, juo</span></td><td><span class="fi">hän söi, joi</span></td><td>o ditongo encurta: yö → ö, uo → o</td></tr>
    <tr><td>3</td><td><span class="fi">hän tulee, menee, on</span></td><td><span class="fi">hän tuli, meni, oli</span></td><td>o e vira i</td></tr>
    <tr><td>4</td><td><span class="fi">hän haluaa, herää</span></td><td><span class="fi">hän halusi, heräsi</span></td><td>+ si</td></tr>
    <tr><td>5</td><td><span class="fi">hän tarvitsee</span></td><td><span class="fi">hän tarvitsi</span></td><td>o e vira i: -tsi</td></tr>
  </table>
  <p>Irregulares de verdade são poucos: <span class="fi">käydä → kävi</span>, <span class="fi">tehdä → teki</span>, <span class="fi">nähdä → näki</span>. E não é preciso decorar a tabela: a bolha de cada verbo mostra o passado de “ele”. Aprenda o verbo junto com ele, como você aprende o genitivo de um substantivo.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercício: o passado</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Complete com o passado</h3>
    <p class="ohje">Escreva o verbo no passado, na pessoa certa. O verbo está entre parênteses.</p>
    <div class="aukot" lang="fi-FI">
      <p>Eilen minä <span class="aukko" data-oikea="heräsin"></span> kello seitsemän. <span data-ei-kuplaa>(herätä)</span></p>
      <p>Walker <span class="aukko" data-oikea="meni"></span> pilatekseen. <span data-ei-kuplaa>(mennä)</span></p>
      <p>Anderson <span class="aukko" data-oikea="jakoi"></span> postia. <span data-ei-kuplaa>(jakaa)</span></p>
      <p>Me <span class="aukko" data-oikea="söimme"></span> lounasta kello kaksitoista. <span data-ei-kuplaa>(syödä)</span></p>
      <p>Jay <span class="aukko" data-oikea="nukkui"></span> kuin kivi. <span data-ei-kuplaa>(nukkua)</span></p>
      <p>Sinä <span class="aukko" data-oikea="kävelit"></span> kolme tuntia! <span data-ei-kuplaa>(kävellä)</span></p>
      <p>Marta <span class="aukko" data-oikea="keitti"></span> kahvia. <span data-ei-kuplaa>(keittää)</span></p>
      <p>Naapurit <span class="aukko" data-oikea="antoivat"></span> Jaylle kahvia. <span data-ei-kuplaa>(antaa)</span></p>
      <p>Walker <span class="aukko" data-oikea="lopetti"></span> työt viime vuonna. <span data-ei-kuplaa>(lopettaa)</span></p>
      <p>Lounaan jälkeen Maia <span class="aukko" data-oikea="jatkoi"></span> kirjaa. <span data-ei-kuplaa>(jatkaa)</span></p>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="bh-sade">
  <h2>Gramática 2 · Eu, você, nós, vocês: a consoante fraca</h2>
  <p>A gradação do passado segue a do presente (lição 2). No tipo 1, <b>eu, você, nós e vocês</b> têm a consoante fraca, e <b>ele e eles</b> a forte: <span class="fi">minä nukun</span> → <span class="fi">minä nukuin</span>, mas <span class="fi">hän nukkuu</span> → <span class="fi">hän nukkui</span>.</p>
  <table class="taivutus">
    <tr><th>pessoa</th><th>nukkua</th><th>ottaa</th><th>antaa</th></tr>
    <tr><td><span class="fi">minä</span><span class="kaannos" lang="pt-BR">eu</span></td><td><span class="fi">nukuin</span></td><td><span class="fi">otin</span></td><td><span class="fi">annoin</span></td></tr>
    <tr><td><span class="fi">sinä</span><span class="kaannos" lang="pt-BR">você</span></td><td><span class="fi">nukuit</span></td><td><span class="fi">otit</span></td><td><span class="fi">annoit</span></td></tr>
    <tr><td><span class="fi">hän</span><span class="kaannos" lang="pt-BR">ele, ela</span></td><td><span class="fi">nukkui</span></td><td><span class="fi">otti</span></td><td><span class="fi">antoi</span></td></tr>
    <tr><td><span class="fi">me</span><span class="kaannos" lang="pt-BR">nós</span></td><td><span class="fi">nukuimme</span></td><td><span class="fi">otimme</span></td><td><span class="fi">annoimme</span></td></tr>
    <tr><td><span class="fi">te</span><span class="kaannos" lang="pt-BR">vocês</span></td><td><span class="fi">nukuitte</span></td><td><span class="fi">otitte</span></td><td><span class="fi">annoitte</span></td></tr>
    <tr><td><span class="fi">he</span><span class="kaannos" lang="pt-BR">eles, elas</span></td><td><span class="fi">nukkuivat</span></td><td><span class="fi">ottivat</span></td><td><span class="fi">antoivat</span></td></tr>
  </table>
  <p>Nos tipos 3 e 4 a gradação é ao contrário, e todas as pessoas ficam fortes, como no presente: <span class="fi">tavata → minä tapasin, hän tapasi</span>.</p>
  <div class="huomio">
    <p><b>Armadilha: a Maia disse <span class="pala">nukkuin</span>.</b> É o erro mais comum: pegar a forma forte de “ele” (<span class="fi">nukkui</span>) e pôr <span class="fi pala">-n</span>. Faça o contrário: parta do “eu” no presente, que já tem a consoante certa: <span class="fi">nukun → nukuin</span>, <span class="fi">otan → otin</span>, <span class="fi">annan → annoin</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercício: eu ou ele?</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Eu ou ele? A consoante certa</h3>
    <p class="ohje">Escolha a forma. Atenção à pessoa e à consoante: fraca em eu, você, nós e vocês; forte em ele e eles.</p>
    <div class="valinta" data-oikea="nukuin">
      <p class="kysymys"><span class="fi">Eilen minä ___ hyvin.</span> <span class="fi" data-ei-kuplaa>(nukkua)</span></p>
      <div class="vaihtoehdot"><button type="button">nukkui</button><button type="button">nukuin</button><button type="button">nukun</button></div>
    </div>
    <div class="valinta" data-oikea="otit">
      <p class="kysymys"><span class="fi">Eilen sinä ___ kahvia.</span> <span class="fi" data-ei-kuplaa>(ottaa)</span></p>
      <div class="vaihtoehdot"><button type="button">otit</button><button type="button">otti</button><button type="button">otat</button></div>
    </div>
    <div class="valinta" data-oikea="soitimme">
      <p class="kysymys"><span class="fi">Eilen me ___ Purjolle.</span> <span class="fi" data-ei-kuplaa>(soittaa)</span></p>
      <div class="vaihtoehdot"><button type="button">soittivat</button><button type="button">soitamme</button><button type="button">soitimme</button></div>
    </div>
    <div class="valinta" data-oikea="luki">
      <p class="kysymys"><span class="fi">Eilen hän ___ kirjaa.</span> <span class="fi" data-ei-kuplaa>(lukea)</span></p>
      <div class="vaihtoehdot"><button type="button">luin</button><button type="button">luki</button><button type="button">lukee</button></div>
    </div>
    <div class="valinta" data-oikea="odotitte">
      <p class="kysymys"><span class="fi">Eilen te ___ Hiittä.</span> <span class="fi" data-ei-kuplaa>(odottaa)</span></p>
      <div class="vaihtoehdot"><button type="button">odotitte</button><button type="button">odottivat</button><button type="button">odotatte</button></div>
    </div>
    <div class="valinta" data-oikea="antoivat">
      <p class="kysymys"><span class="fi">Eilen naapurit ___ kahvia.</span> <span class="fi" data-ei-kuplaa>(antaa)</span></p>
      <div class="vaihtoehdot"><button type="button">annoimme</button><button type="button">antavat</button><button type="button">antoivat</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="bh-sade">
  <h2>Gramática 3 · Quando? <span class="fi">eilen, viime viikolla, kaksi päivää sitten</span></h2>
  <table class="taivutus">
    <tr><th>finlandês</th><th>português</th></tr>
    <tr><td><span class="fi">eilen</span></td><td>ontem</td></tr>
    <tr><td><span class="fi">tänään aamulla</span></td><td>hoje de manhã</td></tr>
    <tr><td><span class="fi">eilen illalla</span></td><td>ontem à noite</td></tr>
    <tr><td><span class="fi">iltapäivällä</span></td><td>à tarde</td></tr>
    <tr><td><span class="fi">viime viikolla</span></td><td>na semana passada</td></tr>
    <tr><td><span class="fi">viime vuonna</span></td><td>no ano passado</td></tr>
    <tr><td><span class="fi">kaksi päivää sitten</span></td><td>há dois dias</td></tr>
    <tr><td><span class="fi">silloin</span></td><td>então, naquela hora, naquela época</td></tr>
  </table>
  <p><span class="fi">viime</span> (passado, última) não muda. <span class="fi">sitten</span> depois de um tempo quer dizer “há”: <span class="fi">kaksi päivää sitten</span> = há dois dias, com o tempo no partitivo, como depois de todo número.</p>
  <ul class="esim">
    <li class="s" data-pt="Ontem o Walker foi para o pilates.">Eilen Walker meni pilatekseen.</li>
    <li class="s" data-pt="Na semana passada nós estávamos em Helsinque.">Viime viikolla <span data-l="olla#2">olimme</span> Helsingissä.</li>
    <li class="s" data-pt="Há dois dias o Jay comeu bolo.">Kaksi päivää sitten Jay söi kakkua.</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o português escolhe entre “comi” e “comia”, “fui” e “ia”. O finlandês não escolhe: <span class="fi">söin</span> é “comi” e também “comia”. <span class="fi">Kun olin lapsi, söin paljon kakkua.</span> = quando eu era criança, eu comia muito bolo. Não procure um segundo passado simples: não existe.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios da parte B</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Ouça: quando foi?</h3>
    <p class="ohje">Aperte ▶ e escolha quando aconteceu.</p>
    <div class="valinta" data-kuuntele="Kaksi päivää sitten Jay söi kakkua." data-oikea="há dois dias">
      <p class="kysymys">Quando o Jay comeu bolo?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">ontem</button><button type="button">há dois dias</button><button type="button">na semana passada</button></div>
    </div>
    <div class="valinta" data-kuuntele="Viime viikolla Maia oli Helsingissä." data-oikea="na semana passada">
      <p class="kysymys">Quando a Maia estava em Helsinque?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">na semana passada</button><button type="button">há dois dias</button><button type="button">no ano passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Eilen illalla Anderson katsoi Leijonakuningasta." data-oikea="ontem à noite">
      <p class="kysymys">Quando o Anderson assistiu ao Rei Leão?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">ontem de manhã</button><button type="button">hoje à noite</button><button type="button">ontem à noite</button></div>
    </div>
    <div class="valinta" data-kuuntele="Tänään aamulla satoi." data-oikea="hoje de manhã">
      <p class="kysymys">Quando choveu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">hoje de manhã</button><button type="button">ontem de manhã</button><button type="button">hoje à tarde</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Leia as mensagens da Purjo e do Hiisi</h3>
    <p class="ohje">A Purjo leu a mensagem da Maia de manhã cedo em Helsinque, quando em Belo Horizonte ainda era madrugada: são cinco horas de diferença. Depois do almoço, a Maia responde. E à tarde o Jay escreve para o irmão. Leia e responda.</p>
    <div class="chat" data-otsikko="Purjo" data-paiva="keskiviikko" data-mina="maia">
      <p data-h="purjo" data-aika="3.12" data-pt="Bom dia, Maia! Obrigada pela mensagem! Eu li três vezes.">Huomenta Maia! Kiitos viestistä! Luin sen kolme kertaa.</p>
      <p data-h="purjo" data-aika="3.13" data-pt="O Jay acordou às dez?! Ai, ai.">Jay heräsi kello kymmenen?! Voi voi.</p>
      <p data-h="purjo" data-aika="3.14" data-pt="(em “inglês de rali”:) Sinto falta de vocês! O que vocês vão fazer hoje?"><span class="pala" lang="en">Ai mis juu ool!</span> Mitä te teette tänään?</p>
      <p data-h="maia" data-aika="13.30" data-pt="Oi, Purjo! Hoje o Jay acordou às sete!">Hei Purjo! Tänään Jay heräsi kello seitsemän!</p>
      <p data-h="purjo" data-aika="13.31" data-pt="Às sete?! Ele está doente?">Kello seitsemän?! Onko hän sairas?</p>
      <p data-h="maia" data-aika="13.33" data-pt="Não. Ele entregou a correspondência com o Anderson. Eles andaram três horas, e o Jay ensinou finlandês para o Anderson.">Ei ole. Hän jakoi postia Andersonin kanssa. He kävelivät kolme tuntia, ja Jay opetti Andersonille suomea.</p>
      <p data-h="purjo" data-aika="13.34" data-pt="Que ótimo! O que o Anderson aprendeu?"><span data-l="hieno#2">Hienoa</span>! Mitä Anderson oppi?</p>
      <p data-h="maia" data-aika="13.35" data-pt="Ele aprendeu a palavra “kiitos”. Ele disse vinte vezes.">Hän oppi sanan kiitos. Hän sanoi sen kaksikymmentä kertaa.</p>
      <p data-h="purjo" data-aika="13.36" data-pt="(em “inglês de rali”:) Muito bom! Obrigada, Anderson!"><span class="pala" lang="en">Veri kuut!</span> Kiitos, Anderson!</p>
    </div>
    <div class="chat" data-otsikko="Hiisi" data-paiva="keskiviikko" data-mina="jay">
      <p data-h="jay" data-aika="15.02" data-pt="Oi, Hiisi! O que você fez ontem?">Moi Hiisi! Mitä sinä teit eilen?</p>
      <p data-h="hiisi" data-aika="15.20" data-pt="Ontem eu dirigi até a Lapônia.">Minä ajoin eilen Lappiin.</p>
      <p data-h="jay" data-aika="15.21" data-pt="Até a Lapônia? Quantas horas?">Lappiin? Kuinka monta tuntia?</p>
      <p data-h="hiisi" data-aika="15.30" data-pt="Seis.">Kuusi.</p>
      <p data-h="jay" data-aika="15.31" data-pt="Seis horas? Você dirigiu rápido demais!">Kuusi tuntia? Sinä ajoit liian nopeasti!</p>
      <p data-h="hiisi" data-aika="15.40" data-pt="Levei duas multas.">Sain kaksi sakkoa.</p>
      <p data-h="jay" data-aika="15.41" data-pt="Hiisi! E o que você fez na Lapônia?">Hiisi! Ja mitä sinä teit Lapissa?</p>
      <p data-h="hiisi" data-aika="15.55" data-pt="Comi rena. Depois dirigi de volta para casa.">Söin poroa. Sitten ajoin kotiin.</p>
      <p data-h="hiisi" data-aika="15.55" data-pt="(cara de paisagem)"><span class="emoji">😐</span></p>
    </div>
    <div class="valinta" data-oikea="Kello seitsemän.">
      <p class="kysymys"><span class="fi">Milloin Jay heräsi tänään?</span></p>
      <div class="vaihtoehdot"><button type="button">Kello kymmenen.</button><button type="button">Kello seitsemän.</button><button type="button">Kello kuusi.</button></div>
    </div>
    <div class="valinta" data-oikea="Andersonin kanssa.">
      <p class="kysymys"><span class="fi">Kenen kanssa Jay jakoi postia?</span></p>
      <div class="vaihtoehdot"><button type="button">Andersonin kanssa.</button><button type="button">Maian kanssa.</button><button type="button">Walkerin kanssa.</button></div>
    </div>
    <div class="valinta" data-oikea="Kiitos.">
      <p class="kysymys"><span class="fi">Minkä sanan Anderson oppi?</span></p>
      <div class="vaihtoehdot"><button type="button">Moi.</button><button type="button">Anteeksi.</button><button type="button">Kiitos.</button></div>
    </div>
    <div class="valinta" data-oikea="Lappiin.">
      <p class="kysymys"><span class="fi">Mihin Hiisi ajoi eilen?</span></p>
      <div class="vaihtoehdot"><button type="button">Tampereelle.</button><button type="button">Helsinkiin.</button><button type="button">Lappiin.</button></div>
    </div>
    <div class="valinta" data-oikea="Kaksi.">
      <p class="kysymys"><span class="fi">Kuinka monta sakkoa Hiisi sai?</span></p>
      <div class="vaihtoehdot"><button type="button">Yksi.</button><button type="button">Kaksi.</button><button type="button">Kolme.</button></div>
    </div>
    <div class="valinta" data-oikea="Poroa.">
      <p class="kysymys"><span class="fi">Mitä Hiisi söi Lapissa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kalaa.</button><button type="button">Kakkua.</button><button type="button">Poroa.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Traduza para o finlandês</h3>
    <div class="kaanna"><p class="pt">Ontem eu acordei às sete.</p><p class="s" data-pt="Ontem eu acordei às sete.">Eilen heräsin kello seitsemän.</p></div>
    <div class="kaanna"><p class="pt">O Anderson entregou a correspondência.</p><p class="s" data-pt="O Anderson entregou a correspondência.">Anderson jakoi postia.</p></div>
    <div class="kaanna"><p class="pt">Nós almoçamos ao meio-dia.</p><p class="s" data-pt="Nós almoçamos ao meio-dia.">Söimme lounasta kello kaksitoista.</p></div>
    <div class="kaanna"><p class="pt">Você dormiu bem?</p><p class="s" data-pt="Você dormiu bem?">Nukuitko hyvin?</p></div>
    <div class="kaanna"><p class="pt">Na semana passada a Purjo comprou uma luminária.</p><p class="s" data-pt="Na semana passada a Purjo comprou uma luminária.">Viime viikolla Purjo osti lampun.</p></div>
    <div class="kaanna"><p class="pt">O pai do Jay viveu em Helsinque.</p><p class="s" data-pt="O pai do Jay viveu em Helsinque.">Jayn isä <span data-l="elää:imperf.3s">eli</span> Helsingissä.</p></div>
    <div class="kaanna"><p class="pt">Há dois dias nós estávamos em Helsinque.</p><p class="s" data-pt="Há dois dias nós estávamos em Helsinque.">Kaksi päivää sitten <span data-l="olla#2">olimme</span> Helsingissä.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda às perguntas</h3>
    <p class="ohje">Responda sobre você, em voz alta, antes de abrir o modelo. Use o passado.</p>
    <details class="vastaus"><summary lang="fi-FI">Mihin aikaan sinä heräsit tänään?</summary><p class="s" data-pt="Acordei às sete. (diga a sua hora)">Heräsin kello seitsemän.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä söit eilen?</summary><p class="s" data-pt="Ontem eu comi peixe e arroz.">Söin eilen kalaa ja riisiä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä teit eilen illalla?</summary><p class="s" data-pt="Ontem à noite eu li um livro.">Eilen illalla luin kirjaa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Missä sinä olit viime viikolla?</summary><p class="s" data-pt="Na semana passada eu estava no trabalho.">Viime viikolla olin töissä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kenelle sinä soitit eilen?</summary><p class="s" data-pt="Liguei para a mãe.">Soitin äidille.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä kuuluu?</summary><p class="s" data-pt="Bem, obrigado. Ontem eu estava cansado, por isso dormi muito.">Hyvää, kiitos. Eilen olin väsynyt, siksi nukuin paljon.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Missä sinä asuit, kun olit pieni tyttö tai poika?</summary><p class="s" data-pt="Naquela época eu morava em Belo Horizonte. Vivi lá vinte anos.">Silloin asuin Belo Horizontessa. Elin siellä kaksikymmentä vuotta.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä teit eilen yksin?</summary><p class="s" data-pt="Li um livro sozinho. Parei às dez e continuei de manhã.">Luin kirjaa yksin. Lopetin kello kymmenen ja jatkoin aamulla.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Lopetitko työt jo?</summary><p class="s" data-pt="Acabei agora mesmo. Amanhã eu continuo.">Lopetin juuri. Huomenna jatkan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä söit aamulla?</summary><p class="s" data-pt="Comi uns dois pães doces. Pedi café para a vizinha.">Söin pari pullaa. Pyysin naapurilta kahvia.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Milloin sinä palasit kotiin?</summary><p class="s" data-pt="Voltei para casa às dez. Percebi que todos estavam dormindo.">Palasin kotiin kello kymmenen. Huomasin, että kaikki nukkuivat.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Oletko varma?</summary><p class="s" data-pt="Tenho certeza.">Olen varma.</p></details>
  </div>
</section>

<aside class="kulttuuri" data-paikka="natal-bh">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Um dia mineiro: café cedo, pão de queijo e almoço ao meio-dia</h3>
  <figure class="kuva" data-kuva="pao-de-queijo"></figure>
  <p>Em Minas Gerais a casa acorda cedo. O primeiro café sai por volta das seis, coado na hora, forte e doce, e passa a manhã na garrafa térmica. Ao lado vem o <b>pão de queijo</b>, feito de polvilho (o amido da mandioca), ovo, leite e queijo mineiro. Conta-se que ele nasceu nas cozinhas das fazendas de Minas, onde quase não havia trigo e o polvilho sobrava.</p>
  <p>O almoço é a refeição principal e é cedo: em muita casa mineira, ao meio-dia em ponto, com arroz, feijão, couve, angu e frango. À tarde vem o café da tarde, de novo com pão de queijo ou bolo. O jantar é leve.</p>
  <p>A Finlândia não é tão diferente: lá o almoço também é cedo (às onze no trabalho, lição 7), e os finlandeses bebem café como poucos povos no mundo. O primeiro café do dia tem até nome: <span class="fi">aamukahvi</span>. A diferença: na Finlândia, quase sempre sem açúcar.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Me oltiin, me mentiin: o “nós” da rua</h3>
  <p>Na fala, “nós” no passado quase nunca é <span class="fi">olimme, menimme, söimme</span>. Diz-se <span class="fi">me</span> + uma forma impessoal, da mesma família (o passivo) de <span class="fi">Mennään!</span> (vamos!), que a lição 20 explica. Você <b>não precisa</b> falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">me olimme</span></td><td><span class="fi">me oltiin</span></td><td>nós estávamos, estivemos</td></tr>
    <tr><td><span class="fi">me menimme</span></td><td><span class="fi">me mentiin</span></td><td>nós fomos</td></tr>
    <tr><td><span class="fi">me söimme</span></td><td><span class="fi">me syötiin</span></td><td>nós comemos</td></tr>
  </table>
  <p class="s" data-h="hiisi" data-kirja="Me olimme eilen Lapissa. Me söimme poroa." data-pt="Ontem a gente estava na Lapônia. A gente comeu rena.">Me oltiin eilen Lapissa. Me syötiin poroa.</p>
  <p class="s" data-h="jay" data-kirja="Me menimme kotiin kello kaksitoista." data-pt="A gente voltou para casa ao meio-dia.">Me mentiin kotiin kello kaksitoista.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="natal-bh">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t13">
    <h3>Lição de casa</h3>
    <p>Escreva, como a Maia, uma mensagem sobre o seu dia de ontem, hora por hora: seis frases no passado. Use pelo menos duas pessoas diferentes (<span class="fi">minä</span> e <span class="fi">hän</span> ou <span class="fi">me</span>) e três palavras de tempo (<span class="fi">aamulla, iltapäivällä, illalla, eilen</span>…). Depois leia em voz alta, com o <span class="fi pala">i</span> do passado curto e firme.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia, sobre quarta-feira)</summary>
      <p class="s" data-pt="Ontem eu acordei às oito.">Eilen heräsin kello kahdeksan.</p>
      <p class="s" data-pt="O Jay e o Anderson entregaram a correspondência.">Jay ja Anderson jakoivat postia.</p>
      <p class="s" data-pt="Nós almoçamos ao meio-dia.">Me söimme lounasta kello kaksitoista.</p>
      <p class="s" data-pt="À tarde o Jay estava na rua, e eu esperei por ele.">Iltapäivällä Jay oli ulkona, ja minä odotin häntä.</p>
      <p class="s" data-pt="À noite eu escrevi para a Purjo.">Illalla kirjoitin Purjolle.</p>
      <p class="s" data-pt="O Jay dormiu às dez. Finalmente!">Jay nukkui kello kymmenen. Vihdoin!</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t13">
    <li>Entendo e conto o que a família fez: Walker meni pilatekseen, Anderson jakoi postia.</li>
    <li>Formo o passado de cada tipo: osti, antoi, luki, söi, oli, halusi, tarvitsi.</li>
    <li>Uso a consoante fraca em eu e você: nukuin, otit (mas hän nukkui).</li>
    <li>Digo quando: eilen, aamulla, illalla, viime viikolla, kaksi päivää sitten.</li>
    <li>Ouço a diferença entre presente e passado: puhuu × puhui, tulee × tuli.</li>
    <li>Reconheço na fala: me oltiin, me mentiin.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'imperfekti', otsikko: 'O passado: -i- + a terminação', taso: 'essencial', hakuosa: 'h-imperfekti', treeni: 't13-imperfekti',
      html: `
<p><b>Forma:</b> radical + <span class="fi pala">-i-</span> + a terminação de pessoa do presente. A forma de “ele” termina no <span class="fi pala">-i</span>. Um só passado para “falei” e “falava”.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">minä heräsin</span></td><td>eu acordei</td></tr>
  <tr><td><span class="fi">sinä heräsit</span></td><td>você acordou</td></tr>
  <tr><td><span class="fi">hän heräsi</span></td><td>ele, ela acordou</td></tr>
  <tr><td><span class="fi">me heräsimme</span></td><td>nós acordamos</td></tr>
  <tr><td><span class="fi">te heräsitte</span></td><td>vocês acordaram</td></tr>
  <tr><td><span class="fi">he heräsivät</span></td><td>eles, elas acordaram</td></tr>
</table>
<p><b>Pergunta:</b> <span class="fi pala">-ko/-kö</span> no verbo, como no presente: <span class="fi">Heräsitkö? Söikö hän?</span> O passado negativo (<span class="fi">en herännyt</span>) vem na lição 15.</p>`
    },
    {
      id: 'vartalo13', otsikko: 'O radical de cada tipo: osti, antoi, luki, söi', taso: 'essencial', hakuosa: 'h-imperfekti', treeni: 't13-vartalo',
      html: `
<p>A última vogal do radical se ajusta ao <span class="fi pala">-i-</span>. A forma de “ele”:</p>
<table class="taivutus">
  <tr><th>infinitivo</th><th>passado (hän)</th><th>regra</th></tr>
  <tr><td><span class="fi">puhua</span><span class="kaannos" lang="pt-BR">falar</span></td><td><span class="fi">puhui</span></td><td>o, u, y, ö: + i</td></tr>
  <tr><td><span class="fi">lukea</span><span class="kaannos" lang="pt-BR">ler</span></td><td><span class="fi">luki</span></td><td>e cai</td></tr>
  <tr><td><span class="fi">ostaa</span><span class="kaannos" lang="pt-BR">comprar</span></td><td><span class="fi">osti</span></td><td>a cai (o, u na 1ª sílaba)</td></tr>
  <tr><td><span class="fi">antaa</span><span class="kaannos" lang="pt-BR">dar</span></td><td><span class="fi">antoi</span></td><td>-aa com a na 1ª sílaba: a → oi (em -ää, o ä cai: keitti)</td></tr>
  <tr><td><span class="fi">tietää</span><span class="kaannos" lang="pt-BR">saber</span></td><td><span class="fi">tiesi</span></td><td>t → s</td></tr>
  <tr><td><span class="fi">syödä</span><span class="kaannos" lang="pt-BR">comer</span></td><td><span class="fi">söi</span></td><td>yö → ö, uo → o</td></tr>
  <tr><td><span class="fi">olla</span><span class="kaannos" lang="pt-BR">ser, estar</span></td><td><span class="fi">oli</span></td><td>e → i (tipo 3)</td></tr>
  <tr><td><span class="fi">mennä</span><span class="kaannos" lang="pt-BR">ir</span></td><td><span class="fi">meni</span></td><td>e → i (tipo 3)</td></tr>
  <tr><td><span class="fi">haluta</span><span class="kaannos" lang="pt-BR">querer</span></td><td><span class="fi">halusi</span></td><td>+ si (tipo 4)</td></tr>
  <tr><td><span class="fi">tarvita</span><span class="kaannos" lang="pt-BR">precisar</span></td><td><span class="fi">tarvitsi</span></td><td>-tsi (tipo 5)</td></tr>
</table>
<p>A bolha de cada verbo mostra o passado de “ele”: confira sempre que tiver dúvida.</p>`
    },
    {
      id: 'heikko13', otsikko: 'Eu e você: a consoante fraca (nukuin, otin)', taso: 'atenção', hakuosa: 'h-imperfekti', treeni: 't13-imperfekti',
      html: `
<p>Tipo 1: <b>eu, você, nós, vocês</b> com a consoante fraca, <b>ele, eles</b> com a forte, como no presente. Parta do “eu” no presente:</p>
<table class="taivutus">
  <tr><th>presente (eu)</th><th>passado (eu)</th><th>passado (ele)</th></tr>
  <tr><td><span class="fi">nukun</span><span class="kaannos" lang="pt-BR">durmo</span></td><td><span class="fi">nukuin</span></td><td><span class="fi">nukkui</span></td></tr>
  <tr><td><span class="fi">otan</span><span class="kaannos" lang="pt-BR">pego</span></td><td><span class="fi">otin</span></td><td><span class="fi">otti</span></td></tr>
  <tr><td><span class="fi">annan</span><span class="kaannos" lang="pt-BR">dou</span></td><td><span class="fi">annoin</span></td><td><span class="fi">antoi</span></td></tr>
  <tr><td><span class="fi">luen</span><span class="kaannos" lang="pt-BR">leio</span></td><td><span class="fi">luin</span></td><td><span class="fi">luki</span></td></tr>
  <tr><td><span class="fi">lähden</span><span class="kaannos" lang="pt-BR">parto</span></td><td><span class="fi">lähdin</span></td><td><span class="fi">lähti</span></td></tr>
</table>
<p>Tipos 3 e 4: todas as pessoas fortes, como no presente: <span class="fi">tapasin, hän tapasi</span>.</p>`
    },
    {
      id: 'aika13', otsikko: 'Quando? eilen, viime viikolla, kaksi päivää sitten', taso: 'essencial', hakuosa: 'h-aika', treeni: 't13-aika',
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">eilen</span></td><td>ontem</td></tr>
  <tr><td><span class="fi">aamulla</span></td><td>de manhã</td></tr>
  <tr><td><span class="fi">iltapäivällä</span></td><td>à tarde</td></tr>
  <tr><td><span class="fi">illalla</span></td><td>à noite</td></tr>
  <tr><td><span class="fi">viime viikolla</span></td><td>na semana passada</td></tr>
  <tr><td><span class="fi">viime vuonna</span></td><td>no ano passado</td></tr>
  <tr><td><span class="fi">kaksi päivää sitten</span></td><td>há dois dias</td></tr>
</table>
<p><span class="fi">viime</span> não muda. Com <span class="fi">sitten</span>, o tempo vai no partitivo: <span class="fi">kaksi päivää sitten</span>. As palavras se combinam: <span class="fi">eilen illalla</span> = ontem à noite.</p>
<ul class="esim">
  <li class="s" data-pt="Ontem à noite o Anderson assistiu ao Rei Leão.">Eilen illalla Anderson katsoi Leijonakuningasta.</li>
</ul>`
    },
    {
      id: 'aantaminen13', otsikko: 'Pronúncia: presente ou passado?', taso: 'essencial', hakuosa: 'h-pituus', treeni: 't13-kuuntele',
      html: `
<p>O fim do verbo decide o tempo: vogal <b>longa</b> no presente (<span class="fi">puhuu, tulee</span>), <span class="fi pala">i</span> <b>curto</b> no passado (<span class="fi">puhui</span>, <span class="fi"><span data-l="tulla:imperf.3s">tuli</span></span>). No tipo 2, a primeira vogal do ditongo cai e vem o <span class="fi pala">-i</span>: <span class="fi">syö → söi</span>.</p>
<ul class="esim">
  <li class="s" data-pt="Ele vai. – Ele foi.">Hän menee. – Hän meni.</li>
  <li class="s" data-pt="Ele bebe. – Ele bebeu.">Hän juo. – Hän joi.</li>
</ul>`
    },
    {
      id: 'sudenkuopat13', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>Um passado só:</b> <span class="fi">söin</span> = comi e comia. Não procure a diferença do português.</li>
  <li><b>Consoante fraca em eu e você:</b> <span class="fi">nukuin, otit</span>, nunca <span class="pala">nukkuin</span>; a forte fica com <span class="fi">hän nukkui</span>.</li>
  <li><b>O fim decide:</b> <span class="fi">tulee</span> (vem) × <span class="fi"><span data-l="tulla:imperf.3s">tuli</span></span> (veio). Não estique o <span class="fi pala">i</span> do passado.</li>
  <li><b>a → oi ou a cai:</b> <span class="fi">antaa → antoi</span>, mas <span class="fi">ostaa → osti</span>. Na dúvida, a bolha mostra.</li>
  <li><b><span class="fi">viime</span> não muda:</b> <span class="fi">viime viikolla, viime vuonna</span>.</li>
</ul>`
    }
  ]
});
