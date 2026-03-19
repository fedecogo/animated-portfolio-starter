import "./firstCyclePhases.scss";
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

const fasi = [
  {
    num: "01",
    badge: "badgeSalita",
    badgeText: "Salita pistone",
    label: "Aspirazione nel carter",
    desc: "Mentre il pistone sale verso il PMS, la pressione nel carter scende sotto la pressione atmosferica. Il pacco lamellare si apre e la miscela fresca viene aspirata dentro il carter attraverso il condotto di aspirazione.",
    details: [
      { label: "Pistone", value: "In salita verso il PMS" },
      { label: "Carter", value: "In depressione — aspira la miscela" },
      { label: "Luce di scarico", value: "Chiusa dal pistone" },
    ],
  },
  {
    num: "02",
    badge: "badgeSalita2",
    badgeText: "Salita pistone",
    label: "Compressione nel cilindro",
    desc: "Contemporaneamente all'aspirazione nel carter, il pistone comprime la miscela intrappolata nel cilindro — quella entrata dal travaso del ciclo precedente. La pressione sale, la temperatura sale e la candela si prepara a scattare.",
    details: [
      { label: "Cilindro", value: "Miscela compressa verso il PMS" },
      { label: "Candela", value: "Si prepara all'accensione" },
      { label: "Rapporto compressione", value: "Tipicamente 11:1–14:1 su motori da cross" },
    ],
  },
  {
    num: "03",
    badge: "badgeDiscesa",
    badgeText: "Discesa pistone",
    label: "Combustione e travaso",
    desc: "La candela scocca prima del PMS. La miscela brucia, la pressione sale di colpo e spinge il pistone verso il PMI. Scendendo, il pistone prima scopre la luce di scarico (i gas escono), poi le luci di travaso (la miscela fresca dal carter entra nel cilindro).",
    details: [
      { label: "Accensione", value: "Qualche grado prima del PMS" },
      { label: "Scarico", value: "Si apre ~80–100° dopo il PMS" },
      { label: "Travaso", value: "Apre ~120° dopo il PMS" },
    ],
  },
  {
    num: "04",
    badge: "badgeDiscesa2",
    badgeText: "Discesa pistone",
    label: "Precompressione nel carter",
    desc: "Mentre il pistone scende, comprime la nuova miscela fresca che ha appena aspirato nel carter. Questa precompressione è fondamentale: spinge la carica fresca verso l'alto attraverso le luci di travaso nel momento giusto del ciclo.",
    details: [
      { label: "Carter", value: "In pressione — precomprime la miscela" },
      { label: "Pacco lamellare", value: "Chiuso — impedisce reflusso verso carburatore" },
      { label: "Luci di travaso", value: "Si aprono quando il pistone le scopre" },
    ],
  },
];

const timingItems = [
  {
    label: "Apertura scarico (EO)",
    text: "La luce di scarico si apre quando il pistone scende e la scopre, tipicamente 75–100° dopo il PMS nei motori da cross. Più la luce apre presto, più lungo è il tempo di scarico ma minore la pressione di espansione.",
  },
  {
    label: "Apertura travaso (TPO)",
    text: "Le luci di travaso aprono poco dopo lo scarico. Il ritardo garantisce che i gas combusti abbiano già iniziato a uscire prima che la miscela fresca entri — evitando che si mescolino eccessivamente.",
  },
  {
    label: "Chiusura travaso e scarico (TC/EC)",
    text: "Nella salita del pistone, le luci chiudono in sequenza inversa. La chiusura delle luci di travaso e poi dello scarico intrappola la miscela fresca nel cilindro per la compressione.",
  },
  {
    label: "Anticipo d'accensione",
    text: "La candela scocca tipicamente 15–30° prima del PMS (BTDC). Questo ritardo compensa il tempo di propagazione della fiamma: la pressione massima si sviluppa qualche grado dopo il PMS, nel momento più favorevole per spingere il pistone.",
  },
];

