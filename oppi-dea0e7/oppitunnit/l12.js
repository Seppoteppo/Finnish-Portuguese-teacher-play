/* Jakso 12: Kesävaatteita Savassissa. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'l12',
  lyhyt: '12',
  jakso: 'Jakso 12',
  otsikko: 'Vaatteet ja värit: objektipronominit',
  lahde: 'Aihe: vaatteet ja värit · Kielioppi: objektipronominit · Ääntäminen: konsonanttien kertaus',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi, kotona Belo Horizontessa' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, opettelee portugalia' },
    marina: { nimi: 'Marina', tyyppi: 'nainen', vaihto: 2, kuvaus: 'Maian lapsuudenystävä, sairaanhoitaja; järjestää kaiken ja puhuu nopeasti' }
  },

  aiheet: ['raha', 'ominaisuus', 'kaupunki', 'toiminta'],

  sanasto: ['camiseta', 'camisa', 'calça', 'bermuda', 'saia', 'vestido', 'casaco', 'meia', 'sapato', 'tênis',
    'chinelo', 'chapéu', 'óculos de sol', 'preto', 'amarelo', 'rosa', 'roxo', 'cinza', 'marrom', 'tamanho',
    'provador', 'experimentar', 'servir', 'apertado', 'largo', 'comprido', 'curto', 'usar', 'ficar bem', 'verão'],

  sanat: {
    'levá-la': { fi: 'ottaa se, viedä se (feminiini, kirjakieli)', aa: 'le-VA-la', ipa: '[leˈvalɐ]', sl: 'verbi {levar} + objektipronomini', huom: 'puhekielessä ”levar ela”; maskuliini ”levá-lo”' },
    // dialogi
    'savassi': { fi: 'Savassi (Belo Horizonten kaupunginosa)', aa: 'sa-va-SI', ipa: '[savaˈsi]', sl: 'paikan nimi' },
    'calor': { fi: 'kuumuus, helle', aa: 'ka-LOH', ipa: '[kaˈloh]', sl: 'substantiivi, maskuliini', huom: '{estar com calor} = olla kuuma' },
    'estar com calor': { fi: 'olla kuuma, hikoilla', aa: 'es-TAH kõ ka-LOH', ipa: '[esˈtah kõ kaˈloh]', sl: 'ilmaus', huom: 'vastakohta ”estar com frio”' },
    'estar com frio': { fi: 'olla kylmä, palella', aa: 'es-TAH kõ FRIU', ipa: '[esˈtah kõ fɾiw]', sl: 'ilmaus' },
    'comprida': { fi: 'pitkä (feminiinisanan edellä)', aa: 'kõ-PRI-da', ipa: '[kõˈpɾidɐ]', sl: 'adjektiivi', huom: 'maskuliini {comprido}' },
    'comprido': { fi: 'pitkä', aa: 'kõ-PRI-du', ipa: '[kõˈpɾidu]', sl: 'adjektiivi', huom: 'feminiini {comprida}; vastakohta {curto}. Ei sama kuin {largo}' },
    'calça': { fi: 'housut', aa: 'KAU-sa', ipa: '[ˈkawsɐ]', sl: 'substantiivi, feminiini', huom: 'portugaliksi yksikkö, vaikka suomeksi monikko: ”a calça”, ”as calças”' },
    'casaco': { fi: 'takki', aa: 'ka-ZA-ku', ipa: '[kaˈzaku]', sl: 'substantiivi, maskuliini' },
    'enfermeira': { fi: 'sairaanhoitaja (nainen)', aa: 'ẽ-feh-MEI-ra', ipa: '[ẽfehˈmejɾɐ]', sl: 'substantiivi, feminiini', huom: 'mies ”enfermeiro”' },
    'ela': { fi: 'hän (nainen), se (feminiinisana)', aa: 'E-la', ipa: '[ˈɛlɐ]', sl: 'persoonapronomini', huom: 'puhekielessä myös kohteena: ”eu vejo ela”' },
    'organizar': { fi: 'järjestää, organisoida', aa: 'oh-ga-ni-ZAH', ipa: '[ohɡaniˈzah]', sl: 'verbi, perusmuoto' },
    'organiza': { fi: 'järjestää', aa: 'oh-ga-NI-za', ipa: '[ohɡaˈnizɐ]', sl: 'verbi {organizar}' },
    'compra': { fi: 'ostaa', aa: 'KÕ-pra', ipa: '[ˈkõpɾɐ]', sl: 'verbi {comprar}' },
    'verão': { fi: 'kesä', aa: 've-RÃU', ipa: '[veˈɾɐ̃w]', sl: 'substantiivi, maskuliini', huom: 'Brasiliassa joulukuu on kesää' },
    'inverno': { fi: 'talvi', aa: 'ĩ-VEH-nu', ipa: '[ĩˈvɛhnu]', sl: 'substantiivi, maskuliini' },
    'odeio': { fi: 'minä vihaan', aa: 'o-DE-iu', ipa: '[oˈdeju]', sl: 'verbi {odiar}' },
    'ajuda': { fi: 'auttaa; apu', aa: 'a-ZHU-da', ipa: '[aˈʒudɐ]', sl: 'verbi {ajudar}; substantiivi, feminiini', huom: '”Marina te ajuda” = Marina auttaa sinua' },
    'ajudo': { fi: 'minä autan', aa: 'a-ZHU-du', ipa: '[aˈʒudu]', sl: 'verbi {ajudar}' },
    'camiseta': { fi: 't-paita', aa: 'ka-mi-ZE-ta', ipa: '[kamiˈzetɐ]', sl: 'substantiivi, feminiini' },
    'cor': { fi: 'väri', aa: 'KOH', ipa: '[kɔh]', sl: 'substantiivi, feminiini', huom: 'monikko ”cores”; ”De que cor você gosta?” = mistä väristä pidät?' },
    'posso': { fi: 'minä voin, saan', aa: 'PO-su', ipa: '[ˈpɔsu]', sl: 'verbi {poder}', huom: '”Posso experimentar?” = saanko sovittaa?' },
    'experimentar': { fi: 'sovittaa; kokeilla', aa: 'es-pe-ri-mẽ-TAH', ipa: '[espeɾimẽˈtah]', sl: 'verbi, perusmuoto' },
    'provador': { fi: 'sovituskoppi', aa: 'pro-va-DOH', ipa: '[pɾovaˈdoh]', sl: 'substantiivi, maskuliini' },
    'serve': { fi: 'sopii (kokonsa puolesta); palvelee', aa: 'SEH-vi', ipa: '[ˈsɛhvi]', sl: 'verbi {servir}', huom: '”Não serve” = ei käy, ei sovi' },
    'apertada': { fi: 'tiukka (feminiinisanan edellä)', aa: 'a-peh-TA-da', ipa: '[apehˈtadɐ]', sl: 'adjektiivi', huom: 'maskuliini {apertado}' },
    'apertado': { fi: 'tiukka, ahdas', aa: 'a-peh-TA-du', ipa: '[apehˈtadu]', sl: 'adjektiivi', huom: 'feminiini {apertada}; vastakohta {largo}' },
    'peço': { fi: 'minä pyydän', aa: 'PE-su', ipa: '[ˈpɛsu]', sl: 'verbi {pedir}' },
    'bermuda': { fi: 'bermudashortsit, polvihousut', aa: 'beh-MU-da', ipa: '[behˈmudɐ]', sl: 'substantiivi, feminiini' },
    'larga': { fi: 'leveä, väljä (feminiinisanan edellä)', aa: 'LAH-ga', ipa: '[ˈlahɡɐ]', sl: 'adjektiivi', huom: 'maskuliini {largo}. Espanjan ansa: ei ”pitkä”' },
    'largo': { fi: 'leveä, väljä', aa: 'LAH-gu', ipa: '[ˈlahɡu]', sl: 'adjektiivi', huom: 'espanjan ”largo” = pitkä, mutta portugaliksi {comprido}!' },
    'curta': { fi: 'lyhyt (feminiinisanan edellä)', aa: 'KUH-ta', ipa: '[ˈkuhtɐ]', sl: 'adjektiivi', huom: 'maskuliini {curto}' },
    'curto': { fi: 'lyhyt', aa: 'KUH-tu', ipa: '[ˈkuhtu]', sl: 'adjektiivi', huom: 'feminiini {curta}; vastakohta {comprido}' },
    'entendi': { fi: 'ymmärsin, selvä', aa: 'ẽ-tẽ-DI', ipa: '[ẽtẽˈdʒi]', sl: 'verbi {entender}', huom: 'arkinen vastaus selitykseen' },
    'quero': { fi: 'minä haluan', aa: 'KE-ru', ipa: '[ˈkɛɾu]', sl: 'verbi {querer}' },
    'quer': { fi: 'haluaa; haluat', aa: 'KEH', ipa: '[kɛh]', sl: 'verbi {querer}', huom: '”Você quer?” = haluatko?' },
    'fica': { fi: 'jää; sijaitsee; pukee (”fica bem em você”)', aa: 'FI-ka', ipa: '[ˈfikɐ]', sl: 'verbi {ficar}', huom: '”ficar bem” = sopia, pukea hyvin' },
    'ficar bem': { fi: 'pukea hyvin, sopia', aa: 'fi-KAH BẼI', ipa: '[fiˈkah bẽj]', sl: 'ilmaus', huom: '”Fica bem em você” = se pukee sinua' },
    'acha': { fi: 'luulee; sinä luulet', aa: 'A-sha', ipa: '[ˈaʃɐ]', sl: 'verbi {achar}', huom: '”Você acha?” = luuletko?' },
    'estou': { fi: 'minä olen (tila, sijainti)', aa: 'es-TOU', ipa: '[esˈtow]', sl: 'verbi {estar}', huom: 'puhekielessä {tô}' },
    'precisa': { fi: 'tarvitsee; sinä tarvitset', aa: 'pre-SI-za', ipa: '[pɾeˈsizɐ]', sl: 'verbi {precisar}', huom: '”precisar de” + sana' },
    'preciso': { fi: 'minä tarvitsen', aa: 'pre-SI-zu', ipa: '[pɾeˈsizu]', sl: 'verbi {precisar}' },
    'chapéus': { fi: 'hatut', aa: 'sha-PEUS', ipa: '[ʃaˈpɛws]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {chapéu}' },
    'chapéu': { fi: 'hattu', aa: 'sha-PEU', ipa: '[ʃaˈpɛw]', sl: 'substantiivi, maskuliini' },
    'boné': { fi: 'lippalakki', aa: 'bo-NE', ipa: '[boˈnɛ]', sl: 'substantiivi, maskuliini' },
    'pareço': { fi: 'minä näytän (joltakin)', aa: 'pa-RE-su', ipa: '[paˈɾesu]', sl: 'verbi {parecer}', huom: '”pareço brasileiro” = näytän brasilialaiselta' },
    'brasileiro': { fi: 'brasilialainen', aa: 'bra-zi-LEI-ru', ipa: '[bɾaziˈlejɾu]', sl: 'adjektiivi, substantiivi, maskuliini', huom: 'feminiini ”brasileira”' },
    'falta': { fi: 'puuttuu', aa: 'FAU-ta', ipa: '[ˈfawtɐ]', sl: 'verbi {faltar}', huom: '”Falta o chinelo” = varvassandaalit puuttuvat vielä' },
    'chinelo': { fi: 'varvassandaali, tohveli', aa: 'shi-NE-lu', ipa: '[ʃiˈnɛlu]', sl: 'substantiivi, maskuliini', huom: 'Brasiliassa kesän perusjalkine' },
    'vejo': { fi: 'minä näen', aa: 'VE-zhu', ipa: '[ˈveʒu]', sl: 'verbi {ver}' },
    'ouve': { fi: 'kuulee; sinä kuulet', aa: 'OU-vi', ipa: '[ˈowvi]', sl: 'verbi {ouvir}' },
    'conhece': { fi: 'tuntee; tapaa', aa: 'ko-NJE-si', ipa: '[koˈɲɛsi]', sl: 'verbi {conhecer}' },
    'mostro': { fi: 'minä näytän', aa: 'MOS-tru', ipa: '[ˈmostɾu]', sl: 'verbi {mostrar}' },
    'dou': { fi: 'minä annan', aa: 'DOU', ipa: '[dow]', sl: 'verbi {dar}' },
    'dá': { fi: 'antaa; sinä annat', aa: 'DA', ipa: '[da]', sl: 'verbi {dar}', huom: '”Me dá…” = anna minulle… (arkinen pyyntö)' },
    'vem': { fi: 'tulee; tule!', aa: 'VẼI', ipa: '[vẽj]', sl: 'verbi {vir}', huom: '”Vem comigo!” = tule kanssani!' },
    'uso': { fi: 'minä käytän; minulla on yllä', aa: 'U-zu', ipa: '[ˈuzu]', sl: 'verbi {usar}' },
    'usa': { fi: 'käyttää; sinä käytät', aa: 'U-za', ipa: '[ˈuzɐ]', sl: 'verbi {usar}' },
    'usar': { fi: 'käyttää; pitää yllään', aa: 'u-ZAH', ipa: '[uˈzah]', sl: 'verbi, perusmuoto' },
    'm': { fi: 'M (koko: medium)', aa: 'E-mi', ipa: '[ˈemi]', sl: 'kirjain', huom: 'vaatekoot: P, M, G (pieni, keskikoko, suuri)' },
    'tamanho': { fi: 'koko', aa: 'ta-MÃ-nju', ipa: '[taˈmɐ̃ɲu]', sl: 'substantiivi, maskuliini', huom: '”Que tamanho você usa?” = mitä kokoa käytät?' },
    'preta': { fi: 'musta (feminiinisanan edellä)', aa: 'PRE-ta', ipa: '[ˈpɾetɐ]', sl: 'adjektiivi', huom: 'maskuliini {preto}' },
    'preto': { fi: 'musta', aa: 'PRE-tu', ipa: '[ˈpɾetu]', sl: 'adjektiivi', huom: 'feminiini {preta}' },
    'branca': { fi: 'valkoinen (feminiinisanan edellä)', aa: 'BRÃ-ka', ipa: '[ˈbɾɐ̃kɐ]', sl: 'adjektiivi', huom: 'maskuliini {branco}' },
    'cinza': { fi: 'harmaa', aa: 'SĨ-za', ipa: '[ˈsĩzɐ]', sl: 'adjektiivi', huom: 'sama molemmissa suvuissa' },
    'marrom': { fi: 'ruskea', aa: 'ma-HÕ', ipa: '[maˈhõ]', sl: 'adjektiivi', huom: 'sama molemmissa suvuissa' },
    'rosa': { fi: 'vaaleanpunainen; ruusu', aa: 'HO-za', ipa: '[ˈhɔzɐ]', sl: 'adjektiivi, substantiivi, feminiini', huom: 'väri ei taivu' },
    'amarelo': { fi: 'keltainen', aa: 'a-ma-RE-lu', ipa: '[amaˈɾɛlu]', sl: 'adjektiivi', huom: 'feminiini ”amarela”' },
    'roxo': { fi: 'violetti', aa: 'HO-shu', ipa: '[ˈhoʃu]', sl: 'adjektiivi', huom: 'feminiini ”roxa”' },
    'nas': { fi: '-ssa, -ssä (feminiinin monikko)', aa: 'nas', ipa: '[nas]', sl: 'prepositio + artikkeli', huom: '{em} + {as}' },
    'compras': { fi: 'ostokset', aa: 'KÕ-pras', ipa: '[ˈkõpɾɐs]', sl: 'substantiivi, feminiini, monikko', huom: '”fazer compras” = tehdä ostoksia' },
    'caça': { fi: 'metsästys', aa: 'KA-sa', ipa: '[ˈkasɐ]', sl: 'substantiivi, feminiini', huom: 'ääntyy ”KA-sa”, ei sama kuin {casa}' },
    'mina': { fi: 'kaivos', aa: 'MĨ-na', ipa: '[ˈmĩnɐ]', sl: 'substantiivi, feminiini', huom: 'vrt. {minha}' },
    'malha': { fi: 'neulos, trikoo', aa: 'MA-lja', ipa: '[ˈmaʎɐ]', sl: 'substantiivi, feminiini', huom: 'vrt. {mala}' },
    'mala': { fi: 'matkalaukku', aa: 'MA-la', ipa: '[ˈmalɐ]', sl: 'substantiivi, feminiini' },
    'daquele': { fi: 'tuosta (maskuliinisanan edellä)', aa: 'da-KE-li', ipa: '[daˈkeli]', sl: 'prepositio + pronomini', huom: '{de} + {aquele}' },
    'dela': { fi: 'hänen (naisen); hänestä', aa: 'DE-la', ipa: '[ˈdɛlɐ]', sl: 'prepositio + pronomini', huom: '{de} + {ela}; ”gosto dela” = pidän hänestä, siitä' },
    'dele': { fi: 'hänen (miehen); hänestä', aa: 'DE-li', ipa: '[ˈdeli]', sl: 'prepositio + pronomini', huom: '{de} + {ele}' },
    'vestido': { fi: 'mekko', aa: 'ves-TSI-du', ipa: '[vesˈtʃidu]', sl: 'substantiivi, maskuliini' },
    'saia': { fi: 'hame; (verbi) lähde!', aa: 'SA-ia', ipa: '[ˈsajɐ]', sl: 'substantiivi, feminiini', huom: 'sama kirjoitusasu on verbin {sair} käskymuoto: ”saia!” = lähde!' },
    'blusa': { fi: 'pusero', aa: 'BLU-za', ipa: '[ˈbluzɐ]', sl: 'substantiivi, feminiini' },
    'meia': { fi: 'sukka', aa: 'MEI-a', ipa: '[ˈmejɐ]', sl: 'substantiivi, feminiini' },
    'meias': { fi: 'sukat', aa: 'ME-ias', ipa: '[ˈmejɐs]', sl: 'substantiivi, feminiini, monikko', huom: 'yksikkö {meia}' },
    'tênis': { fi: 'lenkkari, tennari; tennis', aa: 'TẼ-nis', ipa: '[ˈtẽnis]', sl: 'substantiivi, maskuliini', huom: 'sama muoto yksikössä ja monikossa' },
    'óculos de sol': { fi: 'aurinkolasit', aa: 'O-ku-luz di SOU', ipa: '[ˈɔkuluz dʒi sɔw]', sl: 'ilmaus, maskuliini monikko', huom: '{óculos} on aina monikko' },
    'óculos': { fi: 'silmälasit', aa: 'O-ku-lus', ipa: '[ˈɔkulus]', sl: 'substantiivi, maskuliini, monikko' },
    'desconto': { fi: 'alennus', aa: 'dis-KÕ-tu', ipa: '[dʒisˈkõtu]', sl: 'substantiivi, maskuliini' },
    'liquidação': { fi: 'alennusmyynti, loppuunmyynti', aa: 'li-kui-da-SÃU', ipa: '[likwidaˈsɐ̃w]', sl: 'substantiivi, feminiini' },
    'nos': { fi: 'meidät, meille', aa: 'nus', ipa: '[nus]', sl: 'objektipronomini', huom: 'puhekielessä usein {a gente}' },
    'os': { fi: 'määräinen artikkeli (maskuliinin monikko); heidät (kirjakieli)', aa: 'us', ipa: '[us]', sl: 'artikkeli, objektipronomini', huom: 'yksikkö {o}' },
    'as': { fi: 'määräinen artikkeli (feminiinin monikko); heidät (naiset, kirjakieli)', aa: 'as', ipa: '[as]', sl: 'artikkeli, objektipronomini', huom: 'yksikkö {a}' },
    'eles': { fi: 'he (miehet, sekaryhmä)', aa: 'E-lis', ipa: '[ˈelis]', sl: 'persoonapronomini', huom: 'feminiini {elas}' },
    'elas': { fi: 'he (naiset)', aa: 'E-las', ipa: '[ˈɛlɐs]', sl: 'persoonapronomini', huom: 'maskuliini {eles}' },
    'lhes': { fi: 'heille; teille (kirjakieli)', aa: 'LJIS', ipa: '[ʎis]', sl: 'objektipronomini', huom: 'puheessa ”pra eles”' },
    'lo': { fi: 'sen, hänet (verbin perässä, kirjakieli)', aa: 'LU', ipa: '[lu]', sl: 'objektipronomini', huom: 'muoto {o} perusmuodon -r:n jälkeen: ”vê-lo”' },
    'la': { fi: 'sen, hänet (verbin perässä, kirjakieli)', aa: 'LA', ipa: '[la]', sl: 'objektipronomini', huom: 'muoto {a} perusmuodon -r:n jälkeen: ”comprá-la”' },
    'ajudá-lo': { fi: 'auttaa häntä (kirjakieli)', aa: 'a-zhu-DA-lu', ipa: '[aʒuˈdalu]', sl: 'verbi + objektipronomini', huom: 'puheessa ”ajudar ele”' },
    'comprá-la': { fi: 'ostaa se (kirjakieli)', aa: 'kõ-PRA-la', ipa: '[kõˈpɾalɐ]', sl: 'verbi + objektipronomini', huom: 'puheessa ”comprar ela” tai pelkkä {comprar}' },
    'vê-lo': { fi: 'nähdä hänet (kirjakieli)', aa: 'VE-lu', ipa: '[ˈvelu]', sl: 'verbi + objektipronomini', huom: 'puheessa ”ver ele”' },
    'amigos': { fi: 'ystävät', aa: 'a-MI-gus', ipa: '[aˈmiɡus]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {amigo}' },
    // kulttuuri
    'curral': { fi: 'karjatarha', aa: 'ku-HAU', ipa: '[kuˈhaw]', sl: 'substantiivi, maskuliini' },
    'curral del rei': { fi: 'Curral del Rei (kylä, jonka paikalle Belo Horizonte rakennettiin)', aa: 'ku-HAU deu HEI', ipa: '[kuˈhaw dew hej]', sl: 'paikan nimi' },
    'del': { kieli: 'es', fi: 'espanjan ”de el” (-n, jonkun)', aa: 'DEL', ipa: '[del]', sl: 'espanjan sana', huom: 'vanhan kylän nimessä' },
    'rei': { fi: 'kuningas', aa: 'HEI', ipa: '[hej]', sl: 'substantiivi, maskuliini' },
    'avenida': { fi: 'iso katu, bulevardi', aa: 'a-ve-NI-da', ipa: '[aveˈnidɐ]', sl: 'substantiivi, feminiini' },
    'avenida do contorno': { fi: 'Avenida do Contorno (Belo Horizonten kehäkatu)', aa: 'a-ve-NI-da du kõ-TOH-nu', ipa: '[aveˈnidɐ du kõˈtohnu]', sl: 'paikan nimi' },
    'contorno': { fi: 'ääriviiva, kehä', aa: 'kõ-TOH-nu', ipa: '[kõˈtohnu]', sl: 'substantiivi, maskuliini' },
    'avenida afonso pena': { fi: 'Avenida Afonso Pena (Belo Horizonten pääkatu)', aa: 'a-ve-NI-da a-FÕ-su PE-na', ipa: '[aveˈnidɐ aˈfõsu ˈpenɐ]', sl: 'paikan nimi' },
    'afonso': { fi: 'Afonso (etunimi)', aa: 'a-FÕ-su', ipa: '[aˈfõsu]', sl: 'nimi' },
  },

  html: `
<ul class="tavoitteet">
  <li>Osaat nimetä tavallisimmat vaatteet ja värit.</li>
  <li>Osaat sanoa, mikä vaate sopii, on liian tiukka tai liian pitkä.</li>
  <li>Osaat käyttää sanoja <span class="pt">me</span>, <span class="pt">te</span> ja <span class="pt">ele/ela</span> kohteena: ”auttaa minua”, ”näen hänet”.</li>
  <li>Kuulet ja lausut portugalin konsonantit oikein.</li>
</ul>
<p data-paikka="savassi">Belo Horizonte, Savassi. Jaylla on mukanaan vain suomalaisia talvivaatteita, mutta joulukuussa Brasiliassa on kesä. Maian ystävä Marina vie hänet ostoksille.</p>

<section class="osio" data-paikka="savassi">
  <h2>Dialogi: Roupa de verão</h2>
  <p class="ohje">Kuuntele ensin koko dialogi. Huomaa kaksi espanjan vaikutuksesta syntynyttä virhettä: <span class="pt">me gosta</span> ja <span class="pt">larga</span>. Paina sitten roolileikkiä ja puhu Jayn repliikit.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="Belo Horizonte, Savassi. Tänään on hyvin kuuma.">Belo Horizonte, Savassi. Está muito quente hoje.</p>
    <p class="s" data-h="kertoja" data-fi="Jaylla on yllään pitkät housut ja takki. Hänellä on hyvin kuuma.">Jay está de calça comprida e de casaco. Ele está com muito calor.</p>
    <p class="s" data-h="kertoja" data-fi="Marina, Maian ystävä, on sairaanhoitaja. Hän järjestää kaiken ja puhuu hyvin nopeasti.">Marina, amiga da Maia, é enfermeira. Ela organiza tudo e fala muito rápido.</p>
    <p class="s" data-h="marina" data-fi="Jay, et voi pitää takkia täällä! Tänään ostetaan kesävaatteita.">Jay, você não pode usar casaco aqui! Hoje a gente compra roupa de verão.</p>
    <p class="s" data-h="jay" data-fi="Minulla on vain talvivaatteita. Vihaan kuumuutta.">Eu só tenho roupa de inverno. Eu odeio calor.</p>
    <p class="s" data-h="maia" data-fi="Rauhoitu, Jay. Marina auttaa sinua.">Calma, Jay. A Marina te ajuda.</p>
    <p class="s" data-h="marina" data-fi="Totta kai autan sinua! Ensin t-paita. Mistä väristä sinä pidät?">Eu te ajudo, claro! Primeiro, uma camiseta. De que cor você gosta?</p>
    <p class="s" data-h="jay" data-fi="Minä pidän sinisestä. (virhe: espanjan ”me gusta”)">Me gosta o azul.</p>
    <p class="s" data-h="marina" data-fi="Gostar-verbin kanssa tulee ”de”: eu gosto do azul. Ei ”me gosta”.">Gostar tem “de”: eu gosto do azul. Não é “me gosta”.</p>
    <p class="s" data-h="jay" data-fi="Minä pidän sinisestä. Saanko sovittaa?">Eu gosto do azul. Posso experimentar?</p>
    <p class="s" data-h="marina" data-fi="Saat! Sovituskoppi on tuolla.">Pode! O provador é ali.</p>
    <p class="s" data-h="jay" data-fi="Se ei käy. Se on tiukka.">Não serve. Está apertada.</p>
    <p class="s" data-h="marina" data-fi="Pyydän sinulle sitten isomman koon.">Então eu peço um tamanho maior pra você.</p>
    <p class="s" data-h="jay" data-fi="Tämä bermuda on liian ”larga”. Se yltää jalkaan asti!">Esta bermuda é muito larga. Vai até o pé!</p>
    <p class="s" data-h="marina" data-fi="Pitkä, Jay! Larga on tiukan vastakohta: leveä, väljä.">Comprida, Jay! Larga é o contrário de apertada.</p>
    <p class="s" data-h="maia" data-fi="Espanjassa ”largo” on pitkä, mutta portugalissa ei.">Em espanhol “largo” é comprido, mas em português não.</p>
    <p class="s" data-h="jay" data-fi="Selvä. Haluan siis lyhyen bermudan. Tämän ostan, haluan sen.">Entendi. Então eu quero uma bermuda curta. Esta aqui, eu quero ela.</p>
    <p class="s" data-h="marina" data-fi="Tämä on täydellinen. Se pukee sinua!">Perfeito! Ela fica bem em você.</p>
    <p class="s" data-h="jay" data-fi="Luuletko? Olen hyvin valkoinen.">Você acha? Eu estou muito branco.</p>
    <p class="s" data-h="marina" data-fi="Siksi tarvitset aurinkoa! Näytän sinulle hattukaupan.">Por isso você precisa de sol! Vou te mostrar a loja de chapéus.</p>
    <p class="s" data-h="jay" data-fi="Kiitti, Marina! Nyt minä näytän brasilialaiselta!">Valeu, Marina! Agora eu pareço brasileiro!</p>
    <p class="s" data-h="marina" data-fi="Ei vielä! Puuttuvat vielä varvassandaalit.">Ainda não! Falta o chinelo.</p>
  </div>
</section>

<section class="osio" data-paikka="savassi">
  <h2>Sovituskoppi: o provador</h2>
  <p class="ohje">Jay sovittaa kesävaatteita, ja Marina kommentoi. Valitse t-paidan ja lippiksen väri: Jay vaihtaa vaatteen peilissä, Marina kehuu sitä, ja Jay päättää ostaa sen. Kuuntele, miten Jay viittaa vaatteeseen: t-paita (feminiini) on <span class="pt">ela</span>, lippis (maskuliini) on <span class="pt">ele</span>.</p>
  <div class="provador" data-h="jay" data-myyja="marina">
    <div data-esine="a camiseta" data-suku="f" data-osa="paita" data-varit="azul:#2b55a6,vermelha:#c0392b,verde:#2e8b57,amarela:#f1c40f,branca:#f4f4f4"></div>
    <div data-esine="o boné" data-suku="m" data-osa="lippis" data-varit="preto:#222222,branco:#f4f4f4,vermelho:#c0392b,laranja:#e67e22"></div>
  </div>
  <p>Puheessa Jay sanoo <span class="pt">eu vou levar ela</span> (otan sen). Kirjakielessä objekti on lyhyt pronomini verbin perässä: <span class="pt">vou levá-la</span>. Molemmat ymmärretään, mutta Belo Horizonten kaupoissa kuulet lähes aina ensimmäisen.</p>
</section>

<section class="osio">
  <h2>Teemasanasto</h2>
  <div class="teema" data-otsikko="Vaatteet" data-sanat="camiseta,camisa,calça,bermuda,saia,vestido,blusa,casaco,meia,sapato,tênis,chinelo,chapéu,boné,óculos de sol,bolsa"></div>
  <div class="teema" data-otsikko="Värit" data-sanat="branco,preto,azul,vermelho,verde,amarelo,laranja,rosa,roxo,cinza,marrom"></div>
  <div class="teema" data-otsikko="Sovitus ja koko" data-sanat="tamanho,provador,experimentar,servir,ficar bem,apertado,largo,comprido,curto,usar,desconto,liquidação"></div>
  <div class="teema" data-otsikko="Kausi ja sää" data-sanat="verão,inverno,calor,frio,estar com calor,estar com frio"></div>
</section>

<section class="osio">
  <h2>Kielioppi</h2>

  <h3>1. Objektipronominit: me, te, o, a, nos</h3>
  <p><b>Objekti</b> on lauseen osa, johon teko kohdistuu. Suomessa sitä kysytään ”ketä? mitä?” (<i>näen Marinan</i>) tai ”kenelle?” (<i>annan hänelle</i>). <b>Objektipronomini</b> on pikkusana, joka korvaa objektin, jotta sitä ei tarvitse toistaa: ”Marina auttaa <b>minua</b>”. Suomessa tämä tehdään sijapäätteillä (minua, sinut, hänelle). Portugalissa käytetään erillisiä pikkusanoja, jotka tulevat <b>verbin eteen</b>.</p>

  <h3>Suora objekti: ketä? mitä?</h3>
  <table class="taivutus">
    <tr><td>minut, minua</td><td><span class="pt">me</span></td><td>Marta <span class="pt">me</span> ajuda.</td></tr>
    <tr><td>sinut, sinua</td><td><span class="pt">te</span> (puhekieli) · <span class="pt">o, a</span> (kohtelias)</td><td>Eu <span class="pt">te</span> vejo.</td></tr>
    <tr><td>hänet (mies)</td><td><span class="pt">o</span> (kirjakieli) · <span class="pt">ele</span> (puhekieli)</td><td>Eu <span class="pt">o</span> vejo. · Eu vejo <span class="pt">ele</span>.</td></tr>
    <tr><td>hänet (nainen)</td><td><span class="pt">a</span> (kirjakieli) · <span class="pt">ela</span> (puhekieli)</td><td>Eu <span class="pt">a</span> vejo. · Eu vejo <span class="pt">ela</span>.</td></tr>
    <tr><td>meidät</td><td><span class="pt">nos</span> · <span class="pt">a gente</span> (puhekieli)</td><td>Ela <span class="pt">nos</span> ajuda. · Ela ajuda <span class="pt">a gente</span>.</td></tr>
    <tr><td>teidät</td><td><span class="pt">vocês</span> (verbin jälkeen)</td><td>Eu ajudo <span class="pt">vocês</span>.</td></tr>
    <tr><td>heidät</td><td><span class="pt">os, as</span> (kirjakieli) · <span class="pt">eles, elas</span> (puhekieli)</td><td>Eu <span class="pt">os</span> vejo. · Eu vejo <span class="pt">eles</span>.</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Marina auttaa minua.">A Marina me ajuda.</li>
    <li class="s" data-fi="Näen sinut.">Eu te vejo.</li>
    <li class="s" data-fi="Kuuletko minut?">Você me ouve?</li>
    <li class="s" data-fi="Maia tuntee hänet. (puhekieli)">A Maia conhece ele.</li>
    <li class="s" data-fi="Haluan sen. (puhekieli, koskee esimerkiksi paitaa)">Eu quero ela.</li>
  </ul>

  <div class="huomio">
    <p><b>Brasilian puhekieli.</b> Koulukieliopissa kolmannen persoonan kohde on <span class="pt">o, a, os, as</span>: <span class="pt">Eu a vejo.</span> Brasilialaiset sanovat arjessa kuitenkin lähes aina <span class="pt">Eu vejo ela.</span> Käytä puheessa <span class="pt">ele, ela, eles, elas</span> verbin jälkeen. Kirjoitetussa tekstissä ja virallisessa kielessä <span class="pt">o, a</span> ovat oikeat muodot, joten tunnista ne.</p>
    <p>Usein kohde jätetään kokonaan pois, kun asia on selvä: <span class="pt">Você quer? — Quero.</span> (Haluatko? — Haluan.)</p>
    <p>Sana <span class="pt">te</span> kuuluu kieliopissa muotoon <span class="pt">tu</span>, mutta Brasiliassa sitä käytetään sanan <span class="pt">você</span> kanssa: <span class="pt">Posso te ajudar?</span> Sana <span class="pt">lhe</span> kuulostaa kirjalliselta tai vanhahtavalta.</p>
  </div>

  <h3>Epäsuora objekti: kenelle?</h3>
  <p>Epäsuora objekti vastaa kysymykseen ”kenelle?”. Suomessa se on usein -lle-muotoinen: ”annan <b>hänelle</b>”. Yleisiä verbejä ovat <span class="pt">dar</span> (antaa), <span class="pt">dizer</span> (sanoa), <span class="pt">mostrar</span> (näyttää), <span class="pt">pedir</span> (pyytää) ja <span class="pt">mandar</span> (lähettää).</p>
  <table class="taivutus">
    <tr><td>minulle</td><td><span class="pt">me</span></td><td>Ela <span class="pt">me</span> mostra a loja.</td></tr>
    <tr><td>sinulle</td><td><span class="pt">te</span> · <span class="pt">para você</span> · <span class="pt">pra você</span></td><td>Eu <span class="pt">te</span> mostro a loja.</td></tr>
    <tr><td>hänelle</td><td><span class="pt">lhe</span> (kirjakieli) · <span class="pt">pra ele, pra ela</span></td><td>Eu dou o presente <span class="pt">pra ela</span>.</td></tr>
    <tr><td>meille</td><td><span class="pt">nos</span> · <span class="pt">pra gente</span></td><td>Ele <span class="pt">nos</span> diz o preço. · Ele diz o preço <span class="pt">pra gente</span>.</td></tr>
    <tr><td>heille, teille</td><td><span class="pt">lhes</span> (kirjakieli) · <span class="pt">pra eles, pra vocês</span></td><td>Eu mando o dinheiro <span class="pt">pra eles</span>.</td></tr>
  </table>
  <ul class="esim">
    <li class="s" data-fi="Näytän sinulle hattukaupan.">Eu te mostro a loja de chapéus.</li>
    <li class="s" data-fi="Annan lahjan hänelle.">Eu dou o presente pra ela.</li>
    <li class="s" data-fi="Anna minulle t-paita, kiitos. (arkinen pyyntö)">Me dá uma camiseta, por favor.</li>
  </ul>

  <h3>Paikka lauseessa</h3>
  <p>Puheessa pikkusana on <b>verbin edessä</b>. Kieltosana <span class="pt">não</span> tulee ennen pikkusanaa. Jos lauseessa on kaksi verbiä (<span class="pt">vou</span> + perusmuoto, <span class="pt">posso</span> + perusmuoto), pikkusana tulee yleensä toisen verbin eteen.</p>
  <ul class="esim">
    <li class="s" data-fi="Autan sinua.">Eu te ajudo.</li>
    <li class="s" data-fi="En auta sinua.">Eu não te ajudo.</li>
    <li class="s" data-fi="Aion auttaa sinua.">Vou te ajudar.</li>
    <li class="s" data-fi="Voinko auttaa sinua?">Posso te ajudar?</li>
  </ul>
  <p>Kirjakielessä pikkusana liitetään perusmuotoon viivalla: <span class="pt">ajudá-lo</span>, <span class="pt">comprá-la</span>, <span class="pt">vê-lo</span>. Päätteen -r jälkeen o ja a muuttuvat muotoon <span class="pt">lo, la</span>, ja r jää pois. Näitä näet kirjoissa ja kylteissä. Puheessa sanotaan <span class="pt">vou comprar ela</span> tai vain <span class="pt">vou comprar</span>.</p>

  <h3>Prepositioiden jälkeen</h3>
  <p>Prepositioiden (<span class="pt">para, de, com</span>) jälkeen käytetään eri muotoja: <span class="pt">mim</span> (minä), <span class="pt">você</span>, <span class="pt">ele, ela</span>, <span class="pt">nós, a gente</span>, <span class="pt">vocês</span>, <span class="pt">eles, elas</span>. Prepositio <span class="pt">de</span> sulautuu sanoihin: <span class="pt">dele</span>, <span class="pt">dela</span>. Sana <span class="pt">com</span> + minä on <span class="pt">comigo</span>.</p>
  <ul class="esim">
    <li class="s" data-fi="Minulle sininen on paras.">Pra mim, o azul é o melhor.</li>
    <li class="s" data-fi="Pidän siitä. (paidasta)">Eu gosto dela.</li>
    <li class="s" data-fi="Tämä on hänen paitansa. (naisen)">Esta é a camisa dela.</li>
    <li class="s" data-fi="Tule kanssani!">Vem comigo!</li>
  </ul>

  <div class="muista">
    <p><b>Muista:</b> (1) Verbin edessä: <span class="pt">me, te, nos</span>. (2) Kolmas persoona puheessa: <span class="pt">ele, ela</span> verbin jälkeen. (3) <span class="pt">Gostar</span> vaatii aina <span class="pt">de</span>: <span class="pt">eu gosto de ela</span> → <span class="pt">eu gosto dela</span>. (4) Epäsuora kohde kolmannelle: <span class="pt">pra ele, pra ela</span>.</p>
  </div>

  <h3>Suomeen ja espanjaan verrattuna</h3>
  <p><b>Suomi:</b> kohteen muoto näkyy päätteessä (minua, sinut, hänelle). Portugalissa päätteitä ei ole, vaan pikkusana verbin edessä. <b>Espanja:</b> rakenne on sinulle tuttu: <i>me ayuda</i> = <span class="pt">me ajuda</span>, <i>te veo</i> = <span class="pt">te vejo</span>. Erot: espanjassa <i>lo, la</i> ovat arkikielessäkin tavallisia, mutta Brasiliassa sanotaan <span class="pt">eu vejo ela</span>. Espanjan <i>le, les</i> (hänelle) korvataan portugalissa muodolla <span class="pt">pra ele</span>. Ja suurin ansa: espanjan <i>me gusta</i> ei ole objektipronomini portugalissa. Portugaliksi sanotaan <span class="pt">eu gosto de</span> (”minä pidän jostakin”), ei <span class="pt">me gosta</span>.</p>

  <h3>2. Vaatteet: usar, estar de, ficar bem, servir</h3>
  <ul class="esim">
    <li class="s" data-fi="Jay on takissa. (hänellä on takki yllään)">Jay está de casaco.</li>
    <li class="s" data-fi="Minä käytän kokoa M.">Eu uso tamanho M.</li>
    <li class="s" data-fi="Tämä paita pukee sinua.">Esta camisa fica bem em você.</li>
    <li class="s" data-fi="Se ei sovi minulle. (koon takia)">Não serve em mim.</li>
    <li class="s" data-fi="Housut ovat liian tiukat.">A calça está apertada.</li>
  </ul>
  <p>Vaatteen sanat taipuvat sukuun ja lukuun, kuten adjektiivit aina: <span class="pt">a camisa branca</span>, <span class="pt">o sapato preto</span>. Värit <span class="pt">azul, verde, cinza, marrom, laranja, rosa</span> ovat samat molemmissa suvuissa: <span class="pt">a camisa azul</span>, <span class="pt">o casaco azul</span>.</p>
  <div class="muista">
    <p><b>Espanjan ansa:</b> <span class="pt">largo</span> ei tarkoita pitkää. Portugalissa <span class="pt">largo</span> on leveä tai väljä, ja pitkä on <span class="pt">comprido</span> (tai <span class="pt">longo</span>). Espanjan <i>largo</i> = <span class="pt">comprido</span>.</p>
  </div>
</section>

<section class="osio">
  <h2>Ääntäminen: konsonanttien kertaus</h2>
  <p>Kertaa oppituntien 0–10 konsonanttisäännöt vaatesanoilla. Kuuntele jokainen sana ja sano se perässä. Tarkista erityisesti sarakkeen ”ääni” kohta.</p>
  <table class="taivutus">
    <tr><td>r sanan alussa, rr, r ennen konsonanttia</td><td>h</td><td><span class="pt">roxo</span> · <span class="pt">marrom</span> · <span class="pt">bermuda</span></td></tr>
    <tr><td>r vokaalien välissä</td><td>lyhyt r</td><td><span class="pt">preto</span> · <span class="pt">amarelo</span></td></tr>
    <tr><td>s vokaalien välissä</td><td>z</td><td><span class="pt">camisa</span> · <span class="pt">rosa</span></td></tr>
    <tr><td>ç, ss</td><td>s</td><td><span class="pt">calça</span> · <span class="pt">cinza</span></td></tr>
    <tr><td>ch, x</td><td>sh</td><td><span class="pt">chinelo</span> · <span class="pt">roxo</span></td></tr>
    <tr><td>lh, nh</td><td>lj, nj</td><td><span class="pt">vermelho</span> · <span class="pt">tamanho</span></td></tr>
    <tr><td>d, t + i-äänne</td><td>d, ts</td><td><span class="pt">vestido</span> · <span class="pt">tênis</span></td></tr>
    <tr><td>l tavun lopussa</td><td>u</td><td><span class="pt">azul</span> · <span class="pt">calça</span></td></tr>
  </table>
  <div class="saanto">
    <h3>Minimaaliparit: pieni ero, eri sana</h3>
    <ul class="esim">
      <li class="s" data-fi="talo / taloa">casa</li>
      <li class="s" data-fi="metsästys">caça</li>
      <li class="s" data-fi="kaivos">mina</li>
      <li class="s" data-fi="minun (feminiini)">minha</li>
      <li class="s" data-fi="matkalaukku">mala</li>
      <li class="s" data-fi="neulos, trikoo">malha</li>
      <li class="s" data-fi="tee">chá</li>
      <li class="s" data-fi="jo">já</li>
    </ul>
  </div>
  <p>Rion ääntämys erottuu vaatteiden nimissä parhaiten sanoissa <span class="pt">tênis</span> ja <span class="pt">meias</span>: Riossa tavun lopun s on sh.</p>
</section>

<aside class="kulttuuri" data-paikka="belo-horizonte-panoraama">
  <p class="yla">Tiesitkö, että…? · Você sabia que…?</p>
  <h3>Belo Horizonte, suunniteltu kaupunki</h3>
  <figure class="kuva" data-kuva="belo-horizonte-panoraama"></figure>
  <p>Belo Horizonte ei kasvanut vähitellen, vaan se suunniteltiin etukäteen. Minas Geraisin uudeksi pääkaupungiksi haluttiin moderni kaupunki, koska vanha pääkaupunki Ouro Preto oli rakennettu vuoristoon ja sillä oli vähän tilaa kasvaa. Kaupungin suunnitteli insinööri Aarão Reis, ja se vihittiin käyttöön joulukuussa 1897. Alussa sen nimi oli <span class="pt">Cidade de Minas</span>, ja nykyinen nimi tuli käyttöön vuonna 1901. Paikalla oli aiemmin pieni kylä, <span class="pt">Curral del Rei</span>.</p>
  <p>Suunnitelmassa kadut ovat säännöllisessä ruudukossa, ja niitä leikkaavat leveät, vinot pääkadut. Suunnitellun keskusta-alueen ympärillä kulkee kehäkatu <span class="pt">Avenida do Contorno</span>, joka merkitsi alkuperäisen kaupungin rajan. Kaupungin pääkatuja on <span class="pt">Avenida Afonso Pena</span>. Kaupunki on kasvanut kauas tuon rajan ulkopuolelle.</p>
  <p>Savassi on keskustan eteläpuolella sijaitseva kaupunginosa, joka tunnetaan kaupoistaan, kahviloistaan ja ravintoloistaan. Siellä Jay ja Marina tekevät ostoksia.</p>
</aside>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>Kuvatehtävä: sovituskoppi</h3>
    <p class="ohje">Muistatko sovituskopin? Valitse oikea pronomini.</p>
    <div class="valinta" data-oikea="ela">
      <p class="kysymys"><span class="ryhma" data-hahmot="jay"></span> A camiseta azul? Eu vou levar ___!</p>
      <div class="vaihtoehdot"><button type="button">ele</button><button type="button">ela</button><button type="button">eles</button></div>
    </div>
    <div class="valinta" data-oikea="ele">
      <p class="kysymys"><span class="ryhma" data-hahmot="jay"></span> O boné preto? Eu vou levar ___!</p>
      <div class="vaihtoehdot"><button type="button">ele</button><button type="button">ela</button><button type="button">elas</button></div>
    </div>
    <div class="valinta" data-oikea="ótimo">
      <p class="kysymys"><span class="ryhma" data-hahmot="marina"></span> O boné fica ___ em você!</p>
      <div class="vaihtoehdot"><button type="button">ótimo</button><button type="button">ótima</button></div>
    </div>
    <div class="valinta" data-oikea="te">
      <p class="kysymys"><span class="ryhma" data-hahmot="marina"></span> Eu ___ ajudo, Jay!</p>
      <div class="vaihtoehdot"><button type="button">te</button><button type="button">me</button><button type="button">nos</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Täydennä objektipronomini</h3>
    <p class="ohje">Kirjoita puuttuva sana: <span class="pt">me, te, nos, o, a, os, ela, mim</span>.</p>
    <div class="aukot">
      <p>Jay: Maia, você <span class="aukko" data-oikea="me"></span> ajuda?</p>
      <p>Maia: Claro, eu <span class="aukko" data-oikea="te"></span> ajudo.</p>
      <p>Marina: Eu vou <span class="aukko" data-oikea="te"></span> mostrar a loja.</p>
      <p>Eu quero a camiseta. Eu quero <span class="aukko" data-oikea="ela"></span>. (puhekieli)</p>
      <p>Eu vejo a Marina. Eu <span class="aukko" data-oikea="a"></span> vejo. (kirjakieli)</p>
      <p>Ela conhece os amigos. Ela <span class="aukko" data-oikea="os"></span> conhece. (kirjakieli)</p>
      <p>A Marta <span class="aukko" data-oikea="me"></span> dá a camisa.</p>
      <p>Para <span class="aukko" data-oikea="mim"></span>, o azul é o melhor.</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Yhdistä vaatteet</h3>
    <ul class="yhdista">
      <li data-pari="t-paita">a camiseta</li>
      <li data-pari="housut">a calça</li>
      <li data-pari="hame">a saia</li>
      <li data-pari="mekko">o vestido</li>
      <li data-pari="sukka">a meia</li>
      <li data-pari="kenkä">o sapato</li>
      <li data-pari="hattu">o chapéu</li>
      <li data-pari="takki">o casaco</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>3. Mikä väri?</h3>
    <p class="ohje">Paina ▶ ja valitse väri, jonka kuulit.</p>
    <div class="valinta" data-kuuntele="vermelho" data-oikea="vermelho">
      <p class="kysymys">Mikä väri?</p>
      <div class="vaihtoehdot"><button type="button">vermelho</button><button type="button">verde</button><button type="button">amarelo</button></div>
    </div>
    <div class="valinta" data-kuuntele="roxo" data-oikea="roxo">
      <p class="kysymys">Mikä väri?</p>
      <div class="vaihtoehdot"><button type="button">rosa</button><button type="button">roxo</button><button type="button">marrom</button></div>
    </div>
    <div class="valinta" data-kuuntele="cinza" data-oikea="cinza">
      <p class="kysymys">Mikä väri?</p>
      <div class="vaihtoehdot"><button type="button">cinza</button><button type="button">branco</button><button type="button">preto</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Larga vai comprida?</h3>
    <p class="ohje">Valitse sana, joka sopii portugaliksi.</p>
    <div class="valinta" data-oikea="comprida">
      <p class="kysymys">A bermuda vai até o pé. Ela é muito ___.</p>
      <div class="vaihtoehdot"><button type="button">larga</button><button type="button">comprida</button></div>
    </div>
    <div class="valinta" data-oikea="larga">
      <p class="kysymys">A camiseta não está apertada. Ela está ___.</p>
      <div class="vaihtoehdot"><button type="button">larga</button><button type="button">curta</button></div>
    </div>
    <div class="valinta" data-oikea="eu gosto do azul">
      <p class="kysymys">Pidän sinisestä.</p>
      <div class="vaihtoehdot"><button type="button">me gosta o azul</button><button type="button">eu gosto do azul</button></div>
    </div>
    <div class="valinta" data-oikea="vermelho">
      <p class="kysymys">Mikä ei kuulu joukkoon?</p>
      <div class="vaihtoehdot"><button type="button">camiseta</button><button type="button">calça</button><button type="button">vermelho</button><button type="button">saia</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause.</p>
    <div class="sanelu" data-puhu="Eu te ajudo."></div>
    <div class="sanelu" data-puhu="Posso experimentar esta camiseta?"></div>
    <div class="sanelu" data-puhu="Ela fica bem em você."></div>
    <div class="sanelu" data-puhu="Eu gosto dela."></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>6. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Marina auttaa minua.</p><p class="s" data-fi="Marina auttaa minua.">A Marina me ajuda.</p></div>
    <div class="kaanna"><p class="fi">Voinko sovittaa tätä paitaa?</p><p class="s" data-fi="Voinko sovittaa tätä paitaa?">Posso experimentar esta camisa?</p></div>
    <div class="kaanna"><p class="fi">Näytän sinulle sovituskopin.</p><p class="s" data-fi="Näytän sinulle sovituskopin.">Eu te mostro o provador.</p></div>
    <div class="kaanna"><p class="fi">Pidän tuosta mekosta, mutta se on liian tiukka. (puhekieli)</p><p class="s" data-fi="Pidän tuosta mekosta, mutta se on liian tiukka.">Eu gosto daquele vestido, mas ele está muito apertado.</p></div>
    <div class="kaanna"><p class="fi">Haluan sen. (bermuda)</p><p class="s" data-fi="Haluan sen. (bermuda)">Eu quero ela.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Mikä tavu on painollinen?</h3>
    <p class="ohje">Napauta painollista tavua.</p>
    <p><span class="paino" data-tavut="ca|mi|se|ta" data-oikea="3"></span> <span class="paino" data-tavut="ber|mu|da" data-oikea="2"></span> <span class="paino" data-tavut="ves|ti|do" data-oikea="2"></span> <span class="paino" data-tavut="a|ma|re|lo" data-oikea="3"></span></p>
    <p><span class="paino" data-tavut="ta|ma|nho" data-oikea="2"></span> <span class="paino" data-tavut="chi|ne|lo" data-oikea="2"></span> <span class="paino" data-tavut="pro|va|dor" data-oikea="3"></span> <span class="paino" data-tavut="a|zul" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>8. Mitä vastaat?</h3>
    <p class="ohje">Sano vastaus ääneen ennen kuin avaat mallin.</p>
    <details class="vastaus">
      <summary lang="pt-BR">De que cor você gosta?</summary>
      <p class="s" data-fi="Pidän sinisestä.">Eu gosto de azul.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Que tamanho você usa?</summary>
      <p class="s" data-fi="Käytän kokoa M.">Eu uso tamanho M.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Você precisa de casaco no verão no Brasil?</summary>
      <p class="s" data-fi="Ei, kesällä on kuuma. En tarvitse takkia.">Não, no verão faz calor. Eu não preciso de casaco.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="l12">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="l12-mala" lang="pt-BR">
      <div class="kal-yla"><b>A minha mala de verão</b><small>mitä otat mukaan kesälomalle Brasiliaan?</small></div>
      <div class="kal-rivit">
        <label>Roupa 1 <input name="vaate1" placeholder="uma camiseta verde"></label>
        <label>Roupa 2 <input name="vaate2" placeholder="uma bermuda curta"></label>
        <label>Eu gosto… <input name="vari" placeholder="Eu gosto do azul."></label>
        <label>Fica bem? <input name="sopii" placeholder="A camiseta fica bem em mim."></label>
        <label>Eu vou levar… <input name="levan" placeholder="O chapéu? Eu vou levar ele!"></label>
      </div>
    </div>
    <p>Kirjoita 5–6 lausetta: kerro, mitä vaatteita sinulla on nyt yllä ja minkä värisiä ne ovat, ja mitä ostaisit Brasilian kesää varten. Käytä vähintään kahta objektipronominilausetta, esimerkiksi <span class="pt">Eu quero ela.</span> tai <span class="pt">A Maia me ajuda.</span> Sano vastaus lopuksi ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Minulla on nyt yllä sininen paita ja mustat housut.">Eu estou de camisa azul e calça preta.</p>
      <p class="s" data-fi="Tarvitsen kesävaatteita Brasiliaa varten.">Eu preciso de roupa de verão pro Brasil.</p>
      <p class="s" data-fi="Haluan valkoisen t-paidan. Haluan sen!">Eu quero uma camiseta branca. Eu quero ela!</p>
      <p class="s" data-fi="Maia auttaa minua ostoksilla.">A Maia me ajuda nas compras.</p>
      <p class="s" data-fi="Minulle bermuda on paras kesävaate.">Pra mim, a bermuda é a melhor roupa de verão.</p>
    </details>
  </div>
</section>
`
});
