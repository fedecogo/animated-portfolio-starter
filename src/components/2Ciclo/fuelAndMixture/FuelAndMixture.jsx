import "./fuelAndMixture.scss";
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
    y: 30,
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
    y: 24,
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

const FuelAndMixture = () => {
  return (
    <section className="fuelAndMixture" id="fuel-and-mixture">
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
              Fuel system
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Fuel, oil and mixture balance
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              In a 2-stroke engine, fuel does more than simply support
              combustion. It works together with air and two-stroke oil to form
              the fresh charge that enters the engine and allows it to operate
              correctly.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Mixture quality affects throttle response, combustion behavior,
              operating temperature and reliability under load. For that reason,
              understanding lean, correct and rich mixture conditions is one of
              the most important parts of reading a 2T engine.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Core balance</span>
              <h3>Air, fuel and oil must work together</h3>
            </div>

            <div className="miniRows">
              <div className="miniRow">
                <span className="miniLabel">Fuel</span>
                <span className="miniValue">
                  Supplies the chemical energy released during combustion
                </span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Two-stroke oil</span>
                <span className="miniValue">
                  Provides essential lubrication for internal moving parts
                </span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Mixture ratio</span>
                <span className="miniValue">
                  Must remain within a safe and effective operating range
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="topCards"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article className="featureCard" variants={cardVariants}>
            <span className="cardTag">Fuel</span>
            <h3>Fuel</h3>
            <p>
              Fuel is the energy-bearing part of the fresh charge. Once mixed
              with incoming air, it becomes part of the combustible mixture that
              will later ignite inside the cylinder.
            </p>
          </motion.article>

          <motion.article className="featureCard" variants={cardVariants}>
            <span className="cardTag">Lubrication</span>
            <h3>Two-stroke oil</h3>
            <p>
              In many 2T engines, oil is carried with the mixture or delivered
              by a separate system. Its role is essential because internal
              components still require lubrication while the engine is running.
            </p>
          </motion.article>

          <motion.article className="featureCard" variants={cardVariants}>
            <span className="cardTag">Mixture ratio</span>
            <h3>Air-fuel balance</h3>
            <p>
              The engine requires the correct proportion of air and fuel. If the
              balance shifts too far in one direction, combustion quality,
              temperature and response can change significantly.
            </p>
          </motion.article>
        </motion.div>

        <motion.div
          className="mixtureGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="mixtureCard lean" variants={cardVariants}>
            <span className="mixtureBadge">Lean</span>
            <h3>Lean mixture</h3>
            <p>
              A lean mixture contains too much air in relation to fuel. The
              engine may feel sharp and reactive at first, but combustion
              temperature can rise and the safety margin can decrease.
            </p>

            <div className="stateBox">
              <span className="stateLabel">Typical effect</span>
              <span className="stateValue">
                Higher running temperature, reduced safety margin
              </span>
            </div>
          </motion.article>

          <motion.article className="mixtureCard medium" variants={cardVariants}>
            <span className="mixtureBadge">Correct</span>
            <h3>Correct mixture</h3>
            <p>
              A correct mixture keeps the engine in a healthier operating zone.
              Combustion is cleaner, throttle response is more consistent and
              the engine works with a better balance between performance and
              reliability.
            </p>

            <div className="stateBox">
              <span className="stateLabel">Typical effect</span>
              <span className="stateValue">
                Best compromise between performance and safety
              </span>
            </div>
          </motion.article>

          <motion.article className="mixtureCard rich" variants={cardVariants}>
            <span className="mixtureBadge">Rich</span>
            <h3>Rich mixture</h3>
            <p>
              A rich mixture contains more fuel than necessary relative to the
              amount of air. The engine may feel softer, less clean in response
              and less willing to rev out freely.
            </p>

            <div className="stateBox">
              <span className="stateLabel">Typical effect</span>
              <span className="stateValue">
                Softer response, less efficient combustion
              </span>
            </div>
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
            <span className="stripIndex">01</span>
            <div>
              <h4>Too lean</h4>
              <p>
                More air, less fuel. This can increase combustion temperature
                and reduce the engine’s safety margin.
              </p>
            </div>
          </motion.div>

          <motion.div className="stripCard" variants={cardVariants}>
            <span className="stripIndex">02</span>
            <div>
              <h4>Correct operating range</h4>
              <p>
                The best balance between combustion quality, throttle response
                and engine reliability.
              </p>
            </div>
          </motion.div>

          <motion.div className="stripCard" variants={cardVariants}>
            <span className="stripIndex">03</span>
            <div>
              <h4>Too rich</h4>
              <p>
                More fuel, less clean burning. The engine can feel heavier and
                less precise in power delivery.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FuelAndMixture;