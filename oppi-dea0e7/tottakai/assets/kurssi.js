/* Tottakain oma kopio Passon tiedostosta assets/kurssi.js (23.10.2026, AV-063; omistaja jaetuista tiedostoista: ”There shouldnt be.”).
   Passo käyttää edelleen omaa alkuperäistään; muutokset tähän eivät näy Passossa eivätkä Passon muutokset täällä. */
/* Kurssin rekisteri. Ladataan ensimmäisenä; oppituntitiedostot kutsuvat Kurssi.lisaa(...). */
window.Kurssi = {
  oppitunnit: [],
  sanasto: {},
  lisaa(o) {
    this.oppitunnit.push(o);
    for (const [k, v] of Object.entries(o.sanat || {})) {
      // Ensimmäinen määritelmä pätee; myöhempi korvaa sen vain merkinnällä korvaa: true (tarkistus C-paallekkaiset).
      if (!this.sanasto[k] || v.korvaa) this.sanasto[k] = Object.assign({ oppitunti: o.id }, v);
    }
  },
  /* Sanat, jotka eivät kuulu millekään oppitunnille (esim. Hakuosa): lahde = paketin nimi äänitteitä varten. */
  lisaaSanat(lahde, sanat) {
    for (const [k, v] of Object.entries(sanat || {})) {
      if (!this.sanasto[k]) this.sanasto[k] = Object.assign({ oppitunti: null, lahde }, v);
    }
  }
};
