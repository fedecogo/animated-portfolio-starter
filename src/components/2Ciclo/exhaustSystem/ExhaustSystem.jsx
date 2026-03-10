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
              Two-stroke cycle
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Exhaust flow and expansion chamber
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              In a two-stroke engine the exhaust system is not just responsible
              for removing burnt gases. It also plays a fundamental role in the
              way the engine breathes and how efficiently the cylinder is
              scavenged.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Through pressure waves generated inside the expansion chamber, the
              exhaust can help push fresh mixture back toward the cylinder,
              improving filling efficiency and overall engine performance.
            </motion.p>
          </div>
        </motion.div>

        {/* IMAGE BLOCK */}

        <div className="exhaustImageBlock">
          <div className="imageContainer">
            {/* QUI METTERAI LA TUA IMMAGINE */}
            <img
              src="https://i.makeagif.com/media/11-08-2016/GHFqhJ.gif"
              alt="Two stroke expansion chamber diagram"
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
            <span className="cardTag">Exhaust port</span>
            <h3>Burnt gases leave the cylinder</h3>
            <p>
              When the piston uncovers the exhaust port, the high-pressure gases
              produced by combustion begin to escape from the cylinder toward
              the exhaust system.
            </p>
          </motion.article>

          <motion.article className="exhaustCard" variants={fadeUpVariants}>
            <span className="cardTag">Expansion chamber</span>
            <h3>Pressure waves shape engine behavior</h3>
            <p>
              The expansion chamber is designed to reflect pressure waves that
              travel back toward the cylinder. These waves can help prevent
              fresh mixture from escaping too early.
            </p>
          </motion.article>

          <motion.article className="exhaustCard" variants={fadeUpVariants}>
            <span className="cardTag">Scavenging</span>
            <h3>Fresh charge replaces exhaust gases</h3>
            <p>
              During scavenging, the fresh mixture entering the cylinder helps
              push the remaining burnt gases out through the exhaust port,
              preparing the chamber for the next cycle.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default ExhaustSystem;