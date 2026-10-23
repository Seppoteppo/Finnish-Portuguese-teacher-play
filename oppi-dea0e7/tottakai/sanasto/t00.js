/* Tottakai, leksikko: oppitunti 0 (prólogo; sopimus tottakai/sanasto/README.md, käsitteet ja vakiomäärä kasitteet.js).
   Oppitunnin 0 sanat: selviytymisfraasit, ohjeiden käskymuodot ja ääntämisen minimiparit. Osa tietueista siirrettiin
   17.10.2026 tiedostoista t01.js ja t02.js, koska oppitunti 0 esittelee ne ensin (tarkistus O2). Oppitunnin 0
   esimerkkisanat (kivi, kana, vesi …) ovat gramatica.js:ssä. saada siirrettiin gramatica.js:stä 23.10.2026
   (AVOIMET AV-052): oppitunnin 0 ääntämistaulukko käyttää muotoa saa (pari: sää), oppitunti 3 muotoa Saisinko.
   Yksi tietue riviä kohden, tiukka JSON. */
Sanasto.lisaa('t00', [
{"id":"moi","l":"taipumaton","pt":["oi","tchau"],"huom":"o cumprimento mais comum","o":"t00"},
{"id":"kiitos","l":"taipumaton","pt":["obrigado, obrigada"],"huom":"igual para homem e mulher","o":"t00"},
{"id":"anteeksi","l":"taipumaton","pt":["desculpa","com licença"],"o":"t00"},
{"id":"kyllä","l":"taipumaton","pt":["sim"],"huom":"a resposta mais comum é repetir o verbo: Olen.","o":"t00"},
{"id":"ei","l":"kielto","pt":["não"],"t":{"1s":"en","2s":"et","3s":"ei","1p":"emme","2p":"ette","3p":"eivät","imper.2s":"älä","imper.2p":"älkää"},"m":{"eipä":"klit.pa"},"huom":"responder só ei soa seco; repita o verbo: En ole.","o":"t00"},
{"id":"ymmärtää","l":"verbi","pt":["entender, compreender"],"t":{"tyyppi":1,"p1s":"ymmärrän","p3s":"ymmärtää","p3p":"ymmärtävät","i3s":"ymmärsi","pass":"ymmärretään"},"o":"t00"},
{"id":"puhua","l":"verbi","pt":["falar"],"t":{"tyyppi":1,"p1s":"puhun","p3s":"puhuu","p3p":"puhuvat","i3s":"puhui","pass":"puhutaan"},"m":{"puhuin":"imperf.1s","puhunut":"part.yks","puhuneet":"part.mon","puhuisin":"kond.1s","puhukaa":"imper.2p","puhuko":"imper.neg.2p"},"huom":"a língua vai no partitivo: puhun suomea","o":"t00"},
{"id":"englanti","l":"substantiivi","pt":["inglês, a língua inglesa"],"t":{"gen":"englannin","part":"englantia","ill":"englantiin","mpart":null},"paikka":"kieli","huom":"o país, com maiúscula, é Englanti","o":"t00"},
{"id":"suomi","l":"substantiivi","pt":["finlandês, a língua finlandesa"],"t":{"gen":"suomen","part":"suomea","ill":"suomeen","mpart":null},"paikka":"kieli","huom":"a língua com minúscula: suomi; o país com maiúscula: Suomi","o":"t00"},
{"id":"vähän","l":"taipumaton","pt":["um pouco","pouco"],"o":"t00"},
{"id":"hitaasti","l":"taipumaton","pt":["devagar"],"m":{"hitaammin":"komp"},"o":"t00"},
{"id":"kuunnella","l":"verbi","pt":["escutar, ouvir"],"t":{"tyyppi":3,"p1s":"kuuntelen","p3s":"kuuntelee","p3p":"kuuntelevat","i3s":"kuunteli"},"o":"t00"},
{"id":"toistaa","l":"verbi","pt":["repetir"],"t":{"tyyppi":1,"p1s":"toistan","p3s":"toistaa","p3p":"toistavat","i3s":"toisti"},"huom":"Toista! = repita! (instrução dos exercícios)","o":"t00"},
{"id":"odottaa","l":"verbi","pt":["esperar"],"t":{"tyyppi":1,"p1s":"odotan","p3s":"odottaa","p3p":"odottavat","i3s":"odotti"},"o":"t00"},
{"id":"vielä","l":"taipumaton","pt":["ainda"],"o":"t00"},
{"id":"tuli","l":"substantiivi","pt":["fogo"],"t":{"gen":"tulen","part":"tulta","ill":"tuleen","mpart":"tulia"},"paikka":"sisa","o":"t00"},
{"id":"tuuli","l":"substantiivi","pt":["vento"],"t":{"gen":"tuulen","part":"tuulta","ill":"tuuleen","mpart":"tuulia"},"paikka":"sisa","o":"t00"},
{"id":"tulli","l":"substantiivi","pt":["alfândega"],"t":{"gen":"tullin","part":"tullia","ill":"tulliin","mpart":"tulleja"},"paikka":"sisa","o":"t00"},
{"id":"kyy","l":"substantiivi","pt":["víbora"],"t":{"gen":"kyyn","part":"kyytä","ill":"kyyhyn","mpart":"kyitä"},"paikka":"ulko","huom":"a única cobra venenosa da Finlândia","o":"t00"},
{"id":"työ","l":"substantiivi","pt":["trabalho"],"t":{"gen":"työn","part":"työtä","ill":"työhön","mpart":"töitä"},"paikka":{"missa":"töissä","mista":"töistä","mihin":"töihin"},"o":"t00"},
{"id":"sää","l":"substantiivi","pt":["tempo, clima"],"t":{"gen":"sään","part":"säätä","ill":"säähän","mpart":"säitä"},"paikka":"sisa","o":"t00"},
{"id":"pipo","l":"substantiivi","pt":["gorro de lã"],"t":{"gen":"pipon","part":"pipoa","ill":"pipoon","mpart":"pipoja"},"paikka":"sisa","huom":"todo finlandês tem um (ou cinco)","o":"t00"},
{"id":"saada","l":"verbi","pt":["receber, ganhar","conseguir","poder, ter permissão"],"t":{"tyyppi":2,"p1s":"saan","p3s":"saa","p3p":"saavat","i3s":"sai","pass":"saadaan"},"m":{"saisin":"kond.1s"},"o":"t00"}
]);
