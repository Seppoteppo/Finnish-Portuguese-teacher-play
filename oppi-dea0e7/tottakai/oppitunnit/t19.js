/* Tottakai, lição 19: päiväretki Ouro Pretoon ja jäähyväiset Confinsissa (Passon jakso 19 Maian näkökulmasta). Oma
   materiaali, ei kirjan tekstiä. Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5c ”Oppitunti 19”; kalenteri: la 2.1.2027
   Ouro Preto, su 3.1.2027 lähtö Confinsista.
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t19): lauantai 2.1., retki Ouro Pretoon (Malu ajaa, Maíra kertoo historiaa portugaliksi kertojan tekstissä).
     Dialogi A (20 repliikkiä) São Franciscon kirkossa: Uuno ja Eenok (uuno3, eenok3; mies 7 ja 8) samassa
     kirkossa (Oletteko käyneet Ouro Pretossa ennen? – Emme ole. Olemme käyneet monessa paikassa. Myös Kuussa. / Olet kai
     nähnyt kultaisen kirkon? / Olemme syöneet churrascoa joka päivä.); Jay katsoo vain vuolukiveä. Heidän pyöreä
     talonsa on aukiolla, vaikka kukaan ei nähnyt heidän ajavan (kertoja, yksi lause). Frases prontas, sanasto, kikka A: matkabingo (uusi komponentti `.bingo`, komponentit.js t19: ruudukon
     ruudut ovat tavallisia .valinta-tehtäviä; ruutu täyttyy, kun oppija muodostaa perfektikysymyksen oikealle
     henkilölle tai tunnistaa vastauksen merkityksen; rivi = BINGO, koko kortti = loppurepliikki). Ääntäminen:
     partisiipin kaksoiskonsonantti (ollut, tullut, mennyt) ja Maian virhe ollut → olut. Tehtävät 1–3.
   - osa B (#t19-b): lauantai-ilta kotona: Maian postikortti Purjolle (`.postikortti`, Tottakain komponentit.js t19
     postikorttiKielet: käännösrivi lang=pt-BR ja .kaannos) monikon paikallissijoilla; sunnuntai 3.1. Confinsissa
     dialogi B (20 repliikkiä; Anderson: Moi moi! Kiitos!). Kielioppi 1: perfekti ja perfekti vai imperfekti → tehtävät
     4–5 heti perään; kielioppi 2: monikon paikallissijat → tehtävät 6–9. Kulttuuri (Ouro Preto, barokki, vuolukivi; kuva
     ouro-preto), Na rua (ootsä käyny),
     kotitehtävä, itsearvio.
   Brasilian jaksot (OPPITUNNIT §2, §5c): suomea puhuvat vain Maia, Jay, Uuno, Eenok ja Anderson kahdella sanalla;
   Maíran, Malun, Martan ja Walkerin sanat kerrotaan portugaliksi. Kirjakieli kaikkialla; puhekieli vain Na rua -nurkassa.
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat kai, löytää, koska, matka, kestää, minuutti, vaikea, aikoa, totta,
   ilman, varmaan, saattaa, lisää, joskus, hullu, kyse, tärkeä; dialogit 20 + 20; sanalistat 20 → 12.
   Uuno ja Eenok (omistaja 22.10.2026) korvaavat turistit Riitan ja Pekan kaikkialla (dialogi A, bingo, tehtävät,
   postikortti, Na rua); bingon data-kenelle ja data-h ovat uuno3/eenok3. Uusi sana churrasco (sanasto/t19.js). */
