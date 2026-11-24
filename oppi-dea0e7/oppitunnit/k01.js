/* Kertaus 1–5: kertoja kertaa tarinan, uusi lyhyt dialogi, sekaharjoitukset ja itsearvio. Oma materiaali.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'k01',
  lyhyt: 'K1',
  jakso: 'Kertaus 1–5',
  otsikko: 'Kertaus 1–5: ser, estar, ir ja ter',
  lahde: 'Kertaa jaksot 1–5: esittäytyminen, estar ja ir, asiointi, -ar / -er / -ir-verbit, perhe ja ter',
  aiheet: ['tervehdys', 'ihmiset', 'numerot', 'toiminta'],
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi, esittää harjoituksessa isäänsä Walkeria' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, harjoittelee jouluksi' }
  },

  sanasto: [
    'ensaiar', 'ensaio', 'ao mercado', 'fico', 'gosto mais de'
  ],

  sanat: {
    // kertojan yhteenveto
    'conhece': { fi: 'tutustuu, tuntee (henkilön, paikan)', aa: 'ko-NJE-si', ipa: '[koˈɲɛsi]', sl: 'verbi', huom: 'perusmuoto {conhecer}; espanjaksi conoce' },
    'conhecer': { fi: 'tutustua, tuntea', aa: 'kõ-nje-SEH', ipa: '[kõɲeˈseh]', sl: 'verbi, perusmuoto' },
    'conhece a família': { fi: 'tutustuu perheeseen', aa: 'ko-NJE-si a fa-MI-lja', ipa: '[koˈɲɛsi a faˈmiʎɐ]', sl: 'ilmaus' },
    'jay bebe': { fi: 'Jay juo', aa: 'ZHEI BE-bi', ipa: '[ˈʒej ˈbebi]', sl: 'ilmaus' },
    'mostra a mãe': { fi: 'esittelee äitinsä', aa: 'MOS-tra a MÃI', ipa: '[ˈmɔstɾɐ a mɐ̃j]', sl: 'ilmaus' },
    'a mãe e o irmão': { fi: 'äiti ja veli', aa: 'a MÃI i u ih-MÃU', ipa: '[a mɐ̃j i u ihˈmɐ̃w]', sl: 'ilmaus' },
    'de metrô': { fi: 'metrolla', aa: 'di me-TRO', ipa: '[dʒi meˈtɾo]', sl: 'ilmaus' },
    'pensa na vida': { fi: 'ajattelee elämää', aa: 'PẼ-sa na VI-da', ipa: '[ˈpẽsɐ na ˈvidɐ]', sl: 'ilmaus' },

    // dialogi
    'ensaiar': { fi: 'harjoitella, treenata (esimerkiksi esitystä)', aa: 'ẽ-sa-JAH', ipa: '[ẽsaˈjah]', sl: 'verbi, perusmuoto', huom: 'ensaio = harjoitus, harjoitukset' },
    'ensaio': { fi: 'harjoitus (esityksen, tilanteen)', aa: 'ẽ-SA-ju', ipa: '[ẽˈsaju]', sl: 'substantiivi, maskuliini' },
    'a gente vai ensaiar': { fi: 'me aiomme harjoitella', aa: 'a ZHẼ-tsi VAI ẽ-sa-JAH', ipa: '[a ˈʒẽtʃi vaj ẽsaˈjah]', sl: 'lause' },
    'eu sou o seu walker': { fi: 'minä olen herra Walker', aa: 'EU SOU u SEU UAU-ter', ipa: '[ew ˈsow u ˈsew ˈwawteh]', sl: 'lause' },
    'e o senhor': { fi: 'entä te?', aa: 'i u se-NJOH', ipa: '[i u seˈɲoh]', sl: 'ilmaus' },
    'ele tem quarenta e cinco anos': { fi: 'hän on 45-vuotias', aa: 'E-li TẼI kua-RẼ-ta i SĨ-ku Ã-nus', ipa: '[ˈeli tẽj kwaˈɾẽtɐ i ˈsĩku ˈɐ̃nus]', sl: 'lause' },
    'pero': { kieli: 'es', fi: 'mutta (espanjaa!)', aa: 'PE-ro', ipa: '[ˈpeɾo]', sl: 'espanjaa', huom: 'Jayn espanjalähtöinen virhe: portugaliksi {mas}' },
    'em português é': { fi: 'portugaliksi se on', aa: 'ẽi poh-tu-GES E', ipa: '[ẽj pohtuˈɡes ɛ]', sl: 'ilmaus' },
    'gosto mais de': { fi: 'pidän enemmän (jostakin)', aa: 'GOS-tu MAIS di', ipa: '[ˈɡostu majs dʒi]', sl: 'ilmaus' },
    'eu gosto de café': { fi: 'pidän kahvista', aa: 'EU GOS-tu di ka-FE', ipa: '[ew ˈɡostu dʒi kaˈfɛ]', sl: 'lause' },
    'ao mercado': { fi: 'kauppaan, kauppahalliin', aa: 'AU meh-KA-du', ipa: '[aw mehˈkadu]', sl: 'ilmaus', huom: '{a} + {o} = {ao}; ”ir ao mercado” = mennä ruokaostoksille' },
    'a gente vai ao mercado': { fi: 'me menemme kauppaan', aa: 'a ZHẼ-tsi VAI AU meh-KA-du', ipa: '[a ˈʒẽtʃi vaj aw mehˈkadu]', sl: 'lause' },
    'comprar café': { fi: 'ostaa kahvia', aa: 'kõ-PRAH ka-FE', ipa: '[kõˈpɾah kaˈfɛ]', sl: 'ilmaus' },
    'custa quinze euros': { fi: 'se maksaa viisitoista euroa', aa: 'KUS-ta KĨ-zi EU-rus', ipa: '[ˈkustɐ ˈkĩzi ˈewɾus]', sl: 'lause' },
    'fico': { fi: '(minä) jään, pysyn; olen (jossakin)', aa: 'FI-ku', ipa: '[ˈfiku]', sl: 'verbi', huom: 'perusmuoto {ficar}; ”eu fico no sofá” = jään sohvalle' },
    'ficar': { fi: 'jäädä, pysyä; sijaita', aa: 'fi-KAH', ipa: '[fiˈkah]', sl: 'verbi, perusmuoto', huom: 'espanjassa ei vastinetta' },
    'eu fico no sofá': { fi: 'minä jään sohvalle', aa: 'EU FI-ku nu so-FA', ipa: '[ew ˈfiku nu soˈfa]', sl: 'lause' },
    'no sofá': { fi: 'sohvalla', aa: 'nu so-FA', ipa: '[nu soˈfa]', sl: 'ilmaus' },
    'mais uma vez': { fi: 'vielä kerran', aa: 'MAIS U-ma VES', ipa: '[majs ˈumɐ ves]', sl: 'ilmaus' },
    'vez': { fi: 'kerta', aa: 'VES', ipa: '[ves]', sl: 'substantiivi, feminiini', huom: 'mais uma vez = vielä kerran' },
    'ensaiar mais uma vez': { fi: 'harjoitella vielä kerran', aa: 'ẽ-sa-JAH MAIS U-ma VES', ipa: '[ẽsaˈjah majs ˈumɐ ves]', sl: 'ilmaus' },
    'no domingo': { fi: 'sunnuntaina', aa: 'nu do-MĨ-gu', ipa: '[nu doˈmĩɡu]', sl: 'ilmaus', huom: 'myös vain ”domingo”' },
    'abre uma cerveja': { fi: 'avaa oluen', aa: 'A-bri U-ma seh-VE-zha', ipa: '[ˈabɾi ˈumɐ sehˈveʒɐ]', sl: 'ilmaus' },
    'lá': { fi: 'siellä, sinne', aa: 'LA', ipa: '[la]', sl: 'adverbi', huom: 'espanjaksi allá' },

    // kertaus
    'vou falar': { fi: 'aion puhua', aa: 'VOU fa-LAH', ipa: '[vow faˈlah]', sl: 'ilmaus' },
    'vou ficar': { fi: 'aion jäädä', aa: 'VOU fi-KAH', ipa: '[vow fiˈkah]', sl: 'ilmaus' },
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat esittäytyä, kertoa kotipaikkasi ja käyttää verbiä <span class="pt">ser</span> sekä sanoja <span class="pt">você</span>, <span class="pt">o senhor</span> ja <span class="pt">a senhora</span> (jakso 1).</li>
  <li>Osaat kertoa kuulumisesi, viikonpäivät, paikat ja suunnat verbeillä <span class="pt">estar</span> ja <span class="pt">ir</span> (jakso 2).</li>
  <li>Osaat asioida ja lukea hinnat: luvut 0–100, <span class="pt">há / tem</span>, artikkelit ja <span class="pt">no / na / do / da</span> (jaksot 3 ja 4).</li>
  <li>Osaat kertoa mistä pidät ja mitä aiot tehdä (<span class="pt">gostar de</span>, <span class="pt">ir</span> + perusmuoto) sekä kertoa perheestäsi verbillä <span class="pt">ter</span> ja omistussanoilla (jaksot 4 ja 5).</li>
</ul>
<p>Helsinki, perjantai-ilta. Joulu on lähellä. Jay on jo tavannut Maian perheen videopuhelussa ja ostanut lahjoja, ja nyt on aika varmistaa, että hän muistaa kaiken ennen matkaa. Tämä jakso kertaa viisi ensimmäistä jaksoa.</p>

<section class="osio">
  <h2>Kertoja kertaa: mitä on tapahtunut</h2>
  <p class="ohje">Kuuntele, lue ja yritä ymmärtää ilman suomennosta. Kaikki sanat ovat jaksoista 1–5. Avaa suomennos vasta lopuksi.</p>
  <div class="kpl" data-nimi="Kuuntele yhteenveto">
    <p class="s" data-h="kertoja" data-fi="Jaksossa 1 Jay tutustuu Maian perheeseen videopuhelussa.">Jay conhece a família da Maia na videochamada.</p>
    <p class="s" data-h="kertoja" data-fi="Jaksossa 2 Jay ja Maia menevät metrolla Otaniemeen.">Jay e Maia vão para Otaniemi de metrô.</p>
    <p class="s" data-h="kertoja" data-fi="Jaksossa 3 he ostavat joululahjoja Hakaniemen kauppahallissa.">No mercado de Hakaniemi, eles compram presentes de Natal.</p>
    <p class="s" data-h="kertoja" data-fi="Jaksossa 4 Jay juo kahvia Kalliossa ja ajattelee elämää.">No Kallio, o Jay bebe café e pensa na vida.</p>
    <p class="s" data-h="kertoja" data-fi="Jaksossa 5 Jay esittelee äitinsä ja veljensä.">Na videochamada de Natal, o Jay mostra a mãe e o irmão.</p>
  </div>
</section>

<section class="osio">
  <h2>Kielioppi pähkinänkuoressa</h2>

  <h3>Neljä tärkeintä verbiä: ser, estar, ir, ter</h3>
  <table class="taivutus">
    <tr><td></td><td>ser</td><td>estar</td><td>ir</td><td>ter</td></tr>
    <tr><td>eu</td><td>sou</td><td>estou</td><td>vou</td><td>tenho</td></tr>
    <tr><td>você, ele, ela, a gente</td><td>é</td><td>está</td><td>vai</td><td>tem</td></tr>
    <tr><td>nós</td><td>somos</td><td>estamos</td><td>vamos</td><td>temos</td></tr>
    <tr><td>vocês, eles, elas</td><td>são</td><td>estão</td><td>vão</td><td>têm</td></tr>
  </table>
  <ul>
    <li><span class="pt">Ser</span> kertoo, kuka tai mikä joku on (nimi, kansalaisuus, kotipaikka): <span class="pt">Eu sou da Finlândia.</span></li>
    <li><span class="pt">Estar</span> kertoo, missä joku on tai millainen hän on nyt: <span class="pt">Estou cansado.</span></li>
    <li><span class="pt">Ir</span> kertoo, minne mennään, ja muodostaa lähitulevaisuuden: <span class="pt">Vou para casa. Vou beber café.</span></li>
    <li><span class="pt">Ter</span> kertoo, mitä jollakulla on, ja iän: <span class="pt">Tenho um irmão. Tenho quarenta anos.</span></li>
  </ul>

  <h3>Säännölliset verbit</h3>
  <table class="taivutus">
    <tr><td></td><td>-ar: falar</td><td>-er: comer</td><td>-ir: abrir</td></tr>
    <tr><td>eu</td><td>falo</td><td>como</td><td>abro</td></tr>
    <tr><td>você, ele, ela, a gente</td><td>fala</td><td>come</td><td>abre</td></tr>
    <tr><td>nós</td><td>falamos</td><td>comemos</td><td>abrimos</td></tr>
    <tr><td>vocês, eles, elas</td><td>falam</td><td>comem</td><td>abrem</td></tr>
  </table>

  <h3>Artikkelit ja yhdistelmät</h3>
  <table class="taivutus">
    <tr><td></td><td>m. yks.</td><td>f. yks.</td><td>m. mon.</td><td>f. mon.</td></tr>
    <tr><td>määräinen</td><td>o</td><td>a</td><td>os</td><td>as</td></tr>
    <tr><td>epämääräinen</td><td>um</td><td>uma</td><td>uns</td><td>umas</td></tr>
    <tr><td>em + artikkeli</td><td>no</td><td>na</td><td>nos</td><td>nas</td></tr>
    <tr><td>de + artikkeli</td><td>do</td><td>da</td><td>dos</td><td>das</td></tr>
    <tr><td>a + artikkeli</td><td>ao</td><td>à</td><td>aos</td><td>às</td></tr>
  </table>

  <h3>Omistussanat ja osoittavat sanat</h3>
  <table class="taivutus">
    <tr><td></td><td>m. yks.</td><td>f. yks.</td><td>m. mon.</td><td>f. mon.</td></tr>
    <tr><td>minun</td><td>meu</td><td>minha</td><td>meus</td><td>minhas</td></tr>
    <tr><td>sinun</td><td>seu</td><td>sua</td><td>seus</td><td>suas</td></tr>
    <tr><td>meidän</td><td>nosso</td><td>nossa</td><td>nossos</td><td>nossas</td></tr>
    <tr><td>tämä</td><td>este</td><td>esta</td><td>estes</td><td>estas</td></tr>
    <tr><td>tuo</td><td>esse</td><td>essa</td><td>esses</td><td>essas</td></tr>
  </table>
  <p>Hänen: <span class="pt">dele</span> (mies), <span class="pt">dela</span> (nainen). Heidän: <span class="pt">deles</span>, <span class="pt">delas</span>.</p>

  <h3>Luvut</h3>
  <ul class="esim">
    <li class="s" data-fi="0–10">zero, um, dois, três, quatro, cinco, seis, sete, oito, nove, dez</li>
    <li class="s" data-fi="11–20">onze, doze, treze, catorze, quinze, dezesseis, dezessete, dezoito, dezenove, vinte</li>
    <li class="s" data-fi="20, 30, 40…100">vinte, trinta, quarenta, cinquenta, sessenta, setenta, oitenta, noventa, cem</li>
    <li class="s" data-fi="35, 47, 58">trinta e cinco, quarenta e sete, cinquenta e oito</li>
  </ul>

  <h3>Kysymyssanat</h3>
  <ul class="esim">
    <li class="s" data-fi="missä">onde</li>
    <li class="s" data-fi="minne">aonde</li>
    <li class="s" data-fi="mistä">de onde</li>
    <li class="s" data-fi="miten">como</li>
    <li class="s" data-fi="kuinka paljon, kuinka monta">quanto</li>
    <li class="s" data-fi="mikä">qual</li>
  </ul>

  <h3>Ääntäminen</h3>
  <ul>
    <li><b>Paino:</b> sanat, jotka päättyvät a, e, o, -s, -m: toiseksi viimeinen tavu. Päättyvät i, u, l, r, z, -ão: viimeinen tavu. Aksentti tai tilde kertoo painon.</li>
    <li><b>Vokaalit:</b> é, ó avoimia; ê, ô suljettuja; painoton loppu-o on u, loppu-e on i, loppu-a on lyhyt.</li>
    <li><b>Nasaalit:</b> ã, õ, vokaali + m tai n ennen konsonanttia (bom, quinze, pão, falam).</li>
    <li><b>Yhdistelmät:</b> ch = sh, nh = nj, lh = lj, h alussa äänetön; d ja t pehmenevät i-äänteen edellä (ohjeessa d ja ts, IPA dʒ ja tʃ); tavun lopun l = u.</li>
    <li><b>Intonaatio:</b> kyllä-ei-kysymys nousee lopussa, väite ja kysymyssanalla alkava kysymys laskee.</li>
  </ul>
</section>

<section class="osio">
  <h2>Dialogi: Ensaio</h2>
  <p class="ohje">Maia esittää isänsä Walkeria, ja Jay harjoittelee puhua hänelle. Kuuntele ensin, tunnista sitten kaikki jaksojen 1–5 asiat ja Jayn uusi espanjan vaikutuksesta syntynyt virhe. Käytä roolileikkiä ja puhu Jayn repliikit.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-puhu="Helsinque, sexta-feira, de noite. Jay e Maia estão em casa, em Sornainen." data-fi="Helsinki, perjantai-ilta. Jay ja Maia ovat kotona Sörnäisissä.">Helsinque, sexta-feira, de noite. Jay e Maia estão em casa, em Sörnäinen.</p>
    <p class="s" data-h="maia" data-fi="Hyvää yötä, Jay! Tänään me harjoittelemme. Minä olen herra Walker.">Boa noite, Jay! Hoje a gente vai ensaiar. Eu sou o seu Walker.</p>
    <p class="s" data-h="maia" data-fi="Hyvää päivää, Jay! Mitä sinulle kuuluu?">Boa tarde, Jay! Como você está?</p>
    <p class="s" data-h="jay" data-fi="Hyvää päivää, herra Walker! Hyvää, kiitos. Entä te?">Boa tarde, seu Walker! Estou bem, obrigado. E o senhor?</p>
    <p class="s" data-h="maia" data-fi="Hyvää! Mistä sinä olet kotoisin, Jay?">Tudo bem! Você é de onde, Jay?</p>
    <p class="s" data-h="jay" data-fi="Olen Suomesta, Helsingistä. Äitini ja veljeni ovat siellä.">Eu sou da Finlândia, de Helsinque. A minha mãe e o meu irmão estão lá.</p>
    <p class="s" data-h="maia" data-fi="Montako sisarusta sinulla on?">Quantos irmãos você tem?</p>
    <p class="s" data-h="jay" data-fi="Minulla on vain yksi veli. Mutta Maialla on myös veli, Anderson. Hän on 45-vuotias.">Eu só tenho um irmão. Mas a Maia tem um irmão também, o Anderson. Ele tem quarenta e cinco anos.</p>
    <p class="s" data-h="maia" data-fi="Hyvin! Pidätkö kahvista, Jay?">Muito bem! Você gosta de café, Jay?</p>
    <p class="s" data-h="jay" data-fi="Pidän kahvista, mutta (väärin) pidän enemmän oluesta.">Eu gosto de café, pero eu gosto mais de cerveja.</p>
    <p class="s" data-h="maia" data-fi="Jay! Portugaliksi se on mas, ei pero.">Jay! Em português é mas, não pero.</p>
    <p class="s" data-h="jay" data-fi="Anteeksi! Pidän kahvista, mutta pidän enemmän oluesta.">Desculpa! Eu gosto de café, mas eu gosto mais de cerveja.</p>
    <p class="s" data-h="maia" data-fi="Huomenna on lauantai. Me menemme kauppaan ja ostamme kahvia herra Walkerille.">Amanhã é sábado. A gente vai ao mercado e vai comprar café para o seu Walker.</p>
    <p class="s" data-h="jay" data-fi="Paljonko kahvi maksaa?">Quanto custa o café?</p>
    <p class="s" data-h="maia" data-fi="Se maksaa viisitoista euroa.">Custa quinze euros.</p>
    <p class="s" data-h="jay" data-fi="Viisitoista euroa? Kuinka kallista! Entä sunnuntai? Minä jään sohvalle!">Quinze euros? Que caro! E o domingo? Eu fico no sofá!</p>
    <p class="s" data-h="maia" data-fi="Sunnuntaina sinä puhut minun perheeni kanssa, Jay.">No domingo você vai falar com a minha família, Jay.</p>
    <p class="s" data-h="jay" data-fi="Sitten harjoittelen vielä kerran!">Então eu vou ensaiar mais uma vez!</p>
    <p class="s" data-h="kertoja" data-fi="Maia hymyilee. Jay avaa oluen.">Maia sorri. Jay abre uma cerveja.</p>
  </div>
</section>

<section class="osio">
  <h2>Tärkeimmät sanat</h2>
  <div class="teema" data-otsikko="Jakso 1: ihmiset ja numerot" data-sanat="você,o senhor,a senhora,finlandês,brasileiro,mineiro,zero,cinco,sete,dez"></div>
  <div class="teema" data-otsikko="Jakso 2: kuulumiset, viikko, liike" data-sanat="como você está,cansado,mais ou menos,até amanhã,segunda-feira,sexta-feira,domingo,metrô,aonde"></div>
  <div class="teema" data-otsikko="Jakso 3: asioiminen" data-sanat="quanto custa,caro,barato,queijo,presente,loja,mercado,quinze,dezoito"></div>
  <div class="teema" data-otsikko="Jakso 4: kahvila" data-sanat="eu queria,a conta,cafezinho,pão de queijo,gostar,pagar,cem,cinquenta"></div>
  <div class="teema" data-otsikko="Jakso 5: perhe" data-sanat="irmão,irmã,filho,avô,tio,primo,namorado,tenho,anos"></div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ser, estar, ir vai ter?</h3>
    <p class="ohje">Taivuta sulkeissa oleva verbi persoonan mukaan.</p>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="sou"></span> da Finlândia. (ser)</p>
      <p>O Jay <span class="aukko" data-oikea="está|tá"></span> cansado hoje. (estar)</p>
      <p>Nós <span class="aukko" data-oikea="vamos"></span> para o trabalho. (ir)</p>
      <p>A Marta <span class="aukko" data-oikea="tem"></span> dois filhos. (ter)</p>
      <p>Vocês <span class="aukko" data-oikea="são"></span> brasileiros? (ser)</p>
      <p>Eu <span class="aukko" data-oikea="estou|tô"></span> em Helsinque. (estar)</p>
      <p>Eles <span class="aukko" data-oikea="têm"></span> um irmão em Espoo. (ter)</p>
      <p>A gente <span class="aukko" data-oikea="vai"></span> ao mercado amanhã. (ir)</p>
      <p>Você <span class="aukko" data-oikea="é"></span> de onde? (ser)</p>
      <p>Eu <span class="aukko" data-oikea="tenho"></span> uma irmã. (ter)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Säännölliset verbit</h3>
    <div class="aukot">
      <p>A Maia <span class="aukko" data-oikea="pinta"></span> no ateliê. (pintar)</p>
      <p>Eu <span class="aukko" data-oikea="bebo"></span> café de manhã. (beber)</p>
      <p>Nós <span class="aukko" data-oikea="abrimos"></span> a loja. (abrir)</p>
      <p>Eles <span class="aukko" data-oikea="comem"></span> pão de queijo. (comer)</p>
      <p>Você <span class="aukko" data-oikea="fala"></span> português? (falar)</p>
      <p>Eu <span class="aukko" data-oikea="pago"></span> a conta. (pagar)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. No, na, do, da, dos, nas</h3>
    <div class="aukot">
      <p>Eu estou <span class="aukko" data-oikea="no"></span> mercado.</p>
      <p>Ela está <span class="aukko" data-oikea="na"></span> estação.</p>
      <p>O queijo é <span class="aukko" data-oikea="da"></span> Finlândia.</p>
      <p>Os presentes são <span class="aukko" data-oikea="dos"></span> amigos.</p>
      <p>Elas estão <span class="aukko" data-oikea="nas"></span> lojas.</p>
      <p>A mãe <span class="aukko" data-oikea="da"></span> Maia é simpática.</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Mitä Jay sanoisi portugaliksi?</h3>
    <p class="ohje">Jay tekee usein espanjan mukaisia virheitä. Valitse oikea portugalinkielinen vaihtoehto.</p>
    <div class="valinta" data-oikea="Muito prazer!">
      <p class="kysymys">Hauska tutustua!</p>
      <div class="vaihtoehdot"><button type="button">Mucho gusto!</button><button type="button">Muito prazer!</button></div>
    </div>
    <div class="valinta" data-oikea="Até amanhã!">
      <p class="kysymys">Nähdään huomenna!</p>
      <div class="vaihtoehdot"><button type="button">Até manhã!</button><button type="button">Até amanhã!</button></div>
    </div>
    <div class="valinta" data-oikea="Eu gosto de café.">
      <p class="kysymys">Pidän kahvista.</p>
      <div class="vaihtoehdot"><button type="button">Me gosta café.</button><button type="button">Eu gosto de café.</button></div>
    </div>
    <div class="valinta" data-oikea="Quanto custa?">
      <p class="kysymys">Paljonko se maksaa?</p>
      <div class="vaihtoehdot"><button type="button">Quanto cuesta?</button><button type="button">Quanto custa?</button></div>
    </div>
    <div class="valinta" data-oikea="minha mãe">
      <p class="kysymys">Äitini</p>
      <div class="vaihtoehdot"><button type="button">meu mãe</button><button type="button">minha mãe</button></div>
    </div>
    <div class="valinta" data-oikea="Eu gosto de café, mas gosto mais de cerveja.">
      <p class="kysymys">Pidän kahvista, mutta pidän enemmän oluesta.</p>
      <div class="vaihtoehdot"><button type="button">Eu gosto de café, pero gosto mais de cerveja.</button><button type="button">Eu gosto de café, mas gosto mais de cerveja.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Mikä ei kuulu joukkoon?</h3>
    <div class="valinta" data-oikea="domingo">
      <p class="kysymys">padaria, farmácia, domingo, livraria</p>
      <div class="vaihtoehdot"><button type="button">padaria</button><button type="button">farmácia</button><button type="button">domingo</button><button type="button">livraria</button></div>
    </div>
    <div class="valinta" data-oikea="quinta">
      <p class="kysymys">tio, tia, primo, quinta</p>
      <div class="vaihtoehdot"><button type="button">tio</button><button type="button">tia</button><button type="button">primo</button><button type="button">quinta</button></div>
    </div>
    <div class="valinta" data-oikea="sexta">
      <p class="kysymys">doze, treze, sexta, quinze</p>
      <div class="vaihtoehdot"><button type="button">doze</button><button type="button">treze</button><button type="button">sexta</button><button type="button">quinze</button></div>
    </div>
    <div class="valinta" data-oikea="correio">
      <p class="kysymys">café, suco, chá, correio</p>
      <div class="vaihtoehdot"><button type="button">café</button><button type="button">suco</button><button type="button">chá</button><button type="button">correio</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Yhdistä luku ja numero</h3>
    <ul class="yhdista">
      <li data-pari="7">sete</li>
      <li data-pari="13">treze</li>
      <li data-pari="18">dezoito</li>
      <li data-pari="25">vinte e cinco</li>
      <li data-pari="40">quarenta</li>
      <li data-pari="56">cinquenta e seis</li>
      <li data-pari="71">setenta e um</li>
      <li data-pari="100">cem</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Missä, minne vai mistä?</h3>
    <div class="valinta" data-oikea="Onde">
      <p class="kysymys">___ você está agora? (missä)</p>
      <div class="vaihtoehdot"><button type="button">Onde</button><button type="button">Aonde</button><button type="button">De onde</button></div>
    </div>
    <div class="valinta" data-oikea="Aonde">
      <p class="kysymys">___ vocês vão amanhã? (minne)</p>
      <div class="vaihtoehdot"><button type="button">Onde</button><button type="button">Aonde</button><button type="button">De onde</button></div>
    </div>
    <div class="valinta" data-oikea="De onde">
      <p class="kysymys">___ ela é? (mistä)</p>
      <div class="vaihtoehdot"><button type="button">Onde</button><button type="button">Aonde</button><button type="button">De onde</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Mikä tavu painottuu?</h3>
    <p class="ohje">Napsauta painollista tavua.</p>
    <p><span class="paino" data-tavut="ge|ó|lo|go" data-oikea="2"></span> <span class="paino" data-tavut="pa|da|ri|a" data-oikea="3"></span> <span class="paino" data-tavut="far|má|cia" data-oikea="2"></span> <span class="paino" data-tavut="sá|ba|do" data-oikea="1"></span> <span class="paino" data-tavut="ca|fe|zi|nho" data-oikea="3"></span> <span class="paino" data-tavut="a|ma|nhã" data-oikea="3"></span> <span class="paino" data-tavut="ir|mão" data-oikea="2"></span> <span class="paino" data-tavut="do|min|go" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>9. Kuuntele ja valitse lause</h3>
    <p class="ohje">Paina ▶ ja valitse lause, jonka kuulit.</p>
    <div class="valinta" data-kuuntele="Eu sou da Finlândia." data-oikea="Eu sou da Finlândia.">
      <p class="kysymys">Mikä lause?</p>
      <div class="vaihtoehdot"><button type="button">Eu sou da Finlândia.</button><button type="button">Eu estou na Finlândia.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Elas vão ao mercado." data-oikea="Elas vão ao mercado.">
      <p class="kysymys">Mikä lause?</p>
      <div class="vaihtoehdot"><button type="button">Elas vão ao mercado.</button><button type="button">Elas estão no mercado.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Custa quinze euros." data-oikea="Custa quinze euros.">
      <p class="kysymys">Mikä lause?</p>
      <div class="vaihtoehdot"><button type="button">Custa quinze euros.</button><button type="button">Custa cinquenta euros.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>10. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause. Kirjoita luvut sanoilla.</p>
    <div class="sanelu" data-puhu="Eu me chamo Jay e sou da Finlândia."></div>
    <div class="sanelu" data-puhu="Hoje é sexta-feira e eu estou cansado."></div>
    <div class="sanelu" data-puhu="Quanto custa o queijo? Custa doze euros."></div>
    <div class="sanelu" data-puhu="Eu tenho uma irmã e dois irmãos."></div>
    <div class="sanelu" data-puhu="Amanhã nós vamos ao mercado."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>11. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Minun nimeni on Maia ja olen Belo Horizontesta.</p><p class="s" data-fi="Minun nimeni on Maia ja olen Belo Horizontesta.">Eu me chamo Maia e sou de Belo Horizonte.</p></div>
    <div class="kaanna"><p class="fi">Mitä kuuluu? – Hyvää, mutta olen väsynyt.</p><p class="s" data-fi="Mitä kuuluu? – Hyvää, mutta olen väsynyt.">Tudo bem? – Tudo bem, mas estou cansado.</p></div>
    <div class="kaanna"><p class="fi">Torstaina me menemme saunaan.</p><p class="s" data-fi="Torstaina me menemme saunaan.">Na quinta a gente vai para a sauna.</p></div>
    <div class="kaanna"><p class="fi">Täällä on olutta, mutta se on kallista.</p><p class="s" data-fi="Täällä on olutta, mutta se on kallista.">Aqui há cerveja, mas é cara.</p></div>
    <div class="kaanna"><p class="fi">Pidän juustoleivästä ja kahvista.</p><p class="s" data-fi="Pidän juustoleivästä ja kahvista.">Eu gosto de pão de queijo e de café.</p></div>
    <div class="kaanna"><p class="fi">Hänellä on kaksi veljeä. Hänen veljensä asuvat Espoossa.</p><p class="s" data-fi="Hänellä on kaksi veljeä. Hänen veljensä asuvat Espoossa.">Ele tem dois irmãos. Os irmãos dele moram em Espoo.</p></div>
    <div class="kaanna"><p class="fi">Aion maksaa laskun huomenna.</p><p class="s" data-fi="Aion maksaa laskun huomenna.">Eu vou pagar a conta amanhã.</p></div>
    <div class="kaanna"><p class="fi">Tässä on siskoni. Hän on kolmikymppinen. (kolmekymmentä vuotta)</p><p class="s" data-fi="Tässä on siskoni. Hän on kolmekymmentä vuotta vanha.">Esta é a minha irmã. Ela tem trinta anos.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>12. Keskustelu: vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin. Voit myös vastata omasta puolestasi. Mallit ovat Jayn vastauksia.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Como você se chama e de onde você é?</summary>
      <p class="s" data-fi="Nimeni on Jay ja olen Suomesta.">Eu me chamo Jay e sou da Finlândia.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Como você está hoje?</summary>
      <p class="s" data-fi="Olen hyvin, mutta väsynyt.">Estou bem, mas estou cansado.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Que dia é hoje e aonde você vai amanhã?</summary>
      <p class="s" data-fi="Tänään on perjantai. Huomenna menen kauppaan.">Hoje é sexta. Amanhã eu vou ao mercado.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você gosta de café ou de cerveja?</summary>
      <p class="s" data-fi="Pidän molemmista, mutta enemmän oluesta.">Eu gosto dos dois, mas gosto mais de cerveja.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você tem irmãos? Quantos?</summary>
      <p class="s" data-fi="Minulla on yksi veli.">Tenho, sim. Eu tenho um irmão.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Quanto custa um cafezinho?</summary>
      <p class="s" data-fi="Se maksaa kolme euroa.">Custa três euros.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="k01">
    <h3>Kotitehtävä</h3>
    <p>Kirjoita viesti Maian vanhemmille, dona Martalle ja seu Walkerille, ennen joulumatkaa: vähintään kahdeksan lausetta. Tervehdi heitä kohteliaasti (<span class="pt">a senhora</span>, <span class="pt">o senhor</span>), kerro, mistä olet ja missä asut, kerro perheestäsi (<span class="pt">ter</span>, omistussanat), kerro kaksi asiaa, joista pidät (<span class="pt">gostar de</span>), ja kerro, mitä aiot tehdä Belo Horizontessa (<span class="pt">ir</span> + perusmuoto). Sano viesti ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Hyvää päivää, rouva Marta ja herra Walker!">Boa tarde, dona Marta e seu Walker!</p>
      <p class="s" data-fi="Minä olen Jay. Olen Suomesta ja asun Helsingissä, Sörnäisissä.">Eu sou o Jay. Sou da Finlândia e moro em Helsinque, em Sörnäinen.</p>
      <p class="s" data-fi="Minulla on äiti ja veli. Äitini nimi on Purjo.">Eu tenho uma mãe e um irmão. A minha mãe se chama Purjo.</p>
      <p class="s" data-fi="Veljeni on aina autossa!">O meu irmão sempre está no carro!</p>
      <p class="s" data-fi="Pidän kahvista ja juustoleivästä.">Eu gosto de café e de pão de queijo.</p>
      <p class="s" data-fi="Belo Horizontessa aion juoda kahvia ja syödä juustoleipää.">Em Belo Horizonte eu vou beber café e comer pão de queijo.</p>
      <p class="s" data-fi="Aion myös puhua paljon portugalia.">Eu vou falar muito português também.</p>
      <p class="s" data-fi="Kiitos kaikesta! Nähdään pian!">Obrigado por tudo! Até logo!</p>
    </details>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Kulttuurikertaus</h3>
  <p>Vastaa ensin omin sanoin ja avaa sitten vastaus.</p>
  <details class="vastaus"><summary>Miksi jakson 1 dialogissa Jay sanoo ”seu Walker” ja ”dona Marta”?</summary><p>Se on kohtelias ja lämmin tapa puhutella iäkkäämpää ihmistä etunimellä. Naiselle sanotaan dona, miehelle seu.</p></details>
  <details class="vastaus"><summary>Mikä on apelido?</summary><p>Lempinimi. Brasiliassa lempinimet ovat hyvin yleisiä, ja nimet lyhenevät usein (José on Zé, Francisco on Chico).</p></details>
  <details class="vastaus"><summary>Mikä on Hakaniemen kauppahalli?</summary><p>Helsingin Hakaniemessä sijaitseva kauppahalli, joka avattiin vuonna 1914. Jay ja Maia ostivat sieltä joululahjoja.</p></details>
  <details class="vastaus"><summary>Mitä pão de queijo on ja mistä se on kotoisin?</summary><p>Juustoleipä, joka tehdään maniokkitärkkelyksestä ja juustosta. Se on peräisin Minas Geraisista, ja sitä syödään kahvin kanssa.</p></details>
  <details class="vastaus"><summary>Mitä sanoja lapset käyttävät vanhempiensa ystäville?</summary><p>Tio ja tia (setä ja täti), vaikka he eivät olisi sukua.</p></details>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Itsearvio</h2>
  <p class="ohje">Arvioi itseäsi neljällä tasolla: <b>En vielä</b>, <b>Vähän</b>, <b>Hyvin</b>, <b>Erinomaisesti</b>. Palaa kohtiin, jotka jäivät vajaiksi, ja tee niistä jaksojen harjoitukset uudelleen. Arviosi tallentuu tähän selaimeen.</p>
  <ul class="itsearvio" data-id="k01">
    <li>Jakso 1: Osaan esittäytyä, kysyä toisen nimeä ja kertoa, mistä olen kotoisin.</li>
    <li>Jakso 1: Osaan taivuttaa verbin ser kaikissa persoonissa.</li>
    <li>Jakso 1: Osaan valita sanoista você, o senhor ja a senhora oikean puhuttelun.</li>
    <li>Jakso 1: Osaan laskea nollasta kymmeneen ja asettaa sanapainon oikein.</li>
    <li>Jakso 2: Osaan kysyä ja kertoa kuulumiset (Como você está? Estou bem.).</li>
    <li>Jakso 2: Osaan kertoa, missä olen ja minne menen (estar, ir).</li>
    <li>Jakso 2: Osaan sanoa viikonpäivät ja hyvästellä (até amanhã, bom fim de semana).</li>
    <li>Jakso 2: Osaan erottaa onde, aonde ja de onde ja lausua portugalin vokaalit.</li>
    <li>Jakso 3: Osaan kysyä hintaa ja ymmärtää sen lukuihin 20 asti.</li>
    <li>Jakso 3: Osaan sanoa, että jotakin on olemassa (há, tem).</li>
    <li>Jakso 3: Osaan valita artikkelin ja yhdistelmän no, na, do, da.</li>
    <li>Jakso 3: Osaan lausua nasaalivokaalit (pão, bom, quinze).</li>
    <li>Jakso 4: Osaan tilata kahvilassa, pyytää laskun ja laskea lukuun 100.</li>
    <li>Jakso 4: Osaan taivuttaa säännöllisiä -ar-, -er- ja -ir-verbejä.</li>
    <li>Jakso 4: Osaan sanoa, mistä pidän (gostar de) ja mitä aion tehdä (ir + perusmuoto).</li>
    <li>Jakso 4: Osaan lausua ch, nh ja lh.</li>
    <li>Jakso 5: Osaan kertoa perheestäni ja nimetä sukulaisia.</li>
    <li>Jakso 5: Osaan verbin ter ja kertoa ikäni (tenho … anos).</li>
    <li>Jakso 5: Osaan käyttää omistussanoja oikeassa suvussa (meu, minha, dele, dela, nosso).</li>
    <li>Jakso 5: Osaan esitellä jonkun (este, esta) ja kuulla, onko lause kysymys vai väite.</li>
  </ul>
</section>
`
});
