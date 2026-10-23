/* Tottakai, lição 7: lounas Otaniemessä, ammatit ja unelmat (Passon jakso 7 Maian näkökulmasta). Oma materiaali, ei
   kirjan tekstiä. Kaksi osaa omina sivuinaan (TYONKULKU 11–15; OPPITUNNIT_6_20.md §5):
   - osa A (#t07): tiistailounas RRC:n henkilöstöravintolassa (Ravintola Kivi): dialogi A (15 repliikkiä), Frases prontas,
     sanasto, ääntäminen (t ja d ennen i:tä: Maian ”tchiistaina” → Kaisan ”Terveydeksi!”), tehtävät 1–3; kikka A =
     päivän lista ja tarjotin (.cardapio.tarjotin, assets/komponentit.js: tilaus Maian äänellä, kassa sanoo hinnan).
   - osa B (#t07-b): kahvitauko, ammatit ja unelmat (Maia: taidemaalari ja keraamikko; Jay: sohvaperuna), Maia pääsee
     Habituuriin (sähköposti, ”Onneksi olkoon!”); kielioppi 1 (verbityypit 4 ja 5, käänteinen astevaihtelu tavata →
     tapaan) ja 2 (-lla, -lta, -lle verrattuna em/de/para, väline kortilla/metrolla, ihmiset Jaylle/Purjolta); kikka B =
     ”Arvaa ammatti” -kortit (.arvaa-ammatti: monivalinta, oikea vastaus kääntää kortin); tehtävät 4–9, kulttuuri, Na rua,
     kotitehtävä, itsearvio.
   Lunastaa lupaukset: t01 ”Hauska tavata … tyyppi 4, lição 7”, t04/k01 ”maksan kortilla · lição 7”.
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat itse, sama, ne, kuolla (kuolen nälkään), yrittää, käydä, palata,
   huomata, että (fraasina), pyytää, ongelma; dialogit 15 + 16; sanasto 54 → 40; sivun sanalistat 23 → 12 sanaa.
   Sivuhahmot (assets/oppaat.js): Kaisa (suomalainen laborantti, nainen 5), Ravi (insinööri Intiasta, mies 7, vain osa B),
   kassa (ulkomaalaistaustainen mies, mies 7, vain osa A). Kaikki puhuvat kirjakieltä; puhekieli vain Na rua -nurkassa,
   yleispuhekieltä (ei Helsingin slangia). Omistusliitteitä ei käytetä (oppitunti 17). */
