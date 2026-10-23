/* Tottakai, lição 14: Jay eksyy Belo Horizonten keskustassa, Maia ohjaa puhelimessa, Praça da Liberdade (Passon jakso 14
   Maian näkökulmasta; OPPITUNNIT_6_20.md §5b ”Oppitunti 14”). Oma materiaali, ei kirjan tekstiä.
   Kaksi osaa omina sivuinaan (TYONKULKU 11–17):
   - osa A (#t14): keskiviikko 23.12., Jay etsii salaa joululahjaa ja eksyy; akku loppumassa. Hän soittaa Maialle, joka
     istuu Malun autossa (Malu ajaa varovasti; Malun repliikit portugaliksi kertojan tekstissä). Dialogi A (20 repliikkiä:
     Mene suoraan! Käänny oikealle! Missä sinä olet? – Pankin edessä.), Frases prontas, sanasto, kikka A: .kartta suomeksi
     (Tottakain komponentit.js: suomenkieliset käskyt lapsiriveistä data-rivi + data-puhu, äänenä Maia data-h; akkumittari
     data-akku = t14:n lisäosa karttaAkku), ääntäminen (n:n assimilaatio: sen päälle ≈ sem päälle, pankin kohdalla ≈
     pankiŋ kohdalla), tehtävät 1–3.
   - osa B (#t14-b): Praça da Liberdade. Anderson haluaa leikkiä ”Kapteeni käskee” (o mestre mandou) suomeksi; Maia
     komentaa Jayta ja Andersonia te-muodossa (Tulkaa tänne! Älkää juosko!). Dialogi B (18), Frases prontas, kielioppi
     (imperatiivi te ja älkää + -ko/-kö; postpositiot genetiivin kanssa; suunnat oikealle/oikealla), tehtävät 4–9
     (tehtävä 7: aukion kuva .aukiokuva), kulttuuri (Belo Horizonte suunniteltuna kaupunkina ja Praça da Liberdade),
     Na rua (mee suoraan, tuu tänne, oikeelle, ton), kotitehtävä, itsearvio.
   Suomea puhuvat vain Maia, Jay ja Anderson (yksittäiset sanat Moi! ja Juoskaa!, ääni mies 7), OPPITUNNIT §2 ja §5b.
   Kaikki puhuvat kirjakieltä; puhekieli vain Na rua -nurkassa. Olla = estar kiinnitetty data-l:llä, kun paikka on
   postpositio (pankin edessä), jota merkityssääntö ei tunne. Mennään (passiivi) vain Frases prontas -ilmauksena (lição 20).
   Tasapainotus 21.10.2026 (TYONKULKU 12): ydinsanat tai, ehkä, joka paikassa, joku, kukaan, vastaan, pysyä, voittaa,
   asia, viedä, takia, näkyä, pian, takaisin; dialogit 20 + 18; sanasto 51 → 40; sivun sanalistat 30 → 12. */
