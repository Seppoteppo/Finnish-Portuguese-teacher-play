/* Tottakai, lição 18: pelastus Morro do Cascalholla ja UPA (Passon jakso 18 Maian näkökulmasta). Oma materiaali, ei
   kirjan tekstiä. Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5c ”Oppitunti 18”; kalenteri: su 27.12.2026 iltapäivä
   (pelastus) ja ilta (UPA). Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t18): Morro do Cascalho (keksitty paikka). Marcus on sitonut Jayn keittiön tuoliin jouluvaloilla ja mittaa
     mikroaaltouunia (liian pieni: vitsi on Marcuksessa). Anderson toi Maian ja Malun perille; naapurin Cida vie Jaylle
     kahvin ja Andersonin radiopuhelimen. Dialogi A (17 .s-repliikkiä) salakielen radiona: `.salakieli.sk-radio`
     (t11:n komponentti, kuulija Marcus; .sk-radio on pelkkä CSS-muunnelma tottakai.css:n t18-kohdassa: kohina
     ”chhh… krrr…” kuiskausten päällä). Hätäkäskyt sinä- ja te-muodossa (Älä liiku! Odota! Kun minä sanon ”nyt”, juokse
     takaovelle! Juoskaa!), Maian virhe-koukku ”hauhassa” (data-hairio, ääntämisen alun r). Frases prontas, sanasto,
     ääntäminen (r aina täryllä myös sanan alussa: radio, rauhassa, rohkea, ravintola; rauta × hauta, riisi × Hiisi),
     tehtävät 1–3.
   - osa B (#t18-b): sunnuntai-ilta UPA:ssa. Marisa (sairaanhoitaja, puhuu portugalia) tutkii Jayn; Maia kääntää
     Marisan sanat suomeksi ja Jay vastaa suomeksi (Minua sattuu. Päätäni särkee. Minulla on kipeä käsi.). Dialogi B (18),
     Frases prontas, kikka B `.keho` suomeksi (Tottakain komponentit.js keho: t18:n pieni lisäys data-kysy = Maian
     kysymys osaa kohden ja data-kaannokset = käännösrivi Tradução-napista; ilman niitä komponentti toimii kuten ennen).
     Kielioppi (sattuu + illatiivi, särkee + partitiivi, minulla on kipeä + perusmuoto, minua sattuu, minulla on kuumetta,
     kehonosat, hätäkäskyt kertauksena, kun + preesens) kolmena lohkona tehtävineen (kipu ja kuume → tehtävä 4, keho →
     tehtävät 5–6, hätäkäskyt → tehtävät 7–9; tehtävä 7: perheen chat, Purjo te-käskyin),
     kulttuuri (UPA ja SUS; Suomessa 112, terveyskeskus ja päivystys; kuva upa), Na rua (Mua sattuu! Mun päätä särkee.
     Älä hätäile!), kotitehtävä, itsearvio.
   Brasilian jaksot (OPPITUNNIT §2 ja §5c): suomea puhuvat vain Maia, Jay, Purjo, Hiisi ja Anderson yhdellä sanalla
   (Juoskaa!, t14:n vitsi); Marcus, Cida, Malu ja Marisa puhuvat portugalia (kertojan teksti tai .sk-pt lang="pt-BR").
   Muut asukkaat eivät ole konnia: Cida ja naapurit auttavat. Kirjakieli kaikkialla; puhekieli vain Na rua -nurkassa.
   Omistusliite -ni vain tunnistettavana (päätäni: pää-tietueen m-muoto poss.1s; lição 17). Lepää ja juo käskyinä on
   kiinnitetty data-l:llä (muuten kupla tulkitsisi ne preesensiksi). Jayn harmonia: Jayllä (PAATOKSET 17.10.2026).
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat toimia, pelastaa, sama asia, päästä, itse, syy, tapahtua, koska,
   hoitaa, tohtori, pian, tieto; dialogit 17 + 18; sanasto 49 → 40; sanalistat 36 → 20 (keho-lista jää kehon viereen).
   Uuno ja Eenok (omistaja 22.10.2026) korvaavat Riitan ja Pekan kertojan teksteissä (autossa Malun kanssa). Anderson ei
   ymmärrä sanaa sankari, mutta ymmärtää halauksen (korvanappi ja laskeminen poistettu 23.10.2026, omistaja). */
