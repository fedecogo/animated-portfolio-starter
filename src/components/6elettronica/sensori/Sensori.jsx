import "./sensori.scss";
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

const Sensori = () => {
  return (
    <section className="sensori" id="sensori">
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
              Elettronica — Sensori
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              I sensori nel motore 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Un motore a 2 tempi moderno non funziona "da solo". Ogni
              decisione dell'ECU — quando scatta la scintilla, quanto aprire
              la powervalve, quanto carburante iniettare — parte da una
              misura. I sensori sono gli occhi e le orecchie del sistema
              di gestione: traducono grandezze fisiche (temperatura, pressione,
              posizione, velocità angolare, composizione dei gas) in segnali
              elettrici che l'ECU può leggere, interpretare e usare per
              calcolare la risposta ottimale del motore in ogni istante.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Sul 2T a carburatore i sensori erano pochissimi — spesso solo
              il pickup di accensione e un termostato. Con l'arrivo del CDI
              programmabile sono comparsi il TPS e il sensore di temperatura.
              Con l'iniezione diretta TPI la famiglia si è espansa: MAP,
              lambda, posizione powervalve, temperatura aria e acqua,
              barometro integrato in ECU, sensore velocità ruota per ABS
              e traction control. Ogni sensore aggiunto aumenta la precisione
              della gestione motore ma introduce un punto di possibile guasto
              che il pilota deve saper riconoscere e diagnosticare.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Le famiglie di sensori</span>
              <h3>Quattro categorie che coprono tutto ciò che l'ECU deve sapere</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Posizione e angolo — TPS manopola, TPS farfalla, sensore
                  posizione powervalve: dicono all'ECU dove si trovano
                  gli organi mobili del sistema in ogni istante
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Pressione — MAP (collettore), sensore barometrico (spesso
                  integrato in ECU): misurano la pressione dell'aria aspirata
                  e le sue variazioni con l'altitudine
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Temperatura — NTC acqua, NTC aria aspirata, termocoppia
                  testa (CHT), sonda EGT scarico: gestione termica del
                  motore e protezione dal surriscaldamento
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Giri e velocità — pickup induttivo o Hall sull'albero,
                  sensore ruota per ABS/TC: timing accensione, powervalve
                  e controllo trazione dipendono da questi segnali
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
                Schema posizione sensori su moto 2T TPI — TPS, MAP, NTC acqua, NTC aria,
                pickup accensione, sensore powervalve, sensore ruota ABS
              </span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Mappa sensori</span>
            <p>
              Su un KTM 300 EXC TPI ogni sensore occupa una posizione precisa
              e ha un cavo dedicato nel fascio principale. La posizione non
              è casuale: i sensori vicini a fonti di calore o vibrazioni
              usano connettori rinforzati; quelli sul circuito idraulico
              sono avvitati direttamente nei raccordi con guarnizioni in rame
              o PTFE.
            </p>
          </div>
        </motion.div>

        {/* ── TPS BLOCK ───────────────────────────────────────────────────── */}
        <motion.div
          className="tpsBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tpsHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Sensori di posizione</span>
            <h3>TPS — Throttle Position Sensor, il sensore che dice all'ECU dove si trova la farfalla</h3>
            <p>
              Il TPS è il sensore con cui l'ECU ha il dialogo più frequente:
              la sua lettura entra in quasi tutti i calcoli di gestione motore,
              dall'anticipo di accensione alla durata dell'iniezione, dalla
              posizione della powervalve alla mappa gas del Ride-by-Wire.
              Capire come funziona e come si guasta è fondamentale.
            </p>
          </motion.div>

          <motion.div className="tpsGrid" variants={cardVariants}>

            <div className="tpsCard">
              <div className="tpsCardVisual potenziometro">
                <span>POT</span>
              </div>
              <span className="tpsBadge">Potenziometrico</span>
              <h4>TPS a potenziometro — il tipo classico sui 2T a carburatore</h4>
              <p>
                Il TPS potenziometrico è una resistenza variabile: un cursore
                solidale all'asse della farfalla scorre su una pista resistiva
                e divide una tensione di riferimento (tipicamente 5V) in
                modo proporzionale all'angolo. L'uscita varia da circa 0,5V
                (chiuso) a 4,5V (piena apertura). È il tipo più diffuso sui
                sistemi con CDI programmabile e carburatore — semplice,
                economico, ma soggetto a usura meccanica del cursore sulla
                pista che produce zone morte o salti nel segnale dopo molte
                ore d'uso. La verifica è semplice con un multimetro: si misura
                la tensione di uscita ruotando lentamente l'asse — non deve
                mai mostrare salti o zone piatte.
              </p>
            </div>

            <div className="tpsCard">
              <div className="tpsCardVisual hall">
                <span>HALL</span>
              </div>
              <span className="tpsBadge badgeHall">Effetto Hall</span>
              <h4>TPS Hall — senza contatto meccanico, più robusto e preciso</h4>
              <p>
                I sensori TPS a effetto Hall usano un campo magnetico variabile
                (generato da un magnete solidale all'asse della farfalla)
                rilevato da un elemento Hall fisso. Non c'è contatto meccanico
                tra le parti in movimento: nessuna usura, nessuna zona morta
                progressiva. La precisione è superiore (risoluzione tipica
                0,1°) e la risposta è più lineare su tutto il range.
                Sono lo standard sulle moto 2T con Ride-by-Wire (KTM TPI,
                Husqvarna TE TPI) dove l'affidabilità del segnale è critica
                per la sicurezza del sistema. Guastano meno frequentemente
                dei potenziometri ma quando lo fanno la sostituzione richiede
                la procedura di adattamento all'ECU.
              </p>
            </div>

            <div className="tpsCard">
              <div className="tpsCardVisual ridondante">
                <span>×2</span>
              </div>
              <span className="tpsBadge badgeRidondante">Ridondante</span>
              <h4>TPS doppio ridondante — sicurezza funzionale obbligatoria sul RbW</h4>
              <p>
                I sistemi RbW usano due sensori TPS con segnali a polarità
                opposta: quando uno sale, l'altro scende proporzionalmente.
                L'ECU verifica ad ogni ciclo che la somma dei due segnali
                normalizzati resti costante. Se i valori divergono oltre
                la soglia di tolleranza, il sistema dichiara un fault e
                attiva il limp home. Questa architettura è richiesta dalle
                normative di sicurezza funzionale per i sistemi drive-by-wire
                su veicoli stradali. Un singolo TPS guasto non ferma la moto:
                la fa passare in modalità degradata finché non si risolve il
                problema in officina.
              </p>
            </div>

            <div className="tpsCard">
              <div className="tpsCardVisual powervalve">
                <span>PV</span>
              </div>
              <span className="tpsBadge badgePowervalve">Powervalve</span>
              <h4>Sensore posizione powervalve — feedback per il controllo in loop chiuso</h4>
              <p>
                Sui sistemi con powervalve elettronica (YPVS Yamaha, RAVE
                Rotax, PV KTM) un piccolo sensore potenziometrico o Hall
                sull'asse della valvola riporta la posizione reale all'ECU.
                Senza questo feedback l'ECU non sa se la valvola si è
                effettivamente spostata all'angolo comandato — un guasto
                meccanico al servo o al cinematismo passerebbe inosservato
                e il motore eroga male senza codici di errore chiari.
                Con il sensore di posizione l'ECU verifica la corrispondenza
                tra comando e posizione reale ad ogni ciclo e genera un
                fault specifico se la valvola non raggiunge la posizione target.
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
            <span className="captionTag">MAP sensor</span>
            <p>
              Il sensore MAP (Manifold Absolute Pressure) misura la pressione
              assoluta nel collettore di aspirazione. Su un 2T a iniezione
              è fondamentale: la pressione in collettore dice all'ECU quanta
              aria sta entrando nel motore in ogni istante, permettendo il
              calcolo della massa d'aria e quindi della quantità di carburante
              da iniettare per mantenere il rapporto stechiometrico.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Grafico pressione MAP vs regime su 2T TPI — variazione dal minimo al pieno gas con powervalve aperta e chiusa
              </span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── TERMICI BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="termiciBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="termiciHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Sensori termici</span>
            <h3>NTC acqua, NTC aria, CHT testa e sonda EGT — la gestione termica del 2T inizia dalla misura corretta</h3>
            <p>
              Il 2T è termicamente più sensibile del 4T: la miscela scorre
              nel carter raffreddando pistone e cilindro, ma il margine
              prima del grippaggio è stretto. I sensori termici sono la
              prima linea di difesa contro i guasti da surriscaldamento.
            </p>
          </motion.div>

          <motion.div className="termiciGrid" variants={cardVariants}>

            <div className="termiciCard">
              <span className="termiciIdx">01</span>
              <h4>NTC liquido di raffreddamento — il sensore più comune sul 2T raffreddato a liquido</h4>
              <p>
                Il sensore NTC (Negative Temperature Coefficient) avvitato
                nel circuito del liquido di raffreddamento — tipicamente
                nel raccordo di uscita dalla testata — è il termometro
                principale del motore. La sua resistenza decresce
                all'aumentare della temperatura seguendo una curva ben
                definita: a 20°C è tipicamente 2–3 kΩ, scende a 200–400 Ω
                a 80°C e a 100–150 Ω a 100°C. L'ECU legge questa resistenza
                tramite un divisore di tensione interno e la converte in
                gradi con la curva di calibrazione memorizzata nel firmware.
                Range operativo normale su un 2T in movimento: 55–75°C.
                Oltre 90°C: raffreddamento insufficiente o termostato bloccato.
              </p>
            </div>

            <div className="termiciCard">
              <span className="termiciIdx">02</span>
              <h4>NTC aria aspirata (IAT) — correzione della densità aria in funzione della temperatura</h4>
              <p>
                Il sensore di temperatura aria (Intake Air Temperature)
                è un secondo NTC posizionato nel condotto di aspirazione,
                tipicamente nel filtro dell'aria o nel corpo farfallato.
                La sua funzione è la correzione della mappa di iniezione
                in base alla densità dell'aria: aria più fredda è più densa
                e contiene più ossigeno per unità di volume, quindi serve
                più carburante; aria calda è meno densa. L'ECU usa questo
                valore per correggere la durata dell'iniezione e mantenere
                il rapporto aria-carburante costante al variare delle
                condizioni ambientali — fondamentale in gara enduro dove
                la temperatura esterna può variare di 20°C nel corso
                di una singola speciale.
              </p>
            </div>

            <div className="termiciCard">
              <span className="termiciIdx">03</span>
              <h4>CHT — Cylinder Head Temperature, la temperatura dove conta davvero</h4>
              <p>
                Il sensore CHT (Cylinder Head Temperature) è una termocoppia
                avvitata nella testata o nel tappo della candela che misura
                direttamente la temperatura del metallo a contatto con la
                camera di combustione — non quella del liquido di
                raffreddamento. È molto più reattivo dell'NTC acqua: risponde
                alle variazioni di miscela e anticipo in pochi secondi, mentre
                l'NTC acqua impiega decine di secondi per rilevare lo stesso
                cambiamento. I preparatori e i piloti avanzati lo usano come
                indicatore diretto della qualità della combustione: un CHT
                che sale rapidamente durante un cambio di mappa segnala
                detonazione incipiente prima che qualsiasi altro parametro
                lo indichi. Range normale: 150–250°C in esercizio. Oltre
                300°C: segnale di allarme.
              </p>
            </div>

            <div className="termiciCard">
              <span className="termiciIdx">04</span>
              <h4>Sonda EGT — temperatura gas di scarico, strumento da preparazione</h4>
              <p>
                La sonda EGT (Exhaust Gas Temperature) è una termocoppia
                in acciaio inox o Inconel avvitata nel collettore di scarico,
                tipicamente a 5–10 cm dalla testa. Misura la temperatura
                dei gas combusti all'uscita dal cilindro — un indicatore
                indiretto ma potente della qualità della combustione.
                Sul 2T i valori EGT corretti dipendono dalla cilindrata
                e dall'uso: su un 250cc da enduro in regime di lavoro
                normale si trovano tra 550 e 700°C. Valori oltre 750°C
                indicano miscela magra o anticipo eccessivo — entrambi
                precursori del grippaggio. Valori sotto 450°C in regime
                di lavoro indicano miscela ricca o temperatura di esercizio
                troppo bassa. Usata principalmente in preparazione e
                calibrazione in banco, non è standard di serie sui 2T attuali.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── GIRI E PICKUP BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="giriBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="giriHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Giri e posizione albero</span>
            <h3>Pickup induttivo e Hall — il segnale che governa anticipo, powervalve e traction control</h3>
            <p>
              Senza un segnale di giri preciso e affidabile l'ECU non può
              fare nulla: anticipo di accensione, posizione powervalve e
              traction control dipendono tutti dal conoscere la posizione
              esatta dell'albero motore in ogni istante.
            </p>
          </motion.div>

          <motion.div className="giriContent" variants={cardVariants}>

            <div className="giriColumn">
              <div className="giriItem">
                <span className="giriLabel">Pickup induttivo — il classico dei 2T</span>
                <p>
                  Il pickup induttivo è una bobina avvolta attorno a un
                  magnete permanente posizionata di fronte al volano.
                  Quando il dente di riferimento (o la finestra di riferimento)
                  del volano transita davanti al pickup, il campo magnetico
                  varia e induce una tensione alternata nella bobina.
                  Questo impulso di tensione — con forma caratteristica
                  a picco positivo seguito da picco negativo — segnala
                  all'ECU il momento esatto in cui l'albero è passato per
                  il punto di riferimento. Il valore di tensione del picco
                  aumenta con il regime: a 500 giri produce pochi millivolt,
                  a 10.000 giri produce diversi volt. L'ECU usa il fronte
                  di discesa (zero crossing) come riferimento temporale
                  per calcolare l'anticipo. Non richiede alimentazione
                  esterna — funziona anche con batteria scarica, motore
                  avviato a spinta.
                </p>
              </div>

              <div className="giriItem">
                <span className="giriLabel">Dente di riferimento e finestra — geometria del volano</span>
                <p>
                  Il volano dei 2T moderni ha una geometria di riferimento
                  precisa: nella maggior parte dei casi una finestra ricavata
                  nella corona del volano (assenza di materiale) o un dente
                  aggiuntivo rispetto alla dentatura uniforme. La posizione
                  angolare di questa finestra è definita con precisione
                  rispetto al PMI dell'albero — tipicamente a 10–15° prima
                  del PMI. Questa geometria è il "punto zero" su cui si basa
                  tutto il calcolo dell'anticipo: l'ECU sa che quando il
                  pickup rileva la finestra, il pistone è esattamente a
                  quella posizione angolare, e da lì calcola i gradi di
                  anticipo necessari in base al regime e alla mappa.
                </p>
              </div>
            </div>

            <div className="giriColumn">
              <div className="giriItem">
                <span className="giriLabel">Pickup Hall — segnale digitale e precisione a tutti i regimi</span>
                <p>
                  Il sensore Hall sostituisce il pickup induttivo nei
                  sistemi più moderni. Non genera una tensione per induzione
                  ma produce un segnale digitale (0V o 5V) al transito del
                  dente metallico del volano, grazie all'effetto Hall su
                  un elemento a stato solido. Il vantaggio principale è
                  la precisione a bassissimo regime — anche a 100 giri
                  il segnale è identico a quello a 10.000 giri, mentre
                  il pickup induttivo a regimi molto bassi produce impulsi
                  troppo deboli per essere letti con sicurezza. Richiede
                  alimentazione (tipicamente 5V o 12V) ma offre immunità
                  ai disturbi del cavo candela superiore rispetto al pickup
                  induttivo grazie all'uscita a stato solido. È lo standard
                  sui sistemi a iniezione TPI.
                </p>
              </div>

              <div className="giriItem">
                <span className="giriLabel">Sensore velocità ruota — ABS e traction control</span>
                <p>
                  Il sensore di velocità ruota (Wheel Speed Sensor) è un
                  sensore Hall che legge una ruota fonica (tone ring) con
                  42 o 48 denti solidale al mozzo della ruota anteriore
                  — e in alcuni sistemi anche posteriore. Produce un treno
                  di impulsi la cui frequenza è proporzionale alla velocità
                  di rotazione. L'ECU calcola la velocità della ruota
                  dalla frequenza di questi impulsi e la confronta con
                  quella dell'altra ruota per stimare lo slittamento.
                  Su una moto enduro 2T il sensore deve resistere a fango,
                  acqua e vibrazioni intense: il gap sensore-ruota fonica
                  deve rimanere nel range specificato (tipicamente 0,5–1,2 mm)
                  anche con le sospensioni che lavorano su terreno accidentato.
                </p>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── MAP E PRESSIONE BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="pressureBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="pressureHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Pressione e composizione</span>
            <h3>MAP, barometrico e lambda — misurare l'aria e i gas di scarico per gestire l'iniezione con precisione</h3>
            <p>
              Sui 2T a iniezione diretta la gestione del carburante dipende
              dalla misura precisa della pressione d'ingresso e, nei sistemi
              più evoluti, dalla composizione dei gas di scarico. Senza questi
              dati l'iniezione lavora in open loop — con tutti i limiti di precisione che questo comporta.
            </p>
          </motion.div>

          <motion.div className="pressureGrid" variants={cardVariants}>

            <div className="pressureCard">
              <span className="pressureIdx">01</span>
              <h4>MAP sensor — pressione assoluta nel collettore di aspirazione</h4>
              <p>
                Il sensore MAP (Manifold Absolute Pressure) misura la pressione
                assoluta nel condotto di aspirazione tra corpo farfallato
                e cilindro. Su un 2T TPI questa misura è il parametro
                principale per il calcolo della massa d'aria aspirata:
                conoscendo pressione (MAP), temperatura (IAT) e il modello
                geometrico del motore, l'ECU calcola la densità dell'aria
                e quindi quanta miscela iniettare. Il sensore MAP produce
                una tensione proporzionale alla pressione — tipicamente
                0,5V a vuoto assoluto e 4,5V a pressione atmosferica (circa
                1 bar assoluto). Su 2T a piena apertura la pressione in
                collettore è vicina all'atmosferica; al minimo con farfalla
                quasi chiusa scende a 0,3–0,5 bar. La variazione rapida
                di questa lettura durante le transizioni gas-chiuso/aperto
                è usata dall'ECU anche per anticipare le correzioni di
                iniezione nei transitori.
              </p>
            </div>

            <div className="pressureCard">
              <span className="pressureIdx">02</span>
              <h4>Sensore barometrico — compensazione altitudine integrata in ECU</h4>
              <p>
                Il sensore barometrico misura la pressione atmosferica esterna.
                Su molte ECU moderne è integrato direttamente nel modulo
                elettronico — non richiede connessione esterna e non ha
                tubo di campionamento. La sua funzione è la compensazione
                altitudine: a 2.000 m di quota la pressione atmosferica
                è circa 0,79 bar invece di 1,01 bar al livello del mare,
                con una riduzione della densità dell'aria di circa il 22%.
                Senza compensazione, lo stesso regime e la stessa posizione
                farfalla producono una miscela più ricca in quota perché
                c'è meno ossigeno disponibile. L'ECU usa il valore barometrico
                per scalare la mappa di iniezione in funzione dell'altitudine,
                mantenendo il rapporto aria-carburante ottimale anche
                in gara enduro in montagna.
              </p>
            </div>

            <div className="pressureCard">
              <span className="pressureIdx">03</span>
              <h4>Sonda lambda narrowband — controllo on/off del rapporto stechiometrico</h4>
              <p>
                La sonda lambda narrowband (wideband su un singolo punto)
                è una cella elettrochimica di ossido di zirconio che misura
                la concentrazione di ossigeno nei gas di scarico. Produce
                un segnale quasi binario: circa 0,1V quando la miscela è
                magra (λ &gt; 1, ossigeno in eccesso) e circa 0,9V quando
                è ricca (λ &lt; 1, carburante in eccesso). L'ECU usa questo
                segnale in loop chiuso (closed-loop) per correggere la
                durata di iniezione ad ogni ciclo, mantenendo il motore
                vicino alla stechiometria al minimo e nei regimi parziali.
                Sui 2T TPI la sonda è nel collettore di scarico e funziona
                a pieno regime solo quando ha raggiunto la temperatura
                operativa (circa 300°C), che si raggiunge tipicamente
                dopo 30–60 secondi di funzionamento.
              </p>
            </div>

            <div className="pressureCard">
              <span className="pressureIdx">04</span>
              <h4>Sonda wideband LSU 4.9 — misurazione precisa del lambda per la calibrazione</h4>
              <p>
                La sonda wideband Bosch LSU 4.9 (o equivalenti NTK, Innovate)
                misura il lambda in modo continuo su un range ampio — tipicamente
                da λ = 0,65 (miscela ricchissima) a λ = ∞ (aria pura) —
                con un segnale analogico lineare. Non è montata di serie
                sui 2T TPI ma è indispensabile in calibrazione: collegata
                a un controller esterno (AiM Lambda, Innovate LC-2, PLX
                SM-AFR) produce un valore di AFR (Air-Fuel Ratio) leggibile
                dal data logger in ogni condizione di funzionamento.
                Confrontare la curva di AFR sul datalog con la mappa di
                iniezione permette di identificare esattamente dove la
                miscela è fuori target e correggere la mappa con precisione
                punto per punto, invece di procedere per tentativi iterativi
                sul banco o in pista.
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
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Foto comparativa sensori — pickup induttivo vs Hall, NTC acqua, MAP, sonda lambda narrowband e wideband LSU 4.9 affiancati
              </span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Hardware</span>
            <p>
              I sensori di un 2T moderno sembrano piccoli e secondari.
              In realtà la qualità del loro segnale è il limite superiore
              della precisione dell'intera gestione motore. Un sensore
              sporco, ossidato o fuori calibrazione non viene compensato
              da nessun algoritmo — la mappa lavora su dati sbagliati e
              il motore risponde in modo sbagliato.
            </p>
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
            <h3>Temperatura sempre errata, giri instabili, lambda fuori range e pickup intermittente — leggere i guasti dei sensori</h3>
            <p>
              I guasti dei sensori raramente si manifestano con un guasto
              totale secco. Più spesso producono comportamenti anomali
              intermittenti o gradualmente peggioranti che sembrano problemi
              meccanici o di carburazione.
            </p>
          </motion.div>

          <motion.div className="diagnosiGrid" variants={cardVariants}>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Temperatura sempre al massimo a freddo o sempre bassa a caldo — NTC fuori range</h4>
              <p>
                Un NTC in cortocircuito produce resistenza nulla che l'ECU
                interpreta come temperatura elevata — spia temperatura accesa
                con motore freddo. Un NTC in circuito aperto (connettore
                staccato o cavo interrotto) produce resistenza infinita che
                l'ECU interpreta come temperatura molto bassa. La verifica
                rapida: disconnettere il sensore e misurare la resistenza
                — tipicamente 2–3 kΩ a temperatura ambiente. Confrontare
                con la curva NTC del costruttore. Qualsiasi valore fuori
                range o instabile con connettore integro indica sensore
                da sostituire.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Giri instabili o accensione irregolare — pickup sporco o gap errato</h4>
              <p>
                Un pickup induttivo con gap troppo ampio (oltre 1,5 mm)
                produce impulsi deboli che l'ECU legge in modo intermittente
                ad alto regime, causando mancate accensioni o anticipo
                irregolare. Un pickup sporco di fango o trucioli metallici
                (attratti dal magnete) genera impulsi spuri che l'ECU
                interpreta come regimi errati. Verifica: misurare il gap
                con calibro, pulire con aria compressa, verificare l'uscita
                in AC con oscilloscopio o multimetro mentre si avvia il
                motore — deve produrre impulsi regolari e netti.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Consumo anomalo o miscela sempre ricca/magra — MAP o IAT fuori calibrazione</h4>
              <p>
                Un sensore MAP con il tubo di campionamento piegato, bloccato
                o forato legge una pressione errata rispetto a quella reale
                nel collettore — l'ECU calcola una massa d'aria sbagliata
                e la mappa di iniezione lavora fuori target su tutto il
                range. Stessa cosa con un IAT mal posizionato (vicino a
                una fonte di calore) che legge temperature dell'aria più
                alte del reale, portando l'ECU a ridurre il carburante
                e impoverire la miscela in condizioni normali.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Test TPS con multimetro — linearità del segnale da 0,5V a 4,5V</h4>
              <p>
                Con accensione inserita (motore spento): misurare la tensione
                di uscita TPS mentre si ruota lentamente la farfalla dall'aperto
                al chiuso. Il segnale deve variare linearmente e continuamente
                tra 0,5V (chiuso) e 4,5V (aperto) senza salti, zone piatte
                o inversioni. Un salto anche minimo (0,05V) nel segnale
                indica usura della pista resistiva (potenziometrico) o guasto
                all'elemento Hall. Ripetere 3–4 volte lungo l'intero range
                per escludere guasti intermittenti che compaiono solo a certi
                angoli di apertura.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Verifica sonda lambda — riscaldamento, tensione e risposta al gas</h4>
              <p>
                La sonda lambda funziona correttamente solo dopo il
                riscaldamento (circa 30–60 secondi a motore caldo). Con il
                motore a regime di minimo caldo: la tensione di uscita deve
                oscillare tra 0,1V e 0,9V a una frequenza di 1–3 Hz (il
                loop chiuso dell'ECU che corregge continuamente). Un segnale
                bloccato (sempre 0,1V o sempre 0,9V) indica sonda esaurita
                o elemento ceramico danneggiato da acqua o additivi incompatibili.
                L'apertura brusca del gas deve causare un calo a 0,1V
                (miscela magra nel transitorio).
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeIntervallo">Intervallo</span>
              <h4>Manutenzione sensori — pulizia, connettori e sostituzione preventiva</h4>
              <p>
                Ogni stagione: pulire il pickup con aria compressa, verificare
                il gap sensore-volano con calibro e confermare che sia nel
                range del costruttore (tipicamente 0,5–1,0 mm); controllare
                tutti i connettori dei sensori per ossidazione dei pin e
                allentamento del fermaglio — trattare con grasso dielettrico;
                verificare il tubo di campionamento del MAP per schiacciature
                o micro-fessure. La sonda lambda si sostituisce ogni 25.000 km
                su uso stradale o ogni 2 stagioni su uso racing — il ceramico
                si degrada anche senza guasto visibile, riducendo la velocità
                di risposta del loop chiuso.
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
            <h3>Un sensore sbagliato non viene compensato dall'ECU — la mappa lavora su dati errati e il motore risponde in modo errato</h3>
            <p>
              L'ECU non sa che il sensore mente. Calcola l'anticipo, la
              quantità di carburante e la posizione della powervalve usando
              i valori che riceve — se quei valori sono sbagliati, le risposte
              sono sbagliate. Un pickup sporco non dà mancate accensioni
              casuali: dà anticipo sbagliato in modo sistematico.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Sul 2T conta di più</span>
            <h3>Il margine termico stretto del 2T rende i sensori di temperatura critici come qualsiasi componente meccanico</h3>
            <p>
              Un 4T con NTC guasto che sovrastima la temperatura tende
              a girare ricco — fastidioso ma raramente catastrofico.
              Un 2T con lo stesso guasto può girare troppo magro in
              un momento critico, con grippaggio che arriva in pochi
              secondi senza segnali di avvertimento. La corretta lettura
              dei sensori termici è protezione attiva.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>Qui il focus è sui sensori come componenti — la gestione motore che li usa è nel capitolo Centralina e Mappe</h3>
            <p>
              Questo capitolo tratta la fisica, la costruzione, la funzione
              e la diagnosi dei singoli sensori: TPS, MAP, NTC, pickup,
              lambda. Come l'ECU usa questi segnali per calcolare anticipo,
              iniezione e powervalve è trattato nel capitolo Centralina (6.7)
              e Mappe (6.8).
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Sensori;
