import "./olioSospensioni.scss";
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

const OlioSospensioni = () => {
  return (
    <section className="olioSospensioni" id="olio-sospensioni">
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
              Sospensioni — Fluido idraulico
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              L'olio delle sospensioni
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              L'olio delle sospensioni non è un lubrificante — è il mezzo
              idraulico che genera la forza ammortizzante. Ogni caratteristica
              dell'olio — viscosità, stabilità termica, resistenza alla
              schiumatura — si traduce direttamente in comportamento
              della sospensione. Un olio sbagliato o degradato vanifica
              qualsiasi regolazione dei registri: i click di compressione
              ed estensione non riescono a compensare una viscosità
              fuori specifica.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La viscosità è il parametro principale — si misura in
              cSt (centistokes) a 40 °C e viene espressa commercialmente
              come grado SAE (5W, 7.5W, 10W, 15W). Un olio più viscoso
              (grado alto) aumenta la resistenza idraulica — l'effetto è
              identico a chiudere i registri di compressione ed estensione.
              La viscosità dipende dalla temperatura: ogni 10 °C di aumento
              la viscosità cala del 5–10%. Un olio che funziona perfettamente
              a 20 °C può essere troppo fluido dopo 30 minuti di uso
              intenso a 80 °C.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Proprietà dell'olio sospensioni</span>
              <h3>Quattro caratteristiche che contano</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Viscosità cinematica — resistenza al flusso misurata in cSt;
                  determina la forza idraulica generata a parità di velocità
                  dello stelo e configurazione dello shim stack
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Indice di viscosità (VI) — misura di quanto la viscosità
                  varia con la temperatura; un VI alto mantiene prestazioni
                  costanti dal cold start alle temperature operative
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Resistenza alla schiumatura — l'olio che schiuma introduce
                  aria compressa nel circuito idraulico causando risposta
                  inconsistente e cavitazione anche con gas a pressione corretta
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Compatibilità con i paraolio — alcuni oli sintetici
                  attaccano i paraolio in NBR; verificare sempre la
                  compatibilità con il materiale dei paraolio prima di
                  cambiare marca o formulazione
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
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — curva viscosità-temperatura per gradi 5W / 7.5W / 10W a confronto</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Viscosità vs temperatura</span>
            <p>
              Il grafico mostra come la viscosità di tre gradi diversi
              di olio sospensioni cali all'aumentare della temperatura.
              A 20 °C la differenza tra 5W e 10W è marcata; a 80 °C
              i due gradi si avvicinano significativamente. Questo spiega
              perché la forcella che sembra troppo dura a freddo si ammorbidisce
              dopo la prima mezz'ora di uso — non è un'anomalia, è la
              fisica dell'olio.
            </p>
          </div>
        </motion.div>

        {/* ── PROPRIETÀ BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="proprietàBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="proprietàHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Proprietà chimiche</span>
            <h3>Minerale, sintetico e semisintetico — le differenze che contano davvero</h3>
            <p>
              La formulazione base dell'olio determina la sua stabilità
              nel tempo più della viscosità iniziale. Un olio minerale
              di grado corretto appena cambiato può superare un sintetico
              degradato di 50 ore. La scelta tra minerale e sintetico
              è rilevante solo se si mantiene l'intervallo di sostituzione
              corretto — altrimenti è solo marketing.
            </p>
          </motion.div>

          <motion.div className="proprietàGrid" variants={cardVariants}>

            <div className="proprietàCard">
              <span className="proprietàIdx">01</span>
              <h4>Olio minerale — base paraffinica, economico e collaudato</h4>
              <p>
                L'olio minerale per sospensioni è derivato dalla distillazione
                del petrolio con additivi anti-usura, anti-schiumogeni e
                anti-ossidanti. Funziona correttamente se cambiato nei
                tempi previsti. Degrada più velocemente del sintetico
                sotto uso intenso e alte temperature — il VI è più basso
                e la viscosità a caldo cala più rapidamente. Per uso
                amatoriale con intervalli regolari è più che sufficiente
                e costa la metà del sintetico.
              </p>
            </div>

            <div className="proprietàCard">
              <span className="proprietàIdx">02</span>
              <h4>Olio sintetico — base PAO, VI alto e stabilità termica superiore</h4>
              <p>
                I sintetici a base PAO (polialfaolefina) hanno un indice
                di viscosità (VI) superiore a 150 contro il 95–110 dei
                minerali. In pratica: la viscosità varia meno con la
                temperatura — la forcella si comporta in modo più coerente
                dal cold start alle temperature operative. Raccomandato
                per uso racing, temperature elevate (motard in pista)
                o climi estremi. Costo: 3–5 volte il minerale. Non
                richiede cambio più frequente — ma non lo sostituisce
                indefinitamente.
              </p>
            </div>

            <div className="proprietàCard">
              <span className="proprietàIdx">03</span>
              <h4>Semisintetico — compromesso tra costo e prestazioni</h4>
              <p>
                Miscela di base minerale e sintetica in proporzioni
                variabili (tipicamente 30–50% sintetico). Offre un VI
                intermedio e una stabilità termica migliore del minerale
                puro a un costo inferiore del sintetico completo.
                È la scelta di molti costruttori come olio di primo
                riempimento per le forcelle di serie — non perché sia
                il migliore, ma perché offre il miglior rapporto
                prestazioni/costo per l'uso medio.
              </p>
            </div>

            <div className="proprietàCard">
              <span className="proprietàIdx">04</span>
              <h4>Compatibilità e miscelazione — cosa non fare mai</h4>
              <p>
                Non mescolare mai oli di basi diverse (minerale + sintetico)
                senza che il produttore lo preveda esplicitamente. Le basi
                diverse possono essere incompatibili e produrre precipitati
                o gel che ostruiscono i fori calibrati nello shim stack.
                Quando si cambia marca o formulazione: svuotare completamente,
                risciacquare con piccola quantità del nuovo olio, poi
                riempire a livello corretto. Non aggiungere mai additivi
                esterni agli oli già formulati.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── TIPOLOGIE PER DISCIPLINA BLOCK ──────────────────────────────── */}
        <motion.div
          className="tipologieBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tipologieHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Grado per disciplina</span>
            <h3>Cross, enduro, motard e stradale — stesso olio, viscosità diversa</h3>
            <p>
              La formulazione chimica cambia poco tra le discipline —
              quello che cambia significativamente è il grado di viscosità
              e l'intervallo di sostituzione. La logica è semplice: più
              alta la temperatura di esercizio e più violento l'uso,
              più è importante la stabilità termica dell'olio e più
              frequente deve essere la sostituzione.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>

            <div className="tipCard tipCross">
              <div className="tipCardTop">
                <span className="tipBadge badgeCross">Cross — MX</span>
                <span className="tipSub">SAE 5W — uso racing</span>
              </div>
              <h4>Olio leggero per risposta immediata e temperature moderate</h4>
              <p>
                Grado 5W (circa 15–20 cSt a 40 °C). La forcella da cross
                lavora con velocità di stelo molto elevate — impatti violenti,
                atterraggi da salti. Un olio leggero consente allo shim
                stack di gestire i picchi di velocità senza opporre
                resistenza idraulica eccessiva nella fase di compressione
                veloce (HSC). Le sessioni di cross sono brevi (20–30 min
                di moto) e le temperature non raggiungono i livelli
                dell'uso continuato — il minerale 5W è pienamente adeguato.
                Sostituzione ogni 15–20 ore.
              </p>
            </div>

            <div className="tipCard tipEnduro">
              <div className="tipCardTop">
                <span className="tipBadge badgeEnduro">Enduro</span>
                <span className="tipSub">SAE 5W–7.5W — uso misto</span>
              </div>
              <h4>Viscosità media per terreni variabili e sessioni lunghe</h4>
              <p>
                Grado 5W o 7.5W in base al costruttore e alla disciplina
                specifica (trail vs hard enduro). L'enduro impone sessioni
                più lunghe del cross — 2–4 ore continuate — e l'olio
                raggiunge temperature operative più alte. Il 7.5W offre
                un VI leggermente superiore e mantiene meglio la viscosità
                nel tempo della sessione. Per l'hard enduro dove le
                temperature sono elevate e le sollecitazioni estreme,
                preferire il semisintetico 7.5W. Sostituzione ogni 20–30 ore.
              </p>
            </div>

            <div className="tipCard tipMotard">
              <div className="tipCardTop">
                <span className="tipBadge badgeMotard">Motard</span>
                <span className="tipSub">SAE 10W — uso pista/misto</span>
              </div>
              <h4>Viscosità superiore per temperature alte e frenate aggressive</h4>
              <p>
                Grado 10W (25–32 cSt a 40 °C). Il motard su asfalto
                raggiunge temperature di esercizio più elevate del fuoristrada:
                la forcella lavora continuamente nelle frenate aggressive,
                nell'asfalto che riflette il calore e spesso in sessioni
                di pista di 30–40 minuti senza sosta. Un olio più viscoso
                mantiene il comportamento coerente anche a caldo.
                Il sintetico 10W è la scelta preferibile per uso pista
                intenso — la stabilità termica superiore si traduce in
                una forcella che si comporta allo stesso modo al primo
                e all'ultimo giro. Sostituzione ogni 30–40 ore.
              </p>
            </div>

            <div className="tipCard tipStradale">
              <div className="tipCardTop">
                <span className="tipBadge badgeStradale">Stradale</span>
                <span className="tipSub">SAE 10W–15W — specifiche costruttore</span>
              </div>
              <h4>Grado costruttore, sostituzione a intervalli lunghi</h4>
              <p>
                Le forcelle delle moto 2T stradali (RS 125, RC 125, NSR 125,
                Aprilia RS, ecc.) usano tipicamente 10W o 15W secondo
                le specifiche del costruttore — valore da rispettare
                senza deroghe perché la geometria dello shim stack
                è progettata per quella viscosità. L'uso stradale
                non impone le temperature del motard in pista ma
                l'intervallo di sostituzione è spesso trascurato:
                un olio da 40.000 km in una forcella stradale è
                degradato quanto uno da 60 ore in una da enduro.
                Sostituzione ogni 2 anni o 10.000 km.
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
            <span className="captionTag">Livello olio</span>
            <p>
              Il livello dell'olio nella forcella a bagno d'olio
              si misura con la forcella completamente compressa, molla
              rimossa, dalla sommità del fodero. Il livello determina
              la camera d'aria residua: più olio (livello alto) = camera
              d'aria più piccola = più resistenza in fine corsa.
              Nei modelli a cartuccia il livello non è regolabile —
              conta solo la quantità totale in cc.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — misurazione livello olio forcella con righello, forcella compressa e molla rimossa</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── DEGRADAZIONE BLOCK ──────────────────────────────────────────── */}
        <motion.div
          className="degradazioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="degradazioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Degradazione</span>
            <h3>Come l'olio invecchia — ossidazione, contaminazione e perdita di viscosità</h3>
            <p>
              L'olio delle sospensioni non si consuma — si degrada.
              La viscosità cala per ossidazione termica, gli additivi
              anti-schiumogeni si esauriscono, le particelle metalliche
              abradono progressivamente steli e boccole contaminando l'olio.
              Il risultato non è un cedimento improvviso ma un peggioramento
              graduale e quasi impercettibile — la forcella peggiora così
              lentamente che ci si abitua senza accorgersene.
            </p>
          </motion.div>

          <motion.div className="degradazioneContent" variants={cardVariants}>

            <div className="degLeft">
              <div className="degItem">
                <span className="degLabel">Calo di viscosità nel tempo — tendenza tipica</span>
                <div className="degBar">
                  <div className="degFill" style={{ width: "72%" }} />
                </div>
                <span className="degValue">−15 / −25% dopo 40 ore di uso intenso</span>
                <p>
                  L'ossidazione termica rompe le catene molecolari dell'olio
                  riducendone la viscosità. Dopo 40 ore di uso cross o enduro
                  intenso, un olio 10W può avere una viscosità effettiva da 7.5W
                  o inferiore. L'effetto pratico: la forcella sembra essersi
                  "ammorbidita" — spesso interpretato erroneamente come
                  un miglioramento del comfort, in realtà è perdita di
                  controllo idraulico.
                </p>
              </div>

              <div className="degItem">
                <span className="degLabel">Schiumatura — accumulo nel tempo</span>
                <div className="degBar">
                  <div className="degFill degFillRed" style={{ width: "45%" }} />
                </div>
                <span className="degValue degValueRed">Critica oltre le 50 ore senza cambio</span>
                <p>
                  Gli additivi anti-schiumogeni si esauriscono nel tempo.
                  L'olio che schiuma è comprimibile — introduce un ritardo
                  e una risposta inconsistente nei cicli di compressione.
                  Il sintomo è una forcella che risponde in modo diverso
                  colpo dopo colpo sullo stesso ostacolo.
                </p>
              </div>
            </div>

            <div className="degRight">
              <div className="degCard">
                <span className="degCardTag">Contaminazione</span>
                <h4>Particelle metalliche e acqua — i nemici invisibili</h4>
                <p>
                  Lo scorrimento degli steli nelle boccole produce microscopiche
                  particelle metalliche che si accumulano nell'olio. Queste
                  particelle funzionano da abrasivo, accelerando l'usura
                  di steli e boccole in un ciclo progressivo. In condizioni
                  umide, l'acqua che bypassa il raschiaolio si emulsiona
                  nell'olio rendendolo lattiginoso — la viscosità cala
                  drasticamente e la protezione anti-usura scompare.
                  Un olio grigio o lattescente va sostituito immediatamente
                  indipendentemente dalle ore.
                </p>
              </div>

              <div className="degCard">
                <span className="degCardTag">Quando cambiare</span>
                <h4>Come riconoscere l'olio da sostituire senza analisi</h4>
                <p>
                  Estrarre un campione di olio durante lo svuotamento:
                  olio nero con odore bruciato = ossidazione avanzata;
                  olio grigio scuro = contaminazione da particelle metalliche;
                  olio lattescente o biancastro = emulsione con acqua.
                  In tutti e tre i casi la sostituzione è obbligatoria.
                  Olio ambrato o leggermente più scuro del nuovo ma
                  limpido = normale invecchiamento, valutare in base
                  alle ore. Non aggiungere mai olio nuovo a olio vecchio:
                  svuotare sempre completamente.
                </p>
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
              <span className="placeholderText">Immagine — confronto campioni olio nuovo / usato 30h / usato 60h su carta bianca</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Ispezione visiva</span>
            <p>
              Tre campioni di olio 10W sullo stesso sfondo bianco:
              a sinistra olio nuovo ambrato e limpido, al centro olio
              da 30 ore di enduro intenso marrone scuro ma ancora limpido,
              a destra olio da 60 ore con particelle metalliche e traccia
              di contaminazione idrica. Il confronto visivo è il primo
              controllo da fare ad ogni svuotamento.
            </p>
          </div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="usuraBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="usuraHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e sostituzione</span>
            <h3>Riconoscere olio da cambiare — sintomi di guida e controllo visivo</h3>
            <p>
              I segnali di un olio degradato non sono sempre immediati.
              La forcella peggiora gradualmente e il pilota si adatta
              inconsapevolmente — solo dopo aver cambiato l'olio si
              capisce quanto si era perso. Imparare a riconoscere i
              sintomi precoci permette di intervenire prima che la
              degradazione dell'olio acceleri l'usura meccanica
              dei componenti interni.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Forcella più morbida a fine sessione — olio che perde viscosità a caldo</h4>
              <p>
                La forcella sembra diversa (più morbida, meno controllata)
                dopo 20–30 minuti di uso rispetto ai primi minuti.
                Causa: olio con VI basso o già degradato che perde viscosità
                significativa alle temperature operative. La soluzione non
                è aumentare i click di compressione — è cambiare l'olio
                con uno a VI più alto o di grado superiore (+2.5W).
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Risposta inconsistente — lo stesso ostacolo sembra diverso ogni volta</h4>
              <p>
                Su un dosso o una curva identica la forcella risponde
                in modo diverso nelle passate successive. Causa principale:
                olio schiumato che introduce aria compressa nel circuito
                idraulico — l'aria è comprimibile, l'olio no. La schiumatura
                si verifica quando gli additivi anti-schiumogeni sono
                esauriti o quando l'olio è contaminato da acqua.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Fine corsa frequente su impatti non estremi — livello olio calato</h4>
              <p>
                La forcella tocca il fine corsa meccanico su ostacoli
                che prima assorbiva senza problemi. Se i registri sono
                invariati e il SAG è corretto, il problema è spesso
                il livello dell'olio calato per perdita dal paraolio.
                Meno olio = camera d'aria più grande = meno resistenza
                in fine corsa. Verificare il livello prima di toccare
                i registri.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Controllo livello olio — procedura corretta</h4>
              <p>
                Forcella completamente compressa, molla rimossa.
                Misurare dalla sommità del fodero alla superficie dell'olio
                con un righello o calibro. Il valore corretto è nelle
                specifiche del costruttore (tipicamente 90–130 mm dalla
                sommità). Un livello più alto (es. 80 mm invece di 110 mm)
                aumenta la resistenza in fine corsa; più basso la riduce.
                Nei modelli a cartuccia: riempire con la quantità in cc
                specificata, non misurare il livello.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Ispezione visiva dell'olio estratto — colore e consistenza</h4>
              <p>
                Raccogliere l'olio estratto in un contenitore trasparente
                e osservarlo in controluce. Limpido ambrato: normale.
                Scuro ma limpido: invecchiato, valutare in base alle ore.
                Con particelle in sospensione: contaminazione metallica,
                sostituire e verificare la causa (boccole, steli). Grigio
                o lattescente: acqua emulsionata, sostituire e trovare
                il punto di ingresso (raschiaolio danneggiato).
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Intervalli di sostituzione per disciplina</h4>
              <p>
                Cross racing: ogni 15–20 ore. Enduro intenso: ogni 20–30 ore.
                Enduro trail: ogni 30–40 ore o una volta all'anno.
                Motard pista: ogni 20–30 ore. Motard strada: ogni stagione.
                Stradale: ogni 2 anni o 10.000 km. Il monoammortizzatore
                segue gli stessi intervalli della forcella. Sostituire
                sempre olio di entrambe le gambe con la stessa quantità —
                differenze di livello tra destra e sinistra causano
                comportamento asimmetrico.
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
            <span className="cardTag">Viscosità e registri</span>
            <h3>Cambiare viscosità = cambiare setup — l'equivalenza idraulica</h3>
            <p>
              Aumentare il grado dell'olio di 2.5W equivale approssimativamente
              a chiudere di 3–4 click i registri di compressione ed estensione.
              Questo significa che si può usare la viscosità come variabile
              di setup complementare ai registri — utile quando i registri
              sono già al limite e si vuole ancora più idraulica, o quando
              non si hanno registri regolabili (forcelle entry level).
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Quantità e livello</span>
            <h3>Quanti cc e a che livello — i due modi di specificare il riempimento</h3>
            <p>
              I costruttori specificano il riempimento in due modi:
              quantità in cc (per le cartucce) o livello in mm dalla sommità
              (per il bagno d'olio). Non sono intercambiabili — seguire
              sempre il metodo corretto per il tipo di forcella. Nelle
              forcelle a bagno d'olio, variare il livello di ±10 mm
              cambia sensibilmente la progressività in fine corsa
              senza toccare i registri.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Marche e qualità</span>
            <h3>Motorex, Maxima, Motul, Bel-Ray — cosa cercare nell'etichetta</h3>
            <p>
              I brand specializzati (Motorex Racing Fork Oil, Maxima Racing
              Fork Fluid, Motul Fork Oil Factory Line, Bel-Ray HVI) dichiarano
              la viscosità in cSt a 40 °C e l'indice di viscosità sull'etichetta.
              Verificare questi valori invece del solo grado SAE — due oli
              da 10W di marche diverse possono avere VI di 110 e 160,
              comportandosi in modo molto diverso a caldo. Evitare oli
              generici non specifici per sospensioni.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default OlioSospensioni;
