/* Tottakai, lição 15: jouluaatto Maian vanhempien luona Belo Horizontessa (Passon jakso 15 Maian näkökulmasta). Oma
   materiaali, ei kirjan tekstiä. Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5b ”Oppitunti 15”.
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t15): 24.12. aamu, +30 °C, talo täynnä koristeita. Maia kääntää Martan tehtävälistan Jaylle suomeksi
     (dialogi A, 21 repliikkiä); kikka A: Martan lista suomeksi (`.tehtavalista`, Tottakain komponentit.js; käsky sinä ja
     te: Hae tuolit! Kattakaa pöytä!) ja Purjon joulukalenteri (uusi komponentti `.joulukalenteri`: luukut avautuvat
     suomen joulusanoiksi, Jay lukee). Ääntäminen: j on i (joulu, ja, jo, juoda). Tehtävät 1–3.
   - osa B (#t15-b): videopuhelu Purjolle ja Hiidelle (Helsingissä lunta, pimeää kello 15.30): kielteinen imperfekti
     (en nukkunut, emme syöneet, emme käyneet, en saanut) ja konditionaali fraaseina (haluaisin, olisi mukava, voisitko);
     kakku-vitsi palaa: Haluaisin kakkua (oikein tällä kertaa). Tehtävät 4–9, kulttuuri (joulu kesällä ja Suomen joulu,
     kuva natal-bh), Na rua (Mä en syöny kinkkuu), kotitehtävä, itsearvio.
   Brasilian jaksot (OPPITUNNIT §2 ja §5b): suomea puhuvat vain Maia, Jay, Purjo, Hiisi ja Anderson yhdellä sanalla;
   Martan sanat kerrotaan portugaliksi. Kirjakieli kaikkialla; puhekieli vain Na rua -nurkassa. ”Olisi kiva” on
   kirjoitettu muotoon ”olisi mukava”, koska kiva on leksikossa puhekielen tietue (gramatica.js); Na rua näyttää ”ois kiva”.
   Lunastaa lupaukset ”o condicional: lição 15” (t11) ja ”o passado negativo vem na lição 15” (t13, h-imperfekti).
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat asia, valmis, että, joku muu, ehkä, löytää, itse, oikein, edes,
   uskoa, pahoillani, toivoa, koska, tahtoa (tunnistus); dialogit 21 + 19 (B: Purjon unohtunut lahja = villasukat);
   kielioppi kahtena lohkona tehtävineen (kielteinen imperfekti → tehtävät 4–5, konditionaali → tehtävät 6–9). */
