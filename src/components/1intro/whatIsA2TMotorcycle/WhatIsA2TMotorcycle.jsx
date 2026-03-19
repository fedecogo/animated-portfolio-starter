import "./whatIsA2TMotorcycle.scss";
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

const WhatIsA2TMotorcycle = () => {
  return (
    <section className="whatIsA2TMotorcycle">
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
              1.2 — Cos'è una 2T
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Cos'è una moto 2 tempi?
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Una moto 2 tempi è costruita attorno a un motore che completa il
              suo ciclo termodinamico in un solo giro dell'albero motore —
              due colpi di pistone. Non è semplicemente un motore con meno
              valvole: è una logica meccanica completamente diversa, dove il
              carter stesso funziona da camera di pompaggio e la distribuzione
              dei gas è gestita dalla geometria fisica del cilindro.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il confronto con il 4T si ferma spesso al numero di colpi del
              pistone. Ma la differenza sostanziale è strutturale: nel 2T non
              esiste un albero a camme, non esistono valvole nel senso
              tradizionale, e l'olio di lubrificazione non circola in un
              circuito separato. Il motore funziona con una miscela di benzina
              e olio, che nutre contemporaneamente la combustione e le
              superfici in movimento. Questa caratteristica, più di ogni altra,
              definisce la personalità della moto.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il risultato di queste scelte progettuali è un motore più
              leggero, più compatto e capace di erogare più potenza per unità
              di cilindrata — ma anche più sensibile alla regolazione, alla
              qualità della miscela e alla temperatura di lavoro. Una 2T ben
              regolata è un'esperienza di guida difficile da trovare altrove.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Caratteristiche chiave</span>
              <h3>L'identità tecnica di un motore 2T</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniLabel">Ciclo</span>
                <span className="miniValue">Un giro dell'albero = un ciclo completo</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Distribuzione</span>
                <span className="miniValue">Luci nel cilindro, no valvole tradizionali</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Lubrificazione</span>
                <span className="miniValue">Olio miscelato alla benzina (premix)</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Potenza specifica</span>
                <span className="miniValue">Superiore al 4T a parità di cilindrata</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CARTER BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="carterBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="carterHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il principio fondamentale</span>
            <h3>Il carter come camera di pompaggio</h3>
            <p>
              L'elemento che distingue più radicalmente un motore 2T da tutti
              gli altri è il ruolo del carter. Mentre in un 4T il carter è
              semplicemente il contenitore dell'olio e dei componenti rotanti,
              nel 2T è una camera di pre-compressione attiva: quando il pistone
              sale verso il PMI, crea nel carter una depressione che aspira la
              miscela fresca; quando scende verso il PMI, comprime quella
              miscela e la spinge — attraverso le luci di travaso — nel
              cilindro sopra il pistone. Il carter è parte integrante del
              ciclo termodinamico.
            </p>
          </motion.div>

          <motion.div className="carterGrid" variants={cardVariants}>
            <div className="carterCard">
              <span className="carterIdx">01</span>
              <h4>Tenuta del carter</h4>
              <p>
                Affinché il carter funzioni da camera di pompaggio, deve essere
                completamente ermetico. Ogni perdita — dai paraolio dell'albero
                motore, dalle guarnizioni o dai tappi — riduce la depressione
                generata durante la salita del pistone, impoverendo il
                trasferimento di miscela e abbassando la potenza. Un carter che
                perde aria è uno dei guasti più subdoli del 2T: difficile da
                individuare ad occhio, ma devastante sulle prestazioni.
              </p>
            </div>

            <div className="carterCard">
              <span className="carterIdx">02</span>
              <h4>Volume del carter</h4>
              <p>
                Il volume interno del carter influenza direttamente la quantità
                di miscela che si può trasferire per ogni ciclo — e quindi la
                coppia a basso regime. Un carter grande è più efficiente nel
                riempimento ma rallenta la risposta. Alcuni preparatori
                riducono il volume interno del carter con inserti in resina per
                aumentare la pressione di trasferimento e spostare la banda di
                potenza verso l'alto.
              </p>
            </div>

            <div className="carterCard">
              <span className="carterIdx">03</span>
              <h4>Cuscinetti a rulli</h4>
              <p>
                L'albero motore del 2T monta quasi sempre cuscinetti a rulli
                invece che a strisciamento, perché devono lavorare nell'aria
                della miscela — non in bagno d'olio come nel 4T. I cuscinetti
                a rulli sono lubrificati dall'olio presente nella miscela e
                sono dimensionati per reggere i carichi elevati imposti dalla
                combustione frequente e dalla potenza specifica del motore.
              </p>
            </div>

            <div className="carterCard">
              <span className="carterIdx">04</span>
              <h4>Paraolio dell'albero</h4>
              <p>
                I paraolio ai lati dell'albero motore separano il carter dal
                lato cambio e dall'esterno. Sono componenti di sicurezza
                primari: un paraolio deteriorato fa entrare aria nel carter,
                compromettendo il pompaggio. Un paraolio che perde verso il
                cambio introduce olio della miscela nel bagno d'olio della
                scatola cambio, alterandone la viscosità e riducendone
                l'efficacia lubrificante.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── LUCI BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="luciBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="luciHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Distribuzione</span>
            <h3>La distribuzione a luci — niente valvole, solo geometria</h3>
            <p>
              Nel motore 4T, l'apertura e la chiusura dei condotti di
              aspirazione e scarico sono gestite da valvole comandate da un
              albero a camme. Nel 2T non esiste nulla di tutto questo: la
              distribuzione è interamente determinata dalla posizione del
              pistone nel cilindro. Quando il mantello del pistone supera il
              bordo di una luce, quella luce si apre. Quando risale, la chiude.
              La fasatura è scritta nella geometria del cilindro — e non può
              essere modificata a motore acceso.
            </p>
          </motion.div>

          <motion.div className="luciGrid" variants={cardVariants}>
            <div className="luciCard">
              <span className="luciBadge badgeAsp">Aspirazione</span>
              <h4>Luce di aspirazione</h4>
              <p>
                Presente nei motori senza pacco lamellare, è il condotto
                attraverso cui la miscela entra direttamente nel carter. Si
                trova sul lato del cilindro e viene aperta e chiusa dal
                mantello del pistone. La sua fasatura — l'angolo di
                apertura/chiusura rispetto al PMI — influenza la quantità di
                miscela aspirata e il regime al quale il motore è più
                efficiente. Nei motori moderni è spesso sostituita dal pacco
                lamellare.
              </p>
            </div>

            <div className="luciCard">
              <span className="luciBadge badgeTrav">Travaso</span>
              <h4>Luci di travaso</h4>
              <p>
                Sono le luci più importanti per il rendimento del motore: si
                aprono quando il pistone scende verso il PMI e permettono alla
                miscela compressa nel carter di entrare nel cilindro, al di
                sopra del pistone. Il numero, la forma e l'angolazione delle
                luci di travaso determinano la direzione del flusso di miscela
                fresca e la sua capacità di spazzare efficacemente i gas
                combusti verso la luce di scarico. Nei motori da competizione
                la geometria dei travasi è uno dei parametri di preparazione
                più delicati.
              </p>
            </div>

            <div className="luciCard">
              <span className="luciBadge badgeSca">Scarico</span>
              <h4>Luce di scarico</h4>
              <p>
                È la prima luce ad aprirsi durante la discesa del pistone. La
                sua altezza rispetto al cielo del cilindro determina
                direttamente la corsa utile del pistone — cioè la porzione di
                corsa disponibile per la combustione. Una luce di scarico più
                alta anticipa l'apertura dello scarico, alza la potenza di
                picco ma riduce la coppia a basso regime. L'altezza della luce
                di scarico è il parametro di rettifica più comune nelle
                preparazioni del cilindro.
              </p>
            </div>

            <div className="luciCard">
              <span className="luciBadge badgeReed">Reed valve</span>
              <h4>Pacco lamellare</h4>
              <p>
                Il pacco lamellare — detto anche reed valve — è una valvola a
                lamelle elastiche posizionata tra il carburatore e il carter.
                Sostituisce la luce di aspirazione convenzionale: si apre per
                effetto della depressione nel carter durante la salita del
                pistone e si richiude per pressione durante la discesa,
                impedendo alla miscela di tornare indietro verso il
                carburatore. Questa soluzione migliora notevolmente il
                riempimento a tutti i regimi, allargando la banda di potenza
                utilizzabile.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── LUBRIFICAZIONE BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="lubrificazioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="lubrificazioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Lubrificazione</span>
            <h3>Il motore beve olio — miscelato alla benzina</h3>
            <p>
              Nel motore 2T non esiste un serbatoio d'olio separato e una pompa
              che distribuisce il lubrificante alle superfici in movimento. La
              lubrificazione avviene attraverso l'olio disciolto nella benzina:
              la miscela viaggia insieme nell'impianto di alimentazione, entra
              nel carter e raggiunge cuscinetti, spinotto e pareti del cilindro
              sotto forma di nebbia. Quando la miscela brucia in camera, l'olio
              brucia con lei. Questo sistema è semplice ed efficace, ma richiede
              che il rapporto di miscela sia sempre corretto.
            </p>
          </motion.div>

          <motion.div className="lubrificazioneContent" variants={cardVariants}>
            <div className="lubColumn">
              <div className="lubItem">
                <span className="lubLabel">Rapporto di miscela</span>
                <p>
                  Il rapporto di miscela è espresso in volume: 1:50 significa
                  un parte di olio per 50 di benzina. I motori stradali e da
                  enduro usano tipicamente rapporti tra 1:40 e 1:50 in
                  condizioni normali; i motori da cross o preparati possono
                  richiedere rapporti più ricchi (1:25 – 1:35) a causa dei
                  regimi di lavoro più elevati e della maggiore temperatura
                  generata. Un rapporto troppo magro — poco olio — porta al
                  grippaggio. Uno troppo ricco produce depositi di carbonio,
                  intasa la candela e riduce le prestazioni.
                </p>
              </div>
              <div className="lubItem">
                <span className="lubLabel">Qualità dell'olio</span>
                <p>
                  Non tutti gli oli per 2T sono equivalenti. La specifica
                  minima richiesta è JASO FC o FD: la norma JASO definisce le
                  prestazioni di lubrificazione, la tendenza a formare depositi
                  e le caratteristiche di combustione. Gli oli sintetici di
                  qualità superiore bruciano più pulito, producono meno fumo e
                  proteggono meglio i cuscinetti ad alta temperatura. Usare olio
                  di bassa qualità o — peggio — olio per 4T in un 2T è una
                  delle cause più comuni di guasto prematuro.
                </p>
              </div>
            </div>

            <div className="lubColumn">
              <div className="lubItem">
                <span className="lubLabel">Autolubrificazione (iniezione separata)</span>
                <p>
                  I motori 2T stradali moderni e alcuni scooter usano un sistema
                  di iniezione d'olio separata: l'olio viene pompato
                  direttamente nel motore in quantità variabile in funzione del
                  regime e del carico, senza essere pre-miscelato nella benzina.
                  Questo sistema — detto autolubrificazione o "Autolube" — è più
                  preciso e permette di usare benzina pura nel serbatoio, ma
                  richiede che il serbatoio dell'olio venga tenuto pieno e che
                  la pompa sia periodicamente controllata.
                </p>
              </div>
              <div className="lubItem">
                <span className="lubLabel">Effetti sul motore</span>
                <p>
                  La lubrificazione a miscela influenza ogni componente del
                  motore. Il pistone è raffreddato e lubrificato dalla miscela
                  fresca che entra nel carter durante l'aspirazione. I
                  cuscinetti dell'albero motore ricevono il lubrificante dalla
                  nebbia di olio in sospensione nella miscela. La candela è
                  esposta ai prodotti della combustione dell'olio e si sporca
                  più rapidamente rispetto a un 4T — specialmente se il
                  rapporto di miscela è ricco o se il motore lavora spesso a
                  basso regime.
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
            <span className="cardTag">Potenza</span>
            <h3>Perché il 2T eroga più potenza per litro</h3>
            <p>
              Un motore 4T produce un evento di combustione ogni due giri
              dell'albero. Un 2T lo produce ogni giro. A parità di cilindrata
              e regime, il 2T brucia carburante il doppio delle volte — e
              teoricamente può erogare il doppio della potenza. In pratica le
              perdite per lavaggio incompleto e cortocircuito dei gas riducono
              questo vantaggio, ma i 2T ben progettati erogano ancora 1,5 – 2
              volte la potenza specifica di un equivalente 4T.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Banda di potenza</span>
            <h3>La pipe e la risonanza dello scarico</h3>
            <p>
              La camera di espansione non è solo un silenziatore. È un
              dispositivo di accordatura acustica: al regime di punta, l'onda
              di pressione riflessa dal cono di convergenza arriva alla luce
              di scarico esattamente nel momento in cui questa si chiude,
              ricacciando indietro nel cilindro la miscela fresca che stava
              fuoriuscendo. Questo effetto — detto effetto di risonanza —
              migliora il rendimento volumetrico e genera il picco di potenza
              tipico dei 2T.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Limiti</span>
            <h3>Cortocircuito e efficienza termica</h3>
            <p>
              Il tallone d'Achille del 2T è il cortocircuito: durante la fase
              di travaso, parte della miscela fresca che entra dal carter può
              fuoriuscire direttamente dalla luce di scarico prima che questa
              si chiuda, senza essere bruciata. Questo riduce l'efficienza
              termica e aumenta le emissioni di idrocarburi incombusti.
              L'iniezione diretta ad alta pressione — usata sulle 2T moderne —
              elimina quasi completamente il problema iniettando il carburante
              solo dopo la chiusura dello scarico.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatIsA2TMotorcycle;
