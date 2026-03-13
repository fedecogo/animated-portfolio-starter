import "./firstCyclePhases.scss";
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

const FirstCyclePhases = () => {
  return (
    <section className="firstCyclePhases" id="first-cycle-phases">
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
              Ciclo a due tempi
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Aspirazione e compressione
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La prima parte del ciclo 2 tempi è costruita attorno a due
              processi strettamente collegati: la carica fresca viene aspirata
              nel motore e poi preparata per la combustione attraverso la
              compressione. Queste fasi sembrano semplici, ma definiscono
              l'efficacia con cui il motore si riempie, sigilla e costruisce
              pressione.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              In un motore 2T, il moto del pistone controlla sia la variazione
              di pressione che il movimento della carica. Ecco perché
              aspirazione e compressione non devono essere visti come eventi
              isolati, ma come parte della stessa sequenza meccanica dinamica.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Panoramica delle fasi</span>
              <h3>La prima fase del ciclo 2T prepara il motore all'accensione</h3>
            </div>

            <div className="miniRows">
              <div className="miniRow">
                <span className="miniLabel">Aspirazione</span>
                <span className="miniValue">
                  Il motore aspira la carica fresca verso il lato aspirazione
                </span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Compressione</span>
                <span className="miniValue">
                  La miscela intrappolata viene compressa prima della combustione
                </span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Ruolo chiave</span>
                <span className="miniValue">
                  La qualità del riempimento e l'aumento di pressione definiscono il prossimo evento di potenza
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="phasesGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article className="phaseCard aspirationCard" variants={cardVariants}>
            <div className="phaseTop">
              <span className="phaseIndex">01</span>
              <span className="phaseTag">Aspirazione</span>
            </div>

            <h3>La carica fresca entra nel motore</h3>

            <p>
              Durante l'aspirazione, il motore aspira la miscela aria-carburante
              dal lato aspirazione verso il carter. Questo avviene perché il
              moto del pistone cambia la pressione interna e crea le condizioni
              necessarie perché la carica fresca si sposti verso l'interno.
            </p>

            <p>
              In molte configurazioni a due tempi, il pacco lamellare aiuta a
              regolare questo processo di ingresso consentendo il flusso nella
              direzione corretta e riducendo il movimento inverso della miscela.
            </p>

            <div className="phaseDetails">
              <div className="detailItem">
                <span className="detailLabel">Evento principale</span>
                <span className="detailValue">Ammissione della miscela</span>
              </div>

              <div className="detailItem">
                <span className="detailLabel">Elementi chiave</span>
                <span className="detailValue">Carburatore, condotto di aspirazione, pacco lamellare</span>
              </div>

              <div className="detailItem">
                <span className="detailLabel">Obiettivo principale</span>
                <span className="detailValue">Riempire il motore con una carica fresca</span>
              </div>
            </div>
          </motion.article>

          <motion.article className="phaseCard compressionCard" variants={cardVariants}>
            <div className="phaseTop">
              <span className="phaseIndex">02</span>
              <span className="phaseTag">Compressione</span>
            </div>

            <h3>La miscela viene preparata per l'accensione</h3>

            <p>
              Una volta che la carica fresca si trova nella parte corretta del
              motore, la fase di compressione aumenta la pressione prima della
              combustione. Mentre il pistone sale, la miscela intrappolata nel
              cilindro viene compressa e portata più vicino alle condizioni di
              accensione.
            </p>

            <p>
              La compressione è fondamentale perché influisce sulla qualità
              della combustione, sullo sviluppo della fiamma, sull'efficienza
              e sulla reattività complessiva del motore.
            </p>

            <div className="phaseDetails">
              <div className="detailItem">
                <span className="detailLabel">Evento principale</span>
                <span className="detailValue">Aumento di pressione</span>
              </div>

              <div className="detailItem">
                <span className="detailLabel">Elementi chiave</span>
                <span className="detailValue">Pistone, cilindro, camera di combustione</span>
              </div>

              <div className="detailItem">
                <span className="detailLabel">Obiettivo principale</span>
                <span className="detailValue">Preparare la miscela per l'accensione</span>
              </div>
            </div>
          </motion.article>
        </motion.div>
<div className="combustionImage">
  <img
    src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773112974/ChatGPT_Image_Mar_10_2026_12_16_58_PM_lt0rco.png"
    alt="Diagramma camera di combustione a due tempi"
  />
</div>

        <motion.div
          className="technicalGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="techCard" variants={cardVariants}>
            <span className="cardTag">Pressione</span>
            <h3>La variazione di pressione guida il ciclo</h3>
            <p>
              In un motore 2 tempi, il moto del pistone non è solo movimento
              meccanico: genera anche le variazioni di pressione che rendono
              possibili aspirazione e compressione.
            </p>
          </motion.article>

          <motion.article className="techCard" variants={cardVariants}>
            <span className="cardTag">Tenuta</span>
            <h3>La compressione dipende dal controllo</h3>
            <p>
              L'efficacia della compressione dipende da quanto bene la miscela
              è intrappolata e contenuta nel cilindro prima dell'accensione.
            </p>
          </motion.article>

          <motion.article className="techCard" variants={cardVariants}>
            <span className="cardTag">Risultato</span>
            <h3>Queste due fasi definiscono la combustione</h3>
            <p>
              Se l'aspirazione è scarsa o la compressione è debole, il
              successivo evento di combustione non potrà essere efficiente,
              pulito o potente come dovrebbe.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstCyclePhases;
