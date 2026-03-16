import "./cablaggio.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
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

const Cablaggio = () => {
  return (
    <section className="cablaggio" id="cablaggio">
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
              Elettronica — Cablaggio
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il cablaggio — sistema nervoso fisico, distribuzione dell'energia e trasmissione dei segnali
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il cablaggio non è solo "i fili della moto". È il sistema di conduttori,
              connettori, protezioni e masse che permette a ogni componente elettrico
              di ricevere corrente, inviare segnali e riferirsi a un potenziale comune.
              Un cablaggio integro è invisibile: tutto funziona e nessuno ci pensa.
              Un cablaggio compromesso — per ossidazione, vibrazione, calore, umidità
              o interventi improvvisati — produce malfunzionamenti difficili da localizzare,
              intermittenti e spesso scambiati per guasti di altri componenti.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La complessità del cablaggio dipende dalla moto: su una enduro spinta
              può essere essenziale e compatto, su una stradale moderna è ricco di connettori,
              derivazioni e circuiti dedicati. In entrambi i casi il principio è lo stesso —
              ogni filo deve avere una sezione adeguata al carico, un isolamento integro,
              un terminale pulito e una massa affidabile. Dove uno di questi elementi
              viene meno, il sistema mostra i primi segni di cedimento.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del cablaggio</span>
              <h3>Quattro concetti per capire il ruolo del fascio fili</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Conduzione — ogni filo porta corrente da un punto all'altro;
                  la sezione determina quanta corrente può passare senza
                  surriscaldarsi o perdere tensione lungo il percorso
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Segnale — oltre alla potenza, il cablaggio trasporta segnali
                  a bassa tensione tra sensori e attuatori; la qualità del contatto
                  è critica anche per correnti minime
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Massa — il riferimento comune di potenziale che chiude tutti i
                  circuiti; una massa difettosa crea anomalie su più utenze in modo
                  apparentemente casuale e difficile da collegare
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Protezione — fusibili, relè e guaine non sono accessori
                  ma parte strutturale; proteggono fili e componenti da
                  surriscaldamenti, cortocircuiti e abrasioni meccaniche
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
              <span className="placeholderText">
                Schema del fascio fili moto — percorso del cablaggio principale dal
                blocco fusibili alla batteria e ai carichi; evidenziare punti di
                massa, connettori principali e ramificazioni
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Il fascio fili</span>
            <p>
              Il fascio fili è l'insieme organizzato di conduttori, protezioni e
              connettori che percorre la moto dalla testa al retrotreno.
              Non è casuale: ogni ramo è dimensionato per un carico specifico,
              protetto da una guaina adeguata e connesso attraverso terminali che
              devono garantire bassa resistenza di contatto nel tempo, anche in
              presenza di vibrazioni, umidità e variazioni termiche.
            </p>
          </div>
        </motion.div>

        {/* ── FUNZIONE BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="funzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="funzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Come funziona</span>
            <h3>Distribuzione dell'energia, segnali, riferimento di massa e protezione — quattro funzioni in parallelo</h3>
            <p>
              Il cablaggio non distribuisce solo corrente: porta informazioni, fornisce
              un riferimento di potenziale comune e protegge l'impianto da condizioni
              anomale. Capire queste funzioni aiuta a interpretare correttamente i sintomi.
            </p>
          </motion.div>

          <motion.div className="funzioneGrid" variants={cardVariants}>
            <div className="funzioneCard">
              <span className="funzioneIdx">01</span>
              <h4>Distribuzione dell'energia — dalla batteria a ogni utenza</h4>
              <p>
                La corrente parte dalla batteria, transita attraverso il blocco fusibili
                principale e si ramifica verso ogni utenza: motorino di avviamento, luci,
                pompa carburante e servizi vari. Ogni ramo ha una sezione proporzionale
                al carico che deve sostenere. Un filo sottodimensionato si scalda, cade
                di tensione e può danneggiare sia se stesso che l'utenza collegata.
              </p>
            </div>

            <div className="funzioneCard">
              <span className="funzioneIdx">02</span>
              <h4>Trasmissione dei segnali — dati a bassa tensione che guidano i sistemi di controllo</h4>
              <p>
                Una parte del cablaggio non porta corrente di potenza ma segnali:
                tensioni ridotte che codificano posizione, temperatura, pressione o
                velocità. Questi fili sono sensibili alla qualità del contatto e alle
                interferenze. Un terminale ossidato su un segnale da pochi millivolt
                può produrre letture errate o codici di guasto completamente fuorvianti.
              </p>
            </div>

            <div className="funzioneCard">
              <span className="funzioneIdx">03</span>
              <h4>La massa — il riferimento senza il quale nessun circuito si chiude</h4>
              <p>
                Ogni circuito ha bisogno di un punto di ritorno verso la batteria.
                Sulla moto questo avviene attraverso la massa: un punto meccanico
                (telaio, motore) collegato al polo negativo. Se la massa principale
                è difettosa, più utenze smettono di funzionare contemporaneamente
                in modo apparentemente casuale, disorientando la diagnosi.
              </p>
            </div>

            <div className="funzioneCard">
              <span className="funzioneIdx">04</span>
              <h4>Protezione del circuito — fusibili e relè come guardiani dell'impianto</h4>
              <p>
                I fusibili interrompono il circuito quando la corrente supera la soglia
                per cui sono dimensionati, proteggendo fili e componenti dal surriscaldamento.
                I relè commutano carichi elevati con segnali a bassa corrente, riducendo
                lo stress sui componenti di comando. Un fusibile che salta ripetutamente
                non va sostituito con uno di amperaggio maggiore: è un sintomo che indica
                un corto o un carico anomalo da individuare.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── ANATOMIA BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="anatomiaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="anatomiaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Com'è fatto</span>
            <h3>Conduttori, connettori, terminali, guaine e fusibili — la struttura fisica del cablaggio</h3>
            <p>
              Il cablaggio non è solo filo. È un sistema in cui ogni elemento ha un ruolo
              preciso e dove la qualità di ciascuna parte contribuisce all'affidabilità
              dell'intero impianto nel tempo.
            </p>
          </motion.div>

          <motion.div className="anatomiaGrid" variants={cardVariants}>
            <div className="anatomiaCard">
              <span className="anatomiaIdx">01</span>
              <h4>I conduttori — sezione, materiale e isolamento</h4>
              <p>
                Il filo elettrico è definito dalla sua sezione in mm², che determina
                quanta corrente può trasportare in sicurezza. Il rame è il materiale
                più usato per la sua bassa resistività. L'isolamento esterno deve resistere
                al calore del motore, all'umidità, alle vibrazioni e all'abrasione meccanica.
                Un isolamento deteriorato espone il conduttore a cortocircuiti o a
                dispersioni verso massa difficili da individuare.
              </p>
            </div>

            <div className="anatomiaCard">
              <span className="anatomiaIdx">02</span>
              <h4>I connettori — il punto di separazione e riconnessione del circuito</h4>
              <p>
                I connettori permettono di separare e riconnettere sezioni del cablaggio
                senza tagliare i fili. Devono garantire bassa resistenza di contatto e
                tenuta all'umidità nel tempo. I connettori mal sigillati o con terminali
                deformati sono una delle cause più frequenti di problemi intermittenti —
                difficili da riprodurre e ancora più difficili da localizzare con precisione.
              </p>
            </div>

            <div className="anatomiaCard">
              <span className="anatomiaIdx">03</span>
              <h4>I terminali — il contatto fisico che trasforma il filo in connessione</h4>
              <p>
                Il terminale è l'elemento crimpato all'estremità del filo che entra nel
                corpo del connettore. La qualità della crimpatura è fondamentale: un terminale
                mal crimpato può avere resistenza di contatto elevata anche se sembra
                visivamente integro. Vibrazioni e cicli termici nel tempo possono allentare
                contatti apparentemente solidi, creando resistenze parassite che alterano
                segnali o causano cadute di tensione nei circuiti di potenza.
              </p>
            </div>

            <div className="anatomiaCard">
              <span className="anatomiaIdx">04</span>
              <h4>Guaine, spiralato e protezioni — il sistema che mantiene il fascio integro</h4>
              <p>
                Il fascio fili è protetto da guaine termorestringenti, tubo spiralato,
                fascette e protezioni in schiuma. Non sono elementi decorativi: evitano
                abrasioni su spigoli metallici, proteggono dal calore dei tubi di scarico
                e impediscono il movimento relativo dei conduttori nelle zone a rischio
                vibrazione. Un fascio ben protetto dura; uno mal fermato si danneggia
                sempre nello stesso punto, in modo intermittente e difficile da trovare.
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
            <span className="captionTag">Connettori e terminali</span>
            <p>
              Un buon schema qui dovrebbe mostrare la struttura interna di un connettore
              multipolare: corpo isolante, terminali crimpati, sistema di blocco e guarnizione
              di tenuta. Il concetto chiave è che la resistenza di un connettore dipende
              dalla qualità del contatto metallico, non dalla sua presenza fisica.
              Un connettore inserito con un terminale non in sede produce continuità
              instabile che sfugge alla misura statica e si manifesta solo sotto carico
              o in presenza di vibrazione.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Sezione di connettore multipolare moto — terminali, corpo, guarnizione,
                sistema di blocco; confronto tra terminale integro e terminale ossidato
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="diagnosiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnosiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e sintomi</span>
            <h3>Intermittenze, fusibili che saltano, masse difettose e ossidazione — come leggere il cablaggio</h3>
            <p>
              I problemi di cablaggio sono tra i più difficili da diagnosticare perché
              si manifestano in modo variabile e simulano guasti di altri componenti.
              La chiave è leggere il pattern dei sintomi, non solo il singolo evento.
            </p>
          </motion.div>

          <motion.div className="diagnosiGrid" variants={cardVariants}>
            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Malfunzionamenti intermittenti — il problema compare e scompare senza logica apparente</h4>
              <p>
                Il segnale classico del cablaggio difettoso è l'intermittenza: un
                componente che funziona, poi smette, poi funziona di nuovo. Succede
                perché il contatto difettoso apre e chiude il circuito in base a
                vibrazioni, temperatura o posizione del manubrio. Un guasto fisso è
                più facile da trovare; uno intermittente richiede di capire in quali
                condizioni esatte il problema compare.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Fusibile che salta ripetutamente — non è il fusibile il problema</h4>
              <p>
                Un fusibile che si interrompe una volta può essere un evento eccezionale.
                Uno che salta ripetutamente indica un circuito che assorbe più corrente
                del dovuto: un corto parziale, un carico difettoso o un filo che tocca
                massa. Sostituire il fusibile con uno di amperaggio maggiore non è una
                soluzione: è un modo per danneggiare il resto del circuito senza risolvere
                nulla.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Più utenze anomale insieme — pensare alla massa prima che ai singoli componenti</h4>
              <p>
                Se due o più componenti elettrici smettono di funzionare correttamente
                contemporaneamente senza una causa apparente comune, la massa è la prima
                cosa da controllare. Un punto di massa allentato o ossidato alza il
                potenziale di riferimento per tutto ciò che è collegato a quel punto,
                producendo sintomi che sembrano indipendenti ma hanno la stessa radice.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Misurare la caduta di tensione — il metodo per trovare resistenze parassite</h4>
              <p>
                La misura della caduta di tensione su un tratto di cablaggio sotto carico
                rivela resistenze parassite che la continuità statica non individua.
                Un filo con alta resistenza interna mantiene la continuità ma cade di tensione
                quando passa corrente reale. Questo approccio è più efficace della semplice
                ricerca di circuito aperto per individuare connettori degradati o giunzioni
                improvvisate che non conducono correttamente.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Ispezione visiva dei connettori — ossidazione, deformazione e terminali fuori sede</h4>
              <p>
                Prima degli strumenti, molti problemi si trovano guardando bene.
                I connettori vanno aperti, i terminali controllati per ossidazione
                (depositi verdi o bianchi), deformazioni, inclinazioni. Il corpo plastico
                va ispezionato per crepe o sedi rotte. Un terminale non in sede produce
                continuità instabile che sfugge alla misura statica e si manifesta
                solo sotto vibrazione o variazione termica.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeIntervallo">Intervallo</span>
              <h4>Manutenzione preventiva — ispezione periodica e protezione dei punti critici</h4>
              <p>
                Il cablaggio non ha una vita definita ma richiede attenzione periodica
                nelle zone più esposte: connettori vicino al motore, fili che passano
                vicino allo scarico, punti di massa sul telaio. Pulizia con prodotti
                appositi, protezione con grasso dielettrico e controllo del serraggio
                delle masse sono interventi semplici che prevengono guasti difficili
                e costosi da diagnosticare.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CARDS GRID ───────────────────────────────────────────────────── */}
        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Idea chiave</span>
            <h3>Il cablaggio è invisibile quando funziona — si manifesta solo quando cede, spesso simulando guasti di altro</h3>
            <p>
              I problemi di cablaggio sono subdoli perché i sintomi ricadono su altri
              componenti. Chi sa leggere il pattern — intermittenze legate alla posizione
              o alla temperatura, sintomi multipli contemporanei — riconosce prima la
              firma del cablaggio rispetto a chi cerca guasti componente per componente.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Errore classico</span>
            <h3>Intervenire sul cablaggio con giunzioni non sigillate, fili fuori sezione o fascette improvvisate</h3>
            <p>
              Ogni modifica improvvisata al cablaggio è un potenziale problema futuro.
              Una giunzione non impermeabilizzata si ossida; un filo troppo sottile si
              scalda sotto carico; una fascetta che stringe troppo abrade l'isolamento.
              Il cablaggio difettoso non si rattoppa: si ripristina nella forma originale
              o si sostituisce il tratto compromesso per intero.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>Qui il focus è sul cablaggio come sistema fisico — non sui componenti che collega</h3>
            <p>
              Questo capitolo tratta fascio fili, conduttori, connettori, terminali,
              masse, fusibili e diagnosi del cablaggio come struttura. I componenti
              che il cablaggio connette — batteria, accensione, luci, strumentazione,
              centralina, sensori e sistemi avanzati — sono trattati nelle rispettive
              sezioni dedicate.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Cablaggio;
