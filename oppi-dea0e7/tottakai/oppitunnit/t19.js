/* Tottakai, lição 19: uusi vuosi Copacabanalla ja jäähyväiset Rion lentokentällä (Passon jakso 19 Maian näkökulmasta).
   Oma materiaali, ei kirjan tekstiä. Kurssisuunnitelma: docs/RUNKO_13_20.md §8 ”Lesson 19”; tarinan kalenteri: to 31.12.2026
   Copacabana (oppitunti 18 = ke 30.12. Ipanema ja UPA), pe 1.1.2027 postikortti, la 2.1.2027 lento Galeãosta Lissabonin
   kautta kotiin (oppitunti 20 = kesäkuu 2027 Suomessa).
   Materiaalivaihe 8.11.2026 (ass/oppitunnit/t19.md §6): omistajan lukitsemat dialogit ass/luonnokset/t19-a-1_lopullinen.md
   ja t19-b-1_lopullinen.md sellaisinaan (suomi ja portugali; Marisan ”koko yö” ja Maian ”olut” data-hairio). Johtajan
   pakolliset pienet korjaukset: Jayn vokaalisointu (PAATOKSET 17.10.2026) ”Jayta” → ”Jaytä” (A) ja ”Jaylla” → ”Jayllä”
   (B). Vanha tarina (Ouro Preto, Maíran historia, Uuno ja Eenok kirkossa, vuolukivi, Inhotim, Confins, Andersonin
   KIITOS-kirje, Walker ja Marta lentokentällä) on poissa; perheen jäähyväiset ovat oppitunnilla 16 B.
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t19, ”Parte A · Encontro”): uudenvuodenaatto Copacabanalla; dialogi A ”Uusi vuosi Copacabanalla” (valkoiset
     vaatteet, Jay kainalosauvoilla, Marisan koko yö, Maian olut/ollut, vuosi perfektissä, valot veden päällä, Maia aikoo
     maalata Jayn juuri näin: K4:n taulu); loppukappale: Uunon ja Eenokin pyöreä keltainen talo rannan päässä; Frases
     prontas; tehtävä 1 (ymmärtäminen); kikka A: matkabingo (`.bingo`, nyt Maian oma: kysymykset Jaylle ja Marisalle);
     teemasanasto → tehtävä 2 (yhdistä); ääntäminen (ollut × olut, ei ”ollutchi”) → tehtävä 3 (kuuntelu: perfekti vai
     imperfekti, ollut vai olut); kielioppi 1 perfekti → tehtävät 4 (valinta) ja 5 (kirjoitettu perfekti).
   - osa B (#t19-b, ”Parte B · Aprofundar e fechar”): pe 1.1. Maian postikortti Purjolle (`.postikortti`, Rion kortti,
     monikon paikallissijat: rannoilla, kioskeilla, aalloista, järville; kesälupaus järvistä, ei saunasta: X11); la 2.1.
     dialogi B ”Näkemiin, Brasilia!” Rion lentokentän kahvilassa (lentokentän kaiutin lt_kuuluttaja, taustahahmo, ei
     hahmolistassa; Jay juoksee kainalosauvoilla); Frases prontas; tehtävä 6 (ymmärtäminen); kielioppi 2 monikon
     paikallissijat vain tunnistettavaksi → tehtävä 7 (kuuntelu); kulttuuri (Réveillon Copacabanalla, uusi vuosi Suomessa;
     kuva reveillon-copacabana) → tehtävä 8 (puhuminen, 6 kysymystä); Na rua (Hiisi ja Jay: ootsä käyny, mä oon ollu, vaa);
     kotitehtävä; itsearvio.
   Suomea puhuvat Maia, Jay, Marisa (rikkinäinen mutta toimiva suomi, data-hairio; avain malu kuten t16–t18), Hiisi (Na
   rua) ja kertoja; kaiutin puhuu vain portugalia. Kirjakieli kaikkialla; puhekieli vain Na rua -nurkassa. Monikon
   paikallissijat osassa A vain lukitussa ilmauksessa ”valkoisissa vaatteissa”; muuten ne kuuluvat osaan B. Ei passiivia,
   ei jos-konditionaalia (t20). Omistusliite vain lukitussa ”paras matkani” (lição 17). */
