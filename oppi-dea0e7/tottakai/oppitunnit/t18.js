/* Tottakai, lição 18: Perigo! Ipanema ja UPA (Passon jakso 18 Maian näkökulmasta). Oma materiaali, ei kirjan tekstiä.
   Kurssisuunnitelma: docs/RUNKO_13_20.md §7 ”Lesson 18”; tarinan kalenteri: ke 30.12.2026, Rio de Janeiro (oppitunti 17 =
   ti 29.12. Copacabana; oppitunti 19 = to 31.12. uusi vuosi Copacabanalla).
   Materiaalivaihe 8.11.2026 (ass/oppitunnit/t18.md §6): omistajan lukitsemat dialogit ass/luonnokset/t18-a-1_lopullinen.md
   ja t18-b-1_lopullinen.md sellaisinaan (suomi ja portugali; Marisan ja Maian virheet data-hairio). Vanha tarina (Morro
   do Cascalho, Marcus ja mikroaaltouuni, Cida, radiopelastus, Anderson sankarina, Marisa UPA:n hoitajana) on poissa:
   pelastus on oppitunnilla 15 B.
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t18, ”Parte A · Encontro”): Ipanema, rantavahdin punainen lippu; dialogi A ”Perigo!” salakielen
     kehyksessä (.salakieli.sk-radio.sk-meri, t11:n komponentti; t18:n radioversio sovitettu: kuulija on rantavahti,
     joka puhuu vain portugalia, ja suomi kuuluu hänen korvallaan meren kohinana ”chhh… chuá…”; tyyli tottakai.css t18);
     Frases prontas; tehtävä 1 (ymmärtäminen); teemasanasto → tehtävä 2 (yhdistä); ääntäminen (r myös sanan alussa:
     Maian ”hauhassa”, Jayn korjaus); kielioppi 1 hätäkäskyt (sinä ja te, älä/älkää, kun + preesens, objekti käskyssä)
     → tehtävät 3 (kuuntelu), 4 (perheen chat autossa matkalla UPA:an: Purjo, entinen sairaanhoitaja, neuvoo te-käskyin;
     Hiisi ”Ajanko sinne?” 😐 kerran) ja 5 (käännös).
   - osa B (#t18-b, ”Parte B · Aprofundar e fechar”): UPA Copacabanassa; dialogi B ”Mihin sattuu?” (sairaanhoitaja puhuu
     vain portugalia, Maia kääntää; Maian virhe ”Missä sattuu?”, Jayn korjaus); Frases prontas; kikka .keho (Jayn keho
     UPA:ssa; Maia kääntää hoitajan kysymykset, data-kysy ja data-kaannokset); kielioppi 2 kipu (sattuu + illatiivi,
     Minuun sattuu, särkee + partitiivi, minulla on käsi kipeä / kipeä käsi, kuumetta) → tehtävä 6; kielioppi 3 keho
     (nilkka lisätty) → tehtävät 7–8; kulttuuri (UPA ja SUS; 112, terveyskeskus, päivystys; kuva upa) → tehtävät 9–10;
     Na rua (Muhun sattuu! Mun päätä särkee. Älä hätäile!); kotitehtävä; itsearvio.
   Suomea puhuvat Maia, Jay, Marisa (hoono soomi, data-hairio), Purjo ja Hiisi (chat) ja kertoja; rantavahti ja
   sairaanhoitaja (taustahahmoja, npc) puhuvat vain portugalia. Marisan avain on malu (kuten t16–t17). Sattua-verbin
   persoona on ”Minuun sattuu” (lukittu dialogi; ei äänitetä ennen omistajan sanakirjatarkistusta, PAATOKSET 24.10.2026).
   Omistusliite -ni vain tunnistettavana valmiina ilmauksena (päätäni, jalkani, suunnitelmani; lição 17). Ei perfektiä
   (t19). Lepää ja juo käskyinä on kiinnitetty data-l:llä (muuten kupla tulkitsisi ne preesensiksi). Migreeni jää
   (omistaja 20.10.2026: Purjo kirjoittaa ”Nyt minulla on migreeni”). Kirjakieli; puhekieli vain Na rua -nurkassa. */
