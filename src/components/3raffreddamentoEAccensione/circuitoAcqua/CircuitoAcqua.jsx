import "./circuitoAcqua.scss";
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

const CircuitoAcqua = () => {
  return (
    <section className="circuitoAcqua" id="circuito-acqua">
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
              Raffreddamento
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il circuito<br />dell'acqua
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il circuito di raffreddamento è il sistema che collega
              tra loro tutti i componenti termici: pompa, cilindro,
              testata, radiatore, termostato e vaso di espansione.
              Non è un semplice tubo di andata e ritorno — è un
              circuito chiuso e pressurizzato con un percorso preciso
              che garantisce il flusso corretto attraverso le zone
              più calde del motore, nell'ordine giusto, alla portata
              giusta.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La geometria del circuito — dove entra il liquido freddo,
              da dove esce quello caldo, dove si apre il termostato —
              non è casuale. È il risultato dell'analisi termica del
              motore: le zone con il flusso di calore più alto ricevono
              il liquido più freddo per prime. Cambiare un tubo con uno
              di diametro diverso o invertire inlet e outlet del radiatore
              può sembrare indifferente — non lo è.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Il percorso completo</span>
              <h3>Dal radiatore al motore e ritorno</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="cold">①</span>
                <span className="miniText">Liquido freddo esce dal serbatoio inferiore del radiatore — temperatura 55–70 °C</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="pump">②</span>
                <span className="miniText">La pompa acqua aspira il liquido e lo spinge in pressione verso il cilindro</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="cyl">③</span>
                <span className="miniText">Il liquido entra nella camera d'acqua del cilindro — zona più calda, luce di scarico</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="head">④</span>
                <span className="miniText">Sale nella camera d'acqua della testata — assorbe calore dalla camera di combustione</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="hot">⑤</span>
                <span className="miniText">Liquido caldo (80–95 °C) esce dalla testata verso il radiatore attraverso il tubo superiore</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── PERCORSO BLOCK — schema visivo testuale ─────────────────────── */}
        <motion.div
          className="percorsoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="percorsoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Schema del circuito</span>
            <h3>I nodi del percorso — dove ogni componente si inserisce</h3>
          </motion.div>

          <motion.div className="percorsoSchema" variants={cardVariants}>

            <div className="schemaNode nodeRadiatore">
              <span className="nodeLabel">Radiatore</span>
              <span className="nodeDesc">Scambiatore termico — cede il calore all'aria</span>
              <div className="nodeArrows">
                <span className="arrowOut arrowCold">↓ liquido freddo</span>
                <span className="arrowIn  arrowHot">↑ liquido caldo</span>
              </div>
            </div>

            <div className="schemaConnector connectorDown">
              <span className="connLine" />
              <span className="connLabel">Tubo inferiore — inlet pompa</span>
            </div>

            <div className="schemaNode nodePompa">
              <span className="nodeLabel">Pompa acqua</span>
              <span className="nodeDesc">Genera la pressione di circolazione</span>
              <div className="nodeArrows">
                <span className="arrowOut arrowPressure">→ outlet in pressione</span>
              </div>
            </div>

            <div className="schemaConnector connectorRight">
              <span className="connLine" />
              <span className="connLabel">Tubo di mandata — verso il cilindro</span>
            </div>

            <div className="schemaNode nodeCilindro">
              <span className="nodeLabel">Cilindro + Testata</span>
              <span className="nodeDesc">Zona termica principale — assorbe il calore della combustione</span>
              <div className="nodeArrows">
                <span className="arrowIn arrowHot">→ entra freddo, esce caldo</span>
              </div>
            </div>

            <div className="schemaConnector connectorUp">
              <span className="connLine" />
              <span className="connLabel">Tubo superiore — outlet testata</span>
            </div>

            <div className="schemaNode nodeTermostato">
              <span className="nodeLabel">Termostato</span>
              <span className="nodeDesc">Valvola termica — cortocircuita il radiatore a freddo</span>
              <div className="nodeArrows">
                <span className="arrowOut arrowBypass">⇄ bypass / radiatore</span>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── TERMOSTATO BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="termostatoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="termostatoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il termostato</span>
            <h3>La valvola che regola la temperatura — come funziona e perché è importante</h3>
            <p>
              Il termostato è una valvola termostatica che si apre
              e si chiude automaticamente in funzione della temperatura
              del liquido, senza nessun attuatore elettronico.
              Il meccanismo è interamente meccanico: una capsula di
              cera espande all'aumentare della temperatura e spinge
              fisicamente la valvola ad aprirsi. È uno dei componenti
              più eleganti per semplicità ed efficacia del motore —
              nessuna batteria, nessun sensore, nessun cablaggio.
              Funziona da solo, sempre, per decenni.
            </p>
          </motion.div>

          <motion.div className="termostatoStati" variants={cardVariants}>

            <div className="statoCard statoCold">
              <div className="statoHeader">
                <span className="statoTemp">&lt; 65 °C</span>
                <span className="statoBadge badgeCold">Chiuso — motore freddo</span>
              </div>
              <div className="statoBar">
                <div className="statoFill fillCold" />
              </div>
              <h4>Bypass attivo — il liquido non passa dal radiatore</h4>
              <p>
                A motore freddo il termostato è chiuso. Il liquido
                circola in un circuito corto (bypass) che esclude
                il radiatore: pompa → cilindro → testata → bypass →
                pompa. Il motore si scalda rapidamente senza disperdere
                calore nel radiatore. Questo è fondamentale: un motore
                che fatica a raggiungere la temperatura di esercizio
                funziona con miscele non ottimali, consuma di più
                e logora di più.
              </p>
            </div>

            <div className="statoCard statoApertura">
              <div className="statoHeader">
                <span className="statoTemp">65–80 °C</span>
                <span className="statoBadge badgeApertura">In apertura — zona di regolazione</span>
              </div>
              <div className="statoBar">
                <div className="statoFill fillApertura" />
              </div>
              <h4>Apertura progressiva — il termostato regola la portata</h4>
              <p>
                In questa fascia di temperatura il termostato si apre
                progressivamente, bilanciando il flusso tra bypass e
                radiatore. È la zona di lavoro normale durante la guida
                — il termostato si muove continuamente per mantenere
                la temperatura nel range ottimale. Il motore a 2 tempi
                lavora meglio tra 70 e 85 °C: abbastanza caldo per
                vaporizzare il carburante e garantire le distanze
                ottimali nel cilindro, abbastanza freddo da non
                degradare l'olio in miscela.
              </p>
            </div>

            <div className="statoCard statoOpen">
              <div className="statoHeader">
                <span className="statoTemp">&gt; 82 °C</span>
                <span className="statoBadge badgeOpen">Aperto — piena portata al radiatore</span>
              </div>
              <div className="statoBar">
                <div className="statoFill fillOpen" />
              </div>
              <h4>Tutto al radiatore — massima dissipazione termica</h4>
              <p>
                Sopra la temperatura di apertura completa tutto il
                liquido passa dal radiatore. È la condizione di lavoro
                intenso: uso in salita, fango profondo a bassa velocità,
                sessioni prolungate a regime alto. Se il radiatore è
                dimensionato correttamente e il liquido è fresco,
                la temperatura si stabilizza. Se il termostato
                rimane aperto al massimo senza riuscire a stabilizzare
                la temperatura, il problema è altrove — liquido
                degradato, radiatore intasato, pompa con girante usurata.
              </p>
            </div>

          </motion.div>

          <motion.div className="termostatoDiagnosi" variants={fadeUpVariants}>
            <div className="diagnosRow">
              <div className="diagnosItem diagnosBlocBloc">
                <span className="diagnosDot dotRed" />
                <div>
                  <h5>Termostato bloccato chiuso</h5>
                  <p>Il motore sale di temperatura rapidamente anche a basso carico. Il tubo superiore del radiatore rimane freddo al tatto — il liquido non ci passa. Rimuovere e sostituire.</p>
                </div>
              </div>
              <div className="diagnosItem diagnosBlocOpen">
                <span className="diagnosDot dotYellow" />
                <div>
                  <h5>Termostato bloccato aperto</h5>
                  <p>Il motore fatica a raggiungere la temperatura di esercizio, consuma più del normale, fumata bianca ai bassi regimi. La moto "non si scalda mai". Il termostato va sostituito — non rimosso.</p>
                </div>
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
              <span className="placeholderText">Immagine / schema — circuito completo con frecce di flusso colorate freddo/caldo e posizione del termostato</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Il bypass</span>
            <p>
              Il circuito corto di bypass è la parte meno conosciuta
              del sistema di raffreddamento. Nei disegni tecnici è
              spesso omesso — ma senza di lui il motore impiegherebbe
              il doppio del tempo a scaldarsi, e il termostato non
              avrebbe modo di misurare la temperatura corretta del
              liquido in uscita dalla testata. Il bypass è il motivo
              per cui il termostato va sempre sostituito e mai rimosso.
            </p>
          </div>
        </motion.div>

        {/* ── TUBI BLOCK ──────────────────────────────────────────────────── */}
        <motion.div
          className="tubiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tubiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Tubi e raccordi</span>
            <h3>Silicone, EPDM e fascette — i componenti che nessuno guarda finché non cedono</h3>
            <p>
              I tubi del circuito di raffreddamento vivono in un ambiente
              difficile: temperature cicliche tra 20 e 95 °C, pressione
              interna di 1,0 – 1,4 bar, vibrazioni meccaniche costanti
              e — nel fuoristrada — urti e pieghe durante le cadute.
              Cedono sempre nei punti di giunzione con i raccordi
              o dove si piegano — quasi mai nel tratto rettilineo.
            </p>
          </motion.div>

          <motion.div className="tubiGrid" variants={cardVariants}>

            <div className="tuboCard">
              <span className="tuboTag tagEPDM">EPDM — serie</span>
              <h4>Il tubo OEM — solido, economico, degradabile</h4>
              <p>
                I tubi originali sono in gomma EPDM (Etilene Propilene
                Diene Monomero) — resistente alle temperature fino a
                130 °C, al glicole e agli additivi del liquido refrigerante.
                Con il tempo l'EPDM si indurisce e perde elasticità —
                soprattutto nelle zone vicino ai raccordi dove il tubo
                è sotto stress meccanico. Un tubo duro che non cede
                alla pressione delle dita è a fine vita anche se non
                perde ancora. Cedono sempre all'improvviso, spesso
                in gara o lontano dall'officina.
              </p>
            </div>

            <div className="tuboCard">
              <span className="tuboTag tagSilicone">Silicone — aftermarket</span>
              <h4>La versione racing — flessibile a vita, indistruttibile agli urti</h4>
              <p>
                I kit tubi in silicone (Samco Sport, Bel-Ray, DRC)
                sostituiscono integralmente l'impianto OEM con tubi
                a strati multipli in silicone rinforzato con fibra
                aramidica. Resistono fino a 200 °C, mantengono la
                flessibilità per tutta la vita del componente e reggono
                piegature che spezzerebbero un tubo EPDM invecchiato.
                Il colore (blu, rosso, nero) è funzionale oltre che
                estetico — il silicone colorato si ispeziona più
                facilmente cercando sbiancamenti o crepe. Il costo
                è 5 – 8 volte quello dei tubi OEM ma la durata
                è praticamente illimitata.
              </p>
            </div>

            <div className="tuboCard">
              <span className="tuboTag tagFascette">Fascette</span>
              <h4>La fascetta che fa acqua — worm drive vs a orecchie</h4>
              <p>
                La fascetta stringitubo è l'ultimo anello della catena —
                e spesso il più trascurato. Le fascette a vite (worm
                drive) standard tendono ad allentarsi con le vibrazioni
                e creano un punto di serraggio non uniforme che può
                tagliare il tubo. Per uso racing e fuoristrada intenso
                le fascette a orecchie (ear clamp) o in acciaio inox
                a serraggio uniforme sono superiori: distribuiscono
                la pressione su tutta la circonferenza senza punti
                di concentrazione dello stress. Ogni qualvolta si
                smonta un tubo, la fascetta va sostituita — non riusata.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── VASO ESPANSIONE BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="vasoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="vasoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Vaso di espansione</span>
            <h3>Perché il circuito ha bisogno di un polmone — espansione termica e recupero</h3>
            <p>
              Il liquido refrigerante si espande riscaldandosi —
              circa il 4% di volume tra 20 e 100 °C. In un circuito
              completamente rigido e sigillato questa espansione
              causerebbe picchi di pressione inaccettabili. Il vaso
              di espansione assorbe la variazione di volume e mantiene
              la pressione stabile nel circuito.
            </p>
          </motion.div>

          <motion.div className="vasoGrid" variants={cardVariants}>

            <div className="vasoCard">
              <span className="vasoIdx vasoIdxTeal">01</span>
              <h4>Il circuito aperto — senza vaso di espansione</h4>
              <p>
                Molte moto da cross e alcuni modelli da enduro non hanno
                un vaso di espansione separato. Il tappo del radiatore
                incorpora la valvola di sovrapressione che scarica
                il vapore in eccesso durante il funzionamento — il
                circuito perde una piccola quantità di liquido ad ogni
                sessione intensa. Il livello del radiatore va controllato
                regolarmente. Semplice, leggero, ma richiede attenzione
                al livello con uso prolungato.
              </p>
            </div>

            <div className="vasoCard">
              <span className="vasoIdx vasoIdxBlue">02</span>
              <h4>Il circuito chiuso con vaso — recupero totale</h4>
              <p>
                I modelli con vaso di espansione (overflow tank) hanno
                un circuito completamente chiuso: il vapore e il liquido
                in eccesso che escono dal radiatore non vengono scaricati
                nell'ambiente ma raccolti nel vaso. Quando il motore
                si raffredda, la depressione nel circuito in contrazione
                risucchia il liquido dal vaso — il livello nel radiatore
                rimane sempre costante. Zero perdite nel tempo, zero
                necessità di controllo frequente del livello. Standard
                su tutte le moto stradali e sempre più comune
                nel fuoristrada moderno.
              </p>
            </div>

            <div className="vasoCard">
              <span className="vasoIdx vasoIdxGreen">03</span>
              <h4>La manutenzione del vaso — cosa controllare</h4>
              <p>
                Il vaso di espansione va pulito ogni due anni insieme
                alla sostituzione del liquido. I depositi di glicole
                degradato si accumulano sul fondo e sulle pareti
                creando una patina che riduce la trasparenza —
                rendendo difficile leggere il livello. Lavare con
                acqua distillata calda e spazzola morbida.
                Verificare che il tubo di collegamento al radiatore
                sia libero da ostruzioni: un tubo parzialmente
                ostruito impedisce il recupero del liquido e il
                circuito si comporta come se non avesse il vaso.
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
            <span className="captionTag">Spurgo — l'operazione più importante dopo ogni intervento</span>
            <p>
              Ogni volta che il circuito viene aperto — per sostituzione
              tubi, cambio liquido, smontaggio testata — l'aria entra
              nel sistema. L'aria non scambia calore e si accumula
              nel punto più alto del circuito creando una zona morta.
              Se quella zona è vicino alla camera d'acqua della testata
              il risultato è una hot-spot localizzata che può causare
              detonazione o deformazione della testata. Lo spurgo completo
              è obbligatorio — non opzionale.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — procedura di spurgo con bullone aperto e bolle d'aria in uscita</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
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
            <h3>Leggere i sintomi del circuito — ogni guasto ha la sua firma</h3>
            <p>
              Temperatura che sale lentamente e si stabilizza alta:
              termostato bloccato aperto o liquido degradato.
              Temperatura che sale velocemente: termostato bloccato
              chiuso, livello basso o girante usurata. Perdita di
              livello senza gocce visibili: tenuta pompa che cede,
              guarnizione testata che soffia nel circuito, micro-fessura
              nel radiatore. Olio lattiginoso: acqua nel carter —
              tenuta pompa ceduta, fermarsi subito. Ogni sintomo
              ha una causa specifica — la diagnosi corretta evita
              di cambiare componenti sani.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Guado e cross</span>
            <h3>L'acqua che entra dall'esterno — il circuito in condizioni estreme</h3>
            <p>
              Nel fuoristrada il circuito di raffreddamento affronta
              una condizione unica: il motore caldo immerso in acqua
              fredda durante i guadi. Il calore viene dissipato
              istantaneamente — il termostato si chiude di scatto,
              il liquido si contrae e la pressione nel circuito cala.
              Se i tubi o le fascette non tengono, la differenza di
              pressione può aspirare acqua esterna nel circuito.
              Dopo ogni guado profondo verificare il colore del liquido
              nel vaso di espansione: torbido significa acqua entrata.
              Sostituire il liquido prima della sessione successiva.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Temperatura ideale</span>
            <h3>70–85 °C — la finestra ottimale del 2T a liquido</h3>
            <p>
              Il motore a 2 tempi a liquido lavora meglio in un range
              di temperatura molto preciso. Sotto i 60 °C il carburante
              fatica a vaporizzare completamente, la miscela è più
              ricca del necessario e le fasce hanno giochi eccessivi
              per la bassa dilatazione del pistone. Sopra i 90 °C
              l'olio in miscela inizia a perdere efficacia e il
              rischio di pre-accensione aumenta. Il termostato è
              calibrato per mantenere il circuito tra 70 e 85 °C —
              quella finestra è dove il 2T dà il meglio di sé in
              termini di potenza, efficienza e durata.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default CircuitoAcqua;
