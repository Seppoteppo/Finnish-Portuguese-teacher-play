/* Hakuosa: kielioppi koottuna yhteen paikkaan (verbitaulukot, pronominit, artikkelit ja prepositiot, kysymyssanat,
   numerot ja aika). Sivu muuttaa nämä HTML:ksi; esimerkit (class="s") saavat toistopainikkeen ja sanat kuplan
   kuten oppitunneilla. Taivutukset ovat brasilianportugalia: você-muoto on sama kuin ele/ela, ja a gente = nós arkikielessä. */
(function () {
  'use strict';
  const K = window.Kurssi;

  const PERSOONAT = ['eu', 'você · ele · ela · a gente', 'nós', 'vocês · eles · elas'];
  const AIKAMUODOT = [['pre', 'Preesens', 'puhun'], ['per', 'Perfekti', 'puhuin'], ['imp', 'Imperfekti', 'puhuin (tapana), puhuin juuri']];

  /* Säännölliset verbit taivutetaan päätteistä. */
  const PAATTEET = {
    ar: { pre: ['o', 'a', 'amos', 'am'], per: ['ei', 'ou', 'amos', 'aram'], imp: ['ava', 'ava', 'ávamos', 'avam'], kask: ['e', 'em'], ger: 'ando' },
    er: { pre: ['o', 'e', 'emos', 'em'], per: ['i', 'eu', 'emos', 'eram'], imp: ['ia', 'ia', 'íamos', 'iam'], kask: ['a', 'am'], ger: 'endo' },
    ir: { pre: ['o', 'e', 'imos', 'em'], per: ['i', 'iu', 'imos', 'iram'], imp: ['ia', 'ia', 'íamos', 'iam'], kask: ['a', 'am'], ger: 'indo' }
  };
  function saannollinen(inf) {
    const vartalo = inf.slice(0, -2), p = PAATTEET[inf.slice(-2)] || PAATTEET.er;   // pôr kuuluu historiallisesti -er-luokkaan
    const t = l => l.map(x => vartalo + x);
    return { pre: t(p.pre), per: t(p.per), imp: t(p.imp), kask: t(p.kask), ger: vartalo + p.ger };
  }

  /* Epäsäännölliset: vain poikkeavat aikamuodot, loput säännöllisinä. jakso = oppitunti, jolla verbi opetetaan. */
  const VERBIT = [
    { inf: 'falar', fi: 'puhua', jakso: 'l04', malli: true },
    { inf: 'comer', fi: 'syödä', jakso: 'l04', malli: true },
    { inf: 'abrir', fi: 'avata', jakso: 'l04', malli: true },
    // Epäsäännölliset ryhmittäin (ryhma), ryhmän sisällä yleisin ensin.
    { ryhma: 'olla', inf: 'ser', fi: 'olla (pysyvä ominaisuus)', jakso: 'l01', pre: ['sou', 'é', 'somos', 'são'], per: ['fui', 'foi', 'fomos', 'foram'],
      imp: ['era', 'era', 'éramos', 'eram'], kask: ['seja', 'sejam'], ger: 'sendo' },
    { ryhma: 'olla', inf: 'estar', fi: 'olla (tila, sijainti)', jakso: 'l02', pre: ['estou', 'está', 'estamos', 'estão'],
      per: ['estive', 'esteve', 'estivemos', 'estiveram'], kask: ['esteja', 'estejam'], huom: 'Puheessa usein tô, tá, tamos, tão.' },
    { ryhma: 'olla', inf: 'ter', fi: 'olla jollakin, omistaa', jakso: 'l05', pre: ['tenho', 'tem', 'temos', 'têm'], per: ['tive', 'teve', 'tivemos', 'tiveram'],
      imp: ['tinha', 'tinha', 'tínhamos', 'tinham'], kask: ['tenha', 'tenham'], huom: 'Puhekielessä tem = on olemassa (= há).' },
    { ryhma: 'olla', inf: 'haver', fi: 'olla olemassa (há = on, löytyy)', jakso: 'l03', pre: ['hei', 'há', 'havemos', 'hão'],
      per: ['houve', 'houve', 'houvemos', 'houveram'], kask: ['haja', 'hajam'], huom: 'Arjessa käytetään lähes vain muotoja há (on), houve (oli, tapahtui) ja havia (oli).' },
    { ryhma: 'liike', inf: 'ir', fi: 'mennä', jakso: 'l02', pre: ['vou', 'vai', 'vamos', 'vão'], per: ['fui', 'foi', 'fomos', 'foram'],
      imp: ['ia', 'ia', 'íamos', 'iam'], kask: ['vá', 'vão'], ger: 'indo', huom: 'Perfekti on sama kuin verbillä ser: fui = olin tai menin.' },
    { ryhma: 'liike', inf: 'vir', fi: 'tulla', jakso: 'l10', pre: ['venho', 'vem', 'vimos', 'vêm'], per: ['vim', 'veio', 'viemos', 'vieram'],
      imp: ['vinha', 'vinha', 'vínhamos', 'vinham'], kask: ['venha', 'venham'], ger: 'vindo' },
    { ryhma: 'liike', inf: 'sair', fi: 'lähteä, mennä ulos', pre: ['saio', 'sai', 'saímos', 'saem'], per: ['saí', 'saiu', 'saímos', 'saíram'],
      imp: ['saía', 'saía', 'saíamos', 'saíam'], kask: ['saia', 'saiam'], ger: 'saindo' },
    { ryhma: 'liike', inf: 'seguir', fi: 'seurata, jatkaa', pre: ['sigo', 'segue', 'seguimos', 'seguem'], kask: ['siga', 'sigam'] },
    { ryhma: 'liike', inf: 'subir', fi: 'nousta, mennä ylös', pre: ['subo', 'sobe', 'subimos', 'sobem'] },
    { ryhma: 'liike', inf: 'cair', fi: 'kaatua, pudota', pre: ['caio', 'cai', 'caímos', 'caem'], per: ['caí', 'caiu', 'caímos', 'caíram'],
      imp: ['caía', 'caía', 'caíamos', 'caíam'], kask: ['caia', 'caiam'], ger: 'caindo' },
    { ryhma: 'teko', inf: 'fazer', fi: 'tehdä', jakso: 'l07', pre: ['faço', 'faz', 'fazemos', 'fazem'], per: ['fiz', 'fez', 'fizemos', 'fizeram'], kask: ['faça', 'façam'] },
    { ryhma: 'teko', inf: 'dar', fi: 'antaa', jakso: 'l09', pre: ['dou', 'dá', 'damos', 'dão'], per: ['dei', 'deu', 'demos', 'deram'], kask: ['dê', 'deem'] },
    { ryhma: 'teko', inf: 'pôr', fi: 'panna, laittaa', jakso: 'l10', pre: ['ponho', 'põe', 'pomos', 'põem'], per: ['pus', 'pôs', 'pusemos', 'puseram'],
      imp: ['punha', 'punha', 'púnhamos', 'punham'], kask: ['ponha', 'ponham'], ger: 'pondo' },
    { ryhma: 'teko', inf: 'trazer', fi: 'tuoda', jakso: 'l10', pre: ['trago', 'traz', 'trazemos', 'trazem'], per: ['trouxe', 'trouxe', 'trouxemos', 'trouxeram'], kask: ['traga', 'tragam'] },
    { ryhma: 'teko', inf: 'pedir', fi: 'pyytää, tilata', jakso: 'l08', pre: ['peço', 'pede', 'pedimos', 'pedem'], kask: ['peça', 'peçam'] },
    { ryhma: 'teko', inf: 'conseguir', fi: 'onnistua, saada aikaan', pre: ['consigo', 'consegue', 'conseguimos', 'conseguem'], kask: ['consiga', 'consigam'] },
    { ryhma: 'teko', inf: 'perder', fi: 'menettää, hävitä', pre: ['perco', 'perde', 'perdemos', 'perdem'], kask: ['perca', 'percam'] },
    { ryhma: 'teko', inf: 'dormir', fi: 'nukkua', jakso: 'l13', pre: ['durmo', 'dorme', 'dormimos', 'dormem'], kask: ['durma', 'durmam'] },
    { ryhma: 'mieli', inf: 'poder', fi: 'voida, saada', jakso: 'l09', pre: ['posso', 'pode', 'podemos', 'podem'], per: ['pude', 'pôde', 'pudemos', 'puderam'], kask: ['possa', 'possam'] },
    { ryhma: 'mieli', inf: 'querer', fi: 'haluta', pre: ['quero', 'quer', 'queremos', 'querem'], per: ['quis', 'quis', 'quisemos', 'quiseram'], kask: ['queira', 'queiram'] },
    { ryhma: 'mieli', inf: 'saber', fi: 'tietää, osata', jakso: 'l07', pre: ['sei', 'sabe', 'sabemos', 'sabem'], per: ['soube', 'soube', 'soubemos', 'souberam'], kask: ['saiba', 'saibam'] },
    { ryhma: 'mieli', inf: 'dizer', fi: 'sanoa', jakso: 'l09', pre: ['digo', 'diz', 'dizemos', 'dizem'], per: ['disse', 'disse', 'dissemos', 'disseram'], kask: ['diga', 'digam'] },
    { ryhma: 'mieli', inf: 'ver', fi: 'nähdä', jakso: 'l08', pre: ['vejo', 'vê', 'vemos', 'veem'], per: ['vi', 'viu', 'vimos', 'viram'],
      imp: ['via', 'via', 'víamos', 'viam'], kask: ['veja', 'vejam'] },
    { ryhma: 'mieli', inf: 'ouvir', fi: 'kuulla', jakso: 'l07', pre: ['ouço', 'ouve', 'ouvimos', 'ouvem'], kask: ['ouça', 'ouçam'] },
    { ryhma: 'mieli', inf: 'ler', fi: 'lukea', jakso: 'l07', pre: ['leio', 'lê', 'lemos', 'leem'], per: ['li', 'leu', 'lemos', 'leram'], kask: ['leia', 'leiam'] },
    { ryhma: 'mieli', inf: 'sentir', fi: 'tuntea (tunne, aisti)', pre: ['sinto', 'sente', 'sentimos', 'sentem'], kask: ['sinta', 'sintam'] },
    { ryhma: 'mieli', inf: 'preferir', fi: 'pitää parempana', jakso: 'l08', pre: ['prefiro', 'prefere', 'preferimos', 'preferem'], kask: ['prefira', 'prefiram'] }
  ];
  const EPA_RYHMAT = [['olla', 'Olla ja omistaa'], ['liike', 'Liikkuminen'], ['teko', 'Tekeminen'], ['mieli', 'Ajattelu, tahto ja aistit']];


  /* Siirretty oppitunnilta 0: ääntämisen yhdeksän sääntöä. */
  const SAANNOT = "<section class=\"osio\">\n  <h2>Ääntämisen yhdeksän sääntöä</h2>\n  <p class=\"ohje\">Kuuntele jokainen esimerkki ja toista se ääneen.</p>\n\n  <div class=\"saanto\">\n    <h3>1. Paino on yleensä toiseksi viimeisellä tavulla</h3>\n    <p>Suomessa paino on aina ensimmäisellä tavulla. Portugalissa paino on yleensä toiseksi viimeisellä tavulla. Aksenttimerkki (á, é, ê, ó, ô) siirtää painon merkitylle tavulle. Ääntämisohjeissa painollinen tavu on sininen.</p>\n    <ul class=\"esim\">\n      <li class=\"s\">obrigado</li>\n      <li class=\"s\">café</li>\n      <li class=\"s\">você</li>\n    </ul>\n  </div>\n\n  <div class=\"saanto\">\n    <h3>2. Sanan lopun o kuulostaa u:lta ja e i:ltä</h3>\n    <p>Painoton o sanan lopussa äännetään u, ja painoton e äännetään i. Myös pikkusana <span class=\"pt\">e</span> (ja) äännetään i.</p>\n    <ul class=\"esim\">\n      <li class=\"s\">tudo</li>\n      <li class=\"s\">como</li>\n      <li class=\"s\">leite</li>\n    </ul>\n  </div>\n\n  <div class=\"saanto\">\n    <h3>3. d ja t muuttuvat i-äänteen edellä</h3>\n    <p>Kun d:n tai t:n jälkeen tulee i-äänne, d pehmenee lähes dz-äänteeksi ja t ts-äänteeksi (IPA dʒ ja tʃ). Ääntämisohjeessa ne kirjoitetaan d ja ts: dia = DI-a, noite = NOI-tsi. Sääntö koskee myös loppu-e:tä, koska se kuulostaa i:ltä.</p>\n    <ul class=\"esim\">\n      <li class=\"s\">dia</li>\n      <li class=\"s\">tia</li>\n      <li class=\"s\">cidade</li>\n      <li class=\"s\">noite</li>\n    </ul>\n  </div>\n\n  <div class=\"saanto\">\n    <h3>4. Kaksi erilaista r-äännettä</h3>\n    <p>Sanan alussa, kahden r:n kohdalla ja tavun lopussa r on Belo Horizontessa pehmeä h, kuten suomen sanassa ”hauska”. Kahden vokaalin välissä ja konsonantin jälkeen r on lyhyt kielen napautus, kuten suomen r.</p>\n    <ul class=\"esim\">\n      <li class=\"s\">Rio</li>\n      <li class=\"s\">carro</li>\n      <li class=\"s\">caro</li>\n      <li class=\"s\">mar</li>\n    </ul>\n    <p>Vertaa: <span class=\"pt\">carro</span> on auto ja <span class=\"pt\">caro</span> on kallis. Riossa h-äänne on karheampi, kuten saksan sanassa ”Bach”.</p>\n  </div>\n\n  <div class=\"saanto\">\n    <h3>5. s-äänne</h3>\n    <p>Sanan alussa ja lopussa s on tavallinen s. Kahden vokaalin välissä s on soinnillinen z, kuten englannin sanassa ”zoo”. Soinnillisen konsonantin (esimerkiksi m, d, g) edellä s on myös z.</p>\n    <ul class=\"esim\">\n      <li class=\"s\">dois</li>\n      <li class=\"s\">três</li>\n      <li class=\"s\">casa</li>\n      <li class=\"s\">mesmo</li>\n    </ul>\n    <p>Rion ääntämys tunnistetaan juuri s:stä: Riossa tavun lopun s on sh (dois = DOISH).</p>\n  </div>\n\n  <div class=\"saanto\">\n    <h3>6. Nasaalivokaalit</h3>\n    <p>Tildemerkki (ã, õ) ja tavun lopun m tai n tekevät vokaalista nasaalisen: ilma kulkee yhtä aikaa suun ja nenän kautta. Loppu-m:ää ei sanota huulet suljettuina. Vokaali vain soi nenässä.</p>\n    <ul class=\"esim\">\n      <li class=\"s\">não</li>\n      <li class=\"s\">pão</li>\n      <li class=\"s\">mãe</li>\n      <li class=\"s\">bom</li>\n      <li class=\"s\">bem</li>\n      <li class=\"s\">sim</li>\n    </ul>\n  </div>\n\n  <div class=\"saanto\">\n    <h3>7. Kirjainyhdistelmät</h3>\n    <p><b>lh</b> äännetään lj ja <b>nh</b> nj. <b>ch</b> on sh. <b>j</b> sekä <b>g</b> ennen e:tä ja i:tä ovat zh. <b>ç</b> on s, ja <b>qu</b> ennen e:tä ja i:tä on k.</p>\n    <ul class=\"esim\">\n      <li class=\"s\">filho</li>\n      <li class=\"s\">vinho</li>\n      <li class=\"s\">chá</li>\n      <li class=\"s\">Janeiro</li>\n      <li class=\"s\">gente</li>\n      <li class=\"s\">cozinha</li>\n    </ul>\n  </div>\n\n  <div class=\"saanto\">\n    <h3>8. Tavun lopun l kuulostaa u:lta</h3>\n    <p>Brasiliassa l sanan tai tavun lopussa äännetään u. Siksi <span class=\"pt\">Brasil</span> kuulostaa ”bra-ZIU” ja <span class=\"pt\">legal</span> ”le-GAU”.</p>\n    <ul class=\"esim\">\n      <li class=\"s\">Brasil</li>\n      <li class=\"s\">legal</li>\n      <li class=\"s\">sol</li>\n    </ul>\n  </div>\n\n  <div class=\"saanto\">\n    <h3>9. Alun h on äänetön</h3>\n    <p>h sanan alussa jätetään kokonaan ääntämättä.</p>\n    <ul class=\"esim\">\n      <li class=\"s\">hotel</li>\n      <li class=\"s\">hoje</li>\n    </ul>\n  </div>\n</section>";
  const TERVEHDYKSET = "<section class=\"osio\"><h2>Tervehtiminen</h2><p>Kellonajan tervehdykset käyvät myös hyvästelyksi. Ystävien kesken riittää oi.</p><ul class=\"esim\"><li class=\"s\" data-fi=\"Hei!\">Oi!</li><li class=\"s\" data-fi=\"Hei! (hieman muodollisempi)\">Olá!</li><li class=\"s\" data-fi=\"Hyvää huomenta, hyvää päivää (aamusta puoleenpäivään)\">Bom dia!</li><li class=\"s\" data-fi=\"Hyvää päivää (iltapäivällä)\">Boa tarde!</li><li class=\"s\" data-fi=\"Hyvää iltaa, hyvää yötä (pimeän tultua)\">Boa noite!</li><li class=\"s\" data-fi=\"Mitä kuuluu? Moro! (rento)\">E aí?</li></ul></section>\n<section class=\"osio\"><h2>Kuulumiset</h2><p>Tudo bem? on yleisin kysymys, ja siihen vastataan yleensä tudo bem, vaikka kaikki ei olisikaan hyvin.</p><ul class=\"esim\"><li class=\"s\" data-fi=\"Mitä kuuluu? (kaikki hyvin?)\">Tudo bem?</li><li class=\"s\" data-fi=\"Mitä kuuluu?\">Tudo bom?</li><li class=\"s\" data-fi=\"Kuinka voit?\">Como vai?</li><li class=\"s\" data-fi=\"Miten voit?\">Como você está?</li><li class=\"s\" data-fi=\"Hyvää, entä sinulle?\">Tudo bem, e você?</li><li class=\"s\" data-fi=\"Tosi hyvää!\">Tudo ótimo!</li><li class=\"s\" data-fi=\"Siinä ja siinä.\">Mais ou menos.</li><li class=\"s\" data-fi=\"Olen väsynyt. (mies)\">Estou cansado.</li></ul></section>\n<section class=\"osio\"><h2>Esittäytyminen</h2><ul class=\"esim\"><li class=\"s\" data-fi=\"Hauska tutustua!\">Muito prazer!</li><li class=\"s\" data-fi=\"Hauska tutustua! (lyhyt)\">Prazer!</li><li class=\"s\" data-fi=\"Nimeni on Jay.\">Eu me chamo Jay.</li><li class=\"s\" data-fi=\"Nimeni on Maia.\">Meu nome é Maia.</li><li class=\"s\" data-fi=\"Mikä sinun nimesi on?\">Como você se chama?</li><li class=\"s\" data-fi=\"Tässä on Jay. (mies)\">Este é o Jay.</li><li class=\"s\" data-fi=\"Tässä on Maia. (nainen)\">Esta é a Maia.</li><li class=\"s\" data-fi=\"Olen Suomesta.\">Eu sou da Finlândia.</li></ul></section>\n<section class=\"osio\"><h2>Kiitos ja kohteliaisuus</h2><p>Mies sanoo obrigado, nainen obrigada: sana tarkoittaa kirjaimellisesti ”kiitollinen”.</p><ul class=\"esim\"><li class=\"s\" data-fi=\"Kiitos! (mies sanoo)\">Obrigado!</li><li class=\"s\" data-fi=\"Kiitos! (nainen sanoo)\">Obrigada!</li><li class=\"s\" data-fi=\"Kiitos paljon!\">Muito obrigado!</li><li class=\"s\" data-fi=\"Ei kestä.\">De nada.</li><li class=\"s\" data-fi=\"Ole hyvä ja…, kiitos (pyytäessä)\">Por favor.</li><li class=\"s\" data-fi=\"Anteeksi (päästäkää ohi, saanko keskeyttää)\">Com licença.</li><li class=\"s\" data-fi=\"Anteeksi! (tuttavalle)\">Desculpa!</li><li class=\"s\" data-fi=\"Anteeksi! (kohteliaasti)\">Desculpe!</li><li class=\"s\" data-fi=\"Ei se mitään.\">Tudo bem.</li></ul></section>\n<section class=\"osio\"><h2>Hyvästely</h2><ul class=\"esim\"><li class=\"s\" data-fi=\"Hei hei!\">Tchau!</li><li class=\"s\" data-fi=\"Nähdään pian!\">Até logo!</li><li class=\"s\" data-fi=\"Nähdään!\">Até mais!</li><li class=\"s\" data-fi=\"Nähdään huomenna!\">Até amanhã!</li><li class=\"s\" data-fi=\"Nähdään ihan kohta!\">Até já!</li><li class=\"s\" data-fi=\"Nähdään!\">A gente se vê!</li><li class=\"s\" data-fi=\"Pusu! (viestin lopussa ystävälle)\">Um beijo!</li><li class=\"s\" data-fi=\"Halaus! (viestin lopussa)\">Um abraço!</li></ul></section>\n<section class=\"osio\"><h2>Puhuttelu</h2><p>Vanhemmille ihmisille sanotaan seu tai dona ja etunimi, ja te-muotona o senhor tai a senhora.</p><ul class=\"esim\"><li class=\"s\" data-fi=\"herra Walker\">seu Walker</li><li class=\"s\" data-fi=\"rouva Marta\">dona Marta</li><li class=\"s\" data-fi=\"Mistä te olette kotoisin? (miehelle)\">O senhor é de onde?</li><li class=\"s\" data-fi=\"Voitteko hyvin? (naiselle)\">A senhora está bem?</li></ul></section>\n";
  /* Ääntämisen merkinnät ovat index.html:n pohjassa #aantaminen-pohja (selaimessa); äänitystyökalu lukee sen erikseen. */
  const merkinnat = () => (typeof document !== 'undefined' && document.getElementById('aantaminen-pohja'))
    ? document.getElementById('aantaminen-pohja').innerHTML : '';

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const jaksoNimi = id => {
    const o = (K.oppitunnit || []).find(x => x.id === id);
    return o ? `<a href="#${id}">${esc(o.jakso)}</a>` : '';
  };

  function verbikortti(v) {
    const s = saannollinen(v.inf);
    const m = Object.assign({}, s, ...['pre', 'per', 'imp', 'kask', 'ger'].filter(k => v[k]).map(k => ({ [k]: v[k] })));
    // Epäsäännöllinen muoto (eri kuin säännöllisen päätteen antama) korostetaan.
    const muoto = (k, i) => {
      const f = i === undefined ? m[k] : m[k][i], r = i === undefined ? s[k] : s[k][i];
      return f === r || v.malli ? esc(f) : `<b class="poikkeus">${esc(f)}</b>`;
    };
    const rivit = PERSOONAT.map((p, i) =>
      `<tr><th>${esc(p)}</th>${AIKAMUODOT.map(([k]) => `<td lang="pt-BR">${muoto(k, i)}</td>`).join('')}</tr>`).join('');
    return `<article class="verbikortti${v.malli ? ' malli' : ''}" id="verbi-${esc(v.inf)}">
  <h3><span class="pt">${esc(v.inf)}</span> <small>${esc(v.fi)}</small>${v.jakso ? ` <span class="jakso-linkki">${jaksoNimi(v.jakso)}</span>` : ''}</h3>
  <div class="vieritys"><table class="verbitaulu"><thead><tr><th></th>${AIKAMUODOT.map(([, n]) => `<th>${n}</th>`).join('')}</tr></thead>
  <tbody>${rivit}</tbody></table></div>
  <p class="verbi-muut"><b>Käsky</b> <span lang="pt-BR">${muoto('kask', 0)}!</span> (sinulle) · <span lang="pt-BR">${muoto('kask', 1)}!</span> (teille) ·
    <b>Gerundi</b> <span lang="pt-BR">${muoto('ger')}</span> (estar + gerundi = olla tekemässä)</p>
  ${v.huom ? `<p class="verbi-huom">${esc(v.huom)}</p>` : ''}
</article>`;
  }

  const taulu = (otsikot, rivit) => `<div class="vieritys"><table class="hakutaulu"><thead><tr>${otsikot.map(o => `<th>${o}</th>`).join('')}</tr></thead><tbody>${
    rivit.map(r => `<tr>${r.map((c, i) => `<td${i ? '' : ' class="pt-solu"'}>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const pt = s => `<span class="pt">${s}</span>`;
  /* Säännölliset verbit luokittain, yleisimmät ensin. Taulukko näyttää kaksi tärkeää muotoa, jotka kirjoitusasun
     takia joskus muuttuvat (-car → -quei, -gar → -guei, -çar → -cei, -cer → -ço). */
  const SAANNOLLISET = {
    ar: [['falar', 'puhua'], ['morar', 'asua'], ['trabalhar', 'tehdä työtä'], ['gostar (de)', 'pitää jostakin'], ['ficar', 'jäädä; tulla joksikin'],
      ['chegar', 'saapua'], ['precisar (de)', 'tarvita'], ['achar', 'luulla; löytää'], ['pensar', 'ajatella'], ['esperar', 'odottaa'],
      ['chamar', 'kutsua (chamar-se = olla nimeltään)'], ['ajudar', 'auttaa'], ['olhar', 'katsoa'], ['comprar', 'ostaa'], ['tomar', 'ottaa; juoda'],
      ['levar', 'viedä'], ['passar', 'kulkea; viettää'], ['voltar', 'palata'], ['entrar', 'mennä sisään'], ['começar', 'aloittaa'],
      ['encontrar', 'tavata; löytää'], ['estudar', 'opiskella'], ['jogar', 'pelata'], ['andar', 'kävellä'], ['lembrar', 'muistaa'],
      ['almoçar', 'syödä lounasta'], ['jantar', 'syödä illallista'], ['cantar', 'laulaa'], ['dançar', 'tanssia'], ['usar', 'käyttää']],
    er: [['comer', 'syödä'], ['beber', 'juoda'], ['viver', 'elää, asua'], ['entender', 'ymmärtää'], ['aprender', 'oppia'],
      ['conhecer', 'tuntea, tutustua'], ['esquecer', 'unohtaa'], ['escrever', 'kirjoittaa'], ['responder', 'vastata'], ['receber', 'saada, vastaanottaa'],
      ['vender', 'myydä'], ['correr', 'juosta'], ['escolher', 'valita'], ['acontecer', 'tapahtua'], ['nascer', 'syntyä'], ['morrer', 'kuolla']],
    ir: [['abrir', 'avata'], ['partir', 'lähteä'], ['decidir', 'päättää'], ['assistir', 'katsoa (tv:tä), seurata'], ['permitir', 'sallia'],
      ['existir', 'olla olemassa'], ['discutir', 'keskustella, väitellä'], ['dividir', 'jakaa'], ['insistir', 'vaatia, sinnitellä'], ['unir', 'yhdistää']]
  };
  function euMuodot(inf) {
    const v = inf.split(' ')[0], m = saannollinen(v);
    let pre = m.pre[0], per = m.per[0];
    if (/cer$/.test(v)) pre = v.slice(0, -3) + 'ço';
    if (/car$/.test(v)) per = v.slice(0, -3) + 'quei';
    if (/gar$/.test(v)) per = v.slice(0, -3) + 'guei';
    if (/çar$/.test(v)) per = v.slice(0, -3) + 'cei';
    return [pre, per];
  }
  const LUOKAT = [['ar', 'falar', 'puhun', 'puhuin'], ['er', 'comer', 'syön', 'söin'], ['ir', 'abrir', 'avaan', 'avasin']];

  const yhteisetHuomiot = () => `
<div class="huomio"><p><b>Neljä persoonaa:</b> Brasiliassa <span class="pt">você</span>, <span class="pt">ele</span>, <span class="pt">ela</span> ja
<span class="pt">a gente</span> (me, arkikieli) taivutetaan samalla muodolla, samoin <span class="pt">vocês</span>, <span class="pt">eles</span> ja <span class="pt">elas</span>.
Siksi taulukoissa on neljä riviä.</p></div>
<div class="huomio"><p><b>Perfekti vai imperfekti?</b> Perfekti kertoo yhden päättyneen tapahtuman (<span class="pt">ontem eu fui ao mercado</span>, eilen menin torille).
Imperfekti kertoo tavasta, taustasta tai kuvauksesta menneisyydessä (<span class="pt">quando eu era criança, eu ia à praia</span>, lapsena kävin rannalla).</p></div>`;

  const saannollisetSivu = () => `
<p>Useimmat verbit ovat säännöllisiä. Perusmuodon pääte kertoo luokan: <i>-ar</i>, <i>-er</i> tai <i>-ir</i>.
Pääte otetaan pois ja vartaloon lisätään luokan pääte: <span class="pt">falar</span> → <i>fal-</i> + <i>-o</i> = <span class="pt">falo</span>.
Opettele yksi malli kustakin luokasta, niin osaat kaikki luokan verbit. Yleisimmät verbit ovat kuitenkin usein epäsäännöllisiä: ne ovat sivulla
<a href="#epasaannolliset">Epäsäännölliset verbit</a>.</p>
${yhteisetHuomiot()}
<div class="huomio"><p><b>Käskymuoto puheessa:</b> arkipuheessa käskynä käytetään usein preesensin muotoa: <span class="pt">fala!</span>, <span class="pt">come!</span>.
Taulukon käskymuoto (<span class="pt">fale</span>, <span class="pt">coma</span>) on kohteliaampi.</p></div>
${LUOKAT.map(([luokka, malli, pre, per]) => `
<section class="osio"><h2>-${luokka}-verbit</h2>
<div class="verbikortit">${verbikortti(VERBIT.find(v => v.inf === malli))}</div>
<div data-taivutus><div data-taivutus>${taulu(['Verbi', 'Suomi', `eu, preesens (${pre})`, `eu, perfekti (${per})`],
  SAANNOLLISET[luokka].map(([inf, fi]) => { const [a, b] = euMuodot(inf); return [pt(inf), fi, pt(a), pt(b)]; }))}</div></div>
</section>`).join('')}
<div class="huomio"><p><b>Vain kirjoitus muuttuu:</b> ääntämyksen säilyttämiseksi <span class="pt">ficar</span> → <span class="pt">fiquei</span>,
<span class="pt">chegar</span> → <span class="pt">cheguei</span>, <span class="pt">começar</span> → <span class="pt">comecei</span> ja
<span class="pt">conhecer</span> → <span class="pt">conheço</span>. Verbit ovat silti säännöllisiä.</p></div>
<ul class="esim">
  <li class="s" data-fi="Minä puhun portugalia.">Eu falo português.</li>
  <li class="s" data-fi="Me söimme pão de queijota.">A gente comeu pão de queijo.</li>
  <li class="s" data-fi="Hän avasi oven.">Ela abriu a porta.</li>
  <li class="s" data-fi="Jay on syömässä.">O Jay está comendo.</li>
</ul>
<p>Jakso: ${jaksoNimi('l04')}</p>`;

  const epasaannollisetSivu = () => `
<p>Yleisimmät verbit ovat usein epäsäännöllisiä, koska niitä käytetään niin paljon. <b class="poikkeus">Korostettu</b> muoto poikkeaa säännöllisestä
taivutuksesta, ja se pitää opetella erikseen. Muut muodot taipuvat kuten säännölliset verbit (<a href="#verbit">Verbien taivutus</a>).
Moni verbi on epäsäännöllinen vain yhdessä muodossa: <span class="pt">ouvir</span> → <span class="pt">eu ouço</span>.</p>
${yhteisetHuomiot()}
<nav class="verbihakemisto">${VERBIT.filter(v => v.ryhma).map(v => `<a href="#epasaannolliset" data-hyppy="verbi-${esc(v.inf)}" lang="pt-BR">${esc(v.inf)}</a>`).join('')}</nav>
${EPA_RYHMAT.map(([r, nimi]) => `<section class="osio"><h2>${nimi}</h2>
<div class="verbikortit">${VERBIT.filter(v => v.ryhma === r).map(verbikortti).join('')}</div></section>`).join('')}`;

  const pari = (a, b, fa, fb) => [pt(a), fa, pt(b), fb];
  const adjektiiviSivu = () => `
<section class="osio"><h2>Taipuminen</h2>
<p>Adjektiivi taipuu substantiivin suvun ja luvun mukaan, ja se tulee yleensä substantiivin jälkeen: <span class="pt">uma casa grande</span> (iso talo).</p>
${taulu(['Pääte', 'Maskuliini', 'Feminiini', 'Monikko (m. / f.)'], [
  ['-o / -a', pt('bonito'), pt('bonita'), pt('bonitos') + ' / ' + pt('bonitas')],
  ['-e (sama molemmissa)', pt('grande'), pt('grande'), pt('grandes')],
  ['konsonantti (sama molemmissa)', pt('feliz') + ', ' + pt('azul'), pt('feliz') + ', ' + pt('azul'), pt('felizes') + ', ' + pt('azuis') + ' (-l → -is)'],
  ['-ês / -esa', pt('português'), pt('portuguesa'), pt('portugueses') + ' / ' + pt('portuguesas')],
  ['-or / -ora', pt('trabalhador'), pt('trabalhadora'), pt('trabalhadores') + ' / ' + pt('trabalhadoras')]])}
<ul class="esim"><li class="s" data-fi="kaunis talo">uma casa bonita</li><li class="s" data-fi="kauniit talot">as casas bonitas</li>
<li class="s" data-fi="Maia on onnellinen.">A Maia está feliz.</li><li class="s" data-fi="Jay on pitkä.">O Jay é alto.</li></ul>
<p>Jaksot: ${jaksoNimi('l03')}, ${jaksoNimi('l06')}</p></section>

<section class="osio"><h2>Vertailu</h2>
${taulu(['Portugali', 'Suomi', 'Esimerkki'], [
  [pt('mais … (do) que'), 'enemmän kuin, -mpi kuin', pt('o Jay é mais alto que a Maia')], [pt('menos … (do) que'), 'vähemmän kuin', pt('é menos caro')],
  [pt('tão … quanto'), 'yhtä … kuin', pt('é tão bom quanto')], [pt('o mais …'), 'kaikkein -in', pt('a mais bonita')],
  [pt('melhor') + ' · ' + pt('pior'), 'parempi · huonompi', pt('bom') + ' → ' + pt('melhor') + ', ' + pt('ruim') + ' → ' + pt('pior')],
  [pt('maior') + ' · ' + pt('menor'), 'suurempi · pienempi', pt('grande') + ' → ' + pt('maior') + ', ' + pt('pequeno') + ' → ' + pt('menor')],
  [pt('-íssimo'), 'erittäin', pt('lindíssimo') + ', ' + pt('caríssimo')]])}
<p>Jaksot: ${jaksoNimi('l11')}, ${jaksoNimi('l19')}</p></section>

<section class="osio"><h2>Yleisimmät adjektiivit vastakohtapareina</h2>
${taulu(['Portugali', 'Suomi', 'Vastakohta', 'Suomi'], [
  pari('grande', 'pequeno', 'iso', 'pieni'), pari('bom', 'ruim', 'hyvä', 'huono'), pari('novo', 'velho', 'uusi; nuori', 'vanha'),
  pari('bonito', 'feio', 'kaunis', 'ruma'), pari('alto', 'baixo', 'pitkä, korkea', 'lyhyt, matala'), pari('caro', 'barato', 'kallis', 'halpa'),
  pari('quente', 'frio', 'kuuma, lämmin', 'kylmä'), pari('fácil', 'difícil', 'helppo', 'vaikea'), pari('rápido', 'lento', 'nopea', 'hidas'),
  pari('cheio', 'vazio', 'täysi', 'tyhjä'), pari('comprido', 'curto', 'pitkä (esine)', 'lyhyt'), pari('forte', 'fraco', 'vahva', 'heikko'),
  pari('gordo', 'magro', 'lihava', 'laiha'), pari('rico', 'pobre', 'rikas', 'köyhä'), pari('feliz', 'triste', 'onnellinen', 'surullinen'),
  pari('limpo', 'sujo', 'puhdas', 'likainen'), pari('aberto', 'fechado', 'auki', 'kiinni'), pari('certo', 'errado', 'oikea', 'väärä'),
  pari('jovem', 'idoso', 'nuori', 'iäkäs'), pari('cedo', 'tarde', 'aikaisin', 'myöhään')])}
</section>

<section class="osio"><h2>Olotilat (estar + adjektiivi)</h2>
<p>Ohimenevä tila sanotaan verbillä <span class="pt">estar</span>: <span class="pt">estou cansado</span> (olen väsynyt).</p>
${taulu(['Portugali', 'Suomi'], [[pt('cansado'), 'väsynyt'], [pt('ocupado'), 'kiireinen'], [pt('contente'), 'tyytyväinen'], [pt('nervoso'), 'hermostunut'],
  [pt('doente'), 'sairas'], [pt('preocupado'), 'huolissaan'], [pt('animado'), 'innostunut'], [pt('com fome'), 'nälkäinen'], [pt('com sede'), 'janoinen']])}
<p>Jakso: ${jaksoNimi('l06')}</p></section>`;

  const variSivu = () => `
<p>Värit ovat adjektiiveja: ne tulevat substantiivin jälkeen ja taipuvat kuten muutkin adjektiivit. Osa väreistä ei taivu lainkaan.</p>
${taulu(['Portugali', 'Suomi', 'Taipuminen'], [
  [pt('vermelho'), 'punainen', pt('vermelha') + ', ' + pt('vermelhos')], [pt('azul'), 'sininen', 'monikko ' + pt('azuis')],
  [pt('verde'), 'vihreä', 'monikko ' + pt('verdes')], [pt('amarelo'), 'keltainen', pt('amarela') + ', ' + pt('amarelos')],
  [pt('branco'), 'valkoinen', pt('branca') + ', ' + pt('brancos')], [pt('preto'), 'musta', pt('preta') + ', ' + pt('pretos')],
  [pt('cinza'), 'harmaa', 'ei taivu'], [pt('marrom'), 'ruskea', 'monikko ' + pt('marrons')], [pt('laranja'), 'oranssi', 'ei taivu'],
  [pt('rosa'), 'vaaleanpunainen', 'ei taivu'], [pt('roxo'), 'violetti', pt('roxa') + ', ' + pt('roxos')], [pt('bege'), 'beige', 'ei taivu'],
  [pt('dourado'), 'kullanvärinen', pt('dourada')], [pt('prateado'), 'hopeanvärinen', pt('prateada')]])}
<p>Vaalea ja tumma: <span class="pt">azul-claro</span> (vaaleansininen), <span class="pt">verde-escuro</span> (tummanvihreä). Väri kysytään
<span class="pt">de que cor é?</span> (minkä värinen se on?).</p>
<ul class="esim"><li class="s" data-fi="punainen auto">um carro vermelho</li><li class="s" data-fi="valkoinen paita">uma camisa branca</li>
<li class="s" data-fi="siniset silmät">olhos azuis</li><li class="s" data-fi="Minkä värinen se on?">De que cor é?</li></ul>
<p>Jakso: ${jaksoNimi('l12')}</p>`;

  const suuntaSivu = () => `
<section class="osio"><h2>Missä? Sijainti</h2>
${taulu(['Portugali', 'Suomi', 'Esimerkki'], [
  [pt('em cima de'), 'päällä, yläpuolella', pt('em cima da mesa')], [pt('embaixo de'), 'alla, alapuolella', pt('embaixo da cama')],
  [pt('dentro de'), 'sisällä', pt('dentro da caixa')], [pt('fora de'), 'ulkona, ulkopuolella', pt('fora de casa')],
  [pt('na frente de'), 'edessä', pt('na frente do hotel')], [pt('atrás de'), 'takana', pt('atrás da porta')],
  [pt('ao lado de'), 'vieressä', pt('ao lado do banco')], [pt('entre'), 'välissä', pt('entre a farmácia e o bar')],
  [pt('no meio de') + ' · ' + pt('no centro de'), 'keskellä', pt('no meio da praça')], [pt('perto de'), 'lähellä', pt('perto daqui')],
  [pt('longe de'), 'kaukana', pt('longe do centro')], [pt('do outro lado de'), 'toisella puolella', pt('do outro lado da rua')],
  [pt('em frente a'), 'vastapäätä', pt('em frente ao mercado')], [pt('na esquina'), 'kulmassa', pt('na esquina da rua')]])}
<p><span class="pt">de</span> yhdistyy artikkeliin: <span class="pt">de + a mesa</span> = <span class="pt">da mesa</span> (ks. <a href="#artikkelit">Artikkelit ja prepositiot</a>).</p></section>

<section class="osio"><h2>Minne? Suunta</h2>
${taulu(['Portugali', 'Suomi'], [
  [pt('à direita'), 'oikealle, oikealla'], [pt('à esquerda'), 'vasemmalle, vasemmalla'], [pt('em frente') + ' · ' + pt('reto') + ' · ' + pt('direto'), 'suoraan eteenpäin'],
  [pt('para cima'), 'ylös'], [pt('para baixo'), 'alas'], [pt('para trás'), 'taakse, takaisin'], [pt('para frente'), 'eteenpäin'],
  [pt('para dentro'), 'sisään'], [pt('para fora'), 'ulos'], [pt('virar'), 'kääntyä'], [pt('seguir') + ' · ' + pt('continuar'), 'jatkaa']])}
<ul class="esim"><li class="s" data-fi="Käänny oikealle.">Vira à direita.</li><li class="s" data-fi="Jatka suoraan eteenpäin.">Segue reto.</li>
<li class="s" data-fi="Pankki on apteekin vieressä.">O banco fica ao lado da farmácia.</li><li class="s" data-fi="Onko se kaukana täältä?">É longe daqui?</li></ul>
<p>Sijainti sanotaan usein verbillä <span class="pt">ficar</span>: <span class="pt">onde fica o hotel?</span> (missä hotelli on?).</p></section>

<section class="osio"><h2>Täällä, siellä, tuolla</h2>
${taulu(['Portugali', 'Suomi'], [[pt('aqui'), 'täällä (puhujan luona)'], [pt('aí'), 'siellä (kuulijan luona)'], [pt('lá') + ' · ' + pt('ali'), 'tuolla (kaukana)'],
  [pt('cá'), 'tänne, täällä'], [pt('daqui'), 'täältä'], [pt('dali') + ' · ' + pt('de lá'), 'sieltä, tuolta']])}
<p>Jaksot: ${jaksoNimi('l08')}, ${jaksoNimi('l14')}</p></section>`;

  const pronominiSivu = () => `
<section class="osio"><h2>Persoonapronominit (tekijä)</h2>
${taulu(['Suomi', 'Portugali', 'Huomio'], [
  ['minä', pt('eu'), ''], ['sinä', pt('você'), 'tavallinen sinä Brasiliassa; tu vain alueellisesti'],
  ['te (kohtelias)', pt('o senhor') + ', ' + pt('a senhora'), 'vanhemmille ja tuntemattomille'],
  ['hän', pt('ele') + ', ' + pt('ela'), 'ele mies, ela nainen'], ['me', pt('nós'), 'kirjakielessä'],
  ['me', pt('a gente'), 'puheessa yleisin; verbi kuten ele: a gente vai'], ['te', pt('vocês'), ''],
  ['he', pt('eles') + ', ' + pt('elas'), 'elas vain naisista']])}
<p>Jakso: ${jaksoNimi('l01')}</p></section>

<section class="osio"><h2>Omistussanat</h2>
${taulu(['Omistaja', 'Yksikkö (m. / f.)', 'Monikko (m. / f.)'], [
  ['minun', pt('meu') + ' / ' + pt('minha'), pt('meus') + ' / ' + pt('minhas')],
  ['sinun', pt('seu') + ' / ' + pt('sua'), pt('seus') + ' / ' + pt('suas')],
  ['hänen', pt('dele') + ' (miehen) · ' + pt('dela') + ' (naisen)', 'sama: ' + pt('dele') + ', ' + pt('dela')],
  ['meidän', pt('nosso') + ' / ' + pt('nossa'), pt('nossos') + ' / ' + pt('nossas')],
  ['heidän', pt('deles') + ' / ' + pt('delas'), 'sama']])}
<p>Omistussana taipuu omistetun asian mukaan, ei omistajan: <span class="pt">a minha casa</span>, <span class="pt">o meu carro</span>.
Brasiliassa <span class="pt">seu</span> tarkoittaa yleensä sinun; hänen sanotaan <span class="pt">dele</span> tai <span class="pt">dela</span> substantiivin jälkeen: <span class="pt">a casa dela</span>.</p>
<ul class="esim"><li class="s" data-fi="Tämä on minun äitini.">Esta é a minha mãe.</li><li class="s" data-fi="Maian auto on uusi. Hänen autonsa on uusi.">O carro dela é novo.</li></ul>
<p>Jakso: ${jaksoNimi('l05')}</p></section>

<section class="osio"><h2>Tämä, tuo, tuo tuolla</h2>
${taulu(['Suomi', 'Portugali', 'Missä'], [
  ['tämä', pt('este') + ' / ' + pt('esta') + ' · ' + pt('isto'), 'puhujan luona (' + pt('aqui') + ')'],
  ['tämä, tuo', pt('esse') + ' / ' + pt('essa') + ' · ' + pt('isso'), 'kuulijan luona (' + pt('aí') + '); puheessa usein myös tämä'],
  ['tuo tuolla', pt('aquele') + ' / ' + pt('aquela') + ' · ' + pt('aquilo'), 'kaukana (' + pt('lá') + ')']])}
<p>Muodot <span class="pt">isto</span>, <span class="pt">isso</span>, <span class="pt">aquilo</span> eivät taivu: ne viittaavat asiaan, jonka nimeä ei sanota. Jaksot: ${jaksoNimi('l05')}, ${jaksoNimi('l08')}</p></section>

<section class="osio"><h2>Objektipronominit</h2>
${taulu(['Tekijä', 'Objekti (kirjakieli)', 'Puheessa Brasiliassa'], [
  [pt('eu'), pt('me'), pt('me') + ': ele me viu'], [pt('você'), pt('te') + ', ' + pt('o') + ' / ' + pt('a'), pt('te') + ': eu te amo'],
  [pt('ele') + ' / ' + pt('ela'), pt('o') + ' / ' + pt('a') + ' · ' + pt('lhe') + ' (hänelle)', pt('ele') + ' / ' + pt('ela') + ': eu vi ela'],
  [pt('nós') + ', ' + pt('a gente'), pt('nos'), pt('a gente') + ': ele viu a gente'],
  [pt('eles') + ' / ' + pt('elas'), pt('os') + ' / ' + pt('as') + ' · ' + pt('lhes'), pt('eles') + ' / ' + pt('elas')]])}
<p>Brasiliassa pronomini tulee tavallisesti verbin eteen: <span class="pt">eu te ligo</span> (soitan sinulle). Jakso: ${jaksoNimi('l12')}</p></section>

<section class="osio"><h2>Refleksiivipronominit</h2>
${taulu(['Tekijä', 'Pronomini', 'Esimerkki'], [
  [pt('eu'), pt('me'), pt('eu me levanto') + ' (nousen)'], [pt('você') + ', ' + pt('ele') + ', ' + pt('ela'), pt('se'), pt('ela se chama Maia')],
  [pt('nós'), pt('nos'), pt('nós nos vemos') + ' (näemme)'], [pt('a gente'), pt('se'), pt('a gente se vê') + ' (nähdään)'],
  [pt('vocês') + ', ' + pt('eles'), pt('se'), pt('eles se casaram')]])}
<p>Jakso: ${jaksoNimi('l13')}</p></section>

<section class="osio"><h2>Com + pronomini</h2>
${taulu(['Suomi', 'Portugali'], [['minun kanssani', pt('comigo')], ['sinun kanssasi', pt('com você')], ['hänen kanssaan', pt('com ele') + ', ' + pt('com ela')],
  ['meidän kanssamme', pt('com a gente') + ' · ' + pt('conosco')], ['teidän kanssanne', pt('com vocês')]])}
<p>Jakso: ${jaksoNimi('l16')}</p></section>`;

  const artikkeliSivu = () => `
<section class="osio"><h2>Artikkelit</h2>
${taulu(['', 'Maskuliini', 'Feminiini', 'Suomi'], [
  ['määräinen yksikkö', pt('o'), pt('a'), 'se tietty'], ['määräinen monikko', pt('os'), pt('as'), 'ne tietyt'],
  ['epämääräinen yksikkö', pt('um'), pt('uma'), 'eräs, yksi'], ['epämääräinen monikko', pt('uns'), pt('umas'), 'jotkut, noin']])}
<p>Portugalissa artikkeli on melkein aina mukana, myös nimien edessä: <span class="pt">a Maia</span>, <span class="pt">o Jay</span>. Jakso: ${jaksoNimi('l03')}</p></section>

<section class="osio"><h2>Tärkeimmät prepositiot</h2>
${taulu(['Portugali', 'Suomi', 'Esimerkki'], [
  [pt('em'), '-ssa, -lla, -lle (paikka)', pt('em Helsinque')], [pt('de'), '-sta, -n (lähtö, omistus, aine)', pt('de Belo Horizonte') + ', ' + pt('a casa da Marta')],
  [pt('a') + ', ' + pt('para'), '-lle (suunta)', pt('vou para casa')], [pt('com'), 'kanssa', pt('com a Maia')], [pt('sem'), 'ilman', pt('café sem açúcar')],
  [pt('por'), 'kautta, takia, -sta (kiitos)', pt('obrigado pelo café')], [pt('para'), 'varten, jotta', pt('para você')],
  [pt('até'), 'asti, -hin', pt('até amanhã')], [pt('desde'), 'lähtien', pt('desde 2020')], [pt('entre'), 'välissä', pt('entre a casa e o parque')]])}
</section>

<section class="osio"><h2>Preposition ja artikkelin yhdistyminen</h2>
<p>Prepositiot <span class="pt">de</span> (-sta, -n), <span class="pt">em</span> (-ssa, -lla), <span class="pt">a</span> (-lle) ja <span class="pt">por</span> (kautta, takia) sulautuvat artikkeliin.</p>
${taulu(['', pt('o'), pt('a'), pt('os'), pt('as'), pt('um'), pt('uma')], [
  [pt('de'), pt('do'), pt('da'), pt('dos'), pt('das'), pt('dum') + ' / de um', pt('duma') + ' / de uma'],
  [pt('em'), pt('no'), pt('na'), pt('nos'), pt('nas'), pt('num'), pt('numa')],
  [pt('a'), pt('ao'), pt('à'), pt('aos'), pt('às'), '–', '–'],
  [pt('por'), pt('pelo'), pt('pela'), pt('pelos'), pt('pelas'), '–', '–']])}
<ul class="esim"><li class="s" data-fi="Olen Suomesta.">Eu sou da Finlândia.</li><li class="s" data-fi="Maia on keittiössä.">A Maia está na cozinha.</li>
<li class="s" data-fi="Menemme torille.">A gente vai ao mercado.</li><li class="s" data-fi="Kävelemme puiston läpi.">A gente passa pelo parque.</li></ul>
<p>Samoin pronominien kanssa: <span class="pt">de + ele</span> = <span class="pt">dele</span>, <span class="pt">em + este</span> = <span class="pt">neste</span>, <span class="pt">de + aquele</span> = <span class="pt">daquele</span>.
Jaksot: ${jaksoNimi('l02')}, ${jaksoNimi('l03')}</p></section>`;

  const kysymysSivu = () => `
${taulu(['Portugali', 'Suomi', 'Esimerkki'], [
  [pt('o que') + ' · ' + pt('que'), 'mitä, mikä', pt('o que é isso?')], [pt('quem'), 'kuka', pt('quem é ele?')],
  [pt('onde'), 'missä', pt('onde você mora?')], [pt('aonde'), 'minne', pt('aonde você vai?')], [pt('de onde'), 'mistä', pt('de onde você é?')],
  [pt('quando'), 'milloin', pt('quando a gente vai?')], [pt('como'), 'miten, millainen', pt('como você está?')],
  [pt('por que'), 'miksi', pt('por que você está aqui?')], [pt('porque'), 'koska (vastaus)', pt('porque eu gosto')],
  [pt('qual') + ', ' + pt('quais'), 'mikä, mitkä (valinta)', pt('qual é o seu nome?')],
  [pt('quanto') + ', ' + pt('quanta'), 'kuinka paljon', pt('quanto custa?')], [pt('quantos') + ', ' + pt('quantas'), 'kuinka monta', pt('quantos anos você tem?')]])}
<ul class="esim"><li class="s" data-fi="Mistä sinä olet kotoisin?">De onde você é?</li><li class="s" data-fi="Paljonko se maksaa?">Quanto custa?</li>
<li class="s" data-fi="Kuinka vanha olet?">Quantos anos você tem?</li><li class="s" data-fi="Miksi? Koska!">Por quê? Porque sim!</li></ul>
<div class="huomio"><p><b>Kyllä–ei-kysymys</b> tehdään pelkällä äänensävyllä: <span class="pt">você é mineiro?</span> Sanajärjestys ei muutu, vain intonaatio nousee lopussa.
Lauseen lopussa <span class="pt">por que</span> kirjoitetaan <span class="pt">por quê</span>.</p></div>
<p>Jaksot: ${jaksoNimi('l02')}, ${jaksoNimi('l07')}, ${jaksoNimi('l10')}</p>`;

  const numeroSivu = () => `
<section class="osio"><h2>Luvut</h2>
${taulu(['Luku', 'Portugali', 'Luku', 'Portugali'], [
  ['0', pt('zero'), '11', pt('onze')], ['1', pt('um') + ' / ' + pt('uma'), '12', pt('doze')], ['2', pt('dois') + ' / ' + pt('duas'), '13', pt('treze')],
  ['3', pt('três'), '14', pt('catorze')], ['4', pt('quatro'), '15', pt('quinze')], ['5', pt('cinco'), '16', pt('dezesseis')],
  ['6', pt('seis'), '17', pt('dezessete')], ['7', pt('sete'), '18', pt('dezoito')], ['8', pt('oito'), '19', pt('dezenove')],
  ['9', pt('nove'), '20', pt('vinte')], ['10', pt('dez'), '21', pt('vinte e um')]])}
${taulu(['Luku', 'Portugali', 'Luku', 'Portugali'], [
  ['30', pt('trinta'), '200', pt('duzentos') + ' / ' + pt('duzentas')], ['40', pt('quarenta'), '300', pt('trezentos')],
  ['50', pt('cinquenta'), '500', pt('quinhentos')], ['60', pt('sessenta'), '1000', pt('mil')], ['70', pt('setenta'), '2000', pt('dois mil')],
  ['80', pt('oitenta'), '1 000 000', pt('um milhão')], ['90', pt('noventa'), '', ''], ['100', pt('cem') + ' · 101 ' + pt('cento e um'), '', '']])}
<p>Luvut 1 ja 2 sekä sadat 200–900 taipuvat suvun mukaan: <span class="pt">um café</span>, <span class="pt">uma cerveja</span>, <span class="pt">duas horas</span>.
Kymmenet ja ykköset yhdistetään sanalla <span class="pt">e</span>: <span class="pt">trinta e cinco</span>. Puhelinnumeroissa 6 sanotaan usein <span class="pt">meia</span> (puoli tusinaa).</p>
<p>Jaksot: ${jaksoNimi('l01')}, ${jaksoNimi('l03')}, ${jaksoNimi('l04')}, ${jaksoNimi('l07')}</p></section>

<section class="osio"><h2>Järjestysluvut</h2>
${taulu(['', 'Portugali', '', 'Portugali'], [['1.', pt('primeiro'), '6.', pt('sexto')], ['2.', pt('segundo'), '7.', pt('sétimo')], ['3.', pt('terceiro'), '8.', pt('oitavo')],
  ['4.', pt('quarto'), '9.', pt('nono')], ['5.', pt('quinto'), '10.', pt('décimo')]])}
<p>Jakso: ${jaksoNimi('l09')}</p></section>

<section class="osio"><h2>Kellonajat</h2>
<ul class="esim"><li class="s" data-fi="Paljonko kello on?">Que horas são?</li><li class="s" data-fi="Kello on yksi.">É uma hora.</li>
<li class="s" data-fi="Kello on kaksi.">São duas horas.</li><li class="s" data-fi="Kello on puoli neljä.">São três e meia.</li>
<li class="s" data-fi="Kello on varttia vaille viisi.">São quinze para as cinco.</li><li class="s" data-fi="Kello kahdeksalta.">Às oito horas.</li></ul>
<p>Kello 1 on yksikössä (<span class="pt">é uma hora</span>), muut monikossa (<span class="pt">são duas horas</span>). Keskipäivä <span class="pt">meio-dia</span>, keskiyö <span class="pt">meia-noite</span>. Jakso: ${jaksoNimi('l10')}</p></section>

<section class="osio"><h2>Viikonpäivät ja kuukaudet</h2>
${taulu(['Päivä', 'Portugali', 'Kuukausi', 'Portugali'], [
  ['maanantai', pt('segunda-feira'), 'tammikuu', pt('janeiro') + ' · heinäkuu ' + pt('julho')], ['tiistai', pt('terça-feira'), 'helmikuu', pt('fevereiro') + ' · elokuu ' + pt('agosto')],
  ['keskiviikko', pt('quarta-feira'), 'maaliskuu', pt('março') + ' · syyskuu ' + pt('setembro')], ['torstai', pt('quinta-feira'), 'huhtikuu', pt('abril') + ' · lokakuu ' + pt('outubro')],
  ['perjantai', pt('sexta-feira'), 'toukokuu', pt('maio') + ' · marraskuu ' + pt('novembro')], ['lauantai', pt('sábado'), 'kesäkuu', pt('junho') + ' · joulukuu ' + pt('dezembro')],
  ['sunnuntai', pt('domingo'), '', '']])}
<p>Arkipäivät ovat järjestyslukuja: <span class="pt">segunda</span> on toinen, koska viikko alkaa sunnuntaista. Puheessa <span class="pt">-feira</span> jätetään usein pois.
Kuukaudet ja viikonpäivät kirjoitetaan pienellä. Jaksot: ${jaksoNimi('l02')}, ${jaksoNimi('l09')}</p></section>`;

  K.hakuosa = [
    { osio: '', id: 'aantaminen', otsikko: 'Ääntäminen', kuvaus: 'Ääntämisen merkinnät (IPA ja suomalainen ohje) ja ääntämisen yhdeksän sääntöä.',
      html: () => merkinnat() + SAANNOT },
    { osio: 'Kielioppi', id: 'verbit', otsikko: 'Verbien taivutus', kuvaus: 'Säännölliset -ar-, -er- ja -ir-verbit: mallit ja yleisimmät verbit.', html: saannollisetSivu },
    { osio: 'Kielioppi', id: 'epasaannolliset', otsikko: 'Epäsäännölliset verbit', kuvaus: 'Yleisimmät epäsäännölliset verbit ryhmittäin; poikkeavat muodot korostettu.', html: epasaannollisetSivu },
    { osio: 'Kielioppi', id: 'pronominit', otsikko: 'Pronominit', kuvaus: 'Persoona-, omistus-, osoitus-, objekti- ja refleksiivipronominit.', html: pronominiSivu },
    { osio: 'Kielioppi', id: 'artikkelit', otsikko: 'Artikkelit ja prepositiot', kuvaus: 'Artikkelit, prepositioiden yhdistymät ja tärkeimmät prepositiot.', html: artikkeliSivu },
    { osio: 'Kielioppi', id: 'adjektiivit', otsikko: 'Adjektiivit', kuvaus: 'Taipuminen, vertailu, yleisimmät adjektiivit vastakohtapareina ja olotilat.', html: adjektiiviSivu },
    { osio: 'Kielioppi', id: 'kysymyssanat', otsikko: 'Kysymyssanat', kuvaus: 'Kysymyssanat esimerkkeineen ja kyllä–ei-kysymys.', html: kysymysSivu },
    { valikko: 'ydinsanat', osio: 'Aihepiireittäin', id: 'tervehdykset', otsikko: 'Tervehdykset', kuvaus: 'Tervehdykset, kuulumiset, esittäytyminen, kiitokset, hyvästelyt ja puhuttelu.',
      html: () => TERVEHDYKSET + `<p>Jaksot: ${jaksoNimi('l00')}, ${jaksoNimi('l01')}, ${jaksoNimi('l02')}</p>` },
    { valikko: 'ydinsanat', osio: 'Aihepiireittäin', id: 'numerot', otsikko: 'Numerot ja aika', kuvaus: 'Luvut, järjestysluvut, kellonajat, viikonpäivät ja kuukaudet.', html: numeroSivu },
    { valikko: 'ydinsanat', osio: 'Aihepiireittäin', id: 'varit', otsikko: 'Värit', kuvaus: 'Värit ja niiden taipuminen.', html: variSivu },
    { valikko: 'ydinsanat', osio: 'Aihepiireittäin', id: 'suunnat', otsikko: 'Suunnat ja sijainnit', kuvaus: 'Missä ja minne: päällä, alla, vasemmalla, oikealla, keskellä, suoraan eteenpäin.', html: suuntaSivu }
  ];

  /* Hakuosan sanat, joita ei opeteta millään oppitunnilla (kupla ja äänite; paketti aanet/hakuosa.js). */
  K.lisaaSanat('hakuosa', {
    'desculpe': { fi: 'anteeksi (kohteliaasti)', aa: 'dis-KUU-pi', ipa: '[dʒisˈkuwpi]', sl: 'kohteliaisuus', huom: 'arkisempi {desculpa}' },
    'abraço': { fi: 'halaus', aa: 'a-BRA-su', ipa: '[aˈbɾasu]', sl: 'substantiivi, maskuliini', huom: 'viestin lopussa: {um abraço}' },
    'um abraço': { fi: 'halaus (viestin lopussa)', aa: 'ũ a-BRA-su', ipa: '[ũ aˈbɾasu]', sl: 'ilmaus' },
    'ligo': { fi: 'soitan (puhelimella)', aa: 'LI-gu', ipa: '[ˈliɡu]', sl: 'verbin {ligar} preesens, eu' },
    'casar-se': { fi: 'mennä naimisiin', aa: 'ka-ZAH-si', ipa: '[kaˈzahsi]', sl: 'refleksiiviverbi' },
    'casaram': { fi: 'menivät naimisiin', aa: 'ka-ZA-rãu', ipa: '[kaˈzaɾɐ̃w]', sl: 'verbin {casar-se} perfekti, eles' },
    'passa': { fi: 'kulkee, menee ohi; viettää', aa: 'PA-sa', ipa: '[ˈpasɐ]', sl: 'verbin {passar} preesens' },
    'dum': { fi: 'jostakin (de + um)', aa: 'dũ', ipa: '[dũ]', sl: 'prepositio + artikkeli', huom: '{de} + {um}' },
    'duma': { fi: 'jostakin (de + uma)', aa: 'DU-ma', ipa: '[ˈdumɐ]', sl: 'prepositio + artikkeli', huom: '{de} + {uma}' },
    'aos': { fi: '-lle (a + os)', aa: 'aus', ipa: '[aws]', sl: 'prepositio + artikkeli', huom: '{a} + {os}' },
    'trabalhador': { fi: 'ahkera; työntekijä', aa: 'tra-ba-lja-DOH', ipa: '[tɾabaʎaˈdoh]', sl: 'adjektiivi, substantiivi', huom: 'nainen: trabalhadora' },
    'íssimo': { fi: 'erittäin (adjektiivin pääte)', aa: 'I-si-mu', ipa: '[ˈisimu]', sl: 'pääte: lindo → lindíssimo' },
    'vazio': { fi: 'tyhjä', aa: 'va-ZI-u', ipa: '[vaˈziu]', sl: 'adjektiivi' },
    'sujo': { fi: 'likainen', aa: 'SU-zhu', ipa: '[ˈsuʒu]', sl: 'adjektiivi' },
    'fechado': { fi: 'suljettu, kiinni', aa: 'fe-SHA-du', ipa: '[feˈʃadu]', sl: 'adjektiivi' },
    'idoso': { fi: 'iäkäs', aa: 'i-DO-zu', ipa: '[iˈdozu]', sl: 'adjektiivi, substantiivi' },
    'ocupado': { fi: 'kiireinen; varattu', aa: 'o-ku-PA-du', ipa: '[okuˈpadu]', sl: 'adjektiivi' },
    'contente': { fi: 'tyytyväinen, iloinen', aa: 'kõ-TẼ-tsi', ipa: '[kõˈtẽtʃi]', sl: 'adjektiivi' },
    'animado': { fi: 'innostunut', aa: 'a-ni-MA-du', ipa: '[aniˈmadu]', sl: 'adjektiivi' },
    'sede': { fi: 'jano', aa: 'SE-di', ipa: '[ˈsedʒi]', sl: 'substantiivi, feminiini', huom: '{com sede} = janoinen' },
    'com sede': { fi: 'janoinen', aa: 'kõ SE-di', ipa: '[kõ ˈsedʒi]', sl: 'ilmaus', huom: 'estou com sede = minulla on jano' },
    'com fome': { fi: 'nälkäinen', aa: 'kõ FO-mi', ipa: '[kõ ˈfomi]', sl: 'ilmaus', huom: 'estou com fome = minulla on nälkä' },
    'bege': { fi: 'beige', aa: 'BE-zhi', ipa: '[ˈbɛʒi]', sl: 'väri, ei taivu' },
    'dourado': { fi: 'kullanvärinen', aa: 'dou-RA-du', ipa: '[dowˈɾadu]', sl: 'väri, adjektiivi' },
    'prateado': { fi: 'hopeanvärinen', aa: 'pra-tsi-A-du', ipa: '[pɾatʃiˈadu]', sl: 'väri, adjektiivi' },
    'azul-claro': { fi: 'vaaleansininen', aa: 'a-ZUU-KLA-ru', ipa: '[aˌzuwˈklaɾu]', sl: 'väri', huom: '{azul} + {claro}' },
    'verde-escuro': { fi: 'tummanvihreä', aa: 'VEH-di-is-KU-ru', ipa: '[ˌvehdʒiisˈkuɾu]', sl: 'väri', huom: '{verde} + {escuro}' },
    // Taivutusmuodot omina sanoinaan, jotta kupla kertoo oikean merkityksen (monikko = ”punaiset”, ei ”punainen”).
    // Tarkistus C-johdetut varmistaa, ettei sivulla ole sanoja, joiden merkitys tulee vain perusmuodosta.
    'bonito': { fi: 'kaunis, komea', aa: 'bo-NI-tu', ipa: '[boˈnitu]', sl: 'adjektiivi, maskuliini', huom: 'feminiini {bonita}, monikko {bonitos}' },
    'bonitos': { fi: 'kauniit, komeat (miehet tai sekaryhmä)', aa: 'bo-NI-tus', ipa: '[boˈnitus]', sl: 'adjektiivi, maskuliini, monikko', huom: 'yksikkö {bonito}' },
    'bonitas': { fi: 'kauniit (naiset; feminiinisanat)', aa: 'bo-NI-tas', ipa: '[boˈnitɐs]', sl: 'adjektiivi, feminiini, monikko', huom: 'yksikkö {bonita}' },
    'feliz': { fi: 'onnellinen', aa: 'fe-LIS', ipa: '[feˈlis]', sl: 'adjektiivi, sama molemmissa suvuissa', huom: 'monikko {felizes}' },
    'felizes': { fi: 'onnelliset', aa: 'fe-LI-zis', ipa: '[feˈlizis]', sl: 'adjektiivi, monikko', huom: 'yksikkö {feliz}; -z → -zes' },
    'portuguesas': { fi: 'portugalilaiset (naiset)', aa: 'poh-tu-GE-zas', ipa: '[pohtuˈɡezɐs]', sl: 'adjektiivi, substantiivi, feminiini, monikko', huom: 'yksikkö {portuguesa}' },
    'trabalhadora': { fi: 'ahkera; työntekijä (nainen)', aa: 'tra-ba-lja-DO-ra', ipa: '[tɾabaʎaˈdoɾɐ]', sl: 'adjektiivi, substantiivi, feminiini', huom: 'maskuliini {trabalhador}' },
    'trabalhadores': { fi: 'ahkerat; työntekijät (miehet tai sekaryhmä)', aa: 'tra-ba-lja-DO-ris', ipa: '[tɾabaʎaˈdoɾis]', sl: 'adjektiivi, substantiivi, maskuliini, monikko', huom: 'yksikkö {trabalhador}; -or → -ores' },
    'trabalhadoras': { fi: 'ahkerat; työntekijät (naiset)', aa: 'tra-ba-lja-DO-ras', ipa: '[tɾabaʎaˈdoɾɐs]', sl: 'adjektiivi, substantiivi, feminiini, monikko', huom: 'yksikkö {trabalhadora}' },
    'quais': { fi: 'mitkä, ketkä (monikko)', aa: 'KUAIS', ipa: '[ˈkwajs]', sl: 'kysymyssana, monikko', huom: 'yksikkö {qual}' },
    'pelos': { fi: 'kautta; -sta (maskuliinimonikon edellä)', aa: 'PE-lus', ipa: '[ˈpelus]', sl: 'prepositio + artikkeli, monikko', huom: '{por} + {os}; yksikkö {pelo}' },
    'pelas': { fi: 'kautta; -sta (feminiinimonikon edellä)', aa: 'PE-las', ipa: '[ˈpelɐs]', sl: 'prepositio + artikkeli, monikko', huom: '{por} + {as}; yksikkö {pela}' },
    'vermelhos': { fi: 'punaiset', aa: 'veh-ME-ljus', ipa: '[vehˈmeʎus]', sl: 'adjektiivi, monikko', huom: 'yksikkö {vermelho}' },
    'amarelos': { fi: 'keltaiset', aa: 'a-ma-RE-lus', ipa: '[amaˈɾɛlus]', sl: 'adjektiivi, monikko', huom: 'yksikkö {amarelo}' },
    'brancos': { fi: 'valkoiset', aa: 'BRÃ-kus', ipa: '[ˈbɾɐ̃kus]', sl: 'adjektiivi, monikko', huom: 'yksikkö {branco}' },
    'pretos': { fi: 'mustat', aa: 'PRE-tus', ipa: '[ˈpɾetus]', sl: 'adjektiivi, monikko', huom: 'yksikkö {preto}' },
    'marrons': { fi: 'ruskeat', aa: 'ma-HÕS', ipa: '[maˈhõs]', sl: 'adjektiivi, monikko', huom: 'yksikkö {marrom}; -m → -ns' },
    'roxa': { fi: 'violetti (feminiinisanan edellä)', aa: 'HO-sha', ipa: '[ˈhoʃɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {roxo}' },
    'roxos': { fi: 'violetit', aa: 'HO-shus', ipa: '[ˈhoʃus]', sl: 'adjektiivi, monikko', huom: 'yksikkö {roxo}' },
    'dourada': { fi: 'kullanvärinen (feminiinisanan edellä)', aa: 'dou-RA-da', ipa: '[dowˈɾadɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {dourado}' },
    'prateada': { fi: 'hopeanvärinen (feminiinisanan edellä)', aa: 'pra-tsi-A-da', ipa: '[pɾatʃiˈadɐ]', sl: 'adjektiivi, feminiini', huom: 'maskuliini {prateado}' }
  });
})();
