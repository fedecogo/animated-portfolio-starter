import "./luci.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
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

const Luci = () => {
  return (
    <section className="luci" id="luci">
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
              Elettronica — Luci
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Le luci — visibilità attiva, segnalazione e fotometria applicata alla moto
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              L'impianto luci non è solo obbligatorio per legge: è uno dei sistemi di
              sicurezza attiva più importanti sulla moto. Un buon fascio di luce anabbagliante
              permette al pilota di vedere la strada e agli altri utenti di essere visti;
              un fanale posteriore brillante comunica frenata, direzione e presenza.
              Ogni sorgente luminosa ha caratteristiche fotometriche precise — flusso,
              intensità, temperatura di colore — che ne determinano efficacia reale
              su strada, non solo sul catalogo.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              In quarant'anni l'illuminazione sulle moto è passata da semplici lampadine
              alogene a sistemi LED ad alta efficienza e, sulle moto di punta, a sorgenti
              laser con portata superiore ai 500 metri. La normativa ECE regola con
              precisione fascio, intensità, colore e posizione di ogni luce: capire questi
              parametri aiuta a scegliere componenti corretti, a diagnosi guasti e a
              valutare la qualità reale di un sistema d'illuminazione rispetto ai numeri
              dichiarati dalle case.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Concetti di fotometria</span>
              <h3>Quattro grandezze per capire davvero come funziona una luce</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Flusso luminoso (lumen, lm) — la quantità totale di luce emessa dalla
                  sorgente in tutte le direzioni; un valore alto non significa
                  necessariamente un buon faro se l'ottica non lo dirige bene
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Intensità luminosa (candela, cd) — la luce concentrata in una direzione
                  specifica; è il parametro che determina la portata del fascio e il
                  rispetto dei limiti ECE sull'abbagliamento
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Temperatura di colore (Kelvin, K) — descrive la tonalità della luce:
                  3000 K è giallo-caldo (alogena), 4200 K bianco neutro (xenon), 5500–6500 K
                  bianco freddo (LED); influisce sulla percezione dei contrasti su strada
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Efficienza luminosa (lm/W) — quanta luce viene prodotta per ogni watt
                  consumato; alogena ~20 lm/W, xenon ~90 lm/W, LED fino a 200 lm/W;
                  il delta si traduce in meno calore e meno carico sull'impianto
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
                Schema laterale moto con tutte le luci etichettate — faro anteriore
                (anabbagliante + abbagliante), DRL, frecce ant/post, fanale posteriore,
                stop, luce targa; evidenziare colori normativi (bianco/giallo ant, rosso post)
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Schema impianto luci</span>
            <p>
              Ogni luce sulla moto ha una posizione, un colore e un'intensità regolati
              dalla normativa ECE (Economic Commission for Europe). Il bianco o giallo
              selettivo è obbligatorio per le luci anteriori, il rosso per quelle
              posteriori. Le frecce devono essere ambra. Derogare a questi standard
              non è solo fuori legge: compromette la leggibilità del veicolo da parte
              degli altri utenti della strada in condizioni critiche.
            </p>
          </div>
        </motion.div>

        {/* ── TECNOLOGIE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="tecnologieBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tecnologieHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Tecnologie sorgenti luminose</span>
            <h3>Alogena, xenon HID, LED e laser — stessa funzione, fisica completamente diversa</h3>
            <p>
              Non si tratta solo di "nuove vs vecchie". Ogni tecnologia ha una fisica
              propria, parametri di funzionamento diversi e implicazioni reali su ottica,
              gestione termica, consumi e compatibilità con l'impianto elettrico della moto.
            </p>
          </motion.div>

          <motion.div className="tecnologieGrid" variants={cardVariants}>
            <div className="tipCard tipAlogena">
              <div className="tipCardTop">
                <span className="tipBadge badgeAlogena">Alogena</span>
                <span className="tipSub">~20 lm/W · 3000 K · H4 / H7</span>
              </div>
              <h4>Filamento + ciclo alogeno — semplice, economica, ma inefficiente per definizione</h4>
              <p>
                Una lampadina alogena funziona riscaldando un filamento di tungsteno
                fino all'incandescenza all'interno di un bulbo riempito con un gas alogeno
                (iodio o bromo). Il gas riporta il tungsteno evaporato sul filamento
                (ciclo rigenerativo), allungando la vita rispetto alle lampade tradizionali.
                Il problema è l'efficienza: circa il 90% dell'energia si disperde in calore,
                solo una piccola frazione diventa luce visibile. La temperatura di colore
                di ~3000 K produce una luce giallo-calda che rende meno visibili i contrasti
                rispetto alla luce diurna. Le lampade H4 (doppio filamento: abbagliante
                e anabbagliante in un solo bulbo) e H7 (singolo filamento) sono ancora
                lo standard su molte moto di media gamma per la loro semplicità di sostituzione
                e il costo contenuto.
              </p>
            </div>

            <div className="tipCard tipXenon">
              <div className="tipCardTop">
                <span className="tipBadge badgeXenon">Xenon HID</span>
                <span className="tipSub">~90 lm/W · 4200 K · ballast 85 V</span>
              </div>
              <h4>Arco elettrico in gas xenon — luminosità elevata, ma richiede ballast e omologazione specifica</h4>
              <p>
                Le lampade HID (High Intensity Discharge) non hanno filamento: producono
                luce attraverso un arco elettrico che si innesca tra due elettrodi immersi
                in una miscela di gas xenon e sali di alogenuri metallici. L'accensione
                richiede una tensione di circa 20.000–23.000 V generata dal ballast;
                una volta stabilizzato l'arco, la lampada lavora a ~85 V con assorbimento
                ridotto. L'efficienza luminosa (~80–100 lm/W) e la temperatura di colore
                (~4200 K, bianco neutro) sono nettamente superiori all'alogena.
                Il limite principale è il warm-up: servono 2–4 secondi per raggiungere
                la piena luminosità, rendendole inadatte per funzioni di segnalazione
                rapida. La normativa ECE R98 impone l'abbinamento obbligatorio con
                livellamento automatico del fascio e sistema di lavaggio del proiettore.
                Installarle senza questi dispositivi è fuori norma e pericoloso per
                l'abbagliamento che producono.
              </p>
            </div>

            <div className="tipCard tipLED">
              <div className="tipCardTop">
                <span className="tipBadge badgeLED">LED</span>
                <span className="tipSub">fino a 200 lm/W · 5000–6500 K · istantaneo</span>
              </div>
              <h4>Elettroluminescenza a semiconduttore — efficiente, istantaneo, compatto e ora dominante</h4>
              <p>
                Il LED (Light Emitting Diode) genera luce per elettroluminescenza:
                quando una corrente attraversa la giunzione p-n di un semiconduttore,
                gli elettroni che ricombinano con le lacune rilasciano energia sotto
                forma di fotoni. La lunghezza d'onda — e quindi il colore — dipende
                dal materiale semiconduttore. I LED bianchi per illuminazione usano
                tipicamente un chip blu (nitruro di gallio, GaN) che eccita un rivestimento
                di fosforo giallo, producendo la luce bianca risultante.
                L'efficienza luminosa può superare i 200 lm/W nelle versioni più avanzate,
                con temperatura di colore tra 5000 e 6500 K (molto vicina alla luce diurna,
                ottimale per la percezione dei contrasti). Il punto critico è la gestione
                termica: il LED non irradia calore verso l'ottica come l'alogena, ma
                lo concentra alla base — senza dissipatori adeguati il chip decade rapidamente.
                L'accensione è istantanea (microsecondi), il ciclo di vita supera
                le 15.000–50.000 ore. Questi fattori lo rendono oggi la tecnologia
                dominante su tutto l'impianto: faro, stop, frecce, DRL, strumentazione.
              </p>
            </div>

            <div className="tipCard tipLaser">
              <div className="tipCardTop">
                <span className="tipBadge badgeLaser">Laser</span>
                <span className="tipSub">portata 500+ m · BMW, KTM · alta gamma</span>
              </div>
              <h4>Diodi laser + fosforo — densità luminosa estrema e portata senza precedenti</h4>
              <p>
                I sistemi a laser non illuminano direttamente con il fascio laser:
                i diodi laser (generalmente blu, ~450 nm) colpiscono un elemento di
                fosforo che converte l'energia in luce bianca diffusa. Questo sistema
                ibrido produce una densità luminosa circa 1000 volte superiore a quella
                del LED, in uno spazio ridottissimo. La portata del fascio abbagliante
                può superare i 500 metri, contro i 300 dei migliori sistemi LED.
                L'efficienza è elevata e il calore generato è gestibile grazie alle
                dimensioni contenute del punto sorgente. I sistemi attuali (introdotti
                da BMW su S 1000 RR e poi su altri modelli premium) combinano il laser
                per l'abbagliante adattivo con LED per l'anabbagliante e le funzioni
                accessorie. Il costo di produzione e la complessità del sistema di sicurezza
                (il fascio laser diretto è pericoloso per la vista) ne limitano per ora
                l'adozione ai segmenti di alta gamma.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FUNZIONI BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="funzioniBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="funzioniHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Funzioni dell'impianto</span>
            <h3>Anabbagliante, abbagliante, segnalazione e DRL — ogni luce ha requisiti fotometrici precisi</h3>
            <p>
              Le normative ECE non si limitano a prescrivere "una luce davanti e una dietro".
              Regolano intensità minima e massima in ogni direzione, l'angolo del fascio,
              il colore, la superficie minima illuminata e il comportamento in caso di guasto.
              Conoscere questi requisiti aiuta a capire perché un'ottica mal progettata
              o un ricambio non omologato può essere pericoloso anche se apparentemente funziona.
            </p>
          </motion.div>

          <motion.div className="funzioniGrid" variants={cardVariants}>
            <div className="funzioneCard">
              <span className="funzioneIdx">01</span>
              <h4>Anabbagliante — il fascio che non abbaglia ma deve illuminare lontano</h4>
              <p>
                L'anabbagliante (dipped beam, normativa ECE R112 per sistemi non simmetrici)
                è la luce più complessa dell'impianto. Deve proiettare un fascio con una
                linea di taglio netta (cut-off) che illumina la strada davanti al pilota
                senza colpire gli occhi dei veicoli in arrivo. La linea di taglio è
                asimmetrica: sul lato del marciapiede sale leggermente per illuminare
                segnali e pedoni, mentre rimane bassa sul lato della corsia opposta.
                Nei sistemi a riflettore la forma del taglio è determinata dalla geometria
                dello specchio e dallo schermo metallico; nei sistemi a proiettore (lente
                di Fresnel o policarbonato) il taglio è più preciso e il fascio più
                omogeneo. L'intensità massima nella direzione degli occhi degli altri
                conducenti è rigidamente limitata dalla normativa per prevenire
                l'abbagliamento.
              </p>
            </div>

            <div className="funzioneCard">
              <span className="funzioneIdx">02</span>
              <h4>Abbagliante — portata massima, nessun limite sul taglio, uso responsabile</h4>
              <p>
                L'abbagliante (main beam, ECE R112) illumina in pieno senza cut-off:
                il fascio copre l'intera larghezza e raggiunge distanze che variano
                da ~100 m (alogena standard) fino a 300–500 m nei migliori sistemi LED
                e laser. Non ha limitazioni di intensità verso l'alto, il che lo rende
                pericoloso per i veicoli in arrivo se non abbassato tempestivamente.
                I sistemi AHB (Automatic High Beam) moderni usano una telecamera per
                rilevare i fari dei veicoli in arrivo e commutare automaticamente
                all'anabbagliante. Alcuni sistemi ADB (Adaptive Driving Beam) vanno
                oltre: mantengono l'abbagliante attivo ma creano una "zona buia" dinamica
                attorno al veicolo rilevato, preservando la visibilità massima senza
                abbagliare.
              </p>
            </div>

            <div className="funzioneCard">
              <span className="funzioneIdx">03</span>
              <h4>Frecce e stop — segnalazione istantanea, colore normato, frequenza regolata</h4>
              <p>
                Le frecce (indicatori di direzione, ECE R6) devono lampeggiare a una
                frequenza tra 1 e 2 Hz (60–120 lampi al minuto) con un colore ambra
                preciso definito dalla normativa. La superficie minima illuminata è
                anch'essa regolata. Quando si sostituiscono le lampadine incandescenti
                originali con LED senza intervenire sull'unità di controllo (flasher),
                la resistenza del circuito cala drasticamente: il flasher tradizionale
                (bimetallico o elettronico a resistenza) interpreta questo come una
                lampada bruciata e aumenta la frequenza — il cosiddetto hyperflash.
                La soluzione è installare un flasher compatibile LED o aggiungere
                resistori di carico. Le luci di stop (ECE R7) devono essere rosse,
                significativamente più luminose della luce di posizione e attivarsi
                sia dal freno anteriore che da quello posteriore.
              </p>
            </div>

            <div className="funzioneCard">
              <span className="funzioneIdx">04</span>
              <h4>DRL e posizione — visibilità diurna, normativa europea e consumi ridotti</h4>
              <p>
                Le luci di marcia diurna (DRL, Daytime Running Light, ECE R87) sono
                obbligatorie per i nuovi tipi omologati in Europa dal 2013. Non sostituiscono
                l'anabbagliante ma integrano la visibilità: studi della Commissione Europea
                mostrano una riduzione degli incidenti frontali in pieno giorno tra il 6
                e il 12% con l'uso sistematico dei DRL. L'intensità è regolata: devono
                essere abbastanza luminosi da risultare visibili in piena luce solare,
                ma automaticamente ridotti quando si inserisce l'anabbagliante o in
                galleria. Le luci di posizione (sidelights) hanno un'intensità molto
                inferiore e servono solo a segnalare la presenza del veicolo in condizioni
                di scarsa visibilità. Con LED, entrambe le funzioni consumano pochi watt
                contro i 5–10 W delle equivalenti alogene.
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
            <span className="captionTag">LED vs alogena</span>
            <p>
              Un confronto visivo efficace qui dovrebbe mostrare il fascio anabbagliante
              di una H4 alogena e di un LED equivalente proiettato su un muro o su strada.
              Il LED produce una linea di taglio più netta, una distribuzione più omogenea
              e una temperatura di colore più vicina alla luce diurna. L'alogena tende
              a concentrare luce al centro con dispersione più calda e meno uniforme.
              Il delta di intensità ai bordi del fascio — dove si trovano pedoni e ciclisti —
              è spesso la differenza più significativa nella visibilità reale su strada.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Confronto fascio alogena H4 vs LED equivalente — distribuzione luminosa,
                linea di taglio, temperatura di colore; idealmente fotografia su parete
                a 5 m o diagramma polare di intensità
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="diagnosiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnosiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e sintomi</span>
            <h3>Hyperflash, faro intermittente, luce gialla e allineamento — come leggere i problemi dell'impianto luci</h3>
            <p>
              Molti problemi dell'impianto luci hanno cause precise e leggibili.
              Conoscere la fisica dietro al sintomo permette di intervenire correttamente
              invece di sostituire componenti a caso.
            </p>
          </motion.div>

          <motion.div className="diagnosiGrid" variants={cardVariants}>
            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Frecce che lampeggiano troppo veloci (hyperflash) dopo sostituzione LED</h4>
              <p>
                Il flasher originale rileva la corrente assorbita per determinare il
                ritmo di lampeggio. Un LED assorbe meno di un decimo della corrente
                di una lampadina incandescente equivalente: il flasher interpreta
                la bassa corrente come una lampada bruciata e accelera il lampeggio.
                Soluzione: sostituire il flasher con uno compatibile LED (a frequenza
                fissa indipendente dal carico) oppure aggiungere resistori di carico
                in parallelo — ma questi dissipano calore e vanificano parte del
                risparmio energetico del LED.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Faro intermittente o che si spegne in frenata / su sconnesso</h4>
              <p>
                L'intermittenza del faro su vibrazioni o frenate è quasi sempre
                un problema di connessione: terminale allentato nel connettore
                del faro, massa del gruppo ottico mal serrata, o — nel caso delle
                alogene — filamento prossimo alla rottura che apre il circuito
                sotto vibrazione. Prima di sostituire la lampadina: controllare
                il connettore, verificare la tensione sotto vibrazione simulata
                e controllare la massa del proiettore. Con LED, l'intermittenza
                può anche indicare il driver LED in sovratemperatura con
                protezione termica attiva.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Luce gialla o opaca su faro con lente in policarbonato</h4>
              <p>
                Le lenti dei fari moderni sono in policarbonato (PC), più leggero
                e resistente agli urti del vetro ma soggetto a degrado UV nel tempo.
                Il coating protettivo superficiale si opacizza e ingiallisce,
                riducendo la trasmittanza ottica anche del 40–60%. Il risultato è
                un fascio meno luminoso e più caldo in tonalità. La soluzione
                è la lucidatura professionale con abrasivi progressivi (da 400
                a 3000 grit) seguita da riapplicazione di coating UV. Il problema
                non è la lampada: sostituirla non risolve nulla finché la lente
                rimane opaca.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Verifica tensione al connettore del faro — 12 V nominali, non meno di 11,5 V con luci accese</h4>
              <p>
                Un faro che funziona ma sembra meno luminoso del normale può ricevere
                tensione insufficiente. Con il motore acceso e tutte le luci inserite,
                la tensione al connettore del proiettore non dovrebbe scendere sotto
                i 13,5–14 V (con motore in moto) o i 12 V (a motore fermo breve).
                Valori inferiori indicano caduta di tensione sul cablaggio o batteria
                debole. Una lampadina alogena H4 da 55/60 W a 10,5 V invece di 12 V
                perde circa il 25–30% del flusso luminoso — una differenza visibile
                e misurabile.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Controllo allineamento fascio — il faro spostato dalla vibrazione è più comune di quanto si pensi</h4>
              <p>
                L'allineamento del fascio anabbagliante si verifica proiettando il faro
                su una parete verticale a 10 metri, con la moto in assetto normale
                (pilota in sella, gomme a pressione corretta). La linea di taglio
                deve trovarsi a un'altezza inferiore a quella del centro del proiettore —
                circa il 2% dell'altezza in meno ogni 10 m, secondo le indicazioni
                ECE. Un faro puntato troppo in alto abbaglia; troppo in basso riduce
                la portata utile. Le vibrazioni nel tempo possono spostare la vite
                di regolazione: è un controllo rapido che molti ignorano.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeIntervallo">Intervallo</span>
              <h4>Manutenzione preventiva — connettori, lenti e allineamento a ogni cambio stagione</h4>
              <p>
                L'impianto luci richiede poca manutenzione ma attenzione periodica:
                connettori dei fari da controllare e trattare con grasso dielettrico
                (soprattutto su moto esposte all'acqua), lenti in policarbonato
                da lucidare appena iniziano a opacizzarsi, allineamento del fascio
                da verificare dopo cadute o smontaggio del cupolino. Le lampadine
                alogene si toccano solo con guanti: il grasso delle dita deposita
                residui sul bulbo che, sotto calore, creano punti di stress termico
                e riducono drasticamente la vita della lampada.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CARDS GRID ───────────────────────────────────────────────────── */}
        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Idea chiave</span>
            <h3>Un LED da 20 W può illuminare meglio di un'alogena da 55 W — ma solo se l'ottica è progettata per lui</h3>
            <p>
              L'efficienza della sorgente conta, ma senza un'ottica progettata per
              il punto sorgente specifico il guadagno si perde. Inserire un LED
              in un riflettore calibrato per un filamento alogeno produce spesso
              un fascio peggiore: luce dispersa, cut-off impreciso, abbagliamento.
              La tecnologia funziona quando sorgente e ottica sono progettate insieme.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Errore classico</span>
            <h3>Installare xenon HID o LED non omologati nel proiettore originale senza livellamento automatico</h3>
            <p>
              Sostituire un'alogena con uno xenon o un LED di alta potenza in un
              proiettore non progettato per quella sorgente è illegale in Europa
              (ECE R98 impone livellamento e lavaggio per gli HID) e pericoloso.
              La luce più intensa in un'ottica non calibrata produce abbagliamento
              verso i veicoli in arrivo. Il risparmio energetico non giustifica
              il rischio e la non conformità all'omologazione.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>Qui il focus è sulle sorgenti luminose, le funzioni e la fotometria — non sul cablaggio né sui sistemi di controllo</h3>
            <p>
              Questo capitolo tratta tecnologie, funzioni, normative e diagnosi
              dell'impianto luci come sistema ottico-elettrico. Il cablaggio che
              alimenta i fari, la centralina che gestisce le commutazioni adattive
              e la strumentazione che segnala anomalie sono trattati nelle sezioni
              dedicate a ciascun componente.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Luci;
