/* Jakso 2: Työmatka metrolla Otaniemeen. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l02',
  lyhyt: '2',
  jakso: 'Jakso 2',
  otsikko: 'Kuulumiset ja liikkuminen: estar ja ir',
  lahde: 'Aihe: kuulumiset, hyvästely, viikonpäivät · Kielioppi: estar, ir, em / de / a, onde / aonde / de onde · Ääntäminen: vokaalit',
  aiheet: ['tervehdys', 'aika', 'liike', 'paikka', 'kysymys'],
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi ja taiteilija' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, väsynyt maanantaisin' }
  },

  sanasto: [
    'estou', 'está', 'estamos', 'vou', 'vamos', 'vão', 'cansado', 'mais ou menos',
    'como você está', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo',
    'que dia é hoje', 'amanhã', 'fim de semana', 'até amanhã', 'até segunda', 'bom fim de semana', 'aonde', 'onde fica',
    'ao lado de', 'metrô', 'sofá', 'ateliê'
  ],

  sanat: {
    // dialogi
    'segunda-feira': { fi: 'maanantai', aa: 'se-GŨ-da-FEI-ra', ipa: '[seˈɡũdɐ ˈfejɾɐ]', sl: 'substantiivi, feminiini', huom: 'puheessa usein vain {segunda}' },
    'na estação de metrô': { fi: 'metroasemalla', aa: 'na es-ta-SÃU di me-TRO', ipa: '[na estaˈsɐ̃w dʒi meˈtɾo]', sl: 'ilmaus' },
    'metrô': { fi: 'metro', aa: 'me-TRO', ipa: '[meˈtɾo]', sl: 'substantiivi, maskuliini', huom: 'Portugalissa metro (hieman eri paino)' },
    'estação': { fi: 'asema', aa: 'es-ta-SÃU', ipa: '[estaˈsɐ̃w]', sl: 'substantiivi, feminiini', huom: '-ção-loppuiset sanat ovat feminiinejä' },
    'cansado': { fi: 'väsynyt (mies)', aa: 'kã-SA-du', ipa: '[kɐ̃ˈsadu]', sl: 'adjektiivi, maskuliini', huom: 'naisesta {cansada}' },
    'cansada': { fi: 'väsynyt (nainen)', aa: 'kã-SA-da', ipa: '[kɐ̃ˈsadɐ]', sl: 'adjektiivi, feminiini', huom: 'miehestä {cansado}' },
    'estou': { fi: '(minä) olen (sijainti, tila)', aa: 'es-TOU', ipa: '[esˈtow]', sl: 'verbi {estar}', huom: 'eu estou; puhekielessä usein {tô}' },
    'está': { fi: 'on, olet (sijainti, tila)', aa: 'es-TA', ipa: '[esˈta]', sl: 'verbi {estar}', huom: 'ele está, você está; puhekielessä usein {tá}' },
    'estamos': { fi: '(me) olemme (sijainti, tila)', aa: 'es-TÃ-mus', ipa: '[esˈtɐ̃mus]', sl: 'verbi {estar}', huom: 'nós estamos; puhekielessä a gente {tá}' },
    'como você está': { fi: 'mitä sinulle kuuluu?', aa: 'KO-mu vo-SE es-TA', ipa: '[ˈkomu voˈse esˈta]', sl: 'kysymys', huom: 'kirjaimellisesti ”miten sinä olet?”' },
    'estou bem': { fi: 'minulle kuuluu hyvää', aa: 'es-TOU BẼI', ipa: '[esˈtow bẽj]', sl: 'ilmaus' },
    'mas': { fi: 'mutta', aa: 'MAS', ipa: '[mas]', sl: 'konjunktio', huom: 'espanjan pero = portugalin mas' },
    'segunda': { fi: 'maanantai (puhekieli); toinen (feminiini)', aa: 'se-GŨ-da', ipa: '[seˈɡũdɐ]', sl: 'substantiivi, feminiini', huom: 'lyhyt muoto sanasta {segunda-feira}' },
    'terça-feira': { fi: 'tiistai', aa: 'TEH-sa-FEI-ra', ipa: '[ˈtehsɐ ˈfejɾɐ]', sl: 'substantiivi, feminiini', huom: 'puheessa {terça}' },
    'terça': { fi: 'tiistai (puhekieli); kolmannes', aa: 'TEH-sa', ipa: '[ˈtehsɐ]', sl: 'substantiivi, feminiini' },
    'quarta-feira': { fi: 'keskiviikko', aa: 'KUAH-ta-FEI-ra', ipa: '[ˈkwahtɐ ˈfejɾɐ]', sl: 'substantiivi, feminiini', huom: 'puheessa {quarta}' },
    'quarta': { fi: 'keskiviikko (puhekieli); neljäs (feminiini)', aa: 'KUAH-ta', ipa: '[ˈkwahtɐ]', sl: 'substantiivi, feminiini' },
    'quinta-feira': { fi: 'torstai', aa: 'KĨ-ta-FEI-ra', ipa: '[ˈkĩtɐ ˈfejɾɐ]', sl: 'substantiivi, feminiini', huom: 'puheessa {quinta}' },
    'quinta': { fi: 'torstai (puhekieli); viides (feminiini)', aa: 'KĨ-ta', ipa: '[ˈkĩtɐ]', sl: 'substantiivi, feminiini' },
    'sexta-feira': { fi: 'perjantai', aa: 'SES-ta-FEI-ra', ipa: '[ˈsestɐ ˈfejɾɐ]', sl: 'substantiivi, feminiini', huom: 'puheessa {sexta}' },
    'sexta': { fi: 'perjantai (puhekieli); kuudes (feminiini)', aa: 'SES-ta', ipa: '[ˈsestɐ]', sl: 'substantiivi, feminiini' },
    'sábado': { fi: 'lauantai', aa: 'SA-ba-du', ipa: '[ˈsabadu]', sl: 'substantiivi, maskuliini', huom: 'paino kolmanneksi viimeisellä tavulla, siksi aksentti' },
    'domingo': { fi: 'sunnuntai', aa: 'do-MĨ-gu', ipa: '[doˈmĩɡu]', sl: 'substantiivi, maskuliini' },
    'da semana': { fi: 'viikon', aa: 'da se-MÃ-na', ipa: '[da seˈmɐ̃nɐ]', sl: 'ilmaus', huom: '{de} + {a} = {da}' },
    'pior': { fi: 'huonompi; huonoin', aa: 'pi-OH', ipa: '[piˈɔh]', sl: 'adjektiivi', huom: 'vastakohta {melhor}' },
    'melhor': { fi: 'parempi; paras', aa: 'me-LJOH', ipa: '[meˈʎɔh]', sl: 'adjektiivi', huom: 'vastakohta {pior}' },
    'qual': { fi: 'mikä, kumpi', aa: 'KUAU', ipa: '[ˈkwaw]', sl: 'kysymyssana', huom: 'monikko quais' },
    'sofá': { fi: 'sohva', aa: 'so-FA', ipa: '[soˈfa]', sl: 'substantiivi, maskuliini', huom: 'maskuliini, vaikka päättyy a-vokaaliin: o sofá' },
    'o dia do sofá': { fi: 'sohvan päivä', aa: 'u DI-a du so-FA', ipa: '[u ˈdʒiɐ du soˈfa]', sl: 'ilmaus' },
    'vamos': { fi: 'mennään!; (me) menemme', aa: 'VÃ-mus', ipa: '[ˈvɐ̃mus]', sl: 'verbi {ir}', huom: 'nós vamos; ”Vamos!” = Mennään!' },
    'vou': { fi: '(minä) menen', aa: 'VOU', ipa: '[vow]', sl: 'verbi {ir}', huom: 'eu vou' },
    'vão': { fi: '(he, te) menevät, menette', aa: 'VÃU', ipa: '[vɐ̃w]', sl: 'verbi {ir}', huom: 'vocês vão, eles vão' },
    'aonde': { fi: 'mihin (liike)', aa: 'a-Õ-di', ipa: '[aˈõdʒi]', sl: 'kysymyssana', huom: 'liikeverbin kanssa: aonde você vai? Puheessa usein vain {onde}' },
    'aonde nós vamos': { fi: 'minne me menemme?', aa: 'a-Õ-di NOS VÃ-mus', ipa: '[aˈõdʒi nɔs ˈvɐ̃mus]', sl: 'kysymys' },
    'hoje': { fi: 'tänään', aa: 'O-zhi', ipa: '[ˈoʒi]', sl: 'adverbi' },
    'para a sauna': { fi: 'saunaan', aa: 'PA-ra a SAU-na', ipa: '[ˈpaɾɐ a ˈsawnɐ]', sl: 'ilmaus' },
    'sauna': { fi: 'sauna', aa: 'SAU-na', ipa: '[ˈsawnɐ]', sl: 'substantiivi, feminiini', huom: 'suomalainen sana, tunnetaan Brasiliassakin' },
    'no': { fi: '-ssa, -ssä (maskuliinisanan edellä)', aa: 'nu', ipa: '[nu]', sl: 'prepositio + artikkeli', huom: '{em} + {o}; feminiinisanan edessä {na}' },
    'no trabalho': { fi: 'töissä', aa: 'nu tra-BA-lju', ipa: '[nu tɾaˈbaʎu]', sl: 'ilmaus' },
    'rrc': { fi: 'RRC (Rocks Research Center, Kivien tutkimuskeskus)', aa: 'E-hi E-hi SE', ipa: '[ˈɛhi ˈɛhi ˈse]', sl: 'lyhenne', huom: 'portugaliksi kirjaimet luetaan nimillään' },
    'é verdade': { fi: 'se on totta; niinpä', aa: 'E veh-DA-di', ipa: '[ɛ vehˈdadʒi]', sl: 'ilmaus' },
    'verdade': { fi: 'totuus', aa: 'veh-DA-di', ipa: '[vehˈdadʒi]', sl: 'substantiivi, feminiini' },
    'onde fica': { fi: 'missä sijaitsee', aa: 'Õ-di FI-ka', ipa: '[ˈõdʒi ˈfikɐ]', sl: 'kysymys' },
    'fica': { fi: 'jää; sijaitsee; on (jossakin)', aa: 'FI-ka', ipa: '[ˈfikɐ]', sl: 'verbi', huom: 'perusmuoto {ficar}; ”onde fica…?” = missä on…?' },
    'ao lado de': { fi: 'vieressä, -n vieressä', aa: 'au LA-du di', ipa: '[aw ˈladu dʒi]', sl: 'ilmaus' },
    'lado': { fi: 'puoli; kylki', aa: 'LA-du', ipa: '[ˈladu]', sl: 'substantiivi, maskuliini' },
    'sörnäinen': { kieli: 'fi', fi: 'Sörnäinen (Helsingin kaupunginosa)', aa: 'SÖR-nä-i-nen', ipa: '[ˈsørnæinen]', sl: 'paikannimi', huom: 'suomalainen nimi sanotaan niin kuin suomeksi' },
    'espoo': { kieli: 'fi', fi: 'Espoo', aa: 'ES-poo', ipa: '[ˈespoː]', sl: 'kaupungin nimi', huom: 'suomalainen nimi' },
    'otaniemi': { kieli: 'fi', fi: 'Otaniemi (Espoon kaupunginosa)', aa: 'O-ta-nie-mi', ipa: '[ˈotɑniemi]', sl: 'paikannimi', huom: 'suomalainen nimi sanotaan niin kuin suomeksi' },
    'de noite': { fi: 'illalla, yöllä', aa: 'di NOI-tsi', ipa: '[dʒi ˈnojtʃi]', sl: 'ilmaus', huom: 'vrt. {de manhã} = aamulla' },
    'ateliê': { fi: 'ateljee, taiteilijan työtila', aa: 'a-te-li-E', ipa: '[ateliˈe]', sl: 'substantiivi, maskuliini' },
    'para o ateliê': { fi: 'ateljeehen', aa: 'PA-ra u a-te-li-E', ipa: '[ˈpaɾɐ u ateliˈe]', sl: 'ilmaus' },
    'para casa': { fi: 'kotiin', aa: 'PA-ra KA-za', ipa: '[ˈpaɾɐ ˈkazɐ]', sl: 'ilmaus' },
    'até amanhã': { fi: 'huomiseen!, nähdään huomenna', aa: 'a-TE a-mã-NJÃ', ipa: '[aˈtɛ amɐ̃ˈɲɐ̃]', sl: 'hyvästely', huom: 'ansa: ”até manhã” ei toimi' },
    'amanhã': { fi: 'huomenna', aa: 'a-mã-NJÃ', ipa: '[amɐ̃ˈɲɐ̃]', sl: 'adverbi', huom: 'ansa: espanjassa mañana tarkoittaa sekä aamua että huomista, portugalissa {manhã} = aamu ja amanhã = huomenna' },
    'até manhã': { fi: '(väärin) nähdään aamulla', aa: 'a-TE ma-NJÃ', ipa: '[aˈtɛ maˈɲɐ̃]', sl: 'virhe', huom: 'Jayn espanjalähtöinen virhe: oikein {até amanhã}' },
    'é sexta': { fi: 'on perjantai', aa: 'E SES-ta', ipa: '[ɛ ˈsestɐ]', sl: 'ilmaus' },
    'eu gosto da semana': { fi: 'pidän viikosta', aa: 'EU GOS-tu da se-MÃ-na', ipa: '[ew ˈɡostu da seˈmɐ̃nɐ]', sl: 'ilmaus', huom: 'gostar de + sana, ks. jakso 4' },

    // kuulumiset ja hyvästit
    'como vai': { fi: 'mitä kuuluu?', aa: 'KO-mu VAI', ipa: '[ˈkomu vaj]', sl: 'kysymys', huom: 'kirjaimellisesti ”miten menee?”' },
    'tudo bom': { fi: 'kaikki hyvin', aa: 'TU-du BÕ', ipa: '[ˈtudu bõ]', sl: 'ilmaus', huom: 'tavallinen vastaus kysymykseen {tudo bem}' },
    'tudo ótimo': { fi: 'kaikki loistavasti', aa: 'TU-du O-tsi-mu', ipa: '[ˈtudu ˈɔtʃimu]', sl: 'ilmaus' },
    'ótimo': { fi: 'loistava, erinomainen', aa: 'O-tsi-mu', ipa: '[ˈɔtʃimu]', sl: 'adjektiivi', huom: 'paino kolmanneksi viimeisellä tavulla, siksi aksentti' },
    'mais ou menos': { fi: 'siinä keskivaiheilla; sinne päin', aa: 'MAIS ou ME-nus', ipa: '[majs ow ˈmenus]', sl: 'ilmaus', huom: 'vastaus kysymykseen mitä kuuluu' },
    'mal': { fi: 'huonosti', aa: 'MAU', ipa: '[maw]', sl: 'adverbi', huom: 'vastakohta {bem}' },
    'até segunda': { fi: 'nähdään maanantaina', aa: 'a-TE se-GŨ-da', ipa: '[aˈtɛ seˈɡũdɐ]', sl: 'hyvästely' },
    'bom fim de semana': { fi: 'hyvää viikonloppua', aa: 'BÕ FĨ di se-MÃ-na', ipa: '[ˈbõ ˈfĩ dʒi seˈmɐ̃nɐ]', sl: 'hyvästely' },
    'fim de semana': { fi: 'viikonloppu', aa: 'FĨ di se-MÃ-na', ipa: '[ˈfĩ dʒi seˈmɐ̃nɐ]', sl: 'substantiivi, maskuliini', huom: 'o fim de semana' },
    'até mais': { fi: 'nähdään, moi moi', aa: 'a-TE MAIS', ipa: '[aˈtɛ majs]', sl: 'hyvästely', huom: 'arkinen' },
    'que dia é hoje': { fi: 'mikä päivä on tänään?', aa: 'KI DI-a E O-zhi', ipa: '[ki ˈdʒiɐ ɛ ˈoʒi]', sl: 'kysymys' },
    'hoje é segunda': { fi: 'tänään on maanantai', aa: 'O-zhi E se-GŨ-da', ipa: '[ˈoʒi ɛ seˈɡũdɐ]', sl: 'ilmaus' },
    'dia da semana': { fi: 'viikonpäivä', aa: 'DI-a da se-MÃ-na', ipa: '[ˈdʒiɐ da seˈmɐ̃nɐ]', sl: 'ilmaus' },

    // kielioppi
    'à': { fi: '-lle, -hon (feminiinisanan edellä)', aa: 'a', ipa: '[a]', sl: 'prepositio + artikkeli', huom: '{a} + {a}; aksenttia kutsutaan nimellä crase' },
    'laboratório': { fi: 'laboratorio', aa: 'la-bo-ra-TO-rju', ipa: '[laboɾaˈtɔɾju]', sl: 'substantiivi, maskuliini' },
    'escritório': { fi: 'toimisto', aa: 'es-kri-TO-rju', ipa: '[eskɾiˈtɔɾju]', sl: 'substantiivi, maskuliini', huom: 'ansa: espanjassa escritorio on kirjoituspöytä' },

    // ääntäminen
    'avó': { fi: 'isoäiti', aa: 'a-VO', ipa: '[aˈvɔ]', sl: 'substantiivi, feminiini', huom: 'avoin o; isoisä on {avô} (suljettu o)' },
    'avô': { fi: 'isoisä', aa: 'a-VO', ipa: '[aˈvo]', sl: 'substantiivi, maskuliini', huom: 'suljettu o; isoäiti on {avó} (avoin o)' },
    'mesa': { fi: 'pöytä', aa: 'ME-za', ipa: '[ˈmezɐ]', sl: 'substantiivi, feminiini' },
    'todo': { fi: 'koko; jokainen', aa: 'TO-du', ipa: '[ˈtodu]', sl: 'adjektiivi, pronomini' },
    'lua': { fi: 'kuu', aa: 'LU-a', ipa: '[ˈluɐ]', sl: 'substantiivi, feminiini' },
    'pé': { fi: 'jalka (jalkaterä)', aa: 'PE', ipa: '[pɛ]', sl: 'substantiivi, maskuliini' },
    'só': { fi: 'vain', aa: 'SO', ipa: '[sɔ]', sl: 'adverbi' }
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kysyä ja kertoa kuulumiset: <span class="pt">Como você está? Estou bem.</span></li>
  <li>Osaat sanoa, missä olet ja minne menet (verbit <span class="pt">estar</span> ja <span class="pt">ir</span>).</li>
  <li>Osaat viikonpäivät ja hyvästit: <span class="pt">até amanhã</span>, <span class="pt">bom fim de semana</span>.</li>
  <li>Osaat erottaa kysymyssanat <span class="pt">onde</span>, <span class="pt">aonde</span> ja <span class="pt">de onde</span> sekä lausua portugalin vokaalit.</li>
</ul>
<p data-paikka="sornainen-metroasema">Helsinki, maanantaiaamu kello 7.40. Jay ja Maia seisovat Sörnäisten metroasemalla. He lähtevät töihin Kivien tutkimuskeskukseen (Rocks Research Center, RRC) Otaniemeen, Espooseen. Jay ei ole aamuihminen.</p>

<section class="osio">
  <h2>Dialogi: Vamos!</h2>
  <p class="ohje">Kuuntele koko dialogi ensin ilman suomennoksia. Kuinka monta viikonpäivää kuulet? Jay tekee espanjasta tulevan virheen hyvästellessään: kuuntele loppu tarkasti.</p>
  <div class="metro" data-dialogi="l02-dialogi" data-linja="M1" data-asemat="Sörnäinen|Hakaniemi|Helsingin yliopisto|Rautatientori|Kamppi|Ruoholahti|Lauttasaari|Koivusaari|Keilaniemi|Aalto-yliopisto"></div>
  <div class="kpl" id="l02-dialogi" data-nimi="Kuuntele dialogi">
    <p class="s" data-paikka="sornainen-metroasema" data-h="kertoja" data-puhu="Helsinque, segunda-feira de manhã. Jay e Maia estão na estação de metrô, em Sornainen." data-fi="Helsinki, maanantaiaamu. Jay ja Maia ovat Sörnäisten metroasemalla.">Helsinque, segunda-feira de manhã. Jay e Maia estão na estação de metrô, em Sörnäinen.</p>
    <p class="s" data-h="maia" data-fi="Huomenta, Jay! Mitä sinulle kuuluu?">Bom dia, Jay! Como você está?</p>
    <p class="s" data-h="jay" data-fi="Huomenta. Hyvää, mutta olen väsynyt. Maanantai on viikon huonoin päivä.">Bom dia. Estou bem, mas estou cansado. Segunda-feira é o pior dia da semana.</p>
    <p class="s" data-h="maia" data-fi="Ja mikä on paras päivä?">E qual é o melhor dia?</p>
    <p class="s" data-h="jay" data-fi="Sunnuntai! Sunnuntai on sohvan päivä.">Domingo! O domingo é o dia do sofá.</p>
    <p class="s" data-h="maia" data-fi="Jay! Metro on tässä. Mennään!">Jay! O metrô está aqui. Vamos!</p>
    <p class="s" data-paikka="otaniemi-aalto" data-h="kertoja" data-fi="Metro menee Otaniemeen, Espooseen.">O metrô vai para Otaniemi, em Espoo.</p>
    <p class="s" data-h="jay" data-fi="Maia, minne me menemme tänään? Saunaanko?">Maia, aonde nós vamos hoje? Para a sauna?</p>
    <p class="s" data-h="maia" data-puhu="Não, Jay. A gente vai para o trabalho, no érre érre cê." data-fi="Ei, Jay. Me menemme töihin RRC:lle.">Não, Jay. A gente vai para o trabalho, no RRC.</p>
    <p class="s" data-h="jay" data-fi="Ai niin, totta! Missä Otaniemi on?">Ah, é verdade! E onde fica Otaniemi?</p>
    <p class="s" data-h="maia" data-fi="Se on Espoossa, Helsingin vieressä.">Fica em Espoo, ao lado de Helsinque.</p>
    <p class="s" data-paikka="kallio-hameentie-ilta" data-h="kertoja" data-fi="Torstai-ilta. Maia menee ateljeehen ja Jay kotiin.">Quinta-feira, de noite. Maia vai para o ateliê e Jay vai para casa.</p>
    <p class="s" data-h="maia" data-fi="Hei hei, Jay! Nähdään huomenna!">Tchau, Jay! Até amanhã!</p>
    <p class="s" data-h="jay" data-fi="Hei hei, Maia! Nähdään aamulla! (väärin)">Tchau, Maia! Até manhã!</p>
    <p class="s" data-h="maia" data-fi="Amanhã, Jay! Manhã on aamu. Amanhã on päivä tämän päivän jälkeen.">Amanhã, Jay! Manhã é de manhã. Amanhã é o dia depois de hoje.</p>
    <p class="s" data-h="jay" data-fi="Ai, anteeksi! Nähdään huomenna siis. Hyvää yötä!">Ah, desculpa! Até amanhã, então. Boa noite!</p>
    <p class="s" data-h="maia" data-fi="Hyvää yötä! Huomenna on perjantai.">Boa noite! Amanhã é sexta.</p>
    <p class="s" data-h="jay" data-fi="Perjantai, lauantai ja sunnuntai: pidän viikosta!">Sexta, sábado e domingo: eu gosto da semana!</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Kuulumiset" data-sanat="tudo bem,tudo bom,como vai,como você está,estou bem,tudo ótimo,ótimo,mais ou menos,mal,cansado,cansada"></div>
  <div class="teema" data-otsikko="Paikka ja liike" data-sanat="metrô,estação,casa,trabalho,ateliê,escritório,laboratório,sauna,ao lado de,onde fica"></div>
</section>

<section class="osio">
  <h2>Kuulumiset ja hyvästit</h2>
  <p>Tuttavan tapaaminen alkaa kysymyksellä kuulumisista. Kysymyksiä on kolme tavallista, ja kaikki toimivat samoin.</p>
  <ul class="esim">
    <li class="s" data-fi="Mitä kuuluu? (hyvin tavallinen)">Tudo bem?</li>
    <li class="s" data-fi="Mitä kuuluu? (kirjaimellisesti: miten menee?)">Como vai?</li>
    <li class="s" data-fi="Mitä sinulle kuuluu? (kirjaimellisesti: miten sinä olet?)">Como você está?</li>
  </ul>
  <p>Vastauksia, hyvästä huonoon:</p>
  <ul class="esim">
    <li class="s" data-fi="Kaikki loistavasti!">Tudo ótimo!</li>
    <li class="s" data-fi="Hyvää, kiitos.">Tudo bem, obrigado.</li>
    <li class="s" data-fi="Hyvin.">Estou bem.</li>
    <li class="s" data-fi="Siinä keskivaiheilla.">Mais ou menos.</li>
    <li class="s" data-fi="Olen väsynyt.">Estou cansado.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> portugalissa kysytään myös takaisin: <span class="pt">Tudo bem. E você?</span> Se kuuluu kohteliaisuuteen. Väsynyt on <span class="pt">cansado</span> mieheltä ja <span class="pt">cansada</span> naiselta.</p>
  </div>
  <p>Hyvästellessä sanotaan:</p>
  <ul class="esim">
    <li class="s" data-fi="nähdään pian">Até logo!</li>
    <li class="s" data-fi="nähdään (arkinen)">Até mais!</li>
    <li class="s" data-fi="nähdään huomenna">Até amanhã!</li>
    <li class="s" data-fi="nähdään maanantaina">Até segunda!</li>
    <li class="s" data-fi="hyvää viikonloppua (perjantaina)">Bom fim de semana!</li>
  </ul>
  <div class="huomio">
    <p><b>Espanjan ansa:</b> espanjassa <i lang="es">mañana</i> tarkoittaa sekä aamua että huomista, ja hyvästi on <i lang="es">hasta mañana</i>. Portugalissa sanat ovat eri: <span class="pt">manhã</span> on aamu ja <span class="pt">amanhã</span> on huominen. Siksi Jay ei voi sanoa <span class="pt">até manhã</span>, vaan <span class="pt">até amanhã</span>. Espanjassa sama sana kattaa molemmat, portugalissa tarvitaan kaksi sanaa.</p>
  </div>
</section>

<section class="osio">
  <h2>Viikonpäivät</h2>
  <p>Brasiliassa viikko alkaa sunnuntaista. Viikonpäivät kirjoitetaan pienellä alkukirjaimella. Maanantaista perjantaihin päivän nimessä on loppuosa <span class="pt">-feira</span>, ja päivät on numeroitu: <span class="pt">segunda</span> on toinen, <span class="pt">terça</span> kolmas, <span class="pt">quarta</span> neljäs, <span class="pt">quinta</span> viides ja <span class="pt">sexta</span> kuudes. Puheessa <span class="pt">-feira</span> jätetään yleensä pois: <span class="pt">segunda</span>, <span class="pt">terça</span> ja niin edelleen. Lauantai ja sunnuntai (<span class="pt">sábado</span>, <span class="pt">domingo</span>) eivät saa tuota loppuosaa.</p>
  <ul class="esim">
    <li class="s" data-fi="maanantai">segunda-feira</li>
    <li class="s" data-fi="tiistai">terça-feira</li>
    <li class="s" data-fi="keskiviikko">quarta-feira</li>
    <li class="s" data-fi="torstai">quinta-feira</li>
    <li class="s" data-fi="perjantai">sexta-feira</li>
    <li class="s" data-fi="lauantai">sábado</li>
    <li class="s" data-fi="sunnuntai">domingo</li>
  </ul>
  <ul class="esim">
    <li class="s" data-fi="Mikä päivä on tänään?">Que dia é hoje?</li>
    <li class="s" data-fi="Tänään on maanantai.">Hoje é segunda.</li>
    <li class="s" data-fi="Huomenna on perjantai.">Amanhã é sexta.</li>
  </ul>
  <p>Espanjasta tuttuja ovat <span class="pt">sábado</span> ja <span class="pt">domingo</span>. Muut päivät ovat erilaiset: <i lang="es">lunes</i> on <span class="pt">segunda</span>, <i lang="es">martes</i> on <span class="pt">terça</span>, <i lang="es">miércoles</i> on <span class="pt">quarta</span>, <i lang="es">jueves</i> on <span class="pt">quinta</span> ja <i lang="es">viernes</i> on <span class="pt">sexta</span>.</p>
</section>

<section class="osio">
  <h2>Kielioppi</h2>

  <h3>1. Verbi estar (olla jossakin, olla jonkinlainen)</h3>
  <p>Portugalissa on kaksi ”olla”-verbiä. Jaksossa 1 opit verbin <span class="pt">ser</span> (kuka tai mikä joku on). Verbi <span class="pt">estar</span> kertoo, <b>missä</b> joku on tai <b>millainen hän on juuri nyt</b>: väsynyt, hyvinvoiva, kiireinen. Ero tarkentuu jaksossa 6.</p>
  <table class="taivutus">
    <tr><td>minä olen</td><td>eu estou</td></tr>
    <tr><td>sinä olet</td><td>você está</td></tr>
    <tr><td>hän on</td><td>ele está / ela está</td></tr>
    <tr><td>me olemme</td><td>nós estamos / a gente está</td></tr>
    <tr><td>te olette</td><td>vocês estão</td></tr>
    <tr><td>he ovat</td><td>eles estão / elas estão</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Minä olen Helsingissä.">Eu estou em Helsinque.</li>
    <li class="s" data-fi="Jay on väsynyt.">O Jay está cansado.</li>
    <li class="s" data-fi="Metro on tässä.">O metrô está aqui.</li>
    <li class="s" data-fi="Me olemme Sörnäisissä.">Nós estamos em Sörnäinen.</li>
    <li class="s" data-fi="He ovat työpaikalla.">Eles estão no trabalho.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> Puhekielessä <span class="pt">estou</span> on lähes aina <span class="pt">tô</span> ja <span class="pt">está</span> on <span class="pt">tá</span>: <span class="pt">Tô cansado. A gente tá em casa.</span> Kirjoitetussa tekstissä ja oppikirjoissa käytetään täysiä muotoja. Tavallisia ovat myös <span class="pt">Tá tudo bem?</span> (onko kaikki hyvin?) ja <span class="pt">Tá bom!</span> (selvä!).</p>
  </div>
  <p><b>Espanjaan verrattuna:</b> <i lang="es">estoy, está, estamos, están</i> ovat lähes samat. Portugalissa <span class="pt">estou</span> päättyy -ou ja ääntyy kuten ”es-TOU”, ja monikko on <span class="pt">estão</span> (nasaalinen), ei <i lang="es">están</i>.</p>

  <h3>2. Verbi ir (mennä)</h3>
  <p><span class="pt">Ir</span> on epäsäännöllinen. Sitä käytetään, kun mennään jonnekin: <span class="pt">ir para</span> + paikka (puheessa myös <span class="pt">pra</span>), kirjoitetussa kielessä ja lyhyellä käynnillä <span class="pt">ir a</span> + paikka.</p>
  <table class="taivutus">
    <tr><td>minä menen</td><td>eu vou</td></tr>
    <tr><td>sinä menet</td><td>você vai</td></tr>
    <tr><td>hän menee</td><td>ele vai / ela vai</td></tr>
    <tr><td>me menemme</td><td>nós vamos / a gente vai</td></tr>
    <tr><td>te menette</td><td>vocês vão</td></tr>
    <tr><td>he menevät</td><td>eles vão / elas vão</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Minä menen töihin.">Eu vou para o trabalho.</li>
    <li class="s" data-fi="Metro menee Otaniemeen.">O metrô vai para Otaniemi.</li>
    <li class="s" data-fi="Maia menee ateljeehen.">A Maia vai para o ateliê.</li>
    <li class="s" data-fi="Me menemme kotiin.">A gente vai para casa.</li>
    <li class="s" data-fi="He menevät kotiin.">Eles vão para casa.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> <span class="pt">Vamos!</span> tarkoittaa myös ”mennään!”. Se on lyhyt, usein kuultu kehotus: <span class="pt">Vamos!</span> Verbi <span class="pt">ir</span> on myös tulevan ajan apuverbi (<span class="pt">vou comprar</span> = aion ostaa), mutta se opitaan jaksossa 4.</p>
  </div>
  <p><b>Espanjaan verrattuna:</b> <i lang="es">voy, vas, va, vamos, van</i> ja <span class="pt">vou, vai, vamos, vão</span> ovat samaa sukua. <span class="pt">Vamos</span> on sama sana.</p>

  <h3>3. Pienet paikkasanat: em, de, a ja para</h3>
  <ul class="esim">
    <li class="s" data-fi="em = missä, -ssa, -ssä, -lla, -llä">Eu estou em Helsinque.</li>
    <li class="s" data-fi="de = mistä, -sta, -stä; myös omistus">Ele é de Belo Horizonte.</li>
    <li class="s" data-fi="a, para = minne, -lle, -hin">Vamos para casa.</li>
  </ul>
  <p>Prepositio on pieni sana, joka kertoo paikan, suunnan tai omistuksen. Suomessa saman tehtävän hoitavat sijapäätteet (-ssa, -sta, -lle). Portugalissa prepositio kirjoitetaan omana sanana. Kun sen jälkeen tulee määräinen artikkeli (<span class="pt">o</span>, <span class="pt">a</span>), kaksi sanaa yhtyy yhdeksi:</p>
  <table class="taivutus">
    <tr><td>em + o = no</td><td>no metrô</td></tr>
    <tr><td>em + a = na</td><td>na estação</td></tr>
    <tr><td>de + o = do</td><td>o dia do sofá</td></tr>
    <tr><td>de + a = da</td><td>o dia da semana</td></tr>
    <tr><td>a + o = ao</td><td>ao trabalho</td></tr>
    <tr><td>a + a = à</td><td>à sauna</td></tr>
  </table>
  <div class="muista">
    <p><b>Muista:</b> kaupunkien nimien edessä ei ole artikkelia, joten ei yhdistymistä: <span class="pt">em Helsinque</span>, <span class="pt">de Belo Horizonte</span>. Kun sanalla on artikkeli, yhdistyminen on pakollinen: ei <span class="pt">em o trabalho</span>, vaan <span class="pt">no trabalho</span>. Puheessa <span class="pt">para a</span> ja <span class="pt">para o</span> lyhenevät: <span class="pt">pra</span> ja <span class="pt">pro</span>. Lisää yhdistymisistä jaksossa 3.</p>
  </div>

  <h3>4. Kysymyssanat: onde, aonde, de onde</h3>
  <p>Paikkaa kysytään kolmella tavalla, kuten suomessakin missä, mihin ja mistä. Ne vastaavat espanjan sanoja <i lang="es">dónde, adónde, de dónde</i>.</p>
  <table class="taivutus">
    <tr><td>missä (paikka)</td><td>onde</td></tr>
    <tr><td>mihin (liike)</td><td>aonde</td></tr>
    <tr><td>mistä (lähtöpaikka)</td><td>de onde</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Missä sinä olet?">Onde você está?</li>
    <li class="s" data-fi="Minne sinä menet?">Aonde você vai?</li>
    <li class="s" data-fi="Mistä sinä olet kotoisin?">Você é de onde?</li>
    <li class="s" data-fi="Missä Otaniemi sijaitsee?">Onde fica Otaniemi?</li>
  </ul>
  <p>Puhekielessä <span class="pt">onde</span> kelpaa usein myös ”mihin”: <span class="pt">Onde você vai?</span> kuuluu Brasiliassa yhtä usein kuin <span class="pt">Aonde você vai?</span>. Kirjoitetussa tekstissä erotetaan.</p>
</section>

<section class="osio">
  <h2>Ääntäminen: vokaalit</h2>
  <p>Portugalissa on viisi vokaalikirjainta (a, e, i, o, u), mutta e ja o voivat kuulostaa kahdella tavalla. Aksenttimerkit kertovat painon lisäksi vokaalin laadun: <b>terävä aksentti</b> (é, ó) tarkoittaa avointa vokaalia (avoin e on lähellä suomen ä:tä, avoin o on suomen o:ta avoimempi), <b>sirkumfleksi</b> (ê, ô) suljettua (suljettu e ja o ovat kuin suomen e ja o).</p>

  <div class="saanto">
    <h3>1. Suljettu ja avoin e</h3>
    <p>Suljettu e on kuin suomen ”e”. Avoin e on lähellä suomen ”ä”-äännettä.</p>
    <ul class="esim">
      <li class="s">você</li>
      <li class="s">ele</li>
      <li class="s">mesa</li>
      <li class="s">café</li>
      <li class="s">ela</li>
      <li class="s">pé</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>2. Suljettu ja avoin o</h3>
    <p>Pari <span class="pt">avô</span> (isoisä, suljettu o) ja <span class="pt">avó</span> (isoäiti, avoin o) on hyvä muistisääntö: aksentti kertoo, kumpi.</p>
    <ul class="esim">
      <li class="s">avô</li>
      <li class="s">como</li>
      <li class="s">todo</li>
      <li class="s">avó</li>
      <li class="s">só</li>
      <li class="s">sol</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>3. a, i ja u ovat melkein kuin suomessa</h3>
    <p>Painollinen <b>a</b> on kuin suomen ”a”. <b>i</b> ja <b>u</b> ovat kuin suomen ”i” ja ”u”. Vältä ”ö” ja ”y” -äänteitä, joita portugalissa ei ole.</p>
    <ul class="esim">
      <li class="s">casa</li>
      <li class="s">aqui</li>
      <li class="s">lua</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>4. Painottomat vokaalit ovat heikkoja</h3>
    <p>Sanan lopussa painoton <b>a</b> on lyhyt ja heikko, painoton <b>o</b> kuulostaa u:lta ja painoton <b>e</b> i:ltä (sääntö 2 oppitunnilla 0). Sana ei saa ”kuolla” loppuun: lausu loppu lyhyesti, mutta älä jätä sitä pois.</p>
    <ul class="esim">
      <li class="s">sábado</li>
      <li class="s">domingo</li>
      <li class="s">cansada</li>
      <li class="s">semana</li>
    </ul>
  </div>

  <div class="huomio">
    <p><b>Suomalaisen sudenkuoppa:</b> suomessa vokaalit ovat lyhyitä tai pitkiä (a ja aa). Portugalissa vokaalin pituutta ei merkitä, mutta painollinen tavu on hieman pidempi kuin painottomat. Älä tuplaa vokaaleja (<span class="pt">sábado</span> ei ole ”saabadoo”).</p>
  </div>
</section>

<aside class="kulttuuri" data-paikka="otaniemi-aalto">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Sörnäinen ja Otaniemi</h3>
  <figure class="kuva" data-kuva="otaniemi-aalto"></figure>
  <p>Jayn ja Maian koti on Sörnäisissä, Helsingin kaupunginosassa, jonka keskus on Sörnäisten metroaseman ympäristö ja Piritori. Sörnäinen oli pitkään satama- ja teollisuusaluetta, ja nykyään siellä asutaan. Kaupunginosa on aivan Kallion ja Hakaniemen vieressä. Nimi tulee ruotsin sanasta <i>Sörnäs</i>.</p>
  <p>Helsingin metro avattiin vuonna 1982. Se on Suomen ainoa metrojärjestelmä, ja sitä sanotaan maailman pohjoisimmaksi metroksi. Länsimetro, joka jatkaa metron Espooseen, avattiin vuonna 2017. Sörnäisistä pääsee suoraan Otaniemeen: Otaniemen metroasema on nimeltään Aalto-yliopisto.</p>
  <p>Otaniemi on Espoon kaupunginosa, jossa on Aalto-yliopiston pääkampus, VTT:n tutkimusyksikkö ja tarinassa Kivien tutkimuskeskus (Rocks Research Center), jossa Jay ja Maia työskentelevät. Arkkitehti Alvar Aalto suunnitteli Otaniemen kampusalueen asemakaavan ja useita sen rakennuksia. Jay ja Maia tapasivat toimistolla juuri tällä alueella.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Täydennä: estar vai ir</h3>
    <p class="ohje">Kirjoita verbin oikea muoto: <span class="pt">estou</span>, <span class="pt">está</span>, <span class="pt">estamos</span>, <span class="pt">estão</span>, <span class="pt">vou</span>, <span class="pt">vai</span>, <span class="pt">vamos</span> tai <span class="pt">vão</span>.</p>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="estou|tô"></span> cansado hoje.</p>
      <p>Você <span class="aukko" data-oikea="está|tá"></span> bem?</p>
      <p>O metrô <span class="aukko" data-oikea="vai"></span> para Otaniemi.</p>
      <p>Nós <span class="aukko" data-oikea="vamos"></span> para o trabalho.</p>
      <p>Eu <span class="aukko" data-oikea="vou"></span> para casa.</p>
      <p>A Maia e o Jay <span class="aukko" data-oikea="estão"></span> na estação.</p>
      <p>Eles <span class="aukko" data-oikea="vão"></span> para o ateliê.</p>
      <p>Nós <span class="aukko" data-oikea="estamos"></span> em Helsinque.</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Yhdistä viikonpäivät</h3>
    <ul class="yhdista">
      <li data-pari="maanantai">segunda-feira</li>
      <li data-pari="tiistai">terça-feira</li>
      <li data-pari="keskiviikko">quarta-feira</li>
      <li data-pari="torstai">quinta-feira</li>
      <li data-pari="perjantai">sexta-feira</li>
      <li data-pari="lauantai">sábado</li>
      <li data-pari="sunnuntai">domingo</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Missä, minne vai mistä?</h3>
    <p class="ohje">Valitse oikea kysymyssana.</p>
    <div class="valinta" data-oikea="Onde">
      <p class="kysymys">___ fica o RRC? (missä)</p>
      <div class="vaihtoehdot"><button type="button">Onde</button><button type="button">Aonde</button><button type="button">De onde</button></div>
    </div>
    <div class="valinta" data-oikea="Aonde">
      <p class="kysymys">___ vocês vão? (minne)</p>
      <div class="vaihtoehdot"><button type="button">Onde</button><button type="button">Aonde</button><button type="button">De onde</button></div>
    </div>
    <div class="valinta" data-oikea="De onde">
      <p class="kysymys">___ você é? (mistä)</p>
      <div class="vaihtoehdot"><button type="button">Onde</button><button type="button">Aonde</button><button type="button">De onde</button></div>
    </div>
    <div class="valinta" data-oikea="Onde">
      <p class="kysymys">___ vocês estão? (missä)</p>
      <div class="vaihtoehdot"><button type="button">Onde</button><button type="button">Aonde</button><button type="button">De onde</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Ser vai estar?</h3>
    <p class="ohje">Valitse oikea verbi. Ser kertoo kuka tai mikä, estar missä tai millainen juuri nyt.</p>
    <div class="valinta" data-oikea="sou">
      <p class="kysymys">Eu ___ finlandês.</p>
      <div class="vaihtoehdot"><button type="button">sou</button><button type="button">estou</button></div>
    </div>
    <div class="valinta" data-oikea="estou">
      <p class="kysymys">Eu ___ em Helsinque.</p>
      <div class="vaihtoehdot"><button type="button">sou</button><button type="button">estou</button></div>
    </div>
    <div class="valinta" data-oikea="está">
      <p class="kysymys">O Jay ___ cansado hoje.</p>
      <div class="vaihtoehdot"><button type="button">é</button><button type="button">está</button></div>
    </div>
    <div class="valinta" data-oikea="é">
      <p class="kysymys">A Maia ___ de Belo Horizonte.</p>
      <div class="vaihtoehdot"><button type="button">é</button><button type="button">está</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: Jayn viikko</h3>
    <p class="ohje">Tässä on Jayn viikko Maian piirtämänä. Katso kalenteria ja vastaa: minne Jay menee, ja missä hän on?</p>
    <div class="dokumentti kalenteri" lang="pt-BR">
      <div class="kal-yla"><b>A semana do Jay</b><small>desenho da Maia</small></div>
      <div class="kal-paivat">
        <div class="kal-paiva"><b>segunda</b><span class="kal-kuva" aria-hidden="true">🏢</span><small>trabalho (RRC)</small></div>
        <div class="kal-paiva"><b>terça</b><span class="kal-kuva" aria-hidden="true">🪨</span><small>trabalho: laboratório</small></div>
        <div class="kal-paiva"><b>quarta</b><span class="kal-kuva" aria-hidden="true">♨️</span><small>sauna</small></div>
        <div class="kal-paiva"><b>quinta</b><span class="kal-kuva" aria-hidden="true">🏠</span><small>casa (a Maia: ateliê)</small></div>
        <div class="kal-paiva"><b>sexta</b><span class="kal-kuva" aria-hidden="true">🍺</span><small>bar, Kallio</small></div>
        <div class="kal-paiva"><b>sábado</b><span class="kal-kuva" aria-hidden="true">🛒</span><small>mercado</small></div>
        <div class="kal-paiva kal-paras"><b>domingo</b><span class="kal-kuva" aria-hidden="true">🛋️</span><small>sofá!</small></div>
      </div>
    </div>
    <div class="valinta" data-oikea="para a sauna">
      <p class="kysymys">Aonde o Jay vai na quarta?</p>
      <div class="vaihtoehdot"><button type="button">para a sauna</button><button type="button">para o trabalho</button><button type="button">para casa</button></div>
    </div>
    <div class="valinta" data-oikea="no bar">
      <p class="kysymys">Onde o Jay está na sexta de noite?</p>
      <div class="vaihtoehdot"><button type="button">no sofá</button><button type="button">no bar</button><button type="button">no ateliê</button></div>
    </div>
    <div class="valinta" data-oikea="domingo">
      <p class="kysymys">Qual é o melhor dia do Jay?</p>
      <div class="vaihtoehdot"><button type="button">segunda</button><button type="button">sexta</button><button type="button">domingo</button></div>
    </div>
    <div class="valinta" data-oikea="no ateliê">
      <p class="kysymys">Onde a Maia está na quinta?</p>
      <div class="vaihtoehdot"><button type="button">em casa</button><button type="button">no ateliê</button><button type="button">na sauna</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Kuuntele ja valitse päivä</h3>
    <p class="ohje">Paina ▶ ja valitse viikonpäivä, jonka kuulit.</p>
    <div class="valinta" data-kuuntele="quarta-feira" data-oikea="quarta-feira">
      <p class="kysymys">Mikä päivä?</p>
      <div class="vaihtoehdot"><button type="button">quarta-feira</button><button type="button">quinta-feira</button><button type="button">sexta-feira</button></div>
    </div>
    <div class="valinta" data-kuuntele="sábado" data-oikea="sábado">
      <p class="kysymys">Mikä päivä?</p>
      <div class="vaihtoehdot"><button type="button">sábado</button><button type="button">domingo</button><button type="button">segunda-feira</button></div>
    </div>
    <div class="valinta" data-kuuntele="terça-feira" data-oikea="terça-feira">
      <p class="kysymys">Mikä päivä?</p>
      <div class="vaihtoehdot"><button type="button">terça-feira</button><button type="button">quinta-feira</button><button type="button">segunda-feira</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause.</p>
    <div class="sanelu" data-puhu="Como você está?"></div>
    <div class="sanelu" data-puhu="O metrô vai para Otaniemi."></div>
    <div class="sanelu" data-puhu="Até amanhã!"></div>
    <div class="sanelu" data-puhu="Hoje é sexta-feira."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Mitä sinulle kuuluu? – Hyvää, mutta olen väsynyt.</p><p class="s" data-fi="Mitä sinulle kuuluu? – Hyvää, mutta olen väsynyt.">Como você está? – Estou bem, mas estou cansado.</p></div>
    <div class="kaanna"><p class="fi">Me menemme töihin.</p><p class="s" data-fi="Me menemme töihin.">A gente vai para o trabalho.</p></div>
    <div class="kaanna"><p class="fi">Mikä päivä on tänään? – Tänään on torstai.</p><p class="s" data-fi="Mikä päivä on tänään? – Tänään on torstai.">Que dia é hoje? – Hoje é quinta.</p></div>
    <div class="kaanna"><p class="fi">Missä Otaniemi on? – Espoossa.</p><p class="s" data-fi="Missä Otaniemi on? – Espoossa.">Onde fica Otaniemi? – Em Espoo.</p></div>
    <div class="kaanna"><p class="fi">Nähdään huomenna!</p><p class="s" data-fi="Nähdään huomenna!">Até amanhã!</p></div>
    <div class="kaanna"><p class="fi">Metro on tässä. Mennään!</p><p class="s" data-fi="Metro on tässä. Mennään!">O metrô está aqui. Vamos!</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Como você está hoje?</summary>
      <p class="s" data-fi="Hyvin, kiitos. Entä sinä?">Estou bem, obrigado. E você?</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Que dia é hoje?</summary>
      <p class="s" data-fi="Tänään on maanantai.">Hoje é segunda.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Aonde você vai amanhã?</summary>
      <p class="s" data-fi="Menen töihin.">Eu vou para o trabalho.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Onde você está agora?</summary>
      <p class="s" data-fi="Olen kotona.">Estou em casa.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l02">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l02-viikko" lang="pt-BR">
      <div class="kal-yla"><b>A minha semana</b><small>kirjoita jokaiseen päivään yksi lause</small></div>
      <div class="kal-rivit">
        <label>segunda <input name="segunda" placeholder="Na segunda eu vou para…"></label>
        <label>terça <input name="terca" placeholder="Na terça eu estou…"></label>
        <label>quarta <input name="quarta"></label>
        <label>quinta <input name="quinta"></label>
        <label>sexta <input name="sexta"></label>
        <label>sábado <input name="sabado"></label>
        <label>domingo <input name="domingo"></label>
      </div>
    </div>
    <p>Kirjoita viisi lausetta oman viikkosi päivistä. Käytä verbejä <span class="pt">estar</span> ja <span class="pt">ir</span> ja ainakin kolmea eri viikonpäivää: missä olet maanantaina, minne menet keskiviikkona, mitä teet viikonloppuna. Sano teksti sitten ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Maanantaina olen töissä.">Na segunda eu estou no trabalho.</p>
      <p class="s" data-fi="Tiistaina olen väsynyt.">Na terça eu estou cansado.</p>
      <p class="s" data-fi="Keskiviikkona menen saunaan.">Na quarta eu vou para a sauna.</p>
      <p class="s" data-fi="Lauantaina olemme kotona.">No sábado a gente está em casa.</p>
      <p class="s" data-fi="Sunnuntaina olen sohvalla.">No domingo eu estou no sofá.</p>
    </details>
  </div>
</section>
`
});
