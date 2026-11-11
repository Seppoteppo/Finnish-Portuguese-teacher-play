/* Tottakai, kertaus 3 (k03): Um presente para a Purjo, oppitunnit 11–15 (docs/RUNKO_13_20.md §4: su 27.12.2026;
   OPPITUNNIT_6_20.md §5d; PELILLISTAMINEN §4.1). Oma materiaali, ei kirjan tekstiä. Kertaus ei opeta uutta kielioppia;
   vähintään 95 % sanoista on opetettu oppitunneilla 0–15 (tarkistus: node tottakai/tools/puuttuvat.js k03).
   Kaksi osaa omina sivuinaan (TYONKULKU 11):
   - osa A (#k03, ”Parte A · Revisão na Savassi”): Kapybaran ja Manaatin kylpyläkohtaus portugaliksi; Purjo soittaa kello
     kuusi aamulla Belo Horizonten aikaa (.saapuva + lukittu dialogi ass/luonnokset/k03-a-1_lopullinen.md, omistaja
     7.11.2026: aikaerovitsi, rallienglanti lang="en", Purjo kuulee lauantaista ja järkyttyy, kielteinen imperfekti,
     Voisitteko…?, te-käsky ja -kielto, maailman paras); Marisa ajaa iltapäivällä Praça da Libertaden ohi Savassiin;
     kauppadialogi (lukittu k03-a-2_lopullinen.md: kumpi, vertailu, monikon partitiivi, objekti, postpositio, Voisitko…?,
     kielteinen imperfekti, Jayn oikea obrigado, Marisan hoono soomi data-hairio); Frases prontas ja linkki Gramática da
     lição -sivulle (REVIEW R21); tehtävät 1–3, osio ”O quiz da Purjo” (omistaja 7.11.2026: korvaa entisen kertauskorttiosoittimen; Purjo soittaa
     iltakuudelta ja kysyy viisi kysymystä pelastuksesta, valinta imperfektissä; katkaisee tehtäväputken, siksi
     kulttuuri jäi osaan B eikä siirtynyt RUNKO §4.6:n mukaan), tehtävät 4–5 (5 = entiset 5 ja 6 yhdistettynä, omistaja
     7.11.2026), Na rua -tunnistus (tehtävä 6), kotitehtävä ja ”Eu sei”-lista.
   - osa B (#k03-b, ”Parte B · A luta final”): kylpyläkohtaus Missä lasit ovat? (lukittu k03-b-1_lopullinen.md,
     .kpl.kasvokkain, Capivara = kertoja: lasit jääkaapissa, epämääräinen otus, ”Kysyn vain, Maia: osaatko jo
     paikallissijoja?”), lämmittely kuudella paikallissijalla (tehtävä 7), ”Socorro!” (.pomo-lahja, kapeat
     tummanpunaiset lasit LASIT.k03), pomotaistelu Paikallissijojen kraken (assets/pomo.js) ja kulttuuri (tupaantuliaiset
     ja chá de casa nova, kuva savassi). Ei pomospoilereita ennen ”Socorro!”-osiota (omistaja).
   Suomea puhuvat Maia, Jay, Purjo, Marisa (hoono soomi) ja kertoja; myyjä ei puhu. Kirjakieli kaikkialla; puhekieli vain
   Na rua -nurkassa. Omistajan lukittuihin teksteihin vain pakolliset pienet korjaukset (raportoitu ass/oppitunnit/k03.md). */
