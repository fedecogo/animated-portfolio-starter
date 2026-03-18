import "./cilindro.scss";
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

const Cilindro = () => {
  return (
    <section className="cilindro" id="cilindro">
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
              Il cilindro nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il cilindro è il componente che contiene il pistone, guida il
              suo moto alternativo e definisce la geometria della camera di
              combustione insieme alla testa. Nel motore a 2 tempi svolge
              però un ruolo che va ben oltre la semplice funzione di guida:
              le luci ricavate nelle sue pareti — aspirazione, scarico e
              travaso — sono la distribuzione del motore stesso. Non esistono
              valvole nel senso classico del termine: è il pistone che, con
              la sua corsa, apre e chiude queste finestre con una tempistica
              determinata interamente dalla geometria del cilindro.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Questo significa che modificare il cilindro — alzare o abbassare
              le luci, allargarne la finestra, cambiare il profilo del condotto
              di scarico — equivale a modificare la distribuzione del motore,
              con effetti diretti sulla curva di potenza, sulla coppia a basso
              regime e sul carattere generale dell'erogazione.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Componenti del cilindro</span>
              <h3>Anatomia del corpo cilindro</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Camicia — superficie di scorrimento del pistone</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Luci — finestre di aspirazione, scarico e travaso</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Alette di raffreddamento — dissipazione termica ad aria</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Condotti di travaso — canali che guidano la carica fresca</span>
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
              <img src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773809053/ChatGPT_Image_Mar_18_2026_02_13_51_PM_c5yr74.png" alt="placeholder" /> 
          </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Sezione</span>
            <p>
              Sezione longitudinale del cilindro 2T: la luce di scarico
              in alto, le luci di travaso laterali e la luce di aspirazione
              in basso. La posizione relativa delle luci definisce la
              tempistica di apertura e chiusura — la distribuzione del motore.
            </p>
          </div>
        </motion.div>

        {/* ── LUCI BLOCK ──────────────────────────────────────────────────── */}
        <motion.div
          className="luciBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="luciHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Distribuzione</span>
            <h3>Le luci del cilindro — la distribuzione senza valvole</h3>
            <p>
              Le luci sono finestre ricavate nella parete del cilindro che
              il pistone apre e chiude con la sua corsa. La loro posizione
              verticale determina quando si aprono e quando si chiudono in
              gradi di rotazione dell'albero motore. La loro larghezza e
              altezza determinano per quanto tempo rimangono aperte e quanta
              portata riescono a garantire. Ogni luce ha un ruolo preciso
              nel ciclo termodinamico del motore.
            </p>
          </motion.div>

          <motion.div className="luciGrid" variants={cardVariants}>

            <div className="luciaCard cardScarico">
              <div className="luciaCardTop">
                <span className="luciaBadge badgeScarico">Scarico</span>
                <span className="luciaAngle">Apre: ~80 – 95° DPMS</span>
              </div>
              <h4>Luce di scarico</h4>
              <p>
                È la luce posizionata più in alto nel cilindro — la prima
                ad aprirsi quando il pistone scende dopo il PMI. In questo
                momento la pressione dei gas combusti è ancora elevata:
                l'apertura della luce di scarico innesca il processo di
                scarico spontaneo (blowdown), in cui i gas ad alta pressione
                fuoriescono autonomamente prima che il pistone raggiunga il
                PME. Più alta è la luce di scarico, prima si apre e maggiore
                è la potenza sviluppabile agli alti regimi — ma si sacrifica
                la compressione e la coppia ai bassi.
              </p>
            </div>

            <div className="luciaCard cardTravaso">
              <div className="luciaCardTop">
                <span className="luciaBadge badgeTravaso">Travaso</span>
                <span className="luciaAngle">Apre: ~110 – 120° DPMS</span>
              </div>
              <h4>Luci di travaso</h4>
              <p>
                Le luci di travaso si aprono poco dopo la luce di scarico,
                quando il pistone è sceso abbastanza da scoprirle. In questo
                momento la miscela fresca compressa nel carter risale
                attraverso i condotti di travaso ed entra nel cilindro,
                aiutando a spingere i gas combusti verso lo scarico — il
                processo di lavaggio (scavenging). La geometria dei condotti
                di travaso e l'angolo di iniezione della carica fresca sono
                critici per l'efficienza del lavaggio e per evitare la
                perdita di miscela fresca dallo scarico.
              </p>
            </div>

            <div className="luciaCard cardAspirazione">
              <div className="luciaCardTop">
                <span className="luciaBadge badgeAspirazione">Aspirazione</span>
                <span className="luciaAngle">Apre: ~60 – 80° APMS</span>
              </div>
              <h4>Luce di aspirazione</h4>
              <p>
                Presente nei motori senza pacco lamellare, la luce di
                aspirazione è ricavata nella parte bassa del cilindro o
                nella cassa del carter. Si apre quando il pistone sale e
                crea depressione nel carter, permettendo alla miscela di
                entrare. Nei motori con reed valve il controllo dell'ingresso
                è affidato alla valvola a lamelle, che di fatto sostituisce
                funzionalmente questa luce rendendola sempre aperta sul
                lato carter.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── TEMPISTICA LUCI BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="tempisticaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tempisticaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Tempistica</span>
            <h3>Sequenza di apertura nel ciclo — gradi di manovella</h3>
            <p>
              La tempistica delle luci si misura in gradi di rotazione
              dell'albero motore riferiti al punto morto superiore (PMS)
              e al punto morto inferiore (PMI). Comprendere la sequenza
              permette di capire perché modificare l'altezza di una luce
              cambia il carattere del motore in modo spesso non intuitivo.
            </p>
          </motion.div>

          <motion.div className="tempisticaRanges" variants={cardVariants}>

            <div className="tempisticaRow">
              <div className="tempisticaInfo">
                <span className="tempisticaLabel">Inizio scarico (pistone scende)</span>
                <span className="tempisticaSub">Blowdown — i gas combusti fuoriescono spontaneamente</span>
              </div>
              <div className="tempisticaBar">
                <div className="tempisticaFill fillScarico" style={{ left: "44%", width: "13%" }} />
                <div className="tempisticaMarker" style={{ left: "44%" }} />
              </div>
              <span className="tempisticaVal valScarico">~80 – 95° DPMS</span>
            </div>

            <div className="tempisticaRow">
              <div className="tempisticaInfo">
                <span className="tempisticaLabel">Apertura travaso</span>
                <span className="tempisticaSub">La carica fresca sale dai condotti di travaso</span>
              </div>
              <div className="tempisticaBar">
                <div className="tempisticaFill fillTravaso" style={{ left: "56%", width: "11%" }} />
                <div className="tempisticaMarker" style={{ left: "56%" }} />
              </div>
              <span className="tempisticaVal valTravaso">~110 – 120° DPMS</span>
            </div>

            <div className="tempisticaRow">
              <div className="tempisticaInfo">
                <span className="tempisticaLabel">Punto morto inferiore (PMI)</span>
                <span className="tempisticaSub">Pistone al punto più basso — luci completamente aperte</span>
              </div>
              <div className="tempisticaBar">
                <div className="tempisticaFill fillPMI" style={{ left: "49%", width: "2%" }} />
                <div className="tempisticaMarker markerPMI" style={{ left: "50%" }} />
              </div>
              <span className="tempisticaVal valPMI">180° DPMS</span>
            </div>

            <div className="tempisticaRow">
              <div className="tempisticaInfo">
                <span className="tempisticaLabel">Chiusura travaso (pistone sale)</span>
                <span className="tempisticaSub">Inizio compressione della carica nel cilindro</span>
              </div>
              <div className="tempisticaBar">
                <div className="tempisticaFill fillTravaso" style={{ left: "68%", width: "11%" }} />
                <div className="tempisticaMarker" style={{ left: "79%" }} />
              </div>
              <span className="tempisticaVal valTravaso">~240 – 250° DPMS</span>
            </div>

            <div className="tempisticaRow">
              <div className="tempisticaInfo">
                <span className="tempisticaLabel">Chiusura scarico</span>
                <span className="tempisticaSub">Inizio compressione effettiva — camera sigillata</span>
              </div>
              <div className="tempisticaBar">
                <div className="tempisticaFill fillScarico" style={{ left: "73%", width: "13%" }} />
                <div className="tempisticaMarker" style={{ left: "86%" }} />
              </div>
              <span className="tempisticaVal valScarico">~265 – 280° DPMS</span>
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
            <span className="captionTag">Lavaggio</span>
            <p>
              Schema del processo di lavaggio (scavenging) Schnürle: i
              getti di miscela fresca dai condotti di travaso laterali si
              incrociano al centro del cilindro, risalgono verso la testa
              e spingono i gas combusti verso la luce di scarico senza
              mescolarsi eccessivamente con essi.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <img src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773809149/ChatGPT_Image_Mar_18_2026_02_15_39_PM_s1om9o.png" alt="gasFLow" />
           </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── MATERIALI & RIVESTIMENTI BLOCK ──────────────────────────────── */}
        <motion.div
          className="materialiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="materialiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Materiali e camicia</span>
            <h3>Alluminio, ghisa e rivestimenti della camicia</h3>
            <p>
              Il corpo cilindro è quasi universalmente realizzato in lega
              di alluminio per contenere il peso e favorire la dissipazione
              termica. La camicia — la superficie interna su cui scorre il
              pistone — richiede invece caratteristiche di durezza e
              resistenza all'usura che l'alluminio da solo non può garantire.
              La soluzione adottata varia in base al tipo di motore,
              all'utilizzo e al livello di prestazioni richiesto.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeGhisa">Ghisa</span>
                <h4>Camicia in ghisa riportata</h4>
              </div>
              <p>
                La soluzione più tradizionale e diffusa sui motori stradali
                e da enduro. Una manica in ghisa viene pressata o colata
                all'interno del corpo in alluminio. La ghisa offre eccellente
                resistenza all'usura, buona capacità di trattenere il film
                lubrificante grazie alla sua struttura porosa e costi
                contenuti. La rettifica e la sostituzione della manica
                sono operazioni standard in qualsiasi officina.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeNikasil">Nikasil</span>
                <h4>Rivestimento Nikasil</h4>
              </div>
              <p>
                Il Nikasil (nichel-silicio-carburo) è un rivestimento
                galvanico depositato direttamente sulla camicia in alluminio.
                La durezza estrema del carburo di silicio (HV 1000+) offre
                una resistenza all'usura superiore alla ghisa con uno
                spessore di pochi centesimi di millimetro. La superficie
                trattiene meglio il film lubrificante, riduce l'attrito e
                permette giochi pistone-cilindro più ridotti. Non è
                rettificabile: un cilindro nikasil rigato si sostituisce
                o si rinitrura.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeAlusil">Alusil</span>
                <h4>Rivestimento Alusil / Silumal</h4>
              </div>
              <p>
                Alcune leghe di alluminio ad altissimo contenuto di silicio
                (17 – 25%) consentono di lavorare la camicia direttamente
                sul materiale del cilindro senza riporti. Dopo la lavorazione
                meccanica, un attacco chimico espone i cristalli di silicio
                che formano la superficie portante. Soluzione leggera,
                integrata e con buona conducibilità termica. Richiede fasce
                specifiche e non è rettificabile in modo convenzionale.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeRacing">Racing / PVD</span>
                <h4>Rivestimenti racing avanzati</h4>
              </div>
              <p>
                I cilindri da competizione adottano rivestimenti PVD o CVD
                (Chemical Vapor Deposition) a base di carburo di titanio,
                nitruro di cromo o DLC. Strati sottilissimi che combinano
                durezza estrema, attrito ridottissimo e resistenza termica
                superiore al Nikasil. Vita operativa più breve ma prestazioni
                ai massimi livelli. Richiedono olio e fasce specifici
                per esprimere il loro potenziale.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── RAFFREDDAMENTO BLOCK ────────────────────────────────────────── */}
        <motion.div
          className="raffredBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="raffredHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Termica</span>
            <h3>Raffreddamento — aria vs liquido nel 2T</h3>
            <p>
              Il cilindro di un 2T lavora a temperature molto più elevate
              rispetto a un 4T equivalente. In un giro di albero avvengono
              combustione, scarico, lavaggio e compressione: non esiste
              la corsa di aspirazione "fredda" che nel 4T contribuisce
              a raffreddare il cilindro. La gestione termica è quindi
              un aspetto progettuale critico, non secondario.
            </p>
          </motion.div>

          <motion.div className="raffredGrid" variants={cardVariants}>

            <div className="raffredCard raffredAria">
              <span className="raffredBadge badgeAria">Ad aria</span>
              <h4>Raffreddamento ad aria</h4>
              <p>
                Le alette di raffreddamento ricavate nel corpo cilindro
                aumentano la superficie di scambio termico con l'aria in
                movimento. La geometria delle alette — passo, altezza,
                spessore — è il risultato di un'ottimizzazione aerotermica
                specifica per ogni motore. Il raffreddamento ad aria è
                semplice, leggero e privo di componenti aggiuntivi, ma
                la temperatura di lavoro della camicia è meno controllabile
                e dipende fortemente dalla velocità di avanzamento e dalla
                temperatura ambientale.
              </p>
              <ul className="raffredList">
                <li><span className="rDot dotGreen" />Semplicità costruttiva e leggerezza</li>
                <li><span className="rDot dotGreen" />Nessun rischio di perdite liquido</li>
                <li><span className="rDot dotYellow" />Temperatura variabile con le condizioni</li>
                <li><span className="rDot dotYellow" />Meno efficace in uso off-road lento</li>
              </ul>
            </div>

            <div className="raffredCard raffredLiquido">
              <span className="raffredBadge badgeLiquido">A liquido</span>
              <h4>Raffreddamento a liquido</h4>
              <p>
                Il cilindro è circondato da una camera d'acqua attraverso
                cui circola il liquido refrigerante pompato dal circolatore.
                Il calore passa dalla camicia al liquido e poi al radiatore.
                La temperatura di lavoro è controllata con precisione dal
                termostato e rimane stabile indipendentemente dalla velocità
                e dalle condizioni ambientali. Permette geometrie della
                camera di combustione ottimizzate e giochi pistone-cilindro
                più stretti, con benefici diretti su potenza e durata.
              </p>
              <ul className="raffredList">
                <li><span className="rDot dotGreen" />Temperatura stabile e controllata</li>
                <li><span className="rDot dotGreen" />Permette rapporti di compressione più alti</li>
                <li><span className="rDot dotYellow" />Peso e complessità maggiori</li>
                <li><span className="rDot dotYellow" />Richiede manutenzione del circuito</li>
              </ul>
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
              <img src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773809464/ChatGPT_Image_Mar_18_2026_02_20_39_PM_ckkbmc.png" alt="Cilindro" />
           </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Camera d'acqua</span>
            <p>
              Sezione trasversale di un cilindro a liquido: la camera
              d'acqua avvolge interamente la camicia su tutto il perimetro,
              garantendo un raffreddamento uniforme e privo di punti caldi
              localizzati, particolarmente critici in corrispondenza della
              luce di scarico.
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
            <h3>Leggere lo stato della camicia — misure e segnali</h3>
            <p>
              La camicia subisce usura abrasiva nella zona di inversione del
              moto — tra la fascia superiore al PMI e la fascia inferiore al
              PME — dove il film lubrificante è più sottile e la pressione
              laterale sul pistone è maggiore. Il monitoraggio dello stato
              della camicia è la misura preventiva più importante nella
              manutenzione del gruppo termico.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Ovalizzazione della camicia</h4>
              <p>
                Con l'uso il cilindro tende a ovalizzarsi: il diametro
                sull'asse perpendicolare allo spinotto (dove la spinta
                laterale del pistone è maggiore) si consuma più
                velocemente. La differenza tra i due diametri misurati
                con un comparatore a due punti non deve superare 0,05 mm
                nei motori sportivi — oltre questo valore la tenuta delle
                fasce diventa irregolare.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Conicità della camicia</h4>
              <p>
                La conicità è la differenza di diametro tra la parte alta
                della camicia (zona PMI, più usurata) e la parte bassa
                (zona PME). Si misura con il comparatore in tre quote
                verticali. Una conicità superiore a 0,08 – 0,10 mm indica
                una camicia da riportare all'oversize successivo o da
                sostituire.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Rigature sulla camicia</h4>
              <p>
                Rigature longitudinali indicano episodi di grippaggio
                parziale o la presenza di particelle abrasive nel
                circuito di lubrificazione. Su camicie nikasil una
                rigatura profonda non è recuperabile: il rivestimento
                non può essere rettificato e la profondità della rigatura
                compromette la tenuta della fascia in quella zona.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Ossidazione e corrosione</h4>
              <p>
                Un motore rimasto fermo a lungo con carburante nella
                camera può sviluppare ossidazione sulla camicia, specie
                nelle zone non protette dal film d'olio. Su camicie nikasil
                la corrosione è particolarmente insidiosa: il nichel
                viene attaccato dallo zolfo presente in alcuni carburanti
                o dagli acidi prodotti dalla condensazione della miscela
                a motore freddo.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Controllo della planarità della base</h4>
              <p>
                La base del cilindro che appoggia sul carter deve essere
                perfettamente piana. Una base deformata — spesso conseguenza
                di surriscaldamento o di bullonatura non uniforme — causa
                perdite di pressione nel carter con effetti diretti
                sull'alimentazione e sulla compressione. Si verifica con
                un piano di riscontro e uno spessimetro: tolleranza massima
                0,05 mm su tutta la superficie.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Vita operativa della camicia</h4>
              <p>
                In uso agonistico la revisione della camicia è prevista
                ogni 30 – 50 ore a seconda del motore. In uso amatoriale
                intenso ogni 80 – 120 ore o quando la misura di
                ovalizzazione supera il limite. Su motori da cross e
                da enduro competitivo, il cilindro viene rinikilasilato
                o sostituito insieme al pistone a ogni revisione
                programmata del motore.
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
            <h3>Modifica delle luci — effetti sulla curva</h3>
            <p>
              Alzare la luce di scarico (ridurne l'altezza dal bordo superiore
              del cilindro) anticipa l'apertura e sposta la potenza verso gli
              alti regimi, sacrificando la coppia ai bassi. Abbassarla ha
              l'effetto opposto. Allargare le luci di travaso aumenta la
              portata nella fase di lavaggio, migliorando il riempimento
              a tutte le velocità. Ogni modifica richiede una verifica
              dei tempi con goniometro sull'albero.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Alesatura</span>
            <h3>Rialesatura e oversize</h3>
            <p>
              Quando la camicia in ghisa supera il limite di usura, si
              esegue la rettifica all'oversize successivo (+0,25 mm,
              +0,50 mm, +1,00 mm) abbinando il pistone corrispondente.
              I cilindri nikasil non si rettificano: vengono ricondizionati
              con un nuovo rivestimento galvanico oppure sostituiti. La
              rettifica di un cilindro in ghisa richiede rettificatrice
              verticale, controllo della geometria e plateau-honing finale.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Scarico variabile</span>
            <h3>YPVS, ATAC e valvole di scarico</h3>
            <p>
              I sistemi di scarico variabile (Yamaha YPVS, Honda ATAC,
              Kawasaki KIPS) modificano elettro-meccanicamente l'altezza
              effettiva della luce di scarico in funzione del regime.
              A bassi regimi la valvola abbassa la luce, aumentando la
              coppia; agli alti la solleva, liberando la portata massima.
              Il risultato è una curva di potenza più lineare su tutta
              la gamma dei regimi.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Cilindro;
