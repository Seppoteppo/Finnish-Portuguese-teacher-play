/* Tottakain kurssiprofiili: suomen kurssi portugalinkielisille (Passon peilikurssi Maian näkökulmasta).
   Jaetut moduulit (assets/aani.js, kuvitus.js, komponentit.js) lukevat täältä kohdekielen, muistiavaimen ja
   fraasipohjat. Käyttöliittymän tekstit: assets/ui.js. */
Kurssi.profiili = {
  id: 'tottakai',
  muistiavain: 'tottakai',                 // selaimen localStorage-avainten etuliite
  lahdekieli: { koodi: 'pt', bcp47: 'pt-BR', nimi: 'português' },
  kohdekieli: { koodi: 'fi', bcp47: 'fi-FI', nimi: 'finlandês', murre: 'yleispuhekieli ja kirjakieli' },
  apukielet: [],
  // Sanaston kentät: merkitys portugaliksi, ääntämisohje (lasketaan kirjoitusasusta, ks. assets/taivutus.js), IPA,
  // sanaluokka, huomautus. Taivutus: verbi (true tai { tyyppi, vahva, heikko }), nomini ({ gen, part, ill }), muodot.
  kentat: { kaannos: 'pt', ohje: 'aa', ipa: 'ipa', luokka: 'sl', huom: 'huom', kirjakieli: 'kirja' },
  saannot: 'fi__pt-BR',
  puhe: { tts: 'chatterbox', ttsKieli: 'fi', asrKieli: 'fi', roolit: 'tottakai/tools/aanet_roolit.json' },
  jarjestys: ['t00', 't01', 't02', 't03', 't04', 't05', 'k01', 't06', 't07', 't08', 't09', 't10', 'k02', 't11', 't12', 't13', 't14', 't15', 'k03', 't16', 't17', 't18', 't19', 't20', 'k04'],
  aiheet: ['tervehdys', 'ihmiset', 'aika', 'paikka', 'liike', 'koti', 'ruoka', 'tunteet', 'viestinta', 'tyo', 'keho',
    'luonto', 'numerot', 'ominaisuus', 'toiminta', 'ajattelu', 'vapaa', 'kaupunki', 'kysymys', 'raha'],
  kielletytHahmonimet: ['Pelé', 'Neymar', 'Lula', 'Bolsonaro', 'Ronaldo', 'Ronaldinho', 'Anitta', 'Xuxa', 'Senna',
    'Niinistö', 'Stubb', 'Marin', 'Kekkonen', 'Sibelius'],
  // Kohdekielen fraasipohjat komponenteille (assets/komponentit.js).
  fraasit: {
    seuraava: 'Seuraava asema: {asema}.', paateasema: 'Pääteasema: {asema}.',
    hinta: '{tuote}: {summa} euroa.', yhteensa: 'Yhteensä {summa} euroa.',
    tilaus: 'Saisinko {tuote}?', lasku: 'Se tekee {summa} euroa.',
    // Vaa'an vertailulause (komponentit.js vaakaVertailu ja äänitarve tools/poimi_aanet.js: sama pohja).
    vertailu: '{a} on {komp} kuin {b}.', vertailuSama: '{a} on yhtä {adj} kuin {b}.'
  },
  /* Yhteinen lukukirjasto (omistaja 14.11.2026): kaikki luvut ja hinnat, jotka kurssi sanoo ääneen Gramáticassa, Treinossa,
     Situações-tilanteissa ja peleissä, otetaan näistä listoista, jotta jokainen luku ja hinta äänitetään kerran ja sama leike soi
     kaikkialla. Riskisanat (Cartesia Sonic 3.6 lipsuu puhekieleen: yksi, kaksi, viisi, kuusi, niiden yhdyssanat, -kymmentä;
     docs/CARTESIA.md ”Tunnetut viat”) sallitaan, mutta riskittömiä suositaan. Oppituntien teksteihin tämä ei koske.
     pienet: 0–20 kaikki (Treino Números 0–10 ja 11–20). kymmenet: 21–100, 20 esimerkkiä (Gramática h-luvut, Treino Números
     21–100); 13 niistä on oppitunneilla muutenkin. isot: 100–1 000 000, [luku, sanoin] (Gramática h-luvut, Treino t08).
     hinnat: senteissä; kassan (nainen5) ”Yhteensä …” (Tokki-Manni, Treino Preços em euros); 730 ja 1380 ovat jo t03:n
     Cartesia-äänitteitä. sadat: euroissa; Claees Oollshenin kassa ”Yhteensä … euroa” ja tuotteiden hinnat (100, 300, 400). */
  luvut: {
    pienet: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    kymmenet: [21, 28, 30, 34, 35, 37, 40, 43, 45, 49, 50, 60, 70, 73, 80, 84, 90, 92, 98, 100],
    isot: [[100, 'sata'], [101, 'satayksi'], [200, 'kaksisataa'], [300, 'kolmesataa'], [400, 'neljäsataa'], [500, 'viisisataa'],
      [600, 'kuusisataa'], [700, 'seitsemänsataa'], [800, 'kahdeksansataa'], [900, 'yhdeksänsataa'], [1000, 'tuhat'],
      [2026, 'kaksituhattakaksikymmentäkuusi'], [3000, 'kolmetuhatta'], [10000, 'kymmenentuhatta'], [100000, 'satatuhatta'],
      [101537, 'satayksituhatta viisisataakolmekymmentäseitsemän'], [800000, 'kahdeksansataatuhatta'], [1000000, 'miljoona'],
      [3000000, 'kolme miljoonaa'], [3700000, 'kolme miljoonaa seitsemänsataatuhatta']],
    hinnat: [700, 730, 800, 900, 1000, 1300, 1380, 1400],
    sadat: [300, 700, 800, 900, 1000],
    tuotehinnat: [100, 300, 400]
  },
  // Hinta senteistä sanoiksi kuten oppitunnilla 3: 1380 → ”kolmetoista euroa kahdeksankymmentä”, 50 → ”viisikymmentä senttiä”.
  hintaSanoin(s) {
    const e = Math.floor(s / 100), c = s % 100;
    if (!e) return this.luku(c) + ' senttiä';
    const eurot = e === 1 ? 'yksi euro' : this.luku(e) + ' euroa';
    return c ? eurot + ' ' + this.luku(c) : eurot;
  },
  // Lukusanat 0–9999 suomeksi (kirjoitetaan yhteen: kaksikymmentäkolme).
  luku(n) {
    const Y = ['nolla', 'yksi', 'kaksi', 'kolme', 'neljä', 'viisi', 'kuusi', 'seitsemän', 'kahdeksan', 'yhdeksän', 'kymmenen'];
    if (n <= 10) return Y[n];
    if (n < 20) return Y[n - 10] + 'toista';
    if (n < 100) return Y[Math.floor(n / 10)] + 'kymmentä' + (n % 10 ? Y[n % 10] : '');
    if (n < 1000) return (n < 200 ? 'sata' : Y[Math.floor(n / 100)] + 'sataa') + (n % 100 ? this.luku(n % 100) : '');
    return (n < 2000 ? 'tuhat' : this.luku(Math.floor(n / 1000)) + 'tuhatta') + (n % 1000 ? this.luku(n % 1000) : '');
  }
};
