import "./pompaBenzina.scss";
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
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const PompaBenzina = () => {
  return (
    <section className="pompaBenzina" id="pompa-benzina">
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
              Alimentazione
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Pompa benzina nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La pompa benzina è il componente che trasferisce il carburante dal
              serbatoio verso il carburatore o il corpo farfallato. Nei motori a
              2 tempi moderni, la sua presenza e il suo tipo dipendono
              direttamente dal sistema di alimentazione adottato: nei sistemi
              carburati a bassa pressione spesso non è necessaria, mentre nei
              sistemi a iniezione diventa un elemento critico dell'intera
              catena di alimentazione.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Capire come funziona, dove è posizionata e quali sono le sue
              caratteristiche operative permette di diagnosticare problemi di
              pressione, perdite di potenza a pieno gas e comportamenti anomali
              durante l'uso in condizioni estreme.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Tipologie principali</span>
              <h3>Tre tipi di pompa nel 2T</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Pompa a diaframma — azionata dalla pulsazione del carter</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Pompa elettrica — pressione costante per l'iniezione</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Pompa a gravità — solo su sistemi semplici e posizioni favorevoli</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Regolatore di pressione — mantiene il valore target costante</span>
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
              <img src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773803624/ChatGPT_Image_Mar_18_2026_12_43_33_PM_dipglg.png"
              alt=""
             />
           </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}

          <div className="visualCaption">
            <span className="captionTag">Schema</span>
            <p>
              La pompa a diaframma sfrutta le variazioni di pressione nel carter
              motore per aspirare e spingere il carburante verso il carburatore
              senza necessità di alimentazione elettrica.
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
              <h3>Serbatoio</h3>
              <p>
                Il carburante è stoccato nel serbatoio a pressione atmosferica.
                Nei sistemi a gravità non è necessario alcun componente attivo: il
                dislivello fisico tra serbatoio e carburatore garantisce il flusso
                naturale. Nei sistemi in pressione, il serbatoio deve reggere la
                depressione generata dalla pompa.
              </p>
            </div>

            <div className="diagramNode node2">
              <span className="nodeNumber">02</span>
              <h3>Pompa benzina</h3>
              <p>
                Aspira il carburante dal serbatoio e lo spinge verso il
                carburatore o l'iniettore. Nei sistemi a diaframma è comandata
                dalla pulsazione del carter; nei sistemi elettrici è alimentata
                direttamente dalla batteria e controllata dalla ECU tramite relè.
              </p>
            </div>

            <div className="diagramNode node3">
              <span className="nodeNumber">03</span>
              <h3>Filtro benzina</h3>
              <p>
                Posto a valle della pompa, il filtro trattiene impurità,
                particelle metalliche e depositi che potrebbero ostruire
                l'iniettore o l'ago del carburatore. Nei sistemi a iniezione un
                filtro intasato si traduce direttamente in calo di pressione e
                perdita di potenza.
              </p>
            </div>

            <div className="diagramNode node4">
              <span className="nodeNumber">04</span>
              <h3>Regolatore di pressione</h3>
              <p>
                Mantiene la pressione nel rail di alimentazione al valore target
                (tipicamente 2,5 – 4 bar nei sistemi a iniezione diretta 2T). Il
                carburante in eccesso viene restituito al serbatoio tramite il
                circuito di ritorno, garantendo stabilità anche a regimi variabili.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── PRESSIONE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="pressioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="pressioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Valori operativi</span>
            <h3>Pressioni di esercizio per tipo di sistema</h3>
            <p>
              La pressione di alimentazione varia significativamente in base al
              tipo di sistema. Conoscere i valori corretti è indispensabile per
              diagnosticare un malfunzionamento con un manometro.
            </p>
          </motion.div>

          <motion.div className="pressioneRanges" variants={cardVariants}>
            <div className="pressioneRow">
              <div className="pressioneInfo">
                <span className="pressioneLabel">Gravità / Diaframma (carburatore)</span>
                <span className="pressioneSub">Bassa pressione, flusso passivo o pulsante</span>
              </div>
              <div className="pressioneBar">
                <div className="pressioneFill fill1" style={{ width: "12%" }}></div>
              </div>
              <span className="pressioneVal">0,1 – 0,3 bar</span>
            </div>

            <div className="pressioneRow">
              <div className="pressioneInfo">
                <span className="pressioneLabel">Pompa elettrica (iniezione port)</span>
                <span className="pressioneSub">Pressione media, circuito con ritorno</span>
              </div>
              <div className="pressioneBar">
                <div className="pressioneFill fill2" style={{ width: "38%" }}></div>
              </div>
              <span className="pressioneVal">2,5 – 3,5 bar</span>
            </div>

            <div className="pressioneRow">
              <div className="pressioneInfo">
                <span className="pressioneLabel">Pompa elettrica (iniezione diretta)</span>
                <span className="pressioneSub">Alta pressione, precisione critica</span>
              </div>
              <div className="pressioneBar">
                <div className="pressioneFill fill3" style={{ width: "70%" }}></div>
              </div>
              <span className="pressioneVal">4 – 6 bar</span>
            </div>

            <div className="pressioneRow">
              <div className="pressioneInfo">
                <span className="pressioneLabel">Iniezione diretta ad alta pressione (GDI)</span>
                <span className="pressioneSub">Sistemi avanzati, pompa ad alta pressione dedicata</span>
              </div>
              <div className="pressioneBar">
                <div className="pressioneFill fill4" style={{ width: "100%" }}></div>
              </div>
              <span className="pressioneVal">50 – 200 bar</span>
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
         
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <img src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773803839/ChatGPT_Image_Mar_18_2026_12_47_10_PM_fzz3iy.png" alt=""
              />
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}

          <div className="visualCaption">
            <span className="captionTag">Circuito</span>
            <p>
              Schema del circuito di alimentazione con pompa elettrica:
              serbatoio, pompa, filtro, regolatore di pressione, iniettore
              e linea di ritorno verso il serbatoio.
            </p>
          </div>
        </motion.div>

        {/* ── POMPA A DIAFRAMMA DEEP DIVE ─────────────────────────────────── */}
        <motion.div
          className="diaframmaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="diaframmaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Focus tecnico</span>
            <h3>Come funziona la pompa a diaframma</h3>
            <p>
              Nei motori a 2 tempi con carburatore, la soluzione più comune è la
              pompa a diaframma. Non ha motore elettrico: sfrutta direttamente
              l'alternanza di pressione e depressione generata dal pistone nel
              carter per muovere un diaframma flessibile che aspira e spinge il
              carburante.
            </p>
          </motion.div>

          <motion.div className="diaframmaGrid" variants={cardVariants}>

            <div className="diaframmaStep">
              <span className="stepBadge">Fase A</span>
              <h4>Depressione nel carter</h4>
              <p>
                Quando il pistone sale verso il PMI, il carter va in depressione.
                Il canale di impulso trasmette questa depressione al vano superiore
                della pompa, richiamando il diaframma verso l'alto e aspirando
                benzina dalla valvola di ingresso aperta.
              </p>
            </div>

            <div className="diaframmaStep">
              <span className="stepBadge">Fase B</span>
              <h4>Pressione nel carter</h4>
              <p>
                Quando il pistone scende verso il PME, il carter va in
                sovrapressione. Il diaframma è spinto verso il basso, la valvola
                di ingresso si chiude e quella di uscita si apre: il carburante
                viene erogato verso il carburatore.
              </p>
            </div>

            <div className="diaframmaStep">
              <span className="stepBadge">Valvole</span>
              <h4>Lamelle di non ritorno</h4>
              <p>
                Due valvole lamellari — una in aspirazione e una in mandata —
                garantiscono il flusso unidirezionale. Sono componenti soggetti
                a usura: una lamella rigida o deformata compromette l'efficienza
                della pompa anche se il diaframma è integro.
              </p>
            </div>

            <div className="diaframmaStep">
              <span className="stepBadge">Impulso</span>
              <h4>Il canale di impulso</h4>
              <p>
                Il canale di impulso collega il carter al vano superiore della
                pompa. Se è ostruito, incrinato o scollegato, la pompa smette di
                funzionare anche se il diaframma è perfetto. È uno dei punti di
                controllo principali nella diagnostica di alimentazione.
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
            <span className="cardTag">Diagnosi</span>
            <h3>Riconoscere un problema di pressione</h3>
            <p>
              Un calo di pressione si manifesta tipicamente come perdita di
              potenza a pieno gas, avviamento difficile a caldo, o comportamento
              irregolare a regimi sostenuti. Il test con manometro sul circuito
              di alimentazione è il metodo più diretto per escludere la pompa
              come causa del problema.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Manutenzione</span>
            <h3>Sostituzione del diaframma</h3>
            <p>
              Il diaframma è l'elemento più soggetto a usura nella pompa
              meccanica. Con il tempo si indurisce, si perfora o perde
              elasticità, riducendo la portata. La sostituzione è economica e
              va eseguita ogni volta che si riscontrano sintomi di alimentazione
              irregolare in un sistema altrimenti corretto.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Iniezione</span>
            <h3>Pompa elettrica in-tank</h3>
            <p>
              Nei 2T con iniezione, la pompa è spesso immersa nel serbatoio
              (in-tank). Questa posizione riduce il rischio di cavitazione,
              abbassa il rumore operativo e permette di utilizzare il carburante
              stesso come fluido di raffreddamento e lubrificazione della pompa.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default PompaBenzina;