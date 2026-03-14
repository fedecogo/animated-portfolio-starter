import "./candela.scss";
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

const Candela = () => {
  return (
    <section className="candela" id="candela">
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
              La candela nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La candela è l'unico componente del motore che porta
              energia nell'equazione dall'esterno: non trasforma né
              accumula, ma innesca. La scintilla che scocca tra gli
              elettrodi nel momento esatto previsto dall'anticipo avvia
              il fronte di fiamma che trasforma la miscela compressa in
              lavoro meccanico. Nel motore a 2 tempi questo compito è
              ancora più delicato che nel 4 tempi — la candela lavora
              in condizioni termiche più severe, con un ciclo di
              combustione ogni giro di albero invece che ogni due, e
              con la miscela olio-benzina che deposita residui carboniosi
              in modo più aggressivo sulla sua superficie.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Scegliere la candela sbagliata per un motore a 2 tempi
              non è una questione di prestazioni marginali: è una
              questione di sopravvivenza del motore. Una candela troppo
              fredda si sporca rapidamente e causa mancate accensioni;
              una troppo calda accumula calore fino alla pre-accensione,
              bruciando pistoni e testata in pochi minuti di utilizzo.
              La candela è anche uno strumento diagnostico di prima
              categoria — il suo aspetto dopo alcune ore di utilizzo
              racconta con precisione la storia termica e chimica di
              tutto ciò che è avvenuto nella camera di combustione.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia della candela</span>
              <h3>Le parti che compongono la candela</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Elettrodo centrale — emette la scintilla verso l'elettrodo di massa</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Elettrodo di massa — chiude il circuito e definisce lo spinterometro</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Isolante in ceramica — separa elettricamente e trasmette il calore</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Corpo metallico filettato — fissa la candela nella sede e scarica il calore</span>
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
              <span className="placeholderText">Immagine / GIF — candela 2T in sezione con parti nominate</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Sezione</span>
            <p>
              Sezione della candela: l'isolante ceramico avvolge l'elettrodo
              centrale e determina con la sua geometria il grado termico.
              Il corpo filettato trasmette il calore dalla punta dell'isolante
              alla testata — è questa lunghezza del percorso termico a
              definire se la candela è calda o fredda.
            </p>
          </div>
        </motion.div>

        {/* ── GRADO TERMICO BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="gradoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="gradoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Grado termico</span>
            <h3>Caldo, freddo, giusto — il parametro più importante</h3>
            <p>
              Il grado termico della candela descrive la sua capacità di
              dissipare il calore verso la testata. Non è una proprietà
              elettrica — è puramente termica. Una candela "calda" ha un
              percorso lungo dall'elettrodo al corpo metallico e quindi
              dissipa lentamente il calore, raggiungendo temperature
              elevate. Una candela "fredda" ha un percorso breve e dissipa
              rapidamente, rimanendo più fresca. L'obiettivo è mantenere
              la punta dell'isolante ceramico nella finestra operativa
              ottimale: tra 450 °C e 850 °C.
            </p>
          </motion.div>

          <motion.div className="gradoContent" variants={cardVariants}>

            <div className="gradoScale">
              <div className="gradoScaleLabel">
                <span>Fredda</span>
                <span>Finestra operativa</span>
                <span>Calda</span>
              </div>
              <div className="gradoScaleBar">
                <div className="gradoZone zoneFredda" />
                <div className="gradoZone zoneOttimale">
                  <span className="gradoZoneLabel">450 – 850 °C</span>
                </div>
                <div className="gradoZone zoneCalda" />
              </div>
              <div className="gradoScaleDesc">
                <span className="descFredda">Depositi — spegnimento</span>
                <span className="descOttimale">Auto-pulizia — nessuna pre-accensione</span>
                <span className="descCalda">Pre-accensione — fusione</span>
              </div>
            </div>

            <div className="gradoCards">
              <div className="gradoCard gradoCardFredda">
                <span className="gradoBadge badgeFredda">Troppo fredda</span>
                <h4>Sotto i 450 °C — sporcizia e mancate accensioni</h4>
                <p>
                  Quando la punta dell'isolante scende sotto la temperatura
                  di auto-pulizia, i depositi carboniosi e oleosi non si
                  bruciano ma si accumulano sulla superficie. Il risultato
                  è una candela "sporca" che conduce la corrente invece
                  di farla scintillare: perdita di scintilla, avviamento
                  difficile, marcia irregolare e consumo elevato di
                  carburante. Nel 2T questo problema è amplificato dalla
                  presenza di olio nella miscela.
                </p>
              </div>

              <div className="gradoCard gradoCardCalda">
                <span className="gradoBadge badgeCalda">Troppo calda</span>
                <h4>Sopra gli 850 °C — pre-accensione e distruzione</h4>
                <p>
                  Quando la punta dell'isolante supera la temperatura
                  di pre-accensione, diventa essa stessa una sorgente
                  di ignizione incontrollata. La miscela si accende prima
                  della scintilla, con un anticipo imprevedibile e
                  variabile che genera pressioni di combustione abnormi.
                  In un motore a 2 tempi la pre-accensione da candela
                  troppo calda può forare il pistone o bruciare la
                  testata nel giro di pochi minuti.
                </p>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── CODICI & SCELTA BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="codiciBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="codiciHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Codifica e scelta</span>
            <h3>Leggere il codice candela — ogni lettera ha un significato</h3>
            <p>
              Il codice stampigliato sulla candela non è un numero di
              serie generico — è una specifica tecnica completa che
              codifica dimensioni fisiche, grado termico, tipo di
              elettrodo e caratteristiche speciali. Conoscerlo permette
              di scegliere un'alternativa equivalente di altro marchio
              o di modificare consapevolmente il grado termico per
              adattarsi a condizioni di utilizzo diverse.
            </p>
          </motion.div>

          <motion.div className="codiciGrid" variants={cardVariants}>

            <div className="codiceCard">
              <div className="codiceExample">
                <span className="codiceLettera letteraMarchio">NGK</span>
                <span className="codiceSep">/</span>
                <span className="codiceLettera letteraDim">B</span>
                <span className="codiceLettera letteraGrado">8</span>
                <span className="codiceLettera letteraTipo">E</span>
                <span className="codiceLettera letteraSpec">S</span>
              </div>
              <div className="codiceLeggenda">
                <div className="codiceRow">
                  <span className="codiceCol letteraMarchio">Marchio</span>
                  <span>NGK — produttore</span>
                </div>
                <div className="codiceRow">
                  <span className="codiceCol letteraDim">B</span>
                  <span>Diametro filetto — B = 14 mm</span>
                </div>
                <div className="codiceRow">
                  <span className="codiceCol letteraGrado">8</span>
                  <span>Grado termico — più alto = più fredda (NGK)</span>
                </div>
                <div className="codiceRow">
                  <span className="codiceCol letteraTipo">E</span>
                  <span>Lunghezza filetto — E = 19 mm</span>
                </div>
                <div className="codiceRow">
                  <span className="codiceCol letteraSpec">S</span>
                  <span>Elettrodo standard in rame</span>
                </div>
              </div>
            </div>

            <div className="codiceInfoGrid">

              <div className="codiceInfo">
                <span className="codiceInfoLabel">Diametro filetto</span>
                <div className="codiceInfoValues">
                  <span className="civBadge">10 mm</span>
                  <span className="civBadge">12 mm</span>
                  <span className="civBadge civActive">14 mm</span>
                  <span className="civBadge">18 mm</span>
                </div>
                <p>
                  La maggior parte dei 2T stradali e da cross usa il
                  filetto M14x1,25. I motori più piccoli (ciclomotori,
                  minicross) usano spesso M10 o M12.
                </p>
              </div>

              <div className="codiceInfo">
                <span className="codiceInfoLabel">Grado termico NGK vs Champion</span>
                <div className="codiceInfoValues">
                  <span className="civBadge">NGK: alto = fredda</span>
                  <span className="civBadge civWarn">Champion: alto = calda</span>
                </div>
                <p>
                  Attenzione: NGK e Champion usano convenzioni opposte
                  per il grado termico. NGK 9 è più fredda di NGK 8;
                  Champion N9 è più calda di Champion N8. Verificare
                  sempre le tabelle di corrispondenza inter-marchio.
                </p>
              </div>

              <div className="codiceInfo">
                <span className="codiceInfoLabel">Elettrodo — materiali</span>
                <div className="codiceInfoValues">
                  <span className="civBadge">Rame</span>
                  <span className="civBadge civActive">Iridio</span>
                  <span className="civBadge">Platino</span>
                </div>
                <p>
                  Le candele in iridio hanno un elettrodo centrale
                  sottilissimo (0,6 mm) che riduce la tensione di
                  scarica necessaria e migliora l'affidabilità
                  dell'accensione. Durano più a lungo ma costano di
                  più — in ambito racing si usano comunque le candele
                  standard in rame per via degli intervalli di
                  sostituzione brevi.
                </p>
              </div>

              <div className="codiceInfo">
                <span className="codiceInfoLabel">Spinterometro (gap)</span>
                <div className="codiceInfoValues">
                  <span className="civBadge civActive">0,5 – 0,7 mm (2T)</span>
                  <span className="civBadge">0,8 – 1,0 mm (4T)</span>
                </div>
                <p>
                  Il gap degli elettrodi nei 2T è generalmente più
                  stretto rispetto ai 4T. Un gap troppo ampio richiede
                  tensioni di scarica più alte che il sistema di
                  accensione CDI potrebbe non essere in grado di
                  garantire ad alti regimi, causando mancate accensioni.
                </p>
              </div>

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
            <span className="captionTag">Lettura colore</span>
            <p>
              La gamma cromatica della punta dell'isolante ceramico dopo
              alcune ore di utilizzo: dal bianco gessoso (miscela magra
              o grado troppo caldo) al marrone chiaro nocciola (condizioni
              ottimali) fino al nero opaco e unto (miscela ricca, grado
              troppo freddo o troppo olio in miscela).
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — scala colori candela usata (bianco / nocciola / nero)</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── LETTURA CANDELA BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="letturaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="letturaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi visiva</span>
            <h3>Leggere la candela — ogni colore è una risposta</h3>
            <p>
              La superficie dell'isolante ceramico attorno all'elettrodo
              centrale è un termometro chimico che registra fedelmente
              le condizioni di combustione delle ultime ore di utilizzo.
              Prima di smontare il carburatore o regolare l'anticipo,
              vale sempre la pena leggere la candela: in pochi secondi
              fornisce informazioni che altrimenti richiederebbero
              strumenti specifici.
            </p>
          </motion.div>

          <motion.div className="letturaGrid" variants={cardVariants}>

            <div className="letturaCard">
              <div className="coloreDot dotoNocciola" />
              <span className="letturaBadge badgeOttimo">Ottimo</span>
              <h4>Marrone chiaro — nocciola</h4>
              <p>
                Il colore ideale. L'isolante ceramico si presenta di
                un marrone chiaro uniforme, simile al colore del caffè
                con latte. Indica una combustione completa, rapporto
                aria-carburante corretto, grado termico appropriato e
                quantità di olio in miscela ottimale. Se la candela
                è così, il motore sta lavorando esattamente come deve.
              </p>
            </div>

            <div className="letturaCard">
              <div className="coloreDot dotoBianco" />
              <span className="letturaBadge badgeMagro">Magro / Caldo</span>
              <h4>Bianco gessoso o grigio chiaro</h4>
              <p>
                Indica combustione troppo povera di carburante (miscela
                magra) oppure grado termico troppo caldo per le condizioni
                di utilizzo. Le temperature di combustione sono eccessive.
                In un 2T questo è un segnale di allarme serio: mescola
                troppo magra o grado candela sbagliato possono portare
                alla fusione della testa del pistone in breve tempo.
                Verificare il getto del carburatore e il grado termico.
              </p>
            </div>

            <div className="letturaCard">
              <div className="coloreDot dotoNero" />
              <span className="letturaBadge badgeRicco">Ricco / Freddo</span>
              <h4>Nero opaco e asciutto</h4>
              <p>
                Depositi carboniosi secchi indicano miscela troppo ricca
                di carburante, grado termico troppo freddo o anticipo
                insufficiente. Il motore consuma troppo, ha poca potenza
                e tende a sporcare la candela rapidamente. Verificare
                la regolazione del getto principale e il grado termico,
                specialmente se il problema peggiora con temperature
                esterne elevate.
              </p>
            </div>

            <div className="letturaCard">
              <div className="coloreDot dotoOliato" />
              <span className="letturaBadge badgeOlio">Troppo olio</span>
              <h4>Nero unto e viscido</h4>
              <p>
                Depositi neri lucidi e untuosi indicano eccesso di olio
                nella miscela, temperature di lavoro troppo basse (uso
                in città a velocità costante e bassa) o fasce elastiche
                consumate che permettono all'olio di risalire in camera.
                La candela si sporca rapidamente e causa mancate
                accensioni. Verificare il rapporto di miscela e lo stato
                delle fasce.
              </p>
            </div>

            <div className="letturaCard">
              <div className="coloreDot dotoDetonazione" />
              <span className="letturaBadge badgeDeton">Detonazione</span>
              <h4>Erosione dell'elettrodo — puntinature</h4>
              <p>
                Piccole cavità o erosioni sulle superfici degli elettrodi,
                puntinature o aspetto "pepato" sull'isolante indicano
                episodi di detonazione o pre-accensione. Le onde di
                pressione generate dalla combustione anomala erodono
                fisicamente il metallo degli elettrodi. In questo caso
                non basta sostituire la candela: va identificata e
                rimossa la causa della detonazione.
              </p>
            </div>

            <div className="letturaCard">
              <div className="coloreDot dotoFuso" />
              <span className="letturaBadge badgeFuso">Critico</span>
              <h4>Elettrodo fuso o vetrificato</h4>
              <p>
                L'elettrodo centrale presenta deformazioni per fusione,
                arrotondamento estremo o la ceramica appare vetrificata
                e lucida. Temperatura di combustione catastrofica —
                pre-accensione prolungata, miscela estremamente magra
                o raffreddamento insufficiente. Il motore ha quasi
                certamente subito danni al pistone e alla testata:
                smontare e ispezionare prima di avviare di nuovo.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── COMPRESSIMETRO BLOCK ────────────────────────────────────────── */}
        <motion.div
          className="comprBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="comprHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Strumento diagnostico</span>
            <h3>Il compressimetro — diagnosi del gruppo termico dal buco della candela</h3>
            <p>
              Il compressimetro è uno strumento a pressione che si avvita
              o si inserisce a pressione nel foro della candela e misura
              la pressione massima raggiunta nel cilindro durante la fase
              di compressione. È lo strumento diagnostico più importante
              per valutare lo stato di salute del gruppo termico senza
              smontare nulla: in tre minuti fornisce un dato oggettivo
              su fasce, tenuta della testata e stato generale della
              camera di combustione.
            </p>
          </motion.div>

          <motion.div className="comprContent" variants={cardVariants}>

            <div className="comprLeft">

              <div className="comprValori">
                <div className="comprValoreCard">
                  <span className="comprValoreLabel">2T sportivo / da cross</span>
                  <div className="comprValoreBar">
                    <div className="comprValoreFill" style={{ width: "85%" }} />
                  </div>
                  <span className="comprValore">10 – 14 bar</span>
                </div>
                <div className="comprValoreCard">
                  <span className="comprValoreLabel">2T stradale / scooter</span>
                  <div className="comprValoreBar">
                    <div className="comprValoreFill comprValoreFillAlt" style={{ width: "60%" }} />
                  </div>
                  <span className="comprValore">8 – 11 bar</span>
                </div>
                <div className="comprValoreCard">
                  <span className="comprValoreLabel">Soglia di allarme (scostamento dal nuovo)</span>
                  <div className="comprValoreBar">
                    <div className="comprValoreFill comprValoreFillWarn" style={{ width: "30%" }} />
                  </div>
                  <span className="comprValore">&lt; 80% del valore originale</span>
                </div>
              </div>

              <div className="comprProcedura">
                <span className="comprProcLabel">Procedura corretta</span>
                <div className="comprSteps">
                  <div className="comprStep">
                    <span className="comprStepN">01</span>
                    <p>Portare il motore a temperatura operativa completa — mai misurare a freddo</p>
                  </div>
                  <div className="comprStep">
                    <span className="comprStepN">02</span>
                    <p>Rimuovere la candela e avvitare o inserire il compressimetro nel foro</p>
                  </div>
                  <div className="comprStep">
                    <span className="comprStepN">03</span>
                    <p>Aprire completamente il gas e azionare il kick o il motorino più volte finché l'ago non si stabilizza</p>
                  </div>
                  <div className="comprStep">
                    <span className="comprStepN">04</span>
                    <p>Leggere il valore massimo raggiunto e confrontarlo con i dati di specifica del motore</p>
                  </div>
                  <div className="comprStep">
                    <span className="comprStepN">05</span>
                    <p>Se il valore è basso, ripetere la misura aggiungendo 2 – 3 cm³ di olio nel cilindro per distinguere usura fasce da perdita testata</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="comprRight">
              <div className="comprStrumento">
                {/* ↓↓↓ INSERISCI QUI LA TUA IMG DEL COMPRESSIMETRO ↓↓↓ */}
                <div className="mediaPlaceholder mediaPlaceholderSquare">
                  <div className="placeholderInner">
                    <span className="placeholderIcon">⊕</span>
                    <span className="placeholderText">Foto — compressimetro nel foro candela</span>
                    <span className="placeholderSub">Sostituisci con &lt;img&gt;</span>
                  </div>
                </div>
                {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
                <div className="comprStrumentoInfo">
                  <span className="comprStrumentoTag">Strumento</span>
                  <h4>Tipi di compressimetro</h4>
                  <p>
                    Esistono due versioni: a vite — si avvita direttamente
                    nel foro candela come la candela stessa — e a pressione
                    con adattatore conico, da tenere premuto manualmente
                    durante la misura. Il tipo a vite è più preciso perché
                    elimina le perdite tra adattatore e sede. Il fondo scala
                    deve essere almeno 20 bar per non saturare durante la
                    misura su motori sportivi con alto rapporto di compressione.
                  </p>
                </div>
              </div>

              <div className="comprInterpreta">
                <span className="comprInterpretaTag">Interpretazione</span>
                <div className="comprInterpretaGrid">
                  <div className="ciItem ciOk">
                    <span className="ciDot" />
                    <div>
                      <strong>Valore nella norma</strong>
                      <p>Gruppo termico in buone condizioni — proseguire uso normale</p>
                    </div>
                  </div>
                  <div className="ciItem ciWarn">
                    <span className="ciDot" />
                    <div>
                      <strong>Valore basso, sale con olio</strong>
                      <p>Fasce consumate — programmare revisione gruppo termico</p>
                    </div>
                  </div>
                  <div className="ciItem ciWarn">
                    <span className="ciDot ciDotYellow" />
                    <div>
                      <strong>Valore basso, non cambia con olio</strong>
                      <p>Perdita testata o guarnizione — ispezionare tenuta</p>
                    </div>
                  </div>
                  <div className="ciItem ciKo">
                    <span className="ciDot ciDotRed" />
                    <div>
                      <strong>Valore molto basso o zero</strong>
                      <p>Danno grave — pistone rotto, fascia spezzata, valvola bloccata</p>
                    </div>
                  </div>
                </div>
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
              <span className="placeholderText">Immagine / GIF — confronto candele: nuova vs usata vs bruciata</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Confronto</span>
            <p>
              Da sinistra: candela nuova con elettrodi integri e ceramica
              bianca — candela usata in condizioni ottimali con isolante
              nocciola e gap regolare — candela con detonazione con erosione
              degli elettrodi — candela con pre-accensione con ceramica
              vetrificata ed elettrodo deformato.
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
            <h3>Intervalli di sostituzione nel 2T</h3>
            <p>
              In ambito agonistico la candela si sostituisce a ogni gara
              o ogni 3 – 5 ore di utilizzo intenso, a prescindere
              dall'aspetto. In uso amatoriale la sostituzione va eseguita
              ogni 20 – 40 ore oppure al primo segnale di avviamento
              difficoltoso o marcia irregolare. Una candela consumata
              ha elettrodi arrotondati che richiedono tensioni di scarica
              più alte — l'accensione CDI dei 2T non ha lo stesso margine
              di un'accensione a batteria tradizionale.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Serraggio</span>
            <h3>Coppia di serraggio e montaggio corretto</h3>
            <p>
              La candela va serrata a mano fino all'appoggio della guarnizione,
              poi ulteriormente di 1/4 – 1/2 giro con la chiave, mai oltre.
              La coppia corretta è generalmente 20 – 25 Nm per filetti M14.
              Un serraggio eccessivo deforma la sede nella testata in
              alluminio e può danneggiare il filetto irrecuperabilmente.
              Un serraggio insufficiente causa perdite di pressione e
              la candela può allentarsi per le vibrazioni.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Tuning</span>
            <h3>Variare il grado termico per il setup</h3>
            <p>
              In preparazione il grado termico si adatta alle condizioni:
              un motore preparato con rapporto di compressione elevato
              o che lavora a regimi molto alti ha bisogno di una candela
              più fredda (indice NGK più alto) per evitare la
              pre-accensione. In condizioni di freddo intenso o utilizzo
              urbano a basso regime si può scendere di un grado termico
              verso il caldo per evitare la formazione di depositi.
              La variazione si fa sempre di un grado alla volta.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Candela;
