/* Tottakai: oppitunnin t15 sanat (lauantai 26.12.: Jayn etsintä ja pelastus Marcuksen kellarista).
   Materiaalivaihe 7.11.2026 (lukitut dialogit t15-a-1, t15-b-1): siirretty tänne vastata, poissa, ääniviesti (t16),
   Marcus, tyhmä, tukka, Morro do Cascalho, kaupunginosa (t17), hiljaa, kiinni, mikroaaltouuni, Cida, sankari (t18),
   moottori (t20). Uudet: koira, käynnissä, krapula, kamala, usein, suunnitelma, rengas, avain, kyytiin, nostaa,
   Atlético-lehti, nukkunu (puhe); lasi sai merkityksen óculos (lasit); ne sai muodon niille (gramatica.js). Pois
   siirretty: tehtävä, tehtävälista, jääkaappi, kääntää (t16: Martan lista siirtyi sinne), ihana (t19), ystävä ja
   keskiyö (t14). Joulusanat kalkkuna, joulupöytä, joulukoriste, kattaa ja laskea jäävät tänne (Treeni t15-joulu ja
   t15-partisiippi käyttävät niitä).
   Aiempi kuvaus: jouluaatto Belo Horizontessa: Martan tehtävälista, Purjon joulukalenteri, videopuhelu Purjolle ja Hiidelle. Sopimus: tottakai/sanasto/README.md. Yksi tietue riviä kohden, tiukka JSON.
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
   syöny, kinkkuu, ois (kiva on jo gramatica.js:ssä puhe-tietueena, kirja = mukava).
   Siirto 31.10.2026 (t13:n materiaalivaihe, docs/RUNKO_13_20.md §11): Purjon joulukalenteri siirtyi oppitunnille 13, joten
   jouluaatto, joulukalenteri, luukku, tähti, piparkakku, tonttu, joululaulu, joulukortti, kinkku, joulusauna, joulukuusi,
   joulupukki, joulupuuro ja joulurauha ovat nyt sanasto/t13.js:ssä (o = t13). */
