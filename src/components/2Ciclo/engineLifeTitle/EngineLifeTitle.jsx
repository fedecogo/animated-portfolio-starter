import "./engineLifeTitle.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const topics = [
  { num: "2.1", label: "Carburante e miscela",     id: "FuelAndMixture" },
  { num: "2.2", label: "Aria e carburante",         id: "AirAndFuel" },
  { num: "2.3", label: "Fasi del ciclo",            id: "FirstCyclePhases" },
  { num: "2.4", label: "Combustione e accensione",  id: "CombustionAndIgnition" },
  { num: "2.5", label: "Sistema di scarico",        id: "ExhaustSystem" },
];

const EngineLifeTitle = () => {
  return (
    <section className="engineLifeTitle">
      <div className="wrapper">

        {/* ── HERO TEXT ──────────────────────────────────────────────────── */}
        <motion.div
          className="heroText"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.span className="sectionLabel" variants={fadeUpVariants}>
            Capitolo 2 — Ciclo del motore
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            Il ciclo del motore 2 tempi
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Il ciclo termodinamico è il cuore di tutto. In due soli colpi di
            pistone il motore aspira la miscela, la comprime, la brucia e
            scarica i gas combusti — mentre contemporaneamente prepara la carica
            successiva nel carter. Capire questa sequenza significa capire perché
            ogni componente della moto esiste e funziona nel modo in cui funziona.
          </motion.p>
        </motion.div>

        {/* ── TOPIC PILLS ────────────────────────────────────────────────── */}
        <motion.div
          className="topicsRow"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {topics.map((t) => (
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

        {/* ── INTRO CARD ─────────────────────────────────────────────────── */}
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
              Nel motore a 4 tempi ogni fase ha il suo colpo di pistone
              dedicato. Nel 2T le stesse fasi si sovrappongono in due soli
              movimenti: mentre il cilindro brucia e scarica, il carter sta già
              aspirando la carica successiva. Questo schema — elegante nella sua
              semplicità — è anche il più sensibile: un errore nel rapporto di
              miscela, una fasatura della candela sbagliata o una camera di
              espansione mal accordata compromettono l'intero ciclo. Capire la
              logica sequenziale del ciclo 2T è il prerequisito per ogni altro
              sistema della moto: dal carburatore alla valvola di scarico, dalla
              candela alla geometria del cilindro.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EngineLifeTitle;
