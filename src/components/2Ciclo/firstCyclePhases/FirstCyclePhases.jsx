import "./firstCyclePhases.scss";
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

const FirstCyclePhases = () => {
  return (
    <section className="firstCyclePhases" id="first-cycle-phases">
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
              Aspiration and compression
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              The first part of the 2-stroke cycle is built around two tightly
              connected processes: the fresh charge is drawn into the engine,
              and then prepared for combustion by compression. These phases are
              simple in appearance, but they define how effectively the engine
              fills, seals and builds pressure.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              In a 2T engine, piston motion controls both pressure variation and
              charge movement. That is why aspiration and compression should not
              be seen as isolated events, but as part of the same dynamic
              mechanical sequence.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Phase overview</span>
              <h3>The first stage of the 2T cycle prepares the engine to fire</h3>
            </div>

            <div className="miniRows">
              <div className="miniRow">
                <span className="miniLabel">Aspiration</span>
                <span className="miniValue">
                  The engine draws the fresh charge toward the intake side
                </span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Compression</span>
                <span className="miniValue">
                  The trapped mixture is compressed before combustion
                </span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Key role</span>
                <span className="miniValue">
                  Filling quality and pressure build-up shape the next power event
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="phasesGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article className="phaseCard aspirationCard" variants={cardVariants}>
            <div className="phaseTop">
              <span className="phaseIndex">01</span>
              <span className="phaseTag">Aspiration</span>
            </div>

            <h3>Fresh charge enters the engine</h3>

            <p>
              During aspiration, the engine draws the air-fuel mixture from the
              intake side toward the crankcase. This happens because piston
              motion changes internal pressure and creates the conditions needed
              for the fresh charge to move inward.
            </p>

            <p>
              In many two-stroke layouts, the reed valve helps regulate this
              entry process by allowing flow in the correct direction and
              reducing reverse movement of the mixture.
            </p>

            <div className="phaseDetails">
              <div className="detailItem">
                <span className="detailLabel">Main event</span>
                <span className="detailValue">Mixture admission</span>
              </div>

              <div className="detailItem">
                <span className="detailLabel">Key elements</span>
                <span className="detailValue">Carburetor, intake tract, reed valve</span>
              </div>

              <div className="detailItem">
                <span className="detailLabel">Main objective</span>
                <span className="detailValue">Fill the engine with a fresh charge</span>
              </div>
            </div>
          </motion.article>

          <motion.article className="phaseCard compressionCard" variants={cardVariants}>
            <div className="phaseTop">
              <span className="phaseIndex">02</span>
              <span className="phaseTag">Compression</span>
            </div>

            <h3>The mixture is prepared for ignition</h3>

            <p>
              Once the fresh charge is in the correct part of the engine, the
              compression phase raises pressure before combustion. As the piston
              travels upward, the trapped mixture inside the cylinder is
              compressed and brought closer to ignition conditions.
            </p>

            <p>
              Compression is fundamental because it affects combustion quality,
              flame development, efficiency and the overall sharpness of the
              engine’s response.
            </p>

            <div className="phaseDetails">
              <div className="detailItem">
                <span className="detailLabel">Main event</span>
                <span className="detailValue">Pressure increase</span>
              </div>

              <div className="detailItem">
                <span className="detailLabel">Key elements</span>
                <span className="detailValue">Piston, cylinder, combustion chamber</span>
              </div>

              <div className="detailItem">
                <span className="detailLabel">Main objective</span>
                <span className="detailValue">Prepare the mixture for ignition</span>
              </div>
            </div>
          </motion.article>
        </motion.div>
<div className="combustionImage">
  <img
    src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773112974/ChatGPT_Image_Mar_10_2026_12_16_58_PM_lt0rco.png"
    alt="Two-stroke combustion chamber diagram"
  />
</div>

        <motion.div
          className="technicalGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="techCard" variants={cardVariants}>
            <span className="cardTag">Pressure</span>
            <h3>Pressure variation drives the cycle</h3>
            <p>
              In a 2-stroke engine, piston movement is not only mechanical
              motion: it also generates the pressure changes that make aspiration
              and compression possible.
            </p>
          </motion.article>

          <motion.article className="techCard" variants={cardVariants}>
            <span className="cardTag">Sealing</span>
            <h3>Compression depends on control</h3>
            <p>
              The effectiveness of compression depends on how well the mixture
              is trapped and contained inside the cylinder before ignition.
            </p>
          </motion.article>

          <motion.article className="techCard" variants={cardVariants}>
            <span className="cardTag">Result</span>
            <h3>These two phases shape combustion</h3>
            <p>
              If aspiration is poor or compression is weak, the next combustion
              event cannot be as efficient, clean or forceful as it should be.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstCyclePhases;