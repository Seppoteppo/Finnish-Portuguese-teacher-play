/* Tottakai, lição 11: Mercado Central ja Mairan ravintola (Passon jakso 11 Maian näkökulmasta). Oma materiaali, ei kirjan
   tekstiä. Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5b ”Oppitunti 11”. Ensimmäinen oppitunti Brasiliassa (K2:n jälkeen).
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17; A/B-sääntö 24.10.2026, katselmointi LESSON_MAP_v2):
   - osa A (#t11, Encontro): aamu Mercado Centralissa Mairan kanssa; Maia ja Jay vertailevat kuiskaten suomeksi; dialogi A (20),
     Frases prontas, sanasto, ääntäminen (ei nasalisaatiota n:n ja m:n edellä), tehtävä 1 (dialogi A); kielioppi 1:
     vertailu (-mpi, kuin, yhtä … kuin, kumpi), kikka: Mairan vaaka suomeksi (`.vaaka[data-vert]`, Tottakain
     komponentit.js vaakaVertailu: vertailumuoto leksikon vert-kentästä, Maian ääni), tehtävät 2–3 (tunnistus);
     kielioppi 2: superlatiivi (halvin, kallein, paras, kaikkein, maailman paras) → tehtävä 4 (hintakyltti) ja
     tehtävä 5 (vertailu- ja superlatiivimuoto kirjoittaen; osa A päättyy tuottamiseen).
   - osa B (#t11-b, Aprofundar e fechar): lounas Mairan ravintolassa; dialogi B (19) salakielen sisällä (`.salakieli`:
     kuiskaukset haaleina kuplina, Mairan korvalla ”psst… psst…”); väärinkäsitys: Jay kehuu ruokaa ja itkee chilistä,
     Maira luulee hänen valittavan. Kielioppi 3: monikon partitiivi (tuotetaan kaksi tavallisinta muotoa -ja/-jä ja
     -ia/-iä, muut vain tunnistetaan; predikatiivi Banaanit ovat halpoja) ja sen sisällä dialogin B Frases prontas →
     tehtävät 6–9 (kuuntelu, kirjoitettu monikon partitiivi,
     dialogin B ymmärtäminen, puhuminen), kulttuuri (Mercado Central), Na rua (ku, tosi,
     tää, toi), kotitehtävä, itsearvio.
   Uudistus 24.10.2026 (katselmointi, R2 ja R8): monikon partitiivin muodostus kahteen malliin, vanha valintatehtävä 7 pois
   (tilalle kirjoitettu aukkotehtävä); ymmärtämistehtävä 8 palautettu (S5 F1, pippuri → chili), puhetehtävän
   kohdat minne ja ”onko suomi vaikea kieli” pois; pippuri → chili (omistaja, kysymys 11).
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat mielestäni (mieli), itse, ehkä, kukaan, löytää, toinen, totta,
   uskoa + pois, ainoa, tapa, lisää, mahtava, suuri, enemmän, koska; dialogit 20 + 19; sivun sanalistat 20 → 12.
   Brasilian jaksot (OPPITUNNIT §2 ja §5b): suomea puhuvat vain Maia ja Jay (kuiskaukset) ja kertoja; Maira puhuu
   portugalia (kertojan tekstissä tai .sk-pt lang="pt-BR": ei kuplaa, ei ääntä). Lunastaa lupauksen ”kuvia, partitivo
   plural: lição 11” (t05). Kaikki puhuvat kirjakieltä; puhekieli vain Na rua -nurkassa. */
