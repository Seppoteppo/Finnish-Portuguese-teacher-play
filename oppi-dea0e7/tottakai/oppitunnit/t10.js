/* Tottakai, lição 10: Hiisi ajaa lentokentälle, Helsinki-Vantaa, lento Lissaboniin (Passon jakso 10 Maian näkökulmasta).
   Oma materiaali, ei kirjan tekstiä. Kurssisuunnitelma: docs/OPPITUNNIT_6_20.md §5 ”Oppitunti 10”.
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t10): 20.12. kello 4, Hiisi ajaa punaisia päin (😐), Purjo soittaa (rallienglanti); dialogi A (16 repliikkiä),
     Frases prontas, sanasto, kellonajat (yli, vaille, puoli, varttia; 24 tunnin kello), kikka: lähtötaulu (`.lahtotaulu`,
     Tottakain komponentit.js: suomenkieliset sarakkeet data-sarakkeet, kuulutukset mies 8 = data-aani + data-vaihto),
     ääntäminen (kysymys laskee; nk = [ŋk]), tehtävät 1–3.
   - osa B (#t10-b): lähtöselvitys (virkailija, ulkomaalaistaustainen), turvatarkastus (”Teidän täytyy ottaa…” fraasina:
     te-imperatiivi vasta oppitunnilla 14), viimeinen kutsu; dialogi B (14), Frases prontas, kielioppi (täytyy + genetiivi,
     pitää ja on pakko → tehtävä 4 heti perään; henkilöt -lle/-lta/-lla), lyhyt kohtaus ”Na fila da segurança” (Uuno ja
     Eenok, nimettä suomenkielisessä tekstissä: nimet vasta K2:sta; 4 repliikkiä .kpl:n ulkopuolella kuten t06 ”No
     estúdio”, koska dialogi B on jo 16 repliikkiä; kellonaika ja täytyy; vihjetaso: melkein tavallinen), tehtävät 4–9 (tarkastuskortti = .dokumentti.ficha.tarkastuskortti),
     kulttuuri (Helsinki-Vantaa), Na rua (puol viis, vartin yli kuus), kotitehtävä, itsearvio. Lento jatkuu Lissabonista
     Confinsiin: kertaus K2 alkaa siitä koneesta.
   Lunastaa lupauksen ”As horas completas, com exercícios, vêm na lição 10” (Gramática h-aika).
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat joku, joka (joka päivä), tapahtua, kukaan, viedä, miten, päästä,
   tai, ehkä, luulla + että, yrittää; dialogit 16 + 16; sanasto 46 → 39; sivun sanalistat 18 → 12; kellotaulu ja
   lähtötaulu pysyvät osassa A (omistaja 21.10.2026).
   Kaikki puhuvat kirjakieltä; puhekieli vain Na rua -nurkassa. Hiiden 😐 merkitään .emoji ja jätetään data-puhusta pois. */
