/* Tottakai, lição 0 (prólogo): Maia saapuu marraskuun Suomeen väärin pakattuna; Capivara (kertoja) ja Peixe-boi
   (manaatti) pelastavat hänet ja näyttävät kurssin (docs/TARINA.md Prologi, docs/SUUNNITELMA.md §4 rivi 0 ja §6,
   docs/AUDITOINTI_5.md A5-C1). Omistajan linjaus 17.10.2026: kuvitettu lista, ei pitkää dialogia; Capivara sanoo pari
   sanaa portugaliksi (puhekuplat .apuhahmo, ei äänitetä); enintään noin 15 min ja 3 tehtävää; ei pelielementtejä.
   Oma materiaali, ei kirjan tekstiä. Sanat: tottakai/sanasto/t00.js (selviytymisfraasit, ohjeet, minimiparit) ja
   gramatica.js (kirjainten esimerkkisanat). Suomenkieliset repliikit vain olemassa olevilla rooleilla
   (tools/aanet_roolit.json: kertoja, nainen0, mies0, nainen4, mies6). Yksiosainen (TYONKULKU 11: oppitunti 0 voi olla
   yksiosainen). Toista = toistaa:imper.2s merkitään data-l:llä (muuten toinen-sanan partitiivi). */
Kurssi.lisaa({
  id: 't00',
  lyhyt: '0',
  jakso: 'Prólogo',
  otsikko: 'Prólogo: chegando à Finlândia',
  lahde: 'História: Maia chega em novembro com a mala errada · Pronúncia: letras e sons, vogais longas, y, ä, ö, acento · Dez frases de sobrevivência · As instruções do curso · Como o curso funciona',
  aiheet: [],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja', kuvaus: 'o narrador: memória excelente, um pouco atrapalhado' },
    manaatti: { nimi: 'Peixe-boi', tyyppi: 'kertoja', kuvaus: 'cuida dos exercícios; calmo, preguiçoso e bem esperto' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga de Belo Horizonte, acaba de chegar' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo finlandês, namorado e professor de finlandês da Maia' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay' }
  },

  sanasto: [
    'moi', 'kiitos', 'anteeksi', 'kyllä', 'ei', 'ymmärtää', 'puhua', 'englanti', 'suomi', 'vähän', 'hitaasti',
    'kuunnella', 'toistaa', 'odottaa', 'vielä', 'tuli', 'tuuli', 'tulli', 'kyy', 'työ', 'sää', 'pipo'
  ],

  html: `
<ul class="tavoitteet">
  <li>Você lê as letras finlandesas em voz alta: cada letra, um som.</li>
  <li>Você ouve a diferença entre som curto e longo (<span class="fi">tuli</span>, <span class="fi">tuuli</span>, <span class="fi">tulli</span>) e conhece as vogais novas <span class="fi pala">y</span>, <span class="fi pala">ä</span>, <span class="fi pala">ö</span>.</li>
  <li>Você tem dez frases para sobreviver (<span class="fi">Moi!</span>, <span class="fi">Kiitos!</span>, <span class="fi">En ymmärrä.</span>…) e reconhece as instruções do curso.</li>
  <li>Você sabe usar o curso: bolha, ▶, Tradução, as partes da lição.</li>
</ul>

<div class="apuhahmo">
  <span class="ryhma" data-hahmot="kertoja"></span>
  <p class="apuhahmo-kupla"><b>Capivara:</b> Moi! Eu sou o Capivara, o narrador deste curso. Tenho uma memória excelente. Só às vezes esqueço onde a guardei. Esta lição é curta: uns quinze minutos, três exercícios e nenhuma prova.</p>
</div>

<section class="osio">
  <h2>Prólogo: a mala errada</h2>
  <p data-paikka="belo-horizonte-panoraama">Belo Horizonte, 30 graus. A Maia faz a mala para a Finlândia: sandálias, vestido de verão, óculos escuros. “Lá deve ser fresquinho”, ela pensa.</p>
  <p data-paikka="hameentie-marraskuu">Helsinque, novembro. São quatro da tarde e já é noite. Faz dois graus, a chuva vem de lado, e a Maia está de sandália, com os óculos escuros na cabeça.</p>
  <figure class="kuva" data-kuva="hameentie-marraskuu"></figure>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Foi aí que eu e o Peixe-boi chegamos para o resgate. De camisa havaiana, claro: ninguém avisou a gente que era novembro. Primeiro socorro: um <span class="fi">pipo</span>, o gorro de lã que todo finlandês tem. Segundo socorro: dez frases. Terceiro: o mapa deste curso.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Eu trouxe o gorro. Trouxe também um lanche, mas comi no caminho. Chegar devagar também é chegar.</p>
  </div>
</section>

<section class="osio">
  <h2>1. Letras e sons</h2>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> O finlandês é honesto: <b>cada letra, um som</b>, e todas as letras se pronunciam. Eu decorei todas numa tarde. Depois esqueci e decorei de novo. Aperte ▶ em cada exemplo e repita em voz alta.</p>
  </div>
  <h3>Vogais</h3>
  <table class="taivutus">
    <tr><th>letra</th><th>como soa</th><th>exemplo</th><th>significado</th></tr>
    <tr><td><span class="fi pala">a</span></td><td>“a” aberto, como em “casa”</td><td><span class="s">kana</span></td><td>galinha</td></tr>
    <tr><td><span class="fi pala">e</span></td><td>“ê”, também no fim da palavra (nunca “i”)</td><td><span class="s">huone</span></td><td>quarto</td></tr>
    <tr><td><span class="fi pala">i</span></td><td>“i”</td><td><span class="s">kivi</span></td><td>pedra (a palavra preferida da Maia, que é geóloga)</td></tr>
    <tr><td><span class="fi pala">o</span></td><td>“ô”, também no fim (nunca “u”)</td><td><span class="s">tori</span></td><td>praça, feira</td></tr>
    <tr><td><span class="fi pala">u</span></td><td>“u”; <span class="fi pala">uu</span> é o mesmo “u”, mais longo</td><td><span class="s">kuu</span></td><td>lua</td></tr>
    <tr><td><span class="fi pala">y</span></td><td>diga “i” com os lábios de “u” (o “u” do francês)</td><td><span class="s">kylä</span></td><td>aldeia</td></tr>
    <tr><td><span class="fi pala">ä</span></td><td>“é” bem aberto, quase “a”</td><td><span class="s">käsi</span></td><td>mão</td></tr>
    <tr><td><span class="fi pala">ö</span></td><td>diga “ê” com os lábios de “ô”</td><td><span class="s">pöytä</span></td><td>mesa</td></tr>
  </table>
  <p>Não há vogal nasal: <span class="fi">kana</span> não soa como “cana”. O <span class="fi pala">n</span> e o <span class="fi pala">m</span> não mudam a vogal antes deles.</p>
  <h3>Consoantes que pedem atenção</h3>
  <table class="taivutus">
    <tr><th>letra</th><th>atenção</th><th>exemplo</th><th>significado</th></tr>
    <tr><td><span class="fi pala">h</span></td><td>sempre se pronuncia, como em inglês “house”</td><td><span class="s">lahti</span></td><td>baía</td></tr>
    <tr><td><span class="fi pala">r</span></td><td>de ponta da língua, como o r de “caro”, vibrado mais vezes; nunca o r de garganta</td><td><span class="s">ruoka</span></td><td>comida</td></tr>
    <tr><td><span class="fi pala">j</span></td><td>como o “i” de “iate”</td><td><span class="s">juna</span></td><td>trem</td></tr>
    <tr><td><span class="fi pala">t</span>, <span class="fi pala">d</span></td><td>sempre “t” e “d”, também antes de i (nunca “tchi”, “dji”)</td><td><span class="s">tiistai</span></td><td>terça-feira</td></tr>
    <tr><td><span class="fi pala">l</span></td><td>no fim da sílaba continua “l”, nunca “u”: <span class="fi pala">il-ta</span>, não “iu-ta”</td><td><span class="s">ilta</span></td><td>noite, fim de tarde</td></tr>
    <tr><td><span class="fi pala">s</span></td><td>sempre o “s” de “sapo”, nunca “z”</td><td><span class="s">sade</span></td><td>chuva</td></tr>
    <tr><td><span class="fi pala">nk</span></td><td>como em “banco”: o n vai para o fundo da boca</td><td><span class="s">kenkä</span></td><td>sapato</td></tr>
    <tr><td><span class="fi pala">pp</span></td><td>consoante dupla: a boca fecha e segura um instante (<span class="fi pala">kaup…pa</span>)</td><td><span class="s">kauppa</span></td><td>loja</td></tr>
  </table>
  <p>As letras <span class="fi pala">b, c, f, g, q, w, x, z, å</span> só aparecem em palavras estrangeiras e em nomes.</p>
  <div class="saanto">
    <h3>Acento sempre na primeira sílaba</h3>
    <p>Toda palavra finlandesa tem o acento na <b>primeira sílaba</b>: <span class="fi pala">KI-vi</span>, <span class="fi pala">TOT-ta-kai</span>, e até <span class="fi pala">BRA-si-li-a</span> (não bra-ZI-li-a). As outras sílabas soam inteiras, sem engolir a vogal: <span class="fi">huone</span> termina em e, <span class="fi">tori</span> termina em i.</p>
  </div>
</section>

<section class="osio" data-paikka="hameentie-marraskuu">
  <h2>2. Curto ou longo; y, ä, ö</h2>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Agora o mais importante da pronúncia: o comprimento muda a palavra. <span class="fi">tuli</span> é fogo, <span class="fi">tuuli</span> é vento. Em novembro, você quer o fogo.</p>
  </div>
  <p><b>Letra dobrada = som longo</b>, mais ou menos o dobro do tempo. Vale para vogais (<span class="fi">tuuli</span>) e para consoantes (<span class="fi">tulli</span>). Em português o comprimento não muda o sentido; por isso o ouvido brasileiro precisa de treino. Ouça cada par várias vezes.</p>
  <table class="taivutus">
    <tr><th>o que muda</th><th>palavra 1</th><th>palavra 2</th></tr>
    <tr><td>vogal curta ou longa</td><td><span class="s">tuli</span><span class="kaannos">fogo</span></td><td><span class="s">tuuli</span><span class="kaannos">vento</span></td></tr>
    <tr><td>consoante simples ou dupla</td><td><span class="s">tuli</span><span class="kaannos">fogo</span></td><td><span class="s">tulli</span><span class="kaannos">alfândega</span></td></tr>
    <tr><td><span class="fi pala">u</span> ou <span class="fi pala">y</span></td><td><span class="s">kuu</span><span class="kaannos">lua</span></td><td><span class="s">kyy</span><span class="kaannos">víbora</span></td></tr>
    <tr><td><span class="fi pala">uo</span> ou <span class="fi pala">yö</span></td><td><span class="s">tuo</span><span class="kaannos">aquele, aquela</span></td><td><span class="s">työ</span><span class="kaannos">trabalho</span></td></tr>
    <tr><td><span class="fi pala">a</span> ou <span class="fi pala">ä</span></td><td><span class="s">saa</span><span class="kaannos">(ele, ela) recebe</span></td><td><span class="s">sää</span><span class="kaannos">o tempo, o clima</span></td></tr>
    <tr><td><span class="fi pala">e</span> ou <span class="fi pala">ä</span></td><td><span class="s">veri</span><span class="kaannos">sangue</span></td><td><span class="s">väri</span><span class="kaannos">cor</span></td></tr>
  </table>
  <div class="saanto">
    <h3>Três vogais novas</h3>
    <p><span class="fi pala">y</span>: diga “i” e arredonde os lábios como para “u”. <span class="fi pala">ö</span>: diga “ê” com os lábios de “ô”. <span class="fi pala">ä</span>: abra a boca mais do que para “é”. Os pontinhos não são enfeite: <span class="fi">tuo</span> e <span class="fi">työ</span> são palavras diferentes, e <span class="fi">sää</span> não é <span class="fi">saa</span>.</p>
  </div>
  <div class="muista">
    <p><b>Primeiro ouvir, depois falar.</b> Quem aprende finlandês costuma <b>ouvir</b> a diferença antes de conseguir <b>produzir</b>. Não se preocupe se a sua boca ainda não obedece: ouça, compare e repita.</p>
  </div>
</section>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>3. Dez frases de sobrevivência</h2>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Com estas dez frases a Maia sobreviveu à primeira semana. Eu sobrevivo com uma só: <span class="fi">tottakai</span>, “claro!”. Serve para quase tudo. Quase.</p>
  </div>
  <table class="taivutus">
    <tr><th>frase</th><th>o que quer dizer, quando usar</th></tr>
    <tr><td><span class="s">Moi!</span></td><td>oi; tchau. O cumprimento mais comum, para chegar e para ir embora.</td></tr>
    <tr><td><span class="s">Kiitos!</span></td><td>obrigado, obrigada. No fim de um pedido, faz o papel do “por favor”, que não existe em finlandês.</td></tr>
    <tr><td><span class="s">Anteeksi!</span></td><td>desculpa; com licença (para passar ou para chamar alguém).</td></tr>
    <tr><td><span class="s">Kyllä.</span></td><td>sim.</td></tr>
    <tr><td><span class="s">Ei.</span></td><td>não. Sozinhos, <span class="fi">kyllä</span> e <span class="fi">ei</span> soam curtos; na lição 1 você aprende a resposta mais natural.</td></tr>
    <tr><td><span class="s">En ymmärrä.</span></td><td>não entendo.</td></tr>
    <tr><td><span class="s">Puhutko englantia?</span></td><td>você fala inglês?</td></tr>
    <tr><td><span class="s">Puhun vähän suomea.</span></td><td>falo um pouco de finlandês.</td></tr>
    <tr><td><span class="s">Hitaasti, kiitos.</span></td><td>devagar, por favor.</td></tr>
    <tr><td><span class="s">Tottakai!</span></td><td>claro! com certeza! (é o nome deste curso)</td></tr>
  </table>
  <p>Por enquanto, guarde estas frases inteiras, como blocos. Por que <span class="fi">englantia</span> e <span class="fi">suomea</span> terminam em <span class="fi pala">-a</span>, você descobre na lição 3. Quer mais frases? Veja a página <a href="#h-fraasit">Frases de sobrevivência</a> da Gramática.</p>
</section>

<section class="osio">
  <h2>4. As instruções do curso</h2>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> O Jay fala assim nas aulas, e os exercícios também. Basta reconhecer. Ninguém vai pedir que você conjugue nada hoje. Nem eu, e eu adoro conjugar.</p>
  </div>
  <table class="taivutus">
    <tr><th>instrução</th><th>o que fazer</th></tr>
    <tr><td><span class="s">Kuuntele!</span></td><td>Ouça! (aperte ▶)</td></tr>
    <tr><td><span class="s">Katso!</span></td><td>Olhe!</td></tr>
    <tr><td><span class="s"><span data-l="toistaa:imper.2s">Toista</span>!</span></td><td>Repita! (em voz alta)</td></tr>
    <tr><td><span class="s">Odota!</span></td><td>Espere!</td></tr>
    <tr><td><span class="s">Sano!</span></td><td>Diga!</td></tr>
    <tr><td><span class="s">Valitse!</span></td><td>Escolha!</td></tr>
    <tr><td><span class="s">Hitaasti!</span></td><td>Devagar!</td></tr>
    <tr><td><span class="s">Vielä kerran!</span></td><td>Mais uma vez! De novo!</td></tr>
  </table>
  <div class="muista">
    <p><b>Lembre:</b> <span class="fi">kuuntele</span>, <span class="fi">katso</span>, <span class="fi"><span data-l="toistaa:imper.2s">toista</span></span>… são ordens para “você” (o imperativo), e a ordem é sempre educada o bastante entre finlandeses. Guarde como frases prontas; o imperativo vem na lição 9. <span class="fi">Hitaasti</span> e <span class="fi">vielä kerran</span> não são verbos, mas andam junto.</p>
  </div>
</section>

<section class="osio">
  <h2>5. Quem é quem</h2>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Esta é a turma. Cada um diz uma frase com as palavras que você acabou de aprender. O Hiisi diz pouco, mas com convicção.</p>
  </div>
  <p><b>Maia</b>, geóloga de Belo Horizonte. Veio trabalhar em inglês num centro de pesquisa de pedras, em Espoo, mas quer falar finlandês com a família do Jay. Você aprende junto com ela. A frase dela nesta semana:</p>
  <p class="s" data-h="maia" data-pt="Desculpa! Não entendo.">Anteeksi! En ymmärrä.</p>
  <p><b>Jay</b>, geólogo finlandês, namorado da Maia e professor de finlandês dela. Ela ensina português a ele. Na aula, ele diz:</p>
  <p class="s" data-h="jay" data-pt="Devagar. Mais uma vez.">Hitaasti. Vielä kerran.</p>
  <p><b>Purjo</b>, mãe do Jay: carinhosa e um pouco ansiosa. Não fala português, e o inglês dela é “só para emergências”. Por isso ela torce:</p>
  <p class="s" data-h="purjo" data-pt="Oi! Você fala finlandês?">Moi! Puhutko suomea?</p>
  <p><b>Hiisi</b>, irmão do Jay. Dirige como se as regras fossem para os outros e tem sempre a mesma cara: 😐.</p>
  <p class="s" data-h="hiisi" data-pt="Não.">Ei.</p>
  <p><b>Capivara</b>, a narradora: lembra tudo, só não lembra sempre o que significava. Por isso repete muito, e as revisões são dela.</p>
  <p class="s" data-h="kertoja" data-pt="Claro!">Tottakai!</p>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Eu cuido dos exercícios, na Manaattila (a minha área de exercícios). Eu não falo finlandês. Eu boio. Funciona muito bem.</p>
  </div>
</section>

<section class="osio">
  <h2>6. Como o curso funciona</h2>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Agora, o mapa. Noventa segundos: eu cronometrei. Duas vezes, porque esqueci o resultado da primeira.</p>
  </div>
  <ol>
    <li><b>Toque numa palavra finlandesa</b> (no computador, basta passar o mouse). Abre uma bolha com o significado, a pronúncia e, quando a palavra tem terminação, a forma básica, a do dicionário. Experimente: <span class="fi">kivi</span>, <span class="fi">sää</span>, <span class="fi">ymmärrä</span>.</li>
    <li><b>▶ lê em voz alta.</b> Aperte ▶ na frase abaixo. No celular, tocar na palavra abre a bolha, mas não toca som: o som é sempre no ▶. Se não ouvir nada, abra <b>Som</b>, no alto da página, e teste a voz.</li>
  </ol>
  <p class="s" data-h="kertoja" data-pt="Oi! Obrigada! Claro!">Moi! Kiitos! Tottakai!</p>
  <ol start="3">
    <li><b>Tradução</b>, no alto da página, mostra ou esconde o português das frases. Experimente agora na frase acima. Nos diálogos, ouça primeiro sem tradução. <b>Parar</b> interrompe o som.</li>
    <li><b>As partes de uma lição.</b> A partir da lição 1, cada lição tem duas páginas: a <b>Parte A</b> (diálogo, frases prontas, palavras novas, pronúncia e os primeiros exercícios) e a <b>Parte B</b> (gramática, mais exercícios, cultura e lição de casa). No fim da lição ficam a <b>Gramática da lição</b> (cartões, um assunto por vez), o <b>Treino</b> (pacotes curtos de 8 perguntas), o <b>Vocabulário</b> e o <b>Quiz</b>. Esta lição 0 tem uma página só; role até o fim para ver os cartões e o vocabulário dela.</li>
    <li><b>Exercícios na Manaattila</b>, a área de exercícios do Peixe-boi. O símbolo no canto mostra o tipo: 🎧 escuta, ✍ escrita, 🗣 conversa, 📖 leitura.</li>
    <li><b>Mandarinas 🍊.</b> O primeiro acerto de cada exercício vale uma mandarina. O contador fica no alto da página; clicando nele você visita a ilha do Capivara e do Peixe-boi. Mandarina não é nota: é só um lanche.</li>
    <li><b>★ Tema difícil?</b> Na Gramática da lição, toque na estrela de um tema: o pacote do Treino desse tema vem primeiro, e ele volta na revisão <b>Hoje</b> da página inicial, junto com as respostas que você errou.</li>
    <li><b>⚙ Ajustes.</b> No alto da página: som, tradução, menos movimento, levar o progresso para o celular (código QR) e um diagnóstico para pedir ajuda.</li>
    <li><b>A ilha e a lojinha.</b> A ilha começa vazia. Termine uma lição (todos os exercícios das partes e o quiz) e ganhe uma medalha: bronze, prata ou ouro, com mandarinas. Ao terminar esta lição 0, a dupla ganha a primeira cabana. Na lojinha da ilha você compra o resto: rede, coqueiro, boombox…</li>
    <li><b>Digitar ä e ö.</b> No celular, segure a tecla <span class="fi pala">a</span> até aparecer <span class="fi pala">ä</span> (e <span class="fi pala">o</span> para <span class="fi pala">ö</span>). No computador, pode digitar <span class="fi pala">a</span> no lugar de <span class="fi pala">ä</span> e <span class="fi pala">o</span> no lugar de <span class="fi pala">ö</span>: o curso aceita e mostra a grafia certa.</li>
    <li><b>O menu</b> lista todas as lições. As que aparecem apagadas ainda estão em preparação; clicando, você vê o que elas vão ensinar.</li>
  </ol>
</section>

<section class="osio" data-ei-sivulle data-paikka="sornainen-vaasanaukio">
  <h2>Exercícios</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>1. Ouça: qual palavra?</h3>
    <p class="ohje">Aperte ▶ e escolha a palavra que você ouviu. Pode ouvir quantas vezes quiser.</p>
    <div class="valinta" data-kuuntele="tuuli" data-oikea="tuuli">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">tuli</button><button type="button">tuuli</button><button type="button">tulli</button></div>
    </div>
    <div class="valinta" data-kuuntele="tulli" data-oikea="tulli">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">tuli</button><button type="button">tuuli</button><button type="button">tulli</button></div>
    </div>
    <div class="valinta" data-kuuntele="kyy" data-oikea="kyy">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">kuu</button><button type="button">kyy</button></div>
    </div>
    <div class="valinta" data-kuuntele="sää" data-oikea="sää">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">saa</button><button type="button">sää</button></div>
    </div>
    <div class="valinta" data-kuuntele="veri" data-oikea="veri">
      <p class="kysymys">Qual palavra?</p>
      <div class="vaihtoehdot"><button type="button">veri</button><button type="button">väri</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Ligue a instrução ao que fazer</h3>
    <p class="ohje">Toque numa instrução em finlandês e depois no significado.</p>
    <ul class="yhdista">
      <li data-pari="Ouça!">Kuuntele!</li>
      <li data-pari="Olhe!">Katso!</li>
      <li data-pari="Espere!">Odota!</li>
      <li data-pari="Diga!">Sano!</li>
      <li data-pari="Escolha!">Valitse!</li>
      <li data-pari="Mais uma vez!">Vielä kerran!</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>3. O que você diz?</h3>
    <p class="ohje">A Maia está na casa da Purjo pela primeira vez. Escolha a frase certa e depois diga em voz alta.</p>
    <div class="valinta" data-oikea="Moi!">
      <p class="kysymys"><span class="ryhma" data-hahmot="purjo"></span> A Purjo abre a porta. Você cumprimenta.</p>
      <div class="vaihtoehdot"><button type="button">Moi!</button><button type="button">Kiitos!</button><button type="button">Anteeksi!</button></div>
    </div>
    <div class="valinta" data-oikea="Kiitos!">
      <p class="kysymys"><span class="ryhma" data-hahmot="purjo"></span> A Purjo dá a você um gorro de lã quentinho.</p>
      <div class="vaihtoehdot"><button type="button">Anteeksi!</button><button type="button">Kiitos!</button><button type="button">Ei.</button></div>
    </div>
    <div class="valinta" data-oikea="Anteeksi!">
      <p class="kysymys"><span class="ryhma" data-hahmot="hiisi"></span> Você pisa sem querer no pé do Hiisi.</p>
      <div class="vaihtoehdot"><button type="button">Moi!</button><button type="button">Kyllä.</button><button type="button">Anteeksi!</button></div>
    </div>
    <div class="valinta" data-oikea="Hitaasti, kiitos.">
      <p class="kysymys"><span class="ryhma" data-hahmot="purjo"></span> A Purjo fala muito rápido.</p>
      <div class="vaihtoehdot"><button type="button">Hitaasti, kiitos.</button><button type="button">Moi!</button><button type="button">Kyllä.</button></div>
    </div>
    <div class="valinta" data-oikea="En ymmärrä.">
      <p class="kysymys"><span class="ryhma" data-hahmot="hiisi"></span> O Hiisi pergunta alguma coisa, e você não entende nada.</p>
      <div class="vaihtoehdot"><button type="button">Kiitos!</button><button type="button">En ymmärrä.</button><button type="button">Tottakai!</button></div>
    </div>
    <div class="valinta" data-oikea="Kyllä.">
      <p class="kysymys"><span class="ryhma" data-hahmot="purjo"></span> A Purjo pergunta: <span class="fi">Puhutko englantia?</span> Você fala inglês.</p>
      <div class="vaihtoehdot"><button type="button">Ei.</button><button type="button">Kyllä.</button><button type="button">Anteeksi!</button></div>
    </div>
  </div>

  <ul class="itsearvio" data-id="t00">
    <li>Leio as letras finlandesas em voz alta, também y, ä e ö.</li>
    <li>Ouço a diferença entre tuli, tuuli e tulli.</li>
    <li>Sei dizer oi, obrigado, desculpa e não entendo em finlandês.</li>
    <li>Sei usar a bolha, o ▶ e a Tradução.</li>
  </ul>
</section>

<section class="osio">
  <h2>Próximo passo</h2>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Pronto. Você já sabe mais finlandês do que a Maia ao descer do avião. Próximo passo: a <a href="#t01">lição 1</a>, a primeira videochamada com a família do Jay. Eu vou lembrar você. Provavelmente.</p>
  </div>
</section>
`,

  /* Gramática da lição: Hakuosan osat tämän jakson syvyydellä (docs/RAKENNE.md, kolmikerroksinen kielioppi). */
  kielioppi: [
    {
      id: 'aakkoset', otsikko: 'Letras, sons e acento', taso: 'essencial', hakuosa: 'h-aakkoset',
      html: `
<ul>
  <li><b>Uma letra, um som</b>, e todas se pronunciam: <span class="fi">huone</span> termina em e, <span class="fi">lahti</span> tem h.</li>
  <li><b>Letra dobrada = som longo</b>: <span class="fi">tuli</span> (fogo), <span class="fi">tuuli</span> (vento), <span class="fi">tulli</span> (alfândega). Mais na página <a href="#h-pituus">Sons longos e curtos</a>.</li>
  <li><b>Vogais novas</b>: <span class="fi pala">y</span> (“i” com lábios de “u”), <span class="fi pala">ä</span> (“é” bem aberto), <span class="fi pala">ö</span> (“ê” com lábios de “ô”).</li>
  <li><b>Acento na primeira sílaba</b>, sempre: <span class="fi pala">KI-vi</span>, <span class="fi pala">TOT-ta-kai</span>.</li>
</ul>`
    },
    {
      id: 'fraasit', otsikko: 'Frases prontas: sobrevivência e instruções', taso: 'frase pronta', hakuosa: 'h-fraasit',
      html: `
<p>Guarde como blocos; a gramática por trás delas vem mais tarde.</p>
<ul class="esim">
  <li class="s" data-pt="não entendo">En ymmärrä.</li>
  <li class="s" data-pt="você fala inglês?">Puhutko englantia?</li>
  <li class="s" data-pt="falo um pouco de finlandês">Puhun vähän suomea.</li>
  <li class="s" data-pt="devagar, por favor">Hitaasti, kiitos.</li>
  <li class="s" data-pt="ouça!">Kuuntele!</li>
  <li class="s" data-pt="repita!"><span data-l="toistaa:imper.2s">Toista</span>!</li>
  <li class="s" data-pt="espere!">Odota!</li>
  <li class="s" data-pt="mais uma vez!">Vielä kerran!</li>
</ul>`
    },
    {
      id: 'sudenkuopat', otsikko: 'Armadilhas do brasileiro nesta lição', taso: 'atenção',
      html: `
<ul>
  <li><b>Comprimento:</b> em português o comprimento não muda nada; em finlandês, muda a palavra. <span class="fi">tuli</span> ≠ <span class="fi">tuuli</span>.</li>
  <li><b>Vogal final:</b> não vira i nem u. <span class="fi">huone</span>, não “huoni”.</li>
  <li><b>h mudo:</b> o h finlandês sempre soa: <span class="fi">lahti</span>, <span class="fi">huone</span>.</li>
  <li><b>r de garganta:</b> o r finlandês é de ponta da língua: <span class="fi">ruoka</span>.</li>
  <li><b>“tchi”:</b> <span class="fi">tiistai</span> começa com t, não com “tch”.</li>
  <li><b>l que vira u:</b> <span class="fi">ilta</span> se diz com l.</li>
</ul>`
    }
  ]
});
