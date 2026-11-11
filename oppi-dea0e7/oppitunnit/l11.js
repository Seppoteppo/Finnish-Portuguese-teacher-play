/* Jakso 11: Jouluostokset Mercado Centralissa. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l11',
  lyhyt: '11',
  jakso: 'Jakso 11',
  otsikko: 'Ostoksilla: vertailu ja se-passiivi',
  lahde: 'Aihe: tori ja ruokakauppa · Kielioppi: vertailu, se-passiivi · Ääntäminen: painomerkit',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi, kotona Belo Horizontessa' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, opettelee portugalia' },
    marta: { nimi: 'Marta', tyyppi: 'nainen', vaihto: 1, kuvaus: 'Maian äiti, eläkkeellä oleva sosiaalityöntekijä' },
    mirela: { nimi: 'Mirela', tyyppi: 'nainen', vaihto: 3, kuvaus: 'Maian lapsuudenystävä, pitää pientä ravintolaa lähellä toria' }
  },

  aiheet: ['ruoka', 'raha', 'kaupunki', 'ominaisuus'],

  sanasto: ['mercado', 'feira', 'barraca', 'queijo', 'doce de leite', 'linguiça', 'cachaça', 'banana', 'laranja', 'manga',
    'cebola', 'alho', 'feijão', 'frango', 'ovo', 'quilo', 'meio quilo', 'preço', 'barato', 'troco',
    'promoção', 'de graça', 'gostoso', 'fresco', 'saudade', 'delícia', 'melhor', 'pior', 'maior', 'menor'],

  sanat: {
    // dialogi
    'horizonte': { fi: 'horisontti', aa: 'o-ri-ZÕ-tsi', ipa: '[oɾiˈzõtʃi]', sl: 'substantiivi, maskuliini' },
    'sábado': { fi: 'lauantai', aa: 'SA-ba-du', ipa: '[ˈsabadu]', sl: 'substantiivi, maskuliini' },
    'no': { fi: '-ssa, -ssä (maskuliinisanan edellä)', aa: 'nu', ipa: '[nu]', sl: 'prepositio + artikkeli', huom: '{em} + {o}' },
    'do': { fi: '-sta, -stä (maskuliinisanan edellä); kuin (vertailussa)', aa: 'du', ipa: '[du]', sl: 'prepositio + artikkeli', huom: '{de} + {o}; vertailussa ”do que”' },
    'mercado': { fi: 'tori, kauppahalli', aa: 'meh-KA-du', ipa: '[mehˈkadu]', sl: 'substantiivi, maskuliini' },
    'central': { fi: 'keskus-, keskeinen', aa: 'sẽ-TRAU', ipa: '[sẽˈtɾaw]', sl: 'adjektiivi' },
    'mercado central': { fi: 'Mercado Central (Belo Horizonten kauppahalli)', aa: 'meh-KA-du sẽ-TRAU', ipa: '[mehˈkadu sẽˈtɾaw]', sl: 'paikan nimi' },
    'olha': { fi: 'katso!, kuule!', aa: 'O-lja', ipa: '[ˈoʎɐ]', sl: 'verbi {olhar}', huom: 'huudahduksena myös ”kuules”' },
    'vende': { fi: 'myy', aa: 'VẼ-di', ipa: '[ˈvẽdʒi]', sl: 'verbi {vender}', huom: '”aqui se vende” = täällä myydään' },
    'queijo': { fi: 'juusto', aa: 'KEI-zhu', ipa: '[ˈkejʒu]', sl: 'substantiivi, maskuliini' },
    'queijos': { fi: 'juustot', aa: 'KEI-zhus', ipa: '[ˈkejʒus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {queijo}' },
    'quanta': { fi: 'kuinka paljon (feminiinisanan edellä)', aa: 'KUÃ-ta', ipa: '[ˈkwɐ̃tɐ]', sl: 'kysymyssana', huom: 'maskuliini {quanto}; ”Quanta coisa!” = kuinka paljon kaikkea!' },
    'minas': { fi: 'Minas (lyhyesti Minas Gerais, Brasilian osavaltio)', aa: 'MĨ-nas', ipa: '[ˈmĩnɐs]', sl: 'paikan nimi', huom: 'kirjaimellisesti ”kaivokset”' },
    'uma': { fi: 'yksi, eräs (feminiinisanan edellä)', aa: 'Ũ-ma', ipa: '[ˈũmɐ]', sl: 'lukusana, artikkeli, feminiini', huom: 'maskuliini {um}' },
    'amiga': { fi: 'ystävä (nainen)', aa: 'a-MI-ga', ipa: '[aˈmiɡɐ]', sl: 'substantiivi, feminiini', huom: 'mies {amigo}' },
    'tem': { fi: 'hänellä on; on (löytyy)', aa: 'TẼI', ipa: '[tẽj]', sl: 'verbi {ter}', huom: 'puhekielessä usein ”on, siellä on”: ”tem promoção”' },
    'saudade': { fi: 'kaipaus, ikävä', aa: 'sau-DA-di', ipa: '[sawˈdadʒi]', sl: 'substantiivi, feminiini', huom: '”Que saudade!” = kuinka kova ikävä on ollut! Brasilialaisten rakastama sana' },
    'gosta': { fi: 'pitää (hän pitää; sinä pidät)', aa: 'GOS-ta', ipa: '[ˈɡɔstɐ]', sl: 'verbi {gostar}', huom: 'aina ”gostar de”: ”você gosta de queijo?”' },
    'pero': { kieli: 'es', fi: 'mutta (espanjaa!)', aa: 'PE-ro', ipa: '[ˈpeɾo]', sl: 'espanjan sana', huom: 'portugaliksi {mas}; ”pero” on Jayn espanjavirhe' },
    'parece': { fi: 'näyttää, vaikuttaa', aa: 'pa-RE-si', ipa: '[paˈɾɛsi]', sl: 'verbi {parecer}' },
    'diz': { fi: 'sanoo', aa: 'DIS', ipa: '[dʒis]', sl: 'verbi {dizer}', huom: '”a gente diz” = me sanomme' },
    'mistura': { fi: 'sekoittaa', aa: 'mis-TU-ra', ipa: '[misˈtuɾɐ]', sl: 'verbi {misturar}' },
    'misturar': { fi: 'sekoittaa', aa: 'mis-tu-RAH', ipa: '[mistuˈɾah]', sl: 'verbi, perusmuoto' },
    'espanhol': { fi: 'espanja (kieli); espanjalainen', aa: 'es-pã-NJOU', ipa: '[espɐ̃ˈɲɔw]', sl: 'substantiivi, maskuliini' },
    'pode': { fi: 'voi, saa', aa: 'PO-di', ipa: '[ˈpɔdʒi]', sl: 'verbi {poder}' },
    'podem': { fi: 'voivat; voitte', aa: 'PO-dẽi', ipa: '[ˈpɔdẽj]', sl: 'verbi {poder}', huom: '”vocês podem” = te voitte' },
    'hum': { fi: 'hmm', aa: 'Ũ', ipa: '[ũ]', sl: 'huudahdus' },
    'delícia': { fi: 'herkku; ihana asia', aa: 'de-LI-sia', ipa: '[deˈlisjɐ]', sl: 'substantiivi, feminiini', huom: '”Que delícia!” = kuinka herkullista!' },
    'leva': { fi: 'vie; ottaa', aa: 'LE-va', ipa: '[ˈlɛvɐ]', sl: 'verbi {levar}', huom: '”a gente leva” = me otamme, me viemme' },
    'quilo': { fi: 'kilo', aa: 'KI-lu', ipa: '[ˈkilu]', sl: 'substantiivi, maskuliini' },
    'meio quilo': { fi: 'puoli kiloa', aa: 'ME-iu KI-lu', ipa: '[ˈmeju ˈkilu]', sl: 'ilmaus', huom: '{meio} on tässä sama kuin ”puoli”' },
    'são': { fi: 'ovat; (hinta) on', aa: 'SÃU', ipa: '[sɐ̃w]', sl: 'verbi {ser}', huom: '”São trinta reais” = se on kolmekymmentä realia' },
    'trinta': { fi: 'kolmekymmentä', aa: 'TRĨ-ta', ipa: '[ˈtɾĩtɐ]', sl: 'lukusana' },
    'vinte': { fi: 'kaksikymmentä', aa: 'VĨ-tsi', ipa: '[ˈvĩtʃi]', sl: 'lukusana' },
    'vinte e cinco': { fi: 'kaksikymmentäviisi', aa: 'VĨ-tsi i SĨ-ku', ipa: '[ˈvĩtʃi i ˈsĩku]', sl: 'lukusana' },
    'reais': { fi: 'realia (Brasilian raha)', aa: 'he-AIS', ipa: '[heˈajs]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {real}' },
    'real': { fi: 'real (Brasilian rahayksikkö); todellinen', aa: 'he-AU', ipa: '[heˈaw]', sl: 'substantiivi, maskuliini; adjektiivi', huom: 'monikko {reais}' },
    'promoção': { fi: 'tarjous, alennusmyynti', aa: 'pro-mo-SÃU', ipa: '[pɾomoˈsɐ̃w]', sl: 'substantiivi, feminiini' },
    'prefiro': { fi: 'pidän mieluummin, suosin', aa: 'pre-FI-ru', ipa: '[pɾeˈfiɾu]', sl: 'verbi {preferir}' },
    'vocês': { fi: 'te', aa: 'vo-SES', ipa: '[voˈses]', sl: 'persoonapronomini, monikko', huom: 'yksikkö {você}' },
    'come': { fi: 'syö', aa: 'KO-mi', ipa: '[ˈkomi]', sl: 'verbi {comer}', huom: '”lá se come bem” = siellä syödään hyvin' },
    // teema: ruoka ja kauppa
    'banana': { fi: 'banaani', aa: 'ba-NÃ-na', ipa: '[baˈnɐ̃nɐ]', sl: 'substantiivi, feminiini' },
    'barata': { fi: 'halpa (feminiinisanan edellä)', aa: 'ba-RA-ta', ipa: '[baˈɾatɐ]', sl: 'adjektiivi', huom: 'maskuliini {barato}' },
    'barato': { fi: 'halpa', aa: 'ba-RA-tu', ipa: '[baˈɾatu]', sl: 'adjektiivi', huom: 'feminiini {barata}; vastakohta {caro}' },
    'manga': { fi: 'mango; hiha', aa: 'MÃ-ga', ipa: '[ˈmɐ̃ɡɐ]', sl: 'substantiivi, feminiini', huom: 'sama sana tarkoittaa vaatteen hihaa' },
    'abacaxi': { fi: 'ananas', aa: 'a-ba-ka-SHI', ipa: '[abakaˈʃi]', sl: 'substantiivi, maskuliini' },
    'laranja': { fi: 'appelsiini; oranssi', aa: 'la-RÃ-zha', ipa: '[laˈɾɐ̃ʒɐ]', sl: 'substantiivi, feminiini' },
    'limão': { fi: 'lime, sitruuna', aa: 'li-MÃU', ipa: '[liˈmɐ̃w]', sl: 'substantiivi, maskuliini', huom: 'Brasiliassa yleensä vihreä lime' },
    'tomate': { fi: 'tomaatti', aa: 'to-MA-tsi', ipa: '[toˈmatʃi]', sl: 'substantiivi, maskuliini' },
    'cebola': { fi: 'sipuli', aa: 'se-BO-la', ipa: '[seˈbolɐ]', sl: 'substantiivi, feminiini' },
    'alho': { fi: 'valkosipuli', aa: 'A-lju', ipa: '[ˈaʎu]', sl: 'substantiivi, maskuliini' },
    'doce de leite': { fi: 'maitokaramelli (paksu, makea maitotahna)', aa: 'DO-si di LEI-tsi', ipa: '[ˈdosi dʒi ˈlejtʃi]', sl: 'ilmaus', huom: 'espanjaksi ”dulce de leche”' },
    'leite': { fi: 'maito', aa: 'LEI-tsi', ipa: '[ˈlejtʃi]', sl: 'substantiivi, maskuliini' },
    'linguiça': { fi: 'makkara (savustettu possumakkara)', aa: 'lĩ-GUI-sa', ipa: '[lĩˈɡwisɐ]', sl: 'substantiivi, feminiini' },
    'arroz': { fi: 'riisi', aa: 'a-HOS', ipa: '[aˈhos]', sl: 'substantiivi, maskuliini' },
    'feijão': { fi: 'pavut', aa: 'fei-ZHÃU', ipa: '[fejˈʒɐ̃w]', sl: 'substantiivi, maskuliini', huom: 'Brasiliassa syödään lähes joka päivä riisin kanssa' },
    'frango': { fi: 'kana (ruokana), broileri', aa: 'FRÃ-gu', ipa: '[ˈfɾɐ̃ɡu]', sl: 'substantiivi, maskuliini' },
    'ovo': { fi: 'muna', aa: 'O-vu', ipa: '[ˈovu]', sl: 'substantiivi, maskuliini', huom: 'monikko ”ovos”' },
    'açúcar': { fi: 'sokeri', aa: 'a-SU-kah', ipa: '[aˈsukah]', sl: 'substantiivi, maskuliini' },
    'cachaça': { fi: 'cachaça (sokeriruokotislaus)', aa: 'ka-SHA-sa', ipa: '[kaˈʃasɐ]', sl: 'substantiivi, feminiini' },
    'pimenta': { fi: 'pippuri, chili', aa: 'pi-MẼ-ta', ipa: '[piˈmẽtɐ]', sl: 'substantiivi, feminiini' },
    'gostoso': { fi: 'herkullinen, maukas; mukava', aa: 'gos-TO-zu', ipa: '[ɡosˈtozu]', sl: 'adjektiivi', huom: 'feminiini ”gostosa”' },
    'fresco': { fi: 'tuore; viileä', aa: 'FRES-ku', ipa: '[ˈfɾesku]', sl: 'adjektiivi', huom: 'feminiini ”fresca”, monikko {frescas}' },
    'frescas': { fi: 'tuoreita (feminiinin monikko)', aa: 'FRES-kas', ipa: '[ˈfɾeskɐs]', sl: 'adjektiivi', huom: 'perusmuoto {fresco}' },
    'salgado': { fi: 'suolainen', aa: 'sau-GA-du', ipa: '[sawˈɡadu]', sl: 'adjektiivi', huom: 'vastakohta {doce}' },
    'barraca': { fi: 'koju, myyntikoju', aa: 'ba-HA-ka', ipa: '[baˈhakɐ]', sl: 'substantiivi, feminiini' },
    'feira': { fi: 'tori, markkinat', aa: 'FEI-ra', ipa: '[ˈfejɾɐ]', sl: 'substantiivi, feminiini', huom: 'myös viikonpäivissä: ”segunda-feira”' },
    'troco': { fi: 'vaihtoraha', aa: 'TRO-ku', ipa: '[ˈtɾoku]', sl: 'substantiivi, maskuliini' },
    'sacola': { fi: 'kassi, muovikassi', aa: 'sa-KO-la', ipa: '[saˈkɔlɐ]', sl: 'substantiivi, feminiini' },
    'de graça': { fi: 'ilmaiseksi', aa: 'di GRA-sa', ipa: '[dʒi ˈɡɾasɐ]', sl: 'ilmaus', huom: 'kirjaimellisesti ”armosta”' },
    'grama': { fi: 'gramma', aa: 'GRÃ-ma', ipa: '[ˈɡɾɐ̃mɐ]', sl: 'substantiivi, maskuliini', huom: '”o grama” = painoyksikkö, ”a grama” = ruoho' },
    'dúzia': { fi: 'tusina', aa: 'DU-zia', ipa: '[ˈduzjɐ]', sl: 'substantiivi, feminiini' },
    'pacote': { fi: 'paketti, pussi', aa: 'pa-KO-tsi', ipa: '[paˈkɔtʃi]', sl: 'substantiivi, maskuliini' },
    'lata': { fi: 'purkki, peltipurkki', aa: 'LA-ta', ipa: '[ˈlatɐ]', sl: 'substantiivi, feminiini' },
    'um pouco': { fi: 'vähän', aa: 'Ũ POU-ku', ipa: '[ũ ˈpowku]', sl: 'ilmaus' },
    // kielioppi
    'esta': { fi: 'tämä (feminiinisanan edellä)', aa: 'ES-ta', ipa: '[ˈɛstɐ]', sl: 'osoitepronomini', huom: 'maskuliini {este}; ei sama kuin {está}' },
    'está': { fi: 'on (sijainti, tila)', aa: 'es-TA', ipa: '[esˈta]', sl: 'verbi {estar}', huom: 'painomerkki erottaa sanasta {esta}' },
    'aquela': { fi: 'tuo (feminiinisanan edellä, kaukana)', aa: 'a-KE-la', ipa: '[aˈkɛlɐ]', sl: 'osoitepronomini', huom: 'maskuliini {aquele}' },
    'essa': { fi: 'tuo (feminiinisanan edellä)', aa: 'E-sa', ipa: '[ˈɛsɐ]', sl: 'osoitepronomini', huom: 'maskuliini {esse}' },
    'outra': { fi: 'toinen (feminiinisanan edellä)', aa: 'OU-tra', ipa: '[ˈowtɾɐ]', sl: 'pronomini, adjektiivi', huom: 'maskuliini {outro}' },
    'bonita': { fi: 'kaunis (feminiinisanan edellä)', aa: 'bo-NI-ta', ipa: '[boˈnitɐ]', sl: 'adjektiivi', huom: 'maskuliini {bonito}' },
    'tenho': { fi: 'minulla on', aa: 'TẼ-nju', ipa: '[ˈtẽɲu]', sl: 'verbi {ter}' },
    'tanto': { fi: 'niin paljon; yhtä paljon', aa: 'TÃ-tu', ipa: '[ˈtɐ̃tu]', sl: 'pronomini, adverbi', huom: 'taipuu: {tanta}, {tantos}, {tantas}' },
    'tanta': { fi: 'niin paljon (feminiinisanan edellä)', aa: 'TÃ-ta', ipa: '[ˈtɐ̃tɐ]', sl: 'pronomini', huom: 'perusmuoto {tanto}' },
    'tantos': { fi: 'niin monta (maskuliinin monikko)', aa: 'TÃ-tus', ipa: '[ˈtɐ̃tus]', sl: 'pronomini', huom: 'perusmuoto {tanto}' },
    'tantas': { fi: 'niin monta (feminiinin monikko)', aa: 'TÃ-tas', ipa: '[ˈtɐ̃tɐs]', sl: 'pronomini', huom: 'perusmuoto {tanto}' },
    'pressa': { fi: 'kiire', aa: 'PRE-sa', ipa: '[ˈpɾɛsɐ]', sl: 'substantiivi, feminiini', huom: '”ter pressa” = olla kiire' },
    'custa': { fi: 'maksaa', aa: 'KUS-ta', ipa: '[ˈkustɐ]', sl: 'verbi {custar}', huom: '”Quanto custa?” = paljonko se maksaa?' },
    'pessoas': { fi: 'ihmiset', aa: 'pe-SO-as', ipa: '[peˈsoɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {pessoa}' },
    'fala': { fi: 'puhuu', aa: 'FA-la', ipa: '[ˈfalɐ]', sl: 'verbi {falar}' },
    'finlandês': { fi: 'suomi (kieli); suomalainen', aa: 'fĩ-lã-DES', ipa: '[fĩlɐ̃ˈdes]', sl: 'substantiivi, maskuliini' },
    'faz': { fi: 'tekee', aa: 'FAS', ipa: '[fas]', sl: 'verbi {fazer}', huom: '”Isso não se faz!” = näin ei tehdä!' },
    'escreve': { fi: 'kirjoittaa', aa: 'es-KRE-vi', ipa: '[esˈkɾɛvi]', sl: 'verbi {escrever}', huom: '”Como se escreve?” = miten se kirjoitetaan?' },
    'vende-se': { fi: 'myydään (kirjakieli, kylteissä)', aa: 'VẼ-di-si', ipa: '[ˈvẽdʒisi]', sl: 'verbi {vender}', huom: 'puhekielessä ”se vende”' },
    'vendem-se': { fi: 'myydään (monikko, kirjakieli)', aa: 'VẼ-dẽi-si', ipa: '[ˈvẽdẽjsi]', sl: 'verbi {vender}', huom: 'puhekielessä usein ”se vende”' },
    'à': { fi: '-lle, -hin (feminiinisanan edellä)', aa: 'a', ipa: '[a]', sl: 'prepositio + artikkeli', huom: '{a} + {a}; gravis-merkki' },
    'vou': { fi: 'menen', aa: 'VOU', ipa: '[vow]', sl: 'verbi {ir}' },
    'avó': { fi: 'isoäiti', aa: 'a-VO', ipa: '[aˈvɔ]', sl: 'substantiivi, feminiini', huom: 'isoisä {avô}' },
    // valintatehtävät
    'vendo': { fi: 'myyn', aa: 'VẼ-du', ipa: '[ˈvẽdu]', sl: 'verbi {vender}' },
    'vendem': { fi: 'myyvät; myydään (monikko)', aa: 'VẼ-dẽi', ipa: '[ˈvẽdẽj]', sl: 'verbi {vender}' },
    'falo': { fi: 'puhun', aa: 'FA-lu', ipa: '[ˈfalu]', sl: 'verbi {falar}' },
    'falamos': { fi: 'puhumme', aa: 'fa-LÃ-mus', ipa: '[faˈlɐ̃mus]', sl: 'verbi {falar}' },
    'digo': { fi: 'sanon', aa: 'DI-gu', ipa: '[ˈdʒiɡu]', sl: 'verbi {dizer}' },
    'dizem': { fi: 'he sanovat; sanotaan', aa: 'DI-zẽi', ipa: '[ˈdʒizẽj]', sl: 'verbi {dizer}' },
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat ostaa ruokaa torilta ja kysyä hintaa.</li>
  <li>Osaat vertailla: kalliimpi, halvempi, paras, yhtä hyvä kuin.</li>
  <li>Osaat sanoa, mitä jossakin myydään tai puhutaan (<span class="pt">se</span>-passiivi).</li>
  <li>Osaat lukea portugalin painomerkit: á, â, ã, ç.</li>
</ul>
<p data-paikka="mercado-central-entrada">Belo Horizonte, lauantaiaamu. Maia vie Jayn ja äitinsä Martan Mercado Centralin torille ostamaan jouluruokia. Siellä he tapaavat Maian lapsuudenystävän Mirelan.</p>

<section class="osio" data-paikka="mercado-central">
  <h2>Dialogi: No Mercado Central</h2>
  <p class="ohje">Kuuntele ensin koko dialogi ilman suomennoksia. Paina sitten roolileikkiä ja puhu Jayn repliikit itse. Huomaa Jayn virhe: espanjan <span class="pt">pero</span> ei kuulu portugaliin.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Belo Horizonte, lauantaiaamu.">Belo Horizonte, sábado de manhã.</p>
    <p class="s" data-h="kertoja" data-fi="Jay, Maia ja Marta ovat Mercado Centralissa.">Jay, Maia e Marta estão no Mercado Central.</p>
    <p class="s" data-h="marta" data-fi="Katsokaa! Täällä myydään kaikkea: juustoa, kahvia, maitokaramellia…">Olha, gente! Aqui se vende de tudo: queijo, café, doce de leite…</p>
    <p class="s" data-h="jay" data-fi="Voi vitsi! Kuinka paljon tavaraa!">Nossa! Quanta coisa!</p>
    <p class="s" data-h="marta" data-fi="Ensin juusto. Minasin juusto on maailman paras.">Primeiro, o queijo. O queijo de Minas é o melhor do mundo.</p>
    <p class="s" data-h="kertoja" data-fi="Mirela, Maian ystävä, pitää ravintolaa lähellä toria.">Mirela, uma amiga da Maia, tem um restaurante perto do mercado.</p>
    <p class="s" data-h="mirela" data-fi="Maia! Kuinka kova ikävä minulla on ollut!">Maia! Que saudade!</p>
    <p class="s" data-h="maia" data-fi="Mirela! Tässä on Jay.">Mirela! Este é o Jay.</p>
    <p class="s" data-h="mirela" data-fi="Hauska tutustua, Jay! Pidätkö juustosta?">Muito prazer, Jay! Você gosta de queijo?</p>
    <p class="s" data-h="jay" data-fi="Tykkään kovasti! Tämä juusto on kalliimpi kuin tuo, mutta se näyttää paremmalta.">Gosto muito! Este queijo é mais caro que aquele, pero parece melhor.</p>
    <p class="s" data-h="mirela" data-fi="Pero? Portugaliksi sanotaan ”mas”, Jay!">Pero? Em português a gente diz “mas”, Jay!</p>
    <p class="s" data-h="maia" data-fi="Hän sekoittaa vielä espanjaa ja portugalia.">Ele ainda mistura o espanhol com o português.</p>
    <p class="s" data-h="jay" data-fi="Joo, joo. Mutta se näyttää paremmalta, eikö?">Tá, tá. Mas parece melhor, né?</p>
    <p class="s" data-h="mirela" data-fi="Totta tosiaan. Se on kalliimpi kuin toinen, mutta se on torin paras. Voit maistaa!">Parece mesmo. É mais caro do que o outro, mas é o melhor do mercado. Pode provar!</p>
    <p class="s" data-h="jay" data-fi="Hmm… kuinka herkullista!">Hum… Que delícia!</p>
    <p class="s" data-h="marta" data-fi="Otetaan siis puoli kiloa. Kuinka paljon se on?">Então a gente leva meio quilo. Quanto é?</p>
    <p class="s" data-h="mirela" data-fi="Se on kolmekymmentä realia, mutta tänään on tarjous: kaksikymmentäviisi.">São trinta reais, mas hoje tem promoção: vinte e cinco.</p>
    <p class="s" data-h="marta" data-fi="Erinomaista! Entä kahvi? Täällä myydään Minasin parasta kahvia.">Ótimo! E o café? Aqui se vende o melhor café de Minas.</p>
    <p class="s" data-h="jay" data-fi="Minä pidän mieluummin oluesta…">Eu prefiro cerveja…</p>
    <p class="s" data-h="maia" data-fi="Jay! Tänään kahvi on tärkeämpää kuin olut.">Jay! Hoje o café é mais importante do que a cerveja.</p>
    <p class="s" data-h="jay" data-fi="Hyvä on. Kahvi on yhtä hyvää kuin olut… melkein.">Tá bom. O café é tão bom quanto a cerveja… quase.</p>
    <p class="s" data-h="mirela" data-fi="Voitte mennä sen jälkeen ravintolaani. Siellä syödään todella hyvin!">Depois vocês podem ir ao meu restaurante. Lá se come muito bem!</p>
  </div>
</section>

<section class="osio" data-paikka="mercado-central">
  <h2>Mirelan vaaka: mikä on kalliimpi?</h2>
  <p class="ohje">Mirela näyttää torin hinnat vanhalla vaa'alla. Napauta kahta tuotetta: kalliimpi painaa vaakakupin alas, ja Mirela sanoo vertailun ääneen. Kokeile myös kahta yhtä kallista tuotetta. Mitä Mirela silloin sanoo?</p>
  <div class="vaaka" data-h="mirela" data-valuutta="R$">
    <p data-tuote="o queijo" data-suku="m" data-hinta="60" data-ikoni="🧀">queijo</p>
    <p data-tuote="a cachaça" data-suku="f" data-hinta="45" data-ikoni="🥃">cachaça</p>
    <p data-tuote="a linguiça" data-suku="f" data-hinta="30" data-ikoni="🌭">linguiça</p>
    <p data-tuote="o café" data-suku="m" data-hinta="30" data-ikoni="☕">café</p>
    <p data-tuote="o doce de leite" data-suku="m" data-hinta="18" data-ikoni="🍯">doce de leite</p>
    <p data-tuote="a pimenta" data-suku="f" data-hinta="8" data-ikoni="🌶️">pimenta</p>
  </div>
  <p>Huomaa, että adjektiivi taipuu ensimmäisen tuotteen mukaan: <span class="pt">o queijo é mais caro</span>, mutta <span class="pt">a cachaça é mais cara</span>.</p>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Hedelmät ja vihannekset" data-sanat="banana,laranja,limão,manga,abacaxi,tomate,cebola,alho"></div>
  <div class="teema" data-otsikko="Ruoka ja juoma" data-sanat="queijo,café,doce de leite,linguiça,arroz,feijão,frango,ovo,leite,açúcar,cachaça"></div>
  <div class="teema" data-otsikko="Kauppa ja hinta" data-sanat="mercado,feira,barraca,preço,barato,caro,troco,promoção,sacola,de graça,real"></div>
  <div class="teema" data-otsikko="Määrät" data-sanat="quilo,meio quilo,grama,dúzia,pacote,lata,garrafa,um pouco"></div>
  <div class="teema" data-otsikko="Maku ja tuoreus" data-sanat="gostoso,delícia,fresco,doce,salgado,pimenta"></div>
</section>

<section class="osio">
  <h2>Kielioppi</h2>

  <h3>1. Vertailu: mais, menos, tão</h3>
  <p>Vertailussa verrataan kahta asiaa. Suomessa adjektiiviin lisätään pääte: halpa, halvempi, halvin. Portugalissa adjektiivi ei muutu lainkaan. Sen eteen tulee erillinen sana, ja ”kuin” on <span class="pt">que</span> tai <span class="pt">do que</span>.</p>
  <table class="taivutus">
    <tr><td><span class="pt">mais</span> + adjektiivi + <span class="pt">(do) que</span></td><td>enemmän kuin, -mpi kuin</td></tr>
    <tr><td><span class="pt">menos</span> + adjektiivi + <span class="pt">(do) que</span></td><td>vähemmän kuin, ei niin ... kuin</td></tr>
    <tr><td><span class="pt">tão</span> + adjektiivi + <span class="pt">quanto</span></td><td>yhtä ... kuin</td></tr>
    <tr><td><span class="pt">tanto</span> + substantiivi + <span class="pt">quanto</span></td><td>yhtä paljon ... kuin</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Juusto on kalliimpi kuin kahvi.">O queijo é mais caro que o café.</li>
    <li class="s" data-fi="Banaani on halvempaa kuin mango.">A banana é mais barata do que a manga.</li>
    <li class="s" data-fi="Tämä tori on vähemmän kallis kuin tuo kauppa.">Esta feira é menos cara do que aquela loja.</li>
    <li class="s" data-fi="Kahvi on yhtä hyvää kuin olut.">O café é tão bom quanto a cerveja.</li>
    <li class="s" data-fi="Minulla on yhtä paljon kiirettä kuin sinulla.">Eu tenho tanta pressa quanto você.</li>
  </ul>
  <p>Adjektiivi taipuu kuten ennenkin sen mukaan, mistä puhutaan: <span class="pt">a banana é mais barata</span>, mutta <span class="pt">o queijo é mais barato</span>. Sana <span class="pt">tanto</span> taipuu myös: <span class="pt">tanto, tanta, tantos, tantas</span>.</p>

  <h3>Kun perässä on luku: mais de</h3>
  <p>Kun vertailun perässä on luku, ”kuin” on <span class="pt">de</span>, ei <span class="pt">que</span>.</p>
  <ul class="esim">
    <li class="s" data-fi="Se maksaa yli kolmekymmentä realia.">Custa mais de trinta reais.</li>
    <li class="s" data-fi="Täällä on alle kymmenen ihmistä.">Aqui tem menos de dez pessoas.</li>
  </ul>

  <h3>Epäsäännölliset vertailumuodot</h3>
  <p>Neljällä yleisellä sanalla on oma vertailumuoto. Niitä ei muodosteta sanalla <span class="pt">mais</span>.</p>
  <table class="taivutus">
    <tr><td><span class="pt">bom</span> hyvä</td><td><span class="pt">melhor</span> parempi</td></tr>
    <tr><td><span class="pt">ruim</span> huono</td><td><span class="pt">pior</span> huonompi</td></tr>
    <tr><td><span class="pt">grande</span> suuri</td><td><span class="pt">maior</span> suurempi</td></tr>
    <tr><td><span class="pt">pequeno</span> pieni</td><td><span class="pt">menor</span> pienempi</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Tämä juusto on parempi kuin tuo.">Este queijo é melhor do que aquele.</li>
    <li class="s" data-fi="Se appelsiini on huonompi kuin toinen.">Essa laranja é pior do que a outra.</li>
    <li class="s" data-fi="Mercado Central on suurempi kuin tämä tori.">O Mercado Central é maior do que esta feira.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> sano <span class="pt">melhor</span>, älä koskaan <span class="pt">mais bom</span>. Myös adverbeillä on omat muotonsa: <span class="pt">bem</span> (hyvin) → <span class="pt">melhor</span> (paremmin), <span class="pt">mal</span> (huonosti) → <span class="pt">pior</span> (huonommin). Esimerkiksi <span class="pt">Ele fala melhor do que eu.</span> (Hän puhuu paremmin kuin minä.)</p>
  </div>

  <h3>Superlatiivi: o mais, a mais</h3>
  <p>Superlatiivi tarkoittaa ”kaikkein -in”: halvin, paras. Portugalissa se tehdään määräisellä artikkelilla ja vertailumuodolla. Perässä oleva ”-sta” on <span class="pt">de</span> tai <span class="pt">de</span> + määräinen artikkeli (<span class="pt">do, da</span>).</p>
  <ul class="esim">
    <li class="s" data-fi="Tämä on torin halvin juusto.">Este é o queijo mais barato do mercado.</li>
    <li class="s" data-fi="Hän on perheen nuorin.">Ele é o mais novo da família.</li>
    <li class="s" data-fi="Tämä on koko Brasilian paras kahvi.">Este é o melhor café do Brasil.</li>
    <li class="s" data-fi="Se on kaupungin kaunein tori.">É a feira mais bonita da cidade.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> artikkeli seuraa substantiivia: <span class="pt">o melhor queijo</span>, <span class="pt">a melhor banana</span>. Sana <span class="pt">mais</span> ([majs]) ei ole sama kuin <span class="pt">mas</span> ([mas], mutta).</p>
  </div>

  <h3>Suomeen ja espanjaan verrattuna</h3>
  <p><b>Suomi:</b> halpa → halvempi → halvin (päätteet). Portugalissa ja espanjassa käytetään erillisiä sanoja. <b>Espanja:</b> tämä on sinulle helppoa, koska rakenne on lähes sama: <span class="pt">mais</span> … <span class="pt">que</span> = <i>más</i> … <i>que</i>, <span class="pt">tão</span> … <span class="pt">quanto</span> = <i>tan</i> … <i>como</i>, <span class="pt">melhor</span> = <i>mejor</i>, <span class="pt">pior</span> = <i>peor</i>, <span class="pt">maior</span> = <i>mayor</i>, <span class="pt">menor</span> = <i>menor</i>. Muista kuitenkin Jayn virhe: espanjan <i>pero</i> on portugaliksi <span class="pt">mas</span>.</p>

  <h3>2. Se-passiivi: aqui se vende</h3>
  <p>Passiivi on verbin muoto, jossa tekijää ei mainita: suomeksi ”myydään”, ”puhutaan”, ”syödään”. Portugalissa passiivin voi tehdä pikkusanalla <span class="pt">se</span> ja verbin hän-muodolla. Sana <span class="pt">se</span> tulee verbin eteen.</p>
  <ul class="esim">
    <li class="s" data-fi="Täällä myydään juustoa.">Aqui se vende queijo.</li>
    <li class="s" data-fi="Brasiliassa puhutaan portugalia.">No Brasil se fala português.</li>
    <li class="s" data-fi="Minasissa syödään paljon juustoa.">Em Minas se come muito queijo.</li>
    <li class="s" data-fi="Miten sanotaan ”queijo” suomeksi?">Como se diz “queijo” em finlandês?</li>
    <li class="s" data-fi="Näin ei tehdä!">Isso não se faz!</li>
  </ul>
  <p>Kirjoitetussa kielessä verbi taipuu sen mukaan, mitä myydään: yksikössä <span class="pt">vende-se um queijo</span>, monikossa <span class="pt">vendem-se queijos</span>. Kylteissä <span class="pt">se</span> on verbin perässä viivalla (<span class="pt">Vende-se casa.</span> = Talo myytävänä). Puheessa käytetään yleensä yksikköä: <span class="pt">aqui se vende queijos</span> on tavallinen.</p>
  <div class="muista">
    <p><b>Muista:</b> <span class="pt">se</span> + verbin hän-muoto = ”tehdään, myydään, puhutaan”. Kysymyksissä tämä on hyvin yleinen: <span class="pt">Como se diz…?</span> (Miten sanotaan…?), <span class="pt">Como se escreve?</span> (Miten se kirjoitetaan?).</p>
  </div>
  <p><b>Espanja:</b> sama rakenne: <i>aquí se vende queso</i> = <span class="pt">aqui se vende queijo</span>. Voit siis käyttää espanjasta tuttua ajattelutapaa.</p>
</section>

<section class="osio">
  <h2>Ääntäminen: painomerkit</h2>
  <p>Oppitunnilla 1 opit, että paino on yleensä toiseksi viimeisellä tavulla. Painomerkit kertovat poikkeukset ja vokaalin laadun.</p>

  <div class="saanto">
    <h3>Ilman merkkiä: kaksi sääntöä</h3>
    <p>Jos sanassa ei ole painomerkkiä, painoa ei tarvitse arvata:</p>
    <ul>
      <li>Sana loppuu vokaaliin tai päätteeseen -s, -m, -ns: paino on toiseksi viimeisellä tavulla.</li>
      <li>Sana loppuu konsonanttiin l, r, z tai vokaaliin i, u: paino on viimeisellä tavulla.</li>
    </ul>
    <ul class="esim">
      <li class="s">mercado</li>
      <li class="s">queijo</li>
      <li class="s">banana</li>
      <li class="s">Brasil</li>
      <li class="s">mulher</li>
      <li class="s">feliz</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>Merkillä: á, é, í, ó, ú ja â, ê, ô</h3>
    <p>Akuutti (´) ja sirkumfleksi (^) osoittavat painollisen tavun. Akuutti tekee a:sta, e:stä ja o:sta avoimen (suu auki), sirkumfleksi suljetun.</p>
    <ul class="esim">
      <li class="s">café</li>
      <li class="s">açúcar</li>
      <li class="s">fácil</li>
      <li class="s">música</li>
      <li class="s">você</li>
      <li class="s">avô</li>
      <li class="s">ônibus</li>
    </ul>
    <p>Pari <span class="pt">avó</span> (isoäiti, avoin o) ja <span class="pt">avô</span> (isoisä, suljettu o) erottuu vain tästä merkistä.</p>
  </div>

  <div class="saanto">
    <h3>Tilde ã, õ ja cedilja ç</h3>
    <p>Tilde (~) tekee vokaalista nasaalin, ja paino on yleensä tildetavulla: <span class="pt">pão</span>, <span class="pt">mãe</span>, <span class="pt">coração</span>. Cedilja (ç) on s-äänne ennen a:ta, o:ta ja u:ta: <span class="pt">açúcar</span>, <span class="pt">almoço</span>. Ennen e:tä ja i:tä ei tarvita cedilja, koska c on siellä jo s.</p>
    <ul class="esim">
      <li class="s">coração</li>
      <li class="s">limão</li>
      <li class="s">feijão</li>
      <li class="s">almoço</li>
      <li class="s">preço</li>
    </ul>
  </div>

  <div class="saanto">
    <h3>Merkki muuttaa merkityksen</h3>
    <p>Joskus pelkkä merkki erottaa kaksi sanaa. Kuuntele parit:</p>
    <ul class="esim">
      <li class="s" data-fi="on (hän on jossakin)">está</li>
      <li class="s" data-fi="tämä (feminiini)">esta</li>
      <li class="s" data-fi="maa">país</li>
      <li class="s" data-fi="vanhemmat">pais</li>
    </ul>
    <p>Merkki <span class="pt">à</span> (gravis) esiintyy vain, kun prepositio <span class="pt">a</span> ja artikkeli <span class="pt">a</span> sulautuvat: <span class="pt">Vou à feira.</span> (Menen torille.) Äänteeseen se ei vaikuta.</p>
  </div>
</section>

<aside class="kulttuuri" data-paikka="mercado-central-entrada">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Mercado Central</h3>
  <figure class="kuva" data-kuva="mercado-central"></figure>
  <p>Mercado Central on Belo Horizonten vanha kauppahalli kaupungin keskustassa. Se avattiin vuonna 1929, noin kolmekymmentä vuotta kaupungin perustamisen jälkeen. Hallissa on satoja pieniä myymälöitä ja kojuja, ja tori on edelleen sekä asukkaiden arkinen ostospaikka että yksi kaupungin tunnetuimmista nähtävyyksistä.</p>
  <p>Torilta löytyy ruokaa, mausteita, hedelmiä, kahvia, cachaçaa, käsitöitä ja kukkia. Tunnetuimpia tuotteita ovat Minas Geraisin juustot, maitokaramelli (<span class="pt">doce de leite</span>), makkarat (<span class="pt">linguiça</span>) ja pimentat eli chilit. Minas Gerais tunnetaan käsityönä tehdyistä juustoistaan, ja niiden valmistustapa on Brasiliassa suojeltu kulttuuriperintö.</p>
  <p>Torin ympärillä ja hallin sisällä on myös pieniä ravintoloita ja baareja. Tarinassa Mirelan ravintola on aivan lähellä, ja sinne mennään torikäynnin jälkeen syömään.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: Mirelan vaaka</h3>
    <p class="ohje">Katso Mirelan vaakaa ja hintoja yllä. Valitse oikea vaihtoehto.</p>
    <div class="valinta" data-oikea="o queijo">
      <p class="kysymys">Qual é o mais caro?</p>
      <div class="vaihtoehdot"><button type="button">a cachaça</button><button type="button">o queijo</button><button type="button">o café</button></div>
    </div>
    <div class="valinta" data-oikea="a pimenta">
      <p class="kysymys">Qual é o mais barato?</p>
      <div class="vaihtoehdot"><button type="button">a pimenta</button><button type="button">o doce de leite</button><button type="button">a linguiça</button></div>
    </div>
    <div class="valinta" data-oikea="tão">
      <p class="kysymys">A linguiça é ___ cara quanto o café.</p>
      <div class="vaihtoehdot"><button type="button">mais</button><button type="button">menos</button><button type="button">tão</button></div>
    </div>
    <div class="valinta" data-oikea="menos">
      <p class="kysymys">A cachaça é ___ cara do que o queijo.</p>
      <div class="vaihtoehdot"><button type="button">mais</button><button type="button">menos</button><button type="button">tão</button></div>
    </div>
    <div class="valinta" data-oikea="caro">
      <p class="kysymys">O doce de leite é mais ___ do que a pimenta.</p>
      <div class="vaihtoehdot"><button type="button">caro</button><button type="button">cara</button><button type="button">barato</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Täydennä vertailu</h3>
    <p class="ohje">Kirjoita puuttuva sana: <span class="pt">mais, menos, tão, melhor, pior, maior</span>.</p>
    <div class="aukot">
      <p>O queijo é <span class="aukko" data-oikea="mais"></span> caro do que o café.</p>
      <p>A banana é <span class="aukko" data-oikea="menos"></span> cara do que a manga. (halvempi)</p>
      <p>Este café é <span class="aukko" data-oikea="tão"></span> bom quanto aquele.</p>
      <p>Este queijo é <span class="aukko" data-oikea="melhor"></span> do que aquele.</p>
      <p>Essa laranja é <span class="aukko" data-oikea="pior"></span> do que a outra.</p>
      <p>Esta é a <span class="aukko" data-oikea="maior"></span> barraca do mercado.</p>
      <p>Aquele pacote custa <span class="aukko" data-oikea="mais"></span> de vinte reais.</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Yhdistä ruoat</h3>
    <ul class="yhdista">
      <li data-pari="juusto">o queijo</li>
      <li data-pari="appelsiini">a laranja</li>
      <li data-pari="sipuli">a cebola</li>
      <li data-pari="valkosipuli">o alho</li>
      <li data-pari="pavut">o feijão</li>
      <li data-pari="kana">o frango</li>
      <li data-pari="muna">o ovo</li>
      <li data-pari="maito">o leite</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Valitse oikea muoto</h3>
    <div class="valinta" data-oikea="se vende">
      <p class="kysymys">Aqui ___ queijo.</p>
      <div class="vaihtoehdot"><button type="button">vendo</button><button type="button">se vende</button><button type="button">vendem</button></div>
    </div>
    <div class="valinta" data-oikea="se fala">
      <p class="kysymys">No Brasil ___ português.</p>
      <div class="vaihtoehdot"><button type="button">falo</button><button type="button">se fala</button><button type="button">falamos</button></div>
    </div>
    <div class="valinta" data-oikea="se diz">
      <p class="kysymys">Como ___ “queijo” em finlandês?</p>
      <div class="vaihtoehdot"><button type="button">se diz</button><button type="button">eu digo</button><button type="button">dizem</button></div>
    </div>
    <div class="valinta" data-oikea="se vendem">
      <p class="kysymys">Aqui ___ frutas frescas. (kirjakieli, monikko)</p>
      <div class="vaihtoehdot"><button type="button">se vende</button><button type="button">se vendem</button><button type="button">vendo</button></div>
    </div>
    <div class="valinta" data-oikea="mas">
      <p class="kysymys">Portugaliksi ”mutta” on…</p>
      <div class="vaihtoehdot"><button type="button">pero</button><button type="button">mas</button><button type="button">mais</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>4. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause. Muista painomerkit.</p>
    <div class="sanelu" data-puhu="Este queijo é mais caro que aquele."></div>
    <div class="sanelu" data-puhu="Aqui se vende de tudo."></div>
    <div class="sanelu" data-puhu="O café é tão bom quanto a cerveja."></div>
    <div class="sanelu" data-puhu="Quanto custa meio quilo?"></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Banaani on halvempaa kuin mango.</p><p class="s" data-fi="Banaani on halvempaa kuin mango.">A banana é mais barata do que a manga.</p></div>
    <div class="kaanna"><p class="fi">Täällä myydään hyvää kahvia.</p><p class="s" data-fi="Täällä myydään hyvää kahvia.">Aqui se vende café bom.</p></div>
    <div class="kaanna"><p class="fi">Tämä on kaupan paras juusto.</p><p class="s" data-fi="Tämä on kaupan paras juusto.">Este é o melhor queijo da loja.</p></div>
    <div class="kaanna"><p class="fi">Kuinka paljon puoli kiloa maksaa?</p><p class="s" data-fi="Kuinka paljon puoli kiloa maksaa?">Quanto custa meio quilo?</p></div>
    <div class="kaanna"><p class="fi">Miten sanotaan ”pão” suomeksi?</p><p class="s" data-fi="Miten sanotaan ”pão” suomeksi?">Como se diz “pão” em finlandês?</p></div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Mikä tavu on painollinen?</h3>
    <p class="ohje">Napauta tavua, jolla paino on. Sana luetaan ääneen.</p>
    <p><span class="paino" data-tavut="mer|ca|do" data-oikea="2"></span> <span class="paino" data-tavut="quei|jo" data-oikea="1"></span> <span class="paino" data-tavut="a|çú|car" data-oikea="2"></span> <span class="paino" data-tavut="ba|ra|to" data-oikea="2"></span></p>
    <p><span class="paino" data-tavut="fei|jão" data-oikea="2"></span> <span class="paino" data-tavut="sau|da|de" data-oikea="2"></span> <span class="paino" data-tavut="fá|cil" data-oikea="1"></span> <span class="paino" data-tavut="ca|fé" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>7. Mitä vastaat?</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Qual é mais caro, o queijo ou o café?</summary>
      <p class="s" data-fi="Juusto on kalliimpi kuin kahvi.">O queijo é mais caro do que o café.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que se vende no Mercado Central?</summary>
      <p class="s" data-fi="Siellä myydään juustoa, kahvia, maitokaramellia ja paljon muuta.">Se vende queijo, café, doce de leite e muito mais.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você gosta mais de café ou de cerveja?</summary>
      <p class="s" data-fi="Pidän enemmän kahvista. (tai: oluesta)">Eu gosto mais de café.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l11">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l11-feira" lang="pt-BR">
      <div class="kal-yla"><b>A minha feira</b><small>kirjoita oma ostoslista ja vertaa hintoja</small></div>
      <div class="kal-rivit">
        <label>Produto 1 <input name="tuote1" placeholder="o queijo: R$ 60"></label>
        <label>Produto 2 <input name="tuote2" placeholder="a manga: R$ 8"></label>
        <label>Mais caro <input name="vertailu" placeholder="O queijo é mais caro do que a manga."></label>
        <label>Aqui se vende… <input name="passiivi" placeholder="Aqui se vende café bom."></label>
        <label>O melhor <input name="paras" placeholder="O melhor do mercado é o doce de leite!"></label>
      </div>
    </div>
    <p>Kirjoita 5 lausetta. Vertaa kahta ruokaa (hinta tai maku), kerro, mitä torilla myydään, ja sano, mikä on sinun suosikkisi. Käytä ainakin yhtä lausetta <span class="pt">mais … do que</span> ja yhtä <span class="pt">se</span>-passiivia. Lue lopuksi vastauksesi ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Täällä myydään paljon juustoa.">Aqui se vende muito queijo.</p>
      <p class="s" data-fi="Minasin juusto on kalliimpi kuin tavallinen juusto, mutta se on parempaa.">O queijo de Minas é mais caro do que o queijo comum, mas é melhor.</p>
      <p class="s" data-fi="Banaani on halvempaa kuin mango.">A banana é mais barata do que a manga.</p>
      <p class="s" data-fi="Kahvi on yhtä tärkeää kuin pão de queijo.">O café é tão importante quanto o pão de queijo.</p>
      <p class="s" data-fi="Minun mielestäni torin paras asia on maitokaramelli!">Para mim, o melhor do mercado é o doce de leite!</p>
    </details>
  </div>
</section>
`
});