Kurssi.lisaa({
  id: 't14',
  lyhyt: '14',
  jakso: 'Lição 14',
  otsikko: 'O Jay se perde: direções, ordens para vocês e posposições',
  lahde: 'Tema: a cidade, dar direções ao telefone, a Praça da Liberdade · Gramática: o imperativo para vocês (Tulkaa! Menkää! Älkää juosko!), as posposições com genitivo (kirkon edessä, Maian luona, keskustan kautta), as direções (oikealle, vasemmalla, suoraan) · Pronúncia: o n que vira m e ŋ (sen päälle, pankin kohdalla)',
  aiheet: ['liike', 'paikka', 'kaupunki', 'kysymys'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga; guia o Jay pelo telefone, do carro da Malu' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; foi sozinho ao centro com um segredo e se perdeu' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 7, kuvaus: 'irmão da Maia; adora brincar e já sabe algumas palavras em finlandês' },
    malu: { nimi: 'Malu', tyyppi: 'nainen', vaihto: 5, kuvaus: 'amiga da Maia; motorista de aplicativo e sambista; dirige com muito cuidado (fala português)' }
  },

  sanasto: [
    'oikealle', 'vasemmalle', 'oikealla', 'vasemmalla', 'suoraan', 'kääntyä', 'eksyksissä',
    'keskusta', 'katu', 'kulma', 'aukio', 'kirkko', 'pankki', 'penkki', 'apteekki', 'museo', 'suihkulähde', 'palmu', 'akku',
    'edessä', 'takana', 'vieressä', 'välissä', 'lähellä', 'alla', 'kohdalla', 'ympäri', 'luona', 'kautta', 'takia', 'vastaan',
    'leikkiä', 'käskeä', 'totella', 'pysyä', 'voittaa', 'näkyä', 'yllätys', 'kapteeni', 'ei hätää'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · Perdido no centro, com 12 % de bateria',
      html: `
<ul class="tavoitteet">
  <li>Parte A: você entende e dá direções (<span class="fi">Mene suoraan! Käänny oikealle!</span>) e diz onde está: <span class="fi">Olen pankin edessä.</span></li>
  <li>Você ouve o <span class="fi pala">n</span> que muda de som entre duas palavras: <span class="fi">pankin kohdalla</span> soa “pankiŋ kohdalla”.</li>
  <li>Parte B: ordens para vocês (<span class="fi">Tulkaa tänne! Älkää juosko!</span>) e as posposições: <span class="fi">palmun alla, penkin vieressä, keskustan kautta</span>.</li>
</ul>
<p data-paikka="savassi">Quarta-feira à tarde, 23 de dezembro. Amanhã é véspera de Natal, e o Jay ainda não tem presente para a Maia. Ele diz que vai “dar uma volta”, pega o ônibus sozinho até o centro e entra numa loja, depois em outra, e em outra. Quando sai da última, não sabe mais onde está: as ruas sobem e descem, todas parecem iguais, e a bateria do celular está em 12 %. A Maia está no carro da Malu, a amiga motorista de aplicativo. O Jay liga. Com o susto, o português dele sumiu: a conversa é em finlandês.</p>

<section class="osio">
  <h2>Diálogo A: <span class="fi">Missä sinä olet?</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Preste atenção nas ordens da Maia (<span class="fi">Mene suoraan!</span>, <span class="fi">Käänny oikealle!</span>) e em onde o Jay está: <span class="fi">pankin edessä</span> (na frente do banco). Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="saapuva" data-dialogi="t14-dialogi-a" data-h="jay" data-soittaja="Jay"></div>
  <div class="kpl" id="t14-dialogi-a" data-nimi="Ouvir o diálogo A">
    <p class="s" data-h="kertoja" data-pt="Quarta-feira, centro de Belo Horizonte. O Jay está sozinho e não sabe onde está.">Keskiviikko, Belo Horizonten keskusta. Jay on yksin. Hän ei tiedä, missä hän on.</p>
    <p class="s" data-h="jay" data-pt="Maia! Socorro! Eu não sei onde estou. E a bateria está quase acabando!">Maia! Auta! Minä en tiedä, missä minä olen. Ja akku on melkein tyhjä!</p>
    <p class="s" data-h="maia" data-pt="Calma, Jay. Estou no carro da Malu. O que você está fazendo no centro?">Ei hätää, Jay. Minä olen Malun autossa. Mitä sinä teet keskustassa?</p>
    <p class="s" data-h="jay" data-pt="Nada! Só estou andando. Mas agora estou perdido.">Ei mitään! Minä vain kävelen. Mutta nyt minä <span data-l="olla#2">olen</span> eksyksissä.</p>
    <p class="s" data-h="maia" data-pt="Nada? Você está procurando alguma coisa?">Ei mitään? Etsitkö sinä jotain?</p>
    <p class="s" data-h="jay" data-pt="Não! Ou… talvez. É surpresa.">En! Tai… ehkä. Se on yllätys.</p>
    <p class="s" data-h="maia" data-pt="O que você está vendo? Onde você está agora?">Mitä sinä näet? Missä sinä olet nyt?</p>
    <p class="s" data-h="jay" data-pt="Estou na frente de um banco. A farmácia fica ao lado do banco.">Minä <span data-l="olla#2">olen</span> pankin edessä. Apteekki <span data-l="olla#2">on</span> pankin vieressä.</p>
    <p class="s" data-h="maia" data-pt="Que banco? Aqui tem muitos bancos.">Mikä pankki? Täällä on paljon pankkeja.</p>
    <p class="s" data-h="jay" data-pt="Não sei. Em todo lugar tem um banco!">En tiedä. Joka paikassa on pankki!</p>
    <p class="s" data-h="maia" data-pt="Tem alguém aí? Pergunte para ele!">Onko siellä joku? Kysy häneltä!</p>
    <p class="s" data-h="jay" data-pt="Tem muita gente, mas ninguém fala finlandês!">Täällä on paljon ihmisiä, mutta kukaan ei puhu suomea!</p>
    <p class="s" data-h="maia" data-pt="Certo. Vá reto até a esquina e lá vire à direita.">Selvä. Mene suoraan kulmaan ja käänny siellä oikealle.</p>
    <p class="s" data-h="jay" data-pt="Reto… e à direita. Agora estou vendo uma igreja.">Suoraan… ja oikealle. Nyt minä näen kirkon.</p>
    <p class="s" data-h="maia" data-pt="Na altura da igreja, vire à esquerda e suba a ladeira.">Käänny kirkon kohdalla vasemmalle ja kävele ylämäkeen.</p>
    <p class="s" data-h="jay" data-pt="Subir a ladeira? Faz trinta graus aqui!">Ylämäkeen? Täällä on kolmekymmentä astetta!</p>
    <p class="s" data-h="kertoja" data-pt="A Malu dirige devagar. Muito devagar.">Malu ajaa hitaasti. Hyvin hitaasti.</p>
    <p class="s" data-h="jay" data-pt="Agora estou vendo palmeiras e um chafariz!">Nyt minä näen palmuja ja suihkulähteen!</p>
    <p class="s" data-h="maia" data-pt="É a Praça da Liberdade! Espere ao lado do chafariz. Estamos indo!">Se on <span lang="pt-BR">Praça da Liberdade</span>! Odota suihkulähteen vieressä. Me tulemme sinua vastaan!</p>
    <p class="s" data-h="jay" data-pt="Certo. Eu espero aqui. E a bateria está…">Selvä. Minä odotan tässä. Ja akku on…</p>
  </div>
  <p>Silêncio: a bateria acabou. No carro, a Maia pede: <span lang="pt-BR">“Malu, mais rápido, por favor!”</span> A Malu não tira os olhos da rua: <span lang="pt-BR">“Calma, Maia. Devagar se vai ao longe.”</span> Pela primeira vez na vida, a Maia sente falta do jeito do Hiisi de dirigir (lição 10).</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde estas como blocos prontos:</p>
    <ul>
      <li><span class="fi">Ei hätää.</span> = calma, não tem problema · expressão fixa, muito usada</li>
      <li><span class="fi">Ei mitään!</span> = nada! · <span class="fi">mitään</span> aparece sobretudo em frases negativas</li>
      <li><span class="fi">Minä olen eksyksissä.</span> = estou perdido, perdida · uma forma fixa de lugar, como <span class="fi">kotona</span> (lição 6)</li>
      <li><span class="fi">pankin edessä, pankin vieressä</span> = na frente do banco, ao lado do banco · genitivo + posposição: a Gramática da parte B</li>
      <li><span class="fi">kirkon kohdalla</span> = na altura da igreja · <span class="fi">kohdalla</span> é outra posposição</li>
      <li><span class="fi">Me tulemme sinua vastaan!</span> = vamos te buscar! · indo para onde o outro está, o finlandês usa <span class="fi">tulla</span> (vir); <span class="fi">tulla vastaan</span> = vir ao encontro</li>
      <li><span class="fi">joka paikassa</span> = em todo lugar · <span class="fi">Kukaan ei puhu suomea.</span> = ninguém fala finlandês</li>
      <li><span class="fi">Akku on melkein tyhjä.</span> = a bateria está quase acabando · <span class="fi">tyhjä</span> = vazio</li>
    </ul>
  </div>
</section>

<section class="osio">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="Direções e o centro" data-sanat="oikealle,vasemmalle,suoraan,kääntyä,keskusta,katu,kulma,aukio,kirkko,pankki,apteekki,suihkulähde"></div>
  <p>As outras palavras da lição estão no <a href="#t14-vocabulario">Vocabulário da lição</a>.</p>
  <div class="saanto">
    <h3>oikealle ou oikealla?</h3>
    <p>As direções são casos “de fora” (lição 7) das palavras <span class="fi">oikea</span> (direito) e <span class="fi">vasen</span> (esquerdo). Para onde? <span class="fi pala">-lle</span>: <span class="fi">Käänny oikealle!</span> Onde? <span class="fi pala">-lla</span>: <span class="fi">Apteekki on oikealla.</span> (a farmácia fica à direita). E “reto, em frente” é <span class="fi">suoraan</span>.</p>
    <ul class="esim">
      <li class="s" data-pt="Vire à direita!">Käänny oikealle!</li>
      <li class="s" data-pt="Vire à esquerda!">Käänny vasemmalle!</li>
      <li class="s" data-pt="Vá reto!">Mene suoraan!</li>
      <li class="s" data-pt="A igreja fica à esquerda.">Kirkko on vasemmalla.</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="bh-sade">
  <h2>No mapa: leve o Jay até a praça</h2>
  <p class="ohje">Agora você é a Maia ao telefone. Primeiro ouça o caminho (▶). Depois guie o Jay com as ordens: <span class="fi">Mene suoraan!</span> anda um quarteirão para a frente; <span class="fi">Käänny oikealle!</span> e <span class="fi">Käänny vasemmalle!</span> viram o Jay sem andar. A seta mostra para onde ele está olhando. Cada ordem gasta 1 % da bateria, e só restam 12 %: escute bem antes de mandar.</p>
  <div class="kartta" data-h="maia" data-akku="12" data-kartta="#.#G#.#|#.#.#.#|.......|#.###.#|#J###.#"
       data-nimet="0,4:pankki;0,3:apteekki;3,3:kirkko;2,0:museo;4,0:palatsi;2,1:kahvila;6,0:hotelli" data-maali="aukio"
       data-ohje="Ouça o caminho e leve o Jay até a praça com os botões." data-nappi-ohjeet="Ouvir o caminho" data-nappi-alusta="Recomeçar"
       data-akku-nimi="Bateria do celular do Jay" data-akku-loppu="0 %: o celular do Jay desligou. Toque em Recomeçar e tente de novo, com menos ordens.">
    <p data-rivi="ohjeet" data-puhu="Mene suoraan kulmaan. Käänny oikealle. Mene suoraan kirkolle. Käänny kirkon kohdalla vasemmalle ja mene suoraan ylämäkeen. Aukio on museon ja palatsin välissä."></p>
    <p data-rivi="eteen" data-puhu="Mene suoraan!"></p>
    <p data-rivi="oikea" data-puhu="Käänny oikealle!"></p>
    <p data-rivi="vasen" data-puhu="Käänny vasemmalle!"></p>
    <p data-rivi="este" data-puhu="Ei sinne! Siinä on talo."></p>
    <p data-rivi="perilla" data-puhu="Hienoa, Jay! Nyt sinä olet aukiolla."></p>
  </div>
  <p>No mapa, o Jay começa <span class="fi">pankin edessä</span>, olhando para cima. A praça (<span class="fi">aukio</span>) fica <span class="fi">museon ja palatsin välissä</span>: entre o museu e o palácio.</p>
</section>

<section class="osio" data-paikka="bh-sade">
  <h2>Pronúncia: o <span class="fi pala">n</span> que muda de som</h2>
  <p>Nesta lição há muitos genitivos antes de outra palavra: <span class="fi">pankin kohdalla</span>, <span class="fi">Malun puhelin</span>. O genitivo termina em <span class="fi pala">-n</span>, e na fala esse <span class="fi pala">n</span> se adapta à consoante seguinte, como já acontece dentro da palavra (<span class="fi">kenkä</span>, lição 10). A escrita não muda; só o som:</p>
  <table class="taivutus">
    <tr><th>escreve-se</th><th>soa</th><th>por quê</th></tr>
    <tr><td><span class="fi">sen päälle</span><span class="kaannos" lang="pt-BR">em cima disso</span></td><td><span class="fi pala">sem päälle</span></td><td>antes de <span class="fi pala">p</span> e <span class="fi pala">m</span>, os lábios já se fecham: o <span class="fi pala">n</span> sai <span class="fi pala">m</span></td></tr>
    <tr><td><span class="fi">Malun puhelin</span><span class="kaannos" lang="pt-BR">o celular da Malu</span></td><td><span class="fi pala">Malum puhelin</span></td><td>o mesmo: <span class="fi pala">n</span> + <span class="fi pala">p</span></td></tr>
    <tr><td><span class="fi">pankin kohdalla</span><span class="kaannos" lang="pt-BR">na altura do banco</span></td><td><span class="fi pala">pankiŋ kohdalla</span></td><td>antes de <span class="fi pala">k</span>, a língua já vai para trás: o <span class="fi pala">n</span> de “banco”</td></tr>
    <tr><td><span class="fi">museon vieressä</span><span class="kaannos" lang="pt-BR">ao lado do museu</span></td><td><span class="fi pala">museon vieressä</span></td><td>antes de <span class="fi pala">v</span> (e das vogais), nada muda</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-pt="em cima disso (soa: sem päälle)">sen päälle</li>
    <li class="s" data-pt="o celular da Malu (soa: Malum puhelin)">Malun puhelin</li>
    <li class="s" data-pt="na altura do banco (soa: pankiŋ kohdalla)">pankin kohdalla</li>
    <li class="s" data-pt="na altura da igreja (soa: kirkoŋ kohdalla)">kirkon kohdalla</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> não nasalize a vogal antes do <span class="fi pala">n</span>. Em <span class="fi">pankin</span> o <span class="fi pala">i</span> fica puro, sem som de “ĩ”; só a língua (ou os lábios) muda de lugar no fim. E não separe as palavras com uma pausa: <span class="fi">pankin kohdalla</span> se diz de uma vez.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="bh-sade">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>1. Ouça a Maia: para onde?</h3>
    <p class="ohje">Aperte ▶ e escolha para onde o Jay deve ir.</p>
    <div class="valinta" data-kuuntele="Käänny oikealle!" data-oikea="➡ para a direita">
      <p class="kysymys">Para onde?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">⬅ para a esquerda</button><button type="button">⬆ reto, em frente</button><button type="button">➡ para a direita</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mene suoraan!" data-oikea="⬆ reto, em frente">
      <p class="kysymys">Para onde?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">➡ para a direita</button><button type="button">⬆ reto, em frente</button><button type="button">⬅ para a esquerda</button></div>
    </div>
    <div class="valinta" data-kuuntele="Käänny vasemmalle!" data-oikea="⬅ para a esquerda">
      <p class="kysymys">Para onde?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">⬅ para a esquerda</button><button type="button">➡ para a direita</button><button type="button">⬆ reto, em frente</button></div>
    </div>
    <div class="valinta" data-kuuntele="Käänny kirkon kohdalla oikealle!" data-oikea="➡ para a direita">
      <p class="kysymys">Na altura da igreja, para onde?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">⬆ reto, em frente</button><button type="button">⬅ para a esquerda</button><button type="button">➡ para a direita</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Ligue a palavra à tradução</h3>
    <ul class="yhdista">
      <li data-pari="para a direita">oikealle</li>
      <li data-pari="para a esquerda">vasemmalle</li>
      <li data-pari="reto, em frente">suoraan</li>
      <li data-pari="na frente de">edessä</li>
      <li data-pari="atrás de">takana</li>
      <li data-pari="ao lado de">vieressä</li>
      <li data-pari="entre">välissä</li>
      <li data-pari="perto de">lähellä</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>3. Você entendeu o diálogo A?</h3>
    <div class="valinta" data-oikea="Pankin edessä.">
      <p class="kysymys"><span class="fi">Missä Jay on, kun hän soittaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Pankin takana.</button><button type="button">Pankin edessä.</button><button type="button">Apteekin edessä.</button></div>
    </div>
    <div class="valinta" data-oikea="Malun.">
      <p class="kysymys"><span class="fi">Kenen autossa Maia on?</span></p>
      <div class="vaihtoehdot"><button type="button">Malun.</button><button type="button">Hiiden.</button><button type="button">Martan.</button></div>
    </div>
    <div class="valinta" data-oikea="Vasemmalle.">
      <p class="kysymys"><span class="fi">Mihin Jay kääntyy kirkon kohdalla?</span></p>
      <div class="vaihtoehdot"><button type="button">Oikealle.</button><button type="button">Vasemmalle.</button><button type="button">Suoraan.</button></div>
    </div>
    <div class="valinta" data-oikea="Suihkulähteen vieressä.">
      <p class="kysymys"><span class="fi">Missä Jay odottaa?</span></p>
      <div class="vaihtoehdot"><button type="button">Suihkulähteen vieressä.</button><button type="button">Kirkon vieressä.</button><button type="button">Malun autossa.</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · Na Praça da Liberdade: Tulkaa! Älkää juosko!',
      html: `
<ul class="tavoitteet">
  <li>Você dá ordens para duas ou mais pessoas: <span class="fi">Tulkaa tänne! Odottakaa!</span></li>
  <li>Você proíbe com <span class="fi">älkää</span>: <span class="fi">Älkää juosko!</span></li>
  <li>Você diz onde as coisas estão com genitivo + posposição: <span class="fi">palmun alla, penkin vieressä, Maian luona, keskustan kautta</span>.</li>
</ul>

<p data-paikka="praca-da-liberdade">Quarenta minutos depois (a Malu não corre, nunca), o carro chega à Praça da Liberdade. No banco de trás vem também o Anderson: depois de entregar o correio, ele pediu para ir junto, <span lang="pt-BR">“eu ajudo a achar o Jay!”</span>. O Jay está ao lado do chafariz, com uma sacola escondida atrás das costas. O Anderson corre e dá um abraço nele. Depois quer brincar de “o mestre mandou”, e em finlandês. Na Finlândia a brincadeira se chama <span class="fi">Kapteeni käskee</span>, “o capitão manda”. A Maia dá as ordens para os dois juntos, então usa a forma para vocês.</p>

<section class="osio">
  <h2>Diálogo B: <span class="fi">Kapteeni käskee!</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure as ordens com <span class="fi pala">-kaa/-kää</span> (para os dois), uma ordem negativa com <span class="fi">älkää</span> e as palavras de lugar depois do genitivo: <span class="fi">palmun alle</span>, <span class="fi">penkin vieressä</span>. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="t14-dialogi-b" data-nimi="Ouvir o diálogo B">
    <p class="s" data-h="maia" data-pt="Jay! Aí está você! O que você tem atrás das costas?">Jay! Siinä sinä <span data-l="olla#2">olet</span>! Mitä sinulla on selän takana?</p>
    <p class="s" data-h="jay" data-pt="Nada! É… uma surpresa. E uma coisa: não olhem dentro da sacola!">Ei mitään! Se on… yllätys. Ja yksi asia: älkää katsoko pussiin!</p>
    <p class="s" data-h="anderson" data-pt="Oi!">Moi!</p>
    <p class="s" data-h="kertoja" data-pt="O Anderson quer brincar. A Maia manda em finlandês, e o Jay e o Anderson obedecem.">Anderson haluaa leikkiä. Maia käskee suomeksi, ja Jay ja Anderson tottelevat.</p>
    <p class="s" data-h="maia" data-pt="Está bem. Jay e Anderson, escutem! O capitão manda: venham aqui!">Hyvä on. Jay ja Anderson, kuunnelkaa! Kapteeni käskee: tulkaa tänne!</p>
    <p class="s" data-h="jay" data-pt="Estamos indo!">Me tulemme!</p>
    <p class="s" data-h="maia" data-pt="O capitão manda: vão para debaixo da palmeira! Agora vão para trás do chafariz!">Kapteeni käskee: menkää palmun alle! Nyt menkää suihkulähteen taakse!</p>
    <p class="s" data-h="kertoja" data-pt="O Anderson corre em volta do chafariz, e o Jay corre também.">Anderson juoksee suihkulähteen ympäri, ja Jay juoksee myös.</p>
    <p class="s" data-h="maia" data-pt="Não corram! Tem muita gente aqui.">Älkää juosko! Täällä on paljon ihmisiä.</p>
    <p class="s" data-h="anderson" data-pt="Corram! (e ri)">Juoskaa!</p>
    <p class="s" data-h="jay" data-pt="Agora quem manda é o Anderson!">Nyt Anderson käskee!</p>
    <p class="s" data-h="maia" data-pt="O capitão manda: esperem ao lado do banco! Não vão para a rua!">Kapteeni käskee: odottakaa penkin vieressä! Älkää menkö kadulle!</p>
    <p class="s" data-h="maia" data-pt="O capitão manda: fiquem aí!">Kapteeni käskee: pysykää siinä!</p>
    <p class="s" data-h="jay" data-pt="Estamos ficando. Mas quem ganha?">Pysymme. Mutta kuka voittaa?</p>
    <p class="s" data-h="maia" data-pt="O Anderson. Ele obedece sempre.">Anderson. Hän tottelee aina.</p>
    <p class="s" data-h="kertoja" data-pt="A Malu chega de carro. Devagar e sempre.">Malu tulee autolla. Hitaasti mutta varmasti.</p>
    <p class="s" data-h="maia" data-pt="Entrem no carro! Vamos para casa pelo centro.">Istukaa autoon! Mennään kotiin keskustan kautta.</p>
    <p class="s" data-h="kertoja" data-pt="A Malu leva todos para casa. Devagar, por causa da chuva.">Malu vie kaikki kotiin. Hitaasti, sateen takia.</p>
  </div>
  <p>No caminho, a Malu canta samba, o Anderson repete <span class="fi">Juoskaa!</span> para cada pessoa que vê na calçada, e o Jay segura a sacola no colo. À noite, todos jantam <span class="fi">Martan ja Walkerin luona</span>, na casa da Marta e do Walker. O que tem na sacola, ninguém descobre.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Siinä sinä olet!</span> = aí está você!</li>
      <li><span class="fi">selän takana</span> = atrás das costas · <span class="fi">selkä → selän</span>: o genitivo com a consoante que muda</li>
      <li><span class="fi">Se on yllätys.</span> = é surpresa.</li>
      <li><span class="fi">Kapteeni käskee!</span> = o capitão manda! · a brincadeira finlandesa de “o mestre mandou”</li>
      <li><span class="fi">Hitaasti mutta varmasti.</span> = devagar e sempre · ditado finlandês</li>
      <li><span class="fi">Pysykää siinä!</span> = fiquem aí! · <span class="fi">Kuka voittaa?</span> = quem ganha? · <span class="fi">sateen takia</span> = por causa da chuva (genitivo + <span class="fi">takia</span>)</li>
      <li><span class="fi">Mennään kotiin!</span> = vamos para casa! · <span class="fi">mennään</span> (vamos) é o passivo: lição 20</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="praca-da-liberdade">
  <h2>Gramática 1 · Ordens para vocês: <span class="fi">Tulkaa! Älkää juosko!</span></h2>
  <p>Na lição 9 você aprendeu a ordem para uma pessoa: <span class="fi">Tule! Älä juokse!</span> Para <b>duas ou mais pessoas</b>, a ordem termina em <span class="fi pala">-kaa/-kää</span>. É também a forma educada para uma pessoa que você trata por <span class="fi">te</span> (o senhor, a senhora), como no aeroporto da lição 10. Parta do infinitivo:</p>
  <table class="taivutus">
    <tr><th>infinitivo</th><th>para você</th><th>para vocês</th><th>português</th></tr>
    <tr><td><span class="fi">odottaa</span></td><td><span class="fi">Odota!</span></td><td><span class="fi">Odottakaa!</span></td><td>esperem! · tipo 1: tire o último <span class="fi pala">-a</span></td></tr>
    <tr><td><span class="fi">pysyä</span></td><td><span class="fi">Pysy!</span></td><td><span class="fi">Pysykää!</span></td><td>fiquem! · tipo 1: tire o último <span class="fi pala">-ä</span></td></tr>
    <tr><td><span class="fi">kuunnella</span></td><td><span class="fi">Kuuntele!</span></td><td><span class="fi">Kuunnelkaa!</span></td><td>escutem! · tipo 3: tire <span class="fi pala">-la</span></td></tr>
    <tr><td><span class="fi">tulla</span></td><td><span class="fi">Tule!</span></td><td><span class="fi">Tulkaa!</span></td><td>venham! · tipo 3: tire <span class="fi pala">-la</span></td></tr>
    <tr><td><span class="fi">mennä</span></td><td><span class="fi">Mene!</span></td><td><span class="fi">Menkää!</span></td><td>vão! · tipo 3: tire <span class="fi pala">-nä</span></td></tr>
    <tr><td><span class="fi">juosta</span></td><td><span class="fi">Juokse!</span></td><td><span class="fi">Juoskaa!</span></td><td>corram! · tipo 3: tire <span class="fi pala">-ta</span></td></tr>
    <tr><td><span class="fi">syödä</span></td><td><span class="fi"><span data-l="syödä:imper.2s">Syö</span>!</span></td><td><span class="fi">Syökää!</span></td><td>comam! · tipo 2: tire <span class="fi pala">-dä</span></td></tr>
  </table>
  <p>Repare: a ordem para vocês usa o radical do <b>infinitivo</b>, com a mesma consoante do infinitivo: <span class="fi">odottaa → Odottakaa!</span>, mas <span class="fi">Odota!</span> para uma pessoa. E depois de <span class="fi pala">-kaa</span> a consoante da palavra seguinte não dobra: <span class="fi">Tulkaa tänne!</span></p>
  <h3>Vocês, não!: <span class="fi">älkää</span> + <span class="fi pala">-ko/-kö</span></h3>
  <p>Para proibir, use <span class="fi">älkää</span> (o <span class="fi">älä</span> para vocês) e troque o <span class="fi pala">-kaa</span> da ordem por <span class="fi pala">-ko</span> (ou <span class="fi pala">-kää</span> por <span class="fi pala">-kö</span>):</p>
  <ul class="esim">
    <li class="s" data-pt="Corram! → Não corram!">Juoskaa! → Älkää juosko!</li>
    <li class="s" data-pt="Vão! → Não vão!">Menkää! → Älkää menkö!</li>
    <li class="s" data-pt="Esperem! → Não esperem!">Odottakaa! → Älkää odottako!</li>
  </ul>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> “vocês correm” e “corram!” são parecidos em português; em finlandês, não. Afirmação: <span class="fi">Te juoksette.</span> Ordem: <span class="fi">Juoskaa!</span> E “não corram” é <span class="fi">Älkää juosko!</span>, nunca <span class="fi pala">ette juokse</span> (= vocês não correm) nem <span class="fi pala">älkää juoskaa</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="praca-da-liberdade">
  <h2>Exercícios: ordens para vocês</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. A Maia manda nos dois: escreva a ordem</h3>
    <p class="ohje">Escreva a ordem para vocês (<span class="fi pala">-kaa/-kää</span>) do verbo entre parênteses. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p><span class="aukko" data-oikea="Tulkaa"></span> tänne! <span data-ei-kuplaa>(tulla)</span></p>
      <p><span class="aukko" data-oikea="Kuunnelkaa"></span>! <span data-ei-kuplaa>(kuunnella)</span></p>
      <p><span class="aukko" data-oikea="Menkää"></span> suihkulähteen taakse! <span data-ei-kuplaa>(mennä)</span></p>
      <p><span class="aukko" data-oikea="Odottakaa"></span> penkin vieressä! <span data-ei-kuplaa>(odottaa)</span></p>
      <p><span class="aukko" data-oikea="Istukaa"></span> autoon! <span data-ei-kuplaa>(istua)</span></p>
      <p><span class="aukko" data-oikea="Katsokaa"></span> palmuja! <span data-ei-kuplaa>(katsoa)</span></p>
      <p><span class="aukko" data-oikea="Kääntykää"></span> vasemmalle! <span data-ei-kuplaa>(kääntyä)</span></p>
      <p><span class="aukko" data-oikea="Juoskaa"></span>! <span data-ei-kuplaa>(juosta)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Ouça: para você ou para vocês?</h3>
    <p class="ohje">Aperte ▶. A ordem é para uma pessoa (sem terminação) ou para duas ou mais (<span class="fi pala">-kaa/-kää</span>)?</p>
    <div class="valinta" data-kuuntele="Tulkaa tänne!" data-oikea="para vocês">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">para você</button><button type="button">para vocês</button></div>
    </div>
    <div class="valinta" data-kuuntele="Odota tässä!" data-oikea="para você">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">para você</button><button type="button">para vocês</button></div>
    </div>
    <div class="valinta" data-kuuntele="Älkää menkö kadulle!" data-oikea="para vocês">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">para vocês</button><button type="button">para você</button></div>
    </div>
    <div class="valinta" data-kuuntele="Käänny oikealle!" data-oikea="para você">
      <p class="kysymys">Para quem é a ordem?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">para vocês</button><button type="button">para você</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Vocês, não! Escolha a forma</h3>
    <p class="ohje">Depois de <span class="fi">älkää</span> vem a forma com <span class="fi pala">-ko/-kö</span>. O verbo está entre parênteses.</p>
    <div class="valinta" data-oikea="juosko">
      <p class="kysymys"><span class="fi">Älkää ___!</span> (juosta, correr)</p>
      <div class="vaihtoehdot"><button type="button">juoskaa</button><button type="button">juosko</button><button type="button">juokse</button><button type="button">juoksette</button></div>
    </div>
    <div class="valinta" data-oikea="menkö">
      <p class="kysymys"><span class="fi">Älkää ___ kadulle!</span> (mennä, ir)</p>
      <div class="vaihtoehdot"><button type="button">menkö</button><button type="button">menkää</button><button type="button">mene</button><button type="button">menette</button></div>
    </div>
    <div class="valinta" data-oikea="ottako">
      <p class="kysymys"><span class="fi">Älkää ___ kuvia!</span> (ottaa, tirar)</p>
      <div class="vaihtoehdot"><button type="button">ota</button><button type="button">otatte</button><button type="button">ottakaa</button><button type="button">ottako</button></div>
    </div>
    <div class="valinta" data-oikea="Älkää">
      <p class="kysymys"><span class="fi">___ tulko tänne!</span> (tulla, vir)</p>
      <div class="vaihtoehdot"><button type="button">Älä</button><button type="button">Älkää</button><button type="button">Ette</button></div>
    </div>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="praca-da-liberdade">
  <h2>Gramática 2 · Onde fica? Genitivo + posposição</h2>
  <p>Em português, “na frente de” vem <b>antes</b> do lugar. Em finlandês, a palavra de lugar vem <b>depois</b>, e o lugar fica no <b>genitivo</b> (<span class="fi pala">-n</span>, lição 5): <span class="fi">kirkon edessä</span> = “da igreja na frente” = na frente da igreja. Essas palavras se chamam <b>posposições</b>. Você já conhece uma: <span class="fi">Maian kanssa</span> (com a Maia).</p>
  <table class="taivutus">
    <tr><th>posposição</th><th>exemplo</th><th>português</th></tr>
    <tr><td><span class="fi">edessä</span></td><td><span class="fi">pankin edessä</span></td><td>na frente do banco</td></tr>
    <tr><td><span class="fi">takana</span></td><td><span class="fi">suihkulähteen takana</span></td><td>atrás do chafariz</td></tr>
    <tr><td><span class="fi">vieressä</span></td><td><span class="fi">penkin vieressä</span></td><td>ao lado do banco (de sentar)</td></tr>
    <tr><td><span class="fi">välissä</span></td><td><span class="fi">museon ja palatsin välissä</span></td><td>entre o museu e o palácio</td></tr>
    <tr><td><span class="fi">lähellä</span></td><td><span class="fi">puiston lähellä</span></td><td>perto do parque</td></tr>
    <tr><td><span class="fi">alla</span></td><td><span class="fi">palmun alla</span></td><td>debaixo da palmeira</td></tr>
    <tr><td><span class="fi">kohdalla</span></td><td><span class="fi">kirkon kohdalla</span></td><td>na altura da igreja</td></tr>
    <tr><td><span class="fi">ympäri</span></td><td><span class="fi">suihkulähteen ympäri</span></td><td>em volta do chafariz</td></tr>
    <tr><td><span class="fi">luona</span></td><td><span class="fi">Maian luona</span></td><td>na casa da Maia, com a Maia (sobretudo com pessoas)</td></tr>
    <tr><td><span class="fi">kautta</span></td><td><span class="fi">keskustan kautta</span></td><td>pelo centro, passando pelo centro</td></tr>
    <tr><td><span class="fi">takia</span></td><td><span class="fi">sateen takia</span></td><td>por causa da chuva</td></tr>
  </table>
  <p>Algumas têm também uma forma para onde?, como os casos de lugar: <span class="fi">edessä → eteen</span>, <span class="fi">takana → taakse</span>, <span class="fi">vieressä → viereen</span>, <span class="fi">alla → alle</span>. <span class="fi">Menkää suihkulähteen taakse!</span> = vão para trás do chafariz. <span class="fi">Menkää palmun alle!</span> = vão para debaixo da palmeira.</p>
  <div class="huomio">
    <p><b>Armadilha do brasileiro:</b> a ordem é ao contrário do português, e, com as posposições desta lição, o lugar fica sempre no genitivo, nunca na forma básica nem no partitivo: <span class="fi">kirkon edessä</span>, não <span class="fi pala">kirkko edessä</span>. A palavra muda por dentro como em todo genitivo: <span class="fi">selkä → selän takana</span>, <span class="fi">pankki → pankin edessä</span>. Com pronomes (“ao meu lado”) entra mais uma terminação, que vem na lição 17.</p>
  </div>

  <h3>Direções: <span class="fi">oikealle, vasemmalla, suoraan</span></h3>
  <table class="taivutus">
    <tr><th>para onde?</th><th>onde?</th><th>português</th></tr>
    <tr><td><span class="fi">oikealle</span></td><td><span class="fi">oikealla</span></td><td>para a direita · à direita</td></tr>
    <tr><td><span class="fi">vasemmalle</span></td><td><span class="fi">vasemmalla</span></td><td>para a esquerda · à esquerda</td></tr>
    <tr><td><span class="fi">suoraan</span></td><td>–</td><td>reto, em frente</td></tr>
  </table>
  <p><b>Cuidado com o falso amigo:</b> “direto” e “direita” são quase iguais em português, mas em finlandês não têm nada em comum: reto é <span class="fi">suoraan</span>, direita é <span class="fi">oikea</span>. E <span class="fi">oikea</span> também quer dizer “certo”: <span class="fi">oikea vastaus</span> = a resposta certa.</p>
</section>

<section class="osio" data-ei-sivulle data-paikka="praca-da-liberdade">
  <h2>Exercícios: onde fica?</h2>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. A praça vista da rua</h3>
    <p class="ohje">Você está na rua, olhando a praça. O que está mais longe de você está <span class="fi">takana</span>; o que está mais perto está <span class="fi">edessä</span>. Toque nas palavras para ver as formas e responda.</p>
    <div class="aukiokuva">
      <div class="ak-rivi">
        <span class="ak-kohde"><span class="ak-kuva emoji" aria-hidden="true">⛪</span><span class="fi">kirkko</span></span>
        <span class="ak-kohde"><span class="ak-kuva emoji" aria-hidden="true">🏛️</span><span class="fi">museo</span></span>
        <span class="ak-kohde"><span class="ak-kuva emoji" aria-hidden="true">🏦</span><span class="fi">pankki</span></span>
      </div>
      <div class="ak-rivi">
        <span class="ak-kohde"><span class="ak-kuva emoji" aria-hidden="true">🌴</span><span class="fi">palmu</span></span>
        <span class="ak-kohde"><span class="ak-kuva emoji" aria-hidden="true">⛲</span><span class="fi">suihkulähde</span></span>
        <span class="ak-kohde"><span class="ak-kuva emoji" aria-hidden="true">🪑</span><span class="fi">penkki</span></span>
      </div>
      <p class="ak-katu">↑ você, na rua</p>
    </div>
    <div class="valinta" data-oikea="Suihkulähde.">
      <p class="kysymys"><span class="fi">Mikä on museon edessä?</span></p>
      <div class="vaihtoehdot"><button type="button">Palmu.</button><button type="button">Suihkulähde.</button><button type="button">Penkki.</button></div>
    </div>
    <div class="valinta" data-oikea="takana">
      <p class="kysymys"><span class="fi">Kirkko on palmun ___.</span></p>
      <div class="vaihtoehdot"><button type="button">edessä</button><button type="button">vieressä</button><button type="button">takana</button></div>
    </div>
    <div class="valinta" data-oikea="Palmun ja penkin välissä.">
      <p class="kysymys"><span class="fi">Missä suihkulähde on?</span></p>
      <div class="vaihtoehdot"><button type="button">Palmun ja penkin välissä.</button><button type="button">Kirkon ja pankin välissä.</button><button type="button">Palmun ja kirkon välissä.</button></div>
    </div>
    <div class="valinta" data-oikea="Museo.">
      <p class="kysymys"><span class="fi">Mikä näkyy kirkon ja pankin välissä?</span></p>
      <div class="vaihtoehdot"><button type="button">Palmu.</button><button type="button">Museo.</button><button type="button">Penkki.</button></div>
    </div>
    <div class="valinta" data-oikea="pankin">
      <p class="kysymys"><span class="fi">Penkki on ___ edessä.</span> (pankki)</p>
      <div class="vaihtoehdot"><button type="button">pankki</button><button type="button">pankin</button><button type="button">pankkia</button><button type="button">pankissa</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Traduza para o finlandês</h3>
    <p class="ohje">Escreva em finlandês. Depois compare com o modelo.</p>
    <div class="kaanna"><p class="pt">Venham aqui!</p><p class="s" data-pt="Venham aqui!">Tulkaa tänne!</p></div>
    <div class="kaanna"><p class="pt">Não corram!</p><p class="s" data-pt="Não corram!">Älkää juosko!</p></div>
    <div class="kaanna"><p class="pt">O banco fica ao lado da igreja.</p><p class="s" data-pt="O banco fica ao lado da igreja.">Pankki <span data-l="olla#2">on</span> kirkon vieressä.</p></div>
    <div class="kaanna"><p class="pt">Na altura da farmácia, vire à esquerda!</p><p class="s" data-pt="Na altura da farmácia, vire à esquerda!">Käänny apteekin kohdalla vasemmalle!</p></div>
    <div class="kaanna"><p class="pt">Fiquem aqui! Eu volto logo.</p><p class="s" data-pt="Fiquem aqui! Eu volto logo.">Pysykää tässä! Tulen pian takaisin.</p></div>
    <div class="kaanna"><p class="pt">À noite estamos na casa da Marta.</p><p class="s" data-pt="À noite estamos na casa da Marta.">Illalla me <span data-l="olla#2">olemme</span> Martan luona.</p></div>
    <div class="kaanna"><p class="pt">Quem ganha hoje? – O Anderson, como sempre.</p><p class="s" data-pt="Quem ganha hoje? – O Anderson, como sempre.">Kuka voittaa tänään? – Anderson, niin kuin aina.</p></div>
    <div class="kaanna"><p class="pt">Eu vou te encontrar na praça.</p><p class="s" data-pt="Eu vou te encontrar na praça.">Tulen sinua vastaan aukiolle.</p></div>
    <div class="kaanna"><p class="pt">Então vá reto! Sem problema.</p><p class="s" data-pt="Então vá reto! Sem problema.">Mene siis suoraan! Ei ongelmaa.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>9. Ouça e escreva</h3>
    <p class="ohje">Aperte ▶ e escreva a ordem que você ouviu.</p>
    <div class="sanelu" data-puhu="Kääntykää oikealle!"></div>
    <div class="sanelu" data-puhu="Odottakaa kirkon edessä!"></div>
    <div class="sanelu" data-puhu="Älkää menkö kadulle!"></div>
  </div>
</section>

<aside class="kulttuuri" data-paikka="belo-horizonte-panoraama">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Belo Horizonte, uma cidade desenhada no papel</h3>
  <figure class="kuva" data-kuva="praca-da-liberdade">
    <span class="huuto" data-x="22" data-y="34" data-aani="mies" data-vaihto="7" data-pt="corram!">Juoskaa!</span>
    <span class="huuto" data-x="64" data-y="22" data-aani="nainen" data-vaihto="0" data-pt="não corram!">Älkää juosko!</span>
  </figure>
  <p>Belo Horizonte é mais nova que quase todas as grandes capitais do Brasil: foi planejada no papel no fim do século 19 e inaugurada em 1897, para ser a nova capital de Minas Gerais no lugar de Ouro Preto, que fica entre montanhas e não tinha espaço para crescer.</p>
  <p>O plano desenhou um tabuleiro de ruas retas cortado por avenidas largas na diagonal, e uma avenida em volta do centro planejado, a Avenida do Contorno. Muitas ruas do centro têm nomes de estados brasileiros e de povos indígenas. O desenho é reto, mas o terreno não: as ruas sobem e descem os morros, e quem anda a pé, como o Jay, sente nas pernas.</p>
  <p>A Praça da Liberdade fica no alto. Por mais de cem anos (1897–2010) ela foi o centro do governo de Minas: o palácio do governador e as secretarias ficavam em volta dela. Hoje os prédios antigos são museus e centros culturais, e a praça tem jardins, fontes e uma alameda de palmeiras imperiais, onde a cidade vai caminhar, namorar e tirar foto.</p>
  <p>Na Finlândia, as direções vêm com o nome da rua (<span class="fi">katu</span>) e o número; em Belo Horizonte, com pontos de referência: “sobe dois quarteirões, vira na padaria”. A Maia sabe as duas línguas e os dois jeitos.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>As direções na rua: mais curtas</h3>
  <p>Na fala, as ordens mais usadas encolhem (lição 9): <span class="fi">mene</span> vira <span class="fi" data-rekisteri="puhe">mee</span>, <span class="fi">tule</span> vira <span class="fi" data-rekisteri="puhe">tuu</span>. Nas direções, o <span class="fi pala">ea</span> vira <span class="fi pala">ee</span>: <span class="fi">oikealle</span> soa <span class="fi" data-rekisteri="puhe">oikeelle</span>. E <span class="fi">tuon</span> (daquele) vira <span class="fi" data-rekisteri="puhe">ton</span>. Você não precisa falar assim; só reconheça.</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">Tule tänne!</span></td><td><span class="fi" data-rekisteri="puhe">Tuu tänne!</span></td><td>venha cá!</td></tr>
    <tr><td><span class="fi">oikealle</span></td><td><span class="fi" data-rekisteri="puhe">oikeelle</span></td><td>para a direita</td></tr>
    <tr><td><span class="fi">tuon kirkon takana</span></td><td><span class="fi" data-rekisteri="puhe">ton kirkon takana</span></td><td>atrás daquela igreja</td></tr>
  </table>
  <p class="s" data-h="jay" data-kirja="Mene suoraan ja käänny oikealle!" data-pt="Vá reto e vire à direita!">Mee suoraan ja käänny oikeelle!</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="bh-bairro">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t14">
    <h3>Lição de casa</h3>
    <p>Desenhe num papel o caminho da sua casa até a padaria, o mercado ou o ponto de ônibus. Depois escreva as instruções em finlandês para dois amigos que vão visitar você: quatro ordens com <span class="fi pala">-kaa/-kää</span> (<span class="fi">Menkää suoraan…, Kääntykää…</span>), uma proibição com <span class="fi">älkää</span> e duas frases com genitivo + posposição (<span class="fi">… on … vieressä</span>). Leia em voz alta e cuide do <span class="fi pala">n</span> antes de <span class="fi pala">k</span> e <span class="fi pala">p</span>.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia, para a casa dos pais)</summary>
      <p class="s" data-pt="Venham de ônibus até a farmácia.">Tulkaa bussilla apteekille.</p>
      <p class="s" data-pt="Vão reto até a esquina.">Menkää suoraan kulmaan.</p>
      <p class="s" data-pt="Virem à direita.">Kääntykää oikealle.</p>
      <p class="s" data-pt="Subam a ladeira.">Kävelkää ylämäkeen.</p>
      <p class="s" data-pt="Não cheguem tarde!">Älkää tulko myöhään!</p>
      <p class="s" data-pt="A casa fica ao lado de um café.">Talo <span data-l="olla#2">on</span> kahvilan vieressä.</p>
      <p class="s" data-pt="O ponto de ônibus fica perto da igreja.">Bussipysäkki <span data-l="olla#2">on</span> kirkon lähellä.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t14">
    <li>Entendo e dou direções: Mene suoraan! Käänny oikealle!</li>
    <li>Digo onde estou com genitivo + posposição: Olen pankin edessä. Apteekki on pankin vieressä.</li>
    <li>Dou ordens para vocês: Tulkaa! Menkää! Odottakaa!</li>
    <li>Proíbo com älkää: Älkää juosko! Älkää menkö!</li>
    <li>Sei a diferença entre oikealle (para onde?) e oikealla (onde?).</li>
    <li>Ouço o n que muda: pankin kohdalla soa “pankiŋ kohdalla”.</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md). */
  kielioppi: [
    {
      id: 'kasky-te', otsikko: 'Ordens para vocês: Tulkaa! Menkää!', taso: 'essencial', hakuosa: 'h-imperatiivi', treeni: 't14-kasky-te',
      html: `
<p><b>Forma:</b> o radical do infinitivo + <span class="fi pala">-kaa/-kää</span>. Para duas ou mais pessoas, e para uma pessoa que você trata por <span class="fi">te</span> (o senhor, a senhora).</p>
<table class="taivutus">
  <tr><th>infinitivo</th><th>para você</th><th>para vocês</th><th>português</th></tr>
  <tr><td><span class="fi">puhua</span></td><td><span class="fi">Puhu!</span></td><td><span class="fi">Puhukaa!</span></td><td>falem!</td></tr>
  <tr><td><span class="fi">odottaa</span></td><td><span class="fi">Odota!</span></td><td><span class="fi">Odottakaa!</span></td><td>esperem!</td></tr>
  <tr><td><span class="fi">kääntyä</span></td><td><span class="fi">Käänny!</span></td><td><span class="fi">Kääntykää!</span></td><td>virem!</td></tr>
  <tr><td><span class="fi">juoda</span></td><td><span class="fi">Juo!</span></td><td><span class="fi">Juokaa!</span></td><td>bebam!</td></tr>
  <tr><td><span class="fi">tulla</span></td><td><span class="fi">Tule!</span></td><td><span class="fi">Tulkaa!</span></td><td>venham!</td></tr>
  <tr><td><span class="fi">mennä</span></td><td><span class="fi">Mene!</span></td><td><span class="fi">Menkää!</span></td><td>vão!</td></tr>
  <tr><td><span class="fi">kävellä</span></td><td><span class="fi">Kävele!</span></td><td><span class="fi">Kävelkää!</span></td><td>andem!</td></tr>
</table>
<p>O que tirar do infinitivo: no tipo 1, o último <span class="fi pala">-a/-ä</span> (<span class="fi">odottaa</span> → <span class="fi pala">odotta-</span>); no tipo 2, o <span class="fi pala">-da/-dä</span> (<span class="fi">juoda</span> → <span class="fi pala">juo-</span>); no tipo 3, as duas últimas letras (<span class="fi">tulla</span> → <span class="fi pala">tul-</span>, <span class="fi">kävellä</span> → <span class="fi pala">kävel-</span>). A consoante é a mesma do infinitivo: <span class="fi">Odottakaa!</span> (mas <span class="fi">Odota!</span>).</p>`
    },
    {
      id: 'kielto-te', otsikko: 'Vocês, não!: Älkää juosko!', taso: 'essencial', hakuosa: 'h-imperatiivi', treeni: 't14-kielto-te',
      html: `
<p><b>Forma:</b> <span class="fi">älkää</span> + o mesmo radical + <span class="fi pala">-ko/-kö</span>. Truque: pegue a ordem e troque <span class="fi pala">-kaa</span> por <span class="fi pala">-ko</span>, <span class="fi pala">-kää</span> por <span class="fi pala">-kö</span>.</p>
<table class="taivutus">
  <tr><th>ordem</th><th>proibição</th><th>português</th></tr>
  <tr><td><span class="fi">Juoskaa!</span></td><td><span class="fi">Älkää juosko!</span></td><td>corram! · não corram!</td></tr>
  <tr><td><span class="fi">Menkää!</span></td><td><span class="fi">Älkää menkö!</span></td><td>vão! · não vão!</td></tr>
  <tr><td><span class="fi">Ottakaa!</span></td><td><span class="fi">Älkää ottako!</span></td><td>peguem! · não peguem!</td></tr>
  <tr><td><span class="fi">Tulkaa!</span></td><td><span class="fi">Älkää tulko!</span></td><td>venham! · não venham!</td></tr>
</table>
<p>Compare as três negações: <span class="fi">Älä juokse!</span> (você, não corra!), <span class="fi">Älkää juosko!</span> (vocês, não corram!), <span class="fi">Te ette juokse.</span> (vocês não correm: afirmação).</p>`
    },
    {
      id: 'postpositiot', otsikko: 'Onde fica? Genitivo + posposição', taso: 'essencial', hakuosa: 'h-postpositiot', treeni: 't14-postpositiot',
      html: `
<p><b>Forma:</b> o lugar no <b>genitivo</b> (<span class="fi pala">-n</span>) + a posposição: <span class="fi">kirkon edessä</span> (na frente da igreja), <span class="fi">Maian luona</span> (na casa da Maia), <span class="fi">keskustan kautta</span> (pelo centro).</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">pankin edessä</span></td><td>na frente do banco</td></tr>
  <tr><td><span class="fi">pankin takana</span></td><td>atrás do banco</td></tr>
  <tr><td><span class="fi">pankin vieressä</span></td><td>ao lado do banco</td></tr>
  <tr><td><span class="fi">pankin lähellä</span></td><td>perto do banco</td></tr>
  <tr><td><span class="fi">museon ja palatsin välissä</span></td><td>entre o museu e o palácio</td></tr>
  <tr><td><span class="fi">palmun alla</span></td><td>debaixo da palmeira</td></tr>
  <tr><td><span class="fi">Martan luona</span></td><td>na casa da Marta</td></tr>
</table>
<p>O genitivo muda por dentro como sempre; veja na tabela:</p>
<div class="sijataulu" data-sana="kirkko" data-sijat="nominatiivi,genetiivi"></div>
<div class="sijataulu" data-sana="selkä" data-sijat="nominatiivi,genetiivi"></div>`
    },
    {
      id: 'suunnat', otsikko: 'Direções: oikealle, vasemmalla, suoraan', taso: 'essencial', hakuosa: 'h-ulkosijat', treeni: 't14-suunnat',
      html: `
<p><b>Para onde?</b> <span class="fi pala">-lle</span>: <span class="fi">oikealle, vasemmalle</span>. <b>Onde?</b> <span class="fi pala">-lla</span>: <span class="fi">oikealla, vasemmalla</span>. São os casos “de fora” (lição 7) de <span class="fi">oikea</span> (direito) e <span class="fi">vasen</span> (esquerdo). Reto: <span class="fi">suoraan</span>.</p>
<ul class="esim">
  <li class="s" data-pt="Vire à direita!">Käänny oikealle!</li>
  <li class="s" data-pt="A farmácia fica à direita.">Apteekki on oikealla.</li>
  <li class="s" data-pt="Virem à esquerda!">Kääntykää vasemmalle!</li>
  <li class="s" data-pt="Vá reto até a esquina!">Mene suoraan kulmaan!</li>
</ul>
<p><b>Falso amigo:</b> direto = <span class="fi">suoraan</span>; direita = <span class="fi">oikea</span>. E <span class="fi">oikea</span> também é “certo”.</p>`
    },
    {
      id: 'assimilaatio', otsikko: 'Pronúncia: pankin kohdalla soa “pankiŋ kohdalla”', taso: 'atenção', hakuosa: 'h-aakkoset',
      html: `
<p>O <span class="fi pala">-n</span> do fim da palavra se adapta à consoante seguinte. A escrita não muda.</p>
<ul class="esim">
  <li class="s" data-pt="em cima disso (soa: sem päälle)">sen päälle</li>
  <li class="s" data-pt="o celular da Malu (soa: Malum puhelin)">Malun puhelin</li>
  <li class="s" data-pt="na altura do banco (soa: pankiŋ kohdalla)">pankin kohdalla</li>
</ul>
<p>Antes de <span class="fi pala">p</span> e <span class="fi pala">m</span>: <span class="fi pala">n → m</span>. Antes de <span class="fi pala">k</span>: o <span class="fi pala">n</span> de “banco”. Sem nasalizar a vogal.</p>`
    },
    {
      id: 'sudenkuopat14', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção', hakuosa: 'h-sudenkuopat',
      html: `
<ul>
  <li><b>A ordem para vocês não tem -tte:</b> <span class="fi">Tulkaa!</span> (venham!), mas <span class="fi">Te tulette.</span> (vocês vêm).</li>
  <li><b>“Não corram” = <span class="fi">Älkää juosko!</span></b>, nunca <span class="fi pala">ette juokse</span> nem <span class="fi pala">älä juoskaa</span>.</li>
  <li><b>A posposição vem depois, com genitivo:</b> <span class="fi">kirkon edessä</span>, não “edessä kirkko”.</li>
  <li><b>direto ≠ direita:</b> <span class="fi">suoraan</span> = reto; <span class="fi">oikealle</span> = para a direita.</li>
  <li><b>oikealle ou oikealla?</b> Para onde? <span class="fi pala">-lle</span> (<span class="fi">Käänny oikealle!</span>). Onde? <span class="fi pala">-lla</span> (<span class="fi">Pankki on oikealla.</span>).</li>
  <li><b>“Estou indo” = <span class="fi">Tulen!</span></b> quando você vai até quem fala com você.</li>
</ul>`
    }
  ]
});
