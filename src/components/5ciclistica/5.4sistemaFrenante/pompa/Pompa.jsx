import "./pompa.scss";
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

const Pompa = () => {
  return (
    <section className="pompa" id="pompa">
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
              Sistema frenante — Pompa del freno
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La pompa del freno — come nasce la pressione idraulica
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La pompa del freno — tecnicamente il cilindro maestro o master cylinder —
              è il componente che converte la forza meccanica della mano
              o del piede in pressione idraulica. Non amplifica la forza da sola:
              è la differenza tra la sezione del suo pistone e la sezione dei pistoncini
              della pinza che moltiplica la forza frenante. La pompa genera pressione;
              il resto del sistema la distribuisce e la usa. Capire cosa succede
              dentro il corpo pompante — il pistone, le guarnizioni, il foro di
              compensazione — permette di diagnosticare i problemi prima che
              diventino un guasto in frenata.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il diametro interno del cilindro (il bore) è il parametro che
              definisce il carattere della pompa: un bore piccolo richiede
              più corsa leva per generare la stessa pressione, ma offre più
              modulabilità — il pilota percepisce con più precisione l'aumento
              progressivo di forza frenante. Un bore grande richiede meno corsa
              ma la risposta è più immediata e meno progressiva. La scelta dipende
              dalla disciplina, dal tipo di pinza abbinata e dalla preferenza del pilota.
              Non esiste il bore "migliore" — esiste quello corretto per il sistema.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del master cylinder</span>
              <h3>Quattro elementi chiave del ciclo idraulico</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Corpo pompante — il pistone avanza nel cilindro sotto la
                  spinta della leva; il volume della camera diminuisce e la
                  pressione nel fluido aumenta secondo la legge di Pascal;
                  il diametro del pistone (bore) definisce il rapporto forza/corsa
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Serbatoio del fluido — riserva collegata al cilindro tramite
                  due fori: il foro compensatore (0,4–0,6 mm) e il foro di
                  alimentazione; il livello scende man mano che le pastiglie
                  si consumano e i pistoni della pinza avanzano
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Guarnizione primaria e secondaria — la primaria sigilla
                  la camera ad alta pressione espandendosi radialmente;
                  la secondaria impedisce perdite verso l'esterno;
                  tra le due si trovano i fori di compensazione e alimentazione
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Foro compensatore — rimane aperto a riposo collegando
                  camera e serbatoio; si chiude non appena il pistone avanza
                  oltre il gioco libero; permette al fluido di espandersi
                  con il calore senza generare pressione residua
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
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Schema sezione — master cylinder: pistone, guarnizione primaria/secondaria, foro compensatore, foro alimentazione, serbatoio; evidenziare le due posizioni (riposo / pressione)</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Sezione master cylinder</span>
            <p>
              A riposo il foro compensatore collega camera e serbatoio —
              il circuito è aperto e il fluido può espandersi liberamente.
              Non appena la leva spinge il pistone oltre il gioco libero
              (1–2 mm), la guarnizione primaria copre il foro compensatore
              e la camera diventa un sistema chiuso: ogni ulteriore avanzamento
              del pistone genera pressione trasmessa istantaneamente
              in tutto il circuito idraulico.
            </p>
          </div>
        </motion.div>

        {/* ── PRINCIPI FISICI BLOCK ────────────────────────────────────────── */}
        <motion.div
          className="principiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="principiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fisica del cilindro maestro</span>
            <h3>Pascal, bore, compensazione e gioco libero — quattro concetti per capire ogni problema</h3>
            <p>
              La pompa del freno non è un semplice pistone: è un sistema
              idraulico preciso dove quattro meccanismi lavorano insieme.
              Conoscerli permette di interpretare i problemi — il freno
              che si blocca a caldo, la leva molle, il feeling che sparisce
              in frenata prolungata — senza confondere i sintomi della pompa
              con quelli della pinza o del fluido.
            </p>
          </motion.div>

          <motion.div className="principiGrid" variants={cardVariants}>

            <div className="principiCard">
              <span className="principiIdx">01</span>
              <h4>Legge di Pascal — pressione uguale in tutto il circuito</h4>
              <p>
                Pascal dimostrò che la pressione esercitata su un fluido
                confinato si trasmette integra in tutte le direzioni e in
                tutti i punti del sistema. La pompa con un pistone di 11 mm
                di diametro (sezione ≈ 95 mm²) a cui si applica 100 N di forza
                genera P = 100 / 0,000095 ≈ 1,05 MPa (≈ 10,5 bar).
                Quella stessa pressione agisce su ogni pistoncino della pinza:
                con 4 pistoni da 28 mm di diametro ciascuno (sezione totale
                ≈ 2464 mm²), la forza sulla pastiglia è 1,05 × 2464 × 10⁻⁶ ≈ 2587 N
                — circa 26 volte la forza applicata alla leva. Il rapporto
                di moltiplicazione dipende interamente dal rapporto tra le
                sezioni, non dalla lunghezza dei cilindri.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">02</span>
              <h4>Il bore della pompa — il compromesso tra potenza e modulabilità</h4>
              <p>
                Il bore (diametro interno del cilindro) determina la quantità
                di fluido spostata per mm di corsa del pistone, e quindi
                la corsa leva necessaria per azionare la pinza. Un bore piccolo
                (9–11 mm) sposta poco fluido per mm — il pilota deve tirare
                la leva più a lungo prima di chiudere le pastiglie, ma guadagna
                una progressione fine e una sensibilità elevata. Un bore grande
                (13–16 mm) chiude le pastiglie con meno corsa leva ma la risposta
                è immediata, meno graduabile. Per moto con pinze a 4 pistoni
                grandi (enduro e motard) un bore maggiore compensa il volume
                d'olio necessario a spostare 4 pistoncini simultaneamente.
                Cambiare bore senza cambiare pinza altera tutto il carattere
                della frenata — non è una modifica isolata.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">03</span>
              <h4>Il foro compensatore — perché il freno non si blocca a freddo e si blocca a caldo</h4>
              <p>
                Il foro compensatore (o recupero) è un piccolo orifizio di
                0,4–0,6 mm che collega la camera del pistone con il serbatoio.
                A riposo è aperto: il fluido può passare liberamente, compensando
                le variazioni di volume causate dalla temperatura. Quando il disco
                si surriscalda dopo frenate prolungate, il fluido nel circuito si
                espande: se il foro compensatore è aperto, l'eccesso refluisce nel
                serbatoio senza generare pressione. Se è occluso — guarnizione primaria
                gonfia che lo copre, residui di fluido degradato, o gioco libero
                leva assente che lascia il pistone avanzato anche a riposo —
                l'espansione termica genera pressione residua che accosta
                le pastiglie al disco: il freno si blocca progressivamente
                anche senza toccare la leva. È il problema classico del "freno
                che si stringe a caldo" e ha sempre origine nella pompa o nel
                gioco libero leva, non nella pinza.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">04</span>
              <h4>Il gioco libero della leva — la piccola corsa iniziale che non va ignorata</h4>
              <p>
                Il gioco libero è la corsa iniziale della leva prima che il
                pistone avanzi abbastanza da coprire il foro compensatore e
                iniziare a generare pressione. Si misura all'estremità della
                leva: il valore corretto è 1–2 mm. Troppo gioco libero (3 mm+):
                corsa leva sprecata prima di generare qualsiasi pressione —
                la leva sembra molle all'inizio; la frenata inizia tardi.
                Troppo poco gioco libero (meno di 0,5 mm) o assente: il foro
                compensatore rimane parzialmente coperto anche a riposo —
                il fluido caldo non può refluire e il freno si stringe
                progressivamente. Regolare il gioco libero con l'apposita vite
                di regolazione leva: non è una regolazione estetica, è di sicurezza.
              </p>
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
            <span className="sectionLabel">Anatomia della pompa</span>
            <h3>Corpo, pistone, guarnizioni e serbatoio — come è fatta e perché ogni dettaglio conta</h3>
            <p>
              La pompa del freno è un componente di precisione: tolleranze
              di qualche centesimo di millimetro nel diametro del cilindro
              possono cambiare significativamente il feeling della frenata.
              Conoscere come è costruita aiuta a capire cosa si deteriora,
              cosa è sostituibile e cosa richiede la sostituzione dell'intero corpo.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">01</span>
              <h4>Il corpo in alluminio — billet vs pressofuso</h4>
              <p>
                Il corpo della pompa è quasi sempre in lega di alluminio.
                Le pompe OEM standard sono in alluminio pressofuso — processo
                economico ma con porosità interna che può limitare la precisione
                del cilindro nel tempo. Le pompe aftermarket racing (Brembo RCS,
                Magura HC3, ISR, Beringer) usano il billet CNC: il cilindro
                viene fresato da un blocco solido, con tolleranze sul bore
                di ±0,01 mm invece di ±0,05 mm. La differenza si percepisce
                nella consistenza del feeling in condizioni estreme — dopo
                una staccata lunga la pompa billet mantiene le caratteristiche
                del fluido più a lungo perché le pareti del cilindro non
                assorbono calore altrettanto rapidamente.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">02</span>
              <h4>Il pistoncino e le guarnizioni — il cuore del sigillo</h4>
              <p>
                Il pistoncino è in alluminio anodizzato duro o acciaio inossidabile.
                La guarnizione primaria (in gomma EPDM o PTFE nei componenti racing)
                ha un profilo a labbro che si espande radialmente sotto pressione —
                più pressione c'è, più sigilla — meccanismo identico alle guarnizioni
                dei pistoncini della pinza. La guarnizione secondaria (lato atmosferico)
                è più semplice: impedisce perdite verso l'esterno ma non lavora
                sotto pressione. Tra le due c'è la zona che ospita i fori di
                compensazione e alimentazione. Quando le guarnizioni si induriscono
                per età o fluido degradato, il sigillo primario perde l'auto-espansione:
                il feeling diventa impreciso e possono comparire perdite microscopiche
                che introducono aria nel circuito.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">03</span>
              <h4>Il serbatoio del fluido — integrato o separato</h4>
              <p>
                Nelle pompe assiali tradizionali il serbatoio è integrato nel corpo
                della pompa, posizionato sopra o di lato, con il tappo a vite.
                Nelle pompe radiali (più recenti, usate in applicazioni racing)
                il serbatoio può essere separato, collegato da un tubo, e posizionato
                dove c'è più spazio sul manubrio. Il tappo del serbatoio ha una
                membrana flessibile (diaframma) che si deforma per compensare
                le variazioni di volume del fluido — il serbatoio non è mai
                completamente pieno: c'è uno spazio d'aria sopra la membrana
                che non è in contatto col fluido. Se la membrana è forata o
                indurita, l'umidità dell'aria entra nel fluido accelerando
                il degrado — argomento trattato nella sezione olio freni.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">04</span>
              <h4>I fori di compensazione e alimentazione — due orifizi critici</h4>
              <p>
                All'interno del cilindro ci sono due fori verso il serbatoio.
                Il foro di alimentazione (feed port, più grande, 2–4 mm) si trova
                leggermente più arretrato: permette al fluido di riempire
                la camera quando il pistone retrocede durante il recupero
                della leva — impedisce che si formi il vuoto. Il foro compensatore
                (più piccolo, 0,4–0,6 mm) è quello critico: è posizionato
                immediatamente davanti alla guarnizione primaria a riposo.
                Questi fori si possono otturare con residui di fluido degradato,
                gomma dalla guarnizione usurata o sporcizia. La pulizia
                di questi orifizi con un filo di nylon di diametro appropriato
                (non con metallo — si allargano e il comportamento cambia)
                è parte integrante della revisione pompa.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── TIPOLOGIE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="tipologieBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tipologieHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Pompa per disciplina</span>
            <h3>Cross, enduro, motard e sportiva — bore, carattere e setup della pompa anteriore</h3>
            <p>
              La pompa anteriore è il componente più critico dell'impianto
              frenante: il 70–80% della forza frenante passa sull'anteriore
              in frenata intensa. La scelta del bore e del tipo di pompa
              cambia profondamente la sensazione di guida nella staccata.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>

            <div className="tipCard tipCross">
              <div className="tipCardTop">
                <span className="tipBadge badgeCross">Cross — MX</span>
                <span className="tipSub">Bore 9–11 mm · massima modulabilità</span>
              </div>
              <h4>Bore piccolo e leva ravvicinata — il feeling conta più della potenza bruta</h4>
              <p>
                Nel cross il freno anteriore si usa in modo preciso ma raramente
                al massimo della potenza frenante — il terreno non compatto
                e l'angolo di sterzata limitano la forza applicabile prima
                del bloccaggio. La priorità è la modulabilità: la capacità
                di applicare esattamente la giusta pressione mentre si sterza
                su terra. Un bore piccolo (9–10 mm Brembo o formula, comune
                su KTM e Husqvarna da cross) offre questa progressività.
                La leva si regola ravvicinata per i guanti spessi da MX —
                tipicamente 2–3 tacche più vicina rispetto alla posizione media.
                Fluido DOT 4 o 5.1 — argomento trattato nella sezione olio freni.
              </p>
            </div>

            <div className="tipCard tipEnduro">
              <div className="tipCardTop">
                <span className="tipBadge badgeEnduro">Enduro</span>
                <span className="tipSub">Bore 10–12 mm · leva ajustable</span>
              </div>
              <h4>Setup versatile — modulabilità sul tecnico, potenza sulle discese veloci</h4>
              <p>
                L'enduro richiede la capacità di frenare potentemente in discesa
                veloce e di modulare con precisione millimetrica su passaggi tecnici
                lenti. Il bore 10–12 mm è il compromesso standard. La caratteristica
                più importante per l'enduro è la leva regolabile in distanza (reach):
                in piedi sulle pedane le dita non raggiungono la leva con la stessa
                geometria che da seduti — la regolazione distanza permette di
                ottimizzare il controllo nelle due posizioni. Le pompe modern-enduro
                (Magura MT7, Brembo PR16-PR19) hanno già questa regolazione integrata.
                La protezione della pompa è fondamentale: una leva piegata
                in caduta può rendere il freno inutilizzabile a metà percorso.
              </p>
            </div>

            <div className="tipCard tipMotard">
              <div className="tipCardTop">
                <span className="tipBadge badgeMotard">Motard</span>
                <span className="tipSub">Bore 12–16 mm · frenata aggressiva</span>
              </div>
              <h4>Potenza massima sull'asfalto — staccate corte e decise</h4>
              <p>
                Sull'asfalto il grip è alto e le staccate sono brutali:
                il freno anteriore va dal rilascio al massimo in frazioni
                di secondo. Un bore maggiore (12–16 mm) riduce la corsa leva
                necessaria a chiudere i pistoni della pinza — la frenata
                parte subito, senza quella progressione iniziale che nel
                fuoristrada è un vantaggio ma in pista è una perdita di tempo.
                Le conversioni motard racing usano spesso pompe radiali (Brembo
                RCS 16 o 19, ISR) che separano il punto di attacco della leva
                dal corpo pompa — argomento trattato nella sezione radiale e assiale.
                La distanza leva si imposta più lontana rispetto al cross:
                guanti sottili da pista, polso in posizione diversa.
              </p>
            </div>

            <div className="tipCard tipSportiva">
              <div className="tipCardTop">
                <span className="tipBadge badgeSportiva">Sportiva / Stradale 2T</span>
                <span className="tipSub">Bore 11–13 mm · impianto integrato</span>
              </div>
              <h4>Sistema equilibrato — la pompa lavora in coppia con la pinza di serie</h4>
              <p>
                Le 2T stradali (Aprilia RS 125, Honda NSR 125, Yamaha TZR,
                Gilera Runner) montano impianti progettati come sistema integrato:
                pompa, pinza e disco sono dimensionati insieme. Sostituire solo
                la pompa con un componente aftermarket di bore diverso senza
                cambiare la pinza può peggiorare la frenata — il rapporto
                di moltiplicazione cambia in un sistema non progettato per quel
                nuovo equilibrio. Le pompe OEM sono assiali standard, con bore
                11–13 mm, serbatoio integrato e leva non regolabile in reach
                sui modelli base. Il miglioramento più efficace su queste moto
                è la revisione dell'impianto esistente (nuove guarnizioni, fluido
                fresco, purga completa) prima di considerare componenti aftermarket.
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
            <span className="captionTag">Confronto bore</span>
            <p>
              Confronto visivo tra pompa da 10 mm (enduro/cross) e da 16 mm
              (motard racing): stessa forza sulla leva (50 N), stessa pinza.
              Con il bore 10 mm la pressione generata è più alta per unità
              di corsa leva ma richiede più spostamento totale della leva
              per spostare lo stesso volume di fluido. Con il bore 16 mm
              la pressione massima è leggermente inferiore ma il volume
              spostato per mm di corsa è molto maggiore — la pinza si chiude
              prima. Il grip sulla leva cambia la forza massima applicabile,
              non il bore.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Schema comparativo — sezione di due pompe con bore diverso (10 mm vs 16 mm): volumi spostati per mm di corsa, curva pressione/corsa sovrapposta</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── FRIZIONE IDRAULICA BLOCK ─────────────────────────────────────── */}
        <motion.div
          className="frizioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="frizioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Applicazione analoga — frizione idraulica</span>
            <h3>Quando il cavo sparisce — il master cylinder applicato alla frizione</h3>
            <p>
              In alcune moto da fuoristrada racing e in alcune conversioni motard
              il tradizionale cavo della frizione è sostituito da un sistema
              idraulico che funziona con lo stesso identico principio del circuito
              frenante. Non è una tecnologia separata: è lo stesso master cylinder,
              la stessa fisica, la stessa manutenzione.
            </p>
          </motion.div>

          <motion.div className="frizioneGrid" variants={cardVariants}>

            <div className="frizioneCard frizioneSchema">
              <div className="frizioneBadgeWrap">
                <span className="frizioneBadge">Come funziona</span>
              </div>
              <h4>Master cylinder al manubrio, slave cylinder alla frizione — zero cavo</h4>
              <p>
                La pompa della frizione idraulica è un master cylinder montato
                sul lato sinistro del manubrio, collegato tramite una tubazione
                in acciaio intrecciato o nylon a un cilindro slave posizionato
                sul coperchio frizione. Quando il pilota tira la leva, il master
                genera pressione idraulica; il fluido spinge lo slave cylinder
                che a sua volta comprime (o rilascia, a seconda del design)
                le molle di pressione della frizione. Il principio è identico
                al freno: legge di Pascal, rapporto di moltiplicazione tra bore
                del master e sezione del slave, guarnizioni primaria e secondaria,
                foro compensatore.
              </p>
              <p>
                Il bore del master della frizione è tipicamente più piccolo
                rispetto a quello del freno (8–10 mm): serve forza ma soprattutto
                modulabilità fine nella zona di slip — quella zona tra frizione
                completamente aperta e completamente chiusa dove il pilota
                controlla la coppia trasmessa.
              </p>
            </div>

            <div className="frizioneCard frizioneVantaggi">
              <div className="frizioneBadgeWrap">
                <span className="frizioneBadge badgeVantaggi">Vantaggi</span>
              </div>
              <h4>Nessun allungamento, feeling costante, nessuna lubrificazione</h4>
              <p>
                Il cavo della frizione è uno dei punti deboli più sottovalutati
                nelle moto da fuoristrada: si allunga nel tempo, cambia feeling
                con la temperatura (si dilata il carter dove scorre), richiede
                lubrificazione regolare e si rompe esattamente quando non dovrebbe.
                Il sistema idraulico elimina tutte queste variabili.
              </p>
              <p>
                Il feeling alla leva rimane identico per tutta la vita del fluido —
                non c'è attrito variabile, non c'è allungamento. Il routing del
                tubo idraulico è flessibile: non dipende dall'angolo come il cavo,
                non si piega e non si spezza. Le conversioni racing (Magura HC,
                Brembo hydraulic clutch, Gustav Magura) sono standard sulle moto
                da enduro hard de alta gamma (KTM Factory, GASGAS EC Factory,
                TM Racing) e frequenti nelle conversioni motard.
              </p>
            </div>

            <div className="frizioneCard frizione Manutenzione">
              <div className="frizioneBadgeWrap">
                <span className="frizioneBadge badgeManutenzione">Manutenzione</span>
              </div>
              <h4>Stessa procedura del freno — spurgo, fluido, guarnizioni</h4>
              <p>
                La manutenzione della frizione idraulica è identica a quella
                del circuito frenante: spurgo periodico per eliminare l'aria
                introdotta dall'umidità del fluido, sostituzione del fluido
                ogni 1–2 anni, verifica delle guarnizioni ad ogni stagione.
                Il fluido usato è tipicamente DOT 4 (verificare sempre il manuale
                — alcuni sistemi usano fluidi minerali incompatibili con il DOT,
                come i sistemi Magura Hymec o i sistemi Sachs).
              </p>
              <p>
                Il gioco libero della leva frizione idraulica ha lo stesso ruolo
                del gioco libero del freno: se è assente, il foro compensatore
                rimane coperto e la frizione si stringe progressivamente —
                la moto striscia o non parte. Verificare il gioco libero (0,5–1 mm
                all'estremità leva) ad ogni manutenzione, esattamente come per
                il freno anteriore.
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
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Foto o schema — sistema frizione idraulica completo: master cylinder sinistro, tubazione, slave cylinder su coperchio frizione; confronto con il classico cavo</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Frizione idraulica</span>
            <p>
              Confronto tra sistema a cavo tradizionale e sistema idraulico.
              Il cavo richiede un percorso rettilineo il più possibile —
              ogni curva aggiunge attrito e variabilità. Il tubo idraulico
              non ha questo limite: può fare angoli stretti senza perdita
              di efficienza. Il master cylinder idraulico (sinistra) è
              fisicamente molto simile alla pompa del freno anteriore —
              stesso principio costruttivo, bore leggermente inferiore.
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
            <span className="sectionLabel">Diagnosi e manutenzione pompa</span>
            <h3>Riconoscere i guasti della pompa — sintomi, misure e intervalli di revisione</h3>
            <p>
              La maggior parte dei problemi dell'impianto frenante viene
              attribuita alla pinza o al fluido, quando spesso ha origine
              nella pompa. Questi sintomi specifici aiutano a isolare la pompa
              come causa prima di aprire la pinza o eseguire uno spurgo.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Il freno si stringe progressivamente a caldo senza toccare la leva</h4>
              <p>
                Il disco si scalda, le pastiglie sfregano leggermente, il disco
                si scalda ancora di più in un ciclo che si auto-alimenta —
                la moto "frena da sola" e il disco può deformarsi o le pastiglie
                bruciarsi. Causa quasi sempre nella pompa: foro compensatore
                occluso (fluido non può refluire quando si espande per il calore),
                gioco libero della leva assente o insufficiente (pistone avanzato
                copre il compensatore anche a riposo), o guarnizione primaria
                gonfia per fluido incompatibile o degradato. Verificare prima
                il gioco libero leva — se è corretto, procedere con la revisione
                delle guarnizioni.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Leva spugnosa o che arriva al manubrio — aria nel circuito o guarnizioni</h4>
              <p>
                Una leva che si comprime senza resistenza prima di generare
                forza frenante indica la presenza di aria nel circuito idraulico
                — l'aria è comprimibile, il fluido no. Se lo spurgo non risolve
                o l'aria torna dopo pochi giorni, la guarnizione secondaria
                del pistone sta permettendo l'ingresso di aria dall'esterno.
                Un'altra causa: le guarnizioni dei pistoncini della pinza
                lasciano passare fluido — il problema è nella pinza, non nella
                pompa, ma i sintomi alla leva sono simili. Osservare se c'è
                fluido intorno alla pompa (guarnizione secondaria) o intorno
                alla pinza per isolare la causa.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Perdita di fluido dal serbatoio o dalla pompa</h4>
              <p>
                Macchie di fluido freni sul manubrio, sulla forcella o sulla
                ruota (color ambra scuro o trasparente, molto scivoloso al tatto,
                attacca la vernice). Provenienza dalla pompa: guarnizione secondaria
                del pistone usurata (perdita dall'uscita posteriore del cilindro)
                o tappo serbatoio non serrato/O-ring del tappo deteriorato.
                Verificare visivamente l'area della pompa dopo una sessione:
                la perdita è spesso minima inizialmente ma accelera con
                l'uso. Non guidare mai con il livello fluido sotto il minimo —
                il rischio è perdita di efficienza frenante improvvisa.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Verifica gioco libero leva — 1–2 mm all'estremità, sempre prima di ogni sessione</h4>
              <p>
                Afferrare la leva e muoverla verso il manubrio: i primi 1–2 mm
                di spostamento devono avvenire senza alcuna resistenza percepibile —
                questo è il gioco libero. Se non c'è gioco, il pistone è già
                avanzato e il foro compensatore è parzialmente coperto: pericolo
                di bloccaggio freno a caldo. Se il gioco è superiore a 3 mm,
                la corsa leva è eccessiva prima di iniziare a frenare.
                La regolazione avviene tramite la piccola vite di registrazione
                sul corpo della pompa (da non confondere con la vite di
                regolazione distanza leva).
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Livello fluido nel serbatoio — interpretare il calo come diagnosi</h4>
              <p>
                Il livello del fluido nel serbatoio scende fisiologicamente
                man mano che le pastiglie si consumano: i pistoncini della pinza
                avanzano occupando volume nel circuito, e il serbatoio lo fornisce.
                Un calo rapido non correlato all'usura delle pastiglie indica
                una perdita. Non rabboccare il serbatoio al massimo se le pastiglie
                sono consumate — quando si sostituiscono le pastiglie i pistoncini
                vengono respinti e il fluido in eccesso overflow dal serbatoio.
                Aprire il serbatoio solo con un panno protettivo sotto: il fluido
                DOT attacca la vernice in pochi minuti.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Revisione pompa — guarnizioni ogni 2–4 anni o al primo sintomo</h4>
              <p>
                Le guarnizioni della pompa non hanno un intervallo chilometrico
                preciso — si degradano per età e qualità del fluido più che
                per usura meccanica. Come linea guida: revisione ogni 2–4 anni
                su moto da strada, ogni 1–2 stagioni intense da fuoristrada.
                I kit guarnizioni includono pistone, guarnizione primaria,
                guarnizione secondaria e O-ring del tappo. La pulizia dei fori
                compensatore e di alimentazione con un filo di nylon del diametro
                appropriato fa parte della revisione — non saltarla. Dopo
                la revisione eseguire sempre uno spurgo completo prima di usare
                la moto in pista.
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
            <span className="cardTag">Bore e sistema</span>
            <h3>Cambiare il bore è una modifica di sistema, non un upgrade isolato</h3>
            <p>
              Montare una pompa con bore diverso su un impianto progettato
              per un bore specifico cambia il rapporto di moltiplicazione
              forza-pressione dell'intero sistema. Con bore maggiore e stessa
              pinza: meno corsa leva, frenata più "pronta" ma meno modulabile;
              pressione massima potenzialmente inferiore perché la forza
              della mano si distribuisce su una sezione maggiore. Con bore
              minore: più corsa leva, più progressività, possibile insufficienza
              di volume spostato se la pinza ha molti pistoncini di grande diametro.
              Prima di cambiare la pompa, calcolare il rapporto di volume
              con la pinza abbinata.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Frizioni idrauliche</span>
            <h3>Il sistema idraulico per la frizione — chi ce l'ha e perché vale la pena</h3>
            <p>
              Le moto di serie con frizione idraulica nel segmento 2T off-road
              includono alcune versioni factory di KTM, GASGAS e Husqvarna,
              e TM Racing su richiesta. Nel mercato aftermarket, Magura HC3
              e HC5, Brembo hydraulic clutch kit e ISR offrono conversioni
              per la maggior parte delle moto. Il costo dell'installazione
              (kit + tubazione + slave) è nell'ordine di 150–400 euro a seconda
              del produttore. La differenza nel quotidiano si sente soprattutto
              nelle sessioni lunghe: il cavo si allunga e varia feeling con
              il calore, il sistema idraulico rimane uguale per tutta la sessione.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>La pompa genera la pressione — gli altri componenti la usano</h3>
            <p>
              Questo capitolo si concentra esclusivamente sul master cylinder:
              come genera la pressione, come è costruito, come si diagnostica
              e come differisce tra le discipline. I componenti a valle —
              pinza e pistoncini (sezione 02), disco e pastiglie (sezione 03),
              il fluido DOT e il suo degrado (sezione 04), la differenza
              tra montaggio radiale e assiale della pompa (sezione 05)
              e la procedura di spurgo completa del circuito (sezione 06) —
              sono trattati nelle sezioni dedicate. La comprensione di questo
              capitolo è il prerequisito per leggere correttamente
              i sintomi dell'intero impianto.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Pompa;
