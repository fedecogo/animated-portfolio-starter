import "./olio.scss";
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

const Olio = () => {
  return (
    <section className="olio" id="olio">
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
              Lubrificazione
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              L'olio motore nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Nei motori a 2 tempi con frizione a bagno d'olio esiste un
              secondo circuito di lubrificazione completamente separato
              dalla miscela benzina-olio: il carter trasmissione. Questo
              vano stagno contiene frizione, cambio e — in molti motori —
              i cuscinetti di banco dell'albero motore, e viene lubrificato
              da un olio specifico che non brucia, non transita nel cilindro
              e va cambiato periodicamente come in un motore a 4 tempi.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              È un componente spesso sottovalutato o confuso con l'olio
              miscela — ma sono due fluidi con funzioni, requisiti chimici
              e intervalli di manutenzione completamente diversi. Usare
              l'olio sbagliato in questo carter significa sacrificare
              la frizione, degradare i cuscinetti di banco o entrambi.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Cosa lubrifica questo olio</span>
              <h3>I componenti nel carter trasmissione</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Frizione a bagno d'olio — dischi conduttori e condotti immersi nell'olio</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Cambio — ingranaggi, forcelle selettore e albero primario/secondario</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Cuscinetti di banco — in molti 2T il lato destro dell'albero motore è in questo vano</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Pompa dell'olio — alcuni motori hanno una pompa di circolazione interna al carter</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── SEPARAZIONE CARTER BLOCK ────────────────────────────────────── */}
        <motion.div
          className="separazioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="separazioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Due carter, due fluidi</span>
            <h3>Come sono separati i due circuiti — e perché è fondamentale che lo siano</h3>
            <p>
              Il motore 2T con wet clutch ha due vani carter fisicamente
              separati da una parete interna con paraolio. Il lato sinistro
              (o anteriore, secondo il layout) è il carter termico dove
              transita la miscela benzina-olio per il pompaggio e la
              lubrificazione dell'albero di biella. Il lato destro è il
              carter trasmissione, stagno, con olio liquido. I due fluidi
              non si devono mai mescolare.
            </p>
          </motion.div>

          <motion.div className="separazioneGrid" variants={cardVariants}>

            <div className="sepCard sepTermico">
              <div className="sepCardTop">
                <span className="sepBadge badgeTermico">Carter termico</span>
                <span className="sepLato">Lato sinistro / volano</span>
              </div>
              <h4>Camera di pompaggio — miscela benzina-olio</h4>
              <p>
                Il carter termico è la camera di precompressione della
                miscela fresca. Non contiene olio liquido — il fluido
                che transita qui è la miscela benzina-olio in forma
                di nebbia fine. La lubrificazione dei cuscinetti di
                banco di questo lato avviene tramite l'olio sospeso
                nella miscela che rotea con l'albero motore.
                Qualsiasi perdita del paraolio di separazione introduce
                olio trasmissione in questo vano, con effetti
                immediati sulla precompressione e sulla carburazione.
              </p>
            </div>

            <div className="sepCard sepTrasmissione">
              <div className="sepCardTop">
                <span className="sepBadge badgeTrasmissione">Carter trasmissione</span>
                <span className="sepLato">Lato destro / frizione</span>
              </div>
              <h4>Vano stagno — olio liquido e componenti meccanici</h4>
              <p>
                Il carter trasmissione è un vano chiuso e stagno riempito
                con un livello preciso di olio specifico. L'olio è
                mantenuto in circolazione dalla rotazione degli ingranaggi
                e, in alcuni motori, da una pompa di circolazione dedicata.
                Il livello si controlla tramite un tappo laterale o un
                indicatore a bacchetta. Va cambiato a intervalli regolari
                perché accumula detriti metallici da usura degli ingranaggi
                e si degrada termicamente con l'uso.
              </p>
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
              <span className="placeholderText">Immagine / GIF — schema sezione motore 2T con i due carter separati e il paraolio di divisione</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Separazione carter</span>
            <p>
              La sezione del motore mostra chiaramente il paraolio centrale
              che separa il carter termico (sinistra, miscela in nebbia)
              dal carter trasmissione (destra, olio liquido). Il paraolio
              di separazione è uno dei componenti più critici del motore —
              la sua perdita compromette entrambi i circuiti simultaneamente.
            </p>
          </div>
        </motion.div>

        {/* ── SPECIFICHE OLIO BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="specifBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="specifHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Specifiche e scelta</span>
            <h3>Quale olio usare — viscosità, tipo e cosa non usare mai</h3>
            <p>
              L'olio del carter trasmissione deve soddisfare due requisiti
              apparentemente contraddittori: lubrificare bene gli ingranaggi
              e i cuscinetti sotto carico, ma non fare slittare la frizione
              a bagno d'olio. Questo esclude la maggior parte degli oli
              4T generici, che contengono additivi anti-attrito (ZDDP,
              molibdeno) che ridurrebbero drasticamente la capacità di
              trasmissione della frizione.
            </p>
          </motion.div>

          <motion.div className="specifGrid" variants={cardVariants}>

            <div className="specifCard">
              <div className="specifCardTop">
                <span className="specifBadge badgeCorretto">Corretto</span>
                <span className="specifTipo">Olio specifico 2T trasmissione</span>
              </div>
              <h4>Olio trasmissione 2T — la scelta giusta</h4>
              <p>
                Gli oli specifici per carter trasmissione 2T (Motul
                Transoil, Ipone Katana, Bel-Ray Gear Saver) sono
                formulati senza additivi anti-frizione e con pacchetti
                di estrema pressione (EP) ottimizzati per ingranaggi
                elicoidali e frizioni a bagno d'olio. La viscosità
                tipica è 10W40 o SAE 80W, con variazioni secondo le
                specifiche del costruttore. Sono la scelta corretta
                per qualsiasi 2T con wet clutch.
              </p>
            </div>

            <div className="specifCard">
              <div className="specifCardTop">
                <span className="specifBadge badgeAttenzione">Attenzione</span>
                <span className="specifTipo">Olio 4T JASO MA</span>
              </div>
              <h4>Olio 4T JASO MA — in alcuni casi accettabile</h4>
              <p>
                Alcuni costruttori ammettono l'uso di olio 4T con
                classificazione JASO MA (non MA2) nel carter trasmissione
                2T. La classificazione JASO MA garantisce coefficienti
                di attrito sufficienti per frizioni a bagno d'olio.
                Va verificato sempre sul manuale del costruttore prima
                di usarlo — non è una regola universale e dipende
                dal tipo di frizione e dalle specifiche di viscosità
                richieste.
              </p>
            </div>

            <div className="specifCard">
              <div className="specifCardTop">
                <span className="specifBadge badgeSbagliato">Mai usare</span>
                <span className="specifTipo">Olio 4T JASO MA2 / Energy Saving</span>
              </div>
              <h4>Olio 4T con additivi anti-frizione — vietato</h4>
              <p>
                Gli oli 4T moderni classificati JASO MA2 o con specifiche
                "Energy Saving" / "Fuel Economy" contengono modificatori
                di frizione (molibdeno organico, esteri borati) che
                riducono l'attrito tra le superfici metalliche. In un
                motore 4T è un vantaggio — in un carter 2T con frizione
                a bagno d'olio causa slittamento della frizione anche
                a frizione nuova, senza possibilità di recupero finché
                l'olio non viene sostituito con quello corretto.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── MANUTENZIONE BLOCK ──────────────────────────────────────────── */}
        <motion.div
          className="manutBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="manutHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Manutenzione</span>
            <h3>Livello, cambio e diagnosi — la routine che protegge il cambio</h3>
            <p>
              L'olio trasmissione si degrada per due motivi principali:
              l'ossidazione termica ciclica dovuta al calore del motore
              e la contaminazione da detriti metallici prodotti dall'usura
              normale degli ingranaggi e dei dischi frizione. Un olio
              nero e con odore metallico forte è un olio che ha esaurito
              la sua capacità protettiva.
            </p>
          </motion.div>

          <motion.div className="manutGrid" variants={cardVariants}>

            <div className="manutCard">
              <span className="manutBadge badgeVerifica">Verifica</span>
              <h4>Controllo livello — tappo laterale o bacchetta</h4>
              <p>
                Il livello si controlla con il motore caldo e la moto
                in posizione verticale, aprendo il tappo di livello
                laterale: l'olio deve arrivare al bordo del foro.
                Nei motori con bacchetta il livello corretto è segnato
                da due tacche MIN e MAX. Un livello basso indica
                perdita da paraolio o guarnizione — l'olio trasmissione
                non si consuma in uso normale.
              </p>
            </div>

            <div className="manutCard">
              <span className="manutBadge badgeIntervallo">Intervallo</span>
              <h4>Cambio olio — quando e quanto spesso</h4>
              <p>
                L'intervallo tipico è ogni 20 – 30 ore di utilizzo
                intenso (cross, enduro racing) o ogni stagione in uso
                amatoriale. Il primo cambio va fatto dopo le prime
                5 – 10 ore di rodaggio per eliminare i detriti
                metallici di assestamento. La quantità è solitamente
                tra 400 e 700 ml — sempre verificare il manuale del
                costruttore per il volume esatto e la specifica di
                viscosità.
              </p>
            </div>

            <div className="manutCard">
              <span className="manutBadge badgeSintomo">Sintomo</span>
              <h4>Olio degradato — come riconoscerlo</h4>
              <p>
                Un olio trasmissione da sostituire si presenta: nero
                opaco (ossidazione avanzata), con odore metallico
                pungente (detriti in sospensione), con particelle
                argentate visibili sul tappo magnetico di scarico
                (usura ingranaggi), oppure con aspetto lattiginoso
                grigiastro che indica infiltrazione di acqua o miscela
                dal paraolio di separazione — in questo caso va
                indagata immediatamente la tenuta del carter.
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
            <span className="cardTag">Tappo magnetico</span>
            <h3>Il tappo di scarico magnetico — leggere i detriti</h3>
            <p>
              Molti carter trasmissione 2T hanno un tappo di scarico
              magnetico che trattiene le particelle ferrose in sospensione
              nell'olio. Ispezionarlo ad ogni cambio olio è una finestra
              diretta sullo stato interno del cambio: un sottile strato
              di pasta grigia è normale usura; particelle metalliche
              visibili a occhio nudo, scaglie o frammenti indicano usura
              accelerata di ingranaggi o cuscinetti che richiede
              ispezione interna prima del rimontaggio.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Paraolio separazione</span>
            <h3>Il paraolio centrale — quando i due carter si parlano</h3>
            <p>
              Il paraolio che separa il carter termico dal carter
              trasmissione è uno dei componenti più critici del motore.
              La sua perdita verso il carter termico introduce olio
              trasmissione nella miscela, alterando la precompressione
              e ingrassando la candela. La sua perdita verso l'esterno
              abbassa il livello olio trasmissione senza segnali evidenti.
              Va sostituito a ogni apertura del carter, insieme ai
              paraolio laterali dell'albero motore.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Frizione e olio</span>
            <h3>La frizione a bagno d'olio — perché l'olio giusto non fa slittare</h3>
            <p>
              La frizione a bagno d'olio trasmette la coppia tramite
              l'attrito tra dischi in acciaio e dischi in materiale
              organico immersi nell'olio. L'olio deve mantenere un
              coefficiente di attrito sufficiente a garantire il
              bloccaggio completo a frizione innestata, ma permettere
              lo scivolamento fluido durante il disinnesto. Gli oli
              con additivi anti-attrito alterano questo equilibrio —
              la frizione sembra usurata anche se i dischi sono nuovi,
              con slittamento sotto carico e surriscaldamento progressivo.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Olio;
