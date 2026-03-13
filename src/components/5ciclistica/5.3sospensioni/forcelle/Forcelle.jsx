import "./forcelle.scss";
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

const Forcelle = () => {
  return (
    <section className="forcelle" id="forcelle">
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
              Sospensioni — Anteriore
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La forcella nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La forcella è il sistema di sospensione anteriore — controlla
              il movimento della ruota anteriore rispetto al telaio, assorbe
              gli impatti, mantiene la geometria di sterzo sotto carico
              e trasmette le forze frenanti al telaio. Nel motore a 2 tempi
              la forcella lavora in condizioni estreme: terreni irregolari
              nel cross e nell'enduro, asfalto in frenata aggressiva nel
              motard e nello stradale. Ogni disciplina richiede una geometria,
              una rigidità e un setup idraulico profondamente diversi.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La differenza fondamentale tra le forcelle moderne non è il
              diametro degli steli — è il sistema idraulico interno.
              Una forcella a bagno d'olio (open bath) usa lo stesso olio
              per lubrificare e ammortizzare; una forcella a cartuccia
              separa i due circuiti, consentendo regolazioni indipendenti
              di compressione ed estensione con shim stack dedicati.
              Le forcelle USD (upside-down) montano lo stelo in basso e il
              fodero in alto — inversione che riduce le masse non sospese
              e aumenta la rigidità torsionale dello sterzo.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia della forcella</span>
              <h3>I componenti principali</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Steli interni — tubi cromati o DLC che scorrono nei foderi;
                  il diametro (40–48 mm) determina rigidità torsionale
                  e massa non sospesa
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Foderi esterni — le gambe inferiori in alluminio che
                  ospitano i boccole di guida, i paraolio e il sistema
                  di regolazione idraulica
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Molla elicoidale — determina il SAG anteriore e la
                  resistenza al carico; il tasso (N/mm) va abbinato
                  al peso del pilota e alla disciplina
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Sistema idraulico — bagno d'olio (semplice, regolabile
                  con livello olio) o cartuccia (shim stack separati
                  per compressione ed estensione, regolazione precisa)
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
              <span className="placeholderText">Immagine / GIF — forcella USD esplosa con steli, cartuccia, molla e paraolio nominati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Struttura</span>
            <p>
              Vista esplosa di una forcella USD da cross: gli steli interni
              cromati inseriti nei foderi in alluminio anodizzato, la cartuccia
              idraulica con pistone e shim stack separati per compressione
              ed estensione, la molla con distanziale di precarico e il
              sistema di paraolio con raschiaolio. Ogni componente
              lavora in tolleranze di pochi centesimi di millimetro.
            </p>
          </div>
        </motion.div>

        {/* ── COSTRUZIONE BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="costruzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="costruzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Costruzione</span>
            <h3>Steli, idraulica, molla e tenute — cosa distingue una forcella di qualità</h3>
            <p>
              La qualità di una forcella si misura nella rettifica degli steli,
              nella geometria dello shim stack e nella durata delle tenute.
              Una forcella di serie correttamente revisionata con olio fresco
              e paraolio nuovi supera spesso in prestazioni un aftermarket
              economico con setup sbagliato — il fattore critico è sempre
              la manutenzione e il setup adeguato al pilota.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">01</span>
              <h4>Steli cromati — diametro, finitura e rigidità</h4>
              <p>
                Il diametro dello stelo determina la rigidità torsionale
                della forcella: 48 mm per le forcelle da cross e enduro
                racing, 43 mm per enduro trail e motard, 40–41 mm per
                stradale e scooter 2T. La cromatura dura (20–30 µm) protegge
                la superficie di scorrimento; i modelli racing usano DLC
                (Diamond-Like Carbon) che abbatte l'attrito del 30–40%
                rispetto al cromo. Rigature sullo stelo — anche minime —
                distruggono il paraolio in pochi ore.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">02</span>
              <h4>Sistema idraulico — bagno d'olio vs cartuccia</h4>
              <p>
                Nel sistema a bagno d'olio (open bath) l'olio riempie
                il fodero e il flusso attraverso fori calibrati nel pistone
                genera l'idraulica. Semplice da revisionare, limitato in
                regolazioni. La cartuccia (Showa SFF, WP AER, KYB SSS)
                isola il circuito idraulico in un tubo separato con shim
                stack dedicati per compressione ed estensione — regolazioni
                indipendenti e più precise. La forcella ad aria (WP AER,
                Öhlins Air) sostituisce la molla con una camera d'aria:
                più leggera ma sensibile alla temperatura.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">03</span>
              <h4>Molla e precarico — tasso, distanziale e SAG</h4>
              <p>
                Il tasso della molla (N/mm) va abbinato al peso del pilota:
                per un pilota da 70 kg il range tipico è 4,0–4,4 N/mm
                per il cross, 4,2–4,6 N/mm per l'enduro duro. Il precarico
                si ottiene con un distanziale tra la molla e il tappo
                superiore: più lungo = molla più precaricata = SAG minore.
                Il precarico non sostituisce il tasso corretto — se il SAG
                non rientra nel range con precarico standard, cambiare la molla.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">04</span>
              <h4>Paraolio e raschiaolio — tenuta e durata</h4>
              <p>
                Il paraolio trattiene l'olio all'interno del fodero;
                il raschiaolio (dust wiper) impedisce alla sporcizia
                di raggiungere il paraolio. In fuoristrada il fango
                abrasivo usura il raschiaolio prima del paraolio —
                ispezionare ad ogni lavaggio. Un paraolio che perde
                contamina i freni anteriori con olio (rischio sicurezza)
                e degrada l'idraulica. La sostituzione richiede un
                estrattore specifico — non usare cacciaviti che rigano gli steli.
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
            <span className="sectionLabel">Tipologie per disciplina</span>
            <h3>Cross, enduro, motard e stradale — quattro forcelle profondamente diverse</h3>
            <p>
              Non esiste la forcella universale nel 2T. Ogni disciplina
              impone esigenze opposte: il cross richiede rigidità massima
              e risposta immediata agli impatti violenti; lo stradale
              richiede comfort, progressività e controllo sul fondo uniforme.
              Usare una forcella da cross su una moto stradale significa
              avere un anteriore che rimbalza su ogni giuntura dell'asfalto;
              usare una forcella stradale nel fuoristrada significa andare
              a fine corsa al primo salto.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>

            <div className="tipCard tipCross">
              <div className="tipCardTop">
                <span className="tipBadge badgeCross">Cross — MX</span>
                <span className="tipSub">Ø 48 mm USD — 300–310 mm corsa</span>
              </div>
              <h4>Massima rigidità, risposta immediata, zero comfort</h4>
              <p>
                Steli da 48 mm USD, corsa 300–310 mm, molla con tasso
                elevato (4,4–5,0 N/mm). Idraulica cartuccia con compressione
                e rebound molto duri per gestire atterraggi da salti e
                doppi. SAG anteriore 25–30 mm. Paraolio con raschiaolio
                rinforzato per il fango. Setup ottimizzato per terreno
                molle/duro ma non per asfalto — su strada la forcella
                da cross rimbalza su ogni irregolarità e non offre
                alcun comfort. Manutenzione ogni 15–20 ore di uso intenso.
              </p>
            </div>

            <div className="tipCard tipEnduro">
              <div className="tipCardTop">
                <span className="tipBadge badgeEnduro">Enduro</span>
                <span className="tipSub">Ø 48 mm USD — 295–320 mm corsa</span>
              </div>
              <h4>Corsa lunga, progressività e gestione terreni misti</h4>
              <p>
                Steli 48 mm USD, corsa fino a 320 mm nelle versioni hard
                enduro, molla con tasso 4,0–4,6 N/mm. Idraulica cartuccia
                o bagno d'olio secondo il modello, calibrata per rispondere
                sia ai micro-dossi lenti (sentieri tecnici) che agli impatti
                violenti (sassi, radici). SAG anteriore 30–38 mm per mantenere
                il feeling di sterzo anche su terreno irregolare. Protezione
                steli con cover in neoprene obbligatoria nell'uso hard.
                Olio ammortizzatore: grado 5W (più fluido) per cold start;
                7W–10W per temperature elevate.
              </p>
            </div>

            <div className="tipCard tipMotard">
              <div className="tipCardTop">
                <span className="tipBadge badgeMotard">Motard</span>
                <span className="tipSub">Ø 43–48 mm USD — 250–280 mm corsa</span>
              </div>
              <h4>Rigidità torsionale, frenata aggressiva e feeling asfalto</h4>
              <p>
                Steli 43–48 mm USD (spesso gli stessi del cross di base
                con setup diverso), corsa ridotta a 250–280 mm per abbassare
                il baricentro e ridurre il rollio in frenata. Molla più
                rigida (4,6–5,2 N/mm) per gestire le frenate aggressive
                sull'asfalto — il trasferimento di peso è molto superiore
                al fuoristrada. Compressione lenta aumentata rispetto al
                cross, rebound calibrato per fondo uniforme. Paraolio con
                standard superiori: nessun fango, ma oli e temperature
                elevate in pista sono fattori critici.
              </p>
            </div>

            <div className="tipCard tipStradale">
              <div className="tipCardTop">
                <span className="tipBadge badgeStradale">Stradale</span>
                <span className="tipSub">Ø 35–43 mm — conv. o USD</span>
              </div>
              <h4>Comfort, progressività e stabilità ad alta velocità</h4>
              <p>
                Diametri ridotti (35–43 mm), convenzionale (stelo in alto)
                o USD secondo il modello e l'anno. Corsa 100–150 mm calibrata
                per il fondo uniforme — molto meno del fuoristrada ma
                sufficiente per assorbire buche cittadine e giunzioni.
                Molla a tasso inferiore (3,0–4,0 N/mm) per comfort.
                Idraulica spesso a bagno d'olio nei modelli entry level;
                cartuccia nelle versioni sportive (RS, RC). Setup orientato
                alla stabilità ad alta velocità: rebound più lento rispetto
                al cross, compressione progressiva. Sostituzione olio
                ogni 2 anni o 10.000 km.
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
            <span className="captionTag">Confronto</span>
            <p>
              Confronto visivo delle quattro forcelle affiancate: diametri
              degli steli, lunghezza corsa e posizione dei registri di
              regolazione. La differenza tra la forcella da cross da 48 mm
              con 310 mm di corsa e quella stradale da 38 mm con 120 mm
              è immediata — stessa funzione, geometria completamente diversa
              per esigenze opposte.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — confronto forcella cross / enduro / motard / stradale affiancate</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── REGOLAZIONI BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="regolazioniBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="regolazioniHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Regolazioni esterne</span>
            <h3>SAG anteriore, precarico, compressione ed estensione — il setup dal registro</h3>
            <p>
              Il setup della forcella parte sempre dal SAG. Un SAG sbagliato
              modifica la geometria di sterzo (angolo di cannotto, avancorsa)
              e rende qualsiasi altra regolazione inutile — il feeling
              non migliorerà mai finché il SAG non è nel range corretto.
              Solo dopo aver fissato il SAG ha senso lavorare su
              compressione ed estensione.
            </p>
          </motion.div>

          <motion.div className="regolazioniContent" variants={cardVariants}>

            <div className="regLeft">
              <div className="regItem">
                <span className="regLabel">SAG anteriore — range per disciplina</span>
                <div className="regBar">
                  <div className="regFill" style={{ width: "60%" }} />
                </div>
                <span className="regValue">25–30 mm (cross/motard) — 30–38 mm (enduro)</span>
                <p>
                  Il SAG anteriore si misura comprimendo la forcella a mano
                  per eliminare l'attrito statico, poi rilevando l'affondamento
                  sotto il peso del pilota in posizione di guida. Un SAG
                  troppo basso inasprisce lo sterzo e riduce la trazione
                  sull'anteriore in uscita di curva; troppo alto aumenta
                  l'avancorsa, rallenta lo sterzo e fa alzare la ruota
                  anteriore in accelerazione. Cross e motard: 25–30 mm.
                  Enduro: 30–38 mm per adattarsi al terreno irregolare.
                </p>
              </div>

              <div className="regItem">
                <span className="regLabel">Precarico molla — intervento corretto vs errato</span>
                <div className="regBar">
                  <div className="regFill regFillGreen" style={{ width: "35%" }} />
                </div>
                <span className="regValue regValueGreen">Distanziale standard ±5 mm</span>
                <p>
                  Il precarico agisce sul SAG ma non cambia il tasso della
                  molla. Se il SAG è molto fuori range (+10 mm), il tasso
                  è sbagliato per il peso del pilota — non si risolve
                  con il precarico. Aumentare il distanziale di oltre 10 mm
                  porta la molla in zona non lineare e rende imprevedibile
                  il comportamento nelle piccole escursioni.
                </p>
              </div>
            </div>

            <div className="regRight">
              <div className="regCard">
                <span className="regCardTag">Compressione</span>
                <h4>Registro di compressione — lenta (LSC) e veloce (HSC)</h4>
                <p>
                  La compressione lenta controlla il movimento della forcella
                  sotto il peso del pilota — bracciata in frenata, rollio
                  in curva. Troppa LSC rende la forcella nervosa e trasmette
                  ogni vibrazione al manubrio; poca LSC produce eccessivo
                  naso-tuffo in frenata con perdita di precisione di sterzo.
                  La compressione veloce controlla la risposta agli impatti
                  bruschi. Sui modelli di serie spesso è un unico registro;
                  sulle forcelle racing i due circuiti sono separati.
                  Punto di partenza: posizione base del costruttore
                  + 2 click di LSC se la forcella affonda troppo in frenata.
                </p>
              </div>

              <div className="regCard">
                <span className="regCardTag">Estensione</span>
                <h4>Registro di estensione (rebound) — il parametro più percepibile</h4>
                <p>
                  Il rebound controlla la velocità con cui la forcella
                  si estende dopo la compressione. Troppo veloce: la forcella
                  rimbalza e destabilizza lo sterzo dopo ogni impatto —
                  l'anteriore "balla" in rettilineo su fondo irregolare.
                  Troppo lento: la forcella si accumula colpo dopo colpo
                  su una serie di dossi ravvicinati, fino a toccare il
                  fine corsa meccanico con l'anteriore rasoterra.
                  Test: comprimere la forcella a mano di metà corsa e
                  rilasciare — deve tornare in 0,3–0,5 secondi senza
                  oscillazioni. Cross: rebound più veloce. Enduro e stradale:
                  rebound più lento e progressivo.
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
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — misura SAG anteriore con metro e pilota in posizione su forcella cross</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Misura SAG anteriore</span>
            <p>
              La misura del SAG anteriore si esegue su un punto fisso
              tra l'asse ruota e il fodero della forcella, o tra il fodero
              e il cannotto di sterzo. Con la moto su cavalletto (SAG libero)
              e con il pilota in posizione di guida (SAG pilota). La differenza
              determina il precarico effettivo della molla sul peso del pilota.
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
            <span className="sectionLabel">Diagnosi e usura</span>
            <h3>Riconoscere una forcella che sta cedendo — sintomi e controlli</h3>
            <p>
              La forcella degrada in modo progressivo — raramente cede
              di colpo. I segnali di usura si accumulano nel tempo e spesso
              vengono attribuiti erroneamente al pneumatico o al terreno.
              Imparare a riconoscerli permette di intervenire con la
              revisione programmata invece di trovarsi con una perdita
              di olio sui freni o uno stelo rigato che richiede sostituzione
              del gruppo completo.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Perdita di olio dal paraolio — tracce sullo stelo</h4>
              <p>
                Tracce di olio sugli steli visibili tra il raschiaolio e
                il fodero indicano paraolio consumato. In fuoristrada
                il fango abrasivo usura il raschiaolio e permette alla
                sporcizia di raggiungere il paraolio. L'olio che perde
                contamina il disco e la pastiglia del freno anteriore —
                rischio sicurezza immediato. Sostituire paraolio e
                raschiaolio entrambi, mai uno solo. Ispezionare dopo
                ogni sessione nel fango.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Steli rigati o ammaccati — causa di paraolio distrutto</h4>
              <p>
                Una riga sullo stelo — anche superficiale — taglia il
                paraolio ad ogni ciclo di compressione. Le cause principali:
                sassi proiettati in fuoristrada, cadute laterali (stelo
                che tocca terra), cover di protezione assente o deteriorata.
                Steli con rigature profonde &gt;0,1 mm si rettificano o
                si sostituiscono — non si riparano con lucidatura. La
                rettifica richiede una ricromatazione successiva che riporta
                il diametro alla quota corretta.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Gioco laterale della forcella — boccole consumate</h4>
              <p>
                Tenere la ruota anteriore ferma e spingere lateralmente
                il fodero: qualsiasi gioco percettibile indica boccole
                di guida usurate. Le boccole (bushings) in teflon-acciaio
                o bronzo guidano lo stelo nel fodero; quando si consumano
                permettono micro-movimenti laterali che causano vibrazioni,
                usura accelerata del paraolio e imprecisione di sterzo.
                Sostituire le boccole insieme al paraolio ad ogni revisione.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Controllo SAG — da eseguire ad ogni cambio assetto</h4>
              <p>
                Il SAG si modifica nel tempo per assestamento e perdita
                di elasticità della molla. Misurarlo prima di ogni evento
                o sessione importante. Procedura: moto su cavalletto,
                rilevare la distanza di riferimento a piena estensione
                (SAG libero); pilota in posizione di guida con tutto
                l'equipaggiamento, rilevare la stessa distanza (SAG pilota).
                Differenza fuori range = agire sul precarico o cambiare molla.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Test idraulica a mano — compressione e rebound</h4>
              <p>
                Con la moto in piedi, comprimere lentamente la forcella
                di tutta la corsa: la resistenza deve aumentare in modo
                progressivo senza punti duri o improvvisi cedimenti.
                Rilasciare: il ritorno deve essere fluido e ammortizzato.
                Una forcella che si comprime senza resistenza ha perso
                l'olio; una che rimbalza ha il rebound troppo veloce
                o l'olio degradato. Ripetere il test a piena velocità
                di compressione per verificare la HSC.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Revisione programmata — olio, paraolio e boccole</h4>
              <p>
                Cross e enduro racing: sostituzione olio ogni 15–20 ore,
                paraolio e boccole ogni 40–60 ore o al primo segno di perdita.
                Enduro trail e motard: sostituzione olio ogni 30–40 ore,
                paraolio ogni stagione. Stradale: sostituzione olio ogni
                2 anni o 10.000 km, paraolio ogni 4 anni. Il kit di revisione
                (paraolio, raschiaolio, boccole, O-ring) costa circa 30–60 €
                per gamba — trascurarlo significa rischiare steli rigati
                che costano 10 volte di più.
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
            <span className="cardTag">USD vs Convenzionale</span>
            <h3>Upside-down — perché quasi tutte le moto moderne ce l'hanno</h3>
            <p>
              Nella forcella USD (upside-down) lo stelo è in basso e il fodero
              in alto — invertita rispetto alla convenzionale. Vantaggi:
              massa non sospesa ridotta (il fodero pesante è vicino al telaio,
              non alla ruota), rigidità torsionale superiore, maggiore precisione
              di sterzo. Svantaggi: i paraolio sono più esposti al fango in
              fuoristrada e la revisione è più costosa. Tutte le moto da cross
              e enduro moderne usano USD; le stradali entry level mantengono
              la convenzionale per ridurre i costi.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Cartuccia vs bagno d'olio</span>
            <h3>Cartuccia — regolazione precisa al costo di una revisione più complessa</h3>
            <p>
              La forcella a cartuccia separa il circuito idraulico in un tubo
              chiuso con shim stack dedicati — compressione e rebound
              regolabili indipendentemente con precisione. Il bagno d'olio
              usa la colonna d'olio nella forcella e il foro calibrato nel
              pistone: meno regolazioni esterne, ma modificabile cambiando
              il livello dell'olio (più alto = più resistenza in fine corsa).
              Le forcelle moderne di serie sono quasi tutte a cartuccia;
              alcune entry level usano ancora il bagno d'olio semplice.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>WP, KYB, Showa, Öhlins — quando vale la pena aggiornare</h3>
            <p>
              I kit aftermarket principali (Öhlins FGRT, WP XACT, KYB SFF-Air)
              offrono regolazioni LSC/HSC separate impossibili sulle unità
              di serie. L'upgrade ha senso quando si è ottimizzato il setup
              dell'originale e si è ancora insoddisfatti, o quando si cambia
              disciplina (es. da cross a motard). Prima dell'upgrade, valutare
              sempre la revisione professionale con spring rate personalizzato:
              spesso risolve l'80% dei problemi a un quinto del costo.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Forcelle;
