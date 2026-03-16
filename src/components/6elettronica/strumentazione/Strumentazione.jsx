import "./strumentazione.scss";
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

const Strumentazione = () => {
  return (
    <section className="strumentazione" id="strumentazione">
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
              Elettronica — Strumentazione
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La strumentazione — interfaccia uomo-macchina, acquisizione dati e lettura del motore in tempo reale
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La strumentazione non è decorazione: è il canale attraverso cui il motore
              comunica con il pilota. Su un 2T da cross questa comunicazione è essenziale —
              il powerband è stretto, la temperatura dell'acqua sale rapidamente,
              la corretta lettura del regime fa la differenza tra essere nel picco
              di potenza e trascinare il motore fuori dalla sua zona efficace.
              Un tachimetro, un termometro e un contagiri sono informazioni operative,
              non accessori da catalogo.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La strumentazione moderna va però molto oltre la semplice indicazione
              di regime e temperatura. I sistemi di acquisizione dati (data logger)
              registrano decine di canali simultaneamente — RPM, velocità GPS, inclinazione,
              temperatura, lambda, posizione farfalla — e li rendono analizzabili
              sul computer dopo ogni sessione. Sovrapporre due giri dello stesso tracciato
              con dati oggettivi permette di identificare esattamente dove si guadagna
              o si perde tempo, quale zona del motore viene usata e se la mappa
              è ottimizzata per l'utilizzo reale del pilota.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Sul 2T a iniezione (KTM TPI, Husqvarna TE TPI, GasGas EC TPI) la
              strumentazione è integrata con la centralina tramite bus CAN: il display
              di bordo non legge i sensori autonomamente ma riceve i dati già elaborati
              dall'ECU attraverso il bus di comunicazione. Questo apre la possibilità
              di selezionare mappe dal display, leggere i codici di errore in tempo
              reale e collegare dispositivi esterni di acquisizione come semplici
              listener CAN passivi, senza interferire con la gestione motore.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Il cruscotto come sistema</span>
              <h3>Quattro funzioni della strumentazione sul 2T da competizione</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Interfaccia operativa — regime, temperatura, marcia inserita,
                  ore motore: informazioni che il pilota usa in tempo reale
                  per gestire il motore in modo corretto durante la sessione
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Allarmi e soglie — la strumentazione avvisa quando temperatura,
                  giri o tensione escono dal range sicuro; su un 2T questo
                  anticipa guasti che altrimenti risulterebbero catastrofici
                  e improvvisi
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Acquisizione dati — i sistemi avanzati registrano tutti i parametri
                  in forma di timeseries per l'analisi post-sessione; il log
                  è la memoria oggettiva di ogni giro, ogni frenata, ogni transizione
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Connettività — via CAN bus, Bluetooth o USB i sistemi moderni
                  dialogano con ECU, app per smartphone e software di analisi;
                  il confine tra strumentazione e centralina diventa sempre più sottile
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
                Confronto strumentazioni: quadro analogico vintage a sinistra, display
                digitale Trail Tech Vapor al centro, TFT a colori KTM TPI a destra —
                mostrare l'evoluzione e le informazioni disponibili su ciascuno
              </span>
              <span className="placeholderSub">
                Sostituisci con &lt;img&gt; o composizione fotografica
              </span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Dall'ago al pixel</span>
            <p>
              In quarant'anni la strumentazione delle moto 2T è passata dall'ago
              meccanico del contagiri — mosso da un cavo o da un impulso magnetico —
              a display TFT a colori con GPS integrato, touch screen e connessione
              Bluetooth all'ECU. La quantità di informazioni disponibili è cresciuta
              di ordini di grandezza. Il punto critico non è avere più dati: è sapere
              quali dati sono rilevanti e come leggerli nel breve momento di attenzione
              che il pilota può dedicare al cruscotto tra una curva e l'altra.
            </p>
          </div>
        </motion.div>

        {/* ── TIPOLOGIE BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="tipologieBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tipologieHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Tipologie di strumentazione</span>
            <h3>Analogico, digitale compatto, TFT a colori e sistemi GPS — quattro generazioni con esigenze diverse</h3>
            <p>
              Non esiste un'unica strumentazione giusta per tutti i contesti.
              Un enduro da gara ha esigenze diverse da una moto da cross da allenamento
              o da un 2T stradale. Ogni soluzione è un compromesso tra informazioni
              disponibili, peso, robustezza e costo.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>
            <div className="tipCard tipAnalogico">
              <div className="tipCardTop">
                <span className="tipBadge badgeAnalogico">Analogico</span>
                <span className="tipSub">meccanico · semplice · indistruttibile</span>
              </div>
              <h4>Quadro analogico — ago, bobina e affidabilità assoluta senza elettronica aggiuntiva</h4>
              <p>
                Il contagiri analogico tradizionale riceve un segnale di tensione
                alternata dallo statore (o un impulso dalla bobina di accensione)
                e lo converte in una deflessione dell'ago tramite un circuito d'integrazione
                o un motore a magnete permanente. Non ha firmware, non ha connettori
                dati, non si aggiorna: l'ago va dove la fisica lo porta.
                Il vantaggio è l'assoluta semplicità: nessun microcontrollore da
                inizializzare, nessuna calibrazione software, nessun consumo rilevante
                di corrente. Il limite è la risoluzione: su un ago da 270° di rotazione
                totale, leggere la differenza tra 8.500 e 9.000 giri richiede
                esperienza. Ancora usato su moto vintage, enduro essenziale e alcune
                moto da cross dove il peso e la semplicità contano più dei dati.
              </p>
            </div>

            <div className="tipCard tipDigitale">
              <div className="tipCardTop">
                <span className="tipBadge badgeDigitale">Digitale compatto</span>
                <span className="tipSub">Trail Tech · LCD · enduro</span>
              </div>
              <h4>Display digitale compatto — Trail Tech, contagiri numerico, temperatura e ore motore in un unico modulo</h4>
              <p>
                I display digitali compatti — Trail Tech VAPOR, Trail Tech STRIKER,
                Tusk Tachometer — sono la soluzione più diffusa sulle moto 2T enduro
                e cross da allenamento. Un singolo modulo LCD da pochi centimetri
                mostra contemporaneamente: regime istantaneo (in numeri, risoluzione
                tipica 100 giri), temperatura del liquido di raffreddamento o dell'aria
                da un sensore NTC, velocità da un sensore magnetico sulla ruota,
                ore motore cumulate per la pianificazione manutenzione. Il Trail Tech
                VAPOR legge il segnale di trigger direttamente sul cavo che va
                dalla bobina alla candela, senza bisogno di modificare il cablaggio
                originale. È impermeabile, vibration-resistant e alimentato
                dalla batteria del display stesso (nessun carico sull'impianto).
                Limite: nessun GPS, nessuna acquisizione dati, nessun CAN bus.
              </p>
            </div>

            <div className="tipCard tipTFT">
              <div className="tipCardTop">
                <span className="tipBadge badgeTFT">TFT a colori</span>
                <span className="tipSub">KTM TPI · Husqvarna · GPS · CAN</span>
              </div>
              <h4>Display TFT a colori — interfaccia OEM integrata con l'ECU via CAN, GPS e Bluetooth</h4>
              <p>
                I modelli KTM/Husqvarna/GasGas TPI di ultima generazione montano
                display TFT da 4,3" o 5" che comunicano con l'ECU tramite bus CAN.
                Il display non ha propri sensori di regime o temperatura: riceve
                i dati già elaborati dall'ECU come messaggi CAN e li presenta
                graficamente. Mostra: regime con bargraph orizzontale, marcia inserita,
                temperatura, tensione batteria, mappa selezionata, codici errore attivi
                e ore motore. L'integrazione con KTM Power Tune via Bluetooth permette
                di selezionare la mappa direttamente dal display o dallo smartphone
                senza strumenti aggiuntivi. Alcuni modelli mostrano anche il consumo
                carburante istantaneo calcolato dall'ECU dai parametri di iniezione,
                utile per la gestione del pieno in gara enduro. Il display Trail Tech
                Voyager PRO (aftermarket) aggiunge GPS con mappa topografica
                e lap timer GPS anche su moto sprovviste di display di serie.
              </p>
            </div>

            <div className="tipCard tipGPS">
              <div className="tipCardTop">
                <span className="tipBadge badgeGPS">Data Logger GPS</span>
                <span className="tipSub">AiM · Motec · 25 Hz · analisi</span>
              </div>
              <h4>Sistema di acquisizione dati — AiM, Motec e datalogger professionali per analisi post-sessione</h4>
              <p>
                I sistemi di acquisizione dati professionali (AiM MXS, AiM MyChron5,
                Motec C125, Magneti Marelli) sono una categoria a sé: non si limitano
                a mostrare dati in tempo reale ma li registrano su memoria interna
                a frequenza elevata (da 10 a 200 Hz per canale) per l'analisi offline.
                Un GPS da 25 Hz aggiorna la posizione 25 volte al secondo — sufficiente
                per correlare la traiettoria con qualsiasi parametro del motore.
                L'accelerometro triassiale integrato registra le accelerazioni longitudinali,
                laterali e verticali. Il CAN bus permette di ricevere tutti i parametri
                dell'ECU senza sensori aggiuntivi. Dopo la sessione, i dati si scaricano
                via USB o WiFi nel software di analisi (AiM Race Studio 3, Motec i2)
                dove si sovrappongono giri, si confrontano piloti e si costruiscono
                canali matematici derivati (potenza stimata, grip stimato, efficienza
                frenata) dai dati grezzi acquisiti.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── INFORMAZIONI BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="informazioniBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="informazioniHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Parametri critici sul 2T</span>
            <h3>RPM nel powerband, temperatura testa, ore motore e marcia — cosa leggere e perché conta più che sul 4T</h3>
            <p>
              Sul motore a due tempi la strumentazione non è confort: è gestione
              attiva del motore. Il pilota che legge il contagiri usa l'informazione
              per stare nel powerband; quello che ignora la temperatura rischia
              di cuocere il pistone in una discesa lenta.
            </p>
          </motion.div>

          <motion.div className="informazioniGrid" variants={cardVariants}>
            <div className="informazioniCard">
              <span className="informazioniIdx">01</span>
              <h4>Regime (RPM) — stare nel powerband è una scelta attiva che richiede la strumentazione</h4>
              <p>
                Sul 4T il pilota può gestire il regime "a orecchio" con relativa
                facilità perché la curva di potenza è ampia e progressiva. Sul 2T
                il powerband è una finestra stretta — spesso 2.000–3.000 giri
                intorno al picco — fuori dalla quale il motore eroga una frazione
                della potenza disponibile. Rimanere in questa finestra su tracciati
                variabili richiede scalate e marchiate frequenti e precise. La lettura
                visiva del contagiri (analogico) o del bargraph (digitale) è lo
                strumento di supporto per il pilota meno esperto; i sistemi avanzati
                aggiungono una spia luminosa (shift light) configurabile che si accende
                al raggiungimento del regime di cambio marcia ottimale, permettendo
                al pilota di tenere gli occhi sulla pista invece che sulla strumentazione.
              </p>
            </div>

            <div className="informazioniCard">
              <span className="informazioniIdx">02</span>
              <h4>Temperatura — acqua e testa, due misure diverse con informazioni diverse</h4>
              <p>
                La temperatura del liquido di raffreddamento (acqua nel circuito)
                è il parametro termico più comune sulla strumentazione 2T: viene
                letta da un sensore NTC (Negative Temperature Coefficient) avvitato
                nel circuito idraulico, tipicamente nell'uscita dalla testata.
                Il range operativo normale su un 2T raffreddato a liquido è 55–75°C
                in movimento attivo; valori oltre 90°C indicano raffreddamento
                insufficiente. Alcuni preparatori e piloti avanzati preferiscono
                il sensore di temperatura testa (CHT, Cylinder Head Temperature):
                una termocoppia avvitata nella testata o nel tappo della candela
                che misura direttamente la temperatura del metallo a contatto con
                la camera di combustione. Il CHT è più reattivo ai cambiamenti
                di miscela e anticipo — si può usare come indicatore diretto
                di detonazione incipiente, qualcosa che la temperatura dell'acqua
                da sola non rileva con la stessa prontezza.
              </p>
            </div>

            <div className="informazioniCard">
              <span className="informazioniIdx">03</span>
              <h4>Ore motore — la manutenzione pianificata inizia dalla strumentazione</h4>
              <p>
                L'ora motore (engine hours) è il parametro più importante per
                la pianificazione degli interventi di manutenzione su un 2T da
                competizione. Il gruppo termico (pistone, fasce, cilindro) su una
                moto da cross racing va controllato ogni 10–20 ore di utilizzo a
                piena intensità; il cuscinetto di banco ogni 30–50 ore a seconda
                del costruttore e dell'utilizzo. Senza un contaore funzionante
                e rispettato, la manutenzione diventa una stima — con i rischi
                che questo comporta. I display digitali moderni accumulano le ore
                in memoria non volatile e permettono di configurare allarmi visivi
                o sonori al raggiungimento dell'intervallo programmato. Trail Tech
                VAPOR e STRIKER registrano le ore in automatico al primo giro motore
                e continuano ad accumulare indipendentemente da eventuali reset
                del display, mantenendo un registro storico permanente.
              </p>
            </div>

            <div className="informazioniCard">
              <span className="informazioniIdx">04</span>
              <h4>Marcia inserita e velocità — il contesto che completa la lettura del regime</h4>
              <p>
                Il regime da solo non basta: sapere che il motore gira a 8.000 giri
                in terza marcia è un'informazione diversa dallo stesso regime in quinta.
                Gli indicatori di marcia inserita — derivati dalla lettura della
                tensione sul contatto della frizione o da un sensore di posizione
                sul selettore — completano la lettura del contagiri con il contesto
                cinematico. La velocità (da GPS o da sensore ruota) aggiunge
                l'informazione sulla corrispondenza tra regime e velocità: su un
                datalog, il rapporto velocità/RPM rivela istantaneamente quale marcia
                è inserita e se la trasmissione finale (pignone/corona) è dimensionata
                correttamente per il tracciato. Un rapporto errato — visibile
                come zona di "ruota libera" sul datalog dove il motore è al limitatore
                ma la velocità non cresce proporzionalmente — indica che serve
                una corona più grande o un pignone più piccolo.
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
            <span className="captionTag">Analisi dati post-sessione</span>
            <p>
              Un buon screenshot qui dovrebbe mostrare AiM Race Studio 3 o Motec i2
              con due canali sovrapposti: RPM e velocità GPS su scala temporale,
              con la traccia del giro sullo sfondo. Si vedrebbe immediatamente
              dove il pilota è uscito dal powerband (RPM che cala sotto la soglia
              del powerband), dove ha cambiato marcia e come la temperatura è evoluta
              durante la sessione. Questa è la differenza tra un pilota che analizza
              e uno che usa solo la sensazione: il datalog non mente e non dimentica.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Screenshot AiM Race Studio 3 o Motec i2 — canali RPM, velocità GPS,
                temperatura acqua e lambda su scala temporale; evidenziare il confronto
                tra due giri sovrapposti e la traccia GPS del circuito
              </span>
              <span className="placeholderSub">
                Sostituisci con &lt;img&gt; o screen recording
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── CAN BUS BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="canBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="canHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">CAN bus e connettività</span>
            <h3>Controller Area Network — il protocollo che fa dialogare ECU, display, data logger e app sulle moto moderne</h3>
            <p>
              Il CAN bus è il sistema nervoso digitale delle moto moderne. Capire
              come funziona permette di capire perché un display aftermarket può leggere
              tutti i parametri dell'ECU senza cavi aggiuntivi, e come un data logger
              professionale si integra senza interferire con la gestione motore.
            </p>
          </motion.div>

          <motion.div className="canGrid" variants={cardVariants}>
            <div className="canCard">
              <span className="canIdx">01</span>
              <h4>Cos'è il CAN bus — due fili che portano tutti i dati del veicolo</h4>
              <p>
                Il CAN bus (Controller Area Network, standard ISO 11898) è un
                protocollo di comunicazione differenziale a due fili — CAN-H e CAN-L —
                che permette a tutti i moduli elettronici del veicolo di comunicare
                tra loro su un unico bus condiviso. Ogni modulo (ECU, display, ABS unit,
                power steering) è un nodo del bus: può trasmettere messaggi e ricevere
                quelli degli altri nodi. La comunicazione è a pacchetti (frame):
                ogni frame contiene un ID che identifica il tipo di dato (regime,
                temperatura, posizione farfalla…) e fino a 8 byte di payload con
                il valore. La velocità tipica è 125–500 kbps per le reti moto.
                Sul KTM TPI, la rete CAN collega ECU, display e modulo Bluetooth:
                il display non ha propri sensori ma riceve tutti i valori dall'ECU
                come messaggi CAN con aggiornamento ogni 10–50 ms.
              </p>
            </div>

            <div className="canCard">
              <span className="canIdx">02</span>
              <h4>Data logger come listener CAN passivo — acquisire tutti i dati senza modificare nulla</h4>
              <p>
                La caratteristica più utile del CAN bus per l'acquisizione dati è
                la possibilità di collegare un data logger come nodo puramente passivo:
                il logger ascolta tutti i messaggi sul bus senza trasmettere nulla.
                Non interferisce con la comunicazione tra ECU e display, non modifica
                nessun parametro e non richiede nessuna configurazione dell'ECU.
                Basta conoscere l'ID e il formato dei messaggi CAN dell'ECU specifica
                (informazioni spesso documentate nei kit di integrazione AiM o Motec
                per ogni modello di moto) e il logger decodifica automaticamente
                i valori. Su KTM TPI, il connettore di diagnostica è accessibile
                senza smontare la moto e include i pin CAN-H e CAN-L — il data logger
                AiM MXS o Motec C125 si connette con un cavo dedicato e riceve
                istantaneamente tutti i parametri già elaborati dall'ECU.
              </p>
            </div>

            <div className="canCard">
              <span className="canIdx">03</span>
              <h4>Protocollo OBD e diagnostica — stesso connettore, uso diverso</h4>
              <p>
                Il connettore di diagnostica delle moto 2T EFI è spesso compatibile
                OBD (On-Board Diagnostics) o usa un connettore proprietario con
                gli stessi pin CAN. Tramite questo connettore si accede sia alla
                diagnostica (lettura codici errore, reset adattativi, aggiornamento
                firmware) che alla rete CAN per l'acquisizione. La distinzione
                importante è quella tra accesso in lettura (diagnostica passiva,
                data logging) e accesso in scrittura (modifica parametri ECU,
                flashing mappa): il primo richiede solo un connettore CAN e il software
                corretto; il secondo richiede autorizzazione specifica (account dealer
                o tool specializzato come KDTE per KTM). Un data logger AiM o Motec
                opera sempre in modalità di sola lettura — non può modificare
                parametri ECU anche se fisicamente connesso allo stesso bus.
              </p>
            </div>

            <div className="canCard">
              <span className="canIdx">04</span>
              <h4>Bluetooth e app — la strumentazione che vive sullo smartphone</h4>
              <p>
                I moduli Bluetooth integrati nelle moto TPI (il dongle KTM Power Tune
                o il modulo integrato nei modelli più recenti) estendono la connettività
                della strumentazione allo smartphone. Tramite l'app KTM Power Tune
                è possibile leggere in tempo reale gli stessi parametri del display
                di bordo — RPM, temperatura, TPS, codici errore, mappa attiva —
                su uno schermo più grande e con la possibilità di registrare la sessione
                nel log dell'app per revisione successiva. La latenza del Bluetooth
                (classico o BLE) è di 10–50 ms — troppo alta per un pilota in sella,
                ma sufficiente per un meccanico ai box che monitora il comportamento
                del motore durante una sessione di test. Lo stesso connettore Bluetooth
                permette il cambio mappa senza fermare la moto — una funzione
                usata nei test di sviluppo per confrontare mappe diverse sullo stesso
                giro cronometrato.
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
            <h3>Contagiri che non risponde, temperatura errata, GPS perso e CAN bus in errore — come leggere i guasti della strumentazione</h3>
            <p>
              I guasti della strumentazione raramente fermano il motore, ma privano
              il pilota delle informazioni necessarie per gestirlo correttamente.
              Diagnosticarli rapidamente — soprattutto su un 2T dove la temperatura
              è critica — è prioritario quanto qualsiasi altro guasto meccanico.
            </p>
          </motion.div>

          <motion.div className="diagnosiGrid" variants={cardVariants}>
            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Contagiri analogico fermo o irregolare — segnale pickup debole o frequenza errata</h4>
              <p>
                Il contagiri analogico legge il segnale di tensione alternata dallo
                statore o l'impulso della bobina d'accensione. Se l'ago non si muove
                o salta in modo irregolare, le cause principali sono: cavo di segnale
                interrotto o ossidato al connettore, calibrazione errata del numero
                di impulsi per giro (il display deve sapere quanti poli ha lo statore
                o quante scintille per giro emette il sistema d'accensione), statore
                con avvolgimento di carica debole che produce tensione insufficiente
                a basso regime. Verificare prima il connettore del segnale con il
                multimetro in AC durante l'avviamento: deve produrre una tensione
                alternata proporzionale al regime. Un segnale presente ma irregolare
                indica interferenze — tenere il cavo del contagiri lontano dal cavo
                candela è la prima precauzione.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Temperatura sempre alta o sempre bassa — sensore NTC da verificare prima del sistema di raffreddamento</h4>
              <p>
                Un sensore NTC (Negative Temperature Coefficient) ha una resistenza
                che diminuisce all'aumentare della temperatura. Se il display mostra
                temperatura sempre al massimo con motore freddo, il sensore è in
                cortocircuito o il cavo massa è interrotto — il display legge
                una resistenza nulla che interpreta come temperatura elevata.
                Se mostra temperatura sempre bassa anche con motore caldo, il sensore
                è in circuito aperto (resistenza infinita) o il connettore è ossidato
                — il display legge resistenza massima che interpreta come freddo.
                La verifica è rapida: misurare la resistenza del sensore disconnesso
                con un multimetro (tipicamente 2–3 kΩ a freddo ambiente, scende
                a 200–400 Ω a 80°C) e confrontare con la curva NTC riportata
                nel datasheet del sensore specifico.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>GPS che non aggancia o che perde il segnale — antenna, cold start e interferenze</h4>
              <p>
                Il modulo GPS nei sistemi di acquisizione richiede visibilità
                del cielo aperto e un tempo di primo aggancio (cold start) da 30 secondi
                a 2 minuti quando viene acceso dopo un lungo periodo di inattività.
                Se il GPS non aggancia: verificare che l'antenna non sia coperta
                da superfici metalliche (il telaio schermante è la causa più comune),
                che il connettore dell'antenna sia integro (le antenne GPS usano
                connettori SMA o FAKRA molto sensibili alle torsioni) e che il modulo
                GPS riceva la tensione di alimentazione corretta (tipicamente 3.3V
                o 5V). I sistemi con GPS assistito (A-GPS) usano la connessione
                WiFi o Bluetooth per scaricare i dati di efemeride e ridurre il
                tempo di aggancio a pochi secondi — ma richiedono connettività
                internet prima della sessione.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Verifica del bus CAN — terminazione, tensione e traffic monitor</h4>
              <p>
                Il CAN bus richiede due resistori di terminazione da 120Ω — uno
                a ciascuna estremità fisica del bus — per eliminare le riflessioni
                del segnale. Un bus senza terminazione o con terminazione singola
                produce comunicazioni instabili: messaggi persi, errori intermittenti,
                nodi che entrano in "bus off" (stato di errore che disabilita il nodo).
                La verifica hardware: con tutti i nodi spenti, misurare la resistenza
                tra CAN-H e CAN-L — con entrambe le terminazioni il valore deve
                essere circa 60Ω (due resistenze da 120Ω in parallelo). Un valore
                di 120Ω indica una terminazione mancante; un valore molto basso
                (sotto 10Ω) indica un cortocircuito sul bus. Per la verifica del
                traffico è necessario un CAN analyzer (es. PEAK PCAN-USB, Vector CANalyzer)
                che visualizza i frame in tempo reale con ID, data e frequenza.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Calibrazione del sensore velocità — impulsi per giro e circonferenza ruota</h4>
              <p>
                Il sensore di velocità su ruota (Reed switch o Hall effect) conta
                gli impulsi generati dai magneti sul mozzo ad ogni giro. La velocità
                si calcola dividendo la circonferenza della ruota per il tempo tra
                due impulsi consecutivi. Per essere accurata, il display deve essere
                configurato con la circonferenza corretta della ruota specifica —
                non il valore standard di listino, ma quello misurato fisicamente
                (gonfiare il pneumatico alla pressione di esercizio, fare rotolare
                la moto su una superficie piana per esattamente un giro di ruota
                completo e misurare la distanza percorsa). Un errore di circonferenza
                del 2% produce un errore sistematico del 2% sulla velocità misurata
                e sul calcolo della distanza, con conseguente imprecisione nei lap
                time calcolati da velocità integrata anziché da GPS.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeIntervallo">Intervallo</span>
              <h4>Manutenzione della strumentazione — connettori, firmware e backup dei dati</h4>
              <p>
                La strumentazione richiede poca manutenzione ma attenzione a tre
                punti specifici. I connettori dei sensori (temperatura, pickup,
                velocità) vanno controllati e trattati con grasso dielettrico a ogni
                revisione stagionale — sono i punti dove l'ossidazione produce
                letture errate. Il firmware del display (nei sistemi digitali) va
                tenuto aggiornato: i produttori rilasciano aggiornamenti che correggono
                bug di decodifica CAN, aggiungono compatibilità con nuovi modelli
                di moto e migliorano la precisione GPS. I file di log delle sessioni
                vanno scaricati regolarmente dalla memoria del logger e archiviati:
                la memoria interna è limitata (tipicamente 4–16 GB) e una sessione
                intensiva con tutti i canali attivi a frequenza elevata può riempirla
                in poche ore. Il log storico è un documento di sviluppo insostituibile
                — perderlo per un overflow è un errore evitabile.
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
            <h3>Sul 2T la strumentazione non è comfort — è gestione attiva del powertrain in un motore con banda stretta e sensibilità termica alta</h3>
            <p>
              Un pilota 4T può ignorare il contagiri per lunghi tratti senza perdere
              molto. Un pilota 2T che ignora la strumentazione esce dalla banda
              di potenza senza accorgersene e rischia di cuocere il pistone in una
              discesa lenta. La differenza tra guardare e non guardare il display
              si misura in prestazioni e sopravvivenza del motore.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Errore classico</span>
            <h3>Usare il data logger per sessioni intere senza analizzare i dati — acquisire non equivale a imparare</h3>
            <p>
              Molti installano sistemi di acquisizione avanzati e non aprono mai
              il software di analisi. Il data logger da solo non migliora le prestazioni:
              è lo strumento di misura che rende possibile l'analisi. Senza analisi
              sistematica dei giri, il log è solo storage. Dedicare 30 minuti
              all'analisi post-sessione vale quanto un'ora di giri in più in pista.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>Qui il focus è sulla strumentazione e l'acquisizione dati — non sui sensori singoli né sulla centralina</h3>
            <p>
              Questo capitolo tratta display, data logger, CAN bus, parametri critici
              sul 2T e diagnosi della strumentazione come sistema di interfaccia.
              I sensori individuali (TPS, lambda, temperatura, pickup), la centralina
              che elabora i segnali e le mappe che essa esegue sono trattati
              nelle sezioni dedicate del capitolo elettronica.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Strumentazione;