Kurssi.lisaa({
  id: 't15',
  lyhyt: '15',
  jakso: 'Lição 15',
  otsikko: 'Véspera de Natal: o passado negativo e “eu gostaria”',
  lahde: 'Tema: véspera de Natal em Belo Horizonte, tarefas da casa, Natal finlandês · Gramática: passado negativo (en nukkunut, emme syöneet), o particípio (-nut/-nyt, -neet), condicional como frases prontas (haluaisin, olisi mukava, voisitko), ordens para você e para vocês (revisão) · Pronúncia: o j finlandês é i (joulu, ja, jo)',
  aiheet: ['koti', 'ruoka', 'vapaa', 'tunteet'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; traduz a lista da mãe para o finlandês' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; esqueceu um presente da mãe no fundo da mala' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; conta os pratos em finlandês' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; liga de Helsinque, onde já escureceu' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; dirige até na véspera de Natal' }
  },

  sanasto: [
    'ystävä', 'ihana', 'jouluaatto', 'joulu', 'joulukoriste', 'joulukuusi', 'joulupukki', 'tähti',
    'piparkakku', 'joulukalenteri', 'luukku', 'kinkku', 'kalkkuna', 'puuro', 'joulupuuro',
    'joulusauna', 'joulurauha', 'joulupöytä', 'tehtävä', 'tehtävälista', 'jääkaappi', 'täynnä', 'kääntää',
    'hakea', 'kattaa', 'laskea', 'lasi', 'tuoli', 'mukava', 'edes', 'toivoa', 'tahtoa'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · A lista da Marta e o calendário da Purjo',
      html: `
<ul class="tavoitteet">
  <li>Você entende e dá as ordens de uma lista de tarefas: <span class="fi">Hae tuolit!</span> <span class="fi">Kattakaa pöytä!</span></li>
  <li>Você conhece as palavras do Natal finlandês: <span class="fi">joulupukki, joulukuusi, lahja, kinkku</span>.</li>
  <li>Você diz o <span class="fi pala">j</span> finlandês como <span class="pala">i</span>: <span class="fi">joulu, ja, jo</span>.</li>
  <li>Parte B: o que você não fez (<span class="fi">en nukkunut</span>) e o que você gostaria (<span class="fi">haluaisin</span>).</li>
</ul>
<p data-paikka="bh-bairro">24 de dezembro, véspera de Natal. Nove da manhã em Belo Horizonte, e o termômetro da varanda já marca trinta graus. A casa da Marta parece uma loja de enfeites: Papai Noel de pelúcia na escada, pisca-pisca nas janelas, um presépio na estante e neve de algodão em cima da geladeira. A Marta acordou às cinco e escreveu a lista do dia, quem faz o quê até a ceia, com letra de médico e em português rápido. O Jay não entende nada. A Maia traduz.</p>

<section class="osio">
  <h2>Diálogo A: Martan tehtävälista</h2>
  <p class="ohje">Ouça primeiro sem tradução. Preste atenção nas ordens: para uma pessoa, sem terminação (<span class="fi">Hae!</span>); para duas ou mais, com <span class="fi pala">-kaa/-kää</span> (<span class="fi">Kattakaa!</span>). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t15-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="É véspera de Natal. São nove da manhã, e lá fora já faz trinta graus.">On jouluaatto. Kello on yhdeksän aamulla, ja ulkona on jo kolmekymmentä astetta.</p>
    <p class="s" data-h="kertoja" data-pt="A casa está cheia de enfeites de Natal. Na porta da geladeira está a lista da Marta.">Talo on täynnä joulukoristeita. Jääkaapin ovessa on Martan lista.</p>
    <p class="s" data-h="jay" data-pt="Maia, que lista é aquela? Eu não entendo.">Maia, mikä tuo lista on? Minä en ymmärrä sitä.</p>
    <p class="s" data-h="maia" data-pt="É a lista de tarefas da minha mãe. Eu traduzo para você em finlandês.">Se on äidin tehtävälista. Minä käännän sen sinulle suomeksi.</p>
    <p class="s" data-h="jay" data-pt="Tem muitas coisas nela?">Onko siinä monta asiaa?</p>
    <p class="s" data-h="maia" data-pt="Tem. A mamãe quer que tudo esteja pronto às sete.">On. Äiti haluaa, että kaikki on valmis kello seitsemän.</p>
    <p class="s" data-h="maia" data-pt="A primeira tarefa é para você: vá buscar as cadeiras na varanda!">Ensimmäinen tehtävä on sinulle: Hae tuolit parvekkeelta!</p>
    <p class="s" data-h="jay" data-pt="Certo. E depois?">Selvä. Entä sitten?</p>
    <p class="s" data-h="maia" data-pt="Depois, para você e o Anderson: ponham a mesa! Ponham sete pratos e sete copos na mesa.">Sitten sinulle ja Andersonille: Kattakaa pöytä! Laittakaa pöydälle seitsemän lautasta ja seitsemän lasia.</p>
    <p class="s" data-h="jay" data-pt="Sete? Nós somos só cinco.">Seitsemän? Meitä on vain viisi.</p>
    <p class="s" data-h="maia" data-pt="A mamãe convidou também a Moara e a Malu.">Äiti kutsui myös Moaran ja Malun.</p>
    <p class="s" data-h="jay" data-pt="Vem mais alguém?">Tuleeko joku muu?</p>
    <p class="s" data-h="maia" data-pt="Talvez os vizinhos. E a menina da vizinha. A última tarefa: faça a salada!">Ehkä naapurit. Ja naapurin tyttö. Viimeinen tehtävä: <span data-l="tehdä:imper.2s">Tee</span> salaatti!</p>
    <p class="s" data-h="jay" data-pt="Salada? Eu não sou cozinheiro. Eu só faço café.">Salaatti? Minä en ole kokki. Minä keitän vain kahvia.</p>
    <p class="s" data-h="maia" data-pt="Ótimo. Você faz o café, e eu faço a salada. Mas primeiro: as cadeiras!">Hyvä. Sinä keität kahvia, ja minä teen salaatin. Mutta ensin: tuolit!</p>
    <p class="s" data-h="jay" data-pt="E onde estavam as cadeiras? Eu não acho.">Ja missä tuolit olivat? En löydä niitä.</p>
    <p class="s" data-h="maia" data-pt="Na varanda, claro! Procure você mesmo.">Parvekkeella, tietysti! Etsi itse.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay busca as cadeiras, e o Anderson conta os pratos.">Jay hakee tuolit, ja Anderson laskee lautaset.</p>
    <p class="s" data-h="anderson" data-pt="Sete! (em finlandês, como o Jay ensinou)">Seitsemän!</p>
    <p class="s" data-h="maia" data-pt="Certo! Agora tudo está pronto.">Oikein! Nyt kaikki on valmis.</p>
  </div>
  <p>O Jay leva vinte minutos para buscar quatro cadeiras: na varanda tem rede, e a rede tem sombra. O Anderson conta os pratos em finlandês, como o Jay ensinou, e comemora no sete como quem marca um gol.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Talo on täynnä joulukoristeita.</span> = a casa está cheia de enfeites de Natal · <span class="fi">täynnä</span> (cheio) + partitivo plural (lição 11)</li>
      <li><span class="fi">Minä käännän sen sinulle suomeksi.</span> = eu traduzo para você em finlandês · <span class="fi">suomeksi</span> = em finlandês: o caso -ksi, lição 16</li>
      <li><span class="fi">Meitä on vain viisi.</span> = somos só cinco · palavra por palavra, “de nós há só cinco”: <span class="fi">meitä</span> é o partitivo de <span class="fi">me</span></li>
      <li><span class="fi">Hae tuolit parvekkeelta!</span> = vá buscar as cadeiras na varanda! · a ordem para você e o plural -t (lição 9)</li>
      <li><span class="fi">Kattakaa pöytä!</span> = ponham a mesa! · a ordem para vocês (lição 14); <span class="fi">kattaa pöytä</span> = pôr a mesa</li>
      <li><span class="fi">Äiti kutsui myös Moaran ja Malun.</span> = a mamãe convidou também a Moara e a Malu · o passado (lição 13) e o objeto inteiro (lição 12)</li>
      <li><span class="fi"><span data-l="tehdä:imper.2s">Tee</span> salaatti!</span> = faça a salada! · <span class="fi"><span data-l="tehdä:imper.2s">tee</span></span> é a ordem de <span class="fi">tehdä</span> (fazer); sozinho, <span class="fi">tee</span> é chá</li>
      <li><span class="fi">Tuleeko joku muu?</span> = vem mais alguém? · <span class="fi">Etsi itse!</span> = procure você mesmo! · <span class="fi">Kaikki on valmis.</span> = tudo está pronto</li>
    </ul>
  </div>
</section>

<section class="osio">
  <h2>A lista da Marta em finlandês</h2>
  <p class="ohje">A Maia copiou a lista da mãe em finlandês e colou ao lado da original. Toque numa tarefa: a Maia lê a ordem. Marque ✓ quando a tarefa estiver feita. Para uma pessoa, a ordem não tem terminação (<span class="fi">Hae!</span>); para duas ou mais, <span class="fi pala">-kaa/-kää</span> (<span class="fi">Kattakaa!</span>); “não!” é <span class="fi">älä</span> para uma pessoa e <span class="fi">älkää</span> para várias.</p>
  <div class="tehtavalista" data-h="maia" data-otsikko="Jouluaatto: Martan tehtävälista" data-valmis="Kaikki on valmista. Hyvää joulua!">
    <p data-kenelle="jay" data-puhu="Jay, hae tuolit parvekkeelta!" data-pt="Jay, vá buscar as cadeiras na varanda!">Jay, hae tuolit parvekkeelta!</p>
    <p data-kenelle="anderson" data-puhu="Jay ja Anderson, kattakaa pöytä!" data-pt="Jay e Anderson, ponham a mesa!">Jay ja Anderson, kattakaa pöytä!</p>
    <p data-kenelle="walker" data-puhu="Isä, hae kakku!" data-pt="Pai, vá buscar o bolo!">Isä, hae kakku!</p>
    <p data-kenelle="maia" data-puhu="Maia, tee salaatti!" data-pt="Maia, faça a salada!">Maia, tee salaatti!</p>
    <p data-kenelle="jay" data-puhu="Jay, keitä kahvia!" data-pt="Jay, faça café!">Jay, keitä kahvia!</p>
    <p data-kenelle="walker" data-puhu="Isä ja Anderson, älkää syökö kakkua ennen iltaa!" data-pt="Pai e Anderson, não comam o bolo antes da noite!">Isä ja Anderson, älkää syökö kakkua ennen iltaa!</p>
    <p data-kenelle="jay" data-puhu="Jay, älä nuku sohvalla!" data-pt="Jay, não durma no sofá!">Jay, älä nuku sohvalla!</p>
  </div>
  <p>A última linha não estava na lista da Marta. A Maia acrescentou.</p>
</section>

<section class="osio">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="O Natal e a mesa" data-sanat="joulu,jouluaatto,joulukuusi,joulupukki,lahja,joulukoriste,tähti,tehtävälista,hakea,kattaa,tuoli,lautanen"></div>
  <p>As outras palavras da lição estão no <a href="#t15-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio">
  <h2>O calendário do Advento da Purjo</h2>
  <p>No fundo da mala do Jay, embaixo das bermudas que ele não usa, a Maia acha um envelope da Purjo: um calendário do Advento (<span class="fi">joulukalenteri</span>) de papel, feito à mão. Na Finlândia, as crianças, e muitos adultos, abrem uma portinha (<span class="fi">luukku</span>) por dia, de 1 a 24 de dezembro. O da Purjo tem doze portinhas, de 13 a 24, e atrás de cada uma há uma palavra do Natal finlandês. O Jay devia entregar o calendário no dia 13. Ele esqueceu. Hoje é dia 24: a Maia abre todas de uma vez, e o Jay, sem graça, lê as palavras.</p>
  <p class="ohje">Toque nas portinhas. O Jay diz a palavra; toque nela para ver a bolha. Quantas palavras começam com <span class="fi">joulu</span>?</p>
  <div class="joulukalenteri" data-otsikko="Purjon joulukalenteri">
    <div data-paiva="17" data-ikoni="🎶"><p class="s" data-h="jay" data-pt="canção de Natal">joululaulu</p></div>
    <div data-paiva="22" data-ikoni="🎄"><p class="s" data-h="jay" data-pt="árvore de Natal">joulukuusi</p></div>
    <div data-paiva="13" data-ikoni="⭐"><p class="s" data-h="jay" data-pt="estrela">tähti</p></div>
    <div data-paiva="20" data-ikoni="🧖"><p class="s" data-h="jay" data-pt="sauna de Natal">joulusauna</p></div>
    <div data-paiva="15" data-ikoni="🍪"><p class="s" data-h="jay" data-pt="biscoito de gengibre">piparkakku</p></div>
    <div data-paiva="24" data-ikoni="🕊️"><p class="s" data-h="jay" data-pt="paz de Natal">joulurauha</p></div>
    <div data-paiva="19" data-ikoni="🍖"><p class="s" data-h="jay" data-pt="presunto de Natal">kinkku</p></div>
    <div data-paiva="14" data-ikoni="🥣"><p class="s" data-h="jay" data-pt="mingau de arroz de Natal">joulupuuro</p></div>
    <div data-paiva="23" data-ikoni="🎅"><p class="s" data-h="jay" data-pt="Papai Noel">joulupukki</p></div>
    <div data-paiva="16" data-ikoni="🧝"><p class="s" data-h="jay" data-pt="duende de Natal">tonttu</p></div>
    <div data-paiva="21" data-ikoni="🎁"><p class="s" data-h="jay" data-pt="presente">lahja</p></div>
    <div data-paiva="18" data-ikoni="💌"><p class="s" data-h="jay" data-pt="cartão de Natal">joulukortti</p></div>
    <p class="s jk-loppu" data-h="jay" data-pt="Feliz Natal, Maia! Desculpe, mamãe.">Hyvää joulua, Maia! Anteeksi, äiti.</p>
  </div>
  <p>Resposta: seis palavras começam com <span class="fi">joulu</span> (Natal). O finlandês faz palavras novas colando palavras: <span class="fi">joulu</span> + <span class="fi">kuusi</span> (abeto) = <span class="fi">joulukuusi</span>, árvore de Natal. E <span class="fi">joulupukki</span> é, palavra por palavra, o “bode de Natal”: antigamente, quem trazia os presentes era um bode.</p>
</section>

<section class="osio">
  <h2>Pronúncia: o j finlandês é i</h2>
  <p>Em português, o <span class="fi pala">j</span> de “janela” é um som chiado. Em finlandês, <span class="fi pala">j</span> é o som de <span class="pala">i</span> curto colado na vogal seguinte, como em “iate” ou em “maio”: <span class="fi">ja</span> soa <span class="pala">iá</span>, <span class="fi">jo</span> soa <span class="pala">iô</span>. Na primeira vez que leu <span class="fi">joulu</span>, a Maia disse <span class="pala">jôlu</span>, com o j de “janela” e sem o u. A Purjo achou que era uma palavra nova. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="Natal">joulu</li>
    <li class="s" data-pt="e">ja</li>
    <li class="s" data-pt="já">jo</li>
    <li class="s" data-pt="beber">juoda</li>
    <li class="s" data-pt="Papai Noel">joulupukki</li>
    <li class="s" data-pt="a mãe do Jay">Purjo</li>
  </ul>
  <div class="saanto">
    <h3>Truque: troque o j por i</h3>
    <p>Leia <span class="fi">ja</span> como <span class="pala">ia</span> numa sílaba só, bem rápido: é isso. E o <span class="fi pala">ou</span> de <span class="fi">joulu</span> tem duas vogais, <span class="pala">o</span> e <span class="pala">u</span>: <span class="pala">IOU-lu</span>, nunca <span class="pala">jô-lu</span>. O nome <span class="fi">Jay</span> é a exceção: é inglês, e o j dele soa “dj”.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="pao-de-queijo">
  <h2>Exercícios da parte A</h2>
  <p>Meio-dia. A Marta para tudo e serve café com pão de queijo: em Minas, nem a véspera de Natal escapa do cafezinho. A Maia aproveita a pausa para treinar o Jay.</p>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ligue as palavras do calendário à tradução</h3>
    <ul class="yhdista">
      <li data-pari="Papai Noel">joulupukki</li>
      <li data-pari="árvore de Natal">joulukuusi</li>
      <li data-pari="presente">lahja</li>
      <li data-pari="presunto">kinkku</li>
      <li data-pari="estrela">tähti</li>
      <li data-pari="duende">tonttu</li>
      <li data-pari="canção de Natal">joululaulu</li>
      <li data-pari="mingau de arroz">joulupuuro</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>2. Ouça: a ordem é para uma pessoa ou para várias?</h3>
    <p class="ohje">Aperte ▶ e ouça a ordem da lista. Para uma pessoa (<span class="fi">sinä</span>), a ordem não tem terminação; para duas ou mais (<span class="fi">te</span>), termina em <span class="fi pala">-kaa/-kää</span> ou começa com <span class="fi">älkää</span>.</p>
    <div class="valinta" data-kuuntele="Hae tuolit!" data-oikea="sinä">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot"><button type="button">sinä</button><button type="button">te</button></div>
    </div>
    <div class="valinta" data-kuuntele="Kattakaa pöytä!" data-oikea="te">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot"><button type="button">sinä</button><button type="button">te</button></div>
    </div>
    <div class="valinta" data-kuuntele="Keitä kahvia!" data-oikea="sinä">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot"><button type="button">sinä</button><button type="button">te</button></div>
    </div>
    <div class="valinta" data-kuuntele="Älkää syökö kakkua!" data-oikea="te">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot"><button type="button">sinä</button><button type="button">te</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hakekaa kakku!" data-oikea="te">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot"><button type="button">sinä</button><button type="button">te</button></div>
    </div>
    <div class="valinta" data-kuuntele="Älä nuku sohvalla!" data-oikea="sinä">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot"><button type="button">sinä</button><button type="button">te</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>3. Você entendeu o diálogo A?</h3>
    <div class="valinta" data-oikea="Martan lista.">
      <p class="kysymys"><span class="fi">Mikä jääkaapin ovessa on?</span></p>
      <div class="vaihtoehdot"><button type="button">Martan lista.</button><button type="button">Purjon joulukalenteri.</button><button type="button">Joulukuusi.</button></div>
    </div>
    <div class="valinta" data-oikea="Jaylle.">
      <p class="kysymys"><span class="fi">Kenelle Maia kääntää listan?</span></p>
      <div class="vaihtoehdot"><button type="button">Martalle.</button><button type="button">Andersonille.</button><button type="button">Jaylle.</button></div>
    </div>
    <div class="valinta" data-oikea="Seitsemän.">
      <p class="kysymys"><span class="fi">Kuinka monta lautasta Jay ja Anderson laittavat pöydälle?</span></p>
      <div class="vaihtoehdot"><button type="button">Viisi.</button><button type="button">Seitsemän.</button><button type="button">Kuusi.</button></div>
    </div>
    <div class="valinta" data-oikea="Maia.">
      <p class="kysymys"><span class="fi">Kuka tekee salaatin?</span></p>
      <div class="vaihtoehdot"><button type="button">Jay.</button><button type="button">Anderson.</button><button type="button">Maia.</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Hyvää joulua, Helsinki!',
      html: `
<ul class="tavoitteet">
  <li>Você diz o que não fez: <span class="fi">En nukkunut.</span> <span class="fi">Emme syöneet puuroa.</span></li>
  <li>Você forma o particípio: <span class="fi">syönyt, mennyt, halunnut</span>, e no plural <span class="fi">syöneet</span>.</li>
  <li>Você pede e deseja com educação: <span class="fi">Haluaisin kakkua.</span> <span class="fi">Voisitko lähettää kuvan?</span> <span class="fi">Olisi mukava nähdä lunta.</span></li>
  <li>Você conhece o Natal finlandês: <span class="fi">joulupukki, kinkku, joulusauna, joulurauha</span>.</li>
</ul>

<p data-paikka="helsinki-lumi">Dez e meia da manhã em Belo Horizonte. O celular da Maia toca: é a Purjo, de Helsinque, onde já são três e meia da tarde. Lá o sol se pôs às três, a neve cai, e a Purjo e o Hiisi acabaram de voltar da sauna. Para os finlandeses, a véspera é o dia mais importante do Natal, e a Purjo quer ver o Natal brasileiro.</p>

<section class="osio">
  <h2>Diálogo B: Hyvää joulua!</h2>
  <p class="ohje">Ouça primeiro sem tradução. Preste atenção em <span class="fi">en, emme</span> + uma palavra em <span class="fi pala">-nut/-nyt</span> ou <span class="fi pala">-neet</span>: é o passado negativo. E nas palavras com <span class="fi pala">-isi-</span>: <span class="fi">haluaisin, olisi, voisitko</span>.</p>
  <div class="videopuhelu" data-dialogi="t15-dialogi-b" data-soittaja="Purjo" data-heidan="purjo,hiisi" data-meidan="maia,jay"
       data-heidan-tausta="helsinki-lumi" data-meidan-tausta="bh-bairro" data-heidan-aika="Helsinki · 15.30" data-meidan-aika="Belo Horizonte · 10.30"></div>
  <div class="kpl" id="t15-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="purjo" data-pt="Feliz Natal, Maia e Jay!">Hyvää joulua, Maia ja Jay!</p>
    <p class="s" data-h="maia" data-pt="Feliz Natal, Purjo! Feliz Natal, Hiisi!">Hyvää joulua, Purjo! Hyvää joulua, Hiisi!</p>
    <p class="s" data-h="purjo" data-pt="Aqui está nevando. São só três e meia, mas lá fora já está escuro.">Täällä sataa lunta. Kello on vasta puoli neljä, mutta ulkona on jo pimeää.</p>
    <p class="s" data-h="jay" data-pt="Aqui faz trinta graus. Eu não dormi à noite: estava quente demais.">Täällä on kolmekymmentä astetta. En nukkunut yöllä: oli liian kuuma.</p>
    <p class="s" data-h="purjo" data-pt="Ai, Jay! Vocês comeram o mingau de Natal de manhã?">Voi Jay! Söittekö aamulla joulupuuroa?</p>
    <p class="s" data-h="maia" data-pt="Não comemos mingau. Comemos mangas e abacaxi.">Emme syöneet puuroa. Söimme mangoja ja ananasta.</p>
    <p class="s" data-h="jay" data-pt="Eu nem vi presunto!">En edes nähnyt kinkkua!</p>
    <p class="s" data-h="purjo" data-pt="Sem presunto? Não acredito!">Ei kinkkua? En usko!</p>
    <p class="s" data-h="purjo" data-pt="E a sauna de Natal? Vocês foram à sauna?">Entä joulusauna? Kävittekö saunassa?</p>
    <p class="s" data-h="jay" data-pt="Não fomos. Aqui não tem sauna. Mas lá fora é como numa sauna!">Emme käyneet. Täällä ei ole saunaa. Mutta ulkona on kuin saunassa!</p>
    <p class="s" data-h="hiisi" data-puhu="Minä kävin saunassa ja ajoin kauppaan. En saanut sakkoa." data-pt="Eu fui à sauna e fui de carro até a loja. Não levei multa. (cara de paisagem)">Minä kävin saunassa ja ajoin kauppaan. En saanut sakkoa. <span class="emoji">😐</span></p>
    <p class="s" data-h="maia" data-pt="Eu queria estar aí, porque aqui está tão quente. Seria bom ver neve.">Haluaisin <span data-l="olla#2">olla</span> siellä, koska täällä on niin kuuma. Olisi mukava nähdä lunta.</p>
    <p class="s" data-h="purjo" data-pt="(em “inglês de rali”:) Eu quero ver vocês! Você poderia mandar uma foto da mesa de Natal?"><span class="pala" lang="en">Ai vont tu sii juu!</span> Voisitko lähettää kuvan joulupöydästä?</p>
    <p class="s" data-h="maia" data-pt="Claro! À noite vamos comer peru. E eu queria bolo já agora!">Tottakai! Illalla syömme kalkkunaa. Ja haluaisin kakkua jo nyt!</p>
    <p class="s" data-h="jay" data-pt="Ouviu, mãe? Bolo, não cocô! Agora a Maia disse certo.">Kuulitko, äiti? Kakkua, ei kakkaa! Nyt Maia sanoi sen oikein.</p>
    <p class="s" data-h="jay" data-pt="Mãe, sinto muito: o presente que você deu ainda está na mala. Eu não abri.">Äiti, olen pahoillani: lahja sinulta on vielä laukussa. En avannut sitä.</p>
    <p class="s" data-h="purjo" data-pt="Abra agora! Espero que você goste.">Avaa se nyt! Toivon, että pidät siitä.</p>
    <p class="s" data-h="jay" data-pt="Meias de lã! Trinta graus, e eu tenho meias de lã.">Villasukat! Kolmekymmentä astetta, ja minulla on villasukat.</p>
    <p class="s" data-h="purjo" data-pt="Que ótimo! Feliz Natal!"><span data-l="hieno#2">Hienoa</span>! Hyvää joulua!</p>
  </div>
  <p>A Purjo revira os olhos: o Hiisi levou, sim, uma multa na véspera de Natal. Duas, na verdade. E a Maia, que na lição 4 pediu <span class="fi">kakkaa</span> (cocô) num café de Kallio, hoje acertou o u final: <span class="fi">kakku, kakkua</span>. O Jay vai contar isso para todo mundo até o Ano-Novo.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Kello on vasta puoli neljä.</span> = são só três e meia · <span class="fi">vasta</span> = só, ainda (lição 9); <span class="fi">puoli neljä</span> = 3h30, “meia para as quatro” (lição 10)</li>
      <li><span class="fi">En nukkunut yöllä.</span> = eu não dormi à noite · o passado negativo: veja a Gramática abaixo</li>
      <li><span class="fi">Täällä ei ole saunaa.</span> = aqui não tem sauna · depois de <span class="fi">ei ole</span>, o partitivo (lição 3)</li>
      <li><span class="fi">Ulkona on kuin saunassa!</span> = lá fora é como numa sauna! · <span class="fi">kuin</span> = como (lição 8)</li>
      <li><span class="fi">Voisitko lähettää kuvan joulupöydästä?</span> = você poderia mandar uma foto da mesa de Natal? · <span class="fi">kuva</span> + <span class="fi pala">-sta</span> = foto de (lição 6)</li>
      <li><span class="fi">Kakkua, ei kakkaa!</span> = bolo, não cocô! · a piada da lição 4: o u final muda tudo</li>
      <li><span class="fi">En edes nähnyt kinkkua!</span> = eu nem vi presunto! · <span class="fi">Olen pahoillani.</span> = sinto muito (lição 5) · <span class="fi">Toivon, että…</span> = espero que…</li>
      <li><span class="fi">Hyvää joulua!</span> = Feliz Natal! (lição 10)</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 1 · Não comi: o passado negativo</h2>
  <p>Na lição 13 você aprendeu o passado afirmativo: <span class="fi">söin</span> (comi). Para negar, o finlandês não usa <span class="fi">söin</span>. Ele usa o verbo de negação, o mesmo do presente (<span class="fi">en, et, ei, emme, ette, eivät</span>), e uma forma nova, o <b>particípio</b>: <span class="fi">en syönyt</span> (não comi).</p>
  <table class="taivutus">
    <tr><th>pessoa</th><th>presente negativo</th><th>passado negativo</th><th>português</th></tr>
    <tr><td><span class="fi">minä</span></td><td><span class="fi">en syö</span></td><td><span class="fi">en syönyt</span></td><td>eu não como · não comi</td></tr>
    <tr><td><span class="fi">sinä</span></td><td><span class="fi">et syö</span></td><td><span class="fi">et syönyt</span></td><td>você não come · não comeu</td></tr>
    <tr><td><span class="fi">hän</span></td><td><span class="fi">ei syö</span></td><td><span class="fi">ei syönyt</span></td><td>ele, ela não come · não comeu</td></tr>
    <tr><td><span class="fi">me</span></td><td><span class="fi">emme syö</span></td><td><span class="fi">emme syöneet</span></td><td>nós não comemos · não comemos</td></tr>
    <tr><td><span class="fi">te</span></td><td><span class="fi">ette syö</span></td><td><span class="fi">ette syöneet</span></td><td>vocês não comem · não comeram</td></tr>
    <tr><td><span class="fi">he</span></td><td><span class="fi">eivät syö</span></td><td><span class="fi">eivät syöneet</span></td><td>eles, elas não comem · não comeram</td></tr>
  </table>
  <p>O particípio não muda com a pessoa, só com o número: <span class="fi pala">-nut/-nyt</span> no singular (eu, você, ele), <span class="fi pala">-neet</span> no plural (nós, vocês, eles). A pessoa já está no verbo de negação. O particípio vem do infinitivo:</p>
  <table class="taivutus">
    <tr><th>tipo</th><th>infinitivo</th><th>singular</th><th>plural</th></tr>
    <tr><td>1: tire o <span class="fi pala">-a/-ä</span></td><td><span class="fi">nukkua, puhua, ostaa</span><span class="kaannos" lang="pt-BR">dormir, falar, comprar</span></td><td><span class="fi">nukkunut, puhunut, ostanut</span></td><td><span class="fi">nukkuneet, puhuneet, ostaneet</span></td></tr>
    <tr><td>2: tire o <span class="fi pala">-da/-dä</span></td><td><span class="fi">syödä, juoda, saada</span><span class="kaannos" lang="pt-BR">comer, beber, receber</span></td><td><span class="fi">syönyt, juonut, saanut</span></td><td><span class="fi">syöneet, juoneet, saaneet</span></td></tr>
    <tr><td>2: <span class="fi pala">-hdä</span></td><td><span class="fi">tehdä, nähdä</span><span class="kaannos" lang="pt-BR">fazer, ver</span></td><td><span class="fi">tehnyt, nähnyt</span></td><td><span class="fi">tehneet, nähneet</span></td></tr>
    <tr><td>3: a consoante dobra</td><td><span class="fi">mennä, tulla, olla</span><span class="kaannos" lang="pt-BR">ir, vir, ser</span></td><td><span class="fi">mennyt, tullut, ollut</span></td><td><span class="fi">menneet, tulleet, olleet</span></td></tr>
    <tr><td>4 e 5: <span class="fi pala">-nnut/-nnyt</span></td><td><span class="fi">haluta, avata, tarvita</span><span class="kaannos" lang="pt-BR">querer, abrir, precisar</span></td><td><span class="fi">halunnut, avannut, tarvinnut</span></td><td><span class="fi">halunneet, avanneet, tarvinneet</span></td></tr>
  </table>
  <p>A vogal decide entre <span class="fi pala">-nut</span> e <span class="fi pala">-nyt</span> (harmonia vocálica, lição 1): <span class="fi">nukkunut</span>, mas <span class="fi">syönyt</span>. E a consoante fica <b>forte</b>, como no infinitivo: <span class="fi">nukkua → en nukkunut</span>, nunca <span class="pala">nukunut</span>.</p>
  <ul class="esim">
    <li class="s" data-pt="Eu não dormi à noite.">En nukkunut yöllä.</li>
    <li class="s" data-pt="Nós não comemos mingau.">Emme syöneet puuroa.</li>
    <li class="s" data-pt="O Hiisi não levou multa? Levou!">Eikö Hiisi saanut sakkoa? Sai!</li>
    <li class="s" data-pt="Eles não foram à sauna.">He eivät menneet saunaan.</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="natal-bh">
  <h2>Exercícios: o passado negativo</h2>
  <p>Dez da noite. A rua inteira cheira a peru assado, e pelo túnel de luzes da Praça da Liberdade passa gente de chinelo e gorro de Papai Noel. Antes da ceia, a Maia faz um último treino com o Jay.</p>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Um fez, o outro não: complete com o particípio</h3>
    <p class="ohje">A primeira frase está no passado afirmativo. Complete a segunda com o particípio do mesmo verbo: <span class="fi pala">-nut/-nyt</span> depois de <span class="fi">en, et, ei</span>, <span class="fi pala">-neet</span> depois de <span class="fi">emme, ette, eivät</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Jay nukkui hyvin. Maia ei <span class="aukko" data-oikea="nukkunut"></span> hyvin.</p>
      <p>Minä söin mangoja. Minä en <span class="aukko" data-oikea="syönyt"></span> puuroa.</p>
      <p>Purjo meni saunaan. Jay ei <span class="aukko" data-oikea="mennyt"></span> saunaan.</p>
      <p>Me kävimme kaupassa. Me emme <span class="aukko" data-oikea="käyneet"></span> saunassa.</p>
      <p>Sinä joit kahvia. Sinä et <span class="aukko" data-oikea="juonut"></span> teetä.</p>
      <p>He tulivat kotiin. He eivät <span class="aukko" data-oikea="tulleet"></span> ajoissa.</p>
      <p>Te <span data-l="olla#2">olitte</span> Brasiliassa. Te ette <span class="aukko" data-oikea="olleet"></span> Suomessa.</p>
      <p>Hiisi ajoi kauppaan. Hän ei <span class="aukko" data-oikea="saanut"></span> sakkoa.</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Ouça: presente ou passado, eu ou nós?</h3>
    <p class="ohje">Aperte ▶ e escolha a frase que você ouviu. Ouça o fim do verbo: <span class="fi pala">-nut/-nyt</span>, <span class="fi pala">-neet</span> ou nada.</p>
    <div class="valinta" data-kuuntele="Emme syöneet kinkkua." data-oikea="Emme syöneet kinkkua.">
      <p class="kysymys">Qual frase?</p>
      <div class="vaihtoehdot"><button type="button">En syönyt kinkkua.</button><button type="button">Emme syöneet kinkkua.</button><button type="button">Emme syö kinkkua.</button></div>
    </div>
    <div class="valinta" data-kuuntele="En nukkunut." data-oikea="En nukkunut.">
      <p class="kysymys">Qual frase?</p>
      <div class="vaihtoehdot"><button type="button">En nuku.</button><button type="button">Emme nukkuneet.</button><button type="button">En nukkunut.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hän ei mene saunaan." data-oikea="Hän ei mene saunaan.">
      <p class="kysymys">Qual frase?</p>
      <div class="vaihtoehdot"><button type="button">Hän ei mene saunaan.</button><button type="button">Hän ei mennyt saunaan.</button><button type="button">He eivät menneet saunaan.</button></div>
    </div>
    <div class="valinta" data-kuuntele="He eivät tulleet." data-oikea="He eivät tulleet.">
      <p class="kysymys">Qual frase?</p>
      <div class="vaihtoehdot"><button type="button">He eivät tule.</button><button type="button">He eivät tulleet.</button><button type="button">Hän ei tullut.</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 2 · Eu gostaria: o condicional educado</h2>
  <p>Desde a lição 4 você diz <span class="fi">haluaisin</span> e <span class="fi">saisinko</span> como frases prontas. Agora o sistema: entre o radical e a terminação de pessoa entra <span class="fi pala">-isi-</span>. É o “-ria” do português (gostaria, poderia, seria), e serve para pedir com educação e para desejar.</p>
  <table class="taivutus">
    <tr><th>presente</th><th>condicional</th><th>português</th></tr>
    <tr><td><span class="fi">minä haluan</span></td><td><span class="fi">minä haluaisin</span></td><td>eu quero → eu gostaria, eu queria</td></tr>
    <tr><td><span class="fi">sinä voit</span></td><td><span class="fi">sinä voisit</span></td><td>você pode → você poderia</td></tr>
    <tr><td><span class="fi">se on</span></td><td><span class="fi">se olisi</span></td><td>é → seria</td></tr>
    <tr><td><span class="fi">minä saan</span></td><td><span class="fi">minä saisin</span></td><td>eu recebo → eu receberia</td></tr>
  </table>
  <p>Na pergunta, o <span class="fi pala">-ko/-kö</span> vai no fim, como sempre: <span class="fi">voisitko?</span> (você poderia?), <span class="fi">saisinko?</span> (eu poderia receber?, isto é, me dá…?). As frases que mais servem:</p>
  <ul class="esim">
    <li class="s" data-pt="Eu queria bolo.">Haluaisin kakkua.</li>
    <li class="s" data-pt="Eu queria estar aí.">Haluaisin <span data-l="olla#2">olla</span> siellä.</li>
    <li class="s" data-pt="Seria bom ver neve.">Olisi mukava nähdä lunta.</li>
    <li class="s" data-pt="Você poderia mandar uma foto?">Voisitko lähettää kuvan?</li>
    <li class="s" data-pt="Poderia me dar um café?">Saisinko kahvia?</li>
    <li class="s" data-pt="Eu queria um café. (de tahtoa, querer: igual a haluaisin, um pouco mais formal)">Tahtoisin kahvia.</li>
  </ul>
  <p>O resto do condicional (“se eu tivesse…, eu faria…”) vem na lição 20. Por enquanto, guarde estas frases e a marca <span class="fi pala">-isi-</span>.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> em português, o pedido educado pode ir para o passado: “eu queria um café”. Em finlandês, o passado é só passado: <span class="fi">halusin kahvia</span> = eu quis café (antes). Para pedir, use o condicional: <span class="fi">haluaisin kahvia</span>. E depois de <span class="fi">en, et, ei</span>, sempre o particípio: <span class="fi">en syönyt</span>, nunca <span class="pala">en söin</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="natal-bh">
  <h2>Exercícios: o condicional e a videochamada</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Peça com educação: escolha a forma</h3>
    <p class="ohje">Entre parênteses está o que a frase quer dizer. Para pedir e desejar com educação, o condicional com <span class="fi pala">-isi-</span>.</p>
    <div class="valinta" data-oikea="Haluaisin">
      <p class="kysymys"><span class="fi">___ kakkua, kiitos.</span> (eu queria bolo, por favor)</p>
      <div class="vaihtoehdot"><button type="button">Haluan</button><button type="button">Haluaisin</button><button type="button">Halusin</button></div>
    </div>
    <div class="valinta" data-oikea="Voisitko">
      <p class="kysymys"><span class="fi">___ lähettää kuvan?</span> (você poderia mandar uma foto?)</p>
      <div class="vaihtoehdot"><button type="button">Voisitko</button><button type="button">Voitko</button><button type="button">Voisinko</button></div>
    </div>
    <div class="valinta" data-oikea="Olisi">
      <p class="kysymys"><span class="fi">___ mukava nähdä lunta.</span> (seria bom ver neve)</p>
      <div class="vaihtoehdot"><button type="button">Oli</button><button type="button">On</button><button type="button">Olisi</button></div>
    </div>
    <div class="valinta" data-oikea="Saisinko">
      <p class="kysymys"><span class="fi">___ kahvia?</span> (poderia me dar um café?)</p>
      <div class="vaihtoehdot"><button type="button">Saanko</button><button type="button">Saisinko</button><button type="button">Sainko</button></div>
    </div>
    <div class="valinta" data-oikea="haluaisimme">
      <p class="kysymys"><span class="fi">Me ___ <span data-l="olla#2">olla</span> Suomessa.</span> (nós gostaríamos de estar na Finlândia)</p>
      <div class="vaihtoehdot"><button type="button">haluamme</button><button type="button">haluaisitte</button><button type="button">haluaisimme</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Você entendeu a videochamada?</h3>
    <div class="valinta" data-oikea="Oli liian kuuma.">
      <p class="kysymys"><span class="fi">Miksi Jay ei nukkunut?</span></p>
      <div class="vaihtoehdot"><button type="button">Oli liian kylmä.</button><button type="button">Oli liian kuuma.</button><button type="button">Hän oli sairas.</button></div>
    </div>
    <div class="valinta" data-oikea="Mangoja ja ananasta.">
      <p class="kysymys"><span class="fi">Mitä Maia ja Jay söivät aamulla?</span></p>
      <div class="vaihtoehdot"><button type="button">Joulupuuroa.</button><button type="button">Mangoja ja ananasta.</button><button type="button">Kinkkua ja kalkkunaa.</button></div>
    </div>
    <div class="valinta" data-oikea="Eivät käyneet.">
      <p class="kysymys"><span class="fi">Kävivätkö Maia ja Jay saunassa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kävivät.</button><button type="button">Eivät käyneet.</button><button type="button">Eivät käy.</button></div>
    </div>
    <div class="valinta" data-oikea="Lunta.">
      <p class="kysymys"><span class="fi">Mitä Maia haluaisi nähdä?</span></p>
      <div class="vaihtoehdot"><button type="button">Lunta.</button><button type="button">Joulupukin.</button><button type="button">Kakkua.</button></div>
    </div>
    <div class="valinta" data-oikea="Villasukat.">
      <p class="kysymys"><span class="fi">Mikä lahja Purjolta on laukussa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kakku.</button><button type="button">Villasukat.</button><button type="button">Joulukortti.</button></div>
    </div>
    <div class="valinta" data-oikea="Kuvan joulupöydästä.">
      <p class="kysymys"><span class="fi">Mitä Purjo haluaisi?</span></p>
      <div class="vaihtoehdot"><button type="button">Lahjan.</button><button type="button">Kakkua.</button><button type="button">Kuvan joulupöydästä.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Traduza para o finlandês</h3>
    <p class="ohje">Escreva primeiro, depois abra o modelo.</p>
    <div class="kaanna"><p class="pt">Eu não dormi.</p><p class="s" data-pt="Eu não dormi.">En nukkunut.</p></div>
    <div class="kaanna"><p class="pt">Nós não comemos presunto. Comemos peru.</p><p class="s" data-pt="Nós não comemos presunto. Comemos peru.">Emme syöneet kinkkua. Söimme kalkkunaa.</p></div>
    <div class="kaanna"><p class="pt">O Hiisi não foi à sauna.</p><p class="s" data-pt="O Hiisi não foi à sauna.">Hiisi ei mennyt saunaan.</p></div>
    <div class="kaanna"><p class="pt">Eu queria estar na Finlândia.</p><p class="s" data-pt="Eu queria estar na Finlândia.">Haluaisin <span data-l="olla#2">olla</span> Suomessa.</p></div>
    <div class="kaanna"><p class="pt">Você poderia mandar uma foto?</p><p class="s" data-pt="Você poderia mandar uma foto?">Voisitko lähettää kuvan?</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda às perguntas</h3>
    <p class="ohje">Responda em voz alta antes de abrir o modelo. Use o passado negativo e o condicional.</p>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä et tehnyt eilen?</summary><p class="s" data-pt="Eu não fui à loja. Eu não limpei a casa.">En käynyt kaupassa. En siivonnut.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Söitkö sinä kinkkua jouluna?</summary><p class="s" data-pt="Não comi. Comi peru.">En syönyt. Söin kalkkunaa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä haluaisit jouluna?</summary><p class="s" data-pt="Eu queria ver neve e ir à sauna.">Haluaisin nähdä lunta ja mennä saunaan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä olisi mukava tehdä huomenna?</summary><p class="s" data-pt="Seria bom dormir muito.">Olisi mukava nukkua paljon.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Voisitko auttaa minua?</summary><p class="s" data-pt="Claro!">Tottakai!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä toivot?</summary><p class="s" data-pt="Espero que a Purjo venha ao Brasil.">Toivon, että Purjo tulee Brasiliaan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kutsutko ystäviä jouluna?</summary><p class="s" data-pt="Convido. E eu queria convidar também a Purjo.">Kutsun. Ja tahtoisin kutsua myös Purjon.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko ruoka jo valmis?</summary><p class="s" data-pt="Ainda não. Eu queria um café, por favor.">Ei vielä. Tahtoisin kahvia, kiitos.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä mieltä olet joulusta Brasiliassa?</summary><p class="s" data-pt="Maravilhoso! Mas eu não tinha percebido que aqui é tão quente.">Aivan ihana! Mutta en huomannut, että täällä on niin kuuma.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä Purjo pyytää?</summary><p class="s" data-pt="A Purjo pede uma foto da mesa de Natal.">Purjo pyytää kuvaa joulupöydästä.</p></details>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Natal no verão, Natal no escuro</h3>
  <figure class="kuva" data-kuva="natal-bh"></figure>
  <p>Em Belo Horizonte, o Natal cai no verão e na época das chuvas: trinta graus, pisca-pisca nas janelas e árvores com neve de algodão. A festa é de noite. A <b>ceia</b> começa tarde no dia 24, com peru ou chester, farofa, salpicão e rabanada, e os presentes são abertos à meia-noite (<span class="fi">keskiyöllä</span>). Muitas famílias vão à missa do galo.</p>
  <p>Na Finlândia, o dia principal é a véspera, <span class="fi">jouluaatto</span>, e a festa acontece de dia: em Helsinque, no fim de dezembro, o sol nasce às nove e meia e se põe pouco depois das três. De manhã, mingau de arroz (<span class="fi">joulupuuro</span>) com uma amêndoa escondida: quem a encontra tem sorte. Ao meio-dia, a cidade de Turku declara a paz de Natal (<span class="fi">joulurauha</span>), uma tradição que vem da Idade Média e passa ao vivo na TV e no rádio. À tarde, a sauna de Natal (<span class="fi">joulusauna</span>); no começo da noite, o jantar com presunto (<span class="fi">kinkku</span>), gratinados de cenoura, nabo e batata e salada de beterraba. Depois, o Papai Noel (<span class="fi">joulupukki</span>) vem em pessoa, bate na porta e entrega os presentes. Ele mora em Korvatunturi, na Lapônia.</p>
  <ul class="esim">
    <li class="s" data-pt="No Brasil, o Natal é no verão.">Brasiliassa joulu on kesällä.</li>
    <li class="s" data-pt="Na Finlândia, o Papai Noel vem na véspera de Natal.">Suomessa joulupukki tulee jouluaattona.</li>
    <li class="s" data-pt="Na Finlândia, às três da tarde já está escuro.">Suomessa kello kolme on jo pimeää.</li>
  </ul>
  <p>A Purjo não acredita que alguém come peru com trinta graus. O Walker não acredita que alguém entra numa sauna no Natal.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Mä en syöny kinkkuu: o t que some</h3>
  <p>Na fala, o particípio perde o <span class="fi pala">-t</span> final: <span class="fi">syönyt</span> vira <span class="fi" data-rekisteri="puhe">syöny</span>. O <span class="fi pala">-ua</span> do partitivo vira <span class="fi pala">-uu</span>: <span class="fi">kinkkua</span> vira <span class="fi" data-rekisteri="puhe">kinkkuu</span>. E <span class="fi">olisi</span> encurta para <span class="fi" data-rekisteri="puhe">ois</span>. Você não precisa falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">minä en syönyt</span></td><td><span class="fi" data-rekisteri="puhe">mä en syöny</span></td><td>eu não comi</td></tr>
    <tr><td><span class="fi">kinkkua</span></td><td><span class="fi" data-rekisteri="puhe">kinkkuu</span></td><td>presunto (partitivo)</td></tr>
    <tr><td><span class="fi">olisi mukava</span></td><td><span class="fi" data-rekisteri="puhe">ois kiva</span></td><td>seria legal</td></tr>
    <tr><td><span class="fi">me söimme</span></td><td><span class="fi" data-rekisteri="puhe">me syötiin</span></td><td>nós comemos (lição 13)</td></tr>
  </table>
  <p>No dia 25, o Jay manda uma mensagem de voz para o Hiisi, do jeito que se fala na rua. O Hiisi responde do mesmo jeito:</p>
  <p class="s" data-h="jay" data-kirja="Minä en syönyt kinkkua. Me söimme kalkkunaa." data-pt="Eu não comi presunto. Nós comemos peru.">Mä en syöny kinkkuu. Me syötiin kalkkunaa.</p>
  <p class="s" data-h="hiisi" data-kirja="Olisi mukava syödä kalkkunaa." data-pt="Seria legal comer peru.">Ois kiva syödä kalkkunaa.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t15">
    <h3>Lição de casa</h3>
    <p>Escreva para a Purjo sobre a sua véspera de Natal (deste ano ou de um ano qualquer). Seis frases: três coisas que você não fez (<span class="fi">en</span> + particípio: <span class="fi">en nukkunut, en käynyt…</span>), uma com <span class="fi">emme</span> (<span class="fi">emme syöneet…</span>) e dois desejos ou pedidos com <span class="fi">haluaisin</span>, <span class="fi">olisi mukava</span> ou <span class="fi">voisitko</span>. Leia em voz alta: o <span class="fi pala">j</span> de <span class="fi">joulu</span> é <span class="pala">i</span>.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Eu não dormi à noite.">En nukkunut yöllä.</p>
      <p class="s" data-pt="Eu não fui à sauna.">En käynyt saunassa.</p>
      <p class="s" data-pt="Eu não comi presunto.">En syönyt kinkkua.</p>
      <p class="s" data-pt="Nós não vimos neve.">Emme nähneet lunta.</p>
      <p class="s" data-pt="Eu queria estar em Helsinque.">Haluaisin <span data-l="olla#2">olla</span> Helsingissä.</p>
      <p class="s" data-pt="Você poderia mandar uma foto da árvore de Natal?">Voisitko lähettää kuvan joulukuusesta?</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t15">
    <li>Sei dizer o que não fiz: en nukkunut, emme syöneet.</li>
    <li>Formo o particípio: syönyt, mennyt, halunnut, e -neet no plural.</li>
    <li>Peço com educação: haluaisin, voisitko, saisinko.</li>
    <li>Digo um desejo: olisi mukava nähdä lunta.</li>
    <li>Entendo e dou as ordens da lista: hae tuolit, kattakaa pöytä.</li>
    <li>Digo o j finlandês como i: joulu, ja, jo.</li>
    <li>Conheço o Natal finlandês: joulupukki, kinkku, joulusauna, joulurauha.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'kielto-imperfekti', otsikko: 'Não comi: en + particípio (en syönyt, emme syöneet)', taso: 'essencial', hakuosa: 'h-imperfekti', treeni: 't15-kielto-imperfekti',
      html: `
<p><b>Forma:</b> verbo de negação (<span class="fi">en, et, ei, emme, ette, eivät</span>) + particípio. Singular <span class="fi pala">-nut/-nyt</span>, plural <span class="fi pala">-neet</span>. O particípio não tem pessoa, só número.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">minä en nukkunut</span></td><td>eu não dormi</td></tr>
  <tr><td><span class="fi">sinä et nukkunut</span></td><td>você não dormiu</td></tr>
  <tr><td><span class="fi">hän ei nukkunut</span></td><td>ele, ela não dormiu</td></tr>
  <tr><td><span class="fi">me emme nukkuneet</span></td><td>nós não dormimos</td></tr>
  <tr><td><span class="fi">te ette nukkuneet</span></td><td>vocês não dormiram</td></tr>
  <tr><td><span class="fi">he eivät nukkuneet</span></td><td>eles, elas não dormiram</td></tr>
</table>
<p>Presente × passado: <span class="fi">en nuku</span> (não durmo) × <span class="fi">en nukkunut</span> (não dormi). Nunca <span class="pala">en nukuin</span>.</p>`
    },
    {
      id: 'partisiippi15', otsikko: 'O particípio de cada verbo: syönyt, mennyt, halunnut', taso: 'essencial', hakuosa: 'h-imperfekti', treeni: 't15-partisiippi',
      html: `
<p>O particípio sai do infinitivo, com a consoante forte. A bolha de cada verbo mostra a forma.</p>
<table class="taivutus">
  <tr><th>infinitivo</th><th>particípio</th><th>regra</th></tr>
  <tr><td><span class="fi">nukkua</span><span class="kaannos" lang="pt-BR">dormir</span></td><td><span class="fi">nukkunut</span></td><td>tipo 1: tire o -a/-ä, + nut/nyt</td></tr>
  <tr><td><span class="fi">ostaa</span><span class="kaannos" lang="pt-BR">comprar</span></td><td><span class="fi">ostanut</span></td><td>tipo 1</td></tr>
  <tr><td><span class="fi">syödä</span><span class="kaannos" lang="pt-BR">comer</span></td><td><span class="fi">syönyt</span></td><td>tipo 2: tire o -da/-dä</td></tr>
  <tr><td><span class="fi">tehdä</span><span class="kaannos" lang="pt-BR">fazer</span></td><td><span class="fi">tehnyt</span></td><td>tipo 2</td></tr>
  <tr><td><span class="fi">mennä</span><span class="kaannos" lang="pt-BR">ir</span></td><td><span class="fi">mennyt</span></td><td>tipo 3: a consoante dobra</td></tr>
  <tr><td><span class="fi">olla</span><span class="kaannos" lang="pt-BR">ser, estar</span></td><td><span class="fi">ollut</span></td><td>tipo 3</td></tr>
  <tr><td><span class="fi">haluta</span><span class="kaannos" lang="pt-BR">querer</span></td><td><span class="fi">halunnut</span></td><td>tipo 4: -nnut/-nnyt</td></tr>
  <tr><td><span class="fi">tarvita</span><span class="kaannos" lang="pt-BR">precisar</span></td><td><span class="fi">tarvinnut</span></td><td>tipo 5: -nnut</td></tr>
</table>
<p>Plural: troque <span class="fi pala">-nut/-nyt</span> por <span class="fi pala">-neet</span>: <span class="fi">syöneet, menneet, halunneet</span>.</p>`
    },
    {
      id: 'konditionaali15', otsikko: 'Eu gostaria: haluaisin, voisitko, olisi mukava', taso: 'essencial', hakuosa: 'h-konditionaali', treeni: 't15-konditionaali',
      html: `
<p><b>Forma:</b> radical + <span class="fi pala">-isi-</span> + terminação de pessoa: <span class="fi">haluan → haluaisin</span>, <span class="fi">voit → voisit</span>, <span class="fi">on → olisi</span>. <b>Uso nesta lição:</b> pedir com educação e desejar. O condicional completo vem na lição 20.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Haluaisin kakkua.</span></td><td>Eu queria bolo.</td></tr>
  <tr><td><span class="fi">Haluaisin <span data-l="olla#2">olla</span> siellä.</span></td><td>Eu queria estar aí.</td></tr>
  <tr><td><span class="fi">Olisi mukava nähdä lunta.</span></td><td>Seria bom ver neve.</td></tr>
  <tr><td><span class="fi">Voisitko lähettää kuvan?</span></td><td>Você poderia mandar uma foto?</td></tr>
  <tr><td><span class="fi">Saisinko kahvia?</span></td><td>Poderia me dar um café?</td></tr>
</table>
<p>Para pedir, nunca o passado: <span class="fi">halusin</span> = eu quis (antes).</p>`
    },
    {
      id: 'kasky15', otsikko: 'As ordens da lista: para você e para vocês (revisão)', taso: 'revisão', hakuosa: 'h-imperatiivi', treeni: ['t09-kasky', 't14-kasky-te'],
      html: `
<p>Para uma pessoa, o radical sem terminação (lição 9); para duas ou mais, <span class="fi pala">-kaa/-kää</span> (lição 14). “Não!”: <span class="fi">älä</span> + forma negativa, <span class="fi">älkää</span> + <span class="fi pala">-ko/-kö</span>.</p>
<table class="taivutus">
  <tr><th>para você</th><th>para vocês</th><th>não! (vocês)</th><th>português</th></tr>
  <tr><td><span class="fi">hae!</span></td><td><span class="fi">hakekaa!</span></td><td><span class="fi">älkää hakeko!</span></td><td>busque, busquem!</td></tr>
  <tr><td><span class="fi">kata!</span></td><td><span class="fi">kattakaa!</span></td><td><span class="fi">älkää kattako!</span></td><td>ponha, ponham (a mesa)!</td></tr>
  <tr><td><span class="fi">keitä!</span></td><td><span class="fi">keittäkää!</span></td><td><span class="fi">älkää keittäkö!</span></td><td>faça, façam (café)!</td></tr>
  <tr><td><span class="fi">syö!</span></td><td><span class="fi">syökää!</span></td><td><span class="fi">älkää syökö!</span></td><td>coma, comam!</td></tr>
</table>`
    },
    {
      id: 'aantaminen15', otsikko: 'Pronúncia: o j finlandês é i', taso: 'essencial', hakuosa: 'h-sudenkuopat', treeni: 't15-joulu',
      html: `
<p>O <span class="fi pala">j</span> finlandês é um <span class="pala">i</span> curto colado na vogal seguinte, como em “iate”: <span class="fi">ja</span> = <span class="pala">iá</span>. Nunca o j chiado de “janela”. Exceção: o nome inglês <span class="fi">Jay</span>.</p>
<ul class="esim">
  <li class="s" data-pt="Natal">joulu</li>
  <li class="s" data-pt="e">ja</li>
  <li class="s" data-pt="já">jo</li>
  <li class="s" data-pt="beber">juoda</li>
  <li class="s" data-pt="Papai Noel">joulupukki</li>
  <li class="s" data-pt="árvore de Natal">joulukuusi</li>
</ul>
<p>O <span class="fi pala">ou</span> de <span class="fi">joulu</span> tem duas vogais: <span class="pala">IOU-lu</span>.</p>`
    },
    {
      id: 'sudenkuopat15', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-imperfekti',
      html: `
<ul>
  <li><b>Depois de en, o particípio:</b> <span class="fi">en syönyt</span>, nunca <span class="pala">en söin</span>.</li>
  <li><b>O particípio só tem número:</b> <span class="fi">minä en syönyt, hän ei syönyt</span>; <span class="fi">me emme syöneet, he eivät syöneet</span>.</li>
  <li><b>Consoante forte:</b> <span class="fi">en nukkunut</span>, nunca <span class="pala">nukunut</span>.</li>
  <li><b>Pedido educado = condicional:</b> <span class="fi">haluaisin kahvia</span>; <span class="fi">halusin kahvia</span> é “eu quis café”.</li>
  <li><b>kakku × kakka:</b> <span class="fi">Haluaisin kakkua.</span> O u final muda tudo.</li>
  <li><b>j = i:</b> <span class="fi">joulu</span> soa <span class="pala">IOU-lu</span>.</li>
</ul>`
    }
  ]
});
