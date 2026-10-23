/* Tottakain oppaat: Kapivara (kertoja, Kapybara) ja Peixe-boi (Manaatti) portugaliksi. Korvaa Passon suomenkieliset
   repliikit (assets/hahmot.js: Kurssi.apuhahmot); hahmojen kuvat tulevat sieltä.
   Luonteet (käyttäjän linjaukset 16.10.2026, docs/TARINA.md): Kapivaralla erinomainen muisti ja viisaus, mutta vähän
   hölmö, joten kertaa paljon; ei ylpeä. Peixe-boi on laiska, rauhallinen ja aika fiksu. Kaksikko kuin Bud Spencer ja
   Terence Hill; molemmat rakastavat ruokaa ja erityisesti 'Esburgeria (Maian ääntämys) ja kannattavat Cruzeiroa.
   Asuvat yhdessä hiekkasärkällä Amazonilla. */
Kurssi.hahmoKuvat.kertoja.nimi = 'Capivara';
Kurssi.hahmoKuvat.manaatti.nimi = 'Peixe-boi';
// Jayn veli on Tottakaissa Hiisi (Passossa Kouvonen). Oma piirros (käyttäjä 16.10.2026): ei laseja eikä sänkeä,
// lyhyt keskiruskea tukka (ei piikkejä), farkkutakki valkoisella karvakauluksella, ilmeetön 😐-naama.
Kurssi.hahmoKuvat.hiisi = { iho: '#efc4a2', hiukset: '#8b5a2b', tukka: 'lyhyt', paita: '#4f74a8', tausta: '#f3d3c8', ilme: 'neutraali', lisat: ['farkkutakki'] };
// Sivuhahmot (käyttäjä 18.10.2026): stereotyyppinen, helposti tunnistettava siluetti, mutta yksinkertainen, ettei vie huomiota.
// Hesburgerin myyjä: nuori nainen, sininen paita ja sininen lippa punaisella H:lla (t04). Kauppahallin leipuri: kokinhattu (t03).
Kurssi.hahmoKuvat.hesemyyja = { iho: '#f1cfb4', hiukset: '#c99a5b', tukka: 'pitka', paita: '#1f4fa3', tausta: '#dfe8f5', ilme: 'hymy', lisat: ['visiiri-h'] };
Kurssi.hahmoKuvat.myyja = { iho: '#e8b996', hiukset: '#6b4a2f', tukka: 'lyhyt', paita: '#f4f1e8', tausta: '#f3e6d3', ilme: 'hymy', lisat: ['kokinhattu', 'viikset', 'esiliina'] };
// Tokmannin kassa (t03): keski-ikäinen nainen, punainen työliivi, lasit. Kallion kahvilan myyjä (t04): ilmeetön
// kalliolainen barista mustassa, esiliina (”nem pisca”).
Kurssi.hahmoKuvat.myyja2 = { iho: '#efcdb4', hiukset: '#b8875a', tukka: 'polkka', paita: '#c8322f', tausta: '#f5dcdc', ilme: 'hymy', lisat: ['lasit'] };
// Kauppahallin kahvilan myyjä (k01, ääni nainen5): nainen, vaalea polkkatukka, vaalea paita, esiliina (A6-45: aiemmin t03:n leipuri).
Kurssi.hahmoKuvat.kahvilamyyja = { iho: '#efcdb4', hiukset: '#b8875a', tukka: 'polkka', paita: '#f4f1e8', tausta: '#f3e6d3', ilme: 'hymy', lisat: ['esiliina'] };
Kurssi.hahmoKuvat.kahvila = { iho: '#e9c2a6', hiukset: '#1f1a17', tukka: 'kihara', paita: '#222222', tausta: '#e6dfd3', ilme: 'neutraali', lisat: ['esiliina'] };
// Tottakaissa Jaylla on suklaanruskea tukka (käyttäjä 16.10.2026); muuten sama kuin Passossa.
Kurssi.hahmoKuvat.jay = Object.assign({}, Kurssi.hahmoKuvat.jay, { hiukset: '#4e2a16' });
// ==== t06: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// t06: Oodin kirjastonhoitaja (ulkomaalaistaustainen, Marokosta; ääni nainen5): kihara musta tukka, lasit ja
// nimikortin nauha (kaulakoru), petrolinvihreä paita. Lainausautomaatti (kuulutusääni mies8): harmaansininen
// ”kone”-kasvo ilman tukkaa, isot pyöreät lasit näyttöinä; näkyy vain hahmoluettelossa (automaatin repliikeistä
// puhujan nimi ja kasvot piilotetaan, tottakai.css .la-naytto).
Kurssi.hahmoKuvat.kirjastonhoitaja = { iho: '#b98563', hiukset: '#1f1a17', tukka: 'kihara', paita: '#2f6f6a', tausta: '#e2efe9', ilme: 'hymy', lisat: ['lasit', 'kaulakoru'] };
Kurssi.hahmoKuvat.automaatti = { iho: '#b9c9d3', hiukset: '#b9c9d3', tukka: 'kalju', paita: '#37505f', tausta: '#d8ecf2', ilme: 'hymy', lisat: ['isot-lasit'] };
// ==== t07: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// t07: RRC:n kollegat ja henkilöstöravintolan kassa. Kaisa: suomalainen laborantti (vaalea kihara tukka, valkoinen
// laboratoriotakki, lasit). Ravi: insinööri Intiasta (sininen kauluspaita, sänki). Kassa: ulkomaalaistaustainen mies
// ravintolan vihreässä työasussa ja esiliinassa (omistaja 20.10.2026: palvelutyöntekijät ovat ulkomaalaistaustaisia).
Kurssi.hahmoKuvat.kaisa = { iho: '#f2d3bd', hiukset: '#d9c08c', tukka: 'kihara', paita: '#f4f6f7', tausta: '#d8ecee', ilme: 'hymy', lisat: ['lasit', 'korvikset'] };
Kurssi.hahmoKuvat.ravi = { iho: '#a8714f', hiukset: '#16110f', tukka: 'lyhyt', paita: '#3b6ea8', tausta: '#e3eaf5', ilme: 'virne', lisat: ['sanki'] };
Kurssi.hahmoKuvat.lounaskassa = { iho: '#6f4430', hiukset: '#15100d', tukka: 'lyhyt', paita: '#2f6b4f', tausta: '#e2efe6', ilme: 'hymy', lisat: ['esiliina'] };
// ==== t08: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// Välittäjä Leyla (t08, ääni nainen5): kihara tumma tukka, tummansininen jakku, korvakorut ja kaulakoru.
Kurssi.hahmoKuvat.valittaja = { iho: '#c98f6b', hiukset: '#2b1d16', tukka: 'kihara', paita: '#2f3e5c', tausta: '#e3e6f0', ilme: 'hymy', lisat: ['korvikset', 'kaulakoru'] };
// Clas Ohlsonin myyjä (t08, ääni mies7): lyhyt musta tukka, silmälasit, vihreä työpaita (ei tavaramerkkiä).
Kurssi.hahmoKuvat.ohlsonmyyja = { iho: '#e2b48c', hiukset: '#1a1a1a', tukka: 'lyhyt', paita: '#3d6b4f', tausta: '#e2efe6', ilme: 'hymy', lisat: ['lasit'] };
// ==== t09: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// Television sääjuontaja (t09, ääni mies8): ulkomaalaistaustainen mies tummansinisessä puvussa, silmälasit.
Kurssi.hahmoKuvat.saajuontaja = { iho: '#8d5b3e', hiukset: '#1c1c1c', tukka: 'lyhyt', paita: '#26364f', tausta: '#dbe7f3', ilme: 'hymy', lisat: ['lasit'] };
// Habituuri-messujen asiakas (t09, ääni nainen5): vanhempi nainen, harmaa polkkatukka, vihreä takki, lasit ja kaulakoru.
// Uutistenlukija (t20, K4: sanomalehden uutinen, omistaja 21.10.2026).
Kurssi.hahmoKuvat.uutiset = { iho: '#d9a882', hiukset: '#3a2a1e', tukka: 'lyhyt', paita: '#1e2f4f', tausta: '#dfe6ef', ilme: 'hymy', lisat: ['lasit'] };
Kurssi.hahmoKuvat.messuasiakas = { iho: '#f0cfb8', hiukset: '#d6d6d6', tukka: 'polkka', paita: '#2f6b4f', tausta: '#e8efe3', ilme: 'hymy', lisat: ['lasit', 'kaulakoru'] };
// ==== t10: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// t10 Helsinki-Vantaa (ulkomaalaistaustaiset työntekijät, omistaja 20.10.2026): lähtöselvityksen virkailija (nainen 5,
// tummanpunainen univormu, kiharat hiukset, korvakorut), turvatarkastaja (mies 7, musta univormu, viikset) ja
// kuuluttaja (mies 8, lasit; ääni vain kuulutuksissa).
Kurssi.hahmoKuvat.lt_virkailija = { iho: '#8d5a3b', hiukset: '#1a1410', tukka: 'kihara', paita: '#8a1f2d', tausta: '#f2dde0', ilme: 'hymy', lisat: ['korvikset'] };
Kurssi.hahmoKuvat.lt_tarkastaja = { iho: '#c99a72', hiukset: '#1f1a17', tukka: 'lyhyt', paita: '#2b2f36', tausta: '#e2e4e8', ilme: 'neutraali', lisat: ['viikset'] };
Kurssi.hahmoKuvat.lt_kuuluttaja = { iho: '#e9c2a6', hiukset: '#7a7a7a', tukka: 'kalju', paita: '#1e3a5f', tausta: '#e3ebf5', ilme: 'hymy', lisat: ['lasit'] };
// ==== k02: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// k02 lento Lissabonista Confinsiin: Uuno ja Eenok (omistaja 22.10.2026; korvaavat turistipariskunnan Riitta ja Pekka).
// Kaksi miestä ”lihamatkalla” Brasiliassa: vaaleansiniset haalarit, platinanvaalea tukka; taustahahmoja ja koomisia,
// harvoin vähän kammottavia (he ovat avaruusolentoja, mutta tarina ei sano sitä). Kasvot muuttuvat hitaasti ja huomaamatta
// kolmessa vaiheessa (omistaja: ”Slowly and very subtly changing portraits are good”): 1 = t10, k02, t12 (hymy);
// 2 = t16, t17 (iho beigempi, suora suu); 3 = t19, t20 (iho kalpea, harmaa suora suu, ei
// kulmakarvoja). Posket vihertävän ruskeiksi ihon mukaan; suu laskee ja levenee vaiheittain: leveys ×1,06 / ×1,7 / ×2 (vaiheessa 3 juuri kasvojen sisällä), alas 0 / 2 / 4; silmät 0,6 / 2,5 / 4 (omistaja 23.10.2026). Värit ja asu omistajan
// Uuno-kuvasta 23.10.2026 (keltainen tukka, kirkkaansininen paita, sininen V-kaulus ja valkoinen aluspaita, ei laseja);
// Eenok samoin, mutta pitkä tukka.
// ”Vähän pielessä” -piirteet: silmavali (silmät kauempana, viewBox-yksikköä) ja suunLeveys (suu leveämpi, kerroin) Tottakain omassa
// assets/kuvitus.js-kopiossa (AV-063); kasvavat vaiheittain.
Kurssi.hahmoKuvat.uuno = { iho: '#f3d6c2', hiukset: '#f0e532', tukka: 'lyhyt', paita: '#009fe0', kaulus: '#1f2fe0', aluspaita: '#ffffff', tausta: '#f6f6f6', ilme: 'hymy', lisat: [], silmavali: 0.6, suunLeveys: 1.06 };
Kurssi.hahmoKuvat.eenok = { iho: '#f3d6c2', hiukset: '#f0e532', tukka: 'polkka', paita: '#009fe0', kaulus: '#1f2fe0', aluspaita: '#ffffff', tausta: '#f6f6f6', ilme: 'hymy', lisat: [], silmavali: 0.6, suunLeveys: 1.06 };
Kurssi.hahmoKuvat.uuno2 = { iho: '#e3d7c3', hiukset: '#f0e532', tukka: 'lyhyt', paita: '#009fe0', kaulus: '#1f2fe0', aluspaita: '#ffffff', tausta: '#e3eef7', ilme: 'neutraali', lisat: [], silmavali: 2.5, suunLeveys: 1.7, suuAlas: 2, poski: 'rgba(150,125,75,.12)' };
Kurssi.hahmoKuvat.eenok2 = { iho: '#e3d7c3', hiukset: '#f0e532', tukka: 'polkka', paita: '#009fe0', kaulus: '#1f2fe0', aluspaita: '#ffffff', tausta: '#e3eef7', ilme: 'neutraali', lisat: [], silmavali: 2.5, suunLeveys: 1.7, suuAlas: 2, poski: 'rgba(150,125,75,.12)' };
Kurssi.hahmoKuvat.uuno3 = { iho: '#ece3de', hiukset: '#f0e532', tukka: 'lyhyt', paita: '#009fe0', kaulus: '#1f2fe0', aluspaita: '#ffffff', tausta: '#e3eef7', ilme: 'harmaa', lisat: [], silmavali: 4, suunLeveys: 2, suuAlas: 4, kulmaNakyvyys: 0, poski: 'rgba(115,120,70,.07)' };
Kurssi.hahmoKuvat.eenok3 = { iho: '#ece3de', hiukset: '#f0e532', tukka: 'polkka', paita: '#009fe0', kaulus: '#1f2fe0', aluspaita: '#ffffff', tausta: '#e3eef7', ilme: 'harmaa', lisat: [], silmavali: 4, suunLeveys: 2, suuAlas: 4, kulmaNakyvyys: 0, poski: 'rgba(115,120,70,.07)' };
// ==== t11: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// ==== t12: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// ==== t13: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// ==== t14: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// ==== t15: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// ==== k03: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// ==== t16: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// ==== t17: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// ==== t18: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// ==== t19: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// ==== t20: sivuhahmojen kasvot (lisää tämän rivin perään) ====
// ==== k04: sivuhahmojen kasvot (lisää tämän rivin perään) ====
Kurssi.nimet = ['Maia', 'Jay', 'Purjo', 'Hiisi', 'Pertti', 'Marta', 'Walker', 'Anderson', 'Otaniemi', 'Sörnäinen', 'Helsinki'];

