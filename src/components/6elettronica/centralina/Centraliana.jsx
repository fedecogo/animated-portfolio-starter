import "./centralina.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
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

const Centralina = () => {
  return (
    <section className="centralina" id="centralina">
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
              Elettronica — Centralina
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La centralina — il cervello del motore a due tempi, dall'anticipo all'iniezione
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Sul motore a due tempi la centralina non è un optional moderno: è il
              componente che decide quando scocca la scintilla, come si muove la valvola
              di scarico e, sui modelli a iniezione diretta, quanto carburante entra
              nel cilindro e in quale momento. La differenza tra una centralina ben
              calibrata e una fuori parametro non si misura solo in termini di prestazioni:
              su un 2T un anticipo sbagliato o una curva errata può forare un pistone
              in pochi secondi a pieno carico.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La storia della centralina 2T parte dal CDI analogico degli anni '70 —
              un circuito a condensatore con curva di anticipo fissa, robusto e semplice —
              e arriva oggi al CDI programmabile multimap dei motocross da competizione,
              fino all'ECU digitale completa dei 2T a iniezione come i KTM/Husqvarna TPI
              e i GasGas EC TPI. In mezzo ci sono decenni di sviluppo silenzioso che
              ha trasformato un circuito passivo in un sistema di controllo in tempo reale
              capace di gestire anticipo, valvola di scarico, arricchimento da temperatura
              e compensazione barometrica per la quota.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Capire la centralina 2T significa capire la fisica dell'accensione,
              la logica della valvola di scarico variabile, il concetto di mappa motore
              e i parametri che un preparatore reale modifica per ottimizzare la curva
              di potenza. Non è elettronica astratta: è meccanica del ciclo termodinamico
              tradotta in bit e curve numeriche.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Cosa controlla la centralina 2T</span>
              <h3>Quattro funzioni fondamentali che determinano come il motore respira e brucia</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Anticipo accensione — la centralina determina esattamente quanti
                  gradi prima del punto morto superiore deve scoccare la scintilla;
                  la curva di anticipo è il parametro di taratura più critico del 2T
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Valvola di scarico (powervalve) — sui motori dotati di valvola
                  variabile dello scarico, la centralina controlla la posizione in base
                  al regime; cambia radicalmente la curva di potenza e l'erogazione
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Iniezione carburante (sui 2T EFI) — i moderni 2T a iniezione
                  usano una ECU completa che gestisce timing e quantità dell'iniezione
                  ai transfer port in funzione di giri, TPS, temperatura e pressione
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Compensazioni — temperatura motore, pressione barometrica (quota),
                  segnale TPS: la centralina adatta la mappa base in tempo reale
                  per mantenere il comportamento ottimale al variare delle condizioni
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
                Schema a blocchi centralina 2T — input: pickup RPM, TPS, sensore
                temperatura, barometrico; processing: CDI/ECU; output: bobina/scintilla,
                servo powervalve, iniettori (EFI); evidenziare il flusso segnale
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Input e output della centralina</span>
            <p>
              Una centralina 2T riceve segnali e produce azioni. Sul lato degli input:
              il pickup al volano (posizione e velocità di rotazione), il sensore di
              posizione farfalla (TPS), la temperatura del liquido di raffreddamento,
              la pressione atmosferica. Sul lato degli output: il segnale di scarica
              alla bobina, il comando al servo della valvola di scarico, e sui modelli
              EFI il timing e il pulsewidth di ogni iniettore. La velocità di elaborazione
              è nell'ordine dei microsecondi — il motore a 12.000 giri non concede margini.
            </p>
          </div>
        </motion.div>

        {/* ── EVOLUZIONE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="evoluzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="evoluzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Evoluzione della tecnologia</span>
            <h3>CDI analogico, CDI programmabile, ECU digitale e 2T EFI — quattro generazioni, stessa missione</h3>
            <p>
              Non esiste "la centralina 2T". Esistono generazioni molto diverse di
              sistemi di controllo, ognuna con capacità, limiti e logica di funzionamento
              propri. Capire da dove viene la tecnologia aiuta a capire cosa fa
              realmente il componente che si ha in mano.
            </p>
          </motion.div>

          <motion.div className="evoluzioneGrid" variants={cardVariants}>
            <div className="tipCard tipAnalogico">
              <div className="tipCardTop">
                <span className="tipBadge badgeAnalogico">CDI Analogico</span>
                <span className="tipSub">anni '70–'90 · curva fissa</span>
              </div>
              <h4>Il condensatore che decide tutto — semplice, robusto, ma senza flessibilità</h4>
              <p>
                Il CDI (Capacitor Discharge Ignition) analogico è il sistema che ha
                dominato i 2T per decenni. Il funzionamento è elementare: la bobina
                di carica dello statore accumula energia in un condensatore a tensioni
                tra 200 e 400 V; quando il pickup al volano riconosce la posizione
                corretta dell'albero, invia un segnale che fa scaricare il condensatore
                attraverso il primario della bobina, generando l'impulso ad alta tensione
                verso la candela. La curva di anticipo è determinata dalla geometria del
                circuito analogico — tipicamente una rete RC — e non è modificabile senza
                intervenire fisicamente sui componenti. Il vantaggio è l'assoluta affidabilità
                meccanica: nessun firmware, nessuna calibrazione, nessun connettore dati.
                Il limite è la rigidità: la stessa curva di anticipo deve funzionare
                in tutte le condizioni di carico, temperatura e quota, senza adattamento.
                Ancora oggi è la scelta sui motori strettamente racing dove la semplicità
                pesa più della flessibilità.
              </p>
            </div>

            <div className="tipCard tipProgrammabile">
              <div className="tipCardTop">
                <span className="tipBadge badgeProgrammabile">CDI Programmabile</span>
                <span className="tipSub">anni '90–oggi · multimap</span>
              </div>
              <h4>Mappe digitali, curve personalizzabili e selezione on-the-fly — la rivoluzione del racing 2T</h4>
              <p>
                Il CDI programmabile sostituisce la rete RC analogica con un microcontrollore
                che legge la posizione RPM dal pickup e seleziona l'anticipo da una tabella
                numerica memorizzata in flash. Questo permette curve di anticipo
                completamente personalizzabili per ogni punto del regime — non solo
                un'unica pendenza, ma un profilo fine giri per giri. I sistemi più usati
                in competizione (Vortex, Zelioni, TM Racing elettronica, Kokusan aftermarket)
                permettono di memorizzare da due a otto mappe diverse selezionabili
                tramite pulsante sul manubrio: una mappa più morbida per terreno scivoloso,
                una più aggressiva per terreno duro, una di sicurezza per condizioni
                di temperatura limite. La programmazione avviene via software su PC
                tramite interfaccia USB o OBD proprietaria. Il parametro principale è
                la tabella anticipo (gradi BTDC per ogni step di RPM), ma i sistemi
                più avanzati permettono anche di modulare l'energia di scarica e di
                gestire la limitazione di giri.
              </p>
            </div>

            <div className="tipCard tipDigitale">
              <div className="tipCardTop">
                <span className="tipBadge badgeDigitale">ECU Digitale</span>
                <span className="tipSub">2000–oggi · powervalve + sensori</span>
              </div>
              <h4>Anticipo, powervalve e compensazioni in tempo reale — l'ECU come centro di controllo integrato</h4>
              <p>
                L'ECU digitale integrata va oltre il semplice controllo dell'anticipo:
                gestisce anche il servo motore della valvola di scarico variabile,
                legge il TPS per modulare la risposta in funzione del carico effettivo
                (non solo del regime), e integra compensazioni per temperatura e pressione
                barometrica. I sistemi come il Kokusan DCU (Digital Control Unit) usato
                su KTM e Husqvarna 2T carburati pre-TPI, o l'unità Yamaha YPVS delle YZ,
                ricevono più segnali contemporaneamente e calcolano la posizione target
                della valvola di scarico con una frequenza di aggiornamento molto più
                alta rispetto ai sistemi meccanici o pneumatici. L'anticipazione dell'apertura
                della valvola di scarico può essere ottimizzata non solo per RPM ma anche
                per carico, permettendo curve di potenza più elastiche. La diagnosi
                dei guasti avviene tramite codici di errore lampeggiati sul quadro
                strumenti o letti con strumenti dedicati.
              </p>
            </div>

            <div className="tipCard tipEFI">
              <div className="tipCardTop">
                <span className="tipBadge badgeEFI">2T EFI</span>
                <span className="tipSub">2018–oggi · KTM TPI · iniezione</span>
              </div>
              <h4>L'iniezione ai transfer port cambia tutto — gestione completa, mappa tridimensionale, lambda in loop chiuso</h4>
              <p>
                Con il KTM 250/300 EXC TPI del 2018, il 2T a iniezione ai transfer port
                è diventato realtà commerciale. L'ECU (inizialmente Kokusan, poi evoluta)
                gestisce due iniettori posizionati ai transfer port (le luci di travaso)
                che iniettano benzina direttamente nell'area di travaso, separando il
                carburante dall'aria aspirata. Il vantaggio rispetto al carburatore è
                radicale: zero stravaganze ai cambi di quota (il sensore barometrico corregge
                automaticamente), nessuna gestione manuale del getto, curva di potenza
                ripetibile in ogni condizione. La mappa è tridimensionale: per ogni
                combinazione di RPM e TPS esiste una cella che definisce il pulsewidth
                degli iniettori (quanto carburante) e l'anticipo (quando scatta la scintilla).
                Sui modelli più recenti è presente un sensore lambda Bosch LSU 4.9 che
                permette la correzione in closed loop del rapporto aria/benzina in determinate
                condizioni di funzionamento. La calibrazione avviene tramite l'app
                KTM Power Tune (via dongle Bluetooth) o tramite la diagnostica dealer.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── ANTICIPO BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="anticipoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="anticipoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">L'anticipo di accensione</span>
            <h3>Il parametro più critico del 2T — gradi BTDC, curva di avanzamento e conseguenze degli errori</h3>
            <p>
              Sul motore a due tempi l'anticipo di accensione non è un dettaglio di
              calibrazione: è la variabile che più di ogni altra determina potenza,
              efficienza e sopravvivenza del pistone. Capire la fisica dietro al numero
              di gradi è indispensabile per interpretare una mappa e per capire perché
              un errore di taratura può essere catastrofico.
            </p>
          </motion.div>

          <motion.div className="anticipoGrid" variants={cardVariants}>
            <div className="anticipoCard">
              <span className="anticipoIdx">01</span>
              <h4>Cos'è l'anticipo e perché il 2T ne ha bisogno più del 4T</h4>
              <p>
                L'anticipo di accensione è il numero di gradi di rotazione dell'albero
                motore prima del Punto Morto Superiore (PMS) in cui avviene la scarica
                della candela. Il ritardo tra la scintilla e il raggiungimento della
                massima pressione di combustione è un fatto fisico: la miscela non brucia
                istantaneamente. Se la scintilla scocca troppo tardi (ritardo), il picco
                di pressione arriva quando il pistone è già in discesa e l'energia si
                perde. Se scocca troppo presto (anticipo eccessivo), il picco di pressione
                arriva quando il pistone è ancora in salita, generando una forza contraria
                al movimento — detonazione — con carichi meccanici e termici violenti.
                Sul 2T questa sensibilità è amplificata: il ciclo di combustione è più
                breve, le temperature in camera sono più alte durante il ciclo e il pistone
                è strutturalmente meno robusto di quello 4T perché deve essere più leggero.
                I valori tipici di anticipo su un 2T da cross vanno dai 10–14° BTDC al minimo
                ai 20–28° BTDC a pieno regime, con il punto di massima potenza che si ottiene
                spesso su una finestra di pochi gradi.
              </p>
            </div>

            <div className="anticipoCard">
              <span className="anticipoIdx">02</span>
              <h4>La curva di anticipo — perché non esiste un valore unico valido per tutti i regimi</h4>
              <p>
                A regime basso il motore ha più tempo per completare la combustione,
                quindi serve meno anticipo: la scintilla può scattare più vicina al PMS.
                Al crescere dei giri, il tempo disponibile per bruciare la miscela si riduce
                (il pistone sale più velocemente), quindi la scintilla deve scattare prima —
                l'anticipo aumenta. Questa relazione non è lineare: esiste una zona critica
                intorno al picco di potenza dove la curva deve essere calibrata con
                precisione per evitare che un eccesso di anticipo a piena potenza produca
                detonazione. La curva di anticipo sul CDI analogico è definita dalla rete
                RC e ha una forma predeterminata; sul CDI programmabile è una tabella
                con decine di punti indipendenti, ognuno modificabile separatamente.
                Un preparatore esperto ottimizza questi punti su banco dinamometrico,
                cercando il massimo anticipo tollerabile (che corrisponde alla massima
                pressione media effettiva) senza entrare in zona di detonazione.
              </p>
            </div>

            <div className="anticipoCard">
              <span className="anticipoIdx">03</span>
              <h4>L'influenza del carico (TPS) — stessa velocità di rotazione, comportamento diverso</h4>
              <p>
                La sola lettura del regime non basta per determinare l'anticipo ottimale.
                Due situazioni a 8000 giri sono fisicamente diverse: motore in accelerazione
                a piena farfalla (alta pressione nel cilindro, carico termico massimo) e
                motore in regime stazionario a farfalla parziale (pressione più bassa, minore
                rischio di detonazione). I CDI più evoluti e le ECU digitali leggono il segnale
                TPS (Throttle Position Sensor) e utilizzano una mappa bidimensionale
                anticipo/RPM/carico invece della sola curva RPM. Questo permette di avanzare
                l'anticipo nei punti a carico parziale — dove c'è più margine — e di essere
                più conservativi a piena farfalla, ottimizzando sia il consumo che la protezione
                del motore nei transitori critici. Sui 2T carburati semplici il TPS non è
                sempre presente, ma i sistemi EFI lo richiedono obbligatoriamente.
              </p>
            </div>

            <div className="anticipoCard">
              <span className="anticipoIdx">04</span>
              <h4>Anticipo eccessivo e detonazione — perché il 2T perdona meno del 4T</h4>
              <p>
                La detonazione (knocking) è l'accensione spontanea e incontrollata di
                parte della miscela ancora non raggiunta dal fronte di fiamma. Sul 4T
                produce rumore, surriscaldamento e nel tempo danni al pistone. Sul 2T
                la situazione è più rapida e spietata: le temperature di camera già elevate,
                la lubrificazione per miscela (l'olio arriva diluito nel carburante, non
                in film separato) e le masse reciprocanti più leggere rendono il pistone
                vulnerabile in tempi brevissimi. Un anticipo anche di 2–3° eccessivo
                a piena potenza può perforare la testa del pistone nel giro di pochi minuti.
                I segnali sono: perdita di potenza progressiva, calore anomalo dell'acqua,
                suono sordo e metallico dal motore. La causa più comune non è solo
                la centralina: carburante di qualità inferiore (ottano insufficiente),
                miscela povera o temperatura dell'acqua troppo alta abbassano la soglia
                di detonazione anche con una mappa nominalmente corretta.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── POWERVALVE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="powervalveBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="powervalveHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Valvola di scarico variabile</span>
            <h3>YPVS, RAVE, PV, RC-Valve — la valvola che allarga la banda di potenza del 2T</h3>
            <p>
              La valvola di scarico variabile è una delle invenzioni più significative
              nella storia del 2T moderno. Senza di essa il motore è ottimizzato per
              un singolo regime; con essa la centralina può modificare la geometria
              del condotto di scarico in tempo reale, allargando la banda di potenza
              utilizzabile da un pilota reale.
            </p>
          </motion.div>

          <motion.div className="powervalveGrid" variants={cardVariants}>
            <div className="powervalveCard">
              <span className="powervalveIdx">01</span>
              <h4>Perché la geometria dello scarico cambia tutto sul 2T</h4>
              <p>
                Sul motore a due tempi l'altezza della luce di scarico determina
                due parametri fondamentali: la durata dell'apertura (quanti gradi
                di rotazione rimane aperta) e l'area di passaggio disponibile per
                i gas. A bassi regimi un'apertura più piccola è vantaggiosa:
                mantiene una migliore pressione nella camera durante la compressione,
                migliora la coppia e riduce il rischio che la miscela fresca sfugga
                dallo scarico prima che la luce si chiuda. A alti regimi invece serve
                la massima apertura per permettere l'evacuazione rapida dei gas e
                sfruttare l'onda di pressione del tubo di espansione. Una valvola
                fissa richiede un compromesso che penalizza entrambi gli estremi;
                la valvola variabile controllata dalla centralina elimina questo compromesso
                adattando la geometria al regime istantaneo.
              </p>
            </div>

            <div className="powervalveCard">
              <span className="powervalveIdx">02</span>
              <h4>YPVS (Yamaha) e RC-Valve (Honda) — i pionieri della valvola servo-controllata</h4>
              <p>
                Yamaha introduce l'YPVS (Yamaha Power Valve System) nel 1983 sulla RD500LC
                e lo affina nel tempo sulle YZ da cross e sulle RZ da strada. Il sistema
                usa un servomotore DC che ruota un cilindro eccentrico nella luce di scarico;
                la posizione è letta da un potenziometro e confrontata con la posizione
                target calcolata dalla ECU in base al regime. L'apertura progressiva segue
                una curva memorizzata: chiusa fino a un regime soglia (tipicamente intorno
                ai 6.000–7.000 giri sul cross), poi si apre linearmente o a gradini
                verso la massima apertura. Honda sviluppa una tecnologia simile
                (RC-Valve, Revolutionary Controlled Exhaust Valve) sulle CR da cross,
                con una logica di controllo a rampa più rapida per adattarsi meglio
                ai transitori. In entrambi i casi il feedback di posizione è essenziale:
                se il potenziometro si guasta, la valvola si blocca in posizione e
                il motore perde parte della banda di potenza senza dare altri segnali evidenti.
              </p>
            </div>

            <div className="powervalveCard">
              <span className="powervalveIdx">03</span>
              <h4>RAVE (Rotax/Bombardier) e PV (KTM/Husqvarna) — valvola pneumatica e centralina separata</h4>
              <p>
                Rotax, fornitore storico di motori 2T per Aprilia, Bombardier e altri,
                sviluppa il sistema RAVE (Rotax Adjustable Variable Exhaust) basato su
                una valvola a lamella azionata dalla pressione dei gas di scarico stessa —
                un sistema prevalentemente meccanico-pneumatico senza servo esterno.
                L'apertura avviene per pressione differenziale: sotto un certo regime
                la pressione non è sufficiente a sollevare la lamella, che rimane abbassata
                riducendo l'apertura della luce. KTM e Husqvarna usano invece un sistema
                ibrido: valvola meccanica governata da una centralina separata (definita
                "PV box") che su alcuni modelli è fisicamente distinta dalla CDI e su
                altri è integrata nell'unità principale. Il sistema KTM PV include un
                sensore di temperatura dell'acqua che modifica la soglia di apertura
                della valvola: a motore freddo la valvola si apre prima (meno aggressività
                nella banda di potenza) per facilitare la gestione nelle fasi di riscaldamento.
              </p>
            </div>

            <div className="powervalveCard">
              <span className="powervalveIdx">04</span>
              <h4>Come la centralina controlla la valvola — mappa di posizione, feedback e fail-safe</h4>
              <p>
                Il controllo della powervalve da parte della centralina segue una logica
                a retroazione (closed loop): l'ECU calcola la posizione target della valvola
                in base al regime corrente (e al TPS sui sistemi più avanzati), invia
                il segnale di comando al servomotore e legge il feedback del potenziometro
                per verificare che la posizione reale corrisponda a quella desiderata.
                Se c'è un errore di posizione persistente (servo bloccato, potenziometro
                fuori range, connettore interrotto), la centralina segnala il guasto
                e può portare la valvola in una posizione di fail-safe — tipicamente
                parzialmente aperta, che garantisce la funzionalità di base del motore
                a scapito della curva di potenza ottimale. La pulizia e il corretto
                azzeramento (reset) del servo dopo ogni operazione di manutenzione
                alla valvola di scarico sono critici: una valvola fisicamente aperta
                ma con il potenziometro che la segnala come chiusa porta la centralina
                a errori di controllo sistematici.
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
            <span className="captionTag">Curva di anticipo e powervalve</span>
            <p>
              Un grafico ideale qui dovrebbe sovrapporre due curve sullo stesso asse RPM:
              la curva di anticipo (gradi BTDC sull'asse Y sinistro) e la posizione
              della powervalve (percentuale apertura sull'asse Y destro). Si vedrebbe
              come l'anticipo cresce quasi linearmente con i giri fino al plateau,
              mentre la powervalve ha una soglia netta sotto la quale rimane chiusa
              e poi si apre rapidamente nella zona del picco di potenza. È questa
              combinazione — anticipo e geometria scarico ottimizzati simultaneamente —
              che produce la banda di potenza ampia di un 2T moderno.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Grafico RPM vs anticipo (°BTDC) + posizione powervalve (%) —
                doppio asse Y, evidenziare la zona di transizione critica e il
                picco di potenza; confronto mappa stock vs mappa racing
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── MAPPATURA BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="mappatureBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="mappatureHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Mappatura e calibrazione</span>
            <h3>Mappe differenziate, strumenti di calibrazione, EFI in closed loop — come si ottimizza davvero una centralina 2T</h3>
            <p>
              Avere una centralina programmabile non significa automaticamente avere
              il motore calibrato correttamente. La mappatura richiede strumenti,
              metodo e una comprensione chiara di cosa ogni parametro produce nella
              realtà del cilindro.
            </p>
          </motion.div>

          <motion.div className="mappatureGrid" variants={cardVariants}>
            <div className="mappatureCard">
              <span className="mappatureIdx">01</span>
              <h4>Mappe differenziate per terreno e condizioni — non una, ma una libreria</h4>
              <p>
                I CDI programmabili da competizione memorizzano tipicamente da 2 a 8 mappe
                selezionabili in tempo reale tramite un pulsante sul manubrio o una mappetta
                fisica. La logica è pratica: terreno scivoloso richiede una mappa
                con anticipo ritardato (meno scatto di potenza in uscita dalle curve),
                una progressione più morbida della valvola di scarico e in alcuni sistemi
                una limitazione del picco di giri. Terreno duro e compatto permette
                una mappa più aggressiva con anticipo massimizzato e powervalve che si
                apre prima. Le condizioni climatiche estreme — temperatura molto alta
                o quota elevata — richiedono adattamenti specifici: a quota la densità
                dell'aria è minore, la miscela si arricchisce e può essere necessario
                ritardare leggermente l'anticipo per evitare detonazione con un motore
                che "vede" meno ossigeno per calore prodotto.
              </p>
            </div>

            <div className="mappatureCard">
              <span className="mappatureIdx">02</span>
              <h4>Strumenti di calibrazione — banco dinamometrico, software e interfacce dealer</h4>
              <p>
                La calibrazione corretta di una mappa 2T richiede un banco dinamometrico
                (dyno) che misuri potenza e coppia in uscita all'albero o alla ruota
                in funzione del regime, con la possibilità di variare il carico per
                simulare diverse condizioni di utilizzo. Il preparatore modifica la mappa
                un parametro alla volta, osserva la risposta sul grafico di potenza
                e converge verso l'ottimo. I software proprietari (Vortex Map Selector,
                Zelioni MapSel, KTM Power Tune) permettono la connessione alla centralina
                tramite interfaccia USB o dongle Bluetooth e la modifica delle tabelle
                in tempo reale o offline. Per i 2T EFI come il TPI, il dealer KTM
                dispone di una diagnostica (KTM Diagnostics Tool, KDTE) che permette
                di leggere i codici errore, visualizzare i sensori in tempo reale
                e modificare le mappe base entro i limiti previsti dalla casa.
              </p>
            </div>

            <div className="mappatureCard">
              <span className="mappatureIdx">03</span>
              <h4>Compensazione temperatura e barometrica — il motore che si adatta da solo</h4>
              <p>
                Le ECU digitali e le centraline dei 2T EFI integrano algoritmi di
                compensazione che modificano la mappa base in funzione di due variabili
                ambientali critiche. La temperatura del liquido di raffreddamento influisce
                sul rischio di detonazione: motore freddo, densità di miscela nell'aspirazione
                diversa, maggiore viscosità dell'olio di miscelazione. La centralina
                può richiedere un arricchimento temporaneo in fase di riscaldamento
                (cold start enrichment) e un anticipo leggermente ridotto fino al
                raggiungimento della temperatura operativa. La pressione barometrica
                (sensore MAP o BARO) corregge automaticamente la quantità di carburante
                iniettata in funzione dell'altitudine: a 2000 metri l'aria è più rarefatta
                del 20–25% rispetto al livello del mare, e senza compensazione la miscela
                sarebbe troppo ricca con conseguente perdita di potenza e incremento
                dell'inquinamento da HC non combusti.
              </p>
            </div>

            <div className="mappatureCard">
              <span className="mappatureIdx">04</span>
              <h4>Closed loop e sensore lambda sul 2T EFI — il 2T che corregge da solo il lambda</h4>
              <p>
                I 2T EFI più avanzati (KTM/Husqvarna TPI di ultima generazione, GasGas EC TPI)
                integrano un sensore lambda a banda larga Bosch LSU 4.9 nel condotto
                di scarico. Il sensore misura il rapporto aria/benzina (lambda) nei gas
                esausti e restituisce un segnale proporzionale all'ECU che può correggere
                il pulsewidth degli iniettori per avvicinarsi al lambda target impostato
                nella mappa. Questo sistema (closed loop) è attivo solo in determinate
                condizioni — tipicamente carico parziale e temperatura stabilizzata —
                mentre a piena potenza la gestione torna in open loop (mappa fissa) per
                ragioni di sicurezza. L'integrazione del lambda riduce sensibilmente
                le variazioni di comportamento tra un pieno e l'altro, tra temperature
                diverse e tra differenti qualità di carburante, avvicinando il 2T alla
                consistenza tipicamente associata ai 4T ad iniezione.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="diagnosiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnosiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e sintomi</span>
            <h3>Powervalve bloccata, perdita di banda, mappa errata e codici di errore — come leggere i guasti della centralina 2T</h3>
            <p>
              I guasti della centralina si manifestano in modi precisi e leggibili
              se si sa cosa cercare. La difficoltà è che molti sintomi imitano
              problemi carburazione o meccanici — sapere distinguere è fondamentale
              prima di intervenire.
            </p>
          </motion.div>

          <motion.div className="diagnosiGrid" variants={cardVariants}>
            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Perdita della banda di potenza — il motore tira regolare ma manca il picco</h4>
              <p>
                Se il motore eroga bene ai bassi e ai medi ma non entra mai in "banda"
                (il picco di potenza del 2T), il primo indiziato è la powervalve.
                Una valvola bloccata in posizione chiusa o parzialmente aperta elimina
                esattamente il comportamento in zona alta. Verificare: connettore del servo
                valvola, potenziometro di posizione (verifica con multimetro la variazione
                di resistenza durante il movimento manuale), stato fisico della valvola
                (depositi carboniosi che la bloccano meccanicamente). Il motore con CDI
                defunto o segnale pickup deteriorato può dare la stessa sensazione con
                perdita di anticipo: manca la spinta, ma l'erogazione è piatta e non
                si sente il picco caratteristico.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Mappa troppo aggressiva o errata — calore anomalo e rischio detonazione</h4>
              <p>
                Dopo una rimappatura o dopo aver installato un CDI aftermarket con mappa
                non calibrata per quel motore specifico, il motore può mostrare: temperatura
                dell'acqua che sale più del normale, un suono leggermente metallico sotto
                carico (knocking), perdita di potenza progressiva in sessione prolungata.
                Questi sono segni di anticipo eccessivo o miscela povera. Controllare
                il getto del carburatore (se presente) prima di modificare la mappa:
                un motore a miscela povera detonerà anche con un anticipo nominalmente
                corretto. Il test sicuro è verificare la temperatura dell'acqua su
                sessione di 20 minuti con la mappa attuale e confrontarla con i valori
                normali per quel motore.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Avviamento difficile a caldo con 2T EFI — spesso sensore temperatura o codice errore</h4>
              <p>
                I 2T EFI hanno una procedura di avviamento gestita dall'ECU che include
                un arricchimento temporaneo (cold start) e una gestione specifica
                del minimo nei primi minuti. Se il sensore di temperatura del liquido
                è difettoso e riporta una temperatura errata (tipicamente bloccato
                su un valore freddo), l'ECU applica sempre l'arricchimento da avvio
                freddo anche con il motore già in temperatura: miscela troppo ricca,
                candela che si appesantisce, avviamento difficile e fumo nero.
                Il primo passo è leggere i codici errore con il tool diagnostico:
                su KTM TPI i codici lampeggiati dal segnale LED indicano il sistema
                in errore con una precisione sufficiente per isolare il componente
                prima di intervenire.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Verifica del segnale pickup — la fonte di tutto il timing sul 2T</h4>
              <p>
                Il pickup (sensore di posizione al volano) è il segnale primario
                da cui la centralina ricava sia il regime che il punto esatto di
                accensione. Un pickup usurato, con traferro errato o con il connettore
                ossidato produce un segnale degradato: accensione irregolare, mancate,
                comportamento instabile ai bassi. La verifica si fa con un oscilloscopio
                (o un multimetro in AC): con il motore girato a mano o con il motorino
                di avviamento, il pickup deve produrre un segnale sinusoidale pulito
                con ampiezza nell'ordine dei volt. Un traferro corretto si misura
                con uno spessimetro: i valori tipici sono 0,3–0,5 mm tra la punta
                del sensore e il dente del volano; fuori da questo range il segnale
                si degrada anche con il sensore fisicamente integro.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Lettura parametri in tempo reale sul 2T EFI — cosa guardare durante la sessione</h4>
              <p>
                Con il tool diagnostico collegato durante la sessione (o con un datalogger),
                i parametri fondamentali da monitorare su un 2T EFI sono: RPM istantaneo,
                posizione TPS (0–100%), temperatura liquido raffreddamento, pressione
                barometrica, lambda (se presente), tensione batteria e codici errore attivi.
                Una lettura TPS bloccata su un valore fisso (il potenziometro è difettoso
                o il cavo strozza il movimento) fa credere all'ECU che la farfalla sia
                sempre in quella posizione: eroga correttamente in quel punto ma sbaglia
                in tutti gli altri. Un lambda sistematicamente fuori scala indica problema
                di miscela, sonda usurata o perdita d'aria nel collettore.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeIntervallo">Intervallo</span>
              <h4>Manutenzione preventiva della centralina e dei sensori — connettori, pulizia valvola e reset</h4>
              <p>
                La centralina stessa raramente si guasta in modo spontaneo: è molto
                più comune che i problemi vengano dai sensori e dai connettori che
                la alimentano. A ogni manutenzione importante: aprire i connettori
                del pickup, del TPS, del sensore temperatura, del servo powervalve
                — controllare la presenza di ossidazione e trattare con grasso
                dielettrico. La valvola di scarico va pulita dai depositi carboniosi
                a ogni ispezione (ogni 20–40 ore su un cross da gara): una valvola
                sporca non si muove liberamente e nessun servo è in grado di forzarne
                il movimento senza danneggiarsi. Dopo pulizia e rimontaggio, eseguire
                il reset del servo (procedura specificata nel manuale del modello)
                per riallineare il potenziometro con la posizione meccanica reale.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CARDS GRID ───────────────────────────────────────────────────── */}
        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Idea chiave</span>
            <h3>Sul 2T la centralina non gestisce il comfort — gestisce la sopravvivenza del pistone e la forma della curva di potenza</h3>
            <p>
              Non è retorica: un'anticipo sbagliato di pochi gradi a pieno carico su
              un 2T da cross produce danni meccanici in tempi che sul 4T sarebbero
              impensabili. La centralina non è un computer di bordo — è il garante
              termodinamico del ciclo di combustione. Capirla è capire come il motore
              sopravvive alle sue stesse prestazioni.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Errore classico</span>
            <h3>Installare un CDI racing "più potente" senza calibrarlo sul motore specifico e sul carburante usato</h3>
            <p>
              Un CDI programmabile non è automaticamente meglio di uno stock ben calibrato.
              Una mappa racing generica progettata per un motore specificamente preparato,
              montata su un motore standard con carburante pump e getto originale,
              è un rischio concreto di detonazione. Il guadagno di potenza di un CDI
              aftermarket si ottiene con la calibrazione, non con l'acquisto.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>Qui il focus è sulla centralina come unità di controllo — sensori, mappe e powervalve hanno profondità dedicate</h3>
            <p>
              Questo capitolo tratta l'evoluzione, la logica di funzionamento, i parametri
              di anticipo, il controllo della powervalve e la mappatura della centralina 2T.
              I sensori singoli (TPS, lambda, temperatura), l'accensione come componente
              fisico (bobina, candela, pickup) e le mappe come capitolo separato
              sono trattati nelle sezioni dedicate del capitolo elettronica.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Centralina;
