import "./rapporti.scss";
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

const Rapporti = () => {
  return (
    <section className="rapporti" id="rapporti">
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
              Trasmissione
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              I rapporti
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Parlare di rapporti significa parlare del modo in cui il
              motore trasforma i suoi giri e la sua coppia in movimento
              reale della ruota. È il punto in cui la meccanica smette
              di essere teoria astratta e diventa carattere della moto:
              aggressiva o lineare, pronta o lunga, nervosa o composta,
              efficace nel tecnico o efficace sul veloce. Il motore da
              solo non basta a spiegare il comportamento della moto —
              i rapporti lo reinterpretano continuamente.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Ogni moto lavora con tre livelli di riduzione: il rapporto
              primario tra albero motore e cambio, il rapporto interno
              della marcia selezionata e il rapporto finale tra pignone
              e corona. Il risultato è il rapporto totale, cioè quante
              volte il motore deve ruotare per ottenere un giro della
              ruota posteriore. Cambiare anche solo uno di questi elementi
              sposta accelerazione, velocità, trazione, temperatura di
              esercizio, sensibilità del gas e sfruttabilità del motore.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">I concetti chiave</span>
              <h3>Le cinque grandezze che governano davvero i rapporti</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="primary">Pr</span>
                <span className="miniText">
                  Rapporto primario — riduzione tra albero motore e albero cambio: definisce la base di tutto il sistema
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex" data-color="gear">G</span>
                <span className="miniText">
                  Rapporto di marcia — ogni marcia cambia il compromesso tra coppia alla ruota e velocità ottenibile
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex" data-color="final">F</span>
                <span className="miniText">
                  Rapporto finale — corona ÷ pignone: è la parte più facile da modificare e la più usata nel setup
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex" data-color="total">Rt</span>
                <span className="miniText">
                  Rapporto totale — prodotto di primario, marcia e finale: determina il comportamento reale della ruota
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex" data-color="wheel">Rw</span>
                <span className="miniText">
                  Raggio e circonferenza ruota — trasformano i giri ruota in velocità lineare: i rapporti senza ruota non bastano
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── ARCHITETTURA BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="architetturaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="architetturaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Architettura del sistema</span>
            <h3>Il rapporto totale non nasce in un solo punto — nasce dalla somma di tre riduzioni diverse</h3>
            <p>
              Molti parlano dei rapporti come se dipendessero solo da
              pignone e corona, ma è una semplificazione utile soltanto
              in officina. In realtà il comportamento della moto deriva
              dalla cascata completa di riduzioni tra albero motore e
              ruota posteriore. Il finale è l'ultima leva del sistema,
              non l'unica. Per capire davvero cosa stai cambiando devi
              vedere tutta la catena meccanica.
            </p>
          </motion.div>

          <motion.div className="architetturaGrid" variants={cardVariants}>
            <div className="archCard archCardPrimary">
              <span className="archTag">1 — Rapporto primario</span>
              <h4>Dalla frizione al cambio: la prima grande riduzione</h4>
              <p>
                Il rapporto primario è fissato dal costruttore e dipende
                dagli ingranaggi tra albero motore e gruppo frizione/cambio.
                Non si cambia facilmente nell'uso normale, ma condiziona
                l'intero carattere della moto. Due motori con potenza
                simile ma primario diverso possono richiedere finali
                completamente diversi per ottenere lo stesso comportamento
                in pista o nel bosco.
              </p>
            </div>

            <div className="archCard archCardGear">
              <span className="archTag">2 — Rapporto di marcia</span>
              <h4>Ogni marcia è una leva diversa sullo stesso motore</h4>
              <p>
                La prima marcia moltiplica molto la coppia ma limita
                fortemente la velocità; le marce alte fanno l'opposto.
                Il cambio non serve solo a “salire di velocità”: serve
                a mantenere il motore nel suo intervallo utile mentre
                la ruota richiede condizioni di lavoro sempre diverse.
              </p>
            </div>

            <div className="archCard archCardFinal">
              <span className="archTag">3 — Rapporto finale</span>
              <h4>L'elemento più accessibile e più usato nel setup</h4>
              <p>
                Il rapporto finale è il più facile da modificare perché
                si interviene su pignone e corona. È per questo che quasi
                tutto il lavoro pratico di adattamento al tracciato si
                fa lì: non perché sia l'unico rapporto importante,
                ma perché è quello modificabile in tempi rapidi senza
                aprire il motore.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CORTO LUNGO BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="cortoLungoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="cortoLungoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Corto vs lungo</span>
            <h3>Un rapporto corto non è “migliore” e un rapporto lungo non è “più potente” — fanno due lavori diversi</h3>
            <p>
              Il linguaggio da paddock spesso semplifica male: si dice
              che il rapporto corto “fa andare di più” o che il lungo
              “toglie coppia”. In realtà il motore produce la sua coppia;
              il rapporto decide come e quando quella coppia arriva
              alla ruota. La differenza è nella moltiplicazione e nel
              regime motore richiesto per ottenere una certa velocità.
            </p>
          </motion.div>

          <motion.div className="cortoLungoGrid" variants={cardVariants}>
            <div className="ratioCard ratioShort">
              <div className="ratioCardTop">
                <span className="ratioBadge badgeShort">Rapporto corto</span>
              </div>
              <h4>Più moltiplicazione, più prontezza, più giri motore a parità di velocità</h4>
              <p>
                Un rapporto corto aumenta la forza alla ruota a parità
                di coppia motore. Il risultato è una risposta più pronta,
                uscite di curva più immediate, maggior facilità nel tenere
                il motore in banda utile nelle sezioni lente e una sensazione
                generale di moto “viva”. Il prezzo è che il motore gira
                più alto a ogni velocità, arriva prima al limitatore e
                richiede più cambi marcia.
              </p>
              <div className="curveBars curveBarsShort">
                <div className="curveBar" style={{ height: "90%" }} />
                <div className="curveBar" style={{ height: "100%" }} />
                <div className="curveBar" style={{ height: "96%" }} />
                <div className="curveBar" style={{ height: "82%" }} />
                <div className="curveBar curvePeak" style={{ height: "66%" }} />
                <div className="curveBar" style={{ height: "44%" }} />
                <div className="curveBar" style={{ height: "24%" }} />
              </div>
              <span className="curveLabel">Più spinta alla ruota, finestra velocità più corta</span>
            </div>

            <div className="ratioCard ratioLong">
              <div className="ratioCardTop">
                <span className="ratioBadge badgeLong">Rapporto lungo</span>
              </div>
              <h4>Più respiro, meno regime, più velocità per ogni marcia</h4>
              <p>
                Un rapporto lungo riduce la moltiplicazione ma amplia
                la velocità coperta da ciascuna marcia. Il motore lavora
                a regime più basso a pari andatura, la velocità massima
                teorica aumenta e nei tratti veloci la moto appare più
                composta. Se però allunghi troppo, il motore fatica a
                prendere giri, esce dalla banda utile e in uscita curva
                sembra “vuoto” anche se la potenza massima non è cambiata.
              </p>
              <div className="curveBars curveBarsLong">
                <div className="curveBar" style={{ height: "34%" }} />
                <div className="curveBar" style={{ height: "48%" }} />
                <div className="curveBar" style={{ height: "64%" }} />
                <div className="curveBar" style={{ height: "82%" }} />
                <div className="curveBar curvePeak" style={{ height: "100%" }} />
                <div className="curveBar" style={{ height: "94%" }} />
                <div className="curveBar" style={{ height: "78%" }} />
              </div>
              <span className="curveLabel">Meno moltiplicazione, maggiore allungo per marcia</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FORMULE BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="formuleBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="formuleHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">La matematica dietro</span>
            <h3>Le formule dei rapporti sono semplici — il difficile è interpretarle bene</h3>
          </motion.div>

          <motion.div className="formuleContent" variants={cardVariants}>
            <div className="formulaPanel">
              <span className="formulaEq">R<sub>fin</sub> = Z<sub>corona</sub> / Z<sub>pignone</sub></span>
              <span className="formulaLabel">Rapporto finale</span>

              <span className="formulaEq" style={{ marginTop: "16px" }}>
                R<sub>tot</sub> = R<sub>primario</sub> × R<sub>marcia</sub> × R<sub>fin</sub>
              </span>
              <span className="formulaLabel">Rapporto totale</span>

              <span className="formulaEq" style={{ marginTop: "16px" }}>
                V = (n × C<sub>ruota</sub>) / (R<sub>tot</sub> × 60)
              </span>
              <span className="formulaLabel">Velocità teorica lineare</span>
            </div>

            <div className="formulaText">
              <p>
                Il rapporto finale è il numero di denti della corona
                diviso per il numero di denti del pignone. Ma questo da
                solo non basta a sapere come si muove la moto: va inserito
                nel rapporto totale, cioè nel prodotto di tutte le
                riduzioni tra motore e ruota. Solo allora puoi collegare
                il regime motore alla velocità della moto.
              </p>

              <p>
                Per esempio, con una corona da 50 denti e un pignone da
                13: R<sub>fin</sub> = 50 / 13 = <strong>3,85</strong>.
                Se il primario è 3,10 e la terza marcia è 1,50:
                R<sub>tot</sub> = 3,10 × 1,50 × 3,85 = <strong>17,90</strong>.
                Con ruota da 2,00 m di circonferenza e motore a 8.000 rpm:
                V = (8000 × 2,00) / (17,90 × 60) = <strong>14,9 m/s ≈ 53,7 km/h</strong>.
              </p>

              <p>
                Se cambi solo il finale, cambi molto più di quanto sembri:
                abbassi o alzi la velocità teorica di ogni marcia,
                sposti il punto in cui il motore entra in coppia percepita
                alla ruota e modifichi la distanza funzionale tra una
                marcia e l'altra. I rapporti non cambiano solo il “quanto va” —
                cambiano il “come ci arriva”.
              </p>
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
                Schema / GIF — motore → primario → cambio → pignone → catena → corona → ruota, con evidenza dei tre rapporti che compongono il rapporto totale
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Rapporto totale</span>
            <p>
              La vera utilità di uno schema simile non è estetica ma
              concettuale: mostra che il finale non agisce in isolamento.
              Quando accorci pignone/corona, non stai semplicemente
              “accorciando la moto”: stai aumentando la riduzione totale
              tra motore e ruota. È questo che spiega perché il motore
              sembri più pronto, perché la velocità per marcia si riduca
              e perché il regime salga più rapidamente.
            </p>
          </div>
        </motion.div>

        {/* ── DISCIPLINE BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="disciplineBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="disciplineHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Scelta per utilizzo</span>
            <h3>Cross, enduro, motard, stradale — i rapporti corretti nascono dal terreno prima che dal motore</h3>
            <p>
              Lo stesso motore può sembrare perfetto o sbagliato a seconda
              dei rapporti montati. Il criterio corretto non è chiedersi
              “quale rapporto va di più?”, ma “in quale contesto la ruota
              ha bisogno di più forza e in quale di più velocità?”.
            </p>
          </motion.div>

          <motion.div className="disciplineGrid" variants={cardVariants}>
            <div className="disciplinaCard disciplinaCross">
              <div className="disciplinaCardHeader">
                <span className="disciplinaMarchio">Motocross</span>
                <span className="disciplinaNome">MX / SX</span>
                <span className="disciplinaClaim">Curve strette, rilanci violenti, salti, fondo cedevole</span>
              </div>
              <h4>Rapporti tendenzialmente corti — il motore deve tornare subito in banda</h4>
              <p>
                Nel cross la ruota ha bisogno di accelerare forte in poco
                spazio. Uscite di curva, facce dei salti, sabbia e sezioni
                tecniche richiedono che il motore salga rapidamente di giri
                e non cada fuori coppia tra una marcia e l'altra. Per questo
                i setup da cross privilegiano finali più corti rispetto
                all'uso stradale o motard.
              </p>
            </div>

            <div className="disciplinaCard disciplinaEnduro">
              <div className="disciplinaCardHeader">
                <span className="disciplinaMarchio">Enduro</span>
                <span className="disciplinaNome">Hard / XC</span>
                <span className="disciplinaClaim">Lento tecnico + trasferimenti veloci + trazione irregolare</span>
              </div>
              <h4>Compromesso ampio — abbastanza corto nel tecnico, non troppo corto sul veloce</h4>
              <p>
                L'enduro è il regno del compromesso perché mette insieme
                pietraie lente, mulattiere, salite e tratti di collegamento.
                Un rapporto troppo corto fa urlare il motore nei trasferimenti;
                uno troppo lungo rende estenuante il tecnico. La scelta giusta
                è quella che tiene la prima e la seconda utili nel lento senza
                compromettere eccessivamente quarta, quinta e sesta.
              </p>
            </div>

            <div className="disciplinaCard disciplinaMotard">
              <div className="disciplinaCardHeader">
                <span className="disciplinaMarchio">Supermotard</span>
                <span className="disciplinaNome">SM / SMX</span>
                <span className="disciplinaClaim">Asfalto, forte grip, frenate dure, uscite di curva pulite</span>
              </div>
              <h4>Rapporti più lunghi e più stabili — la velocità per marcia conta di più</h4>
              <p>
                Nel motard le curve si escono con molto grip e i rettilinei
                hanno più peso che nel cross. Il motore può permettersi
                rapporti più lunghi perché il fondo restituisce trazione e
                non c'è bisogno di moltiplicare in modo estremo come sulla
                sabbia o nel fango. Conta molto avere una seconda e una terza
                utilizzabili in modo ampio e pulito.
              </p>
            </div>

            <div className="disciplinaCard disciplinaStradale">
              <div className="disciplinaCardHeader">
                <span className="disciplinaMarchio">Stradale / Track</span>
                <span className="disciplinaNome">Road / Circuit</span>
                <span className="disciplinaClaim">Velocità sostenuta, comfort, consumi, regime medio</span>
              </div>
              <h4>Rapporti più lunghi o equilibrati — meno stress, più allungo utile</h4>
              <p>
                Su strada e pista l'obiettivo cambia: meno necessità di
                esplodere fuori da curve lentissime e più interesse per
                velocità, stabilità e regime ragionevole in percorrenza.
                Un rapporto troppo corto rende la moto nervosa, rumorosa
                e affaticante; uno corretto la rende più sfruttabile,
                più lineare e meno stancante sul lungo.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── ERRORI BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="erroriBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="erroriHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Errori comuni</span>
            <h3>I quattro errori più frequenti quando si cambiano i rapporti senza capire il sistema</h3>
            <p>
              Cambiare i rapporti è facile. Cambiarli bene è un'altra
              cosa. Gli errori più comuni nascono dal confondere le
              sensazioni del pilota con le cause meccaniche reali.
            </p>
          </motion.div>

          <motion.div className="erroriGrid" variants={cardVariants}>
            <div className="erroreCard erroreCard1">
              <span className="erroreNum">01</span>
              <h4>Accorciare per “avere più potenza”</h4>
              <p>
                Il rapporto non crea potenza. Crea una diversa moltiplicazione
                della coppia alla ruota. La moto può sembrare più potente
                perché reagisce prima e sale di giri più in fretta, ma la
                potenza massima del motore non è aumentata. È una differenza
                fondamentale.
              </p>
            </div>

            <div className="erroreCard erroreCard2">
              <span className="erroreNum">02</span>
              <h4>Allungare troppo per inseguire la velocità massima</h4>
              <p>
                Una velocità teorica più alta non serve se il motore non ha
                abbastanza forza per raggiungerla. Un rapporto troppo lungo
                può ridurre talmente tanto l'accelerazione da impedire al
                motore di arrivare vicino al regime di potenza utile in marcia
                alta. Risultato: sulla carta più veloce, nella realtà più lenta.
              </p>
            </div>

            <div className="erroreCard erroreCard3">
              <span className="erroreNum">03</span>
              <h4>Giudicare il setup solo dal rettilineo</h4>
              <p>
                Il rapporto giusto si giudica sull'intero giro o sull'intero
                percorso, non solo sul punto in cui il motore urla di più.
                Se guadagni 3 km/h in fondo al rettilineo ma perdi tutte le
                uscite di curva, il setup è peggiorato. La velocità utile è
                sempre quella media, non quella di un solo segmento.
              </p>
            </div>

            <div className="erroreCard erroreCard4">
              <span className="erroreNum">04</span>
              <h4>Non considerare ruota, gomma e circonferenza effettiva</h4>
              <p>
                Cambiare misura ruota o pneumatico cambia la distanza percorsa
                a ogni giro ruota. Quindi cambia, di fatto, anche il risultato
                finale del rapporto. Non tenerne conto porta a valutazioni
                sbagliate sul comportamento della moto dopo una modifica.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="diagnosiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnosiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi pratica</span>
            <h3>Come capire se i rapporti sono sbagliati senza aprire un foglio Excel</h3>
            <p>
              I numeri servono, ma prima ancora serve saper leggere il
              comportamento della moto. Un rapporto errato si sente molto
              chiaramente, se sai interpretare i sintomi.
            </p>
          </motion.div>

          <motion.div className="diagnosiGrid" variants={cardVariants}>
            <div className="diagnosiCard diagnosiCard1">
              <span className="diagnosiBadge">Segnale</span>
              <h4>Il motore arriva sempre troppo presto al limitatore</h4>
              <p>
                Se in più punti del tracciato o del percorso ti ritrovi
                costretto a cambiare marcia troppo presto, è probabile che
                il finale sia troppo corto per quell'uso. Non significa che
                sia sbagliato in assoluto, ma che in quel contesto stai
                finendo la marcia prima di sfruttarla davvero.
              </p>
            </div>

            <div className="diagnosiCard diagnosiCard2">
              <span className="diagnosiBadge">Segnale</span>
              <h4>In uscita curva il motore cade fuori banda e impiega troppo a riprendere</h4>
              <p>
                Questo è uno dei segnali classici di rapporto troppo lungo.
                Apri il gas, ma il motore non trova subito la zona utile
                e la moto sembra “seduta”. Se il problema è sistematico
                e non dipende dalla guida, il rapporto va probabilmente accorciato.
              </p>
            </div>

            <div className="diagnosiCard diagnosiCard3">
              <span className="diagnosiBadge">Segnale</span>
              <h4>Sei costretto a cambiare marcia troppo spesso nel tecnico</h4>
              <p>
                Se tra una curva e l'altra o tra un ostacolo e l'altro
                passi il tempo a cercare la marcia giusta, i rapporti non
                stanno aiutando il motore a restare sfruttabile. Un setup
                corretto riduce il lavoro mentale del pilota, non lo aumenta.
              </p>
            </div>

            <div className="diagnosiCard diagnosiCard4">
              <span className="diagnosiBadge">Segnale</span>
              <h4>A velocità di crociera il motore sembra sempre troppo alto di giri</h4>
              <p>
                Se in trasferimento, su strada o su tratti veloci il motore
                gira costantemente troppo alto, consuma, vibra e stanca,
                il setup può essere eccessivamente corto. In quel caso
                allungare leggermente restituisce respiro senza per forza
                peggiorare la guidabilità generale.
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
            <span className="captionTag">Lettura del tracciato</span>
            <p>
              Il rapporto corretto non nasce da un numero assoluto, ma da
              un'analisi del contesto: lunghezza dei rettilinei, velocità
              minima nelle curve, consistenza del terreno, grip disponibile,
              tipo di erogazione motore e livello del pilota. Per questo
              due moto identiche sullo stesso tracciato possono usare setup
              diversi se uno dei due piloti guida più pulito o più aggressivo.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Immagine / schema — confronto tra due tracciati: uno tecnico-lento e uno veloce-aperto, con indicazione di dove serve rapporto corto o lungo
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── STRATEGIA BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="strategiaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="strategiaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Metodo di lavoro</span>
            <h3>Come cambiare i rapporti in modo intelligente — una modifica per volta, con un criterio chiaro</h3>
            <p>
              Il modo corretto di lavorare sui rapporti non è inseguire
              sensazioni vaghe ma usare un metodo semplice e ripetibile.
            </p>
          </motion.div>

          <motion.div className="strategiaGrid" variants={cardVariants}>
            <div className="stepCard">
              <div className="stepNum">1</div>
              <h4>Parti sempre dal setup stock</h4>
              <p>
                Il rapporto originale del costruttore è quasi sempre una
                base sensata. Non perfetta per tutto, ma abbastanza neutra
                da darti un riferimento. Cambiare senza un punto zero
                significa rendere inutili i confronti.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNum">2</div>
              <h4>Modifica un solo parametro per volta</h4>
              <p>
                Cambia prima il pignone oppure la corona, non entrambi
                insieme in modo casuale. Se modifichi più variabili nello
                stesso momento, perdi la capacità di capire quale modifica
                ha prodotto quale effetto.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNum">3</div>
              <h4>Valuta il comportamento in più punti del percorso</h4>
              <p>
                Prendi nota di tre zone chiave: uscita curva lenta,
                tratto medio e tratto veloce. Se il nuovo rapporto migliora
                solo una zona ma peggiora nettamente le altre due, non è
                un vero miglioramento globale.
              </p>
            </div>

            <div className="stepCard">
              <div className="stepNum">4</div>
              <h4>Segna tutto: denti, gomme, terreno, sensazioni</h4>
              <p>
                Senza appunti il pilota ricorda male. Un taccuino con
                pignone, corona, tipo di terreno, temperatura e commenti
                reali vale più di tante impressioni a memoria. È così
                che i setup smettono di essere casuali.
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
            <span className="cardTag">Intervallo marce</span>
            <h3>Close ratio e wide ratio — non tutti i cambi hanno la stessa filosofia</h3>
            <p>
              Un cambio close-ratio ha marce ravvicinate: il motore perde
              meno giri tra una marcia e l'altra ma copre un range totale
              più stretto. Un wide-ratio fa l'opposto: più distanza tra
              le marce, ma maggiore versatilità complessiva. Questo cambia
              radicalmente il modo in cui il finale viene percepito.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Motore e rapporti</span>
            <h3>Un due tempi stretto di banda e un quattro tempi pieno non chiedono la stessa trasmissione</h3>
            <p>
              Un motore con banda utile stretta pretende rapporti che lo
              tengano sempre vicino al regime corretto. Un motore più pieno
              e lineare tollera meglio rapporti lunghi o salti maggiori tra
              le marce. Per questo i rapporti non si scelgono mai davvero
              “per cilindrata”, ma per curva di erogazione.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Regola pratica</span>
            <h3>Il rapporto giusto è quello che rende il motore sfruttabile, non quello che impressiona di più</h3>
            <p>
              Se una moto sembra violentissima ma ti costringe a guidare
              sempre in correzione, il rapporto probabilmente è sbagliato.
              Il setup buono non è quello che fa scena sul primo rettilineo:
              è quello che ti permette di usare il motore in modo pulito,
              ripetibile e veloce per tutto il percorso.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Rapporti;