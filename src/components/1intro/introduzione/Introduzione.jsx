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
            Guida al Motore 2 Tempi
          </motion.span>

          <motion.h1 variants={itemVariants}>
            Introduzione
          </motion.h1>

          <motion.p className="description" variants={itemVariants}>
            Un'introduzione visiva e chiara all'anatomia di una moto 2 tempi:
            motore, aspirazione, ciclo di combustione, telaio, sospensioni,
            freni e principi meccanici fondamentali.
          </motion.p>

          <motion.div className="buttons" variants={itemVariants}>
            <a href="#motore" className="primaryBtn">
              Esplora il motore
            </a>
            <a href="#capitoli" className="secondaryBtn">
              Vedi tutte le sezioni
            </a>
          </motion.div>

        </motion.div>

        <div className="imageContainer">

  <div className="imagePlaceholder">
    
    <img
      src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWM4cG9tZHlzOTl5cmNycWd2ZGkxamlmOGd4Y25tZzF0dWd1YjN6ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pTmey0RxjqSoaX7y4f/giphy.gif"
      alt="2 stroke engine animation"
    />

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
          Due Tempi • Aspirazione • Combustione • Camera di Espansione • Telaio •
          Sospensioni • Freni • Meccanica • Due Tempi • Aspirazione • Combustione •
          Camera di Espansione • Telaio • Sospensioni • Freni • Meccanica •
        </motion.div>
      </div>
    </section>
  );
};

export default Introduzione;