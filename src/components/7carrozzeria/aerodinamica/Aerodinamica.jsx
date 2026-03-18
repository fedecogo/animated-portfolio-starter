import "./aerodinamica.scss";
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

const Aerodinamica = () => {
  return (
    <section className="aerodinamica" id="aerodinamica">
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
              Carrozzeria — 7
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Aerodinamica nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              L'aerodinamica è l'elemento meno discusso della moto a
              2 tempi — e spesso il meno compreso. Non conta quanto
              in Formula 1, non conta quanto su una MotoGP, ma conta.
              A 130 km/h una moto con cupolino risparmia 8 – 12 CV
              rispetto alla stessa moto nuda: quella differenza si sente
              eccome sulla velocità di punta di un 125 da 30 CV.
              E nelle moto da fuoristrada il problema non è la velocità —
              è il raffreddamento, che è aerodinamica applicata.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La cosa fondamentale da capire è che in moto il pilota
              non è un passeggero — è il principale elemento
              aerodinamico del sistema. Il corpo del pilota rappresenta
              il 60 – 75% della superficie frontale totale. Nessuna
              carena può compensare un pilota seduto eretto ad alta
              velocità. Capire come il pilota, la carena e la moto
              interagiscono con il flusso d'aria è il primo passo
              per sfruttare al meglio qualsiasi configurazione.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Le forze in gioco</span>
              <h3>Quattro effetti aerodinamici sul sistema moto-pilota</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Drag — resistenza aerodinamica frontale che frena l'avanzamento e cresce con il quadrato della velocità</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Lift — portanza verticale che alleggerisce il retrotreno e riduce la trazione ad alta velocità</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Downforce — deportanza che preme le ruote sull'asfalto, ottenibile con appendici aerodinamiche</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Raffreddamento — gestione del flusso d'aria verso il radiatore, il vero obiettivo aerodinamico nelle 2T</span>
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
              <span className="placeholderText">Immagine / GIF — pilota in posizione aerodinamica con frecce del flusso d'aria</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Il pilota come corpo aerodinamico</span>
            <p>
              La distribuzione delle pressioni sul sistema moto-pilota
              a 120 km/h: il pilota rannicciato dietro il cupolino
              riduce la superficie frontale esposta del 35 – 45% rispetto
              alla posizione eretta. Il flusso d'aria che contorna il
              casco del pilota genera turbolenza nel retrotreno — una
              coda aerodinamica che si estende per 2 – 3 volte la
              lunghezza della moto prima di ricomporsi.
            </p>
          </div>
        </motion.div>

        {/* ── FORZE AERODINAMICHE BLOCK ────────────────────────────────────── */}
        <motion.div
          className="forzeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="forzeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fisica del flusso</span>
            <h3>Drag, lift, downforce e raffreddamento — le quattro forze che agiscono sulla moto</h3>
            <p>
              Le forze aerodinamiche non agiscono in modo indipendente —
              ogni modifica alla carena o alla posizione del pilota
              influenza tutte e quattro simultaneamente. Aumentare la
              downforce aumenta anche il drag. Ridurre il drag può
              ridurre il flusso verso il radiatore. Il compromesso
              aerodinamico ottimale dipende dalla disciplina, dal
              circuito e dalla velocità massima attesa.
            </p>
          </motion.div>

          <motion.div className="forzeGrid" variants={cardVariants}>

            <div className="forzeCard forzaDrag">
              <div className="forzeCardTop">
                <span className="forzaBadge badgeDrag">Drag</span>
                <span className="forzeAngolo">∝ v²</span>
              </div>
              <h4>Resistenza frontale — la forza che conta di più</h4>
              <p>
                Il drag è la forza che si oppone all'avanzamento della
                moto ed è proporzionale al quadrato della velocità —
                raddoppiare la velocità quadruplica la resistenza
                aerodinamica. Si calcola con la formula
                F = ½ · ρ · v² · Cx · A, dove Cx è il coefficiente
                di penetrazione aerodinamica e A è la sezione frontale.
                Su una moto senza cupolino il Cx è tipicamente 0,55 – 0,70;
                con cupolino integrale scende a 0,35 – 0,45. A 150 km/h
                questa differenza vale 5 – 10 CV di resistenza in meno
                solo sul drag frontale.
              </p>
            </div>

            <div className="forzeCard forzaLift">
              <div className="forzeCardTop">
                <span className="forzaBadge badgeLift">Lift</span>
                <span className="forzeAngolo">Retrotreno</span>
              </div>
              <h4>Portanza — il problema delle moto ad alta velocità</h4>
              <p>
                La forma di una moto genera naturalmente portanza
                verticale positiva ad alta velocità: l'aria scorre
                più veloce sotto la moto che sopra, creando una
                differenza di pressione che solleva il retrotreno.
                Su una moto 125 sportiva a piena velocità (oltre
                160 km/h) la portanza può ridurre il carico sul
                retrotreno di 15 – 25 kg, compromettendo la trazione
                in uscita di curva. Le carene delle 125 GP degli anni
                '90 avevano già piccoli deflettori sotto il codino
                proprio per contrastare questo effetto indesiderato.
              </p>
            </div>

            <div className="forzeCard forzaDownforce">
              <div className="forzeCardTop">
                <span className="forzaBadge badgeDownforce">Downforce</span>
                <span className="forzeAngolo">Appendici</span>
              </div>
              <h4>Deportanza — dal GP alla piccola sportiva</h4>
              <p>
                La downforce si ottiene con superfici inclinate che
                deflettono il flusso d'aria verso il basso, generando
                una reazione verticale verso il basso sulla moto.
                Le alette aerodinamiche moderne nelle MotoGP generano
                40 – 60 kg di downforce a 200 km/h. Nelle moto a 2 tempi
                da circuito (classi 125 e 250 GP storiche) le minigonne
                laterali e i deflettori sotto il codino svolgevano
                questa funzione in modo più rudimentale ma efficace
                nel contrastare il lift. Il costo è sempre un aumento
                del drag totale.
              </p>
            </div>

            <div className="forzeCard forzaRaff">
              <div className="forzeCardTop">
                <span className="forzaBadge badgeRaff">Raffreddamento</span>
                <span className="forzeAngolo">Priorità 2T</span>
              </div>
              <h4>Aerodinamica termica — il vero obiettivo nelle 2T</h4>
              <p>
                Nelle moto a 2 tempi con raffreddamento a liquido
                la gestione aerodinamica del flusso d'aria verso
                il radiatore è più critica di qualsiasi considerazione
                sulla velocità di punta. Il radiatore deve ricevere
                aria fresca e densa a sufficienza per dissipare
                il calore del motore in ogni condizione di guida —
                incluso il basso regime e le uscite di curva lente.
                La posizione del parafango anteriore, le prese d'aria
                laterali e i deflettori interni alla carena sono tutti
                progettati prima di tutto per il raffreddamento.
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
            <span className="captionTag">Flusso sul radiatore</span>
            <p>
              Simulazione CFD semplificata del flusso d'aria attraverso
              la presa anteriore verso il radiatore: la velocità dell'aria
              nel condotto di alimentazione del radiatore dipende dalla
              velocità della moto, dall'angolo del parafango e dalla
              presenza di deflettori interni. A bassa velocità il flusso
              si riduce drasticamente — i ventilatori elettrici ausiliari
              sulle moto da enduro compensano questa riduzione nelle
              prove di arrampicata a passo d'uomo.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — CFD flusso aria verso radiatore su moto 2T enduro</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── DISCIPLINE BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="disciplineBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="disciplineHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Discipline</span>
            <h3>Cross, enduro, motard, stradale — quanto conta davvero l'aerodinamica</h3>
            <p>
              La rilevanza dell'aerodinamica scala con la velocità media
              di utilizzo e la presenza di asfalto nel percorso. Una
              moto da motocross raramente supera i 80 – 90 km/h in gara:
              le forze aerodinamiche sono quasi irrilevanti. Una 125 sportiva
              da circuito viaggia a 160 – 175 km/h: ogni dettaglio
              aerodinamico conta e si misura in frazioni di secondo al giro.
            </p>
          </motion.div>

          <motion.div className="disciplineGrid" variants={cardVariants}>

            <div className="disciplineCard disciplineCross">
              <div className="disciplineCardTop">
                <span className="disciplineBadge badgeCross">Motocross</span>
                <span className="disciplineTag">Quasi irrilevante</span>
              </div>
              <h4>MX — l'aerodinamica non esiste, conta il fango</h4>
              <p>
                In una gara di motocross la velocità media raramente
                supera i 60 – 70 km/h su percorso e i picchi di
                velocità sulle rettilinee brevi non durano abbastanza
                a lungo da rendere significativa la resistenza
                aerodinamica. La carena della moto da cross è progettata
                esclusivamente per proteggere i componenti, liberare
                il pilota nel movimento e scaricare fango in modo
                efficiente. Il parafango anteriore alto è pensato
                per evitare l'accumulo di terra tra ruota e forcella —
                non per redirigere il flusso d'aria. Ogni grammo in
                meno di carena è più utile di qualsiasi ottimizzazione
                aerodinamica nel MX.
              </p>
            </div>

            <div className="disciplineCard disciplineEnduro">
              <div className="disciplineCardTop">
                <span className="disciplineBadge badgeEnduro">Enduro</span>
                <span className="disciplineTag">Solo termica</span>
              </div>
              <h4>Enduro — aerodinamica termica, non velocistica</h4>
              <p>
                Nell'enduro l'aerodinamica conta esclusivamente per
                il raffreddamento del motore. Le prove speciali hanno
                velocità medie basse, tratti a passo d'uomo nelle
                rocce e salite con il motore al massimo sforzo e
                velocità minima — la condizione peggiore per il
                raffreddamento aerodinamico del radiatore. Per questo
                le moto da enduro moderno (KTM EXC, Husqvarna TE,
                Beta RR) montano ventilatori elettrici ausiliarii
                sul radiatore che entrano in funzione sotto una
                certa soglia di velocità. La carena è studiata per
                dirigere il poco flusso d'aria disponibile verso
                il radiatore anche a 20 km/h.
              </p>
            </div>

            <div className="disciplineCard disciplineMotard">
              <div className="disciplineCardTop">
                <span className="disciplineBadge badgeMotard">Motard</span>
                <span className="disciplineTag">Inizia a contare</span>
              </div>
              <h4>Supermoto — aerodinamica da pista su base off-road</h4>
              <p>
                La motard porta una base off-road sull'asfalto e
                le velocità di punta aumentano significativamente —
                una 450 supermoto da competizione raggiunge i 180 km/h
                sui rettilinei. A queste velocità il drag diventa
                misurabile e la postura aerodinamica del pilota
                (abbassarsi sul serbatoio nei rettilinei) ha un impatto
                reale sui tempi sul giro. Le carene da supermoto
                racing aggiungono piccoli deflettori laterali che
                raddrizzano il flusso lungo le fiancate riducendo
                la turbolenza generata dal frame tubolare esposto
                della base enduro. Non è una vera aerodinamica
                racing — ma è il primo passo verso di essa.
              </p>
            </div>

            <div className="disciplineCard disciplineStradale">
              <div className="disciplineCardTop">
                <span className="disciplineBadge badgeStradale">Stradale / Sportiva</span>
                <span className="disciplineTag">Determinante</span>
              </div>
              <h4>125 sportiva — qui ogni dettaglio aerodinamico conta</h4>
              <p>
                Una 125 sportiva a 2 tempi (Aprilia RS 125, Honda
                NSR 125, Yamaha TZR 125) vive sull'aerodinamica.
                Con una potenza di 25 – 32 CV e una velocità massima
                di 140 – 165 km/h, la resistenza aerodinamica
                rappresenta il principale ostacolo alla velocità di
                punta. Il cupolino integrale, le fiancatine avvolgenti
                e il codino aerodinamico non sono estetica — sono
                funzione pura. La carena full-fairing di una RS 125
                riduce la Cx·A del 40 – 50% rispetto a una moto
                naked equivalente, traducendosi in 15 – 20 km/h
                in più di velocità di punta a parità di potenza.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── CONFIGURAZIONI BLOCK ────────────────────────────────────────── */}
        <motion.div
          className="configBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="configHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Configurazioni</span>
            <h3>Naked, semicarenata, full-fairing — tre profili aerodinamici a confronto</h3>
            <p>
              La scelta della configurazione di carrozzeria determina
              il profilo aerodinamico della moto in modo più decisivo
              di qualsiasi appendice o dettaglio. Non si tratta solo
              di estetica o protezione dal vento — è una scelta di
              ingegneria che vincola le prestazioni della moto a quella
              specifica finestra di velocità.
            </p>
          </motion.div>

          <motion.div className="configGrid" variants={cardVariants}>

            <div className="configCard">
              <div className="configVisual configNaked">
                <span className="configRatio">Cx 0,60 – 0,72</span>
                <span className="configEx">Naked</span>
              </div>
              <h4>Senza carena — massima libertà, massimo drag</h4>
              <p>
                Una moto senza carena espone il motore, il telaio
                e il pilota direttamente al flusso d'aria. Il
                coefficiente di resistenza aerodinamica è il più
                alto della categoria — ogni componente crea turbolenza
                propria che si somma a quella degli altri. La moto
                naked offre però il massimo in termini di maneggevolezza
                nel traffico, semplicità di manutenzione e peso
                contenuto. Per le moto da fuoristrada è l'unica
                scelta pratica: una carena chiusa raccoglierebbe
                fango e si danneggierebbe immediatamente al primo
                impatto con un ramo.
              </p>
            </div>

            <div className="configCard">
              <div className="configVisual configSemi">
                <span className="configRatio">Cx 0,45 – 0,58</span>
                <span className="configEx">Semi-carenata</span>
              </div>
              <h4>Cupolino e fiancatine — il compromesso ottimale</h4>
              <p>
                La configurazione semicarenata — cupolino anteriore
                con fiancatine laterali parziali — è il miglior
                compromesso tra protezione aerodinamica, peso e
                praticità. Il cupolino deflette il flusso d'aria
                sopra e attorno al pilota; le fiancatine riducono
                la turbolenza laterale generata dal frame e dal
                motore. Rispetto alla configurazione naked il
                guadagno in velocità di punta è di 12 – 18 km/h
                a parità di potenza. Molte moto da enduro stradali
                (KTM Duke nella versione 2T, Husqvarna Vitpilen)
                usano questa configurazione.
              </p>
            </div>

            <div className="configCard">
              <div className="configVisual configFull">
                <span className="configRatio">Cx 0,33 – 0,46</span>
                <span className="configEx">Full-fairing</span>
              </div>
              <h4>Carena integrale — il massimo per le sportive da circuito</h4>
              <p>
                La carena integrale avvolge completamente il motore,
                il telaio e in parte il pilota, creando un corpo
                aerodinamico unico ottimizzato per la velocità.
                Il cupolino integrale protegge il casco del pilota
                riducendo il drag della testa del 25 – 35%; le
                fiancatine chiuse eliminano le turbolenze laterali
                del motore; il codino aerodinamico riduce la
                scia posteriore. Per una 125 sportiva da circuito
                come l'Aprilia RS 125 o la Honda NSR 125 la carena
                integrale è imprescindibile — senza di essa la
                moto perderebbe 20 – 25 km/h di velocità massima.
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
              <span className="placeholderText">Immagine / GIF — confronto Cx naked vs semicarenata vs full-fairing con frecce flusso</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Cx a confronto</span>
            <p>
              Confronto dei coefficienti di resistenza aerodinamica
              tra le tre configurazioni principali: la stessa moto
              con carena integrale percorre 3,2 km in più con un litro
              di benzina a 120 km/h rispetto alla versione naked,
              esclusivamente per la riduzione del drag aerodinamico.
              Nelle gare di durata, questa differenza si traduce in
              meno fermate per il rifornimento.
            </p>
          </div>
        </motion.div>

        {/* ── USURA & OTTIMIZZAZIONE BLOCK ────────────────────────────────── */}
        <motion.div
          className="usuraBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="usuraHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e ottimizzazione</span>
            <h3>Instabilità, surriscaldamento e vibrazioni — riconoscere i problemi aerodinamici</h3>
            <p>
              I problemi aerodinamici si manifestano spesso in modo
              indiretto — come instabilità ad alta velocità, come
              surriscaldamento anomalo del motore o come vibrazioni
              delle plastiche a certi regimi. Identificarli correttamente
              permette di intervenire sulla causa reale invece di
              rincorrere sintomi che sembrano meccanici ma nascono
              dall'interazione con il flusso d'aria.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Instabilità ad alta velocità — shimmy e weave</h4>
              <p>
                L'instabilità del retrotreno (weave) o del retrotreno
                e dell'anteriore combinati (wobble) ad alta velocità
                ha spesso una componente aerodinamica: la turbolenza
                generata dal codino o dal casco del pilota crea
                una forza laterale alternata che eccita la frequenza
                propria del telaio. Prima di intervenire sulla geometria
                verificare se la carena posteriore è integra, se il
                codino è correttamente fissato e se il portanumero
                posteriore è rigido. Una carena asimmetrica per danno
                da caduta è la causa più comune di instabilità
                aerodinamica non diagnosticata.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Surriscaldamento anomalo in condizioni specifiche</h4>
              <p>
                Il surriscaldamento del motore che si manifesta solo
                in determinate condizioni — rettilinea ad alta velocità
                senza problemi, surriscaldamento nelle curve lente
                o nel traffico — è quasi sempre un problema di flusso
                d'aria verso il radiatore. Le prese d'aria laterali
                ostruite da fango secco, il parafango anteriore
                deformato che riduce il canale di alimentazione del
                radiatore o una plastica rimontata storta che crea
                una zona di ristagno sono cause tipiche. Pulire
                accuratamente la carena e verificare l'allineamento
                di ogni pannello prima di sospettare guasti meccanici.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Vibrazioni della carena a regimi specifici</h4>
              <p>
                La carena vibra quando la frequenza di eccitazione
                aerodinamica (flusso turbolento su un pannello mal
                fissato) coincide con la frequenza propria del pannello.
                Si manifesta come un ronzio o fischio a un preciso
                regime del motore o una precisa velocità. La diagnosi
                si effettua premendo leggermente i pannelli con la
                mano durante la marcia — se la vibrazione cessa,
                il problema è il fissaggio. Sostituire le boccole
                anti-vibrazione in gomma e verificare che tutti
                i punti di fissaggio siano occupati.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Allineamento cupolino e deflettori interni</h4>
              <p>
                Il cupolino di una moto sportiva deve essere perfettamente
                centrato rispetto all'asse longitudinale della moto:
                anche 5 mm di disallineamento creano asimmetria nel
                flusso che genera una forza laterale costante a
                velocità sostenuta. Verificare l'allineamento dopo
                ogni caduta, anche apparentemente lieve. I deflettori
                interni alla carena che dirigono l'aria verso il
                radiatore devono essere integri e correttamente
                posizionati — un deflettore mancante riduce il
                flusso al radiatore del 15 – 25%.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Controllo parafango anteriore e clearance ruota</h4>
              <p>
                Il parafango anteriore non è solo protezione dal
                fango — la sua distanza dalla ruota e il suo profilo
                influenzano il flusso d'aria che lambisce la forcella
                e raggiunge il radiatore. Un parafango deformato
                (avvicinato alla ruota per un impatto) restringe
                il canale d'aria e crea turbolenza aggiuntiva.
                Verificare la clearance ruota-parafango su entrambi
                i lati — deve essere simmetrica e non inferiore
                ai 15 – 20 mm per garantire il flusso d'aria necessario
                e prevenire contatti pericolosi nei salti.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Setup aerodinamico stagionale — postura e carena</h4>
              <p>
                L'ottimizzazione aerodinamica si rivede ad ogni inizio
                stagione o cambio di disciplina. Per le moto da pista:
                verificare che la carena non abbia danni strutturali
                invisibili, che le viti del cupolino siano al serraggio
                corretto (non oltre-serrate) e che il codino sia
                allineato. Per il pilota: la tuta è il secondo elemento
                aerodinamico dopo la carena — una tuta troppo larga
                genera turbolenza aggiuntiva. L'allenamento alla
                posizione aerodinamica corretta (abbassarsi sul
                serbatoio nei rettilinei) vale più di qualsiasi
                appendice aggiuntiva sulla moto.
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
            <span className="cardTag">Il pilota</span>
            <h3>Il pilota è il 70% dell'aerodinamica — come sfruttarlo</h3>
            <p>
              Su una moto a 2 tempi il corpo del pilota rappresenta
              il 60 – 75% della sezione frontale totale. Nessun cupolino
              può compensare un pilota seduto eretto ad alta velocità.
              La posizione "a uovo" — schiena parallela al serbatoio,
              gomiti raccolti, testa dietro al cupolino — riduce la
              sezione frontale del pilota del 35 – 45%. Nelle classi
              125 GP degli anni '80 – '90 i piloti imparavano la
              posizione aerodinamica come prima tecnica di guida sui
              rettilinei: non per comodità, ma perché si guadagnavano
              3 – 5 km/h di velocità di punta che valevano posizioni
              in qualifica.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Appendici racing</span>
            <h3>Alette e spoiler — quando servono e quando sono solo estetica</h3>
            <p>
              Le appendici aerodinamiche (alette, spoiler, canard)
              hanno senso solo oltre una certa soglia di velocità:
              sotto i 130 km/h generano più drag che downforce utile.
              Sulle moto a 2 tempi da circuito (125 e 250 GP storiche)
              i piccoli spoiler sotto il cupolino e i deflettori
              laterali erano ottimizzati tramite prove in galleria
              del vento. Le appendici aftermarket non testate in
              galleria sono spesso più dannose che utili — alterano
              il flusso verso il radiatore, aggiungono peso e possono
              creare forze asimmetriche inattese. Prima di montare
              qualsiasi appendice non originale, verificare se il
              produttore ha dati di tunnel del vento.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Raffreddamento</span>
            <h3>Ottimizzare il flusso al radiatore — la priorità vera nelle 2T</h3>
            <p>
              Nelle moto a 2 tempi ad uso agonistico il primo obiettivo
              aerodinamico è garantire il flusso d'aria al radiatore
              in ogni condizione. In pratica: mantenere le prese d'aria
              libere da fango dopo ogni uscita, non montare grafiche
              adesive sulle prese d'aria frontali, verificare che
              i deflettori interni alla carena siano intatti e
              aggiungere un ventilatore elettrico ausiliario nelle
              discipline con tratti a bassa velocità prolungati.
              Un motore che non surriscalda eroga potenza costante
              per tutta la gara — nessuna appendice aerodinamica
              da pista vale quanto un motore che lavora alla
              temperatura corretta.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Aerodinamica;
