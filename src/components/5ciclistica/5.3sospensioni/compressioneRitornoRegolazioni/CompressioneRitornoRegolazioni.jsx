import "./compressioneRitornoRegolazioni.scss";
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

const CompressioneRitornoRegolazioni = () => {
  return (
    <section className="compressioneRitornoRegolazioni" id="compressioneRitornoRegolazioni">
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
              Sospensioni — Idraulica e regolazioni
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Compressione, ritorno e regolazioni idrauliche
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La molla accumula e restituisce energia — è un sistema conservativo.
              Lo smorzatore la converte in calore attraverso l'olio — è un sistema
              dissipativo. Questi due componenti lavorano in parallelo, ma con ruoli
              opposti: nessun aumento di precarico molla può compensare uno smorzatore
              troppo morbido, e nessuna regolazione idraulica può fare il lavoro
              della molla sbagliata. Capire cosa controlla ogni circuito — LSC,
              HSC, LSR, HSR — è il prerequisito per ogni regolazione intelligente.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il punto chiave è la velocità dello stelo, non quella della moto.
              Un dosso a 10 km/h percorso lentamente può generare una velocità stelo
              di 0.05 m/s — territorio LSC. Lo stesso dosso a 80 km/h produce
              0.8 m/s — territorio HSC. È per questo che le whoops a velocità
              sostenuta sono un problema di HSC anche se singolarmente
              sembrano ostacoli piccoli, e che il naso-tuffo in frenata
              è sempre un problema di LSC anche su moto veloci.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Quattro circuiti idraulici</span>
              <h3>LSC · HSC · LSR · HSR — a cosa serve ciascuno</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">LSC</span>
                <span className="miniText">
                  Low Speed Compression — velocità stelo sotto 0,3 m/s;
                  controlla il body motion: dive in frenata, squat in accelerazione,
                  rollio in curva; regolato da ago o vite di bleed sulla cartuccia
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">HSC</span>
                <span className="miniText">
                  High Speed Compression — velocità stelo oltre 0,3 m/s;
                  controlla la risposta agli impatti bruschi: radici, rocce,
                  atterraggi; regolato dallo shim stack o da vite HSC dedicata
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">LSR</span>
                <span className="miniText">
                  Low Speed Rebound — controlla la velocità di riapertura dopo
                  compressioni lente; la regolazione più critica nel fuoristrada;
                  troppo lento genera packing, troppo veloce genera rimbalzo
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">HSR</span>
                <span className="miniText">
                  High Speed Rebound — controlla il ritorno dopo impatti veloci;
                  spesso non separabile dall'LSR sulle forcelle stock;
                  troppo veloce genera kick-back violento dopo radici e sassi
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
              <span className="placeholderText">Grafico — curva forza-velocità (F-V): zona LSC/HSC in compressione, zona LSR/HSR in estensione; evidenziare il ginocchio della curva a 0,3 m/s</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Curva F-V</span>
            <p>
              La curva forza-velocità mostra come la forza smorzante varia
              con la velocità dello stelo. Non è lineare: nella zona LSC
              (0–0,3 m/s) la forza cresce rapidamente; nella zona HSC
              (&gt;0,3 m/s) la crescita rallenta — il circuito HSC apre
              progressivamente per non trasmettere gli impatti al telaio.
              Regolare LSC sposta la pendenza della curva nella zona bassa;
              regolare HSC modifica il "ginocchio" e la zona alta.
            </p>
          </div>
        </motion.div>

        {/* ── FISICA BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="fisicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="fisicaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fisica dello smorzamento</span>
            <h3>Come l'olio trasforma il movimento in calore — la base per ogni regolazione</h3>
            <p>
              Prima di toccare qualsiasi vite di regolazione occorre capire
              cosa succede dentro la cartuccia. Lo smorzamento non è
              "quanto è dura" la sospensione — è la relazione tra velocità
              dello stelo e forza resistente generata dall'olio che scorre
              attraverso orifizi calibrati. Modificare un click cambia
              quella relazione in modo preciso e prevedibile, se si sa
              cosa si sta cambiando e perché.
            </p>
          </motion.div>

          <motion.div className="fisicaGrid" variants={cardVariants}>

            <div className="fisicaCard">
              <span className="fisicaIdx">01</span>
              <h4>La curva forza-velocità — smorzamento digressivo e progressivo</h4>
              <p>
                La forza smorzante ideale sarebbe F = c × v (lineare), ma nessuna
                sospensione pratica funziona così. Le cartucce moderne usano
                smorzamento <em>digressivo</em>: la resistenza cresce meno che
                linearmente ad alta velocità stelo, per non trasmettere gli impatti
                al telaio. La pendenza della curva F-V nella zona bassa (0–0,3 m/s)
                definisce il comfort su terreno ondulato; il punto di ginocchio
                e la zona alta definiscono la capacità di assorbire impatti.
                Una cartuccia con shim stack troppo rigido ha una curva che
                sale ripidamente anche ad alta velocità — sensazione di durezza
                e trasmissione degli urti.
              </p>
            </div>

            <div className="fisicaCard">
              <span className="fisicaIdx">02</span>
              <h4>Il circuito idraulico interno — shim stack, bleed e ago di regolazione</h4>
              <p>
                All'interno della cartuccia operano due circuiti in parallelo:
                il circuito di bleed (o ago) e il circuito principale a valvola.
                A bassa velocità stelo la pressione è insufficiente ad aprire
                le valvole a lamelle (shim stack) — tutto l'olio passa attraverso
                il bleed, un orifizio fisso la cui sezione è controllata dall'ago
                di regolazione. Questo è il circuito LSC/LSR. Ad alta velocità,
                la pressione supera il precarico dello shim stack — le lamelle
                si flettono e aprono, creando un secondo passaggio. Più rigido è
                lo stack, maggiore la velocità necessaria ad aprirlo — questo
                definisce il comportamento HSC/HSR. I due circuiti operano
                sempre insieme: non si può regolare solo uno senza che l'altro
                non contribuisca.
              </p>
            </div>

            <div className="fisicaCard">
              <span className="fisicaIdx">03</span>
              <h4>Leverage ratio e velocità stelo reale — perché il posteriore e l'anteriore si settano diversamente</h4>
              <p>
                Il leverage ratio del linkage posteriore cambia la velocità effettiva
                dello stelo del monoammortizzatore rispetto alla velocità della ruota.
                Con rapporto 3:1, per ogni mm/s di velocità ruota lo stelo si muove
                a 3× — quindi un impatto che alla ruota genera 0,9 m/s si traduce
                in 0,3 m/s sullo stelo del mono (zona LSC/HSC di confine).
                Lo stesso impatto sulla forcella — dove corsa stelo = corsa ruota —
                muove lo stelo a 0,9 m/s (zona HSC piena). Questo spiega perché
                il monoammortizzatore ha tipicamente regolazioni LSC/LSR più sensibili
                e HSC/HSR meno critiche rispetto alla forcella per lo stesso tipo di terreno:
                il linkage "filtra" le alte velocità prima che raggiungano lo stelo.
              </p>
            </div>

            <div className="fisicaCard">
              <span className="fisicaIdx">04</span>
              <h4>Fade termico — perché la sospensione cambia comportamento nel corso della sessione</h4>
              <p>
                La viscosità dell'olio idraulico diminuisce con la temperatura
                secondo la relazione di Walther: un aumento di 20°C può ridurre
                la viscosità del 30–50% a seconda del grado. In una sessione
                di motocross di 30 minuti, la temperatura dell'olio della forcella
                può salire da 20°C a 70–80°C. Il risultato pratico: la sospensione
                che all'inizio era ben bilanciata diventa progressivamente più morbida
                — si comprime di più, il ritorno accelera. I piloti esperti descrivono
                il fenomeno come "la forcella che si apre" nel corso della sessione.
                Soluzioni: olio con alto Viscosity Index (VI &gt; 150), gradi di viscosità
                leggermente superiori per climi caldi, serbatoi esterni (emulsion tank)
                che aumentano la massa termica e dissipano il calore più lentamente.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── IDRAULICO BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="idraulicoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="idraulicoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">I quattro circuiti di regolazione</span>
            <h3>LSC · HSC · LSR · HSR — fisica, meccanismo e metodo di regolazione</h3>
            <p>
              Ogni circuito controlla una fase specifica del ciclo di smorzamento.
              Capire esattamente quale movimento della moto è pilotato da quale
              circuito è il requisito per non rincorrere i problemi
              applicando correzioni nel posto sbagliato.
            </p>
          </motion.div>

          <motion.div className="idraulicoGrid" variants={cardVariants}>

            <div className="idraulicoCard idraulicoLSC">
              <div className="idraulicoCardTop">
                <span className="idraulicoBadge badgeLSC">LSC</span>
                <span className="idraulicoSub">Low Speed Compression · 0–0,3 m/s</span>
              </div>
              <h4>Body motion — controllo dei movimenti lenti e deliberati del telaio</h4>
              <p>
                L'LSC controlla tutti i movimenti della sospensione che avvengono
                a bassa velocità stelo: il dive della forcella in frenata
                (il peso si trasferisce in avanti progressivamente, non di colpo),
                lo squat del posteriore in accelerazione, il rollio in curva.
                Questi eventi sono lenti perché la forza che li genera — inerzia
                del corpo moto-pilota — si applica gradualmente.
              </p>
              <p>
                <strong>Meccanismo:</strong> l'ago di regolazione (needle) riduce
                o aumenta la sezione del bleed; girare IN (senso orario, chiudere)
                riduce il passaggio → più resistenza → sospensione più rigida
                ai movimenti lenti. Ogni click corrisponde a una variazione
                di circa 0,05–0,12 mm² di sezione, a seconda del costruttore.
              </p>
              <p>
                <strong>Baseline tipica:</strong> 12–18 click aperti dalla chiusura
                totale (Öhlins, WP Xact, KYB AOS). Troppo chiuso (duro): la forcella
                non si immerge in frenata, il feeling è "bloccato" e il grip anteriore
                diminuisce perché la ruota non segue il fondo. Troppo aperto (morbido):
                naso-tuffo eccessivo, squat marcato, geometria instabile.
              </p>
            </div>

            <div className="idraulicoCard idraulicoHSC">
              <div className="idraulicoCardTop">
                <span className="idraulicoBadge badgeHSC">HSC</span>
                <span className="idraulicoSub">High Speed Compression · &gt;0,3 m/s</span>
              </div>
              <h4>Impatti — controllo della risposta a radici, rocce e atterraggi</h4>
              <p>
                L'HSC entra in gioco quando la sospensione deve assorbire un impatto
                brusco: la ruota colpisce una radice a 60 km/h, la forcella deve
                comprimersi di 80 mm in 0,1 secondi — velocità stelo 0,8 m/s.
                In questa fase il bleed LSC è già completamente superato in capacità;
                lo shim stack principale apre e la resistenza è determinata dalla sua
                rigidità e geometria (numero di lamelle, spessore, diametro).
              </p>
              <p>
                <strong>Meccanismo:</strong> su molte cartucce l'HSC è regolabile
                con una vite separata a testa piatta o esagonale che comprime
                una molla di precarico sullo shim stack. Girare IN aumenta il precarico
                → serve più pressione per aprire lo stack → più resistenza ad alta velocità.
                La regolazione avviene in frazioni di giro (0,5–3 giri totali).
              </p>
              <p>
                <strong>Baseline tipica:</strong> 1–2 giri aperti dalla chiusura totale.
                Troppo chiuso: gli impatti si trasmettono al telaio, la moto "rimbalza"
                sulle pietre, affaticamento elevato. Troppo aperto: bottoming su
                atterraggi e dossi veloci, sensazione di fine corsa improvviso.
              </p>
            </div>

            <div className="idraulicoCard idraulicoLSR">
              <div className="idraulicoCardTop">
                <span className="idraulicoBadge badgeLSR">LSR</span>
                <span className="idraulicoSub">Low Speed Rebound · 0–0,3 m/s</span>
              </div>
              <h4>Tracking — la regolazione più critica nel fuoristrada</h4>
              <p>
                Dopo la compressione, la molla spinge la sospensione a riaprirsi.
                L'LSR controlla la velocità di questa riapertura quando avviene
                lentamente — dopo che la ruota ha superato un ostacolo basso
                e continua a muoversi sul terreno. Se la sospensione ritorna
                troppo velocemente, la ruota rimbalza oltre la posizione neutra
                e perde contatto col suolo. Se ritorna troppo lentamente,
                non fa in tempo a riaprirsi prima dell'ostacolo successivo —
                il fenomeno del <em>packing</em>.
              </p>
              <p>
                <strong>Meccanismo:</strong> vite di ritorno separata (lato opposto
                alla compressione) che regola il bleed del circuito di estensione.
                Girare IN rallenta il ritorno. La sensibilità è massima: 2 click
                di differenza si percepiscono chiaramente su terreno ripetitivo.
              </p>
              <p>
                <strong>Baseline tipica:</strong> 10–16 click aperti. Nel fuoristrada
                è il parametro più soggetto a compromessi: ritorno più lento migliora
                la stabilità ma peggiora il tracking; più veloce migliora il tracking
                ma rischia di generare rimbalzo. L'O-ring sulla forcella è il
                primo strumento per verificare il packing.
              </p>
            </div>

            <div className="idraulicoCard idraulicoHSR">
              <div className="idraulicoCardTop">
                <span className="idraulicoBadge badgeHSR">HSR</span>
                <span className="idraulicoSub">High Speed Rebound · &gt;0,3 m/s</span>
              </div>
              <h4>Kick-back — controllo del ritorno violento dopo impatti bruschi</h4>
              <p>
                Dopo un impatto ad alta velocità (HSC), la sospensione si è compressa
                rapidamente e la molla ha accumulato energia. Il ritorno avviene
                anch'esso ad alta velocità stelo — la molla si distende velocemente
                e spinge il pistone verso l'estensione. Se l'HSR è troppo morbido
                (veloce), la ruota rimbalza violentemente verso l'alto — il cosiddetto
                kick-back: il retrotreno calcia verso l'alto dopo ogni radice,
                rischiando di sbilanciare il pilota.
              </p>
              <p>
                <strong>Meccanismo:</strong> sulle forcelle stock l'HSR raramente
                è separabile dall'LSR — è determinato dallo shim stack del circuito
                di estensione, modificabile solo con una revisione interna.
                Sui monoammortizzatori aftermarket e sulle forcelle racing (Öhlins TTX,
                WP Xact Pro) l'HSR ha una vite dedicata. Il sintomo chiaro di HSR
                troppo veloce è il kick-back del posteriore su radici a velocità sostenuta.
              </p>
              <p>
                <strong>Come interagisce con LSR:</strong> chiudere l'LSR riduce
                sia il ritorno lento che quello veloce. Se il problema è solo
                il kick-back su impatti duri, la soluzione ideale sarebbe
                chiudere l'HSR lasciando l'LSR aperto — possibile solo su componenti
                che permettono questa regolazione separata.
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
            <span className="sectionLabel">Setup per disciplina</span>
            <h3>Cross, enduro, motard e sportiva — baseline di partenza e logica di regolazione</h3>
            <p>
              Non esiste un setup universale — il terreno determina quale circuito
              è critico e in quale direzione va regolato. Le baseline qui sotto
              sono punti di partenza dai manuali dei costruttori e dall'esperienza
              dei preparatori: il numero di click si riferisce sempre alla posizione
              aperta dalla chiusura totale (senso antiorario da completamente chiuso).
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>

            <div className="tipCard tipCross">
              <div className="tipCardTop">
                <span className="tipBadge badgeCross">Cross — MX</span>
                <span className="tipSub">Terreno veloce · salti · whoops</span>
              </div>
              <h4>HSC morbido per i salti, LSR veloce per il recupero tra un ostacolo e l'altro</h4>
              <p>
                Nel cross la priorità è assorbire gli atterraggi da salto (HSC)
                e recuperare rapidamente tra le whoops (LSR). Un HSC troppo duro
                su un atterraggio da triplo trasmette 5G al telaio invece di
                dissiparli nell'olio. Un LSR troppo lento sulle whoops genera
                packing progressivo — alla quinta whoops la forcella è già compressa
                di 50 mm e non ha più corsa per l'impatto successivo.
              </p>
              <p>
                <strong>Forcella anteriore:</strong> LSC 14–16 click, HSC 1,5–2 giri,
                LSR 10–14 click. <strong>Monoammortizzatore:</strong> LSC 12–16 click,
                HSC 1–1,5 giri, LSR 10–14 click. LSR più veloce (meno click) rispetto
                all'enduro perché la ruota deve recuperare tra un salto e l'altro
                in tempi brevissimi — 0,5–1 secondo tra una whoops e l'altra.
              </p>
            </div>

            <div className="tipCard tipEnduro">
              <div className="tipCardTop">
                <span className="tipBadge badgeEnduro">Enduro</span>
                <span className="tipSub">Terreno tecnico · radici · rocce</span>
              </div>
              <h4>Tutto morbido per il tracking — LSR controllato per evitare il packing su terreno ripetitivo</h4>
              <p>
                Nell'enduro tecnico il terreno è irregolare ma spesso lento —
                radici, rocce, passaggi stretti a bassa velocità. Il LSC deve
                essere morbido per permettere alla ruota di seguire il profilo
                del terreno senza rimbalzare. Il LSR più lento rispetto al cross
                perché su terreno tecnico la sospensione si comprime su ostacoli
                ravvicinati — serve un ritorno controllato per non perdere il contatto.
              </p>
              <p>
                <strong>Forcella anteriore:</strong> LSC 16–20 click (più morbido del cross),
                HSC 1–1,5 giri (morbido — le radici a bassa velocità non sono HSC),
                LSR 14–18 click. <strong>Monoammortizzatore:</strong> LSC 14–18 click,
                HSC 1–1,5 giri, LSR 14–18 click. SAG più generoso (30–40 mm ant.)
                per massimizzare il tracking — il terreno che scende e sale sotto
                alla ruota deve essere seguito, non contrastato.
              </p>
            </div>

            <div className="tipCard tipMotard">
              <div className="tipCardTop">
                <span className="tipBadge badgeMotard">Motard</span>
                <span className="tipSub">Asfalto · frenate forti · curve</span>
              </div>
              <h4>Tutto verso il duro — l'asfalto non richiede assorbimento, richiede stabilità</h4>
              <p>
                Sull'asfalto gli impatti ad alta velocità (radici, rocce) non esistono —
                l'HSC diventa quasi irrilevante. Quello che conta è eliminare
                il body motion: il dive in frenata destabilizza la geometria
                in staccata, lo squat in accelerazione cambia l'angolo di trazione.
                LSC molto duro (pochi click) riduce questi movimenti. LSR lento
                evita che la forcella rimbalzi dopo ogni dosso, mantenendo
                il contatto con l'asfalto stabile.
              </p>
              <p>
                <strong>Forcella anteriore:</strong> LSC 8–12 click, HSC 2–3 giri
                (irrilevante ma non chiudere completamente), LSR 8–12 click
                (lento per stabilità). <strong>Monoammortizzatore:</strong> LSC 6–10 click,
                HSC 2,5–3 giri, LSR 8–12 click. Attenzione: su asfalto irregolare
                (buche, rattoppi) un setup troppo rigido toglie grip — il pneumatico
                salta invece di seguire il fondo.
              </p>
            </div>

            <div className="tipCard tipSportiva">
              <div className="tipCardTop">
                <span className="tipBadge badgeSportiva">Sportiva / Stradale 2T</span>
                <span className="tipSub">Asfalto · alta velocità · feeling preciso</span>
              </div>
              <h4>Setup rigido orientato alla stabilità — ma grip dipende dal fondo stradale</h4>
              <p>
                Le 2T stradali (RS 125, NSR 125, TZR, Aprilia RS) hanno cartucce
                più semplici (spesso senza separazione LSC/HSC) e range di regolazione
                ridotti. L'obiettivo è minimizzare i movimenti della moto in frenata
                e in curva — il feeling diretto e prevedibile è prioritario rispetto
                all'assorbimento. Un minimo di cedevolezza LSC è però necessario:
                una forcella completamente bloccata su asfalto con buche rimbalza
                e perde grip più di una leggermente più morbida.
              </p>
              <p>
                <strong>Forcella anteriore:</strong> LSC 6–10 click, HSC 2,5–3,5 giri,
                LSR 6–10 click (lentissimo). <strong>Ammortizzatore posteriore:</strong>
                spesso regolazione solo precarico + singola vite ritorno — 8–12 click
                di ritorno. Verificare sempre che il SAG sia corretto (15–22 mm ant.,
                20–30 mm post.) prima di regolare lo smorzamento.
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
            <span className="captionTag">Schema interno cartuccia</span>
            <p>
              Sezione di una cartuccia a separazione LSC/HSC:
              il circuito di bleed (ago LSC) in parallelo allo shim stack principale (HSC).
              In compressione lenta l'olio passa quasi interamente dal bleed;
              superata la soglia di pressione, lo stack si apre e i due circuiti
              lavorano in parallelo. La regolazione esterna (click) sposta fisicamente
              l'ago modificando la sezione di passaggio del bleed.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Schema sezione — cartuccia forcella: pistone, shim stack, ago bleed, circuiti LSC e HSC evidenziati con colori diversi</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── SINTOMI BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="sintomiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="sintomiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi dai sintomi</span>
            <h3>Cosa senti in pista e cosa significa in termini di circuito idraulico</h3>
            <p>
              La difficoltà nel settaggio è tradurre la sensazione di guida
              nel parametro da modificare. Il pilota percepisce il risultato —
              la moto si comporta in un certo modo — ma non vede direttamente
              quale circuito ne è responsabile. Questa mappa sintomo → causa
              è il punto di partenza per non rincorrere i problemi
              toccando le regolazioni sbagliate.
            </p>
          </motion.div>

          <motion.div className="sintomiGrid" variants={cardVariants}>

            <div className="sintomoCard sintomoPacking">
              <div className="sintomoCardTop">
                <span className="sintomoBadge badgePacking">Packing</span>
                <span className="sintomoSub">LSR troppo lento</span>
              </div>
              <h4>La sospensione si abbassa progressivamente su ostacoli ripetuti</h4>
              <p>
                Il packing (o pump-up) si manifesta su terreni con ostacoli ravvicinati
                e ripetuti: whoops nel cross, tratti di radici nell'enduro, dossi
                regolari nel motard. La sospensione si comprime al primo ostacolo
                ma non ha tempo di riaprirsi completamente prima del secondo —
                ogni ciclo aggiunge un po' di compressione alla precedente.
                Dopo 10–15 ostacoli la forcella è già compressa di 60–80 mm
                e lavora solo nella zona finale, perdendo tracking e rischiando
                il fine corsa. L'O-ring sulla forcella dopo una sessione di whoops
                mostra la massima compressione raggiunta — se è oltre il 70%
                della corsa totale con LSR corretto, il problema è la molla.
              </p>
              <p>
                <strong>Fix:</strong> aprire (ammorbidire) l'LSR di 2–4 click alla volta.
                Se il packing persiste anche con LSR completamente aperto,
                la molla è troppo dura per il peso del pilota — aumentare il SAG.
              </p>
            </div>

            <div className="sintomoCard sintomoKick">
              <div className="sintomoCardTop">
                <span className="sintomoBadge badgeKick">Kick-back</span>
                <span className="sintomoSub">HSR troppo veloce</span>
              </div>
              <h4>La ruota rimbalza violentemente verso l'alto dopo impatti bruschi</h4>
              <p>
                Il kick-back è il sintomo opposto al packing: la sospensione
                si comprime rapidamente (HSC) e si riapre altrettanto rapidamente (HSR)
                — la ruota rimbalza verso l'alto con forza invece di seguire
                il profilo del terreno. Sul posteriore il kick-back si sente
                come un "calcio" del serbatoio verso il basso del pilota;
                sull'anteriore come un rimbalzo del manubrio verso l'alto.
                Su una pista con radici trasversali frequenti il kick-back
                rende il controllo della moto molto difficile — la ruota
                perde contatto dopo ogni radice invece di seguire il terreno.
              </p>
              <p>
                <strong>Fix:</strong> chiudere (irrigidire) l'LSR di 2–3 click.
                Se la forcella dispone di regolazione HSR separata, chiudere
                quella preferenzialmente, lasciando l'LSR più aperto per
                non compromettere il tracking su terreno non impulsivo.
              </p>
            </div>

            <div className="sintomoCard sintomoTuffo">
              <div className="sintomoCardTop">
                <span className="sintomoBadge badgeTuffo">Naso-tuffo / Squat</span>
                <span className="sintomoSub">LSC troppo morbido</span>
              </div>
              <h4>La forcella si immerge troppo in frenata — il posteriore si abbassa in accelerazione</h4>
              <p>
                Il naso-tuffo eccessivo in frenata è la firma di un LSC anteriore
                troppo aperto (o di un SAG troppo alto). La forcella si comprime
                di 60–80 mm sotto la forza frenante progressiva — l'angolo di sterzo
                si apre, l'avancorsa aumenta e la geometria della moto cambia
                sensibilmente. In staccata la moto punta dritta invece di girare.
                Lo squat eccessivo posteriore in accelerazione ha la stessa causa —
                LSC del monoammortizzatore troppo morbido — e genera la moto
                che "affonda" invece di spingersi avanti. Da distinguere dal
                SAG errato: un SAG troppo alto genera body motion anche con
                LSC corretto — correggere sempre il SAG prima di toccare l'idraulica.
              </p>
              <p>
                <strong>Fix:</strong> chiudere il LSC di 2–4 click. Verificare
                prima che il SAG sia corretto — regolare lo smorzamento non
                compensa un SAG sbagliato.
              </p>
            </div>

            <div className="sintomoCard sintomoBottoming">
              <div className="sintomoCardTop">
                <span className="sintomoBadge badgeBottoming">Bottoming</span>
                <span className="sintomoSub">HSC troppo morbido</span>
              </div>
              <h4>La sospensione arriva al fine corsa con un colpo secco su impatti veloci</h4>
              <p>
                Il bottoming si distingue dal fine corsa idraulico per il suono
                e la sensazione: il fine corsa idraulico è progressivo — la sospensione
                rallenta gradualmente negli ultimi 20–30 mm. Il bottoming sul bumper
                è un colpo secco e duro, a volte accompagnato da un suono metallico.
                La causa è HSC insufficiente: la cartuccia non genera abbastanza
                forza resistente ad alta velocità stelo, e la sospensione brucia
                tutta la corsa disponibile prima che l'idraulica riesca a smorzare
                l'impatto. Tipicamente emerge su atterraggi da salto, su dossi
                veloci e su tratti di whoops ad alta velocità. Prima di chiudere
                l'HSC verificare che il livello olio sia corretto — olio basso
                riduce l'efficacia del fine corsa idraulico.
              </p>
              <p>
                <strong>Fix:</strong> chiudere l'HSC di 0,5 giri alla volta.
                Verificare il livello olio. Verificare le condizioni del bumper.
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
              <span className="placeholderText">GIF — simulazione packing: serie di whoops, ogni ciclo compressione/ritorno con LSR lento → la sospensione scende progressivamente</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Packing simulato</span>
            <p>
              Simulazione del packing su una serie di 8 whoops identiche
              con LSR troppo lento (6 click invece di 14): ogni ciclo
              aggiunge 8–12 mm di compressione residua alla precedente.
              All'ottava whoops la forcella ha perso 70 mm di corsa disponibile.
              Con LSR corretto (14 click) la variazione tra prima e ottava
              whoops è sotto i 15 mm — la sospensione lavora sempre
              nella stessa zona di corsa.
            </p>
          </div>
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
            <span className="sectionLabel">Manutenzione e procedure</span>
            <h3>Come monitorare, verificare e mantenere l'efficacia dello smorzamento</h3>
            <p>
              Lo smorzamento non si deteriora improvvisamente — degrada
              gradualmente con l'uso e la temperatura. Saper riconoscere i segnali
              di degrado e sapere quando intervenire è la differenza tra
              una revisione programmata e un guasto durante una sessione.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Smorzamento che peggiora progressivamente nel corso della sessione</h4>
              <p>
                La sospensione funziona bene a inizio sessione poi diventa
                progressivamente più morbida e "aperta". Causa principale:
                fade termico — l'olio si scalda e perde viscosità. Se il fenomeno
                inizia dopo 10–15 minuti, l'olio è degradato o ha un grado
                di viscosità troppo basso per l'uso. Sostituire l'olio
                con un grado superiore (es. da 5W a 7,5W) o con un prodotto
                ad alto VI (Viscosity Index superiore a 150). Verificare
                anche che non ci siano bolle d'aria — l'olio contaminato
                da aria perde efficienza molto prima.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Oscillazioni non smorzate — la sospensione continua a rimbalzare</h4>
              <p>
                Comprimere manualmente la forcella e rilasciarla: deve fare
                0,5–1 oscillazione e fermarsi. Se continua a oscillare 2–3 volte,
                lo smorzamento di ritorno è insufficiente — olio esaurito,
                contaminato o livello basso. Se non rimbalza affatto
                (si apre lentissimamente), il ritorno è bloccato — olio denso
                per temperatura bassa o cartuccia interna danneggiata.
                Questo test (bounce test) è valido anche sul mono posteriore —
                comprimere il retrotreno e rilasciare.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Procedura di conta click — come azzerare e impostare le regolazioni</h4>
              <p>
                Prima di ogni modifica azzerare la regolazione: girare la vite
                IN (senso orario) fino alla chiusura totale, contando i click.
                Quel numero è la posizione attuale. Non stringere eccessivamente
                a fine corsa — solo fino a sentire la resistenza senza forzare.
                Poi aprire (senso antiorario) fino alla posizione desiderata.
                Annotare sempre la posizione baseline su un foglio prima
                di modificarla — permette di tornare al punto di partenza
                se la modifica peggiora le cose. Modificare un solo parametro
                alla volta, testare sullo stesso tratto di riferimento.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Test con O-ring — verificare l'escursione utilizzata e il packing</h4>
              <p>
                Posizionare un O-ring sullo stelo della forcella a contatto
                con la sommità del fodero; uno sull'elemento visibile del mono.
                Dopo una sessione su un percorso specifico, la posizione
                dell'O-ring indica la massima compressione raggiunta.
                Per verificare il packing, eseguire il giro e fermarsi
                senza toccare la moto — l'altezza da terra a sospensioni
                ferme dopo il test deve essere uguale a quella prima del giro.
                Se la moto si è abbassata di 10–20 mm il packing è confermato.
                Regolare LSR e ripetere fino a quando l'altezza è stabile.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Cambio olio forcella — 20–40 ore di utilizzo effettivo</h4>
              <p>
                L'olio della forcella si degrada per ossidazione, contaminazione
                con particelle metalliche e rottura delle catene molecolari
                per stress termico. Le forcelle da cross/enduro lavorano molto
                più intensamente di quelle stradali — intervallo consigliato
                20–30 ore nel fuoristrada intenso, 30–40 ore nel misto.
                Il livello olio si verifica con l'asta di misura con la forcella
                completamente compressa e la molla estratta — seguire le specifiche
                del costruttore per la misura in mm dalla sommità del fodero.
                Un livello errato di 10 mm cambia significativamente l'efficacia
                del fine corsa idraulico.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Revisione monoammortizzatore — 30–60 ore, prima su moto da fuoristrada</h4>
              <p>
                Il monoammortizzatore lavora con temperature più elevate rispetto
                alla forcella (meno massa termica, posizione più esposta al calore
                del motore). L'olio si degrada più velocemente e il gas azoto
                nella camera separata perde pressione nel tempo — la perdita
                di pressione gas riduce la forza di estensione e permette
                la cavitazione dell'olio. Verificare la pressione del gas
                ad ogni revisione (tipicamente 10–15 bar). Un mono con gas
                scarico si sente: ritorno lento e irregolare, sensazione
                di smorzamento inconsistente.
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
            <span className="cardTag">Molla vs smorzatore</span>
            <h3>Due sistemi con ruoli opposti — non si sostituiscono a vicenda</h3>
            <p>
              La molla è un sistema conservativo: accumula energia durante
              la compressione e la restituisce esattamente uguale durante
              l'estensione. Non dissipa nulla — senza smorzatore, la moto
              oscillerebbe all'infinito dopo ogni buca. Lo smorzatore è
              dissipativo: converte l'energia cinetica in calore attraverso
              l'olio. Questo significa che irrigidire lo smorzamento
              (chiudere LSC) non aumenta il carico di molla — la forza
              massima sulla molla è determinata dalla corsa e dal tasso,
              non dall'idraulica. E viceversa: montare una molla più dura
              non compensa uno smorzatore usurato — la molla tornerà
              sempre più in fretta, con più forza, qualunque sia il suo tasso.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Metodo di regolazione</span>
            <h3>Un parametro alla volta — su un tratto di riferimento noto</h3>
            <p>
              La regola d'oro del settaggio sospensioni è modificare un solo
              parametro per volta, testare sempre sullo stesso tratto di percorso
              (lo stesso specchio d'acqua, lo stesso tratto di whoops, la stessa
              curva), fare incrementi piccoli (2–4 click), annotare tutto.
              Cambiare due parametri insieme rende impossibile capire quale
              ha prodotto il cambiamento di comportamento. Partire sempre
              dalla baseline factory — è il punto di riferimento calibrato
              dal costruttore per il pilota medio su quel tipo di terreno.
              Se si va troppo lontano dalla baseline senza miglioramenti,
              il problema non è l'idraulica: è la molla sbagliata o
              il SAG non corretto.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Temperatura e viscosità</span>
            <h3>Perché l'olio freddo smorza diversamente da quello caldo — e come compensare</h3>
            <p>
              Un olio classificato 5W ha viscosità cinematica di circa 32 cSt
              a 40°C e 8–10 cSt a 100°C — una variazione del 70%. Il Viscosity
              Index (VI) misura quanto la viscosità varia con la temperatura:
              VI 100 è un olio convenzionale, VI 160+ è un olio sintetico
              con additivi VI improver. Per l'uso fuoristrada, preferire
              oli con VI superiore a 140 garantisce che lo smorzamento rimanga
              coerente dal momento in cui si scende dalla moto nella mattina
              fredda al termine della sessione estiva. Nei climi molto caldi
              (35°C+) considerare un grado superiore (7,5W invece di 5W):
              la sospensione partirà leggermente più rigida a freddo ma
              manterrà le caratteristiche nel corso della sessione.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default CompressioneRitornoRegolazioni;
