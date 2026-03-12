import "./telaioIntro.scss";
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

const TelaioIntro = () => {
  return (
    <section className="telaioIntro" id="telaio-intro">
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
              Capitolo — Telaio
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il telaio —<br />
              <span className="accentText">la struttura che tiene tutto insieme</span>
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il telaio è il componente che non si vede quando
              la moto funziona bene — e diventa l'unica cosa
              a cui si pensa quando qualcosa non va. È la spina
              dorsale della moto: collega il motore alle sospensioni,
              trasferisce le forze dal pilota alla ruota, determina
              la geometria di guida e influenza ogni singola
              sensazione trasmessa attraverso il manubrio e
              le pedane. Non è un contenitore passivo.
              È un componente attivo con proprietà meccaniche
              precise — rigidità, flessibilità, geometria —
              progettate con la stessa cura del motore.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              In questo capitolo analizziamo il telaio in ogni
              sua dimensione: i materiali che lo compongono,
              le geometrie che definiscono il comportamento
              dinamico, la distribuzione dei pesi che determina
              l'agilità, il canotto di sterzo con i suoi cuscinetti,
              il forcellone e la sua articolazione, fino al
              cavalletto — l'ultimo dettaglio che fa la differenza
              quando il motore è spento e la moto deve stare
              in piedi da sola.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Cosa trovi in questo capitolo</span>
              <h3>Sette sezioni — dalla struttura al dettaglio</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="s1">01</span>
                <span className="miniText"><strong>Materiali</strong> — acciaio cromoly, alluminio, titanio e compositi: perché ogni scelta è un compromesso</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s2">02</span>
                <span className="miniText"><strong>Geometrie e distribuzione pesi</strong> — interasse, avancorsa, angolo di sterzo e baricentro</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s3">03</span>
                <span className="miniText"><strong>Rigidità</strong> — torsionale e flessionale: perché un telaio troppo rigido è spesso peggio di uno flessibile</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s4">04</span>
                <span className="miniText"><strong>Canotto di sterzo</strong> — costruzione, cuscinetti conici e a sfere, regolazione del precarico</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s5">05</span>
                <span className="miniText"><strong>Forcellone</strong> — tipi costruttivi, pivot, cuscinetto forcellone e diagnosi del gioco</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s6">06</span>
                <span className="miniText"><strong>Cavalletto</strong> — laterale e centrale, bilanciamento del peso, sicurezza e manutenzione</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FUNZIONE STRUTTURALE BLOCK ───────────────────────────────────── */}
        <motion.div
          className="funzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="funzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Funzione strutturale</span>
            <h3>Cosa deve fare un telaio — le sei forze che deve gestire contemporaneamente</h3>
            <p>
              Un telaio di moto da fuoristrada è soggetto a forze
              in tutte le direzioni contemporaneamente — e deve
              gestirle senza deformarsi in modo permanente,
              senza assorbire energia che dovrebbe andare alla
              ruota, e senza trasmettere al pilota vibrazioni
              che degraderebbero il controllo. È un problema
              di ingegneria strutturale con vincoli multipli
              e spesso contraddittori.
            </p>
          </motion.div>

          <motion.div className="funzioneGrid" variants={cardVariants}>

            <div className="funzioneCard">
              <span className="funzioneIcon">↕</span>
              <h4>Forze verticali — il peso e le asperità</h4>
              <p>
                Il peso del pilota e della moto grava costantemente
                sul telaio. Le asperità del terreno generano impulsi
                verticali che possono superare di 5 – 10 volte il
                peso statico nei salti e negli atterraggi. Il telaio
                deve distribuire queste forze verso le sospensioni
                senza concentrare gli sforzi in punti singoli che
                cederebbero per fatica.
              </p>
            </div>

            <div className="funzioneCard">
              <span className="funzioneIcon">↔</span>
              <h4>Forze longitudinali — frenata e accelerazione</h4>
              <p>
                Durante la frenata la forza frenante anteriore
                comprime la forcella e genera un momento di beccheggio
                che tende a "affossare" il anteriore e sollevare
                il posteriore. Durante l'accelerazione accade
                il contrario. Il telaio deve resistere a questi
                momenti flettenti senza deformarsi — altrimenti
                la geometria di sterzo cambia in modo incontrollato.
              </p>
            </div>

            <div className="funzioneCard">
              <span className="funzioneIcon">↻</span>
              <h4>Forze torsionali — curve e terreno irregolare</h4>
              <p>
                In curva su terreno sconnesso le due ruote possono
                trovarsi a quote diverse — la ruota anteriore su
                una cresta, la posteriore in una buca. Questo crea
                una torsione sull'asse longitudinale del telaio.
                Un telaio troppo rigido in torsione trasmette
                tutto al pilota; uno troppo flessibile perde
                il contatto con la traiettoria. Il bilanciamento
                è il cuore del progetto telaio.
              </p>
            </div>

            <div className="funzioneCard">
              <span className="funzioneIcon">⊕</span>
              <h4>Punto di ancoraggio motore — il telaio come struttura portante</h4>
              <p>
                In quasi tutti i 2T da fuoristrada il motore è
                un elemento strutturale — non solo portato dal
                telaio, ma parte integrante della struttura rigida.
                I punti di attacco motore (tipicamente 3 – 4)
                contribuiscono alla rigidità complessiva del
                triangolo telaio-motore. Un attacco allentato
                cambia le proprietà strutturali del sistema intero —
                e genera vibrazioni anomale percepibili sul manubrio.
              </p>
            </div>

            <div className="funzioneCard">
              <span className="funzioneIcon">⌖</span>
              <h4>Allineamento geometrico — canotto, forcellone e perno ruota</h4>
              <p>
                Il telaio deve mantenere l'allineamento preciso
                tra l'asse del canotto di sterzo, il perno del
                forcellone e il perno della ruota posteriore.
                Qualsiasi deformazione permanente — anche piccola —
                altera la geometria di sterzo e la linea di spinta
                della ruota. Un telaio raddrizzato dopo una caduta
                grave non è mai preciso come l'originale: la
                struttura cristallina del metallo nelle zone
                deformate è irrimediabilmente alterata.
              </p>
            </div>

            <div className="funzioneCard">
              <span className="funzioneIcon">◈</span>
              <h4>Ergonomia e posizione del pilota — il telaio come interfaccia</h4>
              <p>
                La geometria del telaio determina la posizione
                relativa di manubrio, pedane e sella — e quindi
                la postura del pilota. Un telaio con culla bassa
                abbassa il baricentro e cambia la distribuzione
                del peso; uno con trave principale alta dà più
                spazio al motore ma alza il pilota. Non è un
                dettaglio estetico: la posizione del pilota
                influenza direttamente il controllo dinamico
                della moto.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── SPLIT CARDS — acciaio vs alluminio ──────────────────────────── */}
        <motion.div
          className="splitCards"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="splitHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">I due materiali dominanti</span>
            <h3>Acciaio cromoly vs alluminio — la scelta che definisce il carattere della moto</h3>
            <p>
              Ogni telaio da fuoristrada moderno è costruito in uno
              di questi due materiali — o in una combinazione dei due.
              La scelta non è mai casuale: acciaio e alluminio hanno
              proprietà meccaniche, costruttive e di comportamento
              dinamico radicalmente diverse, e quella differenza
              si sente nel modo in cui la moto risponde.
            </p>
          </motion.div>

          <motion.div className="splitGrid" variants={cardVariants}>

            <div className="splitCard splitAcciaio">
              <div className="splitBar splitBarAcciaio" />
              <div className="splitCardBody">
                <span className="splitTag">Acciaio cromoly (CrMo)</span>
                <h3>Elastico, riparabile, vivo</h3>
                <p>
                  L'acciaio al cromo-molibdeno (25CrMo4, 4130) è
                  il materiale storico del fuoristrada — usato da
                  decenni su trial, enduro e cross. Ha un modulo
                  elastico di 210 GPa e una resistenza a trazione
                  di 700 – 1.000 MPa nelle leghe da telaio. La sua
                  caratteristica distintiva è la duttilità: prima
                  di cedere si deforma plasticamente, dando un
                  segnale visibile. Si piega invece di rompersi
                  di schianto. Si salda con TIG senza trattamenti
                  termici complessi. Si raddrizza in officina dopo
                  una caduta non grave. Costa meno dell'alluminio
                  a parità di resistenza. Il prezzo: pesa di più —
                  un telaio in acciaio per 250 cc pesa 8 – 11 kg
                  contro i 4 – 6 dell'equivalente in alluminio.
                </p>
                <div className="splitPills">
                  <span className="splitPill">Riparabile in campo</span>
                  <span className="splitPill">Elasticità naturale</span>
                  <span className="splitPill">Saldatura semplice</span>
                  <span className="splitPill">Più pesante</span>
                  <span className="splitPill">Trial / Enduro classico</span>
                </div>
              </div>
            </div>

            <div className="splitCard splitAlluminio">
              <div className="splitBar splitBarAlluminio" />
              <div className="splitCardBody">
                <span className="splitTag">Alluminio (6061 / 7005 T6)</span>
                <h3>Leggero, rigido, tecnico</h3>
                <p>
                  L'alluminio ha rivoluzionato il fuoristrada negli
                  anni '90 quando KTM, Honda e Yamaha hanno iniziato
                  a usarlo sui modelli da cross. Il 6061-T6 ha
                  densità di 2,7 g/cm³ contro i 7,8 dell'acciaio —
                  quasi tre volte più leggero. Il 7005-T6 usato
                  da Yamaha e KTM sui modelli racing ha una resistenza
                  a trazione di 350 – 430 MPa con peso ancora inferiore.
                  Il limite è la fatica: l'alluminio non ha un limite
                  di fatica definito — si degrada progressivamente
                  a ogni ciclo di carico, anche piccolo. Un telaio
                  in alluminio ha una vita in cicli — non infinita.
                  Non si raddrizza dopo deformazioni gravi: la struttura
                  cristallina è compromessa e il pezzo va sostituito.
                  La saldatura richiede TIG con gas inerte e spesso
                  trattamento termico successivo per ripristinare
                  le proprietà meccaniche.
                </p>
                <div className="splitPills">
                  <span className="splitPill">Leggerissimo</span>
                  <span className="splitPill">Alta rigidità specifica</span>
                  <span className="splitPill">Non raddrizzabile</span>
                  <span className="splitPill">Vita in cicli finita</span>
                  <span className="splitPill">Cross / MX moderno</span>
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
              <span className="placeholderText">Immagine — telaio nudo con punti di attacco motore, canotto di sterzo, perno forcellone etichettati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Il telaio nudo</span>
            <p>
              Il telaio senza motore, sospensioni e carrozzeria
              rivela la sua geometria essenziale: il triangolo
              principale formato da trave superiore, trave
              inferiore e cannotto di sterzo, la culla che
              abbraccia il motore dal basso, i punti di attacco
              del forcellone e i supporti del sottosella.
              Ogni tubo ha una sezione, uno spessore e
              un orientamento scelti per ottimizzare la
              risposta alle forze specifiche che agiscono
              in quella zona della struttura.
            </p>
          </div>
        </motion.div>

        {/* ── TIPOLOGIE TELAIO BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="tipologieBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tipologieHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Tipologie costruttive</span>
            <h3>A traliccio, a doppia trave, a perimetrale — le tre architetture del telaio da fuoristrada</h3>
            <p>
              La geometria costruttiva del telaio determina come
              le forze si distribuiscono nella struttura, dove
              si concentrano gli sforzi e quale carattere dinamico
              avrà la moto. Non esiste una soluzione universalmente
              superiore — ogni architettura è ottimale per
              un contesto specifico.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>

            <div className="tipoCard">
              <span className="tipoNum tipoNumSilver">01</span>
              <h4>A traliccio (tubolare)</h4>
              <p>
                La struttura più classica: tubi rotondi o ovali
                saldati a formare un reticolo triangolato.
                Ogni tubo lavora prevalentemente a trazione
                o compressione — il modo più efficiente di
                usare il materiale. Caratteristico del trial
                e dell'enduro classico in acciaio cromoly.
                Eccellente riparabilità: un tubo danneggiato
                si taglia e si rimpiazza. Flessibilità naturale
                che filtra le vibrazioni. Il disegno a reticolo
                lascia spazio intorno al motore facilitando
                l'accesso alla manutenzione.
              </p>
            </div>

            <div className="tipoCard">
              <span className="tipoNum tipoNumLight">02</span>
              <h4>A doppia trave (twin spar)</h4>
              <p>
                Due travi principali in alluminio estruso o
                pressofuso che corrono parallele dal canotto
                di sterzo fino al perno del forcellone,
                abbracciando il motore lateralmente. È
                l'architettura dominante nel MX e nell'enduro
                moderno — KTM, Husqvarna, Yamaha, Honda.
                Rigidità torsionale molto alta, peso ridotto,
                possibilità di ottimizzare la rigidità
                differenziale (più rigido longitudinalmente,
                controllabilmente flessibile lateralmente)
                variando lo spessore delle pareti nelle zone
                critiche.
              </p>
            </div>

            <div className="tipoCard">
              <span className="tipoNum tipoNumMix">03</span>
              <h4>Ibrido acciaio-alluminio</h4>
              <p>
                Alcune soluzioni moderne combinano una struttura
                principale in alluminio pressofuso con elementi
                in acciaio cromoly nelle zone a maggiore
                richiesta di duttilità — tipicamente la zona
                del cannotto di sterzo e i supporti del
                motore. Beta e TM usano approcci ibridi
                sui modelli enduro: si ottiene il peso
                dell'alluminio nelle zone strutturali e
                la riparabilità dell'acciaio nelle zone
                più esposte agli urti. Costruttivamente
                più complesso ma ottimizzato per l'uso
                agonistico prolungato.
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
            <span className="cardTag">Progettazione</span>
            <h3>FEM — come si progetta un telaio moderno</h3>
            <p>
              I telai moderni sono progettati con analisi FEM
              (Finite Element Method) — simulazioni numeriche
              che suddividono il telaio in migliaia di elementi
              e calcolano la distribuzione degli sforzi sotto
              ogni condizione di carico. Prima di costruire
              un prototipo fisico il progettista vede dove
              si concentrano gli sforzi, sposta materiale
              dalle zone scariche a quelle critiche e ottimizza
              spessori e sezioni. Il risultato è una struttura
              con materiale esattamente dove serve — né di più,
              né di meno. I telai KTM e Husqvarna delle ultime
              generazioni hanno subito decine di iterazioni FEM
              prima di arrivare al prototipo.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Fatica del metallo</span>
            <h3>Cricche da fatica — il cedimento silenzioso che si accumula nel tempo</h3>
            <p>
              Il cedimento per fatica avviene quando un componente
              è sottoposto a carichi ciclici ripetuti — anche
              ben al di sotto del limite di snervamento statico.
              Ogni ciclo di carico propaga microscopicamente
              una cricca preesistente fino alla rottura finale.
              Nei telai in alluminio questo processo è inevitabile:
              non esiste un livello di carico sotto cui l'alluminio
              non si degradi. L'ispezione periodica delle saldature —
              specialmente attorno al canotto di sterzo e ai punti
              di attacco motore — con luce radente o liquidi
              penetranti è l'unico modo per intercettare una
              cricca prima che diventi rottura.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Telaio e feeling</span>
            <h3>Perché i piloti parlano del "carattere" del telaio — non è marketing</h3>
            <p>
              La rigidità controllata del telaio influenza
              direttamente il feedback che il pilota riceve
              dal terreno. Un telaio troppo rigido trasmette
              ogni irregolarità senza filtrare — il pilota
              è costantemente corretto da impulsi non voluti.
              Uno troppo flessibile "ritarda" la risposta
              alle intenzioni del pilota — si sterza e la
              moto risponde mezzo secondo dopo. Il telaio
              ideale ha una rigidità che filtra le vibrazioni
              ad alta frequenza (piccole asperità) ma trasmette
              fedelmente le informazioni a bassa frequenza
              (assetto generale, carico sulle ruote).
              È un equilibrio sottile — e ogni marchio ha
              la sua firma.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default TelaioIntro;
