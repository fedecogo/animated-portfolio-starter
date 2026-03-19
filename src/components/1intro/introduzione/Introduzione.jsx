import "./introduzione.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const sliderVariants = {
  initial: { x: "0%" },
  animate: {
    x: "-50%",
    transition: { repeat: Infinity, repeatType: "loop", duration: 22, ease: "linear" },
  },
};

const Introduzione = () => {
  return (
    <section className="introduzione">
      <div className="wrapper">

        {/* ── INTRO BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="introBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="titleColumn">
            <motion.span className="sectionLabel" variants={fadeUpVariants}>
              Capitolo 1
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>Introduzione</motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Una moto a due tempi non si capisce guardandola. Si capisce
              seguendo il percorso dei gas attraverso il carter, il cilindro e
              la camera di espansione — e poi rimettendo insieme ogni pezzo
              nella sua logica.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Questo progetto nasce da un'esigenza concreta: trovare una risorsa
              che spieghi il funzionamento di una moto 2T in modo sistematico e
              visivo, senza fermarsi alla superficie. Non solo "cosa è" ogni
              componente, ma perché è fatto in quel modo, come interagisce con
              il resto del sistema e cosa succede quando qualcosa va storto.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La guida è strutturata in otto capitoli, ciascuno dedicato a un
              sottosistema della moto. Si parte dal motore — il cuore di tutto
              — e si allarga progressivamente verso la ciclistica,
              l'elettronica e la carrozzeria. Ogni sezione può essere letta in
              ordine o consultata singolarmente tramite la sidebar o la ricerca.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Struttura della guida</span>
              <h3>Otto capitoli per un sistema completo</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">1</span>
                <span className="miniText">
                  Introduzione — cos'è una 2T e confronto con il 4T
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">2</span>
                <span className="miniText">
                  Ciclo del motore — fasi, combustione e scarico
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">3</span>
                <span className="miniText">
                  Il motore — alimentazione, gruppo termico, trasmissione
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">4</span>
                <span className="miniText">
                  Telaio - materiali , geometrie, forcellone, rigidità
                </span>
              </div>
               <div className="miniStep">
                <span className="miniIndex">5</span>
                <span className="miniText">
                  Ciclistica - ruote , sospensioni, sistema frenante
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">6</span>
                <span className="miniText">
                  Elettronica - cablaggio , sensori , ABS , Ride By Wire
                </span>
              </div>
                <div className="miniStep">
                <span className="miniIndex">7</span>
                <span className="miniText">
                  Carrozzeria - serbatoio , plastiche, aereodinamica
                </span>
              </div>
                <div className="miniStep">
                <span className="miniIndex">8</span>
                <span className="miniText">
                  Fisica e Fondamenti - coppia , cavalli , detonazione
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── VISUAL BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="visualBlock"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <img
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWM4cG9tZHlzOTl5cmNycWd2ZGkxamlmOGd4Y25tZzF0dWd1YjN6ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pTmey0RxjqSoaX7y4f/giphy.gif"
                alt="Yamaha YZ 125/250 360 gradi"
              />
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Yamaha YZ</span>
            <p>
              Una Yamaha YZ a due tempi fotografata a 360 gradi. Il telaio
              perimetrale in alluminio, il monoammortizzatore linkato, la camera
              di espansione laterale e il motore compatto mostrano come ogni
              componente di una 2T sia il risultato di scelte precise. Questa
              guida esplora ognuna di quelle scelte.
            </p>
          </div>
        </motion.div>

        {/* ── APPROCCIO BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="approccioBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="approccioHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Metodo</span>
            <h3>Capire il sistema, non solo le parti</h3>
            <p>
              Un motore 2T è un sistema ad alta interdipendenza: cambiare il
              getto del carburatore modifica la miscela, che cambia la
              temperatura di lavoro, che influenza il gioco pistone-cilindro,
              che determina performance e durata. Per questo ogni sezione è
              scritta cercando di spiegare non solo il componente in isolamento,
              ma le relazioni che lo legano al resto del sistema. Conoscere il
              singolo pezzo non basta — serve capire il perché.
            </p>
          </motion.div>

          <motion.div className="approccioGrid" variants={cardVariants}>
            <div className="approccioCard">
              <span className="approccioIdx">01</span>
              <h4>Lettura sequenziale</h4>
              <p>
                Seguire i capitoli in ordine costruisce una comprensione
                progressiva del sistema. Il ciclo del motore spiega perché il
                gruppo termico è fatto così. Il gruppo termico spiega perché la
                trasmissione è dimensionata in quel modo. Ogni capitolo si
                appoggia al precedente.
              </p>
            </div>

            <div className="approccioCard">
              <span className="approccioIdx">02</span>
              <h4>Consultazione diretta</h4>
              <p>
                Ogni sezione è autonoma e può essere cercata direttamente dalla
                sidebar o dalla funzione di ricerca in cima alla pagina. Se si
                cerca "valvola di scarico" o "gioco pistone", si arriva al punto
                esatto senza dover scorrere l'intera guida.
              </p>
            </div>

            <div className="approccioCard">
              <span className="approccioIdx">03</span>
              <h4>Terminologia tecnica</h4>
              <p>
                Ogni termine tecnico viene introdotto la prima volta che compare
                nel testo e spiegato nel contesto d'uso. L'obiettivo è che chi
                legge possa seguire il ragionamento meccanico senza dover
                interrompere la lettura per cercare definizioni altrove.
              </p>
            </div>

            <div className="approccioCard">
              <span className="approccioIdx">04</span>
              <h4>Dalla teoria all'officina</h4>
              <p>
                Dove possibile, il contenuto tecnico è collegato alla pratica
                reale: valori di riferimento, sintomi di usura, criteri di
                sostituzione, logica di montaggio. Una moto 2T si impara meglio
                con le mani sporche — questa guida cerca di avvicinarsi a quella
                esperienza.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── SISTEMA BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="sistemaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="sistemaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il sistema completo</span>
            <h3>Perché serve un approccio sistematico</h3>
            <p>
              Le moto 2T sono spesso presentate come macchine semplici. In
              effetti il motore ha meno componenti in movimento rispetto a un
              4T — ma quella semplicità costruttiva nasconde un sistema di
              flussi, pressioni e fasature estremamente sensibile. Una variazione
              di un millimetro sull'altezza della luce di scarico può spostare
              la banda di potenza di 2.000 giri. Un errore nel rapporto di
              miscela può distruggere il pistone in pochi minuti. Capire questa
              sensibilità richiede di guardare l'intera catena, non solo il
              singolo componente.
            </p>
          </motion.div>

          <motion.div className="sistemaContent" variants={cardVariants}>
            <div className="sistemaColumn">
              <div className="sistemaItem">
                <span className="sistemaLabel">Flusso dei gas</span>
                <p>
                  Il comportamento di un motore 2T è dominato dalla dinamica
                  dei gas: come entrano nel carter, come si trasferiscono nel
                  cilindro attraverso le luci di travaso, come escono dalla
                  luce di scarico e come la camera di espansione restituisce
                  parte dell'energia al cilindro. Ogni componente dell'impianto
                  di alimentazione e scarico partecipa attivamente a questo
                  flusso.
                </p>
              </div>
              <div className="sistemaItem">
                <span className="sistemaLabel">Termica e lubrificazione</span>
                <p>
                  Nel 2T non esiste un circuito d'olio separato. La
                  lubrificazione avviene attraverso l'olio miscelato alla
                  benzina, che raggiunge le superfici in movimento prima come
                  nebbia nella miscela e poi come film sui cuscinetti e sulle
                  pareti del cilindro. Questa caratteristica rende il rapporto
                  di miscela e la qualità dell'olio critici quanto la fasatura
                  dell'accensione.
                </p>
              </div>
            </div>

            <div className="sistemaColumn">
              <div className="sistemaItem">
                <span className="sistemaLabel">Ciclistica e setup</span>
                <p>
                  Il comportamento in pista di una 2T non dipende solo dal
                  motore. La distribuzione dei pesi, la rigidità del telaio,
                  la progressione delle sospensioni e la geometria dello sterzo
                  definiscono insieme come la potenza si trasforma in tempo sul
                  giro. Una moto con un buon motore e un assetto sbagliato è
                  più lenta di una con motore normale e assetto corretto.
                </p>
              </div>
              <div className="sistemaItem">
                <span className="sistemaLabel">Elettronica e accensione</span>
                <p>
                  La semplicità elettrica delle 2T è relativa. L'anticipo
                  d'accensione, la curva della CDI e la mappatura della valvola
                  di scarico influenzano direttamente la curva di potenza.
                  Alcune moto moderne a due tempi integrano controlli
                  elettronici sofisticati che gestiscono la potenza in funzione
                  della marcia, del regime e delle condizioni di guida.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CARDS GRID ─────────────────────────────────────────────────── */}
        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Meccanica</span>
            <h3>Un motore diverso da tutti gli altri</h3>
            <p>
              Il 2T non è semplicemente un 4T con meno valvole. Il ciclo
              operativo è diverso nella sua logica: la combustione avviene ogni
              giro dell'albero motore, il carter partecipa attivamente alla
              gestione del gas, e la fasatura è controllata dalla geometria
              fisica del cilindro. Capire questa differenza è il punto di
              partenza per tutto il resto.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Contesto</span>
            <h3>Storia, regolamenti e futuro</h3>
            <p>
              Le moto 2T hanno dominato il motocross e il trial per decenni
              prima che i regolamenti ambientali ne limitassero l'uso stradale.
              Nel fuoristrada competitivo rimangono vive, e nuove tecnologie —
              iniezione diretta, lubrificazione separata — stanno aprendo la
              strada a una seconda vita per questo tipo di motore anche su
              strada.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Officina</span>
            <h3>Manutenzione e preparazione</h3>
            <p>
              Rispetto al 4T, il 2T richiede intervalli di revisione del gruppo
              termico più frequenti — ma la revisione stessa è più rapida e
              meno costosa. Chi impara a leggere i segni sul pistone, a
              misurare il gioco cilindro-pistone e a regolare il carburatore
              ha in mano la maggior parte degli strumenti per mantenere la moto
              in condizioni ottimali.
            </p>
          </motion.article>
        </motion.div>

      </div>

      {/* ── SLIDING TEXT ─────────────────────────────────────────────────── */}
      <div className="slidingTextWrapper">
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Due Tempi • Aspirazione • Combustione • Camera di Espansione • Telaio •
          Sospensioni • Freni • Meccanica • Due Tempi • Aspirazione • Combustione •
          Camera di Espansione • Telaio • Sospensioni • Freni • Meccanica •
        </motion.div>
      </div>
    </section>
  );
};

export default Introduzione;
