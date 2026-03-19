import "./fuelAndMixture.scss";
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

const benzine = [
  {
    num: "01",
    label: "Benzina verde 95",
    desc: "La scelta più comune per motori 2T da cross e trial. Ottano sufficiente per rapporti di compressione standard (11:1–13:1). Accessibile e stabile nella combustione quotidiana.",
  },
  {
    num: "02",
    label: "Benzina super 98",
    desc: "Preferita per motori con rapporto di compressione elevato o testata elaborata. Riduce il rischio di detonazione sotto carico, specialmente nei tempi di gara con miscele più magre.",
  },
  {
    num: "03",
    label: "Benzina racing",
    desc: "Carburante ad alto ottano per preparazioni spinte. Brucia in modo più controllato, regge l'anticipo d'accensione aggressivo e sopporta temperature di combustione più alte.",
  },
  {
    num: "04",
    label: "Etanolo e miscele",
    desc: "Alcuni preparatori usano benzina con contenuto etanolico. L'etanolo brucia più freddo ma richiede getti più ricchi perché il suo potere calorifero per unità di volume è inferiore.",
  },
];

const rapporti = [
  {
    ratio: "1:20",
    label: "Molto ricca di olio",
    cls: "badgeRicco",
    desc: "Usata in rodaggio o in condizioni di stress estremo. Il fumo bianco-azzurro è visibile, la combustione è meno efficiente, ma la protezione delle bronzine è massima.",
  },
  {
    ratio: "1:25–1:32",
    label: "Rodaggio / garanzia",
    cls: "badgeNormale",
    desc: "Range tipico consigliato dal costruttore per le prime ore di utilizzo o per motori elaborati con tolleranze strette. Buona protezione, fumosità accettabile.",
  },
  {
    ratio: "1:40–1:50",
    label: "Uso corrente",
    cls: "badgeCorretto",
    desc: "Rapporto standard per motori in rodaggio completato. Lubrificazione sufficiente con olio di qualità, combustione più pulita, minor deposito carboniosa sullo stantuffo.",
  },
  {
    ratio: "> 1:60",
    label: "Troppo magra di olio",
    cls: "badgeMagro",
    desc: "Pericoloso su motori che richiedono lubrificazione intensiva. Rischio di grippaggio del pistone nelle giri alti o sotto prolungato carico massimo.",
  },
];

const olioItems = [
  {
    label: "Olio semisintetico",
    text: "Offre un buon compromesso tra protezione termica e pulizia. Adatto all'uso stradale e all'enduro non estremo. Produce meno depositi carboniosi rispetto al minerale puro.",
  },
  {
    label: "Olio sintetico full",
    text: "La scelta per la gara e le preparazioni da cross. Protegge meglio a temperature elevate, produce meno fumo, resiste alla degradazione chimica ad alti regimi prolungati.",
  },
  {
    label: "Olio minerale",
    text: "Usato in applicazioni meno critiche o in motori vintage. Richiede rapporti più ricchi (1:25–1:32) per garantire lubrificazione sufficiente. Tende a lasciare più depositi.",
  },
  {
    label: "Autolubrificanti (Autolube)",
    text: "Sistemi a iniezione dell'olio separata (es. Yamaha Autolube). L'olio viene dosato proporzionalmente al regime e al carico, eliminando la pre-miscelazione manuale.",
  },
];

