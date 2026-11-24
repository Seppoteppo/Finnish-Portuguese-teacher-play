/* Tottakain oma kopio Passon tiedostosta assets/hahmot.js (23.10.2026, AV-063; omistaja jaetuista tiedostoista: ”There shouldnt be.”).
   Passo käyttää edelleen omaa alkuperäistään; muutokset tähän eivät näy Passossa eivätkä Passon muutokset täällä. */
/* Hahmojen piirretyt muotokuvat (kurssin sisältöä, ei ohjelmaa). Piirtäjä: assets/kuvitus.js (Kuvitus.muotokuva).
   Avain = oppitunnin hahmot-kentän avain (maia, jay …). Hahmot ovat keksittyjä; kuvat ovat yksinkertaisia piirroksia,
   eivät oikeiden ihmisten kuvia.
   Erityinen laji: laji: 'kapybara' (kentät turkki, tumma, tausta).
   Kentät: iho, hiukset (väri), tukka (malli: sotkuinen, pitka, kihara, kalju, lyhyt), paita, tausta,
   ilme (hymy, virne, iso), lisat: lasit, viikset, sanki (sänki), korvikset, lippis, maali (maalitahra), kaulakoru,
   aurinkolasit (päälaella), harmaa (harmaa raita hiuksissa), leijona (paidan kuva). */
Kurssi.hahmoKuvat = {
  // Kertoja: viisas vanha kapybara todella siisteissä aurinkolaseissa (käyttäjän toive 16.10.2026).
  kertoja: { laji: 'kapybara', nimi: 'Kapybara', turkki: '#9c6a3e', tumma: '#7a4f2e', tausta: '#efe3c6' },
  // Kertojan kaveri: laiska vanha manaatti äärimmäisen siisteissä laseissa, vastaa läksyistä ja visoista (16.10.2026).
  manaatti: { laji: 'manaatti', nimi: 'Manaatti', iho: '#8e9ba3', kuono: '#aab5bb', paita: '#2a9d8f', tausta: '#bfe3e6' },
  jay: { iho: '#f2c9a8', hiukset: '#d9b35c', tukka: 'sotkuinen', paita: '#3c5a78', tausta: '#cfe3ef', ilme: 'virne', lisat: ['sanki', 'aurinkolasit'] },
  maia: { iho: '#b97a52', hiukset: '#2a1a12', tukka: 'pitka', paita: '#c0612b', tausta: '#f6dcc8', ilme: 'hymy', lisat: ['korvikset', 'maali'] },
  marta: { iho: '#a86e4b', hiukset: '#3b2a22', tukka: 'kihara', paita: '#7b3f8f', tausta: '#ead9f0', ilme: 'iso', lisat: ['harmaa', 'kaulakoru', 'korvikset'] },
  walker: { iho: '#d4a07a', hiukset: '#cfcfcf', tukka: 'kalju', paita: '#2f6b4f', tausta: '#d6ecdf', ilme: 'hymy', lisat: ['lasit', 'viikset'] },
  anderson: { iho: '#c08a63', hiukset: '#2a1a12', tukka: 'lyhyt', paita: '#e8a317', tausta: '#fbecc5', ilme: 'iso', lisat: ['lippis', 'leijona'] },
  // Jayn perhe: Purjo (äiti, hieman neuroottinen mutta hyväsydäminen), Kouvonen (veli, ajaa kuin säännöt koskisivat muita),
  // Pertti (isä, lääkäri, kuollut: näytetään sukupuussa seepiana).
  purjo: { iho: '#f0cdb5', hiukset: '#d9cdb8', tukka: 'polkka', paita: '#5b6fa8', tausta: '#e3e8f5', ilme: 'hymy', lisat: ['lasit', 'kaulakoru', 'korvikset'] },
  kouvonen: { iho: '#efc4a2', hiukset: '#b8913f', tukka: 'sotkuinen', paita: '#1f1f1f', tausta: '#f3d3c8', ilme: 'virne', lisat: ['sanki', 'tummat-lasit'] },
  pertti: { iho: '#efcbae', hiukset: '#bdbdbd', tukka: 'kalju', paita: '#f2f2f2', tausta: '#e7e2d6', ilme: 'hymy', lisat: ['lasit', 'stetoskooppi'] },
  // Maian ystävät (M-ystävät): Mirela (ravintola Mercado Centralin lähellä), Marina (sairaanhoitaja, järjestää kaiken),
  // Mateus (sovelluskuljettaja ja sambarumpali), Murilo (historianopettaja, Atlético-fani). Konna Marcus: tyhmä tukka ja lasit.
  mirela: { iho: '#9a6142', hiukset: '#1c120d', tukka: 'kihara', paita: '#d35400', tausta: '#fde3cf', ilme: 'iso', lisat: ['korvikset', 'esiliina'] },
  marina: { iho: '#e0b08c', hiukset: '#5a2e1a', tukka: 'polkka', paita: '#4aa3b5', tausta: '#d8f0f3', ilme: 'iso', lisat: ['stetoskooppi', 'korvikset'] },
  mateus: { iho: '#7a4a30', hiukset: '#111111', tukka: 'lyhyt', paita: '#f1c40f', tausta: '#fff4c2', ilme: 'hymy', lisat: ['sanki'] },
  murilo: { iho: '#c4906a', hiukset: '#2b2b2b', tukka: 'lyhyt', paita: '#1a1a1a', tausta: '#e6e6e6', ilme: 'iso', lisat: ['lasit', 'viikset'] },
  // Marcus on Atlético Mineiron raivokas fani ja pitää aina seuran pelipaitaa (käyttäjä 16.10.2026).
  marcus: { iho: '#d9a982', hiukset: '#e8c547', tukka: 'topete', paita: '#111111', tausta: '#efd9f7', ilme: 'virne', lisat: ['atletico', 'isot-lasit', 'viikset', 'kaulakoru'] },
  // Dona Cida, Morro do Cascalhon asukas, joka auttaa ystäviä (oppitunti 18).
  cida: { iho: '#8a5a3c', hiukset: '#d6d6d6', tukka: 'kihara', paita: '#e07a5f', tausta: '#fbe3d9', ilme: 'hymy', lisat: ['korvikset', 'kaulakoru'] },
  // TV Minasin sääjuontaja (oppitunti 9).
  apresentadora: { iho: '#c99a76', hiukset: '#1f1410', tukka: 'polkka', paita: '#b02a37', tausta: '#dbe7f3', ilme: 'hymy', lisat: ['korvikset', 'kaulakoru'] },
  // Muut: Hakaniemen kauppahallin myyjä (oppitunti 3).
  vendedora: { iho: '#f1cfb4', hiukset: '#8a3b1f', tukka: 'pitka', paita: '#3f7f4f', tausta: '#e2f0e4', ilme: 'hymy', lisat: ['korvikset', 'esiliina'] }
};

