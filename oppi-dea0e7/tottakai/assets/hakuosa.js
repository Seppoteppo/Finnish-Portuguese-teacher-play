/* Tottakain Hakuosa: suomen ääntäminen ja kielioppi portugaliksi (docs/RAKENNE.md, kerros 3: täysi Hakuosa).
   Oppitunnin kielioppiosio (lição → Gramática da lição) näyttää näistä vain jakson osan ja linkittää tänne.
   Merkinnät: <span class="fi">sana</span> = suomenkielinen sana (kupla ja ääni); <div class="taivutustaulu" data-verbi="…">
   ja <div class="sijataulu" data-sana="…" data-gen data-part data-ill> = taivutuskoneen taulut (assets/taivutus.js).
   Taulukoissa suomi on vasemmassa sarakkeessa (käyttäjän linjaus Passossa 16.10.2026, sama tässä).
   Laajennetaan jakso kerrallaan; jokainen sivu kertoo tason (o que já é usado nas lições, o que vem depois). */
Kurssi.hakuosa = [
  /* ---------- Pronúncia ---------- */
  {
    id: 'h-aakkoset', kurssissa: ['t00', 't04', 't05', 't10', 't12', 't14', 't16', 't18'], osio: 'Pronúncia', otsikko: 'Letras e sons', kuvaus: 'Cada letra, um som. Como soa cada uma para quem fala português.',
    html: `
<p>O finlandês se escreve quase exatamente como se fala: <b>uma letra, um som</b>, e todas as letras se pronunciam. A dificuldade não está nas letras, e sim no <b>comprimento</b> (letra dobrada = som longo) e em alguns hábitos do português que precisam ser desligados.</p>
<h3>Vogais</h3>
<table class="taivutus neljannes">
  <tr><th>letra</th><th>som</th><th>como em português</th><th>exemplo</th></tr>
  <tr><td><span class="fi pala">a</span></td><td>[ɑ]</td><td>“a” aberto, um pouco para trás</td><td><span class="fi">talo</span><span class="kaannos" lang="pt-BR">casa</span></td></tr>
  <tr><td><span class="fi pala">e</span></td><td>[e]</td><td>“ê”, também no fim da palavra (nunca “i”)</td><td><span class="fi">kolme</span><span class="kaannos" lang="pt-BR">três</span></td></tr>
  <tr><td><span class="fi pala">i</span></td><td>[i]</td><td>“i”</td><td><span class="fi">kivi</span><span class="kaannos" lang="pt-BR">pedra</span></td></tr>
  <tr><td><span class="fi pala">o</span></td><td>[o]</td><td>“ô”, também no fim (nunca “u”)</td><td><span class="fi">Purjo</span><span class="kaannos" lang="pt-BR">(nome: a mãe do Jay)</span></td></tr>
  <tr><td><span class="fi pala">u</span></td><td>[u]</td><td>“u”</td><td><span class="fi">kuu</span><span class="kaannos" lang="pt-BR">lua</span></td></tr>
  <tr><td><span class="fi pala">y</span></td><td>[y]</td><td>“u” do francês: diga “i” com os lábios de “u”</td><td><span class="fi">hyvä</span><span class="kaannos" lang="pt-BR">bom</span></td></tr>
  <tr><td><span class="fi pala">ä</span></td><td>[æ]</td><td>“é” bem aberto, quase “a”</td><td><span class="fi">äiti</span><span class="kaannos" lang="pt-BR">mãe</span></td></tr>
  <tr><td><span class="fi pala">ö</span></td><td>[ø]</td><td>diga “ê” com os lábios de “ô”</td><td><span class="fi">yö</span><span class="kaannos" lang="pt-BR">noite</span></td></tr>
</table>
<p><b><span class="fi pala">y</span> e <span class="fi pala">ö</span> mudam a palavra</b> (lição 12): <span class="fi">kyy</span> (víbora) × <span class="fi">kuu</span> (lua), <span class="fi">myy</span> (vende) × <span class="fi">muu</span> (outro), <span class="fi">työ</span> (trabalho) × <span class="fi">tuo</span> (aquele). A língua fica na frente, como em “i” e “ê”; só os lábios se arredondam.</p>
<p>Não há vogais nasais: <span class="fi">kana</span> (galinha) não soa como “cana”, e <span class="fi">Suomi</span> não soa “Suõmi”. O <span class="fi pala">n</span> e o <span class="fi pala">m</span> não mudam a vogal antes deles.</p>
<h3>Consoantes</h3>
<table class="taivutus neljannes">
  <tr><th>letra</th><th>som</th><th>atenção</th><th>exemplo</th></tr>
  <tr><td><span class="fi pala">h</span></td><td>[h]</td><td>sempre pronunciado, como o “h” do inglês “house” (nunca mudo)</td><td><span class="fi">Helsinki</span>, <span class="fi">Hesburger</span><span class="kaannos" lang="pt-BR">Helsinque, (rede de lanchonetes)</span></td></tr>
  <tr><td><span class="fi pala">r</span></td><td>[r]</td><td>r de ponta da língua, como o r de “caro”, vibrado mais vezes; nunca o r de garganta</td><td><span class="fi">ruoka</span><span class="kaannos" lang="pt-BR">comida</span></td></tr>
  <tr><td><span class="fi pala">j</span></td><td>[j]</td><td>como “i” em “iate”</td><td><span class="fi">ja</span><span class="kaannos" lang="pt-BR">e</span></td></tr>
  <tr><td><span class="fi pala">t, d</span></td><td>[t], [d]</td><td>nunca “tch” ou “dj” antes de i</td><td><span class="fi">tiistai</span>, <span class="fi">tiedän</span><span class="kaannos" lang="pt-BR">terça-feira, eu sei</span></td></tr>
  <tr><td><span class="fi pala">k, p, t</span></td><td>[k], [p], [t]</td><td>sem sopro (como em português)</td><td><span class="fi">kukka</span><span class="kaannos" lang="pt-BR">flor</span></td></tr>
  <tr><td><span class="fi pala">l</span></td><td>[l]</td><td>sempre “l”, também no fim da sílaba (nunca “u”)</td><td><span class="fi">Helsinki</span> (não “Heusinki”)<span class="kaannos" lang="pt-BR">Helsinque</span></td></tr>
  <tr><td><span class="fi pala">s</span></td><td>[s]</td><td>sempre “s” de “sapo”, nunca “z”, nunca “x” do Rio</td><td><span class="fi">kissa</span>, <span class="fi">talossa</span><span class="kaannos" lang="pt-BR">gato, na casa</span></td></tr>
  <tr><td><span class="fi pala">v</span></td><td>[ʋ]</td><td>“v” suave</td><td><span class="fi">vesi</span><span class="kaannos" lang="pt-BR">água</span></td></tr>
  <tr><td><span class="fi pala">ng</span></td><td>[ŋː]</td><td>“nh” do fundo da boca, longo; sem “g”</td><td><span class="fi">Helsingissä</span><span class="kaannos" lang="pt-BR">em Helsinque</span></td></tr>
  <tr><td><span class="fi pala">nk</span></td><td>[ŋk]</td><td>como em “banco”</td><td><span class="fi">kenkä</span><span class="kaannos" lang="pt-BR">sapato</span></td></tr>
  <tr><td><span class="fi pala">b, c, f, g, q, w, x, z, š, ž, å</span></td><td></td><td>só em palavras estrangeiras e nomes</td><td><span class="fi">bussi</span>, <span class="fi">baari</span><span class="kaannos" lang="pt-BR">ônibus, bar</span></td></tr>
</table>
<h3>Ditongos</h3>
<p>Duas vogais diferentes na mesma sílaba: <span class="fi pala">ai, ei, oi, ui, yi, äi, öi, au, eu, iu, ou, ey, äy, öy</span> e, na primeira sílaba, <span class="fi pala">ie, uo, yö</span>. Cada vogal do ditongo soa inteira: <span class="fi">Suomi</span> é “Su-o” juntinho, não “Sômi”.</p>
<p><span class="fi pala">ie, uo, yö</span> são uma sílaba só, não duas (lição 16): a boca desliza da primeira vogal para a segunda, e o acento continua na primeira sílaba da palavra: <span class="fi pala">SUO-mi</span>, nunca <span class="pala">su-Ô-mi</span>. O ditongo distingue palavras: <span class="fi">tie</span> (estrada) × <span class="fi">tee</span> (chá), <span class="fi">tuoli</span> (cadeira) × <span class="fi">tuli</span> (fogo), <span class="fi">juo</span> (bebe) × <span class="fi">joi</span> (bebeu).</p>
<ul class="esim">
  <li class="s" data-pt="mãe">äiti</li><li class="s" data-pt="noite">yö</li><li class="s" data-pt="Finlândia">Suomi</li><li class="s" data-pt="estrada">tie</li><li class="s" data-pt="trabalho">työ</li><li class="s" data-pt="loja">kauppa</li>
</ul>
<h3>O n que muda entre duas palavras (lição 14)</h3>
<p>O <span class="fi pala">-n</span> do fim da palavra (muitas vezes o genitivo) se adapta à consoante da palavra seguinte. A escrita não muda. Antes de <span class="fi pala">p</span>, <span class="fi pala">m</span> e <span class="fi pala">b</span>, os lábios já se fecham e o <span class="fi pala">n</span> soa <span class="fi pala">m</span>. Antes de <span class="fi pala">k</span> e <span class="fi pala">g</span>, a língua já vai para trás e o <span class="fi pala">n</span> soa como em “banco”, o mesmo som de <span class="fi pala">nk</span> dentro da palavra. Antes de vogal e das outras consoantes, nada muda. A vogal antes do <span class="fi pala">n</span> nunca fica nasal.</p>
<ul class="esim">
  <li class="s" data-pt="em cima disso (soa: sem päälle)">sen päälle</li>
  <li class="s" data-pt="o celular da Malu (soa: Malum puhelin)">Malun puhelin</li>
  <li class="s" data-pt="na altura do banco (soa: pankiŋ kohdalla)">pankin kohdalla</li>
  <li class="s" data-pt="com a Maia (soa: Maiaŋ kanssa)">Maian kanssa</li>
</ul>`
  },
  {
    id: 'h-pituus', kurssissa: ['t00', 't01', 't02', 't13', 't19'], osio: 'Pronúncia', otsikko: 'Sons longos e curtos', kuvaus: 'O comprimento muda o sentido: tuli, tuuli, tulli.',
    html: `
<p>Todo som finlandês pode ser curto ou longo. Na escrita, o longo é <b>letra dobrada</b>. O longo dura mais ou menos o dobro. Isso muda o sentido e, nos verbos, até a pessoa (<span class="fi">puhuu</span> × <span class="fi">puhu</span>).</p>
<ul class="minimiparit">
  <li><span class="fi">tuli</span><small>fogo</small></li><li><span class="fi">tuuli</span><small>vento</small></li><li><span class="fi">tulli</span><small>alfândega</small></li>
  <li><span class="fi">kuka</span><small>quem</small></li><li><span class="fi">kukka</span><small>flor</small></li>
  <li><span class="fi">mato</span><small>minhoca</small></li><li><span class="fi">matto</span><small>tapete</small></li>
  <li><span class="fi">tapan</span><small>(eu) mato</small></li><li><span class="fi">tapaan</span><small>(eu) encontro</small></li>
  <li><span class="fi">muta</span><small>lama</small></li><li><span class="fi">mutta</span><small>mas</small></li>
  <li><span class="fi">kisa</span><small>competição</small></li><li><span class="fi">kissa</span><small>gato</small></li>
  <li><span class="fi">te</span><small>vocês</small></li><li><span class="fi">tee</span><small>chá</small></li>
</ul>
<div class="saanto">
  <h3>Vogal longa</h3>
  <p>A mesma vogal, só que mais tempo: <span class="fi pala">aa</span> = “a-a” sem pausa. O comprimento <b>não depende do acento</b>: <span class="fi pala">PU-huu</span>, <span class="fi pala">TA-paan</span>. Em português, a sílaba tônica fica mais longa; em finlandês, a tônica (a primeira) pode ser curta e a seguinte longa.</p>
</div>
<div class="saanto">
  <h3>Consoante dupla: segurar ou esticar</h3>
  <p><b>kk, pp, tt</b>: a boca fecha e <b>segura</b> um instante, como uma pausa curtinha antes de soltar: <span class="fi pala">mat…to</span>, <span class="fi pala">kuk…ka</span>. Compare com o italiano “fatto”, “pizza”.</p>
  <p><b>ll, mm, nn, rr, ss</b>: o som <b>continua</b> por mais tempo: <span class="fi pala">kis-sa</span>, <span class="fi pala">tul-li</span>. O “rr” e o “ss” do português são curtos; os do finlandês são longos de verdade.</p>
  <p>A divisão de sílabas passa no meio da consoante dupla: <span class="fi pala">mat-to</span>, <span class="fi pala">kuk-ka</span>, <span class="fi pala">kis-sa</span>.</p>
</div>
<div class="saanto">
  <h3>Duplicação invisível (loppukahdennus)</h3>
  <p>Algumas palavras fazem a consoante seguinte soar dupla, sem escrever: <span class="fi">tule tänne</span> (venha cá) soa “tulet tänne”; <span class="fi">mene pois</span> soa “menep pois”. Você vai ouvir isso nos diálogos; não precisa produzir no começo.</p>
</div>
<p><b>Como treinar:</b> primeiro ouça os pares (Treino: <a href="#treino-t01-pituus">Vogal longa ou curta?</a>), depois grave a sua voz e compare. Pesquisas mostram que o ouvido aprende antes da boca.</p>`
  },
  {
    id: 'h-paino', kurssissa: ['t00', 't10', 't17', 't20'], osio: 'Pronúncia', otsikko: 'Acento e entonação', kuvaus: 'Sempre a primeira sílaba. Perguntas não sobem.',
    html: `
<p><b>O acento cai sempre na primeira sílaba.</b> Sem exceção, também em palavras estrangeiras e nomes: <span class="fi pala">BRA-si-li-a</span>, <span class="fi pala">KAH-vi-la</span>, <span class="fi pala">RA-vin-to-la</span>, <span class="fi pala">PA-rii-si</span>. Em palavras longas e compostas, há um acento secundário mais fraco no começo de cada parte: <span class="fi pala">MET-ro-A-se-ma</span>.</p>
<p>Na lição 17: <span class="fi">silmälasit</span> (<span class="fi pala">SIL-mä-LA-sit</span>, óculos), <span class="fi">hiusväri</span> (<span class="fi pala">HIUS-VÄ-ri</span>, cor do cabelo), <span class="fi">postikierros</span> (<span class="fi pala">POS-ti-KIER-ros</span>, a ronda do correio). A primeira maiúscula é o acento forte, a segunda o secundário. O ouvido brasileiro põe o acento forte no secundário, perto do fim, e engole o começo; em finlandês o forte fica sempre no começo da palavra inteira.</p>
<p>As outras sílabas são pronunciadas <b>inteiras</b>, sem reduzir a vogal: <span class="fi">talo</span> termina em o, <span class="fi">kolme</span> termina em e.</p>
<h3>Entonação</h3>
<p>A frase finlandesa desce do começo ao fim. A pergunta <b>também desce</b>, porque a pergunta já está na palavra (<span class="fi pala">-ko/-kö</span>) ou na palavra interrogativa. Subir no fim, como em português, soa surpreso ou estrangeiro.</p>
<ul class="esim">
  <li class="s" data-pt="Você fala finlandês?">Puhutko suomea?</li>
  <li class="s" data-pt="De onde você é?">Mistä sinä olet?</li>
  <li class="s" data-pt="De onde sai o voo para Lisboa?">Mistä lähtee lento Lissaboniin?</li>
</ul>
<p>Na lição 10, a Maia pergunta <span class="fi">Ehdimmekö me?</span> (dá tempo?) com a melodia brasileira, subindo no fim, e o Hiisi entende susto. Na lição 20 acontece de novo: interpretando a mãe, a Maia pergunta <span class="fi">Onko talossa sauna?</span> subindo, e a Purjo acha que o Walker tem medo da sauna. Treine as perguntas descendo, como uma frase comum.</p>
<p>O ritmo é regular, sem as sílabas tônicas fortes do português. Pense em “bater cada sílaba” com o mesmo peso, com a primeira um pouco mais forte.</p>`
  },
  {
    id: 'h-sudenkuopat', kurssissa: ['t01', 't02', 't03', 't04', 't05', 't06', 't10', 't11', 't13', 't15', 't16', 't17', 't18', 't19', 't20'], osio: 'Pronúncia', otsikko: 'Armadilhas do brasileiro', kuvaus: 'Os hábitos do português que mais atrapalham, e como desligá-los.',
    html: `
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>erro típico</th><th>o que fazer</th></tr>
  <tr><td><span class="fi">tuli · tuuli · tulli</span><span class="kaannos" lang="pt-BR">fogo · vento · alfândega</span></td><td>comprimento ignorado</td><td>letra dobrada = o dobro do tempo</td></tr>
  <tr><td><span class="fi">kuka · kukka</span><span class="kaannos" lang="pt-BR">quem · flor</span></td><td>consoante dupla curta</td><td>segure a boca fechada um instante</td></tr>
  <tr><td><span class="fi">tiistai, tiedän</span><span class="kaannos" lang="pt-BR">terça-feira, eu sei</span></td><td>“tchiistai”, “djiedän”</td><td>t e d limpos, como em Portugal</td></tr>
  <tr><td><span class="fi">ruoka</span><span class="kaannos" lang="pt-BR">comida</span></td><td>“huoka” (r de garganta)</td><td>r vibrante da ponta da língua</td></tr>
  <tr><td><span class="fi">Hesburger, Helsinki</span><span class="kaannos" lang="pt-BR">(lanchonete), Helsinque</span></td><td>h mudo: “’Esburger”</td><td>h sempre soprado</td></tr>
  <tr><td><span class="fi">Tokmanni, olet</span><span class="kaannos" lang="pt-BR">(loja de variedades), você é</span></td><td>vogal extra: “Tokki-Manni”, “oleti”</td><td>consoantes juntas, sem vogal no meio nem no fim</td></tr>
  <tr><td><span class="fi">Helsinki, kylmä</span><span class="kaannos" lang="pt-BR">Helsinque, frio</span></td><td>l vira u: “Heusinki”</td><td>a língua toca os dentes</td></tr>
  <tr><td><span class="fi">talo, Purjo, kolme</span><span class="kaannos" lang="pt-BR">casa, (nome), três</span></td><td>vogal final reduzida: “talu”, “Purju”, “kolmi”</td><td>toda vogal soa inteira</td></tr>
  <tr><td><span class="fi">kana, Suomi</span><span class="kaannos" lang="pt-BR">galinha, Finlândia</span></td><td>vogal nasal</td><td>nada de nasal</td></tr>
  <tr><td><span class="fi">Helsinki, kenkä</span><span class="kaannos" lang="pt-BR">Helsinque, sapato</span></td><td>vogal nasal antes de nk: “Hel-sĩ-ki”</td><td>o n vai para o fundo da boca, como em “banco”; a vogal fica oral</td></tr>
  <tr><td><span class="fi">Ehdimmekö me?</span><span class="kaannos" lang="pt-BR">dá tempo?</span></td><td>pergunta subindo no fim</td><td>a pergunta desce, como a frase comum</td></tr>
  <tr><td><span class="fi">yö, työ, hyvä</span><span class="kaannos" lang="pt-BR">noite, trabalho, bom</span></td><td>y vira “i”, ö vira “ê”</td><td>i com lábios de u; ê com lábios de ô</td></tr>
  <tr><td><span class="fi">väri · veri</span><span class="kaannos" lang="pt-BR">cor · sangue</span></td><td>ä vira “e”: cor vira sangue</td><td>abra mais a boca</td></tr>
  <tr><td><span class="fi pala">BA-naa-ni</span><span class="kaannos" lang="pt-BR">banana</span></td><td>acento na sílaba longa: “ba-NAA-ni”</td><td>sempre a primeira sílaba</td></tr>
  <tr><td><span class="fi">kissa, talossa</span><span class="kaannos" lang="pt-BR">gato, na casa</span></td><td>s vira z entre vogais</td><td>s sempre surdo</td></tr>
  <tr><td><span class="fi">joulu, ja, jo</span><span class="kaannos" lang="pt-BR">Natal, e, já</span></td><td>j de “janela”: “jôlu”</td><td>j = i curto, como em “iate”: iá, iô</td></tr>
  <tr><td><span class="fi">Suomi, tie, yö</span><span class="kaannos" lang="pt-BR">Finlândia, estrada, noite</span></td><td>ditongo partido e acento no meio: “su-Ô-mi”</td><td>uma sílaba que desliza; acento na primeira sílaba</td></tr>
</table>
<p>A Maia comete vários desses erros nos nomes: <b>’Esburger</b> (Hesburger, o h sumiu), <b>Claees Oollshen</b> (Clas Ohlson, comprimentos trocados) e <b>Tokki-Manni</b> (Tokmanni, vogal no meio). Ria junto: ajuda a lembrar.</p>`
  },

  /* ---------- Verbos ---------- */
  {
    id: 'h-persoonapaatteet', kurssissa: ['t01', 't02', 't13'], osio: 'Verbos', otsikko: 'Pessoas e terminações', kuvaus: 'As seis terminações que todo verbo usa no presente e no passado.',
    html: `
<p>O verbo finlandês mostra a pessoa no fim, como o português. As terminações são as mesmas para quase todos os verbos e tempos:</p>
<table class="taivutus neljannes">
  <tr><th>pronome</th><th>terminação</th><th>exemplo</th><th>português</th></tr>
  <tr><td><span class="fi">minä</span></td><td><span class="fi pala">-n</span></td><td><span class="fi">puhun</span></td><td>eu falo</td></tr>
  <tr><td><span class="fi">sinä</span></td><td><span class="fi pala">-t</span></td><td><span class="fi">puhut</span></td><td>você fala</td></tr>
  <tr><td><span class="fi">hän</span></td><td>vogal longa (ou nada)</td><td><span class="fi">puhuu</span></td><td>ele, ela fala</td></tr>
  <tr><td><span class="fi">me</span></td><td><span class="fi pala">-mme</span></td><td><span class="fi">puhumme</span></td><td>nós falamos</td></tr>
  <tr><td><span class="fi">te</span></td><td><span class="fi pala">-tte</span></td><td><span class="fi">puhutte</span></td><td>vocês falam</td></tr>
  <tr><td><span class="fi">he</span></td><td><span class="fi pala">-vat / -vät</span></td><td><span class="fi">puhuvat</span></td><td>eles, elas falam</td></tr>
</table>
<p>O verbo de negação também recebe pessoa (<span class="fi">en, et, ei, emme, ette, eivät</span>); o verbo principal fica sem terminação: <span class="fi">en puhu</span>. Veja <a href="#h-kielto">Negação</a>.</p>`
  },
  {
    id: 'h-verbityypit', kurssissa: ['t02', 't04', 't07'], osio: 'Verbos', otsikko: 'Os seis tipos de verbo', kuvaus: 'Como reconhecer o tipo pelo infinitivo e achar o radical.',
    html: `
<p>Todo verbo finlandês pertence a um de seis tipos. O tipo diz <b>como achar o radical</b>; as terminações são sempre as mesmas. Olhe o fim do infinitivo (a forma do dicionário). Os tipos 4 e 5 têm página própria: <a href="#h-tyypit45">Verbos dos tipos 4 e 5</a>.</p>
<table class="taivutus neljannes">
  <tr><th>tipo</th><th>infinitivo termina em</th><th>radical</th><th>exemplos</th></tr>
  <tr><td>1</td><td>vogal + <span class="fi pala">a/ä</span></td><td>tire <span class="fi pala">-a/-ä</span></td><td><span class="fi">puhua → puhu-</span>, <span class="fi">tietää → tiedä-</span><span class="kaannos" lang="pt-BR">falar, saber</span></td></tr>
  <tr><td>2</td><td><span class="fi pala">-da/-dä</span></td><td>tire <span class="fi pala">-da/-dä</span></td><td><span class="fi">syödä → syö-</span>, <span class="fi">juoda → juo-</span><span class="kaannos" lang="pt-BR">comer, beber</span></td></tr>
  <tr><td>3</td><td><span class="fi pala">-lla, -nna, -rra, -sta</span></td><td>tire 2 letras, ponha <span class="fi pala">-e</span></td><td><span class="fi">tulla → tule-</span>, <span class="fi">mennä → mene-</span>, <span class="fi">pestä → pese-</span><span class="kaannos" lang="pt-BR">vir, ir, lavar</span></td></tr>
  <tr><td>4</td><td>vogal + <span class="fi pala">-ta/-tä</span></td><td>tire <span class="fi pala">-ta</span>, ponha <span class="fi pala">-a</span></td><td><span class="fi">haluta → halua-</span>, <span class="fi">tavata → tapaa-</span><span class="kaannos" lang="pt-BR">querer, encontrar</span></td></tr>
  <tr><td>5</td><td><span class="fi pala">-ita/-itä</span></td><td>tire <span class="fi pala">-a</span>, ponha <span class="fi pala">-se</span></td><td><span class="fi">tarvita → tarvitse-</span>, <span class="fi">valita → valitse-</span><span class="kaannos" lang="pt-BR">precisar, escolher</span></td></tr>
  <tr><td>6</td><td><span class="fi pala">-eta/-etä</span></td><td>tire <span class="fi pala">-ta</span>, ponha <span class="fi pala">-ne</span></td><td><span class="fi">vanheta → vanhene-</span> (raro)<span class="kaannos" lang="pt-BR">envelhecer</span></td></tr>
</table>
<p>Atenção: alguns verbos em <span class="fi pala">-ita</span> e <span class="fi pala">-eta</span> são do tipo 4 (<span class="fi">selvitä → selviää</span>); o dicionário indica. Os tipos 1 e 3 são os mais comuns.</p>
<h3>As formas na bolha das palavras</h3>
<p>Quando você toca num verbo, a bolha mostra o presente em todas as pessoas, como numa tabela de conjugação:
<span class="fi">minä olen, sinä olet, hän on, me olemme, te olette, he ovat</span>. Embaixo vem a negação: depois de
<span class="fi">en, et, ei…</span> o verbo fica igual em todas as pessoas (<span class="fi">en ole, et ole, ei ole</span>).
É a mesma tabela para todo verbo. O “tipo” diz a qual dos seis grupos o verbo pertence, como -ar, -er e -ir no português.</p>
<h3>Um exemplo de cada tipo</h3>
<p>Tabelas feitas pelo motor de flexão do curso. Toque ▶ para ouvir.</p>
<div class="taivutustaulu" data-verbi="puhua" data-osat="myonteinen,kielto" data-selite="tipo 1 · falar"></div>
<div class="taivutustaulu" data-verbi="syödä" data-osat="myonteinen,kielto" data-selite="tipo 2 · comer"></div>
<div class="taivutustaulu" data-verbi="tulla" data-osat="myonteinen,kielto" data-selite="tipo 3 · vir"></div>
<div class="taivutustaulu" data-verbi="haluta" data-osat="myonteinen,kielto" data-selite="tipo 4 · querer"></div>
<div class="taivutustaulu" data-verbi="tarvita" data-osat="myonteinen,kielto" data-selite="tipo 5 · precisar"></div>
<div class="taivutustaulu" data-verbi="vanheta" data-osat="myonteinen,kielto" data-selite="tipo 6 · envelhecer"></div>
<div class="saanto">
  <h3>Gradação nos tipos</h3>
  <p>No <b>tipo 1</b>, o infinitivo é forte e as formas eu/você/nós/vocês são fracas: <span class="fi">nukkua → nukun</span>. Nos <b>tipos 3, 4 e 6</b> é o contrário: o infinitivo é fraco e todas as pessoas são fortes: <span class="fi">ajatella → ajattelen</span>, <span class="fi">tavata → tapaan</span>. Veja <a href="#h-astevaihtelu">Gradação consonantal</a>.</p>
</div>`
  },
  {
    id: 'h-olla', kurssissa: ['t01', 't05', 't13'], osio: 'Verbos', otsikko: 'O verbo olla (ser, estar, ter)', kuvaus: 'O verbo mais usado: todas as formas do presente, o passado e “eu tenho”.',
    html: `
<p><span class="fi">Olla</span> é “ser” e “estar”. Com o caso adessivo (<span class="fi pala">-lla/-llä</span>), também é “ter”: <span class="fi">minulla on</span> = “eu tenho” (lição 5).</p>
<div class="taivutustaulu" data-verbi="olla" data-osat="myonteinen,kielto,kysymys" data-selite="ser, estar"></div>
<h3>Passado (pretérito): olin</h3>
<table class="taivutus neljannes">
  <tr><th>afirmativo</th><th>negativo</th></tr>
  <tr><td><span class="fi">minä olin</span><span class="kaannos" lang="pt-BR">eu era, estava; fui, estive</span></td><td><span class="fi">minä en ollut</span><span class="kaannos" lang="pt-BR">eu não era, não estava</span></td></tr>
  <tr><td><span class="fi">sinä olit</span><span class="kaannos" lang="pt-BR">você era, estava</span></td><td><span class="fi">sinä et ollut</span><span class="kaannos" lang="pt-BR">você não era, não estava</span></td></tr>
  <tr><td><span class="fi">hän oli</span><span class="kaannos" lang="pt-BR">ele, ela era, estava</span></td><td><span class="fi">hän ei ollut</span><span class="kaannos" lang="pt-BR">ele, ela não era, não estava</span></td></tr>
  <tr><td><span class="fi">me olimme</span><span class="kaannos" lang="pt-BR">nós éramos, estávamos</span></td><td><span class="fi">me emme olleet</span><span class="kaannos" lang="pt-BR">nós não éramos, não estávamos</span></td></tr>
  <tr><td><span class="fi">te olitte</span><span class="kaannos" lang="pt-BR">vocês eram, estavam</span></td><td><span class="fi">te ette olleet</span><span class="kaannos" lang="pt-BR">vocês não eram, não estavam</span></td></tr>
  <tr><td><span class="fi">he olivat</span><span class="kaannos" lang="pt-BR">eles, elas eram, estavam</span></td><td><span class="fi">he eivät olleet</span><span class="kaannos" lang="pt-BR">eles, elas não eram, não estavam</span></td></tr>
</table>
<h3>“Ter” com olla</h3>
<ul class="esim">
  <li class="s" data-pt="Eu tenho um irmão.">Minulla on veli.</li>
  <li class="s" data-pt="Você tem tempo?">Onko sinulla aikaa?</li>
  <li class="s" data-pt="Eu tenho fome.">Minulla on nälkä.</li>
</ul>
<p>Não existe verbo “ter”: diz-se “em mim há”. O tema completo vem na lição 5.</p>`
  },
  {
    id: 'h-kielto', kurssissa: ['t01', 't02', 't15'], osio: 'Perguntas e negação', otsikko: 'Negação', kuvaus: 'O verbo de negação en, et, ei… e a forma que vem depois.',
    html: `
<p>O finlandês nega com um <b>verbo</b>, que recebe a pessoa. O verbo principal vem depois, na forma negativa: o radical do “eu”, sem a terminação de pessoa (<span class="fi">puhun → en puhu</span>, <span class="fi">menen → en mene</span>, <span class="fi">tapaan → en tapaa</span>).</p>
<table class="taivutus neljannes">
  <tr><th>negação</th><th>presente</th><th>passado</th></tr>
  <tr><td><span class="fi">minä en</span><span class="kaannos" lang="pt-BR">eu não</span></td><td><span class="fi">en puhu</span><span class="kaannos" lang="pt-BR">não falo</span></td><td><span class="fi">en puhunut</span><span class="kaannos" lang="pt-BR">não falei</span></td></tr>
  <tr><td><span class="fi">sinä et</span><span class="kaannos" lang="pt-BR">você não</span></td><td><span class="fi">et puhu</span><span class="kaannos" lang="pt-BR">não fala</span></td><td><span class="fi">et puhunut</span><span class="kaannos" lang="pt-BR">não falou</span></td></tr>
  <tr><td><span class="fi">hän ei</span><span class="kaannos" lang="pt-BR">ele, ela não</span></td><td><span class="fi">ei puhu</span><span class="kaannos" lang="pt-BR">não fala</span></td><td><span class="fi">ei puhunut</span><span class="kaannos" lang="pt-BR">não falou</span></td></tr>
  <tr><td><span class="fi">me emme</span><span class="kaannos" lang="pt-BR">nós não</span></td><td><span class="fi">emme puhu</span><span class="kaannos" lang="pt-BR">não falamos</span></td><td><span class="fi">emme puhuneet</span><span class="kaannos" lang="pt-BR">não falamos</span></td></tr>
  <tr><td><span class="fi">te ette</span><span class="kaannos" lang="pt-BR">vocês não</span></td><td><span class="fi">ette puhu</span><span class="kaannos" lang="pt-BR">não falam</span></td><td><span class="fi">ette puhuneet</span><span class="kaannos" lang="pt-BR">não falaram</span></td></tr>
  <tr><td><span class="fi">he eivät</span><span class="kaannos" lang="pt-BR">eles, elas não</span></td><td><span class="fi">eivät puhu</span><span class="kaannos" lang="pt-BR">não falam</span></td><td><span class="fi">eivät puhuneet</span><span class="kaannos" lang="pt-BR">não falaram</span></td></tr>
</table>
<ul>
  <li>Resposta negativa curta: <span class="fi">En.</span> sozinho é seco; diga <span class="fi">En ole.</span>, <span class="fi">En puhu.</span>, <span class="fi">Ei ole.</span></li>
  <li>Ordem negativa (imperativo): <span class="fi">älä</span> + verbo: <span class="fi">älä puhu!</span> (não fale!), para vários: <span class="fi">älkää puhuko!</span></li>
  <li>Depois da negação, o objeto vai para o partitivo: <span class="fi">en osta kahvia</span>.</li>
</ul>`
  },
  {
    id: 'h-kysymys', kurssissa: ['t01'], osio: 'Perguntas e negação', otsikko: 'Perguntas', kuvaus: '-ko/-kö, palavras interrogativas e respostas curtas.',
    html: `
<h3>Pergunta de sim ou não: -ko / -kö</h3>
<p>Cole <span class="fi pala">-ko</span> (palavras com a, o, u) ou <span class="fi pala">-kö</span> (só ä, ö, y, e, i) na palavra perguntada e ponha-a no começo. Normalmente é o verbo:</p>
<ul class="esim">
  <li class="s" data-pt="Você é finlandês?">Oletko sinä suomalainen?</li>
  <li class="s" data-pt="Você entende?">Ymmärrätkö?</li>
  <li class="s" data-pt="Você não vem?">Etkö sinä tule?</li>
</ul>
<p>Pode-se perguntar outra palavra, para destacá-la: <span class="fi">Maiako sen sanoi?</span> (foi a Maia que disse?).</p>
<h3>Palavras interrogativas</h3>
<p>Com palavra interrogativa, não se usa <span class="fi pala">-ko</span>: <span class="fi">Mistä sinä olet?</span> Veja a lista em <a href="#h-kysymyssanat">Palavras interrogativas</a>.</p>
<h3>Respostas</h3>
<p>Repita o verbo: <span class="fi">Puhutko suomea? – Puhun. / En puhu.</span> <span class="fi">Kyllä</span> (sim) existe, mas a repetição do verbo é o mais natural.</p>`
  },
  {
    id: 'h-aikamuodot', kurssissa: ['t01', 't02', 't04', 't09', 't13', 't14', 't15', 't19', 't20'], osio: 'Verbos', otsikko: 'Tempos e modos: visão geral', kuvaus: 'Presente, passado, perfeito, condicional, imperativo e passivo num só quadro.',
    html: `
<p>O finlandês tem <b>quatro tempos</b> e não tem futuro: o presente serve também para o futuro (<span class="fi">huomenna minä opetan</span> = amanhã eu ensino/vou ensinar). Visão geral com <span class="fi">puhua</span>; a última coluna diz em que lição cada forma aparece.</p>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>nome</th><th>português</th><th>lição</th></tr>
  <tr><td><span class="fi">minä puhun</span></td><td>presente (preesens)</td><td>eu falo, vou falar</td><td>1–2</td></tr>
  <tr><td><span class="fi">minä puhuin</span></td><td>pretérito: falei, falava (imperfekti)</td><td>eu falei, falava</td><td>13, 15</td></tr>
  <tr><td><span class="fi">minä olen puhunut</span></td><td>perfeito: “já fiz” (perfekti)</td><td>eu já falei, tenho falado (até agora)</td><td>19</td></tr>
  <tr><td><span class="fi">minä olin puhunut</span></td><td>mais-que-perfeito</td><td>eu tinha falado</td><td>só aqui na Gramática</td></tr>
  <tr><td><span class="fi">minä puhuisin</span></td><td>condicional</td><td>eu falaria</td><td>4 e 15 (frases prontas), 20</td></tr>
  <tr><td><span class="fi">puhu! puhukaa!</span></td><td>imperativo</td><td>fale! falem!</td><td>9, 14</td></tr>
  <tr><td><span class="fi">puhutaan</span></td><td>passivo</td><td>fala-se</td><td>20</td></tr>
</table>
<p>Frases prontas úteis desde já: <span class="fi">haluaisin</span> (eu gostaria), <span class="fi">saisinko…?</span> (poderia me dar…?), <span class="fi">voisitko…?</span> (você poderia…?). A forma e o uso educado: <a href="#h-konditionaali">Condicional</a> (lição 15).</p>
<p>O passado (<span class="fi">puhuin, hän puhui</span>) em detalhe, com o radical de cada tipo e a consoante fraca: <a href="#h-imperfekti">Passado: o imperfekti</a> (lição 13).</p>
<p><b>Perfeito ou passado?</b> (lição 19) O português diz “falei” nos dois casos. O perfeito (<span class="fi">olen puhunut</span>) fala de algo até agora, sem quando: <span class="fi">Olen käynyt Ouro Pretossa.</span> (já fui a Ouro Preto). O passado (<span class="fi">puhuin</span>) fala de um momento terminado: <span class="fi">Kävin Ouro Pretossa eilen.</span> (fui ontem). Formas, negação e exemplos: <a href="#h-perfekti">Perfeito: olen käynyt</a>.</p>
<p><b>Passivo e “se”</b> (lição 20): o passivo diz o que se faz, sem pessoa (<span class="fi">Suomessa saunotaan</span>); veja <a href="#h-passiivi">Passivo</a>. O condicional com <span class="fi">jos</span> imagina (<span class="fi">Jos minulla olisi mökki, asuisin täällä.</span>); veja <a href="#h-konditionaali">Condicional</a>.</p>`
  },
  {
    id: 'h-epasaannolliset', kurssissa: ['t01', 't04'], osio: 'Verbos', otsikko: 'Verbos irregulares', kuvaus: 'São poucos: olla, nähdä, tehdä e alguns outros.',
    html: `
<p>O finlandês tem pouquíssimos verbos irregulares. Os mais importantes:</p>
<div class="taivutustaulu" data-verbi="olla" data-osat="myonteinen,kielto" data-selite="ser, estar · on, ovat"></div>
<div class="taivutustaulu" data-verbi="tehdä" data-osat="myonteinen,kielto" data-selite="fazer · tee- / teke-"></div>
<div class="taivutustaulu" data-verbi="nähdä" data-osat="myonteinen,kielto" data-selite="ver · näe- / näke-"></div>
<div class="taivutustaulu" data-verbi="juosta" data-osat="myonteinen,kielto" data-selite="correr · juokse-"></div>
<p>Outros pequenos desvios: <span class="fi">käydä</span> (visitar: <span class="fi">käyn, kävin</span>), <span class="fi" data-l="maata">maata</span> (estar deitado: <span class="fi">makaan</span>), <span class="fi">pelätä</span> (ter medo: <span class="fi">pelkään</span>).</p>`
  },

  /* ---------- Gradação ---------- */
  {
    id: 'h-astevaihtelu', kurssissa: ['t02', 't06', 't08'], osio: 'Como a palavra muda', otsikko: 'Gradação consonantal (astevaihtelu)', kuvaus: 'kk : k, t : d, rt : rr… Por que Helsinki vira Helsingissä.',
    html: `
<p>Em muitas palavras finlandesas, as consoantes <span class="fi pala">k, p, t</span> no começo da última sílaba mudam: há um grau <b>forte</b> e um grau <b>fraco</b>. Estudos com aprendizes adultos mostram que essa mudança do radical é a maior dificuldade do finlandês, mais do que as terminações. Por isso o curso mostra a gradação desde a lição 2, primeiro só para reconhecer.</p>
<h3>Os pares</h3>
<table class="taivutus neljannes">
  <tr><th>forte</th><th>fraco</th><th>verbo</th><th>substantivo</th></tr>
  <tr><td><span class="fi pala">kk</span></td><td><span class="fi pala">k</span></td><td><span class="fi">nukkua → nukun</span><span class="kaannos" lang="pt-BR">dormir → eu durmo</span></td><td><span class="fi">kukka → kukan</span><span class="kaannos" lang="pt-BR">flor → da flor</span></td></tr>
  <tr><td><span class="fi pala">pp</span></td><td><span class="fi pala">p</span></td><td><span class="fi">oppia → opin</span><span class="kaannos" lang="pt-BR">aprender → eu aprendo</span></td><td><span class="fi">kauppa → kaupassa</span><span class="kaannos" lang="pt-BR">loja → na loja</span></td></tr>
  <tr><td><span class="fi pala">tt</span></td><td><span class="fi pala">t</span></td><td><span class="fi">odottaa → odotan</span><span class="kaannos" lang="pt-BR">esperar → eu espero</span></td><td><span class="fi">kartta → kartassa</span><span class="kaannos" lang="pt-BR">mapa → no mapa</span></td></tr>
  <tr><td><span class="fi pala">k</span></td><td>–</td><td><span class="fi">lukea → luen</span><span class="kaannos" lang="pt-BR">ler → eu leio</span></td><td><span class="fi">ruoka → ruoan</span><span class="kaannos" lang="pt-BR">comida → da comida</span></td></tr>
  <tr><td><span class="fi pala">p</span></td><td><span class="fi pala">v</span></td><td><span class="fi">sopia → sovin</span><span class="kaannos" lang="pt-BR">combinar → eu combino</span></td><td><span class="fi">tapa → tavan</span><span class="kaannos" lang="pt-BR">jeito → do jeito</span></td></tr>
  <tr><td><span class="fi pala">t</span></td><td><span class="fi pala">d</span></td><td><span class="fi">tietää → tiedän</span><span class="kaannos" lang="pt-BR">saber → eu sei</span></td><td><span class="fi">äiti → äidin</span><span class="kaannos" lang="pt-BR">mãe → da mãe</span></td></tr>
  <tr><td><span class="fi pala">nk</span></td><td><span class="fi pala">ng</span></td><td><span class="fi pala">—</span></td><td><span class="fi">Helsinki → Helsingissä</span><span class="kaannos" lang="pt-BR">Helsinque → em Helsinque</span></td></tr>
  <tr><td><span class="fi pala">mp</span></td><td><span class="fi pala">mm</span></td><td><span class="fi">ampua → ammun</span><span class="kaannos" lang="pt-BR">atirar → eu atiro</span></td><td><span class="fi">kampa → kamman</span><span class="kaannos" lang="pt-BR">pente → do pente</span></td></tr>
  <tr><td><span class="fi pala">lt</span></td><td><span class="fi pala">ll</span></td><td><span class="fi">kieltää → kiellän</span><span class="kaannos" lang="pt-BR">proibir → eu proíbo</span></td><td><span class="fi">ilta → illalla</span><span class="kaannos" lang="pt-BR">noite → à noite</span></td></tr>
  <tr><td><span class="fi pala">nt</span></td><td><span class="fi pala">nn</span></td><td><span class="fi">tuntea → tunnen</span><span class="kaannos" lang="pt-BR">conhecer → eu conheço</span></td><td><span class="fi">ranta → rannalla</span><span class="kaannos" lang="pt-BR">praia → na praia</span></td></tr>
  <tr><td><span class="fi pala">rt</span></td><td><span class="fi pala">rr</span></td><td><span class="fi">ymmärtää → ymmärrän</span><span class="kaannos" lang="pt-BR">entender → eu entendo</span></td><td><span class="fi">kerta → <span data-l="kerta:gen">kerran</span></span><span class="kaannos" lang="pt-BR">vez → da vez</span></td></tr>
  <tr><td><span class="fi pala">ht</span></td><td><span class="fi pala">hd</span></td><td><span class="fi">lähteä → lähden</span><span class="kaannos" lang="pt-BR">partir → eu parto</span></td><td><span class="fi">lahti → lahdessa</span><span class="kaannos" lang="pt-BR">baía → na baía</span></td></tr>
  <tr><td><span class="fi pala">lke, rke</span></td><td><span class="fi pala">lje, rje</span></td><td><span class="fi">kulkea → kuljen</span><span class="kaannos" lang="pt-BR">andar → eu ando</span></td><td><span class="fi">jälki → jäljen</span><span class="kaannos" lang="pt-BR">rastro → do rastro</span></td></tr>
</table>
<p>Não há gradação depois de <span class="fi pala">s</span>, <span class="fi pala">t</span> e <span class="fi pala">k</span>: <span class="fi pala">st, sk, sp, tk, ts, ks</span> nunca mudam (<span class="fi">istua → istun</span>, <span class="fi">etsiä → etsin</span>).</p>
<h3>Nos substantivos da casa (lição 8)</h3>
<table class="taivutus neljannes">
  <tr><th>forte : fraco</th><th>forma básica</th><th>genitivo</th><th>onde?</th></tr>
  <tr><td><span class="fi pala">pp : p</span></td><td><span class="fi">lamppu</span><span class="kaannos" lang="pt-BR">luminária</span></td><td><span class="fi">lampun</span></td><td><span class="fi">lampussa</span></td></tr>
  <tr><td><span class="fi pala">tt : t</span></td><td><span class="fi">katto</span><span class="kaannos" lang="pt-BR">teto</span></td><td><span class="fi">katon</span></td><td><span class="fi">katossa</span></td></tr>
  <tr><td><span class="fi pala">nt : nn</span></td><td><span class="fi">asunto</span><span class="kaannos" lang="pt-BR">apartamento</span></td><td><span class="fi">asunnon</span></td><td><span class="fi">asunnossa</span></td></tr>
  <tr><td><span class="fi pala">nk : ng</span></td><td><span class="fi">sänky</span><span class="kaannos" lang="pt-BR">cama</span></td><td><span class="fi">sängyn</span></td><td><span class="fi">sängyssä</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="4">inversa: a forma básica é a fraca</th></tr>
  <tr><td><span class="fi pala">k : kk</span></td><td><span class="fi">parveke</span><span class="kaannos" lang="pt-BR">varanda</span></td><td><span class="fi">parvekkeen</span></td><td><span class="fi">parvekkeella</span></td></tr>
  <tr><td><span class="fi pala">k : kk</span></td><td><span class="fi">rikas</span><span class="kaannos" lang="pt-BR">rico</span></td><td><span class="fi">rikkaan</span></td><td><span class="fi">rikkaassa</span></td></tr>
</table>
<div class="saanto">
  <h3>Regra prática</h3>
  <p>O grau fica <b>fraco</b> quando a última sílaba é <b>fechada</b> (termina em consoante): <span class="fi pala">nu-kun</span>, <span class="fi pala">kau-pan</span>, <span class="fi pala">Hel-sin-gin</span>. Fica <b>forte</b> quando a sílaba é aberta: <span class="fi pala">nuk-kuu</span>, <span class="fi pala">kaup-pa</span>. A regra tem exceções, mas explica a maior parte.</p>
  <p><b>Direta</b> (substantivos como <span class="fi">kauppa</span>, verbos do tipo 1): forma básica forte → formas flexionadas fracas. <b>Inversa</b> (substantivos como <span class="fi">sade → sateen</span>, verbos dos tipos 3, 4, 6): forma básica fraca → formas flexionadas fortes.</p>
</div>
<h3>Ver a gradação em tabelas</h3>
<div class="taivutustaulu" data-verbi="ymmärtää" data-osat="myonteinen,kielto" data-selite="direta: rt : rr"></div>
<div class="taivutustaulu" data-verbi="tavata" data-osat="myonteinen,kielto" data-selite="inversa: v : p"></div>
<div class="sijataulu" data-sana="kauppa" data-gen="kaupan" data-part="kauppaa" data-ill="kauppaan" data-sijat="nominatiivi,genetiivi,partitiivi,inessiivi,illatiivi,adessiivi,monikko"></div>`
  },

  /* ---------- Substantivos e casos ---------- */
  {
    id: 'h-sijat', kurssissa: ['t03', 't05', 't06', 't07', 't10', 't12', 't16'], osio: 'Substantivos e casos', otsikko: 'Os casos: visão geral', kuvaus: 'Em vez de preposições, terminações. Os 15 casos, do mais usado ao mais raro.',
    html: `
<p>Onde o português usa preposição (em, de, para, com), o finlandês usa <b>terminação</b>: <span class="fi">talossa</span> = na casa, <span class="fi">talosta</span> = da casa, <span class="fi">taloon</span> = para a casa. Essas formas são os <b>casos</b>. Parecem muitos, mas três deles (nominativo, genitivo e partitivo) fazem cerca de 70 % de tudo o que se diz, e os seis de lugar seguem uma grade lógica.</p>
<table class="taivutus neljannes">
  <tr><th>exemplo</th><th>caso e terminação</th><th>pergunta</th></tr>
  <tr><td><span class="fi">talo</span><span class="kaannos" lang="pt-BR">a casa (sujeito)</span></td><td>nominativo<span class="solurivi">–</span></td><td><span class="fi">mikä? kuka?</span><span class="kaannos" lang="pt-BR">o quê? quem?</span></td></tr>
  <tr><td><span class="fi">talon</span><span class="kaannos" lang="pt-BR">da casa (posse)</span></td><td>genitivo<span class="fi pala solurivi">-n</span></td><td><span class="fi">minkä? kenen?</span><span class="kaannos" lang="pt-BR">de quê? de quem?</span></td></tr>
  <tr><td><span class="fi">taloa</span><span class="kaannos" lang="pt-BR">(um pouco de) casa; objeto incompleto</span></td><td>partitivo<span class="fi pala solurivi">-a, -ta, -tta</span></td><td><span class="fi">mitä? ketä?</span><span class="kaannos" lang="pt-BR">o quê? quem? (uma parte)</span></td></tr>
  <tr><td><span class="fi">talossa</span><span class="kaannos" lang="pt-BR">na casa (dentro)</span></td><td>inessivo<span class="fi pala solurivi">-ssa</span></td><td><span class="fi">missä?</span><span class="kaannos" lang="pt-BR">onde?</span></td></tr>
  <tr><td><span class="fi">talosta</span><span class="kaannos" lang="pt-BR">da casa (de dentro); sobre a casa</span></td><td>elativo<span class="fi pala solurivi">-sta</span></td><td><span class="fi">mistä?</span><span class="kaannos" lang="pt-BR">de onde?</span></td></tr>
  <tr><td><span class="fi">taloon</span><span class="kaannos" lang="pt-BR">para dentro da casa</span></td><td>ilativo<span class="fi pala solurivi">-aan, -oon, -iin…, -han, -hön…, -seen</span></td><td><span class="fi">mihin?</span><span class="kaannos" lang="pt-BR">para onde?</span></td></tr>
  <tr><td><span class="fi">talolla</span><span class="kaannos" lang="pt-BR">em cima/junto da casa; com (instrumento); ter</span></td><td>adessivo<span class="fi pala solurivi">-lla</span></td><td><span class="fi">millä? kenellä?</span><span class="kaannos" lang="pt-BR">em cima de quê?, com quê? quem tem?</span></td></tr>
  <tr><td><span class="fi">talolta</span><span class="kaannos" lang="pt-BR">de cima/de junto da casa; de alguém</span></td><td>ablativo<span class="fi pala solurivi">-lta</span></td><td><span class="fi">miltä? keneltä?</span><span class="kaannos" lang="pt-BR">de cima de quê? de quem? (receber de alguém)</span></td></tr>
  <tr><td><span class="fi">talolle</span><span class="kaannos" lang="pt-BR">para cima/para junto da casa; para alguém</span></td><td>alativo<span class="fi pala solurivi">-lle</span></td><td><span class="fi">mille? kenelle?</span><span class="kaannos" lang="pt-BR">para cima de quê? para quem?</span></td></tr>
  <tr><td><span class="fi">talona</span><span class="kaannos" lang="pt-BR">como casa, na qualidade de</span></td><td>essivo<span class="fi pala solurivi">-na</span></td><td><span class="fi" data-l="mikä:ess">minä?</span><span class="kaannos" lang="pt-BR">como quê?</span></td></tr>
  <tr><td><span class="fi">taloksi</span><span class="kaannos" lang="pt-BR">(virar) casa</span><span class="fi solurivi">suomeksi</span><span class="kaannos" lang="pt-BR">em finlandês (língua)</span></td><td>translativo<span class="fi pala solurivi">-ksi</span></td><td><span class="fi" data-l="mikä:transl">miksi?</span><span class="kaannos" lang="pt-BR">em quê? (virar o quê?)</span></td></tr>
  <tr><td><span class="fi">talotta</span><span class="kaannos" lang="pt-BR">sem casa (raro); na fala, diga:</span><span class="fi solurivi">ilman taloa</span><span class="kaannos" lang="pt-BR">sem casa</span></td><td>abessivo<span class="fi pala solurivi">-tta</span></td><td></td></tr>
  <tr><td><span class="fi">taloineen</span><span class="kaannos" lang="pt-BR">com as suas casas (raro, escrito)</span></td><td>comitativo<span class="fi pala solurivi">-ine-</span></td><td></td></tr>
  <tr><td><span class="fi">taloin</span><span class="kaannos" lang="pt-BR">só em expressões fixas, como:</span><span class="fi solurivi" data-l="jalka:instr">jalan</span><span class="kaannos" lang="pt-BR">a pé</span></td><td>instrutivo<span class="fi pala solurivi">-in</span></td><td></td></tr>
  <tr><td><span class="fi">talo / talon</span><span class="kaannos" lang="pt-BR">objeto completo (lição 12)</span></td><td>acusativo<span class="solurivi">–, <span class="fi pala">-n</span>, <span class="fi pala">-t</span></span></td><td></td></tr>
</table>
<h3>Uma palavra em todos os casos do singular</h3>
<p>Tabela feita pelo motor de flexão a partir das quatro formas-chave (nominativo, genitivo, partitivo, ilativo):</p>
<div class="sijataulu" data-sana="talo" data-gen="talon" data-part="taloa" data-ill="taloon"></div>
<div class="sijataulu" data-sana="Helsinki" data-gen="Helsingin" data-part="Helsinkiä" data-ill="Helsinkiin" data-sijat="nominatiivi,genetiivi,partitiivi,inessiivi,elatiivi,illatiivi,essiivi"></div>
<div class="saanto">
  <h3>Por que “formas-chave”?</h3>
  <p>O fim de uma palavra pode mudar o radical (<span class="fi">huone → huoneessa</span>, <span class="fi">nainen → naisen</span>, <span class="fi">vesi → veden</span>). Quem conhece o <b>genitivo</b> (geralmente o radical fraco) e o <b>ilativo</b> (geralmente o radical forte) consegue fazer quase todos os casos. Por isso o vocabulário do curso mostra essas formas.</p>
</div>
<h3>O adjetivo vai junto (lição 12)</h3>
<p>O adjetivo, os pronomes <span class="fi">tämä, tuo, se</span> e os ordinais recebem <b>o mesmo caso e o mesmo número</b> do substantivo: <span class="fi">sininen paita → sinisessä paidassa</span> (de camisa azul), <span class="fi">tämä iso kauppa → tässä isossa kaupassa</span> (nesta loja grande), <span class="fi">kolmas kerros → kolmannessa kerroksessa</span> (no terceiro andar). O adjetivo vem sempre antes do substantivo e tem o seu próprio radical: <span class="fi">sininen → sinisen</span>, <span class="fi">uusi → uuden</span>.</p>
<p>O objeto (o acusativo da tabela: <span class="fi">talon, talot</span>) tem a sua própria página: <a href="#h-objekti">O objeto: inteiro ou parte?</a></p>
<p>O mapa completo, com plural, perguntas e quanto cada caso é usado: <a href="#h-sijataulu">Todos os casos numa tabela</a> (nível avançado).</p>
<p>O essivo (<span class="fi">lapsena, jouluna</span>) e o translativo (<span class="fi">iloiseksi, suomeksi</span>) em detalhe, com os usos e as armadilhas: <a href="#h-essiivi">Como? Virar o quê? Essivo e translativo</a> (lição 16).</p>`
  },
  {
    id: 'h-sijataulu', kurssissa: ['t03', 't05', 't06', 't07', 't10', 't12', 't16'], osio: 'Substantivos e casos', otsikko: 'Todos os casos numa tabela (nível avançado)', kuvaus: 'O mapa completo: 15 casos, singular e plural, perguntas, exemplos e quanto cada um é usado de verdade.',
    html: `
<div class="huomio">
  <p><b>Nível avançado.</b> Esta página mostra o sistema inteiro de uma vez. Ninguém aprende assim, nem os finlandeses. Use como <b>mapa</b>: para ver onde fica o que você já aprendeu e o que ainda vem. O curso ensina 12 destes casos, um de cada vez, nas lições indicadas. Os 3 últimos são raros: basta reconhecer.</p>
</div>
<p>Em português, a palavra fica igual e a preposição muda: <i lang="pt-BR">no geólogo, do geólogo, para o geólogo</i>. Em finlandês, a palavra ganha uma terminação: <span class="fi">geologissa, geologista, geologiin</span>. Cada terminação é um <b>caso</b>. A pergunta ao lado (<span class="fi">missä?</span> = onde?) ajuda a escolher: a resposta usa a mesma terminação da pergunta (<span class="fi">missä? → geologissa</span>).</p>
<p>Exemplo em toda a tabela: <span class="fi">geologi</span> (geólogo, geóloga), a profissão do Jay e da Maia. As perguntas com <span class="fi pala">mi-</span> são para coisas (o quê?), as com <span class="fi pala">ke-</span> para pessoas (quem?).</p>

<h3>A tabela completa</h3>
<div class="vieritys">
<table class="taivutus sijataulu-kaikki">
  <tr><th>caso</th><th>pergunta: uma coisa</th><th>uma coisa (singular)</th><th>pergunta: várias coisas</th><th>várias coisas (plural)</th></tr>
  <tr class="taulu-ryhma"><th colspan="5">Os três grandes: 7 de cada 10 casos num texto. Aprenda primeiro.</th></tr>
  <tr><td>nominativo <small>37 %</small></td><td><span class="fi">mikä? kuka?</span><span class="kaannos" lang="pt-BR">o quê? quem?</span></td><td><span class="fi">geologi</span><span class="kaannos" lang="pt-BR">o geólogo</span></td><td><span class="fi">mitkä? ketkä?</span><span class="kaannos" lang="pt-BR">quais? quem?</span></td><td><span class="fi">geologit</span><span class="kaannos" lang="pt-BR">os geólogos</span></td></tr>
  <tr><td>genitivo <small>22 %</small></td><td><span class="fi">minkä? kenen?</span><span class="kaannos" lang="pt-BR">de quê? de quem?</span></td><td><span class="fi">geologin</span><span class="kaannos" lang="pt-BR">do geólogo</span></td><td><span class="fi">minkä? keiden?</span><span class="kaannos" lang="pt-BR">de quê? de quem?</span></td><td><span class="fi">geologien</span><span class="kaannos" lang="pt-BR">dos geólogos</span></td></tr>
  <tr><td>partitivo <small>14 %</small></td><td><span class="fi">mitä? ketä?</span><span class="kaannos" lang="pt-BR">o quê? quem? (uma parte)</span></td><td><span class="fi">geologia</span><span class="kaannos" lang="pt-BR">(um) geólogo (parte)</span></td><td><span class="fi">mitä? keitä?</span><span class="kaannos" lang="pt-BR">o quê? quem? (uma parte)</span></td><td><span class="fi">geologeja</span><span class="kaannos" lang="pt-BR">(alguns) geólogos</span></td></tr>
  <tr><td>acusativo <small>*</small></td><td><span class="fi">minkä? kenet?</span><span class="kaannos" lang="pt-BR">o quê? quem? (inteiro)</span></td><td><span class="fi">geologin</span>, <span class="fi">hänet</span><span class="kaannos" lang="pt-BR">o geólogo, ele, ela (inteiro)</span></td><td><span class="fi">mitkä? ketkä?</span><span class="kaannos" lang="pt-BR">quais? quem?</span></td><td><span class="fi">geologit</span>, <span class="fi">heidät</span><span class="kaannos" lang="pt-BR">os geólogos, eles (inteiro)</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="5">Lugar e estado: comuns, cada um de 1 a 6 casos em 100. O curso ensina todos.</th></tr>
  <tr><td>ilativo <small>6 %</small></td><td><span class="fi">mihin? keneen?</span><span class="kaannos" lang="pt-BR">para onde? para dentro de quem?</span></td><td><span class="fi">geologiin</span><span class="kaannos" lang="pt-BR">para dentro do geólogo</span></td><td><span class="fi">mihin? keihin?</span><span class="kaannos" lang="pt-BR">para onde? para dentro de quem?</span></td><td><span class="fi">geologeihin</span><span class="kaannos" lang="pt-BR">para dentro dos geólogos</span></td></tr>
  <tr><td>inessivo <small>6 %</small></td><td><span class="fi">missä? kenessä?</span><span class="kaannos" lang="pt-BR">onde? em quem?</span></td><td><span class="fi">geologissa</span><span class="kaannos" lang="pt-BR">no geólogo</span></td><td><span class="fi">missä? keissä?</span><span class="kaannos" lang="pt-BR">onde? em quem?</span></td><td><span class="fi">geologeissa</span><span class="kaannos" lang="pt-BR">nos geólogos</span></td></tr>
  <tr><td>elativo <small>4 %</small></td><td><span class="fi">mistä? kenestä?</span><span class="kaannos" lang="pt-BR">de onde? de quem?, sobre quem?</span></td><td><span class="fi">geologista</span><span class="kaannos" lang="pt-BR">do geólogo; sobre o geólogo</span></td><td><span class="fi">mistä? keistä?</span><span class="kaannos" lang="pt-BR">de onde? de quem?, sobre quem?</span></td><td><span class="fi">geologeista</span><span class="kaannos" lang="pt-BR">dos geólogos; sobre os geólogos</span></td></tr>
  <tr><td>adessivo <small>4 %</small></td><td><span class="fi">millä? kenellä?</span><span class="kaannos" lang="pt-BR">em cima de quê?, com quê? quem tem?</span></td><td><span class="fi">geologilla</span><span class="kaannos" lang="pt-BR">o geólogo tem; junto do geólogo</span></td><td><span class="fi">millä? keillä?</span><span class="kaannos" lang="pt-BR">em cima de quê?, com quê? quem tem?</span></td><td><span class="fi">geologeilla</span><span class="kaannos" lang="pt-BR">os geólogos têm; junto dos geólogos</span></td></tr>
  <tr><td>alativo <small>2 %</small></td><td><span class="fi">mille? kenelle?</span><span class="kaannos" lang="pt-BR">para cima de quê? para quem?</span></td><td><span class="fi">geologille</span><span class="kaannos" lang="pt-BR">para o geólogo</span></td><td><span class="fi">mille? keille?</span><span class="kaannos" lang="pt-BR">para cima de quê? para quem?</span></td><td><span class="fi">geologeille</span><span class="kaannos" lang="pt-BR">para os geólogos</span></td></tr>
  <tr><td>essivo <small>2 %</small></td><td><span class="fi" data-l="mikä:ess">minä?</span> <span class="fi">kenä?</span><span class="kaannos" lang="pt-BR">como quê? como quem?</span></td><td><span class="fi">geologina</span><span class="kaannos" lang="pt-BR">como geólogo</span></td><td><span class="fi" data-l="mikä:ess">minä?</span> <span class="fi">keinä?</span><span class="kaannos" lang="pt-BR">como quê? como quem?</span></td><td><span class="fi">geologeina</span><span class="kaannos" lang="pt-BR">como geólogos</span></td></tr>
  <tr><td>translativo <small>2 %</small></td><td><span class="fi" data-l="mikä:transl">miksi?</span> <span class="fi">keneksi?</span><span class="kaannos" lang="pt-BR">em quê? em quem? (virar)</span></td><td><span class="fi">geologiksi</span><span class="kaannos" lang="pt-BR">(virar) geólogo</span></td><td><span class="fi" data-l="mikä:transl">miksi?</span> <span class="fi">keiksi?</span><span class="kaannos" lang="pt-BR">em quê? em quem? (virar)</span></td><td><span class="fi">geologeiksi</span><span class="kaannos" lang="pt-BR">(virar) geólogos</span></td></tr>
  <tr><td>ablativo <small>1 %</small></td><td><span class="fi">miltä? keneltä?</span><span class="kaannos" lang="pt-BR">de cima de quê? de quem? (receber de alguém)</span></td><td><span class="fi">geologilta</span><span class="kaannos" lang="pt-BR">do geólogo (receber de)</span></td><td><span class="fi">miltä? keiltä?</span><span class="kaannos" lang="pt-BR">de cima de quê? de quem? (receber de alguém)</span></td><td><span class="fi">geologeilta</span><span class="kaannos" lang="pt-BR">dos geólogos (receber de)</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="5">Raros: menos de 1 em 200. Só para reconhecer; o curso não pede que você use.</th></tr>
  <tr><td>instrutivo <small>0,3 %</small></td><td><span class="fi">miten?</span><span class="kaannos" lang="pt-BR">como?</span></td><td>–</td><td><span class="fi">miten?</span><span class="kaannos" lang="pt-BR">como?</span></td><td>(<span class="fi">geologein</span>)<span class="kaannos" lang="pt-BR">com geólogos (quase não se usa)</span></td></tr>
  <tr><td>abessivo <small>0,2 %</small></td><td><span class="fi">ilman mitä? ilman ketä?</span><span class="kaannos" lang="pt-BR">sem o quê? sem quem?</span></td><td><span class="fi">geologitta</span><span class="kaannos" lang="pt-BR">sem geólogo</span></td><td><span class="fi">ilman mitä? ilman keitä?</span><span class="kaannos" lang="pt-BR">sem o quê? sem quem?</span></td><td><span class="fi">geologeitta</span><span class="kaannos" lang="pt-BR">sem geólogos</span></td></tr>
  <tr><td>comitativo <small>0,1 %</small></td><td><span class="fi">minkä kanssa? kenen kanssa?</span><span class="kaannos" lang="pt-BR">com quê? com quem?</span></td><td>–</td><td><span class="fi">minkä kanssa? keiden kanssa?</span><span class="kaannos" lang="pt-BR">com quê? com quem?</span></td><td><span class="fi">geologeineen</span><span class="kaannos" lang="pt-BR">com os seus geólogos</span></td></tr>
</table>
</div>
<p><small>Cuidado com duas perguntas que se escrevem igual a outra palavra: <span class="fi" data-l="mikä:ess">minä?</span> (como quê?) = <span class="fi">minä</span> (eu), e <span class="fi" data-l="mikä:transl">miksi?</span> (em quê?) = <span class="fi">miksi?</span> (por quê?). A frase mostra qual é.</small></p>
<p><small>Porcentagem = de cada 100 palavras com caso num texto, quantas estão neste caso (jornais e revistas finlandeses dos anos 1990; Iso suomen kielioppi, § 1227, tabela 10; números arredondados). * O acusativo quase sempre tem a mesma forma do nominativo ou do genitivo; só os pronomes pessoais têm forma própria com <span class="fi pala">-t</span> (<span class="fi">minut, sinut, hänet, meidät, teidät, heidät, kenet</span>).</small></p>

<h3>O que cada caso faz, em frases de verdade</h3>
<div class="vieritys">
<table class="taivutus neljannes">
  <tr><th>caso</th><th>para que serve</th><th>exemplo</th></tr>
  <tr class="taulu-ryhma"><th colspan="3">Os três grandes</th></tr>
  <tr><td>nominativo<br><small>lição 1</small></td><td>a forma do dicionário; quem faz a ação</td><td><span class="fi">Geologi on täällä.</span><span class="kaannos" lang="pt-BR">O geólogo está aqui.</span></td></tr>
  <tr><td>genitivo<br><small>lição 5</small></td><td>de quem é: “do, da”</td><td><span class="fi">Jayn äiti asuu Helsingissä.</span><span class="kaannos" lang="pt-BR">A mãe do Jay mora em Helsinque.</span></td></tr>
  <tr><td>partitivo<br><small>lição 3</small></td><td>uma parte, uma quantidade; depois de números; na negação</td><td><span class="fi">Ostan kaksi kahvia.</span><span class="kaannos" lang="pt-BR">Compro dois cafés.</span></td></tr>
  <tr><td>acusativo<br><small>lição 12</small></td><td>o objeto inteiro, a ação completa</td><td><span class="fi">Maia näkee hänet.</span><span class="kaannos" lang="pt-BR">A Maia vê ele.</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="3">Lugar: “dentro” (-ssa, -sta, -aan, -oon, -iin…) e “em cima, junto” (-lla, -lta, -lle)</th></tr>
  <tr><td>inessivo<br><small>lição 6</small></td><td>onde? dentro</td><td><span class="fi">Jay on toimistossa.</span><span class="kaannos" lang="pt-BR">O Jay está no escritório.</span></td></tr>
  <tr><td>elativo<br><small>lição 6</small></td><td>de onde? de dentro; também “sobre” (falar de)</td><td><span class="fi">Maia tulee Brasiliasta.</span><span class="kaannos" lang="pt-BR">A Maia vem do Brasil.</span></td></tr>
  <tr><td>ilativo<br><small>lição 6</small></td><td>para onde? para dentro</td><td><span class="fi">Menemme metroon.</span><span class="kaannos" lang="pt-BR">Vamos para o metrô.</span></td></tr>
  <tr><td>adessivo<br><small>lição 5, 7</small></td><td>onde? em cima, junto; quem tem (“ter”)</td><td><span class="fi">Minulla on kysymys.</span><span class="kaannos" lang="pt-BR">Eu tenho uma pergunta.</span></td></tr>
  <tr><td>ablativo<br><small>lição 7, 10</small></td><td>de onde? de cima; de quem (receber de alguém)</td><td><span class="fi">Saan viestin Purjolta.</span><span class="kaannos" lang="pt-BR">Recebo uma mensagem da Purjo.</span></td></tr>
  <tr><td>alativo<br><small>lição 7, 10</small></td><td>para onde? para cima; para quem</td><td><span class="fi">Soitan Purjolle.</span><span class="kaannos" lang="pt-BR">Ligo para a Purjo.</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="3">Estado: “como” e “virar”</th></tr>
  <tr><td>essivo<br><small>lição 16</small></td><td>como, na qualidade de; quando (dias, festas)</td><td><span class="fi">Maia on töissä geologina.</span><span class="kaannos" lang="pt-BR">A Maia trabalha como geóloga.</span><span class="fi solurivi">jouluna</span><span class="kaannos" lang="pt-BR">no Natal</span></td></tr>
  <tr><td>translativo<br><small>lição 16</small></td><td>virar, ficar (mudança); em que língua</td><td><span class="fi">Jay tulee iloiseksi.</span><span class="kaannos" lang="pt-BR">O Jay fica alegre.</span><span class="fi solurivi">suomeksi</span><span class="kaannos" lang="pt-BR">em finlandês</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="3">Raros: reconhecer basta</th></tr>
  <tr><td>instrutivo</td><td>só em expressões prontas</td><td><span class="fi" data-l="jalka:instr">jalan</span><span class="kaannos" lang="pt-BR">a pé</span><span class="fi solurivi">käsin</span><span class="kaannos" lang="pt-BR">à mão</span></td></tr>
  <tr><td>abessivo</td><td>sem (escrito; na fala use <span class="fi pala">ilman</span> + partitivo)</td><td><span class="fi">rahatta</span> = <span class="fi">ilman rahaa</span><span class="kaannos" lang="pt-BR">sem dinheiro (as duas formas)</span></td></tr>
  <tr><td>comitativo</td><td>junto com os seus (escrito; sempre com sufixo possessivo, por exemplo <span class="fi pala">-en</span> = seu, sua)</td><td><span class="fi">Maia tuli Suomeen laukkuineen.</span><span class="kaannos" lang="pt-BR">A Maia veio para a Finlândia com as malas.</span></td></tr>
</table>
</div>

<div class="saanto">
  <h3>Três truques para não se perder</h3>
  <p><b>1. A pergunta já é a resposta.</b> <span class="fi">Missä?</span> → <span class="fi pala">-ssa</span>, <span class="fi">mihin?</span> → para dentro, <span class="fi">kenelle?</span> → <span class="fi pala">-lle</span>. Aprenda a pergunta junto com o caso.</p>
  <p><b>2. O plural é o singular + <span class="fi pala">i</span>.</b> <span class="fi">geologissa → geologeissa</span>, <span class="fi">geologille → geologeille</span>. O <span class="fi pala">i</span> do plural muda um pouco a vogal antes dele (<span class="fi pala">-i</span> → <span class="fi pala">-ei-</span>); o resto da terminação fica igual. Veja <a href="#h-monikko">Plural</a>.</p>
  <p><b>3. Os seis de lugar são uma grade.</b> Três “dentro” (<span class="fi pala">-ssa, -sta, -aan, -oon, -iin…</span>) e três “em cima, junto” (<span class="fi pala">-lla, -lta, -lle</span>): onde, de onde, para onde. Veja <a href="#h-paikallissijat">Casos de lugar</a>.</p>
</div>
<p>Mais simples: <a href="#h-sijat">Os casos: visão geral</a> · <a href="#h-partitiivi">Partitivo</a> · <a href="#h-pronominit">Pronomes em todos os casos</a>.</p>`
  },
  {
    id: 'h-paikallissijat', kurssissa: ['t01', 't06', 't07', 't10'], osio: 'Substantivos e casos', otsikko: 'Casos de lugar: em, de, para', kuvaus: 'A grade de seis casos comparada com em, de e para.',
    html: `
<p>Seis casos dizem <b>onde</b>, <b>de onde</b> e <b>para onde</b>, em dois tipos de lugar: “dentro” (internos) e “em cima / junto / aberto” (externos).</p>
<table class="taivutus neljannes">
  <tr><th></th><th>onde? <span class="fi">missä?</span></th><th>de onde? <span class="fi">mistä?</span></th><th>para onde? <span class="fi">mihin?</span></th></tr>
  <tr><th>dentro</th><td><span class="fi pala">-ssa/-ssä</span><br><span class="fi">kaupassa</span> (na loja)</td><td><span class="fi pala">-sta/-stä</span><br><span class="fi">kaupasta</span> (da loja)</td><td><span class="fi pala">-aan, -oon, -iin…, -han, -hön…, -seen</span><br><span class="fi">kauppaan</span> (para a loja)</td></tr>
  <tr><th>em cima, junto, aberto</th><td><span class="fi pala">-lla/-llä</span><br><span class="fi">torilla</span> (na praça)</td><td><span class="fi pala">-lta/-ltä</span><br><span class="fi">torilta</span> (da praça)</td><td><span class="fi pala">-lle</span><br><span class="fi">torille</span> (para a praça)</td></tr>
</table>
<h3>Os casos “dentro”: como formar (lição 6)</h3>
<p><b>-ssa e -sta</b> saem do radical do genitivo: tire o <span class="fi pala">-n</span> do genitivo e cole a terminação. Por isso a gradação aparece sozinha. O <b>ilativo</b> (para onde?) sai do radical <b>forte</b>, o da forma básica.</p>
<table class="taivutus neljannes">
  <tr><th>palavra</th><th>onde? -ssa</th><th>de onde? -sta</th><th>para onde?</th></tr>
  <tr><td><span class="fi">talo</span><span class="kaannos" lang="pt-BR">casa</span></td><td><span class="fi">talossa</span></td><td><span class="fi">talosta</span></td><td><span class="fi">taloon</span></td></tr>
  <tr><td><span class="fi">kirjasto</span><span class="kaannos" lang="pt-BR">biblioteca</span></td><td><span class="fi">kirjastossa</span></td><td><span class="fi">kirjastosta</span></td><td><span class="fi">kirjastoon</span></td></tr>
  <tr><td><span class="fi">kauppa</span><span class="kaannos" lang="pt-BR">loja</span></td><td><span class="fi">kaupassa</span></td><td><span class="fi">kaupasta</span></td><td><span class="fi">kauppaan</span></td></tr>
  <tr><td><span class="fi">Helsinki</span><span class="kaannos" lang="pt-BR">Helsinque</span></td><td><span class="fi">Helsingissä</span></td><td><span class="fi">Helsingistä</span></td><td><span class="fi">Helsinkiin</span></td></tr>
  <tr><td><span class="fi">kivi</span><span class="kaannos" lang="pt-BR">pedra</span></td><td><span class="fi">kivessä</span></td><td><span class="fi">kivestä</span></td><td><span class="fi">kiveen</span></td></tr>
  <tr><td><span class="fi">maa</span><span class="kaannos" lang="pt-BR">terra, país</span></td><td><span class="fi">maassa</span></td><td><span class="fi">maasta</span></td><td><span class="fi">maahan</span></td></tr>
  <tr><td><span class="fi">huone</span><span class="kaannos" lang="pt-BR">quarto, cômodo</span></td><td><span class="fi">huoneessa</span></td><td><span class="fi">huoneesta</span></td><td><span class="fi">huoneeseen</span></td></tr>
  <tr><td><span class="fi">koti</span><span class="kaannos" lang="pt-BR">casa, lar (formas especiais)</span></td><td><span class="fi">kotona</span></td><td><span class="fi">kotoa</span></td><td><span class="fi">kotiin</span></td></tr>
</table>
<h4>O ilativo em três regras</h4>
<ol>
  <li><b>Quase sempre:</b> a última vogal do radical forte se repete + <span class="fi pala">n</span>: <span class="fi">talo → taloon</span>, <span class="fi">kauppa → kauppaan</span>, <span class="fi">Oodi → Oodiin</span>, <span class="fi">kivi → kiveen</span> (radical <span class="fi pala">kive-</span>).</li>
  <li><b>Uma sílaba com vogal longa ou ditongo:</b> <span class="fi pala">h</span> + a mesma vogal + <span class="fi pala">n</span>: <span class="fi">maa → maahan</span>, <span class="fi">yö → yöhön</span>, <span class="fi">tie → tiehen</span>.</li>
  <li><b>Duas sílabas ou mais, com vogal longa no fim do radical:</b> <span class="fi pala">-seen</span>: <span class="fi">huone → huoneeseen</span>, <span class="fi">Espoo → Espooseen</span>.</li>
</ol>
<p><b>Gradação:</b> fraco no <span class="fi pala">-ssa/-sta</span>, forte no ilativo: <span class="fi">kaupassa</span>, mas <span class="fi">kauppaan</span>; <span class="fi">joessa</span>, mas <span class="fi">jokeen</span>. <b>De onde também é “sobre”:</b> <span class="fi">kirja Pohjois-Koreasta</span> (um livro sobre a Coreia do Norte), <span class="fi">puhua Kuusamosta</span> (falar de Kuusamo).</p>
<h3>em, de, para → qual caso?</h3>
<ul>
  <li><b>Cidades e países</b> quase sempre “dentro”: <span class="fi">Helsingissä, Suomessa, Brasiliassa</span>. Mas algumas cidades finlandesas usam os externos: <span class="fi">Tampereella</span>, <span class="fi">Rovaniemellä</span>, <span class="fi">Hyvinkäällä</span>. Aprenda essas cidades junto com o caso.</li>
  <li><b>Superfícies e lugares abertos</b>: <span class="fi">pöydällä</span> (na mesa), <span class="fi">torilla</span> (na praça), <span class="fi">asemalla</span> (na estação).</li>
  <li><b>Pessoas</b> usam os externos: <span class="fi">Jaylle</span> (para o Jay), <span class="fi">Jayltä</span> (do Jay), <span class="fi">Jayllä on</span> (o Jay tem).</li>
  <li><b>Expressões fixas</b>: <span class="fi">töissä</span> (no trabalho), <span class="fi">kotona</span> (em casa), <span class="fi">lounaalla</span> (no almoço).</li>
</ul>
<div class="huomio">
  <p><b>Armadilha do brasileiro:</b> “em” não é sempre <span class="fi pala">-ssa</span>. Estudos com falantes de línguas românicas mostram que os casos externos (<span class="fi pala">-lla, -lle</span>) são os mais trocados. Aprenda cada lugar junto com o seu caso, como frase: <span class="fi">asemalla</span>, não “asemassa”.</p>
</div>
<h3>Pessoas: para quem, de quem, com quem (lição 10)</h3>
<p>Uma pessoa nunca é um lugar “dentro”: com pessoas, sempre os casos externos. Muitos verbos pedem esses casos:</p>
<table class="taivutus neljannes">
  <tr><th>caso</th><th>pergunta</th><th>verbos e exemplo</th></tr>
  <tr><td><span class="fi pala">-lle</span></td><td><span class="fi">kenelle?</span> (para quem?)</td><td><span class="fi">antaa, soittaa, sanoa, kertoa</span>: <span class="fi">Anna passi Jaylle!</span><span class="kaannos" lang="pt-BR">dar, ligar, dizer, contar: Dê o passaporte para o Jay!</span></td></tr>
  <tr><td><span class="fi pala">-lta/-ltä</span></td><td><span class="fi">keneltä?</span> (de quem?)</td><td><span class="fi">kysyä, saada, ostaa</span>: <span class="fi">Kysy Jayltä!</span><span class="kaannos" lang="pt-BR">perguntar, receber, comprar: Pergunte ao Jay!</span></td></tr>
  <tr><td><span class="fi pala">-lla/-llä</span></td><td><span class="fi">kenellä?</span> (com quem? quem tem?)</td><td><span class="fi">Passit ovat Maialla.</span><span class="kaannos" lang="pt-BR">Os passaportes estão com a Maia.</span></td></tr>
</table>
<p>Atenção a <span class="fi">kysyä</span>: “perguntar <b>a</b> alguém” é <span class="fi pala">-lta</span>, porque a resposta vem da pessoa. E “para a mãe” é <span class="fi">äidille</span>, nunca <span class="fi pala">äitiin</span> (para dentro da mãe).</p>
<p>Este tema é o centro das lições 6 (casos “dentro”), 7 (casos “em cima, junto”: <a href="#h-ulkosijat">Casos externos: -lla, -lta, -lle</a>) e 10 (pessoas). As frases prontas das lições 1 a 5 (<span class="fi">Olen Brasiliasta. Asun Helsingissä. Tervetuloa Suomeen!</span>) usam exatamente este sistema.</p>`
  },
  {
    id: 'h-partitiivi', kurssissa: ['t03', 't04', 't11', 't12'], osio: 'Substantivos e casos', otsikko: 'Partitivo: o caso mais finlandês', kuvaus: 'Quando usar e como formar. Visão geral; o tema começa na lição 3.',
    html: `
<p>O partitivo expressa uma <b>parte</b>, uma <b>quantidade indefinida</b> ou uma ação <b>incompleta</b>. É o terceiro caso mais usado, depois do nominativo e do genitivo. Use-o:</p>
<ul>
  <li><b>depois de números a partir de 2</b>: <span class="fi">kaksi kahvia</span> (dois cafés), <span class="fi">yhdeksän asemaa</span>;</li>
  <li><b>com quantidades e coisas que não se contam</b>: <span class="fi">vettä</span> (água), <span class="fi">paljon rahaa</span> (muito dinheiro);</li>
  <li><b>na negação</b>: <span class="fi">en juo kahvia</span> (não bebo café);</li>
  <li><b>com alguns verbos</b>: <span class="fi">rakastaa</span> (amar), <span class="fi">odottaa</span> (esperar), <span class="fi">auttaa</span> (ajudar): <span class="fi">odotan metroa</span>;</li>
  <li><b>com línguas, depois de puhua</b>: <span class="fi">puhun suomea</span>;</li>
  <li><b>no objeto incompleto</b>, quando a ação não pega a coisa inteira ou ainda está acontecendo: <span class="fi">Sovitan paitaa.</span> <span class="fi">Katson taulua.</span> Veja <a href="#h-objekti">O objeto: inteiro ou parte?</a> (lição 12);</li>
  <li><b>no plural, para várias coisas que se contam</b> (lição 11): <span class="fi">Haluaisin banaaneja.</span> (eu queria bananas), <span class="fi">paljon kuvia</span> (muitas fotos). As formas estão em <a href="#h-monikko">Plural</a>.</li>
</ul>
<table class="taivutus neljannes">
  <tr><th>palavra</th><th>partitivo, num exemplo</th><th>regra</th></tr>
  <tr><td><span class="fi">talo</span><span class="kaannos" lang="pt-BR">casa</span></td><td><span class="fi">kaksi <b>taloa</b></span><span class="kaannos" lang="pt-BR">duas casas</span></td><td>vogal curta: + <span class="fi pala">-a/-ä</span></td></tr>
  <tr><td><span class="fi">kahvi</span><span class="kaannos" lang="pt-BR">café</span></td><td><span class="fi">en juo <b>kahvia</b></span><span class="kaannos" lang="pt-BR">não bebo café</span></td><td></td></tr>
  <tr><td><span class="fi">maa</span><span class="kaannos" lang="pt-BR">terra, país</span></td><td><span class="fi">kaksi <b><span data-l="maa">maata</span></b></span><span class="kaannos" lang="pt-BR">dois países</span></td><td>vogal longa ou ditongo: + <span class="fi pala">-ta/-tä</span></td></tr>
  <tr><td><span class="fi">työ</span><span class="kaannos" lang="pt-BR">trabalho</span></td><td><span class="fi">paljon <b>työtä</b></span><span class="kaannos" lang="pt-BR">muito trabalho</span></td><td></td></tr>
  <tr><td><span class="fi">huone</span><span class="kaannos" lang="pt-BR">quarto, sala</span></td><td><span class="fi">kolme <b>huonetta</b></span><span class="kaannos" lang="pt-BR">três quartos</span></td><td>a maioria das palavras em -e: + <span class="fi pala">-tta/-ttä</span></td></tr>
  <tr><td><span class="fi">nainen</span><span class="kaannos" lang="pt-BR">mulher</span></td><td><span class="fi">kaksi <b>naista</b></span><span class="kaannos" lang="pt-BR">duas mulheres</span></td><td>-nen → <span class="fi pala">-sta/-stä</span></td></tr>
</table>
<p>Pesquisas sugerem aprender o partitivo pelos <b>usos</b>, com muitos exemplos, e poucas regras de uma vez. É o que o curso faz a partir da lição 3 (mercado de Hakaniemi) e da lição 4 (<span class="fi">’Esburger</span>).</p>`
  },
  {
    id: 'h-monikko', kurssissa: ['t09', 't11', 't12', 't17', 't19'], osio: 'Substantivos e casos', otsikko: 'Plural', kuvaus: 'O plural com -t e o plural com -i-. Visão geral.',
    html: `
<p>O finlandês tem dois tipos de plural:</p>
<ul>
  <li><b>-t</b> só no nominativo (sujeito) e no objeto completo: radical do genitivo + <span class="fi pala">t</span>: <span class="fi">talo → talot</span>, <span class="fi">kauppa → kaupat</span>, <span class="fi">huone → huoneet</span>.</li>
  <li><b>-i-</b> em todos os outros casos: <span class="fi">taloissa</span> (nas casas), <span class="fi">kaupoissa</span> (nas lojas), <span class="fi">huoneissa</span> (nos quartos).</li>
</ul>
<table class="taivutus neljannes">
  <tr><th>caso</th><th>singular</th><th>plural</th></tr>
  <tr><td>nominativo</td><td><span class="fi">talo</span><span class="kaannos" lang="pt-BR">a casa</span></td><td><span class="fi">talot</span><span class="kaannos" lang="pt-BR">as casas</span></td></tr>
  <tr><td>inessivo</td><td><span class="fi">talossa</span><span class="kaannos" lang="pt-BR">na casa</span></td><td><span class="fi">taloissa</span><span class="kaannos" lang="pt-BR">nas casas</span></td></tr>
  <tr><td>partitivo</td><td><span class="fi">taloa</span><span class="kaannos" lang="pt-BR">casa (parte; depois de números)</span></td><td><span class="fi">taloja</span><span class="kaannos" lang="pt-BR">(algumas) casas</span></td></tr>
  <tr><td>genitivo</td><td><span class="fi">talon</span><span class="kaannos" lang="pt-BR">da casa</span></td><td><span class="fi">talojen</span><span class="kaannos" lang="pt-BR">das casas</span></td></tr>
</table>
<p>O <b>-i-</b> muda a vogal antes dele (<span class="fi">kauppa → kaupoissa</span>, <span class="fi">kivi → kivissä</span>). As regras vêm aos poucos (lições 9, 11, 17 e 19); comece reconhecendo o <span class="fi pala">-i-</span> como “plural”.</p>
<h3>O plural -t passo a passo (lição 9)</h3>
<p>Comece pelo genitivo (lição 5) e troque o <span class="fi pala">-n</span> por <span class="fi pala">-t</span>. O genitivo já mostra o radical, com a consoante que muda e o tipo da palavra (lição 8), então o plural sai pronto:</p>
<table class="taivutus neljannes">
  <tr><th>uma coisa</th><th>genitivo</th><th>plural -t</th></tr>
  <tr><td><span class="fi">pipo</span><span class="kaannos" lang="pt-BR">gorro</span></td><td><span class="fi">pipon</span></td><td><span class="fi">pipot</span><span class="kaannos" lang="pt-BR">gorros</span></td></tr>
  <tr><td><span class="fi">kenkä</span><span class="kaannos" lang="pt-BR">sapato</span></td><td><span class="fi">kengän</span></td><td><span class="fi">kengät</span><span class="kaannos" lang="pt-BR">sapatos (nk : ng)</span></td></tr>
  <tr><td><span class="fi">sukka</span><span class="kaannos" lang="pt-BR">meia</span></td><td><span class="fi">sukan</span></td><td><span class="fi">sukat</span><span class="kaannos" lang="pt-BR">meias (kk : k)</span></td></tr>
  <tr><td><span class="fi">paita</span><span class="kaannos" lang="pt-BR">camisa</span></td><td><span class="fi">paidan</span></td><td><span class="fi">paidat</span><span class="kaannos" lang="pt-BR">camisas (t : d)</span></td></tr>
  <tr><td><span class="fi">huone</span><span class="kaannos" lang="pt-BR">quarto</span></td><td><span class="fi">huoneen</span></td><td><span class="fi">huoneet</span><span class="kaannos" lang="pt-BR">quartos (-e → -ee-)</span></td></tr>
  <tr><td><span class="fi">nainen</span><span class="kaannos" lang="pt-BR">mulher</span></td><td><span class="fi">naisen</span></td><td><span class="fi">naiset</span><span class="kaannos" lang="pt-BR">mulheres (-nen → -se-)</span></td></tr>
  <tr><td><span class="fi">käsi</span><span class="kaannos" lang="pt-BR">mão</span></td><td><span class="fi">käden</span></td><td><span class="fi">kädet</span><span class="kaannos" lang="pt-BR">mãos (-si → -de-)</span></td></tr>
</table>
<p>O plural <span class="fi pala">-t</span> aparece no sujeito (<span class="fi">Kengät <span data-l="olla#2">ovat</span> kaapissa.</span> = os sapatos estão no armário), no objeto de uma ordem (<span class="fi">Ota kengät!</span>) e no que alguém tem (<span class="fi">Minulla on sandaalit.</span>).</p>
<p>No objeto inteiro também vai o <span class="fi pala">-t</span> (lição 12): <span class="fi">Ostan kengät.</span> (compro os sapatos). Algumas roupas são <b>sempre plural</b>, mesmo uma peça só: <span class="fi">housut</span> (uma calça), <span class="fi">shortsit</span> (um shorts), <span class="fi">aurinkolasit</span> (uns óculos de sol).</p>
<div class="huomio"><p><b>Depois de número, nunca plural:</b> <span class="fi">kaksi kenkää</span> (partitivo singular, lição 3), e não <span class="fi pala">kaksi kengät</span>.</p></div>
<h3>O partitivo plural (lição 11)</h3>
<p>O partitivo plural é “uma quantidade de coisas que se contam”. Onde o português diz o plural sem artigo (“eu queria bananas”, “há gente”), o finlandês usa o partitivo plural. Massa (café, arroz, água) fica no partitivo <b>singular</b>.</p>
<ul class="esim">
  <li class="s" data-pt="Eu queria bananas.">Haluaisin banaaneja.</li>
  <li class="s" data-pt="No mercado há muita gente.">Torilla on paljon ihmisiä.</li>
  <li class="s" data-pt="A Purjo tem muitas fotos.">Purjolla on paljon kuvia.</li>
  <li class="s" data-pt="muito café (massa: singular)">paljon kahvia</li>
</ul>
<p>Ele termina sempre em <span class="fi pala">-ja/-jä</span>, <span class="fi pala">-ia/-iä</span> ou <span class="fi pala">-ita/-itä</span>. A vogal antes do <span class="fi pala">-i-</span> muda, como nos outros casos do plural; a bolha de cada palavra mostra a forma.</p>
<table class="taivutus neljannes">
  <tr><th>terminação</th><th>palavra</th><th>partitivo plural</th><th>quando</th></tr>
  <tr><td><span class="fi pala">-ja/-jä</span></td><td><span class="fi">juusto, talo, papu</span></td><td><span class="fi">juustoja, taloja, papuja</span></td><td>palavra em o, u (em y, ö: -jä)</td></tr>
  <tr><td><span class="fi pala">-eja</span></td><td><span class="fi">banaani, kahvi</span></td><td><span class="fi">banaaneja, kahveja</span></td><td>palavra nova em -i: o i vira e</td></tr>
  <tr><td><span class="fi pala">-ia/-iä</span></td><td><span class="fi">kuva, hedelmä, kukka</span></td><td><span class="fi">kuvia, hedelmiä, kukkia</span></td><td>o a ou ä final cai</td></tr>
  <tr><td><span class="fi pala">-sia/-siä</span></td><td><span class="fi">ihminen, nainen</span></td><td><span class="fi">ihmisiä, naisia</span></td><td>-nen → -si-</td></tr>
  <tr><td><span class="fi pala">-oja</span></td><td><span class="fi">kauppa, sana</span></td><td><span class="fi">kauppoja, sanoja</span></td><td>duas sílabas em -a: o a vira o</td></tr>
  <tr><td><span class="fi pala">-ita/-itä</span></td><td><span class="fi">omena, makkara, huone</span></td><td><span class="fi">omenoita, makkaroita, huoneita</span></td><td>palavra longa em -a, e palavras em -e</td></tr>
</table>
<div class="huomio"><p><b>Três formas, três sentidos:</b> <span class="fi">kaksi banaania</span> (duas bananas: número + partitivo singular) · <span class="fi">banaaneja</span> (bananas, umas bananas: partitivo plural) · <span class="fi">banaanit</span> (as bananas, todas: plural <span class="fi pala">-t</span>). Treino: <a href="#treino-t11-monikon-partitiivi">Partitivo plural</a>.</p></div>
<h3>O genitivo plural (lição 17)</h3>
<p>O genitivo plural é o “de …” de várias coisas ou pessoas. Ele termina em <span class="fi pala">-en</span>, quase sempre com <span class="fi pala">-i-</span> ou <span class="fi pala">-j-</span> antes (<span class="fi pala">-ien, -jen, -iden</span>). Parta do partitivo plural da lição 11:</p>
<table class="taivutus neljannes">
  <tr><th>palavra</th><th>partitivo plural</th><th>genitivo plural</th></tr>
  <tr><td><span class="fi">ystävä</span><span class="kaannos" lang="pt-BR">amigo</span></td><td><span class="fi">ystäviä</span></td><td><span class="fi">ystävien</span><span class="kaannos" lang="pt-BR">dos amigos</span></td></tr>
  <tr><td><span class="fi">talo</span><span class="kaannos" lang="pt-BR">casa</span></td><td><span class="fi">taloja</span></td><td><span class="fi">talojen</span><span class="kaannos" lang="pt-BR">das casas</span></td></tr>
  <tr><td><span class="fi">kenkä</span><span class="kaannos" lang="pt-BR">sapato</span></td><td><span class="fi">kenkiä</span></td><td><span class="fi">kenkien</span><span class="kaannos" lang="pt-BR">dos sapatos</span></td></tr>
  <tr><td><span class="fi">turisti</span><span class="kaannos" lang="pt-BR">turista</span></td><td><span class="fi">turisteja</span></td><td><span class="fi">turistien</span><span class="kaannos" lang="pt-BR">dos turistas</span></td></tr>
  <tr><td><span class="fi">naapuri</span><span class="kaannos" lang="pt-BR">vizinho</span></td><td><span class="fi">naapureita</span></td><td><span class="fi">naapureiden</span><span class="kaannos" lang="pt-BR">dos vizinhos</span></td></tr>
</table>
<p>Ele aparece onde o genitivo singular aparece: com <span class="fi">kanssa</span> (<span class="fi">ystävien kanssa</span> = com os amigos), antes do dono (<span class="fi">Maian vanhempien koti</span> = a casa dos pais da Maia) e antes das posposições (<span class="fi">talojen välissä</span> = entre as casas). Alguns substantivos têm também uma forma curta com <span class="fi pala">-ten</span>, muito usada: <span class="fi pala">lasten</span> (das crianças), <span class="fi pala">miesten</span> (dos homens), <span class="fi pala">suomalaisten</span> (dos finlandeses). Treino: <a href="#treino-t17-monikon-genetiivi">Genitivo plural</a>.</p>
<h3>Os casos de lugar no plural (lição 19)</h3>
<p>Os seis casos de lugar levam no plural o mesmo <span class="fi pala">-i-</span> antes da terminação do singular: <span class="fi">kirkossa</span> (na igreja) → <span class="fi">kirkoissa</span> (nas igrejas), <span class="fi">torilla</span> (na feira) → <span class="fi">toreilla</span> (nas feiras).</p>
<table class="taivutus neljannes">
  <tr><th>palavra</th><th>onde?</th><th>de onde?</th><th>para onde?</th></tr>
  <tr><td><span class="fi">kirkko</span><span class="kaannos" lang="pt-BR">igreja</span></td><td><span class="fi">kirkoissa</span></td><td><span class="fi">kirkoista</span></td><td><span class="fi">kirkkoihin</span></td></tr>
  <tr><td><span class="fi">museo</span><span class="kaannos" lang="pt-BR">museu</span></td><td><span class="fi">museoissa</span></td><td><span class="fi">museoista</span></td><td><span class="fi">museoihin</span></td></tr>
  <tr><td><span class="fi">kaupunki</span><span class="kaannos" lang="pt-BR">cidade</span></td><td><span class="fi">kaupungeissa</span></td><td><span class="fi">kaupungeista</span></td><td><span class="fi">kaupunkeihin</span></td></tr>
  <tr><td><span class="fi">kauppa</span><span class="kaannos" lang="pt-BR">loja</span></td><td><span class="fi">kaupoissa</span></td><td><span class="fi">kaupoista</span></td><td><span class="fi">kauppoihin</span></td></tr>
  <tr><td><span class="fi">järvi</span><span class="kaannos" lang="pt-BR">lago</span></td><td><span class="fi">järvissä</span></td><td><span class="fi">järvistä</span></td><td><span class="fi">järviin</span></td></tr>
  <tr><td><span class="fi">tori</span><span class="kaannos" lang="pt-BR">feira, praça</span></td><td><span class="fi">toreilla</span></td><td><span class="fi">toreilta</span></td><td><span class="fi">toreille</span></td></tr>
</table>
<p><b>A vogal antes do -i-</b> muda como no partitivo plural: <span class="fi pala">o</span> e <span class="fi pala">u</span> ficam (<span class="fi">museoissa, kaduilla</span>), o <span class="fi pala">a</span> vira <span class="fi pala">o</span> ou cai (<span class="fi">kaupoissa, kuvissa</span>), o <span class="fi pala">i</span> vira <span class="fi pala">e</span> ou cai (<span class="fi">kaupungeissa, järvissä</span>), <span class="fi pala">-nen</span> vira <span class="fi pala">-si-</span> (<span class="fi">naisilla</span>), a vogal longa encurta (<span class="fi">maa → maissa</span>). <b>A consoante</b> segue o singular: fraca em <span class="fi pala">-issa, -ista, -illa, -ilta, -ille</span> (<span class="fi">kirkoissa</span>, como <span class="fi">kirkossa</span>), forte em <span class="fi pala">-ihin</span> (<span class="fi">kirkkoihin</span>, como <span class="fi">kirkkoon</span>). Para onde? termina quase sempre em <span class="fi pala">-ihin</span>; em <span class="fi pala">-iin</span> quando o <span class="fi pala">i</span> da palavra cai (<span class="fi">järviin, kiviin</span>) e nas palavras em <span class="fi pala">-nen</span> (<span class="fi">naisiin</span>).</p>
<ul class="esim">
  <li class="s" data-pt="Visitamos igrejas e museus antigos.">Kävimme vanhoissa kirkoissa ja museoissa.</li>
  <li class="s" data-pt="O Jay tirou fotos das pedras.">Jay otti kuvia kivistä.</li>
  <li class="s" data-pt="No verão vamos para as saunas e os lagos.">Kesällä menemme saunoihin ja järville.</li>
</ul>
<p>O adjetivo acompanha (<span class="fi">vanhoissa kirkoissa</span>), e com <span class="fi">käydä</span> (visitar) o lugar vai em onde?: <span class="fi">kävimme kirkoissa</span> = fomos às igrejas. Treino: <a href="#treino-t19-monikon-sijat">Casos de lugar no plural</a>.</p>`
  },
  {
    id: 'h-vokaalisointu', kurssissa: ['t01', 't05'], osio: 'Como a palavra muda', otsikko: 'Harmonia vocálica', kuvaus: 'Por que -ssa e -ssä, -ko e -kö, -vat e -vät.',
    html: `
<p>As vogais finlandesas formam três grupos:</p>
<table class="taivutus neljannes">
  <tr><th>vogais</th><th>grupo</th><th>terminações</th></tr>
  <tr><td><span class="fi pala">a, o, u</span></td><td>de trás</td><td><span class="fi pala">-ssa, -sta, -lla, -ko, -vat</span></td></tr>
  <tr><td><span class="fi pala">ä, ö, y</span></td><td>da frente</td><td><span class="fi pala">-ssä, -stä, -llä, -kö, -vät</span></td></tr>
  <tr><td><span class="fi pala">e, i</span></td><td>neutras</td><td>combinam com os dois grupos</td></tr>
</table>
<p><b>Regra:</b> se a palavra tem <span class="fi pala">a, o</span> ou <span class="fi pala">u</span>, a terminação usa <span class="fi pala">a, o, u</span>. Se não tem (só <span class="fi pala">ä, ö, y, e, i</span>), usa <span class="fi pala">ä, ö, y</span>. Em palavras compostas, vale a última parte: <span class="fi">metroasemalla</span>, <span class="fi">työpaikalla</span>.</p>
<ul class="esim">
  <li class="s" data-pt="no carro">autossa</li><li class="s" data-pt="no trabalho">työssä</li><li class="s" data-pt="em Helsinque">Helsingissä</li>
  <li class="s" data-pt="você está?">oletko</li><li class="s" data-pt="você sabe?">tiedätkö</li><li class="s" data-pt="eles moram">asuvat</li>
</ul>`
  },
  {
    id: 'h-sanatyypit', kurssissa: ['t05', 't08'], osio: 'Como a palavra muda', otsikko: 'Tipos de palavra (radicais)', kuvaus: 'Como o fim da palavra muda o radical: kivi → kiven, nainen → naisen.',
    html: `
<p>O dicionário oficial (Kotus) divide os substantivos em 49 tipos. Para aprender, bastam uns poucos grupos com uma palavra-modelo. As formas-chave de cada palavra (genitivo, partitivo, ilativo) mostram a que grupo ela pertence.</p>
<table class="taivutus neljannes tiivis pitkat">
  <tr><th>modelo</th><th>genitivo</th><th>partitivo</th><th>ilativo</th></tr>
  <tr class="taulu-ryhma"><th colspan="4">termina em vogal; não muda</th></tr>
  <tr><td><span class="fi">talo</span><span class="kaannos" lang="pt-BR">casa</span></td><td><span class="fi">talon</span></td><td><span class="fi">taloa</span></td><td><span class="fi">taloon</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="4">com gradação</th></tr>
  <tr><td><span class="fi">kauppa</span><span class="kaannos" lang="pt-BR">loja</span></td><td><span class="fi">kaupan</span></td><td><span class="fi">kauppaa</span></td><td><span class="fi">kauppaan</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="4">-i antigo vira -e-</th></tr>
  <tr><td><span class="fi">kivi</span><span class="kaannos" lang="pt-BR">pedra</span></td><td><span class="fi">kiven</span></td><td><span class="fi">kiveä</span></td><td><span class="fi">kiveen</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="4">-si → -de-/-te-</th></tr>
  <tr><td><span class="fi">vesi</span><span class="kaannos" lang="pt-BR">água</span></td><td><span class="fi">veden</span></td><td><span class="fi">vettä</span></td><td><span class="fi">veteen</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="4">-nen → -se-</th></tr>
  <tr><td><span class="fi">nainen</span><span class="kaannos" lang="pt-BR">mulher</span></td><td><span class="fi">naisen</span></td><td><span class="fi">naista</span></td><td><span class="fi">naiseen</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="4">-e → -ee-</th></tr>
  <tr><td><span class="fi">huone</span><span class="kaannos" lang="pt-BR">quarto, cômodo</span></td><td><span class="fi">huoneen</span></td><td><span class="fi">huonetta</span></td><td><span class="fi">huoneeseen</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="4">-us → -ukse-</th></tr>
  <tr><td><span class="fi">vastaus</span><span class="kaannos" lang="pt-BR">resposta</span></td><td><span class="fi">vastauksen</span></td><td><span class="fi">vastausta</span></td><td><span class="fi">vastaukseen</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="4">-ys → -ykse-</th></tr>
  <tr><td><span class="fi">kysymys</span><span class="kaannos" lang="pt-BR">pergunta</span></td><td><span class="fi">kysymyksen</span></td><td><span class="fi">kysymystä</span></td><td><span class="fi">kysymykseen</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="4">-in → -ime-</th></tr>
  <tr><td><span class="fi">puhelin</span><span class="kaannos" lang="pt-BR">telefone</span></td><td><span class="fi">puhelimen</span></td><td><span class="fi">puhelinta</span></td><td><span class="fi">puhelimeen</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="4">-as → -aa- (a consoante fica forte)</th></tr>
  <tr><td><span class="fi">rikas</span><span class="kaannos" lang="pt-BR">rico</span></td><td><span class="fi">rikkaan</span></td><td><span class="fi">rikasta</span></td><td><span class="fi">rikkaaseen</span></td></tr>
  <tr class="taulu-ryhma"><th colspan="4">-s → -kse-</th></tr>
  <tr><td><span class="fi">kerros</span><span class="kaannos" lang="pt-BR">andar</span></td><td><span class="fi">kerroksen</span></td><td><span class="fi">kerrosta</span></td><td><span class="fi">kerrokseen</span></td></tr>
</table>
<p>Truque: o <b>partitivo</b> costuma mostrar o radical “de consoante” (<span class="fi">naista, vettä</span>), e o <b>genitivo</b> o radical “de vogal” (<span class="fi">naisen, veden</span>). Aprenda as duas formas junto com a palavra.</p>`
  },

  /* ---------- Pronomes ---------- */
  {
    id: 'h-pronominit', kurssissa: ['t01', 't05', 't12', 't17'], osio: 'Pronomes', otsikko: 'Pronomes pessoais em todos os casos', kuvaus: 'minä, minun, minua, minulla…',
    html: `
<p>Os pronomes pessoais também têm casos. Os mais usados no começo: nominativo, genitivo (meu), partitivo e adessivo (<span class="fi">minulla on</span> = eu tenho).</p>
<h3>De quem, e o objeto</h3>
<table class="taivutus neljannes tiivis">
  <tr><th>pessoa</th><th>genitivo<span class="kaannos" lang="pt-BR">de quem</span></th><th>partitivo<span class="kaannos" lang="pt-BR">objeto (parte)</span></th><th>acusativo<span class="kaannos" lang="pt-BR">objeto (inteiro)</span></th></tr>
  <tr><td><span class="fi">minä</span><span class="kaannos" lang="pt-BR">eu</span></td><td><span class="fi">minun</span><span class="kaannos" lang="pt-BR">meu, minha</span></td><td><span class="fi">minua</span><span class="kaannos" lang="pt-BR">me</span></td><td><span class="fi">minut</span><span class="kaannos" lang="pt-BR">me</span></td></tr>
  <tr><td><span class="fi">sinä</span><span class="kaannos" lang="pt-BR">você</span></td><td><span class="fi">sinun</span><span class="kaannos" lang="pt-BR">seu, sua (de você)</span></td><td><span class="fi">sinua</span><span class="kaannos" lang="pt-BR">te, você</span></td><td><span class="fi">sinut</span><span class="kaannos" lang="pt-BR">te, você</span></td></tr>
  <tr><td><span class="fi">hän</span><span class="kaannos" lang="pt-BR">ele, ela</span></td><td><span class="fi">hänen</span><span class="kaannos" lang="pt-BR">dele, dela</span></td><td><span class="fi">häntä</span><span class="kaannos" lang="pt-BR">ele, ela</span></td><td><span class="fi">hänet</span><span class="kaannos" lang="pt-BR">ele, ela</span></td></tr>
  <tr><td><span class="fi">me</span><span class="kaannos" lang="pt-BR">nós</span></td><td><span class="fi">meidän</span><span class="kaannos" lang="pt-BR">nosso, nossa</span></td><td><span class="fi">meitä</span><span class="kaannos" lang="pt-BR">nos</span></td><td><span class="fi">meidät</span><span class="kaannos" lang="pt-BR">nos</span></td></tr>
  <tr><td><span class="fi">te</span><span class="kaannos" lang="pt-BR">vocês</span></td><td><span class="fi">teidän</span><span class="kaannos" lang="pt-BR">de vocês</span></td><td><span class="fi">teitä</span><span class="kaannos" lang="pt-BR">vocês</span></td><td><span class="fi">teidät</span><span class="kaannos" lang="pt-BR">vocês</span></td></tr>
  <tr><td><span class="fi">he</span><span class="kaannos" lang="pt-BR">eles, elas</span></td><td><span class="fi">heidän</span><span class="kaannos" lang="pt-BR">deles, delas</span></td><td><span class="fi">heitä</span><span class="kaannos" lang="pt-BR">eles, elas</span></td><td><span class="fi">heidät</span><span class="kaannos" lang="pt-BR">eles, elas</span></td></tr>
</table>
<h3>Ter, para quem, de quem</h3>
<table class="taivutus neljannes tiivis">
  <tr><th>pessoa</th><th>adessivo<span class="kaannos" lang="pt-BR">ter (+ on)</span></th><th>alativo<span class="kaannos" lang="pt-BR">para quem</span></th><th>elativo<span class="kaannos" lang="pt-BR">de quem, sobre quem</span></th></tr>
  <tr><td><span class="fi">minä</span><span class="kaannos" lang="pt-BR">eu</span></td><td><span class="fi">minulla</span><span class="kaannos" lang="pt-BR">eu tenho</span></td><td><span class="fi">minulle</span><span class="kaannos" lang="pt-BR">para mim</span></td><td><span class="fi">minusta</span><span class="kaannos" lang="pt-BR">de mim; na minha opinião</span></td></tr>
  <tr><td><span class="fi">sinä</span><span class="kaannos" lang="pt-BR">você</span></td><td><span class="fi">sinulla</span><span class="kaannos" lang="pt-BR">você tem</span></td><td><span class="fi">sinulle</span><span class="kaannos" lang="pt-BR">para você</span></td><td><span class="fi">sinusta</span><span class="kaannos" lang="pt-BR">de você</span></td></tr>
  <tr><td><span class="fi">hän</span><span class="kaannos" lang="pt-BR">ele, ela</span></td><td><span class="fi">hänellä</span><span class="kaannos" lang="pt-BR">ele, ela tem</span></td><td><span class="fi">hänelle</span><span class="kaannos" lang="pt-BR">para ele, ela</span></td><td><span class="fi">hänestä</span><span class="kaannos" lang="pt-BR">dele, dela</span></td></tr>
  <tr><td><span class="fi">me</span><span class="kaannos" lang="pt-BR">nós</span></td><td><span class="fi">meillä</span><span class="kaannos" lang="pt-BR">nós temos</span></td><td><span class="fi">meille</span><span class="kaannos" lang="pt-BR">para nós</span></td><td><span class="fi">meistä</span><span class="kaannos" lang="pt-BR">de nós</span></td></tr>
  <tr><td><span class="fi">te</span><span class="kaannos" lang="pt-BR">vocês</span></td><td><span class="fi">teillä</span><span class="kaannos" lang="pt-BR">vocês têm</span></td><td><span class="fi">teille</span><span class="kaannos" lang="pt-BR">para vocês</span></td><td><span class="fi">teistä</span><span class="kaannos" lang="pt-BR">de vocês</span></td></tr>
  <tr><td><span class="fi">he</span><span class="kaannos" lang="pt-BR">eles, elas</span></td><td><span class="fi">heillä</span><span class="kaannos" lang="pt-BR">eles, elas têm</span></td><td><span class="fi">heille</span><span class="kaannos" lang="pt-BR">para eles, elas</span></td><td><span class="fi">heistä</span><span class="kaannos" lang="pt-BR">deles, delas</span></td></tr>
</table>
<p><b>Posse:</b> <span class="fi">minun nimeni</span> (o meu nome): o pronome no genitivo e a terminação <span class="fi pala">-ni</span> no substantivo. As terminações de posse são <span class="fi pala">-ni, -si, -nsa/-nsä, -mme, -nne</span>; a lição 17 as apresenta para reconhecer: <a href="#h-omistusliitteet">O possessivo: nimeni, ystäväni</a>.</p>`
  },
  {
    id: 'h-kysymyssanat', kurssissa: ['t01', 't02', 't03', 't05', 't06'], osio: 'Perguntas e negação', otsikko: 'Palavras interrogativas', kuvaus: 'kuka, mikä, missä, mistä, mihin, milloin, miksi…',
    html: `
<table class="taivutus neljannes">
  <tr><th>palavra</th><th>exemplo</th></tr>
  <tr><td><span class="fi">kuka</span><span class="kaannos" lang="pt-BR">quem</span></td><td><span class="fi">Kuka sinä olet?</span><span class="kaannos" lang="pt-BR">Quem é você?</span></td></tr>
  <tr><td><span class="fi">mikä</span><span class="kaannos" lang="pt-BR">que, qual</span></td><td><span class="fi">Mikä tämä on?</span><span class="kaannos" lang="pt-BR">O que é isto?</span></td></tr>
  <tr><td><span class="fi">mitä</span><span class="kaannos" lang="pt-BR">o quê</span></td><td><span class="fi">Mitä se tarkoittaa?</span><span class="kaannos" lang="pt-BR">O que isso quer dizer?</span></td></tr>
  <tr><td><span class="fi">missä</span><span class="kaannos" lang="pt-BR">onde</span></td><td><span class="fi">Missä sinä asut?</span><span class="kaannos" lang="pt-BR">Onde você mora?</span></td></tr>
  <tr><td><span class="fi">mistä</span><span class="kaannos" lang="pt-BR">de onde</span></td><td><span class="fi">Mistä sinä olet?</span><span class="kaannos" lang="pt-BR">De onde você é?</span></td></tr>
  <tr><td><span class="fi">mihin, minne</span><span class="kaannos" lang="pt-BR">para onde</span></td><td><span class="fi">Mihin sinä menet?</span><span class="kaannos" lang="pt-BR">Para onde você vai?</span></td></tr>
  <tr><td><span class="fi">milloin</span><span class="kaannos" lang="pt-BR">quando</span></td><td><span class="fi">Milloin metro tulee?</span><span class="kaannos" lang="pt-BR">Quando o metrô vem?</span></td></tr>
  <tr><td><span class="fi">miksi</span><span class="kaannos" lang="pt-BR">por quê</span></td><td><span class="fi">Miksi sinä naurat?</span><span class="kaannos" lang="pt-BR">Por que você está rindo?</span></td></tr>
  <tr><td><span class="fi">miten, kuinka</span><span class="kaannos" lang="pt-BR">como</span></td><td><span class="fi">Miten menee?</span><span class="kaannos" lang="pt-BR">Como vai?</span></td></tr>
  <tr><td><span class="fi">millainen</span><span class="kaannos" lang="pt-BR">como (que tipo de)</span></td><td><span class="fi">Millainen Helsinki on?</span><span class="kaannos" lang="pt-BR">Como é Helsinque?</span></td></tr>
  <tr><td><span class="fi">kenen</span><span class="kaannos" lang="pt-BR">de quem</span></td><td><span class="fi">Kenen tämä on?</span><span class="kaannos" lang="pt-BR">De quem é isto?</span></td></tr>
  <tr><td><span class="fi">kuinka monta</span><span class="kaannos" lang="pt-BR">quantos</span></td><td><span class="fi">Kuinka monta asemaa?</span><span class="kaannos" lang="pt-BR">Quantas estações?</span></td></tr>
  <tr><td><span class="fi">paljonko</span><span class="kaannos" lang="pt-BR">quanto (custa)</span></td><td><span class="fi">Paljonko se maksaa?</span><span class="kaannos" lang="pt-BR">Quanto custa?</span></td></tr>
  <tr><td><span class="fi">mitä kuuluu?</span><span class="kaannos" lang="pt-BR">como vai?</span></td><td><span class="fi">Mitä kuuluu? – Hyvää, kiitos.</span><span class="kaannos" lang="pt-BR">Como vai? – Bem, obrigado.</span></td></tr>
</table>
<p>As palavras interrogativas também têm casos: <span class="fi">kuka → kenelle</span> (para quem), <span class="fi">mikä → millä</span> (com quê). Elas aparecem ao longo do curso.</p>`
  },
  {
    id: 'h-osoittavat', kurssissa: ['t08'], osio: 'Pronomes', otsikko: 'Este, esse, aquele: tämä, tuo, se', kuvaus: 'Demonstrativos e advérbios de lugar.',
    html: `
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th><th>lugar</th></tr>
  <tr><td><span class="fi">tämä</span></td><td>este, isto (aqui comigo)</td><td><span class="fi">täällä, tässä</span> (aqui)</td></tr>
  <tr><td><span class="fi">tuo</span></td><td>aquele (ali, apontando)</td><td><span class="fi">tuolla, tuossa</span> (ali)</td></tr>
  <tr><td><span class="fi">se</span></td><td>esse, isso (já mencionado)</td><td><span class="fi">siellä, siinä</span> (lá, aí)</td></tr>
  <tr><td><span class="fi">nämä</span></td><td>estes</td><td></td></tr>
  <tr><td><span class="fi">nuo</span></td><td>aqueles</td><td></td></tr>
  <tr><td><span class="fi">ne</span></td><td>esses</td><td></td></tr>
</table>
<p><span class="fi">täällä</span> = aqui (em geral, nesta área), <span class="fi">tässä</span> = aqui (exatamente neste ponto).</p>
<h3>Quem fala decide: perto de mim, perto de você, longe (lição 8)</h3>
<p><span class="fi">tämä</span> = perto de quem fala. <span class="fi">se</span> = perto de quem ouve, ou a coisa de que já falamos (o uso mais comum). <span class="fi">tuo</span> = longe dos dois: quem fala aponta. Por isso a mesma coisa pode ser <span class="fi">tämä</span> para uma pessoa e <span class="fi">se</span> para a outra. No português de livro é o mesmo sistema (este, esse, aquele); no Brasil, “esse” serve para quase tudo, mas em finlandês a escolha conta.</p>
<ul class="esim">
  <li class="s" data-pt="– O que é isso (na sua mão)? – Isto? Isto é uma luminária.">– Mikä se on? – Tämä? Tämä on lamppu.</li>
  <li class="s" data-pt="Aquele (ali, eu aponto) é o quarto.">Tuo on makuuhuone.</li>
  <li class="s" data-pt="A cozinha é ali. Ela é pequena.">Keittiö on tuossa. Se on pieni.</li>
</ul>
<p>Na língua padrão, <span class="fi">se</span> e <span class="fi">ne</span> são para coisas; para pessoas, <span class="fi">hän</span> e <span class="fi">he</span>. Na fala, <span class="fi">se</span> e <span class="fi">ne</span> também apontam pessoas (veja <a href="#nucleo-fala">Língua falada</a>).</p>
<h3>Os casos: o pronome vai no caso da palavra</h3>
<p>Não há preposição: o pronome e o substantivo recebem a mesma terminação (<span class="fi">tässä talossa</span> = neste prédio). Depois de <span class="fi">ei</span>, o partitivo: <span class="fi">Ei tätä, tuota!</span></p>
<table class="taivutus neljannes">
  <tr><th>caso</th><th><span class="fi">tämä</span></th><th><span class="fi">tuo</span></th><th><span class="fi">se</span></th></tr>
  <tr><td>forma básica</td><td><span class="fi">tämä</span></td><td><span class="fi">tuo</span></td><td><span class="fi">se</span></td></tr>
  <tr><td>partitivo</td><td><span class="fi">tätä</span></td><td><span class="fi">tuota</span></td><td><span class="fi">sitä</span></td></tr>
  <tr><td>de … (genitivo)</td><td><span class="fi">tämän</span></td><td><span class="fi">tuon</span></td><td><span class="fi">sen</span></td></tr>
  <tr><td>onde? (dentro)</td><td><span class="fi">tässä</span></td><td><span class="fi">tuossa</span></td><td><span class="fi">siinä</span></td></tr>
  <tr><td>de onde?</td><td><span class="fi">tästä</span></td><td><span class="fi">tuosta</span></td><td><span class="fi">siitä</span></td></tr>
  <tr><td>para onde?</td><td><span class="fi">tähän</span></td><td><span class="fi">tuohon</span></td><td><span class="fi">siihen</span></td></tr>
</table>
<table class="taivutus neljannes">
  <tr><th>caso (plural)</th><th><span class="fi">nämä</span></th><th><span class="fi">nuo</span></th><th><span class="fi">ne</span></th></tr>
  <tr><td>partitivo</td><td><span class="fi">näitä</span></td><td><span class="fi">noita</span></td><td><span class="fi">niitä</span></td></tr>
  <tr><td>de … (genitivo)</td><td><span class="fi">näiden</span></td><td><span class="fi">noiden</span></td><td><span class="fi">niiden</span></td></tr>
  <tr><td>onde? (dentro)</td><td><span class="fi">näissä</span></td><td><span class="fi">noissa</span></td><td><span class="fi">niissä</span></td></tr>
  <tr><td>de onde?</td><td><span class="fi">näistä</span></td><td><span class="fi">noista</span></td><td><span class="fi">niistä</span></td></tr>
  <tr><td>para onde?</td><td><span class="fi">näihin</span></td><td><span class="fi">noihin</span></td><td><span class="fi">niihin</span></td></tr>
</table>
<ul class="esim">
  <li class="s" data-pt="Neste prédio tem sauna.">Tässä talossa on sauna.</li>
  <li class="s" data-pt="A Purjo vai se mudar para este apartamento.">Purjo muuttaa tähän asuntoon.</li>
  <li class="s" data-pt="Naquela prateleira tem tinta.">Tuossa hyllyssä on maalia.</li>
  <li class="s" data-pt="O aluguel é caro, mas a Purjo gosta dele.">Vuokra on kallis, mutta Purjo pitää siitä.</li>
</ul>`
  },

  /* ---------- Números e tempo ---------- */
  {
    id: 'h-luvut', kurssissa: ['t02', 't03', 't08'], osio: 'Números e tempo', otsikko: 'Números', kuvaus: 'De 0 a um milhão, números de cientista e ordinais.',
    html: `
<h3>Números pequenos: 0–19</h3>
<table class="taivutus neljannes">
  <tr><th></th><th>finlandês</th><th></th><th>finlandês</th></tr>
  <tr><td>0</td><td><span class="fi">nolla</span></td><td>10</td><td><span class="fi">kymmenen</span></td></tr>
  <tr><td>1</td><td><span class="fi">yksi</span></td><td>11</td><td><span class="fi">yksitoista</span></td></tr>
  <tr><td>2</td><td><span class="fi">kaksi</span></td><td>12</td><td><span class="fi">kaksitoista</span></td></tr>
  <tr><td>3</td><td><span class="fi">kolme</span></td><td>13</td><td><span class="fi">kolmetoista</span></td></tr>
  <tr><td>4</td><td><span class="fi">neljä</span></td><td>14</td><td><span class="fi">neljätoista</span></td></tr>
  <tr><td>5</td><td><span class="fi">viisi</span></td><td>15</td><td><span class="fi">viisitoista</span></td></tr>
  <tr><td>6</td><td><span class="fi">kuusi</span></td><td>16</td><td><span class="fi">kuusitoista</span></td></tr>
  <tr><td>7</td><td><span class="fi">seitsemän</span></td><td>17</td><td><span class="fi">seitsemäntoista</span></td></tr>
  <tr><td>8</td><td><span class="fi">kahdeksan</span></td><td>18</td><td><span class="fi">kahdeksantoista</span></td></tr>
  <tr><td>9</td><td><span class="fi">yhdeksän</span></td><td>19</td><td><span class="fi">yhdeksäntoista</span></td></tr>
</table>
<p>11–19 = número + <span class="fi">toista</span> (“do segundo [grupo de dez]”). Na fala do dia a dia, vários números ficam mais curtos: veja <a href="#nucleo-fala">Língua falada</a>.</p>

<h3>Números grandes</h3>
<table class="taivutus neljannes">
  <tr><th></th><th>finlandês</th><th>como se monta</th></tr>
  <tr><td>20</td><td><span class="fi">kaksikymmentä</span></td><td>2 × <span class="fi">kymmentä</span> (dez)</td></tr>
  <tr><td>21</td><td><span class="fi">kaksikymmentäyksi</span></td><td>20 + 1, numa palavra só</td></tr>
  <tr><td>30</td><td><span class="fi">kolmekymmentä</span></td><td>3 × <span class="fi">kymmentä</span></td></tr>
  <tr><td>100</td><td><span class="fi">sata</span></td><td></td></tr>
  <tr><td>101</td><td><span class="fi">satayksi</span></td><td>100 + 1</td></tr>
  <tr><td>200</td><td><span class="fi">kaksisataa</span></td><td>2 × <span class="fi" data-l="sata:part">sataa</span> (cem)</td></tr>
  <tr><td>1 000</td><td><span class="fi">tuhat</span></td><td></td></tr>
  <tr><td>2 000</td><td><span class="fi">kaksituhatta</span></td><td>2 × <span class="fi">tuhatta</span> (mil)</td></tr>
  <tr><td>10 000</td><td><span class="fi">kymmenentuhatta</span></td><td>10 × <span class="fi">tuhatta</span></td></tr>
  <tr><td>100 000</td><td><span class="fi">satatuhatta</span></td><td>100 × <span class="fi">tuhatta</span></td></tr>
  <tr><td>1 000 000</td><td><span class="fi">miljoona</span></td><td>um milhão: palavra separada</td></tr>
  <tr><td>2 000 000</td><td><span class="fi">kaksi miljoonaa</span></td><td>2 × <span class="fi">miljoonaa</span>, em duas palavras</td></tr>
</table>
<div class="saanto">
  <h3>A regra</h3>
  <p><b>Multiplicar:</b> o número da frente fica igual, e <span class="fi">kymmenen, sata, tuhat, miljoona</span> vão para o partitivo: <span class="fi">kymmentä</span>, <span class="fi" data-l="sata:part">sataa</span>, <span class="fi">tuhatta, miljoonaa</span> (como <span class="fi">kaksi kahvia</span>). <b>Somar:</b> é só colar o resto no fim. Até 999 999 o número é uma palavra só; um número longo pode ser cortado com um espaço depois do milhar, para ler melhor (veja 101 537 abaixo). O milhão fica sempre separado.</p>
</div>

<h3>As centenas: 100–1000 (lição 8)</h3>
<table class="taivutus neljannes">
  <tr><th></th><th>finlandês</th><th></th><th>finlandês</th></tr>
  <tr><td>100</td><td><span class="fi">sata</span></td><td>600</td><td><span class="fi">kuusisataa</span></td></tr>
  <tr><td>200</td><td><span class="fi">kaksisataa</span></td><td>700</td><td><span class="fi">seitsemänsataa</span></td></tr>
  <tr><td>300</td><td><span class="fi">kolmesataa</span></td><td>800</td><td><span class="fi">kahdeksansataa</span></td></tr>
  <tr><td>400</td><td><span class="fi">neljäsataa</span></td><td>900</td><td><span class="fi">yhdeksänsataa</span></td></tr>
  <tr><td>500</td><td><span class="fi">viisisataa</span></td><td>1000</td><td><span class="fi">tuhat</span></td></tr>
</table>
<p>Cuidado com o fim: <span class="fi">kuusikymmentä</span> = 60, <span class="fi">kuusisataa</span> = 600. Aluguel e preços grandes: <span class="fi">Vuokra on yhdeksänsataa euroa kuukaudessa.</span></p>

<h3>Números de cientista</h3>
<p>Na escrita, os milhares se separam com espaço e os decimais com vírgula, como no Brasil. Para ler em voz alta, corte no espaço:</p>
<table class="taivutus neljannes">
  <tr><th>número</th><th>finlandês</th><th>pedaços</th></tr>
  <tr><td>2026</td><td><span class="fi">kaksituhattakaksikymmentäkuusi</span></td><td>2000 + 20 + 6</td></tr>
  <tr><td>101 537</td><td><span class="fi">satayksituhatta viisisataakolmekymmentäseitsemän</span></td><td>101 × 1000 + 537</td></tr>
  <tr><td>500 000</td><td><span class="fi">viisisataatuhatta</span></td><td>500 × 1000</td></tr>
  <tr><td>2 500 000</td><td><span class="fi">kaksi miljoonaa viisisataatuhatta</span></td><td>2 milhões + 500 × 1000</td></tr>
  <tr><td>3,5</td><td><span class="fi">kolme pilkku viisi</span></td><td><span class="fi">pilkku</span> = vírgula</td></tr>
</table>
<p>Na escrita comum, números longos aparecem em algarismos (<span class="fi">101 537</span>); por extenso, quase só em voz alta.</p>

<h3>Depois de números</h3>
<p>A partir de 2, o substantivo vai para o partitivo singular: <span class="fi">kaksi kahvia</span>, <span class="fi">kymmenen minuuttia</span>.</p>

<h3>Ordinais</h3>
<p><span class="fi">ensimmäinen</span> (1º), <span class="fi">toinen</span> (2º), <span class="fi">kolmas</span> (3º), <span class="fi">neljäs</span> (4º), <span class="fi">viides</span> (5º), <span class="fi">kuudes</span> (6º), <span class="fi">seitsemäs</span> (7º), <span class="fi">kahdeksas</span> (8º), <span class="fi">yhdeksäs</span> (9º), <span class="fi">kymmenes</span> (10º).</p>`
  },
  {
    id: 'h-aika', kurssissa: ['t09', 't10', 't13', 't16'], osio: 'Números e tempo', otsikko: 'Dias, meses e horas', kuvaus: 'maanantai, marraskuu, kello on neljä.',
    html: `
<h3>Dias da semana</h3>
<p>Para dizer “na segunda”, “no sábado”, use o essivo <span class="fi pala">-na</span>.</p>
<table class="taivutus neljannes">
  <tr><th>dia</th><th>“na …”</th></tr>
  <tr><td><span class="fi">maanantai</span><span class="kaannos" lang="pt-BR">segunda-feira</span></td><td><span class="fi">maanantaina</span><span class="kaannos" lang="pt-BR">na segunda</span></td></tr>
  <tr><td><span class="fi">tiistai</span><span class="kaannos" lang="pt-BR">terça-feira</span></td><td><span class="fi">tiistaina</span><span class="kaannos" lang="pt-BR">na terça</span></td></tr>
  <tr><td><span class="fi">keskiviikko</span><span class="kaannos" lang="pt-BR">quarta-feira (“meio da semana”)</span></td><td><span class="fi">keskiviikkona</span><span class="kaannos" lang="pt-BR">na quarta</span></td></tr>
  <tr><td><span class="fi">torstai</span><span class="kaannos" lang="pt-BR">quinta-feira</span></td><td><span class="fi">torstaina</span><span class="kaannos" lang="pt-BR">na quinta</span></td></tr>
  <tr><td><span class="fi">perjantai</span><span class="kaannos" lang="pt-BR">sexta-feira</span></td><td><span class="fi">perjantaina</span><span class="kaannos" lang="pt-BR">na sexta</span></td></tr>
  <tr><td><span class="fi">lauantai</span><span class="kaannos" lang="pt-BR">sábado</span></td><td><span class="fi">lauantaina</span><span class="kaannos" lang="pt-BR">no sábado</span></td></tr>
  <tr><td><span class="fi">sunnuntai</span><span class="kaannos" lang="pt-BR">domingo</span></td><td><span class="fi">sunnuntaina</span><span class="kaannos" lang="pt-BR">no domingo</span></td></tr>
  <tr><td><span class="fi">viikonloppu</span><span class="kaannos" lang="pt-BR">fim de semana</span></td><td><span class="fi">viikonloppuna</span><span class="kaannos" lang="pt-BR">no fim de semana</span></td></tr>
</table>
<p>Os dias se escrevem com letra minúscula, como em português.</p>

<h3>Meses</h3>
<p>Todos terminam em <span class="fi pala">-kuu</span> (lua, mês), e muitos nomes vêm do trabalho no campo e da natureza. Para dizer “em novembro”, use o inessivo <span class="fi pala">-ssa</span>: <span class="fi">marraskuussa</span>.</p>
<table class="taivutus neljannes">
  <tr><th>mês</th><th>o nome quer dizer</th><th>“em …”</th></tr>
  <tr><td><span class="fi">tammikuu</span><span class="kaannos" lang="pt-BR">janeiro</span></td><td>mês do carvalho (ou “o miolo do inverno”)</td><td><span class="fi">tammikuussa</span><span class="kaannos" lang="pt-BR">em janeiro</span></td></tr>
  <tr><td><span class="fi">helmikuu</span><span class="kaannos" lang="pt-BR">fevereiro</span></td><td>mês da pérola (gotas de gelo)</td><td><span class="fi">helmikuussa</span><span class="kaannos" lang="pt-BR">em fevereiro</span></td></tr>
  <tr><td><span class="fi">maaliskuu</span><span class="kaannos" lang="pt-BR">março</span></td><td>mês da terra (a neve some)</td><td><span class="fi">maaliskuussa</span><span class="kaannos" lang="pt-BR">em março</span></td></tr>
  <tr><td><span class="fi">huhtikuu</span><span class="kaannos" lang="pt-BR">abril</span></td><td>mês da queimada (antigo jeito de abrir roça)</td><td><span class="fi">huhtikuussa</span><span class="kaannos" lang="pt-BR">em abril</span></td></tr>
  <tr><td><span class="fi">toukokuu</span><span class="kaannos" lang="pt-BR">maio</span></td><td>mês da semeadura</td><td><span class="fi">toukokuussa</span><span class="kaannos" lang="pt-BR">em maio</span></td></tr>
  <tr><td><span class="fi">kesäkuu</span><span class="kaannos" lang="pt-BR">junho</span></td><td>mês do verão</td><td><span class="fi">kesäkuussa</span><span class="kaannos" lang="pt-BR">em junho</span></td></tr>
  <tr><td><span class="fi">heinäkuu</span><span class="kaannos" lang="pt-BR">julho</span></td><td>mês do feno</td><td><span class="fi">heinäkuussa</span><span class="kaannos" lang="pt-BR">em julho</span></td></tr>
  <tr><td><span class="fi">elokuu</span><span class="kaannos" lang="pt-BR">agosto</span></td><td>mês da colheita</td><td><span class="fi">elokuussa</span><span class="kaannos" lang="pt-BR">em agosto</span></td></tr>
  <tr><td><span class="fi">syyskuu</span><span class="kaannos" lang="pt-BR">setembro</span></td><td>mês do outono</td><td><span class="fi">syyskuussa</span><span class="kaannos" lang="pt-BR">em setembro</span></td></tr>
  <tr><td><span class="fi">lokakuu</span><span class="kaannos" lang="pt-BR">outubro</span></td><td>mês da lama</td><td><span class="fi">lokakuussa</span><span class="kaannos" lang="pt-BR">em outubro</span></td></tr>
  <tr><td><span class="fi">marraskuu</span><span class="kaannos" lang="pt-BR">novembro</span></td><td>mês morto</td><td><span class="fi">marraskuussa</span><span class="kaannos" lang="pt-BR">em novembro</span></td></tr>
  <tr><td><span class="fi">joulukuu</span><span class="kaannos" lang="pt-BR">dezembro</span></td><td>mês do Natal</td><td><span class="fi">joulukuussa</span><span class="kaannos" lang="pt-BR">em dezembro</span></td></tr>
</table>

<h3>Estações do ano e o tempo (lição 9)</h3>
<p>Com os meses, “quando?” é <span class="fi pala">-ssa/-ssä</span>: <span class="fi">joulukuussa</span> (em dezembro). Com as estações, é <span class="fi pala">-lla/-llä</span>:</p>
<table class="taivutus neljannes">
  <tr><th>estação</th><th>“quando?”</th></tr>
  <tr><td><span class="fi">talvi</span><span class="kaannos" lang="pt-BR">inverno</span></td><td><span class="fi">talvella</span><span class="kaannos" lang="pt-BR">no inverno</span></td></tr>
  <tr><td><span class="fi">kevät</span><span class="kaannos" lang="pt-BR">primavera</span></td><td><span class="fi">keväällä</span><span class="kaannos" lang="pt-BR">na primavera</span></td></tr>
  <tr><td><span class="fi">kesä</span><span class="kaannos" lang="pt-BR">verão</span></td><td><span class="fi">kesällä</span><span class="kaannos" lang="pt-BR">no verão</span></td></tr>
  <tr><td><span class="fi">syksy</span><span class="kaannos" lang="pt-BR">outono</span></td><td><span class="fi">syksyllä</span><span class="kaannos" lang="pt-BR">no outono</span></td></tr>
</table>
<p>No Brasil é ao contrário: <span class="fi">Joulukuussa Belo Horizontessa on kesä.</span> Para falar do tempo, muitas frases não têm sujeito:</p>
<ul class="esim">
  <li class="s" data-pt="Está chovendo.">Sataa.</li>
  <li class="s" data-pt="Está nevando.">Sataa lunta.</li>
  <li class="s" data-pt="Faz sol.">Aurinko paistaa.</li>
  <li class="s" data-pt="Está cinco graus negativos.">Pakkasta on viisi astetta.</li>
  <li class="s" data-pt="Está vinte graus.">Lämmintä on kaksikymmentä astetta.</li>
  <li class="s" data-pt="Lá fora está frio.">Ulkona on kylmä.</li>
</ul>

<h3>Horas</h3>
<p>A pergunta: <span class="fi">Paljonko kello on?</span> ou <span class="fi">Mitä kello on?</span> (Que horas são?). A resposta começa sempre com <span class="fi">Kello on</span> … Dois truques: <span class="fi">yli</span> = “passado de”, <span class="fi">vaille</span> = “faltando para”; <span class="fi">vartti</span> = quarto de hora (sempre <span class="fi">varttia</span>).</p>
<table class="taivutus neljannes">
  <tr><th>hora</th><th>finlandês</th><th>palavra por palavra</th></tr>
  <tr><td>4:00</td><td><span class="fi">Kello on neljä.</span></td><td>o relógio é quatro</td></tr>
  <tr><td>4:05</td><td><span class="fi">Kello on viisi yli neljä.</span></td><td>cinco passado das quatro</td></tr>
  <tr><td>4:10</td><td><span class="fi">Kello on kymmenen yli neljä.</span></td><td>dez passado das quatro</td></tr>
  <tr><td>4:15</td><td><span class="fi">Kello on varttia yli neljä.</span></td><td>um quarto passado das quatro</td></tr>
  <tr><td>4:30</td><td><span class="fi">Kello on puoli viisi.</span></td><td><b>meia para as cinco</b> (não 5:30!)</td></tr>
  <tr><td>4:45</td><td><span class="fi">Kello on varttia vaille viisi.</span></td><td>um quarto faltando para as cinco</td></tr>
  <tr><td>4:50</td><td><span class="fi">Kello on kymmenen vaille viisi.</span></td><td>dez faltando para as cinco</td></tr>
  <tr><td>4:55</td><td><span class="fi">Kello on viisi vaille viisi.</span></td><td>cinco faltando para as cinco (também se diz <span class="fi">viittä vaille viisi</span>)</td></tr>
</table>
<div class="huomio">
  <p><b>Cuidado com <span class="fi">puoli</span>.</b> Em finlandês, a meia hora conta para a hora <b>seguinte</b>: <span class="fi">puoli viisi</span> = 4:30, <span class="fi">puoli kaksitoista</span> = 11:30. É o erro mais comum de quem chega do Brasil.</p>
</div>

<h3>Às … horas, e o relógio de 24 horas</h3>
<ul class="esim">
  <li class="s" data-pt="às oito">kello kahdeksan</li>
  <li class="s" data-pt="Volto para casa às seis.">Tulen kotiin kuudelta.</li>
  <li class="s" data-puhu="Juna lähtee kello kuusitoista kymmenen." data-pt="O trem sai às 16h10.">Juna lähtee kello 16.10.</li>
</ul>
<p>“Às seis” tem duas formas: <span class="fi">kello kuusi</span> ou só <span class="fi">kuudelta</span> (ablativo, muito comum na fala do dia a dia). Horários de trem, loja e trabalho usam o relógio de 24 horas, escrito com ponto: <span class="fi">16.10</span> (diga <span class="fi">kuusitoista kymmenen</span>).</p>

<h3>Partes do dia</h3>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th><th>“de …”</th></tr>
  <tr><td><span class="fi">aamu</span></td><td>manhã</td><td><span class="fi">aamulla</span> = de manhã</td></tr>
  <tr><td><span class="fi">päivä</span></td><td>dia, tarde</td><td><span class="fi">päivällä</span> = de dia, à tarde</td></tr>
  <tr><td><span class="fi">ilta</span></td><td>noite (até dormir)</td><td><span class="fi">illalla</span> = à noite</td></tr>
  <tr><td><span class="fi">yö</span></td><td>madrugada, noite de sono</td><td><span class="fi">yöllä</span> = de madrugada</td></tr>
</table>
<h3>A que horas? Horários de viagem (lição 10)</h3>
<p><span class="fi">Mihin aikaan?</span> = a que horas? A resposta é só <span class="fi">kello</span> + a hora, sem preposição: <span class="fi">Mihin aikaan lento lähtee? – Kello seitsemän kaksikymmentä.</span> Para a duração, <span class="fi">tunti</span> (uma hora de 60 minutos): <span class="fi">kaksi tuntia ennen lähtöä</span> (duas horas antes da partida).</p>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">ajoissa</span></td><td>a tempo, na hora certa</td></tr>
  <tr><td><span class="fi">myöhässä</span></td><td>atrasado, atrasada</td></tr>
  <tr><td><span class="fi">aikaisin</span></td><td>cedo</td></tr>
  <tr><td><span class="fi">ajassa</span></td><td>no horário (painéis de voos e trens)</td></tr>
</table>
<p>As horas com exercícios: <a href="#t10">lição 10</a> e o Treino <a href="#treino-t10-kello">Que horas são? Kello on…</a> e <a href="#treino-t10-kuuntele">Ouça a hora</a>.</p>
<h3>Quando foi? Ontem, na semana passada, há dois dias (lição 13)</h3>
<p>As partes do dia se combinam com <span class="fi">eilen, tänään, huomenna</span>: <span class="fi">eilen illalla</span> (ontem à noite), <span class="fi">tänään aamulla</span> (hoje de manhã). Para a tarde, <span class="fi">iltapäivällä</span>. <span class="fi">viime</span> (passado, última) não muda; com <span class="fi">sitten</span> o tempo vai no partitivo, como depois de todo número.</p>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">eilen</span></td><td>ontem</td></tr>
  <tr><td><span class="fi">iltapäivällä</span></td><td>à tarde</td></tr>
  <tr><td><span class="fi">viime viikolla</span></td><td>na semana passada</td></tr>
  <tr><td><span class="fi">viime vuonna</span></td><td>no ano passado</td></tr>
  <tr><td><span class="fi">kaksi päivää sitten</span></td><td>há dois dias</td></tr>
  <tr><td><span class="fi">kolme kertaa viikossa</span></td><td>três vezes por semana</td></tr>
</table>
<p>Com o passado: <a href="#h-imperfekti">Passado: o imperfekti</a> e o Treino <a href="#treino-t13-aika">Quando? eilen, viime viikolla…</a>.</p>`
  },

  /* ---------- Língua falada ---------- */
  {
    id: 'h-puhekieli', siirretty: 'nucleo-fala', osio: 'Língua falada', otsikko: 'Na rua: a língua falada', kuvaus: 'mä oon, me mennään, tää, mut… Para reconhecer, não para usar.',
    html: `
<div data-rekisteri="puhe">
<p>Este curso usa a <b>língua padrão</b> (<span class="fi">kirjakieli</span>): a dos livros, das notícias e dos cursos. Com ela você é entendido em todo o país. Na rua e em casa, muitos finlandeses falam de um jeito mais curto (<span class="fi">yleispuhekieli</span>), e cada um um pouco diferente. Você <b>não precisa</b> falar assim: basta reconhecer quando ouvir. Esta página reúne as diferenças mais comuns, por assunto; cada lição tem um cantinho <b>Na rua</b> com algumas delas.</p>

<div class="saanto">
  <h3>Três mudanças que explicam quase tudo</h3>
  <p><b>1. O fim da palavra cai.</b> <span class="fi">mutta → mut</span>, <span class="fi">kaksi → kaks</span>, <span class="fi">täällä → tääl</span>.</p>
  <p><b>2. O d some.</b> <span class="fi">meidän → meiän</span>, <span class="fi">kahdeksan → kaheksan</span>, <span class="fi">nähdään → nähään</span>.</p>
  <p><b>3. Vogais se igualam ou caem.</b> <span class="fi">punainen → punanen</span>, <span class="fi">vihreä → vihree</span>, <span class="fi">olen → oon</span>.</p>
</div>

<h3>Pronomes pessoais</h3>
<table class="taivutus neljannes">
  <tr><th>escrita</th><th>fala</th><th>português</th></tr>
  <tr><td><span class="fi">minä</span></td><td><span class="fi">mä</span></td><td>eu</td></tr>
  <tr><td><span class="fi">sinä</span></td><td><span class="fi">sä</span></td><td>você</td></tr>
  <tr><td><span class="fi">hän</span></td><td><span class="fi" data-l="se#2">se</span></td><td>ele, ela (na fala, pessoa = “isso”)</td></tr>
  <tr><td><span class="fi">me</span></td><td><span class="fi">me</span></td><td>nós (igual)</td></tr>
  <tr><td><span class="fi">te</span></td><td><span class="fi">te</span></td><td>vocês (igual)</td></tr>
  <tr><td><span class="fi">he</span></td><td><span class="fi">ne</span></td><td>eles, elas</td></tr>
</table>

<h3>Meu, seu e “eu tenho”</h3>
<table class="taivutus neljannes">
  <tr><th>escrita</th><th>fala</th><th>português</th></tr>
  <tr><td><span class="fi">minun, sinun</span></td><td><span class="fi">mun, sun</span></td><td>meu, seu</td></tr>
  <tr><td><span class="fi">meidän, teidän</span></td><td><span class="fi">meiän, meijän, teiän, teijän</span></td><td>nosso, de vocês</td></tr>
  <tr><td><span class="fi">minulla on, sinulla on</span></td><td><span class="fi">mulla on, sulla on</span></td><td>eu tenho, você tem</td></tr>
  <tr><td><span class="fi">minulle, sinulle</span></td><td><span class="fi">mulle, sulle</span></td><td>para mim, para você</td></tr>
  <tr><td><span class="fi">minua, sinua</span></td><td><span class="fi">mua, sua</span></td><td>me, te (objeto)</td></tr>
</table>

<h3>O verbo olla</h3>
<table class="taivutus neljannes">
  <tr><th>escrita</th><th>fala</th><th>português</th></tr>
  <tr><td><span class="fi">minä olen</span></td><td><span class="fi">mä oon</span></td><td>eu sou, estou</td></tr>
  <tr><td><span class="fi">sinä olet</span></td><td><span class="fi">sä oot</span></td><td>você é, está</td></tr>
  <tr><td><span class="fi">hän on</span></td><td><span class="fi" data-l="se#2">se</span> <span class="fi">on</span></td><td>ele, ela é</td></tr>
  <tr><td><span class="fi">me olemme</span></td><td><span class="fi">me ollaan</span></td><td>nós somos</td></tr>
  <tr><td><span class="fi">te olette</span></td><td><span class="fi">te ootte</span></td><td>vocês são</td></tr>
  <tr><td><span class="fi">he ovat</span></td><td><span class="fi">ne on</span></td><td>eles são</td></tr>
  <tr><td><span class="fi">en ole</span></td><td><span class="fi">en oo</span></td><td>não sou, não estou</td></tr>
  <tr><td><span class="fi">oletko sinä?</span></td><td><span class="fi">ootko sä? ooksä?</span></td><td>você é? você está?</td></tr>
</table>

<h3>Outros verbos</h3>
<table class="taivutus neljannes">
  <tr><th>escrita</th><th>fala</th><th>português</th></tr>
  <tr><td><span class="fi">me puhumme</span></td><td><span class="fi">me puhutaan</span></td><td>nós falamos (“nós” usa o passivo)</td></tr>
  <tr><td><span class="fi">he puhuvat</span></td><td><span class="fi">ne puhuu</span></td><td>eles falam (“eles” usa a forma de “ele”)</td></tr>
  <tr><td><span class="fi">tulen, tulet</span></td><td><span class="fi">tuun, tuut</span></td><td>eu venho, você vem</td></tr>
  <tr><td><span class="fi">tule!</span></td><td><span class="fi">tuu!</span></td><td>venha!</td></tr>
  <tr><td><span class="fi">menen, menet</span></td><td><span class="fi">meen, meet</span></td><td>eu vou, você vai</td></tr>
  <tr><td><span class="fi">mene!</span></td><td><span class="fi">mee!</span></td><td>vá!</td></tr>
  <tr><td><span class="fi">tuleeko, meneekö</span></td><td><span class="fi">tuleeks, meneeks</span></td><td>vem?, vai? (pergunta: <span class="fi pala">-ko</span> → <span class="fi pala">-ks</span>)</td></tr>
  <tr><td><span class="fi">mutta, sitten, että</span></td><td><span class="fi">mut, sit</span>, <span class="fi" data-l="et:puhe">et</span></td><td>mas, depois, que</td></tr>
</table>

<h3>Este, aquele, aqui, lá</h3>
<table class="taivutus neljannes">
  <tr><th>escrita</th><th>fala</th><th>português</th></tr>
  <tr><td><span class="fi">tämä, nämä</span></td><td><span class="fi">tää, nää</span></td><td>este, estes</td></tr>
  <tr><td><span class="fi">tuo, nuo</span></td><td><span class="fi">toi, noi</span></td><td>aquele, aqueles</td></tr>
  <tr><td><span class="fi">täällä</span></td><td><span class="fi">tääl</span></td><td>aqui</td></tr>
  <tr><td><span class="fi">siellä</span></td><td><span class="fi">siel</span></td><td>lá</td></tr>
  <tr><td><span class="fi">tuolla</span></td><td><span class="fi">tuol</span></td><td>ali, lá (apontando)</td></tr>
</table>

<h3>Números e dinheiro</h3>
<table class="taivutus neljannes tiivis pitkat">
  <tr><th>escrita</th><th>fala</th><th>português</th></tr>
  <tr><td><span class="fi">yksi, kaksi</span></td><td><span class="fi">yks, kaks</span></td><td>um, dois</td></tr>
  <tr><td><span class="fi">viisi, kuusi</span></td><td><span class="fi">viis, kuus</span></td><td>cinco, seis</td></tr>
  <tr><td><span class="fi">seitsemän</span></td><td><span class="fi">seittemän</span></td><td>sete</td></tr>
  <tr><td><span class="fi">kahdeksan, yhdeksän</span></td><td><span class="fi">kaheksan, yheksän</span></td><td>oito, nove</td></tr>
  <tr><td><span class="fi">kaksikymmentä, kolmekymmentä</span></td><td><span class="fi">kakskyt, kolkyt</span></td><td>vinte, trinta</td></tr>
  <tr><td><span class="fi">viisi euroa</span></td><td><span class="fi">vitonen</span></td><td>uma nota de 5 euros</td></tr>
  <tr><td><span class="fi">kymmenen euroa</span></td><td><span class="fi">kymppi</span></td><td>uma nota de 10 euros</td></tr>
  <tr><td><span class="fi">sata euroa</span></td><td><span class="fi">satanen</span></td><td>uma nota de 100 euros</td></tr>
</table>
<p><span class="fi">kolme, neljä, kymmenen</span> ficam iguais.</p>

<h3>Cores</h3>
<table class="taivutus neljannes">
  <tr><th>escrita</th><th>fala</th><th>português</th></tr>
  <tr><td><span class="fi">punainen</span></td><td><span class="fi">punanen</span></td><td>vermelho, vermelha</td></tr>
  <tr><td><span class="fi">keltainen</span></td><td><span class="fi">keltanen</span></td><td>amarelo, amarela</td></tr>
  <tr><td><span class="fi">valkoinen</span></td><td><span class="fi">valkonen</span></td><td>branco, branca</td></tr>
  <tr><td><span class="fi">vihreä</span></td><td><span class="fi">vihree</span></td><td>verde</td></tr>
  <tr><td><span class="fi">ruskea</span></td><td><span class="fi">ruskee</span></td><td>marrom</td></tr>
</table>
<p><span class="fi">sininen, musta, harmaa</span> (azul, preto, cinza) ficam iguais.</p>

<h3>Perguntas</h3>
<table class="taivutus neljannes">
  <tr><th>escrita</th><th>fala</th><th>português</th></tr>
  <tr><td><span class="fi">miksi?</span></td><td><span class="fi">miks?</span></td><td>por quê?</td></tr>
  <tr><td><span class="fi">millainen?</span></td><td><span class="fi">millanen?</span></td><td>como é? que tipo?</td></tr>
  <tr><td><span class="fi">Mikä tuo on?</span></td><td><span class="fi">Mitä toi on?</span></td><td>o que é aquilo? (na fala, <span class="fi">mitä</span> no lugar de <span class="fi">mikä</span>)</td></tr>
  <tr><td><span class="fi">oletko sinä?</span></td><td><span class="fi">ooks sä?</span></td><td>você é? você está?</td></tr>
</table>

<h3>Palavrinhas que você vai ouvir o tempo todo</h3>
<table class="taivutus neljannes">
  <tr><th>escrita</th><th>fala</th><th>português</th></tr>
  <tr><td><span class="fi">kyllä</span></td><td><span class="fi">joo, juu</span></td><td>sim</td></tr>
  <tr><td><span class="fi">niin</span></td><td><span class="fi">nii</span></td><td>é, pois é</td></tr>
  <tr><td><span class="fi">niin kuin</span></td><td><span class="fi">niinku</span></td><td>tipo, assim (muleta)</td></tr>
  <tr><td><span class="fi">katso</span></td><td><span class="fi">kato</span></td><td>olha!</td></tr>
  <tr><td><span class="fi">vain</span></td><td><span class="fi">vaa</span></td><td>só</td></tr>
  <tr><td><span class="fi">myös</span></td><td><span class="fi">kans</span></td><td>também</td></tr>
  <tr><td><span class="fi">todella</span></td><td><span class="fi">tosi</span></td><td>muito</td></tr>
  <tr><td><span class="fi">mukava, selvä</span></td><td><span class="fi">kiva, okei</span></td><td>legal, ok</td></tr>
</table>

<h3>Oi, obrigado, desculpa, tchau</h3>
<table class="taivutus neljannes">
  <tr><th>escrita</th><th>fala</th><th>português</th></tr>
  <tr><td><span class="fi">hei, moi</span></td><td><span class="fi">moro, moikka, morjens</span></td><td>oi, e aí (<span class="fi">moro</span> é mais regional)</td></tr>
  <tr><td><span class="fi">kiitos</span></td><td><span class="fi">kiitti</span></td><td>valeu</td></tr>
  <tr><td><span class="fi">anteeksi</span></td><td><span class="fi">sori</span></td><td>foi mal</td></tr>
  <tr><td><span class="fi">nähdään</span></td><td><span class="fi">nähään</span></td><td>até mais (a gente se vê)</td></tr>
</table>

<p>Gíria de Helsinque (<i>stadin slangi</i>) fica para o fim do curso.</p>
</div>`
  },

  /* ---------- Frases úteis ---------- */
  {
    id: 'h-fraasit', kurssissa: ['t00', 't03', 't04'], osio: 'Frases úteis', otsikko: 'Frases de sobrevivência', kuvaus: 'Para os primeiros dias na Finlândia.',
    html: `
<ul class="esim">
  <li class="s" data-pt="oi">Moi!</li>
  <li class="s" data-pt="obrigado, obrigada">Kiitos!</li>
  <li class="s" data-pt="desculpe / com licença">Anteeksi!</li>
  <li class="s" data-pt="Não entendo.">En ymmärrä.</li>
  <li class="s" data-pt="Você fala inglês?">Puhutko englantia?</li>
  <li class="s" data-pt="Você poderia falar mais devagar?">Voisitko puhua hitaammin?</li>
  <li class="s" data-pt="O que significa…?">Mitä … tarkoittaa?</li>
  <li class="s" data-pt="Como se diz… em finlandês?">Miten sanotaan … suomeksi?</li>
  <li class="s" data-pt="Eu falo só um pouco de finlandês.">Puhun vain vähän suomea.</li>
  <li class="s" data-pt="Eu gostaria de um café.">Haluaisin kahvin.</li>
  <li class="s" data-pt="Quanto custa?">Paljonko se maksaa?</li>
  <li class="s" data-pt="Onde fica o banheiro?">Missä on vessa?</li>
  <li class="s" data-pt="tchau">Hei hei!</li>
</ul>
<p>Não existe palavra para “por favor”. A gentileza vai no verbo (<span class="fi">voisitko…?</span>, <span class="fi">saisinko…?</span>) ou num <span class="fi">kiitos</span> no fim da frase.</p>`
  },

  /* Omistajan idea 18.10.2026: ”huono suomi” – miten ulkomaalainen tulee ymmärretyksi perusmuodoilla, missä raja kulkee
     ja mitä merkityksiä perusmuodoilla ei saa sanotuksi. */
  {
    id: 'h-perusmuodoilla', kurssissa: ['t00', 't01'], osio: 'Frases úteis', otsikko: 'Finlandês quebrado que funciona',
    kuvaus: 'Só com as formas do dicionário: até onde dá para ir, e onde o sentido se perde.',
    html: `
<p>Os finlandeses estão acostumados a ouvir finlandês “quebrado”: muita gente aprende a língua já adulta. Se você usar
<b>só as formas do dicionário</b> (o verbo no infinitivo, o substantivo sem terminação), você é entendido com
frequência surpreendente. Certo é melhor, mas <b>ser entendido vem primeiro</b>. Esta página mostra até onde isso
funciona e quais terminações aprender primeiro para passar da fronteira.</p>

<div class="saanto">
  <h3>O kit mínimo: cinco regras</h3>
  <ol>
    <li><b>Verbo na forma do dicionário:</b> <span class="fi">haluta</span>, <span class="fi">ymmärtää</span>, <span class="fi">mennä</span>.</li>
    <li><b>Pronome sempre:</b> <span class="fi">minä</span>, <span class="fi">sinä</span>, <span class="fi">hän</span>. O verbo quebrado não mostra a pessoa; o pronome mostra.</li>
    <li><b>Ordem fixa:</b> quem → faz → o quê. Em finlandês certo a ordem é livre; no quebrado, ela é o que sobra do sentido.</li>
    <li><b>Negação com <span class="fi">ei</span></b> antes do verbo, para todas as pessoas.</li>
    <li><b>Tempo com palavras:</b> <span class="fi">eilen</span> (ontem), <span class="fi">nyt</span> (agora), <span class="fi">huomenna</span> (amanhã). O verbo não muda.</li>
  </ol>
</div>

<h3>Quebrado, certo, e se entende</h3>
<p>Embaixo de cada frase: o <b>quebrado</b> palavra por palavra (assim soa para um finlandês) e o <b>certo</b> em português normal. Quando o quebrado falha, a última coluna mostra um quebrado que funciona.</p>
<table class="taivutus neljannes">
  <tr><th>quebrado</th><th>certo</th><th>entende?</th></tr>
  <tr><td><span class="fi">Minä haluta kahvi.</span><span class="kaannos" lang="pt-BR">eu querer café</span></td><td><span class="fi">Haluan kahvia.</span><span class="kaannos" lang="pt-BR">Quero café.</span></td><td>✓ sim</td></tr>
  <tr><td><span class="fi">Minä ei ymmärtää.</span><span class="kaannos" lang="pt-BR">eu não entender</span></td><td><span class="fi">En ymmärrä.</span><span class="kaannos" lang="pt-BR">Não entendo.</span></td><td>✓ sim</td></tr>
  <tr><td><span class="fi">Kaksi kahvi, kiitos.</span><span class="kaannos" lang="pt-BR">dois café, obrigado</span></td><td><span class="fi">Kaksi kahvia, kiitos.</span><span class="kaannos" lang="pt-BR">Dois cafés, por favor.</span></td><td>✓ sim</td></tr>
  <tr><td><span class="fi">Missä vessa?</span><span class="kaannos" lang="pt-BR">onde banheiro?</span></td><td><span class="fi">Missä on vessa?</span><span class="kaannos" lang="pt-BR">Onde fica o banheiro?</span></td><td>✓ sim</td></tr>
  <tr><td><span class="fi">Minä tarvita lääkäri.</span><span class="kaannos" lang="pt-BR">eu precisar médico</span></td><td><span class="fi">Tarvitsen lääkärin.</span><span class="kaannos" lang="pt-BR">Preciso de um médico.</span></td><td>✓ sim</td></tr>
  <tr><td><span class="fi">Huomenna minä mennä Helsinki.</span><span class="kaannos" lang="pt-BR">amanhã eu ir Helsinque</span></td><td><span class="fi">Huomenna menen Helsinkiin.</span><span class="kaannos" lang="pt-BR">Amanhã vou para Helsinque.</span></td><td>✓ sim: <span class="fi">mennä</span> já diz “para”</td></tr>
  <tr><td><span class="fi">Minä olla nälkä.</span><span class="kaannos" lang="pt-BR">eu ser fome</span></td><td><span class="fi">Minulla on nälkä.</span><span class="kaannos" lang="pt-BR">Estou com fome.</span></td><td>~ pelo contexto<span class="toimii">funciona: <span class="fi">Minä nälkäinen.</span><span class="kaannos" lang="pt-BR">eu faminto</span> ✓</span></td></tr>
  <tr><td><span class="fi">Minä ei talo.</span><span class="kaannos" lang="pt-BR">eu não casa</span></td><td><span class="fi">Minulla ei ole taloa.</span><span class="kaannos" lang="pt-BR">Não tenho casa.</span></td><td>~ estranho<span class="toimii">funciona: <span class="fi">Minä ei omistaa talo.</span><span class="kaannos" lang="pt-BR">eu não possuir casa</span> ✓</span></td></tr>
  <tr><td><span class="fi">Juna Helsinki?</span><span class="kaannos" lang="pt-BR">trem Helsinque?</span></td><td><span class="fi">Meneekö juna Helsinkiin?</span><span class="kaannos" lang="pt-BR">O trem vai para Helsinque?</span></td><td>~ para ou de Helsinque?<span class="toimii">funciona: <span class="fi">Juna mennä Helsinki?</span><span class="kaannos" lang="pt-BR">trem ir Helsinque?</span> ✓</span></td></tr>
  <tr><td><span class="fi">Minä olla auto.</span><span class="kaannos" lang="pt-BR">eu ser carro</span></td><td><span class="fi">Minulla on auto.</span><span class="kaannos" lang="pt-BR">Eu tenho carro.</span></td><td>✗ “eu sou um carro”<span class="toimii">funciona: <span class="fi">Minä omistaa auto.</span><span class="kaannos" lang="pt-BR">eu possuir carro</span> ✓</span></td></tr>
  <tr><td><span class="fi">Minä olla kauppa.</span><span class="kaannos" lang="pt-BR">eu ser loja</span></td><td><span class="fi">Olen kaupassa.</span><span class="kaannos" lang="pt-BR">Estou na loja.</span></td><td>✗ “eu sou uma loja”<span class="toimii">funciona: <span class="fi">Minä sijaita nyt kauppa.</span><span class="kaannos" lang="pt-BR">eu estar situado agora loja</span> ✓</span></td></tr>
</table>

<h3>Onde fica a fronteira</h3>
<p>Quase toda terminação pode ser trocada por <b>uma palavra a mais</b>. É assim que o finlandês quebrado chega longe:</p>
<table class="taivutus neljannes">
  <tr><th>exemplo quebrado</th><th>palavra que substitui</th><th>no lugar de</th></tr>
  <tr><td><span class="fi">Minä sijaita nyt kauppa.</span><span class="kaannos" lang="pt-BR">eu estar situado agora loja</span></td><td><span class="fi">sijaita</span> (estar situado, ficar), <span class="fi">täällä</span> (aqui), <span class="fi">siellä</span> (lá)</td><td>onde (<span class="fi">kaupassa</span>)</td></tr>
  <tr><td><span class="fi">Minä tulla kauppa.</span><span class="kaannos" lang="pt-BR">eu vir loja</span></td><td><span class="fi">mennä</span> (ir), <span class="fi">tulla</span> (vir)</td><td>para onde, de onde (<span class="fi">kauppaan</span>, <span class="fi">kaupasta</span>)</td></tr>
  <tr><td><span class="fi">Minä omistaa auto.</span><span class="kaannos" lang="pt-BR">eu possuir carro</span></td><td><span class="fi">omistaa</span> (possuir)</td><td>ter (<span class="fi">minulla on</span>)</td></tr>
  <tr><td><span class="fi">Minun auto.</span><span class="kaannos" lang="pt-BR">meu carro</span></td><td><span class="fi">minun</span> (meu), <span class="fi">sinun</span> (seu)</td><td>de quem (<span class="fi">Maian</span>)</td></tr>
  <tr><td><span class="fi">Kahvi ilman maito.</span><span class="kaannos" lang="pt-BR">café sem leite</span></td><td><span class="fi">kanssa</span>, <span class="fi">ilman</span></td><td>com, sem</td></tr>
  <tr><td><span class="fi">Jos minä olla rikas, minä ostaa talo.</span><span class="kaannos" lang="pt-BR">se eu ser rico, eu comprar casa</span></td><td><span class="fi">jos</span></td><td>se (condicional)</td></tr>
  <tr><td><span class="fi">Eilen minä ostaa leipä.</span><span class="kaannos" lang="pt-BR">ontem eu comprar pão</span></td><td><span class="fi">minä</span> (eu), <span class="fi">eilen</span> (ontem), <span class="fi">huomenna</span> (amanhã)</td><td>pessoa e tempo do verbo</td></tr>
</table>
<p>Então o limite não é “o que dá para dizer”. São três preços:</p>
<ol>
  <li><b>Esforço e ambiguidade.</b> As frases ficam mais longas e mais estranhas, e quem ouve trabalha por você.
    Funciona numa loja ou com amigos pacientes; cansa numa conversa longa.</li>
  <li><b>Nuances que somem.</b> Todo ou parte (<span class="fi">ostan leivän</span> = compro o pão, ele inteiro;
    <span class="fi">ostan leipää</span> = compro pão, um pouco), gentileza (<span class="fi">Haluaisin…</span>,
    <span class="fi">Saisinko…?</span>, <span class="fi">Voisitko…?</span>), o tom de quem fala bem.</li>
  <li><b>A fronteira de verdade é ouvir.</b> Você pode falar sem terminações, mas os finlandeses respondem
    <b>com</b> elas: <span class="fi">kaupassa</span>, <span class="fi">kaupasta</span> e <span class="fi">kauppaan</span>
    são todos <span class="fi">kauppa</span>. Para entender a resposta, as terminações fazem muito mais falta do que para falar.</li>
</ol>
<p>Frases dentro de frases (“o homem que eu vi é o Jay”) também cansam: quebre em frases curtas.
<span class="fi">Minä nähdä mies. Mies olla Jay.</span></p>

<div class="saanto">
  <h3>As cinco terminações que mais rendem</h3>
  <p>Na ordem em que mais ajudam, primeiro para <b>entender</b> as respostas, depois para falar:</p>
  <ol>
    <li><b>Lugar:</b> <span class="fi">Helsingissä</span> (em), <span class="fi">Helsinkiin</span> (para),
      <span class="fi">Helsingistä</span> (de). <a href="#h-paikallissijat">Casos de lugar</a></li>
    <li><b>Ter:</b> <span class="fi">minulla on</span>, <span class="fi">minulla ei ole</span>. <a href="#h-olla">O verbo olla</a></li>
    <li><b>De quem:</b> <span class="fi">minun</span>, <span class="fi">sinun</span>, <span class="fi">Maian</span>. <a href="#h-pronominit">Pronomes</a></li>
    <li><b>Eu no verbo:</b> <span class="fi">haluan</span>, <span class="fi">en ymmärrä</span>. <a href="#h-persoonapaatteet">Pessoas e terminações</a></li>
    <li><b>Pergunta:</b> <span class="fi">Puhutko englantia?</span> A voz não sobe na pergunta finlandesa: a pergunta está no
      <span class="fi pala">-ko</span> ou numa palavra interrogativa. <a href="#h-kysymys">Perguntas</a></li>
  </ol>
</div>

<p>Se a pessoa passar para o inglês e você quiser treinar: <span class="fi">Puhutaan suomea, kiitos.</span>
(Vamos falar finlandês, por favor.) Mais frases prontas: <a href="#h-fraasit">Frases de sobrevivência</a>.</p>`
  },

  {
    // Omistaja 18.10.2026: lyhyt sivu yleisimmistä kirosanoista ja niiden käytöstä.
    id: 'h-kirosanat', kurssissa: [], osio: 'Frases úteis', otsikko: 'Palavrões finlandeses',
    kuvaus: 'Os mais comuns, do mais leve ao mais forte, e como os finlandeses os usam.',
    html: `
<p>Os finlandeses falam palavrão com frequência, mas quase sempre <b>contra coisas e situações</b>: o ônibus que passou, o
dedo martelado, o frio. Xingar <b>uma pessoa</b> é outra coisa: isso já é briga. Na boca de um estrangeiro, o palavrão
soa mais forte (ou mais engraçado) do que você imagina; comece pelos leves.</p>

<h3>Do mais leve ao mais forte</h3>
<table class="taivutus neljannes">
  <tr><th>palavra</th><th>sentido original</th><th>força</th></tr>
  <tr><td><span class="fi">hitsi</span></td><td>(só exclamação)</td><td>bem leve: “poxa”</td></tr>
  <tr><td><span class="fi">hitto</span>, <span class="fi">pahus</span>, <span class="fi">hemmetti</span></td><td>versões suavizadas de “diabo” e “inferno”</td><td>leve: “droga”, “caramba”; pode na frente dos sogros</td></tr>
  <tr><td><span class="fi">paska</span></td><td>merda</td><td>médio</td></tr>
  <tr><td><span class="fi">helvetti</span></td><td>inferno</td><td>médio</td></tr>
  <tr><td><span class="fi">perkele</span></td><td>diabo (antigamente, o deus do trovão)</td><td>médio-forte; o mais famoso fora da Finlândia</td></tr>
  <tr><td><span class="fi">saatana</span></td><td>Satanás</td><td>forte</td></tr>
  <tr><td><span class="fi">jumalauta</span></td><td>“Deus, ajude!”</td><td>forte</td></tr>
  <tr><td><span class="fi">vittu</span></td><td>órgão sexual feminino (vulgar)</td><td>o mais forte: ≈ “porra”, “caralho”</td></tr>
</table>

<h3>Como usar</h3>
<table class="taivutus neljannes">
  <tr><th>frase</th><th>quando</th></tr>
  <tr><td class="s" data-pt="Porra!">Perkele!</td><td>algo deu errado: perdeu o ônibus, bateu o dedo</td></tr>
  <tr><td class="s" data-pt="Puta que pariu!">Voi vittu!</td><td>irritação forte; só entre amigos</td></tr>
  <tr><td class="s" data-pt="Ah, droga!">Voi hitto!</td><td>a versão educada; serve em qualquer lugar</td></tr>
  <tr><td class="s" data-pt="Que diabos?">Mitä helvettiä?</td><td>surpresa ou irritação</td></tr>
  <tr><td class="s" data-pt="Isso é uma merda.">Tämä on paskaa.</td><td>reclamar de uma coisa (não de uma pessoa)</td></tr>
  <tr><td class="s" data-pt="Frio pra caralho!">Vitun kylmä!</td><td>palavrão como “muito” (veja a regra abaixo)</td></tr>
  <tr><td class="s" data-pt="Caro pra caramba!">Helvetin kallis!</td><td>idem, mais leve</td></tr>
  <tr><td class="s" data-pt="Bom pra caramba!">Saatanan hyvä!</td><td>também elogia: o palavrão só reforça</td></tr>
</table>

<div class="saanto">
  <h3>Palavrão + adjetivo = muito</h3>
  <p>O palavrão no genitivo (termina em <span class="fi pala">-n</span>) antes de um adjetivo funciona como “muito”, para o
  bem ou para o mal: <span class="fi">vitun</span>, <span class="fi">helvetin</span>, <span class="fi">saatanan</span>,
  <span class="fi">perkeleen</span>, e os leves <span class="fi">hiton</span> e <span class="fi">hemmetin</span>.</p>
</div>

<p class="huomio">Não use com pessoas: mandar alguém para o inferno (<span class="fi">helvettiin</span>) ou chamar alguém de
<span class="fi">paska</span> é ofensa séria. No trabalho, com crianças e com a família do parceiro, fique nos leves:
<span class="fi">hitto</span>, <span class="fi">pahus</span>, <span class="fi">hemmetti</span>.</p>`
  },

  /* ---------- Termos ---------- */
  {
    id: 'h-termit', kurssissa: [], osio: 'Termos de gramática', otsikko: 'Glossário de gramática', kuvaus: 'Os termos usados no curso, em português e em finlandês.',
    html: `
<p>Professores de finlandês observam que muitos alunos travam nos termos, não no finlandês. Aqui estão os termos do curso, explicados e agrupados.</p>

<h3>Tipos de palavra</h3>
<table class="taivutus neljannes tiivis">
  <tr><th>finlandês</th><th>português</th><th>o que é</th></tr>
  <tr><td><span class="fi">substantiivi</span></td><td>substantivo</td><td>nome de coisa, pessoa, lugar: <span class="fi">talo, Maia</span><span class="kaannos" lang="pt-BR">casa, Maia</span></td></tr>
  <tr><td><span class="fi">adjektiivi</span></td><td>adjetivo</td><td>característica: <span class="fi">hyvä, iso</span><span class="kaannos" lang="pt-BR">bom, grande</span></td></tr>
  <tr><td><span class="fi">verbi</span></td><td>verbo</td><td>ação ou estado: <span class="fi">puhua, olla</span><span class="kaannos" lang="pt-BR">falar, ser/estar</span></td></tr>
  <tr><td><span class="fi">pronomini</span></td><td>pronome</td><td><span class="fi">minä, tämä, kuka</span><span class="kaannos" lang="pt-BR">eu, este, quem</span></td></tr>
  <tr><td><span class="fi">postpositio</span></td><td>posposição</td><td>como preposição, mas depois: <span class="fi">Maian kanssa</span> = com a Maia</td></tr>
  <tr><td><span class="fi">taipumaton sana</span></td><td>palavra fixa</td><td>palavra que não muda de forma: <span class="fi">ja, mutta, kyllä</span><span class="kaannos" lang="pt-BR">e, mas, sim</span></td></tr>
  <tr><td><span class="fi">paikan adverbi</span></td><td>advérbio de lugar</td><td>diz onde está algo: <span class="fi">täällä, tuolla, siellä</span><span class="kaannos" lang="pt-BR">aqui, ali, lá</span></td></tr>
  <tr><td><span class="fi">ilmaus</span></td><td>expressão, frase pronta</td><td>palavras que se aprendem juntas, como uma só: <span class="fi">Mitä kuuluu?</span><span class="kaannos" lang="pt-BR">Como vai?</span></td></tr>
</table>

<h3>As partes de uma palavra</h3>
<table class="taivutus neljannes tiivis">
  <tr><th>finlandês</th><th>português</th><th>o que é</th></tr>
  <tr><td><span class="fi">perusmuoto</span></td><td>forma básica</td><td>a forma do dicionário: <span class="fi">talo, puhua</span><span class="kaannos" lang="pt-BR">casa, falar</span></td></tr>
  <tr><td><span class="fi">infinitiivi</span></td><td>infinitivo</td><td>a forma básica do verbo: <span class="fi">puhua</span> = falar</td></tr>
  <tr><td><span class="fi">vartalo</span></td><td>radical</td><td>a parte que fica e recebe as terminações: <span class="fi">puhua</span> → <span class="fi pala">puhu-</span> → <span class="fi">puhun, puhut, puhumme</span><span class="kaannos" lang="pt-BR">eu falo, você fala, nós falamos</span></td></tr>
  <tr><td><span class="fi">pääte</span></td><td>terminação</td><td>o pedaço colado no fim, que muda o sentido:<br>
    <span class="fi pala">talo + ssa</span> = <span class="fi">talossa</span> (na casa)<br>
    <span class="fi pala">talo + t</span> = <span class="fi">talot</span> (as casas)<br>
    <span class="fi pala">puhu + n</span> = <span class="fi">puhun</span> (eu falo)<br>
    <span class="fi pala">puhut + ko</span> = <span class="fi">puhutko?</span> (você fala?)</td></tr>
  <tr><td><span class="fi">astevaihtelu</span></td><td>consoante que muda (gradação)</td><td>o radical muda um pouco antes de certas terminações: <span class="fi">nukkua → nukun</span> (kk → k), <span class="fi">Helsinki → Helsingissä</span><span class="kaannos" lang="pt-BR">dormir → eu durmo; Helsinque → em Helsinque</span></td></tr>
  <tr><td><span class="fi">vokaalisointu</span></td><td>harmonia vocálica</td><td>a terminação “combina” com as vogais da palavra:<br>
    palavra com <b>a, o, u</b> → terminação com <b>a</b>: <span class="fi">talolla</span> (junto da casa; não <s><span class="fi pala">talollä</span></s>)<br>
    palavra com <b>ä, ö, y</b> → terminação com <b>ä</b>: <span class="fi">pöydällä</span> (na mesa; não <s><span class="fi pala">pöydalla</span></s>)<br>
    palavra só com <b>e, i</b> → também <b>ä</b>: <span class="fi">Helsingissä</span> (em Helsinque)<br>
    Por isso toda terminação tem duas versões: <span class="fi pala">-lla/-llä, -ssa/-ssä, -ko/-kö</span>. <a href="#h-vokaalisointu">Mais</a></td></tr>
</table>

<h3>Formas do substantivo</h3>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th><th>o que é</th></tr>
  <tr><td><span class="fi">sija</span></td><td>caso</td><td>forma do substantivo com função própria, em vez de preposição: <span class="fi">talossa</span> = na casa. <a href="#h-sijat">Os casos</a></td></tr>
  <tr><td><span class="fi">yksikkö, monikko</span></td><td>singular, plural</td><td><span class="fi">talo, talot</span><span class="kaannos" lang="pt-BR">casa, casas</span></td></tr>
</table>

<h3>Formas do verbo</h3>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th><th>exemplo</th></tr>
  <tr><td><span class="fi">preesens</span></td><td>presente</td><td><span class="fi">puhun</span> = eu falo</td></tr>
  <tr><td><span class="fi">imperfekti</span></td><td>pretérito (falei, falava)</td><td><span class="fi">puhuin</span> = eu falei, eu falava</td></tr>
  <tr><td><span class="fi">perfekti</span></td><td>perfeito: “já fiz” (olen + particípio)</td><td><span class="fi">olen puhunut</span> = já falei</td></tr>
  <tr><td><span class="fi">konditionaali</span></td><td>condicional</td><td><span class="fi">puhuisin</span> = eu falaria</td></tr>
  <tr><td><span class="fi">imperatiivi</span></td><td>imperativo</td><td><span class="fi">puhu!</span> = fale!</td></tr>
  <tr><td><span class="fi">passiivi</span></td><td>passivo (impessoal)</td><td><span class="fi">puhutaan</span> = fala-se</td></tr>
  <tr><td><span class="fi">kieltomuoto</span></td><td>forma negativa</td><td><span class="fi">en puhu</span> = eu não falo</td></tr>
</table>

<h3>Partes da frase</h3>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th><th>o que é</th></tr>
  <tr><td><span class="fi">subjekti</span></td><td>sujeito</td><td>quem faz: <span class="fi"><b>Maia</b> puhuu</span><span class="kaannos" lang="pt-BR">a Maia fala</span></td></tr>
  <tr><td><span class="fi">objekti</span></td><td>objeto direto</td><td>o que recebe a ação: <span class="fi">ostan <b>kahvin</b></span><span class="kaannos" lang="pt-BR">compro o café</span></td></tr>
</table>

<h3>Língua escrita e falada</h3>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th><th>exemplo</th></tr>
  <tr><td><span class="fi">kirjakieli</span></td><td>língua padrão (escrita)</td><td><span class="fi">minä olen</span><span class="kaannos" lang="pt-BR">eu sou</span></td></tr>
  <tr><td><span class="fi">puhekieli</span></td><td>língua falada</td><td data-rekisteri="puhe"><span class="fi">mä oon</span><span class="kaannos" lang="pt-BR">eu sou</span></td></tr>
</table>`
  },
  // ==== t06: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  // ==== t07: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  /* t07: verbityypit 4 ja 5 tarkemmin (h-verbityypit on yleiskuva) ja ulkopaikallissijat em/de/para-vertailuineen
     (h-paikallissijat on ruudukko). Linkit vanhoilta sivuilta uusille: koordinaattori (raportti). */
  {
    id: 'h-tyypit45', kurssissa: ['t01', 't03', 't04', 't07'], osio: 'Verbos', otsikko: 'Verbos dos tipos 4 e 5', kuvaus: 'haluta → haluan, tavata → tapaan, tarvita → tarvitsen: o radical e a gradação ao contrário.',
    html: `
<p>Os tipos 4 e 5 terminam em <span class="fi pala">-ta/-tä</span> no infinitivo. O segredo está na letra antes do <span class="fi pala">-ta</span>: no <b>tipo 4</b> é uma vogal qualquer (<span class="fi">haluta, tavata, siivota</span>); no <b>tipo 5</b> é sempre <span class="fi pala">i</span> (<span class="fi">tarvita, valita</span>). Não confunda com o tipo 1, que termina em duas vogais: <span class="fi">ottaa, puhua</span>. Os seis tipos lado a lado: <a href="#h-verbityypit">Os seis tipos de verbo</a>.</p>
<h3>Tipo 4: tire -ta, ponha a vogal</h3>
<table class="taivutus neljannes">
  <tr><th>infinitivo</th><th>radical</th><th>minä</th><th>hän</th></tr>
  <tr><td><span class="fi">haluta</span><span class="kaannos" lang="pt-BR">querer</span></td><td><span class="fi">halua-</span></td><td><span class="fi">haluan</span></td><td><span class="fi">haluaa</span></td></tr>
  <tr><td><span class="fi">tilata</span><span class="kaannos" lang="pt-BR">pedir, encomendar</span></td><td><span class="fi">tilaa-</span></td><td><span class="fi">tilaan</span></td><td><span class="fi">tilaa</span></td></tr>
  <tr><td><span class="fi">siivota</span><span class="kaannos" lang="pt-BR">limpar</span></td><td><span class="fi">siivoa-</span></td><td><span class="fi">siivoan</span></td><td><span class="fi">siivoaa</span></td></tr>
  <tr><td><span class="fi">tavata</span><span class="kaannos" lang="pt-BR">encontrar</span></td><td><span class="fi">tapaa-</span></td><td><span class="fi">tapaan</span></td><td><span class="fi">tapaa</span></td></tr>
  <tr><td><span class="fi">pelätä</span><span class="kaannos" lang="pt-BR">ter medo</span></td><td><span class="fi">pelkää-</span></td><td><span class="fi">pelkään</span></td><td><span class="fi">pelkää</span></td></tr>
</table>
<p><b>Ele, ela:</b> se o radical já termina em vogal longa, nada a mais (<span class="fi">hän tilaa, hän tapaa</span>); senão, a última vogal dobra (<span class="fi">hän haluaa, hän siivoaa</span>). <b>Negativo:</b> o radical sem terminação: <span class="fi">en halua, en tapaa, en siivoa</span>.</p>
<div class="saanto">
  <h3>Gradação ao contrário</h3>
  <p>No tipo 1, o infinitivo tem a consoante forte, e eu, você, nós e vocês têm a fraca: <span class="fi">nukkua → nukun</span>. No tipo 4 (e também nos tipos 3 e 6) é o contrário: o infinitivo é <b>fraco</b> e <b>todas</b> as pessoas são <b>fortes</b>, também <span class="fi">hän</span>, <span class="fi">he</span> e o negativo:</p>
  <ul>
    <li><span class="fi pala">v → p</span>: <span class="fi">tavata → tapaan, en tapaa</span></li>
    <li><span class="fi pala">p → pp</span>: <span class="fi">piipata → piippaan</span></li>
    <li><span class="fi pala">– → k</span> (o k aparece): <span class="fi">pelätä → pelkään</span>, <span class="fi">maata → makaan</span></li>
  </ul>
  <p>No dicionário, faça o caminho de volta: <span class="fi">tapaan</span> → consoante fraca → <span class="fi">tavata</span>. A bolha das palavras faz isso por você.</p>
</div>
<h3>Tipo 5: -ita/-itä, radical em -itse-</h3>
<table class="taivutus neljannes">
  <tr><th>infinitivo</th><th>radical</th><th>minä</th><th>hän</th></tr>
  <tr><td><span class="fi">tarvita</span><span class="kaannos" lang="pt-BR">precisar</span></td><td><span class="fi">tarvitse-</span></td><td><span class="fi">tarvitsen</span></td><td><span class="fi">tarvitsee</span></td></tr>
  <tr><td><span class="fi">valita</span><span class="kaannos" lang="pt-BR">escolher</span></td><td><span class="fi">valitse-</span></td><td><span class="fi">valitsen</span></td><td><span class="fi">valitsee</span></td></tr>
  <tr><td><span class="fi">häiritä</span><span class="kaannos" lang="pt-BR">atrapalhar</span></td><td><span class="fi">häiritse-</span></td><td><span class="fi">häiritsen</span></td><td><span class="fi">häiritsee</span></td></tr>
</table>
<p>O tipo 5 não tem gradação. Negativo: <span class="fi">en tarvitse, et häiritse</span>. Alguns verbos em <span class="fi pala">-ita</span> são do tipo 4 (<span class="fi">selvitä → selviän</span>); a bolha mostra o tipo.</p>
<h3>Tabelas completas</h3>
<div class="taivutustaulu" data-verbi="tavata" data-osat="myonteinen,kielto,kysymys" data-selite="tipo 4 · encontrar · v → p"></div>
<div class="taivutustaulu" data-verbi="siivota" data-osat="myonteinen,kielto,kysymys" data-selite="tipo 4 · limpar"></div>
<div class="taivutustaulu" data-verbi="tarvita" data-osat="myonteinen,kielto,kysymys" data-selite="tipo 5 · precisar"></div>
<div class="huomio">
  <p><b>Armadilhas:</b> <span class="fi">tapaan</span> (eu encontro) × <span class="fi">tapan</span> (eu mato, de <span class="fi">tappaa</span>); <span class="fi">osaan</span> (eu sei fazer) × <span class="fi">ostan</span> (eu compro). O comprimento muda o verbo. E <span class="fi">haluta</span> vem com infinitivo ou com partitivo: <span class="fi">Haluan pelata. Haluan kalaa.</span></p>
</div>
<p>Treino: <a href="#treino-t07-tyyppi4">Verbos do tipo 4</a> · <a href="#treino-t07-tyyppi5">Verbos do tipo 5</a>.</p>`
  },
  {
    id: 'h-ulkosijat', kurssissa: ['t05', 't07', 't10'], osio: 'Substantivos e casos', otsikko: 'Casos externos: -lla, -lta, -lle', kuvaus: 'Em cima, junto, num lugar aberto, com pessoas e com instrumentos, comparados com em, de e para.',
    html: `
<p>A grade dos casos de lugar tem dois lados. Os casos <b>internos</b> dizem “dentro”: <span class="fi">kaupassa, kaupasta, kauppaan</span> (lição 6). Os <b>externos</b> dizem “em cima, junto, num lugar aberto”, e têm mais três usos: <b>pessoas</b>, <b>ter</b> e <b>instrumento</b>. A grade inteira: <a href="#h-paikallissijat">Casos de lugar: em, de, para</a>.</p>
<table class="taivutus neljannes">
  <tr><th>pergunta</th><th>caso</th><th>exemplo</th><th>português</th></tr>
  <tr><td><span class="fi">missä?</span><span class="kaannos" lang="pt-BR">onde?</span></td><td>adessivo <span class="fi pala">-lla/-llä</span></td><td><span class="fi">pöydällä</span></td><td>na mesa, em cima da mesa</td></tr>
  <tr><td><span class="fi">mistä?</span><span class="kaannos" lang="pt-BR">de onde?</span></td><td>ablativo <span class="fi pala">-lta/-ltä</span></td><td><span class="fi">pöydältä</span></td><td>da mesa, de cima da mesa</td></tr>
  <tr><td><span class="fi">mihin?</span><span class="kaannos" lang="pt-BR">para onde?</span></td><td>alativo <span class="fi pala">-lle</span></td><td><span class="fi">pöydälle</span></td><td>para a mesa, para cima da mesa</td></tr>
</table>
<h3>Como formar</h3>
<p>Pegue o genitivo, tire o <span class="fi pala">-n</span> e ponha a terminação. O radical é o do genitivo, com a mesma gradação: <span class="fi">pöytä → pöydän → pöydällä</span>, <span class="fi">kortti → kortin → kortilla</span>, <span class="fi">lounas → lounaan → lounaalla</span>, <span class="fi">äiti → äidin → äidille</span>. A vogal segue a harmonia: <span class="fi">asemalla</span>, mas <span class="fi">pöydällä</span>; o <span class="fi pala">-lle</span> é igual para todos.</p>
<div class="sijataulu" data-sana="asema" data-sijat="nominatiivi,genetiivi,adessiivi,ablatiivi,allatiivi"></div>
<div class="sijataulu" data-sana="pöytä" data-sijat="nominatiivi,genetiivi,adessiivi,ablatiivi,allatiivi"></div>
<h3>em, de, para: dentro ou fora?</h3>
<table class="taivutus neljannes">
  <tr><th>português</th><th>dentro</th><th>fora</th><th>pessoa</th></tr>
  <tr><td>em …</td><td><span class="fi">kaupassa</span><span class="kaannos" lang="pt-BR">na loja</span></td><td><span class="fi">torilla</span><span class="kaannos" lang="pt-BR">na praça</span></td><td><span class="fi">Purjolla on</span><span class="kaannos" lang="pt-BR">a Purjo tem</span></td></tr>
  <tr><td>de …</td><td><span class="fi">kaupasta</span><span class="kaannos" lang="pt-BR">da loja</span></td><td><span class="fi">torilta</span><span class="kaannos" lang="pt-BR">da praça</span></td><td><span class="fi">Purjolta</span><span class="kaannos" lang="pt-BR">da Purjo</span></td></tr>
  <tr><td>para, a …</td><td><span class="fi">kauppaan</span><span class="kaannos" lang="pt-BR">para a loja</span></td><td><span class="fi">torille</span><span class="kaannos" lang="pt-BR">para a praça</span></td><td><span class="fi">Purjolle</span><span class="kaannos" lang="pt-BR">para a Purjo</span></td></tr>
</table>
<h3>Quando usar os externos</h3>
<table class="taivutus neljannes">
  <tr><th>uso</th><th>exemplos</th></tr>
  <tr><td>superfícies</td><td><span class="fi">pöydällä, tarjottimella, lautasella, sohvalla</span><span class="kaannos" lang="pt-BR">na mesa, na bandeja, no prato, no sofá</span></td></tr>
  <tr><td>lugares abertos, estações, praças</td><td><span class="fi">asemalla, torilla, Rautatientorilla</span><span class="kaannos" lang="pt-BR">na estação, na praça, na praça da Estação</span></td></tr>
  <tr><td>algumas cidades finlandesas</td><td><span class="fi">Tampereella, Rovaniemellä, Hyvinkäällä</span><span class="kaannos" lang="pt-BR">em Tampere, em Rovaniemi, em Hyvinkää</span></td></tr>
  <tr><td>situações</td><td><span class="fi">lounaalla, kahvitauolla</span><span class="kaannos" lang="pt-BR">no almoço, na pausa do café</span></td></tr>
  <tr><td>partes do dia</td><td><span class="fi">aamulla, illalla</span><span class="kaannos" lang="pt-BR">de manhã, à noite</span></td></tr>
  <tr><td>pessoas: ter, de quem, para quem</td><td><span class="fi">Hiidellä on auto. Kysyn Ravilta. Soitan äidille.</span><span class="kaannos" lang="pt-BR">O Hiisi tem carro. Pergunto ao Ravi. Ligo para a mãe.</span></td></tr>
  <tr><td>instrumento: com quê?</td><td><span class="fi">Maksan kortilla. Menen töihin metrolla.</span><span class="kaannos" lang="pt-BR">Pago com cartão. Vou para o trabalho de metrô.</span></td></tr>
</table>
<p>Na dúvida, aprenda o lugar junto com o caso, como uma frase: <span class="fi">töissä</span> (no trabalho) e <span class="fi">kokouksessa</span> (na reunião) são “dentro”; <span class="fi">lounaalla</span> (no almoço) e <span class="fi">asemalla</span> (na estação) são “fora”. Companhia não é instrumento: “com o Jay” = <span class="fi">Jayn kanssa</span>.</p>
<div class="huomio">
  <p><b>Armadilha de quem fala português:</b> “para” parece pedir sempre o ilativo (<span class="fi pala">-aan, -oon, -iin…</span>). Num estudo com estudantes italianos de finlandês, o alativo <span class="fi pala">-lle</span> saiu certo só em 30 % das vezes, contra 93 % do inessivo <span class="fi pala">-ssa</span>; no lugar do <span class="fi pala">-lle</span> vinha quase sempre o ilativo. Para pessoas a regra é fixa: <span class="fi">Jaylle</span> (para o Jay), <span class="fi">Jayltä</span> (do Jay), também em “perguntar a alguém”: <span class="fi">kysyä Jayltä</span>.</p>
</div>
<h3>Pronomes</h3>
<table class="taivutus neljannes">
  <tr><th>pronome</th><th>-lla (ter)</th><th>-lta (de)</th><th>-lle (para)</th></tr>
  <tr><td><span class="fi">minä</span><span class="kaannos" lang="pt-BR">eu</span></td><td><span class="fi">minulla</span></td><td><span class="fi">minulta</span></td><td><span class="fi">minulle</span></td></tr>
  <tr><td><span class="fi">sinä</span><span class="kaannos" lang="pt-BR">você</span></td><td><span class="fi">sinulla</span></td><td><span class="fi">sinulta</span></td><td><span class="fi">sinulle</span></td></tr>
  <tr><td><span class="fi">hän</span><span class="kaannos" lang="pt-BR">ele, ela</span></td><td><span class="fi">hänellä</span></td><td><span class="fi">häneltä</span></td><td><span class="fi">hänelle</span></td></tr>
</table>
<p>Todos os pronomes: <a href="#h-pronominit">Pronomes pessoais em todos os casos</a>. Treino: <a href="#treino-t07-ulko">-lla, -lta ou -lle?</a> · <a href="#treino-t07-kuule">Ouça: -lla, -lta ou -lle?</a></p>`
  },
  // ==== t08: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  // ==== t09: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  {
    id: 'h-imperatiivi', kurssissa: ['t00', 't05', 't09', 't14', 't15', 't18'], osio: 'Verbos', otsikko: 'Imperativo: ordens e pedidos', kuvaus: 'Ota! Älä ota! Tulkaa! A ordem para você e para vocês, e a consoante que dobra.',
    html: `
<p>O imperativo é a forma das ordens, dos pedidos e das instruções: <span class="fi">Kuuntele!</span> (ouça!), <span class="fi">Ota pipo!</span> (leve o gorro!). Em finlandês ele não soa grosseiro: entre amigos, em casa e nas instruções é a forma normal. A ordem para “você” (<span class="fi">sinä</span>) vem na lição 9; para “vocês” (<span class="fi">te</span>), na lição 14.</p>
<h3>Para você: a forma do “eu” sem -n</h3>
<table class="taivutus neljannes">
  <tr><th>verbo</th><th>eu</th><th>ordem</th><th>não!</th></tr>
  <tr><td><span class="fi">puhua</span><span class="kaannos" lang="pt-BR">falar · tipo 1</span></td><td><span class="fi">puhun</span></td><td><span class="fi">Puhu!</span></td><td><span class="fi">Älä puhu!</span></td></tr>
  <tr><td><span class="fi">ottaa</span><span class="kaannos" lang="pt-BR">pegar, levar · tipo 1</span></td><td><span class="fi">otan</span></td><td><span class="fi">Ota!</span></td><td><span class="fi">Älä ota!</span></td></tr>
  <tr><td><span class="fi">syödä</span><span class="kaannos" lang="pt-BR">comer · tipo 2</span></td><td><span class="fi">syön</span></td><td><span class="fi"><span data-l="syödä:imper.2s">Syö</span>!</span></td><td><span class="fi">Älä syö!</span></td></tr>
  <tr><td><span class="fi">tulla</span><span class="kaannos" lang="pt-BR">vir · tipo 3</span></td><td><span class="fi">tulen</span></td><td><span class="fi">Tule!</span></td><td><span class="fi">Älä tule!</span></td></tr>
  <tr><td><span class="fi">pakata</span><span class="kaannos" lang="pt-BR">fazer a mala · tipo 4</span></td><td><span class="fi">pakkaan</span></td><td><span class="fi"><span data-l="pakata:imper.2s">Pakkaa</span>!</span></td><td><span class="fi">Älä pakkaa!</span></td></tr>
  <tr><td><span class="fi">valita</span><span class="kaannos" lang="pt-BR">escolher · tipo 5</span></td><td><span class="fi">valitsen</span></td><td><span class="fi">Valitse!</span></td><td><span class="fi">Älä valitse!</span></td></tr>
  <tr><td><span class="fi">vanheta</span><span class="kaannos" lang="pt-BR">envelhecer · tipo 6</span></td><td><span class="fi">vanhenen</span></td><td><span class="fi">Vanhene!</span></td><td><span class="fi">Älä vanhene!</span></td></tr>
  <tr><td><span class="fi">olla</span><span class="kaannos" lang="pt-BR">ser, estar</span></td><td><span class="fi">olen</span></td><td><span class="fi">Ole!</span></td><td><span class="fi">Älä ole!</span></td></tr>
  <tr><td><span class="fi">tehdä</span><span class="kaannos" lang="pt-BR">fazer</span></td><td><span class="fi">teen</span></td><td><span class="fi"><span data-l="tehdä:imper.2s">Tee</span>!</span></td><td><span class="fi">Älä tee!</span></td></tr>
</table>
<p>Todos os seis tipos seguem a mesma regra. Cuidado com o tipo 2 e o tipo 4: <span class="fi"><span data-l="syödä:imper.2s">syö</span></span> é “coma!” e também “ele come”, <span class="fi"><span data-l="pakata:imper.2s">pakkaa</span></span> é “faça a mala!” e também “ele faz a mala”. Quem decide é a frase.</p>
<h3>Não!: älä + a forma negativa</h3>
<p><span class="fi">Älä</span> é o verbo de negação das ordens, como <span class="fi">en, et, ei</span> nas afirmações. Depois dele vem a forma negativa, a mesma de <span class="fi">en ota</span>: <span class="fi">Älä ota!</span> O erro de quem fala português: “não leve” = <span class="fi pala">ei ota</span>. Mas <span class="fi">ei</span> é “ele, ela não”. Na ordem, sempre <span class="fi">älä</span>.</p>
<h3>O que vem depois da ordem</h3>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th><th>por quê</th></tr>
  <tr><td><span class="fi">Ota pipo!</span></td><td>leve o gorro!</td><td>uma coisa inteira: forma básica, sem -n</td></tr>
  <tr><td><span class="fi">Ota aurinkolasit!</span></td><td>leve os óculos de sol!</td><td>várias coisas: plural -t (lição 9)</td></tr>
  <tr><td><span class="fi">Ota kahvia!</span></td><td>pegue café!</td><td>uma parte, uma quantidade: partitivo (lição 3)</td></tr>
  <tr><td><span class="fi">Älä ota pipoa!</span></td><td>não leve o gorro!</td><td>negação: sempre partitivo</td></tr>
</table>
<p>Fora das ordens, a coisa inteira ganha <span class="fi pala">-n</span>: <span class="fi">Otan pipon.</span> (eu levo o gorro). Isso é o objeto, assunto da lição 12.</p>
<h3>Para vocês: -kaa, -kää (lição 14)</h3>
<p>Para duas ou mais pessoas, e também para uma pessoa que você trata por <span class="fi">te</span> (o senhor, a senhora: no balcão, no aeroporto), a ordem termina em <span class="fi pala">-kaa/-kää</span>. A base não é a forma do “eu”, e sim o <b>infinitivo</b>: tire o fim do infinitivo e ponha <span class="fi pala">-kaa/-kää</span>.</p>
<table class="taivutus neljannes">
  <tr><th>tipo</th><th>infinitivo</th><th>tire</th><th>para vocês</th></tr>
  <tr><td>1</td><td><span class="fi">puhua, odottaa</span><span class="kaannos" lang="pt-BR">falar, esperar</span></td><td>o último <span class="fi pala">-a/-ä</span></td><td><span class="fi">Puhukaa! Odottakaa!</span></td></tr>
  <tr><td>2</td><td><span class="fi">syödä, juoda</span><span class="kaannos" lang="pt-BR">comer, beber</span></td><td><span class="fi pala">-da/-dä</span></td><td><span class="fi">Syökää! Juokaa!</span></td></tr>
  <tr><td>2 (<span class="fi pala">-hdä</span>)</td><td><span class="fi">tehdä, nähdä</span><span class="kaannos" lang="pt-BR">fazer, ver</span></td><td><span class="fi pala">-dä</span></td><td><span class="fi">Tehkää! Nähkää!</span></td></tr>
  <tr><td>3</td><td><span class="fi">tulla, mennä, juosta</span><span class="kaannos" lang="pt-BR">vir, ir, correr</span></td><td>as duas últimas letras</td><td><span class="fi">Tulkaa! Menkää! Juoskaa!</span></td></tr>
  <tr><td>3</td><td><span class="fi">kuunnella</span><span class="kaannos" lang="pt-BR">escutar</span></td><td><span class="fi pala">-la</span></td><td><span class="fi">Kuunnelkaa!</span></td></tr>
  <tr><td>4 e 5</td><td><span class="fi">pakata, valita</span><span class="kaannos" lang="pt-BR">fazer a mala, escolher</span></td><td>o último <span class="fi pala">-a</span></td><td><span class="fi">Pakatkaa! Valitkaa!</span></td></tr>
</table>
<p>Como a base é o infinitivo, a consoante fica como nele: <span class="fi">odottaa → Odottakaa!</span> (forte), mas <span class="fi">Odota!</span> (fraca) para uma pessoa; <span class="fi">kuunnella → Kuunnelkaa!</span>, mas <span class="fi">Kuuntele!</span>. Depois de <span class="fi pala">-kaa</span> a consoante seguinte não dobra: <span class="fi">Tulkaa tänne!</span></p>
<h3>Vocês, não!: älkää + -ko/-kö</h3>
<p><span class="fi">Älkää</span> é o <span class="fi">älä</span> para vocês. Depois dele vem a mesma base com <span class="fi pala">-ko/-kö</span>. Truque: pegue a ordem e troque <span class="fi pala">-kaa</span> por <span class="fi pala">-ko</span>, <span class="fi pala">-kää</span> por <span class="fi pala">-kö</span>.</p>
<table class="taivutus neljannes">
  <tr><th>para você</th><th>para vocês</th><th>vocês, não!</th></tr>
  <tr><td><span class="fi">Puhu!</span><span class="kaannos" lang="pt-BR">fale!</span></td><td><span class="fi">Puhukaa!</span></td><td><span class="fi">Älkää puhuko!</span></td></tr>
  <tr><td><span class="fi">Ota!</span><span class="kaannos" lang="pt-BR">pegue!</span></td><td><span class="fi">Ottakaa!</span></td><td><span class="fi">Älkää ottako!</span></td></tr>
  <tr><td><span class="fi">Tule!</span><span class="kaannos" lang="pt-BR">venha!</span></td><td><span class="fi">Tulkaa!</span></td><td><span class="fi">Älkää tulko!</span></td></tr>
  <tr><td><span class="fi">Mene!</span><span class="kaannos" lang="pt-BR">vá!</span></td><td><span class="fi">Menkää!</span></td><td><span class="fi">Älkää menkö!</span></td></tr>
  <tr><td><span class="fi">Juokse!</span><span class="kaannos" lang="pt-BR">corra!</span></td><td><span class="fi">Juoskaa!</span></td><td><span class="fi">Älkää juosko!</span></td></tr>
</table>
<div class="huomio">
  <p><b>Armadilha:</b> não confunda a ordem com a afirmação. <span class="fi">Te tulette.</span> = vocês vêm; <span class="fi">Tulkaa!</span> = venham! <span class="fi">Te ette juokse.</span> = vocês não correm; <span class="fi">Älkää juosko!</span> = não corram! A forma educada também serve para um cliente: <span class="fi">Odottakaa hetki!</span> = espere um momento, por favor.</p>
</div>
<h3>Na emergência (lição 18)</h3>
<p>Numa emergência, a ordem é curta e vem primeiro: <span class="fi">Apua!</span> (socorro!), <span class="fi">Auta!</span> (me ajude!), <span class="fi">Älä liiku!</span> (não se mexa!), <span class="fi">Odota!</span> (espere!), <span class="fi">Juokse!</span> (corra!). Para o grupo: <span class="fi">Juoskaa!</span>, <span class="fi">Älkää liikkuko!</span> O momento se combina com <span class="fi">kun</span> (quando): <span class="fi">Kun minä sanon ”nyt”, juokse!</span> (quando eu disser “agora”, corra!). O “quando eu disser” do português, no futuro, é presente em finlandês: <span class="fi">kun minä sanon</span>.</p>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th><th>por quê</th></tr>
  <tr><td><span class="fi">Älä liiku!</span></td><td>não se mexa!</td><td><span class="fi">liikkua</span> já é “mexer-se”: sem “se”</td></tr>
  <tr><td><span class="fi">Ole hiljaa!</span></td><td>fique quieto!</td><td><span class="fi">olla</span> + <span class="fi">hiljaa</span> (em silêncio)</td></tr>
  <tr><td><span class="fi"><span data-l="levätä:imper.2s">Lepää</span>!</span></td><td>descanse!</td><td>tipo 4: a mesma forma de “ele descansa”; a frase decide</td></tr>
  <tr><td><span class="fi">Soita yksi yksi kaksi!</span></td><td>ligue para o 112!</td><td>o número de emergência da Finlândia</td></tr>
</table>
<h3>Pronúncia: a consoante que dobra</h3>
<p>Depois da ordem para “você”, a primeira consoante da palavra seguinte sai <b>dobrada</b>, mas não se escreve: <span class="fi">Tule tänne!</span> soa <span class="fi pala">tulet tänne</span>, <span class="fi">Ota pipo!</span> soa <span class="fi pala">otap pipo</span>, <span class="fi">Ole hyvä!</span> soa <span class="fi pala">oleh hyvä</span>. Antes de vogal, ouve-se uma paradinha: <span class="fi">Ota aurinkolasit!</span> O mesmo acontece depois da forma negativa (<span class="fi">En tule kotiin.</span> soa <span class="fi pala">en tulek kotiin</span>) e depois de muitas palavras terminadas em <span class="fi pala">-e</span>, como <span class="fi">kolme</span> e <span class="fi">huone</span>.</p>
<p>A forma de “ele” não dobra nada, porque termina em vogal longa. Por isso a ordem e a afirmação soam diferentes:</p>
<ul class="esim">
  <li class="s" data-pt="Jay, venha cá! (soa: tulet tänne)">Jay, tule tänne!</li>
  <li class="s" data-pt="O Jay vem para cá.">Jay tulee tänne.</li>
</ul>
<h3>Mais educado</h3>
<p>Para suavizar uma ordem: <span class="fi">vain</span> (<span class="fi">Ota vain!</span> = pode pegar, fique à vontade), <span class="fi">nyt</span>, o nome da pessoa (<span class="fi">Jay, tule tänne!</span>) ou um pedido com a forma “…ria”: <span class="fi">Voisitko auttaa?</span> (você poderia ajudar?). Essa forma é frase pronta por enquanto; a explicação vem na lição 15.</p>`
  },
  // ==== t10: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  {
    id: 'h-taytyy', kurssissa: ['t10'], osio: 'Verbos', otsikko: 'Preciso: täytyy, pitää, on pakko', kuvaus: 'Minun täytyy lähteä. Quem precisa vai no genitivo, e o verbo seguinte fica no infinitivo.',
    html: `
<p>O finlandês não diz “eu preciso” com o sujeito comum. Diz <span class="fi">Minun täytyy lähteä</span>, palavra por palavra “de mim é preciso partir”. A frase tem sempre três peças, nesta ordem:</p>
<table class="taivutus neljannes">
  <tr><th>peça</th><th>exemplo</th><th>regra</th></tr>
  <tr><td>quem precisa</td><td><span class="fi">minun, Maian, äidin</span></td><td>genitivo <span class="fi pala">-n</span> (lição 5)</td></tr>
  <tr><td>“é preciso”</td><td><span class="fi">täytyy</span></td><td>não muda nunca: a mesma forma para todas as pessoas</td></tr>
  <tr><td>o que fazer</td><td><span class="fi">lähteä, juosta, nukkua</span></td><td>infinitivo, a forma do dicionário</td></tr>
</table>
<h3>Todas as pessoas</h3>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Minun täytyy lähteä.</span></td><td>Eu preciso ir embora.</td></tr>
  <tr><td><span class="fi">Sinun täytyy nukkua.</span></td><td>Você precisa dormir.</td></tr>
  <tr><td><span class="fi">Hänen täytyy juosta.</span></td><td>Ele, ela precisa correr.</td></tr>
  <tr><td><span class="fi">Meidän täytyy odottaa.</span></td><td>Nós precisamos esperar.</td></tr>
  <tr><td><span class="fi">Teidän täytyy maksaa.</span></td><td>Vocês precisam pagar (ou: o senhor, a senhora precisa pagar).</td></tr>
  <tr><td><span class="fi">Heidän täytyy soittaa.</span></td><td>Eles, elas precisam ligar.</td></tr>
  <tr><td><span class="fi">Maian täytyy juosta.</span></td><td>A Maia precisa correr.</td></tr>
  <tr><td><span class="fi">Äidin täytyy odottaa.</span></td><td>A mãe precisa esperar.</td></tr>
</table>
<h3>Negativo e pergunta</h3>
<ul class="esim">
  <li class="s" data-pt="Você não precisa correr.">Sinun ei tarvitse juosta.</li>
  <li class="s" data-pt="A gente precisa correr? – Precisa.">Täytyykö meidän juosta? – Täytyy.</li>
</ul>
<p>“Não precisa” se diz com o verbo <span class="fi">tarvita</span> (precisar): <span class="fi">ei tarvitse</span>, com o mesmo genitivo. A forma <span class="fi">ei täydy</span> existe, mas é rara. A resposta curta repete o verbo, como sempre: <span class="fi">Täytyy.</span></p>
<h3>pitää: o mesmo, mais falado</h3>
<p>Genitivo + <span class="fi" data-l="pitää#3">pitää</span> + infinitivo = genitivo + <span class="fi">täytyy</span> + infinitivo. Na fala do dia a dia, <span class="fi" data-l="pitää#3">pitää</span> é até mais comum. Mas com o sujeito comum (<span class="fi">minä</span>), <span class="fi">pitää</span> é <b>gostar</b>, e a coisa vai para o elativo <span class="fi pala">-sta</span>:</p>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Minun <span data-l="pitää#3">pitää</span> lähteä.</span></td><td>Eu preciso ir embora.</td></tr>
  <tr><td><span class="fi">Minä pidän kahvista.</span></td><td>Eu gosto de café.</td></tr>
</table>
<h3>on pakko: não há escolha</h3>
<p><span class="fi">Minun on pakko…</span> (é obrigatório para mim) é o mais forte. No negativo, <span class="fi">ei ole pakko</span> = não é obrigatório, não precisa:</p>
<ul class="esim">
  <li class="s" data-pt="A gente tem que correr!">Meidän on pakko juosta!</li>
  <li class="s" data-pt="Você não é obrigado a vir.">Sinun ei ole pakko tulla.</li>
</ul>
<h3>Para reconhecer: passado e condicional</h3>
<p>O passado é <span class="fi">Minun täytyi lähteä.</span> (eu precisei ir embora; o passado vem na lição 13). Com o condicional, <span class="fi" data-l="pitää#3">pitää</span> vira “deveria”: <span class="fi">Minun <span data-l="pitää#3">pitäisi</span> lähteä.</span> (eu deveria ir embora; o condicional vem na lição 15).</p>
<div class="huomio">
  <p><b>Armadilha do brasileiro:</b> “eu preciso” puxa <span class="pala">minä täytyy</span>, com o sujeito do português. Em finlandês, quem precisa vai no genitivo: <span class="fi">minun täytyy</span>. E o segundo verbo não conjuga: <span class="fi">Minun täytyy lähteä</span>, nunca <span class="pala">minun täytyy lähden</span>.</p>
</div>
<p><b>Treino:</b> <a href="#treino-t10-taytyy">Preciso: minun täytyy…</a> · na lição: <a href="#t10-b">lição 10, parte B</a>.</p>`
  },
  // Konjunktiot (omistaja 21.10.2026: Gramática-sivu ja Treino-paketit konjunktiovaltaisille oppitunneille 12, 16 ja 20).
  {
    id: 'h-konjunktiot', kurssissa: ['t12', 't16', 't20'], osio: 'Frases úteis', otsikko: 'Conjunções: ja, mutta, että, koska, kun…', kuvaus: 'As palavras que ligam frases: e, mas, que, porque, quando, se, mesmo que, então. A ordem das palavras não muda depois delas.',
    html: `
<p>A conjunção liga duas frases. Em finlandês ela é fácil: <b>não muda de forma</b>, e a frase depois dela tem <b>a ordem normal</b> das palavras: <span class="fi">Jay nukkuu.</span> → <span class="fi">Tiedän, että Jay nukkuu.</span> A vírgula vem antes de quase todas; só <span class="fi">ja</span> e <span class="fi">tai</span> ficam sem vírgula.</p>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th><th>exemplo</th><th>desde</th></tr>
  <tr><td><span class="fi">ja</span></td><td>e</td><td><span class="fi">Maia ja Jay</span></td><td>lição 1</td></tr>
  <tr><td><span class="fi">mutta</span></td><td>mas</td><td><span class="fi">Juhla on lopussa, mutta Walker soittaa yhä.</span></td><td>lição 4</td></tr>
  <tr><td><span class="fi">tai</span></td><td>ou</td><td><span class="fi">Uin meressä tai järvessä.</span></td><td>lição 5</td></tr>
  <tr><td><span class="fi">koska</span></td><td>porque</td><td><span class="fi">Ostan paidan, koska se on halpa.</span></td><td>lição 6</td></tr>
  <tr><td><span class="fi">että</span></td><td>que</td><td><span class="fi">Tiedän, että Maia rakastaa keramiikkaa.</span></td><td>lição 7</td></tr>
  <tr><td><span class="fi">kun</span></td><td>quando</td><td><span class="fi">Tulen iloiseksi, kun aurinko paistaa.</span></td><td>lição 10</td></tr>
  <tr><td><span class="fi">vaikka</span></td><td>mesmo que, embora</td><td><span class="fi">Pane takki päälle, vaikka on kuuma!</span></td><td>lição 12</td></tr>
  <tr><td><span class="fi">siksi</span></td><td>por isso</td><td><span class="fi">Se on paras paita, siksi otan sen.</span></td><td>lição 12</td></tr>
  <tr><td><span class="fi">kuten</span></td><td>como (por exemplo)</td><td><span class="fi">Vaatteet, kuten paidat ja shortsit, ovat halpoja.</span></td><td>lição 12</td></tr>
  <tr><td><span class="fi">vaan</span></td><td>e sim, mas sim</td><td><span class="fi">En ole väsynyt, vaan iloinen!</span></td><td>lição 16</td></tr>
  <tr><td><span class="fi">jos</span></td><td>se</td><td><span class="fi">Mene ulos, jos sinulla on kuuma.</span></td><td>lição 4 (frase pronta); lição 20</td></tr>
  <tr><td><span class="fi">joten</span></td><td>então, portanto</td><td><span class="fi">Sataa, joten emme ui.</span></td><td>lição 20</td></tr>
</table>
<h3>mutta ou vaan?</h3>
<p>As duas são “mas”. <span class="fi">vaan</span> só vem <b>depois de uma negação</b> e troca uma coisa por outra (“não isso, e sim aquilo”). <span class="fi">mutta</span> junta duas coisas verdadeiras:</p>
<ul class="esim">
  <li class="s" data-pt="Não estou cansado, e sim feliz!">En ole väsynyt, vaan iloinen!</li>
  <li class="s" data-pt="Estou cansado, mas feliz.">Olen väsynyt, mutta iloinen.</li>
</ul>
<h3>kun ou jos?</h3>
<p><span class="fi">kun</span> = quando: a coisa acontece. <span class="fi">jos</span> = se: talvez aconteça, talvez não. <span class="fi">Kun tulet, juodaan kahvia.</span> (quando você vier, sabemos que vem) × <span class="fi">Jos tulet, juodaan kahvia.</span> (se você vier). A frase com <span class="fi">jos</span> e o condicional (“se eu tivesse…”) vem na lição 20.</p>
<h3>koska ou siksi?</h3>
<p>As duas falam de causa, mas em direções opostas. <span class="fi">koska</span> (porque) vem antes da causa; <span class="fi">siksi</span> (por isso) vem antes do resultado, e o verbo vem logo depois dele:</p>
<ul class="esim">
  <li class="s" data-pt="Durmo, porque estou cansado.">Nukun, koska olen väsynyt.</li>
  <li class="s" data-pt="Estou cansado, por isso durmo.">Olen väsynyt, siksi nukun.</li>
</ul>
<div class="huomio">
  <p><b>Armadilha do brasileiro:</b> o “que” do português tem duas traduções. Depois de dizer, pensar, saber: <span class="fi">että</span> (<span class="fi">Tiedän, että…</span>). Na comparação: <span class="fi">kuin</span> (<span class="fi">halvempi kuin</span>, lição 11). E o “ou” de uma pergunta é <span class="fi">vai</span>: <span class="fi">Kahvia vai teetä?</span>; <span class="fi">tai</span> fica para as afirmações.</p>
</div>
<p><b>Treino:</b> <a href="#treino-t12-konjunktiot">lição 12: mutta, siksi, vaikka</a> · <a href="#treino-t16-konjunktiot">lição 16: kun, koska, vaan</a> · <a href="#treino-t20-konjunktiot">lição 20: joten, jos, tai</a> · na lição: <a href="#t12">lição 12</a>, <a href="#t16">lição 16</a>, <a href="#t20">lição 20</a>.</p>`
  },
  // ==== k02: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  // ==== t11: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  {
    id: 'h-vertailu', kurssissa: ['t11'], osio: 'Como a palavra muda', otsikko: 'Comparar: -mpi, -in e kuin', kuvaus: 'halpa → halvempi → halvin, hyvä → parempi → paras: mais barato que, tão caro quanto, o melhor do mundo.',
    html: `
<p>Em português, “mais barato” e “o mais barato” se dizem com palavras a mais. Em finlandês, a própria palavra muda: o <b>comparativo</b> (mais …) termina em <span class="fi pala">-mpi</span>, e o <b>superlativo</b> (o mais …) termina em <span class="fi pala">-in</span>.</p>
<table class="taivutus neljannes">
  <tr><th>forma básica</th><th>comparativo</th><th>superlativo</th><th>português</th></tr>
  <tr><td><span class="fi">halpa</span></td><td><span class="fi">halvempi</span></td><td><span class="fi">halvin</span></td><td>barato, mais barato, o mais barato</td></tr>
  <tr><td><span class="fi">kallis</span></td><td><span class="fi">kalliimpi</span></td><td><span class="fi">kallein</span></td><td>caro, mais caro, o mais caro</td></tr>
  <tr><td><span class="fi">iso</span></td><td><span class="fi">isompi</span></td><td><span class="fi">isoin</span></td><td>grande, maior, o maior</td></tr>
  <tr><td><span class="fi">pieni</span></td><td><span class="fi">pienempi</span></td><td><span class="fi">pienin</span></td><td>pequeno, menor, o menor</td></tr>
  <tr><td><span class="fi">hyvä</span></td><td><span class="fi">parempi</span></td><td><span class="fi">paras</span></td><td>bom, melhor, o melhor</td></tr>
  <tr><td><span class="fi">huono</span></td><td><span class="fi">huonompi</span></td><td><span class="fi">huonoin</span></td><td>ruim, pior, o pior</td></tr>
  <tr><td><span class="fi">vanha</span></td><td><span class="fi">vanhempi</span></td><td><span class="fi">vanhin</span></td><td>velho, mais velho, o mais velho</td></tr>
  <tr><td><span class="fi">uusi</span></td><td><span class="fi">uudempi</span></td><td><span class="fi">uusin</span></td><td>novo, mais novo, o mais novo</td></tr>
  <tr><td><span class="fi">kaunis</span></td><td><span class="fi">kauniimpi</span></td><td><span class="fi">kaunein</span></td><td>bonito, mais bonito, o mais bonito</td></tr>
  <tr><td><span class="fi">kylmä</span></td><td><span class="fi">kylmempi</span></td><td><span class="fi">kylmin</span></td><td>frio, mais frio, o mais frio</td></tr>
</table>
<h3>O comparativo -mpi</h3>
<p>Comece pelo genitivo (lição 5) e troque o <span class="fi pala">-n</span> por <span class="fi pala">-mpi</span>: <span class="fi">ison → isompi</span>, <span class="fi">uuden → uudempi</span>, <span class="fi">kalliin → kalliimpi</span>, <span class="fi">tulisen → tulisempi</span>. Em palavras de <b>duas sílabas</b> que terminam em <span class="fi pala">-a</span> ou <span class="fi pala">-ä</span>, esse <span class="fi pala">a/ä</span> vira <span class="fi pala">e</span>: <span class="fi">halvan → halvempi</span>, <span class="fi">vanhan → vanhempi</span>, <span class="fi">kylmän → kylmempi</span>. A consoante que muda fica fraca, como no genitivo: <span class="fi">halpa → halvan → halvempi</span>.</p>
<h3>O superlativo -in</h3>
<p>O superlativo usa o mesmo radical com <span class="fi pala">-in</span>, e a vogal final cai ou muda: <span class="fi">halpa → halvin</span>, <span class="fi">vanha → vanhin</span>, <span class="fi">iso → isoin</span>, <span class="fi">kallis → kallein</span>, <span class="fi">uusi → uusin</span>. Não precisa decorar a regra da vogal: a bolha de cada adjetivo mostra o comparativo e o superlativo. O irregular mais usado é <span class="fi">hyvä → parempi → paras</span>.</p>
<h3>kuin, yhtä … kuin, kumpi, kaikkein</h3>
<ul class="esim">
  <li class="s" data-pt="O queijo é mais caro que o café.">Juusto on kalliimpi kuin kahvi.</li>
  <li class="s" data-pt="A linguiça é tão cara quanto o café.">Makkara on yhtä kallis kuin kahvi.</li>
  <li class="s" data-pt="Qual é melhor, este ou aquele?">Kumpi on parempi, tämä vai tuo?</li>
  <li class="s" data-pt="A banana é a mais barata de todas.">Banaani on kaikkein halvin.</li>
  <li class="s" data-pt="A banana do Brasil é a melhor do mundo.">Brasilian banaani on maailman paras.</li>
</ul>
<p><span class="fi">kuin</span> = do que; a segunda coisa fica na <b>mesma forma</b> que a primeira: <span class="fi">Täällä banaani on halvempi kuin Suomessa.</span> (aqui a banana é mais barata do que na Finlândia). <span class="fi">yhtä … kuin</span> = tão … quanto, com a forma básica. <span class="fi">kumpi?</span> escolhe entre <b>dois</b>; entre muitos, <span class="fi">mikä?</span>. <span class="fi">kaikkein</span> (de todos) reforça o superlativo, e o genitivo antes dele diz “de onde”: <span class="fi">maailman paras</span>, <span class="fi">Brasilian paras</span>.</p>
<h3>Para reconhecer: o comparativo também muda de caso</h3>
<p>O comparativo e o superlativo são adjetivos e recebem os casos como qualquer outro. O <span class="fi pala">-mpi</span> vira <span class="fi pala">-mma-</span> ou <span class="fi pala">-mpa-</span>: <span class="fi pala">halvempaa juustoa</span> (queijo mais barato, partitivo), <span class="fi pala">halvemmassa kaupassa</span> (na loja mais barata). <span class="fi">paras</span> tem as suas formas na bolha: <span class="fi">parasta kahvia</span> (o melhor café). O curso usa sobretudo a forma básica.</p>
<div class="huomio">
  <p><b>Armadilha do brasileiro:</b> “mais barato” não é <span class="pala">enemmän halpa</span>, palavra por palavra: é <span class="fi">halvempi</span>. “Melhor” é <span class="fi">parempi</span>, nunca <span class="pala">hyvempi</span>. E “do que” é <span class="fi">kuin</span>, não <span class="pala">kun</span> (quando).</p>
</div>
<p><b>Treino:</b> <a href="#treino-t11-komparatiivi">Mais barato: o comparativo</a> · <a href="#treino-t11-superlatiivi">O mais barato: o superlativo</a> · <a href="#treino-t11-kuin">Ouça a comparação</a> · na lição: <a href="#t11">lição 11, parte A</a>.</p>`
  },
  // ==== t12: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  {
    id: 'h-objekti', kurssissa: ['t03', 't09', 't12'], osio: 'Substantivos e casos', otsikko: 'O objeto: inteiro ou parte?', kuvaus: 'Ostan paidan, ostan paitaa, en osta paitaa: quando o objeto ganha -n, -t ou o partitivo.',
    html: `
<p>O <b>objeto</b> é a coisa (ou a pessoa) que recebe a ação do verbo: “eu compro <b>a camisa</b>”. Em português ele não muda de forma. Em finlandês ele tem três formas, e a escolha diz <b>quanto</b> da coisa a ação pega: a coisa inteira ou só uma parte, e se a ação termina ou continua.</p>
<h3>As três formas</h3>
<table class="taivutus neljannes">
  <tr><th>forma</th><th>exemplo</th><th>quando</th></tr>
  <tr><td><span class="fi pala">-n</span> (singular)</td><td><span class="fi">Ostan paidan.</span><span class="kaannos" lang="pt-BR">Compro a camisa.</span></td><td>uma coisa inteira; a ação termina</td></tr>
  <tr><td><span class="fi pala">-t</span> (plural)</td><td><span class="fi">Ostan paidat.</span><span class="kaannos" lang="pt-BR">Compro as camisas.</span></td><td>várias coisas inteiras, todas aquelas</td></tr>
  <tr><td>partitivo</td><td><span class="fi">Ostan kahvia. Ostan paitoja.</span><span class="kaannos" lang="pt-BR">Compro café. Compro (umas) camisas.</span></td><td>uma parte, uma quantidade, coisas em geral</td></tr>
  <tr><td>partitivo</td><td><span class="fi">Sovitan paitaa.</span><span class="kaannos" lang="pt-BR">Estou experimentando a camisa.</span></td><td>a ação está em andamento, não termina</td></tr>
  <tr><td>partitivo</td><td><span class="fi">En osta paitaa.</span><span class="kaannos" lang="pt-BR">Não compro a camisa.</span></td><td>negação: sempre</td></tr>
  <tr><td>partitivo singular</td><td><span class="fi">Ostan kaksi paitaa.</span><span class="kaannos" lang="pt-BR">Compro duas camisas.</span></td><td>depois de número (lição 3)</td></tr>
</table>
<p>O <span class="fi pala">-n</span> do objeto tem a mesma forma do genitivo (<span class="fi">paidan</span>), e o <span class="fi pala">-t</span> a mesma forma do plural do sujeito (<span class="fi">paidat</span>). Por isso a bolha das palavras mostra “genitivo” e “plural”: a forma é a mesma, a função na frase é outra.</p>
<h3>Como escolher: três perguntas</h3>
<ol>
  <li><b>A frase é negativa</b> (<span class="fi">en, et, ei</span>…)? Então partitivo, sempre: <span class="fi">En osta paitaa.</span></li>
  <li><b>É uma parte, uma quantidade, algo em geral, ou a ação ainda está acontecendo?</b> Partitivo: <span class="fi">Juon kahvia. Myymme tauluja. Luen kirjaa.</span></li>
  <li><b>Nenhuma das duas?</b> A coisa é inteira e a ação termina: uma coisa, <span class="fi pala">-n</span>; várias, <span class="fi pala">-t</span>: <span class="fi">Luen kirjan. Ostan kengät.</span></li>
</ol>
<h3>A mesma frase, dois sentidos</h3>
<table class="taivutus neljannes">
  <tr><th>inteiro, termina</th><th>parte, em andamento</th></tr>
  <tr><td><span class="fi">Syön kakun.</span><span class="kaannos" lang="pt-BR">Como o bolo (inteiro).</span></td><td><span class="fi">Syön kakkua.</span><span class="kaannos" lang="pt-BR">Como (um pedaço de) bolo.</span></td></tr>
  <tr><td><span class="fi">Luen kirjan.</span><span class="kaannos" lang="pt-BR">Leio o livro (até o fim).</span></td><td><span class="fi">Luen kirjaa.</span><span class="kaannos" lang="pt-BR">Estou lendo o livro.</span></td></tr>
  <tr><td><span class="fi">Ostan juuston.</span><span class="kaannos" lang="pt-BR">Compro o queijo (um inteiro).</span></td><td><span class="fi">Ostan juustoa.</span><span class="kaannos" lang="pt-BR">Compro (um pouco de) queijo.</span></td></tr>
</table>
<h3>Verbos que quase sempre pedem partitivo</h3>
<p>Estes verbos falam de uma ação que não “pega” a coisa inteira. O objeto deles fica no partitivo, também quando a coisa é uma só:</p>
<table class="taivutus neljannes">
  <tr><th>verbo</th><th>exemplo</th></tr>
  <tr><td><span class="fi">katsoa</span><span class="kaannos" lang="pt-BR">olhar</span></td><td><span class="fi">Katson taulua.</span><span class="kaannos" lang="pt-BR">Olho o quadro.</span></td></tr>
  <tr><td><span class="fi">etsiä</span><span class="kaannos" lang="pt-BR">procurar</span></td><td><span class="fi">Etsin lippistä.</span><span class="kaannos" lang="pt-BR">Procuro um boné.</span></td></tr>
  <tr><td><span class="fi">rakastaa</span><span class="kaannos" lang="pt-BR">amar</span></td><td><span class="fi">Rakastan sinua.</span><span class="kaannos" lang="pt-BR">Eu te amo.</span></td></tr>
  <tr><td><span class="fi">odottaa</span><span class="kaannos" lang="pt-BR">esperar</span></td><td><span class="fi">Odotan bussia.</span><span class="kaannos" lang="pt-BR">Espero o ônibus.</span></td></tr>
  <tr><td><span class="fi">kuunnella</span><span class="kaannos" lang="pt-BR">escutar</span></td><td><span class="fi">Kuuntelen musiikkia.</span><span class="kaannos" lang="pt-BR">Escuto música.</span></td></tr>
  <tr><td><span class="fi">sovittaa</span><span class="kaannos" lang="pt-BR">experimentar (roupa)</span></td><td><span class="fi">Sovitan paitaa.</span><span class="kaannos" lang="pt-BR">Estou experimentando a camisa.</span></td></tr>
  <tr><td><span class="fi">puhua, ymmärtää</span><span class="kaannos" lang="pt-BR">falar, entender (línguas)</span></td><td><span class="fi">Puhun suomea. Ymmärrän suomea.</span><span class="kaannos" lang="pt-BR">Falo finlandês. Entendo finlandês.</span></td></tr>
</table>
<h3>Sem sujeito: a forma básica (para reconhecer)</h3>
<p>Quando a frase não tem sujeito com terminação de pessoa, o objeto inteiro fica na <b>forma básica</b>, sem <span class="fi pala">-n</span>:</p>
<ul>
  <li>depois de uma ordem: <span class="fi">Ota pipo!</span> <span class="fi">Osta tuo paita!</span> (lição 9);</li>
  <li>com <span class="fi">täytyy</span>: <span class="fi">Minun täytyy ostaa uusi paita.</span> (lição 10);</li>
  <li>no passivo, que vem na lição 20.</li>
</ul>
<p>O partitivo não muda nunca: <span class="fi">Älä osta paitaa!</span> <span class="fi">Minun täytyy ostaa kahvia.</span></p>
<h3>Os pronomes pessoais: -t</h3>
<p>Só os pronomes pessoais têm uma forma própria para o objeto inteiro, com <span class="fi pala">-t</span>: <span class="fi">minut, sinut, hänet, meidät, teidät, heidät</span>. <span class="fi">Maia näkee minut.</span> = A Maia me vê. Os demonstrativos usam <span class="fi pala">-n</span>: <span class="fi">Otan tämän. Otan sen.</span> Veja <a href="#h-pronominit">Pronomes pessoais em todos os casos</a>.</p>
<h3>O adjetivo vai junto</h3>
<p>O adjetivo do objeto ganha a mesma forma do substantivo: <span class="fi">Ostan sinisen paidan. En osta sinistä paitaa. Ostan siniset paidat.</span> Mais em <a href="#h-sijat">Os casos: visão geral</a>.</p>
<div class="huomio">
  <p><b>Armadilha do brasileiro:</b> deixar o objeto na forma básica, como em português: <span class="pala">Ostan paita</span> está errado; o certo é <span class="fi">Ostan paidan.</span> E na negação nunca vai <span class="fi pala">-n</span>: <span class="pala">En osta paidan</span> está errado; o certo é <span class="fi">En osta paitaa.</span></p>
</div>
<h3>Você já usou</h3>
<table class="taivutus neljannes">
  <tr><th>frase</th><th>por quê</th></tr>
  <tr><td><span class="fi">Tarvitsetteko kassin?</span><span class="kaannos" lang="pt-BR">Precisa de sacola? (lição 3)</span></td><td>uma sacola inteira: <span class="fi pala">-n</span></td></tr>
  <tr><td><span class="fi">Minä tunnen hyvän kahvilan.</span><span class="kaannos" lang="pt-BR">Eu conheço um café bom. (lição 4)</span></td><td>um café inteiro: <span class="fi pala">-n</span>, também no adjetivo</td></tr>
  <tr><td><span class="fi">Minä ymmärrän suomea.</span><span class="kaannos" lang="pt-BR">Eu entendo finlandês. (lição 5)</span></td><td>língua: partitivo</td></tr>
  <tr><td><span class="fi">Haluaisin kirjastokortin.</span><span class="kaannos" lang="pt-BR">Eu queria um cartão da biblioteca. (lição 6)</span></td><td>o cartão inteiro: <span class="fi pala">-n</span></td></tr>
  <tr><td><span class="fi">Hän katsoo asuntoa.</span><span class="kaannos" lang="pt-BR">Ela vai ver um apartamento. (lição 8)</span></td><td><span class="fi">katsoa</span>: partitivo</td></tr>
  <tr><td><span class="fi">Otan sen!</span><span class="kaannos" lang="pt-BR">Vou levar! (lição 9)</span></td><td>uma coisa inteira: <span class="fi">sen</span></td></tr>
</table>
<p><b>Treino:</b> <a href="#treino-t12-objekti">O objeto: inteiro ou parte?</a> · <a href="#treino-t12-kongruenssi">O adjetivo junto</a> · na lição: <a href="#t12-b">lição 12, parte B</a>.</p>`
  },
  // ==== t13: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  {
    id: 'h-imperfekti', kurssissa: ['t05', 't06', 't13', 't15'], osio: 'Verbos', otsikko: 'Passado: o imperfekti', kuvaus: 'heräsin, meni, söi, halusi: a marca -i-, o radical de cada tipo e a consoante fraca.',
    html: `
<p>O finlandês tem um só passado simples, o <b>imperfekti</b> (pretérito). Ele traduz “falei” e também “falava”: <span class="fi">Kun olin lapsi, asuin Belo Horizontessa.</span> (quando eu era criança, eu morava em Belo Horizonte). A marca é um <span class="fi pala">-i-</span> entre o radical e a terminação de pessoa. Nas lições 5 e 6 o passado aparece como frase pronta (<span class="fi">Hän oli lääkäri.</span> <span class="fi"><span data-l="olla#2">Olin</span> järvessä.</span>); a lição 13 explica o sistema.</p>
<h3>As terminações: as mesmas do presente</h3>
<table class="taivutus neljannes">
  <tr><th>pessoa</th><th>presente</th><th>passado</th><th>português</th></tr>
  <tr><td><span class="fi">minä</span></td><td><span class="fi">puhun</span></td><td><span class="fi">puhuin</span></td><td>eu falei, falava</td></tr>
  <tr><td><span class="fi">sinä</span></td><td><span class="fi">puhut</span></td><td><span class="fi">puhuit</span></td><td>você falou, falava</td></tr>
  <tr><td><span class="fi">hän</span></td><td><span class="fi">puhuu</span></td><td><span class="fi">puhui</span></td><td>ele, ela falou, falava</td></tr>
  <tr><td><span class="fi">me</span></td><td><span class="fi">puhumme</span></td><td><span class="fi">puhuimme</span></td><td>nós falamos, falávamos</td></tr>
  <tr><td><span class="fi">te</span></td><td><span class="fi">puhutte</span></td><td><span class="fi">puhuitte</span></td><td>vocês falaram, falavam</td></tr>
  <tr><td><span class="fi">he</span></td><td><span class="fi">puhuvat</span></td><td><span class="fi">puhuivat</span></td><td>eles, elas falaram, falavam</td></tr>
</table>
<p>A forma de “ele” não tem vogal longa: termina no próprio <span class="fi pala">-i</span>. Por isso o ouvido separa os tempos pelo fim: <span class="fi">hän puhuu</span> (fala) × <span class="fi">hän puhui</span> (falou), <span class="fi">Maia tulee</span> (vem) × <span class="fi">Maia tuli</span> (veio).</p>
<h3>O radical de cada tipo</h3>
<p>O <span class="fi pala">-i-</span> encosta no radical, e a última vogal se ajusta. A bolha de cada verbo mostra a forma de “ele” no passado: aprenda o verbo junto com ela.</p>
<table class="taivutus neljannes">
  <tr><th>tipo</th><th>infinitivo</th><th>passado (hän)</th><th>o que acontece</th></tr>
  <tr><td>1</td><td><span class="fi">puhua, kysyä, istua</span><span class="kaannos" lang="pt-BR">falar, perguntar, sentar</span></td><td><span class="fi">puhui, kysyi, istui</span></td><td>o, u, y, ö no fim do radical: só + i</td></tr>
  <tr><td>1</td><td><span class="fi">oppia</span><span class="kaannos" lang="pt-BR">aprender</span></td><td><span class="fi">oppi</span></td><td>i: o radical já termina em i</td></tr>
  <tr><td>1</td><td><span class="fi">lukea, lähteä</span><span class="kaannos" lang="pt-BR">ler, partir</span></td><td><span class="fi">luki, lähti</span></td><td>o e cai</td></tr>
  <tr><td>1</td><td><span class="fi">antaa, ajaa, jakaa</span><span class="kaannos" lang="pt-BR">dar, dirigir, entregar</span></td><td><span class="fi">antoi, ajoi, jakoi</span></td><td>o a vira oi: verbo de duas sílabas com a, e ou i na primeira</td></tr>
  <tr><td>1</td><td><span class="fi">ostaa, ottaa, kirjoittaa</span><span class="kaannos" lang="pt-BR">comprar, pegar, escrever</span></td><td><span class="fi">osti, otti, kirjoitti</span></td><td>o a cai: o ou u na primeira sílaba, ou verbo mais longo</td></tr>
  <tr><td>1</td><td><span class="fi">keittää, lähettää</span><span class="kaannos" lang="pt-BR">fazer café, mandar</span></td><td><span class="fi">keitti, lähetti</span></td><td>o ä cai</td></tr>
  <tr><td>1</td><td><span class="fi">tietää, ymmärtää, tuntea</span><span class="kaannos" lang="pt-BR">saber, entender, conhecer</span></td><td><span class="fi">tiesi, ymmärsi, tunsi</span></td><td>t vira s (poucos verbos)</td></tr>
  <tr><td>2</td><td><span class="fi">syödä, juoda, saada</span><span class="kaannos" lang="pt-BR">comer, beber, receber</span></td><td><span class="fi">söi, joi, sai</span></td><td>a vogal longa ou o ditongo encurta: yö → ö, uo → o, aa → a</td></tr>
  <tr><td>2</td><td><span class="fi">käydä, tehdä, nähdä</span><span class="kaannos" lang="pt-BR">visitar, fazer, ver</span></td><td><span class="fi">kävi, teki, näki</span></td><td>irregulares: aprenda de cor</td></tr>
  <tr><td>3</td><td><span class="fi">tulla, mennä, olla, kävellä</span><span class="kaannos" lang="pt-BR">vir, ir, ser, andar</span></td><td><span class="fi"><span data-l="tulla:imperf.3s">tuli</span>, meni, oli, käveli</span></td><td>o e do radical vira i</td></tr>
  <tr><td>4</td><td><span class="fi">haluta, herätä, tavata</span><span class="kaannos" lang="pt-BR">querer, acordar, encontrar</span></td><td><span class="fi">halusi, heräsi, tapasi</span></td><td>+ si</td></tr>
  <tr><td>5</td><td><span class="fi">tarvita, valita</span><span class="kaannos" lang="pt-BR">precisar, escolher</span></td><td><span class="fi">tarvitsi, valitsi</span></td><td>-tsi</td></tr>
  <tr><td>6</td><td><span class="fi">vanheta</span><span class="kaannos" lang="pt-BR">envelhecer</span></td><td><span class="fi">vanheni</span></td><td>o e vira i (raro)</td></tr>
</table>
<h3>A consoante fraca: eu, você, nós, vocês</h3>
<p>A gradação do passado é a mesma do presente. No tipo 1, <b>eu, você, nós e vocês</b> têm a consoante fraca e <b>ele, eles</b> a forte. Parta do “eu” no presente, que já tem a consoante certa: <span class="fi">nukun → nukuin</span>, <span class="fi">otan → otin</span>, <span class="fi">annan → annoin</span>.</p>
<table class="taivutus neljannes">
  <tr><th>pessoa</th><th>nukkua</th><th>antaa</th><th>lukea</th></tr>
  <tr><td><span class="fi">minä</span><span class="kaannos" lang="pt-BR">eu</span></td><td><span class="fi">nukuin</span></td><td><span class="fi">annoin</span></td><td><span class="fi">luin</span></td></tr>
  <tr><td><span class="fi">sinä</span><span class="kaannos" lang="pt-BR">você</span></td><td><span class="fi">nukuit</span></td><td><span class="fi">annoit</span></td><td><span class="fi">luit</span></td></tr>
  <tr><td><span class="fi">hän</span><span class="kaannos" lang="pt-BR">ele, ela</span></td><td><span class="fi">nukkui</span></td><td><span class="fi">antoi</span></td><td><span class="fi">luki</span></td></tr>
  <tr><td><span class="fi">me</span><span class="kaannos" lang="pt-BR">nós</span></td><td><span class="fi">nukuimme</span></td><td><span class="fi">annoimme</span></td><td><span class="fi">luimme</span></td></tr>
  <tr><td><span class="fi">te</span><span class="kaannos" lang="pt-BR">vocês</span></td><td><span class="fi">nukuitte</span></td><td><span class="fi">annoitte</span></td><td><span class="fi">luitte</span></td></tr>
  <tr><td><span class="fi">he</span><span class="kaannos" lang="pt-BR">eles, elas</span></td><td><span class="fi">nukkuivat</span></td><td><span class="fi">antoivat</span></td><td><span class="fi">lukivat</span></td></tr>
</table>
<p>Nos tipos 3 e 4 a gradação é ao contrário, e todas as pessoas ficam fortes, como no presente: <span class="fi">tavata → minä tapasin, hän tapasi</span>; <span class="fi">ajatella → minä ajattelin, hän ajatteli</span>. Veja <a href="#h-astevaihtelu">Gradação consonantal</a>.</p>
<h3>Pergunta e resposta</h3>
<p>Como no presente: <span class="fi pala">-ko/-kö</span> no verbo, e a resposta curta repete o verbo.</p>
<ul class="esim">
  <li class="s" data-pt="Você dormiu bem? – Dormi.">Nukuitko hyvin? – Nukuin.</li>
  <li class="s" data-pt="O Jay comeu? – Comeu.">Söikö Jay? – Söi.</li>
</ul>
<h3>O passado negativo: en + particípio</h3>
<p>Para negar o passado, o finlandês não usa a forma com <span class="fi pala">-i-</span>. Ele usa o verbo de negação do presente (<span class="fi">en, et, ei, emme, ette, eivät</span>) e o <b>particípio</b>, que só muda com o número: <span class="fi pala">-nut/-nyt</span> no singular, <span class="fi pala">-neet</span> no plural (lição 15). A pessoa já está no verbo de negação.</p>
<table class="taivutus neljannes">
  <tr><th>pessoa</th><th>afirmativo</th><th>negativo</th><th>português</th></tr>
  <tr><td><span class="fi">minä</span></td><td><span class="fi">nukuin</span></td><td><span class="fi">en nukkunut</span></td><td>eu dormi · não dormi</td></tr>
  <tr><td><span class="fi">sinä</span></td><td><span class="fi">nukuit</span></td><td><span class="fi">et nukkunut</span></td><td>você dormiu · não dormiu</td></tr>
  <tr><td><span class="fi">hän</span></td><td><span class="fi">nukkui</span></td><td><span class="fi">ei nukkunut</span></td><td>ele, ela dormiu · não dormiu</td></tr>
  <tr><td><span class="fi">me</span></td><td><span class="fi">nukuimme</span></td><td><span class="fi">emme nukkuneet</span></td><td>nós dormimos · não dormimos</td></tr>
  <tr><td><span class="fi">te</span></td><td><span class="fi">nukuitte</span></td><td><span class="fi">ette nukkuneet</span></td><td>vocês dormiram · não dormiram</td></tr>
  <tr><td><span class="fi">he</span></td><td><span class="fi">nukkuivat</span></td><td><span class="fi">eivät nukkuneet</span></td><td>eles, elas dormiram · não dormiram</td></tr>
</table>
<p>O particípio sai do infinitivo, com a consoante forte do infinitivo (<span class="fi">nukkua → nukkunut</span>, nunca <span class="pala">nukunut</span>). A vogal decide entre <span class="fi pala">-nut</span> e <span class="fi pala">-nyt</span>:</p>
<table class="taivutus neljannes">
  <tr><th>tipo</th><th>infinitivo</th><th>particípio</th><th>regra</th></tr>
  <tr><td>1</td><td><span class="fi">nukkua, ostaa, lukea</span><span class="kaannos" lang="pt-BR">dormir, comprar, ler</span></td><td><span class="fi">nukkunut, ostanut, lukenut</span></td><td>tire o -a/-ä, ponha -nut/-nyt</td></tr>
  <tr><td>2</td><td><span class="fi">syödä, juoda, saada</span><span class="kaannos" lang="pt-BR">comer, beber, receber</span></td><td><span class="fi">syönyt, juonut, saanut</span></td><td>tire o -da/-dä</td></tr>
  <tr><td>2</td><td><span class="fi">tehdä, nähdä, käydä</span><span class="kaannos" lang="pt-BR">fazer, ver, visitar</span></td><td><span class="fi">tehnyt, nähnyt, käynyt</span></td><td>tire o -dä</td></tr>
  <tr><td>3</td><td><span class="fi">mennä, tulla, olla</span><span class="kaannos" lang="pt-BR">ir, vir, ser</span></td><td><span class="fi">mennyt, tullut, ollut</span></td><td>a consoante dobra: -nnyt, -llut</td></tr>
  <tr><td>4</td><td><span class="fi">haluta, avata, herätä</span><span class="kaannos" lang="pt-BR">querer, abrir, acordar</span></td><td><span class="fi">halunnut, avannut, herännyt</span></td><td>-nnut/-nnyt</td></tr>
  <tr><td>5</td><td><span class="fi">tarvita, valita</span><span class="kaannos" lang="pt-BR">precisar, escolher</span></td><td><span class="fi">tarvinnut, valinnut</span></td><td>-nnut</td></tr>
</table>
<p>No plural, <span class="fi pala">-nut/-nyt</span> vira <span class="fi pala">-neet</span>: <span class="fi">nukkuneet, syöneet, menneet, halunneet</span>. Pergunta negativa: <span class="fi pala">-ko/-kö</span> no verbo de negação: <span class="fi">Etkö nukkunut?</span> (você não dormiu?). O mesmo particípio forma o perfeito (<span class="fi">olen syönyt</span>, eu já comi), que vem na lição 19. A tabela de todas as negações está em <a href="#h-kielto">Negação</a>.</p>
<div class="huomio">
  <p><b>Armadilha do brasileiro:</b> o português nega com “não” + o mesmo verbo (comi → não comi). O finlandês troca a forma: <span class="fi">söin → en syönyt</span>, nunca <span class="pala">en söin</span>.</p>
</div>
<h3>Quando? As palavras do passado</h3>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">eilen</span></td><td>ontem</td></tr>
  <tr><td><span class="fi">eilen illalla</span></td><td>ontem à noite</td></tr>
  <tr><td><span class="fi">viime viikolla</span></td><td>na semana passada</td></tr>
  <tr><td><span class="fi">viime vuonna</span></td><td>no ano passado</td></tr>
  <tr><td><span class="fi">kaksi päivää sitten</span></td><td>há dois dias</td></tr>
</table>
<p>Mais palavras de tempo em <a href="#h-aika">Dias, meses e horas</a>.</p>
<div class="huomio">
  <p><b>Armadilha do brasileiro:</b> o português escolhe entre “comi” e “comia”, “fui” e “ia”. O finlandês não escolhe: <span class="fi">söin</span> é os dois. E a consoante: <span class="fi">minä nukuin</span>, nunca <span class="pala">nukkuin</span>, que mistura a forma forte de “ele” com o <span class="fi pala">-n</span> de “eu”.</p>
</div>
<p><b>Treino:</b> <a href="#treino-t13-imperfekti">O passado: heräsin, heräsit, heräsi…</a> · <a href="#treino-t13-vartalo">O passado de cada verbo</a> · <a href="#treino-t13-kuuntele">Ouça: presente ou passado?</a> · <a href="#treino-t15-kielto-imperfekti">Não fiz: en nukkunut, emme syöneet</a> · <a href="#treino-t15-partisiippi">O particípio de cada verbo</a> · na lição: <a href="#t13-b">lição 13, parte B</a>, <a href="#t15-b">lição 15, parte B</a>.</p>`
  },
  // ==== t14: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  /* t14: postpositiot genetiivin kanssa (kirkon edessä, Maian luona, keskustan kautta) ja suunnat. Persoonapronominien
     kanssa omistusliite (vieressäni) vasta oppitunnilla 17: tällä sivulla vain viittaus. */
  {
    id: 'h-postpositiot', kurssissa: ['t14'], osio: 'Substantivos e casos', otsikko: 'Posposições: kirkon edessä, Maian luona', kuvaus: 'Na frente de, atrás de, ao lado de… em finlandês vêm depois da palavra, que fica no genitivo.',
    html: `
<p>Em português, a preposição vem <b>antes</b>: “na frente da igreja”. Em finlandês, a palavra de lugar vem <b>depois</b>, e a palavra principal fica no <b>genitivo</b> (<span class="fi pala">-n</span>): <span class="fi">kirkon edessä</span>, palavra por palavra “da igreja na frente”. Por isso essas palavras se chamam <b>posposições</b>. O genitivo é o mesmo de <span class="fi">Jayn äiti</span> (lição 5), com a mesma consoante que muda: <span class="fi">selkä → selän takana</span>.</p>
<h3>Onde? As posposições mais usadas</h3>
<table class="taivutus neljannes">
  <tr><th>posposição</th><th>português</th><th>exemplo</th><th>português</th></tr>
  <tr><td><span class="fi">edessä</span></td><td>na frente de</td><td><span class="fi">pankin edessä</span></td><td>na frente do banco</td></tr>
  <tr><td><span class="fi">takana</span></td><td>atrás de</td><td><span class="fi">kirkon takana</span></td><td>atrás da igreja</td></tr>
  <tr><td><span class="fi">vieressä</span></td><td>ao lado de</td><td><span class="fi">penkin vieressä</span></td><td>ao lado do banco (de sentar)</td></tr>
  <tr><td><span class="fi">välissä</span></td><td>entre</td><td><span class="fi">museon ja palatsin välissä</span></td><td>entre o museu e o palácio</td></tr>
  <tr><td><span class="fi">lähellä</span></td><td>perto de</td><td><span class="fi">puiston lähellä</span></td><td>perto do parque</td></tr>
  <tr><td><span class="fi">alla</span></td><td>debaixo de</td><td><span class="fi">palmun alla</span></td><td>debaixo da palmeira</td></tr>
  <tr><td><span class="fi">kohdalla</span></td><td>na altura de</td><td><span class="fi">apteekin kohdalla</span></td><td>na altura da farmácia</td></tr>
  <tr><td><span class="fi">ympäri</span></td><td>em volta de</td><td><span class="fi">suihkulähteen ympäri</span></td><td>em volta do chafariz</td></tr>
  <tr><td><span class="fi">luona</span></td><td>na casa de, junto de (pessoa)</td><td><span class="fi">Maian luona</span></td><td>na casa da Maia</td></tr>
  <tr><td><span class="fi">kautta</span></td><td>por, passando por</td><td><span class="fi">keskustan kautta</span></td><td>pelo centro</td></tr>
  <tr><td><span class="fi">kanssa</span></td><td>com</td><td><span class="fi">Jayn kanssa</span></td><td>com o Jay</td></tr>
  <tr><td><span class="fi">jälkeen</span></td><td>depois de</td><td><span class="fi">lounaan jälkeen</span></td><td>depois do almoço</td></tr>
</table>
<p>Com dois lugares, os dois vão para o genitivo: <span class="fi">museon ja palatsin välissä</span>. Com uma pessoa, <span class="fi">luona</span> é “na casa de” ou “junto de”: <span class="fi">Illalla olemme Martan luona.</span> (à noite estamos na casa da Marta).</p>
<h3>Para onde? Algumas posposições mudam como os casos de lugar</h3>
<table class="taivutus neljannes">
  <tr><th>onde?</th><th>para onde?</th><th>português</th></tr>
  <tr><td><span class="fi">kirkon edessä</span></td><td><span class="fi">kirkon eteen</span></td><td>na frente da igreja · para a frente da igreja</td></tr>
  <tr><td><span class="fi">palmun takana</span></td><td><span class="fi">palmun taakse</span></td><td>atrás da palmeira · para trás da palmeira</td></tr>
  <tr><td><span class="fi">penkin vieressä</span></td><td><span class="fi">penkin viereen</span></td><td>ao lado do banco · para o lado do banco</td></tr>
  <tr><td><span class="fi">palmun alla</span></td><td><span class="fi">palmun alle</span></td><td>debaixo da palmeira · para debaixo da palmeira</td></tr>
</table>
<p>Com verbos de movimento (<span class="fi">mennä, tulla, juosta</span>), use a forma para onde?: <span class="fi">Menkää suihkulähteen taakse!</span> Com verbos de estar (<span class="fi">olla, istua, odottaa</span>), a forma onde?: <span class="fi">Odottakaa penkin vieressä!</span></p>
<h3>Direções: oikealle, vasemmalla, suoraan</h3>
<p>“Direita” e “esquerda” são os casos de fora (<a href="#h-ulkosijat">-lla, -lta, -lle</a>) de <span class="fi">oikea</span> e <span class="fi">vasen</span>: para onde? <span class="fi">oikealle, vasemmalle</span>; onde? <span class="fi">oikealla, vasemmalla</span>. Reto é <span class="fi">suoraan</span>.</p>
<ul class="esim">
  <li class="s" data-pt="Vá reto até a esquina e vire à direita!">Mene suoraan kulmaan ja käänny oikealle!</li>
  <li class="s" data-pt="A farmácia fica à esquerda.">Apteekki on vasemmalla.</li>
</ul>
<div class="huomio">
  <p><b>Armadilhas do brasileiro:</b> 1) a ordem: <span class="fi">kirkon edessä</span>, não “edessä kirkko”. 2) o caso: genitivo, nunca a forma básica nem o partitivo (<span class="fi pala">kirkko edessä</span>, <span class="fi pala">kirkkoa edessä</span>). 3) direto ≠ direita: <span class="fi">suoraan</span> = reto, <span class="fi">oikea</span> = direita (e também “certo”). 4) Algumas palavras de tempo vêm antes, com partitivo: <span class="fi">ennen joulua</span> (antes do Natal, lição 10). Com pronomes (“ao meu lado”) entra mais uma terminação, que vem na lição 17.</p>
</div>
<p><b>Treino:</b> <a href="#treino-t14-postpositiot">Onde fica? Genitivo + posposição</a> · <a href="#treino-t14-suunnat">Direções</a> · na lição: <a href="#t14-b">lição 14, parte B</a>.</p>`
  },
  // ==== t15: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  /* t15: konditionaali kohteliaisuuteen ja toiveisiin (haluaisin, voisitko, olisi mukava); jos-lause ja koko konditionaali
     oppitunnilla 20 (sivu täydennetään silloin). Muodot taivutuskoneelta (kond.*). */
  {
    id: 'h-konditionaali', kurssissa: ['t04', 't11', 't15', 't20'], osio: 'Verbos', otsikko: 'Condicional: haluaisin, voisitko, olisi', kuvaus: 'O “-ria” do finlandês: -isi- no verbo para pedir com educação, para desejar e, na lição 20, para o “se…”.',
    html: `
<p>O condicional finlandês é o “-ria” do português: <span class="fi">haluaisin</span> (eu gostaria), <span class="fi">voisit</span> (você poderia), <span class="fi">olisi</span> (seria). A marca é <span class="fi pala">-isi-</span> entre o radical e a terminação de pessoa. Nas lições 4 e 11 ele aparece como frase pronta (<span class="fi">haluaisin, saisinko</span>); a lição 15 explica a forma e o uso educado; a lição 20 traz o “se…” (<span class="fi">jos</span>).</p>
<h3>As pessoas</h3>
<table class="taivutus neljannes">
  <tr><th>pessoa</th><th>haluta</th><th>olla</th><th>português</th></tr>
  <tr><td><span class="fi">minä</span></td><td><span class="fi">haluaisin</span></td><td><span class="fi">olisin</span></td><td>eu gostaria · eu seria</td></tr>
  <tr><td><span class="fi">sinä</span></td><td><span class="fi">haluaisit</span></td><td><span class="fi">olisit</span></td><td>você gostaria · você seria</td></tr>
  <tr><td><span class="fi">hän</span></td><td><span class="fi">haluaisi</span></td><td><span class="fi">olisi</span></td><td>ele, ela gostaria · seria</td></tr>
  <tr><td><span class="fi">me</span></td><td><span class="fi">haluaisimme</span></td><td><span class="fi">olisimme</span></td><td>nós gostaríamos · seríamos</td></tr>
  <tr><td><span class="fi">te</span></td><td><span class="fi">haluaisitte</span></td><td><span class="fi">olisitte</span></td><td>vocês gostariam · seriam</td></tr>
  <tr><td><span class="fi">he</span></td><td><span class="fi">haluaisivat</span></td><td><span class="fi">olisivat</span></td><td>eles, elas gostariam · seriam</td></tr>
</table>
<h3>O radical: forte, como o de “ele”</h3>
<p>Parta da forma de “ele” no presente, que tem a consoante forte, e ponha <span class="fi pala">-isi-</span> + a terminação. A vogal do fim do radical se ajusta:</p>
<table class="taivutus neljannes">
  <tr><th>hän (presente)</th><th>condicional (eu)</th><th>o que acontece</th></tr>
  <tr><td><span class="fi">puhuu</span><span class="kaannos" lang="pt-BR">fala</span></td><td><span class="fi">puhuisin</span></td><td>o, u, y, ö, a, ä ficam: + isi</td></tr>
  <tr><td><span class="fi">ottaa, nukkuu</span><span class="kaannos" lang="pt-BR">pega, dorme</span></td><td><span class="fi">ottaisin, nukkuisin</span></td><td>consoante forte em todas as pessoas</td></tr>
  <tr><td><span class="fi">tulee, menee</span><span class="kaannos" lang="pt-BR">vem, vai</span></td><td><span class="fi">tulisin, menisin</span></td><td>o e cai</td></tr>
  <tr><td><span class="fi">saa, voi</span><span class="kaannos" lang="pt-BR">recebe, pode</span></td><td><span class="fi">saisin, voisin</span></td><td><span class="fi">saa → saisin</span> (aa → ai); <span class="fi">voi → voisin</span> (o i do radical se junta ao -isi-)</td></tr>
  <tr><td><span class="fi">syö, juo</span><span class="kaannos" lang="pt-BR">come, bebe</span></td><td><span class="fi">söisin, joisin</span></td><td>yö → ö, uo → o</td></tr>
  <tr><td><span class="fi">tekee, näkee</span><span class="kaannos" lang="pt-BR">faz, vê</span></td><td><span class="fi">tekisin, näkisin</span></td><td>o e cai (tehdä, nähdä)</td></tr>
  <tr><td><span class="fi">haluaa</span><span class="kaannos" lang="pt-BR">quer</span></td><td><span class="fi">haluaisin</span></td><td>tipo 4: halua- + isi</td></tr>
  <tr><td><span class="fi">on</span><span class="kaannos" lang="pt-BR">é, está</span></td><td><span class="fi">olisin</span></td><td>olla: ol- + isi</td></tr>
</table>
<p>A bolha de cada verbo mostra o condicional (linha “…ria”). Pergunta: <span class="fi pala">-ko/-kö</span> no fim, como sempre: <span class="fi">voisitko?</span>, <span class="fi">saisinko?</span></p>
<h3>Para que serve: pedir e desejar (lição 15)</h3>
<ul class="esim">
  <li class="s" data-pt="Eu queria bolo.">Haluaisin kakkua.</li>
  <li class="s" data-pt="Você poderia me ajudar?">Voisitko auttaa minua?</li>
  <li class="s" data-pt="Poderia me dar um café?">Saisinko kahvia?</li>
  <li class="s" data-pt="Seria bom ver neve.">Olisi mukava nähdä lunta.</li>
  <li class="s" data-pt="Eu comeria presunto agora!">Söisin nyt kinkkua!</li>
</ul>
<p><b>Pedir:</b> <span class="fi">voisitko…?</span> e <span class="fi">saisinko…?</span> deixam o pedido educado, como “você poderia…?” e “poderia me dar…?”. <b>Desejar:</b> <span class="fi">haluaisin…</span> (eu gostaria de…), <span class="fi">olisi mukava…</span> (seria bom…).</p>
<h3>Na lição 20: o “se” (jos)</h3>
<p>Com <span class="fi">jos</span> (se), para algo <b>imaginado</b>, em geral as duas partes da frase vão para o condicional: <span class="fi">Jos minulla olisi mökki, asuisin siellä.</span> (Se eu tivesse uma casa de campo, eu moraria lá.) O português muda o verbo de cada parte (“tivesse … moraria”); o finlandês usa o condicional nas duas. Quem fala decide: imaginado = condicional, possível = presente.</p>
<ul class="esim">
  <li class="s" data-pt="Se eu tivesse uma casa de campo, moraria aqui todos os verões.">Jos minulla olisi mökki, asuisin täällä joka kesä.</li>
  <li class="s" data-pt="Se eu dirigisse devagar, ainda estaríamos em Helsinque.">Jos ajaisin hitaasti, olisimme vielä Helsingissä.</li>
  <li class="s" data-pt="Se a Marta soubesse finlandês, ela falaria com a Purjo.">Jos Marta osaisi suomea, hän puhuisi Purjolle.</li>
  <li class="s" data-pt="O que você faria se tivesse um barco?">Mitä sinä tekisit, jos sinulla olisi vene?</li>
</ul>
<p>Para algo <b>possível</b> (“se chover”, “se você tiver tempo”), o <span class="fi">jos</span> fica no presente, e a outra parte em geral também, ou é uma ordem ou um convite. Ela também pode ter um condicional educado (lição 15): <span class="fi">Jos sinulla on aikaa, voisimme mennä Hankoon.</span> (se você tiver tempo, poderíamos ir a Hanko.)</p>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th><th>por quê</th></tr>
  <tr><td><span class="fi">Jos huomenna sataa, saunomme koko päivän.</span></td><td>Se chover amanhã, fazemos sauna o dia inteiro.</td><td>possível: presente + presente</td></tr>
  <tr><td><span class="fi">Jos sinulla on aikaa, mennään Hankoon!</span></td><td>Se você tiver tempo, vamos a Hanko!</td><td>possível: presente + convite</td></tr>
  <tr><td><span class="fi">Jos huomenna sataisi, saunoisimme koko päivän.</span></td><td>Se chovesse amanhã, faríamos sauna o dia inteiro.</td><td>imaginado: condicional + condicional</td></tr>
</table>
<p><b>Negação:</b> <span class="fi">en, et, ei, emme, ette, eivät</span> + a forma de “ele” do condicional, sem mudar: <span class="fi">Hiisi ei ajaisi hitaasti.</span> (o Hiisi não dirigiria devagar); <span class="fi pala">en ajaisi</span> = eu não dirigiria.</p>
<div class="huomio">
  <p><b>Armadilha do brasileiro:</b> o “se eu tivesse” do português parece passado, mas em finlandês não é: <span class="fi">jos minulla oli mökki</span> quer dizer “se eu tinha uma casa de campo” (de verdade, no passado). Para imaginar, sempre o condicional: <span class="fi">jos minulla olisi mökki</span>. E em <span class="fi">minulla on</span> o verbo fica na forma de “ele”: <span class="fi">minulla olisi</span>, nunca <span class="pala">minulla olisin</span>.</p>
</div>
<div class="huomio">
  <p><b>Armadilha do brasileiro:</b> “eu queria um café” é passado em português, mas educado. Em finlandês, <span class="fi">halusin kahvia</span> é só passado (eu quis café). Peça com o condicional: <span class="fi">haluaisin kahvia</span>. E a consoante fica forte: <span class="fi">ottaisin</span>, nunca <span class="pala">otaisin</span>.</p>
</div>
<p><b>Treino:</b> <a href="#treino-t15-konditionaali">Eu gostaria: haluaisin, voisitko, olisi</a> · <a href="#treino-t20-konditionaali">Eu faria: o condicional em todas as pessoas</a> · <a href="#treino-t20-jos">Se eu tivesse × se eu tiver</a> · na lição: <a href="#t15-b">lição 15, parte B</a>, <a href="#t20-b">lição 20, parte B</a>.</p>`
  },
  // ==== k03: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  // ==== t16: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  /* t16: essiivi (-na/-nä: rooli, elämänvaihe, päivät ja juhlat) ja translatiivi (-ksi: muutos tulla/muuttua/tehdä, kieli,
     määräaika jouluksi, Terveydeksi). Muodot ja sijataulut taivutuskoneelta (ess, transl); monikko oppitunnilla 19. */
  {
    id: 'h-essiivi', kurssissa: ['t03', 't07', 't12', 't15', 't16'], osio: 'Substantivos e casos', otsikko: 'Como? Virar o quê? Essivo e translativo', kuvaus: 'lapsena, opettajana, jouluna; tulla iloiseksi, muuttua hiljaiseksi, suomeksi: o papel, o tempo, a mudança e a língua.',
    html: `
<p>Dois casos que andam juntos. O <b>essivo</b> (<span class="fi pala">-na/-nä</span>) diz <b>como</b> alguém está, em que papel ou fase, e com dias e festas <b>quando</b>: <span class="fi">lapsena</span> (quando criança), <span class="fi">opettajana</span> (como professor), <span class="fi">jouluna</span> (no Natal). O <b>translativo</b> (<span class="fi pala">-ksi</span>) diz <b>no que</b> alguém ou alguma coisa se transforma, e em que língua: <span class="fi">iloiseksi</span> (ficar alegre), <span class="fi">jääksi</span> (virar gelo), <span class="fi">suomeksi</span> (em finlandês). As perguntas são <span class="fi" data-l="mikä:ess">minä?</span> (como quê?) e <span class="fi" data-l="mikä:transl">miksi?</span> (em quê?); as duas são formas de <span class="fi">mikä</span>, e por isso <span class="fi">miksi</span> também quer dizer “por quê?”.</p>
<h3>A forma: essivo no radical forte, translativo no radical fraco</h3>
<p>O essivo usa o radical forte, o mesmo do ilativo (<span class="fi">katuun → katuna</span>). O translativo usa o radical do genitivo, sem o <span class="fi pala">-n</span> (<span class="fi">kadun → kaduksi</span>). Por isso a consoante que muda aparece só no translativo:</p>
<table class="taivutus neljannes">
  <tr><th>palavra</th><th>essivo</th><th>translativo</th><th>português</th></tr>
  <tr><td><span class="fi">lapsi</span></td><td><span class="fi">lapsena</span></td><td><span class="fi">lapseksi</span></td><td>criança</td></tr>
  <tr><td><span class="fi">katu</span></td><td><span class="fi">katuna</span></td><td><span class="fi">kaduksi</span></td><td>rua</td></tr>
  <tr><td><span class="fi">kauppa</span></td><td><span class="fi">kauppana</span></td><td><span class="fi">kaupaksi</span></td><td>loja</td></tr>
  <tr><td><span class="fi">iloinen</span></td><td><span class="fi">iloisena</span></td><td><span class="fi">iloiseksi</span></td><td>alegre</td></tr>
  <tr><td><span class="fi">väsynyt</span></td><td><span class="fi">väsyneenä</span></td><td><span class="fi">väsyneeksi</span></td><td>cansado</td></tr>
  <tr><td><span class="fi">suomi</span></td><td><span class="fi">suomena</span></td><td><span class="fi">suomeksi</span></td><td>finlandês (a língua)</td></tr>
</table>
<div class="sijataulu" data-sana="katu" data-sijat="nominatiivi,genetiivi,illatiivi,essiivi,translatiivi"></div>
<div class="sijataulu" data-sana="iloinen" data-sijat="nominatiivi,genetiivi,illatiivi,essiivi,translatiivi"></div>
<h3>O essivo: papel, fase da vida, dia e festa</h3>
<ul class="esim">
  <li class="s" data-pt="A Malu trabalha como motorista.">Malu on töissä kuljettajana.</li>
  <li class="s" data-pt="Como músico, o Walker é melhor do que como economista.">Muusikkona Walker on parempi kuin taloustieteilijänä.</li>
  <li class="s" data-pt="Quando criança, a Maia dançava na rua.">Lapsena Maia tanssi kadulla.</li>
  <li class="s" data-pt="Cansado, o Jay dorme no sofá.">Väsyneenä Jay nukkuu sohvalla.</li>
  <li class="s" data-pt="No Natal nós estamos no Brasil.">Jouluna olemme Brasiliassa.</li>
  <li class="s" data-pt="No sábado tem festa na rua.">Lauantaina kadulla on juhlat.</li>
</ul>
<p>Com <span class="fi">olla</span> sozinho, a profissão fica na forma básica: <span class="fi">Walker on muusikko.</span> O essivo aparece quando há um “como”: <span class="fi">Walker on töissä muusikkona.</span> Dias da semana e festas pedem quase sempre <span class="fi pala">-na</span> (<span class="fi">maanantaina, lauantaina, jouluna, jouluaattona</span>); as partes do dia e as estações, <span class="fi pala">-lla</span> (<span class="fi">aamulla, illalla, kesällä</span>; veja <a href="#h-aika">Dias, meses e horas</a>).</p>
<h3>O translativo: ficar, virar, fazer virar</h3>
<table class="taivutus neljannes">
  <tr><th>construção</th><th>exemplo</th><th>português</th></tr>
  <tr><td><span class="fi">tulla</span> + <span class="fi pala">-ksi</span></td><td><span class="fi">Eenok tuli väsyneeksi.</span></td><td>o Eenok ficou cansado</td></tr>
  <tr><td><span class="fi">muuttua</span> + <span class="fi pala">-ksi</span></td><td><span class="fi">Tie muuttui jääksi.</span></td><td>a estrada virou gelo</td></tr>
  <tr><td><span class="fi">tehdä</span> + objeto + <span class="fi pala">-ksi</span></td><td><span class="fi">Olut tekee Jayn rohkeaksi.</span></td><td>a cerveja deixa o Jay corajoso</td></tr>
</table>
<p>Só a mudança leva <span class="fi pala">-ksi</span>. O estado fica na forma básica: <span class="fi">Jay on väsynyt.</span> (está cansado) × <span class="fi">Jay tulee väsyneeksi.</span> (fica cansado). Com o tempo, sem sujeito, diz-se sem <span class="fi pala">-ksi</span>: <span class="fi">Ulkona <span data-l="tulla:imperf.3s">tuli</span> kylmä.</span> (esfriou lá fora).</p>
<h3>Em que língua? E para quando?</h3>
<ul class="esim">
  <li class="s" data-pt="Diga isso em finlandês!">Sano se suomeksi!</li>
  <li class="s" data-pt="A Purjo escreve em inglês.">Purjo kirjoittaa englanniksi.</li>
  <li class="s" data-pt="Nós vamos para o Brasil para o Natal.">Menemme Brasiliaan jouluksi.</li>
</ul>
<p>A língua <b>em que</b> se diz, escreve ou traduz vai no translativo (<span class="fi">suomeksi, portugaliksi, englanniksi</span>); a língua que alguém <b>fala</b> vai no partitivo (<span class="fi">puhun suomea</span>). Com uma data ou uma festa, o translativo é “para”: <span class="fi">jouluksi</span> = para o Natal, × <span class="fi">jouluna</span> = no Natal. E o <span class="fi">Terveydeksi!</span> de quando alguém espirra é o translativo de <span class="fi pala">terveys</span> (saúde): “para a saúde”.</p>
<p>No plural (lição 19) as terminações são <span class="fi pala">-ina/-inä</span> e <span class="fi pala">-iksi</span>.</p>
<div class="huomio">
  <p><b>Armadilhas do brasileiro:</b> 1) “ficar” em português é estar e também mudar; em finlandês só a mudança leva <span class="fi pala">-ksi</span>: nunca <span class="pala">Jay tulee väsynyt</span>. 2) A profissão com <span class="fi">olla</span> sozinho não leva <span class="fi pala">-na</span>: <span class="fi">Hän on opettaja.</span> 3) <span class="fi">suomeksi</span> (em finlandês) não é <span class="fi">suomea</span> (o finlandês que se fala). 4) Na dúvida, a bolha da palavra mostra as duas formas.</p>
</div>
<p><b>Treino:</b> <a href="#treino-t16-essiivi">Como? Quando? O essivo</a> · <a href="#treino-t16-translatiivi">Ficar, virar, em que língua</a> · na lição: <a href="#t16-b">lição 16, parte B</a>.</p>`
  },
  // ==== t17: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  /* t17: ihmisen kuvailu (hän on pitkä, hänellä on siniset silmät; monikko pareille) ja omistusliitteet tunnistukseen.
     Leksikossa poss.1s on vain osalla sanoista (nimeni, numeroni, ystäväni, tukkani, hiukseni, silmäni, silmälasini), joten
     muiden persoonien muodot ovat tällä sivulla .pala-muotoina (ei kuplaa). */
  {
    id: 'h-kuvailu', kurssissa: ['t17'], osio: 'Frases úteis', otsikko: 'Descrever pessoas: hän on pitkä, hänellä on siniset silmät', kuvaus: 'Como a pessoa é e o que ela tem: altura, idade, cabelo, olhos, barba, óculos e roupa.',
    html: `
<p>Para descrever alguém, o finlandês usa duas frases. <b>Como a pessoa é</b> (altura, idade, corpo): <span class="fi">hän on</span> + adjetivo. <b>O que ela tem</b> (olhos, cabelo, barba, óculos, roupa): <span class="fi">hänellä on</span> + adjetivo + substantivo, o “ter” da lição 5.</p>
<h3>Hän on… (como é)</h3>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Hän on <span data-l="pitkä#2">pitkä</span>.</span></td><td>ele é alto, ela é alta</td></tr>
  <tr><td><span class="fi">Hän on lyhyt.</span></td><td>ele é baixo, ela é baixa</td></tr>
  <tr><td><span class="fi">Hän on nuori.</span></td><td>é jovem</td></tr>
  <tr><td><span class="fi">Hän on vanha.</span></td><td>é velho, velha</td></tr>
  <tr><td><span class="fi">Hän on laiha.</span></td><td>é magro, magra</td></tr>
  <tr><td><span class="fi">Hän on kalju.</span></td><td>é careca</td></tr>
</table>
<h3>Hänellä on… (o que tem)</h3>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Hänellä on siniset silmät.</span></td><td>tem olhos azuis</td></tr>
  <tr><td><span class="fi">Hänellä on ruskea tukka.</span></td><td>tem cabelo castanho</td></tr>
  <tr><td><span class="fi">Hänellä on vaaleat hiukset.</span></td><td>tem cabelo loiro</td></tr>
  <tr><td><span class="fi">Hänellä on parta.</span></td><td>tem barba</td></tr>
  <tr><td><span class="fi">Hänellä on viikset.</span></td><td>tem bigode</td></tr>
  <tr><td><span class="fi">Hänellä on silmälasit.</span></td><td>usa óculos</td></tr>
  <tr><td><span class="fi">Hänellä on mustavalkoinen paita.</span></td><td>está de camisa preta e branca</td></tr>
</table>
<h3>Plural ou singular?</h3>
<p>O que vem em <b>par ou conjunto</b> vai no plural <span class="fi pala">-t</span>: <span class="fi">silmät</span> (olhos), <span class="fi">hiukset</span> (cabelo, os fios), <span class="fi">viikset</span> (bigode), <span class="fi">silmälasit</span> e <span class="fi">aurinkolasit</span> (óculos), e também <span class="fi">housut</span> e <span class="fi">shortsit</span> (lição 12). <b>Uma coisa só</b> fica no singular: <span class="fi">tukka</span> (o cabelo todo), <span class="fi">parta</span> (barba), <span class="fi">töyhtö</span> (topete). O adjetivo vai no mesmo número: <span class="fi">siniset silmät, ruskeat hiukset</span>, mas <span class="fi">ruskea tukka</span>. Num formulário, a cor é de <span class="fi">väri</span>, que é singular: <span class="fi">Silmien väri: sininen.</span></p>
<h3>Perguntas, negação e passado</h3>
<ul class="esim">
  <li class="s" data-pt="Como ele é?">Millainen hän on?</li>
  <li class="s" data-pt="Que cabelo ela tem?">Millainen tukka hänellä on?</li>
  <li class="s" data-pt="Ele usa óculos? – Não.">Onko hänellä silmälasit? – Ei ole.</li>
  <li class="s" data-pt="Ele não tem barba.">Hänellä ei ole partaa.</li>
  <li class="s" data-pt="Ele era um homem baixinho e tinha um topete grande.">Hän oli pieni mies, ja hänellä oli iso töyhtö.</li>
</ul>
<p>Na negação vem o partitivo, como em toda frase de “não ter” (lição 5): <span class="fi">ei ole partaa</span>, <span class="fi">ei ole silmälaseja</span>. No passado, <span class="fi">hän oli</span> e <span class="fi">hänellä oli</span> (lição 13).</p>
<h3>As cores do cabelo</h3>
<p>Loiro é <span class="fi">vaalea</span> (claro), não <span class="fi">keltainen</span> (amarelo). Cabelo escuro é <span class="fi">tumma</span>, ruivo é <span class="fi">punainen</span> (vermelho), grisalho é <span class="fi">harmaa</span> (cinza). Castanho é <span class="fi">ruskea</span>, e preto, <span class="fi">musta</span>.</p>
<div class="huomio">
  <p><b>Armadilhas do brasileiro:</b> 1) ter não é <span class="fi">olla</span>: “ele tem olhos azuis” = <span class="fi">hänellä on siniset silmät</span>, não <span class="pala">hän on siniset silmät</span>. 2) Os olhos da pessoa estão inteiros: forma básica, não o partitivo plural <span class="pala">sinisiä silmiä</span>. 3) <span class="fi"><span data-l="pitkä#2">pitkä</span></span> é alto e também comprido; <span class="fi">lyhyt</span> é baixo e também curto.</p>
</div>
<p><b>Treino:</b> <a href="#treino-t17-kuvailu">Descrever: siniset silmät, ruskea tukka</a> · na lição: <a href="#t17">lição 17, parte A</a>.</p>`
  },
  {
    id: 'h-omistusliitteet', kurssissa: ['t17'], osio: 'Pronomes', otsikko: 'O possessivo: nimeni, ystäväni (para reconhecer)', kuvaus: 'Meu, seu, dele como terminação no substantivo: -ni, -si, -nsa, -mme, -nne. Para reconhecer ao ler e ouvir.',
    html: `
<p>Em português, “meu” é uma palavra antes do substantivo. Em finlandês, muitas vezes é uma <b>terminação</b> no próprio substantivo: <span class="fi">nimi → nimeni</span> (o meu nome). Na língua escrita ela é a regra; na fala ela muitas vezes cai (<span class="fi" data-rekisteri="puhe">mun nimi</span>). Neste curso, você só precisa <b>reconhecer</b> essas terminações.</p>
<h3>As seis pessoas</h3>
<table class="taivutus neljannes">
  <tr><th>pessoa</th><th>terminação</th><th>exemplo</th><th>português</th></tr>
  <tr><td><span class="fi">minun</span></td><td><span class="fi pala">-ni</span></td><td><span class="fi">nimeni</span></td><td>o meu nome</td></tr>
  <tr><td><span class="fi">sinun</span></td><td><span class="fi pala">-si</span></td><td><span class="fi pala">nimesi</span></td><td>o seu nome</td></tr>
  <tr><td><span class="fi">hänen</span></td><td><span class="fi pala">-nsa / -nsä</span></td><td><span class="fi pala">nimensä</span></td><td>o nome dele, dela</td></tr>
  <tr><td><span class="fi">meidän</span></td><td><span class="fi pala">-mme</span></td><td><span class="fi pala">nimemme</span></td><td>o nosso nome</td></tr>
  <tr><td><span class="fi">teidän</span></td><td><span class="fi pala">-nne</span></td><td><span class="fi pala">nimenne</span></td><td>o nome de vocês</td></tr>
  <tr><td><span class="fi">heidän</span></td><td><span class="fi pala">-nsa / -nsä</span></td><td><span class="fi pala">nimensä</span></td><td>o nome deles, delas</td></tr>
</table>
<p>O pronome no genitivo pode vir antes: <span class="fi">minun nimeni</span>, <span class="fi pala">sinun nimesi</span>, <span class="fi pala">hänen nimensä</span>. Com “eu” e “você” ele muitas vezes some (<span class="fi">nimeni</span>); com “ele, ela”, o <span class="fi">hänen</span> fica.</p>
<h3>Como a terminação entra</h3>
<p>O <span class="fi pala">-n</span> do genitivo e o <span class="fi pala">-t</span> do plural somem antes dela, e a consoante fica <b>forte</b> (<span class="fi">tukkani</span>, não <span class="fi">tukan</span> + ni):</p>
<table class="taivutus neljannes">
  <tr><th>palavra</th><th>genitivo</th><th>com -ni</th><th>português</th></tr>
  <tr><td><span class="fi">nimi</span></td><td><span class="fi">nimen</span></td><td><span class="fi">nimeni</span></td><td>o meu nome</td></tr>
  <tr><td><span class="fi">numero</span></td><td><span class="fi">numeron</span></td><td><span class="fi">numeroni</span></td><td>o meu número</td></tr>
  <tr><td><span class="fi">ystävä</span></td><td><span class="fi">ystävän</span></td><td><span class="fi">ystäväni</span></td><td>o meu amigo, a minha amiga</td></tr>
  <tr><td><span class="fi">tukka</span></td><td><span class="fi">tukan</span></td><td><span class="fi">tukkani</span></td><td>o meu cabelo (kk forte)</td></tr>
  <tr><td><span class="fi">koti</span></td><td><span class="fi">kodin</span></td><td><span class="fi pala">kotini</span></td><td>a minha casa (t forte)</td></tr>
  <tr><td><span class="fi">veli</span></td><td><span class="fi">veljen</span></td><td><span class="fi pala">veljeni</span></td><td>o meu irmão</td></tr>
  <tr><td><span class="fi">silmälasit</span></td><td><span class="fi">silmälasien</span></td><td><span class="fi">silmälasini</span></td><td>os meus óculos</td></tr>
</table>
<p>Por isso <span class="fi">ystäväni</span> pode ser “o meu amigo”, “os meus amigos” ou “do meu amigo”: o contexto decide. Com posposições também: <span class="fi pala">minun vieressäni</span> (ao meu lado), <span class="fi pala">sinun kanssasi</span> (com você).</p>
<div class="huomio">
  <p><b>Para reconhecer:</b> um <span class="fi pala">-ni</span>, <span class="fi pala">-si</span>, <span class="fi pala">-nsa/-nsä</span>, <span class="fi pala">-mme</span> ou <span class="fi pala">-nne</span> no fim de um substantivo quase sempre é “meu, seu, dele, nosso, de vocês”. A bolha mostra <span class="fi pala">-ni</span> como “meu, minha”.</p>
</div>
<p><b>Treino:</b> <a href="#treino-t17-omistusliite">Reconhecer o -ni: nimeni, ystäväni</a> · na lição: <a href="#t17-b">lição 17, parte B</a>.</p>`
  },
  // ==== t18: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  /* t18: kipu ja keho (sattuu + illatiivi, särkee + partitiivi, minulla on kipeä + perusmuoto, minua sattuu, minulla on
     kuumetta), kehonosat ja terveydenhoidon fraasit. Omistusliite -ni vain tunnistettavana (päätäni; h-pronominit). */
  {
    id: 'h-sattuu', kurssissa: ['t18'], osio: 'Frases úteis', otsikko: 'Dor e corpo: minua sattuu, päätä särkee', kuvaus: 'Onde dói? Polveen sattuu, päätä särkee, minulla on kipeä käsi, minulla on kuumetta: as partes do corpo e as frases do centro de saúde.',
    html: `
<p>Em português, a parte do corpo é o sujeito: “a cabeça dói”, “os joelhos doem”. Em finlandês, os verbos de dor <span class="fi">sattua</span> e <span class="fi">särkeä</span> não têm sujeito. Eles ficam sempre na forma de “ele” (<span class="fi">sattuu, särkee</span>), também quando doem duas pernas, e a parte do corpo vai para outro caso.</p>
<h3>Três jeitos de dizer que dói</h3>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th><th>o caso</th></tr>
  <tr><td><span class="fi">Polveen sattuu.</span></td><td>o joelho dói</td><td><span class="fi">sattuu</span> + ilativo, “para onde?” (<a href="#h-paikallissijat">casos de lugar</a>): <span class="fi">polvi → polveen</span></td></tr>
  <tr><td><span class="fi">Päätä särkee.</span></td><td>a cabeça dói (dor que lateja, que não passa)</td><td><span class="fi">särkee</span> + partitivo (<a href="#h-partitiivi">partitivo</a>): <span class="fi">pää → päätä</span></td></tr>
  <tr><td><span class="fi">Minulla on kipeä käsi.</span></td><td>estou com a mão doendo</td><td><span class="fi">minulla on</span> + <span class="fi">kipeä</span> + forma básica</td></tr>
</table>
<p>A pessoa que sente a dor vai no partitivo: <span class="fi">Minua sattuu.</span> (está doendo em mim), <span class="fi">Sattuuko sinua?</span> (está doendo?). Também se usa <span class="fi pala">minuun sattuu</span>, com a forma de “para onde?”: as duas são comuns. “A minha cabeça” leva o sufixo <span class="fi pala">-ni</span> (meu, minha; <a href="#h-pronominit">pronomes</a>): <span class="fi">Päätäni särkee.</span> = <span class="fi">Minun päätäni särkee.</span> Na fala, o <span class="fi pala">-ni</span> quase sempre cai: <span class="fi" data-rekisteri="puhe">mun päätä särkee</span>.</p>
<h3>As partes do corpo</h3>
<table class="taivutus neljannes">
  <tr><th>o corpo</th><th>onde dói? (<span class="fi">sattuu</span>)</th><th>dói (<span class="fi">särkee</span>)</th><th>com <span class="fi">kipeä</span></th></tr>
  <tr><td><span class="fi">pää</span><span class="kaannos" lang="pt-BR">a cabeça</span></td><td><span class="fi">päähän</span></td><td><span class="fi">päätä</span></td><td><span class="fi">kipeä pää</span></td></tr>
  <tr><td><span class="fi">kurkku</span><span class="kaannos" lang="pt-BR">a garganta</span></td><td><span class="fi">kurkkuun</span></td><td>–</td><td><span class="fi">kipeä kurkku</span></td></tr>
  <tr><td><span class="fi">rinta</span><span class="kaannos" lang="pt-BR">o peito</span></td><td><span class="fi">rintaan</span></td><td>–</td><td><span class="fi">kipeä rinta</span></td></tr>
  <tr><td><span class="fi">vatsa</span><span class="kaannos" lang="pt-BR">a barriga</span></td><td><span class="fi">vatsaan</span></td><td><span class="fi">vatsaa</span></td><td><span class="fi">kipeä vatsa</span></td></tr>
  <tr><td><span class="fi">selkä</span><span class="kaannos" lang="pt-BR">as costas</span></td><td><span class="fi">selkään</span></td><td><span class="fi">selkää</span></td><td><span class="fi">kipeä selkä</span></td></tr>
  <tr><td><span class="fi">käsi</span><span class="kaannos" lang="pt-BR">a mão, o braço</span></td><td><span class="fi">käteen</span></td><td><span class="fi">kättä</span></td><td><span class="fi">kipeä käsi</span></td></tr>
  <tr><td><span class="fi">jalka</span><span class="kaannos" lang="pt-BR">a perna, o pé</span></td><td><span class="fi">jalkaan</span></td><td><span class="fi">jalkaa</span></td><td><span class="fi">kipeä jalka</span></td></tr>
  <tr><td><span class="fi">polvi</span><span class="kaannos" lang="pt-BR">o joelho</span></td><td><span class="fi">polveen</span></td><td><span class="fi">polvea</span></td><td><span class="fi">kipeä polvi</span></td></tr>
</table>
<p>As palavras mudam por dentro como sempre: <span class="fi">käsi → käteen, kättä</span>, <span class="fi">polvi → polveen</span>. A bolha de cada palavra mostra as formas. <span class="fi">käsi</span> é a mão e também o braço; <span class="fi">jalka</span>, o pé e também a perna; <span class="fi">kurkku</span> também é pepino.</p>
<h3>Febre, frio, doente</h3>
<ul class="esim">
  <li class="s" data-pt="Estou com febre.">Minulla on kuumetta.</li>
  <li class="s" data-pt="Você está com febre? – Não.">Onko sinulla kuumetta? – Ei ole.</li>
  <li class="s" data-pt="Estou com frio.">Minulla on kylmä.</li>
  <li class="s" data-pt="Estou doente.">Olen sairas.</li>
</ul>
<p><span class="fi">kuume</span> (febre) vai no partitivo, como uma quantidade. Frio e calor vão com <span class="fi">minulla on</span> na forma básica (<span class="fi">kylmä, kuuma</span>). “Doente” é <span class="fi">sairas</span>; <span class="fi">kipeä</span> é a parte que dói (e, na fala, também “doente”: <span class="fi">Olen kipeä.</span>).</p>
<h3>No centro de saúde</h3>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Mikä hätänä?</span></td><td>o que houve? o que você tem?</td></tr>
  <tr><td><span class="fi">Mihin sattuu?</span></td><td>onde dói?</td></tr>
  <tr><td><span class="fi">Milloin se alkoi?</span></td><td>quando começou?</td></tr>
  <tr><td><span class="fi">Ei mitään vakavaa.</span></td><td>nada grave</td></tr>
  <tr><td><span class="fi">Käsi on kunnossa.</span></td><td>a mão está bem</td></tr>
  <tr><td><span class="fi"><span data-l="levätä:imper.2s">Lepää</span> ja <span data-l="juoda:imper.2s">juo</span> vettä.</span></td><td>descanse e beba água</td></tr>
  <tr><td><span class="fi">Soita yksi yksi kaksi!</span></td><td>ligue para o 112! (o <span class="fi">hätänumero</span>, número de emergência)</td></tr>
</table>
<p>Na Finlândia, doença comum vai para o <span class="fi">terveyskeskus</span> (centro de saúde); urgência à noite e no fim de semana, para a <span class="fi">päivystys</span> (pronto-socorro); emergência, 112.</p>
<div class="huomio">
  <p><b>Armadilhas do brasileiro:</b> 1) a parte do corpo não é sujeito: <span class="fi">päähän sattuu</span>, <span class="fi">päätä särkee</span>, nunca <span class="fi pala">pää sattuu</span>. 2) O verbo não vai para o plural: <span class="fi">sattuu</span>, <span class="fi">särkee</span>. 3) “Não se mexa!” não tem “se”: <span class="fi">Älä liiku!</span> (<a href="#h-imperatiivi">imperativo</a>).</p>
</div>
<p><b>Treino:</b> <a href="#treino-t18-sattuu">Onde dói? sattuu, särkee, kipeä</a> · <a href="#treino-t18-keho">O corpo</a> · <a href="#treino-tilanne-terveyskeskus">No centro de saúde</a> · na lição: <a href="#t18-b">lição 18, parte B</a>.</p>`
  },
  // ==== t19: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  /* t19: perfekti (olla + partisiippi; partisiippi oppitunnilta 15), perfekti vai imperfekti. Muodot taivutuskoneelta
     (part.yks, part.mon). Pluskvamperfekti vain mainintana (h-aikamuodot). */
  {
    id: 'h-perfekti', kurssissa: ['t15', 't19'], osio: 'Verbos', otsikko: 'Perfeito: olen käynyt, oletko nähnyt', kuvaus: 'Já fui, você já viu?, ainda não comi: olla + particípio, e quando usar o perfeito em vez do passado.',
    html: `
<p>O perfeito (<span class="fi">perfekti</span>) diz o que já aconteceu <b>até agora</b>, sem dizer quando: <span class="fi">Olen käynyt Ouro Pretossa.</span> = já fui a Ouro Preto. A forma tem duas partes: o verbo <span class="fi">olla</span> no presente e o particípio que você conhece da negação do passado (lição 15: <span class="fi">en käynyt</span>). Aqui o <span class="fi">olla</span> não é “ser” nem “estar”: é só o ajudante, como o “ter” de “tenho feito”.</p>
<h3>As pessoas</h3>
<table class="taivutus neljannes">
  <tr><th>pessoa</th><th>afirmativo</th><th>negativo</th><th>português</th></tr>
  <tr><td><span class="fi">minä</span></td><td><span class="fi">olen käynyt</span></td><td><span class="fi">en ole käynyt</span></td><td>eu já fui · não fui</td></tr>
  <tr><td><span class="fi">sinä</span></td><td><span class="fi">olet käynyt</span></td><td><span class="fi">et ole käynyt</span></td><td>você já foi · não foi</td></tr>
  <tr><td><span class="fi">hän</span></td><td><span class="fi">on käynyt</span></td><td><span class="fi">ei ole käynyt</span></td><td>ele, ela já foi · não foi</td></tr>
  <tr><td><span class="fi">me</span></td><td><span class="fi">olemme käyneet</span></td><td><span class="fi">emme ole käyneet</span></td><td>nós já fomos · não fomos</td></tr>
  <tr><td><span class="fi">te</span></td><td><span class="fi">olette käyneet</span></td><td><span class="fi">ette ole käyneet</span></td><td>vocês já foram · não foram</td></tr>
  <tr><td><span class="fi">he</span></td><td><span class="fi">ovat käyneet</span></td><td><span class="fi">eivät ole käyneet</span></td><td>eles, elas já foram · não foram</td></tr>
</table>
<p>O <span class="fi">olla</span> muda com a pessoa; o particípio, só com o número: <span class="fi pala">-nut/-nyt</span> no singular, <span class="fi pala">-neet</span> no plural. Na negação, <span class="fi">ole</span> fica sempre igual. <b>Pergunta:</b> <span class="fi pala">-ko/-kö</span> no <span class="fi">olla</span>: <span class="fi">Oletko käynyt? Onko hän nähnyt? Oletteko syöneet?</span> <b>Resposta curta:</b> <span class="fi">Olen. – En ole.</span></p>
<h3>O particípio de cada tipo (lição 15)</h3>
<table class="taivutus neljannes">
  <tr><th>tipo</th><th>infinitivo</th><th>singular</th><th>plural</th></tr>
  <tr><td>1: tire o <span class="fi pala">-a/-ä</span></td><td><span class="fi">puhua, ostaa, oppia</span><span class="kaannos" lang="pt-BR">falar, comprar, aprender</span></td><td><span class="fi">puhunut, ostanut, oppinut</span></td><td><span class="fi">puhuneet, ostaneet, oppineet</span></td></tr>
  <tr><td>2: tire o <span class="fi pala">-da/-dä</span></td><td><span class="fi">syödä, juoda, käydä, nähdä</span><span class="kaannos" lang="pt-BR">comer, beber, ir, ver</span></td><td><span class="fi">syönyt, juonut, käynyt, nähnyt</span></td><td><span class="fi">syöneet, juoneet, käyneet, nähneet</span></td></tr>
  <tr><td>3: consoante dupla</td><td><span class="fi">olla, tulla, mennä</span><span class="kaannos" lang="pt-BR">ser, vir, ir</span></td><td><span class="fi">ollut, tullut, mennyt</span></td><td><span class="fi">olleet, tulleet, menneet</span></td></tr>
  <tr><td>4 e 5: <span class="fi pala">-nnut</span></td><td><span class="fi">tavata, haluta, tarvita</span><span class="kaannos" lang="pt-BR">encontrar, querer, precisar</span></td><td><span class="fi">tavannut, halunnut, tarvinnut</span></td><td><span class="fi">tavanneet, halunneet, tarvinneet</span></td></tr>
</table>
<p>A consoante é a do infinitivo: <span class="fi">nukkua → nukkunut</span>, <span class="fi">tavata → tavannut</span>. A bolha de cada verbo mostra o particípio.</p>
<h3>Perfeito ou passado?</h3>
<p>O português diz “fui” nos dois casos; o finlandês separa:</p>
<table class="taivutus neljannes">
  <tr><th>finlandês</th><th>português</th><th>por quê</th></tr>
  <tr><td><span class="fi">Oletko koskaan käynyt Brasiliassa?</span></td><td>Você já foi ao Brasil alguma vez?</td><td>até agora, sem quando: perfeito</td></tr>
  <tr><td><span class="fi">Kävin Brasiliassa viime vuonna.</span></td><td>Fui ao Brasil no ano passado.</td><td>um quando terminado: passado</td></tr>
  <tr><td><span class="fi">Olen ollut täällä kaksi viikkoa.</span></td><td>Estou aqui há duas semanas.</td><td>começou antes e continua: perfeito</td></tr>
  <tr><td><span class="fi">Jay on syönyt.</span></td><td>O Jay já comeu (e não tem fome).</td><td>o resultado vale agora: perfeito</td></tr>
</table>
<p>Com o perfeito vêm muitas vezes <span class="fi">jo</span> (já), <span class="fi">koskaan</span> (alguma vez; com negação, nunca), <span class="fi">vielä</span> + negação (ainda não) e <span class="fi">kolme kertaa</span> (três vezes até agora). Com <span class="fi">eilen, viime viikolla, kaksi päivää sitten</span> ou uma hora (<span class="fi">kello kuusi</span>), use o passado.</p>
<ul class="esim">
  <li class="s" data-pt="Eu nunca fui a Inhotim.">En ole koskaan käynyt Inhotimissa.</li>
  <li class="s" data-pt="Ainda não comemos.">Emme ole vielä syöneet.</li>
  <li class="s" data-pt="Vocês já viram pedra-sabão?">Oletteko nähneet vuolukiveä?</li>
</ul>
<div class="huomio">
  <p><b>Armadilha do brasileiro:</b> “estou aqui há duas semanas” é presente em português e perfeito em finlandês: <span class="fi">olen ollut täällä kaksi viikkoa</span>. E na negação o objeto vai para o partitivo (lição 12): <span class="fi">olen nähnyt kultaisen kirkon</span>, mas <span class="fi">en ole nähnyt kultaista kirkkoa</span>. Sem <span class="fi">ole</span>, a negação é do passado: <span class="fi">en käynyt</span> = não fui (naquele dia).</p>
</div>
<p><b>Treino:</b> <a href="#treino-t19-perfekti">O perfeito</a> · <a href="#treino-t19-perfekti-kielto">Ainda não: en ole käynyt</a> · <a href="#treino-t19-kuuntele">Ouça: perfeito ou passado?</a> · na lição: <a href="#t19-b">lição 19, parte B</a>.</p>`
  },
  // ==== t20: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
  /* t20: passiivi preesens (muodostus tyypeittäin, kielto, objekti, Mennään!-kehotus ja puhekielen me mennään). Muodot
     taivutuskoneelta (solut pass ja pass.kielto: tietueen pass-kenttä); ei mennä = perusmuodon näköinen, siksi data-l.
     Imperfektin passiivi (saunottiin) vain mainintana. */
  {
    id: 'h-passiivi', kurssissa: ['t02', 't13', 't14', 't16', 't20'], osio: 'Verbos', otsikko: 'Passivo: Suomessa saunotaan, mennään!', kuvaus: 'O que se faz, sem dizer quem: saunotaan, uidaan, puhutaan. E o “vamos!” e o “nós” da rua: mennään, me mennään.',
    html: `
<p>O passivo finlandês (<span class="fi">passiivi</span>) diz o que se faz <b>sem dizer quem faz</b>: <span class="fi">Suomessa saunotaan.</span> = na Finlândia se faz sauna. É o “se” do português (“fala-se sueco”, “aqui se trabalha”) ou o “a gente” de sentido geral. A forma é uma só: não muda com a pessoa e não tem sujeito.</p>
<ul class="esim">
  <li class="s" data-pt="Na Finlândia se faz sauna.">Suomessa saunotaan.</li>
  <li class="s" data-pt="Depois da sauna se nada no mar.">Saunan jälkeen uidaan meressä.</li>
  <li class="s" data-pt="Em Hanko se fala finlandês e sueco.">Hangossa puhutaan suomea ja ruotsia.</li>
  <li class="s" data-pt="No juhannus se vai para a casa de campo.">Juhannuksena mennään mökille.</li>
</ul>
<h3>A forma</h3>
<p><b>Tipo 1</b> (<span class="fi">puhua, saunoa, heittää</span>): parta do “eu” do presente, tire o <span class="fi pala">-n</span> e ponha <span class="fi pala">-taan/-tään</span>. A consoante fica como no “eu”, fraca quando há gradação: <span class="fi">heitän → heitetään</span>. Se o radical termina em <span class="fi pala">-a/-ä</span>, essa vogal vira <span class="fi pala">e</span>: <span class="fi">aja- → ajetaan</span>, <span class="fi">heitä- → heitetään</span>.</p>
<p><b>Os outros tipos</b> (<span class="fi">uida, mennä, olla, grillata</span>): o infinitivo + <span class="fi pala">-an/-än</span>: <span class="fi">uida → uidaan</span>, <span class="fi">mennä → mennään</span>.</p>
<table class="taivutus neljannes">
  <tr><th>verbo</th><th>como se forma</th><th>passivo</th><th>português</th></tr>
  <tr><td><span class="fi">puhua</span></td><td>tipo 1: <span class="fi">puhun → puhu-</span></td><td><span class="fi">puhutaan</span></td><td>fala-se</td></tr>
  <tr><td><span class="fi">saunoa</span></td><td>tipo 1: <span class="fi">saunon → sauno-</span></td><td><span class="fi">saunotaan</span></td><td>faz-se sauna</td></tr>
  <tr><td><span class="fi">tanssia</span></td><td>tipo 1: <span class="fi">tanssin → tanssi-</span></td><td><span class="fi">tanssitaan</span></td><td>dança-se</td></tr>
  <tr><td><span class="fi">heittää</span></td><td>tipo 1: <span class="fi">heitän → heitä-</span>, ä → e</td><td><span class="fi">heitetään</span></td><td>joga-se</td></tr>
  <tr><td><span class="fi">kalastaa</span></td><td>tipo 1: <span class="fi">kalastan → kalasta-</span>, a → e</td><td><span class="fi">kalastetaan</span></td><td>pesca-se</td></tr>
  <tr><td><span class="fi">uida</span></td><td>tipo 2: infinitivo + <span class="fi pala">-an</span></td><td><span class="fi">uidaan</span></td><td>nada-se</td></tr>
  <tr><td><span class="fi">mennä</span></td><td>tipo 3: infinitivo + <span class="fi pala">-än</span></td><td><span class="fi">mennään</span></td><td>vai-se; vamos!</td></tr>
  <tr><td><span class="fi">grillata</span></td><td>tipo 4: infinitivo + <span class="fi pala">-an</span></td><td><span class="fi">grillataan</span></td><td>grelha-se</td></tr>
</table>
<p>Para reconhecer: o passivo termina em <span class="fi pala">-taan/-tään</span> (ou <span class="fi pala">-daan, -laan, -naan…</span>: <span class="fi">uidaan, ollaan, mennään</span>). Atenção: <span class="fi">osaan, grillaan</span> também terminam em <span class="fi pala">-aan</span>, mas são “eu”. A bolha de cada verbo mostra o passivo na linha “passivo”. O passivo também tem passado (<span class="fi pala">saunottiin</span> = fez-se sauna) e perfeito; este curso fica no presente.</p>
<h3>Negação e objeto</h3>
<p><b>Negação:</b> <span class="fi">ei</span> + o passivo sem o <span class="fi pala">-an/-än</span> do fim: <span class="fi">ei saunota</span> (não se faz sauna), <span class="fi">ei puhuta</span> (não se fala), <span class="fi">ei <span data-l="mennä:pass.kielto">mennä</span></span> (não se vai). Nos tipos 2 a 6 essa forma é igual ao infinitivo. Um costume do verão: <span class="fi">Juhannusyönä ei nukuta.</span> (na noite do juhannus não se dorme).</p>
<p><b>Objeto:</b> o objeto parcial continua no partitivo: <span class="fi">Rannalla grillataan makkaraa.</span> (assa-se linguiça). O objeto inteiro fica na <b>forma básica</b>, sem o <span class="fi pala">-n</span> da lição 12: <span class="fi">Juhannuksena poltetaan kokko.</span> (acende-se a fogueira) × <span class="fi">Hiisi polttaa kokon.</span> (o Hiisi acende a fogueira). Exceto os pronomes pessoais, que mantêm o <span class="fi pala">-t</span>: <span class="fi">minut, sinut, hänet</span>…</p>
<h3>Mennään! O passivo como convite</h3>
<p>Sem sujeito e em tom de proposta, o passivo funciona como convite: “vamos…!”. Você usa desde a lição 2.</p>
<ul class="esim">
  <li class="s" data-pt="Vamos para a sauna!">Mennään saunaan!</li>
  <li class="s" data-pt="Vamos nadar!">Uidaan!</li>
  <li class="s" data-pt="Vamos grelhar linguiça!">Grillataan makkaraa!</li>
</ul>
<h3>Na rua: me mennään = nós vamos</h3>
<p>Na língua falada, o “nós” é muitas vezes o pronome <span class="fi">me</span> + passivo (lições 13 e 16). O passivo sozinho, sem <span class="fi">me</span>, é muito comum para planos e convites, na fala e na escrita informal: <span class="fi">Mennään!</span> (vamos!), <span class="fi">Tehdään se!</span> (vamos fazer isso!), <span class="fi">Nähdään!</span> (a gente se vê!). O “nós” da escrita formal é <span class="fi">menemme</span>; <span class="fi" data-rekisteri="puhe">me mennään</span> é da fala: reconheça.</p>
<table class="taivutus neljannes">
  <tr><th>escrito</th><th>na rua</th><th>português</th></tr>
  <tr><td><span class="fi">me menemme</span></td><td><span class="fi" data-rekisteri="puhe">me mennään</span></td><td>nós vamos</td></tr>
  <tr><td><span class="fi">me olemme</span></td><td><span class="fi" data-rekisteri="puhe">me ollaan</span></td><td>nós somos, estamos</td></tr>
  <tr><td><span class="fi">me saunomme</span></td><td><span class="fi" data-rekisteri="puhe">me saunotaan</span></td><td>nós fazemos sauna</td></tr>
</table>
<div class="huomio">
  <p><b>Armadilha do brasileiro:</b> o passivo sem pessoa diz o que se faz em geral, como o “se” ou o “a gente” de sentido geral: <span class="fi">Suomessa saunotaan</span> (na Finlândia se faz sauna, todo mundo). E o passivo não tem pessoa: <span class="pala">saunotaanme</span> não existe.</p>
</div>
<p><b>Treino:</b> <a href="#treino-t20-passiivi">O passivo: Suomessa saunotaan</a> · <a href="#treino-t20-kuuntele">Ouça: saunotaan, saunomme ou saunoisimme?</a> · na lição: <a href="#t20-b">lição 20, parte B</a>.</p>`
  },
  // ==== k04: Gramática-sivut (lisää tämän rivin perään, pilkku sivun perään) ====
];

