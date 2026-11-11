/* Tottakai, lição 15: lauantai 26.12.2026, Jay katosi katujuhlista; aamun etsintä ja iltapäivän pelastus Marcuksen
   kellarista Morro do Cascalholla (keksitty mäki). Passon jakso 15 Maian näkökulmasta. Oma materiaali, ei kirjan tekstiä.
   Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5d ja docs/RUNKO_13_20.md §3 (uusi tarina, omistaja 31.10.2026; omistajan
   uudet kohtaukset 7.11.2026: cativeiro, ei radioita). Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A ”Parte A · Encontro” (#t15): kello 9 Maian vanhempien keittiössä. Lukittu dialogi A
     (ass/luonnokset/t15-a-1_lopullinen.md, omistaja 7.11.2026): kielteinen imperfekti (ei tullut, ei vastannut, en
     nukkunut, naapurit eivät nähneet), Marisan hoono soomi (data-hairio, oikea muoto seuraavassa repliikissä), Martan
     cativeiro-soitot portugaliksi, Andersonin tunnistus (Marcus, Cativeiro Mensal), etsintäkäskyt sinä/te. Frases prontas,
     tehtävä 1, kikka A: .vastaaja ”O celular do Jay ficou na mesa” (siirretty ja muunnettu t16:sta; Purjon viestit
     kielteisessä imperfektissä, Hiiden yksi viesti, ei 😐: ääniviestiin ei emojia), sanasto, tehtävä 2, ääntäminen (j on i:
     ja, jo, juokse, juoskaa), tehtävä 3 (etsintäkäskyt: sinä vai te), Gramática 1 (en + partisiippi; Eikö…?, lyhyet
     vastaukset, juosta → juossut, S3:234/237/245), tehtävät 4–5.
   - osa B ”Parte B · Aprofundar e fechar” (#t15-b): iltapäivä mäellä. Lukittu dialogi B (ass/luonnokset/t15-b-1_lopullinen.md)
     .salakieli-kehyksessä (muunnettu t18:n radiokomponentista .salakieli sk-radio: ei radiota, kuiskaukset kellarin
     ikkunalla, Marcus = korva, joka ei ymmärrä; RUNKO §11.1). Konditionaali (Voisitko olla hiljaa? Haluaisin kotiin.
     Olisi mukava syödä.), Maian ”djuokset” (data-hairio) ja Jayn korjaus, Marcuksen neljä puhelinriviä sanasta sanaan.
     Frases prontas, Gramática 2, tehtävät 6 (kirjoitettu konditionaalisarja, REVIEW:52) ja 7 (Hiiden chat lauantaina
     keskipäivällä, siirretty t17:stä: ei -ni, ei salaisuutta Purjolta, omistaja Q5 b), kulttuuri (Belo Horizonten
     kaupunginosat ja postinjakaja + suunniteltu keskusta t14:stä; kuva bh-bairro, ei oikean favelan kuvaa), tehtävät 8–9
     (#49: en tiennyt), Na rua (mä en syöny, ois kiva), kotitehtävä, itsearvio.
   Lukittujen tekstien pakolliset pienet korjaukset: pilkku pois ja-sanan edestä päälauseiden välissä (talon säännöt,
   omistaja 30.10.2026), raportoitu koordinaattorille. Siirrot (RUNKO §11): Martan tehtävälista (.tehtavalista) siirtyi
   oppitunnin 16 osaan A; vanhan B:n videopuhelu ja joulukalenteri siirtyivät oppitunnille 13 (31.10.2026). Suomea puhuvat
   Maia, Jay, Marisa (hoono soomi) ja Anderson Jaylta oppimillaan sanoilla; Marta, Anderson, Cida ja Marcus muuten
   portugaliksi. Kirjakieli kaikkialla; puhekieli vain Na rua -nurkassa. Ei kun-sanaa (t16), ei omistusliitteitä (t17),
   ei perfektiä (t19). */
