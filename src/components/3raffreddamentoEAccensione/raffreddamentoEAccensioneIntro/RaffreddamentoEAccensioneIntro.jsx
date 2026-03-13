import "./raffreddamentoEAccensioneIntro.scss";
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

const RaffreddamentoEAccensioneIntro = () => {
  const topics = [
    { label: "Radiatore",         icon: "⊟" },
    { label: "Pompa acqua",       icon: "↺"  },
    { label: "Circuito acqua",    icon: "⌁"  },
    { label: "Volano e statore",  icon: "◎"  },
    { label: "CDI e bobina",      icon: "⚡" },
    { label: "Avviamento",        icon: "⊳"  },
  ];

  return (
    <section className="raffreddamentoEAccensioneIntro" id="raffreddamento-accensione">
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
            Capitolo 3.6 — Raffreddamento e accensione
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            Raffreddamento<br />
            <span className="gradientText">e Accensione</span>
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Due sistemi apparentemente distanti che condividono
            la stessa missione: tenere il motore vivo e controllato.
            Il raffreddamento porta via il calore in eccesso prima
            che distrugga il metallo. L'accensione genera la scintilla
            giusta al momento giusto — con un anticipo calcolato
            al microsecondo — e alimenta tutto il resto con la
            corrente prodotta dal volano. Senza l'uno il motore
            si fonde. Senza l'altro non parte nemmeno.
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
                  <img
                src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773369908/ChatGPT_Image_Mar_13_2026_12_14_55_PM_zqbrp1.png"
                alt="Raffreddamento e accensione"
                loading="lazy"
              />
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

        {/* ── DUE SOTTOSEZIONI CARD ────────────────────────────────────────── */}
        <motion.div
          className="splitCards"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="splitCard splitCooling" variants={fadeUpVariants}>
            <div className="splitCardBar" />
            <div className="splitCardBody">
              <span className="splitCardTag">Raffreddamento</span>
              <h3>Il calore come nemico da gestire</h3>
              <p>
                Il motore a 2 tempi brucia miscela ogni singola
                rotazione dell'albero — il doppio di un 4 tempi
                a parità di regime. Il calore generato è
                proporzionale: senza un sistema di raffreddamento
                efficiente il cilindro supera la temperatura di
                fusione dell'alluminio in pochi secondi.
                Radiatore, pompa e circuito lavorano in un ciclo
                continuo per mantenere la temperatura del liquido
                refrigerante tra 60 e 80 °C — abbastanza calda
                da evitare la condensazione, abbastanza fredda
                da proteggere le fasce e il pistone.
              </p>
            </div>
          </motion.div>

          <motion.div className="splitCard splitIgnition" variants={fadeUpVariants}>
            <div className="splitCardBar" />
            <div className="splitCardBody">
              <span className="splitCardTag">Accensione</span>
              <h3>La scintilla e l'energia che la genera</h3>
              <p>
                Nel 2T non esiste un alternatore nel senso
                automotive del termine. Il volano magnetico —
                solidale all'albero motore — genera corrente
                alternata nello statore avvolgendo il campo
                magnetico attorno alle sue bobine. Quella corrente
                alimenta la CDI, che la accumula in un condensatore
                e la scarica sulla bobina di accensione
                al momento preciso indicato dal pick-up.
                Il risultato: una scarica da 20.000 – 30.000 volt
                attraverso la candela, 10 – 40° prima del punto
                morto superiore.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default RaffreddamentoEAccensioneIntro;
