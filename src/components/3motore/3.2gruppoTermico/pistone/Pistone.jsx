import "./pistone.scss";
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

const Pistone = () => {
  return (
    <section className="pistone" id="pistone">
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
              Gruppo termico
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>Il pistone nel 2T</motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il pistone è il componente che trasforma la pressione della
              combustione in movimento. Nel motore a 2 tempi svolge un ruolo
              ancora più centrale rispetto al 4 tempi: non solo riceve la spinta
              dei gas combusti, ma partecipa attivamente alla gestione della
              distribuzione — aprendo e chiudendo le luci del cilindro con il
              suo stesso mantello durante la corsa. È al tempo stesso organo di
              forza, valvola e componente di precisione.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Le sollecitazioni a cui è sottoposto sono tra le più severe
              dell'intero motore: pressioni di picco nell'ordine dei 50 – 80
              bar, velocità di percorrenza fino a 20 m/s, variazioni termiche
              rapide tra la testa — a contatto con i gas combusti — e il
              mantello — raffreddato dalla miscela in ingresso. Ogni dettaglio
              geometrico e ogni scelta di materiale ha una ragione precisa.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del pistone</span>
              <h3>Le zone principali</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Testa — superficie che riceve la pressione di combustione
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Sede fasce — scanalature per le fasce elastiche di tenuta
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Mantello — guida il pistone nel cilindro e gestisce le luci
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Foro spinotto — alloggiamento del perno di collegamento alla
                  biella
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
              <img
                src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773808002/ChatGPT_Image_Mar_18_2026_01_55_20_PM_rvqv5h.png"
                alt="Pistone"
              />
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Sezione</span>
            <p>
              Vista in sezione del pistone 2T: la testa bombata o piatta, le
              sedi delle fasce, il mantello asimmetrico sagomato per gestire le
              luci di travaso e scarico, e il foro dello spinotto con i suoi
              rinforzi strutturali.
            </p>
          </div>
        </motion.div>

        {/* ── GEOMETRIA TESTA BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="testaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="testaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Geometria</span>
            <h3>La testa del pistone — forma e funzione</h3>
            <p>
              La geometria della testa non è una scelta estetica. Determina il
              rapporto di compressione effettivo, la forma della camera di
              combustione, la turbolenza della miscela e la propagazione del
              fronte di fiamma. Nel 2T, dove la camera di combustione è formata
              dalla testa del cilindro e dalla testa del pistone insieme, ogni
              variazione di forma ha conseguenze dirette su potenza, detonazione
              e temperatura.
            </p>
          </motion.div>

          <motion.div className="testaGrid" variants={cardVariants}>
            <div className="testaCard">
              <div className="testaCardVisual flat">
                <span className="testaShape">▬</span>
              </div>
              <span className="testaBadge">Piatta</span>
              <h4>Testa piatta</h4>
              <p>
                La soluzione più semplice. Camera di combustione interamente
                ricavata nella testa del cilindro. Volume facilmente
                calcolabile, produzione economica. Usata su motori entry-level e
                scooter dove il rapporto di compressione è moderato e la
                priorità è la durata nel tempo.
              </p>
            </div>

            <div className="testaCard">
              <div className="testaCardVisual dome">
                <span className="testaShape">◠</span>
              </div>
              <span className="testaBadge badgeDome">Bombata</span>
              <h4>Testa bombata (dome)</h4>
              <p>
                La geometria più diffusa nelle moto sportive e da competizione.
                Il volume convesso riduce lo spazio morto nella camera e
                favorisce la turbolenza della miscela prima dell'accensione.
                L'altezza del dome è uno dei parametri principali nel calcolo
                del rapporto di compressione e si modifica in preparazione per
                variare la risposta del motore.
              </p>
            </div>

            <div className="testaCard">
              <div className="testaCardVisual bridge">
                <span className="testaShape">⌒</span>
              </div>
              <span className="testaBadge badgeBridge">Bridged</span>
              <h4>Testa con bridge</h4>
              <p>
                Alcuni pistoni da competizione presentano un ponte (bridge)
                sulla testa che divide parzialmente la camera per indirizzare il
                fronte di fiamma. Questa geometria è usata in abbinamento a
                cilindri con luci di travaso particolari e richiede una messa a
                punto molto precisa per non creare zone calde o punti di
                detonazione.
              </p>
            </div>

            <div className="testaCard">
              <div className="testaCardVisual concave">
                <span className="testaShape">⌣</span>
              </div>
              <span className="testaBadge badgeConcave">Concava</span>
              <h4>Testa concava / squish</h4>
              <p>
                La zona periferica della testa è sagomata per creare la banda di
                squish: uno spazio molto ridotto tra testa del pistone e testa
                del cilindro che al PMI espelle violentemente la miscela verso
                il centro della camera, aumentando la turbolenza e migliorando
                la combustione. Riduce la detonazione e permette rapporti di
                compressione più elevati.
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
            <span className="captionTag">Squish band</span>
            <p>
              La banda di squish al PMI: il flusso violento di miscela verso il
              centro della camera aumenta la turbolenza, accelera la
              propagazione del fronte di fiamma e riduce il rischio di
              detonazione anche con rapporti di compressione elevati.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <img
                src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773808340/ChatGPT_Image_Mar_18_2026_02_01_48_PM_s0nj8k.png"
                alt="Squish band"
              />
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── MANTELLO & LUCI BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="mantelloBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="mantelloHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Mantello</span>
            <h3>Il mantello — molto più di una guida</h3>
            <p>
              Nel motore a 4 tempi il mantello del pistone è principalmente una
              superficie di scorrimento. Nel 2 tempi è anche una valvola: il suo
              bordo inferiore apre e chiude la luce di aspirazione (nei motori
              senza reed valve) o le luci di travaso durante la corsa. Questo
              significa che la sagoma del mantello — altezza, asimmetria,
              finestre di alleggerimento — è parte integrante della
              distribuzione del motore.
            </p>
          </motion.div>

          <motion.div className="mantelloGrid" variants={cardVariants}>
            <div className="mantelloCard">
              <span className="mantelloIdx">01</span>
              <h4>Asimmetria del mantello</h4>
              <p>
                Il mantello dei pistoni 2T non è simmetrico sull'asse dello
                spinotto. Il lato scarico è spesso più corto o sagomato
                diversamente rispetto al lato aspirazione, per non ostruire i
                condotti di travaso durante la corsa di ritorno e per
                distribuire meglio il carico termico tra le due metà del
                pistone.
              </p>
            </div>

            <div className="mantelloCard">
              <span className="mantelloIdx">02</span>
              <h4>Finestre di alleggerimento</h4>
              <p>
                Molti pistoni sportivi presentano finestre ricavate nel mantello
                — non solo per ridurre il peso, ma per favorire il passaggio
                della miscela verso il carter e per non interrompere i flussi
                verso i condotti di travaso laterali. Ogni finestra è
                posizionata con precisione in base alla geometria del cilindro
                specifico.
              </p>
            </div>

            <div className="mantelloCard">
              <span className="mantelloIdx">03</span>
              <h4>Gioco pistone-cilindro</h4>
              <p>
                Il gioco radiale tra mantello e cilindro è un parametro critico.
                Troppo stretto rischia il grippaggio per dilatazione termica;
                troppo largo produce rumorosità (colpo di pistone), perdita di
                tenuta e consumo accelerato. I valori tipici nei 2T sportivi
                sono nell'ordine di 0,05 – 0,10 mm a freddo, da verificare
                sempre con il manuale motore.
              </p>
            </div>

            <div className="mantelloCard">
              <span className="mantelloIdx">04</span>
              <h4>Rivestimenti superficiali</h4>
              <p>
                I pistoni moderni ricevono trattamenti superficiali sul
                mantello: grafite colloidale, rivestimenti PTFE o stagno
                galvanico. Questi strati migliorano il rodaggio iniziale,
                riducono l'attrito durante il riscaldamento e proteggono il
                pistone nelle fasi di lubrificazione insufficiente come i
                transitori rapidi di apertura gas.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── MATERIALI & DILATAZIONE BLOCK ──────────────────────────────── */}
        <motion.div
          className="materialiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="materialiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Materiali e termica</span>
            <h3>Alluminio, dilatazione e gestione del calore</h3>
            <p>
              Quasi tutti i pistoni per motori a 2 tempi sono realizzati in lega
              di alluminio ad alto contenuto di silicio. La scelta non è
              casuale: l'alluminio è leggero, ha un'ottima conducibilità termica
              e può essere lavorato con precisione micrometrica. Il silicio
              aumenta la resistenza all'usura e riduce il coefficiente di
              dilatazione termica, fondamentale in un componente che varia la
              sua temperatura di centinaia di gradi in pochi secondi.
            </p>
          </motion.div>

          <motion.div className="materialiContent" variants={cardVariants}>
            <div className="matColumn">
              <div className="matItem">
                <span className="matLabel">Lega standard</span>
                <p>
                  Le leghe più comuni nei 2T stradali e da enduro sono AlSi12Cu,
                  AlSi10Mg o equivalenti. Offrono un buon equilibrio tra
                  resistenza meccanica, conducibilità termica e lavorabilità. La
                  percentuale di silicio intorno al 10 – 12% è il compromesso
                  più adottato nell'industria.
                </p>
              </div>

              <div className="matItem">
                <span className="matLabel">Lega forgiata racing</span>
                <p>
                  I pistoni forgiati per uso racing utilizzano leghe più nobili
                  come AlSi8Cu3 o AlCu2Mg, con percentuali di silicio inferiori.
                  La forgiatura — invece della fusione — orienta la struttura
                  cristallina del metallo lungo le linee di sforzo, aumentando
                  resistenza a fatica e tenacità. Il risultato è un pistone più
                  leggero della versione in fusione a parità di resistenza.
                </p>
              </div>
            </div>

            <div className="matColumn">
              <div className="matItem">
                <span className="matLabel">
                  Dilatazione termica e forma ovalizzata
                </span>
                <p>
                  Il pistone non è perfettamente cilindrico a freddo. È
                  ovalizzato: il diametro sull'asse dello spinotto è leggermente
                  inferiore rispetto al diametro perpendicolare. Questo perché
                  la massa metallica attorno ai fori dello spinotto è maggiore e
                  si dilata di più in esercizio. La forma ovalizzata a freddo
                  diventa perfettamente cilindrica alla temperatura di lavoro,
                  garantendo il gioco corretto su tutto il mantello.
                </p>
              </div>

              <div className="matItem">
                <span className="matLabel">Dissipazione termica</span>
                <p>
                  Nel 2T il pistone è raffreddato principalmente dalla miscela
                  fresca che entra nel carter durante la fase di aspirazione,
                  dalla quale riceve il film lubrificante dell'olio miscelato. A
                  differenza del 4 tempi non c'è un getto d'olio diretto sulla
                  testa del pistone. Questo rende la qualità dell'olio e il
                  rapporto di miscela ancora più critici per la gestione termica
                  del pistone.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── SPINOTTO BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="spinottoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="spinottoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Collegamento biella</span>
            <h3>Lo spinotto — il perno che trasmette tutto</h3>
            <p>
              Lo spinotto è il perno cilindrico che collega il pistone alla
              testa della biella. Su di esso si scarica l'intera forza della
              combustione nel momento in cui il pistone è al PMI e la pressione
              è massima. Deve essere allo stesso tempo leggero, rigidissimo e
              resistente all'usura su entrambe le superfici di contatto.
            </p>
          </motion.div>

          <motion.div className="spinottoGrid" variants={cardVariants}>
            <div className="spinottoCard">
              <span className="spinottoIdx">01</span>
              <h4>Materiale e trattamento</h4>
              <p>
                Gli spinotti sono quasi sempre in acciaio al cromo-molibdeno
                cementato e rettificato. Lo strato superficiale cementato —
                durissimo — garantisce la resistenza all'usura sul contatto con
                la bronzina della biella e con le sedi nel pistone, mentre il
                cuore più tenace assorbe le sollecitazioni a flessione senza
                rischio di rottura fragile.
              </p>
            </div>

            <div className="spinottoCard">
              <span className="spinottoIdx">02</span>
              <h4>Tipo di vincolo nel pistone</h4>
              <p>
                Lo spinotto può essere fisso nel pistone (bloccato con anelli
                Seeger o con interferenza) o flottante — libero di ruotare sia
                nel pistone che nella bronzina della biella. Lo spinotto
                flottante è preferito in ambito sportivo perché distribuisce più
                uniformemente l'usura su entrambe le superfici e riduce le
                concentrazioni di tensione.
              </p>
            </div>

            <div className="spinottoCard">
              <span className="spinottoIdx">03</span>
              <h4>Anelli di ritenuta</h4>
              <p>
                Nei sistemi con spinotto flottante, la traslazione assiale è
                impedita da anelli elastici (circlip) alloggiati in cave
                ricavate nel pistone. Questi anelli sono componenti di sicurezza
                primari: un circlip rotto o non correttamente inserito può
                portare lo spinotto a migrare lateralmente, rigare la camicia e
                distruggere il motore in pochi secondi.
              </p>
            </div>

            <div className="spinottoCard">
              <span className="spinottoIdx">04</span>
              <h4>Gioco spinotto-bronzina</h4>
              <p>
                Il gioco tra spinotto e bronzina della biella è critico quanto
                il gioco pistone-cilindro. Un gioco eccessivo genera bussamento
                alla biella, udibile come un battito metallico regolare al
                regime di minimo. Un gioco insufficiente rischia il grippaggio
                dello spinotto nella bronzina, specialmente durante il
                riscaldamento a freddo con lubrificazione ancora insufficiente.
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
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <img
                src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773808703/ChatGPT_Image_Mar_18_2026_02_07_02_PM_haif4j.png"
                alt="PistoneEPArti"
              />
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Montaggio</span>
            <p>
              Dettaglio del montaggio spinotto: il perno flottante scorre nella
              bronzina della biella e nelle sedi del pistone; i circlip
              impediscono la traslazione assiale. Ogni operazione va eseguita
              con il pistone riscaldato per non danneggiare le cave dei circlip.
            </p>
          </div>
        </motion.div>

        {/* ── USURA & DIAGNOSI BLOCK ──────────────────────────────────────── */}
        <motion.div
          className="usuraBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="usuraHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Usura e diagnosi</span>
            <h3>Leggere il pistone usato — cosa racconta</h3>
            <p>
              Un pistone smontato dopo alcune ore di utilizzo è un documento. I
              segni di usura, le colorazioni, i depositi e le deformazioni
              raccontano esattamente cosa è successo nel motore: miscela troppo
              magra, accensione anticipata, surriscaldamento, lubrificazione
              insufficiente o semplicemente un normale ciclo di vita. Imparare a
              leggerli evita di ripetere gli stessi errori al montaggio del
              pistone nuovo.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>
            <div className="usuraCard">
              <span className="usuraBadge badgeTermico">Termico</span>
              <h4>Colorazione blu-viola sulla testa</h4>
              <p>
                Una colorazione intensa blu o viola sulla testa del pistone
                indica temperature di combustione elevate. Le cause più comuni
                sono miscela magra, anticipo eccessivo o raffreddamento
                insufficiente. Se la colorazione è concentrata su un solo lato,
                può indicare un'anomalia nella distribuzione della miscela nella
                camera.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeTermico">Termico</span>
              <h4>Fusione o bruciatura della testa</h4>
              <p>
                Una cavità o una zona fusa sulla testa del pistone è il segnale
                più grave: detonazione severa o pre-accensione. La miscela si è
                infiammata prima del momento corretto, creando una pressione
                localizzata abnorme che ha eroso il materiale. Le cause vanno
                cercate nell'anticipo, nel getto del carburatore e nella qualità
                della benzina.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMeccanico">Meccanico</span>
              <h4>Rigature verticali sul mantello</h4>
              <p>
                Rigature longitudinali sul mantello indicano grippaggio
                parziale: in un momento di lubrificazione insufficiente o
                eccessivo calore, il pistone ha toccato la camicia. Le cause
                tipiche sono avviamento con miscela senza olio, gioco
                pistone-cilindro troppo stretto o riscaldamento troppo rapido
                prima del raggiungimento della temperatura operativa.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMeccanico">Meccanico</span>
              <h4>Usura asimmetrica del mantello</h4>
              <p>
                Se l'usura è concentrata su un lato del mantello — specialmente
                sul lato scarico — può indicare un problema di allineamento
                biella-pistone, un gioco eccessivo dello spinotto o una
                deformazione della camicia. Un'usura uniforme su tutto il
                mantello è invece la normale progressione di vita del
                componente.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeDeposito">Deposito</span>
              <h4>Carbonio sulla testa e nelle sedi fasce</h4>
              <p>
                Depositi neri di carbonio sulla testa indicano combustione
                incompleta: miscela troppo ricca, olio eccessivo o basse
                temperature di lavoro. Depositi duri nelle sedi delle fasce
                bloccano la fascia, impedendole di espandersi correttamente e
                causando perdita di compressione progressiva.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Quando sostituire il pistone</h4>
              <p>
                In ambito agonistico il pistone si sostituisce ogni 15 – 25 ore
                di utilizzo intenso, a prescindere dall'aspetto. In ambito
                amatoriale la sostituzione va valutata misurando il diametro del
                mantello con un micrometro e confrontandolo con il valore di
                origine: uno scollo superiore a 0,15 mm rispetto al nuovo è il
                limite standard per la maggior parte dei costruttori.
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
            <span className="cardTag">Rodaggio</span>
            <h3>Rodare correttamente il pistone nuovo</h3>
            <p>
              Un pistone nuovo richiede un periodo di rodaggio durante il quale
              le superfici si assestano reciprocamente. I primi 30 – 60 minuti
              di utilizzo vanno condotti a regimi variabili evitando il pieno
              gas prolungato e lasciando raffreddare completamente il motore tra
              un ciclo e l'altro. Il rispetto del rodaggio allungata
              sensibilmente la vita del pistone e del cilindro.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Preparazione</span>
            <h3>Pistoni oversize e alesatura</h3>
            <p>
              Quando la camicia è rigata o consumata oltre i limiti, si esegue
              l'alesatura: la camicia viene riportata a un diametro superiore
              (oversize) e abbinata a un pistone di dimensione corrispondente.
              Gli oversize standard sono 0,25 mm, 0,50 mm e 1,00 mm. Oltre il
              secondo oversize è generalmente consigliato sostituire l'intero
              gruppo termico.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Upgrade</span>
            <h3>Pistoni forgiati aftermarket</h3>
            <p>
              I pistoni forgiati aftermarket — Wiseco, Vertex, ProX — offrono
              leghe più performanti, geometrie ottimizzate per specifiche
              modifiche al motore e tolleranze di produzione più strette
              rispetto all'originale. Su un motore preparato possono reggere
              rapporti di compressione più elevati e temperature di lavoro
              superiori senza compromettere l'affidabilità.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default Pistone;
