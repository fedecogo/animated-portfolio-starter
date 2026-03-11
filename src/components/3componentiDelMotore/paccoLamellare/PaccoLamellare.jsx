import "./paccoLamellare.scss";
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

const PaccoLamellare = () => {
  return (
    <section className="paccoLamellare" id="pacco-lamellare">
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
              Distribuzione della carica
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il pacco lamellare nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il pacco lamellare — detto anche valvola a lamelle o reed valve —
              è uno dei componenti più critici nel motore a 2 tempi. Si trova
              posizionato tra il carburatore (o il corpo farfallato) e il carter,
              e il suo compito è apparentemente semplice: lasciare entrare la
              miscela aria-carburante e impedirle di tornare indietro. In realtà,
              il modo in cui lo fa determina in modo decisivo la coppia ai bassi
              regimi, la potenza ai medi e la risposta ai transitori.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              A differenza della valvola rotante — comandata meccanicamente
              dall'albero motore — il pacco lamellare è una valvola passiva:
              si apre e si chiude autonomamente in risposta alle variazioni di
              pressione nel carter, senza alcun collegamento meccanico al motore.
              Questa semplicità costruttiva nasconde una fisica molto precisa.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Composizione del gruppo</span>
              <h3>Cosa forma il pacco lamellare</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Corpo valvola — telaio rigido in alluminio o fibra</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniStep">Lamelle — petali flessibili in fibra di carbonio o acciaio</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Fermi — limitatori di corsa delle lamelle</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Sede — superficie di tenuta su cui le lamelle appoggiano</span>
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
              <span className="placeholderText">Immagine / GIF — pacco lamellare esploso</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Vista esplosa</span>
            <p>
              Il pacco lamellare montato nel condotto di aspirazione: le lamelle
              appoggiano sulla sede del corpo valvola e vengono trattenute dai
              fermi che ne limitano la deflessione massima, proteggendole da
              rotture per sovra-flessione.
            </p>
          </div>
        </motion.div>

        {/* ── FUNZIONAMENTO BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="diagramBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="flowDiagram" variants={cardVariants}>
            <div className="diagramTrack"></div>

            <div className="diagramNode">
              <span className="nodeNumber">01</span>
              <h3>Pistone sale — depressione</h3>
              <p>
                Quando il pistone sale verso il PMI, il volume del carter
                aumenta e si crea una depressione. Questa differenza di
                pressione flette le lamelle verso l'interno, aprendo il
                passaggio: la miscela viene aspirata dal carburatore verso
                il carter.
              </p>
            </div>

            <div className="diagramNode">
              <span className="nodeNumber">02</span>
              <h3>Lamelle aperte</h3>
              <p>
                Le lamelle si deformano elasticamente fino a toccare i fermi
                limitatori. L'ampiezza di apertura dipende dalla differenza
                di pressione, dalla rigidità delle lamelle e dalla geometria
                del corpo valvola. Lamelle più morbide aprono prima ma
                oscillano di più.
              </p>
            </div>

            <div className="diagramNode">
              <span className="nodeNumber">03</span>
              <h3>Pistone scende — sovrapressione</h3>
              <p>
                Quando il pistone scende verso il PME, il carter va in
                sovrapressione. Le lamelle vengono premute contro la sede
                e si chiudono, impedendo il reflusso della miscela verso
                il carburatore. La tenuta dipende dalla planità della sede
                e dall'integrità delle lamelle.
              </p>
            </div>

            <div className="diagramNode">
              <span className="nodeNumber">04</span>
              <h3>Carica trasferita</h3>
              <p>
                Con le lamelle chiuse, la miscela compressa nel carter viene
                spinta attraverso i condotti di travaso verso il cilindro
                nella fase di trasferimento, pronta per la combustione nel
                ciclo successivo.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── MATERIALI BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="materialiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="materialiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Materiali</span>
            <h3>Lamelle: acciaio vs fibra di carbonio</h3>
            <p>
              Il materiale delle lamelle è la scelta più importante nella
              selezione del pacco lamellare. Cambia la rigidità, la risposta
              ai transitori, la durata e il comportamento ai diversi regimi.
              Non esiste un materiale universalmente superiore: dipende
              dall'utilizzo e dal tipo di motore.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>

            <div className="matCard matAcciaio">
              <div className="matCardHeader">
                <span className="matBadge badgeAcciaio">Acciaio</span>
                <h4>Lamelle in acciaio armonico</h4>
              </div>
              <p>
                Le lamelle in acciaio armonico sono il materiale tradizionale.
                Offrono grande resistenza alla fatica e una risposta lineare
                alla pressione. Sono leggermente più pesanti e meno reattive
                delle lamelle in carbonio ai bassi regimi, ma estremamente
                durevoli e resistenti alle temperature elevate. Ideali per
                scooter, moto stradali e utilizzi con olio di qualità
                inferiore.
              </p>
              <ul className="matList">
                <li><span className="matDot dotGreen"></span>Alta resistenza alla fatica</li>
                <li><span className="matDot dotGreen"></span>Economiche e facili da reperire</li>
                <li><span className="matDot dotGreen"></span>Tolleranti a olio di bassa qualità</li>
                <li><span className="matDot dotYellow"></span>Risposta più lenta ai bassi regimi</li>
                <li><span className="matDot dotYellow"></span>Maggior inerzia alla chiusura</li>
              </ul>
            </div>

            <div className="matCard matCarbonio">
              <div className="matCardHeader">
                <span className="matBadge badgeCarbonio">Carbonio</span>
                <h4>Lamelle in fibra di carbonio</h4>
              </div>
              <p>
                Le lamelle in fibra di carbonio sono lo standard nelle
                applicazioni sportive e racing. Pesano meno, rispondono
                prima alle variazioni di pressione e consentono frequenze
                di apertura-chiusura molto elevate senza andare in risonanza.
                Il risultato è una migliore alimentazione ai bassi e medi
                regimi, una risposta più immediata all'apertura del gas e
                una riduzione del reflusso ad alti regimi.
              </p>
              <ul className="matList">
                <li><span className="matDot dotGreen"></span>Leggerissime, alta frequenza di lavoro</li>
                <li><span className="matDot dotGreen"></span>Migliore risposta ai transitori</li>
                <li><span className="matDot dotGreen"></span>Meno reflusso ad alti regimi</li>
                <li><span className="matDot dotYellow"></span>Più sensibili a olio inadeguato</li>
                <li><span className="matDot dotYellow"></span>Possono scheggiarsi se colpite da detriti</li>
              </ul>
            </div>

          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER 2 ────────────────────────────────────────── */}
        <motion.div
          className="visualBlock visualBlockAlt"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="visualCaption">
            <span className="captionTag">Confronto materiali</span>
            <p>
              A sinistra lamelle in acciaio armonico, a destra in fibra di
              carbonio: la differenza di spessore e superficie spiega la
              diversa risposta elastica e la differente frequenza di
              risonanza tra i due materiali.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — confronto lamelle acciaio vs carbonio</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── GEOMETRIA & RIGIDITÀ BLOCK ──────────────────────────────────── */}
        <motion.div
          className="geometriaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="geometriaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Geometria e setup</span>
            <h3>Come la geometria influenza le prestazioni</h3>
            <p>
              Non conta solo il materiale. La forma del corpo valvola, il numero
              di petali, l'angolo di inclinazione e la lunghezza dei fermi
              determinano in quale fascia di regime il pacco lamellare lavora
              meglio. Ogni modifica sposta il punto ottimale di funzionamento.
            </p>
          </motion.div>

          <motion.div className="geometriaGrid" variants={cardVariants}>

            <div className="geoCard">
              <span className="geoIndex">01</span>
              <h4>Angolo del corpo valvola</h4>
              <p>
                Un angolo più ampio aumenta la superficie di passaggio della
                miscela, favorendo la portata ad alti regimi. Un angolo più
                chiuso aumenta la velocità del flusso nel condotto, migliorando
                la risposta ai bassi regimi. La maggior parte dei corpi valvola
                da competizione usa geometrie a V o a doppia V per combinare
                entrambi i vantaggi.
              </p>
            </div>

            <div className="geoCard">
              <span className="geoIndex">02</span>
              <h4>Numero e dimensione dei petali</h4>
              <p>
                Più petali significano maggiore superficie totale di apertura,
                ma ogni petalo è più piccolo e quindi più rigido a parità di
                spessore. I pacchi lamellari con molti petali stretti tendono
                a lavorare meglio agli alti regimi; quelli con pochi petali
                ampi sono più reattivi ai bassi. La scelta dipende dal profilo
                di utilizzo del motore.
              </p>
            </div>

            <div className="geoCard">
              <span className="geoIndex">03</span>
              <h4>Altezza dei fermi limitatori</h4>
              <p>
                I fermi limitano la deflessione massima delle lamelle. Un fermo
                più alto permette maggiore apertura, aumentando la portata ma
                rallentando la chiusura. Un fermo basso chiude le lamelle più
                rapidamente, riducendo il reflusso ma limitando la portata
                massima. In competizione si usano fermi aftermarket tarati
                per il tipo di utilizzo.
              </p>
            </div>

            <div className="geoCard">
              <span className="geoIndex">04</span>
              <h4>Spessore delle lamelle</h4>
              <p>
                Lo spessore determina la rigidità flessionale delle lamelle.
                Lamelle più sottili (0,3 – 0,4 mm) aprono a pressioni
                differenziali minori, favorendo la risposta ai bassi regimi.
                Lamelle più spesse (0,6 – 0,8 mm) reggono meglio alle alte
                frequenze di apertura-chiusura ma richiedono una maggiore
                depressione per aprirsi, penalizzando leggermente la risposta
                a gas parziale.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── USURA & DIAGNOSI BLOCK ──────────────────────────────────────── */}
        <motion.div
          className="usuraBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="usuraHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e usura</span>
            <h3>Riconoscere un pacco lamellare da sostituire</h3>
            <p>
              Il pacco lamellare si degrada silenziosamente. A differenza di
              un componente che si rompe di colpo, le lamelle perdono
              progressivamente elasticità, si deformano o sviluppano micro-fessure
              che compromettono la tenuta. Il motore continua a girare, ma con
              prestazioni sempre più scarse.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Avviamento difficile a freddo</h4>
              <p>
                Se le lamelle non tengono la tenuta, la depressione creata
                durante l'avviamento viene in parte dissipata dal reflusso.
                Il motore fatica a aspirare la miscela e richiede molti più
                calci o avviamenti rispetto al normale.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Perdita di potenza ai bassi regimi</h4>
              <p>
                Le lamelle deformate non chiudono più perfettamente sulla
                sede. Una parte della miscela refluisce verso il carburatore
                invece di restare nel carter, riducendo la carica disponibile
                per il trasferimento e abbassando la coppia a basso regime.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Risposta irregolare all'apertura del gas</h4>
              <p>
                Un pacco lamellare usurato introduce variazioni nel flusso
                di miscela che si traducono in risposta nervosa, balbettii
                o esitazioni all'apertura gas, specialmente nelle fasi di
                transizione dal minimo ai medi regimi.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Controllo visivo delle lamelle</h4>
              <p>
                La diagnosi definitiva si fa smontando il pacco lamellare e
                controllandolo su una superficie piana. Le lamelle non devono
                presentare deformazioni visibili, micro-fessure ai bordi,
                scheggiature o segni di impatto con i fermi. Anche una minima
                curvatura permanente è sufficiente per sostituirle.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Controllo della sede</h4>
              <p>
                Una sede rigata o non planare impedisce la tenuta anche con
                lamelle nuove. Dopo la sostituzione delle lamelle va sempre
                verificata la planità della sede con un piano di riscontro.
                Se la sede è danneggiata, va sostituito l'intero corpo valvola.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Frequenza di sostituzione</h4>
              <p>
                In ambito agonistico le lamelle si sostituiscono ogni 10 – 15
                ore di utilizzo intenso come misura preventiva. In ambito
                stradale e amatoriale la sostituzione è consigliata ogni 2 – 3
                stagioni o alla comparsa dei sintomi, a prescindere
                dall'aspetto esteriore delle lamelle.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER 3 ────────────────────────────────────────── */}
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
              <span className="placeholderText">Immagine / GIF — lamelle usurate vs nuove</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Usura</span>
            <p>
              Confronto tra lamelle nuove (planari, bordi integri) e lamelle
              usurate (deformate, micro-fessure ai bordi, decolorazione da
              calore). La differenza visiva è spesso sottile, ma l'effetto
              sulle prestazioni è immediato.
            </p>
          </div>
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
            <span className="cardTag">Upgrade</span>
            <h3>Pacco lamellare aftermarket</h3>
            <p>
              I pacchi lamellari aftermarket — Boyesen, Moto Tassinari, VForce —
              offrono corpi valvola con geometrie ottimizzate e lamelle in
              carbonio di alta qualità. Su motori preparati possono portare
              guadagni percepibili in coppia ai medi regimi e migliorare
              sensibilmente la risposta ai transitori senza modifiche al
              motore.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Posizionamento</span>
            <h3>Reed valve vs valvola rotante</h3>
            <p>
              Il pacco lamellare è passivo e risponde alla pressione; la
              valvola rotante è comandata meccanicamente dall'albero motore.
              La reed valve offre un'erogazione più lineare e una migliore
              risposta ai bassi, la rotante permette una gestione più
              precisa dei tempi di aspirazione e tende a dare più potenza
              agli alti regimi su motori da competizione.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Manutenzione</span>
            <h3>Spurgo aria dopo sostituzione</h3>
            <p>
              Dopo la sostituzione del pacco lamellare è buona pratica
              eseguire alcuni minuti di riscaldamento a regime moderato
              prima di un utilizzo intenso. Le lamelle nuove si assestano
              sulla sede durante i primi cicli di lavoro e raggiungono la
              loro tenuta ottimale dopo un breve periodo di rodaggio.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default PaccoLamellare;
