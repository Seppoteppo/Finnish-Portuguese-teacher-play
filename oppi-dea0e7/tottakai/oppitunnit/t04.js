/* Tottakai, lição 4: 'Esburger ja Kallion kahvila (Passon jakso 4 Maian näkökulmasta). Oma materiaali, ei kirjan tekstiä.
   Kirjoitettu uudelleen 17.10.2026 (käyttäjä: ”A B separate, cut dialogue and follow the audit's recommendations”;
   AUDITOINTI_5 C3, M2, M3, M4c; TYONKULKU 11–15). Kaksi osaa omina sivuinaan:
   A (#t04) = Hesburger: dialogi 13 repliikkiä, Frases prontas, sanasto, ääntäminen (h kuuluu: Maian ”’Esburger”),
              tehtävät 1–3 (kuuntelu, kirjoitus, keskustelu).
   B (#t04-b) = Kallion kahvila: dialogi 13 repliikkiä (kakka/kakku-vitsi, TARINA.md), Frases prontas, loppuvokaali,
              kielioppi (kohteliaat pyynnöt valmiina fraaseina, partitiivi tilauksessa, verbityypit 2 ja 3),
              tehtävät 4–9 (ei kahta samaa tyyppiä peräkkäin), kulttuuri, Na rua, kotitehtävä, itsearvio.
   Kohteliaisuusmuodot (haluaisin, saisinko, voisinko) ovat valmiita fraaseja; konditionaali selitetään myöhemmin.
   Kaikki puhuvat kirjakieltä; puhekieli vain Na rua -nurkassa. Maian virheet: ’Esburgeriin (data-hairio, .pala)
   ja ”kakkaa” (data-hairio). Kuuntelutehtävissä äänite ei sisällä vastauksen paljastavaa sanaa (A5-M2: ei pronominia).
   Sivuhenkilöt olemassa olevilla rooleilla: Hesburgerin myyjä mies7, kahvilan myyjä nainen5. */