Kurssi.lisaa({
  id: 't18',
  lyhyt: '18',
  jakso: 'Lição 18',
  otsikko: 'O resgate e a UPA: dor, corpo e ordens urgentes',
  lahde: 'Tema: o resgate no Morro do Cascalho e a UPA · Gramática: ordens urgentes (revisão: Älä liiku! Odota! Juokse! Juoskaa!), kun + presente, onde dói (minua sattuu, polveen sattuu, päätäni särkee, minulla on kipeä käsi, minulla on kuumetta), as partes do corpo · Pronúncia: o r vibrante também no começo da palavra (radio, rauhassa, rohkea)',
  aiheet: ['keho', 'toiminta', 'ihmiset', 'tunteet'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; comanda o resgate pelo rádio e traduz na UPA' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; amarrado numa cadeira, mas corrige a pronúncia da Maia' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; sabe onde o Marcus mora e é o herói do dia' },
    marcus: { nimi: 'Marcus', tyyppi: 'mies', vaihto: 7, kuvaus: 'morador do Morro do Cascalho (inventado), torcedor fanático do Atlético; fala só português' },
    cida: { nimi: 'Dona Cida', tyyppi: 'nainen', vaihto: 5, kuvaus: 'vizinha do Marcus; ajuda o Jay (fala português)' },
    marisa: { nimi: 'Marisa', tyyppi: 'nainen', vaihto: 5, kuvaus: 'amiga da Maia; enfermeira na UPA (fala português)' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; lê as mensagens de madrugada em Helsinque' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; resolve tudo dirigindo' }
  },

  sanasto: [
    'liikkua', 'hiljaa', 'rauhassa', 'kiinni', 'mikroaaltouuni', 'radiopuhelin', 'etuovi', 'takaovi', 'sankari', 'varovainen',
    'toimia', 'pelastaa', 'sattua', 'särkeä', 'kipeä', 'kuume', 'pää', 'kurkku', 'vatsa', 'selkä', 'rinta', 'käsi', 'jalka', 'polvi',
    'sitoa', 'kaatua', 'levätä', 'hengittää', 'mitata', 'hätäillä', 'kunnossa', 'vakava', 'hoitaa', 'syy', 'tohtori', 'tieto',
    'terveyskeskus', 'päivystys', 'hätänumero'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · O resgate no Morro do Cascalho',
      html: `
<ul class="tavoitteet">
  <li>Você entende e dá ordens urgentes: <span class="fi">Älä liiku! Odota! Juokse!</span> e, para vocês, <span class="fi">Juoskaa!</span></li>
  <li>Você monta um plano com <span class="fi">kun</span>: <span class="fi">Kun minä sanon ”nyt”, juokse!</span></li>
  <li>Você pronuncia o <span class="fi pala">r</span> vibrante também no começo da palavra: <span class="fi">radio, rauhassa, rohkea</span>.</li>
  <li>Parte B: você diz onde dói (<span class="fi">Minua sattuu. Päätäni särkee. Minulla on kipeä käsi.</span>), conhece as partes do corpo e a UPA.</li>
</ul>
<p data-paikka="bh-bairro">Domingo, 27 de dezembro, três da tarde. De manhã, o Anderson reconheceu o homem do cabelo esquisito (lição 17): é o Marcus, e ele mora no alto do Morro do Cascalho, um morro do outro lado da avenida. O Anderson conhece cada portão de lá. A Malu leva a Maia e o Anderson morro acima, devagar, como sempre. O Uuno e o Eenok, de macacão azul-claro como sempre, vêm junto, como prometeram, e ficam com a Malu no carro, na esquina de baixo, com o telefone pronto para chamar a polícia. No colo, o Anderson leva a bolsa de sempre: cartas, um boné do Rei Leão e dois radinhos de brinquedo (<span class="fi">radiopuhelin</span>), que ele usa para brincar de polícia com as crianças da rua.</p>
<p data-paikka="bh-bairro">No alto do morro fica a casa do portão preto e branco, com uma bandeira do Atlético na janela. Pela janela da cozinha, a Maia vê o Jay: sentado numa cadeira, amarrado com um pisca-pisca de Natal que ainda pisca. Na frente dele, o Marcus, de camisa do Atlético, mede o Jay com uma fita métrica. Depois mede o micro-ondas. O micro-ondas tem vinte litros. O Jay tem quase dois metros. No quintal ao lado, a dona Cida estende roupa. Ela conhece o Anderson (todo mundo conhece o Anderson) e conta, baixinho, que desde cedo leva café e pão de queijo para o “moço gringo”, sem o Marcus perceber. A Maia tem um plano. A dona Cida leva mais um cafezinho para a cozinha, e debaixo do guardanapo vai um dos radinhos do Anderson. O Marcus não entende uma palavra de finlandês.</p>

<section class="osio">
  <h2>Diálogo A: <span class="fi">Täällä Maia</span></h2>
  <p class="ohje">Duas línguas na mesma cozinha. Primeiro ouça com o ouvido do Marcus: no rádio, o finlandês é só ruído. Depois troque para o ouvido da Maia e entenda o plano: <span class="fi">Älä katso tänne! Odota! Juokse!</span> Na segunda vez, ligue a <b>Tradução</b>.</p>
  <div class="salakieli sk-radio" data-kuulija="marcus" data-kuiskaajat="maia,jay" data-korva-kuulija="👂 Ouvido do Marcus"
       data-ohje-kuulija="Ouvido do Marcus: o rádio só faz “chhh… krrr…”; ele vê as caras e não entende nada. Toque em 👂 Ouvido da Maia para entender o finlandês.">
    <p class="sk-radiopaa" lang="pt-BR"><span class="emoji">📻</span> Radinho do Anderson · canal 3</p>
    <div class="kpl" id="t18-dialogi-a" data-nimi="Ouvir o diálogo A">
      <p class="sk-pt" data-h="marcus" lang="pt-BR">Quarenta centímetros… E você, gringo, tem quase dois metros. Encolhe aí!</p>
      <p class="s" data-h="kertoja" data-pt="Domingo, três da tarde. O Jay está sentado numa cadeira. Ele tem um radinho.">Sunnuntai, kello kolme iltapäivällä. Jay istuu tuolilla. Hänellä on radiopuhelin.</p>
      <p class="s" data-h="maia" data-pt="Jay, você está me ouvindo? O rádio funciona? Aqui é a Maia.">Jay, kuuletko minua? Toimiiko radio? Täällä Maia.</p>
      <p class="s" data-h="jay" data-pt="Maia! Estou ouvindo! Onde você está?">Maia! Kuulen! Missä sinä <span data-l="olla#2">olet</span>?</p>
      <p class="s" data-h="maia" data-pt="Atrás da janela. Não olhe para cá! Fique quieto e escute.">Ikkunan takana. Älä katso tänne! Ole hiljaa ja kuuntele.</p>
      <p class="sk-ajatus" data-h="marcus" lang="pt-BR">(pensa) O gringo está falando com o bolso. Em sueco? Deve estar rezando.</p>
      <p class="s" data-h="jay" data-pt="O Marcus quer me pôr no micro-ondas! Me salve!">Marcus haluaa laittaa minut mikroaaltouuniin! Pelasta minut!</p>
      <p class="s" data-h="maia" data-hairio="hauhassa → rauhassa" data-pt="Calma, Jay. O micro-ondas é pequeno demais. (errado: hauhassa)"><span class="pala">Hauhassa</span>, Jay. Mikroaaltouuni on liian pieni.</p>
      <p class="s" data-h="jay" data-pt="Rauhassa, Maia. Não hauhassa!">Rauhassa, Maia. Ei <span class="pala">hauhassa</span>!</p>
      <p class="s" data-h="maia" data-pt="Dá na mesma! Agora escute.">Sama asia! Kuuntele nyt.</p>
      <p class="sk-pt" data-h="marcus" lang="pt-BR">(lendo o manual) “Não coloque objetos grandes.” Hum. Gringo, você é um objeto grande?</p>
      <p class="s" data-h="maia" data-pt="Escute. O Anderson vai agora até a porta da frente. Espere!">Kuuntele. Anderson menee nyt etuovelle. Odota!</p>
      <p class="s" data-h="jay" data-pt="Eu espero. Mas as mãos estão amarradas na cadeira.">Odotan. Mutta kädet ovat kiinni tuolissa.</p>
      <p class="s" data-h="maia" data-pt="As pernas não estão amarradas. Quando eu disser “agora”, corra para a porta dos fundos!">Jalat eivät ole kiinni. Kun minä sanon ”nyt”, juokse takaovelle!</p>
      <p class="s" data-h="jay" data-pt="Como eu chego à porta dos fundos com a cadeira?">Miten pääsen takaovelle tuolin kanssa?</p>
      <p class="s" data-h="maia" data-pt="Sozinho. Corra com a cadeira!">Itse. Juokse tuolin kanssa!</p>
      <p class="sk-pt" data-h="anderson" lang="pt-BR">(na porta da frente) Correio! Uma revista para o senhor Marcus!</p>
      <p class="sk-pt" data-h="marcus" lang="pt-BR">A revista do Galo! Finalmente!</p>
      <p class="s" data-h="maia" data-pt="Agora! Não espere! Corra!">Nyt! Älä odota! Juokse!</p>
      <p class="s" data-h="kertoja" data-pt="A Cida abre a porta dos fundos. O Jay sai correndo com a cadeira.">Cida avaa takaoven. Jay juoksee ulos tuolin kanssa.</p>
      <p class="s" data-h="jay" data-pt="Corram! Todo mundo para o carro!">Juoskaa! Kaikki autoon!</p>
      <p class="s" data-h="anderson" data-pt="Corram!">Juoskaa!</p>
    </div>
  </div>
  <p>Na porta da frente, o Marcus abre a revista do Galo e só depois olha para trás: a cozinha está vazia, a porta dos fundos está aberta, e a cadeira também sumiu. A revista estava na casa da dona Cida desde sexta-feira, entregue no endereço errado; foi o Anderson que lembrou dela. O carro da Malu, com seis pessoas e uma cadeira, desce o morro a vinte por hora. No banco de trás, o Jay, ainda amarrado na cadeira, diz em finlandês que o Anderson é um herói: <span class="fi">Anderson on sankari!</span> O Anderson não entende a palavra, mas entende o abraço. Da janela, alguns vizinhos aplaudem, e a dona Cida acena com o pano de prato. E o Marcus? Ficou com a revista, o micro-ondas pequeno e uma dúvida: em que língua falava aquele rádio?</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Täällä Maia.</span> = aqui é a Maia · no rádio e no telefone, “aqui fala…”</li>
      <li><span class="fi">Kuuletko minua?</span> = você está me ouvindo? · aqui <span class="fi">minua</span> no partitivo, porque a audição está em andamento (fato completo: <span class="fi pala">Kuulin sinut</span> = ouvi você)</li>
      <li><span class="fi">Ole hiljaa!</span> = fique quieto! · <span class="fi">hiljaa</span> = em silêncio, baixinho</li>
      <li><span class="fi">laittaa minut mikroaaltouuniin</span> = me pôr no micro-ondas · <span class="fi">minut</span> é “me” como objeto inteiro (lição 12)</li>
      <li><span class="fi">Kädet ovat kiinni.</span> = as mãos estão amarradas · <span class="fi">kiinni</span> = preso, fechado: <span class="fi">Ovi on kiinni.</span> = a porta está fechada</li>
      <li><span class="fi">Kun minä sanon ”nyt”, juokse!</span> = quando eu disser “agora”, corra! · “quando eu disser” (no futuro) = <span class="fi">kun minä sanon</span>, no presente</li>
      <li><span class="fi">Kaikki autoon!</span> = todo mundo para o carro! · sem verbo, como em português</li>
      <li><span class="fi">Pelasta minut!</span> = me salve! · <span class="fi">Toimiiko radio?</span> = o rádio funciona? · <span class="fi">Sama asia!</span> = dá na mesma!</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="bh-bairro">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="O resgate" data-sanat="liikkua,odottaa,juosta,kuunnella,apu,hiljaa,rauhassa,mikroaaltouuni,radiopuhelin,takaovi,kiinni,sankari"></div>
  <p>As outras palavras da lição estão no <a href="#t18-vocabulario">Vocabulário da lição</a>.</p>
  <div class="saanto">
    <h3>Para você ou para vocês? A ordem curta da emergência</h3>
    <p>As ordens são as das lições 9 e 14. Para uma pessoa: a forma sem terminação (<span class="fi">Odota! Juokse!</span>); para duas ou mais: <span class="fi pala">-kaa/-kää</span> (<span class="fi">Juoskaa!</span>). Proibir: <span class="fi">älä</span> + a forma negativa (<span class="fi">Älä liiku!</span>), para vocês <span class="fi">älkää</span> + <span class="fi pala">-ko/-kö</span> (<span class="fi">Älkää liikkuko!</span>).</p>
    <ul class="esim">
      <li class="s" data-pt="Não se mexa!">Älä liiku!</li>
      <li class="s" data-pt="Espere!">Odota!</li>
      <li class="s" data-pt="Corra!">Juokse!</li>
      <li class="s" data-pt="Corram!">Juoskaa!</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Pronúncia: o <span class="fi pala">r</span> vibra também no começo</h2>
  <p>Na lição 6 você treinou o <span class="fi pala">r</span> vibrante. No começo da palavra, porém, o ouvido brasileiro volta ao hábito: em português, “rádio” e “Rio” começam com um som de h. No susto, a Maia disse <span class="pala">hauhassa</span>, e o Jay, amarrado numa cadeira, ainda corrigiu. Em finlandês, o <span class="fi pala">r</span> é sempre da ponta da língua, que vibra uma ou mais vezes, em qualquer lugar da palavra: no começo, no meio e antes de consoante. No começo, a língua vibra bem. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="rádio">radio</li>
    <li class="s" data-pt="com calma">rauhassa</li>
    <li class="s" data-pt="corajoso">rohkea</li>
    <li class="s" data-pt="restaurante">ravintola</li>
    <li class="s" data-pt="Calma, Jay!">Rauhassa, Jay!</li>
    <li class="s" data-pt="O Anderson é corajoso.">Anderson on rohkea.</li>
  </ul>
  <p>Com <span class="fi pala">h</span> no lugar do <span class="fi pala">r</span>, a palavra vira outra:</p>
  <table class="taivutus">
    <tr><th>com r</th><th>com h</th><th>português</th></tr>
    <tr><td><span class="fi">rauta</span></td><td><span class="fi">hauta</span></td><td>ferro · túmulo</td></tr>
    <tr><td><span class="fi">riisi</span></td><td><span class="fi">Hiisi</span></td><td>arroz · o irmão do Jay</td></tr>
  </table>
  <div class="saanto">
    <h3>Truque: comece com o t de “três”</h3>
    <p>O português já tem o som certo, só que em outro lugar: o <span class="fi pala">r</span> de “três”, “caro” e “prato” é um toque da ponta da língua atrás dos dentes de cima. Diga “três” devagar, depois tire o t: <span class="fi pala">rrr</span>. Agora ponha esse <span class="fi pala">r</span> no começo da palavra e deixe a língua bater duas ou três vezes: <span class="fi pala">r-r-rauhassa</span>, <span class="fi pala">r-r-radio</span>. O ar não sai pela garganta, como no h.</p>
  </div>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o <span class="fi pala">r</span> do começo vira h, e o <span class="fi pala">r</span> antes de consoante também (<span class="fi">kurkku</span> não é “kuhku”). Em finlandês não há r de garganta: o <span class="fi pala">r</span> é o mesmo em <span class="fi">radio</span>, <span class="fi">Marcus</span> e <span class="fi">kurkku</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>1. Ouça a Maia no rádio: o que o Jay deve fazer?</h3>
    <p class="ohje">Aperte ▶ sem ler e escolha a ordem que você ouviu.</p>
    <div class="valinta" data-kuuntele="Älä liiku!" data-oikea="não se mexer">
      <p class="kysymys">O Jay deve…</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">correr</button><button type="button">não se mexer</button><button type="button">esperar</button></div>
    </div>
    <div class="valinta" data-kuuntele="Odota!" data-oikea="esperar">
      <p class="kysymys">O Jay deve…</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">esperar</button><button type="button">escutar</button><button type="button">não se mexer</button></div>
    </div>
    <div class="valinta" data-kuuntele="Älä katso tänne!" data-oikea="não olhar para cá">
      <p class="kysymys">O Jay deve…</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">olhar para cá</button><button type="button">vir para cá</button><button type="button">não olhar para cá</button></div>
    </div>
    <div class="valinta" data-kuuntele="Ole hiljaa!" data-oikea="ficar quieto">
      <p class="kysymys">O Jay deve…</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">ficar quieto</button><button type="button">correr</button><button type="button">escutar</button></div>
    </div>
    <div class="valinta" data-kuuntele="Juokse takaovelle!" data-oikea="correr para a porta dos fundos">
      <p class="kysymys">O Jay deve…</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">esperar na porta dos fundos</button><button type="button">correr para a porta dos fundos</button><button type="button">correr para a porta da frente</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Ligue a ordem à tradução</h3>
    <ul class="yhdista">
      <li data-pari="não se mexa!">Älä liiku!</li>
      <li data-pari="espere!">Odota!</li>
      <li data-pari="corra!">Juokse!</li>
      <li data-pari="corram!">Juoskaa!</li>
      <li data-pari="fique quieto!">Ole hiljaa!</li>
      <li data-pari="escute!">Kuuntele!</li>
      <li data-pari="não olhe para cá!">Älä katso tänne!</li>
      <li data-pari="socorro!">Apua!</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>3. Você entendeu o diálogo A?</h3>
    <p class="ohje">Volte ao diálogo, com o ouvido da Maia, se precisar.</p>
    <div class="valinta" data-oikea="Ikkunan takana.">
      <p class="kysymys"><span class="fi">Missä Maia <span data-l="olla#2">on</span>?</span></p>
      <div class="vaihtoehdot"><button type="button">Etuovella.</button><button type="button">Ikkunan takana.</button><button type="button">Autossa.</button></div>
    </div>
    <div class="valinta" data-oikea="Mikroaaltouuni.">
      <p class="kysymys"><span class="fi">Mikä on liian pieni?</span></p>
      <div class="vaihtoehdot"><button type="button">Tuoli.</button><button type="button">Ikkuna.</button><button type="button">Mikroaaltouuni.</button></div>
    </div>
    <div class="valinta" data-oikea="Etuovelle.">
      <p class="kysymys"><span class="fi">Mihin Anderson menee?</span></p>
      <div class="vaihtoehdot"><button type="button">Etuovelle.</button><button type="button">Takaovelle.</button><button type="button">Autoon.</button></div>
    </div>
    <div class="valinta" data-oikea="Cida.">
      <p class="kysymys"><span class="fi">Kuka avaa takaoven?</span></p>
      <div class="vaihtoehdot"><button type="button">Malu.</button><button type="button">Maia.</button><button type="button">Cida.</button></div>
    </div>
    <div class="valinta" data-oikea="Takaovelle.">
      <p class="kysymys"><span class="fi">Mihin Jay juoksee?</span></p>
      <div class="vaihtoehdot"><button type="button">Takaovelle.</button><button type="button">Etuovelle.</button><button type="button">Ikkunaan.</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Na UPA: Mihin sattuu?',
      html: `
<ul class="tavoitteet">
  <li>Você diz onde dói: <span class="fi">Minua sattuu. Polveen sattuu.</span></li>
  <li>Você diz <span class="fi">Päätäni särkee.</span> e <span class="fi">Minulla on kipeä käsi.</span>, e pergunta <span class="fi">Onko sinulla kuumetta?</span></li>
  <li>Você conhece as partes do corpo: <span class="fi">pää, kurkku, vatsa, selkä, käsi, jalka, polvi</span>.</li>
  <li>Você revisa as ordens para vocês: <span class="fi">Menkää kotiin! Älkää menkö sinne!</span></li>
</ul>

<p data-paikka="upa">Domingo, sete da noite. A Malu não deixa o Jay ir para casa sem passar pela UPA, e quem está de plantão hoje é a Marisa, a amiga enfermeira. O Jay entra de chinelo, com o pisca-pisca ainda enrolado no pulso e a cadeira, finalmente, no carro. A Marisa só fala português. O Jay entende “dói” e “aqui”. A Maia traduz.</p>

<section class="osio">
  <h2>Diálogo B: <span class="fi">Mihin sattuu?</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. A Maia traduz as perguntas e as ordens da Marisa. Procure os três jeitos de dizer que dói: <span class="fi">sattuu</span>, <span class="fi">särkee</span> e <span class="fi">minulla on kipeä…</span> Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t18-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="Domingo, sete da noite. A Marisa está no trabalho. Ela é enfermeira.">Sunnuntai, kello seitsemän illalla. Marisa on töissä. Hän on sairaanhoitaja.</p>
    <p class="s" data-h="maia" data-pt="Jay, a Marisa pergunta onde dói.">Jay, Marisa kysyy, mihin sattuu.</p>
    <p class="s" data-h="jay" data-pt="Dói. A minha cabeça dói, e estou com a mão doendo.">Minua sattuu. Päätäni särkee, ja minulla on kipeä käsi.</p>
    <p class="s" data-h="maia" data-pt="Qual é o motivo? O que aconteceu?">Mikä on syy? Mitä tapahtui?</p>
    <p class="s" data-h="jay" data-pt="Cerveja. Porque eu bebi demais, fui até a esquina.">Olut. Koska join liikaa, menin kadun kulmaan.</p>
    <p class="s" data-h="maia" data-pt="A Marisa diz: sente aqui e mostre a mão.">Marisa sanoo: istu tähän ja näytä käsi.</p>
    <p class="s" data-h="jay" data-pt="Aqui. O Marcus me amarrou na cadeira.">Tässä. Marcus sitoi minut tuoliin.</p>
    <p class="s" data-h="maia" data-pt="A mão está bem. Nada grave. Você está com febre?">Käsi on kunnossa. Ei mitään vakavaa. Onko sinulla kuumetta?</p>
    <p class="s" data-h="jay" data-pt="Não sei. Estou com um pouco de frio.">En tiedä. Minulla on vähän kylmä.</p>
    <p class="s" data-h="kertoja" data-pt="A Marisa mede a febre.">Marisa mittaa kuumeen.</p>
    <p class="s" data-h="maia" data-pt="Sem febre. Respire com calma, Jay.">Ei kuumetta. Hengitä rauhassa, Jay.</p>
    <p class="s" data-h="jay" data-pt="E o joelho? O joelho dói. Eu caí perto da porta com a cadeira.">Entä polvi? Polveen sattuu. Kaaduin ovella tuolin kanssa.</p>
    <p class="s" data-h="maia" data-pt="A Marisa cuida do joelho. O médico vem logo.">Marisa hoitaa polven. Tohtori tulee pian.</p>
    <p class="s" data-h="maia" data-pt="A Marisa diz: descanse, beba água e não beba cerveja.">Marisa sanoo: <span data-l="levätä:imper.2s">lepää</span>, <span data-l="juoda:imper.2s">juo</span> vettä ja älä juo olutta.</p>
    <p class="s" data-h="jay" data-pt="Sem cerveja? No Brasil?">Ei olutta? Brasiliassa?</p>
    <p class="s" data-h="maia" data-pt="Sem cerveja. E mais uma coisa: não fale mais com o Marcus.">Ei olutta. Ja yksi asia vielä: älä puhu enää Marcukselle.</p>
    <p class="s" data-h="maia" data-pt="E a Marisa diz para nós: vão para casa e durmam!">Ja Marisa sanoo meille: menkää kotiin ja nukkukaa!</p>
    <p class="s" data-h="jay" data-pt="Obrigado, Marisa! Obrigado!">Kiitos, Marisa! <span lang="pt-BR">Obrigado!</span></p>
  </div>
  <p>A Marisa ri do “obrigado” com sotaque finlandês, enrola uma faixa no pulso do Jay e coloca gelo no joelho. Depois diz à Maia, em português: <span lang="pt-BR">“Um micro-ondas de vinte litros para quase dois metros de gringo? Esse Marcus precisa de uma aula de geometria.”</span> A Maia traduz, e o Jay ri até o joelho doer.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Mihin sattuu?</span> = onde dói? · com <span class="fi">sattua</span>, o lugar da dor responde a “para onde?”: <span class="fi">polveen</span></li>
      <li><span class="fi">Ei mitään vakavaa.</span> = nada grave · depois de <span class="fi">ei mitään</span>, o adjetivo vai no partitivo</li>
      <li><span class="fi">Käsi on kunnossa.</span> = a mão está bem · <span class="fi">kunnossa</span> = em ordem, sem problema</li>
      <li><span class="fi">Minulla on vähän kylmä.</span> = estou com um pouco de frio · frio e calor vão com <span class="fi">minulla on</span> (lição 12)</li>
      <li><span class="fi">Kaaduin ovella.</span> = eu caí na porta · <span class="fi">kaatua</span> = cair, levar um tombo</li>
      <li><span class="fi">Hengitä rauhassa.</span> = respire com calma · <span class="fi">rauhassa</span> = com calma</li>
      <li><span class="fi">Menkää kotiin ja nukkukaa!</span> = vão para casa e durmam! · a ordem para vocês (lição 14)</li>
      <li><span class="fi">Mikä on syy?</span> = qual é o motivo? · <span class="fi">Marisa hoitaa polven.</span> = a Marisa cuida do joelho · <span class="fi">Tohtori tulee pian.</span> = o médico vem logo</li>
    </ul>
  </div>
</section>

<section class="osio">
  <h2>O corpo do Jay: <span class="fi">Mihin sattuu?</span></h2>
  <p class="ohje">Toque numa parte do corpo: o Jay diz em finlandês o que dói e por quê. Depois aperte <b>Ouvir a pergunta</b>: a Maia traduz a pergunta da Marisa (por exemplo <span class="fi">Sattuuko polveen?</span>), e você mostra o lugar. Com a <b>Tradução</b> ligada, aparece também o português.</p>
  <div class="keho" data-h="jay" data-kysyja="maia" data-kaannokset>
    <p data-osa="cabeca" data-nimi="pää · a cabeça" data-kysy="Sattuuko päähän?" data-puhu="Päätäni särkee. Join liikaa olutta." data-pt="A minha cabeça dói. Eu bebi cerveja demais.">Päätäni särkee. Join liikaa olutta.</p>
    <p data-osa="garganta" data-nimi="kurkku · a garganta" data-kysy="Sattuuko kurkkuun?" data-puhu="Minulla on kipeä kurkku. Puhuin koko yön." data-pt="Estou com dor de garganta. Eu falei a noite toda.">Minulla on kipeä kurkku. Puhuin koko yön.</p>
    <p data-osa="peito" data-nimi="rinta · o peito" data-kysy="Sattuuko rintaan?" data-puhu="Rintaan ei satu. Se on kunnossa." data-pt="O peito não dói. Ele está bem.">Rintaan ei satu. Se on kunnossa.</p>
    <p data-osa="barriga" data-nimi="vatsa · a barriga" data-kysy="Sattuuko vatsaan?" data-puhu="Vatsaan sattuu. Söin liikaa." data-pt="A barriga dói. Eu comi demais.">Vatsaan sattuu. Söin liikaa.</p>
    <p data-osa="mao" data-nimi="käsi · a mão" data-kysy="Sattuuko käteen?" data-puhu="Minulla on kipeä käsi. Marcus sitoi minut tuoliin." data-pt="Estou com a mão doendo. O Marcus me amarrou na cadeira.">Minulla on kipeä käsi. Marcus sitoi minut tuoliin.</p>
    <p data-osa="joelho" data-nimi="polvi · o joelho" data-kysy="Sattuuko polveen?" data-puhu="Polveen sattuu. Kaaduin ovella." data-pt="O joelho dói. Eu caí perto da porta.">Polveen sattuu. Kaaduin ovella.</p>
    <p data-osa="perna" data-nimi="jalka · a perna" data-kysy="Sattuuko jalkaan?" data-puhu="Jalkaan sattuu. Juoksin tuolin kanssa!" data-pt="A perna dói. Eu corri com a cadeira!">Jalkaan sattuu. Juoksin tuolin kanssa!</p>
  </div>
  <div class="teema" data-otsikko="O corpo" data-sanat="pää,kurkku,rinta,vatsa,selkä,käsi,jalka,polvi"></div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="bh-sade">
  <h2>Gramática 1 · Dói: <span class="fi">sattuu</span>, <span class="fi">särkee</span>, <span class="fi">kipeä</span></h2>
  <p>Em português, a parte do corpo é o sujeito: “a cabeça dói”, “os joelhos doem”. Em finlandês, os verbos de dor <span class="fi">sattua</span> e <span class="fi">särkeä</span> não têm sujeito: ficam sempre na forma de “ele” (<span class="fi">sattuu, särkee</span>), e a parte do corpo vai para outro caso. Há três jeitos de dizer:</p>
  <table class="taivutus">
    <tr><th>finlandês</th><th>português</th><th>como funciona</th></tr>
    <tr><td><span class="fi">Polveen sattuu.</span></td><td>o joelho dói</td><td><span class="fi">sattuu</span> + a parte do corpo no ilativo, a forma de “para onde?” (lição 6): <span class="fi">polvi → polveen</span></td></tr>
    <tr><td><span class="fi">Päätä särkee.</span></td><td>a cabeça dói (uma dor que lateja, que não passa)</td><td><span class="fi">särkee</span> + a parte do corpo no partitivo (lição 3): <span class="fi">pää → päätä</span></td></tr>
    <tr><td><span class="fi">Minulla on kipeä käsi.</span></td><td>estou com a mão doendo</td><td><span class="fi">minulla on</span> (lição 5) + <span class="fi">kipeä</span> + a forma básica</td></tr>
    <tr><td><span class="fi">Minulla on pää kipeä.</span></td><td>estou com dor de cabeça</td><td>com <span class="fi">pää</span>, o <span class="fi">kipeä</span> vem depois: é o jeito mais comum de dizer “dor de cabeça”</td></tr>
  </table>
  <p>A Maia e a Purjo têm enxaqueca de vez em quando. Para isso há uma palavra só: <span class="fi">Minulla on migreeni.</span> = estou com enxaqueca (forma básica, como <span class="fi">kipeä käsi</span>).</p>
  <p>E a pessoa? Com <span class="fi">sattua</span>, ela vai no partitivo: <span class="fi">Minua sattuu.</span> (está doendo em mim), <span class="fi">Sattuuko sinua?</span> (está doendo?). Também se ouve e se escreve <span class="fi pala">minuun sattuu</span>, com a forma de “para onde?”: as duas são comuns. Para dizer “a minha cabeça”, junte <span class="fi pala">-ni</span> (meu, minha), que você reconhece desde a lição 17: <span class="fi">Päätäni särkee.</span> = <span class="fi">Minun päätäni särkee.</span></p>

  <h3>2. Febre e frio: <span class="fi">minulla on kuumetta</span></h3>
  <p><span class="fi">Minulla on kuumetta.</span> = estou com febre: <span class="fi">kuume</span> (febre) no partitivo, como uma quantidade. A pergunta é <span class="fi">Onko sinulla kuumetta?</span>, e a resposta curta, <span class="fi">On.</span> ou <span class="fi">Ei ole.</span> Frio e calor também vão com <span class="fi">minulla on</span>, sem partitivo: <span class="fi">Minulla on kylmä.</span> (estou com frio).</p>
  <ul class="esim">
    <li class="s" data-pt="Você está com febre?">Onko sinulla kuumetta?</li>
    <li class="s" data-pt="Não. Mas estou com frio.">Ei ole. Mutta minulla on kylmä.</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercício: dói</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. sattuu, särkee ou kipeä? Escolha a forma</h3>
    <p class="ohje">Olhe o verbo: com <span class="fi">sattuu</span>, a parte do corpo vai para “para onde?” e a pessoa para o partitivo; com <span class="fi">särkee</span>, a parte do corpo vai para o partitivo; depois de <span class="fi">minulla on kipeä</span> vem a forma básica.</p>
    <div class="valinta" data-oikea="Polveen">
      <p class="kysymys"><span class="fi">___ sattuu.</span> (o joelho)</p>
      <div class="vaihtoehdot"><button type="button">Polvi</button><button type="button">Polveen</button><button type="button">Polvea</button></div>
    </div>
    <div class="valinta" data-oikea="Päätä">
      <p class="kysymys"><span class="fi">___ särkee.</span> (a cabeça)</p>
      <div class="vaihtoehdot"><button type="button">Päätä</button><button type="button">Päähän</button><button type="button">Pään</button></div>
    </div>
    <div class="valinta" data-oikea="kurkku">
      <p class="kysymys"><span class="fi">Minulla on kipeä ___.</span> (a garganta)</p>
      <div class="vaihtoehdot"><button type="button">kurkkuun</button><button type="button">kurkkua</button><button type="button">kurkku</button></div>
    </div>
    <div class="valinta" data-oikea="Minua">
      <p class="kysymys"><span class="fi">___ sattuu!</span> (dói em mim)</p>
      <div class="vaihtoehdot"><button type="button">Minulla</button><button type="button">Minua</button><button type="button">Minä</button></div>
    </div>
    <div class="valinta" data-oikea="kuumetta">
      <p class="kysymys"><span class="fi">Onko sinulla ___?</span> (febre)</p>
      <div class="vaihtoehdot"><button type="button">kuumetta</button><button type="button">kuumeen</button><button type="button">kuumeeseen</button></div>
    </div>
    <div class="valinta" data-oikea="Selkää">
      <p class="kysymys"><span class="fi">___ särkee.</span> (as costas)</p>
      <div class="vaihtoehdot"><button type="button">Selkään</button><button type="button">Selkä</button><button type="button">Selkää</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="bh-sade">
  <h2>Gramática 2 · O corpo: onde dói?</h2>
  <table class="taivutus">
    <tr><th>o corpo</th><th>onde dói? (<span class="fi">sattuu</span>)</th><th>dói (<span class="fi">särkee</span>)</th></tr>
    <tr><td><span class="fi">pää</span><span class="kaannos" lang="pt-BR">a cabeça</span></td><td><span class="fi">päähän</span></td><td><span class="fi">päätä</span></td></tr>
    <tr><td><span class="fi">vatsa</span><span class="kaannos" lang="pt-BR">a barriga</span></td><td><span class="fi">vatsaan</span></td><td><span class="fi">vatsaa</span></td></tr>
    <tr><td><span class="fi">selkä</span><span class="kaannos" lang="pt-BR">as costas</span></td><td><span class="fi">selkään</span></td><td><span class="fi">selkää</span></td></tr>
    <tr><td><span class="fi">käsi</span><span class="kaannos" lang="pt-BR">a mão, o braço</span></td><td><span class="fi">käteen</span></td><td><span class="fi">kättä</span></td></tr>
    <tr><td><span class="fi">jalka</span><span class="kaannos" lang="pt-BR">a perna, o pé</span></td><td><span class="fi">jalkaan</span></td><td><span class="fi">jalkaa</span></td></tr>
    <tr><td><span class="fi">polvi</span><span class="kaannos" lang="pt-BR">o joelho</span></td><td><span class="fi">polveen</span></td><td><span class="fi">polvea</span></td></tr>
  </table>
  <p>Para a garganta e o peito, use <span class="fi">sattuu</span> ou <span class="fi">kipeä</span>: <span class="fi">Kurkkuun sattuu.</span> <span class="fi">Minulla on kipeä kurkku.</span> Repare: <span class="fi">käsi</span> é a mão e também o braço; <span class="fi">jalka</span> é o pé e também a perna. E <span class="fi">kurkku</span> também é pepino.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios: o corpo</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Onde dói? Complete com a forma de “para onde?”</h3>
    <p class="ohje">A palavra do corpo está entre parênteses. Com <span class="fi">sattuu</span>, ela vai para o ilativo: <span class="fi">polvi → polveen</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Mihin sattuu? – <span class="aukko" data-oikea="Päähän"></span>. <span data-ei-kuplaa>(pää)</span></p>
      <p>Mihin sattuu? – <span class="aukko" data-oikea="Selkään"></span>. <span data-ei-kuplaa>(selkä)</span></p>
      <p>Mihin sattuu? – <span class="aukko" data-oikea="Käteen"></span>. <span data-ei-kuplaa>(käsi)</span></p>
      <p>Mihin sattuu? – <span class="aukko" data-oikea="Kurkkuun"></span>. <span data-ei-kuplaa>(kurkku)</span></p>
      <p>Mihin sattuu? – <span class="aukko" data-oikea="Vatsaan"></span>. <span data-ei-kuplaa>(vatsa)</span></p>
      <p>Mihin sattuu? – <span class="aukko" data-oikea="Jalkaan"></span>. <span data-ei-kuplaa>(jalka)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Ouça o Jay: o que dói?</h3>
    <p class="ohje">Aperte ▶ sem ler e escolha a parte do corpo.</p>
    <div class="valinta" data-kuuntele="Polveen sattuu." data-oikea="o joelho">
      <p class="kysymys">O que dói?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">a cabeça</button><button type="button">o joelho</button><button type="button">as costas</button></div>
    </div>
    <div class="valinta" data-kuuntele="Päätä särkee." data-oikea="a cabeça">
      <p class="kysymys">O que dói?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">a cabeça</button><button type="button">a barriga</button><button type="button">a mão</button></div>
    </div>
    <div class="valinta" data-kuuntele="Minulla on kipeä kurkku." data-oikea="a garganta">
      <p class="kysymys">O que dói?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">o peito</button><button type="button">o joelho</button><button type="button">a garganta</button></div>
    </div>
    <div class="valinta" data-kuuntele="Selkään sattuu." data-oikea="as costas">
      <p class="kysymys">O que dói?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">as costas</button><button type="button">a perna</button><button type="button">a cabeça</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="bh-sade">
  <h2>Gramática 3 · Ordens urgentes (revisão das lições 9 e 14)</h2>
  <table class="taivutus">
    <tr><th>verbo</th><th>para você</th><th>para vocês</th><th>não! (você · vocês)</th></tr>
    <tr><td><span class="fi">liikkua</span><span class="kaannos" lang="pt-BR">mexer-se</span></td><td><span class="fi">Liiku!</span></td><td><span class="fi">Liikkukaa!</span></td><td><span class="fi">Älä liiku! · Älkää liikkuko!</span></td></tr>
    <tr><td><span class="fi">odottaa</span><span class="kaannos" lang="pt-BR">esperar</span></td><td><span class="fi">Odota!</span></td><td><span class="fi">Odottakaa!</span></td><td><span class="fi">Älä odota! · Älkää odottako!</span></td></tr>
    <tr><td><span class="fi">juosta</span><span class="kaannos" lang="pt-BR">correr</span></td><td><span class="fi">Juokse!</span></td><td><span class="fi">Juoskaa!</span></td><td><span class="fi">Älä juokse! · Älkää juosko!</span></td></tr>
    <tr><td><span class="fi">katsoa</span><span class="kaannos" lang="pt-BR">olhar</span></td><td><span class="fi">Katso!</span></td><td><span class="fi">Katsokaa!</span></td><td><span class="fi">Älä katso! · Älkää katsoko!</span></td></tr>
    <tr><td><span class="fi">levätä</span><span class="kaannos" lang="pt-BR">descansar</span></td><td><span class="fi"><span data-l="levätä:imper.2s">Lepää</span>!</span></td><td><span class="fi">Levätkää!</span></td><td>–</td></tr>
  </table>
  <p>Numa emergência, a ordem é curta e vem primeiro: <span class="fi">Apua!</span> (socorro!), <span class="fi">Auta!</span> (me ajude!), <span class="fi">Soita yksi yksi kaksi!</span> (ligue para o 112!). E para combinar o momento, <span class="fi">kun</span> (quando): <span class="fi">Kun minä sanon ”nyt”, juokse!</span> Em português vem “quando eu disser”; em finlandês, o presente simples: <span class="fi">kun minä sanon</span>.</p>
  <div class="huomio">
    <p><b>Armadilhas do brasileiro:</b> 1) “a cabeça dói” não vira <span class="fi pala">pää sattuu</span>: a parte do corpo muda de caso, <span class="fi">päähän sattuu</span> ou <span class="fi">päätä särkee</span>. 2) “Não se mexa!” não tem o “se”: <span class="fi">liikkua</span> já é “mexer-se”, então <span class="fi">Älä liiku!</span> 3) “Estou doente” é <span class="fi">Olen sairas.</span>; “estou com a mão doendo” é <span class="fi">Minulla on kipeä käsi.</span></p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios: ordens e mensagens</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Leia as mensagens da família</h3>
    <p class="ohje">Às oito da noite, a Maia escreve no grupo da família. Em Helsinque já passa da uma da manhã, mas a Purjo não dorme quando o assunto é o Jay. Leia e responda.</p>
    <div class="chat" data-otsikko="Perhe" data-paiva="sunnuntai" data-mina="maia">
      <p data-h="purjo" data-aika="20.05" data-pt="Maia! Alguma notícia nova?">Maia! Onko uutta tietoa?</p>
      <p data-h="maia" data-aika="20.10" data-pt="Oi, Purjo! O Jay está bem. Estamos no pronto-socorro.">Hei Purjo! Jay on kunnossa. Olemme päivystyksessä.</p>
      <p data-h="purjo" data-aika="20.11" data-pt="O quê?! O que aconteceu?">Mitä?! Mitä tapahtui?</p>
      <p data-h="maia" data-aika="20.13" data-pt="O Marcus amarrou o Jay numa cadeira. Mas o Anderson é um herói!">Marcus sitoi Jayn tuoliin. Mutta Anderson on sankari!</p>
      <p data-h="purjo" data-aika="20.14" data-pt="Quem é Marcus?! Jay, me ligue já!">Kuka on Marcus?! Jay, soita minulle heti!</p>
      <p data-h="jay" data-aika="20.15" data-pt="Mãe, calma. Só estou com a mão doendo. E a minha cabeça dói.">Äiti, rauhassa. Minulla on vain kipeä käsi. Ja päätäni särkee.</p>
      <p data-h="purjo" data-aika="20.16" data-pt="(em “inglês de rali”:) Meu Deus! Não vão mais lá! Tomem cuidado!"><span class="pala" lang="en">Oo mai kaad!</span> Älkää menkö enää sinne! Olkaa varovaisia!</p>
      <p data-h="purjo" data-aika="20.16" data-pt="Agora eu estou com enxaqueca.">Nyt minulla on migreeni.</p>
      <p data-h="purjo" data-aika="20.17" data-pt="E obrigada, Anderson!">Ja kiitos, Anderson!</p>
      <p data-h="hiisi" data-aika="20.40" data-pt="Marcus? Devo dirigir até aí?">Marcus? Ajanko sinne?</p>
      <p data-h="hiisi" data-aika="20.40" data-pt="(cara de paisagem)"><span class="emoji">😐</span></p>
    </div>
    <div class="valinta" data-oikea="Päivystyksessä.">
      <p class="kysymys"><span class="fi">Missä Maia ja Jay <span data-l="olla#2">ovat</span>?</span></p>
      <div class="vaihtoehdot"><button type="button">Kotona.</button><button type="button">Päivystyksessä.</button><button type="button">Hotellissa.</button></div>
    </div>
    <div class="valinta" data-oikea="Anderson.">
      <p class="kysymys"><span class="fi">Kuka on sankari?</span></p>
      <div class="vaihtoehdot"><button type="button">Marcus.</button><button type="button">Hiisi.</button><button type="button">Anderson.</button></div>
    </div>
    <div class="valinta" data-oikea="Älkää menkö enää sinne!">
      <p class="kysymys"><span class="fi">Mitä Purjo sanoo Maialle ja Jaylle?</span></p>
      <div class="vaihtoehdot"><button type="button">Älä mene enää sinne!</button><button type="button">Älkää menkö enää sinne!</button><button type="button">Te ette mene enää sinne.</button></div>
    </div>
    <div class="valinta" data-oikea="Ajanko sinne?">
      <p class="kysymys"><span class="fi">Mitä Hiisi kysyy?</span></p>
      <div class="vaihtoehdot"><button type="button">Ajanko sinne?</button><button type="button">Soitanko sinne?</button><button type="button">Tulenko sinne?</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Traduza para o finlandês</h3>
    <p class="ohje">Escreva em finlandês. Depois compare com o modelo.</p>
    <div class="kaanna"><p class="pt">Está doendo! (dói em mim)</p><p class="s" data-pt="Está doendo!">Minua sattuu!</p></div>
    <div class="kaanna"><p class="pt">A minha cabeça dói.</p><p class="s" data-pt="A minha cabeça dói.">Päätäni särkee.</p></div>
    <div class="kaanna"><p class="pt">Estou com dor de garganta.</p><p class="s" data-pt="Estou com dor de garganta.">Minulla on kipeä kurkku.</p></div>
    <div class="kaanna"><p class="pt">Você está com febre?</p><p class="s" data-pt="Você está com febre?">Onko sinulla kuumetta?</p></div>
    <div class="kaanna"><p class="pt">Não se mexa! Espere!</p><p class="s" data-pt="Não se mexa! Espere!">Älä liiku! Odota!</p></div>
    <div class="kaanna"><p class="pt">Venham aqui! Não corram!</p><p class="s" data-pt="Venham aqui! Não corram!">Tulkaa tänne! Älkää juosko!</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. No centro de saúde: responda</h3>
    <p class="ohje">Você está num <span class="fi">terveyskeskus</span> na Finlândia. Responda em voz alta, sobre você, antes de abrir o modelo.</p>
    <details class="vastaus"><summary lang="fi-FI">Mikä hätänä?</summary><p class="s" data-pt="Estou com febre, e a garganta dói.">Minulla on kuumetta, ja kurkkuun sattuu.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mihin sattuu?</summary><p class="s" data-pt="Nas costas.">Selkään.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla kuumetta?</summary><p class="s" data-pt="Não. Mas a minha cabeça dói.">Ei ole. Mutta päätäni särkee.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Milloin se alkoi?</summary><p class="s" data-pt="Ontem à noite.">Eilen illalla.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mikä on Suomen hätänumero?</summary><p class="s" data-pt="Um, um, dois (112).">Yksi yksi kaksi.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kuka hoitaa sinua?</summary><p class="s" data-pt="O médico cuida de mim. Ele vem logo.">Tohtori hoitaa minua. Hän tulee pian.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mikä on syy?</summary><p class="s" data-pt="O motivo é o Marcus! E a cerveja.">Syy on Marcus! Ja olut.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Toimiiko puhelin?</summary><p class="s" data-pt="Funciona. Recebo informação da internet.">Toimii. Saan tietoa netistä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla tietoa Andersonista?</summary><p class="s" data-pt="Tenho. O Anderson salvou o Jay!">On. Anderson pelasti Jayn!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko se paha?</summary><p class="s" data-pt="Não é ruim. Não se preocupe!">Ei ole paha. Älä välitä!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä tohtori sanoo?</summary><p class="s" data-pt="O médico diz: pare com a cerveja e ponha gelo no joelho!">Tohtori sanoo: lopeta olut ja pane jäätä polveen!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Milloin juhla alkoi?</summary><p class="s" data-pt="Ela começou às nove.">Se alkoi kello yhdeksän.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Miksi Jay joutui päivystykseen?</summary><p class="s" data-pt="Ele foi parar no pronto-socorro porque o joelho doía. Que bom que a Marisa estava trabalhando.">Hän joutui päivystykseen, koska polveen sattui. Hyvä juttu, että Marisa oli töissä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kuka pelasti Jayn?</summary><p class="s" data-pt="O Anderson salvou ele. E a Malu é uma boa amiga.">Anderson pelasti hänet. Ja Malu on hyvä kaveri.</p></details>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>UPA e SUS no Brasil; 112 e <span class="fi">terveyskeskus</span> na Finlândia</h3>
  <figure class="kuva" data-kuva="upa"></figure>
  <p>No Brasil, o <b>SUS</b> (Sistema Único de Saúde) é o sistema público de saúde. Ele nasceu da Constituição de 1988 e atende de graça qualquer pessoa que está no país, também um turista finlandês como o Jay. Para doença comum há o posto de saúde (UBS). Para urgência há a <b>UPA 24h</b>, a Unidade de Pronto Atendimento, aberta dia e noite. Na entrada, a equipe faz a classificação de risco: o caso mais grave é atendido primeiro, não quem chegou antes. Os três números de emergência principais são: <b>192</b> (SAMU, a ambulância), <b>193</b> (bombeiros) e <b>190</b> (polícia).</p>
  <p>Na Finlândia, um número só serve para tudo: <b>112</b>, o <span class="fi">hätänumero</span>, que se diz <span class="fi">yksi yksi kaksi</span>. Para doença comum, o <span class="fi">terveyskeskus</span> (centro de saúde) da região: liga-se de manhã e marca-se uma consulta. À noite e no fim de semana, a <span class="fi">päivystys</span>, o pronto-socorro, muitas vezes num hospital. Quem não sabe se é urgente pode ligar para o <b>116 117</b>, um telefone de orientação: um profissional de saúde diz se você precisa ir e para onde. Às vezes se paga uma taxa pequena; o resto vem dos impostos, como no SUS.</p>
  <p>A primeira pergunta, nos dois países, é quase a mesma. Em português, “o que houve?”; em finlandês, <span class="fi">Mikä hätänä?</span> E a resposta você já sabe dar: <span class="fi">Polveen sattuu.</span></p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3><span class="fi" data-rekisteri="puhe">Mua sattuu!</span> <span class="fi">Älä hätäile!</span></h3>
  <p>Na fala, <span class="fi">minua</span> encolhe para <span class="fi" data-rekisteri="puhe">mua</span>, e <span class="fi">minun</span> para <span class="fi" data-rekisteri="puhe">mun</span>, como <span class="fi" data-rekisteri="puhe">mä</span> no lugar de <span class="fi">minä</span>. E o <span class="fi pala">-ni</span> do “meu” quase sempre cai: <span class="fi" data-rekisteri="puhe">mun päätä särkee</span>. Quem acalma o outro diz <span class="fi">Älä hätäile!</span> (não se afobe!), da mesma família de <span class="fi">hätä</span> (lição 14). Você não precisa falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">Minua sattuu!</span></td><td><span class="fi" data-rekisteri="puhe">Mua sattuu!</span></td><td>está doendo!</td></tr>
    <tr><td><span class="fi">Minun päätäni särkee.</span></td><td><span class="fi" data-rekisteri="puhe">Mun päätä särkee.</span></td><td>a minha cabeça dói</td></tr>
  </table>
  <p class="s" data-h="jay" data-kirja="Minua sattuu! Minun päätäni särkee." data-pt="Está doendo! A minha cabeça dói.">Mua sattuu! Mun päätä särkee.</p>
  <p class="s" data-h="maia" data-kirja="Älä hätäile. Ei se ole mitään." data-pt="Não se afobe. Não é nada.">Älä hätäile. Ei se mitään.</p>
  <p class="s" data-h="jay" data-kirja="Kyllä, minä olen aivan kunnossa." data-pt="É, eu estou bem mesmo.">Joo, mä oon ihan kunnossa.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="bh-bairro">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t18">
    <h3>Lição de casa</h3>
    <p>Você está doente e não vai trabalhar hoje. Escreva uma mensagem para um colega, em finlandês: o que dói (uma frase com <span class="fi">sattuu</span> e uma com <span class="fi">särkee</span> ou <span class="fi">minulla on kipeä…</span>), se você tem febre, e uma ordem para a equipe com <span class="fi">älkää</span>. Depois leia em voz alta, com o <span class="fi pala">r</span> vibrante.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia, para a colega Kaisa)</summary>
      <p class="s" data-pt="Oi, Kaisa! Hoje estou em casa.">Hei Kaisa! Olen tänään kotona.</p>
      <p class="s" data-pt="Estou com febre, e a garganta dói.">Minulla on kuumetta, ja kurkkuun sattuu.</p>
      <p class="s" data-pt="A minha cabeça dói, e estou com dor nas costas.">Päätäni särkee, ja minulla on kipeä selkä.</p>
      <p class="s" data-pt="Diga para a equipe que estou doente.">Kerro tiimille, että olen sairas.</p>
      <p class="s" data-pt="Não me liguem hoje!">Älkää soittako minulle tänään!</p>
      <p class="s" data-pt="Um abraço, Maia">Terveisin Maia</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t18">
    <li>Entendo e dou ordens urgentes: Älä liiku! Odota! Juokse! Juoskaa!</li>
    <li>Monto um plano com kun: Kun minä sanon ”nyt”, juokse!</li>
    <li>Digo onde dói: Minua sattuu. Polveen sattuu.</li>
    <li>Digo Päätäni särkee e Minulla on kipeä käsi.</li>
    <li>Pergunto e respondo: Onko sinulla kuumetta? – Ei ole.</li>
    <li>Conheço as partes do corpo: pää, kurkku, vatsa, selkä, käsi, jalka, polvi.</li>
    <li>Pronuncio o r vibrante no começo da palavra: radio, rauhassa, rohkea.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'sattuu18', otsikko: 'Onde dói? Polveen sattuu, minua sattuu', taso: 'essencial', hakuosa: 'h-sattuu', treeni: 't18-sattuu',
      html: `
<p><b>Forma:</b> <span class="fi">sattuu</span> (sempre a forma de “ele”) + a parte do corpo no <b>ilativo</b>, a forma de “para onde?”: <span class="fi">Polveen sattuu.</span> (o joelho dói). A pessoa vai no partitivo: <span class="fi">Minua sattuu.</span> A pergunta: <span class="fi">Mihin sattuu?</span> (onde dói?), <span class="fi">Sattuuko sinua?</span> (está doendo?).</p>
<div class="sijataulu" data-sana="polvi" data-sijat="nominatiivi,illatiivi"></div>
<ul class="esim">
  <li class="s" data-pt="Onde dói? – No joelho.">Mihin sattuu? – Polveen.</li>
  <li class="s" data-pt="A barriga dói.">Vatsaan sattuu.</li>
</ul>`
    },
    {
      id: 'sarkee18', otsikko: 'Päätäni särkee, minulla on kipeä käsi', taso: 'essencial', hakuosa: 'h-sattuu', treeni: 't18-sattuu',
      html: `
<p><b><span class="fi">särkee</span> + partitivo:</b> uma dor que lateja, que não passa: <span class="fi">Päätä särkee.</span> Com <span class="fi pala">-ni</span> (meu, minha, lição 17): <span class="fi">Päätäni särkee.</span></p>
<p><b><span class="fi">minulla on kipeä</span> + forma básica:</b> <span class="fi">Minulla on kipeä käsi.</span> (estou com a mão doendo), <span class="fi">Minulla on kipeä kurkku.</span> (estou com dor de garganta).</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Päätä särkee.</span></td><td>a cabeça dói</td></tr>
  <tr><td><span class="fi">Selkää särkee.</span></td><td>as costas doem</td></tr>
  <tr><td><span class="fi">Minulla on kipeä polvi.</span></td><td>estou com o joelho doendo</td></tr>
</table>`
    },
    {
      id: 'kuume18', otsikko: 'Minulla on kuumetta: febre e frio', taso: 'frase pronta', hakuosa: 'h-sattuu', treeni: 'tilanne-terveyskeskus',
      html: `
<p><span class="fi">Minulla on kuumetta.</span> = estou com febre (<span class="fi">kuume</span> no partitivo). Pergunta: <span class="fi">Onko sinulla kuumetta?</span> Resposta curta: <span class="fi">On.</span> / <span class="fi">Ei ole.</span> Frio e calor: <span class="fi">Minulla on kylmä. Minulla on kuuma.</span></p>
<ul class="esim">
  <li class="s" data-pt="O que houve? – Estou com febre.">Mikä hätänä? – Minulla on kuumetta.</li>
</ul>`
    },
    {
      id: 'keho18', otsikko: 'O corpo: pää, kurkku, vatsa, käsi, jalka, polvi', taso: 'essencial', hakuosa: 'h-sattuu', treeni: 't18-keho',
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">pää</span></td><td>a cabeça</td></tr>
  <tr><td><span class="fi">kurkku</span></td><td>a garganta (e o pepino)</td></tr>
  <tr><td><span class="fi">rinta</span></td><td>o peito</td></tr>
  <tr><td><span class="fi">vatsa</span></td><td>a barriga</td></tr>
  <tr><td><span class="fi">selkä</span></td><td>as costas</td></tr>
  <tr><td><span class="fi">käsi</span></td><td>a mão, o braço</td></tr>
  <tr><td><span class="fi">jalka</span></td><td>a perna, o pé</td></tr>
  <tr><td><span class="fi">polvi</span></td><td>o joelho</td></tr>
</table>
<p>As formas de que você precisa para a dor:</p>
<div class="sijataulu" data-sana="pää" data-sijat="nominatiivi,partitiivi,illatiivi"></div>
<div class="sijataulu" data-sana="käsi" data-sijat="nominatiivi,partitiivi,illatiivi"></div>`
    },
    {
      id: 'hatakasky18', otsikko: 'Ordens urgentes: Älä liiku! Juokse! Juoskaa!', taso: 'revisão', hakuosa: 'h-imperatiivi', treeni: 't18-hatakasky',
      html: `
<p>Para você: <span class="fi">Odota! Juokse!</span> · para vocês: <span class="fi">Odottakaa! Juoskaa!</span> · não!: <span class="fi">Älä liiku!</span>, <span class="fi">Älkää liikkuko!</span> Para combinar o momento: <span class="fi">Kun minä sanon ”nyt”, juokse!</span> (“quando eu disser” = <span class="fi">kun minä sanon</span>, no presente).</p>
<table class="taivutus">
  <tr><th>para você</th><th>para vocês</th><th>português</th></tr>
  <tr><td><span class="fi">Älä liiku!</span></td><td><span class="fi">Älkää liikkuko!</span></td><td>não se mexa! · não se mexam!</td></tr>
  <tr><td><span class="fi">Odota!</span></td><td><span class="fi">Odottakaa!</span></td><td>espere! · esperem!</td></tr>
  <tr><td><span class="fi">Juokse!</span></td><td><span class="fi">Juoskaa!</span></td><td>corra! · corram!</td></tr>
  <tr><td><span class="fi">Auta!</span></td><td><span class="fi">Auttakaa!</span></td><td>me ajude! · me ajudem!</td></tr>
</table>`
    },
    {
      id: 'aantaminen18', otsikko: 'Pronúncia: o r vibra também no começo', taso: 'atenção', hakuosa: 'h-aakkoset',
      html: `
<p>O <span class="fi pala">r</span> finlandês é sempre da ponta da língua, que vibra, também no começo: <span class="fi">radio, rauhassa, rohkea, ravintola</span>. Nunca o h de “rádio” em português. Truque: o <span class="fi pala">r</span> de “três”, sem o t.</p>
<ul class="esim">
  <li class="s" data-pt="ferro · túmulo">rauta – hauta</li>
  <li class="s" data-pt="Calma, Jay!">Rauhassa, Jay!</li>
</ul>`
    },
    {
      id: 'sudenkuopat18', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>A parte do corpo não é sujeito:</b> <span class="fi">päähän sattuu</span>, <span class="fi">päätä särkee</span>, nunca <span class="pala">pää sattuu</span>.</li>
  <li><b>O verbo da dor não muda:</b> <span class="fi">sattuu</span> e <span class="fi">särkee</span> ficam na forma de “ele”, mesmo com duas pernas.</li>
  <li><b>Sem “se”:</b> “não se mexa!” = <span class="fi">Älä liiku!</span></li>
  <li><b>Doente ou dolorido:</b> <span class="fi">Olen sairas.</span> (estou doente) · <span class="fi">Minulla on kipeä käsi.</span> (a mão dói).</li>
  <li><b>O r do começo:</b> <span class="fi">rauhassa</span>, nunca <span class="pala">hauhassa</span>.</li>
</ul>`
    }
  ]
});
