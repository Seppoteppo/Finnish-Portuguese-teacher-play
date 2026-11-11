/* Tottakai, leksikko: oppituntien 3–5 pelien (assets/pelit.js) sanat, joita oppitunnit eivät opeta. Ne ovat pelin
   valmiita ilmauksia (kassan repliikit Kassapaniikissa, itsepalvelukassan kyltti): oppija vain tunnistaa ne, ja peli
   näyttää ne ”Frases do caixa” -laatikossa. Ei o-kenttää: sanat eivät tule oppituntien sanastoon eikä visaan.
   Sopimus: tottakai/sanasto/README.md. Yksi tietue riviä kohden, tiukka JSON. */
Sanasto.lisaa('pelit', [
{"id":"bonuskortti","l":"substantiivi","pt":["cartão de fidelidade"],"t":{"gen":"bonuskortin","part":"bonuskorttia","ill":"bonuskorttiin","mpart":"bonuskortteja"},"paikka":"sisa","yhd":["bonus","kortti"],"huom":"Löytyykö bonuskorttia? = tem cartão?"},
{"id":"kuitti","l":"substantiivi","pt":["recibo, nota"],"t":{"gen":"kuitin","part":"kuittia","ill":"kuittiin","mpart":"kuitteja"},"paikka":"sisa"},
{"id":"käyttö","l":"substantiivi","pt":["uso"],"t":{"gen":"käytön","part":"käyttöä","ill":"käyttöön","mpart":"käyttöjä"},"paikka":"sisa","huom":"ei käytössä = fora de serviço (placa)"},
{"id":"löytyä","l":"verbi","pt":["haver, ser encontrado"],"t":{"tyyppi":1,"p1s":"löydyn","p3s":"löytyy","p3p":"löytyvät","i3s":"löytyi"},"huom":"Löytyykö…? = tem…? (pergunta educada da loja)"},
{"id":"punnita","l":"verbi","pt":["pesar (na balança)"],"t":{"tyyppi":5,"p1s":"punnitsen","p3s":"punnitsee","p3p":"punnitsevat","i3s":"punnitsi"}},
{"id":"sulkeutua","l":"verbi","pt":["fechar-se, fechar"],"t":{"tyyppi":1,"p1s":"sulkeudun","p3s":"sulkeutuu","p3p":"sulkeutuvat","i3s":"sulkeutui"}},
{"id":"laittaa","l":"verbi","pt":["pôr, colocar"],"t":{"tyyppi":1,"p1s":"laitan","p3s":"laittaa","p3p":"laittavat","i3s":"laittoi"}},
{"id":"uudestaan","l":"taipumaton","pt":["de novo, outra vez"]},
{"id":"tarviitko","l":"puhe","pt":["você precisa?"],"kirja":"tarvitsetko"},
{"id":"lämmittää","l":"verbi","pt":["esquentar, aquecer"],"t":{"tyyppi":1,"p1s":"lämmitän","p3s":"lämmittää","p3p":"lämmittävät","i3s":"lämmitti","pass":"lämmitetään"},"huom":"Lämmitetäänkö? = quer que esquente? (passivo, pergunta do caixa)"},
{"id":"syöks","l":"puhe","pt":["você come?"],"kirja":"syötkö"},
{"id":"otaks","l":"puhe","pt":["você pega?, você leva?"],"kirja":"otatko"},
{"id":"onks","l":"puhe","pt":["tem?, é?"],"kirja":"onko"},
{"id":"bonarii","l":"puhe","pt":["cartão de fidelidade"],"kirja":"bonuskorttia"},
{"id":"tarviiks","l":"puhe","pt":["você precisa?"],"kirja":"tarvitsetko"},
{"id":"kassii","l":"puhe","pt":["sacola"],"kirja":"kassia"},
{"id":"kuittii","l":"puhe","pt":["recibo"],"kirja":"kuittia"},
{"id":"lämmitetäänks","l":"puhe","pt":["quer que esquente?"],"kirja":"lämmitetäänkö"},
{"id":"mitäs","l":"puhe","pt":["o que (vai ser)?"],"kirja":"mitä"},
{"id":"pussii","l":"puhe","pt":["saquinho"],"kirja":"pussia"},
]);
