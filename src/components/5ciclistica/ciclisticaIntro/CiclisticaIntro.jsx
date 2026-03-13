import "./ciclisticaIntro.scss";
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
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const CiclisticaIntro = () => {
  const capitoli = [
    {
      numero: "5.1",
      titolo: "Ruote e pneumatici",
      desc: "Mozzi, cerchi, pneumatici e grip — il contatto tra la moto e il terreno",
      icon: "◎",
      cls: "cardRuote",
    },
    {
      numero: "5.2",
      titolo: "Trasmissione finale",
      desc: "Pignone, catena, corona e rapporti — come la potenza arriva a terra",
      icon: "⟳",
      cls: "cardTrasmissione",
    },
    {
      numero: "5.3",
      titolo: "Sospensioni",
      desc: "Forcella, monoammortizzatore, escursione, regolazioni e olio",
      icon: "↕",
      cls: "cardSospensioni",
    },
    {
      numero: "5.4",
      titolo: "Sistema frenante",
      desc: "Pompa, pinza, disco, olio freni, spurgo e geometrie radiale/assiale",
      icon: "⊗",
      cls: "cardFreni",
    },
  ];

  return (
    <section className="ciclisticaIntro" id="ciclistica-intro">
      <div className="wrapper">

        {/* ── CHAPTER TAG ─────────────────────────────────────────────────── */}
        <motion.div
          className="heroText"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className="chapterTag" variants={fadeUpVariants}>
            <span className="chapterNumber">05</span>
            <span className="chapterDivider" />
            <span className="chapterName">Nuova sezione</span>
          </motion.div>

          <motion.h2 variants={fadeUpVariants}>
            Ciclistica —<br />
            <span className="gradientText">la moto che tocca terra</span>
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Il motore produce potenza. La ciclistica decide cosa farne.
            Ruote, sospensioni, trasmissione e freni sono i sistemi
            che trasformano la potenza del motore in trazione, controllo
            e sicurezza — e che determinano come la moto risponde al pilota
            su ogni tipo di terreno. In questa sezione esploriamo i quattro
            grandi sistemi che compongono la ciclistica di una moto da
            fuoristrada moderna.
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
              <span className="placeholderText">Immagine / GIF — moto in azione con ruote, sospensioni e freni in evidenza</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── CAPITOLI GRID ───────────────────────────────────────────────── */}
        <motion.div
          className="capitoliGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {capitoli.map((c) => (
            <motion.div
              className={`capitoloCard ${c.cls}`}
              key={c.numero}
              variants={cardVariants}
            >
              <div className="cardTopRow">
                <span className="cardNumero">{c.numero}</span>
                <span className="cardIcon">{c.icon}</span>
              </div>
              <h3>{c.titolo}</h3>
              <p>{c.desc}</p>
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
            Nel fuoristrada la ciclistica non è un'aggiunta al motore —
            è la parte che lo rende utilizzabile. Un motore da 70 cavalli
            su un telaio con sospensioni sbagliate, pneumatici inadatti
            o freni mal regolati è più lento e più pericoloso di un motore
            da 40 cavalli su una ciclistica ben calibrata. Capire questi
            sistemi significa capire dove si vince o si perde il tempo —
            e dove si rimane in piedi invece di cadere.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CiclisticaIntro;
