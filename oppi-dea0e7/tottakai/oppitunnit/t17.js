/* Tottakai, lição 17: Rio, missä Jay on? Ihmisen kuvailu (Passon jakso 17 Maian näkökulmasta). Oma materiaali, ei
   kirjan tekstiä. Kurssisuunnitelma: docs/RUNKO_13_20.md §6 ”Lesson 17”; tarinan kalenteri: ti 29.12.2026, Rio de Janeiro
   (oppitunti 16 = ma 28.12.: viimeinen joulujuhla ja yöbussi Rioon; oppitunti 18 = ke 30.12. Ipanema ja UPA).
   Materiaalivaihe 7.11.2026 (ass/oppitunnit/t17.md §6): omistajan lukitsemat dialogit ass/luonnokset/t17-a-1_lopullinen.md
   ja t17-b-1_lopullinen.md sellaisinaan (suomi ja portugali; Marisan virheet data-hairio).
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t17, ”Parte A · Encontro”): yöbussi saapui Rioon; Copacabanan hiekassa Uuno ja Eenok vaaleansinisissä
     haalareissa (dialogi A: Maia kuvailee Eenokin Marisalle, Eenok kuvailee eilisen auringonottajan kuin palkintohärän:
     92 kiloa, ja Jay on 92 kiloa); Frases prontas; tehtävä 1 (ymmärtäminen); teemasanasto → tehtävä 2 (yhdistä);
     kikka .retrato ”Retrato falado: o Eenok” (Maian kuvauksesta) → tehtävä 3 (kuuntelu: Jay vai Eenok?); ääntäminen
     (yhdyssanan paino: AU-rinkolasit, Maian korjaus dialogissa); kielioppi 1 (kuvailu, monikko vai yksikkö) → tehtävä 4
     (kirjoita kuvaus).
   - osa B (#t17-b, ”Parte B · Aprofundar e fechar”): tiistai-iltapäivä rantakadulla; dialogi B (sambakoulun rummut, Jay katoaa, Marisan idea, Maian ilmoitus KADONNUT ryhmään ”Suomalaiset
     Brasiliassa”, Uuno ja Eenok tuovat kirkkaanpunaisen Jayn); Frases prontas; toinen .retrato (Jay ilmoituksen
     kuvauksesta: sotkuinen ruskea tukka, siniset silmät, keltainen lippis) → tehtävä 5 (juliste KADONNUT); kielioppi 2
     (monikon genetiivi ja -ni vain tunnistukseen) → tehtävät 6–7; peli .riopeli ”leve o Jay até o café” (omistaja
     8.11.2026: korvasi .kartta ”No calçadão” -pelin ja sen akun; kolme aluetta lännestä itään: mäki = lyhyet käskyt,
     keskusta = paikan mukaan ”Mene kirkolle ja käänny oikealle”, ranta = askelten määrä; Jayn jano, baarit ja kioskit
     alueiden välissä, Maia odottaa rannan kahvilassa; johdanto vain ”Jay on eksyksissä Riossa, pelasta hänet”); kulttuuri (mineiro ja carioca, kuva
     copacabana-calcadao) → tehtävä 8 (puhe); Na rua (sil on, millanen, mun nimi); kotitehtävä (oma ilmoitus .ficha.oma
     t17-ilmoitus); itsearvio.
   Suomea puhuvat Maia, Jay, Marisa (hoono soomi, data-hairio), Uuno, Eenok ja kertoja; myyjien huudot portugaliksi.
   Jaylla on suklaanruskea, pystyssä oleva tukka (X2, X3): ilmoitus sanoo ”sotkuinen”, ja Jay korjaa: ”Minulla on töyhtö.”
   Jay painaa 92 kiloa molemmissa kohtauksissa (dialogi A; tehtävät 1 ja 5). Omistusliitteistä vain -ni (puolisoni, nimeni,
   numeroni); monikon genetiivi vain tunnistukseen (suomalaisten, rumpujen, ystävien); ei perfektiä (katosi, ei ”on
   kadonnut”), ei monikon paikallissijoja (t19), ei kipukielioppia (t18). Hiiden chat siirtyi oppitunnille 15 B
   (RUNKO §11.1); .saapuva jäi K3 A:han, koska dialogi B ei ole puhelu. Kirjakieli; puhekieli vain Na rua -nurkassa. */
