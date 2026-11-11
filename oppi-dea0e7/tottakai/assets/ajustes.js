/* Tottakai: Ajustes (#ajustes, omistaja 17.10.2026): kaikki sivuston asetukset yhdellä sivulla. Yläpalkin napit
   (Página inteira, Parar, Tradução, Som, 🍊) pysyvät; tämä sivu kokoaa loput: ääni ja äänitesti, käännöksen oletus,
   liike, pomotaistelun äänitehosteet, kirjoitustila, edistymisen siirto (QR, koodi tai tiedosto: assets/siirto.js),
   edistymisen poisto ja Diagnóstico: tekstiraportti vianetsintään (ei henkilökohtaista sisältöä, vain määriä).
   Ladataan heti kurssi.js:n jälkeen, jotta JS-virheiden rengaspuskuri (VIRHEET_MAX viimeisintä) kerää alusta asti. */
(function () {
  'use strict';
  const VIRHEET_MAX = 20;
  const virheet = [];
  const kirjaa = t => { virheet.push(new Date().toISOString().slice(11, 19) + ' ' + t); if (virheet.length > VIRHEET_MAX) virheet.shift(); };
  // Sieppausvaihe (true): myös puuttuvat skriptit, kuvat ja äänipaketit kirjautuvat (A6-39), ei vain JS-virheet.
  window.addEventListener('error', e => kirjaa(e.message ? `${e.message} (${String(e.filename || '').split('/').pop()}:${e.lineno || '?'})`
    : `lataus epäonnistui: ${String((e.target && (e.target.src || e.target.href)) || '?').split('/').slice(-2).join('/')}`), true);
  window.addEventListener('unhandledrejection', e => kirjaa('promise: ' + ((e.reason && (e.reason.message || e.reason)) || 'rejeitada')));
  const ETULIITE = 'tottakai-';
  const lue = (k, o) => { try { const v = localStorage.getItem(ETULIITE + k); return v === null ? o : JSON.parse(v); } catch (e) { return o; } };
  const kirjoita = (k, v) => { try { localStorage.setItem(ETULIITE + k, JSON.stringify(v)); } catch (e) { /* ohita */ } };
  let aaniTesti = null;

  // Liike pois (sivuston oma asetus prefers-reduced-motionin lisäksi): body.liike-pois (tottakai.css).
  const asetaLiike = pois => document.body && document.body.classList.toggle('liike-pois', !!pois);
  document.addEventListener('DOMContentLoaded', () => asetaLiike(lue('liike-pois', false)));
  // Teema (omistaja 19.10.2026): 'jarjestelma' = selaimen/järjestelmän asetus (tyyli.css prefers-color-scheme), 'vaalea' ja
  // 'tumma' pakottavat attribuutilla data-theme (tyyli.css tukee molempia). Asetetaan heti, ennen sivun piirtoa.
  const asetaTeema = t => {
    const r = document.documentElement;
    if (!r) return;   // Node-tarkistusten vm-ympäristössä (lataa.js) ei ole dokumenttia
    if (t === 'vaalea') r.setAttribute('data-theme', 'light');
    else if (t === 'tumma') r.setAttribute('data-theme', 'dark');
    else r.removeAttribute('data-theme');
  };
  asetaTeema(lue('teema', 'jarjestelma'));

  function raportti() {
    const K = window.Kurssi || {};
    const r = ['Tottakai diagnóstico — cole isto no chat', '='.repeat(44)];
    const oppitunnit = (K.oppitunnit || []).map(o => o.id);
    r.push(versio() + ' · lições ' + oppitunnit.join(' '));
    r.push('Endereço: ' + location.protocol + (location.protocol === 'file:' ? ' (arquivo local)' : ' ' + location.host) + ' · rota #' + (location.hash || '#inicio').slice(1).slice(0, 40));
    r.push('Navegador: ' + navigator.userAgent);
    r.push(`Tela: ${screen.width}×${screen.height}, janela ${innerWidth}×${innerHeight}, dpr ${devicePixelRatio} · toque: ${'ontouchstart' in window || navigator.maxTouchPoints > 0 ? 'sim' : 'não'}` +
      ` · menos movimento: ${matchMedia('(prefers-reduced-motion: reduce)').matches ? 'sim' : 'não'} · idioma: ${navigator.language}`);
    // Tallennus: koko avaimittain, sisällöstä vain määriä.
    let ls = 'sim';
    const koot = [];
    try {
      for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith(ETULIITE)) koot.push([k.slice(ETULIITE.length), (localStorage.getItem(k) || '').length]); }
    } catch (e) { ls = 'NÃO (' + e.name + ')'; }
    r.push('localStorage: ' + ls + ` · ${koot.length} chaves, ${koot.reduce((a, b) => a + b[1], 0)} caracteres`);
    if (koot.length) r.push('  ' + koot.sort((a, b) => b[1] - a[1]).map(([k, n]) => `${k}=${n}`).join(', '));
    const p = lue('pisteet', {}) || {}, saari = lue('saari', {}) || {}, mitalit = lue('mitalit', {}) || {};
    const loki = lue('tulokset-loki', []) || [];
    r.push(`Progresso: ${p.mandariinit || 0} 🍊 (ganhou ${p.ansaittu || 0}, gastou ${p.kaytetty || 0}) · itens ${Object.keys(saari.omat || {}).length}` +
      ` · medalhas ${Object.values(mitalit).filter(x => x && x.mitali).map(x => x.mitali[0]).join('') || '0'} · respostas no histórico ${loki.length}`);
    // Ääni.
    const A = window.Aani;
    try {
      const d = A && A.diagnoosi ? A.diagnoosi() : null;
      if (d) r.push(`Som: método ${d.menetelma || '?'}, Web Audio ${d.webAudio}, pacotes carregados [${d.paketit}], faltando [${(d.puuttuvat || []).join(', ')}], último erro ${d.virhe || '—'}`);
    } catch (e) { r.push('Som: diagnoosi falhou ' + e.name); }
    try {
      const vv = window.speechSynthesis ? speechSynthesis.getVoices() : [];
      const fi = vv.filter(v => /^fi/i.test(v.lang));
      r.push(`Vozes: ${vv.length} no total, finlandês ${fi.length}` + (fi.length ? ': ' + fi.map(v => v.name).join('; ') : ''));
    } catch (e) { r.push('Vozes: erro ' + e.name); }
    if (aaniTesti) { r.push('Teste de som:'); aaniTesti.forEach(x => r.push('  ' + x)); } else r.push('Teste de som: não feito (botão “Testar o som” acima)');
    r.push(`Erros de JavaScript (últimos ${VIRHEET_MAX}): ` + (virheet.length ? '' : 'nenhum'));
    virheet.forEach(x => r.push('  ' + x));
    return r.join('\n');
  }

  function nayta(m, el) {
    m.append(el('header', { class: 'op-otsake' }, el('p', { class: 'yla' }, 'Ajustes'), el('h1', {}, 'Ajustes'),
      el('p', { class: 'lahde-rivi' }, 'Todas as opções do curso num lugar só. Os botões do alto (Página inteira, Parar, Tradução, Som) continuam lá.')));
    const runko = el('div', { class: 'op-runko ajustes' });
    const ruutu = (teksti, arvo, muutos) => {
      const i = el('input', { type: 'checkbox' });
      i.checked = !!arvo;
      i.addEventListener('change', () => muutos(i.checked));
      return el('label', { class: 'valintaruutu' }, i, ' ' + teksti);
    };
    // Som.
    const A = window.Aani;
    const tulos = el('pre', { class: 'aanitesti-tulos' });
    const testi = el('button', { type: 'button', class: 'visa-aloita' }, 'Testar o som');
    testi.addEventListener('click', async () => {
      testi.disabled = true;
      try { aaniTesti = A && A.testi ? await A.testi() : ['Aani.testi indisponível']; } catch (e) { aaniTesti = ['erro: ' + e.name]; }
      tulos.textContent = aaniTesti.join('\n');
      testi.disabled = false;
    });
    const paneeli = el('button', { type: 'button', class: 'kauppa-pieni' }, 'Escolher as vozes (painel Som)');
    paneeli.addEventListener('click', () => { const n = document.getElementById('aanet-nappi'); if (n) { n.click(); window.scrollTo(0, 0); } });
    const aanitteet = document.getElementById('aanitteet');
    runko.append(el('section', { class: 'osio' }, el('h2', {}, 'Som'),
      ruutu('Usar as gravações prontas (quando existirem)', aanitteet ? aanitteet.checked : true, v => { if (aanitteet) { aanitteet.checked = v; aanitteet.dispatchEvent(new Event('change')); } }),
      ruutu('Efeitos sonoros nas lutas finais', lue('pomo-aanet', true) !== false, v => kirjoita('pomo-aanet', v)),
      el('p', { class: 'kauppa-rivi' }, testi, paneeli), tulos));
    // Texto e movimento.
    runko.append(el('section', { class: 'osio' }, el('h2', {}, 'Texto e movimento'),
      ruutu('Mostrar a tradução em português (o mesmo que o botão Tradução)', document.body.classList.contains('kaannokset-auki'), () => { const n = document.getElementById('kaannokset'); if (n) n.click(); }),
      ruutu('Modo escrita no Treino, nos jogos e nas lutas finais (digitar a resposta)', (() => { try { const v = localStorage.getItem('tottakai-kirjoitustila'); return v === 'true' || v === '1'; } catch (e) { return false; } })(),
        v => { try { localStorage.setItem('tottakai-kirjoitustila', v ? 'true' : 'false'); } catch (e) { /* ohita */ } }),
      ruutu('Menos movimento (sem animações)', lue('liike-pois', false), v => { kirjoita('liike-pois', v); asetaLiike(v); })));
    // Aparência: tema do sistema (padrão), claro ou escuro.
    const teemaNyt = lue('teema', 'jarjestelma');
    const teemaRivi = (arvo, teksti) => {
      const i = el('input', { type: 'radio', name: 'teema', value: arvo });
      i.checked = teemaNyt === arvo;
      i.addEventListener('change', () => { if (i.checked) { kirjoita('teema', arvo); asetaTeema(arvo); } });
      return el('label', { class: 'valintaruutu' }, i, ' ' + teksti);
    };
    runko.append(el('section', { class: 'osio' }, el('h2', {}, 'Aparência'),
      el('p', {}, 'Tema do curso. "Sistema" segue o ajuste do seu aparelho (claro de dia, escuro à noite, se ele faz isso).'),
      teemaRivi('jarjestelma', 'Sistema (padrão)'), teemaRivi('vaalea', 'Claro'), teemaRivi('tumma', 'Escuro')));
    // Progresso.
    const tiedosto = el('input', { type: 'file', accept: '.txt,text/plain', class: 'ajustes-tiedosto', 'aria-label': 'Arquivo de progresso' });
    const lataa = el('button', { type: 'button', class: 'kauppa-pieni' }, 'Baixar arquivo de progresso');
    lataa.addEventListener('click', async () => {
      const v = await window.Siirto.vie();
      const a = el('a', { href: URL.createObjectURL(new Blob([v.linkit.join('\n')], { type: 'text/plain' })), download: 'tottakai-progresso.txt' });
      document.body.append(a); a.click(); a.remove();
    });
    tiedosto.addEventListener('change', async () => {
      const f = tiedosto.files && tiedosto.files[0];
      if (!f) return;
      const t = await f.text();
      let ok = null;
      for (const x of t.split(/\s+/)) ok = window.Siirto.vastaanota(x) || ok;
      if (ok) location.hash = '#receber';
    });
    const apaga = el('button', { type: 'button', class: 'kauppa-pieni' }, 'Apagar meu progresso neste aparelho');
    const varmista = el('button', { type: 'button', class: 'visa-aloita ajustes-vaara', hidden: true }, 'Sim, apagar tudo (não dá para desfazer)');
    apaga.addEventListener('click', () => { varmista.hidden = false; varmista.focus(); });
    varmista.addEventListener('click', () => {
      try { const pois = []; for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith(ETULIITE)) pois.push(k); } pois.forEach(k => localStorage.removeItem(k)); } catch (e) { /* ohita */ }
      location.hash = '#inicio'; location.reload();
    });
    runko.append(el('section', { class: 'osio' }, el('h2', {}, 'Progresso'),
      el('p', {}, el('a', { class: 'paanappi toissijainen', href: '#enviar' }, 'Enviar para o celular (código QR) →')),
      el('p', { class: 'kauppa-rivi' }, lataa, el('span', { class: 'ohje' }, 'Carregar arquivo:'), tiedosto),
      el('p', { class: 'kauppa-rivi' }, apaga, varmista)));
    // Diagnóstico.
    const teksti = el('textarea', { class: 'siirto-linkit', rows: '12', readonly: true, 'aria-label': 'Relatório de diagnóstico' });
    teksti.hidden = true;
    const tee = el('button', { type: 'button', class: 'visa-aloita' }, 'Gerar relatório');
    const kopioi = el('button', { type: 'button', class: 'kauppa-pieni', hidden: true }, 'Copiar');
    tee.addEventListener('click', () => { teksti.value = raportti(); teksti.hidden = false; kopioi.hidden = false; kopioi.textContent = 'Copiar'; });
    kopioi.addEventListener('click', () => { teksti.select(); try { navigator.clipboard.writeText(teksti.value); } catch (e) { try { document.execCommand('copy'); } catch (x) { /* ohita */ } } kopioi.textContent = 'Copiado!'; });
    runko.append(el('section', { class: 'osio' }, el('h2', {}, 'Diagnóstico'),
      el('p', { class: 'ohje' }, 'Algo não funciona? Gere o relatório, copie e cole no chat. Ele não tem nada pessoal: só o navegador, o som, os erros e números do progresso.'),
      el('p', { class: 'kauppa-rivi' }, tee, kopioi), teksti));
    runko.append(el('p', { class: 'versio-rivi' }, versio()));
    m.append(runko);
  }

  // Versio julkaisusta (assets/versio.js, sivut.yml): ”Versão 312 · 18.10.2026 14:05”; levyltä ”Versão local”.
  function versio() {
    const v = window.TottakaiVersio || {};
    return v.numero ? `Versão ${v.numero} · ${v.aika}` : 'Versão local (não publicada)';
  }

  window.Ajustes = { nayta, raportti, virheet: () => virheet.slice() };
})();
