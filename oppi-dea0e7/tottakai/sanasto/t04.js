/* Tottakai: oppitunnin 4 sanat ('Esburger ja Kallion kahvila). Sopimus: tottakai/sanasto/README.md.
   Yksi tietue riviä kohden, tiukka JSON. Taivutus tarkistettu Kotus-tyypeistä: kävellä 67, myydä 64,
   kakku 1 A, kakka 9 A, pullo 1, maito 1 F, mehu 1, juoma 10, kortti 5 C, kassa 9, hampurilainen 38,
   ammattilainen 38, herkullinen 38, kahvila 12, korvapuusti 5, kallio 3, lämmin 36, ovi 7, hovi 5, haamu 1,
   hauta 9 F. Oppitunnilla käytetyt myyjä, pulla, suklaa, pieni, taas, kahvi, maksaa ovat t03.js:ssä; syödä, juoda,
   voida, haluta, tee, vesi, nälkä, nauraa, kuulla, Hesburger siirretty gramatica.js:stä tänne o-kentällä
   19.10.2026 (T08, A6-41); saada on 23.10.2026 alkaen t00.js:ssä (AVOIMET AV-052). haluta on 23.10.2026 alkaen
   t03.js:ssä (o = t03): ensimmäinen käyttö t03:n tehtävässä 9 (”Mitä Purjo haluaa?”), portti O2.
   Uudelleenkirjoitus 17.10.2026 (A/B-osat): kaikki tietueet pidetään. Sivulla ei enää näy kun (ydinsanalistan
   otsikkosana, tarkistus Y); kassa näkyy vain kulttuurissa. ovi, hovi, haamu, hauta ja pullo ovat myös Treeni-pakettien
   t04-h / t04-tilaus sanoja (assets/treeni.js). */
