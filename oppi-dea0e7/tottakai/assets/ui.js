/* Tottakain käyttöliittymän tekstit portugaliksi. Jaetut moduulit (assets/aani.js, kuvitus.js, komponentit.js)
   yhdistävät omat suomenkieliset oletuksensa näihin (Kurssi.ui.<moduuli>). Sivun omat tekstit: Kurssi.ui.app. */
Kurssi.ui = {
  aani: {
    eiAanta: 'Este texto ainda não foi gravado, e o navegador não sabe ler em voz alta.',
    eiKielta: 'Este texto ainda não foi gravado, e o navegador não tem voz em finlandês (outra língua pronunciaria errado).',
    eiTehty: nimi => `as gravações da parte ${nimi} ainda não foram feitas`,
    kesti: 'o carregamento das gravações demorou demais: '
  },
  kuvitus: {
    soittaa: 'está chamando por vídeo…', ja: ' ja ', vastaa: 'Atender', hylkaa: 'Recusar', lopeta: 'Desligar',
    paattyi: 'Chamada encerrada', uudelleen: 'Ver a chamada de novo', sulje: 'Fechar', suomennos: 'Tradução',
    saapuva: 'Chamada de vídeo', katso: 'Ver o diálogo como chamada de vídeo', kuuntele: 'Ouvir o número',
    pyyhi: 'Apagar', tarkista: 'Conferir', oikein: 'Certo!', vaarin: 'Ainda não. Ouça de novo.', kuva: 'Foto',
    tallennettu: 'Salvo neste navegador.', kelluvaNappi: 'Peixe-boi (toque: um pensamento)', oikeinPieni: 'certas',
    vaarinLyhyt: 'Errado.'
  },
  komponentit: {
    linja: 'Linha', seuraava: 'Próxima estação', paateasema: 'Estação final', kuuntele: 'Ouvir',
    tilaus: 'Seu pedido', tyhja: 'Toque num produto para pedir.', lasku: 'Pedir a conta', alusta: 'Limpar',
    yhteensa: 'Total', nakokulma: 'Quem fala?', kuollut: 'falecido', kirjoittaa: 'kirjoittaa…', katso: 'Ver a transmissão',
    tekstitys: 'Legenda', suomeksi: 'Em português', lahetys: 'AO VIVO', kuuntele2: 'Ouvir', valmis: 'Pronto!',
    kirjakieli: 'na língua escrita', tarkista: 'Conferir', sivu: 'página',
    // Komponenttien loput käyttöliittymätekstit portugaliksi (20.10.2026, ennen erää 3: vastaaja, retrato, keho,
    // postikortti, kartta; muuten Passon suomenkieliset oletukset näkyisivät). Suomen sisältö tulee merkinnöistä.
    kuuluta: 'Toque num voo: você ouve o anúncio.', minaOlen: 'O Jay está aqui',
    vaakaOhje: 'Toque em dois produtos: a balança compara os preços.', soitaKaikki: 'Ouvir tudo',
    karttaKuuntele: 'Ouvir as instruções', karttaAlusta: 'Recomeçar', karttaOhje: 'Ouça as instruções e leve o Jay até o destino com os botões.',
    vastaaja: 'Caixa postal', uusia: 'mensagens novas', teksti: 'Texto',
    retratoOsat: { tukka: 'Cabelo', hiukset: 'Cor do cabelo', lasit: 'Óculos', viikset: 'Bigode' },
    kuvaus: 'Ouvir a descrição', retratoOikein: 'Certo! É essa pessoa.', retratoVaarin: 'Ainda não. Ouça a descrição de novo. Errado:',
    kehoOhje: 'Toque numa parte do corpo: o Jay diz onde dói.', kehoKysy: 'Ouvir a pergunta', kehoOikein: 'Certo!', kehoVaarin: 'Não é essa. Tente de novo.',
    kaanna: 'Virar o cartão', lueKortti: 'Ler o cartão'
  },
  app: {
    kuuntele: 'Ouvir', kuunteleLause: 'Ouvir a frase', kuunteleSana: 'Ouvir a palavra', kuunteleKappale: 'Ouvir o trecho',
    kuunteleTehtava: 'Ouvir o exercício', kokoSivu: 'Página inteira', kuunteleKokoSivu: 'Ouvir a página inteira',
    oikein: 'Certo!', eiAivan: 'Ainda não.', eiAivanKuuntele: 'Ainda não. Ouça de novo e tente outra.',
    tarkista: 'Conferir', naytaVastaukset: 'Mostrar respostas', naytaMalli: 'Mostrar modelo', piilotaMalli: 'Esconder modelo',
    vastaus: 'Resposta', kirjoitaKuulemasi: 'Escreva o que ouviu', oikeaOlisi: 'O certo seria: ',
    kaikkiParit: 'Todos os pares encontrados!', kaannoksesi: 'Sua tradução',
    kotiOhje: 'Escreva sua resposta aqui. Ela fica salva neste navegador.', arviot: ['Ainda não', 'Um pouco', 'Bem', 'Muito bem'],
    sanaSanalta: 'Palavra por palavra', muotoSanasta: 'forma de', kirjakielessa: 'língua escrita', puhekielessa: 'língua falada',
    tunnusmuodot: 'formas-chave'
  }
};

/* Yhtenäinen asettelu (assets/asettelu.js, Passon sääntö; käyttäjä 17.10.2026 myös Tottakaihin): aina päällä, ei
   yläpalkin nappia; ▶ taulukon ensimmäiseen suomenkieliseen soluun; Na rua -laatikoilla on jo oma otsake. */
Kurssi.asettelu = {
  nappi: false,
  kohdesolu: 'fi',
  ohitaLaatikot: '.na-rua',
  tekstit: {
    kohde: 'Finlandês', lahde: 'Português', suku: 'Gênero', kuuntele: 'Ouvir',
    laatikot: { saanto: 'Regra', muista: 'Lembre', huomio: 'Atenção', kulttuuri: 'Cultura' }
  }
};