const VISA_REPLIIKIT = [
  'Hora do quiz! Umas perguntas, e depois todo mundo descansa. Principalmente eu.',
  'As erradas voltam no fim. Calma. O rio não foge.',
  'Ouça, escolha, respire. Não é competição. O prêmio é um lanche, mesmo assim.'
];

// T15.9 (A6-09): kertausten sivut oppituntien ainoasta järjestyksestä (assets/profiili.js jarjestys: k01, k02 …); sama
// säännöllinen lauseke kuin ennen (reitin alku); ilman profiilia vanha ^k\d.
const KERTAUS_SIVUT = (() => {
  const k = ((Kurssi.profiili && Kurssi.profiili.jarjestys) || []).filter(id => /^k\d\d$/.test(id));
  return k.length ? `^(?:${k.join('|')})` : '^k\\d';
})();

Kurssi.apuhahmot = {
  // Manaattila: harjoitukset ovat Peixe-boin aluetta. Havaijipaita on pakollinen.
  harjoitukset: {
    hahmo: 'manaatti', valitsin: 'section[data-ei-sivulle]', otsikko: 'Exercícios', teema: 'manaattila', koko: 'iso',   // T15.8: merkintä, ei luokka
    eiSivut: KERTAUS_SIVUT, asu: 'havaiji', kyltti: 'Manaattila', kelluva: true, lisaOsuus: 0.35,
    palaute: {
      oikein: ['Certo!', 'Certo!', 'Certo!', 'Certo! Muito bem.', 'Oikein! Isso é “certo” em finlandês.'],
      vaarin: ['Errado.', 'Ainda não.', 'Quase.'],
      lisa_oikein: [
        'Exatamente. Eu nem teria tido energia.',
        'Essa resposta merece uma soneca.',
        'Nadou bem.',
        'Resposta certa e sem pressa nenhuma. Respeito.',
        'Conte pra Capivara. Ela anota e repete a semana inteira.'
      ],
      lisa_vaarin: [
        'Tudo bem. Uma vez eu nadei uma semana inteira na direção errada.',
        'Erro é só uma resposta que ainda não acordou.',
        'Tente de novo. O rio espera.',
        'Calma. Pressa é coisa de piranha.',
        'Eu também confundo vogal longa com curta. Mas eu não falo, então tanto faz.'
      ]
    },
    mietteet: [
      'O peixe-boi come oito horas por dia e dorme o resto. Chamam isso de preguiça. Eu chamo de agenda.',
      'Nado devagar porque não estou indo a lugar nenhum. Experimente um dia.',
      'Em finlandês eu sou “manaatti”. Soa como um prato de massa. Gosto.',
      'Às vezes eu boio e penso: para onde todo mundo está correndo? Depois eu durmo.',
      'Meu parente mais próximo é o elefante. Ele também não esquece vocabulário.',
      'Os finlandeses têm quinze casos gramaticais. Eu tenho um caso só: o caso da soneca.',
      'Água morna, um pouco de comida, nenhuma pressa. Não entendo por que os humanos complicam tudo.',
      'Aprender finlandês é como comer capim aquático: um pouquinho todo dia, e ninguém percebe quanto você já comeu.',
      'Camisa havaiana não é estilo. É filosofia de vida.',
      'Se algo não dá certo, você sempre pode boiar um pouco. Boiando quase nunca se erra.',
      'O Capivara diz que eu sou preguiçoso. O Capivara fica na fonte termal com uma mandarina na cabeça.',
      'No café da manhã comi alface. Depois outra porção. Depois a terceira. Bom dia.',
      'O Capivara lembra todas as palavras. Eu lembro onde fica a geladeira. Juntos a gente se vira.',
      'Torço pro Cruzeiro. O Capivara também. Azul celeste combina com cor de rio.',
      'Depois dos exercícios a gente vai ao ’Esburger. A Maia fala assim, e soa mais gostoso.',
      'Em finlandês, “kuusi” é seis e “kusi” é… outra coisa. Estique esse “uu”. Confie em mim.'
    ],
    repliikit: [
      'Bem-vindo à Manaattila. Aqui se treina com calma. Camisa havaiana é obrigatória, eu já estou com a minha.',
      'Aloha… quer dizer, moi! Aqui começa a Manaattila. Faça no seu ritmo, eu fico boiando aqui do lado.',
      'Regras da Manaattila: um exercício de cada vez, falar em voz alta é permitido e camisa havaiana é obrigatória.',
      'Veio treinar? Que ótimo. Eu treino descansar. Cada um é muito bom no seu esporte.',
      'Aqui ninguém tem pressa. Resposta errada não é erro, é só uma parada no caminho da certa.'
    ]
  },
  // Kapybaran kylpylä: kertausten harjoitukset (mandariini päässä on pakollinen).
  kertaus: {
    hahmo: 'kertoja', valitsin: 'section[data-ei-sivulle]', otsikko: 'Exercícios', teema: 'kylpyla', koko: 'iso',
    sivut: KERTAUS_SIVUT, asu: 'mandariini', kyltti: 'Spa do Capivara', kelluva: true, lisaOsuus: 0.35,
    repliikit: [
      'Bem-vindo ao Spa do Capivara. Aqui se revisa. Mandarina na cabeça, por favor.',
      'Revisar é como fonte termal: a gente volta à mesma água, e cada vez fica melhor.',
      'Eu lembro de tudo o que já aprendi. Só nem sempre do que significava. Por isso a gente revisa.'
    ],
    palaute: {
      oikein: ['Certo.', 'Certo! Eu também lembrava disso. Acho.', 'Certo!'],
      vaarin: ['Errado.', 'Ainda não.', 'Errado. Eu respondi igualzinho ontem.'],
      lisa_oikein: ['Sabedoria não se apressa. Você não se apressou.', 'Ótimo. Sua mandarina nem balançou.',
        'Vou anotar isso. Depois esqueço onde anotei. Depois a gente revisa.'],
      lisa_vaarin: ['Pedra não se lapida numa noite só.', 'Vamos revisar. É pra isso que este lugar existe.',
        'De novo. Eu aprendi isso na quarta vez. Ou na quinta. Lembro das duas.']
    },
    mietteet: [
      'Todos os bichos gostam de sentar do meu lado. Talvez porque eu nunca digo a ninguém o que fazer.',
      'Sou o maior roedor do mundo. A maior parte disso é mandarina.',
      'Uma vez decorei o dicionário inteiro. Na manhã seguinte só lembrava que tinha decorado.',
      'Lembro o cardápio inteiro do ’Esburger. Não lembro o que pedi da última vez. Por isso peço tudo.'
    ]
  },
  kotitehtava: {
    hahmo: 'manaatti', valitsin: '.kotitehtava',
    repliikit: [
      'Lição de casa, sei. Faça você, eu vigio daqui de olhos fechados.',
      'Sem pressa. Ninguém nunca se apressou perto de um peixe-boi. Só o Hiisi, talvez.',
      'Escreva a resposta e depois fale em voz alta. Eu escuto. Quase acordado.',
      'O modelo está embaixo. Olhe só depois de tentar. Eu não conto pra ninguém.'
    ]
  },
  // Quiz-sivu (#tNN-quiz): Peixe-boi isona ja kelluvana kuten Manaattilassa (käyttäjä 17.10.2026); oppitunnin pikavisassa pieni.
  visa: {
    hahmo: 'manaatti', valitsin: '.visa-paikka', eiSivut: '-quiz$',
    repliikit: VISA_REPLIIKIT
  },
  visaSivu: {
    hahmo: 'manaatti', valitsin: '[data-apu="visa"]', sivut: '-quiz$', koko: 'iso',
    repliikit: VISA_REPLIIKIT
  },
  kielioppi: {
    hahmo: 'kertoja', valitsin: '.kielioppi-alku',
    repliikit: [
      'Gramática da lição! Eu lembro de cada regra. Só às vezes troco a ordem. Por isso estão em cartões separados.',
      'Abra um cartão de cada vez. O que for difícil, marque com a estrela e volte a ele depois. Eu também volto. Provavelmente.',
      'Não precisa decorar tudo hoje. Eu levei anos. Bom, eu levei uma tarde, mas depois esqueci e levei anos.'
    ]
  },
  treeni: {
    hahmo: 'manaatti', valitsin: '.treeni-alku', koko: 'iso',
    repliikit: [
      'Treino! Pacotinhos de oito perguntas. Terminou um, ganhou uma mandarina. Parou no meio? Também tudo bem.',
      'Cada rodada é curtinha. Faça uma, tome um café, faça outra. É assim que peixe-boi aprende.',
      'Aqui ninguém perde. Só junta mandarina, devagar.'
    ]
  },
  // Pelit (#peli-…, assets/pelit.js): Peixe-boi isona Manaattilan kehyksen yläpuolella kuten Treenissä.
  pelit: {
    hahmo: 'manaatti', valitsin: '.peli-alku', sivut: '^peli-', koko: 'iso',
    repliikit: [
      'Hora do jogo! Aqui ninguém perde. No máximo alguém suspira. Eu também suspiro, mas é de sono.',
      'Acertou de primeira: uma mandarina. Terminou a rodada: mais três. Errou: nada acontece. Que vida boa.',
      'Jogar também é estudar. Eu estudo boiando, e olha só quanto finlandês eu sei.',
      'Depois do jogo, ’Esburger. Eu pago. Quer dizer, o Capivara paga. Ele lembra que deve.'
    ]
  }
};

