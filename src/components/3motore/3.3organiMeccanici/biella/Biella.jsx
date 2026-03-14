import "./biella.scss";
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

const Biella = () => {
  return (
    <section className="biella" id="biella">
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
              La biella nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La biella è il collegamento tra il mondo lineare e il mondo
              rotativo del motore. Da un lato abbraccia lo spinotto del
              pistone con la testa piccola, seguendo il moto alternativo
              della corsa; dall'altro avvolge il perno di manovella
              dell'albero motore con la testa grande, trascinandolo in
              rotazione. In questo movimento oscillante continuo assorbe
              forze di trazione e compressione nell'ordine di diverse
              tonnellate ad ogni combustione, a frequenze che nei motori
              da competizione superano i 10.000 giri al minuto.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Nel motore a 2 tempi la biella lavora in condizioni ancora
              più severe rispetto al 4 tempi: non esiste una corsa
              "leggera" — ogni giro è una combustione, ogni giro è un
              impulso di forza. La sua geometria, il materiale, i
              trattamenti superficiali e soprattutto la qualità dei
              cuscinetti alle due estremità determinano la durata del
              motore intero. Una biella che cede non si ferma — distrugge
              tutto quello che la circonda.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia della biella</span>
              <h3>Le tre zone che la compongono</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Testa piccola — sede dello spinotto, collegamento al pistone</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Fusto — il corpo centrale che trasmette le forze assiali</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Testa grande — sede del cuscinetto a rulli, collegamento al perno di manovella</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Cuscinetto a rulli — trasmette le forze radiali tra biella e albero</span>
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
              <span className="placeholderText">Immagine / GIF — biella 2T con testa piccola, fusto e testa grande</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Struttura</span>
            <p>
              La biella nel suo insieme: la testa piccola con la bronzina
              per lo spinotto, il fusto a sezione variabile ottimizzato
              per resistere alle forze di trazione e compressione, e la
              testa grande con il cuscinetto a rulli che abbraccia il
              perno di manovella dell'albero.
            </p>
          </div>
        </motion.div>

        {/* ── FORZE BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="forzeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="forzeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Meccanica delle forze</span>
            <h3>Cosa subisce la biella ad ogni giro — forze e sollecitazioni</h3>
            <p>
              La biella è soggetta a un ciclo di sollecitazioni che si
              ripete a ogni rotazione dell'albero motore. Non si tratta
              di una forza costante — ma di un'alternanza rapida e
              violenta tra trazione, compressione e flessione laterale,
              ciascuna con intensità e direzione diverse a seconda della
              posizione dell'albero. Capire queste forze è essenziale
              per comprendere perché la biella si progetta come si
              progetta.
            </p>
          </motion.div>

          <motion.div className="forzeGrid" variants={cardVariants}>

            <div className="forzaCard forzaTrazione">
              <div className="forzaCardTop">
                <span className="forzaBadge badgeTrazione">Trazione</span>
                <span className="forzaAngolo">PMI → salita</span>
              </div>
              <h4>Trazione — il pistone tira verso il basso</h4>
              <p>
                Immediatamente dopo il PMI, il pistone inverte il moto
                e inizia la salita. L'inerzia del pistone — che tende
                a continuare verso il basso — mette il fusto della
                biella in trazione. Questa è la fase in cui la biella
                è più vulnerabile alla fatica: la trazione ciclica è
                la principale causa di innesco delle cricche di fatica
                nei fusti sottodimensionati o con difetti superficiali.
              </p>
            </div>

            <div className="forzaCard forzaCompressione">
              <div className="forzaCardTop">
                <span className="forzaBadge badgeCompressione">Compressione</span>
                <span className="forzaAngolo">PMI combustione</span>
              </div>
              <h4>Compressione — la combustione spinge</h4>
              <p>
                Al PMI la pressione di combustione spinge il pistone
                verso il basso con forza massima. La biella lavora in
                compressione pura: tutto il suo fusto viene schiacciato
                assialmente. È il picco di carico più intenso del ciclo —
                nei motori da competizione la forza assiale sulla biella
                in questo istante può superare le 3 – 5 tonnellate forza.
                Il rischio è la deformazione a colonna (buckling) del fusto.
              </p>
            </div>

            <div className="forzaCard forzaFlessione">
              <div className="forzaCardTop">
                <span className="forzaBadge badgeFlessione">Flessione</span>
                <span className="forzaAngolo">Tutto il ciclo</span>
              </div>
              <h4>Flessione laterale — l'angolo della biella</h4>
              <p>
                La biella non lavora mai perfettamente verticale — il suo
                angolo rispetto all'asse del cilindro varia continuamente
                durante la corsa. Questo angolo genera una componente di
                forza laterale che flette il fusto e crea la spinta del
                pistone contro la parete del cilindro. I fusti a sezione
                a I o H ottimizzano la resistenza alla flessione riducendo
                il peso non strutturale.
              </p>
            </div>

            <div className="forzaCard forzaInertia">
              <div className="forzaCardTop">
                <span className="forzaBadge badgeInertia">Inerzia</span>
                <span className="forzaAngolo">PMS inversione</span>
              </div>
              <h4>Forze di inerzia — il peso in accelerazione</h4>
              <p>
                Al PMS il pistone decelera fino a zero e poi riaccelera
                verso il basso. Le forze di inerzia generate da questa
                inversione si sommano alle forze di gas in modo imprevedibile
                se il motore non è correttamente equilibrato. Ridurre il
                peso della biella — mantenendo la rigidità necessaria —
                è uno degli obiettivi primari nella preparazione dei
                motori da competizione.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── MATERIALI BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="materialiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="materialiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Materiali</span>
            <h3>Acciaio, titanio e trattamenti — perché la biella non si improvvisa</h3>
            <p>
              Il materiale della biella deve coniugare tre requisiti
              apparentemente contraddittori: resistenza meccanica
              elevatissima, peso ridotto al minimo e tenacità sufficiente
              per assorbire i picchi di carico impulsivo senza fratturarsi
              di schianto. Nessun materiale eccelle in tutti e tre —
              la scelta è sempre un compromesso calibrato sull'utilizzo.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeAcciaio">Acciaio bonificato</span>
                <h4>La scelta standard — 40CrMo o 42CrMo4</h4>
              </div>
              <p>
                Le bielle di serie e aftermarket di qualità sono in acciaio
                legato al cromo-molibdeno bonificato. La tempra e il rinvenimento
                (bonifica) orientano la microstruttura del metallo verso
                un equilibrio ottimale tra resistenza alla trazione (fino a
                1.100 – 1.300 MPa) e tenacità. La lavorazione CNC permette
                tolleranze dimensionali strette e finitura superficiale
                del foro testa piccola nell'ordine del micron.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeTitanio">Titanio</span>
                <h4>Leghe Ti-6Al-4V — la frontiera racing</h4>
              </div>
              <p>
                Le bielle in lega di titanio Ti-6Al-4V sono 40% più leggere
                dell'acciaio a parità di resistenza. La riduzione delle
                masse oscillanti permette di alzare il regime massimo,
                ridurre le vibrazioni e migliorare la risposta ai transitori.
                Il costo è proibitivo per uso non agonistico, la lavorabilità
                è difficile e richiedono trattamenti superficiali specifici
                per resistere all'usura nei punti di contatto. Esclusivo
                uso motorsport di alto livello.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeForgia">Forgiatura</span>
                <h4>Forgiata vs lavorata da barra</h4>
              </div>
              <p>
                La forgiatura orienta la struttura cristallina del metallo
                lungo le linee di sforzo principali, aumentando la resistenza
                a fatica di 20 – 30% rispetto alla lavorazione da barra piena.
                Tutte le bielle da competizione sono forgiate. Le bielle di
                serie economiche sono spesso ottenute per sinterizzazione —
                processo più economico ma con proprietà meccaniche inferiori
                e meno adatte a potenze elevate.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeShot">Shot peening</span>
                <h4>Pallinatura — il trattamento che fa la differenza</h4>
              </div>
              <p>
                La pallinatura (shot peening) bombarda la superficie della
                biella con microsfere d'acciaio ad alta velocità, introducendo
                tensioni di compressione residue nello strato superficiale.
                Queste tensioni si oppongono all'innesco e alla propagazione
                delle cricche di fatica — le principali cause di rottura
                della biella. Una biella pallinata resiste alla fatica fino
                al doppio di una non trattata a parità di materiale e geometria.
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
            <span className="captionTag">Cuscinetto testa grande</span>
            <p>
              Il cuscinetto a rulli cilindrici della testa grande: i rulli
              sono tenuti in posizione dalla gabbia e rotolano direttamente
              sulla superficie esterna del perno di manovella. La lubrificazione
              è affidata all'olio in miscela — ogni interruzione del film
              lubrificante è una potenziale catastrofe meccanica.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — cuscinetto a rulli testa grande biella</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── CUSCINETTI BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="cuscBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="cuscHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Cuscinetti</span>
            <h3>Testa piccola e testa grande — due cuscinetti, due logiche diverse</h3>
            <p>
              I due cuscinetti della biella lavorano in condizioni
              completamente diverse tra loro. La testa piccola esegue
              un moto oscillante limitato — avanti e indietro per pochi
              gradi — a contatto con lo spinotto. La testa grande ruota
              continuamente attorno al perno di manovella. Ciascuna
              richiede una soluzione costruttiva specifica e una
              lubrificazione appropriata.
            </p>
          </motion.div>

          <motion.div className="cuscGrid" variants={cardVariants}>

            <div className="cuscCard cuscPiccola">
              <span className="cuscBadge badgePiccola">Testa piccola</span>
              <h4>Bronzina o cuscinetto a gabbia</h4>
              <p>
                La testa piccola alloggia la bronzina — un anello in
                bronzo al piombo o bronzo-alluminio — oppure un cuscinetto
                a gabbia con rulli di piccolo diametro nei motori più
                sportivi. La bronzina lavora in regime di lubrificazione
                idrodinamica: un film d'olio separa le superfici durante
                il moto. Il moto oscillante limitato rende difficile
                mantenere questo film costante — la bronzina è spesso
                il primo componente a mostrare usura in un motore
                trascurato o con miscela insufficiente di olio.
              </p>
              <div className="cuscSpec">
                <span className="cuscSpecLabel">Tipo di moto</span>
                <span className="cuscSpecVal">Oscillatorio (±25 – 35°)</span>
              </div>
              <div className="cuscSpec">
                <span className="cuscSpecLabel">Lubrificazione</span>
                <span className="cuscSpecVal">Film olio — idrodinamica</span>
              </div>
            </div>

            <div className="cuscCard cuscGrande">
              <span className="cuscBadge badgeGrande">Testa grande</span>
              <h4>Cuscinetto a rulli cilindrici</h4>
              <p>
                La testa grande dei motori a 2 tempi monta quasi
                universalmente un cuscinetto a rulli cilindrici che
                rotola direttamente sulla superficie del perno di
                manovella — non ci sono gusci separabili come nel
                4 tempi. I rulli sono tenuti in posizione da una gabbia
                in acciaio o poliammide e devono essere sostituiti
                insieme alla biella ad ogni revisione. Il cuscinetto
                a rulli sopporta carichi radiali elevati con attrito
                di rotolamento molto basso, ma è sensibile alla
                lubrificazione insufficiente e ai carichi assiali
                imprevisti.
              </p>
              <div className="cuscSpec">
                <span className="cuscSpecLabel">Tipo di moto</span>
                <span className="cuscSpecVal">Rotatorio continuo</span>
              </div>
              <div className="cuscSpec">
                <span className="cuscSpecLabel">Lubrificazione</span>
                <span className="cuscSpecVal">Olio miscela — spruzzi carter</span>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── RAPPORTO BIELLA-MANOVELLA BLOCK ─────────────────────────────── */}
        <motion.div
          className="rapportoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="rapportoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Geometria</span>
            <h3>Il rapporto biella-manovella — come cambia il carattere del motore</h3>
            <p>
              Il rapporto tra la lunghezza della biella (L) e il raggio
              di manovella (R) — espresso come L/R — è uno dei parametri
              geometrici che più influenzano il carattere dell'erogazione.
              Non determina la potenza massima in modo diretto, ma cambia
              profondamente come quella potenza viene erogata nel tempo,
              le forze laterali sul pistone e la durata del gruppo termico.
            </p>
          </motion.div>

          <motion.div className="rapportoGrid" variants={cardVariants}>

            <div className="rapportoCard">
              <div className="rapportoVisual rapportoLungo">
                <span className="rapportoRatio">L/R alto</span>
                <span className="rapportoEx">≥ 6,0</span>
              </div>
              <h4>Biella lunga — coppia e durata</h4>
              <p>
                Un rapporto L/R elevato riduce l'angolo massimo che la
                biella forma con l'asse del cilindro durante la corsa.
                La forza laterale sul pistone è minore, l'usura della
                camicia è ridotta e la curva di coppia è più piatta e
                lineare. Favorisce i motori da enduro e da utilizzo
                stradale dove la progressività conta più della potenza
                di picco.
              </p>
            </div>

            <div className="rapportoCard">
              <div className="rapportoVisual rapportoCorto">
                <span className="rapportoRatio">L/R basso</span>
                <span className="rapportoEx">≤ 4,5</span>
              </div>
              <h4>Biella corta — potenza e regime</h4>
              <p>
                Un rapporto L/R ridotto permette di aumentare la corsa
                del pistone a parità di ingombro, alzando la cilindrata.
                L'angolo biella è più accentuato, le forze laterali
                sul pistone sono maggiori e l'usura della camicia
                aumenta. In compenso la velocità media del pistone
                può essere più alta e il motore raggiunge potenze
                specifiche superiori. Tipico dei motori da cross e
                da circuito.
              </p>
            </div>

            <div className="rapportoCard">
              <div className="rapportoVisual rapportoEquilibrio">
                <span className="rapportoRatio">L/R medio</span>
                <span className="rapportoEx">4,5 – 6,0</span>
              </div>
              <h4>Il compromesso più diffuso</h4>
              <p>
                La maggior parte dei motori a 2 tempi moderni si colloca
                in questa finestra. È il risultato dell'ottimizzazione
                computerizzata che bilancia potenza massima, durata
                della camicia, forze di inerzia e carattere dell'erogazione.
                In preparazione, variare la lunghezza della biella è
                uno dei modi per spostare la banda di potenza verso il
                basso o verso l'alto.
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
              <span className="placeholderText">Immagine / GIF — confronto biella lunga vs corta e angolo di manovella</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Geometria</span>
            <p>
              Confronto visivo tra rapporto L/R alto e basso: al variare
              della lunghezza della biella cambia l'angolo massimo
              rispetto all'asse del cilindro, la forza laterale sul
              pistone e il profilo della curva di velocità del pistone
              durante la corsa.
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
            <h3>Ascoltare e misurare — riconoscere la biella che sta cedendo</h3>
            <p>
              La biella non si rompe senza preavviso — nella maggior
              parte dei casi manda segnali chiari che è possibile
              interpretare prima che il danno diventi catastrofico.
              L'ascolto del motore, il controllo del gioco al cuscinetto
              e l'ispezione visiva durante la revisione sono le armi
              principali del meccanico attento.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Battito di biella — il suono che non mente</h4>
              <p>
                Il battito di biella è un rumore metallico secco e
                cadenzato, sincronizzato con il regime del motore —
                a differenza del battito dello spinotto che è più
                acuto e si manifesta soprattutto al minimo. Il battito
                di biella si sente chiaramente in rilascio con il gas
                chiuso e tende ad aumentare progressivamente con
                l'aumentare del gioco al cuscinetto della testa grande.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Vibrazioni anomale fuori dall'ordinario</h4>
              <p>
                Una biella con gioco eccessivo al cuscinetto introduce
                uno squilibrio di masse rotanti che si manifesta come
                vibrazione anomala al manubrio e alle pedane, specialmente
                in un preciso range di regimi. Se la vibrazione è nuova
                o è aumentata rispetto al normale, la biella e i
                cuscinetti di banco vanno ispezionati prima della
                prossima uscita.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Misura del gioco radiale testa grande</h4>
              <p>
                Con il motore smontato, si misura il gioco radiale
                della testa grande afferrando la biella e tentando
                di spostarla radialmente rispetto al perno di manovella.
                Un gioco appena percettibile è normale; un gioco visibile
                o superiore a 0,05 – 0,08 mm è il limite oltre il quale
                biella e cuscinetto vanno sostituiti senza esitazione.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Ispezione visiva dei rulli</h4>
              <p>
                I rulli del cuscinetto testa grande vanno ispezionati
                per: pitting (micro-cavità da fatica di contatto),
                rigature longitudinali, colorazione blu per
                surriscaldamento, deformazione della gabbia o rulli
                liberi dalla gabbia stessa. Uno qualsiasi di questi
                segnali richiede la sostituzione immediata del
                cuscinetto e della biella come set completo.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Controllo rettilineità fusto</h4>
              <p>
                Il fusto della biella può subire deformazioni permanenti
                per sovraccarico termico o meccanico — episodi di
                grippaggio, detonazione severa o avviamento senza olio
                in miscela. La rettilineità si verifica su piano di
                riscontro o con comparatore. Una biella deformata
                anche di pochi centesimi va sostituita: la deformazione
                genera forze laterali anomale su pistone e camicia.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Vita operativa e sostituzione preventiva</h4>
              <p>
                In ambito agonistico la biella si sostituisce insieme
                ai cuscinetti ogni 15 – 25 ore di utilizzo intenso,
                indipendentemente dall'aspetto. In uso amatoriale
                ogni 60 – 100 ore o a ogni revisione completa del
                motore. La sostituzione preventiva della biella costa
                una frazione di quello che costa ricostruire un carter
                forato da una biella rotta.
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
            <span className="cardTag">Montaggio</span>
            <h3>Montaggio corretto — orientamento e preriscaldo</h3>
            <p>
              La biella ha un verso di montaggio: la testa piccola è
              spesso asimmetrica o presenta un foro di lubrificazione
              che deve essere orientato verso il lato scarico o verso
              la direzione del flusso dell'olio secondo le indicazioni
              del costruttore. Il montaggio del cuscinetto testa grande
              richiede il preriscaldo della testa con resistenza o in
              forno a 80 – 100 °C per permettere l'inserimento del
              cuscinetto senza forzature che danneggino la gabbia o
              i rulli.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>Kit biella aftermarket — cosa valutare</h3>
            <p>
              I kit biella aftermarket (Wiseco, Hot Rods, ProX, Wossner)
              includono biella, cuscinetto testa grande, bronzina testa
              piccola e spesso lo spinotto. Prima di acquistare è
              fondamentale verificare la lunghezza centro-centro della
              biella: anche pochi decimi di millimetro di differenza
              rispetto all'originale cambiano il rapporto di compressione
              effettivo e il clearance squish. Alcune bielle aftermarket
              sono disponibili in lunghezze alternative per la preparazione.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Equilibratura</span>
            <h3>Equilibratura albero-biella — il lavoro invisibile</h3>
            <p>
              In preparazione, la sostituzione della biella con una di
              peso diverso richiede la ribilanciatura dell'albero motore.
              L'equilibratura si esegue su macchina dedicata rimuovendo
              o aggiungendo materiale ai contrappesi dell'albero per
              compensare le masse rotanti e oscillanti. Un albero non
              equilibrato dopo sostituzione biella introduce vibrazioni
              che riducono la durata di cuscinetti di banco, guarnizioni
              e struttura del telaio.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Biella;
