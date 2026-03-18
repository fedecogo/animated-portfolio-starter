import "./rapportoAriaBenzina.scss";
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

const RapportoAriaBenzina = () => {
  return (
    <section className="rapportoAriaBenzina" id="rapportoAriaBenzina">
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
              Fisica — 8.5
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Rapporto aria-benzina: la chimica che brucia dentro il cilindro
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Ogni combustione è una reazione chimica precisa.
              Per bruciare completamente un grammo di benzina
              servono esattamente 14,7 grammi di aria — né di più,
              né di meno. Questo è il rapporto stechiometrico:
              il punto di equilibrio chimico perfetto dove tutto
              il carburante brucia e tutto l'ossigeno viene
              consumato. Nella realtà operativa un motore non
              lavora sempre a questo punto esatto — e la scelta
              di dove lavorare, se leggermente ricco o leggermente
              magro rispetto allo stechiometrico, determina potenza,
              temperatura, consumo e durata della meccanica.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Nel motore a 2 tempi il rapporto aria-benzina ha
              un ruolo doppio che non esiste nel 4 tempi: la
              benzina non è solo carburante, è anche il vettore
              dell'olio di lubrificazione per cuscinetti e pareti.
              Questo vincolo obbliga il 2T a lavorare sempre
              leggermente ricco rispetto allo stechiometrico puro —
              una miscela troppo magra non solo abbassa la potenza
              e scalda eccessivamente il motore, ma priva i
              componenti interni della loro unica fonte di
              lubrificazione. Calibrare il rapporto aria-benzina
              su un 2T non è solo una questione di prestazioni:
              è una questione di sopravvivenza del motore.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Quattro concetti fondamentali</span>
              <h3>Stechiometria, lambda, ricco, magro</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Stechiometrico — 14,7:1 (aria:benzina in massa) è il rapporto chimicamente perfetto per combustione completa</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Lambda (λ) — rapporto tra aria effettiva e aria stechiometrica: λ=1 esatto, λ&lt;1 ricco, λ&gt;1 magro</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Ricco (λ 0.85–0.95) — più benzina del necessario: più potenza di picco, temperature più basse, più consumo</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Magro (λ &gt;1.05) — meno benzina del necessario: meno potenza, temperatura alta, rischio grippaggio nel 2T</span>
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
              <span className="placeholderText">Immagine / GIF — grafico lambda vs potenza/temperatura/consumo con zona ottimale evidenziata</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Curva lambda</span>
            <p>
              Il grafico che sovrappone potenza, temperatura di
              scarico e consumo al variare di lambda è uno degli
              strumenti più utili per capire la calibrazione
              di un motore. La potenza massima si raggiunge
              leggermente ricca rispetto allo stechiometrico —
              intorno a λ = 0,87 – 0,92 per i motori a 2 tempi
              da cross. La temperatura di scarico è minima con
              miscela ricca e sale rapidamente al diminuire
              della benzina. Il consumo è minimo vicino allo
              stechiometrico. La zona operativa ottimale per
              il 2T è la finestra tra λ = 0,85 e λ = 0,95 —
              abbastanza ricca da lubrificare e raffreddare
              internamente, abbastanza magra da bruciare in
              modo efficiente.
            </p>
          </div>
        </motion.div>

        {/* ── LAMBDA BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="lambdaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="lambdaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il coefficiente lambda</span>
            <h3>λ = 1, λ &lt; 1, λ &gt; 1 — la mappa chimica del motore in tre zone</h3>
            <p>
              Il coefficiente lambda è il parametro universale
              che descrive il rapporto aria-carburante in modo
              indipendente dal tipo di carburante. Non importa
              se si parla di benzina, metanolo o etanolo — λ = 1
              indica sempre la combustione stechiometrica perfetta
              per quel carburante. È il linguaggio comune tra
              motoristi, carburatoristi e calibratori di iniezione.
            </p>
          </motion.div>

          <motion.div className="lambdaGrid" variants={cardVariants}>

            <div className="lambdaCard">
              <div className="lambdaCardTop">
                <span className="lambdaBadge badgeFormula">Formula</span>
                <span className="lambdaSub">Definizione stechiometrica</span>
              </div>
              <h4>14,7:1 — la reazione chimica completa della benzina con l'aria</h4>
              <p>
                La reazione di combustione completa della benzina
                (modellata come ottano, C₈H₁₈) con l'ossigeno
                atmosferico è: C₈H₁₈ + 12,5 O₂ → 8 CO₂ + 9 H₂O.
                Tenendo conto che l'aria è composta per il 23,2%
                in massa di ossigeno, la massa di aria necessaria
                per bruciare completamente 1 kg di benzina è
                12,5 × 32 / (0,232 × 1) = 14,7 kg. Questo è
                il rapporto stechiometrico λ = 1 per la benzina.
                Per la miscela 2T con olio sintetico al 2% il
                rapporto stechiometrico effettivo è leggermente
                diverso (circa 14,5:1) perché l'olio ha una
                propria composizione chimica che partecipa
                parzialmente alla combustione.
              </p>
            </div>

            <div className="lambdaCard">
              <div className="lambdaCardTop">
                <span className="lambdaBadge badgeDefinizione">Definizione</span>
                <span className="lambdaSub">Lambda</span>
              </div>
              <h4>λ = m_aria_effettiva / m_aria_stechiometrica — il numero che dice tutto</h4>
              <p>
                Lambda si calcola come il rapporto tra la massa
                d'aria effettivamente aspirata dal motore e la
                massa d'aria teoricamente necessaria per bruciare
                completamente il carburante introdotto: λ = m_aria /
                (m_benzina × 14,7). Se il motore aspira 0,15 kg/min
                di aria e brucia 0,012 kg/min di benzina, λ = 0,15 /
                (0,012 × 14,7) = 0,15 / 0,176 = 0,85 — miscela
                ricca. Lambda non dipende dal regime, dalla
                cilindrata o dalla temperatura — è un numero
                adimensionale che descrive solo la composizione
                chimica della miscela combustibile. È il dato
                che misura la sonda lambda nei 4T stradali moderni
                — i 2T non la montano, ma il concetto è identico.
              </p>
            </div>

            <div className="lambdaCard">
              <div className="lambdaCardTop">
                <span className="lambdaBadge badgeFatto">Fatto</span>
                <span className="lambdaSub">Miscela ricca (λ &lt; 1)</span>
              </div>
              <h4>λ = 0,85 – 0,95 — la zona di potenza massima e protezione termica</h4>
              <p>
                Con miscela ricca c'è più benzina di quanta ne serva
                per bruciare tutto l'ossigeno. L'eccesso di benzina
                non brucia — si trasforma in idrocarburi incombusti
                allo scarico (fumo bianco-bluastro caratteristico
                del 2T) e in parte raffredda la camera di combustione
                evaporando. Questo "raffreddamento chimico" è prezioso:
                abbassa la temperatura del pistone e della testa
                cilindro, riducendo il rischio termico. La potenza
                massima si raggiunge a λ ≈ 0,87 – 0,92 perché
                la combustione leggermente ricca produce più pressione
                nel cilindro. Nel 2T la benzina in eccesso trasporta
                anche l'olio di lubrificazione — la ricchezza minima
                funzionale è determinata dalla quantità di olio
                necessaria, non solo dalla chimica della combustione.
              </p>
            </div>

            <div className="lambdaCard">
              <div className="lambdaCardTop">
                <span className="lambdaBadge badgeRecord">Record</span>
                <span className="lambdaSub">Miscela magra (λ &gt; 1)</span>
              </div>
              <h4>λ &gt; 1,05 nel 2T — il limite oltre il quale il motore si autodistrugge</h4>
              <p>
                Con miscela magra c'è meno benzina di quanta ne
                serva — rimane ossigeno non consumato. La combustione
                è più completa e pulita (meno incombusti), ma la
                temperatura di combustione sale: l'eccesso di ossigeno
                brucia tutto il carburante disponibile a temperature
                più alte. Nel 4T stradale la miscela magra migliora
                l'efficienza e riduce le emissioni — è per questo
                che le auto moderne lavorano vicino a λ = 1.
                Nel 2T la miscela magra è pericolosa per una ragione
                aggiuntiva: meno benzina significa meno olio
                trasportato verso i cuscinetti e le pareti del
                cilindro. Sopra λ = 1,05 il rischio di grippaggio
                per carenza di lubrificazione si somma al rischio
                termico — e il motore può distruggersi in pochi
                minuti di funzionamento.
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
            <span className="captionTag">I circuiti del carburatore</span>
            <p>
              Il carburatore a spillo (slide carburetor) dei motori
              a 2 tempi da cross non ha un solo circuito — ne ha
              tre, ognuno dominante in un range di apertura della
              manetta diverso. Il getto del minimo (pilot jet)
              controlla la miscela da 0 a circa 1/4 di gas.
              L'ago conico (needle) con il suo clip controlla
              il range 1/4 – 3/4. Il getto principale (main jet)
              controlla il range 3/4 – piena apertura. Ogni circuito
              va calibrato separatamente — cambiare solo il main
              jet non risolve un problema di risposta a metà gas.
              La calibrazione è un'operazione sistematica che parte
              dal minimo e sale verso la piena apertura.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — schema sezione carburatore con tre circuiti e range di apertura gas</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── CARBURATORE BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="carburatoreBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="carburatoreHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">I tre circuiti</span>
            <h3>Getto minimo, ago e getto principale — calibrare il rapporto aria-benzina in ogni condizione</h3>
            <p>
              Ogni circuito del carburatore risponde a una porzione
              precisa del range di apertura del gas. Capire quale
              circuito è dominante in quale condizione è la base
              per diagnosticare una carburazione errata e intervenire
              con la modifica giusta al primo tentativo.
            </p>
          </motion.div>

          <motion.div className="carburatoreGrid" variants={cardVariants}>

            <div className="carburatoreCard carburatoreMinimo">
              <div className="carburatoreCardTop">
                <span className="carburatoreBadge badgeMinimo">Getto minimo</span>
                <span className="carburatoreRange">0 – ¼ gas</span>
              </div>
              <h4>Pilot jet — il circuito del minimo e della risposta al rilascio</h4>
              <p>
                Il getto del minimo (pilot jet o slow jet) alimenta
                il motore nelle fasi di rilascio del gas, al minimo
                e nella prima apertura. È il circuito che determina
                se il motore "sputa" quando si chiude il gas in
                discesa (troppo ricco) o si spegne al minimo
                (troppo magro). La vite dell'aria (air screw) o
                della miscela (fuel screw) è l'aggiustamento
                fine di questo circuito — solitamente si regola
                tra 1,5 e 3 giri di apertura. Una carburazione
                magra al minimo si riconosce dal motore che "stacca"
                bruscamente alla prima apertura del gas — segno
                che il cilindro è quasi secco di benzina prima
                che arrivi la miscela principale.
              </p>
            </div>

            <div className="carburatoreCard carburatoreAgo">
              <div className="carburatoreCardTop">
                <span className="carburatoreBadge badgeAgo">Ago conico</span>
                <span className="carburatoreRange">¼ – ¾ gas</span>
              </div>
              <h4>Needle — il circuito dei medi, il più usato in pista e fuoristrada</h4>
              <p>
                L'ago conico è il componente che regola il circuito
                dei medi — il range di apertura del gas più usato
                durante la guida reale, sia in pista che in
                fuoristrada. L'ago ha una forma conica: quando
                si alza con la valvola del gas, l'anello dell'ago
                (needle jet) si svuota progressivamente permettendo
                a più benzina di passare. La posizione del clip
                sull'ago — tipicamente su 5 posizioni — sposta
                l'ago in alto o in basso modificando la ricchezza
                nel range ¼ – ¾. Clip più in alto (ago più basso)
                = più magro. Clip più in basso (ago più alto)
                = più ricco. Uno o due scatti di clip fanno
                una differenza percettibile nella risposta ai medi.
              </p>
            </div>

            <div className="carburatoreCard carburatorePrincipale">
              <div className="carburatoreCardTop">
                <span className="carburatoreBadge badgePrincipale">Getto principale</span>
                <span className="carburatoreRange">¾ – piena apertura</span>
              </div>
              <h4>Main jet — il circuito della piena apertura e della potenza massima</h4>
              <p>
                Il getto principale (main jet) è l'unico circuito
                attivo a piena apertura del gas — l'unico momento
                in cui il motore eroga la potenza massima. È anche
                il componente più facile da sostituire: si tratta
                di un ugello filettato con un foro calibrato il
                cui diametro determina la portata di benzina.
                I numeri dei getti indicano il diametro del foro
                in centesimi di millimetro (un main jet 178 ha
                un foro da 1,78 mm). Per l'estate si scala verso
                il basso (aria più calda = meno densa = miscela
                relativa più ricca → serve un getto più piccolo);
                per l'inverno o la quota alta si scala verso l'alto.
                Un getto troppo piccolo a piena apertura è la causa
                più comune di grippaggio su 2T in climi caldi.
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
              <span className="placeholderText">Immagine / GIF — tabella colori candela: bianca/grigia/nera con diagnosi carburazione</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Leggere la candela</span>
            <p>
              La candela è il cromatografo del povero — il suo
              colore dopo una sessione di guida rivela con
              precisione sorprendente lo stato della carburazione.
              Elettrodo grigio chiaro con isolatore beige-mattone:
              carburazione corretta. Bianco o quasi bianco:
              miscela magra — pericolo termico immediato,
              aumentare il getto. Nero e spugnoso (carbon fouling):
              miscela troppo ricca — ridurre il getto o controllare
              il filtro aria. Nero e umido (wet fouling): miscela
              molto ricca o problema di accensione. Grigio chiaro
              con puntini neri: funzionamento intermittente corretto.
              Questa lettura va fatta subito dopo aver fermato
              il motore a piena apertura — non dopo aver viaggiato
              a regime basso.
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
            <h3>Formule, fatti e record — i numeri che devi conoscere sul rapporto aria-benzina del 2T</h3>
            <p>
              La chimica della combustione si traduce in numeri
              precisi, misurabili e applicabili direttamente
              alla calibrazione del motore. Questi sono i dati
              che separano la calibrazione sistematica
              dalla carburazione a tentativi.
            </p>
          </motion.div>

          <motion.div className="grandezzeGrid" variants={cardVariants}>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>AFR = m_aria / m_benzina — calcolare il rapporto dalla portata</h4>
              <p>
                Il rapporto aria-carburante (AFR, Air-Fuel Ratio)
                si calcola dividendo la portata massica di aria
                per la portata massica di benzina: AFR = ṁ_aria /
                ṁ_benzina [kg/kg]. Un motore 125cc a 10.000 rpm
                con rendimento volumetrico del 110% aspira circa
                V_c × n × η_v / 60 = 0,000125 × 10.000 × 1,10 / 60
                = 0,0229 m³/min di miscela. Con densità dell'aria
                a 20 °C di 1,204 kg/m³ la massa d'aria aspirata è
                circa 27,6 g/min. Con main jet 178 e pressione
                di alimentazione standard la portata di benzina
                è circa 1,65 g/min → AFR = 27,6 / 1,65 = 16,7.
                Ma parte di quella benzina è olio — l'AFR effettivo
                carburante è circa 14,2 → λ ≈ 0,97. Quasi stoichiometrico,
                ma con protezione da olio.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeDefinizione">Definizione</span>
              <h4>Potere calorifico inferiore della benzina: 43,5 MJ/kg</h4>
              <p>
                Il potere calorifico inferiore (PCI) della benzina
                — l'energia liberata per kg di carburante bruciato
                senza recuperare il calore latente di condensazione
                dell'acqua di scarico — è circa 43,5 MJ/kg =
                43.500 kJ/kg. Con un consumo di benzina di 1,65
                g/min e un AFR di 16,7, il flusso di energia
                chimica introdotta è 1,65 × 10⁻³ kg/min × 43.500
                kJ/kg / 60 s = 1,197 kJ/s = 1,197 kW. Il rendimento
                indicato del motore (η_i ≈ 0,30 – 0,38 per un 2T
                da competizione) converte questa energia in lavoro
                meccanico: P_indicata = 1,197 × 0,34 ≈ 0,407 kW.
                A 10.000 rpm con più giri e portata maggiore
                si ottengono i 40 kW totali — la catena energetica
                dalla chimica alla potenza è tracciabile.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>Olio pre-miscelato: il 2% di olio sposta l'AFR effettivo del carburante</h4>
              <p>
                Nella miscela pre-miscelata al 2% (rapporto 1:50)
                il carburante è composto per il 98% di benzina
                e per il 2% di olio sintetico. L'olio sintetico
                ha un PCI di circa 40 – 42 MJ/kg e brucia
                parzialmente (30 – 50%) nella camera di combustione,
                contribuendo all'energia totale ma anche agli
                incombusti allo scarico. L'AFR effettivo del solo
                carburante combustibile (benzina + quota olio
                che brucia) è circa 14,0 – 14,5 rispetto ai 14,7
                stechiometrici puri — λ ≈ 0,95 – 0,98 anche con
                un getto apparentemente corretto. Questo spiega
                perché un 2T richiede sempre un getto leggermente
                più ricco di quanto calcolato su base teorica pura:
                l'olio occupa volume nel main jet ma porta meno
                energia per grammo della benzina.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>Temperatura e AFR: +10 °C richiedono un getto 3 – 5 numeri più piccolo</h4>
              <p>
                La densità dell'aria diminuisce con la temperatura:
                a 0 °C la densità è 1,293 kg/m³; a 20 °C è 1,204
                kg/m³; a 40 °C è 1,127 kg/m³. Un aumento di 20 °C
                riduce la densità del 6,7% — e quindi la massa
                di aria aspirata del 6,7% — mentre la portata
                di benzina dal main jet rimane quasi invariata
                (dipende dalla pressione del carburante, non dalla
                temperatura dell'aria). La miscela diventa relativa-
                mente più ricca di 6,7% → λ scende di circa 0,07.
                Per compensare questo effetto e mantenere λ ottimale
                si riduce il getto di circa 5 – 10 numeri ogni 20 °C
                di aumento. Una moto calibrata perfettamente in
                inverno a 5 °C può essere troppo ricca del 15%
                in estate a 35 °C con lo stesso getto.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>Correzione altitudine: AFR si impoverisce del 3% ogni 300 m</h4>
              <p>
                La pressione atmosferica diminuisce con l'altitudine
                seguendo la legge barometrica: P(h) ≈ P₀ ×
                e^(−h/8500) dove h è l'altitudine in metri.
                A 900 m la pressione è circa il 91% di quella
                al mare — la densità dell'aria cala nella stessa
                proporzione. La benzina dal main jet scorre
                sotto la stessa pressione statica, quindi la
                sua portata rimane costante. La miscela si arricchisce
                del 9% → λ cala di circa 0,08. Per una moto
                calibrata al mare, a 900 m serve un getto principale
                ridotto di 8 – 12 numeri. La regola pratica
                è −3 numeri di getto ogni 300 m di altitudine
                per mantenere λ costante.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeRecord">Record</span>
              <h4>TPI (Transfer Port Injection): λ controllato in tempo reale ±0,02</h4>
              <p>
                Il sistema TPI (Transfer Port Injection) di KTM
                e Husqvarna — iniezione diretta nelle porte di
                travaso — è il primo sistema di gestione del
                rapporto aria-carburante in tempo reale per motori
                a 2 tempi da fuoristrada di serie. Il sistema
                misura regime, posizione valvola del gas, temperatura
                aria e pressione atmosferica, e calcola la
                quantità di benzina da iniettare ogni ciclo
                con una precisione di ±0,02 λ — impossibile con
                qualsiasi carburatore meccanico. Risultato:
                calibrazione ottimale in ogni condizione di
                temperatura, quota e regime, consumo ridotto
                del 25 – 35% rispetto al carburatore, emissioni
                compatibili con Euro 5, nessuna regolazione
                stagionale necessaria. Il carburatore non è morto
                — ma il TPI dimostra dove porta la fisica applicata.
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
            <span className="cardTag">Diagnosticare la carburazione</span>
            <h3>Come leggere il motore — i segnali che rivelano ricco o magro senza strumenti</h3>
            <p>
              Il motore comunica costantemente lo stato della
              carburazione attraverso segnali precisi. Troppo
              ricco: fumo bianco-azzurro denso dallo scarico,
              motore che "sputa" al rilascio del gas, candela nera
              e umida, difficoltà di avviamento a caldo, consumo
              elevato. Troppo magro: scarso fumo, motore che
              "spegne" in decelerazione, risposta secca e nervosa
              all'apertura del gas, temperatura elevata, candela
              bianca. Carburazione corretta: fumo leggero
              visibile solo a freddo o a regime basso, risposta
              fluida e progressiva alla manetta, candela
              beige-grigio chiaro, avviamento facile in ogni
              condizione. Questi segnali si leggono in tempo
              reale — nessuno strumento necessario.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Carburazione sistematica</span>
            <h3>Il metodo corretto per calibrare il carburatore — dal minimo alla piena apertura</h3>
            <p>
              La calibrazione sistematica parte dal basso e sale.
              Prima si regola la vite dell'aria per il minimo stabile
              e pulito. Poi si valuta la risposta al ¼ gas in uscita
              di curva lenta — se il motore "esita" si sale di
              una posizione di clip sull'ago (più ricco); se
              "affoga" si scende. Solo dopo aver azzerato i
              problemi ai medi si tocca il getto principale:
              test in rettilineo a piena apertura sostenuta,
              arresto immediato del motore, lettura della candela.
              Questo metodo funziona perché ogni circuito è
              quasi indipendente dagli altri nel suo range —
              cambiare il main jet non risolve un problema
              all'ago, e viceversa.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Carburatore vs TPI</span>
            <h3>Il futuro del rapporto aria-benzina nel 2T — meccanica vs elettronica</h3>
            <p>
              Il carburatore meccanico è un dispositivo straordinario:
              senza elettronica, senza corrente, senza sensori —
              usando solo la fisica della depressione e la tensione
              superficiale del carburante riesce a mantenere un AFR
              accettabile su un range di regime enorme. Ma ha
              limiti fisici invalicabili: non può adattarsi in
              tempo reale a variazioni di temperatura, quota e carico.
              Il TPI supera tutti questi limiti — ma aggiunge
              complessità, peso e costo. La scelta non è "chi
              è meglio" in assoluto: è quale soluzione è ottimale
              per l'utilizzo specifico. Cross agonistico con meccanico
              a bordo pista: carburatore, massima semplicità.
              Enduro a lungo raggio su quote variabili: TPI,
              calibrazione zero pensieri.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default RapportoAriaBenzina;
