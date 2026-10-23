/* Tottakai: oppituntien 3–5 teemapelit (SUUNNITELMA §4, PELILLISTAMINEN §2 ja §5, AVOIMET §2 Kassapaniikki).
   Yksi moottori, neljä peliä, jokaisella oma reitti #peli-<id> (assets/app.js naytaPeli antaa apufunktiot `apu`):
   - tokki-manni (t03): Jayn ostoslista suomeksi ja Maian 20 euroa → kori hyllystä, kokonaishinta sanoin (luvut 11–100),
     suklaa jäljelle jäävällä rahalla (partitiivi luvun jälkeen: yksi suklaa, kaksi suklaata). Palkinto: Maian suklaa.
   - kassapaniikki (t03): koko ruudun kassapeli. Itsepalvelukassa ”Ei käytössä”, jonon kärsivällisyysmittari, huokaukset.
     Na rua · puhekieli: kassa puhuu puhekieltä, kirjakielinen asu (padrão) aina alla; Maia vastaa valitsemalla.
     Perusrunko Moi! → Löytyykö bonuskorttia? → Tarviitko kassin? → Kortilla? → Kuitti? → Ole hyvä → Kiitti, moi!
     ja satunnaiset yllätykset (punnitsemattomat banaanit, kortti ei toimi, kassa sulkeutuu). Ei tavaramerkkejä.
   - esburger (t04): Capivaran ja Peixe-boin lempikioski. Kokoa kuultu tilaus tai sano tilaus itse (Haluaisin…,
     Saisinko…?, kaksi hampurilaista, yksi kahvi).
   - sukupuu (t05): Jayn ja Maian perheet hahmokuvin. Napauta henkilöä (Kuka hän on? – Hän on Jayn äiti.), sitten
     harjoitus: Kenen…? (genetiivi), Kuka on …? (napauta puussa) ja kuuntele ja napauta.
   Säännöt: ei miinuksia (PELILLISTAMINEN §2). Ensimmäinen oikea vastaus = 1 🍊 (passo:tulos, app.js), valmis kierros
   = +3 🍊 (apu.valmis), väärä vastaus ei vie mitään (Kassapaniikissa jono huokaa, peli ei pääty). Tulosloki
   apu.kirjaaTulos (Tulokset.kirjaa, suojattu). Väärät vaihtoehdot ovat oikeita muotoja ja eroavat oikeasta yhdellä
   asialla (KAYTANNOT H1–H2); palaute nimeää virheen. Kirjoitustilassa a = ä ja o = ö hyväksytään (apu.arvioi).
   Sanat: oppituntien 0–N sanat; kassan valmiit ilmaukset tottakai/sanasto/pelit.js ja ”Frases do caixa” -laatikko.
   Kaikki näkyvä suomi glossataan (apu.glossaa → kupla). Ääni: apu.ohjain ja Aani; ilman suomen ääntä kuuntelukohdat
   ohitetaan (Pular, apu.voiPuhua / eiAantaIlmoitus / toast kuten Treenissä) tai teksti näytetään.
   Roolit vain tottakai/tools/aanet_roolit.json:sta. Pelit.puheet() → äänitettävät repliikit poimi_aanet.js:lle.
   Lataus ei koske DOMiin (tools/lataa.js lataa tämän tiedoston Noden vm:ään). */