Kurssi.lisaa({
  id: 't07',
  lyhyt: '7',
  jakso: 'Lição 7',
  otsikko: 'Almoço em Otaniemi: profissões; verbos dos tipos 4 e 5; -lla, -lta, -lle',
  lahde: 'Tema: almoço no restaurante do trabalho, profissões e sonhos · Gramática: verbos dos tipos 4 (haluta, tavata → tapaan) e 5 (tarvita), os casos -lla, -lta, -lle comparados com em, de e para, -lla de instrumento (kortilla, metrolla) · Pronúncia: t e d antes de i (tiistai, não “tchiistai”)',
  aiheet: ['tyo', 'ruoka', 'paikka', 'toiminta'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga e pintora; hoje recebe uma notícia grande' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; não consegue escolher o prato' },
    kaisa: { nimi: 'Kaisa', tyyppi: 'nainen', vaihto: 5, kuvaus: 'técnica de laboratório (laborantti), finlandesa; almoça às onze em ponto' },
    lounaskassa: { nimi: 'Atendente do caixa', tyyppi: 'mies', vaihto: 7, kuvaus: 'atende no caixa do restaurante dos funcionários' },
    ravi: { nimi: 'Ravi', tyyppi: 'mies', vaihto: 7, kuvaus: 'engenheiro, veio da Índia; conserta as máquinas do laboratório' }
  },

  sanasto: [
    'ravintola', 'lounas', 'ruokalista', 'annos', 'tarjotin', 'lautanen', 'salaattipöytä', 'kahvitauko',
    'keitto', 'kasvisruoka', 'jälkiruoka', 'lohi', 'itse', 'sama',
    'ammatti', 'insinööri', 'laborantti', 'sairaanhoitaja', 'taidemaalari', 'keraamikko', 'tietokone', 'sähköposti',
    'unelma', 'sohvaperuna', 'ongelma',
    'tavata', 'tilata', 'pelata', 'maalata', 'korjata', 'arvata', 'palata', 'huomata',
    'tarvita', 'valita', 'häiritä', 'yrittää',
    'onneksi olkoon', 'terveydeksi'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Almoço no Ravintola Kivi',
      html: `
<ul class="tavoitteet">
  <li>Parte A: você escolhe e pede comida no restaurante do trabalho (<span class="fi">Mitä sinä otat? – Haluan kalaa.</span>), paga (<span class="fi">Maksan kortilla.</span>) e diz <span class="fi">tiistai</span> sem “tchi”.</li>
  <li>Parte B: profissões e sonhos, os verbos dos tipos 4 e 5 (<span class="fi">haluta → haluan</span>, <span class="fi">tavata → tapaan</span>, <span class="fi">tarvita → tarvitsen</span>) e os casos <span class="fi pala">-lla, -lta, -lle</span>, comparados com em, de e para.</li>
</ul>
<p data-paikka="otaniemi-aalto">Terça-feira, meados de novembro. No Centro de Pesquisa de Rochas, em Otaniemi, o almoço começa cedo: às onze o restaurante dos funcionários, o <span class="fi">Ravintola Kivi</span>, já está cheio. A Maia e o Jay descem com a Kaisa, a técnica do laboratório de rochas. Ela é finlandesa e almoça às onze em ponto há vinte anos.</p>

<section class="osio">
  <h2>Diálogo A: <span class="fi">Lounaalla</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. A Maia diz uma palavra de um jeito bem brasileiro, e a Kaisa entende outra coisa: o quê? Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t07-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="Terça-feira, onze horas. A Maia, o Jay e a Kaisa estão no almoço.">Tiistai, kello yksitoista. Maia, Jay ja Kaisa <span data-l="olla#2">ovat</span> lounaalla.</p>
    <p class="s" data-h="jay" data-pt="Estou morrendo de fome!">Minä kuolen nälkään!</p>
    <p class="s" data-h="kaisa" data-pt="Às terças sempre tem peixe aqui.">Tiistaina täällä on aina kalaa.</p>
    <p class="s" data-h="maia" data-hairio="tchiistaina → tiistaina" data-puhu="Tšiistaina? Hyvä!" data-pt="“Tchiistaina”? Ótimo! (errado: tiistaina, com o t limpo)"><span class="pala">Tchiistaina</span>? Hyvä!</p>
    <p class="s" data-h="kaisa" data-pt="Saúde! (é o que se diz quando alguém espirra)">Terveydeksi!</p>
    <p class="s" data-h="jay" data-puhu="Hahaa! Maia, ti, ei tši. Tiistai!" data-pt="Haha! Maia, “ti”, não “tchi”. Tiistai!">Hahaa! Maia, <span class="pala">ti</span>, ei <span class="pala">tchi</span>. Tiistai!</p>
    <p class="s" data-h="maia" data-pt="Tiistai. Obrigada, Kaisa!">Tiistai. Kiitos, Kaisa!</p>
    <p class="s" data-h="kaisa" data-pt="O que você vai pegar, Maia?">Mitä sinä otat, Maia?</p>
    <p class="s" data-h="maia" data-pt="Eu quero peixe. Vou pegar salmão.">Minä haluan kalaa. Otan lohta.</p>
    <p class="s" data-h="kaisa" data-pt="E você, Jay?">Entä sinä, Jay?</p>
    <p class="s" data-h="jay" data-pt="Não consigo escolher. Tudo está gostoso. Para mim, o mesmo que a Maia.">En osaa <span data-l="valita">valita</span>. Kaikki on hyvää. Minulle sama kuin Maialle.</p>
    <p class="s" data-h="lounaskassa" data-pt="Oi! Oito euros e vinte.">Hei! Kahdeksan euroa kaksikymmentä.</p>
    <p class="s" data-h="maia" data-pt="Pago com cartão.">Maksan kortilla.</p>
    <p class="s" data-h="lounaskassa" data-pt="Obrigado. O pão e o leite estão naquela mesa ali. Esses vocês pegam sozinhos.">Kiitos. Leipä ja maito <span data-l="olla#2">ovat</span> tuolla pöydällä. Ne otatte itse.</p>
    <p class="s" data-h="kertoja" data-pt="Na bandeja da Maia tem salmão, pão e leite. O Jay pega dois pratos.">Maian tarjottimella on lohta, leipää ja maitoa. Jay ottaa kaksi lautasta.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos. Depois do · está onde a gramática vem.</p>
    <ul>
      <li><span class="fi">tiistaina</span> = na terça, às terças · <span class="fi pala">-na</span> com os dias da semana, como <span class="fi">lauantaina</span> (lição 3); o caso inteiro: lição 16</li>
      <li><span class="fi">Terveydeksi!</span> – <span class="fi">Kiitos!</span> = Saúde! – Obrigado! · quando alguém espirra; <span class="fi pala">-ksi</span>: lição 16</li>
      <li><span class="fi">Mitä sinä otat?</span> – <span class="fi">Otan lohta.</span> = O que você vai pegar? – Vou pegar salmão. · comida no partitivo, como no pedido (lição 4)</li>
      <li><span class="fi">En osaa <span data-l="valita">valita</span>.</span> = Não consigo escolher. · <span class="fi">osata</span> (tipo 4) e <span class="fi">valita</span> (tipo 5): parte B</li>
      <li><span class="fi">Kaikki on hyvää.</span> = Tudo está gostoso. · <span class="fi">hyvää</span> no partitivo, porque comida é “um pouco de”, como <span class="fi">kahvia</span></li>
      <li><span class="fi">Minä kuolen nälkään!</span> = Estou morrendo de fome! · <span class="fi">kuolla</span> = morrer; <span class="fi">nälkään</span>, o ilativo (lição 6): “morro para a fome”</li>
      <li><span class="fi">Minulle sama kuin Maialle.</span> = Para mim, o mesmo que para a Maia. · <span class="fi">sama</span> = o mesmo; <span class="fi pala">-lle</span>: parte B</li>
      <li><span class="fi">Ne otatte itse.</span> = Esses vocês pegam sozinhos. · <span class="fi">ne</span> = eles, elas, esses (plural de <span class="fi">se</span>); <span class="fi">itse</span> = a própria pessoa, sozinho</li>
      <li><span class="fi">lounaalla, tuolla pöydällä, Maian tarjottimella</span> = no almoço, naquela mesa ali, na bandeja da Maia · <span class="fi pala">-lla/-llä</span>: parte B</li>
      <li><span class="fi">Maksan kortilla.</span> = Pago com cartão. · <span class="fi pala">-lla</span> também diz “com quê?”: parte B</li>
    </ul>
  </div>
</section>

<section class="osio">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="No restaurante do trabalho" data-sanat="ravintola,lounas,ruokalista,annos,tarjotin,lautanen,salaattipöytä,kassa,keitto,kasvisruoka,lohi,jälkiruoka"></div>
  <p>As outras palavras da lição estão no <a href="#t07-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio" data-paikka="aalto-metroasema">
  <h2>Pronúncia: <span class="fi">tiistai</span>, não “tchiistai”</h2>
  <p>No Brasil, o t e o d antes de i viram “tch” e “dj” (“tchia”, “djia”). Em finlandês, <b>nunca</b>: a ponta da língua toca atrás dos dentes de cima e solta, sem chiado, como “tia” em Portugal. Por isso a Kaisa ouviu um espirro: “tchii!” soa como “atchim!”. Truque: diga devagar <span class="fi pala">t… ii</span> e vá juntando: <span class="fi pala">tii-stai</span>. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="terça-feira">tiistai</li>
    <li class="s" data-pt="computador">tietokone</li>
    <li class="s" data-pt="com cartão">kortilla</li>
    <li class="s" data-pt="para a mãe">äidille</li>
    <li class="s" data-pt="rádio">radio</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinki-syksy">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Você entendeu o diálogo A?</h3>
    <div class="valinta" data-oikea="lohta">
      <p class="kysymys"><span class="fi">Mitä Maia ottaa?</span></p>
      <div class="vaihtoehdot"><button type="button">kanaa</button><button type="button">lohta</button><button type="button">lihaa</button></div>
    </div>
    <div class="valinta" data-oikea="Jay">
      <p class="kysymys"><span class="fi">Kuka ei osaa <span data-l="valita">valita</span>?</span></p>
      <div class="vaihtoehdot"><button type="button">Maia</button><button type="button">Kaisa</button><button type="button">Jay</button></div>
    </div>
    <div class="valinta" data-oikea="Terveydeksi!">
      <p class="kysymys"><span class="fi">Mitä Kaisa sanoo?</span> (quando a Maia diz “tchiistaina”)</p>
      <div class="vaihtoehdot"><button type="button">Kiitos!</button><button type="button">Terveydeksi!</button><button type="button">Hyvää päivää!</button></div>
    </div>
    <div class="valinta" data-oikea="Kortilla.">
      <p class="kysymys"><span class="fi">Miten Maia maksaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kortilla.</button><button type="button">Käteisellä.</button></div>
    </div>
    <div class="valinta" data-oikea="pöydällä">
      <p class="kysymys"><span class="fi">Missä leipä ja maito <span data-l="olla#2">ovat</span>?</span></p>
      <div class="vaihtoehdot"><button type="button">pöydällä</button><button type="button">lautasella</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>2. No Ravintola Kivi: monte a sua bandeja</h3>
    <p class="ohje">Este é o cardápio de terça. Toque num prato: a Maia pede em finlandês e o caixa diz o preço. No fim, toque em <b>Ir ao caixa</b>. Desafio: monte uma bandeja de exatamente 9,70 €. (Salada, pão e leite já estão incluídos.)</p>
    <div class="cardapio tarjotin" data-otsikko="Ravintola Kivi · tiistain ruokalista" data-aani="nainen" data-vaihto="0" data-kassa-aani="mies" data-kassa-vaihto="7"
         data-sano-hinta data-tilaus-otsikko="A sua bandeja" data-lasku-nappi="Ir ao caixa" data-lasku="Yhteensä {summa} euroa {sentit}. Kortilla vai käteisellä?">
      <div data-ryhma="Keitto"><p data-hinta="6.2" data-ikoni="🥣" data-puhu="Otan kasviskeittoa.">kasviskeitto</p></div>
      <div data-ryhma="Kasvisruoka"><p data-hinta="7.2" data-ikoni="🍝" data-puhu="Otan kasvispastaa.">kasvispasta</p></div>
      <div data-ryhma="Kotiruoka"><p data-hinta="7.2" data-ikoni="🥘" data-puhu="Lihapullat ja perunat, kiitos.">lihapullat ja perunat</p></div>
      <div data-ryhma="Kala"><p data-hinta="8.2" data-ikoni="🐟" data-puhu="Otan lohta ja perunoita.">lohi ja perunat</p></div>
      <div data-ryhma="Jälkiruoka"><p data-hinta="2.5" data-ikoni="☕" data-puhu="Kahvi ja pulla, kiitos.">kahvi ja pulla</p></div>
    </div>
    <p class="ohje">Agora responda em voz alta, antes de abrir o modelo.</p>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä otat?</summary><p class="s" data-pt="Vou pegar a sopa de legumes.">Otan kasviskeittoa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Haluatko kalaa?</summary><p class="s" data-pt="Não quero, obrigada. Vou experimentar a massa de legumes.">En halua, kiitos. Kokeilen kasvispastaa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kortilla vai käteisellä?</summary><p class="s" data-pt="Com cartão, por favor.">Kortilla, kiitos.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mikä päivä tänään on?</summary><p class="s" data-pt="Hoje é terça-feira.">Tänään on tiistai.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Missä salaattipöytä <span data-l="olla#2">on</span>?</summary><p class="s" data-pt="O bufê de saladas está ali.">Salaattipöytä <span data-l="olla#2">on</span> tuolla.</p></details>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Ouça o caixa: quanto custa?</h3>
    <p class="ohje">Aperte ▶. O caixa diz só o preço. Escolha o que você ouviu e depois procure o prato (ou os dois pratos juntos) no cardápio do exercício 2.</p>
    <div class="valinta" data-kuuntele="kuusi euroa kaksikymmentä" data-oikea="6,20 €">
      <p class="kysymys"><span class="fi">Paljonko annos maksaa?</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">7,20 €</button><button type="button">6,20 €</button><button type="button">6,70 €</button></div>
    </div>
    <div class="valinta" data-kuuntele="kahdeksan euroa kaksikymmentä" data-oikea="8,20 €">
      <p class="kysymys"><span class="fi">Paljonko annos maksaa?</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">8,20 €</button><button type="button">9,20 €</button><button type="button">8,70 €</button></div>
    </div>
    <div class="valinta" data-kuuntele="kaksi euroa viisikymmentä" data-oikea="2,50 €">
      <p class="kysymys"><span class="fi">Paljonko annos maksaa?</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">2,15 €</button><button type="button">3,50 €</button><button type="button">2,50 €</button></div>
    </div>
    <div class="valinta" data-kuuntele="yhdeksän euroa seitsemänkymmentä" data-oikea="9,70 €">
      <p class="kysymys"><span class="fi">Paljonko annos maksaa?</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">9,17 €</button><button type="button">9,70 €</button><button type="button">8,70 €</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Profissões, sonhos e -lla, -lta, -lle',
      html: `
<ul class="tavoitteet">
  <li>Você fala de profissões e sonhos: <span class="fi">Olen insinööri. Haluan olla taidemaalari.</span></li>
  <li>Você conjuga verbos do tipo 4 (<span class="fi">haluta → haluan</span>, <span class="fi">tavata → tapaan</span>) e do tipo 5 (<span class="fi">tarvita → tarvitsen</span>).</li>
  <li>Você usa <span class="fi pala">-lla, -lta, -lle</span> onde o português diz “em, de, para”: <span class="fi">pöydällä, Ravilta, Jaylle</span>, e diz com quê: <span class="fi">kortilla, metrolla</span>.</li>
</ul>

<p data-paikka="otaniemi-aalto">Duas da tarde: pausa para o café (<span class="fi">kahvitauko</span>) na copa do Centro. Chega o Ravi, engenheiro que veio da Índia e conserta as máquinas do laboratório. Ele traz um jogo de cartas: <span class="fi">Arvaa ammatti</span>, “adivinhe a profissão”. E no fim do café o celular da Maia apita.</p>

<section class="osio">
  <h2>Diálogo B: <span class="fi">Kahvitauolla</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure três verbos do tipo 4 (terminam em vogal + <span class="fi pala">-ta</span>) e a pessoa a quem o Ravi pergunta: ela vem com <span class="fi pala">-lta</span>. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t07-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="ravi" data-pt="Oi! Estou atrapalhando?">Hei! Häiritsenkö?</p>
    <p class="s" data-h="kaisa" data-pt="Não está. Ravi, esta é a Maia. Ela é geóloga, como o Jay.">Et häiritse. Ravi, tämä on Maia. Hän on geologi, niin kuin Jay.</p>
    <p class="s" data-h="maia" data-pt="Prazer! Você também é geólogo?">Hauska tavata! Oletko sinä myös geologi?</p>
    <p class="s" data-h="ravi" data-pt="Não. Sou engenheiro. Vocês querem jogar? Eu tenho um jogo: Adivinhe a profissão!">En ole. Olen insinööri. Haluatteko pelata? Minulla on peli: Arvaa ammatti!</p>
    <p class="s" data-h="jay" data-pt="Eu não sei jogar. Eu só sei ficar sentado.">Minä en osaa pelata. Minä osaan vain istua.</p>
    <p class="s" data-h="maia" data-pt="Eu tento! Sem problema.">Minä yritän! Ei ongelmaa.</p>
    <p class="s" data-h="kertoja" data-pt="Eles jogam e riem. Depois o Ravi pergunta à Maia:">He pelaavat ja nauravat. Sitten Ravi kysyy Maialta:</p>
    <p class="s" data-h="ravi" data-pt="Com o que você sonha, Maia?">Mistä sinä unelmoit, Maia?</p>
    <p class="s" data-h="maia" data-pt="Eu quero ser pintora e ceramista. Pinto quadros e faço cerâmica.">Minä haluan olla taidemaalari ja keraamikko. Maalaan tauluja ja teen keramiikkaa.</p>
    <p class="s" data-h="jay" data-pt="E eu sonho com um sofá. Quero ser batata de sofá.">Ja minä unelmoin sohvasta. Haluan olla sohvaperuna.</p>
    <p class="s" data-h="kaisa" data-pt="Batata de sofá? Isso não é profissão!">Sohvaperuna? Se ei ole ammatti!</p>
    <p class="s" data-h="jay" data-pt="Ainda não.">Ei vielä.</p>
    <p class="s" data-h="kertoja" data-pt="O celular da Maia apita. Chega um e-mail do Habituuri para a Maia.">Maian puhelin piippaa. Maialle tulee sähköposti Habituurista.</p>
    <p class="s" data-h="maia" data-pt="Nossa! Eu consegui: vou expor no Habituuri!">Voi! Minä pääsen Habituuriin!</p>
    <p class="s" data-h="jay" data-pt="Parabéns! Agora você é geóloga e artista!">Onneksi olkoon! Nyt sinä olet geologi ja taiteilija!</p>
    <p class="s" data-h="maia" data-pt="Amanhã eu passo lá e volto para o trabalho às duas.">Huomenna käyn siellä ja palaan töihin kello kaksi.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <ul>
      <li><span class="fi">Häiritsenkö? – Et häiritse.</span> = Estou atrapalhando? – Não está. · <span class="fi">häiritä</span>, tipo 5: Gramática 1</li>
      <li><span class="fi">Hauska tavata!</span> = Prazer! · a lição 1 prometeu: <span class="fi">tavata</span> é do tipo 4 (<span class="fi">minä tapaan</span>): Gramática 1</li>
      <li><span class="fi">Haluatteko pelata?</span> = Vocês querem jogar? · <span class="fi">haluta</span> + infinitivo, como “querer jogar”</li>
      <li><span class="fi">Ravi kysyy Maialta.</span> = O Ravi pergunta à Maia. · em finlandês se pergunta “de” alguém, com <span class="fi pala">-lta</span>: Gramática 2</li>
      <li><span class="fi">Mistä sinä unelmoit? – Unelmoin sohvasta.</span> = Com o que você sonha? – Sonho com um sofá. · <span class="fi pala">-sta</span> = “de, sobre” (lição 6)</li>
      <li><span class="fi">Maalaan tauluja.</span> = Pinto quadros. · <span class="fi">tauluja</span>, partitivo plural: lição 11</li>
      <li><span class="fi">Maialle tulee sähköposti.</span> = Chega um e-mail para a Maia (a Maia recebe um e-mail). · <span class="fi pala">-lle</span>: Gramática 2</li>
      <li><span class="fi">Onneksi olkoon!</span> = Parabéns! · expressão fixa (literalmente “que seja para a sorte”)</li>
      <li><span class="fi">Minä yritän! Ei ongelmaa.</span> = Eu tento! Sem problema. · <span class="fi">yrittää</span> (tentar), tipo 1: <span class="fi">yritän</span></li>
      <li><span class="fi">Huomenna käyn siellä.</span> = Amanhã eu passo lá (vou e volto). · <span class="fi">käydä</span> = ir a um lugar e voltar; <span class="fi">palata</span> (voltar), tipo 4: Gramática 1</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 1 · Verbos dos tipos 4 e 5</h2>
  <h3>Tipo 4: vogal + -ta/-tä</h3>
  <p>Você já conhece três: <span class="fi">haluta</span> (querer), <span class="fi">tavata</span> (encontrar, conhecer) e <span class="fi">osata</span> (saber fazer). Nesta lição chegam <span class="fi">tilata</span> (pedir, encomendar), <span class="fi">siivota</span> (limpar), <span class="fi">avata</span> (abrir), <span class="fi">pelata</span> (jogar), <span class="fi">maalata</span> (pintar), <span class="fi">korjata</span> (consertar), <span class="fi">arvata</span> (adivinhar), <span class="fi">palata</span> (voltar) e <span class="fi">huomata</span> (perceber, notar). Para conjugar: tire o <span class="fi pala">-ta/-tä</span>, ponha <span class="fi pala">-a/-ä</span> e cole a terminação de sempre: <span class="fi">haluta → halua- → haluan</span>. Na 3ª pessoa do singular a vogal já está longa, nada a mais: <span class="fi">hän haluaa</span>.</p>
  <table class="taivutus">
    <tr><th><span class="fi">haluta</span> (querer)</th><th><span class="fi">tavata</span> (encontrar)</th></tr>
    <tr><td><span class="fi">minä haluan</span><span class="kaannos" lang="pt-BR">eu quero</span></td><td><span class="fi">minä tapaan</span><span class="kaannos" lang="pt-BR">eu encontro</span></td></tr>
    <tr><td><span class="fi">sinä haluat</span><span class="kaannos" lang="pt-BR">você quer</span></td><td><span class="fi">sinä tapaat</span><span class="kaannos" lang="pt-BR">você encontra</span></td></tr>
    <tr><td><span class="fi">hän haluaa</span><span class="kaannos" lang="pt-BR">ele, ela quer</span></td><td><span class="fi">hän tapaa</span><span class="kaannos" lang="pt-BR">ele, ela encontra</span></td></tr>
    <tr><td><span class="fi">me haluamme</span><span class="kaannos" lang="pt-BR">nós queremos</span></td><td><span class="fi">me tapaamme</span><span class="kaannos" lang="pt-BR">nós nos encontramos</span></td></tr>
    <tr><td><span class="fi">te haluatte</span><span class="kaannos" lang="pt-BR">vocês querem</span></td><td><span class="fi">te tapaatte</span><span class="kaannos" lang="pt-BR">vocês se encontram</span></td></tr>
    <tr><td><span class="fi">he haluavat</span><span class="kaannos" lang="pt-BR">eles, elas querem</span></td><td><span class="fi">he tapaavat</span><span class="kaannos" lang="pt-BR">eles, elas se encontram</span></td></tr>
  </table>
  <div class="saanto">
    <h3>A gradação ao contrário</h3>
    <p>No tipo 1, o infinitivo é forte e “eu” é fraco: <span class="fi">nukkua → nukun</span> (lição 2). No tipo 4 é o <b>contrário</b>: o infinitivo tem a consoante fraca, e <b>todas</b> as pessoas têm a forte, até o negativo: <span class="fi">tavata → tapaan, hän tapaa, en tapaa</span>; <span class="fi">pelätä → pelkään</span> (ter medo); <span class="fi">piipata → piippaa</span> (apitar). Por isso <span class="fi">Hauska tavata</span> e <span class="fi">Me tapaamme huomenna</span> parecem palavras diferentes: é o mesmo verbo.</p>
  </div>
  <h3>Tipo 5: -ita/-itä</h3>
  <p><span class="fi">tarvita</span> (precisar), <span class="fi">valita</span> (escolher), <span class="fi">häiritä</span> (atrapalhar): tire o <span class="fi pala">-a</span>, ponha <span class="fi pala">-se-</span> e cole a terminação: <span class="fi">tarvita → tarvitse- → tarvitsen</span>. Assim: <span class="fi">tarvitsen, tarvitset, hän tarvitsee, tarvitsemme, tarvitsette, tarvitsevat</span>. Negativo: <span class="fi">en tarvitse</span>, <span class="fi">et häiritse</span>.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o comprimento continua mudando tudo. <span class="fi">osaan</span> (eu sei fazer) não é <span class="fi">ostan</span> (eu compro), e <span class="fi">tapaan</span> (eu encontro) não é <span class="fi">tapan</span> (eu mato), como você ouviu na lição 1. No tipo 4, as pessoas têm a vogal longa: <span class="fi">tapaan, osaan, haluan</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: tipos 4 e 5</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Complete com o verbo</h3>
    <p class="ohje">O infinitivo está entre parênteses. Tipo 4: tire <span class="fi pala">-ta</span> e ponha a vogal (<span class="fi">haluta → halua-</span>, cuidado com <span class="fi">tavata → tapaa-</span>). Tipo 5: <span class="fi">tarvita → tarvitse-</span>. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Minä <span class="aukko" data-oikea="haluan"></span> kalaa. <span data-ei-kuplaa>(haluta)</span></p>
      <p>Sinä <span class="aukko" data-oikea="osaat"></span> hyvin suomea. <span data-ei-kuplaa>(osata)</span></p>
      <p>Me <span class="aukko" data-oikea="tapaamme"></span> huomenna. <span data-ei-kuplaa>(tavata)</span></p>
      <p>Ravi <span class="aukko" data-oikea="korjaa"></span> koneita. <span data-ei-kuplaa>(korjata)</span></p>
      <p>Sohvaperuna ei <span class="aukko" data-oikea="siivoa"></span>. <span data-ei-kuplaa>(siivota)</span></p>
      <p>He <span class="aukko" data-oikea="tilaavat"></span> kahvia kokoukseen. <span data-ei-kuplaa>(tilata)</span></p>
      <p><span class="aukko" data-oikea="Tarvitsetko"></span> sinä haarukkaa? <span data-ei-kuplaa>(tarvita)</span></p>
      <p>Mitä te <span class="aukko" data-oikea="valitsette"></span>? <span data-ei-kuplaa>(valita)</span></p>
      <p>Minä <span class="aukko" data-oikea="palaan"></span> kotiin kello viisi. <span data-ei-kuplaa>(palata)</span></p>
      <p>Maia <span class="aukko" data-oikea="huomaa"></span>, että Jay nukkuu. <span data-ei-kuplaa>(huomata)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>5. <span class="fi">Arvaa ammatti!</span> Adivinhe a profissão</h3>
    <p class="ohje">O jogo do Ravi. Leia (ou ouça ▶) a pista e adivinhe: <span class="fi">Kuka minä olen?</span> Quem acerta vira a carta.</p>
    <div class="arvaa-ammatti">
      <div class="valinta arvaa-kortti" data-oikea="kokki">
        <p class="arvaa-kuva"><span class="emoji">🍳</span> <span class="fi">kokki</span></p>
        <p class="s" data-pt="Trabalho num restaurante. Faço comida: sopa, peixe e almôndegas.">Olen töissä ravintolassa. Teen ruokaa: keittoa, kalaa ja lihapullia.</p>
        <p class="kysymys"><span class="fi">Kuka minä olen?</span></p>
        <div class="vaihtoehdot"><button type="button">myyjä</button><button type="button">kokki</button><button type="button">kuljettaja</button></div>
      </div>
      <div class="valinta arvaa-kortti" data-oikea="sairaanhoitaja">
        <p class="arvaa-kuva"><span class="emoji">🩺</span> <span class="fi">sairaanhoitaja</span></p>
        <p class="s" data-pt="Trabalho num hospital, mas não sou médica. Ajudo o médico.">Olen töissä sairaalassa, mutta en ole lääkäri. Autan lääkäriä.</p>
        <p class="kysymys"><span class="fi">Kuka minä olen?</span></p>
        <div class="vaihtoehdot"><button type="button">opettaja</button><button type="button">insinööri</button><button type="button">sairaanhoitaja</button></div>
      </div>
      <div class="valinta arvaa-kortti" data-oikea="kuljettaja">
        <p class="arvaa-kuva"><span class="emoji">🚌</span> <span class="fi">kuljettaja</span></p>
        <p class="s" data-pt="Dirijo ônibus. Todo mundo paga com cartão ou com o celular.">Ajan bussia. Kaikki maksavat kortilla tai puhelimella.</p>
        <p class="kysymys"><span class="fi">Kuka minä olen?</span></p>
        <div class="vaihtoehdot"><button type="button">kuljettaja</button><button type="button">toimittaja</button><button type="button">kokki</button></div>
      </div>
      <div class="valinta arvaa-kortti" data-oikea="insinööri">
        <p class="arvaa-kuva"><span class="emoji">💻</span> <span class="fi">insinööri</span></p>
        <p class="s" data-pt="Conserto máquinas. Trabalho no computador.">Korjaan koneita. Teen töitä tietokoneella.</p>
        <p class="kysymys"><span class="fi">Kuka minä olen?</span></p>
        <div class="vaihtoehdot"><button type="button">toimittaja</button><button type="button">insinööri</button><button type="button">laborantti</button></div>
      </div>
      <div class="valinta arvaa-kortti" data-oikea="laborantti">
        <p class="arvaa-kuva"><span class="emoji">🧪</span> <span class="fi">laborantti</span></p>
        <p class="s" data-pt="Trabalho num laboratório. Os geólogos me dão pedras.">Olen töissä laboratoriossa. Geologit antavat minulle kiviä.</p>
        <p class="kysymys"><span class="fi">Kuka minä olen?</span></p>
        <div class="vaihtoehdot"><button type="button">geologi</button><button type="button">laborantti</button><button type="button">kokki</button></div>
      </div>
      <div class="valinta arvaa-kortti" data-oikea="taidemaalari">
        <p class="arvaa-kuva"><span class="emoji">🎨</span> <span class="fi">taidemaalari</span></p>
        <p class="s" data-pt="Pinto quadros. Casas eu não pinto.">Maalaan tauluja. Taloja en maalaa.</p>
        <p class="kysymys"><span class="fi">Kuka minä olen?</span></p>
        <div class="vaihtoehdot"><button type="button">maalari</button><button type="button">keraamikko</button><button type="button">taidemaalari</button></div>
      </div>
      <div class="valinta arvaa-kortti" data-oikea="sohvaperuna">
        <p class="arvaa-kuva"><span class="emoji">🥔</span> <span class="fi">sohvaperuna</span></p>
        <p class="s" data-pt="Fico deitado no sofá e durmo. Isso não é profissão… ainda.">Makaan sohvalla ja nukun. Se ei ole ammatti… vielä.</p>
        <p class="kysymys"><span class="fi">Kuka minä olen?</span></p>
        <div class="vaihtoehdot"><button type="button">sairaanhoitaja</button><button type="button">sohvaperuna</button><button type="button">kuljettaja</button></div>
      </div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="helsingin-kaupunginosat">
  <h2>Gramática 2 · -lla, -lta, -lle: em cima, junto e com pessoas</h2>
  <p>Na lição 6 você aprendeu os casos de lugar “dentro”: <span class="fi">kaupassa, kaupasta, kauppaan</span>. Agora vêm os três de “fora”: em cima de uma superfície, junto de algo, num lugar aberto. Eles se formam do genitivo sem o <span class="fi pala">-n</span>: <span class="fi">pöytä → pöydän → pöydällä</span>, <span class="fi">kortti → kortin → kortilla</span>. A vogal da terminação segue a harmonia: <span class="fi pala">-lla/-llä</span>, <span class="fi pala">-lta/-ltä</span>; <span class="fi pala">-lle</span> é igual para todos.</p>
  <table class="taivutus">
    <tr><th>pergunta</th><th>terminação</th><th>exemplo</th></tr>
    <tr><td><span class="fi">missä?</span><span class="kaannos" lang="pt-BR">onde?</span></td><td><span class="fi pala">-lla/-llä</span> (adessivo)</td><td><span class="fi">Leipä <span data-l="olla#2">on</span> pöydällä.</span><span class="kaannos" lang="pt-BR">O pão está na mesa.</span></td></tr>
    <tr><td><span class="fi">mistä?</span><span class="kaannos" lang="pt-BR">de onde?</span></td><td><span class="fi pala">-lta/-ltä</span> (ablativo)</td><td><span class="fi">Otan leipää pöydältä.</span><span class="kaannos" lang="pt-BR">Pego pão da mesa.</span></td></tr>
    <tr><td><span class="fi">mihin?</span><span class="kaannos" lang="pt-BR">para onde?</span></td><td><span class="fi pala">-lle</span> (alativo)</td><td><span class="fi">Kaisa laittaa leipää pöydälle.</span><span class="kaannos" lang="pt-BR">A Kaisa põe pão na mesa.</span></td></tr>
  </table>

  <h3>em, de, para: qual caso?</h3>
  <p>O português usa as mesmas preposições para tudo. O finlandês escolhe entre “dentro” e “fora”, e para pessoas usa sempre os de fora. Compare:</p>
  <table class="taivutus">
    <tr><th>português</th><th>dentro (lição 6)</th><th>em cima, junto, aberto</th><th>pessoa</th></tr>
    <tr><td>em …</td><td><span class="fi">kaupassa</span><span class="kaannos" lang="pt-BR">na loja</span></td><td><span class="fi">pöydällä, asemalla</span><span class="kaannos" lang="pt-BR">na mesa, na estação</span></td><td><span class="fi">Jayllä on</span><span class="kaannos" lang="pt-BR">o Jay tem</span></td></tr>
    <tr><td>de …</td><td><span class="fi">kaupasta</span><span class="kaannos" lang="pt-BR">da loja</span></td><td><span class="fi">pöydältä, asemalta</span><span class="kaannos" lang="pt-BR">da mesa, da estação</span></td><td><span class="fi">Jayltä</span><span class="kaannos" lang="pt-BR">do Jay</span></td></tr>
    <tr><td>para, a …</td><td><span class="fi">kauppaan</span><span class="kaannos" lang="pt-BR">para a loja</span></td><td><span class="fi">pöydälle, asemalle</span><span class="kaannos" lang="pt-BR">para a mesa, para a estação</span></td><td><span class="fi">Jaylle</span><span class="kaannos" lang="pt-BR">para o Jay</span></td></tr>
  </table>
  <ul>
    <li><b>Superfícies:</b> <span class="fi">pöydällä, tarjottimella, lautasella, sohvalla</span> (na mesa, na bandeja, no prato, no sofá).</li>
    <li><b>Lugares abertos:</b> <span class="fi">asemalla, torilla, Rautatientorilla</span> (na estação, na praça, na praça da Estação). Aprenda cada lugar junto com o caso.</li>
    <li><b>Situações:</b> <span class="fi">lounaalla</span> (no almoço), <span class="fi">kahvitauolla</span> (na pausa do café). Mas a reunião é “dentro”: <span class="fi">kokouksessa</span>.</li>
    <li><b>Pessoas, sempre:</b> <span class="fi">Purjolla on auto</span> (a Purjo tem carro, lição 5), <span class="fi">Kysyn Ravilta</span> (pergunto ao Ravi), <span class="fi">Pyydän Ravilta apua</span> (peço ajuda ao Ravi), <span class="fi">Soitan äidille</span> (ligo para a mãe).</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o “para” do português puxa para o ilativo (<span class="fi pala">-aan, -oon, -iin…</span>), e o “a” de “perguntar a alguém” engana. Quem fala uma língua românica (português, italiano, espanhol) erra muito aqui: no lugar do <span class="fi pala">-lle</span> vem o ilativo, como <span class="pala">Jayhin</span> em vez de <span class="fi">Jaylle</span>. Regra de bolso: <b>para uma pessoa, <span class="fi pala">-lle</span></b>; <b>de uma pessoa, <span class="fi pala">-lta</span></b>, também em “perguntar a alguém”: <span class="fi">kysyä Maialta</span>.</p>
  </div>

  <h3>Com quê? O instrumento</h3>
  <p>O <span class="fi pala">-lla/-llä</span> também diz <b>com que meio</b> você faz algo, como o “com” de “com cartão” e o “de” de “de metrô”. É a promessa da lição 4: <span class="fi">maksan kortilla</span>.</p>
  <ul class="esim">
    <li class="s" data-pt="Pago com cartão.">Maksan kortilla.</li>
    <li class="s" data-pt="Pago em dinheiro.">Maksan käteisellä.</li>
    <li class="s" data-pt="Vou para o trabalho de metrô.">Menen töihin metrolla.</li>
    <li class="s" data-pt="O Hiisi vai de carro.">Hiisi menee autolla.</li>
    <li class="s" data-pt="O Ravi trabalha no computador.">Ravi tekee töitä tietokoneella.</li>
  </ul>
  <p>Mas “com alguém”, de companhia, é outra coisa: <span class="fi">kanssa</span> depois do genitivo, <span class="fi">Jayn kanssa</span> (com o Jay). <span class="fi">Jayllä</span> quer dizer “o Jay tem”.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinki-lumi">
  <h2>Exercícios: -lla, -lta, -lle</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. -lla, -lta ou -lle?</h3>
    <p class="ohje">Entre parênteses está o que a frase quer dizer em português. Escolha a forma.</p>
    <div class="valinta" data-oikea="pöydällä">
      <p class="kysymys"><span class="fi">Leipä <span data-l="olla#2">on</span> ___.</span> (na mesa)</p>
      <div class="vaihtoehdot"><button type="button">pöydältä</button><button type="button">pöydällä</button><button type="button">pöydässä</button></div>
    </div>
    <div class="valinta" data-oikea="Purjolle">
      <p class="kysymys"><span class="fi">Maia soittaa ___.</span> (liga para a Purjo)</p>
      <div class="vaihtoehdot"><button type="button">Purjoon</button><button type="button">Purjolla</button><button type="button">Purjolle</button></div>
    </div>
    <div class="valinta" data-oikea="Ravilta">
      <p class="kysymys"><span class="fi">Maia kysyy ___.</span> (pergunta ao Ravi)</p>
      <div class="vaihtoehdot"><button type="button">Raville</button><button type="button">Ravilta</button><button type="button">Ravilla</button></div>
    </div>
    <div class="valinta" data-oikea="kortilla">
      <p class="kysymys"><span class="fi">Jay maksaa ___.</span> (com cartão)</p>
      <div class="vaihtoehdot"><button type="button">kortilla</button><button type="button">kortille</button><button type="button">kortissa</button></div>
    </div>
    <div class="valinta" data-oikea="lounaalta">
      <p class="kysymys"><span class="fi">Kaisa tulee ___.</span> (vem do almoço)</p>
      <div class="vaihtoehdot"><button type="button">lounaalle</button><button type="button">lounaalla</button><button type="button">lounaalta</button></div>
    </div>
    <div class="valinta" data-oikea="asemalle">
      <p class="kysymys"><span class="fi">Me menemme ___.</span> (para a estação)</p>
      <div class="vaihtoehdot"><button type="button">asemalle</button><button type="button">asemalta</button><button type="button">asemalla</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. Ouça: -lla, -lta ou -lle?</h3>
    <p class="ohje">Aperte ▶ e escolha a forma que você ouviu. Só muda o fim: <span class="fi pala">ll</span>, <span class="fi pala">lt</span> ou <span class="fi pala">lle</span>.</p>
    <div class="valinta" data-kuuntele="pöydältä" data-oikea="pöydältä">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">pöydällä</button><button type="button">pöydältä</button><button type="button">pöydälle</button></div>
    </div>
    <div class="valinta" data-kuuntele="Jaylle" data-oikea="Jaylle">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">Jayllä</button><button type="button">Jayltä</button><button type="button">Jaylle</button></div>
    </div>
    <div class="valinta" data-kuuntele="asemalla" data-oikea="asemalla">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">asemalle</button><button type="button">asemalla</button><button type="button">asemalta</button></div>
    </div>
    <div class="valinta" data-kuuntele="äidiltä" data-oikea="äidiltä">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">äidille</button><button type="button">äidillä</button><button type="button">äidiltä</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>8. Leia o e-mail do Habituuri</h3>
    <p class="ohje">Este é o e-mail que fez o celular da Maia apitar. Leia e responda.</p>
    <div class="sahkoposti" lang="fi-FI">
      <div class="sahkoposti-yla">
        <p><b>Lähettäjä:</b> Habituuri</p>
        <p><b>Päivä:</b> tiistai 17.11.2026</p>
      </div>
      <div class="sahkoposti-runko">
        <p>Hei Maia,</p>
        <p>kiitos viestistä! Onneksi olkoon: sinä pääset Habituuriin!</p>
        <p>Habituuri on joulukuussa Helsingissä. Sinulla on paikka numero 27.</p>
        <p>Tarvitsetko pöytää? Kirjoita meille perjantaina.</p>
        <p>Terveisin</p>
        <p>Habituurin tiimi</p>
      </div>
    </div>
    <div class="valinta" data-oikea="Habituurista">
      <p class="kysymys"><span class="fi">Mistä sähköposti tulee?</span></p>
      <div class="vaihtoehdot"><button type="button">Purjolta</button><button type="button">Habituurista</button><button type="button">Jayltä</button></div>
    </div>
    <div class="valinta" data-oikea="joulukuussa">
      <p class="kysymys"><span class="fi">Milloin Habituuri on?</span></p>
      <div class="vaihtoehdot"><button type="button">perjantaina</button><button type="button">marraskuussa</button><button type="button">joulukuussa</button></div>
    </div>
    <div class="valinta" data-oikea="Numero 27.">
      <p class="kysymys"><span class="fi">Mikä paikka Maialla on?</span></p>
      <div class="vaihtoehdot"><button type="button">Numero 27.</button><button type="button">Numero 17.</button><button type="button">Numero 7.</button></div>
    </div>
    <div class="valinta" data-oikea="Habituurille">
      <p class="kysymys"><span class="fi">Kenelle Maia kirjoittaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Jaylle</button><button type="button">Kaisalle</button><button type="button">Habituurille</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>9. Traduza para o finlandês</h3>
    <div class="kaanna"><p class="pt">Eu quero peixe.</p><p class="s" data-pt="Eu quero peixe.">Haluan kalaa.</p></div>
    <div class="kaanna"><p class="pt">Pago com cartão.</p><p class="s" data-pt="Pago com cartão.">Maksan kortilla.</p></div>
    <div class="kaanna"><p class="pt">A gente se encontra amanhã.</p><p class="s" data-pt="A gente se encontra amanhã.">Me tapaamme huomenna.</p></div>
    <div class="kaanna"><p class="pt">O Jay liga para a mãe.</p><p class="s" data-pt="O Jay liga para a mãe.">Jay soittaa äidille.</p></div>
    <div class="kaanna"><p class="pt">A Maia pergunta ao Ravi.</p><p class="s" data-pt="A Maia pergunta ao Ravi.">Maia kysyy Ravilta.</p></div>
    <div class="kaanna"><p class="pt">Você sabe jogar?</p><p class="s" data-pt="Você sabe jogar?">Osaatko sinä pelata?</p></div>
    <div class="kaanna"><p class="pt">Para mim, o mesmo, por favor.</p><p class="s" data-pt="Para mim, o mesmo, por favor.">Minulle sama, kiitos.</p></div>
    <div class="kaanna"><p class="pt">Eu tento!</p><p class="s" data-pt="Eu tento!">Minä yritän!</p></div>
  </div>
</section>

<aside class="kulttuuri" data-paikka="helsinki-lumi">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Almoço às onze: o <span class="fi">lounas</span> no trabalho finlandês</h3>
  <figure class="kuva" data-kuva="otaniemi-aalto"></figure>
  <p>Na Finlândia se almoça cedo. Entre as onze e o meio-dia, os restaurantes de empresas e universidades ficam lotados, e à uma da tarde quase todo mundo já voltou para a mesa de trabalho. O almoço é rápido, uns trinta minutos, e quase sempre no autosserviço: você pega a bandeja (<span class="fi">tarjotin</span>), escolhe o prato do dia e paga no caixa. Muitas empresas pagam uma parte do almoço dos funcionários.</p>
  <p>O preço normalmente já inclui o bufê de saladas (<span class="fi">salaattipöytä</span>), pão, água e… <b>leite</b>: muitos adultos finlandeses tomam um copo de leite (<span class="fi">maito</span>) no almoço, e ninguém acha estranho.</p>
  <p>Depois vem a pausa do café, a <span class="fi">kahvitauko</span>, de manhã e à tarde. Em Otaniemi, no campus da Universidade Aalto, essas pausas juntam engenheiros, cientistas e estudantes do mundo inteiro: na copa do Centro de Pesquisa de Rochas se ouve finlandês, inglês, hindi e, agora, português.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Mä otan kalaa: o almoço na língua falada</h3>
  <p>Na fila do almoço, quase ninguém fala como no diálogo. Os pronomes encolhem (<span class="fi" data-rekisteri="puhe">mä, sä</span>), e <span class="fi">minulle</span> vira <span class="fi" data-rekisteri="puhe">mulle</span>. Você <b>não precisa</b> falar assim; só reconheça. Nada de gíria de Helsinque: estas formas se ouvem no país inteiro.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">Minä otan kalaa.</span></td><td><span class="fi">Mä otan kalaa.</span></td><td>Vou pegar peixe.</td></tr>
    <tr><td><span class="fi">Minulle kahvi, kiitos.</span></td><td><span class="fi">Mulle kahvi, kiitos.</span></td><td>Pra mim, um café.</td></tr>
    <tr><td><span class="fi">Sinulle tulee viesti.</span></td><td><span class="fi">Sulle tulee viesti.</span></td><td>Chegou mensagem pra você.</td></tr>
    <tr><td><span class="fi"><span data-l="olla#2">Oletko</span> sinä töissä huomenna?</span></td><td><span class="fi">Ooksä töissä huomenna?</span></td><td>Você trabalha amanhã?</td></tr>
  </table>
  <p class="s" data-h="kaisa" data-kirja="Minä otan kalaa. Entä sinä?" data-pt="Vou pegar peixe. E você?">Mä otan kalaa. Entä sä?</p>
  <p class="s" data-h="jay" data-kirja="Minulle kahvi, kiitos." data-pt="Pra mim, um café.">Mulle kahvi, kiitos.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="helsinki-lumi">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t07">
    <h3>Lição de casa</h3>
    <p>Escreva cinco frases sobre o seu trabalho e o seu sonho (<span class="fi">unelma</span>): a sua profissão (<span class="fi">Olen…</span>), onde você trabalha (<span class="fi">Olen töissä…</span>), como você vai para o trabalho (<span class="fi">metrolla, bussilla, autolla</span>), o que você come no almoço (<span class="fi">Lounaalla syön…</span>) e o que você quer ser (<span class="fi">Haluan olla…</span>). Leia em voz alta, com <span class="fi pala">ti</span> e <span class="fi pala">di</span> sem “tch”.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Sou geóloga.">Olen geologi.</p>
      <p class="s" data-pt="Trabalho em Otaniemi."><span data-l="olla#2">Olen</span> töissä Otaniemessä.</p>
      <p class="s" data-pt="Vou para o trabalho de metrô.">Menen töihin metrolla.</p>
      <p class="s" data-pt="No almoço como peixe e salada.">Lounaalla syön kalaa ja salaattia.</p>
      <p class="s" data-pt="Quero ser pintora e ceramista.">Haluan olla taidemaalari ja keraamikko.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t07">
    <li>Sei pedir e pagar no restaurante: Mitä sinä otat? – Haluan kalaa. Maksan kortilla.</li>
    <li>Conjugo verbos do tipo 4 (haluan, osaan, tapaan) e do tipo 5 (tarvitsen, valitsen).</li>
    <li>Uso -lla, -lta e -lle com lugares: pöydällä, asemalta, asemalle.</li>
    <li>Uso -lta e -lle com pessoas: kysyn Ravilta, soitan äidille.</li>
    <li>Digo com quê: kortilla, metrolla.</li>
    <li>Falo de profissões e sonhos: Olen geologi. Haluan olla taidemaalari.</li>
    <li>Digo t e d antes de i sem “tch”: tiistai, kortilla, äidille.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md, kolmikerroksinen kielioppi). */
  kielioppi: [
    {
      id: 'tyyppi4', otsikko: 'Verbos do tipo 4: haluta, tavata, osata', taso: 'essencial', hakuosa: 'h-tyypit45', treeni: 't07-tyyppi4',
      html: `
<p><b>Reconhecer:</b> vogal + <span class="fi pala">-ta/-tä</span>: <span class="fi">haluta, tavata, osata, tilata, siivota, avata, pelata, maalata, korjata, arvata</span>. Não confunda com o tipo 1: <span class="fi">ottaa</span> termina em duas vogais (<span class="fi pala">-aa</span>).</p>
<p><b>Conjugar:</b> tire <span class="fi pala">-ta/-tä</span>, ponha <span class="fi pala">-a/-ä</span> e cole a terminação: <span class="fi">haluta → halua- → haluan</span>. Na 3ª pessoa do singular, nada a mais: <span class="fi">hän haluaa</span>, <span class="fi">hän tilaa</span>.</p>
<p><b>Gradação ao contrário:</b> o infinitivo é fraco e todas as pessoas são fortes, também no negativo: <span class="fi">tavata → tapaan, en tapaa</span>; <span class="fi">pelätä → pelkään</span>.</p>
<ul class="esim">
  <li class="s" data-pt="Eu quero peixe.">Haluan kalaa.</li>
  <li class="s" data-pt="A gente se encontra amanhã.">Me tapaamme huomenna.</li>
  <li class="s" data-pt="O batata de sofá não abre a porta.">Sohvaperuna ei avaa ovea.</li>
</ul>
<div class="taivutustaulu" data-verbi="haluta" data-osat="myonteinen,kielto" data-selite="querer · sem gradação"></div>
<div class="taivutustaulu" data-verbi="tavata" data-osat="myonteinen,kielto" data-selite="encontrar · v → p (gradação ao contrário)"></div>`
    },
    {
      id: 'tyyppi5', otsikko: 'Verbos do tipo 5: tarvita, valita', taso: 'essencial', hakuosa: 'h-tyypit45', treeni: 't07-tyyppi5',
      html: `
<p><b>Reconhecer:</b> <span class="fi pala">-ita/-itä</span>: <span class="fi">tarvita, valita, häiritä</span>. São poucos, mas muito usados.</p>
<p><b>Conjugar:</b> tire o <span class="fi pala">-a</span>, ponha <span class="fi pala">-se-</span> e cole a terminação: <span class="fi">tarvita → tarvitse- → tarvitsen</span>; <span class="fi">hän tarvitsee</span>. Negativo: <span class="fi">en tarvitse</span>.</p>
<ul class="esim">
  <li class="s" data-pt="Você precisa de garfo?">Tarvitsetko haarukkaa?</li>
  <li class="s" data-pt="Estou atrapalhando? – Não está.">Häiritsenkö? – Et häiritse.</li>
  <li class="s" data-pt="O Jay não consegue escolher.">Jay ei osaa <span data-l="valita">valita</span>.</li>
</ul>
<div class="taivutustaulu" data-verbi="tarvita" data-osat="myonteinen,kielto,kysymys" data-selite="precisar"></div>`
    },
    {
      id: 'ulkosijat', otsikko: '-lla, -lta, -lle: onde, de onde, para onde (fora)', taso: 'essencial', hakuosa: 'h-ulkosijat', treeni: 't07-ulko',
      html: `
<p><b>Forma:</b> genitivo sem o <span class="fi pala">-n</span> + <span class="fi pala">-lla/-llä</span>, <span class="fi pala">-lta/-ltä</span> ou <span class="fi pala">-lle</span>: <span class="fi">pöytä → pöydän → pöydällä, pöydältä, pöydälle</span>.</p>
<table class="taivutus">
  <tr><th>pergunta</th><th>caso</th><th>exemplo</th></tr>
  <tr><td><span class="fi">missä?</span><span class="kaannos" lang="pt-BR">onde?</span></td><td>adessivo <span class="fi pala">-lla/-llä</span></td><td><span class="fi">asemalla</span><span class="kaannos" lang="pt-BR">na estação</span></td></tr>
  <tr><td><span class="fi">mistä?</span><span class="kaannos" lang="pt-BR">de onde?</span></td><td>ablativo <span class="fi pala">-lta/-ltä</span></td><td><span class="fi">asemalta</span><span class="kaannos" lang="pt-BR">da estação</span></td></tr>
  <tr><td><span class="fi">mihin?</span><span class="kaannos" lang="pt-BR">para onde?</span></td><td>alativo <span class="fi pala">-lle</span></td><td><span class="fi">asemalle</span><span class="kaannos" lang="pt-BR">para a estação</span></td></tr>
</table>
<p>São usados com superfícies (<span class="fi">pöydällä</span>), lugares abertos (<span class="fi">torilla</span>), situações (<span class="fi">lounaalla, kahvitauolla</span>) e <b>sempre com pessoas</b> (<span class="fi">Jaylle, Purjolta</span>).</p>
<div class="sijataulu" data-sana="pöytä" data-sijat="nominatiivi,genetiivi,inessiivi,elatiivi,illatiivi,adessiivi,ablatiivi,allatiivi"></div>`
    },
    {
      id: 'emdepara', otsikko: 'em, de, para: “dentro” ou “fora”?', taso: 'atenção', hakuosa: 'h-ulkosijat', treeni: ['t07-ulko', 't07-kuule'],
      html: `
<table class="taivutus">
  <tr><th>português</th><th>dentro</th><th>fora</th><th>pessoa</th></tr>
  <tr><td>em …</td><td><span class="fi">kaupassa</span><span class="kaannos" lang="pt-BR">na loja</span></td><td><span class="fi">torilla</span><span class="kaannos" lang="pt-BR">na praça</span></td><td><span class="fi">Purjolla on</span><span class="kaannos" lang="pt-BR">a Purjo tem</span></td></tr>
  <tr><td>de …</td><td><span class="fi">kaupasta</span><span class="kaannos" lang="pt-BR">da loja</span></td><td><span class="fi">torilta</span><span class="kaannos" lang="pt-BR">da praça</span></td><td><span class="fi">Purjolta</span><span class="kaannos" lang="pt-BR">da Purjo</span></td></tr>
  <tr><td>para, a …</td><td><span class="fi">kauppaan</span><span class="kaannos" lang="pt-BR">para a loja</span></td><td><span class="fi">torille</span><span class="kaannos" lang="pt-BR">para a praça</span></td><td><span class="fi">Purjolle</span><span class="kaannos" lang="pt-BR">para a Purjo</span></td></tr>
</table>
<p>Quem fala uma língua românica erra muito aqui: no lugar do <span class="fi pala">-lle</span> vem o ilativo (<span class="pala">Purjoon</span> em vez de <span class="fi">Purjolle</span>). O português tem a mesma tentação. Para uma pessoa: <span class="fi pala">-lle</span>. De uma pessoa, também “perguntar a”: <span class="fi pala">-lta</span> (<span class="fi">kysyn Ravilta</span>).</p>`
    },
    {
      id: 'valine', otsikko: 'Com quê? -lla como instrumento', taso: 'essencial', hakuosa: 'h-ulkosijat', treeni: 't07-ulko',
      html: `
<p>O <span class="fi pala">-lla/-llä</span> diz o meio, como “com cartão”, “de metrô”:</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Maksan kortilla.</span></td><td>Pago com cartão.</td></tr>
  <tr><td><span class="fi">Maksan käteisellä.</span></td><td>Pago em dinheiro.</td></tr>
  <tr><td><span class="fi">Menen töihin metrolla.</span></td><td>Vou para o trabalho de metrô.</td></tr>
  <tr><td><span class="fi">Hiisi menee autolla.</span></td><td>O Hiisi vai de carro.</td></tr>
  <tr><td><span class="fi">Ravi tekee töitä tietokoneella.</span></td><td>O Ravi trabalha no computador.</td></tr>
</table>
<p>Companhia não é instrumento: “com o Jay” = <span class="fi">Jayn kanssa</span>.</p>`
    },
    {
      id: 'ammatit', otsikko: 'Profissões', taso: 'essencial', hakuosa: 'h-olla', treeni: 't07-ammatit',
      html: `
<p>A profissão não tem artigo nem gênero: <span class="fi">Maia on geologi. Jay on geologi.</span> Pergunta: <span class="fi">Missä sinä olet töissä?</span> (onde você trabalha?)</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">geologi</span></td><td>geólogo, geóloga</td></tr>
  <tr><td><span class="fi">insinööri</span></td><td>engenheiro, engenheira</td></tr>
  <tr><td><span class="fi">laborantti</span></td><td>técnico, técnica de laboratório</td></tr>
  <tr><td><span class="fi">sairaanhoitaja</span></td><td>enfermeiro, enfermeira</td></tr>
  <tr><td><span class="fi">lääkäri</span></td><td>médico, médica</td></tr>
  <tr><td><span class="fi">kokki</span></td><td>cozinheiro, cozinheira</td></tr>
  <tr><td><span class="fi">opettaja</span></td><td>professor, professora</td></tr>
  <tr><td><span class="fi">myyjä</span></td><td>vendedor, vendedora</td></tr>
  <tr><td><span class="fi">kuljettaja</span></td><td>motorista</td></tr>
  <tr><td><span class="fi">toimittaja</span></td><td>jornalista</td></tr>
  <tr><td><span class="fi">siivooja</span></td><td>faxineiro, faxineira</td></tr>
  <tr><td><span class="fi">taiteilija</span></td><td>artista</td></tr>
  <tr><td><span class="fi">taidemaalari</span></td><td>pintor, pintora (de quadros)</td></tr>
  <tr><td><span class="fi">maalari</span></td><td>pintor, pintora (de paredes)</td></tr>
  <tr><td><span class="fi">keraamikko</span></td><td>ceramista</td></tr>
</table>
<p><b>Truque:</b> <span class="fi pala">-ja/-jä</span> no fim = “quem faz”: <span class="fi">opettaa → opettaja</span>, <span class="fi">myydä → myyjä</span>, <span class="fi">siivota → siivooja</span>. E colega é <span class="fi">kollega</span>: <span class="fi">Kaisa on Maian kollega.</span></p>`
    },
    {
      id: 'aanne-ti', otsikko: 'Pronúncia: t e d antes de i', taso: 'essencial', hakuosa: 'h-sudenkuopat',
      html: `
<p>Em finlandês, <span class="fi pala">ti</span> e <span class="fi pala">di</span> nunca viram “tchi” e “dji”. A ponta da língua toca atrás dos dentes de cima e solta, sem chiado, como “tia” em Portugal.</p>
<ul class="esim">
  <li class="s" data-pt="terça-feira">tiistai</li>
  <li class="s" data-pt="computador">tietokone</li>
  <li class="s" data-pt="com cartão">kortilla</li>
  <li class="s" data-pt="para a mãe">äidille</li>
  <li class="s" data-pt="rádio">radio</li>
</ul>
<p>Senão, acontece o que aconteceu com a Maia: “tchiistaina” soa como um espirro, e a resposta é <span class="fi">Terveydeksi!</span></p>`
    },
    {
      id: 'sudenkuopat7', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-paikallissijat',
      html: `
<ul>
  <li><b>“Para” uma pessoa não é o ilativo (<span class="fi pala">-aan, -oon, -iin…</span>):</b> <span class="fi">Jaylle</span>, <span class="fi">äidille</span>, nunca <span class="pala">Jayhin</span>.</li>
  <li><b>“Perguntar a” é <span class="fi pala">-lta</span>:</b> <span class="fi">kysyn Ravilta</span>, como se fosse “pergunto do Ravi”.</li>
  <li><b>“Em” nem sempre é <span class="fi pala">-ssa</span>:</b> <span class="fi">pöydällä, asemalla, lounaalla</span>.</li>
  <li><b>Tipo 4 com vogal longa:</b> <span class="fi">tapaan</span> (encontro) × <span class="fi">tapan</span> (mato); <span class="fi">osaan</span> (sei) × <span class="fi">ostan</span> (compro).</li>
  <li><b><span class="fi">maalari</span> × <span class="fi">taidemaalari</span>:</b> o <span class="fi">maalari</span> pinta paredes; a Maia quer ser <span class="fi">taidemaalari</span>.</li>
  <li><b>t e d antes de i:</b> <span class="fi">tiistai</span>, não “tchiistai”.</li>
</ul>`
    }
  ]
});
