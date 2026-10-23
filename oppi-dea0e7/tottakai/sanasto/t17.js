/* Tottakai: oppitunnin t17 sanat (su 27.12.2026 aamu: Jay on kadonnut; Maia soittaa Eenokille ja Uunolle, kuvailee Jayn,
   Uuno muistaa miehen (myös lihaisat kohdat), Maia piirtää kasvokuvat; kadonneen ilmoitus ja Anderson tunnistaa Marcuksen postikierrokseltaan).
   Sopimus: tottakai/sanasto/README.md. Yksi tietue riviä kohden, tiukka JSON.
   Jo leksikossa ja käytetään sellaisenaan: pitkä (t02, #2 alto), lyhyt (t09), vanha, poikaystävä, vanhempi, mies, lapsi
   (t05), nimi (poss.1s nimeni), koti, veli, kuva, talo, asua, hymyillä (t01), numero (poss.1s numeroni), tuntea, kertoa,
   puhelin (t02), pieni, etsiä (t03), muistaa, hetki (t06), sairaala (t07), lasi (t15: copo; silmälasit on oma sana),
   paita, takki, ihminen (t09), aikaisin, ensin, siis (t10), lippis, hattu (t12), posti, naapuri (t13), katu, hotelli,
   hätä, varmasti (t14), Uuno, Eenok (k02), juhla, vastata, viedä, nuori, poissa, hölmö (t16), ruskea, musta, sininen,
   vihreä, harmaa, punainen, keltainen, valkoinen, iso, väri, millainen, kenkä, nainen, aamu, yö, auttaa (gramatica),
   aurinkolasi (t09), yhdessä, mukaan, löytää (treeni).
   Monikon sijat (silmät, silmien, ystävien, miesten, suomalaisten) tulevat taivutuskoneelta (mon.*; opetusjärjestys
   kasitteet.js OPETUS: mon.gen = t17); m-kentässä vain omistusliitteen muodot (poss.1s, kone ei tee niitä), kuten nimi
   (t01), numero (t02) ja ystävä (t15; poss.1s ystäväni). ystävä siirretty t15.js:ään 23.10.2026 (ensimmäinen käyttö t15:n
   kysymyksessä ”Kutsutko ystäviä jouluna?”, portti O2). Puhekieli vain Na rua -laatikossa: sil (= hänellä; millanen on
   jo gramatica.js:ssä). */
