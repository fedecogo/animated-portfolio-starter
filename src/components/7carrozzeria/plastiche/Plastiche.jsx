import "./plastiche.scss";
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

const Plastiche = () => {
  return (
    <section className="plastiche" id="plastiche">
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
              Carrozzeria — 7.2
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Carene e plastiche nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Le plastiche di una moto a 2 tempi non sono semplice
              estetica — sono elementi funzionali progettati per
              proteggere i componenti meccanici, guidare i flussi d'aria
              di raffreddamento, assorbire gli impatti senza trasmettere
              carichi al telaio e resistere al contatto con fango, terra,
              benzina e lubrificanti. Nella moto da fuoristrada la
              carrozzeria è spesso il primo componente a fare contatto
              con il terreno in caso di caduta.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Ogni disciplina — enduro, motocross, stradale, motard —
              ha sviluppato una filosofia di carrozzeria distinta, con
              materiali, forme e sistemi di fissaggio ottimizzati per
              le sollecitazioni specifiche di quell'utilizzo. Conoscere
              queste differenze permette di scegliere il kit aftermarket
              giusto, di montare le plastiche correttamente e di
              intervenire in modo efficace dopo ogni caduta o usura.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia della carrozzeria</span>
              <h3>I quattro elementi principali del kit</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Parafango anteriore — protegge la forcella dal fango e guida il flusso verso il radiatore</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Fiancatine — coprono il serbatoio e il telaio laterale, proteggono pilota e motore</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Codino / coda — protegge il parafango posteriore e l'airbox dall'ingresso di detriti</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Parafango posteriore — evita la proiezione di fango sul pilota e sul motore in marcia</span>
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
              <span className="placeholderText">Immagine / GIF — esploso kit plastiche moto 2T enduro con nomenclatura</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Kit completo</span>
            <p>
              Esploso di un kit plastiche completo: parafango anteriore,
              fiancatine destra e sinistra con grafiche integrate, codino
              posteriore e parafango posteriore. I punti di fissaggio —
              viti M6 con boccole in plastica anti-vibrazione — sono
              distribuiti in modo da permettere la deformazione elastica
              del pannello senza trasmettere forze al telaio in caso
              di impatto laterale o frontale.
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
            <h3>Polipropilene, HDPE, carbonio — cosa si nasconde dietro la grafica</h3>
            <p>
              Il materiale delle plastiche determina il comportamento
              in caduta, la resistenza ai raggi UV, la compatibilità
              con gli idrocarburi e la possibilità di riparazione a caldo.
              La maggior parte dei piloti non ci pensa — ma la differenza
              tra un pannello che si rompe in mille pezzi e uno che
              si deforma e ritorna in forma è tutta nel materiale
              scelto in fase di progettazione.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgePP">Polipropilene</span>
                <h4>PP — lo standard universale di serie</h4>
              </div>
              <p>
                Il polipropilene è il materiale più diffuso per le
                plastiche di serie. Ha un ottimo equilibrio tra
                flessibilità, resistenza agli urti e costo di
                produzione. La sua caratteristica principale è la
                memoria elastica — deformato da un impatto a bassa
                velocità tende a ritornare alla forma originale senza
                rompersi. Resiste bene agli idrocarburi e al fango,
                ma degrada sotto l'esposizione prolungata ai raggi UV:
                diventa fragile e opaco in 3 – 5 anni se non trattato
                con prodotti protettivi specifici.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeHDPE">HDPE</span>
                <h4>HDPE — per i parafanghi più resistenti</h4>
              </div>
              <p>
                Il polietilene ad alta densità è usato principalmente
                per i parafanghi anteriori e posteriori nei quali la
                resistenza agli impatti è prioritaria rispetto alla
                precisione dimensionale. L'HDPE è più duro del PP ma
                meno rigido — assorbe meglio i colpi diretti da sassi
                e detriti. È praticamente impossibile incollarlo
                con adesivi comuni, ma si ripara facilmente con la
                saldatura a caldo tramite termosaldatore. Resiste
                meglio del PP all'invecchiamento UV nel lungo periodo.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeRinforzato">PP Rinforzato</span>
                <h4>PP con fibra di vetro — la scelta aftermarket racing</h4>
              </div>
              <p>
                Il polipropilene rinforzato con fibra di vetro (PP-GF)
                o con talco (PP-T) è il materiale usato dai migliori
                produttori aftermarket (Acerbis, UFO, Polisport, Cycra).
                L'aggiunta di rinforzo aumenta la rigidità del pannello
                a parità di spessore, migliorando la precisione
                dimensionale e la resistenza alle deformazioni permanenti
                da calore del motore. Più pesante del PP standard ma
                con una durata nettamente superiore in condizioni
                agonistiche intense.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeCarbon">Fibra di carbonio</span>
                <h4>Carbonio — leggerezza assoluta nel racing</h4>
              </div>
              <p>
                I kit in fibra di carbonio sono la scelta delle
                preparazioni racing di alto livello dove ogni grammo
                ha un valore. La riduzione di peso rispetto al PP
                è del 40 – 60% a parità di superficie e rigidità.
                Il carbonio non è flessibile come la plastica —
                in caso di impatto diretto si rompe in modo netto
                anziché deformarsi, il che può essere pericoloso
                se i frammenti raggiungono l'impianto frenante o
                la trasmissione. Il costo proibitivo e la fragilità
                agli impatti lo rendono inadatto all'uso amatoriale.
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
            <span className="captionTag">Confronto materiali</span>
            <p>
              Test di deformazione a impatto tra PP standard, PP rinforzato
              e fibra di carbonio: il PP si deforma e ritorna in forma,
              il PP rinforzato si deforma meno ma può incrinarsi negli
              angoli vivi, il carbonio si rompe in modo netto. La scelta
              del materiale deve essere calibrata sulla disciplina e
              sulla frequenza degli impatti attesi durante l'utilizzo.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — confronto deformazione PP vs carbonio a impatto</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── DISCIPLINE BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="disciplineBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="disciplineHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Discipline</span>
            <h3>Enduro, cross, stradale, motard — quattro filosofie di carrozzeria</h3>
            <p>
              Ogni disciplina ha sviluppato nel tempo una carrozzeria
              con caratteristiche distinte, nate dalle esigenze specifiche
              di quell'utilizzo. Conoscere queste differenze aiuta a
              capire perché un kit enduro non funziona bene su una
              motard e viceversa — non è solo una questione di look,
              ma di ingegneria applicata alla disciplina.
            </p>
          </motion.div>

          <motion.div className="disciplineGrid" variants={cardVariants}>

            <div className="disciplineCard disciplineEnduro">
              <div className="disciplineCardTop">
                <span className="disciplineBadge badgeEnduro">Enduro</span>
                <span className="disciplineTag">Off-road — bosco e pietraie</span>
              </div>
              <h4>Carena enduro — flessibile, stretta, con numero gara</h4>
              <p>
                La carena da enduro è progettata per essere la più
                stretta possibile tra le ginocchia del pilota, facilitando
                il cambio di posizione rapido in piedi sulle pedane.
                I pannelli laterali (fiancatine) sono sottili e privi
                di spigoli vivi che potrebbero agganciarsi ai rami.
                Il parafango anteriore è alto per evitare il contatto
                con la ruota nel fango profondo. Le piastre portanumero
                sono integrate nella carena e le plastiche sono
                spesso trasparenti nella zona airbox per controllare
                il filtro dell'aria senza smontare nulla.
              </p>
            </div>

            <div className="disciplineCard disciplineCross">
              <div className="disciplineCardTop">
                <span className="disciplineBadge badgeCross">Motocross</span>
                <span className="disciplineTag">Off-road — pista battuta</span>
              </div>
              <h4>Carena MX — sagomata per il moto del pilota in gara</h4>
              <p>
                La carena da motocross è progettata per la libertà
                di movimento del pilota nei salti e nelle curve veloci.
                I pannelli sono più ampi rispetto all'enduro per
                proteggere meglio il motore dalle proiezioni di terra
                della pista. Le piastre portanumero frontale e laterale
                sono elementi distinti con numeri grandi e leggibili
                dai commissari di gara. Il parafango posteriore è
                più corto — non serve protezione dal fango profondo
                su una pista battuta. I colori vivaci e i numeri
                grandi sono parte integrante del regolamento di gara.
              </p>
            </div>

            <div className="disciplineCard disciplineStradale">
              <div className="disciplineCardTop">
                <span className="disciplineBadge badgeStradale">Stradale / Naked</span>
                <span className="disciplineTag">Asfalto — uso quotidiano</span>
              </div>
              <h4>Carena stradale — protezione termica e aerodinamica</h4>
              <p>
                Le moto a 2 tempi stradali (principalmente 125 cc e
                le storiche 50 cc sportive) usano carene con funzione
                aerodinamica e di protezione termica. Le plastiche
                incanalano l'aria verso il radiatore del liquido di
                raffreddamento e allontanano il calore del cilindro
                dalla gamba del pilota. Il cupolino anteriore riduce
                la resistenza aerodinamica e protegge il pilota dal
                vento. I materiali sono più rigidi rispetto all'off-road
                per mantenere la forma a velocità autostradali e
                il fissaggio è più preciso per evitare vibrazioni.
              </p>
            </div>

            <div className="disciplineCard disciplineMotard">
              <div className="disciplineCardTop">
                <span className="disciplineBadge badgeMotard">Motard / Supermoto</span>
                <span className="disciplineTag">Asfalto — derivato off-road</span>
              </div>
              <h4>Carena motard — essenziale, compatta, convertita</h4>
              <p>
                La motard nasce spesso dalla conversione di una base
                enduro o cross sull'asfalto: ruote da 17" con pneumatici
                stradali e carena ridotta al minimo. Le plastiche
                sono tagliate o sostituite con versioni più compatte
                per abbassare il centro di massa visivo e ridurre
                gli ingombri nel traffico urbano. Non serve il parafango
                alto da fango — viene sostituito con uno parafango
                stretto e basso. Lo stile aggressivo e spigoloso è
                parte dell'identità visiva della categoria, mutuato
                dalla supermoto da competizione.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── GRAFICHE BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="graficheBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="graficheHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Grafiche e kit</span>
            <h3>OEM, aftermarket e personalizzazione — tre livelli di scelta</h3>
            <p>
              La scelta del kit plastiche va ben oltre il colore preferito.
              La compatibilità dimensionale con il telaio, la qualità
              dei punti di fissaggio e la disponibilità dei ricambi
              nel lungo periodo sono fattori che fanno la differenza
              tra un kit che dura una stagione e uno che dura cinque anni.
            </p>
          </motion.div>

          <motion.div className="graficheGrid" variants={cardVariants}>

            <div className="graficheCard">
              <div className="graficheVisual graficheOEM">
                <span className="graficheRatio">OEM</span>
                <span className="graficheEx">Originale</span>
              </div>
              <h4>Plastiche originali — fit perfetto, costo elevato</h4>
              <p>
                Le plastiche originali del costruttore garantiscono
                il fit perfetto con tutti i punti di fissaggio, la
                compatibilità con le viti originali e le specifiche
                tecniche validate dal produttore. Sono la scelta
                corretta per moto in garanzia o quando si vuole
                mantenere il valore di rivendita. Il costo è
                notevolmente superiore all'aftermarket — un kit
                completo originale può costare 3 – 4 volte il
                corrispondente aftermarket di qualità.
              </p>
            </div>

            <div className="graficheCard">
              <div className="graficheVisual graficheAftermarket">
                <span className="graficheRatio">After</span>
                <span className="graficheEx">Aftermarket</span>
              </div>
              <h4>Kit aftermarket — qualità alta a prezzo inferiore</h4>
              <p>
                I produttori aftermarket di qualità (Acerbis, UFO,
                Polisport, Cycra, AMS) producono kit con tolleranze
                dimensionali paragonabili all'originale e materiali
                spesso superiori in termini di resistenza agli UV
                e alle cadute. La disponibilità di colori e grafiche
                è enormemente maggiore rispetto all'OEM. Il gap
                di qualità rispetto all'originale si percepisce
                sui punti di fissaggio secondari — si consiglia
                di sostituire le boccole in plastica originali
                e le viti alla prima rimontatura.
              </p>
            </div>

            <div className="graficheCard">
              <div className="graficheVisual graficheRacing">
                <span className="graficheRatio">Race</span>
                <span className="graficheEx">Kit gara</span>
              </div>
              <h4>Grafiche adesive — la personalizzazione più diffusa</h4>
              <p>
                Le grafiche adesive pretagliate (MX Graphics, D'Cor,
                Factory Effex) sono il modo più economico per
                personalizzare la moto senza sostituire le plastiche.
                Realizzate in vinile da 4 – 6 mm di spessore con
                laminazione UV, resistono al contatto con benzina,
                fango e olio. Prima dell'applicazione le plastiche
                vanno sgrassate con IPA puro e scaldate leggermente
                con pistola termica per favorire l'adesione agli
                angoli. Le bolle d'aria si eliminano con una spatola
                morbida partendo dal centro verso i bordi.
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
              <span className="placeholderText">Immagine / GIF — confronto carene enduro, cross, stradale e motard affiancate</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Confronto discipline</span>
            <p>
              Le stesse moto a 2 tempi con carene di disciplina diversa
              affiancate: le differenze di altezza del parafango,
              larghezza delle fiancatine, posizione delle piastre
              portanumero e profilo del codino posteriore mostrano
              come ogni disciplina abbia plasmato la carrozzeria
              attorno alle proprie esigenze tecniche e regolamentari.
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
            <h3>Crepe, scolorimento e fissaggi — gestire le plastiche nel tempo</h3>
            <p>
              Le plastiche degradano per tre cause principali: gli
              impatti meccanici (cadute, sassi), il calore del motore
              e i raggi UV. Riconoscere il tipo di degrado permette
              di scegliere tra riparazione, trattamento protettivo
              o sostituzione preventiva prima che il danno diventi
              un problema di sicurezza.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Crepe da impatto — identificare la gravità</h4>
              <p>
                Le crepe superficiali (hairline cracks) nelle plastiche
                in PP non compromettono la funzionalità ma tendono
                a propagarsi con gli impatti successivi. Una crepa che
                attraversa completamente un pannello richiede
                riparazione o sostituzione — non è solo estetica.
                Le crepe nei punti di fissaggio sono le più critiche:
                un pannello che si stacca durante la guida può
                incastrarsi nella ruota anteriore con conseguenze
                pericolose per il pilota.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Scolorimento e opacità da raggi UV</h4>
              <p>
                Il PP non trattato esposto ai raggi UV ingiallisce
                e diventa opaco in 2 – 4 anni. La superficie tende
                a diventare ruvida al tatto (chalk effect) e perde
                la resistenza agli impatti del 30 – 40%. Il trattamento
                preventivo con prodotti siliconi specifici per plastiche
                off-road (Plexus, Motul E2, Muc-Off) rallenta
                significativamente questo processo e mantiene l'aspetto
                originale molto più a lungo.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Controllo dei punti di fissaggio</h4>
              <p>
                I dadi a T (T-nuts) inseriti nelle plastiche tendono
                a svitarsi o a strappare il loro alloggiamento nelle
                cadute ripetute. Prima di ogni uscita importante
                verificare che tutti i punti di fissaggio siano integri
                e che le viti entrino dritte senza forzatura. Una
                vite montata storta stressa il punto di fissaggio
                ad ogni vibrazione — in breve tempo crea un foro
                allargato che rende impossibile il fissaggio sicuro
                del pannello.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Deformazione termica — fiancatine e codino</h4>
              <p>
                Le fiancatine in prossimità del cilindro e del tubo
                di scarico possono deformarsi permanentemente per
                esposizione prolungata al calore. Una fiancatina
                deformata non aderisce più correttamente ai punti
                di fissaggio sul telaio, vibrando a regimi specifici
                e rischiando di venire in contatto con parti calde.
                Il rimedio temporaneo è il raddrizzamento a caldo
                con pistola termica; quello definitivo è la sostituzione
                con plastiche di materiale più resistente al calore.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Riparazione a caldo — quando si può e quando no</h4>
              <p>
                Il PP e l'HDPE si riparano con il termosaldatore:
                si pulisce la crepa, si apre leggermente con un
                cutter, si riempie con bacchetta dello stesso materiale
                fusa a 280 – 320 °C e si leviga a caldo. Il risultato
                è strutturalmente solido ma visibile. Non si ripara:
                una crepa passante in prossimità di un punto di
                fissaggio (il pannello si spezza sotto sforzo),
                un pannello con deformazione permanente e un PP
                in stadio avanzato di degrado UV (si rompe di nuovo
                immediatamente).
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Sostituzione preventiva — la logica del racing</h4>
              <p>
                In ambito agonistico i kit plastiche si sostituiscono
                ogni stagione indipendentemente dall'aspetto visivo —
                il PP invecchiato ha una resistenza agli impatti
                inferiore e una caduta che su plastiche nuove
                lascerebbe un graffio, su plastiche vecchie può
                causare la rottura del pannello. Per l'uso amatoriale
                intenso ogni 2 – 3 stagioni è un intervallo ragionevole.
                I parafanghi, soggetti a impatti diretti continui
                con sassi e rami, si sostituiscono più frequentemente
                delle fiancatine.
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
            <span className="cardTag">Montaggio</span>
            <h3>Smontaggio e rimontaggio — l'ordine corretto conta</h3>
            <p>
              Lo smontaggio delle plastiche segue sempre l'ordine
              inverso del montaggio: prima il codino, poi le fiancatine,
              poi i parafanghi. Le viti in plastica (Speed Fasteners)
              si rimuovono con un cacciavite a taglio largo ruotando
              un quarto di giro in senso antiorario — forzarle le rompe.
              Al rimontaggio non serrare eccessivamente le viti M6
              nei punti di fissaggio in plastica: il serraggio corretto
              è "snug" (a contatto senza forzatura), non stretto.
              Le boccole anti-vibrazione in gomma vanno sostituite
              se appiattite o indurite — riducono le cricche da fatica
              nei pannelli di almeno il 40%.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Protezione</span>
            <h3>Frame guards e protezioni aggiuntive — il secondo livello</h3>
            <p>
              I frame guards (protezioni telaio in silicone o neoprene)
              e i radiator guards (protezioni radiatore in alluminio
              o polietilene) completano la carrozzeria nei punti non
              coperti dalle plastiche standard. I frame guards proteggono
              il telaio dalle graffiature delle stivali e dalla
              proiezione di fango abrasivo. I radiator guards prevengono
              i danni al radiatore nei fuoristrada rocciosi — un
              radiatore forato in gara significa ritiro immediato.
              Le protezioni paramotore in polietilene rinforzato
              proteggono il carter dalle pietre negli enduro
              con parterre rocciosi.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>Scegliere il kit aftermarket giusto — cosa verificare</h3>
            <p>
              Prima di acquistare un kit aftermarket verificare:
              anno e modello esatto della moto (le versioni cambiano
              anno per anno anche nella stessa generazione), la
              presenza di tutti i fori di fissaggio correttamente
              posizionati, la compatibilità con il serbatoio e
              l'airbox originali e la disponibilità di ricambi
              singoli (non dover riacquistare l'intero kit per
              un solo pannello rotto). I kit Acerbis e UFO sono
              i più completi in termini di disponibilità per
              moto a 2 tempi anni '90 – 2000, molto richieste
              nel mercato del restauro e della preparazione vintage.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Plastiche;
