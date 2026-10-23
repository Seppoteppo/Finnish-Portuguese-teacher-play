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
