import "./telaioIntro.scss";
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

const pillVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const TelaioIntro = () => {
  const topics = [
    { label: "Telaio", icon: "⬡" },
    { label: "Materiali", icon: "◧" },
    { label: "Geometrie e pesi", icon: "⌖" },
    { label: "Rigidità", icon: "↔" },
    { label: "Canotto di sterzo", icon: "◎" },
    { label: "Forcellone", icon: "⟵" },
    { label: "Cavalletto", icon: "⊥" },
  ];

  return (
    <section className="telaioIntro" id="telaio-intro">
      <div className="wrapper">
        {/* ── HERO TEXT ───────────────────────────────────────────────────── */}
        <motion.div
          className="heroText"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.span className="sectionLabel" variants={fadeUpVariants}>
            Capitolo 4 — Telaio
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            Il Telaio —<br />
            <span className="gradientText">
              la struttura che tiene tutto insieme
            </span>
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Il telaio è la spina dorsale della moto: collega il motore alle
            sospensioni, trasferisce le forze dal pilota alla ruota e definisce
            ogni sensazione trasmessa attraverso il manubrio e le pedane. Non è
            un contenitore passivo — è un componente attivo con proprietà
            meccaniche precise, progettato con la stessa cura del motore. In
            questa sezione esploriamo materiali, geometrie, rigidità, canotto di
            sterzo, forcellone e cavalletto: tutto ciò che fa stare in piedi la
            moto e la fa andare dove vuole il pilota.
          </motion.p>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER ──────────────────────────────────────────── */}
        <motion.div
          className="visualPlaceholder"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF PANORAMICA ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <img
                src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773366088/Untitled_design_3_nvh6xv.png"
                alt="Motocross 2 stroke chassis illustration"
                loading="lazy"
              />
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── TOPICS ROW ──────────────────────────────────────────────────── */}
        <motion.div
          className="topicsRow"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {topics.map((t) => (
            <motion.div
              className="topicPill"
              key={t.label}
              variants={pillVariants}
            >
              <span className="topicIcon">{t.icon}</span>
              <span className="topicLabel">{t.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── INTRO CARD ──────────────────────────────────────────────────── */}
        <motion.div
          className="introCard"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="introCardBar" />
          <p>
            Un telaio da fuoristrada deve fare sei cose contemporaneamente:
            reggere il peso statico e gli impatti dinamici, resistere alla
            torsione in curva su terreno sconnesso, mantenere l'allineamento
            geometrico preciso tra canotto e forcellone, fungere da elemento
            strutturale solidale al motore, definire la posizione del pilota e —
            non ultimo — comunicare attraverso la sua flessibilità controllata
            le informazioni che il pilota usa per guidare. Capire come è
            costruito e perché è fatto così è il primo passo per capire perché
            due moto con lo stesso motore si guidano in modo completamente
            diverso.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TelaioIntro;
