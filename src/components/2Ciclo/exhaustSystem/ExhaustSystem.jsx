import "./exhaustSystem.scss";
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

const luceScarico = [
  {
    num: "01",
    badge: "badgeTiming",
    badgeText: "Timing apertura",
    label: "Quando si apre la luce di scarico",
    desc: "La luce di scarico si apre quando il pistone in discesa la scopre, tipicamente 75–100° dopo il PMS nei motori cross. L'apertura anticipata allunga il tempo di scarico e abbassa la pressione residua nel cilindro prima del travaso.",
  },
  {
    num: "02",
    badge: "badgePressione",
    badgeText: "Onda di pressione",
    label: "La prima onda parte verso lo scarico",
    desc: "All'apertura della luce, i gas a 5–10 bar escono di colpo nel collettore di scarico. Questa espansione genera un'onda di pressione positiva che viaggia verso la camera di espansione alla velocità del suono.",
  },
  {
    num: "03",
    badge: "badgeLavaggio",
    badgeText: "Lavaggio",
    label: "Scarico e travaso si sovrappongono",
    desc: "Le luci di travaso aprono poco dopo lo scarico. La miscela fresca dal carter entra nel cilindro e aiuta a spingere fuori i gas combusti — un processo chiamato lavaggio o scavenging. La geometria delle luci di travaso orienta il flusso verso l'alto per ridurre il cortocircuito.",
  },
  {
    num: "04",
    badge: "badgeRitorno",
    badgeText: "Onda riflessa",
    label: "Il ritorno dell'onda chiude il cilindro",
    desc: "La camera di espansione riflette un'onda di pressione negativa che torna verso la luce di scarico. Se il tuning è corretto, questa onda arriva quando la luce sta per chiudersi e comprime la miscela fresca che stava per uscire — aumentando l'efficienza volumetrica.",
  },
];

const cameraCards = [
  {
    num: "01",
    label: "Diffusore (cono di espansione)",
    desc: "La sezione che si allarga subito dopo il collettore. Qui i gas si espandono e rallentano, generando la zona di bassa pressione che aspira i gas residui fuori dal cilindro durante il lavaggio.",
  },
  {
    num: "02",
    label: "Ventre (corpo centrale)",
    desc: "La zona di massimo volume della camera. I gas combusti si espandono ulteriormente e la velocità scende. La lunghezza del ventre determina il timing con cui l'onda riflessa ritorna al cilindro.",
  },
  {
    num: "03",
    label: "Cono di riflessione",
    desc: "La sezione che si restringe verso il silenziatore. Qui i gas vengono frenati bruscamente e l'onda di pressione positiva viene generata in direzione inversa — torna verso il cilindro per comprimere la miscela fresca.",
  },
  {
    num: "04",
    label: "Stinger (tubo finale)",
    desc: "Il tubo di uscita verso il silenziatore. Il suo diametro e la sua lunghezza influenzano il comportamento del motore ai bassi regimi. Uno stinger troppo corto o troppo largo disperde l'onda riflessa.",
  },
];

const ondaItems = [
  {
    label: "Onda di pressione diretta (positiva)",
    text: "Quando la luce di scarico si apre, i gas ad alta pressione creano un'onda che viaggia dal cilindro verso la camera. Questa onda positiva aiuta ad aspirare i gas combusti residui fuori dal cilindro.",
  },
  {
    label: "Onda riflessa (negativa)",
    text: "Al cono di riflessione, l'onda si inverte. L'onda negativa crea una zona di bassa pressione che aspira ancora più gas combusti e miscela fresca nel cilindro durante il travaso.",
  },
  {
    label: "Onda di compressione di ritorno (positiva)",
    text: "Subito dopo, l'onda positiva riflessa torna verso il cilindro. Se arriva al momento giusto (pochi gradi prima della chiusura della luce di scarico), comprime la miscela fresca impedendole di uscire — effetto rincalzo.",
  },
  {
    label: "Accordatura del tubo (tuning)",
    text: "La lunghezza totale del tubo di espansione determina il regime a cui questo effetto è massimo. Un tubo corto suona ai giri alti, un tubo lungo funziona meglio ai bassi. Da qui nasce il tipico carattere a banda stretta del 2T.",
  },
];

