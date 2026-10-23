/* Tottakai: oppitunnin t16 sanat (katujuhlat Maian vanhempien kadulla la 26.12.2026: Walkerin huuliharppu, Malun rumpu,
   Jayn vastaaja, keskiyön jälkeen Jay tulee rohkeaksi ja katoaa). Sopimus: tottakai/sanasto/README.md. Yksi tietue riviä
   kohden, tiukka JSON.
   Jo leksikossa ja käytetään sellaisenaan: lapsi, isä, vanhempi, lääkäri (t05), opettaja, geologi, kaunis, hauska, Suomi,
   suomi, portugali, kuin, todella (t01), kuljettaja, sairaanhoitaja, kokki (t07), joulu, aamu, ilta, yö, tie, pöytä,
   valkoinen, punainen, sana, parempi, paras, kerta, kuulla, nähdä, lähteä (gramatica), iloinen, väsynyt, sairas, olut
   (treeni), keskiyö, jouluaatto, hakea (t15), kulma, katu, Malu (t14), soittaa (t01: ligar; #2 tocar), viesti, puhelin,
   maanantai (t02), lauantai (t03), kesä, talvi, lumi, sataa (t09), naapuri, viime (t13), enää (t11), Uuno, Eenok (k02),
   mökki (t06), muuttaa (t08), mikään (t02), ihana, ystävä (t15; ihana siirretty t15.js:ään 23.10.2026, portti O2).
   Essiivi (lapsena, jouluna, muusikkona) ja translatiivi (iloiseksi, suomeksi) tulevat taivutuskoneelta (solut ess ja
   transl; opetusjärjestys kasitteet.js OPETUS: t16); m-kenttää ei tarvita. Passiivi (tanssitaan, mennään: Na rua) verbin
   pass-kentästä. Puhekieli vain Na rua -laatikossa (me mennään, me ollaan: mennä- ja olla-tietueiden pass). */