Kurssi.lisaa({
  id: 't18',
  lyhyt: '18',
  jakso: 'Lição 18',
  otsikko: 'Perigo! Ipanema e a UPA: dor, corpo e ordens urgentes',
  lahde: 'Tema: Ipanema, o salva-vidas e a UPA de Copacabana · Gramática: ordens urgentes (revisão: Älä juokse! Odota! Älkää menkö veteen! Juoskaa!), kun + presente, onde dói (minuun sattuu, jalkaan sattuu, päätäni särkee, minulla on käsi kipeä, minulla on kuumetta), as partes do corpo · Pronúncia: o r vibrante também no começo da palavra (Rio, ranta, rauhassa)',
  aiheet: ['keho', 'toiminta', 'ihmiset', 'tunteet'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; traduz o salva-vidas na praia e a enfermeira na UPA' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; o plano do dia é não levantar; torce o pé com o isopor e sai da UPA de muletas' },
    malu: { nimi: 'Marisa', tyyppi: 'nainen', vaihto: 5, kuvaus: 'amiga da Maia; mora em Copacabana, leva o isopor e chama o carro para a UPA' },
    salvavidas: { nimi: 'Salva-vidas', tyyppi: 'mies', vaihto: 7, npc: true, kuvaus: 'salva-vidas de Ipanema; fala só português' },
    sairaanhoitaja: { nimi: 'Enfermeira', tyyppi: 'nainen', vaihto: 5, npc: true, kuvaus: 'enfermeira da UPA de Copacabana; fala só português' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; foi enfermeira e dá ordens pelo celular, de Helsinque' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; resolve tudo dirigindo' }
  },

  sanasto: [
    'rantavahti', 'rantaperuna', 'laiska', 'liikkua', 'hiljaa', 'rauhassa', 'varovainen', 'toimia', 'pelastaa', 'kiinni',
    'sattua', 'särkeä', 'kipeä', 'kuume', 'pää', 'kurkku', 'vatsa', 'selkä', 'rinta', 'käsi', 'jalka', 'polvi', 'nilkka',
    'kainalosauva', 'kaatua', 'sitoa', 'levätä', 'mitata', 'hätäillä', 'kunnossa', 'vakava', 'hoitaa', 'syy', 'tieto',
    'terveyskeskus', 'päivystys', 'hätänumero'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Encontro',
      html: `
<ul class="tavoitteet">
  <li>Você entende e dá ordens urgentes: <span class="fi">Älä juokse! Odota! Älä liiku!</span> e, para vocês, <span class="fi">Juoskaa!</span></li>
  <li>Você monta um plano com <span class="fi">kun</span>: <span class="fi">Kun minä sanon ”nyt”, juoskaa!</span></li>
  <li>Você pronuncia o <span class="fi pala">r</span> vibrante também no começo da palavra: <span class="fi">Rio, ranta, rauhassa</span>.</li>
  <li>Você revisa as ordens para vocês: <span class="fi">Älkää menkö veteen! Olkaa varovaisia!</span></li>
</ul>
<p data-paikka="ipanema-salva-vidas">Quarta-feira, 30 de dezembro. Ontem, depois de sumir no calçadão, o Jay prometeu: nenhum passo sem a Maia. Hoje ele cumpre a promessa do jeito dele: nenhum passo. A Marisa leva os dois a Ipanema, a praia preferida dela, com um isopor cheio de cerveja e gelo. Ao lado do posto do salva-vidas, a bandeira está vermelha: hoje o mar está perigoso.</p>

<section class="osio" data-paikka="ipanema-salva-vidas">
  <h2>Diálogo A: <span lang="pt-BR">Perigo!</span></h2>
  <p class="ohje">Duas línguas na mesma praia. O salva-vidas só fala português: primeiro ouça com o ouvido dele, e o finlandês vira barulho de mar. Depois troque para o ouvido da Maia e entenda as ordens: <span class="fi">Älkää menkö veteen! Älä juokse! Odota!</span> E, no fim, o plano com <span class="fi">kun</span>. Na segunda vez, ligue a <b>Tradução</b>.</p>
  <div class="salakieli sk-radio sk-meri" data-kuulija="salvavidas" data-kuiskaajat="maia,jay,malu" data-korva-kuulija="👂 Ouvido do salva-vidas"
       data-ohje-kuulija="Ouvido do salva-vidas: ele só fala português. O finlandês da Maia, do Jay e da Marisa, para ele, é só “chhh… chuá…”, como o mar. Toque em 👂 Ouvido da Maia para entender o finlandês.">
    <p class="sk-radiopaa" lang="pt-BR"><span class="emoji">🚩</span> Posto do salva-vidas · Ipanema · bandeira vermelha</p>
    <div class="kpl" id="t18-dialogi-a" data-nimi="Ouvir o diálogo A">
      <p class="s" data-h="kertoja" data-pt="É quarta-feira e são onze horas. Em Ipanema está quente e há milhares de pessoas. Os vendedores gritam: Mate! Açaí! Queijo coalho!">On keskiviikko ja kello on yksitoista. Ipanemalla on kuuma ja tuhansia ihmisiä. Myyjät huutavat: <span lang="pt-BR">Mate! Açaí! Queijo coalho!</span></p>
      <p class="s" data-h="malu" data-pt="Ipanema é o melhor lugar do Rio! Eu levar um isopor e cerveja gelada. (errado de propósito)">Ipanema on Rion paras paikka! Minä <span data-hairio="otin">ottaa</span> <span data-hairio="kylmälaukun">kylmälaukku</span> mukaan ja kylmää olutta.</p>
      <p class="s" data-h="kertoja" data-pt="O Jay está deitado debaixo do guarda-sol. Está quente e hoje ele não quer fazer nada.">Jay makaa sateenvarjon alla. On kuuma ja tänään hän ei halua tehdä mitään.</p>
      <p class="s" data-h="jay" data-pt="Hoje eu tenho um bom plano. Eu não levanto o dia todo.">Tänään minulla on hyvä suunnitelma. Minä en nouse koko päivänä.</p>
      <p class="s" data-h="kertoja" data-pt="Ao lado da bandeira vermelha está o salva-vidas. Ele grita para as pessoas na água: Perigo! Saiam da água!">Punaisen lipun vieressä on rantavahti. Hän huutaa ihmisille vedessä: <span lang="pt-BR">Perigo! Saiam da água!</span></p>
      <p class="s" data-h="maia" data-pt="Jay! Ele está dizendo: Não entrem na água! Tomem cuidado!">Jay! Hän sanoo: Älkää menkö veteen! Olkaa varovaisia!</p>
      <p class="s" data-h="jay" data-pt="Certo. Eu não vou entrar na água. Eu nem levanto. Eu fico deitado aqui o dia todo.">Selvä. Minä en mene veteen. Minä en edes nouse. Minä makaan tässä koko päivän.</p>
      <p class="s" data-h="salvavidas" data-pt="Pessoal, não corram!"><span lang="pt-BR">Pessoal, não corram!</span></p>
      <p class="s" data-h="maia" data-pt="Jay, não corra!">Jay, älä juokse!</p>
      <p class="s" data-h="jay" data-pt="Maia, eu nunca corro.">Maia, minä en juokse koskaan.</p>
      <p class="s" data-h="malu" data-pt="O Jay é um bom menino. Ele obedece todo mundo. (errado de propósito)">Jay on hyvä poika. Hän tottelee <span data-hairio="kaikkia">kaikki</span>.</p>
      <p class="s" data-h="maia" data-pt="Ele não obedece, ele é preguiçoso. Ele só quer ficar deitado.">Hän ei tottele, hän on laiska. Hän haluaa vain maata.</p>
      <p class="s" data-h="jay" data-pt="É verdade. Eu só me mexo quando vejo uma pedra bonita ou uma cerveja gelada.">Se on totta. Minä liikun vain, kun näen kauniin kiven tai kylmän oluen.</p>
      <p class="s" data-h="maia" data-pt="Batata de praia!">Rantaperuna!</p>
      <p class="s" data-h="kertoja" data-pt="Uma hora depois está ainda mais quente. O Jay está com sede, mas não levanta.">Tunnin päästä on vielä kuumempi. Jayllä on jano, mutta hän ei nouse.</p>
      <p class="s" data-h="jay" data-pt="Maia, você poderia me dar uma cerveja?">Maia, voisitko antaa minulle oluen?</p>
      <p class="s" data-h="maia" data-pt="O isopor está bem aí. Pega você mesmo.">Kylmälaukku on aivan tuossa. Ota itse.</p>
      <p class="s" data-h="jay" data-pt="Não vou levantar. Mas eu tenho pernas compridas.">En nouse. Mutta minulla on pitkät jalat.</p>
      <p class="s" data-h="kertoja" data-pt="O Jay tenta levantar o isopor com o pé. No isopor há doze cervejas e muito gelo.">Jay yrittää nostaa kylmälaukun jalalla. Laukussa on kaksitoista olutta ja paljon jäätä.</p>
      <p class="s" data-h="maia" data-pt="Jay, espera!">Jay, odota!</p>
      <p class="s" data-h="kertoja" data-pt="O isopor cai e o pé do Jay torce debaixo dele.">Laukku kaatuu ja Jayn jalka kääntyy sen alla.</p>
      <p class="s" data-h="jay" data-pt="Ai! O meu pé! E todas as cervejas estão na areia!">Ai! Jalkani! Ja kaikki oluet ovat hiekassa!</p>
      <p class="s" data-h="maia" data-pt="Não se mexa, Jay! Espera com calma. (errado de propósito: a Maia diz o r como h)">Älä liiku, Jay! Odota <span class="pala" data-hairio="rauhassa">hauhassa</span>.</p>
      <p class="s" data-h="jay" data-pt="Rauhassa. O r do finlandês não é h.">Rauhassa. Suomen <span class="pala">r</span> ei ole <span class="pala">h</span>.</p>
      <p class="s" data-h="maia" data-pt="Marisa, corre! Chama o salva-vidas!">Marisa, juokse! Hae rantavahti!</p>
      <p class="s" data-h="kertoja" data-pt="O salva-vidas já vem correndo. Hoje ele salva só um homem. O homem não está na água, e sim na areia.">Rantavahti juoksee jo tänne. Tänään hän pelastaa vain yhden miehen. Mies ei ole vedessä vaan hiekalla.</p>
      <p class="s" data-h="kertoja" data-pt="Ele olha o pé do Jay e diz: Não é grave. Mas andar, hoje não.">Hän katsoo Jayn jalkaa ja sanoo: <span lang="pt-BR">Não é grave. Mas andar, hoje não.</span></p>
      <p class="s" data-h="maia" data-pt="Ele diz que não é grave. Mas hoje você não pode andar.">Hän sanoo, että se ei ole vakava. Mutta sinä et voi kävellä tänään.</p>
      <p class="s" data-h="jay" data-pt="Ótimo. O meu plano funciona.">Hyvä. Suunnitelmani toimii.</p>
      <p class="s" data-h="malu" data-pt="Eu chamar um carro para a UPA. É o pronto-atendimento em Copacabana. (errado de propósito)">Minä <span data-hairio="soitan">soittaa</span> <span data-hairio="auton">auto</span> UPA:an. Se on päivystys Copacabanassa.</p>
      <p class="s" data-h="maia" data-pt="Quando eu disser “agora”, levantem o Jay e corram para o carro!">Kun minä sanon ”nyt”, nostakaa Jay ja juoskaa autolle!</p>
      <p class="s" data-h="kertoja" data-pt="Quando a Maia diz “agora”, a Marisa e o salva-vidas levantam o Jay e correm para a rua.">Kun Maia sanoo ”nyt”, Marisa ja rantavahti nostavat Jayn ja juoksevat tielle.</p>
      <p class="s" data-h="jay" data-pt="Não esqueçam o isopor!">Älkää unohtako kylmälaukkua!</p>
      <p class="s" data-h="kertoja" data-pt="O salva-vidas salva também o isopor. O carro leva todos para a UPA.">Rantavahti pelastaa myös kylmälaukun. Auto vie heidät UPA:an.</p>
    </div>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Älkää menkö veteen! Olkaa varovaisia!</span> = não entrem na água! tomem cuidado! · a ordem para vocês: <span class="fi">älkää</span> + <span class="fi pala">-ko/-kö</span> (lição 14)</li>
      <li><span class="fi">Älä juokse!</span> = não corra! · para uma pessoa: <span class="fi">älä</span> + a forma do “não” (lição 9)</li>
      <li><span class="fi">Hän ei tottele, hän on laiska.</span> = ele não obedece, ele é preguiçoso · <span class="fi">totella</span> = obedecer (lição 14)</li>
      <li><span class="fi">Minä liikun vain, kun näen kylmän oluen.</span> = eu só me mexo quando vejo uma cerveja gelada · <span class="fi">liikkua</span> = mexer-se, sem “se”</li>
      <li><span class="fi">Ota itse.</span> = pega você mesmo · <span class="fi">itse</span> = (você) mesmo</li>
      <li><span class="fi">Odota rauhassa.</span> = espera com calma · <span class="fi">rauhassa</span> = com calma; o <span class="fi pala">r</span> vibra no começo (Pronúncia, abaixo)</li>
      <li><span class="fi">Se ei ole vakava.</span> = não é grave · <span class="fi">Suunnitelmani toimii.</span> = o meu plano funciona (<span class="fi pala">-ni</span> = meu, lição 17)</li>
      <li><span class="fi">Kun minä sanon ”nyt”, nostakaa Jay!</span> = quando eu disser “agora”, levantem o Jay! · “quando eu disser” = <span class="fi">kun minä sanon</span>, no presente (Gramática 1)</li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="ipanema-salva-vidas">
  <h2>Exercício: o diálogo A</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Você entendeu o diálogo A?</h3>
    <p class="ohje">Volte ao diálogo, com o ouvido da Maia, se precisar.</p>
    <div class="valinta" data-oikea="Ipanema.">
      <p class="kysymys"><span class="fi">Mikä on Marisan mielestä Rion paras paikka?</span></p>
      <div class="vaihtoehdot"><button type="button">Copacabana.</button><button type="button">Ipanema.</button><button type="button">UPA.</button></div>
    </div>
    <div class="valinta" data-oikea="Hän ei nouse koko päivänä.">
      <p class="kysymys"><span class="fi">Mikä on Jayn suunnitelma?</span></p>
      <div class="vaihtoehdot"><button type="button">Hän menee veteen.</button><button type="button">Hän juoksee rannalla.</button><button type="button">Hän ei nouse koko päivänä.</button></div>
    </div>
    <div class="valinta" data-oikea="Punainen.">
      <p class="kysymys"><span class="fi">Millainen lippu on rantavahdin vieressä?</span></p>
      <div class="vaihtoehdot"><button type="button">Punainen.</button><button type="button">Sininen.</button><button type="button">Keltainen.</button></div>
    </div>
    <div class="valinta" data-oikea="Kylmälaukun.">
      <p class="kysymys"><span class="fi">Mitä Jay yrittää nostaa jalalla?</span></p>
      <div class="vaihtoehdot"><button type="button">Sateenvarjon.</button><button type="button">Kylmälaukun.</button><button type="button">Kiven.</button></div>
    </div>
    <div class="valinta" data-oikea="Marisa.">
      <p class="kysymys"><span class="fi">Kuka soittaa auton?</span></p>
      <div class="vaihtoehdot"><button type="button">Maia.</button><button type="button">Rantavahti.</button><button type="button">Marisa.</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="ipanema-salva-vidas">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="Na praia e na emergência" data-sanat="ranta,hiekka,sateenvarjo,kylmälaukku,lippu,rantavahti,laiska,rantaperuna,liikkua,pelastaa,varovainen,vakava"></div>
  <p>As outras palavras da lição estão no <a href="#t18-vocabulario">Vocabulário da lição</a>.</p>
  <p>Uma palavra nova da Maia: <span class="fi">rantaperuna</span> = <span class="fi">ranta</span> (praia) + <span class="fi">peruna</span> (batata), como <span class="fi">sohvaperuna</span> (lições 7 e 17), o preguiçoso de sofá. E <span class="fi">rantavahti</span>, o salva-vidas, é palavra por palavra “o salvador da vida”.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="ipanema-salva-vidas">
  <h2>Exercício: as palavras</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Ligue a palavra à tradução</h3>
    <ul class="yhdista">
      <li data-pari="salva-vidas">rantavahti</li>
      <li data-pari="isopor">kylmälaukku</li>
      <li data-pari="guarda-sol">sateenvarjo</li>
      <li data-pari="areia">hiekka</li>
      <li data-pari="bandeira">lippu</li>
      <li data-pari="preguiçoso">laiska</li>
      <li data-pari="batata de praia">rantaperuna</li>
      <li data-pari="pronto-atendimento">päivystys</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="arpoador">
  <h2>Pronúncia: o <span class="fi pala">r</span> vibra também no começo</h2>
  <p>Na lição 6 você treinou o <span class="fi pala">r</span> vibrante. No começo da palavra, porém, o ouvido brasileiro volta ao hábito: em português, “Rio” e “rápido” começam com um som de h. No susto, a Maia disse <span class="pala">hauhassa</span>, e o Jay, deitado na areia com o pé torcido, ainda corrigiu: <span class="fi">Suomen <span class="pala">r</span> ei ole <span class="pala">h</span>.</span> Em finlandês, o <span class="fi pala">r</span> é sempre da ponta da língua, que vibra uma ou mais vezes, em qualquer lugar da palavra: no começo, no meio e antes de consoante. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="Rio">Rio</li>
    <li class="s" data-pt="praia">ranta</li>
    <li class="s" data-pt="com calma">rauhassa</li>
    <li class="s" data-pt="batata de praia">rantaperuna</li>
    <li class="s" data-pt="Espera com calma.">Odota rauhassa.</li>
    <li class="s" data-pt="Ipanema é o melhor lugar do Rio!">Ipanema on Rion paras paikka!</li>
  </ul>
  <p>Com <span class="fi pala">h</span> no lugar do <span class="fi pala">r</span>, a palavra vira outra:</p>
  <table class="taivutus">
    <tr><th>com r</th><th>com h</th><th>português</th></tr>
    <tr><td><span class="fi">rauta</span></td><td><span class="fi">hauta</span></td><td>ferro · túmulo</td></tr>
    <tr><td><span class="fi">rinta</span></td><td><span class="fi">hinta</span></td><td>peito · preço</td></tr>
    <tr><td><span class="fi">riisi</span></td><td><span class="fi">Hiisi</span></td><td>arroz · o irmão do Jay</td></tr>
  </table>
  <div class="saanto">
    <h3>Truque: o r de “três”</h3>
    <p>O português já tem o som certo, só que em outro lugar: o <span class="fi pala">r</span> de “três”, “caro” e “prato” é um toque da ponta da língua atrás dos dentes de cima. Diga “três” devagar, depois tire o t: <span class="fi pala">rrr</span>. Agora ponha esse <span class="fi pala">r</span> no começo da palavra e deixe a língua bater duas ou três vezes: <span class="fi pala">r-r-rauhassa</span>, <span class="fi pala">r-r-ranta</span>. O ar não sai pela garganta, como no h.</p>
  </div>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o <span class="fi pala">r</span> do começo vira h, e o <span class="fi pala">r</span> antes de consoante também (<span class="fi">kurkku</span> não é “kuhku”). Em finlandês não há r de garganta: o <span class="fi pala">r</span> é o mesmo em <span class="fi">Rio</span>, <span class="fi">Marisa</span> e <span class="fi">kurkku</span>.</p>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="arpoador">
  <h2>Gramática 1 · Ordens urgentes (revisão das lições 9 e 14) e o plano com <span class="fi">kun</span></h2>
  <p>As ordens do diálogo A são as das lições 9 e 14. Para uma pessoa: a forma sem terminação (<span class="fi">Odota! Juokse!</span>); para duas ou mais: <span class="fi pala">-kaa/-kää</span> (<span class="fi">Juoskaa! Nostakaa!</span>). Proibir: <span class="fi">älä</span> + a forma do “não” (<span class="fi">Älä liiku!</span>), para vocês <span class="fi">älkää</span> + <span class="fi pala">-ko/-kö</span> (<span class="fi">Älkää menkö veteen!</span>).</p>
  <table class="taivutus">
    <tr><th>verbo</th><th>para você</th><th>para vocês</th><th>não! (você · vocês)</th></tr>
    <tr><td><span class="fi">mennä</span><span class="kaannos" lang="pt-BR">ir</span></td><td><span class="fi">Mene!</span></td><td><span class="fi">Menkää!</span></td><td><span class="fi">Älä mene! · Älkää menkö!</span></td></tr>
    <tr><td><span class="fi">juosta</span><span class="kaannos" lang="pt-BR">correr</span></td><td><span class="fi">Juokse!</span></td><td><span class="fi">Juoskaa!</span></td><td><span class="fi">Älä juokse! · Älkää juosko!</span></td></tr>
    <tr><td><span class="fi">odottaa</span><span class="kaannos" lang="pt-BR">esperar</span></td><td><span class="fi">Odota!</span></td><td><span class="fi">Odottakaa!</span></td><td><span class="fi">Älä odota! · Älkää odottako!</span></td></tr>
    <tr><td><span class="fi">liikkua</span><span class="kaannos" lang="pt-BR">mexer-se</span></td><td><span class="fi">Liiku!</span></td><td><span class="fi">Liikkukaa!</span></td><td><span class="fi">Älä liiku! · Älkää liikkuko!</span></td></tr>
    <tr><td><span class="fi">unohtaa</span><span class="kaannos" lang="pt-BR">esquecer</span></td><td><span class="fi">Unohda!</span></td><td><span class="fi">Unohtakaa!</span></td><td><span class="fi">Älä unohda! · Älkää unohtako!</span></td></tr>
  </table>
  <p>Com <span class="fi">olla</span>, o adjetivo vai junto: <span class="fi">Ole varovainen!</span> (tome cuidado!), para vocês <span class="fi">Olkaa varovaisia!</span> (plural). E para combinar o momento, <span class="fi">kun</span> (quando, lição 16): <span class="fi">Kun minä sanon ”nyt”, nostakaa Jay ja juoskaa autolle!</span> Em português vem “quando eu disser”; em finlandês, o presente simples: <span class="fi">kun minä sanon</span>.</p>
  <div class="huomio">
    <p><b>Armadilhas do brasileiro:</b> 1) “Não se mexa!” não tem o “se”: <span class="fi">liikkua</span> já é “mexer-se”, então <span class="fi">Älä liiku!</span> 2) Na ordem, o objeto inteiro fica na forma básica: <span class="fi">Nostakaa Jay!</span> (levantem o Jay!), mas sem ordem: <span class="fi">Marisa nostaa Jayn.</span></p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="arpoador">
  <h2>Exercícios: ordens e mensagens</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Ouça a Maia: o que o Jay deve fazer?</h3>
    <p class="ohje">Aperte ▶ sem ler e escolha a ordem que você ouviu.</p>
    <div class="valinta" data-kuuntele="Älä juokse!" data-oikea="não correr">
      <p class="kysymys">O Jay deve…</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">correr</button><button type="button">não correr</button><button type="button">esperar</button></div>
    </div>
    <div class="valinta" data-kuuntele="Odota!" data-oikea="esperar">
      <p class="kysymys">O Jay deve…</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">esperar</button><button type="button">não esperar</button><button type="button">não se mexer</button></div>
    </div>
    <div class="valinta" data-kuuntele="Älä liiku!" data-oikea="não se mexer">
      <p class="kysymys">O Jay deve…</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">se mexer</button><button type="button">correr</button><button type="button">não se mexer</button></div>
    </div>
    <div class="valinta" data-kuuntele="Älä mene veteen!" data-oikea="não entrar na água">
      <p class="kysymys">O Jay deve…</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">entrar na água</button><button type="button">não entrar na água</button><button type="button">sair da água</button></div>
    </div>
    <div class="valinta" data-kuuntele="Ole hiljaa!" data-oikea="ficar quieto">
      <p class="kysymys">O Jay deve…</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">ficar quieto</button><button type="button">ficar deitado</button><button type="button">ter cuidado</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>4. Leia as mensagens da família</h3>
    <p class="ohje">No carro, a caminho da UPA, a Maia escreve no grupo da família. Em Helsinque são cinco e meia da tarde. A Purjo foi enfermeira, e enfermeira dá ordens. Leia e responda.</p>
    <div class="chat" data-otsikko="Perhe" data-paiva="keskiviikko" data-mina="maia">
      <p data-h="maia" data-aika="17.30" data-pt="Oi, gente! O Jay caiu na praia. O pé torceu. O carro está levando a gente para a UPA.">Hei kaikki! Jay kaatui rannalla. Jalka kääntyi. Auto vie meidät UPA:an.</p>
      <p data-h="purjo" data-aika="17.31" data-pt="O quê?! O que aconteceu? Ele estava na água?">Mitä?! Mitä tapahtui? Oliko hän vedessä?</p>
      <p data-h="maia" data-aika="17.32" data-pt="Não, na areia. Ele tentou levantar o isopor com o pé.">Ei, hiekalla. Hän yritti nostaa kylmälaukkua jalalla.</p>
      <p data-h="purjo" data-aika="17.33" data-pt="Eu fui enfermeira. Agora escutem! Jay, não ande! Descanse!">Minä olin sairaanhoitaja. Kuunnelkaa nyt! Jay, älä kävele! <span data-l="levätä:imper.2s">Lepää</span>!</p>
      <p data-h="purjo" data-aika="17.34" data-pt="Quando a enfermeira falar, escutem. E façam tudo!">Kun sairaanhoitaja puhuu, kuunnelkaa. Ja tehkää kaikki!</p>
      <p data-h="jay" data-aika="17.36" data-pt="Mãe, não se preocupe. O isopor está bem.">Äiti, ei hätää. Kylmälaukku on kunnossa.</p>
      <p data-h="purjo" data-aika="17.37" data-pt="(em “inglês de rali”:) Meu Deus! Não entrem mais na água! Tomem cuidado!"><span class="pala" lang="en">Oo mai kaad!</span> Älkää menkö enää veteen! Olkaa varovaisia!</p>
      <p data-h="purjo" data-aika="17.38" data-pt="Agora eu estou com enxaqueca.">Nyt minulla on migreeni.</p>
      <p data-h="purjo" data-aika="17.39" data-pt="Escreva assim que tiver notícia nova!">Kirjoita heti, kun on uutta tietoa!</p>
      <p data-h="hiisi" data-aika="17.50" data-pt="Devo dirigir até aí?">Ajanko sinne?</p>
      <p data-h="hiisi" data-aika="17.50" data-pt="(cara de paisagem)"><span class="emoji">😐</span></p>
    </div>
    <div class="valinta" data-oikea="Hiekalla.">
      <p class="kysymys"><span class="fi">Missä Jay kaatui?</span></p>
      <div class="vaihtoehdot"><button type="button">Vedessä.</button><button type="button">Hiekalla.</button><button type="button">Autossa.</button></div>
    </div>
    <div class="valinta" data-oikea="Purjo.">
      <p class="kysymys"><span class="fi">Kuka oli sairaanhoitaja?</span></p>
      <div class="vaihtoehdot"><button type="button">Maia.</button><button type="button">Hiisi.</button><button type="button">Purjo.</button></div>
    </div>
    <div class="valinta" data-oikea="Älkää menkö enää veteen!">
      <p class="kysymys"><span class="fi">Mitä Purjo sanoo Maialle ja Jaylle?</span></p>
      <div class="vaihtoehdot"><button type="button">Älä mene enää veteen!</button><button type="button">Älkää menkö enää veteen!</button><button type="button">Te ette mene enää veteen.</button></div>
    </div>
    <div class="valinta" data-oikea="Ajanko sinne?">
      <p class="kysymys"><span class="fi">Mitä Hiisi kysyy?</span></p>
      <div class="vaihtoehdot"><button type="button">Ajanko sinne?</button><button type="button">Soitanko sinne?</button><button type="button">Tulenko sinne?</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Traduza as ordens para o finlandês</h3>
    <p class="ohje">Escreva em finlandês. Depois compare com o modelo.</p>
    <div class="kaanna"><p class="pt">Não entrem na água! Tomem cuidado!</p><p class="s" data-pt="Não entrem na água! Tomem cuidado!">Älkää menkö veteen! Olkaa varovaisia!</p></div>
    <div class="kaanna"><p class="pt">Não se mexa! Espera com calma.</p><p class="s" data-pt="Não se mexa! Espera com calma.">Älä liiku! Odota rauhassa.</p></div>
    <div class="kaanna"><p class="pt">Quando eu disser “agora”, corram!</p><p class="s" data-pt="Quando eu disser “agora”, corram!">Kun minä sanon ”nyt”, juoskaa!</p></div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Aprofundar e fechar',
      html: `
<ul class="tavoitteet">
  <li>Você diz onde dói: <span class="fi">Minuun sattuu. Jalkaan sattuu.</span></li>
  <li>Você diz <span class="fi">Päätäni särkee.</span> e <span class="fi">Minulla on käsi kipeä.</span>, e pergunta <span class="fi">Onko sinulla kuumetta?</span></li>
  <li>Você conhece as partes do corpo: <span class="fi">pää, kurkku, vatsa, selkä, käsi, jalka, polvi, nilkka</span>.</li>
  <li>Você responde no pronto-atendimento: <span class="fi">Mikä hätänä? Mihin sattuu?</span></li>
</ul>

<p data-paikka="upa">Quarta-feira, uma da tarde, na UPA 24h de Copacabana, o pronto-atendimento público. Lá fora faz trinta e cinco graus; lá dentro, o ar-condicionado está no máximo. A Marisa espera do lado de fora, sentada no isopor: ela não deixa doze cervejas sozinhas. Na sala de atendimento, uma enfermeira atende o Jay.</p>

<section class="osio" data-paikka="upa">
  <h2>Diálogo B: <span class="fi">Mihin sattuu?</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. A enfermeira fala português, o Jay responde em finlandês e a Maia traduz. Procure os três jeitos de dizer que dói: <span class="fi">sattuu</span>, <span class="fi">särkee</span> e <span class="fi">minulla on … kipeä</span>. E repare no erro da Maia logo no começo. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t18-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="O Jay, a Maia e a enfermeira estão na UPA de Copacabana. Lá fora está quente, mas aqui dentro está frio.">Jay, Maia ja sairaanhoitaja ovat UPA:ssa Copacabanassa. Ulkona on kuuma, mutta sisällä on kylmä.</p>
    <p class="s" data-h="kertoja" data-pt="A enfermeira só fala português. O Jay fala finlandês. A Maia traduz.">Sairaanhoitaja puhuu vain portugalia. Jay puhuu suomea. Maia kääntää.</p>
    <p class="s" data-h="sairaanhoitaja" data-pt="Boa tarde! O que houve?"><span lang="pt-BR">Boa tarde! O que houve?</span></p>
    <p class="s" data-h="maia" data-pt="Jay, ela está perguntando: O que houve? Onde dói? (errado de propósito: com sattua, o finlandês pergunta mihin)">Jay, hän kysyy: Mikä hätänä? <span data-hairio="Mihin">Missä</span> sattuu?</p>
    <p class="s" data-h="jay" data-pt="Mihin sattuu, Maia. Não “missä”. Está doendo em mim.">Mihin sattuu, Maia. Ei ”missä”. Minuun sattuu.</p>
    <p class="s" data-h="sairaanhoitaja" data-pt="Onde dói?"><span lang="pt-BR">Onde dói?</span></p>
    <p class="s" data-h="maia" data-pt="Onde dói?">Mihin sattuu?</p>
    <p class="s" data-h="jay" data-pt="Dói o pé, o joelho e as costas.">Jalkaan, polveen ja selkään sattuu.</p>
    <p class="s" data-h="maia" data-pt="As costas? As costas ainda estavam boas no carro.">Selkään? Selkä oli kunnossa vielä autossa.</p>
    <p class="s" data-h="jay" data-pt="E a minha cabeça dói. A minha mão também está doendo.">Ja päätäni särkee. Minulla on myös käsi kipeä.</p>
    <p class="s" data-h="maia" data-pt="E a garganta e a barriga?">Entä kurkku ja vatsa?</p>
    <p class="s" data-h="jay" data-pt="A barriga está vazia. Eu só estou com fome. E a garganta quer cerveja.">Vatsa on tyhjä. Minulla on vain nälkä. Ja kurkku haluaa olutta.</p>
    <p class="s" data-h="maia" data-pt="Dói o pé. O resto é drama e ressaca."><span lang="pt-BR">Dói o pé. O resto é drama e ressaca.</span></p>
    <p class="s" data-h="sairaanhoitaja" data-pt="Ele está com febre?"><span lang="pt-BR">Ele está com febre?</span></p>
    <p class="s" data-h="maia" data-pt="Você está com febre?">Onko sinulla kuumetta?</p>
    <p class="s" data-h="jay" data-pt="Não sei. Estou com frio. Com certeza estou com febre.">En tiedä. Minulla on kylmä. Minulla on varmasti kuumetta.</p>
    <p class="s" data-h="kertoja" data-pt="A enfermeira mede a febre. Ela ri um pouco.">Sairaanhoitaja mittaa kuumeen. Hän nauraa vähän.</p>
    <p class="s" data-h="maia" data-pt="Você não está com febre. A sala só está fria.">Sinulla ei ole kuumetta. Huoneessa on vain kylmä.</p>
    <p class="s" data-h="kertoja" data-pt="A enfermeira olha o pé do Jay.">Sairaanhoitaja katsoo Jayn jalkaa.</p>
    <p class="s" data-h="sairaanhoitaja" data-pt="Não quebrou. Só torceu. Não é grave."><span lang="pt-BR">Não quebrou. Só torceu. Não é grave.</span></p>
    <p class="s" data-h="maia" data-pt="A enfermeira diz: não é grave.">Sairaanhoitaja sanoo: se ei ole vakava.</p>
    <p class="s" data-h="jay" data-pt="Não é grave? Mas o pé está doendo muito!">Se ei ole vakava? Mutta jalka on todella kipeä!</p>
    <p class="s" data-h="kertoja" data-pt="A enfermeira cuida do pé do Jay. Ela enfaixa o pé.">Sairaanhoitaja hoitaa Jayn jalan. Hän sitoo sen.</p>
    <p class="s" data-h="sairaanhoitaja" data-pt="Repouso, muita água e nada de cerveja. Nem amanhã, no Réveillon!"><span lang="pt-BR">Repouso, muita água e nada de cerveja. Nem amanhã, no Réveillon!</span></p>
    <p class="s" data-h="maia" data-pt="Descansa e bebe muita água. A garganta ganha água, não cerveja. Nem amanhã na festa."><span data-l="levätä:imper.2s">Lepää</span> ja <span data-l="juoda:imper.2s">juo</span> paljon vettä. Kurkku saa vettä, ei olutta. Ei edes huomenna juhlassa.</p>
    <p class="s" data-h="jay" data-pt="Sem cerveja? Por que motivo? A cerveja não vai para o pé.">Ei olutta? Mistä syystä? Olut ei mene jalkaan.</p>
    <p class="s" data-h="maia" data-pt="Não. A cerveja vai para a cabeça e você cai de novo. Esse é um bom motivo.">Ei. Olut menee päähän ja sinä kaadut taas. Se on hyvä syy.</p>
    <p class="s" data-h="kertoja" data-pt="A enfermeira dá muletas para o Jay.">Sairaanhoitaja antaa Jaylle kainalosauvat.</p>
    <p class="s" data-h="maia" data-pt="Anda com elas até o voo.">Kävele näillä lentoon asti.</p>
    <p class="s" data-h="jay" data-pt="Obrigado, enfermeira. Obrigado.">Kiitos, sairaanhoitaja. <span lang="pt-BR">Obrigado.</span></p>
    <p class="s" data-h="kertoja" data-pt="O Jay sai devagar. A Marisa está esperando lá fora.">Jay kävelee hitaasti ulos. Marisa odottaa ulkona.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Mikä hätänä?</span> = o que houve? · a primeira pergunta no pronto-atendimento (<span class="fi">hätä</span>, lição 14)</li>
      <li><span class="fi">Mihin sattuu? – Minuun sattuu.</span> = onde dói? – está doendo · com <span class="fi">sattua</span>, “para onde?”: <span class="fi">mihin</span>, não <span class="fi">missä</span> (Gramática 2)</li>
      <li><span class="fi">Jalkaan, polveen ja selkään sattuu.</span> = dói o pé, o joelho e as costas · o verbo fica sempre em <span class="fi">sattuu</span></li>
      <li><span class="fi">Päätäni särkee.</span> = a minha cabeça dói · <span class="fi">särkee</span> + partitivo; o <span class="fi pala">-ni</span> é “minha” (lição 17)</li>
      <li><span class="fi">Minulla on käsi kipeä.</span> = a minha mão está doendo · <span class="fi">minulla on</span> + a parte do corpo + <span class="fi">kipeä</span></li>
      <li><span class="fi">Onko sinulla kuumetta?</span> = você está com febre? · <span class="fi">kuume</span> no partitivo</li>
      <li><span class="fi"><span data-l="levätä:imper.2s">Lepää</span> ja <span data-l="juoda:imper.2s">juo</span> paljon vettä.</span> = descansa e bebe muita água · ordens para você (lição 9)</li>
      <li><span class="fi">Mistä syystä? – Se on hyvä syy.</span> = por que motivo? – é um bom motivo · <span class="fi">syy</span> = motivo, causa</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="upa">
  <h2>O corpo do Jay: <span class="fi">Mihin sattuu?</span></h2>
  <p class="ohje">Toque numa parte do corpo: o Jay diz em finlandês o que dói, e por quê. Depois aperte <b>Ouvir a pergunta</b>: a Maia traduz a pergunta da enfermeira (por exemplo <span class="fi">Sattuuko polveen?</span>), e você mostra o lugar. Com a <b>Tradução</b> ligada, aparece também o português.</p>
  <div class="keho" data-h="jay" data-kysyja="maia" data-kaannokset>
    <p data-osa="cabeca" data-nimi="pää · a cabeça" data-kysy="Sattuuko päähän?" data-puhu="Päätäni särkee. Aurinko oli liian kuuma." data-pt="A minha cabeça dói. O sol estava quente demais.">Päätäni särkee. Aurinko oli liian kuuma.</p>
    <p data-osa="garganta" data-nimi="kurkku · a garganta" data-kysy="Sattuuko kurkkuun?" data-puhu="Kurkkuun ei satu. Kurkku haluaa vain olutta." data-pt="A garganta não dói. A garganta só quer cerveja.">Kurkkuun ei satu. Kurkku haluaa vain olutta.</p>
    <p data-osa="peito" data-nimi="rinta · o peito" data-kysy="Sattuuko rintaan?" data-puhu="Rintaan ei satu. Se on kunnossa." data-pt="O peito não dói. Ele está bem.">Rintaan ei satu. Se on kunnossa.</p>
    <p data-osa="barriga" data-nimi="vatsa · a barriga" data-kysy="Sattuuko vatsaan?" data-puhu="Vatsaan ei satu. Minulla on vain nälkä." data-pt="A barriga não dói. Eu só estou com fome.">Vatsaan ei satu. Minulla on vain nälkä.</p>
    <p data-osa="mao" data-nimi="käsi · a mão" data-kysy="Sattuuko käteen?" data-puhu="Minulla on käsi kipeä. Kaaduin hiekkaan." data-pt="A minha mão está doendo. Eu caí na areia.">Minulla on käsi kipeä. Kaaduin hiekkaan.</p>
    <p data-osa="joelho" data-nimi="polvi · o joelho" data-kysy="Sattuuko polveen?" data-puhu="Polveen sattuu. Laukku kaatui polven päälle." data-pt="O joelho dói. O isopor caiu em cima do joelho.">Polveen sattuu. Laukku kaatui polven päälle.</p>
    <p data-osa="pe" data-nimi="jalka, nilkka · o pé, o tornozelo" data-kysy="Sattuuko jalkaan?" data-puhu="Jalkaan sattuu todella paljon! Nilkka kääntyi." data-pt="O pé dói muito! O tornozelo torceu.">Jalkaan sattuu todella paljon! Nilkka kääntyi.</p>
  </div>
  <div class="teema" data-otsikko="O corpo" data-sanat="pää,kurkku,rinta,vatsa,selkä,käsi,jalka,polvi,nilkka"></div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="upa">
  <h2>Gramática 2 · Dói: <span class="fi">sattuu</span>, <span class="fi">särkee</span>, <span class="fi">kipeä</span></h2>
  <p>Em português, a parte do corpo é o sujeito: “o pé dói”, “os joelhos doem”. Em finlandês, com <span class="fi">sattua</span> a parte do corpo nunca é o sujeito: ela vai para o ilativo, a forma de “para onde?”. Com <span class="fi">särkeä</span>, o partitivo é a escolha segura. Os dois verbos ficam sempre na forma de “ele” (<span class="fi">sattuu, särkee</span>). Há três jeitos de dizer:</p>
  <table class="taivutus">
    <tr><th>finlandês</th><th>português</th><th>como funciona</th></tr>
    <tr><td><span class="fi">Jalkaan sattuu.</span></td><td>o pé dói</td><td><span class="fi">sattuu</span> + a parte do corpo no ilativo (lição 6): <span class="fi">jalka → jalkaan</span></td></tr>
    <tr><td><span class="fi">Päätä särkee.</span></td><td>a cabeça dói (uma dor que lateja)</td><td><span class="fi">särkee</span> + a parte do corpo no partitivo (lição 3): <span class="fi">pää → päätä</span></td></tr>
    <tr><td><span class="fi">Minulla on käsi kipeä.</span></td><td>a minha mão está doendo</td><td><span class="fi">minulla on</span> (lição 5) + a forma básica + <span class="fi">kipeä</span>; o <span class="fi">kipeä</span> também pode vir antes: <span class="fi">Minulla on kipeä käsi.</span></td></tr>
    <tr><td><span class="fi">Minulla on pää kipeä.</span></td><td>estou com dor de cabeça</td><td>com <span class="fi">pää</span>, o jeito mais comum</td></tr>
  </table>
  <p>A Maia e a Purjo têm enxaqueca de vez em quando. Para isso há uma palavra só: <span class="fi">Minulla on migreeni.</span> = estou com enxaqueca.</p>
  <p>E a pessoa? Com <span class="fi">sattua</span>, ela também vai para “para onde?”: <span class="fi">Minuun sattuu.</span> (está doendo em mim), <span class="fi">Sattuuko sinuun?</span> (está doendo em você?). A pergunta, então, é <span class="fi">Mihin sattuu?</span>, nunca <span class="pala">Missä sattuu?</span>: o erro da Maia no diálogo. Para dizer “a minha cabeça”, guarde <span class="fi">Päätäni särkee.</span> como bloco pronto (o <span class="fi pala">-ni</span> da lição 17).</p>

  <h3>Febre e frio: <span class="fi">minulla on kuumetta</span></h3>
  <p><span class="fi">Minulla on kuumetta.</span> = estou com febre: <span class="fi">kuume</span> (febre) no partitivo, como uma quantidade. A pergunta é <span class="fi">Onko sinulla kuumetta?</span>, e a resposta curta, <span class="fi">On.</span> ou <span class="fi">Ei ole.</span> Frio e calor também vão com <span class="fi">minulla on</span>, sem partitivo: <span class="fi">Minulla on kylmä.</span> (estou com frio), como o Jay no ar-condicionado.</p>
  <ul class="esim">
    <li class="s" data-pt="Você está com febre?">Onko sinulla kuumetta?</li>
    <li class="s" data-pt="Não. Mas estou com frio.">Ei ole. Mutta minulla on kylmä.</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilhas do brasileiro:</b> 1) “o pé dói” não vira <span class="pala">jalka sattuu</span>: com <span class="fi">sattuu</span>, a parte do corpo muda de caso, <span class="fi">jalkaan sattuu</span>. 2) “Estou doente” é <span class="fi">Olen sairas.</span>; “a minha mão está doendo” é <span class="fi">Minulla on käsi kipeä.</span></p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="upa">
  <h2>Exercício: dói</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. sattuu, särkee ou kipeä? Escolha a forma</h3>
    <p class="ohje">Olhe o verbo: com <span class="fi">sattuu</span>, a parte do corpo e a pessoa vão para “para onde?”; com <span class="fi">särkee</span>, a parte do corpo vai para o partitivo; com <span class="fi">minulla on … kipeä</span> vem a forma básica.</p>
    <div class="valinta" data-oikea="Polveen">
      <p class="kysymys"><span class="fi">___ sattuu.</span> (o joelho)</p>
      <div class="vaihtoehdot"><button type="button">Polvi</button><button type="button">Polveen</button><button type="button">Polvea</button></div>
    </div>
    <div class="valinta" data-oikea="Päätä">
      <p class="kysymys"><span class="fi">___ särkee.</span> (a cabeça)</p>
      <div class="vaihtoehdot"><button type="button">Päätä</button><button type="button">Päähän</button><button type="button">Pään</button></div>
    </div>
    <div class="valinta" data-oikea="käsi">
      <p class="kysymys"><span class="fi">Minulla on ___ kipeä.</span> (a mão)</p>
      <div class="vaihtoehdot"><button type="button">käteen</button><button type="button">kättä</button><button type="button">käsi</button></div>
    </div>
    <div class="valinta" data-oikea="Minuun">
      <p class="kysymys"><span class="fi">___ sattuu!</span> (dói em mim)</p>
      <div class="vaihtoehdot"><button type="button">Minulla</button><button type="button">Minuun</button><button type="button">Minun</button></div>
    </div>
    <div class="valinta" data-oikea="kuumetta">
      <p class="kysymys"><span class="fi">Onko sinulla ___?</span> (febre)</p>
      <div class="vaihtoehdot"><button type="button">kuumetta</button><button type="button">kuumeen</button><button type="button">kuumeeseen</button></div>
    </div>
    <div class="valinta" data-oikea="Mihin">
      <p class="kysymys"><span class="fi">___ sattuu?</span> (onde dói?)</p>
      <div class="vaihtoehdot"><button type="button">Missä</button><button type="button">Mistä</button><button type="button">Mihin</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="upa">
  <h2>Gramática 3 · O corpo: onde dói?</h2>
  <table class="taivutus">
    <tr><th>o corpo</th><th>onde dói? (<span class="fi">sattuu</span>)</th><th>dói (<span class="fi">särkee</span>)</th></tr>
    <tr><td><span class="fi">pää</span><span class="kaannos" lang="pt-BR">a cabeça</span></td><td><span class="fi">päähän</span></td><td><span class="fi">päätä</span></td></tr>
    <tr><td><span class="fi">vatsa</span><span class="kaannos" lang="pt-BR">a barriga</span></td><td><span class="fi">vatsaan</span></td><td><span class="fi">vatsaa</span></td></tr>
    <tr><td><span class="fi">selkä</span><span class="kaannos" lang="pt-BR">as costas</span></td><td><span class="fi">selkään</span></td><td><span class="fi">selkää</span></td></tr>
    <tr><td><span class="fi">käsi</span><span class="kaannos" lang="pt-BR">a mão, o braço</span></td><td><span class="fi">käteen</span></td><td><span class="fi">kättä</span></td></tr>
    <tr><td><span class="fi">jalka</span><span class="kaannos" lang="pt-BR">o pé, a perna</span></td><td><span class="fi">jalkaan</span></td><td><span class="fi">jalkaa</span></td></tr>
    <tr><td><span class="fi">polvi</span><span class="kaannos" lang="pt-BR">o joelho</span></td><td><span class="fi">polveen</span></td><td><span class="fi">polvea</span></td></tr>
    <tr><td><span class="fi">nilkka</span><span class="kaannos" lang="pt-BR">o tornozelo</span></td><td><span class="fi">nilkkaan</span></td><td><span class="fi">nilkkaa</span></td></tr>
  </table>
  <p>Para a garganta e o peito, use <span class="fi">sattuu</span> ou <span class="fi">kipeä</span>: <span class="fi">Kurkkuun sattuu.</span> <span class="fi">Minulla on kurkku kipeä.</span> Repare: <span class="fi">käsi</span> é a mão e também o braço; <span class="fi">jalka</span> é o pé e também a perna. E <span class="fi">kurkku</span> também é pepino.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="upa">
  <h2>Exercícios: o corpo</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Onde dói? Complete com a forma de “para onde?”</h3>
    <p class="ohje">A palavra do corpo está entre parênteses. Com <span class="fi">sattuu</span>, ela vai para o ilativo: <span class="fi">polvi → polveen</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Mihin sattuu? – <span class="aukko" data-oikea="Päähän"></span>. <span data-ei-kuplaa>(pää)</span></p>
      <p>Mihin sattuu? – <span class="aukko" data-oikea="Selkään"></span>. <span data-ei-kuplaa>(selkä)</span></p>
      <p>Mihin sattuu? – <span class="aukko" data-oikea="Käteen"></span>. <span data-ei-kuplaa>(käsi)</span></p>
      <p>Mihin sattuu? – <span class="aukko" data-oikea="Kurkkuun"></span>. <span data-ei-kuplaa>(kurkku)</span></p>
      <p>Mihin sattuu? – <span class="aukko" data-oikea="Vatsaan"></span>. <span data-ei-kuplaa>(vatsa)</span></p>
      <p>Mihin sattuu? – <span class="aukko" data-oikea="Nilkkaan"></span>. <span data-ei-kuplaa>(nilkka)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>8. Ouça o Jay: o que dói?</h3>
    <p class="ohje">Aperte ▶ sem ler e escolha a parte do corpo.</p>
    <div class="valinta" data-kuuntele="Polveen sattuu." data-oikea="o joelho">
      <p class="kysymys">O que dói?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">a cabeça</button><button type="button">o joelho</button><button type="button">as costas</button></div>
    </div>
    <div class="valinta" data-kuuntele="Päätä särkee." data-oikea="a cabeça">
      <p class="kysymys">O que dói?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">a cabeça</button><button type="button">a barriga</button><button type="button">a mão</button></div>
    </div>
    <div class="valinta" data-kuuntele="Minulla on kurkku kipeä." data-oikea="a garganta">
      <p class="kysymys">O que dói?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">o peito</button><button type="button">o joelho</button><button type="button">a garganta</button></div>
    </div>
    <div class="valinta" data-kuuntele="Nilkkaan sattuu." data-oikea="o tornozelo">
      <p class="kysymys">O que dói?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">o tornozelo</button><button type="button">o joelho</button><button type="button">as costas</button></div>
    </div>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>UPA e SUS no Brasil; 112 e <span class="fi">terveyskeskus</span> na Finlândia</h3>
  <figure class="kuva" data-kuva="upa"></figure>
  <p>No Brasil, o <b>SUS</b> (Sistema Único de Saúde) é o sistema público de saúde e atende qualquer pessoa que está no país, também um turista finlandês como o Jay. Para urgência há a <b>UPA 24h</b>, a Unidade de Pronto Atendimento, aberta dia e noite (<span class="fi">se ei ole koskaan kiinni</span>), onde o caso mais grave é atendido primeiro. Os números de emergência são <b>192</b> (SAMU, a ambulância), <b>193</b> (bombeiros) e <b>190</b> (polícia).</p>
  <p>Na Finlândia, um número só serve para tudo: <b>112</b>, o <span class="fi">hätänumero</span>, que se diz <span class="fi">yksi yksi kaksi</span>. Para doença comum, o <span class="fi">terveyskeskus</span> (centro de saúde) da região: liga-se de manhã e marca-se uma consulta. À noite e no fim de semana, a <span class="fi">päivystys</span>, o pronto-socorro, muitas vezes num hospital. Quem não sabe se é urgente pode ligar para o <b>116 117</b>, um telefone de orientação: um profissional de saúde diz se você precisa ir e para onde. Às vezes se paga uma taxa pequena; o resto vem dos impostos, como no SUS.</p>
  <p>A primeira pergunta, nos dois países, é quase a mesma. Em português, “o que houve?”; em finlandês, <span class="fi">Mikä hätänä?</span> E a resposta você já sabe dar: <span class="fi">Jalkaan sattuu.</span></p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="copacabana-calcadao">
  <h2>Exercícios: no centro de saúde</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>9. Traduza para o finlandês: onde dói</h3>
    <p class="ohje">Escreva em finlandês. Depois compare com o modelo.</p>
    <div class="kaanna"><p class="pt">Está doendo! (dói em mim)</p><p class="s" data-pt="Está doendo!">Minuun sattuu!</p></div>
    <div class="kaanna"><p class="pt">A minha cabeça dói.</p><p class="s" data-pt="A minha cabeça dói.">Päätäni särkee.</p></div>
    <div class="kaanna"><p class="pt">Estou com dor de garganta.</p><p class="s" data-pt="Estou com dor de garganta.">Minulla on kurkku kipeä.</p></div>
    <div class="kaanna"><p class="pt">Você está com febre?</p><p class="s" data-pt="Você está com febre?">Onko sinulla kuumetta?</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>10. No centro de saúde: responda</h3>
    <p class="ohje">Você está num <span class="fi">terveyskeskus</span> na Finlândia. Responda em voz alta, sobre você, antes de abrir o modelo.</p>
    <details class="vastaus"><summary lang="fi-FI">Mikä hätänä?</summary><p class="s" data-pt="Estou com febre e a garganta dói.">Minulla on kuumetta ja kurkkuun sattuu.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mihin sattuu?</summary><p class="s" data-pt="Nas costas. Mas não é grave.">Selkään. Mutta se ei ole vakava.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla kuumetta?</summary><p class="s" data-pt="Não. Mas a minha cabeça dói.">Ei ole. Mutta päätäni särkee.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Milloin se alkoi?</summary><p class="s" data-pt="Começou ontem à noite.">Se alkoi eilen illalla.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kuka hoitaa sinua?</summary><p class="s" data-pt="A enfermeira cuida de mim. O médico vem logo.">Sairaanhoitaja hoitaa minua. Lääkäri tulee pian.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sairaanhoitaja sanoo?</summary><p class="s" data-pt="Ela diz: descanse, beba água e não beba cerveja!">Hän sanoo: <span data-l="levätä:imper.2s">lepää</span>, <span data-l="juoda:imper.2s">juo</span> vettä ja älä juo olutta!</p></details>
  </div>
