/* Jakso 8: Asunnon etsintä Purjolle. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet (aa = suomalaisin kirjaimin, ipa = kansainvälinen) noudattavat Belo Horizonten ääntämystä.
   Merkinnöissä {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l08',
  lyhyt: '8',
  jakso: 'Jakso 8',
  otsikko: 'Asunto ja paikat: este, esse, aquele',
  lahde: 'Aihe: asunto, huoneet · Kielioppi: preferir, ver, pedir; este/esse/aquele; aqui/aí/lá · Ääntäminen: r',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, opettelee portugalia' }
  },

  aiheet: ['koti', 'paikka', 'kaupunki', 'raha'],

  sanasto: [
    'apartamento', 'sala', 'quarto', 'banheiro', 'varanda', 'janela', 'porta', 'prédio', 'aluguel', 'andar', 'vizinho',
    'preferir', 'ver', 'pedir', 'alugar', 'procurar', 'perguntar',
    'este', 'esse', 'aquele', 'isto', 'isso', 'aquilo', 'aqui', 'aí', 'ali', 'lá', 'perto', 'longe', 'barato', 'bairro', 'balcão'
  ],

  sanat: {
  // <SANAT>
    // paikat
    'kallio': { kieli: 'fi', fi: 'Kallio (Helsingin kaupunginosa)', aa: 'KAL-li-o', ipa: '[ˈkɑlːio]', sl: 'paikan nimi', huom: 'suomalainen nimi, ”kallio” = rocha' },
    'sörnäinen': { kieli: 'fi', fi: 'Sörnäinen (Helsingin kaupunginosa)', aa: 'SÖR-nä-i-nen', ipa: '[ˈsørnæinen]', sl: 'paikan nimi', huom: 'suomalainen nimi' },
    // asunto
    'apartamento': { fi: 'asunto, kerrostaloasunto', aa: 'a-pah-ta-MẼ-tu', ipa: '[apahtaˈmẽtu]', sl: 'substantiivi, maskuliini' },
    'sala': { fi: 'olohuone; sali', aa: 'SA-la', ipa: '[ˈsalɐ]', sl: 'substantiivi, feminiini' },
    'quarto': { fi: 'makuuhuone, huone', aa: 'KUAH-tu', ipa: '[ˈkwahtu]', sl: 'substantiivi, maskuliini', huom: 'espanjassa cuarto = huone; portugalin {quarto} on tavallisesti makuuhuone' },
    'quartos': { fi: 'makuuhuoneet', aa: 'KUAH-tus', ipa: '[ˈkwahtus]', sl: 'substantiivi, maskuliini monikko', huom: 'yksikkö {quarto}' },
    'banheiro': { fi: 'kylpyhuone, wc', aa: 'bã-NJEI-ru', ipa: '[bɐ̃ˈɲejɾu]', sl: 'substantiivi, maskuliini', huom: 'Brasiliassa wc ja kylpyhuone ovat samassa sanassa' },
    'varanda': { fi: 'parveke, terassi', aa: 'va-RÃ-da', ipa: '[vaˈɾɐ̃dɐ]', sl: 'substantiivi, feminiini', huom: 'ei {balcão}!' },
    'balcão': { fi: 'tiski, myymäläpöytä', aa: 'bau-KÃU', ipa: '[bawˈkɐ̃w]', sl: 'substantiivi, maskuliini', huom: 'ANSA! Espanjan balcón = parveke. Portugaliksi parveke = {varanda}' },
    'corredor': { fi: 'käytävä', aa: 'ko-he-DOH', ipa: '[koheˈdoh]', sl: 'substantiivi, maskuliini' },
    'cômodo': { fi: 'huone (talon sisällä)', aa: 'KÕ-mo-du', ipa: '[ˈkõmodu]', sl: 'substantiivi, maskuliini' },
    'janela': { fi: 'ikkuna', aa: 'zha-NE-la', ipa: '[ʒaˈnɛlɐ]', sl: 'substantiivi, feminiini' },
    'porta': { fi: 'ovi', aa: 'POH-ta', ipa: '[ˈpɔhtɐ]', sl: 'substantiivi, feminiini' },
    'prédio': { fi: 'kerrostalo, rakennus', aa: 'PRE-diu', ipa: '[ˈpɾɛdʒju]', sl: 'substantiivi, maskuliini' },
    'andar': { fi: 'kerros', aa: 'ã-DAH', ipa: '[ɐ̃ˈdah]', sl: 'substantiivi, maskuliini', huom: 'myös verbi {andar} = kävellä' },
    'aluguel': { fi: 'vuokra', aa: 'a-lu-GEU', ipa: '[aluˈɡɛw]', sl: 'substantiivi, maskuliini', huom: 'espanjaksi alquiler' },
    'alugar': { fi: 'vuokrata', aa: 'a-lu-GAH', ipa: '[aluˈɡah]', sl: 'verbi, perusmuoto' },
    'vizinho': { fi: 'naapuri', aa: 'vi-ZĨ-nju', ipa: '[viˈzĩɲu]', sl: 'substantiivi, maskuliini' },
    'bairro': { fi: 'kaupunginosa', aa: 'BAI-hu', ipa: '[ˈbajhu]', sl: 'substantiivi, maskuliini' },
    'jardim': { fi: 'puutarha', aa: 'zhah-DĨ', ipa: '[ʒahˈdʒĩ]', sl: 'substantiivi, maskuliini' },
    'parque': { fi: 'puisto', aa: 'PAH-ki', ipa: '[ˈpahki]', sl: 'substantiivi, maskuliini' },
    'metrô': { fi: 'metro', aa: 'me-TRO', ipa: '[meˈtɾo]', sl: 'substantiivi, maskuliini' },
    'farmácia': { fi: 'apteekki', aa: 'fah-MA-sja', ipa: '[fahˈmasjɐ]', sl: 'substantiivi, feminiini' },
    'barato': { fi: 'halpa', aa: 'ba-RA-tu', ipa: '[baˈɾatu]', sl: 'adjektiivi', huom: 'vastakohta {caro}' },
    'mais barato': { fi: 'halvempi', aa: 'MAIZ ba-RA-tu', ipa: '[majz baˈɾatu]', sl: 'ilmaus' },
    'nova': { fi: 'uusi (feminiinisanan edellä)', aa: 'NO-va', ipa: '[ˈnɔvɐ]', sl: 'adjektiivi', huom: 'maskuliini {novo}' },
    // verbit
    'procura': { fi: 'etsii; etsit', aa: 'pro-KU-ra', ipa: '[pɾoˈkuɾɐ]', sl: 'verbi {procurar}' },
    'falam': { fi: '(he) puhuvat', aa: 'FA-lãu', ipa: '[ˈfalɐ̃w]', sl: 'verbi {falar}' },
    'entende': { fi: 'ymmärtää; ymmärrät', aa: 'ẽ-TẼ-di', ipa: '[ẽˈtẽdʒi]', sl: 'verbi {entender}' },
    'abre': { fi: 'avaa; avaat', aa: 'A-bri', ipa: '[ˈabɾi]', sl: 'verbi {abrir}' },
    'quero': { fi: '(minä) haluan', aa: 'KE-ru', ipa: '[ˈkɛɾu]', sl: 'verbi {querer}' },
    'gosta': { fi: 'pitää; pidät', aa: 'GOS-ta', ipa: '[ˈɡɔstɐ]', sl: 'verbi {gostar}', huom: '{gostar} {de} + substantiivi' },
    'mora': { fi: 'asuu; asut', aa: 'MO-ra', ipa: '[ˈmɔɾɐ]', sl: 'verbi {morar}' },
    'moro': { fi: '(minä) asun', aa: 'MO-ru', ipa: '[ˈmɔɾu]', sl: 'verbi {morar}' },
    'fica': { fi: 'sijaitsee; jää', aa: 'FI-ka', ipa: '[ˈfikɐ]', sl: 'verbi {ficar}', huom: 'onde fica? = missä se on?' },
    'pergunto': { fi: '(minä) kysyn', aa: 'peh-GŨ-tu', ipa: '[pehˈɡũtu]', sl: 'verbi {perguntar}' },
    'pede': { fi: 'pyytää; tilaa', aa: 'PE-di', ipa: '[ˈpɛdʒi]', sl: 'verbi {pedir}' },
    'pedindo': { fi: 'pyytämässä', aa: 'pe-DĨ-du', ipa: '[peˈdʒĩdu]', sl: 'gerúndio, verbi {pedir}' },
    'pedem': { fi: '(he) pyytävät', aa: 'PE-dẽi', ipa: '[ˈpɛdẽj]', sl: 'verbi {pedir}' },
    'pedimos': { fi: '(me) pyydämme', aa: 'pe-DI-mus', ipa: '[peˈdʒimus]', sl: 'verbi {pedir}' },
    'peço': { fi: '(minä) pyydän; tilaan', aa: 'PE-su', ipa: '[ˈpɛsu]', sl: 'verbi {pedir}', huom: 'muista ç: kuuluu s' },
    'prefiro': { fi: '(minä) pidän parempana', aa: 'pre-FI-ru', ipa: '[pɾeˈfiɾu]', sl: 'verbi {preferir}', huom: 'espanjassa prefiero' },
    'prefere': { fi: 'pitää parempana', aa: 'pre-FE-ri', ipa: '[pɾeˈfɛɾi]', sl: 'verbi {preferir}' },
    'preferimos': { fi: '(me) pidämme parempana', aa: 'pre-fe-RI-mus', ipa: '[pɾefeˈɾimus]', sl: 'verbi {preferir}' },
    'preferem': { fi: '(he) pitävät parempana', aa: 'pre-FE-rẽi', ipa: '[pɾeˈfɛɾẽj]', sl: 'verbi {preferir}' },
    'vejo': { fi: '(minä) näen', aa: 'VE-zhu', ipa: '[ˈveʒu]', sl: 'verbi {ver}', huom: 'espanjassa veo' },
    'vê': { fi: 'näkee; näet', aa: 'VE', ipa: '[ve]', sl: 'verbi {ver}' },
    'vemos': { fi: '(me) näemme', aa: 'VE-mus', ipa: '[ˈvemus]', sl: 'verbi {ver}' },
    'veem': { fi: '(he) näkevät', aa: 'VE-ẽi', ipa: '[ˈveẽj]', sl: 'verbi {ver}' },
    'perguntar': { fi: 'kysyä', aa: 'peh-gũ-TAH', ipa: '[pehɡũˈtah]', sl: 'verbi, perusmuoto', huom: 'ei {pedir}!' },
    'quantos': { fi: 'kuinka monta (maskuliini monikko)', aa: 'KUÃ-tus', ipa: '[ˈkwɐ̃tus]', sl: 'kysymyssana' },
    // osoitesanat
    'essa': { fi: 'tuo, se (feminiinisanan edellä)', aa: 'E-sa', ipa: '[ˈɛsɐ]', sl: 'osoitepronomini', huom: 'maskuliini {esse}' },
    'aquela': { fi: 'tuo tuolla (feminiinisanan edellä)', aa: 'a-KE-la', ipa: '[aˈkɛlɐ]', sl: 'osoitepronomini', huom: 'maskuliini {aquele}' },
    'neste': { fi: 'tässä (maskuliinisanan edellä)', aa: 'NES-tsi', ipa: '[ˈnestʃi]', sl: 'prepositio + osoitesana', huom: '{em} + {este}' },
    'nesta': { fi: 'tässä (feminiinisanan edellä)', aa: 'NES-ta', ipa: '[ˈnɛstɐ]', sl: 'prepositio + osoitesana', huom: '{em} + {esta}' },
    'nesse': { fi: 'tuossa (maskuliinisanan edellä)', aa: 'NE-si', ipa: '[ˈnesi]', sl: 'prepositio + osoitesana', huom: '{em} + {esse}' },
    'nessa': { fi: 'tuossa (feminiinisanan edellä)', aa: 'NE-sa', ipa: '[ˈnɛsɐ]', sl: 'prepositio + osoitesana', huom: '{em} + {essa}' },
    'naquele': { fi: 'tuossa tuolla (maskuliinisanan edellä)', aa: 'na-KE-li', ipa: '[naˈkeli]', sl: 'prepositio + osoitesana', huom: '{em} + {aquele}' },
    'naquela': { fi: 'tuossa tuolla (feminiinisanan edellä)', aa: 'na-KE-la', ipa: '[naˈkɛlɐ]', sl: 'prepositio + osoitesana', huom: '{em} + {aquela}' },
    'deste': { fi: 'tämän (maskuliinisanan edellä)', aa: 'DES-tsi', ipa: '[ˈdestʃi]', sl: 'prepositio + osoitesana', huom: '{de} + {este}' },
    'desta': { fi: 'tämän (feminiinisanan edellä)', aa: 'DES-ta', ipa: '[ˈdɛstɐ]', sl: 'prepositio + osoitesana', huom: '{de} + {esta}' },
    'desse': { fi: 'tuon (maskuliinisanan edellä)', aa: 'DE-si', ipa: '[ˈdesi]', sl: 'prepositio + osoitesana', huom: '{de} + {esse}' },
    'dessa': { fi: 'tuon (feminiinisanan edellä)', aa: 'DE-sa', ipa: '[ˈdɛsɐ]', sl: 'prepositio + osoitesana', huom: '{de} + {essa}' },
    'daquele': { fi: 'tuon tuolla (maskuliinisanan edellä)', aa: 'da-KE-li', ipa: '[daˈkeli]', sl: 'prepositio + osoitesana', huom: '{de} + {aquele}' },
    'daquela': { fi: 'tuon tuolla (feminiinisanan edellä)', aa: 'da-KE-la', ipa: '[daˈkɛlɐ]', sl: 'prepositio + osoitesana', huom: '{de} + {aquela}' },
    'ali': { fi: 'tuolla (näkyvissä)', aa: 'a-LI', ipa: '[aˈli]', sl: 'adverbi', huom: 'vrt. {aqui}, {aí}, {lá}' },
    'cá': { fi: 'täällä (puhekieli)', aa: 'KA', ipa: '[ka]', sl: 'adverbi', huom: 'sama kuin {aqui}' },
    'daqui': { fi: 'täältä', aa: 'da-KI', ipa: '[daˈki]', sl: 'adverbi', huom: '{de} + {aqui}' },
    'dali': { fi: 'tuolta', aa: 'da-LI', ipa: '[daˈli]', sl: 'adverbi', huom: '{de} + {ali}' },
    'corro': { fi: '(minä) juoksen', aa: 'KO-hu', ipa: '[ˈkohu]', sl: 'verbi {correr}' },
    'coro': { fi: 'kuoro', aa: 'KO-ru', ipa: '[ˈkoɾu]', sl: 'substantiivi, maskuliini' },
    'em cima': { fi: 'päällä, yläpuolella', aa: 'ẽi SĨ-ma', ipa: '[ẽj ˈsĩmɐ]', sl: 'ilmaus', huom: 'vastakohta {embaixo}' }
  // </SANAT>
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat kuvata asuntoa ja sanoa huoneiden nimet.</li>
  <li>Osaat verbit <span class="pt">preferir</span>, <span class="pt">ver</span> ja <span class="pt">pedir</span>.</li>
  <li>Osaat osoittaa asioita sanoilla <span class="pt">este</span>, <span class="pt">esse</span> ja <span class="pt">aquele</span> sekä paikkasanoilla <span class="pt">aqui</span>, <span class="pt">aí</span> ja <span class="pt">lá</span>.</li>
  <li>Osaat lukea r-kirjaimen oikein sanan alussa, keskellä ja lopussa.</li>
</ul>
<p data-paikka="helsingin-kaupunginosat">Helsinki, Kallio, lauantaiaamu. Jayn äiti Purjo muuttaa Helsinkiin ja katsoo asuntoa. Purjo ei puhu portugalia, joten Jay ja Maia keskustelevat asunnosta portugaliksi, ja Purjo kysyy kaikesta suomeksi.</p>

<section class="osio">
  <h2>Dialogi: Um apartamento em Kallio</h2>
  <p class="ohje">Kuuntele ensin ilman suomennoksia. Jay tekee espanjan vaikuttaman virheen sanalla <span class="pt">balcão</span>. Löydätkö sen? Sitten roolileikki: puhu Jayn osuudet.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Helsinki, Kallio. Jayn äiti Purjo etsii asuntoa.">Helsinque, Kallio. A Purjo, a mãe do Jay, procura um apartamento.</p>
    <p class="s" data-h="kertoja" data-fi="Purjo ei puhu portugalia. Jay ja Maia puhuvat portugalia, eikä hän ymmärrä mitään.">A Purjo não fala português. Jay e Maia falam português, e ela não entende nada.</p>
    <p class="s" data-h="jay" data-fi="Maia, katso. Tässä asunnossa on kaksi makuuhuonetta.">Maia, olha. Este apartamento tem dois quartos.</p>
    <p class="s" data-h="maia" data-fi="Kyllä. Iso makuuhuone on täällä. Kylpyhuone on siinä lähellä sinua. Keittiö on tuolla.">Sim. O quarto grande está aqui. O banheiro está aí, perto de você. A cozinha está lá.</p>
    <p class="s" data-h="jay" data-fi="Tämä huone on pieni. Tuo huone tuolla on isompi.">Esse quarto é pequeno. Aquele quarto lá é maior.</p>
    <p class="s" data-h="maia" data-fi="Mutta tässä huoneessa on iso ikkuna. Täältä näen puiston.">Mas este quarto tem uma janela grande. Eu vejo o parque daqui.</p>
    <p class="s" data-h="jay" data-fi="Kaunista! Ja siinä on ”balcão”! (väärin: espanjan balcón = parveke)">Que bonito! E tem um balcão!</p>
    <p class="s" data-h="maia" data-fi="Balcão? Ei, Jay. Balcão on kahvilan tiski. Täällä parveke on ”varanda”.">Balcão? Não, Jay. Balcão é o balcão do café. Aqui a gente diz “varanda”.</p>
    <p class="s" data-h="jay" data-fi="Ahaa, selvä. On parveke. Minä pidän tästä asunnosta enemmän.">Ah, tá. Tem uma varanda. Eu prefiro este apartamento.</p>
    <p class="s" data-h="maia" data-fi="Minäkin pidän tästä enemmän. Paljonko vuokra on?">Eu também prefiro este. Quanto é o aluguel?</p>
    <p class="s" data-h="jay" data-fi="Vuokra on yhdeksänsataa euroa kuukaudessa.">O aluguel é novecentos euros por mês.</p>
    <p class="s" data-h="maia" data-fi="Se on vähän kallis.">É um pouco caro.</p>
    <p class="s" data-h="kertoja" data-fi="Purjo avaa keittiön oven ja katsoo kaiken. Hän puhuu suomea.">A Purjo abre a porta da cozinha e olha tudo. Ela fala finlandês.</p>
    <p class="s" data-h="maia" data-fi="Mitä äitisi pyytää?">O que a sua mãe está pedindo?</p>
    <p class="s" data-h="jay" data-fi="Hän pyytää halvempaa vuokraa. Hän kysyy myös, onko talossa sauna.">Ela pede um aluguel mais barato. E pergunta: tem sauna no prédio?</p>
    <p class="s" data-h="maia" data-fi="On. Se on alakerrassa. Ja aivan lähellä on apteekki.">Tem. Ela é lá embaixo. E aqui perto tem uma farmácia.</p>
    <p class="s" data-h="jay" data-fi="Mahtavaa! Äitini haluaa paikan, joka on lähellä kaikkea.">Ótimo! A minha mãe prefere um lugar perto de tudo.</p>
    <p class="s" data-h="maia" data-fi="Ja sinä, Jay? Mitä sinä toivot?">E você, Jay? O que você quer?</p>
    <p class="s" data-h="jay" data-fi="Minä haluan asunnon, jossa on iso sohva.">Eu quero um apartamento com um sofá grande.</p>
    <p class="s" data-h="kertoja" data-fi="Purjo hymyilee. Hänestä asunto on hyvä.">A Purjo sorri. Ela gosta do apartamento.</p>
  </div>
  <p class="huomio">Huomaa: <span class="pt">dois quartos</span> (kaksi makuuhuonetta). Monikko saa -s-päätteen, ja siihen palataan jaksossa 9.</p>
</section>

<section class="osio">
  <h2>Asunnon pohjapiirros: este, esse, aquele</h2>
  <p class="ohje">Jay seisoo olohuoneessa (kuva). Napauta huonetta: Jay kertoo, mikä huone on. Lähellä olevasta sanotaan <span class="pt">este / esta</span> (tämä), vähän kauempana <span class="pt">esse / essa</span> (tuo, siinä) ja kaukana <span class="pt">aquele / aquela</span> (tuo tuolla). Feminiinisanasta <span class="pt">esta</span>, maskuliinisanasta <span class="pt">este</span>.</p>
  <div class="pohjapiirros" data-h="jay" data-mina="sala">
    <span data-huone="cozinha" data-nimi="a cozinha" data-suku="f" data-etaisyys="3" data-fi="keittiö, kaukana" style="grid-area: 1 / 1 / 2 / 3"></span>
    <span data-huone="quarto" data-nimi="o quarto" data-suku="m" data-etaisyys="3" data-fi="makuuhuone, kaukana" style="grid-area: 1 / 3 / 2 / 5"></span>
    <span data-huone="banheiro" data-nimi="o banheiro" data-suku="m" data-etaisyys="2" data-fi="kylpyhuone, vähän kauempana" style="grid-area: 2 / 1 / 3 / 2"></span>
    <span data-huone="corredor" data-nimi="o corredor" data-suku="m" data-etaisyys="2" data-fi="käytävä, vähän kauempana" style="grid-area: 2 / 2 / 3 / 5"></span>
    <span data-huone="sala" data-nimi="a sala" data-suku="f" data-etaisyys="1" data-fi="olohuone, tässä" style="grid-area: 3 / 1 / 4 / 4"></span>
    <span data-huone="varanda" data-nimi="a varanda" data-suku="f" data-etaisyys="1" data-fi="parveke, ihan vieressä" style="grid-area: 3 / 4 / 4 / 5"></span>
  </div>
</section>

<section class="osio">
  <h2>Teemasanasto: asunto ja huoneet</h2>
  <div class="teema" data-otsikko="Huoneet" data-sanat="sala,quarto,cozinha,banheiro,varanda,escritório,corredor"></div>
  <div class="teema" data-otsikko="Asunto ja talo" data-sanat="apartamento,casa,prédio,andar,porta,janela,aluguel,vizinho,endereço"></div>
  <div class="teema" data-otsikko="Missä? Lähellä vai kaukana?" data-sanat="aqui,aí,ali,lá,perto,longe,embaixo,em cima"></div>
  <div class="teema" data-otsikko="Verbit" data-sanat="preferir,ver,pedir,perguntar,alugar,procurar,morar,mudar"></div>
</section>

<section class="osio" data-paikka="sornainen-vaasanaukio">
  <h2>Kielioppi</h2>

  <h3>1. Preferir, ver, pedir</h3>
  <p>Myös nämä kolme verbiä ovat tavallisia ja <b>epäsäännöllisiä</b>: muuttuu vain minä-muoto (<span class="pt">eu</span>). Muut muodot seuraavat tavallista -er- ja -ir-taivutusta, jonka tunnet jo.</p>
  <table class="taivutus">
    <tr><th></th><th>preferir (pitää parempana)</th><th>ver (nähdä)</th><th>pedir (pyytää, tilata)</th></tr>
    <tr><td>eu</td><td><span class="pt">prefiro</span></td><td><span class="pt">vejo</span></td><td><span class="pt">peço</span></td></tr>
    <tr><td>você, ele, ela, a gente</td><td><span class="pt">prefere</span></td><td><span class="pt">vê</span></td><td><span class="pt">pede</span></td></tr>
    <tr><td>nós</td><td><span class="pt">preferimos</span></td><td><span class="pt">vemos</span></td><td><span class="pt">pedimos</span></td></tr>
    <tr><td>vocês, eles, elas</td><td><span class="pt">preferem</span></td><td><span class="pt">veem</span></td><td><span class="pt">pedem</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Pidän tästä asunnosta enemmän.">Eu prefiro este apartamento.</li>
    <li class="s" data-fi="Näen puiston täältä.">Eu vejo o parque daqui.</li>
    <li class="s" data-fi="Tilaan kahvin.">Eu peço um café.</li>
    <li class="s" data-fi="Purjo pyytää halvempaa vuokraa.">A Purjo pede um aluguel mais barato.</li>
    <li class="s" data-fi="Me näemme puiston täältä.">A gente vê o parque daqui.</li>
    <li class="s" data-fi="Maia pitää kaupunkia parempana.">A Maia prefere a cidade.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> <span class="pt">pedir</span> tarkoittaa pyytää tai tilata <b>jotakin</b> (<span class="pt">pedir um café</span>). Kysymisen verbi on <span class="pt">perguntar</span> (<span class="pt">perguntar onde fica</span>, kysyä missä se on). Älä käytä <span class="pt">pedir</span>-verbiä kysymiseen. <span class="pt">Ver</span> tarkoittaa nähdä. Katsomiseen käytetään <span class="pt">olhar</span> (<span class="pt">olha!</span> = katso!) ja television tai elokuvan katsomiseen <span class="pt">assistir</span>.</p>
  </div>
  <div class="huomio">
    <p><b>Espanjasta apua ja ansat:</b> minä-muodot poikkeavat: <span class="pt">prefiro</span> (es. prefiero, ei diftongia!), <span class="pt">vejo</span> (es. veo, mukaan tulee j), <span class="pt">peço</span> (es. pido, mukaan tulee ç). Muut muodot ovat lähes samoja kuin espanjassa. Kirjaimet j ja ç pitävät äänteen samana, vaikka sana taipuu: <span class="pt">vejo</span> on ”VE-zhu” ja <span class="pt">peço</span> on ”PE-su”.</p>
  </div>

  <h3>2. Este, esse, aquele: osoittaminen</h3>
  <p>Suomessa on kolme osoitesanaa: tämä, tuo ja se. Portugalissa on myös kolme, ja ne kertovat, kuinka kaukana asia on <b>puhujasta</b> ja <b>kuuntelijasta</b>. Ne mukautuvat sukuun.</p>
  <table class="taivutus">
    <tr><th>kuinka lähellä</th><th>maskuliini</th><th>feminiini</th><th>asia (ei sukua)</th></tr>
    <tr><td>lähellä minua: tämä</td><td><span class="pt">este</span></td><td><span class="pt">esta</span></td><td><span class="pt">isto</span></td></tr>
    <tr><td>lähellä sinua tai jo mainittu: tuo, se</td><td><span class="pt">esse</span></td><td><span class="pt">essa</span></td><td><span class="pt">isso</span></td></tr>
    <tr><td>kaukana meistä molemmista: tuo tuolla</td><td><span class="pt">aquele</span></td><td><span class="pt">aquela</span></td><td><span class="pt">aquilo</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Tämä asunto on pieni.">Este apartamento é pequeno.</li>
    <li class="s" data-fi="Tuo huone (siinä sinun luonasi) on iso.">Esse quarto é grande.</li>
    <li class="s" data-fi="Tuo talo tuolla on vanha.">Aquele prédio lá é velho.</li>
    <li class="s" data-fi="Tämä keittiö on uusi.">Esta cozinha é nova.</li>
    <li class="s" data-fi="Mikä tuo on?">O que é isso?</li>
    <li class="s" data-fi="Mikä tuo tuolla on?">O que é aquilo?</li>
  </ul>
  <p>Sanat <span class="pt">isto</span>, <span class="pt">isso</span> ja <span class="pt">aquilo</span> eivät mukaudu sukuun. Niitä käytetään, kun puhutaan jostakin, jota ei ole nimetty, tai kokonaisesta asiasta: <span class="pt">O que é isso?</span> Ne eivät koskaan tule substantiivin eteen.</p>
  <p>Prepositiot <span class="pt">em</span> ja <span class="pt">de</span> yhtyvät osoitesanoihin samalla tavalla kuin artikkeleihin:</p>
  <table class="taivutus">
    <tr><th>em + …</th><th>de + …</th></tr>
    <tr><td><span class="pt">neste</span>, <span class="pt">nesta</span>, <span class="pt">nesse</span>, <span class="pt">nessa</span>, <span class="pt">naquele</span>, <span class="pt">naquela</span></td><td><span class="pt">deste</span>, <span class="pt">desta</span>, <span class="pt">desse</span>, <span class="pt">dessa</span>, <span class="pt">daquele</span>, <span class="pt">daquela</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Tässä huoneessa on iso ikkuna.">Neste quarto tem uma janela grande.</li>
    <li class="s" data-fi="Tuossa talossa on sauna.">Naquele prédio tem sauna.</li>
    <li class="s" data-fi="Minä pidän tuosta asunnosta.">Eu gosto desse apartamento.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> arkipuheessa <span class="pt">esse</span> ja <span class="pt">essa</span> korvaavat usein <span class="pt">este</span> ja <span class="pt">esta</span> myös silloin, kun asia on lähellä puhujaa. Kirjassa ero on tarkempi kuin puheessa. Espanjasta apua: este/ese/aquel ja esto/eso/aquello ovat lähes samoja, vain <span class="pt">aquele</span> ja <span class="pt">isso</span> poikkeavat hieman.</p>
  </div>

  <h3>3. Aqui, aí, lá: paikkasanat</h3>
  <p>Paikkaa kuvaavat sanat ovat samalla tavalla kolmiportaiset kuin osoitesanat.</p>
  <table class="taivutus">
    <tr><th>sana</th><th>merkitys</th><th>osoitesana</th></tr>
    <tr><td><span class="pt">aqui</span> (puhekielessä <span class="pt">cá</span>)</td><td>täällä, tässä (lähellä minua)</td><td><span class="pt">este</span></td></tr>
    <tr><td><span class="pt">aí</span></td><td>siinä, siellä (lähellä sinua)</td><td><span class="pt">esse</span></td></tr>
    <tr><td><span class="pt">ali</span>, <span class="pt">lá</span></td><td>tuolla (<span class="pt">ali</span> = näkyvissä, <span class="pt">lá</span> = kauempana)</td><td><span class="pt">aquele</span></td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Kylpyhuone on täällä.">O banheiro está aqui.</li>
    <li class="s" data-fi="Avain on siinä sinulla.">A chave está aí.</li>
    <li class="s" data-fi="Keittiö on tuolla.">A cozinha está lá.</li>
    <li class="s" data-fi="Näen puiston täältä.">Eu vejo o parque daqui.</li>
    <li class="s" data-fi="Tässä lähellä on apteekki.">Aqui perto tem uma farmácia.</li>
  </ul>
  <div class="muista">
    <p><b>Muista:</b> paikkasanojen eteen voi laittaa <span class="pt">de</span>, jolloin ne kertovat lähtöpaikan: <span class="pt">daqui</span> (täältä), <span class="pt">dali</span> (tuolta), <span class="pt">de lá</span> (sieltä). Espanjan sanat <i lang="es">aquí, ahí, allí, allá</i> vastaavat sanoja <span class="pt">aqui, aí, ali, lá</span>.</p>
  </div>
</section>

<section class="osio">
  <h2>Ääntäminen: r</h2>
  <p>Portugalin r-kirjaimella on kaksi ääntä. Jakson 0 sääntö 4 kertaa tarkemmin:</p>
  <div class="saanto">
    <h3>Pehmeä h: sanan alussa, rr ja tavun lopussa</h3>
    <p>Sanan alussa, kahden r:n kohdalla ja tavun lopussa Belo Horizontessa kuuluu pehmeä h, kuten suomen sanassa ”hauska”.</p>
    <ul class="esim">
      <li class="s">rua</li>
      <li class="s">roupa</li>
      <li class="s">carro</li>
      <li class="s">terra</li>
      <li class="s">porta</li>
      <li class="s">mulher</li>
    </ul>
  </div>
  <div class="saanto">
    <h3>Lyhyt r: kahden vokaalin välissä ja konsonantin jälkeen</h3>
    <p>Kielen kärki napauttaa yhden kerran, kuten suomen r. Näin lausutaan myös yhdistelmät <b>br, pr, tr, dr, gr, fr, cr</b>.</p>
    <ul class="esim">
      <li class="s">caro</li>
      <li class="s">hora</li>
      <li class="s">para</li>
      <li class="s">três</li>
      <li class="s">grande</li>
      <li class="s">prédio</li>
    </ul>
  </div>
  <div class="huomio">
    <p><b>Espanjan vaikutus:</b> espanjassa sanan alun r ja rr ovat värähtelevä r (”rrr”). Portugalissa (Brasiliassa) ne ovat pehmeä h. Jos sanot <span class="pt">rua</span> rullaten, Maia kuulee espanjan. Sano ”HU-a”. Lyhyt r kahden vokaalin välissä on kuitenkin molemmissa sama kuin suomessa.</p>
  </div>
  <p>Vertaa pareja: <span class="pt">caro</span> (kallis, lyhyt r) ja <span class="pt">carro</span> (auto, h); <span class="pt">coro</span> (kuoro, lyhyt r) ja <span class="pt">corro</span> (juoksen, h).</p>
</section>

<aside class="kulttuuri" data-paikka="helsingin-kaupunginosat">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Helsingin kaupunginosat</h3>
  <figure class="kuva" data-kuva="helsingin-kaupunginosat"></figure>
  <p>Helsingissä on yli 650 000 asukasta, ja kaupunki on jaettu kaupunginosiin, jotka ovat hyvin erilaisia. Kaupunki perustettiin vuonna 1550, ja siitä tuli Suomen pääkaupunki vuonna 1812, kun Turusta siirrettiin hallinto Helsinkiin.</p>
  <p>Kallio on entinen työläiskaupunginosa, jossa on tiheästi rakennettuja kivitaloja 1900-luvun alusta. Kallion kirkko valmistui vuonna 1912, ja sen suunnitteli arkkitehti Lars Sonck. Sörnäinen on Kallion naapuri. Jayn ja Maian koti on Sörnäisissä, lähellä Piritoria, ja Helsingin metro on kulkenut sieltä vuodesta 1982 lähtien. Töölössä on Olympiastadion, joka valmistui vuonna 1938 ja oli vuoden 1952 kesäolympialaisten pääareena.</p>
  <p>Monessa suomalaisessa kerrostalossa on taloyhtiön yhteinen sauna, siksi Purjo kysyy siitä jo ensimmäisessä katselmuksessa. Belo Horizontessa kaupunginosaa sanotaan <span class="pt">bairro</span>. Tunnettu <span class="pt">bairro</span> on esimerkiksi Savassi.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: pohjapiirros</h3>
    <p class="ohje">Katso pohjapiirrosta yllä. Jay seisoo olohuoneessa. Valitse oikea sana.</p>
    <div class="valinta" data-oikea="Aquela">
      <p class="kysymys">___ é a cozinha.</p>
      <div class="vaihtoehdot"><button type="button">Esta</button><button type="button">Essa</button><button type="button">Aquela</button></div>
    </div>
    <div class="valinta" data-oikea="Esta">
      <p class="kysymys">___ é a varanda.</p>
      <div class="vaihtoehdot"><button type="button">Esta</button><button type="button">Essa</button><button type="button">Aquela</button></div>
    </div>
    <div class="valinta" data-oikea="Esse">
      <p class="kysymys">___ é o banheiro.</p>
      <div class="vaihtoehdot"><button type="button">Este</button><button type="button">Esse</button><button type="button">Aquele</button></div>
    </div>
    <div class="valinta" data-oikea="Aquele">
      <p class="kysymys">___ é o quarto.</p>
      <div class="vaihtoehdot"><button type="button">Este</button><button type="button">Esse</button><button type="button">Aquele</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Täydennä verbin muoto</h3>
    <p class="ohje">Kirjoita oikea muoto verbistä <span class="pt">preferir</span>, <span class="pt">ver</span> tai <span class="pt">pedir</span>.</p>
    <div class="aukot">
      <p>Eu <span class="aukko" data-oikea="prefiro"></span> o apartamento em Kallio. (preferir)</p>
      <p>Eu <span class="aukko" data-oikea="vejo"></span> o parque da janela. (ver)</p>
      <p>Eu <span class="aukko" data-oikea="peço"></span> um café, por favor. (pedir)</p>
      <p>A Purjo <span class="aukko" data-oikea="prefere"></span> um lugar perto de tudo. (preferir)</p>
      <p>A gente <span class="aukko" data-oikea="vê"></span> a cozinha daqui. (ver)</p>
      <p>O que vocês <span class="aukko" data-oikea="pedem"></span>? (pedir)</p>
      <p>Nós <span class="aukko" data-oikea="preferimos"></span> a varanda. (preferir)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Este, esse vai aquele?</h3>
    <p class="ohje">Valitse osoitesana. Tilanne kerrotaan suluissa.</p>
    <div class="valinta" data-oikea="este">
      <p class="kysymys">(Pidät asuntoa kädessäsi, tämä talo) ___ apartamento é bonito.</p>
      <div class="vaihtoehdot"><button type="button">este</button><button type="button">esse</button><button type="button">aquele</button></div>
    </div>
    <div class="valinta" data-oikea="aquela">
      <p class="kysymys">(Näytät kauas, tuo tuolla) ___ casa lá é grande.</p>
      <div class="vaihtoehdot"><button type="button">esta</button><button type="button">essa</button><button type="button">aquela</button></div>
    </div>
    <div class="valinta" data-oikea="essa">
      <p class="kysymys">(Toinen pitää laukkua, tuo sinun laukkusi) ___ bolsa é nova?</p>
      <div class="vaihtoehdot"><button type="button">esta</button><button type="button">essa</button><button type="button">aquela</button></div>
    </div>
    <div class="valinta" data-oikea="isso">
      <p class="kysymys">O que é ___?</p>
      <div class="vaihtoehdot"><button type="button">isso</button><button type="button">essa</button><button type="button">esse</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Aqui, aí vai lá?</h3>
    <p class="ohje">Kuuntele lause. Missä Maia sanoo asian olevan?</p>
    <div class="valinta" data-kuuntele="O banheiro está aqui." data-oikea="lähellä puhujaa">
      <p class="kysymys">Missä kylpyhuone on?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">lähellä puhujaa</button><button type="button">lähellä kuuntelijaa</button><button type="button">kaukana</button></div>
    </div>
    <div class="valinta" data-kuuntele="A cozinha está lá." data-oikea="kaukana">
      <p class="kysymys">Missä keittiö on?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">lähellä puhujaa</button><button type="button">lähellä kuuntelijaa</button><button type="button">kaukana</button></div>
    </div>
    <div class="valinta" data-kuuntele="A chave está aí." data-oikea="lähellä kuuntelijaa">
      <p class="kysymys">Missä avain on?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">lähellä puhujaa</button><button type="button">lähellä kuuntelijaa</button><button type="button">kaukana</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Yhdistä huone ja suomennos</h3>
    <p class="ohje">Paina portugalinkielistä sanaa ja sitten sen suomennosta.</p>
    <ul class="yhdista">
      <li data-pari="olohuone">a sala</li>
      <li data-pari="makuuhuone">o quarto</li>
      <li data-pari="keittiö">a cozinha</li>
      <li data-pari="kylpyhuone, wc">o banheiro</li>
      <li data-pari="parveke">a varanda</li>
      <li data-pari="ikkuna">a janela</li>
      <li data-pari="ovi">a porta</li>
      <li data-pari="vuokra">o aluguel</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>5. Mikä ei kuulu joukkoon?</h3>
    <p class="ohje">Valitse sana, joka ei kuulu samaan ryhmään.</p>
    <div class="valinta" data-oikea="farmácia">
      <p class="kysymys">sala, quarto, cozinha, farmácia</p>
      <div class="vaihtoehdot"><button type="button">sala</button><button type="button">quarto</button><button type="button">cozinha</button><button type="button">farmácia</button></div>
    </div>
    <div class="valinta" data-oikea="perto">
      <p class="kysymys">aqui, aí, lá, perto</p>
      <div class="vaihtoehdot"><button type="button">aqui</button><button type="button">aí</button><button type="button">lá</button><button type="button">perto</button></div>
    </div>
    <div class="valinta" data-oikea="aluguel">
      <p class="kysymys">peço, prefiro, vejo, aluguel</p>
      <div class="vaihtoehdot"><button type="button">peço</button><button type="button">prefiro</button><button type="button">vejo</button><button type="button">aluguel</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause.</p>
    <div class="sanelu" data-puhu="Eu prefiro este apartamento."></div>
    <div class="sanelu" data-puhu="Eu vejo o parque daqui."></div>
    <div class="sanelu" data-puhu="A cozinha está lá."></div>
    <div class="sanelu" data-puhu="O aluguel é novecentos euros."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Missä on paino?</h3>
    <p class="ohje">Paina tavua, jolla on paino. Kuuntele sana lopuksi.</p>
    <p><span class="paino" data-tavut="a|par|ta|men|to" data-oikea="4"></span> <span class="paino" data-tavut="ba|nhei|ro" data-oikea="2"></span> <span class="paino" data-tavut="va|ran|da" data-oikea="2"></span> <span class="paino" data-tavut="a|lu|guel" data-oikea="3"></span> <span class="paino" data-tavut="pré|dio" data-oikea="1"></span> <span class="paino" data-tavut="pre|fe|rir" data-oikea="3"></span> <span class="paino" data-tavut="jar|dim" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Käännä portugaliksi</h3>
    <p class="ohje">Kirjoita oma käännöksesi ja avaa sitten malli.</p>
    <div class="kaanna"><p class="fi">Tässä asunnossa on kaksi makuuhuonetta.</p><p class="s" data-fi="Tässä asunnossa on kaksi makuuhuonetta.">Este apartamento tem dois quartos.</p></div>
    <div class="kaanna"><p class="fi">Minä pidän tuosta huoneesta enemmän.</p><p class="s" data-fi="Minä pidän tuosta huoneesta enemmän.">Eu prefiro esse quarto.</p></div>
    <div class="kaanna"><p class="fi">Näen puiston ikkunasta.</p><p class="s" data-fi="Näen puiston ikkunasta.">Eu vejo o parque da janela.</p></div>
    <div class="kaanna"><p class="fi">Keittiö on tuolla, kylpyhuone on täällä.</p><p class="s" data-fi="Keittiö on tuolla, kylpyhuone on täällä.">A cozinha está lá e o banheiro está aqui.</p></div>
    <div class="kaanna"><p class="fi">Tilaan kahvin ja kysyn, missä apteekki on.</p><p class="s" data-fi="Tilaan kahvin ja kysyn, missä apteekki on.">Eu peço um café e pergunto onde fica a farmácia.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Vastaa kysymyksiin</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin. Vaihda tiedot omiksi.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Você mora em um apartamento ou em uma casa?</summary>
      <p class="s" data-fi="Asun kerrostalossa.">Eu moro em um apartamento.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Quantos quartos tem a sua casa?</summary>
      <p class="s" data-fi="Kodissani on kaksi makuuhuonetta.">A minha casa tem dois quartos.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que você vê da janela?</summary>
      <p class="s" data-fi="Näen kadun ja puun.">Eu vejo a rua e uma árvore.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Qual cômodo você prefere na sua casa?</summary>
      <p class="s" data-fi="Pidän keittiöstä eniten.">Eu prefiro a cozinha.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l08">
    <div class="dokumentti kalenteri oma" data-tallenna="l08-koti" lang="pt-BR">
      <div class="kal-yla"><b>A minha casa</b><small>seiso olohuoneessasi ja esittele kotisi</small></div>
      <div class="kal-rivit">
        <label>Lähellä <input name="lahella" placeholder="Esta é a minha sala."></label>
        <label>Vähän kauempana <input name="kauempana" placeholder="Essa é a cozinha."></label>
        <label>Kaukana <input name="kaukana" placeholder="Aquele é o meu quarto."></label>
        <label>Paras paikka <input name="paras" placeholder="O sofá é…"></label>
      </div>
    </div>
    <h3>Kotitehtävä</h3>
    <p>Kuvaa kotiasi portugaliksi 5–6 lauseella: onko se asunto vai talo, mitä huoneita siinä on, mitä näet ikkunasta (<span class="pt">vejo</span>), mikä huone on sinun mielestäsi paras (<span class="pt">prefiro</span>) ja missä jokin huone on (<span class="pt">aqui</span>, <span class="pt">lá</span>). Käytä vähintään yhtä sanoista <span class="pt">este</span>, <span class="pt">esse</span> ja <span class="pt">aquele</span>. Sano teksti sitten ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Minä asun asunnossa Sörnäisissä.">Eu moro em um apartamento em Sörnäinen.</p>
      <p class="s" data-fi="Asunnossa on olohuone, keittiö ja yksi makuuhuone.">O apartamento tem uma sala, uma cozinha e um quarto.</p>
      <p class="s" data-fi="Näen metroaseman ikkunasta.">Eu vejo a estação de metrô da janela.</p>
      <p class="s" data-fi="Pidän olohuoneesta eniten, koska siellä on iso sohva.">Eu prefiro a sala, porque tem um sofá grande.</p>
      <p class="s" data-fi="Kylpyhuone on täällä ja keittiö on tuolla.">O banheiro está aqui e a cozinha está lá.</p>
      <p class="s" data-fi="Tuo talo tuolla on vanha, mutta tämä talo on uusi.">Aquele prédio lá é velho, mas este prédio é novo.</p>
    </details>
  </div>
</section>
`
});