Kurssi.lisaa({
  id: 'k03',
  lyhyt: 'R3',
  jakso: 'Revisão 11–15',
  otsikko: 'Um presente para a Purjo: revisão das lições 11–15',
  lahde: 'Revisão: comparativo e superlativo (halvempi, kallein, maailman paras), partitivo plural, o objeto (-n, -t, partitivo) e o adjetivo junto, o passado (heräsin, oli), ordens para vocês (Kuunnelkaa! Älkää menkö!) e posposições (ikkunan vieressä), o passado negativo (en nukkunut) e o condicional educado (Voisitko…?, voisitteko) · Parte B: os óculos do Capivara e a luta final',
  aiheet: ['raha', 'ominaisuus', 'aika', 'koti'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; procura um presente para a casa nova da Purjo' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; quer o presente bom e barato, e desta vez diz “obrigado”' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; liga de Helsinque e nunca lembra da diferença de horário' },
    malu: { nimi: 'Marisa', tyyppi: 'nainen', vaihto: 5, kuvaus: 'amiga da Maia; estudou na Finlândia, fala um finlandês quebrado que funciona e dirige devagar' }
  },

  // Kertauksen sanasto: oppituntien 11–15 tärkeimmät sanat (sanastosivu ja visa) ja kertauksen omat uudet sanat.
  sanasto: [
    'kumpi', 'kuin', 'yhtä', 'kaikkein', 'halpa', 'kallis', 'parempi', 'paras', 'maailma', 'real', 'hedelmä', 'makkara',
    'vaate', 'paita', 'housu', 'shortsi', 'lippis', 'myyjä', 'sovituskoppi', 'peili', 'kuppi', 'maljakko', 'tyyny', 'myydä', 'sovittaa',
    'herätä', 'jakaa', 'keittää', 'jutella', 'posti', 'naapuri', 'eilen', 'viime viikolla', 'päivää sitten', 'koko', 'vihdoin',
    'oikealle', 'vasemmalle', 'suoraan', 'kääntyä', 'keskusta', 'katu', 'kulma', 'aukio', 'kirkko', 'pankki',
    'edessä', 'takana', 'vieressä', 'lähellä', 'luona', 'kautta',
    'jouluaatto', 'joulupukki', 'joulukuusi', 'lahja', 'kinkku', 'kalkkuna', 'täynnä', 'hakea', 'kattaa', 'mukava',
    'lamppu', 'Savassi', 'tavallinen', 'jääkaappi'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Revisão na Savassi',
      html: `
<ul class="tavoitteet">
  <li>Parte A: uma ligação às seis da manhã e uma compra na Savassi, só com o que você já aprendeu; cinco perguntas da Purjo, uma prova curta de escuta e cinco exercícios mistos. O quadro das lições 11 a 15 está na Gramática da lição.</li>
  <li>Parte B: o Capivara procura os óculos de sol dele, e alguém viu uma criatura perto do rio.</li>
</ul>

<section class="osio">
  <h2>De volta ao Spa do Capivara</h2>
  <p><span class="ryhma" data-hahmot="kertoja,manaatti"></span></p>
  <p><b>Capivara:</b> Spa de novo! Água quente, mandarina na cabeça e mais cinco lições para revisar, da 11 à 15. Eu lembro de todas. A 11 tinha banana. A 13 tinha bolo. A 15 tinha um Jay amarrado numa cadeira. As do meio tinham roupa, o passado e uma festa na rua.</p>
  <p><b>Peixe-boi:</b> Revisão logo depois do Natal. Comida demais, lição nova nenhuma. É a semana perfeita.</p>
  <p><b>Capivara:</b> Hoje é domingo, 27 de dezembro. A Maia, o Jay e a Marisa vão à Savassi comprar um presente para o apartamento novo da Purjo. Mas antes a Purjo liga. Às seis da manhã. Depois você mostra o que sabe. E na parte B… eu perco uma coisa muito importante. Não vou dizer o quê.</p>
  <p><b>Peixe-boi:</b> Uma coisa importante? Da última vez era a mandarina. Estava na cabeça dele.</p>
</section>

<p data-paikka="bh-bairro">Domingo, 27 de dezembro, seis horas da manhã. Na casa dos pais da Maia, todo mundo dorme: depois do sábado, da busca e do resgate do Jay, até o Walker ficou na cama. O celular da Maia toca. Na tela: Purjo. Em Helsinque já são onze horas. A diferença é de cinco horas, e a Purjo nunca lembra. E ela ainda não sabe o que aconteceu no sábado.</p>

<section class="osio" data-paikka="bh-bairro">
  <h2>A ligação: <span class="fi">Kello on kuusi aamulla!</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure: um passado negativo (<span class="fi pala">en …-nut</span>), um pedido educado (<span class="fi">Voisitteko…?</span>), uma ordem para vocês e um superlativo.</p>
  <div class="saapuva" data-dialogi="k03-puhelu" data-h="purjo" data-soittaja="Purjo"></div>
  <div class="kpl" id="k03-puhelu" data-nimi="Ouvir a ligação">
    <p class="s" data-h="purjo" data-pt="Bom dia, querida! Good morning!">Huomenta, kulta! <span class="pala" lang="en">Kuut mooning!</span></p>
    <p class="s" data-h="maia" data-pt="Purjo, são seis horas da manhã. Aqui todo mundo está dormindo.">Purjo, kello on kuusi aamulla. Täällä kaikki nukkuvat.</p>
    <p class="s" data-h="purjo" data-pt="Ai, desculpa! Eu não dormi de noite. O apartamento novo está tão vazio. E ontem eu liguei para o Jay muitas vezes. Por que ele não atendeu?">Voi, anteeksi! Minä en nukkunut yöllä. Uusi asunto on niin tyhjä. Ja eilen <span data-l="soittaa:imperf.1s">soitin</span> Jaylle monta kertaa. Miksi hän ei vastannut?</p>
    <p class="s" data-h="maia" data-pt="O Jay não podia atender, Purjo.">Jay ei voinut vastata, Purjo.</p>
    <p class="s" data-h="jay" data-pt="No sábado eu estava na festa. Depois acordei numa cadeira. Bem normal.">Lauantaina olin juhlissa. Sitten heräsin tuolissa. Aivan tavallista.</p>
    <p class="s" data-h="maia" data-pt="O Jay não está contando tudo. Ele estava bêbado. Ele não voltou para casa. Um homem baixinho pegou ele e levou para uma casa no morro. Lá o Jay ficou sentado no porão, amarrado numa cadeira.">Jay ei kerro kaikkea. Hän oli humalassa. Hän ei tullut kotiin. Pieni mies otti hänet ja vei hänet taloon mäelle. Siellä Jay istui kellarissa, kiinni tuolissa.</p>
    <p class="s" data-h="purjo" data-pt="Pegou? No porão? Amarrado?">Otti? Kellarissa? Kiinni?</p>
    <p class="s" data-h="maia" data-pt="O Marcus queria colocar o Jay no micro-ondas, mas o micro-ondas era pequeno demais.">Marcus halusi laittaa Jayn mikroaaltouuniin, mutta mikroaaltouuni oli liian pieni.</p>
    <p class="s" data-h="purjo" data-pt="O quê? No micro-ondas? Oh my God! Oh my God!">Mitä? Mikroaaltouuniin? <span class="pala" lang="en">Oh mai kaad! Oh mai kaad!</span></p>
    <p class="s" data-h="kertoja" data-pt="Por um momento a Purjo não consegue falar. Ela senta na única cadeira do apartamento.">Purjo ei voi puhua hetkeen. Hän istuu asunnon ainoalle tuolille.</p>
    <p class="s" data-h="jay" data-pt="Agora está tudo bem, mãe.">Nyt kaikki on hyvin, äiti.</p>
    <p class="s" data-h="maia" data-pt="O Anderson veio. Ele conhecia a casa e os cachorros. A vizinha abriu a porta dos fundos, e o Jay saiu correndo com a cadeira.">Anderson tuli. Hän tunsi talon ja koirat. Naapuri avasi oven talon takana ja Jay juoksi ulos tuolin kanssa.</p>
    <p class="s" data-h="purjo" data-pt="Com a cadeira… Está bem. Vocês estão em casa agora e está tudo bem.">Tuolin kanssa… Hyvä on. Te olette nyt kotona ja kaikki on hyvin.</p>
    <p class="s" data-h="purjo" data-pt="Mas escutem agora! Não saiam de noite. E vocês poderiam me ligar todo dia? E vocês poderiam dizer obrigada ao Anderson? Ele é o melhor do mundo!">Mutta kuunnelkaa nyt! Älkää menkö yöllä ulos. Ja voisitteko soittaa minulle joka päivä? Ja voisitteko sanoa Andersonille kiitos? Hän on maailman paras!</p>
    <p class="s" data-h="jay" data-pt="A gente diz, mãe. Mas não liga às seis da manhã.">Me sanomme, äiti. Mutta älä soita kello kuusi aamulla.</p>
    <p class="s" data-h="purjo" data-pt="Está bem. Vou ficar mais um pouco sentada nesta cadeira. Eu amo vocês! Bye bye!">Hyvä on. Minä istun vielä vähän tässä tuolissa. Minä rakastan teitä! <span class="pala" lang="en">Bai bai!</span></p>
    <p class="s" data-h="kertoja" data-pt="A Maia e o Jay não dormem mais.">Maia ja Jay eivät nuku enää.</p>
  </div>
</section>

<p data-paikka="praca-da-liberdade">A Maia fica olhando para o teto. A Purjo está sozinha num apartamento vazio em Helsinque, com uma cama e uma cadeira, e agora com essa notícia. Às dez a Maia manda uma mensagem para a Marisa: <span lang="pt-BR">“Você leva a gente na Savassi à tarde? Precisamos de um presente para a casa da Purjo.”</span> A Marisa, claro, leva. Devagar. No caminho ela passa pela Praça da Liberdade, com o chafariz e as palmeiras, e para num shopping pequeno na Savassi.</p>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Exercícios: comparar, ler e o objeto</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Mais e o mais: -mpi e -in</h3>
    <p class="ohje">Escreva o comparativo (<span class="fi pala">-mpi</span>) ou o superlativo (<span class="fi pala">-in</span>) da palavra entre parênteses, ou a palavra de “tão … quanto”. Lembre: <span class="fi">hyvä → parempi → paras</span>; <span class="fi">yhtä … kuin</span> = tão … quanto.</p>
    <div class="aukot" lang="fi-FI">
      <p>Maljakko on <span class="aukko" data-oikea="kauniimpi"></span> kuin tyyny. <span data-ei-kuplaa lang="pt-BR">(kaunis, mais)</span></p>
      <p>Tyyny on <span class="aukko" data-oikea="halvempi"></span> kuin maljakko. <span data-ei-kuplaa lang="pt-BR">(halpa, mais)</span></p>
      <p>Se on kaupan <span class="aukko" data-oikea="kallein"></span> maljakko. <span data-ei-kuplaa lang="pt-BR">(kallis, o mais)</span></p>
      <p>Anderson on maailman <span class="aukko" data-oikea="paras"></span>! <span data-ei-kuplaa lang="pt-BR">(hyvä, o mais)</span></p>
      <p>Tyyny on <span class="aukko" data-oikea="pienempi"></span> kuin lamppu. <span data-ei-kuplaa lang="pt-BR">(pieni, mais)</span></p>
      <p>Mercado Central on <span class="aukko" data-oikea="isompi"></span> kuin Hakaniemen kauppahalli. <span data-ei-kuplaa lang="pt-BR">(iso, mais)</span></p>
      <p>Banaani on kaikkein <span class="aukko" data-oikea="halvin"></span>. <span data-ei-kuplaa lang="pt-BR">(halpa, o mais)</span></p>
      <p>Lamppu on <span class="aukko" data-oikea="yhtä"></span> kaunis kuin maljakko. <span data-ei-kuplaa lang="pt-BR">(tão … quanto)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>2. Leia as mensagens da Purjo</h3>
    <p class="ohje">Às cinco da tarde, em Helsinque já são dez da noite. A Purjo escreve de novo. Leia e responda.</p>
    <div class="chat" data-otsikko="Purjo" data-paiva="sunnuntai" data-mina="maia">
      <p data-h="purjo" data-aika="17.02" data-pt="Maia! O que vocês fizeram hoje?">Maia! Mitä te teitte tänään?</p>
      <p data-h="maia" data-aika="17.05" data-pt="A gente estava na Savassi com a Marisa. Compramos uma surpresa para você.">Olimme Savassissa Marisan kanssa. Ostimme sinulle yllätyksen.</p>
      <p data-h="purjo" data-aika="17.06" data-pt="Uma surpresa? O que é?">Yllätyksen? Mikä se on?</p>
      <p data-h="maia" data-aika="17.08" data-pt="Eu não conto! A gente não comprou o vaso: ele era caro demais.">En kerro! Emme ostaneet maljakkoa: se oli liian kallis.</p>
      <p data-h="purjo" data-aika="17.09" data-pt="Você poderia mandar uma foto?">Voisitko lähettää kuvan?</p>
      <p data-h="maia" data-aika="17.11" data-pt="Não posso! É surpresa. Mas o Jay mandou uma foto da loja.">En voi! Se on yllätys. Mutta Jay lähetti kuvan kaupasta.</p>
      <p data-h="purjo" data-aika="17.12" data-pt="(em “inglês de rali”:) Que bonito! E onde está o Jay agora?"><span class="pala" lang="en">Sou pjuutiful!</span> Missä Jay on nyt?</p>
      <p data-h="maia" data-aika="17.14" data-pt="Ele está em casa. Está dormindo no sofá, ao lado da janela.">Hän on kotona. Hän nukkuu sohvalla ikkunan vieressä.</p>
    </div>
    <div class="valinta" data-oikea="Savassissa.">
      <p class="kysymys"><span class="fi">Missä Maia ja Jay olivat tänään?</span></p>
      <div class="vaihtoehdot"><button type="button">Savassiin.</button><button type="button">Savassissa.</button><button type="button">Savassista.</button></div>
    </div>
    <div class="valinta" data-oikea="Maljakkoa.">
      <p class="kysymys"><span class="fi">Mitä he eivät ostaneet?</span></p>
      <div class="vaihtoehdot"><button type="button">Maljakkoa.</button><button type="button">Lamppua.</button><button type="button">Tyynyä.</button></div>
    </div>
    <div class="valinta" data-oikea="Kuvan.">
      <p class="kysymys"><span class="fi">Mitä Purjo haluaa?</span> (o que ela pede com <span class="fi">voisitko</span>)</p>
      <div class="vaihtoehdot"><button type="button">Lahjan.</button><button type="button">Kuvan.</button><button type="button">Kakun.</button></div>
    </div>
    <div class="valinta" data-oikea="Ikkunan vieressä.">
      <p class="kysymys"><span class="fi">Missä sohva on?</span></p>
      <div class="vaihtoehdot"><button type="button">Ikkunan takana.</button><button type="button">Ikkunan vieressä.</button><button type="button">Ikkunan edessä.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. O objeto: inteiro ou parte?</h3>
    <p class="ohje">Escolha a forma certa. Entre parênteses está o que a frase quer dizer. Negação: partitivo. Parte, quantidade ou ação em andamento: partitivo. Verbos como <span class="fi">katsoa</span> (olhar) e <span class="fi">odottaa</span> (esperar) quase sempre pedem partitivo (lição 12). Senão, inteiro: <span class="fi pala">-n</span> ou <span class="fi pala">-t</span>.</p>
    <div class="valinta" data-oikea="lampun">
      <p class="kysymys"><span class="fi">Jay ostaa ___.</span> (ele compra a luminária)</p>
      <div class="vaihtoehdot"><button type="button">lamppua</button><button type="button">lampun</button><button type="button">lamppu</button></div>
    </div>
    <div class="valinta" data-oikea="maljakkoa">
      <p class="kysymys"><span class="fi">Emme osta ___.</span> (não compramos o vaso)</p>
      <div class="vaihtoehdot"><button type="button">maljakkoa</button><button type="button">maljakon</button><button type="button">maljakko</button></div>
    </div>
    <div class="valinta" data-oikea="tyynyt">
      <p class="kysymys"><span class="fi">Myyjä pakkaa ___.</span> (as almofadas, todas)</p>
      <div class="vaihtoehdot"><button type="button">tyynyjä</button><button type="button">tyynyn</button><button type="button">tyynyt</button></div>
    </div>
    <div class="valinta" data-oikea="tyynyä">
      <p class="kysymys"><span class="fi">Otamme kaksi ___.</span> (duas almofadas)</p>
      <div class="vaihtoehdot"><button type="button">tyynyt</button><button type="button">tyynyä</button><button type="button">tyynyn</button></div>
    </div>
    <div class="valinta" data-oikea="lamppua">
      <p class="kysymys"><span class="fi">Jay katsoo ___.</span> (ele está olhando a luminária)</p>
      <div class="vaihtoehdot"><button type="button">lamppua</button><button type="button">lampun</button><button type="button">lamput</button></div>
    </div>
    <div class="valinta" data-oikea="tauluja">
      <p class="kysymys"><span class="fi">Maia myy ___.</span> (ela vende quadros, em geral)</p>
      <div class="vaihtoehdot"><button type="button">taulut</button><button type="button">tauluja</button><button type="button">taulun</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>O quiz da Purjo</h2>
  <p>Às seis da tarde a Purjo liga de novo, desta vez numa hora decente, pelo menos em Belo Horizonte (em Helsinque já são onze da noite). Ela quer ouvir a história do sábado mais uma vez, bem devagar, e faz cinco perguntas rápidas.</p>
  <p class="ohje">Escolha a resposta da Maia, no passado.</p>
  <div class="valinta" data-oikea="Hän oli Marcuksen kellarissa.">
    <p class="kysymys"><b>Purjo:</b> <span class="pala" lang="en">Kvis taim!</span> <span class="fi">Missä Jay oli?</span></p>
    <div class="vaihtoehdot"><button type="button">Hän on Marcuksen kellarissa.</button><button type="button">Hän oli Marcuksen kellarissa.</button><button type="button">Hän oli Marcuksen keittiössä.</button></div>
  </div>
  <div class="valinta" data-oikea="Naapuri avasi sen.">
    <p class="kysymys"><b>Purjo:</b> <span class="fi">Kuka avasi oven talon takana?</span></p>
    <div class="vaihtoehdot"><button type="button">Naapuri avasi sen.</button><button type="button">Marcus avasi sen.</button><button type="button">Naapuri avaa sen.</button></div>
  </div>
  <div class="valinta" data-oikea="Anderson tunsi ne.">
    <p class="kysymys"><b>Purjo:</b> <span class="fi">Kuka tunsi koirat?</span></p>
    <div class="vaihtoehdot"><button type="button">Anderson tuntee ne.</button><button type="button">Jay tunsi ne.</button><button type="button">Anderson tunsi ne.</button></div>
  </div>
  <div class="valinta" data-oikea="Hän juoksi ulos tuolin kanssa.">
    <p class="kysymys"><b>Purjo:</b> <span class="fi">Miten Jay lähti talosta?</span></p>
    <div class="vaihtoehdot"><button type="button">Hän käveli ulos tuolin kanssa.</button><button type="button">Hän juoksi ulos tuolin kanssa.</button><button type="button">Hän juoksee ulos tuolin kanssa.</button></div>
  </div>
  <div class="valinta" data-oikea="Ei, Marisa ajoi.">
    <p class="kysymys"><b>Purjo:</b> <span class="fi">Kuka ajoi autoa? Hiisi?</span></p>
    <div class="vaihtoehdot"><button type="button">Ei, Marisa ajaa.</button><button type="button">Kyllä, Hiisi ajoi.</button><button type="button">Ei, Marisa ajoi.</button></div>
  </div>
  <p>Se algum ponto das lições 11 a 15 ainda estiver fraco antes da prova de escuta, o cartão dele está na <a href="#k03-gramatica">Gramática da lição</a>.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Exercícios: escuta, o passado e conversa</h2>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Prova de escuta</h3>
    <p class="ohje">Cinco sons das lições 11 a 15. Você ouve só a forma, nada mais. Aperte ▶ e escolha o que ouviu.</p>
    <div class="valinta" data-kuuntele="halvin" data-oikea="halvin">
      <p class="kysymys">Lição 11 · barato, mais barato ou o mais barato?</p>
      <div class="vaihtoehdot"><button type="button">halpa</button><button type="button">halvempi</button><button type="button">halvin</button></div>
    </div>
    <div class="valinta" data-kuuntele="lampun" data-oikea="lampun">
      <p class="kysymys">Lição 12 · inteira, parte ou todas?</p>
      <div class="vaihtoehdot"><button type="button">lampun</button><button type="button">lamppua</button><button type="button">lamput</button></div>
    </div>
    <div class="valinta" data-kuuntele="tuli" data-oikea="tuli">
      <p class="kysymys">Lição 13 · presente ou passado?</p>
      <div class="vaihtoehdot"><button type="button">tulee</button><button type="button" data-l="tulla:imperf.3s">tuli</button></div>
    </div>
    <div class="valinta" data-kuuntele="menkää" data-oikea="menkää">
      <p class="kysymys">Lição 14 · para você ou para vocês?</p>
      <div class="vaihtoehdot"><button type="button">mene</button><button type="button">menkää</button></div>
    </div>
    <div class="valinta" data-kuuntele="en nukkunut" data-oikea="en nukkunut">
      <p class="kysymys">Lição 15 · presente ou passado?</p>
      <div class="vaihtoehdot"><button type="button">en nuku</button><button type="button">en nukkunut</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>5. O passado: escreva e diga</h3>
    <p class="ohje">Primeiro escreva o verbo no passado, na pessoa certa. Com <b>negativo</b> entre parênteses, escreva também o verbo de negação: <span class="fi">en nukkunut, emme ostaneet</span>. No tipo 1, eu e você com a consoante fraca: <span class="fi">nukuin, otit</span>. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Sitten minä <span class="aukko" data-oikea="heräsin"></span> tuolissa. <span data-ei-kuplaa>(herätä)</span></p>
      <p>Lauantaina minä <span class="aukko" data-oikea="nukuin"></span> huonosti. <span data-ei-kuplaa>(nukkua)</span></p>
      <p>Sinä <span class="aukko" data-oikea="otit"></span> lampun ja kaksi tyynyä. <span data-ei-kuplaa>(ottaa)</span></p>
      <p>Purjo <span class="aukko" data-oikea="ei nukkunut"></span> yöllä. <span data-ei-kuplaa lang="pt-BR">(nukkua, negativo)</span></p>
      <p>Jay <span class="aukko" data-oikea="ei kertonut"></span> kaikkea. <span data-ei-kuplaa lang="pt-BR">(kertoa, negativo)</span></p>
    </div>
    <p class="ohje">Agora responda em voz alta, no passado, antes de abrir o modelo.</p>
    <details class="vastaus"><summary lang="fi-FI">Kumpi oli halvempi, maljakko vai tyyny?</summary><p class="s" data-pt="A almofada era mais barata que o vaso.">Tyyny oli halvempi kuin maljakko.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä te ostitte tänään?</summary><p class="s" data-pt="Compramos uma luminária e duas almofadas.">Ostimme lampun ja kaksi tyynyä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Ostitteko te maljakon?</summary><p class="s" data-pt="Não compramos. Ele era caro demais.">Emme ostaneet. Se oli liian kallis.</p></details>
  </div>
</section>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Ouvido da rua: ku, tän, me oltiin, mee</h3>
  <p>Nas lições 11 a 15 vieram mais formas da língua falada. Você <b>não precisa</b> falar assim; o importante é <b>reconhecer</b>.</p>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. O que a pessoa disse, em padrão?</h3>
    <p class="ohje">Ouça (ou leia) a frase da rua e escolha a mesma frase na língua padrão.</p>
    <div class="valinta" data-kuuntele="Tää on parempi ku toi." data-oikea="Tämä on parempi kuin tuo.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Tää on parempi ku toi.</span></p>
      <div class="vaihtoehdot"><button type="button">Tuo on parempi kuin tämä.</button><button type="button">Tämä on parempi kuin tuo.</button><button type="button">Tämä on halvempi kuin tuo.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mä otan tän." data-oikea="Minä otan tämän.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Mä otan tän.</span></p>
      <div class="vaihtoehdot"><button type="button">Minä otan tämän.</button><button type="button">Minä otan tuon.</button><button type="button">Sinä otat tämän.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Me oltiin Savassissa." data-oikea="Me olimme Savassissa.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Me oltiin Savassissa.</span></p>
      <div class="vaihtoehdot"><button type="button">Me olemme Savassissa.</button><button type="button">Te olitte Savassissa.</button><button type="button">Me olimme Savassissa.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mee suoraan!" data-oikea="Mene suoraan!">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Mee suoraan!</span></p>
      <div class="vaihtoehdot"><button type="button">Mene suoraan!</button><button type="button">Menkää suoraan!</button><button type="button">Menen suoraan.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mä en syöny kinkkuu." data-oikea="Minä en syönyt kinkkua.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Mä en syöny kinkkuu.</span></p>
      <div class="vaihtoehdot"><button type="button">Minä en syö kinkkua.</button><button type="button">Minä en syönyt kinkkua.</button><button type="button">Me emme syöneet kinkkua.</button></div>
    </div>
  </div>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Para terminar a parte A</h2>
  <div class="kotitehtava" data-id="k03">
    <h3>Lição de casa</h3>
    <p>Escreva uma mensagem para a Purjo em seis frases: onde você estava hoje (<span class="fi">Tänään olin…</span>), o que comprou (objeto inteiro, <span class="fi pala">-n</span>), o que não comprou (<span class="fi">en ostanut</span> + partitivo), uma comparação (<span class="fi">… on halvempi kuin …</span>), uma coisa de ontem (<span class="fi">Eilen…</span>) e um pedido educado (<span class="fi">Voisitko…?</span>). Leia em voz alta.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Oi, Purjo! Hoje a gente estava na Savassi.">Hei Purjo! Tänään olimme Savassissa.</p>
      <p class="s" data-pt="Compramos um presente para você.">Ostimme sinulle lahjan.</p>
      <p class="s" data-pt="Não compramos o vaso: ele era caro demais.">Emme ostaneet maljakkoa: se oli liian kallis.</p>
      <p class="s" data-pt="A luminária era mais barata que o vaso.">Lamppu oli halvempi kuin maljakko.</p>
      <p class="s" data-pt="Ontem o Anderson foi um herói.">Eilen Anderson oli sankari.</p>
      <p class="s" data-pt="Você poderia mandar uma foto do apartamento novo?">Voisitko lähettää kuvan uudesta asunnosta?</p>
    </details>
  </div>

  <h3>Eu sei: o que você aprendeu nas lições 11 a 15</h3>
  <p class="ohje">A lista junta as autoavaliações das lições. Marque com sinceridade: o que ainda não está firme, revise na lição indicada antes da lição 16.</p>
  <ul class="itsearvio" data-id="k03">
    <li>Comparo com -mpi e kuin, e digo o mais: halvempi kuin…, halvin, paras, maailman paras (lição 11).</li>
    <li>Uso kumpi entre dois e yhtä … kuin para “tão … quanto” (lição 11).</li>
    <li>Peço várias coisas com o partitivo plural e uso o singular depois de número: banaaneja, kaksi banaania (lição 11).</li>
    <li>Escolho a forma do objeto: Ostan tämän paidan. Ostan shortsit. En osta takkia. Katson taulua. (lição 12)</li>
    <li>Ponho o adjetivo no mesmo caso do substantivo: sinisessä paidassa, isossa kaupassa (lição 12).</li>
    <li>Sei os nomes das roupas e entendo preços em reais: kaksisataa realia (lição 12).</li>
    <li>Conto o que fiz, com o radical certo: heräsin, osti, antoi, söi, oli (lição 13).</li>
    <li>Uso a consoante fraca em eu, você, nós e vocês: nukuin, otit, nukuimme, mas hän nukkui (lição 13).</li>
    <li>Digo quando: eilen, aamulla, viime viikolla, kaksi päivää sitten (lição 13).</li>
    <li>Dou ordens para vocês e proíbo: Tulkaa! Odottakaa! Älkää juosko! (lição 14)</li>
    <li>Digo onde fica com genitivo + posposição e dou direções: pankin edessä, Maian luona, Käänny oikealle! (lição 14)</li>
    <li>Digo o que não fiz, com o particípio: en nukkunut, emme syöneet, en halunnut (lição 15).</li>
    <li>Peço e desejo com educação: haluaisin, voisitko, saisinko, olisi mukava (lição 15).</li>
    <li>Entendo uma lista de tarefas e conheço o Natal finlandês: hae tuolit, kattakaa pöytä; joulupukki, kinkku, joulusauna (lições 13 a 15).</li>
    <li>Pronuncio sem nasalizar, com y e ö, ouço presente e passado, o n que muda e o j que é i: banaani, hyvä, puhuu × puhui, pankin kohdalla, joulu (lições 11 a 15).</li>
  </ul>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · A luta final',
      html: `
<ul class="tavoitteet">
  <li>Um diálogo curto no spa: o Capivara procura os óculos de sol dele. Depois, um aquecimento com sete frases para acordar os seis casos de lugar.</li>
  <li>A luta final: o Capivara e o Peixe-boi pedem ajuda à Maia. Responda certo, e o prêmio vai para a ilha do Capivara e do Peixe-boi.</li>
</ul>

<section class="osio" data-paikka="kuusamo">
  <h2>Diálogo: Missä lasit ovat?</h2>
  <p>Domingo, fim da tarde. Da Savassi, a Maia vai direto ao spa do Capivara, na ilha. O Capivara está na água quente, de mandarina na cabeça, e olha para todos os lados.</p>
  <div class="kpl kasvokkain" id="k03-dialogi-b" data-nimi="Ouvir o diálogo">
    <p class="s" data-h="kertoja" data-pt="Oi, amiga! Bem-vinda ao spa. De onde você vem?">Hei, amiga! Tervetuloa kylpylään. Mistä sinä tulet?</p>
    <p class="s" data-h="maia" data-pt="Venho da Savassi. Fiquei numa loja a tarde inteira. Agora quero entrar na água!">Tulen Savassista. Olin siellä kaupassa koko iltapäivän. Nyt haluan veteen!</p>
    <p class="s" data-h="kertoja" data-pt="A água está quentinha. Mas espera! Tenho óculos de sol novos para você. Mas onde eles estão? Ontem eu coloquei na cadeira, mas agora não tem nada na cadeira.">Vesi on lämmin. Mutta odota! Minulla on sinulle uudet aurinkolasit. Mutta missä ne ovat? Panin ne eilen tuolille, mutta nyt tuolilla ei ole mitään.</p>
    <p class="s" data-h="maia" data-pt="Estão na bolsa? Ou na mesa? Ou na água?">Ovatko ne laukussa? Tai pöydällä? Tai vedessä?</p>
    <p class="s" data-h="kertoja" data-pt="Na bolsa só tem frutas. Na água só tem o Peixe-boi.">Laukussa on vain hedelmiä. Vedessä on vain <span lang="pt-BR">Peixe-boi</span>.</p>
    <p class="s" data-h="maia" data-pt="O que você fez de manhã?">Mitä sinä teit aamulla?</p>
    <p class="s" data-h="kertoja" data-pt="Peguei os óculos da cadeira. Depois fiquei com fome. Comi queijo. Peguei da geladeira.">Otin lasit tuolilta. Sitten minulla oli nälkä. Söin juustoa. Otin sen jääkaapista.</p>
    <p class="s" data-h="maia" data-pt="Da geladeira? Espera. Os óculos estão aqui na geladeira, do lado do queijo!">Jääkaapista? Odota. Lasit ovat täällä jääkaapissa, juuston vieressä!</p>
    <p class="s" data-h="kertoja" data-pt="Isso mesmo! O sol estava quente, por isso coloquei no frio. Toma, amiga: óculos vermelhos para você!">Aivan! Aurinko oli kuuma, siksi panin ne kylmään. Ole hyvä, amiga: punaiset lasit sinulle!</p>
    <p class="s" data-h="kertoja" data-pt="Mas escuta: do outro lado do rio tem uma criatura. Se você vir, volta logo para cá.">Mutta kuuntele: joen toisella puolella on otus. Jos näet sen, tule heti tänne.</p>
    <p class="s" data-h="maia" data-pt="Uma criatura? Ainda bem que agora tenho óculos novos.">Otus? Onneksi minulla on nyt uudet lasit.</p>
    <p class="s" data-h="kertoja" data-pt="Só uma perguntinha, Maia: você já sabe os casos locativos?">Kysyn vain, Maia: osaatko jo paikallissijoja?</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: aquecimento</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Seis casos de lugar</h3>
    <p class="ohje">Dentro (casa, loja, cidade, geladeira): <span class="fi pala">-ssa</span> (onde?), <span class="fi pala">-sta</span> (de onde?), <span class="fi pala">-aan, -oon, -iin…</span> (para onde?). Fora (lugar aberto, em cima, pessoas): <span class="fi pala">-lla</span>, <span class="fi pala">-lta</span>, <span class="fi pala">-lle</span>. Entre parênteses: a palavra e a pergunta.</p>
    <div class="valinta" data-oikea="kaupassa">
      <p class="kysymys"><span class="fi">Maia ja Jay ovat ___.</span> (kauppa, onde?)</p>
      <div class="vaihtoehdot"><button type="button">kaupasta</button><button type="button">kaupassa</button><button type="button">kauppaan</button></div>
    </div>
    <div class="valinta" data-oikea="Savassista">
      <p class="kysymys"><span class="fi">Marisa ajaa ___ kotiin.</span> (Savassi, de onde?)</p>
      <div class="vaihtoehdot"><button type="button">Savassista</button><button type="button">Savassissa</button><button type="button">Savassiin</button></div>
    </div>
    <div class="valinta" data-oikea="jääkaappiin">
      <p class="kysymys"><span class="fi">Maia panee juuston ___.</span> (jääkaappi, para onde?)</p>
      <div class="vaihtoehdot"><button type="button">jääkaapissa</button><button type="button">jääkaappiin</button><button type="button">jääkaapista</button></div>
    </div>
    <div class="valinta" data-oikea="aukiolla">
      <p class="kysymys"><span class="fi">Jay odottaa ___.</span> (aukio, onde? lugar aberto)</p>
      <div class="vaihtoehdot"><button type="button">aukiolle</button><button type="button">aukiolta</button><button type="button">aukiolla</button></div>
    </div>
    <div class="valinta" data-oikea="Purjolta">
      <p class="kysymys"><span class="fi">Maia saa viestin ___.</span> (Purjo, de quem?)</p>
      <div class="vaihtoehdot"><button type="button">Purjolta</button><button type="button">Purjolle</button><button type="button">Purjolla</button></div>
    </div>
    <div class="valinta" data-oikea="Purjolle">
      <p class="kysymys"><span class="fi">Jay lähettää lahjan ___.</span> (Purjo, para quem?)</p>
      <div class="vaihtoehdot"><button type="button">Purjolla</button><button type="button">Purjolle</button><button type="button">Purjolta</button></div>
    </div>
    <div class="valinta" data-oikea="tuolille">
      <p class="kysymys"><span class="fi">Panin lasit eilen ___.</span> (tuoli, para onde? em cima)</p>
      <div class="vaihtoehdot"><button type="button">tuolilla</button><button type="button">tuolilta</button><button type="button">tuolille</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="kuusamo">
  <h2>Socorro! Um kraken no rio</h2>
  <p>A Maia ainda está experimentando os óculos vermelhos quando o Capivara, assustado, põe uma boia no pescoço, e o Peixe-boi, que boiava ali o tempo todo, chega perto, bem devagar.</p>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Maia! A criatura do outro lado do rio atravessou. É um kraken, bem na frente do nosso banco de areia. Ele tem seis tentáculos.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Seis. Eu contei duas vezes, para ter certeza. Deu seis as duas vezes, o que me assustou mais ainda.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> E cada tentáculo é uma terminação: <span class="fi pala">-ssa</span>, <span class="fi pala">-sta</span>, <span class="fi pala">-aan</span>, <span class="fi pala">-lla</span>, <span class="fi pala">-lta</span>, <span class="fi pala">-lle</span>. Ele agarra o nosso barco e pergunta: <span class="fi">missä?</span> <span class="fi">mistä?</span> <span class="fi">mihin?</span> Quem erra, ele puxa para o fundo.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="maia"></span>
    <p class="apuhahmo-kupla"><b>Maia:</b> Os casos de lugar! Três de dentro e três de fora. Esses eu uso todo dia: hoje à tarde eu estive <span class="fi">Savassissa</span>, saí <span class="fi">kaupasta</span> e vim direto <span class="fi">kylpylään</span>.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Por isso os óculos novos: estreitos e vermelho-escuros, da cor do kraken. Debaixo d’água, só óculos estreitos enxergam bem. E saindo da geladeira, eles ainda chegam fresquinhos. Eu li isso em algum lugar. Ou sonhei.</p>
  </div>
  <div class="pomo-lahja" data-pomo="k03"></div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="maia"></span>
    <p class="apuhahmo-kupla"><b>Maia:</b> <span class="fi">Tottakai!</span> Quer dizer: claro que eu ajudo. Mas preciso voltar cedo: amanhã é a nossa despedida, e o meu pai prometeu tocar sanfona.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Então, primeiro o kraken. E depois, sanfona? Eu sei boiar no ritmo do forró. Bem devagar.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: a luta final</h2>
  <div class="pomo" data-pomo="k03"></div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Presente para casa nova: chá de casa nova e tupaantuliaiset</h3>
  <figure class="kuva" data-kuva="savassi"></figure>
  <p>No Brasil, quem muda de casa muitas vezes faz um <b>chá de casa nova</b>: os amigos vêm conhecer o lugar e trazem coisas para a casa, como panos de prato, copos, uma panela ou uma planta. Às vezes o dono da casa faz até uma lista, como num chá de bebê.</p>
  <p>Na Finlândia, a visita à casa nova se chama <span class="fi">tupaantuliaiset</span>. O presente tradicional é pão e sal: pão para nunca faltar comida, sal para a vida ter gosto. Hoje se leva também uma vela, flores, uma planta ou alguma coisa para a cozinha, e o dono da casa serve café e pulla.</p>
  <p>Uma luminária e duas almofadas são um presente muito finlandês: em dezembro, em Helsinque, o dia claro dura menos de seis horas, e a noite é comprida. Como disse o Jay: <span class="fi">Lamppu antaa valoa.</span></p>
</aside>
`
    }
  ],

  /* Gramática da lição: kertauskortit (ei uutta kielioppia), linkit oppituntien 11–15 Treeni-paketteihin. */
  kielioppi: [
    {
      id: 'kertaus-vertailu', otsikko: 'Comparar: -mpi, -in e kuin (lição 11)', taso: 'revisão', hakuosa: 'h-vertailu', treeni: ['t11-komparatiivi', 't11-superlatiivi', 't11-kuin'],
      html: `
<table class="taivutus">
  <tr><th>forma básica</th><th>mais</th><th>o mais</th></tr>
  <tr><td><span class="fi">halpa</span><span class="kaannos" lang="pt-BR">barato</span></td><td><span class="fi">halvempi</span></td><td><span class="fi">halvin</span></td></tr>
  <tr><td><span class="fi">kallis</span><span class="kaannos" lang="pt-BR">caro</span></td><td><span class="fi">kalliimpi</span></td><td><span class="fi">kallein</span></td></tr>
  <tr><td><span class="fi">kaunis</span><span class="kaannos" lang="pt-BR">bonito</span></td><td><span class="fi">kauniimpi</span></td><td><span class="fi">kaunein</span></td></tr>
  <tr><td><span class="fi">hyvä</span><span class="kaannos" lang="pt-BR">bom</span></td><td><span class="fi">parempi</span></td><td><span class="fi">paras</span></td></tr>
</table>
<p><span class="fi">kuin</span> = do que · <span class="fi">yhtä … kuin</span> = tão … quanto · <span class="fi">kumpi?</span> = qual (de dois)? · <span class="fi">maailman paras</span> = o melhor do mundo.</p>
<ul class="esim">
  <li class="s" data-pt="O vaso é mais bonito, mas a almofada é mais barata.">Maljakko on kauniimpi, mutta tyyny on halvempi.</li>
  <li class="s" data-pt="É o vaso mais caro da loja.">Se on kaupan kallein maljakko.</li>
</ul>`
    },
    {
      id: 'kertaus-monikon-partitiivi', otsikko: 'Várias coisas: o partitivo plural (lição 11)', taso: 'revisão', hakuosa: 'h-monikko', treeni: ['t11-monikon-partitiivi'],
      html: `
<p>Várias coisas que se contam, sem número: <span class="fi pala">-ja/-jä, -ia/-iä, -ita/-itä</span>. Depois de número, o partitivo <b>singular</b>.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Kaupassa on lamppuja, tyynyjä ja maljakoita.</span></td><td>Na loja tem luminárias, almofadas e vasos.</td></tr>
  <tr><td><span class="fi">Otamme kaksi tyynyä.</span></td><td>Levamos duas almofadas.</td></tr>
</table>`
    },
    {
      id: 'kertaus-objekti', otsikko: 'O objeto e o adjetivo junto (lição 12)', taso: 'revisão', hakuosa: 'h-objekti', treeni: ['t12-objekti', 't12-kongruenssi', 't12-vaatteet'],
      html: `
<table class="taivutus">
  <tr><th>quando</th><th>exemplo</th></tr>
  <tr><td>uma coisa inteira</td><td><span class="fi">Otamme lampun.</span><span class="kaannos" lang="pt-BR">Levamos a luminária.</span></td></tr>
  <tr><td>várias inteiras, todas</td><td><span class="fi">Myyjä pakkaa tyynyt.</span><span class="kaannos" lang="pt-BR">A vendedora embrulha as almofadas.</span></td></tr>
  <tr><td>negação</td><td><span class="fi">Emme osta maljakkoa.</span><span class="kaannos" lang="pt-BR">Não compramos o vaso.</span></td></tr>
  <tr><td>depois de número</td><td><span class="fi">kaksi sinistä tyynyä</span><span class="kaannos" lang="pt-BR">duas almofadas azuis</span></td></tr>
</table>
<p>O adjetivo vai no mesmo caso do substantivo: <span class="fi">pienessä kaupassa</span>, <span class="fi">sinisen paidan</span>.</p>`
    },
    {
      id: 'kertaus-imperfekti', otsikko: 'O passado (lição 13)', taso: 'revisão', hakuosa: 'h-imperfekti', treeni: ['t13-imperfekti', 't13-vartalo', 't13-aika', 't13-kuuntele'],
      html: `
<table class="taivutus">
  <tr><th>infinitivo</th><th>minä</th><th>hän</th></tr>
  <tr><td><span class="fi">syödä</span><span class="kaannos" lang="pt-BR">comer</span></td><td><span class="fi">söin</span></td><td><span class="fi">söi</span></td></tr>
  <tr><td><span class="fi">ajaa</span><span class="kaannos" lang="pt-BR">dirigir</span></td><td><span class="fi">ajoin</span></td><td><span class="fi">ajoi</span></td></tr>
  <tr><td><span class="fi">nukkua</span><span class="kaannos" lang="pt-BR">dormir</span></td><td><span class="fi">nukuin</span></td><td><span class="fi">nukkui</span></td></tr>
  <tr><td><span class="fi">herätä</span><span class="kaannos" lang="pt-BR">acordar</span></td><td><span class="fi">heräsin</span></td><td><span class="fi">heräsi</span></td></tr>
</table>
<p>Um <span class="fi pala">-i-</span> antes da terminação. No tipo 1, eu, você, nós e vocês com a consoante fraca (<span class="fi">nukuin, nukuimme</span>), ele e eles com a forte (<span class="fi">nukkui, nukkuivat</span>), como no presente.</p>`
    },
    {
      id: 'kertaus-kasky-te', otsikko: 'Ordens para vocês (lição 14)', taso: 'revisão', hakuosa: 'h-imperatiivi', treeni: ['t14-kasky-te', 't14-kielto-te'],
      html: `
<table class="taivutus">
  <tr><th>para você</th><th>para vocês</th><th>vocês, não!</th></tr>
  <tr><td><span class="fi">Nuku!</span><span class="kaannos" lang="pt-BR">durma!</span></td><td><span class="fi">Nukkukaa!</span><span class="kaannos" lang="pt-BR">durmam!</span></td><td><span class="fi">Älkää nukkuko!</span><span class="kaannos" lang="pt-BR">não durmam!</span></td></tr>
  <tr><td><span class="fi">Odota!</span><span class="kaannos" lang="pt-BR">espere!</span></td><td><span class="fi">Odottakaa!</span><span class="kaannos" lang="pt-BR">esperem!</span></td><td><span class="fi">Älkää odottako!</span><span class="kaannos" lang="pt-BR">não esperem!</span></td></tr>
  <tr><td><span class="fi">Tule!</span><span class="kaannos" lang="pt-BR">venha!</span></td><td><span class="fi">Tulkaa!</span><span class="kaannos" lang="pt-BR">venham!</span></td><td><span class="fi">Älkää tulko!</span><span class="kaannos" lang="pt-BR">não venham!</span></td></tr>
</table>
<p>A ordem para vocês usa o radical do infinitivo, com a consoante forte: <span class="fi">Odottakaa!</span>, mas <span class="fi">Odota!</span></p>`
    },
    {
      id: 'kertaus-postpositiot', otsikko: 'Posposições e direções (lição 14)', taso: 'revisão', hakuosa: 'h-postpositiot', treeni: ['t14-postpositiot', 't14-suunnat'],
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">ikkunan vieressä</span></td><td>ao lado da janela</td></tr>
  <tr><td><span class="fi">kaupan edessä</span></td><td>na frente da loja</td></tr>
  <tr><td><span class="fi">Hiiden luona</span></td><td>na casa do Hiisi</td></tr>
  <tr><td><span class="fi">keskustan kautta</span></td><td>pelo centro</td></tr>
  <tr><td><span class="fi">Käänny oikealle!</span></td><td>vire à direita!</td></tr>
</table>
<p>O lugar vai no genitivo <span class="fi pala">-n</span>, e a posposição quase sempre vem depois: <span class="fi">kaupan edessä</span>, não “edessä kauppa”.</p>`
    },
    {
      id: 'kertaus-kielto-imperfekti', otsikko: 'O passado negativo: en + particípio (lição 15)', taso: 'revisão', hakuosa: 'h-imperfekti', treeni: ['t15-kielto-imperfekti', 't15-partisiippi'],
      html: `
<table class="taivutus">
  <tr><th>passado</th><th>passado negativo</th><th>português</th></tr>
  <tr><td><span class="fi">nukuin</span></td><td><span class="fi">en nukkunut</span></td><td>dormi · não dormi</td></tr>
  <tr><td><span class="fi">sanoit</span></td><td><span class="fi">et sanonut</span></td><td>você disse · você não disse</td></tr>
  <tr><td><span class="fi">ostimme</span></td><td><span class="fi">emme ostaneet</span></td><td>compramos · não compramos</td></tr>
  <tr><td><span class="fi">he söivät</span></td><td><span class="fi">he eivät syöneet</span></td><td>eles comeram · eles não comeram</td></tr>
</table>
<p>O verbo de negação leva a pessoa (<span class="fi">en, et, ei, emme, ette, eivät</span>); o particípio só tem número: <span class="fi pala">-nut/-nyt</span> no singular, <span class="fi pala">-neet</span> no plural. A consoante é a do infinitivo: <span class="fi">nukkua → nukkunut</span>. O objeto vai no partitivo: <span class="fi">Emme ostaneet maljakkoa.</span></p>`
    },
    {
      id: 'kertaus-konditionaali', otsikko: 'Eu gostaria: o condicional educado (lição 15)', taso: 'revisão', hakuosa: 'h-konditionaali', treeni: ['t15-konditionaali'],
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Haluaisin nukkua.</span></td><td>Eu queria dormir.</td></tr>
  <tr><td><span class="fi">Voisitko valita tyynyt?</span></td><td>Você poderia escolher as almofadas?</td></tr>
  <tr><td><span class="fi">Olisi mukava nähdä lunta.</span></td><td>Seria bom ver neve.</td></tr>
</table>
<p>Radical + <span class="fi pala">-isi-</span> + a terminação de pessoa: <span class="fi">haluan → haluaisin</span>, <span class="fi">voit → voisit</span>, <span class="fi">on → olisi</span>. Para pedir, use o condicional: <span class="fi">haluaisin</span>, não <span class="fi">halusin</span> (= eu quis).</p>`
    },
    {
      id: 'kertaus-paikallissijat', otsikko: 'Os seis casos de lugar: os tentáculos do kraken (lições 6, 7 e 10)', taso: 'revisão', hakuosa: 'h-paikallissijat', treeni: ['t06-missa', 't06-mista', 't06-mihin', 't07-ulko', 't10-henkilot'],
      html: `
<table class="taivutus">
  <tr><th>pergunta</th><th>dentro</th><th>fora, pessoa</th></tr>
  <tr><td><span class="fi">missä?</span><span class="kaannos" lang="pt-BR">onde?</span></td><td><span class="fi">kaupassa</span></td><td><span class="fi">aukiolla</span></td></tr>
  <tr><td><span class="fi">mistä?</span><span class="kaannos" lang="pt-BR">de onde?</span></td><td><span class="fi">kaupasta</span></td><td><span class="fi">Purjolta</span></td></tr>
  <tr><td><span class="fi">mihin?</span><span class="kaannos" lang="pt-BR">para onde?</span></td><td><span class="fi">kauppaan</span></td><td><span class="fi">Purjolle</span></td></tr>
</table>
<p>Forma fraca em todos os casos de lugar (<span class="fi">kaupassa, kadulla</span>), menos no ilativo (<span class="fi">kauppaan</span>); <span class="fi">rikas → rikkaassa</span> faz o contrário. É isso que o <span class="fi">Paikallissijojen kraken</span> pergunta na luta.</p>`
    }
  ]
});
