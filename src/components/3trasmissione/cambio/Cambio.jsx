import "./cambio.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const Cambio = () => {
  return (
    <section className="cambio" id="cambio">
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
              Trasmissione e cambio
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La scatola<br />del cambio
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il cambio è il sistema meccanico che permette al pilota
              di selezionare il rapporto di trasmissione tra motore e
              ruota posteriore. Nel motore a 2 tempi è un cambio
              a ingranaggi sempre in presa — tutti i rapporti sono
              costantemente in contatto, e il passaggio da uno
              all'altro avviene non inserendo ingranaggi ma agendo
              sui manicotti scorrevoli che li rendono solidali
              all'albero. È veloce, diretto e robusto — ma richiede
              precisione nella costruzione e nell'uso per funzionare
              correttamente nel tempo.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              In questa sezione esploriamo come è costruita la
              scatola cambio, come avviene meccanicamente il cambio
              marcia e come diagnosticare un cambio che non lavora
              bene. Gli alberi primario e secondario, il selettore
              e la fisica degli ingranaggi sono trattati in dettaglio
              nelle sezioni successive — qui costruiamo la visione
              d'insieme che li rende comprensibili.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Dentro la scatola cambio</span>
              <h3>I componenti principali</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Albero primario — riceve la coppia dalla frizione, porta gli ingranaggi conduttori</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Albero secondario — trasmette la coppia alla ruota, porta gli ingranaggi condotti</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniStep">
                  <span className="miniIndex">03</span>
                  <span className="miniText">Coppie di ingranaggi — una per ogni rapporto, sempre in presa tra i due alberi</span>
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Manicotti e cani di innesto — rendono l'ingranaggio solidale all'albero</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">05</span>
                <span className="miniText">Tamburo selettore + forcelle — comandano lo spostamento dei manicotti</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── SEMPRE IN PRESA BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="preseBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="preseHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Sempre in presa</span>
            <h3>Perché tutti gli ingranaggi girano sempre — e solo uno lavora</h3>
            <p>
              Il concetto chiave del cambio a ingranaggi sempre in presa
              è controintuitivo la prima volta che lo si incontra:
              tutti gli ingranaggi montati sugli alberi sono
              costantemente in contatto e ruotano continuamente,
              anche quelli delle marce non inserite. Ciò che cambia
              quando si cambia marcia non è quali ingranaggi
              si toccano — è quali ingranaggi sono bloccati
              sull'albero e quali girano liberi su di esso.
            </p>
          </motion.div>

          <motion.div className="preseGrid" variants={cardVariants}>

            <div className="preseCard">
              <div className="preseTop">
                <span className="preseBadge badgeFisso">Fisso</span>
                <span className="preseLabel">Ingranaggio solidale</span>
              </div>
              <h4>Bloccato sull'albero — trasmette coppia</h4>
              <p>
                Quando un ingranaggio è bloccato all'albero — tramite
                il manicotto scorrevole che ingrana i suoi cani
                di innesto — ruota solidalmente con lui.
                La coppia si trasmette dall'albero all'ingranaggio
                (o viceversa) senza scorrimento. Questo è l'ingranaggio
                "inserito" — il rapporto attivo. Gli ingranaggi fissi
                non si spostano sull'albero e sono calettati direttamente
                su di esso in modo permanente.
              </p>
            </div>

            <div className="preseCard">
              <div className="preseTop">
                <span className="preseBadge badgeLibero">Libero</span>
                <span className="preseLabel">Ingranaggio folle</span>
              </div>
              <h4>Gira sull'albero — non trasmette coppia</h4>
              <p>
                Gli ingranaggi delle marce non inserite girano
                liberamente sull'albero su cuscinetti a needle
                o bronzine. Sono in presa con il loro corrispondente
                sull'altro albero — trasmettono forza tra loro —
                ma non trasferiscono coppia all'albero su cui
                poggiano perché non sono bloccati ad esso.
                Ruotano "nel vuoto" dal punto di vista della
                trasmissione di potenza, mantenendo il vantaggio
                di essere già in presa e pronti all'innesto.
              </p>
            </div>

            <div className="preseCard">
              <div className="preseTop">
                <span className="preseBadge badgeTransizione">Transizione</span>
                <span className="preseLabel">Il momento del cambio</span>
              </div>
              <h4>Punto morto e innesto — la sequenza meccanica</h4>
              <p>
                Quando il pilota aziona il pedale, il tamburo selettore
                ruota di uno step. Le forcelle spostano il manicotto
                scorrevole: prima libera l'ingranaggio attivo
                (passaggio per il punto morto — marcia in folle),
                poi ingrana i cani del nuovo rapporto bloccandolo
                all'albero. Tutta la sequenza avviene in frazioni
                di secondo. La frizione aperta durante il cambio
                elimina il differenziale di velocità tra i cani
                di innesto, rendendo l'aggancio possibile senza
                impatto violento.
              </p>
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
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Schema / GIF — sezione cambio 2T con alberi, ingranaggi in presa e manicotti evidenziati per ogni marcia</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Sempre in presa</span>
            <p>
              Nella sezione frontale del cambio si vedono tutti gli
              ingranaggi simultaneamente in contatto sui due alberi.
              Solo una coppia trasmette potenza in ogni istante —
              quella il cui manicotto scorrevole è ingranato.
              Le frecce evidenziano il percorso della coppia
              dall'albero primario all'albero secondario attraverso
              il rapporto attivo.
            </p>
          </div>
        </motion.div>

        {/* ── RAPPORTI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="rapportiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="rapportiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">I rapporti di trasmissione</span>
            <h3>Da prima a sesta — come varia il rapporto e perché</h3>
            <p>
              Ogni marcia rappresenta un rapporto tra il numero di denti
              dell'ingranaggio sull'albero primario e quello
              sull'albero secondario. Prima marcia: rapporto alto,
              molta coppia, poca velocità. Sesta: rapporto basso,
              poca coppia moltiplicata, velocità massima.
              La progressione tra le marce è progettata dal costruttore
              per mantenere il motore nell'intervallo di regime
              ottimale — la banda di potenza — durante l'accelerazione.
              Nei motori da competizione questa progressione può essere
              modificata sostituendo le coppie di ingranaggi.
            </p>
          </motion.div>

          <motion.div className="rapportiRow" variants={cardVariants}>
            {[
              { marcia: "1ª", tipo: "Corta", colore: "rapporto1", rapporto: "Alta moltiplicazione", uso: "Partenza e uscita di curva lenta" },
              { marcia: "2ª", tipo: "Corta", colore: "rapporto2", rapporto: "Alta-media", uso: "Accelerazione uscita curva" },
              { marcia: "3ª", tipo: "Media", colore: "rapporto3", rapporto: "Media", uso: "Tratti misti, cambio frequente" },
              { marcia: "4ª", tipo: "Media", colore: "rapporto4", rapporto: "Media-lunga", uso: "Rettilinei intermedi" },
              { marcia: "5ª", tipo: "Lunga", colore: "rapporto5", rapporto: "Bassa moltiplicazione", uso: "Rettilinei veloci" },
              { marcia: "6ª", tipo: "Lunga", colore: "rapporto6", rapporto: "Minima moltiplicazione", uso: "Velocità di punta" },
            ].map((r) => (
              <div className={`rapportoCard ${r.colore}`} key={r.marcia}>
                <span className="rapportoNum">{r.marcia}</span>
                <span className="rapportoTipo">{r.tipo}</span>
                <span className="rapportoDesc">{r.rapporto}</span>
                <span className="rapportoUso">{r.uso}</span>
              </div>
            ))}
          </motion.div>

          <motion.p className="rapportiNote" variants={fadeUpVariants}>
            ↳ Gli alberi primario e secondario e la fisica dettagliata
            degli ingranaggi — numero di denti, modulo, efficienza di
            trasmissione — sono trattati nelle sezioni dedicate.
          </motion.p>
        </motion.div>

        {/* ── CAMBIO MARCIA BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="marciaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="marciaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">La sequenza del cambio</span>
            <h3>Dal pedale all'ingranaggio — cosa succede in 50 millisecondi</h3>
            <p>
              Il cambio marcia è una sequenza meccanica precisa
              che coinvolge cinque componenti in cascata: pedale,
              leverismo esterno, tamburo selettore, forcelle e
              manicotti. Ogni anello della catena deve funzionare
              correttamente — giochi, usura o regolazioni fuori
              tolleranza si sommano e producono cambi imprecisi,
              saltati o bloccati. Il selettore e le forcelle
              sono analizzati in dettaglio nella sezione dedicata.
            </p>
          </motion.div>

          <motion.div className="marciaSteps" variants={cardVariants}>

            <div className="marciaStep">
              <div className="stepNum">01</div>
              <div className="stepContent">
                <h4>Pedale e leverismo esterno</h4>
                <p>
                  Il pedale del cambio agisce su un leverismo esterno
                  al carter che converte il movimento angolare del
                  piede in una rotazione dell'albero selettore.
                  Il pawl di ritorno — una molla e un dente di
                  arresto — garantisce che il pedale torni in
                  posizione neutra dopo ogni cambio e che il tamburo
                  avanzi di esattamente uno step per ogni pressione,
                  senza possibilità di saltare due marce involontariamente.
                </p>
              </div>
            </div>

            <div className="marciaStep">
              <div className="stepNum">02</div>
              <div className="stepContent">
                <h4>Tamburo selettore — la memoria delle posizioni</h4>
                <p>
                  Il tamburo selettore è un cilindro con scanalature
                  sagomate sulla superficie esterna. Le forcelle
                  del cambio hanno perni che scorrono in queste
                  scanalature — quando il tamburo ruota, le
                  scanalature guidano le forcelle in posizioni
                  predefinite con precisione millimetrica.
                  Il tamburo è il componente che "sa" dove si trova
                  ogni forcella per ogni marcia — la sua geometria
                  definisce l'intera logica di cambio.
                  Approfondimento completo nella sezione Selettore.
                </p>
              </div>
            </div>

            <div className="marciaStep">
              <div className="stepNum">03</div>
              <div className="stepContent">
                <h4>Forcelle e manicotti scorrevoli</h4>
                <p>
                  Le forcelle traducono il movimento rotativo del
                  tamburo in uno spostamento assiale dei manicotti
                  scorrevoli sugli alberi. Il manicotto si sposta
                  di pochi millimetri — abbastanza per portare i
                  suoi cani di innesto in contatto con i cani
                  dell'ingranaggio da selezionare, bloccandolo
                  sull'albero. La geometria dei cani — angolo
                  di attacco, profilo del dente — determina
                  se l'innesto è fluido o brusco.
                </p>
              </div>
            </div>

            <div className="marciaStep">
              <div className="stepNum">04</div>
              <div className="stepContent">
                <h4>Il ruolo della frizione nel cambio</h4>
                <p>
                  Aprire la frizione durante il cambio elimina
                  la coppia sull'albero primario, azzerando
                  il carico sui cani di innesto nel momento
                  in cui il manicotto si sposta. Senza frizione
                  i cani dovrebbero agganciarsi sotto carico —
                  possibile ma con impatto violento che nel
                  tempo arrotonda i cani stessi, causa dei
                  cambi che "saltano" la marcia. Cambiare senza
                  frizione è possibile a regime costante
                  (cambio in accelerazione scalata) ma richiede
                  la sincronizzazione precisa del momento di
                  carico zero sull'albero.
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
            <span className="captionTag">Tamburo e forcelle</span>
            <p>
              Il tamburo selettore con le sue scanalature sagomate
              è uno dei pezzi meccanicamente più eleganti del
              motore a 2 tempi. Le forcelle scorrono nelle cave
              come binari — ogni posizione angolare del tamburo
              corrisponde a una sola configurazione possibile
              delle forcelle, rendendo impossibile l'innesto
              simultaneo di due marce. Analisi dettagliata
              nella sezione Selettore.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — tamburo selettore con forcelle e scanalature, dettaglio cani di innesto</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="diagnBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi</span>
            <h3>Quando il cambio non funziona — leggere i sintomi prima di aprire il carter</h3>
            <p>
              La maggior parte dei problemi al cambio produce sintomi
              specifici e riconoscibili. Una diagnosi corretta prima
              dello smontaggio permette di sapere cosa cercare
              e cosa sostituire, evitando di riassemblare il motore
              senza aver risolto il problema reale.
            </p>
          </motion.div>

          <motion.div className="diagnGrid" variants={cardVariants}>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Marcia che salta — il cambio esce da solo</h4>
              <p>
                La marcia inserita si disinserisce spontaneamente
                sotto carico, specialmente in accelerazione o
                in decelerazione brusca. Il motore "salta" in
                folle con un colpo secco. Causa quasi sempre
                meccanica: cani di innesto arrotondati per cambio
                cronico senza frizione, forcella piegata che non
                mantiene il manicotto in posizione, molla di
                ritorno del selettore debole o rotta.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Marcia che non entra — pedale duro o impreciso</h4>
              <p>
                Il pedale oppone resistenza o non porta a fondo la
                marcia. Spesso accompagnato da rumore metallico
                di impatto tra i cani. Cause: sincronizzazione
                sbagliata (cambio effettuato a carico pieno senza
                frizione), cani di innesto già arrotondati che
                non trovano presa, manicotto scorrevole bloccato
                per detriti metallici nell'olio o frizione
                non aperta completamente per regolazione errata.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Cambio in folle impossibile — il neutro è sparito</h4>
              <p>
                Trovare il punto morto tra prima e seconda diventa
                difficile o impossibile. La moto tende a rimanere
                in prima o a saltare direttamente in seconda.
                Cause tipiche: leverismo del selettore fuori
                regolazione che altera lo step di rotazione
                del tamburo, detriti che intralciano il pawl
                di ritorno, molla del selettore con fatica
                che non ricentra il tamburo nella posizione
                di neutro.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Rumore in cambio — cigolii, rumori metallici, vibrazioni</h4>
              <p>
                Un rumore che varia con il regime in una marcia
                specifica indica tipicamente usura di quella
                coppia di ingranaggi o del cuscinetto che
                supporta l'albero in quel punto. Un rumore
                che compare solo durante il cambio marcia
                indica cani di innesto o forcelle usurate.
                Un rumore continuo che cambia con la marcia
                inserita ma non col regime suggerisce un
                problema al leverismo esterno o al tamburo.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Ispezione olio — i detriti che raccontano il cambio</h4>
              <p>
                Prima di aprire il carter il primo controllo è
                sempre l'olio scaricato: particelle metalliche
                fini e argentate indicano usura normale degli
                ingranaggi, scaglie o frammenti visibili indicano
                rottura di denti o cani di innesto. Il tappo
                magnetico di scarico raccoglie le particelle
                ferrose — la quantità e la dimensione dei
                detriti raccontano lo stato interno del cambio
                senza smontarlo.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Test funzionale a moto ferma — prima di girare</h4>
              <p>
                Con moto sul cavalletto, motore spento e frizione
                tirata: scorrere tutte le marce verificando che
                ogni passaggio sia netto, che il neutro sia
                trovabile in modo ripetibile e che non ci siano
                posizioni indefinite tra una marcia e l'altra.
                Ruotare la ruota a mano con la marcia inserita:
                deve girare senza resistenza o rullio irregolare.
                Questo test esclude i problemi meccanici grossolani
                senza accendere il motore.
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
            <span className="cardTag">Numero di marce</span>
            <h3>Da 4 a 6 rapporti — come varia secondo l'uso</h3>
            <p>
              I motori 2T per moto montano tipicamente 5 o 6 marce.
              I motori da motocross hanno spesso 5 marce con una
              progressione stretta ottimizzata per la banda di potenza
              ristretta del 2T — più marce ravvicinate tengono il
              motore in erogazione più a lungo. I motori da enduro
              e stradali tendono a 6 marce con una sesta più lunga
              per la percorrenza autostradale. I minimoto e i
              motori da 50cc possono avere 4 o addirittura 3 marce.
              Il numero di marce è fisso — non si può cambiare
              senza sostituire la scatola cambio completa.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Cambio rapido</span>
            <h3>Quickshifter — cambio senza frizione in salita</h3>
            <p>
              Il quickshifter è un sensore di forza sul leverismo
              del cambio che rileva la pressione del piede sul pedale
              e interrompe brevemente l'accensione o l'iniezione
              per 20 – 50 ms — abbastanza da azzerare il carico
              sui cani di innesto e permettere il cambio in salita
              senza aprire la frizione. Comune sulle moto stradali
              sportive moderne, disponibile come upgrade aftermarket
              per alcuni 2T da competizione. Non risolve i cambi
              in scalata, che richiedono ancora frizione
              e blipping del gas.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Preparazione</span>
            <h3>Modificare i rapporti — quando e come</h3>
            <p>
              In ambito racing la sostituzione selettiva di coppie
              di ingranaggi permette di adattare la progressione
              del cambio al circuito. Un tracciato con molte curve
              lente richiede prime e seconde più corte per massimizzare
              l'accelerazione in uscita. Un tracciato veloce richiede
              una quinta e sesta più lunghe per non saturare il regime
              sul rettifilo. La modifica richiede l'apertura del carter
              trasmissione e la sostituzione delle coppie coinvolte —
              approfondimento nella sezione Ingranaggi.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Cambio;
