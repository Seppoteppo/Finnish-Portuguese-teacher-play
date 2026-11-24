/* Tottakai: oppitunnin t19 sanat (uusi vuosi Copacabanalla ja jäähyväiset Rion lentokentällä, perfekti, monikon
   paikallissijat). Sopimus: tottakai/sanasto/README.md. Perfektin partisiipit (part.yks, part.mon) ja monikon sijat (mon.*)
   tekee taivutuskone.
   taitaa siirretty t20.js:stä 23.10.2026 (o = t19); taitaa ja kyse esiintyvät t19:n puhetehtävän malleissa (”Siellä taitaa
   olla kylmää”, ”kyse ei ole rahasta”), joten o = t19 pitää; ne eivät ole t19:n sanasto[]-listassa (U5-raja).
   Materiaalivaihe 8.11.2026 (lukitut dialogit t19-a-1, t19-b-1): uusi aalto (postikortti, kulttuuri); poistettu
   vuolukivitakka ja pehmeä (vain vanhan Ouro Preto -tarinan sanoja, ei muuta käyttöä). Ouro Preto ja Inhotim jäävät:
   k04 käyttää niitä (k04:n materiaalivaihe päättää); vuolukivi jää saaren panela-pedra-esineelle (assets/saari.js). */
Sanasto.lisaa('t19', [
{"id":"Ouro Preto","l":"paikka","pt":["Ouro Preto, a cidade histórica de Minas Gerais"],"t":{"gen":"Ouro Preton","part":"Ouro Pretoa","ill":"Ouro Pretoon"},"paikka":"sisa","o":"t19"},
{"id":"Inhotim","l":"paikka","pt":["Inhotim, o museu e jardim de arte de Brumadinho"],"t":{"gen":"Inhotimin","part":"Inhotimia","ill":"Inhotimiin"},"paikka":"sisa","o":"t19"},
{"id":"kaupunki","l":"substantiivi","pt":["cidade"],"t":{"gen":"kaupungin","part":"kaupunkia","ill":"kaupunkiin","mpart":"kaupunkeja"},"paikka":"sisa","o":"t19"},
{"id":"vuolukivi","l":"substantiivi","pt":["pedra-sabão"],"t":{"gen":"vuolukiven","part":"vuolukiveä","ill":"vuolukiveen","mpart":"vuolukiviä"},"paikka":"sisa","yhd":["vuolu","kivi"],"huom":"vuolla = entalhar com faca: a pedra que se entalha","o":"t19"},
{"id":"postikortti","l":"substantiivi","pt":["cartão-postal"],"t":{"gen":"postikortin","part":"postikorttia","ill":"postikorttiin","mpart":"postikortteja"},"paikka":"sisa","yhd":["posti","kortti"],"o":"t19"},
{"id":"bingo","l":"substantiivi","pt":["bingo"],"t":{"gen":"bingon","part":"bingoa","ill":"bingoon","mpart":"bingoja"},"paikka":"sisa","o":"t19"},
{"id":"ootsä","l":"puhe","pt":["você é?, você está?, você já…?"],"kirja":"oletko sinä","o":"t19"},
{"id":"käyny","l":"puhe","pt":["ido, estado (en oo käyny = não fui)"],"kirja":"käynyt","o":"t19"},
{"id":"ollu","l":"puhe","pt":["sido, estado (mä oon ollu = eu estive)"],"kirja":"ollut","o":"t19"},
{"id":"kai","l":"taipumaton","pt":["provavelmente, acho que"],"huom":"Olet kai nähnyt kirkon? = você provavelmente já viu a igreja?","o":"t19"},
{"id":"aikoa","l":"verbi","pt":["pretender, planejar"],"t":{"tyyppi":1,"p1s":"aion","p3s":"aikoo","p3p":"aikovat","i3s":"aikoi"},"o":"t19"},
{"id":"saattaa","l":"verbi","pt":["poder (talvez)","acompanhar"],"t":{"tyyppi":1,"p1s":"saatan","p3s":"saattaa","p3p":"saattavat","i3s":"saattoi"},"huom":"Se saattaa olla… = pode ser…","o":"t19"},
{"id":"kyse","l":"taipumaton","pt":["questão (Mistä on kyse? = do que se trata?)"],"o":"t19"},
{"id":"no","l":"taipumaton","pt":["bem, então (no começo da frase)"],"huom":"No niin! = pronto!, então!","o":"t19"},
{"id":"taitaa","l":"verbi","pt":["parecer que, provavelmente (taitaa sataa)","saber fazer"],"t":{"tyyppi":1,"p1s":"taidan","p3s":"taitaa","p3p":"taitavat","i3s":"taisi"},"huom":"Taitaa sataa. = parece que vai chover","o":"t19"},
{"id":"aalto","l":"substantiivi","pt":["onda"],"t":{"gen":"aallon","part":"aaltoa","ill":"aaltoon","mpart":"aaltoja"},"paikka":"sisa","o":"t19"},
{"id":"ihana","l":"adjektiivi","pt":["lindo, linda, maravilhoso, maravilhosa"],"t":{"gen":"ihanan","part":"ihanaa","ill":"ihanaan","mpart":"ihania"},"vert":["ihanampi","ihanin"],"o":"t19"},
]);
