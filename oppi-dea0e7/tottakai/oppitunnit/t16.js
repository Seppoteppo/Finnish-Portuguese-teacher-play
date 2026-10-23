/* Tottakai, lição 16: katujuhlat Maian vanhempien kadulla (Passon jakso 16 Maian näkökulmasta). Oma materiaali, ei kirjan
   tekstiä. Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5c ”Oppitunti 16” ja tarinan kalenteri (la 26.12.2026 ilta ja yö).
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t16): la 26.12. kello 21, kadulla juhlat: Walker soittaa huuliharppua, Malu rumpua. Dialogi A (20 repliikkiä:
     Maia ja Jay puhuvat suomea, essiivi: jouluna, lapsena, taloustieteilijänä, muusikkona, kuljettajana, lauantaina),
     Frases prontas, sanasto, kikka A: Jayn vastaaja juhlapöydällä (`.vastaaja`, Tottakain komponentit.js; Purjon ja
     Hiiden ääniviestit Helsingistä: kello kymmenen, Helsinki muuttui valkoiseksi, tie muuttui jääksi), ääntäminen
     (diftongit ie, uo, yö yhtenä tavuna), tehtävät 1–3.
   - osa B (#t16-b): keskiyön jälkeen; dialogi B (22 repliikkiä: Uuno tulee väsyneeksi, Eenok myös (”Lapsena tanssin koko
     yön.”), Uuno: ”Sinä et ollut koskaan lapsi, Eenok.” (omistaja 23.10.2026, vaihtoehto 5), Jay nauraa; olut tekee Jayn rohkeaksi, Eenok: ”Jay on hyvin
     marinoitu”; Uuno ja Eenok eivät hikoile helteessä, kertojan lause; omistaja 22.10.2026), Jay
     sanoo suomeksi miehelle Atléticon paidassa ”herra Kukko” (Marcus, nimi vasta oppitunnilla 17; Maia ei näe), kello neljä
     Jay on poissa → 17), Frases prontas, kielioppi 1 (essiivi -na/-nä) → tehtävä 4 heti perään, kielioppi 2
     (translatiivi -ksi muutoksena ja kielenä), tehtävät 5–10 (Maian yökello `.aikajana` tehtävässä 8: t13:n komponentti,
     aikajanaKielet hoitaa käännösrivin), kulttuuri
     (katujuhlat ja Clube da Esquina, kuvat clube-da-esquina ja festa-rua), Na rua (me mennään, me ollaan), kotitehtävä,
     itsearvio.
   Lunastaa lupaukset ”Lauantaina … o caso: lição 16” (t03), ”tiistaina … o caso inteiro: lição 16” ja ”Terveydeksi! … -ksi:
   lição 16” (t07), ”portugaliksi … -ksi: lição 16” (t12), ”suomeksi … o caso -ksi, lição 16” (t15): kielioppi B, kohdat 1 ja 3.
   Brasilian jakso (OPPITUNNIT §2 ja §5c): suomea puhuvat vain Maia, Jay, turistit Uuno ja Eenok sekä Purjo ja Hiisi
   vastaajassa; Walkerin, Martan, Malun ja Marcuksen sanat kerrotaan portugaliksi. Pilkan kohde on Marcus itse, ei
   naapurusto. Kirjakieli kaikkialla; puhekieli vain Na rua -nurkassa. Vastaajan Soitin-sana kiinnitetään data-l:llä
   (soitin = soitin-substantiivi ilman sitä); t16:n lisäys vastaaja()-komponenttiin säilyttää data-l-merkinnät.
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat mahtava, koska, sama, ehkä, jotain tapahtui, tunne, elämä, ihana
   (t20 → t16), henki, toinen, yrittää, edes, uskoa + pois, loppu, yhä, kukaan; dialogit 20 + 21; sanalistat 25 → 12. */
