/* Tottakai, lição 16: ma 28.12.2026, myöhäiset joulujuhlat Maian vanhempien kotona ja lähtö yöbussilla Rioon Belo
   Horizonten linja-autoasemalta (docs/RUNKO_13_20.md §5; OPPITUNNIT_6_20.md §5d). Passon jakso 16 Maian näkökulmasta. Oma
   materiaali, ei kirjan tekstiä. Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A ”Parte A · Encontro” (#t16): iltapäivä ja ilta Martan ja Walkerin kotona. Lukittu dialogi A
     (ass/luonnokset/t16-a-1_lopullinen.md, omistaja 7.11.2026): essiivi (lapsena, jouluna, PR-sihteerinä), vaan ja koska,
     Martan lista suomeksi, ei lentokoneella vaan bussilla, Marisan hoono soomi (data-hairio: asua → asun, aloittaa töissä →
     aloitan työt), viimeinen sana ei ole maito vaan Marisa, Martan portugalinkielinen käsky. Frases prontas, tehtävä 1,
     kikka A: .tehtavalista ”A lista da Marta em finlandês” (siirretty t15:stä 7.11.2026 ja muunnettu: Jayn neljä tehtävää,
     te-käskyt, ”Kaikki on valmista”, ei parveketta: #48, #52), sanasto, ääntäminen (ie, uo, yö), tehtävä 2, Gramática 1
     (essiivi valmiina ilmauksina; vaan, koska, kun) → tehtävät 3–4.
   - osa B ”Parte B · Aprofundar e fechar” (#t16-b): klo 22.30 linja-autoasemalla. Lukittu dialogi B
     (t16-b-1_lopullinen.md): translatiivi (tuli väsyneeksi, muuttuu juhlaksi, ei portugaliksi vaan suomeksi, muuttuu
     hiljaiseksi), Andersonin KIITOS-kirje passiin, Martan portugalinkielinen repliikki ja Maian tahallisen väärä käännös,
     yöbussi Rioon kello 23. Frases prontas, Gramática 2 (translatiivi; essivo forte × translativo fraco, väsyä), tehtävät
     5–7 (7 = .aikajana ”O relógio da última noite”, t13:n komponentti), kulttuuri (Natal no verão, Natal no escuro,
     siirretty t15:stä, kuva natal-bh), tehtävä 8 (omistajan hyväksymät käännösparit, #59), Na rua (me mennään, me ollaan:
     Maia ja Jay bussissa), kotitehtävä, itsearvio.
   Poistettu 7.11.2026 (RUNKO §11.1): vanhan katujuhlan .vastaaja-kopio (komponentti siirtyi t15:n osaan A, jossa sen
   muunnettu kopio on; translatiivin ääniviestit kuuluivat vanhaan tarinaan ja osan A kehyssääntöön ne eivät sopineet) ja
   katujuhlan kulttuurilaatikko (siirtyi t14:ään). Suomea puhuvat Maia, Jay ja Marisa (hoono soomi); Marta puhuu
   portugalia, Anderson ja Walker eivät puhu. Kirjakieli kaikkialla; puhekieli vain Na rua -nurkassa. Ei passiivia (t20),
   ei omistusliitteitä (t17), ei perfektiä (t19). Vastaajan Soitin-sana ja soittaa#2 (soittaa haitaria) kiinnitetään
   data-l:llä. */
