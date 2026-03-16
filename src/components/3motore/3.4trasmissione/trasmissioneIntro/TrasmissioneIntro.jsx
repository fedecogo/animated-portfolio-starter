import "./trasmissioneIntro.scss";
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

const TrasmissioneIntro = () => {
  const topics = [
    { label: "Frizione",          icon: "◉", id: "Frizione" },
    { label: "Cambio",            icon: "⊞", id: "Cambio" },
    { label: "Albero primario",   icon: "⟼", id: "Alberi" },
    { label: "Albero secondario", icon: "⟻", id: "Alberi" },
    { label: "Selettore",         icon: "◈", id: "Selettore" },
    { label: "Ingranaggi",        icon: "⚙", id: "Ingranaggi" },
  ];

  return (
    <section className="trasmissioneIntro" id="trasmissione-cambio">
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
            Capitolo 3.4 — Trasmissione
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            Trasmissione<br />
            <span className="gradientText">e Cambio</span>
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Il motore produce coppia — la trasmissione decide quanta
            arriva alla ruota e a che velocità. Frizione, cambio, alberi
            e ingranaggi formano la catena meccanica che trasforma i
            giri del motore in avanzamento, permettendo al pilota di
            adattare il rapporto tra regime e velocità in ogni condizione
            di guida. In questa sezione esploriamo ogni componente nel
            dettaglio: costruzione, fisica, usura e diagnosi.
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
                src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773368819/ChatGPT_Image_Mar_13_2026_11_55_58_AM_vsu7ka.png"
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
            Nel motore a 2 tempi la trasmissione interna lavora in
            condizioni più severe rispetto al 4 tempi di pari cilindrata:
            gli impulsi di coppia sono più frequenti, i regimi più alti
            e il cambio avviene spesso sotto carico pieno. Frizione e
            ingranaggi non si limitano a trasmettere la potenza —
            la modulano, la proteggono dai picchi impulsivi e la
            adattano alle esigenze del percorso. Capire come funzionano
            e cosa li logora è il primo passo per mantenerli efficienti
            e intervenire al momento giusto.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TrasmissioneIntro;
