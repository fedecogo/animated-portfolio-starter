import "./carter.scss";
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

const Carter = () => {
  return (
    <section className="carter" id="carter">
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
              Il carter nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Nel motore a 4 tempi il carter è semplicemente il contenitore
              dell'olio. Nel motore a 2 tempi è qualcosa di radicalmente
              diverso: è una camera di pompaggio attiva, parte integrante
              del ciclo termodinamico. Ogni volta che il pistone scende,
              comprime la miscela aria-benzina-olio all'interno del carter
              prima che raggiunga il cilindro. Senza questo pompaggio non
              c'è scambio, senza scambio non c'è potenza.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La tenuta del carter è perciò un requisito assoluto: qualsiasi
              perdita — una guarnizione consumata, un paraolio deteriorato,
              una microfrattura nel getto di alluminio — si traduce in calo
              di potenza, difficoltà d'avviamento, irregolarità al minimo e
              potenzialmente in un grippaggio per miscela eccessivamente
              povera. Il carter non si "controlla" dall'esterno: i suoi
              difetti si rivelano solo sotto pressione, con strumenti
              specifici o nel peggiore dei casi sul campo.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del carter</span>
              <h3>Le zone funzionali principali</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Semicarter sinistro — alloggiamento cuscinetti banco e lato volano</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Semicarter destro — lato frizione, presa di moto e tenute</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniStep">
                  <span className="miniText">Volume interno — camera di pompaggio, volume critico per la potenza</span>
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Piano di giunzione — sede della guarnizione carter, punto critico di tenuta</span>
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
              <span className="placeholderText">Immagine / GIF — carter 2T aperto con albero motore e cuscinetti di banco visibili</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Struttura interna</span>
            <p>
              Il carter aperto lungo il piano di giunzione rivela l'albero
              motore con i cuscinetti di banco, i due paraolio laterali
              che separano la camera di pompaggio dall'esterno, e il volume
              interno ridotto al minimo per massimizzare l'efficienza di
              precompressione della miscela.
            </p>
          </div>
        </motion.div>

        {/* ── POMPAGGIO BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="pompBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="pompHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Ciclo di pompaggio</span>
            <h3>Come il carter pompa la miscela — le quattro fasi nel carter</h3>
            <p>
              Il carter nel 2 tempi non è un serbatoio statico ma un
              organo dinamico che lavora in perfetto coordinamento con
              il pistone. Mentre il cilindro gestisce la combustione
              nella camera superiore, il carter gestisce l'alimentazione
              nella camera inferiore. Le due camere sono separate dal
              pistone e comunicano attraverso i travasi — i canali che
              mettono in comunicazione carter e cilindro durante la
              fase di scambio.
            </p>
          </motion.div>

          <motion.div className="pompGrid" variants={cardVariants}>

            <div className="pompCard pompAspira">
              <div className="pompCardTop">
                <span className="pompBadge badgeAspira">Aspirazione</span>
                <span className="pompAngolo">Pistone in salita</span>
              </div>
              <h4>Il carter si riempie — depressione e flusso</h4>
              <p>
                Quando il pistone sale verso il PMS, il volume del carter
                aumenta e la pressione interna scende sotto la pressione
                atmosferica. Questa depressione apre la valvola lamellare
                o la luce di ammissione e richiama la miscela fresca
                dall'esterno. La miscela entra nel carter carica di
                benzina e olio in sospensione — è qui che avviene la
                prima fase della preparazione della carica.
              </p>
            </div>

            <div className="pompCard pompComprimeCart">
              <div className="pompCardTop">
                <span className="pompBadge badgeComprimeCart">Precompressione</span>
                <span className="pompAngolo">Pistone in discesa</span>
              </div>
              <h4>La miscela viene compressa — il pompaggio vero</h4>
              <p>
                Quando il pistone scende dopo la combustione, il volume
                del carter diminuisce e comprime la miscela già aspirata.
                La pressione nel carter sale progressivamente fino a
                0,3 – 0,5 bar sopra la pressione atmosferica. Questa
                precompressione è il cuore del ciclo a 2 tempi: senza
                di essa la miscela non avrebbe la velocità sufficiente
                per attraversare i travasi e riempire il cilindro in
                modo efficace durante la breve finestra di scambio.
              </p>
            </div>

            <div className="pompCard pompTravasi">
              <div className="pompCardTop">
                <span className="pompBadge badgeTravasi">Travasi</span>
                <span className="pompAngolo">Pistone vicino al PMI</span>
              </div>
              <h4>Apertura travasi — il trasferimento della carica</h4>
              <p>
                Quando il pistone si avvicina al PMI, apre le luci dei
                travasi che collegano carter e cilindro. La miscela
                precompressa nel carter scorre rapidamente nel cilindro,
                sospingendo i gas combusti verso la luce di scarico
                (che si apre leggermente prima). Il disegno dei travasi —
                numero, orientamento, area — è determinante per
                l'efficienza di scambio e per il carattere dell'erogazione.
              </p>
            </div>

            <div className="pompCard pompSigilla">
              <div className="pompCardTop">
                <span className="pompBadge badgeSigilla">Sigillatura</span>
                <span className="pompAngolo">Pistone in risalita</span>
              </div>
              <h4>Chiusura e preparazione — il ciclo riparte</h4>
              <p>
                Nella risalita il pistone chiude prima i travasi, poi
                la luce di scarico, intrappolando la carica fresca nel
                cilindro per la compressione. Simultaneamente il carter
                si mette nuovamente in depressione e aspira una nuova
                dose di miscela dall'esterno. I due cicli — quello nel
                cilindro e quello nel carter — si svolgono in perfetta
                opposizione di fase, ogni 360° di rotazione dell'albero.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── TENUTA BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="tenutaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tenutaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Tenuta</span>
            <h3>I punti critici di tenuta — dove il carter perde e perché</h3>
            <p>
              Il carter di un 2 tempi lavora alternando cicli di depressione
              e sovrappressione ad ogni giro. Ogni interfaccia tra due
              superfici — ogni guarnizione, ogni paraolio, ogni vite —
              è un potenziale punto di perdita. Anche una perdita minima,
              impercettibile al naso o all'orecchio, è sufficiente per
              alterare il rapporto di precompressione e degradare le
              prestazioni in modo significativo.
            </p>
          </motion.div>

          <motion.div className="tenutaGrid" variants={cardVariants}>

            <div className="tenutaCard">
              <div className="tenutaCardTop">
                <span className="tenutaBadge badgeParaolio">Paraolio</span>
                <span className="tenutaZona">Laterali albero</span>
              </div>
              <h4>Paraolio albero — la tenuta più critica</h4>
              <p>
                I due paraolio ai lati dell'albero motore separano la
                camera del carter dall'esterno. Quello lato volano
                (sinistro) e quello lato frizione (destro) sono
                soggetti a usura continua per rotazione, temperatura
                e contatto con la miscela. Un paraolio deteriorato
                introduce aria spuria nel carter (lato volano) o
                dispersione di miscela verso la frizione (lato frizione).
                Vanno sostituiti a ogni revisione dell'albero motore,
                senza eccezioni.
              </p>
            </div>

            <div className="tenutaCard">
              <div className="tenutaCardTop">
                <span className="tenutaBadge badgeGuarnizione">Guarnizione</span>
                <span className="tenutaZona">Piano giunzione</span>
              </div>
              <h4>Guarnizione carter — il piano di divisione</h4>
              <p>
                Il carter si divide in due semicarter lungo un piano
                di giunzione che corre attorno all'albero motore. La
                guarnizione (spesso soltanto un sottilissimo strato di
                sigillante anaerobico nei motori moderni) deve tenere
                sia la depressione che la sovrappressione del ciclo di
                pompaggio. Una giunzione ruvida, non sgrassata o con
                il vecchio sigillante residuo è la causa più comune di
                perdite di carter nei motori revisionati in modo
                approssimativo.
              </p>
            </div>

            <div className="tenutaCard">
              <div className="tenutaCardTop">
                <span className="tenutaBadge badgeViti">Viti e tappi</span>
                <span className="tenutaZona">Passaggi olio e tappi</span>
              </div>
              <h4>Viti, tappi e passaggi — i dettagli che fanno la differenza</h4>
              <p>
                Ogni vite che attraversa il carter verso l'interno,
                ogni tappo di ispezione, ogni raccordo del circuito
                di lubrificazione è un potenziale punto di perdita.
                Le viti in zone sotto pressione richiedono sigillante
                sui filetti; i tappi a pressione o le spine di
                centraggio sul piano di giunzione vanno controllati
                per giochi e usura. Dettagli spesso ignorati durante
                le revisioni rapide.
              </p>
            </div>

            <div className="tenutaCard">
              <div className="tenutaCardTop">
                <span className="tenutaBadge badgeLaminare">Valvola lamellare</span>
                <span className="tenutaZona">Scatola lamellare</span>
              </div>
              <h4>Scatola lamellare — la valvola che non deve perdere</h4>
              <p>
                La scatola lamellare è il punto di ingresso della
                miscela nel carter e funge da valvola di non ritorno:
                apre durante la depressione, si chiude durante la
                precompressione. Una lamella incrinata, deformata o
                con sede danneggiata lascia ricircolare la miscela
                verso il filtro — calo di potenza immediato e spesso
                confuso con altri problemi di carburazione. Ispezione
                obbligatoria a ogni revisione del top end.
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
            <span className="captionTag">Test di tenuta</span>
            <p>
              Il test di pressione/depressione del carter: con il motore
              smontato dal cilindro, i due lati vengono tappati e il carter
              viene messo in depressione con una pompa di vacuometro.
              Un carter sano mantiene la depressione senza variazioni
              per almeno 30 secondi. Qualsiasi calo indica una perdita
              che va localizzata prima del rimontaggio.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — test pressione carter con vacuometro</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── VOLUME BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="volumeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="volumeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Geometria interna</span>
            <h3>Il volume del carter — come cambia il carattere del motore</h3>
            <p>
              Il volume interno del carter è uno dei parametri geometrici
              più sottovalutati nel 2 tempi. Determina il rapporto di
              precompressione — il rapporto tra il volume carter con
              pistone al PMS e il volume carter con pistone al PMI.
              Modificarlo cambia in modo significativo la curva di
              erogazione, la risposta ai bassi e la capacità del motore
              di riempire il cilindro nelle diverse condizioni di regime.
            </p>
          </motion.div>

          <motion.div className="volumeGrid" variants={cardVariants}>

            <div className="volumeCard">
              <div className="volumeVisual volumeRidotto">
                <span className="volumeRatio">Volume ridotto</span>
                <span className="volumeEx">Alto rapport.</span>
              </div>
              <h4>Carter compatto — risposta pronta, erogazione nervosa</h4>
              <p>
                Un volume carter ridotto aumenta il rapporto di
                precompressione. La miscela viene compressa a pressioni
                più elevate e trasferita nel cilindro con maggiore
                velocità. Il risultato è una risposta più pronta ai
                medi-alti regimi, una banda di potenza più stretta e
                una curva più "esplosiva". Tipico dei motori da cross
                e da circuito dove la potenza di picco conta più della
                progressività.
              </p>
            </div>

            <div className="volumeCard">
              <div className="volumeVisual volumeGeneroso">
                <span className="volumeRatio">Volume generoso</span>
                <span className="volumeEx">Basso rapport.</span>
              </div>
              <h4>Carter ampio — coppia ai bassi, erogazione lineare</h4>
              <p>
                Un volume carter più grande abbassa il rapporto di
                precompressione. La miscela viene trasferita a pressioni
                minori, con velocità di flusso più contenute. La risposta
                ai bassi regimi è più morbida e progressiva, la banda
                di potenza si allarga verso il basso. Favorisce i motori
                da enduro e da utilizzo in condizioni variabili dove la
                gestibilità conta quanto la potenza massima.
              </p>
            </div>

            <div className="volumeCard">
              <div className="volumeVisual volumePrep">
                <span className="volumeRatio">Preparazione</span>
                <span className="volumeEx">Volumi falsi</span>
              </div>
              <h4>Volumetria di preparazione — inserti e volumi falsi</h4>
              <p>
                In preparazione è possibile ridurre il volume del carter
                inserendo distanziali o volumi falsi in alluminio
                lavorati su misura. L'operazione richiede la revisione
                completa del motore e un banco di prova per validare
                il risultato. Alcune case aftermarket propongono
                semicarter con geometria interna modificata come
                upgrade diretto per specifici utilizzi agonistici.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── CUSCINETTI BANCO BLOCK ──────────────────────────────────────── */}
        <motion.div
          className="bancoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="bancoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Cuscinetti di banco</span>
            <h3>I cuscinetti di banco — il supporto dell'albero motore nel carter</h3>
            <p>
              I cuscinetti di banco sono i cuscinetti a sfere o a rulli
              conici che supportano l'albero motore all'interno del carter,
              uno per lato. A differenza dei 4 tempi — dove spesso i
              cuscinetti di banco sono cuscinetti a strisciamento con
              gusci in bronzo lubrificati a pressione — nel 2 tempi sono
              quasi sempre cuscinetti a sfere con gabbia, lubrificati
              dall'olio in miscela che circola all'interno del carter.
            </p>
          </motion.div>

          <motion.div className="bancoGrid" variants={cardVariants}>

            <div className="bancoCard bancoSinistro">
              <span className="bancoBadge badgeSin">Lato volano (SX)</span>
              <h4>Cuscinetto lato volano — carico assiale e radiale</h4>
              <p>
                Il cuscinetto lato volano è soggetto sia a carichi
                radiali (il peso e la forza centrifuga dell'albero e
                del volano) che a carichi assiali (le forze di spinta
                laterale generate dalla frizione e dalle dilatazioni
                termiche). In molte applicazioni è un cuscinetto a sfere
                a contatto obliquo o una coppia di cuscinetti disposti
                a O per gestire entrambe le componenti di carico. È il
                primo a mostrare usura nei motori con frizioni mal
                regolate o con eccessivo gioco assiale.
              </p>
              <div className="bancoSpec">
                <span className="bancoSpecLabel">Tipo di carico</span>
                <span className="bancoSpecVal">Radiale + Assiale</span>
              </div>
              <div className="bancoSpec">
                <span className="bancoSpecLabel">Tipo tipico</span>
                <span className="bancoSpecVal">Sfere — contatto obliquo</span>
              </div>
            </div>

            <div className="bancoCard bancoDestro">
              <span className="bancoBadge badgeDest">Lato frizione (DX)</span>
              <h4>Cuscinetto lato frizione — carico prevalentemente radiale</h4>
              <p>
                Il cuscinetto lato frizione lavora principalmente in
                regime di carico radiale. Alloggia nella sede del
                semicarter destro e deve resistere sia alle forze
                trasmesse dalla frizione che alle forze di inerzia
                dell'albero in rotazione. In molti motori moderni è
                un cuscinetto a sfere a una corona con schermatura
                laterale per trattenere il grasso. La sua temperatura
                operativa è più elevata per la vicinanza alla frizione
                e richiede controllo specifico in caso di surriscaldamento.
              </p>
              <div className="bancoSpec">
                <span className="bancoSpecLabel">Tipo di carico</span>
                <span className="bancoSpecVal">Prevalentemente radiale</span>
              </div>
              <div className="bancoSpec">
                <span className="bancoSpecLabel">Tipo tipico</span>
                <span className="bancoSpecVal">Sfere — una corona</span>
              </div>
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
              <span className="placeholderText">Immagine / GIF — semicarter con sede cuscinetti e paraolio visibili</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Sedi cuscinetti</span>
            <p>
              Il semicarter aperto: le sedi dei cuscinetti di banco
              rivelano la precisione dimensionale richiesta per un
              corretto interferenza di montaggio. A fianco delle sedi
              cuscinetti sono visibili le scanalature per i paraolio
              e i canali interni che guidano la miscela verso i travasi.
            </p>
          </div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="diagnBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e verifica</span>
            <h3>Riconoscere un carter che perde — sintomi, test e misure</h3>
            <p>
              La perdita di tenuta del carter è uno dei difetti più
              difficili da diagnosticare nel 2 tempi perché i suoi
              sintomi si sovrappongono a quelli di altri problemi —
              carburazione errata, accensione ritardata, scarico
              intasato. Esistono tuttavia segnali specifici e un
              metodo di verifica preciso che permette di escludere
              o confermare la perdita di carter prima di smontare
              qualsiasi componente.
            </p>
          </motion.div>

          <motion.div className="diagnGrid" variants={cardVariants}>

            <div className="diagnCard">
              <span className="diagnBadge badgeDiagnSintomo">Sintomo</span>
              <h4>Calo di potenza progressivo senza cause apparenti</h4>
              <p>
                Un carter che perde riduce il rapporto di precompressione
                ad ogni giro. Il motore perde potenza in modo graduale —
                spesso nell'arco di settimane o mesi — senza un evento
                identificabile. La potenza cala soprattutto ai medi
                regimi, dove il riempimento dipende maggiormente dalla
                precompressione del carter. I carburatori vengono
                regolati e regolati ancora senza risultato.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeDiagnSintomo">Sintomo</span>
              <h4>Irregolarità al minimo — il motore "non tiene"</h4>
              <p>
                Al minimo il ciclo di pompaggio è più sensibile alle
                perdite perché la depressione generata è minore e la
                finestra di compensazione è ridotta. Un carter che
                perde si manifesta con un minimo irregolare, una
                tendenza a spegnersi e la necessità di alzare il
                minimo oltre il normale per mantenere il motore acceso.
                Spesso scambiato per un problema al carburatore.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeDiagnSintomo">Sintomo</span>
              <h4>Difficoltà di avviamento a freddo persistente</h4>
              <p>
                Un carter con perdita di paraolio lato volano può
                aspirare aria fredda dall'esterno durante le prime
                fasi di avviamento, quando la depressione è massima
                e la viscosità dell'olio riduce l'auto-sigillatura
                del paraolio. Il motore fatica ad avviarsi e spesso
                richiede molti più colpi di kick o avviamenti a
                tiramento rispetto al normale.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeDiagnVerifica">Verifica</span>
              <h4>Test di tenuta con vacuometro — il metodo definitivo</h4>
              <p>
                Con il cilindro smontato si tappano le aperture del
                carter (travasi, ammissione, scarico lato carter) e si
                collegano due manometri ai due lati dell'albero. Si porta
                il carter a una depressione di 0,5 bar e si osserva per
                60 secondi: un carter sano non perde più di 0,03 bar.
                Si ripete con sovrappressione di 0,3 bar per testare
                i paraolio nella direzione di pompaggio.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeDiagnVerifica">Verifica</span>
              <h4>Ispezione visiva paraolio — colorazione e deformazione</h4>
              <p>
                Con l'albero motore estratto dal carter, i paraolio
                vanno ispezionati per: labbro di tenuta indurito o
                screpolato (tipico dell'invecchiamento o del calore
                eccessivo), deformazione del labbro verso l'interno
                o l'esterno (montaggio errato o pressione eccessiva),
                depositi carboniosi sul labbro (perdita in senso inverso).
                Un paraolio con più di 50 ore o tre anni va sostituito
                preventivamente.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeDiagnIntervallo">Intervallo</span>
              <h4>Vita operativa e sostituzione preventiva</h4>
              <p>
                I paraolio vanno sostituiti a ogni apertura del carter,
                senza compromessi. I cuscinetti di banco vanno sostituiti
                ogni 40 – 60 ore in uso agonistico, ogni 100 – 150 ore
                in uso amatoriale o a ogni revisione completa. La
                guarnizione carter (o il sigillante sul piano di
                giunzione) va rinnovata ogni volta che il carter viene
                aperto, con sgrassaggio accurato di entrambe le superfici.
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
            <span className="cardTag">Materiali</span>
            <h3>Alluminio pressofuso — leghe e trattamenti superficiali</h3>
            <p>
              Il carter è quasi universalmente in lega di alluminio
              pressofuso — leggero, con buona conducibilità termica e
              sufficiente resistenza meccanica per le pressioni in gioco.
              Le sedi dei cuscinetti di banco vengono rifinite per alesatura
              dopo la pressofusione per garantire tolleranze di interferenza
              nell'ordine del micron. I carter da competizione in alcuni
              casi sono lavorati da pieno in lega aeronautica 7075-T6
              con proprietà meccaniche superiori alla pressofusione standard.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Revisione</span>
            <h3>Apertura carter — sequenza corretta e errori comuni</h3>
            <p>
              L'apertura del carter richiede attrezzatura specifica:
              estrattore per il volano, estrattore per la frizione,
              estrattore per i cuscinetti di banco e pressa per il
              rimontaggio. Il riscaldamento del semicarter a 100 – 120 °C
              con pistola ad aria calda è indispensabile per estrarre
              e inserire i cuscinetti senza danni. L'errore più comune
              è tentare di estrarre i cuscinetti a freddo con soli colpi
              di martello — deforma la sede e rende inutilizzabile il carter.
            </p>
          </motion.article>

        </motion.div>

      </div>
    </section>
  );
};

export default Carter;
