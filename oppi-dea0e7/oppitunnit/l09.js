/* Jakso 9: Matkavalmistelut, sää ja vuodenajat. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet (aa = suomalaisin kirjaimin, ipa = kansainvälinen) noudattavat Belo Horizonten ääntämystä.
   Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l09',
  lyhyt: '9',
  jakso: 'Jakso 9',
  otsikko: 'Sää ja ajankohdat: monikko ja poder',
  lahde: 'Aihe: kuukaudet, vuodenajat, sää, järjestysluvut · Kielioppi: poder, dizer, dar; monikko (-m, -l, -s, -ão) · Ääntäminen: s',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, pakkaa matkalaukkua' },
    apresentadora: { nimi: 'Juontaja', tyyppi: 'nainen', vaihto: 5, kuvaus: 'TV Minasin sääjuontaja' }
  },

  aiheet: ['aika', 'luonto', 'ominaisuus', 'toiminta'],

  sanasto: [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
    'primavera', 'verão', 'outono', 'inverno', 'calor', 'frio', 'chuva', 'chover', 'vento', 'nublado', 'seco', 'grau',
    'primeiro', 'segundo', 'terceiro', 'quinto', 'décimo',
    'poder', 'dizer', 'dar', 'casaco', 'mala', 'bermuda', 'amanhã', 'manhã', 'faz calor', 'chove'
  ],

  sanat: {
  // <SANAT>
    // kuukaudet
    'janeiro': { fi: 'tammikuu', aa: 'zha-NEI-ru', ipa: '[ʒaˈnejɾu]', sl: 'substantiivi, maskuliini', huom: 'kuukaudet kirjoitetaan pienellä' },
    'fevereiro': { fi: 'helmikuu', aa: 'fe-ve-REI-ru', ipa: '[feveˈɾejɾu]', sl: 'substantiivi, maskuliini' },
    'março': { fi: 'maaliskuu', aa: 'MAH-su', ipa: '[ˈmahsu]', sl: 'substantiivi, maskuliini' },
    'abril': { fi: 'huhtikuu', aa: 'a-BRIU', ipa: '[aˈbɾiw]', sl: 'substantiivi, maskuliini' },
    'maio': { fi: 'toukokuu', aa: 'MAI-u', ipa: '[ˈmaju]', sl: 'substantiivi, maskuliini' },
    'junho': { fi: 'kesäkuu', aa: 'ZHŨ-nju', ipa: '[ˈʒũɲu]', sl: 'substantiivi, maskuliini' },
    'julho': { fi: 'heinäkuu', aa: 'ZHU-lju', ipa: '[ˈʒuʎu]', sl: 'substantiivi, maskuliini' },
    'agosto': { fi: 'elokuu', aa: 'a-GOS-tu', ipa: '[aˈɡostu]', sl: 'substantiivi, maskuliini' },
    'setembro': { fi: 'syyskuu', aa: 'se-TẼ-bru', ipa: '[seˈtẽbɾu]', sl: 'substantiivi, maskuliini' },
    'outubro': { fi: 'lokakuu', aa: 'ou-TU-bru', ipa: '[owˈtubɾu]', sl: 'substantiivi, maskuliini' },
    'novembro': { fi: 'marraskuu', aa: 'no-VẼ-bru', ipa: '[noˈvẽbɾu]', sl: 'substantiivi, maskuliini' },
    'dezembro': { fi: 'joulukuu', aa: 'de-ZẼ-bru', ipa: '[deˈzẽbɾu]', sl: 'substantiivi, maskuliini' },
    // vuodenajat ja sää
    'primavera': { fi: 'kevät', aa: 'pri-ma-VE-ra', ipa: '[pɾimaˈvɛɾɐ]', sl: 'substantiivi, feminiini' },
    'verão': { fi: 'kesä', aa: 've-RÃU', ipa: '[veˈɾɐ̃w]', sl: 'substantiivi, maskuliini', huom: 'espanjaksi verano' },
    'outono': { fi: 'syksy', aa: 'ou-TO-nu', ipa: '[owˈtonu]', sl: 'substantiivi, maskuliini', huom: 'espanjaksi otoño' },
    'inverno': { fi: 'talvi', aa: 'ĩ-VEH-nu', ipa: '[ĩˈvɛhnu]', sl: 'substantiivi, maskuliini', huom: 'espanjaksi invierno' },
    'calor': { fi: 'kuumuus, helle', aa: 'ka-LOH', ipa: '[kaˈloh]', sl: 'substantiivi, maskuliini', huom: 'faz calor = on kuuma' },
    'chuva': { fi: 'sade', aa: 'SHU-va', ipa: '[ˈʃuvɐ]', sl: 'substantiivi, feminiini', huom: 'verbi {chover}' },
    'chuvas': { fi: 'sateet', aa: 'SHU-vas', ipa: '[ˈʃuvɐs]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö {chuva}' },
    'chover': { fi: 'sataa (vettä)', aa: 'sho-VEH', ipa: '[ʃoˈveh]', sl: 'verbi, perusmuoto' },
    'chove': { fi: 'sataa', aa: 'SHO-vi', ipa: '[ˈʃɔvi]', sl: 'verbi {chover}', huom: 'vain hän-muoto' },
    'chovendo': { fi: 'satamassa', aa: 'sho-VẼ-du', ipa: '[ʃoˈvẽdu]', sl: 'gerúndio, verbi {chover}', huom: 'está chovendo = nyt sataa' },
    'nublado': { fi: 'pilvinen', aa: 'nu-BLA-du', ipa: '[nuˈbladu]', sl: 'adjektiivi' },
    'seco': { fi: 'kuiva', aa: 'SE-ku', ipa: '[ˈseku]', sl: 'adjektiivi' },
    'neve': { fi: 'lumi', aa: 'NE-vi', ipa: '[ˈnɛvi]', sl: 'substantiivi, feminiini' },
    'nuvem': { fi: 'pilvi', aa: 'NU-vẽi', ipa: '[ˈnuvẽj]', sl: 'substantiivi, feminiini' },
    'grau': { fi: 'aste', aa: 'GRAU', ipa: '[ɡɾaw]', sl: 'substantiivi, maskuliini' },
    'graus': { fi: 'astetta, asteet', aa: 'GRAUS', ipa: '[ɡɾaws]', sl: 'substantiivi, maskuliini monikko', huom: 'yksikkö {grau}' },
    'faz calor': { fi: 'on kuuma', aa: 'FAS ka-LOH', ipa: '[fas kaˈloh]', sl: 'ilmaus', huom: 'kirjaimellisesti ”tekee kuumaa”' },
    'faz frio': { fi: 'on kylmä', aa: 'FAS FRIU', ipa: '[fas fɾiw]', sl: 'ilmaus' },
    'faz sol': { fi: 'on aurinkoista', aa: 'FAS SOU', ipa: '[fas sɔw]', sl: 'ilmaus' },
    'faz vento': { fi: 'tuulee', aa: 'FAZ VẼ-tu', ipa: '[faz ˈvẽtu]', sl: 'ilmaus' },
    'tem sol': { fi: 'aurinko paistaa', aa: 'TẼI SOU', ipa: '[tẽj sɔw]', sl: 'ilmaus' },
    'está nublado': { fi: 'on pilvistä', aa: 'es-TA nu-BLA-du', ipa: '[esˈta nuˈbladu]', sl: 'ilmaus' },
    'está chovendo': { fi: 'nyt sataa', aa: 'es-TA sho-VẼ-du', ipa: '[esˈta ʃoˈvẽdu]', sl: 'ilmaus' },
    'vento': { fi: 'tuuli', aa: 'VẼ-tu', ipa: '[ˈvẽtu]', sl: 'substantiivi, maskuliini' },
    // järjestysluvut
    'primeiro': { fi: 'ensimmäinen', aa: 'pri-MEI-ru', ipa: '[pɾiˈmejɾu]', sl: 'järjestysluku', huom: 'nainen {primeira}' },
    'primeira': { fi: 'ensimmäinen (feminiini)', aa: 'pri-MEI-ra', ipa: '[pɾiˈmejɾɐ]', sl: 'järjestysluku' },
    'segundo': { fi: 'toinen', aa: 'se-GŨ-du', ipa: '[seˈɡũdu]', sl: 'järjestysluku', huom: 'myös ”sekunti”; nainen {segunda}' },
    'segunda': { fi: 'toinen (feminiini)', aa: 'se-GŨ-da', ipa: '[seˈɡũdɐ]', sl: 'järjestysluku' },
    'terceiro': { fi: 'kolmas', aa: 'teh-SEI-ru', ipa: '[tehˈsejɾu]', sl: 'järjestysluku' },
    'terceira': { fi: 'kolmas (feminiini)', aa: 'teh-SEI-ra', ipa: '[tehˈsejɾɐ]', sl: 'järjestysluku' },
    'quarta': { fi: 'neljäs (feminiini)', aa: 'KUAH-ta', ipa: '[ˈkwahtɐ]', sl: 'järjestysluku', huom: '{quarto} = neljäs ja makuuhuone' },
    'quinto': { fi: 'viides', aa: 'KĨ-tu', ipa: '[ˈkĩtu]', sl: 'järjestysluku' },
    'quinta': { fi: 'viides (feminiini)', aa: 'KĨ-ta', ipa: '[ˈkĩtɐ]', sl: 'järjestysluku' },
    'sexto': { fi: 'kuudes', aa: 'SES-tu', ipa: '[ˈsestu]', sl: 'järjestysluku' },
    'sexta': { fi: 'kuudes (feminiini)', aa: 'SES-ta', ipa: '[ˈsestɐ]', sl: 'järjestysluku' },
    'sétimo': { fi: 'seitsemäs', aa: 'SE-tsi-mu', ipa: '[ˈsɛtʃimu]', sl: 'järjestysluku' },
    'sétima': { fi: 'seitsemäs (feminiini)', aa: 'SE-tsi-ma', ipa: '[ˈsɛtʃimɐ]', sl: 'järjestysluku' },
    'oitavo': { fi: 'kahdeksas', aa: 'oi-TA-vu', ipa: '[ojˈtavu]', sl: 'järjestysluku' },
    'oitava': { fi: 'kahdeksas (feminiini)', aa: 'oi-TA-va', ipa: '[ojˈtavɐ]', sl: 'järjestysluku' },
    'nono': { fi: 'yhdeksäs', aa: 'NO-nu', ipa: '[ˈnonu]', sl: 'järjestysluku' },
    'nona': { fi: 'yhdeksäs (feminiini)', aa: 'NO-na', ipa: '[ˈnonɐ]', sl: 'järjestysluku' },
    'décimo': { fi: 'kymmenes', aa: 'DE-si-mu', ipa: '[ˈdɛsimu]', sl: 'järjestysluku' },
    'décima': { fi: 'kymmenes (feminiini)', aa: 'DE-si-ma', ipa: '[ˈdɛsimɐ]', sl: 'järjestysluku' },
    'sexta-feira': { fi: 'perjantai', aa: 'SES-ta-FEI-ra', ipa: '[ˈsestɐ ˈfejɾɐ]', sl: 'substantiivi, feminiini' },
    'quinze': { fi: 'viisitoista', aa: 'KĨ-zi', ipa: '[ˈkĩzi]', sl: 'lukusana' },
    'doze': { fi: 'kaksitoista', aa: 'DO-zi', ipa: '[ˈdozi]', sl: 'lukusana' },
    'duas': { fi: 'kaksi (feminiinisanan edellä)', aa: 'DU-as', ipa: '[ˈduɐs]', sl: 'lukusana', huom: 'maskuliini {dois}' },
    'muitos': { fi: 'monta, paljon (maskuliini monikko)', aa: 'MŨI-tus', ipa: '[ˈmũjtus]', sl: 'pronomini' },
    // verbit
    'posso': { fi: '(minä) voin', aa: 'PO-su', ipa: '[ˈpɔsu]', sl: 'verbi {poder}', huom: 'espanjassa puedo' },
    'pode': { fi: 'voi; voit', aa: 'PO-di', ipa: '[ˈpɔdʒi]', sl: 'verbi {poder}', huom: 'voisitko…? = você pode…?' },
    'podemos': { fi: '(me) voimme', aa: 'po-DE-mus', ipa: '[poˈdemus]', sl: 'verbi {poder}' },
    'podem': { fi: '(he) voivat', aa: 'PO-dẽi', ipa: '[ˈpɔdẽj]', sl: 'verbi {poder}' },
    'digo': { fi: '(minä) sanon', aa: 'DI-gu', ipa: '[ˈdʒiɡu]', sl: 'verbi {dizer}' },
    'dizemos': { fi: '(me) sanomme', aa: 'di-ZE-mus', ipa: '[dʒiˈzemus]', sl: 'verbi {dizer}' },
    'dizem': { fi: '(he) sanovat', aa: 'DI-zẽi', ipa: '[ˈdʒizẽj]', sl: 'verbi {dizer}' },
    'dou': { fi: '(minä) annan', aa: 'DOU', ipa: '[dow]', sl: 'verbi {dar}' },
    'dá': { fi: 'antaa; annat', aa: 'DA', ipa: '[da]', sl: 'verbi {dar}', huom: 'vrt. {da} = {de} + {a}' },
    'damos': { fi: '(me) annamme', aa: 'DÃ-mus', ipa: '[ˈdɐ̃mus]', sl: 'verbi {dar}' },
    'dão': { fi: '(he) antavat', aa: 'DÃU', ipa: '[dɐ̃w]', sl: 'verbi {dar}' },
    'prepara': { fi: 'valmistelee; valmistelet', aa: 'pre-PA-ra', ipa: '[pɾeˈpaɾɐ]', sl: 'verbi {preparar}' },
    'viaja': { fi: 'matkustaa; matkustat', aa: 'vi-A-zha', ipa: '[viˈaʒɐ]', sl: 'verbi {viajar}' },
    'compro': { fi: '(minä) ostan', aa: 'KÕ-pru', ipa: '[ˈkõpɾu]', sl: 'verbi {comprar}' },
    'fecha': { fi: 'sulkee; suljet', aa: 'FE-sha', ipa: '[ˈfɛʃɐ]', sl: 'verbi {fechar}' },
    'comem': { fi: '(he) syövät', aa: 'KO-mẽi', ipa: '[ˈkomẽj]', sl: 'verbi {comer}' },
    'abrem': { fi: '(he) avaavat', aa: 'A-brẽi', ipa: '[ˈabɾẽj]', sl: 'verbi {abrir}' },
    // vaatteet, muut
    'casaco': { fi: 'takki', aa: 'ka-ZA-ku', ipa: '[kaˈzaku]', sl: 'substantiivi, maskuliini' },
    'casacos': { fi: 'takit', aa: 'ka-ZA-kus', ipa: '[kaˈzakus]', sl: 'substantiivi, maskuliini monikko' },
    'bermuda': { fi: 'shortsit', aa: 'beh-MU-da', ipa: '[behˈmudɐ]', sl: 'substantiivi, feminiini' },
    'camisas': { fi: 'paidat', aa: 'ka-MI-zas', ipa: '[kaˈmizɐs]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö camisa' },
    'roupas': { fi: 'vaatteet', aa: 'HOU-pas', ipa: '[ˈhowpɐs]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö {roupa}' },
    'leves': { fi: 'kevyet', aa: 'LE-vis', ipa: '[ˈlɛvis]', sl: 'adjektiivi, monikko', huom: 'yksikkö {leve}' },
    'grandes': { fi: 'isot', aa: 'GRÃ-dis', ipa: '[ˈɡɾɐ̃dʒis]', sl: 'adjektiivi, monikko', huom: 'yksikkö {grande}' },
    'fora': { fi: 'ulkona', aa: 'FO-ra', ipa: '[ˈfɔɾɐ]', sl: 'adverbi', huom: 'lá fora = ulkona' },
    'favorita': { fi: 'lempi- (feminiini)', aa: 'fa-vo-RI-ta', ipa: '[favoˈɾitɐ]', sl: 'adjektiivi', huom: 'maskuliini {favorito}' },
    'mala': { fi: 'matkalaukku', aa: 'MA-la', ipa: '[ˈmalɐ]', sl: 'substantiivi, feminiini' },
    'amanhã': { fi: 'huomenna', aa: 'a-mã-NJÃ', ipa: '[amɐ̃ˈɲɐ̃]', sl: 'adverbi', huom: 'ANSA! Espanjan mañana = aamu ja huomenna. Portugaliksi huomenna = {amanhã}, aamu = {manhã}' },
    'manhã': { fi: 'aamu', aa: 'mã-NJÃ', ipa: '[mɐ̃ˈɲɐ̃]', sl: 'substantiivi, feminiini', huom: 'huomenna on {amanhã}!' },
    'papai noel': { fi: 'joulupukki', aa: 'pa-PAI no-EU', ipa: '[paˈpaj noˈɛw]', sl: 'nimi', huom: 'kirjaimellisesti ”isä Noel”' },
    // monikot
    'casas': { fi: 'talot, kodit', aa: 'KA-zas', ipa: '[ˈkazɐs]', sl: 'substantiivi, feminiini monikko' },
    'mães': { fi: 'äidit', aa: 'MÃIS', ipa: '[mɐ̃js]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö {mãe}' },
    'mulheres': { fi: 'naiset', aa: 'mu-LJE-ris', ipa: '[muˈʎɛɾis]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö mulher' },
    'vezes': { fi: 'kertaa', aa: 'VE-zis', ipa: '[ˈvezis]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö {vez}' },
    'homens': { fi: 'miehet', aa: 'O-mẽis', ipa: '[ˈomẽjs]', sl: 'substantiivi, maskuliini monikko', huom: 'yksikkö {homem}' },
    'viagens': { fi: 'matkat', aa: 'vi-A-zhẽis', ipa: '[viˈaʒẽjs]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö viagem' },
    'animais': { fi: 'eläimet', aa: 'a-ni-MAIS', ipa: '[aniˈmajs]', sl: 'substantiivi, maskuliini monikko', huom: 'yksikkö animal' },
    'hotéis': { fi: 'hotellit', aa: 'o-TEIS', ipa: '[oˈtɛjs]', sl: 'substantiivi, maskuliini monikko', huom: 'yksikkö {hotel}' },
    'azuis': { fi: 'siniset', aa: 'a-ZUIS', ipa: '[aˈzujs]', sl: 'adjektiivi, monikko', huom: 'yksikkö azul' },
    'aviões': { fi: 'lentokoneet', aa: 'a-vi-ÕIS', ipa: '[aviˈõjs]', sl: 'substantiivi, maskuliini monikko', huom: 'yksikkö avião' },
    'estações': { fi: 'asemat; vuodenajat', aa: 'es-ta-SÕIS', ipa: '[estaˈsõjs]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö estação' },
    'pães': { fi: 'leivät', aa: 'PÃIS', ipa: '[pɐ̃js]', sl: 'substantiivi, maskuliini monikko', huom: 'yksikkö {pão}' },
    'mãos': { fi: 'kädet', aa: 'MÃUS', ipa: '[mɐ̃ws]', sl: 'substantiivi, feminiini monikko', huom: 'yksikkö mão' },
    'irmãos': { fi: 'veljet; sisarukset', aa: 'ih-MÃUS', ipa: '[ihˈmɐ̃ws]', sl: 'substantiivi, maskuliini monikko', huom: 'yksikkö {irmão}' },
    'países': { fi: 'maat', aa: 'pa-I-zis', ipa: '[paˈizis]', sl: 'substantiivi, maskuliini monikko', huom: 'yksikkö {país}' },
    'meses': { fi: 'kuukaudet', aa: 'ME-zis', ipa: '[ˈmezis]', sl: 'substantiivi, maskuliini monikko', huom: 'yksikkö {mês}' },
    'lápis': { fi: 'lyijykynä, lyijykynät', aa: 'LA-pis', ipa: '[ˈlapis]', sl: 'substantiivi, maskuliini', huom: 'monikko sama' },
    'ônibus': { fi: 'linja-auto', aa: 'O-ni-bus', ipa: '[ˈonibus]', sl: 'substantiivi, maskuliini', huom: 'monikko sama' },
    'amigos': { fi: 'ystävät', aa: 'a-MI-gus', ipa: '[aˈmiɡus]', sl: 'substantiivi, maskuliini monikko', huom: 'yksikkö {amigo}' },
    'as': { fi: 'määräinen artikkeli (feminiini monikko)', aa: 'as', ipa: '[as]', sl: 'artikkeli', huom: 'yksikkö {a}' },
    'uns': { fi: 'jotkut, muutamat (maskuliini)', aa: 'ũs', ipa: '[ũs]', sl: 'artikkeli, monikko', huom: 'yksikkö {um}' },
    'umas': { fi: 'jotkut, muutamat (feminiini)', aa: 'U-mas', ipa: '[ˈumɐs]', sl: 'artikkeli, monikko', huom: 'yksikkö {uma}' },
    'das': { fi: '-sta (feminiini monikko); jonkun (feminiini monikko)', aa: 'das', ipa: '[das]', sl: 'prepositio + artikkeli', huom: '{de} + {as}' },
    'nos': { fi: '-ssa (maskuliini monikko)', aa: 'nus', ipa: '[nus]', sl: 'prepositio + artikkeli', huom: '{em} + {os}' },
    'nas': { fi: '-ssa (feminiini monikko)', aa: 'nas', ipa: '[nas]', sl: 'prepositio + artikkeli', huom: '{em} + {as}' },
    'dos': { fi: '-sta (maskuliini monikko)', aa: 'dus', ipa: '[dus]', sl: 'prepositio + artikkeli', huom: '{de} + {os}' },
    'eles': { fi: 'he (miehet tai sekaryhmä)', aa: 'E-lis', ipa: '[ˈelis]', sl: 'persoonapronomini', huom: 'nainen elas' },
    'noel': { fi: 'Noel (joulupukin nimessä)', aa: 'no-EU', ipa: '[noˈɛw]', sl: 'nimi', huom: '{papai noel} = joulupukki' }
  // </SANAT>
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kuukaudet ja vuodenajat ja osaat kertoa päivämäärän.</li>
  <li>Osaat kuvata säätä: <span class="pt">faz calor</span>, <span class="pt">faz frio</span>, <span class="pt">chove</span>.</li>
  <li>Osaat verbit <span class="pt">poder</span>, <span class="pt">dizer</span> ja <span class="pt">dar</span>.</li>
  <li>Osaat muodostaa monikon (-s, -es, -ns, -is, -ões) ja lukea s-kirjaimen oikein.</li>
</ul>
<p data-paikka="helsinki-lumi">Helsinki, Sörnäinen, marraskuu. Ulkona on pimeää ja kylmää. Jay pakkaa matkalaukkua Brasiliaan ja saa kuulla, että joulu Belo Horizontessa on kesällä.</p>

<section class="osio">
  <h2>Dialogi: Verão no Natal?</h2>
  <p class="ohje">Kuuntele ensin ilman suomennoksia. Jay tekee espanjan vaikuttaman virheen sanalla <span class="pt">manhã</span>. Löydätkö sen? Sitten roolileikki: puhu Jayn osuudet.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Helsinki, marraskuu. On kylmä ja pimeää.">Helsinque, novembro. Faz frio e está escuro.</p>
    <p class="s" data-h="kertoja" data-fi="Jay pakkaa matkalaukkua Brasiliaan.">Jay prepara a mala para o Brasil.</p>
    <p class="s" data-h="jay" data-fi="Maia, voinko ottaa mukaan ison takkini?">Maia, posso levar o meu casaco grande?</p>
    <p class="s" data-h="maia" data-fi="Mihin sitä? Joulukuussa Brasiliassa on kesä!">Para quê? Em dezembro, no Brasil, é verão!</p>
    <p class="s" data-h="jay" data-fi="Kesä jouluna? Mikä hulluus!">Verão no Natal? Que loucura!</p>
    <p class="s" data-h="maia" data-fi="Kyllä. Belo Horizontessa on kuuma ja sataa paljon.">Sim. Em Belo Horizonte faz calor e chove muito.</p>
    <p class="s" data-h="jay" data-fi="Montako astetta siellä on?">Quantos graus faz lá?</p>
    <p class="s" data-h="maia" data-fi="Noin kaksikymmentäkahdeksan astetta.">Mais ou menos vinte e oito graus.</p>
    <p class="s" data-h="jay" data-fi="Kaksikymmentäkahdeksan! Täällä on tänään kaksi astetta.">Vinte e oito! Hoje aqui faz dois graus.</p>
    <p class="s" data-h="maia" data-fi="Sitten tarvitset kevyitä vaatteita, et takkeja.">Então você precisa de roupas leves, não de casacos.</p>
    <p class="s" data-h="jay" data-fi="Minulla on vain kolme paitaa ja shortsit.">Eu só tenho três camisas e uma bermuda.</p>
    <p class="s" data-h="maia" data-fi="Voit ostaa lisää siellä. Me matkustamme kahdentenakymmenentenä joulukuuta.">Você pode comprar mais lá. A gente viaja no dia vinte de dezembro.</p>
    <p class="s" data-h="jay" data-fi="Sitten manhã ostan kevyitä vaatteita. (väärin: tarkoittaa huomenna)">Então manhã eu compro roupas leves.</p>
    <p class="s" data-h="maia" data-fi="Amanhã! ”Manhã” on aamu. ”Amanhã” on huominen päivä.">Amanhã! “Manhã” é de manhã. “Amanhã” é o dia depois de hoje.</p>
    <p class="s" data-h="jay" data-fi="Amanhã, amanhã. Entä talvi? Onko siellä hyvin kylmä?">Amanhã, amanhã. E o inverno? Faz muito frio lá?</p>
    <p class="s" data-h="maia" data-fi="Ei. Heinäkuussa on talvi, mutta on kuivaa ja vähän kylmää.">Não. Em julho é inverno, mas é seco e faz pouco frio.</p>
    <p class="s" data-h="jay" data-fi="Kiva! Entä milloin on sadekausi Belo Horizontessa?">Que bom! E quando é a época das chuvas em Belo Horizonte?</p>
    <p class="s" data-h="maia" data-fi="Lokakuusta maaliskuuhun. Joulukuussa sataa joka päivä.">De outubro a março. Em dezembro chove todo dia.</p>
    <p class="s" data-h="jay" data-fi="Selvä. Annan ison takin Kouvoselle.">Tudo bem. Eu dou o casaco grande para o Kouvonen.</p>
    <p class="s" data-h="maia" data-fi="Hyvä idea! Ja sinä sanot hänelle ”hyvää joulua”.">Boa ideia! E você diz “Feliz Natal” para ele.</p>
    <p class="s" data-h="jay" data-fi="Hyvää joulua, Kouvonen! Ja nyt on marraskuu.">Feliz Natal, Kouvonen! E ainda é novembro.</p>
    <p class="s" data-h="kertoja" data-fi="Jay sulkee laukun. Ulkona on pimeää ja kylmä. Mutta Belo Horizontessa on jo kesä.">Jay fecha a mala. Lá fora está escuro e faz frio. Mas em Belo Horizonte já é verão.</p>
  </div>
</section>

<section class="osio" data-paikka="bh-sade">
  <h2>Televisio: previsão do tempo</h2>
  <p class="ohje">Illalla Maia katsoo netistä Belo Horizonten paikallisuutisia. Paina <b>Katso lähetys</b> ja kuuntele sääennuste ensin ilman tekstitystä. Montako astetta Belo Horizontessa on? Missä sataa lunta? Kytke sitten tekstitys ja suomennos, jos tarvitset. Kysymykset ovat harjoituksissa.</p>
  <div class="tv" data-h="apresentadora" data-kanava="TV Minas · Previsão do tempo" data-nauha="Previsão do tempo · Belo Horizonte 28 °C · Rio de Janeiro 35 °C · Helsinque −5 °C">
    <div data-kortti="Belo Horizonte" data-saa="⛈️" data-lampo="28 °C"></div>
    <div data-kortti="Rio de Janeiro" data-saa="☀️" data-lampo="35 °C"></div>
    <div data-kortti="Helsinque" data-saa="❄️" data-lampo="−5 °C"></div>
    <p data-fi="Hyvää iltaa! Tässä on sääennuste.">Boa noite! Esta é a previsão do tempo.</p>
    <p data-kortti="Belo Horizonte" data-fi="Belo Horizontessa on huomenna kuuma: kaksikymmentäkahdeksan astetta. Iltapäivällä sataa paljon.">Em Belo Horizonte, amanhã faz calor: vinte e oito graus. À tarde chove muito.</p>
    <p data-kortti="Rio de Janeiro" data-fi="Rio de Janeirossa paistaa aurinko ja on kolmekymmentäviisi astetta.">No Rio de Janeiro faz sol e trinta e cinco graus.</p>
    <p data-kortti="Helsinque" data-fi="Ja Helsingissä, Suomessa, on hyvin kylmä: miinus viisi astetta. Sataa lunta!">E em Helsinque, na Finlândia, faz muito frio: menos cinco graus. Está nevando!</p>
    <p data-fi="Joulukuussa Brasiliassa on kesä. Hyvää yötä ja nähdään huomenna!">Em dezembro é verão no Brasil. Boa noite e até amanhã!</p>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto: kuukaudet, vuodenajat ja sää</h2>
  <div class="teema" data-otsikko="Kuukaudet (pienellä alkukirjaimella)" data-sanat="janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro"></div>
  <div class="teema" data-otsikko="Vuodenajat" data-sanat="primavera,verão,outono,inverno"></div>
  <div class="teema" data-otsikko="Sää" data-sanat="tempo,calor,frio,chuva,vento,sol,neve,céu,nuvem,seco,grau"></div>
  <div class="teema" data-otsikko="Sääilmaukset" data-sanat="faz calor,faz frio,faz sol,faz vento,chove,está chovendo,está nublado,tem sol"></div>
  <div class="teema" data-otsikko="Järjestysluvut" data-sanat="primeiro,segundo,terceiro,quarto,quinto,sexto,sétimo,oitavo,nono,décimo"></div>
</section>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>Kielioppi</h2>

  <h3>1. Poder, dizer, dar</h3>
  <p>Kolme tärkeää epäsäännöllistä verbiä. Minä-muoto on erikoinen, ja <span class="pt">dar</span>-verbissä melkein kaikki muodot poikkeavat tavallisesta.</p>
  <table class="taivutus">
    <tr><th></th><th>poder (voida)</th><th>dizer (sanoa)</th><th>dar (antaa)</th></tr>
    <tr><td>eu</td><td><span class="pt">posso</span></td><td><span class="pt">digo</span></td><td><span class="pt">dou</span></td></tr>
    <tr><td>você, ele, ela, a gente</td><td><span class="pt">pode</span></td><td><span class="pt">diz</span></td><td><span class="pt">dá</span></td></tr>
    <tr><td>nós</td><td><span class="pt">podemos</span></td><td><span class="pt">dizemos</span></td><td><span class="pt">damos</span></td></tr>
    <tr><td>vocês, eles, elas</td><td><span class="pt">podem</span></td><td><span class="pt">dizem</span></td><td><span class="pt">dão</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Voinko ottaa takin mukaan?">Posso levar o casaco?</li>
    <li class="s" data-fi="Voit ostaa lisää siellä.">Você pode comprar mais lá.</li>
    <li class="s" data-fi="Maia sanoo: hyvää joulua.">A Maia diz: feliz Natal.</li>
    <li class="s" data-fi="Minä sanon sen.">Eu digo isso.</li>
    <li class="s" data-fi="Annan takin Kouvoselle.">Eu dou o casaco para o Kouvonen.</li>
    <li class="s" data-fi="He antavat paljon.">Eles dão muito.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> <span class="pt">poder</span> + perusmuoto tarkoittaa ”voida tehdä” ja sillä pyydetään kohteliaasti: <span class="pt">Você pode abrir a janela?</span> (voisitko avata ikkunan?). Aksentti erottaa sanat: <span class="pt">dá</span> (antaa) ja <span class="pt">da</span> (<span class="pt">de + a</span>). Kirjoita <span class="pt">dou</span>, ei <span class="pt">do</span>.</p>
  </div>
  <div class="huomio">
    <p><b>Espanjasta apua:</b> <span class="pt">digo</span>, <span class="pt">diz</span> ja <span class="pt">dizem</span> ovat lähellä espanjan sanoja digo, dice, dicen. <span class="pt">Posso</span> poikkeaa: espanjassa puedo, portugalissa ei ole diftongia (<span class="pt">posso</span>, <span class="pt">pode</span>). Sanan <span class="pt">dar</span> muodot <span class="pt">dou, dá, damos, dão</span> vastaavat espanjan sanoja doy, da, damos, dan.</p>
  </div>

  <h3>2. Monikko</h3>
  <p><b>Monikko</b> tarkoittaa useampaa kuin yhtä. Portugalissa monikko ilmaistaan päätteellä, ja <b>koko ryhmä</b> mukautuu: artikkeli, substantiivi ja adjektiivi. Suomessa vain substantiivi saa päätteen (”isot talot”), mutta portugalissa kaikki sanat: <span class="pt">as casas grandes</span>.</p>
  <table class="taivutus">
    <tr><th>yksikön pääte</th><th>monikon pääte</th><th>yksikkö</th><th>monikko</th></tr>
    <tr><td>vokaali (a, e, i, o, u)</td><td>+ -s</td><td><span class="pt">casa</span>, <span class="pt">quarto</span>, <span class="pt">mãe</span></td><td><span class="pt">casas</span>, <span class="pt">quartos</span>, <span class="pt">mães</span></td></tr>
    <tr><td>-r, -z</td><td>+ -es</td><td><span class="pt">mulher</span>, <span class="pt">vez</span></td><td><span class="pt">mulheres</span>, <span class="pt">vezes</span></td></tr>
    <tr><td>-m</td><td>-m muuttuu -ns:ksi</td><td><span class="pt">homem</span>, <span class="pt">viagem</span></td><td><span class="pt">homens</span>, <span class="pt">viagens</span></td></tr>
    <tr><td>-al, -el, -ol, -ul</td><td>-l muuttuu -is:ksi</td><td><span class="pt">animal</span>, <span class="pt">hotel</span>, <span class="pt">azul</span></td><td><span class="pt">animais</span>, <span class="pt">hotéis</span>, <span class="pt">azuis</span></td></tr>
    <tr><td>-ão (useimmat)</td><td>-ões</td><td><span class="pt">avião</span>, <span class="pt">estação</span></td><td><span class="pt">aviões</span>, <span class="pt">estações</span></td></tr>
    <tr><td>-ão (muutama)</td><td>-ães tai -ãos</td><td><span class="pt">pão</span>, <span class="pt">mão</span>, <span class="pt">irmão</span></td><td><span class="pt">pães</span>, <span class="pt">mãos</span>, <span class="pt">irmãos</span></td></tr>
    <tr><td>-s (paino viimeisellä tavulla)</td><td>+ -es</td><td><span class="pt">país</span>, <span class="pt">mês</span></td><td><span class="pt">países</span>, <span class="pt">meses</span></td></tr>
    <tr><td>-s (paino muualla)</td><td>ei muutosta</td><td><span class="pt">ônibus</span>, <span class="pt">lápis</span></td><td><span class="pt">ônibus</span>, <span class="pt">lápis</span></td></tr>
  </table>
  <p>Artikkelit saavat monikon: <span class="pt">o</span> → <span class="pt">os</span>, <span class="pt">a</span> → <span class="pt">as</span>, <span class="pt">um</span> → <span class="pt">uns</span>, <span class="pt">uma</span> → <span class="pt">umas</span>. Prepositiot yhtyvät samoin: <span class="pt">nos, nas, dos, das</span>.</p>
  <ul class="esim">
    <li class="s" data-fi="Kolme paitaa">três camisas</li>
    <li class="s" data-fi="kevyet vaatteet">as roupas leves</li>
    <li class="s" data-fi="isot takit">os casacos grandes</li>
    <li class="s" data-fi="kaksi astetta">dois graus</li>
    <li class="s" data-fi="Vanhemmat ovat kotona.">Os pais estão em casa.</li>
    <li class="s" data-fi="Maian ystävät ovat Brasiliassa.">Os amigos da Maia estão no Brasil.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> verbikin saa monikon. Hän-muodon (<span class="pt">ele fala</span>) rinnalla on he-muoto (<span class="pt">eles falam</span>): -ar-verbit päättyvät -am (<span class="pt">falam</span>), -er- ja -ir-verbit -em (<span class="pt">comem, abrem</span>). Sana <span class="pt">pai</span> tarkoittaa isää, <span class="pt">pais</span> vanhempia (isää ja äitiä).</p>
  </div>
  <div class="huomio">
    <p><b>Espanjasta apua:</b> monikon säännöt ovat samankaltaiset. Eroja: <span class="pt">mulher → mulheres</span> (es. mujeres), mutta <span class="pt">animal → animais</span> (es. animales), <span class="pt">avião → aviões</span> (es. aviones) ja <span class="pt">homem → homens</span> (es. hombres).</p>
  </div>

  <h3>3. Kuukaudet, päivämäärä ja järjestysluvut</h3>
  <p>Kuukausien nimet kirjoitetaan portugaliksi <b>pienellä</b> alkukirjaimella: <span class="pt">janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro</span>. Päivämäärä sanotaan muodossa <span class="pt">dia</span> + luku + <span class="pt">de</span> + kuukausi.</p>
  <ul class="esim">
    <li class="s" data-fi="Joulu on 25. joulukuuta.">O Natal é no dia vinte e cinco de dezembro.</li>
    <li class="s" data-fi="Uusivuosi on 1. tammikuuta.">O Ano Novo é no dia primeiro de janeiro.</li>
    <li class="s" data-fi="Mikä päivä tänään on?">Que dia é hoje?</li>
    <li class="s" data-fi="Tänään on 3. marraskuuta.">Hoje é dia três de novembro.</li>
    <li class="s" data-fi="Joulukuussa on kesä.">Em dezembro é verão.</li>
    <li class="s" data-fi="Lokakuusta maaliskuuhun.">De outubro a março.</li>
  </ul>
  <p>Kuukauden ensimmäisestä päivästä käytetään järjestyslukua <span class="pt">primeiro</span>. Muut päivät sanotaan perusluvuilla.</p>
  <p><b>Järjestysluvut</b> kertovat järjestyksen (ensimmäinen, toinen…). Ne mukautuvat sukuun ja luvuun:</p>
  <table class="taivutus">
    <tr><th>luku</th><th>maskuliini</th><th>feminiini</th></tr>
    <tr><td>1.</td><td><span class="pt">primeiro</span></td><td><span class="pt">primeira</span></td></tr>
    <tr><td>2.</td><td><span class="pt">segundo</span></td><td><span class="pt">segunda</span></td></tr>
    <tr><td>3.</td><td><span class="pt">terceiro</span></td><td><span class="pt">terceira</span></td></tr>
    <tr><td>4.</td><td><span class="pt">quarto</span></td><td><span class="pt">quarta</span></td></tr>
    <tr><td>5.</td><td><span class="pt">quinto</span></td><td><span class="pt">quinta</span></td></tr>
    <tr><td>6.</td><td><span class="pt">sexto</span></td><td><span class="pt">sexta</span></td></tr>
    <tr><td>7.</td><td><span class="pt">sétimo</span></td><td><span class="pt">sétima</span></td></tr>
    <tr><td>8.</td><td><span class="pt">oitavo</span></td><td><span class="pt">oitava</span></td></tr>
    <tr><td>9.</td><td><span class="pt">nono</span></td><td><span class="pt">nona</span></td></tr>
    <tr><td>10.</td><td><span class="pt">décimo</span></td><td><span class="pt">décima</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Tämä on ensimmäinen kerta.">Esta é a primeira vez.</li>
    <li class="s" data-fi="Toinen kerros.">O segundo andar.</li>
    <li class="s" data-fi="Kolmas päivä.">O terceiro dia.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> <span class="pt">quarto</span> on sekä makuuhuone että neljäs. <span class="pt">Sexta</span> on ”kuudes” (feminiini), ja <span class="pt">sexta-feira</span> on perjantai.</p>
  </div>

  <h3>4. Sää: fazer, estar, chover</h3>
  <p>Säästä puhuttaessa käytetään verbiä <span class="pt">fazer</span> hän-muodossa, jolloin sanotaan kirjaimellisesti ”tekee kuumaa”. Sadetta kuvataan verbillä <span class="pt">chover</span>.</p>
  <ul class="esim">
    <li class="s" data-fi="On kuuma.">Faz calor.</li>
    <li class="s" data-fi="On kylmä.">Faz frio.</li>
    <li class="s" data-fi="On aurinkoista.">Faz sol.</li>
    <li class="s" data-fi="Tuulee.">Faz vento.</li>
    <li class="s" data-fi="Sataa.">Chove.</li>
    <li class="s" data-fi="Nyt sataa.">Está chovendo agora.</li>
    <li class="s" data-fi="Taivas on pilvinen.">O céu está nublado.</li>
    <li class="s" data-fi="Miten sää on?">Como está o tempo?</li>
    <li class="s" data-fi="Montako astetta on?">Quantos graus faz?</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> <span class="pt">tempo</span> on sekä ”aika” että ”sää”. Ihmiselle sanotaan <span class="pt">estar com calor</span> tai <span class="pt">estar com frio</span> (minulla on kuuma tai kylmä), mutta säästä <span class="pt">fazer calor</span> tai <span class="pt">fazer frio</span>. Arkikielessä kuulet myös <span class="pt">Tá calor</span>.</p>
  </div>
</section>

<section class="osio">
  <h2>Ääntäminen: s</h2>
  <p>Kirjain s äännetään kolmella tavalla sen mukaan, mikä ympäröi sitä.</p>
  <div class="saanto">
    <h3>s on s: sanan alussa, ss ja konsonantin jälkeen</h3>
    <ul class="esim">
      <li class="s">sol</li>
      <li class="s">sala</li>
      <li class="s">passo</li>
      <li class="s">pensar</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>s on z: kahden vokaalin välissä ja ennen soinnillista konsonanttia</h3>
    <ul class="esim">
      <li class="s">casa</li>
      <li class="s">mesa</li>
      <li class="s">mesmo</li>
      <li class="s">desde</li>
      <li class="s">Brasil</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>s tavun lopussa: Belo Horizontessa tavallinen s</h3>
    <p>Tavun tai sanan lopun s on BH:ssa tavallinen s. Siksi monikon -s kuuluu vain s:nä. Mutta kun seuraava sana alkaa vokaalilla, loppu-s muuttuu z:ksi (sanat yhtyvät). Riossa sama s on sh.</p>
    <ul class="esim">
      <li class="s">os amigos</li>
      <li class="s">as casas</li>
      <li class="s">dois graus</li>
      <li class="s">três camisas</li>
      <li class="s">mês</li>
    </ul>
  </div>
  <div class="huomio">
    <p><b>Muista:</b> <b>sc</b> ja <b>ss</b> äännetään s:nä (<span class="pt">nascer, passo</span>). Espanjassa s on aina s, mutta portugalissa s kahden vokaalin välissä on z. Sano <span class="pt">casa</span> ”KA-za”, ei ”KA-sa”.</p>
  </div>
</section>

<aside class="kulttuuri" data-paikka="bh-sade">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Joulu on kesää: Brasilian vuodenajat</h3>
  <figure class="kuva" data-kuva="bh-sade"></figure>
  <p>Suurin osa Brasiliasta on eteläisellä pallonpuoliskolla. Vuodenajat ovat siksi päinvastaiset kuin Suomessa: kesä on joulukuusta maaliskuuhun ja talvi kesäkuusta syyskuuhun. Joulu on siis keskellä kesää. Pohjois-Brasiliassa, lähellä päiväntasaajaa, ei ole selviä vuodenaikoja, vaan sade- ja kuivakausi.</p>
  <p>Belo Horizonte on noin 850 metrin korkeudessa merenpinnasta. Siellä on selvä sadekausi, joka kestää syksystä kevääseen eli suunnilleen lokakuusta maaliskuuhun, ja kuiva kausi huhtikuusta syyskuuhun. Kesällä päivälämpötila on usein 28–30 astetta ja iltapäivällä voi tulla kova kuuro. Talvella on kuivaa ja aurinkoista, ja aamut voivat olla viileitä.</p>
  <p>Brasilialaiset viettävät joulun silti jouluperinteillä: joulukuusi, koristeet ja jouluaaton illallinen. Joulupukki on portugaliksi <span class="pt">Papai Noel</span>. Jay saa siis kokea joulun, jossa ei tarvita takkia eikä lapasia.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>Kuuntelutehtävä: sääennuste</h3>
    <p class="ohje">Katso televisiolähetys (yllä) ilman tekstitystä ja vastaa.</p>
    <div class="valinta" data-oikea="vinte e oito">
      <p class="kysymys">Quantos graus faz amanhã em Belo Horizonte?</p>
      <div class="vaihtoehdot"><button type="button">vinte e cinco</button><button type="button">vinte e oito</button><button type="button">trinta e cinco</button></div>
    </div>
    <div class="valinta" data-oikea="em Helsinque">
      <p class="kysymys">Onde está nevando?</p>
      <div class="vaihtoehdot"><button type="button">em Belo Horizonte</button><button type="button">no Rio de Janeiro</button><button type="button">em Helsinque</button></div>
    </div>
    <div class="valinta" data-oikea="chove muito">
      <p class="kysymys">Em Belo Horizonte, à tarde…</p>
      <div class="vaihtoehdot"><button type="button">faz sol</button><button type="button">chove muito</button><button type="button">faz frio</button></div>
    </div>
    <div class="valinta" data-oikea="no Rio de Janeiro">
      <p class="kysymys">Onde faz trinta e cinco graus?</p>
      <div class="vaihtoehdot"><button type="button">no Rio de Janeiro</button><button type="button">em Belo Horizonte</button><button type="button">em Helsinque</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Muodosta monikko</h3>
    <p class="ohje">Kirjoita sanan monikko. Katso taulukosta pääte.</p>
    <div class="aukot">
      <p>uma casa → duas <span class="aukko" data-oikea="casas"></span></p>
      <p>uma mulher → três <span class="aukko" data-oikea="mulheres"></span></p>
      <p>um homem → dois <span class="aukko" data-oikea="homens"></span></p>
      <p>um animal → muitos <span class="aukko" data-oikea="animais"></span></p>
      <p>um avião → dois <span class="aukko" data-oikea="aviões"></span></p>
      <p>um pão → dois <span class="aukko" data-oikea="pães"></span></p>
      <p>um país → muitos <span class="aukko" data-oikea="países"></span></p>
      <p>um ônibus → dois <span class="aukko" data-oikea="ônibus"></span></p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Poder, dizer, dar</h3>
    <p class="ohje">Kirjoita verbin oikea muoto.</p>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="posso"></span> levar o casaco? (poder)</p>
      <p>Você <span class="aukko" data-oikea="pode"></span> abrir a janela? (poder)</p>
      <p>Eu <span class="aukko" data-oikea="digo"></span> “bom dia” para a Marta. (dizer)</p>
      <p>A Maia <span class="aukko" data-oikea="diz"></span> que faz calor. (dizer)</p>
      <p>Eu <span class="aukko" data-oikea="dou"></span> o casaco para o Kouvonen. (dar)</p>
      <p>A Marta <span class="aukko" data-oikea="dá"></span> um café para o Jay. (dar)</p>
      <p>Eles <span class="aukko" data-oikea="podem"></span> viajar em dezembro. (poder)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Kuuntele kuukausi</h3>
    <p class="ohje">Paina ▶ ja valitse kuukausi, jonka kuulit.</p>
    <div class="valinta" data-kuuntele="dezembro" data-oikea="joulukuu">
      <p class="kysymys">Mikä kuukausi?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">lokakuu</button><button type="button">marraskuu</button><button type="button">joulukuu</button></div>
    </div>
    <div class="valinta" data-kuuntele="março" data-oikea="maaliskuu">
      <p class="kysymys">Mikä kuukausi?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">maaliskuu</button><button type="button">toukokuu</button><button type="button">kesäkuu</button></div>
    </div>
    <div class="valinta" data-kuuntele="julho" data-oikea="heinäkuu">
      <p class="kysymys">Mikä kuukausi?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">kesäkuu</button><button type="button">heinäkuu</button><button type="button">elokuu</button></div>
    </div>
    <div class="valinta" data-kuuntele="setembro" data-oikea="syyskuu">
      <p class="kysymys">Mikä kuukausi?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">syyskuu</button><button type="button">lokakuu</button><button type="button">elokuu</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Yhdistä sää ja suomennos</h3>
    <p class="ohje">Paina portugalinkielistä ilmausta ja sitten sen suomennosta.</p>
    <ul class="yhdista">
      <li data-pari="on kuuma">Faz calor.</li>
      <li data-pari="on kylmä">Faz frio.</li>
      <li data-pari="sataa">Chove.</li>
      <li data-pari="on aurinkoista">Faz sol.</li>
      <li data-pari="tuulee">Faz vento.</li>
      <li data-pari="taivas on pilvinen">O céu está nublado.</li>
      <li data-pari="on kuivaa">Está seco.</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Vuodenaika</h3>
    <p class="ohje">Valitse vuodenaika Belo Horizontessa (eteläinen pallonpuolisko).</p>
    <div class="valinta" data-oikea="verão">
      <p class="kysymys">Em dezembro é ___.</p>
      <div class="vaihtoehdot"><button type="button">verão</button><button type="button">inverno</button><button type="button">outono</button></div>
    </div>
    <div class="valinta" data-oikea="inverno">
      <p class="kysymys">Em julho é ___.</p>
      <div class="vaihtoehdot"><button type="button">verão</button><button type="button">inverno</button><button type="button">primavera</button></div>
    </div>
    <div class="valinta" data-oikea="primavera">
      <p class="kysymys">Em outubro é ___.</p>
      <div class="vaihtoehdot"><button type="button">outono</button><button type="button">primavera</button><button type="button">inverno</button></div>
    </div>
    <div class="valinta" data-oikea="outono">
      <p class="kysymys">Em abril é ___.</p>
      <div class="vaihtoehdot"><button type="button">verão</button><button type="button">outono</button><button type="button">primavera</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause. Luvut kirjoitetaan sanoin.</p>
    <div class="sanelu" data-puhu="Em dezembro é verão."></div>
    <div class="sanelu" data-puhu="Posso levar o casaco?"></div>
    <div class="sanelu" data-puhu="Hoje faz vinte graus."></div>
    <div class="sanelu" data-puhu="O Natal é no dia vinte e cinco."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Missä on paino?</h3>
    <p class="ohje">Paina tavua, jolla on paino. Kuuntele sana lopuksi.</p>
    <p><span class="paino" data-tavut="ja|nei|ro" data-oikea="2"></span> <span class="paino" data-tavut="fe|ve|rei|ro" data-oikea="3"></span> <span class="paino" data-tavut="se|tem|bro" data-oikea="2"></span> <span class="paino" data-tavut="no|vem|bro" data-oikea="2"></span> <span class="paino" data-tavut="de|zem|bro" data-oikea="2"></span> <span class="paino" data-tavut="pri|ma|ve|ra" data-oikea="3"></span> <span class="paino" data-tavut="ve|rão" data-oikea="2"></span> <span class="paino" data-tavut="in|ver|no" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Käännä portugaliksi</h3>
    <p class="ohje">Kirjoita oma käännöksesi ja avaa sitten malli.</p>
    <div class="kaanna"><p class="fi">Joulukuussa Brasiliassa on kesä ja kuuma.</p><p class="s" data-fi="Joulukuussa Brasiliassa on kesä ja kuuma.">Em dezembro, no Brasil, é verão e faz calor.</p></div>
    <div class="kaanna"><p class="fi">Voinko ottaa mukaan kolme paitaa?</p><p class="s" data-fi="Voinko ottaa mukaan kolme paitaa?">Posso levar três camisas?</p></div>
    <div class="kaanna"><p class="fi">Mikä päivä tänään on? Tänään on kymmenes marraskuuta.</p><p class="s" data-fi="Mikä päivä tänään on? Tänään on kymmenes marraskuuta.">Que dia é hoje? Hoje é dia dez de novembro.</p></div>
    <div class="kaanna"><p class="fi">Annan kahvin Martalle ja sanon ”hyvää joulua”.</p><p class="s" data-fi="Annan kahvin Martalle ja sanon ”hyvää joulua”.">Eu dou um café para a Marta e digo “Feliz Natal”.</p></div>
    <div class="kaanna"><p class="fi">Täällä on talvella kylmä, mutta Belo Horizontessa ei.</p><p class="s" data-fi="Täällä on talvella kylmä, mutta Belo Horizontessa ei.">Aqui faz frio no inverno, mas em Belo Horizonte não.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin. Vaihda tiedot omiksi.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Como está o tempo hoje?</summary>
      <p class="s" data-fi="Tänään on kylmä ja sataa.">Hoje faz frio e chove.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Que dia é hoje?</summary>
      <p class="s" data-fi="Tänään on viidestoista syyskuuta.">Hoje é dia quinze de setembro.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Qual é a sua estação favorita?</summary>
      <p class="s" data-fi="Lempivuodenaikani on kesä.">A minha estação favorita é o verão.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Quando é o seu aniversário?</summary>
      <p class="s" data-fi="Syntymäpäiväni on kahdeksas toukokuuta.">O meu aniversário é no dia oito de maio.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l09">
    <div class="dokumentti kalenteri oma" data-tallenna="l09-saa" lang="pt-BR">
      <div class="kal-yla"><b>Previsão do tempo</b><small>tee oma sääennuste kotikaupungillesi ja lue se ääneen kuin juontaja</small></div>
      <div class="kal-rivit">
        <label>Hoje <input name="hoje" placeholder="Hoje em Helsinque faz frio."></label>
        <label>Graus <input name="graus" placeholder="Faz menos dois graus."></label>
        <label>Amanhã <input name="amanha" placeholder="Amanhã chove."></label>
        <label>Lopetus <input name="loppu" placeholder="Boa noite e até amanhã!"></label>
      </div>
    </div>
    <h3>Kotitehtävä</h3>
    <p>Kirjoita 5–6 lausetta säästä ja vuodenajoista. Kerro, millainen sää on Suomessa joulukuussa ja heinäkuussa, millainen sää on tänään ja milloin on syntymäpäiväsi. Käytä ainakin yhtä monikkomuotoa (esimerkiksi <span class="pt">três casacos</span>) ja verbiä <span class="pt">poder</span>. Sano teksti sitten ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Joulukuussa Suomessa on talvi, ja on hyvin kylmä.">Em dezembro, na Finlândia, é inverno e faz muito frio.</p>
      <p class="s" data-fi="Heinäkuussa on kesä, ja on lämmin.">Em julho é verão e faz calor.</p>
      <p class="s" data-fi="Tänään sataa ja on viisi astetta.">Hoje chove e faz cinco graus.</p>
      <p class="s" data-fi="Syntymäpäiväni on kahdennentoista lokakuuta.">O meu aniversário é no dia doze de outubro.</p>
      <p class="s" data-fi="Voinko ottaa mukaan kolme takkia?">Posso levar três casacos?</p>
      <p class="s" data-fi="Brasiliassa en tarvitse takkeja!">No Brasil, eu não preciso de casacos!</p>
    </details>
  </div>
</section>
`
});
