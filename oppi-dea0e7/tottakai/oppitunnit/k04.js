/* Tottakai, loppukertaus (k04): A primeira exposição da Maia, oppitunnit 0–20 (OPPITUNNIT_6_20.md §5c ”Kertaus K4”,
   docs/RUNKO_13_20.md §10; joulukuu 2027, Helsinki, vuosi Brasilian matkan jälkeen; avajaiset torstaina, k04-b-3).
   Oma materiaali, ei kirjan tekstiä. Kertaus ei opeta uutta kielioppia; vähintään 95 % sanoista on opetettu oppitunneilla
   0–20 (tarkistus: node tottakai/tools/puuttuvat.js k04). Omistajan lukitut dialogit 8.11.2026
   (ass/luonnokset/k04-a-1_lopullinen.md, k04-b-1_lopullinen.md, k04-b-2_lopullinen.md, k04-b-3_lopullinen.md) ovat
   sivulla sellaisinaan; materiaalikierros 8.11.2026 (ass/oppitunnit/k04.md §6). Kaksi osaa omina sivuinaan (TYONKULKU 11):
   - osa A (#k04): Kapybaran ja Manaatin viimeinen kylpyläkohtaus portugaliksi (osan B koukku ilman pomoa: Kapybara ei
     muista kysymystään); Maian ensimmäinen oma näyttely ”Kaksi kotia” Vaasankadulla: uutinen, dialogi k04-a-1 (16
     repliikkiä: kertoja, Purjo, Hiisi, Maia, Jay; Purjon rallienglanti .pala lang="en"; Jayn taulu kainalosauvoilla
     Copacabanalla uutena vuotena; Hiisi saa Hanko-taulun lahjana), videopuhelu Belo Horizonteen kertojan tekstissä
     portugaliksi (Jay puhuu portugalia ilman apua, Anderson: Kuuma!), Frases prontas, linkki kortteihin, tehtävät 1–3,
     kulttuuri (avajaiset ja katutaide; siirretty osasta B, RUNKO §10.5: katkaisee tehtäväputken), tehtävät 4–6, Na rua
     -tunnistus tehtävänä 7, kotitehtävä.
   - osa B (#k04-b): muisto kesäkuulta 2027 (silta galleriasta, tausta korppoo): pyöreä talo k04-b-1 (omistajan 13
     repliikkiä; Frases prontas); lämmittely aikamuodoilla (tehtävä 8, kohteet pyöreästä talosta ja näyttelystä);
     Hämeentie lumessa klo 23: Capivara rekineen, kasvokkain-dialogi k04-b-3 (mikä päivä tänään on, vihreät lasit
     Peixe-boin päässä, otus kadun päässä); ”Socorro!” (.pomo-lahja), pomotaistelu Aikakoneen golem (assets/pomo.js);
     ”Eu sei” koko kurssista (siirretty osasta A: osan A pituus, R4; Capivaran jäähyväiset viittaavat siihen);
     jäähyväiset; viimeisenä talon lähtö k04-b-2 (kertoja) ja Futuro-ruutu (omistaja q30 b ja 23.10.2026).
   Suomea puhuvat Maia, Jay, Purjo, Hiisi, Uuno, Eenok ja kertoja; Martan, Walkerin ja Andersonin sanat ovat portugaliksi
   kertojan tekstissä (Andersonin Kuuma! span.fi:nä). Kuuntelukoe (TYONKULKU 14): äänitteessä vain paljas muoto.
   Kirjakieli kaikkialla; puhekieli vain Na rua -nurkassa. Jayn taivutus etuvokaalein (Jaylle, Jayllä; 17.10.2026).
   Purjon asunto on Arabiassa (X12). Maia ei juo kahvia (X13). */
