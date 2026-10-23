/* Tottakai: oppitunnin t12 sanat (Savassi: vaatteet helteeseen; Feira Hippie: Maian pöytä, keramiikka, hinnat realeina).
   Sopimus: tottakai/sanasto/README.md. Objekti (-n, -t, partitiivi) ja adjektiivin kongruenssi tulevat taivutuskoneelta
   (gen, part, ines, mon.nom, mon.part); m-kenttää ei tarvita. housu ja shortsi: käytetään aina monikossa (housut, shortsit),
   kuten aurinkolasi (t09) ja messu (t06): tietueen tunniste on yksikkö, merkitys kertoo monikon. real (valuutta) on t11:n
   tietue; tän on Na rua -nurkan puhekielinen tämän. koko:mitta = koko (tamanho); pelkkä koko on t13:n taipumaton
   ”todo, inteiro” (koko perhe), joten perusmuoto ”koko” merkitään sivulla data-l="koko:mitta".
   lahja siirretty t15.js:stä 23.10.2026 (o = t12): ensimmäinen käyttö t12:n käännöstehtävässä ”en osta lahjoja”, portti O2. */
Sanasto.lisaa('t12', [
{"id":"Savassi","l":"paikka","pt":["Savassi, bairro de lojas e restaurantes de Belo Horizonte"],"t":{"gen":"Savassin","part":"Savassia","ill":"Savassiin"},"paikka":"sisa","o":"t12"},
{"id":"vaate","l":"substantiivi","pt":["roupa, peça de roupa"],"t":{"gen":"vaatteen","part":"vaatetta","ill":"vaatteeseen","mpart":"vaatteita"},"paikka":"sisa","huom":"vaatteet = as roupas","o":"t12"},
{"id":"housu","l":"substantiivi","pt":["calça (sempre no plural: housut)"],"t":{"gen":"housun","part":"housua","ill":"housuun","mpart":"housuja"},"paikka":"sisa","huom":"uma calça = housut; pitkät housut = calça comprida","o":"t12"},
{"id":"shortsi","l":"substantiivi","pt":["shorts, bermuda (sempre no plural: shortsit)"],"t":{"gen":"shortsin","part":"shortsia","ill":"shortsiin","mpart":"shortseja"},"paikka":"sisa","huom":"um shorts = shortsit","o":"t12"},
{"id":"mekko","l":"substantiivi","pt":["vestido"],"t":{"gen":"mekon","part":"mekkoa","ill":"mekkoon","mpart":"mekkoja"},"paikka":"sisa","o":"t12"},
{"id":"hame","l":"substantiivi","pt":["saia"],"t":{"gen":"hameen","part":"hametta","ill":"hameeseen","mpart":"hameita"},"paikka":"sisa","o":"t12"},
{"id":"lippis","l":"substantiivi","pt":["boné"],"t":{"gen":"lippiksen","part":"lippistä","ill":"lippikseen","mpart":"lippiksiä"},"paikka":"sisa","o":"t12"},
{"id":"hattu","l":"substantiivi","pt":["chapéu"],"t":{"gen":"hatun","part":"hattua","ill":"hattuun","mpart":"hattuja"},"paikka":"sisa","o":"t12"},
{"id":"koko:mitta","l":"substantiivi","pt":["tamanho"],"t":{"gen":"koon","part":"kokoa","ill":"kokoon","mpart":"kokoja"},"paikka":"sisa","huom":"Mikä koko? = qual tamanho?","o":"t12"},
{"id":"sovituskoppi","l":"substantiivi","pt":["provador (de loja)"],"t":{"gen":"sovituskopin","part":"sovituskoppia","ill":"sovituskoppiin","mpart":"sovituskoppeja"},"paikka":"sisa","yhd":["sovitus","koppi"],"o":"t12"},
{"id":"peili","l":"substantiivi","pt":["espelho"],"t":{"gen":"peilin","part":"peiliä","ill":"peiliin","mpart":"peilejä"},"paikka":"sisa","o":"t12"},
{"id":"sovittaa","l":"verbi","pt":["experimentar (roupa)"],"t":{"tyyppi":1,"p1s":"sovitan","p3s":"sovittaa","p3p":"sovittavat","i3s":"sovitti"},"huom":"quase sempre com partitivo: sovitan paitaa = estou experimentando a camisa","o":"t12"},
{"id":"käyttää","l":"verbi","pt":["usar"],"t":{"tyyppi":1,"p1s":"käytän","p3s":"käyttää","p3p":"käyttävät","i3s":"käytti"},"o":"t12"},
{"id":"katsella","l":"verbi","pt":["dar uma olhada, ficar olhando"],"t":{"tyyppi":3,"p1s":"katselen","p3s":"katselee","p3p":"katselevat","i3s":"katseli"},"huom":"Katselen vain, kiitos. = só estou olhando, obrigado","o":"t12"},
{"id":"kuppi","l":"substantiivi","pt":["xícara"],"t":{"gen":"kupin","part":"kuppia","ill":"kuppiin","mpart":"kuppeja"},"paikka":"sisa","o":"t12"},
{"id":"kulho","l":"substantiivi","pt":["tigela"],"t":{"gen":"kulhon","part":"kulhoa","ill":"kulhoon","mpart":"kulhoja"},"paikka":"sisa","o":"t12"},
{"id":"maljakko","l":"substantiivi","pt":["vaso (de flores)"],"t":{"gen":"maljakon","part":"maljakkoa","ill":"maljakkoon","mpart":"maljakoita"},"paikka":"sisa","o":"t12"},
{"id":"tyyny","l":"substantiivi","pt":["travesseiro, almofada"],"t":{"gen":"tyynyn","part":"tyynyä","ill":"tyynyyn","mpart":"tyynyjä"},"paikka":"sisa","o":"t12"},
{"id":"kolmekymmentäkaksi","l":"numeraali","pt":["trinta e dois"],"t":{"gen":"kolmenkymmenenkahden","part":"kolmeakymmentäkahta","jarj":"kolmaskymmenestoinen"},"yhd":["kolme","kymmentä","kaksi"],"o":"t12"},
{"id":"tän","l":"puhe","pt":["este, esta (como objeto)"],"kirja":"tämän","o":"t12"},
{"id":"päälle","l":"taipumaton","pt":["em cima de, sobre (para onde?)"],"huom":"vem depois do genitivo: sen päälle = em cima disso","o":"t12"},
{"id":"panna","l":"verbi","pt":["pôr, colocar"],"t":{"tyyppi":3,"p1s":"panen","p3s":"panee","p3p":"panevat","i3s":"pani"},"huom":"Pane päälle! = ponha (a roupa)!","o":"t12"},
{"id":"paha","l":"adjektiivi","pt":["mau, ruim"],"t":{"gen":"pahan","part":"pahaa","ill":"pahaan","mpart":"pahoja"},"vert":["pahempi","pahin"],"huom":"Ei paha! = nada mal!","o":"t12"},
{"id":"juuri","l":"taipumaton","pt":["exatamente, justamente","acabou de"],"o":"t12"},
{"id":"vaikka","l":"taipumaton","pt":["mesmo que, embora","por exemplo"],"o":"t12"},
{"id":"siksi","l":"taipumaton","pt":["por isso"],"o":"t12"},
{"id":"kuten","l":"taipumaton","pt":["como (por exemplo)"],"o":"t12"},
{"id":"haalari","l":"substantiivi","pt":["macacão (sempre no plural: haalarit)"],"t":{"gen":"haalarin","part":"haalaria","ill":"haalariin","mpart":"haalareita"},"paikka":"sisa","huom":"um macacão = haalarit","o":"t12"},
{"id":"kolikko","l":"substantiivi","pt":["moeda"],"t":{"gen":"kolikon","part":"kolikkoa","ill":"kolikkoon","mpart":"kolikoita"},"paikka":"sisa","o":"t12"},
{"id":"outo","l":"adjektiivi","pt":["estranho, estranha"],"t":{"gen":"oudon","part":"outoa","ill":"outoon","mpart":"outoja"},"vert":["oudompi","oudoin"],"o":"t12"},
{"id":"lahja","l":"substantiivi","pt":["presente"],"t":{"gen":"lahjan","part":"lahjaa","ill":"lahjaan","mpart":"lahjoja"},"paikka":"sisa","o":"t12"},
]);
