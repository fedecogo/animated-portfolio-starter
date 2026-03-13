import "./trasmissioneFinaleIntro.scss";
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

const TrasmissioneFinaleIntro = () => {
  const topics = [
    { label: "Pignone",  icon: "⚙" },
    { label: "Catena",   icon: "⟻" },
    { label: "Corona",   icon: "◎" },
    { label: "Rapporti", icon: "⊞" },
  ];

  return (
    <section className="trasmissioneFinaleIntro" id="trasmissione-finale">
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
            Capitolo 5.2 — Trasmissione finale
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            Trasmissione<br />
            <span className="gradientText">Finale</span>
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            La trasmissione finale è l'ultimo stadio della catena cinematica:
            trasporta la coppia dall'albero secondario del cambio alla ruota
            posteriore attraverso pignone, catena e corona. È il punto dove
            si decide il rapporto finale — quante volte ruota la ruota
            per ogni giro del cambio — e quindi il carattere della moto
            su ogni tipo di percorso.
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
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Ruota completa esplosa — mozzo, raggi, cerchio e pneumatico</span>
              <span className="placeholderSub">Sostituisci con &lt;img&gt; o &lt;video&gt;</span>
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
            Nelle moto 2 tempi la trasmissione finale lavora in condizioni di carico
            estremo: ogni salto, trazione in sabbia o radice impone carichi impulsivi
            sulla catena che possono superare di 3–4 volte la coppia nominale del motore.
            Pignone e corona si consumano in modo asimmetrico — il lato spinta si usura
            prima del lato di ritorno — e una catena allentata o sporca moltiplica
            ulteriormente l'usura. Scegliere il rapporto giusto significa bilanciare
            accelerazione e velocità di punta in base al tracciato: un rapporto corto
            favorisce le rilanciate, uno lungo riduce i giri in rettilineo. In questa
            sezione analizziamo ogni componente nel dettaglio: costruzione, fisica,
            usura e diagnosi.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TrasmissioneFinaleIntro;
