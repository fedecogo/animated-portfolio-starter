import "./carrozzeriaIntro.scss";
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

const CarrozzeriaIntro = () => {
  return (
    <section className="carrozzeriaIntro" id="carrozzeria-intro">
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
            Capitolo 7 — Carrozzeria
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            La carrozzeria — forma, protezione, ergonomia e flusso dell’aria
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            La carrozzeria non è soltanto estetica. Serbatoio, plastiche, sella,
            codone e superfici aerodinamiche definiscono il modo in cui il
            pilota si muove sulla moto, come vengono protetti i componenti
            interni e come il corpo macchina gestisce aria, sporco, urti e
            distribuzione visiva dei volumi. Su una 2 tempi enduro, cross,
            motard o stradale, la carrozzeria condiziona comfort, controllo,
            posizione di guida e identità tecnica del mezzo.
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
                alt="Carrozzeria moto 2 tempi con serbatoio, plastiche, sella e codone"
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
            { num: "01", label: "Serbatoio",     id: "Serbatorio" },
            { num: "02", label: "Plastiche",     id: "Plastiche" },
            { num: "03", label: "Sella",         id: "Sella" },
            { num: "04", label: "Codone / Codino", id: "Codone" },
            { num: "05", label: "Aerodinamica",  id: "Aerodinamica" },
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
              Nella carrozzeria ogni elemento ha una doppia funzione: pratica e
              dinamica. Il serbatoio deve contenere carburante senza ostacolare
              i movimenti del pilota; le plastiche devono proteggere e guidare i
              flussi senza diventare fragili o ingombranti; la sella deve
              garantire appoggio, trasferimento del peso e continuità nei
              cambi di posizione; il codone organizza la parte posteriore della
              moto; l’aerodinamica influenza stabilità, penetrazione e gestione
              delle turbolenze. Anche quando sembra “solo design”, la
              carrozzeria partecipa direttamente all’esperienza di guida.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarrozzeriaIntro;