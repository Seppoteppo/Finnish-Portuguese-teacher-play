/* Tottakai: oppitunnin t13 sanat (perheen päivä Belo Horizontessa, imperfekti, ajanilmaukset). Sopimus: tottakai/sanasto/README.md.
   Jo leksikossa ja käytetään sellaisenaan: nukkua, lukea, mennä, tulla (t02), ostaa, kahvi, leipä, haluta (t03), syödä, juoda,
   kävellä (t04), lehti, kuolla, lapsi (t05), keittiö (t08), ottaa, antaa, eilen, riisi, sairas (treeni),
   aamu, ilta, yö, lounas, sitten, kanssa, tarvita, käydä, tehdä (gramatica). Imperfektin persoonat (heräsin, jaoimme,
   nukuit …) tekee taivutuskone tunnusmuodoista (i3s + p1s); m-kenttää ei tarvita.
   ”kaksi päivää sitten”: rakenne ”päivää sitten” (há … dias), koska gramatica.js:n sitten-tietueella ei ole merkitystä
   ”há (tempo)”; ”viime viikolla” ja ”viime vuonna” ilmauksina, jotta kupla sanoo merkityksen kokonaisena.
   24.10.2026 (katselmointi): elää = ”estar vivo, viver (a vida)”, asumisesta asua (S6 B1); uusi nukahtaa (kotitehtävän
   malli ”Jay nukahti kello kymmenen”, ennen ”nukkui”).
   Puhekieli (Na rua): oltiin, mentiin, syötiin = me-muoto passiivista (tunnistus; passiivi opetetaan oppitunnilla 20).
   Materiaalivaihe 31.10.2026 (docs/RUNKO_13_20.md §1 ja §11): uudet tukki (”nukkua kuin tukki”, dialogi A) ja lahjapaketti
   (yhdyssana lahja + paketti, dialogi B); tällä ja tällä viikolla (dialogi B; tämä-tietueessa t02.js ei ole adessiivia, eikä t02:ta muuteta); uni ja keko (unikekon osat, S2_glossary_audit:74: kuplassa ei ollut tarkistettua tietuetta).
   KS-tarkistus 31.10.2026 (koordinaattori): naapuri ja keko paikka sisa (naapurissa, kekoon); piparkakusta yhd pois
   (”pipar” ei ole suomen sana); ”nukkua kuin tukki” ja lahjapaketti löytyvät KS:stä. Purjon joulukalenteri ja sen tehtävä siirtyivät t15:stä osaan B, joten
   kalenterin sanojen tietueet siirtyivät sanasto/t15.js:stä tänne (o = t13; portti O2): jouluaatto, joulukalenteri, luukku,
   tähti, piparkakku, tonttu, joululaulu, joulukortti, kinkku, joulusauna, joulukuusi, joulupukki, joulupuuro, joulurauha.
   lahja on jo t12.js:ssä; villasukka, sukka (t09), paketti (t03), suklaakakku (t04) ovat jo leksikossa. */