/* Auditointi 5, A5-M5 (käyttäjä 17.10.2026: rikkinäiset ja valehtelevat viittaukset pois): jokaisen Gramática-sivun
   alkuun rivi ”← Voltar” (selaimen historia; sivulle suoraan tultaessa Gramátican etusivu) ja ”Aparece no curso:
   lição N”. kurssissa = oppitunnit (sisällyksen id), joissa sivun aihe oikeasti opetetaan tai käytetään: lähteet
   assets/sisallys.js, docs/SUUNNITELMA.md §4 ja oppituntien kielioppikorttien hakuosa-linkit. Epävarma = ei mukana.
   Valmis oppitunti → #tNN, tuleva → #plano-tNN (”em preparação”), joten linkki ei valehtele, kun oppitunti valmistuu.
   Siirretty sivu (h-puhekieli → Língua falada) ei saa riviä. Ulkoasu: .osa-nav (sama pilleririvi kuin oppitunnin osissa). */
(function () {
  const sis = Kurssi.sisallys || [];
  const valmis = id => (Kurssi.oppitunnit || []).some(o => o.id === id);
  const nimi = id => { const x = sis.find(y => y.id === id); return x ? 'lição ' + x.lyhyt : null; };
  for (const h of Kurssi.hakuosa) {
    if (h.siirretty) continue;
    const ids = (h.kurssissa || []).filter(nimi);
    const nyt = ids.filter(valmis).map(id => `<a href="#${id}">${nimi(id)}</a>`);
    const tulossa = ids.filter(id => !valmis(id)).map(id => `<a href="#plano-${id}">${nimi(id)}</a>`);
    let rivi = '<nav class="osa-nav" aria-label="Esta página no curso"><a href="#gramatica" data-takaisin>← Voltar</a>';
    if (ids.length) rivi += '<span>Aparece no curso:</span>' + nyt.join('') + (tulossa.length ? `<span>${nyt.length ? 'e, ' : ''}em preparação:</span>` + tulossa.join('') : '');
    h.html = rivi + '</nav>\n' + h.html;
  }
  // ”← Voltar”: selaimen takaisin, jos sivustolla on liikuttu (hashchange); muuten linkki vie Gramátican etusivulle.
  if (typeof document === 'undefined' || typeof history === 'undefined') return;
  let sisaiset = 0;
  window.addEventListener('hashchange', () => { sisaiset++; });
  document.addEventListener('click', e => {
    const a = e.target && e.target.closest ? e.target.closest('a[data-takaisin]') : null;
    if (!a || sisaiset < 1 || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    sisaiset -= 2;   // history.back() tuottaa itse yhden hashchangen
    history.back();
  });
})();
