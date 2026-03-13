import "./monoammortizzatore.scss";
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
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const Monoammortizzatore = () => {
  return (
    <section className="monoammortizzatore" id="monoammortizzatore">
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
              Sospensioni — Posteriore
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il monoammortizzatore nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il monoammortizzatore è il componente che controlla il movimento
              della ruota posteriore rispetto al telaio — assorbe l'energia
              degli impatti, la dissipa attraverso l'olio e restituisce
              la ruota al terreno nel tempo corretto. Nel motore a 2 tempi,
              dove l'erogazione è impulsiva e il terreno spesso irregolare,
              un ammortizzatore ben settato è la differenza tra trazione
              efficace e ruota che rimbalza perdendo contatto col suolo.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              A differenza della forcella — che è due unità separate —
              il monoammortizzatore è un sistema singolo che lavora in coppia
              con il leveraggio posteriore (linkage). La geometria del linkage
              determina il rapporto di trasmissione del movimento: non è detto
              che 30 mm di movimento del mozzo corrispondano a 30 mm di
              corsa del monoammortizzatore. Questo rapporto variabile
              permette di ottenere una risposta progressiva — più morbida
              all'inizio della corsa, più dura vicino al fine corsa.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del monoammortizzatore</span>
              <h3>I componenti principali</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Corpo — il cilindro esterno che contiene olio e pistone; in alluminio anodizzato con superfici interne rettificate al micrometro</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Stelo — il gambo cromato che scorre nel corpo; la sua finitura superficiale determina la tenuta dei paraolio e la vita degli steli</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Molla elicoidale — determina la resistenza al carico statico e il SAG; il tasso (N/mm) si sceglie in base al peso del pilota</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Camera azoto — gas ad alta pressione (10–14 bar) che separa l'olio dall'aria tramite un pistone flottante, prevenendo la cavitazione</span>
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
              <span className="placeholderText">Immagine / GIF — monoammortizzatore esploso con parti nominate</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Struttura</span>
            <p>
              Vista esplosa del monoammortizzatore: il corpo esterno con le
              sedi dei cuscinetti, lo stelo cromato con il pistone e lo shim
              stack di valvole, la molla con i registri di precarico,
              e la camera del gas separata dal pistone flottante.
              Ogni componente ha tolleranze di lavorazione nell'ordine
              dei centesimi di millimetro.
            </p>
          </div>
        </motion.div>

        {/* ── COSTRUZIONE BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="costruzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="costruzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Costruzione</span>
            <h3>Corpo, stelo, valvole e camera del gas — come è fatto davvero</h3>
            <p>
              La qualità di un monoammortizzatore si misura nella precisione
              delle superfici interne, nella geometria dello shim stack di
              valvole e nella tenuta nel tempo dei paraolio. Un ammortizzatore
              di serie ben revisionato supera spesso in prestazioni uno
              aftermarket economico — perché il fattore critico non è
              la marca, ma la corretta manutenzione e il setup adeguato
              al peso e allo stile di guida del pilota.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">01</span>
              <h4>Corpo e stelo — materiali e finiture superficiali</h4>
              <p>
                Il corpo è in alluminio 6061-T6 o 7075-T6 con la superficie
                interna rettificata con rugosità Ra &lt; 0,2 µm — una finitura
                quasi speculare necessaria per garantire la tenuta del
                paraolio e minimizzare l'attrito del pistone. Lo stelo è in
                acciaio inossidabile con cromatura dura da 20–30 µm o,
                nei modelli racing, con rivestimento DLC (Diamond-Like Carbon)
                che offre attrito ancora inferiore e resistenza all'abrasione
                del fango.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">02</span>
              <h4>Shim stack — il cuore del controllo idraulico</h4>
              <p>
                Lo shim stack è una serie di lamelle circolari in acciaio
                armonico impilate sul pistone. La loro deformazione controllata
                regola il flusso di olio attraverso i canali del pistone
                a seconda della velocità di spostamento. Lamelle più spesse
                o più numerose aumentano l'idraulica; lamelle più sottili
                la riducono. La configurazione dello shim stack non è
                regolabile dall'esterno — richiede smontaggio completo
                dell'ammortizzatore.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">03</span>
              <h4>Molla elicoidale — tasso, precarico e progressività</h4>
              <p>
                Il tasso della molla (N/mm o kg/mm) determina quanta forza
                serve per comprimere di un millimetro. Per un pilota da 70 kg
                in fuoristrada il tasso tipico è 50–60 N/mm; sopra i 90 kg
                si sale a 65–75 N/mm. Il precarico non modifica il tasso —
                sposta solo il punto di partenza della molla. Modificare il
                precarico senza cambiare il tasso non cambia la durezza in
                compressione; cambia solo l'altezza di guida e il SAG.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">04</span>
              <h4>Camera azoto — prevenire la cavitazione</h4>
              <p>
                L'azoto ad alta pressione (10–14 bar) nella camera separata
                mantiene l'olio sotto pressione costante. Senza questa
                pressione, l'olio si scalda durante l'uso intenso e tende
                a vaporizzare nei punti di bassa pressione creati dal pistone
                in movimento — il fenomeno si chiama cavitazione e causa
                un calo improvviso dell'idraulica. La pressione del gas
                si controlla con un manometro specifico ad ogni revisione
                e va ripristinata tra 10 e 14 bar a seconda del modello.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── REGOLAZIONI BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="regolazioniBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="regolazioniHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Regolazioni esterne</span>
            <h3>SAG, precarico, compressione ed estensione — il setup dal registro</h3>
            <p>
              Le regolazioni esterne del monoammortizzatore agiscono
              sull'idraulica (compressione ed estensione) e sul precarico
              della molla. Sono i parametri che si modificano senza smontare
              l'ammortizzatore. Il punto di partenza corretto è sempre
              il SAG — se il SAG è sbagliato, qualsiasi altro registro
              non risolverà il problema di fondo.
            </p>
          </motion.div>

          <motion.div className="regolazioniContent" variants={cardVariants}>

            <div className="regLeft">
              <div className="regItem">
                <span className="regLabel">SAG statico — punto di partenza del setup</span>
                <div className="regBar">
                  <div className="regFill" style={{ width: "65%" }} />
                </div>
                <span className="regValue">25–35 mm (MX) / 30–40 mm (enduro)</span>
                <p>
                  Il SAG è l'affondamento dell'ammortizzatore sotto il solo
                  peso della moto, senza pilota (SAG libero) e con il pilota
                  in posizione di guida (SAG pilota). La differenza tra i due
                  indica la precarica molla corretta: un SAG pilota di 30 mm
                  significa che l'ammortizzatore è affondato di 30 mm rispetto
                  alla posizione a moto sollevata. Se il SAG è troppo alto
                  (ammortizzatore troppo morbido) aumentare il precarico;
                  se è troppo basso cambiare la molla con una di tasso
                  superiore — non aumentare il precarico oltre il limite.
                </p>
              </div>

              <div className="regItem">
                <span className="regLabel">Precarico molla — range tipico di regolazione</span>
                <div className="regBar">
                  <div className="regFill regFillGreen" style={{ width: "40%" }} />
                </div>
                <span className="regValue regValueGreen">3–8 mm rispetto alla posizione standard</span>
                <p>
                  Il precarico si misura comprimendo la molla dal suo
                  stato libero. Si regola con collare filettato o con
                  gli anelli di fermo. Il range utile di regolazione
                  è tipicamente ±5 mm dalla posizione standard.
                  Oltre questo range la molla lavora fuori dalla sua
                  zona lineare e il setup diventa imprevedibile.
                </p>
              </div>
            </div>

            <div className="regRight">
              <div className="regCard">
                <span className="regCardTag">Compressione</span>
                <h4>Registro di compressione — lenta e veloce</h4>
                <p>
                  La compressione lenta (LSC — Low Speed Compression) controlla
                  la risposta agli spostamenti lenti del corpo moto: trasferimento
                  di peso in frenata, variazioni di carreggiata, assetto
                  generale. La compressione veloce (HSC — High Speed Compression)
                  controlla la risposta agli impatti bruschi: radici, pietre,
                  salti. Sui monoammortizzatori di serie spesso è presente un
                  solo registro che agisce su entrambe; sui modelli racing
                  i due circuiti sono separati. Partire dalla posizione base
                  del costruttore e aggiungere 2 click di lenta per ridurre
                  il rollio in frenata.
                </p>
              </div>

              <div className="regCard">
                <span className="regCardTag">Estensione</span>
                <h4>Registro di estensione (rebound) — il parametro più critico</h4>
                <p>
                  L'estensione controlla la velocità con cui lo stelo
                  torna in posizione dopo la compressione. Troppa estensione
                  (rebound veloce): la ruota rimbalza e perde contatto
                  col terreno — la moto salta. Poca estensione (rebound
                  lento): l'ammortizzatore si accumula — si comprime
                  colpo dopo colpo senza recuperare la posizione, fino
                  a fine corsa meccanico. Il rebound corretto si identifica
                  comprimendo a mano il posteriore e rilasciando: deve
                  tornare fluidamente in posizione in circa 0,3–0,5 secondi
                  senza oscillazioni e senza rimbalzare.
                </p>
              </div>
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
            <span className="captionTag">Misura del SAG</span>
            <p>
              La misura del SAG si esegue con metro o calibro su un punto
              di riferimento fisso — tipicamente il centro dell'asse posteriore
              rispetto a un punto sul telaio. La procedura richiede la moto
              su cavalletto (SAG libero) e poi con il pilota in posizione
              di guida con tutto l'equipaggiamento (SAG pilota).
              La differenza tra i due valori è la precarica effettiva
              della molla sul peso del pilota.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — misurazione SAG posteriore con metro e pilota in posizione</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── CICLO IDRAULICO BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="idraulicoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="idraulicoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Ciclo idraulico</span>
            <h3>Come l'olio lavora — quattro fasi del controllo dell'ammortizzatore</h3>
            <p>
              Il controllo idraulico dell'ammortizzatore avviene attraverso
              quattro regimi distinti di flusso dell'olio, ognuno dei quali
              controlla un aspetto diverso del comportamento. Comprendere
              questa distinzione è fondamentale per diagnosticare
              correttamente un problema di setup: un ammortizzatore
              che rimbalza e uno che accumula non hanno la stessa causa.
            </p>
          </motion.div>

          <motion.div className="idraulicoGrid" variants={cardVariants}>

            <div className="idraulicoCard idraulicoLSC">
              <div className="idraulicoCardTop">
                <span className="idraulicoBadge badgeLSC">Compressione lenta</span>
                <span className="idraulicoAngolo">LSC — Low Speed Compression</span>
              </div>
              <h4>Trasferimento di peso e rollio</h4>
              <p>
                Controlla gli spostamenti lenti del corpo moto: il rollio
                in frenata, la variazione di assetto in curva, il movimento
                sotto il peso del pilota durante la guida. Troppa LSC
                rende la moto nervosa e trasmette ogni irregolarità
                del terreno al telaio; poca LSC provoca un'eccessiva
                escursione dell'ammortizzatore in accelerazione e frenata
                con perdita di precisione dello sterzo posteriore.
              </p>
            </div>

            <div className="idraulicoCard idraulicoHSC">
              <div className="idraulicoCardTop">
                <span className="idraulicoBadge badgeHSC">Compressione veloce</span>
                <span className="idraulicoAngolo">HSC — High Speed Compression</span>
              </div>
              <h4>Impatti e salti</h4>
              <p>
                Controlla la risposta agli impatti bruschi: atterraggi
                da salti, radici trasversali, rocce. Troppa HSC provoca
                rimbalzo e perdita di contatto col terreno dopo ogni
                impatto — la ruota non segue il profilo del suolo.
                Poca HSC porta a fine corsa meccanico sugli impatti
                più violenti, con trasmissione dell'urto diretto
                al telaio e al pilota.
              </p>
            </div>

            <div className="idraulicoCard idraulicoLSR">
              <div className="idraulicoCardTop">
                <span className="idraulicoBadge badgeLSR">Estensione lenta</span>
                <span className="idraulicoAngolo">LSR — Low Speed Rebound</span>
              </div>
              <h4>Recupero posizione e trazione in uscita curva</h4>
              <p>
                Controlla la velocità con cui l'ammortizzatore recupera
                la posizione dopo una compressione lenta. Influenza
                direttamente la trazione in uscita di curva e la stabilità
                in accelerazione. Un rebound lento eccessivo fa accumulare
                l'ammortizzatore in una serie di dossi ravvicinati;
                un rebound veloce eccessivo fa rimbalzare la moto
                e riduce il tempo di contatto col terreno.
              </p>
            </div>

            <div className="idraulicoCard idraulicoHSR">
              <div className="idraulicoCardTop">
                <span className="idraulicoBadge badgeHSR">Estensione veloce</span>
                <span className="idraulicoAngolo">HSR — High Speed Rebound</span>
              </div>
              <h4>Recupero dopo impatti violenti</h4>
              <p>
                Controlla il recupero dopo impatti ad alta velocità —
                atterraggi, step-down. Un HSR troppo veloce dopo un
                grande salto può proiettare il posteriore verso l'alto
                destabilizzando la moto nell'atterraggio. Un HSR
                troppo lento accumula l'ammortizzatore dopo ogni salto,
                riducendo la corsa disponibile per gli impatti successivi.
                Sui modelli racing HSR e LSR sono separati; su quelli
                di serie un unico registro controlla entrambi.
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
              <span className="placeholderText">Immagine / GIF — schema flusso olio nelle fasi di compressione ed estensione con shim stack</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Flusso olio</span>
            <p>
              Schema del flusso di olio durante la compressione: il pistone
              scende, l'olio viene forzato attraverso i canali e deflette
              le lamelle dello shim stack. La resistenza al flusso genera
              la forza ammortizzante. Lamelle più spesse = più resistenza =
              più idraulica. Il flusso si inverte durante l'estensione
              attraverso un circuito di valvole separato.
            </p>
          </div>
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
            <h3>Riconoscere un ammortizzatore che sta cedendo — sintomi e misure</h3>
            <p>
              Il monoammortizzatore degrada in modo progressivo — raramente
              si rompe di colpo. I segnali compaiono settimane prima del
              cedimento completo e si possono rilevare con attenzione durante
              la guida e con controlli rapidi a moto ferma. Riconoscerli
              presto significa intervenire con la revisione invece di trovarsi
              a cambiare il gruppo completo per usura irreversibile dei
              componenti interni.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Perdita di olio dal paraolio — stelo contaminato</h4>
              <p>
                Tracce di olio sullo stelo visibile tra il corpo e la molla
                indicano che il paraolio dello stelo ha perso tenuta.
                Un paraolio che perde introduce aria nell'olio (cavitazione)
                e riduce progressivamente l'idraulica. Il sintomo di guida
                è un posteriore sempre meno controllato, con rimbalzo
                crescente. La riparazione richiede la sostituzione del
                paraolio e dell'olio — operazione fattibile anche a casa
                con gli attrezzi corretti.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Idraulica inconsistente — olio degradato o contaminato</h4>
              <p>
                Se l'ammortizzatore risponde in modo diverso a freddo
                e a caldo — più rigido all'inizio della sessione,
                sempre più morbido man mano che si scalda — l'olio è
                degradato. L'olio di un ammortizzatore assorbe calore
                in ogni ciclo di compressione; dopo 30–50 ore di uso
                intenso le sue proprietà reologiche cambiano e la viscosità
                a caldo si abbassa. La soluzione è la sostituzione
                dell'olio con il grado corretto per il modello.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Cavitazione — rumore sordo in compressione</h4>
              <p>
                Un rumore sordo o un "gorgoglio" percepibile durante
                la compressione indica cavitazione — formazione di bolle
                di vapore nell'olio per perdita di pressione del gas.
                La cavitazione degrada rapidamente le superfici interne
                del corpo e del pistone. La causa principale è la perdita
                di pressione nella camera del gas: verificare con manometro
                e ripristinare tra 10 e 14 bar secondo le specifiche
                del costruttore.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Verifica del SAG — il controllo base da fare sempre</h4>
              <p>
                Misurare il SAG libero (moto su cavalletto, asse posteriore
                a pieno allungamento) e il SAG pilota (pilota in posizione
                di guida con equipaggiamento completo). La differenza
                tra i due valori deve rientrare nel range target del modello
                (25–35 mm MX, 30–40 mm enduro). Un SAG fuori range dopo
                aver verificato che il precarico è corretto indica una molla
                a tasso sbagliato per il peso del pilota.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Test del rebound — il controllo con le mani</h4>
              <p>
                Con la moto su cavalletto, comprimere il posteriore a mano
                di circa 1/3 della corsa disponibile e rilasciare bruscamente.
                Il posteriore deve tornare in posizione in modo fluido in
                circa 0,3–0,5 secondi senza oscillazioni. Se rimbalza,
                il rebound è troppo veloce (chiudere il registro di 2–3 click);
                se non torna alla posizione iniziale o ci mette più di
                1 secondo, il rebound è troppo lento o l'olio è degradato.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Revisione programmata — olio, paraolio e pressione gas</h4>
              <p>
                In uso fuoristrada intenso: sostituzione olio ogni 30–40 ore,
                controllo pressione gas ogni 15–20 ore, sostituzione paraolio
                ogni 60–80 ore o al primo segno di perdita. In uso amatoriale:
                revisione completa una volta all'anno indipendentemente dalle
                ore. I kit di revisione (paraolio, O-ring, olio) sono
                disponibili per tutti i modelli principali e costano molto
                meno di un ammortizzatore nuovo.
              </p>
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
            <span className="cardTag">Linkage</span>
            <h3>Il leveraggio posteriore — rapporto progressivo e geometria</h3>
            <p>
              Il linkage posteriore moltiplica o riduce il movimento dell'asse
              rispetto alla corsa del monoammortizzatore. Il rapporto di
              trasmissione varia durante la corsa (rising rate): nella prima
              parte è più morbido, nell'ultima è più duro. Questo permette
              di avere un ammortizzatore che assorbe le piccole irregolarità
              con facilità e resist ai grandi impatti. Modificare il linkage
              (kit di leveraggi alternativi) è il modo più efficace per
              cambiare il carattere del posteriore senza toccare l'ammortizzatore.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Setup progressivo</span>
            <h3>Come approcciare il setup — un registro alla volta</h3>
            <p>
              La regola fondamentale del setup è modificare un parametro
              alla volta e percorrere sempre lo stesso tratto di test.
              Partire dal SAG (precarico molla), poi il rebound, poi
              la compressione lenta, infine quella veloce. Cambiare più
              parametri insieme rende impossibile capire quale ha prodotto
              il miglioramento. Annotare sempre il numero di click di
              partenza per poter tornare al baseline se il setup peggiora.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>WP, KYB, Öhlins — quando vale la pena sostituire</h3>
            <p>
              I principali aftermarket (Öhlins TTX, WP Xact, KYB PSF2)
              offrono regolazioni separate di LSC/HSC e LSR/HSR impossibili
              sulle unità di serie. L'upgrade ha senso quando si è già
              ottimizzato il setup dell'originale e si è ancora insoddisfatti,
              o quando l'originale è troppo usurato per valere la revisione.
              Prima di acquistare aftermarket, valutare una revisione
              professionale dell'originale con spring rate personalizzato:
              il costo è inferiore e il risultato spesso equivalente.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Monoammortizzatore;
