import "./olioFreni.scss";
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

const OlioFreni = () => {
  return (
    <section className="olioFreni" id="olioFreni">
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
              Sistema frenante — Fluido idraulico
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              L'olio freni — chimica, classificazione DOT e degrado nel tempo
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il fluido freni non è solo un mezzo di trasmissione della pressione —
              è un composto chimico precisamente formulato per resistere a temperature
              estreme, mantenere proprietà stabili in un range termico ampio e, nel caso
              dei fluidi glicol-basati, assorbire l'umidità prima che questa possa
              accumularsi in forma liquida nei punti freddi del circuito. La classificazione
              DOT del Dipartimento dei Trasporti americano definisce i requisiti minimi
              di punto di ebollizione secco e umido, viscosità a bassa temperatura
              e compatibilità con le guarnizioni in gomma EPDM standard.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il nemico invisibile del fluido freni è l'umidità atmosferica. Tutti i fluidi
              glicol-basati (DOT 3, 4, 5.1) sono igroscopici per progetto: assorbono
              acqua dall'aria attraverso la membrana del serbatoio e la permeazione
              del tubo flessibile. Un DOT 4 nuovo ha un punto di ebollizione secco
              minimo di 230 °C. Con il 3,7% di acqua in peso — il parametro del test
              "umido" — scende a 155 °C. Quella differenza di 75 °C è la ragione
              per cui il fluido va sostituito periodicamente,
              indipendentemente dall'aspetto e dalla frequenza di utilizzo.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Quattro concetti fondamentali</span>
              <h3>Ebollizione, igroscopicità, viscosità e compatibilità</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Punto di ebollizione secco (Dry Boiling Point) — misurato
                  sul fluido nuovo senza umidità; DOT 4 minimo 230 °C,
                  DOT 5.1 minimo 260 °C; il valore di targa, mai raggiungibile
                  dopo i primi mesi di utilizzo in condizioni reali
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Punto di ebollizione umido (Wet Boiling Point) — misurato
                  con il 3,7% di acqua in peso; il valore realistico dopo
                  alcuni mesi; DOT 4 minimo 155 °C, DOT 5.1 minimo 180 °C;
                  questo è il numero che conta per la sicurezza reale
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Igroscopicità — la proprietà dei fluidi glicol-basati
                  di assorbire umidità dall'atmosfera; inevitabile, solo
                  rallentabile; il tasso di assorbimento dipende dall'umidità
                  ambientale, dalla qualità del diaframma del serbatoio
                  e dalla permeabilità del tubo flessibile
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Vapor lock — quando il fluido raggiunge il punto di ebollizione
                  le bolle di vapore sostituiscono il liquido nella camera della pompa;
                  il vapore è comprimibile → la leva non trasmette pressione →
                  il freno sparisce; il fenomeno più pericoloso nell'impianto frenante
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
              <span className="placeholderText">Grafico comparativo — punti di ebollizione secco e umido per DOT 3 / DOT 4 / DOT 5.1 / DOT 5; evidenziare la zona di rischio vapor lock per le diverse discipline</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Boiling point comparison</span>
            <p>
              Confronto tra i punti di ebollizione secco e umido delle quattro
              classificazioni DOT. La colonna "umido" è quella che conta:
              rappresenta le prestazioni reali dopo che il fluido ha assorbito
              umidità per mesi o anni. Un DOT 4 vecchio di due stagioni senza
              sostituzione ha un punto di ebollizione umido che può essere
              sceso sotto i 140 °C — territorio di rischio per qualsiasi
              uso che non sia il tragitto casa-lavoro su piano.
            </p>
          </div>
        </motion.div>

        {/* ── FISICA E CHIMICA BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="fisicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="fisicaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Chimica del fluido frenante</span>
            <h3>Vapor lock, igroscopicità, viscosità e fluidi minerali — la base chimica per ogni scelta</h3>
            <p>
              Quattro fenomeni chimici e fisici determinano il comportamento
              del fluido freni in condizioni reali. Conoscerli permette di
              scegliere il fluido corretto per la disciplina, di capire
              perché va cambiato prima di quanto sembri necessario
              e di non fare errori di compatibilità che possono distruggere
              le guarnizioni dell'impianto in poche ore.
            </p>
          </motion.div>

          <motion.div className="fisicaGrid" variants={cardVariants}>

            <div className="fisicaCard">
              <span className="fisicaIdx">01</span>
              <h4>Il vapor lock — perché il freno sparisce durante la frenata intensa</h4>
              <p>
                Il vapor lock si manifesta quando il fluido nel circuito raggiunge
                il punto di ebollizione e forma bolle di vapore. Il fluido liquido
                è incomprimibile — è questa proprietà che trasmette la pressione
                dalla pompa alla pinza. Il vapore, invece, è comprimibile: quando
                il pistone della pompa avanza incontra vapore invece di liquido,
                lo comprime senza generare pressione significativa sulla pinza.
                Il risultato è una leva che va al manubrio senza opporre resistenza
                e senza frenare. I dischi possono raggiungere 300–400 °C in frenata
                intensa; il fluido nelle tubazioni vicino alla pinza raggiunge
                temperature di 150–200 °C. Un DOT 4 con due anni di utilizzo
                e umidità assorbita ha un punto di ebollizione umido che può
                essere già sceso a 145–150 °C — pericolosamente vicino.
              </p>
            </div>

            <div className="fisicaCard">
              <span className="fisicaIdx">02</span>
              <h4>Igroscopicità — l'assorbimento d'acqua inevitabile</h4>
              <p>
                I fluidi glicol-basati (DOT 3, 4, 5.1) sono igroscopici per progetto:
                assorbono l'acqua dall'atmosfera perché è preferibile avere l'umidità
                disciolta nel fluido piuttosto che raccolta in gocce nei punti freddi
                del circuito — dove potrebbe congelare o causare corrosione localizzata.
                L'assorbimento avviene su due percorsi: attraverso il diaframma
                in gomma del serbatoio (anche quando è ben chiuso) e per permeazione
                attraverso le pareti del tubo flessibile in nylon o gomma.
                Il tasso di assorbimento è circa 1–2% in peso per anno in condizioni
                di umidità media, più rapidamente in ambienti umidi o dopo immersioni
                in fango e acqua. Non è possibile "eliminare" l'assorbimento —
                si può solo rallentarlo usando tubi in acciaio intrecciato
                (meno permeabili del nylon) e sostituendo il fluido regolarmente.
              </p>
            </div>

            <div className="fisicaCard">
              <span className="fisicaIdx">03</span>
              <h4>Viscosità e temperatura — perché la leva cambia feeling con il freddo</h4>
              <p>
                La viscosità cinematica del fluido DOT non è costante: varia
                enormemente con la temperatura. Un DOT 4 a 40 °C ha una viscosità
                di 4–16 mm²/s (molto scorrevole); a −40 °C la stessa specifica
                impone un massimo di 1800 mm²/s — quasi 300 volte più viscoso.
                In pratica: nella prima frenata di una mattina invernale fredda
                il fluido scorre con più difficoltà attraverso i piccoli orifizi
                del circuito, la leva risponde con meno prontezza e il feedback
                è leggermente attutito. Il DOT 5.1 ha requisiti di viscosità
                a bassa temperatura più restrittivi rispetto al DOT 4 proprio
                per garantire prestazioni migliori al freddo — motivo per cui
                è preferito in sistemi ABS moderni dove la viscosità influenza
                la risposta dell'attuatore idraulico, e per enduro in alta quota
                dove le temperature mattutine sono significativamente basse.
              </p>
            </div>

            <div className="fisicaCard">
              <span className="fisicaIdx">04</span>
              <h4>Fluidi minerali vs DOT — l'incompatibilità che distrugge le guarnizioni</h4>
              <p>
                Alcuni sistemi idraulici (Magura HC per frizione idraulica,
                alcune pinze Shimano per bici) usano olio minerale invece
                del fluido DOT glicol-basato. L'olio minerale non è igroscopico —
                non assorbe l'umidità — ma l'acqua che eventualmente entra
                nel sistema non si dissolve: si raccoglie nei punti bassi del circuito.
                L'incompatibilità chimica è critica: le guarnizioni EPDM standard
                dei sistemi DOT si gonfiano e si deteriorano a contatto con
                l'olio minerale nel giro di ore. Viceversa, il fluido DOT danneggia
                le guarnizioni dei sistemi minerali con uguale rapidità.
                Identificazione: i serbatoi Magura sono etichettati "Magura Blood"
                (olio minerale rosso); non aggiungere mai DOT in un sistema
                Magura e non aggiungere olio minerale in un sistema DOT standard.
                Il DOT 5 (silicone, viola) è anch'esso chimicamente incompatibile
                con DOT 3/4/5.1 e con l'olio minerale — trattato nella sezione DOT 5.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── DOT BLOCK ────────────────────────────────────────────────────── */}
        <motion.div
          className="dotBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="dotHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Classificazione DOT</span>
            <h3>DOT 3 · DOT 4 · DOT 5.1 · DOT 5 — specifiche, chimica e quando usarli</h3>
            <p>
              La classificazione DOT (Department of Transportation, Federal Motor
              Vehicle Safety Standard 116) definisce i requisiti minimi di boiling point
              secco e umido, viscosità a bassa temperatura e compatibilità chimica.
              Non tutte le classificazioni sono equivalenti, non sono tutte compatibili
              tra loro e la differenza tra DOT 4 e DOT 5 non è una questione di grado —
              sono chimicamente incompatibili.
            </p>
          </motion.div>

          <motion.div className="dotGrid" variants={cardVariants}>

            <div className="dotCard dotTre">
              <div className="dotCardTop">
                <span className="dotBadge badgeDOT3">DOT 3</span>
                <span className="dotSub">Glicol etere · base minima</span>
              </div>
              <div className="dotSpecs">
                <span className="dotSpec">Secco: min 205 °C</span>
                <span className="dotSpec">Umido: min 140 °C</span>
              </div>
              <h4>Il minimo di legge — insufficiente per qualsiasi uso dinamico</h4>
              <p>
                Il DOT 3 è la classificazione base, concepita per automobili
                di uso urbano leggero. Un punto di ebollizione umido di 140 °C
                è troppo vicino alle temperature raggiungibili anche in frenate
                normali su una moto: discese di montagna, frenate ripetute
                in pista urbana, qualsiasi sessione fuoristrada intensa possono
                avvicinare il fluido al suo limite. Il DOT 3 è chimicamente
                compatibile con DOT 4 e 5.1 (stessa famiglia glicol-eterica,
                stesse guarnizioni EPDM) e si può sostituire con DOT 4
                o 5.1 in qualsiasi sistema progettato per DOT 3, ottenendo
                subito un margine di sicurezza molto maggiore. Evitare
                completamente per moto da cross, enduro, motard e
                qualsiasi uso non strettamente stradale a bassa intensità.
              </p>
            </div>

            <div className="dotCard dotQuattro">
              <div className="dotCardTop">
                <span className="dotBadge badgeDOT4">DOT 4</span>
                <span className="dotSub">Borato estere + glicol · standard moto</span>
              </div>
              <div className="dotSpecs">
                <span className="dotSpec">Secco: min 230 °C</span>
                <span className="dotSpec">Umido: min 155 °C</span>
              </div>
              <h4>Lo standard universale — ampiamente sovraperformato dai prodotti quality</h4>
              <p>
                Il DOT 4 è il fluido standard per la maggior parte delle moto
                moderne, incluse tutte le 2T cross, enduro e stradali. I valori
                minimi della specifica (230 °C secco / 155 °C umido) sono le
                soglie di omologazione: i prodotti di qualità le superano
                significativamente. Motul RBF 600 (DOT 4): 312 °C secco, 216 °C umido.
                Brembo Racing LV (DOT 4): 290 °C secco, 190 °C umido. Castrol React
                SRF (oltre specifica DOT 4): 320 °C secco, 270 °C umido.
                La scelta di un DOT 4 di qualità per cross ed enduro offre margini
                termici equivalenti al DOT 5.1 standard ad un costo inferiore.
                La sigla "Super DOT 4" o "Racing" non è una classificazione ufficiale —
                verificare sempre i valori di boiling point dichiarati dal produttore,
                non il nome commerciale.
              </p>
            </div>

            <div className="dotCard dotCinquePunto1">
              <div className="dotCardTop">
                <span className="dotBadge badgeDOT51">DOT 5.1</span>
                <span className="dotSub">Glicol etere avanzato · alta performance</span>
              </div>
              <div className="dotSpecs">
                <span className="dotSpec">Secco: min 260 °C</span>
                <span className="dotSpec">Umido: min 180 °C</span>
              </div>
              <h4>Boiling point più alto e viscosità inferiore — il riferimento per pista e hard enduro</h4>
              <p>
                Il DOT 5.1 è chimicamente della stessa famiglia del DOT 4
                (glicol-etere, non silicone — il numero 5 non indica la stessa
                chimica del DOT 5 silicone) ed è completamente compatibile
                con DOT 3 e 4 in termini di guarnizioni e miscibilità.
                Rispetto al DOT 4 standard offre un punto di ebollizione
                umido minimo superiore di 25 °C (180 vs 155) e una viscosità
                a bassa temperatura più bassa — requisito importante per i sistemi ABS.
                Indicato per: motard racing con frenate intense e ripetute,
                hard enduro con lunghe discese, qualsiasi uso dove il fluido
                è soggetto a riscaldamento prolungato. È igroscopico come
                il DOT 4: la sostituzione periodica è comunque necessaria,
                e un DOT 5.1 vecchio può scendere sotto il wet boiling point
                di un DOT 4 fresco.
              </p>
            </div>

            <div className="dotCard dotCinque">
              <div className="dotCardTop">
                <span className="dotBadge badgeDOT5">DOT 5</span>
                <span className="dotSub">Silicone · chimicamente incompatibile</span>
              </div>
              <div className="dotSpecs">
                <span className="dotSpec">Secco: min 260 °C</span>
                <span className="dotSpec">Umido: min 180 °C</span>
              </div>
              <h4>NON igroscopico, NON compatibile — usato in veicoli militari, sconsigliato per moto da corsa</h4>
              <p>
                Il DOT 5 ha gli stessi boiling point del 5.1 ma è a base
                di polisilossano (silicone) invece che di glicol-etere.
                Non è igroscopico: l'acqua non si dissolve nel silicone
                ma si separa e si raccoglie nei punti bassi del circuito
                come gocce discrete — dove può causare corrosione puntuale
                e, in condizioni invernali, congelare bloccando il circuito.
                Il DOT 5 è riconoscibile dal colore viola/blu ed è INCOMPATIBILE
                con qualsiasi altra classificazione DOT: mescolare DOT 5
                con DOT 4 in qualsiasi proporzione produce una miscela
                con proprietà imprevedibili. Le guarnizioni EPDM standard
                possono rigonfiare a contatto con il silicone. Primariamente
                usato nei veicoli militari americani per motivi di stoccaggio
                (nessun degrado da umidità durante lunghe giacenze).
                NON raccomandato per moto — usare DOT 4 o 5.1.
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
            <span className="sectionLabel">Fluido per disciplina</span>
            <h3>Cross, enduro, motard e sportiva — quale DOT scegliere e ogni quanto cambiarlo</h3>
            <p>
              La scelta del fluido dipende dalle temperature che il circuito
              raggiunge nella disciplina specifica e dalla frequenza d'uso.
              Una regola generale: più la frenata è intensa e ripetuta,
              più alto deve essere il wet boiling point del fluido montato
              — non quello scritto sulla confezione (dry), ma quello misurato
              dopo i mesi di utilizzo reale (wet).
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>

            <div className="tipCard tipCross">
              <div className="tipCardTop">
                <span className="tipBadge badgeCross">Cross — MX</span>
                <span className="tipSub">DOT 4 quality · 1 stagione</span>
              </div>
              <h4>Frenata moderata ma improvvisa — il fluido si degrada per umidità più che per calore</h4>
              <p>
                Nel cross il freno anteriore viene usato raramente al massimo
                della capacità — il terreno non compatto limita la forza frenante
                possibile prima del bloccaggio. Le temperature del circuito sono
                moderate rispetto a una pista asfaltata. Il degrado principale
                non è termico ma legato all'umidità: le moto da cross vivono
                in condizioni ambientali variabili, vengono lavate frequentemente
                (acqua attorno ai serbatoi) e il fluido assorbe umidità
                più rapidamente che in condizioni stradali standard.
                Raccomandato: DOT 4 di qualità (Motul RBF 600, Brembo LV o equivalente).
                Intervallo: ogni stagione o ogni 12 mesi, anticipato se il fluido
                è visibilmente scurito. Il freno posteriore su alcune moto da cross
                è usato intensamente — includere anche il circuito posteriore
                nel piano di sostituzione.
              </p>
            </div>

            <div className="tipCard tipEnduro">
              <div className="tipCardTop">
                <span className="tipBadge badgeEnduro">Enduro</span>
                <span className="tipSub">DOT 4 / 5.1 · 1 stagione</span>
              </div>
              <h4>Discese lunghe e immersioni — temperature variabili e contaminazione esterna</h4>
              <p>
                L'enduro combina due fattori di rischio: le lunghe discese
                di montagna con frenate ripetute che portano le temperature
                vicino al limite, e le condizioni ambientali estreme (fango,
                acqua, escursione termica) che accelerano l'assorbimento di umidità.
                Per hard enduro e gare con sezioni di discesa prolungate,
                il DOT 5.1 offre il margine di sicurezza aggiuntivo necessario
                (wet BP minimo 180 °C vs 155 °C del DOT 4 standard).
                Per enduro misto e trail, un DOT 4 di qualità è sufficiente.
                Intervallo: ogni stagione senza eccezioni — l'esposizione
                all'acqua durante i guadi accelera l'assorbimento molto più
                del normale. Verificare sempre anche il circuito della frizione
                idraulica (sezione Pompa) se presente — stessa frequenza,
                stessa qualità di fluido.
              </p>
            </div>

            <div className="tipCard tipMotard">
              <div className="tipCardTop">
                <span className="tipBadge badgeMotard">Motard</span>
                <span className="tipSub">DOT 5.1 o DOT 4 racing · 6 mesi / pista</span>
              </div>
              <h4>Temperature elevate e frenate ripetute — il contesto più critico per il fluido</h4>
              <p>
                Il motard è il contesto in cui il fluido freni lavora nelle
                condizioni più severe tra le discipline 2T: l'asfalto garantisce
                grip elevato, le frenate sono intense e si ripetono ad ogni curva,
                e le sessioni in pista possono durare 20–30 minuti consecutivi
                senza soste significative. I dischi raggiungono 300–400 °C;
                la temperatura del fluido nelle tubazioni vicino alla pinza
                può superare i 180 °C nei momenti di picco. Un DOT 4 standard
                con wet BP di 155 °C è al limite. Raccomandato: DOT 5.1
                o un DOT 4 racing con wet BP dichiarato superiore a 200 °C
                (Motul RBF 660, Castrol React SRF).
                Intervallo: ogni stagione per uso occasionale; ogni 6 mesi
                o ogni 3–4 giornate di pista intense per uso regolare.
                Non aspettare i sintomi — il fluido cambia prima che
                il vapor lock si manifesti, non dopo.
              </p>
            </div>

            <div className="tipCard tipSportiva">
              <div className="tipCardTop">
                <span className="tipBadge badgeSportiva">Sportiva / Stradale 2T</span>
                <span className="tipSub">DOT 4 standard · 2 anni / ogni revisione</span>
              </div>
              <h4>Uso stradale — il rischio principale è l'invecchiamento, non il calore</h4>
              <p>
                Le 2T stradali (RS 125, NSR 125, TZR, Aprilia RS) montano
                impianti frenanti proporzionati all'uso stradale — le temperature
                raggiunte in guida normale sono ben al di sotto dei limiti
                del DOT 4. Il rischio principale non è il vapor lock
                ma l'invecchiamento del fluido: molte moto d'epoca o semi-recenti
                hanno fluido originale di fabbrica mai sostituito, con acqua
                assorbita per anni e colore quasi nero. Raccomandato: DOT 4
                standard (le opzioni quality sono un bonus, non una necessità
                per uso stradale normale). Intervallo: ogni 2 anni o ad ogni
                revisione programmata — anticipare sempre prima di qualsiasi
                uso in pista o su strade di montagna impegnative.
                Prima di usare una 2T d'epoca in modo dinamico: sostituire
                il fluido come prima operazione, prima ancora di controllare
                l'impianto frenante meccanico.
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
            <span className="captionTag">Degradazione nel tempo</span>
            <p>
              Curva di degrado del wet boiling point di un DOT 4 standard
              nel tempo: a 0 mesi il valore è vicino al dry BP (230 °C+);
              a 6 mesi è già sceso a ~185 °C con uso normale; a 12 mesi
              è intorno a 165 °C; a 24 mesi può essere sotto i 155 °C
              (il minimo di specifica). Con uso intenso o alta umidità
              ambientale la curva scende più rapidamente. Non è possibile
              invertire la curva — solo sostituire il fluido.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Grafico — curva degrado wet boiling point nel tempo per DOT 4 (mesi di utilizzo vs °C); linea di pericolo vapor lock evidenziata; confronto uso normale vs uso intenso</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── VERIFICA CONDIZIONE BLOCK ────────────────────────────────────── */}
        <motion.div
          className="verificaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="verificaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi dello stato del fluido</span>
            <h3>Come sapere quando cambiare — colore, strisce reattive e test in campo</h3>
            <p>
              Non aspettare i sintomi del vapor lock per decidere di cambiare
              il fluido: a quel punto si è già in pista senza freni. Questi metodi
              permettono di valutare lo stato del fluido prima che il problema
              si manifesti — dalla semplice ispezione visiva alle strisce
              reattive professionali.
            </p>
          </motion.div>

          <motion.div className="verificaGrid" variants={cardVariants}>

            <div className="verificaCard">
              <span className="verificaBadge badgeVisivo">Visivo</span>
              <h4>Colore del fluido — il primo indicatore rapido</h4>
              <p>
                Aprire il serbatoio della pompa con un panno protettivo
                sotto (il fluido DOT attacca le vernici in pochi minuti)
                e osservare il colore alla luce. Un fluido fresco è quasi
                trasparente, con una leggera sfumatura ambra chiara.
                Con l'invecchiamento diventa progressivamente più scuro:
                ambra medio → ambra scuro → marrone → quasi nero.
                Il colore scuro indica ossidazione del fluido e presenza
                di particelle di gomma dalle guarnizioni e di particelle
                metalliche dal circuito. Un fluido quasi nero va sostituito
                immediatamente, indipendentemente dall'età dichiarata.
                Attenzione: il DOT 5 silicone è viola/blu per definizione —
                non confondere il colore intenzionale con la contaminazione.
              </p>
            </div>

            <div className="verificaCard">
              <span className="verificaBadge badgeStrisce">Test strisce</span>
              <h4>Strisce reattive — misura semi-quantitativa del contenuto d'acqua</h4>
              <p>
                Le strisce reattive per fluido freni (disponibili da ATE,
                Ferodo, Meijer e altri) misurano il contenuto di borati
                nel fluido, che si riduce proporzionalmente all'assorbimento
                di umidità. Il test è semplice: immergere la striscia nel
                serbatoio per 1 secondo, estrarre e attendere 1 minuto,
                confrontare il colore con la scala sulla confezione.
                La maggior parte delle strisce usa tre livelli:
                verde (fluido OK, meno di ~1,5% acqua in peso),
                giallo (margine, 1,5–3%), rosso (sostituire, oltre 3%).
                Non sono accurate come un test di laboratorio a refrazione,
                ma sono uno strumento pratico per una valutazione rapida.
                Funzionano solo su fluidi glicol-basati (DOT 3, 4, 5.1) —
                non su DOT 5 silicone né su olio minerale.
              </p>
            </div>

            <div className="verificaCard">
              <span className="verificaBadge badgeCampo">Campo</span>
              <h4>Il test della leva a caldo — diagnosi del vapor lock in avvicinamento</h4>
              <p>
                Dopo una sessione di frenata intensa (una discesa di montagna,
                un giro di pista in condizioni limite), verificare immediatamente
                il feeling della leva mentre il sistema è ancora caldo.
                Un fluido in buone condizioni mantiene la leva ferma e
                con la stessa resistenza che aveva a freddo. Se la leva
                richiede più corsa del normale o se il feeling è diventato
                leggermente spugnoso dopo la sessione e ritorna normale
                quando il sistema si raffredda, il fluido sta avvicinandosi
                al suo limite termico. Non è ancora vapor lock completo —
                ma è il segnale che la sostituzione è urgente. Se si arriva
                a questo punto, evitare l'uso intensivo fino alla sostituzione.
              </p>
            </div>

            <div className="verificaCard">
              <span className="verificaBadge badgeIntervallo">Intervallo</span>
              <h4>Cambiare prima del sintomo — la logica dell'intervallo preventivo</h4>
              <p>
                Il fluido freni va cambiato secondo un calendario preventivo,
                non in risposta ai sintomi. Quando i sintomi compaiono (vapor lock,
                leva spugnosa in caldo) si è già fuori dalla finestra di sicurezza.
                Come linea guida pratica: uso stradale normale → ogni 2 anni;
                fuoristrada regolare → ogni stagione; uso in pista → ogni 6 mesi
                o ogni 3–4 giornate intense. Il costo di un cambio fluido
                completo (freno anteriore + posteriore) è nell'ordine di 20–40 €
                di materiali e un'ora di lavoro — inclusa la procedura di spurgo
                trattata nella sezione 06. Non esiste manutenzione a miglior
                rapporto costo/sicurezza nell'impianto frenante.
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
              <span className="placeholderText">Foto comparativa — campioni di fluido a vari stadi: nuovo (chiaro), 6 mesi (ambra), 1 anno (scuro), 2 anni (quasi nero); strisce reattive a fianco con colori corrispondenti</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Invecchiamento visivo</span>
            <p>
              Campioni di DOT 4 allo stesso volume a intervalli di utilizzo
              crescenti. Il colore non è proporzionale alle prestazioni
              in modo perfettamente lineare — un fluido può apparire ambra
              scuro e avere ancora un wet boiling point accettabile, o
              apparire relativamente chiaro ma avere già assorbito umidità
              sufficiente a ridurre significativamente il punto di ebollizione.
              La striscia reattiva è sempre più affidabile del solo colore.
            </p>
          </div>
        </motion.div>

        {/* ── USURA & SICUREZZA BLOCK ──────────────────────────────────────── */}
        <motion.div
          className="usuraBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="usuraHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e sicurezza</span>
            <h3>Sintomi da riconoscere, misure da fare e intervalli da rispettare</h3>
            <p>
              I problemi del fluido freni sono silenziosi fino al momento
              critico. Questi segnali permettono di anticipare il guasto
              e di pianificare la sostituzione prima che diventi urgente in pista.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Leva progressivamente più lunga durante una sessione intensa</h4>
              <p>
                La leva richiede sempre più corsa per generare la stessa forza
                frenante man mano che la sessione avanza e i freni si scaldano.
                A riposo, quando il sistema si raffredda, il feeling torna normale.
                È il segnale classico del vapor lock in avvicinamento: le prime
                micro-bolle di vapore si formano nel fluido caldo e aumentano
                la comprimibilità del circuito. Interrompere l'uso intensivo
                e pianificare la sostituzione del fluido prima della sessione
                successiva. Non è ancora un'emergenza, ma lo diventerà.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Leva spugnosa anche a freddo — aria nel circuito, non fluido degradato</h4>
              <p>
                Una leva spugnosa a sistema freddo non è un problema del fluido
                ma di aria nel circuito idraulico. L'aria, come il vapore, è
                comprimibile: il pistone della pompa comprime l'aria invece
                di trasmettere pressione alla pinza. Cause: spurgo incompleto
                dopo una revisione, guarnizione della pompa o della pinza
                che introduce aria, livello fluido sotto il minimo con ingresso
                d'aria dal serbatoio. La soluzione è uno spurgo completo
                del circuito (trattato nella sezione 06), non la semplice
                sostituzione del fluido.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Fluido quasi nero o con sedimento sul fondo del serbatoio</h4>
              <p>
                Il sedimento sul fondo del serbatoio indica la presenza
                di particelle solide nel circuito: frammenti di guarnizioni
                degradate, particelle metalliche dai pistoncini o dalla pinza,
                residui di ossidazione del fluido stesso. Un fluido in queste
                condizioni va sostituito immediatamente, e durante la procedura
                di spurgo è necessario pulire accuratamente il serbatoio
                e verificare le condizioni delle guarnizioni della pompa
                e della pinza — le particelle solide accelerano il degrado
                delle guarnizioni e possono occludere i fori compensatori.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Test strisce reattive — effettuare prima di ogni stagione o uso intensivo</h4>
              <p>
                Acquistare un set di strisce reattive (ATE, Ferodo) e eseguire
                il test a inizio stagione e ogni 6 mesi per uso regolare.
                Il test è distruttivo nel senso che richiede l'apertura del
                serbatoio: proteggere sempre le superfici verniciate con un panno
                prima di aprire. Eseguire il test a temperatura ambiente
                (non immediatamente dopo l'uso — la temperatura alta può alterare
                il colore). Annotare il risultato e la data: questo crea uno storico
                della velocità di degrado del fluido nel proprio impianto specifico,
                utile per affinare gli intervalli di sostituzione.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Verifica compatibilità fluido — prima di aggiungere o sostituire</h4>
              <p>
                Prima di aggiungere o sostituire il fluido verificare sempre
                la classificazione indicata sul serbatoio della pompa o nel manuale
                di manutenzione. Aggiungere DOT 5.1 in un sistema DOT 4 è sicuro
                (stessa famiglia chimica, wet BP più alto è sempre meglio).
                Aggiungere DOT 4 in un sistema contrassegnato per olio minerale
                (Magura, alcuni sistemi frizione idraulica) distrugge le guarnizioni.
                Aggiungere DOT 5 silicone in qualsiasi sistema DOT glicol-basato
                è incompatibile. In caso di dubbio: non aggiungere nulla e
                procedere con la sostituzione completa dopo aver identificato
                con certezza il fluido già presente nel circuito.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Sostituzione completa — non il rabbocco, la sostituzione</h4>
              <p>
                Rabboccare il serbatoio con fluido nuovo quando il livello
                scende non sostituisce il fluido nel circuito — aggiunge una
                piccola quantità di fluido fresco a quello vecchio degradato
                già presente nelle tubazioni, nella pinza e nella pompa.
                La sostituzione efficace richiede di far scorrere fluido
                nuovo attraverso l'intero circuito fino a quando il fluido
                che esce dal nipple di spurgo della pinza è limpido e con
                le caratteristiche del prodotto nuovo. Questa è la procedura
                di spurgo con sostituzione fluido, trattata in dettaglio
                nella sezione 06.
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
            <span className="cardTag">Compatibilità DOT</span>
            <h3>DOT 3 + 4 + 5.1 sono miscibili — DOT 5 non si mischia con nessuno</h3>
            <p>
              I fluidi DOT 3, 4 e 5.1 condividono la stessa base chimica
              glicol-eterica e sono completamente compatibili e miscibili
              tra loro — si possono aggiungere l'uno all'altro senza danneggiare
              guarnizioni o componenti. Usare sempre il grado più alto in un
              impianto: aggiungere DOT 5.1 a un sistema DOT 4 migliora
              le prestazioni; il contrario le peggiora. Il DOT 5 silicone
              è chimicamente incompatibile con tutti gli altri — non miscelarlo
              mai. Per identificare il DOT 5 nel circuito: è viola/blu,
              non si miscela con l'acqua e tende a stratificarsi
              se misto ad altri fluidi glicol-basati.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Attenzione vernice</span>
            <h3>Il fluido DOT attacca la vernice acrilica in pochi minuti</h3>
            <p>
              I fluidi glicol-basati (DOT 3, 4, 5.1) sono aggressivi sulle
              vernici acriliche e poliuretaniche che rivestono carene, telai
              e componenti in plastica. Una goccia di fluido non rimossa
              in meno di 2–3 minuti inizia a intaccare lo strato di vernice.
              Prima di aprire qualsiasi serbatoio o eseguire operazioni
              sull'impianto, proteggere sempre le superfici circostanti
              con panni o carta assorbente. In caso di contatto accidentale:
              lavare immediatamente e abbondantemente con acqua.
              Il DOT 5 silicone e gli oli minerali sono paint-safe —
              un vantaggio pratico di quei sistemi per le operazioni di manutenzione,
              ma non sufficiente a giustificarne l'uso in sistemi progettati per DOT.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo</span>
            <h3>Il fluido — le sezioni adiacenti completano il quadro dell'impianto</h3>
            <p>
              Questo capitolo copre il fluido freni: classificazione DOT,
              chimica, scelta per disciplina e diagnosi dello stato.
              La pompa del freno che genera la pressione è trattata nella sezione 01.
              La pinza e i pistoncini che convertono la pressione in forza
              sulle pastiglie sono nella sezione 02. Il disco, le pastiglie
              e la gestione del calore sono nella sezione 03. La differenza
              tra montaggio radiale e assiale della pompa (che cambia il feeling
              della leva, non il fluido) è nella sezione 05. La procedura
              completa di spurgo e sostituzione fluido — come far uscire
              tutta l'aria e tutto il fluido vecchio dal circuito —
              è nella sezione 06.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default OlioFreni;
