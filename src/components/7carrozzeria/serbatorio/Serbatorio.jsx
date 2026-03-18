import "./serbatorio.scss";
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

const Serbatorio = () => {
  return (
    <section className="serbatorio" id="serbatorio">
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
              Carrozzeria — 7.1
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il serbatorio nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il serbatorio è il punto di partenza di tutta la catena
              alimentare del motore a 2 tempi. Non è un semplice contenitore
              di benzina — nelle moto da fuoristrada e da competizione è
              un componente progettato per ottimizzare la distribuzione del
              peso, garantire l'alimentazione in ogni condizione di guida e
              resistere alle sollecitazioni strutturali trasmesse dal telaio.
              La sua capacità, la sua posizione e il materiale scelto
              influenzano direttamente il comportamento dinamico della moto.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Nel motore a 2 tempi la benzina non è soltanto carburante —
              è anche il vettore dell'olio che lubrifica il motore. La miscela
              carburante-olio deve arrivare al carburatore in modo costante,
              senza bolle d'aria, senza surriscaldarsi e senza subire
              separazioni di fase. Un serbatorio mal progettato o mal
              posizionato può causare cali di alimentazione, perdita di
              potenza o addirittura danni al motore per carenza di lubrificante.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del serbatorio</span>
              <h3>I quattro elementi che lo compongono</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Corpo — struttura principale che contiene il carburante, in HDPE o alluminio</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Bocchettone — apertura di riempimento con tappo a tenuta, con o senza riserva integrata</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Rubinetto / valvola — regola il flusso verso il carburatore; include posizione RES (riserva)</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Tubo di sfiato — compensa la pressione interna ed evita deformazioni per variazioni termiche</span>
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
              <span className="placeholderText">Immagine / GIF — serbatorio 2T con bocchettone, rubinetto e tubo sfiato</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Struttura</span>
            <p>
              Vista esterna e sezione del serbatorio: il corpo principale
              in plastica ad alta densità, il bocchettone con il tappo
              a pressione o a vite con sfiato integrato, il rubinetto
              sul fondo con le posizioni ON, OFF e RES e il tubo di
              ritorno dal carburatore presente nei sistemi con pompa
              a membrana.
            </p>
          </div>
        </motion.div>

        {/* ── MATERIALI BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="materialiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="materialiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Materiali</span>
            <h3>HDPE, alluminio, carbonio — la scelta del materiale cambia tutto</h3>
            <p>
              Il materiale del serbatorio non determina solo il peso —
              influenza la resistenza agli urti, la compatibilità chimica
              con gli idrocarburi e gli additivi, la facilità di riparazione
              e il costo complessivo. Nelle moto da competizione la scelta
              del materiale è parte integrante del progetto del telaio
              e del bilanciamento dei pesi sull'asse longitudinale.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeHDPE">HDPE</span>
                <h4>Polietilene ad alta densità — lo standard di serie</h4>
              </div>
              <p>
                L'HDPE è il materiale più usato per i serbatoi di serie.
                È leggero, resistente agli urti, economico da produrre
                per stampaggio a soffiatura e chimicamente inerte agli
                idrocarburi. Il suo limite è la permeabilità ai vapori
                di benzina nel lungo periodo — i serbatoi HDPE moderni
                montano uno strato barriera interno in EVOH. La
                temperatura massima è circa 60 – 70 °C prima che
                inizi la deformazione permanente.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeAlluminio">Alluminio</span>
                <h4>Lamiera alluminio — il classico off-road</h4>
              </div>
              <p>
                I serbatoi in alluminio saldato erano lo standard
                dell'enduro e del motocross fino agli anni '90. Offrono
                eccellente resistenza agli idrocarburi, nessuna
                permeabilità ai vapori e ottima dissipazione termica.
                In caso di ammaccatura si possono raddrizzare —
                operazione impossibile con la plastica. Sono più
                pesanti dell'HDPE e ancora diffusi nelle preparazioni
                racing artigianali e nei serbatoi maggiorati per
                il lungo percorso.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeCarbon">Fibra di carbonio</span>
                <h4>Carbonio — il massimo in leggerezza</h4>
              </div>
              <p>
                I serbatoi in fibra di carbonio sono la scelta dei
                motori da GP e delle preparazioni racing di alto livello.
                La riduzione di peso rispetto all'HDPE è del 30 – 40%
                a parità di volume. Il carbonio richiede un liner interno
                in resina o in HDPE per il contatto diretto con i
                carburanti. Molto costosi, non riparabili in caso di
                rottura e fragili agli impatti puntuali sul corpo.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeTitanio">Titanio</span>
                <h4>Titanio — esclusivo uso motorsport mondiale</h4>
              </div>
              <p>
                I serbatoi in lamiera di titanio combinano leggerezza
                prossima all'alluminio con resistenza meccanica
                superiore. Il titanio è totalmente inerte agli
                idrocarburi e resiste alle temperature estreme del
                vano motore. Il costo è proibitivo — riservato a
                moto da competizione di livello mondiale. La saldatura
                del titanio richiede attrezzatura specializzata
                in atmosfera inerte per evitare ossidazione.
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
            <span className="captionTag">Sezione trasversale</span>
            <p>
              Sezione della parete di un serbatorio HDPE multi-strato:
              lo strato esterno principale in polietilene ad alta densità,
              lo strato barriera centrale in EVOH che blocca la permeazione
              dei vapori di benzina e lo strato interno di tenuta. Nei
              serbatoi da competizione il liner in resina vinilestere
              sostituisce il layer EVOH con migliore resistenza chimica
              alle miscele racing ad alto ottano.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — sezione parete serbatorio HDPE multi-strato</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── CAPACITÀ BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="capacitaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="capacitaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Capacità</span>
            <h3>Volume e autonomia — scegliere la capienza giusta per la disciplina</h3>
            <p>
              La capacità del serbatorio è un compromesso tra autonomia
              e peso. Ogni litro di benzina pesa circa 0,74 kg — un
              serbatorio da 10 litri pieno aggiunge 7,4 kg alla moto,
              concentrati in un punto specifico del telaio. La posizione
              del serbatorio rispetto al baricentro influenza la dinamica
              in modo significativo: più alto è il peso, più instabile
              diventa la moto nelle curve veloci.
            </p>
          </motion.div>

          <motion.div className="capacitaGrid" variants={cardVariants}>

            <div className="capacitaCard capacitaSmall">
              <span className="capacitaBadge badgeMx">Motocross / MX</span>
              <h4>Serbatorio standard MX — 5 – 8 litri</h4>
              <p>
                Le moto da motocross utilizzano serbatoi di piccola
                capacità perché le manche durano 30 – 35 minuti con
                un consumo medio di 2 – 3 litri. Un serbatorio piccolo
                significa peso minore, centro di massa più basso e
                maggiore maneggevolezza. L'autonomia non è una priorità
                — la moto non esce mai dalla pista. I serbatoi aftermarket
                per il MX competitivo arrivano fino a 6,5 litri con forme
                ottimizzate per la posizione in sella del pilota.
              </p>
              <div className="capacitaSpec">
                <span className="capacitaSpecLabel">Autonomia tipica</span>
                <span className="capacitaSpecVal">30 – 40 min di gara</span>
              </div>
              <div className="capacitaSpec">
                <span className="capacitaSpecLabel">Peso benzina a pieno</span>
                <span className="capacitaSpecVal">3,7 – 5,9 kg</span>
              </div>
            </div>

            <div className="capacitaCard capacitaLarge">
              <span className="capacitaBadge badgeEnduro">Enduro / Cross-country</span>
              <h4>Serbatorio maggiorato — 9 – 14 litri</h4>
              <p>
                L'enduro richiede autonomia per prove di 2 – 4 ore
                con rifornimenti consentiti solo in punti prestabiliti.
                I serbatoi maggiorati in plastica o alluminio arrivano
                fino a 14 litri. Il peso aggiuntivo della benzina è
                compensato dal vantaggio tattico di non dover rallentare
                per il rifornimento. Nei rally raid i serbatoi speciali
                integrati nel telaio possono superare i 20 litri per
                le tappe senza assistenza tecnica.
              </p>
              <div className="capacitaSpec">
                <span className="capacitaSpecLabel">Autonomia tipica</span>
                <span className="capacitaSpecVal">2 – 4 ore di gara</span>
              </div>
              <div className="capacitaSpec">
                <span className="capacitaSpecLabel">Peso benzina a pieno</span>
                <span className="capacitaSpecVal">6,7 – 10,4 kg</span>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── CARBURANTE BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="carburanteBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="carburanteHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Carburante</span>
            <h3>Ottano, miscela e additivi — cosa mettere nel serbatorio del 2T</h3>
            <p>
              Nel motore a 2 tempi il carburante non è solo un vettore
              energetico — è parte integrante del sistema di lubrificazione.
              La scelta sbagliata dell'ottano o della percentuale di olio
              in miscela può causare danni irreversibili al motore in
              pochi minuti. Il serbatorio è il primo anello di questa
              catena critica.
            </p>
          </motion.div>

          <motion.div className="carburanteGrid" variants={cardVariants}>

            <div className="carburanteCard">
              <div className="carburanteVisual carburanteStandard">
                <span className="carburanteRatio">RON 95 – 98</span>
                <span className="carburanteEx">Stradale</span>
              </div>
              <h4>Benzina verde — uso normale e amatoriale</h4>
              <p>
                La benzina verde con RON 95 o 98 è adatta per i motori
                a 2 tempi di serie con rapporti di compressione fino a
                12 – 13:1. L'ottano determina la resistenza alla
                detonazione — un motore preparato con rapporto di
                compressione elevato può detonare su RON 95, causando
                danni istantanei al pistone. La scelta del RON deve
                sempre essere verificata sul manuale del costruttore
                prima di fare il pieno.
              </p>
            </div>

            <div className="carburanteCard">
              <div className="carburanteVisual carburanteRacing">
                <span className="carburanteRatio">RON 100+</span>
                <span className="carburanteEx">Racing</span>
              </div>
              <h4>Benzina racing — per motori preparati</h4>
              <p>
                Le benzine racing (Aspen, VP Racing, Elf HTX) con
                RON 100 – 102 permettono rapporti di compressione più
                elevati senza detonazione, con guadagni di potenza
                misurabili sulle preparazioni serie. Contengono additivi
                specifici per la protezione delle superfici metalliche
                e la stabilità all'ossidazione durante lo stoccaggio.
                Non migliorano le prestazioni su motori di serie
                non modificati — è benzina sprecata.
              </p>
            </div>

            <div className="carburanteCard">
              <div className="carburanteVisual carburanteMiscela">
                <span className="carburanteRatio">1:25 – 1:50</span>
                <span className="carburanteEx">Miscela</span>
              </div>
              <h4>Rapporto di miscela — il parametro più critico</h4>
              <p>
                Il rapporto olio-benzina (da 1:25 per il rodaggio a
                1:50 per uso normale) è il parametro più critico per
                la durata del motore. Troppo poco olio significa
                lubrificazione insufficiente e grippaggio quasi certo.
                Troppo olio significa candela sporca, camera di
                combustione incrostata e potenza ridotta. Il rapporto
                corretto dipende dall'olio usato, dal regime di utilizzo
                e dalle indicazioni del costruttore.
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
              <span className="placeholderText">Immagine / GIF — confronto serbatori MX vs enduro e posizione sul telaio</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Posizione e baricentro</span>
            <p>
              La posizione del serbatorio sul telaio e il suo impatto
              sul baricentro della moto: a serbatorio pieno il peso
              è concentrato in alto, alterando la risposta dinamica
              nelle curve e nella gestione del posteriore. Le moto da
              enduro moderno tendono a serbatoi bassi e allungati per
              mantenere il baricentro più vicino possibile all'asse ruote.
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
            <span className="sectionLabel">Diagnosi e manutenzione</span>
            <h3>Perdite, incrostazioni e degrado — riconoscere i problemi del serbatorio</h3>
            <p>
              Il serbatorio è un componente che molti tendono a
              dimenticare finché non perde o non crea problemi di
              alimentazione. Una manutenzione periodica semplice può
              prevenire quasi tutti i guasti più comuni e garantire
              un'alimentazione affidabile in ogni condizione di gara
              e di uso.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Perdita di carburante dal tappo o dai raccordi</h4>
              <p>
                La perdita di benzina dal tappo o dai raccordi dei
                tubi è quasi sempre causata dal degrado delle guarnizioni
                in gomma. La benzina altera le proprietà elastiche
                della gomma nel tempo — la guarnizione si indurisce,
                si restringe e perde la tenuta. La sostituzione preventiva
                della guarnizione del tappo ogni 2 – 3 anni è la
                soluzione più semplice ed economica disponibile.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Odore di benzina persistente a moto ferma</h4>
              <p>
                Un odore persistente di benzina con la moto ferma indica
                quasi sempre una micro-perdita non immediatamente visibile.
                Nei serbatoi in HDPE invecchiato la plastica può presentare
                micro-cricche da stress nelle zone di fissaggio al telaio.
                In questi casi la sostituzione del serbatorio è l'unica
                soluzione sicura — non tentare riparazioni con collanti
                su serbatoi in pressione di vapore.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Ispezione interna — ossidazione e incrostazioni</h4>
              <p>
                I serbatoi in alluminio sono soggetti a ossidazione
                interna con benzina stantia. La benzina invecchiata
                forma depositi resinosi che ostruiscono il rubinetto
                e il filtro del carburante. L'ispezione si esegue
                svuotando il serbatorio e illuminando l'interno:
                depositi bruni o neri richiedono pulizia con solvente
                specifico compatibile prima di rimettere la moto in uso.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Stato del rubinetto e del filtro interno</h4>
              <p>
                Il rubinetto del serbatorio contiene un filtro a rete
                che trattiene impurità e particelle di ossidazione.
                Un rubinetto parzialmente ostruito causa cali di
                alimentazione sotto carico — il carburatore si svuota
                più velocemente di quanto il rubinetto riesca a
                rifornirlo. La pulizia o sostituzione del rubinetto
                e del filtro va eseguita ogni stagione o ogni 100 ore.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Controllo del tubo di sfiato</h4>
              <p>
                Il tubo di sfiato permette l'ingresso d'aria mentre
                la benzina defluisce verso il motore. Un tubo ostruito
                (sporco, schiacciato o con acqua accumulata) crea una
                depressione interna che rallenta progressivamente il
                flusso di carburante — il motore perde potenza fino
                a che non si stacca e si riattacca il tubo. Controllare
                che lo sfiato sia libero ad ogni manutenzione programmata.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Stoccaggio invernale — benzina stantia e degrado HDPE</h4>
              <p>
                La benzina si degrada in 30 – 60 giorni perdendo
                volatilità e formando depositi resinosi. Per lo
                stoccaggio invernale si aggiunge uno stabilizzante
                oppure si svuota il serbatorio, si avvia il motore
                fino all'esaurimento della benzina residua nel
                carburatore e si ripone la moto asciutta. L'HDPE
                esposto ai raggi UV degrada in 5 – 8 anni — scolorimento
                e opacità superficiale sono i primi segnali visibili.
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
            <h3>Pulizia e conservazione del serbatorio nel tempo</h3>
            <p>
              La pulizia del serbatorio richiede solventi compatibili
              con il materiale: acetone o MEK per l'interno dei serbatoi
              in alluminio, acqua e detersivo neutro per l'HDPE —
              i solventi aggressivi attaccano la plastica e degradano
              lo strato barriera. Dopo la pulizia si asciuga completamente
              con aria compressa prima di rimontare il rubinetto.
              I serbatoi in alluminio possono essere trattati internamente
              con resina epossidica per sigillare piccole porosità
              o micro-cricche da stanchezza del metallo.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>Serbatori aftermarket — cosa guadagni e cosa verificare</h3>
            <p>
              I serbatoi aftermarket (IMS, Clarke, Acerbis, Polisport)
              offrono capacità maggiorate fino a 14 litri per enduro
              e rally. Prima dell'acquisto verificare: la compatibilità
              con il telaio, la posizione del bocchettone rispetto alla
              strumentazione, la posizione del rubinetto e la presenza
              del tubo di sfiato correttamente dimensionato. Alcuni
              serbatoi maggiorati spostano il centro di massa verso
              l'alto — valutare l'impatto sulla dinamica prima di
              procedere all'acquisto.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Sicurezza</span>
            <h3>Sicurezza e normative — benzina e rischio incendio</h3>
            <p>
              La benzina ha un punto di infiammabilità di circa -43 °C —
              i vapori sono presenti e pericolosi anche a temperatura
              ambiente. Qualsiasi intervento sul serbatorio che richieda
              calore (saldatura, ripristino) deve essere eseguito solo
              dopo averlo svuotato, sciacquato con acqua e ventilato
              completamente per almeno 30 minuti. Non usare fiamme libere
              in prossimità di benzina — anche una micro-perdita può
              innescare un incendio istantaneo difficile da controllare.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Serbatorio;
