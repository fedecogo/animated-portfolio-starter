import "./organiMeccaniciIntro.scss";
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

const OrganiMeccaniciIntro = () => {
  const topics = [
    { label: "Biella",           icon: "⟋" },
    { label: "Albero motore",    icon: "◎" },
    { label: "Cuscinetti di banco", icon: "⊙" },
    { label: "Carter",           icon: "▣" },
    { label: "Olio motore",      icon: "◈" },
    { label: "Guarnizione",      icon: "◻" },
  ];

  return (
    <section className="organiIntro" id="organi-meccanici">
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
            Capitolo 3.3 — Organi meccanici
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            Organi<br />
            <span className="gradientText">Meccanici</span>
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Il gruppo termico genera la pressione — gli organi meccanici
            la trasformano in rotazione. Biella, albero motore, cuscinetti
            di banco e carter lavorano in sincronia perfetta a migliaia
            di giri al minuto, assorbendo forze impulsive nell'ordine
            delle tonnellate e restituendole come coppia pulita all'asse
            di trasmissione. In questa sezione esploriamo ogni componente
            nel dettaglio: materiali, geometrie, sollecitazioni,
            lubrificazione e diagnosi.
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
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — organi meccanici 2T esplosi o in sezione</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
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
            <motion.div className="topicPill" key={t.label} variants={pillVariants}>
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
            Nel motore a 2 tempi gli organi meccanici lavorano senza
            sosta — non c'è la corsa di aspirazione "neutra" del 4 tempi
            che offre un momento di respiro alle componenti. Ogni
            singolo giro di albero è un ciclo completo: combustione,
            scarico, lavaggio, compressione. Le forze in gioco sono
            intense e le frequenze altissime. Capire come ogni
            componente è costruito, come viene lubrificato e quando
            va sostituito è la base per mantenere il motore affidabile
            e performante nel tempo.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default OrganiMeccaniciIntro;
