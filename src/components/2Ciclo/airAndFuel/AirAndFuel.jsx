import "./airAndFuel.scss";
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

const carbCards = [
  {
    num: "01",
    label: "Getto principale",
    badge: "badgeGetto",
    badgeText: "Alti regimi",
    desc: "Calibra la portata di carburante ai regimi medio-alti. Un getto troppo piccolo impoverisce la miscela in allungata, rischiando il grippaggio del pistone per eccesso di temperatura.",
  },
  {
    num: "02",
    label: "Spillo e clip",
    badge: "badgeSpillo",
    badgeText: "Medi",
    desc: "Governano l'erogazione nella zona di transizione (¼–¾ di gas). La posizione della clip sullo spillo alza o abbassa il livello del carburante nel diffusore, influenzando risposta e carattere.",
  },
  {
    num: "03",
    label: "Getto del minimo",
    badge: "badgeMinimo",
    badgeText: "Bassi regimi",
    desc: "Alimenta il circuito di minimo e il primo quarto di gas. Un minimo troppo magro causa la moto a spegnersi in rilascio o a tossire all'apertura improvvisa del gas.",
  },
  {
    num: "04",
    label: "Vaschetta galleggiante",
    badge: "badgeVaschetta",
    badgeText: "Livello carburante",
    desc: "Mantiene costante il livello del carburante nel corpo del carburatore. Un livello troppo alto inonda il circuito, uno troppo basso impoverisce il dosaggio indipendentemente dalla calibrazione dei getti.",
  },
];

const lamellareItems = [
  {
    label: "Funzione valvola di non ritorno",
    text: "Il pacco lamellare si apre quando la pressione sul lato aspirazione supera quella del carter, lasciando entrare la miscela. Si richiude quando la pressione nel carter sale, impedendo il reflusso verso il carburatore.",
  },
  {
    label: "Materiali: fibra vs carbonio",
    text: "Le lamelle in fibra di vetro sono standard e durevoli. Quelle in fibra di carbonio — più leggere e reattive — sono preferite nelle preparazioni da gara perché rispondono più velocemente alle variazioni di pressione ad alti regimi.",
  },
  {
    label: "Petali rotti o deformati",
    text: "Un petalo rotto non sigilla più correttamente: la miscela rifluisce parzialmente verso il carburatore, impoverendo il riempimento del carter e causando perdita di risposta ai bassi e ai medi.",
  },
  {
    label: "Geometria e angolo del pacco",
    text: "L'angolo con cui il pacco lamellare è inclinato rispetto al condotto di aspirazione influenza la portata d'aria massima. I modelli racing usano angoli e profili ottimizzati per ridurre la perdita di carico.",
  },
];

const AirAndFuel = () => {
  return (
    <section className="airAndFuel" id="AirAndFuel">
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
              2.2 — Aria e carburante
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Dal filtro al carter: il percorso della miscela
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Prima che avvenga qualsiasi combustione, aria e carburante devono
              percorrere un tragitto preciso attraverso filtro, carburatore,
              pacco lamellare e carter. Ogni tratto di questo percorso
              condiziona il dosaggio finale che raggiungerà il cilindro.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              In un motore 2T con carburatore, non esiste un sistema elettronico
              che corregga gli errori di calibrazione. Se il getto è sbagliato,
              lo spillo è fuori posizione o il pacco lamellare è deteriorato,
              il motore lo comunica attraverso la risposta, la temperatura e
              il colore della candela — non attraverso una spia sul cruscotto.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Percorso della miscela</span>
              <h3>4 stazioni prima della combustione</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniLabel">1 — Filtro aria</span>
                <span className="miniValue">Blocca polvere e particolato, garantisce aria pulita e costante</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">2 — Carburatore</span>
                <span className="miniValue">Dosa il carburante e lo nebulizza nell'aria in transito</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">3 — Pacco lamellare</span>
                <span className="miniValue">Valvola di non ritorno: ammette la carica, blocca il reflusso</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">4 — Carter</span>
                <span className="miniValue">Accumula e precomprime la miscela prima del travaso</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CARBURATORE ─────────────────────────────────────────────────── */}
        <motion.div
          className="carbBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="carbHeader">
            <h3>Il carburatore: quattro circuiti, un dosaggio</h3>
            <p>
              Il carburatore a spillo (PWK, PWM, VHSB…) è il cuore del sistema
              di alimentazione nel 2T da cross. Il suo compito è trasformare la
              benzina liquida in un aerosol finemente nebulizzato che si mescola
              con l&apos;aria in ingresso. La calibrazione non è universale:
              cambia con la quota, la temperatura, il tipo di scarico e il
              rapporto di compressione.
            </p>
          </div>
          <motion.div
            className="carbGrid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {carbCards.map((c) => (
              <motion.div className="carbCard" key={c.num} variants={cardVariants}>
                <span className={`carbBadge ${c.badge}`}>{c.badgeText}</span>
                <h4>{c.label}</h4>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── PACCO LAMELLARE ─────────────────────────────────────────────── */}
        <motion.div
          className="lamellareBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="lamellareHeader">
            <h3>Il pacco lamellare: valvola intelligente a pressione</h3>
            <p>
              Il pacco lamellare è uno dei componenti più eleganti del 2T:
              non ha attuatori, molle o controllo elettronico. Si apre e si
              chiude in risposta pura alla differenza di pressione tra il
              condotto di aspirazione e il carter — centinaia di volte al
              secondo ad alti regimi. La sua efficienza determina direttamente
              la qualità del riempimento del carter.
            </p>
          </div>
          <div className="lamellareContent">
            {lamellareItems.map((l) => (
              <div className="lamellareItem" key={l.label}>
                <span className="lamellareLabel">{l.label}</span>
                <p>{l.text}</p>
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
            <span className="cardTag">Filtro aria</span>
            <h3>Un filtro sporco cambia tutto</h3>
            <p>
              Il filtro dell&apos;aria non è solo protezione meccanica. Se è
              intasato, aumenta la resistenza al flusso e impoverisce la miscela
              perché il carburatore eroga la stessa quantità di benzina ma con
              meno aria. Il risultato: miscela più ricca, candela nera, risposta
              attutita.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Temperatura aria</span>
            <h3>L&apos;aria più calda è meno densa</h3>
            <p>
              A temperatura elevata l&apos;aria si espande: entra lo stesso
              volume ma con meno molecole di ossigeno. Il carburatore deve
              essere ricalibrato per l&apos;estate o per le gare in quota
              dove la densità dell&apos;aria scende ulteriormente.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Carter come pompa</span>
            <h3>Il carter è parte attiva del ciclo</h3>
            <p>
              Nel 2T il carter non è un semplice contenitore: è una camera di
              pompaggio. Quando il pistone scende, la pressione nel carter sale
              e spinge la miscela verso le luci di travaso. Quando il pistone
              sale, la depressione nel carter aspira la nuova carica dal pacco
              lamellare.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default AirAndFuel;
