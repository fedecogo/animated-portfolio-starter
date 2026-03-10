import "./whatIsA2TMotorcycle.scss";
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
    y: 30,
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

const WhatIsA2TMotorcycle = () => {
  return (
    <section className="whatIsA2TMotorcycle" id="what-is-a-2t-motorcycle">
      <div className="wrapper">
        <motion.div
          className="introGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="leftColumn">
            <motion.span className="sectionLabel" variants={fadeUpVariants}>
              Introduction
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              What is a 2-stroke motorcycle?
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              A 2-stroke motorcycle is built around an engine that completes its
              power cycle in just two piston strokes. Compared with a 4-stroke,
              the design is mechanically simpler, lighter, and often more
              immediate in its power delivery.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              That simplicity is part of the fascination. A 2T bike is not just
              “an older type of motorcycle”: it is a different mechanical logic,
              with its own combustion rhythm, intake flow, lubrication system,
              exhaust behavior and riding character.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              This project is designed as a visual guide to understand that
              logic step by step, starting from the engine and then expanding to
              chassis, suspension, brakes, electronics and bodywork.
            </motion.p>
          </div>

          <motion.div className="rightColumn" variants={fadeUpVariants}>
            <div className="infoPanel">
              <div className="panelHeader">
                <span className="panelTag">2T Overview</span>
                <h3>Core identity of a two-stroke bike</h3>
              </div>

              <div className="panelLines">
                <div className="lineItem">
                  <span className="lineLabel">Cycle</span>
                  <span className="lineValue">Power every 2 strokes</span>
                </div>
                <div className="lineItem">
                  <span className="lineLabel">Character</span>
                  <span className="lineValue">Light, reactive, mechanical</span>
                </div>
                <div className="lineItem">
                  <span className="lineLabel">Complexity</span>
                  <span className="lineValue">Lower than many 4T layouts</span>
                </div>
                <div className="lineItem">
                  <span className="lineLabel">Focus</span>
                  <span className="lineValue">Flow, combustion, response</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardNumber">01</span>
            <h3>Simpler mechanical architecture</h3>
            <p>
              In general terms, the 2-stroke engine achieves its cycle with
              fewer moving valvetrain components, concentrating much of its
              behavior in piston motion, intake timing and exhaust flow.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardNumber">02</span>
            <h3>Distinct power delivery</h3>
            <p>
              A 2T motorcycle is often associated with a sharper and more direct
              response. Its riding feel is strongly influenced by combustion
              timing, expansion chamber design and the engine’s operating range.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardNumber">03</span>
            <h3>A system, not only an engine</h3>
            <p>
              To really understand a 2-stroke motorcycle, you have to look
              beyond the cylinder. Frame geometry, suspension setup,
              transmission, brakes and intake/exhaust behavior all shape the
              final character of the bike.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsA2TMotorcycle;