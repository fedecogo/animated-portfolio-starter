import "./airAndFuel.scss";
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

const AirAndFuel = () => {
  return (
    <section className="airAndFuel" id="air-and-fuel">
      <div className="wrapper">
        <motion.div
          className="introBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="titleColumn">
            <motion.span className="sectionLabel" variants={fadeUpVariants}>
              Ciclo del motore
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Flusso di aria e carburante
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              In un motore 2 tempi, il percorso dell'aria e del carburante è
              uno degli aspetti più importanti dell'intero sistema. Prima che
              avvenga la combustione, il motore deve aspirare aria, mescolarla
              con il carburante, guidarla attraverso il lato aspirazione e
              spingerla verso il carter e il cilindro.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Questo flusso non è un semplice passaggio. Influisce direttamente
              sulla risposta all'acceleratore, sulla qualità della combustione,
              sull'efficienza del motore e sul carattere complessivo della moto.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Panoramica del flusso</span>
              <h3>Percorso base della miscela</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">L'aria entra attraverso il filtro dell'aria</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Il carburante viene dosato dal carburatore</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">La miscela attraversa il pacco lamellare</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Il carter aiuta a trasferire la carica fresca</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

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
              <h3>Filtro dell'aria</h3>
              <p>L'aria esterna viene pulita prima di entrare nel sistema di aspirazione.</p>
            </div>

            <div className="diagramNode node2">
              <span className="nodeNumber">02</span>
              <h3>Carburatore</h3>
              <p>
                Il carburante viene miscelato con l'aria in entrata nella
                proporzione corretta per il funzionamento del motore.
              </p>
            </div>

            <div className="diagramNode node3">
              <span className="nodeNumber">03</span>
              <h3>Pacco lamellare</h3>
              <p>
                La miscela passa verso il carter aiutando a limitare
                il flusso inverso.
              </p>
            </div>

            <div className="diagramNode node4">
              <span className="nodeNumber">04</span>
              <h3>Carter e travaso</h3>
              <p>
                La carica viene compressa e guidata verso l'alto nel cilindro
                attraverso la fase di travaso.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aria</span>
            <h3>Perché la qualità dell'aria è importante</h3>
            <p>
              Il motore dipende da un volume stabile di aria pulita in entrata.
              Se il filtro è sporco o il flusso è limitato, l'equilibrio della
              miscela può cambiare e il comportamento del motore diventa meno
              preciso.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Carburante</span>
            <h3>Perché il dosaggio del carburante è importante</h3>
            <p>
              In un 2T con carburatore, la dosatura del carburante influisce
              fortemente sulla combustione, sulla risposta e sulla temperatura.
              La miscela deve essere vicina al rapporto corretto perché il
              motore funzioni correttamente.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Flusso</span>
            <h3>Perché il percorso è importante</h3>
            <p>
              Aria e carburante non "entrano semplicemente nel motore". Seguono
              un percorso temporizzato attraverso filtro, carburatore, pacco
              lamellare e carter prima di contribuire alla combustione nel
              cilindro.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default AirAndFuel;