// Maian M-ystävät oppituntien kasvoina (erä 2, oppitunnit 11–20; omistaja 20.10.2026: neljä naista, vain Tottakai): samat
// piirrosparametrit kuin saaren muotokuvissa (saari.js saari-moara …), jotta hahmo näyttää samalta oppitunnilla ja saarella.
Kurssi.hahmoKuvat.moara = { iho: '#9a6142', hiukset: '#1c120d', tukka: 'kihara', paita: '#d35400', tausta: '#fde3cf', ilme: 'iso', lisat: ['korvikset', 'esiliina'] };
Kurssi.hahmoKuvat.marisa = { iho: '#e0b08c', hiukset: '#5a2e1a', tukka: 'polkka', paita: '#4aa3b5', tausta: '#d8f0f3', ilme: 'iso', lisat: ['stetoskooppi', 'korvikset'] };
Kurssi.hahmoKuvat.malu = { iho: '#7a4a30', hiukset: '#111111', tukka: 'pitka', paita: '#f1c40f', tausta: '#fff4c2', ilme: 'hymy', lisat: ['korvikset'] };
Kurssi.hahmoKuvat.maira = { iho: '#c4906a', hiukset: '#2b2b2b', tukka: 'kihara', paita: '#1a1a1a', tausta: '#e6e6e6', ilme: 'iso', lisat: ['lasit', 'korvikset', 'atletico'] };