Kurssi.lisaa({
  id: 't19',
  lyhyt: '19',
  jakso: 'Lição 19',
  otsikko: 'Réveillon em Copacabana: já esteve? (o perfeito)',
  lahde: 'Tema: o Réveillon em Copacabana e a despedida no aeroporto do Galeão · Gramática: o perfeito (olen käynyt, oletko nähnyt, en ole käynyt), perfeito ou passado, os casos de lugar no plural para reconhecer (monissa kirkoissa, rannoilla, järville) · Pronúncia: a consoante dupla do particípio (ollut, tullut, mennyt) e ollut × olut',
  aiheet: ['kaupunki', 'vapaa', 'aika', 'liike'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; no Réveillon decide pintar o Jay de muletas e de branco' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; de muletas e sem cerveja desde a UPA; corre de muletas para o portão' },
    malu: { nimi: 'Marisa', tyyppi: 'nainen', vaihto: 5, kuvaus: 'amiga da Maia; mora em Copacabana; leva os dois ao aeroporto e não para de dizer tchau' },
    lt_kuuluttaja: { nimi: 'Alto-falante', tyyppi: 'mies', vaihto: 8, npc: true, kuvaus: 'a voz dos anúncios do aeroporto' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; manda mensagem de voz de Helsinque' }
  },

  sanasto: [
    'koskaan', 'jo', 'kerta', 'yhdessä', 'kai', 'aikoa', 'kestää', 'ainoa', 'keskiyö', 'juhla', 'ilman', 'aalto',
    'postikortti', 'opetella', 'kirje', 'saattaa', 'matkustaja', 'näkemiin'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Encontro',
      html: `
<ul class="tavoitteet">
  <li>Você pergunta se alguém já fez algo e responde: <span class="fi">Oletteko te koskaan olleet Copacabanalla uutena vuotena? – Emme ole.</span></li>
  <li>Você conta o que já fez até agora: <span class="fi">Tämä vuosi on ollut hyvä. Olemme tehneet paljon yhdessä.</span></li>
  <li>Você pronuncia a consoante dupla do particípio, <span class="fi">ollut, tullut, mennyt</span>, e não confunde <span class="fi">ollut</span> com <span class="fi">olut</span>.</li>
  <li>Você forma o perfeito em todas as pessoas (<span class="fi">olen tavannut, en ole nähnyt</span>) e escolhe entre perfeito e passado: <span class="fi">vuosi on ollut hyvä</span> × <span class="fi">eilen sinä kävit</span>.</li>
  <li>Parte B: a despedida no aeroporto do Galeão e os casos de lugar no plural, para reconhecer (<span class="fi">monissa kirkoissa, rannoilla, järville</span>).</li>
</ul>
<p data-paikka="copacabana-praia">Quinta-feira, 31 de dezembro, onze da noite. É o Réveillon de Copacabana: dois milhões de pessoas na areia, quase todas de branco, e no mar as balsas dos fogos esperando a meia-noite. O Jay também está de branco, e de muletas: desde ontem, na UPA, o pé está enfaixado e a ordem da enfermeira é clara, nada de cerveja (lição 18). A Marisa trouxe os dois do hotel e já avisou que hoje ninguém dorme. No sábado, a Maia e o Jay voam de volta para a Finlândia.</p>

<section class="osio" data-paikka="reveillon-copacabana">
  <h2>Diálogo A: <span class="fi">Uusi vuosi Copacabanalla</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure o verbo <span class="fi">olla</span> + uma palavra em <span class="fi pala">-nut/-nyt</span> ou <span class="fi pala">-neet</span>: <span class="fi">on ollut, olemme tehneet, olen tavannut</span>. É o perfeito, o “já fiz”, “até agora”. E escute o erro da Maia: <span class="fi">olut</span> ou <span class="fi">ollut</span>? Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t19-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="São onze horas da noite. A Maia, o Jay e a Marisa estão em Copacabana, no Rio, esperando o Ano-Novo.">Kello on yksitoista illalla. Maia, Jay ja Marisa ovat Copacabanalla Riossa ja odottavat uutta vuotta.</p>
    <p class="s" data-h="kertoja" data-pt="Lá fora há muita gente. Todos estão de branco, o Jay também. Ele está de muletas.">Ulkona on paljon ihmisiä. Kaikki ovat valkoisissa vaatteissa, myös Jay. Hänellä on kainalosauvat.</p>
    <p class="s" data-h="malu" data-pt="Vocês já estiveram em Copacabana no Ano-Novo?">Oletteko te koskaan olleet Copacabanalla uutena vuotena?</p>
    <p class="s" data-h="maia" data-pt="Não. Quando criança, eu dançava na rua em Belo Horizonte.">Emme ole. Lapsena minä tanssin kadulla Belo Horizontessa.</p>
    <p class="s" data-h="jay" data-pt="E eu estava na Finlândia. Lá o Ano-Novo é uma festa pequena e fria.">Ja minä olin Suomessa. Siellä uusi vuosi on pieni ja kylmä juhla.</p>
    <p class="s" data-h="malu" data-pt="Aqui a festa dura a noite toda! (errado de propósito: koko yö; o certo é koko yön)">Täällä juhla kestää koko <span data-hairio="yön">yö</span>!</p>
    <p class="s" data-h="jay" data-pt="A noite toda? Eu pretendo dormir logo depois da meia-noite.">Koko yön? Minä aion nukkua heti keskiyön jälkeen.</p>
    <p class="s" data-h="maia" data-pt="Não vai dormir, não! No sábado a gente voa para casa. Dorme no avião.">Et nuku! Lauantaina lennämme kotiin. Nuku lentokoneessa.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia e o Jay esperam a meia-noite e falam sobre o ano.">Maia ja Jay odottavat keskiyötä ja puhuvat vuodesta.</p>
    <p class="s" data-h="maia" data-pt="Jay, este ano foi bom. (errado de propósito: olut = cerveja; o certo é ollut)">Jay, tämä vuosi on <span data-hairio="ollut">olut</span> hyvä.</p>
    <p class="s" data-h="jay" data-pt="Cerveja? Onde? Ah, você quer dizer “ollut”. Tem um l longo.">Olut? Missä? Ai, sinä tarkoitat ”ollut”. Siinä on pitkä <span class="pala">l</span>.</p>
    <p class="s" data-h="maia" data-pt="Ollut. Este ano foi bom. A gente fez muita coisa junto.">Ollut. Tämä vuosi on ollut hyvä. Olemme tehneet paljon yhdessä.</p>
    <p class="s" data-h="jay" data-pt="É. Eu conheci a Marta, o Walker e o Anderson.">Niin. Olen tavannut Martan, Walkerin ja Andersonin.</p>
    <p class="s" data-h="maia" data-pt="E ontem você foi ao pronto-atendimento.">Ja eilen sinä kävit päivystyksessä.</p>
    <p class="s" data-h="jay" data-pt="Ontem foi um dia ruim. Acho que eu sou a única pessoa em Copacabana sem cerveja. Mas o ano foi bom.">Eilen oli huono päivä. Minä olen kai ainoa ihminen Copacabanalla ilman olutta. Mutta vuosi on ollut hyvä.</p>
    <p class="s" data-h="malu" data-pt="Qual foi o melhor dia da viagem, Jay?">Mikä on ollut matkan paras päivä, Jay?</p>
    <p class="s" data-h="jay" data-pt="A véspera de Natal. Eu comi três pratos de comida e dormi no sofá.">Jouluaatto. Minä söin kolme lautasta ruokaa ja nukuin sohvalla.</p>
    <p class="s" data-h="maia" data-pt="Para mim, o melhor dia é este. A gente viu junto Belo Horizonte, o Rio e agora o Ano-Novo.">Minulle paras päivä on tämä. Olemme nähneet yhdessä Belo Horizonten, Rion ja nyt uuden vuoden.</p>
    <p class="s" data-h="kertoja" data-pt="É meia-noite. De cima da água sobem luzes: vermelhas, amarelas, verdes e douradas.">Kello on kaksitoista. Veden päältä nousee valoja: punaisia, keltaisia, vihreitä ja kultaisia.</p>
    <p class="s" data-h="malu" data-pt="Feliz Ano Novo! Em finlandês: hyvää uutta vuotta!"><span lang="pt-BR">Feliz Ano Novo!</span> Suomeksi: hyvää uutta vuotta!</p>
    <p class="s" data-h="jay" data-pt="Eu nunca vi uma festa tão grande. Esta deve ser a maior do mundo.">En ole koskaan nähnyt näin suurta juhlaa. Tämä on kai maailman suurin.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia olha para o Jay por muito tempo.">Maia katsoo Jaytä pitkään.</p>
    <p class="s" data-h="maia" data-pt="Jay, não se mexe! Eu vou te pintar exatamente assim.">Jay, älä liiku! Minä aion maalata sinut juuri näin.</p>
    <p class="s" data-h="jay" data-pt="Com as muletas também?">Kainalosauvat myös?</p>
    <p class="s" data-h="maia" data-pt="Sim. As muletas, a roupa branca e as luzes do Ano-Novo.">Kyllä. Kainalosauvat, valkoiset vaatteet ja uuden vuoden valot.</p>
    <p class="s" data-h="jay" data-pt="Tá bom. Mas no quadro eu estou com uma cerveja.">Hyvä. Mutta taulussa minulla on olut.</p>
    <p class="s" data-h="maia" data-pt="Não está. No quadro você bebe água.">Ei ole. Taulussa sinä juot vettä.</p>
  </div>
  <p>Os fogos duram uns quinze minutos; a festa, a noite toda. E lá no fim da praia, perto do Leme, há agora uma casa redonda e amarela: a casa do Uuno e do Eenok. Às onze ela não estava lá, e ninguém viu caminhão nenhum. O Jay olha a casa, pisca duas vezes e decide que é a falta de cerveja.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Oletteko koskaan olleet…? – Emme ole.</span> = vocês já estiveram…? – não · o perfeito: Gramática 1 · <span class="fi">uutena vuotena</span> = no Ano-Novo (essivo, lição 16)</li>
      <li><span class="fi">Juhla kestää koko yön.</span> = a festa dura a noite toda · <span class="fi">kestää</span> = durar; <span class="fi">koko yön</span> com <span class="fi pala">-n</span>, como <span class="fi">koko päivän</span> (lição 18)</li>
      <li><span class="fi">Minä aion nukkua.</span> = eu pretendo dormir · <span class="fi">aikoa</span> + infinitivo = pretender, vou (fazer)</li>
      <li><span class="fi">Tämä vuosi on ollut hyvä.</span> = este ano foi bom · o ano ainda não acabou: perfeito; <span class="fi">ollut</span> com <span class="fi pala">ll</span> (<span class="fi">olut</span> = cerveja: Pronúncia, abaixo)</li>
      <li><span class="fi">Olemme tehneet paljon yhdessä.</span> = a gente fez muita coisa junto · <span class="fi">yhdessä</span> = juntos</li>
      <li><span class="fi">Eilen sinä kävit päivystyksessä.</span> = ontem você foi ao pronto-atendimento · com <span class="fi">eilen</span>, o passado</li>
      <li><span class="fi">Olen kai ainoa ilman olutta.</span> = acho que sou o único sem cerveja · <span class="fi">kai</span> = acho que, provavelmente · <span class="fi">ilman</span> + partitivo</li>
      <li><span class="fi">En ole koskaan nähnyt näin suurta juhlaa.</span> = eu nunca vi uma festa tão grande · <span class="fi">en ole</span> + particípio = nunca, até agora; na negação, o partitivo</li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="reveillon-copacabana">
  <h2>Exercício: o diálogo A</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Você entendeu o diálogo A?</h3>
    <p class="ohje">Atenção ao tempo da resposta: o que já aconteceu num dia certo vai para o passado (<span class="fi">eilen kävi</span>).</p>
    <div class="valinta" data-oikea="Koko yön.">
      <p class="kysymys"><span class="fi">Kuinka kauan juhla kestää Copacabanalla?</span></p>
      <div class="vaihtoehdot"><button type="button">Tunnin.</button><button type="button">Koko yön.</button><button type="button">Kaksi päivää.</button></div>
    </div>
    <div class="valinta" data-oikea="Nukkua.">
      <p class="kysymys"><span class="fi">Mitä Jay aikoo tehdä heti keskiyön jälkeen?</span></p>
      <div class="vaihtoehdot"><button type="button">Tanssia.</button><button type="button">Juoda olutta.</button><button type="button">Nukkua.</button></div>
    </div>
    <div class="valinta" data-oikea="Päivystyksessä.">
      <p class="kysymys"><span class="fi">Missä Jay kävi eilen?</span></p>
      <div class="vaihtoehdot"><button type="button">Päivystyksessä.</button><button type="button">Belo Horizontessa.</button><button type="button">Lentokoneessa.</button></div>
    </div>
    <div class="valinta" data-oikea="Jouluaatto.">
      <p class="kysymys"><span class="fi">Mikä on ollut Jayn matkan paras päivä?</span></p>
      <div class="vaihtoehdot"><button type="button">Uusi vuosi.</button><button type="button">Jouluaatto.</button><button type="button">Keskiviikko.</button></div>
    </div>
    <div class="valinta" data-oikea="Vettä.">
      <p class="kysymys"><span class="fi">Mitä Jay juo Maian taulussa?</span></p>
      <div class="vaihtoehdot"><button type="button">Olutta.</button><button type="button">Kahvia.</button><button type="button">Vettä.</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="reveillon-copacabana">
  <h2>Bingo de viagem: <span class="fi">Oletko käynyt…?</span></h2>
  <p>Meia-noite e meia. O Jay boceja nas muletas. Para ele não dormir em pé, a Maia tira da bolsa um bingo de viagem que fez no ônibus noturno: cada casa é uma pergunta “você já…?”. Para marcar a casa, a Maia precisa fazer a pergunta certa ou entender a resposta. Uma linha completa é bingo; a cartela inteira, o prêmio.</p>
  <p class="ohje">Toque numa casa e escolha. Veja a quem é a pergunta: a uma pessoa, <span class="fi">Oletko…?</span> (<span class="fi">sinä</span>); aos dois, <span class="fi">Oletteko…?</span> (<span class="fi">te</span>). Nas casas com 👂, ouça a resposta e escolha o que ela quer dizer.</p>
  <div class="bingo" data-otsikko="Oletko käynyt…?" data-laskuri="Casas marcadas" data-bingo="BINGO! Uma linha completa. Continue até a cartela inteira." data-auki="Casa">
    <div class="valinta" data-oikea="Oletko käynyt Belo Horizontessa?" data-ikoni="🏙️" data-kenelle="malu" data-vihje="Marisa: Belo Horizonte?">
      <p class="kysymys">Pergunte à Marisa se ela já esteve em Belo Horizonte.</p>
      <div class="vaihtoehdot"><button type="button">Oletteko käyneet Belo Horizontessa?</button><button type="button">Oletko käynyt Belo Horizontessa?</button><button type="button">Onko hän käynyt Belo Horizontessa?</button></div>
      <p class="s bingo-vastaus" data-h="malu" data-pt="Já. No Natal!">Olen. Jouluna!</p>
    </div>
    <div class="valinta" data-oikea="Oletko nukkunut yöbussissa?" data-ikoni="🚌" data-kenelle="jay" data-vihje="Jay: ônibus noturno?">
      <p class="kysymys">Pergunte ao Jay se ele já dormiu num ônibus noturno.</p>
      <div class="vaihtoehdot"><button type="button">Olenko nukkunut yöbussissa?</button><button type="button">Oletteko nukkuneet yöbussissa?</button><button type="button">Oletko nukkunut yöbussissa?</button></div>
      <p class="s bingo-vastaus" data-h="jay" data-pt="Já. A noite toda!">Olen. Koko yön!</p>
    </div>
    <div class="valinta" data-oikea="Oletteko käyneet Ipanemalla?" data-ikoni="🏖️" data-kenelle="jay,malu" data-vihje="os dois: Ipanema?">
      <p class="kysymys">Pergunte aos dois se eles já estiveram em Ipanema.</p>
      <div class="vaihtoehdot"><button type="button">Oletteko käyneet Ipanemalla?</button><button type="button">Oletko käynyt Ipanemalla?</button><button type="button">Ovatko he käyneet Ipanemalla?</button></div>
      <p class="s bingo-vastaus" data-h="malu" data-pt="Já. Na quarta-feira o Jay foi batata de praia lá.">Olemme. Keskiviikkona Jay oli siellä rantaperuna.</p>
    </div>
    <div class="valinta" data-oikea="Estou há dois dias sem cerveja." data-ikoni="🍺" data-kenelle="jay" data-vihje="Jay: cerveja">
      <p class="kysymys">O Jay suspira. O que ele quer dizer?</p>
      <p class="s" data-h="jay">Olen ollut kaksi päivää ilman olutta.</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">Vou ficar dois dias sem cerveja.</button><button type="button">Estou há dois dias sem cerveja.</button><button type="button">Fiquei dois dias sem cerveja no ano passado.</button></div>
      <p class="s bingo-vastaus" data-h="maia" data-pt="É verdade. Que ótimo, Jay!">Se on totta. <span data-l="hieno#2">Hienoa</span>, Jay!</p>
    </div>
    <div class="valinta" data-oikea="Oletko syönyt mangoa Brasiliassa?" data-ikoni="🥭" data-kenelle="jay" data-vihje="Jay: manga?">
      <p class="kysymys">Pergunte ao Jay se ele já comeu manga no Brasil.</p>
      <div class="vaihtoehdot"><button type="button">Oletko ostanut mangoa Brasiliassa?</button><button type="button">Oletko juonut mangoa Brasiliassa?</button><button type="button">Oletko syönyt mangoa Brasiliassa?</button></div>
      <p class="s bingo-vastaus" data-h="jay" data-pt="Já comi. Dez mangas!">Olen syönyt. Kymmenen mangoa!</p>
    </div>
    <div class="valinta" data-oikea="O Jay ainda não dançou." data-ikoni="💃" data-kenelle="malu" data-vihje="Marisa: dançar">
      <p class="kysymys">A Marisa olha para o Jay e as muletas. O que ela quer dizer?</p>
      <p class="s" data-h="malu">Jay ei ole vielä tanssinut.</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">O Jay não dança.</button><button type="button">O Jay ainda não dançou.</button><button type="button">O Jay não dançou ontem.</button></div>
    </div>
    <div class="valinta" data-oikea="Oletko juonut kahvia tänään?" data-ikoni="☕" data-kenelle="malu" data-vihje="Marisa: café hoje?">
      <p class="kysymys">Pergunte à Marisa se ela já tomou café hoje.</p>
      <div class="vaihtoehdot"><button type="button">Onko hän juonut kahvia tänään?</button><button type="button">Oletteko juoneet kahvia tänään?</button><button type="button">Oletko juonut kahvia tänään?</button></div>
      <p class="s bingo-vastaus" data-h="malu" data-pt="Já. Cinco xícaras!">Olen. Viisi kuppia!</p>
    </div>
    <div class="valinta" data-oikea="Oletteko syöneet tänään?" data-ikoni="🍽️" data-kenelle="jay,malu" data-vihje="os dois: comer hoje?">
      <p class="kysymys">Pergunte aos dois se eles já comeram hoje.</p>
      <div class="vaihtoehdot"><button type="button">Oletko syönyt tänään?</button><button type="button">Oletteko syöneet tänään?</button><button type="button">Olemmeko syöneet tänään?</button></div>
      <p class="s bingo-vastaus" data-h="jay" data-pt="Não. Estou com fome!">Emme ole. Minulla on nälkä!</p>
    </div>
    <div class="valinta" data-oikea="Nunca escrevi um cartão-postal." data-ikoni="✉️" data-kenelle="jay" data-vihje="Jay: cartão-postal">
      <p class="kysymys">A Maia fala de cartões-postais. O que o Jay quer dizer?</p>
      <p class="s" data-h="jay">En ole koskaan kirjoittanut postikorttia.</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">Nunca escrevi um cartão-postal.</button><button type="button">Não escrevi o cartão-postal ontem.</button><button type="button">Vou escrever um cartão-postal.</button></div>
    </div>
    <p class="s bingo-loppu" data-h="jay" data-pt="Bingo! Maia, você perguntou tudo certo. Agora eu vou dormir!">Bingo! Maia, olet kysynyt kaikki oikein. Nyt minä nukun!</p>
  </div>
  <p>Repare na casa de Ipanema: a pergunta vem no perfeito (<span class="fi">Oletteko käyneet…?</span>, “já foram alguma vez?”), mas a resposta da Marisa conta um dia certo e vai para o passado (<span class="fi">Keskiviikkona Jay oli siellä…</span>). A Gramática 1, no fim desta parte, explica a diferença.</p>
</section>

<section class="osio" data-paikka="reveillon-copacabana">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="A noite de Ano-Novo: já, ainda, nunca" data-sanat="juhla,keskiyö,valo,valkoinen,vaate,olut,kainalosauva,jo,vielä,koskaan,kerta,yhdessä"></div>
  <p>As outras palavras da lição estão no <a href="#t19-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="reveillon-copacabana">
  <h2>Exercício: as palavras</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Ligue: o que já aconteceu?</h3>
    <ul class="yhdista">
      <li data-pari="eu já conheci (a pessoa)">olen tavannut</li>
      <li data-pari="você já viu?">oletko nähnyt</li>
      <li data-pari="eu ainda não fui">en ole vielä käynyt</li>
      <li data-pari="nós já fizemos">olemme tehneet</li>
      <li data-pari="vocês já estiveram?">oletteko olleet</li>
      <li data-pari="alguma vez; com negação, nunca">koskaan</li>
      <li data-pari="juntos">yhdessä</li>
      <li data-pari="acho que, provavelmente">kai</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="copacabana-calcadao">
  <h2>Pronúncia: ollut, tullut, mennyt (e não olut!)</h2>
  <p>Duas da manhã, no calçadão, a caminho do hotel. O Jay ainda ri do erro da Maia. Ela quis dizer que o ano foi bom e disse <span class="pala">tämä vuosi on olut hyvä</span>, com um <span class="pala">l</span> só. Mas <span class="fi">olut</span> é cerveja, e um homem sem cerveja desde quarta-feira ouve essa palavra na hora.</p>
  <p>Em <span class="fi">ollut</span>, <span class="fi">tullut</span> e <span class="fi">mennyt</span>, a consoante é <b>dupla</b>. Segure a consoante, como no italiano “bello”: <span class="pala">OL-lut</span>, <span class="pala">TUL-lut</span>, <span class="pala">MEN-nyt</span>. Como se forma o particípio de cada tipo de verbo: Gramática 1, no fim desta parte. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="estado, sido (particípio de olla)">ollut</li>
    <li class="s" data-pt="cerveja">olut</li>
    <li class="s" data-pt="vindo (particípio de tulla)">tullut</li>
    <li class="s" data-pt="ido (particípio de mennä)">mennyt</li>
    <li class="s" data-pt="comido (particípio de syödä)">syönyt</li>
    <li class="s" data-pt="bebido (particípio de juoda)">juonut</li>
    <li class="s" data-pt="Este ano foi bom.">Tämä vuosi on ollut hyvä.</li>
    <li class="s" data-pt="Eu não bebi cerveja.">En ole juonut olutta.</li>
  </ul>
  <div class="saanto">
    <h3>Truque: conte as consoantes</h3>
    <p>Letra dupla, som longo; letra simples, som curto (lição 0). Em <span class="fi">ollut</span>, a língua fica parada no <span class="pala">l</span> um instante; em <span class="fi">olut</span>, passa rápido. E o fim é curto nos dois: <span class="pala">-lut</span>, nunca <span class="pala">-luut</span>. Depois do <span class="pala">t</span> final, pare: nada de vogal, <span class="fi">ollut</span>, não <span class="pala">ollutchi</span>. No plural, a consoante continua dupla: <span class="fi">olleet, tulleet, menneet</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="copacabana-calcadao">
  <h2>Exercício: ouvir</h2>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Ouça: perfeito ou passado? E ollut ou olut?</h3>
    <p class="ohje">Aperte ▶ sem ler. Perfeito: <span class="fi">olla</span> + particípio (<span class="fi">olemme tehneet</span>). Passado: um verbo só, com <span class="fi pala">-i-</span> (<span class="fi">teimme</span>). Nas duas últimas, ouça o <span class="pala">l</span>: longo ou curto?</p>
    <div class="valinta" data-kuuntele="Olemme tehneet paljon yhdessä." data-oikea="perfeito">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">perfeito</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Teimme paljon yhdessä." data-oikea="passado">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">perfeito</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Jay kävi päivystyksessä." data-oikea="passado">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">perfeito</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Oletteko olleet täällä?" data-oikea="perfeito">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">perfeito</button><button type="button">passado</button></div>
    </div>
    <div class="valinta" data-kuuntele="Vuosi on ollut hyvä." data-oikea="ollut (foi, particípio)">
      <p class="kysymys">Que palavra você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">ollut (foi, particípio)</button><button type="button">olut (cerveja)</button></div>
    </div>
    <div class="valinta" data-kuuntele="Taulussa minulla on olut." data-oikea="olut (cerveja)">
      <p class="kysymys">Que palavra você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">ollut (foi, particípio)</button><button type="button">olut (cerveja)</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="copacabana-calcadao">
  <h2>Gramática 1 · O perfeito: <span class="fi">olla</span> + particípio</h2>

  <h3>1. Já fiz: o perfeito</h3>
  <p>Na lição 15 você aprendeu o particípio: <span class="fi">en käynyt</span> (não fui). Com o verbo <span class="fi">olla</span> no presente, o mesmo particípio forma o <b>perfeito</b> (<span class="fi">perfekti</span>): <span class="fi">olen käynyt</span> = já fui, já estive. O <span class="fi">olla</span> muda com a pessoa; o particípio, só com o número: <span class="fi pala">-nut/-nyt</span> no singular, <span class="fi pala">-neet</span> no plural. Aqui o <span class="fi">olla</span> não é “ser” nem “estar”: é só o ajudante, como o “ter” de “tenho feito”. Mas o sentido é “já fui”, não “tenho ido” (ir várias vezes até agora): <span class="fi">olen käynyt</span> = já fui.</p>
  <p><b>O particípio por tipo de verbo</b> (lição 15): nos tipos 1 e 2, <span class="fi pala">n</span> simples (<span class="fi">puhua → puhunut, syödä → syönyt, juoda → juonut</span>); no tipo 3, a consoante fica dupla (<span class="fi">olla → ollut, tulla → tullut, mennä → mennyt, nousta → noussut</span>); nos tipos 4 e 5, <span class="fi pala">nn</span> (<span class="fi">tavata → tavannut, tarvita → tarvinnut</span>).</p>
  <table class="taivutus">
    <tr><th>pessoa</th><th>afirmativo</th><th>negativo</th><th>português</th></tr>
    <tr><td><span class="fi">minä</span></td><td><span class="fi">olen käynyt</span></td><td><span class="fi">en ole käynyt</span></td><td>eu já fui · eu nunca fui, ainda não fui</td></tr>
    <tr><td><span class="fi">sinä</span></td><td><span class="fi">olet käynyt</span></td><td><span class="fi">et ole käynyt</span></td><td>você já foi · nunca foi</td></tr>
    <tr><td><span class="fi">hän</span></td><td><span class="fi">on käynyt</span></td><td><span class="fi">ei ole käynyt</span></td><td>ele, ela já foi · nunca foi</td></tr>
    <tr><td><span class="fi">me</span></td><td><span class="fi">olemme käyneet</span></td><td><span class="fi">emme ole käyneet</span></td><td>nós já fomos · nunca fomos</td></tr>
    <tr><td><span class="fi">te</span></td><td><span class="fi">olette käyneet</span></td><td><span class="fi">ette ole käyneet</span></td><td>vocês já foram · nunca foram</td></tr>
    <tr><td><span class="fi">he</span></td><td><span class="fi">ovat käyneet</span></td><td><span class="fi">eivät ole käyneet</span></td><td>eles, elas já foram · nunca foram</td></tr>
  </table>
  <p><b>Pergunta:</b> <span class="fi pala">-ko/-kö</span> no <span class="fi">olla</span>: <span class="fi">Oletko käynyt? Onko hän nähnyt? Oletteko olleet?</span> <b>Resposta curta:</b> só o <span class="fi">olla</span>: <span class="fi">Olen. – En ole.</span> · <span class="fi">Olemme. – Emme ole.</span></p>
  <p><b>Negação:</b> o <span class="fi">olla</span> fica <span class="fi">ole</span>, como no presente (lição 1): <span class="fi">en ole käynyt</span>. Sem o <span class="fi">ole</span>, a frase é o passado negativo da lição 15: <span class="fi">en käynyt</span> = não fui (num momento certo).</p>
  <p><b><span class="fi">käydä</span>:</b> ir a um lugar e voltar, visitar. O lugar é onde a visita acontece: <span class="fi pala">-ssa</span> ou <span class="fi pala">-lla</span> (onde?), não “para onde”: <span class="fi">Olen käynyt Riossa</span> = já fui ao Rio; <span class="fi">Jay kävi päivystyksessä</span> = o Jay foi ao pronto-atendimento.</p>

  <h3>2. Perfeito ou passado?</h3>
  <p>O português diz “foi” em “o ano foi bom” e em “ontem foi um dia ruim”. O finlandês separa os dois. O <b>perfeito</b> fala de algo até agora, sem dizer quando. O <b>passado</b> (lição 13) fala de um momento que já terminou.</p>
  <table class="taivutus">
    <tr><th>finlandês</th><th>português</th><th>por quê</th></tr>
    <tr><td><span class="fi">Tämä vuosi on ollut hyvä.</span></td><td>Este ano foi bom.</td><td>às onze da noite, o ano ainda não acabou: perfeito</td></tr>
    <tr><td><span class="fi">Eilen oli huono päivä.</span></td><td>Ontem foi um dia ruim.</td><td>ontem já terminou: passado</td></tr>
    <tr><td><span class="fi">Olemme olleet Brasiliassa melkein kaksi viikkoa.</span></td><td>Estamos no Brasil há quase duas semanas.</td><td>começou antes e continua: perfeito</td></tr>
    <tr><td><span class="fi"><span data-l="olla#2">Olimme</span> siellä kaksi viikkoa.</span></td><td>Ficamos lá duas semanas.</td><td>já terminou: passado</td></tr>
  </table>
  <p>Com o perfeito vêm muitas vezes <span class="fi">jo</span> (já), <span class="fi">koskaan</span> (alguma vez; com negação, nunca), <span class="fi">vielä</span> com negação (ainda não: <span class="fi">en ole vielä käynyt</span>) e <span class="fi">kolme kertaa</span> (três vezes até agora). Com um “quando” que já terminou (<span class="fi">eilen, viime viikolla, kaksi päivää sitten, jouluaattona</span>), use o passado.</p>
  <ul class="esim">
    <li class="s" data-pt="Eu nunca vi uma festa tão grande.">En ole koskaan nähnyt näin suurta juhlaa.</li>
    <li class="s" data-pt="O Jay achou uma pedra bonita na praia.">Jay on löytänyt rannalta kauniin kiven.</li>
    <li class="s" data-pt="Na véspera de Natal, o Jay dormiu no sofá.">Jouluaattona Jay nukkui sohvalla.</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> “estou aqui há duas semanas” está no presente em português, mas em finlandês é perfeito: <span class="fi">olen ollut täällä kaksi viikkoa</span>. A frase <span class="fi"><span data-l="olla#2">olen</span> täällä kaksi viikkoa</span> quer dizer outra coisa: vou ficar aqui duas semanas. E na negação o objeto vai para o partitivo, como sempre (lição 12): <span class="fi">olen nähnyt suuren juhlan</span>, mas <span class="fi">en ole nähnyt näin suurta juhlaa</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="copacabana-calcadao">
  <h2>Exercícios: o perfeito</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Perfeito ou passado?</h3>
    <p class="ohje">A palavra de tempo decide. Um “quando” que já terminou (<span class="fi">eilen, jouluaattona, kaksi päivää sitten</span>) pede o passado; algo que continua até agora pede o perfeito.</p>
    <div class="valinta" data-oikea="kävi">
      <p class="kysymys"><span class="fi">Eilen Jay ___ päivystyksessä.</span> <span class="fi" data-ei-kuplaa>(käydä)</span></p>
      <div class="vaihtoehdot"><button type="button">on käynyt</button><button type="button">kävi</button></div>
    </div>
    <div class="valinta" data-oikea="olemme olleet">
      <p class="kysymys"><span class="fi">Me ___ Brasiliassa jo melkein kaksi viikkoa. Lauantaina lennämme kotiin.</span> <span class="fi" data-ei-kuplaa>(olla)</span></p>
      <div class="vaihtoehdot"><button type="button">olemme olleet</button><button type="button">olimme</button></div>
    </div>
    <div class="valinta" data-oikea="söi">
      <p class="kysymys"><span class="fi">Jouluaattona Jay ___ kolme lautasta ruokaa.</span> <span class="fi" data-ei-kuplaa>(syödä)</span></p>
      <div class="vaihtoehdot"><button type="button">söi</button><button type="button">on syönyt</button></div>
    </div>
    <div class="valinta" data-oikea="on ollut">
      <p class="kysymys"><span class="fi">Kello on yksitoista illalla. Tämä vuosi ___ hyvä.</span> <span class="fi" data-ei-kuplaa>(olla)</span></p>
      <div class="vaihtoehdot"><button type="button">on ollut</button><button type="button">oli</button></div>
    </div>
    <div class="valinta" data-oikea="ei ole juonut">
      <p class="kysymys"><span class="fi">Nyt on tammikuun toinen päivä. Jay ___ olutta koko vuonna.</span> <span class="fi" data-ei-kuplaa>(juoda)</span></p>
      <div class="vaihtoehdot"><button type="button">ei juonut</button><button type="button">ei ole juonut</button></div>
    </div>
    <div class="valinta" data-oikea="soitti">
      <p class="kysymys"><span class="fi">Kaksi päivää sitten Maia ___ Purjolle.</span> <span class="fi" data-ei-kuplaa>(soittaa)</span></p>
      <div class="vaihtoehdot"><button type="button">soitti</button><button type="button">on soittanut</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Complete o perfeito</h3>
    <p class="ohje">Escreva a forma que falta: o particípio (<span class="fi pala">-nut/-nyt</span> no singular, <span class="fi pala">-neet</span> no plural) ou o <span class="fi">olla</span> na pessoa certa. O verbo está entre parênteses.</p>
    <div class="aukot" lang="fi-FI">
      <p>Me olemme <span class="aukko" data-oikea="tehneet"></span> paljon yhdessä. <span data-ei-kuplaa>(tehdä)</span></p>
      <p>Oletko <span class="aukko" data-oikea="ollut"></span> koskaan Copacabanalla? <span data-ei-kuplaa>(olla)</span></p>
      <p>Jay ei ole <span class="aukko" data-oikea="juonut"></span> olutta. <span data-ei-kuplaa>(juoda)</span></p>
      <p>Minä olen <span class="aukko" data-oikea="oppinut"></span> vähän portugalia. <span data-ei-kuplaa>(oppia)</span></p>
      <p>Jay ja Marisa, <span class="aukko" data-oikea="oletteko"></span> te käyneet Ipanemalla? <span data-ei-kuplaa>(olla)</span></p>
      <p>Me <span class="aukko" data-oikea="olemme"></span> olleet Brasiliassa melkein kaksi viikkoa. <span data-ei-kuplaa>(olla)</span></p>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Aprofundar e fechar',
      html: `
<ul class="tavoitteet">
  <li>Você reconhece os casos de lugar no plural no cartão da Maia: <span class="fi">rannoilla, kioskeilla, aalloista, järville</span>.</li>
  <li>Você fala de você com o perfeito e o passado: <span class="fi">En ole vielä käynyt Suomessa.</span> × <span class="fi">Eilen luin kirjaa.</span></li>
  <li>Você se despede: <span class="fi">Näkemiin! Kiitos kaikesta!</span></li>
</ul>

<p data-paikka="copacabana-calcadao">Sexta-feira, 1º de janeiro. O Jay dormiu até o meio-dia; a Marisa, segundo ela mesma, não dormiu. À tarde, a Maia compra num quiosque do calçadão um cartão-postal com as ondas de pedra preta e branca e escreve para a Purjo, em Helsinque. Amanhã ela põe o cartão no correio do aeroporto.</p>

<section class="osio" data-paikka="copacabana-calcadao">
  <h2>O cartão-postal para a Purjo</h2>
  <p class="ohje">Vire o cartão e toque numa linha: a Maia lê. Procure as formas do plural com <span class="fi pala">-i-</span>: <span class="fi">rannoilla</span> (nas praias), <span class="fi">kioskeilla</span> (nos quiosques), <span class="fi">aalloista</span> (das ondas), <span class="fi">järville</span> (para os lagos). A Gramática 2, abaixo, mostra a regra.</p>
  <div class="postikortti" data-kuva="copacabana-calcadao" data-otsikko="Kiitos, Brasilia!" data-h="maia" data-osoite="Purjo|Helsinki|Suomi" data-leima="Rio de Janeiro · 2 JAN 2027">
    <p lang="fi-FI" data-puhu="Hei Purjo! Hyvää uutta vuotta Riosta!" data-pt="Oi, Purjo! Feliz Ano-Novo do Rio!">Hei Purjo! Hyvää uutta vuotta Riosta!</p>
    <p lang="fi-FI" data-puhu="Olemme olleet Riossa neljä päivää." data-pt="Estamos no Rio há quatro dias.">Olemme olleet Riossa neljä päivää.</p>
    <p lang="fi-FI" data-puhu="Olemme käyneet Copacabanan ja Ipaneman rannoilla." data-pt="Fomos às praias de Copacabana e de Ipanema.">Olemme käyneet Copacabanan ja Ipaneman rannoilla.</p>
    <p lang="fi-FI" data-puhu="Jay on syönyt mangoa kaikilla kioskeilla." data-pt="O Jay comeu manga em todos os quiosques.">Jay on syönyt mangoa kaikilla kioskeilla.</p>
    <p lang="fi-FI" data-puhu="Hän on ottanut sata kuvaa aalloista ja kivistä." data-pt="Ele tirou cem fotos das ondas e das pedras.">Hän on ottanut sata kuvaa aalloista ja kivistä.</p>
    <p lang="fi-FI" data-puhu="Uutena vuotena koko ranta oli valkoinen." data-pt="No Ano-Novo a praia inteira estava branca.">Uutena vuotena koko ranta oli valkoinen.</p>
    <p lang="fi-FI" data-puhu="Huomenna lennämme kotiin." data-pt="Amanhã voamos para casa.">Huomenna lennämme kotiin.</p>
    <p lang="fi-FI" data-puhu="Kesällä menemme kaikki yhdessä Suomen järville!" data-pt="No verão vamos todos juntos para os lagos da Finlândia!">Kesällä menemme kaikki yhdessä Suomen järville!</p>
    <p lang="fi-FI" data-puhu="Terveisin Maia ja Jay" data-pt="Um abraço, Maia e Jay">Terveisin Maia ja Jay</p>
  </div>
  <p>A Maia escreve <span class="fi">oli</span> para a noite de Ano-Novo, que já terminou (passado), e <span class="fi">olemme olleet</span> para os quatro dias no Rio, que continuam até agora (perfeito). E no verão, como ela promete, a família da Maia vai mesmo aos lagos da Finlândia (lição 20).</p>
</section>

<section class="osio" data-paikka="galeao">
  <h2>Diálogo B: <span class="fi">Näkemiin, Brasilia!</span></h2>
  <p class="ohje">Sábado, 2 de janeiro, aeroporto do Galeão. Ouça primeiro sem tradução. Conte quantas vezes aparece o perfeito (<span class="fi">olla</span> + particípio) e ouça o plural de “onde?”: <span class="fi">monissa kirkoissa</span>. No fim, o alto-falante chama em português.</p>
  <div class="kpl" id="t19-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="É sábado, dia dois de janeiro. A Maia, o Jay e a Marisa estão sentados num café no aeroporto do Rio.">On lauantai, tammikuun toinen päivä. Maia, Jay ja Marisa istuvat kahvilassa Rion lentokentällä.</p>
    <p class="s" data-h="kertoja" data-pt="O voo para Lisboa sai às três. Agora é uma hora.">Lento Lissaboniin lähtee kello kolme. Nyt kello on yksi.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay ainda está de muletas. Ele bebe café, não cerveja.">Jayllä on yhä kainalosauvat. Hän juo kahvia, ei olutta.</p>
    <p class="s" data-h="malu" data-pt="E aí, Jay, o que você aprendeu no Brasil?">No, Jay, mitä sinä olet oppinut Brasiliassa?</p>
    <p class="s" data-h="jay" data-pt="Eu comi muito arroz e feijão.">Minä olen syönyt paljon riisiä ja papuja.</p>
    <p class="s" data-h="maia" data-pt="A gente foi a muitas igrejas. O Jay só olhava as pedras.">Olemme käyneet monissa kirkoissa. Jay katsoi vain kiviä.</p>
    <p class="s" data-h="jay" data-pt="Eu sou geólogo. Esta foi a minha melhor viagem.">Minä olen geologi. Tämä on ollut minun paras matkani.</p>
    <p class="s" data-h="malu" data-pt="E o que você pretende fazer na Finlândia?">Ja mitä sinä aiot tehdä Suomessa?</p>
    <p class="s" data-h="jay" data-pt="Primeiro eu vou dormir. Depois eu vou tomar uma cerveja. Eu não bebi cerveja o ano inteiro.">Ensin minä nukun. Sitten minä aion juoda oluen. Minä en ole juonut olutta koko vuonna.</p>
    <p class="s" data-h="maia" data-pt="O ano tem dois dias, Jay.">Vuosi on kaksi päivää vanha, Jay.</p>
    <p class="s" data-h="jay" data-pt="Depois eu vou aprender português. Quero falar com a família da Maia.">Sitten aion opetella portugalia. Haluan puhua Maian perheen kanssa.</p>
    <p class="s" data-h="malu" data-pt="Boa! Me escreve uma carta em português.">Hyvä! Kirjoita minulle kirje portugaliksi.</p>
    <p class="s" data-h="jay" data-pt="Tá bom. Mas vai ser uma carta curta. Primeiro eu preciso aprender.">Hyvä on. Mutta se on lyhyt kirje. Ensin minun täytyy oppia.</p>
    <p class="s" data-h="maia" data-pt="E você, Marisa? Você já foi à Finlândia?">Entä sinä, Marisa? Oletko sinä käynyt Suomessa?</p>
    <p class="s" data-h="malu" data-pt="Já. Estudei um ano numa escola na Finlândia. E talvez eu volte no verão.">Olen. Olin Suomessa koulussa yhden vuoden. Ja saatan tulla taas kesällä.</p>
    <p class="s" data-h="kertoja" data-pt="Aí a Marisa diz tchau. Ela fala mais dez minutos e diz tchau de novo.">Sitten Marisa sanoo <span lang="pt-BR">tchau</span>. Hän puhuu vielä kymmenen minuuttia ja sanoo taas <span lang="pt-BR">tchau</span>.</p>
    <p class="s" data-h="jay" data-pt="No Brasil, um tchau deve durar uma hora.">Brasiliassa <span lang="pt-BR">tchau</span> kestää varmaan tunnin.</p>
    <p class="s" data-h="lt_kuuluttaja" data-pt="Última chamada para o voo para Lisboa!"><span lang="pt-BR">Última chamada para o voo para Lisboa!</span></p>
    <p class="s" data-h="maia" data-pt="Última chamada para o nosso voo! O tempo passou rápido demais!">Viimeinen kutsu meidän lennolle! Aika on mennyt liian nopeasti!</p>
    <p class="s" data-h="jay" data-pt="Mas a gente tinha muito tempo!">Mutta meillä oli paljon aikaa!</p>
    <p class="s" data-h="maia" data-pt="Tchau, Marisa! Obrigada por tudo!">Näkemiin, Marisa! Kiitos kaikesta!</p>
    <p class="s" data-h="malu" data-pt="Tchau! Voltem!">Näkemiin! Tulkaa takaisin!</p>
    <p class="s" data-h="jay" data-pt="Obrigado, Marisa! A gente vai voltar.">Kiitos, Marisa! Me tulemme takaisin.</p>
    <p class="s" data-h="maia" data-pt="Corre, Jay! O portão é à esquerda!">Juokse, Jay! Portti on vasemmalla!</p>
    <p class="s" data-h="kertoja" data-pt="O Jay corre de muletas. Ele nunca correu tão rápido antes.">Jay juoksee kainalosauvojen kanssa. Hän ei ole koskaan ennen juossut niin nopeasti.</p>
    <p class="s" data-h="kertoja" data-pt="Ele é o último passageiro. O portão fecha logo atrás do Jay.">Hän on viimeinen matkustaja. Portti sulkeutuu heti Jayn takana.</p>
  </div>
  <p>No avião, o Jay encosta as muletas e dorme antes da decolagem, como a Maia mandou na noite de Ano-Novo. A Maia olha pela janela: o Rio fica pequeno, depois o mar, depois as nuvens. Na bolsa dela, o caderno de desenho já tem o primeiro esboço: um homem de branco, de muletas, debaixo das luzes.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Mitä sinä olet oppinut Brasiliassa?</span> = o que você aprendeu no Brasil? · o perfeito: até agora</li>
      <li><span class="fi">Olemme käyneet monissa kirkoissa.</span> = a gente foi a muitas igrejas · <span class="fi">monissa kirkoissa</span>, o plural de <span class="fi">kirkossa</span>: Gramática 2, abaixo; com <span class="fi">käydä</span>, “onde?”</li>
      <li><span class="fi">Tämä on ollut minun paras matkani.</span> = esta foi a minha melhor viagem · <span class="fi pala">-ni</span> = meu, minha (lição 17)</li>
      <li><span class="fi">Minä en ole juonut olutta koko vuonna.</span> = eu não bebi cerveja o ano inteiro · o perfeito negativo; o objeto no partitivo</li>
      <li><span class="fi">Sitten aion opetella portugalia.</span> = depois vou aprender português · <span class="fi">opetella</span> = aprender praticando, estudar</li>
      <li><span class="fi">Kirjoita minulle kirje portugaliksi.</span> = me escreve uma carta em português · <span class="fi">kirje</span> = carta</li>
      <li><span class="fi">Ja saatan tulla taas kesällä.</span> = e talvez eu volte no verão · <span class="fi">saattaa</span> + infinitivo = talvez, pode ser que</li>
      <li><span class="fi">Viimeinen kutsu meidän lennolle! Aika on mennyt liian nopeasti!</span> = última chamada para o nosso voo! o tempo passou rápido demais! · <span class="fi">Näkemiin! Kiitos kaikesta!</span> = tchau! obrigada por tudo!</li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="galeao">
  <h2>Exercício: o cartão e o diálogo B</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>6. Você entendeu o cartão e a despedida?</h3>
    <p class="ohje">Volte ao cartão-postal e ao diálogo B se precisar.</p>
    <div class="valinta" data-oikea="Kaikilla kioskeilla.">
      <p class="kysymys"><span class="fi">Missä Jay on syönyt mangoa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kaikissa busseissa.</button><button type="button">Kaikilla kioskeilla.</button><button type="button">Kaikissa kirkoissa.</button></div>
    </div>
    <div class="valinta" data-oikea="Aalloista ja kivistä.">
      <p class="kysymys"><span class="fi">Mistä Jay on ottanut sata kuvaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Aalloista ja kivistä.</button><button type="button">Kirkoista ja museoista.</button><button type="button">Busseista ja kioskeilta.</button></div>
    </div>
    <div class="valinta" data-oikea="Suomen järville.">
      <p class="kysymys"><span class="fi">Mihin kaikki menevät kesällä?</span></p>
      <div class="vaihtoehdot"><button type="button">Rion rannoille.</button><button type="button">Kirkkoihin ja museoihin.</button><button type="button">Suomen järville.</button></div>
    </div>
    <div class="valinta" data-oikea="Kahvia.">
      <p class="kysymys"><span class="fi">Mitä Jay juo lentokentän kahvilassa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kahvia.</button><button type="button">Olutta.</button><button type="button">Vettä.</button></div>
    </div>
    <div class="valinta" data-oikea="Portugalia.">
      <p class="kysymys"><span class="fi">Mitä Jay aikoo opetella?</span></p>
      <div class="vaihtoehdot"><button type="button">Suomea.</button><button type="button">Portugalia.</button><button type="button">Espanjaa.</button></div>
    </div>
    <div class="valinta" data-oikea="Marisa.">
      <p class="kysymys"><span class="fi">Kuka saattaa tulla Suomeen kesällä?</span></p>
      <div class="vaihtoehdot"><button type="button">Anderson.</button><button type="button">Walker.</button><button type="button">Marisa.</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="galeao">
  <h2>Gramática 2 · Para reconhecer: os casos de lugar no plural (<span class="fi">kirkoissa, rannoilla, järville</span>)</h2>
  <p>Nesta lição você só precisa <b>reconhecer</b> estas formas, no cartão e no diálogo B. No plural, os seis casos de lugar levam <b>-i-</b> antes da terminação, o sinal de plural, o mesmo que aparece no partitivo plural da lição 11 (<span class="fi">kuvia, kiviä</span>): <span class="fi">kirkossa</span> (na igreja) → <span class="fi">kirkoissa</span> (nas igrejas). As terminações <span class="fi pala">-ssa, -sta, -lla, -lta, -lle</span> são as do singular; o “para onde?” dentro muda (<span class="fi">kirkkoon → kirkkoihin</span>).</p>
  <table class="taivutus">
    <tr><th>singular: onde?</th><th>plural: onde?</th><th>de onde?</th><th>para onde?</th></tr>
    <tr><td><span class="fi">kirkossa</span><span class="kaannos" lang="pt-BR">na igreja</span></td><td><span class="fi">kirkoissa</span></td><td><span class="fi">kirkoista</span></td><td><span class="fi">kirkkoihin</span></td></tr>
    <tr><td><span class="fi">kioskilla</span><span class="kaannos" lang="pt-BR">no quiosque</span></td><td><span class="fi">kioskeilla</span></td><td><span class="fi">kioskeilta</span></td><td><span class="fi">kioskeille</span></td></tr>
    <tr><td><span class="fi">kaupungissa</span><span class="kaannos" lang="pt-BR">na cidade</span></td><td><span class="fi">kaupungeissa</span></td><td><span class="fi">kaupungeista</span></td><td><span class="fi">kaupunkeihin</span></td></tr>
    <tr><td><span class="fi">bussissa</span><span class="kaannos" lang="pt-BR">no ônibus</span></td><td><span class="fi">busseissa</span></td><td><span class="fi">busseista</span></td><td><span class="fi">busseihin</span></td></tr>
    <tr><td><span class="fi">järvessä</span><span class="kaannos" lang="pt-BR">no lago</span></td><td><span class="fi">järvissä</span></td><td><span class="fi">järvistä</span></td><td><span class="fi">järviin</span></td></tr>
    <tr><td><span class="fi">rannalla</span><span class="kaannos" lang="pt-BR">na praia</span></td><td><span class="fi">rannoilla</span></td><td><span class="fi">rannoilta</span></td><td><span class="fi">rannoille</span></td></tr>
  </table>
  <p><b>Como reconhecer:</b> procure o <span class="fi pala">-i-</span> antes da terminação. A vogal antes dele pode mudar (<span class="fi">rannoilla, kaupungeissa, järvissä</span>); a bolha da palavra mostra a forma básica. Para onde? dentro: <span class="fi pala">-ihin</span> (<span class="fi">kirkkoihin</span>); <span class="fi pala">-iin</span> quando o <span class="fi pala">i</span> da palavra cai (<span class="fi">järviin, kiviin</span>); fora: <span class="fi pala">-ille</span> (<span class="fi">järville, rannoille</span>).</p>
  <p><b>O adjetivo acompanha</b>, como no singular (lição 12): <span class="fi">monissa kirkoissa</span> = em muitas igrejas, <span class="fi">valkoisissa vaatteissa</span> = de roupa branca (diálogo A). E <span class="fi pala">-ista</span> também é “de, sobre” com fotos e livros, como na lição 6: <span class="fi">kuvia aalloista</span> = fotos das ondas.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o português diz “fomos <b>às</b> igrejas”, e o ouvido pede “para onde?”. Com <span class="fi">käydä</span>, o finlandês usa onde?: <span class="fi">olemme käyneet monissa kirkoissa</span>, não <span class="pala">käyneet kirkkoihin</span>. Com <span class="fi">mennä</span>, sim, para onde?: <span class="fi">menemme järville</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="galeao">
  <h2>Exercício: o plural de lugar</h2>
  <p>Dez da noite, no avião para Lisboa. O Jay acordou e não dorme mais, e a Maia faz com ele um último treino.</p>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. Ouça: onde, de onde ou para onde?</h3>
    <p class="ohje">Aperte ▶ e ouça a palavra no plural. Ouça o fim: <span class="fi pala">-issa/-illa</span> (onde?), <span class="fi pala">-ista/-ilta</span> (de onde?), <span class="fi pala">-ihin/-ille</span> (para onde?).</p>
    <div class="valinta" data-kuuntele="kirkoissa" data-oikea="nas igrejas">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">nas igrejas</button><button type="button">das igrejas</button><button type="button">para as igrejas</button></div>
    </div>
    <div class="valinta" data-kuuntele="kioskeilta" data-oikea="dos quiosques">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">nos quiosques</button><button type="button">para os quiosques</button><button type="button">dos quiosques</button></div>
    </div>
    <div class="valinta" data-kuuntele="busseihin" data-oikea="para os ônibus">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">para os ônibus</button><button type="button">nos ônibus</button><button type="button">dos ônibus</button></div>
    </div>
    <div class="valinta" data-kuuntele="rannoilla" data-oikea="nas praias">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">das praias</button><button type="button">nas praias</button><button type="button">para as praias</button></div>
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
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Réveillon em Copacabana; <span class="fi">uusi vuosi</span> na Finlândia</h3>
  <figure class="kuva" data-kuva="reveillon-copacabana"></figure>
  <p>O Réveillon de Copacabana é uma das maiores festas de Ano-Novo do mundo: perto de dois milhões de pessoas na areia e na avenida. Os fogos saem de balsas no mar e duram uns doze a quinze minutos. Quase todos vão de branco, a cor da paz. Muitos costumes vêm das religiões afro-brasileiras, como o candomblé e a umbanda: flores brancas para Iemanjá, a rainha do mar, e os sete pulos de onda, um pedido para cada onda.</p>
  <p>Na Finlândia, o Ano-Novo cai no meio do inverno, no escuro e no frio. Os fogos são em casa, no quintal ou na rua, e por lei só podem ser usados na noite de 31 de dezembro, das seis da tarde às duas da manhã. Um costume antigo é derreter metal numa panelinha e jogar na água fria: a forma que aparece “conta” o ano novo. Desde 2018 a União Europeia proibiu as ferraduras de chumbo que se usavam para isso, e muita gente agora usa cera ou estanho sem chumbo.</p>
  <ul class="esim">
    <li class="s" data-pt="Em Copacabana há dois milhões de pessoas.">Copacabanalla on kaksi miljoonaa ihmistä.</li>
    <li class="s" data-pt="Todos estão de branco.">Kaikki ovat valkoisissa vaatteissa.</li>
    <li class="s" data-pt="Na Finlândia, o Ano-Novo é uma festa pequena e fria.">Suomessa uusi vuosi on pieni ja kylmä juhla.</li>
  </ul>
</aside>

<section class="osio" data-ei-sivulle data-paikka="galeao">
  <h2>Exercício: falar de você</h2>
  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Responda às perguntas</h3>
    <p class="ohje">Responda sobre você, em voz alta, antes de abrir o modelo. Use o perfeito; para um momento certo, o passado.</p>
    <details class="vastaus"><summary lang="fi-FI">Oletko koskaan käynyt Suomessa?</summary><p class="s" data-pt="Ainda não fui, mas eu gostaria de ir! Parece que lá faz frio.">En ole vielä käynyt, mutta haluaisin! Siellä taitaa olla kylmää.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Oletko koskaan ollut saunassa?</summary><p class="s" data-pt="Já estive. Muitas vezes! É uma sensação maravilhosa.">Olen ollut. Monta kertaa! Se on ihana tunne.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Missä kaupungeissa olet käynyt?</summary><p class="s" data-pt="Já fui a Belo Horizonte e ao Rio.">Olen käynyt Belo Horizontessa ja Riossa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä olet oppinut kurssilla?</summary><p class="s" data-pt="Bem, eu aprendi um pouco de finlandês. É uma língua difícil!">No, olen oppinut vähän suomea. Se on vaikea kieli!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä teit eilen?</summary><p class="s" data-pt="Ontem eu estava lendo um livro e pensando na vida. Só parei de noite.">Eilen luin kirjaa ja mietin elämää. Lopetin vasta yöllä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Aiotko käydä Suomessa?</summary><p class="s" data-pt="Pretendo. Pode ser uma viagem cara, mas a questão não é o dinheiro.">Aion. Se saattaa olla kallis matka, mutta kyse ei ole rahasta.</p></details>
  </div>
</section>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Ootsä käyny…? O perfeito da rua</h3>
  <p>Na fala, <span class="fi">oletko sinä</span> encurta para <span class="fi" data-rekisteri="puhe">ootsä</span>, <span class="fi">olen</span> para <span class="fi" data-rekisteri="puhe">oon</span>, e o particípio perde o <span class="fi pala">-t</span> final, como <span class="fi" data-rekisteri="puhe">syöny</span> na lição 15: <span class="fi">käynyt</span> vira <span class="fi" data-rekisteri="puhe">käyny</span>, <span class="fi">ollut</span> vira <span class="fi" data-rekisteri="puhe">ollu</span>. Você não precisa falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">oletko sinä käynyt</span></td><td><span class="fi" data-rekisteri="puhe">ootsä käyny</span></td><td>você já foi</td></tr>
    <tr><td><span class="fi">minä olen ollut</span></td><td><span class="fi" data-rekisteri="puhe">mä oon ollu</span></td><td>eu já estive</td></tr>
    <tr><td><span class="fi">en ole käynyt</span></td><td><span class="fi" data-rekisteri="puhe">en oo käyny</span></td><td>eu nunca fui</td></tr>
    <tr><td><span class="fi">vain</span></td><td><span class="fi" data-rekisteri="puhe">vaa</span></td><td>só</td></tr>
  </table>
  <p>No sábado de manhã, antes do aeroporto, o Hiisi manda uma mensagem de voz de Helsinque para o Jay, do jeito da rua. O Jay responde do mesmo jeito:</p>
  <p class="s" data-h="hiisi" data-kirja="Oletko sinä käynyt rannalla?" data-pt="Você já foi à praia?">Ootsä käyny rannalla?</p>
  <p class="s" data-h="jay" data-kirja="Olen. Mutta minä olen ollut vain kahvilassa." data-pt="Já. Mas eu só fiquei no café mesmo.">Oon. Mut mä oon ollu ihan vaa kahvilassa.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t19">
    <h3>Lição de casa</h3>
    <p>Escreva, como a Maia, um cartão-postal de uma viagem sua, de verdade ou inventada: seis frases. Três no perfeito (<span class="fi">Olen käynyt…, Olemme nähneet…, En ole vielä…</span>), uma no passado com um “quando” (<span class="fi">Eilen…</span>) e duas sobre o que você viu. Se quiser, copie do cartão da Maia uma forma do plural (<span class="fi">rannoilla, kioskeilla</span>). Termine com <span class="fi">Terveisin</span> e o seu nome. Leia em voz alta, com o <span class="fi pala">ll</span> de <span class="fi">ollut</span> bem longo.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia, no Rio)</summary>
      <p class="s" data-pt="Estou no Rio há quatro dias.">Olen ollut Riossa neljä päivää.</p>
      <p class="s" data-pt="Já fui muitas vezes a Copacabana.">Olen käynyt monta kertaa Copacabanalla.</p>
      <p class="s" data-pt="O Jay ainda não entrou na água.">Jay ei ole vielä käynyt vedessä.</p>
      <p class="s" data-pt="Ontem à noite vimos luzes sobre a água: a festa durou a noite toda.">Eilen illalla näimme valoja veden päällä: juhla kesti koko yön.</p>
      <p class="s" data-pt="Fomos a Ipanema, mas tivemos que ir parar na UPA.">Kävimme Ipanemalla, mutta jouduimme UPA:an.</p>
      <p class="s" data-pt="Acho que o Jay comeu cem mangas. Ele não bebeu cerveja!">Jay on kai syönyt sata mangoa. Hän ei ole juonut olutta!</p>
      <p class="s" data-pt="Um abraço, Maia">Terveisin Maia</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t19">
    <li>Pergunto e respondo com o perfeito: Oletko käynyt…? – Olen. / En ole.</li>
    <li>Formo o perfeito em todas as pessoas: olen tavannut, olemme tehneet, en ole nähnyt.</li>
    <li>Escolho entre perfeito e passado: vuosi on ollut hyvä × eilen kävit päivystyksessä.</li>
    <li>Reconheço os casos de lugar no plural: monissa kirkoissa, rannoilla, kioskeilla, järville.</li>
    <li>Pronuncio a consoante dupla do particípio, ollut, tullut, mennyt, e não digo olut.</li>
    <li>Me despeço: Näkemiin! Kiitos kaikesta!</li>
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
<p><b>Pergunta e resposta curta:</b> <span class="fi">Oletko käynyt Riossa? – Olen. / En ole.</span></p>`
    },
    {
      id: 'perfekti-kielto19', otsikko: 'Ainda não, nunca: en ole käynyt', taso: 'essencial', hakuosa: 'h-perfekti', treeni: 't19-perfekti-kielto',
      html: `
<p><b>Forma:</b> verbo de negação (<span class="fi">en, et, ei, emme, ette, eivät</span>) + <span class="fi">ole</span> + particípio: <span class="fi">en ole käynyt, emme ole nähneet</span>.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">En ole vielä käynyt Suomessa.</span></td><td>Ainda não fui à Finlândia.</td></tr>
  <tr><td><span class="fi">Jay ei ole vielä tanssinut.</span></td><td>O Jay ainda não dançou.</td></tr>
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
  <tr><td><span class="fi">Olen käynyt Riossa.</span></td><td>Já fui ao Rio.</td></tr>
  <tr><td><span class="fi">Kävin Riossa eilen.</span></td><td>Fui ao Rio ontem.</td></tr>
  <tr><td><span class="fi">Olemme olleet täällä kaksi viikkoa.</span></td><td>Estamos aqui há duas semanas.</td></tr>
</table>`
    },
    {
      id: 'monikon-sijat19', otsikko: 'No plural: kirkoissa, rannoilla, järville', taso: 'reconhecer', hakuosa: 'h-monikko', treeni: 't19-monikon-sijat',
      html: `
<p><b>Forma:</b> o radical + <span class="fi pala">-i-</span> + a terminação do singular (o ilativo muda: <span class="fi">kirkkoihin</span>). A consoante fraca em <span class="fi pala">-issa, -ista, -illa…</span>, forte em <span class="fi pala">-ihin</span>.</p>
<table class="taivutus">
  <tr><th>onde?</th><th>de onde?</th><th>para onde?</th></tr>
  <tr><td><span class="fi">kirkoissa</span><span class="kaannos" lang="pt-BR">nas igrejas</span></td><td><span class="fi">kirkoista</span></td><td><span class="fi">kirkkoihin</span></td></tr>
  <tr><td><span class="fi">kaupungeissa</span><span class="kaannos" lang="pt-BR">nas cidades</span></td><td><span class="fi">kaupungeista</span></td><td><span class="fi">kaupunkeihin</span></td></tr>
  <tr><td><span class="fi">rannoilla</span><span class="kaannos" lang="pt-BR">nas praias</span></td><td><span class="fi">rannoilta</span></td><td><span class="fi">rannoille</span></td></tr>
</table>
<p>O adjetivo acompanha: <span class="fi">monissa kirkoissa</span>. Com <span class="fi">käydä</span>, onde?: <span class="fi">käydä kirkoissa</span>.</p>`
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
  <li><b>Com käydä, onde?:</b> <span class="fi">käydä kirkoissa</span> = ir às igrejas.</li>
  <li><b>ollut × olut:</b> dois <span class="pala">l</span> no particípio; um só é cerveja.</li>
  <li><b>Sem vogal no fim:</b> <span class="fi">ollut</span>, não <span class="pala">ollutchi</span>.</li>
</ul>`
    }
  ]
});