Sanasto.lisaa('t16', [
{"id":"juhla","l":"substantiivi","pt":["festa"],"t":{"gen":"juhlan","part":"juhlaa","ill":"juhlaan","mpart":"juhlia"},"paikka":"sisa","huom":"muitas vezes no plural: Kadulla on juhlat. = tem festa na rua","o":"t16"},
{"id":"juhlia","l":"verbi","pt":["festejar, comemorar"],"t":{"tyyppi":1,"p1s":"juhlin","p3s":"juhlii","p3p":"juhlivat","i3s":"juhli","pass":"juhlitaan"},"huom":"juhlia joulua = festejar o Natal","o":"t16"},
{"id":"katujuhla","l":"substantiivi","pt":["festa de rua"],"t":{"gen":"katujuhlan","part":"katujuhlaa","ill":"katujuhlaan","mpart":"katujuhlia"},"paikka":"sisa","yhd":["katu","juhla"],"o":"t16"},
{"id":"huuliharppu","l":"substantiivi","pt":["gaita de boca"],"t":{"gen":"huuliharpun","part":"huuliharppua","ill":"huuliharppuun","mpart":"huuliharppuja"},"paikka":"sisa","yhd":["huuli","harppu"],"huom":"palavra por palavra: “harpa de lábio”; soittaa huuliharppua = tocar gaita","o":"t16"},
{"id":"haitari","l":"substantiivi","pt":["acordeão, sanfona"],"t":{"gen":"haitarin","part":"haitaria","ill":"haitariin","mpart":"haitareita"},"paikka":"sisa","o":"t16"},
{"id":"rumpu","l":"substantiivi","pt":["tambor"],"t":{"gen":"rummun","part":"rumpua","ill":"rumpuun","mpart":"rumpuja"},"paikka":"sisa","huom":"soittaa rumpua = tocar tambor","o":"t16"},
{"id":"muusikko","l":"substantiivi","pt":["músico, musicista"],"t":{"gen":"muusikon","part":"muusikkoa","ill":"muusikkoon","mpart":"muusikkoja"},"paikka":"ulko","o":"t16"},
{"id":"taloustieteilijä","l":"substantiivi","pt":["economista"],"t":{"gen":"taloustieteilijän","part":"taloustieteilijää","ill":"taloustieteilijään","mpart":"taloustieteilijöitä"},"paikka":"ulko","yhd":["talous","tieteilijä"],"o":"t16"},
{"id":"tanssia","l":"verbi","pt":["dançar"],"t":{"tyyppi":1,"p1s":"tanssin","p3s":"tanssii","p3p":"tanssivat","i3s":"tanssi","pass":"tanssitaan"},"huom":"tanssin = eu danço e também eu dancei: o contexto decide","o":"t16"},
{"id":"laulaa","l":"verbi","pt":["cantar"],"t":{"tyyppi":1,"p1s":"laulan","p3s":"laulaa","p3p":"laulavat","i3s":"lauloi","pass":"lauletaan"},"o":"t16"},
{"id":"muuttua","l":"verbi","pt":["virar, transformar-se, mudar"],"t":{"tyyppi":1,"p1s":"muutun","p3s":"muuttuu","p3p":"muuttuvat","i3s":"muuttui","pass":"muututaan"},"huom":"muuttua + -ksi: Juhla muuttuu hiljaiseksi. = a festa fica quieta","o":"t16"},
{"id":"vastata","l":"verbi","pt":["responder","atender (o telefone)"],"t":{"tyyppi":4,"p1s":"vastaan","p3s":"vastaa","p3p":"vastaavat","i3s":"vastasi","pass":"vastataan"},"huom":"vastata puhelimeen = atender o telefone","o":"t16"},
{"id":"rohkea","l":"adjektiivi","pt":["corajoso, corajosa"],"t":{"gen":"rohkean","part":"rohkeaa","ill":"rohkeaan","mpart":"rohkeita"},"vert":["rohkeampi","rohkein"],"o":"t16"},
{"id":"hiljainen","l":"adjektiivi","pt":["quieto, quieta, silencioso, silenciosa"],"t":{"gen":"hiljaisen","part":"hiljaista","ill":"hiljaiseen","mpart":"hiljaisia"},"vert":["hiljaisempi","hiljaisin"],"o":"t16"},
{"id":"hölmö","l":"adjektiivi","pt":["bobo, boba"],"t":{"gen":"hölmön","part":"hölmöä","ill":"hölmöön","mpart":"hölmöjä"},"vert":["hölmömpi","hölmöin"],"o":"t16"},
{"id":"nuori","l":"adjektiivi","pt":["jovem"],"t":{"gen":"nuoren","part":"nuorta","ill":"nuoreen","mpart":"nuoria"},"vert":["nuorempi","nuorin"],"huom":"nuorena = quando jovem (essivo)","o":"t16"},
{"id":"hullu","l":"adjektiivi","pt":["louco, louca"],"t":{"gen":"hullun","part":"hullua","ill":"hulluun","mpart":"hulluja"},"vert":["hullumpi","hulluin"],"huom":"tulla hulluksi = ficar louco","o":"t16"},
{"id":"humalassa","l":"taipumaton","pt":["bêbado, bêbada"],"huom":"olla humalassa = estar bêbado; humala = lúpulo e também embriaguez","o":"t16"},
{"id":"liikaa","l":"taipumaton","pt":["demais"],"huom":"juoda liikaa = beber demais","o":"t16"},
{"id":"poissa","l":"taipumaton","pt":["fora, ausente, sumido, sumida"],"huom":"Jay on poissa. = o Jay não está, sumiu","o":"t16"},
{"id":"kukko","l":"substantiivi","pt":["galo"],"t":{"gen":"kukon","part":"kukkoa","ill":"kukkoon","mpart":"kukkoja"},"paikka":"ulko","huom":"o Galo é o apelido do Atlético Mineiro","o":"t16"},
{"id":"herra","l":"substantiivi","pt":["senhor"],"t":{"gen":"herran","part":"herraa","ill":"herraan","mpart":"herroja"},"paikka":"ulko","o":"t16"},
{"id":"vastaaja","l":"substantiivi","pt":["caixa postal (do celular)"],"t":{"gen":"vastaajan","part":"vastaajaa","ill":"vastaajaan","mpart":"vastaajia"},"paikka":"sisa","huom":"de vastata (responder): “o que responde”","o":"t16"},
{"id":"ääniviesti","l":"substantiivi","pt":["mensagem de voz"],"t":{"gen":"ääniviestin","part":"ääniviestiä","ill":"ääniviestiin","mpart":"ääniviestejä"},"paikka":"sisa","yhd":["ääni","viesti"],"o":"t16"},
{"id":"jää","l":"substantiivi","pt":["gelo"],"t":{"gen":"jään","part":"jäätä","ill":"jäähän","mpart":"jäitä"},"paikka":"ulko","o":"t16"},
{"id":"kelkka","l":"substantiivi","pt":["trenó"],"t":{"gen":"kelkan","part":"kelkkaa","ill":"kelkkaan","mpart":"kelkkoja"},"paikka":"ulko","o":"t16"},
{"id":"elämä","l":"substantiivi","pt":["vida"],"t":{"gen":"elämän","part":"elämää","ill":"elämään","mpart":"elämiä"},"paikka":"sisa","huom":"Elämä on ihanaa! = a vida é maravilhosa!","o":"t16"},
{"id":"yhä","l":"taipumaton","pt":["ainda","cada vez mais (yhä + comparativo)"],"o":"t16"},
{"id":"loppu","l":"substantiivi","pt":["fim, final"],"t":{"gen":"lopun","part":"loppua","ill":"loppuun","mpart":"loppuja"},"paikka":"sisa","oletus":["lopun","loput"],"huom":"Juhla on lopussa. = a festa está no fim","o":"t16"},
{"id":"marinoitu","l":"adjektiivi","pt":["marinado, marinada"],"t":{"gen":"marinoidun","part":"marinoitua","ill":"marinoituun","mpart":"marinoituja"},"vert":false,"huom":"como em português: marinoitu liha = carne marinada","o":"t16"},
]);
