import "./ruotePneumaticiIntro.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const RuotePneumaticiIntro = () => {
  return (
    <section className="ruotePneumaticiIntro" id="ruote-pneumatici-intro">
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
            Capitolo 5.1 — Ruote e pneumatici
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            Le ruote — il contatto tra moto e terreno
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            La ruota è l'unico punto di contatto tra la moto e il suolo. Tutto
            — potenza, frenata, sterzo, peso — passa attraverso una superficie
            di contatto grande come un palmo di mano. Comprendere mozzi, cerchi
            e pneumatici significa capire dove si vince e si perde trazione,
            stabilità e controllo.
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
                src=""
                alt="Ruote e pneumatici fuoristrada"
                loading="lazy"
              />
            </div>
          </div>
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
            { num: "01", label: "Mozzi",          id: "Mozzi" },
            { num: "02", label: "Cerchi",         id: "Cerchi" },
            { num: "03", label: "Pneumatici",     id: "Pneumatici" },
            { num: "04", label: "Grip e trazione",id: "Grip" },
          ].map((t) => (
            <motion.a
              href={`#${t.id}`}
              className="topicPill"
              key={t.num}
              variants={cardVariants}
            >
              <span className="pillNum">{t.num}</span>
              <span className="pillLabel">{t.label}</span>
            </motion.a>
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
            <span className="introCardTag">Perché è fondamentale</span>
            <p>
              Nel fuoristrada la ruota non è un componente passivo — è un
              sistema attivo. Il pneumatico si deforma per assorbire
              irregolarità, il mozzo trasmette i carichi dal cuscinetto al
              cerchio, i raggi in tensione distribuiscono i carichi d'impatto.
              Qualsiasi errore in uno di questi elementi — pressione sbagliata,
              raggio allentato, cuscinetto consumato — si traduce direttamente
              in instabilità, perdita di trazione o cedimento strutturale sotto
              carico.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RuotePneumaticiIntro;
