/* Tottakai, lição 13: perheen päivä ja jouluaaton videopuhelu Belo Horizontessa, imperfekti (Passon jakso 13 Maian
   näkökulmasta). Oma materiaali, ei kirjan tekstiä. Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5d ja
   docs/RUNKO_13_20.md §1 (uusi tarina L11–L20, omistaja 31.10.2026). Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A ”Parte A · Encontro” (#t13): tiistai 22.12. kello 10, Maian vanhempien keittiö (maanantaina Mercado Central,
     Savassi ja joulumessut, t11–t12). Lukittu dialogi A (ass/luonnokset/t13-a-1_lopullinen.md, 18 repliikkiä: Maia
     kertoo Jaylle suomeksi, salakielellä, mitä kaikki tekivät; ”nukkua kuin tukki”; Purjon yösoitto), loppukappale
     (Marta kutsuu syömään portugaliksi, ei läsnä kohtauksessa), Frases prontas, tehtävä 1 (dialogin ymmärtäminen),
     sanasto, tehtävä 2 (Ligue: quando?), kikka A: Maian viesti Purjolle kellotaululla (`.aikajana`, Tottakain
     komponentit.js:n t13-lisäys; Maia juo teetä, X13), kulttuuri (kaivoslaisen päivä, kuva pao-de-queijo), ääntäminen
     (puhuu / puhui, tulee / tuli, Tule! / tuli), tehtävä 3 (kuuntelu), Gramática 1 (-i- ja vartalon muutokset
     tyypeittäin) → tehtävä 4 (kirjoitus).
   - osa B ”Parte B · Aprofundar e fechar” (#t13-b): torstai 24.12., jouluaatto, kello 10.30 (Helsingissä 15.30). Purjon
     joulukalenteri (`.joulukalenteri`, siirretty t15:stä 31.10.2026; luukut 13–24, viimeiset 22–24 tänään; avain
     ”sete” = seitsemän joulu-sanaa) → tehtävä 5 (kalenterin sanat, t15:n entinen tehtävä 1); lukittu dialogi B
     (ass/luonnokset/t13-b-1_lopullinen.md, 18 repliikkiä) `.videopuhelu`-kehyksessä (siirretty t15:stä): Purjo ja Hiisi
     Helsingistä, Maian virhe ”nukkuin” → nukuin (data-hairio), Andersonin Kiitos!, kakkua oikein, villasukat,
     lahjapaketti yhdyssanana; loppukappale (Maira ja Marisa tulevat illalliselle: jatkuvuus jouluaatto-vieraat).
     Frases prontas, Gramática 2 (heikko aste kaikissa persoonissa paitsi 3.) → tehtävä 6 (kirjoitettu sarja, REVIEW:52);
     Gramática 3 (ajanilmaukset) → tehtävät 7 (kuuntelu), 8 (Purjon ja Hiiden viestit keskiviikkona 23.12., .chat,
     omistajan rivit, q3) ja 9 (käännös), Na rua (me oltiin, me mentiin; puhujana Jay postikierroksesta, REVIEW:60),
     tehtävä 10 (puhuminen), kotitehtävä, itsearvio.
   Materiaalivaihe 31.10.2026: vanhat dialogit (keittiö ja keskiviikon lounas) korvattu lukituilla; keskiviikon
   lounaskohtaus on mitätön (RUNKO §0.1), sen tapahtumat (postikierros, Kiitos, nukkuin) kerrotaan videopuhelussa.
   Joulusanat (joulupukki, joulukuusi, kinkku ym.) ja niiden tietueet siirtyivät sanasto/t15.js:stä sanasto/t13.js:ään;
   lahja on t12:n sana. Lunastaa lupaukset ”Hän oli lääkäri / Isä kuoli · o passado: lição 13” (t05) ja ”Olin järvessä /
   menin järveen · lição 13” (t06): Gramática 1 (osa A), kohta 1. Brasilian jakso: suomea puhuvat vain Maia, Jay, Purjo,
   Hiisi ja Anderson yhdellä sanalla; Martan sanat portugaliksi kertojan tekstissä. Kaikki puhuvat kirjakieltä;
   puhekieli vain Na rua -nurkassa. Hiiden 😐 kerran kohtauksessa, merkitään .emoji. Purjon rallienglanti lang="en".
   Kortit (kielioppi) ennallaan: U7-räikkä on rajalla (testaa_ratchet.js). Uuno ja Eenok eivät näy tällä oppitunnilla. */
