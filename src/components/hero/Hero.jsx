import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -120,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      staggerChildren: 0.12,
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
      ease: "easeOut",
    },
  },
};

const scrollVariants = {
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
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 30,
      ease: "linear",
    },
  },
};

const Hero = ({ onOpenSidebar }) => {
  return (
    <section className="hero">
      <div className="heroBackground">
        <img
          src="https://i.pinimg.com/originals/9b/25/55/9b2555968580a54cae0f70dff39b296e.gif"
          alt="2 stroke engine animation"
        />
      </div>

      <div className="heroOverlay"></div>

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
            Dentro il<br />
            <span className="gradientText">2 tempi</span><br />
            da corsa
          </motion.h1>

          <motion.p className="description" variants={itemVariants}>
            Una guida visiva e tecnica al ciclo del motore, aspirazione,
            combustione, scarico e ai principi meccanici fondamentali del mondo 2T.
          </motion.p>

          <motion.div className="statsRow" variants={itemVariants}>
            <span>5 Capitoli</span>
            <span className="dot">·</span>
            <span>40+ Componenti</span>
            <span className="dot">·</span>
            <span>Guida tecnica completa</span>
          </motion.div>

          <motion.div className="buttons" variants={itemVariants}>
            <button className="primaryBtn" onClick={onOpenSidebar}>
              Esplora le sezioni ↗
            </button>
            <a href="#MotoreIntro" className="secondaryBtn">
              Inizia a leggere
            </a>
          </motion.div>

          <motion.img
            className="scrollIcon"
            variants={scrollVariants}
            initial="initial"
            animate="animate"
            src="/scroll.png"
            alt="Scroll down"
          />
        </motion.div>
      </div>

      <motion.div
        className="SLIDINGtEXTcONTAINER"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Come funziona un motore 2 tempi • Come funziona un motore 2 tempi • Come
        funziona un motore 2 tempi •
      </motion.div>
    </section>
  );
};

export default Hero;