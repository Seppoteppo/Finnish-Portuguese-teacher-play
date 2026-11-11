/* Tottakai, lição 14: katujuhlat Maian vanhempien kadulla joulupäivänä, perjantaina 25.12.2026 (Passon jakso 14 Maian
   näkökulmasta). Oma materiaali, ei kirjan tekstiä. Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5d ja docs/RUNKO_13_20.md
   §2 (uusi tarina L11–L20, omistaja 31.10.2026). Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A ”Parte A · Encontro” (#t14): iltapäivä ennen juhlia. Lukittu dialogi A (ass/luonnokset/t14-a-1_lopullinen.md,
     omistaja 7.11.2026, 24 riviä): Maia käskee Jaytä yhden hengen käskyillä (#47: kaikki osan A käskyt yksikössä), pöytä
     puun alle, jäät kaupasta apteekin vierestä; Marisa (puhujatunnus malu) puhuu ”hoono soomia” (perusmuodot,
     data-hairio), Walker tulee haitarin kanssa (W1), Uuno ja Eenok tulevat, koska Marta kutsui heidät. Frases prontas,
     tehtävä 1, sanasto ja suuntalaatikko (vasen → vasemma-, S3:145), kikka A1: .kartta muunnettuna jäämatkaksi (Jay
     kaupalle; mittari = kylmän oluen minuutit, komponentit.js karttaAkku data-akku-kuvake/-yksikko), tehtävät 2–3,
     ääntäminen (Marisan puhelin ≈ Marisam, kadun päässä, kirkon kohdalla), Gramática 1, kikka A2: .aukiokuva ”A rua da
     festa” (tehtävä 4, myös alla/alle ja takana/taakse, S3:169), tehtävät 5 (käännös, yksikkö) ja 6 (sanelu, yksikkö).
   - osa B ”Parte B · Aprofundar e fechar” (#t14-b): yö kello 1–4. Lukittu dialogi B (ass/luonnokset/t14-b-1_lopullinen.md,
     30 riviä; omistajan rivit ”Kello on yksi yöllä. Walker soittaa vielä haitaria.” ja ”Sinä et ollut koskaan lapsi,
     Eenok.” sanasta sanaan; et ollut = Frases prontas, lição 15), Frases prontas, Gramática 2 (te-käsky ja älkää + -ko,
     tyypit 1–5, S3:143; yksi väärä muoto molemmissa ansalaatikoissa, S3:144), kikka B: uusi .kapteeni (RUNKO §12.1),
     tehtävät 7–8, kulttuuri (Festa na rua e o Clube da Esquina, kuva festa-rua, huudot), tehtävä 9, Na rua (Mee suoraan!
     Tuu tänne!), tehtävä 10 (puhuminen, S3:170, :188), kotitehtävä, itsearvio.
   Siirrot (RUNKO §11): vanha .kartta (eksyminen keskustassa) on muunnettu tänne jäämatkaksi; sen .saapuva-puhelukehys
   siirtyi oppitunnin 17 B:n puheluun (RUNKO §11.1); Praça da Liberdaden kulttuurilaatikon kappale suunnitellusta
   keskustasta siirtyi oppitunnille 15. Suomea puhuvat Maia, Jay, Marisa (hoono soomi, omistaja Q2), Uuno, Eenok ja
   Anderson Jaylta oppimillaan sanoilla. Kaikki kirjakieltä; puhekieli vain Na rua -nurkassa. Olla = estar kiinnitetty
   data-l:llä, kun paikka on postpositio. */
