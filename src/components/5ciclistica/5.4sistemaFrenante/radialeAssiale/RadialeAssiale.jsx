import "./radialeAssiale.scss";
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

const RadialeAssiale = () => {
  return (
    <section className="radialeAssiale" id="radialeAssiale">
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
              Sistema frenante — Radiale e assiale
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Radiale e assiale — non è una moda, è il modo in cui la forza entra nella forcella
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Quando si parla di pinza assiale o pinza radiale, molti si fermano
              all’estetica o al fatto che la soluzione radiale venga associata
              alle moto sportive e al racing. In realtà la differenza profonda
              non è stilistica: è strutturale. Cambia la direzione dei bulloni
              di fissaggio, cambia il modo in cui la coppia frenante viene
              scaricata nella forcella, cambia la rigidità del sistema e cambia
              perfino il tipo di deformazione che si genera sotto carico.
              Questo è il cuore del capitolo: capire il percorso della forza.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La pinza assiale è il montaggio tradizionale: i bulloni lavorano
              con un orientamento parallelo all’asse ruota e il corpo pinza
              viene vincolato in modo semplice, economico e perfettamente adeguato
              per moltissime applicazioni stradali e off-road. La pinza radiale
              nasce invece per irrigidire il collegamento pinza-forcella:
              i bulloni sono orientati lungo il raggio del disco, il carico
              genera meno momento flettente sul supporto e il sistema oppone
              più resistenza alla torsione. Il risultato non è “più freno”
              in senso assoluto: è un freno più consistente, più diretto,
              più preciso nel modo in cui restituisce informazioni alla mano.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del confronto</span>
              <h3>Quattro idee chiave per leggere davvero radiale vs assiale</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Assiale — i bulloni di fissaggio sono disposti parallelamente
                  all’asse ruota; la pinza è vincolata in modo tradizionale e
                  il supporto deve contrastare una componente di flessione più evidente
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Radiale — i bulloni seguono la direzione del raggio disco;
                  la coppia frenante si scarica con una geometria più rigida,
                  riducendo la deformazione elastica del gruppo pinza-supporto-forcella
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Feeling — meno flessione significa leva più consistente,
                  risposta più netta e migliore leggibilità del contatto
                  pastiglia-disco nelle frenate intense e ripetute
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Adattabilità — il montaggio radiale facilita l’uso di distanziali
                  e adattatori per cambiare diametro disco; il sistema assiale
                  è meno flessibile nelle conversioni prestazionali importanti
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
                Schema comparativo — forcella con pinza assiale e forcella con pinza radiale;
                mostrare orientamento dei bulloni, direzione della coppia frenante,
                flessione del supporto e vettori di carico
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Percorso della forza</span>
            <p>
              Il disco trascina in avanti la pinza nel senso di rotazione ruota.
              La differenza tra assiale e radiale sta nel modo in cui questa
              tendenza viene contrastata dal supporto sulla forcella. Nella
              soluzione assiale il carico genera più leva sul piedino forcella;
              nella soluzione radiale la struttura lavora con un allineamento
              più favorevole, e il sistema flette meno. La pressione idraulica
              nella pinza è la stessa a parità di pompa, pinza e pastiglie:
              ciò che cambia è la deformazione strutturale che avviene dopo.
            </p>
          </div>
        </motion.div>

        {/* ── PRINCIPI FISICI BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="principiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="principiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fisica del fissaggio</span>
            <h3>Direzione del carico, momento flettente, rigidità e feedback — i quattro concetti decisivi</h3>
            <p>
              Radiale e assiale non si capiscono guardando solo i bulloni:
              si capiscono seguendo la coppia frenante dal disco alla forcella.
              Ogni differenza di feeling nasce qui, prima ancora di parlare
              di pompa, pastiglie o fluido.
            </p>
          </motion.div>

          <motion.div className="principiGrid" variants={cardVariants}>
            <div className="principiCard">
              <span className="principiIdx">01</span>
              <h4>La coppia frenante cerca sempre di ruotare la pinza</h4>
              <p>
                Quando le pastiglie stringono il disco, tra materiale d’attrito
                e pista frenante si genera una forza tangenziale opposta al moto
                della ruota. Questa forza, applicata a una certa distanza dal centro
                del disco, produce una coppia frenante. La pinza, di conseguenza,
                tende a “camminare” nel verso di rotazione del disco: il supporto
                sulla forcella deve assorbire questo tentativo di rotazione.
                Non esiste pinza che frena senza trasferire questa coppia
                al telaio tramite la forcella.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">02</span>
              <h4>Montaggio assiale — più leva sul supporto, più flessione elastica</h4>
              <p>
                Nel montaggio assiale i bulloni sono orientati parallelamente
                all’asse ruota. La forza che trascina la pinza non si allinea
                in modo ideale alla direzione del fissaggio: questo genera
                una combinazione di taglio e momento flettente sul piedino forcella
                e sulle orecchie di supporto della pinza. Il sistema resta
                assolutamente valido, ma sotto carichi elevati si deforma
                leggermente di più. Questa deformazione non è un cedimento:
                è una flessione elastica che assorbe una piccola parte della corsa leva.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">03</span>
              <h4>Montaggio radiale — il carico entra più dritto nella struttura</h4>
              <p>
                Nel montaggio radiale i bulloni sono disposti in direzione
                più coerente con il raggio del disco. La coppia frenante viene
                quindi contrastata con un percorso dei carichi più diretto:
                il supporto lavora con meno leva sfavorevole e meno flessione.
                I bulloni e il piedino forcella non smettono di subire stress,
                ma il tipo di stress è più favorevole alla rigidità del sistema.
                Per questo, a parità di resto dell’impianto, la radiale restituisce
                una risposta più solida e più immediata.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">04</span>
              <h4>Feeling alla leva — la differenza vera è nella consistenza, non nella magia</h4>
              <p>
                La frase corretta non è “la radiale frena di più”, ma
                “la radiale spreca meno corsa in deformazione strutturale”.
                Se pompa, pinza, disco, pastiglie e gomma sono identici,
                la potenza teorica dipende soprattutto dalla pressione idraulica
                e dal coefficiente d’attrito. Il vantaggio della radiale emerge
                nella ripetibilità e nel feedback: staccate forti, carichi termici
                alti, forcella molto sollecitata. In uso stradale normale,
                la differenza esiste ma non sempre è enorme; in pista o motard
                tirato diventa molto più leggibile.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CONFRONTO BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="confrontoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="confrontoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Confronto diretto</span>
            <h3>Assiale e radiale messi faccia a faccia — geometria, vantaggi, limiti e contesto d’uso</h3>
            <p>
              Il modo giusto di leggere questa differenza è evitare i luoghi comuni:
              l’assiale non è “vecchio e scarso”, il radiale non è “racing quindi sempre meglio”.
              Sono due soluzioni con logiche diverse, e la bontà di ciascuna
              dipende dal carico che il sistema deve sopportare.
            </p>
          </motion.div>

          <motion.div className="confrontoGrid" variants={cardVariants}>
            <div className="compareCard compareAssiale">
              <div className="compareTop">
                <span className="compareBadge badgeAssiale">Assiale</span>
                <span className="compareSub">Tradizionale · semplice · efficace</span>
              </div>
              <h4>Geometria classica — compatta, robusta, perfetta dove la rigidità estrema non è prioritaria</h4>
              <p>
                La pinza assiale è montata con bulloni paralleli all’asse ruota.
                È una soluzione estremamente diffusa perché è semplice da produrre,
                tollera bene l’uso quotidiano, richiede meno precisione costruttiva
                sul piedino forcella e ha costi inferiori. Su molte moto stradali,
                125, enduro leggere e modelli più datati, è più che sufficiente.
              </p>
              <p>
                Dove paga qualcosa è nelle frenate molto violente e ripetute:
                il supporto può flettere leggermente di più, e quel piccolo movimento
                elastico si traduce in un feeling un filo meno “murato” alla leva.
                Non significa scarso rendimento; significa che il sistema entra prima
                nella sua finestra di deformazione percepibile.
              </p>
            </div>

            <div className="compareCard compareRadiale">
              <div className="compareTop">
                <span className="compareBadge badgeRadiale">Radiale</span>
                <span className="compareSub">Rigida · precisa · orientata al carico</span>
              </div>
              <h4>Geometria moderna — il supporto lavora meglio quando il disco viene davvero caricato</h4>
              <p>
                La pinza radiale nasce per rendere più rigido il collegamento
                tra pinza e forcella. In una staccata violenta, quando la forza
                tangenziale sul disco cresce e la forcella subisce torsione,
                il fissaggio radiale oppone più resistenza alla deformazione.
                Questo rende la leva più stabile e la risposta più omogenea
                da inizio a fine frenata.
              </p>
              <p>
                È il motivo per cui la si trova su sportive, superbike, conversioni
                motard prestazionali e front-end pensati per impieghi aggressivi.
                Non è un guadagno “magico” di cavalli frenanti: è una riduzione
                delle perdite elastiche strutturali in un punto critico del sistema.
              </p>
            </div>

            <div className="compareCard compareUso">
              <div className="compareTop">
                <span className="compareBadge badgeUso">Uso reale</span>
                <span className="compareSub">Conta il contesto, non il marketing</span>
              </div>
              <h4>Su strada la differenza esiste, ma va letta con onestà</h4>
              <p>
                In un uso urbano o turistico, con pneumatici stradali, velocità
                moderate e frenate sporadicamente intense, una buona pinza assiale
                ben revisionata può offrire una frenata eccellente. Se invece
                la moto vive di staccate ripetute, trasferimenti di carico violenti,
                forcella sostenuta e impianto molto sollecitato, la radiale
                mostra il suo vantaggio con più chiarezza.
              </p>
              <p>
                La differenza vera si percepisce soprattutto dove il sistema lavora
                vicino ai suoi limiti: asfalto con tanto grip, pista, motard,
                sportiva tirata. È lì che la struttura più rigida diventa un vantaggio
                leggibile e non solo una voce sulla scheda tecnica.
              </p>
            </div>

            <div className="compareCard compareVerdetto">
              <div className="compareTop">
                <span className="compareBadge badgeVerdetto">Verdetto tecnico</span>
                <span className="compareSub">Meglio chiedersi “perché”, non “quale fa figo”</span>
              </div>
              <h4>La radiale è superiore come architettura strutturale, ma l’assiale resta una scelta sensata</h4>
              <p>
                Se l’obiettivo è massima rigidità, precisione di attacco e possibilità
                di evoluzione del front-end, il radiale è la soluzione superiore.
                Se l’obiettivo è un impianto corretto, affidabile, meno costoso,
                leggero da gestire e pienamente adeguato a potenze e carichi più bassi,
                l’assiale continua ad avere perfettamente senso.
              </p>
              <p>
                La domanda giusta quindi non è “radiale o assiale in assoluto?”,
                ma “quale geometria serve davvero a questa moto, con questa forcella,
                questo disco, questo utilizzo e questo livello di carico?”.
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
            <span className="captionTag">Bulloni e momenti</span>
            <p>
              In uno schema corretto andrebbero evidenziati due aspetti:
              nell’assiale il disco tende a generare un momento più sfavorevole
              rispetto al supporto, mentre nel radiale la linea di reazione del fissaggio
              è più vicina alla direzione in cui il sistema vuole opporsi al trascinamento
              della pinza. La sensazione alla leva nasce anche da questo:
              meno elasticità del supporto, meno volume “perso” in deformazione.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Schema tecnico — confronto dei bulloni assiali e radiali con frecce
                di reazione, zona di flessione del piedino forcella e deformazione elastica
                esagerata per mostrare il principio
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── ADAPTER BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="adapterBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="adapterHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Adattatori e diametro disco</span>
            <h3>Perché il radiale è amato nelle conversioni — non solo rigidità, ma anche geometria più gestibile</h3>
            <p>
              Uno dei grandi vantaggi pratici del montaggio radiale è la facilità
              con cui la pinza può essere riposizionata per lavorare con dischi
              di diametro diverso. Qui non stiamo parlando della qualità della pinza:
              stiamo parlando di quanto è semplice e corretto spostarla nello spazio
              senza compromettere l’allineamento col disco.
            </p>
          </motion.div>

          <motion.div className="adapterGrid" variants={cardVariants}>
            <div className="adapterCard">
              <span className="adapterIdx">01</span>
              <h4>Più grande è il disco, più la pinza deve salire radialmente</h4>
              <p>
                Se si passa, ad esempio, da un disco da 260 mm a uno da 320 mm,
                il raggio utile aumenta di 30 mm. La pinza deve quindi essere
                spostata verso l’esterno per centrare correttamente la pista frenante.
                Nel montaggio radiale questo spostamento è coerente con la direzione
                stessa dei bulloni: la regolazione è più naturale e strutturalmente pulita.
              </p>
            </div>

            <div className="adapterCard">
              <span className="adapterIdx">02</span>
              <h4>Adattatore non vuol dire distanziale casuale — offset e centraggio sono critici</h4>
              <p>
                Un adattatore corretto non deve solo spostare la pinza “più in alto”:
                deve anche mantenerla perfettamente centrata rispetto allo spessore
                del disco. Un errore di offset laterale porta consumo anomalo
                delle pastiglie, trascinamento, surriscaldamento e sensazione
                di frenata sporca. Ogni adattatore è quindi una parte strutturale,
                non un accessorio decorativo.
              </p>
            </div>

            <div className="adapterCard">
              <span className="adapterIdx">03</span>
              <h4>Motard e conversioni racing — il caso tipico dove il radiale ha senso</h4>
              <p>
                Nel motard si passa spesso a dischi più grandi, pinze più rigide
                e forcelle più sostenute. Qui il radiale diventa estremamente comodo:
                consente di usare staffe dedicate, mantenere precisione geometrica
                e sfruttare davvero il disco maggiorato senza introdurre un punto
                debole evidente sul supporto. È uno dei motivi per cui molte
                conversioni serie puntano su front-end radiale completo.
              </p>
            </div>

            <div className="adapterCard">
              <span className="adapterIdx">04</span>
              <h4>Compatibilità reale — pinza, forcella, disco e cerchio devono parlare la stessa lingua</h4>
              <p>
                Non basta avere una pinza radiale bella da vedere. Serve una forcella
                con piedino predisposto o una soluzione ingegneristicamente corretta
                che mantenga allineamento, luce col cerchio, posizione della pista
                frenante e rigidità del complesso. Le conversioni improvvisate
                possono peggiorare il feeling o introdurre pericoli reali.
                In un impianto frenante, ogni millimetro fuori posto si sente.
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
            <span className="sectionLabel">Per disciplina</span>
            <h3>Cross, enduro, motard e sportiva — dove ha senso davvero una pinza radiale?</h3>
            <p>
              Come sempre, la soluzione migliore dipende dal carico, dal grip
              disponibile e dal tipo di frenata che la moto affronta.
              Questo è il punto che evita di trasformare una scelta tecnica
              in una semplice moda.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>
            <div className="tipCard tipCross">
              <div className="tipCardTop">
                <span className="tipBadge badgeCross">Cross — MX</span>
                <span className="tipSub">Assiale quasi sempre sufficiente</span>
              </div>
              <h4>Su terra il limite è spesso il grip, non la rigidità estrema del supporto</h4>
              <p>
                Nel cross la frenata anteriore deve essere precisa ma il fondo
                cedevole riduce la quantità di forza realmente scaricabile a terra
                prima del bloccaggio. Per questo un buon impianto assiale è spesso
                più che adeguato: semplice, leggero, facile da proteggere e coerente
                con le esigenze del mezzo. La priorità è la modulabilità su fondo instabile,
                non la rigidità assoluta da staccata asfaltata.
              </p>
            </div>

            <div className="tipCard tipEnduro">
              <div className="tipCardTop">
                <span className="tipBadge badgeEnduro">Enduro</span>
                <span className="tipSub">Assiale dominante · radiale raro</span>
              </div>
              <h4>Robustezza, semplicità e protezione contano più del front-end racing</h4>
              <p>
                In enduro il freno deve lavorare bene nel tecnico, nel fango,
                nei trasferimenti e nelle cadute. Una soluzione assiale resta
                la più logica sulla maggior parte delle moto: meno delicata,
                più compatta, perfettamente funzionale. Il radiale può comparire
                in alcune conversioni specialistiche o supermotard-oriented,
                ma non è la priorità strutturale del mondo enduro classico.
              </p>
            </div>

            <div className="tipCard tipMotard">
              <div className="tipCardTop">
                <span className="tipBadge badgeMotard">Motard</span>
                <span className="tipSub">Radiale quasi ideale</span>
              </div>
              <h4>Asfalto, grip alto, disco grande — qui il vantaggio della radiale diventa concreto</h4>
              <p>
                Il motard è forse il terreno dove questa differenza si sente di più.
                Disco anteriore maggiorato, staccate cattive, trasferimento di carico
                enorme e forcella molto sollecitata rendono la rigidità del supporto
                una variabile reale. La pinza radiale, soprattutto con forcella
                e adattatore corretti, restituisce un attacco più netto e una
                leva più solida nelle frenate da vera pista.
              </p>
            </div>

            <div className="tipCard tipSportiva">
              <div className="tipCardTop">
                <span className="tipBadge badgeSportiva">Sportiva / Stradale</span>
                <span className="tipSub">Radiale sensata su moto prestazionali</span>
              </div>
              <h4>Quando la moto nasce per caricare forte l’anteriore, la struttura più rigida ha senso</h4>
              <p>
                Sulle sportive moderne, soprattutto con gomme larghe, forcelle
                rovesciate rigide e velocità elevate, la pinza radiale è diventata
                quasi lo standard perché il contesto giustifica i vantaggi che offre.
                Su moto meno potenti o stradali tranquille, invece, una buona assiale
                può rimanere una scelta perfettamente razionale e sufficiente.
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
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Foto o schema — forcella motard con pinza radiale e disco 320 mm;
                confronto a fianco con forcella assiale e disco più piccolo,
                mostrando posizione della pinza rispetto al raggio disco
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Applicazione reale</span>
            <p>
              In una conversione motard ben fatta la pinza radiale non è un vezzo:
              dialoga con un disco più grande, con un piedino forcella progettato
              per quel tipo di carico e con una guida che sfrutta veramente
              l’anteriore. Su una moto stradale leggera o su un uso tranquillo,
              la superiorità geometrica resta vera, ma il suo vantaggio pratico
              può essere molto meno marcato.
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
            <span className="sectionLabel">Controlli e diagnosi</span>
            <h3>Come si capisce se il problema è nel fissaggio, nell’adattatore o nella rigidità del gruppo</h3>
            <p>
              Radiale e assiale non si giudicano solo sulla carta: si leggono
              anche dai sintomi. Alcuni problemi di consumo, feeling e trascinamento
              nascono da geometrie sbagliate o da supporti non perfettamente in asse.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>
            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Feeling incoerente dopo uso intenso — il supporto può stare flettendo troppo</h4>
              <p>
                Se la leva cambia risposta soprattutto nelle frenate dure e ravvicinate,
                e pompa, pinza e spurgo sono in ordine, una parte della sensazione
                può venire dalla struttura del montaggio. Su sistemi assiali molto sollecitati,
                forcelle datate o adattatori discutibili, la flessione del supporto
                può diventare percepibile e togliere precisione alla fase iniziale
                o al mantenimento della frenata.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Consumo pastiglie irregolare — possibile pinza fuori centro rispetto al disco</h4>
              <p>
                Quando una pastiglia lavora più dell’altra o la pista frenante
                non viene sfruttata in modo uniforme, il problema può essere
                nell’offset della pinza. È tipico delle conversioni con adattatori
                non perfetti o di montaggi eseguiti senza verificare centraggio,
                planarità e parallelismo. La pinza deve risultare centrata al decimo,
                non “più o meno vicina”.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Disco che scalda anomalo dopo conversione — la pinza può non lavorare in asse</h4>
              <p>
                Se dopo un upgrade disco/pinza il disco tende a scaldare troppo,
                trascinare o lucidare male una zona della pista, occorre controllare
                posizione radiale della pinza, offset laterale e luce minima
                tra corpo pinza e disco. Un fissaggio rigido ma geometria sbagliata
                è peggio di un sistema meno sofisticato ma correttamente allineato.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Controllo centraggio pinza — luce simmetrica rispetto al disco</h4>
              <p>
                Guardando frontalmente, il disco deve passare al centro della finestra
                della pinza con luce il più possibile simmetrica tra i due lati.
                Se la pinza è più vicina da una parte, le pastiglie inizieranno
                a lavorare in modo diseguale e il ritorno elastico dei pistoncini
                non sarà uniforme. Questa verifica è fondamentale in ogni conversione.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Controllo coppia bulloni e planarità superfici — il fissaggio deve essere perfetto</h4>
              <p>
                Un sistema radiale non perdona superfici sporche, vernici spesse,
                bave o serraggi sbagliati. Il bullone va stretto alla coppia corretta
                e il piano di appoggio deve essere pulito e uniforme. Se il fissaggio
                non lavora pienamente in battuta, la rigidità teorica del sistema
                si perde subito e possono comparire micro-movimenti indesiderati.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Ad ogni smontaggio ruota o intervento sul freno — ricontrollare sempre allineamento e bulloneria</h4>
              <p>
                Ogni volta che si smonta la ruota anteriore, si sostituisce il disco,
                si revisiona la forcella o si interviene sulla pinza, vale la pena
                verificare di nuovo centraggio, scorrimento libero del disco tra
                le pastiglie e coppia di serraggio dei fissaggi. Nei sistemi radiali
                prestazionali questa verifica non è pignoleria: è manutenzione corretta.
              </p>
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
            <span className="cardTag">Idea chiave</span>
            <h3>Radiale non aumenta da sola la pressione: aumenta la qualità del supporto che la gestisce</h3>
            <p>
              La pressione frenante nasce dalla pompa e viene usata dalla pinza.
              Il montaggio radiale non crea pressione extra: riduce il modo in cui
              la struttura disperde parte della risposta in flessione. È un vantaggio
              di rigidità e coerenza, non un trucco idraulico.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Conversioni</span>
            <h3>Una conversione fatta male peggiora tutto, anche partendo da componenti migliori</h3>
            <p>
              Una pinza radiale eccellente montata con adattatore sbagliato,
              offset errato o forcella non pensata per quel carico può offrire
              un feeling peggiore di una buona assiale OEM montata correttamente.
              Nel freno conta il sistema, non il nome inciso sul componente.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>Qui il focus è sul fissaggio pinza-forcella — non su pompa, disco, pastiglie o fluido</h3>
            <p>
              Questo capitolo si concentra sulla differenza architetturale tra
              assiale e radiale: direzione dei bulloni, percorso del carico,
              rigidità, adattatori e contesto d’uso. La pinza come organo idraulico,
              il disco, il materiale d’attrito e il fluido appartengono alle
              sezioni dedicate e qui vengono richiamati solo quando servono
              per capire il ruolo del fissaggio.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default RadialeAssiale;