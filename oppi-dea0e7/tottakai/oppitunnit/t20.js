/* Tottakai, lição 20: kesä Suomessa (Passon jakso 20 Maian näkökulmasta). Oma materiaali, ei kirjan tekstiä.
   Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5c ”Oppitunti 20”; kalenteri: kesäkuu 2027, juhannus la 26.6.2027
   (juhannusaatto pe, Hanko su). Kurssin viimeinen oppitunti.
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t20): Purjon uusi asunto Kalliossa (t08), Maian taulu ”Onnellinen kuin possu” seinällä; dialogi A
     (21 repliikkiä): Maia tulkkaa Martan ja Walkerin sanat (Marta sanoo: … / Walker kysyy: …). Frases prontas, sanasto,
     kikka A: tulkkaustila kahdella palstalla (uusi komponentti `.tulkkaus`, komponentit.js t20: vuorot ovat tavallisia
     .valinta-tehtäviä; vasemmalla Martan portugali, oikealla Purjon suomi; oppija valitsee Maian käännöksen).
     Ääntäminen: intonaatio laskee myös kysymyksessä (Maian nouseva kysymys, Purjo luulee Walkerin pelkäävän saunaa).
     Tehtävät 1–3.
   - osa B (#t20-b): juhannusaatto mökillä Korppoossa (dialogi B 19 repliikkiä: Andersonin ensimmäinen sauna, passiivi,
     jos-lauseet, Hiiden ajotapa), päiväretki Hankoon kertojan tekstissä; kikka B: Maian kesäalbumi (`.albumi`,
     kuvatekstit passiivissa; komponentit.js t20 albumiKielet: käännösrivi lang=pt-BR ja .kaannos). Kielioppi kolmena
     lohkona tehtävineen: 1 passiivi (+ uutinen) → tehtävät 4–5; 2 puhekielen me mennään (tunnistus) ja konditionaali ja
     jos → tehtävät 6–7; 3 kurssin yhteenveto → tehtävät 8–9. Kulttuuri (mökki,
     juhannus, sauna, Hanko; kuvat korppoo ja hanko), Na rua (jos mä oisin, me mennään), kotitehtävä, itsearvio.
     Uuno ja Eenok (omistaja 22.10.2026, taustahahmot): lyhyt kohtaus juhannusyönä dialogin B jälkeen, heidän pyöreä
     talonsa (Futuro) seisoo mökin vieressä, vaikka kukaan ei ajanut sitä sinne (dialogi ”A casa redonda”, 10 repliikkiä:
     omistajan dialogi 23.10.2026: Ostin siihen juuri uuden moottorin, Senkin possu, Tulisitteko mukaan?); albumin lopussa talo nousee ja lentää pois (kertoja,
     ei selitystä). Futuro-ruutu loppukohtauksen perään (kuva assets/kuvat/futuro.jpg, omistaja 23.10.2026).
   Suomessa: suomea puhuvat Purjo, Hiisi, Jay, Maia ja Anderson muutamalla sanalla (Sauna! Kuuma! Kiitos!); Martan ja
   Walkerin sanat portugaliksi (tulkkauksessa lang=pt-BR, muuten kertojan tekstissä). Kirjakieli kaikkialla; puhekieli
   vain Na rua -nurkassa ja Gramáticassa data-rekisteri="puhe". Passiivin kieltomuoto (ei saunota) tulee koneelta
   (solu pass.kielto); tyypeissä 2–6 se on perusmuodon näköinen, joten ei mennä merkitään data-l="mennä:pass.kielto".
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat pyytää, tunne, ajatella, aikoa, joten, aloittaa (Aloitetaan!), vaan,
   hetki, pystyä, elämä, ikinä, alkaa, kukaan, taitaa, silloin; dialogit 21 + 19; sanalistat 20 → 12. tuoda, jäädä ja osa
   jätetty pois (tuo/tuon, jää ja osata/osaan sekoittuisivat). */
