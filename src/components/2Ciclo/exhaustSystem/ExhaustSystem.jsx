import "./exhaustSystem.scss";
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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const ExhaustSystem = () => {
  return (
    <section className="exhaustSystem" id="exhaust-system">
      <div className="wrapper">
        <motion.div
          className="introBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="titleColumn">
            <motion.span className="sectionLabel" variants={fadeUpVariants}>
              Ciclo a due tempi
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Flusso di scarico e camera di espansione
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              In un motore a due tempi lo scarico non è responsabile solo della
              rimozione dei gas combusti. Svolge anche un ruolo fondamentale nel
              modo in cui il motore respira e nell'efficacia con cui il cilindro
              viene lavato.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Attraverso le onde di pressione generate all'interno della camera
              di espansione, lo scarico può aiutare a spingere la miscela fresca
              nuovamente verso il cilindro, migliorando l'efficienza di
              riempimento e le prestazioni complessive del motore.
            </motion.p>
          </div>
        </motion.div>

        {/* BLOCCO IMMAGINE */}

        <div className="exhaustImageBlock">
          <div className="imageContainer">
            {/* QUI METTERAI LA TUA IMMAGINE */}
            <img
              src="https://i.makeagif.com/media/11-08-2016/GHFqhJ.gif"
              alt="Diagramma camera di espansione a due tempi"
            />
          </div>
        </div>

        <motion.div
          className="exhaustGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.article className="exhaustCard" variants={fadeUpVariants}>
            <span className="cardTag">Luce di scarico</span>
            <h3>I gas combusti lasciano il cilindro</h3>
            <p>
              Quando il pistone scopre la luce di scarico, i gas ad alta pressione
              prodotti dalla combustione iniziano a fuoriuscire dal cilindro verso
              il sistema di scarico.
            </p>
          </motion.article>

          <motion.article className="exhaustCard" variants={fadeUpVariants}>
            <span className="cardTag">Camera di espansione</span>
            <h3>Le onde di pressione definiscono il comportamento del motore</h3>
            <p>
              La camera di espansione è progettata per riflettere onde di
              pressione che viaggiano verso il cilindro. Queste onde possono
              aiutare a impedire che la miscela fresca fuoriesca troppo presto.
            </p>
          </motion.article>

          <motion.article className="exhaustCard" variants={fadeUpVariants}>
            <span className="cardTag">Lavaggio</span>
            <h3>La carica fresca sostituisce i gas di scarico</h3>
            <p>
              Durante il lavaggio, la miscela fresca che entra nel cilindro
              aiuta a spingere fuori i gas combusti rimanenti attraverso la
              luce di scarico, preparando la camera per il ciclo successivo.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default ExhaustSystem;
