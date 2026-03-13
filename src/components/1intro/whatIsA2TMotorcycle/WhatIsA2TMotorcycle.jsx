import "./whatIsA2TMotorcycle.scss";
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
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const WhatIsA2TMotorcycle = () => {
  return (
    <section className="whatIsA2TMotorcycle" id="what-is-a-2t-motorcycle">
      <div className="wrapper">
        <motion.div
          className="introGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="leftColumn">
            <motion.span className="sectionLabel" variants={fadeUpVariants}>
              Introduzione
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Cos'è una moto 2 tempi?
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Una moto 2 tempi è costruita attorno a un motore che completa il
              suo ciclo di potenza in soli due colpi di pistone. Rispetto a un
              4 tempi, il progetto è meccanicamente più semplice, più leggero e
              spesso più diretto nell'erogazione della potenza.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Quella semplicità è parte del fascino. Una moto 2T non è solo
              "un tipo di moto più vecchio": è una logica meccanica diversa,
              con il proprio ritmo di combustione, il flusso di aspirazione, il
              sistema di lubrificazione, il comportamento dello scarico e il
              carattere di guida.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Questo progetto è pensato come una guida visiva per comprendere
              quella logica passo dopo passo, partendo dal motore e poi
              espandendosi a telaio, sospensioni, freni, elettronica e carrozzeria.
            </motion.p>
          </div>

          <motion.div className="rightColumn" variants={fadeUpVariants}>
            <div className="infoPanel">
              <div className="panelHeader">
                <span className="panelTag">Panoramica 2T</span>
                <h3>L'identità di una moto a due tempi</h3>
              </div>

              <div className="panelLines">
                <div className="lineItem">
                  <span className="lineLabel">Ciclo</span>
                  <span className="lineValue">Potenza ogni 2 tempi</span>
                </div>
                <div className="lineItem">
                  <span className="lineLabel">Carattere</span>
                  <span className="lineValue">Leggera, reattiva, meccanica</span>
                </div>
                <div className="lineItem">
                  <span className="lineLabel">Complessità</span>
                  <span className="lineValue">Inferiore a molte configurazioni 4T</span>
                </div>
                <div className="lineItem">
                  <span className="lineLabel">Focus</span>
                  <span className="lineValue">Flusso, combustione, risposta</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardNumber">01</span>
            <h3>Architettura meccanica più semplice</h3>
            <p>
              In linea generale, il motore 2 tempi realizza il suo ciclo con
              meno componenti in movimento nella distribuzione, concentrando
              gran parte del suo comportamento nel moto del pistone, nella
              fasatura dell'aspirazione e nel flusso di scarico.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardNumber">02</span>
            <h3>Erogazione di potenza caratteristica</h3>
            <p>
              Una moto 2T è spesso associata a una risposta più pronta e
              diretta. La sensazione di guida è fortemente influenzata dalla
              fasatura della combustione, dal design della camera di espansione
              e dal range operativo del motore.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardNumber">03</span>
            <h3>Un sistema, non solo un motore</h3>
            <p>
              Per capire davvero una moto 2 tempi bisogna guardare oltre il
              cilindro. Geometria del telaio, assetto delle sospensioni,
              trasmissione, freni e comportamento di aspirazione/scarico
              definiscono insieme il carattere finale della moto.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsA2TMotorcycle;