Sanasto.lisaa('t13', [
{"id":"herätä","l":"verbi","pt":["acordar"],"t":{"tyyppi":4,"p1s":"herään","p3s":"herää","p3p":"heräävät","i3s":"heräsi"},"o":"t13"},
{"id":"jakaa","l":"verbi","pt":["entregar, distribuir","dividir"],"t":{"tyyppi":1,"p1s":"jaan","p3s":"jakaa","p3p":"jakavat","i3s":"jakoi"},"huom":"jakaa postia = entregar a correspondência","o":"t13"},
{"id":"jutella","l":"verbi","pt":["conversar, bater papo"],"t":{"tyyppi":3,"p1s":"juttelen","p3s":"juttelee","p3p":"juttelevat","i3s":"jutteli"},"huom":"com quem: genitivo + kanssa (naapurin kanssa = com a vizinha)","o":"t13"},
{"id":"keittää","l":"verbi","pt":["fazer (café, chá)","ferver, cozinhar na água"],"t":{"tyyppi":1,"p1s":"keitän","p3s":"keittää","p3p":"keittävät","i3s":"keitti"},"o":"t13"},
{"id":"posti","l":"substantiivi","pt":["correspondência, cartas","correio"],"t":{"gen":"postin","part":"postia","ill":"postiin","mpart":"posteja"},"paikka":"sisa","o":"t13"},
{"id":"kirje","l":"substantiivi","pt":["carta"],"t":{"gen":"kirjeen","part":"kirjettä","ill":"kirjeeseen","mpart":"kirjeitä"},"paikka":"sisa","o":"t13"},
{"id":"naapuri","l":"substantiivi","pt":["vizinho, vizinha"],"t":{"gen":"naapurin","part":"naapuria","ill":"naapuriin","mpart":"naapureita"},"paikka":"sisa","o":"t13"},
{"id":"pilates","l":"substantiivi","pt":["pilates"],"t":{"gen":"pilateksen","part":"pilatesta","ill":"pilatekseen","mpart":null},"paikka":"sisa","huom":"o radical ganha -kse-: pilateksessa = no pilates","o":"t13"},
{"id":"aamukahvi","l":"substantiivi","pt":["o primeiro café do dia"],"t":{"gen":"aamukahvin","part":"aamukahvia","ill":"aamukahviin","mpart":"aamukahveja"},"paikka":"sisa","yhd":["aamu","kahvi"],"o":"t13"},
{"id":"unikeko","l":"substantiivi","pt":["dorminhoco, dorminhoca"],"t":{"gen":"unikeon","part":"unikekoa","ill":"unikekoon","mpart":"unikekoja"},"paikka":"ulko","yhd":["uni","keko"],"huom":"literalmente “monte de sono”; carinhoso","o":"t13"},
{"id":"iltapäivä","l":"substantiivi","pt":["tarde (depois do meio-dia)"],"t":{"gen":"iltapäivän","part":"iltapäivää","ill":"iltapäivään","mpart":"iltapäiviä"},"paikka":"aika","yhd":["ilta","päivä"],"huom":"iltapäivällä = à tarde","o":"t13"},
{"id":"viikko","l":"substantiivi","pt":["semana"],"t":{"gen":"viikon","part":"viikkoa","ill":"viikkoon","mpart":"viikkoja"},"paikka":"aika","huom":"kolme kertaa viikossa = três vezes por semana","o":"t13"},
{"id":"viime","l":"taipumaton","pt":["passado, passada (no tempo)"],"huom":"não muda: viime viikolla = na semana passada, viime vuonna = no ano passado","o":"t13"},
{"id":"viime viikolla","l":"ilmaus","pt":["na semana passada"],"osat":["viime","viikolla"],"tyyppi":"idiomi","o":"t13"},
{"id":"tällä","l":"taipumaton","pt":["neste, nesta, com este"],"huom":"tämä (este) + -llä: tällä viikolla = nesta semana","o":"t13"},
{"id":"tällä viikolla","l":"ilmaus","pt":["esta semana, nesta semana"],"osat":["tällä","viikolla"],"tyyppi":"idiomi","o":"t13"},
{"id":"viime vuonna","l":"ilmaus","pt":["no ano passado"],"osat":["viime","vuonna"],"tyyppi":"idiomi","o":"t13"},
{"id":"päivää sitten","l":"rakenne","pt":["há … dias"],"osat":["päivää","sitten"],"kaava":"número + päivää sitten: kaksi päivää sitten = há dois dias","o":"t13"},
{"id":"hereillä","l":"taipumaton","pt":["acordado, acordada"],"o":"t13"},
{"id":"koko","l":"taipumaton","pt":["todo, toda, inteiro, inteira"],"huom":"vem antes da palavra e não muda: koko perhe = a família inteira","o":"t13"},
{"id":"vihdoin","l":"taipumaton","pt":["finalmente, enfim"],"o":"t13"},
{"id":"paitsi","l":"taipumaton","pt":["menos, exceto"],"o":"t13"},
{"id":"Leijonakuningas","l":"nimi","pt":["O Rei Leão (filme)"],"t":{"gen":"Leijonakuninkaan","part":"Leijonakuningasta","ill":"Leijonakuninkaaseen"},"yhd":["leijona","kuningas"],"o":"t13"},
{"id":"oltiin","l":"puhe","pt":["(nós) estávamos, estivemos"],"kirja":"olimme","o":"t13"},
{"id":"mentiin","l":"puhe","pt":["(nós) fomos"],"kirja":"menimme","o":"t13"},
{"id":"syötiin","l":"puhe","pt":["(nós) comemos"],"kirja":"söimme","o":"t13"},
{"id":"yksin","l":"taipumaton","pt":["sozinho, sozinha"],"o":"t13"},
{"id":"tyttö","l":"substantiivi","pt":["menina, moça"],"t":{"gen":"tytön","part":"tyttöä","ill":"tyttöön","mpart":"tyttöjä"},"paikka":"ulko","o":"t13"},
{"id":"lopettaa","l":"verbi","pt":["parar, terminar, deixar de"],"t":{"tyyppi":1,"p1s":"lopetan","p3s":"lopettaa","p3p":"lopettavat","i3s":"lopetti"},"huom":"Walker lopetti työt. = o Walker parou de trabalhar","o":"t13"},
{"id":"jatkaa","l":"verbi","pt":["continuar"],"t":{"tyyppi":1,"p1s":"jatkan","p3s":"jatkaa","p3p":"jatkavat","i3s":"jatkoi","pass":"jatketaan"},"o":"t13"},
{"id":"elää","l":"verbi","pt":["estar vivo, viver (a vida)"],"t":{"tyyppi":1,"p1s":"elän","p3s":"elää","p3p":"elävät","i3s":"eli"},"huom":"morar em, viver em um lugar = asua: Asuin siellä kymmenen vuotta.","o":"t13"},
{"id":"nukahtaa","l":"verbi","pt":["adormecer, pegar no sono"],"t":{"tyyppi":1,"p1s":"nukahdan","p3s":"nukahtaa","p3p":"nukahtavat","i3s":"nukahti"},"huom":"nukahtaa = começar a dormir; nukkua = estar dormindo: Jay nukahti kello kymmenen.","o":"t13"},
{"id":"silloin","l":"taipumaton","pt":["então, naquela hora, naquela época"],"o":"t13"},
{"id":"uni","l":"substantiivi","pt":["sono","sonho"],"t":{"gen":"unen","part":"unta","ill":"uneen","mpart":"unia"},"paikka":"sisa","huom":"unikeko = uni + keko: “monte de sono”","o":"t13"},
{"id":"keko","l":"substantiivi","pt":["monte, pilha"],"t":{"gen":"keon","part":"kekoa","ill":"kekoon","mpart":"kekoja"},"paikka":"sisa","o":"t13"},
{"id":"tukki","l":"substantiivi","pt":["tronco, tora (de árvore cortada)"],"t":{"gen":"tukin","part":"tukkia","ill":"tukkiin","mpart":"tukkeja"},"paikka":"ulko","oletus":["tukkia","tukkiin","tukissa","tukista","tukilla","tukilta","tukille","tukkina","tukiksi","tukkien"],"huom":"nukkua kuin tukki = dormir como uma pedra (palavra por palavra: “dormir como um tronco”)","o":"t13"},
{"id":"lahjapaketti","l":"substantiivi","pt":["pacote de presente"],"t":{"gen":"lahjapaketin","part":"lahjapakettia","ill":"lahjapakettiin","mpart":"lahjapaketteja"},"paikka":"sisa","yhd":["lahja","paketti"],"huom":"palavra composta: lahja (presente) + paketti (pacote)","o":"t13"},
{"id":"jouluaatto","l":"substantiivi","pt":["véspera de Natal (24 de dezembro)"],"t":{"gen":"jouluaaton","part":"jouluaattoa","ill":"jouluaattoon","mpart":"jouluaattoja"},"paikka":"aika","aikasana":true,"yhd":["joulu","aatto"],"huom":"jouluaattona = na véspera de Natal: na Finlândia, o dia mais importante do Natal","o":"t13"},
{"id":"joulukalenteri","l":"substantiivi","pt":["calendário do Advento"],"t":{"gen":"joulukalenterin","part":"joulukalenteria","ill":"joulukalenteriin","mpart":"joulukalentereita"},"paikka":"sisa","yhd":["joulu","kalenteri"],"huom":"uma portinha por dia, de 1 a 24 de dezembro","o":"t13"},
{"id":"luukku","l":"substantiivi","pt":["portinha (do calendário)"],"t":{"gen":"luukun","part":"luukkua","ill":"luukkuun","mpart":"luukkuja"},"paikka":"sisa","o":"t13"},
{"id":"tähti","l":"substantiivi","pt":["estrela"],"t":{"gen":"tähden","part":"tähteä","ill":"tähteen","mpart":"tähtiä"},"paikka":"sisa","o":"t13"},
{"id":"piparkakku","l":"substantiivi","pt":["biscoito de gengibre (de Natal)"],"t":{"gen":"piparkakun","part":"piparkakkua","ill":"piparkakkuun","mpart":"piparkakkuja"},"paikka":"sisa","o":"t13"},
{"id":"tonttu","l":"substantiivi","pt":["duende (ajudante do Papai Noel)"],"t":{"gen":"tontun","part":"tonttua","ill":"tonttuun","mpart":"tonttuja"},"paikka":"ulko","o":"t13"},
{"id":"joululaulu","l":"substantiivi","pt":["canção de Natal"],"t":{"gen":"joululaulun","part":"joululaulua","ill":"joululauluun","mpart":"joululauluja"},"paikka":"sisa","yhd":["joulu","laulu"],"o":"t13"},
{"id":"joulukortti","l":"substantiivi","pt":["cartão de Natal"],"t":{"gen":"joulukortin","part":"joulukorttia","ill":"joulukorttiin","mpart":"joulukortteja"},"paikka":"sisa","yhd":["joulu","kortti"],"o":"t13"},
{"id":"kinkku","l":"substantiivi","pt":["presunto, pernil (o prato do Natal finlandês)"],"t":{"gen":"kinkun","part":"kinkkua","ill":"kinkkuun","mpart":"kinkkuja"},"paikka":"sisa","o":"t13"},
{"id":"joulusauna","l":"substantiivi","pt":["sauna de Natal"],"t":{"gen":"joulusaunan","part":"joulusaunaa","ill":"joulusaunaan","mpart":"joulusaunoja"},"paikka":"sisa","yhd":["joulu","sauna"],"o":"t13"},
{"id":"joulukuusi","l":"substantiivi","pt":["árvore de Natal"],"t":{"gen":"joulukuusen","part":"joulukuusta","ill":"joulukuuseen","mpart":"joulukuusia"},"paikka":"sisa","yhd":["joulu","kuusi"],"oletus":["joulukuusta"],"o":"t13"},
{"id":"joulupukki","l":"substantiivi","pt":["Papai Noel"],"t":{"gen":"joulupukin","part":"joulupukkia","ill":"joulupukkiin","mpart":"joulupukkeja"},"paikka":"ulko","yhd":["joulu","pukki"],"huom":"pukki = bode; o Papai Noel finlandês vem na véspera e bate na porta","o":"t13"},
{"id":"joulupuuro","l":"substantiivi","pt":["mingau de arroz de Natal"],"t":{"gen":"joulupuuron","part":"joulupuuroa","ill":"joulupuuroon","mpart":"joulupuuroja"},"paikka":"sisa","yhd":["joulu","puuro"],"o":"t13"},
{"id":"joulurauha","l":"substantiivi","pt":["paz de Natal"],"t":{"gen":"joulurauhan","part":"joulurauhaa","ill":"joulurauhaan","mpart":null},"paikka":"sisa","yhd":["joulu","rauha"],"o":"t13"},
]);
