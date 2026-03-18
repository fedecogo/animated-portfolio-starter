import "./cavalli.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const Cavalli = () => {
  return (
    <section className="cavalli" id="cavalli">
      <div className="wrapper">

        {/* ── INTRO BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="introBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="titleColumn">
            <motion.span className="sectionLabel" variants={fadeUpVariants}>
              Fisica — 8.1
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Cavalli: cosa sono davvero
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Tutti parlano di cavalli. "Quanti CV fa?" è la prima
              domanda che si fa su una moto. Ma pochissimi sanno
              cosa sia davvero un cavallo vapore — non come parola,
              ma come grandezza fisica. Un CV non è una sensazione,
              non è un'impressione di velocità: è una quantità precisa
              di energia trasferita in un tempo preciso. Capire
              cosa misura davvero il CV — e soprattutto cosa non misura —
              cambia il modo in cui si legge una scheda tecnica
              e si valuta un motore.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il motore a 2 tempi è il campione assoluto di potenza
              specifica tra i motori a combustione interna stradali
              e racing. Un 125cc a 2 tempi da GP degli anni '90 erogava
              50 – 55 CV a 12.000 giri/min — 400 – 440 CV per litro
              di cilindrata. Un motore 4 tempi stradale di pari
              cilindrata ne fa al massimo 15 – 20. Quella differenza
              non è magia: è fisica applicata con precisione assoluta.
              Questo capitolo spiega perché.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">I quattro concetti fondamentali</span>
              <h3>Potenza, coppia, regime e unità di misura</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Potenza — la velocità con cui un motore trasferisce energia; si misura in CV, HP o kW</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Coppia — la forza torcente sull'albero motore; si misura in Nm e determina l'accelerazione</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Regime — i giri al minuto (rpm) a cui la potenza e la coppia vengono erogate dal motore</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Curva di potenza — il grafico che mostra come potenza e coppia variano al variare del regime</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER 1 ────────────────────────────────────────── */}
        <motion.div
          className="visualBlock"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — curva di potenza e coppia di un 125cc 2T a 12.000 rpm</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Curva di potenza 2T</span>
            <p>
              La curva di potenza tipica di un 125cc a 2 tempi da
              competizione: la potenza sale rapidamente dopo i
              9.000 rpm, raggiunge il picco tra 11.500 e 12.500 rpm
              e poi crolla bruscamente. La curva di coppia precede
              sempre quella di potenza di qualche centinaio di giri —
              il picco di coppia si trova sempre a un regime inferiore
              al picco di potenza. Questo è il grafico che ogni pilota
              di 2T deve saper leggere per usare la moto al meglio.
            </p>
          </div>
        </motion.div>

        {/* ── FISICA BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="fisicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="fisicaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">La fisica</span>
            <h3>P = M × ω — la formula che spiega tutto quello che senti guidando</h3>
            <p>
              La potenza non è una grandezza misteriosa. È il prodotto
              di due grandezze ben precise: la coppia (M) e la velocità
              angolare (ω). Questa formula semplice nasconde tutto
              quello che distingue un motore da un altro — e spiega
              perché il 2 tempi riesce a erogare più potenza del 4 tempi
              a parità di cilindrata.
            </p>
          </motion.div>

          <motion.div className="fisicaGrid" variants={cardVariants}>

            <div className="fisicaCard fisicaFormula">
              <div className="fisicaCardTop">
                <span className="fisicaBadge badgeFormula">Formula</span>
                <span className="fisicaSub">Potenza</span>
              </div>
              <h4>P = M × ω — potenza è coppia per velocità angolare</h4>
              <p>
                La potenza meccanica si calcola moltiplicando la coppia
                (M, in Nm) per la velocità angolare dell'albero (ω,
                in rad/s). In forma più pratica: P [CV] = M [Nm] × n
                [rpm] / 7.024. Da questa formula emerge la relazione
                fondamentale: per ottenere più potenza si deve aumentare
                la coppia, il regime, o entrambi. Il 2 tempi sceglie
                la strada del regime alto — fa meno coppia del 4 tempi
                equivalente, ma la moltiplica per un numero di giri
                molto più elevato, ottenendo una potenza superiore.
              </p>
            </div>

            <div className="fisicaCard fisicaUnita">
              <div className="fisicaCardTop">
                <span className="fisicaBadge badgeDefinizione">Definizione</span>
                <span className="fisicaSub">Unità di misura</span>
              </div>
              <h4>CV, HP e kW — tre nomi per la stessa grandezza</h4>
              <p>
                Il CV (cavallo vapore metrico) è definito come la
                potenza necessaria per sollevare 75 kg di 1 metro
                in 1 secondo: 1 CV = 75 kgm/s = 735,5 W. L'HP
                (horse power anglosassone, usato su tutte le moto
                americane e giapponesi) è leggermente diverso:
                1 HP = 550 ft·lbf/s = 745,7 W. La differenza è
                dell'1,4% — quasi trascurabile, ma sufficiente
                a creare confusione quando si confrontano schede
                tecniche europee e americane. Il kW è l'unità SI:
                1 CV = 0,7355 kW; 1 HP = 0,7457 kW. Una moto da
                30 CV fa 22,1 kW oppure 29,6 HP.
              </p>
            </div>

            <div className="fisicaCard fisicaSpecifica">
              <div className="fisicaCardTop">
                <span className="fisicaBadge badgeFatto">Fatto</span>
                <span className="fisicaSub">Potenza specifica</span>
              </div>
              <h4>CV/cc — il parametro che rivela il vero valore del motore</h4>
              <p>
                La potenza specifica (CV per litro di cilindrata)
                è il parametro che permette di confrontare motori
                di cilindrata diversa su base equa. Un motore 4 tempi
                stradale da 1.000 cc che fa 100 CV ha una potenza
                specifica di 100 CV/litro — rispettabile. Un 125cc
                2 tempi da competizione che fa 50 CV ha una potenza
                specifica di 400 CV/litro — quattro volte tanto.
                Questo numero rivela perché il 2 tempi è così
                performante: ogni centimetro cubo di cilindrata
                brucia carburante a ogni giro dell'albero motore,
                non uno su due come nel 4 tempi. Doppia frequenza
                di combustione a parità di cilindrata e regime.
              </p>
            </div>

            <div className="fisicaCard fisicaRendimento">
              <div className="fisicaCardTop">
                <span className="fisicaBadge badgeFormula">Formula</span>
                <span className="fisicaSub">Rendimento</span>
              </div>
              <h4>Potenza indicata vs potenza effettiva — cosa si perde</h4>
              <p>
                La potenza indicata (P_i) è quella teorica calcolata
                dalla pressione media effettiva nel cilindro per la
                cilindrata e il regime. La potenza effettiva (P_e)
                è quella realmente disponibile sull'albero motore
                al netto delle perdite meccaniche: attrito dei
                cuscinetti, pompaggio dei gas, azionamento della
                pompa acqua e del generatore. Il rendimento meccanico
                tipico è η_m = P_e / P_i = 0,80 – 0,88 nei motori
                a 2 tempi di qualità — tra il 12% e il 20% della
                potenza teorica se ne va in attriti interni
                prima di raggiungere l'albero.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER 2 ────────────────────────────────────────── */}
        <motion.div
          className="visualBlock visualBlockAlt"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="visualCaption">
            <span className="captionTag">Coppia vs Potenza</span>
            <p>
              Il grafico sovrapposto di coppia e potenza mostra
              la relazione matematica tra le due grandezze: la potenza
              è zero a 0 rpm (anche se la coppia può essere massima),
              cresce con il regime e raggiunge il picco sempre a un
              regime superiore rispetto al picco di coppia. Nell'area
              tra picco di coppia e picco di potenza si trovano i
              regimi di utilizzo ottimale del motore — la "banda
              di potenza" del 2 tempi che ogni pilota impara
              a riconoscere a orecchio.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — grafico sovrapposto coppia e potenza 2T con area banda evidenziata</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── CURVA BLOCK ──────────────────────────────────────────────────── */}
        <motion.div
          className="curvaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="curvaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Curva di potenza</span>
            <h3>Banda stretta, banda larga, coppia ai bassi — i tre profili del 2T</h3>
            <p>
              Non tutti i motori a 2 tempi erogano la potenza allo
              stesso modo. La forma della curva di potenza è una
              scelta progettuale precisa — si può avere un picco
              altissimo con una banda strettissima, oppure un picco
              più basso ma con potenza distribuita su un range
              di regime molto più ampio. Ogni scelta ha conseguenze
              precise sulla guidabilità e sulla tecnica di pilotaggio.
            </p>
          </motion.div>

          <motion.div className="curvaGrid" variants={cardVariants}>

            <div className="curvaCard">
              <div className="curvaVisual curvaSpiked">
                <span className="curvaRatio">Banda ≤ 3.000 rpm</span>
                <span className="curvaEx">Racing puro</span>
              </div>
              <h4>Curva a picco — massima potenza, zero perdono</h4>
              <p>
                I motori da GP e da cross ad alto livello hanno curve
                di potenza con un picco acutissimo e una banda di
                potenza stretta — spesso meno di 3.000 rpm tra il
                punto in cui il motore inizia a "tirare" e il punto
                in cui "cade". Fuori da quella finestra il motore
                è praticamente morto. La potenza di picco è massima —
                un 125 GP anni '90 faceva 50 – 55 CV a 12.000 rpm —
                ma richiede una tecnica di guida precisa per mantenersi
                sempre nella banda. Il cambio va usato spesso e con
                timing perfetto. È la configurazione che richiede
                il pilota più esperto.
              </p>
            </div>

            <div className="curvaCard">
              <div className="curvaVisual curvaLarga">
                <span className="curvaRatio">Banda ≥ 6.000 rpm</span>
                <span className="curvaEx">Modern 2T</span>
              </div>
              <h4>Curva larga — meno picco, più guidabilità</h4>
              <p>
                Le moto a 2 tempi moderne da enduro e cross amatoriale
                (KTM EXC, Husqvarna TE, Beta RR) hanno curve di
                potenza deliberatamente allargate rispetto ai motori
                racing puri. La valvola di scarico (RAVE, PV, TPS)
                è programmata per allargare la banda modificando
                dinamicamente la geometria del condotto di scarico
                al variare del regime. Si perde qualcosa sul picco
                assoluto ma si guadagna molto in guidabilità:
                la moto risponde alla manetta in modo più prevedibile,
                il pilota deve cambiare meno marce e il margine
                di errore sul timing del cambio è molto più ampio.
              </p>
            </div>

            <div className="curvaCard">
              <div className="curvaVisual curvaTrail">
                <span className="curvaRatio">Coppia ai bassi</span>
                <span className="curvaEx">Trail / Enduro</span>
              </div>
              <h4>Coppia ai bassi regimi — il punto debole da gestire</h4>
              <p>
                Il tallone d'Achille del 2 tempi è la scarsa coppia
                ai bassi regimi. Sotto la soglia di potenza il motore
                non ha praticamente nulla da offrire — si "intasa"
                e risponde in modo imprevedibile alle piccole aperture
                di gas nei passaggi tecnici lenti. Nelle moto da
                enduro moderno questo problema è parzialmente risolto
                con carburazioni morbide ai bassi, mappature
                dell'accensione dedicate e frizioni antisaltellamento
                che gestiscono meglio il collegamento brusco tra
                le diverse zone della curva. Ma rimane una caratteristica
                intrinseca del 2 tempi: la potenza si prende tutta
                insieme o non la si prende affatto.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER 3 ────────────────────────────────────────── */}
        <motion.div
          className="visualBlock"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — confronto curva di potenza 2T vs 4T stessa cilindrata</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">2T vs 4T</span>
            <p>
              Confronto delle curve di potenza tra un 125cc 2 tempi
              e un 250cc 4 tempi — la cilindrata doppia è necessaria
              al 4 tempi per eguagliare il 2 tempi in termini di
              potenza massima. Il 2T ha il picco più alto e più stretto,
              il 4T ha la curva più piatta e larga. I due motori
              erogano potenze simili, ma in modi completamente
              diversi — e richiedono tecniche di guida opposte.
            </p>
          </div>
        </motion.div>

        {/* ── GRANDEZZE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="grandezzeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="grandezzeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Glossario e numeri</span>
            <h3>Formule, fatti e record — i numeri che devi conoscere sui cavalli del 2T</h3>
            <p>
              Dietro ogni cifra tecnica si nasconde un concetto fisico
              preciso. Queste sono le grandezze, le formule e i fatti
              che ogni appassionato di moto a 2 tempi dovrebbe
              conoscere — non per vantarsene, ma per capire davvero
              quello che guida.
            </p>
          </motion.div>

          <motion.div className="grandezzeGrid" variants={cardVariants}>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>Conversione pratica: CV → rpm → Nm</h4>
              <p>
                La formula di conversione pratica che lega le tre
                grandezze è: <strong>P [CV] = M [Nm] × n [rpm] / 7.024</strong>.
                Quindi: un motore che eroga 30 CV a 10.000 rpm ha
                una coppia di M = 30 × 7.024 / 10.000 = 21,1 Nm.
                Lo stesso motore a 6.000 rpm con coppia di 15 Nm
                eroga solo P = 15 × 6.000 / 7.024 = 12,8 CV. La
                potenza che si "sente" in guida dipende sempre dalla
                combinazione di coppia disponibile al regime in cui
                si sta girando — non dalla potenza di picco dichiarata.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeDefinizione">Definizione</span>
              <h4>1 CV = 735,5 W — l'origine del cavallo vapore</h4>
              <p>
                James Watt introdusse il "horse power" nel 1782 per
                commercializzare le sue macchine a vapore confrontandole
                con la potenza di un cavallo da lavoro. Misurò che
                un cavallo tipico poteva sollevare 550 libbre di 1
                piede in 1 secondo (550 ft·lbf/s). La versione metrica
                europea, adottata più tardi, fu calibrata su 75 kgm/s
                = 735,5 W — leggermente inferiore all'HP anglosassone
                (745,7 W). Ancora oggi sulle moto europee si usa il
                CV, su quelle americane e giapponesi il HP — da cui
                la differenza dell'1,4% tra le schede tecniche.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>125 GP anni '90: 50 – 55 CV su 125cc = 440 CV/litro</h4>
              <p>
                I motori da GP classe 125cc degli anni '90 (Honda
                RS125R, Aprilia RSA 125, Yamaha TZ125) erogavano
                50 – 55 CV a 12.000 – 13.000 rpm su soli 125cc di
                cilindrata. Questo equivale a 400 – 440 CV/litro —
                un valore che nessun motore termico di produzione
                in serie ha mai eguagliato. Per confronto, il motore
                F1 V10 degli anni 2000 arrivava a 300 – 330 CV/litro.
                Il segreto del 2 tempi GP era la combinazione di
                porta di scarico variabile, espansione risonante
                ottimizzata e regime di rotazione elevatissimo.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>Perdite trasmissione: 15 – 22% dal motore alla ruota</h4>
              <p>
                La potenza misurata al banco sull'albero motore
                non è quella che arriva alla ruota posteriore.
                Frizione, cambio, catena di trasmissione e pneumatico
                assorbono energia: su una moto a 2 tempi con cambio
                a 6 rapporti le perdite tipiche sono del 15 – 22%
                a seconda del rapporto inserito (le perdite sono
                maggiori ai rapporti bassi per le velocità angolari
                più alte degli ingranaggi). Un motore da 50 CV
                all'albero arriva a erogare 39 – 42 CV alla ruota
                — circa 8 – 11 CV evaporano nella trasmissione.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>Effetto quota: −3% di potenza ogni 300 m di altitudine</h4>
              <p>
                La potenza del motore a 2 tempi dipende dalla densità
                dell'aria aspirata. In quota la pressione atmosferica
                è inferiore — l'aria è meno densa — e la massa
                di ossigeno disponibile per la combustione si riduce.
                La perdita di potenza è approssimativamente del
                3% ogni 300 m di quota sul livello del mare:
                a 900 m si perde circa il 9%, a 1.800 m il 18%.
                Il carburatore o l'iniezione devono essere ri-calibrati
                per la quota di utilizzo — una carburazione tarata
                al mare è troppo ricca in montagna e riduce ulteriormente
                la potenza rispetto al degrado teorico da sola quota.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeRecord">Record</span>
              <h4>KTM 50 SX: ~10 CV su 50cc = 200 CV/litro da serie</h4>
              <p>
                Il KTM 50 SX — la moto da cross per bambini nella
                categoria più piccola — eroga circa 10 CV su 49,9cc
                di cilindrata: 200 CV/litro di potenza specifica
                da un motore di serie omologato per bambini dagli
                8 anni in su. È uno dei motori a combustione interna
                con il rapporto potenza/cilindrata più elevato tra
                i mezzi su ruote di produzione. Questo numero chiarisce
                in modo definitivo perché il 2 tempi domina ancora
                nel fuoristrada competitivo nonostante le normative
                sempre più restrittive sulle emissioni.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── CARDS GRID ──────────────────────────────────────────────────── */}
        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Come leggere</span>
            <h3>Come leggere un grafico di potenza — quello che le schede non dicono</h3>
            <p>
              Un grafico di potenza racconta molto di più di un singolo
              numero. L'area sotto la curva (integrale della potenza
              rispetto al regime) misura la potenza media disponibile
              sull'intero range di utilizzo — un motore con area
              maggiore è più efficace in uso reale anche se ha un
              picco inferiore. La pendenza della curva ai bassi
              regimi indica la "risposta" alla manetta. La velocità
              di caduta dopo il picco indica il margine di sicurezza
              prima del fuorigiri. Un buon grafico di potenza vale
              più di ogni scheda tecnica — se riesci a trovarlo
              prima di comprare la moto, leggilo con cura.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">CV dichiarati</span>
            <h3>CV dichiarati vs al banco — attenzione alle normative di misura</h3>
            <p>
              I CV dichiarati dal costruttore possono essere misurati
              secondo normative diverse: DIN 70020, SAE J1349, ISO 1585,
              CEE 80/1269. Ogni normativa definisce le condizioni
              di misura (temperatura dell'aria, pressione, umidità,
              presenza o assenza dei componenti ausiliari come filtro
              aria e scarico originale). La stessa moto può "fare"
              31 CV secondo DIN e 33 CV secondo SAE — non perché
              il motore sia diverso, ma perché le condizioni di test
              sono diverse. Quando si confrontano potenze dichiarate
              di moto diverse, verificare sempre che la normativa
              di riferimento sia la stessa.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">2T vs 4T</span>
            <h3>Perché il 2T fa più CV a parità di cilindrata — la risposta fisica</h3>
            <p>
              La risposta è nella frequenza di combustione. In un
              motore 4 tempi ogni cilindro brucia carburante una volta
              ogni due giri dell'albero motore — una combustione ogni
              720° di rotazione. In un 2 tempi brucia ogni giro —
              ogni 360°. A parità di cilindrata e regime il 2 tempi
              ha il doppio delle combustioni per minuto. Questo
              significa il doppio degli impulsi di pressione sul
              pistone, il doppio dell'energia potenzialmente estraibile.
              Per questo un 125cc 2T eguaglia un 250cc 4T: stessa
              energia per giro, ma doppia frequenza di estrazione.
              Fisica elementare — ma non è mai stata superata in
              termini di semplicità costruttiva.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Cavalli;
