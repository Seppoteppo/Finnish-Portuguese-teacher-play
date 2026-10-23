/* Tottakai, lição 9: kaamos ja sää, matkalaukku Brasiliaan ja Habituuri-messut (Passon jakso 9 Maian näkökulmasta;
   OPPITUNNIT_6_20.md §5). Oma materiaali, ei kirjan tekstiä. Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t09): joulukuun alku, kello kolme ja melkein pimeää. Dialogi A (16 repliikkiä: Maia ja Jay, pipo, hanskat,
     villasukat), Frases prontas, kikka A: television sääennuste (.tv, juontaja saajuontaja = mies 8; Helsinki −5 ja lunta,
     Lappi ja kaamos, Belo Horizonte +28 ja sadetta: joulu on Brasiliassa kesällä), sanasto ja sää-ilmaukset, ääntäminen
     (loppukahdennus: Tule tänne! kuuluu ”tulet tänne”), tehtävät 1–3.
   - osa B (#t09-b): pakkaaminen ja käsky (Ota! Älä ota!), kikka B: Matkalaukku-peli (assets/pelit.js, Maian käskyt
     äänellä nainen0, monikko näkyy), monikko -t astevaihteluineen, dialogi B Habituuri-messuilla (16 repliikkiä:
     Paljonko tämä maksaa? Maian ensimmäinen myyty taulu, 300 €; Purjo ylpeä, Hiisi myöhässä ja auto bussipysäkillä 😐),
     tehtävät 4–9, kulttuuri (kaamos ja valo, Habituuri = keksitty messu), Na rua (tuu, mee, kato), kotitehtävä, itsearvio.
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat uskoa (En usko! Usko pois.), pois, ehkä, pian, jos (fraasina),
   muu (jotain muuta), riittää, heti, jättää, varma (tuoda ei: tuo/tuon-sekaannus); dialogit 16 + 16; sanasto 53 → 39; sivun sanalistat 25 → 12.
   Kaikki puhuvat kirjakieltä; puhekieli vain Na rua -nurkassa. Imperatiivi lunastaa lupaukset ”o imperativo · lição 9”
   (t00 Kuuntele! Katso! Odota!, t05 Puhu hitaasti!). Monikon partitiivi (Älä ota hanskoja!) ja objektin -n (Otan sen!)
   vain tunnistukseen, rehellisin viittauksin (lições 11 ja 12). Muodot, joiden luenta olisi muuten väärä, on kiinnitetty
   data-l:llä (pakata:imper.2s, syödä:imper.2s, oikea#2, olla#2). Sivuhahmot: saajuontaja (mies 8) ja messuasiakas
   (nainen 5), kasvot assets/oppaat.js. Televisio: ääni tulee .tv:n data-h:sta (hahmot.saajuontaja), data-aani +
   data-vaihto kertovat saman roolin äänipoiminnalle; komponentit.js tvKielet merkitsee käännösrivit pt-BR:ksi. */