Kurssi.lisaa({
  id: 't04',
  lyhyt: '4',
  jakso: 'Lição 4',
  otsikko: 'Pedir com educação: haluaisin, saisinko e os verbos dos tipos 2 e 3',
  lahde: 'Tema: pedir comida e bebida no ’Esburger e num café de Kallio · Gramática: haluaisin, saisinko, voisinko + partitivo (frases prontas), verbos do tipo 2 (syödä, juoda) e do tipo 3 (tulla, mennä) · Pronúncia: o h finlandês se ouve (’Esburger × Hesburger) e a vogal do fim soa inteira (kakku × kakka)',
  aiheet: ['ruoka', 'raha', 'kaupunki', 'toiminta'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga, com fome e muito educada' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo, ri o dia inteiro' },
    hesemyyja: { nimi: 'Atendente', tyyppi: 'nainen', vaihto: 5, kuvaus: 'atendente do Hesburger: jovem, viseira azul com o H' },
    kahvila: { nimi: 'Atendente do café', tyyppi: 'nainen', vaihto: 5, kuvaus: 'atendente do café em Kallio; nem pisca' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; o rosto 😐 de sempre' }
  },

  sanasto: [
    'mitä saa olla', 'saada', 'voida', 'maksaa', 'kortti', 'entä', 'myyjä', 'nälkä',
    'syödä', 'juoda', 'myydä', 'tulla', 'mennä', 'kävellä', 'kuulla', 'nauraa',
    'kahvila', 'kahvi', 'tee', 'vesi', 'maito', 'mehu', 'juoma', 'pulla', 'korvapuusti', 'kakku', 'suklaakakku', 'kakka',
    'hampurilainen', 'Hesburger', 'Kallio', 'kassa', 'pieni', 'lämmin', 'herkullinen', 'taas'
  ],

  // Kielioppiosion koneelliset taulut: myönteinen, kielto ja kysymys (kirjakieli).
  verbiosat: 'myonteinen,kielto,kysymys',

  osat: [
    {
      id: 'a',
      otsikko: 'Parte A · No Hesburger',
      html: `
<ul class="tavoitteet">
  <li>Você pede com educação: <span class="fi">Haluaisin… Saisinko…? Voisinko…?</span></li>
  <li>Você põe a coisa pedida no partitivo: <span class="fi">kahvia, vettä, kaksi mehua</span>.</li>
  <li>Você pronuncia o <b>h</b> finlandês: <span class="fi">Hesburger</span>, não <span class="pala">’Esburger</span>.</li>
  <li>Na parte B: verbos do tipo 2 (<span class="fi">syödä → syön</span>) e do tipo 3 (<span class="fi">tulla → tulen</span>).</li>
</ul>
<p data-paikka="hesburger-helsinginkatu">Sábado, meio-dia. Maia e Jay passeiam por Kallio, o bairro vizinho de Sörnäinen. Em finlandês, <span class="fi">kallio</span> quer dizer “rocha”: um bairro com nome de geólogo. A Maia está com fome, e o Jay sabe aonde ir: ao <span class="fi">Hesburger</span>, a rede finlandesa de hambúrgueres. Só falta a Maia dizer o nome direito.</p>

<section class="osio" data-paikka="hesburger-helsinginkatu">
  <h2>Diálogo: <span class="fi">Hesburgerissa</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. A Maia erra o nome do restaurante: o que falta? E repare nas três formas educadas de pedir.</p>
  <div class="kpl" id="t04-dialogi-a" data-nimi="Ouvir a parte A">
    <figure class="tarinakuva" data-tarinakuva="t04-1" data-alt="Desenho: numa rua de Kallio ao meio-dia, a Maia põe a mão na barriga de fome e o Jay aponta, sorrindo, para uma lanchonete de hambúrgueres de fachada vermelha e azul, com um hambúrguer desenhado na vitrine."></figure>
    <p class="s" data-h="maia" data-pt="Jay, estou com fome!">Jay, minulla on nälkä!</p>
    <p class="s" data-h="jay" data-pt="Aonde a gente vai?">Mihin me menemme?</p>
    <p class="s" data-h="maia" data-hairio="’Esburgeriin → Hesburgeriin" data-pt="Ao ’Esburger! (errado: Hesburger)"><span class="pala">’Esburgeriin</span>!</p>
    <p class="s" data-h="jay" data-pt="Ao Hesburger! Em finlandês o h sempre se ouve.">Hesburgeriin! Suomeksi <span class="pala">h</span> kuuluu aina.</p>
    <p class="s" data-h="maia" data-puhu="He-, He-, Hesburgeriin!" data-pt="H… h… Ao Hesburger!"><span class="pala">H… h…</span> Hesburgeriin!</p>
    <p class="s" data-h="hesemyyja" data-pt="Oi! O que vai ser?">Hei! Mitä saa olla?</p>
    <p class="s" data-h="maia" data-pt="Oi! Eu queria dois hambúrgueres.">Hei! Haluaisin kaksi hampurilaista.</p>
    <p class="s" data-h="hesemyyja" data-pt="Certo. E para beber?">Selvä. Entä juoma?</p>
    <p class="s" data-h="jay" data-pt="Pode me dar dois sucos?">Saisinko kaksi mehua?</p>
    <figure class="tarinakuva" data-tarinakuva="t04-2" data-alt="Desenho: dentro da lanchonete, sob painéis azuis com hambúrgueres e copos, a atendente de viseira azul espera atrás do balcão vermelho com a bandeja de dois hambúrgueres e dois sucos, e a Maia encosta o cartão na maquininha enquanto o Jay olha."></figure>
    <p class="s" data-h="hesemyyja" data-pt="No total, vinte euros.">Yhteensä kaksikymmentä euroa.</p>
    <p class="s" data-h="maia" data-pt="Posso pagar com cartão?">Voisinko maksaa kortilla?</p>
    <p class="s" data-h="hesemyyja" data-pt="Pode. Aqui está.">Kyllä. Ole hyvä.</p>
    <p class="s" data-h="jay" data-pt="E depois, bolo, se você quiser? Eu conheço um café bom.">Ja sitten kakkua, jos sinä haluat? Minä tunnen hyvän kahvilan.</p>
    <p class="s" data-h="maia" data-pt="Vamos!">Mennään!</p>
  </div>
  <aside class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <p>Guarde como blocos. Depois do · está a lição em que a gramática vem.</p>
    <ul>
      <li><span class="fi">Minulla on nälkä.</span> Estou com fome (literalmente “comigo há fome”). · <span class="fi">minulla on</span>: lição 5</li>
      <li><span class="fi">Haluaisin…</span> Eu queria… · <span class="fi">Saisinko…?</span> Pode me dar…? (literalmente “eu receberia?”) · <span class="fi">Voisinko…?</span> Eu poderia…? Posso…? · a forma educada (condicional): lição 15</li>
      <li><span class="fi">Mitä saa olla?</span> O que vai ser? A pergunta mais comum no balcão. · frase fixa</li>
      <li><span class="fi">Hesburgeriin!</span> Ao Hesburger! (para onde?) · lição 6</li>
      <li><span class="fi">maksaa kortilla</span> pagar com cartão · lição 7</li>
      <li><span class="fi">Ja sitten kakkua, jos sinä haluat?</span> E depois, bolo, se você quiser? · <span class="fi">jos</span> = se: lição 9; a frase com <span class="fi">jos</span> inteira: lição 20</li>
      <li><span class="fi">Minä tunnen hyvän kahvilan.</span> Eu conheço um café bom. · <span class="fi">hyvän kahvilan</span>, o objeto: lição 12</li>
      <li><span class="fi">Mennään!</span> Vamos! · a forma do verbo (passivo): lição 20</li>
    </ul>
  </aside>
</section>

<section class="osio">
  <h2>Vocabulário temático</h2>
  <div class="teema" data-otsikko="Para pedir no balcão" data-sanat="hampurilainen,mehu,kahvi,tee,vesi,kakku,pulla,maksaa,kortti,nälkä"></div>
</section>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>Pronúncia: o h se ouve</h2>
  <p>Em português o h escrito é mudo: “hora”, “hotel”, “Hélio”. Por isso a Maia disse <span class="pala">’Esburger</span>. Em finlandês, o <b>h sempre soa</b>, como o h do inglês “house”: um sopro de ar. No começo da palavra (<span class="fi">Hesburger, Helsinki, hei</span>) e no meio (<span class="fi">mihin, lahti</span>).</p>
  <p>Ouça os pares. Sem o h, a palavra vira outra:</p>
  <table class="taivutus">
    <tr><th>sem h</th><th>com h</th></tr>
    <tr><td><span class="fi">aamu</span><span class="kaannos" lang="pt-BR">manhã</span></td><td><span class="fi">haamu</span><span class="kaannos" lang="pt-BR">fantasma</span></td></tr>
    <tr><td><span class="fi">ovi</span><span class="kaannos" lang="pt-BR">porta</span></td><td><span class="fi">hovi</span><span class="kaannos" lang="pt-BR">corte (do rei)</span></td></tr>
    <tr><td><span class="fi" data-l="auttaa:imper.2s">auta</span><span class="kaannos" lang="pt-BR">ajude!</span></td><td><span class="fi">hauta</span><span class="kaannos" lang="pt-BR">túmulo</span></td></tr>
  </table>
  <p>Ouça e repita. Sopre de leve em cada h:</p>
  <ul class="esim">
    <li class="s" data-pt="Oi, Hiisi!">Hei, Hiisi!</li>
    <li class="s" data-pt="Ao Hesburger!">Hesburgeriin!</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle data-paikka="hesburger-kassa">
  <h2>Exercícios da parte A</h2>
  <div class="peli-upotus" data-peli="esburger"></div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>1. Ouça: com h ou sem h?</h3>
    <p class="ohje">Aperte ▶ e escolha a palavra que você ouviu.</p>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="haamu" data-oikea="haamu">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">aamu</button><button type="button">haamu</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="ovi" data-oikea="ovi">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">ovi</button><button type="button">hovi</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="hauta" data-oikea="hauta">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">auta</button><button type="button">hauta</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="ei" data-oikea="ei">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">hei</button><button type="button">ei</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Faça o pedido: qual forma?</h3>
    <p class="ohje">Depois de <span class="fi">haluaisin</span> e <span class="fi">saisinko</span>, a coisa pedida vai para o partitivo (<span class="fi">kahvia, vettä</span>), como depois de um número (<span class="fi">kaksi mehua</span>, lição 3). Escolha a forma certa.</p>
    <div class="valinta" data-sanakuva="vesi" data-oikea="vettä">
      <p class="kysymys"><span class="fi">Saisinko ___?</span> (água)</p>
      <div class="vaihtoehdot"><button type="button">vesi</button><button type="button">vettä</button><button type="button">veden</button></div>
    </div>
    <div class="valinta" data-sanakuva="kakku" data-oikea="kakkua">
      <p class="kysymys"><span class="fi">Haluaisin ___.</span> (bolo)</p>
      <div class="vaihtoehdot"><button type="button">kakun</button><button type="button">kakku</button><button type="button">kakkua</button></div>
    </div>
    <div class="valinta" data-sanakuva="hampurilainen" data-oikea="hampurilaista">
      <p class="kysymys"><span class="fi">Kaksi ___, kiitos.</span> (hambúrgueres)</p>
      <div class="vaihtoehdot"><button type="button">hampurilainen</button><button type="button">hampurilaista</button><button type="button">hampurilaisen</button></div>
    </div>
    <div class="valinta" data-sanakuva="tee" data-oikea="teetä">
      <p class="kysymys"><span class="fi">Haluaisin ___.</span> (chá)</p>
      <div class="vaihtoehdot"><button type="button">teetä</button><button type="button">tee</button><button type="button" data-l="tee:gen">teen</button></div>
    </div>
    <div class="valinta" data-sanakuva="mehu" data-oikea="mehua">
      <p class="kysymys"><span class="fi">Saisinko kaksi ___?</span> (sucos)</p>
      <div class="vaihtoehdot"><button type="button">mehun</button><button type="button">mehua</button><button type="button">mehu</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>3. Responda ao atendente</h3>
    <p class="ohje">Você está no balcão do Hesburger. Responda em voz alta antes de abrir o modelo.</p>
    <details class="vastaus"><summary lang="fi-FI">Hei! Mitä saa olla?</summary><p class="s" data-pt="Eu queria dois hambúrgueres, por favor.">Haluaisin kaksi hampurilaista, kiitos.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Entä juoma?</summary><p class="s" data-pt="Pode me dar água?">Saisinko vettä?</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mehua?</summary><p class="s" data-pt="Não, obrigada. Eu queria chá.">Ei, kiitos. Haluaisin teetä.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Yhteensä kymmenen euroa.</summary><p class="s" data-pt="Posso pagar com cartão?">Voisinko maksaa kortilla?</p></details>
  </div>

  <div class="apuhahmo peli-mainos">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Quer praticar mais pedidos como este? No Treino tem o balcão inteiro: o café, o almoço para levar, o caixa e o restaurante. <span class="peli-mainos-linkit"><a class="pieni-nappi" href="#treino-situacoes"><span class="emoji">☕</span> Treino: Situações</a></span></p>
  </div>
</section>
`
    },
    {
      id: 'b',
      otsikko: 'Parte B · No café de Kallio',
      html: `
<ul class="tavoitteet">
  <li>Você pede no café com <span class="fi">Saisinko…?</span> e o partitivo: <span class="fi">kahvia</span>, <span class="fi">kakkua</span>.</li>
  <li>Você conjuga verbos do tipo 2 (<span class="fi">syödä → syön</span>) e do tipo 3 (<span class="fi">tulla → tulen</span>).</li>
  <li>Você pronuncia a vogal final inteira: <span class="fi">kakku</span>, não <span class="fi">kakka</span>.</li>
</ul>

<p data-paikka="helsinginkatu-linnanmaki">Depois do hambúrguer, o Jay leva a Maia a um café pequeno de Kallio. Ela pede com muito cuidado… e escolhe a vogal errada. A atendente nem pisca. O Jay ri o dia inteiro.</p>

<section class="osio" data-paikka="kallio-hameentie-ilta">
  <h2>Diálogo: <span class="fi">Kallion kahvilassa</span></h2>
  <p class="ohje">Ouça primeiro sem tradução. O que a Maia pede? E o que ela queria pedir?</p>
  <div class="kpl" id="t04-dialogi-b" data-nimi="Ouvir a parte B">
    <p class="s" data-h="kertoja" data-pt="O café é pequeno e quentinho. A atendente espera.">Kahvila on pieni ja lämmin. Myyjä odottaa.</p>
    <p class="s" data-h="kahvila" data-pt="Oi! O que vai ser?">Hei! Mitä saa olla?</p>
    <p class="s" data-h="jay" data-pt="Pode me dar café e pão doce?">Saisinko kahvia ja pullaa?</p>
    <p class="s" data-h="kahvila" data-pt="Claro. E você?">Kyllä. Entä sinä?</p>
    <p class="s" data-h="maia" data-hairio="kakkaa → kakkua" data-pt="Eu queria chá e… cocô. (errado: kakkua = bolo)">Haluaisin teetä ja… kakkaa.</p>
    <p class="s" data-h="kertoja" data-pt="A atendente não ri. O Jay ri.">Myyjä ei naura. Jay nauraa.</p>
    <p class="s" data-h="kahvila" data-pt="Bolo de chocolate?">Suklaakakkua?</p>
    <p class="s" data-h="maia" data-pt="Sim, obrigada!">Kyllä, kiitos!</p>
    <p class="s" data-h="kahvila" data-pt="Mais alguma coisa?">Tuleeko muuta?</p>
    <p class="s" data-h="maia" data-pt="Só isso.">Ei <span data-l="muu:part">muuta</span>.</p>
    <p class="s" data-h="kertoja" data-pt="A Maia toma chá e come bolo. O Jay toma café e ri.">Maia juo teetä ja syö kakkua. Jay juo kahvia ja nauraa.</p>
    <p class="s" data-h="maia" data-pt="Jay, por que você está rindo?">Jay, miksi sinä naurat?</p>
    <p class="s" data-h="jay" data-pt="“Kakkaa”! Kakka é cocô. Kakku é bolo!">”<span class="pala">Kakkaa</span>”! Kakka on <span lang="pt-BR">cocô</span>. Kakku on <span lang="pt-BR">bolo</span>!</p>
    <p class="s" data-h="maia" data-pt="Ai, não! Kakkua, kakkua, kakkua… Mas este bolo é uma delícia!">Voi ei! Kakkua, kakkua, kakkua… Mutta tämä kakku on herkullinen!</p>
    <p class="s" data-h="jay" data-pt="E a atendente não ri! Amanhã a gente vem aqui de novo.">Ja myyjä ei naura! Huomenna me tulemme tänne taas.</p>
  </div>
  <aside class="fraasit-laatikko">
    <h3>Frases prontas deste diálogo</h3>
    <ul>
      <li><span class="fi">Saisinko kahvia ja pullaa?</span> Pode me dar café e pão doce? · a forma educada (condicional): lição 15</li>
      <li><span class="fi">Haluaisin teetä.</span> Eu queria chá. · lição 15</li>
      <li><span class="fi">Tuleeko <span data-l="muu:part">muuta</span>? – Ei <span data-l="muu:part">muuta</span>.</span> Mais alguma coisa? – Só isso. · <span class="fi">muuta</span> = outra coisa, o partitivo de <span class="fi">muu</span> (outro)</li>
      <li><span class="fi">Voi ei!</span> Ai, não! · frase fixa</li>
      <li><span class="fi">tänne</span> para cá (para onde?) · lição 6</li>
    </ul>
  </aside>
</section>

<section class="osio" data-osa="gramatica" data-paikka="brahenkentta-syksy">
  <h2>Gramática</h2>

  <h3>1. Pedir com educação: a educação vai no verbo</h3>
  <p>O finlandês não tem uma palavra para “por favor”. A educação vai <b>na forma do verbo</b>, como o nosso “eu queria” ou “poderia”, e num <span class="fi">kiitos</span> no fim. As três formas vêm de verbos que você já conhece: <span class="fi">haluaisin</span> de <span class="fi">haluta</span> (querer), <span class="fi">saisinko</span> de <span class="fi">saada</span> (receber), <span class="fi">voisinko</span> de <span class="fi">voida</span> (poder). Por enquanto, use como frases prontas; a explicação vem mais tarde.</p>

  <h3>2. O que vem depois: o partitivo</h3>
  <p>A coisa pedida <b>sem quantidade exata</b> (café, chá, água, bolo) vai para o partitivo, e depois de um número a partir de 2 também. A palavra ganha <span class="fi pala">-a/-ä</span> ou <span class="fi pala">-ta/-tä</span>: <span class="fi">kahvi → kahvia</span>, <span class="fi">kakku → kakkua</span>, <span class="fi">tee → teetä</span>, <span class="fi">hampurilainen → kaksi hampurilaista</span>. A água é irregular; decore: <span class="fi">vesi → vettä</span>.</p>
  <div class="huomio">
    <p><b>Erro típico do brasileiro:</b> pedir com a palavra “inteira”, como em português: <span class="pala">Haluaisin kahvi</span>. Ponha o partitivo: <span class="fi">Haluaisin kahvia.</span></p>
    <p><b>Pronúncia: a vogal do fim soa inteira.</b> Em português ela fica fraca (“bolo” soa “bolu”); em finlandês ela muitas vezes é a própria gramática: <span class="fi">kakkua</span> é bolo, <span class="fi">kakkaa</span> é cocô. O mesmo com <span class="fi">pullaa</span> (pão doce) e <span class="fi">pulloa</span> (garrafa).</p>
  </div>

  <h3>3. Verbos do tipo 2 e do tipo 3</h3>
  <p>O infinitivo diz o tipo. <b>Tipo 1</b> tem duas vogais no fim (<span class="fi">puhua</span>). <b>Tipo 2</b> termina em <span class="fi pala">-da/-dä</span>: <span class="fi">syödä, juoda, saada, voida, myydä</span>. Tire o <span class="fi pala">-da/-dä</span> e cole a terminação; na 3ª pessoa do singular não se acrescenta nada: <span class="fi">hän syö</span>.</p>
  <p><b>Tipo 3</b> termina em consoante dupla + <span class="fi pala">a/ä</span> ou em <span class="fi pala">-sta/-stä</span>: <span class="fi">tulla, mennä, kuulla, kävellä, pestä</span>. Tire as duas últimas letras e ponha <span class="fi pala">-e</span>: <span class="fi">tulla → tule-</span>, <span class="fi">pestä → pese-</span>. Na 3ª do singular o <span class="fi pala">e</span> fica longo: <span class="fi">hän tulee</span>.</p>
  <table class="taivutus">
    <tr><th>tipo 2: <span class="fi">syödä</span> (comer)</th><th>tipo 3: <span class="fi">tulla</span> (vir)</th></tr>
    <tr><td><span class="fi">minä syön</span><span class="kaannos" lang="pt-BR">eu como</span></td><td><span class="fi">minä tulen</span><span class="kaannos" lang="pt-BR">eu venho</span></td></tr>
    <tr><td><span class="fi">sinä syöt</span><span class="kaannos" lang="pt-BR">você come</span></td><td><span class="fi">sinä tulet</span><span class="kaannos" lang="pt-BR">você vem</span></td></tr>
    <tr><td><span class="fi">hän syö</span><span class="kaannos" lang="pt-BR">ele, ela come</span></td><td><span class="fi">hän tulee</span><span class="kaannos" lang="pt-BR">ele, ela vem</span></td></tr>
    <tr><td><span class="fi">me syömme</span><span class="kaannos" lang="pt-BR">nós comemos</span></td><td><span class="fi">me tulemme</span><span class="kaannos" lang="pt-BR">nós vimos</span></td></tr>
    <tr><td><span class="fi">te syötte</span><span class="kaannos" lang="pt-BR">vocês comem</span></td><td><span class="fi">te tulette</span><span class="kaannos" lang="pt-BR">vocês vêm</span></td></tr>
    <tr><td><span class="fi">he syövät</span><span class="kaannos" lang="pt-BR">eles, elas comem</span></td><td><span class="fi">he tulevat</span><span class="kaannos" lang="pt-BR">eles, elas vêm</span></td></tr>
  </table>
  <div class="muista">
    <p><b>Lembre:</b> as terminações de pessoa são sempre as mesmas; só o radical muda. O negativo é o radical sem terminação, nos dois tipos: <span class="fi">en syö, en juo, en tule, en mene</span>. E <span class="fi">olla</span> também é do tipo 3, só que irregular: <span class="fi">olen, olet</span>, mas <span class="fi">hän on, he ovat</span>.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle data-paikka="brahenkentta-syksy">
  <h2>Exercícios da parte B</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Complete com o verbo</h3>
    <p class="ohje">O infinitivo está entre parênteses. Tipo 2: tire <span class="fi pala">-da/-dä</span>. Tipo 3: tire duas letras e ponha <span class="fi pala">-e</span>.</p>
    <div class="aukot" lang="fi-FI">
      <p>Minä <span class="aukko" data-oikea="juon"></span> kahvia. <span data-ei-kuplaa>(juoda)</span></p>
      <p>Sinä <span class="aukko" data-oikea="syöt"></span> kakkua. <span data-ei-kuplaa>(syödä)</span></p>
      <p>Maia <span class="aukko" data-oikea="menee"></span> kahvilaan. <span data-ei-kuplaa>(mennä)</span></p>
      <p>Me <span class="aukko" data-oikea="tulemme"></span> huomenna. <span data-ei-kuplaa>(tulla)</span></p>
      <p>Te <span class="aukko" data-oikea="juotte"></span> teetä. <span data-ei-kuplaa>(juoda)</span></p>
      <p>He <span class="aukko" data-oikea="kävelevät"></span> Kalliossa. <span data-ei-kuplaa>(kävellä)</span></p>
      <p>Myyjä <span class="aukko" data-oikea="myy"></span> pullaa. <span data-ei-kuplaa>(myydä)</span></p>
      <p>Jay ei <span class="aukko" data-oikea="tule"></span> tänään. <span data-ei-kuplaa>(tulla)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Ouça: a vogal do fim</h3>
    <p class="ohje">A vogal do fim muda tudo. Aperte ▶ e escolha o que você ouviu.</p>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="Haluaisin kakkua." data-oikea="kakkua">
      <p class="kysymys">O que a pessoa pediu?</p>
      <div class="vaihtoehdot"><button type="button">kakkua</button><button type="button">kakkaa</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="Saisinko pullaa?" data-oikea="pullaa">
      <p class="kysymys">O que a pessoa pediu?</p>
      <div class="vaihtoehdot"><button type="button">pulloa</button><button type="button">pullaa</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="tulee" data-oikea="tulee">
      <p class="kysymys">Vogal longa ou curta no fim?</p>
      <div class="vaihtoehdot"><button type="button">tulee</button><button type="button">tule</button></div>
    </div>
    <div class="valinta" data-sanakuva="kuuntele" data-kuuntele="mene" data-oikea="mene">
      <p class="kysymys">Vogal longa ou curta no fim?</p>
      <div class="vaihtoehdot"><button type="button">menee</button><button type="button">mene</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Que tipo de verbo?</h3>
    <p class="ohje">Olhe o fim do infinitivo.</p>
    <div class="valinta" data-sanakuva="juoda" data-oikea="tipo 2">
      <p class="kysymys"><span class="fi">juoda</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">tipo 1</button><button type="button">tipo 2</button><button type="button">tipo 3</button></div>
    </div>
    <div class="valinta" data-sanakuva="kavella" data-oikea="tipo 3">
      <p class="kysymys"><span class="fi">kävellä</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">tipo 1</button><button type="button">tipo 2</button><button type="button">tipo 3</button></div>
    </div>
    <div class="valinta" data-sanakuva="istua" data-oikea="tipo 1">
      <p class="kysymys"><span class="fi">istua</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">tipo 1</button><button type="button">tipo 2</button><button type="button">tipo 3</button></div>
    </div>
    <div class="valinta" data-sanakuva="myyda" data-oikea="tipo 2">
      <p class="kysymys"><span class="fi">myydä</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">tipo 1</button><button type="button">tipo 2</button><button type="button">tipo 3</button></div>
    </div>
    <div class="valinta" data-sanakuva="pesta" data-oikea="tipo 3">
      <p class="kysymys"><span class="fi">pestä</span></p>
      <div class="vaihtoehdot" lang="pt-BR"><button type="button">tipo 1</button><button type="button">tipo 2</button><button type="button">tipo 3</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>7. Leia as mensagens do Jay e do Hiisi</h3>
    <p class="ohje">No fim da tarde, o Jay conta tudo para o irmão. Leia e responda.</p>
    <div class="chat" data-otsikko="Hiisi" data-paiva="lauantai" data-mina="jay">
      <p data-h="jay" data-aika="16.02" data-pt="Hiisi! Estamos num café em Kallio.">Hiisi! Me <span data-l="olla#2">olemme</span> kahvilassa Kalliossa.</p>
      <p data-h="hiisi" data-aika="16.03" data-pt="E?">Ja?</p>
      <p data-h="jay" data-aika="16.03" data-pt="A Maia quer cocô no café! Não bolo. Cocô!">Maia haluaa kahvilassa kakkaa! Ei kakkua. Kakkaa!</p>
      <p data-h="hiisi" data-aika="16.05" data-pt="😐 O que a atendente diz?">😐 Mitä myyjä sanoo?</p>
      <p data-h="jay" data-aika="16.06" data-pt="Nada. Ela não ri. Ela diz: bolo de chocolate?">Ei mitään. Hän ei naura. Hän sanoo: suklaakakkua?</p>
      <p data-h="hiisi" data-aika="16.07" data-pt="Boa atendente. Profissional.">Hyvä myyjä. Ammattilainen.</p>
      <p data-h="jay" data-aika="16.08" data-pt="Eu ainda estou rindo.">Minä nauran vielä.</p>
      <p data-h="hiisi" data-aika="16.10" data-pt="Eu não rio. 😐">Minä en naura. 😐</p>
    </div>
    <div class="valinta" data-sanakuva="olankohautus" data-oikea="kahvilassa">
      <p class="kysymys"><span class="fi">Missä Jay ja Maia <span data-l="olla#2">ovat</span>?</span></p>
      <div class="vaihtoehdot"><button type="button">Hesburgerissa</button><button type="button">kahvilassa</button><button type="button">kotona</button></div>
    </div>
    <div class="valinta" data-sanakuva="kertoa" data-oikea="kakkaa">
      <p class="kysymys"><span class="fi">Mitä Maia sanoo kahvilassa?</span></p>
      <div class="vaihtoehdot"><button type="button">kakkua</button><button type="button">kakkaa</button><button type="button">pullaa</button></div>
    </div>
    <div class="valinta" data-sanakuva="nauraa" data-oikea="Ei naura.">
      <p class="kysymys"><span class="fi">Nauraako myyjä?</span></p>
      <div class="vaihtoehdot"><button type="button">Nauraa.</button><button type="button">Ei naura.</button><button type="button">En naura.</button></div>
    </div>
    <div class="valinta" data-sanakuva="nauraa" data-oikea="Jay">
      <p class="kysymys"><span class="fi">Kuka nauraa vielä?</span></p>
      <div class="vaihtoehdot"><button type="button">myyjä</button><button type="button">Hiisi</button><button type="button">Jay</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>8. Ditado</h3>
    <p class="ohje">Aperte ▶ e escreva o que você ouviu.</p>
    <div class="sanelu" data-puhu="Haluaisin teetä."></div>
    <div class="sanelu" data-puhu="Saisinko vettä?"></div>
    <div class="sanelu" data-puhu="Me syömme kakkua."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>9. Traduza para o finlandês</h3>
    <div class="kaanna"><p class="pt">Eu queria café.</p><p class="s" data-pt="Eu queria café.">Haluaisin kahvia.</p></div>
    <div class="kaanna"><p class="pt">Posso pagar com cartão?</p><p class="s" data-pt="Posso pagar com cartão?">Voisinko maksaa kortilla?</p></div>
    <div class="kaanna"><p class="pt">Dois chás, por favor.</p><p class="s" data-pt="Dois chás, por favor.">Kaksi teetä, kiitos.</p></div>
    <div class="kaanna"><p class="pt">Eles comem e bebem.</p><p class="s" data-pt="Eles comem e bebem.">He syövät ja juovat.</p></div>
    <div class="kaanna"><p class="pt">Você vem amanhã?</p><p class="s" data-pt="Você vem amanhã?">Tuletko sinä huomenna?</p></div>
    <div class="kaanna"><p class="pt">Eu não tomo café.</p><p class="s" data-pt="Eu não tomo café.">En juo kahvia.</p></div>
  </div>
</section>

<aside class="kulttuuri" data-paikka="brahenkentta-syksy">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Kahvi ja pulla: o país do café</h3>
  <p>Os finlandeses estão entre os povos que mais tomam café no mundo: várias xícaras por dia, de manhã, no trabalho e à tarde. Muitos contratos de trabalho garantem uma pausa para o café (<span class="fi">kahvi</span>). Com o café vem a <span class="fi">pulla</span>, um pão doce com cardamomo, e o <span class="fi">korvapuusti</span>, um rolinho de canela cujo nome quer dizer “tapa na orelha”.</p>
  <p>No café, quase sempre se pede e se paga <b>no balcão</b>, no caixa (<span class="fi">kassa</span>); não há garçom na mesa. E o rosto sério da atendente? Não é falta de educação. No atendimento finlandês ninguém puxa conversa nem faz cara de espanto: você pede, paga, recebe. Até quando alguém pede <span class="fi">kakkaa</span>.</p>
  <p>O <span class="fi">Hesburger</span> é uma rede finlandesa de hambúrgueres, de Turku, com restaurantes no país todo. Para o Capivara e o Peixe-boi, é o melhor restaurante do planeta.</p>
  <figure class="kuva" data-kuva="hesburger-hakaniemi"></figure>
</aside>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Mä otan…, saisinks…: o pedido da rua</h3>
  <p>No balcão, muitos finlandeses pedem mais curto: <span class="fi">mä otan…</span> (eu vou querer) ou <span class="fi" data-rekisteri="puhe">saisinks</span> no lugar de <span class="fi">saisinko</span>. Você pode sempre pedir na forma padrão; só é bom <b>reconhecer</b>:</p>
  <table class="taivutus">
    <tr><th>padrão</th><th>na rua</th><th>português</th></tr>
    <tr><td><span class="fi">Minä otan teetä.</span></td><td><span class="fi" data-rekisteri="puhe">Mä otan teetä.</span></td><td>Vou querer chá.</td></tr>
    <tr><td><span class="fi">Saisinko vettä?</span></td><td><span class="fi" data-rekisteri="puhe">Saisinks vettä?</span></td><td>Me dá uma água?</td></tr>
    <tr><td><span class="fi">Yksi kahvi, kiitos.</span></td><td><span class="fi" data-rekisteri="puhe">Yks kahvi, kiitos.</span></td><td>Um café, por favor.</td></tr>
    <tr><td><span class="fi">Kiitos!</span></td><td><span class="fi" data-rekisteri="puhe">Kiitti!</span></td><td>Valeu!</td></tr>
  </table>
  <p class="s" data-kirja="Minä otan kahvia ja pullaa." data-pt="Vou querer café e pão doce.">Mä otan kahvia ja pullaa.</p>
</aside>

<section class="osio" data-ei-sivulle data-paikka="brahenkentta-syksy">
  <h2>Para terminar</h2>
  <div class="kotitehtava" data-id="t04">
    <h3>Lição de casa</h3>
    <p>Você está num café em Kallio. Escreva o seu pedido com três frases educadas (<span class="fi">haluaisin…</span>, <span class="fi">saisinko…?</span>, <span class="fi">voisinko…?</span>) e mais duas frases sobre o que você come e bebe todo dia (<span class="fi">syön…</span>, <span class="fi">juon…</span>). Lembre do partitivo. Depois leia em voz alta, com o h soprado e a vogal do fim inteira.</p>
    <details class="malli"><summary>Resposta modelo</summary>
      <p class="s" data-pt="Oi! Eu queria café.">Hei! Haluaisin kahvia.</p>
      <p class="s" data-pt="Pode me dar pão doce?">Saisinko pullaa?</p>
      <p class="s" data-pt="Posso pagar com cartão?">Voisinko maksaa kortilla?</p>
      <p class="s" data-pt="Eu sempre como pão doce.">Minä syön aina pullaa.</p>
      <p class="s" data-pt="Eu não tomo leite. Eu tomo chá.">En juo maitoa. Juon teetä.</p>
    </details>
  </div>

  <ul class="itsearvio" data-id="t04">
    <li>Sei pedir com haluaisin, saisinko e voisinko.</li>
    <li>Ponho a coisa pedida no partitivo: kahvia, teetä, kakkua.</li>
    <li>Sei conjugar verbos dos tipos 2 e 3: syön, juon, tulen, menen.</li>
    <li>Pronuncio o h: Hesburger, Helsinki.</li>
    <li>Peço bolo, não cocô: a vogal do fim soa inteira (kakkua).</li>
  </ul>
</section>
`
    }
  ],

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md, kolmikerroksinen kielioppi). */
  kielioppi: [
    {
      id: 'kohteliaisuus', otsikko: 'Pedir com educação: haluaisin, saisinko, voisinko', taso: 'frase pronta', hakuosa: 'h-fraasit', treeni: 't04-tilaus',
      html: `
<p>Três formas educadas para pedir, como “eu queria” e “poderia” do português. São do <b>condicional</b>; por enquanto, use como frases prontas.</p>
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">haluaisin</span><span class="kaannos" lang="pt-BR">de haluta</span></td><td>eu queria, eu gostaria</td></tr>
  <tr><td><span class="fi">saisinko?</span><span class="kaannos" lang="pt-BR">de saada</span></td><td>pode me dar?, eu poderia ter?</td></tr>
  <tr><td><span class="fi">voisinko?</span><span class="kaannos" lang="pt-BR">de voida</span></td><td>eu poderia?, posso?</td></tr>
</table>
<ul class="esim">
  <li class="s" data-pt="Eu queria café.">Haluaisin kahvia.</li>
  <li class="s" data-pt="Pode me dar água?">Saisinko vettä?</li>
  <li class="s" data-pt="Posso pagar com cartão?">Voisinko maksaa kortilla?</li>
</ul>
<p>Não existe “por favor”: a gentileza está no verbo e num <span class="fi">kiitos</span> no fim.</p>`
    },
    {
      id: 'partitiivi4', otsikko: 'O partitivo no pedido', taso: 'essencial', hakuosa: 'h-partitiivi', treeni: 't04-tilaus',
      html: `
<p>Depois de <span class="fi">haluaisin</span> e <span class="fi">saisinko</span>, a coisa sem quantidade exata vai para o <b>partitivo</b>. Depois de um número a partir de 2, também (lição 3).</p>
<table class="taivutus">
  <tr><th>palavra</th><th>partitivo</th></tr>
  <tr><td><span class="fi">kahvi</span><span class="kaannos" lang="pt-BR">café</span></td><td><span class="fi">kahvia</span></td></tr>
  <tr><td><span class="fi">maito</span><span class="kaannos" lang="pt-BR">leite</span></td><td><span class="fi">maitoa</span></td></tr>
  <tr><td><span class="fi">kakku</span><span class="kaannos" lang="pt-BR">bolo</span></td><td><span class="fi">kakkua</span></td></tr>
  <tr><td><span class="fi">pulla</span><span class="kaannos" lang="pt-BR">pão doce</span></td><td><span class="fi">pullaa</span></td></tr>
  <tr><td><span class="fi">tee</span><span class="kaannos" lang="pt-BR">chá</span></td><td><span class="fi">teetä</span></td></tr>
  <tr><td><span class="fi">vesi</span><span class="kaannos" lang="pt-BR">água</span></td><td><span class="fi">vettä</span></td></tr>
  <tr><td><span class="fi">hampurilainen</span><span class="kaannos" lang="pt-BR">hambúrguer</span></td><td><span class="fi">kaksi hampurilaista</span></td></tr>
</table>
<p>Regra curta para as palavras desta lição: vogal curta no fim → <span class="fi pala">-a/-ä</span> (<span class="fi">kahvia, kakkua</span>); vogal longa → <span class="fi pala">-ta/-tä</span> (<span class="fi">teetä</span>); <span class="fi pala">-nen</span> → <span class="fi pala">-sta/-stä</span> (<span class="fi">hampurilaista</span>). Palavras como <span class="fi">vesi → vettä</span> é melhor decorar.</p>`
    },
    {
      id: 'tyyppi2', otsikko: 'Verbos do tipo 2: -da/-dä', taso: 'essencial', hakuosa: 'h-verbityypit', treeni: 't04-tyypit',
      html: `
<p><b>Reconhecer:</b> o infinitivo termina em <span class="fi pala">-da/-dä</span>: <span class="fi">syödä, juoda, saada, voida, myydä</span>.</p>
<p><b>Conjugar:</b> tire <span class="fi pala">-da/-dä</span> e cole a terminação. Na 3ª do singular, nada a mais: <span class="fi">hän syö, hän juo</span>. Os verbos <span class="fi">tehdä</span> e <span class="fi">nähdä</span> também são do tipo 2, mas irregulares (<span class="fi">teen, näen</span>).</p>
<div class="taivutustaulu" data-verbi="syödä" data-osat="myonteinen,kielto" data-selite="comer · sem gradação"></div>
<div class="taivutustaulu" data-verbi="juoda" data-osat="myonteinen,kielto" data-selite="beber · sem gradação"></div>`
    },
    {
      id: 'tyyppi3', otsikko: 'Verbos do tipo 3: -lla, -nna, -rra, -sta', taso: 'essencial', hakuosa: 'h-verbityypit', treeni: 't04-tyypit',
      html: `
<p><b>Reconhecer:</b> consoante dupla + <span class="fi pala">a/ä</span>, ou <span class="fi pala">-sta/-stä</span>: <span class="fi">tulla, mennä, kuulla, kävellä, pestä</span>.</p>
<p><b>Conjugar:</b> tire as duas últimas letras, ponha <span class="fi pala">-e</span> e cole a terminação: <span class="fi">tulla → tule- → tulen</span>. Na 3ª do singular o <span class="fi pala">e</span> dobra: <span class="fi">hän tulee</span>. Negativo: <span class="fi">en tule</span>.</p>
<div class="taivutustaulu" data-verbi="tulla" data-osat="myonteinen,kielto" data-selite="vir · sem gradação"></div>
<div class="taivutustaulu" data-verbi="mennä" data-osat="myonteinen,kysymys" data-selite="ir · sem gradação"></div>
<p>Mais tarde você vai ver verbos do tipo 3 com gradação. Eles são o <b>contrário</b> do tipo 1: o infinitivo tem a consoante fraca e as pessoas, a forte.</p>`
    },
    {
      id: 'aanne-h', otsikko: 'Pronúncia: o h se ouve', taso: 'essencial', hakuosa: 'h-sudenkuopat', treeni: 't04-h',
      html: `
<p>Em português o h é mudo; em finlandês, <b>sempre soa</b>, como um sopro: <span class="fi">Hesburger</span>, não <span class="pala">’Esburger</span>.</p>
<table class="taivutus">
  <tr><th>sem h</th><th>com h</th></tr>
  <tr><td><span class="fi">aamu</span><span class="kaannos" lang="pt-BR">manhã</span></td><td><span class="fi">haamu</span><span class="kaannos" lang="pt-BR">fantasma</span></td></tr>
  <tr><td><span class="fi">ovi</span><span class="kaannos" lang="pt-BR">porta</span></td><td><span class="fi">hovi</span><span class="kaannos" lang="pt-BR">corte (do rei)</span></td></tr>
</table>
<p>E a vogal final soa inteira: <span class="fi">kakkua</span> (bolo) × <span class="fi">kakkaa</span> (cocô), <span class="fi">pullaa</span> (pão doce) × <span class="fi">pulloa</span> (garrafa).</p>`
    },
    {
      id: 'sudenkuopat4', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção',
      html: `
<ul>
  <li><b>h mudo:</b> <span class="fi">Hesburger, Helsinki, hei</span>: sopre o h.</li>
  <li><b>Vogal final fraca:</b> <span class="fi">kakkua</span>, não <span class="fi">kakkaa</span>. A Maia que o diga.</li>
  <li><b>Pedido sem partitivo:</b> <span class="fi">Haluaisin kahvia</span>, não <span class="pala">Haluaisin kahvi</span>.</li>
  <li><b>“Por favor”:</b> não traduza palavra por palavra. Use <span class="fi">saisinko…?</span> ou ponha <span class="fi">kiitos</span> no fim.</li>
  <li><b>Tipo 3, 3ª pessoa:</b> <span class="fi">hän tulee</span> com <span class="fi pala">ee</span> longo; <span class="fi">en tule</span> com <span class="fi pala">e</span> curto.</li>
</ul>`
    }
  ]
});