Kurssi.lisaa({
  id: 't16',
  lyhyt: '16',
  jakso: 'Lição 16',
  otsikko: 'Festa e despedida: como, quando e em que se transforma (essivo e translativo)',
  lahde: 'Tema: a última festa de Natal na casa da Marta, a lista de tarefas, a despedida na rodoviária e o ônibus da noite para o Rio · Gramática: o essivo -na/-nä (lapsena, jouluna, maanantaina, PR-sihteerinä), as conjunções vaan, koska e kun, e o translativo -ksi (tulla väsyneeksi, muuttua juhlaksi, suomeksi) · Pronúncia: os ditongos ie, uo, yö numa sílaba só',
  aiheet: ['vapaa', 'tunteet', 'ominaisuus', 'aika'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; traduz a lista da Marta para o finlandês' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; quatro tarefas, uma dança e uma carta no passaporte' },
    malu: { nimi: 'Marisa', tyyppi: 'nainen', vaihto: 5, kuvaus: 'amiga da Maia; estudou na Finlândia e fala um finlandês quebrado que funciona; mora no Rio e vai no mesmo ônibus' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 5, kuvaus: 'mãe da Maia; escreve com letra de médico e dá as ordens da festa (fala português)' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 7, kuvaus: 'pai da Maia; toca sanfona na rodoviária' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; treinou uma palavra em finlandês a semana toda' }
  },

  sanasto: [
    'juhla', 'tanssia', 'tehtävä', 'tehtävälista', 'kutsua', 'lääkäri', 'pestä', 'olut', 'maito', 'lento', 'bussi',
    'PR-sihteeri', 'nukkuminen', 'lapsi', 'nuori', 'muusikko', 'kääntää',
    'asema', 'haitari', 'kirje', 'harjoitella', 'passi', 'itkeä', 'koskaan', 'henki',
    'muuttua', 'väsynyt', 'väsyä', 'hiljainen', 'iloinen', 'rohkea', 'hölmö'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Encontro',
      html: `
<ul class="tavoitteet">
  <li>Você diz como e quando: <span class="fi">lapsena</span> (quando criança), <span class="fi">jouluna</span> (no Natal), <span class="fi">maanantaina</span> (na segunda-feira).</li>
  <li>Você diz a profissão com “como”: <span class="fi">Tammikuussa Marisa on töissä PR-sihteerinä.</span></li>
  <li>Você entende uma lista de tarefas e as ordens dela: <span class="fi">osta, pese, vie</span>.</li>
  <li>Você diz <span class="fi pala">ie, uo, yö</span> numa sílaba só: <span class="fi">tie, Suomi, yö</span>.</li>
  <li>Parte B: o que muda, com <span class="fi pala">-ksi</span> (<span class="fi">Jay tuli väsyneeksi</span>), e em que língua (<span class="fi">suomeksi</span>).</li>
</ul>
<p data-paikka="natal-bh">Segunda-feira, 28 de dezembro, o último dia em Belo Horizonte. No sábado o Anderson tirou o Jay do porão do Marcus; no domingo a Maia e o Jay compraram o presente da Purjo na Savassi. Hoje à noite os dois vão para o Rio, e a Marta não deixa ninguém ir embora sem festa: mais uma festa de Natal, a última, com a árvore ainda na sala e a estrela dourada no alto.</p>

<section class="osio" data-paikka="bh-bairro">
  <h2>Diálogo A: <span class="fi">Martan lista</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure as palavras com <span class="fi pala">-na/-nä</span> no fim: <span class="fi">lapsena</span>, <span class="fi">jouluna</span>… Elas dizem quando ou como. Procure também <span class="fi">vaan</span> (“e sim”) e <span class="fi">koska</span> (porque). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t16-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-puhu="On maanantai kahdeskymmeneskahdeksas joulukuuta. Maia ja Jay ovat Belo Horizontessa Martan ja Walkerin kotona. On kesä ja iltapäivä on kuuma." data-pt="É segunda-feira, 28 de dezembro. A Maia e o Jay estão em Belo Horizonte, na casa da Marta e do Walker. É verão e a tarde está quente.">On maanantai 28. joulukuuta. Maia ja Jay ovat Belo Horizontessa Martan ja Walkerin kotona. On kesä ja iltapäivä on kuuma.</p>
    <p class="s" data-h="kertoja" data-pt="A Marta convida os vizinhos e os amigos para mais uma festa de Natal, porque a Maia e o Jay vão embora hoje. A festa é à noite.">Marta kutsuu naapurit ja ystävät vielä yhteen joulujuhlaan, koska Maia ja Jay lähtevät tänään. Juhla on illalla.</p>
    <p class="s" data-h="kertoja" data-pt="Na porta da geladeira está a lista de tarefas da Marta, em português. A Marta escreve como um médico. Só a Maia consegue ler a lista.">Jääkaapin ovessa on Martan tehtävälista portugaliksi. Marta kirjoittaa kuin lääkäri. Vain Maia osaa lukea listaa.</p>
    <p class="s" data-h="maia" data-pt="Jay, aqui está a lista da Marta em finlandês. Você tem quatro tarefas. Um: compre gelo e cerveja. Dois: lave os copos. Três: leve a mesa para fora. Quatro: à noite, dance com a minha mãe. A última palavra eu não consigo ler. Tem um M e mais alguma coisa.">Jay, tässä on Martan lista suomeksi. Sinulla on neljä tehtävää. Yksi: osta jäätä ja olutta. Kaksi: pese lasit. Kolme: vie pöytä ulos. Neljä: <span data-l="tanssia:imper.2s">tanssi</span> illalla äidin kanssa. Viimeistä sanaa en osaa lukea. Siinä on <span class="pala">M</span> ja jokin muu.</p>
    <p class="s" data-h="jay" data-pt="O M com certeza é leite. Eu vou ao mercado e compro leite e cerveja. Mas eu não danço. Quando criança eu dancei uma vez. Foi horrível."><span class="pala">M</span> on varmasti maito. Minä käyn kaupassa ja ostan maitoa ja olutta. Mutta minä en tanssi. Lapsena minä <span data-l="tanssia:imperf.1s">tanssin</span> kerran. Se oli kamalaa.</p>
    <p class="s" data-h="maia" data-pt="A minha mãe não pergunta, ela manda. No Brasil todo mundo dança no Natal.">Äiti ei kysy, vaan käskee. Brasiliassa kaikki tanssivat jouluna.</p>
    <p class="s" data-h="jay" data-pt="Tá bom. Mas quando o avião sai para o Rio?">Hyvä on. Mutta milloin lentokone lähtee Rioon?</p>
    <p class="s" data-h="maia" data-pt="A gente não vai voar para o Rio, a gente vai de ônibus, à noite.">Me emme lennä Rioon, vaan menemme yöllä bussilla.</p>
    <p class="s" data-h="jay" data-pt="De ônibus? Por quê?">Bussilla? Miksi?</p>
    <p class="s" data-h="maia" data-pt="Porque no Natal a passagem de avião é cara demais. O ônibus é barato e você pode dormir a noite toda.">Koska lento on jouluna liian kallis. Bussi on halpa ja sinä voit nukkua koko yön.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay sorri. Ele gosta de dormir quase tanto quanto de cerveja.">Jay hymyilee. Hän pitää nukkumisesta melkein yhtä paljon kuin oluesta.</p>
    <p class="s" data-h="kertoja" data-pt="A Marisa chega à porta. O Jay a conheceu no Natal. A Marisa fala um pouco de finlandês. Ela está com uma mala grande.">Ovelle tulee Marisa. Jay tapasi hänet jouluna. Marisa puhuu vähän suomea. Hänellä on iso laukku.</p>
    <p class="s" data-h="malu" data-pt="Oi, Jay! Eu vou com vocês para o Rio!">Moi, Jay! Minä tulen teidän kanssa Rioon!</p>
    <p class="s" data-h="jay" data-pt="Você vai no mesmo ônibus? Por quê?">Sinä tulet samalla bussilla? Miksi?</p>
    <p class="s" data-h="malu" data-pt="Eu morar no Rio. Em janeiro eu começar trabalho como secretária de RP. (errado de propósito: Eu moro no Rio. Em janeiro eu começo a trabalhar como secretária de RP.)">Minä <span data-hairio="asun">asua</span> Riossa. Tammikuussa minä <span data-hairio="aloitan työt">aloittaa töissä</span> PR-sihteerinä.</p>
    <p class="s" data-h="maia" data-pt="Jay, olha a lista! A última palavra não é leite, e sim Marisa. A minha mãe convidou ela.">Jay, katso listaa! Viimeinen sana ei ole maito, vaan Marisa. Äiti kutsui hänet.</p>
    <p class="s" data-h="jay" data-pt="E eu achei que a Marisa era leite.">Ja minä luulin, että Marisa oli maito.</p>
    <p class="s" data-h="kertoja" data-pt="Às seis horas a festa está pronta. A geladeira está cheia de cerveja e a Marta liga a música.">Kello kuusi juhla on valmis. Jääkaappi on täynnä olutta ja Marta laittaa musiikin päälle.</p>
    <p class="s" data-h="marta" data-pt="Meu filho, tarefa número quatro!"><span lang="pt-BR">Meu filho, tarefa número quatro!</span></p>
    <p class="s" data-h="jay" data-pt="Tá bom. Mas só uma dança.">Hyvä on. Mutta vain yksi tanssi.</p>
  </div>
  <p>Às sete a casa já está cheia: vizinhos com panelas de feijão tropeiro, amigas da Marta, crianças correndo entre as cadeiras. O Jay cumpre a tarefa número quatro: uma dança com a Marta. Uma só. A Marta diz que conta como três.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Lapsena minä <span data-l="tanssia:imperf.1s">tanssin</span> kerran.</span> = quando criança, eu dancei uma vez · <span class="fi">lapsena</span>: “como criança”, o caso <span class="fi pala">-na</span> (essivo), Gramática 1 desta parte</li>
      <li><span class="fi">Brasiliassa kaikki tanssivat jouluna.</span> = no Brasil todo mundo dança no Natal · <span class="fi">jouluna</span>: quando? o mesmo <span class="fi pala">-na</span></li>
      <li><span class="fi">Minä asun Riossa.</span> · <span class="fi">PR-sihteerinä</span> = eu moro no Rio · como secretária de RP: a profissão com <span class="fi pala">-na</span> (a Marisa diz <span class="pala">asua</span>: errado de propósito)</li>
      <li><span class="fi">Äiti ei kysy, vaan käskee.</span> = a minha mãe não pergunta, ela manda · <span class="fi">vaan</span> = “e sim”, só depois de uma negação</li>
      <li><span class="fi">Me emme lennä Rioon, vaan menemme yöllä bussilla.</span> = não vamos voar para o Rio, vamos de ônibus, à noite · <span class="fi">bussilla</span>: o meio com <span class="fi pala">-lla</span> (lição 7)</li>
      <li><span class="fi">Koska lento on jouluna liian kallis.</span> = porque no Natal a passagem é cara demais · <span class="fi">koska</span> = porque</li>
      <li><span class="fi">Hän pitää nukkumisesta melkein yhtä paljon kuin oluesta.</span> = ele gosta de dormir quase tanto quanto de cerveja · <span class="fi">pitää</span> + <span class="fi pala">-sta</span> (lição 8); <span class="fi">nukkuminen</span> = o dormir; <span class="fi">yhtä paljon kuin</span> (lição 11)</li>
      <li><span class="fi">Viimeistä sanaa en osaa lukea.</span> = a última palavra eu não consigo ler · negação: o objeto no partitivo (lição 12)</li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-bairro">
  <h2>Exercício: o diálogo A</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Você entendeu?</h3>
    <p class="ohje">Volte ao diálogo se precisar.</p>
    <div class="valinta" data-oikea="Neljä.">
      <p class="kysymys"><span class="fi">Montako tehtävää Jaylle on listassa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kolme.</button><button type="button">Neljä.</button><button type="button">Viisi.</button></div>
    </div>
    <div class="valinta" data-oikea="Bussilla.">
      <p class="kysymys"><span class="fi">Miten Maia ja Jay menevät Rioon?</span></p>
      <div class="vaihtoehdot"><button type="button">Lentokoneella.</button><button type="button">Bussilla.</button><button type="button">Autolla.</button></div>
    </div>
    <div class="valinta" data-oikea="Lento on liian kallis.">
      <p class="kysymys"><span class="fi">Miksi he eivät lennä?</span></p>
      <div class="vaihtoehdot"><button type="button">Lento on liian kallis.</button><button type="button">Lentokone on täynnä.</button><button type="button">Jay ei halua lentää.</button></div>
    </div>
    <div class="valinta" data-oikea="Riossa.">
      <p class="kysymys"><span class="fi">Missä Marisa asuu?</span></p>
      <div class="vaihtoehdot"><button type="button">Belo Horizontessa.</button><button type="button">Helsingissä.</button><button type="button">Riossa.</button></div>
    </div>
    <div class="valinta" data-oikea="Marisa.">
      <p class="kysymys"><span class="fi">Mikä on listan viimeinen sana?</span></p>
      <div class="vaihtoehdot"><button type="button">Maito.</button><button type="button">Marisa.</button><button type="button">Musiikki.</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="bh-bairro">
  <h2>A lista da Marta em finlandês</h2>
  <!-- Siirretty oppitunnilta 15 (7.11.2026, docs/RUNKO_13_20.md §11.1: .tehtavalista → L16 A) ja muunnettu myöhäisten
       joulujuhlien listaksi oppitunnin 16 materiaalivaiheessa 7.11.2026: Jayn neljä tehtävää dialogista, te-käskyt
       (oppitunti 14), ”Kaikki on valmista” (#48), ei parveketta (#52). -->
  <p>A Marta escreve uma lista de tarefas para cada festa da casa, com letra de médico e em português rápido. A Maia copiou a lista inteira em finlandês: as quatro tarefas do Jay você já ouviu no diálogo; aqui estão também as dos outros.</p>
  <p class="ohje">Toque numa tarefa: a Maia lê a ordem. Marque ✓ quando a tarefa estiver feita. Para uma pessoa, a ordem não tem terminação (<span class="fi">Osta!</span>); para duas ou mais, <span class="fi pala">-kaa/-kää</span> (<span class="fi">Viekää!</span>); “não!” é <span class="fi">älä</span> para uma pessoa e <span class="fi">älkää</span> para várias. As ordens: veja a lição 14.</p>
  <div class="tehtavalista" data-h="maia" data-otsikko="Martan tehtävälista" data-valmis="Kaikki on valmista. Hyvää joulua!">
    <p data-kenelle="jay" data-puhu="Jay, osta jäätä ja olutta!" data-pt="Jay, compre gelo e cerveja!">Jay, osta jäätä ja olutta!</p>
    <p data-kenelle="jay" data-puhu="Jay, pese lasit!" data-pt="Jay, lave os copos!">Jay, pese lasit!</p>
    <p data-kenelle="jay" data-puhu="Jay, vie pöytä ulos!" data-pt="Jay, leve a mesa para fora!">Jay, vie pöytä ulos!</p>
    <p data-kenelle="anderson" data-puhu="Jay ja Anderson, viekää tuolit ulos!" data-pt="Jay e Anderson, levem as cadeiras para fora!">Jay ja Anderson, viekää tuolit ulos!</p>
    <p data-kenelle="maia" data-puhu="Maia, kirjoita lista suomeksi!" data-pt="Maia, escreva a lista em finlandês!">Maia, kirjoita lista suomeksi!</p>
    <p data-kenelle="walker" data-puhu="Isä ja Anderson, älkää juoko olutta ennen iltaa!" data-pt="Pai e Anderson, não bebam cerveja antes da noite!">Isä ja Anderson, älkää juoko olutta ennen iltaa!</p>
    <p data-kenelle="jay" data-puhu="Jay, tanssi illalla äidin kanssa!" data-pt="Jay, à noite, dance com a minha mãe!">Jay, <span data-l="tanssia:imper.2s">tanssi</span> illalla äidin kanssa!</p>
  </div>
  <p>Embaixo da última linha a Marta escreveu só um M e mais alguma coisa. Não é <span class="fi">maito</span>.</p>
</section>

<section class="osio" data-paikka="bh-bairro">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="A festa e a viagem" data-sanat="juhla,tanssia,tehtävä,tehtävälista,jääkaappi,olut,maito,kutsua,lento,bussi,lapsi,PR-sihteeri"></div>
  <p>As outras palavras da lição estão no <a href="#t16-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Pronúncia: ie, uo, yö numa sílaba só</h2>
  <p>Em finlandês, <span class="fi pala">ie</span>, <span class="fi pala">uo</span> e <span class="fi pala">yö</span> são <b>ditongos</b> na primeira sílaba da palavra (ou de cada parte de uma palavra composta): duas vogais numa sílaba só. A boca começa na primeira vogal e desliza para a segunda, sem pausa e sem acento novo. O ouvido brasileiro tende a separar e a pôr o acento na segunda vogal. Na primeira vez, a Maia disse <span class="pala">su-Ô-mi</span>, em três sílabas e com o acento no meio, como uma palavra italiana. O Jay disse que ela tinha inventado um país novo. O certo é <span class="fi pala">SUO-mi</span>: duas sílabas, o acento na primeira. No diálogo A você ouviu <span class="fi">vie</span>, <span class="fi">yöllä</span>, <span class="fi">viimeinen</span> e <span class="fi">suomea</span>. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="estrada">tie</li>
    <li class="s" data-pt="noite">yö</li>
    <li class="s" data-pt="Finlândia">Suomi</li>
    <li class="s" data-pt="beber">juoda</li>
    <li class="s" data-pt="(ele) leva">vie</li>
    <li class="s" data-pt="cadeira">tuoli</li>
    <li class="s" data-pt="jovem">nuori</li>
    <li class="s" data-pt="meia-noite">keskiyö</li>
  </ul>
  <div class="saanto">
    <h3>Truque: deslize, não pare</h3>
    <p>Diga <span class="fi">tie</span> como uma batida só: <span class="pala">i</span> escorregando para <span class="pala">e</span>. Não é <span class="fi">tee</span> (chá), com <span class="pala">e</span> longo. E <span class="fi">tuoli</span> (cadeira) não é <span class="fi">tuli</span> (fogo).</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Exercício: a pronúncia</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>2. Ouça: qual palavra?</h3>
    <p class="ohje">Aperte ▶ sem ler e escolha a palavra que você ouviu. As palavras de cada par só diferem pelas vogais: preste atenção no ditongo, que é uma sílaba só e desliza (<span class="fi pala">ie, uo, yö</span>, e no passado <span class="fi pala">ei, oi, öi</span>).</p>
    <div class="valinta" data-kuuntele="tuoli" data-oikea="tuoli">
      <p class="kysymys">Que palavra você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">tuli</button><button type="button">tuoli</button><button type="button">tuuli</button></div>
    </div>
    <div class="valinta" data-kuuntele="tee" data-oikea="tee">
      <p class="kysymys">Que palavra você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">tie</button><button type="button">tee</button></div>
    </div>
    <div class="valinta" data-kuuntele="juo" data-oikea="juo">
      <p class="kysymys">Que palavra você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">jo</button><button type="button">juo</button></div>
    </div>
    <div class="valinta" data-kuuntele="tie" data-oikea="tie">
      <p class="kysymys">Que palavra você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">tie</button><button type="button">tee</button></div>
    </div>
    <div class="valinta" data-kuuntele="söi" data-oikea="söi">
      <p class="kysymys">Que palavra você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">syö</button><button type="button">söi</button></div>
    </div>
    <div class="valinta" data-kuuntele="vie" data-oikea="vie">
      <p class="kysymys">Que palavra você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">vei</button><button type="button">vie</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 1 · O essivo <span class="fi pala">-na/-nä</span>: como? quando?</h2>
  <p>O <b>essivo</b> diz <b>em que papel</b> ou <b>em que fase</b> alguém está (“como professor”, “quando criança”) e, com dias e festas, <b>quando</b>. A terminação é <span class="fi pala">-na/-nä</span>, a mesma das frases prontas <span class="fi">lauantaina</span> (lição 3), <span class="fi">tiistaina</span> (lição 7) e <span class="fi">jouluaattona</span> (lição 15): agora você conhece o caso. Nesta lição, guarde as formas abaixo como blocos prontos e reconheça a terminação; a bolha de cada palavra mostra a forma básica.</p>
  <table class="taivutus">
    <tr><th>palavra</th><th>essivo</th><th>português</th></tr>
    <tr><td><span class="fi">lapsi</span><span class="kaannos" lang="pt-BR">criança</span></td><td><span class="fi">lapsena</span></td><td>quando criança</td></tr>
    <tr><td><span class="fi">nuori</span><span class="kaannos" lang="pt-BR">jovem</span></td><td><span class="fi">nuorena</span></td><td>quando jovem</td></tr>
    <tr><td><span class="fi">opettaja</span><span class="kaannos" lang="pt-BR">professor</span></td><td><span class="fi">opettajana</span></td><td>como professor</td></tr>
    <tr><td><span class="fi">muusikko</span><span class="kaannos" lang="pt-BR">músico</span></td><td><span class="fi">muusikkona</span></td><td>como músico</td></tr>
    <tr><td><span class="fi">joulu</span><span class="kaannos" lang="pt-BR">Natal</span></td><td><span class="fi">jouluna</span></td><td>no Natal</td></tr>
    <tr><td><span class="fi">maanantai</span><span class="kaannos" lang="pt-BR">segunda-feira</span></td><td><span class="fi">maanantaina</span></td><td>na segunda-feira</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-pt="Em janeiro a Marisa vai trabalhar como secretária de RP.">Tammikuussa Marisa on töissä PR-sihteerinä.</li>
    <li class="s" data-pt="Quando criança, o Jay dançou uma vez.">Lapsena Jay tanssi kerran.</li>
    <li class="s" data-pt="Na segunda-feira a Maia e o Jay vão para o Rio.">Maanantaina Maia ja Jay lähtevät Rioon.</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> com <span class="fi">olla</span> sozinho, a profissão fica na forma básica: <span class="fi">Isä on muusikko.</span> (o pai é músico). O essivo entra quando há um “como”: <span class="fi">Isä on töissä muusikkona.</span> (o pai trabalha como músico). E as partes do dia usam <span class="fi pala">-lla</span>, não <span class="fi pala">-na</span>: <span class="fi">aamulla, illalla</span> (lição 13).</p>
  </div>
  <div class="saanto">
    <h3>Vaan, koska, kun</h3>
    <p>Depois de uma negação, “mas sim” é <span class="fi">vaan</span>: <span class="fi">Äiti ei kysy, vaan käskee.</span> Sem negação, “mas” é <span class="fi">mutta</span>. <span class="fi">Koska</span> = porque: <span class="fi">Menemme bussilla, koska lento on liian kallis.</span> E <span class="fi">kun</span> = quando, no meio da frase (parte B, e de novo na lição 18). O cartão “Quando, porque, e sim” da Gramática da lição tem mais exemplos.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: como? quando?</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Ligue: como? quando?</h3>
    <ul class="yhdista">
      <li data-pari="quando criança">lapsena</li>
      <li data-pari="quando jovem">nuorena</li>
      <li data-pari="no Natal">jouluna</li>
      <li data-pari="no sábado">lauantaina</li>
      <li data-pari="na segunda-feira">maanantaina</li>
      <li data-pari="como professor">opettajana</li>
      <li data-pari="como músico">muusikkona</li>
      <li data-pari="como secretária de RP">PR-sihteerinä</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Escreva o essivo</h3>
    <p class="ohje">Em que papel, em que fase, em que dia? Escreva a palavra entre parênteses com <span class="fi pala">-na/-nä</span>, como nos blocos prontos da tabela (<span class="fi">lapsena, jouluna</span>).</p>
    <div class="aukot" lang="fi-FI">
      <p><span class="aukko" data-oikea="Lapsena"></span> Jay tanssi kerran. <span data-ei-kuplaa>(lapsi)</span></p>
      <p><span class="aukko" data-oikea="Jouluna"></span> lento on liian kallis. <span data-ei-kuplaa>(joulu)</span></p>
      <p><span class="aukko" data-oikea="Maanantaina"></span> Maia ja Jay menevät Rioon. <span data-ei-kuplaa>(maanantai)</span></p>
      <p>Uuno on Brasiliassa <span class="aukko" data-oikea="turistina"></span>. <span data-ei-kuplaa>(turisti)</span></p>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Aprofundar e fechar',
      html: `
<ul class="tavoitteet">
  <li>Você diz o que muda: <span class="fi">Jay tuli väsyneeksi.</span> <span class="fi">Asema muuttuu juhlaksi.</span></li>
  <li>Você diz em que língua: <span class="fi">ei portugaliksi, vaan suomeksi</span>.</li>
  <li>Você escolhe entre o essivo e o translativo: <span class="fi">lapsena</span> (quando criança) × <span class="fi">väsyneeksi</span> (ficar cansado).</li>
  <li>Você reconhece o “nós” da fala, no quadro Na rua: <span class="fi">me</span> + a forma impessoal do verbo.</li>
</ul>

<p data-paikka="rodoviaria-bh">No Brasil, uma despedida não acaba em casa: ela vai junto até a rodoviária. A Maia, o Jay e a Marisa estão com as malas. O Walker trouxe a sanfona, como prometeu no domingo. E o Anderson está estranho: o dia inteiro com a mão fechada.</p>

<section class="osio" data-paikka="rodoviaria-bh">
  <h2>Diálogo B: <span class="fi">Asemalla</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Conte as palavras com <span class="fi pala">-ksi</span>: alguém fica de um jeito, alguma coisa vira outra, ou alguma coisa é dita numa língua. E compare o que a Marta diz em português com o que a Maia traduz para o Jay.</p>
  <div class="kpl" id="t16-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="É segunda-feira e são dez e meia da noite. A Maia, o Jay e a Marisa estão na rodoviária de Belo Horizonte. O ônibus para o Rio sai às onze.">On maanantai ja kello on puoli yksitoista illalla. Maia, Jay ja Marisa ovat Belo Horizonten asemalla. Bussi Rioon lähtee kello yksitoista.</p>
    <p class="s" data-h="kertoja" data-pt="Choveu à noite, mas agora está quente. A família da Maia e vinte pessoas da festa também vieram à rodoviária. Depois da festa o Jay ficou cansado. Ele só quer dormir no ônibus.">Illalla satoi, mutta nyt on lämmin. Maian perhe ja kaksikymmentä henkeä juhlasta tulivat myös asemalle. Juhlan jälkeen Jay tuli väsyneeksi. Hän haluaa vain nukkua bussissa.</p>
    <p class="s" data-h="kertoja" data-pt="O dia inteiro o Anderson tinha alguma coisa na mão. Ninguém viu o que era.">Koko päivän Andersonilla oli kädessä jokin. Kukaan ei nähnyt sitä.</p>
    <p class="s" data-h="kertoja" data-pt="O Walker toca sanfona e as pessoas dançam. A rodoviária vira uma festa.">Walker <span data-l="soittaa#2">soittaa</span> haitaria ja ihmiset tanssivat. Asema muuttuu juhlaksi.</p>
    <p class="s" data-h="kertoja" data-pt="O Anderson dá uma carta para o Jay. Nela há uma palavra, não em português, mas em finlandês: KIITOS.">Anderson antaa Jaylle kirjeen. Siinä on yksi sana, ei portugaliksi, vaan <span data-l="suomi:transl">suomeksi</span>: KIITOS.</p>
    <p class="s" data-h="maia" data-pt="O Anderson escreveu sozinho. Ele treinou a semana toda.">Anderson kirjoitti sen itse. Hän harjoitteli sitä koko viikon.</p>
    <p class="s" data-h="jay" data-pt="Obrigado, Anderson. No sábado você foi um herói. Homem finlandês nunca chora, mas agora eu choro um pouco.">Kiitos, Anderson. Lauantaina sinä olit sankari. Suomalainen mies ei itke koskaan, mutta nyt minä itken vähän.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay guarda a carta no passaporte, porque o passaporte ele nunca esquece.">Jay laittaa kirjeen passiin, koska passia hän ei unohda koskaan.</p>
    <p class="s" data-h="marta" data-pt="Fiquem em segurança. E você, fique longe de cativeiro. A gente não tem dinheiro pro resgate de gringo."><span lang="pt-BR">Fiquem em segurança. E você, fique longe de cativeiro. A gente não tem dinheiro pro resgate de gringo.</span></p>
    <p class="s" data-h="maia" data-pt="A minha mãe diz que, quando a gente estiver longe, a casa vai ficar quieta demais.">Äiti sanoo, että kun me olemme poissa, talo muuttuu liian hiljaiseksi.</p>
    <p class="s" data-h="jay" data-pt="Ah, que mãe querida!">Voi, miten mukava äiti!</p>
    <p class="s" data-h="kertoja" data-pt="Às onze horas a Maia, o Jay e a Marisa sobem no ônibus e o ônibus parte para o Rio.">Kello yksitoista Maia, Jay ja Marisa nousevat bussiin ja bussi lähtee Rioon.</p>
    <p class="s" data-h="kertoja" data-pt="Logo as luzes de Belo Horizonte somem. O ônibus chega ao Rio por volta das seis da manhã.">Pian Belo Horizonten valot ovat poissa. Bussi on Riossa noin kello kuusi aamulla.</p>
  </div>
  <p>O Jay dorme antes do fim da avenida, com o passaporte no bolso e a carta do Anderson dentro dele. A Marisa conversa baixinho com a Maia, em finlandês quebrado e em português rápido. Lá fora, a estrada molhada brilha. Às seis, o Rio.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Jay tuli väsyneeksi.</span> = o Jay ficou cansado · <span class="fi">tulla</span> + <span class="fi pala">-ksi</span>: ficar (uma mudança), Gramática 2</li>
      <li><span class="fi">Asema muuttuu juhlaksi.</span> = a rodoviária vira uma festa · <span class="fi">muuttua</span> + <span class="fi pala">-ksi</span>: virar</li>
      <li><span class="fi">ei portugaliksi, vaan <span data-l="suomi:transl">suomeksi</span></span> = não em português, mas em finlandês · <span class="fi pala">-ksi</span>: em que língua; <span class="fi">vaan</span> depois de negação</li>
      <li><span class="fi">Hän harjoitteli sitä koko viikon.</span> = ele treinou isso a semana toda · <span class="fi">harjoitella</span> = treinar, praticar</li>
      <li><span class="fi">Suomalainen mies ei itke koskaan.</span> = homem finlandês nunca chora · <span class="fi">ei … koskaan</span> = nunca</li>
      <li><span class="fi">Lauantaina sinä olit sankari.</span> = no sábado você foi um herói · <span class="fi">lauantaina</span>: o essivo da parte A; com <span class="fi">olla</span>, <span class="fi">sankari</span> fica na forma básica</li>
      <li><span class="fi">kun me olemme poissa</span> = quando a gente estiver longe · <span class="fi">kun</span> = quando; <span class="fi">poissa</span> = fora, longe</li>
      <li><span class="fi">kaksikymmentä henkeä</span> = vinte pessoas · <span class="fi">henki</span> = pessoa, quando se conta · <span class="fi">noin kello kuusi</span> = por volta das seis</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="rodoviaria-bh">
  <h2>Gramática 2 · O translativo <span class="fi pala">-ksi</span>: ficar, virar, em que língua</h2>
  <p>O <b>translativo</b> diz <b>no que</b> alguém ou alguma coisa se transforma, e <b>em que língua</b> alguma coisa é dita. A terminação é <span class="fi pala">-ksi</span>, no radical do genitivo (sem o <span class="fi pala">-n</span>): <span class="fi">iloinen → iloisen → iloiseksi</span>. Por isso o translativo tem a consoante fraca e o essivo a forte: <span class="fi">lapsena</span> × <span class="fi">lapseksi</span>, <span class="fi">muusikkona</span> × <span class="fi">muusikoksi</span>. Nesta lição, guarde os exemplos como blocos prontos; a bolha de cada palavra mostra a forma.</p>

  <h3>1. Ficar, virar</h3>
  <table class="taivutus">
    <tr><th>verbo</th><th>exemplo</th><th>português</th></tr>
    <tr><td><span class="fi">tulla</span> + <span class="fi pala">-ksi</span></td><td><span class="fi">Jay tuli väsyneeksi.</span></td><td>o Jay ficou cansado</td></tr>
    <tr><td><span class="fi">muuttua</span> + <span class="fi pala">-ksi</span></td><td><span class="fi">Asema muuttuu juhlaksi.</span></td><td>a rodoviária vira uma festa</td></tr>
    <tr><td><span class="fi">tehdä</span> + objeto + <span class="fi pala">-ksi</span></td><td><span class="fi">Olut tekee minut rohkeaksi.</span></td><td>a cerveja me deixa corajoso</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-pt="Quando a gente estiver longe, a casa vai ficar quieta demais.">Kun me olemme poissa, talo muuttuu liian hiljaiseksi.</li>
    <li class="s" data-pt="Em Helsinque nevou, e tudo ficou branco.">Helsingissä satoi lunta ja kaikki muuttui valkoiseksi.</li>
    <li class="s" data-pt="Quando o Hiisi dirige, a Purjo fica louca.">Kun Hiisi ajaa, Purjo tulee hulluksi.</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o português usa “ficar” para duas coisas: “ficar em casa” (estar) e “ficar cansado” (mudar). Em finlandês, para “ficar”, só a <b>mudança</b> leva <span class="fi pala">-ksi</span>: <span class="fi">Jay tuli väsyneeksi</span> (ficou cansado, mudou). O <b>estado</b> fica na forma básica com <span class="fi">olla</span>: <span class="fi">Jay on väsynyt</span> (está cansado). Nunca <span class="pala">Jay tuli väsynyt</span>. Para “cansar” existe também um verbo só: <span class="fi">Jay väsyi.</span> = <span class="fi">Jay tuli väsyneeksi.</span></p>
  </div>

  <h3>2. Em que língua? suomeksi, portugaliksi</h3>
  <p>O mesmo <span class="fi pala">-ksi</span> diz em que língua alguma coisa é dita, escrita ou traduzida: <span class="fi"><span data-l="suomi:transl">suomeksi</span></span> (em finlandês), <span class="fi">portugaliksi</span> (em português), <span class="fi">englanniksi</span> (em inglês). Você já viu <span class="fi">portugaliksi</span> na lição 12, <span class="fi"><span data-l="suomi:transl">suomeksi</span></span> na lição 15 e <span class="fi">Terveydeksi!</span> (“saúde!”, de <span class="fi pala">terveys</span>) na lição 7. Mas saber e falar uma língua vai no partitivo: <span class="fi">puhun suomea</span> (falo finlandês).</p>
  <ul class="esim">
    <li class="s" data-pt="Diga isso em português!">Sano se portugaliksi!</li>
    <li class="s" data-pt="Na carta há uma palavra, não em português, mas em finlandês.">Kirjeessä on yksi sana, ei portugaliksi, vaan <span data-l="suomi:transl">suomeksi</span>.</li>
    <li class="s" data-pt="Eu falo finlandês.">Minä puhun suomea.</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios da parte B</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Complete com o translativo</h3>
    <p class="ohje">Escreva a palavra entre parênteses com <span class="fi pala">-ksi</span>. Lembre: o radical do genitivo, sem o <span class="fi pala">-n</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Walker <span data-l="soittaa#2">soittaa</span> haitaria ja asema muuttuu <span class="aukko" data-oikea="juhlaksi"></span>. <span data-ei-kuplaa>(juhla)</span></p>
      <p>Kun me olemme poissa, talo muuttuu liian <span class="aukko" data-oikea="hiljaiseksi"></span>. <span data-ei-kuplaa>(hiljainen)</span></p>
      <p>Juhlan jälkeen Jay tuli <span class="aukko" data-oikea="väsyneeksi"></span>. <span data-ei-kuplaa>(väsynyt)</span></p>
      <p>Helsingissä satoi lunta ja kaikki muuttui <span class="aukko" data-oikea="valkoiseksi"></span>. <span data-ei-kuplaa>(valkoinen)</span></p>
      <p>Kun Hiisi ajaa, Purjo tulee <span class="aukko" data-oikea="hulluksi"></span>. <span data-ei-kuplaa>(hullu)</span></p>
      <p>Jay juo olutta ja tulee <span class="aukko" data-oikea="rohkeaksi"></span>. <span data-ei-kuplaa>(rohkea)</span></p>
      <p>Anderson kirjoitti kirjeen <span class="aukko" data-oikea="suomeksi"></span>. <span data-ei-kuplaa>(suomi)</span></p>
      <p>Marta sanoo sen <span class="aukko" data-oikea="portugaliksi"></span>. <span data-ei-kuplaa>(portugali)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Como, ficar ou forma básica?</h3>
    <p class="ohje">Escolha a forma. <span class="fi pala">-na/-nä</span> = como, quando; <span class="fi pala">-ksi</span> = ficar, virar, em que língua; sem terminação = a forma básica.</p>
    <div class="valinta" data-oikea="Lapsena">
      <p class="kysymys"><span class="fi">___ Jay tanssi kerran.</span> <span class="fi" data-ei-kuplaa>(lapsi)</span></p>
      <div class="vaihtoehdot"><button type="button">Lapsi</button><button type="button">Lapsena</button><button type="button">Lapseksi</button></div>
    </div>
    <div class="valinta" data-oikea="PR-sihteerinä">
      <p class="kysymys"><span class="fi">Tammikuussa Marisa on töissä ___.</span> <span class="fi" data-ei-kuplaa>(PR-sihteeri)</span></p>
      <div class="vaihtoehdot"><button type="button">PR-sihteerinä</button><button type="button">PR-sihteeriksi</button><button type="button">PR-sihteeri</button></div>
    </div>
    <div class="valinta" data-oikea="hölmöksi">
      <p class="kysymys"><span class="fi">Olut tekee Jayn ___.</span> <span class="fi" data-ei-kuplaa>(hölmö)</span></p>
      <div class="vaihtoehdot"><button type="button">hölmönä</button><button type="button">hölmö</button><button type="button">hölmöksi</button></div>
    </div>
    <div class="valinta" data-oikea="Jouluna">
      <p class="kysymys"><span class="fi">___ lento on liian kallis.</span> <span class="fi" data-ei-kuplaa>(joulu)</span></p>
      <div class="vaihtoehdot"><button type="button">Joululla</button><button type="button">Jouluna</button><button type="button">Joulu</button></div>
    </div>
    <div class="valinta" data-oikea="suomeksi">
      <p class="kysymys"><span class="fi">Kirjoita viesti ___!</span> <span class="fi" data-ei-kuplaa>(suomi)</span></p>
      <div class="vaihtoehdot"><button type="button">suomea</button><button type="button">suomeksi</button><button type="button">suomena</button></div>
    </div>
    <div class="valinta" data-oikea="muusikko">
      <p class="kysymys"><span class="fi">Walker on hyvä ___.</span> <span class="fi" data-ei-kuplaa>(muusikko)</span></p>
      <div class="vaihtoehdot"><button type="button">muusikoksi</button><button type="button">muusikko</button><button type="button">muusikkona</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. O relógio da última noite</h3>
    <p class="ohje">Onze e meia da noite, no ônibus. O Jay já dorme. A Maia não: ela faz o que geólogo faz e anota o dia, hora por hora, como na lição 13. Toque numa linha: o relógio gira até a hora e você ouve a frase. Depois responda.</p>
    <div class="aikajana" data-h="maia">
      <p data-aika="14:00" data-hahmo="maia" data-h="maia" data-puhu="Käänsin äidin listan suomeksi." data-pt="Eu traduzi a lista da mãe para o finlandês.">Käänsin äidin listan <span data-l="suomi:transl">suomeksi</span>.</p>
      <p data-aika="15:00" data-hahmo="jay" data-h="maia" data-puhu="Jay osti maitoa ja olutta." data-pt="O Jay comprou leite e cerveja.">Jay osti maitoa ja olutta.</p>
      <p data-aika="16:00" data-hahmo="malu" data-h="maia" data-puhu="Marisa tuli ovelle. Hänellä oli iso laukku." data-pt="A Marisa chegou à porta. Ela estava com uma mala grande.">Marisa tuli ovelle. Hänellä oli iso laukku.</p>
      <p data-aika="18:00" data-hahmo="marta" data-h="maia" data-puhu="Juhla oli valmis ja äiti laittoi musiikin päälle." data-pt="A festa estava pronta e a mãe ligou a música.">Juhla oli valmis ja äiti laittoi musiikin päälle.</p>
      <p data-aika="19:00" data-hahmo="jay" data-h="maia" data-puhu="Jay tanssi äidin kanssa. Vain yksi tanssi." data-pt="O Jay dançou com a mãe. Só uma dança.">Jay tanssi äidin kanssa. Vain yksi tanssi.</p>
      <p data-aika="21:30" data-hahmo="jay" data-h="maia" data-puhu="Juhlan jälkeen Jay tuli väsyneeksi." data-pt="Depois da festa o Jay ficou cansado.">Juhlan jälkeen Jay tuli väsyneeksi.</p>
      <p data-aika="22:30" data-hahmo="walker" data-h="maia" data-puhu="Asemalla isä soitti haitaria ja asema muuttui juhlaksi." data-pt="Na rodoviária o pai tocou sanfona e a rodoviária virou uma festa.">Asemalla isä <span data-l="soittaa#2">soitti</span> haitaria ja asema muuttui juhlaksi.</p>
      <p data-aika="22:40" data-hahmo="anderson" data-h="maia" data-puhu="Anderson antoi Jaylle kirjeen." data-pt="O Anderson deu uma carta para o Jay.">Anderson antoi Jaylle kirjeen.</p>
      <p data-aika="23:00" data-hahmo="maia" data-h="maia" data-puhu="Bussi lähti Rioon. Pian Belo Horizonten valot olivat poissa." data-pt="O ônibus partiu para o Rio. Logo as luzes de Belo Horizonte sumiram.">Bussi lähti Rioon. Pian Belo Horizonten valot olivat poissa.</p>
    </div>
    <div class="valinta" data-oikea="Maitoa ja olutta.">
      <p class="kysymys"><span class="fi">Mitä Jay osti?</span></p>
      <div class="vaihtoehdot"><button type="button">Jäätä ja olutta.</button><button type="button">Maitoa ja olutta.</button><button type="button">Maitoa ja jäätä.</button></div>
    </div>
    <div class="valinta" data-oikea="Kirjeen.">
      <p class="kysymys"><span class="fi">Mitä Anderson antoi Jaylle?</span></p>
      <div class="vaihtoehdot"><button type="button">Kirjeen.</button><button type="button">Passin.</button><button type="button">Lahjan.</button></div>
    </div>
    <div class="valinta" data-oikea="Asema.">
      <p class="kysymys"><span class="fi">Mikä muuttui juhlaksi?</span></p>
      <div class="vaihtoehdot"><button type="button">Bussi.</button><button type="button">Talo.</button><button type="button">Asema.</button></div>
    </div>
    <div class="valinta" data-oikea="Kello yksitoista.">
      <p class="kysymys"><span class="fi">Milloin bussi lähti?</span></p>
      <div class="vaihtoehdot"><button type="button">Kello kymmenen.</button><button type="button">Kello yksitoista.</button><button type="button">Kello kuusi.</button></div>
    </div>
    <p class="ohje">Agora só ouvindo: ficou ou estava? Aperte ▶ sem ler. Com <span class="fi pala">-ksi</span> alguma coisa <b>mudou</b> (ficou); na forma básica com <span class="fi">oli</span>, era o <b>estado</b> (estava).</p>
    <div class="valinta" data-kuuntele="Jay tuli väsyneeksi." data-oikea="o Jay ficou cansado">
      <p class="kysymys">O que aconteceu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">o Jay ficou cansado</button><button type="button">o Jay estava cansado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Walker oli väsynyt." data-oikea="o Walker estava cansado">
      <p class="kysymys">O que aconteceu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">o Walker ficou cansado</button><button type="button">o Walker estava cansado</button></div>
    </div>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Natal no verão, Natal no escuro</h3>
  <figure class="kuva" data-kuva="natal-bh"></figure>
  <p>Em Belo Horizonte, o Natal cai no verão e na época das chuvas: trinta graus, pisca-pisca nas janelas e árvores com neve de algodão. A festa é de noite. A <b>ceia</b> começa tarde no dia 24, com peru ou chester, farofa, salpicão e rabanada, e os presentes são abertos à meia-noite (<span class="fi">keskiyöllä</span>). Muitas famílias vão à missa do galo, e a árvore fica montada até o Dia de Reis, em janeiro.</p>
  <p>Na Finlândia, o dia principal é a véspera, <span class="fi">jouluaatto</span>, e a festa acontece de dia, com as palavras do calendário da Purjo (lição 13): mingau, sauna, presunto. Ao meio-dia, a cidade de Turku declara a paz de Natal (<span class="fi">joulurauha</span>), uma tradição que vem da Idade Média e passa ao vivo na TV e no rádio. À noite, o Papai Noel (<span class="fi">joulupukki</span>) bate na porta e entrega os presentes. Ele mora em Korvatunturi, na Lapônia.</p>
  <ul class="esim">
    <li class="s" data-pt="No Brasil, o Natal é no verão.">Brasiliassa joulu on kesällä.</li>
    <li class="s" data-pt="Na Finlândia, o Papai Noel vem na véspera de Natal.">Suomessa joulupukki tulee jouluaattona.</li>
    <li class="s" data-pt="Na Finlândia, às três da tarde já está escuro.">Suomessa kello kolme on jo pimeää.</li>
  </ul>
  <p>A Purjo não acredita que alguém come peru com trinta graus. O Walker não acredita que alguém entra numa sauna no Natal.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercício: traduzir</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Traduza para o finlandês</h3>
    <div class="kaanna"><p class="pt">Quando criança, eu morava no Brasil.</p><p class="s" data-pt="Quando criança, eu morava no Brasil.">Lapsena asuin Brasiliassa.</p></div>
    <div class="kaanna"><p class="pt">No Natal tem festa aqui.</p><p class="s" data-pt="No Natal tem festa aqui.">Jouluna täällä on juhlat.</p></div>
    <div class="kaanna"><p class="pt">Em janeiro a Marisa vai trabalhar como secretária de RP.</p><p class="s" data-pt="Em janeiro a Marisa vai trabalhar como secretária de RP.">Tammikuussa Marisa on töissä PR-sihteerinä.</p></div>
    <div class="kaanna"><p class="pt">O Jay ficou corajoso.</p><p class="s" data-pt="O Jay ficou corajoso.">Jay tuli rohkeaksi.</p></div>
    <div class="kaanna"><p class="pt">Como é a vida no Brasil? – É alegre. As pessoas dançam na rua até de manhã.</p><p class="s" data-pt="Como é a vida no Brasil? – É alegre. As pessoas dançam na rua até de manhã.">Millaista elämä on Brasiliassa? – Iloista. Ihmiset tanssivat kadulla aamuun asti.</p></div>
    <div class="kaanna"><p class="pt">Diga isso em português!</p><p class="s" data-pt="Diga isso em português!">Sano se portugaliksi!</p></div>
  </div>
</section>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Me mennään, me ollaan: o “nós” da rua</h3>
  <p>Na fala, o “nós” do presente quase nunca é <span class="fi">menemme</span> ou <span class="fi">olemme</span>. Diz-se <span class="fi">me</span> + a forma impessoal do verbo (o passivo), a mesma de <span class="fi">Mennään!</span> (vamos!): <span class="fi" data-rekisteri="puhe">me mennään</span>, <span class="fi" data-rekisteri="puhe">me ollaan</span>. É o mesmo jeito do passado da lição 13 (<span class="fi" data-rekisteri="puhe">me oltiin</span>). A forma vem explicada na lição 20. Você <b>não precisa</b> falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">me menemme</span></td><td><span class="fi" data-rekisteri="puhe">me mennään</span></td><td>nós vamos, a gente vai</td></tr>
    <tr><td><span class="fi">me olemme</span></td><td><span class="fi" data-rekisteri="puhe">me ollaan</span></td><td>nós somos, estamos</td></tr>
    <tr><td><span class="fi">me tanssimme</span></td><td><span class="fi" data-rekisteri="puhe">me tanssitaan</span></td><td>nós dançamos</td></tr>
  </table>
  <p>No ônibus, às onze e cinco, o Jay e a Maia falam baixinho, do jeito que se fala na rua:</p>
  <p class="s" data-h="jay" data-kirja="Me menemme nyt Rioon. Me olemme todella väsyneitä." data-pt="A gente está indo para o Rio agora. A gente está muito cansado.">Me mennään nyt Rioon. Me ollaan tosi väsyneitä.</p>
  <p class="s" data-h="maia" data-kirja="Kyllä. Tämä oli todella mukava päivä." data-pt="É. Foi um dia muito legal.">Joo. Tää oli tosi kiva päivä.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t16">
    <h3>Lição de casa</h3>
    <p>Escreva seis frases sobre você. Três com o essivo: como você era ou o que fazia <span class="fi">lapsena</span> ou <span class="fi">nuorena</span>, o que você faz <span class="fi">lauantaina</span> ou <span class="fi">jouluna</span>, e o seu trabalho com <span class="fi">olen töissä</span> + <span class="fi pala">-na</span>. Três com o translativo: quando você fica alegre ou cansado (<span class="fi">tulen iloiseksi, kun…</span>), uma coisa que muda (<span class="fi">muuttuu</span> + <span class="fi pala">-ksi</span>) e uma frase com <span class="fi"><span data-l="suomi:transl">suomeksi</span></span> ou <span class="fi">portugaliksi</span>. Depois leia em voz alta, com <span class="fi pala">ie, uo, yö</span> numa sílaba só.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Quando criança, eu morava em Belo Horizonte.">Lapsena minä asuin Belo Horizontessa.</p>
      <p class="s" data-pt="No sábado eu pinto quadros.">Lauantaina minä maalaan tauluja.</p>
      <p class="s" data-pt="Eu trabalho como geóloga.">Olen töissä geologina.</p>
      <p class="s" data-pt="Eu fico feliz quando o Jay fala português. É uma sensação boa.">Tulen iloiseksi, kun Jay puhuu portugalia. Se on hyvä tunne.</p>
      <p class="s" data-pt="Quando a gente está longe, a casa fica quieta.">Kun olemme poissa, talo muuttuu hiljaiseksi.</p>
      <p class="s" data-pt="Eu escrevo para a Purjo em finlandês.">Minä kirjoitan Purjolle <span data-l="suomi:transl">suomeksi</span>.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t16">
    <li>Digo como e quando com o essivo: lapsena, nuorena, jouluna, maanantaina.</li>
    <li>Digo a profissão com “trabalhar como”: olen töissä opettajana.</li>
    <li>Uso vaan depois de uma negação, e koska para “porque”: Äiti ei kysy, vaan käskee.</li>
    <li>Entendo uma lista de tarefas e as ordens dela: osta, pese, vie, viekää.</li>
    <li>Digo o que muda com o translativo: tulla väsyneeksi, muuttua juhlaksi.</li>
    <li>Digo em que língua: suomeksi, portugaliksi.</li>
    <li>Digo ie, uo, yö numa sílaba só: tie, Suomi, yö, juoda.</li>
    <li>Reconheço na fala: me mennään, me ollaan.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'essiivi16', otsikko: 'O essivo -na/-nä: como? quando? (para reconhecer)', taso: 'reconhecer', hakuosa: 'h-essiivi', treeni: 't16-essiivi',
      html: `
<p><b>Forma:</b> radical forte (o do ilativo) + <span class="fi pala">-na/-nä</span>. <b>Uso:</b> o papel (como professor), a fase da vida (quando criança) e, com dias e festas, quando.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">lapsena</span></td><td>quando criança</td></tr>
  <tr><td><span class="fi">nuorena</span></td><td>quando jovem</td></tr>
  <tr><td><span class="fi">PR-sihteerinä</span></td><td>como secretária de RP</td></tr>
  <tr><td><span class="fi">jouluna</span></td><td>no Natal</td></tr>
  <tr><td><span class="fi">lauantaina</span></td><td>no sábado</td></tr>
</table>
<div class="sijataulu" data-sana="lapsi" data-sijat="nominatiivi,genetiivi,illatiivi,essiivi,translatiivi"></div>`
    },
    {
      id: 'translatiivi16', otsikko: 'O translativo -ksi: ficar, virar, em que língua (para reconhecer)', taso: 'reconhecer', hakuosa: 'h-essiivi', treeni: 't16-translatiivi',
      html: `
<p><b>Forma:</b> radical do genitivo (sem o <span class="fi pala">-n</span>) + <span class="fi pala">-ksi</span>: <span class="fi">iloisen → iloiseksi</span>, <span class="fi">väsyneen → väsyneeksi</span>, <span class="fi">kadun → kaduksi</span>. O translativo é fraco, o essivo forte: <span class="fi">muusikoksi</span> × <span class="fi">muusikkona</span>.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Jay tuli väsyneeksi.</span></td><td>o Jay ficou cansado</td></tr>
  <tr><td><span class="fi">Asema muuttuu juhlaksi.</span></td><td>a rodoviária vira uma festa</td></tr>
  <tr><td><span class="fi">Olut tekee minut rohkeaksi.</span></td><td>a cerveja me deixa corajoso</td></tr>
  <tr><td><span class="fi">Sano se <span data-l="suomi:transl">suomeksi</span>!</span></td><td>diga isso em finlandês!</td></tr>
</table>
<p><span class="fi">Jay väsyi</span> (de <span class="fi">väsyä</span>) = <span class="fi">Jay tuli väsyneeksi.</span></p>
<div class="sijataulu" data-sana="iloinen" data-sijat="nominatiivi,genetiivi,essiivi,translatiivi"></div>`
    },
    {
      id: 'aantaminen16', otsikko: 'Pronúncia: ie, uo, yö numa sílaba só', taso: 'essencial', hakuosa: 'h-aakkoset', treeni: 't16-kuuntele',
      html: `
<p>Duas vogais, uma sílaba: a boca desliza da primeira para a segunda. O acento fica na primeira sílaba da palavra: <span class="fi pala">SUO-mi</span>, nunca <span class="pala">su-Ô-mi</span>.</p>
<ul class="esim">
  <li class="s" data-pt="estrada × chá">tie – tee</li>
  <li class="s" data-pt="cadeira × fogo">tuoli – tuli</li>
  <li class="s" data-pt="(ele) bebe × (ele) bebeu">juo – joi</li>
</ul>`
    },
    {
      id: 'konjunktiot16', otsikko: 'Quando, porque, e sim: kun, koska, vaan', taso: 'essencial', hakuosa: 'h-konjunktiot', treeni: 't16-konjunktiot',
      html: `
<p><span class="fi">kun</span> (quando) e <span class="fi">koska</span> (porque) ligam o momento ou a causa. <span class="fi">vaan</span> é “e sim”, só depois de uma negação; sem negação, “mas” é <span class="fi">mutta</span>. Mais <span class="fi">kun</span> na lição 18.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Kun me olemme poissa, talo on hiljainen.</span></td><td>quando</td></tr>
  <tr><td><span class="fi">Menemme bussilla, koska lento on liian kallis.</span></td><td>porque</td></tr>
  <tr><td><span class="fi">Äiti ei kysy, vaan käskee.</span></td><td>e sim · depois de negação</td></tr>
  <tr><td><span class="fi">Jay on väsynyt, mutta hän tanssii.</span></td><td>mas</td></tr>
</table>`
    },
    {
      id: 'sudenkuopat16', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>Ficar = mudar ou estar?</b> Mudança com <span class="fi pala">-ksi</span>: <span class="fi">tuli väsyneeksi</span>. Estado sem terminação: <span class="fi">on väsynyt</span>. Nunca <span class="pala">tuli väsynyt</span>.</li>
  <li><b>Forte ou fraco?</b> Essivo forte, translativo fraco: <span class="fi">muusikkona</span> × <span class="fi">muusikoksi</span>, <span class="fi">lapsena</span> × <span class="fi">lapseksi</span>.</li>
  <li><b>Profissão:</b> <span class="fi">Hän on opettaja.</span> (é professor) × <span class="fi">Hän on töissä opettajana.</span> (trabalha como professor).</li>
  <li><b>Que língua?</b> Saber, falar a língua: partitivo, <span class="fi">puhun suomea</span>. Dizer, escrever, traduzir em: <span class="fi"><span data-l="suomi:transl">suomeksi</span></span>.</li>
  <li><b>Quando?</b> <span class="fi">lauantaina, jouluna</span> com <span class="fi pala">-na</span>, mas <span class="fi">aamulla, illalla</span> com <span class="fi pala">-lla</span> (sem “aquele, um”).</li>
  <li><b>O ditongo:</b> <span class="fi">tie, yö, Suomi</span> sem quebrar a sílaba e sem acento no meio.</li>
</ul>`
    }
  ]
});
