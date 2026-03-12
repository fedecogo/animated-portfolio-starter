import "./guarnizioni.scss";
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

const Guarnizioni = () => {
  return (
    <section className="guarnizioni" id="guarnizioni">
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
              Tenute statiche
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Le guarnizioni nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Le guarnizioni sono le tenute statiche del motore: separano
              superfici fisse che non si muovono l'una rispetto all'altra
              ma che devono rimanere a tenuta in presenza di pressioni
              elevate, gradienti termici estremi e vibrazioni continue.
              Nel 2 tempi il loro ruolo è ancora più critico che nel 4
              tempi perché le pressioni in gioco coinvolgono sia la
              camera di combustione che il carter di pompaggio — due
              camere che non possono comunicare tra loro né con l'esterno.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Una guarnizione di testa che perde compromette la compressione
              e raffredda la camera. Una guarnizione carter che perde altera
              la precompressione della miscela. Entrambe i difetti si
              manifestano con sintomi simili — calo di potenza, avviamento
              difficile, irregolarità al minimo — rendendo la diagnosi
              precisa fondamentale prima di aprire il motore.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Le guarnizioni principali</span>
              <h3>Dove si trovano e cosa sigillano</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Guarnizione di testa — tra testa e cilindro, sigilla la camera di combustione</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Guarnizione base cilindro — tra cilindro e carter, sigilla il passaggio travasi</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Guarnizione carter — tra i due semicarter, sigilla la camera di pompaggio</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Guarnizioni coperchi — coperchio frizione, valvola lamellare, presa potenza</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── TIPI BLOCK ──────────────────────────────────────────────────── */}
        <motion.div
          className="tipiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tipiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Tipologie</span>
            <h3>Materiali e costruzione — non tutte le guarnizioni sono uguali</h3>
            <p>
              Il materiale e la costruzione della guarnizione sono scelti
              in base alla pressione massima da contenere, al differenziale
              termico tra le due superfici e alla natura dei fluidi a
              contatto. Usare il tipo sbagliato — o uno spessore diverso
              dall'originale — ha conseguenze dirette sul rapporto di
              compressione e sulla durata del componente.
            </p>
          </motion.div>

          <motion.div className="tipiGrid" variants={cardVariants}>

            <div className="tipiCard">
              <div className="tipiCardTop">
                <span className="tipiBadge badgeRame">Rame</span>
                <span className="tipiZona">Testa cilindro</span>
              </div>
              <h4>Guarnizione in rame — alta performance e riutilizzabile</h4>
              <p>
                Le guarnizioni di testa in rame puro o lega di rame sono
                la scelta racing per eccellenza. Il rame si deforma
                plasticamente sotto la pressione di serraggio adattandosi
                perfettamente alle microirregolarità delle superfici,
                garantendo una tenuta eccellente anche alle pressioni di
                combustione più elevate. Possono essere ricotte (portate
                a rosso e raffreddate in acqua) per ripristinare la
                duttilità e riutilizzate più volte. Lo spessore preciso
                permette di regolare il rapporto di compressione con
                accuratezza al decimo.
              </p>
            </div>

            <div className="tipiCard">
              <div className="tipiCardTop">
                <span className="tipiBadge badgeComposita">Composita</span>
                <span className="tipiZona">Testa / Base</span>
              </div>
              <h4>Guarnizione composita — la soluzione OEM moderna</h4>
              <p>
                Le guarnizioni composite multistrato (MLS — Multi Layer
                Steel) o con anima in fibra e rivestimento in elastomero
                sono la soluzione standard di serie. Coniugano resistenza
                meccanica della lamiera d'acciaio con capacità di
                adattamento del rivestimento elastomerico alle superfici.
                Durano più delle guarnizioni in rame in uso normale ma
                sono meno adatte alle modifiche di compressione e non
                si riutilizzano dopo la prima apertura.
              </p>
            </div>

            <div className="tipiCard">
              <div className="tipiCardTop">
                <span className="tipiBadge badgeCarta">Carta / Fibra</span>
                <span className="tipiZona">Carter / Coperchi</span>
              </div>
              <h4>Guarnizioni in carta e fibra — per i piani a bassa pressione</h4>
              <p>
                I piani di giunzione a bassa pressione — coperchio frizione,
                coperchio valvola lamellare, coperchi di ispezione — usano
                guarnizioni in carta imbevuta di resina o in fibra compressa.
                Comprimibili, economiche e facili da sostituire, reggono
                bene le basse pressioni ma si saturano di umidità e
                idrocarburi col tempo, perdendo capacità di tenuta. Vanno
                sempre sostituite all'apertura, mai riutilizzate.
              </p>
            </div>

            <div className="tipiCard">
              <div className="tipiCardTop">
                <span className="tipiBadge badgeLiquido">Liquido</span>
                <span className="tipiZona">Carter giunzione</span>
              </div>
              <h4>Sigillante anaerobico — sui piani lavorati</h4>
              <p>
                Il piano di giunzione dei carter moderni non usa una
                guarnizione tradizionale ma uno strato sottilissimo di
                sigillante anaerobico (Loctite 574, ThreeBond 1215).
                Polimerizza in assenza d'aria tra le due superfici a
                contatto, riempiendo le microirregolarità. Richiede
                superfici perfettamente sgrassate, uno strato uniforme
                e sottile su entrambi i lati, e un tempo di polimerizzazione
                completo prima dell'avviamento.
              </p>
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
              <span className="placeholderText">Immagine / GIF — kit guarnizioni completo con guarnizione testa in rame e base cilindro</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Kit guarnizioni</span>
            <p>
              Un kit guarnizioni completo per motore 2T include guarnizione
              di testa, guarnizione base cilindro in uno o più spessori,
              guarnizione carter e le guarnizioni secondarie per coperchi
              e raccordi. Lo spessore della guarnizione base è il parametro
              che permette di correggere il volume della camera di
              combustione dopo la rettifica della testa o del cilindro.
            </p>
          </div>
        </motion.div>

        {/* ── SPESSORI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="spessoriBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="spessoriHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Spessore e compressione</span>
            <h3>Lo spessore della guarnizione — come influenza il rapporto di compressione</h3>
            <p>
              Ogni decimo di millimetro di variazione nello spessore
              della guarnizione di testa o di base cilindro modifica
              il volume della camera di combustione e quindi il rapporto
              di compressione effettivo. Nel 2 tempi questa variazione
              influenza anche la posizione delle luci rispetto al pistone —
              modificando le tempistiche di apertura e chiusura delle
              luci stesse.
            </p>
          </motion.div>

          <motion.div className="spessoriGrid" variants={cardVariants}>

            <div className="spessoriCard">
              <div className="spessoriVisual spessoriSottile">
                <span className="spessoriLabel">Guarnizione sottile</span>
                <span className="spessoriVal">↑ Compressione</span>
              </div>
              <h4>Guarnizione più sottile — compressione più alta</h4>
              <p>
                Ridurre lo spessore della guarnizione di testa avvicina
                la testa al pistone, riducendo il volume della camera
                al PMS e alzando il rapporto di compressione. Più
                potenza potenziale, ma anche maggiore rischio di
                detonazione se il carburante non è adeguato. In
                preparazione racing si usa insieme alla rettifica
                della testa per ottimizzare il squish.
              </p>
            </div>

            <div className="spessoriCard">
              <div className="spessoriVisual spessoriSpessa">
                <span className="spessoriLabel">Guarnizione spessa</span>
                <span className="spessoriVal">↓ Compressione</span>
              </div>
              <h4>Guarnizione più spessa — compressione abbassata</h4>
              <p>
                Aumentare lo spessore abbassa il rapporto di compressione.
                Usato per recuperare un motore rettificato eccessivamente,
                per adattare il motore a carburanti a basso indice
                ottanico o per correggere la posizione delle luci di
                trasferimento dopo una rettifica del cilindro. Nella
                guarnizione base il cambio di spessore agisce anche
                sulle tempistiche di apertura dei travasi.
              </p>
            </div>

            <div className="spessoriCard">
              <div className="spessoriVisual spessoriBase">
                <span className="spessoriLabel">Guarnizione base</span>
                <span className="spessoriVal">Luci + Compressione</span>
              </div>
              <h4>Guarnizione base cilindro — doppia influenza</h4>
              <p>
                La guarnizione base è un parametro a doppia influenza:
                sposta verticalmente il cilindro rispetto al carter,
                modificando sia il rapporto di compressione che le
                tempistiche delle luci di scarico e travasi. Alzare
                il cilindro anticipa l'apertura dello scarico, avendo
                un effetto simile all'allargamento della luce.
                Parametro potente, da modificare con banco di prova.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── DIAGNOSI GRID ───────────────────────────────────────────────── */}
        <motion.div
          className="diagnBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi</span>
            <h3>Riconoscere una guarnizione che cede — sintomi e verifica</h3>
          </motion.div>

          <motion.div className="diagnGrid" variants={cardVariants}>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Perdita di compressione — testa</h4>
              <p>
                La guarnizione di testa che cede lascia sfiatare la
                pressione di compressione tra la camera e l'esterno
                o verso il circuito di raffreddamento. Si manifesta
                con calo di compressione misurabile al compressimetro,
                fumo bianco all'avviamento a freddo se il liquido
                refrigerante è coinvolto, o bolle nel radiatore nei
                motori raffreddati a liquido.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Perdita di pompaggio — base / carter</h4>
              <p>
                La guarnizione base o carter che cede introduce aria
                spuria nel ciclo di pompaggio, riducendo la precompressione
                della miscela nel carter. Sintomi identici a una perdita
                di paraolio: minimo irregolare, calo di potenza ai
                medi regimi, avviamento difficile a freddo. Diagnosi
                definitiva solo con test vacuometrico.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Compressimetro e test di tenuta</h4>
              <p>
                La pressione di compressione si misura con compressimetro
                avvitato nella candela — un motore sano a 2 tempi misura
                tipicamente 10 – 14 bar a seconda della cilindrata e del
                rapporto di compressione. Un valore inferiore al 15%
                del nominale indica perdita di guarnizione testa, segmenti
                usurati o entrambi. Il test di tenuta carter con vacuometro
                esclude o conferma la guarnizione base/carter.
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
            <h3>Preparazione superfici — il passaggio che decide tutto</h3>
            <p>
              Qualsiasi guarnizione applicata su superfici contaminate da
              olio, vecchio sigillante o residui di carbonio non terrà
              indipendentemente dalla qualità del prodotto. La pulizia
              delle superfici con raschietto morbido e acetone, seguita
              da ispezione in controluce per verificare la planarità, è
              il prerequisito per ogni montaggio che duri. Una testa o
              un cilindro con piano di appoggio fuori tolleranza va
              rettificato prima del rimontaggio.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Coppia di serraggio</span>
            <h3>Serraggio testa — sequenza e dinamometrica</h3>
            <p>
              Il serraggio della testa si esegue sempre con chiave
              dinamometrica, seguendo la sequenza a croce in almeno
              due passaggi — il primo a coppia ridotta, il secondo
              a coppia finale. La coppia varia tipicamente tra 18 e
              35 Nm a seconda del diametro dei bulloni e del materiale
              della testa. Un serraggio non uniforme deforma la testa
              e la guarnizione, creando punti di perdita localizzati
              che non si manifestano subito ma dopo i primi cicli termici.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Intervallo</span>
            <h3>Quando sostituire — preventivo vs reattivo</h3>
            <p>
              La guarnizione di testa va sostituita a ogni smontaggio
              della testa, senza eccezioni — il ciclo termico di
              montaggio e avviamento la deforma in modo permanente.
              Le guarnizioni base e carter vanno sostituite a ogni
              apertura del rispettivo piano di giunzione. In uso
              agonistico intenso (motocross, enduro racing) si include
              il kit guarnizioni completo nella revisione del top end
              ogni 20 – 30 ore come prassi standard.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Guarnizioni;