(function () {
  'use strict';
  const KIELI = 'fi-FI';
  const sekoita = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const arpa = a => a[Math.floor(Math.random() * a.length)];
  const vahemmanLiiketta = () => { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };
  const nakyviin = e => { try { e.scrollIntoView({ block: 'nearest', behavior: vahemmanLiiketta() ? 'auto' : 'smooth' }); } catch (x) { /* vanha selain */ } };

  /* ---------- luvut ja hinnat (oppitunnit 2–3) ---------- */
  const YKSIKOT = ['nolla', 'yksi', 'kaksi', 'kolme', 'neljä', 'viisi', 'kuusi', 'seitsemän', 'kahdeksan', 'yhdeksän', 'kymmenen'];
  function luku(n) {
    if (n <= 10) return YKSIKOT[n];
    if (n < 20) return YKSIKOT[n - 10] + 'toista';
    if (n === 100) return 'sata';
    return YKSIKOT[Math.floor(n / 10)] + 'kymmentä' + (n % 10 ? YKSIKOT[n % 10] : '');
  }
  // Sentit → suomeksi kuten oppitunnilla 3: 1180 → ”yksitoista euroa kahdeksankymmentä”, 50 → ”viisikymmentä senttiä”.
  function hintaSanoin(s) {
    const e = Math.floor(s / 100), c = s % 100;
    if (!e) return luku(c) + ' senttiä';
    const eurot = e === 1 ? 'yksi euro' : luku(e) + ' euroa';
    return c ? eurot + ' ' + luku(c) : eurot;
  }
  const hintaNum = s => (s / 100).toFixed(2).replace('.', ',') + ' €';
  const isolla = t => t.charAt(0).toUpperCase() + t.slice(1);

  /* ---------- äänet: vain olemassa olevat roolit (tools/aanet_roolit.json) ---------- */
  const ROOLIT = {
    kertoja: { tyyppi: 'kertoja', vaihto: 0 }, maia: { tyyppi: 'nainen', vaihto: 0 }, purjo: { tyyppi: 'nainen', vaihto: 4 },
    kassa: { tyyppi: 'nainen', vaihto: 5 }, jay: { tyyppi: 'mies', vaihto: 0 }, hiisi: { tyyppi: 'mies', vaihto: 6 },
    manaatti: { tyyppi: 'mies', vaihto: 7 }
  };
  const roolinAvain = r => { const x = ROOLIT[r] || ROOLIT.kertoja; return x.tyyppi === 'kertoja' ? 'kertoja' : x.tyyppi + x.vaihto; };

  // Pullan kuva: kurssin oma piirros (assets/ikonit/pulla.svg), ei croissant-emojia 🥐 (omistaja 23.10.2026: ”the image
  // for pulla is croissant. Change to pulla”). Käytetään tuoteIkonin kautta kuten hampurilaista.
  const PULLA_KUVA = '<img src="assets/ikonit/pulla.svg" alt="" width="32" height="32">';

  /* ========== Tokki-Manni (t03) ========== */
  const BUDJETTI = 2000, SUKLAA = 210;
  const HYLLY = [
    { id: 'kahvi', sana: 'kahvi', pt: 'café', yksikko: 'pacote', ikoni: '☕', hinta: 490, max: 2, fraasi: n => (n === 1 ? 'yksi paketti kahvia' : `${luku(n)} pakettia kahvia`) },
    { id: 'pulla', sana: 'pulla', pt: 'pão doce', yksikko: 'unidade', ikoni: '🥐', svg: PULLA_KUVA, hinta: 200, max: 3, fraasi: n => (n === 1 ? 'yksi pulla' : `${luku(n)} pullaa`) },
    { id: 'leipa', sana: 'leipä', pt: 'pão', yksikko: 'unidade', ikoni: '🍞', hinta: 350, max: 2, fraasi: n => (n === 1 ? 'yksi leipä' : `${luku(n)} leipää`) },
    { id: 'juusto', sana: 'juusto', pt: 'queijo', yksikko: '100 g', ikoni: '🧀', hinta: 240, max: 1, fraasi: () => 'sata grammaa juustoa' },
    { id: 'kassi', sana: 'kassi', pt: 'sacola', yksikko: 'unidade', ikoni: '👜', hinta: 50, max: 2, fraasi: n => (n === 1 ? 'yksi kassi' : `${luku(n)} kassia`) }
  ];
  const suklaaFraasi = n => (n === 1 ? 'Yksi suklaa, kiitos.' : `${isolla(luku(n))} suklaata, kiitos.`);
  const SUKLAA_REPLIIKKI = 'Suomalaista suklaata. Ei belgialaista… mutta hyvää!';
  function teeLista() {
    for (let y = 0; y < 80; y++) {
      const tuotteet = sekoita(HYLLY.filter(t => t.id !== 'kassi' || Math.random() < 0.4)).slice(0, Math.random() < 0.5 ? 2 : 3);
      const rivit = tuotteet.map(t => ({ t, n: 1 + Math.floor(Math.random() * t.max) }));
      const summa = rivit.reduce((a, r) => a + r.n * r.t.hinta, 0);
      if (summa >= 600 && summa <= BUDJETTI - SUKLAA) return { rivit, summa };
    }
    return { rivit: [{ t: HYLLY[0], n: 2 }, { t: HYLLY[1], n: 2 }], summa: 1380 };
  }
  // Väärä kokonaishinta: sama hinta, yksi lukusana toinen (-toista ↔ -kymmentä tai sentit ilman -kymmentä).
  function hintaVaarat(s) {
    const e = Math.floor(s / 100), c = s % 100, v = [];
    const e2 = e > 10 && e < 20 ? (e - 10 >= 2 ? (e - 10) * 10 : e - 10) : e < 10 ? e + 10 : e === 10 ? 11 : 2;
    v.push(e2 * 100 + c);
    v.push(c ? e * 100 + c / 10 : e * 100 + 10);
    return v;
  }

  function ajaTokkiManni(paikka, T) {
    const el = T.el;
    const juuri = el('div', { class: 'peli' });
    paikka.replaceChildren(juuri);
    kierros();
    function kierros() {
      juuri.replaceChildren();
      const lista = teeLista();
      let oikein = 0;
      const kori = Object.fromEntries(HYLLY.map(t => [t.id, 0]));
      juuri.append(el('p', { class: 'ohje' }, 'Sábado no Tokmanni (a Maia ainda diz “Tokki-Manni”). O Jay escreveu a lista de compras em finlandês; a Maia tem 20 euros. Encha a cesta com + e −. Toque nas palavras para ver o significado.'));
      juuri.append(T.tilaKytkin());

      // 1. Lista ja hylly
      const v1 = el('div', { class: 'valinta' });
      const listaEl = el('ul', { class: 'peli-lista' });
      lista.rivit.forEach(r => listaEl.append(T.fi('li', r.t.fraasi(r.n))));
      v1.append(el('div', { class: 'kuitti-paperi' }, el('div', { class: 'kuitti-yla' }, el('b', {}, 'A lista do Jay')), listaEl));
      const hylly = el('div', { class: 'peli-hylly' });
      const summaArvo = el('b', {}, hintaNum(0));
      const paivita = [];
      for (const t of HYLLY) {
        const maara = el('output', { 'aria-live': 'polite' }, '0');
        const miinus = el('button', { type: 'button', class: 'peli-nappi', 'aria-label': `Menos ${t.pt}` }, '−');
        const plus = el('button', { type: 'button', class: 'peli-nappi', 'aria-label': `Mais ${t.pt}` }, '+');
        const kortti = el('div', { class: 'peli-tuote' },
          tuoteIkoni(t, 'peli-ikoni'), T.fi('span', t.sana, { class: 'peli-nimi' }),
          el('span', { class: 'peli-hinta' }, `${hintaNum(t.hinta)} / ${t.yksikko}`), el('div', { class: 'peli-maara' }, miinus, maara, plus));
        const nayta = () => {
          maara.textContent = String(kori[t.id]);
          miinus.disabled = kori[t.id] <= 0; plus.disabled = kori[t.id] >= 3;
          kortti.toggleAttribute('data-valittu', kori[t.id] > 0);
        };
        miinus.addEventListener('click', () => { kori[t.id] = Math.max(0, kori[t.id] - 1); paivitaKaikki(); });
        plus.addEventListener('click', () => { kori[t.id] = Math.min(3, kori[t.id] + 1); paivitaKaikki(); });
        paivita.push(nayta);
        hylly.append(kortti);
      }
      const summaNyt = () => HYLLY.reduce((a, t) => a + kori[t.id] * t.hinta, 0);
      function paivitaKaikki() { paivita.forEach(f => f()); summaArvo.textContent = hintaNum(summaNyt()); }
      paivitaKaikki();
      const palaute1 = el('p', { class: 'palaute', 'aria-live': 'polite' });
      const kassalle = el('button', { type: 'button', class: 'visa-seuraava' }, 'Ao caixa →');
      v1.append(hylly, el('p', { class: 'peli-summa' }, el('span', {}, 'Cesta: ', summaArvo), el('span', {}, `A Maia tem: ${hintaNum(BUDJETTI)}`)), kassalle, palaute1);
      juuri.append(v1);
      let eka1 = true;
      kassalle.addEventListener('click', () => {
        const vaarin = HYLLY.filter(t => kori[t.id] !== ((lista.rivit.find(r => r.t === t) || {}).n || 0));
        const ok = !vaarin.length;
        T.tulos(v1, ok, eka1, { avain: 'tokki-manni:kori', teksti: lista.rivit.map(r => r.t.fraasi(r.n)).join(', ') });
        if (ok && eka1) oikein++;
        eka1 = false;
        palaute1.className = 'palaute ' + (ok ? 'ok' : 'ei');
        if (!ok) { palaute1.textContent = 'Ainda não. Confira na lista: ' + vaarin.map(t => `${t.pt} (${t.sana})`).join(', ') + '. Depois de um número, a palavra vai para o partitivo: kaksi pullaa = 2 pães doces.'; return; }
        palaute1.textContent = 'Certo! A cesta bate com a lista.';
        v1.querySelectorAll('button').forEach(b => { b.disabled = true; });
        askel2();
      });

      // 2. Kokonaishinta sanoin
      function askel2() {
        const s = lista.summa;
        const v2 = el('div', { class: 'valinta' });
        const kuitti = el('div', { class: 'kuitti tulostuu' });
        const paperi = el('div', { class: 'kuitti-paperi', lang: KIELI });
        paperi.append(el('div', { class: 'kuitti-yla' }, el('b', {}, 'Tokmanni')));
        lista.rivit.forEach(r => paperi.append(el('p', { class: 'kuitti-rivi' }, el('span', {}, `${r.t.sana} ${r.n} × ${hintaNum(r.t.hinta).replace(' €', '')}`), el('span', {}, hintaNum(r.n * r.t.hinta).replace(' €', '')))));
        paperi.append(el('p', { class: 'kuitti-rivi kuitti-yht' }, el('span', {}, 'TOTAL'), el('span', {}, hintaNum(s))));
        kuitti.append(paperi);
        v2.append(el('p', { class: 'kysymys' }, 'A caixa vai dizer o total. Como se diz em finlandês?'), kuitti);
        juuri.append(v2);
        nakyviin(v2);
        const oikea = `Yhteensä ${hintaSanoin(s)}.`;
        T.kysy(v2, {
          vaihtoehdot: [oikea, ...hintaVaarat(s).map(x => `Yhteensä ${hintaSanoin(x)}.`)], oikea,
          selitys: `${hintaNum(s)} = ${hintaSanoin(s)}.`,
          miksi: () => 'Confira o número: -toista = 11 a 19, -kymmentä = as dezenas (20, 30 …). Os centavos vêm logo depois dos euros.',
          kirjaa: { avain: `tokki-manni:summa:${s}`, teksti: oikea },
          puhu: () => T.jono(oikea, 'kassa'),
          valmis: ok => { if (ok) oikein++; askel3(); }
        });
      }

      // 3. Suklaa jäljelle jäävällä rahalla
      function askel3() {
        const jaljella = BUDJETTI - lista.summa, n = Math.floor(jaljella / SUKLAA);
        const v3 = el('div', { class: 'valinta' });
        v3.append(el('p', { class: 'kysymys' }, `Sobram ${hintaNum(jaljella)}. O chocolate custa ${hintaNum(SUKLAA)}. Quantos cabem no dinheiro? A Maia pede à caixa:`));
        juuri.append(v3);
        nakyviin(v3);
        const oikea = suklaaFraasi(n);
        const vaaraSija = n === 1 ? 'Yksi suklaata, kiitos.' : `${isolla(luku(n))} suklaa, kiitos.`;
        const miksi = {};
        miksi[vaaraSija] = n === 1 ? 'Com yksi (1), a palavra fica na forma básica: yksi suklaa.' : `Depois de ${luku(n)}, o partitivo: suklaata.`;
        miksi[suklaaFraasi(n + 1)] = `${n + 1} chocolates custam ${hintaNum((n + 1) * SUKLAA)}: não cabe no dinheiro.`;
        T.kysy(v3, {
          vaihtoehdot: [oikea, vaaraSija, suklaaFraasi(n + 1)], oikea, miksi: x => miksi[x],
          kirjaa: { avain: `tokki-manni:suklaa:${n}`, teksti: oikea },
          puhu: () => T.jono(oikea, 'maia'),
          valmis: ok => { if (ok) oikein++; loppu(n); }
        });
      }

      function loppu(n) {
        const laji = arpa(['maito', 'valkoinen']);
        const v = el('div', { class: 'peli-palkinto' });
        const maia = T.fi('p', SUKLAA_REPLIIKKI, { class: 'peli-lause' });
        maia.prepend(T.ohj(SUKLAA_REPLIIKKI, 'maia'));
        maia.append(T.kaannos('Chocolate finlandês. Não é belga… mas é bom!'));
        const tayte = T.tayte();
        v.append(T.suklaa(laji, tayte), el('div', {}, el('p', { class: 'visa-tulos' }, `Rodada completa! ${oikein} / 3 de primeira. +3 🍊`),
          el('p', {}, `O prêmio da Maia: ${n} ${n === 1 ? 'chocolate' : 'chocolates'} ${laji === 'maito' ? 'ao leite' : 'brancos'.replace(/s$/, n === 1 ? '' : 's')}, ${n === 1 ? 'recheado' : 'recheados'} de ${tayte}. Azedinho, do jeito que ela gosta. Escuro, nunca.`), maia));
        const uusi = el('button', { type: 'button', class: 'visa-aloita' }, 'Nova rodada');
        uusi.addEventListener('click', kierros);
        juuri.append(v, uusi);
        nakyviin(v);
        T.valmis({ oikein, yhteensa: 3 });
      }
    }
  }

  /* ========== Kassapaniikki (t03) ========== */
  /* kassa = puhekielinen repliikki (osat: teksti tai { t, l }), kirja = kirjakielinen asu, pt = käännös, vastaus = Maian
     oikea vastaus, vaihtoehdot (kirjakieltä, oppitunneilta 0–3), tilanteet = [{ pt, vastaus }] (Maian tilanne valitsee
     oikean vastauksen), huokaus = jonon kärsivällisyys, joka yllätys vie aina. */
  const KASSA_PERUS = [
    { id: 'moi', kassa: 'Moi!', pt: 'Oi!', vastaus: 'Moi!', vaihtoehdot: ['Moi!', 'Ei ole.', 'Kiitos, samoin!'] },
    { id: 'bonus', kassa: 'Löytyykö bonuskorttia?', pt: 'Tem cartão de fidelidade?', tilanteet: [{ pt: 'A Maia não tem cartão de fidelidade.', vastaus: 'Ei ole.' }],
      vaihtoehdot: ['Ei ole.', 'Ole hyvä.', 'Kiitos, samoin!'], miksi: 'A pergunta é “tem cartão?”. Quem não tem responde: Ei ole.' },
    { id: 'kassi', kassa: 'Tarviitko kassin?', kirja: 'Tarvitsetko kassin?', pt: 'Precisa de sacola?',
      tilanteet: [{ pt: 'A Maia trouxe a própria sacola.', vastaus: 'Ei, kiitos.' }, { pt: 'A Maia esqueceu a sacola em casa.', vastaus: 'Kyllä, kiitos.' }],
      vaihtoehdot: ['Ei, kiitos.', 'Kyllä, kiitos.', 'Ei ole.'], miksi: 'Leia a situação da Maia: ela precisa de sacola ou não? Ei ole = não tenho.' },
    { id: 'kortti', kassa: 'Kortilla?', kirja: 'Maksatko kortilla?', pt: 'No cartão?', tilanteet: [{ pt: 'A Maia paga com cartão.', vastaus: 'Kyllä.' }],
      vaihtoehdot: ['Kyllä.', 'Ei ole.', 'Hei hei!'], miksi: 'Kortilla? = vai pagar com cartão? A Maia paga com cartão: Kyllä.' },
    { id: 'kuitti', kassa: 'Kuitti?', kirja: 'Haluatko kuitin?', pt: 'Quer o recibo?',
      tilanteet: [{ pt: 'A Maia quer o recibo para mostrar à Purjo.', vastaus: 'Kyllä, kiitos.' }, { pt: 'A Maia não quer o recibo.', vastaus: 'Ei, kiitos.' }],
      vaihtoehdot: ['Kyllä, kiitos.', 'Ei, kiitos.', 'Moi!'], miksi: 'Kuitti = recibo. Leia a situação: a Maia quer o recibo ou não?' },
    { id: 'olehyva', kassa: 'Ole hyvä.', pt: 'Aqui está.', vastaus: 'Kiitos!', vaihtoehdot: ['Kiitos!', 'Ole hyvä.', 'Ei ole.'], miksi: 'A caixa entrega as compras. Quem recebe agradece: Kiitos!' },
    { id: 'hei', kassa: 'Kiitti, moi!', kirja: 'Kiitos, hei!', pt: 'Valeu, tchau!', vastaus: 'Hei hei!', vaihtoehdot: ['Hei hei!', 'Ole hyvä.', 'Ei, kiitos.'], miksi: 'É a despedida. Hei hei! = tchau!' }
  ];
  const KASSA_YLLATYKSET = {
    banaanit: { id: 'banaanit', kassa: ['Nää ', { t: 'pitää', l: 'pitää#3' }, ' punnita!'], kirja: ['Nämä ', { t: 'pitää', l: 'pitää#3' }, ' punnita!'], pt: 'Isto aqui precisa ser pesado!',
      tilanteet: [{ pt: '🍌 A Maia esqueceu de pesar as bananas na balança.', vastaus: 'Anteeksi!' }], vaihtoehdot: ['Anteeksi!', 'Kiitos, samoin!', 'Ole hyvä.'],
      miksi: 'Foi um erro da Maia: ela pede desculpas. Anteeksi!', huokaus: 10, jalkeen: 'A Maia corre até a balança com as bananas… A fila espera.' },
    sulkeutuu: { id: 'sulkeutuu', kassa: 'Tää kassa sulkeutuu!', kirja: 'Tämä kassa sulkeutuu!', pt: 'Este caixa vai fechar!', vastaus: 'Voi ei!',
      vaihtoehdot: ['Voi ei!', 'Kyllä, kiitos.', 'Moi!'], miksi: 'O caixa vai fechar: má notícia. Voi ei! = ai, não!', huokaus: 15, jalkeen: 'A Maia leva as compras para o caixa ao lado. A fila inteira vai atrás.' },
    korttiEi: { id: 'kortti-ei', kassa: 'Ei toimi. Laita kortti uudestaan.', kirja: 'Kortti ei toimi. Laita kortti uudestaan.', pt: 'Não funcionou. Ponha o cartão de novo.',
      vastaus: 'Selvä!', vaihtoehdot: ['Selvä!', 'Ei ole.', 'Hei hei!'], miksi: 'A caixa pede para tentar de novo. Selvä! = certo, entendi.', huokaus: 10, jalkeen: 'Bip… bip… Agora foi!' }
  };
  const KASSA_APU = 'Anteeksi, en ymmärrä.';
  const HUOKAUS = 15, APU_HUOKAUS = 5;
  const KASSAN_FRAASIT = [
    ['Löytyykö bonuskorttia?', 'Löytyykö bonuskorttia?', 'tem cartão de fidelidade?'],
    ['Tarviitko kassin?', 'Tarvitsetko kassin?', 'precisa de sacola?'],
    ['Kortilla?', 'Maksatko kortilla?', 'no cartão?'],
    ['Kuitti?', 'Haluatko kuitin?', 'quer o recibo?'],
    ['Tää kassa sulkeutuu!', 'Tämä kassa sulkeutuu!', 'este caixa vai fechar!'],
    ['Kiitti, moi!', 'Kiitos, hei!', 'valeu, tchau!']
  ];
  const tekstiksi = osat => [].concat(osat).map(o => (typeof o === 'string' ? o : o.t)).join('');
  function kassaKierros() {
    const askeleet = KASSA_PERUS.map(a => Object.assign({}, a));
    const yllatykset = sekoita(['banaanit', 'sulkeutuu', 'korttiEi']).slice(0, Math.random() < 0.5 ? 1 : 2);
    const lisaaJalkeen = (id, a) => { const i = askeleet.findIndex(x => x.id === id); askeleet.splice(i + 1, 0, a); };
    if (yllatykset.includes('banaanit')) lisaaJalkeen('bonus', KASSA_YLLATYKSET.banaanit);
    if (yllatykset.includes('sulkeutuu')) { lisaaJalkeen(arpa(['moi', 'kassi']), KASSA_YLLATYKSET.sulkeutuu); lisaaJalkeen('sulkeutuu', Object.assign({}, KASSA_PERUS[0], { id: 'moi2' })); }
    if (yllatykset.includes('korttiEi')) lisaaJalkeen('kortti', KASSA_YLLATYKSET.korttiEi);
    return askeleet.map(a => {
      const t = a.tilanteet ? arpa(a.tilanteet) : null;
      return Object.assign({}, a, { tilanne: t ? t.pt : null, vastaus: t ? t.vastaus : a.vastaus });
    });
  }

  function ajaKassa(paikka, T) {
    const el = T.el;
    const juuri = el('div', { class: 'peli' });
    paikka.replaceChildren(juuri);
    juuri.append(el('p', {}, 'Sábado de manhã no Tokmanni. A Maia leva café e chocolate para o caixa de autoatendimento… e lá está a placa. Agora ela vai ter de falar com a caixa, com uma fila inteira atrás dela.'),
      el('p', { class: 'ohje' }, 'Tela cheia. A caixa fala a língua da rua; embaixo de cada fala aparece a forma padrão. Escolha a resposta da Maia. Resposta errada: a fila suspira, mas o jogo continua. Não entendeu? Use “Anteeksi, en ymmärrä.”'));
    // Na rua · Puhekieli -laatikko (kuten oppitunnin Na rua -nurkka): kassan valmiit ilmaukset, vain tunnistettaviksi.
    const nr = el('aside', { class: 'kulttuuri na-rua' }, el('p', { class: 'yla' }, 'Na rua · Puhekieli'), el('h3', {}, 'Frases do caixa'),
      el('p', {}, 'Frases prontas do caixa, só para reconhecer. A Maia responde na forma padrão, com o que você já sabe.'));
    const taulu = el('table', { class: 'taivutus' }, el('tr', {}, el('th', {}, 'na rua'), el('th', {}, 'padrão'), el('th', {}, 'português')));
    for (const [puhe, kirja, pt] of KASSAN_FRAASIT) taulu.append(el('tr', {}, el('td', {}, T.fi('span', puhe, { 'data-rekisteri': 'puhe' })), el('td', {}, T.fi('span', kirja)), el('td', { lang: 'pt-BR' }, pt)));
    nr.append(el('div', { class: 'vieritys' }, taulu));
    const aloita = el('button', { type: 'button', class: 'visa-aloita' }, '🧾 Começar (tela cheia)');
    juuri.append(nr, aloita);
    aloita.addEventListener('click', () => avaa(aloita));

    function avaa(paluu) {
      let karsivallisyys = 100, oikein = 0, kysytty = 0, kohta = 0, auki = true;
      const askeleet = kassaKierros();
      const kehys = el('div', { class: 'vp kassa peli', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Kassapaniikki' });
      const mittari = el('span', { class: 'kassa-mittari', role: 'meter', 'aria-label': 'Paciência da fila', 'aria-valuemin': '0', 'aria-valuemax': '100' });
      for (let i = 0; i < 10; i++) mittari.append(el('span'));
      const kaannosNappi = el('button', { type: 'button', class: 'vp-pieni', 'aria-pressed': String(document.body.classList.contains('kaannokset-auki')) }, 'Tradução');
      const suljeNappi = el('button', { type: 'button', class: 'vp-pieni', 'aria-label': 'Fechar o jogo' }, '✕ Sair');
      kehys.append(el('div', { class: 'vp-yla' }, el('b', {}, '🧾 Kassapaniikki'), el('span', { class: 'kassa-merkki' }, 'Na rua · Puhekieli'),
        el('span', { class: 'kassa-fila' }, 'Fila: ', mittari), kaannosNappi, suljeNappi));
      const sisus = el('div', { class: 'kassa-sisus' });
      kehys.append(sisus);
      document.body.append(kehys);
      document.body.classList.add('vp-auki', 'kassa-auki');
      const sulje = () => {
        if (!auki) return;
        auki = false;
        if (window.Aani) window.Aani.pysayta();
        kehys.remove();
        document.body.classList.remove('vp-auki', 'kassa-auki');
        window.removeEventListener('hashchange', sulje);
        document.removeEventListener('keydown', nappain);
        if (paluu && paluu.isConnected) paluu.focus();
      };
      const nappain = e => { if (e.key === 'Escape' && !document.querySelector('.kupla')) sulje(); };
      window.addEventListener('hashchange', sulje);
      document.addEventListener('keydown', nappain);
      suljeNappi.addEventListener('click', sulje);
      // Tradução: sama kytkin kuin yläpalkissa (yläpalkki on koko ruudun pelin alla).
      kaannosNappi.addEventListener('click', () => {
        const k = document.getElementById('kaannokset');
        if (k) k.click(); else document.body.classList.toggle('kaannokset-auki');
        kaannosNappi.setAttribute('aria-pressed', String(document.body.classList.contains('kaannokset-auki')));
      });
      const jono = el('div', { class: 'kassa-jono', 'aria-label': 'A fila atrás da Maia' });
      const JONO = ['🧓', '👩', '👨‍🦳', '🧑', '👵'];
      const ihmiset = JONO.map(x => el('span', { 'aria-hidden': 'true' }, x));
      const huokausEl = el('span', { class: 'kassa-huokaus', 'aria-live': 'polite' });
      jono.append(...ihmiset, huokausEl);
      function paivitaMittari() {
        const n = Math.round(karsivallisyys / 10);
        [...mittari.children].forEach((s, i) => s.classList.toggle('on', i < n));
        mittari.dataset.taso = karsivallisyys > 50 ? 'hyva' : karsivallisyys > 20 ? 'matala' : 'loppu';
        mittari.setAttribute('aria-valuenow', String(karsivallisyys));
      }
      function huokaa(maara) {
        karsivallisyys = Math.max(0, karsivallisyys - maara);
        paivitaMittari();
        const kuka = arpa(ihmiset);
        const vanha = kuka.textContent;
        kuka.textContent = '😮‍💨';
        setTimeout(() => { kuka.textContent = vanha; }, 1600);
        huokausEl.replaceChildren(el('span', { class: 'pala' }, 'Huoh…'), ' ', el('span', { lang: 'pt-BR' }, karsivallisyys ? '(a fila suspira)' : '(a fila suspira MUITO alto, mas ninguém vai embora)'));
        huokausEl.classList.remove('kassa-huokaus'); void huokausEl.offsetWidth; huokausEl.classList.add('kassa-huokaus');
      }
      paivitaMittari();

      // Alku: itsepalvelukassa ei toimi.
      const alku = el('div', { class: 'kassa-alku' },
        el('p', { class: 'kassa-tilanne' }, 'Caixa de autoatendimento:'), T.fi('p', 'Ei käytössä', { class: 'kassa-kyltti' }));
      const maiaAlku = T.repliikki('maia', 'Voi ei!', null, 'Ai, não!');
      const meneKassalle = el('button', { type: 'button', class: 'visa-aloita' }, 'Ir para o caixa →');
      alku.append(maiaAlku, meneKassalle);
      sisus.append(alku);
      T.soita(T.jono('Voi ei!', 'maia'));
      meneKassalle.focus();
      meneKassalle.addEventListener('click', () => { sisus.replaceChildren(jono); askel(); });

      function askel() {
        if (!auki) return;
        if (kohta >= askeleet.length) return loppu();
        const a = askeleet[kohta];
        [...sisus.children].forEach(c => { if (c !== jono) c.remove(); });
        const v = el('div', { class: 'valinta kassa-vuoro' });
        const repliikki = T.repliikki('kassa', a.kassa, a.kirja || null, a.pt, true);
        v.append(repliikki);
        if (a.tilanne) v.append(el('p', { class: 'kassa-tilanne' }, a.tilanne));
        const maia = el('div', { class: 'peli-asiakas' }, T.avatar('maia'), el('span', { class: 'kassa-tilanne' }, 'A Maia responde:'));
        v.append(maia);
        sisus.append(v);
        nakyviin(v);
        kysytty++;
        T.soita(T.jono(tekstiksi(a.kassa), 'kassa', repliikki));
        const apuNappi = el('button', { type: 'button', class: 'vp-pieni', lang: KIELI }, KASSA_APU);
        apuNappi.addEventListener('click', () => {
          huokaa(APU_HUOKAUS);
          repliikki.classList.add('kassa-selitetty');
          T.soita([...T.jono(KASSA_APU, 'maia'), ...T.jono(tekstiksi(a.kirja || a.kassa), 'kassa', repliikki)]);
          apuNappi.disabled = true;
        });
        T.kysy(v, {
          vaihtoehdot: a.vaihtoehdot, oikea: a.vastaus, uudelleen: true, eiKirjoitusta: true,
          miksi: () => a.miksi || '',
          kirjaa: { avain: `kassapaniikki:${a.id}:${a.vastaus}`, teksti: `${tekstiksi(a.kirja || a.kassa)} → ${a.vastaus}` },
          vaarin: () => huokaa(HUOKAUS),
          puhu: () => T.jono(a.vastaus, 'maia'),
          lisa: apuNappi,
          valmis: ok => {
            if (ok) oikein++;
            if (a.huokaus) huokaa(a.huokaus);
            const jatka = el('button', { type: 'button', class: 'visa-seuraava' }, kohta < askeleet.length - 1 ? 'Continuar →' : 'Sair da loja →');
            if (a.jalkeen) v.append(el('p', { class: 'kassa-tilanne' }, a.jalkeen));
            v.append(jatka);
            jatka.focus();
            jatka.addEventListener('click', () => { kohta++; askel(); });
          }
        });
      }

      function loppu() {
        const laji = arpa(['maito', 'valkoinen']);
        const tayte = T.tayte();
        const tulos = el('div', { class: 'vp-loppu kassa-loppu' });
        const maia = T.fi('p', SUKLAA_REPLIIKKI, { class: 'peli-lause' });
        maia.prepend(T.ohj(SUKLAA_REPLIIKKI, 'maia'));
        maia.append(T.kaannos('Chocolate finlandês. Não é belga… mas é bom!'));
        const uusi = el('button', { type: 'button', class: 'visa-aloita' }, 'Nova rodada');
        const pois = el('button', { type: 'button', class: 'vp-pieni' }, 'Fechar');
        tulos.append(el('p', {}, 'A Maia saiu do caixa! 🎉'),
          el('p', { class: 'kassa-tilanne' }, `${oikein} / ${kysytty} de primeira · paciência da fila: ${karsivallisyys} % · +3 🍊`),
          el('div', { class: 'peli-palkinto' }, T.suklaa(laji, tayte), el('div', {}, el('p', { class: 'kassa-tilanne' }, `O prêmio: chocolate ${laji === 'maito' ? 'ao leite' : 'branco'} recheado de ${tayte}, azedinho (escuro, nunca).`), maia)),
          el('div', { class: 'vp-soitto-napit' }, uusi, pois));
        kehys.append(tulos);
        uusi.addEventListener('click', () => { sulje(); avaa(paluu); });
        pois.addEventListener('click', sulje);
        uusi.focus();
        T.valmis({ oikein, yhteensa: kysytty });
      }
    }
  }

  /* ========== ’Esburger (t04) ========== */
  // Hampurilaisen kuvake piirroksena (AV-028, omistaja 19.10.2026: kuvake näkyi ”???” – emoji 🍔 puuttui laitteen
  // fontista). Oma litteä piirros, 1em × 1em, ei riipu emojifontista; muut tuotteet ovat yhä emojeja.
  const HAMPURILAINEN_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em" focusable="false" aria-hidden="true">' +
    '<path d="M4 14.6C4 8.7 9.4 5 16 5s12 3.7 12 9.6z" fill="#F0A83A"/>' +
    '<g fill="#FFF3D1"><ellipse cx="11" cy="9.8" rx="1.1" ry=".6"/><ellipse cx="16" cy="8.1" rx="1.1" ry=".6"/><ellipse cx="21" cy="9.8" rx="1.1" ry=".6"/><ellipse cx="13.5" cy="12.2" rx="1" ry=".55"/><ellipse cx="18.5" cy="12.2" rx="1" ry=".55"/></g>' +
    '<rect x="3.5" y="19.4" width="25" height="4.4" rx="2.2" fill="#7B4A2D"/>' +
    '<path d="M5 17.8h22l-3.4 3.4-3-1.7-3.6 2.2-3.6-2.2-3 1.7z" fill="#FFC933"/>' +
    '<path d="M3.4 16.3c1.5-1.2 3 1.2 4.5 0s3 1.2 4.5 0 3 1.2 4.5 0 3 1.2 4.5 0 3 1.2 4.5 0 2.4 1.2 3.4 0" fill="none" stroke="#45A647" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M4.5 24.8h23v1.4a3 3 0 0 1-3 3h-17a3 3 0 0 1-3-3z" fill="#F0A83A"/></svg>';
  // Tuotteen kuvake: piirros (x.svg) tai emoji (x.ikoni). Kutsutaan vasta pelin aikana (lataus ei koske DOMiin).
  const tuoteIkoni = (x, luokka) => {
    const s = document.createElement('span');
    s.className = luokka + (x.svg ? ' peli-svg-ikoni' : '');
    s.setAttribute('aria-hidden', 'true');
    if (x.svg) s.innerHTML = x.svg; else s.textContent = x.ikoni;
    return s;
  };
  const MENU = [
    { id: 'hampurilainen', ikoni: '', svg: HAMPURILAINEN_SVG, pt: 'hambúrguer' }, { id: 'kahvi', ikoni: '☕', pt: 'café' }, { id: 'tee', ikoni: '🍵', pt: 'chá' },
    { id: 'mehu', ikoni: '🧃', pt: 'suco' }, { id: 'vesi', ikoni: '💧', pt: 'água' }, { id: 'pulla', ikoni: '🥐', svg: PULLA_KUVA, pt: 'pão doce' }, { id: 'kakku', ikoni: '🍰', pt: 'bolo' }
  ];
  const ASIAKKAAT = { kertoja: 'Capivara', manaatti: 'Peixe-boi', maia: 'Maia', jay: 'Jay', hiisi: 'Hiisi' };
  // Kuunneltavat tilaukset (kokoa tarjotin): teksti ja määrät.
  const TILAUKSET = [
    { h: 'kertoja', t: 'Kaksi hampurilaista ja yksi mehu, kiitos.', m: { hampurilainen: 2, mehu: 1 } },
    { h: 'manaatti', t: 'Saisinko kolme hampurilaista?', m: { hampurilainen: 3 } },
    { h: 'jay', t: 'Haluaisin kahvia ja pullaa.', m: { kahvi: 1, pulla: 1 } },
    { h: 'maia', t: 'Saisinko teetä ja kakkua?', m: { tee: 1, kakku: 1 } },
    { h: 'hiisi', t: 'Yksi kahvi, kiitos.', m: { kahvi: 1 } },
    { h: 'manaatti', t: 'Kolme hampurilaista ja kaksi mehua, kiitos.', m: { hampurilainen: 3, mehu: 2 } },
    { h: 'kertoja', t: 'Haluaisin kaksi hampurilaista.', m: { hampurilainen: 2 } },
    { h: 'jay', t: 'Saisinko kaksi kahvia?', m: { kahvi: 2 } },
    { h: 'maia', t: 'Yksi tee ja kaksi pullaa, kiitos.', m: { tee: 1, pulla: 2 } },
    { h: 'kertoja', t: 'Saisinko vettä?', m: { vesi: 1 } },
    { h: 'hiisi', t: 'Kaksi vettä, kiitos.', m: { vesi: 2 } },
    { h: 'manaatti', t: 'Haluaisin kolme pullaa ja kakkua.', m: { pulla: 3, kakku: 1 } }
  ];
  // Sano tilaus itse: oikea ja kaksi väärää (kumpikin eroaa yhdellä sijalla), palaute nimeää virheen.
  const SANO = [
    { h: 'kertoja', m: { hampurilainen: 2, mehu: 1 }, oikea: 'Kaksi hampurilaista ja yksi mehu, kiitos.',
      vaarat: { 'Kaksi hampurilainen ja yksi mehu, kiitos.': 'Depois de kaksi: partitivo, hampurilaista.', 'Kaksi hampurilaista ja yksi mehua, kiitos.': 'Com yksi: forma básica, mehu.' } },
    { h: 'manaatti', m: { hampurilainen: 3 }, oikea: 'Haluaisin kolme hampurilaista.',
      vaarat: { 'Haluaisin kolme hampurilainen.': 'Depois de kolme: partitivo, hampurilaista.', 'Haluaisin kolme hampurilaisen.': 'hampurilaisen é o genitivo (de quem?). Depois de kolme: partitivo, hampurilaista.' } },
    { h: 'maia', m: { tee: 1 }, mass: true, oikea: 'Saisinko teetä?',
      vaarat: { 'Saisinko tee?': 'Depois de saisinko, a coisa pedida vai para o partitivo: teetä.', 'Saisinko kahvia?': 'kahvia é café. A Maia quer chá: teetä.' } },
    { h: 'jay', m: { kahvi: 2 }, oikea: 'Saisinko kaksi kahvia?',
      vaarat: { 'Saisinko kaksi kahvi?': 'Depois de kaksi: partitivo, kahvia.', 'Saisinko kolme kahvia?': 'kolme = 3. O Jay quer dois: kaksi.' } },
    { h: 'kertoja', m: { pulla: 1, kakku: 1 }, mass: true, oikea: 'Haluaisin pullaa ja kakkua.',
      vaarat: { 'Haluaisin pulla ja kakkua.': 'Depois de haluaisin: partitivo também no primeiro, pullaa.', 'Haluaisin pullaa ja kakku.': 'Depois de haluaisin: partitivo também no segundo, kakkua.' } },
    { h: 'manaatti', m: { hampurilainen: 3, vesi: 2 }, oikea: 'Kolme hampurilaista ja kaksi vettä, kiitos.',
      vaarat: { 'Kolme hampurilaista ja kaksi vesi, kiitos.': 'Depois de kaksi: partitivo. A água é irregular: vettä.', 'Kolme hampurilaista ja kaksi veden, kiitos.': 'veden é o genitivo. Depois de kaksi: partitivo, vettä.' } },
    { h: 'hiisi', m: { mehu: 1 }, oikea: 'Yksi mehu, kiitos.',
      vaarat: { 'Yksi mehua, kiitos.': 'Com yksi (1): forma básica, mehu.', 'Yksi mehun, kiitos.': 'mehun é o genitivo. Com yksi: forma básica, mehu.' } },
    { h: 'maia', m: { kahvi: 1, kakku: 2 }, oikea: 'Yksi kahvi ja kaksi kakkua, kiitos.',
      vaarat: { 'Yksi kahvia ja kaksi kakkua, kiitos.': 'Com yksi: forma básica, kahvi.', 'Yksi kahvi ja kaksi kakku, kiitos.': 'Depois de kaksi: partitivo, kakkua.' } }
  ];
  const ESBURGER_LOPPU = [
    ['kertoja', 'Peixe-boi, o atendente foi ótimo. Eu lembro de todos os pedidos. Menos do meu.'],
    ['manaatti', 'Três hambúrgueres e uma soneca. A Maia chama aqui de ’Esburger, e soa mais gostoso.'],
    ['kertoja', 'Kaksi hampurilaista: partitivo depois de número. Vou repetir isso a semana inteira.']
  ];
  // Tilauksen kuvaus solmuina (kuvake + ”2 × hambúrguer” + …): hampurilainen piirroksena, muut emojeina tekstissä.
  const kuvaile = m => Object.entries(m).flatMap(([id, n], i) => { const x = MENU.find(y => y.id === id); return [i ? ' + ' : '', x.svg ? tuoteIkoni(x, 'peli-ikoni-teksti') : x.ikoni, ` ${n} × ${x.pt}`]; });

  function ajaEsburger(paikka, T) {
    const el = T.el;
    const juuri = el('div', { class: 'peli' });
    paikka.replaceChildren(juuri);
    kierros();
    function kierros() {
      juuri.replaceChildren();
      const vuorot = sekoita([...sekoita(TILAUKSET).slice(0, 2).map(t => ({ laji: 'kokoa', t })), ...sekoita(SANO).slice(0, 2).map(t => ({ laji: 'sano', t }))]);
      let kohta = 0, oikein = 0;
      juuri.append(el('p', {}, 'Sábado em Kallio. No quiosque ’Esburger (assim a Maia diz Hesburger), o favorito do Capivara e do Peixe-boi, chegam quatro clientes. Às vezes você atende e monta a bandeja; às vezes você faz o pedido.'));
      if (T.ilmoitus()) juuri.append(T.ilmoitus());
      juuri.append(T.tilaKytkin());
      const palkki = el('div', { class: 'peli-askeleet', 'aria-hidden': 'true' }, ...vuorot.map(() => el('span')));
      const alue = el('div', { class: 'peli' });
      juuri.append(palkki, alue);
      seuraava();
      function seuraava() {
        [...palkki.children].forEach((x, i) => { x.classList.toggle('tehty', i < kohta); x.classList.toggle('nyt', i === kohta); });
        alue.replaceChildren();
        if (kohta >= vuorot.length) return loppu();
        const { laji, t } = vuorot[kohta];
        if (laji === 'kokoa') kokoa(t); else sano(t);
      }
      const jatko = v => {
        const b = el('button', { type: 'button', class: 'visa-seuraava' }, kohta < vuorot.length - 1 ? 'Próximo cliente →' : 'Fechar o quiosque →');
        b.addEventListener('click', () => { kohta++; seuraava(); });
        v.append(b);
        b.focus();
      };
      function kokoa(t) {
        const v = el('div', { class: 'valinta' });
        const lause = T.fi('p', t.t, { class: 'peli-lause', hidden: T.voi() ? true : null });
        const nayta = el('button', { type: 'button', class: 'pieni-nappi toissijainen', hidden: T.voi() ? null : true }, 'Mostrar o texto');
        nayta.addEventListener('click', () => { lause.hidden = false; nayta.remove(); });
        const ohj = T.ohj(t.t, t.h, 'Ouvir o pedido');
        v.append(el('div', { class: 'peli-asiakas' }, T.avatar(t.h), el('p', { class: 'kysymys' }, `${ASIAKKAAT[t.h]} pede. Ouça e monte a bandeja.`), ohj), lause, nayta);
        const tarjotin = Object.fromEntries(MENU.map(x => [x.id, 0]));
        const hylly = el('div', { class: 'peli-hylly' });
        for (const x of MENU) {
          const maara = el('output', { 'aria-live': 'polite' }, '0');
          const miinus = el('button', { type: 'button', class: 'peli-nappi', 'aria-label': `Menos ${x.pt}`, disabled: true }, '−');
          const plus = el('button', { type: 'button', class: 'peli-nappi', 'aria-label': `Mais ${x.pt}` }, '+');
          const kortti = el('div', { class: 'peli-tuote' }, tuoteIkoni(x, 'peli-ikoni'), T.fi('span', x.id, { class: 'peli-nimi' }), el('div', { class: 'peli-maara' }, miinus, maara, plus));
          const p = d => () => { tarjotin[x.id] = Math.max(0, Math.min(3, tarjotin[x.id] + d)); maara.textContent = String(tarjotin[x.id]); miinus.disabled = !tarjotin[x.id]; plus.disabled = tarjotin[x.id] >= 3; kortti.toggleAttribute('data-valittu', tarjotin[x.id] > 0); };
          miinus.addEventListener('click', p(-1)); plus.addEventListener('click', p(1));
          hylly.append(kortti);
        }
        const palaute = el('p', { class: 'palaute', 'aria-live': 'polite' });
        const tarjoile = el('button', { type: 'button', class: 'visa-seuraava' }, 'Servir →');
        v.append(hylly, tarjoile, palaute);
        alue.append(v);
        T.soita(T.jono(t.t, t.h));
        let eka = true;
        tarjoile.addEventListener('click', () => {
          const vaarin = MENU.filter(x => tarjotin[x.id] !== (t.m[x.id] || 0));
          const ok = !vaarin.length;
          T.tulos(v, ok, eka, { avain: `esburger:kokoa:${t.t}`, teksti: t.t });
          if (ok && eka) oikein++;
          eka = false;
          palaute.className = 'palaute ' + (ok ? 'ok' : 'ei');
          if (!ok) {
            lause.hidden = false; nayta.remove();
            palaute.textContent = `Ainda não. Leia o pedido e confira: ${vaarin.map(x => x.pt).join(', ')}. Lembre: kaksi hampurilaista = 2 hambúrgueres; kahvia, sem número = um café.`;
            return;
          }
          palaute.replaceChildren('Certo! ', ...kuvaile(t.m), '.');
          lause.hidden = false; nayta.remove();
          v.querySelectorAll('.peli-hylly button, button.visa-seuraava').forEach(b => { b.disabled = true; });
          jatko(v);
        });
      }
      function sano(t) {
        const v = el('div', { class: 'valinta' });
        v.append(el('div', { class: 'peli-asiakas' }, T.avatar(t.h), el('p', { class: 'kysymys' }, `${ASIAKKAAT[t.h]} quer: `, ...kuvaile(t.m), `. Você faz o pedido por ${t.h === 'maia' || t.h === 'jay' || t.h === 'hiisi' ? (t.h === 'maia' ? 'ela' : 'ele') : 'ele'}. O que você diz?`)));
        alue.append(v);
        T.kysy(v, {
          vaihtoehdot: [t.oikea, ...Object.keys(t.vaarat)], oikea: t.oikea,
          hyvaksy: [t.oikea, t.oikea.replace(/,? kiitos\.?$/, '')],
          miksi: x => t.vaarat[x] || '',
          kirjaa: { avain: `esburger:sano:${t.oikea}`, teksti: t.oikea },
          puhu: () => T.jono(t.oikea, 'kertoja'),
          valmis: ok => { if (ok) oikein++; jatko(v); }
        });
      }
      function loppu() {
        const [h, teksti] = arpa(ESBURGER_LOPPU);
        const v = el('div', { class: 'peli-palkinto' }, T.avatar(h), el('div', {}, el('p', { class: 'visa-tulos' }, `Quiosque fechado! ${oikein} / ${vuorot.length} de primeira. +3 🍊`),
          el('p', {}, `${ASIAKKAAT[h]}: ${teksti}`)));
        const uusi = el('button', { type: 'button', class: 'visa-aloita' }, 'Nova rodada');
        uusi.addEventListener('click', kierros);
        alue.append(v, uusi);
        nakyviin(v);
        T.valmis({ oikein, yhteensa: vuorot.length });
      }
    }
  }

  /* ========== Sukupuu (t05) ========== */
  const HENKILOT = {
    pertti: { nimi: 'Pertti', gen: 'Pertin', ade: 'Pertillä', kuollut: true, suhteet: [['isä', ['jay', 'hiisi']]] },
    purjo: { nimi: 'Purjo', gen: 'Purjon', ade: 'Purjolla', suhteet: [['äiti', ['jay', 'hiisi']]] },
    jay: { nimi: 'Jay', gen: 'Jayn', ade: 'Jayllä', suhteet: [['poika', ['pertti', 'purjo']], ['veli', ['hiisi']], ['poikaystävä', ['maia']]] },
    hiisi: { nimi: 'Hiisi', gen: 'Hiiden', ade: 'Hiidellä', suhteet: [['poika', ['pertti', 'purjo']], ['veli', ['jay']]] },
    walker: { nimi: 'Walker', gen: 'Walkerin', ade: 'Walkerilla', suhteet: [['isä', ['anderson', 'maia']]] },
    marta: { nimi: 'Marta', gen: 'Martan', ade: 'Martalla', suhteet: [['äiti', ['anderson', 'maia']]] },
    anderson: { nimi: 'Anderson', gen: 'Andersonin', ade: 'Andersonilla', suhteet: [['poika', ['walker', 'marta']], ['veli', ['maia']]] },
    maia: { nimi: 'Maia', gen: 'Maian', ade: 'Maialla', suhteet: [['tytär', ['walker', 'marta']], ['sisko', ['anderson']], ['tyttöystävä', ['jay']]] }
  };
  const SUHDE_PT = { 'isä': 'pai', 'äiti': 'mãe', poika: 'filho', 'tytär': 'filha', veli: 'irmão', sisko: 'irmã', 'poikaystävä': 'namorado', 'tyttöystävä': 'namorada' };
  const PERHEET = [
    { otsikko: 'Jayn perhe', pt: 'a família do Jay', rivit: [['pertti', 'purjo'], ['jay', 'hiisi']] },
    { otsikko: 'Maian perhe', pt: 'a família da Maia, em Belo Horizonte', rivit: [['walker', 'marta'], ['anderson', 'maia']] }
  ];
  const luettelo = a => (a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' ja ' + a[a.length - 1]);
  // ”Hän on Jayn ja Hiiden äiti.” – yksi lause suhdetta kohden.
  const kuvaukset = id => HENKILOT[id].suhteet.map(([s, kenen]) => ({ fi: `Hän on ${luettelo(kenen.map(k => HENKILOT[k].gen))} ${s}.`, pt: `${HENKILOT[id].kuollut ? 'Era' : 'É'} ${s === 'äiti' || s === 'tytär' || s === 'sisko' || s === 'tyttöystävä' ? 'a' : 'o'} ${SUHDE_PT[s]} ${kenen.map(k => (k === 'maia' || k === 'purjo' || k === 'marta' ? 'da ' : 'do ') + HENKILOT[k].nimi).join(' e ')}.` }));
  // Kysymykset: Kenen <suhde> X on? (genetiivi) ja Kuka on <Y:n> <suhde>? (napauta; vain yksikäsitteiset).
  function sukuKysymykset() {
    const kenen = [], kuka = [];
    for (const [id, h] of Object.entries(HENKILOT)) for (const [s, kohteet] of h.suhteet) for (const k of kohteet) {
      kenen.push({ laji: 'kenen', id, s, k, kysymys: `Kenen ${s} ${h.nimi} on?`, oikea: HENKILOT[k].gen, vaihtoehdot: [HENKILOT[k].gen, HENKILOT[k].nimi, HENKILOT[k].ade] });
      const muut = Object.entries(HENKILOT).filter(([i2, h2]) => i2 !== id && h2.suhteet.some(([s2, kk]) => s2 === s && kk.includes(k)));
      if (!muut.length) kuka.push({ laji: 'kuka', id, s, k, kysymys: `Kuka on ${HENKILOT[k].gen} ${s}?` });
    }
    return { kenen, kuka };
  }

  function ajaSukupuu(paikka, T) {
    const el = T.el;
    const juuri = el('div', { class: 'peli' });
    paikka.replaceChildren(juuri);
    let tila = 'tutki', vastaus = null;
    juuri.append(el('p', {}, 'A árvore das duas famílias: a do Jay, na Finlândia, e a da Maia, em Belo Horizonte. Comece explorando: toque numa pessoa. Depois faça o exercício.'));
    const tutkiNappi = el('button', { type: 'button', class: 'pieni-nappi', 'aria-pressed': 'true' }, 'Explorar');
    const harjoitusNappi = el('button', { type: 'button', class: 'pieni-nappi toissijainen', 'aria-pressed': 'false' }, 'Exercício (8 perguntas)');
    juuri.append(el('div', { class: 'peli-tila' }, tutkiNappi, harjoitusNappi));
    const puu = el('div', { class: 'peli-puu' });
    const napit = {};
    PERHEET.forEach((p, i) => {
      const perhe = el('div', { class: 'peli-perhe' }, T.fi('h3', p.otsikko), el('p', { class: 'ohje', lang: 'pt-BR' }, p.pt));
      p.rivit.forEach(r => perhe.append(el('div', { class: 'peli-rivi' }, ...r.map(id => {
        const h = HENKILOT[id];
        const b = el('button', { type: 'button', class: 'peli-henkilo', 'aria-pressed': 'false' }, T.avatar(id), el('span', {}, h.nimi + (h.kuollut ? ' (†)' : '')));
        b.addEventListener('click', () => napautus(id));
        napit[id] = b;
        return b;
      }))));
      puu.append(perhe);
      if (!i) puu.append(T.fi('p', 'Jay ♥ Maia', { class: 'peli-pari' }));
    });
    const kortti = el('div', { class: 'peli-kortti', 'aria-live': 'polite' }, el('p', {}, 'Toque numa pessoa da árvore.'));
    const harjoitus = el('div', { class: 'peli', hidden: true });
    juuri.append(kortti, harjoitus, puu);
    tutkiNappi.addEventListener('click', () => vaihda('tutki'));
    harjoitusNappi.addEventListener('click', () => vaihda('harjoitus'));
    function vaihda(x) {
      tila = x; vastaus = null;
      tutkiNappi.setAttribute('aria-pressed', String(x === 'tutki')); tutkiNappi.classList.toggle('toissijainen', x !== 'tutki');
      harjoitusNappi.setAttribute('aria-pressed', String(x !== 'tutki')); harjoitusNappi.classList.toggle('toissijainen', x === 'tutki');
      Object.values(napit).forEach(b => { b.classList.remove('oikein', 'vaarin'); b.setAttribute('aria-pressed', 'false'); });
      kortti.hidden = x !== 'tutki';
      harjoitus.hidden = x === 'tutki';
      if (x === 'harjoitus') aloitaHarjoitus();
    }
    function napautus(id) {
      if (tila === 'tutki') {
        Object.entries(napit).forEach(([i, b]) => b.setAttribute('aria-pressed', String(i === id)));
        const h = HENKILOT[id];
        const kysymys = T.fi('p', 'Kuka hän on?', { class: 'peli-lause' });
        kysymys.prepend(T.ohj('Kuka hän on?', 'kertoja'));
        const vastaukset = [`Hän on ${h.nimi}.`, ...kuvaukset(id).map(x => x.fi)].join(' ');
        const rivi = T.fi('p', vastaukset, { class: 'peli-lause' });
        rivi.prepend(T.ohj(vastaukset, 'kertoja'));
        rivi.append(T.kaannos(`${h.kuollut ? 'Ele é o ' + h.nimi + ' (já faleceu).' : (id === 'maia' || id === 'purjo' || id === 'marta' ? 'Ela é a ' : 'Ele é o ') + h.nimi + '.'} ${kuvaukset(id).map(x => x.pt).join(' ')}`));
        kortti.replaceChildren(el('div', { class: 'peli-asiakas' }, T.avatar(id), el('div', {}, kysymys, rivi)));
        T.soita(T.jono(`Kuka hän on? ${vastaukset}`, 'kertoja'));
        return;
      }
      if (vastaus) vastaus(id);
    }
    function aloitaHarjoitus() {
      const { kenen, kuka } = sukuKysymykset();
      const lista = sekoita([...sekoita(kenen).slice(0, 3), ...sekoita(kuka).slice(0, 5).map((k, i) => (i < 2 ? Object.assign({}, k, { laji: 'kuule' }) : k))]);
      let kohta = 0, oikein = 0, ohitetut = 0;
      harjoitus.replaceChildren();
      if (T.ilmoitus()) harjoitus.append(T.ilmoitus());
      const palkki = el('div', { class: 'peli-askeleet', 'aria-hidden': 'true' }, ...lista.map(() => el('span')));
      const alue = el('div', { class: 'peli' });
      harjoitus.append(palkki, alue);
      seuraava();
      function seuraava() {
        [...palkki.children].forEach((x, i) => { x.classList.toggle('tehty', i < kohta); x.classList.toggle('nyt', i === kohta); });
        Object.values(napit).forEach(b => b.classList.remove('oikein', 'vaarin'));
        vastaus = null;
        alue.replaceChildren();
        if (kohta >= lista.length) return loppu();
        const q = lista[kohta];
        const v = el('div', { class: 'valinta' });
        alue.append(v);
        nakyviin(v);
        const jatka = () => {
          const b = el('button', { type: 'button', class: 'visa-seuraava' }, kohta < lista.length - 1 ? 'Próxima →' : 'Ver resultado →');
          b.addEventListener('click', () => { kohta++; seuraava(); });
          v.append(b);
          b.focus();
        };
        const oikeaLause = q.laji === 'kenen' ? `${HENKILOT[q.id].nimi} on ${HENKILOT[q.k].gen} ${q.s}.` : `${HENKILOT[q.k].gen} ${q.s} on ${HENKILOT[q.id].nimi}.`;
        if (q.laji === 'kenen') {
          const k = T.fi('p', q.kysymys, { class: 'kysymys' });
          k.prepend(T.ohj(q.kysymys, 'kertoja'));
          v.append(k);
          T.kysy(v, {
            vaihtoehdot: q.vaihtoehdot, oikea: q.oikea, eiKirjoitusta: false,
            miksi: x => (x === HENKILOT[q.k].nimi ? `${x} é a forma básica. De quem? Genitivo, com -n: ${q.oikea}.` : `${x} é “quem tem” (-lla/-llä). De quem? Genitivo: ${q.oikea}.`),
            selitys: oikeaLause,
            kirjaa: { avain: `sukupuu:kenen:${q.id}:${q.s}:${q.k}`, teksti: oikeaLause },
            puhu: () => T.jono(oikeaLause, 'kertoja'),
            valmis: ok => { if (ok) oikein++; jatka(); }
          });
          return;
        }
        // kuka / kuule: vastaus napauttamalla puun henkilöä
        const kuuntelu = q.laji === 'kuule';
        const kysymys = T.fi('p', q.kysymys, { class: 'peli-lause', hidden: kuuntelu ? true : null });
        const ohje = el('p', { class: 'kysymys' }, kuuntelu ? 'Ouça a pergunta e toque na pessoa certa na árvore.' : 'Toque na pessoa certa na árvore.', T.ohj(q.kysymys, 'kertoja', kuuntelu ? 'Ouvir a pergunta' : 'Ouvir'));
        const palaute = el('p', { class: 'palaute', 'aria-live': 'polite' });
        v.append(ohje, kysymys);
        let eka = true, valmis = false;
        let ohita = null;
        if (kuuntelu) {
          ohita = el('button', { type: 'button', class: 'pieni-nappi toissijainen pular-nappi' }, 'Pular');
          ohita.addEventListener('click', () => {
            if (valmis || !eka) return;
            valmis = true; ohitetut++;
            kysymys.hidden = false;
            palaute.className = 'palaute'; palaute.textContent = 'Pulado: não conta. Volte quando tiver som.';
            ohita.remove(); jatka();
          });
          v.append(ohita);
          T.soita(T.jono(q.kysymys, 'kertoja'));
        }
        v.append(palaute);
        vastaus = id => {
          if (valmis) return;
          const ok = id === q.id;
          napit[id].classList.add(ok ? 'oikein' : 'vaarin');
          T.tulos(v, ok, eka, { avain: `sukupuu:kuka:${q.id}:${q.s}:${q.k}`, teksti: oikeaLause });
          if (ok && eka) oikein++;
          eka = false;
          palaute.className = 'palaute ' + (ok ? 'ok' : 'ei');
          if (!ok) { palaute.textContent = `Ainda não: esse é o ${HENKILOT[id].nimi}. Procure: ${HENKILOT[q.k].nimi} → ${SUHDE_PT[q.s]}. Tente de novo.`; return; }
          valmis = true;
          kysymys.hidden = false;
          if (ohita) ohita.remove();
          palaute.replaceChildren('Certo! ', T.fi('span', oikeaLause));
          T.soita(T.jono(oikeaLause, 'kertoja'));
          jatka();
        };
      }
      function loppu() {
        const yhteensa = lista.length - ohitetut;
        const v = el('div', { class: 'peli-palkinto' }, T.avatar('purjo'));
        const purjo = T.fi('p', 'Hyvä! Nyt sinä tunnet perheen.', { class: 'peli-lause' });
        purjo.prepend(T.ohj('Hyvä! Nyt sinä tunnet perheen.', 'purjo'));
        purjo.append(T.kaannos('Muito bem! Agora você conhece a família.'));
        v.append(el('div', {}, el('p', { class: 'visa-tulos' }, yhteensa ? `${oikein} / ${yhteensa} de primeira. +3 🍊` : 'Rodada pulada: sem som, nada conta.'), purjo));
        const uusi = el('button', { type: 'button', class: 'visa-aloita' }, 'Nova rodada');
        uusi.addEventListener('click', aloitaHarjoitus);
        alue.append(v, uusi);
        nakyviin(v);
        if (yhteensa) T.valmis({ oikein, yhteensa });
      }
    }
  }

  /* ---------- yhteiset osat: apu (app.js) → työkalut ---------- */
  function tyokalut(apu, peli) {
    const el = apu.el;
    const f = n => (typeof apu[n] === 'function' ? apu[n] : null);
    const T = {
      el,
      voi() { try { return f('voiPuhua') ? !!apu.voiPuhua() : true; } catch (e) { return true; } },
      // Suomenkielinen teksti kuplineen. osat: merkkijono tai lista [teksti | { t, l }] (l = data-l, esim. pitää#3).
      fi(tag, osat, attrs) {
        const e = el(tag, Object.assign({ lang: KIELI }, attrs || {}));
        for (const o of [].concat(osat)) e.append(typeof o === 'string' ? o : el('span', { 'data-l': o.l }, o.t));
        try { if (f('glossaa')) apu.glossaa(e); } catch (x) { /* kupla ei saa kaataa peliä */ }
        return e;
      },
      kaannos: teksti => el('span', { class: 'kaannos', lang: 'pt-BR' }, teksti),
      jono(teksti, rooli, kohde) { const r = ROOLIT[rooli] || ROOLIT.kertoja; return [{ teksti, tyyppi: r.tyyppi, vaihto: r.vaihto, el: kohde || null }]; },
      soita(jono) { try { if (T.voi() && window.Aani) window.Aani.soita(jono); } catch (e) { /* ääni ei estä peliä */ } },
      ohj(teksti, rooli, nimi) {
        const o = apu.ohjain(() => T.jono(teksti, rooli), { aina: true, nimi: nimi || 'Ouvir', teksti: nimi && nimi !== 'Ouvir' ? nimi : '' });
        const b = o.querySelector ? o.querySelector('button') : null;
        if (b && f('toast')) b.addEventListener('click', () => { if (!T.voi()) { try { apu.toast(b); } catch (e) { /* ohita */ } } }, true);
        return o;
      },
      avatar(id) { const a = window.Kuvitus && window.Kuvitus.avatar ? window.Kuvitus.avatar(id, 'peli-kuva') : null; return a || el('span', { class: 'hahmokuva peli-kuva puhuja-paikka', 'aria-hidden': 'true' }); },
      ilmoitus() { try { return f('eiAantaIlmoitus') ? apu.eiAantaIlmoitus() : null; } catch (e) { return null; } },
      // Puhuja ja repliikki; puhe = Na rua -repliikki (data-rekisteri puhe), kirja = padrão-rivi alla.
      repliikki(rooli, osat, kirja, pt, puhe) {
        const r = el('div', { class: 'kassa-repliikki' + (puhe ? ' kassa-puhe' : '') });
        const lause = T.fi('p', osat, { class: 'peli-lause', 'data-rekisteri': puhe ? 'puhe' : null });
        lause.prepend(T.ohj(tekstiksi(osat), rooli));
        r.append(T.avatar(rooli === 'kassa' ? 'vendedora' : rooli), lause);
        if (kirja && tekstiksi(kirja) !== tekstiksi(osat)) r.append(T.fi('p', kirja, { class: 'kassa-kirja' }));
        if (pt) r.append(T.kaannos(pt));
        return r;
      },
      // Maian palkintosuklaa (omistaja 17.10.2026): täytteenä kirpeä marja, vadelma, mansikka tai raparperi; yksi pala
      // on purtu, ja täyte näkyy (tottakai.css .suklaa-palkinto[data-tayte]).
      suklaa(laji, tayte) {
        const s = el('span', { class: 'suklaa-palkinto', 'data-laji': laji, 'data-tayte': tayte || 'framboesa', role: 'img',
          'aria-label': `${laji === 'maito' ? 'chocolate ao leite' : 'chocolate branco'} recheado de ${tayte || 'framboesa'}` });
        for (let i = 0; i < 8; i++) s.append(el('span'));
        return s;
      },
      tayte: () => arpa(['framboesa', 'morango', 'ruibarbo']),
      kirjoitus() { try { const v = localStorage.getItem('tottakai-kirjoitustila'); return v === 'true' || v === '1'; } catch (e) { return false; } },   // JSON-totuusarvo; vanha '1' kelpaa
      // Kirjoitustila (Treenin kytkin, sama asetus): vastaus kirjoitetaan; ä = a ja ö = o hyväksytään.
      tilaKytkin() {
        const tila = el('label', { class: 'valintaruutu treeni-tila' }, el('input', { type: 'checkbox' }), ' ✍ Modo escrita (digitar a resposta; ä = a e ö = o são aceitos)');
        const ruutu = tila.querySelector('input');
        ruutu.checked = T.kirjoitus();
        ruutu.addEventListener('change', () => { try { localStorage.setItem('tottakai-kirjoitustila', ruutu.checked ? 'true' : 'false'); } catch (e) { /* ohita */ } });
        return tila;
      },
      // Tulos: ensimmäinen yritys ratkaisee mandariinin (passo:tulos) ja lokin; myöhempi oikea ei anna mitään.
      tulos(kohde, ok, eka, tieto) {
        if (eka) {
          const t = Object.assign({ lahde: 'peli', oppitunti: peli.oppitunti, oikein: ok, reitti: '#peli-' + peli.id }, tieto);
          try { if (f('kirjaaTulos')) apu.kirjaaTulos(t); else if (window.Tulokset) window.Tulokset.kirjaa(t); } catch (e) { /* loki ei estä peliä */ }
        }
        if (ok && eka) apu.ilmoitaTulos(kohde, 'oikein');
        else if (!ok) apu.ilmoitaTulos(kohde, 'vaarin');
      },
      valmis(tulos) { try { if (f('valmis')) apu.valmis(tulos); } catch (e) { /* ohita */ } },
      /* Monivalinta (tai kirjoitus) valmiiseen .valinta-korttiin v. o: { vaihtoehdot, oikea, hyvaksy?, miksi(x), selitys?,
         kirjaa, puhu() → jono, valmis(ekaOk), uudelleen (väärän jälkeen saa yrittää: Kassapaniikki), vaarin(), lisa (nappi),
         eiKirjoitusta }. Väärä vastaus: palaute nimeää virheen; ilman uudelleen-tilaa oikea näytetään ja peli jatkuu. */
      kysy(v, o) {
        const palaute = el('p', { class: 'palaute', 'aria-live': 'polite' });
        let eka = true, valmis = false;
        const loppuun = ok => { valmis = true; if (o.puhu) T.soita(o.puhu()); o.valmis(ok); };
        const vaarin = annettu => {
          if (o.vaarin) o.vaarin();
          const syy = o.miksi ? o.miksi(annettu) : '';
          palaute.className = 'palaute ei';
          palaute.textContent = o.uudelleen ? `Ainda não. ${syy} Tente de novo.` : `Ainda não. ${syy} Certo: ${o.oikea}`;
        };
        if (T.kirjoitus() && !o.eiKirjoitusta) {
          const syote = el('input', { type: 'text', class: 'aukko-syote treeni-syote', lang: KIELI, autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Resposta' });
          const tarkista = el('button', { type: 'button', class: 'pieni-nappi' }, 'Conferir');
          const tee = () => {
            if (valmis) return;
            const t = apu.arvioi(syote.value, o.hyvaksy || [o.oikea]);
            if (t === 'tyhja') return;
            const ok = apu.hyvaksytty(t);
            T.tulos(v, ok, eka, o.kirjaa);
            const olikoEka = eka; eka = false;
            if (!ok) { vaarin(syote.value.trim()); syote.disabled = true; tarkista.disabled = true; return loppuun(false); }
            palaute.className = 'palaute ok';
            palaute.textContent = `Certo! ${t === 'aksentti' ? `Com ä e ö: ${o.oikea}` : ''} ${o.selitys || ''}`.trim();
            syote.disabled = true; tarkista.disabled = true;
            loppuun(olikoEka);
          };
          tarkista.addEventListener('click', tee);
          syote.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); tee(); } });
          v.append(el('div', { class: 'treeni-kirjoitus' }, syote, tarkista), palaute);
          if (o.lisa) v.append(o.lisa);
          setTimeout(() => { try { syote.focus({ preventScroll: true }); } catch (e) { /* ohita */ } }, 0);
          return;
        }
        const valinnat = el('div', { class: 'vaihtoehdot' });
        for (const x of sekoita(o.vaihtoehdot)) {
          const b = el('button', { type: 'button', lang: KIELI }, x);
          b.addEventListener('click', () => {
            if (valmis || b.classList.contains('vaarin')) return;
            const ok = x === o.oikea;
            T.tulos(v, ok, eka, o.kirjaa);
            const olikoEka = eka; eka = false;
            b.classList.add(ok ? 'oikein' : 'vaarin');
            if (!ok) {
              vaarin(x);
              if (o.uudelleen) return;
              [...valinnat.children].forEach(y => { if (y.textContent === o.oikea) y.classList.add('oikein'); y.disabled = true; });
              return loppuun(false);
            }
            [...valinnat.children].forEach(y => { y.disabled = true; });
            palaute.className = 'palaute ok';
            palaute.textContent = `Certo! ${o.selitys || ''}`.trim();
            loppuun(olikoEka);
          });
          valinnat.append(b);
        }
        v.append(valinnat, palaute);
        if (o.lisa) v.append(o.lisa);
      }
    };
    return T;
  }

  // ==== t06: pelien funktiot (lisää tämän rivin perään) ====
  // ==== t07: pelien funktiot (lisää tämän rivin perään) ====
  // ==== t08: pelien funktiot (lisää tämän rivin perään) ====
  /* ========== Claees Oollshen (t08) ==========
     Purjon ostoslista Clas Ohlsonilla (Maia sanoo ”Claees Oollshen”). Kolme tuotetta, kustakin kolme väriä kolmessa
     paikassa: ostoskärryssä Maian ja Purjon luona (Maialle tämä), myyjän kädessä (kuulijan luona: se) ja kaukana
     hyllyssä (osoitetaan: tuo). Myyjä kysyy ”Tämä lamppu?” (omastaan) tai ”Se lamppu?” (kärryssä olevasta); Maia
     vastaa listan mukaan: Kyllä, se! / Ei sitä, tätä! / Ei sitä, tuota! tai Kyllä, tämä! / Ei tätä, sitä! / Ei tätä,
     tuota! Sama esine on yhdelle tämä ja toiselle se (oppitunti 8). Väärät vaihtoehdot eroavat yhdellä asialla (mikä
     paikka), palaute nimeää paikan (H1). Myyjä sanoo hinnan sadoissa euroissa sanoin; kassalla Yhteensä … euroa
     (300–1000 €, valitse tai kirjoita). Palkinto: Purjon suklaa. Äänet: myyjä mies 7, kassa nainen 5 (ROOLIT.kassa).
     Sanat: oppitunnit 0–8 (lamppu, tuoli, kello, värit, sadat: sanasto/t08.js, t01.js, gramatica.js). */
  // f = portugalin sana on feminiini (artikkeli, demonstratiivi ja värin muoto käännöksissä).
  const CO_TUOTTEET = [
    { id: 'lamppu', ikoni: '💡', pt: 'luminária', f: true },
    { id: 'tuoli', ikoni: '🪑', pt: 'cadeira', f: true },
    { id: 'kello', ikoni: '⏰', pt: 'relógio', f: false }
  ];
  // [suomeksi, portugaliksi feminiini, maskuliini, väri]
  const CO_VARIT = [['punainen', 'vermelha', 'vermelho', '#d62828'], ['sininen', 'azul', 'azul', '#2563eb'], ['keltainen', 'amarela', 'amarelo', '#f5c518'],
    ['vihreä', 'verde', 'verde', '#2e9d4a'], ['musta', 'preta', 'preto', '#1b1b1b'], ['valkoinen', 'branca', 'branco', '#ffffff'],
    ['harmaa', 'cinza', 'cinza', '#9aa0a6'], ['ruskea', 'marrom', 'marrom', '#8a5a2b'], ['vaaleanpunainen', 'rosa', 'rosa', '#f4a6c1']];
  const coVariPt = (v, t) => (t.f ? v[1] : v[2]);
  const CO_SADAT = ['', 'sata', 'kaksisataa', 'kolmesataa', 'neljäsataa', 'viisisataa', 'kuusisataa', 'seitsemänsataa', 'kahdeksansataa', 'yhdeksänsataa', 'tuhat'];
  const coEuroa = s => `${CO_SADAT[s / 100]} euroa`;
  // Paikat Maian (puhujan) näkökulmasta; pt = demonstratiivi portugaliksi [feminiini, maskuliini].
  const CO_PAIKAT = {
    karry: { pron: 'tämä', part: 'tätä', pt: ['esta', 'este'], ikoni: '🛒', nimi: 'O carrinho, com a Maia e a Purjo', selite: 'no carrinho, perto da Maia: tämä, tätä' },
    myyja: { pron: 'se', part: 'sitä', pt: ['essa', 'esse'], ikoni: '🙋', nimi: 'Na mão do vendedor', selite: 'na mão do vendedor, perto de quem ouve: se, sitä' },
    hylly: { pron: 'tuo', part: 'tuota', pt: ['aquela', 'aquele'], ikoni: '🗄️', nimi: 'Na prateleira, lá longe', selite: 'lá longe, na prateleira, e a Maia aponta: tuo, tuota' }
  };
  const CO_JARJ = ['karry', 'myyja', 'hylly'];
  const coPt = (paikka, t) => CO_PAIKAT[paikka].pt[t.f ? 0 : 1];
  // Maian vastaus: kysytty esine Maian sanoin (myyjän kädessä = se, kärryssä = tämä), sitten oikea paikka.
  function coVastaus(kysytty, oikea) {
    const k = CO_PAIKAT[kysytty];
    return oikea === kysytty ? `Kyllä, ${k.pron}!` : `Ei ${k.part}, ${CO_PAIKAT[oikea].part}!`;
  }
  function coVastausPt(kysytty, oikea, t) {
    return oikea === kysytty ? `Sim, ${coPt(kysytty, t)}!` : `${isolla(coPt(kysytty, t))} não, ${coPt(oikea, t)}!`;
  }
  function coKierros() {
    for (let y = 0; y < 200; y++) {
      const rivit = CO_TUOTTEET.map(t => {
        const varit = sekoita(CO_VARIT).slice(0, 3), paikat = sekoita(CO_JARJ);
        const versiot = varit.map((v, i) => ({ vari: v, paikka: paikat[i], hinta: 100 * (1 + Math.floor(Math.random() * 4)) }));
        return { t, versiot, haluttu: versiot[0], kysytty: Math.random() < 0.5 ? 'myyja' : 'karry' };
      });
      const summa = rivit.reduce((a, r) => a + r.haluttu.hinta, 0);
      if (summa >= 300 && summa <= 1000) return { rivit: sekoita(rivit), summa };
    }
    const r = CO_TUOTTEET.map((t, i) => {
      const versiot = CO_JARJ.map((p, j) => ({ vari: CO_VARIT[i * 3 + j], paikka: p, hinta: 200 }));
      return { t, versiot, haluttu: versiot[i], kysytty: 'myyja' };
    });
    return { rivit: r, summa: 600 };
  }
  const CO_ALKU = [
    { h: 'maia', osat: ['Purjo, tuolla on ', { pala: 'Claees Oollshen' }, '!'], puhu: 'Purjo, tuolla on Klaees Oollshen!', pt: 'Purjo, ali está a “Claees Oollshen”! (errado)' },
    { h: 'purjo', osat: ['Clas Ohlson, kulta.'], puhu: 'Clas Ohlson, kulta.', pt: 'Clas Ohlson, querida.' },
    { h: 'myyja', osat: ['Hei! Voinko auttaa?'], puhu: 'Hei! Voinko auttaa?', pt: 'Oi! Posso ajudar?' }
  ];
  const CO_LOPPU = { h: 'maia', osat: ['Hei hei, ', { pala: 'Claees Oollshen' }, '!'], puhu: 'Hei hei, Klaees Oollshen!', pt: 'Tchau, “Claees Oollshen”! (A Purjo desiste.)' };
  const CO_KIITOS = 'Kiitos, kulta! Tässä on suklaata.';

  function ajaClaees(paikka, T, apu) {
    const el = T.el;
    const juuri = el('div', { class: 'peli' });
    paikka.replaceChildren(juuri);
    // Myyjän ääni mies 7 (muut miehet; ROOLIT ei nimeä myyjää), muut roolit ROOLIT-taulusta.
    const jono = (teksti, rooli, kohde) => (rooli === 'myyja' ? [{ teksti, tyyppi: 'mies', vaihto: 7, el: kohde || null }] : T.jono(teksti, rooli, kohde));
    const ohj = (teksti, rooli) => {
      if (rooli !== 'myyja') return T.ohj(teksti, rooli);
      const o = apu.ohjain(() => jono(teksti, 'myyja'), { aina: true, nimi: 'Ouvir', teksti: '' });
      const b = o && o.querySelector ? o.querySelector('button') : null;
      if (b && typeof apu.toast === 'function') b.addEventListener('click', () => { if (!T.voi()) { try { apu.toast(b); } catch (e) { /* ohita */ } } }, true);
      return o;
    };
    const kasvo = rooli => T.avatar(rooli === 'myyja' ? 'ohlsonmyyja' : rooli === 'kassa' ? 'myyja2' : rooli);
    // Lause: ▶ + suomi yhtenä elementtinä (.peli-lause on flex: sanat eivät hajoa erilleen) + käännös.
    // osat = teksti tai { pala } (Maian virhe: ei kuplaa); glossataan sivun omalla tavalla.
    function lause(osat, rooli, puhu, pt) {
      const fi = el('span', { lang: KIELI });
      for (const o of [].concat(osat)) fi.append(typeof o === 'string' ? o : el('span', { class: 'pala' }, o.pala));
      try { if (typeof apu.glossaa === 'function') apu.glossaa(fi); } catch (e) { /* kupla ei saa kaataa peliä */ }
      return el('p', { class: 'peli-lause' }, ohj(puhu, rooli), fi, T.kaannos(pt));
    }
    const repliikki = r => el('div', { class: 'peli-asiakas' }, kasvo(r.h), lause(r.osat, r.h, r.puhu, r.pt));
    kierros();
    function kierros() {
      juuri.replaceChildren();
      const { rivit, summa } = coKierros();
      let kohta = 0, oikein = 0;
      juuri.append(el('p', {}, 'Domingo na Clas Ohlson (a Maia ainda diz “Claees Oollshen”). A Purjo escreveu a lista em finlandês. Cada coisa existe em três cores, em três lugares: 🛒 no carrinho, perto da Maia e da Purjo; 🙋 na mão do vendedor; 🗄️ na prateleira, lá longe. O vendedor pergunta; você responde pela Maia.'),
        el('p', { class: 'ohje' }, 'Para a Maia: perto dela = ', T.fi('span', 'tämä (tätä)'), '; perto de quem ouve, o vendedor = ', T.fi('span', 'se (sitä)'),
          '; lá longe, apontando = ', T.fi('span', 'tuo (tuota)'), '. Depois de ', T.fi('span', 'ei'), ', o partitivo: ', T.fi('span', 'Ei sitä, tuota!')));
      if (T.ilmoitus()) juuri.append(T.ilmoitus());
      juuri.append(T.tilaKytkin());
      CO_ALKU.forEach(r => juuri.append(repliikki(r)));
      T.soita(CO_ALKU.flatMap(r => jono(r.puhu, r.h)));
      // Purjon lista: rivi täydentyy hinnalla, kun tuote on valittu.
      const listaEl = el('ul', { class: 'peli-lista' });
      const listaRivit = rivit.map(r => { const li = T.fi('li', `${r.haluttu.vari[0]} ${r.t.id}`); listaEl.append(li); return li; });
      juuri.append(el('div', { class: 'kuitti-paperi co-lista' }, el('div', { class: 'kuitti-yla' }, el('b', {}, 'A lista da Purjo')), listaEl));
      const palkki = el('div', { class: 'peli-askeleet', 'aria-hidden': 'true' }, ...rivit.map(() => el('span')), el('span'));
      const alue = el('div', { class: 'peli' });
      juuri.append(palkki, alue);
      seuraava();
      function seuraava() {
        [...palkki.children].forEach((x, i) => { x.classList.toggle('tehty', i < kohta); x.classList.toggle('nyt', i === kohta); });
        alue.replaceChildren();
        if (kohta < rivit.length) askel(rivit[kohta]);
        else if (kohta === rivit.length) kassa();
        else loppu();
      }
      const jatko = v => {
        const b = el('button', { type: 'button', class: 'visa-seuraava' }, kohta < rivit.length - 1 ? 'Próximo da lista →' : 'Ao caixa →');
        b.addEventListener('click', () => { kohta++; seuraava(); });
        v.append(b);
        b.focus();
      };
      function askel(r) {
        const v = el('div', { class: 'valinta co-vuoro' });
        const kohtaus = el('div', { class: 'co-kohtaus' });
        for (const p of CO_JARJ) {
          const ver = r.versiot.find(x => x.paikka === p);
          const kuka = p === 'karry' ? el('span', { class: 'co-hahmot' }, kasvo('maia'), kasvo('purjo'))
            : p === 'myyja' ? el('span', { class: 'co-hahmot' }, kasvo('myyja')) : el('span', { class: 'co-hahmot co-kaukana', 'aria-hidden': 'true' }, '🗄️');
          const nayte = el('span', { class: 'co-nayte', 'aria-hidden': 'true' });
          nayte.style.setProperty('--vari', ver.vari[3]);
          // Korostus: esine, josta myyjä kysyy (hänen kädessään tai Maian kärryssä).
          kohtaus.append(el('div', { class: 'co-paikka co-' + p + (p === r.kysytty ? ' co-kysytty' : '') },
            el('p', { class: 'co-paikka-nimi' }, `${CO_PAIKAT[p].ikoni} ${CO_PAIKAT[p].nimi}`), kuka,
            el('div', { class: 'co-esine' }, el('span', { class: 'peli-ikoni', 'aria-hidden': 'true' }, r.t.ikoni), nayte,
              T.fi('span', `${ver.vari[0]} ${r.t.id}`, { class: 'co-nimi' }))));
        }
        const kysymys = `${r.kysytty === 'myyja' ? 'Tämä' : 'Se'} ${r.t.id}?`;
        const a = r.t.f ? 'a' : 'o';
        v.append(kohtaus, repliikki({ h: 'myyja', osat: [kysymys], puhu: kysymys,
          pt: r.kysytty === 'myyja' ? `${isolla(r.t.f ? 'esta' : 'este')} ${r.t.pt}? (${a} que está na mão dele)` : `${isolla(r.t.f ? 'essa' : 'esse')} ${r.t.pt}? (${a} que está no carrinho de vocês)` }),
        el('p', { class: 'kysymys' }, `Confira a lista da Purjo: qual é ${a} cert${a}, e onde está? O que a Maia responde?`));
        alue.append(v);
        nakyviin(v);
        T.soita(jono(kysymys, 'myyja'));
        const oikea = coVastaus(r.kysytty, r.haluttu.paikka);
        const hintaLause = `Se maksaa ${coEuroa(r.haluttu.hinta)}.`;
        T.kysy(v, {
          vaihtoehdot: CO_JARJ.map(x => coVastaus(r.kysytty, x)), oikea, hyvaksy: [oikea],
          miksi: () => `${isolla(a)} ${r.t.pt} ${coVariPt(r.haluttu.vari, r.t)} da lista está ${CO_PAIKAT[r.haluttu.paikka].selite}.`,
          selitys: `${oikea} = ${coVastausPt(r.kysytty, r.haluttu.paikka, r.t)}`,
          kirjaa: { avain: `claees-oollshen:${r.kysytty}:${r.haluttu.paikka}`, teksti: `${kysymys} → ${oikea}` },
          puhu: () => [...T.jono(oikea, 'maia'), ...jono(hintaLause, 'myyja')],
          valmis: ok => {
            if (ok) oikein++;
            v.append(repliikki({ h: 'myyja', osat: [hintaLause], puhu: hintaLause, pt: `Custa ${r.haluttu.hinta} euros.` }));
            listaRivit[kohta].append(' ✓ ', T.fi('span', coEuroa(r.haluttu.hinta)));
            jatko(v);
          }
        });
      }
      function kassa() {
        const v = el('div', { class: 'valinta' });
        v.append(el('div', { class: 'peli-asiakas' }, kasvo('kassa'), el('p', { class: 'kysymys' }, 'No caixa. Some os preços da lista: o que a caixa vai dizer?')));
        alue.append(v);
        nakyviin(v);
        const oikea = `Yhteensä ${coEuroa(summa)}.`;
        const muut = (summa >= 1000 ? [summa - 100, summa - 200] : summa <= 300 ? [summa + 100, summa + 200] : [summa - 100, summa + 100]);
        const hinnat = rivit.map(r => r.haluttu.hinta);
        T.kysy(v, {
          vaihtoehdot: [oikea, ...muut.map(s => `Yhteensä ${coEuroa(s)}.`)], oikea, hyvaksy: [oikea, coEuroa(summa), CO_SADAT[summa / 100]],
          miksi: () => `Some de novo: ${hinnat.join(' + ')} = ${summa} euros = ${coEuroa(summa)}.`,
          selitys: `${hinnat.join(' + ')} = ${summa} € = ${coEuroa(summa)}.`,
          kirjaa: { avain: `claees-oollshen:yhteensa:${summa}`, teksti: oikea },
          puhu: () => T.jono(oikea, 'kassa'),
          valmis: ok => { if (ok) oikein++; jatkoLoppuun(v); }
        });
      }
      function jatkoLoppuun(v) {
        const b = el('button', { type: 'button', class: 'visa-seuraava' }, 'Pagar e sair →');
        b.addEventListener('click', () => { kohta++; seuraava(); });
        v.append(b);
        b.focus();
      }
      function loppu() {
        const laji = arpa(['maito', 'valkoinen']);
        const tayte = T.tayte();
        const purjo = lause(CO_KIITOS, 'purjo', CO_KIITOS, 'Obrigada, querida! Aqui tem chocolate.');
        const v = el('div', { class: 'peli-palkinto' }, T.suklaa(laji, tayte),
          el('div', {}, el('p', { class: 'visa-tulos' }, `Compras feitas! ${oikein} / ${rivit.length + 1} de primeira. +3 🍊`),
            el('p', {}, `A Purjo paga e dá à Maia um chocolate ${laji === 'maito' ? 'ao leite' : 'branco'} recheado de ${tayte}. Azedinho, do jeito que ela gosta.`), purjo));
        alue.append(v, repliikki(CO_LOPPU));
        T.soita([...T.jono(CO_KIITOS, 'purjo'), ...jono(CO_LOPPU.puhu, 'maia')]);
        const uusi = el('button', { type: 'button', class: 'visa-aloita' }, 'Nova rodada');
        uusi.addEventListener('click', kierros);
        alue.append(uusi);
        nakyviin(v);
        T.valmis({ oikein, yhteensa: rivit.length + 1 });
      }
    }
  }
  // Äänitettävät repliikit (puheet(): PELIT-rivin puheet-kenttä → [[rooli, teksti]], rooli = ROOLIT-avain). Myyjä on
  // mies 7: ROOLIT-taulussa se on avaimella manaatti (sama ääni, roolinAvain → mies7).
  function claeesPuheet() {
    const u = [];
    const rooli = h => (h === 'myyja' ? 'manaatti' : h);
    for (const r of [...CO_ALKU, CO_LOPPU]) u.push([rooli(r.h), r.puhu]);
    for (const t of CO_TUOTTEET) u.push(['manaatti', `Tämä ${t.id}?`], ['manaatti', `Se ${t.id}?`]);
    for (let s = 100; s <= 400; s += 100) u.push(['manaatti', `Se maksaa ${coEuroa(s)}.`]);
    for (const k of ['myyja', 'karry']) for (const x of CO_JARJ) u.push(['maia', coVastaus(k, x)]);
    for (let s = 300; s <= 1000; s += 100) u.push(['kassa', `Yhteensä ${coEuroa(s)}.`]);
    u.push(['purjo', CO_KIITOS]);
    return u;
  }
  // ==== t09: pelien funktiot (lisää tämän rivin perään) ====
  /* ========== Matkalaukku (t09) ==========
     Perjantai-ilta Sörnäisissä: Maia pakkaa Jayn kanssa Brasilian kesään (oppitunti 9, osa B). Maia käskee (rooli maia,
     teksti näkyy kuplineen): ”Ota aurinkolasit!” tai ”Älä ota toppatakkia!”. Pelaaja napauttaa tavaraa ja sitten paikkaa
     (matkalaukku tai kaappi) tai raahaa tavaran paikalle. Kortissa tavaran nimi on monikossa (-t) tai yksikössä; käskyssä
     sama sana käskyn muodossa: Ota + perusmuoto tai monikko -t, Älä ota + partitiivi (monikossa monikon partitiivi, vain
     tunnistus: lição 11). Helsingissä on pakkasta lentokentälle asti, joten talvitavarakin voi lähteä mukaan: käskyn suunta
     (Ota / Älä ota) arvotaan, jotta se pitää kuulla. Väärä tavara tai väärä paikka: palaute nimeää virheen ja saa yrittää
     uudelleen; vain ensimmäinen yritys lasketaan (T.tulos). 8 käskyä kierroksella, lopuksi laukun ja kaapin sisältö. */
  const LAUKKU = [   // nimi = kortin muoto = Ota-käskyn objekti; ala = partitiivi Älä ota -käskyyn
    { id: 'aurinkolasit', nimi: 'aurinkolasit', ala: 'aurinkolaseja', ikoni: '🕶️', pt: 'os óculos de sol' },
    { id: 'sandaalit', nimi: 'sandaalit', ala: 'sandaaleja', ikoni: '👡', pt: 'as sandálias' },
    { id: 'paidat', nimi: 'paidat', ala: 'paitoja', ikoni: '👕', pt: 'as camisetas' },
    { id: 'uimapuku', nimi: 'uimapuku', ala: 'uimapukua', ikoni: '👙', pt: 'o maiô' },
    { id: 'sateenvarjo', nimi: 'sateenvarjo', ala: 'sateenvarjoa', ikoni: '☂️', pt: 'o guarda-chuva' },
    { id: 'aurinkovoide', nimi: 'aurinkovoide', ala: 'aurinkovoidetta', ikoni: '🧴', pt: 'o protetor solar' },
    { id: 'toppatakki', nimi: 'toppatakki', ala: 'toppatakkia', ikoni: '🧥', pt: 'o casaco de inverno' },
    { id: 'pipo', nimi: 'pipo', ala: 'pipoa', ikoni: '🧶', pt: 'o gorro de lã' },
    { id: 'hanskat', nimi: 'hanskat', ala: 'hanskoja', ikoni: '🧤', pt: 'as luvas' },
    { id: 'villasukat', nimi: 'villasukat', ala: 'villasukkia', ikoni: '🧦', pt: 'as meias de lã' },
    { id: 'huivi', nimi: 'huivi', ala: 'huivia', ikoni: '🧣', pt: 'o cachecol' },
    { id: 'talvikengat', nimi: 'talvikengät', ala: 'talvikenkiä', ikoni: '🥾', pt: 'as botas de inverno' }
  ];
  const LAUKKU_KIERROS = 8;
  const laukkuKasky = (t, ota) => (ota ? `Ota ${t.nimi}!` : `Älä ota ${t.ala}!`);
  const LAUKKU_VALMIS = 'Hyvä! Nyt matkalaukku on valmis.';
  const LAUKKU_ALUEET = {
    laukku: { fi: 'Matkalaukku', pt: 'vai para o Brasil', nappi: '🧳 Para a mala' },
    kaappi: { fi: 'Kaappi', pt: 'fica em casa', nappi: '🚪 Para o armário' }
  };
  // Äänitettävät repliikit (puheet()): jokaisen tavaran molemmat käskyt Maian äänellä ja lopun kehu.
  const laukkuPuheet = () => [...LAUKKU.flatMap(t => [['maia', laukkuKasky(t, true)], ['maia', laukkuKasky(t, false)]]), ['maia', LAUKKU_VALMIS]];

  function ajaMatkalaukku(paikka, T) {
    const el = T.el;
    const juuri = el('div', { class: 'peli' });
    paikka.replaceChildren(juuri);
    kierros();
    function kierros() {
      juuri.replaceChildren();
      juuri.append(el('p', { class: 'ohje' }, 'Sexta à noite em Sörnäinen. A Maia dá as ordens, e o Jay (você) arruma a mala para o verão brasileiro. Ouça a ordem, toque na coisa certa e depois na mala ou no armário, ou arraste a coisa até lá. ',
        T.fi('b', 'Ota'), ' = leve; ', T.fi('b', 'Älä ota'), ' = não leve. Em Helsinque faz frio até o aeroporto, então às vezes até o gorro vai junto: faça exatamente o que a Maia manda.'));
      if (T.ilmoitus()) juuri.append(T.ilmoitus());
      const suunnat = sekoita([true, true, true, true, false, false, false, false]);
      const lista = sekoita(LAUKKU).slice(0, LAUKKU_KIERROS).map((t, i) => ({ t, ota: suunnat[i] }));
      let kohta = 0, oikein = 0, valittu = null, eka = true, odottaa = false;
      const palkki = el('div', { class: 'peli-askeleet', 'aria-hidden': 'true' }, ...lista.map(() => el('span')));
      const v = el('div', { class: 'valinta' });
      const kasky = el('div', { class: 'laukku-kasky' });
      const palaute = el('p', { class: 'palaute', 'aria-live': 'polite' });
      const jatko = el('div', { class: 'laukku-jatko' });
      v.append(kasky, palaute, jatko);
      // Sänky: kaikki tavarat kortteina (ikoni ja nimi monikossa tai yksikössä).
      const sanky = el('div', { class: 'laukku-sanky', role: 'group', 'aria-label': 'As coisas em cima da cama' });
      const napit = {};
      for (const t of LAUKKU) {
        const b = el('button', { type: 'button', class: 'laukku-tavara', draggable: 'true', 'aria-pressed': 'false', 'aria-label': `${t.nimi} (${t.pt})` },
          el('span', { class: 'laukku-ikoni emoji', 'aria-hidden': 'true' }, t.ikoni), el('span', { class: 'laukku-nimi', lang: KIELI }, t.nimi));
        b.addEventListener('click', () => valitse(t.id));
        b.addEventListener('dragstart', e => {
          valitse(t.id);
          try { e.dataTransfer.setData('text/plain', t.id); e.dataTransfer.effectAllowed = 'move'; } catch (x) { /* vanha selain */ }
        });
        napit[t.id] = b;
        sanky.append(b);
      }
      // Paikat: matkalaukku ja kaappi. Napautus valitun tavaran jälkeen tai pudotus raahaamalla.
      const alueet = el('div', { class: 'laukku-alueet' });
      const sisallot = {};
      for (const [id, a] of Object.entries(LAUKKU_ALUEET)) {
        const sisalto = el('ul', { class: 'laukku-sisalto' });
        const nappi = el('button', { type: 'button', class: 'pieni-nappi' }, a.nappi);
        const alue = el('div', { class: 'laukku-alue', 'data-alue': id }, T.fi('b', a.fi, { class: 'laukku-otsikko' }), el('span', { class: 'ohje' }, a.pt), sisalto, nappi);
        nappi.addEventListener('click', () => laita(id));
        alue.addEventListener('dragover', e => { e.preventDefault(); alue.classList.add('laukku-yli'); });
        alue.addEventListener('dragleave', () => alue.classList.remove('laukku-yli'));
        alue.addEventListener('drop', e => {
          e.preventDefault();
          alue.classList.remove('laukku-yli');
          let tavara = null;
          try { tavara = e.dataTransfer.getData('text/plain'); } catch (x) { /* ohita */ }
          if (tavara && napit[tavara]) valitse(tavara);
          laita(id);
        });
        sisallot[id] = sisalto;
        alueet.append(alue);
      }
      juuri.append(palkki, v, sanky, alueet);
      seuraava();

      function valitse(id) {
        if (!odottaa || !napit[id] || napit[id].disabled) return;
        valittu = id;
        Object.entries(napit).forEach(([i, b]) => b.setAttribute('aria-pressed', String(i === id)));
      }
      function seuraava() {
        [...palkki.children].forEach((x, i) => { x.classList.toggle('tehty', i < kohta); x.classList.toggle('nyt', i === kohta); });
        jatko.replaceChildren();
        palaute.className = 'palaute';
        palaute.textContent = '';
        valittu = null; eka = true;
        Object.values(napit).forEach(b => { b.setAttribute('aria-pressed', 'false'); b.classList.remove('vaarin'); });
        if (kohta >= lista.length) return loppu();
        odottaa = true;
        const q = lista[kohta];
        const lause = laukkuKasky(q.t, q.ota);
        const rivi = T.fi('p', lause, { class: 'peli-lause' });
        rivi.prepend(T.ohj(lause, 'maia'));
        kasky.replaceChildren(T.avatar('maia'), el('div', {}, el('p', { class: 'kysymys' }, `Ordem ${kohta + 1} de ${lista.length}. A Maia diz:`), rivi));
        T.soita(T.jono(lause, 'maia'));
        nakyviin(v);
      }
      function laita(alue) {
        if (!odottaa) return;
        if (!valittu) {
          palaute.className = 'palaute ei';
          palaute.textContent = 'Primeiro toque numa coisa da cama (ou arraste a coisa até a mala ou o armário).';
          return;
        }
        const q = lista[kohta];
        const lause = laukkuKasky(q.t, q.ota);
        const okTavara = valittu === q.t.id;
        const ok = okTavara && alue === (q.ota ? 'laukku' : 'kaappi');
        T.tulos(v, ok, eka, { avain: `matkalaukku:${q.ota ? 'ota' : 'ala'}:${q.t.id}`, teksti: lause });
        if (ok && eka) oikein++;
        eka = false;
        if (!ok) {
          palaute.className = 'palaute ei';
          if (!okTavara) {
            const t2 = LAUKKU.find(x => x.id === valittu);
            napit[valittu].classList.add('vaarin');
            palaute.replaceChildren('Ainda não: ', T.fi('span', t2.nimi), ` = ${t2.pt}. A Maia falou de `, T.fi('span', q.ota ? q.t.nimi : q.t.ala),
              q.ota ? '. Procure de novo.' : ', o partitivo que vem depois de älä. Procure de novo.');
          } else {
            palaute.textContent = q.ota ? 'A coisa está certa, o lugar não: Ota = leve, vai para a mala. Tente de novo.'
              : 'A coisa está certa, o lugar não: Älä ota = não leve, fica no armário. Tente de novo.';
          }
          return;
        }
        odottaa = false;
        const b = napit[q.t.id];
        b.disabled = true;
        b.setAttribute('aria-pressed', 'false');
        sisallot[alue].append(T.fi('li', q.t.nimi));
        palaute.className = 'palaute ok';
        palaute.replaceChildren(`Certo! ${q.ota ? 'Vai para a mala' : 'Fica no armário'}: `, T.fi('span', q.t.nimi), ` (${q.t.pt}).`);
        const nappi = el('button', { type: 'button', class: 'visa-seuraava' }, kohta < lista.length - 1 ? 'Próxima ordem →' : 'Ver a mala pronta →');
        nappi.addEventListener('click', () => { kohta++; seuraava(); });
        jatko.append(nappi);
        try { nappi.focus({ preventScroll: true }); } catch (e) { /* ohita */ }
      }
      function loppu() {
        odottaa = false;
        kasky.replaceChildren();
        const maia = T.fi('p', LAUKKU_VALMIS, { class: 'peli-lause' });
        maia.prepend(T.ohj(LAUKKU_VALMIS, 'maia'));
        maia.append(T.kaannos('Muito bem! Agora a mala está pronta.'));
        const huomio = el('p', {}, 'Olhe a mala e o armário: o que são várias coisas termina em ', el('span', { class: 'fi pala' }, '-t'), ' (',
          T.fi('span', 'aurinkolasit, hanskat'), '); o que é uma coisa só fica na forma básica (', T.fi('span', 'pipo'), ').');
        const tulos = el('div', { class: 'peli-palkinto' }, T.avatar('maia'),
          el('div', {}, el('p', { class: 'visa-tulos' }, `Mala pronta! ${oikein} / ${lista.length} de primeira. +3 🍊`), huomio, maia));
        const uusi = el('button', { type: 'button', class: 'visa-aloita' }, 'Nova rodada');
        uusi.addEventListener('click', kierros);
        jatko.replaceChildren(tulos, uusi);
        palaute.textContent = '';
        T.soita(T.jono(LAUKKU_VALMIS, 'maia'));
        nakyviin(tulos);
        T.valmis({ oikein, yhteensa: lista.length });
      }
    }
  }
  // ==== t10: pelien funktiot (lisää tämän rivin perään) ====
  // ==== k02: pelien funktiot (lisää tämän rivin perään) ====
  // ==== t11: pelien funktiot (lisää tämän rivin perään) ====
  // ==== t12: pelien funktiot (lisää tämän rivin perään) ====
  /* ========== Feira Hippie (t12) ==========
     Sunnuntai Feira Hippiellä (Avenida Afonso Pena): Maia on kahvilassa, ja Jay (pelaaja) palvelee suomalaisia turisteja
     Uunoa ja Eenokia Maian pöydän ääressä (oppitunti 12, osa B). Pöydällä kuusi tuotetta: väri tai koko + esine, hinta
     realeina. Kierroksella seitsemän vuoroa, joissa asiakas puhuu (ääni ja teksti kuplineen) ja pelaaja valitsee tai
     kirjoittaa Jayn vastauksesta puuttuvan objektin:
       1) Mitä te myytte? → Myymme ___. (yleisesti: monikon partitiivi)   2) Tuo on kaunis! Otan sen. → Laitan ___ pussiin. (-n)
       3) Minä otan nuo kaksi. → kaksi ___ (luvun jälkeen partitiivi)       4) … en ota sitä. → Selvä, et ota ___. (kielto)
       5) Nämä ovat hienoja! Otan ne kaikki. → Laitan ___ pussiin. (-t)    6) Missä Eenok on? → Hän katsoo ___. (katsoa)
       7) Paljonko kaikki maksaa yhteensä? → Yhteensä ___. (sadat sanoin)
     Väärät vaihtoehdot ovat saman ilmauksen muita muotoja (yksi ero: sija tai luku), palaute nimeää virheen (H1). Ostot
     arvotaan yhdistelmistä, joissa jokainen hinta ja summa on leksikon lukusana (FH_YHDISTELMAT: summa täysi sata).
     Äänet: Uuno ja Eenok mies 7 (ROOLIT.manaatti, sama rooli kuin Claees-pelin myyjä; ROOLIT-taulussa ei ole mies 8:aa,
     joka on Eenokin ääni oppitunnin sivulla), Jay ja Maia omillaan. Sanat: oppitunnit 0–12 (kuppi, kulho, maljakko t12; real t11). Palkinto: Maian suklaa. */
  // f = portugalin sana on feminiini (dois/duas). Muodot kirjoitettu auki (kuten Matkalaukku), jotta puheet() ei tarvitse leksikkoa.
  const FH_TUOTTEET = [
    { id: 'kuppi', ikoni: '☕', vari: '#2563eb', hinta: 30, f: true, nom: 'sininen kuppi', gen: 'sinisen kupin', part: 'sinistä kuppia', mnom: 'siniset kupit', mpart: 'sinisiä kuppeja', pt: 'a xícara azul', ptm: 'xícaras azuis' },
    { id: 'kulho', ikoni: '🥣', vari: '#f5c518', hinta: 40, f: true, nom: 'keltainen kulho', gen: 'keltaisen kulhon', part: 'keltaista kulhoa', mnom: 'keltaiset kulhot', mpart: 'keltaisia kulhoja', pt: 'a tigela amarela', ptm: 'tigelas amarelas' },
    { id: 'lautanen', ikoni: '🍽️', vari: '#ffffff', hinta: 20, f: false, nom: 'valkoinen lautanen', gen: 'valkoisen lautasen', part: 'valkoista lautasta', mnom: 'valkoiset lautaset', mpart: 'valkoisia lautasia', pt: 'o prato branco', ptm: 'pratos brancos' },
    { id: 'maljakko', ikoni: '🏺', vari: '#2e9d4a', hinta: 60, f: false, nom: 'vihreä maljakko', gen: 'vihreän maljakon', part: 'vihreää maljakkoa', mnom: 'vihreät maljakot', mpart: 'vihreitä maljakoita', pt: 'o vaso verde', ptm: 'vasos verdes' },
    { id: 'possu', ikoni: '🐷', vari: '#f4a6c1', hinta: 50, f: false, nom: 'vaaleanpunainen possu', gen: 'vaaleanpunaisen possun', part: 'vaaleanpunaista possua', mnom: 'vaaleanpunaiset possut', mpart: 'vaaleanpunaisia possuja', pt: 'o porquinho cor-de-rosa', ptm: 'porquinhos cor-de-rosa' },
    { id: 'taulu', ikoni: '🖼️', vari: '#8a5a2b', hinta: 200, f: false, nom: 'pieni taulu', gen: 'pienen taulun', part: 'pientä taulua', mnom: 'pienet taulut', mpart: 'pieniä tauluja', pt: 'o quadro pequeno', ptm: 'quadros pequenos' }
  ];
  const FH_LUVUT = { 10: 'kymmenen', 20: 'kaksikymmentä', 30: 'kolmekymmentä', 40: 'neljäkymmentä', 50: 'viisikymmentä', 60: 'kuusikymmentä',
    70: 'seitsemänkymmentä', 80: 'kahdeksankymmentä', 90: 'yhdeksänkymmentä', 100: 'sata', 200: 'kaksisataa', 300: 'kolmesataa',
    400: 'neljäsataa', 500: 'viisisataa', 600: 'kuusisataa', 700: 'seitsemänsataa', 800: 'kahdeksansataa', 900: 'yhdeksänsataa', 1000: 'tuhat' };
  const fhRealia = n => `${FH_LUVUT[n]} realia`;
  // Sallitut ostot: vuoro 2 (yksi), 3 (kaksi) ja 5 (kolme), eri tuotteet; jokainen hinta ja summa on lukusana.
  const FH_YHDISTELMAT = (() => {
    const u = [];
    for (const a of FH_TUOTTEET) for (const b of FH_TUOTTEET) for (const c of FH_TUOTTEET) {
      if (a === b || a === c || b === c) continue;
      const summa = a.hinta + 2 * b.hinta + 3 * c.hinta;
      if (FH_LUVUT[2 * b.hinta] && FH_LUVUT[3 * c.hinta] && summa % 100 === 0 && FH_LUVUT[summa]) u.push({ yksi: a, kaksi: b, kolme: c, summa });
    }
    return u;
  })();
  const FH_MUOTO = { nom: 'forma básica (sujeito, ou depois de uma ordem)', gen: '-n: uma coisa inteira', part: 'partitivo singular',
    mnom: 'plural -t: várias coisas inteiras, todas aquelas', mpart: 'partitivo plural: algumas, em geral' };
  const FH_ALKU = [{ h: 'uuno', t: 'Hei, Jay! Tässä me olemme. Missä Maia on?', pt: 'Oi, Jay! Aqui estamos. Cadê a Maia?' },
    { h: 'jay', t: 'Kahvilassa. Nyt minä olen myyjä!', pt: 'No café. Agora quem vende sou eu!' }];
  const FH_LOPPU = [{ h: 'uuno', t: 'Kiitos, Jay! Hyvää joulua!', pt: 'Obrigado, Jay! Feliz Natal!' },
    { h: 'jay', t: 'Kiitos, samoin!', pt: 'Obrigado, igualmente!' },
    { h: 'maia', t: 'Jay, sinä olet hyvä myyjä!', pt: 'Jay, você é um bom vendedor!' }];
  const FH_ROOLI = { uuno: 'manaatti', eenok: 'manaatti', jay: 'jay', maia: 'maia' };
  const FH_KYSYMYS = 'Paljonko kaikki maksaa yhteensä?';
  // Pussin rivi kirjakielellä: yksi = perusmuoto, kaksi ja kolme = luku + partitiivi.
  const fhPussiin = (x, n) => (n === 1 ? x.nom : `${luku(n)} ${x.part}`);
  // Vuorot: h = asiakas, t = asiakkaan repliikki, x = tuote, maara = korostettu määrä pöydällä, solu = oikea muoto, muut =
  // väärät muodot, ennen/jalkeen = Jayn repliikki aukon ympärillä (merkkijono tai { t, l }), osto = ostettu määrä.
  function fhVuorot(y) {
    const vapaat = sekoita(FH_TUOTTEET);
    const yleinen = arpa(FH_TUOTTEET);
    // Uuno jättää ja Eenok katsoo tuotteita, joita kukaan ei osta (kuudesta tuotteesta kolme jää ostamatta).
    const ostetut = [y.yksi, y.kaksi, y.kolme];
    const muut = vapaat.filter(x => !ostetut.includes(x));
    const eiOta = muut[0] || vapaat[0];
    const katsoo = muut[1] || vapaat[1];
    return [
      { h: 'eenok', t: 'Mitä te myytte?', pt: 'O que vocês vendem?', x: yleinen, maara: 0, solu: 'mpart', muut: ['mnom', 'gen'],
        saanto: 'em geral, uma quantidade: partitivo plural', ennen: ['Myymme '], jalkeen: ['. Ne ovat Maian.'],
        ptJay: `Vendemos ${yleinen.ptm}. São da Maia.`, osoitus: `O Eenok olha a banca inteira. O Jay fala de ${yleinen.ptm} em geral.` },
      { h: 'uuno', t: 'Tuo on kaunis! Otan sen.', pt: y.yksi.f ? 'Aquela é linda! Vou levar.' : 'Aquele é lindo! Vou levar.', x: y.yksi, maara: 1, osto: 1, solu: 'gen', muut: ['part', 'nom'],
        saanto: 'o Uuno leva uma coisa inteira: -n', ennen: ['Kiitos! Laitan '], jalkeen: [' pussiin. Se maksaa ', fhRealia(y.yksi.hinta), '.'],
        ptJay: `Obrigado! Ponho ${y.yksi.pt} na sacola. Custa ${y.yksi.hinta} reais.`, osoitus: `O Uuno aponta para ${y.yksi.pt}.` },
      { h: 'eenok', t: 'Minä otan nuo kaksi.', pt: y.kaksi.f ? 'Eu levo aquelas duas.' : 'Eu levo aqueles dois.', x: y.kaksi, maara: 2, osto: 2, solu: 'part', muut: ['gen', 'mnom'],
        saanto: 'depois de 2, 3, 4…: partitivo singular', ennen: ['Selvä: kaksi '], jalkeen: ['. Ne maksavat ', fhRealia(2 * y.kaksi.hinta), '.'],
        ptJay: `Certo: ${y.kaksi.f ? 'duas' : 'dois'} ${y.kaksi.ptm}. Custam ${2 * y.kaksi.hinta} reais.`, osoitus: `O Eenok aponta para ${y.kaksi.f ? 'duas' : 'dois'}: ${y.kaksi.ptm}.` },
      { h: 'uuno', t: 'Tämä on kaunis, mutta en ota sitä.', pt: 'Isto é lindo, mas não vou levar.', x: eiOta, maara: 1, solu: 'part', muut: ['gen', 'nom'],
        saanto: 'negação: sempre partitivo', ennen: ['Selvä, et ota '], jalkeen: ['.'],
        ptJay: `Tudo bem, você não leva ${eiOta.pt}.`, osoitus: `O Uuno pega ${eiOta.pt} e põe de volta na banca.` },
      { h: 'eenok', t: 'Nämä ovat hienoja! Otan ne kaikki.', pt: 'Estes são ótimos! Levo todos.', x: y.kolme, maara: 3, osto: 3, solu: 'mnom', muut: ['mpart', 'gen'],
        saanto: 'o Eenok leva todas aquelas coisas, inteiras: plural -t', ennen: [{ t: 'Hienoa', l: 'hieno#2' }, '! Laitan '],
        jalkeen: [' pussiin. Ne maksavat ', fhRealia(3 * y.kolme.hinta), '.'],
        ptJay: `Ótimo! Ponho ${y.kolme.f ? 'as' : 'os'} ${y.kolme.ptm} na sacola. Custam ${3 * y.kolme.hinta} reais.`, osoitus: `O Eenok aponta para os três: ${y.kolme.ptm}.` },
      { h: 'uuno', t: 'Missä Eenok on?', pt: 'Cadê o Eenok?', x: katsoo, maara: 1, solu: 'part', muut: ['gen', 'nom'],
        saanto: 'katsoa (olhar) quase sempre pede partitivo', ennen: ['Tuolla. Hän katsoo '], jalkeen: ['.'],
        ptJay: `Ali. Ele está olhando ${katsoo.pt}.`, osoitus: `O Eenok está na ponta da banca, olhando ${katsoo.pt}.` }
    ];
  }
  // Äänitettävät repliikit (puheet()): asiakkaiden repliikit, Jayn kaikki mahdolliset oikeat vastaukset, summat ja loppu.
  function feiraPuheet() {
    const u = [];
    const jay = (v, x) => [...v.ennen, x[v.solu], ...v.jalkeen].map(o => (typeof o === 'string' ? o : o.t)).join('');
    for (const r of [...FH_ALKU, ...FH_LOPPU]) u.push([FH_ROOLI[r.h], r.t]);
    const nahty = new Set();
    for (const y of FH_YHDISTELMAT) {
      const vuorot = fhVuorot(y);
      vuorot.forEach((v, i) => {
        if (!nahty.has('asiakas' + i)) { nahty.add('asiakas' + i); u.push([FH_ROOLI[v.h], v.t]); }
        // Vuorot 1, 4 ja 6: mikä tahansa tuote; 2, 3 ja 5: tuote yhdistelmästä.
        for (const x of v.osto ? [v.x] : FH_TUOTTEET) { const t = jay(Object.assign({}, v, { x }), x); if (!nahty.has(t)) { nahty.add(t); u.push(['jay', t]); } }
      });
      const s = `Yhteensä ${fhRealia(y.summa)}.`;
      if (!nahty.has(s)) { nahty.add(s); u.push(['jay', s]); }
    }
    u.push([FH_ROOLI.uuno, FH_KYSYMYS]);
    return u;
  }

  function ajaFeira(paikka, T, apu) {
    const el = T.el;
    const juuri = el('div', { class: 'peli' });
    paikka.replaceChildren(juuri);
    const jono = (teksti, h, kohde) => T.jono(teksti, FH_ROOLI[h] || 'kertoja', kohde);
    // Repliikki: kasvot + ▶ + suomi kuplineen + käännös (kuten Claees Oollshen).
    function repliikki(h, osat, pt) {
      const teksti = tekstiksi(osat);
      const lause = T.fi('p', osat, { class: 'peli-lause' });
      const o = apu.ohjain(() => jono(teksti, h), { aina: true, nimi: 'Ouvir', teksti: '' });
      const b = o && o.querySelector ? o.querySelector('button') : null;
      if (b && typeof apu.toast === 'function') b.addEventListener('click', () => { if (!T.voi()) { try { apu.toast(b); } catch (e) { /* ohita */ } } }, true);
      lause.prepend(o);
      return el('div', { class: 'peli-asiakas fh-repliikki' }, T.avatar(h), el('div', {}, lause, T.kaannos(pt)));
    }
    kierros();
    function kierros() {
      juuri.replaceChildren();
      const y = FH_YHDISTELMAT.length ? arpa(FH_YHDISTELMAT) : null;
      if (!y) { juuri.append(el('p', { class: 'ohje' }, 'A banca ainda está vazia.')); return; }
      const vuorot = fhVuorot(y);
      let kohta = 0, oikein = 0;
      juuri.append(el('p', { class: 'ohje' }, 'Domingo na Feira Hippie. A Maia foi buscar café, e o Jay (você) fica na banca. O Uuno e o Eenok, os turistas finlandeses do avião, querem comprar. Escolha a forma certa do objeto no que o Jay diz: ',
        el('b', { class: 'fi pala' }, '-n'), ' (uma coisa inteira), ', el('b', { class: 'fi pala' }, '-t'), ' (várias, todas) ou o partitivo (parte, em geral, negação, número, ', T.fi('span', 'katsoa'), '). No fim, diga o total em reais.'));
      if (T.ilmoitus()) juuri.append(T.ilmoitus());
      juuri.append(T.tilaKytkin());
      // Pöytä: kuusi tuotetta kortteina (ikoni, värinäyte, nimi suomeksi, hinta).
      const poyta = el('div', { class: 'fh-poyta', role: 'group', 'aria-label': 'A banca da Maia' });
      const kortit = new Map();
      for (const x of FH_TUOTTEET) {
        const nayte = el('span', { class: 'fh-nayte', 'aria-hidden': 'true' });
        nayte.style.setProperty('--vari', x.vari);
        const maara = el('span', { class: 'fh-maara', 'aria-hidden': 'true' });
        const kortti = el('div', { class: 'fh-tuote' }, el('span', { class: 'peli-ikoni emoji', 'aria-hidden': 'true' }, x.ikoni), nayte,
          T.fi('span', x.nom, { class: 'fh-nimi' }), el('span', { class: 'fh-hinta' }, `R$ ${x.hinta}`), maara);
        kortit.set(x, { kortti, maara });
        poyta.append(kortti);
      }
      // Korostus: x = tuote (n = määrä, merkki × 2 / × 3), tai koko pöytä (kaikki = true), tai ei mitään.
      const korosta = (x, n, kaikki) => {
        for (const [t, k] of kortit) { k.kortti.classList.toggle('fh-nyt', !!kaikki || t === x); k.maara.textContent = t === x && n > 1 ? `× ${n}` : ''; }
      };
      // Pussi: ostetut tuotteet ja hinnat.
      const pussiLista = el('ul', { class: 'fh-pussi-lista' });
      const pussi = el('div', { class: 'fh-pussi' }, el('b', {}, '🛍️ A sacola do Uuno e do Eenok'), pussiLista);
      const palkki = el('div', { class: 'peli-askeleet', 'aria-hidden': 'true' }, ...vuorot.map(() => el('span')), el('span'));
      const alue = el('div', { class: 'peli' });
      juuri.append(...FH_ALKU.map(r => repliikki(r.h, r.t, r.pt)), poyta, pussi, palkki, alue);
      T.soita(FH_ALKU.flatMap(r => jono(r.t, r.h)));
      seuraava();
      function seuraava() {
        [...palkki.children].forEach((x, i) => { x.classList.toggle('tehty', i < kohta); x.classList.toggle('nyt', i === kohta); });
        alue.replaceChildren();
        if (kohta < vuorot.length) vuoro(vuorot[kohta]);
        else if (kohta === vuorot.length) kassa();
        else loppu();
      }
      const jatko = (v, teksti) => {
        const b = el('button', { type: 'button', class: 'visa-seuraava' }, teksti);
        b.addEventListener('click', () => { kohta++; seuraava(); });
        v.append(b);
        try { b.focus({ preventScroll: true }); } catch (e) { /* ohita */ }
      };
      function vuoro(q) {
        if (q.maara) korosta(q.x, q.maara); else korosta(null, 0, true);
        const v = el('div', { class: 'valinta fh-vuoro' });
        const oikea = q.x[q.solu];
        const kokonainen = [...q.ennen, oikea, ...q.jalkeen];
        const aukolla = [...q.ennen, '___', ...q.jalkeen];
        v.append(repliikki(q.h, q.t, q.pt), el('p', { class: 'ohje' }, q.osoitus),
          el('div', { class: 'peli-asiakas' }, T.avatar('jay'), el('div', {}, el('p', { class: 'kysymys' }, `Vez ${kohta + 1} de ${vuorot.length}. O que o Jay diz?`),
            T.fi('p', aukolla, { class: 'peli-lause fh-aukko' }))));
        alue.append(v);
        nakyviin(v);
        T.soita(jono(q.t, q.h));
        const muut = q.muut.map(s => q.x[s]).filter(m => m && m !== oikea);
        const miksi = {};
        q.muut.forEach(s => { miksi[q.x[s]] = `${q.x[s]} = ${FH_MUOTO[s]}; aqui, ${q.saanto}.`; });
        T.kysy(v, {
          vaihtoehdot: [oikea, ...muut], oikea, hyvaksy: [oikea],
          miksi: x => miksi[x] || `Aqui, ${q.saanto}.`,
          selitys: `${oikea}: ${q.saanto}.`,
          kirjaa: { avain: `feira-hippie:${q.solu}:${q.x.id}`, teksti: tekstiksi(kokonainen) },
          puhu: () => jono(tekstiksi(kokonainen), 'jay'),
          valmis: ok => {
            if (ok) oikein++;
            v.append(repliikki('jay', kokonainen, q.ptJay));
            if (q.osto) {
              const hinta = q.osto * q.x.hinta;
              const li = T.fi('li', fhPussiin(q.x, q.osto));
              li.append(' ', el('span', { class: 'fh-hinta', lang: 'pt-BR' }, `R$ ${hinta}`));
              pussiLista.append(li);
            }
            jatko(v, kohta < vuorot.length - 1 ? 'Próximo cliente →' : 'Ao total →');
          }
        });
      }
      function kassa() {
        korosta(null, 0);
        const v = el('div', { class: 'valinta fh-vuoro' });
        const kysymys = FH_KYSYMYS;
        const ostot = [[y.yksi, 1], [y.kaksi, 2], [y.kolme, 3]];
        const laskettu = ostot.map(([x, n]) => n * x.hinta);
        v.append(repliikki('uuno', kysymys, 'Quanto custa tudo junto?'),
          el('p', { class: 'kysymys' }, `Some a sacola: ${laskettu.join(' + ')} = ? O que o Jay diz?`));
        alue.append(v);
        nakyviin(v);
        T.soita(jono(kysymys, 'uuno'));
        const s = y.summa;
        const oikea = `Yhteensä ${fhRealia(s)}.`;
        const kymmenet = s / 10;   // sama luku, väärä suuruus: kaksisataa ↔ kaksikymmentä
        const naapuri = FH_LUVUT[s + 100] ? s + 100 : s - 100;
        const vaarat = [kymmenet, naapuri].filter(n => FH_LUVUT[n]).map(n => `Yhteensä ${fhRealia(n)}.`);
        T.kysy(v, {
          vaihtoehdot: [oikea, ...vaarat], oikea, hyvaksy: [oikea, fhRealia(s), `Yhteensä ${fhRealia(s)}`],
          miksi: x => (x === `Yhteensä ${fhRealia(kymmenet)}.` ? `${fhRealia(kymmenet)} = ${kymmenet} reais: -kymmentä são as dezenas; as centenas terminam em -sataa.`
            : `Some de novo: ${laskettu.join(' + ')} = ${s} reais.`),
          selitys: `${laskettu.join(' + ')} = ${s} reais = ${fhRealia(s)}.`,
          kirjaa: { avain: `feira-hippie:yhteensa:${s}`, teksti: oikea },
          puhu: () => jono(oikea, 'jay'),
          valmis: ok => { if (ok) oikein++; jatko(v, 'Fechar a venda →'); }
        });
      }
      function loppu() {
        korosta(null, 0);
        const laji = arpa(['maito', 'valkoinen']);
        const tayte = T.tayte();
        const v = el('div', { class: 'peli-palkinto' }, T.suklaa(laji, tayte),
          el('div', {}, el('p', { class: 'visa-tulos' }, `Venda feita! ${oikein} / ${vuorot.length + 1} de primeira. +3 🍊`),
            el('p', {}, `A Maia volta do café, vê a sacola cheia e dá ao Jay um chocolate ${laji === 'maito' ? 'ao leite' : 'branco'} recheado de ${tayte}.`)));
        alue.append(v, ...FH_LOPPU.map(r => repliikki(r.h, r.t, r.pt)));
        T.soita(FH_LOPPU.flatMap(r => jono(r.t, r.h)));
        const uusi = el('button', { type: 'button', class: 'visa-aloita' }, 'Nova rodada');
        uusi.addEventListener('click', kierros);
        alue.append(uusi);
        nakyviin(v);
        T.valmis({ oikein, yhteensa: vuorot.length + 1 });
      }
    }
  }
  // ==== t13: pelien funktiot (lisää tämän rivin perään) ====
  // ==== t14: pelien funktiot (lisää tämän rivin perään) ====
  // ==== t15: pelien funktiot (lisää tämän rivin perään) ====
  // ==== k03: pelien funktiot (lisää tämän rivin perään) ====
  // ==== t16: pelien funktiot (lisää tämän rivin perään) ====
  // ==== t17: pelien funktiot (lisää tämän rivin perään) ====
  // ==== t18: pelien funktiot (lisää tämän rivin perään) ====
  // ==== t19: pelien funktiot (lisää tämän rivin perään) ====
  // ==== t20: pelien funktiot (lisää tämän rivin perään) ====
  // ==== k04: pelien funktiot (lisää tämän rivin perään) ====

  /* ---------- rekisteri ---------- */
  const PELIT = [
    { id: 'tokki-manni', oppitunti: 't03', osa: 'b', treeni: ['t03-hinnat', 'aihe-luvut'], nimi: 'Tokki-Manni', ikoni: '🛒', aja: ajaTokkiManni,
      kuvaus: 'A lista do Jay e 20 euros: encha a cesta, diga o total em finlandês e peça chocolate com o que sobrar.' },
    { id: 'kassapaniikki', oppitunti: 't03', osa: 'b', treeni: ['tilanne-kassa'], nimi: 'Kassapaniikki', ikoni: '🧾', aja: ajaKassa,
      kuvaus: 'O autoatendimento está fora de serviço. A Maia vai ao caixa, e a fila atrás dela suspira. Tela cheia, língua da rua.' },
    // ikoniSvg (AV-028): piirretty kuvake otsakkeeseen ja aloituskorttiin emojin tilalle, kun app.js osaa sen (ikoni = varakuvake).
    { id: 'esburger', oppitunti: 't04', osa: 'a', treeni: ['t04-tilaus', 'tilanne-lounas'], nimi: '’Esburger', ikoni: '🍔', ikoniSvg: HAMPURILAINEN_SVG, aja: ajaEsburger, paikka: 'hesburger-kassa',
      kuvaus: 'O quiosque favorito do Capivara e do Peixe-boi: monte os pedidos e peça com educação, com o partitivo depois dos números.' },
    { id: 'sukupuu', oppitunti: 't05', osa: 'b', treeni: ['t05-genetiivi', 't05-perhe'], nimi: 'Sukupuu', ikoni: '🌳', aja: ajaSukupuu, paikka: 'hameentie-marraskuu',
      kuvaus: 'A árvore das famílias do Jay e da Maia: toque numa pessoa para saber quem ela é e responda “de quem?” com o genitivo.' },
    // ==== t06: PELIT-rivit (pilkku rivin perään) ====
    // ==== t07: PELIT-rivit (pilkku rivin perään) ====
    // ==== t08: PELIT-rivit (pilkku rivin perään) ====
    { id: 'claees-oollshen', oppitunti: 't08', osa: 'b', treeni: ['t08-tamatuo', 't08-sadat'], nimi: 'Claees Oollshen', ikoni: '💡', aja: ajaClaees, paikka: 'hameentie-marraskuu',
      puheet: claeesPuheet,
      kuvaus: 'A lista da Purjo na Clas Ohlson: o vendedor mostra, a Maia responde com este, esse ou aquele, e no caixa vem o total em centenas de euros.' },
    // ==== t09: PELIT-rivit (pilkku rivin perään) ====
    { id: 'matkalaukku', oppitunti: 't09', osa: 'b', treeni: ['t09-kasky', 't09-monikko'], nimi: 'Matkalaukku', ikoni: '🧳', aja: ajaMatkalaukku, paikka: 'sornainen-kurvi',
      puheet: laukkuPuheet, kuvaus: 'A Maia manda, o Jay arruma: ouça a ordem (Ota…! Älä ota…!), ache a coisa e ponha na mala ou no armário.' },
    // ==== t10: PELIT-rivit (pilkku rivin perään) ====
    // ==== k02: PELIT-rivit (pilkku rivin perään) ====
    // ==== t11: PELIT-rivit (pilkku rivin perään) ====
    // ==== t12: PELIT-rivit (pilkku rivin perään) ====
    { id: 'feira-hippie', oppitunti: 't12', osa: 'b', treeni: ['t12-objekti', 't12-kongruenssi'], nimi: 'Feira Hippie', ikoni: '🏺', aja: ajaFeira, paikka: 'festa-rua',
      puheet: feiraPuheet, kuvaus: 'Domingo na Feira Hippie: a Maia foi buscar café, e o Jay atende o Uuno e o Eenok em finlandês. O objeto inteiro (-n, -t) ou o partitivo, e o total em reais.' },
    // ==== t13: PELIT-rivit (pilkku rivin perään) ====
    // ==== t14: PELIT-rivit (pilkku rivin perään) ====
    // ==== t15: PELIT-rivit (pilkku rivin perään) ====
    // ==== k03: PELIT-rivit (pilkku rivin perään) ====
    // ==== t16: PELIT-rivit (pilkku rivin perään) ====
    // ==== t17: PELIT-rivit (pilkku rivin perään) ====
    // ==== t18: PELIT-rivit (pilkku rivin perään) ====
    // ==== t19: PELIT-rivit (pilkku rivin perään) ====
    // ==== t20: PELIT-rivit (pilkku rivin perään) ====
    // ==== k04: PELIT-rivit (pilkku rivin perään) ====
  ];
  const hae = id => PELIT.find(p => p.id === id) || null;
  const oppitunnin = id => PELIT.filter(p => p.oppitunti === id);
  function aja(peli, paikka, apu) {
    const T = tyokalut(apu, peli);
    peli.aja(paikka, T, apu, peli);
  }

  /* Äänitettävät repliikit (tottakai/tools/poimi_aanet.js): [{ oppitunti, rooli, teksti }], rooli = aanet_roolit.json:n
     avain (kertoja, nainen0, nainen4, nainen5, mies0, mies6, mies7). Kaikki pelin mahdolliset repliikit luetellaan. */
  function puheet() {
    const ulos = [];
    const lisaa = (o, rooli, teksti) => ulos.push({ oppitunti: o, rooli: roolinAvain(rooli), teksti });
    // Tokki-Manni: kokonaishinnat (kaikki mahdolliset summat) ja Maian suklaatilaukset.
    const summat = new Set();
    const kaikki = (i, s) => { if (i === HYLLY.length) { if (s >= 600 && s <= BUDJETTI - SUKLAA) summat.add(s); return; } for (let n = 0; n <= HYLLY[i].max; n++) kaikki(i + 1, s + n * HYLLY[i].hinta); };
    kaikki(0, 0);
    [...summat].sort((a, b) => a - b).forEach(s => lisaa('t03', 'kassa', `Yhteensä ${hintaSanoin(s)}.`));
    for (let n = 1; n <= Math.floor((BUDJETTI - 600) / SUKLAA); n++) lisaa('t03', 'maia', suklaaFraasi(n));
    lisaa('t03', 'maia', SUKLAA_REPLIIKKI);
    // Kassapaniikki: kassan repliikit, kirjakieliset asut (Anteeksi, en ymmärrä) ja Maian vastaukset.
    for (const a of [...KASSA_PERUS, ...Object.values(KASSA_YLLATYKSET)]) {
      lisaa('t03', 'kassa', tekstiksi(a.kassa));
      if (a.kirja) lisaa('t03', 'kassa', tekstiksi(a.kirja));
      for (const v of a.tilanteet ? a.tilanteet.map(t => t.vastaus) : [a.vastaus]) lisaa('t03', 'maia', v);
    }
    lisaa('t03', 'maia', KASSA_APU);
    lisaa('t03', 'maia', 'Voi ei!');
    // ’Esburger: asiakkaiden tilaukset ja oikeat tilaukset.
    TILAUKSET.forEach(t => lisaa('t04', t.h, t.t));
    SANO.forEach(t => lisaa('t04', 'kertoja', t.oikea));
    // Sukupuu: kysymykset, kuvaukset ja Purjon kehu.
    lisaa('t05', 'kertoja', 'Kuka hän on?');
    for (const [id, h] of Object.entries(HENKILOT)) {
      const vastaukset = [`Hän on ${h.nimi}.`, ...kuvaukset(id).map(x => x.fi)].join(' ');
      lisaa('t05', 'kertoja', vastaukset);
      lisaa('t05', 'kertoja', `Kuka hän on? ${vastaukset}`);
    }
    const { kenen, kuka } = sukuKysymykset();
    for (const q of kenen) { lisaa('t05', 'kertoja', q.kysymys); lisaa('t05', 'kertoja', `${HENKILOT[q.id].nimi} on ${HENKILOT[q.k].gen} ${q.s}.`); }
    for (const q of kuka) { lisaa('t05', 'kertoja', q.kysymys); lisaa('t05', 'kertoja', `${HENKILOT[q.k].gen} ${q.s} on ${HENKILOT[q.id].nimi}.`); }
    lisaa('t05', 'purjo', 'Hyvä! Nyt sinä tunnet perheen.');
    // Oppituntien 6– pelit: PELIT-rivin puheet() → [[rooli, teksti]] (t09 Matkalaukku; muut voivat käyttää samaa kenttää).
    for (const p of PELIT) if (typeof p.puheet === 'function') for (const [rooli, teksti] of p.puheet()) lisaa(p.oppitunti, rooli, teksti);
    const nahty = new Set();
    return ulos.filter(p => { const k = p.oppitunti + '|' + p.rooli + '|' + p.teksti; if (nahty.has(k)) return false; nahty.add(k); return true; });
  }

  window.Pelit = { pelit: PELIT, hae, oppitunnin, aja, puheet, luku, hintaSanoin };
})();
