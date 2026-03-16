import "./scaricoIntro.scss";
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

const ScaricaIntro = () => {
  const topics = [
    { label: "Camera di espansione", icon: "◁▷", id: "Espansione" },
    { label: "Terminale",            icon: "⊳",  id: "Terminale" },
    { label: "Valvola di scarico",   icon: "◫",  id: "ValvolaDiScarico" },
  ];

  return (
    <section className="scaricoIntro" id="scarico">
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
            Capitolo 3.5 — Scarico
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            Sistema<br />
            <span className="gradientText">di Scarico</span>
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Nel motore a 2 tempi il sistema di scarico non è uno
            sfogo passivo dei gas combusti — è un componente attivo
            che partecipa direttamente alla generazione della potenza.
            La camera di espansione sfrutta la fisica delle onde di
            pressione per aspirare la miscela fresca nel cilindro
            e bloccarla prima che fuoriesca. Il terminale controlla
            la perdita di contropressione. La valvola di scarico
            allarga la finestra di potenza modificando dinamicamente
            la geometria del condotto. Tre componenti, una fisica
            comune: le onde di pressione nei gas.
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
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <img
              src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773369327/ChatGPT_Image_Mar_13_2026_12_05_10_PM_glq6pm.png"
              alt=""
              />
           </div>
          </div>
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
            <motion.a href={`#${t.id}`} className="topicPill" key={t.label} variants={pillVariants}>
              <span className="topicIcon">{t.icon}</span>
              <span className="topicLabel">{t.label}</span>
            </motion.a>
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
            Nel 4 tempi lo scarico è un condotto di evacuazione —
            nel 2 tempi è un risuonatore acustico calibrato al millisecondo.
            L'espansione e il terminale sono progettati attorno
            a una singola variabile: il tempo di percorrenza di un'onda
            di pressione dal pistone alla conicità di ritorno e ritorno,
            sincronizzato con la finestra di apertura della luce di scarico.
            Cambiate la lunghezza dell'espansione e cambiate il regime
            di picco della potenza. Cambiate il diametro del terminale
            e cambiate la larghezza della banda. È acustica applicata
            alla meccanica — e funziona in modo straordinariamente preciso.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ScaricaIntro;
