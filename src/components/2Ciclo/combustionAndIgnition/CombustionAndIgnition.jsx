import "./combustionAndIgnition.scss";
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

const candelaCards = [
  {
    num: "01",
    badge: "badgeTermico",
    badgeText: "Grado termico",
    label: "Fredda o calda?",
    desc: "Il grado termico descrive la capacità della candela di dissipare calore. Una candela fredda (alto grado) disperde il calore velocemente — ideale per motori ad alto regime. Una candela calda (basso grado) mantiene la punta più calda per evitare fouling in condizioni di uso leggero.",
  },
  {
    num: "02",
    badge: "badgeElettro",
    badgeText: "Elettrodi",
    label: "Gap e geometria elettrodi",
    desc: "Il gap (distanza inter-elettrodica) determina la tensione necessaria per far scattare la scintilla. Gap troppo stretto: scintilla debole. Gap troppo ampio: rischio di mancata accensione ad alto regime o con miscele ricche.",
  },
  {
    num: "03",
    badge: "badgeColore",
    badgeText: "Lettura candela",
    label: "Il colore della punta non mente",
    desc: "Punta marrone/beige: miscela corretta. Punta nera e umida: miscela troppo ricca o grado termico sbagliato. Punta bianca o grigiastra: miscela troppo magra — pericolo imminente per il pistone. La candela è la finestra sul cuore del motore.",
  },
  {
    num: "04",
    badge: "badgeFasatura",
    badgeText: "Anticipo",
    label: "Fasatura di accensione",
    desc: "La scintilla scatta qualche grado prima del PMS (anticipata) perché la combustione impiega tempo a propagarsi. L'anticipo ottimale massimizza la pressione nel momento più favorevole per spingere il pistone in discesa.",
  },
];

const processoSteps = [
  {
    num: "01",
    label: "Miscela compressa nella camera",
    text: "Il pistone ha raggiunto la sua posizione più alta (PMS). La miscela aria-carburante-olio è compressa in un volume minimo. La pressione è massima prima dell'accensione.",
  },
  {
    num: "02",
    label: "La scintilla genera il fronte di fiamma",
    text: "La candela scocca e crea un punto caldo agli elettrodi. Il fronte di fiamma si propaga attraverso la miscela compressa in modo concentrico, partendo dal centro-testata verso le pareti.",
  },
  {
    num: "03",
    label: "La pressione sale in modo esplosivo",
    text: "La combustione è rapida ma non istantanea: dura qualche grado di rotazione dell'albero. In questo arco, la pressione nel cilindro sale da 15–20 bar (compressione) a 50–80 bar (combustione picco) nei motori da cross.",
  },
  {
    num: "04",
    label: "I gas spingono il pistone verso il PMI",
    text: "La pressione sui gas agisce sulla testa del pistone, generando forza sulla biella e coppia sull'albero motore. La potenza effettiva del motore dipende da quanto velocemente e quanto in alto sale la pressione in questo momento.",
  },
];

const fasaturaItems = [
  {
    label: "Anticipo troppo elevato (in anticipo)",
    text: "La combustione inizia troppo presto: il pistone sta ancora salendo mentre la pressione cresce già contro di lui. Si genera battito in testa (detonazione), calore eccessivo e rischio di forare la testa del pistone. Il motore suona metallico.",
  },
  {
    label: "Anticipo troppo ridotto (in ritardo)",
    text: "La miscela inizia a bruciare quando il pistone è già in discesa. La pressione picco si raggiunge troppo tardi, parte dell'energia termica viene persa nello scarico e il motore perde potenza e risposta ai medi-alti.",
  },
  {
    label: "Anticipo corretto",
    text: "La pressione massima si sviluppa tipicamente 10–15° dopo il PMS. In questo punto il volume del cilindro è già sufficiente per l'espansione, la biella è in posizione favorevole e la forza si trasferisce in modo ottimale all'albero motore.",
  },
  {
    label: "Anticipo variabile (CDI programmabile)",
    text: "Alcuni motori 2T moderni e preparazioni racing usano CDI con mappa di accensione variabile: l'anticipo cambia in funzione del regime, ottimizzando la combustione su tutto l'arco di utilizzo anziché su un punto solo.",
  },
];

