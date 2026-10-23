/* Tottakai, lição 3: Hakaniemen kauppahalli ja Tokmanni (Passon jakso 3 Maian näkökulmasta). Oma materiaali, ei kirjan
   tekstiä. Kaksi osaa omina sivuinaan (TYONKULKU 11, auditointi 5 C3): #t03 = osa A (kauppahalli: dialogi, Frases
   prontas, sanasto ja luvut 11–100, ääntäminen, 3 tehtävää), #t03-b = osa B (Tokmanni: dialogi, Frases prontas,
   kielioppi (myös mitä = mikä:n partitiivi ja kuinka monta + partitiivi, joihin oppitunnin 2 Perguntas-laatikko viittaa), 6 tehtävää, kulttuuri, Na rua, kotitehtävä, itsearvio).
   Kielioppi: partitiivi lukusanan jälkeen ja ostaessa (yksikkö), yksikön partitiivin muodostus, hinnat (euro, sentti),
   luvut 11–100; kohteliaisuus fraaseina (Saisinko…?, Ole hyvä, Kiitos, samoin). Monikon partitiivi vasta jaksossa 11.
   Ääntäminen (AANTAMINEN.md): ei ylimääräistä vokaalia konsonanttien väliin. Maian virhe: Tokmanni → ”Tokki-Manni”
   (merkitty .pala, ei kuplaa; lause data-hairio). Purjon rallienglanti .pala-merkinnällä (ei suomea, ei kuplaa).
   Kaikki puhuvat kirjakieltä; puhekieli vain Na rua -nurkassa. Komponentti: kuitti (komponentit.js), osassa B.
   Auditointi 5: A5-M4d (-e-sääntö: ”a maioria das palavras em -e”), A5-M4i (vaihtoraha suomeksi; Mitä teille? on
   torin kaava, arjen kysymys tulee oppitunnilla 4), kuuntelukohtia enintään 3 osaa kohden, ei sanelua.
   Sivuhenkilöt olemassa olevilla rooleilla: torin myyjä mies7, Tokmannin myyjä nainen5, Purjo nainen4. */
