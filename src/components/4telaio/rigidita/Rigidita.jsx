import "./rigidita.scss";
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

const Rigidita = () => {
  return (
    <section className="rigidita" id="rigidita">
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
              Telaio — Rigidità
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Rigidità<br />
              <span className="accentText">torsionale e flessionale</span>
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Rigidità non significa resistenza. Un telaio rigido
              non è necessariamente un telaio migliore — è un telaio
              con una scelta diversa su come gestire le forze in gioco.
              La rigidità è un parametro di progetto, non un obiettivo
              assoluto. Aumentarla oltre un certo punto peggiora il
              comportamento dinamico della moto tanto quanto ridurla
              troppo. Il punto ottimale dipende dal tipo di utilizzo,
              dalla velocità, dal terreno e — non secondariamente —
              dallo stile di guida del pilota.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Esistono due tipi di rigidità che contano nel telaio
              di un fuoristrada: la rigidità torsionale — resistenza
              alla rotazione attorno all'asse longitudinale — e la
              rigidità flessionale — resistenza alla flessione
              nel piano verticale. Sono grandezze diverse, si misurano
              diversamente, hanno effetti diversi sul comportamento
              e vengono ottimizzate in modi diversi. Un telaio
              può essere rigido in torsione e relativamente flessibile
              in flessione — ed è spesso esattamente quello che si
              vuole.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">I due assi della rigidità</span>
              <h3>Torsione e flessione — effetti opposti sulla guida</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex miTorsione">↻</span>
                <span className="miniText">
                  <strong>Rigidità torsionale</strong> — resistenza alla rotazione attorno all'asse longitudinale.
                  Alta = traiettoria precisa in curva su sconnesso. Bassa = il telaio "ritorce" e perde la linea
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex miFlessionale">↕</span>
                <span className="miniText">
                  <strong>Rigidità flessionale</strong> — resistenza alla flessione verticale.
                  Alta = risposta diretta alle intenzioni del pilota. Troppo alta = filtra male le asperità
                  e stanca le braccia
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex miLaterale">↔</span>
                <span className="miniText">
                  <strong>Rigidità laterale</strong> — resistenza alla flessione laterale.
                  Deve essere alta per mantenere il pneumatico perpendicolare alla traiettoria
                  durante le forze di cornering
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex miDiff">◈</span>
                <span className="miniText">
                  <strong>Rigidità differenziale</strong> — diversa nelle diverse direzioni
                  nello stesso telaio. È l'obiettivo del progetto moderno: rigido dove serve,
                  flessibile dove aiuta
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── TORSIONALE BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="rigiditaBlock torsionaleBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="rigiditaHeader" variants={fadeUpVariants}>
            <span className="rigiditaIcon iconTorsione">↻</span>
            <div>
              <span className="sectionLabel">Rigidità torsionale</span>
              <h3>La resistenza alla rotazione — perché la moto mantiene la traiettoria su terreno sconnesso</h3>
            </div>
          </motion.div>

          <motion.div className="rigiditaContent" variants={cardVariants}>
            <div className="rigiditaText">
              <p>
                La rigidità torsionale è la resistenza del telaio
                alla rotazione attorno al suo asse longitudinale —
                l'asse che va dalla ruota anteriore a quella posteriore.
                Quando la moto affronta terreno irregolare con le due
                ruote a quote diverse, il telaio subisce un momento
                torcente: la ruota anteriore vuole "tirare" il telaio
                in una direzione, quella posteriore nell'altra.
              </p>
              <p>
                Un telaio con alta rigidità torsionale resiste a questa
                torsione e mantiene il cannotto di sterzo e il forcellone
                allineati — la geometria rimane quella progettata e il
                pneumatico anteriore resta sul piano corretto rispetto
                alla traiettoria. Il pilota sente che la moto "segue"
                la direzione che lui impone, anche su terreno molto
                irregolare.
              </p>
              <p>
                Un telaio con bassa rigidità torsionale si "ritorce"
                sotto questi carichi — il cannotto ruota rispetto al
                forcellone e la geometria di sterzo cambia dinamicamente
                in modo non controllato. La moto "segue" il terreno
                invece di seguire il pilota. A bassa velocità questo
                può essere tollerabile o addirittura gradevole —
                il telaio filtra le irregolarità. Ad alta velocità
                diventa pericoloso: piccole torsioni generano variazioni
                di geometria che il pilota non riesce a correggere
                in tempo.
              </p>
            </div>

            <div className="torsioneDiagram">
              <div className="torsDiagBox">
                <div className="torsDiagTitle">Momento torcente sul telaio</div>
                <div className="torsSchema">
                  <div className="torsAsse">
                    <span className="torsAsseLabel">asse longitudinale</span>
                  </div>
                  <div className="torsFrecciaA">
                    <span>ruota ant. ↑</span>
                  </div>
                  <div className="torsFrecciaP">
                    <span>ruota post. ↓</span>
                  </div>
                  <div className="torsMomento">
                    <span className="torsMomentoLabel">M<sub>t</sub></span>
                  </div>
                </div>
                <div className="torsRisultatoRow">
                  <div className="torsRisultato torsRisAlta">
                    <span className="torsRisLabel">Alta K<sub>t</sub></span>
                    <span className="torsRisDesc">Traiettoria mantenuta</span>
                  </div>
                  <div className="torsRisultato torsRisBassa">
                    <span className="torsRisLabel">Bassa K<sub>t</sub></span>
                    <span className="torsRisDesc">Telaio ritorce</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FLESSIONALE BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="rigiditaBlock flessioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="rigiditaHeader" variants={fadeUpVariants}>
            <span className="rigiditaIcon iconFlessione">↕</span>
            <div>
              <span className="sectionLabel">Rigidità flessionale</span>
              <h3>La resistenza alla flessione — il parametro che il pilota sente sulle braccia</h3>
            </div>
          </motion.div>

          <motion.div className="rigiditaContent" variants={cardVariants}>
            <div className="rigiditaText">
              <p>
                La rigidità flessionale è la resistenza del telaio
                alla flessione nel piano verticale — quanto il telaio
                si "curva" sotto i carichi verticali di frenata,
                accelerazione e impatti. Si misura come il rapporto
                tra la forza applicata e lo spostamento risultante
                nel punto di applicazione: N/mm o kN/mm.
              </p>
              <p>
                Una rigidità flessionale alta significa che il telaio
                trasferisce fedelmente e rapidamente le intenzioni
                del pilota alla ruota — sterzata, freno, accelerazione
                producono risposte immediate e precise. Il pilota
                sente di avere controllo diretto sulla moto. Il prezzo
                è che ogni imperfezione del terreno viene trasmessa
                integralmente alle mani e alla schiena — il telaio
                non smorza nulla, tutte le vibrazioni arrivano
                attraverso il manubrio e le pedane.
              </p>
              <p>
                Una rigidità flessionale più bassa — non bassa,
                ma calibrata — introduce una flessibilità che agisce
                come ammortizzatore secondario. Le piccole asperità
                vengono assorbite dalla flessione elastica del telaio
                prima di raggiungere il pilota. La risposta ai comandi
                è leggermente meno immediata ma il pilota si stanca
                di meno, mantiene la concentrazione più a lungo
                e nei percorsi tecnici a bassa velocità ha un
                feeling più ricco di informazioni. È per questo
                che i telai in acciaio cromoly sono ancora apprezzati
                nel trial e nell'enduro classico — la loro flessibilità
                naturale è una caratteristica, non un difetto.
              </p>
            </div>

            <div className="flessioneScale">
              <div className="scaleTitle">Effetti sulla guida — rigidità flessionale</div>
              <div className="scaleTrack">
                <div className="scaleSegments">
                  <div className="scaleSeg scaleSegTroppo">Troppo bassa</div>
                  <div className="scaleSeg scaleSegOttimale">Ottimale</div>
                  <div className="scaleSeg scaleSegTroppo">Troppo alta</div>
                </div>
              </div>
              <div className="scaleEffects">
                <div className="scaleEffect effectBasso">
                  <span className="effectTitolo">Telaio "floscio"</span>
                  <ul>
                    <li>Risposta ritardata ai comandi</li>
                    <li>Geometria instabile in accelerazione</li>
                    <li>Oscillazioni della forcella</li>
                  </ul>
                </div>
                <div className="scaleEffect effectOttimale">
                  <span className="effectTitolo">Equilibrio</span>
                  <ul>
                    <li>Risposta precisa e fluida</li>
                    <li>Filtro naturale delle vibrazioni</li>
                    <li>Feeling ricco al pilota</li>
                  </ul>
                </div>
                <div className="scaleEffect effectAlto">
                  <span className="effectTitolo">Telaio "rigido"</span>
                  <ul>
                    <li>Ogni asperità amplificata</li>
                    <li>Pilota affaticato rapidamente</li>
                    <li>Perdita di grip sulle piccole asperità</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER ──────────────────────────────────────────── */}
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
              <span className="placeholderText">Schema — telaio con frecce che mostrano torsione e flessione in direzioni diverse, zone colorate per rigidità</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Rigidità differenziale</span>
            <p>
              I telai moderni in alluminio a doppia trave non sono
              isotropi — non hanno la stessa rigidità in tutte
              le direzioni. Le travi principali hanno pareti
              di spessore variabile: più spesse nella parte
              superiore (più caricata in flessione) e più sottili
              sui fianchi (dove si vuole un po' di flessibilità
              laterale per il feeling). Questa asimmetria
              intenzionale è il risultato di decine di iterazioni
              FEM e di anni di test in pista. Non è visibile
              dall'esterno — è nascosta nel profilo della sezione.
            </p>
          </div>
        </motion.div>

        {/* ── PERCHÉ NON SEMPRE PIÙ RIGIDO = MEGLIO BLOCK ─────────────────── */}
        <motion.div
          className="nonRigidoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="nonRigidoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il paradosso della rigidità</span>
            <h3>Perché più rigido non è sempre meglio — i tre motivi che contraddicono l'intuizione</h3>
            <p>
              L'intuizione dice che un telaio più rigido è più preciso
              e quindi migliore. È vero fino a un certo punto —
              poi l'equazione si inverte. Tre fenomeni spiegano perché.
            </p>
          </motion.div>

          <motion.div className="nonRigidoGrid" variants={cardVariants}>

            <div className="nonRigidoCard nonRigidoCard1">
              <span className="nonRigidoNum">01</span>
              <h4>Il telaio come filtro — la flessibilità controllata è informazione</h4>
              <p>
                Il pilota riceve informazioni sul terreno attraverso
                tre canali: visivo, vestibolare (equilibrio) e
                tattile (vibrazioni al manubrio e alle pedane).
                Il canale tattile è il più rapido — arriva prima
                che gli occhi abbiano elaborato l'immagine.
                Una certa flessibilità del telaio arricchisce
                questo canale: le piccole deformazioni elastiche
                trasmettono al pilota la texture del terreno,
                il carico sul pneumatico, il limite di aderenza
                imminente. Un telaio completamente rigido taglia
                questo canale — il pilota riceve meno informazioni,
                non di più. I piloti di trial e gli enduristi
                esperti descrivono questa differenza come "sentire
                la moto" vs "guidare la moto".
              </p>
            </div>

            <div className="nonRigidoCard nonRigidoCard2">
              <span className="nonRigidoNum">02</span>
              <h4>Fatica strutturale — un telaio più rigido si rompe prima</h4>
              <p>
                Un telaio perfettamente rigido non assorbe energia
                dalle deformazioni elastiche — tutta l'energia degli
                impatti viene trasferita direttamente alla struttura
                come stress. La fatica del materiale è proporzionale
                all'ampiezza dei cicli di carico: un telaio che
                si deforma elasticamente di 0,5 mm sotto un impatto
                accumula meno danno da fatica di uno che si deforma
                di 0,05 mm sotto lo stesso impatto a rigidità
                dieci volte maggiore, perché le tensioni interne
                sono più alte. I telai in acciaio cromoly durano
                spesso più a lungo dei telai in alluminio ad alta
                rigidità non solo per le proprietà del materiale
                ma perché la loro flessibilità naturale riduce
                le tensioni di picco nei cicli di carico.
              </p>
            </div>

            <div className="nonRigidoCard nonRigidoCard3">
              <span className="nonRigidoNum">03</span>
              <h4>Grip e contatto — un telaio troppo rigido perde aderenza</h4>
              <p>
                Il pneumatico mantiene l'aderenza attraverso la
                deformazione della gomma che si "avvolge" attorno
                alle asperità del terreno. Per farlo, deve potersi
                muovere in risposta alle irregolarità — deve avere
                libertà di seguire il profilo del suolo. Se il
                telaio è troppo rigido, le piccole asperità vengono
                trasmesse direttamente al telaio invece di essere
                assorbite dalla deformazione del sistema telaio-sospensione.
                Il pneumatico tende a "rimbalzare" invece di aderire —
                il contatto diventa intermittente. La perdita di grip
                su fondi con texture elevata (ghiaia, radici, roccia)
                è spesso il primo sintomo di un telaio o di sospensioni
                troppo rigide per quel tipo di terreno.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── PROGETTO DIFFERENZIALE BLOCK ────────────────────────────────── */}
        <motion.div
          className="differenzialeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="differenzialeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Rigidità differenziale</span>
            <h3>Come i costruttori moderni ottimizzano la rigidità in modo selettivo — diversa in ogni direzione</h3>
            <p>
              L'obiettivo del progetto telaio moderno non è massimizzare
              la rigidità — è ottimizzarla selettivamente. Alta
              in torsione, controllata in flessione verticale,
              calibrata lateralmente. Questo si ottiene con tre
              strumenti: la geometria della sezione, lo spessore
              variabile delle pareti e la scelta del materiale.
            </p>
          </motion.div>

          <motion.div className="differenzialeGrid" variants={cardVariants}>

            <div className="diffCard">
              <span className="diffIdx diffIdxSteel">01</span>
              <h4>Geometria della sezione</h4>
              <p>
                Una trave con sezione rettangolare ha rigidità
                molto diversa nei due piani: molto più rigida
                sul lato alto (altezza maggiore = braccio di
                leva maggiore rispetto all'asse neutro) e più
                flessibile sul lato largo. I progettisti orientano
                le sezioni per mettere la rigidità maggiore
                nella direzione più caricata. Le travi principali
                dei telai KTM e Husqvarna hanno una sezione
                trapezoidale con il lato largo in alto —
                massima rigidità verticale, flessibilità
                controllata laterale.
              </p>
            </div>

            <div className="diffCard">
              <span className="diffIdx diffIdxBlue">02</span>
              <h4>Spessore di parete variabile</h4>
              <p>
                Le travi in alluminio estruso o pressofuso possono
                avere spessore di parete variabile lungo il profilo —
                più spesse nelle zone a maggiore sollecitazione,
                più sottili altrove. Questo non è visibile dall'esterno
                ma cambia completamente la distribuzione della
                rigidità lungo la trave. Un aumento di spessore
                da 3 a 4 mm in una zona critica aumenta la rigidità
                locale del 40% con un aumento di peso trascurabile —
                questo è il tipo di ottimizzazione che FEM rende
                possibile e che sarebbe impossibile fare a intuito.
              </p>
            </div>

            <div className="diffCard">
              <span className="diffIdx diffIdxTeal">03</span>
              <h4>Rinforzi localizzati e gusci</h4>
              <p>
                I nodi strutturali — giunzioni tra travi principali,
                attacchi motore, zona cannotto — vengono rinforzati
                con gusci, nervature o piastre aggiunte che aumentano
                la rigidità locale senza aumentare il peso della
                trave principale. È la stessa logica delle nervature
                nelle strutture in cemento armato: il materiale
                va dove serve lo sforzo, non distribuito uniformemente.
                I rinforzi al cannotto di sterzo sui telai in alluminio
                moderni possono triplicare la rigidità locale
                di quella zona rispetto alla trave nuda,
                aggiungendo meno di 80 grammi.
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
            <span className="cardTag">Acciaio vs alluminio</span>
            <h3>Perché i telai in cromoly "si sentono vivi" — non è nostalgia</h3>
            <p>
              Il modulo elastico dell'acciaio (210 GPa) è tre volte
              quello dell'alluminio (69 – 72 GPa) — ma la densità
              è anche tre volte maggiore. A parità di peso, una
              struttura in acciaio e una in alluminio hanno rigidità
              simile. La differenza è nel comportamento dinamico:
              l'acciaio ha smorzamento interno (damping) più alto —
              converte più energia delle vibrazioni in calore
              invece di trasmetterla. Questo è il "feeling vivo"
              dei telai in cromoly: non è solo flessibilità,
              è smorzamento — le vibrazioni si smorzano più
              rapidamente invece di risuonare nel telaio.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Misurazione</span>
            <h3>Come si misura la rigidità di un telaio — test statici e dinamici</h3>
            <p>
              La rigidità torsionale si misura bloccando il perno
              del forcellone e applicando un momento torcente noto
              al cannotto di sterzo — si misura la rotazione risultante.
              Valori tipici: 10.000 – 18.000 Nm/rad per un telaio
              da enduro in alluminio. La rigidità flessionale si misura
              applicando una forza verticale al centro del telaio
              con i due estremi vincolati. Questi test statici non
              catturano il comportamento dinamico — per quello servono
              strain gauge applicati al telaio durante la guida su
              percorso standard, una tecnica usata dai costruttori
              racing per confrontare generazioni di telai.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Setup pilota</span>
            <h3>Come il pilota modifica la rigidità percepita senza toccare il telaio</h3>
            <p>
              Il pilota influenza la rigidità percepita del sistema
              attraverso la sua postura: braccia tese trasmettono
              le vibrazioni direttamente alle spalle, braccia
              leggermente flesse agiscono come ammortizzatori
              secondari riducendo le vibrazioni percepite del 30 –
              40%. I guanti con palmo in gel, i nastri manubrio
              spessi e le pedane con inserto in gomma sono tutti
              filtri passivi che riducono le vibrazioni ad alta
              frequenza prima che raggiungano il pilota. Un pilota
              con tecnica corretta su un telaio "rigido" percepisce
              meno vibrazioni di un pilota con tecnica scorretta
              su un telaio "morbido".
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Rigidita;
