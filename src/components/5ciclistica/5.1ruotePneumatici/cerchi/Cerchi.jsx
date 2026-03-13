import "./cerchi.scss";
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

const Cerchi = () => {
  return (
    <section className="cerchi" id="cerchi">
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
              Il cerchio — materiali,<br />profili e tensione dei raggi
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il cerchio è la struttura portante della ruota. Deve essere
              abbastanza rigido da mantenere la forma sotto carico, abbastanza
              elastico da assorbire impatti senza rompersi e abbastanza leggero
              da non appesantire le masse non sospese — le più penalizzanti
              per il comportamento dinamico della moto.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La scelta tra alluminio e acciaio non è banale: l'alluminio
              pesa meno ma si deforma permanentemente dopo impatti gravi;
              l'acciaio pesa di più ma si può raddrizzare in campo.
              Per il fuoristrada agonistico l'alluminio è lo standard;
              per l'enduro estremo dove i danni sono frequenti, alcuni
              preferiscono l'alluminio 7075 rinforzato o lavorazioni ibride.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Profilo cerchio</span>
              <h3>Tre dimensioni che contano</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Larghezza interna del canale (es. 1.85&quot; ant., 2.15&quot; post.) —
                  determina il profilo del pneumatico montato e la larghezza
                  effettiva del footprint
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Diametro nominale (21&quot; ant., 18&quot; post. — standard MX/enduro) —
                  impone i pneumatici compatibili e influenza la geometria
                  delle sospensioni
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Offset del mozzo — la posizione laterale del mozzo nel cerchio,
                  determina la simmetria dei raggi e la rigidità laterale
                  della ruota
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
            <h3>Profilo, materiali e finitura — cosa rende un cerchio leggero e resistente</h3>
            <p>
              La sezione trasversale del cerchio è il risultato di un compromesso
              tra rigidità strutturale, peso e resistenza agli impatti.
              Il profilo a doppia camera è lo standard moderno nei cerchi
              da fuoristrada — distribuisce meglio i carichi e aumenta
              la resistenza alle ammaccature rispetto ai profili a camera singola.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costProfilo">P</span>
              <h4>Profilo del canale — sezione, larghezza interna e sede del tallone</h4>
              <p>
                Il profilo del canale determina come il pneumatico si appoggia
                al cerchio. Una larghezza interna troppo stretta fa gonfiare
                il pneumatico in modo più aguzzo, riducendo l'area di contatto
                con il terreno; troppo larga lo schiaccia, aumentando il
                rischio che il tallone perda tenuta a bassa pressione.
                La sede del tallone (hook) è la zona critica: deve trattenere
                il tallone del pneumatico anche a 0,6 bar — pressione comune
                nel fuoristrada morbido.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costMateriale">M</span>
              <h4>6061 vs 7075 — resistenza, tenacità e peso a confronto</h4>
              <p>
                Il 6061-T6 è la lega più usata: buona tenacità, si deforma
                plasticamente prima di rompersi, si può raddrizzare dopo
                impatti lievi. Il 7075-T6 è più duro e leggero (10–15% meno
                peso a parità di volume) ma è più fragile agli impatti —
                si rompe invece di deformarsi. Alcuni cerchi premium usano
                un ibrido: corpo in 7075, canale in 6061. La scelta dipende
                dalla disciplina: più impatti = più tenacità (6061);
                più performance = più leggerezza (7075).
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costRifinitura">R</span>
              <h4>Finitura superficiale — anodizzazione e corrosione</h4>
              <p>
                I cerchi in alluminio non anodizzato si corrodono rapidamente
                a contatto con l'acqua e il fango — la corrosione galvanica
                con i raggi in acciaio inossidabile accelera il processo.
                L'anodizzazione crea uno strato di ossido di alluminio
                duro e aderente che rallenta significativamente la corrosione.
                Le zone più a rischio sono le sedi dei raggi: il movimento
                ciclico dei capicorda usura lo strato anodizzato e espone
                il metallo nudo. Ispezionare e lubrificare le sedi dei raggi
                ad ogni reggitazione.
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
              <span className="placeholderText">Sezione trasversale del cerchio — canale a doppia camera, flange laterali e sede del tallone in evidenza</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Sezione trasversale</span>
            <p>
              La sezione a doppia camera divide il profilo in due zone separate
              da una nervatura centrale. Questa geometria aumenta la resistenza
              alle ammaccature da impatto (la camera inferiore cede prima
              di deformare la sede del tallone) e distribuisce meglio il carico
              dai raggi verso il pneumatico. I cerchi a singola camera
              si ammaccano più facilmente sulla sede del tallone.
            </p>
          </div>
        </motion.div>

        {/* ── TENSIONE RAGGI BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="forzeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="forzeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Tensione dei raggi</span>
            <h3>Il sistema di raggi in tensione — come funziona davvero</h3>
            <p>
              I raggi di una ruota a raggi non sono bulloni rigidi — sono cavi
              in tensione. Il cerchio è sospeso tra i raggi, come un tessuto teso.
              Ogni raggio contribuisce a distribuire il carico verticale su
              una parte del cerchio — non c'è un punto di carico singolo,
              ma un arco di distribuzione che dipende dalla tensione uniforme.
            </p>
          </motion.div>

          <motion.div className="forzeGrid" variants={cardVariants}>
            <div className="forzaCard">
              <span className="forzaIcon">↕</span>
              <h4>Carico verticale — come si distribuisce sull'arco di raggi</h4>
              <p>
                Il peso della moto non preme un solo raggio verso il basso —
                l'arco di raggi in tensione nella zona di carico si allunga
                microscopicamente. La tensione nei raggi della zona superiore
                aumenta e bilancia il carico. Un raggio allentato crea un punto
                di discontinuità che stanca gli altri raggi adiacenti.
              </p>
            </div>

            <div className="forzaCard">
              <span className="forzaIcon">↔</span>
              <h4>Tensione uniforme — perché è critica per la geometria</h4>
              <p>
                Raggi a tensioni diverse creano un cerchio fuori centro
                e fuori piano. La ruota non è più rotonda né piatta —
                causa vibrazioni, usura asimmetrica del pneumatico e rischio
                di ammaccature localizzate nel cerchio sotto impatto.
              </p>
            </div>

            <div className="forzaCard">
              <span className="forzaIcon">⟳</span>
              <h4>Reggitazione — quando e come si esegue</h4>
              <p>
                Controllare la tensione ogni 5–10 ore di uso fuoristrada.
                Metodo: colpire ogni raggio con una chiave — il suono deve
                essere uniforme su tutti. Regolare con chiave raggi partendo
                dal punto più basso e procedendo circolarmente.
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
            <span className="captionTag">Geometria dei raggi</span>
            <p>
              I raggi a 3 croce (tre incroci tra raggi adiacenti prima
              di arrivare al cerchio) sono lo standard MX/enduro.
              Più incroci = raggi più obliqui = più flessibilità torsionale,
              meglio adatta a carichi impulsivi come quelli del fuoristrada.
              I raggi a 2 croce sono più rigidi ma meno adattabili —
              usati su cerchi con flange molto grandi.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Geometria raggi a 3 croce — schema di intrecciatura e angolazione rispetto alle flange</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── GEOMETRIA RAGGI BLOCK ────────────────────────────────────────── */}
        <motion.div
          className="distribuzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="distribuzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Geometria dei raggi</span>
            <h3>Croce, numero e angolazione — la rete portante della ruota</h3>
            <p>
              La geometria dei raggi non è una scelta estetica — determina
              come i carichi vengono trasferiti dalle flange del mozzo al cerchio.
              Variare il numero di incroci, il numero di raggi o la loro
              angolazione cambia il comportamento elastico della ruota
              in modo misurabile.
            </p>
          </motion.div>

          <motion.div className="distribuzioneGrid" variants={cardVariants}>

            <div className="distCard distCroce">
              <div className="distCardTop">
                <span className="distBadge badgeCroce">3 croce</span>
                <span className="distAlbero">Standard MX/enduro</span>
              </div>
              <h4>Raggi a 3 croce — equilibrio tra rigidità e flessibilità</h4>
              <p>
                Ogni raggio incrocia altri 3 raggi prima di arrivare al cerchio.
                Questa geometria crea raggi più obliqui rispetto alla radiale —
                più lunghi, più flessibili torsionalmente, meglio adattati
                ad assorbire i carichi impulsivi del fuoristrada senza
                trasmetterli bruscamente al cerchio. È lo schema standard
                per la quasi totalità delle ruote da motocross e enduro.
              </p>
            </div>

            <div className="distCard distNumero">
              <div className="distCardTop">
                <span className="distBadge badgeNumero">18 / 21 raggi</span>
                <span className="distAlbero">Ridondanza vs peso</span>
              </div>
              <h4>Numero di raggi — più ridondanza o meno peso</h4>
              <p>
                Le ruote MX standard hanno 18 raggi (anteriore) e 18 raggi
                (posteriore) — alcune versioni racing usano 21 raggi per
                più ridondanza. Più raggi significano che la rottura di
                uno singolo ha impatto minore sulla distribuzione del carico
                sugli altri; meno raggi significano meno peso ma ogni raggio
                porta più carico e un cedimento è più critico.
              </p>
            </div>

            <div className="distCard distAngolo">
              <div className="distCardTop">
                <span className="distBadge badgeAngolo">Angolazione</span>
                <span className="distAlbero">Laterale vs radiale</span>
              </div>
              <h4>Angolazione dei raggi — rigidità laterale vs radiale</h4>
              <p>
                Raggi più verticali (angolo ridotto rispetto all'asse) offrono
                più rigidità laterale ma meno capacità di assorbimento radiale.
                Raggi più inclinati (angolo maggiore) sono più elastici
                assialmente. Il bilanciamento dipende dall'offset del mozzo
                e dalla posizione delle flange — parametri fissi del mozzo —
                quindi non è regolabile indipendentemente dalla scelta
                del mozzo e del cerchio.
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
            <span className="sectionLabel">Diagnosi e danni</span>
            <h3>Riconoscere ammaccature, deformazioni e tensione irregolare</h3>
            <p>
              Il cerchio comunica il suo stato attraverso comportamenti della
              ruota — vibrazioni, andamento sinusoidale, usura asimmetrica
              del pneumatico. Riconoscerli permette di intervenire prima che
              un cerchio fuori geometria danneggi il pneumatico o il mozzo.
            </p>
          </motion.div>

          <motion.div className="diagnGrid" variants={cardVariants}>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Ammaccatura nel canale — rischio di smontaggio del pneumatico</h4>
              <p>
                Un'ammaccatura nel canale superiore a 2 mm di profondità
                può deformare la sede del tallone. A pressioni basse (fuoristrada)
                il tallone del pneumatico può perdere tenuta nella zona
                ammaccata e smontarsi in curva. Le ammaccature profonde
                o che deformano la sede del tallone non si riparano —
                il cerchio va sostituito.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Cerchio fuori piano (wobble) — tensione irregolare dei raggi</h4>
              <p>
                La ruota oscilla lateralmente mentre gira. Causa principale:
                raggi a tensione irregolare che deformano il cerchio fuori
                dal piano di rotazione. Verificare con la ruota sollevata
                e un riferimento fisso (un cacciavite appoggiato alla
                forcella): la distanza tra cerchio e riferimento deve
                essere costante per tutta la rotazione.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Cerchio fuori centro (hop) — raggi allentati su un lato</h4>
              <p>
                La ruota ha un'eccentricità radiale — salta su e giù mentre
                gira. Causa principale: raggi allentati nella zona di hop,
                che permettono al cerchio di "cadere" verso il mozzo in quel
                punto. Verificare con un comparatore radiale sul cerchio.
                Una eccentricità superiore a 1,5 mm è percepibile alla guida.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Controllo tensione raggi — metodo acustico e tensiometro</h4>
              <p>
                Metodo acustico: colpire ogni raggio con una chiave.
                Il tono deve essere uniforme — una nota più bassa indica
                un raggio meno teso. Per una verifica precisa usare
                un tensiometro a sfioramento: la tensione standard
                per le ruote MX è 100–120 kgf (chilogrammi-forza).
                Variazioni superiori al 15% tra raggi adiacenti
                indicano necessità di correzione.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Ispezione del canale — graffi profondi e sede del tallone</h4>
              <p>
                Ispezionare visivamente il canale dopo ogni sessione intensa.
                Graffi superficiali sull'anodizzazione sono normali e
                ininfluenti. Graffi profondi che arrivano al metallo nudo
                creano punti di corrosione preferenziale. Verificare con
                il dito che la sede del tallone non presenti bordi affilati
                o deformazioni nella zona di appoggio del pneumatico.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeIntervallo">Intervallo</span>
              <h4>Centratura periodica e controllo tensione dei raggi</h4>
              <p>
                Controllare la tensione e la centratura ogni 5–10 ore
                di uso fuoristrada. I raggi nuovi si assestano nelle prime
                ore — una reggitazione dopo le prime 2–3 ore di un cerchio
                nuovo è consigliata. Usare sempre pasta lubrificante sui
                nipples durante la reggitazione per evitare che si gripino
                e non si regolino più.
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
            <span className="cardTag">Alluminio</span>
            <h3>7075 vs 6061 — la differenza conta</h3>
            <p>
              Il 7075 è più duro ma più fragile agli impatti; il 6061 è più
              tenace e assorbe meglio i colpi. Alcuni cerchi premium usano
              un ibrido: corpo in 7075, canale in 6061. La scelta dipende
              dalla disciplina.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Cerchio ammaccato</span>
            <h3>Riparare o sostituire?</h3>
            <p>
              Piccole ammaccature sul canale (meno di 2 mm) sono spesso senza
              conseguenze pratiche. Ammaccature più profonde o deformazioni
              della sede del pneumatico sono pericolose — il pneumatico può
              smontarsi sotto carico. Non riparare — sostituire.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Peso</span>
            <h3>Massa non sospesa — l'impatto sulle prestazioni</h3>
            <p>
              Ogni kg di massa non sospesa ha 7–10 volte l'impatto di un kg
              di massa sospesa sul comportamento dinamico. Un cerchio leggero
              migliora la risposta dello sterzo, riduce l'inerzia giroscopica
              e permette alle sospensioni di lavorare meglio.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Cerchi;