Sanasto.lisaa('t04', [
{"id":"kävellä","l":"verbi","pt":["andar, caminhar"],"t":{"tyyppi":3,"p1s":"kävelen","p3s":"kävelee","p3p":"kävelevät","i3s":"käveli","pass":"kävellään"},"o":"t04"},
{"id":"myydä","l":"verbi","pt":["vender"],"t":{"tyyppi":2,"p1s":"myyn","p3s":"myy","p3p":"myyvät","i3s":"myi"},"o":"t04"},
{"id":"kakku","l":"substantiivi","pt":["bolo"],"t":{"gen":"kakun","part":"kakkua","ill":"kakkuun","mpart":"kakkuja"},"paikka":"sisa","huom":"termina em u: kakku, kakkua. Com a no fim (kakka) é outra coisa!","o":"t04"},
{"id":"kakka","l":"substantiivi","pt":["cocô"],"t":{"gen":"kakan","part":"kakkaa","ill":"kakkaan","mpart":"kakkoja"},"paikka":"sisa","huom":"palavra de criança; não confunda com kakku (bolo)","o":"t04"},
{"id":"suklaakakku","l":"substantiivi","pt":["bolo de chocolate"],"t":{"gen":"suklaakakun","part":"suklaakakkua","ill":"suklaakakkuun","mpart":"suklaakakkuja"},"paikka":"sisa","yhd":["suklaa","kakku"],"o":"t04"},
{"id":"hampurilainen","l":"substantiivi","pt":["hambúrguer"],"t":{"gen":"hampurilaisen","part":"hampurilaista","ill":"hampurilaiseen","mpart":"hampurilaisia"},"paikka":"sisa","o":"t04"},
{"id":"kahvila","l":"substantiivi","pt":["café, cafeteria"],"t":{"gen":"kahvilan","part":"kahvilaa","ill":"kahvilaan","mpart":"kahviloita"},"paikka":"sisa","o":"t04"},
{"id":"pullo","l":"substantiivi","pt":["garrafa"],"t":{"gen":"pullon","part":"pulloa","ill":"pulloon","mpart":"pulloja"},"paikka":"sisa","o":"t04"},
{"id":"maito","l":"substantiivi","pt":["leite"],"t":{"gen":"maidon","part":"maitoa","ill":"maitoon","mpart":"maitoja"},"paikka":"sisa","o":"t04"},
{"id":"mehu","l":"substantiivi","pt":["suco"],"t":{"gen":"mehun","part":"mehua","ill":"mehuun","mpart":"mehuja"},"paikka":"sisa","o":"t04"},
{"id":"juoma","l":"substantiivi","pt":["bebida"],"t":{"gen":"juoman","part":"juomaa","ill":"juomaan","mpart":"juomia"},"paikka":"sisa","huom":"de juoda (beber): juoma = o que se bebe","o":"t04"},
{"id":"kortti","l":"substantiivi","pt":["cartão"],"t":{"gen":"kortin","part":"korttia","ill":"korttiin","mpart":"kortteja"},"paikka":"sisa","huom":"maksaa kortilla = pagar com cartão","o":"t04"},
{"id":"kassa","l":"substantiivi","pt":["caixa (onde se paga)"],"t":{"gen":"kassan","part":"kassaa","ill":"kassaan","mpart":"kassoja"},"paikka":"ulko","o":"t04"},
{"id":"ammattilainen","l":"substantiivi","pt":["profissional"],"t":{"gen":"ammattilaisen","part":"ammattilaista","ill":"ammattilaiseen","mpart":"ammattilaisia"},"paikka":"ulko","o":"t04"},
{"id":"korvapuusti","l":"substantiivi","pt":["rolinho de canela finlandês"],"t":{"gen":"korvapuustin","part":"korvapuustia","ill":"korvapuustiin","mpart":"korvapuusteja"},"paikka":"sisa","yhd":["korva","puusti"],"huom":"literalmente “tapa na orelha”","o":"t04"},
{"id":"kallio","l":"substantiivi","pt":["rocha, rochedo"],"t":{"gen":"kallion","part":"kalliota","ill":"kallioon","mpart":"kallioita"},"paikka":"ulko","o":"t04"},
{"id":"ovi","l":"substantiivi","pt":["porta"],"t":{"gen":"oven","part":"ovea","ill":"oveen","mpart":"ovia"},"paikka":"ulko","o":"t04"},
{"id":"hovi","l":"substantiivi","pt":["corte (do rei)"],"t":{"gen":"hovin","part":"hovia","ill":"hoviin","mpart":"hoveja"},"paikka":"sisa","o":"t04"},
{"id":"haamu","l":"substantiivi","pt":["fantasma"],"t":{"gen":"haamun","part":"haamua","ill":"haamuun","mpart":"haamuja"},"paikka":"ulko","o":"t04"},
{"id":"hauta","l":"substantiivi","pt":["túmulo, cova"],"t":{"gen":"haudan","part":"hautaa","ill":"hautaan","mpart":"hautoja"},"paikka":"sisa","o":"t04"},
{"id":"Kallio","l":"paikka","pt":["Kallio, bairro de Helsinque"],"t":{"gen":"Kallion","part":"Kalliota","ill":"Kallioon"},"paikka":"sisa","huom":"kallio = rocha: o bairro dos geólogos","o":"t04"},
{"id":"herkullinen","l":"adjektiivi","pt":["delicioso, deliciosa, gostoso, gostosa"],"t":{"gen":"herkullisen","part":"herkullista","ill":"herkulliseen","mpart":"herkullisia"},"vert":["herkullisempi","herkullisin"],"o":"t04"},
{"id":"lämmin","l":"adjektiivi","pt":["quente, quentinho, quentinha"],"t":{"gen":"lämpimän","part":"lämmintä","ill":"lämpimään","mpart":"lämpimiä"},"vert":["lämpimämpi","lämpimin"],"o":"t04"},
{"id":"entä","l":"taipumaton","pt":["e …?, e quanto a …?"],"huom":"Entä sinä? = e você?","o":"t04"},
{"id":"kun","l":"taipumaton","pt":["quando"],"o":"t04"},
{"id":"mitä saa olla","l":"ilmaus","pt":["o que vai ser?, o que deseja?"],"osat":["mitä","saa#3","olla"],"tyyppi":"kaava","huom":"a pergunta do atendente no balcão","o":"t04"},
{"id":"saisinks","l":"puhe","pt":["eu poderia ter …?, me dá …?"],"kirja":"saisinko","o":"t04"},
{"id":"voida","l":"verbi","pt":["poder"],"t":{"tyyppi":2,"p1s":"voin","p3s":"voi","p3p":"voivat","i3s":"voi"},"m":{"voisit":"kond.2s","voisin":"kond.1s"},"puuttuu":["imper.2s","imper.2p","imper.neg.2p"],"o":"t04"},
{"id":"nälkä","l":"substantiivi","pt":["fome"],"t":{"gen":"nälän","part":"nälkää","ill":"nälkään","mpart":null},"paikka":"sisa","huom":"minulla on nälkä = estou com fome","o":"t04"},
{"id":"syödä","l":"verbi","pt":["comer"],"t":{"tyyppi":2,"p1s":"syön","p3s":"syö","p3p":"syövät","i3s":"söi","pass":"syödään"},"o":"t04"},
{"id":"juoda","l":"verbi","pt":["beber"],"t":{"tyyppi":2,"p1s":"juon","p3s":"juo","p3p":"juovat","i3s":"joi","pass":"juodaan"},"o":"t04"},
{"id":"kuulla","l":"verbi","pt":["ouvir"],"t":{"tyyppi":3,"p1s":"kuulen","p3s":"kuulee","p3p":"kuulevat","i3s":"kuuli","pass":"kuullaan"},"o":"t04"},
{"id":"nauraa","l":"verbi","pt":["rir"],"t":{"tyyppi":1,"p1s":"nauran","p3s":"nauraa","p3p":"nauravat","i3s":"nauroi"},"o":"t04"},
{"id":"tee","l":"substantiivi","pt":["chá"],"t":{"gen":"teen","part":"teetä","ill":"teehen","mpart":"teitä"},"paikka":"sisa","huom":"ee longo: tee = chá, te = vocês","puuttuu":["mon.gen","mon.ines","mon.ela","mon.ill","mon.ade","mon.abl","mon.all","mon.ess","mon.transl"],"o":"t04"},
{"id":"vesi","l":"substantiivi","pt":["água"],"t":{"gen":"veden","part":"vettä","ill":"veteen","mpart":"vesiä"},"paikka":"sisa","o":"t04"},
{"id":"Hesburger","l":"nimi","pt":["Hesburger, rede finlandesa de hambúrgueres"],"t":{"gen":"Hesburgerin","part":"Hesburgeria","ill":"Hesburgeriin"},"paikka":"sisa","o":"t04"},
]);
