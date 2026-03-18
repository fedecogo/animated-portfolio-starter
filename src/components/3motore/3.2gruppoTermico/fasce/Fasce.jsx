import "./fasce.scss";
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

const Fasce = () => {
  return (
    <section className="fasce" id="fasce">
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
              Le fasce elastiche nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Le fasce elastiche — dette anche segmenti o anelli di tenuta —
              sono gli elementi che separano la camera di combustione dal
              carter. Alloggiate nelle scanalature ricavate nel pistone, hanno
              il compito di mantenere la tenuta dei gas combusti verso l'alto,
              di trasferire il calore dalla testa del pistone alla camicia e di
              impedire che l'olio miscelato risalga verso la camera in quantità
              eccessiva. In un motore a 2 tempi, dove tutto accade in una
              singola rotazione dell'albero, anche una minima perdita di tenuta
              si traduce immediatamente in calo di compressione e perdita di
              potenza.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              A differenza del motore a 4 tempi — che monta solitamente tre
              fasce (due di tenuta gas e una di raschiaolio) — il 2T utilizza
              tipicamente una o due fasce di tenuta gas soltanto. L'assenza
              della fascia raschiaolio è una conseguenza diretta del sistema di
              lubrificazione a miscela: l'olio fa parte della carica stessa e
              non deve essere raschiato dalla camicia nel senso tradizionale.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Funzioni principali</span>
              <h3>Cosa fanno le fasce</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Tenuta gas — impediscono ai gas combusti di scendere nel
                  carter
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Trasferimento termico — conducono il calore dal pistone alla
                  camicia
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Centraggio — contribuiscono a guidare il pistone nella camicia
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Controllo olio — limitano il film lubrificante sulla parete
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
              <img
                src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773807134/ChatGPT_Image_Mar_18_2026_01_40_48_PM_moyoma.png"
                alt=""
              />
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Posizione</span>
            <p>
              La fascia elastica alloggiata nella sede del pistone: la sua
              tensione naturale la spinge contro la parete della camicia,
              creando una tenuta dinamica che si autoregola con la pressione dei
              gas combusti durante la fase di combustione.
            </p>
          </div>
        </motion.div>

        {/* ── FUNZIONAMENTO BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="diagramBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="flowDiagram" variants={cardVariants}>
            <div className="diagramTrack" />

            <div className="diagramNode">
              <span className="nodeNumber">01</span>
              <h3>Tensione radiale a riposo</h3>
              <p>
                A motore freddo e fermo, la fascia esercita una pressione
                radiale sulla camicia grazie alla sua forma aperta a riposo.
                Questa tensione è sufficiente per garantire una tenuta di base
                ma non è il meccanismo principale di sigillatura in esercizio.
              </p>
            </div>

            <div className="diagramNode">
              <span className="nodeNumber">02</span>
              <h3>Pressione dei gas — autotenuta</h3>
              <p>
                Durante la combustione, la pressione dei gas entra nello spazio
                tra fascia e fondo della sede, spingendo la fascia verso il
                basso della scanalatura e radialmente verso la camicia. Più alta
                è la pressione in camera, più forte è la tenuta: il sistema è
                autoregolandosi per definizione.
              </p>
            </div>

            <div className="diagramNode">
              <span className="nodeNumber">03</span>
              <h3>Trasferimento di calore</h3>
              <p>
                Il contatto tra fascia e camicia è anche il principale percorso
                di dissipazione termica del pistone. Si stima che il 70 – 80%
                del calore asportato dalla testa del pistone passi attraverso le
                fasce verso la camicia e quindi verso il sistema di
                raffreddamento del cilindro.
              </p>
            </div>

            <div className="diagramNode">
              <span className="nodeNumber">04</span>
              <h3>Il giunto di apertura</h3>
              <p>
                Ogni fascia presenta un'apertura — il giunto — che ne permette
                il montaggio e compensa la dilatazione termica. In esercizio
                questo giunto si riduce fino a un valore minimo: se si azzera
                del tutto per usura della fascia o cedimento termico, i lembi si
                toccano e la fascia si rompe.
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
            <h3>Ghisa, acciaio e rivestimenti — perché la scelta conta</h3>
            <p>
              Il materiale della fascia determina la sua resistenza alle
              temperature di combustione, la sua capacità di conformarsi alla
              parete della camicia, l'attrito durante lo scorrimento e la durata
              nel tempo. Non esiste un materiale universale: ogni applicazione
              ha le sue priorità.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>
            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeGhisa">Ghisa</span>
                <h4>Fasce in ghisa grigia</h4>
              </div>
              <p>
                La ghisa è il materiale tradizionale per le fasce di tenuta.
                Offre eccellente capacità di autoaddestramento sulla camicia —
                si "adatta" progressivamente alla geometria della parete durante
                il rodaggio — e ha proprietà lubrificanti intrinseche grazie
                alla struttura grafitica del materiale. Meno performante ad
                altissimi regimi per via del peso maggiore.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeAcciaio">Acciaio</span>
                <h4>Fasce in acciaio</h4>
              </div>
              <p>
                Le fasce in acciaio sono più leggere e più resistenti della
                ghisa ad alte temperature. Permettono di ridurre lo spessore
                radiale e assiale mantenendo la stessa resistenza strutturale,
                con benefici diretti sulla riduzione delle masse oscillanti e
                sull'attrito. Sono lo standard nelle applicazioni sportive e
                racing moderne.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeCromo">Cromatura</span>
                <h4>Rivestimento in cromo duro</h4>
              </div>
              <p>
                Le fasce cromate presentano uno strato di cromo duro sulla
                superficie esterna a contatto con la camicia. La durezza
                elevatissima (HRC 65 – 70) riduce drasticamente l'usura per
                strisciamento, aumenta la resistenza alla corrosione e migliora
                il comportamento in condizioni di lubrificazione limite. Il
                rodaggio è più lento ma la durata finale è superiore.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgePVD">PVD / DLC</span>
                <h4>Rivestimenti avanzati</h4>
              </div>
              <p>
                I rivestimenti PVD (Physical Vapor Deposition) e DLC
                (Diamond-Like Carbon) sono la frontiera attuale per le fasce da
                competizione. Strati sottilissimi — nell'ordine del micron — che
                abbinano durezza superficiale estrema a coefficienti di attrito
                bassissimi. Rodaggio rapido, usura minima, tenuta ottimale anche
                con giochi ridotti. Costo elevato, esclusivo uso racing e motori
                premium.
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
            <span className="captionTag">Sezione trasversale</span>
            <p>
              Sezione trasversale della fascia nella sede del pistone: la forma
              rettangolare standard, il gioco assiale nella scanalatura, il
              giunto di apertura e il profilo barrel-face sulla superficie di
              contatto con la camicia che favorisce la formazione del film
              lubrificante.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <img
                src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773807362/ChatGPT_Image_Mar_18_2026_01_45_50_PM_ya2zbq.png"
                alt="fasce"
              />
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── GEOMETRIA & PROFILI BLOCK ───────────────────────────────────── */}
        <motion.div
          className="geometriaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="geometriaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Geometria</span>
            <h3>Profili della fascia — sezione e forma del giunto</h3>
            <p>
              La forma della fascia in sezione trasversale non è arbitraria.
              Ogni profilo è il risultato di un compromesso tra tenuta dei gas,
              attrito, formazione del film lubrificante e adattamento alla
              camicia. Conoscere i profili aiuta a scegliere la fascia corretta
              per ogni applicazione.
            </p>
          </motion.div>

          <motion.div className="geometriaGrid" variants={cardVariants}>
            <div className="geoCard">
              <span className="geoBadge">Rettangolare</span>
              <h4>Profilo rettangolare piatto</h4>
              <p>
                Il profilo più comune e semplice. Superficie di contatto ampia,
                buona tenuta dei gas, rodaggio relativamente lento. Usato nella
                maggior parte dei motori stradali e da enduro come fascia
                superiore. Il profilo piatto richiede una camicia ben
                rettificata per funzionare al meglio.
              </p>
            </div>

            <div className="geoCard">
              <span className="geoBadge badgeBarrel">Barrel-face</span>
              <h4>Profilo barrel (convesso)</h4>
              <p>
                La superficie esterna è leggermente convessa — a botte. Questo
                profilo favorisce la formazione del cuneo di olio durante la
                corsa del pistone, riducendo l'attrito e migliorando la
                lubrificazione. Tollera meglio le imperfezioni di allineamento
                biella-pistone e il cedimento termico della camicia.
              </p>
            </div>

            <div className="geoCard">
              <span className="geoBadge badgeTaper">Taper-face</span>
              <h4>Profilo taper (conico)</h4>
              <p>
                La superficie di contatto è leggermente inclinata, con il bordo
                inferiore che sporge più del superiore. Nella corsa di discesa
                del pistone il profilo conico agisce da raschia, riportando il
                film di olio verso il basso. Usato come seconda fascia in
                abbinamento alla prima rettangolare o barrel.
              </p>
            </div>

            <div className="geoCard">
              <span className="geoBadge badgeGiunto">Giunto</span>
              <h4>Forma del giunto di apertura</h4>
              <p>
                Il giunto può essere dritto (butt joint), a scalino o a
                baionetta. Il giunto dritto è il più semplice e diffuso; i
                giunti complessi riducono il passaggio diretto di gas attraverso
                l'apertura aumentando la tenuta, al costo di una maggiore
                complessità produttiva e di montaggio.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── QUOTE & GIOCHI BLOCK ────────────────────────────────────────── */}
        <motion.div
          className="quoteBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="quoteHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Misure e tolleranze</span>
            <h3>I giochi che determinano tutto</h3>
            <p>
              Nel montaggio delle fasce, le misure non sono indicative — sono
              vincolanti. Un giunto troppo aperto perde gas; uno troppo stretto
              si rompe per espansione termica. Un gioco assiale nella sede
              troppo elevato causa il fluttuare della fascia e il pompaggio
              dell'olio. Ogni valore va verificato con strumenti adeguati prima
              del montaggio.
            </p>
          </motion.div>

          <motion.div className="quoteGrid" variants={cardVariants}>
            <div className="quoteCard">
              <div className="quoteTop">
                <span className="quoteName">Gioco giunto a freddo</span>
                <span className="quoteValue">0,15 – 0,40 mm</span>
              </div>
              <div className="quoteBar">
                <div className="quoteFill" style={{ width: "35%" }} />
              </div>
              <p>
                Misurato inserendo la fascia nel cilindro con un pistone di
                riferimento e verificando l'apertura del giunto con uno
                spessimetro. Il valore minimo garantisce che a caldo la fascia
                non chiuda completamente e si rompa; il massimo garantisce che
                la tenuta sia sufficiente.
              </p>
            </div>

            <div className="quoteCard">
              <div className="quoteTop">
                <span className="quoteName">Gioco assiale in sede</span>
                <span className="quoteValue">0,02 – 0,06 mm</span>
              </div>
              <div className="quoteBar">
                <div className="quoteFill" style={{ width: "20%" }} />
              </div>
              <p>
                Il gioco tra la fascia e le pareti laterali della sede nel
                pistone. Troppo stretto blocca la fascia impedendone
                l'espansione termica; troppo largo permette oscillazioni assiali
                che danneggiano sia la fascia che le pareti della sede e causano
                pompaggio dell'olio.
              </p>
            </div>

            <div className="quoteCard">
              <div className="quoteTop">
                <span className="quoteName">Gioco radiale in sede</span>
                <span className="quoteValue">0,3 – 0,8 mm</span>
              </div>
              <div className="quoteBar">
                <div className="quoteFill" style={{ width: "55%" }} />
              </div>
              <p>
                Lo spazio tra il fondo della sede e il bordo interno della
                fascia quando è montata sul pistone. Deve permettere alla
                pressione dei gas di agire sul retro della fascia per creare la
                tenuta autoregolante, ma non deve essere eccessivo per evitare
                vibrazioni della fascia nella sede.
              </p>
            </div>
          </motion.div>
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
            <h3>Leggere lo stato delle fasce senza smontare il motore</h3>
            <p>
              Non è sempre necessario smontare il motore per valutare lo stato
              delle fasce. Molti segnali emergono dall'analisi delle
              prestazioni, dal comportamento del motore e da una misura di
              compressione. La diagnosi precoce evita di ritrovarsi a smontare
              il motore in condizioni di emergenza.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>
            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Perdita di compressione progressiva</h4>
              <p>
                Il segnale più diretto di fasce usurate. La compressione
                misurata con il compressimetro scende sotto i valori di
                specifica del motore. Valori inferiori al 20 – 30% rispetto al
                nuovo indicano fasce da sostituire. La misura va eseguita con il
                motore caldo e il getto del gas spalancato.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Fumo blu allo scarico</h4>
              <p>
                In un 2T il fumo bianco-azzurro allo scarico è normale in misura
                ridotta per via dell'olio in miscela. Un fumo blu persistente e
                intenso — specialmente in rilascio o alla ripresa — indica che
                le fasce non trattengono più l'olio sulla parete della camicia,
                che risale in camera in quantità eccessiva.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Avviamento difficile e minimo instabile</h4>
              <p>
                Fasce consumate riducono la compressione disponibile durante
                l'avviamento, rendendo necessari più colci con il kick o più
                tentativi col motorino. A motore avviato il minimo può risultare
                instabile o richiedere un numero di giri più alto per mantenersi
                regolare.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Test di compressione con olio</h4>
              <p>
                Se la misura di compressione è bassa, si aggiungono 2 – 3 cm³ di
                olio nel cilindro attraverso il foro della candela e si ripete
                la misura. Se la compressione sale significativamente, il
                problema è nelle fasce. Se rimane invariata, il problema è nella
                testa o nella valvola di scarico (nei motori con scarico
                variabile).
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Ispezione visiva dopo smontaggio</h4>
              <p>
                A pistone smontato, le fasce vanno controllate per: giunto
                chiuso o quasi (fascia esaurita radialmente), rigature sulla
                superficie di contatto, depositi duri nella sede che bloccano il
                movimento, rotture o scheggiature. Una fascia integra deve
                scorrere liberamente nella sua sede e non presentare
                deformazioni assiali.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Vita operativa attesa</h4>
              <p>
                In ambito agonistico le fasce si sostituiscono insieme al
                pistone ogni 15 – 25 ore. In uso amatoriale intenso ogni 40 – 60
                ore o a ogni misura di compressione che scenda sotto il 90% del
                valore di specifica. In uso stradale moderato la vita può
                superare le 100 ore se la miscela è corretta e il rodaggio è
                stato rispettato.
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
              <img
                src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773807556/ChatGPT_Image_Mar_18_2026_01_49_01_PM_q3mzso.png"
                alt="Misurazione"
              />
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Misurazione</span>
            <p>
              Misurazione del giunto di apertura con spessimetro laminare: la
              fascia viene inserita nel cilindro alla quota operativa e il gioco
              al giunto viene misurato con precisione decimillesimale. È una
              delle misure più importanti nell'assemblaggio del gruppo termico.
            </p>
          </div>
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
            <h3>Il perno di blocco della fascia</h3>
            <p>
              Nei motori a 2 tempi la fascia non può ruotare liberamente nella
              sede — se lo facesse, il giunto finirebbe sulle luci del cilindro
              e si romperebbe. Per questo motivo la sede presenta un perno di
              arresto (pin) che entra nel giunto della fascia e ne impedisce la
              rotazione. Il montaggio va eseguito verificando che il pin sia
              perfettamente allineato col giunto.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Rodaggio</span>
            <h3>Assestamento delle fasce nuove</h3>
            <p>
              Una fascia nuova non è ancora "rodata" sulla camicia: la
              superficie di contatto si adatta progressivamente durante le prime
              ore di esercizio. In questa fase l'attrito è maggiore, le
              temperature più alte e la tenuta non è ancora al massimo. Il
              rispetto del protocollo di rodaggio — cicli brevi con
              raffreddamenti completi — è fondamentale per estendere la vita
              della fascia e del cilindro.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Upgrade</span>
            <h3>Fasce aftermarket e kit revisione</h3>
            <p>
              I kit revisione aftermarket (Vertex, Wiseco, ProX, Meteor)
              includono fascia, pistone e spinotto come set coordinato.
              Acquistare la fascia separatamente è possibile ma richiede di
              verificare la compatibilità dimensionale esatta con il pistone in
              uso. Su motori preparati con cilindro nikasil o alusil, le fasce
              vanno scelte specificamente per questo tipo di rivestimento.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default Fasce;
