/* Tottakai, lição 20: kesä Suomessa (Passon jakso 20 Maian näkökulmasta). Oma materiaali, ei kirjan tekstiä.
   Kurssisuunnitelma: docs/RUNKO_13_20.md §9 ”Lesson 20”; tarinan kalenteri: kesäkuu 2027, juhannusaatto pe 25.6.,
   juhannus la 26.6., Hanko su 27.6. (oppitunti 19 = 31.12.2026–2.1.2027 Riossa). Kurssin viimeinen oppitunti.
   Materiaalivaihe 8.11.2026 (ass/oppitunnit/t20.md §6): omistajan lukitsemat dialogit ass/luonnokset/t20-a-1_lopullinen.md
   ja t20-b-1_lopullinen.md sellaisinaan (suomi ja portugali; Martan repliikit portugaliksi span lang=pt-BR). Ei muutoksia
   lukittuihin riveihin. Vanha tarina (kahvi ja pulla, Andersonin mehu, Jayn olut ja ”Aloitetaan kahvilla”, Purjon huoneet,
   Martan kylmä vesi, Purjo saunan johtajana ja ”Tämä on elämää!”, Hiiden jos-repliikki, Jay ja Anderson juoksevat
   mereen) on poissa; lukittujen dialogien ulkopuoliset aukot (joten, pystyä) kantaa aineisto.
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t20, ”Parte A · Encontro”): Purjon uusi asunto Arabiassa (X12); dialogi A ”Tervetuloa!” (Maia tulkkaa,
     Jay ”Minä voisin tulkata!”, Maian possutaulu Purjolle, talon sauna ja juhannus mökillä, ”Suomessa saunotaan joka
     ilta.”, kaikki sanovat ”Sauna!”); loppukappale: Andersonin ”Sauna!” on hänen tervehdyksensä; Frases prontas;
     tehtävä 1 (ymmärtäminen); teemasanasto → tehtävä 2 (yhdistä); kikka A: tulkkaus `.tulkkaus` ”Maia tulkkaa” (Marta ja
     Purjo sohvalla possun alla; tulkki puhuu minä-muodossa #79; joten-aukko ”Meri on kylmä, joten en ui.”; Purjo ei pidä
     saunasta, X11; viimeinen vuoro jos + konditionaali; loppurepliikki ”hyvä tulkki” = ”boa intérprete” #80);
     ääntäminen (kysymys laskee, lição 10; passiivin pitkä loppuvokaali) → tehtävä 3 (kuuntelu); Gramática 1 passiivi
     (+ uutinen) → tehtävät 4 (kuuntelu) ja 5 (kirjoitettu passiivi, myös ei nukuta); jos + konditionaali tunnistukseen
     → tehtävä 6 (valinta).
   - osa B (#t20-b, ”Parte B · Aprofundar e fechar”): juhannusaatto Purjon vuokraamalla punaisella mökillä Korppoossa
     (puulämmitteinen sauna, laituri); dialogi B ”Nyt mennään saunaan!” (Andersonin ensimmäinen sauna ja ”Kuuma!”, Jay
     ”Minä saunon, mutta en ui.”, Maian jos-konditionaali, ”tänään ei nukuta”, Hiisi ajaa Hankoon, Purjo ”Ei ikinä!”,
     Maia ”Jos Hiisi ajaa, minä menen bussilla!”, Walker kalastaa koko yön); loppukappale: Anderson ui, Jay pistää vain jalan veteen,
     kokko keskiyöllä; Frases prontas; kikka B: Maian kesäalbumi (`.albumi`, kuvatekstit passiivissa, myös ei nukuta;
     Hankoon Hiisi ajaa Walkerin ja Jayn, Maia menee bussilla, tutka kuvaa auton: K4:n taulu); takaa-ajo ”Fuga no
     retrovisor” (paluumatkalla bussia ei enää ole, Maia joutuu Hiiden kyytiin; pomo.js ajo-t20) ja päiväsakot;
     Gramática 2 me mennään (tunnistus) → tehtävät 7 (ymmärtäminen) ja 8 (puhe); kulttuuri (mökki, juhannus, sauna,
     Hanko); Na rua (Hiisi kirjakielellä kuten aina, HAHMOT; Jay ja Purjo puhekielellä; Purjo jää laiturille, X11); kotitehtävä; itsearvio.
   Suomessa: suomea puhuvat Purjo, Hiisi, Jay, Maia ja Anderson muutamalla sanalla (Sauna! Kuuma!); Martan sanat
   portugaliksi (dialogissa span lang=pt-BR, tulkkauksessa lang=pt-BR), Walkerin vain Maian tulkkaamina. Kirjakieli
   kaikkialla; puhekieli vain Na rua -nurkassa ja Gramática 2:ssa data-rekisteri="puhe". Passiivin kieltomuoto tulee
   koneelta (solu pass.kielto); tyypeissä 2–6 se on perusmuodon näköinen, joten ei mennä merkitään
   data-l="mennä:pass.kielto". Ei -hAn, ei -massa, ei jotta. */