Kurssi.lisaa({
  id: 't14',
  lyhyt: '14',
  jakso: 'Lição 14',
  otsikko: 'A festa de rua: direções, posposições e ordens para vocês',
  lahde: 'Tema: a festa de rua no dia de Natal em Belo Horizonte, dar direções, a brincadeira “o mestre mandou” · Gramática: as posposições com genitivo (puun alla, apteekin vieressä, kirkon kohdalla), as direções (oikealle, vasemmalla, suoraan), o imperativo para vocês (Tulkaa! Menkää! Älkää naurako!) · Pronúncia: o n que vira m e ŋ (Marisan puhelin, kirkon kohdalla)',
  aiheet: ['liike', 'paikka', 'kaupunki', 'vapaa'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; organiza a festa e dá as ordens em finlandês' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; carrega a mesa devagar e cuida da cerveja gelada' },
    malu: { nimi: 'Marisa', tyyppi: 'nainen', vaihto: 5, kuvaus: 'amiga da Maia; estudou na Finlândia, mora no Rio, toca tambor e fala um finlandês quebrado que funciona' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 7, kuvaus: 'pai da Maia; toca sanfona a noite inteira' },
    uuno: { nimi: 'Uuno', tyyppi: 'mies', vaihto: 7, kuvaus: 'turista finlandês do avião; macacão azul-claro, mesmo no calor' },
    eenok: { nimi: 'Eenok', tyyppi: 'mies', vaihto: 8, kuvaus: 'turista finlandês, irmão do Uuno; o mesmo macacão; quer saber onde está a carne' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; brinca com as crianças da rua e aprende uma ordem em finlandês' }
  },

  sanasto: [
    'juhla', 'grilli', 'kylmälaukku', 'jää', 'ei hätää',
    'oikealle', 'vasemmalle', 'oikealla', 'vasemmalla', 'suoraan', 'kääntyä', 'kulma', 'apteekki',
    'edessä', 'takana', 'vieressä', 'välissä', 'lähellä', 'alla', 'kohdalla', 'ympäri', 'alle', 'taakse',
    'ystävä', 'rumpu', 'haitari', 'tanssia', 'hikoilla', 'yllätys',
    'leikkiä', 'käskeä', 'kapteeni', 'totella', 'pysyä', 'varmasti', 'humalassa', 'kukko', 'koskaan'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Encontro',
      html: `
<ul class="tavoitteet">
  <li>Parte A: você entende e dá direções a uma pessoa (<span class="fi">Mene suoraan! Käänny vasemmalle!</span>) e diz onde está: <span class="fi"><span data-l="olla#2">Olen</span> grillin vieressä.</span></li>
  <li>Você ouve o <span class="fi pala">n</span> que muda de som entre duas palavras: <span class="fi">kirkon kohdalla</span> soa “kirkoŋ kohdalla”.</li>
  <li>Você diz onde as coisas estão com genitivo + posposição: <span class="fi">puun alla, apteekin vieressä, talon edessä</span>.</li>
  <li>Parte B: ordens para vocês: <span class="fi">Tulkaa tänne! Älkää juosko!</span></li>
</ul>
<p data-paikka="bh-bairro">Sexta-feira, 25 de dezembro: dia de Natal. Ontem à noite teve ceia na casa da Marta, com a Maira e a Marisa, as amigas de escola da Maia. Hoje a rua dos pais da Maia vai ter festa: às nove da noite a rua fecha para os carros, e cada vizinho traz uma mesa, comida, cadeiras e música. A Marta organiza tudo em português rápido. A Maia passa as tarefas para o Jay em finlandês, a língua secreta dos dois nesta casa. São quatro da tarde e faz trinta graus.</p>

<section class="osio" data-paikka="festa-rua" data-lasna="walker">
  <h2>Diálogo A: <span class="fi">Kadulla on juhlat</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Preste atenção em onde fica cada coisa: a palavra de lugar vem <b>depois</b> (<span class="fi">puun alle</span>, <span class="fi">apteekin vieressä</span>), e as ordens da Maia são para uma pessoa só (<span class="fi">Mene suoraan!</span>). A Marisa fala um finlandês quebrado, com os verbos na forma do dicionário: ela é entendida assim mesmo. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t14-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="É dia de Natal. A Maia e o Jay estão lá fora, na rua, na frente da casa dos pais da Maia em Belo Horizonte.">On joulupäivä. Maia ja Jay <span data-l="olla#2">ovat</span> ulkona kadulla, Maian vanhempien talon edessä Belo Horizontessa.</p>
    <p class="s" data-h="kertoja" data-pt="À noite, às nove horas, tem festa na rua. Antes disso a Maia dá ordens ao Jay em finlandês.">Illalla kello yhdeksän kadulla on juhlat. Ennen sitä Maia käskee Jaytä suomen kielellä.</p>
    <p class="s" data-h="maia" data-pt="Jay, pega aquela mesa e leva para debaixo da árvore.">Jay, ota tuo pöytä ja vie se puun alle.</p>
    <p class="s" data-h="jay" data-pt="Debaixo de qual árvore? Na rua tem muitas árvores.">Minkä puun alle? Kadulla on paljon puita.</p>
    <p class="s" data-h="maia" data-pt="Debaixo da árvore grande. A árvore fica na frente da casa do pai e da mãe, ao lado da churrasqueira.">Ison puun alle. Puu <span data-l="olla#2">on</span> isän ja äidin talon edessä, grillin vieressä.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay leva a mesa devagar para debaixo da árvore.">Jay vie pöydän hitaasti puun alle.</p>
    <p class="s" data-h="jay" data-pt="Maia, a caixa térmica está vazia! Não tem gelo nela. Logo a cerveja vai ficar quente.">Maia, kylmälaukku on tyhjä! Siellä ei ole jäätä. Pian olut on lämmintä.</p>
    <p class="s" data-h="maia" data-pt="Calma. Aqui perto tem uma lojinha. Vai lá e compra gelo. Vai reto e vira à esquerda na esquina da rua.">Ei hätää. Lähellä on pieni kauppa. Mene ja osta jäätä sieltä. Mene suoraan ja käänny kadun kulmassa vasemmalle.</p>
    <p class="s" data-h="jay" data-pt="Certo. Reto e na esquina da rua à direita.">Selvä. Suoraan ja kadun kulmassa oikealle.</p>
    <p class="s" data-h="maia" data-pt="Não, à esquerda! À direita fica a igreja. A loja fica ao lado da farmácia.">Ei, vasemmalle! Oikealla on kirkko. Kauppa <span data-l="olla#2">on</span> apteekin vieressä.</p>
    <p class="s" data-h="jay" data-pt="Tá, à esquerda. E na volta, à direita na altura da igreja. Cerveja gelada é importante. Está fazendo trinta graus!">Selvä, vasemmalle. Ja takaisin kirkon kohdalla oikealle. Kylmä olut on tärkeä. On kolmekymmentä astetta!</p>
    <p class="s" data-h="kertoja" data-pt="Pouco depois o Jay volta e põe gelo na caixa térmica.">Hetken päästä Jay tulee takaisin ja laittaa jäätä kylmälaukkuun.</p>
    <p class="s" data-h="kertoja" data-pt="Na rua já tem muita gente. A Marisa, amiga da Maia, chega na rua. Ela tem um tambor grande. A Marisa não vê a Maia.">Kadulla on jo paljon ihmisiä. Kadulle tulee Maian ystävä Marisa. Hänellä on iso rumpu. Marisa ei näe Maiaa.</p>
    <p class="s" data-h="malu" data-hairio="olla Maia → Maia on; ei nähdä Maia → en näe Maiaa" data-pt="Oi! Onde estar a Maia? Eu não ver a Maia. (errado de propósito: Missä Maia on? Minä en näe Maiaa.)">Hei! Missä olla Maia? Minä ei nähdä Maia.</p>
    <p class="s" data-h="maia" data-pt="Marisa! Estou ao lado da churrasqueira!">Marisa! <span data-l="olla#2">Olen</span> grillin vieressä!</p>
    <p class="s" data-h="jay" data-pt="Você fala finlandês! Que surpresa.">Sinä puhut suomea! Tämä on yllätys.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay viu a Marisa ontem, mas eles conversaram só um pouco. A Marisa estudou na Finlândia há muito tempo. Agora ela fala um pouco de finlandês.">Jay näki Marisan eilen, mutta he puhuivat vain vähän. Marisa <span data-l="olla#2">oli</span> koulussa Suomessa kauan sitten. Nyt hän puhuu vähän suomea.</p>
    <p class="s" data-h="malu" data-hairio="puhua huono suomi → puhun huonoa suomea; asua Rio → asun Riossa; rakastaa suomi → rakastan suomea" data-pt="É! Eu falar finlandês ruim. Eu morar Rio, mas eu amar finlandês! (errado de propósito: Minä puhun huonoa suomea. Minä asun Riossa, mutta minä rakastan suomea!)"><span data-rekisteri="puhe">Joo</span>! Minä puhua huono suomi. Minä asua Rio, mutta minä rakastaa suomi!</p>
    <p class="s" data-h="jay" data-pt="Você não fala finlandês ruim, não! Eu entendo tudo.">Et sinä puhu huonoa suomea! Minä ymmärrän kaiken.</p>
    <p class="s" data-h="kertoja" data-pt="O Walker sai de casa com a sanfona. Depois o Uuno e o Eenok chegam na rua. Eles estão de macacão azul-claro, mesmo com muito calor. Eles não suam.">Walker tulee talosta ulos haitarin kanssa. Sitten kadulle tulevat Uuno ja Eenok. Heillä on vaaleansiniset haalarit, vaikka on todella kuuma. He eivät hikoile.</p>
    <p class="s" data-h="maia" data-pt="Uuno e Eenok? Por que vocês estão aqui?">Uuno ja Eenok? Miksi te <span data-l="olla#2">olette</span> täällä?</p>
    <p class="s" data-h="uuno" data-pt="Boa noite. A Marta nos deu um convite.">Hyvää iltaa. Marta antoi meille kutsun.</p>
    <p class="s" data-h="eenok" data-pt="Obrigado pelo convite! Onde está a carne?">Kiitos kutsusta! Missä liha <span data-l="olla#2">on</span>?</p>
    <p class="s" data-h="kertoja" data-pt="São nove horas. A Marisa toca o tambor bem rápido e todo mundo na rua dança. Agora é hora da festa!">Kello on yhdeksän. Marisa <span data-l="soittaa#2">soittaa</span> rumpua nopeasti ja kaikki kadulla tanssivat. Nyt on juhlan aika!</p>
  </div>
  <p>A Marta traz feijão tropeiro; o Eenok pergunta de novo pela carne. A Marisa conta ao Jay que estudou um ano numa escola finlandesa e que em janeiro começa um emprego novo no Rio. O Jay entende tudo: o finlandês quebrado dela funciona.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde estas como blocos prontos:</p>
    <ul>
      <li><span class="fi">Vie se puun alle!</span> = leva para debaixo da árvore! · para onde? <span class="fi">alle</span>; onde? <span class="fi">alla</span>: a Gramática 1, mais abaixo</li>
      <li><span class="fi">Siellä ei ole jäätä.</span> = não tem gelo nela · depois de <span class="fi">ei ole</span>, o partitivo: <span class="fi">jää → jäätä</span></li>
      <li><span class="fi">Ei hätää.</span> = calma, não tem problema · expressão fixa, muito usada</li>
      <li><span class="fi">kadun kulmassa</span> = na esquina da rua · <span class="fi">kirkon kohdalla</span> = na altura da igreja · <span class="fi">apteekin vieressä</span> = ao lado da farmácia</li>
      <li><span class="fi">Hetken päästä</span> = pouco depois · palavra por palavra, “de um momento depois”; expressão fixa</li>
      <li><span class="fi">Marta antoi meille kutsun.</span> = a Marta nos deu um convite · <span class="fi">Kiitos kutsusta!</span> = obrigado pelo convite! · <span class="fi">kiitos</span> + <span class="fi pala">-sta</span> (lição 6)</li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="festa-rua">
  <h2>Exercício: o diálogo A</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Você entendeu o diálogo A?</h3>
    <p class="ohje">Volte ao diálogo se precisar.</p>
    <div class="valinta" data-oikea="Puun alle.">
      <p class="kysymys"><span class="fi">Mihin Jay vie pöydän?</span></p>
      <div class="vaihtoehdot"><button type="button">Talon taakse.</button><button type="button">Puun alle.</button><button type="button">Grillin viereen.</button></div>
    </div>
    <div class="valinta" data-oikea="Jäätä.">
      <p class="kysymys"><span class="fi">Mitä kylmälaukussa ei ole?</span></p>
      <div class="vaihtoehdot"><button type="button">Olutta.</button><button type="button">Lihaa.</button><button type="button">Jäätä.</button></div>
    </div>
    <div class="valinta" data-oikea="Apteekin vieressä.">
      <p class="kysymys"><span class="fi">Missä kauppa on?</span></p>
      <div class="vaihtoehdot"><button type="button">Apteekin vieressä.</button><button type="button">Kirkon vieressä.</button><button type="button">Talon edessä.</button></div>
    </div>
    <div class="valinta" data-oikea="Grillin vieressä.">
      <p class="kysymys"><span class="fi">Marisa ei näe Maiaa. Missä Maia on?</span></p>
      <div class="vaihtoehdot"><button type="button">Puun alla.</button><button type="button">Grillin vieressä.</button><button type="button">Kirkon kohdalla.</button></div>
    </div>
    <div class="valinta" data-oikea="Riossa.">
      <p class="kysymys"><span class="fi">Missä Marisa asuu?</span></p>
      <div class="vaihtoehdot"><button type="button">Belo Horizontessa.</button><button type="button">Suomessa.</button><button type="button">Riossa.</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="festa-rua">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="A festa e as direções" data-sanat="juhla,pöytä,puu,grilli,kylmälaukku,jää,rumpu,haitari,katu,kulma,kirkko,apteekki"></div>
  <p>As outras palavras da lição estão no <a href="#t14-vocabulario">Vocabulário da lição</a>.</p>
  <div class="saanto">
    <h3>oikealle ou oikealla?</h3>
    <p>As direções são casos “de fora” (lição 7) das palavras <span class="fi">oikea</span> (direito) e <span class="fi">vasen</span> (esquerdo). Para onde? <span class="fi pala">-lle</span>: <span class="fi">Käänny oikealle!</span> Onde? <span class="fi pala">-lla</span>: <span class="fi">Kirkko on oikealla.</span> (a igreja fica à direita). E “reto, em frente” é <span class="fi">suoraan</span>.</p>
    <table class="taivutus">
      <tr><th>para onde?</th><th>onde?</th><th>português</th></tr>
      <tr><td><span class="fi">oikealle</span></td><td><span class="fi">oikealla</span></td><td>para a direita · à direita</td></tr>
      <tr><td><span class="fi">vasemmalle</span></td><td><span class="fi">vasemmalla</span></td><td>para a esquerda · à esquerda</td></tr>
      <tr><td><span class="fi">suoraan</span></td><td>–</td><td>reto, em frente</td></tr>
    </table>
    <p><b>Repare em <span class="fi">vasen</span>:</b> antes da terminação, a palavra vira <span class="fi pala">vasemma-</span>: <span class="fi">vasen → vasemmalle, vasemmalla</span>. O <span class="fi pala">n</span> do fim vira <span class="fi pala">mm</span>. A palavra <span class="fi">oikea</span> não muda: <span class="fi">oikea → oikealle</span>.</p>
    <ul class="esim">
      <li class="s" data-pt="Vire à esquerda!">Käänny vasemmalle!</li>
      <li class="s" data-pt="Vá reto!">Mene suoraan!</li>
      <li class="s" data-pt="A farmácia fica à esquerda.">Apteekki <span data-l="olla#2">on</span> vasemmalla.</li>
    </ul>
    <p><b>Cuidado com o falso amigo:</b> “direto” e “direita” são quase iguais em português, mas em finlandês não têm nada em comum: reto é <span class="fi">suoraan</span>, direita é <span class="fi">oikea</span>. E <span class="fi">oikea</span> também quer dizer “certo”: <span class="fi">oikea vastaus</span> = a resposta certa.</p>
  </div>
</section>

<section class="osio" data-paikka="festa-rua">
  <h2>No mapa: leve o Jay até a loja</h2>
  <p class="ohje">Agora você é a Maia. O Jay está na mesa, debaixo da árvore, olhando para a esquina, e a cerveja esquenta um pouco a cada minuto. Primeiro ouça o caminho (▶). Depois guie o Jay com as ordens: <span class="fi">Mene suoraan!</span> anda um quarteirão para a frente; <span class="fi">Käänny oikealle!</span> e <span class="fi">Käänny vasemmalle!</span> viram o Jay sem andar. A seta mostra para onde ele está olhando. Cada ordem é um minuto, e a cerveja só fica gelada por doze: escute bem antes de mandar.</p>
  <div class="kartta" data-h="maia" data-akku="12" data-akku-kuvake="🍺" data-akku-yksikko=" min" data-kartta="#######|G......|####.##|####.##|####J##"
       data-nimet="0,0:apteekki;2,0:pankki;5,0:kirkko;6,2:kahvila;3,4:talo" data-maali="kauppa" data-maali-kuvake="🧊"
       data-ohje="Ouça o caminho e leve o Jay até a loja com os botões." data-nappi-ohjeet="Ouvir o caminho" data-nappi-alusta="Recomeçar"
       data-akku-nimi="Minutos de cerveja gelada" data-akku-loppu="Acabou o tempo: a cerveja esquentou. O Jay suspira: “Olut on lämmintä.” Toque em Recomeçar e tente com menos ordens.">
    <p data-rivi="ohjeet" data-puhu="Mene suoraan kadun kulmaan. Käänny kulmassa vasemmalle. Oikealla on kirkko: älä mene sinne. Mene suoraan. Kauppa on apteekin vieressä."></p>
    <p data-rivi="eteen" data-puhu="Mene suoraan!"></p>
    <p data-rivi="oikea" data-puhu="Käänny oikealle!"></p>
    <p data-rivi="vasen" data-puhu="Käänny vasemmalle!"></p>
    <p data-rivi="este" data-puhu="Ei sinne! Siinä on talo."></p>
    <p data-rivi="perilla" data-puhu="Hienoa, Jay! Nyt sinä olet kaupassa. Osta jäätä!"></p>
  </div>
  <p>A loja (<span class="fi">kauppa</span>) fica <span class="fi">apteekin vieressä</span>. À direita da esquina fica a igreja, e lá não tem gelo.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="festa-rua">
  <h2>Exercícios: as direções</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>2. Ligue a palavra à tradução</h3>
    <ul class="yhdista">
      <li data-pari="para a direita">oikealle</li>
      <li data-pari="para a esquerda">vasemmalle</li>
      <li data-pari="reto, em frente">suoraan</li>
      <li data-pari="na frente de">edessä</li>
      <li data-pari="atrás de">takana</li>
      <li data-pari="ao lado de">vieressä</li>
      <li data-pari="debaixo de">alla</li>
      <li data-pari="perto de">lähellä</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Ouça a Maia: para onde?</h3>
    <p class="ohje">Aperte ▶ e escolha para onde o Jay deve ir.</p>
    <div class="valinta" data-kuuntele="Käänny oikealle!" data-oikea="➡ para a direita">
      <p class="kysymys">Para onde?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">⬅ para a esquerda</button><button type="button">⬆ reto, em frente</button><button type="button">➡ para a direita</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mene suoraan!" data-oikea="⬆ reto, em frente">
      <p class="kysymys">Para onde?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">➡ para a direita</button><button type="button">⬆ reto, em frente</button><button type="button">⬅ para a esquerda</button></div>
    </div>
    <div class="valinta" data-kuuntele="Käänny vasemmalle!" data-oikea="⬅ para a esquerda">
      <p class="kysymys">Para onde?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">⬅ para a esquerda</button><button type="button">➡ para a direita</button><button type="button">⬆ reto, em frente</button></div>
    </div>
    <div class="valinta" data-kuuntele="Käänny kirkon kohdalla oikealle!" data-oikea="➡ para a direita">
      <p class="kysymys">Na altura da igreja, para onde?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">⬆ reto, em frente</button><button type="button">⬅ para a esquerda</button><button type="button">➡ para a direita</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="festa-rua">
  <h2>Pronúncia: o <span class="fi pala">n</span> que muda de som</h2>
  <p>Nesta lição há muitos genitivos antes de outra palavra: <span class="fi">kirkon kohdalla</span>, <span class="fi">Marisan puhelin</span>. O genitivo termina em <span class="fi pala">-n</span>, e na fala esse <span class="fi pala">n</span> se adapta à consoante seguinte, como já acontece dentro da palavra (<span class="fi">kenkä</span>, lição 10). A escrita não muda; só o som:</p>
  <table class="taivutus">
    <tr><th>escreve-se</th><th>soa</th><th>por quê</th></tr>
    <tr><td><span class="fi">Marisan puhelin</span><span class="kaannos" lang="pt-BR">o celular da Marisa</span></td><td><span class="fi pala">Marisam puhelin</span></td><td>antes de <span class="fi pala">p</span> e <span class="fi pala">m</span>, os lábios já se fecham: o <span class="fi pala">n</span> sai <span class="fi pala">m</span></td></tr>
    <tr><td><span class="fi">kadun päässä</span><span class="kaannos" lang="pt-BR">no fim da rua</span></td><td><span class="fi pala">kadum päässä</span></td><td>o mesmo: <span class="fi pala">n</span> + <span class="fi pala">p</span></td></tr>
    <tr><td><span class="fi">kirkon kohdalla</span><span class="kaannos" lang="pt-BR">na altura da igreja</span></td><td><span class="fi pala">kirkoŋ kohdalla</span></td><td>antes de <span class="fi pala">k</span>, o fundo da língua já sobe para o <span class="fi pala">k</span>: o <span class="fi pala">n</span> sai como o “ng” do inglês “sing”</td></tr>
    <tr><td><span class="fi">apteekin vieressä</span><span class="kaannos" lang="pt-BR">ao lado da farmácia</span></td><td><span class="fi pala">apteekin vieressä</span></td><td>antes de <span class="fi pala">v</span> (e das vogais), nada muda</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-pt="o celular da Marisa (soa: Marisam puhelin)">Marisan puhelin</li>
    <li class="s" data-pt="no fim da rua (soa: kadum päässä)">kadun päässä</li>
    <li class="s" data-pt="na altura da igreja (soa: kirkoŋ kohdalla)">kirkon kohdalla</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> não nasalize a vogal antes do <span class="fi pala">n</span>. Em <span class="fi">kirkon</span> o <span class="fi pala">o</span> fica puro, sem som de “õ”; só a língua (ou os lábios) muda de lugar no fim. E não separe as palavras com uma pausa: <span class="fi">kirkon kohdalla</span> se diz de uma vez.</p>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="festa-rua">
  <h2>Gramática 1 · Onde fica? Genitivo + posposição</h2>
  <p>Em português, “na frente de” vem <b>antes</b> do lugar. Em finlandês, a palavra de lugar vem <b>depois</b>, e o lugar fica no <b>genitivo</b> (<span class="fi pala">-n</span>, lição 5): <span class="fi">talon edessä</span> = “da casa na frente” = na frente da casa. Essas palavras se chamam <b>posposições</b>. Você já conhece uma: <span class="fi">haitarin kanssa</span> (com a sanfona).</p>
  <table class="taivutus">
    <tr><th>posposição</th><th>exemplo</th><th>português</th></tr>
    <tr><td><span class="fi">edessä</span></td><td><span class="fi">talon edessä</span></td><td>na frente da casa</td></tr>
    <tr><td><span class="fi">takana</span></td><td><span class="fi">pöydän takana</span></td><td>atrás da mesa</td></tr>
    <tr><td><span class="fi">vieressä</span></td><td><span class="fi">grillin vieressä</span></td><td>ao lado da churrasqueira</td></tr>
    <tr><td><span class="fi">välissä</span></td><td><span class="fi">puun ja grillin välissä</span></td><td>entre a árvore e a churrasqueira</td></tr>
    <tr><td><span class="fi">lähellä</span></td><td><span class="fi">kirkon lähellä</span></td><td>perto da igreja</td></tr>
    <tr><td><span class="fi">alla</span></td><td><span class="fi">puun alla</span></td><td>debaixo da árvore</td></tr>
    <tr><td><span class="fi">kohdalla</span></td><td><span class="fi">kirkon kohdalla</span></td><td>na altura da igreja</td></tr>
    <tr><td><span class="fi">ympäri</span></td><td><span class="fi">pöydän ympäri</span></td><td>em volta da mesa</td></tr>
    <tr><td><span class="fi">luona</span></td><td><span class="fi">Martan luona</span></td><td>na casa da Marta, com a Marta (sobretudo com pessoas)</td></tr>
    <tr><td><span class="fi">kautta</span></td><td><span class="fi">apteekin kautta</span></td><td>passando pela farmácia</td></tr>
    <tr><td><span class="fi">takia</span></td><td><span class="fi">sateen takia</span></td><td>por causa da chuva</td></tr>
  </table>
  <p>Algumas têm também uma forma para onde?, como os casos de lugar: <span class="fi">edessä → eteen</span>, <span class="fi">takana → taakse</span>, <span class="fi">vieressä → viereen</span>, <span class="fi">alla → alle</span>. <span class="fi">Vie pöytä puun alle!</span> = leve a mesa para debaixo da árvore. Depois: <span class="fi">Pöytä <span data-l="olla#2">on</span> puun alla.</span> = a mesa está debaixo da árvore.</p>
  <ul class="esim">
    <li class="s" data-pt="Leve a mesa para debaixo da árvore!">Vie pöytä puun alle!</li>
    <li class="s" data-pt="A mesa está debaixo da árvore.">Pöytä <span data-l="olla#2">on</span> puun alla.</li>
    <li class="s" data-pt="Vá para trás da casa!">Mene talon taakse!</li>
    <li class="s" data-pt="A caixa térmica está atrás da casa.">Kylmälaukku <span data-l="olla#2">on</span> talon takana.</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> a ordem é ao contrário do português, e, com quase todas as posposições desta lição, o lugar fica no genitivo, não na forma básica: <span class="fi">kirkon edessä</span>, não <span class="fi pala">kirkko edessä</span>. A exceção é <span class="fi">vastaan</span> (ao encontro de), que pede o partitivo: <span class="fi">Tulen sinua vastaan!</span> = vou te buscar! (<span class="fi">sinua</span>, não <span class="fi pala">sinun</span>). A palavra muda por dentro como em todo genitivo: <span class="fi">pöytä → pöydän takana</span>, <span class="fi">katu → kadun kulmassa</span>. Com pronomes (“ao meu lado”) entra mais uma terminação, que vem na lição 17.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="festa-rua">
  <h2>Exercícios: onde fica?</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>4. A rua da festa</h3>
    <p class="ohje">Você está na calçada, olhando a festa. O que está mais longe de você está <span class="fi">takana</span>; o que está mais perto está <span class="fi">edessä</span>. A caixa térmica (<span class="fi">kylmälaukku</span>) está debaixo da mesa. Toque nas palavras para ver as formas e responda.</p>
    <div class="aukiokuva">
      <div class="ak-rivi">
        <span class="ak-kohde"><span class="ak-kuva emoji" aria-hidden="true">🏠</span><span class="fi">talo</span></span>
        <span class="ak-kohde"><span class="ak-kuva emoji" aria-hidden="true">🌳</span><span class="fi">puu</span></span>
        <span class="ak-kohde"><span class="ak-kuva emoji" aria-hidden="true">💊</span><span class="fi">apteekki</span></span>
      </div>
      <div class="ak-rivi">
        <span class="ak-kohde"><span class="ak-kuva emoji" aria-hidden="true">🔥</span><span class="fi">grilli</span></span>
        <span class="ak-kohde"><span class="ak-kuva emoji" aria-hidden="true">🍽️</span><span class="fi">pöytä</span></span>
        <span class="ak-kohde"><span class="ak-kuva emoji" aria-hidden="true">🥁</span><span class="fi">rumpu</span></span>
      </div>
      <p class="ak-katu">↑ você, na calçada</p>
    </div>
    <div class="valinta" data-oikea="takana">
      <p class="kysymys"><span class="fi">Puu on pöydän ___.</span></p>
      <div class="vaihtoehdot"><button type="button">edessä</button><button type="button">vieressä</button><button type="button">takana</button></div>
    </div>
    <div class="valinta" data-oikea="Grillin ja rummun välissä.">
      <p class="kysymys"><span class="fi">Missä pöytä on?</span></p>
      <div class="vaihtoehdot"><button type="button">Talon ja puun välissä.</button><button type="button">Grillin ja rummun välissä.</button><button type="button">Puun ja apteekin välissä.</button></div>
    </div>
    <div class="valinta" data-oikea="pöydän">
      <p class="kysymys"><span class="fi">Kylmälaukku on ___ alla.</span> (pöytä)</p>
      <div class="vaihtoehdot"><button type="button">pöytä</button><button type="button">pöydän</button><button type="button">pöytää</button><button type="button">pöydällä</button></div>
    </div>
    <div class="valinta" data-oikea="alle">
      <p class="kysymys"><span class="fi">Jay, vie kylmälaukku pöydän ___!</span> (para onde?)</p>
      <div class="vaihtoehdot"><button type="button">alla</button><button type="button">alle</button></div>
    </div>
    <div class="valinta" data-oikea="taakse">
      <p class="kysymys"><span class="fi">Marisa, mene rummun kanssa puun ___!</span> (para onde?)</p>
      <div class="vaihtoehdot"><button type="button">takana</button><button type="button">taakse</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Traduza para o finlandês</h3>
    <p class="ohje">Escreva em finlandês. Todas as ordens são para uma pessoa só. Depois compare com o modelo.</p>
    <div class="kaanna"><p class="pt">A loja fica ao lado da farmácia.</p><p class="s" data-pt="A loja fica ao lado da farmácia.">Kauppa <span data-l="olla#2">on</span> apteekin vieressä.</p></div>
    <div class="kaanna"><p class="pt">Na altura da igreja, vire à direita!</p><p class="s" data-pt="Na altura da igreja, vire à direita!">Käänny kirkon kohdalla oikealle!</p></div>
    <div class="kaanna"><p class="pt">Fique aqui! Eu volto logo.</p><p class="s" data-pt="Fique aqui! Eu volto logo.">Pysy tässä! Tulen pian takaisin.</p></div>
    <div class="kaanna"><p class="pt">Leve a mesa para trás da casa!</p><p class="s" data-pt="Leve a mesa para trás da casa!">Vie pöytä talon taakse!</p></div>
    <div class="kaanna"><p class="pt">Eu estou ao lado da churrasqueira.</p><p class="s" data-pt="Eu estou ao lado da churrasqueira.">Minä <span data-l="olla#2">olen</span> grillin vieressä.</p></div>
    <div class="kaanna"><p class="pt">Calma! Vá reto e compre gelo.</p><p class="s" data-pt="Calma! Vá reto e compre gelo.">Ei hätää! Mene suoraan ja osta jäätä.</p></div>
    <div class="kaanna"><p class="pt">Espere na esquina. Eu vou te buscar!</p><p class="s" data-pt="Espere na esquina. Eu vou te buscar!">Odota kadun kulmassa. Tulen sinua vastaan!</p></div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Ouça e escreva</h3>
    <p class="ohje">Aperte ▶ e escreva a ordem que você ouviu. As três são para uma pessoa só.</p>
    <div class="sanelu" data-puhu="Käänny oikealle!"></div>
    <div class="sanelu" data-puhu="Odota talon edessä!"></div>
    <div class="sanelu" data-puhu="Älä mene kadulle!"></div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Aprofundar e fechar',
      html: `
<ul class="tavoitteet">
  <li>Você dá ordens para duas ou mais pessoas: <span class="fi">Tulkaa tänne! Pysykää siellä!</span></li>
  <li>Você proíbe com <span class="fi">älkää</span>: <span class="fi">Älkää naurako! Älkää juosko!</span></li>
  <li>Você usa as posposições da parte A nas ordens: <span class="fi">Menkää puun alle! Menkää pöydän taakse!</span></li>
</ul>

<p data-paikka="festa-rua">A festa está no auge. A Marisa toca o tambor, a Marta dança com os vizinhos, e na mesa debaixo da árvore as garrafas vazias já fazem uma fila. O Anderson brinca de “o mestre mandou” com as crianças da rua. Na Finlândia, a brincadeira se chama <span class="fi">Kapteeni käskee</span>: “o capitão manda”. A Maia entra na brincadeira, em finlandês, com o Jay e o Anderson. Ela dá as ordens para os dois juntos, então usa a forma para vocês.</p>

<section class="osio" data-lasna="walker,malu">
  <h2>Diálogo B: <span class="fi">Keskiyön jälkeen</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure as ordens com <span class="fi pala">-kaa/-kää</span> (para os dois), as ordens negativas com <span class="fi">älkää</span> e as palavras de lugar depois do genitivo (a Gramática 1 da parte A): <span class="fi">puun alle</span>, <span class="fi">pöydän taakse</span>. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t14-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="É uma hora da madrugada. O Walker ainda toca sanfona.">Kello on yksi yöllä. Walker <span data-l="soittaa#2">soittaa</span> vielä haitaria.</p>
    <p class="s" data-h="kertoja" data-pt="O Anderson e as crianças da rua brincam de &quot;o mestre mandou&quot;. Na Finlândia, o nome da brincadeira é Kapteeni käskee.">Anderson ja kadun lapset leikkivät <span data-l="leikki:part">leikkiä</span> <span lang="pt-BR">o mestre mandou</span>. Suomessa <span data-l="leikki:gen">leikin</span> nimi on Kapteeni käskee.</p>
    <p class="s" data-h="kertoja" data-pt="Agora a Maia brinca disso em finlandês com o Jay e o Anderson. A Maia é o capitão. O Anderson não sabe finlandês, mas faz como o Jay.">Nyt Maia leikkii sitä suomen kielellä Jayn ja Andersonin kanssa. Maia on kapteeni. Anderson ei osaa suomea, mutta hän tekee kuten Jay.</p>
    <p class="s" data-h="maia" data-pt="O capitão mandou: venham aqui!">Kapteeni käskee: tulkaa tänne!</p>
    <p class="s" data-h="jay" data-pt="Com certeza, capitão! A gente já vai.">Varmasti, kapteeni! Me tulemme heti.</p>
    <p class="s" data-h="maia" data-pt="O capitão mandou: vão para debaixo da árvore!">Kapteeni käskee: menkää puun alle!</p>
    <p class="s" data-h="kertoja" data-pt="O Jay e o Anderson vão para debaixo da árvore. O Anderson chega lá antes do Jay e ri.">Jay ja Anderson menevät puun alle. Anderson <span data-l="olla#2">on</span> puun alla ennen Jaytä ja nauraa.</p>
    <p class="s" data-h="maia" data-pt="O capitão mandou: vão para trás da mesa e fiquem lá!">Kapteeni käskee: menkää pöydän taakse ja pysykää siellä!</p>
    <p class="s" data-h="jay" data-pt="A gente está atrás da mesa. A gente obedece, capitão!">Me <span data-l="olla#2">olemme</span> pöydän takana. Me tottelemme, kapteeni!</p>
    <p class="s" data-h="maia" data-pt="O capitão mandou: não riam!">Kapteeni käskee: älkää naurako!</p>
    <p class="s" data-h="kertoja" data-pt="O Jay e o Anderson riem e correm em volta da mesa.">Jay ja Anderson nauravat ja juoksevat pöydän ympäri.</p>
    <p class="s" data-h="maia" data-pt="Vocês estão rindo! Agora não é brincadeira. Não corram em volta da mesa! Tem garrafas na mesa e as crianças estão perto.">Te nauratte! Nyt minä en leiki. Älkää juosko pöydän ympäri! Pöydällä on pulloja ja lapset <span data-l="olla#2">ovat</span> lähellä.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay ensina ao Anderson uma palavra nova em finlandês: &quot;Juoskaa!&quot; (Corram!). O Jay corre um pouco e o Anderson entende.">Jay opettaa Andersonille uuden suomen sanan: ”Juoskaa!” Jay juoksee vähän ja Anderson ymmärtää.</p>
    <p class="s" data-h="anderson" data-pt="Corram! Corram!">Juoskaa! Juoskaa!</p>
    <p class="s" data-h="maia" data-pt="As crianças correm para a rua! Agora o Anderson é o capitão e pode dar as ordens.">Lapset juoksevat kadulle! Nyt Anderson on kapteeni ja saa käskeä.</p>
    <p class="s" data-h="kertoja" data-pt="A noite está quente. O Uuno e o Eenok dançam. Eles ainda estão de macacão, mas não estão com calor. Ninguém pergunta por quê.">Yö on kuuma. Uuno ja Eenok tanssivat. Heillä on vielä haalarit, mutta heillä ei ole kuuma. Kukaan ei kysy miksi.</p>
    <p class="s" data-h="kertoja" data-pt="O Eenok olha as crianças e diz: &quot;Eu também já fui criança. Eu corria e brincava muito.&quot;">Eenok katsoo lapsia ja sanoo: ”Myös minä olin kerran lapsi. Minä juoksin ja <span data-l="leikkiä:imperf.1s">leikin</span> paljon.”</p>
    <p class="s" data-h="uuno" data-pt="Você nunca foi criança, Eenok.">Sinä et ollut koskaan lapsi, Eenok.</p>
    <p class="s" data-h="eenok" data-pt="Ah, é, esqueci.">Ai niin, unohdin.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay ri e bebe mais cerveja. O vizinho abre garrafas novas para ele o tempo todo.">Jay nauraa ja juo lisää olutta. Naapuri avaa hänelle koko ajan uusia pulloja.</p>
    <p class="s" data-h="maia" data-pt="Vocês dois, não abram mais garrafas! Jay, você já está bêbado.">Te kaksi, älkää avatko enää pulloja! Jay, sinä <span data-l="olla#2">olet</span> jo humalassa.</p>
    <p class="s" data-h="jay" data-pt="Eu com certeza não estou bêbado. Obrigado, vizinho!">Minä en varmasti <span data-l="olla#2">ole</span> humalassa. Kiitos, naapuri!</p>
    <p class="s" data-h="kertoja" data-pt="A Maia dança com a Marisa. Ela não vê o que o Jay faz. Na esquina tem um homem baixinho. O Jay vai até lá.">Maia tanssii Marisan kanssa. Hän ei näe, mitä Jay tekee. Kadun kulmassa on pieni mies. Jay kävelee sinne.</p>
    <p class="s" data-h="kertoja" data-pt="O homem está com a camisa preta e branca do Atlético. Na camisa tem um galo, o Galo.">Miehellä on musta ja valkoinen Atléticon paita. Paidassa on kukko, <span lang="pt-BR">o Galo</span>.</p>
    <p class="s" data-h="jay" data-pt="Oi, senhor Galo! Você é um galo bonito!">Moi, herra Kukko! Sinä olet hieno kukko!</p>
    <p class="s" data-h="kertoja" data-pt="O Jay diz isso por causa da camisa e ri. O homem não entende finlandês. Ele só vê que o Jay ri. Agora o homem está vermelho.">Jay sanoo niin paidan takia ja nauraa. Mies ei ymmärrä suomea. Hän näkee vain, että Jay nauraa. Mies on nyt punainen.</p>
    <p class="s" data-h="kertoja" data-pt="São quatro horas da manhã. O Walker não toca mais, e as pessoas vão para casa. O Jay não está mais na festa.">Kello on neljä aamulla. Walker ei <span data-l="soittaa#2">soita</span> enää ja ihmiset lähtevät kotiin. Jay ei <span data-l="olla#2">ole</span> enää juhlassa.</p>
    <p class="s" data-h="maia" data-pt="Cadê o Jay? Eu ligo para o Jay, mas o celular do Jay está aqui na mesa!">Missä Jay <span data-l="olla#2">on</span>? Minä soitan Jaylle, mutta Jayn puhelin <span data-l="olla#2">on</span> täällä pöydällä!</p>
    <p class="s" data-h="kertoja" data-pt="O Uuno está sentado num banco, quase dormindo.">Uuno istuu penkillä ja melkein nukkuu.</p>
    <p class="s" data-h="uuno" data-pt="Eu vi o Jay na esquina da rua às duas horas. Ele estava lá com um homem baixinho. O homem estava com uma camisa do Atlético.">Minä näin Jayn kadun kulmassa kello kaksi. Hän <span data-l="olla#2">oli</span> siellä pienen miehen kanssa. Miehellä oli Atlético-paita.</p>
  </div>
  <p>A Maia procura o Jay pela rua inteira. Nada. A Marisa, cansada de tanto tocar, dorme no sofá da Marta, abraçada ao tambor. O sol já está nascendo. A Maia não dorme.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Kapteeni käskee!</span> = o mestre mandou! · a brincadeira finlandesa: “o capitão manda”</li>
      <li><span class="fi">Varmasti! Me tulemme heti.</span> = com certeza! A gente já vai · indo até quem chama, o finlandês usa <span class="fi">tulla</span> (vir)</li>
      <li><span class="fi">Nyt minä en <span data-l="leikkiä">leiki</span>.</span> = agora não é brincadeira · <span class="fi">leikkiä</span> = brincar; <span class="fi">leikki</span> = a brincadeira</li>
      <li><span class="fi">Sinä et ollut koskaan lapsi.</span> = você nunca foi criança · <span class="fi">et ollut</span> = você não foi: o passado negativo, lição 15; com negação, <span class="fi">koskaan</span> = nunca</li>
      <li><span class="fi">koko ajan</span> = o tempo todo · <span class="fi">älkää avatko enää</span> = não abram mais: <span class="fi">enää</span> com negação = mais</li>
      <li><span class="fi">Sinä olet jo humalassa.</span> = você já está bêbado · <span class="fi">olla humalassa</span> = estar bêbado, uma forma fixa de lugar</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="clube-da-esquina">
  <h2>Gramática 2 · Ordens para vocês: <span class="fi">Tulkaa! Älkää naurako!</span></h2>
  <p>Na lição 9 você aprendeu a ordem para uma pessoa: <span class="fi">Tule! Älä juokse!</span> Para <b>duas ou mais pessoas</b>, a ordem termina em <span class="fi pala">-kaa/-kää</span>. É também a forma educada para uma pessoa que você trata por <span class="fi">te</span> (o senhor, a senhora), como no aeroporto da lição 10. Parta do infinitivo:</p>
  <table class="taivutus">
    <tr><th>infinitivo</th><th>para você</th><th>para vocês</th><th>o que tirar</th></tr>
    <tr><td><span class="fi">pysyä</span><span class="kaannos" lang="pt-BR">ficar</span></td><td><span class="fi">Pysy!</span></td><td><span class="fi">Pysykää!</span></td><td>tipo 1: o último <span class="fi pala">-ä</span></td></tr>
    <tr><td><span class="fi">nauraa</span><span class="kaannos" lang="pt-BR">rir</span></td><td><span class="fi">Naura!</span></td><td><span class="fi">Naurakaa!</span></td><td>tipo 1: o último <span class="fi pala">-a</span></td></tr>
    <tr><td><span class="fi">syödä</span><span class="kaannos" lang="pt-BR">comer</span></td><td><span class="fi"><span data-l="syödä:imper.2s">Syö</span>!</span></td><td><span class="fi">Syökää!</span></td><td>tipo 2: <span class="fi pala">-dä</span></td></tr>
    <tr><td><span class="fi">tulla</span><span class="kaannos" lang="pt-BR">vir</span></td><td><span class="fi">Tule!</span></td><td><span class="fi">Tulkaa!</span></td><td>tipo 3: <span class="fi pala">-la</span></td></tr>
    <tr><td><span class="fi">mennä</span><span class="kaannos" lang="pt-BR">ir</span></td><td><span class="fi">Mene!</span></td><td><span class="fi">Menkää!</span></td><td>tipo 3: <span class="fi pala">-nä</span></td></tr>
    <tr><td><span class="fi">juosta</span><span class="kaannos" lang="pt-BR">correr</span></td><td><span class="fi">Juokse!</span></td><td><span class="fi">Juoskaa!</span></td><td>tipo 3: <span class="fi pala">-ta</span></td></tr>
    <tr><td><span class="fi">avata</span><span class="kaannos" lang="pt-BR">abrir</span></td><td><span class="fi">Avaa!</span></td><td><span class="fi">Avatkaa!</span></td><td>tipo 4: <span class="fi pala">-a</span></td></tr>
    <tr><td><span class="fi">tarvita</span><span class="kaannos" lang="pt-BR">precisar</span></td><td><span class="fi">Tarvitse!</span></td><td><span class="fi">Tarvitkaa!</span></td><td>tipo 5: <span class="fi pala">-a</span></td></tr>
  </table>
  <p>Repare: a ordem para vocês usa o radical do <b>infinitivo</b>, com a mesma consoante do infinitivo: <span class="fi">avata → Avatkaa!</span>, mas <span class="fi">Avaa!</span> para uma pessoa. Nos tipos 4 e 5 fica o <span class="fi pala">t</span> do infinitivo. E depois de <span class="fi pala">-kaa</span> a consoante da palavra seguinte não dobra: <span class="fi">Tulkaa tänne!</span></p>
  <h3>Vocês, não!: <span class="fi">älkää</span> + <span class="fi pala">-ko/-kö</span></h3>
  <p>Para proibir, use <span class="fi">älkää</span> (o <span class="fi">älä</span> para vocês) e troque o <span class="fi pala">-kaa</span> da ordem por <span class="fi pala">-ko</span> (ou <span class="fi pala">-kää</span> por <span class="fi pala">-kö</span>):</p>
  <ul class="esim">
    <li class="s" data-pt="Riam! → Não riam!">Naurakaa! → Älkää naurako!</li>
    <li class="s" data-pt="Corram! → Não corram!">Juoskaa! → Älkää juosko!</li>
    <li class="s" data-pt="Abram! → Não abram!">Avatkaa! → Älkää avatko!</li>
    <li class="s" data-pt="Vão! → Não vão!">Menkää! → Älkää menkö!</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> “vocês correm” e “corram!” são parecidos em português; em finlandês, não. Afirmação: <span class="fi">Te juoksette.</span> Ordem: <span class="fi">Juoskaa!</span> E “não corram” é <span class="fi">Älkää juosko!</span>, nunca <span class="fi pala">älkää juoskaa</span>.</p>
  </div>
</section>

<section class="osio" data-paikka="clube-da-esquina">
  <h2>Kapteeni käskee: você brinca com o Jay e o Anderson</h2>
  <p class="ohje">A Maia é o capitão. Ouça cada ordem (▶) e decida o que o Jay e o Anderson fazem. A regra da brincadeira: só se obedece quando a ordem começa com <span class="fi">Kapteeni käskee</span>. Sem essas palavras, os dois ficam parados. Se você errar, o Anderson ri.</p>
  <div class="kapteeni" data-h="maia" data-nauraja="anderson" data-otsikko="Kapteeni käskee!" data-nauru="O Anderson ri: “Hahaha!” Ouça de novo." data-oikein="Isso! O Anderson bate palmas." data-loppu="Fim da brincadeira! O Anderson grita: “Juoskaa!”" data-laskuri="Ordens certas">
    <p class="s" data-h="maia" data-pt="O capitão mandou: venham aqui!" data-vaihtoehdot="Vêm até a Maia.|Vão para trás da mesa.|Ficam parados: o capitão não mandou." data-oikea="Vêm até a Maia.">Kapteeni käskee: tulkaa tänne!</p>
    <p class="s" data-h="maia" data-pt="Vão para debaixo da árvore!" data-vaihtoehdot="Vão para debaixo da árvore.|Ficam parados: o capitão não mandou.|Vão para trás da árvore." data-oikea="Ficam parados: o capitão não mandou.">Menkää puun alle!</p>
    <p class="s" data-h="maia" data-pt="O capitão mandou: não riam!" data-vaihtoehdot="Riem.|Não riem.|Ficam parados: o capitão não mandou." data-oikea="Não riem.">Kapteeni käskee: älkää naurako!</p>
    <p class="s" data-h="maia" data-pt="O capitão mandou: sentem no banco!" data-vaihtoehdot="Sentam no banco.|Dançam.|Ficam parados: o capitão não mandou." data-oikea="Sentam no banco.">Kapteeni käskee: istukaa penkille!</p>
    <p class="s" data-h="maia" data-pt="O capitão mandou: não corram em volta da mesa!" data-vaihtoehdot="Correm em volta da mesa.|Não correm.|Ficam parados: o capitão não mandou." data-oikea="Não correm.">Kapteeni käskee: älkää juosko pöydän ympäri!</p>
    <p class="s" data-h="maia" data-pt="Dancem!" data-vaihtoehdot="Dançam.|Não dançam.|Ficam parados: o capitão não mandou." data-oikea="Ficam parados: o capitão não mandou.">Tanssikaa!</p>
    <p class="s" data-h="maia" data-pt="O capitão mandou: não abram garrafas!" data-vaihtoehdot="Abrem uma garrafa.|Não abrem garrafas.|Ficam parados: o capitão não mandou." data-oikea="Não abrem garrafas.">Kapteeni käskee: älkää avatko pulloja!</p>
    <p class="s" data-h="maia" data-pt="O capitão mandou: não vão para a rua!" data-vaihtoehdot="Vão para a rua.|Não vão para a rua.|Ficam parados: o capitão não mandou." data-oikea="Não vão para a rua.">Kapteeni käskee: älkää menkö kadulle!</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="clube-da-esquina">
  <h2>Exercícios: ordens para vocês</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. A Maia manda nos dois: escreva a ordem</h3>
    <p class="ohje">Escreva a ordem para vocês (<span class="fi pala">-kaa/-kää</span>) do verbo entre parênteses. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p><span class="aukko" data-oikea="Tulkaa"></span> tänne! <span data-ei-kuplaa>(tulla)</span></p>
      <p><span class="aukko" data-oikea="Menkää"></span> puun alle! <span data-ei-kuplaa>(mennä)</span></p>
      <p><span class="aukko" data-oikea="Pysykää"></span> pöydän takana! <span data-ei-kuplaa>(pysyä)</span></p>
      <p><span class="aukko" data-oikea="Odottakaa"></span> grillin vieressä! <span data-ei-kuplaa>(odottaa)</span></p>
      <p><span class="aukko" data-oikea="Istukaa"></span> penkille! <span data-ei-kuplaa>(istua)</span></p>
      <p><span class="aukko" data-oikea="Kuunnelkaa"></span> haitaria! <span data-ei-kuplaa>(kuunnella)</span></p>
      <p><span class="aukko" data-oikea="Avatkaa"></span> kylmälaukku! <span data-ei-kuplaa>(avata)</span></p>
      <p><span class="aukko" data-oikea="Juoskaa"></span>! <span data-ei-kuplaa>(juosta)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>8. Ouça: para você ou para vocês?</h3>
    <p class="ohje">Aperte ▶. A ordem é para uma pessoa (sem terminação) ou para duas ou mais (<span class="fi pala">-kaa/-kää</span>, <span class="fi">älkää</span>)?</p>
    <div class="valinta" data-kuuntele="Tulkaa tänne!" data-oikea="para vocês">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">para você</button><button type="button">para vocês</button></div>
    </div>
    <div class="valinta" data-kuuntele="Odota tässä!" data-oikea="para você">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">para você</button><button type="button">para vocês</button></div>
    </div>
    <div class="valinta" data-kuuntele="Älkää menkö kadulle!" data-oikea="para vocês">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">para vocês</button><button type="button">para você</button></div>
    </div>
    <div class="valinta" data-kuuntele="Älä naura!" data-oikea="para você">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">para vocês</button><button type="button">para você</button></div>
    </div>
  </div>
</section>

<aside class="kulttuuri" data-paikka="clube-da-esquina">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Festa na rua e o Clube da Esquina</h3>
  <figure class="kuva" data-kuva="festa-rua">
    <span class="huuto" data-x="22" data-y="34" data-aani="mies" data-vaihto="7" data-pt="corram!">Juoskaa!</span>
    <span class="huuto" data-x="64" data-y="22" data-aani="nainen" data-vaihto="0" data-pt="não corram!">Älkää juosko!</span>
  </figure>
  <p>Em Belo Horizonte, festa de rua é coisa de vizinho. Os moradores pedem licença à prefeitura, fecham a rua para os carros, põem mesas na calçada, e cada família traz um prato: feijão tropeiro, pão de queijo, frango com quiabo. Tem cerveja gelada, samba, criança correndo até tarde e alguém mais velho que sabe todas as músicas. No fim do ano e no carnaval, os <b>blocos de rua</b> tocam tambor pela cidade inteira, como na foto.</p>
  <p>A música da cidade tem um nome famoso: <b>Clube da Esquina</b>. Nos anos 1960 e 1970, um grupo de jovens músicos de Belo Horizonte se encontrava numa esquina do bairro Santa Tereza para tocar violão e conversar. O nome pegou. Em 1972 saiu um disco duplo chamado assim, que misturava canção brasileira, jazz e rock, e a música de Minas ficou conhecida no Brasil inteiro. O Walker toca essas canções na sanfona há quarenta anos.</p>
  <p>Na Finlândia também tem festa de rua, <span class="fi">katujuhla</span>, mas no verão: em dezembro faz frio e escurece às três.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercício: vocês, não!</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>9. Vocês, não! Escolha a forma</h3>
    <p class="ohje">Depois de <span class="fi">älkää</span> vem a forma com <span class="fi pala">-ko/-kö</span>. O verbo está entre parênteses.</p>
    <div class="valinta" data-oikea="naurako">
      <p class="kysymys"><span class="fi">Älkää ___!</span> (nauraa, rir)</p>
      <div class="vaihtoehdot"><button type="button">naurakaa</button><button type="button">naurako</button><button type="button">naura</button><button type="button">nauratte</button></div>
    </div>
    <div class="valinta" data-oikea="avatko">
      <p class="kysymys"><span class="fi">Älkää ___ enää pulloja!</span> (avata, abrir)</p>
      <div class="vaihtoehdot"><button type="button">avaa</button><button type="button">avaatte</button><button type="button">avatkaa</button><button type="button">avatko</button></div>
    </div>
    <div class="valinta" data-oikea="menkö">
      <p class="kysymys"><span class="fi">Älkää ___ kadulle!</span> (mennä, ir)</p>
      <div class="vaihtoehdot"><button type="button">menkö</button><button type="button">menkää</button><button type="button">mene</button><button type="button">menette</button></div>
    </div>
    <div class="valinta" data-oikea="Älkää">
      <p class="kysymys"><span class="fi">___ juosko pöydän ympäri!</span> (para o Jay e o Anderson)</p>
      <div class="vaihtoehdot"><button type="button">Älä</button><button type="button">Älkää</button><button type="button">Ette</button></div>
    </div>
  </div>
</section>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>As direções na rua: mais curtas</h3>
  <p>Na fala, as ordens mais usadas encolhem (lição 9): <span class="fi">mene</span> vira <span class="fi" data-rekisteri="puhe">mee</span>, <span class="fi">tule</span> vira <span class="fi" data-rekisteri="puhe">tuu</span>. Nas direções, o <span class="fi pala">ea</span> vira <span class="fi pala">ee</span>: <span class="fi">oikealle</span> soa <span class="fi" data-rekisteri="puhe">oikeelle</span>. E <span class="fi">tuon</span> (daquele) vira <span class="fi" data-rekisteri="puhe">ton</span>. Você não precisa falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">Tule tänne!</span></td><td><span class="fi" data-rekisteri="puhe">Tuu tänne!</span></td><td>venha cá!</td></tr>
    <tr><td><span class="fi">oikealle</span></td><td><span class="fi" data-rekisteri="puhe">oikeelle</span></td><td>para a direita</td></tr>
    <tr><td><span class="fi">tuon kirkon takana</span></td><td><span class="fi" data-rekisteri="puhe">ton kirkon takana</span></td><td>atrás daquela igreja</td></tr>
  </table>
  <p>No dia seguinte, o Jay explica para o Hiisi, por mensagem de voz, o caminho de volta da loja do gelo até a igreja:</p>
  <p class="s" data-h="jay" data-kirja="Mene suoraan ja käänny oikealle!" data-pt="Vá reto e vire à direita!">Mee suoraan ja käänny oikeelle!</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Fale você</h2>
  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>10. Responda às perguntas</h3>
    <p class="ohje">Responda em voz alta, com frases inteiras, antes de abrir o modelo. Nas ordens, fale com duas pessoas: <span class="fi pala">-kaa/-kää</span>.</p>
    <details class="vastaus"><summary lang="fi-FI">Missä kauppa on?</summary><p class="s" data-pt="A loja fica ao lado da farmácia. Vá reto e vire à esquerda na esquina.">Kauppa <span data-l="olla#2">on</span> apteekin vieressä. Mene suoraan ja käänny kulmassa vasemmalle.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kaksi ystävää tulee juhlaan. Mitä sinä sanot heille?</summary><p class="s" data-pt="Venham aqui! Sentem debaixo da árvore e peguem uma cerveja.">Tulkaa tänne! Istukaa puun alle ja ottakaa olutta.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Lapset juoksevat kadulla. Mitä sinä sanot heille?</summary><p class="s" data-pt="Não corram na rua! Venham para a calçada.">Älkää juosko kadulla! Tulkaa tänne pöydän viereen.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Olet kapteeni. Jay ja Anderson leikkivät. Mitä sinä käsket?</summary><p class="s" data-pt="O capitão mandou: vão para trás da mesa! O capitão mandou: não riam!">Kapteeni käskee: menkää pöydän taakse! Kapteeni käskee: älkää naurako!</p></details>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t14">
    <h3>Lição de casa</h3>
    <p>Desenhe num papel a sua rua ou a rua de uma festa que você conhece. Depois escreva as instruções em finlandês para dois amigos que vão ajudar na festa: quatro ordens com <span class="fi pala">-kaa/-kää</span> (<span class="fi">Menkää suoraan…, Viekää pöytä…</span>), uma proibição com <span class="fi">älkää</span> e duas frases com genitivo + posposição (<span class="fi">… on … vieressä</span>). Leia em voz alta e cuide do <span class="fi pala">n</span> antes de <span class="fi pala">k</span> e <span class="fi pala">p</span>.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia, para a festa na rua dos pais)</summary>
      <p class="s" data-pt="Venham às quatro horas.">Tulkaa kello neljä.</p>
      <p class="s" data-pt="Levem a mesa para debaixo da árvore grande.">Viekää pöytä ison puun alle.</p>
      <p class="s" data-pt="Ponham a churrasqueira ao lado da mesa.">Laittakaa grilli pöydän viereen.</p>
      <p class="s" data-pt="Comprem gelo na loja.">Ostakaa jäätä kaupasta.</p>
      <p class="s" data-pt="Não cheguem tarde demais!">Älkää tulko liian myöhään!</p>
      <p class="s" data-pt="A loja fica ao lado da farmácia.">Kauppa <span data-l="olla#2">on</span> apteekin vieressä.</p>
      <p class="s" data-pt="A farmácia fica perto da igreja.">Apteekki <span data-l="olla#2">on</span> kirkon lähellä.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t14">
    <li>Entendo e dou direções: Mene suoraan! Käänny vasemmalle!</li>
    <li>Digo onde estou com genitivo + posposição: Olen grillin vieressä. Kauppa on apteekin vieressä.</li>
    <li>Sei a diferença entre onde e para onde: puun alla × puun alle, talon takana × talon taakse.</li>
    <li>Dou ordens para vocês: Tulkaa! Menkää! Pysykää siellä!</li>
    <li>Proíbo com älkää: Älkää naurako! Älkää juosko!</li>
    <li>Sei a diferença entre oikealle (para onde?) e oikealla (onde?).</li>
    <li>Ouço o n que muda: kirkon kohdalla soa “kirkoŋ kohdalla”.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'kasky-te', otsikko: 'Ordens para vocês: Tulkaa! Menkää!', taso: 'essencial', hakuosa: 'h-imperatiivi', treeni: 't14-kasky-te',
      html: `
<p><b>Forma:</b> o radical do infinitivo + <span class="fi pala">-kaa/-kää</span>. Para duas ou mais pessoas, e para uma pessoa que você trata por <span class="fi">te</span> (o senhor, a senhora).</p>
<table class="taivutus">
  <tr><th>infinitivo</th><th>para você</th><th>para vocês</th><th>português</th></tr>
  <tr><td><span class="fi">puhua</span></td><td><span class="fi">Puhu!</span></td><td><span class="fi">Puhukaa!</span></td><td>falem!</td></tr>
  <tr><td><span class="fi">odottaa</span></td><td><span class="fi">Odota!</span></td><td><span class="fi">Odottakaa!</span></td><td>esperem!</td></tr>
  <tr><td><span class="fi">kääntyä</span></td><td><span class="fi">Käänny!</span></td><td><span class="fi">Kääntykää!</span></td><td>virem!</td></tr>
  <tr><td><span class="fi">juoda</span></td><td><span class="fi"><span data-l="juoda:imper.2s">Juo</span>!</span></td><td><span class="fi">Juokaa!</span></td><td>bebam!</td></tr>
  <tr><td><span class="fi">tulla</span></td><td><span class="fi">Tule!</span></td><td><span class="fi">Tulkaa!</span></td><td>venham!</td></tr>
  <tr><td><span class="fi">mennä</span></td><td><span class="fi">Mene!</span></td><td><span class="fi">Menkää!</span></td><td>vão!</td></tr>
  <tr><td><span class="fi">avata</span></td><td><span class="fi">Avaa!</span></td><td><span class="fi">Avatkaa!</span></td><td>abram!</td></tr>
  <tr><td><span class="fi">pelata</span></td><td><span class="fi">Pelaa!</span></td><td><span class="fi">Pelatkaa!</span></td><td>joguem!</td></tr>
</table>
<p>O que tirar do infinitivo: no tipo 1, o último <span class="fi pala">-a/-ä</span> (<span class="fi">odottaa</span> → <span class="fi pala">odotta-</span>); no tipo 2, o <span class="fi pala">-da/-dä</span> (<span class="fi">juoda</span> → <span class="fi pala">juo-</span>); no tipo 3, as duas últimas letras (<span class="fi">tulla</span> → <span class="fi pala">tul-</span>); nos tipos 4 e 5, o último <span class="fi pala">-a/-ä</span> (<span class="fi">avata</span> → <span class="fi pala">avat-</span>, <span class="fi">tarvita</span> → <span class="fi pala">tarvit-</span>). A consoante é a mesma do infinitivo: <span class="fi">Odottakaa!</span> (mas <span class="fi">Odota!</span>).</p>`
    },
    {
      id: 'kielto-te', otsikko: 'Vocês, não!: Älkää juosko!', taso: 'essencial', hakuosa: 'h-imperatiivi', treeni: 't14-kielto-te',
      html: `
<p><b>Forma:</b> <span class="fi">älkää</span> + o mesmo radical + <span class="fi pala">-ko/-kö</span>. Truque: pegue a ordem e troque <span class="fi pala">-kaa</span> por <span class="fi pala">-ko</span>, <span class="fi pala">-kää</span> por <span class="fi pala">-kö</span>.</p>
<table class="taivutus">
  <tr><th>ordem</th><th>proibição</th><th>português</th></tr>
  <tr><td><span class="fi">Juoskaa!</span></td><td><span class="fi">Älkää juosko!</span></td><td>corram! · não corram!</td></tr>
  <tr><td><span class="fi">Naurakaa!</span></td><td><span class="fi">Älkää naurako!</span></td><td>riam! · não riam!</td></tr>
  <tr><td><span class="fi">Avatkaa!</span></td><td><span class="fi">Älkää avatko!</span></td><td>abram! · não abram!</td></tr>
  <tr><td><span class="fi">Menkää!</span></td><td><span class="fi">Älkää menkö!</span></td><td>vão! · não vão!</td></tr>
</table>
<p>Compare as três negações: <span class="fi">Älä juokse!</span> (você, não corra!), <span class="fi">Älkää juosko!</span> (vocês, não corram!), <span class="fi">Te ette juokse.</span> (vocês não correm: afirmação).</p>`
    },
    {
      id: 'postpositiot', otsikko: 'Onde fica? Genitivo + posposição', taso: 'essencial', hakuosa: 'h-postpositiot', treeni: 't14-postpositiot',
      html: `
<p><b>Forma:</b> o lugar no <b>genitivo</b> (<span class="fi pala">-n</span>) + a posposição: <span class="fi">puun alla</span> (debaixo da árvore), <span class="fi">Martan luona</span> (na casa da Marta), <span class="fi">apteekin kautta</span> (passando pela farmácia). Exceção: <span class="fi">vastaan</span> pede o partitivo: <span class="fi">sinua vastaan</span> (ao seu encontro).</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">talon edessä</span></td><td>na frente da casa</td></tr>
  <tr><td><span class="fi">pöydän takana</span></td><td>atrás da mesa</td></tr>
  <tr><td><span class="fi">grillin vieressä</span></td><td>ao lado da churrasqueira</td></tr>
  <tr><td><span class="fi">kirkon lähellä</span></td><td>perto da igreja</td></tr>
  <tr><td><span class="fi">puun ja grillin välissä</span></td><td>entre a árvore e a churrasqueira</td></tr>
  <tr><td><span class="fi">puun alla</span></td><td>debaixo da árvore</td></tr>
  <tr><td><span class="fi">Martan luona</span></td><td>na casa da Marta</td></tr>
</table>
<p>Para onde? <span class="fi">eteen, taakse, viereen, alle</span>: <span class="fi">Vie pöytä puun alle!</span> O genitivo muda por dentro como sempre; veja na tabela:</p>
<div class="sijataulu" data-sana="katu" data-sijat="nominatiivi,genetiivi"></div>
<div class="sijataulu" data-sana="pöytä" data-sijat="nominatiivi,genetiivi"></div>`
    },
    {
      id: 'suunnat', otsikko: 'Direções: oikealle, vasemmalla, suoraan', taso: 'essencial', hakuosa: 'h-ulkosijat', treeni: 't14-suunnat',
      html: `
<p><b>Para onde?</b> <span class="fi pala">-lle</span>: <span class="fi">oikealle, vasemmalle</span>. <b>Onde?</b> <span class="fi pala">-lla</span>: <span class="fi">oikealla, vasemmalla</span>. São os casos “de fora” (lição 7) de <span class="fi">oikea</span> (direito) e <span class="fi">vasen</span> (esquerdo); <span class="fi">vasen</span> vira <span class="fi pala">vasemma-</span> antes da terminação. Reto: <span class="fi">suoraan</span>.</p>
<ul class="esim">
  <li class="s" data-pt="Vire à esquerda!">Käänny vasemmalle!</li>
  <li class="s" data-pt="A igreja fica à direita.">Kirkko <span data-l="olla#2">on</span> oikealla.</li>
  <li class="s" data-pt="Virem à esquerda!">Kääntykää vasemmalle!</li>
  <li class="s" data-pt="Vá reto até a esquina!">Mene suoraan kulmaan!</li>
</ul>
<p><b>Falso amigo:</b> direto = <span class="fi">suoraan</span>; direita = <span class="fi">oikea</span>. E <span class="fi">oikea</span> também é “certo”.</p>`
    },
    {
      id: 'assimilaatio', otsikko: 'Pronúncia: kirkon kohdalla soa “kirkoŋ kohdalla”', taso: 'atenção', hakuosa: 'h-aakkoset',
      html: `
<p>O <span class="fi pala">-n</span> do fim da palavra se adapta à consoante seguinte. A escrita não muda.</p>
<ul class="esim">
  <li class="s" data-pt="o celular da Marisa (soa: Marisam puhelin)">Marisan puhelin</li>
  <li class="s" data-pt="no fim da rua (soa: kadum päässä)">kadun päässä</li>
  <li class="s" data-pt="na altura da igreja (soa: kirkoŋ kohdalla)">kirkon kohdalla</li>
</ul>
<p>Antes de <span class="fi pala">p</span> e <span class="fi pala">m</span>: <span class="fi pala">n → m</span>. Antes de <span class="fi pala">k</span>: o fundo da língua sobe, e o <span class="fi pala">n</span> sai como o “ng” do inglês “sing”. Sem nasalizar a vogal.</p>`
    },
    {
      id: 'sudenkuopat14', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>A ordem para vocês não tem -tte:</b> <span class="fi">Tulkaa!</span> (venham!), mas <span class="fi">Te tulette.</span> (vocês vêm).</li>
  <li><b>“Não corram” = <span class="fi">Älkää juosko!</span></b>, nunca <span class="fi pala">älkää juoskaa</span>.</li>
  <li><b>A posposição vem depois, com genitivo:</b> <span class="fi">kirkon edessä</span>, não “edessä kirkko”. Exceção: <span class="fi">sinua vastaan</span>, com partitivo.</li>
  <li><b>Onde ou para onde?</b> <span class="fi">puun alla</span> (onde) × <span class="fi">puun alle</span> (para onde); <span class="fi">takana</span> × <span class="fi">taakse</span>.</li>
  <li><b>direto ≠ direita:</b> <span class="fi">suoraan</span> = reto; <span class="fi">oikealle</span> = para a direita. E <span class="fi">vasen</span> vira <span class="fi">vasemmalle</span>.</li>
  <li><b><span class="fi">pankki</span> ≠ <span class="fi">penkki</span>:</b> <span class="fi">pankki</span> é o banco do dinheiro; <span class="fi">penkki</span> é o banco de sentar, onde o Uuno dorme.</li>
  <li><b>Na rua = <span class="fi">kadulla</span></b>, com <span class="fi pala">-lla</span>, nunca <span class="fi pala">kadussa</span>.</li>
</ul>`
    }
  ]
});
