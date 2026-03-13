import "./elettronicaIntro.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
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

const ElettronicaIntro = () => {
  return (
    <section className="elettronicaIntro" id="elettronica-intro">
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
            Capitolo 6 — Elettronica
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            L’elettronica — energia, controllo e gestione dei segnali
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            In una moto moderna l’elettronica non è un’aggiunta secondaria:
            è il sistema nervoso che alimenta, coordina e controlla tutto ciò
            che non è puramente meccanico. Dall’accensione alla centralina,
            dai sensori alla strumentazione, passando per batteria, cablaggio,
            mappe motore e sistemi come ride-by-wire e ABS, ogni componente
            traduce corrente, impulsi e dati in funzioni reali della moto.
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
                alt="Schema elettronico moto con centralina, cablaggio e sensori"
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
            { num: "01", label: "Accensione" },
            { num: "02", label: "Chiave" },
            { num: "03", label: "Batteria" },
            { num: "04", label: "Cablaggio" },
            { num: "05", label: "Luci" },
            { num: "06", label: "Strumentazione" },
            { num: "07", label: "Centralina" },
            { num: "08", label: "Mappe" },
            { num: "09", label: "Sensori" },
            { num: "10", label: "Ride-by-wire" },
            { num: "11", label: "ABS" },
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
            <span className="introCardTag">Perché è fondamentale</span>
            <p>
              Anche sulla moto più meccanica possibile, l’elettronica decide se
              il motore si accende, come viene gestita la scintilla, come viene
              distribuita l’energia e quali informazioni arrivano al pilota.
              Nelle applicazioni più moderne controlla anche strategie di
              erogazione, sicurezza attiva e risposta al comando del gas.
              Un cablaggio ossidato, una batteria debole, un sensore fuori
              tolleranza o una centralina mal gestita possono provocare
              malfunzionamenti intermittenti, perdita di prestazioni, avviamenti
              difficili o errori di lettura. Capire l’elettronica significa
              quindi capire come la moto pensa, comunica e reagisce.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ElettronicaIntro;