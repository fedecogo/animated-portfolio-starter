import "./sospensioniIntro.scss";
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

const SospensioniIntro = () => {
  return (
    <section className="sospensioniIntro" id="sospensioni-intro">
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
            Capitolo 5.2 — Sospensioni
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            Le sospensioni — controllo, assorbimento e assetto dinamico
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Le sospensioni non servono soltanto a rendere la moto più comoda:
            definiscono il modo in cui la ruota resta in contatto con il terreno,
            controllano il trasferimento di carico in frenata e accelerazione e
            determinano stabilità, precisione di guida e capacità di assorbire
            urti e asperità. Su una 2 tempi enduro, cross, motard o stradale,
            forcella e monoammortizzatore cambiano radicalmente il comportamento
            della moto.
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
                alt="Forcella e monoammortizzatore su moto 2 tempi"
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
            { num: "01", label: "Forcella",               id: "Forcelle" },
            { num: "02", label: "Monoammortizzatore",     id: "Monoammortizzatore" },
            { num: "03", label: "Escursione",             id: "Escursione" },
            { num: "04", label: "Olio sospensioni",       id: "OlioSospensioni" },
            { num: "05", label: "Compressione e ritorno", id: "CompressioneRitornoRegolazioni" },
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
              Nel mondo delle 2T la sospensione è uno dei sistemi più sensibili
              di tutta la moto: se è troppo rigida la ruota rimbalza e perde
              aderenza, se è troppo morbida affonda, scompone l’assetto e rende
              la guida imprecisa. La forcella gestisce gran parte di frenata,
              ingresso curva e impatto anteriore; il mono controlla trazione,
              uscita curva e stabilità del retrotreno. Escursione, viscosità
              dell’olio, taratura idraulica e regolazioni di compressione e
              ritorno determinano quanto velocemente la sospensione si muove,
              quanto assorbe e come restituisce energia dopo la deformazione.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SospensioniIntro;