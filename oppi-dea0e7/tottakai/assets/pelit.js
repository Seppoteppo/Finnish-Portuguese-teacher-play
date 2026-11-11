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
    const puhuja = h => (h === 'myyja' ? 'ohlsonmyyja' : undefined);   // myyjä = t08:n Clas Ohlsonin myyjä (oma ääni)
    for (const r of [...CO_ALKU, CO_LOPPU]) u.push([rooli(r.h), r.puhu, puhuja(r.h)]);
    for (const t of CO_TUOTTEET) u.push(['manaatti', `Tämä ${t.id}?`, 'ohlsonmyyja'], ['manaatti', `Se ${t.id}?`, 'ohlsonmyyja']);
    for (let s = 100; s <= 400; s += 100) u.push(['manaatti', `Se maksaa ${coEuroa(s)}.`, 'ohlsonmyyja']);
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
     Maanantai-ilta 21.12., joulumyyjäiset Feira Hippien paikalla (Avenida Afonso Pena): Maia hakee kokista kahvilasta, ja Jay (pelaaja) palvelee suomalaisia turisteja
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
    for (const r of [...FH_ALKU, ...FH_LOPPU]) u.push([FH_ROOLI[r.h], r.t, r.h]);
    const nahty = new Set();
    for (const y of FH_YHDISTELMAT) {
      const vuorot = fhVuorot(y);
      vuorot.forEach((v, i) => {
        if (!nahty.has('asiakas' + i)) { nahty.add('asiakas' + i); u.push([FH_ROOLI[v.h], v.t, v.h]); }
        // Vuorot 1, 4 ja 6: mikä tahansa tuote; 2, 3 ja 5: tuote yhdistelmästä.
        for (const x of v.osto ? [v.x] : FH_TUOTTEET) { const t = jay(Object.assign({}, v, { x }), x); if (!nahty.has(t)) { nahty.add(t); u.push(['jay', t]); } }
      });
      const s = `Yhteensä ${fhRealia(y.summa)}.`;
      if (!nahty.has(s)) { nahty.add(s); u.push(['jay', s]); }
    }
    u.push([FH_ROOLI.uuno, FH_KYSYMYS, 'uuno']);
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
      juuri.append(el('p', { class: 'ohje' }, 'Segunda-feira à noite, na feira de Natal da Avenida Afonso Pena. A Maia foi buscar uma Coca, e o Jay (você) fica na banca. O Uuno e o Eenok, os turistas finlandeses do avião, querem comprar. Escolha a forma certa do objeto no que o Jay diz: ',
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
            el('p', {}, `A Maia volta com a Coca, vê a sacola cheia e dá ao Jay um chocolate ${laji === 'maito' ? 'ao leite' : 'branco'} recheado de ${tayte}.`)));
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

  /* ---------- Korttikuvat (omistaja 10.11.2026: ”This needs some bigger photo or image. Just draw something yourself,
     like dialog picture sized.” ja ”Add a dialogue sized image to all games if they dont have anything.”) ----------
     Pelin aloituskortin piirros (PELIT-rivin korttikuva → app.js peliKortti → .peli-kortti-kuva), tarinakuvien tyyliin
     ja kokoon (assets/tarinakuvat/*.svg: viewBox 160 × 160, tasaiset värit, hahmo = vartalo + pää; hahmojen värit samat
     kuin tarinakuvissa). Kuvassa ei ole suomenkielistä tekstiä; kyltissä on vain pelin oma nimi. ’Esburgerilla on
     omistajan valokuva kortin yläpuolella (t04.js figure.kuva), joten sillä ei ole piirrosta. Sukupuun muotokuvat tulevat
     Kuvitus.muotokuva()-piirtäjästä (assets/hahmot.js, assets/oppaat.js). */
  let kkLaskuri = 0;
  const KK_HAHMOT = {
    maia: { iho: '#E0AC80', hius: '#4E342E', hiusV: '#7B5446', tukka: 'pitka', paita: '#00897B', paitaV: '#26A69A' },
    jay: { iho: '#F2C9AC', hius: '#A97C50', hiusV: '#C9A27E', tukka: 'lyhyt', paita: '#3949AB', paitaV: '#5C6BC0' },
    purjo: { iho: '#F5CBA7', hius: '#CFD8DC', hiusV: '#F5F7F8', tukka: 'nuttura', paita: '#C2185B', paitaV: '#E35A8F', lasit: true },
    kassa: { iho: '#EFCDB4', hius: '#B8875A', hiusV: '#D4A77A', tukka: 'polkka', paita: '#C8322F', paitaV: '#E0574F', lasit: true },
    myyja: { iho: '#E2B48C', hius: '#1A1A1A', hiusV: '#4A4A4A', tukka: 'lyhyt', paita: '#3D6B4F', paitaV: '#558B6E', lasit: true },
    uuno: { iho: '#F3D6C2', hius: '#F0E532', hiusV: '#FFF59D', tukka: 'lyhyt', paita: '#009FE0', paitaV: '#4FC3F7', kaulus: '#1F2FE0', tummat: true },
    eenok: { iho: '#F3D6C2', hius: '#F0E532', hiusV: '#FFF59D', tukka: 'polkka', paita: '#009FE0', paitaV: '#4FC3F7', kaulus: '#1F2FE0', tummat: true },
    jono1: { iho: '#D7A27C', hius: '#212121', hiusV: '#424242', tukka: 'lyhyt', paita: '#546E7A', paitaV: '#78909C' },
    jono2: { iho: '#F1CBB0', hius: '#E0C068', hiusV: '#F0D890', tukka: 'polkka', paita: '#8D6E63', paitaV: '#A1887F' },
    jono3: { iho: '#8D5B3E', hius: '#1C1C1C', hiusV: '#3A3A3A', tukka: 'lyhyt', paita: '#6A1B9A', paitaV: '#8E24AA' }
  };
  const KK_TAKA = {
    pitka: h => `<path d="M-9.4 0C-10 -12 9 -12 9.4 0L11 18C6 20 -6 20 -11 18Z" fill="${h.hius}"/>`,
    polkka: h => `<path d="M-10 0C-10 -12 10 -12 10 0V8C7 9.4 -7 9.4 -10 8Z" fill="${h.hius}"/>`,
    nuttura: h => `<circle cx="0" cy="-10" r="4.2" fill="${h.hius}"/>`,
    lyhyt: () => ''
  };
  const KK_ETU = {
    pitka: h => `<path d="M-8.6 -1C-8.4 -9.4 8.4 -9.4 8.6 -1C5 -5.2 -5 -5.2 -8.6 -1Z" fill="${h.hius}"/><path d="M-5.4 -6.4C-2.6 -8 2.6 -8 5.4 -6.4C2.4 -6.8 -2 -6.6 -5 -5Z" fill="${h.hiusV}"/>`,
    lyhyt: h => `<path d="M-9.2 -1C-9.6 -11 9.6 -11 9.2 -1C6 -6 -6 -6 -9.2 -1Z" fill="${h.hius}"/><path d="M-6 -6.6C-3 -8.4 3 -8.4 6 -6.6C2.6 -7.2 -2.6 -7 -5.6 -5Z" fill="${h.hiusV}"/>`,
    polkka: h => `<path d="M-9.8 -0.5C-10.2 -11.4 10.2 -11.4 9.8 -0.5C8 -5 3 -6.4 0 -6.4C-3 -6.4 -8 -5 -9.8 -0.5Z" fill="${h.hius}"/><path d="M-6 -6.8C-3 -8.6 3 -8.6 6 -6.8C2.6 -7.4 -2.6 -7.2 -5.6 -5.4Z" fill="${h.hiusV}"/>`,
    nuttura: h => `<path d="M-9.4 -1C-10 -10 10 -10 9.4 -1C6.4 -6 -6.4 -6 -9.4 -1Z" fill="${h.hius}"/><path d="M-6.3 -5.8C-3.6 -7.6 1.8 -7.8 5.4 -6.5C1.8 -6.7 -2.7 -6.1 -5.8 -4.3Z" fill="${h.hiusV}"/>`
  };
  const KK_SUU = {
    hymy: '<path d="M-2.4 4.4Q0 6.2 2.4 4.4" fill="none" stroke="#8D3B2E" stroke-width="1.1" stroke-linecap="round"/>',
    auki: '<path d="M-3.6 3.8Q0 3.8 3.6 3.8Q0 9.8 -3.6 3.8Z" fill="#B23A2A"/>',
    huoli: '<path d="M-2.4 6Q0 4.2 2.4 6" fill="none" stroke="#8D3B2E" stroke-width="1.1" stroke-linecap="round"/>',
    o: '<ellipse cx="0" cy="5.2" rx="1.6" ry="2" fill="#B23A2A"/>',
    suora: '<path d="M-2.4 5.2H2.4" fill="none" stroke="#8D3B2E" stroke-width="1.1" stroke-linecap="round"/>'
  };
  const KK_KULMAT = { huoli: 'M-5.2 -3L-1.8 -4.4M5.2 -3L1.8 -4.4', vihainen: 'M-5.2 -4.6L-1.8 -3M5.2 -4.6L1.8 -3' };
  /* Hahmo tarinakuvien tapaan: pää keskellä (0, 0), r 9; vartalo alaspäin (kuvan alareuna leikkaa sen). x, y = pään paikka,
     s = koko. o.suu (KK_SUU), o.kulmat (KK_KULMAT), o.selin = takaapäin, o.kadet = [[x, y], …] käden paikka hahmon omassa
     koordinaatistossa (olka ±10, 20; kolmas luku = olan x), o.esine = SVG käden alle (hahmon koordinaatistossa). */
  function kkHahmo(x, y, s, h, o = {}) {
    const vartalo = `<path d="M-14 80V24C-14 16 -8 12 0 12C8 12 14 16 14 24V80Z" fill="${h.paita}"/>` +
      `<path d="M-14 80V24C-14 16 -8 12 0 12C-5 14 -9 18 -9 26V80Z" fill="${h.paitaV}"/>` +
      (h.kaulus ? `<path d="M-5 12.8L0 19.5L5 12.8Z" fill="#FFFFFF"/><path d="M-5 12.8L0 19.5L5 12.8" fill="none" stroke="${h.kaulus}" stroke-width="1.6"/>` : '');
    const olka = (kx, ox) => (ox !== undefined ? ox : kx < 0 ? -10 : 10);   // kolmas luku = olan x (kädet ristissä)
    const kadet = (o.kadet || []).map(([kx, ky, ox]) => `<path d="M${olka(kx, ox)} 20L${kx} ${ky}" fill="none" stroke="rgba(0,0,0,.28)" stroke-width="5.6" stroke-linecap="round"/>` +
      `<path d="M${olka(kx, ox)} 20L${kx} ${ky}" fill="none" stroke="${h.paita}" stroke-width="4.4" stroke-linecap="round"/>`).join('');
    const kammenet = (o.kadet || []).map(([kx, ky]) => `<circle cx="${kx}" cy="${ky}" r="2.7" fill="${h.iho}"/>`).join('');
    let paa;
    if (o.selin) {
      paa = `<circle cx="-9" cy="1" r="2.2" fill="${h.iho}"/><circle cx="9" cy="1" r="2.2" fill="${h.iho}"/>` +
        `<path d="M-9 0C-9 -12 9 -12 9 0C9 4 7 8 4 9H-4C-7 8 -9 4 -9 0Z" fill="${h.hius}"/>` +
        (h.tukka === 'pitka' ? `<path d="M-9 0L-10.6 18C-5 20 5 20 10.6 18L9 0Z" fill="${h.hius}"/>` : '') +
        `<path d="M-6 -6C-4 -10 2 -10 5 -7C1 -7.6 -3 -7 -6 -4Z" fill="${h.hiusV}"/>`;
    } else {
      paa = `<circle cx="0" cy="0" r="9" fill="${h.iho}"/>` + (KK_ETU[h.tukka] || KK_ETU.lyhyt)(h) +
        '<path d="M-4.1 0a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0M1.9 0a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0" fill="#3E2723"/>' +
        (o.kulmat ? `<path d="${KK_KULMAT[o.kulmat]}" fill="none" stroke="${h.hius === '#F0E532' ? '#B8A21E' : h.hius}" stroke-width="1" stroke-linecap="round"/>` : '') +
        (KK_SUU[o.suu] || KK_SUU.hymy) +
        (h.lasit ? '<g fill="none" stroke="#37474F" stroke-width=".8"><circle cx="-3" cy="0" r="2.5"/><circle cx="3" cy="0" r="2.5"/><path d="M-.5 0H.5M-5.5 -.4L-8.6 -1.4M5.5 -.4L8.6 -1.4"/></g>' : '') +
        (h.tummat ? '<path d="M-6.6 -1.8H-.8V1.2C-.8 2.6 -2 3.2 -3.7 3.2C-5.6 3.2 -6.6 2.4 -6.6 1Z M.8 -1.8H6.6V1C6.6 2.4 5.6 3.2 3.7 3.2C2 3.2 .8 2.6 .8 1.2Z" fill="#111111"/>' +
          '<path d="M-.8 -1.2H.8M-6.6 -1.4L-8.8 -2.4M6.6 -1.4L8.8 -2.4" fill="none" stroke="#111111" stroke-width=".8"/><path d="M-5.4 -.8L-3.6 .8M2 -.8L3.8 .8" stroke="#FFFFFF" stroke-width=".6" opacity=".5"/>' : '');
    }
    return `<g transform="translate(${x} ${y}) scale(${s})">${(KK_TAKA[h.tukka] || KK_TAKA.lyhyt)(h)}${vartalo}${kadet}${o.esine || ''}${kammenet}${paa}</g>`;
  }
  // SVG-kehys: neliö, kuten tarinakuva; role="img" ja portugalinkielinen kuvaus (ruudunlukija), liukuvärit omilla tunnuksillaan.
  function kkSvg(kuvaus, liukuvarit, sisus) {
    const n = ++kkLaskuri;
    const defs = liukuvarit.map(([a, b], i) => `<linearGradient id="kk${n}g${i + 1}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`).join('');
    const svg = `<svg viewBox="0 0 160 160" width="320" height="320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${kuvaus}" focusable="false"><defs>${defs}</defs>${typeof sisus === 'function' ? sisus(i => `url(#kk${n}g${i})`, n) : sisus}</svg>`;
    return svg;
  }
  const kkTeksti = (x, y, koko, vari, teksti) => `<text x="${x}" y="${y}" font-family="Trebuchet MS, Verdana, Arial, sans-serif" font-size="${koko}" font-weight="700" text-anchor="middle" fill="${vari}">${teksti}</text>`;
  const kkHinta = (x, y, teksti) => `<rect x="${x}" y="${y}" width="16" height="7.4" rx="1" fill="#FFEB3B" stroke="#F57F17" stroke-width=".5"/>` + kkTeksti(x + 8, y + 5.6, 5.4, '#C62828', teksti);

  // Tokki-Manni: halpakaupan hylly hintalappuineen (kahvi 4,90, pulla 2,00, leipä 3,50, juusto 2,40, kassi 0,50, suklaa 2,10);
  // Maia korin ja Jayn ostoslistan kanssa, Jay osoittaa hyllyä.
  function kuvaTokkiManni() {
    return kkSvg('Desenho: no supermercado Tokki-Manni, a Maia segura a cesta e a lista de compras do Jay, e o Jay aponta a prateleira com café, pães doces, pão, queijo, sacolas e chocolate, cada um com a etiqueta de preço.',
      [['#FFF8E1', '#FFE0B2'], ['#ECEFF1', '#CFD8DC']], g => [
        `<rect width="160" height="160" fill="${g(1)}"/>`,
        '<rect x="0" y="0" width="160" height="21" fill="#00796B"/><rect x="0" y="21" width="160" height="3" fill="#FBC02D"/>',
        kkTeksti(80, 15, 11.5, '#FFFFFF', 'Tokki-Manni'),
        '<path d="M100 28h22v2h-22ZM132 28h22v2h-22Z" fill="#FFFFFF" opacity=".8"/>',
        // hylly
        '<rect x="4" y="30" width="88" height="100" fill="#D7CCC8"/><rect x="4" y="30" width="88" height="3" fill="#A1887F"/>',
        '<path d="M4 56h88v3H4ZM4 84h88v3H4ZM4 112h88v3H4Z" fill="#8D6E63"/>',
        // ylähylly: kahvipaketit ja leivät
        [8, 19, 30, 41].map(x => `<rect x="${x}" y="38" width="10" height="18" rx="1" fill="#6D4C41"/><rect x="${x}" y="44" width="10" height="5" fill="#E65100"/><circle cx="${x + 5}" cy="46.5" r="1.4" fill="#FFE0B2"/>`).join(''),
        '<path d="M56 56C55 46 70 44 72 52C73 56 70 56 70 56ZM70 56C69 46 84 44 86 52C87 56 84 56 84 56Z" fill="#B9773A"/>',
        '<path d="M60 50l2 -3M64 49l2 -3M74 50l2 -3M78 49l2 -3" fill="none" stroke="#F0C987" stroke-width="1" stroke-linecap="round"/>',
        // keskihylly: pullat ja juustot
        [14, 25, 36].map(x => `<ellipse cx="${x}" cy="80" rx="5.2" ry="4.2" fill="#D99A4E"/><path d="M${x - 2} 78.4h1M${x + 1} 77.6h1M${x} 80h1" stroke="#FFFFFF" stroke-width="1"/>`).join(''),
        '<path d="M52 84L52 74L68 70L68 84Z" fill="#FBC02D"/><path d="M52 74L68 70L66 69L50 73Z" fill="#FFE082"/><circle cx="57" cy="79" r="1.4" fill="#F9A825"/><circle cx="63" cy="76" r="1" fill="#F9A825"/>',
        '<path d="M70 84L70 74L86 70L86 84Z" fill="#FBC02D"/><path d="M70 74L86 70L84 69L68 73Z" fill="#FFE082"/><circle cx="76" cy="80" r="1.2" fill="#F9A825"/>',
        // alahylly: kassit ja suklaa
        '<path d="M8 112V98H22V112ZM24 112V98H38V112Z" fill="#E8EAF6"/><path d="M11 98C11 92 19 92 19 98M27 98C27 92 35 92 35 98" fill="none" stroke="#7986CB" stroke-width="1.2"/>',
        [104, 107.5].map(y => `<rect x="50" y="${y}" width="36" height="3.6" rx=".6" fill="#4527A0"/>`).join('') + '<rect x="50" y="100.5" width="36" height="3.6" rx=".6" fill="#5E35B1"/>',
        // hintalaput
        kkHinta(12, 60, '4,90'), kkHinta(62, 60, '3,50'), kkHinta(16, 88, '2,00'), kkHinta(60, 88, '2,40'), kkHinta(14, 116, '0,50'), kkHinta(60, 116, '2,10'),
        // lattia
        `<rect x="0" y="130" width="160" height="30" fill="${g(2)}"/><rect x="0" y="130" width="160" height="1.6" fill="#FFFFFF"/>`,
        // Jay osoittaa hyllyä, Maia korin ja listan kanssa
        kkHahmo(102, 92, 1.08, KK_HAHMOT.jay, { suu: 'hymy', kadet: [[-22, 4]] }),
        kkHahmo(132, 86, 1.22, KK_HAHMOT.maia, {
          suu: 'auki', kadet: [[-6, 30], [15, 44]],
          esine: '<g transform="rotate(-8 -12 24)"><rect x="-19" y="14" width="13" height="17" rx="1" fill="#FFFFFF"/><path d="M-17 18h9M-17 21h8M-17 24h9M-17 27h6" stroke="#64B5F6" stroke-width=".8"/></g>' +
            '<path d="M6 46C6 36 24 36 24 46" fill="none" stroke="#B71C1C" stroke-width="1.6"/>' +
            '<path d="M8 44C9 38 16 38 17 44Z" fill="#D99A4E"/><rect x="17" y="37" width="6" height="9" fill="#6D4C41"/>' +
            '<path d="M3 46H27L24 62H6Z" fill="#E53935"/><path d="M5 51H25M6 56H25M11 46V62M17 46V62M22 46V62" stroke="#B71C1C" stroke-width=".7"/>'
        })
      ].join(''));
  }

  // Kassapaniikki: itsepalvelukassa epäkunnossa (punainen kieltomerkki), Maia hätääntyneenä kassan edessä, kassa puhuu
  // nopeasti, jono huokailee takana, ja jonon kärsivällisyysmittari on melkein tyhjä.
  function kuvaKassapaniikki() {
    return kkSvg('Desenho: o caixa de autoatendimento está com uma placa de proibido, a Maia está nervosa e suando diante da caixa, que fala depressa atrás do caixa, e a fila atrás da Maia suspira e cruza os braços.',
      [['#E3F2FD', '#BBDEFB'], ['#ECEFF1', '#B0BEC5']], g => [
        `<rect width="160" height="160" fill="${g(1)}"/>`,
        // kärsivällisyysmittari
        '<rect x="40" y="5" width="80" height="11" rx="5.5" fill="#FFFFFF" opacity=".85"/>',
        Array.from({ length: 10 }, (_, i) => `<rect x="${45 + i * 7.2}" y="7.5" width="5.6" height="6" rx="1" fill="${i < 3 ? '#E53935' : '#CFD8DC'}"/>`).join(''),
        // itsepalvelukassa ja kieltomerkki
        '<rect x="54" y="28" width="30" height="66" rx="3" fill="#90A4AE"/><rect x="58" y="32" width="22" height="16" rx="1.5" fill="#37474F"/>',
        '<path d="M60 34L78 46" stroke="#546E7A" stroke-width="1"/><rect x="58" y="74" width="22" height="4" fill="#78909C"/>',
        '<path d="M62 40L60 56M76 40L78 56" stroke="#FFFFFF" stroke-width=".7"/><circle cx="69" cy="61" r="8" fill="#FFFFFF"/><circle cx="69" cy="61" r="6.6" fill="#D32F2F"/><rect x="64.4" y="59.6" width="9.2" height="2.8" fill="#FFFFFF"/>',
        // lattia
        `<rect x="0" y="122" width="160" height="38" fill="${g(2)}"/><rect x="0" y="122" width="160" height="1.4" fill="#FFFFFF"/>`,
        // kassa tiskin takana
        kkHahmo(140, 62, 1.12, KK_HAHMOT.kassa, { suu: 'auki', kadet: [[-14, 30]] }),
        '<path d="M124 52l-6 -3M123 59h-7M124 66l-6 3" fill="none" stroke="#1565C0" stroke-width="1.4" stroke-linecap="round"/>',
        // tiski, liukuhihna ja kassakone
        '<rect x="92" y="100" width="68" height="60" fill="#78909C"/><rect x="92" y="100" width="68" height="3" fill="#B0BEC5"/>',
        '<rect x="92" y="94" width="44" height="6" fill="#37474F"/><path d="M98 94v6M106 94v6M114 94v6M122 94v6M130 94v6" stroke="#455A64" stroke-width="1"/>',
        '<rect x="100" y="82" width="9" height="12" rx="1" fill="#6D4C41"/><rect x="100" y="86" width="9" height="4" fill="#E65100"/><rect x="113" y="89" width="16" height="5" rx=".8" fill="#4527A0"/>',
        '<rect x="138" y="80" width="20" height="16" rx="2" fill="#455A64"/><rect x="141" y="83" width="14" height="5" fill="#81D4FA"/><rect x="136" y="94" width="24" height="6" fill="#546E7A"/>',
        // jono: vihaiset kasvot, kädet ristissä, huokaus
        kkHahmo(10, 90, 1.02, KK_HAHMOT.jono3, { suu: 'suora', kulmat: 'vihainen' }),
        kkHahmo(32, 96, 1.08, KK_HAHMOT.jono2, { suu: 'suora', kulmat: 'vihainen', kadet: [[-9, 31, 10], [9, 33, -10]] }),
        '<g fill="#FFFFFF" stroke="#90A4AE" stroke-width=".6"><circle cx="46" cy="96" r="3"/><circle cx="51" cy="93" r="2.2"/><circle cx="55" cy="90.6" r="1.5"/></g>',
        '<g fill="#FFFFFF" stroke="#90A4AE" stroke-width=".6"><circle cx="22" cy="90" r="2.6"/><circle cx="26" cy="87" r="1.8"/></g>',
        // Maia: käsi päässä, hikipisarat
        kkHahmo(74, 104, 1.24, KK_HAHMOT.maia, { suu: 'o', kulmat: 'huoli', kadet: [[-12, -2], [14, 40]],
          esine: '<rect x="11" y="38" width="9" height="7" rx="1.5" fill="#F06292"/><circle cx="18" cy="41.5" r=".9" fill="#FCE4EC"/>' }),
        '<path d="M88 92C88 89 90.5 86 90.5 86C90.5 86 93 89 93 92A2.5 2.5 0 0 1 88 92ZM90 100C90 98 91.8 96 91.8 96C91.8 96 93.6 98 93.6 100A1.8 1.8 0 0 1 90 100Z" fill="#4FC3F7"/>',
        '<path d="M56 88C56 86 57.6 84 57.6 84C57.6 84 59.2 86 59.2 88A1.6 1.6 0 0 1 56 88Z" fill="#4FC3F7"/>'
      ].join(''));
  }

  // Sukupuu: puu, jonka oksilla on molempien perheiden kehystetyt muotokuvat (Kuvitus.muotokuva): vasemmalla Pertti (seepia,
  // kuollut) ja Purjo, alla Hiisi ja Jay; oikealla Walker ja Marta, alla Maia ja Anderson; Jayn ja Maian välissä sydän.
  function kuvaSukupuu() {
    const K = window.Kuvitus;
    const r = 13.5;
    const paikat = [['pertti', 22, 36], ['purjo', 56, 36], ['walker', 104, 36], ['marta', 138, 36],
      ['hiisi', 22, 88], ['jay', 56, 88], ['maia', 104, 88], ['anderson', 138, 88]];
    return kkSvg('Desenho: uma árvore com os retratos das duas famílias nos galhos. À esquerda, a família do Jay: o Pertti, em sépia, e a Purjo, e embaixo o Hiisi e o Jay. À direita, a família da Maia: o Walker e a Marta, e embaixo a Maia e o Anderson. Entre o Jay e a Maia há um coração.',
      [['#E3F2FD', '#FFF8E1'], ['#8BC34A', '#558B2F']], (g, n) => [
        `<filter id="kk${n}seepia"><feColorMatrix type="matrix" values=".393 .769 .189 0 0 .349 .686 .168 0 0 .272 .534 .131 0 0 0 0 0 1 0"/></filter>`,
        `<rect width="160" height="160" fill="${g(1)}"/>`,
        // latvus
        '<g fill="#81C784"><circle cx="38" cy="50" r="34"/><circle cx="122" cy="50" r="34"/><circle cx="80" cy="34" r="30"/><circle cx="80" cy="76" r="30"/><circle cx="20" cy="92" r="20"/><circle cx="140" cy="92" r="20"/></g>',
        '<g fill="#A5D6A7" opacity=".7"><circle cx="30" cy="30" r="14"/><circle cx="114" cy="26" r="13"/><circle cx="78" cy="18" r="12"/></g>',
        // maa ja runko
        `<path d="M-2 140C40 128 120 128 162 140V162H-2Z" fill="${g(2)}"/>`,
        '<path d="M70 150C72 136 73 124 71 112C64 104 52 100 40 100L41 96C54 96 66 100 74 106C75 96 77 70 78 56H82C83 70 85 96 86 106C94 100 106 96 119 96L120 100C108 100 96 104 89 112C87 124 88 136 90 150Z" fill="#795548"/>',
        '<path d="M74 140C75 128 76 118 75 110" fill="none" stroke="#5D4037" stroke-width="1.2"/>',
        // sukulinjat: vanhemmat → lapset
        '<g fill="none" stroke="#6D4C41" stroke-width="2.6" stroke-linecap="round"><path d="M35 36H43M39 36V64M22 64H56M22 64V74M56 64V74"/><path d="M117 36H125M121 36V64M104 64H138M104 64V74M138 64V74"/></g>',
        // muotokuvat kehyksissä
        paikat.map(([id, x, y]) => {
          let sisus = `<circle cx="${x}" cy="${y}" r="${r}" fill="#ECEFF1"/>`;
          const kuva = K && K.muotokuva ? K.muotokuva(id) : '';
          if (kuva) sisus = kuva.replace('<svg ', `<svg x="${x - r}" y="${y - r}" width="${2 * r}" height="${2 * r}" `);
          if (id === 'pertti') sisus = `<g filter="url(#kk${n}seepia)">${sisus}</g>`;
          return `<circle cx="${x}" cy="${y}" r="${r + 2.6}" fill="#8D6E63"/><circle cx="${x}" cy="${y}" r="${r + 1}" fill="#FFF8E1"/>${sisus}`;
        }).join(''),
        // Jayn ja Maian sydän
        '<path d="M80 98C80 98 70 92 70 86C70 82 73 80 75.6 80C77.8 80 79.2 81.4 80 83C80.8 81.4 82.2 80 84.4 80C87 80 90 82 90 86C90 92 80 98 80 98Z" fill="#E53935" stroke="#FFFFFF" stroke-width="1.2"/>'
      ].join(''));
  }

  // Claees Oollshen: rautakaupan hyllyt (lamput, kellot, tuolit kolmessa värissä, maalipurkit); Purjo ostoskärryn kanssa,
  // Maia osoittaa kaukaista hyllyä (tuo), myyjä näyttää keltaista lamppua kädessään (se).
  function kuvaClaees() {
    const lamppu = (x, y, vari) => `<path d="M${x - 6} ${y}H${x + 6}L${x + 8.5} ${y + 8}H${x - 8.5}Z" fill="${vari}"/><rect x="${x - .8}" y="${y + 8}" width="1.6" height="7" fill="#616161"/><rect x="${x - 5}" y="${y + 15}" width="10" height="2" rx="1" fill="#616161"/>`;
    const kello = (x, y, vari) => `<circle cx="${x}" cy="${y}" r="7" fill="${vari}"/><circle cx="${x}" cy="${y}" r="5.4" fill="#FFFFFF"/><path d="M${x} ${y}V${y - 3.8}M${x} ${y}H${x + 2.8}" stroke="#212121" stroke-width="1" stroke-linecap="round"/>`;
    const tuoli = (x, y, vari) => `<path d="M${x} ${y}V${y + 20}M${x + 10} ${y + 10}V${y + 20}M${x} ${y + 10}H${x + 11}" fill="none" stroke="${vari}" stroke-width="2.2" stroke-linecap="round"/>`;
    return kkSvg('Desenho: na loja Claees Oollshen, com prateleiras de luminárias, relógios e cadeiras de várias cores, a Purjo empurra o carrinho, a Maia aponta uma luminária lá longe na prateleira, e o vendedor de óculos mostra uma luminária amarela na mão.',
      [['#FAFAFA', '#E0E0E0'], ['#ECEFF1', '#CFD8DC']], g => [
        `<rect width="160" height="160" fill="${g(1)}"/>`,
        '<rect x="0" y="0" width="160" height="20" fill="#3D6B4F"/><rect x="0" y="20" width="160" height="2.4" fill="#A5D6A7"/>',
        kkTeksti(80, 14.2, 10.5, '#FFFFFF', 'Claees Oollshen'),
        // seinäkellot
        kello(14, 36, '#D62828'), kello(32, 36, '#2563EB'),
        // hylly takana oikealla
        '<rect x="94" y="28" width="64" height="94" fill="#CFD8DC"/><path d="M94 52h64v2.6H94ZM94 78h64v2.6H94ZM94 104h64v2.6H94Z" fill="#90A4AE"/>',
        lamppu(104, 33, '#D62828'), lamppu(124, 33, '#2563EB'), lamppu(146, 33, '#2E9D4A'),
        kello(106, 69, '#1B1B1B'), kello(126, 69, '#F4A6C1'), kello(146, 69, '#F5C518'),
        tuoli(100, 84, '#8A5A2B'), tuoli(122, 84, '#9AA0A6'), tuoli(142, 84, '#D62828'),
        // maalipurkit lattialla
        [[4, '#2563EB'], [16, '#F5C518'], [28, '#2E9D4A']].map(([x, v]) => `<rect x="${x}" y="112" width="10" height="12" rx="1" fill="#B0BEC5"/><rect x="${x}" y="116" width="10" height="5" fill="${v}"/><path d="M${x + 2} 112C${x + 2} 108 ${x + 8} 108 ${x + 8} 112" fill="none" stroke="#607D8B" stroke-width=".8"/>`).join(''),
        `<rect x="0" y="122" width="160" height="38" fill="${g(2)}"/><path d="M0 122H160M0 140H160M40 122V160M80 122V160M120 122V160" stroke="#FFFFFF" stroke-width=".8"/>`,
        // Purjo kärryn takana
        kkHahmo(26, 84, 1.08, KK_HAHMOT.purjo, { suu: 'hymy', kadet: [[-8, 30], [10, 30]] }),
        // ostoskärry: punainen lamppu ja sininen tuoli
        '<path d="M2 120L8 110" stroke="#607D8B" stroke-width="2" stroke-linecap="round"/>',
        lamppu(18, 106, '#D62828').replace(/#616161/g, '#757575'),
        '<path d="M33 100V118M33 109H44" fill="none" stroke="#2563EB" stroke-width="2.4" stroke-linecap="round"/>',
        '<path d="M6 112H50L46 134H10Z" fill="#B0BEC5" opacity=".55"/><path d="M6 112H50L46 134H10ZM6 118H49M8 124H48M9 129H47M16 112V134M26 112V134M36 112V134" fill="none" stroke="#607D8B" stroke-width="1"/>',
        '<circle cx="14" cy="140" r="3" fill="#455A64"/><circle cx="42" cy="140" r="3" fill="#455A64"/><path d="M10 134L14 140M46 134L42 140" stroke="#607D8B" stroke-width="1.4"/>',
        // Maia osoittaa kaukaista hyllyä
        kkHahmo(66, 92, 1.14, KK_HAHMOT.maia, { suu: 'auki', kadet: [[22, -4], [-12, 34]],
          esine: '<rect x="-17" y="30" width="9" height="12" rx="1" fill="#FFFFFF"/><path d="M-15.6 33h6M-15.6 36h5M-15.6 39h6" stroke="#64B5F6" stroke-width=".7"/>' }),
        // myyjä ja keltainen lamppu
        kkHahmo(130, 98, 1.14, KK_HAHMOT.myyja, { suu: 'hymy', kadet: [[-18, 18]],
          esine: '<path d="M-24 -2H-12L-9.5 7H-26.5Z" fill="#F5C518"/><rect x="-18.8" y="7" width="1.6" height="9" fill="#616161"/>' })
      ].join(''));
  }

  // Matkalaukku: avoin matkalaukku kesätavaroineen (sandaalit, aurinkolasit, aurinkovoide, paidat, uimapuku), kaappi
  // talvitavaroineen (toppatakki, pipo, huivi, talvikengät); Maia käskee, Jay pitelee pipoa ihmeissään; ikkunassa lumisade,
  // seinällä Brasilian rantajuliste.
  function kuvaMatkalaukku() {
    return kkSvg('Desenho: em casa, numa noite de neve, a Maia dá ordens e aponta a mala aberta com sandálias, óculos de sol, protetor solar, camisetas e maiô, enquanto o Jay segura um gorro de lã, confuso, ao lado do armário com casaco de inverno, cachecol e botas. Na parede há um pôster de uma praia no Brasil.',
      [['#FFF3E0', '#FFE0B2'], ['#1A237E', '#3949AB'], ['#4FC3F7', '#B3E5FC']], g => [
        `<rect width="160" height="160" fill="${g(1)}"/>`,
        // ikkuna ja lumisade
        `<rect x="6" y="8" width="46" height="50" rx="2" fill="#FFFFFF"/><rect x="9" y="11" width="40" height="44" fill="${g(2)}"/>`,
        '<path d="M28.2 11h1.6v44h-1.6ZM9 32h40v1.6H9Z" fill="#FFFFFF"/><rect x="4" y="58" width="50" height="3" fill="#D7CCC8"/>',
        '<g fill="#FFFFFF">' + [[14, 16], [22, 24], [36, 15], [44, 26], [16, 40], [26, 47], [38, 38], [45, 49], [12, 28], [33, 52]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.2"/>`).join('') + '</g>',
        '<path d="M9 52C18 48 30 50 49 47V55H9Z" fill="#E8EAF6"/>',
        // rantajuliste
        `<rect x="62" y="10" width="40" height="32" rx="1.5" fill="#FFFFFF"/><rect x="64.5" y="12.5" width="35" height="27" fill="${g(3)}"/>`,
        '<circle cx="90" cy="19" r="4.2" fill="#FFCA28"/><path d="M64.5 30H99.5V34H64.5Z" fill="#0288D1"/><path d="M64.5 34C74 31.6 88 32 99.5 34V39.5H64.5Z" fill="#FFE082"/>',
        '<path d="M73 37C73.6 31 74.6 25 77 20" fill="none" stroke="#795548" stroke-width="1.4"/><path d="M77 20C73 18 69 19.6 67.6 22M77 20C79 16.6 83 16 85.6 18M77 20C80.6 20 83.6 22.4 84 25M77 20C75 17 74.6 14.6 75.6 13" fill="none" stroke="#2E7D32" stroke-width="1.6" stroke-linecap="round"/>',
        // kaappi talvitavaroineen
        '<rect x="112" y="40" width="48" height="96" fill="#8D6E63"/><rect x="115" y="43" width="45" height="90" fill="#5D4037"/><path d="M115 54H160" stroke="#BCAAA4" stroke-width="1.4"/>',
        '<path d="M124 56C120 58 118 62 118 70V104H140V70C140 62 138 58 134 56L129 60Z" fill="#455A64"/><path d="M118 70H140M118 80H140M118 90H140M129 60V104" stroke="#37474F" stroke-width="1"/><path d="M126 52Q129 49 132 52" fill="none" stroke="#BDBDBD" stroke-width="1"/>',
        '<path d="M146 56V100" stroke="#E53935" stroke-width="5"/><path d="M146 60V64M146 70V74M146 80V84M146 90V94" stroke="#FFFFFF" stroke-width="5"/><path d="M143.6 100L142.6 104M146 100V104.6M148.4 100L149.4 104" stroke="#E53935" stroke-width="1"/>',
        '<path d="M120 124V116H127V121H131V128H120ZM134 124V116H141V121H145V128H134Z" fill="#3E2723"/><rect x="152" y="46" width="6" height="6" fill="#FFB300"/>',
        // lattia
        '<rect x="0" y="132" width="160" height="28" fill="#BCAAA4"/><rect x="0" y="132" width="160" height="1.6" fill="#D7CCC8"/>',
        // Maia käskee, Jay ja pipo
        kkHahmo(26, 88, 1.2, KK_HAHMOT.maia, { suu: 'auki', kadet: [[18, 2], [-14, 34]] }),
        kkHahmo(124, 84, 1.12, KK_HAHMOT.jay, { suu: 'o', kulmat: 'huoli', kadet: [[-16, 8]],
          esine: '<path d="M-24 6C-24 -2 -10 -2 -10 6Z" fill="#C62828"/><rect x="-25" y="5" width="16" height="3.4" rx="1" fill="#EF5350"/><circle cx="-17" cy="-2.4" r="2.6" fill="#FFCDD2"/>' }),
        // matkalaukku: kansi ja pohja (koko laukku 8 yksikköä vasemmalle, ettei kansi peitä Jayta)
        '<g transform="translate(-8 0)">',
        '<path d="M42 116L48 94H104L104 116Z" fill="#E65100"/><path d="M46 114L51 97H101L101 114Z" fill="#FFCC80"/>',
        '<rect x="38" y="116" width="70" height="30" rx="3" fill="#EF6C00"/><rect x="42" y="118" width="62" height="24" rx="2" fill="#FFE0B2"/>',
        // kesätavarat laukussa
        '<path d="M46 124H66V136H46Z" fill="#26A69A"/><path d="M46 124L42 128M66 124L70 128" stroke="#26A69A" stroke-width="3" stroke-linecap="round"/><path d="M52 124Q56 127 60 124" fill="none" stroke="#00796B" stroke-width="1"/>',
        '<path d="M70 122C70 120 78 120 78 122L77 140C77 142 71 142 71 140Z" fill="#8D6E63"/><path d="M80 122C80 120 88 120 88 122L87 140C87 142 81 142 81 140Z" fill="#8D6E63"/><path d="M71 127H77M81 127H87" stroke="#FFB74D" stroke-width="1.6"/>',
        '<path d="M92 120H99L100 128L97 140H94L91 128Z" fill="#EC407A"/><path d="M93 120V117M98 120V117" stroke="#EC407A" stroke-width="1"/>',
        '<path d="M48 139H56M60 139H68" stroke="#111111" stroke-width="3.2" stroke-linecap="round"/><path d="M56 139H60" stroke="#111111" stroke-width="1"/>',
        '<rect x="100" y="106" width="7" height="18" rx="2" fill="#FFB300" transform="rotate(14 103 115)"/><rect x="101" y="103" width="5" height="4" fill="#E65100" transform="rotate(14 103 115)"/>',
        '</g>'
      ].join(''));
  }

  // Feira Hippie: joulukuun ilta Belo Horizontessa, valosarja ja palmu; Jay myy kojulla (sininen kuppi, keltainen kulho,
  // valkoinen lautanen, vihreä maljakko, vaaleanpunainen possu, pieni taulu), Uuno ja Eenok aurinkolaseissa ostamassa.
  function kuvaFeira() {
    const valo = Array.from({ length: 11 }, (_, i) => {
      const t = i / 10, x = 160 * t, y = (1 - t) * (1 - t) * 14 + 2 * (1 - t) * t * 38 + t * t * 14;
      return `<circle cx="${(x).toFixed(1)}" cy="${(y + 1.6).toFixed(1)}" r="2" fill="${['#FFEB3B', '#FF7043', '#66BB6A', '#42A5F5'][i % 4]}"/>`;
    }).join('');
    return kkSvg('Desenho: numa noite de dezembro na Feira Hippie de Belo Horizonte, com luzinhas e uma palmeira, o Jay atende numa barraca com xícara azul, tigela amarela, prato branco, vaso verde, porquinho cor-de-rosa e um quadro pequeno, e o Uuno e o Eenok, de óculos de sol, compram.',
      [['#283593', '#FF8A65'], ['#4E342E', '#3E2723']], g => [
        `<rect width="160" height="160" fill="${g(1)}"/>`,
        '<path d="M0 74C20 64 40 70 60 62C84 52 110 66 130 58C144 52 152 56 160 54V90H0Z" fill="#5C3D6E" opacity=".75"/>',
        '<path d="M0 84H10V66H18V84H26V72H36V84H160V96H0Z" fill="#3D2B56"/><path d="M12 70h2v2h-2ZM30 76h2v2h-2Z" fill="#FFE082"/>',
        '<path d="M150 96C149 80 146 66 141 54" fill="none" stroke="#2B1F3D" stroke-width="2.6"/><path d="M141 54C134 50 126 52 123 57M141 54C143 46 150 44 156 47M141 54C149 53 156 57 158 62M141 54C137 48 137 43 140 40" fill="none" stroke="#2B1F3D" stroke-width="3" stroke-linecap="round"/>',
        '<path d="M0 14Q80 62 160 14" fill="none" stroke="#FFE082" stroke-width=".7"/>', valo,
        '<path d="M80 4L81.6 8.6H86.4L82.4 11.4L84 16L80 13.2L76 16L77.6 11.4L73.6 8.6H78.4Z" fill="#FFD54F"/>',
        // koju: katos ja tolpat
        '<path d="M22 56V112M138 56V112" stroke="#8D6E63" stroke-width="2.6"/>',
        '<path d="M18 40H142L146 54H14Z" fill="#FFFFFF"/>' + ['#E53935', '#FDD835', '#43A047', '#1E88E5', '#8E24AA', '#FB8C00'].map((v, i) => `<path d="M${18 + i * 20.7} 40H${28.3 + i * 20.7}L${29 + i * 22} 54H${14 + i * 22}Z" fill="${v}"/>`).join(''),
        '<path d="M14 54' + Array.from({ length: 12 }, (_, i) => `Q${14 + i * 11 + 5.5} 62 ${14 + (i + 1) * 11} 54`).join('') + 'Z" fill="#FFFFFF"/>',
        // Jay myyjänä
        kkHahmo(80, 80, 1.08, KK_HAHMOT.jay, { suu: 'auki', kadet: [[-16, 26], [16, 26]] }),
        // pöytä ja tuotteet
        `<rect x="14" y="104" width="132" height="6" fill="#A1887F"/><rect x="14" y="110" width="132" height="34" fill="#7E57C2"/>`,
        '<g fill="#FFD54F">' + Array.from({ length: 8 }, (_, i) => `<circle cx="${22 + i * 16.5}" cy="124" r="2"/>`).join('') + '</g><path d="M14 132H146" stroke="#B39DDB" stroke-width="2"/>',
        `<rect x="0" y="144" width="160" height="16" fill="${g(2)}"/>`,
        '<path d="M28 96H38V102C38 104 36 104.6 33 104.6C30 104.6 28 104 28 102Z" fill="#2563EB"/><path d="M38 97.6C41 97.6 41 101.6 38 101.6" fill="none" stroke="#2563EB" stroke-width="1.2"/>',
        '<path d="M43 98H57C57 102 54 104.4 50 104.4C46 104.4 43 102 43 98Z" fill="#F5C518"/><ellipse cx="50" cy="98" rx="7" ry="1.4" fill="#FFE082"/>',
        '<ellipse cx="66" cy="103" rx="8" ry="1.8" fill="#FFFFFF"/><ellipse cx="66" cy="102.6" rx="5" ry="1" fill="#E0E0E0"/>',
        '<path d="M94 104C90 104 88.6 99 90 94C91 90 92.4 89 92.4 86H95.6C95.6 89 97 90 98 94C99.4 99 98 104 94 104Z" fill="#2E9D4A"/><rect x="92" y="84.6" width="4" height="1.6" fill="#1B5E20"/>',
        '<ellipse cx="111" cy="99.6" rx="6.4" ry="4.6" fill="#F4A6C1"/><circle cx="117" cy="98" r="3" fill="#F48FB1"/><ellipse cx="119.2" cy="98.4" rx="1.2" ry="1" fill="#EC407A"/><path d="M107 104v1.6M114 104v1.6" stroke="#F48FB1" stroke-width="1.6"/><path d="M104.6 98q-2 -2 0 -3" fill="none" stroke="#F48FB1" stroke-width=".8"/>',
        '<path d="M126 104L130 88M138 104L134 88" stroke="#5D4037" stroke-width="1"/><rect x="124" y="84" width="16" height="13" fill="#8A5A2B"/><rect x="126" y="86" width="12" height="9" fill="#81D4FA"/><path d="M126 95L130 90L133 93L135 91L138 95Z" fill="#43A047"/>',
        // Uuno ja Eenok (aurinkolasit) ostamassa
        kkHahmo(14, 112, 1.26, KK_HAHMOT.uuno, { suu: 'hymy', kadet: [[16, 18]] }),
        kkHahmo(148, 110, 1.26, KK_HAHMOT.eenok, { suu: 'auki', kadet: [[-18, 10]] })
      ].join(''));
  }

  /* ---------- rekisteri ---------- */
  // korttikuva: aloituskortin piirros (Korttikuvat yllä); ’Esburgerilla omistajan valokuva oppitunnissa, ei piirrosta.
  const PELIT = [
    { id: 'tokki-manni', oppitunti: 't03', osa: 'b', treeni: ['t03-hinnat', 'aihe-luvut'], nimi: 'Tokki-Manni', ikoni: '🛒', aja: ajaTokkiManni, korttikuva: kuvaTokkiManni,
      kuvaus: 'A lista do Jay e 20 euros: encha a cesta, diga o total em finlandês e peça chocolate com o que sobrar.' },
    { id: 'kassapaniikki', oppitunti: 't03', osa: 'b', treeni: ['tilanne-kassa'], nimi: 'Kassapaniikki', ikoni: '🧾', aja: ajaKassa, korttikuva: kuvaKassapaniikki,
      kuvaus: 'O autoatendimento está fora de serviço. A Maia vai ao caixa, e a fila atrás dela suspira. Tela cheia, língua da rua.' },
    // ikoniSvg (AV-028): piirretty kuvake otsakkeeseen ja aloituskorttiin emojin tilalle, kun app.js osaa sen (ikoni = varakuvake).
    { id: 'esburger', oppitunti: 't04', osa: 'a', treeni: ['t04-tilaus', 'tilanne-lounas'], nimi: '’Esburger', ikoni: '🍔', ikoniSvg: HAMPURILAINEN_SVG, aja: ajaEsburger, paikka: 'hesburger-kassa',
      kuvaus: 'O quiosque favorito do Capivara e do Peixe-boi: monte os pedidos e peça com educação, com o partitivo depois dos números.' },
    { id: 'sukupuu', oppitunti: 't05', osa: 'a', treeni: ['t05-genetiivi', 't05-perhe'], nimi: 'Sukupuu', ikoni: '🌳', aja: ajaSukupuu, korttikuva: kuvaSukupuu, paikka: 'hameentie-marraskuu',
      kuvaus: 'A árvore das famílias do Jay e da Maia: toque numa pessoa para saber quem ela é e responda “de quem?” com o genitivo.' },
    // ==== t06: PELIT-rivit (pilkku rivin perään) ====
    // ==== t07: PELIT-rivit (pilkku rivin perään) ====
    // ==== t08: PELIT-rivit (pilkku rivin perään) ====
    { id: 'claees-oollshen', oppitunti: 't08', osa: 'b', treeni: ['t08-tamatuo', 't08-sadat'], nimi: 'Claees Oollshen', ikoni: '💡', aja: ajaClaees, korttikuva: kuvaClaees, paikka: 'hameentie-marraskuu',
      puheet: claeesPuheet,
      kuvaus: 'A lista da Purjo na Clas Ohlson: o vendedor mostra, a Maia responde com este, esse ou aquele, e no caixa vem o total em centenas de euros.' },
    // ==== t09: PELIT-rivit (pilkku rivin perään) ====
    { id: 'matkalaukku', oppitunti: 't09', osa: 'a', treeni: ['t09-kasky', 't09-monikko'], nimi: 'Matkalaukku', ikoni: '🧳', aja: ajaMatkalaukku, korttikuva: kuvaMatkalaukku, paikka: 'sornainen-kurvi',
      puheet: laukkuPuheet, kuvaus: 'A Maia manda, o Jay arruma: ouça a ordem (Ota…! Älä ota…!), ache a coisa e ponha na mala ou no armário.' },
    // ==== t10: PELIT-rivit (pilkku rivin perään) ====
    // ==== k02: PELIT-rivit (pilkku rivin perään) ====
    // ==== t11: PELIT-rivit (pilkku rivin perään) ====
    // ==== t12: PELIT-rivit (pilkku rivin perään) ====
    { id: 'feira-hippie', oppitunti: 't12', osa: 'b', treeni: ['t12-objekti', 't12-kongruenssi'], nimi: 'Feira Hippie', ikoni: '🏺', aja: ajaFeira, korttikuva: kuvaFeira, paikka: 'festa-rua',
      puheet: feiraPuheet, kuvaus: 'Segunda à noite na feira de Natal: a Maia foi buscar uma Coca, e o Jay atende o Uuno e o Eenok em finlandês. O objeto inteiro (-n, -t) ou o partitivo, e o total em reais.' },
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
    // puhuja = pelin oma roolinimi (kassa, asiakas …): poimi_aanet.js antaa sivuhahmolle kiinteän äänen (omistaja 8.11.2026).
    const lisaa = (o, rooli, teksti, puhuja) => ulos.push({ oppitunti: o, rooli: roolinAvain(rooli), teksti, puhuja: puhuja || rooli });
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
    // Oppituntien 6– pelit: PELIT-rivin puheet() → [[rooli, teksti, puhuja?]] (t09 Matkalaukku; muut voivat käyttää samaa kenttää);
    // puhuja = oppitunnin hahmo (uuno, eenok, ohlsonmyyja), kun äänirooli on yhteinen (manaatti = mies7).
    for (const p of PELIT) if (typeof p.puheet === 'function') for (const [rooli, teksti, puhuja] of p.puheet()) lisaa(p.oppitunti, rooli, teksti, puhuja);
    const nahty = new Set();
    return ulos.filter(p => { const k = p.oppitunti + '|' + p.rooli + '|' + p.teksti; if (nahty.has(k)) return false; nahty.add(k); return true; });
  }

  window.Pelit = { pelit: PELIT, hae, oppitunnin, aja, puheet, luku, hintaSanoin };
})();
