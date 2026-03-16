import "./rideByWire.scss";
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

const RideByWire = () => {
  return (
    <section className="rideByWire" id="rideByWire">
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
              Elettronica — Ride-by-Wire
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il Ride-by-Wire nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il Ride-by-Wire (RbW) è il sistema che elimina il cavo meccanico
              tra la manopola del gas e la valvola a farfalla — o il corpo
              di iniezione — sostituendolo con un circuito elettronico.
              Il pilota muove la manopola, un sensore di posizione (TPS lato
              pilota) legge l'angolo, l'ECU calcola l'apertura ottimale della
              farfalla in base alle mappe programmate e a tutti gli altri
              parametri del motore, e un servo-attuatore apre fisicamente
              la valvola. Il cavo non esiste più: esiste soltanto un segnale
              elettrico e una risposta controllata.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Sul motore a 2 tempi questa tecnologia è arrivata con l'iniezione
              diretta (KTM TPI, Husqvarna TE TPI, GasGas EC TPI): il corpo
              farfallato con attuatore elettrico è parte integrante del sistema
              di iniezione e non può essere separato dalla gestione elettronica.
              L'ECU controlla contemporaneamente apertura farfalla, iniezione
              e powervalve con un coordinamento impossibile da realizzare
              meccanicamente. Il risultato è una risposta al gas lineare
              e modulabile tramite mappe, indipendentemente dalla posizione
              fisica della manopola.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Come funziona</span>
              <h3>Il percorso del segnale dalla manopola al motore</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Il pilota ruota la manopola — il TPS lato pilota (APP)
                  converte l'angolo in un segnale di tensione da 0,5 V a 4,5 V
                  con doppio elemento ridondante a polarità opposta
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  L'ECU riceve il segnale TPS, lo confronta con la mappa gas
                  selezionata, il regime, la velocità, la temperatura e
                  l'altitudine barometrica per calcolare l'apertura target
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Il servo-motore DC nell'attuatore sposta la farfalla
                  all'angolo calcolato; il TPS lato farfalla riporta
                  la posizione reale in feedback all'ECU in loop chiuso
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Se i due segnali TPS divergono oltre la soglia di tolleranza,
                  l'ECU entra in modalità limp home e memorizza il codice
                  di errore per la diagnostica successiva
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
                Schema Ride-by-Wire — manopola → TPS APP → ECU → servo-attuatore → farfalla → TPS TP → feedback ECU
              </span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Schema elettronico</span>
            <p>
              A differenza del cavo meccanico — che trasmette la posizione
              manopola direttamente alla valvola — il RbW introduce un livello
              di elaborazione tra l'intenzione del pilota e la risposta del motore.
              È in questo livello che vivono le mappe gas, il traction control,
              il launch control e tutte le strategie di gestione dell'erogazione.
            </p>
          </div>
        </motion.div>

        {/* ── FUNZIONAMENTO BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="funzionamentoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="funzionamentoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Principio di funzionamento</span>
            <h3>TPS, ECU, servo-attuatore e feedback — il loop di controllo che aggiorna la farfalla decine di volte al secondo</h3>
            <p>
              Il RbW non è un semplice interruttore elettronico. È un sistema
              di controllo in loop chiuso che corregge continuamente la posizione
              della farfalla confrontando dove dovrebbe essere con dove realmente si trova.
            </p>
          </motion.div>

          <motion.div className="funzionamentoGrid" variants={cardVariants}>

            <div className="funzionamentoCard">
              <div className="funzionamentoCardVisual tps">
                <span>TPS</span>
              </div>
              <span className="funzionamentoBadge">Sensore ingresso</span>
              <h4>TPS lato pilota — APP a doppio elemento ridondante</h4>
              <p>
                Il sensore TPS sulla manopola è quasi sempre un sensore
                Hall con doppio elemento ridondante a segnale sfasato:
                uno sale, l'altro scende proporzionalmente. L'ECU verifica
                ad ogni ciclo che la somma dei due segnali normalizzati
                resti costante — qualsiasi deviazione oltre la tolleranza
                indica guasto e attiva il codice errore. La risoluzione
                è tipicamente 10 bit (1024 livelli su 270° di rotazione),
                ogni passo corrisponde a circa 0,26° di apertura manopola.
                La tensione di uscita varia da 0,5V (chiuso) a 4,5V (aperto)
                per garantire la rilevazione dei cortocircuiti a massa o
                all'alimentazione come guasti distinti.
              </p>
            </div>

            <div className="funzionamentoCard">
              <div className="funzionamentoCardVisual ecu">
                <span>ECU</span>
              </div>
              <span className="funzionamentoBadge badgeEcu">Elaborazione</span>
              <h4>ECU — calcolo apertura target tramite mappa gas e parametri di contesto</h4>
              <p>
                L'ECU non applica un rapporto 1:1 tra posizione manopola e
                apertura farfalla. Legge il segnale APP, accede alla mappa
                gas selezionata (mappa 1/2/3 su KTM TPI), la corregge in
                base a regime istantaneo, velocità ruota, temperatura motore
                e pressione barometrica, e calcola l'angolo target della
                farfalla. Il processing avviene nel loop principale a
                100–1000 Hz a seconda dell'architettura ECU. Su mappa 2
                (standard) l'apertura è ritardata nei primi 30–40% di corsa
                manopola per rendere gestibile il powerband stretto del 2T
                in fuoristrada lento; su mappa 1 la curva è quasi lineare
                per uso su pista dove si vuole risposta immediata.
              </p>
            </div>

            <div className="funzionamentoCard">
              <div className="funzionamentoCardVisual servo">
                <span>⚙</span>
              </div>
              <span className="funzionamentoBadge badgeServo">Attuatore</span>
              <h4>Servo-attuatore — motore DC con riduttore e molla di richiamo fail-safe</h4>
              <p>
                L'attuatore del corpo farfallato è un motore DC in corrente
                continua accoppiato a un riduttore ad ingranaggi che muove
                la farfalla verso l'angolo target. All'interno è integrata
                una molla di richiamo meccanica in posizione di riposo
                (tipicamente 5–8° di apertura, sufficiente per il minimo):
                in caso di totale perdita di corrente la farfalla torna
                autonomamente alla posizione di minimo indipendentemente
                da qualsiasi software, garantendo la decelerazione controllata
                del veicolo. L'assorbimento di corrente del servo varia
                da poche decine di mA in posizione stabile a oltre 1A
                durante i movimenti rapidi.
              </p>
            </div>

            <div className="funzionamentoCard">
              <div className="funzionamentoCardVisual feedback">
                <span>↺</span>
              </div>
              <span className="funzionamentoBadge badgeFeedback">Feedback</span>
              <h4>TPS lato farfalla — loop chiuso e correzione ad ogni ciclo</h4>
              <p>
                Il sensore TPS sul corpo farfallato misura la posizione reale
                dell'asse della valvola e la restituisce all'ECU. Il controllore
                PID interno confronta target e posizione reale e genera il
                segnale di correzione per il motore dell'attuatore. Se la
                farfalla è a 20° e il target è 35°, il motore accelera;
                se supera il target, inverte. Questo loop si chiude decine
                di volte al secondo, eliminando il ritardo del controllo
                meccanico puro e rendendo la risposta deterministicamente
                prevedibile — fondamentale per il funzionamento del traction
                control e del launch control che si basano su modifiche
                dell'apertura target in tempo reale.
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
            <span className="captionTag">Mappa gas</span>
            <p>
              Le tre curve di risposta gas sul KTM 300 EXC TPI: mappa 1
              (aggressiva) quasi lineare; mappa 2 (standard) ritardata
              nei bassi; mappa 3 (rain/enduro) fortemente progressiva.
              Stessa posizione manopola, tre aperture farfalla diverse.
              Il traction control usa la stessa farfalla per ridurre
              l'erogazione in caso di slittamento ruota posteriore.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Grafico — tre curve di risposta gas (mappa 1/2/3) su assi posizione manopola (%) vs apertura farfalla (%)
              </span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── MAPPE E STRATEGIE BLOCK ─────────────────────────────────────── */}
        <motion.div
          className="mappeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="mappeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Mappe e strategie di controllo</span>
            <h3>Gas map, traction control, launch control e engine braking — tutto quello che il cavo meccanico non poteva fare</h3>
            <p>
              Il vero vantaggio del RbW non è la precisione meccanica ma la
              possibilità di implementare strategie di controllo impossibili
              con trasmissione meccanica diretta. L'ECU diventa un filtro
              intelligente tra il volere del pilota e la risposta del motore.
            </p>
          </motion.div>

          <motion.div className="mappeGrid" variants={cardVariants}>

            <div className="mappeCard">
              <span className="mappeIdx">01</span>
              <h4>Gas map — risposta progressiva o lineare configurabile per ogni contesto</h4>
              <p>
                La mappa gas definisce la curva di trasferimento tra angolo
                manopola e apertura farfalla. Su un 2T da enduro la mappa
                standard ammorbidisce l'apertura nei primi 30–40% di corsa
                per rendere gestibile il powerband stretto nel fuoristrada
                lento: il comportamento sembra quello di un motore con curva
                di coppia più piatta. La mappa aggressiva è quasi lineare —
                ideale su pista dove serve risposta immediata. Le tre mappe
                disponibili si selezionano dal display o dall'app KTM Power Tune
                senza fermare il motore, permettendo di adattare il comportamento
                del gas al terreno in tempo reale tra una speciale e l'altra.
              </p>
            </div>

            <div className="mappeCard">
              <span className="mappeIdx">02</span>
              <h4>Traction control — riduzione apertura farfalla al rilevamento dello slittamento</h4>
              <p>
                Il traction control sfrutta il RbW per ridurre l'erogazione
                quando la ruota posteriore perde aderenza. L'ECU confronta
                la velocità della ruota posteriore con quella anteriore e
                stima lo slittamento in percentuale: quando supera la soglia
                configurata, riduce l'apertura della farfalla indipendentemente
                dalla posizione della manopola, ripristinandola appena lo
                slittamento rientra nei limiti. L'intervento è continuo e
                graduale — molto meno brusco dei sistemi che agiscono solo
                sull'accensione o sull'iniezione, i quali producono strappi
                fastidiosi invece di una riduzione fluida della coppia.
              </p>
            </div>

            <div className="mappeCard">
              <span className="mappeIdx">03</span>
              <h4>Launch control — partenza ottimizzata con farfalla limitata</h4>
              <p>
                Il launch control limita l'apertura massima della farfalla
                durante la partenza a un valore ottimale per il massimo grip.
                Il pilota apre la manopola completamente: l'ECU ignora il
                segnale oltre la soglia programmata e mantiene la farfalla a
                un angolo parziale fino al raggiungimento di una velocità soglia
                o al disengaggio manuale. Su un 2T da cross questo sistema
                permette partenze riproducibili senza dover gestire manualmente
                il punto di slip della ruota posteriore nel momento critico
                della partenza — un vantaggio che può valere metri su un
                circuito dove la prima curva è stretta e affollata.
              </p>
            </div>

            <div className="mappeCard">
              <span className="mappeIdx">04</span>
              <h4>Engine braking control — modulare il freno motore in decelerazione</h4>
              <p>
                Nei 2T a iniezione il freno motore è intenso: chiudendo il
                gas il motore rallenta rapidamente e la ruota posteriore tende
                a bloccarsi su fondi sdrucciolevoli. L'engine braking control
                mantiene una piccola apertura della farfalla anche in rilascio,
                controllata dall'ECU in base alla velocità e alla decelerazione
                stimata. Riduce il rischio di highside in ingresso di curva
                con moto verticale e rende la guida più prevedibile su fondi
                variabili — in enduro questo fa differenza tra le trazioni
                controllate e quelle che sorprendono il pilota in momenti
                inattesi della discesa.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── COMPONENTI FISICI BLOCK ─────────────────────────────────────── */}
        <motion.div
          className="componentiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="componentiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Componenti fisici</span>
            <h3>Corpo farfallato elettronico, sensori TPS ridondanti, cablaggio schermato e alimentazione stabile</h3>
            <p>
              Il sistema RbW è hardware preciso e delicato. La qualità dei
              connettori, la schermatura dei cavi sensore e la stabilità
              della tensione di alimentazione sono fondamentali quanto
              la qualità del software che li gestisce.
            </p>
          </motion.div>

          <motion.div className="componentiContent" variants={cardVariants}>

            <div className="compColumn">
              <div className="compItem">
                <span className="compLabel">Corpo farfallato con attuatore integrato</span>
                <p>
                  Il corpo farfallato dei 2T TPI (KTM, Husqvarna, GasGas)
                  è un'unità compatta che integra la valvola a farfalla,
                  il servo-motore DC con riduttore ad ingranaggi e i due
                  sensori TPS (lato pilota e lato farfalla). È calibrato
                  in fabbrica: alla sostituzione richiede la procedura di
                  adattamento (throttle body adaptation) tramite strumento
                  diagnostico per registrare nell'ECU il punto di chiusura
                  reale della valvola. Senza questa calibrazione il minimo
                  è instabile e l'intera mappa gas lavora con un offset
                  errato.
                </p>
              </div>

              <div className="compItem">
                <span className="compLabel">Sensori TPS — doppia ridondanza e verifica continua</span>
                <p>
                  I sistemi RbW di sicurezza automotive usano due sensori
                  TPS con output sfasato: uno sale, l'altro scende. L'ECU
                  verifica la coerenza dei due segnali ad ogni ciclo di
                  elaborazione. Se la somma dei valori normalizzati esce
                  dalla finestra di tolleranza, il sistema dichiara un fault.
                  Questa architettura è richiesta dalle normative di sicurezza
                  funzionale (ISO 26262) ed è adottata sui 2T TPI per
                  l'omologazione stradale delle versioni enduro omologate.
                </p>
              </div>
            </div>

            <div className="compColumn">
              <div className="compItem">
                <span className="compLabel">Cablaggio schermato — immunità ai disturbi dell'accensione</span>
                <p>
                  I segnali TPS (0,5–4,5V) sono molto sensibili alle
                  interferenze elettromagnetiche generate dal cavo candela
                  e dal CDI. Il cablaggio professionale usa cavi schermati
                  con calza collegata a massa lato ECU. Su una moto enduro
                  il fascio cavi deve resistere a pieghe ripetute, schizzi
                  d'acqua e fango: i connettori sono IP67 e i cavi usano
                  isolanti in TPE o Teflon con buona flessibilità a freddo.
                  Un cavo TPS con isolante fessurato che va a massa
                  intermittente causa guasti difficilissimi da riprodurre
                  in officina.
                </p>
              </div>

              <div className="compItem">
                <span className="compLabel">Alimentazione stabile — tensione nel range 9–16V</span>
                <p>
                  L'ECU del RbW richiede alimentazione stabile nel range
                  9–16V. Tensioni inferiori (batteria scarica) o disturbi
                  impulsivi (indotti dal CDI ad alta tensione) possono
                  causare reset dell'ECU o comportamento anomalo dell'attuatore.
                  I sistemi ben progettati includono un regolatore DC-DC
                  interno per isolare il circuito di controllo dalle
                  fluttuazioni della rete. Su moto con batteria debole o
                  impianto mal mantenuto, i guasti intermittenti del RbW
                  sono spesso riconducibili alla tensione di alimentazione
                  piuttosto che ai componenti del sistema gas in sé.
                </p>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── SICUREZZA BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="sicurezzaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="sicurezzaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Sicurezza e ridondanza</span>
            <h3>Fail-safe meccanico, limp home, plausibilità MAP/TPS e watchdog hardware — come il sistema gestisce ogni tipo di guasto</h3>
            <p>
              Un sistema RbW bloccato a gas aperto è inaccettabile. Per questo
              ogni componente ha un fail-safe definito e l'ECU monitora
              la coerenza di tutti i segnali continuamente.
            </p>
          </motion.div>

          <motion.div className="sicurezzaGrid" variants={cardVariants}>

            <div className="sicurezzaCard">
              <span className="sicurezzaIdx">01</span>
              <h4>Molla di richiamo meccanica — il fail-safe hardware base</h4>
              <p>
                La molla di richiamo nel corpo farfallato è il fail-safe
                di primo livello: in assenza di corrente all'attuatore la
                molla riporta la farfalla alla posizione di minimo (5–8°)
                autonomamente, indipendentemente da qualsiasi software.
                Questo garantisce che il motore non rimanga a gas aperto
                in nessuna condizione di guasto elettrico puro — fusibile
                bruciato, disconnessione ECU, cavo tranciato. La posizione
                di minimo è sufficiente per tenere il motore acceso e
                permettere la decelerazione controllata del veicolo fino
                a ferma completa.
              </p>
            </div>

            <div className="sicurezzaCard">
              <span className="sicurezzaIdx">02</span>
              <h4>Limp home — funzionamento degradato con guasto parziale rilevato</h4>
              <p>
                Se l'ECU rileva un guasto a un sensore che non compromette
                completamente il controllo (TPS fuori range ma ancora
                parzialmente leggibile, divergenza MAP/TPS lieve), entra
                in limp home: la farfalla è gestita con una curva di apertura
                limitata (tipicamente 50–60% del massimo) e vengono
                disabilitate le funzioni avanzate. Il motore funziona ancora
                permettendo al pilota di raggiungere il box. Il codice
                di errore specifico viene memorizzato nell'ECU per la
                diagnostica successiva con strumento dedicato.
              </p>
            </div>

            <div className="sicurezzaCard">
              <span className="sicurezzaIdx">03</span>
              <h4>Plausibilità MAP/TPS — verifica incrociata senza hardware aggiuntivo</h4>
              <p>
                L'ECU verifica la coerenza tra posizione farfalla (TPS) e
                pressione nel collettore (MAP sensor): con farfalla al 90%
                la pressione MAP deve essere vicina all'atmosferica; con
                farfalla al 10% deve essere significativamente più bassa.
                Se i valori sono incoerenti — farfalla aperta ma pressione
                bassa, o farfalla chiusa ma pressione alta — l'ECU rileva
                un guasto in uno dei sensori e attiva la diagnostica.
                Questa verifica incrociata aumenta la robustezza del sistema
                sfruttando sensori già presenti per la gestione motore.
              </p>
            </div>

            <div className="sicurezzaCard">
              <span className="sicurezzaIdx">04</span>
              <h4>Watchdog hardware — reset automatico in caso di blocco software</h4>
              <p>
                L'ECU del RbW implementa un watchdog timer: un circuito
                hardware che richiede un reset periodico dal software in
                esecuzione. Se il software si blocca per qualsiasi ragione
                (interrupt loop, stack overflow) e smette di resettare il
                watchdog, il timer scade e l'hardware forza il reset completo
                dell'ECU. Durante il reset il sistema RbW non riceve comandi
                e la farfalla torna alla posizione di riposo meccanica.
                Il tempo di boot dell'ECU è tipicamente sotto i 100ms —
                impercettibile per il pilota in condizioni normali.
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
                Foto esploso — corpo farfallato KTM TPI con sensori TPS, servo-motore DC, riduttore e molla di richiamo visibili
              </span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Hardware</span>
            <p>
              Il corpo farfallato del KTM 300 EXC TPI è un'unità da circa
              280g con sensori TPS doppi ridondanti, servo DC con riduttore
              ad ingranaggi e molla di richiamo integrata. Richiede procedura
              di adattamento ECU obbligatoria alla sostituzione.
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
            <h3>Gas senza risposta, limp home, attuatore lento e TPS fuori range — leggere i guasti del sistema RbW</h3>
            <p>
              I guasti del RbW si manifestano quasi sempre con codici di
              errore specifici memorizzati nell'ECU. Prima di qualsiasi
              intervento meccanico, la lettura diagnostica è il primo passo.
            </p>
          </motion.div>

          <motion.div className="diagnosiGrid" variants={cardVariants}>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Gas senza risposta o in ritardo anomalo — TPS APP fuori range o connettore allentato</h4>
              <p>
                Se la manopola si muove ma la farfalla non apre o risponde
                con ritardo anomalo, il primo sospetto è il TPS lato pilota.
                Un sensore fuori range produce un segnale non riconoscibile
                dall'ECU che porta la farfalla in posizione di riposo.
                Verifica: leggere il valore TPS dal software diagnostico
                mentre si ruota lentamente la manopola — deve coprire
                l'intero range 0–100% linearmente senza salti. Qualsiasi
                zona piatta o salto indica sensore guasto o connettore
                ossidato.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Moto improvvisamente in limp home — codice TPS divergence o MAP plausibility</h4>
              <p>
                La moto che perde potenza improvvisamente e risponde solo
                parzialmente al gas è quasi sempre in limp home. Cause più
                frequenti: divergenza TPS1/TPS2 (connettore parzialmente
                disconnesso, cavo con intermittenza), incongruenza MAP/TPS
                (tubo vuoto sensore MAP forato o connettore allentato),
                tensione ECU instabile in guida. Il codice di errore
                memorizzato nell'ECU è l'unico modo per distinguere tra
                queste cause senza procedere per tentativi.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Gas "duro" o ritorno al minimo lento — attuatore o riduttore in difficoltà</h4>
              <p>
                Resistenza anomala alla manopola o ritorno al minimo lento
                indicano un problema nell'attuatore (brush DC consumati,
                ingranaggi usurati o incrostati di fango) oppure nella molla
                di richiamo che ha perso elasticità. L'ECU rileva la
                divergenza tra target e posizione reale e può generare un
                codice di tracking error. Prima di smontare il corpo
                farfallato verificare che il cavo di connessione non sia
                pinzato o compresso da un componente mal montato.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Test TPS con multimetro — range 0,5V – 4,5V lineare senza salti</h4>
              <p>
                Con accensione inserita (motore spento), misurare la tensione
                sull'uscita TPS APP ruotando lentamente la manopola: deve
                salire linearmente da 0,5V a 4,5V. Qualsiasi salto, zona
                piatta o valore fuori range (sotto 0,3V o sopra 4,7V) indica
                guasto. Ripetere sul TPS TP del corpo farfallato muovendo
                manualmente la farfalla — il segnale deve seguire
                proporzionalmente. Non forzare la farfalla meccanicamente
                con il motore acceso: il servo contrasta la forza esterna
                e può danneggiarsi.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Adattamento corpo farfallato — procedura obbligatoria dopo sostituzione</h4>
              <p>
                Dopo la sostituzione del corpo farfallato o di un sensore
                TPS è obbligatorio eseguire la procedura di adattamento
                tramite strumento diagnostico (KTM DDS, KTM Diagnostics Tool
                o tool aftermarket compatibile). La procedura registra il
                punto di chiusura meccanica reale della farfalla nell'ECU.
                Senza questa calibrazione il minimo è instabile, la mappa
                gas lavora con offset errato e possono comparire codici
                di errore al primo avviamento dopo la sostituzione.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeIntervallo">Intervallo</span>
              <h4>Manutenzione preventiva — connettori, pulizia corpo farfallato e firmware ECU</h4>
              <p>
                Ogni stagione: pulire il corpo farfallato con aria compressa
                evitando solventi aggressivi che danneggiano i sensori TPS;
                verificare il connettore principale del corpo farfallato
                (pin alimentazione e segnali TPS) per ossidazione o
                allentamento; controllare il cavo manopola per abrasioni.
                Aggiornare il firmware ECU quando disponibile — alcuni update
                KTM/Husqvarna correggono la calibrazione delle mappe gas
                e ottimizzano la risposta del traction control.
                Conservare sempre il backup della mappa corrente prima
                di qualsiasi aggiornamento firmware.
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
            <h3>Il RbW non è solo comodità — è il prerequisito tecnologico per traction control, launch e mappe gas selezionabili</h3>
            <p>
              Senza RbW l'ECU può agire su accensione e iniezione ma non
              sul flusso d'aria. Con RbW può modulare l'intera erogazione
              dalla radice: meno aria, meno combustione, meno coppia — in modo
              continuo, preciso e trasparente. Il cavo meccanico non
              permetterà mai questo livello di controllo.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Differenza col 4T</span>
            <h3>Sul 2T il RbW è ancora più critico — il powerband stretto amplifica qualsiasi ritardo o imprecisione nella risposta</h3>
            <p>
              Sul 4T una risposta gas in leggero ritardo è fastidiosa ma
              tollerabile. Sul 2T — con un powerband di 2.000–3.000 giri —
              lo stesso ritardo può significare uscire dalla zona di potenza
              in pochi istanti in uscita di curva. La precisione e la velocità
              del RbW diventano un vantaggio prestazionale concreto, non
              solo un'opzione di comfort.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>Qui il focus è sul sistema RbW elettronico — il corpo farfallato meccanico e il carburatore sono altrove</h3>
            <p>
              Questo capitolo tratta il Ride-by-Wire come sistema di controllo
              elettronico: sensori TPS, ECU, servo-attuatore, mappe gas e
              sicurezza. Il corpo farfallato meccanico senza RbW, il carburatore
              e il sistema TPI completo sono trattati nel capitolo Alimentazione (3.1).
              Centralina e mappe motore sono nel capitolo Elettronica 6.7 e 6.8.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default RideByWire;
