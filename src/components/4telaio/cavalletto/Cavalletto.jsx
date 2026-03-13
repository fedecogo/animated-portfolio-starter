import "./cavalletto.scss";
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

const Cavalletto = () => {
  return (
    <section className="cavalletto" id="cavalletto">
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
              Telaio — Cavalletto
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Cavalletto<br />
              <span className="accentText">e sensore di posizione</span>
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il cavalletto laterale è il componente più semplice del telaio —
              e quello che causa più problemi quando viene trascurato.
              Un perno consumato, una molla indebolita o un sensore
              difettoso possono impedire l'avviamento, tagliare il motore
              in marcia o far cadere la moto parcheggiata su terreno
              in pendenza. Piccolo componente, conseguenze grandi
              se non funziona.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Nel fuoristrada il cavalletto laterale è quasi universale —
              il cavalletto centrale non esiste sulle moto da enduro
              e MX. Il design è deliberatamente minimalista: braccio
              in acciaio, perno, molla di richiamo e sensore
              di posizione. Quattro componenti, zero ridondanza —
              qualsiasi fallimento è immediato e percepibile.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del cavalletto</span>
              <h3>I componenti — dal perno alla spina elettrica</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="s1">01</span>
                <span className="miniText">
                  <strong>Braccio</strong> — tubo o barra in acciaio stampato,
                  con il piede allargato per distribuire il carico sul terreno.
                  Inclinazione e lunghezza determinano l'angolo di appoggio
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s2">02</span>
                <span className="miniText">
                  <strong>Perno di pivot</strong> — bullone o perno in acciaio
                  che attraversa il braccio e il supporto sul telaio.
                  Punto di usura principale — si ossida e si consuma
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s3">03</span>
                <span className="miniText">
                  <strong>Molla di richiamo</strong> — molla a trazione che
                  riporta il cavalletto in posizione alzata. La sua tensione
                  è la prima cosa che si degrada con il tempo
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s4">04</span>
                <span className="miniText">
                  <strong>Sensore di posizione</strong> — switch magnetico
                  o meccanico che rileva se il cavalletto è abbassato.
                  Collegato alla centralina per il circuito di sicurezza
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s5">05</span>
                <span className="miniText">
                  <strong>Supporto telaio</strong> — staffa saldata al telaio
                  che ospita il perno. In caso di impatto laterale è
                  il punto di rottura progettata — protegge il telaio
                </span>
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
            <h3>Laterale, centrale e aftermarket — differenze e utilizzi</h3>
            <p>
              Nel fuoristrada esiste praticamente una sola tipologia
              di cavalletto: il laterale. Il cavalletto centrale è assente
              per ragioni di peso, altezza da terra e libertà di movimento
              del forcellone. Le differenze tra i modelli riguardano
              principalmente i materiali aftermarket e le versioni
              rinforzate per uso estremo.
            </p>
          </motion.div>

          <motion.div className="tipiGrid" variants={cardVariants}>

            <div className="tipoCard tipoLaterale">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeLaterale">Laterale OEM</span>
                <span className="tipoRating tipoRatingViolet">Standard universale</span>
              </div>
              <div className="tipoSchema schemaLaterale">
                <div className="cavSchema">
                  <div className="cavBraccio" />
                  <div className="cavPiede" />
                  <div className="cavPivot" />
                </div>
                <span className="schemaLabel">braccio + piede + pivot</span>
              </div>
              <h4>Costruzione standard</h4>
              <p>
                Braccio in acciaio al carbonio stampato a caldo,
                trattamento superficiale galvanico o verniciato
                a polvere. Piede allargato per evitare l'affondamento
                su terreno morbido. La maggior parte dei modelli
                enduro e trail ha il cavalletto laterale come unico
                supporto — leggero, funzionale, sufficiente per
                l'uso normale. Peso tipico: 200 – 400 g.
              </p>
            </div>

            <div className="tipoCard tipoAftermarket">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeAftermarket">Aftermarket rinforzato</span>
                <span className="tipoRating tipoRatingGold">Adventure / Enduro</span>
              </div>
              <div className="tipoSchema schemaAftermarket">
                <div className="cavSchema cavSchemaRobusto">
                  <div className="cavBraccio cavBraccioSpesso" />
                  <div className="cavPiede cavPiedeLargo" />
                  <div className="cavPivot" />
                </div>
                <span className="schemaLabel">sezione rinforzata + piede largo</span>
              </div>
              <h4>Per terreni difficili</h4>
              <p>
                Versioni aftermarket in alluminio o acciaio inox
                con piede allargato fino a 80 – 120 mm² — indispensabile
                su terreni morbidi (sabbia, fango, erba) dove il piede
                OEM affonda. Marchi come Touratech, SW-Motech e Enduro
                Engineering producono versioni con piastre rimovibili
                e regolabili. Alcuni modelli incorporano un'estensione
                ribaltabile sul piede per massima superficie di appoggio.
              </p>
            </div>

            <div className="tipoCard tipoMX">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeMX">Assente su MX puro</span>
                <span className="tipoRating tipoRatingSteel">Motocross</span>
              </div>
              <div className="tipoSchema schemaMX">
                <div className="mxAssente">
                  <span className="mxCross">✕</span>
                </div>
                <span className="schemaLabel">rimosso per leggerezza</span>
              </div>
              <h4>Perché non c'è</h4>
              <p>
                Le moto da motocross puro non hanno il cavalletto —
                né laterale né centrale. In gara il cavalletto è
                peso inutile (200 – 400 g) e potenziale pericolo:
                un cavalletto che si abbassa accidentalmente in curva
                tocca terra e lancia il pilota. Le moto MX si appoggiano
                al paddock con cavalletti da corsa removibili. Alcune
                federazioni vietano esplicitamente il cavalletto
                nelle gare ufficiali MX.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── SENSORE BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="sensoreBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="sensoreHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il sensore di posizione</span>
            <h3>Come funziona il circuito di sicurezza — e perché blocca il motore</h3>
            <p>
              Il sensore del cavalletto è uno switch di sicurezza che
              interrompe il circuito di accensione se il cavalletto
              è abbassato con la marcia inserita. La logica è semplice:
              impedire che la moto parta o si muova con il cavalletto
              a terra, che altrimenti verrebbe spezzato dal movimento
              o farebbe cadere la moto lateralmente. Su molte moto
              moderne il circuito è gestito dalla centralina ECU —
              un sensore difettoso non è solo un fastidio, è un
              guasto diagnosticabile con il codice errore.
            </p>
          </motion.div>

          <motion.div className="sensoreContent" variants={cardVariants}>

            <div className="sensoreLogica">

              <div className="logicaCard logicaAperto">
                <div className="logicaIndicatore">
                  <div className="logicaDot logicaDotGreen" />
                  <span className="logicaLabel logicaLabelGreen">Cavalletto alzato</span>
                </div>
                <h4>Circuito aperto — moto funzionante</h4>
                <p>
                  Con il cavalletto in posizione alzata il magnete
                  o il tastatore meccanico del sensore è lontano
                  dall'interruttore — il circuito è aperto (o chiuso,
                  dipende dalla logica normalmente aperto/chiuso
                  del modello specifico). La centralina riceve
                  il segnale corretto: cavalletto su, marcia
                  inseribile, motore avviabile. Tutto funziona
                  normalmente. Questa è la posizione di lavoro
                  del sensore per il 99% del tempo.
                </p>
              </div>

              <div className="logicaCard logicaChiuso">
                <div className="logicaIndicatore">
                  <div className="logicaDot logicaDotYellow" />
                  <span className="logicaLabel logicaLabelYellow">Cavalletto abbassato + folle</span>
                </div>
                <h4>Motore avviabile, marcia bloccata</h4>
                <p>
                  Cavalletto a terra con trasmissione in folle:
                  il motore si avvia e gira normalmente — il folle
                  non crea rischio di movimento. La centralina
                  permette l'accensione ma blocca l'innesto
                  della marcia. Utile per scaldare il motore
                  in officina o per avviare a bordo moto senza
                  dover alzare il cavalletto. Funzionalità
                  presente su quasi tutte le enduro e trail
                  stradali dal 2000 in poi.
                </p>
              </div>

              <div className="logicaCard logicaIntervento">
                <div className="logicaIndicatore">
                  <div className="logicaDot logicaDotRed" />
                  <span className="logicaLabel logicaLabelRed">Cavalletto abbassato + marcia</span>
                </div>
                <h4>Motore spento — intervento del circuito</h4>
                <p>
                  Se si inserisce la marcia con il cavalletto a terra
                  il motore si spegne istantaneamente. Se il motore
                  è già spento non si avvia finché il cavalletto
                  non viene alzato o la trasmissione non torna
                  in folle. Il circuito è fail-safe: un sensore
                  che si guasta in posizione "cavalletto abbassato"
                  blocca la moto completamente — fastidioso ma
                  sicuro. Un sensore che si guasta in posizione
                  "cavalletto alzato" disabilita la protezione
                  senza segnalazione visibile.
                </p>
              </div>

            </div>

            <div className="sensoreNote">
              <span className="sensoreNoteTitle">Tipi di sensore</span>
              <p>
                <strong>Meccanico a pulsante</strong> — il più comune
                e il più semplice. Un tastatore fisico viene premuto
                dal braccio del cavalletto quando è alzato. Si guasta
                per ossidazione dei contatti o rottura del tastatore.
              </p>
              <p>
                <strong>Reed magnetico</strong> — un magnete sul braccio
                del cavalletto attiva uno switch magnetico sul telaio
                senza contatto fisico. Più resistente all'acqua e
                al fango, meno soggetto a usura meccanica.
                Standard sulle moto moderne.
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
              <span className="placeholderText">Schema — circuito sensore cavalletto con centralina, switch e logica di intervento</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Il guasto più comune</span>
            <p>
              Il guasto più frequente al sistema cavalletto non è
              il sensore — è il perno di pivot arrugginito che
              blocca il braccio in posizione abbassata. Il braccio
              non sale completamente, il sensore non riceve
              il segnale corretto e la moto si spegne inserendo
              la marcia. La diagnosi errata porta a sostituire
              un sensore perfettamente funzionante invece di
              lubrificare e pulire un perno da cinque minuti
              di lavoro.
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
            <span className="cardTag">Manutenzione</span>
            <h3>Perno, molla e sensore — cosa controllare e ogni quanto</h3>
            <p>
              Il perno di pivot del cavalletto va lubrificato con
              grasso ogni stagione — è esposto direttamente all'acqua
              e al fango e si ossida rapidamente. Un perno bloccato
              genera il guasto più frequente del sistema: cavalletto
              rigido che non sale completamente, triggering
              involontario del sensore. La molla di richiamo
              si controlla verificando che riporti il braccio
              in posizione alzata con decisione — una molla
              floscia indica sostituzione. Il sensore si testa
              con un multimetro sulla continuità: cortocircuito
              con cavalletto giù, circuito aperto con cavalletto su
              (o viceversa secondo il tipo).
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Diagnosi rapida</span>
            <h3>Motore che si spegne inserendo la marcia — dove guardare per primo</h3>
            <p>
              Il sintomo classico del sensore difettoso o del perno
              bloccato è il motore che si spegne appena si inserisce
              la prima. Prima di sostituire il sensore: alzare
              manualmente il cavalletto con la mano e verificare
              che salga completamente — a volte il braccio rimane
              mezzo millimetro basso per il perno rigido e il sensore
              non commuta. Pulire il perno, lubrificare, ritestare.
              Se il problema persiste: scollegare il connettore
              del sensore e cortocircuitare i due pin con un
              jumper — se la moto funziona normalmente il sensore
              è guasto, non il circuito.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Sicurezza</span>
            <h3>Perché non si bypassa il sensore del cavalletto — il rischio reale</h3>
            <p>
              Bypassare permanentemente il sensore del cavalletto
              è una modifica comune — e pericolosa. Dimenticare
              il cavalletto abbassato e inserire la marcia su strada
              porta alla caduta immediata: il braccio tocca l'asfalto,
              la moto piega di lato di schianto. A bassa velocità
              è una caduta banale — ad alta velocità può essere
              un incidente grave. Il sensore esiste per una ragione
              precisa. Se si bypassa temporaneamente per una
              diagnosi va ripristinato immediatamente dopo.
              La sostituzione del sensore originale Costa 15 – 40 euro
              — molto meno di una caduta.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Cavalletto;
