import "./freniIntro.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14 },
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

const FreniIntro = () => {
  return (
    <section className="freniIntro" id="freni-intro">
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
            Capitolo 5.3 — Freni
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            I freni — potenza, modulabilità e controllo della decelerazione
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Un impianto frenante non serve soltanto a fermare la moto: serve a
            rallentarla con precisione, stabilità e sensibilità. Nelle 2 tempi
            enduro, cross, motard e stradali, pompa, pinza, disco, pastiglie e
            fluido lavorano insieme per trasformare la pressione della mano o
            del piede in forza frenante reale sulla ruota. Capire come funziona
            questo sistema significa capire dove nascono potenza, feeling e
            sicurezza.
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
                alt="Impianto frenante moto 2 tempi con disco, pinza e pompa"
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
            { num: "01", label: "Pompa" },
            { num: "02", label: "Pinza" },
            { num: "03", label: "Disco e pastiglie" },
            { num: "04", label: "Olio freni" },
            { num: "05", label: "Radiale e assiale" },
            { num: "06", label: "Spurgo freni" },
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
              Nel sistema frenante ogni elemento ha un ruolo preciso: la pompa
              genera pressione idraulica, il fluido la trasmette, la pinza la
              converte in spinta sui pistoncini, le pastiglie stringono il disco
              e l’attrito trasforma l’energia cinetica in calore. Se uno solo di
              questi passaggi lavora male — olio degradato, aria nel circuito,
              pastiglie finite, disco surriscaldato, pompa poco efficiente —
              tutta la frenata perde consistenza, feeling e affidabilità. Su una
              moto 2T, dove peso contenuto e reattività rendono ogni input più
              diretto, la qualità dell’impianto frenante cambia davvero il modo
              in cui si entra in curva, si controlla il trasferimento di carico
              e si gestisce il limite di aderenza.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreniIntro;