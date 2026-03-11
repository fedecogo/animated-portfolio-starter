import "./carburatore.scss";
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

const Carburatore = () => {
  return (
    <section className="carburatore" id="carburatore">
      <div className="wrapper">

        {/* INTRO BLOCK */}
        <motion.div
          className="introBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="titleColumn">
            <motion.span className="sectionLabel" variants={fadeUpVariants}>
              Carburazione
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il carburatore nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il carburatore è il cuore della miscela aria-carburante nel motore
              a 2 tempi. Non si limita a dosare il carburante: regola la qualità
              della miscela in ogni condizione di utilizzo, dalla minima al pieno
              gas, influenzando direttamente le prestazioni, la risposta e la
              temperatura del motore.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Ogni componente interno — dalla vaschetta al polverizzatore, dallo
              spillo al getto del minimo — svolge un ruolo preciso e agisce in un
              intervallo specifico di apertura gas. Conoscerli permette di
              diagnosticare problemi e ottimizzare la carburazione.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Componenti principali</span>
              <h3>Struttura interna del carburatore</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Vaschetta e galleggiante — riserva di carburante costante</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Ago conico e polverizzatore — dosaggio a medio gas</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Getto principale — piena apertura del gas</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Getto del minimo — regime basso e avviamento</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* DIAGRAM BLOCK */}
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
              <h3>Vaschetta e galleggiante</h3>
              <p>
                La vaschetta mantiene un livello costante di carburante. Il
                galleggiante apre e chiude la valvola dell'ago per regolare
                l'afflusso dal serbatoio, garantendo sempre la giusta
                disponibilità di benzina.
              </p>
            </div>

            <div className="diagramNode node2">
              <span className="nodeNumber">02</span>
              <h3>Ago conico e clip</h3>
              <p>
                L'ago conico scorre all'interno del polverizzatore e determina
                la quantità di carburante dal 20% all'80% di apertura gas. La
                posizione della clip sull'ago altera il profilo di arricchimento
                in quella fascia di utilizzo.
              </p>
            </div>

            <div className="diagramNode node3">
              <span className="nodeNumber">03</span>
              <h3>Getto principale</h3>
              <p>
                Entra in gioco oltre l'80% del gas. È un calibro fisso con un
                foro preciso che determina il flusso massimo di carburante.
                Sbagliare il getto principale significa rischiare di girare
                magro o grasso a piena potenza.
              </p>
            </div>

            <div className="diagramNode node4">
              <span className="nodeNumber">04</span>
              <h3>Getto e vite del minimo</h3>
              <p>
                Il circuito del minimo alimenta il motore a bassi regimi e
                durante l'avviamento. La vite del minimo (aria o miscela)
                permette di regolare finemente la ricchezza a gas chiuso,
                influenzando la partenza a freddo e la risposta in rilascio.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* THROTTLE RANGE BLOCK */}
        <motion.div
          className="throttleBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="throttleHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Apertura gas</span>
            <h3>Chi comanda in ogni fase</h3>
            <p>
              Nel carburatore a spillo (slide carb), ogni componente è attivo
              in un preciso intervallo di apertura della farfalla. Nessuno
              lavora da solo: si sovrappongono e si compensano.
            </p>
          </motion.div>

          <motion.div className="throttleRanges" variants={cardVariants}>
            <div className="rangeRow">
              <span className="rangeLabel">Getto minimo</span>
              <div className="rangeBar">
                <div className="rangeFill fill1" style={{ width: "30%" }}></div>
              </div>
              <span className="rangePercent">0 – 25%</span>
            </div>
            <div className="rangeRow">
              <span className="rangeLabel">Vite minimo</span>
              <div className="rangeBar">
                <div className="rangeFill fill2" style={{ width: "20%" }}></div>
              </div>
              <span className="rangePercent">0 – 15%</span>
            </div>
            <div className="rangeRow">
              <span className="rangeLabel">Ago conico</span>
              <div className="rangeBar">
                <div className="rangeFill fill3" style={{ left: "15%", width: "60%" }}></div>
              </div>
              <span className="rangePercent">20 – 80%</span>
            </div>
            <div className="rangeRow">
              <span className="rangeLabel">Getto principale</span>
              <div className="rangeBar">
                <div className="rangeFill fill4" style={{ left: "60%", width: "40%" }}></div>
              </div>
              <span className="rangePercent">60 – 100%</span>
            </div>
          </motion.div>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Galleggiante</span>
            <h3>Perché il livello conta</h3>
            <p>
              Un livello vaschetta troppo alto arricchisce la miscela a qualsiasi
              regime. Troppo basso la impoverisce. Anche una piccola variazione
              modifica il comportamento del motore in modo trasversale su tutti i
              circuiti del carburatore.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Ago conico</span>
            <h3>Il componente più versatile</h3>
            <p>
              Lo spillo conico è il componente che si regola più spesso nella
              messa a punto. Spostandolo di una tacca si modifica la miscela
              nella fascia di guida più utilizzata in pista o in fuoristrada:
              dal quarto al tre quarti di gas.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Getto principale</span>
            <h3>La scelta più critica</h3>
            <p>
              A piena apertura, il getto principale è l'unica variabile che
              conta. Girare magro a piena potenza espone il motore a
              surriscaldamento e grippaggio. La scelta del getto va calibrata
              in funzione di quota, temperatura e tipo di benzina usata.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Carburatore;