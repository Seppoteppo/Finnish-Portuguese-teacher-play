/* Kertaus 6–10: Kuusamosta Confinsiin. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet (aa = suomalaisin kirjaimin, ipa = kansainvälinen) noudattavat Belo Horizonten ääntämystä.
   Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'k02',
  lyhyt: 'K2',
  jakso: 'Kertaus 6–10',
  otsikko: 'Kertaus 6–10: ser vai estar, epäsäännölliset verbit',
  lahde: 'Kertaus: jaksot 6–10 · ser/estar, fazer/ler/ouvir/saber, preferir/ver/pedir, poder/dizer/dar, vir/trazer/pôr, monikko, kysymyssanat, kellonajat',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi, tulee kotiin' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, ensimmäistä kertaa Brasiliassa' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 1, kuvaus: 'Maian äiti, eläkkeellä oleva sosiaalityöntekijä' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 1, kuvaus: 'Maian isä, eläkkeellä oleva professori' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 2, kuvaus: 'Maian veli, jakaa postia ja rakastaa Leijonakuningasta' }
  },

  aiheet: ['tervehdys', 'ihmiset', 'aika', 'liike'],

  sanasto: [
    'saudade', 'saída', 'esquisito', 'vaso', 'copo', 'balcão', 'varanda', 'amanhã', 'manhã', 'pegar', 'acordar',
    'faço', 'sei', 'prefiro', 'vejo', 'peço', 'posso', 'digo', 'dou', 'venho', 'trago', 'ponho',
    'por que', 'porque', 'que horas são', 'quinhentos', 'pão de queijo', 'gostar de'
  ],

  sanat: {
    'hace': { kieli: 'es', fi: 'tekee; (säästä) on (espanjaa!)', aa: 'A-se', ipa: '[ˈaθe]', sl: 'espanjan sana', huom: 'portugaliksi {faz}: ”faz frio”' },
    'frío': { kieli: 'es', fi: 'kylmä (espanjaa!)', aa: 'FRI-o', ipa: '[ˈfɾio]', sl: 'espanjan sana', huom: 'portugaliksi {frio}' },
    'mucho': { kieli: 'es', fi: 'paljon (espanjaa!)', aa: 'MU-tso', ipa: '[ˈmutʃo]', sl: 'espanjan sana', huom: 'portugaliksi {muito}' },
    'chegam': { fi: 'saapuvat; saavutte', aa: 'SHE-gãu', ipa: '[ˈʃeɡɐ̃w]', sl: 'verbi {chegar}', huom: '”vocês chegam” = te saavutte' },
  // <SANAT>
    'saudade': { fi: 'ikävä, kaipuu (kuinka ikävä onkaan!)', aa: 'sau-DA-di', ipa: '[sawˈdadʒi]', sl: 'substantiivi, feminiini', huom: 'tunnettu portugalin sana, ei suoraa suomennosta' },
    'saída': { fi: 'uloskäynti, lähtö', aa: 'sa-I-da', ipa: '[saˈidɐ]', sl: 'substantiivi, feminiini' },
    'trabalham': { fi: '(he) työskentelevät', aa: 'tra-BA-ljãu', ipa: '[tɾaˈbaʎɐ̃w]', sl: 'verbi {trabalhar}' },
    'esperam': { fi: '(he) odottavat', aa: 'es-PE-rãu', ipa: '[esˈpɛɾɐ̃w]', sl: 'verbi {esperar}' },
    'filha': { fi: 'tytär', aa: 'FI-lja', ipa: '[ˈfiʎɐ]', sl: 'substantiivi, feminiini', huom: 'poika {filho}' },
    'cansados': { fi: 'väsyneet', aa: 'kã-SA-dus', ipa: '[kɐ̃ˈsadus]', sl: 'adjektiivi, monikko', huom: 'yksikkö {cansado}' },
    'queijo': { fi: 'juusto', aa: 'KEI-zhu', ipa: '[ˈkejʒu]', sl: 'substantiivi, maskuliini' },
    'pão de queijo': { fi: 'juustoleipä (minas geraisilainen herkku)', aa: 'PÃU di KEI-zhu', ipa: '[ˈpɐ̃w dʒi ˈkejʒu]', sl: 'ruoka', huom: 'pieni, pehmeä juustolla tehty leipä' },
    'cartas': { fi: 'kirjeet', aa: 'KAH-tas', ipa: '[ˈkahtɐs]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö carta' },
    'rei': { fi: 'kuningas', aa: 'HEI', ipa: '[hej]', sl: 'substantiivi, maskuliini' },
    'leão': { fi: 'leijona', aa: 'le-ÃU', ipa: '[leˈɐ̃w]', sl: 'substantiivi, maskuliini' },
    'o rei leão': { fi: 'Leijonakuningas (elokuva)', aa: 'u HEI le-ÃU', ipa: '[u hej leˈɐ̃w]', sl: 'elokuvan nimi', huom: 'kirjaimellisesti ”kuningas leijona”' },
    'elas': { fi: 'he (naiset)', aa: 'E-las', ipa: '[ˈɛlɐs]', sl: 'persoonapronomini', huom: 'mies {eles}' },
    'custam': { fi: '(he) maksavat', aa: 'KUS-tãu', ipa: '[ˈkustɐ̃w]', sl: 'verbi {custar}' },
    'gostar': { fi: 'pitää jostakin', aa: 'gos-TAH', ipa: '[ɡosˈtah]', sl: 'verbi, perusmuoto', huom: 'gostar de + substantiivi; ANSA! Älä sano ”me gosta”' },
    'gostar de': { fi: 'pitää jostakin', aa: 'gos-TAH di', ipa: '[ɡosˈtah dʒi]', sl: 'ilmaus', huom: 'eu gosto do Brasil = pidän Brasiliasta; ei ”me gosta”' }
  // </SANAT>
  },

  html: `
<ul class="tavoitteet">
  <li>Kertaat jakson 6 asiat: itsestä kertominen, <span class="pt">ser</span> ja <span class="pt">estar</span>, adjektiivit, <span class="pt">por</span> ja <span class="pt">para</span>.</li>
  <li>Kertaat jaksot 7 ja 8: ammatit, luvut 100–1000, kestomuoto, kysymyssanat, asunto ja osoitesanat.</li>
  <li>Kertaat jaksot 9 ja 10: kuukaudet, sää, monikko, kellonajat, kulkuneuvot ja epäsäännölliset verbit.</li>
  <li>Kuuntelet ja luet uuden dialogin, jossa kaikki jaksot tulevat vastaan, ja arvioit osaamisesi.</li>
</ul>
<p data-paikka="confins">Confins, joulukuun 20. päivän ilta. Jay on ensimmäistä kertaa Brasiliassa. Kertaus alkaa kertojan tiivistelmällä siitä, mitä tähän asti on tapahtunut.</p>

<section class="osio" data-paikka="helsinki-vantaa">
  <h2>Tarina tähän asti</h2>
  <p class="ohje">Kertoja kertoo jaksot 6–10 yksinkertaisesti portugaliksi. Kuuntele ensin ilman suomennoksia ja yritä ymmärtää. Avaa sitten suomennos.</p>
  <div class="kpl" data-nimi="Kuuntele tiivistelmä">
    <p class="s" data-paikka="kuusamo" data-h="kertoja" data-fi="Kuusamossa Jay ja Maia työskentelevät kivien kanssa. Illalla sauna on nautinnollinen.">Em Kuusamo, Jay e Maia trabalham com pedras. À noite, a sauna é gostosa.</p>
    <p class="s" data-paikka="otaniemi-aalto" data-h="kertoja" data-fi="RRC:llä Maia piirtää ja Jay unelmoi sohvasta. Hän tarvitsee tuhat euroa kuukaudessa.">No RRC, a Maia desenha e o Jay sonha com o sofá. Ele precisa de mil euros por mês.</p>
    <p class="s" data-paikka="helsingin-kaupunginosat" data-h="kertoja" data-fi="Purjo etsii asuntoa. Hän pitää parempana paikkaa, joka on lähellä kaikkea.">A Purjo procura um apartamento. Ela prefere um lugar perto de tudo.</p>
    <p class="s" data-paikka="helsinki-lumi" data-h="kertoja" data-fi="Marraskuussa Jay pakkaa matkalaukkua. Joulukuussa Brasiliassa on kesä.">Em novembro, Jay prepara a mala. Em dezembro, no Brasil, é verão.</p>
    <p class="s" data-paikka="helsinki-vantaa" data-h="kertoja" data-fi="Kouvonen ajaa Jayn ja Maian lentokentälle. Hän ajaa hyvin nopeasti.">O Kouvonen leva Jay e Maia ao aeroporto. Ele dirige muito rápido.</p>
    <p class="s" data-paikka="confins" data-h="kertoja" data-fi="Kone saapuu Confinsiin illalla kello seitsemän.">O avião chega a Confins às sete da noite.</p>
  </div>
</section>

<section class="osio">
  <h2>Kertauskooste</h2>

  <h3>Jakso 6: ser ja estar, adjektiivi, por ja para, g ja j</h3>
  <ul class="esim">
    <li class="s" data-fi="Olen suomalainen. (kuka olen)">Eu sou finlandês.</li>
    <li class="s" data-fi="Olen väsynyt. (miltä nyt tuntuu)">Eu estou cansado.</li>
    <li class="s" data-fi="Maia on väsynyt.">A Maia está cansada.</li>
    <li class="s" data-fi="Kiitos kaikesta.">Obrigado por tudo.</li>
    <li class="s" data-fi="Kuva on sinulle.">A foto é para você.</li>
  </ul>
  <p><b>Ser</b> = kuka tai mikä joku on (kansalaisuus, ammatti, ominaisuus). <b>Estar</b> = missä tai miltä nyt (sijainti, olotila). Adjektiivi mukautuu sukuun (<span class="pt">cansado, cansada</span>). <b>g</b> ja <b>j</b> ovat zh ennen e:tä ja i:tä (g) ja aina (j).</p>

  <h3>Jakso 7: fazer, ler, ouvir, saber, kestomuoto, kysymyssanat, luvut, c</h3>
  <ul class="esim">
    <li class="s" data-fi="Mitä sinä teet nyt?">O que você está fazendo?</li>
    <li class="s" data-fi="Minä tiedän. Sinä tiedät.">Eu sei. Você sabe.</li>
    <li class="s" data-fi="Minulla on kolmesataa euroa.">Tenho trezentos euros.</li>
    <li class="s" data-fi="Mikä on sinun unelmasi?">Qual é o seu sonho?</li>
  </ul>
  <p>Kestomuoto: <span class="pt">estar + gerúndio</span> (<span class="pt">estou lendo</span>). Epäsäännölliset minä-muodot: <span class="pt">faço, leio, ouço, sei</span>. Luvut: <span class="pt">cem, duzentos, … quinhentos, … mil</span>. Kirjain <b>c</b>: k ennen a, o, u; s ennen e, i; ç on s.</p>

  <h3>Jakso 8: preferir, ver, pedir, este/esse/aquele, aqui/aí/lá, r</h3>
  <ul class="esim">
    <li class="s" data-fi="Pidän tästä asunnosta enemmän.">Eu prefiro este apartamento.</li>
    <li class="s" data-fi="Näen puiston täältä.">Eu vejo o parque daqui.</li>
    <li class="s" data-fi="Tuo huone tuolla on iso.">Aquele quarto lá é grande.</li>
    <li class="s" data-fi="Keittiö on tuolla.">A cozinha está lá.</li>
  </ul>
  <p>Minä-muodot: <span class="pt">prefiro, vejo, peço</span>. Osoitesanat: <span class="pt">este</span> (lähellä minua), <span class="pt">esse</span> (lähellä sinua), <span class="pt">aquele</span> (kaukana). Paikat: <span class="pt">aqui, aí, lá</span>. r on pehmeä h sanan alussa, rr ja tavun lopussa, muuten lyhyt r.</p>

  <h3>Jakso 9: poder, dizer, dar, monikko, kuukaudet, sää, s</h3>
  <ul class="esim">
    <li class="s" data-fi="Voinko ottaa takin mukaan?">Posso levar o casaco?</li>
    <li class="s" data-fi="Joulukuussa on kesä.">Em dezembro é verão.</li>
    <li class="s" data-fi="On kuuma ja sataa.">Faz calor e chove.</li>
    <li class="s" data-fi="kaksi lentokonetta">dois aviões</li>
  </ul>
  <p>Minä-muodot: <span class="pt">posso, digo, dou</span>. Monikko: <span class="pt">casa → casas, mulher → mulheres, homem → homens, animal → animais, avião → aviões</span>. Päivämäärä: <span class="pt">dia vinte e cinco de dezembro</span>.</p>

  <h3>Jakso 10: vir, trazer, pôr, quem, por que, quando, kellonajat, q, x, z</h3>
  <ul class="esim">
    <li class="s" data-fi="Paljonko kello on? Kello on neljä ja puoli.">Que horas são? São quatro e meia.</li>
    <li class="s" data-fi="Tuon passit.">Eu trago os passaportes.</li>
    <li class="s" data-fi="Panen laukut autoon.">Eu ponho as malas no carro.</li>
    <li class="s" data-fi="Menen autolla.">Eu vou de carro.</li>
  </ul>
  <p>Minä-muodot: <span class="pt">venho, trago, ponho</span>. Kysymys: <span class="pt">por que</span>, vastaus: <span class="pt">porque</span>. Kulkuneuvo: <span class="pt">de</span> + kulkuneuvo, <span class="pt">a pé</span>.</p>

  <div class="muista">
    <p><b>Kaikki epäsäännölliset minä-muodot yhdessä:</b> <span class="pt">sou, estou, faço, leio, ouço, sei, prefiro, vejo, peço, posso, digo, dou, venho, trago, ponho, tenho, vou</span>. Opettele ne ääneen: ne ovat yleisimpiä sanoja, joita tarvitset puhuessasi itsestäsi.</p>
  </div>

  <div class="huomio">
    <p><b>Espanjan ansat jaksoista 6–10:</b> <span class="pt">esquisito</span> = outo (ei herkullinen), <span class="pt">vaso</span> = kukkaruukku (juomalasi on <span class="pt">copo</span>), <span class="pt">balcão</span> = tiski (parveke on <span class="pt">varanda</span>), <span class="pt">manhã</span> = aamu (huomenna on <span class="pt">amanhã</span>), <span class="pt">pegar</span> = ottaa, <span class="pt">acordar</span> = herätä, <span class="pt">um pouco</span> (ei un poco), <span class="pt">eu sei</span> (ei sé), <span class="pt">eu ponho</span> (ei pongo), <span class="pt">o que</span> (ei pelkkä que), <span class="pt">eu gosto de</span> (ei me gosta).</p>
  </div>
</section>

<section class="osio">
  <h2>Kertaussanasto</h2>
  <div class="teema" data-otsikko="Maat, kielet, ammatit" data-sanat="finlandês,brasileira,espanhol,português,geólogo,professor,enfermeiro,motorista,pintora,aposentado"></div>
  <div class="teema" data-otsikko="Asunto" data-sanat="apartamento,sala,quarto,cozinha,banheiro,varanda,janela,aluguel"></div>
  <div class="teema" data-otsikko="Aika ja sää" data-sanat="novembro,dezembro,verão,inverno,calor,frio,chuva,graus,meio-dia,meia-noite"></div>
  <div class="teema" data-otsikko="Matkustaminen" data-sanat="aeroporto,voo,passagem,passaporte,mala,avião,ônibus,metrô,táxi,escala"></div>
  <div class="teema" data-otsikko="Verbit" data-sanat="fazer,ler,ouvir,saber,preferir,ver,pedir,poder,dizer,dar,vir,trazer,pôr"></div>
</section>

<section class="osio" data-paikka="confins">
  <h2>Videopuhelu: Vocês estão onde?</h2>
  <p class="ohje">Jay ja Maia odottavat matkalaukkuja Confinsissa. Anderson soittaa kotoa. Kuuntele ensin ilman suomennoksia: missä Anderson on, mitä hän tekee ja mitä Maia pyytää häntä tekemään? Kun Jay puhuu espanjaa, yhteys pätkii.</p>
  <div class="videopuhelu" data-dialogi="k02-puhelu" data-soittaja="Anderson" data-heidan="anderson" data-meidan="jay,maia"
       data-heidan-tausta="bh-bairro" data-meidan-tausta="confins"
       data-heidan-aika="Belo Horizonte · 19:20" data-meidan-aika="Confins · 19:20"></div>
  <div class="kpl" id="k02-puhelu" data-nimi="Kuuntele puhelu">
    <p class="s" data-h="anderson" data-fi="Hei Maia! Hei Jay! Missä te olette?">Oi, Maia! Oi, Jay! Vocês estão onde?</p>
    <p class="s" data-h="maia" data-fi="Hei Anderson! Olemme Confinsissa. Täällä on kuuma!">Oi, Anderson! A gente está em Confins. Faz calor aqui!</p>
    <p class="s" data-h="anderson" data-fi="Minä olen kotona. Katson Leijonakuningasta!">Eu estou em casa. Estou vendo O Rei Leão!</p>
    <p class="s" data-h="jay" data-fi="Hei Anderson! Hauska tutustua! Minä olen Jay.">Oi, Anderson! Muito prazer! Eu sou o Jay.</p>
    <p class="s" data-h="anderson" data-fi="Jay! Oletko suomalainen? Onko Suomessa kylmä?">Jay! Você é finlandês? Na Finlândia faz frio?</p>
    <p class="s" data-h="jay" data-hairio="hace → faz" data-fi="On tosi kylmä! (väärin: espanjaa)">¡Hace mucho frío!</p>
    <p class="s" data-h="maia" data-fi="Faz frio, Jay! Ei hace. Helsingissä on nyt lunta.">Faz frio, Jay! Não hace. Em Helsinque agora tem neve.</p>
    <p class="s" data-h="anderson" data-fi="Lunta! Mihin aikaan te tulette kotiin?">Neve! Que horas vocês chegam em casa?</p>
    <p class="s" data-h="maia" data-fi="Yhdeksältä. Voitko panna kolme lautasta lisää pöytään?">Às nove. Você pode pôr mais três pratos na mesa?</p>
    <p class="s" data-h="anderson" data-fi="Voin! Minä panen lautaset. Hei hei!">Posso! Eu ponho os pratos. Tchau, tchau!</p>
  </div>
</section>

<section class="osio" data-paikka="confins">
  <h2>Dialogi: Em Confins</h2>
  <p class="ohje">Uusi dialogi, jossa kaikki jaksot 6–10 tulevat vastaan. Jay tekee espanjan vaikuttaman virheen (<span class="pt">me gosta</span>). Löydätkö sen? Kuuntele ensin ilman suomennoksia ja sitten roolileikkinä.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Confins, seitsemän illalla. On kuuma.">Confins, sete da noite. Faz calor.</p>
    <p class="s" data-h="kertoja" data-fi="Lentokentän uloskäynnillä Maian vanhemmat odottavat.">Na saída do aeroporto, os pais da Maia esperam.</p>
    <p class="s" data-h="maia" data-fi="Äiti! Isä! Kuinka ikävä minulla on ollut!">Mãe! Pai! Que saudade!</p>
    <p class="s" data-h="marta" data-fi="Maia! Tyttäreni! Olet tänään todella kaunis.">Maia! Minha filha! Você está muito bonita.</p>
    <p class="s" data-h="maia" data-fi="Tämä on Jay. Jay, tämä on äitini Marta ja tämä on isäni Walker.">Este é o Jay. Jay, esta é a minha mãe, Marta, e este é o meu pai, Walker.</p>
    <p class="s" data-h="jay" data-fi="Hauska tutustua! Minulle ”me gosta” Brasilia kovasti! (väärin espanjaksi)">Muito prazer! Me gosta muito o Brasil!</p>
    <p class="s" data-h="maia" data-fi="Jay, portugaliksi sanotaan ”minä pidän jostakin”: eu gosto de.">Jay, em português a gente diz: “eu gosto de”.</p>
    <p class="s" data-h="jay" data-fi="Minä pidän Brasiliasta! Puhun vähän portugalia.">Eu gosto do Brasil! Eu falo um pouco de português.</p>
    <p class="s" data-h="walker" data-fi="Mistä sinä olet kotoisin, Jay?">Você é de onde, Jay?</p>
    <p class="s" data-h="jay" data-fi="Olen suomalainen, Helsingistä. Olen geologi.">Eu sou finlandês, de Helsinque. Eu sou geólogo.</p>
    <p class="s" data-h="marta" data-fi="Geologi, kuten Maia! Oletteko väsyneitä?">Geólogo, como a Maia! Vocês estão cansados?</p>
    <p class="s" data-h="jay" data-fi="Olen väsynyt mutta onnellinen. Täällä kello on seitsemän illalla, mutta Suomessa on keskiyö!">Estou cansado, mas estou feliz. Aqui são sete da noite, mas na Finlândia é meia-noite!</p>
    <p class="s" data-h="marta" data-fi="Voit panna laukut autoon. Tuo valkoinen auto tuolla on Walkerin.">Você pode pôr as malas no carro. Aquele carro branco lá é do Walker.</p>
    <p class="s" data-h="jay" data-fi="Minä panen laukut autoon.">Eu ponho as malas no carro.</p>
    <p class="s" data-h="marta" data-fi="Tässä, Jay. Tuon sinulle juustoleipää.">Aqui, Jay. Eu trago pão de queijo para você.</p>
    <p class="s" data-h="jay" data-fi="Kiitos kaikesta! Kuinka herkullista!">Obrigado por tudo! Que gostoso!</p>
    <p class="s" data-h="walker" data-fi="Kotona Anderson odottaa. Hän katsoo Leijonakuningasta joka päivä.">Em casa, o Anderson espera. Ele vê o Rei Leão todos os dias.</p>
    <p class="s" data-h="jay" data-fi="Kuka Anderson on?">Quem é o Anderson?</p>
    <p class="s" data-h="maia" data-fi="Veljeni. Hän on hyvin sympaattinen ja vie kirjeet kaupunginosan taloihin.">O meu irmão. Ele é muito simpático e leva as cartas para as casas do bairro.</p>
    <p class="s" data-h="jay" data-fi="Kiva! Milloin me olemme kotona?">Que legal! Quando a gente chega em casa?</p>
    <p class="s" data-h="walker" data-fi="Tunnin kuluttua. Talossa on kolme makuuhuonetta ja iso olohuone.">Em uma hora. A casa tem três quartos e uma sala grande.</p>
    <p class="s" data-paikka="belo-horizonte-panoraama" data-h="kertoja" data-fi="Auto kulkee lämpimän yön läpi. Jay katsoo ikkunasta ja näkee Belo Horizonten.">O carro vai pela noite quente. Jay olha pela janela e vê Belo Horizonte.</p>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: Andersonin videopuhelu</h3>
    <p class="ohje">Muistatko Andersonin puhelun? Valitse oikea vastaus.</p>
    <div class="valinta" data-oikea="em casa">
      <p class="kysymys"><span class="ryhma" data-hahmot="anderson"></span> O Anderson está…</p>
      <div class="vaihtoehdot"><button type="button">em Confins</button><button type="button">em casa</button><button type="button">em Helsinque</button></div>
    </div>
    <div class="valinta" data-oikea="O Rei Leão">
      <p class="kysymys"><span class="ryhma" data-hahmot="anderson"></span> O que o Anderson está vendo?</p>
      <div class="vaihtoehdot"><button type="button">O Rei Leão</button><button type="button">a televisão de Minas</button><button type="button">o avião</button></div>
    </div>
    <div class="valinta" data-oikea="às nove">
      <p class="kysymys">Que horas a Maia e o Jay chegam em casa?</p>
      <div class="vaihtoehdot"><button type="button">às sete</button><button type="button">às nove</button><button type="button">à meia-noite</button></div>
    </div>
    <div class="valinta" data-oikea="Faz frio.">
      <p class="kysymys"><span class="ryhma" data-hahmot="jay"></span> Miten Jayn olisi pitänyt sanoa ”On kylmä”?</p>
      <div class="vaihtoehdot"><button type="button">Hace frio.</button><button type="button">Faz frio.</button><button type="button">É frio.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ser, estar, por vai para?</h3>
    <p class="ohje">Kirjoita oikea sana.</p>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="sou"></span> geólogo e <span class="aukko" data-oikea="sou"></span> finlandês.</p>
      <p>Hoje o Jay <span class="aukko" data-oikea="está|tá"></span> cansado, mas <span class="aukko" data-oikea="está|tá"></span> feliz.</p>
      <p>A Marta <span class="aukko" data-oikea="é"></span> a mãe da Maia.</p>
      <p>Esta foto é <span class="aukko" data-oikea="para"></span> você.</p>
      <p>Obrigado <span class="aukko" data-oikea="por"></span> tudo!</p>
      <p>Nós <span class="aukko" data-oikea="estamos"></span> no aeroporto.</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Epäsäännölliset verbit</h3>
    <p class="ohje">Kirjoita verbin oikea muoto suluissa olevasta perusmuodosta.</p>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="faço"></span> arte. (fazer)</p>
      <p>Eu <span class="aukko" data-oikea="sei"></span> desenhar. (saber)</p>
      <p>Eu <span class="aukko" data-oikea="vejo"></span> a rua da janela. (ver)</p>
      <p>Eu <span class="aukko" data-oikea="prefiro"></span> este quarto. (preferir)</p>
      <p>Eu <span class="aukko" data-oikea="peço"></span> um café. (pedir)</p>
      <p>Eu <span class="aukko" data-oikea="posso"></span> levar a mala? (poder)</p>
      <p>Eu <span class="aukko" data-oikea="digo"></span> “bom dia”. (dizer)</p>
      <p>Eu <span class="aukko" data-oikea="venho"></span> da Finlândia. (vir)</p>
      <p>Eu <span class="aukko" data-oikea="trago"></span> o passaporte. (trazer)</p>
      <p>Eu <span class="aukko" data-oikea="ponho"></span> o casaco na mala. (pôr)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Kestomuoto</h3>
    <p class="ohje">Kirjoita verbi muodossa estar + gerúndio. Esimerkki: <span class="pt">ler</span> → <span class="pt">Eu estou lendo.</span></p>
    <div class="aukot">
      <p>A Maia está <span class="aukko" data-oikea="desenhando"></span>. (desenhar)</p>
      <p>O Jay está <span class="aukko" data-oikea="dormindo"></span> no avião. (dormir)</p>
      <p>O que você está <span class="aukko" data-oikea="fazendo"></span>? (fazer)</p>
      <p>A gente está <span class="aukko" data-oikea="ouvindo"></span> música. (ouvir)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Monikko</h3>
    <p class="ohje">Kirjoita monikko.</p>
    <div class="aukot">
      <p>uma mala → duas <span class="aukko" data-oikea="malas"></span></p>
      <p>um passaporte → dois <span class="aukko" data-oikea="passaportes"></span></p>
      <p>uma mulher → duas <span class="aukko" data-oikea="mulheres"></span></p>
      <p>um avião → muitos <span class="aukko" data-oikea="aviões"></span></p>
      <p>um homem → três <span class="aukko" data-oikea="homens"></span></p>
      <p>um hotel → dois <span class="aukko" data-oikea="hotéis"></span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Valitse oikea sana</h3>
    <p class="ohje">Osoitesanat, kysymyssanat ja muut.</p>
    <div class="valinta" data-oikea="aquele">
      <p class="kysymys">(Kaukana) ___ carro lá é do Walker.</p>
      <div class="vaihtoehdot"><button type="button">este</button><button type="button">esse</button><button type="button">aquele</button></div>
    </div>
    <div class="valinta" data-oikea="Por que">
      <p class="kysymys">___ ele dirige assim?</p>
      <div class="vaihtoehdot"><button type="button">Por que</button><button type="button">Porque</button></div>
    </div>
    <div class="valinta" data-oikea="Quanto">
      <p class="kysymys">___ dinheiro você tem?</p>
      <div class="vaihtoehdot"><button type="button">Quem</button><button type="button">Quanto</button><button type="button">Quando</button></div>
    </div>
    <div class="valinta" data-oikea="de">
      <p class="kysymys">A gente vai ___ carro.</p>
      <div class="vaihtoehdot"><button type="button">de</button><button type="button">em</button><button type="button">a</button></div>
    </div>
    <div class="valinta" data-oikea="São">
      <p class="kysymys">___ quatro e meia.</p>
      <div class="vaihtoehdot"><button type="button">É</button><button type="button">São</button></div>
    </div>
    <div class="valinta" data-oikea="Faz">
      <p class="kysymys">___ calor em Belo Horizonte.</p>
      <div class="vaihtoehdot"><button type="button">Faz</button><button type="button">É</button><button type="button">Tem</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Espanjan ansat</h3>
    <p class="ohje">Mitä sana tarkoittaa portugaliksi?</p>
    <div class="valinta" data-oikea="outo">
      <p class="kysymys">esquisito =</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">herkullinen</button><button type="button">outo</button></div>
    </div>
    <div class="valinta" data-oikea="kukkaruukku">
      <p class="kysymys">vaso =</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">juomalasi</button><button type="button">kukkaruukku</button></div>
    </div>
    <div class="valinta" data-oikea="tiski">
      <p class="kysymys">balcão =</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">parveke</button><button type="button">tiski</button></div>
    </div>
    <div class="valinta" data-oikea="huomenna">
      <p class="kysymys">amanhã =</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">aamu</button><button type="button">huomenna</button></div>
    </div>
    <div class="valinta" data-oikea="Eu gosto do Brasil.">
      <p class="kysymys">Mikä on oikein?</p>
      <div class="vaihtoehdot"><button type="button">Me gosta o Brasil.</button><button type="button">Eu gosto do Brasil.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Yhdistä sanat</h3>
    <p class="ohje">Paina portugalinkielistä sanaa ja sitten sen suomennosta.</p>
    <ul class="yhdista">
      <li data-pari="vuokra">o aluguel</li>
      <li data-pari="parveke">a varanda</li>
      <li data-pari="välilasku">a escala</li>
      <li data-pari="lippu">a passagem</li>
      <li data-pari="sataa">chove</li>
      <li data-pari="keskipäivä">meio-dia</li>
      <li data-pari="kuudes">sexto</li>
      <li data-pari="sairaanhoitaja">a enfermeira</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>8. Kuuntele ja valitse</h3>
    <p class="ohje">Paina ▶ ja valitse oikea vastaus.</p>
    <div class="valinta" data-kuuntele="São sete e vinte." data-oikea="7.20">
      <p class="kysymys">Kellonaika?</p>
      <div class="vaihtoehdot"><button type="button">7.20</button><button type="button">8.20</button><button type="button">7.40</button></div>
    </div>
    <div class="valinta" data-kuuntele="quinhentos" data-oikea="500">
      <p class="kysymys">Luku?</p>
      <div class="vaihtoehdot"><button type="button">400</button><button type="button">500</button><button type="button">600</button></div>
    </div>
    <div class="valinta" data-kuuntele="Faz frio e chove." data-oikea="kylmä ja sataa">
      <p class="kysymys">Sää?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">kuuma ja aurinkoista</button><button type="button">kylmä ja sataa</button><button type="button">tuulee</button></div>
    </div>
    <div class="valinta" data-kuuntele="Hoje é dia vinte e cinco de dezembro." data-oikea="25. joulukuuta">
      <p class="kysymys">Päivämäärä?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">15. joulukuuta</button><button type="button">25. joulukuuta</button><button type="button">25. marraskuuta</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>9. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause. Luvut kirjoitetaan sanoin.</p>
    <div class="sanelu" data-puhu="Eu sou geólogo e falo um pouco de português."></div>
    <div class="sanelu" data-puhu="A Maia está desenhando uma pedra."></div>
    <div class="sanelu" data-puhu="Eu prefiro este apartamento."></div>
    <div class="sanelu" data-puhu="Em dezembro faz calor no Brasil."></div>
    <div class="sanelu" data-puhu="Eu ponho as malas no carro."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>10. Missä on paino?</h3>
    <p class="ohje">Paina tavua, jolla on paino. Kuuntele sana lopuksi.</p>
    <p><span class="paino" data-tavut="fin|lan|dês" data-oikea="3"></span> <span class="paino" data-tavut="bra|si|lei|ra" data-oikea="3"></span> <span class="paino" data-tavut="a|par|ta|men|to" data-oikea="4"></span> <span class="paino" data-tavut="de|zem|bro" data-oikea="2"></span> <span class="paino" data-tavut="a|e|ro|por|to" data-oikea="4"></span> <span class="paino" data-tavut="ge|ó|lo|go" data-oikea="2"></span> <span class="paino" data-tavut="re|la|tó|rio" data-oikea="3"></span> <span class="paino" data-tavut="pri|ma|ve|ra" data-oikea="3"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>11. Mikä ei kuulu joukkoon?</h3>
    <p class="ohje">Valitse sana, joka ei kuulu samaan ryhmään.</p>
    <div class="valinta" data-oikea="janela">
      <p class="kysymys">avião, ônibus, metrô, janela</p>
      <div class="vaihtoehdot"><button type="button">avião</button><button type="button">ônibus</button><button type="button">metrô</button><button type="button">janela</button></div>
    </div>
    <div class="valinta" data-oikea="outubro">
      <p class="kysymys">verão, inverno, outono, outubro</p>
      <div class="vaihtoehdot"><button type="button">verão</button><button type="button">inverno</button><button type="button">outono</button><button type="button">outubro</button></div>
    </div>
    <div class="valinta" data-oikea="duzentos">
      <p class="kysymys">alemão, sueco, francês, duzentos</p>
      <div class="vaihtoehdot"><button type="button">alemão</button><button type="button">sueco</button><button type="button">francês</button><button type="button">duzentos</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>12. Käännä portugaliksi</h3>
    <p class="ohje">Kirjoita oma käännöksesi ja avaa sitten malli.</p>
    <div class="kaanna"><p class="fi">Olen suomalainen, mutta tänään olen Brasiliassa.</p><p class="s" data-fi="Olen suomalainen, mutta tänään olen Brasiliassa.">Eu sou finlandês, mas hoje estou no Brasil.</p></div>
    <div class="kaanna"><p class="fi">Maia piirtää, ja minä luen raporttia.</p><p class="s" data-fi="Maia piirtää, ja minä luen raporttia.">A Maia está desenhando e eu estou lendo um relatório.</p></div>
    <div class="kaanna"><p class="fi">Pidän tästä asunnosta enemmän, koska siinä on parveke.</p><p class="s" data-fi="Pidän tästä asunnosta enemmän, koska siinä on parveke.">Eu prefiro este apartamento porque tem uma varanda.</p></div>
    <div class="kaanna"><p class="fi">Joulukuussa Brasiliassa on kuuma ja sataa joka päivä.</p><p class="s" data-fi="Joulukuussa Brasiliassa on kuuma ja sataa joka päivä.">Em dezembro, no Brasil, faz calor e chove todo dia.</p></div>
    <div class="kaanna"><p class="fi">Kello on seitsemän illalla. Kuka tuo passit?</p><p class="s" data-fi="Kello on seitsemän illalla. Kuka tuo passit?">São sete da noite. Quem traz os passaportes?</p></div>
    <div class="kaanna"><p class="fi">Voinko panna laukut tähän? Ne maksavat kaksisataa euroa.</p><p class="s" data-fi="Voinko panna laukut tähän? Ne maksavat kaksisataa euroa.">Posso pôr as malas aqui? Elas custam duzentos euros.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>13. Keskustele: Jay Confinsissa</h3>
    <p class="ohje">Käytä dialogin roolileikkiä ja puhu Jayn osuudet. Vastaa sitten kysymyksiin ääneen ennen kuin avaat mallin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Você é de onde? Que língua você fala?</summary>
      <p class="s" data-fi="Olen Suomesta. Puhun suomea, englantia ja vähän portugalia.">Eu sou da Finlândia. Eu falo finlandês, inglês e um pouco de português.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que você está fazendo agora?</summary>
      <p class="s" data-fi="Opiskelen portugalia.">Eu estou estudando português.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Quantos quartos tem a sua casa?</summary>
      <p class="s" data-fi="Kodissani on kaksi makuuhuonetta.">A minha casa tem dois quartos.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Como está o tempo hoje?</summary>
      <p class="s" data-fi="Tänään on kylmä ja sataa.">Hoje faz frio e chove.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Que horas são?</summary>
      <p class="s" data-fi="Kello on kolme iltapäivällä.">São três da tarde.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Como você vai para o trabalho?</summary>
      <p class="s" data-fi="Menen töihin metrolla.">Eu vou de metrô.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="k02">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="k02-saapuminen" lang="pt-BR">
      <div class="kal-yla"><b>Chegada ao Brasil</b><small>täytä saapumiskortti itsestäsi</small></div>
      <div class="kal-rivit">
        <label>Nome <input name="nimi" placeholder="Jay"></label>
        <label>Nacionalidade <input name="kansalaisuus" placeholder="finlandês"></label>
        <label>Profissão <input name="ammatti" placeholder="geólogo"></label>
        <label>Endereço no Brasil <input name="osoite" placeholder="Rua das Flores, 120, Belo Horizonte"></label>
        <label>Como você está? <input name="olo" placeholder="Estou cansado, mas estou feliz."></label>
      </div>
    </div>
    <p>Kirjoita lyhyt viesti Martalle, Maian äidille, jossa kerrot saapumisestasi. Kirjoita 6–8 lausetta: esittele itsesi (<span class="pt">ser</span>), kerro miltä sinusta tuntuu (<span class="pt">estar</span>), mihin aikaan koneesi saapuu, millä kulkuneuvolla tulet kentältä, millainen sää on ja mitä tuot mukanasi (<span class="pt">trazer</span>). Sano viesti sitten ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Hei Marta! Olen Jay, Maian poikaystävä.">Oi, Marta! Eu sou o Jay, o namorado da Maia.</p>
      <p class="s" data-fi="Olen suomalainen ja puhun vähän portugalia.">Eu sou finlandês e falo um pouco de português.</p>
      <p class="s" data-fi="Olen väsynyt, mutta olen hyvin onnellinen.">Estou cansado, mas estou muito feliz.</p>
      <p class="s" data-fi="Koneeni saapuu Confinsiin seitsemältä illalla.">O meu avião chega a Confins às sete da noite.</p>
      <p class="s" data-fi="Tulen kentältä autolla Walkerin kanssa.">Eu venho do aeroporto de carro com o Walker.</p>
      <p class="s" data-fi="Täällä on kesä ja kuuma!">Aqui é verão e faz calor!</p>
      <p class="s" data-fi="Tuon sinulle suomalaista kahvia.">Eu trago café finlandês para você.</p>
      <p class="s" data-fi="Kiitos kaikesta!">Obrigado por tudo!</p>
    </details>
  </div>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Itsearvio</h2>
  <p>Arvioi, kuinka hyvin osaat. Valinta tallentuu tähän selaimeen. Palaa asiaan, jos vastaus on ”En vielä”.</p>
  <ul class="itsearvio" data-id="k02">
    <li>Jakso 6: Osaan kertoa, mistä olen kotoisin, mikä kansalainen olen ja mitä kieliä puhun.</li>
    <li>Jakso 6: Osaan valita verbien ser ja estar välillä.</li>
    <li>Jakso 6: Osaan taivuttaa adjektiivin miehelle ja naiselle ja käyttää sanoja por ja para.</li>
    <li>Jakso 7: Osaan kertoa ammattini ja kysyä, mitä joku tekee.</li>
    <li>Jakso 7: Osaan luvut 100–1000 ja kysyä quanto ja qual.</li>
    <li>Jakso 7: Osaan verbit fazer, ler, ouvir ja saber sekä kestomuodon estar + gerúndio.</li>
    <li>Jakso 8: Osaan kuvata asuntoa ja huoneita.</li>
    <li>Jakso 8: Osaan verbit preferir, ver ja pedir.</li>
    <li>Jakso 8: Osaan käyttää sanoja este, esse, aquele sekä aqui, aí ja lá.</li>
    <li>Jakso 9: Osaan kuukaudet, vuodenajat ja kertoa päivämäärän.</li>
    <li>Jakso 9: Osaan kuvata säätä.</li>
    <li>Jakso 9: Osaan verbit poder, dizer ja dar.</li>
    <li>Jakso 9: Osaan muodostaa monikon.</li>
    <li>Jakso 10: Osaan kysyä ja kertoa kellonajan.</li>
    <li>Jakso 10: Osaan kulkuneuvot ja sanoa, millä menen.</li>
    <li>Jakso 10: Osaan verbit vir, trazer ja pôr.</li>
    <li>Jakso 10: Osaan kysymyssanat quem, por que ja quando.</li>
    <li>Jaksot 6–10: Osaan lukea g, j, c, r, s, q, x ja z oikein.</li>
  </ul>
</section>
`
});
