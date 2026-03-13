import "./engineLifeTitle.scss";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const EngineLifeTitle = () => {
  return (
    <section className="engineLifeTitle">

      <motion.div
        className="wrapper"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.span className="eyebrow" variants={itemVariants}>
          Fondamentali del motore
        </motion.span>

        <motion.h2 variants={itemVariants}>
          Il ciclo del motore
        </motion.h2>

        <motion.div className="engineGifContainer" variants={itemVariants}>
          <a
            href="https://makeagif.com/gif/2-stroke-engine-animation-t4M_0h"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.makeagif.com/media/7-03-2015/t4M_0h.gif"
              alt="Animazione motore a due tempi"
            />
          </a>
        </motion.div>

      </motion.div>

      <div className="backgroundGrid"></div>

    </section>
  );
};

export default EngineLifeTitle;
