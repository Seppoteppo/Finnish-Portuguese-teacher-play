/* Tottakai, lição 17: missä Jay on? Ihmisen kuvailu (Passon jakso 17 Maian näkökulmasta). Oma materiaali, ei kirjan
   tekstiä. Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5c ”Oppitunti 17”; tarinan kalenteri: su 27.12.2026 aamu
   (oppitunti 16 = la 26.12. ilta ja yö: Jay katosi kello neljä, kun hän oli sanonut ”herra Kukko” tyhmätukkaiselle
   miehelle Atlético-paidassa; Uuno ja Eenok olivat juhlissa).
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t17): kello 8 Maia soittaa Eenokille ja Uunolle (dialogi A, 18 repliikkiä): kuvailee Jayn (hän on pitkä,
     hänellä on siniset silmät), Uuno muistaa miehen (hänellä oli tyhmä tukka ja isot silmälasit) ja liian tarkasti
     lihaisat kohdat kuin palkitusta sonnista (paksu kaula, leveät hartiat, hyvät jalat; Eenok: kahdeksankymmentä kiloa
     hyvää lihaa; omistaja 22.10.2026; vain dialogissa, ei .retraton osina). Frases prontas,
     sanasto, kikka A: kaksi kasvokuvaa .retrato suomeksi (ensin Jay Maian kuvauksesta, sitten mies Uunon kuvauksesta;
     Tottakain komponentit.js:n retrato sai valinnaiset data-nimet ja silmien värin, osa silmat + data-vari), ääntäminen
     (yhdyssanan paino ensitavulla: silmälasit, hiusväri, postikierros), tehtävät 1–3.
   - osa B (#t17-b): kello 10.30 Maian vanhempien keittiössä; Anderson tunnistaa piirroksesta Marcuksen (portugaliksi
     kertojan tekstissä) ja tietää, missä hän asuu; dialogi B (18 repliikkiä: Maia kääntää Uunolle ja Eenokille;
     Anderson tuntee miehen postikierrokseltaan; hän ei ymmärrä Uunon lausetta, mutta ymmärtää äänensävyn ja lähtee
     mukaan (korvanappi poistettu 23.10.2026, omistaja));
     kielioppi 1 (kuvailu, monikko vai yksikkö) → tehtävä 4 heti perään; kielioppi 2 (monikon genetiivi, omistusliitteen
     tunnistus) → tehtävät 5–9 (kikka B:
     kadonneen ilmoitus KADONNUT: Jay, jonka oppija täyttää, tehtävä 4; Hiiden viestit .chat tehtävässä 7), kulttuuri
     (Belo Horizonten kaupunginosat ja kaikki tunteva postikierros, kuva bh-bairro), Na rua (sil on, millanen, mun nimi),
     kotitehtävä (oma ilmoitus .ficha.oma), itsearvio.
   Suomea puhuvat vain Maia, Uuno, Eenok ja Hiisi (viestit), kuulokkeen ääni yhdellä lauseella sekä Anderson kahdella
   sanalla (Moi! Kiitos!; mies 7);
   Martan, Malun ja Andersonin portugali on kertojan tekstissä. Jay ei puhu (hän on kadonnut). Jaylla on Tottakaissa
   suklaanruskea tukka (PAATOKSET 16.10.2026, oppaat.js), joten kuvaus on ”ruskea tukka” eikä suunnitelman ”vaalea tukka”.
   Omistusliitteet vain tunnistukseen ja vain muodoissa, joilla on leksikossa poss.1s (nimeni, numeroni, ystäväni,
   tukkani, hiukseni, silmäni, silmälasini); muut persoonat Gramática-sivulla .pala-muotoina. Monikon genetiivi vain
   sanoilla, joiden konemuoto on tavallisin (ystävien, vanhempien, naapureiden, silmien, kenkien, talojen); lasten ja
   miesten vain .pala-mainintana (kone antaa lapsien, miehien). Kaikki puhuvat kirjakieltä; puhekieli vain Na rua -nurkassa.
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat tapahtua, kukaan, tuntua, ehkä, joku vei (viedä), välittää (Älä
   välitä), löytää, kuulostaa, asia, joku muu, vaimo, ajatella, päästä, tai, miettiä; dialogit 18 + 18; sanalistat 28 → 12. */