Kurssi.lisaa({
  id: 't20',
  lyhyt: '20',
  jakso: 'Lição 20',
  otsikko: 'Verão na Finlândia: se eu tivesse… e o passivo',
  lahde: 'Tema: a família da Maia na Finlândia, interpretar, a casa de campo, o juhannus e a sauna, Hanko · Gramática: o passivo (saunotaan, uidaan, mennään; na fala, me mennään), o condicional com jos (jos minulla olisi…, asuisin…), resumo do curso · Pronúncia: a melodia desce no fim, também na pergunta',
  aiheet: ['vapaa', 'luonto', 'viestinta', 'koti'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga e pintora; interpreta entre a mãe e a Purjo' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; sonha com uma casa de campo para dormir o verão inteiro' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; recebe a família da Maia e ensina a sauna' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; dirige até Hanko como sempre' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; carteiro; sabe algumas palavras em finlandês' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 5, kuvaus: 'mãe da Maia; fala português (a Maia interpreta)' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 7, kuvaus: 'pai da Maia; fala português; pesca no píer a noite inteira' },
    uutiset: { nimi: 'Notícias', tyyppi: 'mies', vaihto: 8, kuvaus: 'locutor do noticiário (lê a notícia do jornal)' },
    uuno3: { nimi: 'Uuno', tyyppi: 'mies', vaihto: 7, kuvaus: 'turista finlandês da viagem da carne; macacão azul-claro, cabelo platinado; vizinho na casa redonda' },
    eenok3: { nimi: 'Eenok', tyyppi: 'mies', vaihto: 8, kuvaus: 'irmão do Uuno; o mesmo macacão azul-claro; assa linguiça na casa redonda' }
  },

  sanasto: [
    'pyöreä', 'moottori', 'senkin possu', 'juhannus', 'juhannusaatto', 'kesämökki', 'mökki', 'sauna', 'saunoa', 'löyly', 'vihta', 'uida', 'meri', 'laituri',
    'vene', 'saari', 'kokko', 'kalastaa', 'grillata', 'heittää', 'polttaa', 'viettää', 'tulkki', 'tulkata', 'kääntää',
    'ruotsi', 'sisään', 'jos', 'aloittaa', 'pystyä', 'ikinä', 'joten'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Maia interpreta: tervetuloa Suomeen!',
      html: `
<ul class="tavoitteet">
  <li>Você recebe visitas e é recebido: <span class="fi">Tervetuloa! Tulkaa sisään!</span></li>
  <li>Você interpreta entre o português e o finlandês: <span class="fi">Marta sanoo: kiitos!</span> · <span class="fi">Walker kysyy: onko talossa sauna?</span></li>
  <li>Você pergunta com a melodia finlandesa: a voz desce no fim, também na pergunta.</li>
  <li>Parte B: o passivo (<span class="fi">Suomessa saunotaan.</span>), o “se” com o condicional (<span class="fi">Jos minulla olisi mökki, asuisin täällä.</span>) e o curso inteiro num quadro.</li>
</ul>
<p data-paikka="helsingin-kaupunginosat">Junho de 2027, seis meses depois do Natal em Belo Horizonte. Agora é a família da Maia que atravessa o oceano: o Walker, a Marta e o Anderson vieram para a Finlândia, e o ponto alto da viagem é o juhannus, a festa do meio do verão, no sábado, 26 de junho. Hoje à noite, a Purjo recebe todo mundo no apartamento novo dela em Kallio, aquele da lição 8. São oito da noite e o sol ainda está alto: em junho, em Helsinque, quase não escurece. A Purjo não fala português, a Marta não fala finlandês, e o português do Jay ainda parece de duas semanas. Quem interpreta é a Maia.</p>

<section class="osio">
  <h2>Diálogo A: <span class="fi">Tervetuloa!</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Quando a Marta ou o Walker falam, a Maia diz em finlandês <span class="fi">Marta sanoo: …</span> (a Marta diz) ou <span class="fi">Walker kysyy: …</span> (o Walker pergunta) e repete a frase. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t20-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="Junho, Helsinque. A família da Maia está na Finlândia pela primeira vez.">Kesäkuu, Helsinki. Maian perhe on Suomessa ensimmäistä kertaa.</p>
    <p class="s" data-h="purjo" data-pt="Bem-vindos! Entrem!">Tervetuloa! Tulkaa sisään!</p>
    <p class="s" data-h="maia" data-pt="Purjo, a Marta diz: obrigada, que apartamento lindo!">Purjo, Marta sanoo: kiitos, ihana asunto!</p>
    <p class="s" data-h="purjo" data-pt="Obrigada! Esta é a sala, e lá fica a varanda.">Kiitos! Tämä on olohuone, ja tuolla on parveke.</p>
    <p class="s" data-h="kertoja" data-pt="A Purjo convida todos para entrar. A família senta no sofá e na varanda.">Purjo pyytää kaikki sisään. Perhe istuu sohvalla ja parvekkeella.</p>
    <p class="s" data-h="kertoja" data-pt="Na parede da sala há um quadro grande: um porquinho cor-de-rosa.">Olohuoneen seinällä on iso taulu: vaaleanpunainen possu.</p>
    <p class="s" data-h="maia" data-pt="A Marta pergunta: aquele é o quadro da Maia?">Marta kysyy: onko tuo Maian taulu?</p>
    <p class="s" data-h="purjo" data-pt="É! Feliz como um porquinho. A Maia pintou para mim.">On! Onnellinen kuin possu. Maia maalasi sen minulle.</p>
    <p class="s" data-h="jay" data-pt="A mãe olha para ele toda manhã.">Äiti katsoo sitä joka aamu.</p>
    <p class="s" data-h="purjo" data-pt="É verdade. Quando eu olho para ele, fico feliz. Que sensação!">Totta. Kun katson sitä, tulen iloiseksi. Mikä tunne!</p>
    <p class="s" data-h="maia" data-pt="O Walker pergunta: tem sauna no prédio?">Walker kysyy: onko talossa sauna?</p>
    <p class="s" data-h="purjo" data-pt="Tem, no porão. Mas no juhannus vamos para a casa de campo, e lá se faz sauna toda noite.">On, kellarissa. Mutta juhannuksena mennään mökille, ja siellä saunotaan joka ilta.</p>
    <p class="s" data-h="anderson" data-pt="Sauna! Obrigado!">Sauna! Kiitos!</p>
    <p class="s" data-h="purjo" data-pt="O que a Marta acha da Finlândia?">Mitä Marta ajattelee Suomesta?</p>
    <p class="s" data-h="maia" data-pt="A Marta diz: aqui é lindo, mas a água é fria demais. Ela não pretende nadar.">Marta sanoo: täällä on kaunista, mutta vesi on liian kylmää. Hän ei aio uida.</p>
    <p class="s" data-h="purjo" data-pt="Quanto tempo vocês ficam na Finlândia?">Kuinka kauan te olette Suomessa?</p>
    <p class="s" data-h="maia" data-pt="Duas semanas, então temos muito tempo.">Kaksi viikkoa, joten meillä on paljon aikaa.</p>
    <p class="s" data-h="purjo" data-pt="Vocês gostariam de café e pão doce?">Haluaisitteko kahvia ja pullaa?</p>
    <p class="s" data-h="maia" data-pt="Sim, obrigada! O Anderson queria suco.">Kyllä, kiitos! Anderson haluaisi mehua.</p>
    <p class="s" data-h="jay" data-pt="Eu queria uma cerveja!">Minä haluaisin olutta!</p>
    <p class="s" data-h="purjo" data-pt="Vamos começar com café, Jay. A cerveja espera a sauna.">Aloitetaan kahvilla, Jay. Olut odottaa saunaa.</p>
  </div>
  <p>A Purjo traz café para todos, suco para o Anderson e, para o Jay, café também. O Anderson descobre que o “Sauna!” dele funciona como um “Moi!”: a Purjo ri toda vez que ele diz. E a Maia percebe uma coisa estranha: cada vez que ela traduz uma pergunta da mãe, a Purjo responde com cara de susto. A seção de pronúncia, abaixo, explica por quê.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Tervetuloa! Tulkaa sisään!</span> = bem-vindos! entrem! · <span class="fi">tulkaa</span> é a ordem para vocês (lição 14)</li>
      <li><span class="fi">Marta sanoo: kiitos!</span> = a Marta diz: obrigada! · o jeito mais simples de interpretar: o nome + <span class="fi">sanoo</span> ou <span class="fi">kysyy</span> + a frase</li>
      <li><span class="fi">ihana asunto</span> = que apartamento lindo · <span class="fi">ihana</span> = lindo, maravilhoso</li>
      <li><span class="fi">Onko tuo Maian taulu?</span> = aquele é o quadro da Maia? · <span class="fi">tuo</span> para o que está longe (lição 8)</li>
      <li><span class="fi">Maia maalasi sen minulle.</span> = a Maia pintou para mim · o passado (lição 13)</li>
      <li><span class="fi">Juhannuksena mennään mökille.</span> = no juhannus vamos para a casa de campo · <span class="fi">mennään</span> = vamos: o passivo, na parte B desta lição</li>
      <li><span class="fi">Siellä saunotaan joka ilta.</span> = lá se faz sauna toda noite · o passivo, na parte B</li>
      <li><span class="fi">Haluaisitteko kahvia?</span> = vocês gostariam de café? · o condicional educado (lição 15) · <span class="fi">Aloitetaan kahvilla!</span> = vamos começar com café! (o passivo, parte B)</li>
    </ul>
  </div>
</section>

<section class="osio">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="Visita e verão" data-sanat="tervetuloa,sisään,tulkki,tulkata,kääntää,juhannus,juhannusaatto,mökki,saunoa,löyly,meri,laituri"></div>
  <p>As outras palavras da lição estão no <a href="#t20-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio">
  <h2>Maia interpreta: português e finlandês</h2>
  <p>Depois do café, a Marta e a Purjo sentam juntas no sofá, embaixo do porquinho. Têm muito para dizer uma à outra e nenhuma língua em comum. A Maia senta no meio. À esquerda fica o português da Marta; à direita, o finlandês da Purjo.</p>
  <p class="ohje">Leia ou ouça a fala e escolha o que a Maia diz na outra língua. Uma fala de cada vez: a próxima aparece quando você acerta. As opções erradas mudam uma coisa só: uma palavra ou o tempo do verbo.</p>
  <div class="tulkkaus" data-otsikko="Maia tulkkaa" data-vasen="marta" data-oikea="purjo" data-vasen-nimi="Marta · português" data-oikea-nimi="Purjo · finlandês" data-laskuri="Falas interpretadas">
    <div class="tk-vuoro">
      <p class="tk-alku" lang="pt-BR">Purjo, o apartamento é muito bonito.</p>
      <div class="valinta" data-oikea="Purjo, asunto on hyvin kaunis.">
        <p class="kysymys">A Maia traduz para a Purjo:</p>
        <div class="vaihtoehdot"><button type="button">Purjo, asunto on hyvin iso.</button><button type="button">Purjo, asunto on hyvin kaunis.</button><button type="button">Purjo, sauna on hyvin kaunis.</button></div>
      </div>
      <p class="s tk-tulkki" data-h="maia" data-pt="Purjo, o apartamento é muito bonito.">Purjo, asunto on hyvin kaunis.</p>
    </div>
    <div class="tk-vuoro">
      <p class="s tk-alku" data-h="purjo" data-pt="Obrigada! O apartamento tem dois cômodos e uma varanda.">Kiitos! Asunnossa on kaksi huonetta ja parveke.</p>
      <div class="valinta" data-oikea="Obrigada! O apartamento tem dois cômodos e uma varanda.">
        <p class="kysymys">A Maia traduz para a Marta:</p>
        <div class="vaihtoehdot" lang="pt-BR"><button type="button">Obrigada! O apartamento tem dois cômodos e uma varanda.</button><button type="button">Obrigada! O apartamento tem três cômodos e uma varanda.</button><button type="button">Obrigada! O apartamento tem dois cômodos e uma sauna.</button></div>
      </div>
      <p class="tk-tulkki" lang="pt-BR">Obrigada! O apartamento tem dois cômodos e uma varanda.</p>
    </div>
    <div class="tk-vuoro">
      <p class="tk-alku" lang="pt-BR">Como se comemora o juhannus na Finlândia?</p>
      <div class="valinta" data-oikea="Miten Suomessa juhlitaan juhannusta?">
        <p class="kysymys">A Maia traduz para a Purjo:</p>
        <div class="vaihtoehdot"><button type="button">Missä Suomessa juhlitaan juhannusta?</button><button type="button">Miten Suomessa juhlitaan joulua?</button><button type="button">Miten Suomessa juhlitaan juhannusta?</button></div>
      </div>
      <p class="s tk-tulkki" data-h="maia" data-pt="Como se comemora o juhannus na Finlândia?">Miten Suomessa juhlitaan juhannusta?</p>
    </div>
    <div class="tk-vuoro">
      <p class="s tk-alku" data-h="purjo" data-pt="No juhannus a gente vai para a casa de campo. Faz sauna, nada e assa linguiça.">Juhannuksena mennään mökille. Saunotaan, uidaan ja grillataan makkaraa.</p>
      <div class="valinta" data-oikea="No juhannus a gente vai para a casa de campo. Faz sauna, nada e assa linguiça.">
        <p class="kysymys">A Maia traduz para a Marta:</p>
        <div class="vaihtoehdot" lang="pt-BR"><button type="button">No Natal a gente vai para a casa de campo. Faz sauna, nada e assa linguiça.</button><button type="button">No juhannus a gente vai para a casa de campo. Faz sauna, nada e assa linguiça.</button><button type="button">No juhannus a gente vai para a casa de campo. Faz sauna, nada e dança.</button></div>
      </div>
      <p class="tk-tulkki" lang="pt-BR">No juhannus a gente vai para a casa de campo. Faz sauna, nada e assa linguiça.</p>
    </div>
    <div class="tk-vuoro">
      <p class="tk-alku" lang="pt-BR">O Walker pode pescar lá?</p>
      <div class="valinta" data-oikea="Voiko Walker kalastaa siellä?">
        <p class="kysymys">A Maia traduz para a Purjo:</p>
        <div class="vaihtoehdot"><button type="button">Voiko Walker kalastaa siellä?</button><button type="button">Voiko Walker uida siellä?</button><button type="button">Haluaako Walker kalastaa siellä?</button></div>
      </div>
      <p class="s tk-tulkki" data-h="maia" data-pt="O Walker pode pescar lá?">Voiko Walker kalastaa siellä?</p>
    </div>
    <div class="tk-vuoro">
      <p class="s tk-alku" data-h="purjo" data-pt="Pode! Ao lado da casa de campo tem o mar e um barco."><span data-l="voida:prees.3s">Voi</span>! Mökin vieressä on meri ja vene.</p>
      <div class="valinta" data-oikea="Pode! Ao lado da casa de campo tem o mar e um barco.">
        <p class="kysymys">A Maia traduz para a Marta:</p>
        <div class="vaihtoehdot" lang="pt-BR"><button type="button">Pode! Ao lado da casa de campo tem um lago e um barco.</button><button type="button">Pode! Ao lado da casa de campo tem o mar e uma sauna.</button><button type="button">Pode! Ao lado da casa de campo tem o mar e um barco.</button></div>
      </div>
      <p class="tk-tulkki" lang="pt-BR">Pode! Ao lado da casa de campo tem o mar e um barco.</p>
    </div>
    <div class="tk-vuoro">
      <p class="tk-alku" lang="pt-BR">Se eu morasse na Finlândia, faria sauna todo dia!</p>
      <div class="valinta" data-oikea="Jos minä asuisin Suomessa, saunoisin joka päivä!">
        <p class="kysymys">A Maia traduz para a Purjo (o “se” vem na parte B):</p>
        <div class="vaihtoehdot"><button type="button">Jos minä asuisin Suomessa, saunoisin joka päivä!</button><button type="button">Jos minä asun Suomessa, saunon joka päivä!</button><button type="button">Jos minä asuisin Suomessa, uisin joka päivä!</button></div>
      </div>
      <p class="s tk-tulkki" data-h="maia" data-pt="Se eu morasse na Finlândia, faria sauna todo dia!">Jos minä asuisin Suomessa, saunoisin joka päivä!</p>
    </div>
    <div class="tk-vuoro">
      <p class="s tk-alku" data-h="purjo" data-pt="Se você morasse aqui, eu ficaria feliz.">Jos sinä asuisit täällä, minä olisin onnellinen.</p>
      <div class="valinta" data-oikea="Se você morasse aqui, eu ficaria feliz.">
        <p class="kysymys">A Maia traduz para a Marta:</p>
        <div class="vaihtoehdot" lang="pt-BR"><button type="button">Se você mora aqui, eu fico feliz.</button><button type="button">Se você morasse aqui, eu ficaria feliz.</button><button type="button">Se você morasse aqui, a Maia ficaria feliz.</button></div>
      </div>
      <p class="tk-tulkki" lang="pt-BR">Se você morasse aqui, eu ficaria feliz.</p>
    </div>
    <p class="s tk-loppu" data-h="purjo" data-pt="Maia, você é uma ótima intérprete!">Maia, sinä olet hyvä tulkki!</p>
  </div>
  <p>Repare nas duas últimas falas: <span class="fi">asuisin, saunoisin, asuisit, olisin</span> têm o <span class="fi pala">-isi-</span> do condicional da lição 15, agora com <span class="fi">jos</span> (se). É o “se eu morasse… eu faria” do português. A parte B explica.</p>
</section>

<section class="osio" data-paikka="toolonlahti">
  <h2>Pronúncia: a pergunta também desce</h2>
  <p>Às onze da noite, todos caminham até a baía de Töölönlahti, e o céu ainda está claro. No caminho, a Maia descobre o erro do dia. Quando ela traduzia as perguntas da mãe, a voz subia no fim, como em português: <span class="fi">Onko talossa sauna?</span>, com o “sauna” lá em cima. Para um ouvido finlandês, uma pergunta que sobe muito no fim pode soar como espanto. A Purjo achou que o Walker tinha medo da sauna. Na lição 10, o Hiisi entendeu a mesma coisa.</p>
  <p>Em finlandês, a melodia normalmente <b>desce</b> do começo ao fim, na afirmação e também na pergunta. Nas perguntas com <span class="fi pala">-ko/-kö</span> (<span class="fi">Onko…? Haluaisitteko…?</span>) e com palavra interrogativa (<span class="fi">Missä? Mitä?</span>), a voz não precisa subir: a palavra já marca a pergunta. A primeira sílaba é a mais forte e a mais alta; depois a voz desce. Ouça e repita, deixando a voz cair no fim:</p>
  <ul class="esim">
    <li class="s" data-pt="Tem sauna no prédio?">Onko talossa sauna?</li>
    <li class="s" data-pt="Tem sauna no prédio.">Talossa on sauna.</li>
    <li class="s" data-pt="Vocês gostariam de café?">Haluaisitteko kahvia?</li>
    <li class="s" data-pt="Vamos para a sauna?">Mennäänkö saunaan?</li>
    <li class="s" data-pt="Onde fica a casa de campo?">Missä mökki on?</li>
    <li class="s" data-pt="Em Korppoo.">Korppoossa.</li>
  </ul>
  <div class="saanto">
    <h3>Truque: diga a pergunta como uma afirmação</h3>
    <p>Compare <span class="fi">Talossa on sauna.</span> e <span class="fi">Onko talossa sauna?</span>: a mesma melodia, descendo. A pergunta já está no <span class="fi pala">-ko</span>; a voz não precisa subir. Uma subida forte no fim pode soar como surpresa: “tem sauna?!”.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="kallio-kahvila">
  <h2>Exercícios da parte A</h2>
  <p>Na manhã seguinte, a Maia e a Marta tomam café numa tenda da praça de Hakaniemi. A Maia aproveita para treinar a mãe… e você.</p>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ligue: receber e interpretar</h3>
    <ul class="yhdista">
      <li data-pari="bem-vindos!">tervetuloa</li>
      <li data-pari="entrem!">tulkaa sisään</li>
      <li data-pari="a Marta diz">Marta sanoo</li>
      <li data-pari="o Walker pergunta">Walker kysyy</li>
      <li data-pari="lindo, maravilhoso">ihana</li>
      <li data-pari="vocês gostariam?">haluaisitteko</li>
      <li data-pari="intérprete">tulkki</li>
      <li data-pari="a festa do meio do verão">juhannus</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>2. Ouça: é pergunta?</h3>
    <p class="ohje">Aperte ▶ sem ler. A melodia normalmente desce nas duas; procure o <span class="fi pala">-ko/-kö</span> ou a palavra interrogativa.</p>
    <div class="valinta" data-kuuntele="Talossa on sauna." data-oikea="não é pergunta">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">pergunta</button><button type="button">não é pergunta</button></div>
    </div>
    <div class="valinta" data-kuuntele="Onko talossa sauna?" data-oikea="pergunta">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">pergunta</button><button type="button">não é pergunta</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mennäänkö saunaan?" data-oikea="pergunta">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">pergunta</button><button type="button">não é pergunta</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mennään saunaan." data-oikea="não é pergunta">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">pergunta</button><button type="button">não é pergunta</button></div>
    </div>
    <div class="valinta" data-kuuntele="Missä mökki on?" data-oikea="pergunta">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">pergunta</button><button type="button">não é pergunta</button></div>
    </div>
    <div class="valinta" data-kuuntele="Anderson haluaisi mehua." data-oikea="não é pergunta">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">pergunta</button><button type="button">não é pergunta</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>3. Você entendeu o diálogo A?</h3>
    <p class="ohje">Responda em finlandês. Volte ao diálogo se precisar.</p>
    <div class="valinta" data-oikea="Suomessa.">
      <p class="kysymys"><span class="fi">Missä Maian perhe on ensimmäistä kertaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Brasiliassa.</button><button type="button">Suomessa.</button><button type="button">Hangossa.</button></div>
    </div>
    <div class="valinta" data-oikea="Iso taulu.">
      <p class="kysymys"><span class="fi">Mitä olohuoneen seinällä on?</span></p>
      <div class="vaihtoehdot"><button type="button">Iso taulu.</button><button type="button">Iso ikkuna.</button><button type="button">Iso lamppu.</button></div>
    </div>
    <div class="valinta" data-oikea="Maia.">
      <p class="kysymys"><span class="fi">Kuka maalasi taulun?</span></p>
      <div class="vaihtoehdot"><button type="button">Purjo.</button><button type="button">Marta.</button><button type="button">Maia.</button></div>
    </div>
    <div class="valinta" data-oikea="Kellarissa.">
      <p class="kysymys"><span class="fi">Missä talon sauna on?</span></p>
      <div class="vaihtoehdot"><button type="button">Kellarissa.</button><button type="button">Parvekkeella.</button><button type="button">Olohuoneessa.</button></div>
    </div>
    <div class="valinta" data-oikea="Mökille.">
      <p class="kysymys"><span class="fi">Mihin kaikki menevät juhannuksena?</span></p>
      <div class="vaihtoehdot"><button type="button">Hankoon.</button><button type="button">Mökille.</button><button type="button">Brasiliaan.</button></div>
    </div>
    <div class="valinta" data-oikea="Mehua.">
      <p class="kysymys"><span class="fi">Mitä Anderson haluaisi?</span></p>
      <div class="vaihtoehdot"><button type="button">Kahvia.</button><button type="button">Olutta.</button><button type="button">Mehua.</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Suomessa saunotaan: o passivo e o “se”',
      html: `
<ul class="tavoitteet">
  <li>Você diz o que se faz, sem dizer quem: <span class="fi">Suomessa saunotaan. Saunan jälkeen uidaan meressä.</span></li>
  <li>Você reconhece o “nós” da rua: <span class="fi" data-rekisteri="puhe">me mennään</span> = <span class="fi">me menemme</span>.</li>
  <li>Você imagina com o “se”: <span class="fi">Jos minulla olisi mökki, asuisin täällä joka kesä.</span></li>
  <li>Você vê o curso inteiro num quadro: presente, passado, perfeito, condicional, imperativo e passivo.</li>
</ul>

<p data-paikka="korppoo">Sexta-feira, véspera do juhannus (o juhannus deste ano é no sábado, 26 de junho de 2027). A Purjo alugou uma casa de campo vermelha em Korppoo, no arquipélago do sudoeste, à beira do mar. De Helsinque até lá são umas três horas e meia de carro, com travessias de balsa. O Hiisi dirigiu e chegou bem antes. Ninguém pergunta como. A Marta rezou no banco de trás o caminho inteiro, o Walker achou ótimo, e o Anderson dormiu. Agora são onze da noite, o sol acabou de se pôr, e a sauna a lenha está quente.</p>

<section class="osio">
  <h2>Diálogo B: <span class="fi">Nyt mennään saunaan!</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure os verbos sem pessoa, terminados em <span class="fi pala">-taan/-tään</span> (ou <span class="fi pala">-daan, -laan, -naan…</span>: <span class="fi">uidaan, ollaan, mennään</span>). É o passivo: “se faz, a gente faz”. Atenção: <span class="fi">osaan, grillaan</span> também terminam em <span class="fi pala">-aan</span>, mas são “eu”. E procure o <span class="fi">jos</span> com o <span class="fi pala">-isi-</span> do condicional: “se eu tivesse…”. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t20-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="Sexta-feira, véspera do juhannus. São onze da noite, mas lá fora ainda está claro.">Perjantai, juhannusaatto. Kello on yksitoista illalla, mutta ulkona on valoisaa.</p>
    <p class="s" data-h="purjo" data-pt="Agora vamos para a sauna! Na Finlândia se faz sauna no juhannus.">Nyt mennään saunaan! Suomessa saunotaan juhannuksena.</p>
    <p class="s" data-h="maia" data-pt="O Anderson vai à sauna pela primeira vez!">Anderson menee saunaan ensimmäistä kertaa!</p>
    <p class="s" data-h="purjo" data-pt="Na sauna não se fala muito: a gente fica em silêncio, e joga só um pouco de água nas pedras.">Saunassa ei puhuta paljon, vaan ollaan hiljaa, ja löylyä heitetään vähän.</p>
    <p class="s" data-h="kertoja" data-pt="O Anderson senta na sauna. O Jay joga água nas pedras.">Anderson istuu saunassa. Jay heittää löylyä.</p>
    <p class="s" data-h="anderson" data-pt="Quente! Quente! Obrigado!">Kuuma! Kuuma! Kiitos!</p>
    <p class="s" data-h="maia" data-pt="Anderson, se estiver quente demais, saia um momento.">Anderson, jos sinulla on liian kuuma, mene hetkeksi ulos.</p>
    <p class="s" data-h="jay" data-pt="Calma. Ele consegue!">Ei hätää. Hän pystyy siihen!</p>
    <p class="s" data-h="jay" data-pt="Depois da sauna a gente nada no mar. Vem, Anderson!">Saunan jälkeen uidaan meressä. Tule, Anderson!</p>
    <p class="s" data-h="kertoja" data-pt="O Anderson e o Jay correm do píer para o mar.">Anderson ja Jay juoksevat laiturilta mereen.</p>
    <p class="s" data-h="purjo" data-pt="Isto é que é vida!">Tämä on elämää!</p>
    <p class="s" data-h="maia" data-pt="Se eu tivesse uma casa de campo, moraria aqui todos os verões.">Jos minulla olisi mökki, asuisin täällä joka kesä.</p>
    <p class="s" data-h="jay" data-pt="Se eu tivesse uma casa de campo, eu dormiria aqui o verão inteiro.">Jos minulla olisi mökki, minä nukkuisin täällä koko kesän.</p>
    <p class="s" data-h="hiisi" data-pt="No domingo vamos a Hanko. Eu dirijo.">Sunnuntaina mennään Hankoon. Minä ajan.</p>
    <p class="s" data-h="purjo" data-pt="Ai, não! Na Finlândia se dirige devagar, Hiisi!">Voi ei! Suomessa ajetaan hitaasti, Hiisi!</p>
    <p class="s" data-h="hiisi" data-pt="Se eu dirigisse devagar, ainda estaríamos em Helsinque.">Jos ajaisin hitaasti, olisimme vielä Helsingissä.</p>
    <p class="s" data-h="purjo" data-pt="Hiisi, você nunca muda.">Hiisi, sinä et ikinä muutu.</p>
    <p class="s" data-h="maia" data-pt="O juhannus está só começando. Hoje ninguém dorme!">Juhannus alkaa vasta nyt. Tänään kukaan ei nuku!</p>
    <p class="s" data-h="kertoja" data-pt="Todos riem. O Walker pesca no píer a noite inteira.">Kaikki nauravat. Walker kalastaa laiturilla koko yön.</p>
  </div>
  <p>O Anderson saiu da sauna vermelho como um tomate, pulou no mar (dezesseis graus!) e voltou correndo para a sauna gritando a palavra nova: <span class="fi">Kuuma!</span> Agora é a palavra finlandesa favorita dele. À meia-noite, todos descem até a praia para ver a fogueira do juhannus, a <span class="fi">kokko</span>, que os vizinhos acendem na beira da água. Ninguém quer dormir. E o Hiisi, com a cara de sempre <span class="emoji">😐</span>, já estuda o mapa para Hanko.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática está logo abaixo:</p>
    <ul>
      <li><span class="fi">Nyt mennään saunaan!</span> = agora vamos para a sauna! · <span class="fi">mennään</span> = vamos: o passivo como convite</li>
      <li><span class="fi">Saunassa ollaan hiljaa.</span> = na sauna a gente fica em silêncio</li>
      <li><span class="fi">Löylyä heitetään vähän.</span> = joga-se pouca água nas pedras · <span class="fi">löyly</span> é o vapor da sauna</li>
      <li><span class="fi">ensimmäistä kertaa</span> = pela primeira vez</li>
      <li><span class="fi">Saunan jälkeen uidaan meressä.</span> = depois da sauna a gente nada no mar · <span class="fi">jälkeen</span> vem depois do genitivo, como <span class="fi">edessä</span> (lição 14)</li>
      <li><span class="fi">Jos minulla olisi mökki, asuisin täällä joka kesä.</span> = se eu tivesse uma casa de campo, moraria aqui todos os verões</li>
      <li><span class="fi">Voi ei!</span> = ai, não! · <span class="fi">Hän pystyy siihen!</span> = ele consegue! · <span class="fi">Tämä on elämää!</span> = isto é que é vida! · <span class="fi">ei ikinä</span> = nunca</li>
      <li><span class="fi">Jos ajaisin hitaasti, olisimme vielä Helsingissä.</span> = se eu dirigisse devagar, ainda estaríamos em Helsinque</li>
    </ul>
  </div>
</section>

<!-- Uuno ja Eenok juhannusyönä: pyöreä talo (Futuro) mökin vieressä; passiivi ja jos (omistaja 22.10.2026) -->
<section class="osio">
  <h2>A casa redonda: <span class="fi">Täällä grillataan lihaa.</span></h2>
  <p>Depois da fogueira, já perto da uma da manhã, a Maia e o Jay voltam pela beira do mar. Ao lado da casa de campo, entre os pinheiros, há uma casa redonda e amarela, em cima de pés de metal. Ontem ela não estava ali. Não há estrada até lá, nem marca de pneu na grama: ninguém a trouxe de carro. Na porta, dois homens de macacão azul-claro e cabelo platinado acenam: o Uuno e o Eenok, os turistas da viagem da carne no Brasil.</p>
  <div class="kpl" id="t20-dialogi-futuro" data-nimi="Ouvir: a casa redonda">
    <p class="s" data-h="uuno3" data-pt="Oi, Maia! Oi, Jay!">Moi, Maia! Moi, Jay!</p>
    <p class="s" data-h="eenok3" data-pt="Feliz juhannus! Entrem!">Hyvää juhannusta! Tulkaa sisään!</p>
    <p class="s" data-h="maia" data-pt="Feliz juhannus! Que casa bonita!">Hyvää juhannusta! Tämä on hieno talo!</p>
    <p class="s" data-h="uuno3" data-pt="Obrigado! Acabei de comprar um motor novo para ela.">Kiitos! Ostin siihen juuri uuden moottorin.</p>
    <p class="s" data-h="eenok3" data-pt="Vocês querem linguiça? Aqui se assa carne.">Ottaisitteko makkaraa? Täällä grillataan lihaa.</p>
    <p class="s" data-h="jay" data-pt="Sim, obrigado! Eu queria duas.">Kyllä kiitos! Ottaisin kaksi.</p>
    <p class="s" data-h="maia" data-pt="Seu porquinho.">Senkin possu.</p>
    <p class="s" data-h="jay" data-pt="E vocês, comem?">Syöttekö te?</p>
    <p class="s" data-h="uuno3" data-pt="Não, agora não podemos. Amanhã a gente parte.">Ei, emme nyt voi. Huomenna lähdetään.</p>
    <p class="s" data-h="maia" data-pt="Quem vai embora? Para onde?">Kuka lähtee? Minne?</p>
    <p class="s" data-h="uuno3" data-pt="O Eenok e eu vamos para casa. Vocês viriam junto? Mas é uma viagem muito longa…">Eenok ja minä lähdemme kotiin. Tulisitteko mukaan? Sinne on kyllä hyvin pitkä matka…</p>
    <p class="s" data-h="maia" data-pt="Não. Hoje é juhannus. Hoje se faz sauna e se nada!">Ei. Tänään on juhannus. Tänään saunotaan ja uidaan!</p>
    <p class="s" data-h="jay" data-pt="Boa viagem!">Hyvää matkaa!</p>
  </div>
  <p>O Eenok olha para o braço do Jay com muito interesse. A Maia agradece pela linguiça, pega o Jay pela mão, e os dois voltam para a sauna.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas desta cena</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Hyvää juhannusta!</span> = feliz juhannus! · o mesmo molde de <span class="fi">Hyvää joulua!</span></li>
      <li><span class="fi">Tulkaa sisään!</span> = entrem! · a ordem para vocês (lição 14)</li>
      <li><span class="fi">Täällä grillataan lihaa.</span> = aqui se assa carne · o passivo: ninguém é nomeado</li>
      <li><span class="fi">Ottaisitteko makkaraa? – Ottaisin kaksi.</span> = vocês querem linguiça? – eu queria duas · o condicional educado (lição 15)</li>
      <li><span class="fi">Senkin possu!</span> = seu porquinho! · <span class="fi">Senkin …!</span> = “seu …!”, de brincadeira ou bravo; guarde inteiro</li>
      <li><span class="fi">Huomenna lähdetään.</span> = amanhã a gente parte · na fala, o passivo muitas vezes quer dizer “nós”</li>
      <li><span class="fi">Tulisitteko mukaan?</span> = vocês viriam junto? · o condicional</li>
      <li><span class="fi">Tänään saunotaan ja uidaan!</span> = hoje se faz sauna e se nada · o passivo</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="hanko">
  <h2>O álbum do verão</h2>
  <p>No domingo, o Hiisi leva todo mundo a Hanko, a cidade mais ao sul da Finlândia continental. Numa estrada de oitenta, ele anda a cento e vinte. A Purjo grita, a Marta reza, o Walker cronometra, e um radar fotografa o carro: a multa chega em agosto. Em Hanko, o Walker pesca no porto, o Anderson junta conchas na praia, e a Marta descobre que em Hanko as placas da rua estão em duas línguas, finlandês e sueco. De noite, a Maia monta no celular um álbum do fim de semana para a Purjo, com legendas em finlandês, como num guia: o que se faz no verão finlandês.</p>
  <p class="ohje">Passe as páginas com as setas e toque na legenda: a Maia lê. Todas as legendas estão no passivo: ninguém faz, “se faz”.</p>
  <div class="albumi" data-otsikko="Kesä Suomessa">
    <figure data-kuva="korppoo" data-hahmot="anderson,jay" data-h="maia" data-pt="Em Korppoo se faz sauna toda noite." data-puhu="Korppoossa saunotaan joka ilta."><figcaption>Korppoossa saunotaan joka ilta.</figcaption></figure>
    <figure data-kuva="korppoo" data-hahmot="anderson" data-h="maia" data-pt="Depois da sauna se nada no mar." data-puhu="Saunan jälkeen uidaan meressä."><figcaption>Saunan jälkeen uidaan meressä.</figcaption></figure>
    <figure data-kuva="korppoo" data-hahmot="walker" data-h="maia" data-pt="No píer se pesca de manhã e à noite." data-puhu="Laiturilla kalastetaan aamulla ja illalla."><figcaption>Laiturilla kalastetaan aamulla ja illalla.</figcaption></figure>
    <figure data-kuva="korppoo" data-hahmot="hiisi" data-h="maia" data-pt="Na praia se assa linguiça." data-puhu="Rannalla grillataan makkaraa."><figcaption>Rannalla grillataan makkaraa.</figcaption></figure>
    <figure data-kuva="korppoo" data-hahmot="purjo,marta" data-h="maia" data-pt="No juhannus se dança e se canta." data-puhu="Juhannuksena tanssitaan ja lauletaan."><figcaption>Juhannuksena tanssitaan ja lauletaan.</figcaption></figure>
    <figure data-kuva="korppoo" data-hahmot="walker,anderson" data-h="maia" data-pt="No juhannus se acende a fogueira." data-puhu="Juhannuksena poltetaan kokko."><figcaption>Juhannuksena poltetaan kokko.</figcaption></figure>
    <figure data-kuva="hanko" data-hahmot="hiisi,purjo" data-h="maia" data-pt="Para Hanko se dirige rápido demais." data-puhu="Hankoon ajetaan liian nopeasti."><figcaption>Hankoon ajetaan liian nopeasti.</figcaption></figure>
    <figure data-kuva="hanko" data-hahmot="maia,marta" data-h="maia" data-pt="Em Hanko se fala finlandês e sueco." data-puhu="Hangossa puhutaan suomea ja ruotsia."><figcaption>Hangossa puhutaan suomea ja ruotsia.</figcaption></figure>
    <figure data-kuva="helsingin-kaupunginosat" data-hahmot="purjo,marta" data-h="maia" data-pt="Na casa da Purjo se olha o quadro da Maia." data-puhu="Purjon luona katsotaan Maian taulua."><figcaption>Purjon luona katsotaan Maian taulua.</figcaption></figure>
  </div>
  <p>A legenda do Hiisi é a única que a Purjo não aprovou.</p>
  <!-- AV-077 (omistaja 22.–23.10.2026): takaa-ajo peruutuspeilissä (assets/pomo.js takaaAjo, data-pomo="ajo-t20").
       Käskyt yksikössä (oppitunti 14) ja -mmin (hitaammin, nopeammin: uusi tällä oppitunnilla). Kulttuuri: päiväsakot. -->
  <h3>Fuga no retrovisor</h3>
  <p>Na volta de Hanko, a Purjo leva a família no carro dela, e a Maia vai com o Hiisi, com o mapa no celular. O Hiisi pega um atalho por uma cidadezinha estranha, e aparece no retrovisor um carro branco e azul. Ajude a Maia: em cada cruzamento, dê uma ordem ao Hiisi em finlandês, na forma de “você” (lição 14). Ele é um só: nada de <span class="fi pala">-kaa</span>.</p>
  <p class="s" data-h="maia" data-pt="Vire à esquerda!">Käänny vasemmalle!</p>
  <p class="s" data-h="maia" data-pt="Vire à direita!">Käänny oikealle!</p>
  <p class="s" data-h="maia" data-pt="Siga reto!">Aja suoraan!</p>
  <p class="s" data-h="maia" data-pt="Dê meia-volta!">Käänny ympäri!</p>
  <p class="s" data-h="maia" data-pt="Mais devagar!">Aja hitaammin!</p>
  <p class="s" data-h="maia" data-pt="Mais rápido!">Aja nopeammin!</p>
  <p class="s" data-h="maia" data-pt="Pare!">Pysähdy!</p>
  <p class="s" data-h="maia" data-pt="Espere!">Odota!</p>
  <p class="ohje"><span class="fi">hitaammin</span> e <span class="fi">nopeammin</span> = mais devagar, mais rápido: <span class="fi pala">-mmin</span> é o “mais” dos advérbios, como o <span class="fi pala">-mpi</span> da lição 11 (<span class="fi">hitaasti → hitaammin</span>, <span class="fi">nopeasti → nopeammin</span>).</p>
  <div class="pomo" data-pomo="ajo-t20"></div>
  <aside class="kulttuuri" data-paikka="hanko">
    <p class="yla">Você sabia? · Tiesitkö?</p>
    <h3>Multa pela renda: <span class="fi">päiväsakot</span></h3>
    <figure class="kuva" data-kuva="poliisiauto"></figure>
    <p>Na Finlândia, um excesso pequeno de velocidade dá uma multa de valor fixo. Um excesso maior dá <span class="fi">päiväsakot</span>, as “multas-dia”: o número de dias depende da gravidade, e o valor de cada dia depende da renda de quem dirige. Quem ganha mais paga mais pelo mesmo erro. Por isso, de vez em quando, um empresário finlandês vira notícia com uma multa de dezenas de milhares de euros. O carro da <span class="fi">poliisi</span> é branco e azul, e os radares fotografam quem passa rápido demais: a multa chega pelo correio, como a do Hiisi em agosto.</p>
  </aside>
  <!-- Tarinan loppu: Uunon ja Eenokin pyöreä talo lähtee (kertoja, ei selitystä) -->
  <p>Perto da meia-noite, de volta a Korppoo, a Maia termina o álbum, e pela janela ela vê a casa redonda dos vizinhos subir devagar acima dos pinheiros e sumir no céu claro.</p>
  <p class="s" data-h="kertoja" data-pt="A casa redonda sobe e vai embora voando.">Pyöreä talo nousee ja lentää pois.</p>
  <!-- Futuro (omistaja 23.10.2026: ”The Futuro photo and short culture corner just about the futuro should be here”) -->
  <aside class="kulttuuri">
    <p class="yla">Você sabia? · Tiesitkö?</p>
    <h3>A casa Futuro</h3>
    <figure class="kuva" data-kuva="futuro"></figure>
    <p>A casa Futuro foi projetada em 1968 pelo arquiteto finlandês Matti Suuronen. É de plástico, tem a forma de um grande disco sobre pés de metal e foi pensada como uma cabana para as férias de esqui. Foram feitas cerca de cem, e algumas ainda estão de pé em vários países. Várias desapareceram.</p>
  </aside>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 1 · O passivo: <span class="fi">Suomessa saunotaan</span></h2>
  <p>O passivo (<span class="fi">passiivi</span>) diz o que se faz <b>sem dizer quem faz</b>: <span class="fi">Suomessa saunotaan.</span> = na Finlândia se faz sauna. É o “se” do português (“fala-se sueco”) ou o “a gente” de sentido geral. A forma é uma só, sem pessoa e sem sujeito.</p>
  <p><b>Tipo 1</b> (<span class="fi">puhua, saunoa, heittää</span>): parta do “eu” do presente, tire o <span class="fi pala">-n</span> e ponha <span class="fi pala">-taan/-tään</span>. A consoante fica como no “eu”: <span class="fi">heitän → heitetään</span>. Se o radical termina em <span class="fi pala">-a/-ä</span>, essa vogal vira <span class="fi pala">e</span>: <span class="fi">kalasta- → kalastetaan</span>, <span class="fi">aja- → ajetaan</span>.</p>
  <p><b>Os outros tipos</b> (<span class="fi">uida, mennä, olla, grillata</span>): o infinitivo + <span class="fi pala">-an/-än</span>.</p>
  <table class="taivutus">
    <tr><th>verbo</th><th>como se forma</th><th>passivo</th><th>português</th></tr>
    <tr><td><span class="fi">saunoa</span></td><td>tipo 1: <span class="fi">saunon → sauno-</span></td><td><span class="fi">saunotaan</span></td><td>faz-se sauna</td></tr>
    <tr><td><span class="fi">puhua</span></td><td>tipo 1: <span class="fi">puhun → puhu-</span></td><td><span class="fi">puhutaan</span></td><td>fala-se</td></tr>
    <tr><td><span class="fi">heittää</span></td><td>tipo 1: <span class="fi">heitän → heitä-</span>, ä → e</td><td><span class="fi">heitetään</span></td><td>joga-se</td></tr>
    <tr><td><span class="fi">kalastaa</span></td><td>tipo 1: <span class="fi">kalastan → kalasta-</span>, a → e</td><td><span class="fi">kalastetaan</span></td><td>pesca-se</td></tr>
    <tr><td><span class="fi">uida</span></td><td>tipo 2: infinitivo + <span class="fi pala">-an</span></td><td><span class="fi">uidaan</span></td><td>nada-se</td></tr>
    <tr><td><span class="fi">mennä</span></td><td>tipo 3: infinitivo + <span class="fi pala">-än</span></td><td><span class="fi">mennään</span></td><td>vai-se; vamos!</td></tr>
    <tr><td><span class="fi">olla</span></td><td>tipo 3: infinitivo + <span class="fi pala">-an</span></td><td><span class="fi">ollaan</span></td><td>fica-se, está-se</td></tr>
    <tr><td><span class="fi">grillata</span></td><td>tipo 4: infinitivo + <span class="fi pala">-an</span></td><td><span class="fi">grillataan</span></td><td>grelha-se</td></tr>
  </table>
  <p><b>Negação:</b> <span class="fi">ei</span> + o passivo sem o <span class="fi pala">-an/-än</span> do fim: <span class="fi">ei saunota</span> (não se faz sauna), <span class="fi">ei <span data-l="mennä:pass.kielto">mennä</span></span> (não se vai). Nos tipos 2 a 6 essa forma é igual ao infinitivo. Um costume do verão: <span class="fi">Juhannusyönä ei nukuta.</span> (na noite do juhannus não se dorme).</p>
  <p><b>Objeto:</b> o objeto parcial continua no partitivo: <span class="fi">Rannalla grillataan makkaraa.</span> O objeto inteiro fica na <b>forma básica</b>, sem o <span class="fi pala">-n</span> da lição 12: <span class="fi">Juhannuksena poltetaan kokko.</span> (acende-se a fogueira) × <span class="fi">Hiisi polttaa kokon.</span> (o Hiisi acende a fogueira). Exceto os pronomes pessoais, que mantêm o <span class="fi pala">-t</span>: <span class="fi">minut, sinut, hänet</span>…</p>
  <p><b>Vamos!</b> Sem sujeito e em tom de proposta, o passivo funciona como convite, “vamos…!”: <span class="fi">Mennään saunaan!</span> (vamos para a sauna!), <span class="fi">Uidaan!</span> (vamos nadar!). Você usa <span class="fi">Mennään!</span> desde a lição 2; agora sabe o que ele é: a promessa da lição 2 está cumprida.</p>

  <p>O passivo aparece em todo lugar, também no jornal. Toque nas palavras:</p>
  <div class="dokumentti uutinen" lang="fi-FI">
    <p class="uutinen-lehti">Uutiset</p>
    <p class="s uutinen-otsikko" data-h="uutiset" data-pt="No juhannus se faz sauna e se nada">Juhannuksena saunotaan ja uidaan</p>
    <figure class="kuva" data-kuva="korppoo" lang="pt-BR"></figure>
    <p class="s" data-h="uutiset" data-pt="O juhannus é a grande festa do verão.">Juhannus on kesän iso juhla.</p>
    <p class="s" data-h="uutiset" data-pt="Na casa de campo se faz sauna, se nada e se faz churrasco.">Mökillä saunotaan, uidaan ja grillataan.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: o passivo</h2>
  <p>Domingo à noite, de volta a Korppoo. Choveu na volta de Hanko, e todos estão dentro da casa de campo, perto da lareira. A Maia faz um último treino com o Jay, e com você.</p>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Complete com o passivo</h3>
    <p class="ohje">Escreva o passivo do verbo entre parênteses. Tipo 1: radical do “eu” + <span class="fi pala">-taan/-tään</span> (<span class="fi pala">-a/-ä</span> vira <span class="fi pala">e</span>); outros tipos: infinitivo + <span class="fi pala">-an/-än</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Suomessa <span class="aukko" data-oikea="saunotaan"></span> paljon. <span data-ei-kuplaa>(saunoa)</span></p>
      <p>Saunan jälkeen <span class="aukko" data-oikea="uidaan"></span> meressä. <span data-ei-kuplaa>(uida)</span></p>
      <p>Korppoossa <span class="aukko" data-oikea="puhutaan"></span> ruotsia. <span data-ei-kuplaa>(puhua)</span></p>
      <p>Laiturilla <span class="aukko" data-oikea="kalastetaan"></span> aamulla. <span data-ei-kuplaa>(kalastaa)</span></p>
      <p>Rannalla <span class="aukko" data-oikea="grillataan"></span> makkaraa. <span data-ei-kuplaa>(grillata)</span></p>
      <p>Saunassa <span class="aukko" data-oikea="ollaan"></span> hiljaa. <span data-ei-kuplaa>(olla)</span></p>
      <p>Juhannuksena <span class="aukko" data-oikea="poltetaan"></span> kokko. <span data-ei-kuplaa>(polttaa)</span></p>
      <p>Juhannuksena <span class="aukko" data-oikea="mennään"></span> mökille. <span data-ei-kuplaa>(mennä)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Ouça: passivo, nós ou condicional?</h3>
    <p class="ohje">Aperte ▶ sem ler e ouça o fim do verbo: <span class="fi pala">-taan/-tään</span> (ou <span class="fi pala">-daan, -laan, -naan…</span>: passivo, sem pessoa), <span class="fi pala">-mme</span> (nós, presente) ou <span class="fi pala">-isimme</span> (nós, condicional). Atenção: <span class="fi">osaan, grillaan</span> também terminam em <span class="fi pala">-aan</span>, mas são “eu”.</p>
    <div class="valinta" data-kuuntele="Mökillä saunotaan." data-oikea="passivo">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">passivo</button><button type="button">nós, presente</button><button type="button">nós, condicional</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mökillä saunomme." data-oikea="nós, presente">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">passivo</button><button type="button">nós, presente</button><button type="button">nós, condicional</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mökillä saunoisimme." data-oikea="nós, condicional">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">passivo</button><button type="button">nós, presente</button><button type="button">nós, condicional</button></div>
    </div>
    <div class="valinta" data-kuuntele="Laiturilla kalastaisimme." data-oikea="nós, condicional">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">passivo</button><button type="button">nós, presente</button><button type="button">nós, condicional</button></div>
    </div>
    <div class="valinta" data-kuuntele="Rannalla grillataan." data-oikea="passivo">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">passivo</button><button type="button">nós, presente</button><button type="button">nós, condicional</button></div>
    </div>
    <div class="valinta" data-kuuntele="Rannalla grillaamme." data-oikea="nós, presente">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">passivo</button><button type="button">nós, presente</button><button type="button">nós, condicional</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 2 · “Nós” na rua e o “se”: <span class="fi" data-rekisteri="puhe">me mennään</span>, <span class="fi">jos minulla olisi</span></h2>

  <h3>1. Na rua: me mennään = nós vamos</h3>
  <p>Na fala, o “nós” é muitas vezes o pronome <span class="fi">me</span> + passivo (lições 13 e 16): <span class="fi" data-rekisteri="puhe">me mennään</span> = <span class="fi">me menemme</span>, <span class="fi" data-rekisteri="puhe">me saunotaan</span> = <span class="fi">me saunomme</span>. O passivo sozinho, sem <span class="fi">me</span>, é muito comum para planos e convites, na fala e na escrita informal: <span class="fi">Mennään!</span> (vamos!), <span class="fi">Tehdään se!</span> (vamos fazer isso!), <span class="fi">Nähdään!</span> (a gente se vê!). Os diálogos desta lição usam esse passivo natural. O “nós” da escrita formal é <span class="fi">menemme</span>; <span class="fi" data-rekisteri="puhe">me mennään</span> é da fala: reconheça.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o passivo sem pessoa diz o que se faz em geral, como o “se” ou o “a gente” de sentido geral: <span class="fi">Suomessa saunotaan</span> (na Finlândia todo mundo faz sauna). E o passivo não muda com a pessoa: não existe <span class="pala">saunotaanme</span>.</p>
  </div>

  <h3>2. O condicional com jos: se eu tivesse…</h3>
  <p>Na lição 15 o condicional era educado: <span class="fi">haluaisin, voisitko</span>. Agora ele imagina. A forma é a mesma: o radical forte do “ele” + <span class="fi pala">-isi-</span> + a terminação da pessoa.</p>
  <table class="taivutus">
    <tr><th>pessoa</th><th>asua</th><th>olla</th><th>português</th></tr>
    <tr><td><span class="fi">minä</span></td><td><span class="fi">asuisin</span></td><td><span class="fi">olisin</span></td><td>eu moraria · eu seria</td></tr>
    <tr><td><span class="fi">sinä</span></td><td><span class="fi">asuisit</span></td><td><span class="fi">olisit</span></td><td>você moraria · seria</td></tr>
    <tr><td><span class="fi">hän</span></td><td><span class="fi">asuisi</span></td><td><span class="fi">olisi</span></td><td>ele, ela moraria · seria</td></tr>
    <tr><td><span class="fi">me</span></td><td><span class="fi">asuisimme</span></td><td><span class="fi">olisimme</span></td><td>nós moraríamos · seríamos</td></tr>
    <tr><td><span class="fi">te</span></td><td><span class="fi">asuisitte</span></td><td><span class="fi">olisitte</span></td><td>vocês morariam · seriam</td></tr>
    <tr><td><span class="fi">he</span></td><td><span class="fi">asuisivat</span></td><td><span class="fi">olisivat</span></td><td>eles, elas morariam · seriam</td></tr>
  </table>
  <p><b>Jos + condicional, condicional:</b> para algo <b>imaginado</b>, em geral as duas partes da frase ficam no condicional. O português muda o verbo de cada parte (“se eu <b>tivesse</b>, eu <b>moraria</b>”); o finlandês usa o condicional nas duas: <span class="fi">Jos minulla olisi mökki, asuisin täällä.</span></p>
  <p><b>Jos + presente:</b> para algo <b>possível</b> (“se chover”, “se você tiver tempo”), o <span class="fi">jos</span> fica no presente, e a outra parte em geral também, ou é uma ordem ou um convite: <span class="fi">Jos huomenna sataa, saunomme koko päivän.</span> (se chover amanhã, fazemos sauna o dia inteiro.) A outra parte também pode ter um condicional educado (lição 15): <span class="fi">Jos sinulla on aikaa, voisimme mennä Hankoon.</span> (se você tiver tempo, poderíamos ir a Hanko.) Quem fala decide: imaginado = condicional, possível = presente.</p>
  <ul class="esim">
    <li class="s" data-pt="Se a Marta soubesse finlandês, ela falaria com a Purjo.">Jos Marta osaisi suomea, hän puhuisi Purjolle.</li>
    <li class="s" data-pt="O que você faria se tivesse um barco?">Mitä sinä tekisit, jos sinulla olisi vene?</li>
    <li class="s" data-pt="Se você tiver tempo, vamos a Hanko!">Jos sinulla on aikaa, mennään Hankoon!</li>
  </ul>
  <p><b>Negação:</b> <span class="fi">en, et, ei, emme, ette, eivät</span> + a forma de “ele” do condicional: <span class="fi">Hiisi ei ajaisi hitaasti.</span> (o Hiisi não dirigiria devagar); <span class="fi pala">en ajaisi</span> = eu não dirigiria.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> “se eu tivesse” parece passado, mas em finlandês o passado não imagina: <span class="fi">jos minulla oli mökki</span> = se eu tinha uma casa de campo (de verdade, antes). Para imaginar, sempre o condicional: <span class="fi">jos minulla olisi mökki</span>. E em <span class="fi">minulla on</span> o verbo fica na forma de “ele”: <span class="fi">minulla olisi</span>, nunca <span class="pala">minulla olisin</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: o “se”</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Se eu tivesse ou se eu tiver?</h3>
    <p class="ohje">Quem fala decide, e a pista diz o que é: <b>imaginado</b> (“se eu tivesse”) pede o condicional no <span class="fi">jos</span>; <b>possível</b> (“se chover”, “se você tiver”) pede o presente. Em geral a outra parte da frase acompanha: condicional (<span class="fi">asuisin, olisimme</span>) ou presente e ordem (<span class="fi">saunomme, tulkaa, mennään</span>).</p>
    <div class="valinta" data-oikea="olisi">
      <p class="kysymys"><span class="fi">Jos minulla ___ mökki, asuisin siellä joka kesä.</span> <span class="fi" data-ei-kuplaa>(olla)</span> · imaginado</p>
      <div class="vaihtoehdot"><button type="button">on</button><button type="button">olisi</button></div>
    </div>
    <div class="valinta" data-oikea="sataa">
      <p class="kysymys"><span class="fi">Jos huomenna ___, saunomme koko päivän.</span> <span class="fi" data-ei-kuplaa>(sataa)</span> · possível</p>
      <div class="vaihtoehdot"><button type="button">sataa</button><button type="button">sataisi</button></div>
    </div>
    <div class="valinta" data-oikea="ajaisi">
      <p class="kysymys"><span class="fi">Jos Hiisi ___ hitaasti, olisimme vielä Helsingissä.</span> <span class="fi" data-ei-kuplaa>(ajaa)</span> · imaginado</p>
      <div class="vaihtoehdot"><button type="button">ajaa</button><button type="button">ajaisi</button></div>
    </div>
    <div class="valinta" data-oikea="tulette">
      <p class="kysymys"><span class="fi">Jos te ___ Korppooseen, tulkaa mökille!</span> <span class="fi" data-ei-kuplaa>(tulla)</span> · possível</p>
      <div class="vaihtoehdot"><button type="button">tulisitte</button><button type="button">tulette</button></div>
    </div>
    <div class="valinta" data-oikea="osaisi">
      <p class="kysymys"><span class="fi">Jos Marta ___ suomea, hän puhuisi Purjolle.</span> <span class="fi" data-ei-kuplaa>(osata)</span> · imaginado</p>
      <div class="vaihtoehdot"><button type="button">osaa</button><button type="button">osaisi</button></div>
    </div>
    <div class="valinta" data-oikea="on">
      <p class="kysymys"><span class="fi">Jos sinulla ___ aikaa huomenna, mennään Hankoon!</span> <span class="fi" data-ei-kuplaa>(olla)</span> · possível</p>
      <div class="vaihtoehdot"><button type="button">olisi</button><button type="button">on</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Complete com o condicional</h3>
    <p class="ohje">Escreva o verbo no condicional, na pessoa da frase: radical forte do “ele” + <span class="fi pala">-isi-</span> + terminação. O verbo está entre parênteses.</p>
    <div class="aukot" lang="fi-FI">
      <p>Jos minulla olisi vene, minä <span class="aukko" data-oikea="kalastaisin"></span> joka päivä. <span data-ei-kuplaa>(kalastaa)</span></p>
      <p>Jos olisi lämmin, me <span class="aukko" data-oikea="uisimme"></span> meressä. <span data-ei-kuplaa>(uida)</span></p>
      <p>Jos sinulla olisi mökki, sinä <span class="aukko" data-oikea="asuisit"></span> siellä joka kesä. <span data-ei-kuplaa>(asua)</span></p>
      <p>Jos Jayllä olisi rahaa, hän <span class="aukko" data-oikea="ostaisi"></span> saaren. <span data-ei-kuplaa>(ostaa)</span></p>
      <p>Jos Purjo osaisi portugalia, hän <span class="aukko" data-oikea="puhuisi"></span> Martalle. <span data-ei-kuplaa>(puhua)</span></p>
      <p>Jos te tulisitte Brasiliaan, me <span class="aukko" data-oikea="olisimme"></span> onnellisia. <span data-ei-kuplaa>(olla)</span></p>
      <p>Jos he asuisivat Suomessa, he <span class="aukko" data-oikea="saunoisivat"></span> joka ilta. <span data-ei-kuplaa>(saunoa)</span></p>
      <p>Jos Hiisi ajaisi hitaasti, Marta ei <span class="aukko" data-oikea="pelkäisi"></span> autossa. <span data-ei-kuplaa>(pelätä)</span></p>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 3 · Resumo: o curso num quadro</h2>
  <p>Você começou com <span class="fi">Moi!</span> e <span class="fi">Minä olen Maia.</span> Agora você tem as formas mais importantes do verbo finlandês. Um verbo, <span class="fi">mennä</span> (ir), em todas elas:</p>
  <table class="taivutus">
    <tr><th>forma</th><th>finlandês</th><th>português</th><th>lição</th></tr>
    <tr><td>presente</td><td><span class="fi">minä menen</span></td><td>eu vou</td><td>1, 2</td></tr>
    <tr><td>negação</td><td><span class="fi">minä en mene</span></td><td>eu não vou</td><td>1, 2</td></tr>
    <tr><td>passado</td><td><span class="fi">minä menin</span></td><td>eu fui</td><td>13</td></tr>
    <tr><td>passado negativo</td><td><span class="fi">minä en mennyt</span></td><td>eu não fui</td><td>15</td></tr>
    <tr><td>perfeito</td><td><span class="fi">minä olen mennyt</span></td><td>eu já fui</td><td>19</td></tr>
    <tr><td>condicional</td><td><span class="fi">minä menisin</span></td><td>eu iria</td><td>15, 20</td></tr>
    <tr><td>imperativo</td><td><span class="fi">mene! menkää!</span></td><td>vá! vão!</td><td>9, 14</td></tr>
    <tr><td>passivo</td><td><span class="fi">mennään</span></td><td>vai-se; vamos!</td><td>20</td></tr>
  </table>
  <p>E os casos, com <span class="fi">mökki</span> (a casa de campo):</p>
  <ul class="esim">
    <li class="s" data-pt="a casa de campo">mökki</li>
    <li class="s" data-pt="da casa de campo">mökin</li>
    <li class="s" data-pt="casa de campo (parte; depois de número)">mökkiä</li>
    <li class="s" data-pt="na casa de campo (dentro)">mökissä</li>
    <li class="s" data-pt="da casa de campo (de dentro)">mökistä</li>
    <li class="s" data-pt="para dentro da casa de campo">mökkiin</li>
    <li class="s" data-pt="na casa de campo (no lugar)">mökillä</li>
    <li class="s" data-pt="da casa de campo (do lugar)">mökiltä</li>
    <li class="s" data-pt="para a casa de campo">mökille</li>
    <li class="s" data-pt="como casa de campo">mökkinä</li>
    <li class="s" data-pt="vira casa de campo">mökiksi</li>
    <li class="s" data-pt="nas casas de campo">mökeissä</li>
  </ul>
  <p>Com isso você se apresenta, compra, pede, pergunta o caminho, conta o que fez e o que já fez, diz onde dói, pede com educação, imagina e explica como as coisas se fazem. Falta só uma coisa: praticar. A revisão final (R4) mistura tudo.</p>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: tudo junto</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>8. Você entendeu o diálogo B e o álbum?</h3>
    <p class="ohje">Responda em finlandês. Volte ao diálogo e ao álbum se precisar.</p>
    <div class="valinta" data-oikea="Anderson.">
      <p class="kysymys"><span class="fi">Kuka menee saunaan ensimmäistä kertaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Walker.</button><button type="button">Anderson.</button><button type="button">Hiisi.</button></div>
    </div>
    <div class="valinta" data-oikea="Kuuma!">
      <p class="kysymys"><span class="fi">Mitä Anderson sanoo saunassa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kuuma!</button><button type="button">Kylmä!</button><button type="button">Moi!</button></div>
    </div>
    <div class="valinta" data-oikea="Meressä.">
      <p class="kysymys"><span class="fi">Missä saunan jälkeen uidaan?</span></p>
      <div class="vaihtoehdot"><button type="button">Järvessä.</button><button type="button">Saunassa.</button><button type="button">Meressä.</button></div>
    </div>
    <div class="valinta" data-oikea="Hän asuisi siellä joka kesä.">
      <p class="kysymys"><span class="fi">Mitä Maia tekisi, jos hänellä olisi mökki?</span></p>
      <div class="vaihtoehdot"><button type="button">Hän asuisi siellä joka kesä.</button><button type="button">Hän nukkuisi siellä joka kesä.</button><button type="button">Hän kalastaisi siellä joka kesä.</button></div>
    </div>
    <div class="valinta" data-oikea="Hiisi.">
      <p class="kysymys"><span class="fi">Kuka ajaa Hankoon?</span></p>
      <div class="vaihtoehdot"><button type="button">Purjo.</button><button type="button">Jay.</button><button type="button">Hiisi.</button></div>
    </div>
    <div class="valinta" data-oikea="Suomea ja ruotsia.">
      <p class="kysymys"><span class="fi">Mitä Hangossa puhutaan?</span></p>
      <div class="vaihtoehdot"><button type="button">Suomea ja ruotsia.</button><button type="button">Suomea ja portugalia.</button><button type="button">Ruotsia ja englantia.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda às perguntas</h3>
    <p class="ohje">Responda sobre você, em voz alta, antes de abrir o modelo. Use o passivo para o que se faz em geral e o condicional para o que você imagina. Deixe a voz descer no fim das perguntas.</p>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä tekisit, jos sinulla olisi mökki?</summary><p class="s" data-pt="Eu faria sauna e nadaria todo dia.">Saunoisin ja uisin joka päivä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Miten Brasiliassa juhlitaan kesäkuussa?</summary><p class="s" data-pt="Em junho, no Brasil, se dança e se canta, e nas festas se acende uma fogueira.">Kesäkuussa Brasiliassa tanssitaan ja lauletaan, ja juhlissa poltetaan kokko.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Oletko koskaan saunonut?</summary><p class="s" data-pt="Já! Faço sauna toda semana.">Olen! Saunon joka viikko.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mihin sinä menisit kesällä, jos sinulla olisi aikaa?</summary><p class="s" data-pt="Eu iria para a Finlândia, para Korppoo!">Menisin Suomeen, Korppooseen!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Oletko ikinä uinut meressä?</summary><p class="s" data-pt="Já. Mas a água estava fria, então eu nadei só um momento.">Olen. Mutta vesi oli kylmää, joten uin vain hetken.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä teet huomenna?</summary><p class="s" data-pt="Parece que vai chover. Então vou fazer sauna e ler um livro.">Huomenna taitaa sataa. Silloin saunon ja luen kirjaa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä teet saunan jälkeen?</summary><p class="s" data-pt="Depois da sauna eu nado no mar ou no lago.">Saunan jälkeen uin meressä tai järvessä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Pystytkö siihen?</summary><p class="s" data-pt="Consigo! Começo amanhã, então agora eu descanso.">Pystyn! Aloitan huomenna, joten nyt lepään.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä teette sateella?</summary><p class="s" data-pt="Está chovendo, então não nadamos, e sim fazemos sauna. Acho que vou já para a sauna.">Sataa, joten emme ui, vaan saunomme. Taidan mennä saunaan heti.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Oletko ikinä nähnyt kokkoa?</summary><p class="s" data-pt="Já! Que sensação!">Olen! Mikä tunne!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kuka on Walkerin vaimo?</summary><p class="s" data-pt="A Marta é a esposa do Walker.">Marta on Walkerin vaimo.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mistä on kyse?</summary><p class="s" data-pt="Do juhannus. No verão, como no juhannus, se faz muita sauna.">Juhannuksesta. Kesällä, kuten juhannuksena, saunotaan paljon.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä Purjo toivoo?</summary><p class="s" data-pt="A Purjo espera que vocês venham de novo!">Purjo toivoo, että tulette taas!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä Walker tekee?</summary><p class="s" data-pt="O Walker ainda está pescando. O verão só termina em agosto.">Walker kalastaa yhä. Kesä on lopussa vasta elokuussa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä haluaisit tehdä?</summary><p class="s" data-pt="Eu queria nadar. Mas amanhã pode chover.">Tahtoisin uida. Mutta huomenna saattaa sataa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä kuuluu?</summary><p class="s" data-pt="Bem! Vamos continuar amanhã.">Hyvää! Jatketaan huomenna.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mieti: mitä tekisit, jos olisit Hiisi?</summary><p class="s" data-pt="Eu dirigiria devagar!">Ajaisin hitaasti!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Aloitetaanko?</summary><p class="s" data-pt="Vamos começar! Pronto, agora para a sauna.">Aloitetaan! No niin, nyt saunaan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Joutuiko Hiisi taas ongelmiin?</summary><p class="s" data-pt="Foi. E parece que vem uma multa nova.">Joutui. Ja taitaa tulla uusi sakko.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mikä juttu tämä on?</summary><p class="s" data-pt="É a vihta. Bem, experimente!">Se on vihta. No, kokeile!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko Hiisi hyvä kaveri?</summary><p class="s" data-pt="Bem, às vezes.">No, joskus.</p></details>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Mökki, juhannus, sauna e Hanko</h3>
  <figure class="kuva" data-kuva="korppoo" lang="pt-BR"></figure>
  <p><b>A casa de campo.</b> A Finlândia tem cerca de meio milhão de casas de campo, a <span class="fi">mökki</span> ou <span class="fi">kesämökki</span>, à beira de um lago ou do mar. Muitas são simples: sem água encanada, com banheiro do lado de fora, mas quase sempre com sauna e, muitas vezes, com píer e barco. No verão, a família passa semanas lá, longe da cidade.</p>
  <p><b>O juhannus.</b> É a festa do meio do verão, no sábado entre 20 e 26 de junho; a véspera, a sexta-feira, é o <span class="fi">juhannusaatto</span>. As cidades esvaziam, todo mundo vai para a casa de campo, e na beira da água se acendem fogueiras, as <span class="fi">kokko</span>. A bandeira finlandesa fica no mastro a noite inteira, e quase não escurece: no norte o sol nem se põe. Uma tradição antiga: quem dorme com sete flores embaixo do travesseiro sonha com o futuro amor. No Brasil, a festa junina também tem fogueira.</p>
  <p><b>A sauna.</b> São cerca de três milhões de saunas para cinco milhões e meio de pessoas, e a cultura da sauna finlandesa está desde 2020 na lista de patrimônio cultural imaterial da UNESCO. Na sauna se fala baixo, ou nada. Joga-se água nas pedras quentes e sobe o <span class="fi">löyly</span>, o vapor. No verão bate-se de leve na pele com a <span class="fi">vihta</span>, um feixe de galhos frescos de bétula. Depois, um mergulho no lago ou no mar, e de volta ao calor.</p>
  <figure class="kuva" data-kuva="hanko"></figure>
  <p><b>Hanko e Korppoo.</b> Hanko (em sueco, Hangö) é a cidade mais ao sul da Finlândia continental. No fim do século XIX virou estação balneária, e ainda tem as casas de madeira daquela época e quilômetros de praias de areia. Korppoo (em sueco, Korpo) fica no arquipélago do sudoeste, entre milhares de ilhas ligadas por pontes e balsas. Nas duas se fala muito sueco: o sueco é a segunda língua oficial da Finlândia, língua materna de uns cinco por cento dos finlandeses. E sobre a multa do Hiisi: na Finlândia, a multa por excesso de velocidade depende do salário de quem dirige.</p>
  <ul class="esim">
    <li class="s" data-pt="Na Finlândia há muitas saunas.">Suomessa on paljon saunoja.</li>
    <li class="s" data-pt="O juhannus se passa na casa de campo.">Juhannusta vietetään mökillä.</li>
    <li class="s" data-pt="Em Korppoo se fala sueco.">Korppoossa puhutaan ruotsia.</li>
  </ul>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Jos mä oisin…: o condicional e o “nós” da rua</h3>
  <p>Na fala, o condicional de <span class="fi">olla</span> perde o <span class="fi pala">l</span>: <span class="fi">olisin</span> vira <span class="fi" data-rekisteri="puhe">oisin</span>, e <span class="fi">olisi</span> vira <span class="fi" data-rekisteri="puhe">ois</span> (lição 15). O “nós” é <span class="fi">me</span> + passivo (lição 16). E <span class="fi">Mennään!</span>, “vamos!”, é igual na rua e na escrita. Você não precisa falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">jos minä olisin</span></td><td><span class="fi" data-rekisteri="puhe">jos mä oisin</span></td><td>se eu fosse, se eu estivesse</td></tr>
    <tr><td><span class="fi">me menemme saunaan</span></td><td><span class="fi" data-rekisteri="puhe">me mennään saunaan</span></td><td>nós vamos para a sauna</td></tr>
    <tr><td><span class="fi">sitten me uimme</span></td><td><span class="fi" data-rekisteri="puhe">sit me uidaan</span></td><td>depois nós nadamos</td></tr>
  </table>
  <p>Domingo à noite, o Hiisi dá um conselho ao Jay, do jeito da rua. O Jay responde do mesmo jeito:</p>
  <p class="s" data-h="hiisi" data-kirja="Jos minä olisin sinä, minä menisin saunaan." data-pt="Se eu fosse você, eu iria para a sauna.">Jos mä oisin sä, mä menisin saunaan.</p>
  <p class="s" data-h="jay" data-kirja="Selvä. Mennään saunaan! Me saunomme, ja sitten me uimme." data-pt="Beleza. Vamos para a sauna! A gente faz sauna e depois nada.">Okei. Mennään saunaan! Me saunotaan, ja sit me uidaan.</p>
  <p class="s" data-h="purjo" data-kirja="Kyllä, aivan mahtavaa!" data-pt="É, incrível mesmo!">Joo, ihan mahtavaa!</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t20">
    <h3>Lição de casa</h3>
    <p>Escreva para a Purjo sobre uma festa do seu país, como a Maia faria: sete frases. Uma que apresenta a festa, três no passivo, dizendo o que se faz (<span class="fi">tanssitaan, lauletaan, grillataan…</span>), duas com <span class="fi">jos</span> + condicional (<span class="fi">Jos sinä olisit täällä…</span>) e um convite com <span class="fi">Mennään…!</span> Termine com <span class="fi">Terveisin</span> e o seu nome. Leia em voz alta, com a voz descendo no fim.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia, sobre a festa junina)</summary>
      <p class="s" data-pt="Oi, Purjo!">Hei Purjo!</p>
      <p class="s" data-pt="Em junho, no Brasil, tem festa.">Kesäkuussa Brasiliassa on juhlat.</p>
      <p class="s" data-pt="Nas festas se dança e se canta.">Juhlissa tanssitaan ja lauletaan.</p>
      <p class="s" data-pt="Acende-se uma fogueira, como na Finlândia.">Juhlissa poltetaan kokko, niin kuin Suomessa.</p>
      <p class="s" data-pt="Na rua se assa linguiça.">Kadulla grillataan makkaraa.</p>
      <p class="s" data-pt="Se você estivesse em Belo Horizonte, dançaria a noite inteira.">Jos sinä olisit Belo Horizontessa, tanssisit koko yön.</p>
      <p class="s" data-pt="Se eu tivesse tempo, iria lá todo verão.">Jos minulla olisi aikaa, menisin sinne joka kesä.</p>
      <p class="s" data-pt="Vamos juntas!">Mennään yhdessä!</p>
      <p class="s" data-pt="Um abraço, Maia">Terveisin Maia</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t20">
    <li>Digo o que se faz com o passivo: Suomessa saunotaan, saunan jälkeen uidaan.</li>
    <li>Formo o passivo: saunoa → saunotaan, heittää → heitetään, uida → uidaan.</li>
    <li>Reconheço na fala: me mennään = me menemme; jos mä oisin = jos minä olisin.</li>
    <li>Imagino com jos + condicional: Jos minulla olisi mökki, asuisin täällä.</li>
    <li>Separo o imaginado do possível: jos minulla olisi × jos huomenna sataa.</li>
    <li>Interpreto frases simples: Marta sanoo… · Walker kysyy…</li>
    <li>Faço perguntas com a voz descendo no fim: Onko talossa sauna?</li>
  </ul>

  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Pronto. Vinte lições, do primeiro “Moi!” em Sörnäinen até a sauna em Korppoo. Eu lembro de cada palavra. Do que elas querem dizer, quase sempre. Agora vem a revisão final, e lá na ilha apareceu uma coisa estranha… Mas isso fica para a R4. Hoje, <span class="fi">mennään saunaan!</span></p>
  </div>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'passiivi20', otsikko: 'O passivo: Suomessa saunotaan', taso: 'essencial', hakuosa: 'h-passiivi', treeni: 't20-passiivi',
      html: `
<p><b>Forma:</b> tipo 1: radical do “eu” + <span class="fi pala">-taan/-tään</span> (<span class="fi pala">-a/-ä</span> do radical vira <span class="fi pala">e</span>); outros tipos: infinitivo + <span class="fi pala">-an/-än</span>. <b>Uso:</b> o que se faz, sem dizer quem; sem sujeito e em tom de proposta, “vamos!”.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">saunoa → saunotaan</span></td><td>fazer sauna → faz-se sauna</td></tr>
  <tr><td><span class="fi">heittää → heitetään</span></td><td>jogar → joga-se</td></tr>
  <tr><td><span class="fi">uida → uidaan</span></td><td>nadar → nada-se</td></tr>
  <tr><td><span class="fi">mennä → mennään</span></td><td>ir → vai-se; vamos!</td></tr>
</table>
<p><b>Negação:</b> <span class="fi">ei</span> + o passivo sem <span class="fi pala">-an/-än</span>: <span class="fi">ei saunota</span>, <span class="fi">ei <span data-l="mennä:pass.kielto">mennä</span></span>. <b>Objeto inteiro</b> na forma básica: <span class="fi">Juhannuksena poltetaan kokko.</span> (exceto os pronomes pessoais, que mantêm o <span class="fi pala">-t</span>: <span class="fi">minut, sinut, hänet</span>…)</p>`
    },
    {
      id: 'me-passiivi20', otsikko: 'Na rua: me mennään = nós vamos', taso: 'reconhecer', hakuosa: 'h-passiivi', treeni: 't20-kuuntele',
      html: `
<p>Na fala, “nós” é muitas vezes o pronome <span class="fi">me</span> + passivo. Reconheça; na escrita formal, <span class="fi pala">-mme</span>. Sem <span class="fi">me</span>, o passivo é comum para planos e convites: <span class="fi">Mennään!</span></p>
<table class="taivutus">
  <tr><th>escrito</th><th>na rua</th><th>português</th></tr>
  <tr><td><span class="fi">me menemme</span></td><td><span class="fi" data-rekisteri="puhe">me mennään</span></td><td>nós vamos</td></tr>
  <tr><td><span class="fi">me olemme</span></td><td><span class="fi" data-rekisteri="puhe">me ollaan</span></td><td>nós somos, estamos</td></tr>
</table>`
    },
    {
      id: 'konditionaali20', otsikko: 'O condicional em todas as pessoas: asuisin, asuisit…', taso: 'essencial', hakuosa: 'h-konditionaali', treeni: 't20-konditionaali',
      html: `
<p><b>Forma:</b> radical forte do “ele” + <span class="fi pala">-isi-</span> + terminação: <span class="fi">asuu → asuisin</span>, <span class="fi">nukkuu → nukkuisin</span>, <span class="fi">tulee → tulisin</span>. <b>Uso:</b> o “…ria” do português.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">minä asuisin</span></td><td>eu moraria</td></tr>
  <tr><td><span class="fi">sinä uisit</span></td><td>você nadaria</td></tr>
  <tr><td><span class="fi">hän olisi</span></td><td>ele, ela seria</td></tr>
  <tr><td><span class="fi">me saunoisimme</span></td><td>nós faríamos sauna</td></tr>
  <tr><td><span class="fi">te tulisitte</span></td><td>vocês viriam</td></tr>
  <tr><td><span class="fi">he kalastaisivat</span></td><td>eles, elas pescariam</td></tr>
</table>`
    },
    {
      id: 'jos20', otsikko: 'Se eu tivesse × se eu tiver: jos', taso: 'atenção', hakuosa: 'h-konditionaali', treeni: 't20-jos',
      html: `
<p>Quem fala decide: <b>imaginado</b> = condicional, <b>possível</b> = presente. Em geral as duas partes da frase com <span class="fi">jos</span> ficam no mesmo modo: condicional + condicional; presente + presente (ou ordem, convite). Depois de <span class="fi">jos</span> + presente, a outra parte pode ter um condicional educado: <span class="fi">Jos sinulla on aikaa, voisimme mennä Hankoon.</span></p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Jos minulla olisi mökki, asuisin täällä.</span></td><td>Se eu tivesse uma casa de campo, moraria aqui.</td></tr>
  <tr><td><span class="fi">Jos huomenna sataa, saunomme.</span></td><td>Se chover amanhã, fazemos sauna.</td></tr>
  <tr><td><span class="fi">Jos sinulla on aikaa, mennään Hankoon!</span></td><td>Se você tiver tempo, vamos a Hanko!</td></tr>
</table>
<p>O passado não imagina: <span class="fi">jos minulla oli</span> = se eu tinha (de verdade).</p>`
    },
    {
      id: 'aantaminen20', otsikko: 'Pronúncia: a pergunta também desce', taso: 'essencial', hakuosa: 'h-paino',
      html: `
<p>A melodia finlandesa normalmente desce do começo ao fim, também na pergunta. Nas perguntas com <span class="fi pala">-ko/-kö</span> e com palavra interrogativa, a voz não precisa subir: a palavra já marca a pergunta. Uma subida forte no fim pode soar como surpresa.</p>
<ul class="esim">
  <li class="s" data-pt="Tem sauna no prédio?">Onko talossa sauna?</li>
  <li class="s" data-pt="Vamos para a sauna?">Mennäänkö saunaan?</li>
  <li class="s" data-pt="Onde fica a casa de campo?">Missä mökki on?</li>
</ul>`
    },
    {
      id: 'yhteenveto20', otsikko: 'Resumo do curso: mennä em todas as formas', taso: 'revisão', hakuosa: 'h-aikamuodot',
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th><th>forma</th></tr>
  <tr><td><span class="fi">menen · en mene</span></td><td>vou · não vou</td><td>presente</td></tr>
  <tr><td><span class="fi">menin · en mennyt</span></td><td>fui · não fui</td><td>passado</td></tr>
  <tr><td><span class="fi">olen mennyt</span></td><td>já fui</td><td>perfeito</td></tr>
  <tr><td><span class="fi">menisin</span></td><td>iria</td><td>condicional</td></tr>
  <tr><td><span class="fi">mene! menkää!</span></td><td>vá! vão!</td><td>imperativo</td></tr>
  <tr><td><span class="fi">mennään</span></td><td>vai-se; vamos!</td><td>passivo</td></tr>
</table>`
    },
    {
      id: 'konjunktiot20', otsikko: 'Então, se, ou: joten, jos, tai', taso: 'essencial', hakuosa: 'h-konjunktiot', treeni: 't20-konjunktiot',
      html: `
<p><span class="fi">joten</span> (então) traz o resultado; <span class="fi">jos</span> (se) a condição; <span class="fi">tai</span> (ou) a escolha numa afirmação (numa pergunta, “ou” é <span class="fi">vai</span>):</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Sataa, joten emme ui.</span></td><td>então</td></tr>
  <tr><td><span class="fi">Mene hetkeksi ulos, jos sinulla on liian kuuma.</span></td><td>se</td></tr>
  <tr><td><span class="fi">Uin meressä tai järvessä.</span></td><td>ou</td></tr>
  <tr><td><span class="fi">Emme ui, vaan saunomme.</span></td><td>e sim · depois de negação</td></tr>
</table>`
    },
    {
      id: 'sudenkuopat20', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>“Se eu tivesse” não é passado:</b> <span class="fi">jos minulla olisi</span>, não <span class="fi">jos minulla oli</span>.</li>
  <li><b>Em geral, o mesmo modo nas duas partes:</b> <span class="fi">Jos olisi lämmin, uisimme.</span> (imaginado) × <span class="fi">Jos huomenna sataa, saunomme.</span> (possível)</li>
  <li><b>Passivo sem pessoa:</b> <span class="fi">Suomessa saunotaan</span> (se faz, todo mundo); para planos, <span class="fi">Mennään!</span> (vamos!); o “nós” formal é <span class="fi">me saunomme</span>.</li>
  <li><b>Objeto inteiro no passivo sem -n:</b> <span class="fi">poltetaan kokko</span>, não <span class="pala">poltetaan kokon</span> (os pronomes pessoais mantêm o <span class="fi pala">-t</span>: <span class="fi">minut, sinut, hänet</span>).</li>
  <li><b>A pergunta não precisa subir:</b> <span class="fi">Onko talossa sauna?</span> com a voz descendo no fim.</li>
</ul>`
    }
  ]
});
