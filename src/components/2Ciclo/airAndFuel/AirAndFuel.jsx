import "./airAndFuel.scss";
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

const AirAndFuel = () => {
  return (
    <section className="airAndFuel" id="air-and-fuel">
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
              Engine cycle
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Air and fuel flow
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              In a 2-stroke engine, the path of air and fuel is one of the most
              important parts of the whole system. Before combustion happens,
              the engine must draw air in, mix it with fuel, guide it through
              the intake side and move it toward the crankcase and cylinder.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              This flow is not just a simple passage. It directly influences
              throttle response, combustion quality, engine efficiency and the
              overall character of the bike.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Flow overview</span>
              <h3>Basic path of the mixture</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Air enters through the air filter</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Fuel is dosed by the carburetor</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">The mixture passes the reed valve</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">The crankcase helps transfer the charge</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="diagramBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="flowDiagram" variants={cardVariants}>
            <div className="diagramTrack"></div>

            <div className="diagramNode node1">
              <span className="nodeNumber">01</span>
              <h3>Air filter</h3>
              <p>Outside air is cleaned before entering the intake system.</p>
            </div>

            <div className="diagramNode node2">
              <span className="nodeNumber">02</span>
              <h3>Carburetor</h3>
              <p>
                Fuel is mixed with incoming air in the correct proportion for
                engine operation.
              </p>
            </div>

            <div className="diagramNode node3">
              <span className="nodeNumber">03</span>
              <h3>Reed valve</h3>
              <p>
                The mixture passes toward the crankcase while helping limit
                reverse flow.
              </p>
            </div>

            <div className="diagramNode node4">
              <span className="nodeNumber">04</span>
              <h3>Crankcase and transfer</h3>
              <p>
                The charge is compressed and guided upward toward the cylinder
                through the transfer phase.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Air</span>
            <h3>Why air quality matters</h3>
            <p>
              The engine depends on a stable volume of clean incoming air. If
              the filter is dirty or flow is restricted, the mixture balance can
              change and engine behavior becomes less precise.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Fuel</span>
            <h3>Why fuel dosing matters</h3>
            <p>
              In a carbureted 2T, fuel metering strongly affects combustion,
              response and temperature. The mixture must be close to the right
              ratio for the engine to run correctly.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Flow</span>
            <h3>Why the path matters</h3>
            <p>
              Air and fuel do not just “enter the engine”. They follow a timed
              path through filter, carburetor, reed valve and crankcase before
              contributing to combustion inside the cylinder.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default AirAndFuel;