Sanasto.lisaa('t15', [
{"id":"joulukoriste","l":"substantiivi","pt":["enfeite de Natal"],"t":{"gen":"joulukoristeen","part":"joulukoristetta","ill":"joulukoristeeseen","mpart":"joulukoristeita"},"paikka":"sisa","yhd":["joulu","koriste"],"o":"t15"},
{"id":"täynnä","l":"taipumaton","pt":["cheio, cheia (de)"],"huom":"täynnä + partitivo: täynnä joulukoristeita = cheio de enfeites de Natal","o":"t15"},
{"id":"hakea","l":"verbi","pt":["buscar, ir buscar"],"t":{"tyyppi":1,"p1s":"haen","p3s":"hakee","p3p":"hakevat","i3s":"haki"},"huom":"Hae tuolit! = vá buscar as cadeiras!","o":"t15"},
{"id":"kattaa","l":"verbi","pt":["pôr (a mesa)"],"t":{"tyyppi":1,"p1s":"katan","p3s":"kattaa","p3p":"kattavat","i3s":"kattoi"},"huom":"kattaa pöytä = pôr a mesa","o":"t15"},
{"id":"lasi","l":"substantiivi","pt":["copo","vidro","óculos (no plural: lasit)"],"t":{"gen":"lasin","part":"lasia","ill":"lasiin","mpart":"laseja"},"paikka":"sisa","huom":"tyhmät lasit = óculos ridículos; o mesmo que silmälasit","o":"t15"},
{"id":"laskea","l":"verbi","pt":["contar"],"t":{"tyyppi":1,"p1s":"lasken","p3s":"laskee","p3p":"laskevat","i3s":"laski"},"o":"t15"},
{"id":"tähden","l":"taipumaton","pt":["por causa de"],"huom":"vem depois do genitivo: joulun tähden = por causa do Natal","piilota":true,"o":"t15"},
{"id":"puuro","l":"substantiivi","pt":["mingau"],"t":{"gen":"puuron","part":"puuroa","ill":"puuroon","mpart":"puuroja"},"paikka":"sisa","o":"t15"},
{"id":"kalkkuna","l":"substantiivi","pt":["peru"],"t":{"gen":"kalkkunan","part":"kalkkunaa","ill":"kalkkunaan","mpart":"kalkkunoita"},"paikka":"sisa","o":"t15"},
{"id":"joulupöytä","l":"substantiivi","pt":["mesa de Natal, ceia"],"t":{"gen":"joulupöydän","part":"joulupöytää","ill":"joulupöytään","mpart":"joulupöytiä"},"paikka":"ulko","yhd":["joulu","pöytä"],"o":"t15"},
{"id":"syöny","l":"puhe","pt":["comido (en syöny = não comi)"],"kirja":"syönyt","o":"t15"},
{"id":"kinkkuu","l":"puhe","pt":["presunto (partitivo)"],"kirja":"kinkkua","o":"t15"},
{"id":"ois","l":"puhe","pt":["seria (ois kiva = seria legal)"],"kirja":"olisi","o":"t15"},
{"id":"edes","l":"taipumaton","pt":["nem (sequer), pelo menos"],"huom":"En edes nähnyt kinkkua! = eu nem vi presunto!","o":"t15"},
{"id":"toivoa","l":"verbi","pt":["esperar (desejar)"],"t":{"tyyppi":1,"p1s":"toivon","p3s":"toivoo","p3p":"toivovat","i3s":"toivoi"},"huom":"Toivon, että pidät siitä. = espero que você goste","o":"t15"},
{"id":"tahtoa","l":"verbi","pt":["querer"],"t":{"tyyppi":1,"p1s":"tahdon","p3s":"tahtoo","p3p":"tahtovat","i3s":"tahtoi"},"m":{"tahtoisin":"kond.1s"},"huom":"tahtoisin = haluaisin, um pouco mais formal","o":"t15"},
{"id":"Marcus","l":"henkilo","pt":["Marcus"],"t":{"gen":"Marcuksen","all":"Marcukselle","part":"Marcusta","ill":"Marcukseen"},"hahmo":"marcus","huom":"o homem baixinho do cabelo ridículo; torcedor fanático do Atlético; o nome se declina como as palavras em -us: Marcuksen","aa":{"Marcus":"MAR-kus","Marcuksen":"MAR-kuk-sen","Marcukselle":"MAR-kuk-sel-le","Marcusta":"MAR-kus-ta"},"ipa":{"Marcus":"[ˈmɑrkus]","Marcuksen":"[ˈmɑrkuksen]","Marcukselle":"[ˈmɑrkukselːe]","Marcusta":"[ˈmɑrkustɑ]"},"o":"t15"},
{"id":"vastata","l":"verbi","pt":["responder","atender (o telefone)"],"t":{"tyyppi":4,"p1s":"vastaan","p3s":"vastaa","p3p":"vastaavat","i3s":"vastasi","pass":"vastataan"},"huom":"vastata puhelimeen = atender o telefone","o":"t15"},
{"id":"hiljaa","l":"taipumaton","pt":["em silêncio, baixinho"],"huom":"Ole hiljaa! = fique quieto!","o":"t15"},
{"id":"Cida","l":"henkilo","pt":["Cida (dona Cida)"],"t":{"gen":"Cidan","all":"Cidalle","part":"Cidaa"},"hahmo":"cida","huom":"Dona Cida, vizinha do Marcus no Morro do Cascalho; dá comida aos cachorros dele e tem a chave da porta dos fundos","aa":{"Cida":"SI-da","Cidan":"SI-dan","Cidalle":"SI-dal-le","Cidalla":"SI-dal-la"},"ipa":{"Cida":"[ˈsidɑ]","Cidan":"[ˈsidɑn]","Cidalle":"[ˈsidɑlːe]","Cidalla":"[ˈsidɑlːɑ]"},"o":"t15"},
{"id":"kiinni","l":"taipumaton","pt":["preso, amarrado","fechado"],"huom":"ovi on kiinni = a porta está fechada","o":"t15"},
{"id":"tyhmä","l":"adjektiivi","pt":["bobo, boba, burro, burra"],"t":{"gen":"tyhmän","part":"tyhmää","ill":"tyhmään","mpart":"tyhmiä"},"vert":["tyhmempi","tyhmin"],"huom":"tyhmä tukka = um cabelo bobo: não é elogio","o":"t15"},
{"id":"tukka","l":"substantiivi","pt":["cabelo (o cabelo todo)"],"t":{"gen":"tukan","part":"tukkaa","ill":"tukkaan","mpart":"tukkia"},"paikka":"sisa","m":{"tukkani":"poss.1s"},"huom":"singular: ruskea tukka = cabelo castanho","o":"t15"},
{"id":"Morro do Cascalho","l":"paikka","pt":["Morro do Cascalho (morro inventado de Belo Horizonte)"],"t":{"gen":"Morro do Cascalhon","part":"Morro do Cascalhoa","ill":"Morro do Cascalhoon"},"paikka":"ulko","huom":"cascalho = cascalho, pedregulho: um nome bom para geólogos","aa":{"Morro do Cascalho":"MOR-ro do KAS-kal-jo","Morro do Cascalholla":"MOR-ro do KAS-kal-jol-la","Morro do Cascalholle":"MOR-ro do KAS-kal-jol-le"},"ipa":{"Morro do Cascalho":"[ˈmorːo do ˈkɑskɑljo]","Morro do Cascalholla":"[ˈmorːo do ˈkɑskɑljolːɑ]","Morro do Cascalholle":"[ˈmorːo do ˈkɑskɑljolːe]"},"o":"t15"},
{"id":"moottori","l":"substantiivi","pt":["motor"],"t":{"gen":"moottorin","part":"moottoria","ill":"moottoriin","mpart":"moottoreita"},"paikka":"sisa","o":"t15"},
{"id":"ääniviesti","l":"substantiivi","pt":["mensagem de voz"],"t":{"gen":"ääniviestin","part":"ääniviestiä","ill":"ääniviestiin","mpart":"ääniviestejä"},"paikka":"sisa","yhd":["ääni","viesti"],"o":"t15"},
{"id":"poissa","l":"taipumaton","pt":["fora, ausente, sumido, sumida"],"huom":"Jay on poissa. = o Jay não está, sumiu","o":"t15"},
{"id":"mikroaaltouuni","l":"substantiivi","pt":["micro-ondas"],"t":{"gen":"mikroaaltouunin","part":"mikroaaltouunia","ill":"mikroaaltouuniin","mpart":"mikroaaltouuneja"},"paikka":"sisa","yhd":["mikro","aalto","uuni"],"o":"t15"},
{"id":"sankari","l":"substantiivi","pt":["herói, heroína"],"t":{"gen":"sankarin","part":"sankaria","ill":"sankariin","mpart":"sankareita"},"paikka":"ulko","o":"t15"},
{"id":"kaupunginosa","l":"substantiivi","pt":["bairro"],"t":{"gen":"kaupunginosan","part":"kaupunginosaa","ill":"kaupunginosaan","mpart":"kaupunginosia"},"paikka":"sisa","yhd":["kaupungin","osa"],"huom":"kaupunki = cidade + osa = parte: “parte da cidade”","o":"t15"},
{"id":"koira","l":"substantiivi","pt":["cachorro, cadela"],"t":{"gen":"koiran","part":"koiraa","ill":"koiraan","mpart":"koiria"},"paikka":"ulko","huom":"kaksi koiraa = dois cachorros (partitivo depois do número)","o":"t15"},
{"id":"käynnissä","l":"taipumaton","pt":["ligado, funcionando (motor, máquina)"],"huom":"moottori käynnissä = com o motor ligado","o":"t15"},
{"id":"krapula","l":"substantiivi","pt":["ressaca"],"t":{"gen":"krapulan","part":"krapulaa","ill":"krapulaan","mpart":"krapuloita"},"paikka":"sisa","huom":"minulla on krapula = estou de ressaca","o":"t15"},
{"id":"kamala","l":"adjektiivi","pt":["horrível, terrível"],"t":{"gen":"kamalan","part":"kamalaa","ill":"kamalaan","mpart":"kamalia"},"vert":["kamalampi","kamalin"],"o":"t15"},
{"id":"usein","l":"taipumaton","pt":["muitas vezes, com frequência"],"o":"t15"},
{"id":"suunnitelma","l":"substantiivi","pt":["plano"],"t":{"gen":"suunnitelman","part":"suunnitelmaa","ill":"suunnitelmaan","mpart":"suunnitelmia"},"paikka":"sisa","o":"t15"},
{"id":"rengas","l":"substantiivi","pt":["pneu","anel, aro"],"t":{"gen":"renkaan","part":"rengasta","ill":"renkaaseen","mpart":"renkaita"},"paikka":"sisa","huom":"vanha rengas = pneu velho","o":"t15"},
{"id":"avain","l":"substantiivi","pt":["chave"],"t":{"gen":"avaimen","part":"avainta","ill":"avaimeen","mpart":"avaimia"},"paikka":"sisa","o":"t15"},
{"id":"kyytiin","l":"taipumaton","pt":["para dentro do carro, de carona"],"huom":"nostaa kyytiin = pôr no carro; tulla kyytiin = entrar no carro","o":"t15"},
{"id":"nostaa","l":"verbi","pt":["levantar, erguer"],"t":{"tyyppi":1,"p1s":"nostan","p3s":"nostaa","p3p":"nostavat","i3s":"nosti"},"o":"t15"},
{"id":"Atlético-lehti","l":"substantiivi","pt":["revista do Atlético"],"t":{"gen":"Atlético-lehden","part":"Atlético-lehteä","ill":"Atlético-lehteen","mpart":"Atlético-lehtiä"},"paikka":"sisa","yhd":["Atlético","lehti"],"o":"t15"},
{"id":"nukkunu","l":"puhe","pt":["dormido (en nukkunu = não dormi)"],"kirja":"nukkunut","o":"t15"},
]);
