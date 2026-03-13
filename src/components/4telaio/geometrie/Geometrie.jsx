import "./geometrie.scss";
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

const Geometrie = () => {
  return (
    <section className="geometrie" id="geometrie">
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
              Telaio — Geometrie
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Geometrie e<br />
              <span className="accentText">distribuzione dei pesi</span>
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Le geometrie del telaio sono il linguaggio con cui
              il costruttore comunica al pilota come la moto
              vuole essere guidata. Tre numeri — angolo di sterzo,
              avancorsa e interasse — descrivono il carattere
              dinamico della moto più di qualsiasi altra specifica.
              Non sono valori da memorizzare: sono relazioni da
              capire, perché cambiano insieme e i loro effetti
              si sommano e si contrappongono in modi non sempre
              intuitivi.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La distribuzione dei pesi è il quarto parametro —
              meno citato ma altrettanto determinante. Una moto
              con geometrie perfette ma con il baricentro nel
              posto sbagliato si guida male. La posizione del
              motore nel telaio, l'altezza della sella, la
              lunghezza del forcellone: tutto concorre a definire
              dove si trova il centro di massa del sistema
              pilota-moto — e quindi come risponde alle intenzioni
              di guida.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Valori tipici — 250cc Enduro</span>
              <h3>I numeri di riferimento</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex miSteel">α</span>
                <span className="miniText"><strong>Angolo di sterzo</strong> — 27° – 29° sulle enduro moderne. Più chiuso = più agile. Più aperto = più stabile ad alta velocità</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex miBlue">T</span>
                <span className="miniText"><strong>Avancorsa (trail)</strong> — 115 – 135 mm. Determina il self-centering del manubrio. Varia con l'angolo di sterzo e il diametro ruota</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex miSilver">L</span>
                <span className="miniText"><strong>Interasse</strong> — 1.480 – 1.510 mm sulle 250cc. Moto corta = reattività. Moto lunga = stabilità in velocità</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex miTeal">%</span>
                <span className="miniText"><strong>Distribuzione pesi</strong> — ideale 48/52 ant/post a riposo. Varia con postura pilota, carburante e assetto sospensioni</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex miSteel">h</span>
                <span className="miniText"><strong>Altezza baricentro</strong> — 550 – 620 mm dal suolo. Più basso = più stabile. Più alto = più agile in rollio</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── ANGOLO DI STERZO BLOCK ──────────────────────────────────────── */}
        <motion.div
          className="parametroBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="parametroHeader" variants={fadeUpVariants}>
            <span className="parametroTag tagAlpha">α</span>
            <div>
              <span className="sectionLabel">Angolo di sterzo (rake)</span>
              <h3>L'inclinazione del cannotto — il parametro che cambia tutto il carattere</h3>
            </div>
          </motion.div>

          <motion.div className="parametroContent" variants={cardVariants}>
            <div className="parametroText">
              <p>
                L'angolo di sterzo è l'inclinazione dell'asse del
                cannotto rispetto alla verticale. Si misura in gradi —
                tipicamente tra 25° e 32° nel fuoristrada moderno.
                È il parametro con l'effetto più immediato sul carattere
                di guida: anche mezzo grado di differenza è percepibile
                da un pilota esperto.
              </p>
              <p>
                Un angolo chiuso (25° – 27°) avvicina l'asse di sterzo
                alla verticale. La forcella è più eretta. Il risultato è
                una moto reattiva, agile nei cambi di direzione, con
                risposta immediata alle ingressioni in curva. È la
                scelta del motocross puro e delle moto da trial — dove
                la velocità di cambio direzione è prioritaria sulla
                stabilità in rettilineo.
              </p>
              <p>
                Un angolo aperto (29° – 32°) inclina maggiormente la
                forcella verso il basso. La moto diventa più stabile
                ad alta velocità — il manubrio tende a tornare
                al centro con più forza dopo una perturbazione.
                L'ingresso in curva è più lento e richiede più input
                dal pilota. È la scelta delle enduro da hard enduro
                e delle moto da rally — dove la velocità in rettilineo
                e la stabilità su fondi sconnessi ad alta velocità
                prevalgono sull'agilità pura.
              </p>
            </div>

            <div className="parametroDiagram">
              <div className="diagramAngolo">
                <div className="angoloSchema">
                  <div className="angoloVerticale" />
                  <div className="angoloForcella angoloChiuso">
                    <span className="angoloLabel">25–27°<br/><small>agile</small></span>
                  </div>
                  <div className="angoloForcella angoloAperto">
                    <span className="angoloLabel">29–32°<br/><small>stabile</small></span>
                  </div>
                  <div className="angoloTerra" />
                </div>
                <div className="diagramLegenda">
                  <div className="legendaItem">
                    <span className="legendaDot dotChiuso" />
                    <span>Chiuso — MX / Trial</span>
                  </div>
                  <div className="legendaItem">
                    <span className="legendaDot dotAperto" />
                    <span>Aperto — Enduro / Rally</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── AVANCORSA BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="parametroBlock avancorsaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="parametroHeader" variants={fadeUpVariants}>
            <span className="parametroTag tagBlue">T</span>
            <div>
              <span className="sectionLabel">Avancorsa (trail)</span>
              <h3>La distanza che fa tornare il manubrio al centro — e perché non è semplice come sembra</h3>
            </div>
          </motion.div>

          <motion.div className="parametroContent avancorsaContent" variants={cardVariants}>
            <div className="parametroText">
              <p>
                L'avancorsa è la distanza orizzontale tra il punto
                dove l'asse del cannotto di sterzo tocca terra
                e il punto di contatto della ruota anteriore
                con il suolo. Si misura in millimetri — tipicamente
                115 – 135 mm nel fuoristrada moderno.
              </p>
              <p>
                È la grandezza che determina l'effetto
                di self-centering del manubrio: quando la moto
                percorre una curva, la ruota anteriore tende
                a girare verso il centro della curva grazie
                proprio all'avancorsa positiva. Più è lunga,
                più il manubrio vuole tornare al centro.
                Più è corta, meno resistenza oppone alla sterzata —
                moto più pronta ma meno stabile.
              </p>
              <p>
                L'avancorsa non si regola direttamente — è la
                conseguenza di tre parametri: l'angolo di sterzo,
                il diametro della ruota anteriore e l'offset
                del piastrino. Modificare uno di questi tre cambia
                l'avancorsa. È per questo che montare una ruota
                anteriore di diametro diverso dall'originale
                o abbassare la forcella nei piastrini cambia
                il comportamento della moto in modo spesso
                inaspettato — si sta modificando l'avancorsa
                senza rendersene conto.
              </p>
            </div>

            <div className="avancorsaSchemaWrap">
              <div className="avancorsaSchema">
                <div className="avSchema">
                  <div className="avAsseCannotto" />
                  <div className="avPuntoAsseATerra">
                    <span className="avPuntoLabel">asse a terra</span>
                  </div>
                  <div className="avPuntoRuota">
                    <span className="avPuntoLabel">contatto ruota</span>
                  </div>
                  <div className="avTrail">
                    <span className="avTrailLabel">Trail (T)</span>
                  </div>
                  <div className="avTerraLine" />
                </div>
              </div>
              <div className="avancorsaNote">
                <span className="avNoteTitle">Trail = f(α, Ø, offset)</span>
                <p>L'avancorsa dipende dall'angolo di sterzo, dal diametro ruota e dall'offset del piastrino. Non è un parametro diretto.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── INTERASSE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="parametroBlock interasseBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="parametroHeader" variants={fadeUpVariants}>
            <span className="parametroTag tagSilver">L</span>
            <div>
              <span className="sectionLabel">Interasse (wheelbase)</span>
              <h3>La distanza tra gli assi ruota — la lunghezza che definisce l'inerzia</h3>
            </div>
          </motion.div>

          <motion.div className="parametroContent" variants={cardVariants}>
            <div className="parametroText">
              <p>
                L'interasse è la distanza orizzontale tra l'asse
                della ruota anteriore e l'asse della ruota posteriore.
                È la dimensione longitudinale caratteristica della moto —
                quella che si sente di più nei cambi di direzione rapidi
                e nelle transizioni.
              </p>
              <p>
                Una moto con interasse corto (1.450 – 1.480 mm) ha
                un momento di inerzia attorno all'asse verticale più
                basso — risponde più rapidamente alle sterzate, cambia
                direzione con meno sforzo, è più maneggevole nei
                tornanti e nel guidone stretto. Il prezzo è una minore
                stabilità in rettilineo: le perturbazioni del fondo
                si traducono più facilmente in variazioni di traiettoria.
              </p>
              <p>
                Una moto con interasse lungo (1.510 – 1.560 mm) ha
                più inerzia rotazionale — è più stabile ad alta velocità,
                assorbe meglio le perturbazioni longitudinali, dà
                più tempo al pilota per correggere le traiettorie.
                Il prezzo è la maneggevolezza nei tratti tecnici lenti.
                Le enduro da rally e le moto da hard enduro ad alta
                velocità tendono verso interassi lunghi — le moto
                da MX e trial verso interassi corti.
              </p>
            </div>

            <div className="interasseCompare">
              <div className="compareItem compareCorto">
                <span className="compareBadge">Corto — 1.450–1.480 mm</span>
                <div className="compareBar">
                  <div className="compareBarFill compareBarFillCorto" />
                </div>
                <ul className="compareList">
                  <li>Cambio direzione rapido</li>
                  <li>Maneggevole nel tecnico lento</li>
                  <li>Meno stabile ad alta velocità</li>
                </ul>
                <span className="compareUso">MX · Trial · Enduro tecnico</span>
              </div>
              <div className="compareItem compareLungo">
                <span className="compareBadge">Lungo — 1.510–1.560 mm</span>
                <div className="compareBar">
                  <div className="compareBarFill compareBarFillLungo" />
                </div>
                <ul className="compareList">
                  <li>Stabile in velocità</li>
                  <li>Assorbe perturbazioni longitudinali</li>
                  <li>Meno reattivo nei cambi direzione</li>
                </ul>
                <span className="compareUso">Rally · Hard Enduro · Enduro veloce</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER ──────────────────────────────────────────── */}
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
              <span className="placeholderText">Schema — vista laterale moto con angolo sterzo, trail, interasse e baricentro etichettati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">I tre parametri in relazione</span>
            <p>
              Angolo di sterzo, avancorsa e interasse non sono
              parametri indipendenti — si influenzano a vicenda.
              Aumentare l'angolo di sterzo aumenta anche l'avancorsa
              (a parità di tutto il resto). Allungare il forcellone
              aumenta l'interasse ma sposta il baricentro verso
              il posteriore, scaricando l'anteriore. Ogni modifica
              a uno dei tre richiede di riconsiderare gli altri
              due — è per questo che i costruttori cambiano sempre
              più parametri insieme quando modificano la geometria
              tra una generazione e la successiva.
            </p>
          </div>
        </motion.div>

        {/* ── DISTRIBUZIONE PESI BLOCK ────────────────────────────────────── */}
        <motion.div
          className="pesoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="pesoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Distribuzione dei pesi</span>
            <h3>Dove si trova il baricentro — e come cambia con il pilota, il carburante e l'assetto</h3>
            <p>
              La distribuzione dei pesi tra ruota anteriore e posteriore
              è il parametro geometrico che il pilota influenza di più
              con la sua postura — e che cambia di più tra moto ferma
              e moto in movimento. Non è un numero fisso: è una variabile
              continua che il pilota bravo gestisce consapevolmente.
            </p>
          </motion.div>

          <motion.div className="pesoGrid" variants={cardVariants}>

            <div className="pesoCard">
              <span className="pesoIdx pesoIdxTeal">01</span>
              <h4>Il baricentro statico — 48/52 come punto di partenza</h4>
              <p>
                A riposo, con il pilota in posizione neutra, la
                distribuzione ideale per un'enduro moderna è circa
                48% anteriore e 52% posteriore. Non è un valore
                assoluto — varia di 2 – 3 punti percentuali tra
                costruttori e modelli. Questa distribuzione garantisce
                un carico sufficiente sulla ruota anteriore per
                il feeling di sterzo, senza appesantire eccessivamente
                il posteriore che deve trazionare. Il carburante pieno
                (3 – 5 kg spostati in alto e in avanti nella maggior
                parte dei serbatoi) sposta la distribuzione verso
                l'anteriore di 1 – 2 punti — la moto si sente
                diversa a serbatoio pieno rispetto a mezzo serbatoio.
              </p>
            </div>

            <div className="pesoCard">
              <span className="pesoIdx pesoIdxBlue">02</span>
              <h4>Baricentro in frenata — il trasferimento di carico</h4>
              <p>
                Durante la frenata anteriore intensa il peso si
                trasferisce sull'anteriore — fino al 70 – 80% del
                totale in frenata d'emergenza. Questo carica
                la forcella, aumenta l'aderenza della ruota anteriore
                e contemporaneamente scarica il posteriore fino al
                rischio di sollevamento. Il telaio trasferisce questo
                carico attraverso la forcella al cannotto e poi
                alle travi principali. La geometria di sterzo cambia
                durante la frenata perché la forcella si comprime —
                l'angolo di sterzo effettivo aumenta e l'avancorsa
                si riduce: la moto diventa meno stabile proprio
                quando si frena forte.
              </p>
            </div>

            <div className="pesoCard">
              <span className="pesoIdx pesoIdxSilver">03</span>
              <h4>Altezza del baricentro — stabilità vs agilità in rollio</h4>
              <p>
                Un baricentro basso (sotto 550 mm) aumenta la
                stabilità in rollio — la moto tende meno a cadere
                sul fianco in curva e richiede meno controsterzo
                per cambiare direzione. Un baricentro alto (oltre
                600 mm) aumenta l'agilità: il momento rovesciante
                del baricentro aiuta il rollio nella direzione
                desiderata, riducendo la forza necessaria per
                inclinare la moto. Le moto da trial hanno baricentro
                alto intenzionalmente — facilita i movimenti lenti
                e precisi. Le moto da motocross moderno tendono
                ad abbassare il baricentro per aumentare la stabilità
                negli atterraggi e nelle frenate.
              </p>
            </div>

            <div className="pesoCard">
              <span className="pesoIdx pesoIdxSteel">04</span>
              <h4>Come il pilota modifica la distribuzione — la tecnica come strumento</h4>
              <p>
                Il pilota è il componente più pesante del sistema —
                80 kg su una moto da 100 kg. Spostare il corpo in
                avanti di 15 cm trasferisce 3 – 4 kg di carico
                sulla ruota anteriore, aumentando l'aderenza e
                la risposta di sterzo. Spostarsi indietro carica
                il posteriore, migliorando la trazione e sollevando
                il muso per superare ostacoli. Questa è la tecnica
                di guida fuoristrada — non è estetica, è fisica
                applicata. I piloti professionisti modificano
                continuamente la distribuzione dei pesi con piccoli
                spostamenti del busto che il pubblico non vede
                ma che determinano dove va la moto.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── EFFETTI COMBINATI BLOCK ──────────────────────────────────────── */}
        <motion.div
          className="effettiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="effettiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Effetti combinati</span>
            <h3>Come angolo, trail e interasse si sommano — modificare uno cambia tutto</h3>
          </motion.div>

          <motion.div className="effettiGrid" variants={cardVariants}>

            <div className="effettoCard">
              <span className="effettoScenario">Scenario A</span>
              <h4>Forcella abbassata di 5 mm nei piastrini</h4>
              <p>
                Abbassare la forcella nei piastrini di 5 mm riduce
                l'altezza del cannotto, chiude leggermente l'angolo
                di sterzo effettivo e riduce l'avancorsa di 3 – 5 mm.
                La moto diventa più agile in ingresso curva ma
                meno stabile ad alta velocità. Il baricentro
                scende leggermente. Il posteriore si alza
                relativamente — cambia la distribuzione dei pesi.
                Cinque millimetri cambiano tre parametri simultaneamente.
              </p>
            </div>

            <div className="effettoCard">
              <span className="effettoScenario">Scenario B</span>
              <h4>Forcellone allungato di 10 mm</h4>
              <p>
                Un forcellone più lungo di 10 mm aumenta l'interasse,
                sposta il baricentro verso il posteriore e abbassa
                l'angolo di inclinazione della catena. La moto diventa
                più stabile in rettilineo, migliora la trazione in
                uscita di curva ma perde reattività nei cambi direzione.
                La distribuzione pesi cambia: più carico sul posteriore,
                meno sull'anteriore — il feeling di sterzo si alleggerisce.
              </p>
            </div>

            <div className="effettoCard">
              <span className="effettoScenario">Scenario C</span>
              <h4>Molla forcella più dura senza cambiare precarico</h4>
              <p>
                Una molla più dura riduce l'affossamento in frenata —
                la forcella si comprime meno, l'angolo di sterzo
                effettivo rimane più vicino a quello statico anche
                durante la frenata. La moto è più stabile in frenata
                ma perde comfort sulle piccole asperità perché
                la forcella non le assorbe. Cambiare la molla
                modifica la geometria dinamica — non solo il comfort.
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
            <span className="cardTag">Setup</span>
            <h3>Come leggere le specifiche geometriche sul manuale — e cosa modificare per primo</h3>
            <p>
              I manuali tecnici riportano le geometrie con la moto
              in assetto standard, pilota da 75 kg, sospensioni
              nella posizione mediana. Sono un punto di partenza,
              non un valore immutabile. La prima modifica da fare
              se si trova la moto troppo lenta in ingresso curva
              è abbassare la forcella di 3 – 5 mm nei piastrini —
              è reversibile, è gratuita e ha un effetto immediato
              percepibile. Se la moto è instabile ad alta velocità
              il primo intervento è alzare la forcella o aumentare
              il precarico molla posteriore per redistribuire il peso.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Offset piastrino</span>
            <h3>L'offset del piastrino di sterzo — il parametro nascosto che cambia il trail</h3>
            <p>
              Il piastrino di sterzo tiene i foderi della forcella
              ad una certa distanza dall'asse del cannotto —
              questa distanza è l'offset. Aumentare l'offset
              (piastrino più avanzato) riduce il trail e rende
              la moto più agile. Ridurre l'offset aumenta il trail
              e la stabilità. I piastrini aftermarket con offset
              diverso dall'originale sono un'opzione di setup comune
              nel MX e nell'enduro racing — consentono di modificare
              il trail senza toccare la geometria del telaio.
              La differenza tra un offset di 22 mm e uno di 25 mm
              cambia il trail di 4 – 6 mm — abbastanza da sentirsi.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Regole pratiche</span>
            <h3>Le tre regole empiriche delle geometrie — rapide da ricordare, utili sempre</h3>
            <p>
              Prima regola: angolo più aperto = trail più lungo = più
              stabile. Seconda: interasse più lungo = più stabile in
              rettilineo, meno agile nelle curve lente. Terza: baricentro
              più basso = più stabile in rollio, meno agile nei cambi
              di direzione rapidi. Le tre regole si sommano — una moto
              rally ha angolo aperto, interasse lungo e baricentro
              basso: massima stabilità. Una moto trial ha angolo chiuso,
              interasse corto e baricentro alto: massima maneggevolezza.
              Ogni enduro da fuoristrada è un compromesso tra questi
              due estremi, calibrato per il terreno di utilizzo previsto.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Geometrie;