const FirstCyclePhases = () => {
  return (
    <section className="firstCyclePhases" id="FirstCyclePhases">
      <div className="wrapper">

        {/* ── INTRO BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="introBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="titleColumn">
            <motion.span className="sectionLabel" variants={fadeUpVariants}>
              2.3 — Fasi del ciclo
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Le quattro fasi che si sovrappongono in due cicli
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Nel motore a 4 tempi ogni fase ha il suo colpo di pistone dedicato.
              Nel 2T, in due soli movimenti avvengono aspirazione nel carter,
              compressione nel cilindro, combustione, espansione, scarico e
              travaso — tutti sovrapposti e sincronizzati.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Comprendere questa sovrapposizione è la chiave per capire ogni
              altra parte del motore: perché la camera di espansione ha quella
              forma, perché la fasatura della candela è critica, perché le luci
              devono avere la temporizzazione esatta. Tutto deriva da questa
              sequenza di quattro eventi in due corsi.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Due corsi, quattro eventi</span>
              <h3>Il ciclo 2T non è semplice — è sovrapposto</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniLabel">Corsa di salita</span>
                <span className="miniValue">Aspirazione carter + Compressione cilindro</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Corsa di discesa</span>
                <span className="miniValue">Combustione/espansione + Precompressione carter</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Tra discesa e salita</span>
                <span className="miniValue">Scarico gas combusti + Travaso miscela fresca</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Sincronizzazione</span>
                <span className="miniValue">Tutto governato dalla posizione angolare del pistone</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FASI GRID ───────────────────────────────────────────────────── */}
        <motion.div
          className="fasiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="fasiHeader">
            <h3>Le quattro fasi in dettaglio</h3>
            <p>
              Ogni fase ha il suo contesto preciso nella posizione del pistone.
              Non esistono fasi isolate: ogni evento di una corsa prepara o
              condiziona quello della corsa successiva.
            </p>
          </div>
          <motion.div
            className="fasiGrid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {fasi.map((f) => (
              <motion.div className="faseCard" key={f.num} variants={cardVariants}>
                <div className="faseTop">
                  <span className="faseNum">{f.num}</span>
                  <span className={`faseBadge ${f.badge}`}>{f.badgeText}</span>
                </div>
                <h4>{f.label}</h4>
                <p>{f.desc}</p>
                <div className="faseDetails">
                  {f.details.map((d) => (
                    <div className="faseDetail" key={d.label}>
                      <span className="detailLabel">{d.label}</span>
                      <span className="detailValue">{d.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── IMMAGINE ────────────────────────────────────────────────────── */}
        <div className="combustionImage">
          <img
            src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773112974/ChatGPT_Image_Mar_10_2026_12_16_58_PM_lt0rco.png"
            alt="Diagramma camera di combustione a due tempi"
          />
        </div>

        {/* ── TIMING BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="timingBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="timingHeader">
            <h3>Fasatura delle luci e dell&apos;accensione</h3>
            <p>
              La fasatura (timing) definisce esattamente in quale grado di
              rotazione dell&apos;albero motore ogni evento inizia e finisce.
              Modificare la fasatura delle luci o dell&apos;accensione cambia
              il carattere del motore in modo radicale: più potenza ai bassi
              o ai giri alti, più o meno fumosità, più o meno rischio di
              battito in testa.
            </p>
          </div>
          <div className="timingContent">
            {timingItems.map((t) => (
              <div className="timingItem" key={t.label}>
                <span className="timingLabel">{t.label}</span>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CARDS FINALI ────────────────────────────────────────────────── */}
        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Efficienza volumetrica</span>
            <h3>Quanto cilindro si riempie davvero</h3>
            <p>
              L&apos;efficienza volumetrica descrive quanta miscela fresca
              entra effettivamente nel cilindro rispetto alla sua cilindrata
              teorica. Nel 2T, la camera di espansione può aumentarla oltre
              il 100% sfruttando il ritorno dell&apos;onda di pressione per
              &quot;ristappare&quot; il cilindro prima della chiusura dello
              scarico.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Cortocircuito miscela</span>
            <h3>Il problema del lavaggio diretto</h3>
            <p>
              Durante il travaso, parte della miscela fresca tende a passare
              direttamente dallo scarico senza contribuire alla combustione —
              fenomeno chiamato cortocircuito o short-circuiting. La geometria
              delle luci e la camera di espansione sono progettate per
              minimizzarlo.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Rapporto di compressione</span>
            <h3>Compressione effettiva vs geometrica</h3>
            <p>
              Il rapporto di compressione geometrico viene calcolato sul volume
              cilindro intero. Ma poiché lo scarico chiude dopo il PMI, la
              compressione effettiva inizia prima e il rapporto reale è
              influenzato dall&apos;altezza delle luci — un parametro modificabile
              in fase di preparazione.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default FirstCyclePhases;