Kurssi.lisaa({
  id: 't17',
  lyhyt: '17',
  jakso: 'Lição 17',
  otsikko: 'Onde está o Jay? Descrever pessoas',
  lahde: 'Tema: descrever pessoas (cabelo, olhos, óculos, barba) · Gramática: hän on pitkä, hänellä on siniset silmät; o genitivo plural (ystävien kanssa, vanhempien koti); o -ni de “meu” para reconhecer (nimeni, ystäväni) · Pronúncia: o acento das palavras compostas (silmälasit, postikierros)',
  aiheet: ['ihmiset', 'keho', 'ominaisuus', 'kaupunki'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga e pintora; o Jay não voltou da festa' },
    uuno2: { nimi: 'Uuno', tyyppi: 'mies', vaihto: 7, kuvaus: 'turista finlandês; macacão azul-claro, cabelo platinado; viu o Jay conversando com o homem às três da manhã' },
    eenok2: { nimi: 'Eenok', tyyppi: 'mies', vaihto: 8, kuvaus: 'turista finlandês, irmão do Uuno; estava na festa de rua; lembra de tudo, até do peso' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; conhece cada casa da sua rota do correio' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay, em Helsinque; responde por mensagem' }
  },

  sanasto: [
    'silmä', 'tukka', 'hius', 'hiusväri', 'parta', 'viiksi', 'silmälasi', 'töyhtö',
    'pitkä', 'lyhyt', 'laiha', 'kalju', 'kihara', 'sotkuinen', 'tyhmä', 'vaalea', 'tumma', 'ruskea',
    'mustavalkoinen', 'millainen', 'vanhempi', 'kadota', 'ilmoitus', 'kuvaus', 'ryhmä', 'piirtää',
    'tunnistaa', 'postikierros', 'kaupunginosa', 'mikä hätänä', 'tuntua', 'kuulostaa', 'välittää', 'miettiä', 'ajatella'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Onde está o Jay?',
      html: `
<ul class="tavoitteet">
  <li>Você descreve uma pessoa: <span class="fi">Hän on <span data-l="pitkä#2">pitkä</span>.</span> <span class="fi">Hänellä on siniset silmät ja ruskea tukka.</span></li>
  <li>Você entende uma descrição no passado: <span class="fi">Hänellä oli tyhmä tukka ja isot silmälasit.</span></li>
  <li>Você acentua a primeira sílaba também nas palavras compostas: <span class="fi">silmälasit, hiusväri, postikierros</span>.</li>
  <li>Parte B: o cartaz <span class="fi">KADONNUT</span>, o genitivo plural (<span class="fi">ystävien kanssa</span>) e o <span class="fi pala">-ni</span> de “meu” (<span class="fi">nimeni</span>), só para reconhecer.</li>
</ul>
<p data-paikka="bh-bairro">Domingo, 27 de dezembro, oito da manhã. A festa de rua acabou com o sol nascendo. A Maia acorda na casa dos pais, e o lado do Jay na cama está vazio. Ela liga para ele: caixa postal. Liga de novo: caixa postal. Na cozinha, a Marta já está ao telefone com meia rua, e ninguém viu o Jay depois das quatro. A Malu dorme no sofá, abraçada ao tambor. Então a Maia lembra: o Uuno e o Eenok, os turistas finlandeses do avião e da Feira Hippie, também estavam na festa. Ela liga para eles. Desta vez, a conversa é em finlandês.</p>

<section class="osio">
  <h2>Diálogo A: Puhelu Eenokille</h2>
  <p class="ohje">Ouça primeiro sem tradução. Preste atenção em como a Maia descreve o Jay (<span class="fi">hän on…</span>, <span class="fi">hänellä on…</span>) e como o Uuno descreve o homem da festa, no passado (<span class="fi">hänellä oli…</span>). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t17-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="Domingo, oito horas da manhã. A Maia liga para o Eenok.">Sunnuntai, kello kahdeksan aamulla. Maia soittaa Eenokille.</p>
    <p class="s" data-h="eenok2" data-pt="Alô, aqui é o Eenok.">Haloo, täällä Eenok.</p>
    <p class="s" data-h="maia" data-pt="Oi, Eenok, aqui é a Maia. Desculpa ligar cedo. O Jay não voltou para casa!">Hei Eenok, täällä Maia. Anteeksi, että soitan aikaisin. Jay ei tullut kotiin!</p>
    <p class="s" data-h="eenok2" data-pt="Ai, não! O que aconteceu? Ele não atende o telefone?">Voi ei! Mitä tapahtui? Eikö hän vastaa puhelimeen?</p>
    <p class="s" data-h="maia" data-pt="Não atende. Ninguém sabe onde ele está. Vocês lembram do Jay? Ele é alto, tem olhos azuis e cabelo castanho.">Ei vastaa. Kukaan ei tiedä, missä hän on. Muistatteko Jayn? Hän on <span data-l="pitkä#2">pitkä</span>, ja hänellä on siniset silmät ja ruskea tukka.</p>
    <p class="s" data-h="eenok2" data-pt="Lembro. Ele parecia simpático. Uuno, vem cá! A Maia está ligando.">Muistan. Hän tuntui mukavalta. Uuno, tule tänne! Maia soittaa.</p>
    <p class="s" data-h="uuno2" data-pt="Bom dia, Maia. O que houve?">Huomenta, Maia. Mikä hätänä?</p>
    <p class="s" data-h="maia" data-pt="O Jay desapareceu. Vocês viram ele de madrugada?">Jay on kadonnut. Näittekö te hänet yöllä?</p>
    <p class="s" data-h="uuno2" data-pt="Eu vi. Às três ele estava conversando com um homem baixinho, na esquina.">Näin. Kello kolme hän puhui pienen miehen kanssa kadun kulmassa.</p>
    <p class="s" data-h="maia" data-pt="Como era esse homem?">Millainen mies hän oli?</p>
    <p class="s" data-h="uuno2" data-pt="Ele tinha um cabelo ridículo e uns óculos grandes. E uma camisa preta e branca. E um pescoço grosso, ombros largos e pernas boas.">Hänellä oli tyhmä tukka ja isot silmälasit. Ja mustavalkoinen paita. Ja paksu kaula, leveät hartiat ja hyvät jalat.</p>
    <p class="s" data-h="eenok2" data-pt="Oitenta quilos de carne boa. Quando a gente foi embora, eles estavam na esquina. Lá tinha um carro grande e preto.">Kahdeksankymmentä kiloa hyvää lihaa. Kun me lähdimme, he <span data-l="olla#2">olivat</span> kadun kulmassa. Siellä oli iso musta auto.</p>
    <p class="s" data-h="maia" data-pt="Um carro grande e preto? Talvez alguém tenha levado ele!">Iso musta auto? Ehkä joku vei hänet!</p>
    <p class="s" data-h="uuno2" data-pt="Não se preocupe, Maia. A gente acha ele.">Älä välitä, Maia. Me löydämme hänet.</p>
    <p class="s" data-h="maia" data-pt="Ai, não. Vocês podem vir aqui? A Malu busca vocês.">Voi ei. Voitteko tulla tänne? Malu hakee teidät.</p>
    <p class="s" data-h="eenok2" data-pt="Claro! A gente já vai.">Tietysti! Me tulemme heti.</p>
    <p class="s" data-h="uuno2" data-pt="Parece bom. E eu pergunto na rua. Talvez outra pessoa tenha visto alguma coisa.">Kuulostaa hyvältä. Ja minä kysyn kadulla. Ehkä joku muu näki jotain.</p>
    <p class="s" data-h="maia" data-pt="Obrigada. Isto é uma coisa importante.">Kiitos. Tämä on tärkeä asia.</p>
  </div>
  <p>Preta e branca, pensa a Maia. Em Belo Horizonte, camisa preta e branca é a camisa do Atlético Mineiro, e metade da cidade usa uma. Isso não ajuda muito. O pescoço, os ombros e os oitenta quilos também não, e a Maia nem pergunta como os dois lembram disso com tanta exatidão. Mas ela é pintora: ela pega o caderno de desenho. Se os vizinhos vão procurar, eles precisam de um rosto.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Jay on kadonnut.</span> = o Jay desapareceu · <span class="fi">olla</span> + particípio, o perfeito: lição 19</li>
      <li><span class="fi">Mikä hätänä?</span> = o que houve?, qual é o problema? · expressão fixa (<span class="fi">hätänä</span> é o essivo da lição 16)</li>
      <li><span class="fi">Anteeksi, että soitan aikaisin.</span> = desculpa ligar cedo · <span class="fi">että</span> = que</li>
      <li><span class="fi">Eikö hän vastaa puhelimeen?</span> = ele não atende o telefone? · <span class="fi">vastata puhelimeen</span>: “responder ao telefone”, com o ilativo</li>
      <li><span class="fi">Näittekö te hänet?</span> = vocês viram ele? · o passado de <span class="fi">nähdä</span>: <span class="fi">näin, näit, näki, näimme, näitte, näkivät</span></li>
      <li><span class="fi">Malu hakee teidät.</span> = a Malu busca vocês · <span class="fi">teidät</span>: “vocês” como objeto inteiro</li>
      <li><span class="fi">Kun me lähdimme…</span> = quando a gente foi embora… · <span class="fi">kun</span> = quando; <span class="fi">kadun kulmassa</span> = na esquina da rua</li>
      <li><span class="fi">Hän tuntui mukavalta.</span> = ele parecia simpático · <span class="fi">Kuulostaa hyvältä.</span> = parece bom (ao ouvir) · <span class="fi">Älä välitä!</span> = não se preocupe!</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="O rosto e como a pessoa é" data-sanat="silmä,tukka,hius,parta,silmälasi,pitkä,lyhyt,laiha,kalju,vaalea,tumma,ruskea"></div>
  <p>As outras palavras da lição estão no <a href="#t17-vocabulario">Vocabulário da lição</a>.</p>
  <p>Duas palavras pedem cuidado: <span class="fi"><span data-l="pitkä#2">pitkä</span></span> é comprido e também <b>alto</b> (pessoa), e <span class="fi">lyhyt</span> é curto e também <b>baixo</b> (pessoa). E o cabelo loiro não é amarelo: é <span class="fi">vaalea</span> (claro).</p>
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Retrato falado: o Jay e o homem da festa</h2>
  <p>A Maia desenha dois retratos para o cartaz. Primeiro o Jay, como ela o descreve. Ouça a descrição (▶), monte o rosto com os botões e aperte <b>Conferir</b>. Cada escolha é dita em voz alta: repita depois dela.</p>
  <p class="s" data-h="maia" data-pt="O Jay é alto. Ele tem cabelo castanho bagunçado e olhos azuis. Ele tem barba curta e óculos de sol.">Jay on <span data-l="pitkä#2">pitkä</span>. Hänellä on sotkuinen ruskea tukka ja siniset silmät. Hänellä on lyhyt parta ja aurinkolasit.</p>
  <div class="retrato" data-h="maia" data-pohja="iho:#f2c9a8;paita:#3c5a78;tausta:#cfe3ef;ilme:virne"
       data-kuvaus="Jay on pitkä. Hänellä on sotkuinen ruskea tukka ja siniset silmät. Hänellä on lyhyt parta ja aurinkolasit."
       data-nimet="silmat:Olhos;parta:Barba"
       data-oikea="tukka:sotkuinen;hiukset:ruskea;silmat:siniset;parta:sanki;lasit:aurinkolasit">
    <p data-osa="tukka" data-arvo="lyhyt" data-nappi="lyhyt" data-puhu="Hänellä on lyhyt tukka.">Hänellä on lyhyt tukka.</p>
    <p data-osa="tukka" data-arvo="pitka" data-nappi="pitkä" data-puhu="Hänellä on pitkä tukka.">Hänellä on pitkä tukka.</p>
    <p data-osa="tukka" data-arvo="kihara" data-nappi="kihara" data-puhu="Hänellä on kihara tukka.">Hänellä on kihara tukka.</p>
    <p data-osa="tukka" data-arvo="sotkuinen" data-nappi="sotkuinen" data-puhu="Hänellä on sotkuinen tukka.">Hänellä on sotkuinen tukka.</p>
    <p data-osa="hiukset" data-arvo="musta" data-vari="#1c120d" data-nappi="musta" data-puhu="Hänellä on musta tukka.">Hänellä on musta tukka.</p>
    <p data-osa="hiukset" data-arvo="vaalea" data-vari="#e8c547" data-nappi="vaalea" data-puhu="Hänellä on vaalea tukka.">Hänellä on vaalea tukka.</p>
    <p data-osa="hiukset" data-arvo="punainen" data-vari="#b5541c" data-nappi="punainen" data-puhu="Hänellä on punainen tukka.">Hänellä on punainen tukka.</p>
    <p data-osa="hiukset" data-arvo="ruskea" data-vari="#4e2a16" data-nappi="ruskea" data-puhu="Hänellä on ruskea tukka.">Hänellä on ruskea tukka.</p>
    <p data-osa="silmat" data-arvo="ruskeat" data-vari="#6b3e1f" data-nappi="ruskeat" data-puhu="Hänellä on ruskeat silmät.">Hänellä on ruskeat silmät.</p>
    <p data-osa="silmat" data-arvo="vihreat" data-vari="#3f8f3a" data-nappi="vihreät" data-puhu="Hänellä on vihreät silmät.">Hänellä on vihreät silmät.</p>
    <p data-osa="silmat" data-arvo="siniset" data-vari="#3b78c2" data-nappi="siniset" data-puhu="Hänellä on siniset silmät.">Hänellä on siniset silmät.</p>
    <p data-osa="parta" data-arvo="ei" data-nappi="ei partaa" data-puhu="Hänellä ei ole partaa.">Hänellä ei ole partaa.</p>
    <p data-osa="parta" data-arvo="viikset" data-nappi="viikset" data-puhu="Hänellä on viikset.">Hänellä on viikset.</p>
    <p data-osa="parta" data-arvo="sanki" data-nappi="lyhyt parta" data-puhu="Hänellä on lyhyt parta.">Hänellä on lyhyt parta.</p>
    <p data-osa="lasit" data-arvo="ei" data-nappi="ei silmälaseja" data-puhu="Hänellä ei ole silmälaseja.">Hänellä ei ole silmälaseja.</p>
    <p data-osa="lasit" data-arvo="lasit" data-nappi="silmälasit" data-puhu="Hänellä on silmälasit.">Hänellä on silmälasit.</p>
    <p data-osa="lasit" data-arvo="isot-lasit" data-nappi="isot silmälasit" data-puhu="Hänellä on isot silmälasit.">Hänellä on isot silmälasit.</p>
    <p data-osa="lasit" data-arvo="aurinkolasit" data-nappi="aurinkolasit" data-puhu="Hänellä on aurinkolasit.">Hänellä on aurinkolasit.</p>
  </div>
  <p>Agora o homem da festa. O Uuno lembra de mais coisas do que no telefone, e fala no passado: <span class="fi">hänellä oli</span> (ele tinha).</p>
  <p class="s" data-h="uuno2" data-pt="Ele era um homem baixinho. Ele tinha um cabelo ridículo: um topete grande e loiro, como o de um galo. Ele tinha óculos grandes, bigode e uma camisa preta e branca.">Hän oli pieni mies. Hänellä oli tyhmä tukka: iso vaalea töyhtö, kuin kukolla. Hänellä oli isot silmälasit, viikset ja mustavalkoinen paita.</p>
  <div class="retrato" data-h="uuno2" data-pohja="iho:#d9a982;paita:#111111;tausta:#efd9f7;ilme:virne"
       data-kuvaus="Hän oli pieni mies. Hänellä oli tyhmä tukka: iso vaalea töyhtö, kuin kukolla. Hänellä oli isot silmälasit, viikset ja mustavalkoinen paita."
       data-nimet="parta:Barba;paita:Camisa"
       data-oikea="tukka:topete;hiukset:vaalea;lasit:isot-lasit;parta:viikset;paita:atletico">
    <p data-osa="tukka" data-arvo="lyhyt" data-nappi="lyhyt" data-puhu="Hänellä oli lyhyt tukka.">Hänellä oli lyhyt tukka.</p>
    <p data-osa="tukka" data-arvo="pitka" data-nappi="pitkä" data-puhu="Hänellä oli pitkä tukka.">Hänellä oli pitkä tukka.</p>
    <p data-osa="tukka" data-arvo="kalju" data-nappi="kalju" data-puhu="Hän oli kalju.">Hän oli kalju.</p>
    <p data-osa="tukka" data-arvo="topete" data-nappi="töyhtö" data-puhu="Hänellä oli iso töyhtö.">Hänellä oli iso töyhtö.</p>
    <p data-osa="hiukset" data-arvo="musta" data-vari="#1c120d" data-nappi="musta" data-puhu="Hänellä oli musta tukka.">Hänellä oli musta tukka.</p>
    <p data-osa="hiukset" data-arvo="ruskea" data-vari="#4e2a16" data-nappi="ruskea" data-puhu="Hänellä oli ruskea tukka.">Hänellä oli ruskea tukka.</p>
    <p data-osa="hiukset" data-arvo="punainen" data-vari="#b5541c" data-nappi="punainen" data-puhu="Hänellä oli punainen tukka.">Hänellä oli punainen tukka.</p>
    <p data-osa="hiukset" data-arvo="vaalea" data-vari="#e8c547" data-nappi="vaalea" data-puhu="Hänellä oli vaalea tukka.">Hänellä oli vaalea tukka.</p>
    <p data-osa="lasit" data-arvo="ei" data-nappi="ei silmälaseja" data-puhu="Hänellä ei ollut silmälaseja.">Hänellä ei ollut silmälaseja.</p>
    <p data-osa="lasit" data-arvo="lasit" data-nappi="silmälasit" data-puhu="Hänellä oli silmälasit.">Hänellä oli silmälasit.</p>
    <p data-osa="lasit" data-arvo="aurinkolasit" data-nappi="aurinkolasit" data-puhu="Hänellä oli aurinkolasit.">Hänellä oli aurinkolasit.</p>
    <p data-osa="lasit" data-arvo="isot-lasit" data-nappi="isot silmälasit" data-puhu="Hänellä oli isot silmälasit.">Hänellä oli isot silmälasit.</p>
    <p data-osa="parta" data-arvo="ei" data-nappi="ei partaa" data-puhu="Hänellä ei ollut partaa.">Hänellä ei ollut partaa.</p>
    <p data-osa="parta" data-arvo="sanki" data-nappi="lyhyt parta" data-puhu="Hänellä oli lyhyt parta.">Hänellä oli lyhyt parta.</p>
    <p data-osa="parta" data-arvo="viikset" data-nappi="viikset" data-puhu="Hänellä oli viikset.">Hänellä oli viikset.</p>
    <p data-osa="paita" data-arvo="ei" data-nappi="musta" data-puhu="Hänellä oli musta paita.">Hänellä oli musta paita.</p>
    <p data-osa="paita" data-arvo="atletico" data-nappi="mustavalkoinen" data-puhu="Hänellä oli mustavalkoinen paita.">Hänellä oli mustavalkoinen paita.</p>
  </div>
  <p>Repare: <span class="fi">silmät</span>, <span class="fi">viikset</span> e <span class="fi">silmälasit</span> estão no plural, como “olhos” e “óculos” em português (mas “bigode” é singular em português), e o adjetivo vai junto: <span class="fi">siniset silmät</span>, <span class="fi">isot silmälasit</span>. Já <span class="fi">tukka</span> e <span class="fi">parta</span> são uma coisa só: <span class="fi">ruskea tukka</span>, <span class="fi">lyhyt parta</span>. A regra completa vem na parte B.</p>
</section>

<section class="osio" data-paikka="belo-horizonte-panoraama">
  <h2>Pronúncia: o acento das palavras compostas</h2>
  <p>Muitas palavras desta lição são <b>compostas</b>: duas palavras coladas. <span class="fi">silmälasit</span> = <span class="fi">silmä</span> (olho) + <span class="fi">lasit</span>; <span class="fi">postikierros</span> = <span class="fi">posti</span> (correio) + <span class="fi pala">kierros</span> (volta). O acento forte fica na <b>primeira sílaba da palavra inteira</b>, e o começo da segunda parte recebe só um toque mais leve. O ouvido brasileiro procura o acento forte perto do fim, no <span class="fi pala">la</span> de <span class="fi">silmälasit</span>, engole o começo e acaba quebrando a palavra em duas. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="óculos">silmälasit</li>
    <li class="s" data-pt="cor do cabelo">hiusväri</li>
    <li class="s" data-pt="a rota do correio">postikierros</li>
    <li class="s" data-pt="preto e branco">mustavalkoinen</li>
    <li class="s" data-pt="óculos de sol">aurinkolasit</li>
    <li class="s" data-pt="bairro">kaupunginosa</li>
  </ul>
  <div class="saanto">
    <h3>Truque: forte, depois leve</h3>
    <p>Na bolha, as duas sílabas com acento aparecem em maiúsculas: <span class="fi pala">SIL-mä-LA-sit</span>, <span class="fi pala">HIUS-VÄ-ri</span>, <span class="fi pala">POS-ti-KIER-ros</span>, <span class="fi pala">MUS-ta-VAL-koi-nen</span>. A primeira é a forte; a segunda é só um toque. Bata palmas forte na primeira e leve na segunda. Nenhuma sílaba encolhe: o <span class="fi pala">ä</span> de <span class="fi">silmä</span> continua aberto, e o <span class="fi pala">rr</span> de <span class="fi pala">kierros</span> continua longo.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ligue a palavra à tradução</h3>
    <ul class="yhdista">
      <li data-pari="olhos">silmät</li>
      <li data-pari="cabelo">tukka</li>
      <li data-pari="barba">parta</li>
      <li data-pari="bigode">viikset</li>
      <li data-pari="óculos">silmälasit</li>
      <li data-pari="loiro, claro">vaalea</li>
      <li data-pari="magro">laiha</li>
      <li data-pari="careca">kalju</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>2. Ouça: o Jay ou o homem da festa?</h3>
    <p class="ohje">Aperte ▶ e decida pelos retratos: de quem é a descrição? Todas as frases estão no presente.</p>
    <div class="valinta" data-kuuntele="Hänellä on lyhyt parta." data-oikea="Jay">
      <p class="kysymys">Quem é?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">mies</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hänellä on viikset." data-oikea="mies">
      <p class="kysymys">Quem é?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">mies</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hänellä on iso vaalea töyhtö." data-oikea="mies">
      <p class="kysymys">Quem é?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">mies</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hänellä on siniset silmät." data-oikea="Jay">
      <p class="kysymys">Quem é?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">mies</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hänellä on mustavalkoinen paita." data-oikea="mies">
      <p class="kysymys">Quem é?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">mies</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hänellä on aurinkolasit." data-oikea="Jay">
      <p class="kysymys">Quem é?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">mies</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>3. Você entendeu o telefonema?</h3>
    <p class="ohje">Volte ao diálogo A se precisar.</p>
    <div class="valinta" data-oikea="Eenokille.">
      <p class="kysymys"><span class="fi">Kenelle Maia soittaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Purjolle.</button><button type="button">Eenokille.</button><button type="button">Malulle.</button></div>
    </div>
    <div class="valinta" data-oikea="Kello kolme.">
      <p class="kysymys"><span class="fi">Milloin Uuno näki Jayn?</span></p>
      <div class="vaihtoehdot"><button type="button">Kello neljä.</button><button type="button">Kello kolme.</button><button type="button">Kello kahdeksan.</button></div>
    </div>
    <div class="valinta" data-oikea="Pienen miehen kanssa.">
      <p class="kysymys"><span class="fi">Kenen kanssa Jay puhui?</span></p>
      <div class="vaihtoehdot"><button type="button">Ison miehen kanssa.</button><button type="button">Uunon kanssa.</button><button type="button">Pienen miehen kanssa.</button></div>
    </div>
    <div class="valinta" data-oikea="Tyhmä tukka.">
      <p class="kysymys"><span class="fi">Millainen tukka miehellä oli?</span></p>
      <div class="vaihtoehdot"><button type="button">Tyhmä tukka.</button><button type="button">Lyhyt tukka.</button><button type="button">Ruskea tukka.</button></div>
    </div>
    <div class="valinta" data-oikea="Hän hakee Uunon ja Eenokin.">
      <p class="kysymys"><span class="fi">Mitä Malu tekee?</span></p>
      <div class="vaihtoehdot"><button type="button">Hän soittaa Purjolle.</button><button type="button">Hän hakee Uunon ja Eenokin.</button><button type="button">Hän soittaa Jaylle.</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · KADONNUT: o cartaz e o homem do topete',
      html: `
<ul class="tavoitteet">
  <li>Você preenche um cartaz de desaparecido: <span class="fi">Hänellä on siniset silmät. Silmien väri: sininen.</span></li>
  <li>Você sabe quando vem o plural: <span class="fi">siniset silmät</span>, mas <span class="fi">ruskea tukka</span>.</li>
  <li>Você reconhece e usa o genitivo plural: <span class="fi">ystävien kanssa</span>, <span class="fi">Maian vanhempien koti</span>, <span class="fi">naapureiden ryhmä</span>.</li>
  <li>Você reconhece o <span class="fi pala">-ni</span> de “meu”: <span class="fi">nimeni, numeroni, ystäväni</span>.</li>
</ul>

<p data-paikka="bh-bairro">Dez e meia. A Malu foi buscar o Uuno e o Eenok. Os dois estão de macacão azul-claro, como sempre. Na mesa da cozinha estão os dois retratos que a Maia desenhou, e a Marta já mandou um aviso em português para o grupo de mensagens dos vizinhos. O Uuno conta de novo, em finlandês, como era o homem da festa: o topete, os óculos, o pescoço, os ombros. Aí o Anderson volta da padaria com o pão, olha o retrato do homem do topete e para no meio da cozinha:</p>
<p>— Eu conheço esse homem! É o Marcus! Toda segunda eu levo as cartas dele, lá no alto do Morro do Cascalho. A casa dele tem portão preto e branco, e ele nunca diz obrigado.</p>
<p>O Uuno e o Eenok não entendem uma palavra. A Maia traduz.</p>

<section class="osio" data-paikka="bh-bairro">
  <h2>Diálogo B: Maian vanhempien keittiössä</h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure o genitivo plural (<span class="fi">vanhempien, naapureiden</span>) e o <span class="fi pala">-ni</span> de “meu” (<span class="fi">ystäväni, numeroni</span>). E o Anderson diz duas palavras em finlandês: quais?</p>
  <div class="kpl" id="t17-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="São dez e meia. O Uuno e o Eenok estão na cozinha dos pais da Maia. A Marta, a esposa do Walker, faz café.">Kello on puoli yksitoista. Uuno ja Eenok <span data-l="olla#2">ovat</span> Maian vanhempien keittiössä. Walkerin vaimo Marta keittää kahvia.</p>
    <p class="s" data-h="anderson" data-pt="Oi!">Moi!</p>
    <p class="s" data-h="eenok2" data-pt="Oi, Anderson! Eu sou o Eenok, irmão do Uuno. O que ele disse, Maia?">Moi, Anderson! Minä olen Eenok, Uunon veli. Mitä hän sanoi, Maia?</p>
    <p class="s" data-h="maia" data-pt="O Anderson reconhece o homem! É o Marcus.">Anderson tunnistaa miehen! Se on Marcus.</p>
    <p class="s" data-h="eenok2" data-pt="O que você pensa, Maia? O Jay está com o Marcus?">Mitä sinä ajattelet, Maia? Onko Jay Marcuksen luona?</p>
    <p class="s" data-h="maia" data-pt="Acho que sim. De madrugada o Jay disse alguma bobagem para ele.">Luulen niin. Jay sanoi hänelle yöllä jotain tyhmää.</p>
    <p class="s" data-h="uuno2" data-pt="De onde ele conhece o Marcus?">Mistä hän tuntee Marcuksen?</p>
    <p class="s" data-h="maia" data-pt="Da rota do correio. O Anderson leva cartas para o Marcus toda segunda-feira.">Postikierrokselta. Anderson vie Marcukselle postia joka maanantai.</p>
    <p class="s" data-h="eenok2" data-pt="Onde o Marcus mora?">Missä Marcus asuu?</p>
    <p class="s" data-h="maia" data-pt="No Morro do Cascalho. O Anderson sabe onde fica a casa.">Morro do Cascalholla. Anderson tietää, missä talo <span data-l="olla#2">on</span>.</p>
    <p class="s" data-h="uuno2" data-pt="Como se chega lá?">Miten sinne pääsee?</p>
    <p class="s" data-h="maia" data-pt="De ônibus ou de carro. A Malu leva a gente.">Bussilla tai autolla. Malu vie meidät.</p>
    <p class="s" data-h="uuno2" data-pt="Ótimo! Mas primeiro o aviso.">Hyvä! Mutta ensin ilmoitus.</p>
    <p class="s" data-h="maia" data-pt="A mãe já mandou um aviso para o grupo dos vizinhos. Está em português.">Äiti lähetti jo ilmoituksen naapureiden ryhmään. Se on portugaliksi.</p>
    <p class="s" data-h="eenok2" data-pt="Eu escrevo um aviso em finlandês no grupo “Finlandeses no Brasil”. Aqui também moram finlandeses.">Minä kirjoitan ilmoituksen suomeksi ryhmään <span class="nimike">”Suomalaiset Brasiliassa”</span>. Täällä asuu myös suomalaisia.</p>
    <p class="s" data-h="maia" data-pt="Obrigada, meu amigo! Escreve também o meu número.">Kiitos, ystäväni! Kirjoita myös numeroni.</p>
    <p class="s" data-h="uuno2" data-pt="E depois a gente vai junto ao Morro do Cascalho!">Ja sitten me tulemme mukaan Morro do Cascalholle!</p>
    <p class="s" data-h="anderson" data-pt="Obrigado!">Kiitos!</p>
  </div>
  <p>O Anderson não entendeu a frase do Uuno, mas entendeu o tom: alguém vai junto. Ele agradece em finlandês, como faz desde a lição 13, e vai buscar o boné do Rei Leão.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Maian vanhempien keittiössä</span> = na cozinha dos pais da Maia · <span class="fi">vanhempien</span>: o genitivo plural, veja a gramática abaixo</li>
      <li><span class="fi">Anderson tunnistaa miehen.</span> = o Anderson reconhece o homem · <span class="fi">miehen</span>: o objeto inteiro (lição 12)</li>
      <li><span class="fi">Mistä hän tuntee Marcuksen?</span> = de onde ele conhece o Marcus? · <span class="fi">tuntea</span> = conhecer (uma pessoa)</li>
      <li><span class="fi">joka maanantai</span> = toda segunda-feira · <span class="fi">joka</span> não muda: <span class="fi">joka aamu</span>, <span class="fi">joka ilta</span></li>
      <li><span class="fi">ryhmään <span class="nimike">”Suomalaiset Brasiliassa”</span></span> = no grupo “Finlandeses no Brasil” · o nome do grupo não muda; o caso vai em <span class="fi">ryhmä</span></li>
      <li><span class="fi">Kiitos, ystäväni!</span> = obrigada, meu amigo! · o <span class="fi pala">-ni</span> de “meu, minha”: veja a gramática abaixo</li>
      <li><span class="fi">me tulemme mukaan</span> = a gente vai junto · <span class="fi">tulla mukaan</span> = ir junto, acompanhar</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="bh-bairro">
  <h2>Gramática 1 · Descrever: <span class="fi">hän on…</span> e <span class="fi">hänellä on…</span></h2>

  <h3>1. Ser e ter</h3>
  <p>Para dizer <b>como a pessoa é</b> (altura, idade, corpo), use <span class="fi">olla</span>: <span class="fi">Hän on <span data-l="pitkä#2">pitkä</span>.</span> Para dizer <b>o que ela tem</b> (olhos, cabelo, barba, óculos, roupa), use o “ter” da lição 5: <span class="fi">Hänellä on siniset silmät.</span> No passado: <span class="fi">Hän oli pieni.</span>, <span class="fi">Hänellä oli viikset.</span></p>
  <table class="taivutus">
    <tr><th>finlandês</th><th>português</th></tr>
    <tr><td><span class="fi">Hän on <span data-l="pitkä#2">pitkä</span> ja laiha.</span></td><td>ele é alto e magro</td></tr>
    <tr><td><span class="fi">Hän on lyhyt ja nuori.</span></td><td>ela é baixa e jovem</td></tr>
    <tr><td><span class="fi">Hän on kalju.</span></td><td>ele é careca</td></tr>
    <tr><td><span class="fi">Hänellä on siniset silmät.</span></td><td>ele tem olhos azuis</td></tr>
    <tr><td><span class="fi">Hänellä on ruskea tukka.</span></td><td>ela tem cabelo castanho</td></tr>
    <tr><td><span class="fi">Hänellä on parta ja silmälasit.</span></td><td>ele tem barba e óculos</td></tr>
    <tr><td><span class="fi">Hänellä on sininen paita.</span></td><td>ele está de camisa azul</td></tr>
  </table>
  <p>Pergunta: <span class="fi">Millainen hän on?</span> (como ele é?), <span class="fi">Millainen tukka hänellä on?</span> (que cabelo ele tem?). Negativo, com partitivo, como na lição 5: <span class="fi">Hänellä ei ole partaa.</span> <span class="fi">Hänellä ei ole silmälaseja.</span> Como a pessoa parece: <span class="fi">Hän tuntuu mukavalta.</span> (ele parece simpático; <span class="fi">tuntua</span> + <span class="fi pala">-lta</span>).</p>

  <h3>2. Plural ou singular? silmät, mas tukka</h3>
  <p>Algumas palavras do corpo são plural <span class="fi pala">-t</span> (aprenda como vocabulário): <span class="fi">silmät</span> (olhos), <span class="fi">hiukset</span> (cabelo, a palavra do dia a dia), <span class="fi">viikset</span> (bigode), <span class="fi">silmälasit</span> (óculos). Uma coisa só fica no singular: <span class="fi">tukka</span> (o cabelo todo), <span class="fi">parta</span> (barba). O adjetivo vai junto, no mesmo número (lição 12): <span class="fi">siniset silmät</span>, <span class="fi">ruskeat hiukset</span>, mas <span class="fi">ruskea tukka</span>.</p>
  <p>Num formulário, a palavra <span class="fi">väri</span> (cor) é singular, então a cor também: <span class="fi">Silmien väri: sininen.</span> (cor dos olhos: azul).</p>
  <div class="huomio">
    <p><b>Armadilhas do brasileiro:</b> 1) “ele tem olhos azuis” não é <span class="pala">Hän on siniset silmät</span>: ter = <span class="fi">hänellä on</span>. 2) Na descrição simples, use a forma básica: <span class="fi">Hänellä on siniset silmät</span>. O partitivo aparece na negação (<span class="fi">Hänellä ei ole partaa</span>) e com quantidade indefinida. Os olhos dele são inteiros: <span class="fi">siniset silmät</span>. 3) “Cabelo” é singular em português; em finlandês, <span class="fi">tukka</span> é singular e <span class="fi">hiukset</span> é plural. As duas formas estão certas.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-bairro">
  <h2>Exercício: o cartaz</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. O cartaz: KADONNUT</h3>
    <p class="ohje">O Eenok escreve o cartaz para o grupo <span class="fi">Suomalaiset Brasiliassa</span>. Complete com a descrição da Maia (retrato do Jay, parte A). A palavra básica está entre parênteses; atenção ao plural.</p>
    <div class="dokumentti juliste kadonnut" lang="fi-FI">
      <p class="juliste-otsikko">Kadonnut: Jay</p>
      <div class="ficha-foto" data-hahmo="jay"></div>
      <div class="aukot" lang="fi-FI">
        <p>Jay on <span class="aukko" data-oikea="pitkä"></span> mies. <span data-ei-kuplaa>(alto)</span></p>
        <p>Hänellä on <span class="aukko" data-oikea="siniset"></span> silmät. <span data-ei-kuplaa>(sininen)</span></p>
        <p>Hänellä on sotkuinen <span class="aukko" data-oikea="ruskea"></span> tukka. <span data-ei-kuplaa>(castanho)</span></p>
        <p>Hänellä on lyhyt <span class="aukko" data-oikea="parta"></span>. <span data-ei-kuplaa>(barba)</span></p>
        <p>Hänellä on <span class="aukko" data-oikea="aurinkolasit"></span>. <span data-ei-kuplaa>(aurinkolasi)</span></p>
        <p>Silmien väri: <span class="aukko" data-oikea="sininen"></span> <span data-ei-kuplaa>(azul)</span></p>
        <p>Hiusväri: <span class="aukko" data-oikea="ruskea"></span> <span data-ei-kuplaa>(castanho)</span></p>
      </div>
      <p class="juliste-ala">Hän katosi juhlista sunnuntaina kello neljä yöllä. Mieti: näitkö hänet yöllä? Tiedätkö, missä Jay <span data-l="olla#2">on</span>? Soita Maialle!</p>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="bh-bairro">
  <h2>Gramática 2 · Vários e “meu”: o genitivo plural e o <span class="fi pala">-ni</span></h2>

  <h3>1. O genitivo plural: ystävien kanssa</h3>
  <p>O genitivo (lição 5) também tem plural. Ele termina em <span class="fi pala">-en</span>, quase sempre com <span class="fi pala">-i-</span> ou <span class="fi pala">-j-</span> antes: <span class="fi pala">-ien, -jen, -iden</span>. Ele aparece nos mesmos lugares que o genitivo singular:</p>
  <table class="taivutus">
    <tr><th>quando</th><th>finlandês</th><th>português</th></tr>
    <tr><td>com <span class="fi">kanssa</span></td><td><span class="fi">ystävien kanssa</span></td><td>com os amigos</td></tr>
    <tr><td>de quem?</td><td><span class="fi">Maian vanhempien koti</span></td><td>a casa dos pais da Maia</td></tr>
    <tr><td>de quem?</td><td><span class="fi">naapureiden ryhmä</span></td><td>o grupo dos vizinhos</td></tr>
    <tr><td>de quê?</td><td><span class="fi">silmien väri</span></td><td>a cor dos olhos</td></tr>
    <tr><td>com posposição</td><td><span class="fi">talojen välissä</span></td><td>entre as casas</td></tr>
  </table>
  <p>Para formar com palavras em -a, -ä, -o, -u, parta do partitivo plural (lição 11): <span class="fi">ystäviä → ystävien</span>, <span class="fi">taloja → talojen</span>, <span class="fi">kenkiä → kenkien</span>, <span class="fi">naapureita → naapureiden</span>. Palavras em -i dão <span class="fi pala">-ien</span> (<span class="fi">turisti → turistien</span>, <span class="fi">silmälasi → silmälasien</span>). Substantivos muito comuns usam <span class="fi pala">-ten</span> (<span class="fi pala">naisten, ihmisten</span>): <span class="fi pala">lasten</span> (das crianças), <span class="fi pala">miesten</span> (dos homens). A bolha de cada palavra mostra o genitivo plural.</p>

  <h3>2. Para reconhecer: nimeni, ystäväni</h3>
  <p>“Meu, minha” muitas vezes é uma terminação no próprio substantivo: <span class="fi pala">-ni</span>. <span class="fi">nimi → nimeni</span> (o meu nome), <span class="fi">numero → numeroni</span> (o meu número), <span class="fi">ystävä → ystäväni</span> (a minha amiga, o meu amigo). Na escrita, o pronome pode vir antes: <span class="fi">minun nimeni</span>. Na fala, a terminação muitas vezes cai: <span class="fi" data-rekisteri="puhe">mun nimi</span> (veja Na rua). Por enquanto, só reconheça o <span class="fi pala">-ni</span>; as outras pessoas estão na <a href="#h-omistusliitteet">Gramática</a>.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-bairro">
  <h2>Exercícios da parte B</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Ouça: um ou vários?</h3>
    <p class="ohje">Aperte ▶ e escolha o que você ouviu: o genitivo singular (um) ou o plural (vários). Ouça o <span class="fi pala">-ien, -jen, -iden</span>.</p>
    <div class="valinta" data-kuuntele="ystävien kanssa" data-oikea="ystävien kanssa">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">ystävän kanssa</button><button type="button">ystävien kanssa</button></div>
    </div>
    <div class="valinta" data-kuuntele="naapurin kanssa" data-oikea="naapurin kanssa">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">naapurin kanssa</button><button type="button">naapureiden kanssa</button></div>
    </div>
    <div class="valinta" data-kuuntele="talojen takana" data-oikea="talojen takana">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">talon takana</button><button type="button">talojen takana</button></div>
    </div>
    <div class="valinta" data-kuuntele="pojan kanssa" data-oikea="pojan kanssa">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">poikien kanssa</button><button type="button">pojan kanssa</button></div>
    </div>
    <div class="valinta" data-kuuntele="kenkien väri" data-oikea="kenkien väri">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">kengän väri</button><button type="button">kenkien väri</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Genitivo plural: escolha a forma</h3>
    <p class="ohje">O sentido está entre parênteses. Atenção: vários (plural) e o caso certo (genitivo).</p>
    <div class="valinta" data-oikea="ystävien">
      <p class="kysymys"><span class="fi">Maia puhuu ___ kanssa.</span> (com os amigos)</p>
      <div class="vaihtoehdot"><button type="button">ystävän</button><button type="button">ystävien</button><button type="button">ystäviä</button></div>
    </div>
    <div class="valinta" data-oikea="vanhempien">
      <p class="kysymys"><span class="fi">Tämä on Maian ___ koti.</span> (dos pais)</p>
      <div class="vaihtoehdot"><button type="button">vanhempien</button><button type="button">vanhemmat</button><button type="button">vanhemman</button></div>
    </div>
    <div class="valinta" data-oikea="naapureiden">
      <p class="kysymys"><span class="fi">Marta kirjoittaa ___ ryhmään.</span> (dos vizinhos)</p>
      <div class="vaihtoehdot"><button type="button">naapurin</button><button type="button">naapureita</button><button type="button">naapureiden</button></div>
    </div>
    <div class="valinta" data-oikea="silmien">
      <p class="kysymys"><span class="fi">Mikä on Jayn ___ väri?</span> (dos olhos)</p>
      <div class="vaihtoehdot"><button type="button">silmien</button><button type="button">silmän</button><button type="button">silmät</button></div>
    </div>
    <div class="valinta" data-oikea="talojen">
      <p class="kysymys"><span class="fi">Auto on ___ välissä.</span> (entre as casas)</p>
      <div class="vaihtoehdot"><button type="button">taloja</button><button type="button">talojen</button><button type="button">talon</button></div>
    </div>
    <div class="valinta" data-oikea="kenkien">
      <p class="kysymys"><span class="fi">Mikä on Andersonin ___ väri?</span> (dos sapatos)</p>
      <div class="vaihtoehdot"><button type="button">kengät</button><button type="button">kengän</button><button type="button">kenkien</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Leia as mensagens com o Hiisi</h3>
    <p class="ohje">Perto do meio-dia a Maia escreve para o Hiisi, em Helsinque (lá já é fim de tarde: cinco horas de diferença). Leia e responda.</p>
    <div class="chat" data-otsikko="Hiisi" data-paiva="sunnuntai" data-mina="maia">
      <p data-h="maia" data-aika="11.40" data-pt="Oi, Hiisi. O Jay ligou para você ontem ou hoje?">Hei Hiisi. Soittiko Jay sinulle eilen tai tänään?</p>
      <p data-h="hiisi" data-aika="11.52" data-pt="Não ligou. Por quê?">Ei soittanut. Miksi?</p>
      <p data-h="maia" data-aika="11.53" data-pt="O Jay desapareceu. Ele não voltou para casa de madrugada.">Jay on kadonnut. Hän ei tullut kotiin yöllä.</p>
      <p data-h="hiisi" data-aika="12.01" data-pt="Com certeza ele está dormindo num parque.">Hän nukkuu varmasti puistossa.</p>
      <p data-h="hiisi" data-aika="12.01" data-pt="(cara de paisagem)"><span class="emoji">😐</span></p>
      <p data-h="maia" data-aika="12.03" data-pt="Hiisi! O meu amigo Uuno viu ele às três com um homem baixinho.">Hiisi! Ystäväni Uuno näki hänet kello kolme pienen miehen kanssa.</p>
      <p data-h="hiisi" data-aika="12.10" data-pt="Não conta para a mãe.">Älä kerro äidille.</p>
      <p data-h="maia" data-aika="12.11" data-pt="Não vou contar. A mãe viria para o Brasil na hora.">En kerro. Äiti tulisi heti Brasiliaan.</p>
      <p data-h="hiisi" data-aika="12.20" data-pt="Escreve quando ele estiver em casa.">Kirjoita, kun hän <span data-l="olla#2">on</span> kotona.</p>
    </div>
    <div class="valinta" data-oikea="Ei soittanut.">
      <p class="kysymys"><span class="fi">Soittiko Jay Hiidelle?</span></p>
      <div class="vaihtoehdot"><button type="button">Soitti.</button><button type="button">Ei soittanut.</button><button type="button">Ei soita.</button></div>
    </div>
    <div class="valinta" data-oikea="Puistossa.">
      <p class="kysymys"><span class="fi">Missä Jay nukkuu?</span> (segundo o Hiisi)</p>
      <div class="vaihtoehdot"><button type="button">Kotona.</button><button type="button">Puistossa.</button><button type="button">Sairaalassa.</button></div>
    </div>
    <div class="valinta" data-oikea="Uuno.">
      <p class="kysymys"><span class="fi">Kuka näki Jayn kello kolme?</span></p>
      <div class="vaihtoehdot"><button type="button">Hiisi.</button><button type="button">Malu.</button><button type="button">Uuno.</button></div>
    </div>
    <div class="valinta" data-oikea="Purjolle.">
      <p class="kysymys"><span class="fi">Kenelle Maia ei kerro?</span> <span lang="pt-BR">(a mãe do Jay)</span></p>
      <div class="vaihtoehdot"><button type="button">Purjolle.</button><button type="button">Uunolle.</button><button type="button">Hiidelle.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Traduza para o finlandês</h3>
    <div class="kaanna"><p class="pt">Ele é alto e tem olhos azuis.</p><p class="s" data-pt="Ele é alto e tem olhos azuis.">Hän on <span data-l="pitkä#2">pitkä</span>, ja hänellä on siniset silmät.</p></div>
    <div class="kaanna"><p class="pt">Ela tem cabelo castanho.</p><p class="s" data-pt="Ela tem cabelo castanho.">Hänellä on ruskea tukka.</p></div>
    <div class="kaanna"><p class="pt">O homem tinha óculos grandes e bigode.</p><p class="s" data-pt="O homem tinha óculos grandes e bigode.">Miehellä oli isot silmälasit ja viikset.</p></div>
    <div class="kaanna"><p class="pt">A Maia fala com os amigos.</p><p class="s" data-pt="A Maia fala com os amigos.">Maia puhuu ystävien kanssa.</p></div>
    <div class="kaanna"><p class="pt">O meu nome é Maia. (bloco pronto)</p><p class="s" data-pt="O meu nome é Maia.">Nimeni on Maia.</p></div>
    <div class="kaanna"><p class="pt">O Jay desapareceu.</p><p class="s" data-pt="O Jay desapareceu.">Jay on kadonnut.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda às perguntas</h3>
    <p class="ohje">Responda sobre você, em voz alta, antes de abrir o modelo.</p>
    <details class="vastaus"><summary lang="fi-FI">Millainen sinä olet?</summary><p class="s" data-pt="Sou alta e magra. (diga como você é)">Olen <span data-l="pitkä#2">pitkä</span> ja laiha.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Millainen tukka sinulla on?</summary><p class="s" data-pt="Eu tenho cabelo preto e curto.">Minulla on lyhyt musta tukka.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla siniset silmät?</summary><p class="s" data-pt="Não. Eu tenho olhos castanhos.">Ei ole. Minulla on ruskeat silmät.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla silmälasit?</summary><p class="s" data-pt="Não. Eu não tenho óculos. (ou: Tenho.)">Ei ole. Minulla ei ole silmälaseja.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kenen kanssa sinä asut?</summary><p class="s" data-pt="Eu moro com amigos.">Asun ystävien kanssa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä ajattelet nyt?</summary><p class="s" data-pt="Penso em comida. Fico pensando no que vou comer à noite.">Ajattelen ruokaa. Mietin, mitä syön illalla.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kuulostaako tämä hyvältä: kahvia ja pullaa?</summary><p class="s" data-pt="Parece bom! Mas não se preocupe comigo, vou pegar só café.">Kuulostaa! Mutta älä välitä minusta, otan vain kahvia.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kenen vaimo Marta on?</summary><p class="s" data-pt="Ela é a esposa do Walker.">Hän on Walkerin vaimo.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä mietit?</summary><p class="s" data-pt="Fico pensando onde o Jay está. É uma coisa difícil.">Mietin, missä Jay on. Se on vaikea asia.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Millainen tyttö sinä olit lapsena?</summary><p class="s" data-pt="Eu era uma menina pequena e alegre.">Olin pieni ja iloinen tyttö.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Käytätkö silmälaseja?</summary><p class="s" data-pt="Uso. Sem óculos eu não vejo nada.">Käytän. Ilman silmälaseja en näe mitään.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Millainen mies Marcus on?</summary><p class="s" data-pt="Um homem pequeno, desse tipo. Ele é o único filho da família.">Sellainen pieni mies. Hän on ainoa poika perheessä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä huomasit?</summary><p class="s" data-pt="Percebi um homem na esquina. Ele vive no Morro do Cascalho.">Huomasin miehen kadun kulmassa. Hän elää Morro do Cascalholla.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mikä juttu tämä on?</summary><p class="s" data-pt="É uma coisa boa: um aviso no grupo.">Se on hyvä juttu: ilmoitus ryhmässä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kuka on Maian kaveri?</summary><p class="s" data-pt="A Malu é amiga da Maia. Isso mesmo!">Malu on Maian kaveri. Aivan!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Panetko silmälasit päälle?</summary><p class="s" data-pt="Ponho. Sem eles eu não enxergo.">Panen. Ilman niitä en näe.</p></details>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Os bairros de Belo Horizonte e a rota do correio que conhece todo mundo</h3>
  <figure class="kuva" data-kuva="bh-bairro"></figure>
  <p>Belo Horizonte tem <b>centenas de bairros</b>, e a prefeitura organiza a cidade em nove regionais, como Centro-Sul, Pampulha e Venda Nova. Em muitos bairros a vida ainda é de rua: todo mundo conhece a padaria, o portão azul do vizinho, o cachorro que late para as motos. Num bairro assim, quem faz a <b>rota do correio</b> conhece cada casa, cada nome e cada pessoa que nunca diz obrigado. O Anderson faz a sua ronda há anos, toda manhã, e é por isso que ele reconhece o Marcus num desenho.</p>
  <p>Na Finlândia, o bairro é <span class="fi">kaupunginosa</span>, “parte da cidade”: Kallio, Sörnäinen, Töölö. Em muitos prédios, as cartas entram por uma fenda na porta de cada apartamento, e muitos vizinhos se cumprimentam só com um <span class="fi">Moi</span> na escada. Há até uma piada famosa: o finlandês espera atrás da porta até o vizinho sair da escada, para não ter de conversar. Por isso uma rua como a dos pais da Maia, onde a Marta fala com meia rua antes das oito, surpreende o Jay até hoje.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Sil on siniset silmät: descrever na fala</h3>
  <p>Na fala, <span class="fi">hänellä</span> vira <span class="fi" data-rekisteri="puhe">sil</span> (de <span class="fi">se</span>, que na rua serve também para pessoas), <span class="fi">millainen</span> vira <span class="fi">millanen</span>, e o <span class="fi pala">-ni</span> de “meu” cai: <span class="fi" data-rekisteri="puhe">mun nimi</span>. Você <b>não precisa</b> falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">Millainen hän on?</span></td><td><span class="fi" data-rekisteri="puhe">Millanen se on?</span></td><td>como ele é?</td></tr>
    <tr><td><span class="fi">hänellä on</span></td><td><span class="fi" data-rekisteri="puhe">sil on</span></td><td>ele, ela tem</td></tr>
    <tr><td><span class="fi">minun nimeni</span></td><td><span class="fi" data-rekisteri="puhe">mun nimi</span></td><td>o meu nome</td></tr>
  </table>
  <p class="s" data-h="uuno2" data-kirja="Millainen hän on?" data-pt="Como ele é?">Millanen se on?</p>
  <p class="s" data-h="maia" data-kirja="Hän on pitkä, ja hänellä on siniset silmät." data-pt="Ele é alto, e ele tem olhos azuis.">Se on <span data-l="pitkä#2">pitkä</span>, ja sil on siniset silmät.</p>
  <p class="s" data-h="uuno2" data-kirja="Minun nimeni on Uuno." data-pt="O meu nome é Uuno.">Mun nimi on Uuno.</p>
  <p class="s" data-h="eenok2" data-kirja="Kyllä, se on aivan hyvä." data-pt="É, está bem bom.">Joo, se on ihan hyvä.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Para terminar</h2>
  <p>Lá no alto, onde a cidade vira morro, fica o Morro do Cascalho: um bairro de encosta como tantos outros, com padaria, igreja, crianças empinando pipa e vizinhos que se conhecem. E, numa casa de portão preto e branco, o Marcus. O Anderson já está na porta, de boné e bolsa de cartas. O resgate é na lição 18.</p>
  <div class="kotitehtava" data-id="t17">
    <h3>Lição de casa</h3>
    <p><b>1.</b> Faça o seu próprio cartaz: descreva uma pessoa da sua família ou um amigo. Escreva direto no cartaz: fica salvo neste navegador.</p>
    <div class="dokumentti ficha kortti-fi oma" data-tallenna="t17-ilmoitus" lang="fi-FI">
      <div class="ficha-yla"><span class="ficha-koulu">Suomalaiset Brasiliassa</span><span class="ficha-otsikko">Ilmoitus</span></div>
      <div class="ficha-foto tyhja">kuva</div>
      <dl>
        <dt>Nimi</dt><dd><input name="nimi" aria-label="Nimi (nome)"></dd>
        <dt>Silmien väri</dt><dd><input name="silmat" aria-label="Silmien väri (cor dos olhos)"></dd>
        <dt>Hiusväri</dt><dd><input name="hiukset" aria-label="Hiusväri (cor do cabelo)"></dd>
        <dt>Kuvaus</dt><dd><input name="kuvaus" aria-label="Kuvaus (descrição)"></dd>
      </dl>
    </div>
    <p><b>2.</b> Escreva cinco frases sobre essa pessoa: como ela é (<span class="fi">Hän on…</span>), o que ela tem (<span class="fi">Hänellä on… silmät</span>, <span class="fi">…tukka</span>), o que ela vestia ontem (<span class="fi">Eilen hänellä oli…</span>) e uma frase com o genitivo plural (<span class="fi">…kanssa</span>). Leia em voz alta, com o acento no começo de <span class="fi">silmälasit</span> e <span class="fi">hiusväri</span>.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia, sobre o Anderson)</summary>
      <p class="s" data-pt="O Anderson é baixo e alegre.">Anderson on lyhyt ja iloinen.</p>
      <p class="s" data-pt="Ele tem olhos castanhos e cabelo preto curto.">Hänellä on ruskeat silmät ja lyhyt musta tukka.</p>
      <p class="s" data-pt="Ele está de boné.">Hänellä on lippis.</p>
      <p class="s" data-pt="Ontem ele estava de camisa amarela.">Eilen hänellä oli keltainen paita.</p>
      <p class="s" data-pt="Ele mora com os pais.">Hän asuu vanhempien kanssa.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t17">
    <li>Sei descrever uma pessoa: Hän on pitkä. Hänellä on siniset silmät ja ruskea tukka.</li>
    <li>Sei quando vem o plural: siniset silmät, isot silmälasit, mas ruskea tukka.</li>
    <li>Entendo uma descrição no passado: Hänellä oli tyhmä tukka ja isot silmälasit.</li>
    <li>Reconheço e uso o genitivo plural: ystävien kanssa, vanhempien koti, silmien väri.</li>
    <li>Reconheço o -ni de “meu”: nimeni, numeroni, ystäväni.</li>
    <li>Acentuo a primeira sílaba nas palavras compostas: silmälasit, hiusväri, postikierros.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'kuvailu', otsikko: 'Descrever: hän on pitkä, hänellä on siniset silmät', taso: 'essencial', hakuosa: 'h-kuvailu', treeni: 't17-kuvailu',
      html: `
<p><b>Como a pessoa é:</b> <span class="fi">hän on</span> + adjetivo. <b>O que ela tem:</b> <span class="fi">hänellä on</span> + adjetivo + substantivo. No passado: <span class="fi">hän oli</span>, <span class="fi">hänellä oli</span>.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Hän on <span data-l="pitkä#2">pitkä</span>.</span></td><td>ele é alto</td></tr>
  <tr><td><span class="fi">Hän on nuori ja laiha.</span></td><td>ela é jovem e magra</td></tr>
  <tr><td><span class="fi">Hänellä on siniset silmät.</span></td><td>ele tem olhos azuis</td></tr>
  <tr><td><span class="fi">Hänellä on ruskea tukka.</span></td><td>ela tem cabelo castanho</td></tr>
  <tr><td><span class="fi">Hänellä oli isot silmälasit.</span></td><td>ele tinha óculos grandes</td></tr>
</table>
<p><b>Plural ou singular:</b> silmät, hiukset, viikset e silmälasit são plural, e o adjetivo também: <span class="fi">siniset silmät, ruskeat hiukset, mustat viikset, isot silmälasit</span>. Uma coisa só: <span class="fi">ruskea tukka, lyhyt parta</span>.</p>
<div class="sijataulu" data-sana="silmä" data-sijat="nominatiivi,mon.nom,mon.part"></div>`
    },
    {
      id: 'monikongenetiivi', otsikko: 'O genitivo plural: ystävien, vanhempien, silmien', taso: 'essencial', hakuosa: 'h-monikko', treeni: 't17-monikon-genetiivi',
      html: `
<p><b>Forma:</b> termina em <span class="fi pala">-en</span>, quase sempre com <span class="fi pala">-i-</span> ou <span class="fi pala">-j-</span> antes: <span class="fi">ystävien, talojen, naapureiden</span>. Com -a, -ä, -o, -u, parta do partitivo plural: <span class="fi">ystäviä → ystävien</span>, <span class="fi">taloja → talojen</span>, <span class="fi">naapureita → naapureiden</span>.</p>
<p><b>Uso:</b> igual ao genitivo singular, só que para vários: com <span class="fi">kanssa</span> (<span class="fi">ystävien kanssa</span>), para o dono (<span class="fi">vanhempien koti</span>) e com as posposições (<span class="fi">talojen välissä</span>).</p>
<ul class="esim">
  <li class="s" data-pt="O Jay estava conversando com os amigos.">Jay puhui ystävien kanssa.</li>
  <li class="s" data-pt="A mãe mandou um aviso para o grupo dos vizinhos.">Äiti lähetti ilmoituksen naapureiden ryhmään.</li>
  <li class="s" data-pt="Cor dos olhos: azul.">Silmien väri: sininen.</li>
</ul>
<div class="sijataulu" data-sana="ystävä" data-sijat="nominatiivi,genetiivi,mon.nom,mon.part,mon.gen"></div>`
    },
    {
      id: 'omistusliite', otsikko: 'O -ni de “meu”: nimeni, ystäväni (para reconhecer)', taso: 'reconhecer', hakuosa: 'h-omistusliitteet', treeni: 't17-omistusliite',
      html: `
<p><b>Forma:</b> substantivo + <span class="fi pala">-ni</span> = “meu, minha”. O <span class="fi pala">-n</span> do genitivo e o <span class="fi pala">-t</span> do plural somem antes dele, e a consoante fica forte: <span class="fi">tukkani</span> (o meu cabelo).</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">nimeni</span></td><td>o meu nome</td></tr>
  <tr><td><span class="fi">numeroni</span></td><td>o meu número</td></tr>
  <tr><td><span class="fi">ystäväni</span></td><td>o meu amigo, a minha amiga (ou: os meus amigos)</td></tr>
  <tr><td><span class="fi">tukkani</span></td><td>o meu cabelo (<span class="fi">tukka</span>, não <span class="fi">tukan</span>)</td></tr>
  <tr><td><span class="fi">silmälasini</span></td><td>os meus óculos</td></tr>
</table>
<p>Na escrita, muitas vezes com o pronome: <span class="fi">minun nimeni</span>. Na fala, a terminação cai: <span class="fi" data-rekisteri="puhe">mun nimi</span>. Você só precisa reconhecer; as outras pessoas (<span class="fi pala">-si, -nsa</span>…) estão na Gramática.</p>`
    },
    {
      id: 'aantaminen17', otsikko: 'Pronúncia: o acento das palavras compostas', taso: 'essencial', hakuosa: 'h-paino',
      html: `
<p>Palavra composta = duas palavras coladas. O acento forte fica na <b>primeira sílaba</b> da palavra inteira; o começo da segunda parte recebe só um toque leve: <span class="fi pala">SIL-mä-LA-sit</span>, <span class="fi pala">POS-ti-KIER-ros</span> (a primeira maiúscula é a forte). O acento forte nunca vai para perto do fim, como em português.</p>
<ul class="esim">
  <li class="s" data-pt="cor do cabelo">hiusväri</li>
  <li class="s" data-pt="preto e branco">mustavalkoinen</li>
  <li class="s" data-pt="bairro">kaupunginosa</li>
</ul>`
    },
    {
      id: 'sudenkuopat17', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>Ter não é olla:</b> “ele tem olhos azuis” = <span class="fi">hänellä on siniset silmät</span>, nunca <span class="pala">hän on siniset silmät</span>.</li>
  <li><b>Descrição simples, forma básica:</b> <span class="fi">siniset silmät</span>; o partitivo só na negação ou com quantidade indefinida.</li>
  <li><b>Plural junto:</b> <span class="fi">isot silmälasit, mustat viikset</span>; mas <span class="fi">ruskea tukka</span> (uma coisa só).</li>
  <li><b>Alto e baixo:</b> <span class="fi"><span data-l="pitkä#2">pitkä</span></span> = alto (e comprido), <span class="fi">lyhyt</span> = baixo (e curto). Loiro = <span class="fi">vaalea</span>, não amarelo.</li>
  <li><b>Acento forte no começo:</b> <span class="fi pala">SIL-mä-LA-sit</span> com o <span class="fi pala">SIL</span> forte; o <span class="fi pala">LA</span> é só um toque.</li>
</ul>`
    }
  ]
});