Kurssi.lisaa({
  id: 't19',
  lyhyt: '19',
  jakso: 'Lição 19',
  otsikko: 'Ouro Preto e a despedida: já esteve? (o perfeito)',
  lahde: 'Tema: um passeio a Ouro Preto e a despedida em Confins · Gramática: o perfeito (olen käynyt, oletko nähnyt, en ole käynyt), perfeito ou passado, os casos de lugar no plural (kirkoissa, museoista, saunoihin) · Pronúncia: a consoante dupla do particípio (ollut, tullut, mennyt) e ollut × olut',
  aiheet: ['kaupunki', 'vapaa', 'aika', 'liike'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; no último passeio antes da volta para a Finlândia' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; nas igrejas, só olha as pedras' },
    uuno3: { nimi: 'Uuno', tyyppi: 'mies', vaihto: 7, kuvaus: 'turista finlandês; macacão azul-claro, cabelo platinado; fez um bingo de viagem no avião' },
    eenok3: { nimi: 'Eenok', tyyppi: 'mies', vaihto: 8, kuvaus: 'turista finlandês; macacão azul-claro, cabelo platinado; viagem da carne' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; carteiro; aprendeu duas palavras em finlandês' }
  },

  sanasto: [
    'taitaa', 'retki', 'vuolukivi', 'vuolukivitakka', 'pehmeä', 'kultainen', 'postikortti', 'opetella', 'koskaan', 'jo', 'ennen',
    'kerta', 'ensimmäinen', 'mukaan', 'bingo', 'kai', 'aikoa', 'saattaa', 'kestää', 'ilman', 'kyse'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Já esteve em Ouro Preto?',
      html: `
<ul class="tavoitteet">
  <li>Você pergunta se alguém já fez algo e responde: <span class="fi">Oletteko käyneet Ouro Pretossa? – Emme ole.</span></li>
  <li>Você conta o que já fez até agora: <span class="fi">Olemme nähneet kolme kirkkoa.</span></li>
  <li>Você pronuncia a consoante dupla do particípio, <span class="fi">ollut, tullut, mennyt</span>, e não confunde <span class="fi">ollut</span> com <span class="fi">olut</span>.</li>
  <li>Parte B: o perfeito em todas as pessoas (<span class="fi">olen käynyt, en ole käynyt</span>), perfeito ou passado, e os casos de lugar no plural (<span class="fi">kirkoissa, museoista, saunoihin</span>).</li>
</ul>
<p data-paikka="belo-horizonte-panoraama">Sábado, 2 de janeiro de 2027, seis da manhã. O Ano-Novo passou, o Jay se recuperou do susto da semana passada (lição 18), e amanhã à tarde ele e a Maia voam de volta para Helsinque. Hoje é o último passeio: Ouro Preto, a uns cem quilômetros de Belo Horizonte. A Malu dirige, devagar e com cuidado, como sempre. Ao lado dela vai a Maíra, professora de história e atleticana, que conta em português, sem parar, a história da cidade: o ouro do século XVIII, as minas, as igrejas barrocas, o Aleijadinho. A Maia traduz para o Jay o que dá. O Jay só presta atenção quando a Maíra fala de pedras.</p>

<section class="osio" data-paikka="ouro-preto">
  <h2>Diálogo A: Vanhassa kirkossa</h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure o verbo <span class="fi">olla</span> + uma palavra em <span class="fi pala">-nut/-nyt</span> ou <span class="fi pala">-neet</span>: <span class="fi">olemme nähneet, oletko nähnyt</span>. É o perfeito, o “já fiz”. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t19-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="Sábado, onze horas. A Maia e o Jay estão numa igreja antiga em Ouro Preto.">Lauantai, kello yksitoista. Maia ja Jay ovat vanhassa kirkossa Ouro Pretossa.</p>
    <p class="s" data-h="uuno3" data-pt="Maia! Jay! O que vocês estão fazendo aqui?">Maia! Jay! Mitä te teette täällä?</p>
    <p class="s" data-h="maia" data-pt="Oi, Uuno, oi, Eenok! Estamos num passeio. Vocês já estiveram em Ouro Preto antes?">Hei Uuno, hei Eenok! Me <span data-l="olla#2">olemme</span> retkellä. Oletteko käyneet Ouro Pretossa ennen?</p>
    <p class="s" data-h="eenok3" data-pt="Não estivemos. É a primeira vez.">Emme ole. Tämä on ensimmäinen kerta.</p>
    <p class="s" data-h="uuno3" data-pt="Mas hoje já vimos três igrejas e dois museus!">Mutta tänään olemme jo nähneet kolme kirkkoa ja kaksi museota!</p>
    <p class="s" data-h="eenok3" data-pt="Jay, você provavelmente já viu a igreja de ouro?">Jay, olet kai nähnyt kultaisen kirkon?</p>
    <p class="s" data-h="jay" data-pt="Não vi. Estou olhando esta pedra há meia hora.">En ole nähnyt. Minä olen katsonut tätä kiveä puoli tuntia.</p>
    <p class="s" data-h="maia" data-pt="O Jay é geólogo. Nas igrejas, ele só olha as pedras.">Jay on geologi. Kirkoissa hän katsoo vain kiviä.</p>
    <p class="s" data-h="jay" data-pt="Esta pedra é pedra-sabão! Vocês já viram pedra-sabão alguma vez?">Tämä kivi on vuolukiveä! Oletteko koskaan nähneet vuolukiveä?</p>
    <p class="s" data-h="uuno3" data-pt="Já! Nós temos uma lareira de pedra-sabão na casa de campo.">Olemme! Meillä on mökillä vuolukivitakka.</p>
    <p class="s" data-h="eenok3" data-pt="Na Finlândia tem muita pedra-sabão.">Suomessa on paljon vuolukiveä.</p>
    <p class="s" data-h="jay" data-pt="Eu sei. Uma vez eu achei pedra-sabão em Kuusamo.">Tiedän. Löysin kerran vuolukiveä Kuusamosta.</p>
    <p class="s" data-h="maia" data-pt="Porque você é um nerd de pedras!">Koska sinä olet kivinörtti!</p>
    <p class="s" data-h="maia" data-pt="E no Brasil também! Agora nós vamos para a igreja de ouro. Vocês vêm junto?">Ja Brasiliassa myös! Nyt me menemme kultaiseen kirkkoon. Tuletteko mukaan?</p>
    <p class="s" data-h="uuno3" data-pt="Vamos! Ainda não a vimos.">Tulemme! Emme ole vielä nähneet sitä.</p>
    <p class="s" data-h="eenok3" data-pt="Quanto tempo dura o caminho?">Kuinka kauan matka kestää?</p>
    <p class="s" data-h="maia" data-pt="Só cinco minutos. Mas a ladeira é difícil.">Vain viisi minuuttia. Mutta ylämäki on vaikea.</p>
    <p class="s" data-h="jay" data-pt="Vocês pretendem ir também a Inhotim?">Aiotteko te käydä myös Inhotimissa?</p>
    <p class="s" data-h="uuno3" data-pt="Pretendemos, amanhã.">Aiomme, huomenna.</p>
    <p class="s" data-h="kertoja" data-pt="Eles sobem a ladeira juntos.">He kävelevät yhdessä ylämäkeen.</p>
  </div>
  <p>A Maíra, que não entende uma palavra de finlandês, ri ao ver o Jay de joelhos diante de uma pedra. Ela explica, em português, que a fachada desta igreja, a de São Francisco de Assis, foi entalhada pelo Aleijadinho em pedra-sabão, e que a “igreja de ouro” é a Matriz do Pilar, com o interior inteiro coberto de folha de ouro. Na Matriz, o Jay finalmente olha para cima. Na praça em frente está a casa redonda e branca do Uuno e do Eenok, embora ninguém tenha visto os dois chegarem dirigindo.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Oletteko käyneet Ouro Pretossa ennen? – Emme ole.</span> = vocês já estiveram em Ouro Preto antes? – Não · o perfeito, o “já fiz”: parte B desta lição</li>
      <li><span class="fi">Me <span data-l="olla#2">olemme</span> retkellä.</span> = estamos num passeio · <span class="fi">retki</span> leva <span class="fi pala">-lla</span>, como <span class="fi">lentokentällä</span> (lição 10)</li>
      <li><span class="fi">kolme kirkkoa ja kaksi museota</span> = três igrejas e dois museus · depois de número, o partitivo singular (lição 3)</li>
      <li><span class="fi">Minä olen katsonut tätä kiveä puoli tuntia.</span> = estou olhando esta pedra há meia hora · o perfeito também diz “desde antes até agora”</li>
      <li><span class="fi">Kirkoissa hän katsoo vain kiviä.</span> = nas igrejas ele só olha as pedras · <span class="fi">kirkoissa</span> é o plural de <span class="fi">kirkossa</span>: parte B desta lição</li>
      <li><span class="fi">Tämä on ensimmäinen kerta.</span> = é a primeira vez · <span class="fi">Tuletteko mukaan?</span> = vocês vêm junto? · <span class="fi">mukaan</span> = junto</li>
      <li><span class="fi">Emme ole vielä nähneet sitä.</span> = ainda não a vimos · <span class="fi">vielä</span> + negação = ainda não</li>
      <li><span class="fi">Olet kai nähnyt…?</span> = você provavelmente já viu…? · <span class="fi">Kuinka kauan matka kestää?</span> = quanto tempo dura o caminho? · <span class="fi">Aiotteko…?</span> = vocês pretendem…?</li>
    </ul>
  </div>
</section>

<section class="osio">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="O passeio: já, ainda, nunca" data-sanat="retki,kirkko,museo,vanha,kultainen,vuolukivi,postikortti,jo,vielä,koskaan,kerta,ensimmäinen"></div>
  <p>As outras palavras da lição estão no <a href="#t19-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio">
  <h2>Bingo de viagem: <span class="fi">Oletko käynyt…?</span></h2>
  <p>Na igreja de ouro, enquanto a Maíra explica as paredes douradas, o Uuno tira do bolso do macacão um bingo de viagem que ele fez no avião. Cada casa é uma pergunta “você já…?”. Para marcar a casa, a Maia precisa fazer a pergunta certa ou entender a resposta. Uma linha completa é bingo; a cartela inteira, o prêmio.</p>
  <p class="ohje">Toque numa casa e escolha. Veja a quem é a pergunta: a uma pessoa, <span class="fi">Oletko…?</span> (<span class="fi">sinä</span>); aos dois, <span class="fi">Oletteko…?</span> (<span class="fi">te</span>). Nas casas com 👂, ouça a resposta e escolha o que ela quer dizer.</p>
  <div class="bingo" data-otsikko="Oletko käynyt…?" data-laskuri="Casas marcadas" data-bingo="BINGO! Uma linha completa. Continue até a cartela inteira." data-auki="Casa">
    <div class="valinta" data-oikea="Oletko nähnyt kultaisen kirkon?" data-ikoni="⛪" data-kenelle="uuno3" data-vihje="Uuno: igreja de ouro?">
      <p class="kysymys">Pergunte ao Uuno se ele já viu uma igreja de ouro.</p>
      <div class="vaihtoehdot"><button type="button">Oletteko nähneet kultaisen kirkon?</button><button type="button">Oletko nähnyt kultaisen kirkon?</button><button type="button">Onko hän nähnyt kultaisen kirkon?</button></div>
      <p class="s bingo-vastaus" data-h="uuno3" data-pt="Já vi. Hoje!">Olen nähnyt. Tänään!</p>
    </div>
    <div class="valinta" data-oikea="Oletteko käyneet Lissabonissa?" data-ikoni="🛫" data-kenelle="uuno3,eenok3" data-vihje="os dois: Lisboa?">
      <p class="kysymys">Pergunte aos dois se eles já estiveram em Lisboa.</p>
      <div class="vaihtoehdot"><button type="button">Oletteko käyneet Lissabonissa?</button><button type="button">Ovatko he käyneet Lissabonissa?</button><button type="button">Oletko käynyt Lissabonissa?</button></div>
      <p class="s bingo-vastaus" data-h="eenok3" data-pt="Já. Só no aeroporto!">Olemme. Vain lentokentällä!</p>
    </div>
    <div class="valinta" data-oikea="Oletko syönyt mangoa Brasiliassa?" data-ikoni="🥭" data-kenelle="eenok3" data-vihje="Eenok: manga?">
      <p class="kysymys">Pergunte ao Eenok se ele já comeu manga no Brasil.</p>
      <div class="vaihtoehdot"><button type="button">Oletko ostanut mangoa Brasiliassa?</button><button type="button">Oletko juonut mangoa Brasiliassa?</button><button type="button">Oletko syönyt mangoa Brasiliassa?</button></div>
      <p class="s bingo-vastaus" data-h="eenok3" data-pt="Já comi. Dez mangas!">Olen syönyt. Kymmenen mangoa!</p>
    </div>
    <div class="valinta" data-oikea="Ainda não fomos a Inhotim." data-ikoni="🌳" data-kenelle="eenok3" data-vihje="Eenok: Inhotim">
      <p class="kysymys">A Maia pergunta sobre Inhotim, o museu de arte perto de Belo Horizonte. O que o Eenok quer dizer?</p>
      <p class="s" data-h="eenok3">Emme ole vielä käyneet Inhotimissa.</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">Já fomos a Inhotim.</button><button type="button">Ainda não fomos a Inhotim.</button><button type="button">Não fomos a Inhotim ontem.</button></div>
    </div>
    <div class="valinta" data-oikea="Oletko ostanut Maian taulun?" data-ikoni="🖼️" data-kenelle="uuno3" data-vihje="Uuno: quadro da Maia?">
      <p class="kysymys">Pergunte ao Uuno se ele já comprou um quadro da Maia.</p>
      <div class="vaihtoehdot"><button type="button">Oletko nähnyt Maian taulun?</button><button type="button">Oletko ostanut Maian taulun?</button><button type="button">Oletko myynyt Maian taulun?</button></div>
      <p class="s bingo-vastaus" data-h="uuno3" data-pt="Já! E a xícara azul.">Olen! Ja sinisen kupin.</p>
    </div>
    <div class="valinta" data-oikea="Oletko käynyt saunassa Brasiliassa?" data-ikoni="🧖" data-kenelle="jay" data-vihje="Jay: sauna no Brasil?">
      <p class="kysymys">Pergunte ao Jay se ele já foi à sauna no Brasil.</p>
      <div class="vaihtoehdot"><button type="button">Olenko käynyt saunassa Brasiliassa?</button><button type="button">Oletteko käyneet saunassa Brasiliassa?</button><button type="button">Oletko käynyt saunassa Brasiliassa?</button></div>
      <p class="s bingo-vastaus" data-h="jay" data-pt="Não fui. Aqui não tem sauna.">En ole. Täällä ei ole saunaa.</p>
    </div>
    <div class="valinta" data-oikea="Estou há duas semanas sem sauna." data-ikoni="⏳" data-kenelle="jay" data-vihje="Jay: duas semanas">
      <p class="kysymys">O Jay suspira. O que ele quer dizer?</p>
      <p class="s" data-h="jay">Olen ollut kaksi viikkoa ilman saunaa.</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">Vou ficar duas semanas sem sauna.</button><button type="button">Fiquei duas semanas sem sauna no ano passado.</button><button type="button">Estou há duas semanas sem sauna.</button></div>
    </div>
    <div class="valinta" data-oikea="Oletteko käyneet Mercado Centralissa?" data-ikoni="🧀" data-kenelle="uuno3,eenok3" data-vihje="os dois: Mercado Central?">
      <p class="kysymys">Pergunte aos dois se eles já estiveram no Mercado Central.</p>
      <div class="vaihtoehdot"><button type="button">Oletko käynyt Mercado Centralissa?</button><button type="button">Oletteko käyneet Mercado Centralissa?</button><button type="button">Ovatko he käyneet Mercado Centralissa?</button></div>
      <p class="s bingo-vastaus" data-h="uuno3" data-pt="Já! Compramos queijo lá.">Olemme! Ostimme siellä juustoa.</p>
    </div>
    <div class="valinta" data-oikea="Já escrevi três cartões-postais." data-ikoni="✉️" data-kenelle="uuno3" data-vihje="Uuno: cartões-postais">
      <p class="kysymys">O Uuno mostra o bolso do macacão. O que ele quer dizer?</p>
      <p class="s" data-h="uuno3">Olen kirjoittanut kolme postikorttia.</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">Já escrevi três cartões-postais.</button><button type="button">Vou escrever três cartões-postais.</button><button type="button">Não escrevi três cartões-postais.</button></div>
    </div>
    <p class="s bingo-loppu" data-h="eenok3" data-pt="Bingo! Maia, você acertou todas as perguntas!">Bingo! Maia, olet kysynyt kaikki kysymykset oikein!</p>
  </div>
  <p>Repare na casa do Uuno e do Eenok no Mercado Central: a pergunta vem no perfeito (<span class="fi">Oletteko käyneet…?</span>, “já foram alguma vez?”), mas a resposta conta um momento certo e vai para o passado (<span class="fi">Ostimme siellä juustoa.</span>). A parte B explica a diferença.</p>
</section>

<section class="osio" data-paikka="quadrilatero-ferrifero">
  <h2>Pronúncia: ollut, tullut, mennyt (e não olut!)</h2>
  <p>Na volta, a estrada passa pelas minas de ferro do Quadrilátero Ferrífero, e os dois geólogos colam o nariz na janela. A Maia aproveita para contar o erro do dia. Na igreja, ela quis dizer ao Uuno que já tinha estado em Ouro Preto muitas vezes e disse <span class="pala">Olen olut täällä</span>, com um <span class="pala">l</span> só. Mas <span class="fi">olut</span> é cerveja. O Uuno riu: cerveja, na igreja? O Jay achou a frase perfeita.</p>
  <p>Nos verbos do tipo 3, o particípio tem consoante <b>dupla</b>: <span class="fi">olla → ollut</span>, <span class="fi">tulla → tullut</span>, <span class="fi">mennä → mennyt</span>, <span class="fi">nousta → noussut</span>. Segure a consoante, como no italiano “bello”: <span class="pala">OL-lut</span>, <span class="pala">TUL-lut</span>, <span class="pala">MEN-nyt</span>. Nos tipos 1 e 2, o <span class="fi pala">n</span> é simples: <span class="fi">puhunut, syönyt, juonut</span>; nos tipos 4 e 5 é duplo: <span class="fi">halunnut, tarvinnut</span>. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="estado, sido (particípio de olla)">ollut</li>
    <li class="s" data-pt="cerveja">olut</li>
    <li class="s" data-pt="vindo (particípio de tulla)">tullut</li>
    <li class="s" data-pt="ido (particípio de mennä)">mennyt</li>
    <li class="s" data-pt="comido (particípio de syödä)">syönyt</li>
    <li class="s" data-pt="bebido (particípio de juoda)">juonut</li>
    <li class="s" data-pt="Eu já estive aqui.">Olen ollut täällä.</li>
    <li class="s" data-pt="Eu já tomei cerveja aqui.">Olen juonut täällä olutta.</li>
  </ul>
  <div class="saanto">
    <h3>Truque: conte as consoantes</h3>
    <p>Letra dupla, som longo; letra simples, som curto (lição 0). Em <span class="fi">ollut</span>, a língua fica parada no <span class="pala">l</span> um instante; em <span class="fi">olut</span>, passa rápido. E o fim é curto nos dois: <span class="pala">-lut</span>, nunca <span class="pala">-luut</span>. No plural, a consoante continua dupla: <span class="fi">olleet, tulleet, menneet</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ligue: o que já aconteceu?</h3>
    <ul class="yhdista">
      <li data-pari="eu já fui (lá)">olen käynyt</li>
      <li data-pari="você já viu?">oletko nähnyt</li>
      <li data-pari="eu ainda não fui">en ole vielä käynyt</li>
      <li data-pari="nós já vimos">olemme nähneet</li>
      <li data-pari="vocês já estiveram?">oletteko olleet</li>
      <li data-pari="alguma vez">koskaan</li>
      <li data-pari="a primeira vez">ensimmäinen kerta</li>
      <li data-pari="antes">ennen</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>2. Ouça: perfeito ou passado?</h3>
    <p class="ohje">Aperte ▶ sem ler. Perfeito: <span class="fi">olla</span> + particípio (<span class="fi">olemme nähneet</span>). Passado: um verbo só, com <span class="fi pala">-i-</span> (<span class="fi">näimme</span>).</p>
    <div class="valinta" data-kuuntele="Olemme nähneet kolme kirkkoa." data-oikea="perfeito">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">perfeito</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Näimme kolme kirkkoa." data-oikea="passado">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">perfeito</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Uuno osti kupin." data-oikea="passado">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">perfeito</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Jay on katsonut kiveä." data-oikea="perfeito">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">perfeito</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Oletteko käyneet täällä?" data-oikea="perfeito">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">perfeito</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Kävittekö täällä?" data-oikea="passado">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">perfeito</button><button type="button">passado</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>3. Você entendeu o diálogo A?</h3>
    <p class="ohje">Atenção à pessoa da resposta: sobre o Uuno e o Eenok, <span class="fi">he</span>; sobre o Jay, <span class="fi">hän</span>.</p>
    <div class="valinta" data-oikea="Eivät ole.">
      <p class="kysymys"><span class="fi">Ovatko Uuno ja Eenok käyneet Ouro Pretossa ennen?</span></p>
      <div class="vaihtoehdot"><button type="button">Ovat.</button><button type="button">Emme ole.</button><button type="button">Eivät ole.</button></div>
    </div>
    <div class="valinta" data-oikea="Kolme.">
      <p class="kysymys"><span class="fi">Kuinka monta kirkkoa Uuno ja Eenok ovat nähneet tänään?</span></p>
      <div class="vaihtoehdot"><button type="button">Kaksi.</button><button type="button">Kolme.</button><button type="button">Neljä.</button></div>
    </div>
    <div class="valinta" data-oikea="Ei ole.">
      <p class="kysymys"><span class="fi">Onko Jay nähnyt kultaisen kirkon?</span></p>
      <div class="vaihtoehdot"><button type="button">Ei ole.</button><button type="button">On.</button><button type="button">En ole.</button></div>
    </div>
    <div class="valinta" data-oikea="Kiviä.">
      <p class="kysymys"><span class="fi">Mitä Jay katsoo kirkoissa?</span></p>
      <div class="vaihtoehdot"><button type="button">Tauluja.</button><button type="button">Kiviä.</button><button type="button">Kirjoja.</button></div>
    </div>
    <div class="valinta" data-oikea="Kultaiseen kirkkoon.">
      <p class="kysymys"><span class="fi">Mihin kaikki menevät?</span></p>
      <div class="vaihtoehdot"><button type="button">Museoon.</button><button type="button">Kotiin.</button><button type="button">Kultaiseen kirkkoon.</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Kävimme kirkoissa: o perfeito e o plural de lugar',
      html: `
<ul class="tavoitteet">
  <li>Você forma o perfeito em todas as pessoas: <span class="fi">olen käynyt, olemme nähneet, en ole käynyt</span>.</li>
  <li>Você escolhe entre perfeito e passado: <span class="fi">Olemme olleet täällä kaksi viikkoa.</span> × <span class="fi">Eilen kävimme Ouro Pretossa.</span></li>
  <li>Você usa os casos de lugar no plural: <span class="fi">kirkoissa, kirkoista, saunoihin, järville</span>.</li>
  <li>Você se despede: <span class="fi">Näkemiin! Kiitos!</span></li>
</ul>

<p data-paikka="bh-bairro">Sábado à noite, de volta a Belo Horizonte. A Marta fez feijão tropeiro de despedida, o Walker tocou gaita na varanda, e a mala do Jay pesa três quilos a mais: uma panela de pedra-sabão para a Purjo. Antes de dormir, a Maia escreve um cartão-postal para a Purjo, com a foto da Praça Tiradentes. O Anderson, que é carteiro, guarda o cartão com cuidado: na segunda-feira de manhã, ele mesmo vai levá-lo ao correio.</p>

<section class="osio">
  <h2>O cartão-postal para a Purjo</h2>
  <p class="ohje">Vire o cartão e toque numa linha: a Maia lê. Procure as formas do plural com <span class="fi pala">-i-</span>: <span class="fi">kirkoissa</span> (nas igrejas), <span class="fi">kirkoista</span> (das igrejas), <span class="fi">saunoihin</span> (para as saunas). A regra vem na Gramática abaixo.</p>
  <div class="postikortti" data-kuva="ouro-preto" data-otsikko="Kiitos, Brasilia!" data-h="maia" data-osoite="Purjo|Helsinki|Suomi" data-leima="Belo Horizonte · 4 JAN 2027">
    <p lang="fi-FI" data-puhu="Hei Purjo!" data-pt="Oi, Purjo!">Hei Purjo!</p>
    <p lang="fi-FI" data-puhu="Tänään kävimme Ouro Pretossa." data-pt="Hoje nós fomos a Ouro Preto.">Tänään kävimme Ouro Pretossa.</p>
    <p lang="fi-FI" data-puhu="Kävimme vanhoissa kirkoissa ja museoissa." data-pt="Visitamos igrejas e museus antigos.">Kävimme vanhoissa kirkoissa ja museoissa.</p>
    <p lang="fi-FI" data-puhu="Jay otti sata kuvaa kirkoista ja kivistä." data-pt="O Jay tirou cem fotos das igrejas e das pedras.">Jay otti sata kuvaa kirkoista ja kivistä.</p>
    <p lang="fi-FI" data-puhu="Jayn laukussa on kymmenen kiveä. Mistä on kyse? Hän sanoo, että ne ovat tärkeitä." data-pt="Na mala do Jay há dez pedras. Do que se trata? Ele diz que são importantes.">Jayn laukussa on kymmenen kiveä. Mistä on kyse? Hän sanoo, että ne ovat tärkeitä.</p>
    <p lang="fi-FI" data-puhu="Kirkossa tapasimme Uunon ja Eenokin!" data-pt="Na igreja encontramos o Uuno e o Eenok!">Kirkossa tapasimme Uunon ja Eenokin!</p>
    <p lang="fi-FI" data-puhu="Olemme olleet Brasiliassa kaksi viikkoa. Huomenna lennämme kotiin." data-pt="Estamos no Brasil há duas semanas. Amanhã voamos para casa.">Olemme olleet Brasiliassa kaksi viikkoa. Huomenna lennämme kotiin.</p>
    <p lang="fi-FI" data-puhu="Kesällä menemme kaikki yhdessä saunoihin ja järville!" data-pt="No verão vamos todos juntos para as saunas e os lagos!">Kesällä menemme kaikki yhdessä saunoihin ja järville!</p>
    <p lang="fi-FI" data-puhu="Terveisin Maia ja Jay" data-pt="Um abraço, Maia e Jay">Terveisin Maia ja Jay</p>
  </div>
  <p>A Maia escreve <span class="fi">kävimme</span> para o passeio de hoje, que já terminou (passado), e <span class="fi">olemme olleet</span> para as duas semanas no Brasil, que continuam até agora (perfeito). E no verão, como ela promete, a família da Maia vai mesmo à Finlândia (lição 20).</p>
</section>

<section class="osio" data-paikka="confins">
  <h2>Diálogo B: Näkemiin, Brasilia!</h2>
  <p class="ohje">Domingo, 3 de janeiro, aeroporto de Confins. Ouça primeiro sem tradução. Conte quantas vezes aparece o perfeito (<span class="fi">olla</span> + particípio). E o Anderson diz as duas palavras finlandesas que aprendeu.</p>
  <div class="kpl" id="t19-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="Domingo, quatro da tarde. A família inteira está no aeroporto de Confins.">Sunnuntai, kello neljä iltapäivällä. Koko perhe on Confinsin lentokentällä.</p>
    <p class="s" data-h="jay" data-pt="Maia, duas semanas passaram rápido.">Maia, kaksi viikkoa on mennyt nopeasti.</p>
    <p class="s" data-h="maia" data-pt="Passaram mesmo. Nós fomos a igrejas, museus e feiras.">Niin on. Olemme käyneet kirkoissa, museoissa ja toreilla.</p>
    <p class="s" data-h="jay" data-pt="E eu aprendi um pouco de português.">Ja minä olen oppinut vähän portugalia.</p>
    <p class="s" data-h="maia" data-pt="E você conheceu a família inteira.">Ja sinä olet tavannut koko perheen.</p>
    <p class="s" data-h="jay" data-pt="E eu fiquei dois dias sem cerveja!">Ja minä olen ollut kaksi päivää ilman olutta!</p>
    <p class="s" data-h="maia" data-pt="É verdade. Que ótimo, Jay!">Se on totta. <span data-l="hieno#2">Hienoa</span>, Jay!</p>
    <p class="s" data-h="kertoja" data-pt="O Anderson vem até a frente do Jay. Ele tem uma carta.">Anderson tulee Jayn eteen. Hänellä on kirje.</p>
    <p class="s" data-h="anderson" data-pt="Tchau, tchau! Obrigado!">Moi moi! Kiitos!</p>
    <p class="s" data-h="jay" data-pt="Obrigado, Anderson! Esta carta é para mim?">Kiitos, Anderson! Onko tämä kirje minulle?</p>
    <p class="s" data-h="maia" data-pt="É. O Anderson escreveu em finlandês!">On. Anderson on kirjoittanut sen suomeksi!</p>
    <p class="s" data-h="jay" data-pt="Na carta só tem uma palavra: obrigado.">Kirjeessä on vain yksi sana: kiitos.</p>
    <p class="s" data-h="maia" data-pt="Ele treinou essa palavra a semana inteira.">Hän on opetellut sitä koko viikon.</p>
    <p class="s" data-h="maia" data-pt="A mamãe pergunta: vocês voltam?">Äiti kysyy: tuletteko takaisin?</p>
    <p class="s" data-h="jay" data-pt="Provavelmente voltamos. Esta pode ter sido a melhor viagem.">Tulemme varmaan takaisin. Tämä saattaa olla paras matka.</p>
    <p class="s" data-h="maia" data-pt="E na sua mala tem mais pedras?">Ja onko laukussa lisää kiviä?</p>
    <p class="s" data-h="jay" data-pt="Só cinco. Às vezes eu sou meio louco.">Vain viisi. Joskus minä olen vähän hullu.</p>
    <p class="s" data-h="kertoja" data-pt="Aviso: última chamada para Lisboa!">Kuulutus: viimeinen kutsu Lissaboniin!</p>
    <p class="s" data-h="jay" data-pt="De novo! Até logo, Brasil! Obrigado!">Taas! Näkemiin, Brasilia! <span lang="pt-BR">Obrigado!</span></p>
    <p class="s" data-h="maia" data-pt="Até logo! Aqui nós fomos felizes como porquinhos.">Näkemiin! Täällä olemme olleet onnellisia kuin possut.</p>
  </div>
  <p>A Marta chora, o Walker toca uma última música na gaita no meio do saguão, e o Anderson acena com o boné do Rei Leão até o Jay sumir na fila do embarque. Na carta, com a letra caprichada de quem entrega cartas todo dia, uma palavra só: KIITOS. O Jay guarda a carta dentro do passaporte. E corre: é a segunda vez que eles quase perdem um voo para Lisboa (lição 10).</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Kaksi viikkoa on mennyt nopeasti.</span> = duas semanas passaram rápido · depois de número, o verbo fica no singular: <span class="fi">on mennyt</span></li>
      <li><span class="fi">Niin on.</span> = é mesmo, passaram mesmo</li>
      <li><span class="fi">Olet tavannut koko perheen.</span> = você conheceu a família inteira · <span class="fi">tavata</span> = encontrar, conhecer uma pessoa</li>
      <li><span class="fi">Onko tämä kirje minulle?</span> = esta carta é para mim?</li>
      <li><span class="fi">Hän on opetellut sitä koko viikon.</span> = ele treinou isso a semana inteira · <span class="fi">koko viikon</span>, sem preposição</li>
      <li><span class="fi">Viimeinen kutsu Lissaboniin!</span> = última chamada para Lisboa! (lição 10)</li>
      <li><span class="fi">ilman olutta</span> = sem cerveja · <span class="fi">ilman</span> + partitivo · <span class="fi">Tulemme varmaan takaisin.</span> = provavelmente voltamos · <span class="fi">Se saattaa olla…</span> = pode ser…</li>
      <li><span class="fi">Olemme olleet onnellisia kuin possut.</span> = fomos felizes como porquinhos · a piada da lição 8; depois de <span class="fi">me olemme</span>, o adjetivo no partitivo plural: <span class="fi">onnellisia</span></li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 1 · O perfeito: <span class="fi">olla</span> + particípio</h2>

  <h3>1. Já fui: o perfeito</h3>
  <p>Na lição 15 você aprendeu o particípio: <span class="fi">en käynyt</span> (não fui). Com o verbo <span class="fi">olla</span> no presente, o mesmo particípio forma o <b>perfeito</b> (<span class="fi">perfekti</span>): <span class="fi">olen käynyt</span> = já fui, já estive. O <span class="fi">olla</span> muda com a pessoa; o particípio, só com o número: <span class="fi pala">-nut/-nyt</span> no singular, <span class="fi pala">-neet</span> no plural. Aqui o <span class="fi">olla</span> não é “ser” nem “estar”: é só o ajudante, como o “ter” de “tenho feito”.</p>
  <table class="taivutus">
    <tr><th>pessoa</th><th>afirmativo</th><th>negativo</th><th>português</th></tr>
    <tr><td><span class="fi">minä</span></td><td><span class="fi">olen käynyt</span></td><td><span class="fi">en ole käynyt</span></td><td>eu já fui · eu nunca fui, ainda não fui</td></tr>
    <tr><td><span class="fi">sinä</span></td><td><span class="fi">olet käynyt</span></td><td><span class="fi">et ole käynyt</span></td><td>você já foi · nunca foi</td></tr>
    <tr><td><span class="fi">hän</span></td><td><span class="fi">on käynyt</span></td><td><span class="fi">ei ole käynyt</span></td><td>ele, ela já foi · nunca foi</td></tr>
    <tr><td><span class="fi">me</span></td><td><span class="fi">olemme käyneet</span></td><td><span class="fi">emme ole käyneet</span></td><td>nós já fomos · nunca fomos</td></tr>
    <tr><td><span class="fi">te</span></td><td><span class="fi">olette käyneet</span></td><td><span class="fi">ette ole käyneet</span></td><td>vocês já foram · nunca foram</td></tr>
    <tr><td><span class="fi">he</span></td><td><span class="fi">ovat käyneet</span></td><td><span class="fi">eivät ole käyneet</span></td><td>eles, elas já foram · nunca foram</td></tr>
  </table>
  <p><b>Pergunta:</b> <span class="fi pala">-ko/-kö</span> no <span class="fi">olla</span>: <span class="fi">Oletko käynyt? Onko hän nähnyt? Oletteko syöneet?</span> <b>Resposta curta:</b> só o <span class="fi">olla</span>: <span class="fi">Olen. – En ole.</span> · <span class="fi">Olemme. – Emme ole.</span></p>
  <p><b>Negação:</b> o <span class="fi">olla</span> fica <span class="fi">ole</span>, como no presente (lição 1): <span class="fi">en ole käynyt</span>. Sem o <span class="fi">ole</span>, a frase é o passado negativo da lição 15: <span class="fi">en käynyt</span> = não fui (num momento certo).</p>
  <p><b><span class="fi">käydä</span>:</b> ir a um lugar e voltar, visitar. O lugar é onde a visita acontece: <span class="fi pala">-ssa</span> ou <span class="fi pala">-lla</span> (onde?), não “para onde”: <span class="fi">Olen käynyt Ouro Pretossa</span> = já fui a Ouro Preto.</p>

  <h3>2. Perfeito ou passado?</h3>
  <p>O português diz “fui” em “já fui a Ouro Preto” e em “fui a Ouro Preto ontem”. O finlandês separa os dois. O <b>perfeito</b> fala de algo até agora, sem dizer quando. O <b>passado</b> (lição 13) fala de um momento que já terminou.</p>
  <table class="taivutus">
    <tr><th>finlandês</th><th>português</th><th>por quê</th></tr>
    <tr><td><span class="fi">Oletko koskaan käynyt Ouro Pretossa?</span></td><td>Você já foi a Ouro Preto alguma vez?</td><td>até agora, sem quando: perfeito</td></tr>
    <tr><td><span class="fi">Kävin Ouro Pretossa eilen.</span></td><td>Fui a Ouro Preto ontem.</td><td>ontem já terminou: passado</td></tr>
    <tr><td><span class="fi">Olemme tänään nähneet jo kolme kirkkoa.</span></td><td>Hoje já vimos três igrejas.</td><td>o passeio continua: perfeito</td></tr>
    <tr><td><span class="fi">Eilen näimme kolme kirkkoa.</span></td><td>Ontem vimos três igrejas.</td><td>passado</td></tr>
    <tr><td><span class="fi">Olemme olleet täällä kaksi viikkoa.</span></td><td>Estamos aqui há duas semanas.</td><td>começou antes e continua: perfeito</td></tr>
    <tr><td><span class="fi"><span data-l="olla#2">Olimme</span> siellä kaksi viikkoa.</span></td><td>Ficamos lá duas semanas.</td><td>já terminou: passado</td></tr>
  </table>
  <p>Com o perfeito vêm muitas vezes <span class="fi">jo</span> (já), <span class="fi">koskaan</span> (alguma vez; com negação, nunca), <span class="fi">vielä</span> com negação (ainda não: <span class="fi">en ole vielä käynyt</span>) e <span class="fi">kolme kertaa</span> (três vezes até agora). Com um “quando” que já terminou (<span class="fi">eilen, viime viikolla, kaksi päivää sitten, kello kuusi</span>), use o passado.</p>
  <ul class="esim">
    <li class="s" data-pt="Eu nunca fui a Inhotim.">En ole koskaan käynyt Inhotimissa.</li>
    <li class="s" data-pt="O Jay ainda não viu a igreja de ouro.">Jay ei ole vielä nähnyt kultaista kirkkoa.</li>
    <li class="s" data-pt="Ontem a Maia escreveu um cartão-postal.">Eilen Maia kirjoitti postikortin.</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> “estou aqui há duas semanas” está no presente em português, mas em finlandês é perfeito: <span class="fi">olen ollut täällä kaksi viikkoa</span>. A frase <span class="fi"><span data-l="olla#2">olen</span> täällä kaksi viikkoa</span> quer dizer outra coisa: vou ficar aqui duas semanas. E na negação o objeto vai para o partitivo, como sempre (lição 12): <span class="fi">olen nähnyt kultaisen kirkon</span>, mas <span class="fi">en ole nähnyt kultaista kirkkoa</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: o perfeito</h2>
  <p>Dez da noite, no avião para Lisboa. O Jay não consegue dormir, e a Maia faz com ele um último treino.</p>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Complete o perfeito</h3>
    <p class="ohje">Escreva a forma que falta: o particípio (<span class="fi pala">-nut/-nyt</span> no singular, <span class="fi pala">-neet</span> no plural) ou o <span class="fi">olla</span> na pessoa certa. O verbo está entre parênteses.</p>
    <div class="aukot" lang="fi-FI">
      <p>Me olemme <span class="aukko" data-oikea="nähneet"></span> kolme kirkkoa. <span data-ei-kuplaa>(nähdä)</span></p>
      <p>Oletko <span class="aukko" data-oikea="syönyt"></span> mangoa? <span data-ei-kuplaa>(syödä)</span></p>
      <p>Jay ei ole <span class="aukko" data-oikea="käynyt"></span> saunassa Brasiliassa. <span data-ei-kuplaa>(käydä)</span></p>
      <p>Uuno on <span class="aukko" data-oikea="ostanut"></span> Maian taulun. <span data-ei-kuplaa>(ostaa)</span></p>
      <p>Minä olen <span class="aukko" data-oikea="oppinut"></span> vähän portugalia. <span data-ei-kuplaa>(oppia)</span></p>
      <p>Uuno ja Eenok, <span class="aukko" data-oikea="oletteko"></span> te käyneet Mercado Centralissa? <span data-ei-kuplaa>(olla)</span></p>
      <p>Anderson <span class="aukko" data-oikea="on"></span> kirjoittanut kirjeen. <span data-ei-kuplaa>(olla)</span></p>
      <p>Me <span class="aukko" data-oikea="olemme"></span> olleet Brasiliassa kaksi viikkoa. <span data-ei-kuplaa>(olla)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Perfeito ou passado?</h3>
    <p class="ohje">A palavra de tempo decide. Um “quando” que já terminou (<span class="fi">eilen, viime kesänä, kello kuusi</span>) pede o passado; algo que continua até agora pede o perfeito.</p>
    <div class="valinta" data-oikea="kävimme">
      <p class="kysymys"><span class="fi">Eilen me ___ Ouro Pretossa.</span> <span class="fi" data-ei-kuplaa>(käydä)</span></p>
      <div class="vaihtoehdot"><button type="button">olemme käyneet</button><button type="button">kävimme</button></div>
    </div>
    <div class="valinta" data-oikea="olemme olleet">
      <p class="kysymys"><span class="fi">Me ___ Brasiliassa jo kaksi viikkoa. Huomenna lennämme kotiin.</span> <span class="fi" data-ei-kuplaa>(olla)</span></p>
      <div class="vaihtoehdot"><button type="button">olemme olleet</button><button type="button">olimme</button></div>
    </div>
    <div class="valinta" data-oikea="kävivät">
      <p class="kysymys"><span class="fi">Viime kesänä Uuno ja Eenok ___ Lapissa.</span> <span class="fi" data-ei-kuplaa>(käydä)</span></p>
      <div class="vaihtoehdot"><button type="button">ovat käyneet</button><button type="button">kävivät</button></div>
    </div>
    <div class="valinta" data-oikea="on katsonut">
      <p class="kysymys"><span class="fi">Nyt Jay ___ tätä kiveä jo puoli tuntia.</span> <span class="fi" data-ei-kuplaa>(katsoa)</span></p>
      <div class="vaihtoehdot"><button type="button">on katsonut</button><button type="button">katsoi</button></div>
    </div>
    <div class="valinta" data-oikea="ajoi">
      <p class="kysymys"><span class="fi">Kello kuusi aamulla Malu ___ Ouro Pretoon.</span> <span class="fi" data-ei-kuplaa>(ajaa)</span></p>
      <div class="vaihtoehdot"><button type="button">on ajanut</button><button type="button">ajoi</button></div>
    </div>
    <div class="valinta" data-oikea="soitti">
      <p class="kysymys"><span class="fi">Kaksi päivää sitten Maia ___ Purjolle.</span> <span class="fi" data-ei-kuplaa>(soittaa)</span></p>
      <div class="vaihtoehdot"><button type="button">soitti</button><button type="button">on soittanut</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 2 · Os casos de lugar no plural: <span class="fi">kirkoissa, museoista, saunoihin</span></h2>
  <p>No plural, os seis casos de lugar levam <b>-i-</b> antes da terminação, o sinal de plural, o mesmo que aparece no partitivo plural da lição 11 (<span class="fi">kuvia, museoita</span>): <span class="fi">kirkossa</span> (na igreja) → <span class="fi">kirkoissa</span> (nas igrejas). As terminações <span class="fi pala">-ssa, -sta, -lla, -lta, -lle</span> são as do singular; o “para onde?” dentro muda (<span class="fi">kirkkoon → kirkkoihin</span>).</p>
  <table class="taivutus">
    <tr><th>singular: onde?</th><th>plural: onde?</th><th>de onde?</th><th>para onde?</th></tr>
    <tr><td><span class="fi">kirkossa</span><span class="kaannos" lang="pt-BR">na igreja</span></td><td><span class="fi">kirkoissa</span></td><td><span class="fi">kirkoista</span></td><td><span class="fi">kirkkoihin</span></td></tr>
    <tr><td><span class="fi">museossa</span><span class="kaannos" lang="pt-BR">no museu</span></td><td><span class="fi">museoissa</span></td><td><span class="fi">museoista</span></td><td><span class="fi">museoihin</span></td></tr>
    <tr><td><span class="fi">kaupungissa</span><span class="kaannos" lang="pt-BR">na cidade</span></td><td><span class="fi">kaupungeissa</span></td><td><span class="fi">kaupungeista</span></td><td><span class="fi">kaupunkeihin</span></td></tr>
    <tr><td><span class="fi">saunassa</span><span class="kaannos" lang="pt-BR">na sauna</span></td><td><span class="fi">saunoissa</span></td><td><span class="fi">saunoista</span></td><td><span class="fi">saunoihin</span></td></tr>
    <tr><td><span class="fi">järvessä</span><span class="kaannos" lang="pt-BR">no lago</span></td><td><span class="fi">järvissä</span></td><td><span class="fi">järvistä</span></td><td><span class="fi">järviin</span></td></tr>
    <tr><td><span class="fi">torilla</span><span class="kaannos" lang="pt-BR">na feira</span></td><td><span class="fi">toreilla</span></td><td><span class="fi">toreilta</span></td><td><span class="fi">toreille</span></td></tr>
  </table>
  <p><b>A vogal antes do -i-</b>, nas palavras desta lição: <span class="fi pala">o</span> e <span class="fi pala">u</span> ficam (<span class="fi">kirkoissa, museoissa, kaduilla</span>); o <span class="fi pala">a</span> vira <span class="fi pala">o</span> (<span class="fi">saunoissa, kaupoissa</span>) ou cai (<span class="fi">kuvissa</span>); o <span class="fi pala">i</span> vira <span class="fi pala">e</span> (<span class="fi">kaupungeissa, toreilla</span>) ou cai (<span class="fi">järvissä, kivissä</span>). Na dúvida, a bolha da palavra mostra a forma.</p>
  <p><b>A consoante</b> segue o singular: fraca em <span class="fi pala">-issa, -ista, -illa, -ilta, -ille</span> (<span class="fi">kirkoissa</span>, como <span class="fi">kirkossa</span>), forte em <span class="fi pala">-ihin</span> (<span class="fi">kirkkoihin</span>, como <span class="fi">kirkkoon</span>). Para onde? dentro: <span class="fi pala">-ihin</span> (quando o <span class="fi pala">i</span> da palavra cai, <span class="fi pala">-iin</span>); fora: <span class="fi pala">-ille</span> (<span class="fi">toreille</span>): <span class="fi">järviin, kiviin</span>.</p>
  <p><b>O adjetivo acompanha</b>, como no singular (lição 12): <span class="fi">vanhoissa kirkoissa</span> = nas igrejas antigas. E <span class="fi pala">-ista</span> também é “de, sobre” com fotos e livros, como na lição 6: <span class="fi">kuvia kirkoista</span> = fotos das igrejas.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o português diz “fomos <b>às</b> igrejas”, e o ouvido pede “para onde?”. Com <span class="fi">käydä</span>, o finlandês usa onde?: <span class="fi">kävimme kirkoissa</span>, não <span class="pala">kävimme kirkkoihin</span>. Com <span class="fi">mennä</span>, sim, para onde?: <span class="fi">menemme saunoihin</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: o plural</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Ouça: onde, de onde ou para onde?</h3>
    <p class="ohje">Aperte ▶ e ouça a palavra no plural. Ouça o fim: <span class="fi pala">-issa/-illa</span> (onde?), <span class="fi pala">-ista/-ilta</span> (de onde?), <span class="fi pala">-ihin/-ille</span> (para onde?).</p>
    <div class="valinta" data-kuuntele="kirkoissa" data-oikea="nas igrejas">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">nas igrejas</button><button type="button">das igrejas</button><button type="button">para as igrejas</button></div>
    </div>
    <div class="valinta" data-kuuntele="museoista" data-oikea="dos museus">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">nos museus</button><button type="button">para os museus</button><button type="button">dos museus</button></div>
    </div>
    <div class="valinta" data-kuuntele="kauppoihin" data-oikea="para as lojas">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">para as lojas</button><button type="button">nas lojas</button><button type="button">das lojas</button></div>
    </div>
    <div class="valinta" data-kuuntele="toreilla" data-oikea="nas feiras">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">das feiras</button><button type="button">nas feiras</button><button type="button">para as feiras</button></div>
    </div>
    <div class="valinta" data-kuuntele="järville" data-oikea="para os lagos">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">nos lagos</button><button type="button">dos lagos</button><button type="button">para os lagos</button></div>
    </div>
    <div class="valinta" data-kuuntele="kaupungeista" data-oikea="das cidades">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">das cidades</button><button type="button">nas cidades</button><button type="button">para as cidades</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Você entendeu o cartão e a despedida?</h3>
    <p class="ohje">Volte ao cartão-postal e ao diálogo B se precisar.</p>
    <div class="valinta" data-oikea="Ouro Pretossa.">
      <p class="kysymys"><span class="fi">Missä Maia ja Jay kävivät lauantaina?</span></p>
      <div class="vaihtoehdot"><button type="button">Inhotimissa.</button><button type="button">Ouro Pretossa.</button><button type="button">Lissabonissa.</button></div>
    </div>
    <div class="valinta" data-oikea="Kirkoista ja kivistä.">
      <p class="kysymys"><span class="fi">Mistä Jay otti sata kuvaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kirkoista ja kivistä.</button><button type="button">Museoista ja kaupungeista.</button><button type="button">Saunoista ja järvistä.</button></div>
    </div>
    <div class="valinta" data-oikea="Saunoihin ja järville.">
      <p class="kysymys"><span class="fi">Mihin kaikki menevät kesällä?</span></p>
      <div class="vaihtoehdot"><button type="button">Kirkkoihin ja museoihin.</button><button type="button">Kauppoihin ja toreille.</button><button type="button">Saunoihin ja järville.</button></div>
    </div>
    <div class="valinta" data-oikea="Kaksi.">
      <p class="kysymys"><span class="fi">Kuinka monta viikkoa Maia ja Jay ovat olleet Brasiliassa?</span></p>
      <div class="vaihtoehdot"><button type="button">Yksi.</button><button type="button">Kaksi.</button><button type="button">Kolme.</button></div>
    </div>
    <div class="valinta" data-oikea="Vähän portugalia.">
      <p class="kysymys"><span class="fi">Mitä Jay on oppinut?</span></p>
      <div class="vaihtoehdot"><button type="button">Vähän suomea.</button><button type="button">Vähän espanjaa.</button><button type="button">Vähän portugalia.</button></div>
    </div>
    <div class="valinta" data-oikea="Kiitos.">
      <p class="kysymys"><span class="fi">Mikä sana Andersonin kirjeessä on?</span></p>
      <div class="vaihtoehdot"><button type="button">Moi.</button><button type="button">Kiitos.</button><button type="button">Näkemiin.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Complete com o plural</h3>
    <p class="ohje">Escreva a palavra no plural, no caso de lugar certo. A palavra e a pergunta estão entre parênteses.</p>
    <div class="aukot" lang="fi-FI">
      <p>Turistit <span data-l="olla#2">ovat</span> <span class="aukko" data-oikea="museoissa"></span>. <span data-ei-kuplaa>(museo · onde?)</span></p>
      <p>Jay otti kuvia <span class="aukko" data-oikea="kivistä"></span>. <span data-ei-kuplaa>(kivi · de quê?)</span></p>
      <p>Maia menee <span class="aukko" data-oikea="kauppoihin"></span>. <span data-ei-kuplaa>(kauppa · para onde?)</span></p>
      <p>Lapset leikkivät <span class="aukko" data-oikea="toreilla"></span>. <span data-ei-kuplaa>(tori · onde?)</span></p>
      <p>Kävimme vanhoissa <span class="aukko" data-oikea="kirkoissa"></span>. <span data-ei-kuplaa>(kirkko · onde?)</span></p>
      <p>Uuno ja Eenok tulevat <span class="aukko" data-oikea="museoista"></span>. <span data-ei-kuplaa>(museo · de onde?)</span></p>
      <p>Brasilian <span class="aukko" data-oikea="kaupungeissa"></span> on paljon kirkkoja. <span data-ei-kuplaa>(kaupunki · onde?)</span></p>
      <p>Kesällä menemme <span class="aukko" data-oikea="saunoihin"></span>. <span data-ei-kuplaa>(sauna · para onde?)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda às perguntas</h3>
    <p class="ohje">Responda sobre você, em voz alta, antes de abrir o modelo. Use o perfeito; para um momento certo, o passado.</p>
    <details class="vastaus"><summary lang="fi-FI">Oletko koskaan käynyt Brasiliassa?</summary><p class="s" data-pt="Não fui, mas eu gostaria de ir!">En ole käynyt, mutta haluaisin!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Oletko koskaan ollut saunassa?</summary><p class="s" data-pt="Já estive. Muitas vezes!">Olen ollut. Monta kertaa!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Missä kaupungeissa olet käynyt?</summary><p class="s" data-pt="Já fui a Helsinque e a Belo Horizonte.">Olen käynyt Helsingissä ja Belo Horizontessa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä olet oppinut kurssilla?</summary><p class="s" data-pt="Eu aprendi um pouco de finlandês.">Olen oppinut vähän suomea.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä teit eilen?</summary><p class="s" data-pt="Ontem eu li um livro.">Eilen luin kirjaa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Aiotko sinä käydä Brasiliassa?</summary><p class="s" data-pt="Pretendo. Pode ser uma viagem cara, mas eu quero.">Aion. Se saattaa olla kallis matka, mutta haluan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mistä on kyse?</summary><p class="s" data-pt="A questão são as pedras. O Jay deve ter umas cem pedras.">Kyse on kivistä. Jayllä on kai sata kiveä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kuinka kauan lento kestää?</summary><p class="s" data-pt="Dura umas doze horas, acho.">Se kestää kai kaksitoista tuntia.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä mieltä olette Ouro Pretosta?</summary><p class="s" data-pt="É linda. Em cidades como Ouro Preto há muitas igrejas.">Se on kaunis. Kaupungeissa, kuten Ouro Pretossa, on paljon kirkkoja.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla tietoa lennosta?</summary><p class="s" data-pt="Tenho. Continuamos a viagem para Lisboa às quatro.">On. Jatkamme matkaa Lissaboniin kello neljä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kävittekö Inhotimissa?</summary><p class="s" data-pt="Não fomos. Não fomos a Inhotim, e sim a Ouro Preto. São umas duas horas de carro.">Emme käyneet. Emme menneet Inhotimiin, vaan Ouro Pretoon. Sinne on noin kaksi tuntia autolla.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä kuuluu?</summary><p class="s" data-pt="Bem, tudo bem, obrigado! Parece que é o último dia no Brasil. Que sensação!">No, hyvää kiitos! Taitaa olla viimeinen päivä Brasiliassa. Mikä tunne!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko Malu Maian kaveri?</summary><p class="s" data-pt="É. Que bom!">On. Hyvä juttu!</p></details>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Ouro Preto: ouro, barroco e pedra-sabão</h3>
  <figure class="kuva" data-kuva="ouro-preto"></figure>
  <p>Ouro Preto nasceu da corrida do ouro, no começo do século XVIII, com o nome de Vila Rica. O ouro foi tirado das minas e dos rios sobretudo por africanos escravizados; algumas das igrejas mais bonitas da cidade, como a de Santa Efigênia, foram construídas por irmandades de negros. Ouro Preto foi a capital de Minas Gerais até 1897, quando a capital mudou para a recém-construída Belo Horizonte. Em 1980, foi o primeiro lugar do Brasil a entrar na lista do Patrimônio Mundial da UNESCO.</p>
  <p>O barroco mineiro tem um nome: Antônio Francisco Lisboa, o Aleijadinho, que entalhou em madeira e em pedra-sabão portadas, púlpitos e santos. A pedra-sabão é uma rocha rica em talco, o mineral mais macio da escala de dureza dos geólogos. Ela se entalha com faca e guarda o calor por horas.</p>
  <p>Para dois geólogos, é a pedra que une os dois países. Na Finlândia ela se chama <span class="fi">vuolukivi</span>, de <span class="fi pala">vuolla</span>, entalhar com faca, e há grandes jazidas no leste, na Carélia do Norte. Lá ela vira lareiras que aquecem a casa a noite inteira (<span class="fi">vuolukivitakka</span>) e pedras de sauna. Em Minas, vira panelas, esculturas e portadas de igreja.</p>
  <ul class="esim">
    <li class="s" data-pt="Em Ouro Preto há muitas igrejas antigas.">Ouro Pretossa on paljon vanhoja kirkkoja.</li>
    <li class="s" data-pt="A pedra-sabão é uma pedra macia.">Vuolukivi on pehmeä kivi.</li>
    <li class="s" data-pt="Na Finlândia e no Brasil há pedra-sabão.">Suomessa ja Brasiliassa on vuolukiveä.</li>
  </ul>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Ootsä käyny…? O perfeito da rua</h3>
  <p>Na fala, <span class="fi">oletko sinä</span> encurta para <span class="fi" data-rekisteri="puhe">ootsä</span>, <span class="fi">olen</span> para <span class="fi" data-rekisteri="puhe">oon</span>, e o particípio perde o <span class="fi pala">-t</span> final, como <span class="fi" data-rekisteri="puhe">syöny</span> na lição 15: <span class="fi">käynyt</span> vira <span class="fi" data-rekisteri="puhe">käyny</span>, <span class="fi">ollut</span> vira <span class="fi" data-rekisteri="puhe">ollu</span>. Você não precisa falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">oletko sinä käynyt</span></td><td><span class="fi" data-rekisteri="puhe">ootsä käyny</span></td><td>você já foi</td></tr>
    <tr><td><span class="fi">minä olen ollut</span></td><td><span class="fi" data-rekisteri="puhe">mä oon ollu</span></td><td>eu já estive</td></tr>
    <tr><td><span class="fi">en ole käynyt</span></td><td><span class="fi" data-rekisteri="puhe">en oo käyny</span></td><td>eu nunca fui</td></tr>
  </table>
  <p>No domingo de manhã, o Eenok manda uma mensagem de voz para o Jay, do jeito da rua. O Jay responde do mesmo jeito:</p>
  <p class="s" data-h="eenok3" data-kirja="Oletko sinä käynyt Inhotimissa?" data-pt="Você já foi a Inhotim?">Ootsä käyny Inhotimissa?</p>
  <p class="s" data-h="jay" data-kirja="En ole käynyt. Minä olen ollut vain kirkoissa." data-pt="Não fui. Eu só estive em igrejas.">En oo käyny. Mä oon ollu vaa kirkoissa.</p>
  <p class="s" data-h="maia" data-kirja="Kyllä, se oli aivan mahtava retki." data-pt="É, foi um passeio incrível mesmo.">Joo, se oli ihan mahtava retki.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t19">
    <h3>Lição de casa</h3>
    <p>Escreva, como a Maia, um cartão-postal de uma viagem sua, de verdade ou inventada: seis frases. Três no perfeito (<span class="fi">Olen käynyt…, Olemme nähneet…, En ole vielä…</span>), uma no passado com um “quando” (<span class="fi">Eilen…</span>) e duas com os casos de lugar no plural (<span class="fi">kirkoissa, museoista, järville</span>…). Termine com <span class="fi">Terveisin</span> e o seu nome. Leia em voz alta, com o <span class="fi pala">ll</span> de <span class="fi">ollut</span> bem longo.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia, em Belo Horizonte)</summary>
      <p class="s" data-pt="Estou em Belo Horizonte há duas semanas.">Olen ollut Belo Horizontessa kaksi viikkoa.</p>
      <p class="s" data-pt="Já fui muitas vezes ao Mercado Central.">Olen käynyt monta kertaa Mercado Centralissa.</p>
      <p class="s" data-pt="Ainda não fui a Inhotim.">En ole vielä käynyt Inhotimissa.</p>
      <p class="s" data-pt="Ontem nós fomos a Ouro Preto.">Eilen kävimme Ouro Pretossa.</p>
      <p class="s" data-pt="Visitamos igrejas e museus antigos.">Kävimme vanhoissa kirkoissa ja museoissa.</p>
      <p class="s" data-pt="O Jay tirou fotos das pedras.">Jay otti kuvia kivistä.</p>
      <p class="s" data-pt="Um abraço, Maia">Terveisin Maia</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t19">
    <li>Pergunto e respondo com o perfeito: Oletko käynyt…? – Olen. / En ole.</li>
    <li>Formo o perfeito em todas as pessoas: olen käynyt, olemme nähneet, en ole käynyt.</li>
    <li>Escolho entre perfeito e passado: olen ollut täällä kaksi viikkoa × eilen kävin.</li>
    <li>Uso os casos de lugar no plural: kirkoissa, museoista, saunoihin, toreilla.</li>
    <li>Pronuncio a consoante dupla do particípio, ollut, tullut, mennyt, e não digo olut.</li>
    <li>Reconheço na fala: ootsä käyny, mä oon ollu.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'perfekti19', otsikko: 'O perfeito: olen käynyt, oletko nähnyt', taso: 'essencial', hakuosa: 'h-perfekti', treeni: 't19-perfekti',
      html: `
<p><b>Forma:</b> <span class="fi">olla</span> no presente + particípio. O <span class="fi">olla</span> muda com a pessoa; o particípio só com o número: <span class="fi pala">-nut/-nyt</span> no singular, <span class="fi pala">-neet</span> no plural. <b>Uso:</b> o que já aconteceu até agora, sem dizer quando.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">minä olen käynyt</span></td><td>eu já fui</td></tr>
  <tr><td><span class="fi">sinä olet nähnyt</span></td><td>você já viu</td></tr>
  <tr><td><span class="fi">hän on syönyt</span></td><td>ele, ela já comeu</td></tr>
  <tr><td><span class="fi">me olemme käyneet</span></td><td>nós já fomos</td></tr>
  <tr><td><span class="fi">te olette nähneet</span></td><td>vocês já viram</td></tr>
  <tr><td><span class="fi">he ovat syöneet</span></td><td>eles, elas já comeram</td></tr>
</table>
<p><b>Pergunta e resposta curta:</b> <span class="fi">Oletko käynyt Ouro Pretossa? – Olen. / En ole.</span></p>`
    },
    {
      id: 'perfekti-kielto19', otsikko: 'Ainda não, nunca: en ole käynyt', taso: 'essencial', hakuosa: 'h-perfekti', treeni: 't19-perfekti-kielto',
      html: `
<p><b>Forma:</b> verbo de negação (<span class="fi">en, et, ei, emme, ette, eivät</span>) + <span class="fi">ole</span> + particípio: <span class="fi">en ole käynyt, emme ole nähneet</span>.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">En ole vielä käynyt Inhotimissa.</span></td><td>Ainda não fui a Inhotim.</td></tr>
  <tr><td><span class="fi">Hiisi ei ole koskaan käynyt Brasiliassa.</span></td><td>O Hiisi nunca foi ao Brasil.</td></tr>
  <tr><td><span class="fi">Emme ole syöneet.</span></td><td>Nós ainda não comemos.</td></tr>
</table>
<p>Três negações diferentes: <span class="fi">en käy</span> (não visito, não costumo ir), <span class="fi">en käynyt</span> (não fui, num momento certo), <span class="fi">en ole käynyt</span> (não fui até agora).</p>`
    },
    {
      id: 'perfekti-imperfekti19', otsikko: 'Já fui × fui ontem: perfeito ou passado?', taso: 'atenção', hakuosa: 'h-aikamuodot', treeni: 't19-kuuntele',
      html: `
<p>O português usa “fui” para os dois; o finlandês separa. <b>Perfeito:</b> até agora, sem quando (<span class="fi">jo, koskaan, vielä</span>, “há duas semanas”). <b>Passado:</b> um momento que já terminou (<span class="fi">eilen, viime vuonna, kello kuusi</span>).</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Olen käynyt Ouro Pretossa.</span></td><td>Já fui a Ouro Preto.</td></tr>
  <tr><td><span class="fi">Kävin Ouro Pretossa eilen.</span></td><td>Fui a Ouro Preto ontem.</td></tr>
  <tr><td><span class="fi">Olemme olleet täällä kaksi viikkoa.</span></td><td>Estamos aqui há duas semanas.</td></tr>
</table>`
    },
    {
      id: 'monikon-sijat19', otsikko: 'No plural: kirkoissa, museoista, saunoihin', taso: 'essencial', hakuosa: 'h-monikko', treeni: 't19-monikon-sijat',
      html: `
<p><b>Forma:</b> o radical + <span class="fi pala">-i-</span> + a terminação do singular (o ilativo muda: <span class="fi">kirkkoihin</span>). A consoante fraca em <span class="fi pala">-issa, -ista, -illa…</span>, forte em <span class="fi pala">-ihin</span>.</p>
<table class="taivutus">
  <tr><th>onde?</th><th>de onde?</th><th>para onde?</th></tr>
  <tr><td><span class="fi">kirkoissa</span><span class="kaannos" lang="pt-BR">nas igrejas</span></td><td><span class="fi">kirkoista</span></td><td><span class="fi">kirkkoihin</span></td></tr>
  <tr><td><span class="fi">kaupungeissa</span><span class="kaannos" lang="pt-BR">nas cidades</span></td><td><span class="fi">kaupungeista</span></td><td><span class="fi">kaupunkeihin</span></td></tr>
  <tr><td><span class="fi">toreilla</span><span class="kaannos" lang="pt-BR">nas feiras</span></td><td><span class="fi">toreilta</span></td><td><span class="fi">toreille</span></td></tr>
</table>
<p>O adjetivo acompanha: <span class="fi">vanhoissa kirkoissa</span>. Com <span class="fi">käydä</span>, onde?: <span class="fi">kävimme kirkoissa</span>.</p>`
    },
    {
      id: 'aantaminen19', otsikko: 'Pronúncia: ollut, tullut, mennyt (e olut)', taso: 'essencial', hakuosa: 'h-pituus', treeni: 't19-kuuntele',
      html: `
<p>Tipo 3: o particípio tem consoante <b>dupla</b>: <span class="fi">ollut, tullut, mennyt</span>. Segure a consoante: <span class="pala">OL-lut</span>. Com um <span class="pala">l</span> só, <span class="fi">olut</span> é cerveja.</p>
<ul class="esim">
  <li class="s" data-pt="eu já estive">olen ollut</li>
  <li class="s" data-pt="cerveja">olut</li>
  <li class="s" data-pt="ele já veio">hän on tullut</li>
  <li class="s" data-pt="eles já foram">he ovat menneet</li>
</ul>`
    },
    {
      id: 'sudenkuopat19', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>“Fui” tem dois sentidos:</b> <span class="fi">olen käynyt</span> (já fui, até agora) × <span class="fi">kävin eilen</span> (fui ontem).</li>
  <li><b>“Estou aqui há duas semanas” é perfeito:</b> <span class="fi">olen ollut täällä kaksi viikkoa</span>.</li>
  <li><b>O particípio só tem número:</b> <span class="fi">minä olen käynyt</span>, <span class="fi">me olemme käyneet</span>.</li>
  <li><b>Com käydä, onde?:</b> <span class="fi">kävimme kirkoissa</span> = fomos às igrejas.</li>
  <li><b>ollut × olut:</b> dois <span class="pala">l</span> no particípio; um só é cerveja.</li>
</ul>`
    }
  ]
});