Kurssi.lisaa({
  id: 't11',
  lyhyt: '11',
  jakso: 'Lição 11',
  otsikko: 'Mercado Central: comparar (mais barato, o melhor) e o partitivo plural',
  lahde: 'Tema: Mercado Central, preços, almoço mineiro · Gramática: comparativo -mpi e kuin (halvempi, kalliimpi, parempi), yhtä … kuin, kumpi?, superlativo (halvin, kallein, paras), partitivo plural (banaaneja, kuvia, omenoita) · Pronúncia: sem nasal antes de n e m (kana, Suomi, banaani)',
  aiheet: ['ruoka', 'raha', 'ominaisuus', 'kaupunki'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; em casa, em Belo Horizonte, e com uma língua secreta' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; primeira vez no Brasil, acordou às cinco da manhã' },
    moara: { nimi: 'Maira', tyyppi: 'nainen', vaihto: 5, kuvaus: 'amiga de infância da Maia; tem um restaurante perto do Mercado Central; fala só português' }
  },

  sanasto: [
    'real', 'makkara', 'banaani', 'ananas', 'mango', 'hedelmä', 'tomaatti',
    'papu', 'chili', 'halpa', 'kallis', 'suuri', 'parempi', 'paras', 'kuin', 'yhtä', 'kumpi', 'kaikkein', 'enemmän',
    'maailma', 'tulinen', 'mahtava', 'ainoa', 'tapa', 'totta', 'mielestäni',
    'kuiskata', 'valittaa', 'itkeä', 'enää'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Encontro',
      html: `
<ul class="tavoitteet">
  <li>Você compara preços e coisas: <span class="fi">Tämä on halvempi kuin tuo.</span> <span class="fi">Kumpi on parempi?</span></li>
  <li>Você diz “tão … quanto” com <span class="fi">yhtä … kuin</span> e usa a balança da Maira em finlandês.</li>
  <li>Você diz o melhor e o mais barato: <span class="fi">paras, halvin, kallein</span>, <span class="fi">maailman paras</span>.</li>
  <li>Você diz <span class="fi">kana, Suomi, banaani</span> sem nasalizar as vogais.</li>
  <li>Parte B: o partitivo plural (<span class="fi">banaaneja, kuvia</span>) e o almoço na língua secreta.</li>
</ul>
<p data-paikka="mercado-central-entrada">Segunda-feira, 21 de dezembro: faltam poucos dias para o Natal. Belo Horizonte, 22 graus às oito da manhã (à tarde vai chegar a 28). O Jay acordou às cinco: na Finlândia já eram dez, e o corpo dele ainda não sabe que mudou de hemisfério. A Maira, amiga de infância da Maia, tem um restaurante pequeno atrás do Mercado Central e faz as compras lá todo dia. Hoje ela leva a Maia e o Jay junto. A Maira fala português, e rápido. A Maia e o Jay comentam tudo em finlandês, baixinho: no Brasil, o finlandês vira uma língua secreta.</p>

<section class="osio">
  <h2>Diálogo A: Kumpi juusto on parempi?</h2>
  <p class="ohje">Ouça primeiro sem tradução. Preste atenção em <span class="fi">kumpi</span> (qual dos dois), nas palavras com <span class="fi pala">-mpi</span> (<span class="fi">parempi, kalliimpi, halvempi</span>) e em <span class="fi">kuin</span> (do que). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t11-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="É segunda-feira de manhã, e são oito horas. A Maia e o Jay estão no Mercado Central, o mercado coberto de Belo Horizonte.">On maanantaiaamu ja kello on kahdeksan. Maia ja Jay ovat Mercado Centralissa, Belo Horizonten kauppahallissa.</p>
    <p class="s" data-h="kertoja" data-pt="A Maira também está aqui. A Maia conhece a Maira da escola. A Maira tem um restaurante pequeno e compra ingredientes aqui todo dia.">Maira on myös täällä. Maia tuntee Mairan koulusta. Mairalla on pieni ravintola ja hän ostaa raaka-aineita täältä joka päivä.</p>
    <p class="s" data-h="kertoja" data-pt="Hoje o Jay conhece a Maira. A Maira só fala português, e fala rápido. A Maia e o Jay falam finlandês e cochicham.">Jay tapaa Mairan tänään. Maira puhuu vain portugalia ja hän puhuu nopeasti. Maia ja Jay puhuvat suomea ja he kuiskaavat.</p>
    <p class="s" data-h="kertoja" data-pt="A Maira compra queijo. O vendedor tem dois queijos, um pequeno e um grande.">Maira ostaa juustoa. Myyjällä on kaksi juustoa, pieni ja suuri.</p>
    <p class="s" data-h="jay" data-pt="O queijo pequeno custa quarenta reais, e o grande custa trinta. O grande é mais barato que o pequeno!">Pieni juusto maksaa neljäkymmentä realia ja suuri maksaa kolmekymmentä. Suuri on halvempi kuin pieni!</p>
    <p class="s" data-h="maia" data-pt="É, mas qual é melhor?">Niin, mutta kumpi on parempi?</p>
    <p class="s" data-h="jay" data-pt="Na minha opinião, o mais barato é sempre melhor.">Mielestäni halvempi on aina parempi.</p>
    <p class="s" data-h="maia" data-pt="Não, Jay. O pequeno é mais caro porque é melhor.">Ei, Jay. Pieni on kalliimpi, koska se on parempi.</p>
    <p class="s" data-h="moara" data-pt="Por que vocês estão cochichando?"><span lang="pt-BR">Por que vocês estão cochichando?</span></p>
    <p class="s" data-h="jay" data-pt="Por que a gente está cochichando? Ninguém aqui entende finlandês.">Miksi me kuiskaamme? Kukaan täällä ei ymmärrä suomea.</p>
    <p class="s" data-h="maia" data-pt="É verdade! No Brasil, o finlandês é a nossa língua secreta.">Se on totta! Brasiliassa suomi on meille salakieli.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia diz para a Maira: &quot;É a nossa língua secreta!&quot; A Maira ri.">Maia sanoo Mairalle: <span lang="pt-BR">É a nossa língua secreta!</span> Maira nauraa.</p>
    <p class="s" data-h="maia" data-pt="Jay, pega esta manga.">Jay, ota tämä mango.</p>
    <p class="s" data-h="jay" data-pt="Na Finlândia a manga é pequena e cara. Esta é muito maior.">Suomessa mango on pieni ja kallis. Tämä on paljon suurempi.</p>
    <p class="s" data-h="maia" data-pt="Ela também é melhor. Esta é a melhor manga do mundo!">Se on myös parempi. Tämä on maailman paras mango!</p>
    <p class="s" data-h="jay" data-pt="A melhor do mundo? Você diz isso de toda fruta.">Maailman paras? Sinä sanot niin joka hedelmästä.</p>
    <p class="s" data-h="kertoja" data-pt="O vendedor dá abacaxi para o Jay. O Jay come.">Myyjä antaa Jaylle ananasta. Jay syö sitä.</p>
    <p class="s" data-h="jay" data-pt="Na Finlândia o abacaxi é caro e ruim. Este é muito melhor que o abacaxi da Finlândia. Este é o melhor abacaxi do mundo!">Suomessa ananas on kallis ja huono. Tämä on paljon parempi kuin Suomen ananas. Tämä on maailman paras ananas!</p>
    <p class="s" data-h="maia" data-pt="O melhor do mundo? Você diz isso de toda fruta!">Maailman paras? Sinä sanot niin joka hedelmästä!</p>
    <p class="s" data-h="jay" data-pt="Eu queria bananas.">Haluaisin banaaneja.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay esquece que o vendedor não fala finlandês. A Maia ri e diz ao vendedor: &quot;Ele quer bananas.&quot;">Jay unohtaa, että myyjä ei puhu suomea. Maia nauraa ja sanoo myyjälle: <span lang="pt-BR">Ele quer bananas.</span></p>
    <p class="s" data-h="maia" data-hairio="bãnãnia → banaania" data-pt="Quantas &quot;bãnãnas&quot; você quer? (errado: banaania, sem som nasal)">Kuinka monta <span class="pala">bãnãnia</span> sinä haluat?</p>
    <p class="s" data-h="jay" data-pt="Diga &quot;banaani&quot;, não &quot;bãnãni&quot;. Eu quero seis.">Sano ”banaani”, ei ”<span class="pala">bãnãni</span>”. Minä haluan kuusi.</p>
    <p class="s" data-h="kertoja" data-pt="A Maira ainda compra para o restaurante o melhor queijo do mercado.">Maira ostaa ravintolaan vielä kauppahallin parasta juustoa.</p>
    <p class="s" data-h="kertoja" data-pt="São onze horas. O Jay tem uma sacola, e nela há um abacaxi e seis bananas.">Kello on yksitoista. Jayllä on kassi ja siinä on ananas ja kuusi banaania.</p>
  </div>
  <p>A Maira não entende os cochichos, mas entende a cara do Jay diante das frutas. Ela compra o queijo mais caro para o restaurante (<span lang="pt-BR">“o bom é o bom, Maia”</span>), e o Jay sai do mercado com um abacaxi e seis bananas.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Kumpi on parempi?</span> = qual dos dois é melhor? · <span class="fi">kumpi</span> = qual dos dois</li>
      <li><span class="fi">neljäkymmentä realia</span> = quarenta reais · partitivo depois de número (lição 3)</li>
      <li><span class="fi">Suuri on halvempi kuin pieni!</span> = o grande é mais barato que o pequeno! · <span class="fi pala">-mpi</span> + <span class="fi">kuin</span>: Gramática 1</li>
      <li><span class="fi">Mielestäni halvempi on aina parempi.</span> = na minha opinião, o mais barato é sempre melhor · <span class="fi">mielestäni</span> = na minha opinião</li>
      <li><span class="fi">Brasiliassa suomi on meille salakieli.</span> = no Brasil, o finlandês é a nossa língua secreta · <span class="fi">meille</span> = para nós</li>
      <li><span class="fi">Tämä on maailman paras mango!</span> = esta é a melhor manga do mundo! · <span class="fi">paras</span>, o superlativo: Gramática 2</li>
      <li><span class="fi">Sinä sanot niin joka hedelmästä.</span> = você diz isso de toda fruta · <span class="fi">sanoa jostakin</span> = dizer de alguma coisa (elativo)</li>
      <li><span class="fi">Haluaisin banaaneja.</span> = eu queria bananas · frase pronta (lição 4); o partitivo plural: parte B</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="mercado-central">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="No mercado e comparar" data-sanat="juusto,makkara,banaani,ananas,mango,hedelmä,hinta,halpa,kallis,parempi,kuin,kumpi"></div>
  <p>As outras palavras da lição estão no <a href="#t11-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio">
  <h2>Pronúncia: sem nasal antes de n e m</h2>
  <p>No português do Brasil, a vogal antes de <span class="fi pala">m</span> ou <span class="fi pala">n</span> fica nasal: banana soa quase “bãnãna”, cama soa “cãma”. Em finlandês, não: a vogal continua <b>oral</b>, e o <span class="fi pala">n</span> e o <span class="fi pala">m</span> são consoantes comuns. Quando a Maia diz <span class="fi">banaani</span> depressa, às vezes sai <span class="pala">bãnãni</span>, e o Jay ri: parece que ela está gripada. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="galinha, frango">kana</li>
    <li class="s" data-pt="Finlândia">Suomi</li>
    <li class="s" data-pt="banana">banaani</li>
    <li class="s" data-pt="abacaxi">ananas</li>
    <li class="s" data-pt="qual (de dois)?">kumpi</li>
    <li class="s" data-pt="mundo">maailma</li>
  </ul>
  <p><b>Truque:</b> diga o <span class="fi pala">a</span> de <span class="fi">kana</span> com o nariz tampado; se o som muda, a vogal estava nasal. E o acento fica na primeira sílaba: <span class="fi pala">BA-naa-ni</span>, com <span class="fi pala">aa</span> longo.</p>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercício: o diálogo A</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Você entendeu o diálogo A?</h3>
    <div class="valinta" data-oikea="Kalliimpi.">
      <p class="kysymys"><span class="fi">Kumpi juusto on parempi, halvempi vai kalliimpi?</span></p>
      <div class="vaihtoehdot"><button type="button">Halvempi.</button><button type="button">Kalliimpi.</button></div>
    </div>
    <div class="valinta" data-oikea="Kolmekymmentä realia.">
      <p class="kysymys"><span class="fi">Paljonko halvempi juusto maksaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kuusikymmentä realia.</button><button type="button">Kolmekymmentä realia.</button><button type="button">Kolmetoista realia.</button></div>
    </div>
    <div class="valinta" data-oikea="Miksi te kuiskaatte?">
      <p class="kysymys"><span class="fi">Mitä Maira kysyy portugaliksi?</span></p>
      <div class="vaihtoehdot"><button type="button">Paljonko se maksaa?</button><button type="button">Kumpi on parempi?</button><button type="button">Miksi te kuiskaatte?</button></div>
    </div>
    <div class="valinta" data-oikea="Suomessa.">
      <p class="kysymys"><span class="fi">Missä mango on pieni ja kallis?</span></p>
      <div class="vaihtoehdot"><button type="button">Suomessa.</button><button type="button">Brasiliassa.</button><button type="button">Lissabonissa.</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 1 · Comparar: halvempi kuin…</h2>
  <p>“Mais barato” em finlandês é uma palavra só: <span class="fi">halpa → halvempi</span>. A receita usa o genitivo que você já conhece (lição 5): tire o <span class="fi pala">-n</span> e ponha <span class="fi pala">-mpi</span>.</p>
  <table class="taivutus">
    <tr><th>forma básica</th><th>genitivo</th><th>comparativo</th><th>português</th></tr>
    <tr><td><span class="fi">iso</span></td><td><span class="fi">ison</span></td><td><span class="fi">isompi</span></td><td>grande, maior</td></tr>
    <tr><td><span class="fi">pieni</span></td><td><span class="fi">pienen</span></td><td><span class="fi">pienempi</span></td><td>pequeno, menor</td></tr>
    <tr><td><span class="fi">kallis</span></td><td><span class="fi">kalliin</span></td><td><span class="fi">kalliimpi</span></td><td>caro, mais caro</td></tr>
    <tr><td><span class="fi">halpa</span></td><td><span class="fi">halvan</span></td><td><span class="fi">halvempi</span></td><td>barato, mais barato</td></tr>
    <tr><td><span class="fi">hyvä</span></td><td><span class="fi">hyvän</span></td><td><span class="fi">parempi</span></td><td>bom, melhor</td></tr>
    <tr><td><span class="fi">suuri</span></td><td><span class="fi">suuren</span></td><td><span class="fi">suurempi</span></td><td>grande, maior (mais formal que <span class="fi">iso</span>)</td></tr>
  </table>
  <p>Palavras de duas sílabas que terminam em <span class="fi pala">-a/-ä</span> trocam esse <span class="fi pala">a/ä</span> por <span class="fi pala">e</span>: <span class="fi">halvan → halvempi</span>, <span class="fi">vanhan → vanhempi</span>. E <span class="fi">hyvä</span> é irregular, como “bom” e “melhor” em português: <span class="fi">parempi</span>.</p>
  <ul class="esim">
    <li class="s" data-pt="O queijo é mais caro que o café.">Juusto on kalliimpi kuin kahvi.</li>
    <li class="s" data-pt="A linguiça é tão cara quanto o café.">Makkara on yhtä kallis kuin kahvi.</li>
    <li class="s" data-pt="Qual é melhor, este ou aquele?">Kumpi on parempi, tämä vai tuo?</li>
  </ul>
  <p><span class="fi">kuin</span> = do que · <span class="fi">yhtä … kuin</span> = tão … quanto · <span class="fi">kumpi?</span> = qual (de dois)? As duas coisas comparadas ficam na mesma forma: <span class="fi">Juusto on kalliimpi kuin kahvi.</span> “Mais” em quantidade é <span class="fi">enemmän</span> (de <span class="fi">paljon</span>): <span class="fi">Täällä on enemmän ihmisiä kuin Suomessa.</span></p>
</section>

<section class="osio">
  <h2>A balança da Maira</h2>
  <p class="ohje">Na banca de queijos, a Maira pesa tudo numa balança antiga. A Maia transformou a balança num jogo: toque em dois produtos. O prato do mais caro desce, e a Maia cochicha a comparação em finlandês. Experimente também dois produtos com o mesmo preço: o que a Maia diz?</p>
  <div class="vaaka" data-h="maia" data-valuutta="R$" data-vert="kallis|halpa" data-pt-vert="caro,cara|barato,barata"
       data-ohje="Toque em dois produtos: o prato do mais caro desce.">
    <p data-hinta="60" data-pt="o queijo" data-suku="m" data-ikoni="🧀">juusto</p>
    <p data-hinta="30" data-pt="o café" data-suku="m" data-ikoni="☕">kahvi</p>
    <p data-hinta="30" data-pt="a linguiça" data-suku="f" data-ikoni="🌭">makkara</p>
    <p data-hinta="12" data-pt="o abacaxi" data-suku="m" data-ikoni="🍍">ananas</p>
    <p data-hinta="6" data-pt="a banana" data-suku="f" data-ikoni="🍌">banaani</p>
  </div>
  <p>Repare: o primeiro produto que você toca fica à esquerda e é o sujeito da frase. Toque <span class="fi">banaani</span> e depois <span class="fi">juusto</span>: <span class="fi">Banaani on halvempi kuin juusto.</span> Ao contrário: <span class="fi">Juusto on kalliimpi kuin banaani.</span> A balança não mente; só a ordem muda.</p>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: comparar</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>2. Ligue o comparativo à tradução</h3>
    <ul class="yhdista">
      <li data-pari="mais barato">halvempi</li>
      <li data-pari="mais caro">kalliimpi</li>
      <li data-pari="maior">isompi</li>
      <li data-pari="menor">pienempi</li>
      <li data-pari="melhor">parempi</li>
      <li data-pari="mais velho">vanhempi</li>
      <li data-pari="mais novo (coisa), mais recente">uudempi</li>
      <li data-pari="mais bonito">kauniimpi</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Ouça: qual é mais caro, qual é mais barato?</h3>
    <p class="ohje">Aperte ▶ e ouça a comparação. Depois responda à pergunta. Cuidado: às vezes a frase diz “mais caro”, às vezes “mais barato”.</p>
    <div class="valinta" data-kuuntele="Juusto on kalliimpi kuin kahvi." data-oikea="juusto">
      <p class="kysymys">Qual é mais caro?</p>
      <div class="vaihtoehdot"><button type="button">juusto</button><button type="button">kahvi</button></div>
    </div>
    <div class="valinta" data-kuuntele="Banaani on halvempi kuin ananas." data-oikea="ananas">
      <p class="kysymys">Qual é mais caro?</p>
      <div class="vaihtoehdot"><button type="button">banaani</button><button type="button">ananas</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mango on kalliimpi kuin banaani." data-oikea="banaani">
      <p class="kysymys">Qual é mais barato?</p>
      <div class="vaihtoehdot"><button type="button">mango</button><button type="button">banaani</button></div>
    </div>
    <div class="valinta" data-kuuntele="Kahvi on halvempi kuin juusto." data-oikea="kahvi">
      <p class="kysymys">Qual é mais barato?</p>
      <div class="vaihtoehdot"><button type="button">juusto</button><button type="button">kahvi</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 2 · O mais barato: o superlativo <span class="fi pala">-in</span></h2>
  <p>Na Gramática 1, o comparativo: <span class="fi">halvempi</span> (mais barato). O superlativo, “o mais …”, termina em <span class="fi pala">-in</span>: <span class="fi">halvin</span> (o mais barato). A vogal antes do <span class="fi pala">-in</span> às vezes cai ou muda; a bolha de cada palavra mostra a forma.</p>
  <table class="taivutus">
    <tr><th>forma básica</th><th>comparativo</th><th>superlativo</th><th>português</th></tr>
    <tr><td><span class="fi">halpa</span></td><td><span class="fi">halvempi</span></td><td><span class="fi">halvin</span></td><td>barato, mais barato, o mais barato</td></tr>
    <tr><td><span class="fi">kallis</span></td><td><span class="fi">kalliimpi</span></td><td><span class="fi">kallein</span></td><td>caro, mais caro, o mais caro</td></tr>
    <tr><td><span class="fi">iso</span></td><td><span class="fi">isompi</span></td><td><span class="fi">isoin</span></td><td>grande, maior, o maior</td></tr>
    <tr><td><span class="fi">pieni</span></td><td><span class="fi">pienempi</span></td><td><span class="fi">pienin</span></td><td>pequeno, menor, o menor</td></tr>
    <tr><td><span class="fi">hyvä</span></td><td><span class="fi">parempi</span></td><td><span class="fi">paras</span></td><td>bom, melhor, o melhor</td></tr>
  </table>
  <p>“De todos” é <span class="fi">kaikkein</span>: <span class="fi">Banaani on kaikkein halvin.</span> “O melhor do mundo” usa o genitivo (lição 5) antes do superlativo: <span class="fi">maailman paras</span>, <span class="fi">Brasilian paras</span>. Para escolher entre <b>dois</b>, a pergunta é <span class="fi">kumpi?</span>; entre <b>muitos</b>, <span class="fi">mikä?</span>:</p>
  <ul class="esim">
    <li class="s" data-pt="Qual é mais barato, a banana ou o abacaxi? – A banana.">Kumpi on halvempi, banaani vai ananas? – Banaani.</li>
    <li class="s" data-pt="Qual é o mais caro? – O queijo.">Mikä on kallein? – Juusto.</li>
    <li class="s" data-pt="Esta é a melhor comida do mundo.">Tämä on maailman paras ruoka.</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: o mais caro, o mais barato</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>4. A plaquinha de preços da banca</h3>
    <p class="ohje">Leia os preços da banca (<span class="fi">hinnat</span>) e responda.</p>
    <table class="taivutus">
      <tr><th>produto</th><th>preço</th></tr>
      <tr><td><span class="fi">juusto</span><span class="kaannos" lang="pt-BR">queijo, o quilo</span></td><td>R$ 60</td></tr>
      <tr><td><span class="fi">kahvi</span><span class="kaannos" lang="pt-BR">café, o pacote</span></td><td>R$ 30</td></tr>
      <tr><td><span class="fi">makkara</span><span class="kaannos" lang="pt-BR">linguiça, o quilo</span></td><td>R$ 30</td></tr>
      <tr><td><span class="fi">ananas</span><span class="kaannos" lang="pt-BR">abacaxi</span></td><td>R$ 12</td></tr>
      <tr><td><span class="fi">banaani</span><span class="kaannos" lang="pt-BR">banana, o quilo</span></td><td>R$ 6</td></tr>
    </table>
    <div class="valinta" data-oikea="juusto">
      <p class="kysymys"><span class="fi">Mikä on kallein?</span></p>
      <div class="vaihtoehdot"><button type="button">kahvi</button><button type="button">juusto</button><button type="button">ananas</button></div>
    </div>
    <div class="valinta" data-oikea="banaani">
      <p class="kysymys"><span class="fi">Mikä on halvin?</span></p>
      <div class="vaihtoehdot"><button type="button">banaani</button><button type="button">ananas</button><button type="button">makkara</button></div>
    </div>
    <div class="valinta" data-oikea="ananas">
      <p class="kysymys"><span class="fi">Kumpi on kalliimpi, ananas vai banaani?</span></p>
      <div class="vaihtoehdot"><button type="button">ananas</button><button type="button">banaani</button></div>
    </div>
    <div class="valinta" data-oikea="yhtä">
      <p class="kysymys"><span class="fi">Makkara on ___ kallis kuin kahvi.</span></p>
      <div class="vaihtoehdot"><button type="button">kaikkein</button><button type="button">yhtä</button><button type="button">paljon</button></div>
    </div>
    <div class="valinta" data-oikea="kalliimpi">
      <p class="kysymys"><span class="fi">Juusto on ___ kuin kahvi.</span></p>
      <div class="vaihtoehdot"><button type="button">kalliimpi</button><button type="button">kallein</button><button type="button">halvempi</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Complete com o comparativo e o superlativo</h3>
    <p class="ohje">Escreva o comparativo (<span class="fi pala">-mpi</span>) da palavra entre parênteses. Nas quatro últimas frases, depois de <span class="fi">kaikkein</span> e <span class="fi">maailman</span>, escreva o superlativo (<span class="fi pala">-in</span>). Lembre: <span class="fi">hyvä → parempi → paras</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Tuo juusto on <span class="aukko" data-oikea="halvempi"></span> kuin tämä. <span data-ei-kuplaa>(halpa)</span></p>
      <p>Juusto on <span class="aukko" data-oikea="kalliimpi"></span> kuin kahvi. <span data-ei-kuplaa>(kallis)</span></p>
      <p>Ananas on <span class="aukko" data-oikea="isompi"></span> kuin banaani. <span data-ei-kuplaa>(iso)</span></p>
      <p>Brasilian banaani on <span class="aukko" data-oikea="parempi"></span> kuin Suomen banaani. <span data-ei-kuplaa>(hyvä)</span></p>
      <p>Tomaatti on <span class="aukko" data-oikea="pienempi"></span> kuin ananas. <span data-ei-kuplaa>(pieni)</span></p>
      <p>Purjo on <span class="aukko" data-oikea="vanhempi"></span> kuin Jay. <span data-ei-kuplaa>(vanha)</span></p>
      <p>Maian puhelin on <span class="aukko" data-oikea="uudempi"></span> kuin Jayn puhelin. <span data-ei-kuplaa>(uusi)</span></p>
      <p>Suomi on <span class="aukko" data-oikea="kylmempi"></span> kuin Brasilia. <span data-ei-kuplaa>(kylmä)</span></p>
      <p>Banaani on kaikkein <span class="aukko" data-oikea="halvin"></span>. <span data-ei-kuplaa>(halpa)</span></p>
      <p>Juusto on kaikkein <span class="aukko" data-oikea="kallein"></span>. <span data-ei-kuplaa>(kallis)</span></p>
      <p>Ananas on kaikkein <span class="aukko" data-oikea="isoin"></span>. <span data-ei-kuplaa>(iso)</span></p>
      <p>Tämä on maailman <span class="aukko" data-oikea="paras"></span> mango! <span data-ei-kuplaa>(hyvä)</span></p>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Aprofundar e fechar',
      html: `
<ul class="tavoitteet">
  <li>Você pede várias coisas com o partitivo plural: <span class="fi">Haluaisin banaaneja.</span> <span class="fi">Pöydällä on papuja.</span></li>
  <li>Você forma o partitivo plural das palavras mais comuns: <span class="fi">juustoja, banaaneja, kuvia, hedelmiä</span>.</li>
  <li>Você sabe que depois de número vem o singular: <span class="fi">kaksi banaania</span>.</li>
  <li>Você entende uma conversa em língua secreta e o mal-entendido do almoço.</li>
</ul>

<p data-paikka="pao-de-queijo">Meio-dia. O restaurante da Maira fica numa rua atrás do Mercado Central: oito mesas, uma cozinha quente e a mãe da Maira no caixa. A Maira traz o almoço mineiro: feijão tropeiro, arroz, frango com quiabo, couve, linguiça e um potinho de pimenta da casa. A Maia avisa o Jay sobre a pimenta. O Jay não tem medo de pimenta.</p>

<section class="osio">
  <h2>Diálogo B: Salakieli, a língua secreta</h2>
  <p class="ohje">Duas línguas na mesma mesa. Primeiro ouça com o ouvido da Maira: ela só ouve “psst… psst…” e vê as caras. Depois troque para o ouvido da Maia e entenda os cochichos. O que a Maira pensa que está acontecendo?</p>
  <div class="salakieli" data-kuulija="moara" data-kuiskaajat="maia,jay">
    <div class="kpl" id="t11-dialogi-b" data-nimi="Ouvir o diálogo B">
      <p class="s" data-h="kertoja" data-pt="É segunda-feira, meio-dia. A Maia e o Jay almoçam no pequeno restaurante da Maira. A mãe da Maira está no caixa.">On maanantai ja kello on kaksitoista. Maia ja Jay syövät lounasta Mairan pienessä ravintolassa. Mairan äiti istuu kassalla.</p>
      <p class="sk-pt" data-h="moara" lang="pt-BR">Bom apetite, gente! Comida mineira de verdade!</p>
      <p class="s" data-h="kertoja" data-pt="Na mesa tem feijão, linguiça, tomate, arroz e frango. O Jay tem um prato enorme. Pimenta tem só um pouco.">Pöydällä on papuja, makkaroita, tomaatteja, riisiä ja kanaa. Jayllä on todella iso lautanen. Chiliä on vain vähän.</p>
      <p class="s" data-h="jay" data-pt="Este prato é grande demais!">Tämä lautanen on liian iso!</p>
      <p class="s" data-h="maia" data-pt="A Maira acha que homem alto come muito.">Maira luulee, että pitkä mies syö paljon.</p>
      <p class="s" data-h="jay" data-pt="Homem alto bebe muito.">Pitkä mies juo paljon.</p>
      <p class="s" data-h="jay" data-pt="Esta é a mesma pimenta de manhã, no Mercado Central?">Onko tämä sama chili kuin aamulla Mercado Centralissa?</p>
      <p class="s" data-h="maia" data-pt="É. É a pimenta mais ardida do Brasil. Pega só um pouco!">On. Se on Brasilian tulisin chili. Ota vain vähän!</p>
      <p class="s" data-h="jay" data-pt="Tem tão pouca pimenta. Não pode ser ardida.">Chiliä on niin vähän. Se ei voi olla tulinen.</p>
      <p class="s" data-h="kertoja" data-pt="O Jay não tem medo de pimenta. Ele pega muita pimenta e come. A pimenta é ardida. O Jay chora.">Jay ei pelkää chiliä. Hän ottaa paljon chiliä ja syö. Chili on tulinen. Jay itkee.</p>
      <p class="sk-pt" data-h="moara" lang="pt-BR">Ai, meu Deus, ele está chorando! Não gostou da comida? Eu faço outra coisa pra ele!</p>
      <p class="s" data-h="maia" data-pt="Jay, a Maira acha que você está reclamando. Ela quer fazer outra comida para você.">Jay, Maira luulee, että sinä valitat. Hän haluaa tehdä sinulle muuta ruokaa.</p>
      <p class="s" data-h="jay" data-pt="Eu, reclamando? Não reclamo. Choro porque a pimenta é ardida! Comida maravilhosa! Esta é a melhor comida do mundo!">Valitanko minä? En <span data-l="valittaa:kielto">valita</span>. Itken, koska chili on tulinen! Mahtava ruoka! Tämä on maailman paras ruoka!</p>
      <p class="s" data-h="kertoja" data-pt="A pimenta é ardida, mas o Jay gosta dela. Ele ama pimenta.">Chili on tulinen, mutta Jay pitää siitä. Hän rakastaa chiliä.</p>
      <p class="sk-pt" data-h="maia" lang="pt-BR">Maira, ele não está reclamando! Ele chora por causa da pimenta. Ele diz que é a melhor comida do mundo!</p>
      <p class="sk-pt" data-h="moara" lang="pt-BR">Ah, é a pimenta! Então come mais, Jay. Tem muito!</p>
      <p class="s" data-h="kertoja" data-pt="A Maira ri. No caixa, a mãe da Maira também ri.">Maira nauraa. Kassalla Mairan äiti nauraa myös.</p>
      <p class="s" data-h="jay" data-pt="Pode me dar mais feijão e linguiça? E mais pimenta, por favor!">Saisinko lisää papuja ja makkaroita? Ja lisää chiliä, kiitos!</p>
      <p class="s" data-h="kertoja" data-pt="A mãe da Maira vem do caixa. Ela traz cerveja. Ela não diz nada.">Mairan äiti tulee kassalta. Hänellä on olutta. Hän ei sano mitään.</p>
      <p class="s" data-h="maia" data-pt="Boa! O único jeito é beber mais cerveja. Muito mais cerveja!">Hyvä! Ainoa tapa on juoda lisää olutta. Paljon lisää olutta!</p>
      <p class="s" data-h="kertoja" data-pt="A Maira traz mais feijão, linguiça e muito arroz para o Jay. Mas não tem mais pimenta. Toda a pimenta está no prato do Jay.">Maira tuo Jaylle lisää papuja, makkaroita ja paljon riisiä. Mutta chiliä ei ole enää. Kaikki chili on Jayn lautasella.</p>
      <p class="s" data-h="jay" data-pt="Agora o prato é maior que eu!">Nyt lautanen on isompi kuin minä!</p>
      <p class="s" data-h="kertoja" data-pt="O Jay bebe cerveja, chora e come. A Maira ri no caixa com a mãe.">Jay juo olutta, itkee ja syö. Maira nauraa kassalla äidin kanssa.</p>
    </div>
  </div>
  <p>O finlandês fala sério até quando elogia. Com cara séria e lágrimas de pimenta, o maior elogio do Jay parecia uma reclamação. Mas o Jay gosta de pimenta, e de cerveja: a Maira agora tem uma história nova para contar no caixa.</p>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercício: o diálogo B</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>6. Você entendeu o almoço?</h3>
    <div class="valinta" data-oikea="Papuja, makkaroita, tomaatteja, riisiä ja kanaa.">
      <p class="kysymys"><span class="fi">Mitä pöydällä on?</span></p>
      <div class="vaihtoehdot"><button type="button">Banaaneja, ananaksia ja mangoja.</button><button type="button">Papuja, makkaroita, tomaatteja, riisiä ja kanaa.</button><button type="button">Juustoa ja kahvia.</button></div>
    </div>
    <div class="valinta" data-oikea="Chili on tulinen.">
      <p class="kysymys"><span class="fi">Miksi Jay itkee?</span></p>
      <div class="vaihtoehdot"><button type="button">Chili on tulinen.</button><button type="button">Ruoka on huono.</button><button type="button">Hän on väsynyt.</button></div>
    </div>
    <div class="valinta" data-oikea="Jay valittaa.">
      <p class="kysymys"><span class="fi">Mitä Maira luulee?</span></p>
      <div class="vaihtoehdot"><button type="button">Jay nauraa.</button><button type="button">Jay valittaa.</button><button type="button">Jay nukkuu.</button></div>
    </div>
    <div class="valinta" data-oikea="Papuja, makkaroita ja chiliä.">
      <p class="kysymys"><span class="fi">Mitä Jay haluaa vielä?</span></p>
      <div class="vaihtoehdot"><button type="button">Vain vettä.</button><button type="button">Banaaneja ja ananaksia.</button><button type="button">Papuja, makkaroita ja chiliä.</button></div>
    </div>
  </div>

</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 3 · Várias coisas: o partitivo plural</h2>
  <p>O partitivo singular da lição 3 é “um pouco de uma coisa”: <span class="fi">kahvia, riisiä</span>. O <b>partitivo plural</b> é “algumas coisas, uma quantidade de coisas que se contam”. Quando o português diz o plural sem artigo para uma quantidade indefinida, como objeto ou depois de “há” (“eu queria bananas”, “há bananas na mesa”), o finlandês usa o partitivo plural. Como sujeito comum, o plural é <span class="fi pala">-t</span>: <span class="fi">Banaanit ovat pöydällä.</span> E depois de <span class="fi">ovat</span>, o adjetivo que descreve esse sujeito vai, em geral, no partitivo plural: <span class="fi">Banaanit ovat halpoja.</span> (as bananas são baratas). É a mesma regra de <span class="fi">Pulla on hyvää</span> (lição 5), agora no plural.</p>
  <ul class="esim">
    <li class="s" data-pt="Eu queria bananas.">Haluaisin banaaneja.</li>
    <li class="s" data-pt="No mercado há muita gente.">Kauppahallissa on paljon ihmisiä.</li>
    <li class="s" data-pt="A Purjo tem muitas fotos.">Purjolla on paljon kuvia.</li>
    <li class="s" data-pt="Na mesa há feijão e linguiças.">Pöydällä on papuja ja makkaroita.</li>
  </ul>
  <p><b>Massa ou coisas contáveis?</b> Café, arroz e comida são massa: partitivo singular (<span class="fi">paljon kahvia, riisiä, ruokaa</span>). Bananas, fotos e pessoas se contam: partitivo plural (<span class="fi">paljon banaaneja, kuvia, ihmisiä</span>). O feijão em finlandês se conta grão por grão: <span class="fi">papuja</span>.</p>
  <p><b>A forma: duas receitas.</b> Escreva as palavras desta lição com estas duas receitas; elas são as mais comuns.</p>
  <table class="taivutus">
    <tr><th>terminação</th><th>palavra</th><th>partitivo plural</th><th>quando</th></tr>
    <tr><td><span class="fi pala">-ja/-jä</span></td><td><span class="fi">juusto, mango, papu</span></td><td><span class="fi">juustoja, mangoja, papuja</span></td><td>palavra curta em o, u: ponha -ja (em y, ö: -jä)</td></tr>
    <tr><td><span class="fi pala">-ja</span></td><td><span class="fi">banaani, tomaatti</span></td><td><span class="fi">banaaneja, tomaatteja</span></td><td>palavra nova em -i: o i vira e, e vem -ja (geralmente -eja)</td></tr>
    <tr><td><span class="fi pala">-ia/-iä</span></td><td><span class="fi">kuva, hedelmä</span></td><td><span class="fi">kuvia, hedelmiä</span></td><td>palavra em -ä: o ä cai e vem -iä; palavra de duas sílabas em -a com o ou u na 1ª sílaba: o a cai e vem -ia</td></tr>
  </table>
  <p><b>Só para reconhecer.</b> Outras palavras mudam mais, e a bolha de cada uma mostra a forma (linha “plural: parte, quantidade”): <span class="fi">makkara → makkaroita</span> e <span class="fi">omena → omenoita</span> (palavra longa em -a), <span class="fi">ihminen → ihmisiä</span> (-nen vira -si-), <span class="fi">ananas → ananaksia</span>.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro: o número.</b> Depois de número vem o partitivo <b>singular</b>, nunca o plural: <span class="fi">kaksi banaania</span> (duas bananas), e não <span class="pala">kaksi banaaneja</span>. E “as bananas” (todas, aquelas) é o plural <span class="fi pala">-t</span> da lição 9: <span class="fi">Banaanit ovat pöydällä.</span></p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas do diálogo B</h3>
    <p>O partitivo plural do almoço já está acima (<span class="fi">papuja, makkaroita, tomaatteja</span>). Guarde também estes blocos:</p>
    <ul>
      <li><span class="fi">Ota vain vähän!</span> = pegue só um pouco! · a ordem (lição 9) e <span class="fi">vähän</span> + partitivo</li>
      <li><span class="fi">Maira luulee, että pitkä mies syö paljon.</span> = a Maira acha que homem alto come muito · <span class="fi">luulla</span> = achar, sem certeza; <span class="fi">tietää</span> = saber</li>
      <li><span class="fi">Valitanko minä? En valita.</span> = eu, reclamando? Não reclamo · a pergunta-eco com <span class="fi pala">-ko</span> (lição 2)</li>
      <li><span class="fi">Itken, koska chili on tulinen!</span> = choro porque a pimenta é ardida! · <span class="fi">koska</span> = porque</li>
      <li><span class="fi">Saisinko lisää papuja ja makkaroita?</span> = pode me dar mais feijão e linguiça? · <span class="fi">lisää</span> + partitivo = mais</li>
      <li><span class="fi">Ainoa tapa on juoda lisää olutta.</span> = o único jeito é beber mais cerveja · <span class="fi">ainoa</span> = o único; <span class="fi">tapa</span> = jeito</li>
      <li><span class="fi">Mutta chiliä ei ole enää.</span> = mas não tem mais pimenta · <span class="fi">ei enää</span> = não mais</li>
      <li><span class="fi">Nyt lautanen on isompi kuin minä!</span> = agora o prato é maior que eu! · <span class="fi pala">-mpi</span> + <span class="fi">kuin</span></li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios da parte B</h2>
  <p>Depois do almoço, o céu escurece, e cai uma chuva rápida de verão em Belo Horizonte. Enquanto ela passa, a Maia aproveita para treinar o Jay ali mesmo, no restaurante da Maira.</p>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. Ouça: uma coisa, várias ou todas?</h3>
    <p class="ohje">Aperte ▶ e escolha a forma que você ouviu: partitivo singular (<span class="fi">banaania</span>), partitivo plural (<span class="fi">banaaneja</span>) ou plural <span class="fi pala">-t</span> (<span class="fi">banaanit</span>).</p>
    <div class="valinta" data-kuuntele="banaaneja" data-oikea="banaaneja">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">banaania</button><button type="button">banaaneja</button><button type="button">banaanit</button></div>
    </div>
    <div class="valinta" data-kuuntele="kuvat" data-oikea="kuvat">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">kuvaa</button><button type="button">kuvia</button><button type="button">kuvat</button></div>
    </div>
    <div class="valinta" data-kuuntele="juustoa" data-oikea="juustoa">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">juustoa</button><button type="button">juustoja</button><button type="button">juustot</button></div>
    </div>
    <div class="valinta" data-kuuntele="makkaroita" data-oikea="makkaroita">
      <p class="kysymys">Qual forma?</p>
      <div class="vaihtoehdot"><button type="button">makkaraa</button><button type="button">makkarat</button><button type="button">makkaroita</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Escreva o partitivo plural</h3>
    <p class="ohje">Escreva a palavra entre parênteses no partitivo plural. Use as duas receitas da Gramática 3: <span class="fi pala">-ja/-jä</span> (<span class="fi">juustoja, banaaneja</span>) e <span class="fi pala">-ia/-iä</span> (<span class="fi">kuvia, hedelmiä</span>). Atenção à última frase: depois de número, o singular.</p>
    <div class="aukot" lang="fi-FI">
      <p>Haluaisin <span class="aukko" data-oikea="tomaatteja"></span>, kiitos. <span data-ei-kuplaa>(tomaatti)</span></p>
      <p>Mercado Centralissa on paljon <span class="aukko" data-oikea="juustoja"></span>. <span data-ei-kuplaa>(juusto)</span></p>
      <p>Jay ostaa <span class="aukko" data-oikea="mangoja"></span>. <span data-ei-kuplaa>(mango)</span></p>
      <p>Purjolla on paljon <span class="aukko" data-oikea="kuvia"></span>. <span data-ei-kuplaa>(kuva)</span></p>
      <p>Pöydällä on <span class="aukko" data-oikea="papuja"></span> ja riisiä. <span data-ei-kuplaa>(papu)</span></p>
      <p>Kauppahallissa on paljon <span class="aukko" data-oikea="hedelmiä"></span>. <span data-ei-kuplaa>(hedelmä)</span></p>
      <p>Haluaisin <span class="aukko" data-oikea="banaaneja"></span> ja ananaksia. <span data-ei-kuplaa>(banaani)</span></p>
      <p>Kaksi <span class="aukko" data-oikea="banaania"></span>, kiitos. <span data-ei-kuplaa>(banaani)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda às perguntas</h3>
    <p class="ohje">Responda em voz alta antes de abrir o modelo. Use o comparativo, o superlativo e o partitivo plural.</p>
    <details class="vastaus"><summary lang="fi-FI">Kumpi on parempi, kahvi vai tee?</summary><p class="s" data-pt="Na minha opinião, o café é melhor que o chá.">Mielestäni kahvi on parempi kuin tee.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko Helsinki isompi kuin Belo Horizonte?</summary><p class="s" data-pt="Não. Belo Horizonte é maior que Helsinque.">Ei ole. Belo Horizonte on isompi kuin Helsinki.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mikä on maailman paras ruoka?</summary><p class="s" data-pt="A melhor comida do mundo é a pulla da Purjo.">Maailman paras ruoka on Purjon pulla.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä hedelmiä sinä ostat torilta?</summary><p class="s" data-pt="Compro bananas, maçãs e mangas.">Ostan banaaneja, omenoita ja mangoja.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko Brasiliassa enemmän ihmisiä kuin Suomessa?</summary><p class="s" data-pt="Tem. O Brasil é muito maior que a Finlândia.">On. Brasilia on paljon suurempi kuin Suomi.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko kahvi Brasiliassa halvempi kuin Suomessa?</summary><p class="s" data-pt="É. Então, na Finlândia o café é mais caro.">On. Suomessa kahvi on siis kalliimpi.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mikä on paras tapa oppia suomea?</summary><p class="s" data-pt="Falar muito e ouvir ainda mais. É o único jeito!">Puhua paljon ja kuunnella vielä enemmän. Se on ainoa tapa!</p></details>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Mercado Central: o mercado de Belo Horizonte</h3>
  <figure class="kuva" data-kuva="mercado-central"></figure>
  <p>O Mercado Central abriu em <b>1929</b> como uma feira ao ar livre; mais tarde ganhou telhado e paredes. Hoje são cerca de quatrocentas lojas debaixo do mesmo teto: queijos da Canastra e do Serro, doce de leite, goiabada, cachaça, pimentas em conserva, panelas de pedra-sabão, artesanato e ervas. Nos bares dos corredores, o petisco clássico é fígado com jiló, com cerveja gelada.</p>
  <p>Para quem vem de Helsinque, é o <span class="fi">kauppahalli</span> da lição 3, só que maior, mais quente e muito mais barulhento:</p>
  <ul class="esim">
    <li class="s" data-pt="O Mercado Central é maior que o mercado coberto de Hakaniemi.">Mercado Central on isompi kuin Hakaniemen kauppahalli.</li>
    <li class="s" data-pt="No Brasil o café é mais barato que na Finlândia.">Brasiliassa kahvi on halvempi kuin Suomessa.</li>
  </ul>
  <p>No Mercado Central, o vendedor oferece um pedacinho de queijo para provar antes de comprar. No Brasil isso é normal; numa banca finlandesa isso é menos comum, mas no kauppahalli às vezes também se prova.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Isompi ku Suomessa: kuin vira ku</h3>
  <p>Na fala, <span class="fi">kuin</span> encurta para <span class="fi" data-rekisteri="puhe">ku</span>, e <span class="fi">tämä, tuo</span> viram <span class="fi" data-rekisteri="puhe">tää, toi</span> (lição 8). No lugar de <span class="fi">todella</span> (muito), a fala usa <span class="fi" data-rekisteri="puhe">tosi</span>, que é outra palavra, não <span class="fi">todella</span> encurtado. Você não precisa falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">kuin</span></td><td><span class="fi" data-rekisteri="puhe">ku</span></td><td>do que</td></tr>
    <tr><td><span class="fi">todella halpa</span></td><td><span class="fi" data-rekisteri="puhe">tosi halpa</span></td><td>muito barato</td></tr>
    <tr><td><span class="fi">Tämä on parempi kuin tuo.</span></td><td><span class="fi" data-rekisteri="puhe">Tää on parempi ku toi.</span></td><td>Este é melhor que aquele.</td></tr>
  </table>
  <p class="s" data-h="jay" data-kirja="Tämä on todella halpa!" data-pt="Isto aqui é muito barato!">Tää on tosi halpa!</p>
  <p class="s" data-h="maia" data-kirja="Tuo juusto on parempi kuin tämä." data-pt="Aquele queijo é melhor que este.">Toi juusto on parempi ku tää.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t11">
    <h3>Lição de casa</h3>
    <p>Pense num mercado ou supermercado da sua cidade. Escreva seis frases: duas comparações de preço com <span class="fi">kuin</span> (<span class="fi">… on halvempi kuin …</span>), uma com <span class="fi">yhtä … kuin</span>, uma com o superlativo (<span class="fi">… on kaikkein halvin</span> ou <span class="fi">… on paras</span>), uma pergunta com <span class="fi">kumpi</span> e uma lista de compras com o partitivo plural (<span class="fi">Haluaisin …</span>). Leia em voz alta, sem nasalizar antes de <span class="fi pala">n</span> e <span class="fi pala">m</span>.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="O café é mais barato que o queijo.">Kahvi on halvempi kuin juusto.</p>
      <p class="s" data-pt="O queijo é mais caro que a linguiça.">Juusto on kalliimpi kuin makkara.</p>
      <p class="s" data-pt="A linguiça é tão cara quanto o café.">Makkara on yhtä kallis kuin kahvi.</p>
      <p class="s" data-pt="A banana é a mais barata de todas.">Banaani on kaikkein halvin.</p>
      <p class="s" data-pt="Qual é melhor, a manga ou o abacaxi?">Kumpi on parempi, mango vai ananas?</p>
      <p class="s" data-pt="Eu queria bananas, mangas e tomates.">Haluaisin banaaneja, mangoja ja tomaatteja.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t11">
    <li>Sei comparar com -mpi e kuin: halvempi, kalliimpi, isompi, parempi kuin…</li>
    <li>Sei dizer o superlativo: halvin, kallein, paras, maailman paras.</li>
    <li>Uso kumpi para escolher entre dois e yhtä … kuin para dizer “tão … quanto”.</li>
    <li>Escrevo o partitivo plural com -ja e -ia (banaaneja, kuvia) e reconheço omenoita, ihmisiä.</li>
    <li>Depois de número uso o singular: kaksi banaania.</li>
    <li>Digo kana, Suomi e banaani sem nasalizar as vogais.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'komparatiivi', otsikko: 'Mais barato que: o comparativo -mpi e kuin', taso: 'essencial', hakuosa: 'h-vertailu', treeni: ['t11-komparatiivi', 't11-kuin'],
      html: `
<p><b>Forma:</b> genitivo sem o <span class="fi pala">-n</span> + <span class="fi pala">-mpi</span>. Palavras de duas sílabas em <span class="fi pala">-a/-ä</span>: o <span class="fi pala">a</span> vira <span class="fi pala">e</span>. Irregular: <span class="fi">hyvä → parempi</span>.</p>
<table class="taivutus">
  <tr><th>forma básica</th><th>genitivo</th><th>comparativo</th></tr>
  <tr><td><span class="fi">iso</span><span class="kaannos" lang="pt-BR">grande</span></td><td><span class="fi">ison</span></td><td><span class="fi">isompi</span></td></tr>
  <tr><td><span class="fi">uusi</span><span class="kaannos" lang="pt-BR">novo</span></td><td><span class="fi">uuden</span></td><td><span class="fi">uudempi</span></td></tr>
  <tr><td><span class="fi">kallis</span><span class="kaannos" lang="pt-BR">caro</span></td><td><span class="fi">kalliin</span></td><td><span class="fi">kalliimpi</span></td></tr>
  <tr><td><span class="fi">halpa</span><span class="kaannos" lang="pt-BR">barato</span></td><td><span class="fi">halvan</span></td><td><span class="fi">halvempi</span></td></tr>
  <tr><td><span class="fi">vanha</span><span class="kaannos" lang="pt-BR">velho</span></td><td><span class="fi">vanhan</span></td><td><span class="fi">vanhempi</span></td></tr>
  <tr><td><span class="fi">hyvä</span><span class="kaannos" lang="pt-BR">bom</span></td><td><span class="fi">hyvän</span></td><td><span class="fi">parempi</span></td></tr>
</table>
<p><span class="fi">kuin</span> = do que · <span class="fi">yhtä … kuin</span> = tão … quanto · <span class="fi">kumpi?</span> = qual (de dois)?</p>
<ul class="esim">
  <li class="s" data-pt="O queijo é mais caro que o café.">Juusto on kalliimpi kuin kahvi.</li>
  <li class="s" data-pt="A linguiça é tão cara quanto o café.">Makkara on yhtä kallis kuin kahvi.</li>
  <li class="s" data-pt="Qual é melhor, este ou aquele?">Kumpi on parempi, tämä vai tuo?</li>
</ul>`
    },
    {
      id: 'superlatiivi', otsikko: 'O mais barato: o superlativo -in (paras)', taso: 'essencial', hakuosa: 'h-vertailu', treeni: 't11-superlatiivi',
      html: `
<p><b>Forma:</b> o superlativo termina em <span class="fi pala">-in</span>; a vogal antes dele cai ou muda (<span class="fi">halpa → halvin</span>, <span class="fi">kallis → kallein</span>). Irregular: <span class="fi">hyvä → parempi → paras</span>. “De todos” = <span class="fi">kaikkein</span>; “do mundo” = <span class="fi">maailman</span> (genitivo).</p>
<div class="sijataulu" data-sana="halpa" data-sijat="nominatiivi,komp,sup"></div>
<div class="sijataulu" data-sana="kallis" data-sijat="nominatiivi,komp,sup"></div>
<div class="sijataulu" data-sana="hyvä" data-sijat="nominatiivi,komp,sup"></div>
<ul class="esim">
  <li class="s" data-pt="A banana é a mais barata de todas.">Banaani on kaikkein halvin.</li>
  <li class="s" data-pt="Esta é a melhor comida do mundo.">Tämä on maailman paras ruoka.</li>
</ul>`
    },
    {
      id: 'monikon-partitiivi', otsikko: 'Várias coisas: o partitivo plural', taso: 'essencial', hakuosa: 'h-monikko', treeni: 't11-monikon-partitiivi',
      html: `
<p><b>Uso:</b> uma quantidade indefinida de coisas que se contam, como objeto ou depois de “há”: <span class="fi">Haluaisin banaaneja.</span> (eu queria bananas) · <span class="fi">paljon ihmisiä</span> (muita gente). Massa fica no singular: <span class="fi">paljon kahvia</span>. Depois de número, sempre o singular: <span class="fi">kaksi banaania</span>.</p>
<p><b>Forma:</b> duas receitas para escrever: <span class="fi pala">-ja/-jä</span> (<span class="fi">juustoja, banaaneja</span>) e <span class="fi pala">-ia/-iä</span> (<span class="fi">kuvia, hedelmiä</span>). Só para reconhecer: <span class="fi pala">-ita/-itä</span> (<span class="fi">omenoita, makkaroita</span>).</p>
<p><b>Depois de ovat:</b> o adjetivo vai, em geral, no partitivo plural: <span class="fi">Banaanit ovat halpoja.</span> (as bananas são baratas)</p>
<div class="sijataulu" data-sana="banaani" data-sijat="nominatiivi,partitiivi,monikko,mon.part"></div>
<div class="sijataulu" data-sana="makkara" data-sijat="nominatiivi,partitiivi,monikko,mon.part"></div>
<ul class="esim">
  <li class="s" data-pt="Eu queria bananas.">Haluaisin banaaneja.</li>
  <li class="s" data-pt="A Purjo tem muitas fotos.">Purjolla on paljon kuvia.</li>
</ul>`
    },
    {
      id: 'aantaminen11', otsikko: 'Pronúncia: sem nasal antes de n e m', taso: 'essencial', hakuosa: 'h-sudenkuopat',
      html: `
<p>A vogal antes de <span class="fi pala">n</span> e <span class="fi pala">m</span> continua <b>oral</b>: nada de “bãnãna”. O acento fica na primeira sílaba, e o <span class="fi pala">aa</span> de <span class="fi">banaani</span> é longo.</p>
<ul class="esim">
  <li class="s" data-pt="galinha, frango">kana</li>
  <li class="s" data-pt="Finlândia">Suomi</li>
  <li class="s" data-pt="banana">banaani</li>
  <li class="s" data-pt="abacaxi">ananas</li>
</ul>
<p>Truque: diga o <span class="fi pala">a</span> de <span class="fi">kana</span> com o nariz tampado. Se o som muda, a vogal estava nasal.</p>`
    },
    {
      id: 'sudenkuopat11', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-vertailu',
      html: `
<ul>
  <li><b>“Mais barato” é uma palavra só:</b> <span class="fi">halvempi</span>, nunca <span class="pala">enemmän halpa</span>.</li>
  <li><b>“Melhor” é irregular:</b> <span class="fi">hyvä → parempi → paras</span>, nunca <span class="pala">hyvempi</span>.</li>
  <li><b>“Do que” é kuin:</b> <span class="fi">Juusto on kalliimpi kuin kahvi.</span> As duas coisas na mesma forma.</li>
  <li><b>kumpi × mikä:</b> “o mais caro” entre dois é <span class="fi">Kumpi on kalliimpi?</span>; entre todos, <span class="fi">Mikä on kallein?</span></li>
  <li><b>“Muito melhor” é <span class="fi">paljon parempi</span></b>, nunca <span class="pala">hyvin parempi</span>.</li>
  <li><b>“Mais” de quantidade é <span class="fi">enemmän</span>:</b> <span class="fi">enemmän ihmisiä</span>.</li>
  <li><b>Número + singular:</b> <span class="fi">kaksi banaania</span>, nunca <span class="pala">kaksi banaaneja</span>.</li>
</ul>`
    }
  ]
});