Kurssi.lisaa({
  id: 't15',
  lyhyt: '15',
  jakso: 'Lição 15',
  otsikko: 'O resgate: o passado negativo e “eu gostaria”',
  lahde: 'Tema: o Jay sumiu depois da festa; a busca e o resgate no Morro do Cascalho (inventado) · Gramática: passado negativo (ei tullut, en nukkunut, emme tienneet), o particípio (-nut/-nyt, -neet), o condicional educado (haluaisin, voisitko, olisi mukava), ordens para você e para vocês (revisão) · Pronúncia: o j finlandês é i (ja, jo, juokse)',
  aiheet: ['koti', 'kaupunki', 'tunteet', 'viestinta'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; não dormiu e organiza a busca' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; amarrado numa cadeira, com ressaca, e ainda corrige a pronúncia da Maia' },
    malu: { nimi: 'Marisa', tyyppi: 'nainen', vaihto: 5, kuvaus: 'amiga da Maia; estudou na Finlândia e fala um finlandês quebrado que funciona; tem carro' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; conhece cada casa e cada cachorro da sua rota do correio' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 5, kuvaus: 'mãe da Maia; liga para a rua inteira (fala português)' },
    cida: { nimi: 'Dona Cida', tyyppi: 'nainen', vaihto: 5, kuvaus: 'vizinha do Marcus; dá comida aos cachorros dele e tem a chave da porta dos fundos (fala português)' },
    marcus: { nimi: 'Marcus', tyyppi: 'mies', vaihto: 7, kuvaus: 'morador do Morro do Cascalho (inventado), torcedor fanático do Atlético; fala só português' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; em Helsinque, por mensagem e no correio de voz' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; liga a noite inteira de Helsinque' }
  },

  sanasto: [
    'vastata', 'täynnä', 'tukka', 'tyhmä', 'hakea',
    'moottori', 'käynnissä', 'koira', 'usein', 'poissa', 'hiljaa', 'kiinni',
    'krapula', 'kamala', 'toivoa', 'edes', 'suunnitelma', 'mikroaaltouuni', 'rengas', 'avain',
    'kyytiin', 'nostaa', 'sankari', 'tahtoa'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Encontro',
      html: `
<ul class="tavoitteet">
  <li>Você dá as ordens da busca, para uma pessoa e para várias: <span class="fi">Marisa, hae auto!</span> <span class="fi">Anderson ja Marisa, tulkaa mukaan!</span></li>
  <li>Você entende mensagens de voz sobre o que não aconteceu: <span class="fi">Sinä et soittanut. Minä en nukkunut.</span></li>
  <li>Você diz o <span class="fi pala">j</span> finlandês como <span class="pala">i</span>: <span class="fi">ja, jo, juokse</span>.</li>
  <li>Você diz o que não aconteceu: <span class="fi">Jay ei tullut kotiin. En nukkunut. Naapurit eivät nähneet Jaytä.</span> E forma o particípio: <span class="fi">tullut, vastannut, nähnyt</span>, no plural <span class="fi">nähneet</span>.</li>
  <li>Parte B: o resgate e o que você gostaria (<span class="fi">haluaisin, voisitko, olisi mukava</span>).</li>
</ul>
<p data-paikka="bh-bairro">Sábado, 26 de dezembro, nove da manhã. A festa de rua acabou com o sol nascendo, e o Jay não voltou para casa. O celular dele ficou a noite inteira na mesa da festa, entre as garrafas. A Maia não dormiu. A Marisa dormiu no sofá da Marta, com o travesseiro na cabeça. A Marta já está ao telefone com a rua inteira. Na cozinha, a Maia e a Marisa falam finlandês: a Marisa estudou na Finlândia, e o finlandês dela é quebrado, mas funciona.</p>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Diálogo A: <span class="fi">Jay ei tullut kotiin</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Quase tudo é o que <b>não</b> aconteceu de noite: <span class="fi">ei tullut, ei vastannut, en nukkunut</span>. A Marisa diz <span class="fi">ei</span> + o verbo do dicionário para todo mundo; logo depois, a Maia usa a forma certa. A Marta liga para os vizinhos em português. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t15-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="É sábado. São nove horas da manhã. A Maia, a Marisa e o Anderson estão na cozinha. O Jay não voltou para casa de noite.">On lauantai. Kello on yhdeksän aamulla. Maia, Marisa ja Anderson <span data-l="olla#2">ovat</span> keittiössä. Jay ei tullut kotiin yöllä.</p>
    <p class="s" data-h="malu" data-hairio="Jay tulla → Tuliko Jay" data-pt="Maia, Jay voltar para casa de noite? (errado de propósito: Tuliko Jay kotiin yöllä?)">Maia, Jay tulla kotiin yöllä?</p>
    <p class="s" data-h="maia" data-pt="Não voltou. Ele não atendeu o telefone, porque o celular ficou a noite toda na mesa da rua. Agora o celular está cheio de mensagens da Purjo.">Ei tullut. Hän ei vastannut puhelimeen, koska se <span data-l="olla#2">oli</span> yöllä pöydällä kadulla. Nyt puhelin on täynnä Purjon viestejä.</p>
    <p class="s" data-h="malu" data-hairio="ei nukkua → ei nukkunut; minä nukkua → minä nukuin; minä ei kuulla → minä en kuullut" data-pt="A Purjo não dormir! Eu dormir no sofá. Eu não ouvir nada. (errado de propósito: Purjo ei nukkunut! Minä nukuin sohvalla. Minä en kuullut mitään.)">Purjo ei nukkua! Minä nukkua sohvalla. Minä ei kuulla mitään.</p>
    <p class="s" data-h="maia" data-pt="Eu não dormi. Não tive notícia nenhuma do Jay. Você não ouviu nada porque dormiu com o travesseiro na cabeça.">Minä en nukkunut. En kuullut Jaystä mitään. Sinä et kuullut mitään, koska nukuit tyyny pään päällä.</p>
    <p class="s" data-h="malu" data-hairio="Kukaan nähdä Jay → Näkikö kukaan Jayn" data-pt="Alguém ver o Jay? (errado de propósito: Näkikö kukaan Jayn?)">Kukaan nähdä Jay?</p>
    <p class="s" data-h="maia" data-pt="Não sei se alguém viu o Jay. A mãe está perguntando por telefone.">En tiedä, näkikö kukaan Jaytä. Äiti kysyy puhelimessa.</p>
    <p class="s" data-h="kertoja" data-pt="A Marta liga para a rua inteira.">Marta soittaa koko kadulle.</p>
    <p class="s" data-h="marta" data-pt="Alô? Vocês viram o Jay? Quer dizer… um gringo, alto, finlandês… Não sei, gente, provavelmente sequestrado, como sempre. Quem aqui tem cativeiro?"><span lang="pt-BR">Alô? Vocês viram o Jay? Quer dizer… um gringo, alto, finlandês… Não sei, gente, provavelmente sequestrado, como sempre. Quem aqui tem cativeiro?</span></p>
    <p class="s" data-h="marta" data-pt="Sérgio? Você tem cativeiro aí? … Ah, é só um buraco fundo no quintal. Tá, mas tem alguém no buraco? … Não? Tá bom, obrigada."><span lang="pt-BR">Sérgio? Você tem cativeiro aí? … Ah, é só um buraco fundo no quintal. Tá, mas tem alguém no buraco? … Não? Tá bom, obrigada.</span></p>
    <p class="s" data-h="marta" data-pt="Dona Zuzu? … Não, Zuzu, gaiola de passarinho não conta!"><span lang="pt-BR">Dona Zuzu? … Não, Zuzu, gaiola de passarinho não conta!</span></p>
    <p class="s" data-h="marta" data-pt="Maurício? … Ah, vocês não fazem cativeiro. Lá é serviço rápido. … Não, não, então não foi vocês. O gringo ainda tá vivo, eu acho."><span lang="pt-BR">Maurício? … Ah, vocês não fazem cativeiro. Lá é serviço rápido. … Não, não, então não foi vocês. O gringo ainda tá vivo, eu acho.</span></p>
    <p class="s" data-h="maia" data-pt="Os vizinhos não viram o Jay. Mas o Uuno disse que viu o Jay. De noite o Jay estava na esquina com um homem baixinho.">Naapurit eivät nähneet Jaytä. Mutta Uuno sanoi, että hän näki Jayn. Yöllä Jay <span data-l="olla#2">oli</span> kadun kulmassa pienen miehen kanssa.</p>
    <p class="s" data-h="malu" data-hairio="Minä ei nähdä mies → Minä en nähnyt miestä" data-pt="Homem baixinho? Que homem? Eu não ver homem. (errado de propósito: Minä en nähnyt miestä.)">Pieni mies? Mikä mies? Minä ei nähdä mies.</p>
    <p class="s" data-h="maia" data-pt="Você não viu ele. O Uuno disse: o homem estava com uma camisa do Atlético, óculos ridículos e um cabelo ridículo.">Sinä et nähnyt häntä. Uuno sanoi: miehellä oli Atlético-paita, tyhmät <span data-l="lasi#3">lasit</span> ja tyhmä tukka.</p>
    <p class="s" data-h="kertoja" data-pt="O Anderson está ouvindo. Ele entende a palavra Atlético.">Anderson kuuntelee. Hän ymmärtää sanan Atlético.</p>
    <p class="s" data-h="anderson" data-pt="Atlético? Baixinho? É o Marcus! Ele mora lá em cima no Morro do Cascalho, na casa do portão preto e branco. Toda segunda eu levo as cartas dele. Ele é assinante da revista Cativeiro Mensal. Todo mês!"><span lang="pt-BR">Atlético? Baixinho? É o Marcus! Ele mora lá em cima no Morro do Cascalho, na casa do portão preto e branco. Toda segunda eu levo as cartas dele. Ele é assinante da revista Cativeiro Mensal. Todo mês!</span></p>
    <p class="s" data-h="maia" data-pt="Então o homem é o Marcus. Ele mora no Morro do Cascalho, na última casa do morro. O portão da casa é preto e branco. O Anderson leva o correio lá toda segunda-feira.">Siis mies on Marcus. Hän asuu Morro do Cascalholla, mäen viimeisessä talossa. Talon portti on musta ja valkoinen. Anderson vie sinne postia joka maanantai.</p>
    <p class="s" data-h="maia" data-pt="O Marcus tem um cativeiro. O Jay com certeza está no porão do Marcus.">Marcuksella on <span lang="pt-BR">cativeiro</span>. Jay <span data-l="olla#2">on</span> varmasti Marcuksen kellarissa.</p>
    <p class="s" data-h="anderson" data-pt="Isso! Eu sei o caminho."><span lang="pt-BR">Isso! Eu sei o caminho.</span></p>
    <p class="s" data-h="malu" data-hairio="Anderson tuntea → Anderson tuntee" data-pt="O Anderson conhecer todas as casas! (errado de propósito: Anderson tuntee kaikki talot!)">Anderson tuntea kaikki talot!</p>
    <p class="s" data-h="maia" data-pt="Sim, ele conhece. Anderson e Marisa, venham comigo! Marisa, pega o carro, porque o caminho é longo.">Kyllä, hän tuntee ne. Anderson ja Marisa, tulkaa mukaan! Marisa, hae auto, koska matka on pitkä.</p>
    <p class="s" data-h="malu" data-hairio="Minä olla valmis → Minä olen valmis; Minä hakea auto → Minä haen auton" data-pt="Eu estar pronta! Eu pegar o carro agora. (errado de propósito: Minä olen valmis! Minä haen auton heti.)">Minä olla valmis! Minä hakea auto heti.</p>
    <p class="s" data-h="maia" data-pt="Ótimo, você está pronta! A gente não pode ligar para o Jay, porque ele não levou o celular.">Hyvä, sinä olet valmis! Me emme voi soittaa Jaylle, koska hän ei ottanut puhelinta.</p>
    <p class="s" data-h="kertoja" data-pt="A Marisa sai correndo e pega o carro. A Maia e o Anderson vão junto.">Marisa juoksee ulos ja hakee auton. Maia ja Anderson tulevat mukaan.</p>
    <p class="s" data-h="maia" data-pt="De noite a gente não sabia onde o Jay estava. Agora a gente sabe.">Yöllä me emme tienneet, missä Jay <span data-l="olla#2">oli</span>. Nyt me tiedämme.</p>
  </div>
  <p>O Anderson pega o boné do Rei Leão e um pacote de biscoitos de cachorro (“para os amigos da rota”). <span lang="pt-BR">Cativeiro</span> é o lugar onde um sequestrador prende alguém: todo mundo conhece a palavra do jornal da TV, e a Marta faz piada até com isso.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Jay ei tullut kotiin. Ei tullut.</span> = o Jay não voltou para casa. Não voltou. · o passado negativo: Gramática 1, mais adiante nesta parte; a resposta curta repete o verbo</li>
      <li><span class="fi">Hän ei vastannut puhelimeen.</span> = ele não atendeu o telefone · <span class="fi">vastata puhelimeen</span> = atender o telefone</li>
      <li><span class="fi">Puhelin on täynnä Purjon viestejä.</span> = o celular está cheio de mensagens da Purjo · <span class="fi">täynnä</span> + partitivo plural (lição 11)</li>
      <li><span class="fi">En tiedä, näkikö kukaan Jaytä.</span> = não sei se alguém viu o Jay · o <span class="fi pala">-ko/-kö</span> no verbo também quer dizer “se”</li>
      <li><span class="fi">miehellä oli tyhmät lasit ja tyhmä tukka</span> = o homem estava com óculos ridículos e um cabelo ridículo · <span class="fi">lasit</span> (óculos) é sempre plural, como em português</li>
      <li><span class="fi">Anderson ja Marisa, tulkaa mukaan! Marisa, hae auto!</span> = Anderson e Marisa, venham comigo! Marisa, pega o carro! · para duas pessoas <span class="fi pala">-kaa</span> (lição 14), para uma sem terminação (lição 9)</li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Exercício: o diálogo A</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Você entendeu o diálogo A?</h3>
    <p class="ohje">Responda com a forma curta, como no diálogo: <span class="fi">Ei tullut.</span></p>
    <div class="valinta" data-oikea="Ei tullut.">
      <p class="kysymys"><span class="fi">Tuliko Jay kotiin yöllä?</span></p>
      <div class="vaihtoehdot"><button type="button">Tuli.</button><button type="button">Ei tullut.</button><button type="button">Ei tule.</button></div>
    </div>
    <div class="valinta" data-oikea="Pöydällä kadulla.">
      <p class="kysymys"><span class="fi">Missä Jayn puhelin oli yöllä?</span></p>
      <div class="vaihtoehdot"><button type="button">Marisan autossa.</button><button type="button">Pöydällä kadulla.</button><button type="button">Kotona sohvalla.</button></div>
    </div>
    <div class="valinta" data-oikea="Marisa.">
      <p class="kysymys"><span class="fi">Kuka nukkui sohvalla?</span></p>
      <div class="vaihtoehdot"><button type="button">Maia.</button><button type="button">Anderson.</button><button type="button">Marisa.</button></div>
    </div>
    <div class="valinta" data-oikea="Eivät nähneet.">
      <p class="kysymys"><span class="fi">Näkivätkö naapurit Jayn?</span></p>
      <div class="vaihtoehdot"><button type="button">Näkivät.</button><button type="button">Eivät nähneet.</button><button type="button">Eivät näe.</button></div>
    </div>
    <div class="valinta" data-oikea="Marisa.">
      <p class="kysymys"><span class="fi">Kuka hakee auton?</span></p>
      <div class="vaihtoehdot"><button type="button">Maia.</button><button type="button">Marisa.</button><button type="button">Anderson.</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>O celular do Jay ficou na mesa</h2>
  <p>Antes de sair, a Maia olha o celular do Jay. A tela mostra quatro mensagens de voz (<span class="fi">ääniviesti</span>) da noite: três da Purjo e uma do Hiisi, de Helsinque. Lá são cinco horas a mais: quando aqui era quase meia-noite, lá já era manhã.</p>
  <p class="ohje">Toque em ▶ para ouvir cada mensagem. Ouça primeiro sem o texto: quem ligou, a que horas e o que <b>não</b> aconteceu? Depois abra o <b>Texto</b>. Repare em <span class="fi">en, et, ei</span> + uma palavra em <span class="fi pala">-nut/-nyt</span>: é o passado negativo; a regra vem na Gramática 1.</p>
  <div class="vastaaja" data-h="purjo" data-otsikko="Caixa postal · Jay" data-kello="09.30">
    <p data-h="purjo" data-aika="23.50" data-puhu="Hei Jay, äiti täällä. Täällä kello on melkein viisi aamulla. Minä en nukkunut. Sinä et soittanut illalla. Soita minulle!" data-pt="Oi, Jay, é a mãe. Aqui são quase cinco da manhã. Eu não dormi. Você não ligou à noite. Me liga!">Hei Jay, äiti täällä. Täällä kello on melkein viisi aamulla. Minä en nukkunut. Sinä et soittanut illalla. Soita minulle!</p>
    <p data-h="purjo" data-aika="02.10" data-puhu="Jay, minä taas. Sinä et vastannut. Hiisi ei vastannut. Kukaan ei vastannut! Minä en syönyt aamulla mitään." data-pt="Jay, sou eu de novo. Você não atendeu. O Hiisi não atendeu. Ninguém atendeu! Eu não comi nada de manhã.">Jay, minä taas. Sinä et vastannut. Hiisi ei vastannut. Kukaan ei vastannut! Minä en syönyt aamulla mitään.</p>
    <p data-h="hiisi" data-aika="04.30" data-puhu="Moi. Hiisi. Äiti soitti minulle kuusi kertaa. Minä en vastannut. Ajoin kauppaan. En saanut sakkoa. Vielä." data-pt="Oi. Hiisi. A mãe me ligou seis vezes. Eu não atendi. Fui de carro até a loja. Não levei multa. Ainda.">Moi. Hiisi. Äiti soitti minulle kuusi kertaa. Minä en vastannut. Ajoin kauppaan. En saanut sakkoa. Vielä.</p>
    <p data-h="purjo" data-aika="05.30" data-puhu="Jay! Missä sinä olet? Sinä et soittanut, et vastannut, et kirjoittanut! Minä en nukkunut. Soita heti!" data-pt="Jay! Onde você está? Você não ligou, não atendeu, não escreveu! Eu não dormi. Liga já!">Jay! Missä sinä <span data-l="olla#2">olet</span>? Sinä et soittanut, et vastannut, et kirjoittanut! Minä en nukkunut. Soita heti!</p>
  </div>
  <p>A Maia não responde agora: primeiro, achar o Jay. Repare nas formas: <span class="fi">en nukkunut</span> (eu não dormi), <span class="fi">et soittanut</span> (você não ligou), <span class="fi">ei vastannut</span> (ele não atendeu). A pessoa está em <span class="fi">en, et, ei</span>; a palavra em <span class="fi pala">-nut</span> é a mesma para as três.</p>
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="A busca" data-sanat="puhelin,viesti,täynnä,tyyny,naapuri,tukka,tyhmä,mäki,portti,kellari,posti,hakea"></div>
  <p>As outras palavras da lição estão no <a href="#t15-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Exercício: as palavras</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>2. Ligue a palavra à tradução</h3>
    <ul class="yhdista">
      <li data-pari="porão">kellari</li>
      <li data-pari="portão">portti</li>
      <li data-pari="travesseiro">tyyny</li>
      <li data-pari="cheio">täynnä</li>
      <li data-pari="cabelo">tukka</li>
      <li data-pari="morro">mäki</li>
      <li data-pari="mensagem">viesti</li>
      <li data-pari="pronto">valmis</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Pronúncia: o j finlandês é i</h2>
  <p>Em português, o <span class="fi pala">j</span> de “janela” é um som chiado. Em finlandês, <span class="fi pala">j</span> é o som de <span class="pala">i</span> curto colado na vogal seguinte, como em “iate” ou em “maio”: <span class="fi">ja</span> soa <span class="pala">iá</span>, <span class="fi">jo</span> soa <span class="pala">iô</span>. Na festa, o Anderson aprendeu <span class="fi">Juoskaa!</span> e disse certinho, <span class="pala">IUOS-kaa</span>. A Maia, que fala finlandês há anos, às vezes ainda diz o j de “janela” quando está nervosa. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="e">ja</li>
    <li class="s" data-pt="já">jo</li>
    <li class="s" data-pt="corra!">Juokse!</li>
    <li class="s" data-pt="corram!">Juoskaa!</li>
    <li class="s" data-pt="Natal">joulu</li>
    <li class="s" data-pt="a mãe do Jay">Purjo</li>
  </ul>
  <div class="saanto">
    <h3>Truque: troque o j por i</h3>
    <p>Leia <span class="fi">ja</span> como <span class="pala">ia</span> numa sílaba só, bem rápido: é isso. Em <span class="fi">juokse</span>, o <span class="fi pala">j</span> é <span class="pala">i</span> e o <span class="fi pala">uo</span> são duas vogais: <span class="pala">IUOK-se</span>, nunca <span class="pala">djuok-se</span>. O nome <span class="fi">Jay</span> é a exceção: é inglês, e o j dele soa “dj”.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Exercício: as ordens da busca</h2>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Ouça: a ordem é para uma pessoa ou para várias?</h3>
    <p class="ohje">Aperte ▶ e ouça a ordem da Maia. Para uma pessoa (<span class="fi">sinä</span>), a ordem não tem terminação; para duas ou mais (<span class="fi">te</span>), termina em <span class="fi pala">-kaa/-kää</span> ou começa com <span class="fi">älkää</span>. Revisão das lições 9 e 14.</p>
    <div class="valinta" data-kuuntele="Hae auto!" data-oikea="sinä">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot"><button type="button">sinä</button><button type="button">te</button></div>
    </div>
    <div class="valinta" data-kuuntele="Tulkaa mukaan!" data-oikea="te">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot"><button type="button">sinä</button><button type="button">te</button></div>
    </div>
    <div class="valinta" data-kuuntele="Soita Uunolle!" data-oikea="sinä">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot"><button type="button">sinä</button><button type="button">te</button></div>
    </div>
    <div class="valinta" data-kuuntele="Etsikää Jaytä!" data-oikea="te">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot"><button type="button">sinä</button><button type="button">te</button></div>
    </div>
    <div class="valinta" data-kuuntele="Älkää odottako!" data-oikea="te">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot"><button type="button">sinä</button><button type="button">te</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="belo-horizonte-panoraama">
  <h2>Gramática 1 · Não voltou: o passado negativo</h2>
  <p>Na lição 13 você aprendeu o passado afirmativo: <span class="fi">tuli</span> (veio, voltou). Para negar, o finlandês não usa <span class="fi">tuli</span>. Ele usa o verbo de negação, o mesmo do presente (<span class="fi">en, et, ei, emme, ette, eivät</span>), e uma forma nova, o <b>particípio</b>: <span class="fi">ei tullut</span> (não veio).</p>
  <table class="taivutus">
    <tr><th>pessoa</th><th>presente negativo</th><th>passado negativo</th><th>português</th></tr>
    <tr><td><span class="fi">minä</span></td><td><span class="fi">en tule</span></td><td><span class="fi">en tullut</span></td><td>eu não venho · não vim</td></tr>
    <tr><td><span class="fi">sinä</span></td><td><span class="fi">et tule</span></td><td><span class="fi">et tullut</span></td><td>você não vem · não veio</td></tr>
    <tr><td><span class="fi">hän</span></td><td><span class="fi">ei tule</span></td><td><span class="fi">ei tullut</span></td><td>ele, ela não vem · não veio</td></tr>
    <tr><td><span class="fi">me</span></td><td><span class="fi">emme tule</span></td><td><span class="fi">emme tulleet</span></td><td>nós não vimos · não viemos</td></tr>
    <tr><td><span class="fi">te</span></td><td><span class="fi">ette tule</span></td><td><span class="fi">ette tulleet</span></td><td>vocês não vêm · não vieram</td></tr>
    <tr><td><span class="fi">he</span></td><td><span class="fi">eivät tule</span></td><td><span class="fi">eivät tulleet</span></td><td>eles, elas não vêm · não vieram</td></tr>
  </table>
  <p>O particípio não muda com a pessoa, só com o número: <span class="fi pala">-nut/-nyt</span> no singular (eu, você, ele), <span class="fi pala">-neet</span> no plural (nós, vocês, eles). A pessoa já está no verbo de negação. O particípio vem do infinitivo:</p>
  <table class="taivutus">
    <tr><th>tipo</th><th>infinitivo</th><th>singular</th><th>plural</th></tr>
    <tr><td>1: tire o <span class="fi pala">-a/-ä</span></td><td><span class="fi">nukkua, ottaa, tuntea</span><span class="kaannos" lang="pt-BR">dormir, pegar, conhecer</span></td><td><span class="fi">nukkunut, ottanut, tuntenut</span></td><td><span class="fi">nukkuneet, ottaneet, tunteneet</span></td></tr>
    <tr><td>2: tire o <span class="fi pala">-da/-dä</span></td><td><span class="fi">syödä, juoda, saada</span><span class="kaannos" lang="pt-BR">comer, beber, receber</span></td><td><span class="fi">syönyt, juonut, saanut</span></td><td><span class="fi">syöneet, juoneet, saaneet</span></td></tr>
    <tr><td>2: <span class="fi pala">-hdä</span></td><td><span class="fi">tehdä, nähdä</span><span class="kaannos" lang="pt-BR">fazer, ver</span></td><td><span class="fi">tehnyt, nähnyt</span></td><td><span class="fi">tehneet, nähneet</span></td></tr>
    <tr><td>3: a consoante dobra</td><td><span class="fi">tulla, kuulla, mennä</span><span class="kaannos" lang="pt-BR">vir, ouvir, ir</span></td><td><span class="fi">tullut, kuullut, mennyt</span></td><td><span class="fi">tulleet, kuulleet, menneet</span></td></tr>
    <tr><td>3: <span class="fi pala">-sta</span> vira <span class="fi pala">-ssut</span></td><td><span class="fi">juosta</span><span class="kaannos" lang="pt-BR">correr</span></td><td><span class="fi">juossut</span></td><td><span class="fi">juosseet</span></td></tr>
    <tr><td>4 e 5: <span class="fi pala">-nnut/-nnyt</span></td><td><span class="fi">vastata, haluta, tarvita</span><span class="kaannos" lang="pt-BR">responder, querer, precisar</span></td><td><span class="fi">vastannut, halunnut, tarvinnut</span></td><td><span class="fi">vastanneet, halunneet, tarvinneet</span></td></tr>
  </table>
  <p>A vogal decide entre <span class="fi pala">-nut</span> e <span class="fi pala">-nyt</span> (harmonia vocálica, lição 1): <span class="fi">nukkunut</span>, mas <span class="fi">nähnyt</span>. E a consoante é <b>a mesma do infinitivo</b>: <span class="fi">nukkua → en nukkunut</span>, nunca <span class="pala">nukunut</span>; <span class="fi">tietää → emme tienneet</span>.</p>
  <p><b>Respostas curtas e perguntas negativas.</b> À pergunta com <span class="fi pala">-ko/-kö</span>, responda com o verbo: <span class="fi">Tuliko Jay kotiin? – Ei tullut.</span> A pergunta negativa (“ninguém…?”) põe o <span class="fi pala">-kö</span> no verbo de negação: <span class="fi">Eikö kukaan nähnyt Jaytä?</span> E com o passado negativo vêm <span class="fi">kukaan</span> (ninguém) e <span class="fi">mitään</span> (nada): <span class="fi">En kuullut mitään.</span></p>
  <ul class="esim">
    <li class="s" data-pt="O Jay não voltou para casa de noite.">Jay ei tullut kotiin yöllä.</li>
    <li class="s" data-pt="Nós não sabíamos onde o Jay estava.">Emme tienneet, missä Jay <span data-l="olla#2">oli</span>.</li>
    <li class="s" data-pt="Ninguém viu o Jay? – Não viu.">Eikö kukaan nähnyt Jaytä? – Ei nähnyt.</li>
    <li class="s" data-pt="Os vizinhos não ouviram nada.">Naapurit eivät kuulleet mitään.</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Exercícios: o passado negativo</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Ouça: presente ou passado, eu ou nós?</h3>
    <p class="ohje">Aperte ▶ e escolha a frase que você ouviu. Ouça o fim do verbo: <span class="fi pala">-nut/-nyt</span>, <span class="fi pala">-neet</span> ou nada.</p>
    <div class="valinta" data-kuuntele="Emme nähneet Jaytä." data-oikea="Emme nähneet Jaytä.">
      <p class="kysymys">Qual frase?</p>
      <div class="vaihtoehdot"><button type="button">En nähnyt Jaytä.</button><button type="button">Emme nähneet Jaytä.</button><button type="button">Emme näe Jaytä.</button></div>
    </div>
    <div class="valinta" data-kuuntele="En nukkunut." data-oikea="En nukkunut.">
      <p class="kysymys">Qual frase?</p>
      <div class="vaihtoehdot"><button type="button">En nuku.</button><button type="button">Emme nukkuneet.</button><button type="button">En nukkunut.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hän ei vastaa." data-oikea="Hän ei vastaa.">
      <p class="kysymys">Qual frase?</p>
      <div class="vaihtoehdot"><button type="button">Hän ei vastaa.</button><button type="button">Hän ei vastannut.</button><button type="button">He eivät vastanneet.</button></div>
    </div>
    <div class="valinta" data-kuuntele="He eivät tulleet." data-oikea="He eivät tulleet.">
      <p class="kysymys">Qual frase?</p>
      <div class="vaihtoehdot"><button type="button">He eivät tule.</button><button type="button">He eivät tulleet.</button><button type="button">Hän ei tullut.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Um fez, o outro não: complete com o particípio</h3>
    <p class="ohje">A primeira frase está no passado afirmativo. Complete a segunda com o particípio do verbo entre parênteses: <span class="fi pala">-nut/-nyt</span> depois de <span class="fi">en, et, ei</span>, <span class="fi pala">-neet</span> depois de <span class="fi">emme, ette, eivät</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Marisa nukkui sohvalla. Maia ei <span class="aukko" data-oikea="nukkunut"></span>. <span data-ei-kuplaa>(nukkua)</span></p>
      <p>Purjo soitti viisi kertaa. Jay ei <span class="aukko" data-oikea="vastannut"></span>. <span data-ei-kuplaa>(vastata)</span></p>
      <p>Uuno näki Jayn. Naapurit eivät <span class="aukko" data-oikea="nähneet"></span> häntä. <span data-ei-kuplaa>(nähdä)</span></p>
      <p>Jay meni kadun kulmaan. Maia ei <span class="aukko" data-oikea="mennyt"></span> sinne. <span data-ei-kuplaa>(mennä)</span></p>
      <p>Lapset juoksivat kadulle. Uuno ei <span class="aukko" data-oikea="juossut"></span>. <span data-ei-kuplaa>(juosta)</span></p>
      <p>Marisa haki auton. Me emme <span class="aukko" data-oikea="tienneet"></span>, missä auto <span data-l="olla#2">oli</span>. <span data-ei-kuplaa>(tietää)</span></p>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Aprofundar e fechar',
      html: `
<ul class="tavoitteet">
  <li>Você entende o resgate e o que não aconteceu: <span class="fi">Marcus ei ymmärtänyt mitään.</span> <span class="fi">En muista.</span></li>
  <li>Você pede e deseja com educação: <span class="fi">Voisitko olla hiljaa?</span> <span class="fi">Haluaisin kotiin.</span> <span class="fi">Olisi mukava syödä.</span></li>
  <li>Você diz o que alguém nem fez: <span class="fi">Marcus ei edes tiennyt…</span></li>
</ul>

<p data-paikka="belo-horizonte-panoraama">Sábado, uma da tarde. O Morro do Cascalho é um morro inventado de Belo Horizonte, com ruas tão íngremes que os carros sobem em primeira marcha. No alto fica a casa do portão preto e branco. A Marisa estaciona na esquina de baixo e deixa o motor ligado. Ao lado da casa do Marcus, numa cadeira de plástico no portão, está a vizinha, Dona Cida, que conhece o Anderson como todo mundo conhece o Anderson.</p>

<section class="osio" data-lasna="malu">
  <h2>Diálogo B: <span class="fi">Täällä Maia</span></h2>
  <p class="ohje">Duas línguas na mesma casa. Primeiro ouça com o ouvido do Marcus: lá de cima, os cochichos em finlandês na janelinha do porão são só ruído. Depois troque para o ouvido da Maia e entenda: <span class="fi">Voisitko olla hiljaa? Haluaisin kotiin. Olisi mukava syödä.</span> Procure o <span class="fi pala">-isi-</span>. E ouça bem a Maia no fim: o j dela sai errado. Na segunda vez, ligue a <b>Tradução</b>.</p>
  <div class="salakieli" data-kuulija="marcus" data-kuiskaajat="maia,jay" data-korva-kuulija="👂 Ouvido do Marcus"
       data-ohje-kuulija="Ouvido do Marcus: lá de cima, os cochichos em finlandês na janela do porão são só “psst… psst…”. Ele não entende nada. Toque em 👂 Ouvido da Maia para entender o finlandês.">
    <div class="kpl" id="t15-dialogi-b" data-nimi="Ouvir o diálogo B">
      <p class="s" data-h="kertoja" data-pt="A Maia, o Anderson e a Marisa estão no Morro do Cascalho. É um morro em Belo Horizonte. A Marisa dirigiu rápido, mas não tão rápido quanto o Hiisi.">Maia, Anderson ja Marisa <span data-l="olla#2">ovat</span> Morro do Cascalholla. Se on mäki Belo Horizontessa. Marisa ajoi nopeasti, mutta ei yhtä nopeasti kuin Hiisi.</p>
      <p class="s" data-h="kertoja" data-pt="A Marisa espera no carro na esquina, com o motor ligado. A vizinha, Dona Cida, está sentada no portão ao lado da casa do Marcus.">Marisa odottaa autossa kadun kulmassa, moottori käynnissä. Naapuri <span lang="pt-BR">Dona</span> Cida istuu portilla Marcuksen talon vieressä.</p>
      <p class="s" data-h="anderson" data-pt="Boa tarde, Dona Cida!"><span lang="pt-BR">Boa tarde, Dona Cida!</span></p>
      <p class="s" data-h="kertoja" data-pt="O Anderson entrega o correio aqui todo dia. Todo mundo conhece ele.">Anderson jakaa postia täällä joka päivä. Kaikki tuntevat hänet.</p>
      <p class="s" data-h="cida" data-pt="Anderson, meu anjo! Vocês procuram o doido do cativeiro, né? Ele mora ali, atrás do portão preto e branco. Fez um cativeiro no porão e chama de “escritório”. Eu dou comida pros cachorros dele e tenho a chave da porta dos fundos."><span lang="pt-BR">Anderson, meu anjo! Vocês procuram o doido do cativeiro, né? Ele mora ali, atrás do portão preto e branco. Fez um cativeiro no porão e chama de “escritório”. Eu dou comida pros cachorros dele e tenho a chave da porta dos fundos.</span></p>
      <p class="s" data-h="kertoja" data-pt="A casa do Marcus tem um porão, e no porão tem um cativeiro. O Jay com certeza está lá. O Marcus tem dois cachorros. O Marcus sai muito, e aí a Cida dá comida para eles.">Marcuksen talossa on kellari ja kellarissa on <span lang="pt-BR">cativeiro</span>. Siellä on varmasti Jay. Marcuksella on kaksi koiraa. Marcus <span data-l="olla#2">on</span> usein poissa ja silloin Cida antaa niille ruokaa.</p>
      <p class="s" data-h="kertoja" data-pt="A Cida leva a Maia e o Anderson para os fundos da casa. A Cida abre o portão do Marcus. Dois cachorros grandes e pretos correm na hora para o portão.">Cida vie Maian ja Andersonin talon taakse. Cida avaa Marcuksen portin. Kaksi isoa mustaa koiraa juoksee heti portille.</p>
      <p class="s" data-h="kertoja" data-pt="Os cachorros correm porque conhecem bem o Anderson. Ele entrega o correio aqui toda manhã.">Koirat juoksevat, koska ne tuntevat Andersonin hyvin. Hän jakaa täällä postia joka aamu.</p>
      <p class="s" data-h="anderson" data-pt="Oi, Fofinho! Oi, Princesa! Quem é o menino bonzinho? Quem é? Toma, biscoitinho!"><span lang="pt-BR">Oi, Fofinho! Oi, Princesa! Quem é o menino bonzinho? Quem é? Toma, biscoitinho!</span></p>
      <p class="s" data-h="kertoja" data-pt="Os cachorros deitam no chão e querem brincar. O Anderson brinca. A Maia vai devagarinho até a janelinha do porão e sussurra.">Koirat makaavat maassa ja haluavat leikkiä. Anderson leikkii. Maia kävelee hiljaa kellarin pienelle ikkunalle ja kuiskaa.</p>
      <p class="s" data-h="maia" data-pt="Jay! Aqui é a Maia. Você poderia ficar quieto e escutar?">Jay! Täällä Maia. Voisitko olla hiljaa ja kuunnella?</p>
      <p class="s" data-h="jay" data-pt="Eu estou amarrado numa cadeira, e você diz “poderia”?">Minä <span data-l="olla#2">olen</span> kiinni tuolissa ja sinä sanot ”voisitko”?</p>
      <p class="s" data-h="maia" data-pt="Desculpa. Como você está?">Anteeksi. Miten sinä voit?</p>
      <p class="s" data-h="jay" data-pt="Mal. Eu queria ir para casa. Seria bom comer e dormir. Estou com uma ressaca horrível.">Huonosti. Haluaisin kotiin. Olisi mukava syödä ja nukkua. Minulla on kamala krapula.</p>
      <p class="s" data-h="maia" data-pt="Ai, meu bem, seria bom conversar. Mas espero que o Marcus não escute a gente.">Voi kulta, olisi mukava jutella. Mutta toivon, että Marcus ei kuule meitä.</p>
      <p class="s" data-h="jay" data-pt="O Marcus foi para outro cômodo.">Marcus meni toiseen huoneeseen.</p>
      <p class="s" data-h="maia" data-pt="Você lembra o que aconteceu de noite?">Muistatko, mitä yöllä tapahtui?</p>
      <p class="s" data-h="jay" data-pt="Não lembro. Acordei na cadeira. Tentei falar inglês, mas o Marcus não entendeu nada.">En muista. Heräsin tuolissa. Yritin puhua englantia, mutta Marcus ei ymmärtänyt mitään.</p>
      <p class="s" data-h="kertoja" data-pt="Agora a Maia e o Jay ouvem o Marcus. Ele está falando no telefone no andar de cima da casa.">Nyt Maia ja Jay kuulevat Marcuksen. Hän puhuu puhelimessa talon toisessa kerroksessa.</p>
      <p class="s" data-h="marcus" data-pt="Eu quero botar esse babaca no micro-ondas. Mas o micro-ondas tem vinte litros e o gringo tem dois metros. Não cabe!"><span lang="pt-BR">Eu quero botar esse babaca no micro-ondas. Mas o micro-ondas tem vinte litros e o gringo tem dois metros. Não cabe!</span></p>
      <p class="s" data-h="marcus" data-pt="Burro, eu? Então me explica, gênio!"><span lang="pt-BR">Burro, eu? Então me explica, gênio!</span></p>
      <p class="s" data-h="marcus" data-pt="Pneu? … Ahhh. Então micro-ondas é isso…"><span lang="pt-BR">Pneu? … Ahhh. Então micro-ondas é isso…</span></p>
      <p class="s" data-h="marcus" data-pt="E onde eu arrumo pneu velho num sábado?"><span lang="pt-BR">E onde eu arrumo pneu velho num sábado?</span></p>
      <p class="s" data-h="maia" data-pt="O plano do Marcus é burro! O Marcus nem sabia o que é micro-ondas.">Marcuksen suunnitelma on tyhmä! Marcus ei edes tiennyt, mitä mikroaaltouuni tarkoittaa.</p>
      <p class="s" data-h="kertoja" data-pt="O Marcus abre a porta da casa e sai. Ele vai procurar um pneu velho.">Marcus avaa talon oven ja lähtee ulos. Hän etsii vanhaa rengasta.</p>
      <p class="s" data-h="maia" data-hairio="djuokset → juokset" data-pt="Jay, fica pronto! Daqui a pouco você corre. (errado de propósito: o j finlandês soa como i)">Jay, ole valmis! Pian sinä <span class="pala">djuokset</span>.</p>
      <p class="s" data-h="jay" data-pt="Não, Maia, não é “djuokset”, é “juokset”. O j finlandês soa como i. E eu estou amarrado na cadeira!">Ei, Maia, ei ”<span class="pala">djuokset</span>” vaan ”juokset”. Suomen <span class="pala">j</span> on kuin <span class="pala">i</span>. Ja minä <span data-l="olla#2">olen</span> kiinni tuolissa!</p>
      <p class="s" data-h="kertoja" data-pt="Nos fundos da casa tem uma porta, e a Cida tem a chave. A Cida abre a porta, e a Maia corre para o porão.">Talon takana on ovi ja Cidalla on avain. Cida avaa oven ja Maia juoksee kellariin.</p>
      <p class="s" data-h="maia" data-pt="Não dá tempo. Só as mãos estão amarradas. Você pode correr com a cadeira!">Ei ole aikaa. Vain kädet <span data-l="olla#2">ovat</span> kiinni. Sinä voit juosta tuolin kanssa!</p>
      <p class="s" data-h="kertoja" data-pt="O Jay corre com a cadeira nas costas até o carro da Marisa. A Maia também corre, e o Anderson diz: “Corram! Corram!”">Jay juoksee tuoli selässä Marisan autoon. Maia juoksee myös ja Anderson sanoo: ”Juoskaa! Juoskaa!”</p>
      <p class="s" data-h="kertoja" data-pt="No portão, o Marcus volta com um pneu velho. O Anderson entrega a revista do Atlético para ele, e o Marcus só olha a revista. No carro, a Maia e a Marisa colocam o Jay para dentro. A cadeira vai junto.">Portilla Marcus tulee takaisin vanhan renkaan kanssa. Anderson antaa hänelle Atlético-lehden ja Marcus katsoo vain lehteä. Autolla Maia ja Marisa nostavat Jayn kyytiin. Tuoli tulee mukaan.</p>
      <p class="s" data-h="marcus" data-pt="A minha revista do Galo! Tava no endereço errado? Valeu, Anderson!"><span lang="pt-BR">A minha revista do Galo! Tava no endereço errado? Valeu, Anderson!</span></p>
    </div>
  </div>
  <p>O carro desce o morro com quatro pessoas e uma cadeira. O Marcus lê a revista do Galo sentado no pneu velho. No banco de trás, o Jay diz em finlandês: <span class="fi">Anderson on sankari!</span> O Anderson não entende a palavra, mas entende o abraço.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Täällä Maia.</span> = aqui é a Maia · no telefone, na janela, na porta: “aqui fala…”</li>
      <li><span class="fi">Voisitko olla hiljaa ja kuunnella?</span> = você poderia ficar quieto e escutar? · o condicional educado: Gramática 2, logo abaixo</li>
      <li><span class="fi">Haluaisin kotiin. Olisi mukava syödä ja nukkua.</span> = eu queria ir para casa. Seria bom comer e dormir · <span class="fi">haluaisin kotiin</span>: o “ir” fica subentendido</li>
      <li><span class="fi">Toivon, että Marcus ei kuule meitä.</span> = espero que o Marcus não escute a gente · <span class="fi">toivoa</span> = esperar, desejar</li>
      <li><span class="fi">Marcus ei ymmärtänyt mitään.</span> = o Marcus não entendeu nada · <span class="fi">Marcus ei edes tiennyt…</span> = o Marcus nem sabia… · <span class="fi">edes</span> = nem (sequer)</li>
      <li><span class="fi">olla kiinni</span> = estar amarrado, preso · <span class="fi">moottori käynnissä</span> = com o motor ligado · <span class="fi">tuoli selässä</span> = com a cadeira nas costas</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="bh-bairro">
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
    <li class="s" data-pt="Eu queria ir para casa.">Haluaisin kotiin.</li>
    <li class="s" data-pt="Seria bom comer e dormir.">Olisi mukava syödä ja nukkua.</li>
    <li class="s" data-pt="Você poderia ficar quieto?">Voisitko olla hiljaa?</li>
    <li class="s" data-pt="Poderia me dar água?">Saisinko vettä?</li>
    <li class="s" data-pt="Eu queria um café. (de tahtoa, querer: igual a haluaisin, um pouco mais formal)">Tahtoisin kahvia.</li>
  </ul>
  <p>O resto do condicional (“se eu tivesse…, eu faria…”) vem na lição 20. Por enquanto, guarde estas frases e a marca <span class="fi pala">-isi-</span>.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> em português, o pedido educado pode ir para o passado: “eu queria ir para casa”. Em finlandês, o passado é só passado: <span class="fi">halusin kotiin</span> = eu quis ir para casa (antes). Para pedir, use o condicional: <span class="fi">haluaisin kotiin</span>. E depois de <span class="fi">en, et, ei</span>, sempre o particípio: <span class="fi">en muistanut</span>, nunca <span class="pala">en muistin</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-bairro">
  <h2>Exercícios: o condicional e a busca</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Peça com educação: escreva o condicional</h3>
    <p class="ohje">Escreva o verbo no condicional, com <span class="fi pala">-isi-</span>, na pessoa certa. O verbo e a pessoa estão entre parênteses.</p>
    <div class="aukot" lang="fi-FI">
      <p><span class="aukko" data-oikea="Haluaisin"></span> kotiin. <span data-ei-kuplaa>(haluta, minä)</span></p>
      <p><span class="aukko" data-oikea="Voisitko"></span> olla hiljaa? <span data-ei-kuplaa>(voida, sinä, pergunta)</span></p>
      <p><span class="aukko" data-oikea="Olisi"></span> mukava nukkua. <span data-ei-kuplaa>(olla)</span></p>
      <p><span class="aukko" data-oikea="Saisinko"></span> vettä? <span data-ei-kuplaa>(saada, minä, pergunta)</span></p>
      <p>Me <span class="aukko" data-oikea="haluaisimme"></span> syödä. <span data-ei-kuplaa>(haluta, me)</span></p>
      <p><span class="aukko" data-oikea="Voisitteko"></span> avata oven? <span data-ei-kuplaa>(voida, te, pergunta)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Leia as mensagens com o Hiisi</h3>
    <p class="ohje">Ao meio-dia, no carro da Marisa, subindo o morro, a Maia escreve para o Hiisi, em Helsinque (lá já são cinco da tarde). Leia e responda.</p>
    <div class="chat" data-otsikko="Hiisi" data-paiva="lauantai" data-mina="maia">
      <p data-h="maia" data-aika="12.10" data-pt="Oi, Hiisi. O Jay ligou para você de noite?">Hei Hiisi. Soittiko Jay sinulle yöllä?</p>
      <p data-h="hiisi" data-aika="12.25" data-pt="Não ligou. Por quê?">Ei soittanut. Miksi?</p>
      <p data-h="maia" data-aika="12.26" data-pt="O Jay não voltou para casa. Ele não atendeu o telefone. O celular estava na mesa, na rua.">Jay ei tullut kotiin. Hän ei vastannut puhelimeen. Puhelin <span data-l="olla#2">oli</span> pöydällä kadulla.</p>
      <p data-h="hiisi" data-aika="12.40" data-pt="Com certeza ele está dormindo num parque.">Hän nukkuu varmasti puistossa.</p>
      <p data-h="hiisi" data-aika="12.40" data-pt="(cara de paisagem)"><span class="emoji">😐</span></p>
      <p data-h="maia" data-aika="12.41" data-pt="Não está. O Uuno viu ele de noite com um homem baixinho. Agora a gente sabe onde ele está.">Ei nuku. Uuno näki hänet yöllä pienen miehen kanssa. Nyt me tiedämme, missä hän <span data-l="olla#2">on</span>.</p>
      <p data-h="maia" data-aika="12.51" data-pt="Eu escrevo à noite. Seria bom dormir, mas agora a gente está subindo o morro de carro.">Kirjoitan illalla. Olisi mukava nukkua, mutta nyt me ajamme mäkeä ylös.</p>
      <p data-h="hiisi" data-aika="13.05" data-pt="Dirijam rápido.">Ajakaa nopeasti.</p>
      <p data-h="maia" data-aika="13.06" data-pt="A Marisa dirige rápido, mas não tão rápido quanto você.">Marisa ajaa nopeasti, mutta ei yhtä nopeasti kuin sinä.</p>
    </div>
    <div class="valinta" data-oikea="Ei soittanut.">
      <p class="kysymys"><span class="fi">Soittiko Jay Hiidelle yöllä?</span></p>
      <div class="vaihtoehdot"><button type="button">Soitti.</button><button type="button">Ei soittanut.</button><button type="button">Ei soita.</button></div>
    </div>
    <div class="valinta" data-oikea="Puistossa.">
      <p class="kysymys"><span class="fi">Missä Jay nukkuu? Mitä Hiisi sanoo?</span></p>
      <div class="vaihtoehdot"><button type="button">Kotona.</button><button type="button">Puistossa.</button><button type="button">Autossa.</button></div>
    </div>
    <div class="valinta" data-oikea="Ei aja.">
      <p class="kysymys"><span class="fi">Ajaako Marisa yhtä nopeasti kuin Hiisi?</span></p>
      <div class="vaihtoehdot"><button type="button">Ajaa.</button><button type="button">Ei aja.</button><button type="button">Ei ajanut.</button></div>
    </div>
  </div>
</section>

<aside class="kulttuuri" data-paikka="bh-bairro">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Os bairros de Belo Horizonte e o carteiro que conhece todo mundo</h3>
  <figure class="kuva" data-kuva="bh-bairro"></figure>
  <p>Belo Horizonte foi planejada no papel e inaugurada em 1897, como a nova capital de Minas Gerais. O plano tinha ruas retas, avenidas largas na diagonal e a Avenida do Contorno em volta do centro. A cidade cresceu muito além do Contorno: subiu os morros em volta, e hoje tem <b>centenas de bairros</b>, de ruas planas a ladeiras onde o carro sobe em primeira. O Morro do Cascalho desta lição é inventado; nenhum bairro de verdade tem esse nome.</p>
  <p>Em muitos bairros, a vida ainda é de rua: todo mundo conhece a padaria, o portão azul do vizinho, o cachorro que late para as motos. Quem faz a <b>rota do correio</b> conhece cada casa, cada nome e cada cachorro. O Anderson faz a sua ronda há anos, e é por isso que ele sabe onde o Marcus mora e por que os cachorros dele abanam o rabo.</p>
  <p>Na Finlândia, o bairro é <span class="fi">kaupunginosa</span>, “parte da cidade”: Kallio, Sörnäinen, Töölö. Lá as cartas entram por uma fenda na porta, e o carteiro quase nunca vê ninguém.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios: traduzir e falar</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Traduza para o finlandês</h3>
    <p class="ohje">Escreva primeiro, depois abra o modelo.</p>
    <div class="kaanna"><p class="pt">Eu não dormi.</p><p class="s" data-pt="Eu não dormi.">En nukkunut.</p></div>
    <div class="kaanna"><p class="pt">Os vizinhos não viram o Jay.</p><p class="s" data-pt="Os vizinhos não viram o Jay.">Naapurit eivät nähneet Jaytä.</p></div>
    <div class="kaanna"><p class="pt">O Marcus não entendeu nada.</p><p class="s" data-pt="O Marcus não entendeu nada.">Marcus ei ymmärtänyt mitään.</p></div>
    <div class="kaanna"><p class="pt">Eu queria ir para casa.</p><p class="s" data-pt="Eu queria ir para casa.">Haluaisin kotiin.</p></div>
    <div class="kaanna"><p class="pt">Você poderia ficar quieto?</p><p class="s" data-pt="Você poderia ficar quieto?">Voisitko olla hiljaa?</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda às perguntas</h3>
    <p class="ohje">Responda em voz alta antes de abrir o modelo. Use o passado negativo e o condicional.</p>
    <details class="vastaus"><summary lang="fi-FI">Nukuitko hyvin yöllä?</summary><p class="s" data-pt="Não dormi. O vizinho tocou música a noite inteira.">En nukkunut. Naapuri <span data-l="soittaa#2">soitti</span> musiikkia koko yön.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Tiesitkö, että Marcuksella on kellari?</summary><p class="s" data-pt="Não sabia. Ninguém me contou.">En tiennyt. Kukaan ei kertonut minulle.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Eikö kukaan soittanut sinulle eilen?</summary><p class="s" data-pt="Ninguém ligou. Só a mãe escreveu.">Kukaan ei soittanut. Vain äiti kirjoitti.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä haluaisit nyt?</summary><p class="s" data-pt="Eu queria um café e um pão doce.">Haluaisin kahvia ja pullaa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä olisi mukava tehdä huomenna?</summary><p class="s" data-pt="Seria bom dormir muito.">Olisi mukava nukkua kauan.</p></details>
  </div>
</section>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Mä en syöny mitään: o t que some</h3>
  <p>Na fala, o particípio perde o <span class="fi pala">-t</span> final: <span class="fi">syönyt</span> vira <span class="fi" data-rekisteri="puhe">syöny</span>, <span class="fi">nukkunut</span> vira <span class="fi" data-rekisteri="puhe">nukkunu</span>. E <span class="fi">olisi</span> encurta para <span class="fi" data-rekisteri="puhe">ois</span>. Você não precisa falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">minä en syönyt</span></td><td><span class="fi" data-rekisteri="puhe">mä en syöny</span></td><td>eu não comi</td></tr>
    <tr><td><span class="fi">minä en nukkunut</span></td><td><span class="fi" data-rekisteri="puhe">mä en nukkunu</span></td><td>eu não dormi</td></tr>
    <tr><td><span class="fi">olisi mukava</span></td><td><span class="fi" data-rekisteri="puhe">ois kiva</span></td><td>seria legal</td></tr>
  </table>
  <p>À noite, em casa, o Jay manda uma mensagem de voz para o Hiisi, do jeito que se fala na rua:</p>
  <p class="s" data-h="jay" data-kirja="Minä en nukkunut ja minä en syönyt mitään." data-pt="Eu não dormi e não comi nada.">Mä en nukkunu ja mä en syöny mitään.</p>
  <p class="s" data-h="jay" data-kirja="Olisi mukava nukkua." data-pt="Seria legal dormir.">Ois kiva nukkua.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t15">
    <h3>Lição de casa</h3>
    <p>Escreva para um amigo sobre uma noite em que nada deu certo (de verdade ou inventada). Seis frases: três coisas que você não fez (<span class="fi">en</span> + particípio: <span class="fi">en nukkunut, en syönyt…</span>), uma com <span class="fi">emme</span> ou <span class="fi">eivät</span> (<span class="fi">emme tienneet…</span>) e dois desejos ou pedidos com <span class="fi">haluaisin</span>, <span class="fi">olisi mukava</span> ou <span class="fi">voisitko</span>. Leia em voz alta: o <span class="fi pala">j</span> de <span class="fi">juokse</span> é <span class="pala">i</span>.</p>
    <details class="malli"><summary>Resposta modelo (a do Jay, no sábado à noite)</summary>
      <p class="s" data-pt="Eu não dormi de noite.">En nukkunut yöllä.</p>
      <p class="s" data-pt="Eu não comi nada.">En syönyt mitään.</p>
      <p class="s" data-pt="Eu não atendi o telefone.">En vastannut puhelimeen.</p>
      <p class="s" data-pt="Os vizinhos não sabiam onde eu estava.">Naapurit eivät tienneet, missä <span data-l="olla#2">olin</span>.</p>
      <p class="s" data-pt="Eu queria dormir.">Haluaisin nukkua.</p>
      <p class="s" data-pt="Maia, você poderia fazer um café para mim?">Maia, voisitko keittää minulle kahvia?</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t15">
    <li>Sei dizer o que não aconteceu: ei tullut, en nukkunut, emme tienneet.</li>
    <li>Formo o particípio: tullut, vastannut, nähnyt, juossut, e -neet no plural.</li>
    <li>Respondo curto: Tuliko Jay? – Ei tullut.</li>
    <li>Peço com educação: haluaisin, voisitko, saisinko.</li>
    <li>Digo um desejo: olisi mukava syödä.</li>
    <li>Dou ordens para uma pessoa e para várias: hae auto, tulkaa mukaan.</li>
    <li>Digo o j finlandês como i: ja, jo, juokse.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'kielto-imperfekti', otsikko: 'Não voltou: en + particípio (ei tullut, emme tienneet)', taso: 'essencial', hakuosa: 'h-imperfekti', treeni: 't15-kielto-imperfekti',
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
<p>Presente × passado: <span class="fi">en nuku</span> (não durmo) × <span class="fi">en nukkunut</span> (não dormi). Nunca <span class="pala">en nukuin</span>. Resposta curta: <span class="fi">Tuliko Jay? – Ei tullut.</span></p>`
    },
    {
      id: 'partisiippi15', otsikko: 'O particípio de cada verbo: tullut, vastannut, nähnyt', taso: 'essencial', hakuosa: 'h-imperfekti', treeni: 't15-partisiippi',
      html: `
<p>O particípio sai do infinitivo, com a mesma consoante do infinitivo (<span class="fi">nukkua → nukkunut</span>, <span class="fi">tietää → tiennyt</span>). A bolha de cada verbo mostra a forma.</p>
<table class="taivutus">
  <tr><th>infinitivo</th><th>particípio</th><th>regra</th></tr>
  <tr><td><span class="fi">nukkua</span><span class="kaannos" lang="pt-BR">dormir</span></td><td><span class="fi">nukkunut</span></td><td>tipo 1: tire o -a/-ä, + nut/nyt</td></tr>
  <tr><td><span class="fi">tuntea</span><span class="kaannos" lang="pt-BR">conhecer</span></td><td><span class="fi">tuntenut</span></td><td>tipo 1</td></tr>
  <tr><td><span class="fi">syödä</span><span class="kaannos" lang="pt-BR">comer</span></td><td><span class="fi">syönyt</span></td><td>tipo 2: tire o -da/-dä</td></tr>
  <tr><td><span class="fi">nähdä</span><span class="kaannos" lang="pt-BR">ver</span></td><td><span class="fi">nähnyt</span></td><td>tipo 2</td></tr>
  <tr><td><span class="fi">tulla</span><span class="kaannos" lang="pt-BR">vir</span></td><td><span class="fi">tullut</span></td><td>tipo 3: a consoante dobra</td></tr>
  <tr><td><span class="fi">juosta</span><span class="kaannos" lang="pt-BR">correr</span></td><td><span class="fi">juossut</span></td><td>tipo 3: -sta → -ssut</td></tr>
  <tr><td><span class="fi">vastata</span><span class="kaannos" lang="pt-BR">responder</span></td><td><span class="fi">vastannut</span></td><td>tipo 4: -nnut/-nnyt</td></tr>
  <tr><td><span class="fi">tarvita</span><span class="kaannos" lang="pt-BR">precisar</span></td><td><span class="fi">tarvinnut</span></td><td>tipo 5: -nnut</td></tr>
</table>
<p>Plural: troque <span class="fi pala">-nut/-nyt</span> por <span class="fi pala">-neet</span>: <span class="fi">tulleet, nähneet</span>.</p>`
    },
    {
      id: 'konditionaali15', otsikko: 'Eu gostaria: haluaisin, voisitko, olisi mukava', taso: 'essencial', hakuosa: 'h-konditionaali', treeni: 't15-konditionaali',
      html: `
<p><b>Forma:</b> radical + <span class="fi pala">-isi-</span> + terminação de pessoa: <span class="fi">haluan → haluaisin</span>, <span class="fi">voit → voisit</span>, <span class="fi">on → olisi</span>. <b>Uso nesta lição:</b> pedir com educação e desejar. O condicional completo vem na lição 20.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Haluaisin kotiin.</span></td><td>Eu queria ir para casa.</td></tr>
  <tr><td><span class="fi">Olisi mukava syödä.</span></td><td>Seria bom comer.</td></tr>
  <tr><td><span class="fi">Voisitko olla hiljaa?</span></td><td>Você poderia ficar quieto?</td></tr>
  <tr><td><span class="fi">Saisinko vettä?</span></td><td>Poderia me dar água?</td></tr>
  <tr><td><span class="fi">Haluaisin kakkua.</span></td><td>Eu queria bolo.</td></tr>
</table>`
    },
    {
      id: 'aantaminen15', otsikko: 'Pronúncia: o j finlandês é i', taso: 'essencial', hakuosa: 'h-sudenkuopat', treeni: 't15-joulu',
      html: `
<p>O <span class="fi pala">j</span> finlandês é um <span class="pala">i</span> curto colado na vogal seguinte, como em “iate”: <span class="fi">ja</span> = <span class="pala">iá</span>. Nunca o j chiado de “janela”. Exceção: o nome inglês <span class="fi">Jay</span>.</p>
<ul class="esim">
  <li class="s" data-pt="e">ja</li>
  <li class="s" data-pt="já">jo</li>
  <li class="s" data-pt="corra!">Juokse!</li>
  <li class="s" data-pt="corram!">Juoskaa!</li>
  <li class="s" data-pt="Natal">joulu</li>
  <li class="s" data-pt="Papai Noel">joulupukki</li>
</ul>
<p>A Maia, nervosa, disse <span class="pala">djuokset</span>; o certo é <span class="fi">juokset</span>: <span class="pala">IUOK-set</span>.</p>`
    },
    {
      id: 'sudenkuopat15', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-imperfekti',
      html: `
<ul>
  <li><b>Depois de en, o particípio:</b> <span class="fi">en nukkunut</span>, nunca <span class="pala">en nukuin</span>.</li>
  <li><b>O particípio só tem número:</b> <span class="fi">hän ei tullut, he eivät tulleet</span>.</li>
  <li><b>A consoante do infinitivo:</b> <span class="fi">en nukkunut</span>, nunca <span class="pala">nukunut</span>; <span class="fi">emme tienneet</span>, nunca <span class="pala">tiedneet</span>.</li>
  <li><b>Pedido educado = condicional:</b> <span class="fi">haluaisin kotiin</span>; <span class="fi">halusin kotiin</span> é “eu quis ir para casa”.</li>
  <li><b>Resposta curta com o verbo:</b> <span class="fi">Tuliko Jay? – Ei tullut.</span> Não basta <span class="fi">ei</span>.</li>
  <li><b>j = i:</b> <span class="fi">juokset</span> soa <span class="pala">IUOK-set</span>, nunca <span class="pala">djuokset</span>.</li>
</ul>`
    }
  ]
});
