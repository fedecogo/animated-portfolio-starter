import "./accensione.scss";
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

const Accensione = () => {
  return (
    <section className="accensione" id="accensione">
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
              Elettronica — Accensione
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              L’accensione — trasformare un segnale elettrico in una scintilla precisa
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              L’accensione è il sistema che decide quando la miscela deve incendiarsi
              dentro la camera di combustione. Non basta produrre una scintilla:
              quella scintilla deve arrivare nel momento corretto, con energia sufficiente
              e con una ripetibilità assoluta a ogni giro motore. Se arriva troppo presto,
              la combustione si oppone al pistone che sta ancora salendo; se arriva troppo tardi,
              una parte dell’energia utile viene sprecata quando il pistone ha già iniziato
              la discesa. In entrambi i casi il motore perde efficienza, pulizia di risposta
              e, nei casi peggiori, affidabilità.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Per capire davvero l’accensione bisogna ragionare come un sistema:
              c’è una sorgente di energia, c’è un riferimento di posizione dell’albero,
              c’è un’unità che decide il timing, c’è una bobina che innalza la tensione
              e c’è infine la candela che scarica quell’energia in forma di arco elettrico.
              Ogni anello della catena è indispensabile. Una candela nuova non risolve
              un pickup che non legge bene; una bobina ottima non compensa un anticipo errato;
              una centralina perfetta non può lavorare se il segnale di riferimento è instabile.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Catena dell’accensione</span>
              <h3>Quattro passaggi essenziali dalla rotazione alla scintilla</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Riferimento di fase — il pickup o sensore di posizione rileva
                  il passaggio di un riferimento sull’albero o sul volano e segnala
                  alla centralina dove si trova il motore nel ciclo
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Logica di comando — CDI o ECU decide quando scaricare energia
                  verso la bobina in base a regime, anticipo programmato e,
                  nei sistemi evoluti, anche ad altri parametri motore
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Moltiplicazione di tensione — la bobina d’accensione trasforma
                  una tensione relativamente bassa in alta tensione sufficiente
                  a far scoccare l’arco tra gli elettrodi della candela
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Innesco combustione — la candela scarica nel momento corretto;
                  la scintilla accende il fronte di fiamma e il motore converte
                  l’energia chimica in lavoro meccanico
                </span>
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
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Schema completo dell’accensione — statore o alimentazione, pickup,
                CDI/ECU, bobina AT, cavo candela e candela; evidenziare il percorso
                del segnale e della scarica ad alta tensione
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Dalla rotazione alla scintilla</span>
            <p>
              Un sistema di accensione corretto non lavora “a sensazione”:
              lavora per sincronizzazione. Il motore ruota, il pickup legge
              una posizione di riferimento, la centralina interpreta quel segnale,
              decide l’anticipo e comanda la bobina. La bobina eleva la tensione
              fino a un valore sufficiente a superare la resistenza del gap candela,
              e la scintilla avvia la combustione. Tutto avviene in millisecondi,
              centinaia o migliaia di volte al minuto.
            </p>
          </div>
        </motion.div>

        {/* ── PRINCIPI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="principiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="principiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fisica dell’accensione</span>
            <h3>Timing, alta tensione, ionizzazione del gap e velocità di combustione</h3>
            <p>
              Il concetto più importante è che la scintilla non serve da sola:
              serve nel momento giusto e con energia sufficiente a innescare
              rapidamente un fronte di fiamma stabile dentro una miscela che
              non sempre ha le stesse condizioni di pressione, temperatura e turbolenza.
            </p>
          </motion.div>

          <motion.div className="principiGrid" variants={cardVariants}>
            <div className="principiCard">
              <span className="principiIdx">01</span>
              <h4>La scintilla deve anticipare la massima pressione utile</h4>
              <p>
                La combustione non è istantanea: tra la scintilla e lo sviluppo
                completo del fronte di fiamma passano millisecondi preziosi.
                Per questo l’accensione avviene prima che il pistone raggiunga
                il punto morto superiore. L’anticipo serve a fare in modo che
                la pressione massima in camera si sviluppi quando il pistone
                ha appena iniziato la discesa, cioè nella zona in cui la spinta
                produce il massimo lavoro utile sull’albero motore.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">02</span>
              <h4>La bobina non crea magia: trasforma energia magnetica in alta tensione</h4>
              <p>
                La bobina d’accensione lavora come un trasformatore impulsivo.
                Nel primario si accumula energia magnetica; quando il circuito
                viene interrotto o scaricato secondo la logica del sistema,
                il collasso del campo magnetico induce nel secondario una tensione
                molto elevata. Questa tensione deve superare la rigidità dielettrica
                del gap candela e del mezzo in camera, che cresce con la pressione.
                Per questo ad alti carichi serve un’accensione efficiente e pulita.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">03</span>
              <h4>Il gap candela è un compromesso tra facilità di scarica e qualità dell’innesco</h4>
              <p>
                Un gap troppo piccolo rende più facile il salto della scintilla,
                ma tende a produrre un nucleo di fiamma meno energico. Un gap
                troppo grande migliora la propagazione iniziale ma richiede
                tensioni più alte e mette più sotto sforzo la bobina e l’intero
                circuito di alta tensione. Il valore corretto dipende dal motore,
                dalla pressione in camera, dal tipo di accensione e dal progetto
                della candela.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">04</span>
              <h4>L’anticipo ideale cambia con regime e carico</h4>
              <p>
                Un motore non vuole sempre la stessa scintilla nello stesso punto.
                A bassi giri il tempo assoluto disponibile per la combustione è maggiore;
                ad alti giri quel tempo si riduce drasticamente e l’anticipo va gestito
                in modo più raffinato. Inoltre il comportamento della fiamma cambia
                con densità della miscela, riempimento, temperatura e forma della camera.
                Ecco perché i sistemi moderni usano mappe e logiche dinamiche,
                mentre i sistemi più semplici si affidano a curve fisse o semi-fisse.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── COMPONENTI BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="componentiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="componentiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Componenti dell’accensione</span>
            <h3>Pickup, CDI, bobina, candela e cablaggi dedicati — ogni elemento ha un ruolo preciso</h3>
            <p>
              Un guasto all’accensione è spesso subdolo perché i sintomi possono
              sembrare meccanici o di carburazione. Capire cosa fa ogni pezzo
              aiuta a leggere meglio gli indizi e a non cambiare componenti a caso.
            </p>
          </motion.div>

          <motion.div className="componentiGrid" variants={cardVariants}>
            <div className="componentiCard">
              <span className="componentiIdx">01</span>
              <h4>Pickup o sensore di fase — il riferimento che dice alla centralina quando agire</h4>
              <p>
                Il pickup legge il passaggio di un rilievo o di una finestra sul volano
                o sull’albero e genera un impulso di riferimento. Non produce la scintilla:
                dice alla logica di accensione in che punto si trova il motore.
                Se il segnale è debole, rumoroso o fuori posizione, la scintilla
                può diventare irregolare, anticipata, ritardata o totalmente assente.
              </p>
            </div>

            <div className="componentiCard">
              <span className="componentiIdx">02</span>
              <h4>CDI o centralina di accensione — il cervello del timing</h4>
              <p>
                Nei sistemi CDI l’energia viene accumulata in un condensatore
                e scaricata rapidamente verso la bobina. Nei sistemi più moderni,
                la ECU gestisce l’accensione con logiche più ampie e integrate.
                In entrambi i casi il compito è lo stesso: decidere quando
                inviare il comando corretto alla bobina in base al segnale
                di riferimento e alla strategia prevista dal costruttore.
              </p>
            </div>

            <div className="componentiCard">
              <span className="componentiIdx">03</span>
              <h4>Bobina AT — il moltiplicatore di tensione dell’intero sistema</h4>
              <p>
                La bobina trasforma il comando elettrico in una scarica ad alta tensione.
                Se è debole, scalda troppo o ha isolamento degradato, la scintilla
                può esserci a freddo e sparire a caldo, oppure comparire in modo
                intermittente sotto carico. È uno dei guasti classici che ingannano
                perché il motore “sembra quasi andare” ma salta quando serve davvero energia.
              </p>
            </div>

            <div className="componentiCard">
              <span className="componentiIdx">04</span>
              <h4>Candela e pipetta — l’ultimo tratto, dove tutto si concretizza</h4>
              <p>
                La candela è il punto terminale della catena. Elettrodi usurati,
                isolatore sporco, grado termico errato, gap fuori tolleranza
                o pipetta con resistenza anomala alterano direttamente la qualità
                della scintilla. Qui il sistema smette di essere teoria elettrica
                e diventa innesco reale della combustione. Una candela sbagliata
                può compromettere un’accensione perfettamente sana a monte.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── TIPOLOGIE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="tipologieBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tipologieHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Architetture di accensione</span>
            <h3>Magnete, CDI, TCI ed ECU moderne — stessa funzione, filosofie diverse</h3>
            <p>
              Non tutti i sistemi di accensione lavorano allo stesso modo.
              Cambia la fonte di energia, cambia il modo in cui viene accumulata
              e cambia il livello di controllo disponibile sul timing.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>
            <div className="tipCard tipMagnete">
              <div className="tipCardTop">
                <span className="tipBadge badgeMagnete">Magnete / statore</span>
                <span className="tipSub">Autonomo · semplice · robusto</span>
              </div>
              <h4>La rotazione del motore genera direttamente l’energia necessaria all’accensione</h4>
              <p>
                Nei sistemi più semplici, tipici di molte moto leggere e di molte 2T,
                il volano magnetico e lo statore producono l’energia necessaria
                al funzionamento dell’accensione senza dipendere in modo totale
                dalla batteria. È una soluzione robusta e molto adatta a mezzi
                essenziali, ma offre meno finezza di gestione rispetto a sistemi
                completamente controllati da ECU moderna.
              </p>
            </div>

            <div className="tipCard tipCDI">
              <div className="tipCardTop">
                <span className="tipBadge badgeCDI">CDI</span>
                <span className="tipSub">Scarica capacitiva · risposta rapida</span>
              </div>
              <h4>Il condensatore accumula energia e la scarica molto rapidamente sulla bobina</h4>
              <p>
                Il CDI è celebre per la rapidità con cui può generare l’impulso
                di comando alla bobina. È molto diffuso nelle moto piccole,
                negli scooter e in moltissime due tempi sportive e off-road.
                Garantisce una scintilla efficace ad alti giri e un sistema
                relativamente compatto, ma la logica di controllo varia molto
                in sofisticazione da un modello all’altro.
              </p>
            </div>

            <div className="tipCard tipTCI">
              <div className="tipCardTop">
                <span className="tipBadge badgeTCI">TCI / transistor</span>
                <span className="tipSub">Più controllato · molto diffuso</span>
              </div>
              <h4>La bobina viene pilotata tramite transistor con logica più raffinata</h4>
              <p>
                Nei sistemi transistorizzati la gestione della bobina avviene
                con una logica diversa dal classico CDI capacitivo. Il controllo
                del tempo di carica e del momento di interruzione può essere
                molto preciso e si integra bene con le centraline moderne.
                È comune su molte quattro tempi e su sistemi in cui l’accensione
                dialoga con iniezione e altri parametri motore.
              </p>
            </div>

            <div className="tipCard tipECU">
              <div className="tipCardTop">
                <span className="tipBadge badgeECU">ECU moderna</span>
                <span className="tipSub">Mappe · sensori · strategia completa</span>
              </div>
              <h4>L’accensione diventa una funzione dentro un ecosistema di controllo più ampio</h4>
              <p>
                Nei sistemi moderni la scintilla non è più un evento isolato:
                è una decisione presa dalla ECU tenendo conto di giri, carico,
                posizione farfalla, temperatura, pressione e altre variabili.
                Il vantaggio è enorme in termini di precisione, adattabilità
                e ottimizzazione delle prestazioni, ma aumentano anche la complessità
                diagnostica e la dipendenza dalla qualità dei sensori.
              </p>
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
            <span className="captionTag">Anticipo accensione</span>
            <p>
              In uno schema efficace si dovrebbe vedere il pistone che sale,
              il punto morto superiore e l’istante in cui la scintilla viene innescata
              poco prima del PMS. Il punto cruciale è comprendere che la combustione
              richiede tempo: l’anticipo non è un capriccio, è il modo con cui
              si allinea la velocità della combustione alla cinematica del motore.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Schema del pistone vicino al PMS con confronto tra scintilla anticipata,
                corretta e ritardata; evidenziare l’effetto sulla pressione in camera
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="diagnosiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnosiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e sintomi</span>
            <h3>Mancate accensioni, spegnimenti a caldo, vuoti e scintilla debole — leggere i segnali giusti</h3>
            <p>
              I problemi di accensione spesso si confondono con problemi di alimentazione.
              La differenza sta nella qualità del sintomo: l’accensione tende a produrre
              tagli netti, intermittenze improvvise e comportamenti molto sensibili
              alla temperatura o al regime.
            </p>
          </motion.div>

          <motion.div className="diagnosiGrid" variants={cardVariants}>
            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Il motore gira ma non parte — manca scintilla o arriva nel momento sbagliato</h4>
              <p>
                Se il motore ha compressione e alimentazione plausibili ma non accenna
                a partire, il sospetto va subito su candela, bobina, pickup, CDI/ECU
                o alimentazione del sistema di accensione. Una scintilla assente
                o completamente fuori fase impedisce qualunque tentativo di avviamento
                utile anche se tutto il resto sembra presente.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Parte a freddo e muore a caldo — classico segnale da bobina o componente elettronico degradato</h4>
              <p>
                Alcuni guasti compaiono solo quando il componente sale di temperatura.
                Una bobina con isolamento stanco, una CDI difettosa o un pickup
                fuori tolleranza possono funzionare da freddi e cedere da caldi.
                Il motore si spegne improvvisamente o inizia a perdere colpi
                dopo alcuni minuti di funzionamento.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Vuoti ad alti giri — la scintilla non riesce a restare stabile quando il tempo utile si accorcia</h4>
              <p>
                Ad alto regime il margine temporale è minimo. Se la bobina è debole,
                la candela è stanca, il gap è errato o il comando di accensione
                non resta pulito, i problemi emergono proprio in alto: tagli,
                mancate combustioni, sensazione di motore che “mura” o si spezza
                invece di salire con continuità.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Controllo candela — colore, gap, deposito e integrità dell’isolatore</h4>
              <p>
                La candela è il primo controllo perché è accessibile e racconta molto.
                Elettrodo eroso, isolatore crepato, incrostazioni pesanti, gap errato
                o pipetta lenta nel contatto modificano direttamente la qualità
                dell’innesco. È il controllo iniziale, non la diagnosi completa:
                se la candela fallisce, va sostituita; se sembra buona, si prosegue a monte.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Controllo scintilla e continuità — non basta vederla, conta come si presenta</h4>
              <p>
                Una scintilla debole, giallastra, intermittente o instabile sotto prova
                non equivale a una scintilla sana. Bisogna valutare continuità,
                intensità e ripetibilità. Un sistema che genera scintilla “ogni tanto”
                è più difficile da diagnosticare, ma spesso i problemi si trovano
                in masse, connettori, bobina o pickup piuttosto che nella sola candela.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeIntervallo">Intervallo</span>
              <h4>Manutenzione preventiva — candela e connessioni vanno controllate prima del guasto evidente</h4>
              <p>
                L’accensione tende a dare segnali prima di fallire del tutto:
                avviamento meno pronto, vuoti sporadici, maggiore sensibilità
                all’umidità, risposta meno pulita in alto. Controllare periodicamente
                candela, pipetta, cablaggio dedicato e stato delle masse riduce
                moltissimo il rischio di guasti improvvisi difficili da leggere sul momento.
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
            <span className="cardTag">Idea chiave</span>
            <h3>L’accensione non riguarda solo la presenza della scintilla, ma la sua qualità nel tempo esatto</h3>
            <p>
              Dire “c’è scintilla” non basta. Una scintilla utile deve essere forte,
              stabile, ripetibile e perfettamente sincronizzata con la posizione del pistone.
              L’accensione è un problema di energia e di tempo insieme.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Errore classico</span>
            <h3>Scambiare un guasto di accensione per un problema di carburazione o viceversa</h3>
            <p>
              Molti vuoti, spegnimenti e mancati allunghi vengono attribuiti al carburatore
              o all’iniezione quando il vero problema è una scintilla incoerente.
              Allo stesso modo, una candela bagnata può far pensare a un problema elettrico
              quando la causa nasce a monte nell’alimentazione. Serve leggere il sistema intero.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>Qui il focus è sulla generazione e sul controllo della scintilla, non sull’intera gestione elettronica della moto</h3>
            <p>
              Questo capitolo tratta l’accensione: pickup, CDI o ECU, bobina,
              candela, timing e sintomi tipici di guasto. Batteria, cablaggio generale,
              sensori, mappe e centralina come ecosistema completo sono argomenti
              delle sezioni dedicate e qui vengono richiamati solo quando servono
              per capire il funzionamento della scintilla.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Accensione;