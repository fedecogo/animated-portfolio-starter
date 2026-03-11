import "./corpoFarfallato.scss";
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
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const CorpoFarfallato = () => {
  return (
    <section className="corpoFarfallato" id="corpo-farfallato">
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
              Alimentazione
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Corpo farfallato nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il corpo farfallato — o throttle body — sostituisce il carburatore
              tradizionale nei motori a 2 tempi moderni con iniezione diretta.
              Non si limita a misurare l'aria: dialoga con la centralina,
              gestisce la pressione nel condotto e coordina ogni aspetto
              dell'iniezione in funzione del regime, del carico e delle
              condizioni ambientali.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Rispetto al carburatore, il corpo farfallato non ha vaschetta, ago
              conico né getti fissi. La quantità di carburante è calcolata
              elettronicamente a ogni ciclo di iniezione, rendendo la risposta
              più precisa, le emissioni più controllate e la gestione del motore
              adattabile in tempo reale.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Componenti chiave</span>
              <h3>Cosa contiene il corpo farfallato</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Farfalla — regola il flusso d'aria nel condotto</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">TPS — sensore di posizione farfalla</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">MAP / MAF — misura pressione o massa d'aria</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Iniettore — eroga il carburante per impulsi</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER ──────────────────────────────────────────── */}
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
              <span className="placeholderText">Immagine / GIF — corpo farfallato</span>
              <span className="placeholderSub">Sostituisci questo div con un tag &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}

          <div className="visualCaption">
            <span className="captionTag">Schema</span>
            <p>
              Vista in sezione del corpo farfallato: la farfalla ruota sull'asse
              centrale, l'iniettore è posizionato a valle e il TPS monitora
              costantemente l'angolo di apertura.
            </p>
          </div>
        </motion.div>

        {/* ── DIAGRAM BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="diagramBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="flowDiagram" variants={cardVariants}>
            <div className="diagramTrack"></div>

            <div className="diagramNode node1">
              <span className="nodeNumber">01</span>
              <h3>Farfalla</h3>
              <p>
                Il disco metallico ruota sull'asse del condotto in risposta al
                comando del gas. Più è aperta, maggiore è la quantità d'aria che
                fluisce verso il motore. Nei sistemi ride-by-wire non è collegata
                meccanicamente al manubrio: è la centralina a decidere l'angolo
                reale di apertura.
              </p>
            </div>

            <div className="diagramNode node2">
              <span className="nodeNumber">02</span>
              <h3>Sensore TPS</h3>
              <p>
                Il Throttle Position Sensor trasmette alla ECU l'angolo esatto
                della farfalla decine di volte al secondo. È il parametro primario
                su cui si basa il calcolo dell'iniezione: senza un TPS preciso,
                la mappa carburante non può funzionare correttamente.
              </p>
            </div>

            <div className="diagramNode node3">
              <span className="nodeNumber">03</span>
              <h3>Sensore MAP / IAT</h3>
              <p>
                Il sensore di pressione assoluta (MAP) misura la depressione nel
                condotto, indicando il carico reale del motore. Il sensore di
                temperatura aria (IAT) corregge la densità dell'aria in base alla
                temperatura, permettendo alla ECU di adattare il dosaggio.
              </p>
            </div>

            <div className="diagramNode node4">
              <span className="nodeNumber">04</span>
              <h3>Iniettore</h3>
              <p>
                L'iniettore è una valvola elettromagnetica che si apre per
                impulsi di durata precisa (tempo di iniezione). Più lungo l'impulso,
                più carburante viene erogato. La centralina calcola questo tempo
                basandosi su TPS, MAP, regime, temperatura e sonda lambda.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── ECU & SENSORI BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="ecuBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="ecuHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Gestione elettronica</span>
            <h3>Il ruolo della centralina (ECU)</h3>
            <p>
              Nel motore a 2T con iniezione, la ECU è il vero "carburatore
              intelligente". Riceve dati da tutti i sensori e calcola in tempo
              reale il tempo di iniezione, l'anticipo e — nei sistemi più
              avanzati — anche la gestione della scarico allo sbocco.
            </p>
          </motion.div>

          <motion.div className="ecuGrid" variants={cardVariants}>

            <div className="ecuSensor">
              <span className="sensorDot dot1"></span>
              <div className="sensorBody">
                <h4>TPS — Throttle Position</h4>
                <p>Angolo farfalla → carico richiesto dal pilota</p>
              </div>
            </div>

            <div className="ecuSensor">
              <span className="sensorDot dot2"></span>
              <div className="sensorBody">
                <h4>MAP — Manifold Absolute Pressure</h4>
                <p>Depressione nel condotto → carico reale del motore</p>
              </div>
            </div>

            <div className="ecuSensor">
              <span className="sensorDot dot3"></span>
              <div className="sensorBody">
                <h4>IAT — Intake Air Temperature</h4>
                <p>Temperatura aria → correzione densità e anticipo</p>
              </div>
            </div>

            <div className="ecuSensor">
              <span className="sensorDot dot4"></span>
              <div className="sensorBody">
                <h4>RPM — Regime motore</h4>
                <p>Giri/minuto → timing iniezione e finestra di erogazione</p>
              </div>
            </div>

            <div className="ecuSensor">
              <span className="sensorDot dot5"></span>
              <div className="sensorBody">
                <h4>Lambda — Sonda ossigeno</h4>
                <p>Ricchezza gas di scarico → correzione in closed loop</p>
              </div>
            </div>

            <div className="ecuSensor">
              <span className="sensorDot dot6"></span>
              <div className="sensorBody">
                <h4>ECT — Temperatura liquido</h4>
                <p>Temperatura motore → arricchimento a freddo e limitatori</p>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── SECOND VISUAL PLACEHOLDER ───────────────────────────────────── */}
        <motion.div
          className="visualBlock visualBlockAlt"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — schema ECU & sensori</span>
              <span className="placeholderSub">Sostituisci questo div con un tag &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}

          <div className="visualCaption">
            <span className="captionTag">Schema ECU</span>
            <p>
              Flusso dei segnali dai sensori alla centralina e ritorno verso
              iniettore, farfalla e sistema di scarico variabile.
            </p>
          </div>
        </motion.div>

        {/* ── CONFRONTO VS CARBURATORE ────────────────────────────────────── */}
        <motion.div
          className="compareBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="compareHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Confronto</span>
            <h3>Corpo farfallato vs Carburatore</h3>
          </motion.div>

          <motion.div className="compareTable" variants={cardVariants}>
            <div className="compareCol compareColLeft">
              <span className="compareColLabel carb">Carburatore</span>
              <ul>
                <li>Dosaggio meccanico tramite ago, getti e vaschetta</li>
                <li>Sensibile a quota, temperatura e inclinazione</li>
                <li>Manutenzione manuale (pulizia, regolazione getti)</li>
                <li>Risposta immediata ma non adattiva</li>
                <li>Nessun feedback da sensori esterni</li>
                <li>Costo contenuto e semplicità costruttiva</li>
              </ul>
            </div>

            <div className="compareDivider">
              <span className="dividerLine"></span>
              <span className="dividerLabel">vs</span>
              <span className="dividerLine"></span>
            </div>

            <div className="compareCol compareColRight">
              <span className="compareColLabel fi">Corpo farfallato</span>
              <ul>
                <li>Dosaggio elettronico calcolato ciclo per ciclo</li>
                <li>Auto-correzione continua via sensori e lambda</li>
                <li>Nessuna regolazione meccanica periodica</li>
                <li>Risposta programmabile via mappatura ECU</li>
                <li>Closed-loop con sonda lambda per emissioni</li>
                <li>Maggiore costo e complessità diagnostica</li>
              </ul>
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
            <span className="cardTag">Ride-by-wire</span>
            <h3>Farfalla senza cavo</h3>
            <p>
              Nei sistemi ride-by-wire il gas non è collegato meccanicamente alla
              farfalla. Il manubrio invia un segnale elettrico alla ECU, che
              decide l'apertura reale. Questo permette traction control, launch
              control e mappe di potenza selezionabili.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Mappatura</span>
            <h3>Personalizzare la risposta</h3>
            <p>
              Con un corpo farfallato è possibile modificare la mappa carburante
              tramite centraline aftermarket o rimappature. Si possono creare
              profili diversi per uso pista, fuoristrada, alta quota o benzina
              con diverso numero di ottani.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Diagnostica</span>
            <h3>Errori e auto-correzione</h3>
            <p>
              La ECU salva i codici di errore (DTC) in caso di anomalie su
              qualsiasi sensore. Un TPS fuori range, un iniettore che non risponde
              o una sonda lambda satura vengono rilevati e gestiti con strategie
              di fallback per proteggere il motore.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default CorpoFarfallato;