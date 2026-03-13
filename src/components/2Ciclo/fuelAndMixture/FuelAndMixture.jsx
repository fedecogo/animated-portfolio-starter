import "./fuelAndMixture.scss";
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
    y: 30,
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
    y: 24,
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

const FuelAndMixture = () => {
  return (
    <section className="fuelAndMixture" id="fuel-and-mixture">
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
              Sistema carburante
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Carburante, olio e bilanciamento della miscela
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              In un motore 2 tempi, il carburante fa molto di più che supportare
              la combustione. Lavora insieme all'aria e all'olio 2T per formare
              la carica fresca che entra nel motore e gli consente di funzionare
              correttamente.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La qualità della miscela influisce sulla risposta all'acceleratore,
              sul comportamento della combustione, sulla temperatura di esercizio
              e sull'affidabilità sotto carico. Per questo motivo, comprendere
              le condizioni di miscela magra, corretta e ricca è uno degli
              aspetti più importanti nella lettura di un motore 2T.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Equilibrio fondamentale</span>
              <h3>Aria, carburante e olio devono lavorare insieme</h3>
            </div>

            <div className="miniRows">
              <div className="miniRow">
                <span className="miniLabel">Carburante</span>
                <span className="miniValue">
                  Fornisce l'energia chimica rilasciata durante la combustione
                </span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Olio 2T</span>
                <span className="miniValue">
                  Garantisce la lubrificazione essenziale delle parti interne in movimento
                </span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Rapporto di miscela</span>
                <span className="miniValue">
                  Deve rimanere entro un range operativo sicuro ed efficace
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="topCards"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article className="featureCard" variants={cardVariants}>
            <span className="cardTag">Carburante</span>
            <h3>Carburante</h3>
            <p>
              Il carburante è la parte energetica della carica fresca. Una volta
              miscelato con l'aria in entrata, diventa parte della miscela
              combustibile che si accenderà nel cilindro.
            </p>
          </motion.article>

          <motion.article className="featureCard" variants={cardVariants}>
            <span className="cardTag">Lubrificazione</span>
            <h3>Olio due tempi</h3>
            <p>
              In molti motori 2T, l'olio è trasportato insieme alla miscela o
              erogato da un sistema separato. Il suo ruolo è essenziale perché
              i componenti interni richiedono lubrificazione anche durante il
              funzionamento del motore.
            </p>
          </motion.article>

          <motion.article className="featureCard" variants={cardVariants}>
            <span className="cardTag">Rapporto di miscela</span>
            <h3>Equilibrio aria-carburante</h3>
            <p>
              Il motore richiede la proporzione corretta di aria e carburante.
              Se l'equilibrio si sposta troppo in una direzione, la qualità
              della combustione, la temperatura e la risposta possono cambiare
              significativamente.
            </p>
          </motion.article>
        </motion.div>

        <motion.div
          className="mixtureGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="mixtureCard lean" variants={cardVariants}>
            <span className="mixtureBadge">Magra</span>
            <h3>Miscela magra</h3>
            <p>
              Una miscela magra contiene troppa aria in relazione al carburante.
              Il motore può sembrare reattivo all'inizio, ma la temperatura di
              combustione può salire e il margine di sicurezza può diminuire.
            </p>

            <div className="stateBox">
              <span className="stateLabel">Effetto tipico</span>
              <span className="stateValue">
                Temperatura di esercizio elevata, margine di sicurezza ridotto
              </span>
            </div>
          </motion.article>

          <motion.article className="mixtureCard medium" variants={cardVariants}>
            <span className="mixtureBadge">Corretta</span>
            <h3>Miscela corretta</h3>
            <p>
              Una miscela corretta mantiene il motore in una zona operativa più
              sana. La combustione è più pulita, la risposta all'acceleratore è
              più costante e il motore lavora con un migliore equilibrio tra
              prestazioni e affidabilità.
            </p>

            <div className="stateBox">
              <span className="stateLabel">Effetto tipico</span>
              <span className="stateValue">
                Miglior compromesso tra prestazioni e sicurezza
              </span>
            </div>
          </motion.article>

          <motion.article className="mixtureCard rich" variants={cardVariants}>
            <span className="mixtureBadge">Ricca</span>
            <h3>Miscela ricca</h3>
            <p>
              Una miscela ricca contiene più carburante del necessario rispetto
              alla quantità d'aria. Il motore può sembrare meno reattivo, meno
              pulito nella risposta e meno propenso a salire di giri liberamente.
            </p>

            <div className="stateBox">
              <span className="stateLabel">Effetto tipico</span>
              <span className="stateValue">
                Risposta attutita, combustione meno efficiente
              </span>
            </div>
          </motion.article>
        </motion.div>

        <motion.div
          className="bottomStrip"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="stripCard" variants={cardVariants}>
            <span className="stripIndex">01</span>
            <div>
              <h4>Troppo magra</h4>
              <p>
                Più aria, meno carburante. Questo può aumentare la temperatura
                di combustione e ridurre il margine di sicurezza del motore.
              </p>
            </div>
          </motion.div>

          <motion.div className="stripCard" variants={cardVariants}>
            <span className="stripIndex">02</span>
            <div>
              <h4>Range operativo corretto</h4>
              <p>
                Il miglior equilibrio tra qualità della combustione, risposta
                all'acceleratore e affidabilità del motore.
              </p>
            </div>
          </motion.div>

          <motion.div className="stripCard" variants={cardVariants}>
            <span className="stripIndex">03</span>
            <div>
              <h4>Troppo ricca</h4>
              <p>
                Più carburante, combustione meno pulita. Il motore può sembrare
                più pesante e meno preciso nell'erogazione della potenza.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FuelAndMixture;
