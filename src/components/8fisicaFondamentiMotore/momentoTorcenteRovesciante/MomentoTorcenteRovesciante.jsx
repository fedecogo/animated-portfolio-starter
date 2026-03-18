import "./momentoTorcenteRovesciante.scss";
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

const MomentoTorcenteRovesciante = () => {
  return (
    <section className="momentoTorcenteRovesciante" id="momentoTorcenteRovesciante">
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
              Fisica — 8.7
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Momento torcente e rovesciante: il motore contro il telaio
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Quando il motore produce coppia per spingere la ruota
              posteriore, accade qualcosa che la maggior parte
              dei piloti non vede ma sente in ogni centimetro
              del corpo: il terzo principio di Newton si manifesta
              in modo fisicamente brutale. Per ogni azione c'è
              una reazione uguale e contraria — la coppia che
              l'albero motore applica alla ruota genera una coppia
              di reazione identica sul telaio in direzione opposta.
              Quella reazione tende a far ruotare il motore —
              e con esso tutto il telaio — nella direzione inversa
              alla rotazione dell'albero. In una moto da cross
              che apre il gas in uscita di curva, queste forze
              sono abbastanza grandi da influenzare la traiettoria
              se il pilota non le compensa attivamente.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il momento rovesciante è la seconda grandezza critica:
              in accelerazione la forza di trazione alla ruota
              posteriore — applicata al suolo ad altezza zero —
              genera un momento che cerca di ruotare l'intera
              moto attorno all'asse del pneumatico posteriore,
              sollevando la ruota anteriore. L'altezza del baricentro,
              il passo, la distribuzione dei pesi, l'angolo del
              forcellone e la geometria della catena determinano
              quanto di quella coppia motore si traduce in
              trasferimento di carico e quanto in spinta pura.
              Capire questi momenti non è teoria accademica —
              è la fisica che spiega perché certi telai funzionano
              e altri no, perché certi piloti impennano sempre
              e altri mai, perché il 2T è così diverso dal 4T
              nella dinamica di accelerazione.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Quattro fenomeni fondamentali</span>
              <h3>Reazione Newton, momento rovesciante, anti-squat e giroscopio</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Reazione torcente — la coppia motore genera una coppia uguale e opposta sul telaio per il 3° principio di Newton</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Momento rovesciante — in accelerazione F_trazione × h_CG tende ad alzare il muso; in frenata il contrario</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Anti-squat — la geometria del forcellone e della catena controbilancia parzialmente il trasferimento di carico</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Coppia giroscopica — il volano e le ruote in rotazione generano forze di precessione nelle curve e nelle sbandate</span>
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
              <span className="placeholderText">Immagine / GIF — schema forze su moto in accelerazione: F_trazione, momento rovesciante, reazione telaio</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Schema delle forze</span>
            <p>
              In un istante di piena accelerazione la moto è
              soggetta simultaneamente a più sistemi di forze.
              La forza di trazione F_t agisce orizzontalmente
              al contatto ruota-suolo. La forza peso mg agisce
              verticalmente nel baricentro. La reazione torcente
              del motore agisce sul piano trasversale del telaio.
              Ognuna di queste forze genera momenti rispetto
              a diversi centri di rotazione. Il bilanciamento
              dinamico di questi momenti determina se la ruota
              anteriore rimane a terra, se il telaio si torce,
              se il pneumatico posteriore perde aderenza.
              La geometria del telaio — distanza tra gli assi,
              altezza del baricentro, angolo del forcellone —
              è progettata specificamente per gestire questi
              momenti nelle condizioni di utilizzo previste.
            </p>
          </div>
        </motion.div>

        {/* ── REAZIONE BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="reazioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="reazioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">I quattro momenti</span>
            <h3>Reazione, rovesciamento, frenata e giroscopio — le quattro forze che il pilota non vede ma sente</h3>
            <p>
              Ogni momento che agisce sulla moto in movimento
              ha un'origine fisica precisa e un effetto misurabile
              sulla dinamica di guida. Conoscerli trasforma
              sensazioni soggettive — "la moto si impenna",
              "il posteriore si alleggerisce", "la moto
              resiste alla sterzata" — in fenomeni comprensibili
              e governabili.
            </p>
          </motion.div>

          <motion.div className="reazioneGrid" variants={cardVariants}>

            <div className="reazioneCard">
              <div className="reazioneCardTop">
                <span className="reazioneBadge badgeFormula">Formula</span>
                <span className="reazioneSub">Reazione torcente — Newton III</span>
              </div>
              <h4>M_reazione = −M_motore — il telaio che risponde all'albero</h4>
              <p>
                Per il terzo principio di Newton, quando l'albero
                motore applica una coppia M al pistone e
                alla ruota posteriore, il telaio subisce una
                coppia di reazione M_reazione = −M uguale
                in modulo e opposta in verso. La direzione di
                questa reazione dipende dalla disposizione
                dell'albero — nei 2T trasversali (asse albero
                parallelo all'asse ruote) la reazione tende
                a ruotare il telaio longitudinalmente: in
                accelerazione il motore "carica" il lato
                destro del telaio (rotazione in senso orario
                vista da destra). Nei motori con albero
                longitudinale la reazione agisce nel piano
                verticale. Con 29 Nm di coppia motore il telaio
                subisce 29 Nm di coppia di reazione — trasmessa
                ai silent block degli attacchi motore e poi
                al telaio. La rigidità torsionale del telaio
                determina quanto questa coppia deforma la geometria.
              </p>
            </div>

            <div className="reazioneCard">
              <div className="reazioneCardTop">
                <span className="reazioneBadge badgeFormula">Formula</span>
                <span className="reazioneSub">Momento rovesciante — accelerazione</span>
              </div>
              <h4>M_rov = F_t × h_CG — la formula dell'impennata</h4>
              <p>
                Il momento rovesciante in accelerazione è il
                prodotto della forza di trazione F_t (alla ruota
                posteriore) per l'altezza del baricentro h_CG:
                M_rov = F_t × h_CG. Questo momento tende a
                ruotare la moto attorno all'asse della ruota
                posteriore, sollevando il muso. Il momento
                stabilizzante è dato dal peso sulla ruota
                anteriore moltiplicato per il passo (distanza
                tra gli assi): M_stab = W_ant × L. L'impennata
                avviene quando M_rov supera M_stab.
                Per una moto da cross da 100 kg con h_CG = 520 mm,
                passo L = 1.450 mm e distribuzione 45% ant.
                / 55% post., la forza di trazione critica è
                F_t_crit = W_ant × L / h_CG = 441 × 1,45 / 0,52
                ≈ 1.230 N = 125 kgf. Con 150 Nm alla ruota
                (prima marcia) e pneumatico da 21" (r = 0,26 m)
                F_t = 150 / 0,26 = 577 N — l'impennata è
                abbondantemente sopra soglia senza controllo attivo.
              </p>
            </div>

            <div className="reazioneCard">
              <div className="reazioneCardTop">
                <span className="reazioneBadge badgeFatto">Fatto</span>
                <span className="reazioneSub">Momento rovesciante — frenata</span>
              </div>
              <h4>In frenata il momento si inverte — carico sul anteriore, alleggerimento al posteriore</h4>
              <p>
                In frenata la forza di decelerazione agisce
                in direzione opposta alla trazione. Il momento
                rovesciante si inverte: tende a ruotare la moto
                attorno all'asse della ruota anteriore,
                comprimendo la forcella e alleggerendo il
                posteriore. L'effetto si somma al trasferimento
                di carico dinamico (deceleration squat): se
                il baricentro è a 520 mm e la decelerazione
                è 0,8 g, il trasferimento di carico è
                ΔW = m × a × h_CG / L = 100 × 8 × 0,52 / 1,45
                ≈ 286 N — il 29% del peso della moto si sposta
                sull'anteriore. La forcella si comprime di
                conseguenza, il retrotreno si alleggerisce
                e il posteriore tende a sollevarsi nei casi
                di frenata intensa. Il sistema anti-bloccaggio
                ruota posteriore (ABS) nei moderni 2T enduro
                serve esattamente a gestire questa riduzione
                di carico sull'asse posteriore durante la frenata.
              </p>
            </div>

            <div className="reazioneCard">
              <div className="reazioneCardTop">
                <span className="reazioneBadge badgeDefinizione">Definizione</span>
                <span className="reazioneSub">Coppia giroscopica</span>
              </div>
              <h4>Precessione giroscopica — il volano che resiste alle curve</h4>
              <p>
                Un corpo in rotazione (ruota, volano, albero motore)
                si comporta come un giroscopio: quando si applica
                una coppia esterna che tenta di cambiare
                l'orientamento del suo asse di rotazione,
                il corpo risponde con una coppia di precessione
                perpendicolare sia alla coppia applicata
                che all'asse di rotazione. Nella moto, il volano
                pesante del 2T (necessario per smorzare le
                irregolarità del ciclo a 2 tempi) genera
                una coppia giroscopica significativa durante
                le curve veloci: la moto "resiste" alla variazione
                di direzione proporzionalmente alla massa
                e alla velocità di rotazione del volano.
                I motori da competizione usano volani leggeri
                per ridurre questo effetto (e aumentare la
                risposta del gas), accettando però una minore
                stabilità del regime al minimo e una curva
                di potenza più nervosa.
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
            <span className="captionTag">Anti-squat e geometria</span>
            <p>
              L'anti-squat è il fenomeno per cui la geometria
              del forcellone e la tensione della catena di
              trasmissione generano una forza che tende
              a sollevare il retrotreno invece di abbassarlo
              durante l'accelerazione — compensando parzialmente
              il trasferimento di carico. Il punto di applicazione
              della forza della catena sul forcellone, combinato
              con l'angolo del forcellone rispetto al suolo,
              crea un momento che si oppone all'accosciamento
              (squat). Un anti-squat del 100% significherebbe
              zero trasferimento di carico in accelerazione —
              teoricamente ideale, praticamente impossibile
              e indesiderabile per la guidabilità. I costruttori
              puntano a valori di 80 – 120% in prima marcia
              e li fanno variare al variare del rapporto
              per mantenere un comportamento prevedibile
              in tutte le condizioni di utilizzo.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — schema geometria anti-squat: forcellone, catena, punto istantaneo di rotazione e vettori forza</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── GEOMETRIA BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="geometriaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="geometriaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Geometria e trasmissione</span>
            <h3>Anti-squat, tensione catena e distribuzione dinamica — come il telaio gestisce i momenti</h3>
            <p>
              Il telaio non è solo una struttura passiva che
              regge il motore — è un sistema dinamico che
              interagisce con i momenti generati dalla trasmissione
              in ogni istante del funzionamento. La geometria
              di forcellone, catena e attacchi motore è progettata
              per trasformare i momenti torcenti in spinta
              nel modo più efficiente possibile.
            </p>
          </motion.div>

          <motion.div className="geometriaGrid" variants={cardVariants}>

            <div className="geometriaCard geometriaAntiSqat">
              <div className="geometriaCardTop">
                <span className="geometriaBadge badgeAntiSquat">Anti-squat</span>
                <span className="geometriaTag">Geometria forcellone</span>
              </div>
              <h4>Il forcellone come leva — la geometria che bilancia l'accelerazione</h4>
              <p>
                L'anti-squat si calcola come la percentuale
                di trasferimento di carico dovuto all'accelerazione
                che viene compensata dalla geometria della
                trasmissione. Dipende dall'angolo del forcellone
                (rispetto all'orizzontale), dalla posizione
                del pignone rispetto al perno del forcellone
                e dal rapporto di trasmissione inserito.
                In prima marcia — dove la forza di trazione
                è massima — un 125cc da cross moderno ha
                anti-squat del 90 – 115%: il retrotreno
                tende leggermente a sollevarsi invece di
                abbassarsi, trasferendo carico sull'anteriore
                e migliorando la trazione. In sesta marcia
                lo stesso valore scende a 50 – 70%: l'effetto
                è minore perché la forza di trazione è molto
                più bassa. Modificare l'altezza della ruota
                posteriore (mono regolabile) cambia l'angolo
                del forcellone e quindi l'anti-squat.
              </p>
            </div>

            <div className="geometriaCard geometriaCatena">
              <div className="geometriaCardTop">
                <span className="geometriaBadge badgeCatena">Catena</span>
                <span className="geometriaTag">Tensione e momento</span>
              </div>
              <h4>La tensione di catena come vettore di forza — l'elemento che collega tutto</h4>
              <p>
                La catena di trasmissione non è solo un collegamento
                meccanico — è un elemento strutturale che
                trasmette la coppia del motore alla ruota
                e simultaneamente applica forze al forcellone.
                La tensione nella catena a piena coppia in
                prima marcia può superare 2.000 – 3.000 N —
                tre volte il peso della moto. La componente
                orizzontale di questa tensione spinge
                il forcellone verso avanti (verso il motore),
                creando un momento attorno al perno del
                forcellone che si somma o si oppone all'effetto
                anti-squat a seconda dell'angolo relativo
                tra catena e forcellone. Per questo motivo
                la posizione dei foderi del forcellone e
                il diametro del pignone sono parametri
                fondamentali nel progetto della dinamica
                longitudinale — non solo della trasmissione.
              </p>
            </div>

            <div className="geometriaCard geometriaPeso">
              <div className="geometriaCardTop">
                <span className="geometriaBadge badgePeso">Baricentro</span>
                <span className="geometriaTag">Distribuzione dinamica</span>
              </div>
              <h4>Distribuzione dinamica del peso — come cambia in frenata e accelerazione</h4>
              <p>
                La distribuzione del peso statica (tipicamente
                45 – 48% ant. / 52 – 55% post. su un 125cc
                da cross) cambia drasticamente in condizioni
                dinamiche. In accelerazione con 0,5 g il
                trasferimento di carico è ΔW = 100 × 5 × 0,52
                / 1,45 ≈ 179 N → distribuzione diventa 28% ant.
                / 72% post. La trazione aumenta, ma la direzionalità
                diminuisce (meno carico sul anteriore = meno
                steering). In frenata con 0,8 g il trasferimento
                è ΔW ≈ 286 N → distribuzione diventa 74% ant.
                / 26% post. La stabilità in frenata dipende
                interamente dall'anteriore, il posteriore
                tende a sbandare se frena troppo. Ogni regolazione
                di sospensioni, posizione del pilota e geometria
                del telaio modifica questi trasferimenti —
                e quindi il comportamento in accelerazione
                e in frenata.
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
              <span className="placeholderText">Immagine / GIF — moto in impennata con vettori forza M_rov, F_t, W e momento stabilizzante</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">L'impennata in fisica</span>
            <p>
              L'impennata è il momento in cui il momento
              rovesciante supera il momento stabilizzante
              del peso sull'anteriore. Non è un errore del
              pilota — è il risultato prevedibile di un calcolo
              fisico. La soglia dipende dal rapporto
              F_t × h_CG vs W_ant × L. I piloti professionisti
              usano l'impennata controllata come tecnica di
              guida: alzare il muso in uscita di curva riduce
              il carico frontale, diminuisce l'attrito
              di rotolamento e permette alla ruota posteriore
              di spingersi con tutta la sua aderenza disponibile.
              Controllare la quota del muso con il gas
              — tenendola bassa per massimizzare l'aderenza
              o alta per saltare ostacoli — è una delle
              abilità tecniche più avanzate del fuoristrada.
            </p>
          </div>
        </motion.div>

        {/* ── GRANDEZZE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="grandezzeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="grandezzeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Glossario e numeri</span>
            <h3>Formule, fatti e record — i numeri che devi conoscere sui momenti della moto in movimento</h3>
            <p>
              Ogni sensazione di guida ha un'equazione fisica
              dietro. Questi sono i numeri che trasformano
              "il posteriore scivola", "la moto si impenna"
              e "la forcella affonda" in grandezze calcolabili,
              modificabili e ottimizzabili.
            </p>
          </motion.div>

          <motion.div className="grandezzeGrid" variants={cardVariants}>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>Trasferimento di carico: ΔW = m × a × h_CG / L</h4>
              <p>
                Il trasferimento di carico longitudinale in
                accelerazione o decelerazione è ΔW = m × a ×
                h_CG / L, dove m è la massa totale (moto +
                pilota), a è l'accelerazione in m/s², h_CG
                è l'altezza del baricentro e L il passo.
                Per m = 170 kg (moto 100 kg + pilota 70 kg),
                a = 5 m/s² (≈ 0,5 g), h_CG = 0,60 m, L = 1,45 m:
                ΔW = 170 × 5 × 0,60 / 1,45 = 352 N = 36 kgf.
                Il peso sull'anteriore scende di 36 kg, quello
                sul posteriore sale di 36 kg. Questo è il valore
                che determina la differenza di affondamento
                tra anteriore e posteriore durante l'accelerazione —
                e che il pilota percepisce come "il muso che si
                alza". Triplicando l'accelerazione (gara,
                prima marcia, uscita di curva), ΔW supera i 100 kgf.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeDefinizione">Definizione</span>
              <h4>Centro istantaneo di rotazione — il punto che definisce l'anti-squat</h4>
              <p>
                Il Centro Istantaneo di Rotazione (CIR) del
                forcellone è il punto attorno a cui il forcellone
                ruoterebbe istantaneamente in assenza di
                ammortizzatore. Si determina graficamente
                prolungando la linea del fodero del forcellone
                e la linea del biellino del monoammortizzatore
                fino alla loro intersezione. L'anti-squat
                percentuale si calcola come la posizione
                del CIR rispetto alla linea che collega
                il contatto ruota posteriore al baricentro:
                se il CIR è sopra questa linea, anti-squat
                &gt; 100% (sollevamento retrotreno); se sotto,
                anti-squat &lt; 100% (abbassamento). I costruttori
                di motocross progettano il CIR per dare
                anti-squat variabile con la corsa del forcellone —
                alto all'estensione (massima trazione) e
                basso alla compressione (stabilità nei salti).
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>Momento giroscopico del volano: M_giro = I × ω × Ω</h4>
              <p>
                Il momento giroscopico si calcola come M_giro
                = I × ω × Ω, dove I è il momento di inerzia
                del volano (kg·m²), ω la sua velocità angolare
                (rad/s) e Ω la velocità di precessione (rad/s
                della curva). Un volano da 0,5 kg con raggio
                di girazione di 50 mm ha I = 0,5 × 0,05²
                = 0,00125 kg·m². A 10.000 rpm (ω = 1.047 rad/s)
                in una curva a 30° in 1 secondo (Ω ≈ 0,52 rad/s),
                il momento giroscopico è M = 0,00125 × 1.047 ×
                0,52 ≈ 0,68 Nm. Modesto per la curva, ma
                a 12.000 rpm in una curva stretta veloce sale
                a 1,5 – 2 Nm — abbastanza da influenzare
                la risposta dello sterzo su sospensioni rigide.
                Le ruote (momento d'inerzia molto maggiore)
                contribuiscono 10 – 20 volte di più.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>Rigidità torsionale del telaio: 500 – 1.500 Nm/° nei 2T da cross</h4>
              <p>
                La rigidità torsionale del telaio determina
                quanto il telaio si deforma torsionalmente
                sotto la coppia di reazione del motore e
                le forze laterali. I telai in alluminio dei
                125cc da cross moderni (KTM SX, Husqvarna TC,
                Yamaha YZ) hanno rigidità torsionale di 500 –
                800 Nm/° — deliberatamente inferiore a quella
                dei telai in acciaio CrMo (1.200 – 1.500 Nm/°)
                degli anni '90. La deformazione controllata
                del telaio in alluminio è una caratteristica
                di progetto, non un difetto: la flessibilità
                torsionale ammortizza i picchi di carico
                laterale, migliorando il feeling di guida
                su terreni irregolari. I progettisti di telai
                parlano di "feeling" quando descrivono la
                rigidità ottimale — è la fisica della flessione
                controllata che il pilota percepisce come
                comunicazione con il terreno.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>Forza impennata critica: F_crit = W_ant × L / h_CG</h4>
              <p>
                La forza di trazione critica per l'impennata
                si calcola imponendo M_rov = M_stab:
                F_t_crit = W_ant × L / h_CG. Con W_ant =
                peso sull'anteriore a riposo, L = passo,
                h_CG = altezza baricentro. Per una moto da
                cross con W_ant = 450 N, L = 1,45 m e h_CG
                = 0,55 m: F_t_crit = 450 × 1,45 / 0,55 = 1.186 N.
                In prima marcia con rapporto totale 8:1 e
                pneumatico da 0,26 m di raggio, occorre una
                coppia alla ruota di 1.186 × 0,26 = 308 Nm
                per impennare. Con 150 Nm motore × 8 rapporto
                = 1.200 Nm alla ruota (teorici, al netto delle
                perdite) la forza di trazione reale è limitata
                solo dall'aderenza — 1.200 / 0,26 = 4.615 N.
                L'impennata in prima marcia è strutturalmente
                inevitabile se l'aderenza lo permette.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeRecord">Record</span>
              <h4>Il 500cc GP: momento rovesciante così alto che impennava in terza marcia</h4>
              <p>
                I motori 500cc a 2 tempi da GP degli anni '80 –
                '90 (Honda NSR500, Yamaha YZR500, Suzuki RGV500)
                producevano 160 – 180 CV a 11.000 – 12.000 rpm
                su una moto da 130 – 140 kg. Con coppia alla
                ruota in prima marcia nell'ordine di 800 – 1.000 Nm,
                la forza di trazione superava la soglia di impennata
                fino alla terza o quarta marcia su asfalto asciutto.
                I piloti usavano la frizione come regolatore
                del momento rovesciante — "dosare" la frizione
                per controllare quanta coppia arrivava alla ruota
                era la tecnica fondamentale per non fare
                impennata involontaria ad ogni uscita di curva.
                Valentino Rossi descrisse il 500cc come "una
                moto che impennava anche quando non volevi" —
                il momento rovesciante era così alto da essere
                al limite della gestibilità anche per i
                migliori piloti al mondo.
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
            <span className="cardTag">Pilota e momenti</span>
            <h3>Come il pilota controlla i momenti — il corpo come contrappeso attivo</h3>
            <p>
              Il pilota non è un passeggero passivo — è il
              componente di maggior massa del sistema e il
              suo posizionamento modifica tutti i momenti
              in gioco. Spostarsi in avanti abbassa h_CG effettivo
              e aumenta W_ant, alzando la soglia di impennata.
              Spostarsi indietro fa l'opposto. In uscita
              di curva il pilota di fuoristrada si alza
              sulle pedane e si porta leggermente indietro
              — abbassa il baricentro rispetto alla posizione
              seduta, controlla il momento rovesciante e
              libera la forcella per assorbire le irregolarità.
              La tecnica di pilotaggio del 2T non è separabile
              dalla fisica dei momenti: ogni movimento del corpo
              è una modifica calcolata (inconsciamente o no)
              ai parametri che determinano la dinamica della moto.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Setup e momenti</span>
            <h3>Come il setup modifica i momenti — ogni regolazione ha un effetto fisico preciso</h3>
            <p>
              Il setup della moto (altezza, precarico, smorzamento,
              geometria) non è un'operazione di confort —
              è la modifica sistematica dei parametri fisici
              che determinano i momenti in gioco. Alzare il
              retrotreno aumenta l'angolo del forcellone
              e modifica l'anti-squat. Abbassare la forcella
              nei foderi abbassa il baricentro anteriore
              e modifica il trasferimento di carico. Modificare
              la tensione della catena cambia la forza che
              essa esercita sul forcellone. Ogni intervento
              ha un effetto fisico calcolabile — non è
              "sento che va meglio", è "ho modificato il CIR
              del forcellone di 5 mm e l'anti-squat di 8 punti".
              La comprensione dei momenti trasforma il setup
              da alchimia a ingegneria.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">2T vs 4T — dinamica</span>
            <h3>Perché il 2T si comporta diversamente dal 4T — i momenti che cambiano tutto</h3>
            <p>
              La differenza dinamica tra 2T e 4T non dipende
              solo dalla potenza e dalla curva di coppia —
              dipende anche dai momenti torcenti e rovescianti
              che generano. Il 2T produce coppia con impulsi
              ad alta frequenza (ogni giro), il 4T ogni due
              giri: gli impulsi del 2T sono più brevi e intensi,
              quelli del 4T più lunghi e graduali. Questo si
              traduce in un momento rovesciante del 2T che
              arriva come un "colpo" a ogni apertura di gas,
              mentre il 4T spinge in modo più progressivo.
              Il volano più pesante del 4T smorza queste
              discontinuità ma aggiunge momento giroscopico.
              Il 2T con volano leggero è più nervoso e diretto —
              risponde immediatamente ma richiede controllo
              più preciso. È la stessa fisica che spiega
              perché i piloti esperti preferiscono il 2T
              per il fuoristrada tecnico: meno inerzia rotante,
              meno momento giroscopico, più manovrabilità.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default MomentoTorcenteRovesciante;
