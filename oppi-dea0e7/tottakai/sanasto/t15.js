/* Tottakai: oppitunnin t15 sanat (jouluaatto Belo Horizontessa: Martan tehtävälista, Purjon joulukalenteri, videopuhelu
   Purjolle ja Hiidelle). Sopimus: tottakai/sanasto/README.md. Yksi tietue riviä kohden, tiukka JSON.
   Jo leksikossa ja käytetään sellaisenaan: joulu (gramatica), hyvää joulua (t10), kuusi:puu (t02), sauna (t06), kynttilä,
   lumi, pakkanen, sataa, vasta (t09), tuoli, parveke (t08), lautanen, kokki, sohva, avata, siivota (t07), salaatti, veitsi,
   haarukka (treeni), laittaa (pelit), kakku, kakka, voida, lämmin, nauraa (t04), haluta (t03), lähettää, Marta, Walker,
   Anderson, sakko (t05), keittää, hereillä (t13), Malu (t14), Moara, mango, ananas (t11), lahja (t12), kutsua, viimeinen,
   ennen (t10), mukava, tottakai, käydä, kerta (gramatica), ulkona, jo, liian (t01).
   Siirrot 23.10.2026 (portti O2: sana kuuluu oppitunnille, jolla se näkyy ensin): ihana (ennen t16; t15:n vastaus
   ”Aivan ihana!”) ja ystävä (ennen t17; t15:n kysymys ”Kutsutko ystäviä jouluna?”) ovat tässä; lahja on t12.js:ssä
   (t12:n käännöstehtävä ”en osta lahjoja”).
   Partisiipit (en syönyt, emme syöneet: part.yks, part.mon) ja konditionaali (haluaisin, olisi, voisitko: kond.*) tulevat
   taivutuskoneelta (opetusjärjestys kasitteet.js OPETUS: t15); m-kenttää ei tarvita. Puhekieli vain Na rua -laatikossa:
   syöny, kinkkuu, ois (kiva on jo gramatica.js:ssä puhe-tietueena, kirja = mukava). */
