import "./sella.scss";
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

const Sella = () => {
  return (
    <section className="sella" id="sella">
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
              Carrozzeria — 7.3
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La sella nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La sella è il punto di contatto diretto tra pilota e moto —
              e nelle moto a 2 tempi da fuoristrada questa relazione è
              più intensa che altrove. Un pilota di enduro trascorre ore
              in piedi sulle pedane durante le prove speciali, ma nei
              trasferimenti, nelle discese tecniche e nei momenti di
              recupero la sella diventa l'unico punto d'appoggio.
              La sua altezza, la sua forma e la durezza dell'imbottitura
              influenzano direttamente la fatica muscolare, la capacità
              di gestire la moto in spazi stretti e la sicurezza nelle
              cadute.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Nelle moto a 2 tempi da cross e da circuito la sella è
              progettata per un utilizzo completamente diverso: il
              pilota si siede raramente durante la guida — la usa come
              riferimento per il posizionamento del corpo nei salti,
              come leva per trasferire peso al retrotreno in uscita
              di curva e come punto di appoggio per i trasferimenti
              del peso laterali. Capire per quale disciplina è stata
              progettata la sella aiuta a scegliere il ricambio
              o il custom giusto.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia della sella</span>
              <h3>I quattro strati che la compongono</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Scocca — base rigida in PP o ABS che trasferisce i carichi ai punti di fissaggio sul telaio</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Imbottitura — spugna in schiuma poliuretanica HR che definisce comfort, altezza e risposta agli impatti</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Rivestimento — cover in vinile o materiale gripper cucita e tesa sulla spugna, impermeabile e antiusura</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Fissaggio — ganci, perni o velcro che anchorano la sella al sottosella del telaio senza gioco</span>
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
              <span className="placeholderText">Immagine / GIF — esploso sella 2T con scocca, spugna, rivestimento e fissaggi</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Struttura a strati</span>
            <p>
              Sezione longitudinale di una sella da enduro: la scocca
              in polipropilene con rinforzi trasversali, lo strato
              di spugna HR da 35 – 45 mm di spessore variabile (più
              sottile sulla zona nosetto per facilitare la posizione
              eretta, più spessa sulla zona centrale per l'assorbimento
              degli impatti dei salti) e il rivestimento in vinile
              gripper teso e cucito sul bordo inferiore della scocca.
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
            <h3>Scocca, spugna e rivestimento — cosa cambia tra una sella e l'altra</h3>
            <p>
              La qualità di una sella si valuta in tre dimensioni
              separate: la rigidità della scocca (che determina la
              stabilità strutturale), la densità e il profilo della
              spugna (che determinano comfort e risposta dinamica) e
              la qualità del rivestimento (che determina aderenza,
              durata e impermeabilità). Una sella economica risparmia
              su tutti e tre — una sella premium li ottimizza in
              funzione della disciplina specifica.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeScocca">Scocca PP/ABS</span>
                <h4>Base rigida — la struttura che regge tutto</h4>
              </div>
              <p>
                La scocca è stampata in polipropilene (PP) o ABS con
                rinforzi nervati nella zona centrale per resistere
                alla flessione. I punti di fissaggio al telaio — due
                anteriori a gancio e uno posteriore a perno o a
                vite — devono essere integri e privi di cricche.
                Una scocca incrinata distribuisce il carico in modo
                anomalo sul rivestimento e sulla spugna, causando
                deformazioni localizzate che non dipendono dall'usura
                della spugna ma dalla struttura sottostante. Nelle
                selle aftermarket premium (Seatconcepts, Guts Racing)
                la scocca è in fibra di vetro o carbonio per ridurre
                il peso del 30 – 40%.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeHR">Spugna HR</span>
                <h4>Poliuretano High Resilience — lo standard di serie</h4>
              </div>
              <p>
                La spugna HR (High Resilience) è il materiale più
                usato nelle selle di serie. Ha un'ottima memoria
                elastica — si comprime sotto il peso del pilota
                e torna alla forma originale in pochi secondi dopo
                il sollievo del carico. La densità è espressa in
                kg/m³: una spugna da 35 kg/m³ è morbida e confortevole;
                una da 55 – 65 kg/m³ è dura e stabile, preferita
                nelle selle da motocross dove si vuole una piattaforma
                rigida per i trasferimenti di peso. Con l'uso la
                spugna HR si comprime progressivamente e non recupera
                più la forma originale — è il degrado più comune
                delle selle usate.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeGel">Gel / Memory</span>
                <h4>Inserti in gel e memory foam — per le lunghe distanze</h4>
              </div>
              <p>
                Gli inserti in gel viscoelastico o memory foam sono
                utilizzati nelle selle da enduro e trail per ridurre
                la pressione sui punti critici (zona ischiatica)
                durante le uscite di molte ore. Il gel distribuisce
                il carico su una superficie maggiore rispetto alla
                spugna HR standard, riducendo la pressione di picco
                del 20 – 35%. Lo svantaggio è il peso aggiuntivo
                e la risposta più lenta ai movimenti rapidi del pilota
                — negli enduro veloci i rider professionisti preferiscono
                la spugna dura standard per la sensazione più diretta
                della moto sotto di loro.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeGripper">Gripper cover</span>
                <h4>Rivestimento gripper — aderenza e controllo</h4>
              </div>
              <p>
                Il rivestimento gripper è realizzato in vinile
                texturizzato con micro-rilievi o inserti in silicone
                che aumentano l'attrito tra la tuta del pilota e
                la sella. Impedisce il scivolamento in avanti durante
                le frenate aggressive e lateralmente nelle curve
                veloci. I rivestimenti di serie sono lisci per non
                usurarsi rapidamente — il gripper si consuma prima
                ma offre un controllo nettamente superiore. I brand
                specializzati (Guts, Seat Concepts, One Industries)
                offrono rivestimenti con pattern diversi — più
                aggressivo per il MX, più morbido per l'enduro.
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
            <span className="captionTag">Profilo della spugna</span>
            <p>
              Confronto dei profili di spugna tra sella MX (sottile,
              dura, nosetto stretto per facilitare la posizione in piedi),
              sella enduro (spessore centrale maggiore, fianco più alto
              per il supporto laterale in salita) e sella da strada
              (profilo piatto e uniforme ottimizzato per la posizione
              seduta prolungata). La differenza di altezza netta tra
              i tre profili è di 15 – 25 mm a parità di scocca.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — confronto profili spugna MX vs enduro vs strada in sezione</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── ALTEZZA SELLA BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="altezzaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="altezzaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Altezza sella</span>
            <h3>Alto, standard, basso — l'altezza che cambia la moto e il pilota</h3>
            <p>
              L'altezza della sella è uno dei parametri ergonomici più
              importanti della moto — incide sulla capacità di toccare
              terra in sicurezza, sulla postura in piedi sulle pedane
              e sulla stanchezza muscolare nelle uscite lunghe. Non
              esiste un'altezza universalmente corretta: dipende
              dall'altezza del pilota, dalla disciplina e dal terreno.
            </p>
          </motion.div>

          <motion.div className="altezzaGrid" variants={cardVariants}>

            <div className="altezzaCard">
              <div className="altezzaVisual altezzaBassa">
                <span className="altezzaVal">870 – 900 mm</span>
                <span className="altezzaEx">Bassa</span>
              </div>
              <h4>Sella bassa — confidenza e controllo per tutti</h4>
              <p>
                Le selle lowered (abbassate) da 870 a 900 mm sono
                la scelta dei piloti più bassi di statura e di chi
                si avvicina al fuoristrada per la prima volta.
                Poter appoggiare entrambi i piedi a terra aumenta
                la confidenza nelle situazioni statiche e nei
                passaggi tecnici a bassa velocità. Il rovescio
                della medaglia è una riduzione dell'escursione
                delle sospensioni disponibile — la scocca si avvicina
                alla ruota posteriore — e una postura in piedi leggermente
                più raccolta che può aumentare la fatica sulle gambe
                nelle uscite lunghe. Si ottiene con spugna ridotta,
                scocca abbassata o link di sospensione shorty.
              </p>
            </div>

            <div className="altezzaCard">
              <div className="altezzaVisual altezzaStandard">
                <span className="altezzaVal">910 – 940 mm</span>
                <span className="altezzaEx">Standard</span>
              </div>
              <h4>Altezza standard — il compromesso di progetto</h4>
              <p>
                L'altezza standard della sella nei moderni 2T da
                fuoristrada si aggira tra 910 e 940 mm. È il risultato
                dell'ottimizzazione tra escursione delle sospensioni,
                postura eretta sulle pedane e gestione tecnica del
                mezzo. A questa altezza un pilota di statura media
                (175 – 180 cm) può appoggiare un piede a terra con
                comfort. L'altezza standard è calibrata per la maggior
                parte dei terreni e delle condizioni — modificarla
                richiede una comprensione chiara di cosa si vuole
                migliorare e di cosa si è disposti a sacrificare
                in termini di dinamica e sensazione.
              </p>
            </div>

            <div className="altezzaCard">
              <div className="altezzaVisual altezzaAlta">
                <span className="altezzaVal">950 – 980 mm</span>
                <span className="altezzaEx">Alta</span>
              </div>
              <h4>Sella alta — postura ottimale in piedi per i più alti</h4>
              <p>
                Le selle raised (alzate) da 950 a 980 mm sono la
                scelta dei piloti più alti (oltre 185 cm) che sulla
                sella standard si trovano con le ginocchia eccessivamente
                piegate in piedi sulle pedane. Una postura eretta
                riduce la fatica delle gambe e migliora il controllo
                della moto nei passaggi tecnici prolungati. Si ottiene
                con spugna più spessa, scocca rialzata o link di
                sospensione tall. Penalizza la capacità di toccare
                terra e aumenta il centro di massa, rendendo la moto
                meno stabile nelle manovre statiche.
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
              <span className="placeholderText">Immagine / GIF — confronto postura pilota su sella bassa, standard e alta</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Ergonomia</span>
            <p>
              Il profilo laterale del pilota sulle tre configurazioni
              di altezza: con la sella bassa la posizione in piedi
              tiene le ginocchia più piegate aumentando la fatica
              del quadricipite; con la sella alta le gambe sono
              più distese e la schiena rimane naturalmente eretta.
              L'angolo ottimale del ginocchio in piedi sulle pedane
              è tra 25° e 35° di flessione.
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
            <h3>Spugna compressa, scocca incrinata, rivestimento lacerato — riconoscere i problemi</h3>
            <p>
              La sella è uno dei componenti più trascurati della moto —
              si tende a tenerla finché non si rompe visibilmente.
              Ma una spugna compressa al 50% del suo spessore originale
              cambia radicalmente la postura del pilota e aumenta
              la fatica in modo misurabile. Intervenire prima che
              il degrado diventi evidente è sempre più economico.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Sella che "affonda" — spugna compressa</h4>
              <p>
                Quando il pilota si siede e percepisce di sedersi
                più in basso del solito — o quando la spugna non
                torna in forma dopo il sollievo del carico — la
                spugna ha raggiunto il fine vita. Una spugna HR
                compressa permanentemente non offre più l'imbottitura
                originale, trasmette le vibrazioni direttamente
                alla scocca e aumenta la pressione sulle zone
                ischiache nelle uscite lunghe. Il test rapido:
                premere con il pugno la zona centrale — se la
                spugna non recupera in 3 – 5 secondi, va sostituita.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Sella che si muove o che scricchiola</h4>
              <p>
                Un movimento laterale percepibile della sella in
                marcia o uno scricchiolio ritmico indica un fissaggio
                allentato o una scocca incrinata nel punto di ancoraggio.
                Un gancio anteriore usurato permette alla sella di
                sollevarsi sul nosetto ad ogni frenata. Verificare
                tutti i punti di fissaggio con la moto ferma:
                afferrare la sella da entrambi i lati e applicare
                forza laterale, poi verticale. Qualsiasi gioco
                non presente sulla moto nuova indica un problema
                di fissaggio da risolvere prima della prossima uscita.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Ispezione del rivestimento — lacerazioni e scollamento</h4>
              <p>
                Il rivestimento si lacera principalmente nelle zone
                di massima tensione: angoli della scocca, zone
                di cucitura, bordo posteriore. Una lacerazione che
                permette l'ingresso di acqua nella spugna accelera
                il degrado dell'imbottitura in modo esponenziale —
                la spugna bagnata si comprime sotto il peso del
                pilota e non asciuga mai completamente, portando
                al degrado della struttura cellulare in pochi mesi.
                Sigillare immediatamente le piccole lacerazioni con
                nastro adesivo impermeabile come soluzione temporanea
                in attesa della rifoderatura.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Acqua nella spugna — la trappola silenziosa</h4>
              <p>
                Premere energicamente con entrambe le mani sulla zona
                centrale della sella dopo un'uscita in pioggia o
                dopo il lavaggio della moto: se fuoriesce acqua
                il rivestimento non è più impermeabile. Una spugna
                che trattiene acqua pesa fino a 800 – 1200 g in più
                rispetto alla versione asciutta e perde il 40 – 60%
                della sua capacità di assorbimento dinamico. In
                inverno una spugna bagnata esposta al gelo si
                danneggia irreversibilmente a livello della struttura
                cellulare interna.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Controllo scocca — cricche nei punti di fissaggio</h4>
              <p>
                Le cricche della scocca nascono quasi sempre in
                prossimità dei fori di fissaggio, per la concentrazione
                di sforzo che si genera ad ogni impatto trasmesso
                dalla spugna alla struttura rigida. Rimuovere
                completamente la sella e ispezionare la scocca
                con luce forte in controluce: le cricche appaiono
                come linee bianche o trasparenti nel materiale.
                Una scocca incrinata va rinforzata con patch in
                fibra di vetro o sostituita — non tentare riparazioni
                con colla a caldo che non reggono le forze in gioco
                durante l'uso normale.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Vita della spugna e sostituzione preventiva</h4>
              <p>
                Una spugna HR di qualità ha una vita utile di
                200 – 300 ore di utilizzo intenso in fuoristrada,
                indipendentemente dall'aspetto visivo del rivestimento.
                In uso amatoriale (20 – 40 ore all'anno) può durare
                5 – 8 anni prima di mostrare segni evidenti di
                cedimento. Il costo di una rifoderatura completa
                (spugna + rivestimento) è di 60 – 120 € a seconda
                del materiale scelto — nettamente inferiore al
                disagio ergonomico di una stagione con una sella
                esaurita che altera la postura e aumenta la fatica.
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
            <span className="cardTag">Rifoderatura</span>
            <h3>Rifoderare la sella — quando e come farlo correttamente</h3>
            <p>
              La rifoderatura è l'intervento più comune sulla sella:
              si rimuove il vecchio rivestimento (lama piatta tra
              scocca e bordo del cover), si valuta la spugna (se
              compressa si sostituisce, se integra si può riutilizzare),
              si tende il nuovo rivestimento a partire dal centro
              verso i lati e si fissa con graffette industriali sul
              bordo inferiore della scocca. La chiave è la tensione
              uniforme — un rivestimento teso in modo non omogeneo
              si lacera prematuramente nelle zone di maggior tensione.
              La pistola per graffette da tappezzeria è lo strumento
              indispensabile — non usare graffette manuali che non
              penetrano sufficientemente la scocca in PP.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>Selle aftermarket — Seat Concepts, Guts Racing e le alternative</h3>
            <p>
              I kit sella aftermarket completi (scocca + spugna + cover)
              di Seat Concepts, Guts Racing e Saddlemen sono la scelta
              più pratica per una sella custom senza lavoro artigianale.
              Offrono spugne in densità diverse (soft, medium, firm)
              e rivestimenti in vari materiali. Prima dell'acquisto
              specificare l'anno esatto della moto — la scocca cambia
              spesso anche tra anni consecutivi della stessa generazione.
              I kit foam-only (solo spugna sagomata) sono la soluzione
              più economica quando la scocca originale è integra ma
              la spugna è esaurita.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Ergonomia</span>
            <h3>Adattare la sella al pilota — oltre l'altezza standard</h3>
            <p>
              L'ergonomia della sella non si esaurisce nell'altezza.
              La larghezza del nosetto influenza la capacità di
              posizionarsi in avanti durante le salite; la larghezza
              della zona posteriore determina il supporto laterale
              nei trasferimenti di peso. I piloti con problemi alla
              schiena beneficiano di spugne a densità differenziata —
              più morbida nella zona ischiatica, più dura nei fianchi —
              che distribuiscono il carico senza ridurre la risposta
              dinamica. Un sellista esperto può sagomare la spugna
              su misura per le esigenze specifiche del pilota
              con un investimento di 80 – 150 €.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Sella;