const ExhaustSystem = () => {
  return (
    <section className="exhaustSystem" id="ExhaustSystem">
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
              2.5 — Sistema di scarico
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Camera di espansione e onda riflessa
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Lo scarico del 2T non è solo un sistema di evacuazione dei gas
              combusti. È un dispositivo acustico e termodinamico di precisione
              che sfrutta le onde di pressione per aumentare l&apos;efficienza
              volumetrica del cilindro — portandola in alcuni casi oltre il 100%.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La camera di espansione (o tubo di espansione) è lo strumento con
              cui si ottiene questo risultato. La sua geometria — cono di
              espansione, ventre, cono di riflessione — è calibrata per far
              tornare un&apos;onda di pressione al cilindro esattamente nel
              momento giusto. Cambiare la lunghezza o il profilo del tubo
              cambia il carattere del motore in modo radicale.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Sequenza scarico</span>
              <h3>Dallo scarico al ritorno dell&apos;onda</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniLabel">Apertura luce</span>
                <span className="miniValue">Gas combusti escono ad alta pressione nel collettore</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Onda diretta</span>
                <span className="miniValue">Onda positiva viaggia verso la camera di espansione</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Riflessione</span>
                <span className="miniValue">L'onda si inverte al cono di riflessione e torna indietro</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Rincalzo</span>
                <span className="miniValue">L'onda positiva di ritorno comprime la miscela fresca nel cilindro</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── LUCE SCARICO BLOCK ──────────────────────────────────────────── */}
        <motion.div
          className="luceBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="luceHeader">
            <h3>Dalla luce di scarico all&apos;onda riflessa: 4 fasi</h3>
            <p>
              L&apos;intero processo si svolge in pochi millisecondi — o in
              termini angolari, in 130–150° di rotazione dell&apos;albero.
              Ogni fase è interdipendente: un problema in una altera tutte le
              altre e si manifesta come perdita di banda di potenza, aumento
              del cortocircuito o peggioramento del lavaggio.
            </p>
          </div>
          <motion.div
            className="luceGrid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {luceScarico.map((l) => (
              <motion.div className="luceCard" key={l.num} variants={cardVariants}>
                <div className="luceTop">
                  <span className="luceNum">{l.num}</span>
                  <span className={`luceBadge ${l.badge}`}>{l.badgeText}</span>
                </div>
                <h4>{l.label}</h4>
                <p>{l.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── CAMERA ESPANSIONE BLOCK ─────────────────────────────────────── */}
        <motion.div
          className="cameraBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="cameraHeader">
            <h3>Anatomia della camera di espansione</h3>
            <p>
              La camera di espansione è un componente che sembra semplice
              dall&apos;esterno ma nasconde geometrie calcolate con precisione
              millimetrica. Ogni sezione ha una funzione specifica
              nell&apos;intera catena delle onde di pressione.
            </p>
          </div>
          <motion.div
            className="cameraGrid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {cameraCards.map((c) => (
              <motion.div className="cameraCard" key={c.num} variants={cardVariants}>
                <span className="cameraIdx">{c.num}</span>
                <h4>{c.label}</h4>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── IMMAGINE ────────────────────────────────────────────────────── */}
        <div className="exhaustImageBlock">
          <div className="imageContainer">
            <img
              src="https://i.makeagif.com/media/11-08-2016/GHFqhJ.gif"
              alt="Animazione sistema di scarico a due tempi"
            />
          </div>
        </div>

        {/* ── ONDA BLOCK ──────────────────────────────────────────────────── */}
        <motion.div
          className="ondaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="ondaHeader">
            <h3>Il fenomeno delle onde di pressione nel dettaglio</h3>
            <p>
              Le onde di pressione nel tubo di scarico non sono un effetto
              collaterale — sono l&apos;intero motivo per cui la camera di
              espansione esiste. Comprenderle permette di capire perché il
              2T &quot;tira&quot; solo in un certo range di giri e come
              intervenire sulla preparazione per spostare o allargare quel range.
            </p>
          </div>
          <div className="ondaContent">
            {ondaItems.map((o) => (
              <div className="ondaItem" key={o.label}>
                <span className="ondaLabel">{o.label}</span>
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
            <span className="cardTag">Power valve (YPVS/TPS)</span>
            <h3>La valvola di scarico variabile allarga la banda</h3>
            <p>
              Yamaha (YPVS), Honda (RC-Valve) e Kawasaki (KIPS) hanno sviluppato
              valvole di scarico variabili che modificano l&apos;altezza o la
              geometria della luce di scarico in funzione del regime. Ai bassi
              regimi la luce è ridotta per aumentare la compressione effettiva;
              agli alti si apre completamente per massimizzare la portata.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Manutenzione</span>
            <h3>I depositi nel tubo cambiano il suo comportamento</h3>
            <p>
              L&apos;olio 2T bruciato forma depositi carboniosi sulle pareti
              interne del tubo di espansione. Questi depositi restringono il
              volume interno e alterano le riflessioni delle onde, modificando
              il regime di picco della banda di potenza. La pulizia periodica
              del tubo è parte della manutenzione seria.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Accordatura</span>
            <h3>Tubo corto vs tubo lungo: scelta consapevole</h3>
            <p>
              Un tubo di espansione più corto sposta il picco di potenza a
              regimi più alti — ideale per cross e piste veloci. Un tubo più
              lungo sposta il picco verso il basso — ideale per enduro,
              motard o guida in spazi ristretti dove la risposta ai bassi
              è prioritaria rispetto alla potenza di punta.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default ExhaustSystem;