/* Henkilönnimet, joita ei saa tulkita taivutetuiksi sanoiksi (Ana ≠ ano ”vuosi”). Oppituntien hahmojen nimet ovat
   mukana automaattisesti. */
Kurssi.nimet = ['Ana', 'José', 'Zé', 'Pedro', 'Francisco', 'Chico', 'Sebastião', 'Tião', 'Pelé', 'Edson', 'Pertti'];

/* Apuhahmot: kuka opastaa missäkin osassa (assets/kuvitus.js, Kuvitus.apuhahmot). Valitsin osoittaa sivun osaan;
   repliikit ovat lähdekielellä (oppijan kielellä). */
Kurssi.apuhahmot = {
  // Manaattila: harjoitusosio on manaatin aluetta (käyttäjän päätös 16.10.2026). Havaijipaita on pakollinen.
  harjoitukset: {
    hahmo: 'manaatti', valitsin: 'section.osio[data-ei-sivulle]', otsikko: 'Harjoitukset', teema: 'manaattila', koko: 'iso',
    eiSivut: '^k\\d',   // kertausoppitunnit ovat kapybaran (alla)
    asu: 'havaiji',
    kyltti: 'Manaattila',
    kelluva: true,   // seuraa lukijaa osion läpi oikeassa alakulmassa
    lisaOsuus: 0.35, // kuinka usein palautteeseen tulee lisäkommentti
    palaute: {
      oikein: ['Oikein!', 'Oikein!', 'Oikein!', 'Oikein! Hyvä.'],
      vaarin: ['Väärin.', 'Väärin.', 'Ei ihan.'],
      lisa_oikein: [
        'Juuri noin. Minä en olisi jaksanut.',
        'Tuo vastaus ansaitsee nokoset.',
        'Hyvin uitu.',
        'Oikea vastaus, eikä yhtään kiirettä. Arvostan.',
        'Kerro kapybaralle. Se kirjoittaa sen muistiin ja kertaa sitä koko viikon.'
      ],
      lisa_vaarin: [
        'Ei se mitään. Minäkin uin kerran viikon väärään suuntaan.',
        'Virhe on vain vastaus, joka ei ole vielä herännyt.',
        'Kokeile uudestaan. Meri odottaa.',
        'Rauhallisesti. Hätäily on haille.',
        'Minäkin sekoitan ser- ja estar-verbin. Tosin minä en puhu.'
      ]
    },
    mietteet: [
      'Manaatti syö kahdeksan tuntia päivässä ja nukkuu loput. Ihmiset kutsuvat sitä laiskuudeksi. Minä kutsun sitä aikatauluksi.',
      'Uin hitaasti, koska en ole menossa minnekään. Sinäkin voisit kokeilla.',
      'Merilehmä on aika loukkaava nimi. En ole kuitenkaan jaksanut valittaa.',
      'Joskus kellun pinnalla ja mietin, mihin kaikki kiirehtivät. Sitten nukahdan.',
      'Lähin sukulaiseni on norsu. Sekään ei unohda sanastoa.',
      'Käyn pinnalla hengittämässä parinkymmenen minuutin välein. Pidä sinäkin taukoja.',
      'Merimiehet luulivat meitä merenneidoiksi. He olivat olleet merellä liian kauan.',
      'Lämmin vesi, vähän syötävää, ei kiirettä. En ymmärrä, miksi ihmiset monimutkaistavat asioita.',
      'Kielen oppiminen on kuin merilevän syöminen: vähän kerrallaan joka päivä, eikä kukaan huomaa, kuinka paljon olet jo syönyt.',
      'Havaijipaita ei ole tyylivalinta. Se on elämänasenne.',
      'Jos jokin ei onnistu, voit aina kellua hetken. Kellumisessa tulee harvoin virheitä.',
      'Kapybara sanoo, että olen laiska. Kapybara istuu itse kuumassa lähteessä mandariini päässä.',
      'Söin aamupalaksi salaattia. Sitten toisen annoksen. Sitten kolmannen. Hyvä aamu.',
      'Kapybara muistaa kaikki sanat. Minä muistan, missä jääkaappi on. Yhdessä pärjäämme.',
      'Kannatan Cruzeiroa. Kapybarakin kannattaa. Taivaansininen sopii vedenväriselle.',
      'Harjoitusten jälkeen mennään kapybaran kanssa \'Esburgeriin. Maia sanoo sen noin, ja se kuulostaa herkullisemmalta.'
    ],
    repliikit: [
      'Tervetuloa Manaattilaan. Täällä harjoitellaan rauhassa. Havaijipaita on pakollinen, minulla on jo omani.',
      'Aloha… tai siis olá. Tästä alkaa Manaattila. Tee tehtävät omaan tahtiisi, minä kellun tässä vieressä.',
      'Manaattilan säännöt: yksi tehtävä kerrallaan, ääneen puhuminen on sallittua ja havaijipaita on pakollinen.',
      'Ai, tulit harjoittelemaan? Hienoa. Minä harjoittelen lepäämistä. Kumpikin meistä on tosi hyvä omassa lajissaan.',
      'Täällä ei kiirehditä. Väärä vastaus ei ole virhe, se on vain välietappi oikeaan.'
    ]
  },
  // Kapybaran kylpylä: kertausoppituntien harjoitukset ovat kertojan eli kapybaran aluetta (käyttäjän toive 16.10.2026).
  // Kuuma lähde, höyry ja mandariinit; mandariini päässä on pakollinen.
  // Luonne (käyttäjä 16.10.2026): erinomainen muisti ja viisas, mutta vähän hölmö, joten kertaa paljon. Ei ylpeä.
  // Manaatti ja kapybara ovat saman kolikon kaksi puolta (kuin Bud Spencer ja Terence Hill); molemmat rakastavat ruokaa.
  kertaus: {
    hahmo: 'kertoja', valitsin: 'section.osio[data-ei-sivulle]', otsikko: 'Harjoitukset', teema: 'kylpyla', koko: 'iso',
    sivut: '^k\\d', asu: 'mandariini', kyltti: 'Kapybaran kylpylä', kelluva: true, lisaOsuus: 0.35,
    repliikit: [
      'Tervetuloa Kapybaran kylpylään. Täällä kerrataan. Mandariini päähän, kiitos.',
      'Kertaus on kuuma lähde: samaan veteen palataan, ja joka kerta se tuntuu paremmalta.',
      'Istu alas. Vesi on lämmintä, ja sanat odottavat. Kukaan ei kiirehdi.',
      'Muistan kaiken, mitä olen koskaan oppinut. En vain aina sitä, mitä se tarkoitti. Siksi kerrataan.'
    ],
    palaute: {
      oikein: ['Oikein.', 'Oikein! Muistin tämän itsekin. Luulen.', 'Oikein!'],
      vaarin: ['Väärin.', 'Ei ihan.', 'Väärin. Minä vastasin eilen ihan samoin.'],
      lisa_oikein: [
        'Viisautta ei voi kiirehtiä. Sinä et kiirehtinyt.',
        'Hyvä. Mandariinisi pysyi paikallaan.',
        'Juuri niin. Vesi on täsmälleen sopivan lämmintä.',
        'Kirjoitan tämän muistiin. Sitten unohdan, mihin kirjoitin. Sitten kerrataan.'
      ],
      lisa_vaarin: [
        'Kivi ei hioudu yhdessä yössä.',
        'Kerrataan. Siksi tämä paikka on olemassa.',
        'Virhe on vain höyryä. Se haihtuu.',
        'Uudestaan. Minäkin opin tämän vasta neljännellä kerralla. Tai viidennellä. Muistan molemmat.'
      ]
    },
    mietteet: [
      'Kaikki eläimet istuvat mielellään viereeni. Ehkä siksi, että en koskaan kerro kenellekään, mitä pitää tehdä.',
      'Kuumassa lähteessä ymmärtää, että kiire on vain huonosti lämmitetty ajatus.',
      'Mandariini päässä ei ole hassua. Se on tasapainoharjoitus.',
      'Kertaaminen on kuin lillumista: samaan veteen joka päivä, ja silti se tuntuu uudelta.',
      'Olen maailman suurin jyrsijä. Suurin osa siitä on mandariineja.',
      'Muistan jokaisen sanan, jonka olen kuullut. Merkitykset ovat välillä kateissa. Ne löytyvät kertaamalla.',
      'Mandariini päässä on myös eväs. Jos kertaus venyy, välipala on valmiina.',
      'Kerran opin koko sanakirjan ulkoa. Seuraavana aamuna muistin vain, että olin oppinut sen.',
      'Sana, jonka olet kerran oppinut, ei katoa. Se vain menee päiväunille.',
      'Viisas kapybara ei kysy, onko vesi lämmintä. Hän istuu siinä.',
      'Kun opit sanan kolmannen kerran, se alkaa tuntea sinut.',
      'Manaatti ja minä olemme saman kolikon kaksi puolta. Hän nukkuu, minä kertaan, ja kumpikin syö.',
      'Muistan \'Esburgerin koko menun ulkoa. En muista, mitä tilasin viimeksi. Siksi tilaan kaiken.',
      'Muistan Cruzeiron jokaisen ottelun lopputuloksen. En vain aina muista, kumpi joukkue oli kumpi.'
    ]
  },
  kotitehtava: {
    hahmo: 'manaatti', valitsin: '.kotitehtava',
    repliikit: [
      'Läksyt, joo. Tee sinä nämä, minä vahdin täältä vähän silmät kiinni.',
      'Älä kiirehdi. Kukaan ei ole koskaan kiirehtinyt manaatin luona. Paitsi ehkä Kouvonen.',
      'Kirjoita vastaus ja sano se sitten ääneen. Minä kuuntelen. Melkein hereillä.',
      'Hyvä läksy on kuin päiväunet: lyhyt, säännöllinen ja tehdään joka päivä.',
      'Mallivastaus on alla. Kurkkaa vasta, kun olet yrittänyt. Minä en ainakaan kerro kenellekään.'
    ]
  },
  visa: {
    hahmo: 'manaatti', valitsin: '.visa-paikka',
    repliikit: [
      'Pikavisa! Viisi kysymystä, ja sitten kaikki saavat levätä. Etenkin minä.',
      'Väärät vastaukset tulevat uudestaan lopussa. Rauhallisesti. Meri ei karkaa mihinkään.',
      'Kuuntele, valitse, hengitä. Tämä ei ole kilpailu. Palkinto on silti välipala.',
      'Jos sana ei muistu, se on vain nokosilla. Herätetään se kertaamalla.'
    ]
  }
};