Kurssi.lisaa({
  id: 'k04',
  lyhyt: 'R4',
  jakso: 'Revisão final 0–20',
  otsikko: 'A primeira exposição da Maia: revisão final das lições 0–20',
  lahde: 'Revisão final: os casos (partitivo, genitivo, lugar, -na e -ksi, plural), os tempos (presente, passado, passado negativo, perfeito), ordens, o condicional com jos e o passivo · Parte B: a luta final',
  aiheet: ['aika', 'vapaa', 'ihmiset', 'viestinta'],
  hahmot: {
    kertoja: { nimi: 'Capivara', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'geóloga e pintora; abre a primeira exposição dela em Helsinque' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'geólogo; está num quadro da Maia e, depois de um ano de estudo, fala português com a família dela' },
    purjo: { nimi: 'Purjo', tyyppi: 'nainen', vaihto: 4, kuvaus: 'mãe do Jay; compraria todos os quadros' },
    hiisi: { nimi: 'Hiisi', tyyppi: 'mies', vaihto: 6, kuvaus: 'irmão do Jay; ganha de presente o quadro em que ele dirige rápido demais' },
    uutiset: { nimi: 'Notícias', tyyppi: 'mies', vaihto: 8, kuvaus: 'locutor do noticiário (lê a notícia do jornal)' },
    uuno3: { nimi: 'Uuno', tyyppi: 'mies', vaihto: 7, kuvaus: 'turista finlandês da viagem da carne; macacão azul-claro, cabelo platinado; vizinho na casa redonda' },
    eenok3: { nimi: 'Eenok', tyyppi: 'mies', vaihto: 8, kuvaus: 'irmão do Uuno; o mesmo macacão azul-claro; assa linguiça na casa redonda' }
  },

  // Loppukertauksen sanasto: oppituntien 16–20 avainsanat ja koko kurssin tärkeimmät sanat (sanastosivu ja visa).
  sanasto: [
    'näyttely', 'taulu', 'maalata', 'myydä', 'vuosi', 'sitten', 'jo', 'koskaan', 'vielä', 'ennen', 'jos', 'onneksi olkoon',
    'ylpeä', 'lahja', 'juhla', 'juhlia', 'tanssia', 'laulaa', 'muuttua', 'iloinen', 'väsynyt', 'rohkea', 'lapsi', 'nuori',
    'silmä', 'tukka', 'pitkä', 'lyhyt', 'vaalea', 'ruskea', 'ystävä', 'kadota',
    'sattua', 'särkeä', 'kipeä', 'kuume', 'pää', 'käsi', 'jalka', 'polvi', 'odottaa', 'juosta', 'sankari',
    'käydä', 'nähdä', 'oppia', 'kerta', 'kaupunki',
    'juhannus', 'mökki', 'sauna', 'saunoa', 'uida', 'meri', 'tulkki', 'ihana', 'pyöreä', 'moottori', 'makkara', 'grillata', 'senkin possu',
    'kiitos', 'anteeksi', 'olla', 'mennä', 'tulla', 'puhua', 'ymmärtää', 'haluta', 'voida', 'ostaa', 'syödä', 'juoda',
    'nukkua', 'raha'
  ],

  osat: [
    {
      id: 'a', otsikko: 'Parte A · A exposição da Maia',
      html: `
<ul class="tavoitteet">
  <li>Parte A: a primeira exposição da Maia, um ano depois do Brasil, só com o que você já aprendeu; uma prova curta de escuta e seis exercícios que misturam as lições 0 a 20. Os dois quadros do curso inteiro estão na Gramática da lição.</li>
  <li>Parte B: o Capivara não sabe que dia é hoje, e no fim da rua, no escuro, tem uma criatura que também não sabe.</li>
</ul>

<section class="osio">
  <h2>No Spa do Capivara, pela última vez</h2>
  <p><span class="ryhma" data-hahmot="kertoja,manaatti"></span></p>
  <p><b>Capivara:</b> Spa pela última vez! Água quente, mandarina na cabeça e vinte e uma lições para revisar, da 0 à 20. Eu lembro de todas. Do primeiro <span class="fi">Moi!</span>, do bolo da lição 4, do Jay perdido no centro, da sauna em Korppoo. Das outras eu lembro mais ou menos. Mas com carinho.</p>
  <p><b>Peixe-boi:</b> A revisão final. Depois dela, nenhuma lição nova. Eu esperei o curso inteiro por este dia.</p>
  <p><b>Capivara:</b> Passou um ano desde a viagem ao Brasil. É dezembro de novo, mas desta vez em Helsinque, com neve e escuro às três e meia da tarde. Hoje a Maia abre a primeira exposição só dela. A Purjo e o Hiisi vêm, e o Walker e a Marta ligam de Belo Horizonte. Depois você mostra o que sabe. E na parte B eu tenho uma pergunta muito importante para a Maia. Só preciso lembrar qual.</p>
  <p><b>Peixe-boi:</b> Ele não sabe nem que dia é hoje. Eu também não sei, mas eu não pergunto.</p>
</section>

<p data-paikka="helsinki-lumi">Dezembro de 2027, um ano depois do Natal em Belo Horizonte. Em Helsinque, a neve cobre as calçadas. Numa galeria pequena da Vaasankatu, em Sörnäinen, a duas quadras de casa, estão pendurados vinte quadros da Maia. A exposição se chama <span class="fi">Kaksi kotia</span>, “duas casas”: Belo Horizonte e Helsinque. Na parede estão o Mercado Central, a festa de rua, o Anderson vermelho na sauna de Korppoo e, num quadro grande, o Jay de branco e de muletas, debaixo dos fogos do Ano-Novo em Copacabana (lição 19). Na Habituuri (lição 9), a Maia vendeu o primeiro quadro numa feira; agora a exposição inteira é dela. E o Jay passou o ano estudando português, como prometeu no aeroporto do Rio: hoje ele conversa com a família da Maia sem intérprete.</p>

<div class="dokumentti uutinen" lang="fi-FI">
  <p class="uutinen-lehti">Uutiset · Helsinki</p>
  <p class="s uutinen-otsikko" data-h="uutiset" data-pt="Geóloga pinta duas casas">Geologi maalaa kaksi kotia</p>
  <div class="ficha-foto" data-hahmo="maia"></div>
  <p class="s" data-h="uutiset" data-pt="A Maia é geóloga e artista, de Belo Horizonte.">Maia on geologi ja taiteilija Belo Horizontesta.</p>
  <p class="s" data-h="uutiset" data-pt="A exposição é em Helsinque, em dezembro.">Näyttely on Helsingissä joulukuussa.</p>
  <!-- Omistaja 10.11.2026: oppijan t17-ilmoitus palaa lehteen (kuva piirretään nimestä ja väreistä, assets/kuvitus.js kadonnut).
       Piilossa, jos ilmoitusta ei ole täytetty. Ei ääntä: rivit ovat oppijan tekstiä. -->
  <div class="uutinen-kadonnut" data-lomake="t17-ilmoitus" hidden>
    <div class="ficha-foto"></div>
    <p class="uutinen-valiotsikko">Yhä kadonnut: <span data-kentta="nimi"></span></p>
    <p data-kentta="kuvaus"></p>
    <p>Yhdeksänkymmentäkaksi kiloa. Viimeksi nähty rannalla Ipanemassa.</p>
  </div>
</div>

<figure class="oma-taulu" data-lomake="t06-hakemus"
  data-teksti-oma="Num canto da galeria, a Maia pendurou um convidado: o seu quadro da Habituuri (lição 7)."><figcaption></figcaption></figure>

<section class="osio" data-paikka="vaasankatu-muraali">
  <h2>Diálogo: Näyttelyssä</h2>
  <p class="ohje">Ouça primeiro sem tradução. Procure um verbo de cada tempo: um passado (<span class="fi">ajoimme, maalasin</span>), um perfeito (<span class="fi">olen maalannut</span>), um condicional com <span class="fi">jos</span>, uma ordem para vocês e um passivo. Depois ouça de novo com a <b>Tradução</b> ligada.</p>
  <div class="kpl" id="k04-dialogi" data-nimi="Ouvir o diálogo">
    <p class="s" data-h="kertoja" data-pt="Hoje, na Vaasankatu, é a primeira exposição individual da Maia, “Duas casas”. A Purjo e o Hiisi entram.">Vaasankadulla on tänään Maian ensimmäinen oma näyttely, ”Kaksi kotia”. Purjo ja Hiisi tulevat sisään.</p>
    <p class="s" data-h="purjo" data-pt="Kongratsuleisöns, querida! Parabéns! Tenho tanto orgulho de você."><span class="pala" lang="en">Kongratsuleisöns</span>, kulta! Onneksi olkoon! Olen niin ylpeä sinusta.</p>
    <p class="s" data-h="hiisi" data-pt="A gente veio de carro de Arabia. Quatro minutos.">Ajoimme tänne Arabiasta. Neljä minuuttia.</p>
    <p class="s" data-h="purjo" data-pt="Rápido demais! Fiquei de olhos fechados a viagem toda. Agora eu abro… Nossa, quantos quadros!">Liian nopeasti! Pidin silmät kiinni koko matkan. Nyt avaan ne… Voi, kuinka monta taulua!</p>
    <p class="s" data-h="maia" data-pt="São vinte. Pintei o primeiro há um ano, no Brasil. Desde então eu pinto toda noite.">Niitä on kaksikymmentä. Maalasin ensimmäisen vuosi sitten Brasiliassa. Sen jälkeen olen maalannut joka ilta.</p>
    <p class="s" data-h="jay" data-pt="Olhem! Naquele quadro sou eu em Copacabana, no Ano-Novo.">Katsokaa! Tuossa taulussa olen minä Copacabanalla uutena vuotena.</p>
    <p class="s" data-h="maia" data-pt="Naquela hora o seu pé estava machucado. Agora está bom de novo.">Silloin sinulla oli kipeä jalka. Nyt se on taas kunnossa.</p>
    <p class="s" data-h="jay" data-pt="E eu posso beber cerveja de novo. A água era horrível.">Ja saan taas juoda olutta. Vesi oli kamalaa.</p>
    <p class="s" data-h="purjo" data-pt="Pode comprar estes quadros?">Saako näitä tauluja ostaa?</p>
    <p class="s" data-h="jay" data-pt="Pode, a Maia já vendeu três quadros hoje.">Kyllä, Maia myi tänään jo kolme taulua.</p>
    <p class="s" data-h="purjo" data-pt="Se eu tivesse um apartamento maior, compraria todos os quadros!">Jos minulla olisi isompi asunto, ostaisin kaikki taulut!</p>
    <p class="s" data-h="kertoja" data-pt="O Hiisi está na frente de um quadro.">Hiisi on yhden taulun edessä.</p>
    <p class="s" data-h="hiisi" data-pt="Aqui sou eu dirigindo. Este é um quadro bom.">Tässä minä ajan. Tämä on hyvä taulu.</p>
    <p class="s" data-h="maia" data-pt="Leva de presente, Hiisi. Você dirige rápido demais nele, como sempre. Eu pintei a partir da foto da polícia.">Ota se lahjana, Hiisi. Ajat siinä liian nopeasti, kuten aina. Maalasin sen poliisin kuvasta.</p>
    <p class="s" data-h="kertoja" data-pt="O Hiisi tira o quadro da parede.">Hiisi ottaa taulun seinältä.</p>
    <p class="s" data-h="purjo" data-pt="Venham todos! Agora vamos festejar!">Tulkaa kaikki! Nyt juhlitaan!</p>
  </div>
  <p>No quadro do Hiisi há uma estrada, um carro e um radar: a Maia pintou a partir da foto que chegou com a multa, em agosto (lição 20). A Purjo não comenta. Às sete, o celular da Maia vibra: videochamada de Belo Horizonte, onde são duas da tarde e trinta graus. A Maia mostra os quadros um por um, e a Marta chora diante do quadro da festa de rua. Depois o Jay pega o celular e conversa com eles em português, sem ajuda: <span lang="pt-BR">“Oi, Marta! Oi, Walker! Vocês viram o quadro de Copacabana? Sou eu, de muletas, no Ano-Novo.”</span> Há um ano, ele só sabia dizer “obrigado”. No fim, o Anderson chega bem perto da câmera e diz a palavra finlandesa favorita dele, da sauna de Korppoo: <span class="fi">Kuuma!</span></p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas que voltam</h3>
    <p>Nada de novo: são blocos das lições 0 a 20. Aqui você vê de onde vem cada pedaço.</p>
    <ul>
      <li><span class="fi">Onneksi olkoon!</span> = parabéns! (lição 7)</li>
      <li><span class="fi">Olen niin ylpeä sinusta.</span> = tenho tanto orgulho de você · <span class="fi">ylpeä</span> (lição 9); guarde inteiro</li>
      <li><span class="fi">Maalasin ensimmäisen vuosi sitten.</span> = pintei o primeiro (desta exposição) há um ano · o passado, <span class="fi">sitten</span> = atrás, há (lição 13)</li>
      <li><span class="fi">Sen jälkeen olen maalannut joka ilta.</span> = desde então eu pinto toda noite · o perfeito: começou antes e vai até agora (lição 19)</li>
      <li><span class="fi">Copacabanalla uutena vuotena</span> = em Copacabana, no Ano-Novo · o essivo <span class="fi pala">-na</span> das festas (lição 16)</li>
      <li><span class="fi">Jos minulla olisi isompi asunto, ostaisin kaikki taulut!</span> = se eu tivesse um apartamento maior, compraria todos os quadros · <span class="fi">jos</span> + condicional (lição 20)</li>
      <li><span class="fi">Ota se lahjana!</span> = leve de presente! · a ordem (lição 9) e o essivo (lição 16)</li>
      <li><span class="fi">Tulkaa kaikki! Nyt juhlitaan!</span> = venham todos! agora vamos festejar! · a ordem para vocês (lição 14) e o passivo como convite (lição 20)</li>
    </ul>
  </div>
</section>

<p>Os dois quadros do curso inteiro, os casos e os tempos com <span class="fi">maalata</span> (pintar), estão na <a href="#k04-gramatica">Gramática da lição</a>, junto com um cartão para cada ponto.</p>

<section class="osio" data-ei-sivulle data-paikka="sornainen-vaasanaukio">
  <h2>Exercícios da parte A</h2>
  <p>Na manhã seguinte, uma sexta-feira, a Maia lê em casa as mensagens da noite. Depois ela treina com o Jay. E com você.</p>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Que tempo? Complete</h3>
    <p class="ohje">Escreva o verbo na forma que a frase pede. A palavra de tempo decide: <span class="fi">joka päivä</span>, presente; <span class="fi">eilen, vuosi sitten</span>, passado; <span class="fi">koskaan</span> e <span class="fi">on</span> + particípio, perfeito; <span class="fi">jos … olisi</span>, condicional. Com <b>negativo</b>, escreva também o verbo de negação. (Pode digitar a sem trema: o curso aceita a = ä.)</p>
    <div class="aukot" lang="fi-FI">
      <p>Joka päivä Maia <span class="aukko" data-oikea="maalaa"></span> tauluja. <span data-ei-kuplaa>(maalata)</span></p>
      <p>Eilen Maia <span class="aukko" data-oikea="myi"></span> neljä taulua. <span data-ei-kuplaa>(myydä)</span></p>
      <p>Vuosi sitten Jay <span class="aukko" data-oikea="ei puhunut"></span> portugalia. <span data-ei-kuplaa lang="pt-BR">(puhua, negativo)</span></p>
      <p>Nyt Jay on <span class="aukko" data-oikea="oppinut"></span> portugalia. <span data-ei-kuplaa>(oppia)</span></p>
      <p>Oletko koskaan <span class="aukko" data-oikea="käynyt"></span> Riossa? <span data-ei-kuplaa>(käydä)</span></p>
      <p>Jos minulla olisi aikaa, <span class="aukko" data-oikea="maalaisin"></span> joka päivä. <span data-ei-kuplaa>(maalata)</span></p>
      <p>Suomessa <span class="aukko" data-oikea="saunotaan"></span> paljon. <span data-ei-kuplaa lang="pt-BR">(saunoa, passivo: se faz)</span></p>
      <p><span class="aukko" data-oikea="Tulkaa"></span> sisään! <span data-ei-kuplaa lang="pt-BR">(tulla, ordem para vocês)</span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="lukeminen">
    <h3>2. Leia as mensagens da família</h3>
    <p class="ohje">Dez da noite: a Purjo e o Hiisi já foram embora, e o grupo da família continua aberto. Leia e responda.</p>
    <div class="chat" data-otsikko="Perhe" data-paiva="Helsinki" data-mina="maia">
      <p data-h="purjo" data-aika="22.05" data-pt="Obrigada, Maia! A noite foi maravilhosa.">Kiitos, Maia! Ilta oli ihana.</p>
      <p data-h="maia" data-aika="22.07" data-pt="Obrigada por terem vindo! Hoje vendi quatro quadros.">Kiitos, että tulitte! Myin tänään neljä taulua.</p>
      <p data-h="hiisi" data-aika="22.10" data-pt="E eu ganhei um.">Ja minä sain yhden.</p>
      <p data-h="purjo" data-aika="22.11" data-pt="Onde está o quadro agora?">Missä se taulu on nyt?</p>
      <p data-h="hiisi" data-aika="22.20" data-pt="No carro.">Autossa.</p>
      <p data-h="hiisi" data-aika="22.20" data-pt="(cara de paisagem)"><span class="emoji">😐</span></p>
      <p data-h="jay" data-aika="22.24" data-pt="A Marta e o Walker ligaram de novo. Eu falei português com a Marta!">Marta ja Walker soittivat taas. Puhuin Martan kanssa portugalia!</p>
      <p data-h="purjo" data-aika="22.25" data-pt="Jay, você aprendeu muito!">Jay, sinä olet oppinut paljon!</p>
      <p data-h="maia" data-aika="22.30" data-pt="No Natal a gente voa de novo para o Brasil. Você viria junto, Purjo?">Jouluna lennämme taas Brasiliaan. Tulisitko mukaan, Purjo?</p>
      <p data-h="purjo" data-aika="22.31" data-pt="Eu vou, se o Hiisi não me levar de carro até o aeroporto!">Tulen, jos Hiisi ei vie minua lentokentälle!</p>
    </div>
    <div class="valinta" data-oikea="Neljä.">
      <p class="kysymys"><span class="fi">Kuinka monta taulua Maia myi tänään?</span></p>
      <div class="vaihtoehdot"><button type="button">Kolme.</button><button type="button">Neljä.</button><button type="button">Viisi.</button></div>
    </div>
    <div class="valinta" data-oikea="Hiisi.">
      <p class="kysymys"><span class="fi">Kuka sai taulun lahjana?</span></p>
      <div class="vaihtoehdot"><button type="button">Purjo.</button><button type="button">Jay.</button><button type="button">Hiisi.</button></div>
    </div>
    <div class="valinta" data-oikea="Autossa.">
      <p class="kysymys"><span class="fi">Missä Hiiden taulu on nyt?</span></p>
      <div class="vaihtoehdot"><button type="button">Autossa.</button><button type="button">Kotona.</button><button type="button">Näyttelyssä.</button></div>
    </div>
    <div class="valinta" data-oikea="Martan kanssa.">
      <p class="kysymys"><span class="fi">Kenen kanssa Jay puhui portugalia?</span></p>
      <div class="vaihtoehdot"><button type="button">Purjon kanssa.</button><button type="button">Martan kanssa.</button><button type="button">Hiiden kanssa.</button></div>
    </div>
    <div class="valinta" data-oikea="Brasiliaan.">
      <p class="kysymys"><span class="fi">Mihin Maia ja Jay lentävät jouluna?</span></p>
      <div class="vaihtoehdot"><button type="button">Brasiliassa.</button><button type="button">Brasiliasta.</button><button type="button">Brasiliaan.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. O caso certo, das lições 3 a 19</h3>
    <p class="ohje">Escolha a forma certa. Entre parênteses estão a palavra e o que a frase quer dizer.</p>
    <div class="valinta" data-oikea="kahvia">
      <p class="kysymys"><span class="fi">Kaksi ___, kiitos.</span> (kahvi · dois cafés)</p>
      <div class="vaihtoehdot"><button type="button">kahvi</button><button type="button">kahvia</button><button type="button">kahvin</button></div>
    </div>
    <div class="valinta" data-oikea="Maian">
      <p class="kysymys"><span class="fi">Tämä on ___ taulu.</span> (Maia · de quem?)</p>
      <div class="vaihtoehdot"><button type="button">Maian</button><button type="button">Maia</button><button type="button">Maialla</button></div>
    </div>
    <div class="valinta" data-oikea="Arabiassa">
      <p class="kysymys"><span class="fi">Purjo asuu ___.</span> (Arabia · onde?)</p>
      <div class="vaihtoehdot"><button type="button">Arabiaan</button><button type="button">Arabiasta</button><button type="button">Arabiassa</button></div>
    </div>
    <div class="valinta" data-oikea="Hiidelle">
      <p class="kysymys"><span class="fi">Maia antaa taulun ___.</span> (Hiisi · para quem?)</p>
      <div class="vaihtoehdot"><button type="button">Hiideltä</button><button type="button">Hiidelle</button><button type="button">Hiidellä</button></div>
    </div>
    <div class="valinta" data-oikea="tuon taulun">
      <p class="kysymys"><span class="fi">Hiisi ottaa ___.</span> (tuo taulu · ele leva aquele quadro inteiro)</p>
      <div class="vaihtoehdot"><button type="button">tuon taulun</button><button type="button">tuota taulua</button><button type="button">tuo taulu</button></div>
    </div>
    <div class="valinta" data-oikea="Lapsena">
      <p class="kysymys"><span class="fi">___ Maia tanssi kadulla.</span> (lapsi · quando criança)</p>
      <div class="vaihtoehdot"><button type="button">Lapsi</button><button type="button">Lapseksi</button><button type="button">Lapsena</button></div>
    </div>
    <div class="valinta" data-oikea="rannoilla">
      <p class="kysymys"><span class="fi">Riossa Maia maalasi ___.</span> (ranta · nas praias)</p>
      <div class="vaihtoehdot"><button type="button">rannalla</button><button type="button">rannoilla</button><button type="button">rannoille</button></div>
    </div>
  </div>
</section>

<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>Abrir uma exposição: vernissage e <span class="fi pala">avajaiset</span></h3>
  <figure class="kuva" data-kuva="vaasankatu-muraali"></figure>
  <p>No Brasil, a abertura de uma exposição muitas vezes se chama vernissage: convidados, o artista na porta, vinho e conversa. Na Finlândia, a abertura se chama <span class="fi pala">avajaiset</span>, sempre no plural, como <span class="fi">messut</span> (a feira, lição 6). Muitas vezes é no fim da tarde de um dia de semana, com entrada livre. Em dezembro, na mesa, há quase sempre café e biscoitos de gengibre, os <span class="fi">piparkakut</span>.</p>
  <p>E a arte também fica na rua. Em Sörnäinen e em Kallio há murais enormes nas paredes dos prédios, como o da Vaasankatu, na foto, a poucos passos da Piritori.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: ouvir, traduzir e falar</h2>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Prova de escuta</h3>
    <p class="ohje">Seis sons de seis lições. Você ouve só a forma, nada mais. Aperte ▶ e escolha o que ouviu.</p>
    <div class="valinta" data-kuuntele="kirjastoon" data-oikea="kirjastoon">
      <p class="kysymys">Lição 6 · onde, de onde ou para onde?</p>
      <div class="vaihtoehdot"><button type="button">kirjastossa</button><button type="button">kirjastosta</button><button type="button">kirjastoon</button></div>
    </div>
    <div class="valinta" data-kuuntele="tulkaa" data-oikea="tulkaa">
      <p class="kysymys">Lições 9 e 14 · para você ou para vocês?</p>
      <div class="vaihtoehdot"><button type="button" data-l="tulla:imper.2s">tule</button><button type="button">tulkaa</button></div>
    </div>
    <div class="valinta" data-kuuntele="maalasi" data-oikea="maalasi">
      <p class="kysymys">Lição 13 · presente ou passado?</p>
      <div class="vaihtoehdot"><button type="button" data-l="maalata:prees.3s">maalaa</button><button type="button">maalasi</button></div>
    </div>
    <div class="valinta" data-kuuntele="iloiseksi" data-oikea="iloiseksi">
      <p class="kysymys">Lição 16 · como ou virar?</p>
      <div class="vaihtoehdot"><button type="button">iloisena</button><button type="button">iloiseksi</button></div>
    </div>
    <div class="valinta" data-kuuntele="olen käynyt" data-oikea="olen käynyt">
      <p class="kysymys">Lição 19 · passado ou perfeito?</p>
      <div class="vaihtoehdot"><button type="button">kävin</button><button type="button">olen käynyt</button></div>
    </div>
    <div class="valinta" data-kuuntele="saunotaan" data-oikea="saunotaan">
      <p class="kysymys">Lição 20 · nós, passivo ou condicional?</p>
      <div class="vaihtoehdot"><button type="button">saunomme</button><button type="button">saunotaan</button><button type="button">saunoisimme</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Traduza para o finlandês</h3>
    <p class="ohje">Quatro frases do curso inteiro. Escreva em finlandês e depois compare com o modelo.</p>
    <div class="kaanna"><p class="pt">Eu não entendo. Fale devagar!</p><p class="s" data-pt="Eu não entendo. Fale devagar!">En ymmärrä. Puhu hitaasti!</p></div>
    <div class="kaanna"><p class="pt">Eu preciso ir para casa agora.</p><p class="s" data-pt="Eu preciso ir para casa agora.">Minun täytyy mennä nyt kotiin.</p></div>
    <div class="kaanna"><p class="pt">O café é melhor que o chá.</p><p class="s" data-pt="O café é melhor que o chá.">Kahvi on parempi kuin tee.</p></div>
    <div class="kaanna"><p class="pt">Se eu tivesse um barco, pescaria todo dia.</p><p class="s" data-pt="Se eu tivesse um barco, pescaria todo dia.">Jos minulla olisi vene, kalastaisin joka päivä.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>6. Responda em voz alta</h3>
    <p class="ohje">No fim da noite, os visitantes da galeria fazem as perguntas de sempre. Responda sobre você, em voz alta, antes de abrir o modelo (a resposta da Maia). Deixe a voz descer no fim.</p>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä teit eilen?</summary><p class="s" data-pt="Ontem eu pintei o dia inteiro.">Eilen maalasin koko päivän.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Millainen Jay on?</summary><p class="s" data-pt="Ele é alto, e tem cabelo castanho e olhos azuis.">Hän on <span data-l="pitkä#2">pitkä</span> ja hänellä on ruskea tukka ja siniset silmät.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Oletko koskaan käynyt Lapissa?</summary><p class="s" data-pt="Ainda não fui, mas eu gostaria!">En ole vielä käynyt, mutta haluaisin!</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä sinä tekisit, jos sinulla olisi paljon rahaa?</summary><p class="s" data-pt="Preciso pensar. Eu pintaria todo dia, moraria numa casa de campo e viveria em paz.">Pitää miettiä. Maalaisin joka päivä, asuisin mökillä ja eläisin rauhassa.</p></details>
    <details class="vastaus"><summary lang="fi-FI">Mitä Suomessa tehdään joulukuussa?</summary><p class="s" data-pt="Em dezembro se comem biscoitos de gengibre e se acendem velas.">Joulukuussa syödään piparkakkuja ja poltetaan kynttilöitä.</p></details>
  </div>
</section>

<aside class="kulttuuri na-rua">
  <p class="yla">Na rua · Puhekieli</p>
  <h3>Ouvido da rua: o curso inteiro</h3>
  <p>Lição após lição, a língua falada foi aparecendo. Você <b>não precisa</b> falar assim; o importante é <b>reconhecer</b>. Na tarefa 7 estão as formas que mais voltam.</p>
  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. O que a pessoa disse, em padrão?</h3>
    <p class="ohje">Ouça (ou leia) a frase da rua e escolha a mesma frase na língua padrão.</p>
    <div class="valinta" data-kuuntele="Mä oon kotona." data-oikea="Minä olen kotona.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Mä oon kotona.</span></p>
      <div class="vaihtoehdot"><button type="button">Sinä olet kotona.</button><button type="button">Minä olen kotona.</button><button type="button">Minä olin kotona.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Me mennään saunaan." data-oikea="Me menemme saunaan.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Me mennään saunaan.</span></p>
      <div class="vaihtoehdot"><button type="button">Me menemme saunaan.</button><button type="button">Te menette saunaan.</button><button type="button">Me menimme saunaan.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Sil on siniset silmät." data-oikea="Hänellä on siniset silmät.">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Sil on siniset silmät.</span></p>
      <div class="vaihtoehdot"><button type="button">Hänellä oli siniset silmät.</button><button type="button">Minulla on siniset silmät.</button><button type="button">Hänellä on siniset silmät.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Mua sattuu!" data-oikea="Minua sattuu!">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Mua sattuu!</span></p>
      <div class="vaihtoehdot"><button type="button">Minua sattuu!</button><button type="button">Sinua sattuu!</button><button type="button">Minua sattui!</button></div>
    </div>
    <div class="valinta" data-kuuntele="Ootsä käyny Riossa?" data-oikea="Oletko sinä käynyt Riossa?">
      <p class="kysymys"><span class="fi" data-rekisteri="puhe">Ootsä käyny Riossa?</span></p>
      <div class="vaihtoehdot"><button type="button">Olenko minä käynyt Riossa?</button><button type="button">Oletko sinä käynyt Riossa?</button><button type="button">Kävitkö sinä Riossa?</button></div>
    </div>
  </div>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Para terminar a parte A</h2>
  <div class="kotitehtava" data-id="k04">
    <h3>Lição de casa</h3>
    <p>Escreva uma mensagem para a Purjo (ou para alguém da sua família) sobre o seu ano com o finlandês: oito frases. Uma no presente (<span class="fi">Asun…</span>), uma no passado com um “quando” (<span class="fi">Vuosi sitten…</span>), uma no passado negativo (<span class="fi">en osannut…</span>), duas no perfeito (<span class="fi">Olen oppinut…</span>, <span class="fi">En ole vielä käynyt…</span>), uma com <span class="fi">jos</span> + condicional, um convite ou uma ordem (<span class="fi">Tule…!</span>) e uma no passivo (<span class="fi">Suomessa…</span>). Termine com <span class="fi">Terveisin</span> e o seu nome. Leia em voz alta, com a voz descendo no fim. A lista “Eu sei” do curso inteiro está no fim da parte B.</p>
    <details class="malli"><summary>Resposta modelo (a da Maia)</summary>
      <p class="s" data-pt="Oi, Purjo! Como vai?">Hei Purjo! Mitä kuuluu?</p>
      <p class="s" data-pt="Eu moro em Helsinque e trabalho em Otaniemi.">Asun Helsingissä ja olen töissä Otaniemessä.</p>
      <p class="s" data-pt="Há um ano a gente estava no Brasil.">Vuosi sitten olimme Brasiliassa.</p>
      <p class="s" data-pt="No começo eu não sabia vender quadros.">Ensin en osannut myydä tauluja.</p>
      <p class="s" data-pt="Até agora já pintei vinte quadros.">Nyt olen maalannut kaksikymmentä taulua.</p>
      <p class="s" data-pt="Ainda não fui à Lapônia, mas penso muito nisso.">En ole vielä käynyt Lapissa, mutta ajattelen sitä paljon.</p>
      <p class="s" data-pt="Se eu tivesse tempo, pintaria todo dia.">Jos minulla olisi aikaa, maalaisin joka päivä.</p>
      <p class="s" data-pt="Venha de novo à exposição! Há mais informações na internet.">Tule taas näyttelyyn! Lisää tietoa on netissä.</p>
      <p class="s" data-pt="Na Finlândia se toma muito café em dezembro.">Suomessa juodaan joulukuussa paljon kahvia.</p>
      <p class="s" data-pt="Um abraço, Maia">Terveisin Maia</p>
    </details>
  </div>
</section>
`
    },
    {
      id: 'b', otsikko: 'Parte B · A luta final',
      html: `
<ul class="tavoitteet">
  <li>Uma lembrança do juhannus: os vizinhos da casa redonda, com o passivo e o condicional: <span class="fi">Täällä grillataan lihaa. Tulisitteko mukaan?</span></li>
  <li>Aquecimento: oito frases para pôr cada tempo no lugar. Depois, na neve da Hämeentie, o Capivara não sabe que dia é hoje.</li>
  <li>A luta final: o Capivara e o Peixe-boi pedem ajuda à Maia pela última vez. Responda certo, e o prêmio vai para a ilha do Capivara e do Peixe-boi.</li>
  <li>Depois: a lista do que você aprendeu no curso inteiro, um adeus do Capivara e do Peixe-boi e a última lembrança do verão.</li>
</ul>

<!-- Pyöreän talon kohtaus (omistajan dialogi, lukittu 8.11.2026: ass/luonnokset/k04-b-1_lopullinen.md) muistona
     kesäkuulta 2027; siirretty t20:stä (omistaja 24.10.2026, kysymys 1 ”Q1 fine”). -->
<p data-paikka="korppoo">Antes de fechar a galeria, a Maia para diante do quadro do Anderson na sauna de Korppoo e lembra da noite do juhannus, seis meses atrás (lição 20).</p>

<section class="osio">
  <h2>A casa redonda: <span class="fi">Täällä grillataan lihaa.</span></h2>
  <p>Depois da fogueira, já perto da uma da manhã, a Maia e o Jay voltam pela beira do mar. Ao lado da casa de campo, entre os pinheiros, há uma casa redonda e amarela, em cima de pés de metal. Ontem ela não estava ali. Não há estrada até lá, nem marca de pneu na grama: ninguém a trouxe de carro. É a mesma casa que apareceu no fim da praia de Copacabana, no Ano-Novo (lição 19). Na porta, dois homens de macacão azul-claro e cabelo platinado acenam: o Uuno e o Eenok, os turistas da viagem da carne no Brasil.</p>
  <div class="kpl" id="k04-dialogi-futuro" data-nimi="Ouvir: a casa redonda">
    <p class="s" data-h="uuno3" data-pt="Oi, Maia! Oi, Jay!">Moi, Maia! Moi, Jay!</p>
    <p class="s" data-h="eenok3" data-pt="Feliz São João finlandês! Entrem!">Hyvää juhannusta! Tulkaa sisään!</p>
    <p class="s" data-h="maia" data-pt="Feliz juhannus! Que casa bonita!">Hyvää juhannusta! Tämä on hieno talo!</p>
    <p class="s" data-h="uuno3" data-pt="Obrigado! Acabei de comprar um motor novo para ela.">Kiitos! Ostin siihen juuri uuden moottorin.</p>
    <p class="s" data-h="eenok3" data-pt="Vocês aceitariam linguiça? Aqui se grelha carne.">Ottaisitteko makkaraa? Täällä grillataan lihaa.</p>
    <p class="s" data-h="jay" data-pt="Sim, obrigado! Eu pegaria duas.">Kyllä kiitos! Ottaisin kaksi.</p>
    <p class="s" data-h="maia" data-pt="Seu porquinho.">Senkin possu.</p>
    <p class="s" data-h="jay" data-pt="Vocês também comem?">Syöttekö te?</p>
    <p class="s" data-h="uuno3" data-pt="Não, agora não podemos. Amanhã a gente parte.">Ei, emme nyt voi. Huomenna lähdetään.</p>
    <p class="s" data-h="maia" data-pt="Quem parte? Para onde?">Kuka lähtee? Minne?</p>
    <p class="s" data-h="uuno3" data-pt="O Eenok e eu vamos para casa. Vocês viriam junto? Mas é uma viagem muito longa até lá…">Eenok ja minä lähdemme kotiin. Tulisitteko mukaan? Sinne on kyllä hyvin pitkä matka…</p>
    <p class="s" data-h="maia" data-pt="Não. Hoje é juhannus. Hoje se faz sauna e se nada!">Ei. Tänään on juhannus. Tänään saunotaan ja uidaan!</p>
    <p class="s" data-h="jay" data-pt="Boa viagem!">Hyvää matkaa!</p>
  </div>
  <p>O Eenok olha para o braço do Jay com muito interesse. A Maia agradece pela linguiça, pega o Jay pela mão, e os dois voltam para a sauna.</p>
  <div class="fraasit-laatikko">
    <h3>Frases prontas desta cena</h3>
    <p>Guarde como blocos prontos:</p>
    <ul>
      <li><span class="fi">Hyvää juhannusta!</span> = feliz juhannus! · o mesmo molde de <span class="fi">Hyvää joulua!</span></li>
      <li><span class="fi">Tulkaa sisään!</span> = entrem! · a ordem para vocês (lição 14)</li>
      <li><span class="fi">Täällä grillataan lihaa.</span> = aqui se grelha carne · o passivo: ninguém é nomeado (lição 20)</li>
      <li><span class="fi">Ottaisitteko makkaraa? – Ottaisin kaksi.</span> = vocês aceitariam linguiça? – eu pegaria duas · o condicional educado (lição 15)</li>
      <li><span class="fi">Senkin possu.</span> = seu porquinho · <span class="fi">Senkin …</span> = “seu …”, de brincadeira ou bravo; guarde inteiro</li>
      <li><span class="fi">Huomenna lähdetään.</span> = amanhã a gente parte · na fala, o passivo muitas vezes quer dizer “nós”</li>
      <li><span class="fi">Tulisitteko mukaan?</span> = vocês viriam junto? · o condicional (lição 20)</li>
      <li><span class="fi">Tänään saunotaan ja uidaan!</span> = hoje se faz sauna e se nada · o passivo</li>
    </ul>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: aquecimento</h2>
  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Cada tempo no seu lugar</h3>
    <p class="ohje">A casa redonda e a exposição, em todos os tempos. As três opções são formas do mesmo verbo. Primeiro olhe a palavra de tempo, depois escolha. <span class="fi">Eilen, vuosi sitten</span>: passado (<span class="fi pala">-i-</span>; negativo: <span class="fi">ei</span> + <span class="fi pala">-nut</span>). <span class="fi">Koskaan, jo</span>: <span class="fi">olla</span> + particípio. <span class="fi">Jos … olisi</span>: <span class="fi pala">-isi-</span>. <span class="fi">Huomenna</span>: presente. Sem pessoa, em geral: passivo.</p>
    <div class="valinta" data-oikea="ollut">
      <p class="kysymys"><span class="fi">Eilen talo ei ___ täällä.</span> (olla)</p>
      <div class="vaihtoehdot"><button type="button">ole</button><button type="button">ollut</button><button type="button">olisi</button></div>
    </div>
    <div class="valinta" data-oikea="osti">
      <p class="kysymys"><span class="fi">Eilen Uuno ___ uuden moottorin.</span> (ostaa)</p>
      <div class="vaihtoehdot"><button type="button">ostaa</button><button type="button">ostaisi</button><button type="button">osti</button></div>
    </div>
    <div class="valinta" data-oikea="lähtevät">
      <p class="kysymys"><span class="fi">Huomenna Uuno ja Eenok ___ kotiin.</span> (lähteä)</p>
      <div class="vaihtoehdot"><button type="button">lähtevät</button><button type="button">lähtivät</button><button type="button">lähtisivät</button></div>
    </div>
    <div class="valinta" data-oikea="tulisin">
      <p class="kysymys"><span class="fi">Jos minulla olisi aikaa, ___ mukaan.</span> (tulla)</p>
      <div class="vaihtoehdot"><button type="button">tulin</button><button type="button">tulisin</button><button type="button">tulen</button></div>
    </div>
    <div class="valinta" data-oikea="saunotaan">
      <p class="kysymys"><span class="fi">Juhannuksena Suomessa ___ ja uidaan.</span> (saunoa · todo mundo)</p>
      <div class="vaihtoehdot"><button type="button">saunoo</button><button type="button">saunoi</button><button type="button">saunotaan</button></div>
    </div>
    <div class="valinta" data-oikea="puhunut">
      <p class="kysymys"><span class="fi">Vuosi sitten Jay ei ___ portugalia.</span> (puhua)</p>
      <div class="vaihtoehdot"><button type="button">puhunut</button><button type="button" data-l="puhua:kielto">puhu</button><button type="button">puhui</button></div>
    </div>
    <div class="valinta" data-oikea="käynyt">
      <p class="kysymys"><span class="fi">Oletko koskaan ___ saunassa?</span> (käydä)</p>
      <div class="vaihtoehdot"><button type="button">kävit</button><button type="button">käyt</button><button type="button">käynyt</button></div>
    </div>
    <div class="valinta" data-oikea="nähneet">
      <p class="kysymys"><span class="fi">Me olemme jo ___ kaikki taulut.</span> (nähdä)</p>
      <div class="vaihtoehdot"><button type="button">nähnyt</button><button type="button">nähneet</button><button type="button">näimme</button></div>
    </div>
  </div>
</section>

<!-- Pomodialogi (omistajan teksti, lukittu 8.11.2026: ass/luonnokset/k04-b-3_lopullinen.md); Capivara puhuu kasvotusten
     (kertoja, ei kursiivia; omistaja 31.10.2026). Saapumiskappale on ennen dialogia (kohtaus k04-b-3 §12). -->
<section class="osio" data-paikka="hameentie-marraskuu">
  <h2>Diálogo: Mikä päivä tänään on?</h2>
  <p>Onze da noite. A galeria fechou, o Hiisi levou o quadro dele no carro (e a Purjo junto, de olhos fechados), e a Maia e o Jay voltam a pé para casa pela Hämeentie. Está nevando. Debaixo de um poste, alguém acena: o Capivara, de gorro de lã e mandarina em cima do gorro, puxando um trenó. No trenó, numa banheira de plástico com água morna, dorme o Peixe-boi, de cachecol.</p>
  <div class="kpl kasvokkain" id="k04-dialogi-b" data-nimi="Ouvir o diálogo">
    <p class="s" data-h="kertoja" data-pt="Maia, espera! Que dia é hoje? Amanhã eu comi um hambúrguer.">Maia, odota! Mikä päivä tänään on? <span data-hairio="Eilen minä söin">Huomenna minä söin</span> hampurilaisen.</p>
    <p class="s" data-h="maia" data-pt="Não é “amanhã eu comi”. Ontem você comeu, hoje você come e amanhã você come de novo. Hoje é quinta-feira.">Ei ”huomenna söin”. Eilen söit, tänään syöt ja huomenna syöt taas. Tänään on torstai.</p>
    <p class="s" data-h="kertoja" data-pt="Quinta-feira! Então eu já comi quatro hambúrgueres esta semana.">Torstai! Sitten olen syönyt tällä viikolla jo neljä hampurilaista.</p>
    <p class="s" data-h="maia" data-pt="Se você lembrasse os dias, não me perguntaria.">Jos muistaisit päivät, et kysyisi minulta.</p>
    <p class="s" data-h="kertoja" data-pt="Ah, é! Eu tenho óculos de sol novos para você. Eles são verdes. Mas onde eles estão?">Ai niin! Minulla on sinulle uudet aurinkolasit. Ne ovat vihreät. Mutta missä ne ovat?</p>
    <p class="s" data-h="maia" data-pt="Estão na cabeça do Peixe-boi. Ele está dormindo com eles.">Ne ovat <span class="pala">Peixe-boin</span> päässä. Hän nukkuu niissä.</p>
    <p class="s" data-h="kertoja" data-pt="Ele disse que só ia experimentar. Isso foi ontem.">Hän sanoi, että hän vain kokeilee niitä. Se oli eilen.</p>
    <p class="s" data-h="kertoja" data-pt="E mais uma coisa. Lá no fim da rua, no escuro, tem uma criatura. Ela não sabe que dia é hoje.">Ja vielä yksi asia. Tuolla kadun päässä pimeässä on otus. Se ei tiedä, mikä päivä tänään on.</p>
    <p class="s" data-h="maia" data-pt="Outra criatura de novo?">Taas uusi otus?</p>
    <p class="s" data-h="kertoja" data-pt="Só uma perguntinha, Maia: você já sabe os tempos verbais?">Kysyn vain, Maia: osaatko jo aikamuotoja?</p>
  </div>
</section>

<section class="osio" data-paikka="hameentie-marraskuu">
  <h2>Socorro! Um golem no fim da rua</h2>
  <p>No fim da rua, alguma coisa grande dá um passo para a luz do poste. A neve para no ar. O Peixe-boi acorda.</p>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Maia! Emergência! A última, prometo. Aquela criatura é um golem de pedra com um relógio no peito, e os ponteiros giram para trás. Ele saiu de uma máquina do tempo que caiu na praia da nossa ilha e veio atrás do trenó.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Ele chegou ontem. Ou amanhã. Nem ele sabe. Ele diz <span class="fi">menen</span> quando é ontem e <span class="fi">menin</span> quando a frase tem <span class="fi">jos</span>.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> E ele pergunta o tempo todo: <span class="fi">eilen?</span> <span class="fi">jo?</span> <span class="fi">jos?</span> Quem erra o tempo, ele leva para o passado. Ou para o futuro. Eu não lembro qual dos dois é pior.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="maia"></span>
    <p class="apuhahmo-kupla"><b>Maia:</b> Os tempos! Hoje, na exposição, a gente usou todos: <span class="fi">Maalasin ensimmäisen vuosi sitten. Sen jälkeen olen maalannut joka ilta.</span> E a Purjo: <span class="fi">Jos minulla olisi isompi asunto, ostaisin kaikki taulut!</span></p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Por isso os óculos verdes, de alienígena. Numa máquina do tempo, só óculos de outro planeta enxergam a hora certa. Eu li isso em algum lugar. Ou ainda vou ler. Peixe-boi, devolve, por favor.</p>
  </div>
  <div class="pomo-lahja" data-pomo="k04"></div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="maia"></span>
    <p class="apuhahmo-kupla"><b>Maia:</b> <span class="fi">Tottakai!</span> Quer dizer: claro que eu ajudo. É a luta final. Depois dela, eu volto para casa e durmo.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> Primeiro o golem. Depois todo mundo dorme. Eu já comecei. Sem os óculos, eu durmo um pouco pior.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Exercícios: a luta final</h2>
  <div class="pomo" data-pomo="k04"></div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Eu sei: o que você aprendeu no curso inteiro</h2>
  <p class="ohje">A lista junta as autoavaliações das lições 0 a 20. Marque com sinceridade: o que ainda não está firme, revise na lição indicada. Depois do curso, esta é a sua lista de estudo.</p>
  <ul class="itsearvio" data-id="k04">
    <li>Eu me apresento, digo de onde sou e uso olla: Olen Maia. Olen Brasiliasta. (lições 1 e 6)</li>
    <li>Conjugo os verbos no presente, pergunto e nego: puhun, puhutko?, en puhu, syön, haluan, tarvitsen (lições 2, 4 e 7).</li>
    <li>Peço e compro com o partitivo: Saisinko kahvia? Kaksi pullaa, kiitos. (lições 3 e 4)</li>
    <li>Digo quem tem e de quem é: Minulla on sisko. Jayn äiti. (lição 5)</li>
    <li>Digo onde, de onde e para onde, dentro e fora: kirjastossa, kirjastosta, kirjastoon; torilla, Purjolle (lições 6, 7 e 10).</li>
    <li>Mostro com tämä, tuo e se, e entendo preços e horas: kuusisataa euroa, kello puoli viisi (lições 8 a 10).</li>
    <li>Dou ordens e proíbo, para você e para vocês: Ota! Älä ota! Tulkaa! Älkää juosko! (lições 9, 14 e 18)</li>
    <li>Comparo e escolho a forma do objeto: halvempi kuin, paras; Ostan tämän paidan. En osta takkia. (lições 11 e 12)</li>
    <li>Conto o que fiz e o que não fiz: menin, söin, heräsin; en mennyt, emme syöneet (lições 13 e 15).</li>
    <li>Peço com educação e imagino: haluaisin, voisitko; Jos minulla olisi aikaa, maalaisin. (lições 15 e 20)</li>
    <li>Digo como, quando e no que alguma coisa se transforma: lapsena, jouluna; tulla iloiseksi, suomeksi (lição 16).</li>
    <li>Descrevo uma pessoa: Hän on pitkä. Hänellä on siniset silmät. (lição 17)</li>
    <li>Digo onde dói: Polveen sattuu. Päätäni särkee. Minulla on kuumetta. (lição 18)</li>
    <li>Conto o que já fiz até agora: Olen käynyt Riossa. En ole vielä käynyt Lapissa. (lição 19)</li>
    <li>Uso o plural nos casos: kuvia, ystävien kanssa, rannoilla, saunoihin (lições 11, 17 e 19).</li>
    <li>Digo o que se faz em geral com o passivo e convido com Mennään!: Suomessa saunotaan. (lição 20)</li>
    <li>Pronuncio as vogais e as consoantes longas, o ä, o ö e o y, o r vibrante e a melodia que desce no fim (lições 0 a 20).</li>
    <li>Reconheço o finlandês da rua: mä oon, mulla on, me mennään, ootsä käyny (lições 1 a 20).</li>
  </ul>
</section>

<section class="osio">
  <h2>Fim do curso: <span class="fi">Kiitos ja moi moi!</span></h2>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Pronto. Vinte e uma lições e quatro revisões, do primeiro <span class="fi">Moi!</span> até o golem. Você aprendeu finlandês junto com a Maia. Eu lembro de quase tudo, e o que eu esqueci você lembra por mim. Obrigado por ter vindo até aqui.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> E agora você continua, no seu ritmo. Um pouco por dia já basta. Eu faço assim com tudo.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja"></span>
    <p class="apuhahmo-kupla"><b>Capivara:</b> Três coisas para fazer a partir de amanhã. No <a href="#treino">Treino</a>, faça um pacote por dia: as palavras e as formas voltam até ficarem firmes. Na <a href="#ilha">ilha</a>, gaste as mandarinas e, depois da vitória, visite o estádio novo. E volte às lições que ficaram fracas no “Eu sei”, começando pela <a href="#t01">lição 1</a>: você vai ver quanto já entende.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="manaatti"></span>
    <p class="apuhahmo-kupla"><b>Peixe-boi:</b> E quando encontrar um finlandês, diga <span class="fi">Moi!</span> Ele vai responder <span class="fi">Moi!</span> Depois disso, você já sabe continuar.</p>
  </div>
  <div class="apuhahmo">
    <span class="ryhma" data-hahmot="kertoja,manaatti"></span>
    <p class="apuhahmo-kupla"><b>Capivara e Peixe-boi:</b> <span class="fi">Kiitos ja moi moi!</span> Obrigado e tchau!</p>
  </div>
</section>

<!-- Tarinan loppu (omistaja q30 b: pomon ja jäähyväisten jälkeen, kurssin viimeinen asia; lukittu kertojan lause
     8.11.2026: ass/luonnokset/k04-b-2_lopullinen.md). Ei selitystä. Futuro-ruutu viimeisenä (omistaja 23.10.2026). -->
<section class="osio" data-paikka="korppoo">
  <h2>A última lembrança do verão</h2>
  <p>Em casa, já quase dormindo, a Maia lembra de mais uma noite de junho. No domingo depois de Hanko, perto da meia-noite, ela terminava o álbum do verão para a Purjo, na janela da casa de campo em Korppoo. Lá fora, o céu ainda estava claro, e entre os pinheiros alguma coisa amarela começou a subir.</p>
  <p class="s" data-h="kertoja" data-pt="A casa amarela do Uuno e do Eenok sobe devagar acima dos pinheiros e voa para longe.">Uunon ja Eenokin keltainen talo nousee hitaasti puiden yli ja lentää pois.</p>
</section>
<!-- Futuro (omistaja 23.10.2026: ”The Futuro photo and short culture corner just about the futuro should be here”) -->
<aside class="kulttuuri">
  <p class="yla">Você sabia? · Tiesitkö?</p>
  <h3>A casa Futuro</h3>
  <figure class="kuva" data-kuva="futuro"></figure>
  <p>A casa Futuro foi projetada em 1968 pelo arquiteto finlandês Matti Suuronen. É de plástico, tem a forma de um grande disco sobre pés de metal e foi pensada como uma cabana para as férias de esqui. Foram feitas cerca de cem, e algumas ainda estão de pé em vários países. Várias desapareceram.</p>
</aside>
`
    }
  ],

  /* Gramática da lição: kertauskortit (ei uutta kielioppia), linkit oppituntien 16–20 ja keskeisten aiempien oppituntien
     Treeni-paketteihin. */
  kielioppi: [
    {
      id: 'kertaus-aikamuodot', otsikko: 'Os tempos e os modos com maalata: o quadro do curso inteiro (lições 2 a 20)', taso: 'revisão', hakuosa: 'h-aikamuodot', treeni: ['t13-imperfekti', 't15-kielto-imperfekti', 't19-perfekti', 't19-perfekti-kielto', 't19-kuuntele'],
      html: `
<p>Os tempos e os modos do verbo das 21 lições, todos com <span class="fi">maalata</span> (pintar), o verbo da Maia.</p>
<table class="taivutus">
  <tr><th>forma</th><th>finlandês</th><th>português</th><th>lição</th></tr>
  <tr><td>presente</td><td><span class="fi">maalaan · en maalaa</span></td><td>pinto · não pinto</td><td>2, 7</td></tr>
  <tr><td>passado</td><td><span class="fi">maalasin</span></td><td>pintei</td><td>13</td></tr>
  <tr><td>passado negativo</td><td><span class="fi">en maalannut</span></td><td>não pintei</td><td>15</td></tr>
  <tr><td>perfeito</td><td><span class="fi">olen maalannut · en ole maalannut</span></td><td>já pintei · ainda não pintei</td><td>19</td></tr>
  <tr><td>condicional</td><td><span class="fi">maalaisin · jos voisin, maalaisin</span></td><td>pintaria · se eu pudesse, pintaria</td><td>15, 20</td></tr>
  <tr><td>imperativo</td><td><span class="fi"><span data-l="maalata:imper.2s">maalaa</span>! maalatkaa! älä maalaa!</span></td><td>pinte! pintem! não pinte!</td><td>9, 14</td></tr>
  <tr><td>passivo</td><td><span class="fi">maalataan</span></td><td>pinta-se</td><td>20</td></tr>
</table>
<p>Primeiro a palavra de tempo, depois a forma. <span class="fi">Eilen, vuosi sitten, kello kuusi</span> pedem o passado; <span class="fi">jo, koskaan, vielä</span> e o que continua até agora pedem o perfeito. O particípio só tem número: <span class="fi">olen käynyt</span>, <span class="fi">olemme käyneet</span>. Mais na <a href="#h-imperatiivi">Gramática: o imperativo</a>, na <a href="#h-konditionaali">Gramática: o condicional</a> e na <a href="#h-passiivi">Gramática: o passivo</a>.</p>
<ul class="esim">
  <li class="s" data-pt="Eu pintei vinte quadros (até agora).">Olen maalannut kaksikymmentä taulua.</li>
</ul>`
    },
    {
      id: 'kertaus-konditionaali', otsikko: 'O condicional e o jos (lições 15 e 20)', taso: 'revisão', hakuosa: 'h-konditionaali', treeni: ['t15-konditionaali', 't20-konditionaali', 't20-jos'],
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Haluaisin kahvia.</span></td><td>Eu queria café.</td></tr>
  <tr><td><span class="fi">Jos voisin, maalaisin joka päivä.</span></td><td>Se eu pudesse, pintaria todo dia.</td></tr>
  <tr><td><span class="fi">Jos minulla olisi isompi asunto, ostaisin kaikki taulut.</span></td><td>Se eu tivesse um apartamento maior, compraria todos os quadros.</td></tr>
  <tr><td><span class="fi">Jos huomenna sataa, saunomme.</span></td><td>Se chover amanhã, fazemos sauna.</td></tr>
</table>
<p>Algo imaginado: <span class="fi pala">-isi-</span> nas duas partes. Algo possível: o <span class="fi">jos</span> no presente, e a outra parte em geral também, ou uma ordem ou um convite. O passado não imagina: <span class="fi">jos minulla oli</span> = se eu tinha (de verdade).</p>`
    },
    {
      id: 'kertaus-passiivi', otsikko: 'O passivo: Suomessa saunotaan (lição 20)', taso: 'revisão', hakuosa: 'h-passiivi', treeni: ['t20-passiivi', 't20-kuuntele'],
      html: `
<table class="taivutus">
  <tr><th>verbo</th><th>passivo</th><th>português</th></tr>
  <tr><td><span class="fi">saunoa</span></td><td><span class="fi">saunotaan</span></td><td>faz-se sauna</td></tr>
  <tr><td><span class="fi">juhlia</span></td><td><span class="fi">juhlitaan</span></td><td>comemora-se; vamos comemorar!</td></tr>
  <tr><td><span class="fi">mennä</span></td><td><span class="fi">mennään</span></td><td>vai-se; vamos!</td></tr>
</table>
<p>O passivo diz o que se faz sem dizer quem. Sem sujeito e em tom de proposta, ele funciona como convite, “vamos…!”: <span class="fi">Nyt juhlitaan!</span> Na rua, <span class="fi" data-rekisteri="puhe">me mennään</span> = <span class="fi">me menemme</span>.</p>`
    },
    {
      id: 'kertaus-imperatiivi', otsikko: 'Ordens: para você, para vocês e não! (lições 9, 14 e 18)', taso: 'revisão', hakuosa: 'h-imperatiivi', treeni: ['t09-kasky', 't14-kasky-te', 't14-kielto-te', 't18-hatakasky'],
      html: `
<table class="taivutus">
  <tr><th>para você</th><th>para vocês</th><th>não!</th></tr>
  <tr><td><span class="fi">Odota!</span><span class="kaannos" lang="pt-BR">espere!</span></td><td><span class="fi">Odottakaa!</span><span class="kaannos" lang="pt-BR">esperem!</span></td><td><span class="fi">Älä odota! · Älkää odottako!</span></td></tr>
  <tr><td><span class="fi">Näytä!</span><span class="kaannos" lang="pt-BR">mostre!</span></td><td><span class="fi">Näyttäkää!</span><span class="kaannos" lang="pt-BR">mostrem!</span></td><td><span class="fi">Älä näytä! · Älkää näyttäkö!</span></td></tr>
</table>
<p>Para você, a forma do “eu” sem o <span class="fi pala">-n</span> (<span class="fi">odotan → Odota!</span>); para vocês, o radical do infinitivo + <span class="fi pala">-kaa/-kää</span> (<span class="fi">Odottakaa!</span>). Com a ordem, o objeto inteiro fica na forma básica: <span class="fi">Näytä se taulu!</span></p>`
    },
    {
      id: 'kertaus-essiivi', otsikko: 'Como, quando e virar: -na e -ksi (lição 16)', taso: 'revisão', hakuosa: 'h-essiivi', treeni: ['t16-essiivi', 't16-translatiivi'],
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Lapsena Maia tanssi kadulla.</span></td><td>Quando criança, a Maia dançava na rua.</td></tr>
  <tr><td><span class="fi">Maanantaina menen töihin.</span></td><td>Na segunda-feira vou ao trabalho.</td></tr>
  <tr><td><span class="fi">Purjo tuli iloiseksi.</span></td><td>A Purjo ficou feliz.</td></tr>
  <tr><td><span class="fi">Sano se suomeksi!</span></td><td>Diga isso em finlandês!</td></tr>
</table>
<p><span class="fi pala">-na/-nä</span>: o papel, a fase da vida, os dias e as festas. <span class="fi pala">-ksi</span>: a mudança e a língua em que se diz. O estado fica com <span class="fi">olla</span>: <span class="fi">Purjo on iloinen.</span></p>`
    },
    {
      id: 'kertaus-kuvailu', otsikko: 'Descrever e o plural: siniset silmät, ystävien kanssa, kirkoissa (lições 17 e 19)', taso: 'revisão', hakuosa: 'h-kuvailu', treeni: ['t17-kuvailu', 't17-monikon-genetiivi', 't19-monikon-sijat'],
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Jay on <span data-l="pitkä#2">pitkä</span>.</span></td><td>O Jay é alto.</td></tr>
  <tr><td><span class="fi">Hänellä on ruskea tukka ja siniset silmät.</span></td><td>Ele tem cabelo castanho e olhos azuis.</td></tr>
  <tr><td><span class="fi">Maia puhuu ystävien kanssa.</span></td><td>A Maia fala com os amigos.</td></tr>
  <tr><td><span class="fi">Kävimme vanhoissa kirkoissa.</span></td><td>Visitamos igrejas antigas.</td></tr>
</table>
<p>Como a pessoa é: <span class="fi">hän on</span>. O que ela tem: <span class="fi">hänellä on</span>. No plural, os casos levam <span class="fi pala">-i-</span> antes da terminação: <span class="fi">kirkoissa, museoista, saunoihin</span>.</p>`
    },
    {
      id: 'kertaus-sattuu', otsikko: 'Onde dói: polveen sattuu, päätäni särkee (lição 18)', taso: 'revisão', hakuosa: 'h-sattuu', treeni: ['t18-sattuu', 't18-keho'],
      html: `
<table class="taivutus">
  <tr><th>finlandês</th><th>português</th></tr>
  <tr><td><span class="fi">Polveen sattuu.</span></td><td>O joelho dói.</td></tr>
  <tr><td><span class="fi">Päätäni särkee.</span></td><td>A minha cabeça dói.</td></tr>
  <tr><td><span class="fi">Minulla on kipeä käsi.</span></td><td>Estou com a mão doendo.</td></tr>
  <tr><td><span class="fi">Onko sinulla kuumetta?</span></td><td>Você está com febre?</td></tr>
</table>
<p>Com <span class="fi">sattuu</span>, a parte do corpo vai para “para onde?”; com <span class="fi">särkee</span>, para o partitivo; depois de <span class="fi">minulla on kipeä</span>, a forma básica.</p>`
    },
    {
      id: 'kertaus-sijat', otsikko: 'Os casos e as construções: o quadro do curso inteiro (lições 3 a 19)', taso: 'revisão', hakuosa: 'h-sijat', treeni: ['t03-luku', 't05-genetiivi', 't06-missa', 't06-mihin', 't07-ulko', 't12-objekti'],
      html: `
<p>Os casos (o fim da palavra que muda conforme o papel dela na frase) e o comparativo. Toque nas palavras para ver as formas. Mais na <a href="#h-sijat">Gramática: os casos</a>.</p>
<table class="taivutus">
  <tr><th>o que é</th><th>exemplo</th><th>lição</th></tr>
  <tr><td>partitivo: depois de número, no pedido, na negação</td><td><span class="fi">kaksi kahvia · Saisinko vettä? · Minulla ei ole autoa.</span><span class="kaannos" lang="pt-BR">dois cafés · Pode me dar água? · Eu não tenho carro.</span></td><td>3, 4, 5</td></tr>
  <tr><td>genitivo: de quem? · quem tem: <span class="fi pala">-lla</span></td><td><span class="fi">Maian taulu · Minulla on sisko.</span><span class="kaannos" lang="pt-BR">o quadro da Maia · Eu tenho uma irmã.</span></td><td>5</td></tr>
  <tr><td>lugar, dentro: <span class="fi pala">-ssa, -sta, -aan, -oon, -iin…</span></td><td><span class="fi">näyttelyssä, näyttelystä, näyttelyyn</span><span class="kaannos" lang="pt-BR">na exposição, da exposição, para a exposição</span></td><td>6</td></tr>
  <tr><td>lugar, fora, e pessoas: <span class="fi pala">-lla, -lta, -lle</span></td><td><span class="fi">torilla, Purjolta, Jaylle</span><span class="kaannos" lang="pt-BR">na feira, da Purjo, para o Jay</span></td><td>7, 10</td></tr>
  <tr><td>comparar: <span class="fi pala">-mpi</span>, <span class="fi pala">-in</span></td><td><span class="fi">isompi kuin · paras</span><span class="kaannos" lang="pt-BR">maior que · o melhor</span></td><td>11</td></tr>
  <tr><td>o objeto: inteiro ou parte</td><td><span class="fi">Hiisi ostaa taulun. Purjo ei osta taulua.</span><span class="kaannos" lang="pt-BR">O Hiisi compra o quadro. A Purjo não compra o quadro.</span></td><td>12</td></tr>
  <tr><td>como, quando: <span class="fi pala">-na</span> · virar, em que língua: <span class="fi pala">-ksi</span></td><td><span class="fi">lapsena, jouluna · tulla iloiseksi, suomeksi</span><span class="kaannos" lang="pt-BR">quando criança, no Natal · ficar feliz, em finlandês</span></td><td>16</td></tr>
  <tr><td>o plural nos casos</td><td><span class="fi">kengät · kuvia · ystävien kanssa · kirkoissa</span><span class="kaannos" lang="pt-BR">os sapatos · fotos · com os amigos · nas igrejas</span></td><td>9, 11, 17, 19</td></tr>
</table>`
    }
  ]
});