Kurssi.lisaa({
  id: 't16',
  lyhyt: '16',
  jakso: 'Lição 16',
  otsikko: 'A festa de rua: como, quando e em que se transforma (essivo e translativo)',
  lahde: 'Tema: festa de rua em Belo Horizonte, música, a caixa postal do Jay · Gramática: o essivo -na/-nä (lapsena, jouluna, opettajana, maanantaina) e o translativo -ksi (tulla iloiseksi, muuttua hiljaiseksi, suomeksi) · Pronúncia: os ditongos ie, uo, yö numa sílaba só',
  aiheet: ['vapaa', 'tunteet', 'ominaisuus', 'aika'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; dançava nesta rua quando era criança' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; depois da quinta cerveja, corajoso demais' },
    uuno2: { nimi: 'Uuno', tyyppi: 'mies', vaihto: 7, kuvaus: 'turista finlandês; macacão azul-claro, cabelo platinado; dança duas horas e dorme numa cadeira' },
    eenok2: { nimi: 'Eenok', tyyppi: 'mies', vaihto: 8, kuvaus: 'turista finlandês, irmão do Uuno; o mesmo macacão azul-claro; viagem da carne' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; liga de Helsinque, onde já é madrugada' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; dirige no gelo como se fosse verão' }
  },

  sanasto: [
    'juhla', 'katujuhla', 'huuliharppu', 'haitari', 'rumpu', 'tanssia', 'laulaa', 'muusikko', 'taloustieteilijä', 'kuljettaja',
    'lapsi', 'nuori', 'muuttua', 'iloinen', 'väsynyt', 'rohkea', 'hiljainen', 'hölmö', 'hullu', 'humalassa', 'liikaa',
    'poissa', 'vastaaja', 'ääniviesti', 'vastata', 'kukko', 'jää', 'kelkka', 'elämä', 'loppu', 'yhä', 'tunne', 'henki'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Festa na rua e a caixa postal do Jay',
      html: `
<ul class="tavoitteet">
  <li>Você diz como e quando: <span class="fi">lapsena</span> (quando criança), <span class="fi">jouluna</span> (no Natal), <span class="fi">lauantaina</span> (no sábado).</li>
  <li>Você diz a profissão com “trabalhar como”: <span class="fi">Malu on töissä kuljettajana.</span></li>
  <li>Você entende mensagens de voz em finlandês: quem ligou, a que horas, o que aconteceu.</li>
  <li>Você diz <span class="fi pala">ie, uo, yö</span> numa sílaba só: <span class="fi">tie, Suomi, yö</span>.</li>
  <li>Parte B: o que muda, com <span class="fi pala">-ksi</span> (<span class="fi">Jay tulee rohkeaksi</span>), e em que língua (<span class="fi">suomeksi</span>).</li>
</ul>
<p data-paikka="bh-bairro">Sábado, 26 de dezembro, nove da noite. A rua dos pais da Maia está fechada para os carros: hoje tem festa. A Marta espalhou cadeiras pela calçada, os vizinhos trouxeram panelas de feijão tropeiro e caixas de isopor com cerveja, e alguém pendurou pisca-pisca de um poste ao outro. O Walker tirou a gaita de boca do bolso. A Malu trouxe o tambor do bloco de samba. O Uuno e o Eenok, os turistas finlandeses do avião e da Feira Hippie, também vieram, de macacão azul-claro: a Marta convidou os dois. No meio do samba, a Maia e o Jay conversam em finlandês.</p>

<section class="osio" data-paikka="festa-rua">
  <h2>Diálogo A: Kadulla on juhlat</h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure as palavras com <span class="fi pala">-na/-nä</span> no fim: <span class="fi">jouluna</span>, <span class="fi">lapsena</span>… Elas dizem quando ou como. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t16-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="Sábado, nove horas da noite. Tem festa na rua.">Lauantai, kello yhdeksän illalla. Kadulla on juhlat.</p>
    <p class="s" data-h="kertoja" data-pt="O Walker toca gaita de boca, a Malu toca tambor, e os vizinhos dançam.">Walker <span data-l="soittaa#2">soittaa</span> huuliharppua, Malu <span data-l="soittaa#2">soittaa</span> rumpua, ja naapurit tanssivat.</p>
    <p class="s" data-h="jay" data-pt="Aqui sempre tem festa?">Onko täällä aina juhlat?</p>
    <p class="s" data-h="maia" data-pt="Nem sempre. Mas no Natal sempre tem festa aqui.">Ei aina. Mutta jouluna täällä on aina juhlat.</p>
    <p class="s" data-h="jay" data-pt="Que festa incrível! A rua inteira está dançando.">Mahtavat juhlat! Koko katu tanssii.</p>
    <p class="s" data-h="jay" data-pt="Você dança muito bem!">Sinä tanssit todella hyvin!</p>
    <p class="s" data-h="maia" data-pt="Quando criança, eu dançava aqui na rua a noite inteira.">Lapsena minä <span data-l="tanssia:imperf.1s">tanssin</span> täällä kadulla koko yön.</p>
    <p class="s" data-h="jay" data-pt="A noite inteira? Você não dormia?">Koko yön? Etkö sinä nukkunut?</p>
    <p class="s" data-h="maia" data-pt="Dormia. Mas só um pouco, porque a música era tão boa.">Nukuin. Mutta vain vähän, koska musiikki oli niin hyvää.</p>
    <p class="s" data-h="jay" data-pt="E o Walker? Ele toca muito bem.">Entä Walker? Hän <span data-l="soittaa#2">soittaa</span> todella hyvin.</p>
    <p class="s" data-h="maia" data-pt="O pai trabalhou como economista durante quarenta anos.">Isä oli töissä taloustieteilijänä neljäkymmentä vuotta.</p>
    <p class="s" data-h="maia" data-pt="Mas como músico ele é melhor do que como economista!">Mutta muusikkona hän on parempi kuin taloustieteilijänä!</p>
    <p class="s" data-h="jay" data-pt="E a Malu? Ela é musicista?">Entä Malu? Onko hän muusikko?</p>
    <p class="s" data-h="maia" data-pt="Não. A Malu trabalha como motorista. No sábado ela toca tambor.">Ei ole. Malu on töissä kuljettajana. Lauantaina hän <span data-l="soittaa#2">soittaa</span> rumpua.</p>
    <p class="s" data-h="jay" data-pt="A mesma Malu? Ela dirige tão devagar!">Sama Malu? Hän ajaa niin hitaasti!</p>
    <p class="s" data-h="maia" data-pt="A mesma. Mas o tambor ela toca rápido!">Sama. Mutta rumpua hän <span data-l="soittaa#2">soittaa</span> nopeasti!</p>
    <p class="s" data-h="kertoja" data-pt="Na mesa está o celular do Jay. Na caixa postal há quatro mensagens novas.">Pöydällä on Jayn puhelin. Vastaajassa on neljä uutta viestiä.</p>
    <p class="s" data-h="maia" data-pt="Jay, olha! A Purjo e o Hiisi ligaram para você.">Jay, katso! Purjo ja Hiisi soittivat sinulle.</p>
    <p class="s" data-h="jay" data-pt="Eu não ouvi nada. O tambor da Malu!">Minä en kuullut mitään. Malun rumpu!</p>
    <p class="s" data-h="maia" data-pt="Talvez tenha acontecido alguma coisa. Ouça as mensagens!">Ehkä jotain tapahtui. Kuuntele viestit!</p>
  </div>
  <p>A Maia e o Jay se sentam na calçada, longe do tambor, e ouvem as mensagens. Em Helsinque são cinco horas a mais: quando aqui são nove da noite, lá já são duas da manhã. E a Purjo, como sempre, não dorme.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Jouluna täällä on aina juhlat.</span> = no Natal sempre tem festa aqui · <span class="fi">jouluna</span>: o caso <span class="fi pala">-na</span> (essivo), parte B desta lição</li>
      <li><span class="fi">Lapsena minä <span data-l="tanssia:imperf.1s">tanssin</span> täällä kadulla.</span> = quando criança, eu dançava aqui na rua · <span class="fi">lapsena</span>: “como criança”, o mesmo <span class="fi pala">-na</span>; <span class="fi"><span data-l="tanssia:imperf.1s">tanssin</span></span> serve para o presente e para o passado (lição 13)</li>
      <li><span class="fi">Isä oli töissä taloustieteilijänä.</span> = o pai trabalhava como economista · <span class="fi">olla töissä</span> + a profissão com <span class="fi pala">-na</span></li>
      <li><span class="fi">Muusikkona hän on parempi kuin taloustieteilijänä.</span> = como músico ele é melhor do que como economista · <span class="fi">parempi … kuin</span> (lição 11)</li>
      <li><span class="fi">Lauantaina hän <span data-l="soittaa#2">soittaa</span> rumpua.</span> = no sábado ela toca tambor · <span class="fi"><span data-l="soittaa#2">soittaa</span></span> + partitivo: tocar um instrumento</li>
      <li><span class="fi">Vastaajassa on neljä uutta viestiä.</span> = há quatro mensagens novas na caixa postal · depois do número, partitivo (lição 3)</li>
      <li><span class="fi">Minä en kuullut mitään.</span> = eu não ouvi nada · o passado negativo (lição 15)</li>
      <li><span class="fi">Mahtavat juhlat!</span> = que festa incrível! · <span class="fi">juhlat</span>, sempre no plural, como <span class="fi">housut</span> (lição 12)</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="festa-rua">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="A festa e como ficamos" data-sanat="juhla,katujuhla,huuliharppu,rumpu,tanssia,laulaa,muusikko,lapsi,nuori,iloinen,väsynyt,vastaaja"></div>
  <p>As outras palavras da lição estão no <a href="#t16-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio" data-paikka="festa-rua">
  <h2>A caixa postal do Jay</h2>
  <p>O celular do Jay ficou na mesa, entre a farofa e o isopor. Primeiro com a arrumação da festa, depois com o tambor da Malu, ele não ouviu nada. Agora a tela mostra quatro mensagens de voz (<span class="fi">ääniviesti</span>): três da Purjo e uma do Hiisi, de Helsinque, onde é inverno, é noite e neva.</p>
  <p class="ohje">Toque em ▶ para ouvir cada mensagem. Ouça primeiro sem o texto: quem ligou, a que horas e o que aconteceu em Helsinque? Depois abra o <b>Texto</b>. Repare nas palavras com <span class="fi pala">-ksi</span>: elas dizem no que alguma coisa se transformou.</p>
  <div class="vastaaja" data-h="purjo" data-otsikko="Caixa postal · Jay" data-kello="21.10">
    <p data-h="purjo" data-aika="17.05" data-puhu="Hei Jay, äiti täällä. Kello on täällä kymmenen illalla. Missä te olette? Soita minulle!" data-pt="Oi, Jay, é a mãe. Aqui são dez da noite. Onde vocês estão? Me liga!">Hei Jay, äiti täällä. Kello on täällä kymmenen illalla. Missä te olette? Soita minulle!</p>
    <p data-h="purjo" data-aika="19.20" data-puhu="Jay, minä taas. Soitin sinulle kello kymmenen, mutta sinä et vastannut. Täällä satoi lunta koko päivän, ja Helsinki muuttui valkoiseksi. Minä tulin iloiseksi, kun näin lumen. Mikä tunne! Lapsena sinä rakastit lunta." data-pt="Jay, sou eu de novo. Liguei para você às dez, mas você não atendeu. Aqui nevou o dia inteiro, e Helsinque ficou branca. Eu fiquei feliz quando vi a neve. Que sensação! Quando criança, você amava a neve.">Jay, minä taas. <span data-l="soittaa:imperf.1s">Soitin</span> sinulle kello kymmenen, mutta sinä et vastannut. Täällä satoi lunta koko päivän, ja Helsinki muuttui valkoiseksi. Minä tulin iloiseksi, kun näin lumen. Mikä tunne! Lapsena sinä rakastit lunta.</p>
    <p data-h="hiisi" data-aika="20.40" data-puhu="Moi. Hiisi. Ajoin illalla mökille. Tie muuttui jääksi, ja auto muuttui kelkaksi. Kaikki hyvin. Hyvää yötä." data-pt="Oi. Hiisi. Dirigi à noite até a casa de campo. A estrada virou gelo, e o carro virou trenó. Tudo bem. Boa noite.">Moi. Hiisi. Ajoin illalla mökille. Tie muuttui jääksi, ja auto muuttui kelkaksi. Kaikki hyvin. Hyvää yötä.</p>
    <p data-h="purjo" data-aika="21.05" data-puhu="Jay! Hiisi soitti. Hän ajoi taas liian nopeasti. Kun Hiisi ajaa, minä tulen hulluksi! Nyt minä olen hereillä koko yön. Soita huomenna!" data-pt="Jay! O Hiisi ligou. Ele dirigiu rápido demais de novo. Quando o Hiisi dirige, eu fico louca! Agora vou passar a noite inteira acordada. Liga amanhã!">Jay! Hiisi soitti. Hän ajoi taas liian nopeasti. Kun Hiisi ajaa, minä tulen hulluksi! Nyt minä olen hereillä koko yön. Soita huomenna!</p>
  </div>
  <p>O Jay ri da mensagem do irmão. A Maia não ri: ela já andou de carro com o Hiisi (lição 10). Repare em duas coisas. A hora: <span class="fi">kello kymmenen</span> é a hora de Helsinque, não a de Belo Horizonte. E o que muda: <span class="fi">Helsinki muuttui valkoiseksi</span> (Helsinque ficou branca), <span class="fi">tie muuttui jääksi</span> (a estrada virou gelo), <span class="fi">minä tulin iloiseksi</span> (eu fiquei feliz). O <span class="fi pala">-ksi</span> é o translativo; a regra vem na parte B.</p>
</section>

<section class="osio" data-paikka="natal-bh">
  <h2>Pronúncia: ie, uo, yö numa sílaba só</h2>
  <p>Em finlandês, <span class="fi pala">ie</span>, <span class="fi pala">uo</span> e <span class="fi pala">yö</span> são <b>ditongos</b> na primeira sílaba da palavra (ou de cada parte de uma palavra composta): duas vogais numa sílaba só. A boca começa na primeira vogal e desliza para a segunda, sem pausa e sem acento novo. O ouvido brasileiro tende a separar e a pôr o acento na segunda vogal. Na primeira vez, a Maia disse <span class="pala">su-Ô-mi</span>, em três sílabas e com o acento no meio, como uma palavra italiana. O Jay disse que ela tinha inventado um país novo. O certo é <span class="fi pala">SUO-mi</span>: duas sílabas, o acento na primeira. Ouça e repita:</p>
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

<section class="osio" data-ei-sivulle data-paikka="natal-bh">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ligue: como? quando?</h3>
    <ul class="yhdista">
      <li data-pari="quando criança">lapsena</li>
      <li data-pari="quando jovem">nuorena</li>
      <li data-pari="no Natal">jouluna</li>
      <li data-pari="no sábado">lauantaina</li>
      <li data-pari="na segunda-feira">maanantaina</li>
      <li data-pari="como professor">opettajana</li>
      <li data-pari="como músico">muusikkona</li>
      <li data-pari="como motorista">kuljettajana</li>
    </ul>
  </div>

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

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>3. Você entendeu? O diálogo e a caixa postal</h3>
    <p class="ohje">Volte ao diálogo e às mensagens se precisar.</p>
    <div class="valinta" data-oikea="Huuliharppua.">
      <p class="kysymys"><span class="fi">Mitä Walker <span data-l="soittaa#2">soittaa</span>?</span></p>
      <div class="vaihtoehdot"><button type="button">Rumpua.</button><button type="button">Huuliharppua.</button><button type="button">Bassoa.</button></div>
    </div>
    <div class="valinta" data-oikea="Kadulla.">
      <p class="kysymys"><span class="fi">Missä Maia tanssi lapsena?</span></p>
      <div class="vaihtoehdot"><button type="button">Kadulla.</button><button type="button">Kirjastossa.</button><button type="button">Saunassa.</button></div>
    </div>
    <div class="valinta" data-oikea="Malu.">
      <p class="kysymys"><span class="fi">Kuka on töissä kuljettajana?</span></p>
      <div class="vaihtoehdot"><button type="button">Walker.</button><button type="button">Jay.</button><button type="button">Malu.</button></div>
    </div>
    <div class="valinta" data-oikea="Kello kymmenen.">
      <p class="kysymys"><span class="fi">Milloin Purjo soitti ensin?</span> <span lang="pt-BR">(hora de Helsinque)</span></p>
      <div class="vaihtoehdot"><button type="button">Kello kymmenen.</button><button type="button">Kello yksitoista.</button><button type="button">Kello kaksitoista.</button></div>
    </div>
    <div class="valinta" data-oikea="Hän näki lumen.">
      <p class="kysymys"><span class="fi">Miksi Purjo tuli iloiseksi?</span></p>
      <div class="vaihtoehdot"><button type="button">Hiisi soitti.</button><button type="button">Hän näki lumen.</button><button type="button">Jay vastasi.</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Depois da meia-noite: ficar, virar e em que língua',
      html: `
<ul class="tavoitteet">
  <li>Você diz o que muda: <span class="fi">Uuno tulee väsyneeksi.</span> <span class="fi">Juhla muuttuu hiljaiseksi.</span></li>
  <li>Você diz em que língua: <span class="fi">suomeksi, portugaliksi, englanniksi</span>.</li>
  <li>Você escolhe entre o essivo e o translativo: <span class="fi">lapsena</span> (como criança) × <span class="fi">rohkeaksi</span> (virar corajoso).</li>
  <li>Você reconhece o “nós” da fala, no quadro Na rua: <span class="fi">me</span> + a forma impessoal do verbo.</li>
</ul>

<p data-paikka="festa-rua">Meia-noite e meia. O samba não para. Os vizinhos cantam, a Marta dança com o Anderson, e o Jay já perdeu a conta das cervejas. O Uuno e o Eenok dançam como finlandeses: com muita concentração e pouco quadril. Faz trinta graus e a rua inteira está suando, menos os dois: nem uma gota no macacão azul-claro.</p>

<section class="osio">
  <h2>Diálogo B: Keskiyön jälkeen</h2>
  <p class="ohje">Ouça primeiro sem tradução. Conte quantas vezes alguém “fica” ou “vira” alguma coisa: procure o <span class="fi pala">-ksi</span>. E repare: a Maia não vê o que o Jay faz na esquina.</p>
  <div class="kpl" id="t16-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="É uma da manhã. O Walker ainda toca acordeão.">Kello on yksi yöllä. Walker <span data-l="soittaa#2">soittaa</span> vielä haitaria.</p>
    <p class="s" data-h="uuno2" data-pt="Eu dancei duas horas e fiquei cansado. Quantas pessoas tem aqui? Cem?">Minä <span data-l="tanssia:imperf.1s">tanssin</span> kaksi tuntia, ja minä tulin väsyneeksi. Montako henkeä täällä on? Sata?</p>
    <p class="s" data-h="maia" data-pt="Talvez duzentas. A rua inteira e a outra rua também!">Ehkä kaksisataa. Koko katu ja toinen katu myös!</p>
    <p class="s" data-h="eenok2" data-pt="Eu também fiquei cansado. Quando criança, eu dançava a noite toda.">Minä tulin myös väsyneeksi. Lapsena tanssin koko yön.</p>
    <p class="s" data-h="uuno2" data-pt="Você nunca foi criança, Eenok.">Sinä et ollut koskaan lapsi, Eenok.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay ri.">Jay nauraa.</p>
    <p class="s" data-h="jay" data-pt="Eu não estou bêbado. A cerveja me deixa corajoso!">Minä en ole humalassa. Olut tekee minut rohkeaksi!</p>
    <p class="s" data-h="maia" data-pt="Corajoso? A cerveja deixa você bobo. Não beba mais!">Rohkeaksi? Olut tekee sinut hölmöksi. Älä juo enää!</p>
    <p class="s" data-h="jay" data-pt="Só mais uma! Eu vou buscar.">Vielä yksi! Minä haen sen.</p>
    <p class="s" data-h="maia" data-pt="Tente pelo menos beber água!">Yritä edes juoda vettä!</p>
    <p class="s" data-h="jay" data-pt="Eu tento. Pode acreditar!">Yritän. Usko pois!</p>
    <p class="s" data-h="eenok2" data-pt="O Jay está bem marinado.">Jay on hyvin marinoitu.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia dança com a Malu. Ela não vê o que o Jay faz.">Maia tanssii Malun kanssa. Hän ei näe, mitä Jay tekee.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay vai até a esquina. Lá tem um homem.">Jay menee kadun kulmaan. Siellä on mies.</p>
    <p class="s" data-h="jay" data-pt="Boa noite, senhor Galo! Como galo, você é muito elegante!">Hyvää iltaa, herra Kukko! Kukkona sinä olet todella hieno!</p>
    <p class="s" data-h="kertoja" data-pt="O homem não entende finlandês, mas vê que o Jay está rindo. Ele fica vermelho.">Mies ei ymmärrä suomea, mutta hän näkee, että Jay nauraa. Hän muuttuu punaiseksi.</p>
    <p class="s" data-h="jay" data-pt="Desculpa! Em finlandês é uma palavra bonita!">Anteeksi! Suomeksi se on kaunis sana!</p>
    <p class="s" data-h="kertoja" data-pt="São quatro da madrugada. A festa fica quieta.">Kello on neljä yöllä. Juhla muuttuu hiljaiseksi.</p>
    <p class="s" data-h="kertoja" data-pt="A festa está no fim, mas o Walker ainda toca.">Juhla on lopussa, mutta Walker <span data-l="soittaa#2">soittaa</span> yhä.</p>
    <p class="s" data-h="maia" data-pt="Jay? Cadê você? Jay!">Jay? Missä sinä olet? Jay!</p>
    <p class="s" data-h="maia" data-pt="Ninguém sabe onde o Jay está!">Kukaan ei tiedä, missä Jay on!</p>
    <p class="s" data-h="kertoja" data-pt="O Jay não atende o telefone. O Jay sumiu.">Jay ei vastaa puhelimeen. Jay on poissa.</p>
  </div>
  <p>A Maia procura na rua inteira: atrás do tambor da Malu, debaixo das mesas, no sofá da Marta. Nada. Quem viu alguma coisa foi o Uuno, meio dormindo numa cadeira da calçada: o Jay rindo na esquina com um homem de camisa do Atlético, óculos enormes e um cabelo espetado como crista de galo. “Galo” é o apelido do Atlético Mineiro, e o homem leva isso muito a sério. O Jay não sabia. Ele só achou o cabelo parecido com uma crista. Mas tudo isso a Maia só vai saber amanhã (lição 17).</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Olut tekee minut rohkeaksi.</span> = a cerveja me deixa corajoso · <span class="fi">tehdä</span> + alguém + <span class="fi pala">-ksi</span>: “fazer virar”</li>
      <li><span class="fi">Minä en ole humalassa.</span> = eu não estou bêbado · <span class="fi pala">humala</span> = lúpulo e também embriaguez; <span class="fi">olla humalassa</span> = estar bêbado</li>
      <li><span class="fi">Älä juo enää!</span> = não beba mais! · <span class="fi">enää</span> = mais, quase só em frase negativa (lição 11)</li>
      <li><span class="fi">Vielä yksi!</span> = só mais um! (ou mais uma) · <span class="fi">Yritä edes!</span> = pelo menos tente!</li>
      <li><span class="fi">Montako henkeä?</span> = quantas pessoas? · <span class="fi">henki</span> = pessoa, quando se conta · <span class="fi">Juhla on lopussa.</span> = a festa está no fim · <span class="fi">yhä</span> = ainda</li>
      <li><span class="fi">Hän ei näe, mitä Jay tekee.</span> = ela não vê o que o Jay faz · <span class="fi">mitä</span> no meio da frase = “o que”</li>
      <li><span class="fi">Juhla muuttuu hiljaiseksi.</span> = a festa fica quieta · <span class="fi">muuttua</span> + <span class="fi pala">-ksi</span>: virar, ficar</li>
      <li><span class="fi">Jay ei vastaa puhelimeen.</span> = o Jay não atende o telefone · <span class="fi">vastata puhelimeen</span>, com o ilativo</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="festa-rua">
  <h2>Gramática 1 · O essivo <span class="fi pala">-na/-nä</span>: como? quando?</h2>
  <p>O <b>essivo</b> diz <b>em que papel</b> ou <b>em que fase</b> alguém está (“como professor”, “quando criança”) e, com dias e festas, <b>quando</b>. A terminação é <span class="fi pala">-na/-nä</span>, a mesma que você já usa desde a lição 3 em <span class="fi">lauantaina</span>. Ela vai no radical forte, o mesmo do ilativo: <span class="fi">lapsi → lapsena</span>, <span class="fi">joulu → jouluna</span>.</p>
  <table class="taivutus">
    <tr><th>palavra</th><th>essivo</th><th>português</th></tr>
    <tr><td><span class="fi">lapsi</span><span class="kaannos" lang="pt-BR">criança</span></td><td><span class="fi">lapsena</span></td><td>quando criança</td></tr>
    <tr><td><span class="fi">nuori</span><span class="kaannos" lang="pt-BR">jovem</span></td><td><span class="fi">nuorena</span></td><td>quando jovem</td></tr>
    <tr><td><span class="fi">opettaja</span><span class="kaannos" lang="pt-BR">professor</span></td><td><span class="fi">opettajana</span></td><td>como professor</td></tr>
    <tr><td><span class="fi">muusikko</span><span class="kaannos" lang="pt-BR">músico</span></td><td><span class="fi">muusikkona</span></td><td>como músico</td></tr>
    <tr><td><span class="fi">joulu</span><span class="kaannos" lang="pt-BR">Natal</span></td><td><span class="fi">jouluna</span></td><td>no Natal</td></tr>
    <tr><td><span class="fi">maanantai</span><span class="kaannos" lang="pt-BR">segunda-feira</span></td><td><span class="fi">maanantaina</span></td><td>na segunda-feira</td></tr>
  </table>
  <p>Lembra das frases prontas? Na lição 3 apareceu <span class="fi">lauantaina</span> (no sábado), na lição 7 <span class="fi">tiistaina</span> (na terça) e na lição 15 <span class="fi">jouluaattona</span> (na véspera de Natal). Agora você conhece o caso: é o essivo.</p>
  <ul class="esim">
    <li class="s" data-pt="A Malu trabalha como motorista.">Malu on töissä kuljettajana.</li>
    <li class="s" data-pt="Quando criança, a Maia dançava na rua.">Lapsena Maia tanssi kadulla.</li>
    <li class="s" data-pt="Na segunda-feira o Jay vai para o trabalho.">Maanantaina Jay menee töihin.</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> com <span class="fi">olla</span> sozinho, a profissão fica na forma básica: <span class="fi">Isä on muusikko.</span> (o pai é músico). O essivo entra quando há um “como”: <span class="fi">Isä on töissä muusikkona.</span> (o pai trabalha como músico). E as partes do dia, sem “aquele” ou “um”, usam <span class="fi pala">-lla</span>, não <span class="fi pala">-na</span>: <span class="fi">aamulla, illalla</span> (lição 13); com eles, <span class="fi pala">-na</span> (<span class="fi pala">sinä iltana</span> = naquela noite). Com os dias e as festas, quase sempre <span class="fi pala">-na</span>: <span class="fi">lauantaina, jouluna</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="festa-rua">
  <h2>Exercício: como? quando?</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Escolha o essivo</h3>
    <p class="ohje">Em que papel, em que fase, em que dia? A palavra entre parênteses ganha <span class="fi pala">-na/-nä</span>.</p>
    <div class="valinta" data-oikea="taloustieteilijänä">
      <p class="kysymys"><span class="fi">Walker oli töissä ___ neljäkymmentä vuotta.</span> <span class="fi" data-ei-kuplaa>(taloustieteilijä)</span></p>
      <div class="vaihtoehdot"><button type="button">taloustieteilijä</button><button type="button">taloustieteilijänä</button><button type="button">taloustieteilijäksi</button></div>
    </div>
    <div class="valinta" data-oikea="Maanantaina">
      <p class="kysymys"><span class="fi">___ Maia ja Jay menevät kirjastoon.</span> <span class="fi" data-ei-kuplaa>(maanantai)</span></p>
      <div class="vaihtoehdot"><button type="button">Maanantaina</button><button type="button">Maanantai</button><button type="button">Maanantaiksi</button></div>
    </div>
    <div class="valinta" data-oikea="Nuorena">
      <p class="kysymys"><span class="fi">___ Purjo oli töissä sairaanhoitajana.</span> <span class="fi" data-ei-kuplaa>(nuori)</span></p>
      <div class="vaihtoehdot"><button type="button">Nuori</button><button type="button">Nuoreksi</button><button type="button">Nuorena</button></div>
    </div>
    <div class="valinta" data-oikea="turistina">
      <p class="kysymys"><span class="fi">Uuno on Brasiliassa ___.</span> <span class="fi" data-ei-kuplaa>(turisti)</span></p>
      <div class="vaihtoehdot"><button type="button">turistina</button><button type="button">turisti</button><button type="button">turistiksi</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="festa-rua">
  <h2>Gramática 2 · O translativo <span class="fi pala">-ksi</span>: ficar, virar, em que língua</h2>

  <h3>1. Ficar, virar</h3>
  <p>O <b>translativo</b> diz <b>no que</b> alguém ou alguma coisa se transforma. A terminação é <span class="fi pala">-ksi</span>, no radical do genitivo (sem o <span class="fi pala">-n</span>): <span class="fi">iloinen → iloisen → iloiseksi</span>, <span class="fi">väsynyt → väsyneen → väsyneeksi</span>. Três verbos aparecem com ele o tempo todo:</p>
  <table class="taivutus">
    <tr><th>verbo</th><th>exemplo</th><th>português</th></tr>
    <tr><td><span class="fi">tulla</span> + <span class="fi pala">-ksi</span></td><td><span class="fi">Uuno tuli väsyneeksi.</span></td><td>o Uuno ficou cansado</td></tr>
    <tr><td><span class="fi">muuttua</span> + <span class="fi pala">-ksi</span></td><td><span class="fi">Tie muuttui jääksi.</span></td><td>a estrada virou gelo</td></tr>
    <tr><td><span class="fi">tehdä</span> + objeto + <span class="fi pala">-ksi</span></td><td><span class="fi">Olut tekee minut rohkeaksi.</span></td><td>a cerveja me deixa corajoso</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-pt="O Jay fica corajoso.">Jay tulee rohkeaksi.</li>
    <li class="s" data-pt="Às quatro, a festa ficou quieta.">Kello neljä juhla muuttui hiljaiseksi.</li>
    <li class="s" data-pt="Quando o Hiisi dirige, a Purjo fica louca.">Kun Hiisi ajaa, Purjo tulee hulluksi.</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o português usa “ficar” para duas coisas: “ficar em casa” (estar) e “ficar cansado” (mudar). Em finlandês, para “ficar”, só a <b>mudança</b> leva <span class="fi pala">-ksi</span> (o <span class="fi pala">-ksi</span> tem outros usos, abaixo): <span class="fi">Jay tulee väsyneeksi</span> (fica cansado, muda). O <b>estado</b> fica na forma básica com <span class="fi">olla</span>: <span class="fi">Jay on väsynyt</span> (está cansado). Nunca <span class="pala">Jay tulee väsynyt</span>.</p>
  </div>

  <h3>2. Em que língua? suomeksi, portugaliksi</h3>
  <p>O mesmo <span class="fi pala">-ksi</span> diz em que língua alguma coisa é dita ou escrita: <span class="fi">suomeksi</span> (em finlandês), <span class="fi">portugaliksi</span> (em português), <span class="fi">englanniksi</span> (em inglês). Você já viu <span class="fi">portugaliksi</span> na lição 12 e <span class="fi">Minä käännän sen sinulle suomeksi.</span> na lição 15. E o <span class="fi">Terveydeksi!</span> da lição 7, “saúde!”, é o translativo de <span class="fi pala">terveys</span> (a saúde): “para a saúde”.</p>
  <ul class="esim">
    <li class="s" data-pt="Diga isso em português!">Sano se portugaliksi!</li>
    <li class="s" data-pt="Em finlandês é uma palavra bonita.">Suomeksi se on kaunis sana.</li>
    <li class="s" data-pt="Eu falo finlandês.">Minä puhun suomea.</li>
  </ul>
  <p>Compare as duas últimas: saber e falar uma língua vai no partitivo (<span class="fi">puhun suomea</span> = falo finlandês); “falar em finlandês, agora” também pode ser <span class="fi pala">puhua suomeksi</span>; a língua <b>em que</b> se diz, escreve ou traduz alguma coisa vai no translativo (<span class="fi">sano se suomeksi</span>).</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios da parte B</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Complete com o translativo</h3>
    <p class="ohje">Escreva a palavra entre parênteses com <span class="fi pala">-ksi</span>. Lembre: o radical do genitivo, sem o <span class="fi pala">-n</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Jay juo olutta ja tulee <span class="aukko" data-oikea="rohkeaksi"></span>. <span data-ei-kuplaa>(rohkea)</span></p>
      <p>Kello neljä juhla muuttuu <span class="aukko" data-oikea="hiljaiseksi"></span>. <span data-ei-kuplaa>(hiljainen)</span></p>
      <p>Uuno tanssii kaksi tuntia ja tulee <span class="aukko" data-oikea="väsyneeksi"></span>. <span data-ei-kuplaa>(väsynyt)</span></p>
      <p>Helsingissä satoi lunta, ja kaikki muuttui <span class="aukko" data-oikea="valkoiseksi"></span>. <span data-ei-kuplaa>(valkoinen)</span></p>
      <p>Kun Hiisi ajaa, Purjo tulee <span class="aukko" data-oikea="hulluksi"></span>. <span data-ei-kuplaa>(hullu)</span></p>
      <p>Tie muuttui <span class="aukko" data-oikea="jääksi"></span>. <span data-ei-kuplaa>(jää)</span></p>
      <p>Sano se <span class="aukko" data-oikea="suomeksi"></span>! <span data-ei-kuplaa>(suomi)</span></p>
      <p>Maia kääntää viestin <span class="aukko" data-oikea="portugaliksi"></span>. <span data-ei-kuplaa>(portugali)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Ouça: ficou ou estava?</h3>
    <p class="ohje">Aperte ▶ sem ler. Com <span class="fi pala">-ksi</span> alguma coisa <b>mudou</b> (ficou); na forma básica com <span class="fi">oli</span>, era o <b>estado</b> (estava).</p>
    <div class="valinta" data-kuuntele="Jay tuli rohkeaksi." data-oikea="o Jay ficou corajoso">
      <p class="kysymys">O que aconteceu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">o Jay ficou corajoso</button><button type="button">o Jay estava corajoso</button></div>
    </div>
    <div class="valinta" data-kuuntele="Uuno oli väsynyt." data-oikea="o Uuno estava cansado">
      <p class="kysymys">O que aconteceu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">o Uuno ficou cansado</button><button type="button">o Uuno estava cansado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Juhla muuttui hiljaiseksi." data-oikea="a festa ficou quieta">
      <p class="kysymys">O que aconteceu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">a festa ficou quieta</button><button type="button">a festa estava quieta</button></div>
    </div>
    <div class="valinta" data-kuuntele="Purjo oli iloinen." data-oikea="a Purjo estava feliz">
      <p class="kysymys">O que aconteceu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">a Purjo estava feliz</button><button type="button">a Purjo ficou feliz</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mies tuli punaiseksi." data-oikea="o homem ficou vermelho">
      <p class="kysymys">O que aconteceu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">o homem estava vermelho</button><button type="button">o homem ficou vermelho</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Como, ficar ou forma básica?</h3>
    <p class="ohje">Escolha a forma. <span class="fi pala">-na/-nä</span> = como, quando; <span class="fi pala">-ksi</span> = ficar, virar, em que língua; sem terminação = a forma básica.</p>
    <div class="valinta" data-oikea="Lapsena">
      <p class="kysymys"><span class="fi">___ Maia tanssi kadulla.</span> <span class="fi" data-ei-kuplaa>(lapsi)</span></p>
      <div class="vaihtoehdot"><button type="button">Lapsi</button><button type="button">Lapsena</button><button type="button">Lapseksi</button></div>
    </div>
    <div class="valinta" data-oikea="kuljettajana">
      <p class="kysymys"><span class="fi">Malu on töissä ___.</span> <span class="fi" data-ei-kuplaa>(kuljettaja)</span></p>
      <div class="vaihtoehdot"><button type="button">kuljettajana</button><button type="button">kuljettajaksi</button><button type="button">kuljettaja</button></div>
    </div>
    <div class="valinta" data-oikea="hölmöksi">
      <p class="kysymys"><span class="fi">Olut tekee Jayn ___.</span> <span class="fi" data-ei-kuplaa>(hölmö)</span></p>
      <div class="vaihtoehdot"><button type="button">hölmönä</button><button type="button">hölmö</button><button type="button">hölmöksi</button></div>
    </div>
    <div class="valinta" data-oikea="Jouluna">
      <p class="kysymys"><span class="fi">___ täällä on aina juhlat.</span> <span class="fi" data-ei-kuplaa>(joulu)</span></p>
      <div class="vaihtoehdot"><button type="button">Joululla</button><button type="button">Jouluna</button><button type="button">Joulu</button></div>
    </div>
    <div class="valinta" data-oikea="suomeksi">
      <p class="kysymys"><span class="fi">Kirjoita viesti ___!</span> <span class="fi" data-ei-kuplaa>(suomi)</span></p>
      <div class="vaihtoehdot"><button type="button">suomea</button><button type="button">suomeksi</button><button type="button">suomena</button></div>
    </div>
    <div class="valinta" data-oikea="muusikkona">
      <p class="kysymys"><span class="fi">Walker on ___ parempi kuin taloustieteilijänä.</span> <span class="fi" data-ei-kuplaa>(muusikko)</span></p>
      <div class="vaihtoehdot"><button type="button">muusikoksi</button><button type="button">muusikko</button><button type="button">muusikkona</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>8. O relógio da noite</h3>
    <p class="ohje">Quatro e meia da manhã. Sem o Jay, a Maia faz o que geólogo faz: anota tudo, hora por hora, como na lição 13. Toque numa linha: o relógio gira até a hora e você ouve a frase. Depois responda.</p>
    <div class="aikajana" data-h="maia">
      <p data-aika="21:00" data-hahmo="walker" data-h="maia" data-puhu="Isä otti huuliharpun, ja naapurit tulivat kadulle." data-pt="O pai pegou a gaita, e os vizinhos vieram para a rua.">Isä otti huuliharpun, ja naapurit tulivat kadulle.</p>
      <p data-aika="21:10" data-hahmo="jay" data-h="maia" data-puhu="Me kuuntelimme Jayn vastaajan." data-pt="Nós ouvimos a caixa postal do Jay.">Me kuuntelimme Jayn vastaajan.</p>
      <p data-aika="23:00" data-hahmo="malu" data-h="maia" data-puhu="Naapurit lauloivat, ja koko katu tanssi." data-pt="Os vizinhos cantaram, e a rua inteira dançou.">Naapurit lauloivat, ja koko katu tanssi.</p>
      <p data-aika="0:00" data-hahmo="eenok2" data-h="maia" data-puhu="Keskiyöllä Eenok tuli iloiseksi ja lauloi." data-pt="À meia-noite o Eenok ficou alegre e cantou.">Keskiyöllä Eenok tuli iloiseksi ja lauloi.</p>
      <p data-aika="1:00" data-hahmo="jay" data-h="maia" data-puhu="Kello yksi Jay tuli rohkeaksi: hän joi liikaa." data-pt="À uma, o Jay ficou corajoso: ele bebeu demais.">Kello yksi Jay tuli rohkeaksi: hän joi liikaa.</p>
      <p data-aika="1:00" data-hahmo="uuno2" data-h="maia" data-puhu="Uuno tuli väsyneeksi ja nukkui tuolissa." data-pt="O Uuno ficou cansado e dormiu numa cadeira.">Uuno tuli väsyneeksi ja nukkui tuolissa.</p>
      <p data-aika="2:30" data-hahmo="jay" data-h="maia" data-puhu="Jay meni kadun kulmaan." data-pt="O Jay foi até a esquina.">Jay meni kadun kulmaan.</p>
      <p data-aika="3:00" data-hahmo="walker" data-h="maia" data-puhu="Isä tuli väsyneeksi, ja huuliharppu muuttui hiljaiseksi." data-pt="O pai ficou cansado, e a gaita ficou em silêncio.">Isä tuli väsyneeksi, ja huuliharppu muuttui hiljaiseksi.</p>
      <p data-aika="4:00" data-hahmo="maia" data-h="maia" data-puhu="Juhla muuttui hiljaiseksi. Jay oli poissa." data-pt="A festa ficou quieta. O Jay tinha sumido.">Juhla muuttui hiljaiseksi. Jay oli poissa.</p>
    </div>
    <div class="valinta" data-oikea="Hän joi liikaa.">
      <p class="kysymys"><span class="fi">Mitä Jay teki kello yksi?</span></p>
      <div class="vaihtoehdot"><button type="button">Hän nukkui tuolissa.</button><button type="button">Hän joi liikaa.</button><button type="button">Hän meni kotiin.</button></div>
    </div>
    <div class="valinta" data-oikea="Uuno.">
      <p class="kysymys"><span class="fi">Kuka nukkui tuolissa?</span></p>
      <div class="vaihtoehdot"><button type="button">Walker.</button><button type="button">Eenok.</button><button type="button">Uuno.</button></div>
    </div>
    <div class="valinta" data-oikea="Kadun kulmaan.">
      <p class="kysymys"><span class="fi">Mihin Jay meni kello puoli kolme?</span></p>
      <div class="vaihtoehdot"><button type="button">Kadun kulmaan.</button><button type="button">Kotiin.</button><button type="button">Kauppaan.</button></div>
    </div>
    <div class="valinta" data-oikea="Kello neljä.">
      <p class="kysymys"><span class="fi">Milloin juhla muuttui hiljaiseksi?</span></p>
      <div class="vaihtoehdot"><button type="button">Keskiyöllä.</button><button type="button">Kello kaksi.</button><button type="button">Kello neljä.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>9. Traduza para o finlandês</h3>
    <div class="kaanna"><p class="pt">Quando criança, eu morava no Brasil.</p><p class="s" data-pt="Quando criança, eu morava no Brasil.">Lapsena asuin Brasiliassa.</p></div>
    <div class="kaanna"><p class="pt">No Natal tem festa aqui.</p><p class="s" data-pt="No Natal tem festa aqui.">Jouluna täällä on juhlat.</p></div>
    <div class="kaanna"><p class="pt">A Malu trabalha como motorista.</p><p class="s" data-pt="A Malu trabalha como motorista.">Malu on töissä kuljettajana.</p></div>
    <div class="kaanna"><p class="pt">O Jay ficou corajoso.</p><p class="s" data-pt="O Jay ficou corajoso.">Jay tuli rohkeaksi.</p></div>
    <div class="kaanna"><p class="pt">A festa ficou quieta.</p><p class="s" data-pt="A festa ficou quieta.">Juhla muuttui hiljaiseksi.</p></div>
    <div class="kaanna"><p class="pt">Diga isso em português!</p><p class="s" data-pt="Diga isso em português!">Sano se portugaliksi!</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>10. Responda às perguntas</h3>
    <p class="ohje">Responda sobre você, em voz alta, antes de abrir o modelo. Use o essivo ou o translativo.</p>
    <details class="vastaus"><summary lang="fi-FI">Missä sinä asuit lapsena?</summary><p class="s" data-pt="Quando criança, eu morava em Belo Horizonte.">Lapsena asuin Belo Horizontessa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä teet lauantaina?</summary><p class="s" data-pt="No sábado eu danço e canto.">Lauantaina minä tanssin ja laulan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Missä sinä olet töissä?</summary><p class="s" data-pt="Eu trabalho no hospital como enfermeira.">Olen töissä sairaalassa sairaanhoitajana.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Milloin sinä tulet iloiseksi?</summary><p class="s" data-pt="Eu fico feliz quando faz sol.">Tulen iloiseksi, kun aurinko paistaa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Milloin sinä tulet hulluksi?</summary><p class="s" data-pt="Eu fico louca quando o Hiisi dirige.">Tulen hulluksi, kun Hiisi ajaa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Missä sinä olit viime jouluna?</summary><p class="s" data-pt="No Natal passado eu estava no Brasil.">Viime jouluna <span data-l="olla#2">olin</span> Brasiliassa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mikä on paras asia elämässä?</summary><p class="s" data-pt="Os amigos e a música. E aquela sensação quando a festa começa.">Ystävät ja musiikki. Ja se tunne, kun juhla alkaa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Millaista elämä on Brasiliassa?</summary><p class="s" data-pt="É alegre. As pessoas dançam na rua até de manhã.">Iloista. Ihmiset tanssivat kadulla aamuun asti.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Montako henkeä kadulla oli?</summary><p class="s" data-pt="Umas cem. E à meia-noite cada vez mais!">Noin sata. Ja keskiyöllä yhä enemmän!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Milloin juhla oli lopussa?</summary><p class="s" data-pt="Às quatro. Naquela hora eu estava muito cansado.">Kello neljä. Silloin olin todella väsynyt.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Oletko väsynyt?</summary><p class="s" data-pt="Não estou cansado, e sim feliz!">En ole väsynyt, vaan iloinen!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kuka voitti?</summary><p class="s" data-pt="A Malu ganhou!">Malu voitti!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Missä sinä elit lapsena?</summary><p class="s" data-pt="Quando criança, eu vivia aqui nesta rua.">Lapsena elin täällä kadulla.</p></details>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>11. O livro de colorir: pinte de quê?</h3>
    <p class="ohje">Em Helsinque, a sala nova da Purjo ainda é toda branca, como a cidade na neve. Ela quer pintar e pede para a Maia testar as cores no desenho da lição 8: <span class="fi">Maalaa seinä keltaiseksi!</span> = pinte a parede de amarelo. Com <span class="fi">maalata</span> (pintar), a cor nova vai no translativo, como com <span class="fi">tehdä</span>: <span class="fi">keltainen → keltaiseksi</span>. Leia (ou ouça) as frases, escolha a cor na forma básica e toque na parte do desenho. No fim, aperte <b>Conferir</b>.</p>
    <div class="varityskirja" data-h="purjo">
      <ol class="vk-ohjeet" lang="fi-FI">
        <li data-alue="seina" data-vari="keltainen" data-pt="Pinte a parede de amarelo.">Maalaa seinä keltaiseksi.</li>
        <li data-alue="lattia" data-vari="harmaa" data-pt="Pinte o chão de cinza.">Maalaa lattia harmaaksi.</li>
        <li data-alue="sohva" data-vari="punainen" data-pt="Pinte o sofá de vermelho.">Maalaa sohva punaiseksi.</li>
        <li data-alue="matto" data-vari="sininen" data-pt="Pinte o tapete de azul.">Maalaa matto siniseksi.</li>
        <li data-alue="lamppu" data-vari="musta" data-pt="Pinte a luminária de preto.">Maalaa lamppu mustaksi.</li>
        <li data-alue="verho" data-vari="vihreä" data-pt="Pinte a cortina de verde.">Maalaa verho vihreäksi.</li>
        <li data-alue="possu" data-vari="vaaleanpunainen" data-pt="Pinte o porquinho do quadro de rosa.">Maalaa taulun possu vaaleanpunaiseksi.</li>
      </ol>
      <p class="vk-valmis-lause" lang="fi-FI" hidden>Ihana! Nyt olohuone ei ole enää valkoinen.</p>
    </div>
  </div>
</section>

<aside class="kulttuuri" data-paikka="clube-da-esquina">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Festa na rua e o Clube da Esquina</h3>
  <figure class="kuva" data-kuva="festa-rua"></figure>
  <p>Em Belo Horizonte, festa de rua é coisa de vizinho. Os moradores pedem licença à prefeitura, fecham a rua para os carros, põem mesas na calçada, e cada família traz um prato: feijão tropeiro, pão de queijo, frango com quiabo. Tem cerveja gelada, samba, criança correndo até tarde e alguém mais velho que sabe todas as músicas. No fim do ano e no carnaval, os <b>blocos de rua</b> tocam tambor pela cidade inteira, como na foto.</p>
  <p>A música da cidade tem um nome famoso: <b>Clube da Esquina</b>. Nos anos 1960 e 1970, um grupo de jovens músicos de Belo Horizonte se encontrava numa esquina do bairro Santa Tereza para tocar violão e conversar. O nome pegou. Em 1972 saiu um disco duplo chamado assim, que misturava canção brasileira, jazz e rock, e a música de Minas ficou conhecida no Brasil inteiro. Santa Tereza continua com música na praça (a foto de fundo). O Walker toca essas canções na gaita de boca há quarenta anos.</p>
  <p>Na Finlândia também tem festa de rua, <span class="fi">katujuhla</span>, mas quase sempre no verão (<span class="fi">kesällä</span>), de junho a agosto: em dezembro faz frio e às três da tarde já está escuro. Em Helsinque, bairros como Kallio fecham ruas no verão para bandas, comida e dança. Lá também se dança na rua a noite inteira, só que a noite de verão finlandesa quase não escurece.</p>
</aside>

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
  <p>Às três e meia, o Uuno e o Eenok vão embora e se despedem da Maia do jeito que se fala na rua:</p>
  <p class="s" data-h="uuno2" data-kirja="Me menemme nyt kotiin. Me olemme todella väsyneitä." data-pt="A gente vai para casa agora. A gente está muito cansado.">Me mennään nyt kotiin. Me ollaan tosi väsyneitä.</p>
  <p class="s" data-h="eenok2" data-kirja="Kiitos, Maia! Tämä oli todella mukava ilta." data-pt="Obrigado, Maia! Foi uma noite muito legal.">Kiitos, Maia! Tää oli tosi kiva ilta.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="clube-da-esquina">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t16">
    <h3>Lição de casa</h3>
    <p>Escreva seis frases sobre você. Três com o essivo: como você era ou o que fazia <span class="fi">lapsena</span> ou <span class="fi">nuorena</span>, o que você faz <span class="fi">lauantaina</span> ou <span class="fi">jouluna</span>, e o seu trabalho com <span class="fi">olen töissä</span> + <span class="fi pala">-na</span>. Três com o translativo: quando você fica alegre ou cansado (<span class="fi">tulen iloiseksi, kun…</span>), uma coisa que mudou (<span class="fi">muuttui</span> + <span class="fi pala">-ksi</span>) e uma frase com <span class="fi">suomeksi</span> ou <span class="fi">portugaliksi</span>. Depois leia em voz alta, com <span class="fi pala">ie, uo, yö</span> numa sílaba só.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Quando criança, eu dançava na rua a noite inteira.">Lapsena minä <span data-l="tanssia:imperf.1s">tanssin</span> kadulla koko yön.</p>
      <p class="s" data-pt="No sábado eu pinto quadros.">Lauantaina minä maalaan tauluja.</p>
      <p class="s" data-pt="Eu trabalho como geóloga.">Olen töissä geologina.</p>
      <p class="s" data-pt="Eu fico feliz quando o Jay fala português.">Tulen iloiseksi, kun Jay puhuu portugalia.</p>
      <p class="s" data-pt="Às quatro, a festa ficou quieta.">Kello neljä juhla muuttui hiljaiseksi.</p>
      <p class="s" data-pt="Eu escrevo para a Purjo em finlandês.">Minä kirjoitan Purjolle suomeksi.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t16">
    <li>Digo como e quando com o essivo: lapsena, nuorena, jouluna, lauantaina.</li>
    <li>Digo a profissão com “trabalhar como”: olen töissä opettajana.</li>
    <li>Digo o que muda com o translativo: tulla iloiseksi, muuttua hiljaiseksi.</li>
    <li>Digo em que língua: suomeksi, portugaliksi.</li>
    <li>Entendo mensagens de voz: quem ligou, a que horas, o que aconteceu.</li>
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
      id: 'essiivi16', otsikko: 'O essivo -na/-nä: como? quando?', taso: 'essencial', hakuosa: 'h-essiivi', treeni: 't16-essiivi',
      html: `
<p><b>Forma:</b> radical forte (o do ilativo) + <span class="fi pala">-na/-nä</span>. <b>Uso:</b> o papel (como professor), a fase da vida (quando criança) e, com dias e festas, quando.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">lapsena</span></td><td>quando criança</td></tr>
  <tr><td><span class="fi">nuorena</span></td><td>quando jovem</td></tr>
  <tr><td><span class="fi">opettajana</span></td><td>como professor</td></tr>
  <tr><td><span class="fi">muusikkona</span></td><td>como músico</td></tr>
  <tr><td><span class="fi">jouluna</span></td><td>no Natal</td></tr>
  <tr><td><span class="fi">lauantaina</span></td><td>no sábado</td></tr>
</table>
<div class="sijataulu" data-sana="lapsi" data-sijat="nominatiivi,genetiivi,illatiivi,essiivi,translatiivi"></div>
<p>Com <span class="fi">olla</span> sozinho, a profissão fica na forma básica (<span class="fi">Isä on muusikko.</span>); com “trabalhar como”, essivo (<span class="fi">Isä on töissä muusikkona.</span>).</p>`
    },
    {
      id: 'translatiivi16', otsikko: 'O translativo -ksi: ficar, virar, em que língua', taso: 'essencial', hakuosa: 'h-essiivi', treeni: 't16-translatiivi',
      html: `
<p><b>Forma:</b> radical do genitivo (sem o <span class="fi pala">-n</span>) + <span class="fi pala">-ksi</span>: <span class="fi">iloisen → iloiseksi</span>, <span class="fi">väsyneen → väsyneeksi</span>, <span class="fi">kadun → kaduksi</span>.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Jay tulee rohkeaksi.</span></td><td>o Jay fica corajoso</td></tr>
  <tr><td><span class="fi">Juhla muuttuu hiljaiseksi.</span></td><td>a festa fica quieta</td></tr>
  <tr><td><span class="fi">Olut tekee minut rohkeaksi.</span></td><td>a cerveja me deixa corajoso</td></tr>
  <tr><td><span class="fi">Sano se suomeksi!</span></td><td>diga isso em finlandês!</td></tr>
</table>
<div class="sijataulu" data-sana="iloinen" data-sijat="nominatiivi,genetiivi,essiivi,translatiivi"></div>
<p>Para “ficar”, só a <b>mudança</b> leva <span class="fi pala">-ksi</span>: <span class="fi">Jay tulee väsyneeksi</span> (fica cansado) × <span class="fi">Jay on väsynyt</span> (está cansado).</p>`
    },
    {
      id: 'milloin16', otsikko: 'Quando? Dias e festas com -na, partes do dia com -lla', taso: 'atenção', hakuosa: 'h-aika', treeni: 't16-essiivi',
      html: `
<table class="taivutus">
  <tr><th>-na/-nä (essivo)</th><th>-lla/-llä (adessivo)</th></tr>
  <tr><td><span class="fi">maanantaina</span><span class="kaannos" lang="pt-BR">na segunda</span></td><td><span class="fi">aamulla</span><span class="kaannos" lang="pt-BR">de manhã</span></td></tr>
  <tr><td><span class="fi">lauantaina</span><span class="kaannos" lang="pt-BR">no sábado</span></td><td><span class="fi">illalla</span><span class="kaannos" lang="pt-BR">à noite</span></td></tr>
  <tr><td><span class="fi">jouluna</span><span class="kaannos" lang="pt-BR">no Natal</span></td><td><span class="fi">yöllä</span><span class="kaannos" lang="pt-BR">de madrugada</span></td></tr>
  <tr><td><span class="fi">jouluaattona</span><span class="kaannos" lang="pt-BR">na véspera de Natal</span></td><td><span class="fi">kesällä</span><span class="kaannos" lang="pt-BR">no verão</span></td></tr>
</table>
<p>Dias da semana e festas: quase sempre <span class="fi pala">-na</span>. Partes do dia e estações do ano: quase sempre <span class="fi pala">-lla</span>. A bolha de cada palavra mostra a forma certa.</p>`
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
<p><span class="fi">kun</span> (quando) e <span class="fi">koska</span> (porque) ligam a causa ou o momento. <span class="fi">vaan</span> é “e sim”, só depois de uma negação; sem negação, “mas” é <span class="fi">mutta</span>:</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Tulen iloiseksi, kun aurinko paistaa.</span></td><td>quando</td></tr>
  <tr><td><span class="fi">Nukuin vain vähän, koska musiikki oli niin hyvää.</span></td><td>porque</td></tr>
  <tr><td><span class="fi">En ole väsynyt, vaan iloinen!</span></td><td>e sim · depois de negação</td></tr>
  <tr><td><span class="fi">Juhla on lopussa, mutta Walker soittaa yhä.</span></td><td>mas</td></tr>
</table>`
    },
    {
      id: 'sudenkuopat16', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>Ficar = mudar ou estar?</b> Mudança com <span class="fi pala">-ksi</span>: <span class="fi">tulee väsyneeksi</span>. Estado sem terminação: <span class="fi">on väsynyt</span>. Nunca <span class="pala">tulee väsynyt</span>.</li>
  <li><b>Profissão:</b> <span class="fi">Hän on opettaja.</span> (é professor) × <span class="fi">Hän on töissä opettajana.</span> (trabalha como professor).</li>
  <li><b>Que língua?</b> Saber, falar a língua: partitivo, <span class="fi">puhun suomea</span>. Dizer, escrever, traduzir em: <span class="fi">suomeksi</span>.</li>
  <li><b>Quando?</b> <span class="fi">lauantaina, jouluna</span> com <span class="fi pala">-na</span>, mas <span class="fi">aamulla, illalla</span> com <span class="fi pala">-lla</span> (sem “aquele, um”).</li>
  <li><b>O ditongo:</b> <span class="fi">tie, yö, Suomi</span> sem quebrar a sílaba e sem acento no meio.</li>
</ul>`
    }
  ]
});
