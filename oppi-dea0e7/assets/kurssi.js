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
