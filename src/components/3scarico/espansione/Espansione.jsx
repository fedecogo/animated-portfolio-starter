import "./espansione.scss";
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

const Espansione = () => {
  return (
    <section className="espansione" id="espansione">
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
              Sistema di scarico
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La camera<br />di espansione
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La camera di espansione è l'elemento che trasforma il
              motore a 2 tempi da un semplice ciclo termodinamico
              in una macchina ad alta efficienza volumetrica. Non
              è uno sfogo passivo dei gas combusti — è un risuonatore
              acustico progettato per sfruttare le onde di pressione
              generate dalla combustione e convertirle in lavoro utile:
              aspirare la miscela fresca nel cilindro e trattenerla
              con una contropressione calibrata al millisecondo.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il principio fisico su cui si basa è lo stesso dell'acustica
              dei tubi — la riflessione delle onde di pressione alle
              discontinuità di sezione. Un'onda di rarefazione richiama
              miscela fresca. Un'onda di compressione la trattiene.
              La geometria dell'espansione sincronizza questi due effetti
              con la finestra di apertura della luce di scarico. Ogni
              millimetro di lunghezza corrisponde a un microsecondo
              di ritardo — e quel ritardo fa la differenza tra un motore
              piatto e un motore che eroga.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Il ciclo delle onde</span>
              <h3>Cosa succede in 8 millisecondi</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Apertura luce scarico — onda di pressione positiva parte dal cilindro verso l'espansione</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Onda raggiunge il cono divergente — si riflette come onda di rarefazione che risale verso il cilindro</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Rarefazione nel cilindro — crea depressione che aspira la miscela fresca dai canali di travaso</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Onda raggiunge il cono convergente — si riflette come onda di compressione che risale</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">05</span>
                <span className="miniText">Contropressione alla luce di scarico — blocca la miscela fresca che stava fuoriuscendo, prima che il pistone la richiuda</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FISICA BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="fisicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="fisicaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fisica delle onde</span>
            <h3>Velocità del suono nei gas caldi — perché la temperatura cambia tutto</h3>
            <p>
              Le onde di pressione nell'espansione non viaggiano
              alla velocità del suono nell'aria a 20 °C — viaggiano
              nei gas di scarico, che possono superare i 500 °C.
              La velocità del suono cresce con la radice quadrata
              della temperatura assoluta: a 500 °C i gas di scarico
              trasmettono le onde a circa 700 m/s invece dei 343 m/s
              dell'aria a 20 °C. Questa variabile è la ragione per
              cui un'espansione calibrata per un certo regime
              cambia comportamento con la temperatura — e perché
              la fase di riscaldamento del motore modifica
              temporaneamente la larghezza della banda di potenza.
            </p>
          </motion.div>

          <motion.div className="fisicaGrid" variants={cardVariants}>

            <div className="fisicaCard fisicaVelocita">
              <div className="fisicaFormula">
                <span className="formulaEq">c = √(γ · R · T)</span>
                <span className="formulaLabel">Velocità del suono nei gas</span>
              </div>
              <h4>La formula che governa tutto</h4>
              <p>
                La velocità del suono c nei gas dipende da tre fattori:
                γ (rapporto dei calori specifici, circa 1,35 per i gas
                di scarico), R (costante specifica del gas) e T
                (temperatura assoluta in Kelvin). Raddoppiare la
                temperatura assoluta aumenta la velocità del suono
                del 41% — non del 100%. È questa relazione non lineare
                che rende il comportamento dell'espansione dipendente
                dal regime termico del motore e che obbliga i progettisti
                a specificare la temperatura di riferimento per il
                calcolo della lunghezza critica.
              </p>
            </div>

            <div className="fisicaCard fisicaRiflessione">
              <div className="fisicaFormula">
                <span className="formulaEq">+p → sezione↑ → −p</span>
                <span className="formulaLabel">Legge di riflessione alle discontinuità</span>
              </div>
              <h4>Riflessione alle variazioni di sezione</h4>
              <p>
                Quando un'onda di pressione positiva incontra un aumento
                di sezione (il cono divergente dell'espansione) si riflette
                come onda di pressione negativa — di rarefazione. Quando
                un'onda di pressione positiva incontra una riduzione di
                sezione (il cono convergente del terminale) si riflette
                come onda di pressione positiva — di compressione.
                Questo principio, identico a quello che governa la
                riflessione delle onde nelle corde degli strumenti
                musicali, è il fondamento fisico dell'intera camera
                di espansione. L'espansione non è altro che un
                sistema di specchi acustici calibrati.
              </p>
            </div>

            <div className="fisicaCard fisicaSincronismo">
              <div className="fisicaFormula">
                <span className="formulaEq">L = (c · t) / 2</span>
                <span className="formulaLabel">Lunghezza critica per il sincronismo</span>
              </div>
              <h4>Il sincronismo — il parametro di progetto</h4>
              <p>
                La lunghezza totale dell'espansione determina il tempo
                di percorrenza dell'onda dal cilindro al cono convergente
                e ritorno. Questo tempo deve essere uguale al tempo
                che intercorre tra l'apertura della luce di scarico
                e la chiusura della luce di travaso — ovvero la finestra
                durante cui il cilindro è aperto a entrambe le estremità.
                Se il timing è corretto, l'onda di compressione di ritorno
                arriva esattamente quando la luce di scarico è ancora
                aperta e spinge indietro la miscela fresca che stava
                fuoriuscendo. Se è sbagliato di anche solo il 10%,
                l'effetto di sovralimentazione svanisce completamente.
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
              <span className="placeholderText">Schema / GIF — propagazione e riflessione delle onde di pressione nell'espansione in sequenza temporale</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Le onde in sequenza</span>
            <p>
              Lo schema in sezione dell'espansione con le onde
              rappresentate come fronti colorati: arancione per
              le onde positive, blu per le onde di rarefazione.
              Si vede chiaramente come il cono divergente inverta
              il segno dell'onda e come il cono convergente generi
              la contropressione che blocca la miscela fresca
              nell'istante critico prima della chiusura della luce.
            </p>
          </div>
        </motion.div>

        {/* ── GEOMETRIA BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="geometriaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="geometriaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Anatomia dell'espansione</span>
            <h3>Le cinque zone — ogni tratto ha una funzione acustica precisa</h3>
            <p>
              Un'espansione 2T non è un semplice tubo allargato.
              È composta da cinque zone geometricamente distinte
              che cooperano in sequenza. Modificare anche una sola
              di queste zone — lunghezza, angolo, diametro — cambia
              il comportamento acustico dell'intero sistema.
            </p>
          </motion.div>

          <div className="espansioneSchema">
            <div className="schemaZona zonaPipe">
              <span className="zonaNum">1</span>
              <span className="zonaName">Header pipe</span>
              <span className="zonaDesc">Tubo di collegamento al cilindro</span>
            </div>
            <div className="schemaArrow">›</div>
            <div className="schemaZona zonaDivergente">
              <span className="zonaNum">2</span>
              <span className="zonaName">Cono divergente</span>
              <span className="zonaDesc">Genera onda di rarefazione</span>
            </div>
            <div className="schemaArrow">›</div>
            <div className="schemaZona zonaVentre">
              <span className="zonaNum">3</span>
              <span className="zonaName">Ventre</span>
              <span className="zonaDesc">Sezione massima — stoccaggio volumetrico</span>
            </div>
            <div className="schemaArrow">›</div>
            <div className="schemaZona zonaConvergente">
              <span className="zonaNum">4</span>
              <span className="zonaName">Cono convergente</span>
              <span className="zonaDesc">Genera onda di compressione di ritorno</span>
            </div>
            <div className="schemaArrow">›</div>
            <div className="schemaZona zonaTerminale">
              <span className="zonaNum">5</span>
              <span className="zonaName">Stinger / terminale</span>
              <span className="zonaDesc">Scarico finale — regola contropressione</span>
            </div>
          </div>

          <motion.div className="geometriaGrid" variants={cardVariants}>

            <div className="geoCard">
              <span className="geoNum geoNumOrange">1</span>
              <h4>Header pipe — il tubo di testa</h4>
              <p>
                Il tratto di collegamento tra la luce di scarico del
                cilindro e il cono divergente. Il suo diametro è
                calibrato sul diametro della luce di scarico per
                evitare brusche discontinuità di sezione che
                genererebbero riflessioni indesiderate. La sua
                lunghezza influenza il regime a cui avviene il primo
                rinforzo di pressione positiva — allungarla abbassa
                il regime di picco, accorciarla lo alza. Nei sistemi
                ad innesto rapido è il tratto che si smonta per
                accedere alla valvola di scarico.
              </p>
            </div>

            <div className="geoCard">
              <span className="geoNum geoNumDivergente">2</span>
              <h4>Cono divergente — il generatore di rarefazione</h4>
              <p>
                Il cono divergente è la sezione dell'espansione che
                si allarga progressivamente. Quando l'onda di pressione
                positiva proveniente dal cilindro investe questa
                discontinuità di sezione crescente, si riflette
                parzialmente come onda di rarefazione che risale
                verso il cilindro. L'angolo di apertura del cono
                determina l'intensità e la rapidità di questa
                riflessione. Un cono più aperto riflette in modo più
                brusco ma meno efficiente; un cono più dolce riflette
                in modo più graduale con minori perdite. Il valore
                ottimale è tipicamente tra 12° e 18° di semi-angolo.
              </p>
            </div>

            <div className="geoCard">
              <span className="geoNum geoNumVentre">3</span>
              <h4>Ventre — la camera di risonanza</h4>
              <p>
                Il ventre è la sezione a diametro massimo dell'espansione.
                Non riflette direttamente le onde — è la zona in cui
                l'onda ha già subito la prima riflessione e prosegue
                verso il cono convergente. Il volume del ventre
                influenza la larghezza della banda di potenza: un ventre
                più grande offre una banda più ampia ma un picco
                meno pronunciato. Un ventre più stretto concentra
                l'effetto in una finestra di regime più stretta
                ma più intensa — tipico delle espansioni da
                competizione pura.
              </p>
            </div>

            <div className="geoCard">
              <span className="geoNum geoNumConvergente">4</span>
              <h4>Cono convergente — il generatore di contropressione</h4>
              <p>
                Il cono convergente è la zona più critica dal punto
                di vista acustico. Quando l'onda di rarefazione
                — o la seconda onda positiva che arriva dal ventre
                — incontra la riduzione di sezione del cono
                convergente si riflette come onda di pressione
                positiva che risale verso il cilindro. Questa è
                la contropressione di ritorno — quella che blocca
                la miscela fresca alla luce di scarico. La posizione
                e l'angolo del cono convergente sono i parametri
                di progetto più critici per il timing dell'intero
                sistema. Spostarlo di 10 mm equivale a cambiare il
                regime di picco di 500 – 800 giri al minuto.
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
            <span className="captionTag">Sezione e proporzioni</span>
            <p>
              Espansione in sezione con le cinque zone nominate
              e le quote principali: diametro dell'header pipe,
              angolo del divergente, diametro massimo del ventre,
              angolo del convergente, diametro dello stinger.
              Le proporzioni tra le zone sono specifiche per
              ogni motore e regime target — non esistono
              espansioni universali.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — sezione espansione quotata con le 5 zone colorate e angoli indicati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── REGIMI BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="regimiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="regimiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fuori dalla banda</span>
            <h3>Cosa succede sotto e sopra il regime di picco — il 2T è un motore sintonizzato</h3>
            <p>
              La camera di espansione è progettata per un regime
              specifico — o una banda di regimi. Fuori da questa
              finestra il comportamento acustico non scompare:
              semplicemente perde il sincronismo con la luce di
              scarico e diventa controproducente invece che vantaggioso.
            </p>
          </motion.div>

          <motion.div className="regimiGrid" variants={cardVariants}>

            <div className="regimeCard regimeBasso">
              <div className="regimeTop">
                <span className="regimeBadge badgeBasso">Sotto la banda</span>
                <div className="regimeRpm">
                  <span className="regimeRpmBar" style={{ width: "30%" }} />
                </div>
              </div>
              <h4>Regime troppo basso — onda fuori tempo</h4>
              <p>
                A regimi bassi il ciclo della luce di scarico è lento
                — la finestra rimane aperta per un tempo lungo.
                L'onda di contropressione di ritorno arriva quando
                la luce di scarico è già chiusa: non serve a bloccare
                la miscela perché il pistone l'ha già richiusa da
                solo. Peggio ancora, può arrivare a luce già chiusa
                e generare una sovrappressione nel condotto che
                ostacola il successivo impulso di scarico. Risultato:
                il motore è mosso e spugnoso, la curva di coppia è
                piatta e depressa ai bassi.
              </p>
            </div>

            <div className="regimeCard regimePicco">
              <div className="regimeTop">
                <span className="regimeBadge badgePicco">Nella banda</span>
                <div className="regimeRpm">
                  <span className="regimeRpmBar" style={{ width: "75%" }} />
                </div>
              </div>
              <h4>Regime ottimale — sincronismo perfetto</h4>
              <p>
                Il tempo di percorrenza dell'onda coincide esattamente
                con la finestra di apertura della luce di scarico.
                La rarefazione aspira la miscela fresca dal carter
                mentre la luce di travaso è ancora aperta — aumentando
                il riempimento ben oltre il 100% della cilindrata
                geometrica. La contropressione di ritorno arriva
                con la luce di scarico ancora aperta e respinge
                la miscela fresca prima che il pistone la richiuda.
                L'efficienza volumetrica può superare il 130 – 140%
                in questa finestra: è qui che si genera il picco
                di potenza caratteristico del 2T.
              </p>
            </div>

            <div className="regimeCard regimeAlto">
              <div className="regimeTop">
                <span className="regimeBadge badgeAlto">Sopra la banda</span>
                <div className="regimeRpm">
                  <span className="regimeRpmBar" style={{ width: "100%" }} />
                </div>
              </div>
              <h4>Regime troppo alto — onda in ritardo</h4>
              <p>
                A regimi molto alti la finestra della luce di scarico
                si apre e si chiude più volte nel tempo che l'onda
                impiega a fare il percorso di andata e ritorno.
                La contropressione arriva quando la luce è già di
                nuovo aperta per il ciclo successivo — non blocca
                nulla, anzi si oppone all'uscita dei gas combusti
                del ciclo corrente. Il riempimento si riduce e
                la potenza cala bruscamente. È il "muro" caratteristico
                dei motori 2T agonistici oltre il regime di picco —
                non una perdita graduale, ma un taglio netto.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── TUNING BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="tuningBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tuningHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Tuning e modifica</span>
            <h3>Come si modifica il carattere dell'erogazione intervenendo sulla geometria</h3>
            <p>
              La geometria dell'espansione è il parametro di tuning
              più potente disponibile su un 2T — più efficace di qualsiasi
              modifica al carburatore o alla mappatura. Ogni variazione
              geometrica produce effetti prevedibili sulla curva di potenza
              che un progettista esperto può calcolare prima ancora di
              mettere mano al metallo.
            </p>
          </motion.div>

          <motion.div className="tuningGrid" variants={cardVariants}>

            <div className="tuningCard">
              <div className="tuningVisual">
                <span className="tuningIcon">↔</span>
                <span className="tuningLabel">Lunghezza totale</span>
              </div>
              <h4>Lunghezza — sposta il regime di picco</h4>
              <p>
                Allungare l'espansione aumenta il tempo di percorrenza
                dell'onda e abbassa il regime di picco — più coppia
                ai medi, meno potenza ai massimi. Accorciarla fa
                l'opposto: picco più alto, banda più stretta.
                La variazione è di circa 500 – 1000 giri per ogni
                50 mm di variazione sulla lunghezza totale, in funzione
                della temperatura di esercizio. Nei sistemi modulari
                si inseriscono o rimuovono sezioni intermedie del
                ventre per variare la lunghezza senza costruire
                un'espansione nuova.
              </p>
            </div>

            <div className="tuningCard">
              <div className="tuningVisual">
                <span className="tuningIcon">⟨ ⟩</span>
                <span className="tuningLabel">Angolo divergente</span>
              </div>
              <h4>Angolo del divergente — intensità della rarefazione</h4>
              <p>
                Un angolo divergente più aperto genera una riflessione
                più brusca e intensa — picco di potenza più alto
                ma banda più stretta. Un angolo più dolce genera
                una rarefazione progressiva su un arco di regime
                più ampio — potenza di picco leggermente inferiore
                ma erogazione più utilizzabile in condizioni non
                ottimali. I motori da enduro usano angoli più dolci
                (8 – 12°), quelli da competizione pura angoli più
                aggressivi (14 – 18° di semi-angolo).
              </p>
            </div>

            <div className="tuningCard">
              <div className="tuningVisual">
                <span className="tuningIcon">⌀</span>
                <span className="tuningLabel">Diametro ventre</span>
              </div>
              <h4>Volume del ventre — larghezza della banda</h4>
              <p>
                Aumentare il volume del ventre allarga la banda di
                potenza distribuendo l'effetto acustico su un
                range di regime più ampio — a scapito dell'intensità
                del picco. Ridurre il volume concentra l'effetto
                in una finestra più stretta e più potente.
                È il parametro che differenzia un'espansione
                da cross (ventre piccolo, picco alto) da una
                da enduro (ventre generoso, banda larga). A parità
                di lunghezza il diametro del ventre è il secondo
                parametro più influente dopo la lunghezza totale.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── MATERIALI BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="materialiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="materialiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Costruzione e materiali</span>
            <h3>Acciaio, alluminio e titanio — tre scelte con tre compromessi</h3>
            <p>
              Il materiale dell'espansione non modifica la fisica
              delle onde — ma determina peso, durata, dissipazione
              termica e costo. La temperatura dei gas di scarico
              può superare i 600 °C nel tratto di header pipe —
              un vincolo termico che esclude molti materiali
              e richiede protezione attiva in uso.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>

            <div className="matCard matAcciaio">
              <span className="matBadge badgeAcciaio">Acciaio inossidabile</span>
              <h4>La scelta standard — resistenza e durabilità</h4>
              <p>
                L'AISI 304 e il 316L sono gli acciai inossidabili
                più usati nelle espansioni di serie e aftermarket.
                Resistono alle temperature di esercizio senza deformarsi,
                tollerano l'ossidazione ciclica (riscaldo e raffreddamento
                ripetuti) e sono saldabili senza perdita significativa
                di proprietà meccaniche. Il peso specifico è elevato
                (7,9 kg/dm³) — un'espansione in acciaio per motore
                125 cc pesa tipicamente 1,8 – 2,5 kg. La superficie
                esterna si ossida visibilmente con l'uso — processo
                estetico che non compromette la funzionalità.
              </p>
            </div>

            <div className="matCard matAlluminio">
              <span className="matBadge badgeAlluminio">Alluminio</span>
              <h4>Leggero ma termicamente critico</h4>
              <p>
                Alcune espansioni usano sezioni in alluminio per
                le zone a temperatura più bassa — ventre e tratto
                finale — abbinate a un header pipe in acciaio.
                L'alluminio è tre volte più leggero dell'acciaio
                ma ha un limite termico intorno ai 200 – 250 °C
                prima di perdere resistenza meccanica. Usato in
                zone dove la temperatura è già scesa sufficientemente
                permette di ridurre il peso totale del 25 – 35%
                rispetto al full-inox. Soluzione comune nelle
                moto da enduro competizione dove il peso non appeso
                è prioritario.
              </p>
            </div>

            <div className="matCard matTitanio">
              <span className="matBadge badgeTitanio">Titanio</span>
              <h4>La scelta racing — metà peso, temperatura massima</h4>
              <p>
                Il titanio (grado 2 e grado 5) è il materiale di
                riferimento nelle espansioni racing di alto livello.
                Densità 4,5 kg/dm³ contro 7,9 dell'acciaio — peso
                dimezzato a parità di spessore. Resistenza termica
                fino a 600 °C senza perdita di proprietà.
                Coefficiente di espansione termica inferiore
                all'acciaio — deformazioni cicliche ridotte.
                Il costo di un'espansione in titanio è nell'ordine
                di 5 – 15 volte superiore all'equivalente in acciaio.
                Non si salda facilmente senza attrezzatura TIG
                in atmosfera protetta: la riparazione in campo
                è di fatto impossibile.
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
            <span className="cardTag">Protezione termica</span>
            <h3>Le fasce termiche — proteggere il pilota e ottimizzare l'acustica</h3>
            <p>
              Le fasce in tessuto termico avvolte sull'header pipe
              e sul primo tratto dell'espansione servono a due scopi
              distinti. Il primo è proteggere il pilota dal contatto
              accidentale con superfici a 400 – 600 °C. Il secondo,
              meno ovvio, è mantenere la temperatura dei gas di scarico
              più alta il più a lungo possibile — gas più caldi
              propagano le onde più velocemente, mantenendo il
              sincronismo al regime di picco. Un'espansione senza
              fasciatura termica si raffredda più rapidamente nelle
              fasi di parziale o in marcia lenta, abbassando la
              velocità delle onde e spostando il regime di picco
              verso il basso durante la guida.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Espansione liquida</span>
            <h3>Water jacket e raffreddamento attivo — le espansioni raffreddate ad acqua</h3>
            <p>
              Alcune moto da competizione — principalmente nei circuiti
              dove lo spazio di installazione è critico — adottano
              espansioni con una camera d'acqua esterna che permette
              di raffreddare attivamente i gas di scarico nella zona
              del ventre. Questo abbassa la temperatura di esercizio
              e permette di posizionare l'espansione in spazi
              altrimenti inutilizzabili per la vicinanza a componenti
              sensibili al calore. Il raffreddamento attivo modifica
              però la velocità di propagazione delle onde e richiede
              una taratura specifica della geometria — un'espansione
              ad aria non funziona correttamente se raffreddata ad acqua.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Diagnosi</span>
            <h3>Come capire se l'espansione è il problema — sintomi e verifica</h3>
            <p>
              Un'espansione ammaccata, con una saldatura che ha ceduto
              o con un tratto corroso e sottile cambia la geometria
              acustica anche se mantiene la tenuta strutturale.
              Un'ammaccatura nel ventre riduce il volume e restringe
              la banda. Una perdita nel tratto convergente introduce
              una riflessione parassitica. Il sintomo è sempre lo stesso:
              il motore ha perso il suo "colpo" caratteristico, il picco
              si è abbassato o spostato di regime senza variazioni
              al carburatore o alla mappatura. La verifica è visiva —
              luce radente sull'intera superficie e controllo
              di ogni saldatura con liquido penetrante se si sospetta
              una cricca.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Espansione;
