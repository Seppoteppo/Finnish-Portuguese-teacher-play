/* Tottakai, lição 8: Purjon asunto Kalliossa ja Clas Ohlson (Passon jakso 8 Maian näkökulmasta). Oma materiaali, ei
   kirjan tekstiä. Kaksi osaa omina sivuinaan (TYONKULKU 11–17; docs/OPPITUNNIT_6_20.md §5 Oppitunti 8):
   - osa A (#t08): asuntonäyttö (dialogi A 16 repliikkiä, välittäjä Leyla), Frases prontas, sanasto, pohjapiirros
     suomen kolmijaolla (tämä = puhujan luona, se = kuulijan luona, tuo = osoitettu; komponentit.js pohjapiirros,
     data-kolmijako), ääntäminen (tavun lopun l ei ole u), tehtävät 1–3 (asuntoilmoitukset Purjon punakynällä).
   - osa B (#t08-b): Clas Ohlson (dialogi B 16 repliikkiä, Maian ”Claees Oollshen”), kielioppi kolmena lohkona,
     joista jokaisen perään sen tehtävä (1: tämä/tuo/se ja sijat → tehtävä 4; 2: sanatyypit ja vartalot, nominien
     astevaihtelu → tehtävä 5; 3: luvut 100–1000 → peli Claees Oollshen (pelit.js: tämä/tuo/se ja sadat) ja tehtävä 6),
     tehtävät 7–9, värityskirja (komponentit.js varityskirja, AV-037), kulttuuri, Na rua, kotitehtävä, itsearvio.
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat luulla + että (fraasina), näyttää, oma, jokin (jotain), pari, ne,
   toinen, sellainen, noin; dialogit 16 + 16; sanasto 52 → 40; sivun sanalistat 28 → 12 sanaa; kielioppi katkaistu.
   Kaikki puhuvat kirjakieltä; puhekieli (tää, toi, tääl, tuol) vain Na rua -nurkassa. Oppitunnit 6 (sisäsijat) ja 7
   (ulkosijat, verbityypit 4–5) oletetaan opituiksi. Ei omistusliitteitä (lição 17). Purjon rallienglanti
   <span class="pala" lang="en">: ei kuplaa. Maian virhe ”Claees Oollshen” merkitty data-hairio ja .pala.
   Sivuhahmot: välittäjä Leyla (nainen 5, kasvot valittaja) ja Clas Ohlsonin myyjä (mies 7, kasvot ohlsonmyyja). */
