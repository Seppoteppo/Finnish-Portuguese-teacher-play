/* Kurssiprofiili: kaikki kieliparista riippuvat asetukset yhdessä paikassa (siirrettävyys, päätös 16.10.2026).
   Käännetty kurssi (esim. suomea brasilialaisille) saa oman profiilinsa; ohjelma ja tarkistukset lukevat kielitiedot
   täältä. Tarkistusten kielisäännöt: tools/tarkistus/saannot/<saannot>.js. Sivu (app.js) siirtyy käyttämään profiilia
   vaiheittain (docs/AVOIMET.md). */
Kurssi.profiili = {
  id: 'passo-a-passo',
  muistiavain: 'passo-a-passo',            // selaimen localStorage-avainten etuliite
  lahdekieli: { koodi: 'fi', bcp47: 'fi-FI', nimi: 'suomi' },
  kohdekieli: { koodi: 'pt', bcp47: 'pt-BR', nimi: 'portugali', murre: 'Belo Horizonte' },
  apukielet: [{ koodi: 'es', moduuli: 'assets/espanja.js' }],
  // Sanaston kentät: käännös lähdekielelle, ääntämisohje lähdekielen kirjaimin, IPA, sanaluokka, huomautus.
  kentat: { kaannos: 'fi', ohje: 'aa', ipa: 'ipa', luokka: 'sl', huom: 'huom' },
  saannot: 'pt-BR.BH__fi',                 // tarkistusten kielisääntölaajennus
  puhe: { tts: 'xtts', ttsKieli: 'pt', asrKieli: 'pt', roolit: 'tools/xtts_roolit.json' },
  // Oppituntien järjestys (index.html:n script-rivit ja valikko): jaksot ja kertaukset.
  jarjestys: ['l00', 'l01', 'l02', 'l03', 'l04', 'l05', 'k01', 'l06', 'l07', 'l08', 'l09', 'l10', 'k02',
    'l11', 'l12', 'l13', 'l14', 'l15', 'k03', 'l16', 'l17', 'l18', 'l19', 'l20', 'k04'],
  aiheet: ['tervehdys', 'ihmiset', 'aika', 'paikka', 'liike', 'koti', 'ruoka', 'tunteet', 'viestinta', 'tyo', 'keho',
    'luonto', 'numerot', 'ominaisuus', 'toiminta', 'ajattelu', 'vapaa', 'kaupunki', 'kysymys', 'raha'],
  // Oikeiden ihmisten nimiä ei käytetä hahmoina (tarkistus vertaa hahmojen nimiin).
  kielletytHahmonimet: ['Pelé', 'Neymar', 'Lula', 'Bolsonaro', 'Ronaldo', 'Ronaldinho', 'Anitta', 'Xuxa', 'Senna',
    'Niinistö', 'Stubb', 'Marin', 'Kekkonen', 'Sibelius'],
  // Kohdekielen fraasipohjat komponenteille (assets/komponentit.js) ja äänitteiden poiminnalle (tools/poimi_puheet.js).
  fraasit: {
    seuraava: 'Próxima estação: {asema}.', paateasema: 'Estação final: {asema}.',
    hinta: '{tuote}: {summa} euros.', yhteensa: 'Total: {summa} euros.',
    tilaus: 'Eu queria {tuote}, por favor.', lasku: 'A conta: {summa} euros.',
    esittely_m: 'Este é {suhde}, o {nimi}.', esittely_f: 'Esta é {suhde}, a {nimi}.',
    mina_m: 'Eu sou o {nimi}.', mina_f: 'Eu sou a {nimi}.',
    huone: '{pron} é {huone}.',
    kalliimpi_m: '{a} é mais caro que {b}.', kalliimpi_f: '{a} é mais cara que {b}.',
    halvempi_m: '{a} é mais barato que {b}.', halvempi_f: '{a} é mais barata que {b}.',
    yhta_m: '{a} é tão caro quanto {b}.', yhta_f: '{a} é tão cara quanto {b}.',
    sopii_f: '{esine} {vari} fica ótima em você!', sopii_m: '{esine} {vari} fica ótimo em você!',
    levan_f: 'Então eu vou levar ela!', levan_m: 'Então eu vou levar ele!',
    levan_kirja_f: 'vou levá-la', levan_kirja_m: 'vou levá-lo',
    kartta_eteen: 'Siga reto!', kartta_oikea: 'Vire à direita!', kartta_vasen: 'Vire à esquerda!',
    kartta_este: 'Ops! Aí tem um prédio.', keho_kysy: 'Dói {osa}?',
      kartta_perilla: 'Isso! Você chegou à {paikka}!'
  },
  // Osoittavat pronominit etäisyyden (1 lähellä, 2 kuulijan luona, 3 kaukana) ja suvun mukaan (pohjapiirros).
  osoittavat: { 1: { m: 'Este', f: 'Esta' }, 2: { m: 'Esse', f: 'Essa' }, 3: { m: 'Aquele', f: 'Aquela' } },
  // Lukusanat kohdekielellä 0–9999 (sama kuin tools/aanitarkistus.py).
  luku(n) {
    const Y = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze',
      'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    const KY = { 2: 'vinte', 3: 'trinta', 4: 'quarenta', 5: 'cinquenta', 6: 'sessenta', 7: 'setenta', 8: 'oitenta', 9: 'noventa' };
    const S = { 1: 'cento', 2: 'duzentos', 3: 'trezentos', 4: 'quatrocentos', 5: 'quinhentos', 6: 'seiscentos', 7: 'setecentos', 8: 'oitocentos', 9: 'novecentos' };
    if (n < 20) return Y[n];
    if (n < 100) return KY[Math.floor(n / 10)] + (n % 10 ? ' e ' + Y[n % 10] : '');
    if (n === 100) return 'cem';
    if (n < 1000) return S[Math.floor(n / 100)] + (n % 100 ? ' e ' + this.luku(n % 100) : '');
    const t = Math.floor(n / 1000), l = n % 1000;
    return (t === 1 ? 'mil' : this.luku(t) + ' mil') + (l ? (l < 100 || l % 100 === 0 ? ' e ' : ' ') + this.luku(l) : '');
  },
  // Dokumenteissa vanhentuneet termit (historiaosioita lukuun ottamatta), ks. tools/tarkistus.
  vanhentuneetTermit: ['Kokoro-puhemalli', '_blob', 'rakenna_artifact', 'asenna_aani.sh', 'kaynnista.bat →']
};
