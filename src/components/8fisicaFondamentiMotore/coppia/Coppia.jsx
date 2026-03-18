import "./coppia.scss";
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

const Coppia = () => {
  return (
    <section className="coppia" id="coppia">
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
              Fisica — 8.2
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Coppia: la forza che ti spinge fuori dalla curva
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              I cavalli fanno le schede tecniche. La coppia fa le moto
              veloci. È la grandezza fisica che determina con quanta
              forza il motore spinge il pistone verso il basso a ogni
              combustione — e quindi con quanta forza la ruota posteriore
              spinge indietro sull'asfalto o sul terreno per farti
              avanzare. Senza capire la coppia non si capisce perché
              un 2 tempi da cross sembra "secco" e brusco, mentre
              un 4 tempi da enduro sembra "morbido" e progressivo:
              sono due curve di coppia profondamente diverse.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La coppia del motore a 2 tempi ha una caratteristica
              unica: è concentrata in una banda di regime ristretta
              e raggiunge valori di coppia specifica elevatissimi
              proprio in quel range. Fuori dalla banda la coppia crolla.
              Questa non è un difetto — è una scelta progettuale
              consapevole che massimizza la potenza specifica a scapito
              della versatilità. Capire dove e come il tuo motore
              eroga coppia è la base per usarlo al massimo delle
              sue possibilità.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">I quattro pilastri della coppia</span>
              <h3>Definizione, unità, formula e caratteristica del 2T</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Definizione — la coppia (M o T) è il momento torcente applicato all'albero motore: forza moltiplicata per il braccio</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Unità — si misura in Newton-metro (Nm); 1 Nm = forza di 1 N applicata a 1 m di braccio</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Formula — M [Nm] = P [CV] × 7.024 / n [rpm]; la coppia è potenza divisa per velocità angolare</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">2T — coppia alta e concentrata in banda stretta; al di fuori del picco la coppia disponibile crolla rapidamente</span>
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
              <span className="placeholderText">Immagine / GIF — schema M = F × r con pistone, biella e manovella</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">M = F × r</span>
            <p>
              La coppia nasce dal pistone. La pressione dei gas di
              combustione spinge il pistone verso il basso con una
              forza F. Questa forza viene trasmessa alla biella, che
              la converte in momento torcente sull'albero motore.
              Il braccio r è la distanza tra il perno di banco e
              il perno di manovella — equivale alla metà della
              corsa del pistone. Più lungo è il braccio (più lunga
              la corsa), maggiore è il momento torcente generato
              dalla stessa pressione nei cilindri. Ecco perché
              i motori con corsa lunga tendono ad avere più coppia
              ai bassi regimi rispetto ai motori con corsa corta.
            </p>
          </div>
        </motion.div>

        {/* ── MECCANICA BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="meccanicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="meccanicaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">La fisica della coppia</span>
            <h3>M = F × r — dalla pressione nel cilindro al momento sull'albero</h3>
            <p>
              La coppia non è una grandezza astratta. È il risultato
              diretto della pressione che i gas in combustione esercitano
              sul pistone, moltiplicata per la geometria del manovellismo.
              Capire da dove viene la coppia permette di capire perché
              certi motori la erogano in modo così diverso.
            </p>
          </motion.div>

          <motion.div className="meccanicaGrid" variants={cardVariants}>

            <div className="meccanicaCard">
              <div className="meccanicaCardTop">
                <span className="meccanicaBadge badgeFormula">Formula</span>
                <span className="meccanicaSub">Coppia meccanica</span>
              </div>
              <h4>M = F × r — forza per braccio uguale momento torcente</h4>
              <p>
                La formula fondamentale è M = F × r, dove F è la forza
                applicata (in Newton) e r è il braccio (in metri).
                Nel motore, F è la forza risultante dalla pressione
                dei gas sul pistone — pressione [Pa] moltiplicata per
                la superficie del pistone [m²] — e r è il raggio
                di manovella (metà corsa). In un 125cc tipico con
                pistone da 54 mm di diametro e corsa di 54 mm,
                a pressione di picco di 60 bar si genera una forza
                sul pistone di circa 13.700 N — con braccio di 27 mm
                si ottengono circa 370 Nm istantanei sull'albero
                al momento della combustione. Quel valore istantaneo
                mediato sull'intera rotazione dà la coppia media indicata.
              </p>
            </div>

            <div className="meccanicaCard">
              <div className="meccanicaCardTop">
                <span className="meccanicaBadge badgeFormula">Formula</span>
                <span className="meccanicaSub">Coppia dalla potenza</span>
              </div>
              <h4>M = P × 7.024 / n — ricavare la coppia dalla scheda tecnica</h4>
              <p>
                Quando la scheda tecnica indica solo i CV e il regime
                di picco, la coppia si ricava con la formula inversa
                alla relazione tra potenza e coppia: M [Nm] = P [CV]
                × 7.024 / n [rpm]. Un 125cc da competizione che fa
                50 CV a 12.000 rpm ha una coppia di picco di
                M = 50 × 7.024 / 12.000 = 29,3 Nm. Lo stesso motore
                a 9.000 rpm sotto banda con soli 30 CV disponibili
                eroga M = 30 × 7.024 / 9.000 = 23,4 Nm — il 20% in
                meno. La differenza si sente nella risposta alla
                manetta: meno coppia significa meno accelerazione
                immediata a parità di rapporto di trasmissione inserito.
              </p>
            </div>

            <div className="meccanicaCard">
              <div className="meccanicaCardTop">
                <span className="meccanicaBadge badgeFatto">Fatto</span>
                <span className="meccanicaSub">Coppia specifica</span>
              </div>
              <h4>Nm/litro — il parametro corretto per confrontare i motori</h4>
              <p>
                Come per la potenza, per confrontare la coppia di
                motori con cilindrate diverse si usa la coppia specifica:
                Nm per litro di cilindrata. Un 125cc 2T da GP con
                29 Nm ha una coppia specifica di 232 Nm/litro — un
                valore eccezionale. Un 4 tempi monocilindrco da 450cc
                da cross con 50 Nm ha 111 Nm/litro — meno della metà.
                La ragione è sempre la frequenza di combustione: il
                2T brucia ogni giro, generando impulsi di pressione
                doppi rispetto al 4T a parità di regime. Quegli
                impulsi di pressione più frequenti si traducono in
                una coppia media più alta per unità di cilindrata.
              </p>
            </div>

            <div className="meccanicaCard">
              <div className="meccanicaCardTop">
                <span className="meccanicaBadge badgeDefinizione">Definizione</span>
                <span className="meccanicaSub">Coppia indicata vs effettiva</span>
              </div>
              <h4>Perdite meccaniche — dalla combustione all'albero</h4>
              <p>
                La coppia indicata (M_i) è quella teorica calcolata
                dalla pressione media effettiva nel cilindro per
                il volume e il raggio di manovella. La coppia
                effettiva (M_e) è quella realmente disponibile
                all'albero motore al netto delle perdite di attrito:
                cuscinetti di banco, guarnizione di testa, pompa
                acqua, volano e generatore. Il rendimento meccanico
                η_m = M_e / M_i è tipicamente 0,80 – 0,88 nei motori
                2T di qualità — tra il 12% e il 20% della coppia
                teorica si perde in attriti prima di raggiungere
                la ruota. La coppia alla ruota è ulteriormente
                ridotta del 15 – 22% dalle perdite di trasmissione.
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
            <span className="captionTag">Curva di coppia 2T</span>
            <p>
              La curva di coppia di un 2 tempi ha una forma
              caratteristica: sale rapidamente quando il motore
              entra in banda (grazie alla risonanza del tubo
              di espansione che "carica" il cilindro di miscela
              fresca), raggiunge un picco netto e poi scende
              altrettanto rapidamente quando si esce dalla banda
              di risonanza. Il picco di coppia si trova sempre
              a un regime inferiore rispetto al picco di potenza —
              tipicamente 500 – 1.500 rpm prima. L'area tra
              il picco di coppia e il picco di potenza rappresenta
              la zona di utilizzo ottimale: il regime dove il
              motore tira forte e consuma in modo efficiente.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — curva di coppia 125cc 2T con banda evidenziata e confronto con 4T</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── REGIME BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="regimeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="regimeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Coppia e regime</span>
            <h3>Sotto banda, in banda, fuori banda — tre comportamenti del 2T da conoscere</h3>
            <p>
              La coppia di un motore a 2 tempi non è distribuita
              uniformemente su tutto il range di regime. Si comporta
              in modo radicalmente diverso a seconda che il motore
              sia sotto la banda di risonanza dello scarico, dentro
              la banda o sopra. Riconoscere queste tre zone e gestirle
              con cambio e gas è la tecnica fondamentale per guidare
              un 2T al massimo.
            </p>
          </motion.div>

          <motion.div className="regimeGrid" variants={cardVariants}>

            <div className="regimeCard">
              <div className="regimeVisual regimeBasso">
                <span className="regimeLabel">Sotto banda</span>
                <span className="regimeRpm">≤ 7.000 rpm</span>
              </div>
              <h4>Coppia bassa e piatta — il punto debole strutturale del 2T</h4>
              <p>
                Sotto la soglia di attivazione della banda il motore
                a 2 tempi ha pochissima coppia — il tubo di espansione
                non è in risonanza con il regime e non "pompa" miscela
                fresca nel cilindro. La risposta alla manetta è lenta
                e imprevedibile. Nei passaggi tecnici a bassa velocità
                questa è la zona più difficile da gestire: aprire
                il gas troppo presto da un regime troppo basso
                non produce nulla e rischia di "intasare" il motore.
                La tecnica corretta è usare frizione e cambio per
                entrare nella banda prima di aprire il gas a fondo.
              </p>
            </div>

            <div className="regimeCard">
              <div className="regimeVisual regimeBanda">
                <span className="regimeLabel">In banda</span>
                <span className="regimeRpm">8.000 – 12.500 rpm</span>
              </div>
              <h4>Coppia massima — il territorio dove il 2T diventa imbattibile</h4>
              <p>
                Dentro la banda di risonanza il motore a 2 tempi
                eroga la coppia massima e la potenza di picco.
                Il tubo di espansione è in risonanza: l'onda di
                pressione riflessa dal cono di chiusura dello scarico
                arriva al cilindro esattamente in fase con la chiusura
                della porta di scarico, spingendo indietro la miscela
                fresca che stava sfuggendo ed "imbottendo" il cilindro
                ben oltre la sua capacità volumetrica teorica. Il
                rendimento volumetrico supera il 100% — questo è il
                segreto della potenza specifica del 2T. In questa
                zona il motore spinge forte, il suono cambia
                completamente e la moto "decolla".
              </p>
            </div>

            <div className="regimeCard">
              <div className="regimeVisual regimeAlto">
                <span className="regimeLabel">Fuori banda</span>
                <span className="regimeRpm">&gt; 13.000 rpm</span>
              </div>
              <h4>Coppia in calo — l'onda si anticipa e il riempimento peggiora</h4>
              <p>
                Sopra la banda di risonanza l'onda di pressione
                riflessa arriva troppo presto: il cono di chiusura
                rimanda l'onda indietro prima che la porta di scarico
                si chiuda, creando una sovrapressione nel cilindro
                che "respinge" la miscela fresca invece di spingerla
                dentro. Il rendimento volumetrico crolla, la coppia
                cade bruscamente e la potenza diminuisce nonostante
                il regime alto. Il motore "cade" — il pilota sente
                la trazione svanire di colpo. La zona sopra banda
                è la zona del fuorigiri: motore in stress, coppia bassa,
                rischio di danni alle pareti del cilindro e al pistone.
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
              <span className="placeholderText">Immagine / GIF — schema tubo espansione con onda di pressione e fase di risonanza</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Risonanza e coppia</span>
            <p>
              Il tubo di espansione non è solo uno scarico: è uno
              strumento acustico accordato su una frequenza precisa.
              La lunghezza del cono di diffusione e del cono di
              chiusura determina la frequenza di risonanza —
              e quindi il regime di regime a cui il motore eroga
              la coppia massima. Modificando la lunghezza del tubo
              si sposta la banda di potenza in su o in giù. Tubi
              corti = banda alta e stretta (racing); tubi lunghi
              = banda bassa e più larga (enduro/trail). La valvola
              di scarico (RAVE, PV) serve esattamente a modificare
              dinamicamente questa geometria al variare del regime,
              allargando la banda utile.
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
            <h3>Formule, fatti e record — i numeri che devi conoscere sulla coppia del 2T</h3>
            <p>
              La coppia si nasconde dietro ogni sensazione di guida —
              lo strappo all'apertura del gas, la trazione in uscita
              di curva, la spinta in rettilineo. Questi sono i numeri
              e i concetti fisici che trasformano quelle sensazioni
              in grandezze misurabili.
            </p>
          </motion.div>

          <motion.div className="grandezzeGrid" variants={cardVariants}>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>Coppia alla ruota: M_ruota = M_motore × i_tot × η_trasmissione</h4>
              <p>
                La coppia che arriva alla ruota posteriore è il
                prodotto della coppia del motore per il rapporto
                di trasmissione totale (i_tot = rapporto cambio ×
                rapporto finale pignone/corona) per il rendimento
                della trasmissione (η ≈ 0,80 – 0,85). Con M_motore
                = 29 Nm, i_tot = 6,5 (prima marcia, rapporto finale
                tipico cross) e η = 0,82 si ottiene M_ruota = 29
                × 6,5 × 0,82 = 154,7 Nm. Quella è la coppia che
                spinge effettivamente la moto — quasi 5,3 volte quella
                del motore. Scendere di marcia moltiplica la coppia;
                salire di marcia la divide.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeDefinizione">Definizione</span>
              <h4>1 Nm — cosa significa davvero un Newton-metro</h4>
              <p>
                Un Newton-metro è la coppia generata da una forza
                di 1 Newton applicata perpendicolarmente a un braccio
                di 1 metro. Per dare una scala: la coppia necessaria
                per svitare un dado con una chiave da 20 cm stringendo
                con 50 N (circa 5 kg) è M = 50 × 0,20 = 10 Nm.
                Un 125cc 2T da competizione con 29 Nm all'albero
                è come avere una chiave da 1 metro con 29 kg appesi
                all'estremità — e quella forza si applica 200 volte
                al secondo a 12.000 rpm. La coppia impulsiva istantanea
                a ogni combustione è invece dell'ordine di 200 – 400 Nm.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>125 GP anni '90: picco di coppia a ~9.500 rpm, potenza a 12.000 rpm</h4>
              <p>
                Nei motori da GP classe 125cc degli anni '90 il
                picco di coppia si trovava tipicamente tra 9.000
                e 10.000 rpm — circa 2.000 – 3.000 rpm prima del
                picco di potenza. La coppia di picco era dell'ordine
                di 25 – 30 Nm. Sotto i 7.000 rpm la coppia scendeva
                sotto i 10 Nm — praticamente nulla. La banda utile
                era di appena 3.000 – 4.000 rpm. I piloti di GP
                dovevano mantenere il motore in quella finestra usando
                il cambio con timing al millisecondo — un'abilità
                che richiedeva anni di pratica per essere padroneggiata.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>RAVE/Power Valve: +30 – 40% di coppia ai bassi con la valvola aperta</h4>
              <p>
                La valvola di scarico variabile (RAVE su KTM, Power
                Valve su Yamaha, RV su Honda) può allargare la banda
                di coppia utile del 30 – 40% rispetto a un motore
                senza valvola. A bassi regimi la valvola chiude
                parzialmente la porta di scarico: riduce la sezione
                di passaggio, alza la controcontropressione e migliora
                il rendimento volumetrico in quella condizione.
                Salendo di giri la valvola si apre progressivamente,
                liberando la sezione massima per il regime alto.
                L'effetto è una curva di coppia molto più piatta
                e utilizzabile rispetto a un 2T a geometria fissa.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>Pressione media effettiva: PME = M × 4π / V_c — il rendimento in un numero</h4>
              <p>
                La Pressione Media Effettiva (PME) è la pressione
                media equivalente che, applicata per tutta la corsa
                del pistone, genererebbe lo stesso lavoro del ciclo
                reale. Si calcola come PME [bar] = M [Nm] × 4π /
                V_c [m³] per il 4T; per il 2T il denominatore è 2π
                (un ciclo ogni giro). Un 125cc 2T da GP con M = 28 Nm
                ha PME = 28 × 2π / 0.000125 = 1.407 kPa ≈ 14 bar —
                un valore eccezionale, quasi il doppio di un 4T
                stradale equivalente. La PME è il parametro che
                mostra quanto bene il motore sfrutta il suo volume.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeRecord">Record</span>
              <h4>Coppia specifica: il 2T da GP batte qualsiasi motore termico stradale</h4>
              <p>
                Con circa 232 Nm/litro di coppia specifica, un 125cc
                2T da GP degli anni '90 supera qualsiasi motore
                termico stradale prodotto in serie — incluse le
                superbike 1.000cc moderne (tipicamente 130 – 160
                Nm/litro). L'unica categoria che si avvicina sono
                i motori Formula 1 V10 degli anni 2000 e i prototipi
                MotoGP — tecnologie da centinaia di migliaia di euro
                per un motore da corsa. Il 125cc 2T otteneva quel
                risultato con ingegneria meccanica relativamente
                semplice, senza elettronica di controllo sofisticata:
                solo tubi di espansione ottimizzati e rapporti
                di fasatura delle porte scelti con precisione assoluta.
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
            <span className="cardTag">Coppia e guida</span>
            <h3>Come sfruttare la coppia del 2T — tecnica di guida dalla fisica</h3>
            <p>
              La coppia disponibile in ogni momento dipende dal
              regime e dalla marcia inserita. Aprire il gas quando
              il motore è sotto banda non produce coppia — produce
              solo fumo e rischio di "intasarsi". La tecnica corretta
              per sfruttare il 2T è sempre la stessa: mantenersi
              nel range di regime dove la coppia è alta, usare il
              cambio per restare nella banda anche quando la velocità
              cambia, e sfruttare la frizione come attenuatore
              del brusco ingresso in banda. I piloti più veloci
              su 2T non aprono il gas più degli altri — lo aprono
              nel momento giusto, quando il motore è già nel range
              di coppia massima.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Coppia e cambio</span>
            <h3>Come il cambio moltiplica la coppia — la trasmissione come amplificatore</h3>
            <p>
              Il cambio non è solo un modo per adattare la velocità
              della moto al regime del motore: è un moltiplicatore
              di coppia. In prima marcia con rapporto 2,5:1 e rapporto
              finale 4:1, la coppia totale del motore viene moltiplicata
              per 10 prima di arrivare alla ruota. Un motore con
              28 Nm eroga quindi 280 Nm alla ruota in prima marcia
              (al netto delle perdite). In sesta marcia lo stesso
              motore con rapporto 0,9:1 × 2,5:1 = rapporto totale
              2,25 eroga circa 57 Nm alla ruota — cinque volte meno.
              Scendere di marcia è il modo più immediato per avere
              più coppia disponibile in uscita di curva.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">2T vs 4T</span>
            <h3>Coppia 2T vs 4T — due filosofie opposte di erogazione</h3>
            <p>
              Il 4 tempi ha la coppia distribuita su un range di
              regime molto più ampio — la curva è piatta e larga.
              Il 2 tempi ha la coppia concentrata in una banda
              stretta — la curva è alta e spigolosa. Sul tracciato
              il 4T è più facile da usare: risponde sempre, in ogni
              condizione di regime. Il 2T richiede più attenzione
              ma premia di più: quando si è in banda l'accelerazione
              è molto più violenta per parità di cilindrata.
              Per questo la FIM ha storicamente usato il fattore
              di equivalenza 1:2 (125cc 2T = 250cc 4T, 250cc 2T
              = 500cc 4T) — il 2T eroga quella coppia specifica
              aggiuntiva che giustifica il dimezzamento della cilindrata.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Coppia;
