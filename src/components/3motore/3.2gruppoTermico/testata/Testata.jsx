import "./testata.scss";
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

const Testata = () => {
  return (
    <section className="testata" id="testata">
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
              Gruppo termico
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La testata nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La testata chiude il cilindro dall'alto e forma, insieme alla
              testa del pistone, la camera di combustione. Nel motore a 2
              tempi non ospita valvole, albero a camme né distribuzione di
              alcun tipo — la sua geometria interna è tutto ciò che determina
              il volume della camera, il rapporto di compressione effettivo,
              la forma del fronte di fiamma e l'efficienza con cui l'energia
              della combustione viene trasferita al pistone. Una testata
              progettata male — o semplicemente inadatta al setup del motore —
              può annullare i benefici di ogni altra modifica.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              A differenza del 4 tempi, dove la testata è un componente
              molto complesso ricco di canali, sedi valvole e passaggi
              olio, la testata del 2T è strutturalmente semplice ma
              geometricamente critica. Ogni millimetro di variazione del
              volume della camera o della profondità dello squish cambia
              il rapporto di compressione e la suscettibilità alla
              detonazione in modo misurabile e diretto.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia della testata</span>
              <h3>Le zone che definiscono la combustione</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Camera di combustione — volume che determina il rapporto di compressione</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Banda di squish — zona periferica che genera turbolenza al PMI</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Sede candela — posizionamento e angolo del punto di accensione</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Camera d'acqua — circuito di raffreddamento della testata</span>
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
              <span className="placeholderText">Immagine / GIF — testata 2T in sezione con camera e squish</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Sezione</span>
            <p>
              Sezione della testata: la camera di combustione centrale
              (dome o emisferica), la banda di squish periferica molto
              ravvicinata alla testa del pistone al PMI e la sede candela
              posizionata al centro della camera per minimizzare il
              percorso del fronte di fiamma.
            </p>
          </div>
        </motion.div>

        {/* ── CAMERA DI COMBUSTIONE BLOCK ─────────────────────────────────── */}
        <motion.div
          className="cameraBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="cameraHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Camera di combustione</span>
            <h3>Geometria della camera — volume, forma e compressione</h3>
            <p>
              La camera di combustione è lo spazio che rimane tra la
              faccia interna della testata e la testa del pistone quando
              quest'ultimo si trova al PMI. Il suo volume — espresso in
              centimetri cubici — è il parametro da cui si calcola il
              rapporto di compressione insieme alla cilindrata del motore.
              Ma il volume da solo non basta: la forma della camera
              determina come si propaga il fronte di fiamma, dove si
              concentrano le temperature più alte e quanto è efficiente
              la conversione energetica.
            </p>
          </motion.div>

          <motion.div className="cameraGrid" variants={cardVariants}>

            <div className="cameraCard">
              <span className="cameraIdx">01</span>
              <h4>Rapporto di compressione — il calcolo</h4>
              <p>
                Il rapporto di compressione (RC) si calcola come il
                rapporto tra il volume totale del cilindro (cilindrata +
                volume camera) e il solo volume camera. In un 2T da
                competizione i valori tipici sono tra 12:1 e 14:1 per
                motori a raffreddamento liquido, 10:1 – 12:1 per quelli
                ad aria. Rapporti elevati aumentano la potenza ma richiedono
                benzina di qualità adeguata e geometrie squish precise
                per evitare la detonazione.
              </p>
            </div>

            <div className="cameraCard">
              <span className="cameraIdx">02</span>
              <h4>Forma emisferica</h4>
              <p>
                La camera emisferica — o semisferica — è la geometria
                più diffusa nelle testate sportive e da competizione.
                Offre il miglior rapporto tra superficie e volume,
                riducendo la dispersione termica attraverso le pareti
                e favorendo una propagazione centrifuga del fronte di
                fiamma dalla candela verso la periferia. La candela è
                posizionata al centro della calotta per minimizzare il
                percorso massimo che il fronte di fiamma deve percorrere.
              </p>
            </div>

            <div className="cameraCard">
              <span className="cameraIdx">03</span>
              <h4>Volume e temperatura di parete</h4>
              <p>
                Una camera di piccolo volume concentra il calore in uno
                spazio ridotto, aumentando le temperature di parete. Se
                le temperature diventano eccessive, le superfici calde
                della testata possono innescare pre-accensione — la
                miscela si accende prima della scintilla, generando
                pressioni abnormi e distruttive. Il raffreddamento
                efficace della testata è quindi tanto critico quanto
                la geometria della camera.
              </p>
            </div>

            <div className="cameraCard">
              <span className="cameraIdx">04</span>
              <h4>Modifica del volume camera</h4>
              <p>
                Il volume della camera si modifica fresando materiale
                dalla faccia interna della testata (aumento del RC)
                o aggiungendo uno spessore alla guarnizione o al
                piano di battuta (riduzione del RC). La fresatura è
                irreversibile; aggiungere spessori è reversibile ma
                riduce la tenuta termica della guarnizione se lo
                spessore è eccessivo. Ogni modifica richiede la
                verifica della clearance squish.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── SQUISH BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="squishBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="squishHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Squish</span>
            <h3>La banda di squish — turbolenza controllata per combattere la detonazione</h3>
            <p>
              La banda di squish è la zona periferica della testata che
              si avvicina molto alla testa del pistone al PMI. Lo spazio
              che rimane tra le due superfici — il clearance di squish —
              è talmente ridotto (0,8 – 1,5 mm nei motori sportivi) che
              la miscela presente in questa zona viene letteralmente
              espulsa ad alta velocità verso il centro della camera
              nell'istante in cui il pistone raggiunge il PMI. Questo
              getto violento di miscela crea una turbolenza intensa
              che accelera la propagazione del fronte di fiamma e
              raffredda le zone periferiche della camera, riducendo
              drasticamente il rischio di detonazione.
            </p>
          </motion.div>

          <motion.div className="squishContent" variants={cardVariants}>

            <div className="squishLeft">
              <div className="squishItem">
                <span className="squishLabel">Clearance squish ottimale</span>
                <div className="squishBar">
                  <div className="squishFill" style={{ width: "40%" }} />
                </div>
                <span className="squishValue">0,8 – 1,5 mm</span>
                <p>
                  Il valore ottimale dipende dall'utilizzo. Un clearance
                  stretto (0,8 – 1,0 mm) massimizza la turbolenza e
                  permette rapporti di compressione elevati ma richiede
                  una costruzione molto precisa — un errore di assemblaggio
                  può far toccare pistone e testata. Un clearance più ampio
                  (1,2 – 1,5 mm) è più sicuro per uso amatoriale e tollera
                  meglio le variazioni di temperatura.
                </p>
              </div>

              <div className="squishItem">
                <span className="squishLabel">Larghezza della banda squish</span>
                <div className="squishBar">
                  <div className="squishFill squishFillAlt" style={{ width: "60%" }} />
                </div>
                <span className="squishValue">25 – 45% del raggio</span>
                <p>
                  Una banda più larga occupa più superficie della testata,
                  riducendo il volume disponibile per la camera centrale
                  e aumentando l'effetto squish. Una banda troppo stretta
                  non genera sufficiente turbolenza; una troppo larga
                  riduce eccessivamente il volume della camera e può
                  creare problemi di detonazione nelle zone di transizione.
                </p>
              </div>
            </div>

            <div className="squishRight">
              <div className="squishCard">
                <span className="squishCardTag">Effetto squish</span>
                <h4>Perché il squish riduce la detonazione</h4>
                <p>
                  La detonazione avviene quando la miscela nella zona
                  periferica della camera raggiunge la temperatura di
                  autoaccensione prima che il fronte di fiamma arrivi
                  dalla candela. Il getto squish raffredda questa zona
                  con la miscela fresca proveniente dalla periferia
                  e accelera la combustione abbassando il tempo di
                  residenza della carica non bruciata a temperature
                  critiche.
                </p>
              </div>

              <div className="squishCard">
                <span className="squishCardTag">Misurazione</span>
                <h4>Come misurare il clearance squish</h4>
                <p>
                  Si inserisce un filo di piombo morbido o di stagno
                  di diametro noto (1,5 – 2,0 mm) sulla testa del
                  pistone prima del montaggio della testata. Dopo aver
                  portato il pistone al PMI e rimosso la testata, si
                  misura con un micrometro lo spessore del filo
                  deformato: corrisponde esattamente al clearance
                  squish reale dell'assemblaggio.
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
            <span className="captionTag">Flusso squish</span>
            <p>
              Al PMI il getto di miscela espulso dalla banda squish investe
              il centro della camera ad alta velocità. La turbolenza
              generata accelera la velocità di combustione, riduce le
              temperature periferiche e permette di avanzare l'anticipo
              senza rischio di detonazione.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — flusso squish al PMI e fronte di fiamma</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── MATERIALI & RAFFREDDAMENTO BLOCK ───────────────────────────── */}
        <motion.div
          className="materialiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="materialiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Materiali e termica</span>
            <h3>Alluminio, raffreddamento e gestione delle temperature</h3>
            <p>
              La testata è il componente a diretto contatto con i gas
              combusti nella fase di massima pressione e temperatura.
              La scelta del materiale, la progettazione della camera
              d'acqua e il trattamento superficiale della camera di
              combustione sono determinanti per garantire durata,
              resistenza alla detonazione e capacità di supportare
              rapporti di compressione elevati.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeAlluminio">Alluminio</span>
                <h4>Lega di alluminio — il materiale standard</h4>
              </div>
              <p>
                Quasi tutte le testate per motori a 2 tempi sono in lega
                di alluminio ad alto contenuto di silicio o rame (AlSi,
                AlCu). L'alluminio garantisce conducibilità termica
                eccellente — fondamentale per dissipare rapidamente il
                calore dalla camera — peso contenuto e lavorabilità
                che permette geometrie interne molto precise. La durezza
                inferiore all'acciaio richiede attenzione nel serraggio
                dei bulloni e nella gestione delle guarnizioni.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeCamera">Camera d'acqua</span>
                <h4>Raffreddamento a liquido della testata</h4>
              </div>
              <p>
                Nei motori a raffreddamento liquido la testata è attraversata
                da una camera d'acqua che avvolge la camera di combustione.
                Il liquido refrigerante entra dalla periferia e scorre
                verso il centro, dove le temperature sono più elevate,
                prima di uscire verso il radiatore. Il flusso deve essere
                uniforme su tutto il perimetro per evitare punti caldi
                localizzati che possono causare detonazione o deformazione
                della testata.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeTrat">Trattamento superficiale</span>
                <h4>Anodizzazione e rivestimenti camera</h4>
              </div>
              <p>
                La superficie interna della camera di combustione può
                ricevere trattamenti di anodizzazione dura che aumentano
                la resistenza all'usura e riducono la capacità della
                superficie di accumulare depositi. Sulle testate racing
                si adottano anche trattamenti ceramici o al nichel che
                riducono la conduttività termica della parete camera,
                aumentando la temperatura dei gas e migliorando
                l'efficienza termica — a costo di una maggiore
                suscettibilità alla detonazione.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeRacing">Testata racing</span>
                <h4>Testate aftermarket billette</h4>
              </div>
              <p>
                Le testate aftermarket da competizione sono fresate da
                barra piena (billet) in leghe di alluminio ad alte
                prestazioni come il 7075-T6. La fresatura da barra
                permette geometrie interne impossibili da ottenere
                con la fusione, tolleranze dimensionali dell'ordine
                del centesimo e forme squish ottimizzate per specifiche
                combinazioni di cilindrata, regime e carburante. Alcuni
                produttori offrono testate a volume camera regolabile
                tramite inserti intercambiabili.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── GUARNIZIONE BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="guarnBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="guarnHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Guarnizione testata</span>
            <h3>La guarnizione — tenuta, spessore e rapporto di compressione</h3>
            <p>
              La guarnizione testata sigilla l'interfaccia tra testata e
              cilindro, impedendo la fuoriuscita dei gas combusti e del
              liquido refrigerante. Nel 2T svolge anche un ruolo di
              calibrazione: variando lo spessore della guarnizione si
              modifica la distanza tra testata e pistone al PMI, cambiando
              il clearance squish e quindi il rapporto di compressione
              effettivo. Una scelta consapevole dello spessore è parte
              integrante del setup del motore.
            </p>
          </motion.div>

          <motion.div className="guarnGrid" variants={cardVariants}>

            <div className="guarnCard">
              <span className="guarnIdx">01</span>
              <h4>Tipi di guarnizione</h4>
              <p>
                Le guarnizioni testata per motori a 2 tempi sono prevalentemente
                in alluminio puro o in rame ricotto. L'alluminio è la
                soluzione più diffusa: si adatta perfettamente alle
                irregolarità superficiali per deformazione plastica e
                garantisce un'ottima tenuta a caldo. Il rame offre
                maggiore duttilità e migliore conduttività termica, ed
                è lo standard nelle applicazioni racing dove la tenuta
                deve resistere a pressioni di combustione molto elevate.
              </p>
            </div>

            <div className="guarnCard">
              <span className="guarnIdx">02</span>
              <h4>Spessore e rapporto di compressione</h4>
              <p>
                Spessori disponibili tipici: 0,3 mm, 0,4 mm, 0,5 mm,
                0,8 mm, 1,0 mm. Ogni incremento di 0,1 mm nello spessore
                della guarnizione riduce il rapporto di compressione di
                circa 0,2 – 0,4 punti, in funzione della cilindrata del
                motore e del volume della camera. Abbinare guarnizioni
                di spessore diverso è il modo più economico e reversibile
                per adattare il rapporto di compressione al carburante
                disponibile o all'altitudine.
              </p>
            </div>

            <div className="guarnCard">
              <span className="guarnIdx">03</span>
              <h4>Ricottura della guarnizione in rame</h4>
              <p>
                Le guarnizioni in rame vanno ricotte prima del montaggio
                per ripristinarne la duttilità: si portano a temperatura
                con un cannello fino alla comparsa del colore rosso
                ciliegia (600 – 700 °C) e si lasciano raffreddare in
                aria — non in acqua. Il rame ricotto è morbido e si
                adatta perfettamente ai piani di accoppiamento, garantendo
                una tenuta affidabile anche con pressioni di combustione
                elevate. Una guarnizione in rame indurita non ricotta
                tende a perdere.
              </p>
            </div>

            <div className="guarnCard">
              <span className="guarnIdx">04</span>
              <h4>Piano di battuta e planarità</h4>
              <p>
                Una testata o un cilindro con il piano di accoppiamento
                non planare compromette la tenuta indipendentemente
                dalla qualità della guarnizione. La tolleranza massima
                ammessa sulla planarità è generalmente 0,05 mm su
                tutta la superficie. La verifica si esegue con un piano
                di riscontro e uno spessimetro prima di ogni montaggio.
                Una testata deformata da surriscaldamento va rettificata
                o sostituita.
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
              <span className="placeholderText">Immagine / GIF — guarnizione testata e misura clearance squish</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Assemblaggio</span>
            <p>
              Guarnizione testata in rame ricotto pronta al montaggio:
              il filo di piombo sulla testa del pistone permette di
              verificare il clearance squish reale prima di chiudere
              definitivamente il gruppo termico.
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
            <span className="sectionLabel">Diagnosi e problemi</span>
            <h3>Riconoscere i problemi della testata prima che si aggravino</h3>
            <p>
              La testata è soggetta a sollecitazioni termiche cicliche
              intense. Nel tempo può deformarsi, sviluppare micro-fessure,
              perdere tenuta o sviluppare depositi che alterano la
              geometria della camera. Molti di questi problemi si
              manifestano con sintomi che è possibile interpretare
              correttamente se si conosce cosa cercare.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Perdita di compressione con guarnizione integra</h4>
              <p>
                Se la compressione è bassa ma la guarnizione è visivamente
                integra, le cause possono essere: piano di battuta non
                planare che non permette alla guarnizione di sigillare
                correttamente, micro-fessure nella testata attorno alla
                sede candela o deformazione termica della camera che
                crea una zona di non tenuta localizzata.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Depositi nella camera di combustione</h4>
              <p>
                Depositi carboniosi duri sulla superficie interna della
                camera riducono il volume effettivo, aumentando il rapporto
                di compressione oltre i valori di progetto. L'effetto è
                un incremento della suscettibilità alla detonazione. I
                depositi si formano per combustione incompleta dell'olio —
                miscela troppo ricca, olio minerale di bassa qualità
                o temperature di lavoro troppo basse.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Surriscaldamento localizzato</h4>
              <p>
                Macchie di decolorazione intensa, colorazioni blu-violacee
                o bruciature sulla superficie interna della camera indicano
                zone di temperatura eccessiva. Le cause più comuni sono
                raffreddamento insufficiente (camera d'acqua parzialmente
                ostruita), miscela magra in quella zona o anticipo
                eccessivo che concentra la combustione prima del PMI.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Controllo della planarità</h4>
              <p>
                Il piano di battuta della testata va verificato con
                righello di precisione e spessimetro dopo ogni episodio
                di surriscaldamento e a ogni revisione programmata.
                Tolleranza massima: 0,05 mm su tutta la superficie.
                Se il piano è fuori tolleranza, la testata va rettificata
                rimuovendo il minimo materiale necessario — tenendo conto
                che la rettifica riduce il volume camera e aumenta il RC.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Ispezione della camera d'acqua</h4>
              <p>
                La camera d'acqua della testata può accumularsi depositi
                calcarei o rust che riducono la sezione di passaggio e
                diminuiscono l'efficienza del raffreddamento. Ogni 2 – 3
                stagioni è consigliato un ciclo di pulizia con prodotto
                decalcificante specifico per circuiti di raffreddamento.
                I tappi ciechi della camera d'acqua vanno ispezionati
                per perdite o corrosione.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Sostituzione della guarnizione</h4>
              <p>
                La guarnizione testata va sostituita a ogni smontaggio
                della testata, senza eccezioni. Le guarnizioni in
                alluminio si deformano plasticamente al primo serraggio
                e non possono sigillare efficacemente se rimontate.
                Quelle in rame possono essere ricicottate e riutilizzate
                una volta in condizioni di emergenza, ma la sostituzione
                è sempre la scelta corretta.
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
            <span className="cardTag">Serraggio</span>
            <h3>Coppia di serraggio e sequenza</h3>
            <p>
              I bulloni della testata vanno serrati in sequenza crociata
              progressiva in almeno tre passaggi per garantire una
              distribuzione uniforme del carico sulla guarnizione. La
              coppia di serraggio finale — generalmente 20 – 35 Nm
              in funzione del diametro e del materiale — va verificata
              con chiave dinamometrica. Un serraggio non uniforme deforma
              il piano di battuta e compromette la tenuta anche con una
              guarnizione nuova.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Preparazione</span>
            <h3>Modifica del rapporto di compressione</h3>
            <p>
              Aumentare il RC migliora la potenza e l'efficienza ma
              richiede benzina di ottano adeguato e una geometria squish
              precisa per evitare la detonazione. La via più controllata
              è fresare la camera della testata su tornio CNC verificando
              il volume con buretta graduata prima e dopo la lavorazione.
              Ogni cm³ rimosso aumenta il RC in modo calcolabile in
              funzione della cilindrata del motore.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Detonazione</span>
            <h3>Riconoscere e correggere la detonazione</h3>
            <p>
              La detonazione si manifesta come un battito metallico
              secco ad alti carichi — diverso dal battito della biella,
              più acuto e irregolare. Le cause legate alla testata sono:
              RC troppo elevato, squish clearance troppo stretto, depositi
              in camera che aumentano il volume effettivo, superficie
              della camera ruvida o con zone di accumulo di calore.
              La prima correzione è verificare il clearance squish reale
              con il metodo del filo di piombo.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Testata;
