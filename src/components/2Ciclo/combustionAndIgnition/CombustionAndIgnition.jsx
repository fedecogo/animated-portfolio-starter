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
              Two-stroke cycle
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Combustion, spark plug and pressure rise
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Once the fresh charge has been compressed inside the combustion
              chamber, the spark plug initiates ignition. At that moment, the
              compressed air-fuel mixture begins to burn, pressure rises
              rapidly, and the expanding gases push the piston downward.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              This is the core energy event of the engine. The combustion phase
              transforms chemical energy into cylinder pressure, and that
              pressure becomes mechanical work through the piston, connecting rod
              and crankshaft.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Core event</span>
              <h3>Ignition starts the pressure rise that drives the power stroke</h3>
            </div>

            <div className="miniRows">
              <div className="miniRow">
                <span className="miniLabel">Spark plug</span>
                <span className="miniValue">
                  Generates the spark that ignites the compressed mixture
                </span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Combustion chamber</span>
                <span className="miniValue">
                  The space where the trapped charge burns and pressure rises
                </span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Result</span>
                <span className="miniValue">
                  Expanding gases force the piston downward
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
            <span className="cardTag">Ignition</span>
            <h3>The role of the spark plug</h3>
            <p>
              The spark plug is responsible for igniting the compressed mixture
              at the correct moment. It creates an electrical spark across its
              electrodes, and that spark becomes the starting point of the flame
              front inside the chamber.
            </p>
            <p>
              Timing matters. If ignition occurs too early or too late, pressure
              development inside the cylinder changes and the engine may lose
              efficiency, smoothness or safety.
            </p>
          </motion.article>

          <motion.article className="mainCard" variants={cardVariants}>
            <span className="cardTag">Compression</span>
            <h3>Compression ratio and pressure build-up</h3>
            <p>
              Before ignition, the piston compresses the trapped charge inside
              the cylinder head volume and combustion chamber. This reduction in
              volume increases mixture density and raises the pressure level
              before the spark occurs.
            </p>
            <p>
              In general terms, the compression ratio describes the relationship
              between the larger cylinder volume and the smaller volume that
              remains when the piston reaches top dead center.
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
            <h3>Mixture trapped in the chamber</h3>
            <p>
              The compressed air-fuel charge is confined above the piston, in
              the combustion chamber and the final cylinder volume near top dead
              center.
            </p>
          </motion.article>

          <motion.article className="processCard" variants={cardVariants}>
            <span className="stepNumber">02</span>
            <h3>The spark initiates ignition</h3>
            <p>
              The spark plug fires and creates a controlled ignition point. The
              flame front begins to propagate through the compressed mixture.
            </p>
          </motion.article>

          <motion.article className="processCard" variants={cardVariants}>
            <span className="stepNumber">03</span>
            <h3>Pressure rises rapidly</h3>
            <p>
              Combustion increases gas temperature and pressure. The chamber is
              small, the gases expand, and cylinder pressure rises very quickly.
            </p>
          </motion.article>

          <motion.article className="processCard" variants={cardVariants}>
            <span className="stepNumber">04</span>
            <h3>The piston is forced downward</h3>
            <p>
              The expanding gases push on the piston crown, producing the force
              that drives the connecting rod and rotates the crankshaft.
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
            <span className="cardTag">Spark timing</span>
            <h3>Combustion must begin at the right moment</h3>
            <p>
              The ignition event has to be synchronized with piston position.
              Correct timing allows pressure to build in the most effective part
              of the cycle.
            </p>
          </motion.article>

          <motion.article className="techCard" variants={cardVariants}>
            <span className="cardTag">Combustion chamber</span>
            <h3>Chamber shape affects flame development</h3>
            <p>
              The geometry of the head and chamber influences turbulence, flame
              travel and the overall quality of the combustion event.
            </p>
          </motion.article>

          <motion.article className="techCard" variants={cardVariants}>
            <span className="cardTag">Pressure</span>
            <h3>Combustion is a controlled pressure event</h3>
            <p>
              The engine does not work because of a chaotic explosion, but
              because combustion creates a rapid and controlled pressure rise
              that acts on the piston crown.
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
              <h4>Top dead center</h4>
              <p>
                Ignition happens when the piston is very near top dead center,
                where the trapped volume is at its minimum.
              </p>
            </div>
          </motion.div>

          <motion.div className="stripCard" variants={cardVariants}>
            <span className="stripIndex">B</span>
            <div>
              <h4>Compressed charge</h4>
              <p>
                A denser charge is easier to ignite effectively and allows a
                stronger pressure rise during combustion.
              </p>
            </div>
          </motion.div>

          <motion.div className="stripCard" variants={cardVariants}>
            <span className="stripIndex">C</span>
            <div>
              <h4>Power stroke begins</h4>
              <p>
                Once combustion pressure acts on the piston crown, the energy
                event becomes mechanical motion in the rotating assembly.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CombustionAndIgnition;