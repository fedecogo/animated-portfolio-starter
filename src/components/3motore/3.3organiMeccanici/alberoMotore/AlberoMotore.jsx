import "./alberoMotore.scss";
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

const AlberoMotore = () => {
  return (
    <section className="alberoMotore" id="albero-motore">
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
              Organi meccanici
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              L'albero motore nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              L'albero motore è il cuore meccanico del motore — il
              componente attorno a cui tutto il resto ruota, letteralmente.
              Riceve l'impulso di forza dalla biella ad ogni combustione
              e lo trasforma in coppia continua all'asse di uscita.
              Nel motore a 2 tempi la sua struttura è radicalmente diversa
              da quella del 4 tempi: non è monoblocco ricavato da un
              unico pezzo d'acciaio, ma è assemblato da più elementi
              distinti — le due metà del carter e il perno di manovella —
              pressati insieme con interferenza controllata. Questa
              costruzione definisce ogni aspetto del suo comportamento
              meccanico, dall'equilibratura alla sostituzione dei
              cuscinetti.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              L'albero del 2T svolge anche una funzione che non esiste
              nel 4 tempi: i suoi contrappesi sigillano il carter
              inferiore durante la rotazione, partecipando attivamente
              alla gestione della pressione interna che alimenta il
              processo di travaso. La geometria dei contrappesi non è
              quindi determinata solo dall'equilibratura — ma anche
              dall'aerodinamica interna del carter.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia dell'albero</span>
              <h3>I componenti dell'albero assemblato</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Perno di banco — i perni che girano sui cuscinetti del carter</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Perno di manovella — il perno eccentrico su cui gira la testa grande della biella</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Manovelle — i dischi che collegano perno di banco e perno di manovella</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Contrappesi — le masse che equilibrano il pistone e la biella in rotazione</span>
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
              <span className="placeholderText">Immagine / GIF — albero motore 2T esploso con parti nominate</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Struttura</span>
            <p>
              Albero motore 2T assemblato: i due perni di banco agli
              estremi che appoggiano sui cuscinetti del carter, il perno
              di manovella centrale eccentrico con il cuscinetto a rulli
              della biella, e i dischi manovella con i contrappesi
              integrati che bilanciano le masse rotanti e oscillanti.
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
            <h3>Albero assemblato — perché il 2T non usa l'albero monoblocco</h3>
            <p>
              La scelta costruttiva dell'albero assemblato non è un limite
              tecnologico — è una necessità funzionale. Nel motore a 2
              tempi il cuscinetto della testa grande della biella è a
              rulli cilindrici che non si smontano radialmente: per
              infilare la biella sul perno di manovella, l'albero deve
              essere aperto. L'assemblaggio per interferenza consente
              questa operazione mantenendo la rigidità necessaria
              durante il funzionamento.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">01</span>
              <h4>Interferenza di montaggio</h4>
              <p>
                Il perno di manovella viene pressato nei fori dei due
                dischi manovella con un'interferenza precisa — tipicamente
                0,02 – 0,05 mm per lato. Questo accoppiamento a pressione
                garantisce la trasmissione del momento torcente senza
                bulloni né chiavette. La forza di estrazione è
                nell'ordine delle decine di tonnellate — il che spiega
                perché un albero correttamente assemblato non si smonta
                durante il normale utilizzo, nemmeno sotto i carichi
                impulsivi più violenti.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">02</span>
              <h4>Allineamento — il parametro critico</h4>
              <p>
                Dopo l'assemblaggio, i due perni di banco devono essere
                perfettamente coassiali — l'errore di allineamento
                massimo ammesso è nell'ordine di 0,01 – 0,02 mm misurato
                con comparatore sulle superfici di battuta dei cuscinetti.
                Un albero fuori allineamento genera vibrazioni, usura
                accelerata dei cuscinetti di banco e, nei casi gravi,
                fatica ciclica che porta alla rottura del perno di
                manovella. L'allineamento si corregge con pressa e
                supporti a V prima della rimontaggio nel carter.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">03</span>
              <h4>Smontaggio e riassemblaggio</h4>
              <p>
                Lo smontaggio dell'albero richiede una pressa idraulica
                e supporti specifici per non danneggiare le superfici
                dei perni durante l'espulsione. Pressare senza supporti
                adeguati deforma i dischi manovella in modo irreversibile.
                Il riassemblaggio richiede il preriscaldo dei dischi
                a 80 – 120 °C per facilitare l'inserimento del perno
                con l'interferenza corretta, seguito dall'allineamento
                immediato prima che l'accoppiamento si raffreddi.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">04</span>
              <h4>Materiali dell'albero</h4>
              <p>
                I perni di banco e il perno di manovella sono in acciaio
                da cementazione (16MnCr5, 20MnCr5) o in acciaio da
                nitrurazione. Lo strato superficiale indurito —
                cementato fino a 1 – 1,5 mm di profondità con durezza
                HRC 58 – 62 — resiste all'usura da parte dei rulli dei
                cuscinetti. Il cuore rimane tenace per assorbire
                gli impatti. I dischi manovella sono in acciaio bonificato
                o in ghisa sferoidale nei motori di serie.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── EQUILIBRATURA BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="equilibraturaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="equilibraturaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Equilibratura</span>
            <h3>Contrappesi e bilanciamento — la fisica delle masse rotanti</h3>
            <p>
              Un albero non equilibrato genera forze centrifughe che
              si trasmettono al carter, al telaio e al pilota sotto
              forma di vibrazioni. Nel motore a 2 tempi, dove i regimi
              operativi sono molto alti, anche un piccolo squilibrio
              di massa si amplifica quadraticamente con il regime —
              raddoppiare i giri moltiplica per quattro le forze vibratorie.
              L'equilibratura è quindi un'operazione di precisione
              che si esegue sia in fase produttiva che dopo ogni
              intervento sull'albero.
            </p>
          </motion.div>

          <motion.div className="equilibraturaContent" variants={cardVariants}>

            <div className="equiLeft">
              <div className="equiItem">
                <span className="equiLabel">Fattore di equilibratura tipico 2T</span>
                <div className="equiBar">
                  <div className="equiFill" style={{ width: "55%" }} />
                </div>
                <span className="equiValue">50 – 60%</span>
                <p>
                  Il fattore di equilibratura esprime la percentuale
                  delle masse oscillanti (pistone + biella) compensata
                  dai contrappesi. Non si compensa il 100% perché le
                  forze oscillanti cambiano direzione — compensare
                  completamente le forze verticali introdurrebbe forze
                  orizzontali altrettanto gravi. Il 50 – 60% è il
                  compromesso standard per i motori monocilindrici a 2T.
                </p>
              </div>

              <div className="equiItem">
                <span className="equiLabel">Tolleranza squilibrio residuo</span>
                <div className="equiBar">
                  <div className="equiFill equiFillGreen" style={{ width: "15%" }} />
                </div>
                <span className="equiValue equiValueGreen">&lt; 1 g·cm per piano</span>
                <p>
                  Lo squilibrio residuo dopo la lavorazione è espresso
                  in grammi per centimetro (g·cm) e misurato su macchina
                  di equilibratura dinamica. Valori inferiori a 1 g·cm
                  per piano sono accettabili per motori stradali;
                  i motori da competizione scendono sotto 0,5 g·cm.
                  La correzione si esegue aggiungendo o rimuovendo
                  materiale dai contrappesi.
                </p>
              </div>
            </div>

            <div className="equiRight">
              <div className="equiCard">
                <span className="equiCardTag">Contrappesi</span>
                <h4>La doppia funzione dei contrappesi nel 2T</h4>
                <p>
                  Nei motori a 2 tempi i contrappesi dei dischi manovella
                  svolgono una funzione aggiuntiva rispetto al puro
                  bilanciamento: durante la rotazione spazzano l'interno
                  del carter contribuendo alla movimentazione della
                  miscela fresca verso i condotti di travaso. La loro
                  forma — non solo il peso — è ottimizzata per ridurre
                  le perdite aerodinamiche interne e migliorare l'efficienza
                  di pompaggio del carter. Modificare i contrappesi
                  per bilanciatura senza considerare l'idrodinamica
                  interna è un errore che può peggiorare la risposta
                  ai bassi regimi.
                </p>
              </div>

              <div className="equiCard">
                <span className="equiCardTag">Squilibrio dopo revisione</span>
                <h4>Quando ribilanciare l'albero</h4>
                <p>
                  L'albero va ribilanciato dopo ogni sostituzione della
                  biella con una di peso diverso, dopo la rettifica o
                  sostituzione del pistone con un modello di massa
                  differente, dopo interventi di alleggerimento dei
                  dischi manovella e dopo qualsiasi riparazione che
                  abbia rimosso o aggiunto materiale all'albero.
                  Non ribilanciare dopo queste operazioni è tra le
                  cause più comuni di rottura prematura dei cuscinetti
                  di banco e di telaio.
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
            <span className="captionTag">Allineamento</span>
            <p>
              Verifica dell'allineamento dell'albero su prismi a V con
              comparatore centesimale: i due perni di banco devono
              risultare perfettamente coassiali entro 0,01 – 0,02 mm.
              Questa misura è il primo controllo da eseguire dopo ogni
              smontaggio e prima di rimontare l'albero nel carter.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — allineamento albero su prismi V con comparatore</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── CARTER PUMP BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="carterPumpBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="carterPumpHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Funzione nel ciclo</span>
            <h3>L'albero come pompante — il 2T non ha solo un albero, ha un compressore</h3>
            <p>
              Nel motore a 2 tempi l'albero motore non si limita a
              raccogliere la coppia — partecipa attivamente al ciclo
              termodinamico. Quando il pistone sale, il volume del
              carter aumenta e si crea depressione che aspira la miscela
              fresca. Quando il pistone scende, il volume si riduce e
              la miscela viene compressa nel carter prima di essere
              spinta nei condotti di travaso. I dischi manovella e i
              loro contrappesi influenzano direttamente l'efficienza
              di questo processo di pompaggio.
            </p>
          </motion.div>

          <motion.div className="carterPumpGrid" variants={cardVariants}>

            <div className="pumpCard pumpAspira">
              <div className="pumpCardTop">
                <span className="pumpBadge badgeAspira">Fase aspirazione</span>
                <span className="pumpAngolo">Pistone sale → PMS</span>
              </div>
              <h4>Depressione nel carter</h4>
              <p>
                Con il pistone in salita il volume del carter aumenta.
                La depressione generata apre il pacco lamellare (o la
                luce di aspirazione) e aspira la miscela fresca
                carburante-olio-aria nel carter. I dischi manovella
                in rotazione contribuiscono alla movimentazione della
                carica nel carter, evitando zone stagnanti che
                ridurrebbero l'efficienza del riempimento.
              </p>
            </div>

            <div className="pumpCard pumpComprimeCart">
              <div className="pumpCardTop">
                <span className="pumpBadge badgeComprimeCart">Fase compressione carter</span>
                <span className="pumpAngolo">Pistone scende → PMI</span>
              </div>
              <h4>Pre-compressione della miscela</h4>
              <p>
                Con il pistone in discesa il carter si comprime. La
                miscela fresca viene pre-compressa a una pressione
                leggermente superiore all'atmosferica — tipicamente
                1,2 – 1,5 bar — prima di essere spinta nei condotti
                di travaso. Questa pre-compressione è ciò che rende
                possibile il lavaggio del cilindro: senza pressione
                nel carter la miscela non salirebbe autonomamente
                verso la camera di combustione.
              </p>
            </div>

            <div className="pumpCard pumpTravaso">
              <div className="pumpCardTop">
                <span className="pumpBadge badgeTravaso">Fase travaso</span>
                <span className="pumpAngolo">Luci scoperte al PMI</span>
              </div>
              <h4>Trasferimento nel cilindro</h4>
              <p>
                Quando il pistone apre le luci di travaso, la miscela
                compressa nel carter risale attraverso i condotti
                laterali nel cilindro. La forma dei dischi manovella
                e dei contrappesi influenza la velocità con cui il
                carter si svuota e la completezza del trasferimento:
                un carter ben progettato trasferisce quasi tutta la
                carica senza lasciare sacche di miscela residua
                che andrebbero perse allo scarico nel ciclo successivo.
              </p>
            </div>

            <div className="pumpCard pumpSigilla">
              <div className="pumpCardTop">
                <span className="pumpBadge badgeSigilla">Tenuta carter</span>
                <span className="pumpAngolo">Tutto il ciclo</span>
              </div>
              <h4>Sigillatura del carter — la condizione necessaria</h4>
              <p>
                Perché il carter possa funzionare come pompante, deve
                essere perfettamente stagno. Qualsiasi perdita — dalla
                guarnizione del carter, dai paraolio dell'albero o
                dalle spine di centramento — riduce la pre-compressione
                e degrada le prestazioni in modo spesso difficile da
                diagnosticare. Un carter che perde aria è uno dei
                problemi più subdoli del 2T: il motore funziona ma
                non rende mai come dovrebbe.
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
              <span className="placeholderText">Immagine / GIF — ciclo di pompaggio del carter con albero in rotazione</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Pompaggio carter</span>
            <p>
              Schema del ciclo di pompaggio del carter: la miscela
              entra durante la salita del pistone, viene compressa
              durante la discesa e trasferita nel cilindro quando
              le luci di travaso si aprono. I dischi manovella
              partecipano attivamente alla movimentazione interna
              della carica.
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
            <h3>Riconoscere un albero che sta cedendo — misure e segnali</h3>
            <p>
              L'albero motore è uno dei componenti più longevi del
              motore se correttamente manutenuto. Raramente si rompe
              senza preavviso — nella quasi totalità dei casi il
              deterioramento è preceduto da settimane o mesi di segnali
              che è possibile rilevare con l'ascolto attento e le
              misure corrette durante la revisione.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Gioco assiale — il controllo con le mani</h4>
              <p>
                Con il motore smontato, si afferra l'albero e si tenta
                di spostarlo assialmente — lungo il suo asse di rotazione.
                Un gioco superiore a 0,10 – 0,15 mm indica usura dei
                cuscinetti di banco o dei piani di arresto nel carter.
                Il gioco assiale eccessivo causa vibrazioni assiali,
                usura delle guarnizioni paraolio e, nei casi avanzati,
                contatto tra i dischi manovella e le pareti del carter.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Vibrazioni a regime specifico</h4>
              <p>
                Vibrazioni intense che compaiono in un preciso range
                di giri — tipicamente tra 4.000 e 7.000 rpm — e
                scompaiono fuori da quel range indicano una frequenza
                di risonanza innescata da uno squilibrio o da un
                cuscinetto di banco deteriorato. Le vibrazioni
                a regime crescente e non legate a un range specifico
                indicano invece un progressivo peggioramento del
                cuscinetto.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Controllo allineamento su prismi V</h4>
              <p>
                L'allineamento dei perni di banco si verifica appoggiando
                l'albero su prismi a V e ruotandolo lentamente mentre
                si rileva la deviazione con un comparatore centesimale
                sulle superfici di banco. Il valore massimo ammesso
                è 0,02 mm — oltre questa soglia l'albero va raddrizzato
                su pressa prima del rimontaggio nel carter.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Usura del perno di manovella</h4>
              <p>
                Il diametro del perno di manovella si misura con
                micrometro in almeno tre posizioni angolari e due
                quote assiali. L'ovalizzazione massima ammessa è
                0,005 – 0,010 mm; una conicità superiore a 0,008 mm
                indica usura asimmetrica causata dal carico non
                uniforme dei rulli del cuscinetto. Perni fuori
                tolleranza si rettificano o si sostituisce l'albero.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Tenuta paraolio — il test della depressione</h4>
              <p>
                I paraolio dell'albero si verificano con una pompa
                del vuoto applicata al carter sigillato: si porta
                il carter a –0,5 bar e si osserva se la depressione
                si mantiene per almeno 60 secondi. Un calo rapido
                indica perdita dai paraolio, dalle guarnizioni o
                da microfessure nel carter. Questo test va eseguito
                a ogni revisione — è l'unico modo per trovare
                perdite che non sono visibili esternamente.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Vita operativa e revisione programmata</h4>
              <p>
                In ambito agonistico l'albero si ispeziona a ogni
                revisione motore (25 – 40 ore) e si sostituisce
                al primo segno di usura del perno di manovella o
                di deformazione dei dischi. In uso amatoriale
                la vita può superare le 200 ore se la lubrificazione
                è sempre stata corretta e il motore non ha subito
                grippaggi o detonazioni severe. La sostituzione
                preventiva dei soli cuscinetti di banco è
                raccomandabile ogni 80 – 100 ore.
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
            <span className="cardTag">Preparazione</span>
            <h3>Alleggerimento dei dischi manovella</h3>
            <p>
              In preparazione si rimuove materiale dai dischi manovella
              nelle zone non strutturali per ridurre il peso rotante e
              migliorare la risposta ai transitori. L'alleggerimento
              si esegue su tornio o fresatrice CNC rispettando le
              linee di flusso del materiale forgiato — le fresature
              non devono attraversare perpendicolarmente la direzione
              delle fibre. Dopo ogni alleggerimento è obbligatorio
              ribilanciare l'albero su macchina dinamica prima del
              rimontaggio.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Strokes</span>
            <h3>Variare la corsa — alberi a corsa modificata</h3>
            <p>
              Aumentare la corsa del pistone (stroke) incrementa la
              cilindrata e sposta la curva di coppia verso i bassi
              regimi. Si realizza con alberi a perno di manovella
              eccentrico di raggio maggiore. L'operazione richiede
              la verifica della clearance tra pistone e testa,
              la geometria delle luci del cilindro (che cambiano
              i tempi di apertura con la corsa diversa) e quasi
              sempre la sostituzione del cilindro per mantenere
              il rapporto di compressione desiderato.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>Alberi aftermarket — Hot Rods, Prox, Wiseco</h3>
            <p>
              I principali produttori aftermarket (Hot Rods, ProX,
              Wiseco, Kibblewhite) offrono alberi completi di biella
              e cuscinetti come kit, oppure solo il gruppo albero
              senza biella per la sostituzione selettiva. Prima
              dell'acquisto è fondamentale verificare la compatibilità
              della corsa, la lunghezza del perno di banco e il
              diametro dei perni di banco con i cuscinetti del carter
              originale — differenze anche minime rendono
              l'accoppiamento impossibile o non sicuro.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default AlberoMotore;