const CombustionAndIgnition = () => {
  return (
    <section className="combustionAndIgnition" id="CombustionAndIgnition">
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
              2.4 — Combustione e accensione
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Candela, fronte di fiamma e pressione nel cilindro
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La combustione è l&apos;evento centrale del ciclo termodinamico.
              In pochi gradi di rotazione dell&apos;albero motore, la miscela
              compressa si accende, il fronte di fiamma si propaga e la
              pressione nel cilindro triplica o quadruplica. È da questo
              aumento di pressione che nasce tutta la coppia del motore.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              In un 2T la combustione non è solo chimica: è fisica, geometria
              e timing. La forma della camera di combustione, il grado termico
              della candela, l&apos;anticipo d&apos;accensione e la qualità
              della miscela sono variabili che si influenzano a vicenda. Capire
              come interagiscono è la chiave per interpretare la salute del
              motore e intervenire con le modifiche corrette.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Evento centrale</span>
              <h3>Dalla scintilla alla forza sul pistone</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniLabel">Candela</span>
                <span className="miniValue">Genera la scintilla agli elettrodi al momento corretto</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Fronte di fiamma</span>
                <span className="miniValue">Si propaga attraverso la miscela dalla scintilla alle pareti</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Pressione picco</span>
                <span className="miniValue">50–80 bar nei motori da cross — 10–15° dopo il PMS</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Coppia</span>
                <span className="miniValue">Pressione × area testa pistone = forza sulla biella</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CANDELA BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="candelaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="candelaHeader">
            <h3>La candela: non è semplice come sembra</h3>
            <p>
              La candela è l&apos;unico componente del motore che può essere
              estratto e letto in pochi secondi. Il colore della punta, lo
              stato degli elettrodi e i depositi sulla ceramica raccontano
              tutto sulla salute del motore — miscela, temperatura, qualità
              dell&apos;olio e correttezza della fasatura.
            </p>
          </div>
          <motion.div
            className="candelaGrid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {candelaCards.map((c) => (
              <motion.div className="candelaCard" key={c.num} variants={cardVariants}>
                <div className="candelaTop">
                  <span className="candelaNum">{c.num}</span>
                  <span className={`candelaBadge ${c.badge}`}>{c.badgeText}</span>
                </div>
                <h4>{c.label}</h4>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── PROCESSO BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="processoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="processoHeader">
            <h3>Sequenza di combustione passo per passo</h3>
            <p>
              La combustione non è un&apos;esplosione istantanea ma un evento
              controllato che dura qualche millisecondo — equivalente a una
              decina di gradi di rotazione dell&apos;albero. In questo
              intervallo brevissimo, tutto deve funzionare perfettamente.
            </p>
          </div>
          <motion.div
            className="processoGrid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {processoSteps.map((s) => (
              <motion.div className="processoCard" key={s.num} variants={cardVariants}>
                <span className="processoNum">{s.num}</span>
                <h4>{s.label}</h4>
                <p>{s.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── FASATURA BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="fasaturaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="fasaturaHeader">
            <h3>Anticipo d&apos;accensione: il parametro più sensibile</h3>
            <p>
              L&apos;anticipo d&apos;accensione (ignition timing) è la variabile
              che più influenza potenza, sicurezza e carattere del motore.
              Modificarlo — attraverso il CDI, la bobina o lo statore — cambia
              il punto in cui la pressione picco si sviluppa nel cilindro.
            </p>
          </div>
          <div className="fasaturaContent">
            {fasaturaItems.map((f) => (
              <div className="fasaturaItem" key={f.label}>
                <span className="fasaturaLabel">{f.label}</span>
                <p>{f.text}</p>
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
            <span className="cardTag">Battito in testa</span>
            <h3>Detonazione: il nemico silenzioso del pistone</h3>
            <p>
              La detonazione (knocking) avviene quando parte della miscela
              s&apos;accende spontaneamente prima che il fronte di fiamma arrivi.
              Si genera un&apos;onda di pressione distruttiva. Nei 2T da cross
              basta qualche minuto di detonazione sostenuta per forare la testa
              del pistone o rompere i segmenti.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Pre-accensione</span>
            <h3>Quando il motore si accende da solo</h3>
            <p>
              La pre-accensione avviene quando un punto caldo nella camera
              (deposito carbonioso, spigolo vivo della testata, punta candela
              surriscaldata) accende la miscela prima della scintilla. Il
              risultato è simile alla detonazione: pressione in anticipo,
              forza contro il pistone in salita, danni.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Rapporto compressione</span>
            <h3>Compressione e accensione si influenzano</h3>
            <p>
              Un rapporto di compressione più alto aumenta la densità e la
              temperatura della miscela al PMS, richiedendo benzina con ottano
              più alto per evitare la detonazione. I motori da gara con
              compressione 14:1 usano benzina 98 o racing e anticipo calibrato
              con precisione.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default CombustionAndIgnition;
