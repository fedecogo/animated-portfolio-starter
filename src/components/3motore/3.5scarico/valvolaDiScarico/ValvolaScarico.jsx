import "./valvolaScarico.scss";
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

const ValvolaScarico = () => {
  return (
    <section className="valvolaScarico" id="valvola-scarico">
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
              Sistema di scarico
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La valvola<br />di scarico
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Se c'è un singolo componente che definisce il carattere
              sonoro e dinamico del motore a 2 tempi moderno, è la
              valvola di scarico. Quella frazione di secondo in cui
              si apre — tra i 5.000 e gli 8.000 giri a seconda del
              motore — cambia tutto: il suono diventa più aperto e
              aggressivo, la coppia esplode, la moto si trasforma.
              Non è magia — è geometria variabile controllata
              dalla fisica delle onde e dal regime del motore.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il principio è lo stesso su ogni sistema — Yamaha YPVS,
              Kawasaki KIPS, Honda RC Valve, KTM PV, Suzuki AETC —
              variare l'altezza effettiva della luce di scarico in
              funzione del regime. A bassi giri la valvola abbassa
              il bordo superiore della luce, riducendo la finestra
              di apertura e alzando la coppia. Agli alti giri si
              ritrae completamente, liberando la luce nella sua
              dimensione massima e permettendo al motore di respirare
              a piena portata. Una distribuzione variabile senza
              alberi a camme, senza bilancieri, senza molle — solo
              una lamina o un tamburo che ruota di pochi gradi
              al momento giusto.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Il momento dell'apertura</span>
              <h3>Cosa succede quando si apre</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="low">①</span>
                <span className="miniText">Sotto la soglia — valvola abbassata, luce ridotta, coppia ai bassi più piena, banda di potenza ampia e morbida</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="mid">②</span>
                <span className="miniText">Avvicinamento alla soglia — il motore inizia a respirare diversamente, si sente il cambio di timbro nello scarico</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="open">③</span>
                <span className="miniText">Apertura — la valvola si ritrae, la luce si apre al massimo, il suono cambia nettamente e la coppia esplode</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="full">④</span>
                <span className="miniText">Piena potenza — luce completamente aperta, l'espansione lavora alla sua frequenza ottimale, erogazione al massimo</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="close">⑤</span>
                <span className="miniText">In chiusura gas — la valvola si richiude, il motore torna al profilo di coppia basso, pronto per il prossimo allungo</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── PERCHÉ BLOCK — il problema che risolve ──────────────────────── */}
        <motion.div
          className="perchéBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="perchéHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il problema fisico</span>
            <h3>Perché il 2T senza valvola ha una banda di potenza stretta — e come la valvola la allarga</h3>
            <p>
              Un motore a 2 tempi senza valvola di scarico è ottimizzato
              per un singolo regime. La luce di scarico ha un'altezza fissa —
              e quella altezza determina il momento di apertura e chiusura
              in gradi di manovella. Per un regime specifico l'espansione
              è calibrata perfettamente: le onde si sincronizzano, il
              riempimento supera il 130%, il motore eroga al massimo.
              Scendi sotto quel regime e le onde arrivano fuori tempo,
              la coppia crolla e il motore diventa molle e spugnoso.
              La valvola di scarico risolve questo problema alla radice.
            </p>
          </motion.div>

          <motion.div className="perchéGrid" variants={cardVariants}>

            <div className="perchéCard perchéSenza">
              <div className="perchéCardTop">
                <span className="perchéBadge badgeSenza">Senza valvola</span>
              </div>
              <h4>Luce fissa — un solo regime ottimale</h4>
              <p>
                Con luce fissa il motore ha un picco di potenza molto
                pronunciato in una finestra di 1.500 – 2.500 giri.
                Fuori da quella finestra la potenza cala drasticamente
                — il famoso "buco" del 2T che rendeva le moto anni
                '80 difficili da guidare. Alzare la luce aumenta il
                picco ma peggiora i bassi. Abbassarla migliora i bassi
                ma taglia i massimi. Non esiste una posizione fissa
                che soddisfi entrambe le esigenze contemporaneamente.
              </p>
              <div className="powerCurve curveNarrow">
                <div className="curveBar" style={{ height: "20%" }} />
                <div className="curveBar" style={{ height: "25%" }} />
                <div className="curveBar" style={{ height: "30%" }} />
                <div className="curveBar" style={{ height: "45%" }} />
                <div className="curveBar curveBarPeak" style={{ height: "100%" }} />
                <div className="curveBar" style={{ height: "55%" }} />
                <div className="curveBar" style={{ height: "28%" }} />
                <div className="curveBar" style={{ height: "18%" }} />
                <div className="curveBar" style={{ height: "12%" }} />
              </div>
              <span className="curveLabel">Curva stretta con picco acuto</span>
            </div>

            <div className="perchéCard perchéCon">
              <div className="perchéCardTop">
                <span className="perchéBadge badgeCon">Con valvola</span>
              </div>
              <h4>Luce variabile — ottimale su tutta la gamma</h4>
              <p>
                Con la valvola il motore ha due profili di funzionamento
                gestiti in modo continuo: a bassi regimi la luce ridotta
                mantiene alta la contropressione acustica e la coppia,
                agli alti la luce aperta libera la portata massima.
                La transizione avviene in modo progressivo — su alcuni
                sistemi su un arco di 2.000 – 3.000 giri — producendo
                una curva di coppia molto più lineare e una banda di
                potenza utilizzabile due o tre volte più ampia rispetto
                alla luce fissa.
              </p>
              <div className="powerCurve curveWide">
                <div className="curveBar" style={{ height: "38%" }} />
                <div className="curveBar" style={{ height: "52%" }} />
                <div className="curveBar" style={{ height: "68%" }} />
                <div className="curveBar" style={{ height: "80%" }} />
                <div className="curveBar curveBarPeak" style={{ height: "100%" }} />
                <div className="curveBar" style={{ height: "95%" }} />
                <div className="curveBar" style={{ height: "88%" }} />
                <div className="curveBar" style={{ height: "75%" }} />
                <div className="curveBar" style={{ height: "58%" }} />
              </div>
              <span className="curveLabel">Curva ampia e utilizzabile</span>
            </div>

          </motion.div>
        </motion.div>

        {/* ── TIPI BLOCK — i sistemi produttore per produttore ────────────── */}
        <motion.div
          className="tipiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tipiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">I sistemi più famosi</span>
            <h3>YPVS, KIPS, RC Valve, PV — ogni marchio con la sua soluzione</h3>
            <p>
              Il principio è identico su tutti i sistemi — variare
              l'altezza della luce di scarico in funzione del regime.
              La differenza è nell'attuazione meccanica: chi usa un
              tamburo rotante, chi una lamina scorrevole, chi un sistema
              a farfalla, chi una combinazione dei due. Ogni soluzione
              ha pro e contro in termini di precisione, peso, manutenzione
              e possibilità di tuning.
            </p>
          </motion.div>

          <motion.div className="tipiGrid" variants={cardVariants}>

            <div className="tipoCard tipoYPVS">
              <div className="tipoHeader">
                <span className="tipoMarchio">Yamaha</span>
                <span className="tipoNome">YPVS</span>
                <span className="tipoClaim">Yamaha Power Valve System</span>
              </div>
              <h4>Il tamburo motorizzato — il sistema di riferimento</h4>
              <p>
                Lo YPVS è il sistema più diffuso e replicato nell'industria.
                Un tamburo cilindrico ruota nella luce di scarico comandato
                da un motorino elettrico a passo controllato dalla centralina.
                Il tamburo ha un profilo sagomato: in posizione chiusa
                abbassa il bordo superiore della luce di 5 – 8 mm; in
                posizione aperta si ritrae completamente nel proprio alloggiamento
                lasciando la luce libera. La gestione elettronica permette
                mappe di apertura in funzione di regime, temperatura e —
                sui sistemi più recenti — posizione della farfalla.
                Il grande vantaggio è la precisione e la ripetibilità —
                il motorino posiziona il tamburo con un'accuratezza
                dell'ordine del grado.
              </p>
            </div>

            <div className="tipoCard tipoKIPS">
              <div className="tipoHeader">
                <span className="tipoMarchio">Kawasaki</span>
                <span className="tipoNome">KIPS</span>
                <span className="tipoClaim">Kawasaki Integrated Powervalve System</span>
              </div>
              <h4>Il sistema più complesso — valvola principale + sub-valvole</h4>
              <p>
                Il KIPS è probabilmente il sistema meccanicamente più sofisticato
                mai montato su un 2T di serie. Oltre alla valvola principale
                nella luce di scarico — una lamina che scorre verticalmente —
                include valvole secondarie nei condotti di travaso superiori
                (sub-exhaust ports) che si aprono e chiudono in sincrono.
                Questo permette di modificare non solo l'altezza della luce
                di scarico ma anche la geometria del lavaggio alla luce di
                travaso, con un effetto sulla curva di coppia significativamente
                più ampio rispetto ai sistemi con sola valvola principale.
                La complessità è il prezzo: il KIPS richiede una manutenzione
                attenta e la pulizia periodica di tutti i componenti mobili.
              </p>
            </div>

            <div className="tipoCard tipoRCV">
              <div className="tipoHeader">
                <span className="tipoMarchio">Honda</span>
                <span className="tipoNome">RC Valve</span>
                <span className="tipoClaim">Revolution Control Valve</span>
              </div>
              <h4>La valvola a farfalla — soluzione elegante e affidabile</h4>
              <p>
                Honda ha adottato un approccio diverso con il sistema RC Valve:
                una valvola a farfalla che ruota attorno a un asse orizzontale
                nella luce di scarico. A posizione chiusa la farfalla sporge
                nel condotto riducendo la sezione effettiva; a posizione aperta
                si allinea con le pareti del condotto scomparendo dal flusso.
                Il sistema è meccanicamente più semplice del KIPS e del tamburo
                YPVS, con meno componenti soggetti a usura. L'attuazione
                è centrifuga sui sistemi più vecchi — una massa rotante
                comandata dal regime dell'albero motore attraverso un sistema
                di leverismo — completamente meccanica e indipendente
                dall'elettronica.
              </p>
            </div>

            <div className="tipoCard tipoKTM">
              <div className="tipoHeader">
                <span className="tipoMarchio">KTM / Husqvarna</span>
                <span className="tipoNome">PV</span>
                <span className="tipoClaim">Power Valve — attuazione centrifuga</span>
              </div>
              <h4>Il sistema centrifugo puro — meccanico, semplice, efficace</h4>
              <p>
                Il sistema Power Valve di KTM nelle versioni off-road è
                interamente meccanico: un peso centrifugo solidale all'albero
                motore, attraverso un sistema di leverismo e molle, comanda
                la rotazione della valvola nella luce di scarico.
                Non c'è nessun motorino, nessuna centralina, nessun sensore.
                La soglia di apertura dipende dalla rigidità delle molle —
                si modifica fisicamente sostituendo la molla con una più
                rigida (apertura anticipata) o più morbida (apertura ritardata).
                È il sistema preferito per l'uso enduro puro: zero componenti
                elettronici da proteggere da acqua e fango, manutenzione
                minimale, peso ridotto.
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
              <span className="placeholderText">Immagine / GIF — valvola YPVS in sezione: posizione chiusa vs aperta con luce di scarico a confronto</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Tamburo YPVS</span>
            <p>
              Il tamburo in posizione chiusa abbassa il bordo superiore
              della luce di scarico di 5 – 8 mm. Quella differenza
              di pochi millimetri cambia completamente la finestra
              temporale in cui il cilindro è aperto verso lo scarico —
              e con essa tutta la fisica delle onde nell'espansione.
              In posizione aperta il tamburo scompare nell'alloggiamento
              e la luce è libera nella sua dimensione massima.
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
            <span className="sectionLabel">Costruzione e materiali</span>
            <h3>Tamburo, leverismo e attuatore — i componenti da conoscere</h3>
            <p>
              Indipendentemente dal sistema, ogni valvola di scarico
              è composta da tre sottosistemi: l'elemento mobile che
              modifica la geometria della luce, il meccanismo di
              trasmissione del movimento, e l'attuatore che genera
              il movimento. Conoscere questi tre livelli è
              indispensabile per la manutenzione e il tuning.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costrCard">
              <span className="costrIdx costrIdxOrange">01</span>
              <h4>L'elemento mobile — tamburo o lamina</h4>
              <p>
                Il tamburo è tipicamente in acciaio inossidabile o in
                alluminio anodizzato, con profilo sagomato a CNC per
                garantire la corretta variazione di altezza al variare
                dell'angolo di rotazione. La superficie che entra in
                contatto con i gas di scarico deve resistere a temperature
                di 400 – 600 °C e all'attacco chimico dei gas combusti —
                per questo molti tamburi aftermarket sono rivestiti
                con trattamenti ceramici o nitrurazione ionica.
                Le lamine scorrevoli (sistemi Kawasaki) sono in acciaio
                al cromo-vanadio con bordi lavorati per ridurre
                l'attrito con le guide nel cilindro.
              </p>
            </div>

            <div className="costrCard">
              <span className="costrIdx costrIdxYellow">02</span>
              <h4>Il leverismo — la catena cinematica</h4>
              <p>
                Il movimento dall'attuatore alla valvola passa attraverso
                un leverismo — solitamente esterno al cilindro, accessibile
                dal lato destro della moto. Nei sistemi YPVS il leverismo
                converte il movimento rotativo del motorino in rotazione
                del tamburo attraverso un sistema di leve e cavi in acciaio.
                Il leverismo è il componente che accumula più gioco nel
                tempo: perni usurati, cavi allungati o sfilacciati e leve
                deformate introducono isteresi nel sistema — la valvola
                non risponde al regime con la precisione di progetto,
                la curva si appiattisce e la transizione diventa più brusca.
              </p>
            </div>

            <div className="costrCard">
              <span className="costrIdx costrIdxGreen">03</span>
              <h4>L'attuatore — motorino vs centrifugo</h4>
              <p>
                I sistemi elettronici usano un motorino passo-passo
                (stepper motor) con encoder di posizione. Il motorino
                è alimentato dalla centralina che ne comanda la posizione
                su una mappa tridimensionale regime-temperatura-apertura.
                I sistemi meccanici centrifughi usano masse rotanti
                collegate all'albero motore: al crescere del regime
                la forza centrifuga vince la resistenza delle molle
                e ruota la valvola. La soglia è regolabile cambiando
                la molla — l'unica variabile di tuning disponibile
                su questi sistemi.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── FISICA BLOCK — una sola legge, ben spiegata ─────────────────── */}
        <motion.div
          className="fisicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="fisicaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il principio fisico</span>
            <h3>Perché pochi millimetri di luce cambiano tutto — l'area aperta e la durata di apertura</h3>
          </motion.div>

          <motion.div className="fisicaContent" variants={cardVariants}>
            <div className="fisicaFormula">
              <span className="formulaEq">t<sub>apertura</sub> = (α · 360°) / (n / 60)</span>
              <span className="formulaLabel">Durata di apertura della luce in funzione del regime</span>
            </div>
            <div className="fisicaTesto">
              <p>
                La luce di scarico rimane aperta per un numero fisso di gradi
                di manovella — determinato dalla sua posizione nel cilindro.
                Ma quei gradi corrispondono a un tempo in millisecondi che
                dipende dal regime: a 3.000 giri ogni grado dura 55 µs,
                a 10.000 giri dura solo 16 µs. Questo significa che a
                regime alto la finestra temporale si riduce drasticamente —
                e l'onda di ritorno dell'espansione deve arrivare
                in quella finestra più stretta per essere efficace.
              </p>
              <p>
                La valvola di scarico interviene proprio qui: abbassando
                la luce a bassi regimi <strong>anticipa la chiusura</strong>
                in gradi di manovella, accorciando la finestra e alzando
                la contropressione media nel condotto. Alzando la luce
                agli alti regimi <strong>massimizza la durata</strong>
                e la sezione di passaggio quando il motore ne ha bisogno.
                In entrambi i casi la valvola fa coincidere la geometria
                con il regime — quello che una luce fissa non può fare.
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
            <span className="captionTag">Il deposito — il nemico numero uno</span>
            <p>
              L'olio che brucia nella miscela lascia residui carboniosi
              nelle zone più fredde del condotto di scarico. La valvola —
              che si muove in un alloggiamento con tolleranze di decimi
              di millimetro — è particolarmente vulnerabile. I depositi
              si accumulano tra il tamburo e le sue guide fino a bloccare
              il movimento. Il risultato: la valvola resta ferma in
              posizione intermedia, il motore perde il suo colpo
              caratteristico e la banda di potenza diventa anomala.
              Pulizia periodica — non opzionale.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — tamburo valvola con depositi carboniosi vs pulito dopo manutenzione</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── MANUTENZIONE BLOCK ──────────────────────────────────────────── */}
        <motion.div
          className="manutBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="manutHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Manutenzione</span>
            <h3>Pulizia, verifica del leverismo e taratura — la routine che mantiene il colpo</h3>
            <p>
              La valvola di scarico è il componente più trascurato
              e più impattante sulla guidabilità del 2T. Una valvola
              sporca o con il leverismo usurato costa più potenza
              e più guidabilità di qualsiasi altro problema meccanico
              non critico. La manutenzione è semplice — basta farla.
            </p>
          </motion.div>

          <motion.div className="manutGrid" variants={cardVariants}>

            <div className="manutCard">
              <div className="manutCardNum">1</div>
              <h4>Pulizia del tamburo e delle guide</h4>
              <p>
                Ogni 20 – 30 ore in uso intenso, o a ogni revisione
                stagionale. Smontare il tamburo dalla luce di scarico
                — solitamente accessibile dopo aver tolto il collettore
                o la testata. Immergere in solvente sgrassante (WD-40
                diluito, carburante filtrato o prodotti specifici tipo
                Motorex Clean) per 15 – 20 minuti. Rimuovere i depositi
                con spazzola a setole di ottone — mai utensili metallici
                che rigano le superfici di tenuta. Verificare che il
                profilo del tamburo sia integro: graffi profondi o
                scalini indicano usura da contatto con le guide.
              </p>
            </div>

            <div className="manutCard">
              <div className="manutCardNum">2</div>
              <h4>Ispezione del leverismo esterno</h4>
              <p>
                Con il tamburo pulito e rimontato, verificare il gioco
                totale del leverismo muovendo manualmente il braccio
                di comando da un estremo all'altro. Un gioco superiore
                a 1 – 1,5 mm in corrispondenza del punto di aggancio
                del cavo indica usura dei perni o allungamento del cavo.
                Sostituire i perni usurati singolarmente — sono componenti
                in acciaio di costo minimo. Il cavo va sostituito
                integralmente se presenta sfilacciature o kinking —
                non si regola, non si tensiona artificialmente.
              </p>
            </div>

            <div className="manutCard">
              <div className="manutCardNum">3</div>
              <h4>Verifica della corsa — apertura completa</h4>
              <p>
                Con il motore avviato e portato gradualmente ai massimi
                regimi, la valvola deve aprirsi completamente e in modo
                progressivo. Un modo per verificarlo senza strumenti:
                portare il motore al massimo regime in un rapporto alto
                e ascoltare — la transizione deve essere fluida e
                il "colpo" deve essere netto e ripetibile. Se la
                transizione è brusca, irregolare o il motore "stacca"
                invece di spingere, il leverismo ha gioco eccessivo
                o il tamburo non raggiunge la posizione di piena apertura.
                La verifica strumentale si esegue con un analizzatore
                di combustione portatile o al banco prova.
              </p>
            </div>

            <div className="manutCard">
              <div className="manutCardNum">4</div>
              <h4>Taratura della soglia di apertura</h4>
              <p>
                Sui sistemi meccanici centrifughi (KTM, alcuni Husqvarna)
                la soglia si regola sostituendo la molla del contrappeso.
                Una molla più rigida ritarda l'apertura — più coppia
                ai bassi, picco più alto. Una molla più morbida anticipa —
                banda più ampia, picco leggermente anticipato. Il kit molle
                aftermarket di riferimento (Boyesen, TM Designworks) include
                3 – 5 rigidità diverse con le istruzioni di abbinamento per
                tipo di utilizzo. Sui sistemi elettronici la taratura
                si esegue modificando la mappa nella centralina —
                intervento da affidare a chi ha il software specifico
                del costruttore o un'unità aftermarket programmabile.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="diagnosBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnosHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi</span>
            <h3>Riconoscere una valvola che non funziona — i sintomi da non confondere</h3>
            <p>
              I problemi alla valvola di scarico sono spesso scambiati
              per problemi al carburatore, alla candela o all'espansione.
              Il sintomo principale è sempre lo stesso: la moto ha perso
              il suo colpo — ma non è un problema di alimentazione.
            </p>
          </motion.div>

          <motion.div className="diagnosGrid" variants={cardVariants}>

            <div className="diagnosCard diagnosCard1">
              <span className="diagnosBadge">Sintomo</span>
              <h4>La moto "non ha più il colpo" ma parte e va</h4>
              <p>
                Valvola bloccata in posizione parzialmente chiusa per
                depositi. Il motore eroga normalmente ai bassi ma non
                ha il cambio di carattere agli alti. Pulizia del tamburo
                e del leverismo risolve nel 90% dei casi.
              </p>
            </div>

            <div className="diagnosCard diagnosCard2">
              <span className="diagnosBadge">Sintomo</span>
              <h4>Transizione brusca e irregolare — la moto "stacca"</h4>
              <p>
                Leverismo con gioco eccessivo o cavo sfilacciato. Il
                tamburo si muove a scatti invece che progressivamente —
                la valvola si apre di colpo invece che gradualmente.
                Verificare gioco dei perni e stato del cavo prima
                di qualsiasi altra diagnosi.
              </p>
            </div>

            <div className="diagnosCard diagnosCard3">
              <span className="diagnosBadge">Sintomo</span>
              <h4>Suono rauco e aperto a tutti i regimi — anche a bassi giri</h4>
              <p>
                Valvola bloccata in posizione aperta — il contrario
                del primo caso. Il tamburo è intrappolato in posizione
                aperta per usura delle guide o per un componente del
                leverismo rotto. Il motore suona sempre "aperto",
                perde coppia ai bassi e consuma più del normale.
              </p>
            </div>

            <div className="diagnosCard diagnosCard4">
              <span className="diagnosBadge">Sintomo</span>
              <h4>Spia di errore YPVS — motorino non risponde</h4>
              <p>
                Sui sistemi elettronici la centralina monitora la posizione
                del motorino. Se il feedback di posizione non corrisponde
                al comando la spia lampeggia e la valvola va in posizione
                di sicurezza (solitamente parzialmente aperta). Verificare
                connettori, motorino e sensore di posizione con multimetro
                prima di sostituire la centralina.
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
            <span className="cardTag">Aftermarket</span>
            <h3>Tamburi racing e kit leverismo — cosa cambia davvero</h3>
            <p>
              I tamburi aftermarket (Boyesen, VHM, Moto Tassinari) sono
              lavorati a CNC con profili ottimizzati per specifiche combinazioni
              di motore e utilizzo. Il profilo del tamburo determina la legge
              di apertura — non solo il punto di apertura ma come varia
              l'altezza della luce nei gradi di rotazione intermedi. Un profilo
              più aggressivo apre più velocemente concentrando la potenza.
              Un profilo progressivo apre gradualmente per una banda più
              lineare. Il kit leverismo in billet alluminio riduce il gioco
              a zero e dà una risposta più precisa — percepibile soprattutto
              in uscita dalle curve lente dove la transizione conta di più.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Il suono</span>
            <h3>Perché la valvola cambia il suono — la luce e la frequenza fondamentale</h3>
            <p>
              Il cambio di suono all'apertura della valvola non è solo
              un aumento di volume — è un cambiamento della frequenza
              fondamentale dello scarico. Con la luce piccola il condotto
              risuona a una frequenza più alta — suono più chiuso e
              sordo. Con la luce aperta il volume acustico del condotto
              aumenta e la frequenza scende — il timbro si apre,
              diventa più grave e più "pieno". È lo stesso principio
              per cui una tromba suona diversamente aprendo o chiudendo
              la sordina. Quel suono è la firma acustica del 2T —
              la fisica fatta musica.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Curiosità racing</span>
            <h3>La valvola nei GP degli anni '80 — la corsa agli armamenti</h3>
            <p>
              Le valvole di scarico variabile hanno rivoluzionato il
              motocross e il GP 125/250 a partire dalla metà degli anni '80.
              Prima dell'YPVS (1983 sulla RD500LC) i piloti dovevano
              scegliere tra un motore guidabile con poco picco o uno
              esplosivo ma difficilissimo. Dopo, le moto divennero
              simultaneamente più potenti e più guidabili. Il KIPS
              della Kawasaki KX250 del 1986 è considerato il sistema
              meccanicamente più avanzato mai montato su una moto di
              serie — cinque valvole in movimento sincrono,
              interamente meccanico, senza elettronica.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default ValvolaScarico;
