import "./mozzi.scss";
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

const Mozzi = () => {
  return (
    <section className="mozzi" id="mozzi">
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
              Ciclistica — Ruote
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il mozzo — struttura,<br />cuscinetti e carichi
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il mozzo è il centro della ruota. Collega il cerchio (attraverso i raggi)
              all'asse, trasferisce i carichi di trazione e frenata alla forcella
              e al forcellone e ospita i cuscinetti che permettono la rotazione.
              È un componente critico: un cuscinetto consumato o un mozzo deformato
              dopo un impatto influenzano direttamente la geometria della ruota.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              I mozzi da fuoristrada sono quasi universalmente in alluminio
              6061-T6 o 7075-T6 fresato CNC. Le finiture superficiali —
              anodizzazione dura, bead blasting — non sono solo estetiche:
              proteggono da corrosione e usura nei punti di contatto con i raggi
              e con i distanziali laterali.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del mozzo</span>
              <h3>Tre zone funzionali</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Flange dei raggi — ricevono i capi dei raggi e distribuiscono
                  i carichi verso il corpo centrale; l'angolo della flangia
                  determina la rigidità della ruota
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Corpo centrale — struttura principale in alluminio fresato CNC,
                  ospita le sedi dei cuscinetti e i canali di lubrificazione
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Sedi cuscinetti — boccole con tolleranza stretta per i cuscinetti
                  a sfere; la precisione è critica per evitare gioco e surriscaldamento
                </span>
              </div>
            </div>
          </motion.div>
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
            <h3>Materiali, tolleranze e finiture — cosa distingue un mozzo di qualità</h3>
            <p>
              La differenza tra un mozzo economico e uno di qualità non è solo
              il materiale grezzo — è la precisione delle sedi, la finitura
              superficiale delle flange e il trattamento dell'anodizzazione.
              Un mozzo fresato con tolleranze lasse fa slittare i cuscinetti
              nelle sedi; uno con sedi sottodimensionate li precarica
              e li brucia in poche ore.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costFlange">F</span>
              <h4>Flange dei raggi — angolo, spessore e sede dei capicorda</h4>
              <p>
                Le flange sono le ali laterali del mozzo dove si inseriscono
                i capi a J dei raggi. Lo spessore della flangia, il diametro
                del foro dei raggi e l'angolo rispetto all'asse determinano
                la geometria della ruota. Flange più grandi aumentano la
                rigidità laterale ma aggiungono peso; flange più piccole
                riducono il peso ma richiedono raggi più lunghi che lavorano
                con angoli meno favorevoli. Le sedi dei capicorda si usurano
                a cuneo dopo anni di uso — causa principale dell'allentamento
                sistematico dei raggi.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costCorpo">M</span>
              <h4>Corpo in alluminio — lavorazione CNC e anodizzazione</h4>
              <p>
                Il corpo centrale del mozzo è ricavato da un pezzo di alluminio
                per fresatura CNC. I mozzi di qualità vengono fresati da barre
                6061-T6 o 7075-T6 con tolleranze di lavorazione di pochi
                centesimi. L'anodizzazione dura (tipo III) crea uno strato
                ossidato di 20–50 µm che protegge le superfici esposte dalla
                corrosione galvanica con i raggi in acciaio e dall'abrasione
                dei distanziali. Un colore uniforme dell'anodizzazione è un
                indicatore indiretto della qualità di lavorazione.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costSedi">S</span>
              <h4>Sedi cuscinetti — tolleranza, interferenza e pressatura</h4>
              <p>
                Le sedi dei cuscinetti nel mozzo devono avere una tolleranza
                di interferenza precisa: troppo larga e il cuscinetto gira
                nella sede (fretting, usura rapida del mozzo); troppo stretta
                e il cuscinetto viene deformato in fase di pressatura,
                riducendone la vita. Lo standard è un accoppiamento H7/k6
                (leggera interferenza). La pressatura corretta richiede
                un estrattore a imbuto che spinge uniformemente sull'anello
                esterno — non colpire mai direttamente l'anello interno.
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
              <span className="placeholderText">Sezione del mozzo — sedi cuscinetti, spaziatore interno e distanziali laterali in evidenza</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Sezione longitudinale</span>
            <p>
              La sezione longitudinale del mozzo mostra come i due cuscinetti
              siano separati dallo spaziatore interno, che determina la precarica
              assiale. I distanziali laterali tra mozzo e forcella/forcellone
              garantiscono il corretto serraggio dell'asse senza deformare
              le sedi dei cuscinetti. Ogni componente ha dimensioni precise
              al centesimo di millimetro.
            </p>
          </div>
        </motion.div>

        {/* ── DIAGRAM BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="diagramBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="flowDiagram" variants={cardVariants}>
            <div className="diagramTrack"></div>

            <div className="diagramNode node1">
              <span className="nodeNumber">01</span>
              <h3>Cuscinetti a sfere</h3>
              <p>
                Tipicamente 2 cuscinetti per mozzo (standard: 6204 o 6205).
                Permettono la rotazione con attrito minimo. Il gioco assiale
                è critico: troppo causa vibrazione; troppo poco causa
                surriscaldamento e rottura precoce.
              </p>
            </div>

            <div className="diagramNode node2">
              <span className="nodeNumber">02</span>
              <h3>Spaziatore interno</h3>
              <p>
                Il distanziale tra i cuscinetti determina la precarica assiale.
                Eliminarlo significa permettere ai cuscinetti di lavorare con
                gioco — si usurano in pochi giorni di uso intenso.
              </p>
            </div>

            <div className="diagramNode node3">
              <span className="nodeNumber">03</span>
              <h3>Distanziale esterno</h3>
              <p>
                Il distanziale tra mozzo e forcella/forcellone garantisce il
                corretto serraggio dell'asse senza precaricare i cuscinetti.
                Dimensioni precise al decimo di millimetro.
              </p>
            </div>

            <div className="diagramNode node4">
              <span className="nodeNumber">04</span>
              <h3>Asse</h3>
              <p>
                Tipicamente in acciaio cromoly o titanio. Il serraggio corretto
                è fondamentale: eccessivo deforma i cuscinetti; insufficiente
                causa micro-movimenti che consumano le sedi nel mozzo.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="diagnBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e usura</span>
            <h3>Cosa controllare dopo ore intense o una caduta</h3>
            <p>
              L'usura del mozzo è silenziosa e progressiva — di rado si manifesta
              con un cedimento improvviso. I sintomi si accumulano lentamente
              finché il comportamento della ruota cambia in modo percettibile.
              Riconoscerli presto permette di intervenire con una sostituzione
              programmata dei cuscinetti invece di trovare la ruota che balla.
            </p>
          </motion.div>

          <motion.div className="diagnGrid" variants={cardVariants}>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Gioco laterale della ruota — cuscinetti da sostituire</h4>
              <p>
                Con la moto sollevata e la ruota ferma, afferrare il pneumatico
                in cima e in fondo e tentare di spostarlo lateralmente sull'asse.
                Qualsiasi gioco percettibile indica cuscinetti usurati o
                spaziatore interno mancante/danneggiato. Intervallo tipico
                di sostituzione: ogni 20–40 ore in fuoristrada duro.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Vibrazione a bassa velocità — sede ovalizzata o cuscinetto deteriorato</h4>
              <p>
                Una vibrazione a bassa velocità che scompare sopra i 20 km/h
                spesso indica un cuscinetto deteriorato — sfere con flat spots
                o gabbia rotta. Se il cuscinetto è stato già sostituito e
                la vibrazione persiste, la sede nel mozzo potrebbe essere
                ovalizzata: il cuscinetto non è più centrato.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Raggi che si allentano continuamente — sede dei raggi usurata</h4>
              <p>
                Se i raggi si allentano dopo pochi chilometri nonostante
                siano stati tensionati correttamente, le sedi dei capicorda
                nella flangia del mozzo sono usurate a cuneo. Il raggio
                non ha più un appoggio solido e perde tensione ciclicamente.
                La soluzione è il mozzo, non i raggi.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Rotazione libera del mozzo — prova di scorrimento</h4>
              <p>
                Con la ruota smontata, far girare il mozzo sull'asse a mano.
                La rotazione deve essere fluida, silenziosa e senza punti
                di resistenza. Un crepitio indica graniglia o contaminazione
                nell'interno del cuscinetto; una resistenza uniforme indica
                precarica eccessiva o grasso degradato; punti di resistenza
                ciclici indicano flat spots sulle sfere.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Ispezione delle sedi cuscinetti — rigature e bruciature</h4>
              <p>
                Dopo aver rimosso i cuscinetti, ispezionare le sedi con una
                torcia. Rigature circonferenziali indicano che il cuscinetto
                ha girato nella sede (fretting): la sede è compromessa.
                Zone brunite o annerite indicano surriscaldamento localizzato.
                Un mozzo con queste condizioni non trattiene correttamente
                il nuovo cuscinetto — sostituire il mozzo.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeIntervallo">Intervallo</span>
              <h4>Sostituzione periodica dei cuscinetti</h4>
              <p>
                Sostituire i cuscinetti del mozzo ogni 20–40 ore in uso
                fuoristrada intenso, o ogni stagione indipendentemente
                dalle ore. I cuscinetti costano poco; la sostituzione
                è veloce con gli estrattori giusti. Rinviarla significa
                rischiare di dover sostituire anche il mozzo quando le
                sedi vengono danneggiate dalla rotazione del cuscinetto.
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
            <span className="cardTag">Manutenzione</span>
            <h3>Quando sostituire i cuscinetti — i segnali da non ignorare</h3>
            <p>
              Sposta il mozzo lateralmente sull'asse — qualsiasi gioco
              percettibile indica cuscinetti da sostituire. Intervallo tipico:
              ogni 20–40 ore in fuoristrada duro. Costano poco, la sostituzione
              è veloce con gli attrezzi giusti — non rinviarla.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Impatto</span>
            <h3>Cosa succede dopo una caduta — micro-deformazioni invisibili</h3>
            <p>
              Una caduta laterale con carico sul mozzo può creare
              micro-deformazioni nelle sedi dei cuscinetti non visibili
              a occhio nudo. Se dopo una caduta la ruota non gira libera
              o c'è vibrazione a bassa velocità, controllare prima il mozzo.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Raggi</span>
            <h3>La tensione dei raggi dipende dal mozzo</h3>
            <p>
              Un mozzo deformato o usurato nelle sedi dei raggi rende
              impossibile mantenere la tensione uniforme. I raggi si allentano
              ripetutamente perché non hanno una sede solida. La soluzione
              è il mozzo, non i raggi.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Mozzi;
