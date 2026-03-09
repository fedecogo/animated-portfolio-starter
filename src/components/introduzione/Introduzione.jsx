import "./introduzione.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -80,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const scrollIconVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 8,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const sliderVariants = {
  initial: {
    x: "0%",
  },
  animate: {
    x: "-50%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 18,
      ease: "linear",
    },
  },
};

const Introduzione = () => {
  return (
    <section className="introduzione" id="home">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span className="eyebrow" variants={itemVariants}>
            2-Stroke Engine Guide
          </motion.span>

          <motion.h1 variants={itemVariants}>
            How a 2-stroke motorcycle works
          </motion.h1>

          <motion.p className="description" variants={itemVariants}>
            A clear and visual introduction to the anatomy of a 2-stroke bike:
            engine, intake, combustion cycle, chassis, suspension, brakes and
            core mechanical principles.
          </motion.p>

          <motion.div className="buttons" variants={itemVariants}>
            <a href="#motore" className="primaryBtn">
              Explore the engine
            </a>
            <a href="#capitoli" className="secondaryBtn">
              View all sections
            </a>
          </motion.div>

        </motion.div>

        <div className="imageContainer">
          {/* Qui dopo puoi inserire:
              - un'immagine della moto
              - un modello 3D
              - una silhouette tecnica
              - un blocco grafico decorativo
          */}
          <div className="imagePlaceholder">
            <span>2T ENGINE / BIKE VISUAL</span>
          </div>
        </div>
      </div>

      <div className="slidingTextWrapper">
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Two-Stroke • Intake • Combustion • Expansion Chamber • Chassis •
          Suspension • Brakes • Mechanics • Two-Stroke • Intake • Combustion •
          Expansion Chamber • Chassis • Suspension • Brakes • Mechanics •
        </motion.div>
      </div>
    </section>
  );
};

export default Introduzione;