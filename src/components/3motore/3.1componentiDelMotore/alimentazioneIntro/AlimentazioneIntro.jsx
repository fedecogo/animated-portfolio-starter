import "./alimentazioneIntro.scss";
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

const AlimentazioneIntro = () => {
  return (
    <section className="alimentazioneIntro" id="alimentazione-intro">
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
            Capitolo 3.1 — Alimentazione
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            Come entra il carburante nel motore
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Prima che avvenga qualsiasi combustione, il carburante deve arrivare
            al cilindro — nella giusta quantità, alla giusta concentrazione, al
            momento giusto. Il sistema di alimentazione è la catena di
            componenti che trasforma benzina e aria in una miscela combustibile
            pronta per entrare nel carter. In questa sezione esploriamo ogni
            anello di quella catena — dal carburatore al pacco lamellare.
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
                src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773367773/Adobe_Express_-_file_1_qqmhao.png"
                alt="Motocross 2 stroke chassis illustration"
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
            { num: "01", label: "Carburatore" },
            { num: "02", label: "Corpo farfallato" },
            { num: "03", label: "Pompa benzina" },
            { num: "04", label: "Miscelatore" },
            { num: "05", label: "Pacco lamellare" },
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
              Nel motore a 2 tempi il sistema di alimentazione non ha valvole —
              usa il movimento del pistone e la geometria delle luci per
              controllare il flusso. Questo significa che ogni componente
              dell'alimentazione ha un impatto diretto sulla curva di
              erogazione: il carburatore determina la risposta all'acceleratore,
              il pacco lamellare controlla la retroazione del gas nel carter, la
              miscela olio-benzina lubrifica ogni componente in movimento.
              Capire questo sistema è capire perché una moto tira forte in
              allungo ma è balbuziente in uscita di curva — o viceversa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlimentazioneIntro;