Kurssi.lisaa({
  id: 't03',
  lyhyt: '3',
  jakso: 'Lição 3',
  otsikko: 'No mercado: o partitivo depois de números e os preços',
  lahde: 'Tema: fazer compras no mercado e na loja, preços, números 11–100 · Gramática: partitivo singular depois de números (kaksi pullaa) e ao comprar (Saisinko leipää?) · Pronúncia: sem vogal extra entre consoantes (Tokmanni, não “Tokki-Manni”)',
  aiheet: ['raha', 'ruoka', 'numerot', 'kaupunki'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga, ama chocolate belga' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo, faz a lista de compras' },
    myyja: { nimi: 'Vendedor', tyyppi: 'mies', vaihto: 7, kuvaus: 'vendedor no mercado de Hakaniemi, fala muito rápido' },
    myyja2: { nimi: 'Vendedora', tyyppi: 'nainen', vaihto: 5, kuvaus: 'vendedora e caixa no Tokmanni' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay, manda mensagens' }
  },

  sanasto: [
    'haluta', 'kauppahalli', 'myyjä', 'leipä', 'pulla', 'juusto', 'kahvi', 'suklaa', 'paketti', 'gramma', 'kilo', 'kassi',
    'euro', 'sentti', 'hinta', 'halpa', 'kallis', 'tuore', 'belgialainen',
    'ostaa', 'maksaa', 'etsiä', 'rakastaa', 'paljonko', 'yhteensä', 'vain', 'takaisin', 'lauantai',
    'mitä teille', 'selvä', 'ole hyvä', 'hyvää päivänjatkoa', 'samoin',
    'yksitoista', 'kaksitoista', 'neljätoista', 'viisitoista', 'kaksikymmentä', 'neljäkymmentä', 'viisikymmentä',
    'yhdeksänkymmentä', 'sata', 'Tokmanni'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · No mercado de Hakaniemi',
      html: `
<ul class="tavoitteet">
  <li>Você compra com educação: <span class="fi">Saisinko leipää?</span> <span class="fi">Kiitos!</span> <span class="fi">Ole hyvä.</span></li>
  <li>Você pergunta e entende preços: <span class="fi">Paljonko se maksaa?</span> – <span class="fi">Kaksi euroa kymmenen.</span></li>
  <li>Você conta de 11 a 100 e fala <span class="fi">Tokmanni</span> sem vogal extra.</li>
  <li>Você usa o partitivo depois de números e ao comprar: <span class="fi">kaksi pullaa</span>, <span class="fi">sata grammaa juustoa</span> (parte B).</li>
</ul>
<p data-paikka="hakaniemen-kauppahalli-syksy">Sábado de manhã, geladeira vazia. Maia e Jay vão ao mercado coberto de Hakaniemi, o <span class="fi">Hakaniemen kauppahalli</span>: cheiro de café e pão, e vendedores que falam rápido. Muito rápido.</p>

<section class="osio" data-paikka="hakaniemen-kauppahalli-syksy">
  <h2>Diálogo: Hakaniemen kauppahallissa</h2>
  <p class="ohje">Ouça sem tradução. Repare: <span class="fi">kaksi pullaa</span>, <span class="fi">sata grammaa</span> (a regra: parte B).</p>
  <div class="kpl" id="t03-dialogi" data-nimi="Ouvir o diálogo">
    <figure class="tarinakuva" data-tarinakuva="t03-1" data-alt="Desenho: no mercado coberto de Hakaniemi, com paredes de tijolo e uma janela em arco, um vendedor de chapéu de cozinheiro e bigode fala muito rápido e gesticula atrás do balcão de pães, pães doces e queijos, enquanto a Maia e o Jay, de costas, olham para ele."></figure>
    <p class="s" data-h="kertoja" data-pt="No sábado, Maia e Jay estão no mercado de Hakaniemi. O vendedor fala muito rápido.">Lauantaina Maia ja Jay <span data-l="olla#2">ovat</span> Hakaniemen kauppahallissa. Myyjä puhuu todella nopeasti.</p>
    <p class="s" data-h="myyja" data-pt="Bom dia! Hoje tem pão fresquinho e queijo bom. O que vai ser?">Huomenta! Tänään on tuoretta leipää ja hyvää juustoa. Mitä teille?</p>
    <p class="s" data-h="maia" data-pt="Desculpe, devagar, por favor. Pode me dar pão?">Anteeksi, hitaasti, kiitos. Saisinko leipää?</p>
    <p class="s" data-h="myyja" data-pt="Claro! E pão doce? Um pão doce custa dois euros.">Selvä! Ja pullaa? Yksi pulla maksaa kaksi euroa.</p>
    <p class="s" data-h="maia" data-pt="Dois pães doces, por favor.">Kaksi pullaa, kiitos.</p>
    <p class="s" data-h="jay" data-pt="E cem gramas de queijo. É só isso.">Ja sata grammaa juustoa. Siinä kaikki.</p>
    <figure class="tarinakuva" data-tarinakuva="t03-2" data-alt="Desenho: no balcão do mercado, o vendedor entrega um saco de papel com dois pães doces, a Maia estende a mão com moedas e faz cara de quem ainda está contando, e o Jay sorri ao lado dela."></figure>
    <p class="s" data-h="myyja" data-pt="Aqui está! Ao todo, onze euros e cinquenta.">Ole hyvä! Yhteensä yksitoista euroa viisikymmentä.</p>
    <p class="s" data-h="maia" data-pt="Onze… e cinquenta? Aqui está.">Yksitoista… viisikymmentä? Ole hyvä.</p>
    <p class="s" data-h="myyja" data-pt="Obrigado! Tenha um bom dia!">Kiitos! Hyvää päivänjatkoa!</p>
    <p class="s" data-h="maia" data-pt="Obrigada, igualmente!">Kiitos, samoin!</p>
    <p class="s" data-h="jay" data-pt="Agora falta o café. No Tokmanni tem café barato.">Nyt vielä kahvia. Tokmannissa on halpaa kahvia.</p>
    <p class="s" data-h="maia" data-hairio="Tokki-Manniin → Tokmanniin" data-puhu="Hyvä! Mennään Tok-ki-Manniin!" data-pt="Ótimo! Vamos à “Tokki-Manni”! (errado: Tokmanni)">Hyvä! Mennään <span class="pala">Tokki-Manniin</span>!</p>
    <p class="s" data-h="jay" data-puhu="Tokki Manni? Se on Tokmanni! Tok, mann, ni." data-pt="“Tokki-Manni”? É Tokmanni! Tok-man-ni.">”<span class="pala">Tokki-Manni</span>”? Se on Tokmanni! <span class="pala">Tok-man-ni</span>.</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos inteiros; a gramática vem depois.</p>
    <ul>
      <li><span class="fi">Lauantaina</span> = no sábado (<span class="fi">maanantaina</span> = na segunda) · o caso: lição 16</li>
      <li><span class="fi">Hakaniemen kauppahallissa</span>, <span class="fi">Tokmannissa</span> = no mercado, no Tokmanni · <span class="fi pala">-ssa</span>: lição 6; <span class="fi pala">-n</span>: lição 5</li>
      <li><span class="fi">Mitä teille?</span> = o que vai ser? · fórmula do vendedor de mercado; a pergunta comum em lojas e cafés: lição 4</li>
      <li><span class="fi">Saisinko…?</span> = pode me dar…? (de <span class="fi">saada</span>, receber) · mais frases assim: lição 4</li>
      <li><span class="fi">Siinä kaikki.</span> = é só isso (ao terminar o pedido) · <span class="fi">siinä</span> = nisso, de <span class="fi">se</span> com <span class="fi pala">-ssa</span>: lição 6</li>
      <li><span class="fi">Mennään!</span> = vamos! · a forma do verbo (passivo): lição 20</li>
    </ul>
  </div>
</section>

<section class="osio" data-paikka="hakaniemen-kauppahalli">
  <h2>Vocabulário e números 11–100</h2>
  <div class="teema" data-otsikko="Palavras-chave" data-sanat="leipä,pulla,juusto,hinta,halpa,yhteensä"></div>
  <p>De 11 a 19: número + <span class="fi pala">toista</span>: 11 <span class="fi">yksitoista</span>, 12 <span class="fi">kaksitoista</span>, 14 <span class="fi">neljätoista</span>, 15 <span class="fi">viisitoista</span>. Dezenas: número + <span class="fi pala">kymmentä</span>: 20 <span class="fi">kaksikymmentä</span>, 40 <span class="fi">neljäkymmentä</span>, 50 <span class="fi">viisikymmentä</span>, 90 <span class="fi">yhdeksänkymmentä</span>; o resto vem colado: 21 <span class="fi">kaksikymmentäyksi</span>. 100 = <span class="fi">sata</span>. <span class="fi">kymmentä</span> já é partitivo (de <span class="fi">kymmenen</span>): a regra da parte B dentro do número. Mais dezenas e preços: Gramática da lição.</p>
</section>

<section class="osio" data-paikka="kallio-kahvila">
  <h2>Pronúncia: sem vogal extra</h2>
  <p>O brasileiro põe uma vogal escondida entre consoantes (<span lang="pt-BR">advogado</span> → “adevogado”): assim <span class="fi">Tokmanni</span> virou “<span class="pala">Tokki-Manni</span>”. Em finlandês, as consoantes ficam <b>juntas</b> (<span class="pala">Tok-man-ni</span>), e nada de vogal no fim: <span class="fi">olet</span>, não “<span class="pala">oleti</span>”. Ouça e repita:</p>
  <ul class="esim">
    <li class="s" data-pt="Tokmanni · Tok-man-ni">Tokmanni</li>
    <li class="s" data-pt="dois · kak-si">kaksi</li>
    <li class="s" data-pt="custar, pagar · mak-saa">maksaa</li>
    <li class="s" data-pt="você é, você está · o-let">olet</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="kallio-kahvila">
  <h2>Exercícios da parte A</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ligue o número à palavra</h3>
    <ul class="yhdista">
      <li data-sanakuva="maara11" data-pari="11">yksitoista</li>
      <li data-sanakuva="maara14" data-pari="14">neljätoista</li>
      <li data-sanakuva="maara20" data-pari="20">kaksikymmentä</li>
      <li data-sanakuva="maara40" data-pari="40">neljäkymmentä</li>
      <li data-sanakuva="maara50" data-pari="50">viisikymmentä</li>
      <li data-sanakuva="maara90" data-pari="90">yhdeksänkymmentä</li>
      <li data-sanakuva="maara100" data-pari="100">sata</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>2. Uma vogal a mais? Ouça e escolha</h3>
    <p class="ohje">Uma vogal entre duas consoantes muda tudo: <span class="fi">ostaa</span> (comprar) × <span class="fi">osata</span> (saber fazer), <span class="fi">hinta</span> (preço) × <span class="fi">hinata</span> (rebocar um carro). Com a vogal extra, a Maia pergunta pelo reboque, e não pelo preço. Ouça e escolha o que você ouviu.</p>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="ostaa" data-oikea="ostaa">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">ostaa</button><button type="button">osata</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="hinta" data-oikea="hinta">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">hinata</button><button type="button">hinta</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="osata" data-oikea="osata">
      <p class="kysymys">O que você ouviu?</p>
      <div class="vaihtoehdot"><button type="button">ostaa</button><button type="button">osata</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>3. No mercado: o que você diz?</h3>
    <p class="ohje">Escolha a frase que cabe na situação. Todas as frases estão no diálogo.</p>
    <div class="valinta" data-sanakuva="leipa" data-oikea="Saisinko leipää?">
      <p class="kysymys">O vendedor pergunta <span class="fi">Mitä teille?</span> Você quer pão.</p>
      <div class="vaihtoehdot"><button type="button">Ole hyvä.</button><button type="button">Saisinko leipää?</button><button type="button">Kiitos, samoin!</button></div>
    </div>
    <div class="valinta" data-sanakuva="nopeasti" data-oikea="Hitaasti, kiitos.">
      <p class="kysymys">O vendedor fala rápido demais.</p>
      <div class="vaihtoehdot"><button type="button">Hitaasti, kiitos.</button><button type="button">Hyvää päivänjatkoa!</button><button type="button">Selvä!</button></div>
    </div>
    <div class="valinta" data-sanakuva="hinta" data-oikea="Paljonko se maksaa?">
      <p class="kysymys">Você quer saber o preço.</p>
      <div class="vaihtoehdot"><button type="button">Mitä teille?</button><button type="button">Saisinko leipää?</button><button type="button">Paljonko se maksaa?</button></div>
    </div>
    <div class="valinta" data-sanakuva="raha" data-oikea="Ole hyvä.">
      <p class="kysymys">Você entrega o dinheiro ao vendedor.</p>
      <div class="vaihtoehdot"><button type="button">Ole hyvä.</button><button type="button">Kiitos, samoin!</button><button type="button">Hitaasti, kiitos.</button></div>
    </div>
    <div class="valinta" data-sanakuva="aurinko" data-oikea="Kiitos, samoin!">
      <p class="kysymys">O vendedor diz <span class="fi">Hyvää päivänjatkoa!</span></p>
      <div class="vaihtoehdot"><button type="button">Selvä!</button><button type="button">Ole hyvä.</button><button type="button">Kiitos, samoin!</button></div>
    </div>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · No Tokmanni',
      html: `
<ul class="tavoitteet">
  <li>Você usa o partitivo depois de números: <span class="fi">kaksi pakettia</span>, <span class="fi">kolme pullaa</span>.</li>
  <li>Você compra uma quantidade sem número: <span class="fi">suklaata</span>, <span class="fi">sata grammaa juustoa</span>.</li>
  <li>Você entende preços e um recibo: <span class="fi">Kaksi euroa kymmenen.</span></li>
  <li>Você responde no caixa: <span class="fi">Ei, kiitos.</span></li>
</ul>

<section class="osio" data-paikka="helsingin-kaupunginosat">
  <h2>Diálogo: Tokmannissa</h2>
  <p class="ohje">O Tokmanni é uma loja barata, de tudo um pouco. A Maia procura chocolate, claro. Ouça primeiro sem tradução e repare: <span class="fi">suklaata</span>, <span class="fi">kaksi pakettia</span>.</p>
  <div class="kpl" id="t03-dialogi-b" data-nimi="Ouvir o diálogo">
    <p class="s" data-h="kertoja" data-pt="No Tokmanni, a Maia procura chocolate. Ela ama chocolate belga.">Tokmannissa Maia etsii suklaata. Hän rakastaa belgialaista suklaata.</p>
    <p class="s" data-h="maia" data-pt="Com licença, tem chocolate belga aqui?">Anteeksi, onko täällä belgialaista suklaata?</p>
    <p class="s" data-h="myyja2" data-pt="Não tem. Aqui só tem chocolate finlandês.">Ei ole. Täällä on vain suomalaista suklaata.</p>
    <p class="s" data-h="maia" data-pt="Ai, não! Quanto custa?">Voi ei! Paljonko se maksaa?</p>
    <p class="s" data-h="myyja2" data-pt="Dois euros e dez.">Kaksi euroa kymmenen.</p>
    <p class="s" data-h="maia" data-pt="Bom preço! Dois chocolates, por favor.">Hyvä hinta! Kaksi suklaata, kiitos.</p>
    <p class="s" data-h="jay" data-pt="E onde fica o café?">Ja missä kahvi <span data-l="olla#2">on</span>?</p>
    <p class="s" data-h="myyja2" data-pt="Ali. Um pacote custa quatro e noventa.">Tuolla. Paketti maksaa neljä euroa yhdeksänkymmentä.</p>
    <p class="s" data-h="jay" data-pt="A gente compra dois pacotes.">Me ostamme kaksi pakettia.</p>
    <p class="s" data-h="myyja2" data-pt="Ao todo, catorze euros. Precisa de sacola?">Yhteensä neljätoista euroa. Tarvitsetteko kassin?</p>
    <p class="s" data-h="maia" data-pt="Não, obrigada. Aqui estão vinte euros.">Ei, kiitos. Tässä on kaksikymmentä euroa.</p>
    <p class="s" data-h="myyja2" data-pt="Obrigada! Tenha um bom dia!">Kiitos! Hyvää päivänjatkoa!</p>
    <p class="s" data-h="maia" data-pt="Obrigada, igualmente!">Kiitos, samoin!</p>
  </div>
  <div class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <ul>
      <li><span class="fi">Tokmannissa</span> = no Tokmanni · <span class="fi pala">-ssa</span> (em, dentro): lição 6</li>
      <li><span class="fi">Voi ei!</span> = ai, não!</li>
      <li><span class="fi">Tarvitsetteko kassin?</span> = precisa de sacola? (pergunta do caixa) · o verbo <span class="fi">tarvita</span>: lição 7; <span class="fi">kassin</span>: lição 12</li>
      <li><span class="fi">Ei, kiitos.</span> = não, obrigado. <span class="fi">Kyllä, kiitos.</span> = sim, obrigado.</li>
      <li><span class="fi">Tässä on…</span> = aqui está…, aqui estão… (ao entregar algo) · <span class="fi">tässä</span> (neste lugar, de <span class="fi">tämä</span>): lição 8</li>
    </ul>
  </div>
</section>

<section class="osio" data-osa="gramatica" data-paikka="hameentie-marraskuu">
  <h2>Gramática</h2>

  <h3>1. Depois de um número: partitivo, sem plural</h3>
  <p>Em português, depois de “dois” vem o plural: dois pães. Em finlandês, não. Com <span class="fi">yksi</span> (1), a palavra fica na forma básica. A partir de 2, ela vai para o <b>partitivo singular</b>: termina em <span class="fi pala">-a/-ä</span> ou <span class="fi pala">-ta/-tä</span>.</p>
  <table class="taivutus">
    <tr><th>1</th><th>2 ou mais</th></tr>
    <tr><td><span class="fi">yksi pulla</span><span class="kaannos" lang="pt-BR">um pão doce</span></td><td><span class="fi">kaksi pullaa</span><span class="kaannos" lang="pt-BR">dois pães doces</span></td></tr>
    <tr><td><span class="fi">yksi euro</span><span class="kaannos" lang="pt-BR">um euro</span></td><td><span class="fi">neljätoista euroa</span><span class="kaannos" lang="pt-BR">catorze euros</span></td></tr>
    <tr><td><span class="fi">yksi paketti</span><span class="kaannos" lang="pt-BR">um pacote</span></td><td><span class="fi">kaksi pakettia</span><span class="kaannos" lang="pt-BR">dois pacotes</span></td></tr>
  </table>
  <p>Depois da pergunta <span class="fi">Kuinka monta?</span> (quantos?), também: <span class="fi">Kuinka monta pullaa?</span> – <span class="fi">Kaksi pullaa.</span></p>

  <h3>2. Comprar “um pouco de”: partitivo também</h3>
  <p>Pão, queijo, café, chocolate: quando você fala de <b>uma quantidade</b>, sem número, use o partitivo. Também depois de medidas como <span class="fi">sata grammaa</span> e <span class="fi">paketti</span>. E a pergunta <span class="fi">Mitä?</span> (o quê?) é o partitivo de <span class="fi">mikä</span>: <span class="fi">Mitä teille?</span> <span class="fi">Mitä me ostamme?</span></p>
  <ul class="esim">
    <li class="s" data-pt="Pode me dar pão?">Saisinko leipää?</li>
    <li class="s" data-pt="Cem gramas de queijo.">Sata grammaa juustoa.</li>
    <li class="s" data-pt="Aqui só tem chocolate finlandês.">Täällä on vain suomalaista suklaata.</li>
  </ul>
  <div class="huomio">
    <p><b>Uma coisa inteira × um pouco:</b> <span class="fi">Yksi pulla maksaa kaksi euroa</span> (um pão doce, inteiro) × <span class="fi">Ja pullaa?</span> (e pão doce? um pouco, algum). A terminação mostra a diferença.</p>
  </div>
  <div class="saanto">
    <h3>Para formar: cole -a ou -ä</h3>
    <p>Vogal curta no fim: cole <span class="fi pala">-a</span> (vogais de trás) ou <span class="fi pala">-ä</span> (vogais da frente): <span class="fi">pulla → pullaa</span>, <span class="fi">juusto → juustoa</span>, <span class="fi">leipä → leipää</span>, <span class="fi">sentti → senttiä</span>. Vogal longa: <span class="fi pala">-ta/-tä</span>: <span class="fi">suklaa → suklaata</span>. Palavras em <span class="fi pala">-nen</span>: <span class="fi">suomalainen → suomalaista</span>. O resto está nos cartões da Gramática da lição.</p>
  </div>
  <div class="muista">
    <p><b>Lembre: você já conhece o partitivo.</b> Nos desejos: <span class="fi">Hyvää päivää!</span> <span class="fi">Hyvää päivänjatkoa!</span> E depois de muitos verbos: <span class="fi">Puhun suomea.</span> <span class="fi">Luen karttaa.</span> É a mesma terminação <span class="fi pala">-a/-ä</span>; a regra dos verbos (o objeto) vem na lição 12.</p>
  </div>

  <h3>3. Os preços</h3>
  <p>Depois do número, <span class="fi">euroa</span> e <span class="fi">senttiä</span> também vão para o partitivo. Os centavos vêm logo depois dos euros, e a palavra <span class="fi">senttiä</span> quase sempre cai:</p>
  <ul class="esim">
    <li class="s" data-pt="2,10 € (dois euros e dez)">kaksi euroa kymmenen</li>
    <li class="s" data-pt="4,90 € (quatro e noventa)">neljä euroa yhdeksänkymmentä</li>
    <li class="s" data-pt="0,50 € (cinquenta centavos)">viisikymmentä senttiä</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="kallio-hameentie-ilta">
  <h2>Exercícios da parte B</h2>
  <div class="peli-upotus" data-peli="tokki-manni"></div>
  <div class="peli-upotus" data-peli="kassapaniikki"></div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Complete com o partitivo (ou não!)</h3>
    <p class="ohje">A forma básica está entre parênteses. Cuidado: com <span class="fi">yksi</span>, nada muda.</p>
    <div class="aukot" lang="fi-FI">
      <p>Kaksi <span class="aukko" data-oikea="pullaa"></span>, kiitos. <span data-ei-kuplaa>(pulla)</span></p>
      <p>Saisinko <span class="aukko" data-oikea="leipää"></span>? <span data-ei-kuplaa>(leipä)</span></p>
      <p>Juusto maksaa kolme <span class="aukko" data-oikea="euroa"></span>. <span data-ei-kuplaa>(euro)</span></p>
      <p>Sata <span class="aukko" data-oikea="grammaa"></span> juustoa. <span data-ei-kuplaa>(gramma)</span></p>
      <p>Se maksaa kymmenen <span class="aukko" data-oikea="senttiä"></span>. <span data-ei-kuplaa>(sentti)</span></p>
      <p>Paketti <span class="aukko" data-oikea="kahvia"></span>, kiitos. <span data-ei-kuplaa>(kahvi)</span></p>
      <p>Täällä on vain suomalaista <span class="aukko" data-oikea="suklaata"></span>. <span data-ei-kuplaa>(suklaa)</span></p>
      <p>Yksi <span class="aukko" data-oikea="pulla"></span> maksaa kaksi euroa. <span data-ei-kuplaa>(pulla)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Ouça o preço e escolha</h3>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="kolme euroa viisikymmentä" data-oikea="3,50 €">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">3,15 €</button><button type="button">3,50 €</button><button type="button">3,05 €</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="kaksitoista euroa" data-oikea="12 €">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">2 €</button><button type="button">20 €</button><button type="button">12 €</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="neljäkymmentä senttiä" data-oikea="0,40 €">
      <p class="kysymys">Quanto custa?</p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">0,40 €</button><button type="button">0,14 €</button><button type="button">0,04 €</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Escolha a forma certa</h3>
    <div class="valinta" data-sanakuva="kahvi" data-oikea="kahvia">
      <p class="kysymys"><span class="fi">Kaksi … , kiitos.</span></p>
      <div class="vaihtoehdot"><button type="button">kahvi</button><button type="button">kahvia</button><button type="button">kahvin</button></div>
    </div>
    <div class="valinta" data-sanakuva="pulla" data-oikea="pulla">
      <p class="kysymys"><span class="fi">Yksi … maksaa kaksi euroa.</span></p>
      <div class="vaihtoehdot"><button type="button">pulla</button><button type="button">pullaa</button><button type="button">pullan</button></div>
    </div>
    <div class="valinta" data-sanakuva="juusto" data-oikea="juustoa|juuston">
      <p class="kysymys"><span class="fi">Saisinko …?</span></p>
      <div class="vaihtoehdot"><button type="button">juuston</button><button type="button">juusto</button><button type="button">juustoa</button></div>
    </div>
    <div class="valinta" data-sanakuva="raha" data-oikea="euroa">
      <p class="kysymys"><span class="fi">Paketti maksaa viisi … .</span></p>
      <div class="vaihtoehdot"><button type="button">euroa</button><button type="button">euro</button><button type="button">euron</button></div>
    </div>
    <div class="valinta" data-sanakuva="suklaa" data-oikea="suklaata">
      <p class="kysymys"><span class="fi">Täällä on halpaa … .</span></p>
      <div class="vaihtoehdot"><button type="button">suklaa</button><button type="button">suklaan</button><button type="button">suklaata</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. O recibo do Tokmanni</h3>
    <p class="ohje">Leia o recibo da Maia e complete com o número em finlandês. Toque numa linha do recibo: você ouve o preço.</p>
    <div class="kuitti" data-aani="nainen" data-vaihto="5" data-kauppa="Tokmanni" data-paiva="21.11.2026 · 11.24" data-loppu="Kiitos! Hyvää päivänjatkoa!">
      <p data-hinta="4.2" data-puhu="Kaksi suklaata: neljä euroa kaksikymmentä.">suklaa 2 × 2,10</p>
      <p data-hinta="9.8" data-puhu="Kaksi pakettia kahvia: yhdeksän euroa kahdeksankymmentä.">kahvi 2 × 4,90</p>
    </div>
    <div class="aukot" lang="fi-FI">
      <p>Yksi suklaa maksaa kaksi euroa <span class="aukko" data-oikea="kymmenen"></span>. <span data-ei-kuplaa>(2,10 €)</span></p>
      <p>Paketti kahvia maksaa neljä euroa <span class="aukko" data-oikea="yhdeksänkymmentä"></span>. <span data-ei-kuplaa>(4,90 €)</span></p>
      <p>Yhteensä <span class="aukko" data-oikea="neljätoista"></span> euroa. <span data-ei-kuplaa>(14,00 €)</span></p>
      <p>Maia maksaa kaksikymmentä euroa. Hän saa takaisin <span class="aukko" data-oikea="kuusi"></span> euroa. <span data-ei-kuplaa>(o troco)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Traduza para o finlandês</h3>
    <div class="kaanna"><p class="pt">Quanto custa?</p><p class="s" data-pt="Quanto custa?">Paljonko se maksaa?</p></div>
    <div class="kaanna"><p class="pt">Dois cafés, por favor.</p><p class="s" data-pt="Dois cafés, por favor.">Kaksi kahvia, kiitos.</p></div>
    <div class="kaanna"><p class="pt">Pode me dar queijo?</p><p class="s" data-pt="Pode me dar queijo?">Saisinko juustoa?</p></div>
    <div class="kaanna"><p class="pt">Um pão doce custa dois euros.</p><p class="s" data-pt="Um pão doce custa dois euros.">Yksi pulla maksaa kaksi euroa.</p></div>
    <div class="kaanna"><p class="pt">Tem chocolate belga aqui?</p><p class="s" data-pt="Tem chocolate belga aqui?">Onko täällä belgialaista suklaata?</p></div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>9. Leia as mensagens da Purjo</h3>
    <p class="ohje">Ainda no Tokmanni, o celular da Maia apita. É a Purjo. Quando a Maia não entende, a Purjo tenta o inglês dela…</p>
    <div class="chat" data-otsikko="Purjo" data-paiva="lauantai" data-mina="maia">
      <p data-h="purjo" data-aika="11.26" data-pt="Oi, Maia! Onde vocês estão?">Hei Maia! Missä te <span data-l="olla#2">olette</span>?</p>
      <p data-h="maia" data-aika="11.27" data-pt="Oi! Estamos no Tokmanni.">Hei! Me <span data-l="olla#2">olemme</span> Tokmannissa.</p>
      <p data-h="purjo" data-aika="11.27" data-pt="Vocês compram café para mim?">Ostatteko minulle kahvia?</p>
      <p data-h="maia" data-aika="11.29" data-pt="Desculpe, não entendo. Para mim?">Anteeksi, en ymmärrä. Minulle?</p>
      <p data-h="purjo" data-aika="11.30" data-pt="(inglês da Purjo) Eu quero café. Dois pacotes. Você pode comprar? Por favor!"><span class="pala" lang="en">Ai vant koffii. Tuu päkets. Kän juu pai? Pliis!</span></p>
      <p data-h="maia" data-aika="11.31" data-pt="Agora entendo! Dois pacotes de café para a Purjo. Pode deixar!">Nyt ymmärrän! Kaksi pakettia kahvia Purjolle. Selvä!</p>
      <p data-h="purjo" data-aika="11.31" data-pt="Obrigada, querida!">Kiitos, kulta!</p>
    </div>
    <div class="valinta" data-sanakuva="olankohautus" data-oikea="Tokmannissa">
      <p class="kysymys"><span class="fi">Missä Maia <span data-l="olla#2">on</span>?</span></p>
      <div class="vaihtoehdot"><button type="button">Hakaniemen kauppahallissa</button><button type="button">Tokmannissa</button><button type="button">kotona</button></div>
    </div>
    <div class="valinta" data-sanakuva="aiti" data-oikea="kaksi pakettia kahvia">
      <p class="kysymys"><span class="fi">Mitä Purjo haluaa?</span></p>
      <div class="vaihtoehdot"><button type="button">kaksi suklaata</button><button type="button">kaksi pullaa</button><button type="button">kaksi pakettia kahvia</button></div>
    </div>
    <div class="valinta" data-sanakuva="englanti" data-oikea="Ei puhu.">
      <p class="kysymys"><span class="fi">Puhuuko Purjo englantia hyvin?</span></p>
      <div class="vaihtoehdot"><button type="button">Puhuu.</button><button type="button">Ei puhu.</button><button type="button">En puhu.</button></div>
    </div>
  </div>
</section>

<aside class="kulttuuri" data-paikka="kallio-hameentie-ilta">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>O mercado de Hakaniemi e o Tokmanni</h3>
  <figure class="kuva" data-kuva="hakaniemen-kauppahalli"></figure>
  <p>O <span class="fi">Hakaniemen kauppahalli</span> é um mercado coberto de tijolo vermelho, aberto em 1914. Depois de uma longa reforma, reabriu em 2023. Dentro há bancas de pão, peixe, carne, queijo e café; do lado de fora, na praça, tem feira ao ar livre.</p>
  <p>A <span class="fi">pulla</span> é o pão doce finlandês, com cardamomo. Com café, é quase uma instituição nacional: os finlandeses estão entre os maiores bebedores de café do mundo.</p>
  <p>O <span class="fi">Tokmanni</span> é uma rede finlandesa de lojas baratas, com de tudo um pouco: comida, limpeza, brinquedos, ferramentas. Como em quase toda loja finlandesa, a sacola é paga: por isso o caixa pergunta <span class="fi">Tarvitsetteko kassin?</span>, e muita gente leva a própria sacola.</p>
  <p>As moedas de 1 e 2 centavos quase não circulam: quem paga em dinheiro tem o total arredondado para 5 centavos. Mas quase todo mundo paga com cartão, até um pão doce de dois euros.</p>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Kaks euroo, kolme viiskyt: preços da rua</h3>
  <p>No mercado, muitos vendedores encurtam os preços. Você pode sempre usar a forma padrão; só é bom <b>reconhecer</b> estas:</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th></tr>
    <tr><td><span class="fi">kaksi euroa</span><span class="kaannos" lang="pt-BR">dois euros</span></td><td><span class="fi">kaks euroo</span></td></tr>
    <tr><td><span class="fi">viisikymmentä</span><span class="kaannos" lang="pt-BR">cinquenta</span></td><td><span class="fi">viiskyt</span></td></tr>
    <tr><td><span class="fi">kolme euroa viisikymmentä</span><span class="kaannos" lang="pt-BR">três e cinquenta (3,50 €)</span></td><td><span class="fi">kolme viiskyt</span></td></tr>
    <tr><td><span class="fi">kymmenen euroa</span><span class="kaannos" lang="pt-BR">dez euros, uma nota de dez</span></td><td><span class="fi">kymppi</span></td></tr>
    <tr><td><span class="fi">viisi euroa</span><span class="kaannos" lang="pt-BR">cinco euros, uma nota de cinco</span></td><td><span class="fi">vitonen</span></td></tr>
  </table>
  <p class="s" data-h="myyja" data-kirja="Kolme euroa viisikymmentä, kiitos." data-pt="Três e cinquenta, por favor.">Kolme viiskyt, kiitos.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="kallio-hameentie-ilta">
  <div class="kotitehtava" data-id="t03">
    <h3>Lição de casa</h3>
    <p>Escreva a sua lista de compras para o sábado com cinco coisas, com número ou sem número (<span class="fi">kaksi pullaa</span>, <span class="fi">kahvia</span>). Depois escreva o diálogo na loja: peça com <span class="fi">Saisinko…?</span>, pergunte o preço, entregue o dinheiro e agradeça. Leia tudo em voz alta, sem vogal extra.</p>
    <details class="malli"><summary>Resposta modelo</summary>
      <p class="s" data-pt="Lista: café, queijo, dois pães doces, cem gramas de chocolate, um pão.">Lista: kahvia, juustoa, kaksi pullaa, sata grammaa suklaata, yksi leipä.</p>
      <p class="s" data-pt="Bom dia! Pode me dar dois pães doces?">Huomenta! Saisinko kaksi pullaa?</p>
      <p class="s" data-pt="Quanto custa?">Paljonko se maksaa?</p>
      <p class="s" data-pt="Quatro euros.">Neljä euroa.</p>
      <p class="s" data-pt="Aqui está. Obrigada!">Ole hyvä. Kiitos!</p>
      <p class="s" data-pt="Tenha um bom dia! – Obrigada, igualmente!">Hyvää päivänjatkoa! – Kiitos, samoin!</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t03">
    <li>Sei pedir com educação: Saisinko…? Kiitos. Ole hyvä.</li>
    <li>Uso o partitivo depois de números: kaksi pullaa, viisi euroa.</li>
    <li>Uso o partitivo ao comprar sem número: Saisinko leipää?</li>
    <li>Pergunto e entendo preços: Paljonko se maksaa? Kaksi euroa kymmenen.</li>
    <li>Conto de 11 a 100 e falo Tokmanni sem vogal extra.</li>
  </ul>
</section>
`
    }
  ],

  kielioppi: [
    {
      id: 'partitiivi-luku', otsikko: 'Partitivo depois de números', taso: 'essencial', hakuosa: 'h-partitiivi', treeni: 't03-luku',
      html: `
<p>Com <span class="fi">yksi</span>: forma básica. A partir de 2: <b>partitivo singular</b>, nunca plural.</p>
<table class="taivutus">
  <tr><th>1</th><th>2 ou mais</th></tr>
  <tr><td><span class="fi">yksi pulla</span><span class="kaannos" lang="pt-BR">um pão doce</span></td><td><span class="fi">kaksi pullaa</span><span class="kaannos" lang="pt-BR">dois pães doces</span></td></tr>
  <tr><td><span class="fi">yksi euro</span><span class="kaannos" lang="pt-BR">um euro</span></td><td><span class="fi">kolme euroa</span><span class="kaannos" lang="pt-BR">três euros</span></td></tr>
  <tr><td><span class="fi">yksi paketti</span><span class="kaannos" lang="pt-BR">um pacote</span></td><td><span class="fi">kaksi pakettia</span><span class="kaannos" lang="pt-BR">dois pacotes</span></td></tr>
  <tr><td><span class="fi">yksi sentti</span><span class="kaannos" lang="pt-BR">um centavo</span></td><td><span class="fi">kymmenen senttiä</span><span class="kaannos" lang="pt-BR">dez centavos</span></td></tr>
  <tr><td><span class="fi">yksi asema</span><span class="kaannos" lang="pt-BR">uma estação</span></td><td><span class="fi">yhdeksän asemaa</span><span class="kaannos" lang="pt-BR">nove estações</span></td></tr>
</table>
<p>O mesmo depois de <span class="fi">kuinka monta</span> e de medidas e quantidades: <span class="fi">Kuinka monta pullaa?</span>, <span class="fi">sata grammaa juustoa</span>, <span class="fi">paketti kahvia</span>, <span class="fi">vähän leipää</span>, <span class="fi">paljon kahvia</span>.</p>`
    },
    {
      id: 'partitiivi-osto', otsikko: 'Ao comprar: quantidade sem número', taso: 'essencial', hakuosa: 'h-partitiivi', treeni: 't03-luku',
      html: `
<p>Comida e coisas que não se contam (pão, queijo, café, chocolate) vão para o partitivo quando você fala de <b>uma quantidade</b>: “um pouco de”, “algum”.</p>
<ul class="esim">
  <li class="s" data-pt="Pode me dar pão?">Saisinko leipää?</li>
  <li class="s" data-pt="Hoje tem pão fresquinho.">Tänään on tuoretta leipää.</li>
  <li class="s" data-pt="Tem chocolate belga aqui?">Onko täällä belgialaista suklaata?</li>
</ul>
<p>O adjetivo acompanha: <span class="fi">tuoretta leipää</span>, <span class="fi">belgialaista suklaata</span>, <span class="fi">halpaa kahvia</span>. A coisa inteira, uma só, fica na forma básica: <span class="fi">Yksi pulla maksaa kaksi euroa.</span></p>`
    },
    {
      id: 'partitiivi-muoto', otsikko: 'Formar o partitivo singular', taso: 'essencial', hakuosa: 'h-partitiivi', treeni: 't03-muoto',
      html: `
<p>O partitivo usa o radical <b>forte</b>, como a forma básica: <span class="fi">leipä → leipää</span> (o genitivo é fraco: <span class="fi">leivän</span>).</p>
<table class="taivutus">
  <tr><th>forma básica</th><th>partitivo</th><th>como</th></tr>
  <tr><td><span class="fi">pulla</span><span class="kaannos" lang="pt-BR">pão doce</span></td><td><span class="fi">pullaa</span></td><td>vogal curta: + <span class="fi pala">-a/-ä</span></td></tr>
  <tr><td><span class="fi">leipä</span><span class="kaannos" lang="pt-BR">pão</span></td><td><span class="fi">leipää</span></td><td>vogal curta: + <span class="fi pala">-a/-ä</span></td></tr>
  <tr><td><span class="fi">sentti</span><span class="kaannos" lang="pt-BR">centavo</span></td><td><span class="fi">senttiä</span></td><td>vogal curta: + <span class="fi pala">-a/-ä</span></td></tr>
  <tr><td><span class="fi">suklaa</span><span class="kaannos" lang="pt-BR">chocolate</span></td><td><span class="fi">suklaata</span></td><td>vogal longa: + <span class="fi pala">-ta/-tä</span></td></tr>
  <tr><td><span class="fi">tuore</span><span class="kaannos" lang="pt-BR">fresco, fresca</span></td><td><span class="fi">tuoretta</span></td><td>a maioria das palavras em <span class="fi pala">-e</span> (<span class="fi">huone, tuore, perhe</span>): + <span class="fi pala">-tta/-ttä</span></td></tr>
  <tr><td><span class="fi">suomalainen</span><span class="kaannos" lang="pt-BR">finlandês</span></td><td><span class="fi">suomalaista</span></td><td><span class="fi pala">-nen</span> → <span class="fi pala">-sta/-stä</span></td></tr>
</table>
<p>Nem toda palavra em <span class="fi pala">-e</span> segue a regra: <span class="fi">nukke → nukkea</span> (boneca).</p>
<div class="sijataulu" data-sana="leipä" data-sijat="nominatiivi,genetiivi,partitiivi"></div>`
    },
    {
      id: 'hinnat', otsikko: 'Preços e números 11–100', taso: 'essencial', hakuosa: 'h-luvut', treeni: 't03-hinnat',
      html: `
<p><b>Pergunta:</b> <span class="fi">Paljonko se maksaa?</span> <b>Resposta:</b> <span class="fi">Se maksaa…</span> Euros e centavos: <span class="fi">euroa</span> e <span class="fi">senttiä</span>, no partitivo depois do número. A palavra <span class="fi">senttiä</span> muitas vezes cai.</p>
<table class="taivutus">
  <tr><th>preço</th><th>finlandês</th></tr>
  <tr><td>1,00 €</td><td><span class="fi">yksi euro</span></td></tr>
  <tr><td>2,10 €</td><td><span class="fi">kaksi euroa kymmenen</span></td></tr>
  <tr><td>3,50 €</td><td><span class="fi">kolme euroa viisikymmentä</span></td></tr>
  <tr><td>0,90 €</td><td><span class="fi">yhdeksänkymmentä senttiä</span></td></tr>
  <tr><td>14,00 €</td><td><span class="fi">neljätoista euroa</span></td></tr>
</table>
<table class="taivutus">
  <tr><th></th><th>finlandês</th><th></th><th>finlandês</th></tr>
  <tr><td>11</td><td><span class="fi">yksitoista</span></td><td>40</td><td><span class="fi">neljäkymmentä</span></td></tr>
  <tr><td>12</td><td><span class="fi">kaksitoista</span></td><td>50</td><td><span class="fi">viisikymmentä</span></td></tr>
  <tr><td>20</td><td><span class="fi">kaksikymmentä</span></td><td>60</td><td><span class="fi">kuusikymmentä</span></td></tr>
  <tr><td>21</td><td><span class="fi">kaksikymmentäyksi</span></td><td>70</td><td><span class="fi">seitsemänkymmentä</span></td></tr>
  <tr><td>30</td><td><span class="fi">kolmekymmentä</span></td><td>80</td><td><span class="fi">kahdeksankymmentä</span></td></tr>
  <tr><td>100</td><td><span class="fi">sata</span></td><td>90</td><td><span class="fi">yhdeksänkymmentä</span></td></tr>
</table>`
    },
    {
      id: 'kohteliaisuus', otsikko: 'Comprar com educação', taso: 'essencial', hakuosa: 'h-fraasit',
      html: `
<ul class="esim">
  <li class="s" data-pt="O que vai ser? (o vendedor de mercado pergunta)">Mitä teille?</li>
  <li class="s" data-pt="Pode me dar pão?">Saisinko leipää?</li>
  <li class="s" data-pt="Dois pães doces, por favor.">Kaksi pullaa, kiitos.</li>
  <li class="s" data-pt="Aqui está. (ao entregar algo)">Ole hyvä.</li>
  <li class="s" data-pt="Precisa de sacola? – Não, obrigada.">Tarvitsetteko kassin? – Ei, kiitos.</li>
  <li class="s" data-pt="Tenha um bom dia! – Obrigado, igualmente!">Hyvää päivänjatkoa! – Kiitos, samoin!</li>
</ul>
<p><span class="fi">Saisinko</span> é uma forma educada do verbo <span class="fi">saada</span> (receber): “eu receberia…?”. Por enquanto, é frase pronta. Em finlandês, <span class="fi">kiitos</span> faz o papel de “por favor” no fim do pedido. <span class="fi">Mitä teille?</span> é a fórmula típica das bancas de mercado, educada e ainda muito usada; a pergunta mais comum hoje em lojas e cafés vem na lição 4.</p>`
    },
    {
      id: 'sudenkuopat3', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção',
      html: `
<ul>
  <li><b>Sem plural depois de número:</b> <span class="fi">kaksi pullaa</span>, nunca “<span class="pala">kaksi pullat</span>”. O português puxa para o plural; o finlandês, não.</li>
  <li><b>yksi euro × kaksi euroa:</b> com 1, forma básica; a partir de 2, partitivo.</li>
  <li><b>Sem vogal extra:</b> <span class="fi">Tokmanni</span>, não “<span class="pala">Tokki-Manni</span>”; <span class="fi">ostaa</span> (comprar) não é <span class="fi">osata</span> (saber fazer).</li>
  <li><b>Gradação:</b> o partitivo é forte. <span class="fi">leipää</span>, não “<span class="pala">leivää</span>”.</li>
</ul>`
    }
  ]
});