Kurssi.lisaa({
  id: 't13',
  lyhyt: '13',
  jakso: 'Lição 13',
  otsikko: 'Um dia em família e a véspera de Natal: o passado',
  lahde: 'Tema: a rotina da família em Belo Horizonte e a videochamada de Natal com Helsinque · Gramática: o passado (imperfekti) afirmativo, o radical de cada tipo, a consoante fraca em eu, você, nós, vocês; quando? (eilen, viime viikolla, kolme päivää sitten) · Pronúncia: presente ou passado pelo ouvido (puhuu × puhui)',
  aiheet: ['aika', 'koti', 'toiminta', 'viestinta'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; acorda às seis, pinta e toma chá' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; acorda tarde e não lembra das ligações da noite' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; entrega as cartas da rua toda manhã' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; liga de Helsinque na véspera de Natal' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; ao lado da Purjo na videochamada' }
  },

  sanasto: [
    'herätä', 'nukkua', 'keittää', 'jutella', 'jakaa', 'posti', 'naapuri', 'pilates', 'aamukahvi', 'unikeko', 'tukki',
    'koko', 'vihdoin', 'paitsi', 'yksin', 'tyttö', 'lopettaa', 'jatkaa',
    'eilen', 'aamu', 'iltapäivä', 'yö', 'viikko', 'viime', 'viime viikolla', 'viime vuonna', 'päivää sitten', 'silloin',
    'jouluaatto', 'joulukalenteri', 'luukku', 'joulupukki', 'joulukuusi', 'kinkku', 'lahjapaketti'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Encontro',
      html: `
<ul class="tavoitteet">
  <li>Você entende o que alguém fez: <span class="fi">Isä meni pilatekseen.</span> <span class="fi">Anderson jakoi postia.</span></li>
  <li>Você diz quando: <span class="fi">aamulla, iltapäivällä, illalla, eilen</span>.</li>
  <li>Você ouve a diferença entre presente e passado: <span class="fi">puhuu</span> × <span class="fi">puhui</span>, e entre <span class="fi">Tule!</span> e <span class="fi">tuli</span>.</li>
  <li>Você forma o passado em todas as pessoas (<span class="fi">heräsin, heräsit, heräsimme</span>) e o radical de cada tipo: <span class="fi">ostaa → osti, antaa → antoi, lukea → luki, olla → oli, mennä → meni, syödä → söi, haluta → halusi, tarvita → tarvitsi</span>.</li>
  <li>Parte B: a consoante fraca (<span class="fi">minä nukuin</span>, mas <span class="fi">hän nukkui</span>) e <span class="fi">viime viikolla</span>, <span class="fi">kolme päivää sitten</span>.</li>
</ul>
<p data-paikka="bh-bairro">Terça-feira, 22 de dezembro, dez da manhã, na casa dos pais da Maia. Ontem foi um dia comprido: o Mercado Central de manhã, a Savassi à tarde e a feira de Natal à noite, onde o Jay vendeu todos os porquinhos da Maia. Casa mineira acorda cedo, e hoje todo mundo já saiu ou já trabalhou. Só o Jay dormiu. Agora ele aparece na cozinha. Na cozinha, a Maia e o Jay falam finlandês: nesta casa, é a língua secreta dos dois.</p>

<section class="osio">
  <h2>Diálogo A: Missä kaikki ovat?</h2>
  <p class="ohje">Ouça primeiro sem tradução. Quase todos os verbos estão no passado: procure o <span class="fi pala">-i-</span> depois do radical (<span class="fi">heräsivät</span>; na forma de “ele”, no fim: <span class="fi">meni, keitti</span>). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t13-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="Belo Horizonte, terça-feira, dez da manhã. A Maia está sentada na cozinha da família. O Jay entra na cozinha.">Belo Horizonte, tiistai, kello kymmenen aamulla. Maia istuu perheen keittiössä. Jay tulee keittiöön.</p>
    <p class="s" data-h="jay" data-pt="Bom dia. Cadê todo mundo?">Huomenta. Missä kaikki <span data-l="olla#2">ovat</span>?</p>
    <p class="s" data-h="maia" data-pt="Bom dia, dorminhoco! Todo mundo acordou cedo, menos você.">Huomenta, unikeko! Kaikki heräsivät aikaisin, paitsi sinä.</p>
    <p class="s" data-h="jay" data-pt="Cadê o Walker?">Missä Walker <span data-l="olla#2">on</span>?</p>
    <p class="s" data-h="maia" data-pt="O pai foi para o pilates às sete. Ele vai lá três vezes por semana.">Isä meni pilatekseen kello seitsemän. Hän käy siellä kolme kertaa viikossa.</p>
    <p class="s" data-h="jay" data-pt="Às sete? Isso ainda é noite. E a Marta?">Kello seitsemän? Se on vielä yö. Entä Marta?</p>
    <p class="s" data-h="maia" data-pt="A mãe fez café e conversou com a vizinha. Agora elas conversam lá fora.">Äiti keitti kahvia ja jutteli naapurin kanssa. Nyt he juttelevat ulkona.</p>
    <p class="s" data-h="jay" data-pt="Sobre o que elas conversam?">Mistä he juttelevat?</p>
    <p class="s" data-h="maia" data-pt="Elas conversam sobre você. A vizinha quer ver o homem finlandês.">He juttelevat sinusta. Naapuri haluaa nähdä suomalaisen miehen.</p>
    <p class="s" data-h="jay" data-pt="Hoje não. E o Anderson? Ele ainda está dormindo?">Ei tänään. Entä Anderson? Nukkuuko hän vielä?</p>
    <p class="s" data-h="maia" data-pt="O Anderson saiu às oito. Ele entregou o correio sozinho, como toda manhã. Ele estava com o boné do Rei Leão.">Anderson lähti kello kahdeksan. Hän jakoi postia yksin, kuten joka aamu. Hänellä oli <span lang="pt-BR">O Rei Leão</span> -lippis.</p>
    <p class="s" data-h="jay" data-pt="Ele faz um bom trabalho. Aqui o correio sempre chega na hora.">Hän tekee hyvää työtä. Täällä posti tulee aina ajoissa.</p>
    <p class="s" data-h="jay" data-pt="E você? Quando você acordou?">Entä sinä? Milloin sinä heräsit?</p>
    <p class="s" data-h="maia" data-pt="Eu acordei às seis. Pintei e tomei chá. O café frio da mãe está esperando por você.">Minä heräsin kello kuusi. Maalasin ja join teetä. Äidin kylmä kahvi odottaa sinua.</p>
    <p class="s" data-h="jay" data-pt="Obrigado. Eu dormi muito. Dormi como uma pedra.">Kiitos. Minä nukuin kauan. Nukuin kuin tukki.</p>
    <p class="s" data-h="maia" data-pt="Como uma pedra? A Purjo te ligou às três da manhã, e vocês falaram dez minutos. Ela me escreveu isso de manhã.">Kuin tukki? Purjo soitti sinulle kello kolme yöllä ja te puhuitte kymmenen minuuttia. Hän kirjoitti sen minulle aamulla.</p>
    <p class="s" data-h="jay" data-pt="Eu falei com a Purjo? Não me lembro disso.">Puhuinko minä Purjon kanssa? Minä en muista sitä.</p>
    <p class="s" data-h="maia" data-pt="Você não lembra de nada! E a Purjo deve ter esquecido de novo que aqui é noite, mas na Finlândia é manhã.">Sinä et muista mitään! Ja Purjo unohti varmaan taas, että täällä on yö, mutta Suomessa on aamu.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay faz café e toma três xícaras. Só então ele acorda.">Jay keittää kahvia ja juo kolme kuppia. Vasta sitten hän herää.</p>
  </div>
  <p>Do portão vem a voz da Marta, em português: — Maia, Jay, venham comer! Tem pão de queijo! O Jay entende duas palavras, “pão” e “queijo”. É o suficiente. Às dez e meia ele já comeu seis.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Kaikki heräsivät aikaisin, paitsi sinä.</span> = todo mundo acordou cedo, menos você · o passado com <span class="fi pala">-i-</span>: Gramática 1, mais adiante nesta parte; <span class="fi">paitsi</span> = menos, exceto</li>
      <li><span class="fi">kolme kertaa viikossa</span> = três vezes por semana · <span class="fi">viikossa</span>: “em cada semana”, com <span class="fi pala">-ssa</span></li>
      <li><span class="fi">Äiti jutteli naapurin kanssa.</span> = a mãe conversou com a vizinha · <span class="fi">kanssa</span> (com) vem depois do genitivo, como <span class="fi">Purjon kanssa</span></li>
      <li><span class="fi">Hän jakoi postia yksin, kuten joka aamu.</span> = ele entregou o correio sozinho, como toda manhã · <span class="fi">jakaa postia</span> = entregar o correio</li>
      <li><span class="fi">Nukuin kuin tukki.</span> = dormi como uma pedra · <span class="fi">nukkua kuin tukki</span>: palavra por palavra, “dormir como um tronco”; <span class="fi">kuin</span> = como</li>
      <li><span class="fi">Huomenta, unikeko!</span> = bom dia, dorminhoco! · <span class="fi">unikeko</span> é “monte de sono”: carinhoso</li>
      <li><span class="fi">Puhuinko minä Purjon kanssa?</span> = eu falei com a Purjo? · a pergunta no passado leva <span class="fi pala">-ko/-kö</span> no verbo, como no presente</li>
      <li><span class="fi">Sinä et muista mitään!</span> = você não lembra de nada! · <span class="fi">mitään</span> com <span class="fi">ei</span> e em perguntas · <span class="fi">varmaan</span> = provavelmente</li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercício: o diálogo A</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Você entendeu o diálogo A?</h3>
    <p class="ohje">Volte ao diálogo se precisar.</p>
    <div class="valinta" data-oikea="Jay">
      <p class="kysymys"><span class="fi">Kuka nukkui kauan?</span></p>
      <div class="vaihtoehdot"><button type="button">Maia</button><button type="button">Jay</button><button type="button">Walker</button></div>
    </div>
    <div class="valinta" data-oikea="Pilatekseen.">
      <p class="kysymys"><span class="fi">Mihin Walker meni kello seitsemän?</span></p>
      <div class="vaihtoehdot"><button type="button">Pilatekseen.</button><button type="button">Kauppaan.</button><button type="button">Keittiöön.</button></div>
    </div>
    <div class="valinta" data-oikea="Naapurin kanssa.">
      <p class="kysymys"><span class="fi">Kenen kanssa Marta jutteli?</span></p>
      <div class="vaihtoehdot"><button type="button">Jayn kanssa.</button><button type="button">Naapurin kanssa.</button><button type="button">Walkerin kanssa.</button></div>
    </div>
    <div class="valinta" data-oikea="Hän jakoi postia.">
      <p class="kysymys"><span class="fi">Mitä Anderson teki kello kahdeksan?</span></p>
      <div class="vaihtoehdot"><button type="button">Hän keitti kahvia.</button><button type="button">Hän maalasi.</button><button type="button">Hän jakoi postia.</button></div>
    </div>
    <div class="valinta" data-oikea="Teetä.">
      <p class="kysymys"><span class="fi">Mitä Maia joi aamulla?</span></p>
      <div class="vaihtoehdot"><button type="button">Teetä.</button><button type="button">Kahvia.</button><button type="button">Mehua.</button></div>
    </div>
    <div class="valinta" data-oikea="Purjo.">
      <p class="kysymys"><span class="fi">Kuka soitti Jaylle kello kolme yöllä?</span></p>
      <div class="vaihtoehdot"><button type="button">Hiisi.</button><button type="button">Marta.</button><button type="button">Purjo.</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="bh-bairro">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="O dia da família e quando" data-sanat="herätä,keittää,jutella,jakaa,posti,naapuri,aamu,iltapäivä,ilta,eilen,viikko,viime"></div>
  <p>As outras palavras da lição estão no <a href="#t13-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercício: quando?</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>2. Ligue: quando?</h3>
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
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>A mensagem da Maia: o dia da família no relógio</h2>
  <p>À noite, a Maia escreve para a Purjo, em finlandês, o que todos fizeram. Ela escreve como geóloga em trabalho de campo: hora por hora. Repare: quase todos os verbos têm um <span class="fi pala">-i-</span> depois do radical (<span class="fi">heräsin, keitti, meni, söimme</span>). É o passado. A regra completa vem na Gramática 1, mais abaixo.</p>
  <p class="s" data-h="maia" data-pt="Oi, Purjo! Aqui está o dia em Belo Horizonte, hora por hora.">Hei Purjo! Tässä on päivä Belo Horizontessa, tunti tunnilta.</p>
  <p class="ohje">Toque numa linha: o relógio gira até a hora e você ouve a frase. O botão embaixo do relógio toca o dia inteiro.</p>
  <div class="aikajana" data-h="maia">
    <p data-aika="3:00" data-hahmo="jay" data-h="maia" data-puhu="Sinä soitit Jaylle kello kolme yöllä. Täällä oli yö!" data-pt="Você ligou para o Jay às três da manhã. Aqui era noite!">Sinä soitit Jaylle kello kolme yöllä. Täällä oli yö!</p>
    <p data-aika="6:00" data-hahmo="maia" data-h="maia" data-puhu="Minä heräsin ja maalasin." data-pt="Eu acordei e pintei.">Minä heräsin ja maalasin.</p>
    <p data-aika="6:30" data-hahmo="marta" data-h="maia" data-puhu="Äiti keitti kahvia. Minä join teetä." data-pt="A mãe fez café. Eu tomei chá.">Äiti keitti kahvia. Minä join teetä.</p>
    <p data-aika="7:00" data-hahmo="walker" data-h="maia" data-puhu="Isä meni pilatekseen." data-pt="O pai foi para o pilates.">Isä meni pilatekseen.</p>
    <p data-aika="8:00" data-hahmo="anderson" data-h="maia" data-puhu="Anderson lähti ja jakoi postia." data-pt="O Anderson saiu e entregou o correio.">Anderson lähti ja jakoi postia.</p>
    <p data-aika="9:00" data-hahmo="marta" data-h="maia" data-puhu="Äiti jutteli naapurin kanssa." data-pt="A mãe conversou com a vizinha.">Äiti jutteli naapurin kanssa.</p>
    <p data-aika="9:30" data-hahmo="walker" data-h="maia" data-puhu="Isä tuli kotiin. Hän osti leipää." data-pt="O pai voltou para casa. Ele comprou pão.">Isä tuli kotiin. Hän osti leipää.</p>
    <p data-aika="10:00" data-hahmo="jay" data-h="maia" data-puhu="Jay heräsi. Vihdoin! Hän joi kolme kuppia kahvia." data-pt="O Jay acordou. Finalmente! Ele tomou três xícaras de café.">Jay heräsi. Vihdoin! Hän joi kolme kuppia kahvia.</p>
    <p data-aika="12:00" data-hahmo="marta" data-h="maia" data-puhu="Me söimme lounasta." data-pt="Nós almoçamos.">Me söimme lounasta.</p>
    <p data-aika="15:00" data-hahmo="walker" data-h="maia" data-puhu="Iltapäivällä satoi. Isä luki lehteä." data-pt="À tarde choveu. O pai leu o jornal.">Iltapäivällä satoi. Isä luki lehteä.</p>
    <p data-aika="20:00" data-hahmo="anderson" data-h="maia" data-puhu="Anderson ja Jay katsoivat Leijonakuningasta." data-pt="O Anderson e o Jay assistiram ao Rei Leão.">Anderson ja Jay katsoivat Leijonakuningasta.</p>
    <p data-aika="22:00" data-hahmo="jay" data-h="maia" data-puhu="Kello kymmenen kaikki nukkuivat. Paitsi Jay!" data-pt="Às dez todo mundo dormia. Menos o Jay!">Kello kymmenen kaikki nukkuivat. Paitsi Jay!</p>
  </div>
  <p class="s" data-h="maia" data-pt="Um abraço, Maia. O Jay diz: oi!">Terveisin Maia. Jay sanoo: moi!</p>
  <p>Uma frase em português pede dois passados: “acordaram” (uma vez) e “dormia” (durante um tempo). Em finlandês, os dois são o mesmo: <span class="fi">heräsi</span>, <span class="fi">nukkuivat</span>. Não há dois passados simples: um só, para os dois.</p>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Um dia mineiro: café cedo, pão de queijo e almoço ao meio-dia</h3>
  <figure class="kuva" data-kuva="pao-de-queijo"></figure>
  <p>Em Minas Gerais a casa acorda cedo. O primeiro café sai por volta das seis, coado na hora, forte e doce, e passa a manhã na garrafa térmica. Ao lado vem o <b>pão de queijo</b>, como o da Marta, feito de polvilho (o amido da mandioca), ovo, leite e queijo mineiro. Conta-se que ele nasceu nas cozinhas das fazendas de Minas, onde quase não havia trigo e o polvilho sobrava.</p>
  <p>O almoço é a refeição principal e é cedo: em muita casa mineira, ao meio-dia em ponto, com arroz, feijão, couve, angu e frango. À tarde vem o café da tarde, de novo com pão de queijo ou bolo. O jantar é leve.</p>
  <p>A Finlândia não é tão diferente: lá o almoço também é cedo, e os finlandeses bebem café como poucos povos no mundo. O café da manhã é o <span class="fi">aamukahvi</span>, palavra por palavra “café da manhã”: <span class="fi">aamu</span> + <span class="fi">kahvi</span>. A diferença: na Finlândia, quase sempre sem açúcar. E a Maia? Ela toma chá.</p>
</aside>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Pronúncia: presente ou passado? Ouça o fim</h2>
  <p>Presente e passado às vezes diferem por uma letra. No presente, a forma de “ele” muitas vezes termina em vogal <b>longa</b>: <span class="fi">puhuu, tulee, menee</span>. No passado, termina num <span class="fi pala">i</span> <b>curto</b>: <span class="fi">puhui</span>, <span class="fi"><span data-l="tulla:imperf.3s">tuli</span></span>, <span class="fi">meni</span>. É o comprimento de novo (lição 0): <span class="fi pala">ee</span> longo × <span class="fi pala">i</span> curto. No tipo 2, a primeira vogal do ditongo cai e vem o <span class="fi pala">-i</span>: <span class="fi">syö → söi</span>, <span class="fi">juo → joi</span>. Ouça os pares e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="Ela fala.">Hän puhuu.</li>
    <li class="s" data-pt="Ela falou.">Hän puhui.</li>
    <li class="s" data-pt="Ele vem.">Hän tulee.</li>
    <li class="s" data-pt="Ele veio.">Hän tuli.</li>
    <li class="s" data-pt="Ele vai.">Hän menee.</li>
    <li class="s" data-pt="Ele foi.">Hän meni.</li>
    <li class="s" data-pt="Ele come.">Hän syö.</li>
    <li class="s" data-pt="Ele comeu.">Hän söi.</li>
    <li class="s" data-pt="Venha!"><span data-l="tulla:imper.2s">Tule!</span></li>
    <li class="s" data-pt="Ele veio.">Hän <span data-l="tulla:imperf.3s">tuli</span>.</li>
  </ul>
  <p><b>Cuidado com o último par:</b> <span class="fi"><span data-l="tulla:imper.2s">Tule!</span></span> (venha!, a ordem da lição 9) termina em <span class="fi pala">e</span> curto, e <span class="fi"><span data-l="tulla:imperf.3s">tuli</span></span> (veio) em <span class="fi pala">i</span> curto. No português, o <span class="fi pala">e</span> final soa como “i” (“leite”); no finlandês, <span class="fi pala">e</span> e <span class="fi pala">i</span> mudam a palavra: diga o <span class="fi pala">e</span> de <span class="fi">Tule!</span> como em “ele”.</p>
  <p><b>Truque:</b> o acento fica na primeira sílaba, mas o fim decide o tempo: <span class="fi pala">TU-lee</span> tem <span class="fi pala">ee</span> longo, <span class="fi pala">TU-li</span> tem <span class="fi pala">i</span> curto. Em <span class="fi">puhui</span> e <span class="fi">söi</span>, o <span class="fi pala">i</span> faz ditongo, como em “pai” e “dói”.</p>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercício: presente ou passado?</h2>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Ouça: presente ou passado?</h3>
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
</section>

<section class="osio" data-osa="gramatica" data-paikka="belo-horizonte-panoraama">
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
    <tr><td>1</td><td><span class="fi">hän oppii</span></td><td><span class="fi">hän oppi</span></td><td>depois de i: fica um i só</td></tr>
    <tr><td>1</td><td><span class="fi">hän lukee, lähtee</span></td><td><span class="fi">hän luki, lähti</span></td><td>o e cai</td></tr>
    <tr><td>1</td><td><span class="fi">hän ostaa, ottaa</span></td><td><span class="fi">hän osti, otti</span></td><td>o a cai (primeira vogal o ou u)</td></tr>
    <tr><td>1</td><td><span class="fi">hän antaa, jakaa</span></td><td><span class="fi">hän antoi, jakoi</span></td><td>verbos de duas sílabas em -aa com a na 1ª sílaba: o a vira oi (em -ää, o ä só cai: keittää → keitti)</td></tr>
    <tr><td>1</td><td><span class="fi">hän tietää, ymmärtää</span></td><td><span class="fi">hän tiesi, ymmärsi</span></td><td>em alguns verbos, t vira s (mas <span class="fi">pitää → piti</span>)</td></tr>
    <tr><td>2</td><td><span class="fi">hän syö, juo</span></td><td><span class="fi">hän söi, joi</span></td><td>a primeira vogal do ditongo cai: yö → ö, uo → o</td></tr>
    <tr><td>3</td><td><span class="fi">hän tulee, menee, on</span></td><td><span class="fi">hän tuli, meni, oli</span></td><td>o e vira i</td></tr>
    <tr><td>4</td><td><span class="fi">hän haluaa, herää</span></td><td><span class="fi">hän halusi, heräsi</span></td><td>a última vogal do radical cai, + si: halua- → halusi</td></tr>
    <tr><td>5</td><td><span class="fi">hän tarvitsee</span></td><td><span class="fi">hän tarvitsi</span></td><td>o e vira i: -tsi</td></tr>
  </table>
  <p>Em <span class="fi">otti, lähti, osti</span>, o <span class="fi pala">t</span> antes do <span class="fi pala">i</span> continua <span class="fi pala">t</span>. Irregulares de verdade são poucos: <span class="fi">käydä → kävi</span>, <span class="fi">tehdä → teki</span>, <span class="fi">nähdä → näki</span>. E não é preciso decorar a tabela: a bolha de cada verbo mostra o passado de “ele”. Aprenda o verbo junto com ele, como você aprende o genitivo de um substantivo.</p>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercício: o passado</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Complete com o passado</h3>
    <p class="ohje">Escreva o verbo no passado, na pessoa certa. O verbo está entre parênteses.</p>
    <div class="aukot" lang="fi-FI">
      <p>Eilen minä <span class="aukko" data-oikea="heräsin"></span> kello seitsemän. <span data-ei-kuplaa>(herätä)</span></p>
      <p>Walker <span class="aukko" data-oikea="meni"></span> pilatekseen. <span data-ei-kuplaa>(mennä)</span></p>
      <p>Anderson <span class="aukko" data-oikea="jakoi"></span> postia. <span data-ei-kuplaa>(jakaa)</span></p>
      <p>Me <span class="aukko" data-oikea="söimme"></span> lounasta kello kaksitoista. <span data-ei-kuplaa>(syödä)</span></p>
      <p>Jay <span class="aukko" data-oikea="nukkui"></span> kuin tukki. <span data-ei-kuplaa>(nukkua)</span></p>
      <p>Sinä <span class="aukko" data-oikea="kävelit"></span> kolme tuntia! <span data-ei-kuplaa>(kävellä)</span></p>
      <p>Marta <span class="aukko" data-oikea="keitti"></span> kahvia. <span data-ei-kuplaa>(keittää)</span></p>
      <p>Naapurit <span class="aukko" data-oikea="antoivat"></span> Jaylle kahvia. <span data-ei-kuplaa>(antaa)</span></p>
      <p>Walker <span class="aukko" data-oikea="lopetti"></span> työt viime vuonna. <span data-ei-kuplaa>(lopettaa)</span></p>
      <p>Lounaan jälkeen Maia <span class="aukko" data-oikea="jatkoi"></span> työtä. <span data-ei-kuplaa>(jatkaa)</span></p>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Aprofundar e fechar',
      html: `
<ul class="tavoitteet">
  <li>Você conta o que fez: <span class="fi">Kolme päivää sitten me kävimme Mercado Centralissa.</span> <span class="fi">Eilen minä jaoin postia.</span></li>
  <li>Você usa a consoante fraca em eu, você, nós e vocês: <span class="fi">minä nukuin, sinä nukuit</span>, mas <span class="fi">hän nukkui</span>.</li>
  <li>Você diz quando: <span class="fi">eilen, viime viikolla, kolme päivää sitten</span>.</li>
  <li>Você conhece as palavras do Natal finlandês: <span class="fi">joulupukki, joulukuusi, lahja, kinkku</span>.</li>
</ul>

<p data-paikka="natal-bh">Quinta-feira, 24 de dezembro: véspera de Natal. Dez da manhã em Belo Horizonte, trinta graus, pisca-pisca nas janelas e neve de algodão na árvore da Marta. Ontem, quarta-feira, o Jay acordou às sete e entregou o correio da rua com o Anderson a manhã inteira; em cada casa alguém oferecia um cafezinho. Às dez e meia a Purjo vai ligar de Helsinque, onde já é de tarde. Antes da ligação, a Maia pega o calendário da Purjo.</p>

<section class="osio">
  <h2>O calendário do Advento da Purjo</h2>
  <p>Antes da viagem, a Purjo deu para a Maia um calendário do Advento (<span class="fi">joulukalenteri</span>) de papel, feito à mão. Na Finlândia, as crianças, e muitos adultos, abrem uma portinha (<span class="fi">luukku</span>) por dia, de 1 a 24 de dezembro. O da Purjo tem doze portinhas, de 13 a 24, e atrás de cada uma há uma palavra do Natal finlandês. A Maia abriu uma por dia; hoje faltam as últimas, 22, 23 e 24. O Jay nunca olhou. Agora a Maia quer que ele leia todas, antes que a mãe pergunte.</p>
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
    <p class="s jk-loppu" data-h="jay" data-pt="Feliz Natal! Obrigado, mãe.">Hyvää joulua! Kiitos, äiti.</p>
  </div>
  <p>Resposta: sete palavras começam com <span class="fi">joulu</span> (Natal): <span class="fi">joululaulu, joulukuusi, joulusauna, joulurauha, joulupuuro, joulupukki, joulukortti</span>. O finlandês faz palavras novas colando palavras: <span class="fi">joulu</span> + <span class="fi">kuusi</span> (abeto) = <span class="fi">joulukuusi</span>, árvore de Natal. E <span class="fi">joulupukki</span> é, palavra por palavra, o “bode de Natal”: antigamente, quem trazia os presentes era um bode.</p>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercício: as palavras do calendário</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>5. Ligue as palavras do calendário à tradução</h3>
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
</section>

<section class="osio" data-paikka="helsinki-lumi">
  <h2>Diálogo B: Hyvää joulua!</h2>
  <p class="ohje">Ouça primeiro sem tradução. Todos contam o que fizeram, no passado. A Maia comete um erro no passado de <span class="fi">nukkua</span>: qual? E o Anderson diz a sua segunda palavra em finlandês.</p>
  <div class="videopuhelu" data-dialogi="t13-dialogi-b" data-soittaja="Purjo" data-heidan="purjo,hiisi" data-meidan="maia,jay,anderson"
       data-heidan-tausta="helsinki-lumi" data-meidan-tausta="natal-bh" data-heidan-aika="Helsinki · 15.30" data-meidan-aika="Belo Horizonte · 10.30"></div>
  <div class="kpl" id="t13-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="É véspera de Natal, quinta-feira, dez e meia da manhã. A Maia e o Jay estão em Belo Horizonte. A Purjo liga para eles de Helsinque. O Hiisi está com a Purjo.">On jouluaatto, torstai, ja kello on puoli yksitoista aamulla. Maia ja Jay ovat Belo Horizontessa. Purjo soittaa heille Helsingistä. Hiisi on Purjon kanssa.</p>
    <p class="s" data-h="purjo" data-pt="Oi, filho! Aqui são três e meia da tarde, mas já está escuro e nevando.">Hei, poika! Täällä kello on puoli neljä iltapäivällä, mutta on jo pimeä ja sataa lunta.</p>
    <p class="s" data-h="jay" data-pt="Oi, mãe! Aqui faz sol e trinta graus.">Moi, äiti! Täällä paistaa aurinko ja on kolmekymmentä astetta.</p>
    <p class="s" data-h="purjo" data-pt="&quot;What did you do?&quot; O que vocês fizeram esta semana?"><span class="pala" lang="en">Vat did juu duu?</span> Mitä te teitte tällä viikolla?</p>
    <p class="s" data-h="maia" data-pt="Três dias atrás a gente foi ao Mercado Central. O Jay também comprou uma bermuda nova. Ela não tem furo.">Kolme päivää sitten me kävimme Mercado Centralissa. Jay osti myös uudet shortsit. Niissä ei ole reikää.</p>
    <p class="s" data-h="jay" data-pt="E eu vendi todos os porquinhos da Maia, duas tigelas e um vaso!">Ja minä myin kaikki Maian possut, kaksi kulhoa ja maljakon!</p>
    <p class="s" data-h="purjo" data-pt="Todos os porquinhos? Que ótimo, querido! O que você fez ontem, Jay?">Kaikki possut? <span data-l="hieno#2">Hienoa</span>, kulta! Mitä sinä teit eilen, Jay?</p>
    <p class="s" data-h="jay" data-pt="Ontem eu entreguei o correio com o Anderson a manhã inteira. Tomei seis cafés.">Eilen minä jaoin postia Andersonin kanssa koko aamun. Join kuusi kahvia.</p>
    <p class="s" data-h="maia" data-hairio="nukkuin → nukuin" data-pt="Seis cafés! Por isso o Jay dormiu mal à noite. Eu &quot;dormi&quot; bem. (errado: nukuin)">Kuusi kahvia! Siksi Jay nukkui yöllä huonosti. Minä <span class="pala">nukkuin</span> hyvin.</p>
    <p class="s" data-h="jay" data-pt="&quot;Nukuin&quot;, Maia. Eu dormi e você dormiu, mas ele dormiu (&quot;nukkui&quot;).">Nukuin, Maia. Minä nukuin ja sinä nukuit, mutta hän nukkui.</p>
    <p class="s" data-h="kertoja" data-pt="O Anderson chega e olha o celular. Ontem o Jay ensinou para ele uma palavra finlandesa.">Anderson tulee ja katsoo puhelinta. Eilen Jay opetti hänelle suomalaisen sanan.</p>
    <p class="s" data-h="anderson" data-pt="Obrigado!">Kiitos!</p>
    <p class="s" data-h="maia" data-pt="Purjo, a gente volta logo para casa. Aí eu queria bolo!">Purjo, me tulemme pian kotiin. Haluaisin silloin kakkua!</p>
    <p class="s" data-h="jay" data-pt="Mãe, você ouviu? Ela disse &quot;kakkua&quot; (bolo), não &quot;kakkaa&quot; (cocô)!">Äiti, kuulitko? Hän sanoi ”kakkua”, ei ”kakkaa”!</p>
    <p class="s" data-h="purjo" data-pt="Boa menina! Eu faço um bolo de chocolate para você. Jay, você abriu o presente?">Hyvä tyttö! Minä teen sinulle suklaakakun. Jay, avasitko lahjan?</p>
    <p class="s" data-h="jay" data-pt="O presente? Ai, não, esqueci na mala! Vou abrir agora.">Lahjan? Voi ei, unohdin sen matkalaukkuun! Avaan sen nyt.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay abre o pacote de presente. No pacote há meias de lã.">Jay avaa lahjapaketin. Paketissa on villasukat.</p>
    <p class="s" data-h="hiisi" data-puhu="Lämpimät sukat. Siellä on kolmekymmentä astetta." data-pt="Meias quentes. Aí faz trinta graus. (cara de paisagem)">Lämpimät sukat. Siellä on kolmekymmentä astetta. <span class="emoji">😐</span></p>
    <p class="s" data-h="purjo" data-pt="&quot;É para a Finlândia!&quot; Em janeiro faz frio em Helsinque."><span class="pala" lang="en">Is for Finland!</span> Tammikuussa Helsingissä on kylmä.</p>
    <p class="s" data-h="kertoja" data-pt="Todos dizem: &quot;Feliz Natal!&quot;">Kaikki sanovat: ”Hyvää joulua!”</p>
  </div>
  <p>O Jay calça as meias de lã por um minuto, para a foto da Purjo, e tira logo. O Anderson passa o resto do dia dizendo <span class="fi">kiitos</span> para tudo: para o café, para o pão de queijo, para cada vizinho da rota do correio, que agora também aprendeu a palavra. À noite chegam para a ceia duas amigas de escola da Maia: a Maira, do restaurante perto do Mercado Central, e a Marisa, que estudou um ano na Finlândia, mora no Rio e passa o Natal em Belo Horizonte. A Marta pôs sete pratos na mesa.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Kolme päivää sitten me kävimme Mercado Centralissa.</span> = há três dias nós fomos ao Mercado Central · <span class="fi">päivää sitten</span>: Gramática 3, mais adiante nesta parte</li>
      <li><span class="fi">Niissä ei ole reikää.</span> = ela não tem furo · <span class="fi">shortsit</span> é sempre plural, por isso <span class="fi">niissä</span> (neles); depois de <span class="fi">ei ole</span>, o partitivo</li>
      <li><span class="fi">Eilen minä jaoin postia koko aamun.</span> = ontem eu entreguei o correio a manhã inteira · <span class="fi">jaoin</span>: a consoante fraca, Gramática 2; <span class="fi">koko</span> vem antes e não muda</li>
      <li><span class="fi">Minä nukuin ja sinä nukuit, mutta hän nukkui.</span> = eu dormi e você dormiu, mas ele dormiu · Gramática 2</li>
      <li><span class="fi">Haluaisin silloin kakkua!</span> = aí eu queria bolo! · <span class="fi">haluaisin</span>: frase pronta desde a lição 4; <span class="fi">silloin</span> = então, naquela hora</li>
      <li><span class="fi">Hän sanoi ”kakkua”, ei ”kakkaa”!</span> = ela disse “bolo”, não “cocô”! · a piada da lição 4: o u final muda tudo</li>
      <li><span class="fi">Voi ei, unohdin sen matkalaukkuun!</span> = ai, não, esqueci na mala! · <span class="fi">matkalaukkuun</span>: “para dentro da mala”</li>
      <li><span class="fi">lahjapaketti = lahja + paketti</span> = pacote de presente · uma palavra composta: <span class="fi">lahja</span> (presente) + <span class="fi">paketti</span> (pacote), como <span class="fi">joulukuusi</span> no calendário</li>
    </ul>
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

<section class="osio" data-ei-sivulle>
  <h2>Exercício: eu ou ele?</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Eu ou ele? A consoante certa</h3>
    <p class="ohje">Escreva o verbo no passado. Atenção à pessoa e à consoante: fraca em eu, você, nós e vocês; forte em ele e eles. O verbo está entre parênteses.</p>
    <div class="aukot" lang="fi-FI">
      <p>Eilen minä <span class="aukko" data-oikea="nukuin"></span> hyvin. <span data-ei-kuplaa>(nukkua)</span></p>
      <p>Eilen Jay <span class="aukko" data-oikea="nukkui"></span> huonosti. <span data-ei-kuplaa>(nukkua)</span></p>
      <p>Eilen sinä <span class="aukko" data-oikea="otit"></span> kahvia. <span data-ei-kuplaa>(ottaa)</span></p>
      <p>Minä <span class="aukko" data-oikea="jaoin"></span> postia Andersonin kanssa. <span data-ei-kuplaa>(jakaa)</span></p>
      <p>Eilen me <span class="aukko" data-oikea="soitimme"></span> Purjolle. <span data-ei-kuplaa>(soittaa)</span></p>
      <p>Eilen te <span class="aukko" data-oikea="odotitte"></span> Hiittä. <span data-ei-kuplaa>(odottaa)</span></p>
      <p>Eilen naapurit <span class="aukko" data-oikea="antoivat"></span> Jaylle kahvia. <span data-ei-kuplaa>(antaa)</span></p>
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
    <li class="s" data-pt="Ontem o Jay entregou o correio com o Anderson.">Eilen Jay jakoi postia Andersonin kanssa.</li>
    <li class="s" data-pt="Na semana passada nós estávamos em Helsinque.">Viime viikolla <span data-l="olla#2">olimme</span> Helsingissä.</li>
    <li class="s" data-pt="Há três dias o Jay vendeu todos os porquinhos.">Kolme päivää sitten Jay myi kaikki possut.</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o português escolhe entre “comi” e “comia”, “fui” e “ia”. O finlandês não escolhe: <span class="fi">söin</span> é “comi” e também “comia”. <span class="fi">Kun olin lapsi, söin paljon kakkua.</span> = quando eu era criança, eu comia muito bolo. Não procure um segundo passado simples: não existe.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios da parte B</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. Ouça: quando foi?</h3>
    <p class="ohje">Aperte ▶ e escolha quando aconteceu.</p>
    <div class="valinta" data-kuuntele="Kolme päivää sitten Maia ja Jay kävivät Mercado Centralissa." data-oikea="há três dias">
      <p class="kysymys">Quando a Maia e o Jay foram ao Mercado Central?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">ontem</button><button type="button">há três dias</button><button type="button">na semana passada</button></div>
    </div>
    <div class="valinta" data-kuuntele="Eilen Jay jakoi postia Andersonin kanssa." data-oikea="ontem">
      <p class="kysymys">Quando o Jay entregou o correio?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">hoje de manhã</button><button type="button">há três dias</button><button type="button">ontem</button></div>
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
    <h3>8. Leia as mensagens da Purjo e do Hiisi</h3>
    <p class="ohje">Quarta-feira, 23 de dezembro, um dia antes da videochamada. A Purjo leu a mensagem do relógio (parte A) de manhã cedo em Helsinque, quando em Belo Horizonte ainda era madrugada: são cinco horas de diferença. Depois do almoço, a Maia responde. E à tarde o Jay escreve para o irmão. Leia e responda.</p>
    <div class="chat" data-otsikko="Purjo" data-paiva="keskiviikko" data-mina="maia">
      <p data-h="purjo" data-aika="3.12" data-pt="Bom dia, Maia! Obrigada pela mensagem! Eu li três vezes.">Huomenta Maia! Kiitos viestistä! Luin sen kolme kertaa.</p>
      <p data-h="purjo" data-aika="3.13" data-pt="O Jay acordou às dez?! Ai, ai.">Jay heräsi kello kymmenen?! Voi voi.</p>
      <p data-h="purjo" data-aika="3.14" data-pt="(em “inglês de rali”:) Sinto falta de vocês! O que vocês vão fazer hoje?"><span class="pala" lang="en">Ai mis juu ool!</span> Mitä te teette tänään?</p>
      <p data-h="maia" data-aika="13.30" data-pt="Oi, Purjo! Hoje o Jay acordou às sete!">Hei Purjo! Tänään Jay heräsi kello seitsemän!</p>
      <p data-h="purjo" data-aika="13.31" data-pt="Às sete?! Ele está doente?">Kello seitsemän?! Onko hän sairas?</p>
      <p data-h="maia" data-aika="13.33" data-pt="Não. Ele entregou o correio com o Anderson. Eles andaram três horas, e o Jay ensinou finlandês para o Anderson.">Ei ole. Hän jakoi postia Andersonin kanssa. He kävelivät kolme tuntia ja Jay opetti Andersonille suomea.</p>
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
      <p class="kysymys"><span class="fi">Milloin Jay heräsi keskiviikkona?</span></p>
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
      <p class="kysymys"><span class="fi">Mihin Hiisi ajoi tiistaina?</span></p>
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
    <h3>9. Traduza para o finlandês</h3>
    <div class="kaanna"><p class="pt">Ontem eu acordei às sete.</p><p class="s" data-pt="Ontem eu acordei às sete.">Eilen heräsin kello seitsemän.</p></div>
    <div class="kaanna"><p class="pt">Ontem eu entreguei o correio com o Anderson.</p><p class="s" data-pt="Ontem eu entreguei o correio com o Anderson.">Eilen jaoin postia Andersonin kanssa.</p></div>
    <div class="kaanna"><p class="pt">Nós almoçamos ao meio-dia.</p><p class="s" data-pt="Nós almoçamos ao meio-dia.">Söimme lounasta kello kaksitoista.</p></div>
    <div class="kaanna"><p class="pt">Você dormiu bem?</p><p class="s" data-pt="Você dormiu bem?">Nukuitko hyvin?</p></div>
    <div class="kaanna"><p class="pt">Na semana passada a Purjo comprou uma luminária.</p><p class="s" data-pt="Na semana passada a Purjo comprou uma luminária.">Viime viikolla Purjo osti lampun.</p></div>
    <div class="kaanna"><p class="pt">O pai do Jay morava em Helsinque.</p><p class="s" data-pt="O pai do Jay morava em Helsinque.">Jayn isä asui Helsingissä.</p></div>
    <div class="kaanna"><p class="pt">Há três dias nós fomos ao Mercado Central.</p><p class="s" data-pt="Há três dias nós fomos ao Mercado Central.">Kolme päivää sitten kävimme Mercado Centralissa.</p></div>
  </div>
</section>

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
  <p>Mais tarde, o Jay conta para o Hiisi, por mensagem de voz e do jeito da rua, como foi a rota do correio com o Anderson:</p>
  <p class="s" data-h="jay" data-kirja="Me olimme eilen ulkona koko aamun. Me söimme pullaa joka talossa." data-pt="Ontem a gente ficou na rua a manhã inteira. A gente comeu pão doce em cada casa.">Me oltiin eilen ulkona koko aamun. Me syötiin pullaa joka talossa.</p>
  <p class="s" data-h="jay" data-kirja="Me menimme kotiin kello kaksitoista." data-pt="A gente voltou para casa ao meio-dia.">Me mentiin kotiin kello kaksitoista.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Fale você</h2>
  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>10. Responda às perguntas</h3>
    <p class="ohje">Responda sobre você, em voz alta, antes de abrir o modelo. Use o passado.</p>
    <details class="vastaus"><summary lang="fi-FI">Mihin aikaan sinä heräsit tänään? Oletko varma?</summary><p class="s" data-pt="Acordei às sete. Tenho certeza, porque olhei o relógio. (diga a sua hora)">Heräsin kello seitsemän. Olen varma, koska katsoin kelloa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Missä sinä olit viime viikolla?</summary><p class="s" data-pt="Na semana passada eu estava no trabalho.">Viime viikolla olin töissä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kenelle sinä soitit eilen?</summary><p class="s" data-pt="Liguei para a mãe. Ela perguntou: “Como vai?”">Soitin äidille. Hän kysyi: ”Mitä kuuluu?”</p></details>
    <details class="vastaus"><summary lang="fi-FI">Missä sinä asuit, kun olit lapsi?</summary><p class="s" data-pt="Naquela época eu morava em Belo Horizonte. Morei lá dez anos.">Silloin asuin Belo Horizontessa. Asuin siellä kymmenen vuotta.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä teit eilen yksin?</summary><p class="s" data-pt="Li um livro sozinho. Parei às dez e continuei de manhã.">Luin kirjaa yksin. Lopetin kello kymmenen ja jatkoin aamulla.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Lopetitko työt jo?</summary><p class="s" data-pt="Acabei agora mesmo. Amanhã eu continuo.">Lopetin juuri. Huomenna jatkan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä söit aamulla?</summary><p class="s" data-pt="Comi uns dois pães doces. Pedi café para a vizinha.">Söin pari pullaa. Pyysin naapurilta kahvia.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Milloin sinä palasit kotiin?</summary><p class="s" data-pt="Voltei para casa às dez. Percebi que todos estavam dormindo.">Palasin kotiin kello kymmenen. Huomasin, että kaikki nukkuivat.</p></details>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t13">
    <h3>Lição de casa</h3>
    <p>Escreva, como a Maia, uma mensagem sobre o seu dia de ontem, hora por hora: seis frases no passado. Use pelo menos duas pessoas diferentes (<span class="fi">minä</span> e <span class="fi">hän</span> ou <span class="fi">me</span>) e três palavras de tempo (<span class="fi">aamulla, iltapäivällä, illalla, eilen</span>…). Depois leia em voz alta, com o <span class="fi pala">i</span> do passado curto e firme.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia, sobre quarta-feira)</summary>
      <p class="s" data-pt="Ontem eu acordei às seis.">Eilen heräsin kello kuusi.</p>
      <p class="s" data-pt="O Jay e o Anderson entregaram o correio.">Jay ja Anderson jakoivat postia.</p>
      <p class="s" data-pt="Nós almoçamos ao meio-dia.">Me söimme lounasta kello kaksitoista.</p>
      <p class="s" data-pt="À tarde o Jay estava na rua, e eu esperei por ele.">Iltapäivällä Jay oli ulkona ja minä odotin häntä.</p>
      <p class="s" data-pt="À noite eu escrevi para a Purjo.">Illalla kirjoitin Purjolle.</p>
      <p class="s" data-pt="O Jay pegou no sono às dez. Finalmente!">Jay nukahti kello kymmenen. Vihdoin!</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t13">
    <li>Entendo e conto o que a família fez: Walker meni pilatekseen, Anderson jakoi postia.</li>
    <li>Formo o passado de cada tipo: osti, antoi, luki, söi, oli, halusi, tarvitsi.</li>
    <li>Uso a consoante fraca em todas as pessoas menos a terceira: minä nukuin, sinä otit, me luimme (mas hän nukkui, he nukkuivat).</li>
    <li>Digo quando: eilen, aamulla, illalla, viime viikolla, kolme päivää sitten.</li>
    <li>Ouço a diferença entre presente e passado: puhuu × puhui, tulee × tuli.</li>
    <li>Conheço as palavras do Natal finlandês: joulupukki, joulukuusi, lahja, kinkku.</li>
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
      id: 'heikko13', otsikko: 'Todos menos ele e eles: a consoante fraca (nukuin, otin)', taso: 'atenção', hakuosa: 'h-imperfekti', treeni: 't13-imperfekti',
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
<p>Com <span class="fi">sitten</span>, o tempo vai no partitivo quando vem depois de um número de dois para cima: <span class="fi">kaksi päivää sitten</span>; sem número, fica na forma básica: <span class="fi">viikko sitten</span> (há uma semana). As palavras se combinam: <span class="fi">eilen illalla</span> = ontem à noite.</p>
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
</ul>`
    },
    {
      id: 'sudenkuopat13', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>Um passado só:</b> <span class="fi">söin</span> = comi e comia. Não procure a diferença do português.</li>
  <li><b>Consoante fraca em todas as pessoas, menos a terceira:</b> <span class="fi">nukuin, otit, nukuimme</span>, nunca <span class="pala">nukkuin</span>; a forte fica com <span class="fi">hän nukkui</span>.</li>
  <li><b><span class="fi">elää</span> não é “morar”:</b> <span class="fi">elää</span> = estar vivo, viver a vida; morar em um lugar = <span class="fi">asua</span>: <span class="fi">Jayn isä asui Helsingissä.</span></li>
  <li><b>O fim decide:</b> <span class="fi">tulee</span> (vem) × <span class="fi"><span data-l="tulla:imperf.3s">tuli</span></span> (veio). Não estique o <span class="fi pala">i</span> do passado.</li>
  <li><b>a → oi ou a cai:</b> <span class="fi">antaa → antoi</span>, mas <span class="fi">ostaa → osti</span>. Na dúvida, a bolha mostra.</li>
  <li><b><span class="fi">viime</span> não muda:</b> <span class="fi">viime viikolla, viime vuonna</span>.</li>
</ul>`
    }
  ]
});