Sanasto.lisaa('t17', [
{"id":"silmä","l":"substantiivi","pt":["olho"],"t":{"gen":"silmän","part":"silmää","ill":"silmään","mpart":"silmiä"},"paikka":"sisa","m":{"silmäni":"poss.1s"},"huom":"siniset silmät = olhos azuis: os dois olhos, plural -t","o":"t17"},
{"id":"tukka","l":"substantiivi","pt":["cabelo (o cabelo todo)"],"t":{"gen":"tukan","part":"tukkaa","ill":"tukkaan","mpart":"tukkia"},"paikka":"sisa","m":{"tukkani":"poss.1s"},"huom":"singular: ruskea tukka = cabelo castanho","o":"t17"},
{"id":"hius","l":"substantiivi","pt":["fio de cabelo","cabelo (no plural: hiukset)"],"t":{"gen":"hiuksen","part":"hiusta","ill":"hiukseen","mpart":"hiuksia"},"paikka":"sisa","m":{"hiukseni":"poss.1s"},"huom":"hiukset = o cabelo (plural); um fio só = hius","o":"t17"},
{"id":"hiusväri","l":"substantiivi","pt":["cor do cabelo"],"t":{"gen":"hiusvärin","part":"hiusväriä","ill":"hiusväriin","mpart":"hiusvärejä"},"paikka":"sisa","yhd":["hius","väri"],"o":"t17"},
{"id":"parta","l":"substantiivi","pt":["barba"],"t":{"gen":"parran","part":"partaa","ill":"partaan","mpart":"partoja"},"paikka":"sisa","o":"t17"},
{"id":"viiksi","l":"substantiivi","pt":["bigode (quase sempre no plural: viikset)"],"t":{"gen":"viiksen","part":"viikseä","ill":"viikseen","mpart":"viiksiä"},"paikka":"sisa","huom":"um bigode = viikset, no plural","o":"t17"},
{"id":"silmälasi","l":"substantiivi","pt":["óculos (no plural: silmälasit)"],"t":{"gen":"silmälasin","part":"silmälasia","ill":"silmälasiin","mpart":"silmälaseja"},"paikka":"sisa","yhd":["silmä","lasi"],"m":{"silmälasini":"poss.1s"},"huom":"silmälasit = óculos, plural como em português; silmä = olho + lasi = vidro","o":"t17"},
{"id":"töyhtö","l":"substantiivi","pt":["topete"],"t":{"gen":"töyhdön","part":"töyhtöä","ill":"töyhtöön","mpart":"töyhtöjä"},"paikka":"sisa","o":"t17"},
{"id":"vaalea","l":"adjektiivi","pt":["claro, clara","loiro, loira (cabelo)"],"t":{"gen":"vaalean","part":"vaaleaa","ill":"vaaleaan","mpart":"vaaleita"},"vert":["vaaleampi","vaalein"],"o":"t17"},
{"id":"tumma","l":"adjektiivi","pt":["escuro, escura"],"t":{"gen":"tumman","part":"tummaa","ill":"tummaan","mpart":"tummia"},"vert":["tummempi","tummin"],"o":"t17"},
{"id":"laiha","l":"adjektiivi","pt":["magro, magra"],"t":{"gen":"laihan","part":"laihaa","ill":"laihaan","mpart":"laihoja"},"vert":["laihempi","laihin"],"o":"t17"},
{"id":"kalju","l":"adjektiivi","pt":["careca"],"t":{"gen":"kaljun","part":"kaljua","ill":"kaljuun","mpart":"kaljuja"},"vert":false,"o":"t17"},
{"id":"kihara","l":"adjektiivi","pt":["cacheado, cacheada, crespo, crespa"],"t":{"gen":"kiharan","part":"kiharaa","ill":"kiharaan","mpart":"kiharoita"},"vert":["kiharampi","kiharin"],"o":"t17"},
{"id":"sotkuinen","l":"adjektiivi","pt":["bagunçado, bagunçada, despenteado, despenteada"],"t":{"gen":"sotkuisen","part":"sotkuista","ill":"sotkuiseen","mpart":"sotkuisia"},"vert":["sotkuisempi","sotkuisin"],"o":"t17"},
{"id":"tyhmä","l":"adjektiivi","pt":["bobo, boba, burro, burra"],"t":{"gen":"tyhmän","part":"tyhmää","ill":"tyhmään","mpart":"tyhmiä"},"vert":["tyhmempi","tyhmin"],"huom":"tyhmä tukka = um cabelo bobo: não é elogio","o":"t17"},
{"id":"mustavalkoinen","l":"adjektiivi","pt":["preto e branco, preta e branca"],"t":{"gen":"mustavalkoisen","part":"mustavalkoista","ill":"mustavalkoiseen","mpart":"mustavalkoisia"},"vert":false,"yhd":["musta","valkoinen"],"huom":"a camisa do Atlético Mineiro é mustavalkoinen","o":"t17"},
{"id":"kadota","l":"verbi","pt":["desaparecer, sumir"],"t":{"tyyppi":4,"p1s":"katoan","p3s":"katoaa","p3p":"katoavat","i3s":"katosi","pass":"kadotaan"},"huom":"KADONNUT = desaparecido (o particípio de kadota)","o":"t17"},
{"id":"ilmoitus","l":"substantiivi","pt":["aviso, anúncio"],"t":{"gen":"ilmoituksen","part":"ilmoitusta","ill":"ilmoitukseen","mpart":"ilmoituksia"},"paikka":"sisa","o":"t17"},
{"id":"kuvaus","l":"substantiivi","pt":["descrição"],"t":{"gen":"kuvauksen","part":"kuvausta","ill":"kuvaukseen","mpart":"kuvauksia"},"paikka":"sisa","o":"t17"},
{"id":"ryhmä","l":"substantiivi","pt":["grupo"],"t":{"gen":"ryhmän","part":"ryhmää","ill":"ryhmään","mpart":"ryhmiä"},"paikka":"sisa","o":"t17"},
{"id":"postikierros","l":"substantiivi","pt":["a rota do correio"],"t":{"gen":"postikierroksen","part":"postikierrosta","ill":"postikierrokseen","mpart":"postikierroksia"},"paikka":"ulko","yhd":["posti","kierros"],"huom":"posti = correio + kierros = volta, ronda","o":"t17"},
{"id":"kaupunginosa","l":"substantiivi","pt":["bairro"],"t":{"gen":"kaupunginosan","part":"kaupunginosaa","ill":"kaupunginosaan","mpart":"kaupunginosia"},"paikka":"sisa","yhd":["kaupungin","osa"],"huom":"kaupunki = cidade + osa = parte: “parte da cidade”","o":"t17"},
{"id":"piirtää","l":"verbi","pt":["desenhar"],"t":{"tyyppi":1,"p1s":"piirrän","p3s":"piirtää","p3p":"piirtävät","i3s":"piirsi","pass":"piirretään"},"o":"t17"},
{"id":"tunnistaa","l":"verbi","pt":["reconhecer"],"t":{"tyyppi":1,"p1s":"tunnistan","p3s":"tunnistaa","p3p":"tunnistavat","i3s":"tunnisti","pass":"tunnistetaan"},"o":"t17"},
{"id":"mikä hätänä","l":"ilmaus","pt":["o que houve?, qual é o problema?"],"osat":["mikä","hätänä"],"tyyppi":"idiomi","huom":"hätänä é o essivo de hätä (aperto)","o":"t17"},
{"id":"Marcus","l":"henkilo","pt":["Marcus"],"t":{"gen":"Marcuksen","all":"Marcukselle","part":"Marcusta","ill":"Marcukseen"},"hahmo":"marcus","huom":"o homem do topete; torcedor fanático do Atlético; o nome se declina como as palavras em -us: Marcuksen","aa":{"Marcus":"MAR-kus","Marcuksen":"MAR-kuk-sen","Marcukselle":"MAR-kuk-sel-le","Marcusta":"MAR-kus-ta"},"ipa":{"Marcus":"[ˈmɑrkus]","Marcuksen":"[ˈmɑrkuksen]","Marcukselle":"[ˈmɑrkukselːe]","Marcusta":"[ˈmɑrkustɑ]"},"o":"t17"},
{"id":"Morro do Cascalho","l":"paikka","pt":["Morro do Cascalho (morro inventado de Belo Horizonte)"],"t":{"gen":"Morro do Cascalhon","part":"Morro do Cascalhoa","ill":"Morro do Cascalhoon"},"paikka":"ulko","huom":"cascalho = cascalho, pedregulho: um nome bom para geólogos","aa":{"Morro do Cascalho":"MOR-ro do KAS-kal-jo","Morro do Cascalholla":"MOR-ro do KAS-kal-jol-la","Morro do Cascalholle":"MOR-ro do KAS-kal-jol-le"},"ipa":{"Morro do Cascalho":"[ˈmorːo do ˈkɑskɑljo]","Morro do Cascalholla":"[ˈmorːo do ˈkɑskɑljolːɑ]","Morro do Cascalholle":"[ˈmorːo do ˈkɑskɑljolːe]"},"o":"t17"},
{"id":"sil","l":"puhe","pt":["ele, ela tem (sil on)"],"kirja":"hänellä","o":"t17"},
{"id":"tuntua","l":"verbi","pt":["parecer, sentir-se"],"t":{"tyyppi":1,"p1s":"tunnun","p3s":"tuntuu","p3p":"tuntuvat","i3s":"tuntui"},"huom":"Hän tuntuu mukavalta. = ele parece simpático (-lta)","o":"t17"},
{"id":"kuulostaa","l":"verbi","pt":["soar, parecer (ao ouvir)"],"t":{"tyyppi":1,"p1s":"kuulostan","p3s":"kuulostaa","p3p":"kuulostavat","i3s":"kuulosti"},"huom":"Kuulostaa hyvältä. = parece bom","o":"t17"},
{"id":"välittää","l":"verbi","pt":["importar-se, preocupar-se","transmitir"],"t":{"tyyppi":1,"p1s":"välitän","p3s":"välittää","p3p":"välittävät","i3s":"välitti"},"huom":"Älä välitä! = não se preocupe!","o":"t17"},
{"id":"miettiä","l":"verbi","pt":["pensar, refletir"],"t":{"tyyppi":1,"p1s":"mietin","p3s":"miettii","p3p":"miettivät","i3s":"mietti"},"o":"t17"},
{"id":"kaveri","l":"substantiivi","pt":["amigo, colega"],"t":{"gen":"kaverin","part":"kaveria","ill":"kaveriin","mpart":"kavereita"},"paikka":"ulko","huom":"mais informal que ystävä","o":"t17"},
{"id":"juttu","l":"substantiivi","pt":["coisa, assunto, história"],"t":{"gen":"jutun","part":"juttua","ill":"juttuun","mpart":"juttuja"},"paikka":"sisa","huom":"Hyvä juttu! = que bom!","o":"t17"},
{"id":"kaula","l":"substantiivi","pt":["pescoço"],"t":{"gen":"kaulan","part":"kaulaa","ill":"kaulaan","mpart":"kauloja"},"paikka":"sisa","o":"t17"},
{"id":"hartia","l":"substantiivi","pt":["ombro (quase sempre no plural: hartiat)"],"t":{"gen":"hartian","part":"hartiaa","ill":"hartiaan","mpart":"hartioita"},"paikka":"sisa","huom":"leveät hartiat = ombros largos","o":"t17"},
{"id":"paksu","l":"adjektiivi","pt":["grosso, grossa"],"t":{"gen":"paksun","part":"paksua","ill":"paksuun","mpart":"paksuja"},"vert":["paksumpi","paksuin"],"o":"t17"},
{"id":"leveä","l":"adjektiivi","pt":["largo, larga"],"t":{"gen":"leveän","part":"leveää","ill":"leveään","mpart":"leveitä"},"vert":["leveämpi","levein"],"o":"t17"},
]);