</section>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3><span class="fi" data-rekisteri="puhe">Muhun sattuu!</span> <span class="fi">Älä hätäile!</span></h3>
  <p>Na fala, <span class="fi">minuun</span> encolhe para <span class="fi" data-rekisteri="puhe">muhun</span>, e <span class="fi">minun</span> para <span class="fi" data-rekisteri="puhe">mun</span>, como <span class="fi" data-rekisteri="puhe">mä</span> no lugar de <span class="fi">minä</span>. E o <span class="fi pala">-ni</span> do “meu” quase sempre cai: <span class="fi" data-rekisteri="puhe">mun päätä särkee</span>. Quem acalma o outro diz <span class="fi">Älä hätäile!</span> (não se afobe!; isto é finlandês padrão), da mesma família de <span class="fi">hätä</span> (lição 14). Você não precisa falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">Minuun sattuu!</span></td><td><span class="fi" data-rekisteri="puhe">Muhun sattuu!</span></td><td>está doendo!</td></tr>
    <tr><td><span class="fi">Minun päätäni särkee.</span></td><td><span class="fi" data-rekisteri="puhe">Mun päätä särkee.</span></td><td>a minha cabeça dói</td></tr>
  </table>
  <p class="s" data-h="jay" data-kirja="Minuun sattuu! Minun päätäni särkee." data-pt="Está doendo! A minha cabeça dói.">Muhun sattuu! Mun päätä särkee.</p>
  <p class="s" data-h="maia" data-kirja="Älä hätäile. Ei se ole mitään." data-pt="Não se afobe. Não é nada.">Älä hätäile. Ei se mitään.</p>
  <p class="s" data-h="jay" data-kirja="Kyllä, minä olen aivan kunnossa." data-pt="É, eu estou bem mesmo.">Joo, mä oon ihan kunnossa.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="copacabana-calcadao">
  <h2>Para terminar</h2>
  <p>O Jay sai da UPA de muletas, devagar. Lá fora, a Marisa levanta do isopor. O Jay olha as doze cervejas. A Maia olha o Jay. Ninguém diz nada, e o isopor volta para o hotel fechado. Amanhã é 31 de dezembro: o Réveillon em Copacabana. Isso é a lição 19.</p>
  <div class="kotitehtava" data-id="t18">
    <h3>Lição de casa</h3>
    <p>Você está doente e não vai trabalhar hoje. Escreva uma mensagem para um colega, em finlandês: o que dói (uma frase com <span class="fi">sattuu</span> e uma com <span class="fi">särkee</span> ou <span class="fi">minulla on … kipeä</span>), se você tem febre, e uma ordem para a equipe com <span class="fi">älkää</span>. Depois leia em voz alta, com o <span class="fi pala">r</span> vibrante.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia, para a colega Kaisa)</summary>
      <p class="s" data-pt="Oi, Kaisa! Hoje estou doente em casa.">Hei Kaisa! Olen tänään sairaana kotona.</p>
      <p class="s" data-pt="Estou com febre e a garganta dói.">Minulla on kuumetta ja kurkkuun sattuu.</p>
      <p class="s" data-pt="A minha cabeça dói e estou com dor nas costas.">Päätäni särkee ja minulla on selkä kipeä.</p>
      <p class="s" data-pt="Diga para a equipe que estou doente e que tive que ir ao médico. Amanhã conto mais.">Kerro tiimille, että olen sairas ja jouduin lääkäriin. Kerron lisää huomenna.</p>
      <p class="s" data-pt="Não me liguem hoje! O telefone não está funcionando.">Älkää soittako minulle tänään! Puhelin ei toimi.</p>
      <p class="s" data-pt="Um abraço, Maia">Terveisin Maia</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t18">
    <li>Entendo e dou ordens urgentes: Älä juokse! Odota! Älä liiku! Juoskaa!</li>
    <li>Monto um plano com kun: Kun minä sanon ”nyt”, juoskaa!</li>
    <li>Digo onde dói: Minuun sattuu. Jalkaan sattuu.</li>
    <li>Digo Päätäni särkee e Minulla on käsi kipeä.</li>
    <li>Pergunto e respondo: Onko sinulla kuumetta? – Ei ole.</li>
    <li>Conheço as partes do corpo: pää, kurkku, vatsa, selkä, käsi, jalka, polvi, nilkka.</li>
    <li>Pronuncio o r vibrante no começo da palavra: Rio, ranta, rauhassa.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'sattuu18', otsikko: 'Onde dói? Jalkaan sattuu, minuun sattuu', taso: 'essencial', hakuosa: 'h-sattuu', treeni: 't18-sattuu',
      html: `
<p><b>Forma:</b> <span class="fi">sattuu</span> (sempre a forma de “ele”) + a parte do corpo no <b>ilativo</b>, a forma de “para onde?”: <span class="fi">Jalkaan sattuu.</span> (o pé dói). A pessoa também: <span class="fi">Minuun sattuu.</span> A pergunta: <span class="fi">Mihin sattuu?</span>, nunca <span class="pala">missä</span>.</p>
<div class="sijataulu" data-sana="polvi" data-sijat="nominatiivi,illatiivi"></div>
<ul class="esim">
  <li class="s" data-pt="Onde dói? – No joelho.">Mihin sattuu? – Polveen.</li>
  <li class="s" data-pt="A barriga dói.">Vatsaan sattuu.</li>
</ul>`
    },
    {
      id: 'sarkee18', otsikko: 'Päätäni särkee, minulla on käsi kipeä', taso: 'essencial', hakuosa: 'h-sattuu', treeni: 't18-sattuu',
      html: `
<p><b><span class="fi">särkee</span> + partitivo:</b> uma dor que lateja, que não passa: <span class="fi">Päätä särkee.</span> Com <span class="fi pala">-ni</span> (minha, lição 17), bloco pronto: <span class="fi">Päätäni särkee.</span></p>
<p><b><span class="fi">minulla on</span> + forma básica + <span class="fi">kipeä</span>:</b> <span class="fi">Minulla on käsi kipeä.</span> O <span class="fi">kipeä</span> também pode vir antes: <span class="fi">Minulla on kipeä käsi.</span></p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Selkää särkee.</span></td><td>as costas doem</td></tr>
  <tr><td><span class="fi">Minulla on pää kipeä.</span></td><td>estou com dor de cabeça</td></tr>
</table>`
    },
    {
      id: 'kuume18', otsikko: 'Minulla on kuumetta: febre e frio', taso: 'frase pronta', hakuosa: 'h-sattuu', treeni: 'tilanne-terveyskeskus',
      html: `
<p><span class="fi">Minulla on kuumetta.</span> = estou com febre (<span class="fi">kuume</span> no partitivo). Pergunta: <span class="fi">Onko sinulla kuumetta?</span> Frio e calor: <span class="fi">Minulla on kylmä. Minulla on kuuma.</span></p>
<ul class="esim">
  <li class="s" data-pt="O que houve? – Estou com febre.">Mikä hätänä? – Minulla on kuumetta.</li>
</ul>`
    },
    {
      id: 'keho18', otsikko: 'O corpo: pää, kurkku, vatsa, käsi, jalka, polvi, nilkka', taso: 'essencial', hakuosa: 'h-sattuu', treeni: 't18-keho',
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">pää</span></td><td>a cabeça</td></tr>
  <tr><td><span class="fi">kurkku</span></td><td>a garganta (e o pepino)</td></tr>
  <tr><td><span class="fi">rinta</span></td><td>o peito</td></tr>
  <tr><td><span class="fi">vatsa</span></td><td>a barriga</td></tr>
  <tr><td><span class="fi">selkä</span></td><td>as costas</td></tr>
  <tr><td><span class="fi">käsi</span></td><td>a mão, o braço</td></tr>
  <tr><td><span class="fi">jalka</span></td><td>o pé, a perna</td></tr>
  <tr><td><span class="fi">polvi</span></td><td>o joelho</td></tr>
  <tr><td><span class="fi">nilkka</span></td><td>o tornozelo</td></tr>
</table>
<p>As formas de que você precisa para a dor:</p>
<div class="sijataulu" data-sana="pää" data-sijat="nominatiivi,partitiivi,illatiivi"></div>`
    },
    {
      id: 'hatakasky18', otsikko: 'Ordens urgentes: Älä juokse! Älkää menkö! Juoskaa!', taso: 'revisão', hakuosa: 'h-imperatiivi', treeni: 't18-hatakasky',
      html: `
<p>Para você: <span class="fi">Odota! Juokse!</span> · para vocês: <span class="fi">Odottakaa! Juoskaa!</span> · não!: <span class="fi">Älä liiku!</span>, <span class="fi">Älkää menkö veteen!</span> Para combinar o momento: <span class="fi">Kun minä sanon ”nyt”, juoskaa!</span> (“quando eu disser” = <span class="fi">kun minä sanon</span>, no presente).</p>
<table class="taivutus">
  <tr><th>para você</th><th>para vocês</th><th>português</th></tr>
  <tr><td><span class="fi">Älä liiku!</span></td><td><span class="fi">Älkää liikkuko!</span></td><td>não se mexa! · não se mexam!</td></tr>
  <tr><td><span class="fi">Odota!</span></td><td><span class="fi">Odottakaa!</span></td><td>espere! · esperem!</td></tr>
  <tr><td><span class="fi">Juokse!</span></td><td><span class="fi">Juoskaa!</span></td><td>corra! · corram!</td></tr>
  <tr><td><span class="fi">Ole varovainen!</span></td><td><span class="fi">Olkaa varovaisia!</span></td><td>tome cuidado! · tomem cuidado!</td></tr>
</table>`
    },
    {
      id: 'aantaminen18', otsikko: 'Pronúncia: o r vibra também no começo', taso: 'atenção', hakuosa: 'h-aakkoset',
      html: `
<p>O <span class="fi pala">r</span> finlandês é sempre da ponta da língua, que vibra, também no começo: <span class="fi">Rio, ranta, rauhassa</span>. Nunca o h de “Rio” em português. Truque: o <span class="fi pala">r</span> de “três”, sem o t.</p>
<ul class="esim">
  <li class="s" data-pt="ferro · túmulo">rauta – hauta</li>
  <li class="s" data-pt="Espera com calma!">Odota rauhassa!</li>
</ul>`
    },
    {
      id: 'sudenkuopat18', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>Com sattuu, “para onde?”:</b> <span class="fi">Mihin sattuu? Jalkaan sattuu. Minuun sattuu.</span>, nunca <span class="pala">missä sattuu</span> nem <span class="pala">jalka sattuu</span>. Com <span class="fi">särkee</span>, o partitivo: <span class="fi">päätä särkee</span>.</li>
  <li><b>O verbo da dor não muda:</b> <span class="fi">sattuu</span> e <span class="fi">särkee</span> ficam na forma de “ele”, mesmo com duas pernas.</li>
  <li><b>Estar com febre:</b> <span class="fi">Minulla on kuumetta.</span> · <b>o médico:</b> <span class="fi">lääkäri</span> (<span class="fi">tohtori</span> é título) · <b>quando eu disser:</b> <span class="fi">kun minä sanon</span>, no presente.</li>
  <li><b>Sem “se”:</b> “não se mexa!” = <span class="fi">Älä liiku!</span> · <b>o r do começo:</b> <span class="fi">rauhassa</span>, nunca <span class="pala">hauhassa</span>.</li>
</ul>`
    }
  ]
});