Kurssi.lisaa({
  id: 't08',
  lyhyt: '8',
  jakso: 'Lição 8',
  otsikko: 'O apartamento da Purjo: tämä, tuo, se; como o fim da palavra muda',
  lahde: 'Tema: apartamento, cômodos, aluguel, loja de casa e cores · Gramática: tämä, tuo, se e os casos (tässä, tästä, tähän), tipos de palavra e radicais (nainen → naisen, vesi → veden, huone → huoneen, puhelin → puhelimen, rikas → rikkaan), gradação nos substantivos, números 100–1000 · Pronúncia: o l no fim da sílaba não vira u',
  aiheet: ['koti', 'paikka', 'raha', 'numerot'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga e pintora; ajuda a Purjo a escolher o apartamento' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo, filho da Purjo; acha tudo caro em Kallio' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; vai se mudar para Helsinque e corrige os anúncios com caneta vermelha' },
    valittaja: { nimi: 'Leyla', tyyppi: 'nainen', vaihto: 5, kuvaus: 'corretora de imóveis em Kallio; veio de Istambul há quinze anos' },
    ohlsonmyyja: { nimi: 'Vendedor', tyyppi: 'mies', vaihto: 7, kuvaus: 'vendedor da Clas Ohlson; veio de Hanói e fala finlandês com calma' }
  },

  sanasto: [
    'asunto', 'olohuone', 'makuuhuone', 'keittiö', 'kylpyhuone', 'eteinen', 'parveke', 'kellari',
    'ikkuna', 'seinä', 'lattia', 'sänky', 'sohva', 'lamppu', 'verho', 'oma',
    'vuokra', 'neliö', 'kuukausi', 'muuttaa', 'maali', 'pensseli', 'possu', 'pari',
    'valoisa', 'onnellinen', 'vaaleanpunainen', 'luulla', 'näyttää',
    'tämä', 'tuo', 'se', 'nämä', 'nuo', 'ne', 'jokin', 'sellainen', 'noin',
    'tuhat', 'kerrostalo'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Um apartamento em Kallio',
      html: `
<ul class="tavoitteet">
  <li>Parte A: você mostra um apartamento: <span class="fi">Tämä on olohuone. Tuo on makuuhuone.</span> <span class="fi">Onko tässä talossa sauna?</span></li>
  <li>Você entende o aluguel em centenas: <span class="fi">yhdeksänsataa euroa kuukaudessa</span>.</li>
  <li>Você diz o <span class="fi pala">l</span> no fim da sílaba como <span class="fi pala">l</span>: <span class="fi">Helsinki</span>, <span class="fi">Kallio</span>, <span class="fi">valkoinen</span>.</li>
  <li>Parte B: as compras na Clas Ohlson, <span class="fi">tämä, tuo, se</span> nos casos, como o fim da palavra muda e as cores.</li>
</ul>
<p data-paikka="helsingin-kaupunginosat">Novembro, sábado de manhã, em Kallio. A Purjo mora fora da cidade e decidiu: vai se mudar para Helsinque, perto dos filhos. Hoje ela vê um apartamento com a corretora, a Leyla. A Maia e o Jay vão junto. A Purjo leva uma caneta vermelha, como sempre.</p>

<section class="osio" data-paikka="helsingin-kaupunginosat">
  <h2>Diálogo A: Asuntonäyttö</h2>
  <p class="ohje">Ouça primeiro sem tradução. Repare em como a Leyla aponta: <span class="fi">tämä</span> (este, aqui), <span class="fi">tuo</span> (aquele, ali) e <span class="fi">se</span> (esse, de que já falamos). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t08-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="Sábado, Kallio. A Purjo vai se mudar para Helsinque, e hoje ela vai ver um apartamento.">Lauantai, Kallio. Purjo muuttaa Helsinkiin, ja tänään hän katsoo asuntoa.</p>
    <p class="s" data-h="valittaja" data-pt="Bem-vindos! Eu sou a Leyla. Esta é a sala.">Tervetuloa! Minä olen Leyla. Tämä on olohuone.</p>
    <p class="s" data-h="purjo" data-pt="A sala é grande e clara. E aquele ali?">Olohuone on iso ja valoisa. Entä tuo?</p>
    <p class="s" data-h="valittaja" data-pt="Aquele é o quarto. Nele tem uma janela grande.">Tuo on makuuhuone. Siinä on iso ikkuna.</p>
    <p class="s" data-h="maia" data-pt="E a cozinha? Onde ela fica?">Entä keittiö? Missä se <span data-l="olla#2">on</span>?</p>
    <p class="s" data-h="valittaja" data-pt="A cozinha é ali. Ela é pequena, mas nova.">Keittiö <span data-l="olla#2">on</span> tuossa. Se on pieni, mutta uusi.</p>
    <p class="s" data-h="purjo" data-pt="(em “inglês de rali”:) Maia, você gostou?"><span class="pala" lang="en">Maia, tuu juu laik it?</span></p>
    <p class="s" data-h="maia" data-pt="Purjo, eu falo finlandês! Sim, eu gosto deste apartamento. Acho que ele é bom.">Purjo, minä puhun suomea! Kyllä, minä pidän tästä asunnosta. Luulen, että se on hyvä.</p>
    <p class="s" data-h="jay" data-pt="Tem sauna neste prédio?">Onko tässä talossa sauna?</p>
    <p class="s" data-h="valittaja" data-pt="Tem. A sauna fica no porão.">On. Sauna <span data-l="olla#2">on</span> kellarissa.</p>
    <p class="s" data-h="purjo" data-pt="E o apartamento tem sauna própria?">Entä onko asunnossa oma sauna?</p>
    <p class="s" data-h="valittaja" data-pt="Não tem. Mas a sauna do prédio é grande.">Ei ole. Mutta talon sauna on iso.</p>
    <p class="s" data-h="purjo" data-pt="Parece bom. Quanto é o aluguel?">Näyttää hyvältä. Paljonko vuokra on?</p>
    <p class="s" data-h="valittaja" data-pt="Novecentos euros por mês.">Yhdeksänsataa euroa kuukaudessa.</p>
    <p class="s" data-h="jay" data-pt="Novecentos? Mãe, isto aqui é Kallio. Kallio é caro!">Yhdeksänsataa? Äiti, tämä on Kallio. Kallio on kallis!</p>
    <p class="s" data-h="purjo" data-pt="Está bem. Eu fico com este!">Hyvä on. Minä otan tämän!</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática delas vem mais tarde:</p>
    <ul>
      <li><span class="fi">hän katsoo asuntoa</span> = ela vai ver um apartamento · o objeto no partitivo: lição 12</li>
      <li><span class="fi">Minä pidän tästä asunnosta.</span> = eu gosto deste apartamento · <span class="fi">pitää</span> (gostar) pede <span class="fi pala">-sta/-stä</span>: <span class="fi">pidän kahvista</span> = gosto de café</li>
      <li><span class="fi">Yhdeksänsataa euroa kuukaudessa.</span> = novecentos euros por mês · as centenas: parte B</li>
      <li><span class="fi">Hyvä on.</span> = está bem, combinado</li>
      <li><span class="fi">Luulen, että se on hyvä.</span> = acho que ele é bom · <span class="fi">luulla</span> (achar, sem certeza) + <span class="fi">että</span> (que): a frase com <span class="fi">että</span>, lição 11</li>
      <li><span class="fi">Näyttää hyvältä.</span> = parece bom · <span class="fi">näyttää</span> (parecer) + <span class="fi pala">-lta</span> (lição 7)</li>
      <li><span class="fi">oma sauna</span> = sauna própria · <span class="fi">oma</span> = próprio, só seu</li>
      <li><span class="fi">Minä otan tämän!</span> = eu fico com este! · <span class="fi">tämän</span> como objeto: lição 12</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="helsinginkatu-linnanmaki">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="O apartamento" data-sanat="asunto,olohuone,makuuhuone,keittiö,kylpyhuone,eteinen,parveke,kellari,ikkuna,sohva,vuokra,neliö"></div>
  <p>As outras palavras da lição estão no <a href="#t08-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio" data-paikka="helsinginkatu-linnanmaki">
  <h2>A planta: tämä, tuo, se</h2>
  <p>Na planta do apartamento, a Maia fala com a Purjo. A Maia está na sala; a Purjo, na cozinha. Toque num cômodo: a Maia diz o que ele é, e a palavra muda conforme o lugar. Depois mude a Maia ou a Purjo de cômodo e toque de novo.</p>
  <div class="pohjapiirros ph-kolmi" data-kolmijako data-h="maia" data-mina="olohuone" data-kuulija="purjo" data-sina="keittio">
    <span data-huone="makuuhuone" data-nimi="makuuhuone" data-pt="quarto" data-suku="m" data-esine="sänky" data-esine-pt="uma cama" data-alue="1 / 1 / 2 / 3"></span>
    <span data-huone="kylpyhuone" data-nimi="kylpyhuone" data-pt="banheiro" data-suku="m" data-alue="1 / 3 / 2 / 4"></span>
    <span data-huone="eteinen" data-nimi="eteinen" data-pt="hall de entrada" data-suku="m" data-esine="ovi" data-esine-pt="a porta" data-alue="1 / 4 / 2 / 5"></span>
    <span data-huone="olohuone" data-nimi="olohuone" data-pt="sala" data-suku="f" data-esine="sohva" data-esine-pt="um sofá" data-alue="2 / 1 / 4 / 3"></span>
    <span data-huone="keittio" data-nimi="keittiö" data-pt="cozinha" data-suku="f" data-esine="pöytä" data-esine-pt="uma mesa" data-alue="2 / 3 / 3 / 5"></span>
    <span data-huone="parveke" data-nimi="parveke" data-pt="varanda" data-suku="f" data-esine="kukka" data-esine-pt="uma flor" data-alue="3 / 3 / 4 / 5"></span>
  </div>
  <div class="saanto">
    <h3>Três jeitos de apontar</h3>
    <p><span class="fi">tämä</span> = este, aqui comigo (perto de quem fala). <span class="fi">se</span> = esse, aí com você (perto de quem ouve), ou a coisa de que já falamos. <span class="fi">tuo</span> = aquele, ali, longe dos dois: quem fala aponta com o dedo. É o “este, esse, aquele” do português de livro, que no Brasil quase ninguém separa. Em finlandês, a diferença conta.</p>
  </div>
</section>

<section class="osio" data-paikka="helsinginkatu-silta">
  <h2>Pronúncia: o l no fim da sílaba é l</h2>
  <p>No Brasil, o <span class="fi pala">l</span> no fim da sílaba vira <span class="fi pala">u</span>: Brasil = “Brasiu”, sol = “sou”. Em finlandês, o <span class="fi pala">l</span> é <b>sempre</b> <span class="fi pala">l</span>, com a ponta da língua atrás dos dentes de cima: <span class="fi pala">Hel-sin-ki</span>, nunca “<span class="pala">Heusinki</span>”. As cores da parte B estão cheias desse <span class="fi pala">l</span>: <span class="fi">valkoinen</span>, <span class="fi">keltainen</span>. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="Helsinque · Hel-sin-ki">Helsinki</li>
    <li class="s" data-pt="Kallio · Kal-li-o">Kallio</li>
    <li class="s" data-pt="frio · kyl-mä">kylmä</li>
    <li class="s" data-pt="branco · val-koi-nen">valkoinen</li>
    <li class="s" data-pt="amarelo · kel-tai-nen">keltainen</li>
    <li class="s" data-pt="relógio · kel-lo">kello</li>
  </ul>
  <p><b>Truque:</b> diga “la-la-la” e pare com a língua encostada: <span class="pala">Hel-</span>, <span class="pala">kyl-mä</span>. O <span class="fi pala">ll</span> duplo é ainda mais longo: <span class="pala">Kal-li-o</span>.</p>
  <div class="huomio">
    <p><b>Na parte B, a Maia escorrega:</b> a loja sueca <span class="fi">Clas Ohlson</span> vira “<span class="pala">Claees Oollshen</span>”: vogais esticadas e um “sh” que não existe. O certo é <span class="pala">Klaas Ool-son</span>, com um <span class="fi pala">l</span> de verdade.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinginkatu-silta">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ligue o cômodo à tradução</h3>
    <ul class="yhdista">
      <li data-pari="sala">olohuone</li>
      <li data-pari="quarto">makuuhuone</li>
      <li data-pari="cozinha">keittiö</li>
      <li data-pari="banheiro">kylpyhuone</li>
      <li data-pari="hall de entrada">eteinen</li>
      <li data-pari="varanda">parveke</li>
      <li data-pari="porão">kellari</li>
      <li data-pari="janela">ikkuna</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>2. Na planta: tämä, tuo ou se?</h3>
    <p class="ohje">Como na planta acima: a Maia está na sala (<span class="fi">olohuone</span>) e fala com a Purjo, que está na cozinha (<span class="fi">keittiö</span>). O que a Maia diz?</p>
    <div class="valinta" data-oikea="Tuo">
      <p class="kysymys">A Maia aponta para o quarto: <span class="fi">___ on makuuhuone.</span></p>
      <div class="vaihtoehdot"><button type="button">Tämä</button><button type="button">Tuo</button><button type="button">Se</button></div>
    </div>
    <div class="valinta" data-oikea="Tämä">
      <p class="kysymys">A Maia fala da sala, onde ela está: <span class="fi">___ on olohuone.</span></p>
      <div class="vaihtoehdot"><button type="button">Se</button><button type="button">Tuo</button><button type="button">Tämä</button></div>
    </div>
    <div class="valinta" data-oikea="Se">
      <p class="kysymys">A Maia fala da cozinha, onde a Purjo está: <span class="fi">___ on keittiö.</span></p>
      <div class="vaihtoehdot"><button type="button">Tämä</button><button type="button">Se</button><button type="button">Tuo</button></div>
    </div>
    <div class="valinta" data-oikea="Tuo">
      <p class="kysymys">A Maia aponta para a varanda: <span class="fi">___ on parveke.</span></p>
      <div class="vaihtoehdot"><button type="button">Tuo</button><button type="button">Tämä</button><button type="button">Se</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Os anúncios da Purjo</h3>
    <p class="ohje">Antes de ver o apartamento, a Purjo leu três anúncios e escreveu comentários com a caneta vermelha, no “inglês de rali” dela. Leia e responda. (<span class="pala">h</span> = <span class="fi">huone</span>, cômodo; <span class="pala">k</span> = <span class="fi">keittiö</span>.)</p>
    <div class="asuntoilmoitukset">
      <div class="asuntoilmoitus" lang="fi-FI">
        <p class="ai-otsikko">Kallio <span class="pala">· 2 h + k</span></p>
        <p>Kaksi huonetta, keittiö ja parveke. 52 neliötä.</p>
        <p>Kolmas kerros. Talossa on hissi ja sauna.</p>
        <p class="ai-vuokra">Vuokra 900 euroa kuukaudessa.</p>
        <p class="punakyna"><span class="pala" lang="en">Veri kuut! Sauna!</span></p>
      </div>
      <div class="asuntoilmoitus" lang="fi-FI">
        <p class="ai-otsikko">Sörnäinen <span class="pala">· 1 h + k</span></p>
        <p>Yksi huone ja keittiö. 34 neliötä.</p>
        <p>Viides kerros. Talossa ei ole hissiä.</p>
        <p class="ai-vuokra">Vuokra 700 euroa kuukaudessa.</p>
        <p class="punakyna"><span class="pala" lang="en">Nou hissi?! Ai äm not jang!</span></p>
      </div>
      <div class="asuntoilmoitus" lang="fi-FI">
        <p class="ai-otsikko">Kamppi <span class="pala">· 3 h + k</span></p>
        <p>Kolme huonetta, keittiö ja kaksi parveketta. 75 neliötä.</p>
        <p>Toinen kerros. Talossa on hissi.</p>
        <p class="ai-vuokra">Vuokra 1000 euroa kuukaudessa.</p>
        <p class="punakyna"><span class="pala" lang="en">Tuu ekspensiv!!</span></p>
      </div>
    </div>
    <div class="valinta" data-oikea="Yhdeksänsataa euroa.">
      <p class="kysymys"><span class="fi">Paljonko vuokra on Kalliossa?</span></p>
      <div class="vaihtoehdot"><button type="button">Seitsemänsataa euroa.</button><button type="button">Yhdeksänsataa euroa.</button><button type="button">Tuhat euroa.</button></div>
    </div>
    <div class="valinta" data-oikea="Sörnäisissä.">
      <p class="kysymys"><span class="fi">Missä talossa ei ole hissiä?</span></p>
      <div class="vaihtoehdot"><button type="button">Kalliossa.</button><button type="button">Kampissa.</button><button type="button">Sörnäisissä.</button></div>
    </div>
    <div class="valinta" data-oikea="Kalliossa.">
      <p class="kysymys"><span class="fi">Missä talossa on sauna?</span></p>
      <div class="vaihtoehdot"><button type="button">Kalliossa.</button><button type="button">Sörnäisissä.</button><button type="button">Kampissa.</button></div>
    </div>
    <div class="valinta" data-oikea="Kolme.">
      <p class="kysymys"><span class="fi">Kuinka monta huonetta Kampin asunnossa on?</span></p>
      <div class="vaihtoehdot"><button type="button">Kaksi.</button><button type="button">Yksi.</button><button type="button">Kolme.</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Claees Oollshen e as cores',
      html: `
<ul class="tavoitteet">
  <li>Você aponta e corrige numa loja: <span class="fi">Ei tätä, tuota!</span> <span class="fi">Tuossa hyllyssä on maalia.</span></li>
  <li>Você usa <span class="fi">tämä, tuo, se</span> no mesmo caso da palavra: <span class="fi">tässä talossa</span>, <span class="fi">tähän asuntoon</span>, <span class="fi">tuosta lampusta</span>.</li>
  <li>Você reconhece o tipo da palavra pelo genitivo: <span class="fi">nainen → naisen</span>, <span class="fi">vesi → veden</span>, <span class="fi">huone → huoneen</span>, <span class="fi">puhelin → puhelimen</span>, <span class="fi">rikas → rikkaan</span>.</li>
  <li>Você conta de 100 a 1000 e pinta com as cores em finlandês.</li>
</ul>

<p data-paikka="hameentie-marraskuu">Domingo. A Purjo assinou o contrato: o apartamento de Kallio é dela a partir de dezembro. Falta tudo: luminária, cortina, tinta. A Maia vai junto, porque precisa de tinta para a série nova que ela vai mostrar na feira Habituuri. O Jay ficou no sofá. Claro. Só falta a Maia dizer o nome da loja direito.</p>

<section class="osio" data-paikka="hameentie-marraskuu">
  <h2>Diálogo B: <span class="fi">Clas Ohlson</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Repare em quem está perto de quê: a Purjo e o vendedor estão juntos ao lado da primeira luminária; a amarela está longe, na prateleira. E procure o erro de pronúncia da Maia.</p>
  <div class="kpl" id="t08-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="maia" data-hairio="Claees Oollshen → Clas Ohlson" data-puhu="Purjo, katso! Tuolla on Klaees Oollshen!" data-pt="Purjo, olha! Ali está a “Claees Oollshen”! (errado: Clas Ohlson)">Purjo, katso! Tuolla on <span class="pala">Claees Oollshen</span>!</p>
    <p class="s" data-h="purjo" data-pt="(em “inglês de rali”:) Não, não! Clas Ohlson, querida."><span class="pala" lang="en">Nou, nou!</span> Clas Ohlson, kulta.</p>
    <p class="s" data-h="ohlsonmyyja" data-pt="Oi! Posso ajudar?">Hei! Voinko auttaa?</p>
    <p class="s" data-h="purjo" data-pt="Sim, obrigada. Estou procurando uma luminária.">Kyllä, kiitos. Etsin lamppua.</p>
    <p class="s" data-h="ohlsonmyyja" data-pt="Esta luminária é boa. Custa cem euros.">Tämä lamppu on hyvä. Se maksaa sata euroa.</p>
    <p class="s" data-h="purjo" data-pt="Cem euros? (em “inglês de rali”:) Caro demais!">Sata euroa? <span class="pala" lang="en">Tuu ekspensiv!</span></p>
    <p class="s" data-h="maia" data-pt="E aquela luminária amarela ali?">Entä tuo keltainen lamppu tuolla?</p>
    <p class="s" data-h="ohlsonmyyja" data-pt="Aquela custa cinquenta euros.">Tuo maksaa viisikymmentä euroa.</p>
    <p class="s" data-h="purjo" data-pt="Ótimo! Esta não, aquela!">Hyvä! Ei tätä, tuota!</p>
    <p class="s" data-h="maia" data-pt="E eu procuro tinta rosa.">Ja minä etsin vaaleanpunaista maalia.</p>
    <p class="s" data-h="ohlsonmyyja" data-pt="Naquela prateleira tem tinta.">Tuossa hyllyssä on maalia.</p>
    <p class="s" data-h="purjo" data-pt="Rosa? Por quê?">Vaaleanpunaista? Miksi?</p>
    <p class="s" data-h="maia" data-pt="Estou pintando um porquinho. O nome da série nova é “Feliz como um porquinho”.">Minä maalaan possua. Uuden sarjan nimi on Onnellinen kuin possu.</p>
    <p class="s" data-h="purjo" data-pt="(em “inglês de rali”:) Gostei! Eu quero um porquinho na parede!"><span class="pala" lang="en">Ai laik!</span> Minä haluan possun seinälle!</p>
    <p class="s" data-h="maia" data-pt="Eu ainda preciso de uma coisa: um par de pincéis.">Minä tarvitsen vielä jotain: pari pensseliä.</p>
    <p class="s" data-h="ohlsonmyyja" data-pt="Eles estão ali, na outra prateleira.">Ne ovat tuolla, toisessa hyllyssä.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Purjo, katso!</span> = Purjo, olha! · a ordem (imperativo): lição 9</li>
      <li><span class="fi">Voinko auttaa?</span> = posso ajudar? · <span class="fi">voida</span> (poder) + <span class="fi">auttaa</span> (ajudar)</li>
      <li><span class="fi">Etsin lamppua.</span> = procuro uma luminária · <span class="fi">etsiä</span> pede o partitivo, como em <span class="fi">Maia etsii suklaata</span> (lição 3)</li>
      <li><span class="fi">vaaleanpunaista maalia</span> = tinta rosa · o adjetivo vai no mesmo caso da palavra: lição 12</li>
      <li><span class="fi">Minä maalaan possua.</span> = estou pintando um porquinho · <span class="fi">maalata</span> é do tipo 4 (lição 7); o objeto no partitivo: lição 12</li>
      <li><span class="fi">Minä haluan possun seinälle!</span> = quero um porquinho na parede! · <span class="fi">possun</span> como objeto: lição 12</li>
      <li><span class="fi">Onnellinen kuin possu</span> = feliz como um porquinho · <span class="fi">kuin</span> = como, numa comparação</li>
      <li><span class="fi">Tarvitsen jotain.</span> = preciso de alguma coisa · <span class="fi">jotain</span>, o partitivo de <span class="fi">jokin</span> (algum, alguma coisa)</li>
      <li><span class="fi">pari pensseliä</span> = um par de pincéis, alguns pincéis · depois de <span class="fi">pari</span>, partitivo, como depois de um número</li>
      <li><span class="fi">Ne ovat toisessa hyllyssä.</span> = eles estão na outra prateleira · <span class="fi">ne</span> = eles, elas (coisas); <span class="fi">toinen</span> = outro, segundo</li>
    </ul>
  </div>
  <p>À noite, em Sörnäinen, a Maia pinta o primeiro porquinho da série. O Jay olha do sofá e diz só: <span class="fi">Taas?</span> (De novo?) A Maia nem responde. Ela já está pensando na parede da Purjo.</p>
</section>

<section class="osio" data-osa="gramatica" data-paikka="brahenkentta-syksy">
  <h2>Gramática 1 · <span class="fi">tämä, tuo, se</span>: este, esse, aquele</h2>

  <h3>1. Três jeitos de apontar</h3>
  <p>O finlandês aponta de três jeitos, como o português de livro. Quem fala decide pelo lugar da coisa:</p>
  <table class="taivutus">
    <tr><th>finlandês</th><th>onde está a coisa?</th><th>português</th></tr>
    <tr><td><span class="fi">tämä</span></td><td>perto de quem fala (de mim)</td><td>este, esta, isto</td></tr>
    <tr><td><span class="fi">se</span></td><td>perto de quem ouve (de você), ou já foi mencionada</td><td>esse, essa, isso</td></tr>
    <tr><td><span class="fi">tuo</span></td><td>longe dos dois: eu aponto</td><td>aquele, aquela, aquilo</td></tr>
  </table>
  <p>No plural: <span class="fi">nämä</span> (estes), <span class="fi">ne</span> (esses), <span class="fi">nuo</span> (aqueles). “Deste tipo” também tem três: <span class="fi">tällainen, tuollainen, sellainen</span> (<span class="fi">Sellainen lamppu on kallis.</span> = uma luminária desse tipo é cara). No diálogo, a Purjo e o vendedor estão ao lado da primeira luminária, então ela é <span class="fi">tämä</span> para os dois; a amarela, longe, é <span class="fi">tuo</span>: <span class="fi">Ei tätä, tuota!</span></p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> no Brasil, “esse” serve para quase tudo. Em finlandês, a escolha conta: o que está na sua mão é <span class="fi">tämä</span>; a mesma coisa, na mão da outra pessoa, é <span class="fi">se</span>. E na língua padrão, <span class="fi">se</span> é para coisas; para pessoas, <span class="fi">hän</span>.</p>
  </div>

  <h3>2. O pronome vai no mesmo caso da palavra</h3>
  <p>Em português, “neste prédio” = em + este. Em finlandês, não há preposição: o pronome e a palavra ganham a <b>mesma terminação</b>: <span class="fi">tässä talossa</span>, <span class="fi">tähän asuntoon</span>.</p>
  <table class="taivutus">
    <tr><th>caso</th><th><span class="fi">tämä</span></th><th><span class="fi">tuo</span></th><th><span class="fi">se</span></th></tr>
    <tr><td>forma básica</td><td><span class="fi">tämä</span></td><td><span class="fi">tuo</span></td><td><span class="fi">se</span></td></tr>
    <tr><td>partitivo</td><td><span class="fi">tätä</span></td><td><span class="fi">tuota</span></td><td><span class="fi">sitä</span></td></tr>
    <tr><td>de … (genitivo)</td><td><span class="fi">tämän</span></td><td><span class="fi">tuon</span></td><td><span class="fi">sen</span></td></tr>
    <tr><td>onde? (dentro)</td><td><span class="fi">tässä</span></td><td><span class="fi">tuossa</span></td><td><span class="fi">siinä</span></td></tr>
    <tr><td>de onde?</td><td><span class="fi">tästä</span></td><td><span class="fi">tuosta</span></td><td><span class="fi">siitä</span></td></tr>
    <tr><td>para onde?</td><td><span class="fi">tähän</span></td><td><span class="fi">tuohon</span></td><td><span class="fi">siihen</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-pt="Neste prédio tem sauna.">Tässä talossa on sauna.</li>
    <li class="s" data-pt="A Purjo vai se mudar para este apartamento.">Purjo muuttaa tähän asuntoon.</li>
    <li class="s" data-pt="Naquela prateleira tem tinta.">Tuossa hyllyssä on maalia.</li>
    <li class="s" data-pt="Eu gosto disso.">Minä pidän siitä.</li>
  </ul>
  <p>Sozinhos, <span class="fi">tässä, tuossa, siinä</span> = aqui, ali, aí, num ponto exato: <span class="fi">Tässä on sohva.</span> Para uma área maior: <span class="fi">täällä, tuolla, siellä</span>.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="brahenkentta-syksy">
  <h2>Exercício: o pronome no caso certo</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. O pronome no caso certo</h3>
    <p class="ohje">Escreva <span class="fi">tämä</span>, <span class="fi">tuo</span> ou <span class="fi">se</span> no mesmo caso da palavra ao lado. O pronome está entre parênteses.</p>
    <div class="aukot" lang="fi-FI">
      <p><span class="aukko" data-oikea="Tässä"></span> talossa on sauna. <span data-ei-kuplaa>(tämä)</span></p>
      <p>Purjo muuttaa <span class="aukko" data-oikea="tähän"></span> asuntoon. <span data-ei-kuplaa>(tämä)</span></p>
      <p><span class="aukko" data-oikea="Tuossa"></span> hyllyssä on maalia. <span data-ei-kuplaa>(tuo)</span></p>
      <p>Minä pidän <span class="aukko" data-oikea="tuosta"></span> lampusta. <span data-ei-kuplaa>(tuo)</span></p>
      <p>Ei <span class="aukko" data-oikea="tätä"></span>, tuota! <span data-ei-kuplaa>(tämä)</span></p>
      <p>Asunto on kallis, mutta Purjo pitää <span class="aukko" data-oikea="siitä"></span>. <span data-ei-kuplaa>(se)</span></p>
      <p><span class="aukko" data-oikea="Tämän"></span> asunnon vuokra on yhdeksänsataa euroa. <span data-ei-kuplaa>(tämä)</span></p>
      <p>Maia menee <span class="aukko" data-oikea="tuohon"></span> huoneeseen. <span data-ei-kuplaa>(tuo)</span></p>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="brahenkentta-syksy">
  <h2>Gramática 2 · Como o fim da palavra muda: tipos de palavra</h2>
  <p>Antes de uma terminação, muitas palavras mudam o fim. O <b>genitivo</b> mostra o radical: tire o <span class="fi pala">-n</span> e cole as outras terminações (<span class="fi pala">naise-</span> → <span class="fi">naisella, naiselle</span>; <span class="fi pala">vede-</span> → <span class="fi">vedessä</span>).</p>
  <table class="taivutus">
    <tr><th>palavra</th><th>genitivo</th><th>partitivo</th><th>para onde?</th></tr>
    <tr class="taulu-ryhma"><th colspan="4">-nen → -se-</th></tr>
    <tr><td><span class="fi">nainen</span><span class="kaannos" lang="pt-BR">mulher</span></td><td><span class="fi">naisen</span></td><td><span class="fi">naista</span></td><td><span class="fi">naiseen</span></td></tr>
    <tr class="taulu-ryhma"><th colspan="4">-si → -de-</th></tr>
    <tr><td><span class="fi">vesi</span><span class="kaannos" lang="pt-BR">água</span></td><td><span class="fi">veden</span></td><td><span class="fi">vettä</span></td><td><span class="fi">veteen</span></td></tr>
    <tr class="taulu-ryhma"><th colspan="4">-e → -ee-</th></tr>
    <tr><td><span class="fi">huone</span><span class="kaannos" lang="pt-BR">cômodo</span></td><td><span class="fi">huoneen</span></td><td><span class="fi">huonetta</span></td><td><span class="fi">huoneeseen</span></td></tr>
    <tr class="taulu-ryhma"><th colspan="4">-in → -ime-</th></tr>
    <tr><td><span class="fi">puhelin</span><span class="kaannos" lang="pt-BR">telefone</span></td><td><span class="fi">puhelimen</span></td><td><span class="fi">puhelinta</span></td><td><span class="fi">puhelimeen</span></td></tr>
    <tr class="taulu-ryhma"><th colspan="4">-as → -aa-</th></tr>
    <tr><td><span class="fi">rikas</span><span class="kaannos" lang="pt-BR">rico</span></td><td><span class="fi">rikkaan</span></td><td><span class="fi">rikasta</span></td><td><span class="fi">rikkaaseen</span></td></tr>
  </table>
  <div class="huomio">
    <p><b>Gradação nos substantivos:</b> como nos verbos (lição 2), <span class="fi pala">kk, pp, tt, nt, nk</span> enfraquecem quando a sílaba se fecha: <span class="fi">lamppu → lampun</span>, <span class="fi">matto → maton</span>, <span class="fi">asunto → asunnon</span>, <span class="fi">sänky → sängyn</span>. Nas palavras em <span class="fi pala">-e</span> e <span class="fi pala">-as</span> é ao contrário: a forma básica é a fraca, e as outras são fortes: <span class="fi">parveke → parvekkeen</span>, <span class="fi">rikas → rikkaan</span>. A bolha de cada palavra mostra o genitivo; aprenda os dois juntos.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="brahenkentta-syksy">
  <h2>Exercício: tipos de palavra</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Tipos de palavra: qual é o genitivo?</h3>
    <p class="ohje">O genitivo (de quem? de quê?) mostra como o fim da palavra muda. Escolha.</p>
    <div class="valinta" data-oikea="naisen">
      <p class="kysymys" data-ei-kuplaa><span class="fi">nainen</span> → genitivo</p>
      <div class="vaihtoehdot"><button type="button">naista</button><button type="button">naisen</button><button type="button">naiseen</button></div>
    </div>
    <div class="valinta" data-oikea="veden">
      <p class="kysymys" data-ei-kuplaa><span class="fi">vesi</span> → genitivo</p>
      <div class="vaihtoehdot"><button type="button">veden</button><button type="button">vettä</button><button type="button">veteen</button></div>
    </div>
    <div class="valinta" data-oikea="huoneen">
      <p class="kysymys" data-ei-kuplaa><span class="fi">huone</span> → genitivo</p>
      <div class="vaihtoehdot"><button type="button">huonetta</button><button type="button">huoneeseen</button><button type="button">huoneen</button></div>
    </div>
    <div class="valinta" data-oikea="puhelimen">
      <p class="kysymys" data-ei-kuplaa><span class="fi">puhelin</span> → genitivo</p>
      <div class="vaihtoehdot"><button type="button">puhelimen</button><button type="button">puhelinta</button><button type="button">puhelimeen</button></div>
    </div>
    <div class="valinta" data-oikea="rikkaan">
      <p class="kysymys" data-ei-kuplaa><span class="fi">rikas</span> → genitivo</p>
      <div class="vaihtoehdot"><button type="button">rikasta</button><button type="button">rikkaan</button><button type="button">rikkaaseen</button></div>
    </div>
    <div class="valinta" data-oikea="lampun">
      <p class="kysymys" data-ei-kuplaa><span class="fi">lamppu</span> → genitivo</p>
      <div class="vaihtoehdot"><button type="button">lamppua</button><button type="button">lamppuun</button><button type="button">lampun</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="brahenkentta-syksy">
  <h2>Gramática 3 · Números 100–1000</h2>
  <table class="taivutus">
    <tr><th></th><th>finlandês</th><th></th><th>finlandês</th></tr>
    <tr><td>100</td><td><span class="fi">sata</span></td><td>600</td><td><span class="fi">kuusisataa</span></td></tr>
    <tr><td>200</td><td><span class="fi">kaksisataa</span></td><td>700</td><td><span class="fi">seitsemänsataa</span></td></tr>
    <tr><td>300</td><td><span class="fi">kolmesataa</span></td><td>800</td><td><span class="fi">kahdeksansataa</span></td></tr>
    <tr><td>400</td><td><span class="fi">neljäsataa</span></td><td>900</td><td><span class="fi">yhdeksänsataa</span></td></tr>
    <tr><td>500</td><td><span class="fi">viisisataa</span></td><td>1000</td><td><span class="fi">tuhat</span></td></tr>
  </table>
  <p>Como as dezenas (<span class="fi">kaksikymmentä</span>): número + <span class="fi" data-l="sata:part">sataa</span>, o partitivo de <span class="fi">sata</span>, numa palavra só. Só o 100 é <span class="fi">sata</span> sozinho, e o 1000 é <span class="fi">tuhat</span>. O resto vem colado no fim: 101 = <span class="fi">satayksi</span>.</p>
  <div class="huomio">
    <p><b>Cuidado com o fim:</b> <span class="fi">kuusikymmentä</span> = 60, <span class="fi">kuusisataa</span> = 600. E <span class="fi">kuusi</span> tem <b>u longo</b>, até nas centenas.</p>
  </div>
  <p>Preço mais ou menos: <span class="fi">noin</span> (cerca de): <span class="fi">Vuokra on noin yhdeksänsataa euroa.</span></p>
</section>

<section class="osio" data-ei-sivulle data-paikka="brahenkentta-syksy">
  <h2>Exercícios da parte B</h2>
  <div class="peli-upotus" data-peli="claees-oollshen"></div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Ouça o preço</h3>
    <p class="ohje">Aperte ▶ e escolha o preço que você ouviu. Atenção ao fim: <span class="fi pala">-sataa</span> (centenas) ou <span class="fi pala">-kymmentä</span> (dezenas)?</p>
    <div class="valinta" data-kuuntele="kuusisataa euroa" data-oikea="600 €">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">60 €</button><button type="button">600 €</button><button type="button">700 €</button></div>
    </div>
    <div class="valinta" data-kuuntele="kaksisataa euroa" data-oikea="200 €">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">200 €</button><button type="button">300 €</button><button type="button">20 €</button></div>
    </div>
    <div class="valinta" data-kuuntele="tuhat euroa" data-oikea="1000 €">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">100 €</button><button type="button">900 €</button><button type="button">1000 €</button></div>
    </div>
    <div class="valinta" data-kuuntele="yhdeksänsataa euroa" data-oikea="900 €">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">90 €</button><button type="button">900 €</button><button type="button">800 €</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. O livro de colorir: a sala da Purjo</h3>
    <p class="ohje">A Maia desenhou a sala nova da Purjo para testar as cores, e a Purjo disse como quer cada coisa. Leia (ou ouça) as frases, escolha a cor e toque na parte do desenho. No fim, aperte <b>Conferir</b>.</p>
    <div class="varityskirja" data-h="purjo">
      <ol class="vk-ohjeet" lang="fi-FI">
        <li data-alue="seina" data-vari="keltainen" data-pt="A parede é amarela.">Seinä on keltainen.</li>
        <li data-alue="lattia" data-vari="ruskea" data-pt="O chão é marrom.">Lattia on ruskea.</li>
        <li data-alue="sohva" data-vari="sininen" data-pt="O sofá é azul.">Sohva on sininen.</li>
        <li data-alue="matto" data-vari="punainen" data-pt="O tapete é vermelho.">Matto on punainen.</li>
        <li data-alue="lamppu" data-vari="vihreä" data-pt="A luminária é verde.">Lamppu on vihreä.</li>
        <li data-alue="verho" data-vari="harmaa" data-pt="A cortina é cinza.">Verho on harmaa.</li>
        <li data-alue="possu" data-vari="vaaleanpunainen" data-pt="O porquinho do quadro é rosa.">Taulun possu on vaaleanpunainen.</li>
      </ol>
      <p class="vk-valmis-lause" lang="fi-FI" hidden>Kaunis olohuone! Kiitos, kulta!</p>
    </div>
    <p class="ohje">Agora ao contrário: a Maia pintou a sala do jeito dela e mandou o desenho para a Purjo. Olhe as cores e complete as frases: toque no espaço vazio (ou na parte do desenho) e escolha a cor. No fim, aperte <b>Conferir</b>.</p>
    <div class="varityskirja" data-h="purjo" data-tila="kaanteinen" data-ei-kuplaa data-kuvaus="A sala pintada pela Maia" data-valmis="Pronto! As frases dizem as cores do desenho da Maia.">
      <ol class="vk-ohjeet" lang="fi-FI">
        <li data-alue="seina" data-vari="vihreä" data-pt="A parede é… (que cor?)">Seinä on vihreä.</li>
        <li data-alue="lattia" data-vari="harmaa" data-pt="O chão é…">Lattia on harmaa.</li>
        <li data-alue="sohva" data-vari="vaaleanpunainen" data-pt="O sofá é…">Sohva on vaaleanpunainen.</li>
        <li data-alue="matto" data-vari="keltainen" data-pt="O tapete é…">Matto on keltainen.</li>
        <li data-alue="lamppu" data-vari="punainen" data-pt="A luminária é…">Lamppu on punainen.</li>
        <li data-alue="verho" data-vari="sininen" data-pt="A cortina é…">Verho on sininen.</li>
        <li data-alue="possu" data-vari="ruskea" data-pt="O porquinho do quadro é…">Taulun possu on ruskea.</li>
      </ol>
      <p class="vk-valmis-lause" lang="fi-FI" hidden>Vaaleanpunainen sohva! Kiitos, kulta.</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Traduza para o finlandês</h3>
    <div class="kaanna"><p class="pt">Esta é a sala.</p><p class="s" data-pt="Esta é a sala.">Tämä on olohuone.</p></div>
    <div class="kaanna"><p class="pt">Tem sauna neste prédio?</p><p class="s" data-pt="Tem sauna neste prédio?">Onko tässä talossa sauna?</p></div>
    <div class="kaanna"><p class="pt">Aquela luminária custa cem euros.</p><p class="s" data-pt="Aquela luminária custa cem euros.">Tuo lamppu maksaa sata euroa.</p></div>
    <div class="kaanna"><p class="pt">O aluguel é oitocentos euros por mês.</p><p class="s" data-pt="O aluguel é oitocentos euros por mês.">Vuokra on kahdeksansataa euroa kuukaudessa.</p></div>
    <div class="kaanna"><p class="pt">Esta não, aquela!</p><p class="s" data-pt="Esta não, aquela!">Ei tätä, tuota!</p></div>
    <div class="kaanna"><p class="pt">O sofá é azul.</p><p class="s" data-pt="O sofá é azul.">Sohva on sininen.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda sobre a sua casa</h3>
    <p class="ohje">Responda em voz alta antes de abrir o modelo. Os modelos são as respostas da Maia.</p>
    <details class="vastaus"><summary lang="fi-FI">Asutko sinä kerrostalossa?</summary><p class="s" data-pt="Moro. Eu moro num prédio em Sörnäinen.">Asun. Minä asun kerrostalossa Sörnäisissä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Milloin Purjo muuttaa Kallioon?</summary><p class="s" data-pt="A Purjo se muda para Kallio em dezembro.">Purjo muuttaa Kallioon joulukuussa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kuinka monta huonetta asunnossa on?</summary><p class="s" data-pt="Tem dois cômodos e uma cozinha.">Asunnossa on kaksi huonetta ja keittiö.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko talossa sauna?</summary><p class="s" data-pt="Tem. A sauna fica no porão.">On. Sauna <span data-l="olla#2">on</span> kellarissa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Paljonko vuokra on?</summary><p class="s" data-pt="O aluguel é novecentos euros por mês.">Vuokra on yhdeksänsataa euroa kuukaudessa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko asunnossa oma sauna?</summary><p class="s" data-pt="Não tem. A sauna fica no porão do prédio.">Ei ole. Talon sauna on kellarissa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla sohva?</summary><p class="s" data-pt="Tenho. Ele é verde. (E o Jay mora nele.)">On. Se on vihreä.</p></details>
  </div>
</section>

<aside class="kulttuuri" data-paikka="kallio-hameentie-ilta">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>O prédio finlandês: sauna no porão e aluguel por metro quadrado</h3>
  <figure class="kuva" data-kuva="helsingin-kaupunginosat"></figure>
  <p>Em Helsinque, quase todo mundo mora num <span class="fi">kerrostalo</span>, um prédio de apartamentos. O prédio é administrado pelos próprios moradores, a <span class="fi">taloyhtiö</span>, e muitos prédios têm uma <b>sauna comum</b>, em geral no porão. Cada apartamento reserva o seu <span class="fi">saunavuoro</span>, um horário fixo por semana. Também é comum uma lavanderia comum no prédio.</p>
  <p>Nos anúncios, o apartamento se conta em cômodos: <span class="pala">2 h + k</span> = dois cômodos e cozinha. Um apartamento de sala e quarto é um <span class="fi">kaksio</span>. O tamanho vem em metros quadrados (<span class="fi">neliö</span>), e o aluguel, por mês.</p>
  <p><span class="fi">Kallio</span> nasceu como bairro de operários, com prédios de apartamentos pequenos. Hoje é um dos bairros mais procurados de Helsinque: cafés, bares e muita gente jovem. Por isso o Jay diz <span class="fi">Kallio on kallis</span>: o nome do bairro (rocha) e “caro” só se diferenciam por uma letra.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Tää, toi, tääl, tuol: apontar na rua</h3>
  <p>Na fala, os pronomes que apontam encolhem. Você vai ouvir isso o tempo todo numa loja ou numa visita a um apartamento. Você <b>não precisa</b> falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">tämä</span></td><td><span class="fi" data-rekisteri="puhe">tää</span></td><td>este, esta</td></tr>
    <tr><td><span class="fi">tuo</span></td><td><span class="fi" data-rekisteri="puhe">toi</span></td><td>aquele, aquela</td></tr>
    <tr><td><span class="fi">nämä</span></td><td><span class="fi" data-rekisteri="puhe">nää</span></td><td>estes, estas</td></tr>
    <tr><td><span class="fi">täällä</span></td><td><span class="fi" data-rekisteri="puhe">tääl</span></td><td>aqui</td></tr>
    <tr><td><span class="fi">tuolla</span></td><td><span class="fi" data-rekisteri="puhe">tuol</span></td><td>ali, lá</td></tr>
  </table>
  <p class="s" data-h="jay" data-kirja="Tämä on olohuone, ja tuo on makuuhuone." data-pt="Esta é a sala, e aquele é o quarto.">Tää on olohuone, ja toi on makuuhuone.</p>
  <p class="s" data-h="jay" data-kirja="Sauna on tuolla." data-pt="A sauna fica lá.">Sauna on tuol.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="kallio-hameentie-ilta">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t08">
    <h3>Lição de casa</h3>
    <p>Desenhe a planta da sua casa num papel, com o nome de cada cômodo em finlandês. Depois escreva cinco frases: onde você mora (<span class="fi">Minä asun…</span>), que cômodos a casa tem (<span class="fi">Asunnossa on…</span>), duas frases apontando (<span class="fi">Tämä on… Tuo on…</span>), o aluguel ou o preço em centenas e a cor de um móvel (<span class="fi">Sohva on…</span>). Leia em voz alta, com o <span class="fi pala">l</span> de verdade.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Eu moro em Sörnäinen.">Minä asun Sörnäisissä.</p>
      <p class="s" data-pt="No apartamento tem sala, quarto e cozinha.">Asunnossa on olohuone, makuuhuone ja keittiö.</p>
      <p class="s" data-pt="Esta é a sala. Aquela é a cozinha.">Tämä on olohuone. Tuo on keittiö.</p>
      <p class="s" data-pt="O aluguel é novecentos euros por mês.">Vuokra on yhdeksänsataa euroa kuukaudessa.</p>
      <p class="s" data-pt="O sofá é verde.">Sohva on vihreä.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t08">
    <li>Sei mostrar um apartamento: tämä on olohuone, tuo on makuuhuone.</li>
    <li>Sei escolher entre tämä, tuo e se pelo lugar da coisa: perto de mim, longe dos dois, perto de você.</li>
    <li>Sei pôr o pronome no caso da palavra: tässä talossa, tähän asuntoon, Ei tätä, tuota!</li>
    <li>Reconheço o tipo da palavra pelo genitivo: naisen, veden, huoneen, puhelimen, rikkaan.</li>
    <li>Entendo e digo preços de 100 a 1000: kuusisataa euroa.</li>
    <li>Digo o l no fim da sílaba como l: Helsinki, valkoinen.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'osoittavat', otsikko: 'tämä, tuo, se: este, esse, aquele', taso: 'essencial', hakuosa: 'h-osoittavat', treeni: 't08-tamatuo',
      html: `
<p>Quem fala escolhe pelo lugar da coisa:</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>onde?</th><th>português</th></tr>
  <tr><td><span class="fi">tämä</span></td><td>perto de quem fala</td><td>este, isto</td></tr>
  <tr><td><span class="fi">se</span></td><td>perto de quem ouve, ou já mencionado</td><td>esse, isso</td></tr>
  <tr><td><span class="fi">tuo</span></td><td>longe dos dois, apontando</td><td>aquele, aquilo</td></tr>
  <tr><td><span class="fi">nämä, ne, nuo</span></td><td>o plural dos três</td><td>estes, esses, aqueles</td></tr>
</table>
<ul class="esim">
  <li class="s" data-pt="Esta é a sala. (eu estou nela)">Tämä on olohuone.</li>
  <li class="s" data-pt="Essa é a cozinha. (você está nela)">Se on keittiö.</li>
  <li class="s" data-pt="Aquele é o quarto. (eu aponto)">Tuo on makuuhuone.</li>
  <li class="s" data-pt="O que é isso? (na sua mão)">Mikä se on?</li>
</ul>
<p><span class="fi">se</span> é também o “ele, ela” das coisas: <span class="fi">Keittiö on tuossa. Se on pieni.</span> Para pessoas, na língua padrão: <span class="fi">hän</span>.</p>`
    },
    {
      id: 'osoittavat-sijat', otsikko: 'O pronome no mesmo caso: tässä talossa', taso: 'essencial', hakuosa: 'h-osoittavat', treeni: 't08-tamatuo',
      html: `
<p>Sem preposição: o pronome e a palavra ganham a mesma terminação. <span class="fi">tässä talossa</span> = neste prédio; <span class="fi">tähän asuntoon</span> = para este apartamento; <span class="fi">tuosta lampusta</span> = daquela luminária.</p>
<div class="sijataulu" data-sana="tämä" data-sijat="nominatiivi,genetiivi,partitiivi,inessiivi,elatiivi,illatiivi"></div>
<div class="sijataulu" data-sana="tuo" data-sijat="nominatiivi,genetiivi,partitiivi,inessiivi,elatiivi,illatiivi"></div>
<div class="sijataulu" data-sana="se" data-sijat="nominatiivi,genetiivi,partitiivi,inessiivi,elatiivi,illatiivi"></div>
<p><b>Depois de <span class="fi">ei</span>, partitivo:</b> <span class="fi">Ei tätä, tuota!</span> = este não, aquele!</p>`
    },
    {
      id: 'sanatyypit', otsikko: 'Tipos de palavra: o genitivo mostra o radical', taso: 'essencial', hakuosa: 'h-sanatyypit', treeni: 't08-sanatyypit',
      html: `
<p>O fim da palavra decide como ela muda. Aprenda cada palavra com o genitivo: tire o <span class="fi pala">-n</span>, e o que sobra é o radical da maioria dos casos.</p>
<table class="taivutus">
  <tr><th>tipo</th><th>palavra</th><th>genitivo</th><th>onde? (-ssa)</th></tr>
  <tr><td><span class="fi pala">-nen</span></td><td><span class="fi">eteinen</span><span class="kaannos" lang="pt-BR">hall de entrada</span></td><td><span class="fi">eteisen</span></td><td><span class="fi">eteisessä</span></td></tr>
  <tr><td><span class="fi pala">-si</span></td><td><span class="fi">kuukausi</span><span class="kaannos" lang="pt-BR">mês</span></td><td><span class="fi">kuukauden</span></td><td><span class="fi">kuukaudessa</span></td></tr>
  <tr><td><span class="fi pala">-e</span></td><td><span class="fi">olohuone</span><span class="kaannos" lang="pt-BR">sala</span></td><td><span class="fi">olohuoneen</span></td><td><span class="fi">olohuoneessa</span></td></tr>
  <tr><td><span class="fi pala">-in</span></td><td><span class="fi">puhelin</span><span class="kaannos" lang="pt-BR">telefone</span></td><td><span class="fi">puhelimen</span></td><td><span class="fi">puhelimessa</span></td></tr>
  <tr><td><span class="fi pala">-as</span></td><td><span class="fi">rikas</span><span class="kaannos" lang="pt-BR">rico</span></td><td><span class="fi">rikkaan</span></td><td><span class="fi">rikkaassa</span></td></tr>
  <tr><td><span class="fi pala">-s</span></td><td><span class="fi">kerros</span><span class="kaannos" lang="pt-BR">andar</span></td><td><span class="fi">kerroksen</span></td><td><span class="fi">kerroksessa</span></td></tr>
</table>
<p>O <b>partitivo</b> costuma mostrar o outro radical, o “de consoante”: <span class="fi">naista, vettä, huonetta, puhelinta, rikasta, kerrosta</span>.</p>
<div class="sijataulu" data-sana="nainen" data-sijat="nominatiivi,genetiivi,partitiivi,inessiivi,illatiivi,adessiivi"></div>`
    },
    {
      id: 'astevaihtelu8', otsikko: 'Gradação nos substantivos: lamppu → lampun', taso: 'essencial', hakuosa: 'h-astevaihtelu', treeni: 't08-sanatyypit',
      html: `
<p>A consoante do meio da palavra muda como nos verbos (lição 2): forte na sílaba aberta, fraca na fechada.</p>
<table class="taivutus">
  <tr><th>forte : fraco</th><th>forma básica</th><th>genitivo</th></tr>
  <tr><td><span class="fi pala">pp : p</span></td><td><span class="fi">lamppu</span><span class="kaannos" lang="pt-BR">luminária</span></td><td><span class="fi">lampun</span></td></tr>
  <tr><td><span class="fi pala">tt : t</span></td><td><span class="fi">katto</span><span class="kaannos" lang="pt-BR">teto</span></td><td><span class="fi">katon</span></td></tr>
  <tr><td><span class="fi pala">nt : nn</span></td><td><span class="fi">asunto</span><span class="kaannos" lang="pt-BR">apartamento</span></td><td><span class="fi">asunnon</span></td></tr>
  <tr><td><span class="fi pala">nk : ng</span></td><td><span class="fi">sänky</span><span class="kaannos" lang="pt-BR">cama</span></td><td><span class="fi">sängyn</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="3">inversa: a forma básica é a fraca</th></tr>
  <tr><td><span class="fi pala">k : kk</span></td><td><span class="fi">parveke</span><span class="kaannos" lang="pt-BR">varanda</span></td><td><span class="fi">parvekkeen</span></td></tr>
  <tr><td><span class="fi pala">k : kk</span></td><td><span class="fi">rikas</span><span class="kaannos" lang="pt-BR">rico</span></td><td><span class="fi">rikkaan</span></td></tr>
</table>
<div class="sijataulu" data-sana="asunto" data-sijat="nominatiivi,genetiivi,partitiivi,inessiivi,elatiivi,illatiivi"></div>`
    },
    {
      id: 'sadat', otsikko: 'Números 100–1000: sata, kaksisataa… tuhat', taso: 'essencial', hakuosa: 'h-luvut', treeni: 't08-sadat',
      html: `
<p>100 = <span class="fi">sata</span>. De 200 a 900: número + <span class="fi" data-l="sata:part">sataa</span> (partitivo de <span class="fi">sata</span>, como <span class="fi">kaksi kahvia</span>), numa palavra só. 1000 = <span class="fi">tuhat</span>.</p>
<ul class="esim">
  <li class="s" data-pt="200">kaksisataa</li>
  <li class="s" data-pt="500">viisisataa</li>
  <li class="s" data-pt="700">seitsemänsataa</li>
  <li class="s" data-pt="900">yhdeksänsataa</li>
</ul>
<ul class="esim">
  <li class="s" data-pt="O aluguel é novecentos euros por mês.">Vuokra on yhdeksänsataa euroa kuukaudessa.</li>
  <li class="s" data-pt="A luminária custa cem euros.">Lamppu maksaa sata euroa.</li>
</ul>
<p>Depois do número, a palavra vai no partitivo, como sempre: <span class="fi">sata euroa</span>, <span class="fi">tuhat euroa</span>.</p>`
    },
    {
      id: 'sudenkuopat8', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>“Esse” para tudo:</b> em finlandês, perto de mim = <span class="fi">tämä</span>; perto de você = <span class="fi">se</span>; longe dos dois = <span class="fi">tuo</span>.</li>
  <li><b>Sem preposição:</b> “neste prédio” não é “em tämä talo”: <span class="fi">tässä talossa</span>, os dois com <span class="fi pala">-ssa</span>.</li>
  <li><b>O fim muda:</b> não cole a terminação na forma básica: <span class="fi">naisen</span>, não “<span class="pala">naisenen</span>”; <span class="fi">huoneessa</span>, não “<span class="pala">huonessa</span>”. Procure o genitivo na bolha.</li>
  <li><b>Centenas e dezenas:</b> <span class="fi">kuusisataa</span> = 600, <span class="fi">kuusikymmentä</span> = 60.</li>
  <li><b>O l no fim da sílaba:</b> <span class="fi">Helsinki</span>, <span class="fi">valkoinen</span>, nunca com u.</li>
</ul>`
    }
  ]
});