Kurssi.lisaa({
  id: 't17',
  lyhyt: '17',
  jakso: 'Lição 17',
  otsikko: 'Rio: onde está o Jay? Descrever pessoas',
  lahde: 'Tema: Copacabana, os irmãos de macacão azul-claro e o Jay que some no calçadão · Gramática: hän on pitkä, hänellä on siniset silmät, e no passado hänellä oli; o genitivo plural para reconhecer (suomalaisten ryhmä, rumpujen ympärillä); o -ni de “meu” para reconhecer (nimeni, puolisoni) · Pronúncia: o acento das palavras compostas (aurinkolasit, rantakatu)',
  aiheet: ['ihmiset', 'keho', 'ominaisuus', 'kaupunki'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga e pintora; descreve o Eenok e escreve o aviso KADONNUT' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; dormiu mal no ônibus, some no calçadão e volta vermelho' },
    malu: { nimi: 'Marisa', tyyppi: 'nainen', vaihto: 5, kuvaus: 'amiga da Maia; mora em Copacabana e fala um finlandês quebrado que funciona' },
    uuno2: { nimi: 'Uuno', tyyppi: 'mies', vaihto: 7, kuvaus: 'turista finlandês de macacão azul-claro; veio “ver a carne do Rio”' },
    eenok2: { nimi: 'Eenok', tyyppi: 'mies', vaihto: 8, kuvaus: 'irmão do Uuno; magro e mais baixo; sabe o peso de todo mundo e lê o grupo dos finlandeses' }
  },

  sanasto: [
    'silmä', 'tukka', 'hiusväri', 'parta', 'silmälasi', 'töyhtö', 'selkä', 'jalka',
    'pitkä', 'lyhyt', 'laiha', 'vaalea', 'ruskea', 'sotkuinen', 'kirkkaanpunainen', 'millainen',
    'ranta', 'hiekka', 'rantakatu', 'aurinkovoide', 'kookosvesi', 'jano',
    'sambakoulu', 'rumpuryhmä', 'soida', 'ympärillä',
    'kadota', 'ilmoitus', 'ryhmä', 'tunnistaa', 'puoliso', 'idiootti', 'tuntua', 'kuulostaa', 'välittää'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Encontro',
      html: `
<ul class="tavoitteet">
  <li>Você descreve uma pessoa: <span class="fi">Hän on <span data-l="pitkä#2">pitkä</span>.</span> <span class="fi">Hänellä on siniset silmät ja ruskea tukka.</span></li>
  <li>Você sabe quando vem o plural: <span class="fi">siniset silmät</span>, mas <span class="fi">ruskea tukka</span>.</li>
  <li>Você entende uma descrição no passado: <span class="fi">Hänellä oli ruskea selkä ja pitkät jalat.</span></li>
  <li>Você acentua a primeira sílaba também nas palavras compostas: <span class="fi">aurinkolasit, hiusväri, rantakatu</span>.</li>
  <li>Parte B: você preenche um aviso de desaparecido: <span class="fi">KADONNUT</span>.</li>
  <li>Parte B: o genitivo plural (<span class="fi">suomalaisten ryhmä</span>) e o <span class="fi pala">-ni</span> de “meu” (<span class="fi">nimeni</span>), só para reconhecer.</li>
</ul>
<p data-paikka="rodoviaria-novo-rio">Terça-feira, 29 de dezembro. O ônibus da noite chegou à Rodoviária Novo Rio às seis da manhã. A Maia e o Jay deixam as malas num hotel pequeno, a uma rua da praia de Copacabana. A Marisa está feliz: ela mora aqui, num apartamento pequeno em Copacabana, e o trabalho novo só começa em janeiro. Às nove o sol já queima. O Jay dormiu mal no ônibus e quer uma coisa só: deitar.</p>

<section class="osio" data-paikka="copacabana-praia">
  <h2>Diálogo A: <span class="fi">Copacabanan hiekassa</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Preste atenção em como a Maia descreve o Eenok (<span class="fi">hän on…</span>) e como o Eenok descreve o homem de ontem, no passado (<span class="fi">hänellä oli…</span>). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t17-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="O ônibus noturno chegou ao Rio às seis da manhã. Agora a Maia, o Jay e a Marisa andam na praia de Copacabana. O sol brilha e a areia já está quente.">Yöbussi saapui Rioon kello kuusi aamulla. Nyt Maia, Jay ja Marisa kävelevät Copacabanan rannalla. Aurinko paistaa ja hiekka on jo kuuma.</p>
    <p class="s" data-h="malu" data-pt="Bem-vindos ao Rio! Eu morar aqui em Copacabana. Estou em casa de novo! (errado de propósito)">Tervetuloa Rioon! Minä <span data-hairio="asun">asua</span> täällä Copacabanassa. Olen taas <span data-hairio="kotona">koti</span>!</p>
    <p class="s" data-h="jay" data-pt="Eu dormi mal no ônibus. Só quero deitar, e esta areia parece uma cama.">Minä nukuin bussissa huonosti. Haluan vain maata ja tämä hiekka tuntuu sängyltä.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay deita na areia. Ele não abre os olhos.">Jay makaa hiekassa. Hän ei avaa silmiä.</p>
    <p class="s" data-h="kertoja" data-pt="Na praia estão sentados dois homens. Eles usam macacões azul-claros e óculos de sol grandes e estranhos.">Rannalla istuu kaksi miestä. Heillä on vaaleansiniset haalarit ja isot oudot aurinkolasit.</p>
    <p class="s" data-h="malu" data-pt="Maia, quem ser aqueles dois homens na areia? Eles ter macacão na praia? (errado de propósito)">Maia, kuka nuo kaksi miestä hiekassa <span data-hairio="ovat">olla</span>? Heillä <span data-hairio="on haalarit">olla haalari</span> rannalla?</p>
    <p class="s" data-h="maia" data-pt="São o Uuno e o Eenok! Você viu os dois na festa de rua. Eles não ligam para o calor.">He ovat Uuno ja Eenok! Sinä näit heidät katujuhlassa. He eivät välitä kuumasta.</p>
    <p class="s" data-h="malu" data-pt="Na festa de rua? Não lembra. Agora eles estão com uns ócu-LOS de sol tão grandes. (errado de propósito)">Katujuhlassa? <span data-hairio="En muista">Ei muista</span>. Nyt heillä on niin isot <span class="pala">aurinko-LA-sit</span>.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia vê que o Jay quer dizer alguma coisa.">Maia näkee, että Jay haluaa sanoa jotain.</p>
    <p class="s" data-h="maia" data-pt="AU-rinkolasit, não aurinko-LA-sit."><span class="pala">AU-rinkolasit</span>, ei <span class="pala">aurinko-LA-sit</span>.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia mostra a língua para o Jay. O Jay sorri.">Maia näyttää Jaylle kieltä. Jay hymyilee.</p>
    <p class="s" data-h="maia" data-pt="O Eenok está à direita. Ele é magro e mais baixo. Na festa de rua ele cantou à meia-noite.">Eenok on oikealla. Hän on laiha ja lyhyempi. Katujuhlassa hän lauloi keskiyöllä.</p>
    <p class="s" data-h="malu" data-pt="Ah, ele cantou! Agora eu lembro.">Ai, hän lauloi! Nyt minä muistan.</p>
    <p class="s" data-h="maia" data-pt="Vocês também estão aqui?">Tekin olette täällä?</p>
    <p class="s" data-h="uuno2" data-pt="A gente veio ver a carne do Rio. Na praia tem muita carne boa assando.">Me tulimme katsomaan Rion lihaa. Rannalla paistuu paljon hyvää lihaa.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay já está deitado na praia, ao lado do Eenok. Ele não liga para protetor solar.">Jay makaa jo rannalla Eenokin vieressä. Hän ei välitä aurinkovoiteesta.</p>
    <p class="s" data-h="eenok2" data-pt="Ontem um homem estava deitado aqui. Ele era alto. Tinha as costas morenas e as pernas compridas. Costas boas. Pernas boas.">Eilen tässä makasi mies. Hän oli <span data-l="pitkä#2">pitkä</span>. Hänellä oli ruskea selkä ja pitkät jalat. Hyvä selkä. Hyvät jalat.</p>
    <p class="s" data-h="jay" data-pt="Eenok, você fala como um médico.">Eenok, sinä kuulostat lääkäriltä.</p>
    <p class="s" data-h="uuno2" data-pt="Quantos quilos, Eenok?">Kuinka monta kiloa, Eenok?</p>
    <p class="s" data-h="eenok2" data-pt="Ele tinha noventa e dois quilos e cem gramas.">Hän oli yhdeksänkymmentäkaksi kiloa ja sata grammaa.</p>
    <p class="s" data-h="jay" data-pt="Eenok, você fala como um açougueiro.">Eenok, sinä kuulostat lihan myyjältä.</p>
    <p class="s" data-h="eenok2" data-pt="Obrigado, Jay. Você tem noventa e dois quilos.">Kiitos, Jay. Sinä olet yhdeksänkymmentäkaksi kiloa.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay abre os olhos e se levanta. Ele não quer mais ficar deitado ao lado do Eenok.">Jay avaa silmät ja nousee ylös. Hän ei halua enää maata Eenokin vieressä.</p>
    <p class="s" data-h="uuno2" data-pt="A gente fica sentado aqui o dia todo. Volta, Jay.">Me istumme tässä koko päivän. Tule takaisin, Jay.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia, o Jay e a Marisa vão embora rapidinho.">Maia, Jay ja Marisa lähtevät nopeasti pois.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">Tämä hiekka tuntuu sängyltä.</span> = esta areia parece uma cama · <span class="fi">tuntua</span> + <span class="fi pala">-lta</span>: como uma coisa parece ao toque</li>
      <li><span class="fi">Heillä on vaaleansiniset haalarit.</span> = eles usam macacões azul-claros · <span class="fi">heillä on</span> = eles têm; <span class="fi">haalarit</span> é plural, e o adjetivo também</li>
      <li><span class="fi">Hän on laiha ja lyhyempi.</span> = ele é magro e mais baixo · <span class="fi">hän on</span> + adjetivo; <span class="fi">lyhyempi</span> é o comparativo (lição 11)</li>
      <li><span class="fi">Tekin olette täällä?</span> = vocês também estão aqui? · <span class="fi pala">-kin</span> = também, colado na palavra</li>
      <li><span class="fi">Me tulimme katsomaan Rion lihaa.</span> = a gente veio ver a carne do Rio · <span class="fi">tulimme katsomaan</span> = viemos ver: forma pronta</li>
      <li><span class="fi">Hänellä oli ruskea selkä ja pitkät jalat.</span> = ele tinha as costas morenas e as pernas compridas · <span class="fi">hänellä oli</span>: a descrição no passado</li>
      <li><span class="fi">Sinä kuulostat lääkäriltä.</span> = você fala como um médico · <span class="fi">kuulostaa</span> + <span class="fi pala">-lta</span>: como uma coisa soa</li>
      <li><span class="fi">Sinä olet yhdeksänkymmentäkaksi kiloa.</span> = você tem noventa e dois quilos · o peso vai com <span class="fi">olla</span>: <span class="fi">olen, olet, on</span></li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="copacabana-praia">
  <h2>Exercício: o diálogo A</h2>
  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>1. Você entendeu o diálogo A?</h3>
    <p class="ohje">Volte ao diálogo A se precisar.</p>
    <div class="valinta" data-oikea="Kello kuusi aamulla.">
      <p class="kysymys"><span class="fi">Milloin yöbussi saapui Rioon?</span></p>
      <div class="vaihtoehdot"><button type="button">Kello yhdeksän aamulla.</button><button type="button">Kello kuusi aamulla.</button><button type="button">Kello kuusi illalla.</button></div>
    </div>
    <div class="valinta" data-oikea="Huonosti.">
      <p class="kysymys"><span class="fi">Miten Jay nukkui bussissa?</span></p>
      <div class="vaihtoehdot"><button type="button">Hyvin.</button><button type="button">Paljon.</button><button type="button">Huonosti.</button></div>
    </div>
    <div class="valinta" data-oikea="Vaaleansiniset haalarit.">
      <p class="kysymys"><span class="fi">Uuno ja Eenok istuvat rannalla. Mitä heillä on?</span></p>
      <div class="vaihtoehdot"><button type="button">Vaaleansiniset haalarit.</button><button type="button">Mustat shortsit.</button><button type="button">Punaiset haalarit.</button></div>
    </div>
    <div class="valinta" data-oikea="Eenok.">
      <p class="kysymys"><span class="fi">Kuka on laiha ja lyhyempi?</span></p>
      <div class="vaihtoehdot"><button type="button">Uuno.</button><button type="button">Eenok.</button><button type="button">Jay.</button></div>
    </div>
    <div class="valinta" data-oikea="Yhdeksänkymmentäkaksi.">
      <p class="kysymys"><span class="fi">Kuinka monta kiloa Jay on?</span> (segundo o Eenok)</p>
      <div class="vaihtoehdot"><button type="button">Kahdeksankymmentäkaksi.</button><button type="button">Yhdeksänkymmentä.</button><button type="button">Yhdeksänkymmentäkaksi.</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="copacabana-praia">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="O corpo e como a pessoa é" data-sanat="silmä,tukka,hius,parta,silmälasi,aurinkolasi,selkä,jalka,pitkä,lyhyt,laiha,vaalea,ruskea"></div>
  <div class="teema" data-otsikko="Na praia" data-sanat="ranta,hiekka,aurinko,aurinkovoide,rantakatu,kookosvesi,jano"></div>
  <p>As outras palavras da lição estão no <a href="#t17-vocabulario">Vocabulário da lição</a>.</p>
  <p>Duas palavras pedem cuidado: <span class="fi"><span data-l="pitkä#2">pitkä</span></span> é comprido e também <b>alto</b> (pessoa), e <span class="fi">lyhyt</span> é curto e também <b>baixo</b> (pessoa). E o cabelo loiro não é amarelo: é <span class="fi">vaalea</span> (claro).</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="copacabana-praia">
  <h2>Exercício: as palavras</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Ligue a palavra à tradução</h3>
    <ul class="yhdista">
      <li data-pari="olhos">silmät</li>
      <li data-pari="cabelo">tukka</li>
      <li data-pari="costas">selkä</li>
      <li data-pari="pernas">jalat</li>
      <li data-pari="magro">laiha</li>
      <li data-pari="loiro, claro">vaalea</li>
      <li data-pari="areia">hiekka</li>
      <li data-pari="protetor solar">aurinkovoide</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="copacabana-praia">
  <h2>Retrato falado: o Eenok</h2>
  <p>A Marisa ainda não sabe quem é quem: os dois irmãos estão de macacão igual e de óculos escuros enormes. A Maia descreve o Eenok mais uma vez, devagar. Ouça a descrição (▶), monte o rosto com os botões e aperte <b>Conferir</b>. Cada escolha é dita em voz alta: repita depois dela.</p>
  <p class="s" data-h="maia" data-pt="O Eenok é magro e mais baixo que o Uuno. Ele tem cabelo loiro e uns óculos de sol grandes e estranhos. Ele não tem barba. Ele está de macacão azul-claro.">Eenok on laiha ja lyhyempi kuin Uuno. Hänellä on vaalea tukka ja isot oudot aurinkolasit. Hänellä ei ole partaa. Hänellä on vaaleansiniset haalarit.</p>
  <div class="retrato" data-h="maia" data-pohja="iho:#e3d7c3;paita:#009fe0;kaulus:#1f2fe0;aluspaita:#ffffff;tausta:#e3eef7;ilme:neutraali"
       data-kuvaus="Eenok on laiha ja lyhyempi kuin Uuno. Hänellä on vaalea tukka ja isot oudot aurinkolasit. Hänellä ei ole partaa. Hänellä on vaaleansiniset haalarit."
       data-nimet="parta:Barba"
       data-oikea="hiukset:vaalea;lasit:tummat-lasit;parta:ei">
    <p data-osa="hiukset" data-arvo="musta" data-vari="#1c120d" data-nappi="musta" data-puhu="Hänellä on musta tukka.">Hänellä on musta tukka.</p>
    <p data-osa="hiukset" data-arvo="ruskea" data-vari="#4e2a16" data-nappi="ruskea" data-puhu="Hänellä on ruskea tukka.">Hänellä on ruskea tukka.</p>
    <p data-osa="hiukset" data-arvo="punainen" data-vari="#b5541c" data-nappi="punainen" data-puhu="Hänellä on punainen tukka.">Hänellä on punainen tukka.</p>
    <p data-osa="hiukset" data-arvo="vaalea" data-vari="#f0e532" data-nappi="vaalea" data-puhu="Hänellä on vaalea tukka.">Hänellä on vaalea tukka.</p>
    <p data-osa="lasit" data-arvo="ei" data-nappi="ei silmälaseja" data-puhu="Hänellä ei ole silmälaseja.">Hänellä ei ole silmälaseja.</p>
    <p data-osa="lasit" data-arvo="lasit" data-nappi="silmälasit" data-puhu="Hänellä on silmälasit.">Hänellä on silmälasit.</p>
    <p data-osa="lasit" data-arvo="aurinkolasit" data-nappi="aurinkolasit päässä" data-puhu="Hänellä on aurinkolasit päässä.">Hänellä on aurinkolasit päässä.</p>
    <p data-osa="lasit" data-arvo="tummat-lasit" data-nappi="isot aurinkolasit" data-puhu="Hänellä on isot aurinkolasit.">Hänellä on isot aurinkolasit.</p>
    <p data-osa="parta" data-arvo="ei" data-nappi="ei partaa" data-puhu="Hänellä ei ole partaa.">Hänellä ei ole partaa.</p>
    <p data-osa="parta" data-arvo="viikset" data-nappi="viikset" data-puhu="Hänellä on viikset.">Hänellä on viikset.</p>
    <p data-osa="parta" data-arvo="sanki" data-nappi="lyhyt parta" data-puhu="Hänellä on lyhyt parta.">Hänellä on lyhyt parta.</p>
  </div>
  <p>Repare: <span class="fi">silmät</span>, <span class="fi">aurinkolasit</span> e <span class="fi">haalarit</span> estão no plural, como “olhos” e “óculos” em português (mas “macacão” é singular em português), e o adjetivo vai junto: <span class="fi">isot aurinkolasit</span>, <span class="fi">vaaleansiniset haalarit</span>. Já <span class="fi">tukka</span> e <span class="fi">parta</span> são uma coisa só: <span class="fi">vaalea tukka</span>, <span class="fi">lyhyt parta</span>. A regra completa vem na Gramática 1, no fim desta parte.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="copacabana-praia">
  <h2>Exercício: quem é?</h2>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Ouça: o Jay ou o Eenok?</h3>
    <p class="ohje">Aperte ▶ e decida: de quem é a descrição? Pense no retrato do Eenok e no Jay do diálogo. Todas as frases estão no presente.</p>
    <div class="valinta" data-kuuntele="Hänellä on vaalea tukka." data-oikea="Eenok">
      <p class="kysymys">Quem é?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">Eenok</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hänellä on ruskea tukka." data-oikea="Jay">
      <p class="kysymys">Quem é?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">Eenok</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hän on laiha." data-oikea="Eenok">
      <p class="kysymys">Quem é?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">Eenok</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hän on yhdeksänkymmentäkaksi kiloa." data-oikea="Jay">
      <p class="kysymys">Quem é?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">Eenok</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hänellä on vaaleansiniset haalarit." data-oikea="Eenok">
      <p class="kysymys">Quem é?</p>
      <div class="vaihtoehdot"><button type="button">Jay</button><button type="button">Eenok</button></div>
    </div>
  </div>
</section>

<section class="osio" data-paikka="copacabana-praia">
  <h2>Pronúncia: o acento das palavras compostas</h2>
  <p>Muitas palavras desta lição são <b>compostas</b>: duas palavras coladas. <span class="fi">aurinkolasit</span> = <span class="fi">aurinko</span> (sol) + <span class="fi">lasit</span>; <span class="fi">rantakatu</span> = <span class="fi">ranta</span> (praia) + <span class="fi">katu</span> (rua). O acento forte fica na <b>primeira sílaba da palavra inteira</b>, e o começo da segunda parte recebe só um toque mais leve. O ouvido brasileiro procura o acento forte perto do fim, como a Marisa no diálogo: <span class="fi pala">aurinko-LA-sit</span>. A Maia corrige: <span class="fi pala">AU-rinkolasit</span>. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="óculos de sol">aurinkolasit</li>
    <li class="s" data-pt="óculos">silmälasit</li>
    <li class="s" data-pt="cor do cabelo">hiusväri</li>
    <li class="s" data-pt="calçadão, rua da praia">rantakatu</li>
    <li class="s" data-pt="protetor solar">aurinkovoide</li>
    <li class="s" data-pt="água de coco">kookosvesi</li>
  </ul>
  <div class="saanto">
    <h3>Truque: forte, depois leve</h3>
    <p>Na bolha, as duas sílabas com acento aparecem em maiúsculas: <span class="fi pala">AU-rin-ko-LA-sit</span>, <span class="fi pala">SIL-mä-LA-sit</span>, <span class="fi pala">HIUS-VÄ-ri</span>, <span class="fi pala">RAN-ta-KA-tu</span>. A primeira é a forte; a segunda é só um toque. Bata palmas forte na primeira e leve na segunda. Nenhuma sílaba encolhe: o <span class="fi pala">ä</span> de <span class="fi">silmä</span> continua aberto, e o <span class="fi pala">oo</span> de <span class="fi">kookosvesi</span> continua longo.</p>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="copacabana-praia">
  <h2>Gramática 1 · Descrever: <span class="fi">hän on…</span> e <span class="fi">hänellä on…</span></h2>

  <h3>1. Ser e ter</h3>
  <p>Para dizer <b>como a pessoa é</b> (altura, corpo, peso), use <span class="fi">olla</span>: <span class="fi">Hän on laiha.</span> <span class="fi">Sinä olet yhdeksänkymmentäkaksi kiloa.</span> Para dizer <b>o que ela tem</b> (olhos, cabelo, barba, óculos, roupa), use o “ter” da lição 5: <span class="fi">Hänellä on siniset silmät.</span> No passado: <span class="fi">Hän oli <span data-l="pitkä#2">pitkä</span>.</span>, <span class="fi">Hänellä oli ruskea selkä.</span></p>
  <table class="taivutus">
    <tr><th>finlandês</th><th>português</th></tr>
    <tr><td><span class="fi">Hän on <span data-l="pitkä#2">pitkä</span> ja laiha.</span></td><td>ele é alto e magro</td></tr>
    <tr><td><span class="fi">Hän on lyhyt ja nuori.</span></td><td>ela é baixa e jovem</td></tr>
    <tr><td><span class="fi">Hänellä on siniset silmät.</span></td><td>ele tem olhos azuis</td></tr>
    <tr><td><span class="fi">Hänellä on ruskea tukka.</span></td><td>ela tem cabelo castanho</td></tr>
    <tr><td><span class="fi">Hänellä on parta ja silmälasit.</span></td><td>ele tem barba e óculos</td></tr>
    <tr><td><span class="fi">Heillä on vaaleansiniset haalarit.</span></td><td>eles usam macacões azul-claros</td></tr>
    <tr><td><span class="fi">Hänellä oli pitkät jalat.</span></td><td>ele tinha as pernas compridas</td></tr>
  </table>
  <p>Pergunta: <span class="fi">Millainen hän on?</span> (como ele é?), <span class="fi">Millainen tukka hänellä on?</span> (que cabelo ele tem?). Negativo, com partitivo, como na lição 5: <span class="fi">Hänellä ei ole partaa.</span> <span class="fi">Minulla ei ole sotkuista tukkaa.</span></p>
  <p>Como uma coisa parece: ao toque, <span class="fi">tuntua</span> (<span class="fi">Hiekka tuntuu sängyltä.</span>); ao ouvir, <span class="fi">kuulostaa</span> (<span class="fi">Sinä kuulostat lääkäriltä.</span>). Os dois pedem <span class="fi pala">-lta/-ltä</span>. Para a impressão que uma pessoa causa, não use <span class="fi">tuntua</span>.</p>

  <h3>2. Plural ou singular? silmät, mas tukka</h3>
  <p>Algumas palavras são plural <span class="fi pala">-t</span> (aprenda como vocabulário): <span class="fi">silmät</span> (olhos), <span class="fi">hiukset</span> (cabelo), <span class="fi">viikset</span> (bigode), <span class="fi">silmälasit</span> e <span class="fi">aurinkolasit</span> (óculos), <span class="fi">haalarit</span> (macacão), <span class="fi">shortsit</span> (short). Uma coisa só fica no singular: <span class="fi">tukka</span> (o cabelo todo), <span class="fi">parta</span> (barba), <span class="fi">selkä</span> (costas). O adjetivo vai junto, no mesmo número (lição 12): <span class="fi">siniset silmät</span>, <span class="fi">mustat shortsit</span>, mas <span class="fi">ruskea tukka</span>. As duas palavras para cabelo são comuns: <span class="fi">tukka</span> e <span class="fi">hiukset</span>.</p>
  <p>Num formulário, a palavra <span class="fi">väri</span> (cor) é singular, então a cor também: <span class="fi">Silmien väri: sininen.</span> (cor dos olhos: azul).</p>
  <div class="huomio">
    <p><b>Armadilhas do brasileiro:</b> 1) “ele tem olhos azuis” não é <span class="pala">Hän on siniset silmät</span>: ter = <span class="fi">hänellä on</span>. 2) Na descrição simples, use a forma básica: <span class="fi">Hänellä on siniset silmät</span>. O partitivo aparece na negação (<span class="fi">Hänellä ei ole partaa</span>) e com quantidade indefinida. 3) “Cabelo” é singular em português; em finlandês, <span class="fi">tukka</span> é singular e <span class="fi">hiukset</span> é plural. As duas formas estão certas.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="copacabana-praia">
  <h2>Exercício: descreva</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Escreva a descrição</h3>
    <p class="ohje">Complete com a palavra entre parênteses, na forma certa: plural com plural, <span class="fi">on</span> ou <span class="fi">oli</span>, <span class="fi">hän</span> ou <span class="fi">hänellä</span>. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Eenok <span class="aukko" data-oikea="on"></span> laiha. <span data-ei-kuplaa>(olla)</span></p>
      <p>Hänellä on vaaleansiniset <span class="aukko" data-oikea="haalarit"></span>. <span data-ei-kuplaa>(haalari)</span></p>
      <p>Heillä on isot <span class="aukko" data-oikea="oudot"></span> aurinkolasit. <span data-ei-kuplaa>(outo)</span></p>
      <p>Jayllä on <span class="aukko" data-oikea="siniset"></span> silmät. <span data-ei-kuplaa>(sininen)</span></p>
      <p><span class="aukko" data-oikea="Hänellä"></span> oli ruskea selkä. <span data-ei-kuplaa>(hän)</span></p>
      <p>Hänellä oli pitkät <span class="aukko" data-oikea="jalat"></span>. <span data-ei-kuplaa>(jalka)</span></p>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Aprofundar e fechar',
      html: `
<ul class="tavoitteet">
  <li>Você entende a conversa no café do calçadão: quem sumiu, o que diz o aviso e quem acha o Jay.</li>
  <li>Você reconhece o genitivo plural em blocos prontos: <span class="fi">suomalaisten ryhmä</span>, <span class="fi">rumpujen ympärillä</span>, <span class="fi">ystävien kanssa</span>.</li>
  <li>Você reconhece o <span class="fi pala">-ni</span> de “meu”: <span class="fi">nimeni, numeroni, puolisoni</span>.</li>
  <li>Você fala de você mesmo: <span class="fi">Olen <span data-l="pitkä#2">pitkä</span>. Minulla on ruskeat silmät.</span></li>
</ul>

<p data-paikka="copacabana-calcadao">Terça-feira à tarde, no calçadão de Copacabana, com as ondas de pedra preta e branca no chão e milhares de pessoas em cima delas. O Jay foi buscar água de coco e não voltou.</p>

<section class="osio" data-paikka="copacabana-calcadao">
  <h2>Diálogo B: <span class="fi">Missä Jay on?</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure o genitivo plural (<span class="fi">rumpujen, suomalaisten</span>) e o <span class="fi pala">-ni</span> de “meu” (<span class="fi">puolisoni, nimeni, numeroni</span>). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t17-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="É terça-feira à tarde. No calçadão de Copacabana há milhares de pessoas. Os vendedores gritam: Olha o mate! Olha o biscoito Globo!">On tiistai iltapäivällä. Copacabanan rantakadulla on tuhansia ihmisiä. Myyjät huutavat: <span lang="pt-BR">Olha o mate! Olha o biscoito Globo!</span></p>
    <p class="s" data-h="kertoja" data-pt="Pelo calçadão passa a bateria de uma escola de samba. Ela está ensaiando para o Ano-Novo. Os tambores tocam alto e as pessoas dançam em volta deles.">Rantakadulla kävelee sambakoulun rumpuryhmä. Se harjoittelee uudeksi vuodeksi. Rummut soivat kovaa ja ihmiset tanssivat rumpujen ympärillä.</p>
    <p class="s" data-h="jay" data-pt="Estou com muita sede. Vou buscar água de coco. Esperem aqui!">Minulla on kova jano. Minä haen kookosvettä. Odottakaa tässä!</p>
    <p class="s" data-h="maia" data-pt="Ei, não vai…">Hei, älä mene…</p>
    <p class="s" data-h="kertoja" data-pt="O Jay sai. Bem nessa hora a bateria chega e cem pessoas dançam entre a Maia e o Jay.">Jay lähtee. Juuri silloin rumpuryhmä tulee ja sata ihmistä tanssii Maian ja Jayn välissä.</p>
    <p class="s" data-h="kertoja" data-pt="Quando os tambores vão embora, o Jay também sumiu. Ele ligou para a Maia, mas aí o celular desligou.">Kun rummut ovat poissa, myös Jay on poissa. Hän soitti Maialle, mutta sitten puhelin meni kiinni.</p>
    <p class="s" data-h="maia" data-pt="O meu companheiro sumiu! Na praia tem mil pessoas. Seu idiota.">Puolisoni katosi! Rannalla on tuhat ihmistä. Senkin idiootti.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia e a Marisa sentam num cafezinho no calçadão e esperam.">Maia ja Marisa istuvat pienessä kahvilassa rantakadulla ja odottavat.</p>
    <p class="s" data-h="malu" data-pt="Eu pensar: finlandeses ajuda finlandeses! Escrever um aviso no grupo dos finlandeses. Põe a foto do Jay junto. (errado de propósito)">Minä <span data-hairio="ajattelin">ajatella</span>: suomalaiset <span data-hairio="auttavat">auttaa</span> suomalaiset! <span class="pala" data-hairio="Kirjoita">Kirjoitaa</span> ilmoitus suomalaisten ryhmään. Laita Jayn kuva mukaan.</p>
    <p class="s" data-h="maia" data-pt="Boa ideia! Escuta: “DESAPARECIDO: Idiota. Nome Jay, homem finlandês. Ele é alto. Tem olhos azuis e cabelo castanho bagunçado. Está de short preto e boné amarelo. É meio preguiçoso de sofá. Meu nome é Maia. Meu número está embaixo.”">Hyvä idea! Kuuntele: ”KADONNUT: Idiootti. Nimi Jay, suomalainen mies. Hän on <span data-l="pitkä#2">pitkä</span>. Hänellä on siniset silmät ja sotkuinen ruskea tukka. Hänellä on mustat shortsit ja keltainen lippis. Hän on vähän sohvaperuna. Nimeni on Maia. Numeroni on alla.”</p>
    <p class="s" data-h="kertoja" data-pt="A Maia posta o aviso e a foto do Jay no grupo “Finlandeses no Brasil”.">Maia laittaa ilmoituksen ja Jayn kuvan ryhmään <span class="nimike">”Suomalaiset Brasiliassa”</span>.</p>
    <p class="s" data-h="kertoja" data-pt="Meia hora depois o Uuno e o Eenok chegam ao café. O Jay vem andando entre o Uuno e o Eenok. Ele está vermelho vivo.">Puolen tunnin päästä Uuno ja Eenok tulevat kahvilaan. Jay kävelee Uunon ja Eenokin välissä. Hän on kirkkaanpunainen.</p>
    <p class="s" data-h="eenok2" data-pt="A gente lê o grupo dos finlandeses todo dia. Eu li o aviso e reconheci ele na hora. Ele estava dormindo na areia, do lado do Uuno.">Me luemme suomalaisten ryhmää joka päivä. Luin ilmoituksen ja tunnistin hänet heti. Hän nukkui hiekassa Uunon vieressä.</p>
    <p class="s" data-h="uuno2" data-pt="Ele dormiu bem. Bem assado.">Hän nukkui hyvin. Hyvin paistunut.</p>
    <p class="s" data-h="kertoja" data-pt="O Jay lê o aviso no celular da Maia.">Jay lukee ilmoituksen Maian puhelimesta.</p>
    <p class="s" data-h="jay" data-pt="Eu não tenho cabelo bagunçado. Eu tenho topete. E eu não sou preguiçoso de sofá. Estou cansado.">Minulla ei ole sotkuista tukkaa. Minulla on töyhtö. Ja minä en ole sohvaperuna. Olen väsynyt.</p>
    <p class="s" data-h="maia" data-pt="Agora você não está cansado. Agora você está vermelho. Usa protetor solar na praia, seu bobo!">Nyt sinä et ole väsynyt. Nyt sinä olet punainen. Käytä aurinkovoidetta rannalla, senkin uuno!</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Minulla on kova jano.</span> = estou com muita sede · como <span class="fi">minulla on nälkä</span>: “em mim há sede”</li>
      <li><span class="fi">Odottakaa tässä!</span> = esperem aqui! · a ordem para vocês (lição 14)</li>
      <li><span class="fi">rumpujen ympärillä</span> = em volta dos tambores · <span class="fi">rumpujen</span>: o genitivo plural, veja a gramática abaixo</li>
      <li><span class="fi">Puolisoni katosi!</span> = o meu companheiro sumiu! · <span class="fi pala">-ni</span> = meu; <span class="fi">katosi</span>: o passado de <span class="fi">kadota</span></li>
      <li><span class="fi">suomalaisten ryhmään</span> = no grupo dos finlandeses · <span class="fi">suomalaisten</span>: genitivo plural; o caso vai em <span class="fi">ryhmä</span></li>
      <li><span class="fi">Nimeni on Maia. Numeroni on alla.</span> = meu nome é Maia; meu número está embaixo · o <span class="fi pala">-ni</span> de “meu”</li>
      <li><span class="fi">Luin ilmoituksen ja tunnistin hänet heti.</span> = li o aviso e reconheci ele na hora · <span class="fi">hänet</span>: “ele” como objeto inteiro</li>
      <li><span class="fi">Käytä aurinkovoidetta!</span> = usa protetor solar! · <span class="fi">käyttää</span> + partitivo</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="copacabana-calcadao">
  <h2>Retrato falado: o Jay do aviso</h2>
  <p>Antes de postar, a Maia confere: o rosto da foto bate com o aviso? Ouça a descrição do aviso (▶), monte o rosto com os botões e aperte <b>Conferir</b>. O Jay diria <span class="fi">töyhtö</span> (topete), mas aqui vale o que a Maia escreveu.</p>
  <p class="s" data-h="maia" data-pt="O Jay é alto. Ele tem olhos azuis e cabelo castanho bagunçado. Ele está de boné amarelo.">Jay on <span data-l="pitkä#2">pitkä</span>. Hänellä on siniset silmät ja sotkuinen ruskea tukka. Hänellä on keltainen lippis.</p>
  <div class="retrato" data-h="maia" data-pohja="iho:#f2c9a8;paita:#3c5a78;tausta:#cfe3ef;ilme:virne"
       data-kuvaus="Jay on pitkä. Hänellä on siniset silmät ja sotkuinen ruskea tukka. Hänellä on keltainen lippis."
       data-nimet="silmat:Olhos;lippis:Boné"
       data-oikea="tukka:sotkuinen;hiukset:ruskea;silmat:siniset;lippis:keltainen">
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
    <p data-osa="lippis" data-arvo="ei" data-nappi="ei lippistä" data-puhu="Hänellä ei ole lippistä.">Hänellä ei ole lippistä.</p>
    <p data-osa="lippis" data-arvo="punainen" data-lisa="lippis" data-vari="#c0392b" data-nappi="punainen lippis" data-puhu="Hänellä on punainen lippis.">Hänellä on punainen lippis.</p>
    <p data-osa="lippis" data-arvo="keltainen" data-lisa="lippis" data-vari="#f1c40f" data-nappi="keltainen lippis" data-puhu="Hänellä on keltainen lippis.">Hänellä on keltainen lippis.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="copacabana-calcadao">
  <h2>Exercício: o aviso</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. O aviso: KADONNUT</h3>
    <p class="ohje">É o aviso que a Maia lê no diálogo, agora como cartaz para o grupo. Complete com a descrição dela (o retrato acima). A palavra básica está entre parênteses; atenção ao plural.</p>
    <div class="dokumentti juliste kadonnut" lang="fi-FI">
      <p class="juliste-otsikko">Kadonnut: Jay</p>
      <div class="ficha-foto" data-hahmo="jay"></div>
      <div class="aukot" lang="fi-FI">
        <p>Jay on <span class="aukko" data-oikea="suomalainen"></span> mies. <span data-ei-kuplaa>(finlandês)</span></p>
        <p>Hän on <span class="aukko" data-oikea="pitkä"></span>. <span data-ei-kuplaa>(alto)</span></p>
        <p>Hänellä on <span class="aukko" data-oikea="siniset"></span> silmät. <span data-ei-kuplaa>(sininen)</span></p>
        <p>Hänellä on sotkuinen <span class="aukko" data-oikea="ruskea"></span> tukka. <span data-ei-kuplaa>(castanho)</span></p>
        <p>Hänellä on mustat <span class="aukko" data-oikea="shortsit"></span> ja keltainen lippis. <span data-ei-kuplaa>(shortsi)</span></p>
        <p>Silmien väri: <span class="aukko" data-oikea="sininen"></span> <span data-ei-kuplaa>(azul)</span></p>
      </div>
      <p class="juliste-ala">Hän on yhdeksänkymmentäkaksi kiloa. Hän katosi rantakadulla tiistaina iltapäivällä. Nimeni on Maia. Numeroni on alla. Soita!</p>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="copacabana-praia">
  <h2>Gramática 2 · Vários e “meu”: o genitivo plural e o <span class="fi pala">-ni</span></h2>

  <h3>1. Para reconhecer: o genitivo plural em blocos prontos</h3>
  <div class="fraasit-laatikko">
    <p>O genitivo (lição 5) também tem plural. Você o reconhece pelo final <span class="fi pala">-ien, -jen, -iden</span> e, em algumas palavras, <span class="fi pala">-ten</span>. Ele aparece nos mesmos lugares que o genitivo singular. Guarde estes blocos prontos; a bolha de cada palavra mostra a forma:</p>
    <ul>
      <li><span class="fi">rumpujen ympärillä</span> = em volta dos tambores · com posposição</li>
      <li><span class="fi">suomalaisten ryhmä</span> = o grupo dos finlandeses · de quem?</li>
      <li><span class="fi">ystävien kanssa</span> = com os amigos · com <span class="fi">kanssa</span></li>
      <li><span class="fi">silmien väri</span> = a cor dos olhos · de quê?</li>
      <li><span class="fi">talojen välissä</span> = entre as casas · com posposição</li>
    </ul>
    <p>O final <span class="fi pala">-ten</span> vem em palavras como <span class="fi">suomalainen</span>, <span class="fi">nainen</span>, <span class="fi">ihminen</span> e <span class="fi">mies</span>: <span class="fi pala">suomalaisten, naisten, ihmisten, miesten</span>. Por enquanto, só reconheça o genitivo plural; você não precisa formá-lo.</p>
  </div>

  <h3>2. Para reconhecer: nimeni, puolisoni</h3>
  <p>“Meu, minha” muitas vezes é uma terminação no próprio substantivo: <span class="fi pala">-ni</span>. <span class="fi">nimi → nimeni</span> (o meu nome), <span class="fi">numero → numeroni</span> (o meu número), <span class="fi">puoliso → puolisoni</span> (o meu companheiro, a minha companheira), <span class="fi">ystävä → ystäväni</span> (a minha amiga, o meu amigo). Na escrita, o pronome pode vir antes: <span class="fi">minun nimeni</span>. Na fala, a terminação muitas vezes cai: <span class="fi" data-rekisteri="puhe">mun nimi</span> (veja Na rua). Por enquanto, só reconheça o <span class="fi pala">-ni</span>; as outras pessoas estão na <a href="#h-omistusliitteet">Gramática</a>.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="copacabana-praia">
  <h2>Exercícios: um ou vários?</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Ouça: um ou vários?</h3>
    <p class="ohje">Aperte ▶ e escolha o que você ouviu: o genitivo singular (um) ou o plural (vários). Ouça o <span class="fi pala">-ien, -jen, -iden, -ten</span>.</p>
    <div class="valinta" data-kuuntele="rumpujen ympärillä" data-oikea="rumpujen ympärillä">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">rummun ympärillä</button><button type="button">rumpujen ympärillä</button></div>
    </div>
    <div class="valinta" data-kuuntele="suomalaisen kanssa" data-oikea="suomalaisen kanssa">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">suomalaisen kanssa</button><button type="button">suomalaisten kanssa</button></div>
    </div>
    <div class="valinta" data-kuuntele="ystävien kanssa" data-oikea="ystävien kanssa">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">ystävän kanssa</button><button type="button">ystävien kanssa</button></div>
    </div>
    <div class="valinta" data-kuuntele="talon takana" data-oikea="talon takana">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">talon takana</button><button type="button">talojen takana</button></div>
    </div>
    <div class="valinta" data-kuuntele="kenkien väri" data-oikea="kenkien väri">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">kengän väri</button><button type="button">kenkien väri</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Traduza para o finlandês</h3>
    <div class="kaanna"><p class="pt">Ele é alto e tem olhos azuis.</p><p class="s" data-pt="Ele é alto e tem olhos azuis.">Hän on <span data-l="pitkä#2">pitkä</span> ja hänellä on siniset silmät.</p></div>
    <div class="kaanna"><p class="pt">A menina tem cabelo castanho.</p><p class="s" data-pt="A menina tem cabelo castanho.">Tytöllä on ruskea tukka.</p></div>
    <div class="kaanna"><p class="pt">O homem tinha as pernas compridas.</p><p class="s" data-pt="O homem tinha as pernas compridas.">Miehellä oli pitkät jalat.</p></div>
    <div class="kaanna"><p class="pt">Estou com muita sede.</p><p class="s" data-pt="Estou com muita sede.">Minulla on kova jano.</p></div>
    <div class="kaanna"><p class="pt">O meu nome é Maia. (bloco pronto)</p><p class="s" data-pt="O meu nome é Maia.">Nimeni on Maia.</p></div>
    <div class="kaanna"><p class="pt">O Jay sumiu na praia.</p><p class="s" data-pt="O Jay sumiu na praia.">Jay katosi rannalla.</p></div>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="copacabana-praia">
  <h2>Jogo: leve o Jay até o café</h2>
  <p>O Jay está perdido no Rio. Salve o Jay!</p>
  <p class="ohje">O mapa tem três partes, e em cada parte você dá as ordens de um jeito diferente. Cada passo dá mais sede ao Jay. Só se passa de uma parte para a outra por um bar (🍺) ou um quiosque (🥥): lá o Jay bebe e a sede volta a zero. Se a sede chegar ao máximo, o Jay senta no chão e volta para o último bar ou quiosque.</p>
  <div class="riopeli" data-h="maia" data-jano="16" data-alueet="0-4:suunta:mäki|5-10:paikka:keskusta|11-15:luku:ranta"
       data-kartta="###############~|#....B.....#...~|#.####.#.#.#.##~|#...##.#.#.#...~|###.##.....##..G|#....#.#.#.#..#~|#J####.#.#.#.#.~|#..###.....K...~|###############~"
       data-ui-jano="Sede do Jay" data-ui-alusta="Recomeçar do morro"
       data-ui-ohje="Comece no morro. A seta mostra para onde o Jay está olhando."
       data-ui-tapa-suunta="Mäki (o morro): ordens curtas. Mene suoraan! = um passo para a frente. Käänny oikealle! e Käänny vasemmalle! = o Jay vira sem andar."
       data-ui-tapa-paikka="Keskusta (o centro): ordens pelos lugares. Escolha um lugar e depois a ordem: Mene kirkolle ja käänny oikealle! O Jay anda reto até a esquina do lugar. O lugar precisa estar na frente dele."
       data-ui-tapa-luku="Ranta (a orla): conte os passos. Escolha quantos passos e depois a ordem: Mene kaksi askelta suoraan ja käänny vasemmalle! O café fica na areia, onde a Maia está."
       data-ui-valmis="O Jay chegou ao café. A Maia já pediu uma água de coco para ele."
       data-ui-palaa="O Jay voltou para o último bar ou quiosque. Tente de novo daqui.">
    <p data-rivi="eteen" data-puhu="Mene suoraan!"></p>
    <p data-rivi="oikea" data-puhu="Käänny oikealle!"></p>
    <p data-rivi="vasen" data-puhu="Käänny vasemmalle!"></p>
    <p data-rivi="ja-oikea" data-puhu="ja käänny oikealle!"></p>
    <p data-rivi="ja-vasen" data-puhu="ja käänny vasemmalle!"></p>
    <p data-rivi="este" data-puhu="Ei sinne! Siinä on talo."></p>
    <p data-rivi="hiekka" data-puhu="Ei sinne! Siinä on hiekkaa."></p>
    <p data-rivi="ei-nay" data-h="jay" data-puhu="Missä? En näe sitä."></p>
    <p data-rivi="jano" data-h="jay" data-puhu="Minulla on kova jano!"></p>
    <p data-rivi="loppu" data-h="jay" data-puhu="Minulla on liian kova jano. Minä istun tässä."></p>
    <p data-rivi="baari" data-h="jay" data-puhu="Kylmä olut! Nyt minulla ei ole janoa."></p>
    <p data-rivi="kioski" data-h="jay" data-puhu="Kookosvettä! Nyt minulla ei ole janoa."></p>
    <p data-rivi="perilla" data-puhu="Hienoa, Jay! Nyt sinä olet täällä."></p>
    <p data-ruutu="8,0" data-nimi="kirkko" data-kuvake="⛪" data-puhu="Mene kirkolle"></p>
    <p data-ruutu="7,3" data-nimi="pankki" data-kuvake="🏦" data-puhu="Mene pankille"></p>
    <p data-ruutu="9,5" data-nimi="apteekki" data-kuvake="💊" data-puhu="Mene apteekille"></p>
    <p data-ruutu="6,8" data-nimi="koulu" data-kuvake="🏫" data-puhu="Mene koululle"></p>
    <p data-ruutu="8,8" data-nimi="hotelli" data-kuvake="🏨" data-puhu="Mene hotellille"></p>
    <p data-ruutu="10,8" data-nimi="posti" data-kuvake="📮" data-puhu="Mene postille"></p>
    <p data-ruutu="11,7" data-nimi="kioski" data-kuvake="🥥" data-puhu="Mene kioskille"></p>
    <p data-askelia="1" data-puhu="Mene yksi askel suoraan"></p>
    <p data-askelia="2" data-puhu="Mene kaksi askelta suoraan"></p>
    <p data-askelia="3" data-puhu="Mene kolme askelta suoraan"></p>
    <p data-askelia="4" data-puhu="Mene neljä askelta suoraan"></p>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Mineiro e carioca: como um descreve o outro</h3>
  <figure class="kuva" data-kuva="copacabana-calcadao"></figure>
  <p>Belo Horizonte e o Rio ficam a uma noite de ônibus, e mineiros e cariocas adoram descrever uns aos outros. O mineiro diz que o carioca fala alto, chia no <span lang="pt-BR">“s”</span> e vai à praia em qualquer dia da semana. O carioca diz que o mineiro fala baixinho, termina tudo com <span lang="pt-BR">“uai”</span> e chega à praia de calça comprida. Tudo com carinho: no fim, os dois dividem o mesmo mate gelado no calçadão, sobre as ondas de pedra portuguesa preta e branca, um desenho que veio de Lisboa.</p>
  <p>No Brasil, descrever alguém pelo corpo é comum e quase sempre carinhoso: “o alto”, “a loirinha”, “o gringo”. Na Finlândia, as pessoas comentam muito pouco a aparência dos outros, e falar do peso de alguém é falta de educação. Por isso um finlandês que diz em voz alta quantos quilos você tem, com cem gramas de precisão, é estranho até para outro finlandês. O Eenok sabe disso. Ele só não liga.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="copacabana-praia">
  <h2>Exercício: fale</h2>
  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Responda às perguntas</h3>
    <p class="ohje">Responda em voz alta antes de abrir o modelo: primeiro sobre você, depois sobre as pessoas da história.</p>
    <details class="vastaus"><summary lang="fi-FI">Millainen sinä olet?</summary><p class="s" data-pt="Sou alta e magra. (diga como você é)">Olen <span data-l="pitkä#2">pitkä</span> ja laiha.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Millainen tukka sinulla on?</summary><p class="s" data-pt="Eu tenho cabelo preto e curto, desse tipo que o meu pai tem.">Minulla on lyhyt musta tukka, sellainen kuin isällä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Onko sinulla siniset silmät?</summary><p class="s" data-pt="Não. Eu tenho olhos castanhos.">Ei ole. Minulla on ruskeat silmät.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kuka on Maian kaveri?</summary><p class="s" data-pt="A Marisa é amiga da Maia.">Marisa on Maian kaveri.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kenen kanssa sinä asut?</summary><p class="s" data-pt="Eu moro com amigos.">Asun ystävien kanssa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Käytätkö aurinkovoidetta?</summary><p class="s" data-pt="Uso. Sem protetor solar eu fico vermelho.">Käytän. Ilman aurinkovoidetta tulen punaiseksi.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Käytätkö silmälaseja?</summary><p class="s" data-pt="Uso. Sem óculos eu não vejo nada.">Käytän. Ilman silmälaseja en näe mitään.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Millainen tukka Jayllä on?</summary><p class="s" data-pt="Ele tem cabelo castanho e um topete.">Hänellä on ruskea tukka ja töyhtö.</p></details>
  </div>
</section>

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
  <p class="s" data-h="maia" data-kirja="Hän on pitkä ja hänellä on siniset silmät." data-pt="Ele é alto e tem olhos azuis.">Se on <span data-l="pitkä#2">pitkä</span> ja sil on siniset silmät.</p>
  <p class="s" data-h="uuno2" data-kirja="Minun nimeni on Uuno." data-pt="O meu nome é Uuno.">Mun nimi on Uuno.</p>
  <p class="s" data-h="eenok2" data-kirja="Kyllä, se on aivan hyvä." data-pt="É, está bem bom.">Joo, se on ihan hyvä.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="ipanema-salva-vidas">
  <h2>Para terminar</h2>
  <p>Na volta para o hotel, o Jay está vermelho da testa até os pés, e a Marisa ri tanto que precisa sentar no calçadão. Amanhã, quarta-feira, é dia de Ipanema. O Jay promete: protetor solar, nada de dormir na areia e nenhum passo sem a Maia. Isso é a lição 18.</p>
  <div class="kotitehtava" data-id="t17">
    <h3>Lição de casa</h3>
    <p><b>1.</b> Faça o seu próprio aviso: descreva uma pessoa da sua família ou um amigo. Escreva direto no aviso: fica salvo neste navegador.</p>
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
    <p><b>2.</b> Escreva cinco frases sobre essa pessoa: como ela é (<span class="fi">Hän on…</span>), o que ela tem (<span class="fi">Hänellä on… silmät</span>, <span class="fi">…tukka</span>), o que ela vestia ontem (<span class="fi">Eilen hänellä oli…</span>) e uma frase com o genitivo plural (<span class="fi">…kanssa</span>). Leia em voz alta, com o acento no começo de <span class="fi">aurinkolasit</span> e <span class="fi">hiusväri</span>.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia, sobre o Anderson)</summary>
      <p class="s" data-pt="O Anderson é baixo e alegre. Ele é um bom amigo.">Anderson on lyhyt ja iloinen. Hän on hyvä kaveri.</p>
      <p class="s" data-pt="Ele tem olhos castanhos e cabelo preto curto.">Hänellä on ruskeat silmät ja lyhyt musta tukka.</p>
      <p class="s" data-pt="Ele está de boné.">Hänellä on lippis.</p>
      <p class="s" data-pt="Ontem ele estava de camisa amarela.">Eilen hänellä oli keltainen paita.</p>
      <p class="s" data-pt="Ele brinca muito com os cachorros.">Hän leikkii usein koirien kanssa.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t17">
    <li>Sei descrever uma pessoa: Hän on pitkä. Hänellä on siniset silmät ja ruskea tukka.</li>
    <li>Sei quando vem o plural: siniset silmät, vaaleansiniset haalarit, mas ruskea tukka.</li>
    <li>Entendo uma descrição no passado: Hänellä oli ruskea selkä ja pitkät jalat.</li>
    <li>Reconheço o genitivo plural em blocos prontos: suomalaisten ryhmä, rumpujen ympärillä, ystävien kanssa.</li>
    <li>Reconheço o -ni de “meu”: nimeni, numeroni, puolisoni.</li>
    <li>Acentuo a primeira sílaba nas palavras compostas: aurinkolasit, hiusväri, rantakatu.</li>
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
<p><b>Ser:</b> <span class="fi">hän on</span>. <b>Ter:</b> <span class="fi">hänellä on</span>. Passado: <span class="fi">oli</span>.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Hän on <span data-l="pitkä#2">pitkä</span>.</span></td><td>ele é alto</td></tr>
  <tr><td><span class="fi">Hänellä on siniset silmät.</span></td><td>ele tem olhos azuis</td></tr>
  <tr><td><span class="fi">Hänellä oli pitkät jalat.</span></td><td>ele tinha as pernas compridas</td></tr>
</table>
<p><b>Plural:</b> <span class="fi">siniset silmät, isot aurinkolasit</span>. Uma coisa só: <span class="fi">ruskea tukka</span>.</p>
<div class="sijataulu" data-sana="silmä" data-sijat="nominatiivi,mon.nom,mon.part"></div>`
    },
    {
      id: 'monikongenetiivi', otsikko: 'O genitivo plural: suomalaisten, rumpujen, ystävien (para reconhecer)', taso: 'reconhecer', hakuosa: 'h-monikko', treeni: 't17-monikon-genetiivi',
      html: `
<p><b>Para reconhecer:</b> <span class="fi pala">-ien, -jen, -ten</span>, usado como o genitivo singular: <span class="fi">ystävien kanssa, rumpujen ympärillä, suomalaisten ryhmä</span>.</p>
<div class="sijataulu" data-sana="ystävä" data-sijat="nominatiivi,genetiivi,mon.nom,mon.part,mon.gen"></div>`
    },
    {
      id: 'omistusliite', otsikko: 'O -ni de “meu”: nimeni, puolisoni (para reconhecer)', taso: 'reconhecer', hakuosa: 'h-omistusliitteet', treeni: 't17-omistusliite',
      html: `
<p><b>Forma:</b> substantivo + <span class="fi pala">-ni</span> = “meu, minha”.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">nimeni</span></td><td>o meu nome</td></tr>
  <tr><td><span class="fi">numeroni</span></td><td>o meu número</td></tr>
  <tr><td><span class="fi">puolisoni</span></td><td>o meu companheiro, a minha companheira</td></tr>
</table>
<p>Na fala, a terminação cai: <span class="fi" data-rekisteri="puhe">mun nimi</span>. As outras pessoas estão na Gramática.</p>`
    },
    {
      id: 'aantaminen17', otsikko: 'Pronúncia: o acento das palavras compostas', taso: 'essencial', hakuosa: 'h-paino',
      html: `
<p>Acento forte na <b>primeira sílaba</b>, um toque leve na segunda parte: <span class="fi pala">AU-rin-ko-LA-sit</span>.</p>
<ul class="esim">
  <li class="s" data-pt="cor do cabelo">hiusväri</li>
  <li class="s" data-pt="água de coco">kookosvesi</li>
</ul>`
    },
    {
      id: 'sudenkuopat17', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>Ter não é olla:</b> “ele tem olhos azuis” = <span class="fi">hänellä on siniset silmät</span>, nunca <span class="pala">hän on siniset silmät</span>.</li>
  <li><b>Negação, partitivo:</b> <span class="fi">Minulla ei ole sotkuista tukkaa.</span></li>
  <li><b>Morar não é elää:</b> <span class="fi">Marisa asuu Copacabanassa.</span></li>
</ul>`
    }
  ]
});
