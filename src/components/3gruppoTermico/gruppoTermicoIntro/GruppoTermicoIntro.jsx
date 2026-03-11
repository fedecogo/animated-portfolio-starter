import "./gruppoTermicoIntro.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const GruppoTermicoIntro = () => {
  return (
    <section className="gruppoTermicoIntro" id="gruppo-termico">
      <div className="wrapper">
        {/* ── EYEBROW + TITOLO ────────────────────────────────────────────── */}
        <motion.div
          className="heroText"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.span className="sectionLabel" variants={fadeUpVariants}>
            Capitolo — Gruppo termico
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>Il cuore del motore</motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Il gruppo termico è l'insieme dei componenti in cui avviene la
            combustione: il cilindro, il pistone, la testa e le relative
            guarnizioni. È qui che l'energia chimica del carburante diventa
            lavoro meccanico. Ogni sezione che segue esplora uno di questi
            componenti nel dettaglio — geometria, materiali, usura e setup.
          </motion.p>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER ──────────────────────────────────────────── */}
        <motion.div
          className="visualPlaceholder"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <img
                src="https://wemalossistore.blob.core.windows.net/imgproducts/31%207083/31%207083_store.jpg"
                alt="Product image"
                className="placeholderImage"
              />
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── PILL ARGOMENTI ──────────────────────────────────────────────── */}
        <motion.div
          className="topicsRow"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { num: "01", label: "Cilindro" },
            { num: "02", label: "Pistone" },
            { num: "03", label: "Testa" },
            { num: "04", label: "Guarnizione" },
            { num: "05", label: "Fascia elastica" },
            { num: "06", label: "Spinotto" },
          ].map((t) => (
            <motion.div
              className="topicPill"
              key={t.num}
              variants={cardVariants}
            >
              <span className="pillNum">{t.num}</span>
              <span className="pillLabel">{t.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── INTRO CARD BREVE ────────────────────────────────────────────── */}
        <motion.div
          className="introCard"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="introCardLine" />
          <div className="introCardBody">
            <span className="introCardTag">Perché è importante</span>
            <p>
              Nel motore a 2 tempi il gruppo termico lavora con sollecitazioni
              termiche e meccaniche molto più intense rispetto a un 4 tempi
              equivalente. Il pistone completa un ciclo completo ogni giro di
              albero — il doppio rispetto al 4 tempi — e le temperature in
              camera di combustione raggiungono valori estremi ad alti regimi.
              Conoscere ogni componente significa saper leggere l'usura,
              prevenire i guasti e ottimizzare il setup.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GruppoTermicoIntro;
