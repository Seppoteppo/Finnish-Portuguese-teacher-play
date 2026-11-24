/* Tottakai: loppukertauksen (k04, A primeira exposição da Maia) sanat. Sopimus: tottakai/sanasto/README.md.
   Kertaus ei opeta uutta: dialogit ja tehtävät käyttävät oppituntien 0–20 sanoja (niiden tietueet ovat niiden tiedostoissa).
   Tässä vain sanat, jotka kertaus itse tuo: kohtauksen avainsana näyttely (Maian ensimmäinen näyttely; ei korvattavissa
   opetetulla sanalla: messut on t06:n messuosasto, ei taiteilijan oma näyttely) ja pomon nimi Aikakoneen golem
   (assets/pomo.js; aikakone ja golem piilotettuina, kuten k02:n kaksipää ja k03:n kraken). Omistajan lukitut dialogit
   (8.11.2026) tuovat kaksi: kadun nimi Vaasankatu (k04-a-1: ”Vaasankadulla on tänään…”) ja aikamuoto (k04-b-3:
   ”osaatko jo aikamuotoja?”, pomon aihe; piilotettuna kuten k03:n paikallissija). */
Sanasto.lisaa('k04', [
{"id":"näyttely","l":"substantiivi","pt":["exposição (de arte)"],"t":{"gen":"näyttelyn","part":"näyttelyä","ill":"näyttelyyn","mpart":"näyttelyitä"},"paikka":"sisa","huom":"vem de näyttää (mostrar): näyttelyssä = na exposição","o":"k04"},
{"id":"Vaasankatu","l":"paikka","pt":["Vaasankatu, rua em Sörnäinen, Helsinque"],"t":{"gen":"Vaasankadun","part":"Vaasankatua","ill":"Vaasankatuun"},"paikka":"ulko","yhd":["Vaasan","katu"],"huom":"rua: Vaasankadulla = na Vaasankatu, com -lla, como kadulla","o":"k04"},
{"id":"aikamuoto","l":"substantiivi","pt":["tempo verbal"],"t":{"gen":"aikamuodon","part":"aikamuotoa","ill":"aikamuotoon","mpart":"aikamuotoja"},"paikka":"sisa","yhd":["aika","muoto"],"huom":"presente, passado, perfeito…","piilota":true,"o":"k04"},
{"id":"aikakone","l":"substantiivi","pt":["máquina do tempo"],"t":{"gen":"aikakoneen","part":"aikakonetta","ill":"aikakoneeseen","mpart":"aikakoneita"},"paikka":"sisa","yhd":["aika","kone"],"huom":"Aikakoneen golem = o golem da máquina do tempo, o chefe da revisão final","piilota":true,"o":"k04"},
{"id":"golem","l":"nimi","pt":["golem, gigante de pedra das lendas"],"t":{"gen":"golemin","part":"golemia","ill":"golemiin"},"huom":"Aikakoneen golem: mistura ontem, já e se","piilota":true,"o":"k04"},
{"id":"viimeksi","l":"taipumaton","pt":["da última vez"],"huom":"Viimeksi nähty… = visto pela última vez… (aviso de desaparecido no jornal)","o":"k04"},
{"id":"nähty","l":"taipumaton","pt":["visto"],"huom":"forma de {nähdä} usada em avisos: Viimeksi nähty… = visto pela última vez…","piilota":true,"o":"k04"}
]);
