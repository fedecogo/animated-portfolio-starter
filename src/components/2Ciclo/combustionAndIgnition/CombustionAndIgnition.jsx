import "./combustionAndIgnition.scss";
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

const CombustionAndIgnition = () => {
  return (
    <section className="combustionAndIgnition" id="combustion-and-ignition">
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
              Combustione, candela e aumento di pressione
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Una volta che la carica fresca è stata compressa nella camera di
              combustione, la candela dà inizio all'accensione. In quel momento,
              la miscela aria-carburante compressa inizia a bruciare, la
              pressione sale rapidamente e i gas in espansione spingono il
              pistone verso il basso.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Questo è l'evento energetico centrale del motore. La fase di
              combustione trasforma l'energia chimica in pressione nel cilindro,
              e quella pressione diventa lavoro meccanico attraverso il pistone,
              la biella e l'albero motore.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Evento centrale</span>
              <h3>L'accensione avvia l'aumento di pressione che guida il tempo motore</h3>
            </div>

            <div className="miniRows">
              <div className="miniRow">
                <span className="miniLabel">Candela</span>
                <span className="miniValue">
                  Genera la scintilla che accende la miscela compressa
                </span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Camera di combustione</span>
                <span className="miniValue">
                  Lo spazio in cui la carica intrappolata brucia e la pressione sale
                </span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Risultato</span>
                <span className="miniValue">
                  I gas in espansione spingono il pistone verso il basso
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mainGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article className="mainCard" variants={cardVariants}>
            <span className="cardTag">Accensione</span>
            <h3>Il ruolo della candela</h3>
            <p>
              La candela è responsabile dell'accensione della miscela compressa
              al momento corretto. Crea una scintilla elettrica tra i suoi
              elettrodi, e quella scintilla diventa il punto di partenza del
              fronte di fiamma nella camera.
            </p>
            <p>
              La fasatura è importante. Se l'accensione avviene troppo presto o
              troppo tardi, lo sviluppo della pressione nel cilindro cambia e
              il motore può perdere efficienza, fluidità o sicurezza.
            </p>
          </motion.article>

          <motion.article className="mainCard" variants={cardVariants}>
            <span className="cardTag">Compressione</span>
            <h3>Rapporto di compressione e aumento di pressione</h3>
            <p>
              Prima dell'accensione, il pistone comprime la carica intrappolata
              nel volume della testata e nella camera di combustione. Questa
              riduzione di volume aumenta la densità della miscela e innalza il
              livello di pressione prima che scocchi la scintilla.
            </p>
            <p>
              In termini generali, il rapporto di compressione descrive la
              relazione tra il volume maggiore del cilindro e il volume minore
              che rimane quando il pistone raggiunge il punto morto superiore.
            </p>
          </motion.article>
        </motion.div>

        <motion.div
          className="processGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="processCard" variants={cardVariants}>
            <span className="stepNumber">01</span>
            <h3>Miscela intrappolata nella camera</h3>
            <p>
              La carica aria-carburante compressa è confinata sopra il pistone,
              nella camera di combustione e nel volume finale del cilindro vicino
              al punto morto superiore.
            </p>
          </motion.article>

          <motion.article className="processCard" variants={cardVariants}>
            <span className="stepNumber">02</span>
            <h3>La scintilla dà inizio all'accensione</h3>
            <p>
              La candela scocca e crea un punto di accensione controllato. Il
              fronte di fiamma inizia a propagarsi attraverso la miscela compressa.
            </p>
          </motion.article>

          <motion.article className="processCard" variants={cardVariants}>
            <span className="stepNumber">03</span>
            <h3>La pressione sale rapidamente</h3>
            <p>
              La combustione aumenta la temperatura e la pressione dei gas. La
              camera è piccola, i gas si espandono e la pressione nel cilindro
              sale molto rapidamente.
            </p>
          </motion.article>

          <motion.article className="processCard" variants={cardVariants}>
            <span className="stepNumber">04</span>
            <h3>Il pistone viene spinto verso il basso</h3>
            <p>
              I gas in espansione premono sulla testa del pistone, producendo la
              forza che muove la biella e fa ruotare l'albero motore.
            </p>
          </motion.article>
        </motion.div>

        <motion.div
          className="technicalGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="techCard" variants={cardVariants}>
            <span className="cardTag">Fasatura accensione</span>
            <h3>La combustione deve iniziare al momento giusto</h3>
            <p>
              L'evento di accensione deve essere sincronizzato con la posizione
              del pistone. La fasatura corretta consente alla pressione di
              costruirsi nella parte più efficace del ciclo.
            </p>
          </motion.article>

          <motion.article className="techCard" variants={cardVariants}>
            <span className="cardTag">Camera di combustione</span>
            <h3>La forma della camera influisce sullo sviluppo della fiamma</h3>
            <p>
              La geometria della testata e della camera influenza la turbolenza,
              la propagazione della fiamma e la qualità complessiva dell'evento
              di combustione.
            </p>
          </motion.article>

          <motion.article className="techCard" variants={cardVariants}>
            <span className="cardTag">Pressione</span>
            <h3>La combustione è un evento di pressione controllato</h3>
            <p>
              Il motore non funziona grazie a un'esplosione caotica, ma perché
              la combustione crea un rapido e controllato aumento di pressione
              che agisce sulla testa del pistone.
            </p>
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
            <span className="stripIndex">A</span>
            <div>
              <h4>Punto morto superiore</h4>
              <p>
                L'accensione avviene quando il pistone è molto vicino al punto
                morto superiore, dove il volume intrappolato è al minimo.
              </p>
            </div>
          </motion.div>

          <motion.div className="stripCard" variants={cardVariants}>
            <span className="stripIndex">B</span>
            <div>
              <h4>Carica compressa</h4>
              <p>
                Una carica più densa è più facile da accendere efficacemente e
                consente un aumento di pressione più forte durante la combustione.
              </p>
            </div>
          </motion.div>

          <motion.div className="stripCard" variants={cardVariants}>
            <span className="stripIndex">C</span>
            <div>
              <h4>Inizio del tempo motore</h4>
              <p>
                Una volta che la pressione di combustione agisce sulla testa del
                pistone, l'evento energetico diventa moto meccanico nel gruppo
                rotante.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CombustionAndIgnition;