const FuelAndMixture = () => {
  return (
    <section className="fuelAndMixture" id="FuelAndMixture">
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
              2.1 — Carburante e miscela
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Carburante, olio e rapporto di miscela
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              In un motore 2 tempi il carburante non lavora da solo. Prima di
              raggiungere la camera di combustione, si unisce all&apos;olio 2T
              e all&apos;aria formando la carica fresca che entra nel carter.
              Questa triplice miscela è il punto di partenza di tutto il ciclo.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il rapporto tra benzina e olio determina quanta lubrificazione
              ricevono pistone, stantuffo e bronzine — componenti che in un 2T
              non hanno un circuito d&apos;olio dedicato. Scegliere il grado di
              benzina sbagliato o calcolare male la miscela non è solo un
              problema di prestazioni: è un rischio diretto per la vita del
              motore.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Triplice equilibrio</span>
              <h3>Benzina + olio + aria: ognuno ha un ruolo preciso</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniLabel">Benzina</span>
                <span className="miniValue">Energia chimica rilasciata dalla combustione</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Olio 2T</span>
                <span className="miniValue">Lubrificazione pistone, bronzine e segmenti</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Rapporto di miscela</span>
                <span className="miniValue">Da 1:20 (rodaggio) a 1:50 (uso corrente)</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Qualità olio</span>
                <span className="miniValue">Sintetico, semisintetico o minerale: cambia tutto</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── QUALITÀ BENZINA ─────────────────────────────────────────────── */}
        <motion.div
          className="benzineBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="benzineHeader">
            <h3>Qualità della benzina e numero di ottano</h3>
            <p>
              Il numero di ottano descrive la resistenza della benzina alla
              detonazione anticipata. Nei motori 2T con compressione elevata o
              anticipo d&apos;accensione aggressivo, usare benzina con ottano
              troppo basso può generare battito in testa — una combustione
              spontanea e incontrollata che nel tempo fora i pistoni e brucia i
              segmenti.
            </p>
          </div>
          <motion.div
            className="benzineGrid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {benzine.map((b) => (
              <motion.div className="benzineCard" key={b.num} variants={cardVariants}>
                <span className="benzineIdx">{b.num}</span>
                <h4>{b.label}</h4>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RAPPORTO DI MISCELA ─────────────────────────────────────────── */}
        <motion.div
          className="rapportoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="rapportoHeader">
            <h3>Rapporto di miscela: quanta benzina per quanto olio</h3>
            <p>
              Il rapporto indica quanti ml di benzina vanno mescolati con 1 ml
              di olio. Un rapporto 1:50 significa 50 parti di benzina per
              1 parte di olio. Più il rapporto è basso numericamente (es. 1:20),
              più olio è presente nella miscela — una miscela &quot;grassa&quot;
              di olio. Il valore corretto dipende dal tipo di motore, dallo
              stato di rodaggio e dalla qualità dell&apos;olio.
            </p>
          </div>
          <motion.div
            className="rapportoGrid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {rapporti.map((r) => (
              <motion.div className="rapportoCard" key={r.ratio} variants={cardVariants}>
                <span className={`rapportoBadge ${r.cls}`}>{r.label}</span>
                <span className="rapportoRatio">{r.ratio}</span>
                <p>{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── QUALITÀ OLIO ────────────────────────────────────────────────── */}
        <motion.div
          className="olioBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="olioHeader">
            <h3>Tipi di olio 2T e loro comportamento</h3>
            <p>
              Non tutti gli oli 2T sono uguali. La scelta tra minerale,
              semisintetico e sintetico influenza la protezione termica, la
              fumosità, i depositi carboniosi sullo stantuffo e la pulizia delle
              luci. In un motore da competizione, usare olio minerale al posto
              del sintetico è un errore che si paga in termini di vita utile.
            </p>
          </div>
          <div className="olioContent">
            {olioItems.map((o) => (
              <div className="olioItem" key={o.label}>
                <span className="olioLabel">{o.label}</span>
                <p>{o.text}</p>
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
            <span className="cardTag">Miscelazione</span>
            <h3>Come miscelare correttamente</h3>
            <p>
              Versare prima la benzina nel contenitore, poi aggiungere l&apos;olio
              e agitare. Non miscelare direttamente nel serbatoio: l&apos;olio
              freddo fatica a distribuirsi uniformemente e può creare zone
              povere di lubrificazione.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Segni di miscela sbagliata</span>
            <h3>Cosa succede quando la miscela è errata</h3>
            <p>
              Miscela troppo magra di olio: il pistone surriscalda, i segmenti
              grippano. Miscela troppo ricca: la candela si sporca, il motore
              scopa male ai bassi, le luci di travaso si intasano di depositi
              carboniosi.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Stoccaggio</span>
            <h3>Benzina e stabilità nel tempo</h3>
            <p>
              La benzina pre-miscelata con olio inizia a degradarsi dopo 30–60
              giorni, specialmente in climi caldi. Per moto usate stagionalmente,
              svuotare il serbatoio o aggiungere un additivo stabilizzante evita
              ossidazione e formazione di vernice nel carburatore.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default FuelAndMixture;
