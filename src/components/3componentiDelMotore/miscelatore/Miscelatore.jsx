import "./miscelatore.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const Miscelatore = () => {
  return (
    <section className="miscelatore" id="miscelatore">
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
              Lubrificazione
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il miscelatore nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Nel motore a 2 tempi l'olio viene miscelato direttamente con la benzina e
              bruciato insieme ad essa durante la combustione. Il miscelatore è
              il componente che gestisce questo processo, dosando l'olio in
              proporzione alla benzina in modo che il motore riceva sempre la
              quantità corretta di lubrificante in ogni condizione di utilizzo.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Esistono due famiglie principali: il miscelatore meccanico,
              comandato direttamente dal cavo del gas, e il miscelatore
              elettronico, gestito dalla centralina tramite sensori e un
              motorino passo-passo. La differenza non è solo tecnologica — cambia
              radicalmente la precisione del dosaggio, la protezione del motore
              e la risposta ai transitori.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Due sistemi a confronto</span>
              <h3>Meccanico vs Elettronico</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex dot-mec">M</span>
                <span className="miniText">Meccanico — proporzionale al gas, semplice e diretto</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex dot-ele">E</span>
                <span className="miniText">Elettronico — calcolato da ECU su regime e carico</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Pompa olio separata — erogazione continua e calibrata</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Sensore livello — protezione in caso di olio esaurito</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER 1 ────────────────────────────────────────── */}
        <motion.div
          className="visualBlock"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — schema miscelatore</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}

          <div className="visualCaption">
            <span className="captionTag">Schema generale</span>
            <p>
              Il miscelatore riceve olio dal serbatoio dedicato e lo inietta
              nel condotto di aspirazione o direttamente nel carburatore in
              proporzione alla benzina consumata, garantendo la lubrificazione
              continua di pistone, cilindro e cuscinetti di banco.
            </p>
          </div>
        </motion.div>

        {/* ── MECCANICO BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="tipoBlock mecBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tipoHeader" variants={fadeUpVariants}>
            <div className="tipoHeaderLeft">
              <span className="tipoBadge badgeMec">Meccanico</span>
              <h3>Miscelatore meccanico</h3>
              <p>
                Il miscelatore meccanico è azionato direttamente dal cavo del
                gas tramite un leveraggio collegato alla pompa olio. Quando il
                pilota apre il gas, la pompa si muove in proporzione,
                incrementando il flusso di olio. È una soluzione robusta,
                affidabile e priva di elettronica, adottata per decenni su
                moto da cross, enduro e scooter.
              </p>
            </div>
          </motion.div>

          <motion.div className="tipoGrid" variants={cardVariants}>

            <div className="tipoCard">
              <span className="tipoCardIndex">01</span>
              <h4>Come funziona il leveraggio</h4>
              <p>
                Un cavo di comando — spesso derivato dallo stesso cavo del gas
                o collegato meccanicamente alla carrozzeria della farfalla —
                muove direttamente il pistone della pompa olio. Il rapporto tra
                apertura gas e portata olio è fisso e determinato dalla
                geometria del leveraggio: più gas, più olio erogato in modo
                lineare.
              </p>
            </div>

            <div className="tipoCard">
              <span className="tipoCardIndex">02</span>
              <h4>La pompa a pistone</h4>
              <p>
                La pompa meccanica è tipicamente a pistone alternativo o a
                ingranaggi. Il pistone compie una corsa calibrata per ogni ciclo
                di azionamento, spingendo una quantità precisa di olio verso il
                condotto. La portata massima è tarata in fabbrica e non è
                regolabile in campo senza intervenire sul leveraggio o sugli
                spessori di regolazione.
              </p>
            </div>

            <div className="tipoCard">
              <span className="tipoCardIndex">03</span>
              <h4>Spurgo e aria nel circuito</h4>
              <p>
                Uno dei problemi principali del miscelatore meccanico è la
                presenza di aria nel circuito olio, specie dopo la sostituzione
                della pompa o dopo aver esaurito completamente il serbatoio
                dell'olio. Uno spurgho incompleto significa che nei primi minuti
                di utilizzo il motore riceve meno olio del necessario, con
                rischio di grippaggio.
              </p>
            </div>

            <div className="tipoCard">
              <span className="tipoCardIndex">04</span>
              <h4>Limiti del sistema meccanico</h4>
              <p>
                Il rapporto gas-olio è fisso per ogni posizione del gas,
                indipendentemente dal regime reale del motore. Un motore che
                gira a 9.000 giri con il gas al 50% riceve la stessa quantità
                di olio di uno che gira a 4.000 giri alla stessa posizione.
                Questo porta a sovra-lubrificazione a bassi regimi e a un
                dosaggio potenzialmente insufficiente in condizioni di alto
                regime e bassa apertura gas.
              </p>
            </div>

          </motion.div>

          {/* ── VISUAL PLACEHOLDER 2 ── */}
          <motion.div className="tipoVisual" variants={fadeUpVariants}>
            {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
            <div className="mediaPlaceholder mediaPlaceholderWide">
              <div className="placeholderInner">
                <span className="placeholderIcon">⊕</span>
                <span className="placeholderText">Immagine / GIF — miscelatore meccanico e leveraggio</span>
                <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
              </div>
            </div>
            {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          </motion.div>

        </motion.div>

        {/* ── ELETTRONICO BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="tipoBlock eleBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tipoHeader" variants={fadeUpVariants}>
            <div className="tipoHeaderLeft">
              <span className="tipoBadge badgeEle">Elettronico</span>
              <h3>Miscelatore elettronico</h3>
              <p>
                Il miscelatore elettronico elimina il collegamento meccanico
                diretto con il gas e sostituisce il cavo con un motorino
                passo-passo controllato dalla centralina. La ECU calcola la
                quantità esatta di olio necessaria leggendo in tempo reale il
                regime del motore, la posizione del gas (TPS) e il carico,
                garantendo un dosaggio ottimale in ogni punto di funzionamento.
              </p>
            </div>
          </motion.div>

          <motion.div className="tipoGrid" variants={cardVariants}>

            <div className="tipoCard tipoCardEle">
              <span className="tipoCardIndex idxEle">01</span>
              <h4>Il motorino passo-passo</h4>
              <p>
                Il cuore del miscelatore elettronico è un motore stepper che
                muove la valvola della pompa olio con precisione angolare
                elevatissima. La ECU invia impulsi elettrici che determinano
                l'esatto angolo di apertura e quindi la portata di olio. La
                risoluzione del sistema permette dosaggi impossibili da ottenere
                meccanicamente.
              </p>
            </div>

            <div className="tipoCard tipoCardEle">
              <span className="tipoCardIndex idxEle">02</span>
              <h4>Mappa tridimensionale</h4>
              <p>
                A differenza del sistema meccanico, il miscelatore elettronico
                utilizza una mappa tridimensionale regime-gas-olio memorizzata
                nella ECU. Per ogni combinazione di RPM e apertura TPS
                corrisponde un preciso valore di portata olio, ottimizzato
                per garantire la lubrificazione corretta senza eccedere in
                consumo o produzione di fumo.
              </p>
            </div>

            <div className="tipoCard tipoCardEle">
              <span className="tipoCardIndex idxEle">03</span>
              <h4>Protezione e fallback</h4>
              <p>
                In caso di guasto del sensore di posizione, del motorino
                passo-passo o del sensore di livello olio, la ECU attiva una
                strategia di fallback che porta la pompa alla massima portata
                oppure genera un codice di errore e limita le prestazioni del
                motore. Questo evita che un guasto elettronico si traduca in
                un grippaggio immediato.
              </p>
            </div>

            <div className="tipoCard tipoCardEle">
              <span className="tipoCardIndex idxEle">04</span>
              <h4>Adattività e auto-correzione</h4>
              <p>
                I sistemi più avanzati possono modificare la mappa olio in
                funzione della temperatura motore, del tipo di olio rilevato
                dalla sua viscosità o di parametri ambientali come la quota.
                Alcuni sistemi diagnosticano anche l'usura della pompa nel
                tempo, segnalando quando la portata reale non corrisponde più
                a quella comandata.
              </p>
            </div>

          </motion.div>

          {/* ── VISUAL PLACEHOLDER 3 ── */}
          <motion.div className="tipoVisual" variants={fadeUpVariants}>
            {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
            <div className="mediaPlaceholder mediaPlaceholderWide">
              <div className="placeholderInner">
                <span className="placeholderIcon">⊕</span>
                <span className="placeholderText">Immagine / GIF — miscelatore elettronico e schema ECU</span>
                <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
              </div>
            </div>
            {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          </motion.div>

        </motion.div>

        {/* ── RAPPORTO DI MISCELA BLOCK ───────────────────────────────────── */}
        <motion.div
          className="rapportoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="rapportoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Dosaggio</span>
            <h3>Il rapporto benzina-olio nei 2T</h3>
            <p>
              Il rapporto di miscela esprime quanta benzina corrisponde a una
              parte di olio. Non è un valore fisso: cambia in base al tipo di
              motore, al regime e alla fase di utilizzo. Troppo olio significa
              fumo nero, depositi sulle candele e scarsa potenza. Troppo poco
              significa grippaggio.
            </p>
          </motion.div>

          <motion.div className="rapportoRanges" variants={cardVariants}>

            <div className="rapportoRow">
              <div className="rapportoInfo">
                <span className="rapportoLabel">Rodaggio motore nuovo</span>
                <span className="rapportoSub">Protezione massima, più olio per ridurre l'attrito sulle superfici nuove</span>
              </div>
              <div className="rapportoBar">
                <div className="rapportoFill rfill1" style={{ width: "90%" }}></div>
              </div>
              <span className="rapportoVal">1 : 20 – 1 : 25</span>
            </div>

            <div className="rapportoRow">
              <div className="rapportoInfo">
                <span className="rapportoLabel">Uso normale / Cross / Enduro</span>
                <span className="rapportoSub">Rapporto standard per uso agonistico e sportivo</span>
              </div>
              <div className="rapportoBar">
                <div className="rapportoFill rfill2" style={{ width: "65%" }}></div>
              </div>
              <span className="rapportoVal">1 : 32 – 1 : 40</span>
            </div>

            <div className="rapportoRow">
              <div className="rapportoInfo">
                <span className="rapportoLabel">Scooter / Uso stradale</span>
                <span className="rapportoSub">Regime moderato, olio a bassa usura</span>
              </div>
              <div className="rapportoBar">
                <div className="rapportoFill rfill3" style={{ width: "45%" }}></div>
              </div>
              <span className="rapportoVal">1 : 50</span>
            </div>

            <div className="rapportoRow">
              <div className="rapportoInfo">
                <span className="rapportoLabel">Moto da pista / Preparata</span>
                <span className="rapportoSub">Regime altissimo, olio specifico racing ad alta protezione</span>
              </div>
              <div className="rapportoBar">
                <div className="rapportoFill rfill4" style={{ width: "75%" }}></div>
              </div>
              <span className="rapportoVal">1 : 30 – 1 : 35</span>
            </div>

          </motion.div>
        </motion.div>

        {/* ── CONFRONTO BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="compareBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="compareHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Confronto diretto</span>
            <h3>Meccanico vs Elettronico — punto per punto</h3>
          </motion.div>

          <motion.div className="compareTable" variants={cardVariants}>
            <div className="compareCol compareColLeft">
              <span className="compareColLabel labelMec">Meccanico</span>
              <ul>
                <li>Azionamento diretto tramite cavo del gas</li>
                <li>Rapporto olio-gas fisso per ogni posizione</li>
                <li>Nessuna elettronica, nessun codice di errore</li>
                <li>Richiede spurgo manuale dopo sostituzione</li>
                <li>Sovra-lubrifica a bassi regimi</li>
                <li>Più economico e semplice da riparare</li>
                <li>Standard su moto anni '80-'00 e entry-level</li>
              </ul>
            </div>

            <div className="compareDivider">
              <span className="dividerLine"></span>
              <span className="dividerLabel">vs</span>
              <span className="dividerLine"></span>
            </div>

            <div className="compareCol compareColRight">
              <span className="compareColLabel labelEle">Elettronico</span>
              <ul>
                <li>Motorino passo-passo comandato dalla ECU</li>
                <li>Mappa 3D regime × TPS × portata olio</li>
                <li>Diagnostica integrata e strategie di fallback</li>
                <li>Auto-spurgo gestito dalla centralina</li>
                <li>Dosaggio ottimale in ogni punto di lavoro</li>
                <li>Costo superiore, diagnostica OBD necessaria</li>
                <li>Standard su moto moderne con iniezione</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CARDS GRID ──────────────────────────────────────────────────── */}
        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Olio 2T</span>
            <h3>Scegliere l'olio giusto</h3>
            <p>
              Non tutti gli oli 2T sono uguali. Gli oli sintetici offrono
              migliore protezione ad alti regimi, meno depositi sulla candela
              e meno fumo allo scarico. Gli oli minerali costano meno ma sono
              indicati solo per motori poco impegnati. L'indice JASO FD è il
              riferimento per motori ad alte prestazioni con miscelatore
              elettronico.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Diagnosi</span>
            <h3>Segnali di dosaggio errato</h3>
            <p>
              Fumo blu o bianco eccessivo allo scarico indica sovra-lubrificazione
              o olio di bassa qualità. Un motore che scalda molto, ha la candela
              pulitissima o grippaggi ripetuti segnala sotto-lubrificazione.
              In entrambi i casi il primo controllo è il miscelatore: portata
              reale, livello olio e integrità del circuito.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Emergenza</span>
            <h3>Miscela in serbatoio come backup</h3>
            <p>
              Se il miscelatore è guasto — meccanico o elettronico — la soluzione
              di emergenza è disattivarlo e aggiungere olio direttamente in
              serbatoio nella proporzione corretta (miscela a mano). Questa
              pratica è comune nel fuoristrada competitivo come misura di
              sicurezza in caso di guasto lontano dall'assistenza.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Miscelatore;
