import "./mappe.scss";
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
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const Mappe = () => {
  return (
    <section className="mappe" id="mappe">
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
              Elettronica — Mappe
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Le mappe motore — struttura dei dati, calibrazione sul banco e ottimizzazione per il 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Una mappa motore non è un "programma". È una struttura di dati —
              una tabella di numeri — che la centralina consulta in tempo reale per
              sapere cosa fare in ogni condizione di funzionamento. Ogni cella della
              tabella contiene un valore: quanti gradi di anticipo, quanto carburante,
              a che punto aprire la powervalve. La centralina legge il regime e la
              posizione della farfalla, individua la cella corrispondente nella mappa,
              interpola tra i valori adiacenti e genera l'azione fisica. Il tutto
              in microsecondi, migliaia di volte al minuto.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Sul motore a due tempi la mappa è ancora più critica che sul quattro tempi.
              Il ciclo è più breve, il margine termico più stretto, la sensibilità
              all'anticipo più acuta. Una cella sbagliata di tre gradi nel punto di
              picco di potenza non produce solo meno giri sul banco: può danneggiare
              il pistone in pochi minuti di utilizzo a pieno carico. Allo stesso tempo,
              una mappa troppo conservativa su un motore ben preparato lascia sulla
              pista secondi reali che appartengono al motore ma che la calibrazione
              non gli permette di esprimere.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Questo capitolo esplora la mappa come oggetto tecnico: la struttura dati
              sottostante (lookup table, assi, interpolazione), i parametri che contiene
              (anticipo, powervalve, iniezione, limitatore), i software professionali
              usati per modificarla (da Vortex a KTM Power Tune), il banco prova come
              strumento di misura oggettiva e la metodologia di calibrazione che passa
              da una mappa OEM di sicurezza a una mappa racing su misura.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Fondamenti della mappa</span>
              <h3>Quattro concetti per leggere una mappa come la legge la centralina</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Lookup table — la mappa è un array bidimensionale indicizzato
                  per regime (RPM) e carico (TPS o MAP); ogni cella contiene
                  il valore del parametro controllato in quel punto operativo
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Interpolazione — tra una cella e l'altra la centralina calcola
                  il valore intermedio in tempo reale per interpolazione lineare
                  o bilineare, garantendo continuità del controllo anche tra
                  i punti esplicitamente definiti nella mappa
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Risoluzione della mappa — più breakpoint sugli assi (RPM e TPS)
                  significa più granularità e controllo fine; una mappa 16×16
                  ha 256 celle, una 32×32 ne ha 1024; la risoluzione dell'hardware
                  e la memoria disponibile determinano il limite pratico
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Mappa base + correzioni — le ECU avanzate applicano la mappa
                  base e poi sommano correzioni da sensori aggiuntivi: temperatura,
                  quota barometrica, lambda; il valore finale è la somma
                  algebrica di questi contributi
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
                Visualizzazione 3D di una mappa anticipo 2T — asse X: RPM (1000–13000),
                asse Y: TPS (0–100%), asse Z: gradi BTDC; evidenziare il picco
                di anticipo nella zona di massima potenza e il plateau ai bassi carichi
              </span>
              <span className="placeholderSub">
                Sostituisci con &lt;img&gt; o rendering 3D interattivo
              </span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Mappa in tre dimensioni</span>
            <p>
              Una mappa anticipo visualizzata in 3D mostra immediatamente la sua
              logica interna: l'anticipo cresce con il regime fino a un picco intorno
              alla zona di massima potenza, poi scende leggermente per proteggere
              il motore ai giri più alti dove la miscela residua è più calda.
              Sull'asse del carico (TPS) l'anticipo è più basso a farfalla parziale
              — dove il rischio di detonazione è ridotto — e raggiunge i valori
              più critici solo a farfalla completamente aperta e giri alti.
              Ogni "collina" e ogni "valle" in questo grafico corrisponde a una
              decisione di calibrazione presa da un tecnico o ottimizzata su banco.
            </p>
          </div>
        </motion.div>

        {/* ── STRUTTURA DATI BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="strutturaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="strutturaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Struttura matematica</span>
            <h3>Lookup table, assi, interpolazione e risoluzione — come è fatto un file di mappa dentro la centralina</h3>
            <p>
              Prima di capire come si calibra una mappa bisogna capire cosa è.
              Non è un codice che "gira": è una struttura dati statica che la centralina
              legge ad ogni ciclo. La fisica dietro questa struttura determina
              sia i limiti che le possibilità di ogni sistema di mappatura.
            </p>
          </motion.div>

          <motion.div className="strutturaGrid" variants={cardVariants}>
            <div className="strutturaCard">
              <span className="strutturaIdx">01</span>
              <h4>La lookup table — un array di numeri con due ingressi e un'uscita</h4>
              <p>
                Una mappa motore è nella sua forma più pura una lookup table (LUT):
                una struttura dati bidimensionale dove ogni riga corrisponde a un
                valore di RPM e ogni colonna a un valore di carico (TPS o pressione
                assoluta nel collettore, MAP). La cella all'intersezione contiene
                il valore del parametro controllato in quel preciso punto operativo.
                Ogni volta che il motore gira, la centralina legge RPM e TPS,
                trova la cella corrispondente nella tabella e usa quel numero per
                generare il segnale di controllo. Il processo avviene ogni singolo
                ciclo del motore — su un 2T a 10.000 giri, 167 volte al secondo.
                Dal punto di vista del firmware, la LUT è implementata in C come
                array bidimensionale di interi a 8 o 16 bit, memorizzata in flash
                non volatile e letta in RAM all'avvio. La modifica della mappa
                equivale alla scrittura di nuovi valori in queste celle tramite
                interfaccia seriale o USB protetta da checksum.
              </p>
            </div>

            <div className="strutturaCard">
              <span className="strutturaIdx">02</span>
              <h4>Gli assi della mappa — breakpoint, risoluzione e copertura del range operativo</h4>
              <p>
                Gli assi della mappa non sono continui: sono array di valori discreti
                detti breakpoint. L'asse RPM di una mappa anticipo 2T tipica ha
                breakpoint ogni 250–500 giri (es. 1000, 1500, 2000 … 12.000 giri),
                per un totale di 16–32 punti. L'asse carico/TPS ha da 8 a 16 punti
                (es. 0%, 10%, 20%, 30%, 50%, 70%, 90%, 100%). La scelta dei breakpoint
                non è arbitraria: devono essere più fitti nelle zone dove il parametro
                cambia rapidamente (transizione powervalve, zona di picco di potenza)
                e più radi dove il comportamento è piatto. Una mappa con breakpoint
                mal distribuiti può avere ottimi valori nelle celle ma produrre
                transizioni brusche tra una zona e l'altra — un errore di calibrazione
                spesso invisibile guardando le singole celle ma evidente sul banco
                o su strada.
              </p>
            </div>

            <div className="strutturaCard">
              <span className="strutturaIdx">03</span>
              <h4>Interpolazione bilineare — come la centralina calcola i valori tra le celle</h4>
              <p>
                Quando il punto operativo del motore cade tra quattro celle adiacenti
                della mappa (il caso normale, dato che RPM e TPS variano continuamente),
                la centralina calcola il valore corretto per interpolazione bilineare:
                prima interpola linearmente lungo l'asse RPM tra le due celle della
                riga superiore e le due della riga inferiore, poi interpola il risultato
                lungo l'asse TPS. Il risultato è un valore continuo che varia in modo
                fluido tra i punti della mappa. Questo significa che anche una mappa
                con pochi breakpoint può produrre un comportamento fluido — a patto
                che i valori alle celle siano coerenti con la forma della curva reale
                del motore. Celle con salti improvvisi di valore producono discontinuità
                nel comportamento anche con interpolazione attiva, generando quei "gradini"
                di erogazione che su un 2T da cross si sentono chiaramente in uscita
                dalla curva.
              </p>
            </div>

            <div className="strutturaCard">
              <span className="strutturaIdx">04</span>
              <h4>Formato del file e checksum — cosa contiene fisicamente un file di mappa</h4>
              <p>
                Un file di mappa per CDI programmabile (es. formato Vortex .vmap o
                Kokusan .hex) è un file binario di pochi kilobyte. Contiene: un header
                con l'identificativo del modello ECU, i valori dei breakpoint degli assi,
                i valori delle celle della mappa anticipo, i valori della mappa powervalve
                (se presente), la soglia del limitatore di giri e un checksum (tipicamente
                CRC-16 o CRC-32) che la centralina verifica all'avvio per rilevare
                file corrotti o modificati manualmente. Il software di calibrazione
                ricalcola automaticamente il checksum ad ogni salvataggio. Aprire
                il file binario con un editor esadecimale rivela esattamente questa
                struttura: i valori delle celle sono leggibili come byte consecutivi
                nell'ordine row-major (prima riga completa, poi seconda, ecc.).
                Alcune ECU open source (es. basate su Arduino o STM32) usano formati
                JSON o CSV per le mappe, rendendo l'editing diretto possibile anche
                senza software proprietario.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── PARAMETRI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="parametriBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="parametriHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Parametri mappabili</span>
            <h3>Anticipo, powervalve, pulsewidth EFI, phasing e limitatore — tutto ciò che una mappa 2T può controllare</h3>
            <p>
              Non esiste "la mappa" in senso singolare: ogni parametro controllato
              dalla centralina ha la sua tabella. Un sistema avanzato gestisce
              cinque o più mappe distinte che operano simultaneamente e in modo coordinato.
            </p>
          </motion.div>

          <motion.div className="parametriGrid" variants={cardVariants}>
            <div className="tipCard tipAnticipo">
              <div className="tipCardTop">
                <span className="tipBadge badgeAnticipo">Anticipo</span>
                <span className="tipSub">°BTDC · 2D o 3D</span>
              </div>
              <h4>La mappa anticipo — il parametro fondamentale, critico su tutto il range di RPM</h4>
              <p>
                La mappa anticipo definisce quanti gradi prima del PMS scocca la scintilla
                per ogni combinazione di RPM e carico. Su un CDI semplice è monodimensionale
                (solo RPM); su una ECU avanzata è tridimensionale (RPM × TPS).
                Valori tipici su un 2T da cross: 12–14° BTDC al minimo, crescita progressiva
                fino a 22–28° BTDC nella zona di picco di potenza (7.000–10.000 giri
                a seconda del motore), con una lieve riduzione ai giri massimi per
                proteggere la testa dalla detonazione post-picco. Ogni punto modificato
                di 1° produce una variazione misurabile di potenza e temperatura.
              </p>
            </div>

            <div className="tipCard tipPowervalve">
              <div className="tipCardTop">
                <span className="tipBadge badgePowervalve">Powervalve</span>
                <span className="tipSub">% apertura · vs RPM + TPS</span>
              </div>
              <h4>La mappa powervalve — posizione target del servo in funzione di regime e carico</h4>
              <p>
                La mappa powervalve definisce la posizione target (in percentuale
                di apertura, o in step del servo) per ogni punto operativo.
                I modelli più semplici usano solo l'asse RPM: la valvola si apre
                quando si supera una soglia di giri, con una rampa più o meno ripida.
                I sistemi avanzati usano una mappa 2D (RPM × TPS): a basso carico
                la valvola si apre prima per migliorare la guidabilità, a pieno carico
                si apre più tardi per massimizzare il picco. La coordinazione tra
                mappa anticipo e mappa powervalve è critica: un'apertura della valvola
                senza l'anticipo adeguato in quella zona produce un cambio di comportamento
                brusco e termicamente stressante.
              </p>
            </div>

            <div className="tipCard tipPulsewidth">
              <div className="tipCardTop">
                <span className="tipBadge badgePulsewidth">Pulsewidth EFI</span>
                <span className="tipSub">ms · 3D RPM×TPS · 2T EFI</span>
              </div>
              <h4>La mappa di iniezione — durata del polso per ogni cella della griglia operativa</h4>
              <p>
                Sui 2T EFI (KTM/Husqvarna TPI, GasGas EC TPI) la mappa di iniezione
                è la tabella più importante per la gestione del carburante. Definisce
                la durata del polso di apertura degli iniettori (pulsewidth, in millisecondi)
                per ogni combinazione RPM × TPS. Dalla durata del polso, con la portata
                nominale dell'iniettore (in cc/min), si ricava la quantità di carburante
                iniettato per ciclo. La mappa base è calcolata partendo da un modello
                VE (Volumetric Efficiency) del motore: per ogni punto si stima quanta
                aria entra nel cilindro e si calcola il carburante necessario per
                ottenere il lambda target. Poi si corregge empiricamente sul banco.
                Una cella sottostimata (troppo poco carburante) produce miscela povera
                e rischio detonazione; una sovrastimata produce miscela ricca, fumo,
                perdita di potenza e ostruzione della candela.
              </p>
            </div>

            <div className="tipCard tipPhasing">
              <div className="tipCardTop">
                <span className="tipBadge badgePhasing">Injection Phasing</span>
                <span className="tipSub">°ATDC · timing iniezione</span>
              </div>
              <h4>Il timing di iniezione — quando nel ciclo sparare il carburante per massimizzare la miscelazione</h4>
              <p>
                Sui 2T EFI con iniezione ai transfer port non basta sapere quanto
                carburante iniettare: bisogna sapere anche quando. Il phasing (timing
                di iniezione) definisce il momento del ciclo in cui l'iniettore si apre,
                espresso in gradi dopo il punto morto inferiore (ATDI) o relativo
                all'apertura della luce di travaso. Iniettare durante l'apertura della
                luce di travaso garantisce che il carburante venga trascinato dal flusso
                d'aria verso la camera; iniettare troppo tardi significa che parte del
                carburante rimane nel transfer port e viene lavata all'esterno nello
                scavenging del ciclo successivo — corto circuito del carburante, perdita
                di efficienza e aumento delle emissioni HC. Il phasing ottimale varia
                con il regime: a giri bassi il tempo disponibile è maggiore, a giri
                alti l'iniettore deve aprirsi prima.
              </p>
            </div>

            <div className="tipCard tipLimitatore">
              <div className="tipCardTop">
                <span className="tipBadge badgeLimitatore">Limitatore</span>
                <span className="tipSub">RPM · soft cut / hard cut</span>
              </div>
              <h4>Il limitatore di giri — hard cut, soft cut e la strategia per proteggere senza perdere tempo</h4>
              <p>
                Il limitatore di giri è il parametro più semplice in assoluto: un singolo
                valore di RPM oltre il quale la centralina interviene. Ma la strategia
                di intervento è meno banale. L'"hard cut" elimina completamente le scintille
                oltre il limite: efficace ma produce un taglio brusco che sul 2T può
                essere destabilizzante in frenata con cambio scalato. Il "soft cut" inizia
                a saltare scintille in modo progressivo alcune centinaia di giri prima
                del limite massimo: l'effetto è un plateau morbido che avvisa il pilota
                senza interrompere bruscamente l'erogazione. Alcuni CDI programmabili
                permettono di definire sia la soglia del soft cut che quella dell'hard cut,
                e la percentuale di scintille eliminate nel range di soft cut.
                Impostare il limitatore troppo basso taglia la potenza sul picco;
                troppo alto rischia di danneggiare il motore per sovraregime.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── SOFTWARE BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="softwareBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="softwareHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Software e strumenti di calibrazione</span>
            <h3>Vortex, KTM Power Tune, GET, Kokusan — i programmi reali usati per mappare i 2T</h3>
            <p>
              Non esiste un solo software universale per mappare un 2T. Ogni sistema
              ha i propri strumenti, i propri formati di file e le proprie interfacce.
              Conoscere cosa esiste e come funziona ogni piattaforma è il primo passo
              prima di sedersi davanti a uno schermo con un file di mappa aperto.
            </p>
          </motion.div>

          <motion.div className="softwareGrid" variants={cardVariants}>
            <div className="softwareCard">
              <span className="softwareIdx">01</span>
              <h4>Vortex — lo standard del racing 2T carburato europeo</h4>
              <p>
                Vortex è un'azienda italiana (Padova) che produce CDI programmabili
                per moto da competizione 2T: KTM, Husqvarna, TM Racing, Beta, Sherco
                e altri. Il software "Vortex PC Software" (Windows) si connette alla
                centralina tramite interfaccia USB proprietaria e permette di visualizzare
                e modificare la tabella anticipo (fino a 32 punti sull'asse RPM),
                la mappa powervalve, la soglia del limitatore e il numero di mappe
                selezionabili. L'interfaccia mostra la curva anticipo come grafico
                XY modificabile trascinando i punti con il mouse, o come tabella
                numerica per chi preferisce l'input diretto. Le mappe si salvano
                come file binari firmati con CRC che vengono flashati nella centralina
                in pochi secondi. Vortex offre anche un servizio di mappe ufficiali
                pre-calibrate per i principali modelli racing, disponibili sul portale
                dealer come punto di partenza per ulteriori ottimizzazioni.
              </p>
            </div>

            <div className="softwareCard">
              <span className="softwareIdx">02</span>
              <h4>KTM Power Tune — l'app che porta la mappatura dello smartphone sulla pista</h4>
              <p>
                KTM Power Tune è l'applicazione ufficiale (iOS e Android) per la
                gestione delle mappe sui modelli KTM e Husqvarna TPI (Transfer Port
                Injection) e su alcuni modelli carburati con CDI compatibile.
                Si connette tramite un dongle Bluetooth proprietario che si inserisce
                nel connettore diagnostico OBD della moto. L'app permette di selezionare
                tra le mappe pre-caricate (tipicamente 3–5 mappe ufficiali KTM per
                condizioni diverse: standard, enduro soft, enduro hard, off-road),
                di monitorare i parametri del motore in tempo reale (RPM, temperatura,
                TPS, tensione batteria) e — su account dealer attivato — di modificare
                le mappe entro i limiti imposti dal costruttore. Le mappe complete
                (non limitate) sono accessibili ai dealer ufficiali tramite il portale
                KTM Diagnostics Tool (KDTE), che permette anche la lettura e il reset
                dei codici di errore, l'adattamento dei sensori e l'aggiornamento
                del firmware della centralina.
              </p>
            </div>

            <div className="softwareCard">
              <span className="softwareIdx">03</span>
              <h4>GET e Athena — sistemi aftermarket per enduro e cross con accesso aperto</h4>
              <p>
                GET (GEnitaly, italiana) e Athena (italiana, Brescia) producono sistemi
                di mappatura aftermarket che si posizionano tra il CDI stock e i sistemi
                racing puri. Il sistema GET EVO include una centralina aftermarket con
                interfaccia USB e software PC che permette accesso completo a tutte
                le tabelle: anticipo, powervalve, limitatore, mappe di correzione temperatura.
                Il vantaggio rispetto ai CDI OEM è la trasparenza totale: non ci sono
                restrizioni sui valori modificabili e la documentazione tecnica è
                disponibile al preparatore. Athena produce il "Programming Box",
                un modulo che si interpone tra la centralina originale e il cablaggio
                e permette di traslare la curva di anticipo e di powervalve senza
                sostituire la centralina — una soluzione di retrofit per moto che
                non hanno CDI programmabile di serie. Entrambi i sistemi dispongono
                di funzione di data logging integrata per la correlazione mappa-pista.
              </p>
            </div>

            <div className="softwareCard">
              <span className="softwareIdx">04</span>
              <h4>Kokusan e sistemi OEM — il firmware che non si tocca ma che si può leggere</h4>
              <p>
                Kokusan (Denso Group) è il fornitore giapponese che produce le ECU
                montate di serie su KTM, Husqvarna, Honda e altri costruttori.
                Le centraline Kokusan non sono direttamente programmabili dall'utente
                finale: il firmware è sigillato e le mappe di base sono scritte in
                fabbrica su una flash protetta. Tuttavia, tramite l'interfaccia OBD
                e i tool dealer (Kokusan Diagnostic Tool, o il KDTE nel caso KTM),
                è possibile leggere la versione del firmware, i parametri di funzionamento
                in tempo reale e — su alcuni modelli — selezionare mappe pre-caricate.
                La comunità di preparatori indipendenti ha sviluppato nel tempo metodi
                di lettura ("dump") della flash tramite interfacce JTAG o BDM che
                permettono di estrarre il file binario completo, analizzarlo con
                disassembler come IDA Pro o Ghidra e identificare la posizione
                delle tabelle di mappa nella memoria per modificarle direttamente.
                È una pratica tecnica avanzata, non supportata ufficialmente e che
                richiede competenze di reverse engineering firmware.
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
            <span className="captionTag">Software di mappatura</span>
            <p>
              Un buon screenshot qui dovrebbe mostrare l'interfaccia di un software
              di calibrazione con la griglia della mappa aperta: righe per RPM,
              colonne per TPS, celle con i valori numerici dell'anticipo, e il grafico
              tridimensionale corrispondente generato in tempo reale. Questa è la vista
              con cui lavora un preparatore: modificare una cella, vedere il grafico
              cambiare, flashare la mappa, fare un pull sul banco, confrontare la curva
              di potenza prima e dopo. Il ciclo si ripete decine di volte per arrivare
              alla mappa finale. Non è magia: è iterazione sistematica con dati oggettivi.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Screenshot software di mappatura (Vortex o KTM Power Tune) —
                tabella mappa aperta, grafico 3D anticipo, pannello parametri laterale;
                evidenziare la cella attiva e il cursore RPM live
              </span>
              <span className="placeholderSub">
                Sostituisci con &lt;img&gt; o screen recording
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── BANCO PROVA BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="bancoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="bancoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il banco dinamometrico</span>
            <h3>Banco motore e banco a rulli — come si misura oggettivamente l'effetto di una modifica alla mappa</h3>
            <p>
              La mappa non si valuta a sensazione: si misura. Il banco dinamometrico
              è lo strumento che trasforma una modifica numerica in una curva di potenza
              oggettiva, ripetibile e confrontabile. Senza banco, la calibrazione
              è cieca — si sposta una cella e non si sa se si è guadagnato o perso.
            </p>
          </motion.div>

          <motion.div className="bancoGrid" variants={cardVariants}>
            <div className="bancoCard">
              <span className="bancoIdx">01</span>
              <h4>Banco motore vs banco a rulli — dove si misurano la coppia e la potenza reali</h4>
              <p>
                Il banco motore (engine dyno) vincola il motore estratto dal telaio
                a un freno idraulico o elettromagnetico che misura la coppia direttamente
                all'albero. È il più preciso: nessuna perdita di trasmissione, controllo
                completo del carico, possibilità di fissare il regime a qualsiasi punto
                per mappatura stazionaria. Il banco a rulli (chassis dyno, banco
                ad inerzia o a freno) misura alla ruota posteriore: include le perdite
                di frizione, cambio, catena e pneumatico. È meno preciso ma permette
                di testare la moto completa nelle condizioni reali di utilizzo, inclusa
                la risposta del cambio e la trazione. Per la mappatura fine del 2T
                il banco motore è lo strumento di riferimento; per la verifica finale
                del comportamento su strada si usa il banco a rulli. La differenza
                tipica tra potenza all'albero e potenza alla ruota su un 2T da cross
                è del 10–15%, principalmente per le perdite nella trasmissione primaria
                e nella catena.
              </p>
            </div>

            <div className="bancoCard">
              <span className="bancoIdx">02</span>
              <h4>Cosa si misura — coppia, potenza, AFR, temperatura e BMEP</h4>
              <p>
                Un banco prova per mappatura 2T produce almeno quattro curve simultanee
                durante ogni "pull" (singola accelerazione da minimo a massimo regime):
                coppia (Nm) sull'asse primario, potenza (kW o CV) come derivata della
                coppia per il regime, rapporto aria/benzina (AFR o lambda) letto da
                una sonda Bosch LSU 4.9 nel condotto di scarico, e temperatura
                dell'acqua/candela. I sistemi più completi aggiungono la pressione
                in camera (misurata con sensore piezoelettrico nella candela o nella
                testata) per calcolare la BMEP (Brake Mean Effective Pressure) —
                la pressione media che agisce sul pistone durante il ciclo, parametro
                che descrive l'efficienza termodinamica indipendentemente dalla cilindrata.
                Il tracciato AFR sovrapposto alla curva di potenza mostra immediatamente
                se la miscela è ottimizzata: picco di potenza con AFR intorno a
                12.5–13.5:1 (lambda 0.85–0.92) è il range tipico di un 2T racing
                ben calibrato a piena potenza.
              </p>
            </div>

            <div className="bancoCard">
              <span className="bancoIdx">03</span>
              <h4>La metodologia del pull — protocollo, ripetibilità e gestione del calore sul 2T</h4>
              <p>
                Un pull sul banco 2T inizia con il motore alla temperatura operativa
                (acqua a 55–65°C, temperatura candela stabilizzata), farfalla chiusa
                al minimo, e poi un'apertura completa fino al limitatore mantenendo
                il cambio in marcia fissa. La durata è 3–5 secondi. Il banco registra
                tutti i parametri a 100–1000 campioni al secondo. Dopo il pull,
                il motore deve raffreddarsi alla stessa temperatura di partenza prima
                del pull successivo: il 2T è molto più sensibile alla temperatura
                del 4T per la diversa efficienza di raffreddamento del pistone
                (nessun olio in pressione, solo miscela). Saltare il raffreddamento
                tra un pull e l'altro introduce errori sistematici: il terzo pull
                senza raffreddamento può mostrare 5–10% meno potenza del primo non
                per colpa della mappa ma per il calore accumulato. Il protocollo
                corretto prevede: temperatura acqua uguale all'inizio di ogni pull,
                stessa benzina (stesso numero di ottano), stessa pressione ambiente
                (o correzione ISO 1585 per confrontare sessioni diverse).
              </p>
            </div>

            <div className="bancoCard">
              <span className="bancoIdx">04</span>
              <h4>Leggere la curva di potenza — picco, area sotto la curva e comportamento in transizione</h4>
              <p>
                Un preparatore esperto non guarda solo il picco di potenza: legge
                l'intera curva. L'"area sotto la curva" (integrale della potenza
                nel range di utilizzo) è spesso più importante del valore massimo —
                una moto con 5 CV in più sul picco ma una curva scavata ai medi
                è più lenta in pista di una con 3 CV in meno ma curva piena.
                Sul 2T la transizione nella zona di apertura della powervalve è
                il punto più critico: una rampa troppo ripida produce un salto
                di coppia che il pilota percepisce come "scatto" o "picco" —
                difficile da gestire su terreno scivoloso. La mappa ideale mostra
                una curva con crescita progressiva, un "ginocchio" morbido in zona
                powervalve e un plateau esteso prima del drop post-picco.
                Ogni deviazione da questa forma racconta qualcosa sulla calibrazione
                anticipo, powervalve o, sui 2T EFI, sulla mappa di iniezione.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── METODOLOGIA BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="metodologiaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="metodologiaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Metodologia di calibrazione</span>
            <h3>Da mappa stock a mappa racing — il processo iterativo di ottimizzazione parametro per parametro</h3>
            <p>
              La calibrazione non è una singola operazione: è un processo iterativo
              con metodo. Ogni modifica produce dati; i dati guidano la modifica
              successiva. Senza metodo si gira in cerchio; con metodo si converge
              verso il punto ottimale in modo sistematico e documentato.
            </p>
          </motion.div>

          <motion.div className="metodologiaGrid" variants={cardVariants}>
            <div className="metodologiaCard">
              <span className="metodologiaIdx">01</span>
              <h4>Partire ricco e sicuro — il principio fondamentale che evita danni al motore</h4>
              <p>
                La regola d'oro della calibrazione 2T è: si parte sempre dal lato
                sicuro. Per l'anticipo significa iniziare con una curva conservativa
                (meno gradi del supposto ottimo) e avanzare progressivamente; per
                la miscela (sui 2T EFI) significa partire ricchi (AFR basso, lambda
                sotto 0.90) e alleggerire verso il target. Partire dalla parte
                sbagliata — anticipo troppo elevato o miscela troppo povera —
                rischia di danneggiare il pistone prima ancora di avere dati utili.
                Il processo si applica anche per settori del range operativo: si
                ottimizza prima il punto di picco (dove il motore è più sensibile),
                poi si lavora verso il basso sui regimi parziali, poi sui transitori.
                Ogni punto ottimizzato viene bloccato e non si torna indietro a meno
                che le modifiche successive rivelino una dipendenza inaspettata.
              </p>
            </div>

            <div className="metodologiaCard">
              <span className="metodologiaIdx">02</span>
              <h4>Mappatura per settori — bassi, medi, alti e transizioni separate</h4>
              <p>
                Un motore 2T ha tre zone operative con esigenze distinte.
                La zona bassa (da minimo a 60–65% del regime di picco) è dove si
                ottimizzano guidabilità, risposta alla farfalla e uscita dalle curve
                lente: si vuole un'erogazione progressiva senza scatti e senza buchi.
                La zona media (65–85% del regime) è la transizione critica della
                powervalve: l'apertura deve essere coordinata con la curva anticipo
                per non creare discontinuità. La zona alta (85–100% del regime,
                includendo il picco di potenza) è dove si massimizza la potenza
                mantenendo il motore fuori dalla detonazione. Le tre zone si ottimizzano
                separatamente — modificare la mappa alta non deve impattare quella
                bassa, e viceversa — sfruttando la granularità dei breakpoint
                sull'asse RPM. Ogni sessione di banco documenta le modifiche
                effettuate e la curva risultante: il file di log è la memoria
                permanente del processo di calibrazione.
              </p>
            </div>

            <div className="metodologiaCard">
              <span className="metodologiaIdx">03</span>
              <h4>A/B testing — confronto oggettivo tra versioni di mappa sullo stesso banco</h4>
              <p>
                L'A/B testing in mappatura significa flashare due versioni di mappa
                nella stessa sessione di banco e confrontare le curve risultanti
                in modo oggettivo. Il software di calibrazione produce file di log
                numerati che il preparatore sovrappone sullo stesso grafico: la differenza
                tra curva A e curva B è visibile direttamente, senza dipendere
                dalla memoria o dalla sensazione del tester. Per essere valido, un
                A/B test deve rispettare le stesse condizioni: temperatura motore uguale
                all'inizio di ogni pull, stesso carburante, stessa posizione del banco.
                La differenza di un singolo parametro tra le due mappe permette di
                isolare il suo effetto netto sulla curva di potenza. Questa metodologia
                permette di rispondere a domande precise: "guadagno qualcosa avanzando
                l'anticipo di 2° tra 8.000 e 9.000 giri?" La risposta è nel grafico,
                non nella sensazione.
              </p>
            </div>

            <div className="metodologiaCard">
              <span className="metodologiaIdx">04</span>
              <h4>Correlazione banco-pista — perché la mappa migliore sul banco non è sempre la migliore in gara</h4>
              <p>
                Il banco prova ottimizza in condizioni stazionarie e controllate.
                La pista introduce variabili che il banco non può replicare completamente:
                transitori rapidi di farfalla (apertura e chiusura in millesimi di secondo),
                vibrazioni che influenzano i sensori, variazioni di temperatura ambiente
                durante la sessione, interazione tra powertrain e sospensioni.
                Una mappa con massima potenza sul banco può risultare nervosa e difficile
                da gestire su terreno scivoloso — il pilota non riesce a sfruttare
                la potenza aggiuntiva. La calibrazione finale richiede sempre una
                fase di test su pista con data logging (logger sul manubrio, sonda
                lambda, GPS): i dati acquisiti rivelano le zone della mappa effettivamente
                utilizzate dal pilota in gara, le zone dove il motore entra in limitatore
                o in condizioni critiche, e permettono di raffinare la mappa per
                il comportamento reale invece che per il massimo teorico sul banco.
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
            <h3>Buco di erogazione, pistone forato, miscela povera e mappa corrotta — come leggere i problemi di mappatura</h3>
            <p>
              I sintomi di una mappa mal calibrata sono specifici e leggibili —
              se si sa cosa cercare. La difficoltà è che molti sintomi di mappatura
              imitano problemi meccanici o di carburazione, rendendo la diagnosi
              differenziale essenziale prima di intervenire.
            </p>
          </motion.div>

          <motion.div className="diagnosiGrid" variants={cardVariants}>
            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Buco di erogazione a metà regime — mappa e powervalve non coordinate</h4>
              <p>
                Un calo di potenza brusco e ripetibile a un regime specifico — spesso
                nella zona 6.000–8.000 giri — è quasi sempre la firma di una
                transizione powervalve non coordinata con la curva anticipo.
                La valvola si apre (o si chiude) in modo troppo brusco cambiando
                la geometria acustica del condotto di scarico, mentre l'anticipo
                non è calibrato per la nuova configurazione. La verifica: aprire
                il software di mappatura e sovrapporre la curva di apertura powervalve
                con la curva anticipo nella stessa zona. Se i gradienti non sono
                coordinati, la soluzione è ammorbidire la rampa della powervalve
                o modificare l'anticipo nella zona di transizione, non uno dei due
                parametri da solo.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Pistone forato o bruciato — la firma inequivocabile dell'anticipo eccessivo</h4>
              <p>
                Un pistone forato nella testa, con un foro netto o con la superficie
                erosa in modo irregolare, è la conseguenza diretta di detonazione
                prolungata. Sul 2T questo avviene in tempi brevissimi rispetto al 4T:
                a seconda dell'intensità della detonazione, bastano 10–30 minuti
                di funzionamento a pieno carico con anticipo eccessivo per perforare
                il pistone. L'analisi del danno rivela molto: un foro centrale con
                bordi fusi indica detonazione da anticipo; un'erosione irregolare
                del bordo laterale indica più spesso pre-accensione da depositi in
                camera o da candela termica sbagliata. Prima di rimappare dopo un
                guasto: verificare anche il valore di ottano del carburante usato,
                lo stato della candela e la temperatura operativa dell'acqua.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Comportamento diverso tra serbatoio e serbatoio — miscela EFI non stabile</h4>
              <p>
                Un 2T EFI che si comporta in modo diverso da un pieno all'altro
                (più nervoso, meno potente, diverso nella risposta) può avere
                un problema di closed loop non funzionante o una deriva della
                calibrazione base. Il closed loop (se presente) dovrebbe correggere
                le variazioni di qualità del carburante; se è disattivato o se la
                sonda lambda è difettosa, la mappa base domina e le variazioni
                di qualità del carburante (ottano, densità, contenuto di etanolo)
                producono comportamenti diversi. La verifica: leggere il valore lambda
                istantaneo con il tool diagnostico durante una sessione e confrontarlo
                con il target della mappa. Un lambda sistematicamente fuori dal target
                con closed loop attivo indica sonda lambda usurata o perdita d'aria
                nel sistema di aspirazione.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Verifica checksum del file mappa — primo passo dopo un comportamento anomalo inspiegato</h4>
              <p>
                Prima di cercare cause meccaniche o elettriche a un comportamento
                anomalo improvviso, verificare l'integrità della mappa: collegare
                il software di calibrazione e rileggere la mappa dalla centralina.
                Se il software riporta un errore di checksum, la flash della centralina
                ha subito una corruzione parziale — raramente per guasto della memoria,
                più spesso per un'interruzione di corrente durante un flashing precedente.
                La soluzione è reflashare con un file di mappa noto. Il checksum
                errato può produrre comportamenti intermittenti e imprevedibili perché
                alcune celle sono lette correttamente e altre con valori casuali.
                È un guasto silenzioso che non produce errori evidenti sul quadro
                strumenti ma degrada il comportamento del motore in modo non riproducibile.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Analisi del datalog post-sessione — trovare le zone calde della mappa usata in pista</h4>
              <p>
                Il datalog acquisito durante una sessione di gara o allenamento è
                lo strumento più potente per capire quali zone della mappa vengono
                effettivamente utilizzate. Sovrapporre il log (RPM vs TPS vs tempo)
                alla griglia della mappa permette di visualizzare le celle "calde"
                — quelle attraversate più frequentemente durante la sessione.
                Un pilota che usa principalmente la fascia 7.000–9.500 giri a farfalla
                tra 70% e 100% non beneficia di modifiche nella zona dei bassi carichi.
                Il log rivela anche i momenti critici: picchi di RPM oltre il limitatore,
                zone di chiusura farfalla brusca, transizioni che coincidono con
                la zona di apertura powervalve. Questa analisi orienta il lavoro
                sul banco verso le zone che contano davvero per quel pilota e quella
                pista specifica.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeIntervallo">Intervallo</span>
              <h4>Manutenzione della mappa — quando e perché una mappa ben calibrata può smettere di funzionare</h4>
              <p>
                Una mappa calibrata su un motore specifico non dura per sempre.
                Le condizioni che la rendevano ottimale cambiano: il motore invecchia
                (compressione cala, camera si carbura, cuscinetti cambiano il gioco
                al volano), i componenti vengono sostituiti (pistone diverso, diversa
                mappatura del carburatore), si cambia carburante o si sale di quota.
                La regola pratica: ogni volta che si effettua una revisione del gruppo
                termico, si reinstalla una mappa base sicura e si ricalibraa da zero.
                Usare una mappa calibrata su un motore diverso — anche dello stesso
                modello — è un rischio: le tolleranze di produzione e lo stato di usura
                producono motori che non sono mai identici, anche quando nominalmente
                uguali.
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
            <h3>Una mappa non è un oggetto finito — è uno snapshot di un processo di calibrazione che dipende da motore, condizioni e pilota</h3>
            <p>
              La "mappa definitiva" non esiste. Esiste la mappa ottimale per quel
              motore, con quel carburante, in quelle condizioni ambientali, per quel
              pilota su quella pista. Cambia un elemento e la mappa va rivista.
              Questa non è una debolezza del sistema: è la sua potenza reale.
              La mappa è il luogo dove il motore smette di essere generico e diventa
              specifico per l'uso che se ne fa.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Errore classico</span>
            <h3>Copiare la mappa di un altro motore "uguale" senza verificarla su banco — ogni 2T è individuale</h3>
            <p>
              Due moto dello stesso modello e anno, con la stessa manutenzione,
              non hanno performance identiche. Le tolleranze di produzione su cilindro,
              pistone, cuscinetti e volano producono motori che rispondono diversamente
              alla stessa mappa. Copiare la mappa di un compagno "che va fortissimo"
              senza banco di verifica è un azzardo: può funzionare, può essere
              subottimale, può essere pericolosa. Il banco prima, la pista dopo.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>Qui il focus è sulla mappa come struttura dati e processo — la centralina che la esegue è trattata separatamente</h3>
            <p>
              Questo capitolo tratta la struttura matematica della mappa, i parametri
              che contiene, i software di calibrazione, il banco dinamometrico e
              la metodologia di ottimizzazione. L'hardware della centralina (CDI,
              ECU, firmware), i singoli sensori e il controllo della powervalve
              come componente fisico sono trattati nelle sezioni dedicate
              del capitolo elettronica.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Mappe;
