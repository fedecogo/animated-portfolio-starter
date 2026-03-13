import "./telaio.scss";
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

const Telaio = () => {
  return (
    <section className="telaio" id="telaio">
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
              Telaio
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Cos'è il telaio<br />
              <span className="accentText">e cosa fa davvero</span>
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il telaio è l'unico componente della moto che è in
              contatto — diretto o indiretto — con tutto il resto.
              Motore, sospensioni, ruote, pilota: tutto si connette
              al telaio. Questa posizione centrale non è solo
              topografica — è funzionale. Il telaio è il mediatore
              meccanico tra tutte le forze in gioco durante la guida,
              e il modo in cui le gestisce determina il comportamento
              della moto in modo più profondo di qualsiasi altro
              singolo componente.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Eppure il telaio è il componente a cui si pensa meno.
              Il motore ha la sua scheda tecnica, le sospensioni
              hanno le loro curve di smorzamento, la ciclistica
              ha i suoi angoli. Il telaio è spesso ridotto a
              "il resto" — quella struttura che tiene tutto insieme.
              In realtà è un progetto ingegneristico complesso con
              requisiti spesso contraddittori: deve essere rigido
              abbastanza da non deformarsi sotto carico, flessibile
              abbastanza da non trasmettere ogni vibrazione al pilota,
              leggero abbastanza da non compromettere la dinamica
              e resistente abbastanza da durare anni di uso intenso.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Funzioni principali</span>
              <h3>Sei cose contemporaneamente</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Collega e allinea i punti di ancoraggio di forcella, forcellone e motore con geometria precisa e stabile</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Distribuisce i carichi dinamici — peso, frenata, accelerazione, impatti — senza cedimenti locali per fatica</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniStep">
                </span>
                <span className="miniText">Partecipa alla struttura rigida insieme al motore — in quasi tutti i 2T il propulsore è elemento portante</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Definisce la posizione ergonomica del pilota — altezza sella, distanza manubrio, posizione pedane</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">05</span>
                <span className="miniText">Filtra selettivamente le vibrazioni — lascia passare le informazioni utili, smorza quelle dannose</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">06</span>
                <span className="miniText">Mantiene la geometria sotto carico variabile — non si deforma in modo permanente nemmeno dopo anni di impatti</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FORZE BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="forzeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="forzeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Le forze in gioco</span>
            <h3>Cosa agisce sul telaio durante la guida — e in che direzione</h3>
            <p>
              Durante la guida fuoristrada il telaio è soggetto a
              forze in tutte e tre le direzioni contemporaneamente,
              con intensità che variano nel tempo in modo non
              predicibile. Non è un carico statico calcolabile —
              è un carico dinamico stocastico che richiede un
              approccio progettuale completamente diverso da quello
              di una struttura fissa.
            </p>
          </motion.div>

          <motion.div className="forzeGrid" variants={cardVariants}>

            <div className="forzaCard">
              <div className="forzaIconWrap">
                <span className="forzaIcon">↕</span>
              </div>
              <div className="forzaBody">
                <h4>Verticali — peso e impatti</h4>
                <p>
                  Il peso statico del sistema pilota-moto (130 – 180 kg
                  tipicamente) agisce in modo continuo. Gli impatti
                  da atterraggio dopo un salto generano forze verticali
                  che possono superare 5 – 8 volte il peso statico —
                  800 – 1.400 kg di carico istantaneo su una struttura
                  che pesa meno di 10 kg. Il telaio deve distribuire
                  questi picchi verso le sospensioni senza concentrare
                  lo sforzo in punti singoli che cederebbero per fatica
                  dopo poche centinaia di cicli.
                </p>
              </div>
            </div>

            <div className="forzaCard">
              <div className="forzaIconWrap">
                <span className="forzaIcon">↔</span>
              </div>
              <div className="forzaBody">
                <h4>Longitudinali — frenata e accelerazione</h4>
                <p>
                  La frenata anteriore intensa genera un momento
                  flettente che tende ad abbassare il muso e
                  solleva il posteriore — carico sul canotto di
                  sterzo nell'ordine di 3 – 5 kN in frenata
                  d'emergenza. L'accelerazione genera il momento
                  opposto sul forcellone. Il telaio deve resistere
                  a questi momenti senza che la geometria di sterzo
                  cambi in modo percepibile — altrimenti la moto
                  modifica la sua traiettoria autonomamente durante
                  la transizione frenata-accelerazione.
                </p>
              </div>
            </div>

            <div className="forzaCard">
              <div className="forzaIconWrap">
                <span className="forzaIcon">↻</span>
              </div>
              <div className="forzaBody">
                <h4>Torsionali — curva su sconnesso</h4>
                <p>
                  In curva su terreno irregolare le due ruote
                  si trovano spesso a quote diverse — una su una
                  cresta, l'altra in una buca. Questo genera una
                  torsione sull'asse longitudinale del telaio.
                  La rigidità torsionale determina quanto il telaio
                  "ritorce" in risposta: troppa rigidità trasmette
                  tutto al pilota, troppa flessibilità perde la
                  traiettoria. Non esiste un valore ottimale
                  assoluto — dipende dal tipo di utilizzo,
                  dalla velocità e dal terreno.
                </p>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── MOTORE STRUTTURALE BLOCK ─────────────────────────────────────── */}
        <motion.div
          className="motoreBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="motoreHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il motore come elemento strutturale</span>
            <h3>Perché nel 2T il motore non è solo portato dal telaio — ne fa parte</h3>
            <p>
              Nei motori a 4 tempi tradizionali il telaio è una struttura
              completa che porta il motore come un peso inerte. Nei 2T
              da fuoristrada moderni il rapporto è diverso e più efficiente:
              il motore è un elemento strutturale attivo che contribuisce
              alla rigidità complessiva del sistema.
            </p>
          </motion.div>

          <motion.div className="motoreContent" variants={cardVariants}>

            <div className="motoreLeft">
              <div className="motorePoint">
                <span className="motoreNum">01</span>
                <div>
                  <h4>I punti di attacco — 3 o 4 ancoraggi calibrati</h4>
                  <p>
                    Il motore è fissato al telaio in 3 o 4 punti con
                    bulloni di grande sezione — tipicamente M10 o M12
                    in acciaio ad alta resistenza. Questi attacchi non
                    sono semplici supporti: sono progettati per trasferire
                    forze specifiche tra motore e telaio in modo controllato.
                    La rigidità del carter del motore — in alluminio pressofuso
                    da 2 – 4 mm di spessore nelle zone critiche — contribuisce
                    direttamente alla rigidità del triangolo telaio-motore.
                    Un motore ben attaccato è parte della struttura.
                    Un attacco allentato crea un nodo elastico dove dovrebbe
                    esserci un nodo rigido — e cambia le proprietà dinamiche
                    dell'intero sistema.
                  </p>
                </div>
              </div>

              <div className="motorePoint">
                <span className="motoreNum">02</span>
                <div>
                  <h4>Le silent block — dove si vuole compliance</h4>
                  <p>
                    Alcuni attacchi motore usano silent block — inserti
                    in gomma vulcanizzata tra il bullone e la sede nel telaio.
                    Non sono un compromesso costruttivo: sono una scelta
                    progettuale deliberata che introduce una compliance
                    controllata in direzioni specifiche. Il silent block
                    assorbe le vibrazioni ad alta frequenza generate dalla
                    combustione (il "rumore" del motore) senza compromettere
                    la rigidità alle basse frequenze (le forze di guida).
                    È un filtro meccanico passivo — semplice, economico
                    e straordinariamente efficace. I silent block usurati
                    o indurati cambiano il carattere vibratorio della moto
                    in modo sottile ma percepibile.
                  </p>
                </div>
              </div>
            </div>

            <div className="motoreRight">
              <div className="motoreDiagram">
                <div className="diagNode diagNodeTelaio">
                  <span>Telaio</span>
                </div>
                <div className="diagConnectors">
                  <div className="diagConnector diagConn1">
                    <span className="diagConnLabel">attacco ant. sup.</span>
                  </div>
                  <div className="diagConnector diagConn2">
                    <span className="diagConnLabel">attacco ant. inf.</span>
                  </div>
                  <div className="diagConnector diagConn3">
                    <span className="diagConnLabel">attacco post.</span>
                  </div>
                </div>
                <div className="diagNode diagNodeMotore">
                  <span>Motore</span>
                </div>
                <div className="diagRigidita">
                  <span className="diagRigiditaLabel">sistema rigido integrato</span>
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
              <span className="placeholderText">Immagine — telaio a doppia trave con motore montato, punti di attacco evidenziati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Il triangolo telaio-motore</span>
            <p>
              Con il motore montato e i bulloni di attacco serrati
              al corretto momento torcente, il sistema telaio-motore
              si comporta come una struttura monolitica. Il carter
              del motore chiude il triangolo inferiore che la sola
              culla del telaio non potrebbe formare — è questo
              triangolo che dà al sistema la sua rigidità torsionale
              caratteristica. Allentare anche uno solo dei bulloni
              di attacco motore modifica la distribuzione degli
              sforzi nell'intero sistema.
            </p>
          </div>
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
            <span className="sectionLabel">Tipologie costruttive</span>
            <h3>A traliccio, a doppia trave, a perimetrale — tre architetture, tre caratteri</h3>
            <p>
              La geometria costruttiva del telaio determina come
              le forze si distribuiscono nella struttura e quale
              carattere dinamico avrà la moto. Ogni architettura
              è ottimale per un contesto specifico — non esiste
              una soluzione universalmente superiore.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>

            <div className="tipoCard tipoTraliccio">
              <span className="tipoTag">Traliccio tubolare</span>
              <h4>Il classico — duttile, riparabile, vivo</h4>
              <p>
                Tubi rotondi o ovali saldati a formare un reticolo
                triangolato. Ogni tubo lavora prevalentemente a
                trazione o compressione — il modo più efficiente
                di usare il materiale. Caratteristico del trial
                e dell'enduro classico in acciaio cromoly.
                La flessibilità naturale filtra le vibrazioni
                e comunica il terreno al pilota in modo organico.
                Riparabile in campo con saldatrice TIG portatile.
                L'accesso al motore per la manutenzione è facilitato
                dalla struttura aperta del reticolo.
              </p>
              <div className="tipoFooter">
                <span className="tipoUsage">Trial · Enduro classico · Vintage</span>
              </div>
            </div>

            <div className="tipoCard tipoDoppiaTrave">
              <span className="tipoTag">Doppia trave (twin spar)</span>
              <h4>Il moderno — leggero, rigido, tecnico</h4>
              <p>
                Due travi principali in alluminio estruso o pressofuso
                corrono parallele dal canotto di sterzo fino al perno
                del forcellone, abbracciando il motore lateralmente.
                È l'architettura dominante nel MX e nell'enduro moderno
                — KTM, Husqvarna, Yamaha, Honda. Rigidità torsionale
                molto alta, peso ridotto, possibilità di ottimizzare
                la rigidità differenziale variando lo spessore delle
                pareti nelle zone critiche. Non si raddrizza dopo
                deformazioni gravi — si sostituisce.
              </p>
              <div className="tipoFooter">
                <span className="tipoUsage">MX · Enduro moderno · Supercross</span>
              </div>
            </div>

            <div className="tipoCard tipoIbrido">
              <span className="tipoTag">Ibrido acciaio-alluminio</span>
              <h4>Il compromesso evoluto — il meglio di entrambi</h4>
              <p>
                Struttura principale in alluminio pressofuso con
                elementi in acciaio cromoly nelle zone a maggiore
                richiesta di duttilità — canotto di sterzo e supporti
                motore. Beta e TM usano approcci ibridi sui modelli
                enduro: si ottiene il peso dell'alluminio nelle zone
                strutturali e la riparabilità dell'acciaio nelle zone
                più esposte agli urti. Costruttivamente più complesso
                ma ottimizzato per l'uso agonistico prolungato dove
                la riparabilità in gara conta quanto le prestazioni.
              </p>
              <div className="tipoFooter">
                <span className="tipoUsage">Enduro racing · Maratona · Hard Enduro</span>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── ISPEZIONE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="ispezioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="ispezioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Ispezione e diagnosi</span>
            <h3>Cosa controllare sul telaio — e quando farlo</h3>
            <p>
              Il telaio non richiede manutenzione nel senso tradizionale —
              non si lubrifica, non ha parti di consumo, non si regola.
              Ma richiede ispezione periodica, perché i danni che accumula
              sono silenziosi: una cricca da fatica non fa rumore,
              non perde olio, non causa scatti anomali. Si manifesta
              solo quando cede — nel momento peggiore.
            </p>
          </motion.div>

          <motion.div className="ispezioneGrid" variants={cardVariants}>

            <div className="ispezioneCard ispezioneCardRed">
              <span className="ispezioneBadge">Alta priorità</span>
              <h4>Zona canotto di sterzo — la più sollecitata</h4>
              <p>
                La giunzione tra il canotto di sterzo e le travi
                principali è il punto a maggiore concentrazione
                di sforzi dell'intero telaio — ogni frenata carica
                questa zona in flessione. Ispezionare con luce
                radente o liquidi penetranti dopo ogni stagione
                intensa o dopo cadute frontali violente. Una cricca
                qui non è visibile a occhio nudo in luce normale —
                serve metodologia. I telai in alluminio pressofuso
                mostrano spesso cricche che partono dagli spigoli
                interni delle fusioni, non dalle saldature.
              </p>
            </div>

            <div className="ispezioneCard ispezioneCardYellow">
              <span className="ispezioneBadge">Media priorità</span>
              <h4>Attacchi motore e saldature — controllo annuale</h4>
              <p>
                Ogni punto di saldatura è un potenziale inizio
                di cricca da fatica — specialmente nelle zone dove
                il cordone cambia direzione bruscamente o dove
                la sezione del tubo cambia rapidamente. Controllare
                visivamente tutte le saldature con luce radente
                ogni stagione. I bulloni di attacco motore vanno
                verificati al momento torcente specificato —
                non a sensazione. Un attacco allentato genera
                micro-movimenti che consumano il materiale nel
                tempo e portano a cricche nei fori di attacco.
              </p>
            </div>

            <div className="ispezioneCard ispezioneCardSteel">
              <span className="ispezioneBadge">Dopo caduta grave</span>
              <h4>Allineamento — la verifica che nessuno fa</h4>
              <p>
                Dopo una caduta frontale violenta — specialmente
                se ha deformato la forcella o spostato il manubrio —
                l'allineamento del telaio va verificato. Il metodo
                artigianale: filo teso dall'asse del canotto al centro
                del perno forcellone — deve essere perfettamente
                centrato rispetto all'asse longitudinale. Il metodo
                preciso: banco di riscontro con comparatori. Un telaio
                storto di 2 – 3 mm causa un tiro costante da un lato
                che il pilota compensa inconsciamente — finché non
                capisce perché si stanca di più da una parte.
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
            <span className="cardTag">FEM</span>
            <h3>Come si progetta un telaio moderno — simulazione prima del prototipo</h3>
            <p>
              I telai moderni nascono da analisi FEM (Finite Element
              Method) — simulazioni numeriche che suddividono la
              struttura in migliaia di elementi e calcolano la
              distribuzione degli sforzi sotto ogni condizione di
              carico. Prima di costruire un prototipo fisico il
              progettista vede dove si concentrano gli sforzi,
              sposta materiale dalle zone scariche a quelle critiche
              e ottimizza spessori e sezioni. Il risultato è una
              struttura con materiale esattamente dove serve.
              I telai KTM e Husqvarna delle ultime generazioni
              hanno subito decine di iterazioni FEM prima di
              arrivare al primo taglio di lamiera.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Fatica</span>
            <h3>Cricche da fatica — il cedimento silenzioso che si accumula nel tempo</h3>
            <p>
              Il cedimento per fatica avviene quando un componente
              è sottoposto a carichi ciclici ripetuti — anche
              ben al di sotto del limite di snervamento statico.
              Ogni ciclo propaga microscopicamente una cricca
              preesistente fino alla rottura finale. Nei telai
              in alluminio questo processo è inevitabile: non
              esiste un livello di carico sotto cui l'alluminio
              non si degradi nel tempo. L'ispezione periodica
              delle saldature — con luce radente o liquidi
              penetranti — è l'unico modo per intercettare
              una cricca prima che diventi rottura di schianto.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Feeling</span>
            <h3>Perché i piloti parlano del "carattere" del telaio — non è marketing</h3>
            <p>
              La rigidità controllata del telaio influenza
              direttamente il feedback che il pilota riceve
              dal terreno. Un telaio troppo rigido trasmette
              ogni irregolarità senza filtrare — il pilota
              è in costante correzione. Uno troppo flessibile
              ritarda la risposta alle intenzioni — si sterza
              e la moto risponde mezzo secondo dopo. Il telaio
              ideale filtra le vibrazioni ad alta frequenza
              (piccole asperità) ma trasmette fedelmente
              le informazioni a bassa frequenza (assetto
              generale, carico sulle ruote). È un equilibrio
              sottile — e ogni marchio ha la sua firma precisa.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Telaio;
