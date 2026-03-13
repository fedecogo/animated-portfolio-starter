import "./escursione.scss";
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

const Escursione = () => {
  return (
    <section className="escursione" id="escursione">
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
              Sospensioni — Corsa e geometria
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              L'escursione delle sospensioni
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              L'escursione è la corsa totale disponibile alla sospensione —
              la distanza che la ruota può percorrere tra la posizione di
              piena estensione e il fine corsa meccanico. Non è un semplice
              numero tecnico: determina quanto terreno irregolare la moto
              può assorbire senza perdere contatto col suolo, quanto
              l'altezza da terra varia sotto carico e come cambia
              la geometria di sterzo durante la compressione.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              L'escursione totale non coincide con l'escursione utile.
              Con il SAG corretto, la sospensione parte già compressa
              di 25–40 mm rispetto alla posizione di piena estensione —
              quella porzione di corsa è già "usata" staticamente.
              L'escursione disponibile per assorbire ostacoli è la
              differenza tra la corsa totale e il SAG, meno il margine
              da mantenere prima del fine corsa meccanico. Una forcella
              da cross con 310 mm di corsa totale e 28 mm di SAG ha
              circa 250–270 mm di escursione utile in compressione.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia dell'escursione</span>
              <h3>Quattro zone della corsa</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Piena estensione — posizione di riposo a moto sollevata;
                  la sospensione è completamente distesa, il SAG non è ancora
                  applicato; punto di riferimento per la misura della corsa totale
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Posizione di marcia — piena estensione meno il SAG;
                  il punto di partenza reale durante la guida; da qui
                  la sospensione lavora sia in compressione che in estensione
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Fine corsa idraulico — zona finale dove l'idraulica aumenta
                  progressivamente la resistenza per smorzare l'impatto
                  sul fine corsa meccanico; progettata per essere quasi
                  invisibile nella guida normale
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Fine corsa meccanico — il bumper in gomma/poliuretano che
                  impedisce il contatto metallo-metallo; toccarlo significa
                  che l'escursione disponibile è insufficiente per l'uso corrente
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
              <span className="placeholderText">Immagine / GIF — schema corsa sospensione: piena estensione, SAG, escursione utile, fine corsa</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Corsa e SAG</span>
            <p>
              Schema della corsa totale di una forcella da cross (310 mm):
              la zona grigia rappresenta il SAG (28 mm) già usato
              staticamente; la zona verde è l'escursione utile disponibile
              in compressione (circa 260 mm); la zona arancione è la
              zona di fine corsa idraulico (20–25 mm); il bordo rosso
              è il fine corsa meccanico da non toccare mai.
            </p>
          </div>
        </motion.div>

        {/* ── MECCANICA BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="meccanicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="meccanicaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Meccanica dell'escursione</span>
            <h3>Come si misura, come si trasmette e come interagisce con il setup</h3>
            <p>
              L'escursione non è un valore fisso — dipende da come viene
              misurata (ruota o ammortizzatore), dal rapporto del linkage
              e dal SAG impostato. Capire queste relazioni permette di
              interpretare correttamente le specifiche tecniche e di
              prevedere come un cambio di setup modifica la corsa effettiva
              disponibile durante la guida.
            </p>
          </motion.div>

          <motion.div className="meccanicaGrid" variants={cardVariants}>

            <div className="meccanicaCard">
              <span className="meccanicaIdx">01</span>
              <h4>Corsa ruota vs corsa ammortizzatore — il rapporto di trasmissione</h4>
              <p>
                Le specifiche tecniche indicano sempre la corsa alla ruota,
                non la corsa dell'ammortizzatore. Il linkage posteriore
                moltiplica il movimento: per ogni mm di corsa dell'ammortizzatore,
                la ruota si sposta di 1,5–2,5 mm a seconda del rapporto
                di trasmissione (leverage ratio). Un monoammortizzatore
                con 65 mm di corsa su un linkage 3:1 produce 195 mm di
                escursione alla ruota. Per la forcella non c'è moltiplicazione —
                corsa stelo = corsa ruota.
              </p>
            </div>

            <div className="meccanicaCard">
              <span className="meccanicaIdx">02</span>
              <h4>Rising rate — progressività attraverso la geometria del linkage</h4>
              <p>
                Il rapporto di trasmissione del linkage non è costante:
                varia durante la corsa aumentando progressivamente (rising rate).
                All'inizio della corsa il rapporto è più basso — la sospensione
                è più morbida. Verso il fine corsa il rapporto aumenta —
                la sospensione diventa più rigida. Questo permette di avere
                una sospensione compliante per le piccole irregolarità
                e resistente agli impatti violenti, senza dover aumentare
                la rigidità della molla su tutto il range di corsa.
              </p>
            </div>

            <div className="meccanicaCard">
              <span className="meccanicaIdx">03</span>
              <h4>SAG e escursione utile — il compromesso da gestire</h4>
              <p>
                Aumentare il SAG riduce l'escursione utile in compressione
                ma aumenta quella in estensione — la ruota può seguire
                meglio le depressioni del terreno. Ridurre il SAG aumenta
                la corsa in compressione ma irrigidisce il comportamento
                e riduce la capacità di adattamento in estensione.
                Il SAG corretto bilancia i due: nel cross 25–30 mm bilanciano
                le atterraggi (compressione) con il recupero nei salti
                (estensione). Nell'enduro 30–40 mm privilegiano il tracking
                su terreno irregolare.
              </p>
            </div>

            <div className="meccanicaCard">
              <span className="meccanicaIdx">04</span>
              <h4>Fine corsa idraulico e bumper — l'ultima linea di difesa</h4>
              <p>
                Il fine corsa idraulico (hydraulic bottoming cone) è un
                inserto conico all'interno della cartuccia che aumenta
                drasticamente la resistenza negli ultimi 20–30 mm di corsa.
                Il bumper in poliuretano è il fine corsa fisico — toccare
                il bumper regolarmente durante la guida indica che l'escursione
                è insufficiente o che la compressione è troppo morbida
                per l'uso. I bumper si usurano e si comprimono nel tempo —
                ispezionarli ad ogni revisione e sostituirli se deformati.
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
            <span className="sectionLabel">Escursione per disciplina</span>
            <h3>Cross, enduro, motard e sportive — corsa progettata per usi opposti</h3>
            <p>
              L'escursione di una sospensione è la prima scelta di progetto —
              tutto il resto (idraulica, molla, linkage) si costruisce attorno
              a quel valore. Una sportiva stradale con 120 mm di escursione
              anteriore non può essere trasformata in una moto da enduro
              aumentando solo la rigidità — semplicemente non ha la corsa
              per assorbire gli ostacoli che l'enduro affronta.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>

            <div className="tipCard tipCross">
              <div className="tipCardTop">
                <span className="tipBadge badgeCross">Cross — MX</span>
                <span className="tipSub">310 mm ant. — 310–320 mm post.</span>
              </div>
              <h4>Corsa massima — assorbire salti e atterraggi violenti</h4>
              <p>
                Le moto da cross hanno l'escursione più lunga tra tutte
                le categorie: 310 mm anteriore (forcella USD 48 mm)
                e 310–320 mm posteriore alla ruota. Questa corsa serve
                per assorbire gli atterraggi da salti tripli dove il carico
                istantaneo sulla sospensione supera i 5G. Un'escursione
                insufficiente porta a fine corsa meccanico all'atterraggio —
                l'impatto si trasmette direttamente al telaio con rischio
                rottura. SAG anteriore 25–30 mm, posteriore 100–110 mm.
                L'altezza da terra è massima: circa 380–400 mm.
              </p>
            </div>

            <div className="tipCard tipEnduro">
              <div className="tipCardTop">
                <span className="tipBadge badgeEnduro">Enduro</span>
                <span className="tipSub">295–320 mm ant. — 300–330 mm post.</span>
              </div>
              <h4>Corsa lunga e progressiva — terreni tecnici e salti moderati</h4>
              <p>
                Escursione simile al cross ma con geometria del linkage
                più progressiva per gestire meglio i terreni tecnici lenti
                (rocce, radici, passaggi stretti) oltre ai salti. L'enduro
                hard arriva a 320–330 mm posteriori per permettere alla
                ruota di seguire il terreno estremo senza perdere contatto.
                SAG posteriore 100–115 mm per massimizzare il tracking.
                L'altezza da terra elevata (350–380 mm) è necessaria
                per passare sopra gli ostacoli — in discesa tecnica
                questo si traduce in baricentro alto e manovrabilità ridotta.
              </p>
            </div>

            <div className="tipCard tipMotard">
              <div className="tipCardTop">
                <span className="tipBadge badgeMotard">Motard</span>
                <span className="tipSub">250–270 mm ant. — 260–280 mm post.</span>
              </div>
              <h4>Corsa ridotta — abbassare il baricentro e controllare il rollio</h4>
              <p>
                Le conversioni motard riducono la corsa delle sospensioni
                da cross di base a 250–270 mm anteriori e 260–280 mm
                posteriori. Meno corsa significa baricentro più basso
                (la moto si abbassa di 40–60 mm) e meno rollio in frenata
                e in curva sull'asfalto — dove non ci sono salti da assorbire.
                La riduzione avviene con distanziali interni (forcella)
                e linkage alternativi o ammortizzatore accorciato.
                SAG anteriore 20–25 mm, posteriore 90–100 mm. L'altezza
                da terra scende a 280–320 mm — più adatta all'asfalto.
              </p>
            </div>

            <div className="tipCard tipSportiva">
              <div className="tipCardTop">
                <span className="tipBadge badgeSportiva">Sportiva / Stradale</span>
                <span className="tipSub">110–130 mm ant. — 120–140 mm post.</span>
              </div>
              <h4>Corsa minima — stabilità ad alta velocità e feeling di sterzo preciso</h4>
              <p>
                Le 2T stradali sportive (Aprilia RS 125, Honda NSR 125,
                Yamaha TZR, Gilera Runner) hanno 110–130 mm anteriori
                e 120–140 mm posteriori — un quarto dell'escursione del cross.
                Con questa corsa il baricentro è basso e stabile, il rollio
                in frenata è minimo e il feeling di sterzo è diretto.
                Su fondo irregolare le sospensioni sono al limite —
                buche e dossi si trasmettono al telaio invece di essere
                assorbite. SAG anteriore 15–22 mm, posteriore 20–30 mm.
                Altezza da terra: 120–160 mm.
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
            <span className="captionTag">Geometria in compressione</span>
            <p>
              Quando la sospensione si comprime, la geometria della moto cambia:
              l'angolo di sterzo si apre, l'avancorsa aumenta (anteriore),
              il baricentro si abbassa, il passo si allunga leggermente.
              Con 300 mm di corsa questa variazione è molto più marcata
              che con 120 mm — la geometria di una moto da cross in compressione
              è significativamente diversa da quella a riposo.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — sovrapposizione moto a piena estensione / SAG / fine corsa, variazione geometria</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── EFFETTI SUL COMPORTAMENTO BLOCK ─────────────────────────────── */}
        <motion.div
          className="effettiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="effettiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Effetti sul comportamento</span>
            <h3>Come l'escursione condiziona la guida — quattro situazioni critiche</h3>
            <p>
              L'escursione non è solo un numero nelle specifiche tecniche —
              si sente in ogni fase della guida. Capire come la corsa
              disponibile interagisce con frenata, accelerazione e curva
              permette di interpretare il feedback della moto e di
              identificare quando il problema è la corsa insufficiente
              piuttosto che l'idraulica o la molla.
            </p>
          </motion.div>

          <motion.div className="effettiGrid" variants={cardVariants}>

            <div className="effettoCard effettoFrenata">
              <div className="effettoCardTop">
                <span className="effettoBadge badgeFrenata">Frenata</span>
                <span className="effettoSub">Trasferimento peso anteriore</span>
              </div>
              <h4>Naso-tuffo e escursione anteriore consumata</h4>
              <p>
                In frenata il peso si trasferisce sull'anteriore comprimendo
                la forcella. Con escursione lunga (cross, enduro) il naso-tuffo
                è più pronunciato ma la geometria rimane gestibile — l'angolo
                di sterzo si apre e l'avancorsa aumenta, stabilizzando
                la moto in rettilineo. Con escursione corta (sportiva stradale)
                il naso-tuffo è limitato ma in frenata d'emergenza la forcella
                tocca il fine corsa rapidamente, trasmettendo l'impatto
                al telaio. La compressione LSC regola la velocità di
                naso-tuffo, non la corsa totale disponibile.
              </p>
            </div>

            <div className="effettoCard effettoAccel">
              <div className="effettoCardTop">
                <span className="effettoBadge badgeAccel">Accelerazione</span>
                <span className="effettoSub">Trasferimento peso posteriore</span>
              </div>
              <h4>Squat e trazione — il posteriore che si abbassa</h4>
              <p>
                In accelerazione il peso si trasferisce sul posteriore
                (squat), comprimendo il monoammortizzatore. Con escursione
                lunga e SAG generoso (enduro) lo squat è marcato ma la
                ruota mantiene il contatto col terreno anche su dossi —
                la trazione è costante. Con escursione corta e SAG stretto
                (motard, sportiva) lo squat è limitato: meno variazione
                di geometria, più stabilità in uscita di curva sull'asfalto.
                Troppo squat su moto da cross può mandare la ruota in fine
                corsa posteriore su dossi in accelerazione — causa principale
                di "pompaggio" del posteriore.
              </p>
            </div>

            <div className="effettoCard effettoCurva">
              <div className="effettoCardTop">
                <span className="effettoBadge badgeCurva">Curva</span>
                <span className="effettoSub">Rollio e grip laterale</span>
              </div>
              <h4>Escursione e variazione di geometria in piega</h4>
              <p>
                In curva la sospensione esterna si comprime (carico maggiore)
                mentre quella interna si estende. Con escursione lunga
                la variazione di angolo di sterzo e avancorsa durante
                la piega è significativa — la moto cambia geometria
                in modo percepibile tra l'ingresso e l'apex della curva.
                Nelle sportive stradali l'escursione ridotta mantiene la
                geometria quasi costante in curva — il feeling è più
                preciso e prevedibile ma meno adattivo. Sul fuoristrada
                l'escursione lunga permette alle ruote di seguire il terreno
                indipendentemente anche in curva.
              </p>
            </div>

            <div className="effettoCard effettoSalto">
              <div className="effettoCardTop">
                <span className="effettoBadge badgeSalto">Salto / impatto</span>
                <span className="effettoSub">Assorbimento energia cinetica</span>
              </div>
              <h4>Atterraggio e picco di forza — perché la corsa conta</h4>
              <p>
                L'energia da dissipare all'atterraggio da un salto è proporzionale
                alla massa e al quadrato della velocità verticale — raddoppiare
                l'altezza del salto quadruplica l'energia. La corsa disponibile
                determina quanta distanza ha la sospensione per decelerare
                la ruota e assorbire quella energia prima del fine corsa
                meccanico. 300 mm di corsa su un ammortizzatore ben calibrato
                possono assorbire atterraggi da 3–4 metri di altezza;
                120 mm smaltiscono solo buche e dossi stradali. Questa
                è la differenza fondamentale tra fuoristrada e stradale.
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
              <span className="placeholderText">Immagine / GIF — sequenza atterraggio cross: fase aerea, impatto, compressione massima, recupero</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Atterraggio da salto</span>
            <p>
              Sequenza di un atterraggio da doppio: nell'impatto la forcella
              si comprime di 200–250 mm in pochi millisecondi. L'idraulica
              di compressione veloce (HSC) dissipa l'energia di picco;
              il fine corsa idraulico prende il controllo negli ultimi
              20–30 mm; il bumper non deve mai essere raggiunto. Una forcella
              con escursione insufficiente toccherebbe il fine corsa meccanico
              in questa fase, trasmettendo l'intera energia restante al telaio.
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
            <span className="sectionLabel">Diagnosi e verifica</span>
            <h3>Riconoscere problemi di escursione — fine corsa, asimmetrie e usura</h3>
            <p>
              I problemi legati all'escursione sono spesso confusi con
              problemi idraulici — la moto "tocca" e si pensa che serva
              più compressione, quando in realtà la corsa disponibile è
              insufficiente per l'uso. La diagnosi corretta richiede
              la misura dell'escursione reale utilizzata durante la guida
              con il metodo dell'O-ring o della fascetta.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Fine corsa frequente — corsa utile insufficiente</h4>
              <p>
                La moto "tocca" regolarmente su ostacoli che dovrebbe
                assorbire con margine. Prima di aumentare la compressione
                (che peggiorerebbe il comfort senza risolvere il problema),
                verificare l'escursione reale con l'O-ring: se la sospensione
                usa più del 90% della corsa totale durante l'uso normale,
                il problema è la corsa insufficiente — non l'idraulica.
                La soluzione è una molla più morbida (più SAG = meno corsa
                in compressione ma più in estensione) o un kit di escursione
                aumentata.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Escursione inutilizzata — molla troppo dura o SAG sbagliato</h4>
              <p>
                L'O-ring mostra che la sospensione usa solo il 40–50%
                della corsa disponibile anche in condizioni di uso intenso.
                Causa: molla troppo dura per il peso del pilota o SAG
                troppo basso. La sospensione non riesce a deformarsi
                quanto serve per seguire il terreno — la ruota rimbalza
                invece di tracciare. Aumentare il SAG (ridurre il precarico)
                o montare una molla di tasso inferiore prima di toccare
                l'idraulica.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Asimmetria anteriore — una gamba si comprime più dell'altra</h4>
              <p>
                In rettilineo o in frenata la moto tende a sterzare
                leggermente da un lato nonostante il manubrio sia dritto.
                Causa possibile: le due gambe della forcella hanno livelli
                di olio diversi (dopo una revisione non accurata) o
                una gamba ha il paraolio che perde. La differenza di
                resistenza idraulica fa comprimere le due gambe in modo
                diverso, creando un'asimmetria di geometria. Verificare
                il livello olio in entrambe le gambe separatamente.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>O-ring o fascetta — misurare l'escursione reale utilizzata</h4>
              <p>
                Infilare un O-ring sullo stelo della forcella o sulla
                parte visibile dell'ammortizzatore, a contatto con il
                fodero/corpo. Dopo una sessione di guida, la posizione
                dell'O-ring indica la massima compressione raggiunta.
                Target cross: O-ring a 10–20 mm dal fine corsa meccanico.
                Target enduro: 15–25 mm. Target motard/stradale: 15–30 mm.
                Più vicino al fine corsa = rischio di toccarlo; troppo
                lontano = corsa inutilizzata, molla troppo dura.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Verifica bumper — deformazione e durezza residua</h4>
              <p>
                Il bumper in poliuretano si comprime e si deforma nel
                tempo con i colpi ripetuti. Un bumper deformato del 20%
                o più rispetto alla misura originale riduce il fine corsa
                idraulico disponibile — la sospensione tocca il fine corsa
                meccanico prima di quanto previsto dal progetto. Verificare
                ad ogni revisione: comprimere il bumper con le dita —
                deve essere elastico e tornare immediatamente alla forma
                originale. Costo di sostituzione: 5–15 €, da fare sempre
                insieme al cambio olio.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Verifica escursione e geometria — dopo modifiche di setup</h4>
              <p>
                Verificare l'escursione reale con l'O-ring ogni volta che
                si modifica il SAG, si cambia la molla, si interviene
                sul linkage o si installa un ammortizzatore diverso.
                Un cambio di molla (tasso +/−10%) cambia il SAG di 5–8 mm
                e quindi l'escursione utile disponibile. Verificare
                anche dopo cadute violente: un linkage piegato o un
                ammortizzatore con corsa ridotta da un urto modifica
                l'escursione reale senza essere visibile all'ispezione
                a occhio.
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
            <span className="cardTag">Altezza da terra</span>
            <h3>Escursione e altezza da terra — il legame diretto</h3>
            <p>
              L'altezza da terra non è solo una questione di passaggio
              sopra gli ostacoli — determina il baricentro e quindi
              la stabilità e la manovrabilità. Una moto con 400 mm di
              altezza da terra ha un baricentro molto più alto di una
              con 130 mm: più instabile negli spostamenti laterali
              ma più facile da inclinare. Ridurre l'escursione (motard)
              abbassa la moto e il baricentro — un vantaggio sull'asfalto
              che diventa uno svantaggio non appena si affronta del
              fuoristrada leggero.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Kit escursione</span>
            <h3>Aumentare o ridurre la corsa — soluzioni aftermarket</h3>
            <p>
              Per ridurre l'escursione (conversione motard): distanziali
              interni alla forcella che limitano la corsa, linkage
              posteriore accorciato o ammortizzatore con corsa minore.
              Per aumentarla (long travel kit): forcelle con steli più
              lunghi, linkage allungato, ammortizzatore con corsa maggiore.
              I kit long travel richiedono spesso anche la modifica
              delle geometrie (offset ruota, posizione ammortizzatore)
              per mantenere una guida corretta — non è mai solo
              una questione di lunghezza degli steli.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Passo e geometria</span>
            <h3>Come l'escursione modifica il passo e l'angolo di sterzo</h3>
            <p>
              Quando la forcella si comprime, l'angolo del cannotto di sterzo
              rispetto alla verticale aumenta (sterzo meno rapido),
              l'avancorsa aumenta (più stabile ma meno agile) e il passo
              si allunga leggermente. Con 300 mm di escursione queste
              variazioni sono significative — la moto in volo con forcella
              estesa si sterza in modo diverso rispetto all'atterraggio
              con forcella compressa. Questo è il motivo per cui i piloti
              esperti precaricano la forcella prima dell'atterraggio:
              per avere la geometria di guida già alla corretta posizione
              di lavoro nel momento del contatto con il suolo.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Escursione;
