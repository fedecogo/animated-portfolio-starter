import "./pneumatici.scss";
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

const Pneumatici = () => {
  return (
    <section className="pneumatici" id="pneumatici">
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
              Il pneumatico —<br />l'unico contatto con il terreno
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il pneumatico è l'interfaccia tra tutto il sistema meccanico della
              moto e il terreno. Ogni forza — trazione, frenata, sterzo —
              passa attraverso un'area di contatto grande quanto un palmo di mano.
              La scelta del pneumatico, la sua pressione, il suo stato
              influenzano tutto ciò che senti sulla moto.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Nel fuoristrada il pneumatico lavora in parallelo con le sospensioni —
              è il primo ammortizzatore. La pressione di gonfiaggio regola quanta
              deformazione il pneumatico può fare: troppo bassa aumenta il grip
              ma espone il cerchio alle ammaccature; troppo alta riduce la
              deformazione, abbassa il grip su terreni irregolari e indurisce
              l'assorbimento delle micro-asperità.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del pneumatico</span>
              <h3>Esterno vs interno — due zone diverse</h3>
            </div>
            <div className="comparePanel">
              <div className="compareSide compareEsterno">
                <span className="compareLabel labelEsterno">Esterno</span>
                <ul className="compareList">
                  <li>Battistrada — tasselli che mordono il terreno</li>
                  <li>Mescola — composto che determina il grip adesivo</li>
                  <li>Cintura — nylon o aramide, rigidità radiale</li>
                </ul>
              </div>
              <div className="compareDivider" />
              <div className="compareSide compareInterno">
                <span className="compareLabel labelInterno">Interno</span>
                <ul className="compareList">
                  <li>Carcassa — strati (ply) che danno forma e resistenza</li>
                  <li>Fianchi — zona di flessione laterale</li>
                  <li>Tallone — aggancio metallico al cerchio</li>
                </ul>
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
            <h3>Com'è fatto — battistrada, carcassa e tallone</h3>
            <p>
              Ogni zona del pneumatico ha una funzione precisa.
              Il battistrada genera il grip meccanico e deve espellere il fango;
              la carcassa distribuisce i carichi e determina la rigidità strutturale;
              il tallone è il punto critico di tenuta al cerchio —
              specialmente alle pressioni basse tipiche del fuoristrada.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costBattistrada">B</span>
              <h4>Battistrada — altezza, passo e morfologia dei tasselli</h4>
              <p>
                I tasselli variano per altezza (12–28 mm), passo e forma.
                Tasselli alti e distanziati mordono e spostano il fango;
                tasselli bassi e ravvicinati aumentano la superficie di contatto
                su terreno compatto. La mescola del battistrada è formulata
                con gomme di diversa durezza: morbida offre grip superiore
                ma si usura più velocemente; dura dura di più ma richiede
                temperature più alte per lavorare al meglio.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costCarcassa">C</span>
              <h4>Carcassa — ply rating, rigidità e assorbimento</h4>
              <p>
                La carcassa è la struttura portante: una rete di corde tessili
                (nylon, poliestere o aramide) annegate nella gomma.
                Il ply rating indica il numero di strati — più strati
                significano più resistenza ai tagli laterali da rocce e radici
                ma anche più peso e meno flessibilità. I pneumatici da enduro
                duro tendono a carcasse rinforzate (4–6 ply); quelli da MX puro
                privilegiano leggerezza (2–4 ply).
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costTallone">T</span>
              <h4>Tallone — aggancio al cerchio e tenuta a bassa pressione</h4>
              <p>
                Il tallone è l'anello di filo d'acciaio (o kevlar nei modelli
                tubeless-ready) che aggrappa il pneumatico alla flangia del cerchio.
                A pressioni basse (0,6–0,8 bar) il tallone lavora meccanicamente
                sul cerchio — una sede del tallone danneggiata o fuori misura
                può causare lo smontaggio del pneumatico in curva.
                La dimensione del tallone deve corrispondere esattamente
                al diametro nominale del cerchio.
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
              <span className="placeholderText">Sezione trasversale del pneumatico — battistrada, cintura, carcassa e tallone in evidenza</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Struttura interna</span>
            <p>
              La sezione tagliata mostra come ogni strato contribuisce alla
              rigidità complessiva. La cintura in aramide limita la deformazione
              radiale a velocità elevata; i ply della carcassa danno forma
              e resistenza strutturale; la gomma del tallone è formulata
              più dura per resistere all'usura da montaggio e smontaggio ripetuto.
            </p>
          </div>
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
            <span className="sectionLabel">Tipologie di terreno</span>
            <h3>Scegliere il pneumatico giusto — soft, intermediate, hard</h3>
            <p>
              Non esiste il pneumatico universale. Ogni design è ottimizzato
              per una specifica tipologia di terreno. Usare il pneumatico sbagliato
              non è solo una questione di performance — su un terreno molto diverso
              da quello per cui è stato progettato il comportamento
              diventa imprevedibile.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>
            <div className="tipologiaCard">
              <span className="tipologiaTag">Terreno morbido (MX Soft)</span>
              <h4>Tasselli alti — fango e terra sciolta</h4>
              <p>
                Tasselli alti (22–28 mm), spaziati, a forma di pagaia.
                Mordono il fango, spostano il materiale e si autopuliscono
                durante la rotazione. Su terreno duro scivolano, si usurano
                velocemente e surriscaldano la gomma.
              </p>
            </div>

            <div className="tipologiaCard">
              <span className="tipologiaTag">Intermedio (MX Intermediate)</span>
              <h4>Tasselli medi — terreni variabili</h4>
              <p>
                Tasselli medi (16–20 mm), spaziatura media. Compromesso
                per terreni che cambiano nel corso della gara.
                La scelta standard per l'enduro cross dove il terreno
                varia nel percorso.
              </p>
            </div>

            <div className="tipologiaCard">
              <span className="tipologiaTag">Terreno duro (MX Hard)</span>
              <h4>Tasselli bassi — ghiaia e compatto</h4>
              <p>
                Tasselli bassi (12–16 mm), ravvicinati, con bordi affilati.
                Massimizzano il contatto su terreno compatto e grippano
                sulla ghiaia. Su terreno morbido nuotano senza mordere —
                zero trazione e zero controllo.
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
            <span className="captionTag">Footprint</span>
            <p>
              L'impronta del pneumatico (footprint) cambia forma e area
              al variare della pressione: a pressione bassa si allarga,
              aumentando il grip meccanico su terreno morbido; a pressione
              alta si restringe e si allunga, ottimizzando il rotolamento
              su hard pack. Capire la forma dell'impronta è il modo più
              diretto per interpretare il setup del pneumatico.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Impronta (footprint) a diverse pressioni su carta carbone — confronto visivo</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── PRESSIONE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="pressioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="pressioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Pressione di gonfiaggio</span>
            <h3>Bassa, media, alta — come la pressione cambia il comportamento</h3>
            <p>
              La pressione è il parametro di setup più accessibile e più impattante.
              Non è "più bassa = più grip" in assoluto: c'è un range ottimale
              per ogni combinazione di terreno, peso del pilota e stile di guida.
              Uscire da questo range in entrambe le direzioni ha conseguenze
              precise e misurabili.
            </p>
          </motion.div>

          <motion.div className="pressioneGrid" variants={cardVariants}>

            <div className="distCard distBassa">
              <div className="distCardTop">
                <span className="distBadge badgeBassa">Bassa</span>
                <span className="distAlbero">0.6–0.8 bar — fuoristrada morbido</span>
              </div>
              <h4>Footprint allargato — grip massimo, rischio pinch flat</h4>
              <p>
                A pressione bassa il pneumatico si deforma attorno agli ostacoli,
                aumentando l'area di contatto e il grip meccanico. Lavora come
                ammortizzatore secondario riducendo la trasmissione delle
                vibrazioni al telaio. Il rischio è il pinch flat: un impatto
                brusco comprime il pneumatico fino a toccare il cerchio,
                tagliando la camera d'aria tra la gomma e la flangia.
                Con mousse non c'è questo rischio ma il feeling è diverso.
              </p>
            </div>

            <div className="distCard distMedia">
              <div className="distCardTop">
                <span className="distBadge badgeMedia">Media</span>
                <span className="distAlbero">0.9–1.1 bar — terreno misto</span>
              </div>
              <h4>Compromesso tra grip, rotolamento e protezione del cerchio</h4>
              <p>
                La pressione media bilancia grip, resistenza al rotolamento e
                protezione del cerchio. È il punto di partenza per la maggior
                parte delle sessioni — si affina poi in base al feedback del
                pneumatico. Un pneumatico che tende a muoversi sul cerchio
                in curva indica pressione troppo bassa; uno che trasmette ogni
                sasso senza filtrare indica pressione troppo alta.
              </p>
            </div>

            <div className="distCard distAlta">
              <div className="distCardTop">
                <span className="distBadge badgeAlta">Alta</span>
                <span className="distAlbero">1.2–1.5 bar — hard pack veloce</span>
              </div>
              <h4>Footprint ridotto — rotolamento veloce, meno grip irregolare</h4>
              <p>
                A pressione alta il pneumatico è più rigido, si deforma meno
                e oppone meno resistenza al rotolamento — il pneumatico
                "corre" meglio su superfici lisce e compatte. Il grip su
                terreno irregolare cala perché l'area di contatto si riduce
                e il pneumatico non riesce ad adattarsi alle micro-asperità.
                Il cerchio è meglio protetto dagli impatti.
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
            <span className="sectionLabel">Diagnosi e usura</span>
            <h3>Riconoscere l'usura del pneumatico — e quando sostituire</h3>
            <p>
              Il pneumatico comunica il suo stato attraverso sintomi visivi precisi.
              Imparare a leggere l'usura non significa solo sapere quando cambiarlo —
              significa capire se la pressione, il terreno o lo stile di guida
              erano corretti durante l'uso.
            </p>
          </motion.div>

          <motion.div className="diagnGrid" variants={cardVariants}>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Usura centrale del battistrada — pressione troppo alta</h4>
              <p>
                I tasselli centrali si consumano più velocemente dei laterali.
                La pressione eccessiva concentra il carico nella zona centrale
                dell'impronta lasciando i tasselli laterali quasi inutilizzati.
                Ridurre la pressione di 0,1–0,2 bar e verificare dopo la
                sessione successiva.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Usura laterale del battistrada — pressione troppo bassa</h4>
              <p>
                I tasselli laterali si consumano più dei centrali.
                Il pneumatico è sovra-deformato: i fianchi toccano il terreno
                in modo anomalo. Aumentare la pressione di 0,1–0,15 bar.
                Verificare anche la presenza di micro-tagli alla base dei fianchi.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Tasselli arrotondati — usura avanzata o terreno sbagliato</h4>
              <p>
                Tasselli con punte arrotondate hanno perso la capacità di mordere.
                Se l'usura è uniforme, il pneumatico è a fine vita.
                Se è asimmetrica o concentrata su un lato, valutare correttezza
                della pressione e del tipo di terreno affrontato.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Altezza residua dei tasselli — quando il pneumatico è esaurito</h4>
              <p>
                Misurare l'altezza residua dei tasselli centrali con un calibro.
                Altezza inferiore a un terzo di quella originale: sostituire.
                Su un posteriore MX soft questo corrisponde a 4–8 ore di gara
                intensa — i pneumatici da fuoristrada si consumano molto più
                velocemente di quelli stradali.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Ispezione della carcassa — tagli e imperfezioni</h4>
              <p>
                Ad ogni cambio pneumatico: ispezionare il fianco per tagli,
                incisioni e gonfiature. Un taglio che arriva alla carcassa
                tessile non può essere riparato — pneumatico da sostituire.
                Una gonfiatura (bubbling) indica delamination della carcassa:
                compromessa strutturalmente e pericolosa.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeIntervallo">Intervallo</span>
              <h4>Vita operativa — ore e condizioni di sostituzione</h4>
              <p>
                Posteriore MX in uso intenso: 3–6 ore su terreno abrasivo
                (sabbia fine, ghiaia), 8–15 ore su terreno morbido.
                Un anteriore dura il doppio. Indipendentemente dall'usura
                visiva, sostituire un pneumatico che ha passato 12 mesi
                montato — la gomma invecchia e perde elasticità
                anche senza essere usata.
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
            <span className="cardTag">Mousse</span>
            <h3>Inserto solido — addio forature, feeling diverso</h3>
            <p>
              Il mousse sostituisce l'aria con un inserto in schiuma
              poliuretanica. Nessun rischio di foratura, nessuna gestione
              della pressione. Il feeling è più rigido e meno adattabile —
              molti piloti lo preferiscono nelle gare di enduro hard
              dove una foratura significherebbe ritiro. Richiede
              lubrificazione specifica al montaggio.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Dimensioni</span>
            <h3>80/100-21 — come si legge la misura</h3>
            <p>
              80 = larghezza nominale in mm; 100 = rapporto di aspetto
              (altezza fianco / larghezza × 100%); 21 = diametro cerchio
              in pollici. Standard MX/enduro: 80/100-21 (anteriore),
              100/90-19 o 110/100-18 (posteriore). Misure più larghe
              aumentano il volume d'aria e potenzialmente il grip,
              ma richiedono clearance adeguata al telaio.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Montaggio</span>
            <h3>Senso di rotazione — la freccia conta</h3>
            <p>
              Ogni pneumatico ha una freccia di rotazione impressa sul fianco.
              Montarlo in senso inverso inverte la direzione di autopulizia
              dei tasselli — sul fango il pneumatico porta dentro il materiale
              invece di espellerlo. Usare sempre leve in plastica e pasta
              per talloni per non danneggiare la carcassa durante il montaggio.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Pneumatici;
