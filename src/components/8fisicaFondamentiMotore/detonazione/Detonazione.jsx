import "./detonazione.scss";
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

const Detonazione = () => {
  return (
    <section className="detonazione" id="detonazione">
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
              Fisica — 8.6
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Detonazione: quando la combustione si trasforma in esplosione
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Una combustione normale dura circa 1 – 2 millisecondi
              e procede come un fronte di fiamma ordinato che si
              espande dalla candela verso le pareti del cilindro
              a 20 – 40 m/s. Una detonazione dura frazioni di
              millisecondo e si propaga a 300 – 800 m/s — dieci
              volte più veloce, con pressioni istantanee nel
              cilindro che possono superare i 100 bar invece
              dei 60 – 70 bar nominali. Quella differenza di
              velocità e pressione è la distanza tra un motore
              che funziona e un motore che si distrugge.
              Il suono metallico caratteristico della detonazione —
              il "ting-ting" ad alta frequenza che si sente
              in accelerazione — è letteralmente il suono del
              pistone che subisce martellate da onde di pressione
              anomale.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Nel motore a 2 tempi la detonazione è ancora più
              pericolosa che nel 4 tempi per una ragione strutturale:
              il pistone del 2T è più sottile, più leggero,
              lavora a temperature più alte e non ha il beneficio
              dell'olio in pressione che lo raffredda dall'interno.
              Un 4T sopravvive a qualche ciclo di detonazione
              con danni limitati alle fasce. Un 2T può bucarsi
              il pistone in pochi secondi di detonazione intensa —
              e un pistone bucato significa frammenti metallici
              nel cilindro, biella piegata, carter distrutto.
              Riconoscere e prevenire la detonazione non è
              una raccomandazione: è l'unica cosa che separa
              il motore intero da un cofanetto di rottami.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Quattro concetti fondamentali</span>
              <h3>Combustione normale, detonazione, pre-accensione e prevenzione</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Combustione normale — fronte di fiamma ordinato da candela a parete, pressione progressiva, 20 – 40 m/s</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Detonazione (knock) — autoaccensione spontanea della carica residua, onde di pressione a 300 – 800 m/s</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Pre-accensione — ignizione prima della scintilla per punto caldo nel cilindro; più distruttiva della detonazione</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Prevenzione — carburazione corretta, ottano adeguato, anticipo calibrato, candela giusta, cilindro pulito</span>
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
              <span className="placeholderText">Immagine / GIF — confronto fronte di fiamma normale vs detonazione in sezione cilindro animata</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Fronte di fiamma</span>
            <p>
              La differenza visiva tra combustione normale e
              detonazione è drastica. Nella combustione normale
              il fronte di fiamma parte dall'elettrodo della candela
              e si espande in modo sferico e ordinato — la pressione
              nel cilindro sale gradualmente, spingendo il pistone
              verso il basso in modo progressivo. Nella detonazione
              la carica non ancora bruciata (end-gas) nella zona
              più lontana dalla candela raggiunge temperatura
              e pressione critiche e si autoaccende spontaneamente
              prima che il fronte di fiamma la raggiunga. Il risultato
              è la collisione di due fronti di combustione — uno
              propagato dalla candela, uno dal frammento autoacceso —
              che genera un'onda di pressione a elevata frequenza
              (6 – 10 kHz) che percuote le pareti del cilindro
              e la calotta del pistone come un martello.
            </p>
          </div>
        </motion.div>

        {/* ── MECCANISMO BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="meccanismoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="meccanismoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">I quattro meccanismi</span>
            <h3>Combustione normale, knock, pre-accensione e detonazione da depositi — distinguerli per agire</h3>
            <p>
              Non tutte le combustioni anomale sono uguali.
              Detonazione e pre-accensione sono spesso confuse
              ma hanno cause, meccanismi e conseguenze diverse —
              e richiedono interventi diversi. Capire quale
              dei due fenomeni si sta verificando è il primo
              passo per risolverlo senza aggravarlo.
            </p>
          </motion.div>

          <motion.div className="meccanismoGrid" variants={cardVariants}>

            <div className="meccanismoCard">
              <div className="meccanismoCardTop">
                <span className="meccanismoBadge badgeDefinizione">Definizione</span>
                <span className="meccanismoSub">Combustione normale</span>
              </div>
              <h4>Fronte di fiamma ordinato — come dovrebbe sempre andare</h4>
              <p>
                La combustione normale inizia con la scintilla
                della candela al momento esatto stabilito dall'anticipo
                di accensione — tipicamente 18 – 28° prima del PMS
                nei motori a 2T da cross. Il fronte di fiamma
                si propaga radialmente dalla candela attraverso
                la miscela aria-carburante a 20 – 40 m/s,
                raggiungendo tutte le pareti del cilindro in
                0,8 – 1,5 ms. La pressione sale in modo graduale
                e prevedibile, raggiunge il picco di 55 – 70 bar
                leggermente dopo il PMS e spinge il pistone
                verso il basso con forza uniforme per tutta
                la fase di espansione. Nessun suono anomalo,
                nessuna vibrazione ad alta frequenza, tutta
                la geometria del cilindro intatta.
              </p>
            </div>

            <div className="meccanismoCard">
              <div className="meccanismoCardTop">
                <span className="meccanismoBadge badgeFatto">Fatto</span>
                <span className="meccanismoSub">Detonazione (knock)</span>
              </div>
              <h4>Autoaccensione dell'end-gas — la causa più comune di danni al pistone 2T</h4>
              <p>
                La detonazione si verifica quando la porzione
                di miscela ancora non bruciata (end-gas) nella
                zona più lontana dalla candela raggiunge la
                temperatura di autoaccensione (circa 350 – 450 °C
                per la benzina) prima che il fronte di fiamma
                normale la raggiunga. L'end-gas si autoaccende
                istantaneamente in tutto il suo volume — non
                progressivamente come nel fronte normale —
                generando un picco di pressione localizzato
                di 80 – 120 bar in pochi microsecondi. Questa
                onda di pressione percuote la calotta del pistone
                con forza d'urto ripetuta. I danni tipici:
                erosione della calotta (aspetto "sabbiate"),
                bruciatura della fascia superiore, micropori
                nel materiale del pistone. Se prolungata,
                perforazione completa della calotta.
              </p>
            </div>

            <div className="meccanismoCard">
              <div className="meccanismoCardTop">
                <span className="meccanismoBadge badgeRecord">Record</span>
                <span className="meccanismoSub">Pre-accensione</span>
              </div>
              <h4>Ignizione prima della scintilla — più distruttiva della detonazione ordinaria</h4>
              <p>
                La pre-accensione è l'accensione della miscela
                prima che la candela scocchi la scintilla —
                causata da un punto caldo nel cilindro che ha
                temperatura sufficiente per innescare la combustione.
                Punti caldi tipici: il bordo dell'elettrodo della
                candela surriscaldato (candela troppo calda o
                troppo usurata), depositi di carbonio incandescenti
                sulla calotta del pistone o sulla testa, una
                valvola di scarico incandescente (non presente
                nel 2T, ma i bordi delle porte di scarico possono
                surriscaldarsi). La pre-accensione può verificarsi
                prima di 40 – 60° PMS — quando il pistone è ancora
                in salita e sta comprimendo la miscela. La pressione
                generata si oppone direttamente al moto del pistone:
                il carico sulla biella può superare il doppio
                del valore nominale. Conseguenza: biella piegata,
                cuscinetti di banco distrutti, carter spaccato.
              </p>
            </div>

            <div className="meccanismoCard">
              <div className="meccanismoCardTop">
                <span className="meccanismoBadge badgeFatto">Fatto</span>
                <span className="meccanismoSub">Detonazione da depositi</span>
              </div>
              <h4>Carbonio come innesco — il nemico silenzioso che si accumula nel tempo</h4>
              <p>
                I depositi di carbonio sulla calotta del pistone
                e sulla testa cilindro svolgono due ruoli
                negativi simultanei. Primo: riducono il volume
                della camera di combustione, aumentando il
                rapporto di compressione effettivo al di sopra
                di quello di progetto — la miscela viene compressa
                di più, raggiunge temperature più alte e si
                avvicina alla detonazione. Secondo: i depositi
                di carbonio incandescenti funzionano come
                punti di accensione autonomi, innescando
                pre-accensioni localizzate. Un millimetro
                di depositi su un 125cc da competizione con
                camera di 6 cc può aumentare il rapporto
                di compressione di quasi un punto intero —
                da 14:1 a 15:1 — portando il motore in zona
                di detonazione con il carburante e l'anticipo
                originali. La pulizia periodica della camera
                non è estetica: è manutenzione preventiva.
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
            <span className="captionTag">Le cause della detonazione</span>
            <p>
              Le cause della detonazione nel 2T si raggruppano
              in tre categorie: chimica (carburante con ottano
              insufficiente o miscela troppo magra), termica
              (temperatura di combustione troppo alta per anticipo
              eccessivo, candela calda o raffreddamento insufficiente)
              e geometrica (rapporto di compressione aumentato
              da depositi o da modifica non calibrata). Nella
              pratica le cause si combinano — una miscela leggermente
              magra con un anticipo leggermente eccessivo in
              una giornata calda con un cilindro con depositi
              di carbonio è una combinazione che da sola non
              sarebbe detonante ma insieme supera la soglia.
              La detonazione è quasi sempre il risultato
              di più fattori che si sommano, non di un singolo
              errore isolato.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — pistone con erosione da detonazione vs pistone sano: confronto calotta</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── CAUSE BLOCK ──────────────────────────────────────────────────── */}
        <motion.div
          className="causeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="causeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Le tre cause principali</span>
            <h3>Miscela magra, ottano insufficiente e anticipo eccessivo — agire sulla radice, non sul sintomo</h3>
            <p>
              Ogni causa della detonazione ha un intervento correttivo
              specifico. Trattarle tutte con "metto più benzina"
              o "riduco l'anticipo" è sbagliato: copre il sintomo
              senza risolvere il problema e spesso peggiora
              le prestazioni senza eliminare il rischio.
            </p>
          </motion.div>

          <motion.div className="causeGrid" variants={cardVariants}>

            <div className="causeCard causeMagra">
              <div className="causeCardTop">
                <span className="causeBadge badgeMagra">Miscela magra</span>
                <span className="causeRischio">Rischio alto</span>
              </div>
              <h4>Carburazione magra — la causa più comune e più facilmente eliminabile</h4>
              <p>
                Una miscela magra (λ &gt; 1,02) brucia più calde:
                l'eccesso di ossigeno porta la combustione a
                temperature più elevate, avvicinando la zona di
                autoaccensione dell'end-gas. Nel 2T la magrezza
                aggiunge il rischio lubrificazione — meno benzina
                significa meno olio trasportato alle superfici
                di strisciamento. I segnali sono inequivocabili:
                candela bianca, temperatura scarico alta, motore
                che "tira" male ai medi con risposta secca alla
                manetta. L'intervento: aumentare il main jet
                di 5 – 10 numeri, alzare il clip dell'ago
                di una posizione (più ricco ai medi), verificare
                che il filtro aria non sia intasato e che
                non ci siano perdite d'aria nel collettore
                di aspirazione. Un getto corretto in estate
                potrebbe essere magro in inverno — la calibrazione
                stagionale è obbligatoria.
              </p>
            </div>

            <div className="causeCard causeOttano">
              <div className="causeCardTop">
                <span className="causeBadge badgeOttano">Ottano basso</span>
                <span className="causeRischio">Rischio medio-alto</span>
              </div>
              <h4>Numero di ottano insufficiente — il carburante sbagliato per il motore sbagliato</h4>
              <p>
                Il numero di ottano (RON, Research Octane Number)
                misura la resistenza del carburante all'autoaccensione
                sotto compressione: più alto è il RON, più la
                benzina resiste alla detonazione prima di
                autoaccendersi. Un motore a 2T da competizione
                con rapporto di compressione 14:1 richiede
                benzina con RON 98 – 100 minimo. Con benzina
                ordinaria da distributore (RON 95) il margine
                di sicurezza si riduce drasticamente, specialmente
                in condizioni di caldo, carico elevato e anticipo
                standard. La benzina da competizione (Shell V-Power
                Racing, Eni Multifleet, Q8 Hi Perform 100) con
                RON 100+ permette anticipo maggiore e rapporti
                di compressione più elevati senza detonazione —
                ma costa 3 – 5 volte la benzina standard.
                Per uso amatoriale il RON 98 è il compromesso
                corretto nella maggior parte dei casi.
              </p>
            </div>

            <div className="causeCard causeAnticipo">
              <div className="causeCardTop">
                <span className="causeBadge badgeAnticipo">Anticipo eccessivo</span>
                <span className="causeRischio">Rischio alto</span>
              </div>
              <h4>Anticipo di accensione troppo anticipato — più performance, meno margine antidetona</h4>
              <p>
                L'anticipo di accensione (timing) determina
                in quale momento del ciclo viene accesa la
                miscela — espresso in gradi prima del PMS (BTDC).
                Più anticipo significa che la combustione inizia
                prima, la pressione massima si raggiunge più
                vicino al PMS e la spinta sul pistone è più
                efficace — quindi più potenza. Ma più anticipo
                significa anche che la miscela viene compressa
                più a lungo prima della combustione, raggiungendo
                temperature più alte, avvicinandosi alla soglia
                di autoaccensione. C'è un anticipo ottimale
                per ogni combinazione di carburante, rapporto
                di compressione e regime — superarlo aumenta
                la potenza fino al limite e poi la distrugge.
                Nei motori con CDI fisso (senza mappatura
                variabile) l'anticipo è scelto dal costruttore
                con un margine di sicurezza — modificarlo
                con CDI aftermarket richiede calibrazione attenta.
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
              <span className="placeholderText">Immagine / GIF — grafico anticipo ottimale vs detonazione: zona verde/gialla/rossa con potenza sovrapposta</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Anticipo e margine</span>
            <p>
              Il grafico potenza vs anticipo di accensione mostra
              una curva con un massimo preciso — il MBT (Minimum
              advance for Best Torque). A sinistra del MBT la
              potenza è inferiore al massimo perché la combustione
              avviene troppo tardi rispetto al PMS. A destra del
              MBT si entra nella zona di detonazione: la potenza
              può ancora aumentare leggermente, ma il rischio
              di danni aumenta esponenzialmente. Il costruttore
              calibra l'anticipo standard 2 – 5° prima del MBT —
              il margine di sicurezza. I CDI da competizione
              permettono di lavorare più vicini al MBT accettando
              il rischio maggiore, con un guadagno di 1 – 3%
              di potenza. Ogni gradi di anticipo in più è una
              scommessa sulla qualità del carburante, la temperatura
              del giorno e lo stato del cilindro.
            </p>
          </div>
        </motion.div>

        {/* ── GRANDEZZE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="grandezzeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="grandezzeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Glossario e numeri</span>
            <h3>Formule, fatti e record — i numeri che devi conoscere sulla detonazione del 2T</h3>
            <p>
              La detonazione è un fenomeno fisico con parametri
              misurabili. Conoscere i numeri dietro al fenomeno
              trasforma la diagnosi da "sento un rumore strano"
              a "so esattamente cosa sta succedendo e come correggerlo".
            </p>
          </motion.div>

          <motion.div className="grandezzeGrid" variants={cardVariants}>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeDefinizione">Definizione</span>
              <h4>RON e MON — i due numeri di ottano e la differenza che conta</h4>
              <p>
                Il RON (Research Octane Number) si misura in condizioni
                di banco standardizzate a basso regime e bassa
                temperatura — è il numero stampato sulla pompa.
                Il MON (Motor Octane Number) si misura in condizioni
                più severe (regime alto, temperatura alta) e
                è sempre inferiore al RON di 8 – 12 punti.
                La benzina da 95 alla pompa ha RON 95 e MON circa 85.
                L'AKI (Anti-Knock Index) usato negli USA è la media
                (RON + MON) / 2 — per questo la "95" europea corrisponde
                alla "91" americana. Per un 2T da competizione
                il parametro rilevante è il MON: nelle condizioni
                di piena potenza a 12.000 rpm è il MON che determina
                la resistenza alla detonazione, non il RON.
                Una benzina RON 100 / MON 88 ha meno margine
                antidetona a caldo di una RON 98 / MON 90.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>Temperatura di autoaccensione: T_aut ≈ 350 – 450 °C per la benzina</h4>
              <p>
                La temperatura di autoaccensione (T_aut) è la
                temperatura minima alla quale un carburante si
                autoaccende spontaneamente senza scintilla esterna,
                in presenza di aria a pressione standard. Per
                la benzina ordinaria T_aut ≈ 350 – 450 °C.
                Durante la fase di compressione nel 2T da
                competizione la miscela raggiunge 200 – 280 °C
                prima della scintilla — ben al di sotto di T_aut,
                quindi in condizioni normali non si autoaccende.
                Ma se la temperatura di fine compressione sale
                per anticipo eccessivo, rapporto di compressione
                aumentato da depositi o densità della miscela
                insufficiente (magrezza), la T_aut diventa
                raggiungibile prima che il fronte di fiamma
                normale consumi l'end-gas. Ogni grado in più
                di temperatura di fine compressione avvicina
                il motore alla soglia di detonazione.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>Frequenza del knock: 6 – 10 kHz — il suono fisico della detonazione</h4>
              <p>
                Le onde di pressione generate dalla detonazione
                oscillano alla frequenza naturale della camera
                di combustione — determinata dalla geometria
                del cilindro e dalla velocità del suono nei
                gas combusti (circa 800 – 1.000 m/s a quelle
                temperature). Per un cilindro con alesaggio
                di 54 mm la frequenza fondamentale è circa
                f = v_suono / (2 × D) = 900 / (2 × 0,054)
                = 8.333 Hz — nell'intervallo 6 – 10 kHz.
                Questo è il "ting" metallico ad alta frequenza
                che si sente durante la detonazione. Nei motori
                moderni da 4T i sensori knock misurano
                esattamente questa frequenza e correggono
                l'anticipo in tempo reale. I 2T da fuoristrada
                non montano questi sensori — l'orecchio del
                pilota è l'unico sistema di rilevamento disponibile.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>Danno da detonazione: 10 – 30 secondi di knock intenso perforano il pistone</h4>
              <p>
                La velocità con cui la detonazione distrugge
                un pistone 2T dipende dall'intensità del knock
                e dalla struttura del pistone. In condizioni
                di knock leggero (appena percettibile all'orecchio)
                il danno è lento — erosione progressiva della
                calotta in ore di utilizzo. In condizioni di
                knock intenso (chiaramente udibile, candela
                bianca, miscela magra) un pistone da cross in
                alluminio 2618 può essere perforato in 10 –
                30 secondi di funzionamento a piena potenza.
                Il primo segnale di danno è il segnale di fumo
                azzurro denso dallo scarico (olio del carter
                che entra nel cilindro attraverso il foro
                nel pistone). Poi il motore si blocca o perde
                tutta la compressione. A quel punto i frammenti
                del pistone hanno già danneggiato cilindro,
                biella e spesso i cuscinetti.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>Indice di ottano necessario: RON_min = 5 × Rc + 50 (stima pratica)</h4>
              <p>
                Una formula empirica usata dai motoristi per
                stimare il RON minimo necessario in funzione
                del rapporto di compressione è: RON_min ≈ 5 × Rc
                + 50, dove Rc è il rapporto di compressione
                geometrico. Per Rc = 13:1 → RON_min ≈ 5 × 13
                + 50 = 115. Questo sembra troppo alto — nessuna
                benzina stradale raggiunge 115 — ma la formula
                è valida per 4T a quattro tempi senza refrigerazione
                interna. Il 2T beneficia del raffreddamento
                a miscela del carter e del ciclo più breve, che
                abbassa il RON effettivo necessario: i motoristi
                del 2T usano una stima più conservativa di
                RON_min ≈ 4 × Rc + 42, che per Rc = 14:1
                dà RON ≈ 98 — in accordo con la pratica reale.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeRecord">Record</span>
              <h4>Metanolo: RON 119, T_aut 470 °C — il carburante che elimina la detonazione</h4>
              <p>
                Il metanolo (CH₃OH) è il carburante antidetona
                per eccellenza nei motori da competizione:
                RON 119, MON 104, temperatura di autoaccensione
                470 °C (superiore alla benzina), calore latente
                di vaporizzazione 1.109 kJ/kg (contro 305 kJ/kg
                della benzina) — si evaporando raffredda
                la miscela molto più della benzina, abbassando
                la temperatura di fine compressione di 30 – 50 °C.
                Questo permette rapporti di compressione di
                16 – 20:1 senza detonazione — impossibile con
                benzina. I motori da kartcross e alcune categorie
                di speedway usano metanolo puro o misture
                metanolo-benzina per questo motivo. Il limite
                è la corrosività: il metanolo attacca le leghe
                di zinco, i giunti in gomma e i serbatoi in
                vetroresina — richiede componenti compatibili
                in tutto il circuito carburante.
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
            <span className="cardTag">Riconoscere la detonazione</span>
            <h3>I segnali da non ignorare — come diagnosticare il knock prima del danno</h3>
            <p>
              La detonazione si riconosce con l'orecchio, con
              gli occhi e con la mano. Orecchio: un suono metallico
              ad alta frequenza ("ting-ting") durante la piena
              accelerazione, diverso dal normale suono meccanico
              del motore — spesso si sente solo a determinati
              regimi dove il knock è più intenso. Occhi:
              fumo bianco-azzurro denso dallo scarico anche
              a motore caldo (pistone che inizia a perdere la
              tenuta), candela bianca all'ispezione. Mano:
              temperature del cilindro e della testa molto
              più alte del normale a parità di utilizzo.
              Se si sentono questi segnali, fermare il motore
              immediatamente e non riavviarlo fino a dopo
              la diagnosi e la correzione. Ogni minuto di
              funzionamento con knock in corso è danno cumulativo
              irreversibile.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Prevenzione sistematica</span>
            <h3>Il protocollo antidetona — cinque controlli che proteggono il motore</h3>
            <p>
              La prevenzione della detonazione si basa su un
              protocollo sistematico da applicare all'inizio
              di ogni stagione e ogni volta che cambiano le
              condizioni di utilizzo. Uno: verificare e calibrare
              la carburazione per la temperatura e la quota
              correnti — mai usare la calibrazione invernale
              in estate. Due: usare carburante con RON adeguato
              al rapporto di compressione del motore — RON 95
              per motori standard, RON 98 – 100 per motori
              elaborati. Tre: pulire la camera di combustione
              e la calotta del pistone dai depositi di carbonio
              ogni 40 – 50 ore. Quattro: montare la candela
              corretta per il numero di calore. Cinque: non
              modificare l'anticipo di accensione senza ricalibrare
              contemporaneamente la carburazione.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Carburanti racing</span>
            <h3>Benzina da competizione vs pompa — quando vale la differenza di costo</h3>
            <p>
              La benzina da competizione (RON 98 – 102, MON 88 – 92)
              costa 3 – 5 volte la benzina da distributore e non
              è acquistabile ovunque — richiede distributori
              specializzati o acquisto in lattina. Vale la spesa
              solo in condizioni specifiche: motore con rapporto
              di compressione maggiorato (oltre 14:1), utilizzo
              in condizioni di caldo estremo (sopra 35 °C),
              utilizzo a piena potenza sostenuta (gare, sessioni
              cronometrate), anticipo di accensione modificato
              verso il MBT. Per utilizzo amatoriale con motore
              standard in condizioni normali, RON 98 da
              distributore ordinario è sufficiente. Aggiungere
              additivi antidetona (MTBE, MMT) al carburante
              ordinario può aumentare il RON effettivo di
              1 – 3 punti — soluzione intermedia a basso costo.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Detonazione;
