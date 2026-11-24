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
{"id":"juhlia","l":"verbi","pt":["festejar, comemorar"],"t":{"tyyppi":1,"p1s":"juhlin","p3s":"juhlii","p3p":"juhlivat","i3s":"juhli","pass":"juhlitaan"},"huom":"juhlia joulua = festejar o Natal","o":"t16"},
{"id":"huuliharppu","l":"substantiivi","pt":["gaita de boca"],"t":{"gen":"huuliharpun","part":"huuliharppua","ill":"huuliharppuun","mpart":"huuliharppuja"},"paikka":"sisa","yhd":["huuli","harppu"],"huom":"palavra por palavra: “harpa de lábio”; soittaa huuliharppua = tocar gaita","piilota":true,"o":"t16"},
{"id":"muusikko","l":"substantiivi","pt":["músico, musicista"],"t":{"gen":"muusikon","part":"muusikkoa","ill":"muusikkoon","mpart":"muusikkoja"},"paikka":"ulko","o":"t16"},
{"id":"taloustieteilijä","l":"substantiivi","pt":["economista"],"t":{"gen":"taloustieteilijän","part":"taloustieteilijää","ill":"taloustieteilijään","mpart":"taloustieteilijöitä"},"paikka":"ulko","yhd":["talous","tieteilijä"],"o":"t16"},
{"id":"laulaa","l":"verbi","pt":["cantar"],"t":{"tyyppi":1,"p1s":"laulan","p3s":"laulaa","p3p":"laulavat","i3s":"lauloi","pass":"lauletaan"},"o":"t16"},
{"id":"muuttua","l":"verbi","pt":["virar, transformar-se, mudar"],"t":{"tyyppi":1,"p1s":"muutun","p3s":"muuttuu","p3p":"muuttuvat","i3s":"muuttui","pass":"muututaan"},"huom":"muuttua + -ksi: Juhla muuttuu hiljaiseksi. = a festa fica quieta","o":"t16"},
{"id":"rohkea","l":"adjektiivi","pt":["corajoso, corajosa"],"t":{"gen":"rohkean","part":"rohkeaa","ill":"rohkeaan","mpart":"rohkeita"},"vert":["rohkeampi","rohkein"],"o":"t16"},
{"id":"hiljainen","l":"adjektiivi","pt":["quieto, quieta, silencioso, silenciosa"],"t":{"gen":"hiljaisen","part":"hiljaista","ill":"hiljaiseen","mpart":"hiljaisia"},"vert":["hiljaisempi","hiljaisin"],"o":"t16"},
{"id":"hölmö","l":"adjektiivi","pt":["bobo, boba"],"t":{"gen":"hölmön","part":"hölmöä","ill":"hölmöön","mpart":"hölmöjä"},"vert":["hölmömpi","hölmöin"],"o":"t16"},
{"id":"nuori","l":"adjektiivi","pt":["jovem"],"t":{"gen":"nuoren","part":"nuorta","ill":"nuoreen","mpart":"nuoria"},"vert":["nuorempi","nuorin"],"huom":"nuorena = quando jovem (essivo)","o":"t16"},
{"id":"hullu","l":"adjektiivi","pt":["louco, louca"],"t":{"gen":"hullun","part":"hullua","ill":"hulluun","mpart":"hulluja"},"vert":["hullumpi","hulluin"],"huom":"tulla hulluksi = ficar louco","o":"t16"},
{"id":"liikaa","l":"taipumaton","pt":["demais"],"huom":"juoda liikaa = beber demais","o":"t16"},
{"id":"asti","l":"taipumaton","pt":["até"],"huom":"vem depois do ilativo: aamuun asti = até de manhã","o":"t16"},
{"id":"vastaaja","l":"substantiivi","pt":["caixa postal (do celular)"],"t":{"gen":"vastaajan","part":"vastaajaa","ill":"vastaajaan","mpart":"vastaajia"},"paikka":"sisa","huom":"de vastata (responder): “o que responde”","o":"t16"},
{"id":"kelkka","l":"substantiivi","pt":["trenó"],"t":{"gen":"kelkan","part":"kelkkaa","ill":"kelkkaan","mpart":"kelkkoja"},"paikka":"ulko","o":"t16"},
{"id":"elämä","l":"substantiivi","pt":["vida"],"t":{"gen":"elämän","part":"elämää","ill":"elämään","mpart":"elämiä"},"paikka":"sisa","huom":"Elämä on ihanaa! = a vida é maravilhosa!","o":"t16"},
{"id":"yhä","l":"taipumaton","pt":["ainda","cada vez mais (yhä + comparativo)"],"o":"t16"},
{"id":"loppu","l":"substantiivi","pt":["fim, final"],"t":{"gen":"lopun","part":"loppua","ill":"loppuun","mpart":"loppuja"},"paikka":"sisa","oletus":["lopun","loput"],"huom":"Juhla on lopussa. = a festa está no fim","o":"t16"},
{"id":"marinoitu","l":"adjektiivi","pt":["marinado, marinada"],"t":{"gen":"marinoidun","part":"marinoitua","ill":"marinoituun","mpart":"marinoituja"},"vert":false,"huom":"como em português: marinoitu liha = carne marinada","o":"t16"},
{"id":"tehtävä","l":"substantiivi","pt":["tarefa","exercício"],"t":{"gen":"tehtävän","part":"tehtävää","ill":"tehtävään","mpart":"tehtäviä"},"paikka":"sisa","o":"t16"},
{"id":"tehtävälista","l":"substantiivi","pt":["lista de tarefas"],"t":{"gen":"tehtävälistan","part":"tehtävälistaa","ill":"tehtävälistaan","mpart":"tehtävälistoja"},"paikka":"sisa","yhd":["tehtävä","lista"],"o":"t16"},
{"id":"harjoitella","l":"verbi","pt":["treinar, praticar"],"t":{"tyyppi":3,"p1s":"harjoittelen","p3s":"harjoittelee","p3p":"harjoittelevat","i3s":"harjoitteli"},"huom":"Anderson harjoitteli sitä koko viikon. = o Anderson treinou isso a semana toda","o":"t16"},
{"id":"nukkuminen","l":"substantiivi","pt":["o dormir, o sono"],"t":{"gen":"nukkumisen","part":"nukkumista","ill":"nukkumiseen","mpart":"nukkumisia"},"paikka":"sisa","huom":"de nukkua; pitää nukkumisesta = gostar de dormir","o":"t16"},
{"id":"PR-sihteeri","l":"substantiivi","pt":["secretário de RP, secretária de RP"],"t":{"gen":"PR-sihteerin","part":"PR-sihteeriä","ill":"PR-sihteeriin","mpart":"PR-sihteereitä"},"paikka":"ulko","yhd":["PR","sihteeri"],"huom":"PR se lê pee-är; PR-sihteerinä = como secretária de RP (essivo)","aa":{"PR-sihteeri":"PEE-är-SIH-tee-ri","PR-sihteerinä":"PEE-är-SIH-tee-ri-nä"},"ipa":{"PR-sihteeri":"[ˈpeː ˈær ˈsihteːri]","PR-sihteerinä":"[ˈpeː ˈær ˈsihteːrinæ]"},"o":"t16"},
{"id":"väsyä","l":"verbi","pt":["cansar, ficar cansado"],"t":{"tyyppi":1,"p1s":"väsyn","p3s":"väsyy","p3p":"väsyvät","i3s":"väsyi"},"huom":"Jay väsyi. = Jay tuli väsyneeksi. = o Jay ficou cansado","o":"t16"},
{"id":"joulujuhla","l":"substantiivi","pt":["festa de Natal"],"t":{"gen":"joulujuhlan","part":"joulujuhlaa","ill":"joulujuhlaan","mpart":"joulujuhlia"},"paikka":"sisa","yhd":["joulu","juhla"],"o":"t16"},
{"id":"aloittaa","l":"verbi","pt":["começar (algo)"],"t":{"tyyppi":1,"p1s":"aloitan","p3s":"aloittaa","p3p":"aloittavat","i3s":"aloitti","pass":"aloitetaan"},"huom":"aloittaa työt = começar a trabalhar; Aloitetaan kahvilla! = vamos começar com café!","o":"t16"},
{"id":"kääntää","l":"verbi","pt":["traduzir","virar"],"t":{"tyyppi":1,"p1s":"käännän","p3s":"kääntää","p3p":"kääntävät","i3s":"käänsi"},"huom":"kääntää suomeksi = traduzir para o finlandês; kääntyä = virar-se (lição 14)","o":"t16"},
]);
