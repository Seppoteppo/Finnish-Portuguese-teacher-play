/* Jakso 15: Jouluaatto Maian vanhempien luona. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l15',
  lyhyt: '15',
  jakso: 'Jakso 15',
  otsikko: 'Koti ja juhla: epäsäännöllinen käskymuoto',
  lahde: 'Aihe: koti, huonekalut ja juhla · Kielioppi: käskymuodot (epäsäännölliset) · Ääntäminen: lauseen intonaatio',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi, kotona Belo Horizontessa' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, opettelee portugalia' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 1, kuvaus: 'Maian äiti, eläkkeellä oleva sosiaalityöntekijä; kerää joulukoristeita' },
    walker: { nimi: 'Walker', tyyppi: 'mies', vaihto: 1, kuvaus: 'Maian isä, eläkkeellä oleva professori' },
    anderson: { nimi: 'Anderson', tyyppi: 'mies', vaihto: 2, kuvaus: 'Maian veli; osaa laskea, kattaa pöydän ja auttaa mielellään' }
  },

  aiheet: ['koti', 'vapaa', 'ruoka', 'tunteet'],

  sanasto: ['sala', 'quarto', 'varanda', 'quintal', 'sofá', 'armário', 'estante', 'geladeira', 'fogão', 'tapete',
    'espelho', 'enfeite', 'pisca-pisca', 'presente', 'ceia', 'meia-noite', 'peru', 'farofa', 'salpicão', 'rabanada',
    'panetone', 'prato', 'colher', 'garfo', 'à vontade', 'seja bem-vindo', 'feliz natal', 'boas festas', 'igualmente'],

  sanat: {
    'toque': { fi: 'soita! (käskymuoto)', aa: 'TO-ki', ipa: '[ˈtɔki]', sl: 'verbi {tocar}, käskymuoto', huom: '”não toque” = älä soita' },
    // dialogi
    'dezembro': { fi: 'joulukuu', aa: 'de-ZẼ-bru', ipa: '[deˈzẽbɾu]', sl: 'substantiivi, maskuliini' },
    'cheia': { fi: 'täynnä (feminiinisanan edellä)', aa: 'SHEI-a', ipa: '[ˈʃejɐ]', sl: 'adjektiivi', huom: 'maskuliini ”cheio”' },
    'enfeite': { fi: 'koriste', aa: 'ẽ-FEI-tsi', ipa: '[ẽˈfejtʃi]', sl: 'substantiivi, maskuliini' },
    'enfeites': { fi: 'koristeet', aa: 'ẽ-FEI-tsis', ipa: '[ẽˈfejtʃis]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {enfeite}' },
    'traga': { fi: 'tuo! (käskymuoto)', aa: 'TRA-ga', ipa: '[ˈtɾaɡɐ]', sl: 'verbi {trazer}, käskymuoto', huom: 'eu trago → traga' },
    'tragam': { fi: 'tuokaa! (monikko)', aa: 'TRA-gãu', ipa: '[ˈtɾaɡɐ̃w]', sl: 'verbi {trazer}, käskymuoto' },
    'trago': { fi: 'minä tuon', aa: 'TRA-gu', ipa: '[ˈtɾaɡu]', sl: 'verbi {trazer}', huom: '”Já trago!” = tuon heti!' },
    'traz': { fi: 'tuo; tuo! (puhekielen käsky)', aa: 'TRAS', ipa: '[tɾas]', sl: 'verbi {trazer}' },
    'cadeiras': { fi: 'tuolit', aa: 'ka-DEI-ras', ipa: '[kaˈdejɾɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {cadeira}' },
    'varanda': { fi: 'parveke, veranta', aa: 'va-RÃ-da', ipa: '[vaˈɾɐ̃dɐ]', sl: 'substantiivi, feminiini' },
    'ponha': { fi: 'laita! (käskymuoto)', aa: 'PÕ-nja', ipa: '[ˈpõɲɐ]', sl: 'verbi {pôr}, käskymuoto', huom: 'eu ponho → ponha' },
    'ponho': { fi: 'minä laitan', aa: 'PÕ-nju', ipa: '[ˈpõɲu]', sl: 'verbi {pôr}' },
    'põe': { fi: 'laittaa; laita! (puhekieli)', aa: 'PÕI', ipa: '[põj]', sl: 'verbi {pôr}' },
    'prato': { fi: 'lautanen; ruokalaji', aa: 'PRA-tu', ipa: '[ˈpɾatu]', sl: 'substantiivi, maskuliini' },
    'pratos': { fi: 'lautaset', aa: 'PRA-tus', ipa: '[ˈpɾatus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {prato}' },
    'quantos': { fi: 'kuinka monta (maskuliinin monikko)', aa: 'KUÃ-tus', ipa: '[ˈkwɐ̃tus]', sl: 'kysymyssana', huom: 'perusmuoto {quanto}' },
    'conte': { fi: 'laske! kerro! (käskymuoto)', aa: 'KÕ-tsi', ipa: '[ˈkõtʃi]', sl: 'verbi {contar}, käskymuoto' },
    'venha': { fi: 'tule! (käskymuoto)', aa: 'VẼ-nja', ipa: '[ˈvẽɲɐ]', sl: 'verbi {vir}, käskymuoto', huom: 'eu venho → venha. ”Venha cá!” = tule tänne!' },
    'venham': { fi: 'tulkaa! (monikko)', aa: 'VẼ-njãu', ipa: '[ˈvẽɲɐ̃w]', sl: 'verbi {vir}, käskymuoto' },
    'venho': { fi: 'minä tulen', aa: 'VẼ-nju', ipa: '[ˈvẽɲu]', sl: 'verbi {vir}' },
    'ceia': { fi: 'ilta-ateria; jouluillallinen', aa: 'SE-ia', ipa: '[ˈsejɐ]', sl: 'substantiivi, feminiini', huom: 'ei ”cena” (se on kohtaus)' },
    'ceia de natal': { fi: 'jouluillallinen, jouluaaton ateria', aa: 'SE-ia di na-TAU', ipa: '[ˈsejɐ dʒi naˈtaw]', sl: 'ilmaus' },
    'faça': { fi: 'tee! (käskymuoto)', aa: 'FA-sa', ipa: '[ˈfasɐ]', sl: 'verbi {fazer}, käskymuoto', huom: 'eu faço → faça' },
    'façam': { fi: 'tehkää! (monikko)', aa: 'FA-sãu', ipa: '[ˈfasɐ̃w]', sl: 'verbi {fazer}, käskymuoto' },
    'faço': { fi: 'minä teen', aa: 'FA-su', ipa: '[ˈfasu]', sl: 'verbi {fazer}' },
    'salada': { fi: 'salaatti', aa: 'sa-LA-da', ipa: '[saˈladɐ]', sl: 'substantiivi, feminiini' },
    'geólogo': { fi: 'geologi', aa: 'zhe-O-lo-gu', ipa: '[ʒeˈɔloɡu]', sl: 'substantiivi, maskuliini', huom: 'nainen ”geóloga”' },
    'cozinheiro': { fi: 'kokki', aa: 'ko-zĩ-NJEI-ru', ipa: '[kozĩˈɲejɾu]', sl: 'substantiivi, maskuliini', huom: 'nainen ”cozinheira”' },
    'seja': { fi: 'ole! (käskymuoto)', aa: 'SE-zha', ipa: '[ˈseʒɐ]', sl: 'verbi {ser}, käskymuoto', huom: '”Seja bem-vindo!” = tervetuloa!' },
    'sejam': { fi: 'olkaa! (monikko)', aa: 'SE-zhãu', ipa: '[ˈseʒɐ̃w]', sl: 'verbi {ser}, käskymuoto' },
    'trabalha': { fi: 'tekee työtä', aa: 'tra-BA-lja', ipa: '[tɾaˈbaʎɐ]', sl: 'verbi {trabalhar}' },
    'dê': { fi: 'anna! (käskymuoto)', aa: 'DE', ipa: '[de]', sl: 'verbi {dar}, käskymuoto', huom: '”Me dê!” = anna minulle!' },
    'deem': { fi: 'antakaa! (monikko)', aa: 'DE-ẽi', ipa: '[ˈdeẽj]', sl: 'verbi {dar}, käskymuoto' },
    'tenha': { fi: 'ole sinulla! (käskymuoto)', aa: 'TẼ-nja', ipa: '[ˈtẽɲɐ]', sl: 'verbi {ter}, käskymuoto', huom: '”Tenha cuidado!” = ole varovainen!' },
    'pronta': { fi: 'valmis (feminiinisanan edellä)', aa: 'PRÕ-ta', ipa: '[ˈpɾõtɐ]', sl: 'adjektiivi', huom: 'maskuliini {pronto}' },
    'sentem': { fi: 'istukaa! (monikko)', aa: 'SẼ-tẽi', ipa: '[ˈsẽtẽj]', sl: 'verbi {sentar-se}', huom: 'puhekielessä ilman ”se”-sanaa' },
    'fiquem': { fi: 'pysykää! (monikko)', aa: 'FI-kẽi', ipa: '[ˈfikẽj]', sl: 'verbi {ficar}, käskymuoto', huom: '”Fiquem à vontade!” = tuntekaa olonne kotoisaksi!' },
    'linda': { fi: 'kaunis (feminiinisanan edellä)', aa: 'LĨ-da', ipa: '[ˈlĩdɐ]', sl: 'adjektiivi', huom: 'maskuliini {lindo}' },
    'meia-noite': { fi: 'keskiyö', aa: 'MEI-a-NOI-tsi', ipa: '[ˈmejaˈnojtʃi]', sl: 'substantiivi, feminiini' },
    'presente': { fi: 'lahja; nykyhetki', aa: 'pre-ZẼ-tsi', ipa: '[pɾeˈzẽtʃi]', sl: 'substantiivi, maskuliini' },
    'presentes': { fi: 'lahjat', aa: 'pre-ZẼ-tsis', ipa: '[pɾeˈzẽtʃis]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {presente}' },
    'vá': { fi: 'mene! (käskymuoto)', aa: 'VA', ipa: '[va]', sl: 'verbi {ir}, käskymuoto', huom: '”Vá à cozinha!” = mene keittiöön!' },
    'vão': { fi: 'he menevät; menkää!', aa: 'VÃU', ipa: '[vɐ̃w]', sl: 'verbi {ir}', huom: 'myös monikon käsky' },
    'diga': { fi: 'sano! (käskymuoto)', aa: 'DI-ga', ipa: '[ˈdʒiɡɐ]', sl: 'verbi {dizer}, käskymuoto', huom: 'eu digo → diga' },
    'digam': { fi: 'sanokaa! (monikko)', aa: 'DI-gãu', ipa: '[ˈdʒiɡɐ̃w]', sl: 'verbi {dizer}, käskymuoto' },
    'sirva': { fi: 'tarjoile! (käskymuoto)', aa: 'SIH-va', ipa: '[ˈsihvɐ]', sl: 'verbi {servir}, käskymuoto', huom: 'eu sirvo → sirva' },
    'sirvo': { fi: 'minä tarjoilen', aa: 'SIH-vu', ipa: '[ˈsihvu]', sl: 'verbi {servir}' },
    'sirva-se': { fi: 'ota ruokaa! (käskymuoto + ”itsesi”)', aa: 'SIH-va-si', ipa: '[ˈsihvasi]', sl: 'käskymuoto', huom: 'kohtelias kehotus pöydässä' },
    'sirvam-se': { fi: 'ottakaa ruokaa! (monikko)', aa: 'SIH-vãu-si', ipa: '[ˈsihvɐ̃wsi]', sl: 'käskymuoto', huom: 'kohtelias kehotus pöydässä' },
    'à vontade': { fi: 'kotoisasti, vapaasti', aa: 'a võ-TA-di', ipa: '[a võˈtadʒi]', sl: 'ilmaus', huom: '”Fique à vontade!” = tunne olosi kotoisaksi!' },
    'vontade': { fi: 'tahto, halu', aa: 'võ-TA-di', ipa: '[võˈtadʒi]', sl: 'substantiivi, feminiini' },
    'seja bem-vindo': { fi: 'ole tervetullut (miehelle)', aa: 'SE-zha bẽi-VĨ-du', ipa: '[ˈseʒɐ bẽjˈvĩdu]', sl: 'ilmaus', huom: 'naiselle ”seja bem-vinda”' },
    'igualmente': { fi: 'samoin', aa: 'i-guau-MẼ-tsi', ipa: '[iɡwawˈmẽtʃi]', sl: 'adverbi', huom: 'vastaus toivotukseen: ”Obrigado, igualmente!”' },
    'todos': { fi: 'kaikki (maskuliinin monikko)', aa: 'TO-dus', ipa: '[ˈtodus]', sl: 'pronomini', huom: 'feminiini ”todas”' },
    'ajudem': { fi: 'auttakaa! (monikko)', aa: 'a-ZHU-dẽi', ipa: '[aˈʒudẽj]', sl: 'verbi {ajudar}, käskymuoto' },
    'esqueça': { fi: 'unohda! (käskymuoto)', aa: 'es-KE-sa', ipa: '[esˈkesɐ]', sl: 'verbi {esquecer}, käskymuoto', huom: '”Não esqueça!” = älä unohda!' },
    'gentis': { fi: 'kilttejä (monikko)', aa: 'zhẽ-TSIS', ipa: '[ʒẽˈtʃis]', sl: 'adjektiivi', huom: 'yksikkö {gentil}' },
    'quartos': { fi: 'makuuhuoneet', aa: 'KUAH-tus', ipa: '[ˈkwahtus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {quarto}' },
    // huonekalut
    'sofá': { fi: 'sohva', aa: 'so-FA', ipa: '[soˈfa]', sl: 'substantiivi, maskuliini' },
    'tapete': { fi: 'matto', aa: 'ta-PE-tsi', ipa: '[taˈpetʃi]', sl: 'substantiivi, maskuliini' },
    'geladeira': { fi: 'jääkaappi', aa: 'zhe-la-DEI-ra', ipa: '[ʒelaˈdejɾɐ]', sl: 'substantiivi, feminiini' },
    'quadro': { fi: 'taulu, maalaus', aa: 'KUA-dru', ipa: '[ˈkwadɾu]', sl: 'substantiivi, maskuliini' },
    'estante': { fi: 'kirjahylly, hylly', aa: 'es-TÃ-tsi', ipa: '[esˈtɐ̃tʃi]', sl: 'substantiivi, feminiini' },
    'armário': { fi: 'kaappi', aa: 'ah-MA-riu', ipa: '[ahˈmaɾju]', sl: 'substantiivi, maskuliini' },
    'quintal': { fi: 'piha, takapiha', aa: 'kĩ-TAU', ipa: '[kĩˈtaw]', sl: 'substantiivi, maskuliini' },
    'fogão': { fi: 'liesi', aa: 'fo-GÃU', ipa: '[foˈɡɐ̃w]', sl: 'substantiivi, maskuliini' },
    'espelho': { fi: 'peili', aa: 'es-PE-lju', ipa: '[esˈpeʎu]', sl: 'substantiivi, maskuliini' },
    'garfo': { fi: 'haarukka', aa: 'GAH-fu', ipa: '[ˈɡahfu]', sl: 'substantiivi, maskuliini' },
    'colher': { fi: 'lusikka', aa: 'ko-LJEH', ipa: '[koˈʎeh]', sl: 'substantiivi, feminiini' },
    // joulu
    'natal': { fi: 'joulu', aa: 'na-TAU', ipa: '[naˈtaw]', sl: 'substantiivi, maskuliini' },
    'árvore de natal': { fi: 'joulukuusi', aa: 'AH-vo-ri di na-TAU', ipa: '[ˈahvoɾi dʒi naˈtaw]', sl: 'ilmaus' },
    'papai noel': { fi: 'Joulupukki', aa: 'pa-PAI no-EU', ipa: '[paˈpaj noˈɛw]', sl: 'nimi', huom: 'kirjaimellisesti ”isä Noel”' },
    'noel': { fi: 'Noel (joulu, Joulupukin nimessä)', aa: 'no-EU', ipa: '[noˈɛw]', sl: 'nimi' },
    'feliz natal': { fi: 'hyvää joulua', aa: 'fe-LIS na-TAU', ipa: '[feˈlis naˈtaw]', sl: 'tervehdys' },
    'boas festas': { fi: 'hyvää juhlaa, hyvää joulua ja uutta vuotta', aa: 'BO-as FES-tas', ipa: '[ˌboɐs ˈfɛstɐs]', sl: 'tervehdys' },
    'boas': { fi: 'hyviä (feminiinin monikko)', aa: 'BO-as', ipa: '[ˈboɐs]', sl: 'adjektiivi', huom: 'perusmuoto {bom}' },
    'festas': { fi: 'juhlat', aa: 'FES-tas', ipa: '[ˈfɛstɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {festa}' },
    'pisca-pisca': { fi: 'jouluvalot, vilkkuvalot', aa: 'PIS-ka-PIS-ka', ipa: '[ˈpiskaˈpiskɐ]', sl: 'substantiivi, maskuliini' },
    'presépio': { fi: 'seimiasetelma', aa: 'pre-ZE-piu', ipa: '[pɾeˈzɛpju]', sl: 'substantiivi, maskuliini' },
    'peru': { fi: 'kalkkuna', aa: 'pe-RU', ipa: '[peˈɾu]', sl: 'substantiivi, maskuliini' },
    'farofa': { fi: 'farofa (paahdettua maniokkijauhoa)', aa: 'fa-RO-fa', ipa: '[faˈɾɔfɐ]', sl: 'substantiivi, feminiini' },
    'salpicão': { fi: 'salpicão (kanasalaatti)', aa: 'sau-pi-KÃU', ipa: '[sawpiˈkɐ̃w]', sl: 'substantiivi, maskuliini' },
    'rabanada': { fi: 'rabanada (paistettu makea leipä)', aa: 'ha-ba-NA-da', ipa: '[habaˈnadɐ]', sl: 'substantiivi, feminiini' },
    'panetone': { fi: 'panettone (italialainen joululeipä)', aa: 'pa-ne-TO-ni', ipa: '[paneˈtoni]', sl: 'substantiivi, maskuliini' },
    'bacalhau': { fi: 'suolakala, bacalhau (kuivattu turska)', aa: 'ba-ka-LJAU', ipa: '[bakaˈʎaw]', sl: 'substantiivi, maskuliini' },
    'missa': { fi: 'messu', aa: 'MI-sa', ipa: '[ˈmisɐ]', sl: 'substantiivi, feminiini' },
    'missa do galo': { fi: 'keskiyön messu (kukkomessu)', aa: 'MI-sa du GA-lu', ipa: '[ˈmisɐ du ˈɡalu]', sl: 'ilmaus', huom: 'kirjaimellisesti ”kukon messu”' },
    'amigo secreto': { fi: 'salainen ystävä (lahjanvaihtoleikki)', aa: 'a-MI-gu se-KRE-tu', ipa: '[aˈmiɡu seˈkɾɛtu]', sl: 'ilmaus', huom: 'joillakin alueilla {amigo oculto}' },
    'amigo oculto': { fi: 'salainen ystävä (lahjanvaihtoleikki)', aa: 'a-MI-gu o-KUU-tu', ipa: '[aˈmiɡu oˈkuwtu]', sl: 'ilmaus', huom: 'Minasissa tavallinen nimi' },
    'oculto': { fi: 'salattu, piilotettu', aa: 'o-KUU-tu', ipa: '[oˈkuwtu]', sl: 'adjektiivi' },
    // kielioppi
    'veja': { fi: 'katso! (käskymuoto)', aa: 'VE-zha', ipa: '[ˈveʒɐ]', sl: 'verbi {ver}, käskymuoto', huom: 'eu vejo → veja' },
    'leia': { fi: 'lue! (käskymuoto)', aa: 'LE-ia', ipa: '[ˈlejɐ]', sl: 'verbi {ler}, käskymuoto', huom: 'eu leio → leia' },
    'ouço': { fi: 'minä kuulen', aa: 'OU-su', ipa: '[ˈowsu]', sl: 'verbi {ouvir}' },
    'ouça': { fi: 'kuuntele! (käskymuoto)', aa: 'OU-sa', ipa: '[ˈowsɐ]', sl: 'verbi {ouvir}, käskymuoto', huom: 'eu ouço → ouça' },
    'peça': { fi: 'pyydä! (käskymuoto)', aa: 'PE-sa', ipa: '[ˈpɛsɐ]', sl: 'verbi {pedir}, käskymuoto', huom: 'eu peço → peça' },
    'esteja': { fi: 'ole! (käskymuoto)', aa: 'es-TE-zha', ipa: '[esˈteʒɐ]', sl: 'verbi {estar}, käskymuoto', huom: 'poikkeus' },
    'saiba': { fi: 'tiedä! (käskymuoto)', aa: 'SAI-ba', ipa: '[ˈsajbɐ]', sl: 'verbi {saber}, käskymuoto', huom: 'poikkeus' },
    'queira': { fi: 'ole hyvä ja… (käskymuoto)', aa: 'KEI-ra', ipa: '[ˈkejɾɐ]', sl: 'verbi {querer}, käskymuoto', huom: 'poikkeus; ”queira entrar” = olkaa hyvä ja astukaa sisään' },
    'cama': { fi: 'sänky', aa: 'KÃ-ma', ipa: '[ˈkɐ̃mɐ]', sl: 'substantiivi, feminiini' },
    'corte': { fi: 'leikkaa! (käskymuoto); myös substantiivi: leikkaus, oikeus', aa: 'KOH-tsi', ipa: '[ˈkohtʃi]', sl: 'verbi {cortar}, käskymuoto', huom: 'eu corto → corte. ”Não corte a mão!” = älä leikkaa kättäsi' },
    'cortar': { fi: 'leikata', aa: 'koh-TAH', ipa: '[kohˈtah]', sl: 'verbi, perusmuoto' },
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat nimetä kodin huoneet ja tavallisimmat huonekalut.</li>
  <li>Osaat pyytää apua ja antaa ohjeita epäsäännöllisillä käskymuodoilla: <span class="pt">faça, traga, venha, seja</span>.</li>
  <li>Osaat toivottaa hyvää joulua ja kertoa, mitä jouluaattona syödään.</li>
  <li>Kuulet, miten lauseen sävel muuttaa väitteen kysymykseksi tai huudahdukseksi.</li>
</ul>
<p data-paikka="natal-bh">Belo Horizonte, 24. joulukuuta. Maian vanhempien talo on täynnä joulukoristeita, ja kaikki auttavat illallisen valmistelussa. Marta antaa ohjeita, ja Jay saa vihdoin tehtäviä.</p>

<section class="osio" data-paikka="bh-bairro">
  <h2>Dialogi: A ceia de Natal</h2>
  <p class="ohje">Kuuntele ensin koko dialogi. Huomaa Jayn espanjan vaikutuksesta syntynyt virhe: espanjan <i>cena</i> on illallinen, mutta portugalin <span class="pt">cena</span> on kohtaus. Paina sitten roolileikkiä ja puhu Jayn repliikit.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Belo Horizonte, 24. joulukuuta. Maian vanhempien talo on täynnä koristeita.">Belo Horizonte, 24 de dezembro. A casa dos pais da Maia está cheia de enfeites.</p>
    <p class="s" data-h="marta" data-fi="Kaikki kuulolle! Tänään on jouluyö. Kaikki auttavat!">Gente, hoje é noite de Natal! Todo mundo ajuda!</p>
    <p class="s" data-h="marta" data-fi="Walker, tuo tuolit parvekkeelta.">Walker, traga as cadeiras da varanda.</p>
    <p class="s" data-h="walker" data-fi="Tuon heti!">Já trago!</p>
    <p class="s" data-h="marta" data-fi="Anderson, laita lautaset pöydälle, ole hyvä.">Anderson, ponha os pratos na mesa, por favor.</p>
    <p class="s" data-h="anderson" data-fi="Minä laitan! Montako lautasta?">Eu ponho! Quantos pratos?</p>
    <p class="s" data-h="marta" data-fi="Kuusi lautasta. Laske rauhassa.">Seis pratos. Conte devagar.</p>
    <p class="s" data-h="anderson" data-fi="Yksi, kaksi, kolme, neljä, viisi, kuusi. Valmis!">Um, dois, três, quatro, cinco, seis. Pronto!</p>
    <p class="s" data-h="maia" data-fi="Jay, tule tänne! Auta minua kuusen kanssa.">Jay, venha cá! Me ajude com a árvore.</p>
    <p class="s" data-h="jay" data-fi="Tulen heti! Mihin aikaan on jouluillallinen? (virhe: espanjan ”cena”)">Já vou! Que horas é a cena de Natal?</p>
    <p class="s" data-h="marta" data-fi="Cena? Jay, ”cena” on elokuvan kohtaus. Jouluillallinen on ”ceia”!">Cena? Jay, “cena” é cena de filme. O jantar de Natal é a ceia!</p>
    <p class="s" data-h="jay" data-fi="Ai, ceia! Milloin se on?">Ah, a ceia! Quando é?</p>
    <p class="s" data-h="marta" data-fi="Kymmeneltä illalla. Tee ensin salaatti, Jay!">Às dez da noite. Primeiro, faça a salada, Jay!</p>
    <p class="s" data-h="jay" data-fi="Minäkö? Minä olen geologi, en kokki!">Eu? Eu sou geólogo, não cozinheiro!</p>
    <p class="s" data-h="walker" data-fi="Ole kiltti, Jay. Tänään kaikki tekevät töitä!">Seja gentil, Jay. Hoje todo mundo trabalha!</p>
    <p class="s" data-h="jay" data-fi="Hyvä on, hyvä on. Anna minulle veitsi!">Tá bom, tá bom. Me dê a faca!</p>
    <p class="s" data-h="maia" data-fi="Älä leikkaa kättäsi, Jay! Ole varovainen.">Não corte a mão, Jay! Tenha cuidado.</p>
    <p class="s" data-h="kertoja" data-fi="Kymmeneltä pöytä on valmis.">Às dez, a mesa está pronta.</p>
    <p class="s" data-h="marta" data-fi="Istukaa, kaikki! Tuntekaa olonne kotoisaksi!">Sentem aí, gente! Fiquem à vontade!</p>
    <p class="s" data-h="anderson" data-fi="Hyvää joulua!">Feliz Natal!</p>
    <p class="s" data-h="jay" data-fi="Hyvää joulua, Anderson! Kuinka kaunis illallinen!">Feliz Natal, Anderson! Que ceia linda!</p>
    <p class="s" data-h="walker" data-fi="Ja nyt keskiyöllä avatkaa lahjat!">E à meia-noite, abram os presentes!</p>
  </div>
</section>

<section class="osio" data-paikka="bh-bairro">
  <h2>Martan tehtävälista</h2>
  <p class="ohje">Marta kiinnitti jääkaapin oveen listan. Napauta käskyä, niin Marta sanoo sen. Kun tehtävä on tehty, rastita se. Kun kaikki tehtävät on tehty, ilta voi alkaa.</p>
  <div class="tehtavalista" data-h="marta" data-otsikko="Ceia de Natal: lista da Marta" data-valmis="Feliz Natal, gente! A ceia está pronta!">
    <p data-kenelle="walker" data-fi="Walker, tuo tuolit parvekkeelta!">Walker, traga as cadeiras da varanda!</p>
    <p data-kenelle="anderson" data-fi="Anderson, laita kuusi lautasta pöydälle!">Anderson, ponha seis pratos na mesa!</p>
    <p data-kenelle="maia" data-fi="Maia, tule auttamaan minua kuusen kanssa!">Maia, venha me ajudar com a árvore!</p>
    <p data-kenelle="jay" data-fi="Jay, tee salaatti!">Jay, faça a salada!</p>
    <p data-kenelle="jay" data-fi="Jay, ole varovainen veitsen kanssa!">Jay, tenha cuidado com a faca!</p>
    <p data-kenelle="walker" data-fi="Walker, älä soita huuliharppua nyt!">Walker, não toque gaita agora!</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Huoneet" data-sanat="sala,quarto,cozinha,banheiro,varanda,quintal"></div>
  <div class="teema" data-otsikko="Huonekalut ja esineet" data-sanat="mesa,cadeira,sofá,cama,armário,estante,geladeira,fogão,janela,tapete,espelho,quadro"></div>
  <div class="teema" data-otsikko="Joulu" data-sanat="natal,árvore de natal,presépio,enfeite,pisca-pisca,presente,papai noel,ceia,meia-noite,feliz natal,boas festas"></div>
  <div class="teema" data-otsikko="Joulupöytä" data-sanat="peru,farofa,salpicão,rabanada,panetone,salada,prato,copo,garfo,faca,colher"></div>
</section>

<section class="osio">
  <h2>Kielioppi</h2>

  <h3>1. Käskymuodot: epäsäännölliset verbit</h3>
  <p>Oppitunnilla 14 opit säännön: ota <b>eu-muoto</b>, poista loppu-<b>o</b> ja lisää <b>-e</b> (-ar-verbit) tai <b>-a</b> (-er- ja -ir-verbit). Sama sääntö toimii myös verbeille, joiden eu-muoto on epäsäännöllinen. Siksi käskymuodot <span class="pt">faça, traga, venha</span> näyttävät epäsäännöllisiltä, mutta ne seuraavat sääntöä.</p>
  <table class="taivutus">
    <tr><td><span class="pt">fazer</span> tehdä</td><td><span class="pt">eu faço</span> → <span class="pt">faça</span></td></tr>
    <tr><td><span class="pt">dizer</span> sanoa</td><td><span class="pt">eu digo</span> → <span class="pt">diga</span></td></tr>
    <tr><td><span class="pt">trazer</span> tuoda</td><td><span class="pt">eu trago</span> → <span class="pt">traga</span></td></tr>
    <tr><td><span class="pt">pôr</span> panna</td><td><span class="pt">eu ponho</span> → <span class="pt">ponha</span></td></tr>
    <tr><td><span class="pt">vir</span> tulla</td><td><span class="pt">eu venho</span> → <span class="pt">venha</span></td></tr>
    <tr><td><span class="pt">ter</span> olla (jollakin)</td><td><span class="pt">eu tenho</span> → <span class="pt">tenha</span></td></tr>
    <tr><td><span class="pt">ver</span> nähdä</td><td><span class="pt">eu vejo</span> → <span class="pt">veja</span></td></tr>
    <tr><td><span class="pt">ler</span> lukea</td><td><span class="pt">eu leio</span> → <span class="pt">leia</span></td></tr>
    <tr><td><span class="pt">ouvir</span> kuulla</td><td><span class="pt">eu ouço</span> → <span class="pt">ouça</span></td></tr>
    <tr><td><span class="pt">pedir</span> pyytää</td><td><span class="pt">eu peço</span> → <span class="pt">peça</span></td></tr>
    <tr><td><span class="pt">sair</span> lähteä</td><td><span class="pt">eu saio</span> → <span class="pt">saia</span></td></tr>
    <tr><td><span class="pt">servir</span> tarjoilla</td><td><span class="pt">eu sirvo</span> → <span class="pt">sirva</span></td></tr>
  </table>
  <p>Kuusi verbiä <b>ei</b> seuraa sääntöä. Ne pitää opetella ulkoa:</p>
  <table class="taivutus">
    <tr><td><span class="pt">ser</span> olla</td><td><span class="pt">seja</span></td></tr>
    <tr><td><span class="pt">estar</span> olla (tila)</td><td><span class="pt">esteja</span></td></tr>
    <tr><td><span class="pt">ir</span> mennä</td><td><span class="pt">vá</span></td></tr>
    <tr><td><span class="pt">dar</span> antaa</td><td><span class="pt">dê</span></td></tr>
    <tr><td><span class="pt">saber</span> tietää</td><td><span class="pt">saiba</span></td></tr>
    <tr><td><span class="pt">querer</span> haluta</td><td><span class="pt">queira</span></td></tr>
  </table>
  <p>Monikko (<span class="pt">vocês</span>) tehdään lisäämällä <b>-m</b>: <span class="pt">façam, tragam, venham, sejam</span>. Poikkeukset: <span class="pt">vá → vão</span> ja <span class="pt">dê → deem</span>. Kielteinen käsky saa eteensä sanan <span class="pt">não</span>: <span class="pt">não faça</span>, <span class="pt">não diga</span>, <span class="pt">não vá</span>.</p>
  <ul class="esim">
    <li class="s" data-fi="Tee salaatti.">Faça a salada.</li>
    <li class="s" data-fi="Tuo lautaset.">Traga os pratos.</li>
    <li class="s" data-fi="Laita pöytä.">Ponha a mesa.</li>
    <li class="s" data-fi="Tule tänne!">Venha cá!</li>
    <li class="s" data-fi="Ole kiltti.">Seja gentil.</li>
    <li class="s" data-fi="Ole varovainen.">Tenha cuidado.</li>
    <li class="s" data-fi="Mene keittiöön.">Vá à cozinha.</li>
    <li class="s" data-fi="Anna minulle lahja.">Me dê o presente.</li>
    <li class="s" data-fi="Älä sano mitään.">Não diga nada.</li>
    <li class="s" data-fi="Tuntekaa olonne kotoisaksi!">Fiquem à vontade!</li>
  </ul>

  <div class="huomio">
    <p><b>Brasilian puhekieli.</b> Kuten oppitunnilla 14, arjessa käsky on usein hän-muoto: <span class="pt">faz</span> (faça), <span class="pt">diz</span> (diga), <span class="pt">traz</span> (traga), <span class="pt">põe</span> (ponha), <span class="pt">vem</span> (venha), <span class="pt">vai</span> (vá), <span class="pt">dá</span> (dê), <span class="pt">vê</span> (veja). Esimerkiksi <span class="pt">Vem cá!</span>, <span class="pt">Vai lá!</span> ja <span class="pt">Traz os pratos!</span> kuulet kaikkialla. Kirjoituksessa ja kohteliaassa puheessa käytä ensin tässä opittuja muotoja.</p>
  </div>

  <h3>Hyödyllisiä käskyilmauksia</h3>
  <ul class="esim">
    <li class="s" data-fi="Tervetuloa! (miehelle)">Seja bem-vindo!</li>
    <li class="s" data-fi="Tuntekaa olonne kotoisaksi!">Fique à vontade!</li>
    <li class="s" data-fi="Ottakaa ruokaa! (kirjaimellisesti: tarjoilkaa itsenne)">Sirvam-se!</li>
    <li class="s" data-fi="Hyvää joulua toivon! (kirjaimellisesti: olkoon sinulla hyvä joulu)">Tenha um bom Natal!</li>
    <li class="s" data-fi="Kiitos, samoin!">Obrigado, igualmente!</li>
  </ul>

  <div class="muista">
    <p><b>Muista:</b> (1) eu-muoto → poista -o → lisää -e (-ar) tai -a (-er, -ir). (2) Kuusi poikkeusta: <span class="pt">seja, esteja, vá, dê, saiba, queira</span>. (3) Objektipronomini tulee eteen: <span class="pt">Me dê, Me traga, Me diga</span>. (4) Puheessa: <span class="pt">vem, vai, faz, traz</span>.</p>
  </div>

  <h3>Suomeen ja espanjaan verrattuna</h3>
  <p><b>Suomi:</b> käsky on yksinkertainen (tuo, tee, tule). <b>Espanja:</b> kohtelias <i>usted</i>-käsky tehdään samalla säännöllä, joten sinulle ovat tuttuja <i>haga, diga, traiga, ponga, venga, tenga</i>. Erot: <i>vea</i> (nähdä) on portugaliksi <span class="pt">veja</span>, <i>oiga</i> (kuulla) on <span class="pt">ouça</span>, <i>pida</i> on <span class="pt">peça</span>, <i>sea</i> on <span class="pt">seja</span>, <i>esté</i> on <span class="pt">esteja</span>, <i>vaya</i> on <span class="pt">vá</span> ja <i>dé</i> on <span class="pt">dê</span>. Ansoja: espanjan <i>cena</i> (illallinen) ei ole portugalin <span class="pt">cena</span> (kohtaus). Illallinen on <span class="pt">jantar</span> ja jouluillallinen <span class="pt">ceia</span>.</p>

  <h3>2. Koti ja huonekalut</h3>
  <p>Huoneiden ja esineiden sijainti kerrotaan kuten oppitunnilla 14: <span class="pt">ficar</span> sijainnille ja <span class="pt">ter</span> (puhekielessä sama kuin <span class="pt">haver</span>) sille, mitä jossakin on. Prepositio <span class="pt">em</span> yhdistyy artikkeliin: <span class="pt">na sala</span>, <span class="pt">no quarto</span>, <span class="pt">na varanda</span>.</p>
  <ul class="esim">
    <li class="s" data-fi="Olohuoneessa on sohva ja matto.">Na sala tem um sofá e um tapete.</li>
    <li class="s" data-fi="Pöytä on ikkunan lähellä.">A mesa fica perto da janela.</li>
    <li class="s" data-fi="Jääkaappi on keittiössä.">A geladeira está na cozinha.</li>
    <li class="s" data-fi="Talossa on kolme makuuhuonetta ja parveke.">A casa tem três quartos e uma varanda.</li>
    <li class="s" data-fi="Tauluni on seinällä.">O meu quadro está na parede.</li>
  </ul>
  <p>Kodin vieraalle sanotaan usein <span class="pt">Fique à vontade!</span> Isäntä tarjoaa vieraalle ruokaa lähes aina: <span class="pt">Sirva-se!</span> (Ota ruokaa!)</p>
</section>

<section class="osio">
  <h2>Ääntäminen: lauseen intonaatio</h2>
  <p>Samat sanat voivat olla väite, kysymys tai huudahdus. Ero on lauseen sävelessä. Kuuntele ja sano perässä.</p>
  <div class="saanto">
    <h3>1. Väite laskee, kysymys nousee</h3>
    <p>Väitteen ääni laskee lopussa. Kyllä-/ei-kysymyksen ääni nousee viimeisessä painollisessa tavussa. Kysymyssanalla alkavassa kysymyksessä ääni laskee kuten väitteessä.</p>
    <ul class="esim">
      <li class="s" data-fi="Hän tulee.">Ele vem.</li>
      <li class="s" data-fi="Tuleeko hän?">Ele vem?</li>
      <li class="s" data-fi="Hän tulee!">Ele vem!</li>
      <li class="s" data-fi="Milloin hän tulee?">Quando ele vem?</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>2. Luettelo: nouse, nouse, laske</h3>
    <p>Luettelossa jokaisen osan jälkeen ääni nousee hieman, ja viimeisen jälkeen se laskee.</p>
    <ul class="esim">
      <li class="s">peru, farofa e salpicão</li>
      <li class="s">sala, quarto e cozinha</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>3. Painottomat sanat jäävät heikoiksi</h3>
    <p>Lauseessa painon saavat tärkeät sanat: verbit, substantiivit, adjektiivit. Artikkelit ja pikkusanat ovat heikkoja ja lyhyitä, ja niiden vokaalit heikkenevät: <span class="pt">a</span> → lyhyt a, <span class="pt">e</span> → i, <span class="pt">o</span> → u.</p>
    <ul class="esim">
      <li class="s">Ponha os pratos na mesa.</li>
      <li class="s">Traga as cadeiras da varanda.</li>
      <li class="s">Feliz Natal!</li>
    </ul>
  </div>
</section>

<aside class="kulttuuri" data-paikka="natal-bh">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Brasilialainen joulu</h3>
  <figure class="kuva" data-kuva="natal-bh"></figure>
  <p>Brasiliassa joulu on keskikesällä ja Minas Geraisissa sadekauden aikaan. Lämpötila on usein yli 25 astetta, ja Joulupukki (<span class="pt">Papai Noel</span>) kuvataan kevyissä vaatteissa. Silti koristeet ovat tuttuja: kuusi, vilkkuvalot (<span class="pt">pisca-pisca</span>), kuusenkoristeet ja seimiasetelma (<span class="pt">presépio</span>). Marta, Maian äiti, kerää joulukoristeita, ja heidän talonsa on jouluksi täynnä niitä.</p>
  <p>Tärkein ilta on jouluaatto, 24. joulukuuta. Perhe kokoontuu myöhäiselle illalliselle, jota sanotaan <span class="pt">ceia de Natal</span>. Pöydässä on usein kalkkunaa (<span class="pt">peru</span>), kinkkua tai porsaanlihaa, riisiä, salaattia ja <span class="pt">farofa</span>, joka on paahdettua maniokkijauhoa. Jälkiruoaksi syödään usein <span class="pt">rabanada</span> (eräänlainen ranskalainen paahtoleipä, joka on paistettu ja sokeroitu) ja italialaista <span class="pt">panetone</span>-leipää. Moni perhe syö myös <span class="pt">bacalhau</span>-kuivakalaa, kuten Portugalissa.</p>
  <p>Lahjat avataan usein keskiyöllä. Monet käyvät keskiyön messussa, jota sanotaan <span class="pt">Missa do Galo</span> eli kukkomessu. Perheissä ja työpaikoilla vaihdetaan lahjoja leikissä, jota kutsutaan nimellä <span class="pt">amigo secreto</span> (joillakin alueilla <span class="pt">amigo oculto</span>). Joulutervehdys on <span class="pt">Feliz Natal!</span> tai <span class="pt">Boas festas!</span>.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: Martan lista</h3>
    <p class="ohje">Katso Martan tehtävälistaa yllä. Kuka tekee mitä?</p>
    <div class="valinta" data-oikea="o Walker">
      <p class="kysymys">Quem traz as cadeiras?</p>
      <div class="vaihtoehdot"><button type="button">o Jay</button><button type="button">o Walker</button><button type="button">o Anderson</button></div>
    </div>
    <div class="valinta" data-oikea="seis pratos">
      <p class="kysymys"><span class="ryhma" data-hahmot="anderson"></span> O que o Anderson põe na mesa?</p>
      <div class="vaihtoehdot"><button type="button">seis pratos</button><button type="button">as cadeiras</button><button type="button">a salada</button></div>
    </div>
    <div class="valinta" data-oikea="faça">
      <p class="kysymys"><span class="ryhma" data-hahmot="marta"></span> Jay, ___ a salada!</p>
      <div class="vaihtoehdot"><button type="button">faz</button><button type="button">faça</button><button type="button">fazer</button></div>
    </div>
    <div class="valinta" data-oikea="não toque">
      <p class="kysymys"><span class="ryhma" data-hahmot="marta"></span> Walker, ___ gaita agora!</p>
      <div class="vaihtoehdot"><button type="button">não toca</button><button type="button">não toque</button><button type="button">não tocar</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Muodosta käskymuoto</h3>
    <p class="ohje">Kirjoita verbin käskymuoto sanalle <span class="pt">você</span>.</p>
    <div class="aukot">
      <p><span class="aukko" data-oikea="faça"></span> a salada, por favor. (fazer)</p>
      <p><span class="aukko" data-oikea="venha"></span> aqui, Jay! (vir)</p>
      <p><span class="aukko" data-oikea="ponha"></span> os pratos na mesa. (pôr)</p>
      <p>Não <span class="aukko" data-oikea="diga"></span> nada! (dizer)</p>
      <p><span class="aukko" data-oikea="traga"></span> as cadeiras. (trazer)</p>
      <p><span class="aukko" data-oikea="tenha"></span> cuidado! (ter)</p>
      <p><span class="aukko" data-oikea="seja"></span> gentil! (ser)</p>
      <p>Me <span class="aukko" data-oikea="dê"></span> o presente. (dar)</p>
      <p><span class="aukko" data-oikea="vá"></span> à cozinha. (ir)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Yhdistä kodin sanat</h3>
    <ul class="yhdista">
      <li data-pari="pöytä">a mesa</li>
      <li data-pari="tuoli">a cadeira</li>
      <li data-pari="sohva">o sofá</li>
      <li data-pari="sänky">a cama</li>
      <li data-pari="kaappi">o armário</li>
      <li data-pari="jääkaappi">a geladeira</li>
      <li data-pari="ikkuna">a janela</li>
      <li data-pari="parveke">a varanda</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Yhdistä kirjakieli ja puhekieli</h3>
    <p class="ohje">Mikä puhekielen käsky vastaa kirjakielen muotoa?</p>
    <ul class="yhdista">
      <li data-pari="faz">faça</li>
      <li data-pari="diz">diga</li>
      <li data-pari="traz">traga</li>
      <li data-pari="põe">ponha</li>
      <li data-pari="vem">venha</li>
      <li data-pari="vai">vá</li>
      <li data-pari="dá">dê</li>
      <li data-pari="vê">veja</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Valitse oikea sana</h3>
    <div class="valinta" data-oikea="ceia">
      <p class="kysymys">Jouluillallinen on…</p>
      <div class="vaihtoehdot"><button type="button">cena</button><button type="button">ceia</button></div>
    </div>
    <div class="valinta" data-oikea="seja">
      <p class="kysymys">Ole kiltti: ___ gentil.</p>
      <div class="vaihtoehdot"><button type="button">seja</button><button type="button">sê</button><button type="button">é</button></div>
    </div>
    <div class="valinta" data-oikea="vá">
      <p class="kysymys">Mene keittiöön: ___ à cozinha.</p>
      <div class="vaihtoehdot"><button type="button">vai</button><button type="button">vá</button><button type="button">vaya</button></div>
    </div>
    <div class="valinta" data-oikea="geladeira">
      <p class="kysymys">Mikä ei ole huonekalu, vaan kodinkone?</p>
      <div class="vaihtoehdot"><button type="button">sofá</button><button type="button">geladeira</button><button type="button">estante</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause. Muista painomerkit.</p>
    <div class="sanelu" data-puhu="Faça a salada, por favor."></div>
    <div class="sanelu" data-puhu="Venha cá!"></div>
    <div class="sanelu" data-puhu="Tenha um ótimo Natal!"></div>
    <div class="sanelu" data-puhu="Me dê o presente."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Tuo lautaset.</p><p class="s" data-fi="Tuo lautaset.">Traga os pratos.</p></div>
    <div class="kaanna"><p class="fi">Laita pöytä.</p><p class="s" data-fi="Laita pöytä.">Ponha a mesa.</p></div>
    <div class="kaanna"><p class="fi">Älä sano mitään.</p><p class="s" data-fi="Älä sano mitään.">Não diga nada.</p></div>
    <div class="kaanna"><p class="fi">Tule tänne ja auta minua.</p><p class="s" data-fi="Tule tänne ja auta minua.">Venha aqui e me ajude.</p></div>
    <div class="kaanna"><p class="fi">Hyvää joulua! Kiitos, samoin!</p><p class="s" data-fi="Hyvää joulua! Kiitos, samoin!">Feliz Natal! Obrigado, igualmente!</p></div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>7. Mikä tavu on painollinen?</h3>
    <p class="ohje">Napauta painollista tavua.</p>
    <p><span class="paino" data-tavut="ge|la|dei|ra" data-oikea="3"></span> <span class="paino" data-tavut="ar|má|rio" data-oikea="2"></span> <span class="paino" data-tavut="va|ran|da" data-oikea="2"></span> <span class="paino" data-tavut="es|tan|te" data-oikea="2"></span></p>
    <p><span class="paino" data-tavut="es|pe|lho" data-oikea="2"></span> <span class="paino" data-tavut="en|fei|te" data-oikea="2"></span> <span class="paino" data-tavut="pre|sen|te" data-oikea="2"></span> <span class="paino" data-tavut="pa|ne|to|ne" data-oikea="3"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Mitä vastaat?</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">O que tem na sala da casa da Marta?</summary>
      <p class="s" data-fi="Olohuoneessa on sohva, matto ja kuusi.">Na sala tem um sofá, um tapete e uma árvore de Natal.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que se come na ceia de Natal?</summary>
      <p class="s" data-fi="Syödään kalkkunaa, riisiä, salaattia ja farofaa.">Se come peru, arroz, salada e farofa.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que você diz no Natal?</summary>
      <p class="s" data-fi="Sanon: Hyvää joulua!">Eu digo: Feliz Natal!</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l15">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l15-lista" lang="pt-BR">
      <div class="kal-yla"><b>A minha lista de Natal</b><small>sinä isännöit joulua: kirjoita käskyt perheellesi</small></div>
      <div class="kal-rivit">
        <label>Para… <input name="kasky1" placeholder="Mãe, traga o panetone!"></label>
        <label>Para… <input name="kasky2" placeholder="Pai, ponha os copos na mesa!"></label>
        <label>Para… <input name="kasky3" placeholder="Venha cá e me ajude!"></label>
        <label>Não… <input name="kielto" placeholder="Não abra os presentes antes da meia-noite!"></label>
        <label>No fim <input name="toivotus" placeholder="Feliz Natal e boas festas!"></label>
      </div>
    </div>
    <p>Kirjoita 5–6 lauseen ohje: sinä isännöit joulua ja pyydät perhettä auttamaan. Käytä ainakin kolmea epäsäännöllistä käskymuotoa (<span class="pt">faça, traga, venha, ponha, seja</span>) ja yhtä kielteistä käskyä. Lopeta joulutervehdykseen ja lue vastauksesi ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Jay, tuo tuolit olohuoneeseen.">Jay, traga as cadeiras para a sala.</p>
      <p class="s" data-fi="Anna, laita pöytä, ole hyvä.">Ana, ponha a mesa, por favor.</p>
      <p class="s" data-fi="Tulkaa kaikki keittiöön ja auttakaa minua.">Venham todos à cozinha e me ajudem.</p>
      <p class="s" data-fi="Älä unohda lahjoja!">Não esqueça os presentes!</p>
      <p class="s" data-fi="Olkaa kilttejä ja tuntekaa olonne kotoisaksi.">Sejam gentis e fiquem à vontade.</p>
      <p class="s" data-fi="Hyvää joulua kaikille!">Feliz Natal para todos!</p>
    </details>
  </div>
</section>
`
});