Kurssi.lisaa({
  id: 't09',
  lyhyt: '9',
  jakso: 'Lição 9',
  otsikko: 'O tempo e a mala: o plural -t e as ordens (Ota! Älä ota!)',
  lahde: 'Tema: o tempo no inverno, o escuro de dezembro, a mala para o Brasil e a feira Habituuri · Gramática: o plural -t (pipot, kengät), o imperativo para você (Ota! Älä ota!), os meses e as estações (joulukuussa, talvella) · Pronúncia: a consoante que dobra depois da ordem (Tule tänne!)',
  aiheet: ['luonto', 'aika', 'koti', 'raha'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga e pintora; expõe pela primeira vez' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; quer levar o casaco de inverno para o Brasil' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; orgulhosa da Maia' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; estaciona onde quer' },
    saajuontaja: { nimi: 'Apresentador', tyyppi: 'mies', vaihto: 8, kuvaus: 'apresentador da previsão do tempo na TV' },
    messuasiakas: { nimi: 'Cliente', tyyppi: 'nainen', vaihto: 5, kuvaus: 'visitante da feira; procura um quadro para a sala' }
  },

  sanasto: [
    'sää', 'sääennuste', 'aste', 'pakkanen', 'lumi', 'sade', 'sataa', 'aurinko', 'paistaa', 'kaamos', 'pimeä', 'lyhyt',
    'talvi', 'kevät', 'kesä', 'syksy', 'joulukuu',
    'pipo', 'hanska', 'sukka', 'villasukka', 'kenkä', 'takki', 'toppatakki', 'sandaali', 'aurinkolasi', 'sateenvarjo',
    'matkalaukku', 'pakata', 'unohtaa', 'jättää', 'uskoa', 'ehkä', 'pian', 'valmis', 'ylpeä', 'varma', 'riittää'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · O tempo e o escuro',
      html: `
<ul class="tavoitteet">
  <li>Parte A: você fala do tempo (<span class="fi">Sataa lunta. Pakkasta on viisi astetta.</span>), entende a previsão na TV e reconhece o plural <span class="fi pala">-t</span>: <span class="fi">pipot, hanskat, kengät</span>.</li>
  <li>Parte B: você dá ordens (<span class="fi">Ota aurinkolasit! Älä ota toppatakkia!</span>), forma o plural e pergunta o preço: <span class="fi">Paljonko tämä maksaa?</span></li>
</ul>
<p data-paikka="hameentie-marraskuu">Começo de dezembro em Helsinque. O sol nasce depois das nove e se põe pouco depois das três da tarde; com nuvens, às três já parece noite. Faltam duas semanas para a viagem de Natal ao Brasil, e no fim de semana a Maia expõe pela primeira vez na feira Habituuri. Hoje, terça-feira, ela só quer ir ao mercado.</p>

<section class="osio" data-paikka="hameentie-marraskuu">
  <h2>Diálogo A: <span class="fi">Pakkasta on viisi astetta</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Repare nas coisas que a Maia leva: <span class="fi">hanskat, villasukat, kengät</span> terminam em <span class="fi pala">-t</span>, o plural. E nas ordens do Jay: <span class="fi">Ota!</span>, <span class="fi">Kuuntele!</span>. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t09-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="Começo de dezembro, terça-feira. A Maia e o Jay estão em casa. São três horas, mas lá fora já está quase escuro.">Joulukuun alku, tiistai. Maia ja Jay <span data-l="olla#2">ovat</span> kotona. Kello on kolme, mutta ulkona <span data-l="olla#2">on</span> jo melkein pimeää.</p>
    <p class="s" data-h="maia" data-pt="Jay, olhe lá fora! São só três horas, e já está escuro!">Jay, katso ulos! Kello on vasta kolme, ja on jo pimeää!</p>
    <p class="s" data-h="jay" data-pt="Bem-vinda a dezembro. Em dezembro o dia é curto.">Tervetuloa joulukuuhun. Joulukuussa päivä on lyhyt.</p>
    <p class="s" data-h="maia" data-pt="E frio. Eu vou ao mercado. Onde está o gorro?">Ja kylmä. Minä menen kauppaan. Missä pipo on?</p>
    <p class="s" data-h="jay" data-pt="Aqui. Pegue o gorro e as luvas. Faz cinco graus negativos.">Tässä. Ota pipo ja hanskat. Pakkasta on viisi astetta.</p>
    <p class="s" data-h="maia" data-pt="Luvas? Eu só tenho uma luva.">Hanskat? Minulla on vain yksi hanska.</p>
    <p class="s" data-h="jay" data-pt="De novo? Então pegue estas luvas. E as meias de lã!">Taas? Ota sitten nämä hanskat. Ja villasukat!</p>
    <p class="s" data-h="maia" data-pt="Gorro, luvas, meias de lã, sapatos… Em Belo Horizonte eu só tenho sandálias.">Pipo, hanskat, villasukat, kengät… Belo Horizontessa minulla on vain sandaalit.</p>
    <p class="s" data-h="kertoja" data-pt="Na TV está passando a previsão do tempo.">Televisiossa on sääennuste.</p>
    <p class="s" data-h="jay" data-pt="Escute! Em Helsinque amanhã vai nevar.">Kuuntele! Helsingissä sataa huomenna lunta.</p>
    <p class="s" data-h="maia" data-pt="Neve de novo? Não acredito!">Taas lunta? En usko!</p>
    <p class="s" data-h="jay" data-pt="Pode acreditar. Aqui é inverno.">Usko pois. Täällä on talvi.</p>
    <p class="s" data-h="maia" data-pt="E em Belo Horizonte estão vinte e oito graus! Lá agora é verão.">Ja Belo Horizontessa on kaksikymmentäkahdeksan astetta lämmintä! Siellä on nyt kesä.</p>
    <p class="s" data-h="jay" data-pt="Verão em dezembro? Então eu não preciso de gorro.">Kesä joulukuussa? Sitten minä en tarvitse pipoa.</p>
    <p class="s" data-h="maia" data-pt="Não precisa. Mas lá chove muito, e a chuva é quente.">Et tarvitse. Mutta siellä sataa paljon, ja sade on lämmin.</p>
    <p class="s" data-h="jay" data-pt="Chuva quente… Que bom. Espere, eu também vou ao mercado, se você quiser!">Lämmin sade… Hyvä. Odota, minä tulen myös kauppaan, jos haluat!</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde estas como blocos. Algumas são gramática desta lição, outras vêm mais tarde:</p>
    <ul>
      <li><span class="fi">Pakkasta on viisi astetta.</span> = faz cinco graus negativos · frase fixa do tempo: <span class="fi">pakkasta</span> e <span class="fi">astetta</span> ficam no partitivo</li>
      <li><span class="fi">kaksikymmentäkahdeksan astetta lämmintä</span> = vinte e oito graus (positivos) · <span class="fi">lämmintä</span> = “de calor”</li>
      <li><span class="fi">Sataa lunta.</span> = está nevando · o tempo muitas vezes não tem sujeito: <span class="fi">Sataa.</span> = chove</li>
      <li><span class="fi">Ota pipo!</span> <span class="fi">Kuuntele!</span> <span class="fi">Odota!</span> = pegue o gorro! escute! espere! · as ordens (o imperativo): parte B desta lição</li>
      <li><span class="fi">Joulukuussa päivä on lyhyt.</span> = em dezembro o dia é curto · o mês com <span class="fi pala">-ssa</span> diz “quando?”</li>
      <li><span class="fi">Et tarvitse.</span> = não precisa · a resposta curta repete o verbo (lição 1)</li>
      <li><span class="fi">En usko!</span> = não acredito! · <span class="fi">Usko pois.</span> = pode acreditar · <span class="fi">uskoa</span> = acreditar; <span class="fi">pois</span> = embora, de vez</li>
      <li><span class="fi">jos haluat</span> = se você quiser · <span class="fi">jos</span> = se; a frase com <span class="fi">jos</span> inteira: lição 20</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="bh-sade">
  <h2>Na TV: <span class="fi">sääennuste</span></h2>
  <p class="ohje">Aperte <b>Ver a transmissão</b> e ouça a previsão primeiro sem legenda. Onde vai nevar? Onde o sol não nasce? Quantos graus faz em Belo Horizonte? Depois ligue a legenda e o português, se precisar. As perguntas estão no exercício 1.</p>
  <div class="tv" data-h="saajuontaja" data-aani="mies" data-vaihto="8" data-kanava="Sääennuste · tiistai" data-nauha="Sääennuste · Helsinki −5° · Lappi −20° · Belo Horizonte +28°">
    <div data-kortti="Helsinki" data-saa="🌨️" data-lampo="−5 °C"></div>
    <div data-kortti="Lappi" data-saa="🌌" data-lampo="−20 °C"></div>
    <div data-kortti="Belo Horizonte" data-saa="⛈️" data-lampo="+28 °C"></div>
    <p data-pt="Boa noite! Aqui está a previsão do tempo.">Hyvää iltaa! Tässä on sääennuste.</p>
    <p data-kortti="Helsinki" data-pt="Em Helsinque, amanhã faz cinco graus negativos, e logo neva.">Helsingissä on huomenna viisi astetta pakkasta, ja pian sataa lunta.</p>
    <p data-kortti="Lappi" data-pt="Na Lapônia é a noite polar: faz vinte graus negativos, e o sol não nasce.">Lapissa on kaamos. Pakkasta on kaksikymmentä astetta, ja aurinko ei nouse.</p>
    <p data-kortti="Belo Horizonte" data-pt="E no Brasil? Em Belo Horizonte faz vinte e oito graus, e à noite talvez chova.">Entä Brasiliassa? Belo Horizontessa on kaksikymmentäkahdeksan astetta lämmintä, ja illalla sataa ehkä.</p>
    <p data-pt="Em dezembro é verão no Brasil. Boa noite!">Joulukuussa Brasiliassa on kesä. Hyvää yötä!</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>1. A previsão do tempo: você entendeu?</h3>
    <p class="ohje">Responda pela transmissão da TV. Pode ver de novo quantas vezes quiser.</p>
    <div class="valinta" data-oikea="Helsingissä">
      <p class="kysymys"><span class="fi">Missä sataa huomenna lunta?</span></p>
      <div class="vaihtoehdot"><button type="button">Belo Horizontessa</button><button type="button">Helsingissä</button><button type="button">Lapissa</button></div>
    </div>
    <div class="valinta" data-oikea="Lapissa">
      <p class="kysymys"><span class="fi">Missä <span data-l="olla#2">on</span> kaamos?</span></p>
      <div class="vaihtoehdot"><button type="button">Lapissa</button><button type="button">Helsingissä</button><button type="button">Brasiliassa</button></div>
    </div>
    <div class="valinta" data-oikea="Kaksikymmentäkahdeksan.">
      <p class="kysymys"><span class="fi">Kuinka monta astetta Belo Horizontessa on?</span></p>
      <div class="vaihtoehdot"><button type="button">Kaksikymmentä.</button><button type="button">Viisi.</button><button type="button">Kaksikymmentäkahdeksan.</button></div>
    </div>
    <div class="valinta" data-oikea="kesä">
      <p class="kysymys">Em dezembro, no Brasil, é…</p>
      <div class="vaihtoehdot"><button type="button">talvi</button><button type="button">kesä</button><button type="button">syksy</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="O tempo e a roupa de inverno" data-sanat="sää,aste,pakkanen,lumi,sataa,kaamos,talvi,kesä,pipo,hanska,kenkä,sukka"></div>
  <p>As outras palavras da lição estão no <a href="#t09-vocabulario">Vocabulário da lição</a>.</p>
  <div class="saanto">
    <h3>Como falar do tempo</h3>
    <p>As frases do tempo muitas vezes não têm sujeito, como “chove” em português. A temperatura vai no partitivo: <span class="fi">pakkasta</span> (frio abaixo de zero) ou <span class="fi">lämmintä</span> (calor), e os graus também: <span class="fi">astetta</span>.</p>
    <ul class="esim">
      <li class="s" data-pt="Está chovendo.">Sataa.</li>
      <li class="s" data-pt="Está nevando.">Sataa lunta.</li>
      <li class="s" data-pt="Faz cinco graus negativos.">Pakkasta on viisi astetta.</li>
      <li class="s" data-pt="No verão faz calor.">Kesällä on lämmin.</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>Pronúncia: a consoante que dobra</h2>
  <p>No diálogo, o Jay diz <span class="fi">Ota pipo!</span>, mas o que se ouve é <span class="fi pala">otap pipo</span>. Depois de uma ordem para “você”, a primeira consoante da palavra seguinte sai <b>dobrada</b>. Isso não se escreve, mas todo finlandês faz. É o resto de uma consoante que essas formas tinham no fim, há muito tempo. Ouça:</p>
  <ul class="esim">
    <li class="s" data-pt="Venha cá! (soa: tulet tänne)">Tule tänne!</li>
    <li class="s" data-pt="Pegue o gorro! (soa: otap pipo)">Ota pipo!</li>
    <li class="s" data-pt="Vá para casa! (soa: menek kotiin)">Mene kotiin!</li>
    <li class="s" data-pt="Aqui está! (soa: oleh hyvä)">Ole hyvä!</li>
  </ul>
  <div class="saanto">
    <h3>Ordem ou afirmação?</h3>
    <p>A forma de “ele” termina em <b>vogal longa</b> e não dobra nada: <span class="fi">Jay tulee tänne.</span> (o Jay vem para cá). A ordem termina em <b>vogal curta</b> e dobra a consoante seguinte: <span class="fi">Jay, tule tänne!</span> (Jay, venha cá!). Antes de vogal, a dobra vira uma paradinha: <span class="fi">Ota aurinkolasit!</span> Ligue as duas palavras, sem pausa no meio. A dobra não é grito: aparece também numa ordem dita baixinho.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="sornainen-vaasanaukio">
  <h2>Exercícios: ouvir e reconhecer</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>2. Ouça: ordem ou afirmação?</h3>
    <p class="ohje">Aperte ▶. A ordem tem vogal curta e dobra a consoante seguinte; a afirmação tem vogal longa. Escolha o que você ouviu.</p>
    <div class="valinta" data-kuuntele="Jay, tule tänne!" data-oikea="Jay, tule tänne!">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">Jay, tule tänne!</button><button type="button">Jay tulee tänne.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Maia ostaa maitoa." data-oikea="Maia ostaa maitoa.">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">Maia, osta maitoa!</button><button type="button">Maia ostaa maitoa.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hiisi, puhu hitaasti!" data-oikea="Hiisi, puhu hitaasti!">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">Hiisi puhuu hitaasti.</button><button type="button">Hiisi, puhu hitaasti!</button></div>
    </div>
    <div class="valinta" data-kuuntele="Purjo katsoo tätä." data-oikea="Purjo katsoo tätä.">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">Purjo katsoo tätä.</button><button type="button">Purjo, katso tätä!</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Uma coisa ou várias? Ligue</h3>
    <p class="ohje">O plural termina em <span class="fi pala">-t</span>. Repare na consoante que muda: <span class="fi">kenkä → kengät</span>.</p>
    <ul class="yhdista">
      <li data-pari="o gorro">pipo</li>
      <li data-pari="os gorros">pipot</li>
      <li data-pari="a luva">hanska</li>
      <li data-pari="as luvas">hanskat</li>
      <li data-pari="o sapato">kenkä</li>
      <li data-pari="os sapatos">kengät</li>
      <li data-pari="a meia">sukka</li>
      <li data-pari="as meias">sukat</li>
    </ul>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · A mala e a feira',
      html: `
<ul class="tavoitteet">
  <li>Você dá ordens a quem você trata por <span class="fi">sinä</span>: <span class="fi">Ota!</span>, <span class="fi">Tule!</span>, e proíbe: <span class="fi">Älä ota!</span></li>
  <li>Você forma o plural <span class="fi pala">-t</span>, também com a consoante que muda: <span class="fi">kenkä → kengät</span>, <span class="fi">paita → paidat</span>.</li>
  <li>Você pergunta o preço e entende centenas: <span class="fi">Paljonko tämä maksaa? – Kolmesataa euroa.</span></li>
</ul>

<p data-paikka="sornainen-kurvi">Sexta à noite em Sörnäinen. A Maia, que um dia chegou à Finlândia de sandálias em novembro (lição 0), agora faz a mala do Jay para o verão de Belo Horizonte. O Jay quer levar tudo o que é de inverno. A Maia manda, o Jay obedece. Mais ou menos.</p>

<section class="osio" data-osa="gramatica" data-paikka="sornainen-kurvi">
  <h2>Gramática 1 · Ordens: <span class="fi">Ota! Älä ota!</span></h2>
  <p>Você já usa ordens desde a lição 0: <span class="fi">Kuuntele! Katso! Odota!</span> Na lição 5, a Maia pediu à Purjo: <span class="fi">Puhu hitaasti!</span> Agora a regra. Para dar uma ordem a quem você trata por <span class="fi">sinä</span> (você), pegue a forma do “eu” e tire o <span class="fi pala">-n</span>:</p>
  <table class="taivutus">
    <tr><th>verbo</th><th>eu</th><th>ordem</th><th>português</th></tr>
    <tr><td><span class="fi">ottaa</span></td><td><span class="fi">otan</span></td><td><span class="fi">Ota!</span></td><td>pegue!, leve!</td></tr>
    <tr><td><span class="fi">tulla</span></td><td><span class="fi">tulen</span></td><td><span class="fi">Tule!</span></td><td>venha!</td></tr>
    <tr><td><span class="fi">mennä</span></td><td><span class="fi">menen</span></td><td><span class="fi">Mene!</span></td><td>vá!</td></tr>
    <tr><td><span class="fi">syödä</span></td><td><span class="fi">syön</span></td><td><span class="fi"><span data-l="syödä:imper.2s">Syö</span>!</span></td><td>coma!</td></tr>
    <tr><td><span class="fi">pakata</span></td><td><span class="fi">pakkaan</span></td><td><span class="fi"><span data-l="pakata:imper.2s">Pakkaa</span>!</span></td><td>faça a mala!</td></tr>
    <tr><td><span class="fi">olla</span></td><td><span class="fi">olen</span></td><td><span class="fi">Ole!</span></td><td>seja!, fique!</td></tr>
    <tr><td><span class="fi">jättää</span></td><td><span class="fi">jätän</span></td><td><span class="fi">Jätä!</span></td><td>deixe!</td></tr>
    <tr><td><span class="fi">antaa</span></td><td><span class="fi">annan</span></td><td><span class="fi">Anna!</span></td><td>dê!, passe!</td></tr>
  </table>
  <p>Para proibir, use <span class="fi">älä</span>, o verbo de negação das ordens, e depois a mesma forma que vem depois de <span class="fi">en</span>: <span class="fi">en ota → Älä ota!</span></p>
  <ul class="esim">
    <li class="s" data-pt="Não leve o casaco de inverno!">Älä ota toppatakkia!</li>
    <li class="s" data-pt="Não esqueça o guarda-chuva!">Älä unohda sateenvarjoa!</li>
    <li class="s" data-pt="Não venha!">Älä tule!</li>
    <li class="s" data-pt="Não deixe o gorro em casa!">Älä jätä pipoa kotiin!</li>
  </ul>
  <h3>Depois da ordem: forma básica, plural -t ou partitivo</h3>
  <p>A coisa que você manda levar também muda de forma. Uma coisa inteira: forma básica, sem nada (<span class="fi">Ota pipo!</span>). Várias: plural <span class="fi pala">-t</span> (<span class="fi">Ota aurinkolasit!</span>). Com <span class="fi">älä</span>: partitivo, como em toda negação (lição 3): <span class="fi">Älä ota pipoa!</span> Com várias coisas, o partitivo plural: <span class="fi">Älä ota hanskoja!</span> Esse você só precisa reconhecer por enquanto; ele vem na lição 11.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> em português, a ordem para “você” usa a forma de “ele” (pegue, leve). Em finlandês, a ordem não tem terminação nenhuma: <span class="fi">Ota!</span>, nunca <span class="fi">otat</span> (= você pega). E “não leve” é <span class="fi">Älä ota!</span>, nunca <span class="fi pala">ei ota</span>: <span class="fi">ei</span> é “ele, ela não”.</p>
  </div>
  <div class="muista">
    <p><b>Lembre:</b> a ordem finlandesa não é grosseira. Em casa e entre amigos, <span class="fi">Ota!</span> é normal. Para suavizar, use o nome (<span class="fi">Jay, tule tänne!</span>) ou <span class="fi">vain</span>: <span class="fi">Ota vain!</span> = pode pegar, fique à vontade.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="sornainen-kurvi">
  <h2>Exercícios da parte B</h2>
  <div class="peli-upotus" data-peli="matkalaukku"></div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. A Maia manda: escreva a ordem</h3>
    <p class="ohje">Escreva a ordem do verbo entre parênteses: a forma do “eu” sem o <span class="fi pala">-n</span>. Depois de <span class="fi">älä</span>, a mesma forma. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p><span class="aukko" data-oikea="Ota"></span> aurinkolasit! <span data-ei-kuplaa>(ottaa)</span></p>
      <p><span class="aukko" data-oikea="Tule"></span> tänne, Jay! <span data-ei-kuplaa>(tulla)</span></p>
      <p><span class="aukko" data-oikea="Katso"></span> ulos! <span data-ei-kuplaa>(katsoa)</span></p>
      <p>Älä <span class="aukko" data-oikea="ota"></span> toppatakkia! <span data-ei-kuplaa>(ottaa)</span></p>
      <p><span class="aukko" data-oikea="Pakkaa"></span> matkalaukku! <span data-ei-kuplaa>(pakata)</span></p>
      <p>Älä <span class="aukko" data-oikea="unohda"></span> sateenvarjoa! <span data-ei-kuplaa>(unohtaa)</span></p>
      <p><span class="aukko" data-oikea="Mene"></span> kauppaan! <span data-ei-kuplaa>(mennä)</span></p>
      <p><span class="aukko" data-oikea="Puhu"></span> hitaasti! <span data-ei-kuplaa>(puhua)</span></p>
      <p><span class="aukko" data-oikea="Anna"></span> pipo, kiitos! <span data-ei-kuplaa>(antaa)</span></p>
      <p>Älä <span class="aukko" data-oikea="jätä"></span> hanskaa kotiin! <span data-ei-kuplaa>(jättää)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Ouça a Maia: para a mala ou para o armário?</h3>
    <p class="ohje">Aperte ▶ e ouça a ordem. <span class="fi">Ota…!</span> = vai para a mala. <span class="fi">Älä ota…!</span> = fica no armário. Responda para onde a coisa vai.</p>
    <div class="valinta" data-kuuntele="Ota sandaalit!" data-oikea="Matkalaukkuun">
      <p class="kysymys"><span class="fi">Mihin sandaalit menevät?</span></p>
      <div class="vaihtoehdot"><button type="button">Matkalaukkuun</button><button type="button">Kaappiin</button></div>
    </div>
    <div class="valinta" data-kuuntele="Älä ota huivia!" data-oikea="Kaappiin">
      <p class="kysymys"><span class="fi">Mihin huivi menee?</span></p>
      <div class="vaihtoehdot"><button type="button">Matkalaukkuun</button><button type="button">Kaappiin</button></div>
    </div>
    <div class="valinta" data-kuuntele="Ota pipo!" data-oikea="Matkalaukkuun">
      <p class="kysymys"><span class="fi">Mihin pipo menee?</span></p>
      <div class="vaihtoehdot"><button type="button">Kaappiin</button><button type="button">Matkalaukkuun</button></div>
    </div>
    <div class="valinta" data-kuuntele="Älä ota aurinkovoidetta!" data-oikea="Kaappiin">
      <p class="kysymys"><span class="fi">Mihin aurinkovoide menee?</span></p>
      <div class="vaihtoehdot"><button type="button">Kaappiin</button><button type="button">Matkalaukkuun</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="sornainen-kurvi">
  <h2>Gramática 2 · O plural -t: <span class="fi">pipot, kengät</span></h2>
  <p>Quando há várias coisas e elas são o sujeito (<span class="fi">Hanskat <span data-l="olla#2">ovat</span> kaapissa.</span>), o objeto de uma ordem (<span class="fi">Ota hanskat!</span>) ou o que alguém tem (<span class="fi">Minulla on sandaalit.</span>), o plural termina em <span class="fi pala">-t</span>. Para formar: pegue o genitivo (lição 5) e troque o <span class="fi pala">-n</span> por <span class="fi pala">-t</span>.</p>
  <table class="taivutus">
    <tr><th>uma coisa</th><th>genitivo</th><th>várias</th></tr>
    <tr><td><span class="fi">pipo</span><span class="kaannos" lang="pt-BR">gorro</span></td><td><span class="fi">pipon</span></td><td><span class="fi">pipot</span><span class="kaannos" lang="pt-BR">gorros</span></td></tr>
    <tr><td><span class="fi">hanska</span><span class="kaannos" lang="pt-BR">luva</span></td><td><span class="fi">hanskan</span></td><td><span class="fi">hanskat</span><span class="kaannos" lang="pt-BR">luvas</span></td></tr>
    <tr><td><span class="fi">kenkä</span><span class="kaannos" lang="pt-BR">sapato</span></td><td><span class="fi">kengän</span></td><td><span class="fi">kengät</span><span class="kaannos" lang="pt-BR">sapatos</span></td></tr>
    <tr><td><span class="fi">sukka</span><span class="kaannos" lang="pt-BR">meia</span></td><td><span class="fi">sukan</span></td><td><span class="fi">sukat</span><span class="kaannos" lang="pt-BR">meias</span></td></tr>
    <tr><td><span class="fi">paita</span><span class="kaannos" lang="pt-BR">camisa</span></td><td><span class="fi">paidan</span></td><td><span class="fi">paidat</span><span class="kaannos" lang="pt-BR">camisas</span></td></tr>
    <tr><td><span class="fi">possu</span><span class="kaannos" lang="pt-BR">porquinho</span></td><td><span class="fi">possun</span></td><td><span class="fi">possut</span><span class="kaannos" lang="pt-BR">porquinhos</span></td></tr>
    <tr><td><span class="fi">ihminen</span><span class="kaannos" lang="pt-BR">pessoa</span></td><td><span class="fi">ihmisen</span></td><td><span class="fi">ihmiset</span><span class="kaannos" lang="pt-BR">pessoas</span></td></tr>
  </table>
  <p>Repare: <span class="fi">kenkä → kengät</span>, <span class="fi">sukka → sukat</span>, <span class="fi">paita → paidat</span>. O plural usa o mesmo radical do genitivo, então a consoante que muda (lição 8) muda aqui também. E as palavras em <span class="fi pala">-nen</span> viram <span class="fi pala">-set</span>: <span class="fi">ihminen → ihmiset</span>.</p>
  <div class="huomio">
    <p><b>Armadilha:</b> depois de número, nada de plural: <span class="fi">kaksi kenkää</span> (partitivo singular, lição 3), nunca <span class="fi pala">kaksi kengät</span>. E o <span class="fi pala">-t</span> só serve nessas posições. Nos outros casos, o plural usa <span class="fi pala">-i-</span>: <span class="fi">kengissä</span> (nos sapatos). Isso vem nas lições 11, 17 e 19.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="sornainen-kurvi">
  <h2>Exercícios: o plural</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Uma coisa, várias coisas</h3>
    <p class="ohje">Escreva o plural <span class="fi pala">-t</span>. Entre parênteses estão a forma básica e o genitivo.</p>
    <div class="aukot" lang="fi-FI">
      <p>Ota <span class="aukko" data-oikea="hanskat"></span>! <span data-ei-kuplaa>(hanska, hanskan)</span></p>
      <p>Missä <span class="aukko" data-oikea="kengät"></span> <span data-l="olla#2">ovat</span>? <span data-ei-kuplaa>(kenkä, kengän)</span></p>
      <p><span class="aukko" data-oikea="Sukat"></span> <span data-l="olla#2">ovat</span> kaapissa. <span data-ei-kuplaa>(sukka, sukan)</span></p>
      <p>Ota <span class="aukko" data-oikea="paidat"></span>! <span data-ei-kuplaa>(paita, paidan)</span></p>
      <p><span class="aukko" data-oikea="Ihmiset"></span> katsovat taulua. <span data-ei-kuplaa>(ihminen, ihmisen)</span></p>
      <p>Ota <span class="aukko" data-oikea="villasukat"></span>! <span data-ei-kuplaa>(villasukka, villasukan)</span></p>
      <p>Maian <span class="aukko" data-oikea="possut"></span> <span data-l="olla#2">ovat</span> taulussa. <span data-ei-kuplaa>(possu, possun)</span></p>
      <p>Ota <span class="aukko" data-oikea="aurinkolasit"></span>! <span data-ei-kuplaa>(aurinkolasi, aurinkolasin)</span></p>
    </div>
  </div>
</section>

<p data-paikka="helsingin-kaupunginosat">Sábado. A Habituuri é uma grande feira de design e decoração em Helsinque (inventada para esta história): móveis, luminárias, tapetes e, num canto, o estande da Maia. Nas paredes está a série que ela pintou na lição 8: <span class="fi">Onnellinen kuin possu</span>, “feliz como um porquinho”. A Purjo veio cedo. O Jay foi buscar café. O Hiisi vem de carro.</p>

<section class="osio" data-paikka="helsingin-kaupunginosat">
  <h2>Diálogo B: <span class="fi">Paljonko tämä maksaa?</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure o plural (<span class="fi">possut, ihmiset</span>), uma ordem com <span class="fi">älä</span> e o preço em centenas. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t09-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="Sábado, Habituuri. No estande da Maia há seis quadros: a série “Feliz como um porquinho”.">Lauantai, Habituuri. Maian osastolla on kuusi taulua: sarja ”Onnellinen kuin possu”.</p>
    <p class="s" data-h="purjo" data-pt="Ai, esses porquinhos! Maia, estou tão orgulhosa. (em “inglês de rali”:) Estou tão orgulhosa!">Voi, nämä possut! Maia, minä olen niin ylpeä. <span class="pala" lang="en">Ai em sou proud!</span></p>
    <p class="s" data-h="maia" data-pt="Obrigada, Purjo. Mas as pessoas só olham.">Kiitos, Purjo. Mutta ihmiset vain katsovat.</p>
    <p class="s" data-h="kertoja" data-pt="Uma mulher chega ao estande. Ela olha um quadro.">Osastolle tulee nainen. Hän katsoo taulua.</p>
    <p class="s" data-h="messuasiakas" data-pt="Com licença, quanto custa este?">Anteeksi, paljonko tämä maksaa?</p>
    <p class="s" data-h="maia" data-pt="Este… trezentos euros.">Tämä… kolmesataa euroa.</p>
    <p class="s" data-h="messuasiakas" data-pt="O porquinho está tão feliz. Vou levar!">Possu on niin onnellinen. Otan sen!</p>
    <p class="s" data-h="maia" data-pt="Obrigada! Muito obrigada! Quer mais alguma coisa?">Kiitos! Kiitos paljon! Haluatko jotain muuta?</p>
    <p class="s" data-h="messuasiakas" data-pt="Não, obrigada. Um porquinho basta.">En, kiitos. Yksi possu riittää.</p>
    <p class="s" data-h="kertoja" data-pt="Agora chegam o Jay e o Hiisi. Tarde demais.">Nyt tulevat Jay ja Hiisi. Liian myöhään.</p>
    <p class="s" data-h="purjo" data-pt="Jay, Hiisi! O primeiro quadro da Maia! Trezentos euros! Agora a Maia é uma artista de verdade!">Jay, Hiisi! Maian ensimmäinen taulu! Kolmesataa euroa! Nyt Maia on <span data-l="oikea#2">oikea</span> taiteilija!</p>
    <p class="s" data-h="jay" data-pt="Que ótimo, Maia! Parabéns!"><span data-l="hieno#2">Hienoa</span>, Maia! Onneksi olkoon!</p>
    <p class="s" data-h="hiisi" data-puhu="Onneksi olkoon. Ja älä kysy, missä auto on." data-pt="Parabéns. E não pergunte onde está o carro. (cara de paisagem)">Onneksi olkoon. Ja älä kysy, missä auto on. <span class="emoji">😐</span></p>
    <p class="s" data-h="maia" data-pt="Hiisi… onde está o carro?">Hiisi… missä auto on?</p>
    <p class="s" data-h="hiisi" data-puhu="Bussipysäkillä." data-pt="No ponto de ônibus. (cara de paisagem)">Bussipysäkillä. <span class="emoji">😐</span></p>
    <p class="s" data-h="purjo" data-pt="Hiisi! Vá tirar o carro de lá agora mesmo! Tem certeza de que o ônibus não vem?">Hiisi! Mene heti! Oletko varma, että bussi ei tule?</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Paljonko tämä maksaa?</span> = quanto custa isto? · você já sabe desde a lição 3</li>
      <li><span class="fi">Otan sen!</span> = vou levar! · <span class="fi">sen</span>: a coisa inteira como objeto, lição 12</li>
      <li><span class="fi">Onneksi olkoon!</span> = parabéns! · expressão fixa (lição 7)</li>
      <li><span class="fi">Liian myöhään.</span> = tarde demais</li>
      <li><span class="fi">jotain muuta</span> = mais alguma coisa, outra coisa · <span class="fi">Yksi riittää.</span> = um basta (<span class="fi">riittää</span> = bastar)</li>
      <li><span class="fi">Mene heti!</span> = vá agora mesmo! · <span class="fi">Oletko varma?</span> = tem certeza?</li>
      <li><span class="fi">Älä kysy!</span> = não pergunte! · a ordem negativa, Gramática 1 desta parte</li>
      <li><span class="fi">Onnellinen kuin possu</span> = feliz como um porquinho · <span class="fi">kuin</span> = como, nas comparações</li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsingin-kaupunginosat">
  <h2>Exercícios: na feira</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Você entendeu o diálogo B?</h3>
    <div class="valinta" data-oikea="Purjo.">
      <p class="kysymys"><span class="fi">Kuka on ylpeä?</span></p>
      <div class="vaihtoehdot"><button type="button">Hiisi.</button><button type="button">Purjo.</button><button type="button">Jay.</button></div>
    </div>
    <div class="valinta" data-oikea="Kolmesataa euroa.">
      <p class="kysymys"><span class="fi">Paljonko taulu maksaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kolmesataa euroa.</button><button type="button">Kaksisataa euroa.</button><button type="button">Kolme euroa.</button></div>
    </div>
    <div class="valinta" data-oikea="Possu.">
      <p class="kysymys"><span class="fi">Mikä on taulussa?</span></p>
      <div class="vaihtoehdot"><button type="button">Kissa.</button><button type="button">Auto.</button><button type="button">Possu.</button></div>
    </div>
    <div class="valinta" data-oikea="Bussipysäkillä.">
      <p class="kysymys"><span class="fi">Missä Hiiden auto on?</span></p>
      <div class="vaihtoehdot"><button type="button">Parkkipaikalla.</button><button type="button">Bussipysäkillä.</button><button type="button">Kotona.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>8. Ouça o preço</h3>
    <p class="ohje">Na feira, os preços estão em centenas. Aperte ▶ e escolha o número. <span class="fi">sata</span> = 100, <span class="fi">kaksisataa</span> = 200, <span class="fi">kolmesataa</span> = 300.</p>
    <div class="valinta" data-kuuntele="Kolmesataa euroa." data-oikea="300 €">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot"><button type="button">30 €</button><button type="button">300 €</button><button type="button">200 €</button></div>
    </div>
    <div class="valinta" data-kuuntele="Kaksisataa euroa." data-oikea="200 €">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot"><button type="button">200 €</button><button type="button">20 €</button><button type="button">300 €</button></div>
    </div>
    <div class="valinta" data-kuuntele="Sata euroa." data-oikea="100 €">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot"><button type="button">10 €</button><button type="button">1000 €</button><button type="button">100 €</button></div>
    </div>
    <div class="valinta" data-kuuntele="Kaksisataa viisikymmentä euroa." data-oikea="250 €">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot"><button type="button">205 €</button><button type="button">250 €</button><button type="button">150 €</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>9. Traduza para o finlandês</h3>
    <p class="ohje">Escreva em finlandês. Depois compare com o modelo.</p>
    <div class="kaanna"><p class="pt">Leve os óculos de sol!</p><p class="s" data-pt="Leve os óculos de sol!">Ota aurinkolasit!</p></div>
    <div class="kaanna"><p class="pt">Não leve o casaco de inverno!</p><p class="s" data-pt="Não leve o casaco de inverno!">Älä ota toppatakkia!</p></div>
    <div class="kaanna"><p class="pt">Em dezembro está escuro.</p><p class="s" data-pt="Em dezembro está escuro.">Joulukuussa on pimeää.</p></div>
    <div class="kaanna"><p class="pt">Com licença, quanto custa isto?</p><p class="s" data-pt="Com licença, quanto custa isto?">Anteeksi, paljonko tämä maksaa?</p></div>
    <div class="kaanna"><p class="pt">Custa trezentos euros.</p><p class="s" data-pt="Custa trezentos euros.">Se maksaa kolmesataa euroa.</p></div>
    <div class="kaanna"><p class="pt">Leve o guarda-chuva! Talvez chova.</p><p class="s" data-pt="Leve o guarda-chuva! Talvez chova.">Ota sateenvarjo! Ehkä sataa.</p></div>
  </div>
</section>

<aside class="kulttuuri" data-paikka="helsinki-lumi">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3><span class="fi">Kaamos</span>: o escuro de dezembro</h3>
  <figure class="kuva" data-kuva="kaamos-lappi"></figure>
  <p>No norte da Lapônia, o sol não nasce durante semanas no fim do ano: isso é o <span class="fi">kaamos</span>, a noite polar. Em Helsinque o sol nasce todos os dias, mas no dia mais curto, perto de 21 de dezembro, fica só umas seis horas no céu, e muitas vezes escondido atrás das nuvens.</p>
  <p>Os finlandeses enfrentam o escuro com luz: <span class="fi">kynttilä</span> (velas) na janela e na mesa, luzes de Natal nas ruas e nas varandas desde o fim de novembro, e a neve, que clareia tudo. Quase todo mundo usa um <span class="fi">heijastin</span>, um pequeno refletor pendurado no casaco ou na bolsa, para que os carros vejam o pedestre no escuro. E muita gente toma vitamina D no inverno, porque quase não há sol.</p>
  <p>A feira da história, a Habituuri, é inventada, mas Helsinque tem de verdade grandes feiras de design e decoração, onde artistas jovens mostram seu trabalho. O nome brinca com o finlandês: <span class="fi pala">tuuri</span> quer dizer “sorte” na língua do dia a dia. Para a Maia, deu sorte.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>As ordens da rua: mais curtas</h3>
  <p>Na fala, algumas ordens muito usadas encolhem: <span class="fi">tule</span> vira <span class="fi" data-rekisteri="puhe">tuu</span>, <span class="fi">mene</span> vira <span class="fi" data-rekisteri="puhe">mee</span> e <span class="fi">katso</span> vira <span class="fi" data-rekisteri="puhe">kato</span>. Você <b>não precisa</b> falar assim; só reconheça quando ouvir.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">Tule!</span></td><td><span class="fi" data-rekisteri="puhe">Tuu!</span></td><td>venha!</td></tr>
    <tr><td><span class="fi">Mene!</span></td><td><span class="fi" data-rekisteri="puhe">Mee!</span></td><td>vá!</td></tr>
    <tr><td><span class="fi">Katso!</span></td><td><span class="fi" data-rekisteri="puhe">Kato!</span></td><td>olhe!</td></tr>
  </table>
  <p class="s" data-h="jay" data-kirja="Tule tänne! Katso, sataa lunta!" data-pt="Vem cá! Olha, está nevando!">Tuu tänne! Kato, sataa lunta!</p>
  <p class="s" data-h="purjo" data-kirja="Mene jo, Hiisi! Bussi tulee!" data-pt="Vai logo, Hiisi! O ônibus está vindo!">Mee jo, Hiisi! Bussi tulee!</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="helsinki-lumi">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t09">
    <h3>Lição de casa</h3>
    <p>Escreva a previsão do tempo da sua cidade para amanhã, como o apresentador da TV: quantos graus, chuva ou sol. Depois escreva três ordens para alguém que vai viajar para lá: uma com <span class="fi">Ota</span> + plural, uma com <span class="fi">Ota</span> + forma básica e uma com <span class="fi">Älä ota</span> + partitivo. Leia em voz alta e cuide da consoante que dobra.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Em Belo Horizonte amanhã faz vinte e oito graus.">Belo Horizontessa on huomenna kaksikymmentäkahdeksan astetta lämmintä.</p>
      <p class="s" data-pt="À noite chove.">Illalla sataa.</p>
      <p class="s" data-pt="Leve os óculos de sol!">Ota aurinkolasit!</p>
      <p class="s" data-pt="Leve o guarda-chuva!">Ota sateenvarjo!</p>
      <p class="s" data-pt="Não leve o casaco de inverno!">Älä ota toppatakkia!</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t09">
    <li>Sei falar do tempo: Sataa lunta. Pakkasta on viisi astetta.</li>
    <li>Sei dizer quando: joulukuussa (em dezembro), talvella (no inverno).</li>
    <li>Sei formar o plural -t, também com gradação: pipot, kengät, paidat.</li>
    <li>Sei dar uma ordem (Ota! Tule!) e proibir (Älä ota!).</li>
    <li>Ouço a consoante que dobra: Tule tänne! soa “tulet tänne”.</li>
    <li>Sei perguntar o preço e entendo centenas: Paljonko tämä maksaa? – Kolmesataa euroa.</li>
  </ul>
</section>
`
    }
  ],

  kielioppi: [
    {
      id: 'kasky', otsikko: 'Ordens para você: Ota! Älä ota!', taso: 'essencial', hakuosa: 'h-imperatiivi', treeni: 't09-kasky',
      html: `
<p><b>Forma:</b> a forma do “eu” sem o <span class="fi pala">-n</span>: <span class="fi">otan → Ota!</span>, <span class="fi">tulen → Tule!</span>, <span class="fi">pakkaan → <span data-l="pakata:imper.2s">Pakkaa</span>!</span> <b>Negativo:</b> <span class="fi">älä</span> + a mesma forma: <span class="fi">Älä ota!</span></p>
<table class="taivutus">
  <tr><th>verbo</th><th>ordem</th><th>não!</th><th>português</th></tr>
  <tr><td><span class="fi">ottaa</span></td><td><span class="fi">Ota!</span></td><td><span class="fi">Älä ota!</span></td><td>pegue! · não pegue!</td></tr>
  <tr><td><span class="fi">tulla</span></td><td><span class="fi">Tule!</span></td><td><span class="fi">Älä tule!</span></td><td>venha! · não venha!</td></tr>
  <tr><td><span class="fi">mennä</span></td><td><span class="fi">Mene!</span></td><td><span class="fi">Älä mene!</span></td><td>vá! · não vá!</td></tr>
  <tr><td><span class="fi">katsoa</span></td><td><span class="fi">Katso!</span></td><td><span class="fi">Älä katso!</span></td><td>olhe! · não olhe!</td></tr>
  <tr><td><span class="fi">puhua</span></td><td><span class="fi">Puhu!</span></td><td><span class="fi">Älä puhu!</span></td><td>fale! · não fale!</td></tr>
  <tr><td><span class="fi">syödä</span></td><td><span class="fi"><span data-l="syödä:imper.2s">Syö</span>!</span></td><td><span class="fi">Älä syö!</span></td><td>coma! · não coma!</td></tr>
  <tr><td><span class="fi">unohtaa</span></td><td><span class="fi">Unohda!</span></td><td><span class="fi">Älä unohda!</span></td><td>esqueça! · não esqueça!</td></tr>
  <tr><td><span class="fi">pakata</span></td><td><span class="fi"><span data-l="pakata:imper.2s">Pakkaa</span>!</span></td><td><span class="fi">Älä pakkaa!</span></td><td>faça a mala! · não faça!</td></tr>
</table>
<p>Você já conhecia: <span class="fi">Kuuntele! Katso! Odota!</span> (lição 0) e <span class="fi">Puhu hitaasti!</span> (lição 5). A ordem para vocês (<span class="fi">te</span>) é outra: <span class="fi">Ottakaa!</span>, na lição 14.</p>`
    },
    {
      id: 'objekti9', otsikko: 'Depois da ordem: pipo, hanskat ou pipoa?', taso: 'atenção', hakuosa: 'h-imperatiivi', treeni: 't09-kasky',
      html: `
<p>A coisa que você manda levar muda de forma conforme a ordem:</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Ota pipo!</span></td><td>leve o gorro! · uma coisa inteira: forma básica</td></tr>
  <tr><td><span class="fi">Ota aurinkolasit!</span></td><td>leve os óculos de sol! · várias coisas: plural -t</td></tr>
  <tr><td><span class="fi">Älä ota toppatakkia!</span></td><td>não leve o casaco! · com älä: partitivo</td></tr>
  <tr><td><span class="fi">Älä ota hanskoja!</span></td><td>não leve as luvas! · partitivo plural: só reconhecer (lição 11)</td></tr>
</table>
<p>A forma básica depois da ordem é especial: em outras frases, a coisa inteira ganha <span class="fi pala">-n</span> (<span class="fi">Otan sen.</span> = vou levar), o objeto da lição 12.</p>`
    },
    {
      id: 'monikko9', otsikko: 'O plural -t: pipot, kengät', taso: 'essencial', hakuosa: 'h-monikko', treeni: 't09-monikko',
      html: `
<p><b>Forma:</b> o genitivo sem o <span class="fi pala">-n</span>, mais <span class="fi pala">-t</span>: <span class="fi">pipon → pipot</span>, <span class="fi">kengän → kengät</span>, <span class="fi">ihmisen → ihmiset</span>. O genitivo já mostra a consoante que muda, então o plural também muda.</p>
<p><b>Uso:</b> várias coisas como sujeito (<span class="fi">Kengät <span data-l="olla#2">ovat</span> kaapissa.</span>), objeto de uma ordem (<span class="fi">Ota kengät!</span>) ou o que alguém tem (<span class="fi">Minulla on sandaalit.</span>). Depois de número, nunca: <span class="fi">kaksi kenkää</span>.</p>
<div class="sijataulu" data-sana="kenkä" data-sijat="nominatiivi,genetiivi,monikko"></div>
<div class="sijataulu" data-sana="paita" data-sijat="nominatiivi,genetiivi,monikko"></div>`
    },
    {
      id: 'saa', otsikko: 'O tempo, os meses e as estações', taso: 'essencial', hakuosa: 'h-aika', treeni: 't09-saa',
      html: `
<p><b>O tempo:</b> muitas frases não têm sujeito: <span class="fi">Sataa.</span> (chove), <span class="fi">Sataa lunta.</span> (neva), <span class="fi">Pakkasta on viisi astetta.</span> (−5 °C), <span class="fi">Ulkona on kylmä.</span> (lá fora está frio).</p>
<p><b>Quando?</b> Os meses usam <span class="fi pala">-ssa/-ssä</span>: <span class="fi">joulukuussa</span> (em dezembro). As estações usam <span class="fi pala">-lla/-llä</span>:</p>
<table class="taivutus">
  <tr><th>estação</th><th>quando?</th><th>português</th></tr>
  <tr><td><span class="fi">talvi</span></td><td><span class="fi">talvella</span></td><td>inverno · no inverno</td></tr>
  <tr><td><span class="fi">kevät</span></td><td><span class="fi">keväällä</span></td><td>primavera · na primavera</td></tr>
  <tr><td><span class="fi">kesä</span></td><td><span class="fi">kesällä</span></td><td>verão · no verão</td></tr>
  <tr><td><span class="fi">syksy</span></td><td><span class="fi">syksyllä</span></td><td>outono · no outono</td></tr>
</table>
<p>No Brasil, tudo ao contrário: <span class="fi">Joulukuussa Belo Horizontessa on kesä.</span></p>`
    },
    {
      id: 'kahdennus', otsikko: 'Pronúncia: Tule tänne! soa “tulet tänne”', taso: 'atenção', hakuosa: 'h-imperatiivi', treeni: 't09-kahdennus',
      html: `
<p>Depois de uma ordem para “você”, a primeira consoante da palavra seguinte sai <b>dobrada</b>, mas não se escreve:</p>
<ul class="esim">
  <li class="s" data-pt="Venha cá! (soa: tulet tänne)">Tule tänne!</li>
  <li class="s" data-pt="Pegue o gorro! (soa: otap pipo)">Ota pipo!</li>
  <li class="s" data-pt="Aqui está! (soa: oleh hyvä)">Ole hyvä!</li>
</ul>
<p>Antes de vogal, ouve-se uma paradinha: <span class="fi">Ota aurinkolasit!</span> O mesmo acontece depois da forma negativa: <span class="fi">En tule kotiin.</span> soa <span class="fi pala">en tulek kotiin</span>. A forma de “ele” termina em vogal longa e não dobra nada: <span class="fi">Jay tulee tänne.</span></p>`
    },
    {
      id: 'sudenkuopat9', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-imperatiivi',
      html: `
<ul>
  <li><b>A ordem não tem terminação:</b> <span class="fi">Ota!</span>, não <span class="fi">otat</span> (= você pega). O português usa a forma de “ele” (pegue); o finlandês, a forma do “eu” sem -n.</li>
  <li><b>“Não leve” = <span class="fi">Älä ota!</span></b>, nunca <span class="fi pala">ei ota</span>. E depois de <span class="fi">älä</span>, a coisa vai no partitivo: <span class="fi">Älä ota pipoa!</span></li>
  <li><b>Plural depois de número, não:</b> <span class="fi">kaksi kenkää</span>, não <span class="fi pala">kaksi kengät</span>.</li>
  <li><b>A consoante que muda vale no plural:</b> <span class="fi">kenkä → kengät</span>, <span class="fi">paita → paidat</span>. Pense no genitivo.</li>
  <li><b>Meses com -ssa, estações com -lla:</b> <span class="fi">joulukuussa</span>, mas <span class="fi">talvella</span>.</li>
</ul>`
    }
  ]
});
