/* Jakso 6: Muistelma, kenttätyö Kuusamossa. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet (aa = suomalaisin kirjaimin, ipa = kansainvälinen) noudattavat Belo Horizonten ääntämystä.
   Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l06',
  lyhyt: '6',
  jakso: 'Jakso 6',
  otsikko: 'Itsestä kertominen: ser vai estar',
  lahde: 'Aihe: itsestä kertominen, maat ja kielet · Kielioppi: ser vs estar, adjektiivit, por/para · Ääntäminen: g ja j',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi, Jayn tyttöystävä' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, opettelee portugalia' }
  },

  aiheet: ['ihmiset', 'ominaisuus', 'paikka', 'viestinta'],

  sanasto: [
    'finlandês', 'finlandesa', 'brasileiro', 'brasileira', 'português', 'espanhol', 'inglês', 'alemão', 'francês', 'sueco', 'russo',
    'espanha', 'suécia', 'alemanha', 'frança', 'rússia', 'portugal',
    'cansado', 'cansada', 'feliz', 'frio', 'quente', 'simpático', 'gostoso',
    'esquisito', 'um pouco', 'colega', 'geólogo', 'geóloga', 'estudar', 'por', 'para', 'obrigado por tudo'
  ],

  sanat: {
  // <SANAT>
    // dialogi ja kielioppi
    'tem': { fi: 'hänellä on; sinulla on', aa: 'TẼI', ipa: '[tẽj]', sl: 'verbi {ter}', huom: 'perusmuoto {ter}' },
    'uma': { fi: 'yksi; eräs (feminiinisanan edellä)', aa: 'Ũ-ma', ipa: '[ˈũmɐ]', sl: 'artikkeli, feminiini', huom: 'maskuliini {um}' },
    'olha': { fi: 'katso!', aa: 'O-lja', ipa: '[ˈoʎɐ]', sl: 'verbi {olhar}', huom: 'perusmuoto {olhar}; huudahduksena ”katso!”, ”kuule!”' },
    'estou': { fi: '(minä) olen (tila, sijainti)', aa: 'es-TOU', ipa: '[esˈtow]', sl: 'verbi {estar}', huom: 'puhekielessä {tô}' },
    'está': { fi: 'on; olet (tila, sijainti)', aa: 'es-TA', ipa: '[esˈta]', sl: 'verbi {estar}', huom: 'puhekielessä {tá}' },
    'estamos': { fi: '(me) olemme (tila, sijainti)', aa: 'es-TÃ-mus', ipa: '[esˈtɐ̃mus]', sl: 'verbi {estar}' },
    'somos': { fi: '(me) olemme', aa: 'SO-mus', ipa: '[ˈsomus]', sl: 'verbi {ser}' },
    'são': { fi: '(he) ovat', aa: 'SÃU', ipa: '[sɐ̃w]', sl: 'verbi {ser}', huom: 'kirjoitetaan {são}, ääntyy kuin ”sãu”' },
    'cansado': { fi: 'väsynyt (mies)', aa: 'kã-SA-du', ipa: '[kɐ̃ˈsadu]', sl: 'adjektiivi', huom: 'nainen {cansada}; perusmuoto {cansar} = väsyttää' },
    'cansada': { fi: 'väsynyt (nainen)', aa: 'kã-SA-da', ipa: '[kɐ̃ˈsadɐ]', sl: 'adjektiivi', huom: 'mies {cansado}' },
    'brasileiro': { fi: 'brasilialainen (mies)', aa: 'bra-zi-LEI-ru', ipa: '[bɾaziˈlejɾu]', sl: 'adjektiivi, substantiivi', huom: 'nainen {brasileira}' },
    'brasileira': { fi: 'brasilialainen (nainen)', aa: 'bra-zi-LEI-ra', ipa: '[bɾaziˈlejɾɐ]', sl: 'adjektiivi, substantiivi', huom: 'mies {brasileiro}' },
    'fria': { fi: 'kylmä (feminiinisanan edellä)', aa: 'FRI-a', ipa: '[ˈfɾiɐ]', sl: 'adjektiivi', huom: 'maskuliini {frio}' },
    'sauna': { fi: 'sauna', aa: 'SAU-na', ipa: '[ˈsawnɐ]', sl: 'substantiivi, feminiini', huom: 'suomalainen sana' },
    'esquisito': { fi: 'outo, kummallinen', aa: 'es-ki-ZI-tu', ipa: '[eskiˈzitu]', sl: 'adjektiivi', huom: 'ANSA! Espanjan exquisito = herkullinen. Portugaliksi herkullinen = {gostoso}' },
    'esquisita': { fi: 'outo (feminiinisanan edellä)', aa: 'es-ki-ZI-ta', ipa: '[eskiˈzitɐ]', sl: 'adjektiivi', huom: 'maskuliini {esquisito}. Älä käytä ruoasta tai saunasta kehuna!' },
    'estranho': { fi: 'outo, vieras', aa: 'es-TRÃ-nju', ipa: '[esˈtɾɐ̃ɲu]', sl: 'adjektiivi', huom: 'sama merkitys kuin {esquisito}' },
    'gostoso': { fi: 'herkullinen, nautinnollinen', aa: 'gos-TO-zu', ipa: '[ɡosˈtozu]', sl: 'adjektiivi', huom: 'nainen {gostosa}. Käy ruoasta, saunasta, kylvystä, kahvista' },
    'gostosa': { fi: 'herkullinen, nautinnollinen (feminiinisanan edellä)', aa: 'gos-TO-za', ipa: '[ɡosˈtɔzɐ]', sl: 'adjektiivi', huom: 'maskuliini {gostoso}' },
    'fala': { fi: 'puhuu; puhu!', aa: 'FA-la', ipa: '[ˈfalɐ]', sl: 'verbi {falar}', huom: 'perusmuoto {falar}' },
    'falo': { fi: '(minä) puhun', aa: 'FA-lu', ipa: '[ˈfalu]', sl: 'verbi {falar}' },
    'un': { fi: '(espanjaa) yksi', aa: 'UN', ipa: '[un]', sl: 'espanjan artikkeli', huom: 'portugaliksi {um}' },
    'poco': { kieli: 'es', fi: '(espanjaa) vähän', aa: 'PO-ko', ipa: '[ˈpoko]', sl: 'espanjan sana', huom: 'portugaliksi {pouco}' },
    'un poco': { kieli: 'es', fi: '(espanjaa) vähän', aa: 'un PO-ko', ipa: '[un ˈpoko]', sl: 'espanjan ilmaus', huom: 'VÄÄRIN portugaliksi! Oikein on {um pouco}' },
    'pouco': { fi: 'vähän', aa: 'POU-ku', ipa: '[ˈpowku]', sl: 'adverbi, pronomini', huom: 'ei {poco}!' },
    'um pouco': { fi: 'vähän', aa: 'Ũ POU-ku', ipa: '[ũ ˈpowku]', sl: 'ilmaus', huom: '{falo} {um pouco} = puhun vähän' },
    'estudo': { fi: '(minä) opiskelen', aa: 'es-TU-du', ipa: '[esˈtudu]', sl: 'verbi {estudar}' },
    'estuda': { fi: 'opiskelee; opiskelet', aa: 'es-TU-da', ipa: '[esˈtudɐ]', sl: 'verbi {estudar}' },
    'sua': { fi: 'sinun; hänen (feminiinisanan edellä)', aa: 'SU-a', ipa: '[ˈsuɐ]', sl: 'omistuspronomini', huom: 'maskuliini {seu}' },
    'no': { fi: '-ssa, -ssä (maskuliinisanan edellä)', aa: 'nu', ipa: '[nu]', sl: 'prepositio + artikkeli', huom: '{em} + {o}' },
    'simpático': { fi: 'sympaattinen, mukava (mies)', aa: 'sĩ-PA-tsi-ku', ipa: '[sĩˈpatʃiku]', sl: 'adjektiivi', huom: 'nainen {simpática}' },
    'simpática': { fi: 'sympaattinen, mukava (nainen)', aa: 'sĩ-PA-tsi-ka', ipa: '[sĩˈpatʃikɐ]', sl: 'adjektiivi', huom: 'mies {simpático}' },
    'geólogo': { fi: 'geologi (mies)', aa: 'zhe-O-lo-gu', ipa: '[ʒeˈɔloɡu]', sl: 'substantiivi, maskuliini', huom: 'nainen {geóloga}' },
    'geóloga': { fi: 'geologi (nainen)', aa: 'zhe-O-lo-ga', ipa: '[ʒeˈɔloɡɐ]', sl: 'substantiivi, feminiini', huom: 'mies {geólogo}' },
    'namorada': { fi: 'tyttöystävä', aa: 'na-mo-RA-da', ipa: '[namoˈɾadɐ]', sl: 'substantiivi, feminiini', huom: 'poikaystävä {namorado}' },
    'ela': { fi: 'hän (nainen)', aa: 'E-la', ipa: '[ˈɛlɐ]', sl: 'persoonapronomini', huom: 'mies {ele}' },
    'horizonte': { fi: 'horisontti', aa: 'o-ri-ZÕ-tsi', ipa: '[oɾiˈzõtʃi]', sl: 'substantiivi, maskuliini' },
    'bonita': { fi: 'kaunis (feminiinisanan edellä)', aa: 'bo-NI-ta', ipa: '[boˈnitɐ]', sl: 'adjektiivi', huom: 'maskuliini {bonito}' },
    'vou': { fi: '(minä) menen', aa: 'VOU', ipa: '[vow]', sl: 'verbi {ir}' },
    'pela': { fi: 'kautta; -sta (feminiinisanan edellä)', aa: 'PE-la', ipa: '[ˈpelɐ]', sl: 'prepositio + artikkeli', huom: '{por} + {a}' },
    'pelo': { fi: 'kautta; -sta (maskuliinisanan edellä)', aa: 'PE-lu', ipa: '[ˈpelu]', sl: 'prepositio + artikkeli', huom: '{por} + {o}' },
    'ajuda': { fi: 'apu', aa: 'a-ZHU-da', ipa: '[aˈʒudɐ]', sl: 'substantiivi, feminiini', huom: 'verbi {ajudar}' },
    'guitarra': { fi: 'kitara', aa: 'gi-TA-ha', ipa: '[ɡiˈtahɐ]', sl: 'substantiivi, feminiini' },
    'professora': { fi: 'opettaja, professori (nainen)', aa: 'pro-fe-SO-ra', ipa: '[pɾofeˈsoɾɐ]', sl: 'substantiivi, feminiini', huom: 'mies {professor}' },
    'esta': { fi: 'tämä (feminiinisanan edellä)', aa: 'ES-ta', ipa: '[ˈɛstɐ]', sl: 'osoitepronomini', huom: 'maskuliini {este}' },
    'língua': { fi: 'kieli', aa: 'LĨ-gua', ipa: '[ˈlĩɡwɐ]', sl: 'substantiivi, feminiini' },
    // maat ja kansalaisuudet
    'portugal': { fi: 'Portugali', aa: 'poh-tu-GAU', ipa: '[pohtuˈɡaw]', sl: 'maan nimi, maskuliini' },
    'espanha': { fi: 'Espanja', aa: 'es-PÃ-nja', ipa: '[esˈpɐ̃ɲɐ]', sl: 'maan nimi, feminiini' },
    'suécia': { fi: 'Ruotsi', aa: 'su-E-sia', ipa: '[suˈɛsjɐ]', sl: 'maan nimi, feminiini' },
    'alemanha': { fi: 'Saksa', aa: 'a-le-MÃ-nja', ipa: '[aleˈmɐ̃ɲɐ]', sl: 'maan nimi, feminiini' },
    'frança': { fi: 'Ranska', aa: 'FRÃ-sa', ipa: '[ˈfɾɐ̃sɐ]', sl: 'maan nimi, feminiini' },
    'rússia': { fi: 'Venäjä', aa: 'HU-sia', ipa: '[ˈhusjɐ]', sl: 'maan nimi, feminiini' },
    'argentina': { fi: 'Argentiina', aa: 'ah-zhẽ-TSI-na', ipa: '[ahʒẽˈtʃinɐ]', sl: 'maan nimi, feminiini' },
    'finlandês': { fi: 'suomalainen (mies); suomen kieli', aa: 'fĩ-lã-DES', ipa: '[fĩlɐ̃ˈdes]', sl: 'adjektiivi, substantiivi, maskuliini', huom: 'nainen {finlandesa}' },
    'finlandesa': { fi: 'suomalainen (nainen)', aa: 'fĩ-lã-DE-za', ipa: '[fĩlɐ̃ˈdezɐ]', sl: 'adjektiivi', huom: 'mies {finlandês}' },
    'espanhol': { fi: 'espanjalainen (mies); espanjan kieli', aa: 'es-pã-NJOU', ipa: '[espɐ̃ˈɲɔw]', sl: 'adjektiivi, substantiivi, maskuliini', huom: 'nainen {espanhola}' },
    'espanhola': { fi: 'espanjalainen (nainen)', aa: 'es-pã-NJO-la', ipa: '[espɐ̃ˈɲɔlɐ]', sl: 'adjektiivi', huom: 'mies {espanhol}' },
    'francesa': { fi: 'ranskalainen (nainen)', aa: 'frã-SE-za', ipa: '[fɾɐ̃ˈsezɐ]', sl: 'adjektiivi', huom: 'mies {francês}' },
    'alemã': { fi: 'saksalainen (nainen)', aa: 'a-le-MÃ', ipa: '[aleˈmɐ̃]', sl: 'adjektiivi', huom: 'mies {alemão}' },
    'sueco': { fi: 'ruotsalainen (mies); ruotsin kieli', aa: 'su-E-ku', ipa: '[suˈɛku]', sl: 'adjektiivi, substantiivi, maskuliini', huom: 'nainen sueca' },
    // ilmaukset
    'de noite': { fi: 'illalla, yöllä', aa: 'di NOI-tsi', ipa: '[dʒi ˈnojtʃi]', sl: 'ilmaus' },
    'com frio': { fi: 'kylmissään', aa: 'kõ FRIU', ipa: '[kõ fɾiw]', sl: 'ilmaus', huom: '{estar} {com frio} = palella, olla kylmä' },
    'estou com frio': { fi: 'minulla on kylmä', aa: 'es-TOU kõ FRIU', ipa: '[esˈtow kõ fɾiw]', sl: 'ilmaus' },
    'é verdade': { fi: 'se on totta', aa: 'E veh-DA-di', ipa: '[ɛ vehˈdadʒi]', sl: 'ilmaus' },
    'de nada': { fi: 'ei kestä', aa: 'di NA-da', ipa: '[dʒi ˈnadɐ]', sl: 'kohteliaisuus', huom: 'kirjaimellisesti ”tyhjästä”' },
    'obrigado por tudo': { fi: 'kiitos kaikesta', aa: 'o-bri-GA-du poh TU-du', ipa: '[obɾiˈɡadu poh ˈtudu]', sl: 'kohteliaisuus', huom: 'nainen sanoo {obrigada} por tudo' },
    'por tudo': { fi: 'kaikesta', aa: 'poh TU-du', ipa: '[poh ˈtudu]', sl: 'ilmaus' },
    'por aqui': { fi: 'tätä kautta', aa: 'po-ra-KI', ipa: '[poɾaˈki]', sl: 'ilmaus' },
    'para que': { fi: 'mitä varten', aa: 'PA-ra ki', ipa: '[ˈpaɾɐ ki]', sl: 'kysymys' },
    'de lá': { fi: 'sieltä; siellä oleva', aa: 'di LA', ipa: '[dʒi la]', sl: 'ilmaus' },
    'sueca': { fi: 'ruotsalainen (nainen)', aa: 'su-E-ka', ipa: '[suˈɛkɐ]', sl: 'adjektiivi', huom: 'mies {sueco}' },
    'kuusamo': { kieli: 'fi', fi: 'Kuusamo (kaupunki Pohjois-Suomessa)', aa: 'KUU-sa-mo', ipa: '[ˈkuːsɑmo]', sl: 'paikan nimi', huom: 'suomalainen nimi, ei portugalin ääntämissääntöjä' }
  // </SANAT>
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kertoa itsestäsi: mistä olet kotoisin, mikä kansalainen olet ja mitä kieliä puhut.</li>
  <li>Osaat valita verbien <span class="pt">ser</span> ja <span class="pt">estar</span> välillä.</li>
  <li>Osaat taivuttaa adjektiivin miehelle ja naiselle sopivaksi.</li>
  <li>Osaat käyttää sanoja <span class="pt">por</span> ja <span class="pt">para</span> sekä lukea kirjaimet g ja j oikein.</li>
</ul>
<p data-paikka="kallio-hameentie-ilta">Helsinki, Sörnäinen, ilta. Maia löytää kuvan Kuusamon kenttätyöstä. Siellä, kivien ja saunan keskellä, Jay ja Maia rakastuivat. Jay kertoo itsestään portugaliksi.</p>

<section class="osio">
  <h2>Dialogi: A foto de Kuusamo</h2>
  <p class="ohje">Kuuntele ensin koko dialogi ilman suomennoksia. Jay tekee kaksi espanjalaista virhettä, ja Maia korjaa ne. Löydätkö ne? Lue sitten Jayn repliikit ääneen roolileikissä.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Helsinki, illalla. Jay ja Maia ovat olohuoneessa.">Helsinque, de noite. Jay e Maia estão na sala.</p>
    <p class="s" data-h="kertoja" data-fi="Maialla on kuva Kuusamosta.">Maia tem uma foto de Kuusamo.</p>
    <p class="s" data-h="maia" data-fi="Katso, Jay! Kuva on Kuusamosta.">Olha, Jay! A foto é de Kuusamo.</p>
    <p class="s" data-h="jay" data-fi="Voi että! Olen kuvassa todella väsynyt.">Nossa! Eu estou muito cansado na foto.</p>
    <p class="s" data-h="maia" data-fi="Mutta olet onnellinen! Ja minulla on kylmä.">Mas você está feliz! E eu estou com frio.</p>
    <p class="s" data-h="jay" data-fi="Sinä olet brasilialainen. Sinulle Suomi on todella kylmä.">Você é brasileira. Para você, a Finlândia é muito fria.</p>
    <p class="s" data-h="maia" data-fi="On totta! Mutta sauna siellä on todella hyvä.">É verdade! Mas a sauna de lá é muito boa.</p>
    <p class="s" data-h="jay" data-fi="Kyllä! Sauna on ”esquisita”! (Jay tarkoittaa: herkullinen.)">Sim! A sauna é esquisita!</p>
    <p class="s" data-h="maia" data-fi="Esquisita? Ei, Jay! Portugaliksi ”esquisito” on ”outo”. Hyvä sauna on ”gostosa”.">Esquisita? Não, Jay! Em português, “esquisito” é “estranho”. Sauna boa é “gostosa”.</p>
    <p class="s" data-h="jay" data-fi="Ahaa, selvä. Sauna on gostosa.">Ah, tá. A sauna é gostosa.</p>
    <p class="s" data-h="maia" data-fi="Hyvä! Nyt puhu itsestäsi, Jay. Mistä sinä olet kotoisin?">Muito bem! Agora fala de você, Jay. Você é de onde?</p>
    <p class="s" data-h="jay" data-fi="Olen suomalainen. Puhun suomea, englantia ja espanjaa.">Eu sou finlandês. Eu falo finlandês, inglês e espanhol.</p>
    <p class="s" data-h="maia" data-fi="Entä portugalia?">E português?</p>
    <p class="s" data-h="jay" data-fi="Puhun portugalia ”un poco”.">Eu falo português un poco.</p>
    <p class="s" data-h="maia" data-fi="Um pouco! Portugaliksi se on ”um pouco”, ei ”un poco”.">Um pouco! Em português é “um pouco”, não “un poco”.</p>
    <p class="s" data-h="jay" data-fi="Um pouco. Opiskelen portugalia, jotta voin puhua perheesi kanssa jouluna.">Um pouco. Eu estudo português para falar com a sua família no Natal.</p>
    <p class="s" data-h="maia" data-fi="Kiva! Äitini on hyvin sympaattinen.">Que legal! Minha mãe é muito simpática.</p>
    <p class="s" data-h="jay" data-fi="Minä olen geologi ja sinä olet geologi. Me olemme kollegoita.">Eu sou geólogo e você é geóloga. A gente é colega.</p>
    <p class="s" data-h="maia" data-fi="Kollega ja tyttöystävä, vai mitä?">Colega e namorada, né?</p>
    <p class="s" data-h="jay" data-fi="Kyllä! Kiitos kaikesta, Maia.">Sim! Obrigado por tudo, Maia.</p>
    <p class="s" data-h="maia" data-fi="Ei kestä. Kuva on sinulle.">De nada. A foto é para você.</p>
    <p class="s" data-h="kertoja" data-fi="Jay hymyilee. Hän on väsynyt, mutta onnellinen.">Jay sorri. Ele está cansado, mas está feliz.</p>
  </div>
</section>

<section class="osio" data-paikka="kuusamo">
  <h2>Vanha viestiketju: Kuusamo</h2>
  <p class="ohje">Kuvan nähtyään Maia avaa puhelimestaan vanhan viestiketjun Kuusamon kenttätyön ajalta. Silloin he olivat vasta kollegoita. Napauta viestiä: kuulet sen ja näet suomennoksen. Etsi jokaisesta viestistä <span class="pt">ser</span> tai <span class="pt">estar</span>.</p>
  <div class="chat" data-otsikko="Jay (RRC)" data-paiva="Kuusamo, setembro" data-mina="maia">
    <p data-h="jay" data-aika="07:12" data-fi="Huomenta, Maia! Voitko hyvin?">Bom dia, Maia! Você está bem?</p>
    <p data-h="maia" data-aika="07:15" data-fi="Huomenta! Minulla on kylmä. Suomi on todella kylmä!">Bom dia! Estou com frio. A Finlândia é muito fria!</p>
    <p data-h="jay" data-aika="07:16" data-fi="Tänään menemme töihin kahdeksalta.">Hoje a gente vai para o trabalho às oito.</p>
    <p data-h="maia" data-aika="18:40" data-fi="Olen tosi väsynyt. Entä sinä?">Estou muito cansada. E você?</p>
    <p data-h="jay" data-aika="18:42" data-fi="Minäkin olen väsynyt. Mutta sauna on kuuma!">Estou cansado também. Mas a sauna está quente!</p>
    <p data-h="maia" data-aika="18:43" data-fi="Sauna? Nytkö?">Sauna? Agora?</p>
    <p data-h="jay" data-aika="18:44" data-fi="Kyllä! Kuusamon sauna on todella hyvä.">Sim! A sauna de Kuusamo é muito boa.</p>
    <p data-h="maia" data-aika="21:05" data-fi="Sinä olet tosi mukava, Jay.">Você é muito simpático, Jay.</p>
    <p data-h="jay" data-aika="21:06" data-fi="Ja sinä olet tosi kaunis.">E você é muito bonita.</p>
    <p data-h="maia" data-aika="21:07" data-fi="Hyvää yötä, kollega.">Boa noite, colega.</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto: maat, kansalaisuudet ja kielet</h2>
  <p>Maiden nimet kirjoitetaan isolla alkukirjaimella. Kansalaisuudet ja kielet kirjoitetaan portugaliksi pienellä, myös lauseen keskellä.</p>
  <div class="teema" data-otsikko="Maat" data-sanat="finlândia,brasil,portugal,espanha,suécia,alemanha,frança,rússia"></div>
  <div class="teema" data-otsikko="Kielet (sama sana kuin miehen kansalaisuus)" data-sanat="finlandês,português,espanhol,inglês,sueco,alemão,francês,russo"></div>
  <div class="teema" data-otsikko="Ihmisen tila ja ominaisuudet" data-sanat="cansado,feliz,frio,quente,simpático,gostoso,bonito,grande,pequeno,novo"></div>
  <div class="teema" data-otsikko="Ammatit ja muut ihmiset" data-sanat="geólogo,professor,colega,namorado,amigo"></div>
</section>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>Kielioppi</h2>

  <h3>1. Adjektiivi mukautuu sukuun</h3>
  <p><b>Adjektiivi</b> on ominaisuussana, esimerkiksi ”väsynyt”, ”kylmä” tai ”suomalainen”. Portugalissa adjektiivi muuttuu sen mukaan, onko sana, jota se kuvaa, maskuliini vai feminiini (<b>suku</b>). Suomessa näin ei ole: ”väsynyt mies” ja ”väsynyt nainen” ovat samanlaiset. Portugalissa mies on <span class="pt">cansado</span> ja nainen <span class="pt">cansada</span>.</p>
  <table class="taivutus">
    <tr><th>sääntö</th><th>maskuliini</th><th>feminiini</th></tr>
    <tr><td>-o muuttuu -a:ksi</td><td><span class="pt">cansado</span></td><td><span class="pt">cansada</span></td></tr>
    <tr><td></td><td><span class="pt">simpático</span></td><td><span class="pt">simpática</span></td></tr>
    <tr><td>-e, -l, -z: ei muutosta</td><td><span class="pt">grande</span></td><td><span class="pt">grande</span></td></tr>
    <tr><td></td><td><span class="pt">legal</span></td><td><span class="pt">legal</span></td></tr>
    <tr><td></td><td><span class="pt">feliz</span></td><td><span class="pt">feliz</span></td></tr>
    <tr><td>kansalaisuus: konsonantin perään -a</td><td><span class="pt">finlandês</span></td><td><span class="pt">finlandesa</span></td></tr>
    <tr><td></td><td><span class="pt">espanhol</span></td><td><span class="pt">espanhola</span></td></tr>
    <tr><td></td><td><span class="pt">francês</span></td><td><span class="pt">francesa</span></td></tr>
    <tr><td>-ão muuttuu -ã:ksi</td><td><span class="pt">alemão</span></td><td><span class="pt">alemã</span></td></tr>
    <tr><td>-eiro muuttuu -eira:ksi</td><td><span class="pt">brasileiro</span></td><td><span class="pt">brasileira</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Jay on suomalainen.">O Jay é finlandês.</li>
    <li class="s" data-fi="Maia on brasilialainen.">A Maia é brasileira.</li>
    <li class="s" data-fi="Jay on väsynyt.">O Jay está cansado.</li>
    <li class="s" data-fi="Maia on väsynyt.">A Maia está cansada.</li>
    <li class="s" data-fi="Jay on onnellinen.">O Jay está feliz.</li>
    <li class="s" data-fi="Maia on onnellinen.">A Maia está feliz.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> kaksi asiaa muistaa helposti. Ensiksi: <span class="pt">cansado</span> on miehen sana ja <span class="pt">cansada</span> naisen, aivan kuten <span class="pt">obrigado</span> ja <span class="pt">obrigada</span>. Toiseksi: adjektiivi tulee yleensä <b>substantiivin jälkeen</b>, ei sen edelle kuten suomessa: <span class="pt">um geólogo finlandês</span> (suomalainen geologi), <span class="pt">uma foto bonita</span> (kaunis kuva).</p>
  </div>
  <p><b>Espanjasta apua:</b> samat säännöt ja sama sanajärjestys kuin espanjassa (<span class="pt">cansado</span> = cansado, <span class="pt">simpático</span> = simpático). Erona kansalaisuuksien kirjoitusasu: <span class="pt">finlandês</span> = finlandés, <span class="pt">espanhol</span> = español, <span class="pt">brasileira</span> = brasileña.</p>

  <h3>2. Ser vai estar?</h3>
  <p>Suomessa on yksi verbi ”olla”. Portugalissa on kaksi: <span class="pt">ser</span> ja <span class="pt">estar</span>. Espanjassa on sama pari, joten sinulle idea on tuttu. Valinta tehdään sen mukaan, mitä sanotaan.</p>
  <table class="taivutus">
    <tr><th>henkilö</th><th>ser</th><th>estar</th></tr>
    <tr><td>eu</td><td><span class="pt">sou</span></td><td><span class="pt">estou</span> (puhekielessä <span class="pt">tô</span>)</td></tr>
    <tr><td>você, ele, ela, a gente</td><td><span class="pt">é</span></td><td><span class="pt">está</span> (puhekielessä <span class="pt">tá</span>)</td></tr>
    <tr><td>nós</td><td><span class="pt">somos</span></td><td><span class="pt">estamos</span></td></tr>
    <tr><td>vocês, eles, elas</td><td><span class="pt">são</span></td><td><span class="pt">estão</span></td></tr>
  </table>
  <div class="saanto">
    <h3>Ser: kuka tai mikä joku on</h3>
    <p>Käytä <span class="pt">ser</span>-verbiä, kun kerrot pysyvän tai pitkäaikaisen asian: kuka olet, mistä olet kotoisin, mikä on ammattisi, millainen joku tai jokin on luonteeltaan tai ominaisuuksiltaan.</p>
    <ul class="esim">
      <li class="s" data-fi="Olen geologi.">Eu sou geólogo.</li>
      <li class="s" data-fi="Maia on Belo Horizontesta.">A Maia é de Belo Horizonte.</li>
      <li class="s" data-fi="Suomi on kylmä (maa).">A Finlândia é fria.</li>
      <li class="s" data-fi="Marta on sympaattinen.">A Marta é simpática.</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>Estar: missä ja miltä nyt</h3>
    <p>Käytä <span class="pt">estar</span>-verbiä, kun kerrot paikan tai tilan, joka voi muuttua: missä joku on, miltä hänestä tuntuu nyt, millainen tilanne on tällä hetkellä.</p>
    <ul class="esim">
      <li class="s" data-fi="Jay on Helsingissä.">O Jay está em Helsinque.</li>
      <li class="s" data-fi="Olen väsynyt.">Eu estou cansado.</li>
      <li class="s" data-fi="Tänään on kylmä.">Hoje está frio.</li>
      <li class="s" data-fi="Maialla on kylmä.">A Maia está com frio.</li>
    </ul>
  </div>
  <p>Sama adjektiivi voi saada eri merkityksen verbin mukaan:</p>
  <ul class="esim">
    <li class="s" data-fi="Maia on kaunis (hän on kaunis ihminen).">A Maia é bonita.</li>
    <li class="s" data-fi="Maia on kaunis tänään (hän näyttää kauniilta nyt).">A Maia está bonita.</li>
    <li class="s" data-fi="Jay on onnellinen ihminen.">O Jay é feliz.</li>
    <li class="s" data-fi="Jay on nyt onnellinen.">O Jay está feliz.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> kysy itseltäsi, onko kyse siitä <b>kuka tai mikä</b> joku on (<span class="pt">ser</span>) vai siitä <b>missä tai miltä nyt</b> (<span class="pt">estar</span>). Tunne, olotila ja sijainti ovat lähes aina <span class="pt">estar</span>. Kansalaisuus, ammatti ja kotipaikka ovat aina <span class="pt">ser</span>.</p>
  </div>
  <div class="huomio">
    <p><b>Brasilian puhekieli:</b> <span class="pt">estou</span> lyhenee usein muotoon <span class="pt">tô</span> ja <span class="pt">está</span> muotoon <span class="pt">tá</span>. Arkisessa puheessa <span class="pt">Tá!</span> tarkoittaa myös ”selvä!” tai ”okei!”. Kirjoitetussa tekstissä käytetään muotoa <span class="pt">está</span>.</p>
  </div>

  <h3>3. Por ja para</h3>
  <p>Molemmat sanat tarkoittavat suunnilleen ”-lle, kautta, varten”, mutta niillä on eri tehtävät. Suomessa tehtävät hoituvat sijapäätteillä. Espanjassa sanat <span class="pt">por</span> ja <span class="pt">para</span> toimivat lähes samalla tavalla kuin portugalissa.</p>
  <table class="taivutus">
    <tr><th>sana</th><th>käyttö</th><th>esimerkki</th></tr>
    <tr><td><span class="pt">para</span></td><td>suunta, määränpää</td><td><span class="pt">Vou para Kuusamo.</span></td></tr>
    <tr><td><span class="pt">para</span></td><td>vastaanottaja</td><td><span class="pt">A foto é para você.</span></td></tr>
    <tr><td><span class="pt">para</span></td><td>tarkoitus, jotta (+ perusmuoto)</td><td><span class="pt">Estudo para falar.</span></td></tr>
    <tr><td><span class="pt">por</span></td><td>syy, kiitoksen aihe</td><td><span class="pt">Obrigado por tudo.</span></td></tr>
    <tr><td><span class="pt">por</span></td><td>kautta, läpi</td><td><span class="pt">A gente vai por aqui.</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Menen Kuusamoon.">Eu vou para Kuusamo.</li>
    <li class="s" data-fi="Tämä kahvi on sinulle.">Este café é para você.</li>
    <li class="s" data-fi="Opiskelen, jotta voin puhua portugalia.">Eu estudo para falar português.</li>
    <li class="s" data-fi="Kiitos avusta!">Obrigada pela ajuda!</li>
    <li class="s" data-fi="Mennään tätä kautta.">A gente vai por aqui.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> <span class="pt">por</span> yhtyy artikkeliin samoin kuin <span class="pt">em</span>: <span class="pt">por + a = pela</span>, <span class="pt">por + o = pelo</span>. Siksi sanotaan <span class="pt">pela ajuda</span> (avusta). Puhekielessä <span class="pt">para</span> lyhenee muotoon <span class="pt">pra</span> ja <span class="pt">para o</span> muotoon <span class="pt">pro</span>.</p>
  </div>
</section>

<section class="osio">
  <h2>Ääntäminen: g ja j</h2>
  <p>Kirjain <b>j</b> äännetään aina zh (soinnillinen sh: sano sh ja anna äänihuulten värähdellä). Kirjain <b>g</b> äännetään kahdella tavalla sen mukaan, mikä kirjain seuraa.</p>
  <div class="saanto">
    <h3>g ennen a, o, u tai konsonanttia on kova g</h3>
    <ul class="esim">
      <li class="s">gato</li>
      <li class="s">amigo</li>
      <li class="s">grande</li>
      <li class="s">agora</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>g ennen e:tä ja i:tä on zh</h3>
    <ul class="esim">
      <li class="s">gente</li>
      <li class="s">gelo</li>
      <li class="s">geólogo</li>
      <li class="s">Argentina</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>gu ennen e:tä ja i:tä: u on äänetön, g on kova</h3>
    <p>Jos haluat kovan g:n e:n tai i:n edellä, kirjoitetaan <b>gu</b>. Silloin u ei kuulu.</p>
    <ul class="esim">
      <li class="s">guitarra</li>
      <li class="s">seguir</li>
      <li class="s">alguém</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>j on aina zh</h3>
    <ul class="esim">
      <li class="s">já</li>
      <li class="s">hoje</li>
      <li class="s">jogo</li>
      <li class="s">jovem</li>
    </ul>
  </div>
  <div class="huomio">
    <p><b>Espanjan vaikutus:</b> espanjassa g (ennen e, i) ja j kuuluvat karhealta h:lta (jota). Portugalissa ne ovat pehmeitä zh-ääniä. Jos sanot <span class="pt">hoje</span> muodossa ”ho-he”, Maia kuulee espanjan. Sano ”O-zhi”.</p>
  </div>
  <p>Vertaa: <span class="pt">jogo</span> (peli, ”ZHO-gu”) ja <span class="pt">gelo</span> (jää, ”ZHE-lu”) alkavat samalla äänellä, mutta kirjoitetaan eri tavalla.</p>
</section>

<aside class="kulttuuri" data-paikka="kuusamo">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Kuusamo ja sauna</h3>
  <figure class="kuva" data-kuva="kuusamo"></figure>
  <p>Kuusamo on kaupunki Koillismaalla Pohjois-Suomessa, lähellä Venäjän rajaa. Alueella on Oulangan kansallispuisto ja Rukan hiihtokeskus. Geologille Kuusamo on kiinnostava, koska kallioperä on miljardeja vuosia vanhaa. Alueella on etsitty ja tutkittu esimerkiksi kultaa ja kobolttia.</p>
  <p>Jayn ja Maian kenttätyössä kuljettiin kallioilla, otettiin kivinäytteitä ja kirjattiin ylös, mitä kivet kertovat. Illalla lämmitettiin sauna. Maialle se oli aluksi outo kokemus: Brasiliassa kuumuus tulee auringosta, ei kuumista kivistä.</p>
  <p>Sana <span class="pt">sauna</span> on suomalainen, ja se on levinnyt melkein sellaisenaan moniin kieliin, myös portugaliin. Suomalainen saunakulttuuri otettiin UNESCOn aineettoman kulttuuriperinnön luetteloon vuonna 2020. Suomessa arvioidaan olevan noin kolme miljoonaa saunaa.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: viestiketju</h3>
    <p class="ohje">Katso Maian ja Jayn vanhaa viestiketjua Kuusamosta (yllä). Mikä verbi viestissä on?</p>
    <div class="valinta" data-oikea="é">
      <p class="kysymys">A Finlândia ___ muito fria.</p>
      <div class="vaihtoehdot"><button type="button">é</button><button type="button">está</button></div>
    </div>
    <div class="valinta" data-oikea="estou">
      <p class="kysymys">___ muito cansada. (Maia)</p>
      <div class="vaihtoehdot"><button type="button">sou</button><button type="button">estou</button></div>
    </div>
    <div class="valinta" data-oikea="está">
      <p class="kysymys">A sauna ___ quente!</p>
      <div class="vaihtoehdot"><button type="button">é</button><button type="button">está</button></div>
    </div>
    <div class="valinta" data-oikea="é">
      <p class="kysymys">Você ___ muito simpático, Jay.</p>
      <div class="vaihtoehdot"><button type="button">é</button><button type="button">está</button></div>
    </div>
    <p class="ohje">Muistisääntö: <span class="pt">ser</span> kertoo, millainen jokin on aina (Suomi on kylmä maa, Jay on mukava), <span class="pt">estar</span> kertoo tilan juuri nyt (väsynyt tänään, sauna kuuma nyt).</p>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Ser vai estar?</h3>
    <p class="ohje">Kirjoita oikea muoto: <span class="pt">sou</span>, <span class="pt">é</span>, <span class="pt">estou</span>, <span class="pt">está</span> tai <span class="pt">estamos</span>.</p>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="sou"></span> finlandês.</p>
      <p>A Maia <span class="aukko" data-oikea="é"></span> brasileira.</p>
      <p>Hoje <span class="aukko" data-oikea="está|tá"></span> frio em Helsinque.</p>
      <p>O Jay <span class="aukko" data-oikea="está|tá"></span> cansado hoje.</p>
      <p>Eu <span class="aukko" data-oikea="estou|tô"></span> muito feliz!</p>
      <p>Nós <span class="aukko" data-oikea="estamos"></span> em Helsinque.</p>
      <p>A Finlândia <span class="aukko" data-oikea="é"></span> um país bonito.</p>
      <p>Cadê a Maia? Ela <span class="aukko" data-oikea="está|tá"></span> na cozinha.</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Miehen vai naisen muoto?</h3>
    <p class="ohje">Valitse adjektiivin oikea muoto.</p>
    <div class="valinta" data-oikea="cansada">
      <p class="kysymys">A Marta está ___.</p>
      <div class="vaihtoehdot"><button type="button">cansado</button><button type="button">cansada</button></div>
    </div>
    <div class="valinta" data-oikea="brasileiro">
      <p class="kysymys">O Walker é ___.</p>
      <div class="vaihtoehdot"><button type="button">brasileiro</button><button type="button">brasileira</button></div>
    </div>
    <div class="valinta" data-oikea="francesa">
      <p class="kysymys">A professora é ___.</p>
      <div class="vaihtoehdot"><button type="button">francês</button><button type="button">francesa</button></div>
    </div>
    <div class="valinta" data-oikea="feliz">
      <p class="kysymys">A Maia está ___.</p>
      <div class="vaihtoehdot"><button type="button">feliza</button><button type="button">feliz</button></div>
    </div>
    <div class="valinta" data-oikea="alemã">
      <p class="kysymys">A geóloga é ___.</p>
      <div class="vaihtoehdot"><button type="button">alemão</button><button type="button">alemã</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Yhdistä maa ja kieli</h3>
    <p class="ohje">Paina portugalinkielistä sanaa ja sitten sen suomennosta.</p>
    <ul class="yhdista">
      <li data-pari="Suomi">a Finlândia</li>
      <li data-pari="Brasilia">o Brasil</li>
      <li data-pari="Espanja">a Espanha</li>
      <li data-pari="Saksa">a Alemanha</li>
      <li data-pari="Ranska">a França</li>
      <li data-pari="Ruotsi">a Suécia</li>
      <li data-pari="Venäjä">a Rússia</li>
      <li data-pari="Portugali">Portugal</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Kuuntele ja valitse</h3>
    <p class="ohje">Paina ▶ ja valitse g- tai j-äänteen mukaan oikea sana.</p>
    <div class="valinta" data-kuuntele="gelo" data-oikea="gelo">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">gato</button><button type="button">gelo</button></div>
    </div>
    <div class="valinta" data-kuuntele="amigo" data-oikea="amigo">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">amigo</button><button type="button">gente</button></div>
    </div>
    <div class="valinta" data-kuuntele="jogo" data-oikea="jogo">
      <p class="kysymys">Kumpi sana?</p>
      <div class="vaihtoehdot"><button type="button">jogo</button><button type="button">jovem</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause. Tarkista aksentit.</p>
    <div class="sanelu" data-puhu="Eu sou finlandês."></div>
    <div class="sanelu" data-puhu="A Maia é brasileira."></div>
    <div class="sanelu" data-puhu="Hoje está frio."></div>
    <div class="sanelu" data-puhu="Eu falo um pouco de português."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Por vai para?</h3>
    <p class="ohje">Valitse oikea sana.</p>
    <div class="valinta" data-oikea="para">
      <p class="kysymys">Este café é ___ você.</p>
      <div class="vaihtoehdot"><button type="button">por</button><button type="button">para</button></div>
    </div>
    <div class="valinta" data-oikea="por">
      <p class="kysymys">Obrigado ___ tudo!</p>
      <div class="vaihtoehdot"><button type="button">por</button><button type="button">para</button></div>
    </div>
    <div class="valinta" data-oikea="para">
      <p class="kysymys">Eu estudo português ___ falar com a família.</p>
      <div class="vaihtoehdot"><button type="button">por</button><button type="button">para</button></div>
    </div>
    <div class="valinta" data-oikea="para">
      <p class="kysymys">Eu vou ___ Kuusamo.</p>
      <div class="vaihtoehdot"><button type="button">por</button><button type="button">para</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Käännä portugaliksi</h3>
    <p class="ohje">Kirjoita oma käännöksesi ja avaa sitten malli.</p>
    <div class="kaanna"><p class="fi">Olen suomalainen ja puhun suomea.</p><p class="s" data-fi="Olen suomalainen ja puhun suomea.">Eu sou finlandês e falo finlandês.</p></div>
    <div class="kaanna"><p class="fi">Maia on väsynyt, mutta onnellinen.</p><p class="s" data-fi="Maia on väsynyt, mutta onnellinen.">A Maia está cansada, mas está feliz.</p></div>
    <div class="kaanna"><p class="fi">Tämä kuva on sinulle.</p><p class="s" data-fi="Tämä kuva on sinulle.">Esta foto é para você.</p></div>
    <div class="kaanna"><p class="fi">Kiitos kaikesta!</p><p class="s" data-fi="Kiitos kaikesta!">Obrigado por tudo!</p></div>
    <div class="kaanna"><p class="fi">Puhun portugalia vähän.</p><p class="s" data-fi="Puhun portugalia vähän.">Eu falo um pouco de português.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin. Vaihda tiedot omiksi.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Você é de onde?</summary>
      <p class="s" data-fi="Olen Suomesta.">Eu sou da Finlândia.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Que língua você fala?</summary>
      <p class="s" data-fi="Puhun suomea, englantia ja vähän portugalia.">Eu falo finlandês, inglês e um pouco de português.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você está cansado hoje?</summary>
      <p class="s" data-fi="Kyllä, olen väsynyt. / Ei, olen onnellinen!">Sim, estou cansado. / Não, estou feliz!</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Para que você estuda português?</summary>
      <p class="s" data-fi="Opiskelen portugalia, jotta voin puhua perheen kanssa.">Eu estudo português para falar com a família.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l06">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l06-viesti" lang="pt-BR">
      <div class="kal-yla"><b>Mensagem para a Maia</b><small>kirjoita viesti: kuka olet, miten voit tänään</small></div>
      <div class="kal-rivit">
        <label>Eu sou… <input name="sou" placeholder="Eu sou finlandês / finlandesa."></label>
        <label>Eu estou… <input name="estou" placeholder="Hoje eu estou cansado / feliz."></label>
        <label>Eu falo… <input name="falo" placeholder="Eu falo finlandês e um pouco de português."></label>
        <label>Para você… <input name="lopuksi" placeholder="Boa noite!"></label>
      </div>
    </div>
    <p>Kirjoita 5–6 lausetta itsestäsi portugaliksi: mistä olet, mitä kieliä puhut, oletko tänään väsynyt vai onnellinen ja miksi opiskelet portugalia. Käytä sekä verbiä <span class="pt">ser</span> että verbiä <span class="pt">estar</span> ja ainakin yhtä sanaa <span class="pt">para</span>. Sano teksti sitten ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Minä olen suomalainen.">Eu sou finlandês.</p>
      <p class="s" data-fi="Olen Helsingistä.">Eu sou de Helsinque.</p>
      <p class="s" data-fi="Puhun suomea, englantia ja espanjaa.">Eu falo finlandês, inglês e espanhol.</p>
      <p class="s" data-fi="Puhun portugalia vähän.">Eu falo um pouco de português.</p>
      <p class="s" data-fi="Tänään olen väsynyt, mutta olen onnellinen.">Hoje estou cansado, mas estou feliz.</p>
      <p class="s" data-fi="Opiskelen portugalia, jotta voin puhua Maian perheen kanssa.">Eu estudo português para falar com a família da Maia.</p>
    </details>
  </div>
</section>
`
});
