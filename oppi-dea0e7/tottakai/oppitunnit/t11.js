/* Tottakai, lição 11: Mercado Central ja Moaran ravintola (Passon jakso 11 Maian näkökulmasta). Oma materiaali, ei kirjan
   tekstiä. Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5b ”Oppitunti 11”. Ensimmäinen oppitunti Brasiliassa (K2:n jälkeen).
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t11): aamu Mercado Centralissa Moaran kanssa; Maia ja Jay vertailevat kuiskaten suomeksi; dialogi A (20),
     Frases prontas, sanasto, vertailu lyhyesti (-mpi, kuin, yhtä … kuin, kumpi), kikka: Moaran vaaka suomeksi
     (`.vaaka[data-vert]`, Tottakain komponentit.js vaakaVertailu: vertailumuoto leksikon vert-kentästä, Maian ääni),
     ääntäminen (ei nasalisaatiota n:n ja m:n edellä), tehtävät 1–3.
   - osa B (#t11-b): lounas Moaran ravintolassa; dialogi B (19) salakielen sisällä (`.salakieli`, uusi komponentti:
     kuiskaukset haaleina kuplina, Moaran korvalla ”psst… psst…”); väärinkäsitys: Jay kehuu ruokaa ja itkee pippurista,
     Moara luulee hänen valittavan. Kielioppi 1: superlatiivi (halvin, kallein, paras, kaikkein, maailman paras) → tehtävä 4
     (hintakyltti) heti perään; kielioppi 2: monikon partitiivi (-ja/-jä, -ia/-iä, -ita/-itä) → tehtävät 5–9, kulttuuri
     (Mercado Central), Na rua (ku, tosi, tää, toi), kotitehtävä, itsearvio.
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat mielestäni (mieli), itse, ehkä, kukaan, löytää, toinen, totta,
   uskoa + pois, ainoa, tapa, lisää, mahtava, suuri, enemmän, koska; dialogit 20 + 19; sivun sanalistat 20 → 12.
   Brasilian jaksot (OPPITUNNIT §2 ja §5b): suomea puhuvat vain Maia ja Jay (kuiskaukset) ja kertoja; Moara puhuu
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
    moara: { nimi: 'Moara', tyyppi: 'nainen', vaihto: 5, kuvaus: 'amiga de infância da Maia; tem um restaurante perto do Mercado Central; fala só português' }
  },

  sanasto: [
    'real', 'hinta', 'juusto', 'makkara', 'banaani', 'ananas', 'mango', 'hedelmä', 'tomaatti',
    'papu', 'pippuri', 'halpa', 'kallis', 'suuri', 'parempi', 'paras', 'kuin', 'yhtä', 'kumpi', 'kaikkein', 'enemmän',
    'maailma', 'tulinen', 'herkullinen', 'mahtava', 'ainoa', 'tapa', 'totta', 'mielestäni',
    'kuiskata', 'valittaa', 'itkeä', 'enää'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · No Mercado Central: qual é mais barato?',
      html: `
<ul class="tavoitteet">
  <li>Você compara preços e coisas: <span class="fi">Tämä on halvempi kuin tuo.</span> <span class="fi">Kumpi on parempi?</span></li>
  <li>Você diz “tão … quanto” com <span class="fi">yhtä … kuin</span> e usa a balança da Moara em finlandês.</li>
  <li>Você diz <span class="fi">kana, Suomi, banaani</span> sem nasalizar as vogais.</li>
  <li>Parte B: o melhor e o mais barato (<span class="fi">paras, halvin</span>) e o partitivo plural (<span class="fi">banaaneja, kuvia</span>).</li>
</ul>
<p data-paikka="mercado-central-entrada">Segunda-feira, 21 de dezembro: faltam poucos dias para o Natal. Belo Horizonte, 22 graus às oito da manhã (à tarde vai chegar a 28). O Jay acordou às cinco: na Finlândia já eram dez, e o corpo dele ainda não sabe que mudou de hemisfério. A Moara, amiga de infância da Maia, tem um restaurante pequeno atrás do Mercado Central e faz as compras lá todo dia. Hoje ela leva a Maia e o Jay junto. A Moara fala português, e rápido. A Maia e o Jay comentam tudo em finlandês, baixinho: no Brasil, o finlandês vira uma língua secreta.</p>

<section class="osio">
  <h2>Diálogo A: Kumpi juusto on parempi?</h2>
  <p class="ohje">Ouça primeiro sem tradução. Preste atenção em <span class="fi">kumpi</span> (qual dos dois), nas palavras com <span class="fi pala">-mpi</span> (<span class="fi">parempi, kalliimpi, halvempi</span>) e em <span class="fi">kuin</span> (do que). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t11-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="São oito da manhã. No Mercado Central já há muita gente.">Kello on kahdeksan aamulla. Mercado Centralissa on jo paljon ihmisiä.</p>
    <p class="s" data-h="kertoja" data-pt="A Moara compra queijo para o restaurante. A Maia e o Jay cochicham em finlandês.">Moara ostaa juustoa ravintolalle. Maia ja Jay kuiskaavat suomeksi.</p>
    <p class="s" data-h="jay" data-pt="Maia, qual queijo é melhor, este ou aquele?">Maia, kumpi juusto on parempi, tämä vai tuo?</p>
    <p class="s" data-h="maia" data-pt="Este é melhor. Mas também é mais caro.">Tämä on parempi. Mutta se on myös kalliimpi.</p>
    <p class="s" data-h="jay" data-pt="Quanto eles custam?">Paljonko ne maksavat?</p>
    <p class="s" data-h="maia" data-pt="Este custa sessenta reais, e aquele, trinta.">Tämä maksaa kuusikymmentä realia ja tuo kolmekymmentä.</p>
    <p class="s" data-h="jay" data-pt="Então aquele é mais barato que este.">Tuo on siis halvempi kuin tämä.</p>
    <p class="s" data-h="maia" data-pt="Na minha opinião, o caro é melhor. Mas a Moara escolhe sozinha.">Mielestäni kalliimpi on parempi. Mutta Moara valitsee itse.</p>
    <p class="s" data-h="kertoja" data-pt="A Moara olha para eles e pergunta em português o que eles tanto cochicham.">Moara katsoo heitä ja kysyy portugaliksi, mitä he kuiskaavat.</p>
    <p class="s" data-h="jay" data-pt="Ela acha que a gente está falando dela?">Luuleeko hän, että puhumme hänestä?</p>
    <p class="s" data-h="maia" data-pt="Talvez. Mas aqui ninguém fala finlandês.">Ehkä. Mutta täällä kukaan ei puhu suomea.</p>
    <p class="s" data-h="jay" data-pt="Ótimo. O finlandês é a nossa língua secreta.">Hyvä. Suomi on meidän salakieli.</p>
    <p class="s" data-h="jay" data-pt="Olha, bananas e abacaxis! Aqui a banana é maior e mais barata que na Finlândia.">Katso, banaaneja ja ananaksia! Täällä banaani on isompi ja halvempi kuin Suomessa.</p>
    <p class="s" data-h="maia" data-pt="E melhor! A banana do Brasil é a melhor do mundo.">Ja parempi! Brasilian banaani on maailman paras.</p>
    <p class="s" data-h="jay" data-pt="É verdade?">Onko se totta?</p>
    <p class="s" data-h="maia" data-pt="É. Pode acreditar!">On. Usko pois!</p>
    <p class="s" data-h="jay" data-pt="E onde eu acho mangas?">Entä mistä löydän mangoja?</p>
    <p class="s" data-h="maia" data-pt="Ali, do outro lado.">Tuolla, toisella puolella.</p>
    <p class="s" data-h="jay" data-pt="Eu queria bananas. E abacaxis. E mangas.">Haluaisin banaaneja. Ja ananaksia. Ja mangoja.</p>
    <p class="s" data-h="kertoja" data-pt="A Moara ri. Em português, banaani é quase igual: banana.">Moara nauraa. Banaani on portugaliksi melkein sama: <span lang="pt-BR">banana</span>.</p>
  </div>
  <p>A Moara não entende os cochichos, mas entende a cara do Jay diante das frutas. Ela compra o queijo mais caro para o restaurante (<span lang="pt-BR">“o bom é o bom, Maia”</span>), e o Jay sai do mercado com duas sacolas de frutas que ele não sabe descascar.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Kumpi juusto on parempi, tämä vai tuo?</span> = qual queijo é melhor, este ou aquele? · <span class="fi">kumpi</span> = qual dos dois; <span class="fi">vai</span> = ou, na pergunta (lição 10)</li>
      <li><span class="fi">kuusikymmentä realia</span> = sessenta reais · partitivo depois de número (lição 3)</li>
      <li><span class="fi">Moara kysyy, mitä he kuiskaavat.</span> = a Moara pergunta o que eles cochicham · <span class="fi">kuiskata</span> é do tipo 4, como <span class="fi">haluta</span> (lição 7)</li>
      <li><span class="fi">Mercado Centralissa on paljon ihmisiä.</span> = no Mercado Central há muita gente · <span class="fi">ihmisiä</span> é o partitivo plural: parte B desta lição</li>
      <li><span class="fi">Brasilian banaani on maailman paras.</span> = a banana do Brasil é a melhor do mundo · <span class="fi">paras</span>, o superlativo: parte B desta lição</li>
      <li><span class="fi">Haluaisin banaaneja.</span> = eu queria bananas · <span class="fi">haluaisin</span> já é frase pronta (lição 4); o condicional: lição 15</li>
      <li><span class="fi">Mielestäni…</span> = na minha opinião… · <span class="fi">Onko se totta?</span> = é verdade? · <span class="fi">toisella puolella</span> = do outro lado</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="mercado-central">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="No mercado e comparar" data-sanat="juusto,makkara,banaani,ananas,mango,hedelmä,hinta,halpa,kallis,parempi,kuin,kumpi"></div>
  <p>As outras palavras da lição estão no <a href="#t11-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio">
  <h2>Comparar: halvempi kuin…</h2>
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
  <h2>A balança da Moara</h2>
  <p class="ohje">Na banca de queijos, a Moara pesa tudo numa balança antiga. A Maia transformou a balança num jogo: toque em dois produtos. O prato do mais caro desce, e a Maia cochicha a comparação em finlandês. Experimente também dois produtos com o mesmo preço: o que a Maia diz?</p>
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
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ligue o comparativo à tradução</h3>
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
    <h3>2. Ouça: qual é mais caro, qual é mais barato?</h3>
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

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>3. Você entendeu o diálogo A?</h3>
    <div class="valinta" data-oikea="Kalliimpi.">
      <p class="kysymys"><span class="fi">Kumpi juusto on parempi, halvempi vai kalliimpi?</span></p>
      <div class="vaihtoehdot"><button type="button">Halvempi.</button><button type="button">Kalliimpi.</button></div>
    </div>
    <div class="valinta" data-oikea="Kolmekymmentä realia.">
      <p class="kysymys"><span class="fi">Paljonko halvempi juusto maksaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kuusikymmentä realia.</button><button type="button">Kolmekymmentä realia.</button><button type="button">Kolmetoista realia.</button></div>
    </div>
    <div class="valinta" data-oikea="Mitä te kuiskaatte?">
      <p class="kysymys"><span class="fi">Mitä Moara kysyy portugaliksi?</span></p>
      <div class="vaihtoehdot"><button type="button">Paljonko se maksaa?</button><button type="button">Kumpi on parempi?</button><button type="button">Mitä te kuiskaatte?</button></div>
    </div>
    <div class="valinta" data-oikea="Brasiliassa.">
      <p class="kysymys"><span class="fi">Missä banaani on isompi ja halvempi?</span></p>
      <div class="vaihtoehdot"><button type="button">Suomessa.</button><button type="button">Brasiliassa.</button><button type="button">Lissabonissa.</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Almoço na língua secreta',
      html: `
<ul class="tavoitteet">
  <li>Você diz o melhor e o mais barato: <span class="fi">paras, halvin, kallein</span>, <span class="fi">maailman paras</span>.</li>
  <li>Você pede várias coisas com o partitivo plural: <span class="fi">Haluaisin banaaneja.</span> <span class="fi">Pöydällä on papuja.</span></li>
  <li>Você sabe que depois de número vem o singular: <span class="fi">kaksi banaania</span>.</li>
  <li>Você entende uma conversa em língua secreta e o mal-entendido do almoço.</li>
</ul>

<p data-paikka="pao-de-queijo">Meio-dia. O restaurante da Moara fica numa rua atrás do Mercado Central: oito mesas, uma cozinha quente e a mãe da Moara no caixa. A Moara traz o almoço mineiro: feijão tropeiro, arroz, frango com quiabo, couve, linguiça e um potinho de pimenta da casa. A Maia avisa o Jay sobre a pimenta. O Jay é finlandês: ele acha que já entendeu.</p>

<section class="osio">
  <h2>Diálogo B: Salakieli, a língua secreta</h2>
  <p class="ohje">Duas línguas na mesma mesa. Primeiro ouça com o ouvido da Moara: ela só ouve “psst… psst…” e vê as caras. Depois troque para o ouvido da Maia e entenda os cochichos. O que a Moara pensa que está acontecendo?</p>
  <div class="salakieli" data-kuulija="moara" data-kuiskaajat="maia,jay">
    <div class="kpl" id="t11-dialogi-b" data-nimi="Ouvir o diálogo B">
      <p class="sk-pt" data-h="moara" lang="pt-BR">Prontinho, gente! Feijão tropeiro, arroz, frango com quiabo e couve. E a pimenta da casa. Bom apetite!</p>
      <p class="s" data-h="kertoja" data-pt="Na mesa há muita comida: feijão, arroz, frango e linguiças.">Pöydällä on paljon ruokaa: papuja, riisiä, kanaa ja makkaroita.</p>
      <p class="s" data-h="jay" data-pt="Maia, o que é aquela coisa vermelha? É ardida?">Maia, mikä tuo punainen on? Onko se tulinen?</p>
      <p class="s" data-h="maia" data-pt="É. É pimenta. Pegue só um pouquinho!">On. Se on pippuria. Ota vain vähän!</p>
      <p class="s" data-h="kertoja" data-pt="O Jay pega muita pimenta. Depois ele chora.">Jay ottaa paljon pippuria. Sitten hän itkee.</p>
      <p class="s" data-h="jay" data-puhu="Tämä on maailman paras ruoka! Paljon parempi kuin äidin ruoka!" data-pt="Esta é a melhor comida do mundo! Muito melhor que a comida da minha mãe! (com lágrimas nos olhos)">Tämä on maailman paras ruoka! Paljon parempi kuin äidin ruoka! <span class="emoji">😭</span></p>
      <p class="sk-ajatus" data-h="moara" lang="pt-BR">(pensa) Meu Deus, ele está chorando. Ele não gostou da comida…</p>
      <p class="sk-pt" data-h="moara" lang="pt-BR">Maia, ele não gostou? Ele está vermelho! Eu faço um bife pra ele, rapidinho!</p>
      <p class="s" data-h="maia" data-pt="Jay, a Moara acha que você está reclamando!">Jay, Moara luulee, että sinä valitat!</p>
      <p class="s" data-h="jay" data-pt="Reclamando? Eu não reclamo! Isto está delicioso!">Valitan? En <span data-l="valittaa:kielto">valita</span>! Tämä on herkullista!</p>
      <p class="s" data-h="maia" data-pt="Mas você está chorando e está vermelho como um tomate.">Mutta sinä itket, ja olet punainen kuin tomaatti.</p>
      <p class="s" data-h="jay" data-pt="Eu choro porque isto está tão bom. Diga à Moara que a comida está incrível!">Minä itken, koska tämä on niin hyvää. Kerro Moaralle, että ruoka on mahtavaa!</p>
      <p class="s" data-h="kertoja" data-pt="A Maia conta para a Moara, em português, o que o Jay diz.">Maia kertoo Moaralle portugaliksi, mitä Jay sanoo.</p>
      <p class="sk-pt" data-h="moara" lang="pt-BR">(rindo) Melhor que a comida da mãe dele? Então ele ganha mais! Quer mais, Jay?</p>
      <p class="s" data-h="jay" data-pt="Eu queria mais feijão e linguiças. Mas pimenta, não, chega!">Haluaisin vielä papuja ja makkaroita. Mutta ei enää pippuria!</p>
    <p class="s" data-h="maia" data-pt="Pegue mais arroz também. Ajuda com a pimenta.">Ota myös lisää riisiä. Se auttaa.</p>
    <p class="s" data-h="jay" data-pt="Ajuda? É verdade?">Auttaako? Onko se totta?</p>
    <p class="s" data-h="maia" data-pt="É. Arroz é o melhor jeito. E o único.">On. Riisi on paras tapa. Ja ainoa.</p>
      <p class="s" data-h="kertoja" data-pt="A Moara ri. O Jay ganha mais feijão e linguiças, mas nada de pimenta.">Moara nauraa. Jay saa lisää papuja ja makkaroita, mutta ei pippuria.</p>
    </div>
  </div>
  <p>O finlandês fala sério até quando elogia. Com cara séria e lágrimas de pimenta, o maior elogio do Jay parecia uma reclamação. A Moara agora tem uma história nova para contar no caixa, e o Jay aprendeu que “só um pouquinho”, em Minas, é para levar a sério.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Pöydällä on paljon ruokaa: papuja, riisiä, kanaa ja makkaroita.</span> = na mesa há muita comida: feijão, arroz, frango e linguiças · o que se conta vai no partitivo plural (<span class="fi">papuja, makkaroita</span>), a massa no singular (<span class="fi">riisiä, kanaa</span>): veja a Gramática abaixo</li>
      <li><span class="fi">Ota vain vähän!</span> = pegue só um pouco! · a ordem (lição 9) e <span class="fi">vähän</span> + partitivo</li>
      <li><span class="fi">maailman paras ruoka</span> = a melhor comida do mundo · genitivo + superlativo</li>
      <li><span class="fi">Moara luulee, että sinä valitat.</span> = a Moara acha que você está reclamando · <span class="fi">luulla</span> = achar, sem certeza; <span class="fi">tietää</span> = saber</li>
      <li><span class="fi">punainen kuin tomaatti</span> = vermelho como um tomate · <span class="fi">kuin</span> também é “como” (como em <span class="fi">onnellinen kuin possu</span>, lição 8)</li>
      <li><span class="fi">Tämä on niin hyvää.</span> = isto está tão bom · comida é massa: <span class="fi">hyvää</span> no partitivo, como <span class="fi">pulla on hyvää</span> (lição 5)</li>
      <li><span class="fi">Mutta ei enää pippuria!</span> = mas pimenta, chega! · <span class="fi">ei enää</span> = não mais · <span class="fi">lisää riisiä</span> = mais arroz · <span class="fi">paras tapa</span> = o melhor jeito; <span class="fi">ainoa</span> = o único</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 1 · O mais barato: o superlativo <span class="fi pala">-in</span></h2>
  <p>Na parte A, o comparativo: <span class="fi">halvempi</span> (mais barato). O superlativo, “o mais …”, termina em <span class="fi pala">-in</span>: <span class="fi">halvin</span> (o mais barato). A vogal antes do <span class="fi pala">-in</span> às vezes cai ou muda; a bolha de cada palavra mostra a forma.</p>
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
  <h2>Exercício: o mais caro, o mais barato</h2>
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
</section>

<section class="osio" data-osa="gramatica">
  <h2>Gramática 2 · Várias coisas: o partitivo plural</h2>
  <p>O partitivo singular da lição 3 é “um pouco de uma coisa”: <span class="fi">kahvia, riisiä</span>. O <b>partitivo plural</b> é “algumas coisas, uma quantidade de coisas que se contam”. Quando o português diz o plural sem artigo para uma quantidade indefinida, como objeto ou depois de “há” (“eu queria bananas”, “há bananas na mesa”), o finlandês usa o partitivo plural. Como sujeito comum, o plural é <span class="fi pala">-t</span>: <span class="fi">Banaanit ovat halpoja.</span></p>
  <ul class="esim">
    <li class="s" data-pt="Eu queria bananas.">Haluaisin banaaneja.</li>
    <li class="s" data-pt="No mercado há muita gente.">Torilla on paljon ihmisiä.</li>
    <li class="s" data-pt="A Purjo tem muitas fotos.">Purjolla on paljon kuvia.</li>
    <li class="s" data-pt="Na mesa há feijão e linguiças.">Pöydällä on papuja ja makkaroita.</li>
  </ul>
  <p><b>Massa ou coisas contáveis?</b> Café, arroz e comida são massa: partitivo singular (<span class="fi">paljon kahvia, riisiä, ruokaa</span>). Bananas, fotos e pessoas se contam: partitivo plural (<span class="fi">paljon banaaneja, kuvia, ihmisiä</span>). O feijão em finlandês se conta grão por grão: <span class="fi">papuja</span>.</p>
  <p><b>A forma.</b> O partitivo plural termina sempre em <span class="fi pala">-ja/-jä</span>, <span class="fi pala">-ia/-iä</span> ou <span class="fi pala">-ita/-itä</span>. Reconheça as três terminações; a bolha de cada palavra mostra a forma (linha “plural: parte, quantidade”).</p>
  <table class="taivutus">
    <tr><th>terminação</th><th>palavra</th><th>partitivo plural</th><th>quando</th></tr>
    <tr><td><span class="fi pala">-ja/-jä</span></td><td><span class="fi">juusto, mango, papu</span></td><td><span class="fi">juustoja, mangoja, papuja</span></td><td>palavra curta em o, u (y, ö: -jä); mas -io, -eo: -ita (museoita)</td></tr>
    <tr><td><span class="fi pala">-ja</span></td><td><span class="fi">banaani, tomaatti</span></td><td><span class="fi">banaaneja, tomaatteja</span></td><td>palavra nova em -i: o i vira e</td></tr>
    <tr><td><span class="fi pala">-ia/-iä</span></td><td><span class="fi">kuva, hedelmä, ihminen</span></td><td><span class="fi">kuvia, hedelmiä, ihmisiä</span></td><td>o ä final cai; o a cai depois de o, u na 1ª sílaba (kuvia), mas vira o depois de a, e, i (kala → kaloja); -nen → -si-</td></tr>
    <tr><td><span class="fi pala">-ita/-itä</span></td><td><span class="fi">omena, makkara</span></td><td><span class="fi">omenoita, makkaroita</span></td><td>palavra longa em -a: a vira o</td></tr>
  </table>
  <div class="huomio">
    <p><b>Armadilha do brasileiro: o número.</b> Depois de número vem o partitivo <b>singular</b>, nunca o plural: <span class="fi">kaksi banaania</span> (duas bananas), e não <span class="pala">kaksi banaaneja</span>. E “as bananas” (todas, aquelas) é o plural <span class="fi pala">-t</span> da lição 9: <span class="fi">Banaanit ovat pöydällä.</span></p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios da parte B</h2>
  <p>Três da tarde. O céu escurece, e cai a chuva de verão de Belo Horizonte. No restaurante, a Moara serve café, e a Maia aproveita para treinar o Jay.</p>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Complete com o comparativo</h3>
    <p class="ohje">Escreva o comparativo (<span class="fi pala">-mpi</span>) da palavra entre parênteses. Lembre: <span class="fi">hyvä → parempi</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Tuo juusto on <span class="aukko" data-oikea="halvempi"></span> kuin tämä. <span data-ei-kuplaa>(halpa)</span></p>
      <p>Juusto on <span class="aukko" data-oikea="kalliimpi"></span> kuin kahvi. <span data-ei-kuplaa>(kallis)</span></p>
      <p>Ananas on <span class="aukko" data-oikea="isompi"></span> kuin banaani. <span data-ei-kuplaa>(iso)</span></p>
      <p>Brasilian banaani on <span class="aukko" data-oikea="parempi"></span> kuin Suomen banaani. <span data-ei-kuplaa>(hyvä)</span></p>
      <p>Tomaatti on <span class="aukko" data-oikea="pienempi"></span> kuin ananas. <span data-ei-kuplaa>(pieni)</span></p>
      <p>Purjo on <span class="aukko" data-oikea="vanhempi"></span> kuin Jay. <span data-ei-kuplaa>(vanha)</span></p>
      <p>Maian puhelin on <span class="aukko" data-oikea="uudempi"></span> kuin Jayn puhelin. <span data-ei-kuplaa>(uusi)</span></p>
      <p>Suomi on <span class="aukko" data-oikea="kylmempi"></span> kuin Brasilia. <span data-ei-kuplaa>(kylmä)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Ouça: uma coisa, várias ou todas?</h3>
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
    <h3>7. Uma, várias ou todas? Escolha a forma</h3>
    <p class="ohje">Entre parênteses está o que a frase quer dizer. Várias coisas, sem número: partitivo plural. Depois de número: partitivo singular.</p>
    <div class="valinta" data-oikea="banaaneja">
      <p class="kysymys"><span class="fi">Haluaisin ___, kiitos.</span> (umas bananas)</p>
      <div class="vaihtoehdot"><button type="button">banaania</button><button type="button">banaanit</button><button type="button">banaaneja</button></div>
    </div>
    <div class="valinta" data-oikea="ihmisiä">
      <p class="kysymys"><span class="fi">Mercado Centralissa on paljon ___.</span> (gente, pessoas)</p>
      <div class="vaihtoehdot"><button type="button">ihmisiä</button><button type="button">ihmistä</button><button type="button">ihmiset</button></div>
    </div>
    <div class="valinta" data-oikea="kuvia">
      <p class="kysymys"><span class="fi">Purjolla on paljon ___.</span> (fotos)</p>
      <div class="vaihtoehdot"><button type="button">kuvat</button><button type="button">kuvia</button><button type="button">kuvaa</button></div>
    </div>
    <div class="valinta" data-oikea="banaania">
      <p class="kysymys"><span class="fi">Kaksi ___, kiitos.</span> (duas bananas)</p>
      <div class="vaihtoehdot"><button type="button">banaaneja</button><button type="button">banaania</button><button type="button">banaanit</button></div>
    </div>
    <div class="valinta" data-oikea="ananaksia">
      <p class="kysymys"><span class="fi">Torilla on ___.</span> (abacaxis, vários)</p>
      <div class="vaihtoehdot"><button type="button">ananakset</button><button type="button">ananasta</button><button type="button">ananaksia</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>8. Você entendeu o almoço?</h3>
    <div class="valinta" data-oikea="Papuja, riisiä, kanaa ja makkaroita.">
      <p class="kysymys"><span class="fi">Mitä pöydällä on?</span></p>
      <div class="vaihtoehdot"><button type="button">Banaaneja, ananaksia ja mangoja.</button><button type="button">Papuja, riisiä, kanaa ja makkaroita.</button><button type="button">Juustoa ja kahvia.</button></div>
    </div>
    <div class="valinta" data-oikea="Pippuri on tulinen.">
      <p class="kysymys"><span class="fi">Miksi Jay itkee?</span></p>
      <div class="vaihtoehdot"><button type="button">Pippuri on tulinen.</button><button type="button">Ruoka on huono.</button><button type="button">Hän on väsynyt.</button></div>
    </div>
    <div class="valinta" data-oikea="Jay valittaa.">
      <p class="kysymys"><span class="fi">Mitä Moara luulee?</span></p>
      <div class="vaihtoehdot"><button type="button">Jay nauraa.</button><button type="button">Jay valittaa.</button><button type="button">Jay nukkuu.</button></div>
    </div>
    <div class="valinta" data-oikea="Papuja ja makkaroita.">
      <p class="kysymys"><span class="fi">Mitä Jay haluaa vielä?</span></p>
      <div class="vaihtoehdot"><button type="button">Pippuria.</button><button type="button">Banaaneja ja ananaksia.</button><button type="button">Papuja ja makkaroita.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda às perguntas</h3>
    <p class="ohje">Responda em voz alta antes de abrir o modelo. Use o comparativo, o superlativo e o partitivo plural.</p>
    <details class="vastaus"><summary lang="fi-FI">Mitä mieltä olet: kumpi on parempi, kahvi vai tee?</summary><p class="s" data-pt="Na minha opinião, o café é melhor que o chá.">Mielestäni kahvi on parempi kuin tee.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko Helsinki isompi kuin Belo Horizonte?</summary><p class="s" data-pt="Não. Belo Horizonte é maior que Helsinque.">Ei ole. Belo Horizonte on isompi kuin Helsinki.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mikä on maailman paras ruoka?</summary><p class="s" data-pt="A melhor comida do mundo é a pulla da Purjo.">Maailman paras ruoka on Purjon pulla.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä hedelmiä sinä ostat torilta?</summary><p class="s" data-pt="Compro bananas, maçãs e mangas.">Ostan banaaneja, omenoita ja mangoja.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kummassa maassa on enemmän ihmisiä, Suomessa vai Brasiliassa?</summary><p class="s" data-pt="No Brasil. O Brasil é muito maior que a Finlândia.">Brasiliassa. Brasilia on paljon suurempi kuin Suomi.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko kahvi Brasiliassa halvempi kuin Suomessa?</summary><p class="s" data-pt="É. No Brasil o café é mais barato que na Finlândia.">On. Brasiliassa kahvi on halvempi kuin Suomessa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä mieltä olet: onko suomi vaikea kieli?</summary><p class="s" data-pt="Na minha opinião é um pouco difícil, mas às vezes é incrível.">Mielestäni se on vähän vaikea, mutta joskus se on mahtava.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Minne sinä menet täältä?</summary><p class="s" data-pt="Daqui eu vou para casa. Ou seja, para casa, não para a loja.">Täältä menen kotiin. Siis kotiin, en kauppaan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mikä on paras tapa oppia suomea?</summary><p class="s" data-pt="O melhor jeito é falar muito. É o único jeito. Isso mesmo!">Paras tapa on puhua paljon. Se on ainoa tapa. Aivan oikein!</p></details>
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
  <p>Na fala, <span class="fi">kuin</span> encurta para <span class="fi" data-rekisteri="puhe">ku</span>, <span class="fi">todella</span> (muito) vira <span class="fi" data-rekisteri="puhe">tosi</span>, e <span class="fi">tämä, tuo</span> viram <span class="fi" data-rekisteri="puhe">tää, toi</span> (lição 8). Você não precisa falar assim; só reconheça.</p>
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
    <li>Reconheço e uso o partitivo plural: banaaneja, kuvia, omenoita, ihmisiä.</li>
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
  <li class="s" data-pt="Qual é o mais caro? – O queijo.">Mikä on kallein? – Juusto.</li>
</ul>`
    },
    {
      id: 'monikon-partitiivi', otsikko: 'Várias coisas: o partitivo plural', taso: 'essencial', hakuosa: 'h-monikko', treeni: 't11-monikon-partitiivi',
      html: `
<p><b>Uso:</b> uma quantidade indefinida de coisas que se contam, como objeto ou depois de “há”: <span class="fi">Haluaisin banaaneja.</span> (eu queria bananas) · <span class="fi">paljon ihmisiä</span> (muita gente). Massa fica no singular: <span class="fi">paljon kahvia</span>. Depois de número, sempre o singular: <span class="fi">kaksi banaania</span>.</p>
<p><b>Forma:</b> <span class="fi pala">-ja/-jä</span>, <span class="fi pala">-ia/-iä</span> ou <span class="fi pala">-ita/-itä</span>: <span class="fi">juustoja, banaaneja, kuvia, hedelmiä, omenoita, makkaroita</span>.</p>
<div class="sijataulu" data-sana="banaani" data-sijat="nominatiivi,partitiivi,monikko,mon.part"></div>
<div class="sijataulu" data-sana="makkara" data-sijat="nominatiivi,partitiivi,monikko,mon.part"></div>
<ul class="esim">
  <li class="s" data-pt="Eu queria bananas.">Haluaisin banaaneja.</li>
  <li class="s" data-pt="A Purjo tem muitas fotos.">Purjolla on paljon kuvia.</li>
  <li class="s" data-pt="Duas bananas, por favor.">Kaksi banaania, kiitos.</li>
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
  <li><b>“Mais barato” é uma palavra só:</b> <span class="fi">halvempi</span>, nunca <span class="pala">enemmän halpa</span> (“mais barato” palavra por palavra).</li>
  <li><b>“Melhor” é irregular:</b> <span class="fi">hyvä → parempi → paras</span>, nunca <span class="pala">hyvempi</span>.</li>
  <li><b>“Do que” é kuin:</b> <span class="fi">Juusto on kalliimpi kuin kahvi.</span> As duas coisas na mesma forma.</li>
  <li><b>kumpi × mikä:</b> entre dois, <span class="fi">kumpi</span>; entre muitos, <span class="fi">mikä</span>.</li>
  <li><b>Número + singular:</b> <span class="fi">kaksi banaania</span>, nunca <span class="pala">kaksi banaaneja</span>. Sem número, várias coisas: <span class="fi">banaaneja</span>.</li>
  <li><b>Sem nasal:</b> <span class="fi">kana, Suomi, banaani</span> com vogais orais.</li>
</ul>`
    }
  ]
});
