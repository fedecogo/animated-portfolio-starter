import "./twoStrokeVsFourStroke.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
    y: 28,
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


const accordionData = [
  {
    id: 1,
    title: "Frequenza del ciclo",
    twoStroke:
      "Un motore 2 tempi completa il suo intero ciclo operativo in due colpi di pistone. Questo significa che il motore produce un evento di potenza più frequentemente, il che spesso si traduce in un carattere più immediato e reattivo.",
    fourStroke:
      "Un motore 4 tempi richiede quattro colpi di pistone per completare lo stesso ciclo: aspirazione, compressione, combustione e scarico. Poiché le fasi sono più separate, il motore di solito eroga la potenza in modo più fluido e progressivo.",
  },
  {
    id: 2,
    title: "Complessità meccanica",
    twoStroke:
      "L'architettura 2 tempi è meccanicamente più semplice nel suo concetto base. Gran parte del suo comportamento è controllata dal moto del pistone, dalla fasatura dell'aspirazione, dal design delle luci e dal flusso di scarico piuttosto che da una complessa distribuzione.",
    fourStroke:
      "L'architettura 4 tempi è generalmente più complessa perché si affida a componenti aggiuntivi come valvole, alberi a camme e sistemi di fasatura che regolano il ciclo del motore.",
  },
  {
    id: 3,
    title: "Erogazione della potenza",
    twoStroke:
      "Un motore 2T produce spesso una banda di potenza più aggressiva e concentrata. Quando il motore raggiunge il suo range operativo efficace, l'aumento di potenza può sembrare brusco ed energico.",
    fourStroke:
      "Un motore 4T di solito eroga la potenza in modo più ampio e lineare. La progressione è spesso più facile da controllare, specialmente su un range di giri più esteso.",
  },
  {
    id: 4,
    title: "Peso e semplicità",
    twoStroke:
      "Grazie alla sua architettura più semplice e al numero ridotto di parti in movimento, un motore 2 tempi è spesso più leggero e compatto rispetto a un design 4 tempi comparabile.",
    fourStroke:
      "I componenti aggiuntivi richiesti per la fasatura delle valvole e il ciclo operativo più lungo rendono tipicamente un motore 4 tempi più pesante e strutturalmente più complesso.",
  },
  {
    id: 5,
    title: "Manutenzione e funzionamento",
    twoStroke:
      "Un motore 2T richiede di solito una manutenzione meccanica più semplice ma dipende fortemente dalla corretta lubrificazione e dalla gestione della miscela per funzionare correttamente.",
    fourStroke:
      "Un motore 4T richiede spesso un'assistenza meccanica più complessa a causa dei componenti della distribuzione, ma i sistemi di lubrificazione e carburante sono tipicamente più separati.",
  },
];



const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <motion.div className={`accordionItem ${isOpen ? "open" : ""}`} variants={cardVariants}>
      <button className="accordionHeader" onClick={onClick}>
        <span>{item.title}</span>
        <motion.span
          className="accordionIcon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="accordionContent"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="accordionInner">
              <div className="accordionSide">
                <span className="sideLabel">2T</span>
                <p>{item.twoStroke}</p>
              </div>

              <div className="accordionSide">
                <span className="sideLabel">4T</span>
                <p>{item.fourStroke}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TwoStrokeVsFourStroke = () => {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="twoStrokeVsFourStroke" id="2t-vs-4t">
      <div className="wrapper">
        <motion.div
          className="topSection"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="headingBlock">
            <motion.span className="sectionLabel" variants={fadeUpVariants}>
              Confronto tra motori
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              2 tempi vs 4 tempi: la differenza fondamentale
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La distinzione essenziale sta in come il motore completa il suo
              ciclo di potenza. Un 2 tempi genera potenza ogni due colpi di
              pistone, mentre un 4 tempi completa lo stesso ciclo in quattro
              colpi separati.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Quella differenza cambia tutta la personalità della moto:
              risposta, architettura, complessità, carattere di manutenzione e
              sensazione di guida.
            </motion.p>
          </div>

          <motion.div className="comparisonPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Sintesi rapida</span>
              <h3>Un'idea, due filosofie motoristiche molto diverse</h3>
            </div>

            <div className="miniRows">
              <div className="miniRow">
                <span className="miniLabel">Ciclo 2T</span>
                <span className="miniValue">Tempo motore più frequente</span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Ciclo 4T</span>
                <span className="miniValue">Fasi operative più separate</span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Effetto principale</span>
                <span className="miniValue">Risposta, complessità e sensazione diverse</span>
              </div>
            </div>
          </motion.div>
        </motion.div>


              {/* comparisonGrid */}
        <motion.div
          className="comparisonGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article className="engineCard twoStrokeCard" variants={cardVariants}>
            <span className="engineTag">2 Tempi</span>
            <h3>Più compatto e diretto</h3>

            <ul>
              <li>Completa il ciclo in due tempi</li>
              <li>Produce potenza più frequentemente</li>
              <li>Ha di solito una struttura meccanica più semplice</li>
              <li>Si sente più leggero, reattivo e immediato</li>
            </ul>
          </motion.article>

          <motion.article className="engineCard fourStrokeCard" variants={cardVariants}>
            <span className="engineTag">4 Tempi</span>
            <h3>Più progressivo e strutturato</h3>

            <ul>
              <li>Completa il ciclo in quattro tempi</li>
              <li>Ha fasi motore più separate</li>
              <li>Usa di solito un sistema di valvole più articolato</li>
              <li>Si sente spesso più fluido e ampio nell'erogazione</li>
            </ul>
          </motion.article>
        </motion.div>

        <motion.div
          className="accordionBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="accordionHeading" variants={fadeUpVariants}>
            <span className="accordionLabel">Confronto espandibile</span>
            <h3>Apri ogni punto per confrontare 2T e 4T più chiaramente</h3>
          </motion.div>

          <div className="accordionList">
            {accordionData.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onClick={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoStrokeVsFourStroke;
