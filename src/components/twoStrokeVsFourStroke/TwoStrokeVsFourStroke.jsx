import "./twoStrokeVsFourStroke.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
    y: 28,
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


const accordionData = [
  {
    id: 1,
    title: "Cycle frequency",
    twoStroke:
      "A 2-stroke engine completes its full operating cycle in two piston strokes. This means the engine produces a power event more frequently, which often results in a more immediate and reactive character.",
    fourStroke:
      "A 4-stroke engine requires four piston strokes to complete the same cycle: intake, compression, combustion and exhaust. Because the phases are more separated, the engine usually delivers power in a smoother and more progressive way.",
  },
  {
    id: 2,
    title: "Mechanical complexity",
    twoStroke:
      "The 2-stroke architecture is mechanically simpler in its core concept. Much of its behavior is controlled by piston movement, intake timing, port design and exhaust flow rather than a complex valvetrain.",
    fourStroke:
      "The 4-stroke architecture is generally more complex because it relies on additional components such as valves, camshafts and timing systems that regulate the engine cycle.",
  },
  {
    id: 3,
    title: "Power delivery",
    twoStroke:
      "A 2T engine often produces a more aggressive and concentrated powerband. When the engine reaches its effective operating range, the increase in power can feel sharp and energetic.",
    fourStroke:
      "A 4T engine usually delivers power in a broader and more linear way. The progression is often easier to control, especially across a wider rev range.",
  },
  {
    id: 4,
    title: "Weight and simplicity",
    twoStroke:
      "Because of its simpler architecture and reduced number of moving parts, a 2-stroke engine is often lighter and more compact compared with a comparable 4-stroke design.",
    fourStroke:
      "The additional components required for valve timing and the longer operating cycle typically make a 4-stroke engine heavier and structurally more complex.",
  },
  {
    id: 5,
    title: "Maintenance and operation",
    twoStroke:
      "A 2T engine usually requires simpler mechanical maintenance but depends heavily on correct lubrication and mixture management to operate properly.",
    fourStroke:
      "A 4T engine often requires more complex mechanical servicing due to its valvetrain and timing components, but lubrication and fuel systems are typically more separated.",
  },
];



const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <motion.div className={`accordionItem ${isOpen ? "open" : ""}`} variants={cardVariants}>
      <button className="accordionHeader" onClick={onClick}>
        <span>{item.title}</span>
        <motion.span
          className="accordionIcon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="accordionContent"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="accordionInner">
              <div className="accordionSide">
                <span className="sideLabel">2T</span>
                <p>{item.twoStroke}</p>
              </div>

              <div className="accordionSide">
                <span className="sideLabel">4T</span>
                <p>{item.fourStroke}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TwoStrokeVsFourStroke = () => {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="twoStrokeVsFourStroke" id="2t-vs-4t">
      <div className="wrapper">
        <motion.div
          className="topSection"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="headingBlock">
            <motion.span className="sectionLabel" variants={fadeUpVariants}>
              Engine Comparison
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              2-stroke vs 4-stroke: the basic difference
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              The essential distinction is in how the engine completes its power
              cycle. A 2-stroke generates power every two piston strokes,
              while a 4-stroke completes the same cycle in four separate
              strokes.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              That difference changes the whole personality of the motorcycle:
              response, architecture, complexity, maintenance character and
              riding feel.
            </motion.p>
          </div>

          <motion.div className="comparisonPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Quick View</span>
              <h3>One idea, two very different engine philosophies</h3>
            </div>

            <div className="miniRows">
              <div className="miniRow">
                <span className="miniLabel">2T cycle</span>
                <span className="miniValue">Power stroke more frequently</span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">4T cycle</span>
                <span className="miniValue">More separated operating phases</span>
              </div>

              <div className="miniRow">
                <span className="miniLabel">Main effect</span>
                <span className="miniValue">Different response, complexity and feel</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
              
              
              {/* comparisonGrid */}
        <motion.div
          className="comparisonGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article className="engineCard twoStrokeCard" variants={cardVariants}>
            <span className="engineTag">2-Stroke</span>
            <h3>More compact and direct</h3>

            <ul>
              <li>Completes the cycle in two strokes</li>
              <li>Produces power more frequently</li>
              <li>Usually has a simpler mechanical layout</li>
              <li>Feels lighter, sharper and more immediate</li>
            </ul>
          </motion.article>

          <motion.article className="engineCard fourStrokeCard" variants={cardVariants}>
            <span className="engineTag">4-Stroke</span>
            <h3>More gradual and structured</h3>

            <ul>
              <li>Completes the cycle in four strokes</li>
              <li>Has more separated engine phases</li>
              <li>Usually uses a more articulated valve system</li>
              <li>Often feels smoother and broader in delivery</li>
            </ul>
          </motion.article>
        </motion.div>

        <motion.div
          className="accordionBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="accordionHeading" variants={fadeUpVariants}>
            <span className="accordionLabel">Expandable Comparison</span>
            <h3>Open each point to compare 2T and 4T more clearly</h3>
          </motion.div>

          <div className="accordionList">
            {accordionData.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onClick={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoStrokeVsFourStroke;