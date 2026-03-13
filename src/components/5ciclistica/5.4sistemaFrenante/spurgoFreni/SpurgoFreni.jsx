import "./spurgoFreni.scss";
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

const SpurgoFreni = () => {
  return (
    <section className="spurgoFreni" id="spurgoFreni">
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
              Sistema frenante — Spurgo freni
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Spurgo freni — eliminare l’aria dal circuito e restituire consistenza alla leva
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Lo spurgo dei freni è la procedura con cui si rimuove l’aria dal circuito
              idraulico e si sostituisce il fluido vecchio con fluido pulito quando necessario.
              In un impianto frenante il fluido deve trasmettere pressione in modo quasi
              incomprimibile; l’aria invece si comprime facilmente. Basta anche una piccola
              quantità di bolle intrappolate nella pompa, nella tubazione o nella pinza
              per trasformare una leva precisa in una leva lunga, spugnosa, ritardata
              nella risposta e incoerente sotto carico.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il punto chiave è questo: lo spurgo non serve a “far uscire un po’ di olio”,
              ma a ristabilire la continuità idraulica del circuito. Quando si tira la leva,
              tutta la corsa deve diventare pressione. Se una parte della corsa viene spesa
              per comprimere sacche d’aria, quella corsa non arriva più ai pistoncini della pinza.
              Ecco perché uno spurgo ben fatto cambia radicalmente il feeling del freno
              anche senza sostituire nessun componente meccanico.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia dello spurgo</span>
              <h3>Quattro concetti da capire prima ancora di aprire lo sfiato</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Aria nel circuito — l’aria è comprimibile; il fluido no.
                  La leva lunga o spugnosa nasce quasi sempre qui, prima ancora
                  di pensare a pinza o pompa guasta
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Sequenza corretta — tirare la leva, aprire lo sfiato, far uscire
                  fluido e aria, richiudere lo sfiato prima di rilasciare la leva;
                  invertire l’ordine fa rientrare aria
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Serbatoio sempre pieno — se il livello nel master cylinder scende
                  sotto il minimo durante la procedura, la pompa aspira altra aria
                  e lo spurgo riparte praticamente da zero
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Feeling finale — uno spurgo corretto non rende il freno “duro”
                  in modo artificiale; rende la risposta pulita, consistente,
                  pronta e ripetibile
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
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Schema del circuito freno anteriore — pompa, tubo, pinza e vite di spurgo;
                evidenziare le bolle d’aria che salgono verso l’alto e la procedura
                di espulsione dal punto di sfiato
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Aria nel circuito</span>
            <p>
              In un impianto idraulico sano la pressione si trasmette quasi istantaneamente
              dal pistone della pompa ai pistoncini della pinza. Se però nel circuito
              ci sono bolle d’aria, una parte dell’energia della mano viene spesa
              per comprimere quelle bolle prima ancora di mettere sotto carico le pastiglie.
              Il risultato è una leva che affonda, una frenata che parte tardi e un feeling
              che peggiora soprattutto nelle frenate ripetute.
            </p>
          </div>
        </motion.div>

        {/* ── PRINCIPI FISICI BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="principiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="principiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fisica dello spurgo</span>
            <h3>Incomprimibilità del fluido, comprimibilità dell’aria, gravità e continuità del circuito</h3>
            <p>
              Per fare uno spurgo bene bisogna capire che non è una liturgia:
              è una procedura che sfrutta proprietà fisiche precise. Una volta capite,
              gli errori diventano molto più facili da evitare.
            </p>
          </motion.div>

          <motion.div className="principiGrid" variants={cardVariants}>
            <div className="principiCard">
              <span className="principiIdx">01</span>
              <h4>Il fluido trasmette pressione quasi senza comprimersi</h4>
              <p>
                Il liquido freni è progettato per trasmettere la pressione in modo
                estremamente efficiente. Quando il pistone della pompa avanza,
                il fluido sposta quasi integralmente quell’energia verso la pinza.
                Per questo un impianto pieno solo di fluido ha una leva netta,
                corta il giusto e molto leggibile. Ogni millimetro di corsa
                ha una funzione reale nella generazione di pressione.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">02</span>
              <h4>L’aria si comprime e “mangia” corsa leva</h4>
              <p>
                A differenza del fluido, l’aria si comprime facilmente. Se nel circuito
                c’è una bolla, la pressione iniziale non si trasferisce subito alla pinza:
                prima riduce il volume della bolla. Questo assorbe corsa della leva
                e rende il freno spugnoso. Più aria è presente, più la leva diventa lunga;
                se l’aria è tanta, il freno può sembrare quasi assente nella prima fase.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">03</span>
              <h4>Le bolle tendono a salire, ma non sempre trovano una via facile</h4>
              <p>
                L’aria, essendo meno densa del fluido, tende a salire verso i punti alti
                del circuito. Il problema è che tubazioni curve, raccordi, pieghe del tubo,
                banjo e cavità interne della pompa possono intrappolarla in punti dove
                non esce spontaneamente. Per questo a volte uno spurgo tradizionale basta,
                mentre in altri casi serve inclinare la pompa, muovere la tubazione,
                tenere la leva sotto pressione o lavorare anche dal banjo superiore.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">04</span>
              <h4>Lo spurgo funziona solo se il circuito resta sempre chiuso nella sequenza giusta</h4>
              <p>
                La logica base è semplice: si mette il circuito in pressione con la leva,
                si apre la vite di spurgo per far uscire fluido e aria, poi si richiude
                la vite prima di rilasciare la leva. Se la leva viene rilasciata con lo sfiato
                ancora aperto, il sistema aspira aria dall’esterno e il problema peggiora.
                Il cuore dello spurgo è proprio questo controllo della sequenza.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── PROCEDURA BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="proceduraBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="proceduraHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Procedura corretta</span>
            <h3>Come si spurgano davvero i freni — ordine, ritmo, controllo e attenzione ai dettagli</h3>
            <p>
              Questa è la parte pratica. La procedura classica funziona benissimo,
              ma solo se eseguita con ordine e senza fretta. Saltare un passaggio
              o invertire due azioni è spesso sufficiente per far rientrare aria
              e rovinare il lavoro.
            </p>
          </motion.div>

          <motion.div className="proceduraGrid" variants={cardVariants}>
            <div className="proceduraCard">
              <span className="proceduraIdx">01</span>
              <h4>Preparazione — proteggi la moto e usa solo fluido corretto</h4>
              <p>
                Il liquido freni rovina vernice, plastiche e superfici delicate.
                Prima di iniziare bisogna coprire serbatoio, cupolino, manubrio
                e parti verniciate con panni puliti. Si apre il tappo del serbatoio
                della pompa e si verifica il tipo corretto di fluido richiesto
                dal sistema. Mai mischiare fluidi incompatibili e mai usare
                un flacone aperto da troppo tempo, perché assorbe umidità.
              </p>
            </div>

            <div className="proceduraCard">
              <span className="proceduraIdx">02</span>
              <h4>Pressurizzazione — leva lenta e controllata, non pompate isteriche</h4>
              <p>
                Si aziona la leva con movimenti regolari, progressivi, senza strapparla.
                L’obiettivo non è agitare il fluido ma mettere il circuito in pressione.
                Le pompate troppo veloci emulsionano il liquido e possono frammentare
                le bolle in bolle più piccole, rendendo più difficile la loro uscita.
                Meglio tre pressioni piene e controllate che dieci pompate nervose.
              </p>
            </div>

            <div className="proceduraCard">
              <span className="proceduraIdx">03</span>
              <h4>Apertura sfiato — il fluido esce mentre la leva è tenuta tirata</h4>
              <p>
                Con la leva mantenuta in pressione si apre leggermente la vite di spurgo
                sulla pinza; dal tubicino collegato escono fluido e aria. La leva
                tenderà ad avvicinarsi al manubrio mentre la pressione si scarica:
                è normale. Prima di rilasciare la leva, però, la vite di spurgo
                deve essere già richiusa. Questo dettaglio è l’essenza della procedura.
              </p>
            </div>

            <div className="proceduraCard">
              <span className="proceduraIdx">04</span>
              <h4>Serbatoio — rabboccare spesso, sempre sopra il minimo</h4>
              <p>
                Dopo pochi cicli bisogna controllare il livello nel serbatoio.
                Se scende troppo, la pompa aspira aria dal foro di alimentazione
                e tutto il lavoro fatto si vanifica. Durante uno spurgo corretto
                il serbatoio va tenuto costantemente alimentato con fluido fresco,
                senza mai arrivare vicino al fondo.
              </p>
            </div>

            <div className="proceduraCard">
              <span className="proceduraIdx">05</span>
              <h4>Ripetizione — si continua finché dal tubo non escono più bolle</h4>
              <p>
                La procedura va ripetuta finché dal tubicino esce solo fluido pulito
                e continuo, senza microbolle, senza schiuma, senza spurti irregolari.
                In parallelo il feeling della leva cambia: da morbido e lungo
                diventa più coerente, più progressivo e più stabile.
              </p>
            </div>

            <div className="proceduraCard">
              <span className="proceduraIdx">06</span>
              <h4>Verifica finale — corsa leva, perdite e pulizia completa</h4>
              <p>
                A spurgo finito si ripristina il livello corretto nel serbatoio,
                si rimonta membrana e tappo, si puliscono eventuali residui di fluido
                e si controllano perdite su vite di spurgo, raccordi e pompa.
                Poi si prova la leva a moto ferma: la risposta deve essere costante,
                con una corsa iniziale corretta e senza affondamenti progressivi.
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
            <span className="captionTag">Sequenza corretta</span>
            <p>
              La procedura classica può essere riassunta così: pompa la leva,
              mantienila tirata, apri lo sfiato, lascia uscire aria e fluido,
              richiudi lo sfiato, poi rilascia la leva. Questa sequenza va rispettata
              sempre. Se si rilascia la leva con la vite ancora aperta, il circuito
              richiama aria dall’esterno e il sistema resta spugnoso anche dopo molti tentativi.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Diagramma step-by-step — leva tirata, vite aperta, fluido che esce,
                vite richiusa, leva rilasciata; con frecce e numeri della sequenza
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── METODI BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="metodiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="metodiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Metodi di spurgo</span>
            <h3>Manuale, da basso verso l’alto, per gravità e sottovuoto — stessa fisica, strumenti diversi</h3>
            <p>
              Il metodo classico con leva e vite di spurgo è quello più universale,
              ma non è l’unico. Ogni metodo lavora sullo stesso obiettivo:
              spingere fuori le bolle d’aria e riempire il circuito con solo fluido.
            </p>
          </motion.div>

          <motion.div className="metodiGrid" variants={cardVariants}>
            <div className="metodoCard metodoManuale">
              <div className="metodoTop">
                <span className="metodoBadge badgeManuale">Manuale</span>
                <span className="metodoSub">Leva + vite di spurgo</span>
              </div>
              <h4>Il metodo base — semplice, lento, ma estremamente valido se eseguito bene</h4>
              <p>
                È il metodo più diffuso: richiede solo il corretto fluido,
                un tubicino trasparente e attenzione alla sequenza. È perfetto
                per manutenzione ordinaria, sostituzione fluido e molti casi
                di aria leggera nel circuito. Il suo limite è che a volte
                fatica con bolle intrappolate in punti alti o in impianti molto svuotati.
              </p>
            </div>

            <div className="metodoCard metodoReverse">
              <div className="metodoTop">
                <span className="metodoBadge badgeReverse">Reverse bleed</span>
                <span className="metodoSub">Dal basso verso l’alto</span>
              </div>
              <h4>Spingere il fluido dalla pinza alla pompa — spesso il più efficace contro le bolle ostinate</h4>
              <p>
                Poiché l’aria tende naturalmente a salire, introdurre fluido dal basso
                verso l’alto tramite siringa o sistema dedicato è spesso molto efficace.
                È particolarmente utile quando il circuito è stato completamente svuotato
                o quando l’aria resta intrappolata vicino al master cylinder.
                Va fatto con grande pulizia e controllo per evitare traboccamenti dal serbatoio.
              </p>
            </div>

            <div className="metodoCard metodoGravita">
              <div className="metodoTop">
                <span className="metodoBadge badgeGravita">Per gravità</span>
                <span className="metodoSub">Lento ma pulito</span>
              </div>
              <h4>Aprire e lasciar scendere il fluido — utile per pre-riempire il circuito</h4>
              <p>
                In alcuni casi si può lasciare il serbatoio pieno e aprire lo sfiato
                in modo che il fluido scenda lentamente per gravità. Non è il metodo
                più rapido per eliminare tutta l’aria, ma è utile per iniziare a riempire
                un circuito vuoto o per aiutare il fluido a raggiungere la pinza
                prima della fase di spurgo vera e propria.
              </p>
            </div>

            <div className="metodoCard metodoVacuum">
              <div className="metodoTop">
                <span className="metodoBadge badgeVacuum">Sottovuoto</span>
                <span className="metodoSub">Pompetta o kit dedicato</span>
              </div>
              <h4>Aspirare dal basso — rapido, ma va letto con attenzione</h4>
              <p>
                I sistemi sottovuoto aspirano fluido e aria dalla vite di spurgo.
                Sono rapidi e molto comodi, ma possono generare microbolle apparenti
                attorno al filetto della vite, dando l’impressione che ci sia ancora aria
                nel circuito quando invece stanno aspirando aria esterna dal filetto stesso.
                Vanno quindi usati con esperienza e interpretati correttamente.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── TIPOLOGIE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="tipologieBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tipologieHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Contesto moto</span>
            <h3>Cross, enduro, motard e stradale — lo spurgo cambia poco nella teoria, ma molto nella pratica</h3>
            <p>
              Il principio è identico per ogni moto, ma accessibilità, lunghezza tubazioni,
              esposizione a fango o calore e frequenza della manutenzione cambiano
              parecchio da una disciplina all’altra.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>
            <div className="tipCard tipCross">
              <div className="tipCardTop">
                <span className="tipBadge badgeCross">Cross — MX</span>
                <span className="tipSub">Manutenzione frequente</span>
              </div>
              <h4>Fango, lavaggi, vibrazioni e uso intenso rendono il controllo del circuito molto importante</h4>
              <p>
                Nel cross l’impianto lavora in un ambiente sporco e viene lavato spesso.
                Le temperature magari non sono quelle della pista asfaltata, ma l’uso,
                le cadute e le sollecitazioni continue rendono utile controllare
                spesso feeling leva, condizioni del fluido e tenuta della vite di spurgo.
              </p>
            </div>

            <div className="tipCard tipEnduro">
              <div className="tipCardTop">
                <span className="tipBadge badgeEnduro">Enduro</span>
                <span className="tipSub">Affidabilità prima di tutto</span>
              </div>
              <h4>Su percorsi lunghi e tecnici una leva incoerente diventa subito un problema reale</h4>
              <p>
                In enduro non serve una leva “da pista”, ma serve una leva prevedibile.
                Se l’aria entra o il fluido è degradato, la frenata diventa stancante
                da gestire nelle discese lunghe e nei passaggi tecnici. Uno spurgo corretto
                qui è una manutenzione funzionale, non un vezzo.
              </p>
            </div>

            <div className="tipCard tipMotard">
              <div className="tipCardTop">
                <span className="tipBadge badgeMotard">Motard</span>
                <span className="tipSub">Feeling cruciale</span>
              </div>
              <h4>Con staccate forti e disco grande anche una piccola bolla si sente tantissimo</h4>
              <p>
                Nel motard la leva anteriore deve essere precisa, corta e leggibile.
                Un impianto con anche poca aria cambia subito carattere: la frenata
                entra in ritardo, il punto di attacco si muove e la fiducia sull’anteriore cala.
                Per questo gli spurghi qui tendono a essere più frequenti e più curati.
              </p>
            </div>

            <div className="tipCard tipSportiva">
              <div className="tipCardTop">
                <span className="tipBadge badgeSportiva">Sportiva / Stradale</span>
                <span className="tipSub">Costanza nel tempo</span>
              </div>
              <h4>Su strada il problema spesso emerge gradualmente, finché la leva non è più quella di prima</h4>
              <p>
                Sulle stradali il decadimento del fluido e la comparsa di una leva più lunga
                avvengono spesso lentamente, quindi ci si abitua al peggioramento.
                Uno spurgo con fluido fresco spesso restituisce subito un freno
                molto più coerente anche a chi pensava che “andasse ancora bene”.
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
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Foto o schema — mano sulla leva, tubicino trasparente sulla vite di spurgo,
                contenitore di raccolta e serbatoio della pompa aperto con fluido nuovo
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Setup corretto</span>
            <p>
              Un buon spurgo si riconosce anche dalla pulizia del setup:
              tubicino trasparente per leggere le bolle, recipiente di raccolta,
              serbatoio accessibile, panni di protezione sulle superfici verniciate
              e movimenti ordinati. La qualità del risultato dipende spesso più
              dalla disciplina con cui si lavora che dalla quantità di strumenti speciali.
            </p>
          </div>
        </motion.div>

        {/* ── ERRORI & DIAGNOSI BLOCK ─────────────────────────────────────── */}
        <motion.div
          className="usuraBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="usuraHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Errori e diagnosi</span>
            <h3>Perché lo spurgo non riesce, perché la leva resta molle e come capire dove si sta sbagliando</h3>
            <p>
              Non sempre una leva spugnosa dopo lo spurgo significa che la procedura
              sia stata inutile: a volte significa che è stata eseguita male,
              o che il problema è più a monte e lo spurgo sta solo mettendo in luce
              un’altra anomalia del circuito.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>
            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>La leva resta spugnosa dopo molti cicli — aria ancora presente o intrappolata in alto</h4>
              <p>
                Se dal tubicino non escono più bolle ma la leva continua a risultare molle,
                l’aria potrebbe essere rimasta in un punto alto della pompa o in un raccordo.
                In questi casi può aiutare orientare il manubrio, lasciare la leva in pressione
                per qualche ora o lavorare anche sul raccordo banjo superiore con estrema cautela.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>La leva migliora e poi peggiora di nuovo — possibile ingresso d’aria da qualche tenuta</h4>
              <p>
                Se il feeling migliora subito dopo lo spurgo ma torna spugnoso
                dopo pochi giorni, il sistema potrebbe aspirare aria da una guarnizione
                della pompa, dalla vite di spurgo, da un raccordo o da una perdita microscopica.
                In quel caso lo spurgo da solo non basta: va trovata e risolta
                la causa dell’ingresso d’aria.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Le bolle sembrano non finire mai — attenzione a non leggere male il sottovuoto</h4>
              <p>
                Con i sistemi a depressione può sembrare che il circuito continui
                a buttare fuori aria all’infinito. Spesso però quella è aria aspirata
                dal filetto della vite di spurgo e non dall’interno dell’impianto.
                Bisogna quindi distinguere tra bolle reali del circuito e microbolle
                create dal metodo di aspirazione.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Controllo del livello — il serbatoio non deve mai scoprire il fondo</h4>
              <p>
                È l’errore più comune: concentrarsi sulla vite di spurgo e dimenticare
                il livello nel serbatoio. Appena la pompa aspira aria, il circuito
                torna contaminato e il lavoro ricomincia. Durante la procedura
                il livello va controllato continuamente, non ogni tanto.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Controllo perdite — raccordi, vite di spurgo, pompa e pinza devono restare asciutti</h4>
              <p>
                Dopo lo spurgo bisogna ispezionare tutto il circuito. Anche una lieve
                umidità attorno al raccordo o alla vite di spurgo è un segnale
                da non ignorare. Dove può uscire fluido, può anche entrare aria
                quando il sistema si scarica e si raffredda.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Quando farlo — al cambio fluido, dopo apertura circuito o al primo decadimento del feeling</h4>
              <p>
                Lo spurgo va eseguito ogni volta che si apre il circuito,
                quando si cambia il fluido, quando si sostituisce una pompa,
                una pinza o una tubazione, e ogni volta che la leva perde consistenza.
                Non aspettare che il freno diventi palesemente scarso: il feeling
                peggiora molto prima che il problema sembri grave.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CARDS GRID ─────────────────────────────────────────────────── */}
        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Idea chiave</span>
            <h3>Lo spurgo non “aumenta la potenza”: elimina ciò che impedisce alla potenza di arrivare alla pinza</h3>
            <p>
              La pompa può generare tutta la pressione che vuole, ma se nel circuito
              c’è aria quella pressione non arriva in modo pulito alla pinza.
              Lo spurgo quindi non è un upgrade magico: è il ripristino della corretta
              continuità idraulica del sistema.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Errore classico</span>
            <h3>Rilasciare la leva con lo sfiato aperto è il modo più rapido per sabotare tutto il lavoro</h3>
            <p>
              Se c’è un solo dettaglio da ricordare, è questo. L’ordine corretto
              della sequenza vale più di qualsiasi attrezzo speciale. Molti spurghi
              “che non funzionano” in realtà non funzionano perché la sequenza
              viene invertita anche solo una volta.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>Qui il focus è solo sulla rimozione dell’aria e sulla procedura di ripristino del circuito</h3>
            <p>
              Questo capitolo tratta lo spurgo: perché si fa, come si esegue,
              quali metodi esistono, quali errori evitare e come leggere i sintomi
              di un circuito ancora contaminato da aria. Pompa, pinza, fluido,
              tubazioni e materiali d’attrito restano capitoli separati e qui
              vengono richiamati solo quando servono a capire la procedura.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default SpurgoFreni;