Kurssi.lisaa({
  id: 't20',
  lyhyt: '20',
  jakso: 'Lição 20',
  otsikko: 'Verão na Finlândia: se eu tivesse… e o passivo',
  lahde: 'Tema: a família da Maia na Finlândia, interpretar, o chalé em Korppoo, o juhannus e a sauna, Hanko · Gramática: o passivo (saunotaan, uidaan, mennään, ei nukuta; na fala, me mennään), o condicional com jos, para reconhecer (jos minulla olisi…, maalaisin…), joten · Pronúncia: a melodia desce no fim, também na pergunta (lembrete da lição 10)',
  aiheet: ['vapaa', 'luonto', 'viestinta', 'koti'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga e pintora; interpreta entre a família dela e a Purjo' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; estuda português desde janeiro; faz sauna, mas não nada no mar' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; recebe a família da Maia; prefere o píer à sauna' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; quer dirigir até Hanko' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; carteiro; diz “Sauna!” e “Kuuma!”' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 5, kuvaus: 'mãe da Maia; fala português (a Maia interpreta)' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 7, kuvaus: 'pai da Maia; fala português; pesca no píer a noite inteira' },
    uutiset: { nimi: 'Notícias', tyyppi: 'mies', vaihto: 8, kuvaus: 'locutor do noticiário (lê a notícia do jornal)' }
  },

  sanasto: [
    'juhannus', 'juhannusaatto', 'kesämökki', 'mökki', 'sauna', 'saunoa', 'löyly', 'vihta', 'uida', 'meri', 'laituri',
    'kokko', 'kalastaa', 'grillata', 'heittää', 'polttaa', 'viettää', 'tulkki', 'tulkata', 'ruotsi', 'sisään', 'jos',
    'aloittaa', 'pystyä', 'ikinä', 'joten'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Encontro',
      html: `
<ul class="tavoitteet">
  <li>Você recebe visitas e é recebido: <span class="fi">Tervetuloa Suomeen! Tulkaa sisään!</span></li>
  <li>Você interpreta entre o português e o finlandês: <span class="fi">Marta sanoo: kiitos!</span> · <span class="fi">Walker kysyy: onko talossa sauna?</span></li>
  <li>Você pergunta com a melodia finlandesa: a voz desce no fim, também na pergunta.</li>
  <li>Você diz o que se faz, sem dizer quem: <span class="fi">Suomessa saunotaan joka ilta. Juhannuksena mennään mökille.</span></li>
  <li>Parte B: a noite do juhannus no chalé e o “se” com o condicional, para reconhecer: <span class="fi">Jos minulla olisi mökki, maalaisin merta joka päivä.</span></li>
</ul>
<p data-paikka="helsingin-kaupunginosat">Junho de 2027, seis meses depois do Natal em Belo Horizonte. Agora é a família da Maia que atravessa o oceano, como a Maia prometeu no cartão-postal do Rio (lição 19): o Walker, a Marta e o Anderson estão na Finlândia pela primeira vez, e o ponto alto da viagem é o juhannus, a festa do meio do verão, no sábado, 26 de junho. Hoje à noite, a Purjo recebe todo mundo no apartamento novo dela em Arabia, aquele da lição 8. São oito da noite e o sol ainda está alto. A Purjo não fala português, e a família da Maia não fala finlandês.</p>

<section class="osio">
  <h2>Diálogo A: <span class="fi">Tervetuloa!</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Quando a Marta ou o Walker falam, a Maia diz em finlandês <span class="fi">Marta sanoo: …</span> (a Marta diz) ou <span class="fi">Walker kysyy: …</span> (o Walker pergunta) e repete a frase. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t20-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="A Maia, o Jay, o Walker, a Marta e o Anderson estão na porta do apartamento novo da Purjo, em Arabia. A família da Maia fica duas semanas na Finlândia.">Maia, Jay, Walker, Marta ja Anderson ovat Purjon uuden asunnon ovella Arabiassa. Maian perhe on Suomessa kaksi viikkoa.</p>
    <p class="s" data-h="purjo" data-pt="Bem-vindos à Finlândia! Entrem!">Tervetuloa Suomeen! Tulkaa sisään!</p>
    <p class="s" data-h="marta" data-pt="Obrigada, Purjo! Que apartamento lindo!"><span lang="pt-BR">Obrigada, Purjo! Que apartamento lindo!</span></p>
    <p class="s" data-h="maia" data-pt="A Marta diz: obrigada! O apartamento é muito bonito.">Marta sanoo: kiitos! Asunto on hyvin kaunis.</p>
    <p class="s" data-h="jay" data-pt="E eu comecei o português em janeiro. Eu poderia interpretar!">Ja minä aloitin portugalin tammikuussa. Minä voisin tulkata!</p>
    <p class="s" data-h="maia" data-pt="A Marta fala rápido. Meio ano não basta, Jay. Eu interpreto.">Marta puhuu nopeasti. Puoli vuotta ei riitä, Jay. Minä tulkkaan.</p>
    <p class="s" data-h="kertoja" data-pt="Todos entram. Na parede da sala há um quadro: um porco grande e cor-de-rosa.">Kaikki tulevat sisään. Olohuoneen seinällä on taulu: iso vaaleanpunainen possu.</p>
    <p class="s" data-h="marta" data-pt="Que porquinho lindo! Quem pintou?"><span lang="pt-BR">Que porquinho lindo! Quem pintou?</span></p>
    <p class="s" data-h="maia" data-pt="A Marta pergunta: quem pintou este quadro?">Marta kysyy: kuka maalasi tämän taulun?</p>
    <p class="s" data-h="purjo" data-pt="A Maia pintou para mim. O porquinho está feliz, e eu também.">Maia maalasi sen minulle. Possu on onnellinen ja minä myös.</p>
    <p class="s" data-h="maia" data-pt="O Walker pergunta: tem sauna no prédio?">Walker kysyy: onko talossa sauna?</p>
    <p class="s" data-h="purjo" data-pt="No prédio tem sauna, mas no juhannus a gente vai para o chalé. Lá tem sauna.">Talossa on sauna, mutta juhannuksena mennään mökille. Siellä on sauna.</p>
    <p class="s" data-h="jay" data-pt="Na Finlândia se faz sauna toda noite.">Suomessa saunotaan joka ilta.</p>
    <p class="s" data-h="anderson" data-pt="Sauna!">Sauna!</p>
    <p class="s" data-h="kertoja" data-pt="O Anderson diz “Sauna!”. A Purjo diz “Sauna!”. Todo mundo diz “Sauna!”. A Purjo ri.">Anderson sanoo ”Sauna!” Purjo sanoo ”Sauna!” Kaikki sanovat ”Sauna!” Purjo nauraa.</p>
  </div>
  <p>Desde essa noite, o “Sauna!” do Anderson vale como um “Moi!”: ele diz para a Purjo, para o vizinho do elevador e para o motorista do bonde, e a Purjo ri toda vez. E a Maia percebe uma coisa estranha: cada vez que ela traduz uma pergunta dos pais, a Purjo responde com cara de susto. A seção de pronúncia, mais abaixo, explica por quê.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Tervetuloa Suomeen! Tulkaa sisään!</span> = bem-vindos à Finlândia! entrem! · <span class="fi">tulkaa</span> é a ordem para vocês (lição 14)</li>
      <li><span class="fi">Marta sanoo: kiitos!</span> · <span class="fi">Walker kysyy: onko talossa sauna?</span> = o jeito mais simples de interpretar: o nome + <span class="fi">sanoo</span> ou <span class="fi">kysyy</span> + a frase</li>
      <li><span class="fi">Minä voisin tulkata!</span> = eu poderia interpretar! · o condicional educado (lição 15)</li>
      <li><span class="fi">Puoli vuotta ei riitä.</span> = meio ano não basta</li>
      <li><span class="fi">Kuka maalasi tämän taulun?</span> = quem pintou este quadro? · <span class="fi">Maia maalasi sen minulle.</span> = a Maia pintou para mim · o passado (lição 13)</li>
      <li><span class="fi">Juhannuksena mennään mökille.</span> = no juhannus a gente vai para o chalé · <span class="fi">mennään</span>: o passivo, Gramática 1</li>
      <li><span class="fi">Suomessa saunotaan joka ilta.</span> = na Finlândia se faz sauna toda noite · o passivo, Gramática 1</li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercício: o diálogo A</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Você entendeu o diálogo A?</h3>
    <p class="ohje">Responda em finlandês. Volte ao diálogo se precisar.</p>
    <div class="valinta" data-oikea="Kaksi viikkoa.">
      <p class="kysymys"><span class="fi">Kuinka kauan Maian perhe on Suomessa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kaksi päivää.</button><button type="button">Kaksi viikkoa.</button><button type="button">Puoli vuotta.</button></div>
    </div>
    <div class="valinta" data-oikea="Maia.">
      <p class="kysymys"><span class="fi">Kuka tulkkaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Jay.</button><button type="button">Purjo.</button><button type="button">Maia.</button></div>
    </div>
    <div class="valinta" data-oikea="Maia.">
      <p class="kysymys"><span class="fi">Kuka maalasi possun?</span></p>
      <div class="vaihtoehdot"><button type="button">Maia.</button><button type="button">Marta.</button><button type="button">Purjo.</button></div>
    </div>
    <div class="valinta" data-oikea="Mökille.">
      <p class="kysymys"><span class="fi">Mihin kaikki menevät juhannuksena?</span></p>
      <div class="vaihtoehdot"><button type="button">Hankoon.</button><button type="button">Mökille.</button><button type="button">Brasiliaan.</button></div>
    </div>
    <div class="valinta" data-oikea="Sauna!">
      <p class="kysymys"><span class="fi">Mitä Anderson sanoo?</span></p>
      <div class="vaihtoehdot"><button type="button">Kiitos!</button><button type="button">Moi!</button><button type="button">Sauna!</button></div>
    </div>
  </div>
</section>

<section class="osio">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="Visita e verão" data-sanat="tervetuloa,sisään,sanoa,kysyä,tulkki,tulkata,taulu,maalata,juhannus,mökki,sauna,saunoa"></div>
  <p>As outras palavras da lição estão no <a href="#t20-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercício: as palavras</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Ligue: receber e interpretar</h3>
    <ul class="yhdista">
      <li data-pari="bem-vindos!">tervetuloa</li>
      <li data-pari="entrem!">tulkaa sisään</li>
      <li data-pari="a Marta diz">Marta sanoo</li>
      <li data-pari="o Walker pergunta">Walker kysyy</li>
      <li data-pari="interpretar">tulkata</li>
      <li data-pari="intérprete">tulkki</li>
      <li data-pari="quadro">taulu</li>
      <li data-pari="a festa do meio do verão">juhannus</li>
    </ul>
  </div>
</section>

<section class="osio">
  <h2>Maia interpreta: português e finlandês</h2>
  <p>Mais tarde, a Marta e a Purjo sentam juntas no sofá, embaixo do porquinho. Têm muito para dizer uma à outra e nenhuma língua em comum. A Maia senta no meio. À esquerda fica o português da Marta; à direita, o finlandês da Purjo.</p>
  <p class="ohje">Leia ou ouça a fala e escolha o que a Maia diz na outra língua. Uma fala de cada vez: a próxima aparece quando você acerta. As opções erradas mudam uma coisa só: uma palavra ou o tempo do verbo. Aqui a Maia interpreta como um intérprete de verdade: repete a frase na primeira pessoa, sem <span class="fi">Marta sanoo</span>. Quando ela diz <span class="fi">minä</span>, quem fala é a Marta.</p>
  <div class="tulkkaus" data-otsikko="Maia tulkkaa" data-vasen="marta" data-oikea="purjo" data-vasen-nimi="Marta · português" data-oikea-nimi="Purjo · finlandês" data-laskuri="Falas interpretadas">
    <div class="tk-vuoro">
      <p class="tk-alku" lang="pt-BR">Como se comemora o juhannus na Finlândia?</p>
      <div class="valinta" data-oikea="Miten Suomessa juhlitaan juhannusta?">
        <p class="kysymys">A Maia traduz para a Purjo:</p>
        <div class="vaihtoehdot"><button type="button">Missä Suomessa juhlitaan juhannusta?</button><button type="button">Miten Suomessa juhlitaan joulua?</button><button type="button">Miten Suomessa juhlitaan juhannusta?</button></div>
      </div>
      <p class="s tk-tulkki" data-h="maia" data-pt="Como se comemora o juhannus na Finlândia?">Miten Suomessa juhlitaan juhannusta?</p>
    </div>
    <div class="tk-vuoro">
      <p class="s tk-alku" data-h="purjo" data-pt="No juhannus a gente vai para o chalé. Faz sauna, nada e assa linguiça.">Juhannuksena mennään mökille. Saunotaan, uidaan ja grillataan makkaraa.</p>
      <div class="valinta" data-oikea="No juhannus a gente vai para o chalé. Faz sauna, nada e assa linguiça.">
        <p class="kysymys">A Maia traduz para a Marta:</p>
        <div class="vaihtoehdot" lang="pt-BR"><button type="button">No Natal a gente vai para o chalé. Faz sauna, nada e assa linguiça.</button><button type="button">No juhannus a gente vai para o chalé. Faz sauna, nada e assa linguiça.</button><button type="button">No juhannus a gente vai para o chalé. Faz sauna, nada e dança.</button></div>
      </div>
      <p class="tk-tulkki" lang="pt-BR">No juhannus a gente vai para o chalé. Faz sauna, nada e assa linguiça.</p>
    </div>
    <div class="tk-vuoro">
      <p class="tk-alku" lang="pt-BR">É verdade que na Finlândia todo mundo faz sauna?</p>
      <div class="valinta" data-oikea="Onko totta, että Suomessa kaikki saunovat?">
        <p class="kysymys">A Maia traduz para a Purjo:</p>
        <div class="vaihtoehdot"><button type="button">Onko totta, että Suomessa kaikki uivat?</button><button type="button">Onko totta, että Suomessa kaikki saunovat?</button><button type="button">Onko totta, että Ruotsissa kaikki saunovat?</button></div>
      </div>
      <p class="s tk-tulkki" data-h="maia" data-pt="É verdade que na Finlândia todo mundo faz sauna?">Onko totta, että Suomessa kaikki saunovat?</p>
    </div>
    <div class="tk-vuoro">
      <p class="s tk-alku" data-h="purjo" data-pt="Quase todo mundo. Eu não gosto de sauna. Fico sentada no píer e olho o mar.">Melkein kaikki. Minä en pidä saunasta. Istun laiturilla ja katson merta.</p>
      <div class="valinta" data-oikea="Quase todo mundo. Eu não gosto de sauna. Fico sentada no píer e olho o mar.">
        <p class="kysymys">A Maia traduz para a Marta:</p>
        <div class="vaihtoehdot" lang="pt-BR"><button type="button">Quase todo mundo. Eu não gosto de sauna. Fico sentada no píer e olho o mar.</button><button type="button">Quase todo mundo. Eu não gosto de nadar. Fico sentada no píer e olho o mar.</button><button type="button">Quase todo mundo. Eu não gosto de sauna. Fico sentada no píer e olho o céu.</button></div>
      </div>
      <p class="tk-tulkki" lang="pt-BR">Quase todo mundo. Eu não gosto de sauna. Fico sentada no píer e olho o mar.</p>
    </div>
    <div class="tk-vuoro">
      <p class="tk-alku" lang="pt-BR">O mar é frio demais, então eu não nado. Não consigo!</p>
      <div class="valinta" data-oikea="Meri on liian kylmä, joten en ui. En pysty siihen!">
        <p class="kysymys">A Maia traduz para a Purjo:</p>
        <div class="vaihtoehdot"><button type="button">Meri on liian kylmä, mutta en ui. En pysty siihen!</button><button type="button">Meri on liian kylmä, joten en ui. En pysty siihen!</button><button type="button">Meri on liian kylmä, jos en ui. En pysty siihen!</button></div>
      </div>
      <p class="s tk-tulkki" data-h="maia" data-pt="O mar é frio demais, então eu não nado. Não consigo!">Meri on liian kylmä, joten en ui. En pysty siihen!</p>
    </div>
    <div class="tk-vuoro">
      <p class="s tk-alku" data-h="purjo" data-pt="Ótimo! Se você morasse aqui, nós duas ficaríamos no píer toda noite.">Hyvä! Jos sinä asuisit täällä, istuisimme laiturilla joka ilta.</p>
      <div class="valinta" data-oikea="Ótimo! Se você morasse aqui, nós duas ficaríamos no píer toda noite.">
        <p class="kysymys">A Maia traduz para a Marta:</p>
        <div class="vaihtoehdot" lang="pt-BR"><button type="button">Ótimo! Se você mora aqui, nós duas ficamos no píer toda noite.</button><button type="button">Ótimo! Se você morasse aqui, nós duas ficaríamos no píer toda noite.</button><button type="button">Ótimo! Se você morasse aqui, nós duas ficaríamos na sauna toda noite.</button></div>
      </div>
      <p class="tk-tulkki" lang="pt-BR">Ótimo! Se você morasse aqui, nós duas ficaríamos no píer toda noite.</p>
    </div>
    <p class="s tk-loppu" data-h="purjo" data-pt="Maia, você é uma boa intérprete!">Maia, sinä olet hyvä tulkki!</p>
  </div>
  <p>Repare em duas falas. Na quinta, <span class="fi">joten</span> (então, por isso) traz o resultado: <span class="fi">Meri on liian kylmä, joten en ui.</span> Na última, <span class="fi">asuisit</span> e <span class="fi">istuisimme</span> têm o <span class="fi pala">-isi-</span> do condicional da lição 15, agora com <span class="fi">jos</span> (se): é o “se você morasse… nós ficaríamos” do português. O quadro “Para reconhecer”, na parte B, explica.</p>
</section>

<section class="osio" data-paikka="toolonlahti">
  <h2>Pronúncia: a pergunta também desce (lembrete da lição 10)</h2>
  <p>Às onze da noite, todos vão de bonde até o centro e caminham em volta da baía de Töölönlahti, e o céu ainda está claro. No caminho, a Maia descobre o erro do dia: quando ela traduzia as perguntas dos pais, a voz subia no fim, como em português. A Purjo achou que o Walker tinha medo da sauna. É o ponto da lição 10, que o Hiisi já tinha notado: em finlandês a pergunta <b>desce</b> no fim, como a afirmação, porque o <span class="fi pala">-ko/-kö</span> ou a palavra interrogativa já marca a pergunta. E o passivo termina em vogal longa e <span class="fi pala">-n</span>: <span class="fi">saunotaan, mennään</span>. Ouça e repita, deixando a voz cair no fim:</p>
  <ul class="esim">
    <li class="s" data-pt="Tem sauna no prédio?">Onko talossa sauna?</li>
    <li class="s" data-pt="Tem sauna no prédio.">Talossa on sauna.</li>
    <li class="s" data-pt="Vamos para a sauna?">Mennäänkö saunaan?</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="kallio-kahvila">
  <h2>Exercício: ouvir a pergunta</h2>
  <p>Na manhã seguinte, a Maia e a Marta sentam numa tenda da praça de Hakaniemi: a Marta toma café, e a Maia, uma Coca-Cola. A Maia aproveita para treinar a mãe… e você.</p>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Ouça: é pergunta?</h3>
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
    <div class="valinta" data-kuuntele="Kuka maalasi tämän taulun?" data-oikea="pergunta">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">pergunta</button><button type="button">não é pergunta</button></div>
    </div>
    <div class="valinta" data-kuuntele="Maia maalasi sen minulle." data-oikea="não é pergunta">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">pergunta</button><button type="button">não é pergunta</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 1 · O passivo: <span class="fi">Suomessa saunotaan</span></h2>
  <p>O passivo (<span class="fi">passiivi</span>) diz o que se faz <b>sem dizer quem faz</b>: <span class="fi">Suomessa saunotaan.</span> = na Finlândia se faz sauna. É o “se” do português (“fala-se sueco”) ou o “a gente” de sentido geral. A forma é uma só, sem pessoa e sem sujeito. Quem faz são sempre pessoas, e o finlandês não diz quem: não existe um “por alguém”.</p>
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
  <p><b>Negação:</b> <span class="fi">ei</span> + o passivo sem o <span class="fi pala">-an/-än</span> do fim: <span class="fi">ei saunota</span> (não se faz sauna), <span class="fi">ei <span data-l="mennä:pass.kielto">mennä</span></span> (não se vai). Nos tipos 2 a 6 essa forma é igual ao infinitivo. A Maia vai dizer na noite do juhannus: <span class="fi">Tänään ei nukuta.</span> (hoje ninguém dorme).</p>
  <p><b>Objeto:</b> o objeto parcial continua no partitivo: <span class="fi">Rannalla grillataan makkaraa.</span> O objeto inteiro fica na <b>forma básica</b>, sem o <span class="fi pala">-n</span> da lição 12: <span class="fi">Juhannuksena poltetaan kokko.</span> (acende-se a fogueira) × <span class="fi">Hiisi polttaa kokon.</span> (o Hiisi acende a fogueira). Exceto os pronomes pessoais, que mantêm o <span class="fi pala">-t</span>: <span class="fi">minut, sinut, hänet</span>…</p>
  <p><b>Vamos!</b> Sem sujeito e em tom de proposta, o passivo funciona como convite, “vamos…!”: <span class="fi">Mennään saunaan!</span> (vamos para a sauna!), <span class="fi">Uidaan!</span> (vamos nadar!), <span class="fi">Jatketaan!</span> (vamos continuar!). Você usa <span class="fi">Mennään!</span> desde a lição 3; a forma ficou para agora: é o passivo.</p>

  <p>O passivo aparece em todo lugar, também no jornal. Toque nas palavras:</p>
  <div class="dokumentti uutinen" lang="fi-FI">
    <p class="uutinen-lehti">Uutiset</p>
    <p class="s uutinen-otsikko" data-h="uutiset" data-pt="No juhannus se faz sauna e se nada">Juhannuksena saunotaan ja uidaan</p>
    <figure class="kuva" data-kuva="korppoo" lang="pt-BR"></figure>
    <p class="s" data-h="uutiset" data-pt="O juhannus começa na sexta-feira. É a grande festa do verão.">Juhannus alkaa perjantaina. Se on kesän iso juhla.</p>
    <p class="s" data-h="uutiset" data-pt="No chalé se faz sauna, se nada e se faz churrasco.">Mökillä saunotaan, uidaan ja grillataan.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: o passivo</h2>
  <p>Primeiro ouça a forma, depois escreva.</p>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Ouça: passivo, nós ou condicional?</h3>
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

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Complete com o passivo</h3>
    <p class="ohje">Escreva o passivo do verbo entre parênteses. Tipo 1: radical do “eu” + <span class="fi pala">-taan/-tään</span> (<span class="fi pala">-a/-ä</span> vira <span class="fi pala">e</span>); outros tipos: infinitivo + <span class="fi pala">-an/-än</span>. Depois de <span class="fi">ei</span>, sem o <span class="fi pala">-an/-än</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Suomessa <span class="aukko" data-oikea="saunotaan"></span> paljon. <span data-ei-kuplaa>(saunoa)</span></p>
      <p>Saunan jälkeen <span class="aukko" data-oikea="uidaan"></span> meressä. <span data-ei-kuplaa>(uida)</span></p>
      <p>Laiturilla <span class="aukko" data-oikea="kalastetaan"></span> yöllä. <span data-ei-kuplaa>(kalastaa)</span></p>
      <p>Rannalla <span class="aukko" data-oikea="grillataan"></span> makkaraa. <span data-ei-kuplaa>(grillata)</span></p>
      <p>Saunassa <span class="aukko" data-oikea="ollaan"></span> hiljaa. <span data-ei-kuplaa>(olla)</span></p>
      <p>Juhannuksena <span class="aukko" data-oikea="poltetaan"></span> kokko. <span data-ei-kuplaa>(polttaa)</span></p>
      <p>Juhannuksena <span class="aukko" data-oikea="mennään"></span> mökille. <span data-ei-kuplaa>(mennä)</span></p>
      <p>Juhannusyönä ei <span class="aukko" data-oikea="nukuta"></span>. <span data-ei-kuplaa>(nukkua)</span></p>
    </div>
  </div>
</section>

`
    },
    {
      id: 'b', otsikko: 'Parte B · Aprofundar e fechar',
      html: `
<ul class="tavoitteet">
  <li>Você entende a noite do juhannus e o álbum do verão, com o passivo: <span class="fi">Saunan jälkeen uidaan meressä. Tänään ei nukuta.</span></li>
  <li>Você reconhece o “nós” da rua: <span class="fi" data-rekisteri="puhe">me mennään</span> = <span class="fi">me menemme</span>.</li>
  <li>Você fala de você com o passivo e o condicional: <span class="fi">Jos minulla olisi mökki, maalaisin merta joka päivä.</span></li>
</ul>

<p data-paikka="korppoo">Sexta-feira, 25 de junho de 2027, véspera do juhannus. A Purjo alugou um chalé vermelho em Korppoo, no arquipélago do sudoeste, à beira do mar, com píer e uma sauna a lenha. De Helsinque até lá são umas três horas e meia de carro, com travessias de balsa. O Hiisi levou o Walker e a Marta e chegou bem antes dos outros. Ninguém pergunta como. A Marta rezou no banco de trás o caminho inteiro, e o Walker achou ótimo. Agora são onze da noite, e a sauna está quente.</p>

<section class="osio">
  <h2>Diálogo B: <span class="fi">Nyt mennään saunaan!</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure os verbos sem pessoa, terminados em <span class="fi pala">-taan/-tään</span> (ou <span class="fi pala">-daan, -laan, -naan…</span>: <span class="fi">uidaan, mennään</span>). É o passivo: “se faz, a gente faz”. E procure o <span class="fi">jos</span>: uma vez com o <span class="fi pala">-isi-</span> do condicional (“se eu tivesse…”), outra vez com o presente (“se o Hiisi dirigir…”). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t20-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="É véspera de juhannus. A família toda está num chalé vermelho em Korppoo, à beira-mar. São onze da noite, mas está tão claro quanto de dia.">On juhannusaatto. Koko perhe on punaisella mökillä Korppoossa, meren rannalla. Kello on yksitoista illalla, mutta on yhtä valoisaa kuin päivällä.</p>
    <p class="s" data-h="maia" data-pt="A sauna está quente! Venham para a sauna! Depois da sauna a gente nada no mar.">Sauna on kuuma! Tulkaa saunaan! Saunan jälkeen uidaan meressä.</p>
    <p class="s" data-h="jay" data-pt="Eu faço sauna, mas não nado. O mar está frio demais.">Minä saunon, mutta en ui. Meri on liian kylmä.</p>
    <p class="s" data-h="kertoja" data-pt="É a primeira sauna do Anderson. Na sauna, a Maia joga água nas pedras.">Tämä on Andersonin ensimmäinen sauna. Saunassa Maia heittää löylyä.</p>
    <p class="s" data-h="anderson" data-pt="Quente! Quente!">Kuuma! Kuuma!</p>
    <p class="s" data-h="kertoja" data-pt="O Anderson ri. Agora “kuuma” é a palavra preferida dele. Depois da sauna todos sentam no píer.">Anderson nauraa. Nyt ”kuuma” on Andersonin paras sana. Saunan jälkeen kaikki istuvat laiturilla.</p>
    <p class="s" data-h="maia" data-pt="O mar é lindo. Se eu tivesse um chalé, eu pintaria o mar todo dia.">Meri on kaunis. Jos minulla olisi mökki, minä maalaisin merta joka päivä.</p>
    <p class="s" data-h="jay" data-pt="Você pintaria e eu dormiria o verão inteiro.">Sinä maalaisit ja minä nukkuisin koko kesän.</p>
    <p class="s" data-h="maia" data-pt="Mas hoje ninguém dorme. É juhannus!">Mutta tänään ei nukuta. On juhannus!</p>
    <p class="s" data-h="hiisi" data-pt="No domingo a gente vai para Hanko. Eu dirijo.">Sunnuntaina mennään Hankoon. Minä ajan.</p>
    <p class="s" data-h="purjo" data-pt="Nunca! Você sempre dirige rápido demais.">Ei ikinä! Sinä ajat aina liian nopeasti.</p>
    <p class="s" data-h="maia" data-pt="Se o Hiisi dirigir, eu vou de ônibus!">Jos Hiisi ajaa, minä menen bussilla!</p>
    <p class="s" data-h="kertoja" data-pt="O Hiisi não responde. O Walker pesca no píer a noite toda.">Hiisi ei vastaa. Walker kalastaa laiturilla koko yön.</p>
  </div>
  <p>Mais tarde, o Anderson pula do píer no mar (dezesseis graus!) e puxa o Jay pela mão. O Jay põe um pé na água e volta correndo para a sauna. O Anderson vai atrás e grita a palavra dele: <span class="fi">Kuuma!</span> À meia-noite, quase todos descem até a praia para ver a fogueira do juhannus, a <span class="fi">kokko</span>, que os vizinhos acendem na beira da água. A Purjo fica no píer, olhando o mar claro. E o Hiisi, com a cara de sempre <span class="emoji">😐</span>, já pensa no domingo.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. O “se” vem logo abaixo, em “Para reconhecer”:</p>
    <ul>
      <li><span class="fi">Tulkaa saunaan!</span> = venham para a sauna! · <span class="fi">Saunan jälkeen uidaan meressä.</span> = depois da sauna a gente nada no mar · <span class="fi">jälkeen</span> vem depois do genitivo, como <span class="fi">edessä</span> (lição 14)</li>
      <li><span class="fi">Minä saunon, mutta en ui.</span> = eu faço sauna, mas não nado · <span class="fi">Meri on liian kylmä.</span> = o mar está frio demais</li>
      <li><span class="fi">Maia heittää löylyä.</span> = a Maia joga água nas pedras · <span class="fi">löyly</span> é o vapor da sauna</li>
      <li><span class="fi">Jos minulla olisi mökki, minä maalaisin merta joka päivä.</span> = se eu tivesse um chalé, eu pintaria o mar todo dia · imaginado: condicional</li>
      <li><span class="fi">Tänään ei nukuta.</span> = hoje ninguém dorme · o passivo negativo</li>
      <li><span class="fi">Ei ikinä!</span> = nunca! · <span class="fi">Jos Hiisi ajaa, minä menen bussilla!</span> = se o Hiisi dirigir, eu vou de ônibus! · possível: presente</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Para reconhecer: o “se” com o condicional</h2>
  <p>Nesta lição você só precisa reconhecer estas formas: no diálogo B, na interpretação da parte A e no exercício 6. Na lição 15 o condicional era educado: <span class="fi">haluaisin, voisitko</span>, e o Jay ainda diz <span class="fi">Minä voisin tulkata!</span> Agora ele imagina. A forma é a mesma: o radical forte do “ele” + <span class="fi pala">-isi-</span> + a terminação da pessoa (<span class="fi">asuisin, asuisit, asuisi, asuisimme, asuisitte, asuisivat</span>). Como no passado (lição 13), o radical muda antes do <span class="fi pala">-i-</span>: o <span class="fi pala">-e</span> do fim cai (<span class="fi">tulee → tulisin</span>), a vogal longa encurta (<span class="fi">osaa → osaisi</span>) e o ditongo perde a primeira vogal (<span class="fi">juo → joisi</span>, <span class="fi">syö → söisi</span>).</p>
  <p><b>Jos + condicional, condicional:</b> para algo <b>imaginado</b>, em geral as duas partes da frase ficam no condicional. O português muda o verbo de cada parte (“se eu <b>tivesse</b>, eu <b>pintaria</b>”); o finlandês usa o condicional nas duas: <span class="fi">Jos minulla olisi mökki, maalaisin merta joka päivä.</span></p>
  <p><b>Jos + presente:</b> para algo <b>possível</b> (“se chover”, “se você tiver tempo”), o <span class="fi">jos</span> fica no presente, e a outra parte em geral também, ou é uma ordem ou um convite: <span class="fi">Jos Hiisi ajaa, minä menen bussilla!</span> (se o Hiisi dirigir, eu vou de ônibus!) A outra parte também pode ter um condicional educado (lição 15): <span class="fi">Jos sinulla on aikaa, voisimme mennä Hankoon.</span> (se você tiver tempo, poderíamos ir a Hanko.) Quem fala decide: imaginado = condicional, possível = presente.</p>
  <ul class="esim">
    <li class="s" data-pt="Se a Marta soubesse finlandês, ela falaria com a Purjo.">Jos Marta osaisi suomea, hän puhuisi Purjolle.</li>
    <li class="s" data-pt="O que você faria se tivesse um chalé?">Mitä sinä tekisit, jos sinulla olisi mökki?</li>
    <li class="s" data-pt="Se você tiver tempo, vamos a Hanko!">Jos sinulla on aikaa, mennään Hankoon!</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> “se eu tivesse” parece passado, mas em finlandês o passado não imagina: <span class="fi">jos minulla oli mökki</span> = se eu tinha um chalé (de verdade, antes). Para imaginar, sempre o condicional: <span class="fi">jos minulla olisi mökki</span>. E em <span class="fi">minulla on</span> o verbo fica na forma de “ele”: <span class="fi">minulla olisi</span>, nunca <span class="pala">minulla olisin</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercício: o “se”</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Se eu tivesse ou se eu tiver?</h3>
    <p class="ohje">Quem fala decide, e a pista diz o que é: <b>imaginado</b> (“se eu tivesse”) pede o condicional no <span class="fi">jos</span>; <b>possível</b> (“se chover”, “se você tiver”) pede o presente. Em geral a outra parte da frase acompanha: condicional (<span class="fi">maalaisin, istuisimme</span>) ou presente e ordem (<span class="fi">saunomme, ei tule, tulkaa</span>).</p>
    <div class="valinta" data-oikea="olisi">
      <p class="kysymys"><span class="fi">Jos minulla ___ mökki, maalaisin merta joka päivä.</span> <span class="fi" data-ei-kuplaa>(olla)</span> · imaginado</p>
      <div class="vaihtoehdot"><button type="button">on</button><button type="button">olisi</button></div>
    </div>
    <div class="valinta" data-oikea="sataa">
      <p class="kysymys"><span class="fi">Jos huomenna ___, saunomme koko päivän.</span> <span class="fi" data-ei-kuplaa>(sataa)</span> · possível</p>
      <div class="vaihtoehdot"><button type="button">sataa</button><button type="button">sataisi</button></div>
    </div>
    <div class="valinta" data-oikea="ajaa">
      <p class="kysymys"><span class="fi">Jos Hiisi ___ Hankoon, Purjo ei tule mukaan.</span> <span class="fi" data-ei-kuplaa>(ajaa)</span> · possível</p>
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
    <div class="valinta" data-oikea="asuisit">
      <p class="kysymys"><span class="fi">Jos sinä ___ täällä, istuisimme laiturilla joka ilta.</span> <span class="fi" data-ei-kuplaa>(asua)</span> · imaginado</p>
      <div class="vaihtoehdot"><button type="button">asut</button><button type="button">asuisit</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="hanko">
  <h2>O álbum do verão</h2>
  <p>No domingo, o Hiisi dirige mesmo até Hanko, a cidade mais ao sul da Finlândia continental, com o Walker e o Jay. A Purjo leva a Marta e o Anderson no carro dela, e a Maia faz o que disse: vai de ônibus. Numa estrada de oitenta, o Hiisi anda a cento e vinte, o Walker cronometra, e um radar fotografa o carro: a multa chega em agosto. Em Hanko, o Walker pesca no porto, o Anderson junta conchas na praia, e a Marta descobre que as placas da rua estão em duas línguas, finlandês e sueco. À noite, de volta a Korppoo, a Maia monta no celular um álbum do verão para a Purjo, com legendas em finlandês, como num guia: o que se faz no verão finlandês.</p>
  <p class="ohje">Passe as páginas com as setas e toque na legenda: a Maia lê. Todas as legendas estão no passivo: ninguém faz, “se faz”.</p>
  <div class="albumi" data-otsikko="Kesä Suomessa">
    <figure data-kuva="korppoo" data-hahmot="anderson,jay" data-h="maia" data-pt="Em Korppoo se faz sauna toda noite." data-puhu="Korppoossa saunotaan joka ilta."><figcaption>Korppoossa saunotaan joka ilta.</figcaption></figure>
    <figure data-kuva="korppoo" data-hahmot="anderson" data-h="maia" data-pt="Depois da sauna se nada no mar." data-puhu="Saunan jälkeen uidaan meressä."><figcaption>Saunan jälkeen uidaan meressä.</figcaption></figure>
    <figure data-kuva="korppoo" data-hahmot="walker" data-h="maia" data-pt="No píer se pesca à noite." data-puhu="Laiturilla kalastetaan yöllä."><figcaption>Laiturilla kalastetaan yöllä.</figcaption></figure>
    <figure data-kuva="korppoo" data-hahmot="hiisi" data-h="maia" data-pt="Na praia se assa linguiça." data-puhu="Rannalla grillataan makkaraa."><figcaption>Rannalla grillataan makkaraa.</figcaption></figure>
    <figure data-kuva="korppoo" data-hahmot="maia,jay" data-h="maia" data-pt="Na noite do juhannus não se dorme." data-puhu="Juhannusyönä ei nukuta."><figcaption>Juhannusyönä ei nukuta.</figcaption></figure>
    <figure data-kuva="korppoo" data-hahmot="walker,anderson" data-h="maia" data-pt="No juhannus se acende a fogueira." data-puhu="Juhannuksena poltetaan kokko."><figcaption>Juhannuksena poltetaan kokko.</figcaption></figure>
    <figure data-kuva="hanko" data-hahmot="hiisi,walker" data-h="maia" data-pt="Para Hanko se dirige rápido demais." data-puhu="Hankoon ajetaan liian nopeasti."><figcaption>Hankoon ajetaan liian nopeasti.</figcaption></figure>
    <figure data-kuva="hanko" data-hahmot="maia,marta" data-h="maia" data-pt="Em Hanko se fala finlandês e sueco." data-puhu="Hangossa puhutaan suomea ja ruotsia."><figcaption>Hangossa puhutaan suomea ja ruotsia.</figcaption></figure>
    <figure data-kuva="helsingin-kaupunginosat" data-hahmot="purjo,marta" data-h="maia" data-pt="Na casa da Purjo se olha o quadro da Maia." data-puhu="Purjon luona katsotaan Maian taulua."><figcaption>Purjon luona katsotaan Maian taulua.</figcaption></figure>
  </div>
  <p>A legenda <span class="fi">Hankoon ajetaan liian nopeasti</span> é a única que a Purjo não aprovou.</p>
  <!-- AV-077 (omistaja 22.–23.10.2026): takaa-ajo peruutuspeilissä (assets/pomo.js takaaAjo, data-pomo="ajo-t20").
       Käskyt yksikössä (oppitunti 14). -mmin-rivit (Aja hitaammin! Aja nopeammin!) ja niiden selitys poistettu 24.10.2026
       (SWAPS R6); peli ajo-t20 käyttää niitä yhä (pomo.js, johtajan päätös). 8.11.2026: paluumatkalla bussia ei enää ole,
       joten Maia joutuu Hiiden kyytiin (dialogi B: ”Jos Hiisi ajaa, minä menen bussilla!”). Kulttuuri: päiväsakot. -->
  <h3>Fuga no retrovisor</h3>
  <p>Na volta de Hanko não tem mais ônibus. A Purjo leva a família no carro dela, e a Maia, sem escolha, vai com o Hiisi, com o mapa no celular. O Hiisi pega um atalho por uma cidadezinha estranha, e aparece no retrovisor um carro branco e azul. Ajude a Maia: em cada cruzamento, dê uma ordem ao Hiisi em finlandês, na forma de “você” (lição 14). Ele é um só: nada de <span class="fi pala">-kaa</span>.</p>
  <p class="s" data-h="maia" data-pt="Vire à esquerda!">Käänny vasemmalle!</p>
  <p class="s" data-h="maia" data-pt="Vire à direita!">Käänny oikealle!</p>
  <p class="s" data-h="maia" data-pt="Siga reto!">Aja suoraan!</p>
  <p class="s" data-h="maia" data-pt="Dê meia-volta!">Käänny ympäri!</p>
  <p class="s" data-h="maia" data-pt="Pare!">Pysähdy!</p>
  <p class="s" data-h="maia" data-pt="Espere!">Odota!</p>
  <div class="pomo" data-pomo="ajo-t20"></div>
  <aside class="kulttuuri" data-paikka="hanko">
    <p class="yla">Você sabia? · Tiesitkö?</p>
    <h3>Multa pela renda: <span class="fi">päiväsakot</span></h3>
    <figure class="kuva" data-kuva="poliisiauto"></figure>
    <p>Na Finlândia, um excesso pequeno de velocidade dá uma multa de valor fixo. Um excesso maior dá <span class="fi">päiväsakot</span>, as “multas-dia”: o número de dias depende da gravidade, e o valor de cada dia depende da renda de quem dirige. Quem ganha mais paga mais pelo mesmo erro. Por isso, de vez em quando, um empresário finlandês vira notícia com uma multa de dezenas de milhares de euros. O carro da <span class="fi">poliisi</span> é branco e azul, e os radares fotografam quem passa rápido demais: a multa chega pelo correio, como a do Hiisi em agosto.</p>
  </aside>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 2 · Na rua: <span class="fi" data-rekisteri="puhe">me mennään</span> = nós vamos</h2>
  <p>Na fala, o “nós” é muitas vezes o pronome <span class="fi">me</span> + passivo (lição 16): <span class="fi" data-rekisteri="puhe">me mennään</span> = <span class="fi">me menemme</span>, <span class="fi" data-rekisteri="puhe">me saunotaan</span> = <span class="fi">me saunomme</span>. O passivo sozinho, sem <span class="fi">me</span>, é muito comum para planos e convites, na fala e na escrita informal: <span class="fi">Mennään!</span> (vamos!), <span class="fi">Tehdään se!</span> (vamos fazer isso!), <span class="fi">Nähdään!</span> (a gente se vê!). Os diálogos desta lição usam esse passivo natural. O “nós” da língua padrão é <span class="fi">menemme</span>; <span class="fi" data-rekisteri="puhe">me mennään</span> é da fala: reconheça.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> o passivo sem pessoa diz o que se faz em geral, como o “se” ou o “a gente” de sentido geral: <span class="fi">Suomessa saunotaan</span> (na Finlândia todo mundo faz sauna). E o passivo não muda com a pessoa: não existe <span class="pala">saunotaanme</span>.</p>
  </div>
  <p>O quadro do curso inteiro, com todas as formas do verbo, está na revisão final (R4).</p>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: tudo junto</h2>
  <p>Segunda-feira de manhã chove em Korppoo, e todos ficam dentro do chalé, perto da lareira. A Maia faz um último treino com o Jay, e com você.</p>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Você entendeu o diálogo B e o álbum?</h3>
    <p class="ohje">Responda em finlandês. Volte ao diálogo e ao álbum se precisar.</p>
    <div class="valinta" data-oikea="Anderson.">
      <p class="kysymys"><span class="fi">Kuka saunoo ensimmäistä kertaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Walker.</button><button type="button">Anderson.</button><button type="button">Hiisi.</button></div>
    </div>
    <div class="valinta" data-oikea="Kuuma!">
      <p class="kysymys"><span class="fi">Mitä Anderson sanoo saunassa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kuuma!</button><button type="button">Kylmä!</button><button type="button">Moi!</button></div>
    </div>
    <div class="valinta" data-oikea="Se on liian kylmä.">
      <p class="kysymys"><span class="fi">Mitä Jay ajattelee merestä?</span></p>
      <div class="vaihtoehdot"><button type="button">Se on kaunis.</button><button type="button">Se on liian kylmä.</button><button type="button">Se on liian lämmin.</button></div>
    </div>
    <div class="valinta" data-oikea="Hän maalaisi merta joka päivä.">
      <p class="kysymys"><span class="fi">Mitä Maia tekisi, jos hänellä olisi mökki?</span></p>
      <div class="vaihtoehdot"><button type="button">Hän maalaisi merta joka päivä.</button><button type="button">Hän nukkuisi koko kesän.</button><button type="button">Hän kalastaisi joka päivä.</button></div>
    </div>
    <div class="valinta" data-oikea="Bussilla.">
      <p class="kysymys"><span class="fi">Miten Maia menee Hankoon, jos Hiisi ajaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Autolla.</button><button type="button">Veneellä.</button><button type="button">Bussilla.</button></div>
    </div>
    <div class="valinta" data-oikea="Suomea ja ruotsia.">
      <p class="kysymys"><span class="fi">Mitä Hangossa puhutaan?</span></p>
      <div class="vaihtoehdot"><button type="button">Suomea ja ruotsia.</button><button type="button">Suomea ja portugalia.</button><button type="button">Ruotsia ja englantia.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Responda às perguntas</h3>
    <p class="ohje">Responda sobre você, em voz alta, antes de abrir o modelo. Use o passivo para o que se faz em geral e o condicional para o que você imagina. Deixe a voz descer no fim das perguntas.</p>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä tekisit, jos sinulla olisi mökki?</summary><p class="s" data-pt="Bem, eu faria sauna e nadaria todo dia, e um amigo talvez viesse junto. Isso sim seria vida!">No, saunoisin ja uisin joka päivä ja kaveri saattaisi tulla mukaan. Se olisi hyvää elämää!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Miten Brasiliassa juhlitaan kesäkuussa?</summary><p class="s" data-pt="Em junho, no Brasil, se dança e se canta, e nas festas se acende uma fogueira, como na Finlândia.">Kesäkuussa Brasiliassa tanssitaan ja lauletaan ja juhlissa poltetaan kokko, kuten Suomessa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Oletko ikinä uinut meressä?</summary><p class="s" data-pt="Já, no verão passado. Naquela vez a água estava fria, então eu nadei só um momento. Mas que sensação!">Olen, viime kesänä. Silloin vesi oli kylmää, joten uin vain hetken. Mutta mikä tunne!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä teet saunan jälkeen?</summary><p class="s" data-pt="Depois da sauna eu nado no mar ou no lago, às vezes também no inverno. É uma coisa maravilhosa. Você consegue?">Saunan jälkeen uin meressä tai järvessä, joskus myös talvella. Se on ihana juttu. Pystytkö sinä siihen?</p></details>
    <details class="vastaus"><summary lang="fi-FI">Huomenna taitaa sataa. Mitä teette silloin?</summary><p class="s" data-pt="Se começar a chover, a gente não nada, faz sauna. Acho que vou para a sauna logo de manhã: a chuva é um bom motivo!">Jos alkaa sataa, emme ui, vaan saunomme. Taidan mennä saunaan heti aamulla: sade on hyvä syy!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Hiisi joutui taas ongelmiin. Mieti: mitä tekisit, jos olisit Hiisi?</summary><p class="s" data-pt="Eu dirigiria devagar e pediria desculpas. Seria uma coisa difícil. Será que eu conseguiria? Talvez.">Ajaisin hitaasti ja pyytäisin anteeksi. Se olisi vaikea juttu. Pystyisinkö siihen? Ehkä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Sauna taitaa olla jo lämmin. Mennäänkö saunaan?</summary><p class="s" data-pt="Boa ideia! Vamos já. Pronto, agora para a sauna.">Kuulostaa hyvältä! Mennään heti. No niin, nyt saunaan.</p></details>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Mökki, juhannus, sauna e Hanko</h3>
  <figure class="kuva" data-kuva="korppoo" lang="pt-BR"></figure>
  <p><b>O chalé.</b> A Finlândia tem cerca de meio milhão de casas de campo, o <span class="fi">mökki</span> ou <span class="fi">kesämökki</span>, à beira de um lago ou do mar. Muitas são simples: sem água encanada, com banheiro do lado de fora, mas quase sempre com sauna e, muitas vezes, com píer e barco. No verão, a família passa semanas lá, longe da cidade.</p>
  <p><b>O juhannus.</b> É a festa do meio do verão, no sábado entre 20 e 26 de junho; a véspera, a sexta-feira, é o <span class="fi">juhannusaatto</span>. As cidades esvaziam, todo mundo vai para o chalé, e na beira da água se acendem fogueiras, as <span class="fi">kokko</span>. A bandeira finlandesa fica no mastro a noite inteira, e quase não escurece: no norte o sol nem se põe. Uma tradição antiga: quem dorme com sete flores embaixo do travesseiro sonha com o futuro amor. No Brasil, a festa junina também tem fogueira.</p>
  <p><b>A sauna.</b> São cerca de três milhões de saunas para cinco milhões e meio de pessoas, e a cultura da sauna finlandesa está desde 2020 na lista de patrimônio cultural imaterial da UNESCO. Na sauna se fala baixo, ou nada. Joga-se água nas pedras quentes e sobe o <span class="fi">löyly</span>, o vapor. No verão bate-se de leve na pele com a <span class="fi">vihta</span>, um feixe de galhos frescos de bétula. Depois, um mergulho no lago ou no mar, e de volta ao calor.</p>
  <figure class="kuva" data-kuva="hanko"></figure>
  <p><b>Hanko e Korppoo.</b> Hanko (Hangö) virou estação balneária no fim do século XIX e ainda tem as casas de madeira daquela época. Korppoo (Korpo) fica no arquipélago do sudoeste, entre milhares de ilhas ligadas por pontes e balsas. Nas duas se fala muito sueco, a segunda língua oficial da Finlândia, língua materna de uns cinco por cento dos finlandeses.</p>
  <ul class="esim">
    <li class="s" data-pt="Na Finlândia há cerca de três milhões de saunas.">Suomessa on noin kolme miljoonaa saunaa.</li>
    <li class="s" data-pt="O juhannus se passa no chalé.">Juhannusta vietetään mökillä.</li>
    <li class="s" data-pt="No chalé a vida é tranquila.">Mökillä elämä on hiljaista.</li>
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
  </table>
  <p>Sábado à noite, o Hiisi dá um conselho ao Jay, em finlandês padrão, como sempre. O Jay e a Purjo respondem do jeito da rua:</p>
  <p class="s" data-h="hiisi" data-pt="Se eu fosse você, eu iria para a sauna.">Jos minä olisin sinä, menisin saunaan.</p>
  <p class="s" data-h="jay" data-kirja="Selvä. Mennään saunaan! Me saunomme, mutta minä en ui." data-pt="Beleza. Vamos para a sauna! A gente faz sauna, mas eu não nado.">Okei. Mennään saunaan! Me saunotaan, mut mä en ui.</p>
  <p class="s" data-h="purjo" data-kirja="Aivan sama. Minä istun laiturilla." data-pt="Tanto faz. Eu fico no píer.">Ihan sama. Mä istun laiturilla.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t20">
    <h3>Lição de casa</h3>
    <p>Escreva para a Purjo sobre uma festa do seu país, como a Maia faria: sete frases. Uma que apresenta a festa, três no passivo, dizendo o que se faz (<span class="fi">tanssitaan, lauletaan, grillataan…</span>), duas com <span class="fi">jos</span> + condicional (<span class="fi">Jos sinä olisit täällä…</span>) e um convite com <span class="fi">Mennään…!</span> Termine com <span class="fi">Terveisin</span> e o seu nome. Leia em voz alta, com a voz descendo no fim.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia, sobre a festa junina)</summary>
      <p class="s" data-pt="Oi, Purjo! Como vai? Eu ainda penso no juhannus e em Korppoo.">Hei Purjo! Mitä kuuluu? Ajattelen yhä juhannusta ja Korppoota.</p>
      <p class="s" data-pt="Em junho, no Brasil, tem festa. As festas são um pouco como o juhannus.">Kesäkuussa Brasiliassa on juhlat. Ne ovat vähän kuin juhannus.</p>
      <p class="s" data-pt="Nas festas se dança e se canta.">Juhlissa tanssitaan ja lauletaan.</p>
      <p class="s" data-pt="Lá se acende uma fogueira, como na Finlândia.">Siellä poltetaan kokko, niin kuin Suomessa.</p>
      <p class="s" data-pt="Na rua se assa linguiça.">Kadulla grillataan makkaraa.</p>
      <p class="s" data-pt="Se você estivesse em Belo Horizonte, dançaria a noite inteira. Você conseguiria?">Jos sinä olisit Belo Horizontessa, tanssisit koko yön. Pystyisitkö siihen?</p>
      <p class="s" data-pt="Se eu tivesse tempo, iria lá todo ano. Seria uma coisa maravilhosa.">Jos minulla olisi aikaa, menisin sinne joka vuosi. Se olisi ihana juttu.</p>
      <p class="s" data-pt="Vamos juntas! Que tal?">Mennään yhdessä! Kuulostaako hyvältä?</p>
      <p class="s" data-pt="Saudações, Maia">Terveisin Maia</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t20">
    <li>Digo o que se faz com o passivo: Suomessa saunotaan, saunan jälkeen uidaan, tänään ei nukuta.</li>
    <li>Formo o passivo: saunoa → saunotaan, heittää → heitetään, uida → uidaan.</li>
    <li>Reconheço na fala: me mennään = me menemme; jos mä oisin = jos minä olisin.</li>
    <li>Reconheço o “se” imaginado: Jos minulla olisi mökki, maalaisin merta.</li>
    <li>Separo o imaginado do possível: jos minulla olisi × jos Hiisi ajaa.</li>
    <li>Interpreto frases simples: Marta sanoo… · Walker kysyy… · Meri on kylmä, joten en ui.</li>
    <li>Faço perguntas com a voz descendo no fim: Onko talossa sauna?</li>
  </ul>

  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Pronto. Vinte e uma lições, do primeiro “Moi!” em Sörnäinen até a sauna em Korppoo. Eu lembro de cada palavra. Do que elas querem dizer, quase sempre. Agora vem a revisão final, e lá na ilha apareceu uma coisa estranha… Mas isso fica para a R4. Hoje, <span class="fi">mennään saunaan!</span></p>
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
<p><b>Negação:</b> <span class="fi">ei</span> + o passivo sem <span class="fi pala">-an/-än</span>: <span class="fi">ei saunota</span>, <span class="fi">ei nukuta</span>. <b>Objeto inteiro</b> na forma básica: <span class="fi">Juhannuksena poltetaan kokko.</span></p>`
    },
    {
      id: 'me-passiivi20', otsikko: 'Na rua: me mennään = nós vamos', taso: 'reconhecer', hakuosa: 'h-passiivi', treeni: 't20-kuuntele',
      html: `
<p>Na fala, “nós” é muitas vezes o pronome <span class="fi">me</span> + passivo. Reconheça; na língua padrão, <span class="fi pala">-mme</span>. Sem <span class="fi">me</span>, o passivo é comum para planos e convites: <span class="fi">Mennään!</span></p>
<table class="taivutus">
  <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
  <tr><td><span class="fi">me menemme</span></td><td><span class="fi" data-rekisteri="puhe">me mennään</span></td><td>nós vamos</td></tr>
  <tr><td><span class="fi">me olemme</span></td><td><span class="fi" data-rekisteri="puhe">me ollaan</span></td><td>nós somos, estamos</td></tr>
</table>`
    },
    {
      id: 'konditionaali20', otsikko: 'Para reconhecer: o condicional em todas as pessoas', taso: 'reconhecer', hakuosa: 'h-konditionaali', treeni: 't20-konditionaali',
      html: `
<p><b>Forma:</b> radical forte do “ele” + <span class="fi pala">-isi-</span> + terminação (<span class="fi">asuu → asuisin</span>); como no passado, o <span class="fi pala">-e</span> cai (<span class="fi">tulee → tulisin</span>), a vogal longa encurta (<span class="fi">osaa → osaisi</span>), o ditongo perde a primeira vogal (<span class="fi">juo → joisi</span>). <b>Uso:</b> o “…ria”; com <span class="fi">jos</span>, “se eu tivesse”.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">minä maalaisin</span></td><td>eu pintaria</td></tr>
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
  <tr><td><span class="fi">Jos minulla olisi mökki, maalaisin merta.</span></td><td>Se eu tivesse um chalé, pintaria o mar.</td></tr>
  <tr><td><span class="fi">Jos Hiisi ajaa, menen bussilla.</span></td><td>Se o Hiisi dirigir, vou de ônibus.</td></tr>
  <tr><td><span class="fi">Jos sinulla on aikaa, mennään Hankoon!</span></td><td>Se você tiver tempo, vamos a Hanko!</td></tr>
</table>`
    },
    {
      id: 'aantaminen20', otsikko: 'Pronúncia: a pergunta também desce (lembrete da lição 10)', taso: 'essencial', hakuosa: 'h-paino',
      html: `
<p>Lembrete da lição 10: a pergunta desce no fim, como a afirmação; o <span class="fi pala">-ko/-kö</span> ou a palavra interrogativa já marca a pergunta.</p>
<ul class="esim">
  <li class="s" data-pt="Tem sauna no prédio?">Onko talossa sauna?</li>
  <li class="s" data-pt="Vamos para a sauna?">Mennäänkö saunaan?</li>
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
  <tr><td><span class="fi">Meri on kylmä, joten en ui.</span></td><td>então</td></tr>
  <tr><td><span class="fi">Jos Hiisi ajaa, menen bussilla.</span></td><td>se</td></tr>
  <tr><td><span class="fi">Uin meressä tai järvessä.</span></td><td>ou</td></tr>
</table>`
    },
    {
      id: 'sudenkuopat20', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>“Se eu tivesse” não é passado:</b> <span class="fi">jos minulla olisi</span>, não <span class="fi">jos minulla oli</span>.</li>
  <li><b>Em geral, o mesmo modo nas duas partes:</b> <span class="fi">Jos olisi lämmin, uisimme.</span> (imaginado); o possível, no presente.</li>
  <li><b>Passivo sem pessoa:</b> <span class="fi">Suomessa saunotaan</span> (se faz, todo mundo); para planos, <span class="fi">Mennään!</span> (vamos!); o “nós” padrão é <span class="fi">me saunomme</span>.</li>
  <li><b>Objeto inteiro no passivo sem -n:</b> <span class="fi">poltetaan kokko</span>, não <span class="pala">poltetaan kokon</span> (os pronomes pessoais mantêm o <span class="fi pala">-t</span>: <span class="fi">minut, sinut, hänet</span>).</li>
</ul>`
    }
  ]
});
