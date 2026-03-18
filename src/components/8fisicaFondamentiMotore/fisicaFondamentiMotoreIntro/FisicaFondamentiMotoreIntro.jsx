import "./fisicaFondamentiMotoreIntro.scss";
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

const FisicaFondamentiMotoreIntro = () => {
  return (
    <section
      className="fisicaFondamentiMotoreIntro"
      id="fisica-fondamenti-motore-intro"
    >
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
            Capitolo 8 — Fisica e Fondamenti del Motore
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            La fisica del motore — numeri, equilibrio e principi che spiegano
            tutto il resto
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Dopo aver visto componenti, impianti e sistemi, arriva il livello
            più profondo: quello dei concetti. Potenza, coppia, cilindrata,
            temperatura di esercizio, rapporto aria-benzina, detonazione e
            momenti meccanici non sono parole isolate, ma grandezze che
            descrivono il comportamento reale del motore. Capire questi
            fondamenti significa leggere la moto non solo come un insieme di
            pezzi, ma come un sistema fisico coerente.
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
                alt="Schema concettuale della fisica del motore 2 tempi"
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
            { num: "01", label: "Cavalli",                       id: "Cavalli" },
            { num: "02", label: "Coppia",                        id: "Coppia" },
            { num: "03", label: "Cilindrata",                    id: "Cilindrata" },
            { num: "04", label: "Temperatura ottimale",          id: "TemperaturaOttimale" },
            { num: "05", label: "Rapporto aria-benzina",         id: "RapportoAriaBenzina" },
            { num: "06", label: "Detonazione",                   id: "Detonazione" },
            { num: "07", label: "Momento torcente e rovesciante", id: "MomentoTorcenteRovesciante" },
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
              Questo capitolo serve a collegare pratica e teoria. I cavalli
              spiegano quanta potenza il motore riesce a esprimere nel tempo, la
              coppia descrive la forza rotazionale disponibile, la cilindrata
              definisce il volume utile di lavoro, il rapporto aria-benzina
              influenza combustione, temperatura e rendimento, mentre la
              detonazione mostra cosa succede quando la combustione perde
              controllo. Infine, momento torcente e momento rovesciante aiutano
              a capire come le forze generate dal motore si trasmettono al telaio
              e influenzano l’assetto della moto. Sono concetti astratti solo in
              apparenza: in realtà spiegano sensazioni di guida, affidabilità e
              prestazioni in modo diretto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FisicaFondamentiMotoreIntro;