Kurssi.lisaa({
  id: 't10',
  lyhyt: '10',
  jakso: 'Lição 10',
  otsikko: 'No aeroporto: horas, täytyy e para quem, de quem',
  lahde: 'Tema: viagem, aeroporto, horas · Gramática: as horas (yli, vaille, puoli, varttia; relógio de 24 horas), minun täytyy + infinitivo, pitää e on pakko, -lle/-lta/-lla com pessoas (Jaylle, äidiltä) · Pronúncia: a pergunta desce no fim; nk = [ŋk]',
  aiheet: ['aika', 'liike', 'paikka', 'numerot'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; vai passar o Natal com a família em Belo Horizonte' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; só quer dormir no avião' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; leva os dois ao aeroporto, do jeito dele' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; liga às quatro da manhã' },
    lt_virkailija: { nimi: 'Atendente', tyyppi: 'nainen', vaihto: 5, kuvaus: 'atendente do check-in; veio do Quênia e mora em Vantaa há dez anos' },
    lt_tarkastaja: { nimi: 'Agente de segurança', tyyppi: 'mies', vaihto: 7, kuvaus: 'agente da inspeção de segurança; nasceu no Iraque e já viu de tudo dentro de uma mala' },
    lt_kuuluttaja: { nimi: 'Alto-falante', tyyppi: 'mies', vaihto: 8, kuvaus: 'a voz dos anúncios do aeroporto' },
    uuno: { nimi: 'Uuno', tyyppi: 'mies', vaihto: 7, kuvaus: 'turista finlandês; macacão azul-claro, cabelo platinado; viagem da carne' },
    eenok: { nimi: 'Eenok', tyyppi: 'mies', vaihto: 8, kuvaus: 'turista finlandês, irmão do Uuno; o mesmo macacão e o mesmo cabelo' }
  },

  sanasto: [
    'lentokenttä', 'lentokone', 'lento', 'lähtö', 'portti', 'passi', 'matkustaja', 'kuulutus',
    'lähtöselvitys', 'turvatarkastus', 'virkailija', 'jono', 'matka', 'viimeinen',
    'kello', 'tunti', 'minuutti', 'vartti', 'puoli', 'yli', 'vaille', 'mihin aikaan', 'ennen', 'ajoissa', 'myöhässä', 'aikaisin',
    'minun täytyy', 'pitää', 'pakko', 'ehtiä', 'lentää', 'saapua', 'juosta', 'viedä', 'tapahtua', 'joka', 'joku', 'kukaan',
    'hyvää matkaa'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Quatro da manhã, a caminho do aeroporto',
      html: `
<ul class="tavoitteet">
  <li>Você pergunta e diz as horas: <span class="fi">Paljonko kello on? – Kello on puoli viisi.</span> (4h30!)</li>
  <li>Você lê o painel de partidas e entende horários de 24 horas: <span class="fi">kello seitsemän kaksikymmentä</span> (7.20).</li>
  <li>Você percebe que a pergunta finlandesa desce no fim e diz <span class="fi">Helsinki</span> com o <span class="fi pala">nk</span> de “banco”.</li>
  <li>Parte B: “preciso” com <span class="fi">täytyy</span> (<span class="fi">Minun täytyy lähteä.</span>) e as pessoas com <span class="fi pala">-lle, -lta, -lla</span> (<span class="fi">Anna passi Jaylle!</span>).</li>
</ul>
<p data-paikka="kallio-hameentie-ilta">Domingo, 20 de dezembro, quatro da manhã, dez graus abaixo de zero. Hoje Maia e Jay voam para o Brasil: Helsinque, Lisboa e depois Confins, o aeroporto de Belo Horizonte. Natal com a família da Maia! O Hiisi se ofereceu para levar os dois ao aeroporto Helsinki-Vantaa. Muito gentil. O problema é o jeito como o Hiisi dirige: como se as regras de trânsito fossem só para os outros.</p>

<section class="osio">
  <h2>Diálogo A: Kello on neljä</h2>
  <p class="ohje">Ouça primeiro sem tradução. Preste atenção nas horas (<span class="fi">viisi yli neljä</span>, <span class="fi">kaksikymmentä vaille viisi</span>) e em <span class="fi">Meidän täytyy…</span> (a gente precisa…). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t10-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="São quatro da manhã. Maia, Jay e Hiisi estão no carro.">Kello on neljä aamulla. Maia, Jay ja Hiisi <span data-l="olla#2">ovat</span> autossa.</p>
    <p class="s" data-h="maia" data-pt="Jay, que horas são agora?">Jay, paljonko kello on nyt?</p>
    <p class="s" data-h="jay" data-pt="São quatro e cinco. O voo para Lisboa sai às sete e vinte.">Kello on viisi yli neljä. Lento Lissaboniin lähtee kello seitsemän kaksikymmentä.</p>
    <p class="s" data-h="maia" data-pt="A gente precisa estar no aeroporto duas horas antes da partida.">Meidän täytyy <span data-l="olla#2">olla</span> lentokentällä kaksi tuntia ennen lähtöä.</p>
    <p class="s" data-h="jay" data-pt="Ou seja, às cinco e vinte. Hiisi, dá tempo?">Siis kello viisi kaksikymmentä. Hiisi, ehdimmekö me?</p>
    <p class="s" data-h="hiisi" data-puhu="Me ehdimme." data-pt="Dá tempo. (cara de paisagem)">Me ehdimme. <span class="emoji">😐</span></p>
    <p class="s" data-h="kertoja" data-pt="O Hiisi dirige rápido. O sinal está vermelho, mas o Hiisi não para.">Hiisi ajaa nopeasti. Valo on punainen, mutta Hiisi ei pysähdy.</p>
    <p class="s" data-h="maia" data-pt="Hiisi! O sinal está vermelho!">Hiisi! Valo on punainen!</p>
    <p class="s" data-h="hiisi" data-puhu="Punainen valo on turisteille." data-pt="Sinal vermelho é para turista. (cara de paisagem)">Punainen valo on turisteille. <span class="emoji">😐</span></p>
    <p class="s" data-h="maia" data-pt="Você dirige assim todo dia?">Ajatko sinä joka päivä näin?</p>
    <p class="s" data-h="hiisi" data-puhu="Joka päivä." data-pt="Todo dia. (cara de paisagem)">Joka päivä. <span class="emoji">😐</span></p>
    <p class="s" data-h="maia" data-pt="Jay, alguém está ligando! Quem liga às quatro da manhã?">Jay, joku soittaa! Kuka soittaa kello neljä?</p>
    <p class="s" data-h="purjo" data-pt="Jay! Vocês já estão no aeroporto? Vocês estão com os passaportes?">Jay! <span data-l="olla#2">Oletteko</span> te jo lentokentällä? Onko teillä passit?</p>
    <p class="s" data-h="jay" data-pt="Oi, mãe. Os passaportes estão com a Maia. E o bolo também.">Hei, äiti. Passit <span data-l="olla#2">ovat</span> Maialla. Ja kakku myös.</p>
    <p class="s" data-h="purjo" data-pt="Ótimo. O bolo é para a Marta! (em “inglês de rali”:) Boa viagem!">Hyvä. Kakku on Martalle! <span class="pala" lang="en">Häv ö naais flait!</span></p>
    <p class="s" data-h="hiisi" data-puhu="Helsinki-Vantaa. Kello on kaksikymmentä vaille viisi. Ole hyvä." data-pt="Helsinki-Vantaa. São vinte para as cinco. Pronto, entregue. (cara de paisagem)">Helsinki-Vantaa. Kello on kaksikymmentä vaille viisi. Ole hyvä. <span class="emoji">😐</span></p>
  </div>
  <p>Trinta e cinco minutos de Sörnäinen até o aeroporto, num percurso que leva quase o dobro. A Maia desce do carro com as pernas tremendo. O Jay agradece ao irmão. O Hiisi não sorri: ele nunca sorri.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos. A gramática de cada um está indicada:</p>
    <ul>
      <li><span class="fi">kaksi tuntia ennen lähtöä</span> = duas horas antes da partida · <span class="fi">tuntia</span>: partitivo depois de número (lição 3); <span class="fi">ennen</span> + partitivo = antes de</li>
      <li><span class="fi">Meidän täytyy olla lentokentällä.</span> = a gente precisa estar no aeroporto · <span class="fi">täytyy</span>: parte B desta lição</li>
      <li><span class="fi">Ehdimmekö me? – Me ehdimme.</span> = dá tempo? – dá · <span class="fi">ehtiä</span> (conseguir chegar a tempo) é um verbo do tipo 1</li>
      <li><span class="fi">Punainen valo on turisteille.</span> = sinal vermelho é para turistas · <span class="fi">turisteille</span>: os casos de lugar no plural vêm na lição 19</li>
      <li><span class="fi">Passit ovat Maialla.</span> = os passaportes estão com a Maia · <span class="fi pala">-lla</span> com pessoa: parte B</li>
      <li><span class="fi">Ole hyvä.</span> = aqui está, pronto (lição 3): o Hiisi entrega o aeroporto como quem entrega um pacote</li>
      <li><span class="fi">joka päivä</span> = todo dia · <span class="fi">joka</span> = cada, todo; não muda · <span class="fi">Joku soittaa.</span> = alguém está ligando</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="helsinki-lumi">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="No aeroporto e as horas" data-sanat="lentokenttä,lento,lähtö,portti,passi,kello,tunti,minuutti,vartti,puoli,yli,vaille"></div>
  <p>As outras palavras da lição estão no <a href="#t10-vocabulario">Vocabulário da lição</a>.</p>
</section>

<section class="osio" data-paikka="helsinki-lumi">
  <h2>As horas: Kello on…</h2>
  <p>A pergunta é <span class="fi">Paljonko kello on?</span> ou <span class="fi">Mitä kello on?</span> (que horas são?). A resposta começa com <span class="fi">Kello on…</span> e lê o relógio de ponteiros: primeiro os minutos, depois a hora. <span class="fi">yli</span> = passado de, <span class="fi">vaille</span> = faltando para, <span class="fi">varttia</span> = um quarto de hora.</p>
  <table class="taivutus">
    <tr><th>hora</th><th>finlandês</th><th>palavra por palavra</th></tr>
    <tr><td>4.00</td><td><span class="fi">Kello on neljä.</span></td><td>o relógio é quatro</td></tr>
    <tr><td>4.05</td><td><span class="fi">Kello on viisi yli neljä.</span></td><td>cinco passado das quatro</td></tr>
    <tr><td>4.15</td><td><span class="fi">Kello on varttia yli neljä.</span></td><td>um quarto passado das quatro</td></tr>
    <tr><td>4.30</td><td><span class="fi">Kello on puoli viisi.</span></td><td><b>meia para as cinco</b></td></tr>
    <tr><td>4.40</td><td><span class="fi">Kello on kaksikymmentä vaille viisi.</span></td><td>vinte faltando para as cinco</td></tr>
    <tr><td>4.45</td><td><span class="fi">Kello on varttia vaille viisi.</span></td><td>um quarto faltando para as cinco</td></tr>
  </table>
  <p>Com <span class="fi">vaille</span>, o número também pode ir no partitivo: <span class="fi pala">kahtakymmentä vaille viisi</span>. As duas formas estão certas; o curso usa a forma básica.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro: <span class="fi">puoli</span>.</b> <span class="fi">Kello on puoli viisi</span> é <b>4h30</b>, não 5h30. A meia hora já olha para a hora seguinte: “meia para as cinco”. Se você marcou um café para <span class="fi">puoli viisi</span> e chegou às cinco e meia, a Purjo esperou uma hora.</p>
  </div>
  <h3>Horários: o relógio de 24 horas</h3>
  <p>Em voos, trens e lojas, o horário é de 24 horas, escrito com ponto (<span class="fi pala">7.20</span>, <span class="fi pala">16.10</span>). Fala-se <span class="fi">kello</span> + a hora + os minutos, sem “às”: <span class="fi">kello seitsemän kaksikymmentä</span> = às 7h20. E a pergunta “a que horas?” é <span class="fi">Mihin aikaan?</span></p>
  <ul class="esim">
    <li class="s" data-puhu="Lento lähtee kello seitsemän kaksikymmentä." data-pt="O voo sai às 7h20.">Lento lähtee kello 7.20.</li>
    <li class="s" data-puhu="Lento saapuu Lissaboniin kello yhdeksän kolmekymmentä." data-pt="O voo chega a Lisboa às 9h30.">Lento saapuu Lissaboniin kello 9.30.</li>
    <li class="s" data-puhu="Juna lähtee kello kuusitoista kymmenen." data-pt="O trem sai às 16h10.">Juna lähtee kello 16.10.</li>
    <li class="s" data-pt="A que horas sai o voo?">Mihin aikaan lento lähtee?</li>
  </ul>
</section>

<section class="osio" data-paikka="helsinki-vantaa">
  <h2>No saguão: o painel de partidas</h2>
  <p class="ohje">4h45 em Helsinki-Vantaa. O painel mostra <span class="fi">Lähdöt</span> (partidas). As colunas: <span class="fi">aika</span> (hora), <span class="fi">kohde</span> (destino), <span class="fi">lento</span> (voo), <span class="fi">portti</span> (portão) e <span class="fi">huomautukset</span> (observações): <span class="fi">ajassa</span> = no horário, <span class="fi">myöhässä</span> = atrasado, <span class="fi">peruttu</span> = cancelado, <span class="fi">lähtöselvitys</span> = check-in aberto. Toque num voo e ouça o anúncio.</p>
  <div class="lahtotaulu" data-otsikko="Helsinki-Vantaa · Lähdöt" data-kello="04.45" data-sarakkeet="Aika|Kohde|Lento|Portti|Huomautukset"
       data-ohje="Toque num voo: você ouve o anúncio em finlandês." data-aani="mies" data-vaihto="8">
    <p data-aika="06.00" data-kohde="Tukholma" data-lento="AY 801" data-portti="14" data-tila="Ajassa" data-puhu="Lento Tukholmaan lähtee kello kuusi portilta neljätoista."></p>
    <p data-aika="06.40" data-kohde="Oulu" data-lento="AY 431" data-portti="7" data-tila="Ajassa" data-puhu="Lento Ouluun lähtee kello kuusi neljäkymmentä portilta seitsemän."></p>
    <p data-aika="07.20" data-kohde="Lissabon" data-lento="TP 1235" data-portti="21" data-tila="Lähtöselvitys" data-puhu="Lento Lissaboniin lähtee kello seitsemän kaksikymmentä portilta kaksikymmentäyksi."></p>
    <p data-aika="07.45" data-kohde="Lontoo" data-lento="AY 1331" data-portti="30" data-tila="Myöhässä" data-puhu="Lento Lontooseen on myöhässä. Uusi lähtöaika on puoli yhdeksän."></p>
    <p data-aika="08.10" data-kohde="Pariisi" data-lento="AF 1171" data-portti="20" data-tila="Ajassa" data-puhu="Lento Pariisiin lähtee kello kahdeksan kymmenen portilta kaksikymmentä."></p>
    <p data-aika="08.30" data-kohde="Rovaniemi" data-lento="AY 531" data-portti="—" data-tila="Peruttu" data-puhu="Lento Rovaniemelle on peruttu."></p>
  </div>
  <p>Repare: <span class="fi">Lento Ouluun</span>, <span class="fi">Lontooseen</span>, <span class="fi">Pariisiin</span> (para onde? <span class="fi pala">-uun, -seen, -iin</span>, lição 6), mas <span class="fi">Lento Rovaniemelle</span>: a cidade do Papai Noel usa os casos “de fora” (<span class="fi">Rovaniemellä</span>), como a Gramática de lugar explica.</p>
</section>

<section class="osio" data-paikka="helsinki-vantaa">
  <h2>Pronúncia: a pergunta desce, e nk soa como em “banco”</h2>
  <p>Em português, a pergunta sem palavra interrogativa <b>sobe</b> no fim (“Dá tempo?”). Em finlandês, <b>a pergunta desce</b>, como uma frase comum: a pergunta já está na palavra, no <span class="fi pala">-ko/-kö</span> ou na palavra interrogativa. Se a voz sobe no fim, o finlandês ouve susto ou espanto. Quando a Maia perguntou <span class="fi">Ehdimmekö me?</span> com a melodia brasileira, o Hiisi achou que ela estava com medo. Ela estava.</p>
  <ul class="esim">
    <li class="s" data-pt="De onde sai o voo para Lisboa?">Mistä lähtee lento Lissaboniin?</li>
    <li class="s" data-pt="Que horas são?">Paljonko kello on?</li>
    <li class="s" data-pt="Dá tempo?">Ehdimmekö me?</li>
    <li class="s" data-pt="Vocês estão com os passaportes?">Onko teillä passit?</li>
  </ul>
  <div class="saanto">
    <h3>nk = [ŋk], ng = [ŋː]</h3>
    <p>No grupo <span class="fi pala">nk</span>, o <span class="fi pala">n</span> é feito no fundo da boca, como em “banco”, mas a vogal antes dele <b>não fica nasal</b>: <span class="fi pala">HEL-sin-ki</span>, não “Hel-sĩ-ki”. O <span class="fi pala">ng</span> (que aparece quando o <span class="fi pala">k</span> enfraquece) é esse mesmo som, longo e sem “g”: <span class="fi">Helsinki → Helsingissä</span>, <span class="fi">kenkä → kengät</span>.</p>
  </div>
  <ul class="esim">
    <li class="s" data-pt="Helsinque">Helsinki</li>
    <li class="s" data-pt="em Helsinque">Helsingissä</li>
    <li class="s" data-pt="sapato">kenkä</li>
    <li class="s" data-pt="sapatos">kengät</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinki-vantaa">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ligue a hora ao relógio</h3>
    <ul class="yhdista">
      <li data-pari="4.05">viisi yli neljä</li>
      <li data-pari="4.15">varttia yli neljä</li>
      <li data-pari="4.30">puoli viisi</li>
      <li data-pari="4.40">kaksikymmentä vaille viisi</li>
      <li data-pari="4.45">varttia vaille viisi</li>
      <li data-pari="5.30">puoli kuusi</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>2. Leia o painel de partidas</h3>
    <p class="ohje">Volte ao painel se precisar: horários, portões e observações.</p>
    <div class="valinta" data-oikea="7.20">
      <p class="kysymys"><span class="fi">Mihin aikaan lento Lissaboniin lähtee?</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">6.40</button><button type="button">7.20</button><button type="button">7.45</button></div>
    </div>
    <div class="valinta" data-oikea="Lento Lontooseen">
      <p class="kysymys"><span class="fi">Mikä lento on myöhässä?</span></p>
      <div class="vaihtoehdot"><button type="button">Lento Pariisiin</button><button type="button">Lento Ouluun</button><button type="button">Lento Lontooseen</button></div>
    </div>
    <div class="valinta" data-oikea="8.30">
      <p class="kysymys"><span class="fi">Lento Lontooseen on myöhässä. Uusi lähtöaika on puoli yhdeksän.</span> A que horas o voo sai agora?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">9.30</button><button type="button">8.30</button><button type="button">7.45</button></div>
    </div>
    <div class="valinta" data-oikea="20">
      <p class="kysymys"><span class="fi">Miltä portilta lento Pariisiin lähtee?</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">20</button><button type="button">21</button><button type="button">30</button></div>
    </div>
    <div class="valinta" data-oikea="Lento Rovaniemelle">
      <p class="kysymys"><span class="fi">Mikä lento on peruttu?</span></p>
      <div class="vaihtoehdot"><button type="button">Lento Tukholmaan</button><button type="button">Lento Rovaniemelle</button><button type="button">Lento Lissaboniin</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Ouça: pergunta ou afirmação?</h3>
    <p class="ohje">Aperte ▶ sem ler. A melodia desce nos dois casos, então decida pela palavra: <span class="fi pala">-ko/-kö</span> ou palavra interrogativa = pergunta.</p>
    <div class="valinta" data-kuuntele="Lento lähtee kello seitsemän." data-oikea="afirmação">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">pergunta</button><button type="button">afirmação</button></div>
    </div>
    <div class="valinta" data-kuuntele="Lähteekö lento kello seitsemän?" data-oikea="pergunta">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">pergunta</button><button type="button">afirmação</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mistä lähtee lento Lissaboniin?" data-oikea="pergunta">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">pergunta</button><button type="button">afirmação</button></div>
    </div>
    <div class="valinta" data-kuuntele="Lento Lissaboniin lähtee portilta kaksikymmentäyksi." data-oikea="afirmação">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">pergunta</button><button type="button">afirmação</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Check-in, segurança e a última chamada',
      html: `
<ul class="tavoitteet">
  <li>Você diz o que precisa fazer: <span class="fi">Minun täytyy lähteä.</span> <span class="fi">Maian täytyy juosta.</span></li>
  <li>Você conhece <span class="fi">pitää</span> e <span class="fi">on pakko</span>, e não confunde <span class="fi">minun pitää</span> (eu preciso) com <span class="fi">minä pidän</span> (eu gosto).</li>
  <li>Você fala de pessoas com <span class="fi pala">-lle, -lta, -lla</span>: <span class="fi">Anna passi Jaylle!</span> <span class="fi">Minulla on viesti äidiltä.</span></li>
  <li>Você passa pelo check-in e pela segurança e entende a última chamada.</li>
</ul>

<p data-paikka="helsinki-vantaa">Cinco da manhã, e o saguão já está cheio: é dezembro, e meia Finlândia foge do escuro para o sol. No check-in atende uma moça que veio do Quênia há dez anos e fala finlandês melhor que o Hiisi. Na inspeção de segurança, um agente que já viu de tudo dentro de uma mala. E a Maia leva na bagagem de mão o bolo da Purjo para a Marta.</p>

<section class="osio" data-paikka="helsinki-vantaa">
  <h2>Diálogo B: Lähtöselvitys, turvatarkastus ja viimeinen kutsu</h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure três vezes <span class="fi">täytyy</span> e as pessoas com <span class="fi pala">-lle</span> e <span class="fi pala">-lta</span>: para quem é o quê, de quem vem o quê?</p>
  <div class="kpl" id="t10-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="kertoja" data-pt="São cinco horas. No check-in há uma fila comprida.">Kello on viisi. Lähtöselvityksessä on pitkä jono.</p>
    <p class="s" data-h="lt_virkailija" data-pt="Bom dia! Os passaportes, por favor. Para onde vocês voam hoje?">Huomenta! Passit, kiitos. Mihin te lennätte tänään?</p>
    <p class="s" data-h="maia" data-pt="Para Lisboa, e de lá para Belo Horizonte.">Lissaboniin ja sieltä Belo Horizonteen.</p>
    <p class="s" data-h="lt_virkailija" data-pt="Janela ou corredor?">Ikkunapaikka vai käytäväpaikka?</p>
    <p class="s" data-h="jay" data-pt="Janela para a Maia, corredor para mim. Eu preciso dormir.">Ikkunapaikka Maialle, käytäväpaikka minulle. Minun täytyy nukkua.</p>
    <p class="s" data-h="lt_virkailija" data-pt="Certo. Aqui estão os cartões de embarque. Vocês precisam estar no portão às seis e cinquenta. Boa viagem!">Selvä. Tässä ovat tarkastuskortit. Teidän täytyy <span data-l="olla#2">olla</span> portilla kello kuusi viisikymmentä. Hyvää matkaa!</p>
    <p class="s" data-h="kertoja" data-pt="Na inspeção de segurança, o agente olha a mala da Maia.">Turvatarkastuksessa tarkastaja katsoo Maian laukkua.</p>
    <p class="s" data-h="lt_tarkastaja" data-pt="O que é isto? A senhora precisa tirar isso da mala.">Mikä tämä on? Teidän täytyy ottaa se pois laukusta.</p>
    <p class="s" data-h="maia" data-pt="É um bolo. Da Purjo para a Marta.">Se on kakku. Purjolta Martalle.</p>
    <p class="s" data-h="lt_tarkastaja" data-pt="O bolo pode passar. Feliz Natal!">Kakku <span data-l="saada#3">saa</span> mennä. Hyvää joulua!</p>
    <p class="s" data-h="kertoja" data-pt="Sete horas. Maia e Jay tomam café no café do aeroporto. O Jay tem uma mensagem da mãe.">Kello on seitsemän. Maia ja Jay juovat kahvia lentokentän kahvilassa. Jayllä on viesti äidiltä.</p>
    <p class="s" data-h="lt_kuuluttaja" data-pt="Última chamada para o voo para Lisboa. Passageiros Jay e Maia, portão vinte e um!">Viimeinen kutsu lennolle Lissaboniin. Matkustajat Jay ja Maia, portti kaksikymmentäyksi!</p>
    <p class="s" data-h="jay" data-pt="O que está acontecendo?">Mitä tapahtuu?</p>
    <p class="s" data-h="maia" data-pt="Jay! Somos nós! A gente precisa correr!">Jay! Se olemme me! Meidän täytyy juosta!</p>
    <p class="s" data-h="jay" data-pt="Correr? Primeiro eu preciso tomar café…">Juosta? Minun täytyy ensin juoda kahvia…</p>
    <p class="s" data-h="maia" data-pt="Ninguém espera pela gente! Corra!">Kukaan ei odota meitä! Juokse!</p>
  </div>
  <p>Eles correm. O portão 21 fecha às 7h05; Maia e Jay chegam às 7h04, sem fôlego, o Jay com o copo de café na mão e a Maia com o bolo da Purjo inteiro. Às 7h20 o avião decola para Lisboa. Em Lisboa eles trocam de avião, e de lá são nove horas de voo até Confins, em Belo Horizonte. O que acontece nesse segundo voo, você vê na Revisão 6–10.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Mihin te lennätte?</span> = para onde vocês voam? · <span class="fi">te</span> = vocês, e também o senhor, a senhora · <span class="fi">lentää</span> (voar): <span class="fi">lennän, lennät, lentää</span></li>
      <li><span class="fi">Ikkunapaikka vai käytäväpaikka?</span> = janela ou corredor? · <span class="fi">vai</span> = ou, nas perguntas</li>
      <li><span class="fi">Tässä ovat tarkastuskortit.</span> = aqui estão os cartões de embarque · o plural em <span class="fi pala">-t</span> que você já conhece (lição 9)</li>
      <li><span class="fi">Teidän täytyy ottaa se pois laukusta.</span> = a senhora precisa tirar isso da mala · <span class="fi">teidän</span>: genitivo de <span class="fi">te</span>, aqui a forma educada</li>
      <li><span class="fi">Kakku saa mennä.</span> = o bolo pode passar · <span class="fi">saa</span> = pode, tem permissão</li>
      <li><span class="fi">Hyvää matkaa! Hyvää joulua!</span> = boa viagem! feliz Natal! · votos no partitivo, como <span class="fi">Hyvää päivää!</span> (lição 1)</li>
      <li><span class="fi">Se olemme me!</span> = somos nós!</li>
      <li><span class="fi">Mitä tapahtuu?</span> = o que está acontecendo? · <span class="fi">Kukaan ei odota.</span> = ninguém espera · <span class="fi">kukaan</span> (ninguém) só com <span class="fi">ei</span></li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="helsinki-vantaa">
  <h2>Na fila da segurança</h2>
  <p>Antes, na fila da segurança, logo atrás da Maia, estavam dois homens de macacão azul-claro e cabelo platinado. Pareciam dois turistas finlandeses comuns. Na bandeja deles havia só um caderninho. Quando chegou a vez deles, fizeram duas perguntas ao agente:</p>
  <p class="s" data-h="uuno" data-pt="Com licença. A que horas sai o voo para Lisboa?">Anteeksi. Mihin aikaan lento Lissaboniin lähtee?</p>
  <p class="s" data-h="lt_tarkastaja" data-pt="Às sete e vinte.">Kello seitsemän kaksikymmentä.</p>
  <p class="s" data-h="eenok" data-pt="Tem carne no avião? A gente precisa saber.">Onko lentokoneessa lihaa? Meidän täytyy tietää.</p>
  <p class="s" data-h="lt_tarkastaja" data-pt="Não sei. Aqui é a inspeção de segurança.">En tiedä. Tämä on turvatarkastus.</p>
  <p>O mais alto anotou a resposta no caderninho, palavra por palavra. A Maia achou graça: turistas com fome às cinco e meia da manhã. Na Revisão 6–10 ela vai encontrar os dois de novo.</p>
</section>

<section class="osio" data-osa="gramatica" data-paikka="helsinki-vantaa">
  <h2>Gramática 1 · Preciso: <span class="fi">minun täytyy</span>, <span class="fi">pitää</span>, <span class="fi">on pakko</span></h2>

  <h3>1. Preciso: minun täytyy + infinitivo</h3>
  <p>“Eu preciso ir embora” é <span class="fi">Minun täytyy lähteä</span>, palavra por palavra “de mim é preciso partir”. São três peças, sempre na mesma ordem:</p>
  <ol>
    <li>quem precisa vai no <b>genitivo</b> (<span class="fi pala">-n</span>, lição 5): <span class="fi">minun, sinun, Maian, Jayn, äidin</span>;</li>
    <li><span class="fi">täytyy</span> não muda nunca: a mesma forma para todas as pessoas;</li>
    <li>o segundo verbo fica no <b>infinitivo</b>, a forma do dicionário: <span class="fi">lähteä, juosta, nukkua</span>.</li>
  </ol>
  <table class="taivutus">
    <tr><th>finlandês</th><th>português</th></tr>
    <tr><td><span class="fi">Minun täytyy lähteä.</span></td><td>Eu preciso ir embora.</td></tr>
    <tr><td><span class="fi">Sinun täytyy nukkua.</span></td><td>Você precisa dormir.</td></tr>
    <tr><td><span class="fi">Hänen täytyy juosta.</span></td><td>Ele, ela precisa correr.</td></tr>
    <tr><td><span class="fi">Meidän täytyy odottaa.</span></td><td>Nós precisamos esperar.</td></tr>
    <tr><td><span class="fi">Teidän täytyy maksaa.</span></td><td>Vocês precisam pagar.</td></tr>
    <tr><td><span class="fi">Heidän täytyy soittaa.</span></td><td>Eles, elas precisam ligar.</td></tr>
  </table>
  <p>Com nomes, o mesmo genitivo da lição 5: <span class="fi">Maian täytyy juosta.</span> <span class="fi">Jayn täytyy juoda kahvia.</span> Negativo: <span class="fi">Sinun ei tarvitse juosta.</span> (você não precisa correr). Pergunta: <span class="fi">Täytyykö meidän juosta?</span> (a gente precisa correr?)</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> “eu preciso” puxa <span class="pala">minä täytyy</span>, com sujeito como no português. Em finlandês, quem precisa vai no genitivo: <span class="fi">minun täytyy</span>. E o segundo verbo não conjuga: <span class="fi">Minun täytyy lähteä</span>, nunca <span class="pala">minun täytyy lähden</span>.</p>
  </div>

  <h3>2. pitää e on pakko</h3>
  <p>Na fala, <span class="fi" data-l="pitää#3">pitää</span> é tão comum quanto <span class="fi">täytyy</span> e funciona igual: genitivo + <span class="fi" data-l="pitää#3">pitää</span> + infinitivo. Mas atenção: com o sujeito normal (<span class="fi">minä</span>), <span class="fi">pitää</span> quer dizer <b>gostar</b>, e a coisa de que se gosta vai para o elativo <span class="fi pala">-sta</span> (lição 6). <span class="fi">On pakko</span> é o mais forte: não há escolha.</p>
  <ul class="esim">
    <li class="s" data-pt="Eu preciso ir embora.">Minun <span data-l="pitää#3">pitää</span> lähteä.</li>
    <li class="s" data-pt="Eu gosto de café.">Minä pidän kahvista.</li>
    <li class="s" data-pt="A gente tem que correr! (não há escolha)">Meidän on pakko juosta!</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinki-vantaa">
  <h2>Exercício: quem precisa?</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Quem precisa? Complete</h3>
    <p class="ohje">Quem precisa vai no genitivo (<span class="fi pala">-n</span>); entre parênteses está quem é. Nas duas últimas, escreva o segundo verbo, no infinitivo.</p>
    <div class="aukot" lang="fi-FI">
      <p><span class="aukko" data-oikea="Minun"></span> täytyy lähteä. <span data-ei-kuplaa>(minä)</span></p>
      <p><span class="aukko" data-oikea="Sinun"></span> täytyy nukkua. <span data-ei-kuplaa>(sinä)</span></p>
      <p><span class="aukko" data-oikea="Maian"></span> täytyy juosta. <span data-ei-kuplaa>(Maia)</span></p>
      <p><span class="aukko" data-oikea="Jayn"></span> täytyy juoda kahvia. <span data-ei-kuplaa>(Jay)</span></p>
      <p><span class="aukko" data-oikea="Meidän"></span> täytyy olla lentokentällä kello viisi. <span data-ei-kuplaa>(me)</span></p>
      <p><span class="aukko" data-oikea="Teidän"></span> täytyy ottaa se pois laukusta. <span data-ei-kuplaa>(te)</span></p>
      <p>Minun täytyy <span class="aukko" data-oikea="maksaa"></span>. <span lang="pt-BR">(pagar)</span></p>
      <p>Hiiden täytyy <span class="aukko" data-oikea="ajaa"></span> hitaasti. <span lang="pt-BR">(dirigir)</span></p>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="helsinki-vantaa">
  <h2>Gramática 2 · Pessoas: para quem, de quem, quem tem</h2>
  <p>Para pessoas, o finlandês usa sempre os casos “de fora” (lição 7), nunca os “de dentro”: uma pessoa não é uma caixa. <b>Para quem?</b> <span class="fi pala">-lle</span>. <b>De quem (vindo de quem)?</b> <span class="fi pala">-lta/-ltä</span>. <b>Com quem? Quem tem?</b> <span class="fi pala">-lla/-llä</span>.</p>
  <table class="taivutus">
    <tr><th>pergunta</th><th>exemplo</th><th>português</th></tr>
    <tr><td><span class="fi">kenelle?</span> <span class="fi pala">-lle</span></td><td><span class="fi">Anna passi Jaylle!</span></td><td>para quem? Dê o passaporte para o Jay!</td></tr>
    <tr><td><span class="fi">keneltä?</span> <span class="fi pala">-lta/-ltä</span></td><td><span class="fi">Minulla on viesti äidiltä.</span></td><td>de quem? Eu tenho uma mensagem da mãe.</td></tr>
    <tr><td><span class="fi">kenellä?</span> <span class="fi pala">-lla/-llä</span></td><td><span class="fi">Passit ovat Maialla.</span></td><td>quem tem? Os passaportes estão com a Maia.</td></tr>
  </table>
  <p>Verbos que pedem <span class="fi pala">-lle</span>: <span class="fi">antaa</span> (dar para), <span class="fi">soittaa</span> (ligar para), <span class="fi">sanoa</span> (dizer para), <span class="fi">kertoa</span> (contar para). Verbos que pedem <span class="fi pala">-lta</span>: <span class="fi">kysyä</span> (perguntar <b>a</b> alguém), <span class="fi">saada</span> (receber de), <span class="fi">ostaa</span> (comprar de).</p>
  <div class="huomio">
    <p><b>Armadilha:</b> “perguntar ao Jay” não é <span class="pala">kysyä Jaylle</span>: em finlandês a resposta vem <b>da</b> pessoa, então <span class="fi">Kysy Jayltä!</span> E “para a mãe” nunca é <span class="pala">äitiin</span> (para dentro da mãe): é <span class="fi">äidille</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="helsinki-vantaa">
  <h2>Exercícios da parte B</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Ouça a hora</h3>
    <p class="ohje">Aperte ▶ e escolha o horário. Cuidado com <span class="fi">puoli</span>: ele olha para a hora seguinte.</p>
    <div class="valinta" data-kuuntele="Kello on puoli seitsemän." data-oikea="6.30">
      <p class="kysymys">Que horas são?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">7.30</button><button type="button">6.30</button><button type="button">6.15</button></div>
    </div>
    <div class="valinta" data-kuuntele="Kello on varttia yli kahdeksan." data-oikea="8.15">
      <p class="kysymys">Que horas são?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">8.15</button><button type="button">7.45</button><button type="button">8.45</button></div>
    </div>
    <div class="valinta" data-kuuntele="Kello on kymmenen vaille yhdeksän." data-oikea="8.50">
      <p class="kysymys">Que horas são?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">9.10</button><button type="button">9.50</button><button type="button">8.50</button></div>
    </div>
    <div class="valinta" data-kuuntele="Lento Confinsiin lähtee kello kolmetoista kymmenen." data-oikea="13.10">
      <p class="kysymys">A que horas sai o voo de Lisboa para Confins?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">13.10</button><button type="button">3.10</button><button type="button">13.50</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Para quem, de quem, quem tem?</h3>
    <p class="ohje">Escolha a forma certa. Entre parênteses está o que a frase quer dizer.</p>
    <div class="valinta" data-oikea="Jaylle">
      <p class="kysymys"><span class="fi">Anna passi ___!</span> (para o Jay)</p>
      <div class="vaihtoehdot"><button type="button">Jayltä</button><button type="button">Jaylle</button><button type="button">Jayllä</button></div>
    </div>
    <div class="valinta" data-oikea="äidiltä">
      <p class="kysymys"><span class="fi">Minulla on viesti ___.</span> (da mãe)</p>
      <div class="vaihtoehdot"><button type="button">äidiltä</button><button type="button">äidille</button><button type="button">äidillä</button></div>
    </div>
    <div class="valinta" data-oikea="virkailijalta">
      <p class="kysymys"><span class="fi">Kysy ___!</span> (pergunte à atendente)</p>
      <div class="vaihtoehdot"><button type="button">virkailijalle</button><button type="button">virkailijalla</button><button type="button">virkailijalta</button></div>
    </div>
    <div class="valinta" data-oikea="Martalle">
      <p class="kysymys"><span class="fi">Kakku on ___.</span> (para a Marta)</p>
      <div class="vaihtoehdot"><button type="button">Martalta</button><button type="button">Martalle</button><button type="button">Martaan</button></div>
    </div>
    <div class="valinta" data-oikea="Maialla">
      <p class="kysymys"><span class="fi">Passit ovat ___.</span> (com a Maia)</p>
      <div class="vaihtoehdot"><button type="button">Maialle</button><button type="button">Maialta</button><button type="button">Maialla</button></div>
    </div>
    <div class="valinta" data-oikea="Purjolle">
      <p class="kysymys"><span class="fi">Jay soittaa ___.</span> (para a Purjo)</p>
      <div class="vaihtoehdot"><button type="button">Purjolle</button><button type="button">Purjoon</button><button type="button">Purjolta</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. O cartão de embarque da Maia</h3>
    <p class="ohje">Leia o <span class="fi">tarkastuskortti</span> e responda.</p>
    <div class="dokumentti ficha kortti-fi tarkastuskortti" lang="fi-FI">
      <div class="ficha-yla"><span class="ficha-koulu">Helsinki-Vantaa → Lissabon</span><span class="ficha-otsikko">Tarkastuskortti</span></div>
      <dl>
        <dt>Matkustaja</dt><dd>Maia</dd>
        <dt>Lento</dt><dd><span class="pala">TP 1235</span></dd>
        <dt>Kohde</dt><dd>Lissabon</dd>
        <dt>Lähtöaika</dt><dd><span class="pala">7.20</span></dd>
        <dt>Portti</dt><dd><span class="pala">21</span></dd>
        <dt>Portti sulkeutuu</dt><dd><span class="pala">7.05</span></dd>
        <dt>Paikka</dt><dd><span class="pala">14 A</span> · ikkunapaikka</dd>
      </dl>
      <p class="ficha-huom">Portti sulkeutuu viisitoista minuuttia ennen lähtöä!</p>
    </div>
    <div class="valinta" data-oikea="7.05">
      <p class="kysymys"><span class="fi">Mihin aikaan portti sulkeutuu?</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">7.20</button><button type="button">7.05</button><button type="button">6.50</button></div>
    </div>
    <div class="valinta" data-oikea="Viisi yli seitsemän.">
      <p class="kysymys"><span class="fi">Paljonko kello on, kun portti sulkeutuu?</span></p>
      <div class="vaihtoehdot"><button type="button">Viisi vaille seitsemän.</button><button type="button">Viisi yli seitsemän.</button><button type="button">Viisi yli kuusi.</button></div>
    </div>
    <div class="valinta" data-oikea="Maialla">
      <p class="kysymys"><span class="fi">Kenellä on ikkunapaikka?</span></p>
      <div class="vaihtoehdot"><button type="button">Jayllä</button><button type="button">Maialla</button><button type="button">Hiidellä</button></div>
    </div>
    <div class="valinta" data-oikea="Lissaboniin">
      <p class="kysymys"><span class="fi">Mihin Maia lentää?</span></p>
      <div class="vaihtoehdot"><button type="button">Lissaboniin</button><button type="button">Lontooseen</button><button type="button">Pariisiin</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Traduza para o finlandês</h3>
    <div class="kaanna"><p class="pt">Eu preciso ir embora.</p><p class="s" data-pt="Eu preciso ir embora.">Minun täytyy lähteä.</p></div>
    <div class="kaanna"><p class="pt">A Maia precisa correr.</p><p class="s" data-pt="A Maia precisa correr.">Maian täytyy juosta.</p></div>
    <div class="kaanna"><p class="pt">Dê o passaporte para o Jay!</p><p class="s" data-pt="Dê o passaporte para o Jay!">Anna passi Jaylle!</p></div>
    <div class="kaanna"><p class="pt">Eu tenho uma mensagem da mãe.</p><p class="s" data-pt="Eu tenho uma mensagem da mãe.">Minulla on viesti äidiltä.</p></div>
    <div class="kaanna"><p class="pt">O voo sai às sete e vinte.</p><p class="s" data-pt="O voo sai às sete e vinte.">Lento lähtee kello seitsemän kaksikymmentä.</p></div>
    <div class="kaanna"><p class="pt">São quatro e meia.</p><p class="s" data-pt="São quatro e meia.">Kello on puoli viisi.</p></div>
    <div class="kaanna"><p class="pt">O ônibus leva ao aeroporto.</p><p class="s" data-pt="O ônibus leva ao aeroporto.">Bussi vie lentokentälle.</p></div>
    <div class="kaanna"><p class="pt">Acho que o voo está atrasado.</p><p class="s" data-pt="Acho que o voo está atrasado.">Luulen, että lento on myöhässä.</p></div>
    <div class="kaanna"><p class="pt">Eu tento dormir no avião.</p><p class="s" data-pt="Eu tento dormir no avião.">Yritän nukkua lentokoneessa.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Responda às perguntas</h3>
    <p class="ohje">Responda em voz alta antes de abrir o modelo. Diga as horas por extenso.</p>
    <details class="vastaus"><summary lang="fi-FI">Paljonko kello on nyt?</summary><p class="s" data-pt="São oito e quinze. (diga a hora de agora)">Kello on varttia yli kahdeksan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mihin aikaan sinä lähdet töihin?</summary><p class="s" data-pt="Saio para o trabalho às oito.">Lähden töihin kello kahdeksan.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinun täytyy tehdä tänään?</summary><p class="s" data-pt="Eu preciso ir ao mercado e ligar para a mãe.">Minun täytyy mennä kauppaan ja soittaa äidille.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Täytyykö sinun nousta aikaisin huomenna?</summary><p class="s" data-pt="Preciso. Preciso levantar às seis.">Täytyy. Minun täytyy nousta kello kuusi.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Miten sinä pääset lentokentälle?</summary><p class="s" data-pt="De trem ou de ônibus. Talvez de ônibus.">Junalla tai bussilla. Ehkä bussilla.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Kenelle sinä soitat tänään?</summary><p class="s" data-pt="Ligo para a mãe.">Soitan äidille.</p></details>
  </div>
</section>

<aside class="kulttuuri" data-paikka="helsinki-vantaa">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Helsinki-Vantaa: o aeroporto da Finlândia</h3>
  <figure class="kuva" data-kuva="helsinki-vantaa">
    <span class="huuto" data-x="18" data-y="22" data-aani="mies" data-vaihto="8" data-pt="última chamada!">Viimeinen kutsu!</span>
    <span class="huuto" data-x="62" data-y="16" data-aani="nainen" data-vaihto="5" data-pt="boa viagem!">Hyvää matkaa!</span>
    <span class="huuto" data-x="36" data-y="52" data-aani="mies" data-vaihto="7" data-pt="passaporte, por favor">Passi, kiitos.</span>
    <span class="huuto" data-x="72" data-y="58" data-aani="nainen" data-vaihto="5" data-pt="feliz Natal!">Hyvää joulua!</span>
  </figure>
  <p>O aeroporto de Helsinque fica em <span class="fi">Vantaa</span>, a cidade vizinha, uns 17 quilômetros ao norte do centro; daí o nome <span class="fi">Helsinki-Vantaa</span>. Foi inaugurado em 1952, para os Jogos Olímpicos de Helsinque. Do centro, o trem leva cerca de meia hora.</p>
  <p>A regra finlandesa é chegar <b>duas horas antes</b> de um voo internacional. Em dezembro, a fila da inspeção de segurança pode levar meia hora: meio país viaja para o sol, e muita gente do mundo inteiro vem para a Lapônia ver o Papai Noel em <span class="fi">Rovaniemi</span>.</p>
  <p>Os anúncios vêm em finlandês, sueco e inglês. Os finlandeses chegam cedo, ficam quietos na fila e embarcam na ordem certa. A Maia e o Jay são a exceção desta manhã.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Puol viis: as horas na rua</h3>
  <p>Na fala, as horas encurtam como os números da lição 2. Muita gente diz <span class="fi">vartin yli</span> em vez de <span class="fi">varttia yli</span> (as duas formas estão certas), e “eu preciso” na rua é quase sempre <span class="fi">mun <span data-l="pitää#3">pitää</span></span>. Você não precisa falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">puoli viisi</span></td><td><span class="fi">puol viis</span></td><td>quatro e meia</td></tr>
    <tr><td><span class="fi">varttia yli kuusi</span></td><td><span class="fi">vartin yli kuus</span></td><td>seis e quinze</td></tr>
    <tr><td><span class="fi">kaksikymmentä vaille viisi</span></td><td><span class="fi">kakskyt vaille viis</span></td><td>vinte para as cinco</td></tr>
  </table>
  <p class="s" data-h="hiisi" data-kirja="Paljonko kello on? – Kaksikymmentä vaille viisi." data-pt="Que horas são? – Vinte para as cinco.">Paljonks kello on? – Kakskyt vaille viis.</p>
  <p class="s" data-h="jay" data-kirja="Minun pitää mennä." data-pt="Eu preciso ir.">Mun <span data-l="pitää#3">pitää</span> mennä.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="belo-horizonte-panoraama">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t10">
    <h3>Lição de casa</h3>
    <p>Escreva o seu próximo dia de viagem (ou um dia de trabalho) em seis frases: a que horas você levanta (<span class="fi">Nousen kello…</span>), a que horas sai o seu voo, trem ou ônibus (<span class="fi">… lähtee kello…</span>), duas coisas que você precisa fazer (<span class="fi">Minun täytyy…</span>), para quem você liga (<span class="fi">Soitan…</span> + <span class="fi pala">-lle</span>) e de quem você tem uma mensagem (<span class="fi">Minulla on viesti…</span> + <span class="fi pala">-lta</span>). Escreva as horas por extenso e leia em voz alta, com a pergunta descendo no fim.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Eu levanto às três e meia.">Nousen kello puoli neljä.</p>
      <p class="s" data-pt="O voo sai às sete e vinte.">Lento lähtee kello seitsemän kaksikymmentä.</p>
      <p class="s" data-pt="Eu preciso estar no aeroporto duas horas antes da partida.">Minun täytyy <span data-l="olla#2">olla</span> lentokentällä kaksi tuntia ennen lähtöä.</p>
      <p class="s" data-pt="Eu preciso levar o passaporte e o bolo da Purjo.">Minun täytyy ottaa passi ja Purjon kakku.</p>
      <p class="s" data-pt="Eu ligo para a Marta de Lisboa.">Soitan Martalle Lissabonista.</p>
      <p class="s" data-pt="Eu tenho uma mensagem da Purjo.">Minulla on viesti Purjolta.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t10">
    <li>Sei perguntar e dizer as horas: Kello on puoli viisi (4h30!).</li>
    <li>Entendo horários de 24 horas: kello seitsemän kaksikymmentä.</li>
    <li>Sei dizer o que preciso fazer: Minun täytyy lähteä. Maian täytyy juosta.</li>
    <li>Não confundo minun pitää (preciso) com minä pidän (gosto).</li>
    <li>Uso -lle, -lta e -lla com pessoas: Anna passi Jaylle! Kysy Jayltä!</li>
    <li>Faço perguntas que descem no fim e digo Helsinki com o nk de “banco”.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'kello', otsikko: 'As horas: Kello on…', taso: 'essencial', hakuosa: 'h-aika', treeni: ['t10-kello', 't10-kuuntele'],
      html: `
<p><b>Forma:</b> minutos + <span class="fi">yli</span> (passado de) + a hora; minutos + <span class="fi">vaille</span> (faltando para) + a hora seguinte; <span class="fi">puoli</span> + a hora seguinte; <span class="fi">varttia</span> = um quarto de hora.</p>
<table class="taivutus">
  <tr><th>hora</th><th>finlandês</th></tr>
  <tr><td>6.00</td><td><span class="fi">Kello on kuusi.</span></td></tr>
  <tr><td>6.10</td><td><span class="fi">Kello on kymmenen yli kuusi.</span></td></tr>
  <tr><td>6.15</td><td><span class="fi">Kello on varttia yli kuusi.</span></td></tr>
  <tr><td>6.30</td><td><span class="fi">Kello on puoli seitsemän.</span></td></tr>
  <tr><td>6.45</td><td><span class="fi">Kello on varttia vaille seitsemän.</span></td></tr>
  <tr><td>6.50</td><td><span class="fi">Kello on kymmenen vaille seitsemän.</span></td></tr>
</table>
<p><b>Relógio de 24 horas</b> (voos, trens, lojas): <span class="fi">kello</span> + hora + minutos: <span class="fi">kello kuusitoista kymmenen</span> = 16.10. <b>A que horas?</b> <span class="fi">Mihin aikaan?</span> – <span class="fi">Kello seitsemän.</span> Sem “às”.</p>
<ul class="esim">
  <li class="s" data-pt="A que horas sai o voo? – Às sete e vinte.">Mihin aikaan lento lähtee? – Kello seitsemän kaksikymmentä.</li>
  <li class="s" data-pt="O voo está atrasado.">Lento on myöhässä.</li>
  <li class="s" data-pt="A gente chega a tempo.">Me <span data-l="olla#2">olemme</span> ajoissa.</li>
</ul>`
    },
    {
      id: 'taytyy', otsikko: 'Preciso: minun täytyy + infinitivo', taso: 'essencial', hakuosa: 'h-taytyy', treeni: 't10-taytyy',
      html: `
<p><b>Forma:</b> quem precisa no <b>genitivo</b> + <span class="fi">täytyy</span> (nunca muda) + verbo no <b>infinitivo</b>.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">minun täytyy</span></td><td>eu preciso</td></tr>
  <tr><td><span class="fi">sinun täytyy</span></td><td>você precisa</td></tr>
  <tr><td><span class="fi">hänen täytyy</span></td><td>ele, ela precisa</td></tr>
  <tr><td><span class="fi">meidän täytyy</span></td><td>nós precisamos</td></tr>
  <tr><td><span class="fi">teidän täytyy</span></td><td>vocês precisam</td></tr>
  <tr><td><span class="fi">heidän täytyy</span></td><td>eles, elas precisam</td></tr>
  <tr><td><span class="fi">Maian täytyy</span></td><td>a Maia precisa</td></tr>
</table>
<p><b>Negativo:</b> <span class="fi">Minun ei tarvitse lähteä.</span> (não preciso ir) · <b>Pergunta:</b> <span class="fi">Täytyykö sinun lähteä?</span> – <span class="fi">Täytyy.</span></p>`
    },
    {
      id: 'pitaa', otsikko: 'pitää e on pakko: preciso ou gosto?', taso: 'atenção', hakuosa: 'h-taytyy', treeni: 't10-taytyy',
      html: `
<p><b>Genitivo</b> + <span class="fi" data-l="pitää#3">pitää</span> + infinitivo = preciso (como <span class="fi">täytyy</span>). <b>Sujeito normal</b> + <span class="fi">pitää</span> + <span class="fi pala">-sta</span> = gosto de.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Minun <span data-l="pitää#3">pitää</span> lähteä.</span></td><td>Eu preciso ir embora.</td></tr>
  <tr><td><span class="fi">Minä pidän kahvista.</span></td><td>Eu gosto de café.</td></tr>
  <tr><td><span class="fi">Meidän on pakko juosta.</span></td><td>A gente tem que correr (não há escolha).</td></tr>
</table>
<div class="taivutustaulu" data-verbi="pitää" data-osat="myonteinen" data-selite="gostar de (minä pidän kahvista)"></div>`
    },
    {
      id: 'henkilot', otsikko: 'Pessoas: -lle, -lta, -lla', taso: 'essencial', hakuosa: 'h-paikallissijat', treeni: 't10-henkilot',
      html: `
<p>Com pessoas, sempre os casos “de fora”: <span class="fi pala">-lle</span> = para quem, <span class="fi pala">-lta/-ltä</span> = de quem (vindo de), <span class="fi pala">-lla/-llä</span> = quem tem (os passaportes estão com a Maia).</p>
<ul class="esim">
  <li class="s" data-pt="Dê o passaporte para o Jay!">Anna passi Jaylle!</li>
  <li class="s" data-pt="Pergunte ao Jay!">Kysy Jayltä!</li>
  <li class="s" data-pt="Eu tenho uma mensagem da mãe.">Minulla on viesti äidiltä.</li>
  <li class="s" data-pt="Os passaportes estão com a Maia.">Passit <span data-l="olla#2">ovat</span> Maialla.</li>
</ul>
<p><span class="fi pala">-lle</span>: <span class="fi">antaa, soittaa, sanoa, kertoa</span>. <span class="fi pala">-lta</span>: <span class="fi">kysyä, saada, ostaa</span>. Veja as três formas de <span class="fi">äiti</span>:</p>
<div class="sijataulu" data-sana="äiti" data-sijat="allatiivi,ablatiivi,adessiivi"></div>`
    },
    {
      id: 'aantaminen10', otsikko: 'Pronúncia: a pergunta desce; nk = [ŋk]', taso: 'essencial', hakuosa: 'h-paino',
      html: `
<p>A pergunta finlandesa <b>desce</b> no fim, como a frase comum: quem marca a pergunta é o <span class="fi pala">-ko/-kö</span> ou a palavra interrogativa.</p>
<ul class="esim">
  <li class="s" data-pt="De onde sai o voo para Lisboa?">Mistä lähtee lento Lissaboniin?</li>
  <li class="s" data-pt="O voo sai às sete?">Lähteekö lento kello seitsemän?</li>
</ul>
<p><span class="fi pala">nk</span> = [ŋk], o “n” de “banco”, sem nasalizar a vogal: <span class="fi">Helsinki</span>, <span class="fi">kenkä</span>. <span class="fi pala">ng</span> = [ŋː], longo e sem “g”: <span class="fi">Helsingissä</span>, <span class="fi">kengät</span>.</p>`
    },
    {
      id: 'sudenkuopat10', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>puoli:</b> <span class="fi">puoli viisi</span> = 4h30, não 5h30. A meia hora olha para a hora seguinte.</li>
  <li><b>Sem “às”:</b> <span class="fi">Lento lähtee kello seitsemän.</span> Nada de preposição antes da hora.</li>
  <li><b>Quem precisa no genitivo:</b> <span class="fi">minun täytyy</span>, nunca <span class="pala">minä täytyy</span>; o segundo verbo no infinitivo: <span class="fi">Minun täytyy lähteä.</span></li>
  <li><b><span class="fi">minun pitää</span> × <span class="fi">minä pidän</span>:</b> o primeiro é “preciso”, o segundo é “gosto”.</li>
  <li><b>Pessoas não são lugares fechados:</b> <span class="fi">äidille</span> (para a mãe), <span class="fi">äidiltä</span> (da mãe), nunca <span class="pala">äitiin</span>. E <span class="fi">kysyä</span> pede <span class="fi pala">-lta</span>: <span class="fi">Kysy Jayltä!</span></li>
  <li><b>A pergunta não sobe:</b> <span class="fi">Ehdimmekö me?</span> desce no fim, como uma frase comum.</li>
</ul>`
    }
  ]
});