Sanasto.lisaa('t15', [
{"id":"jouluaatto","l":"substantiivi","pt":["véspera de Natal (24 de dezembro)"],"t":{"gen":"jouluaaton","part":"jouluaattoa","ill":"jouluaattoon","mpart":"jouluaattoja"},"paikka":"aika","aikasana":true,"yhd":["joulu","aatto"],"huom":"jouluaattona = na véspera de Natal: na Finlândia, o dia mais importante do Natal","o":"t15"},
{"id":"joulukoriste","l":"substantiivi","pt":["enfeite de Natal"],"t":{"gen":"joulukoristeen","part":"joulukoristetta","ill":"joulukoristeeseen","mpart":"joulukoristeita"},"paikka":"sisa","yhd":["joulu","koriste"],"o":"t15"},
{"id":"täynnä","l":"taipumaton","pt":["cheio, cheia (de)"],"huom":"täynnä + partitivo: täynnä joulukoristeita = cheio de enfeites de Natal","o":"t15"},
{"id":"jääkaappi","l":"substantiivi","pt":["geladeira"],"t":{"gen":"jääkaapin","part":"jääkaappia","ill":"jääkaappiin","mpart":"jääkaappeja"},"paikka":"sisa","yhd":["jää","kaappi"],"o":"t15"},
{"id":"tehtävä","l":"substantiivi","pt":["tarefa","exercício"],"t":{"gen":"tehtävän","part":"tehtävää","ill":"tehtävään","mpart":"tehtäviä"},"paikka":"sisa","o":"t15"},
{"id":"tehtävälista","l":"substantiivi","pt":["lista de tarefas"],"t":{"gen":"tehtävälistan","part":"tehtävälistaa","ill":"tehtävälistaan","mpart":"tehtävälistoja"},"paikka":"sisa","yhd":["tehtävä","lista"],"o":"t15"},
{"id":"kääntää","l":"verbi","pt":["traduzir","virar"],"t":{"tyyppi":1,"p1s":"käännän","p3s":"kääntää","p3p":"kääntävät","i3s":"käänsi"},"huom":"kääntää suomeksi = traduzir para o finlandês; kääntyä = virar-se (lição 14)","o":"t15"},
{"id":"hakea","l":"verbi","pt":["buscar, ir buscar"],"t":{"tyyppi":1,"p1s":"haen","p3s":"hakee","p3p":"hakevat","i3s":"haki"},"huom":"Hae tuolit! = vá buscar as cadeiras!","o":"t15"},
{"id":"kattaa","l":"verbi","pt":["pôr (a mesa)"],"t":{"tyyppi":1,"p1s":"katan","p3s":"kattaa","p3p":"kattavat","i3s":"kattoi"},"huom":"kattaa pöytä = pôr a mesa","o":"t15"},
{"id":"lasi","l":"substantiivi","pt":["copo","vidro"],"t":{"gen":"lasin","part":"lasia","ill":"lasiin","mpart":"laseja"},"paikka":"sisa","o":"t15"},
{"id":"laskea","l":"verbi","pt":["contar"],"t":{"tyyppi":1,"p1s":"lasken","p3s":"laskee","p3p":"laskevat","i3s":"laski"},"o":"t15"},
{"id":"joulukalenteri","l":"substantiivi","pt":["calendário do Advento"],"t":{"gen":"joulukalenterin","part":"joulukalenteria","ill":"joulukalenteriin","mpart":"joulukalentereita"},"paikka":"sisa","yhd":["joulu","kalenteri"],"huom":"uma portinha por dia, de 1 a 24 de dezembro","o":"t15"},
{"id":"luukku","l":"substantiivi","pt":["portinha (do calendário)"],"t":{"gen":"luukun","part":"luukkua","ill":"luukkuun","mpart":"luukkuja"},"paikka":"sisa","o":"t15"},
{"id":"tähti","l":"substantiivi","pt":["estrela"],"t":{"gen":"tähden","part":"tähteä","ill":"tähteen","mpart":"tähtiä"},"paikka":"sisa","o":"t15"},
{"id":"tähden","l":"taipumaton","pt":["por causa de"],"huom":"vem depois do genitivo: joulun tähden = por causa do Natal","piilota":true,"o":"t15"},
{"id":"piparkakku","l":"substantiivi","pt":["biscoito de gengibre (de Natal)"],"t":{"gen":"piparkakun","part":"piparkakkua","ill":"piparkakkuun","mpart":"piparkakkuja"},"paikka":"sisa","yhd":["pipar","kakku"],"o":"t15"},
{"id":"tonttu","l":"substantiivi","pt":["duende (ajudante do Papai Noel)"],"t":{"gen":"tontun","part":"tonttua","ill":"tonttuun","mpart":"tonttuja"},"paikka":"ulko","o":"t15"},
{"id":"joululaulu","l":"substantiivi","pt":["canção de Natal"],"t":{"gen":"joululaulun","part":"joululaulua","ill":"joululauluun","mpart":"joululauluja"},"paikka":"sisa","yhd":["joulu","laulu"],"o":"t15"},
{"id":"joulukortti","l":"substantiivi","pt":["cartão de Natal"],"t":{"gen":"joulukortin","part":"joulukorttia","ill":"joulukorttiin","mpart":"joulukortteja"},"paikka":"sisa","yhd":["joulu","kortti"],"o":"t15"},
{"id":"kinkku","l":"substantiivi","pt":["presunto, pernil (o prato do Natal finlandês)"],"t":{"gen":"kinkun","part":"kinkkua","ill":"kinkkuun","mpart":"kinkkuja"},"paikka":"sisa","o":"t15"},
{"id":"joulusauna","l":"substantiivi","pt":["sauna de Natal"],"t":{"gen":"joulusaunan","part":"joulusaunaa","ill":"joulusaunaan","mpart":"joulusaunoja"},"paikka":"sisa","yhd":["joulu","sauna"],"o":"t15"},
{"id":"joulukuusi","l":"substantiivi","pt":["árvore de Natal"],"t":{"gen":"joulukuusen","part":"joulukuusta","ill":"joulukuuseen","mpart":"joulukuusia"},"paikka":"sisa","yhd":["joulu","kuusi"],"oletus":["joulukuusta"],"o":"t15"},
{"id":"joulupukki","l":"substantiivi","pt":["Papai Noel"],"t":{"gen":"joulupukin","part":"joulupukkia","ill":"joulupukkiin","mpart":"joulupukkeja"},"paikka":"ulko","yhd":["joulu","pukki"],"huom":"pukki = bode; o Papai Noel finlandês vem na véspera e bate na porta","o":"t15"},
{"id":"puuro","l":"substantiivi","pt":["mingau"],"t":{"gen":"puuron","part":"puuroa","ill":"puuroon","mpart":"puuroja"},"paikka":"sisa","o":"t15"},
{"id":"joulupuuro","l":"substantiivi","pt":["mingau de arroz de Natal"],"t":{"gen":"joulupuuron","part":"joulupuuroa","ill":"joulupuuroon","mpart":"joulupuuroja"},"paikka":"sisa","yhd":["joulu","puuro"],"o":"t15"},
{"id":"joulurauha","l":"substantiivi","pt":["paz de Natal"],"t":{"gen":"joulurauhan","part":"joulurauhaa","ill":"joulurauhaan","mpart":null},"paikka":"sisa","yhd":["joulu","rauha"],"o":"t15"},
{"id":"kalkkuna","l":"substantiivi","pt":["peru"],"t":{"gen":"kalkkunan","part":"kalkkunaa","ill":"kalkkunaan","mpart":"kalkkunoita"},"paikka":"sisa","o":"t15"},
{"id":"joulupöytä","l":"substantiivi","pt":["mesa de Natal, ceia"],"t":{"gen":"joulupöydän","part":"joulupöytää","ill":"joulupöytään","mpart":"joulupöytiä"},"paikka":"ulko","yhd":["joulu","pöytä"],"o":"t15"},
{"id":"keskiyö","l":"substantiivi","pt":["meia-noite"],"t":{"gen":"keskiyön","part":"keskiyötä","ill":"keskiyöhön","mpart":"keskiöitä"},"paikka":"ulko","yhd":["keski","yö"],"huom":"keskiyöllä = à meia-noite","o":"t15"},
{"id":"syöny","l":"puhe","pt":["comido (en syöny = não comi)"],"kirja":"syönyt","o":"t15"},
{"id":"kinkkuu","l":"puhe","pt":["presunto (partitivo)"],"kirja":"kinkkua","o":"t15"},
{"id":"ois","l":"puhe","pt":["seria (ois kiva = seria legal)"],"kirja":"olisi","o":"t15"},
{"id":"edes","l":"taipumaton","pt":["nem (sequer), pelo menos"],"huom":"En edes nähnyt kinkkua! = eu nem vi presunto!","o":"t15"},
{"id":"toivoa","l":"verbi","pt":["esperar (desejar)"],"t":{"tyyppi":1,"p1s":"toivon","p3s":"toivoo","p3p":"toivovat","i3s":"toivoi"},"huom":"Toivon, että pidät siitä. = espero que você goste","o":"t15"},
{"id":"tahtoa","l":"verbi","pt":["querer"],"t":{"tyyppi":1,"p1s":"tahdon","p3s":"tahtoo","p3p":"tahtovat","i3s":"tahtoi"},"m":{"tahtoisin":"kond.1s"},"huom":"tahtoisin = haluaisin, um pouco mais formal","o":"t15"},
{"id":"ihana","l":"adjektiivi","pt":["lindo, linda, maravilhoso, maravilhosa"],"t":{"gen":"ihanan","part":"ihanaa","ill":"ihanaan","mpart":"ihania"},"vert":["ihanampi","ihanin"],"o":"t15"},
{"id":"ystävä","l":"substantiivi","pt":["amigo, amiga"],"t":{"gen":"ystävän","part":"ystävää","ill":"ystävään","mpart":"ystäviä"},"paikka":"ulko","m":{"ystäväni":"poss.1s"},"o":"t15"},
]);
