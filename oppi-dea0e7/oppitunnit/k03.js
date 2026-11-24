/* Kertaus 11–15. Oma materiaali, ei kirjan tekstiä.
   Ääntämisohjeet noudattavat Belo Horizonten ääntämystä. {sana} on linkki toiseen sanaston sanaan. */
Kurssi.lisaa({
  id: 'k03',
  lyhyt: 'K3',
  jakso: 'Kertaus 11–15',
  otsikko: 'Kertaus 11–15: pronominit, refleksiivit, käskymuoto',
  lahde: 'Kertaa: tori ja vertailu · vaatteet ja objektipronominit · päivärutiini ja refleksiiviverbit · tie ja käskymuodot · koti ja joulu',
  hahmot: {
    kertoja: { nimi: 'Kertoja', tyyppi: 'kertoja' },
    maia: { nimi: 'Maia', tyyppi: 'nainen', vaihto: 0, kuvaus: 'brasilialainen geologi, kotona Belo Horizontessa' },
    jay: { nimi: 'Jay', tyyppi: 'mies', vaihto: 0, kuvaus: 'suomalainen geologi, opettelee portugalia' },
    mateus: { nimi: 'Mateus', tyyppi: 'mies', vaihto: 3, kuvaus: 'Maian lapsuudenystävä ja sovelluskuljettaja' },
    mirela: { nimi: 'Mirela', tyyppi: 'nainen', vaihto: 3, kuvaus: 'Maian ystävä, pitää ravintolaa Mercado Centralin lähellä' }
  },

  aiheet: ['ruoka', 'kaupunki', 'koti', 'toiminta'],

  sanasto: ['mais caro', 'melhor', 'o mais barato', 'tão bom quanto', 'se vende', 'me ajuda', 'eu gosto de', 'larga', 'comprida', 'me levanto',
    'se deita', 'todo dia', 'vire à direita', 'siga em frente', 'onde fica', 'pode me ajudar', 'faça', 'traga', 'ponha', 'venha',
    'tenha cuidado', 'seja', 'ceia', 'tapete', 'panela', 'artesanato', 'motorista', 'feliz natal'],

  sanat: {
    // yhteenveto ja dialogi
    'passam': { fi: 'viettävät (aikaa); kulkevat', aa: 'PA-sãu', ipa: '[ˈpasɐ̃w]', sl: 'verbi {passar}', huom: '”passar o Natal” = viettää joulu' },
    'conversa': { fi: 'juttelee; keskustelu', aa: 'kõ-VEH-sa', ipa: '[kõˈvɛhsɐ]', sl: 'verbi {conversar}; substantiivi, feminiini' },
    'perde': { fi: 'menettää; hukkaa', aa: 'PEH-di', ipa: '[ˈpɛhdʒi]', sl: 'verbi {perder}', huom: '”o Jay se perde” = Jay eksyy' },
    'aprende': { fi: 'oppii', aa: 'a-PRẼ-di', ipa: '[aˈpɾẽdʒi]', sl: 'verbi {aprender}' },
    'prepara': { fi: 'valmistelee', aa: 'pre-PA-ra', ipa: '[pɾeˈpaɾɐ]', sl: 'verbi {preparar}' },
    'promete': { fi: 'lupaa', aa: 'pro-ME-tsi', ipa: '[pɾoˈmɛtʃi]', sl: 'verbi {prometer}' },
    'acredita': { fi: 'uskoo', aa: 'a-kre-DI-ta', ipa: '[akɾeˈdʒitɐ]', sl: 'verbi {acreditar}', huom: '”não acredita” = ei usko' },
    'procuram': { fi: 'he etsivät', aa: 'pro-KU-rãu', ipa: '[pɾoˈkuɾɐ̃w]', sl: 'verbi {procurar}' },
    'explica': { fi: 'selittää', aa: 'es-PLI-ka', ipa: '[esˈplikɐ]', sl: 'verbi {explicar}' },
    'compram': { fi: 'he ostavat', aa: 'KÕ-prãu', ipa: '[ˈkõpɾɐ̃w]', sl: 'verbi {comprar}' },
    'acho': { fi: 'minä luulen, minusta', aa: 'A-shu', ipa: '[ˈaʃu]', sl: 'verbi {achar}', huom: '”Eu acho que…” = minusta…' },
    'liga': { fi: 'soittaa; kytkee', aa: 'LI-ga', ipa: '[ˈliɡɐ]', sl: 'verbi {ligar}', huom: '”ela me liga” = hän soittaa minulle' },
    'compre': { fi: 'osta! (käskymuoto)', aa: 'KÕ-pri', ipa: '[ˈkõpɾi]', sl: 'verbi {comprar}, käskymuoto', huom: 'eu compro → compre' },
    'cento': { fi: 'sata (lukujen edessä: sata…)', aa: 'SẼ-tu', ipa: '[ˈsẽtu]', sl: 'lukusana', huom: '”cento e vinte” = sata kaksikymmentä; pelkkä sata on {cem}' },
    'cem': { fi: 'sata', aa: 'SẼI', ipa: '[sẽj]', sl: 'lukusana' },
    'mucho': { kieli: 'es', fi: 'paljon (espanjaa!)', aa: 'MU-tso', ipa: '[ˈmutʃo]', sl: 'espanjan sana', huom: 'portugaliksi {muito}' },
    'neurótica': { fi: 'neuroottinen (feminiinisanan edellä)', aa: 'neu-RO-tsi-ka', ipa: '[newˈɾɔtʃikɐ]', sl: 'adjektiivi', huom: 'maskuliini ”neurótico”' },
    'motorista': { fi: 'kuljettaja, autoilija', aa: 'mo-to-RIS-ta', ipa: '[motoˈɾistɐ]', sl: 'substantiivi, maskuliini ja feminiini' },
    'panela': { fi: 'pannu, kattila', aa: 'pa-NE-la', ipa: '[paˈnɛlɐ]', sl: 'substantiivi, feminiini', huom: '”panela de pedra” = kivipannu' },
    'artesanato': { fi: 'käsityö, käsityötuotteet', aa: 'ah-te-za-NA-tu', ipa: '[ahtezaˈnatu]', sl: 'substantiivi, maskuliini' },
    'bons': { fi: 'hyviä (maskuliinin monikko)', aa: 'BÕS', ipa: '[bõs]', sl: 'adjektiivi', huom: 'yksikkö {bom}' },
    'tapetes': { fi: 'matot', aa: 'ta-PE-tsis', ipa: '[taˈpetʃis]', sl: 'substantiivi, maskuliini, monikko', huom: 'yksikkö {tapete}' },
    // muistilista ja sanasto
    'mais caro': { fi: 'kalliimpi', aa: 'mais KA-ru', ipa: '[majs ˈkaɾu]', sl: 'ilmaus' },
    'o mais barato': { fi: 'halvin', aa: 'u maiz ba-RA-tu', ipa: '[u majz baˈɾatu]', sl: 'ilmaus' },
    'tão bom quanto': { fi: 'yhtä hyvä kuin', aa: 'tãu bõ KUÃ-tu', ipa: '[tɐ̃w bõ ˈkwɐ̃tu]', sl: 'ilmaus' },
    'se vende': { fi: 'myydään', aa: 'si VẼ-di', ipa: '[si ˈvẽdʒi]', sl: 'ilmaus', huom: '{se}-passiivi' },
    'me ajuda': { fi: 'auttaa minua', aa: 'mi a-ZHU-da', ipa: '[mi aˈʒudɐ]', sl: 'ilmaus' },
    'eu gosto de': { fi: 'minä pidän jostakin', aa: 'EU GOS-tu di', ipa: '[ew ˈɡostu dʒi]', sl: 'ilmaus', huom: 'ei ”me gosta”' },
    'me levanto': { fi: 'minä nousen', aa: 'mi le-VÃ-tu', ipa: '[mi leˈvɐ̃tu]', sl: 'ilmaus' },
    'se deita': { fi: 'menee nukkumaan', aa: 'si DEI-ta', ipa: '[si ˈdejtɐ]', sl: 'ilmaus' },
    'vire à direita': { fi: 'käänny oikealle', aa: 'VI-ri a di-REI-ta', ipa: '[ˈviɾi a dʒiˈɾejtɐ]', sl: 'ilmaus' },
    'siga em frente': { fi: 'jatka suoraan eteenpäin', aa: 'SI-ga ẽi FRẼ-tsi', ipa: '[ˈsiɡɐ ẽj ˈfɾẽtʃi]', sl: 'ilmaus' },
    'tenha cuidado': { fi: 'ole varovainen', aa: 'TẼ-nja kui-DA-du', ipa: '[ˈtẽɲɐ kujˈdadu]', sl: 'ilmaus' },
  },

  html: `
<ul class="tavoitteet">
  <li>Kertaat oppitunnit 11–15: tori ja vertailu, vaatteet ja objektipronominit, päivärutiini, tie ja käskymuodot, koti ja joulu.</li>
  <li>Kuuntelet tarinan yhteenvedon ja uuden dialogin ja huomaat, mitä jo osaat.</li>
  <li>Teet sekaharjoituksia, joissa kaikki viisi oppituntia sekoittuvat.</li>
  <li>Arvioit itse, mitä osaat hyvin ja mitä kannattaa kerrata.</li>
</ul>
<p data-paikka="natal-bh">Joulun alla Belo Horizontessa on ehtinyt tapahtua paljon. Tämä oppitunti kokoaa asiat yhteen, ennen kuin kadun juhlat tuovat uusia tilanteita.</p>

<section class="osio" data-paikka="natal-bh">
  <h2>Tarina tähän asti</h2>
  <p class="ohje">Kuuntele kertojan yhteenveto ensin ilman suomennoksia. Kuinka paljon ymmärrät? Avaa sitten suomennokset ja tarkista.</p>
  <div class="kpl" data-nimi="Kuuntele yhteenveto">
    <p class="s" data-h="kertoja" data-fi="Belo Horizonte, joulukuu. Jay ja Maia viettävät joulun Maian perheen kanssa.">Belo Horizonte, dezembro. Jay e Maia passam o Natal com a família da Maia.</p>
    <p class="s" data-paikka="mercado-central" data-h="kertoja" data-fi="Mercado Centralissa Marta ostaa juustoa ja maitokaramellia. Siellä myydään kaikkea.">No Mercado Central, a Marta compra queijo e doce de leite. Lá se vende de tudo.</p>
    <p class="s" data-h="kertoja" data-fi="Jay tapaa Mirelan ja sanoo ”pero”. Portugaliksi se on ”mas”!">O Jay conhece a Mirela e diz “pero”. Em português é “mas”!</p>
    <p class="s" data-paikka="savassi" data-h="kertoja" data-fi="Savassissa Marina auttaa Jayta ostamaan kesävaatteita. Bermuda ei ole ”larga”, vaan pitkä!">Na Savassi, a Marina ajuda o Jay a comprar roupa de verão. A bermuda não é larga: é comprida!</p>
    <p class="s" data-paikka="bh-bairro" data-h="kertoja" data-fi="Kotona Walker tekee pilatesta, Anderson jakaa kirjeet ja Marta juttelee naapureiden kanssa.">Em casa, o Walker faz pilates, o Anderson entrega as cartas e a Marta conversa com os vizinhos.</p>
    <p class="s" data-paikka="praca-da-liberdade" data-h="kertoja" data-fi="Keskustassa Jay eksyy. Mateus sanoo: ”Käänny oikealle ja jatka suoraan.”">No centro, o Jay se perde. O Mateus diz: “Vire à direita e siga em frente.”</p>
    <p class="s" data-paikka="natal-bh" data-h="kertoja" data-fi="Jouluyönä kaikki auttavat: ”Tuo, laita, tee!” Jay oppii, ettei ”cena” ole ”ceia”.">Na noite de Natal, todo mundo ajuda: “Traga, ponha, faça!” O Jay aprende que “cena” não é “ceia”.</p>
    <p class="s" data-h="kertoja" data-fi="Nyt katu valmistelee juhlaa. Walker aikoo soittaa huuliharppua. Jay lupaa: ”Juon vähän.” Maia ei usko.">Agora a rua prepara uma festa. O Walker vai tocar gaita. O Jay promete: “Vou beber pouco.” A Maia não acredita.</p>
  </div>
</section>

<section class="osio" data-paikka="savassi">
  <h2>Uusi dialogi: Um presente para a Purjo</h2>
  <p class="ohje">Joulun jälkeen Jay, Maia ja Mateus etsivät lahjaa Jayn äidille Purjolle, joka muuttaa uuteen asuntoon Helsingissä. Kuuntele ja etsi viisi oppituntia: vertailu, <span class="pt">se</span>-passiivi, objektipronominit, refleksiiviverbi ja käskymuoto. Roolileikissä puhut Jayn repliikit.</p>
  <div class="kpl" data-nimi="Kuuntele dialogi">
    <p class="s" data-h="kertoja" data-fi="26. joulukuuta. Jay, Maia ja Mateus etsivät lahjaa Purjolle, Jayn äidille.">26 de dezembro. Jay, Maia e Mateus procuram um presente para a Purjo, a mãe do Jay.</p>
    <p class="s" data-h="kertoja" data-fi="Hän saa pian uuden asunnon Helsingissä.">Ela vai ter um apartamento novo em Helsinque.</p>
    <p class="s" data-h="mateus" data-fi="Huomenta! Minä nousen viideltä, joten olen jo valmis. Mennään!">Bom dia! Eu me levanto às cinco, então já estou pronto. Vamos!</p>
    <p class="s" data-h="jay" data-fi="Viideltäkö? Minä nousen kymmeneltä! Mistä me ostamme lahjan?">Às cinco? Eu me levanto às dez! Onde a gente compra o presente?</p>
    <p class="s" data-h="maia" data-fi="Savassissa myydään erittäin hyvää käsityötä. Mateus, käänny oikealle seuraavalla kadulla.">Na Savassi se vende artesanato muito bom. Mateus, vire à direita na próxima rua.</p>
    <p class="s" data-h="mateus" data-fi="Tiedän reitin, Maia. Mutta kuulen sinut kyllä.">Eu conheço o caminho, Maia. Mas eu te ouço.</p>
    <p class="s" data-h="kertoja" data-fi="Kauppa on pieni, mutta siellä on kaikkea: pöytiä, tuoleja, mattoja ja tauluja.">A loja é pequena, mas tem de tudo: mesa, cadeira, tapete e quadro.</p>
    <p class="s" data-h="jay" data-fi="Katso tätä kivipannua! Minä olen geologi, ja minä pidän kivestä.">Olha esta panela de pedra! Eu sou geólogo, eu gosto de pedra.</p>
    <p class="s" data-h="maia" data-fi="Mutta se on kalliimpi kuin matto. Ja matto on kauniimpi.">Mas ela é mais cara do que o tapete. E o tapete é mais bonito.</p>
    <p class="s" data-h="jay" data-fi="Tämä matto on mucho kallis! (virhe)">Este tapete é mucho caro!</p>
    <p class="s" data-h="maia" data-fi="Muito, Jay. ”Muito caro”. Entä pannu? Paljonko se maksaa?">Muito, Jay. “Muito caro”. E a panela? Quanto custa?</p>
    <p class="s" data-h="jay" data-fi="Sata kaksikymmentä realia.">Cento e vinte reais.</p>
    <p class="s" data-h="mateus" data-fi="Minusta pannu on parempi. Purjo laittaa ruokaa, eikö niin?">Eu acho a panela melhor. A Purjo cozinha, né?</p>
    <p class="s" data-h="jay" data-fi="Joka päivä! Mutta hän on neuroottinen: jos on ongelma, hän soittaa minulle kuudelta aamulla.">Todo dia! Mas ela é neurótica: se tem um problema, ela me liga às seis da manhã.</p>
    <p class="s" data-h="maia" data-fi="Osta siis pannu, Jay. Äläkä unohda kirjoittaa korttia!">Então compre a panela, Jay. E não esqueça de escrever o cartão!</p>
    <p class="s" data-h="jay" data-fi="Hyvä on. Mateus, autatko minua viemään sen?">Tá bom. Mateus, você me ajuda a levar?</p>
    <p class="s" data-h="mateus" data-fi="Autan kyllä. Laita pannu autoon. Ajan hitaasti, en riko mitään!">Ajudo, sim. Ponha a panela no carro. Eu dirijo devagar, não vou quebrar nada!</p>
    <p class="s" data-h="jay" data-fi="Kiitos! Sinä olet Belo Horizonten paras kuljettaja!">Obrigado! Você é o melhor motorista de Belo Horizonte!</p>
  </div>
</section>

<section class="osio" data-paikka="mercado-central">
  <h2>Televisio: o anúncio da Mirela</h2>
  <p class="ohje">Illalla perhe katsoo televisiota, ja mainoskatkolla tulee tuttu kasvo: Mirela mainostaa ravintolaansa! Mainos kertaa jaksot 11–15: vertailun (<span class="pt">mais gostoso do que</span>), <span class="pt">se</span>-passiivin ja käskymuodot. Katso ensin ilman tekstitystä.</p>
  <div class="tv" data-h="mirela" data-kanava="TV Minas · Intervalo comercial" data-nauha="Restaurante da Mirela · perto do Mercado Central · Feijão tropeiro R$ 25 · Pão de queijo R$ 2 · Chope R$ 5">
    <div data-kortti="Feijão tropeiro" data-saa="🍲" data-lampo="R$ 25"></div>
    <div data-kortti="Pão de queijo" data-saa="🧀" data-lampo="R$ 2"></div>
    <div data-kortti="Chope" data-saa="🍺" data-lampo="R$ 5"></div>
    <p data-fi="Onko nälkä? Tule Mirelan ravintolaan!">Está com fome? Venha ao Restaurante da Mirela!</p>
    <p data-kortti="Feijão tropeiro" data-fi="Täällä syödään Belo Horizonten paras feijão tropeiro!">Aqui se come o melhor feijão tropeiro de Belo Horizonte!</p>
    <p data-kortti="Pão de queijo" data-fi="Meidän juustoleipämme on herkullisempaa kuin isoäitisi!">O nosso pão de queijo é mais gostoso do que o da sua avó!</p>
    <p data-kortti="Pão de queijo" data-fi="Ja se on halvempaa kuin ostoskeskuksessa: vain kaksi realia!">E é mais barato do que no shopping: só dois reais!</p>
    <p data-kortti="Chope" data-fi="Keskiviikkona tuoppi maksaa vain viisi realia.">Na quarta-feira, o chope custa só cinco reais.</p>
    <p data-fi="Tuo perhe! Tuo ystävät! Mirelan ravintola, Mercado Centralin lähellä.">Traga a família! Traga os amigos! Restaurante da Mirela, perto do Mercado Central.</p>
  </div>
</section>

<section class="osio">
  <h2>Muistilista</h2>

  <h3>Oppitunti 11: vertailu ja se-passiivi</h3>
  <table class="taivutus">
    <tr><td><span class="pt">mais / menos</span> + adj. + <span class="pt">(do) que</span></td><td><span class="pt">mais caro do que</span> · <span class="pt">menos caro que</span></td></tr>
    <tr><td><span class="pt">tão</span> + adj. + <span class="pt">quanto</span></td><td><span class="pt">tão bom quanto</span></td></tr>
    <tr><td><span class="pt">bom, ruim, grande, pequeno</span></td><td><span class="pt">melhor, pior, maior, menor</span></td></tr>
    <tr><td><span class="pt">o / a mais</span> + adj. (superlatiivi)</td><td><span class="pt">o mais barato do mercado</span></td></tr>
    <tr><td><span class="pt">se</span> + hän-muoto (passiivi)</td><td><span class="pt">Aqui se vende queijo.</span> · <span class="pt">Como se diz…?</span></td></tr>
  </table>

  <h3>Oppitunti 12: objektipronominit ja vaatteet</h3>
  <table class="taivutus">
    <tr><td><span class="pt">me, te, nos</span> + verbi</td><td><span class="pt">Marina me ajuda.</span> · <span class="pt">Eu te vejo.</span></td></tr>
    <tr><td>hän / ne (puhekieli)</td><td><span class="pt">Eu vejo ela.</span> (kirjakieli: <span class="pt">Eu a vejo.</span>)</td></tr>
    <tr><td>epäsuora kohde</td><td><span class="pt">Eu dou pra ela.</span> · <span class="pt">Me dá uma camiseta.</span></td></tr>
    <tr><td><span class="pt">gostar de</span></td><td><span class="pt">Eu gosto do azul.</span> (ei <span class="pt">me gosta</span>)</td></tr>
    <tr><td><span class="pt">comprido</span> ≠ <span class="pt">largo</span></td><td>pitkä ≠ väljä (espanjan <i>largo</i> = pitkä)</td></tr>
  </table>

  <h3>Oppitunti 13: refleksiiviverbit ja päivärutiini</h3>
  <table class="taivutus">
    <tr><td><span class="pt">eu me</span>, <span class="pt">você / ele / a gente se</span>, <span class="pt">nós nos</span></td><td><span class="pt">Eu me levanto às seis.</span> · <span class="pt">A gente se deita às dez.</span></td></tr>
    <tr><td><span class="pt">acordar</span> (herätä) ≠ <span class="pt">lembrar-se</span> (muistaa)</td><td><span class="pt">Eu me lembro de você.</span></td></tr>
    <tr><td>kellonaika ja toistuvuus</td><td><span class="pt">às sete</span> · <span class="pt">todo dia</span> · <span class="pt">três vezes por semana</span></td></tr>
  </table>

  <h3>Oppitunnit 14 ja 15: käskymuodot</h3>
  <table class="taivutus">
    <tr><td>eu-muoto − o + <b>e</b> (-ar) / <b>a</b> (-er, -ir)</td><td><span class="pt">vire, fale, espere</span> · <span class="pt">coma, abra, siga</span></td></tr>
    <tr><td>kirjoitusmuutokset</td><td><span class="pt">fique, pegue, comece</span></td></tr>
    <tr><td>epäsäännöllinen eu-muoto</td><td><span class="pt">faça, diga, traga, ponha, venha, tenha, veja</span></td></tr>
    <tr><td>kuusi poikkeusta</td><td><span class="pt">seja, esteja, vá, dê, saiba, queira</span></td></tr>
    <tr><td>puhekieli</td><td><span class="pt">vira, segue, faz, traz, vem, vai</span></td></tr>
  </table>
</section>

<section class="osio">
  <h2>Sanojen kertaus</h2>
  <div class="teema" data-otsikko="Tori ja ruoka" data-sanat="mercado,queijo,doce de leite,feijão,frango,banana,laranja,quilo,preço,barato,promoção,gostoso"></div>
  <div class="teema" data-otsikko="Vaatteet ja värit" data-sanat="camiseta,calça,bermuda,vestido,sapato,chapéu,preto,branco,vermelho,amarelo,azul,tamanho,provador"></div>
  <div class="teema" data-otsikko="Päivä ja harrastukset" data-sanat="acordar,levantar-se,tomar banho,vestir-se,almoçar,deitar-se,cedo,tarde,pescar,tocar gaita,vizinho,carta"></div>
  <div class="teema" data-otsikko="Tie ja kaupunki" data-sanat="direita,esquerda,em frente,esquina,quarteirão,praça,avenida,farmácia,perto de,longe de,atravessar,sinal"></div>
  <div class="teema" data-otsikko="Koti ja joulu" data-sanat="sala,quarto,varanda,mesa,cadeira,sofá,tapete,geladeira,ceia,presente,peru,farofa,feliz natal"></div>
</section>

<section class="osio">
  <h2>Ääntämisen kertaus</h2>
  <p>Kuuntele ja sano perässä. Kaikki sanat ovat oppitunneilta 11–15.</p>
  <ul class="esim">
    <li class="s" data-fi="painomerkki ja nasaali">feijão</li>
    <li class="s" data-fi="ç ja akuutti">açúcar</li>
    <li class="s" data-fi="r alussa ja kahden vokaalin välissä">roxo</li>
    <li class="s" data-fi="d + i-äänne ja l lopussa">tamanho</li>
    <li class="s" data-fi="lh ja ch">chinelo</li>
    <li class="s" data-fi="nasaali ja diftongi">mineirão</li>
    <li class="s" data-fi="kysymys: ääni nousee">Ele vem?</li>
    <li class="s" data-fi="huudahdus">Feliz Natal!</li>
  </ul>
</section>

<section class="osio" data-ei-sivulle>
  <h2>Harjoitukset</h2>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>Kuvatehtävä: Mirelan mainos</h3>
    <p class="ohje">Katso Mirelan TV-mainos (yllä) ja valitse oikea vastaus.</p>
    <div class="valinta" data-oikea="o pão de queijo">
      <p class="kysymys"><span class="ryhma" data-hahmot="mirela"></span> O que é mais gostoso do que o da avó?</p>
      <div class="vaihtoehdot"><button type="button">o feijão tropeiro</button><button type="button">o pão de queijo</button><button type="button">o chope</button></div>
    </div>
    <div class="valinta" data-oikea="cinco reais">
      <p class="kysymys">Quanto custa o chope na quarta-feira?</p>
      <div class="vaihtoehdot"><button type="button">dois reais</button><button type="button">cinco reais</button><button type="button">vinte e cinco reais</button></div>
    </div>
    <div class="valinta" data-oikea="o feijão tropeiro">
      <p class="kysymys">O que se come de melhor no restaurante?</p>
      <div class="vaihtoehdot"><button type="button">o feijão tropeiro</button><button type="button">a pizza</button><button type="button">o peixe</button></div>
    </div>
    <div class="valinta" data-oikea="Traga">
      <p class="kysymys"><span class="ryhma" data-hahmot="mirela"></span> ___ a família!</p>
      <div class="vaihtoehdot"><button type="button">Traz</button><button type="button">Traga</button><button type="button">Trazer</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>1. Sekakertaus: täydennä</h3>
    <p class="ohje">Jokaisessa lauseessa on yksi aukko oppitunneilta 11–15.</p>
    <div class="aukot">
      <p>O queijo é <span class="aukko" data-oikea="mais"></span> caro do que o café.</p>
      <p>Este café é <span class="aukko" data-oikea="tão"></span> bom quanto aquele.</p>
      <p>Aqui <span class="aukko" data-oikea="se"></span> vende queijo.</p>
      <p>A Marina <span class="aukko" data-oikea="te"></span> ajuda. (sinua)</p>
      <p>Eu quero a bermuda. Eu quero <span class="aukko" data-oikea="ela"></span>. (puhekieli)</p>
      <p>Eu <span class="aukko" data-oikea="me"></span> levanto às seis.</p>
      <p>O Walker <span class="aukko" data-oikea="se"></span> deita às dez.</p>
      <p><span class="aukko" data-oikea="vire"></span> à direita. (virar)</p>
      <p><span class="aukko" data-oikea="ponha"></span> os pratos na mesa. (pôr)</p>
      <p><span class="aukko" data-oikea="tenha"></span> cuidado! (ter)</p>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>2. Yhdistä sanat</h3>
    <ul class="yhdista">
      <li data-pari="kortteli">o quarteirão</li>
      <li data-pari="tarjous">a promoção</li>
      <li data-pari="sovituskoppi">o provador</li>
      <li data-pari="naapuri">o vizinho</li>
      <li data-pari="jääkaappi">a geladeira</li>
      <li data-pari="jouluillallinen">a ceia</li>
      <li data-pari="matto">o tapete</li>
      <li data-pari="kadunkulma">a esquina</li>
    </ul>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>3. Valitse oikea lause</h3>
    <div class="valinta" data-oikea="melhor">
      <p class="kysymys">Tämä juusto on parempi: Este queijo é ___.</p>
      <div class="vaihtoehdot"><button type="button">mais bom</button><button type="button">melhor</button><button type="button">mais melhor</button></div>
    </div>
    <div class="valinta" data-oikea="Aqui se fala português.">
      <p class="kysymys">Täällä puhutaan portugalia.</p>
      <div class="vaihtoehdot"><button type="button">Aqui falo português.</button><button type="button">Aqui se fala português.</button><button type="button">Aqui se falo português.</button></div>
    </div>
    <div class="valinta" data-oikea="Eu não me levanto cedo.">
      <p class="kysymys">En nouse aikaisin.</p>
      <div class="vaihtoehdot"><button type="button">Eu me não levanto cedo.</button><button type="button">Eu não me levanto cedo.</button><button type="button">Eu não levanto me cedo.</button></div>
    </div>
    <div class="valinta" data-oikea="Onde fica a farmácia?">
      <p class="kysymys">Missä apteekki on?</p>
      <div class="vaihtoehdot"><button type="button">Onde queda a farmácia?</button><button type="button">Onde fica a farmácia?</button></div>
    </div>
    <div class="valinta" data-oikea="Traga os pratos.">
      <p class="kysymys">Tuo lautaset.</p>
      <div class="vaihtoehdot"><button type="button">Trago os pratos.</button><button type="button">Traga os pratos.</button><button type="button">Trague os pratos.</button></div>
    </div>
    <div class="valinta" data-oikea="comprida">
      <p class="kysymys">Bermuda yltää nilkkoihin: ela é muito ___.</p>
      <div class="vaihtoehdot"><button type="button">larga</button><button type="button">comprida</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>4. Mikä ei kuulu joukkoon?</h3>
    <div class="valinta" data-oikea="queijo">
      <p class="kysymys">Vaatteet: camiseta, calça, queijo, vestido</p>
      <div class="vaihtoehdot"><button type="button">camiseta</button><button type="button">calça</button><button type="button">queijo</button><button type="button">vestido</button></div>
    </div>
    <div class="valinta" data-oikea="esquerda">
      <p class="kysymys">Huonekalut: mesa, cadeira, esquerda, sofá</p>
      <div class="vaihtoehdot"><button type="button">mesa</button><button type="button">cadeira</button><button type="button">esquerda</button><button type="button">sofá</button></div>
    </div>
    <div class="valinta" data-oikea="amarelo">
      <p class="kysymys">Päivärutiini: acordar, levantar-se, amarelo, dormir</p>
      <div class="vaihtoehdot"><button type="button">acordar</button><button type="button">levantar-se</button><button type="button">amarelo</button><button type="button">dormir</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>5. Kuuntele ja valitse merkitys</h3>
    <p class="ohje">Paina ▶ ja valitse, mitä kuulit.</p>
    <div class="valinta" data-kuuntele="Siga em frente e vire à esquerda." data-oikea="Jatka suoraan ja käänny vasemmalle.">
      <p class="kysymys">Mitä kuulit?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">Jatka suoraan ja käänny vasemmalle.</button><button type="button">Käänny oikealle ja pysähdy.</button><button type="button">Odota kadunkulmassa.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Este tapete é mais caro do que aquele." data-oikea="Tämä matto on kalliimpi kuin tuo.">
      <p class="kysymys">Mitä kuulit?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">Tämä matto on halvempi kuin tuo.</button><button type="button">Tämä matto on kalliimpi kuin tuo.</button><button type="button">Tämä matto on yhtä kallis kuin tuo.</button></div>
    </div>
    <div class="valinta" data-kuuntele="Eu me levanto às sete e tomo café." data-oikea="Nousen seitsemältä ja juon kahvia.">
      <p class="kysymys">Mitä kuulit?</p>
      <div class="vaihtoehdot" lang="fi"><button type="button">Menen nukkumaan seitsemältä.</button><button type="button">Nousen seitsemältä ja juon kahvia.</button><button type="button">Nousen kuudelta ja lähden töihin.</button></div>
    </div>
  </div>

  <div class="tehtava" data-tyyppi="kuuntelu">
    <h3>6. Sanelu</h3>
    <p class="ohje">Kuuntele ja kirjoita lause.</p>
    <div class="sanelu" data-puhu="Aqui se vende de tudo."></div>
    <div class="sanelu" data-puhu="A Marina me ajuda."></div>
    <div class="sanelu" data-puhu="Vire à direita na esquina."></div>
    <div class="sanelu" data-puhu="Feliz Natal para todos!"></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>7. Käännä portugaliksi</h3>
    <div class="kaanna"><p class="fi">Tämä paita on halvempi kuin tuo.</p><p class="s" data-fi="Tämä paita on halvempi kuin tuo.">Esta camisa é mais barata do que aquela.</p></div>
    <div class="kaanna"><p class="fi">Täällä myydään hyviä mattoja.</p><p class="s" data-fi="Täällä myydään hyviä mattoja.">Aqui se vendem bons tapetes.</p></div>
    <div class="kaanna"><p class="fi">Voitko auttaa minua? Haluan sen.</p><p class="s" data-fi="Voitko auttaa minua? Haluan sen.">Pode me ajudar? Eu quero ela.</p></div>
    <div class="kaanna"><p class="fi">Mihin aikaan sinä nouset?</p><p class="s" data-fi="Mihin aikaan sinä nouset?">A que horas você se levanta?</p></div>
    <div class="kaanna"><p class="fi">Käänny oikealle ja jatka suoraan kaksi korttelia.</p><p class="s" data-fi="Käänny oikealle ja jatka suoraan kaksi korttelia.">Vire à direita e siga em frente por dois quarteirões.</p></div>
    <div class="kaanna"><p class="fi">Tule tänne ja tuo tuolit.</p><p class="s" data-fi="Tule tänne ja tuo tuolit.">Venha cá e traga as cadeiras.</p></div>
  </div>

  <div class="tehtava" data-tyyppi="kirjoitus">
    <h3>8. Mikä tavu on painollinen?</h3>
    <p class="ohje">Napauta painollista tavua.</p>
    <p><span class="paino" data-tavut="fei|jão" data-oikea="2"></span> <span class="paino" data-tavut="ca|mi|se|ta" data-oikea="3"></span> <span class="paino" data-tavut="a|ve|ni|da" data-oikea="3"></span> <span class="paino" data-tavut="ge|la|dei|ra" data-oikea="3"></span></p>
    <p><span class="paino" data-tavut="vi|zi|nho" data-oikea="2"></span> <span class="paino" data-tavut="tre|ze" data-oikea="1"></span> <span class="paino" data-tavut="pa|ne|to|ne" data-oikea="3"></span> <span class="paino" data-tavut="far|má|cia" data-oikea="2"></span></p>
  </div>

  <div class="tehtava" data-tyyppi="keskustelu">
    <h3>9. Lue ja vastaa</h3>
    <p class="ohje">Vastaa kysymyksiin tarinan yhteenvedon ja dialogin perusteella. Sano ensin vastaus ääneen.</p>
    <details class="vastaus">
      <summary lang="pt-BR">Onde a Marta compra queijo e doce de leite?</summary>
      <p class="s" data-fi="Hän ostaa ne Mercado Centralissa.">Ela compra no Mercado Central.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Quem ajuda o Jay a comprar roupa de verão?</summary>
      <p class="s" data-fi="Marina auttaa häntä.">A Marina ajuda ele.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que o Anderson faz todo dia?</summary>
      <p class="s" data-fi="Hän jakaa naapureiden kirjeet.">Ele entrega as cartas dos vizinhos.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">Quem explica o caminho ao Jay no centro?</summary>
      <p class="s" data-fi="Mateus selittää hänelle reitin.">O Mateus explica o caminho pra ele.</p>
    </details>
    <details class="vastaus">
      <summary lang="pt-BR">O que a Maia e o Jay compram para a Purjo?</summary>
      <p class="s" data-fi="He ostavat kivipannun.">Eles compram uma panela de pedra.</p>
    </details>
  </div>

  <div class="kotitehtava" data-id="k03">
    <h3>Kotitehtävä</h3>
    <div class="dokumentti kalenteri oma" data-tallenna="k03-mainos" lang="pt-BR">
      <div class="kal-yla"><b>O meu anúncio</b><small>kirjoita mainos omalle kahvilalle tai kaupalle</small></div>
      <div class="kal-rivit">
        <label>Nome <input name="nimi" placeholder="Café do Jay"></label>
        <label>Aqui se… <input name="passiivi" placeholder="Aqui se vende o melhor café de Helsinque!"></label>
        <label>Mais… do que… <input name="vertailu" placeholder="O nosso café é mais barato do que o do shopping."></label>
        <label>Venha! / Traga! <input name="kasky" placeholder="Venha hoje! Traga os amigos!"></label>
        <label>Onde fica? <input name="paikka" placeholder="Fica perto da estação de metrô."></label>
      </div>
    </div>
    <p>Kirjoita Jayn nimissä lyhyt viesti Purjolle (6–8 lausetta). Kerro, mitä teit joulun aikana Belo Horizontessa. Käytä ainakin yhtä vertailua, yhtä <span class="pt">se</span>-passiivia, yhtä refleksiiviverbiä ja kahta käskymuotoa. Sano viesti lopuksi ääneen.</p>
    <details class="malli"><summary>Mallivastaus</summary>
      <p class="s" data-fi="Hei, äiti! Hyvää joulua!">Oi, mãe! Feliz Natal!</p>
      <p class="s" data-fi="Täällä on kuuma, ja minä nousen aikaisin.">Aqui faz calor e eu me levanto cedo.</p>
      <p class="s" data-fi="Mercado Centralissa myydään kaikkea.">No Mercado Central se vende de tudo.</p>
      <p class="s" data-fi="Brasilian juusto on parempi kuin suomalainen!">O queijo do Brasil é melhor do que o queijo da Finlândia!</p>
      <p class="s" data-fi="Aion ostaa sinulle kivipannun. Soita minulle sitten, selvä?">Vou comprar uma panela de pedra pra você. Me ligue depois, tá?</p>
      <p class="s" data-fi="Ole hyvä ja tule kesällä käymään!">Venha nos visitar no verão!</p>
    </details>
  </div>

  <h2>Itsearvio</h2>
  <p class="ohje">Merkitse jokaisesta kohdasta, kuinka hyvin osaat. Arvio tallentuu tähän selaimeen. Kertaa ne kohdat, joissa vastasit ”En vielä” tai ”Vähän”.</p>
  <ul class="itsearvio" data-id="k03">
    <li>Osaan ostaa ruokaa torilta ja kysyä hintaa.</li>
    <li>Osaan vertailla: mais … do que, tão … quanto, melhor, pior.</li>
    <li>Osaan sanoa, mitä jossakin myydään tai puhutaan (se vende).</li>
    <li>Osaan nimetä vaatteet ja värit ja sanoa, mikä sopii tai on liian tiukka.</li>
    <li>Osaan käyttää objektipronomineja (me, te, nos; puheessa ele, ela).</li>
    <li>Osaan kertoa päivärutiinistani refleksiiviverbeillä (eu me levanto).</li>
    <li>Osaan kertoa, mihin aikaan ja kuinka usein teen asioita.</li>
    <li>Osaan kysyä tietä ja neuvoa suuntia.</li>
    <li>Osaan muodostaa säännölliset käskymuodot (vire, siga, pare).</li>
    <li>Osaan epäsäännölliset käskymuodot (faça, traga, venha, seja, vá, dê).</li>
    <li>Osaan nimetä kodin huoneet ja huonekalut.</li>
    <li>Osaan toivottaa hyvää joulua ja kertoa jouluruoista.</li>
    <li>Osaan lukea painomerkit ja kuulla, onko lause väite vai kysymys.</li>
  </ul>
</section>
`
});
