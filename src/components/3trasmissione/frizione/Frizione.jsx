import "./frizione.scss";
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

const Frizione = () => {
  return (
    <section className="frizione" id="frizione">
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
              Trasmissione e cambio
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La frizione nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La frizione è l'interfaccia tra il motore e il cambio —
              il componente che permette di connettere e disconnettere
              la trasmissione della coppia in modo progressivo e
              controllato. Nei motori a 2 tempi per moto è quasi
              universalmente una frizione multidisco a bagno d'olio:
              un pacco di dischi alternati in acciaio e materiale
              organico, immersi nell'olio del carter trasmissione,
              che trasmettono la coppia per attrito quando compressi
              da molle e la interrompono quando il pilota aziona la leva.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Nel 2T la frizione lavora in condizioni più severe rispetto
              al 4T equivalente: i picchi di coppia sono più bruschi,
              il regime è più alto e il cambio avviene spesso con motore
              ancora in erogazione. La sua regolazione, la qualità dei
              dischi e soprattutto l'olio in cui è immersa determinano
              il feeling di innesto, la progressività e la durata
              dell'intero pacco.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia della frizione</span>
              <h3>I componenti del pacco frizione</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Campana frizione — collegata all'albero primario, riceve la coppia dal motore</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Dischi conduttori — in acciaio, calettati sulla campana, ruotano col motore</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Dischi condotti — in materiale organico, calettati sul mozzo, trasmettono al cambio</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Molle di pressione — comprimono il pacco e determinano la forza di attrito</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">05</span>
                <span className="miniText">Piatto pressore — distribuisce uniformemente la forza delle molle sul pacco</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FUNZIONAMENTO BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="funzBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="funzHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Funzionamento</span>
            <h3>Innesto, slittamento e disinnesto — le tre fasi della frizione</h3>
            <p>
              La frizione non è semplicemente on/off — è un organo di
              modulazione continua. Tra l'innesto completo e il disinnesto
              completo esiste una zona di slittamento controllato che
              il pilota usa per dosare la partenza, gestire il cambio
              marcia sotto carico e controllare la trazione in uscita
              di curva. Capire le tre fasi è fondamentale per capire
              quando e perché la frizione si usura.
            </p>
          </motion.div>

          <motion.div className="funzGrid" variants={cardVariants}>

            <div className="funzCard funzInnesto">
              <div className="funzCardTop">
                <span className="funzBadge badgeInnesto">Innesto</span>
                <span className="funzStato">Leva rilasciata</span>
              </div>
              <h4>Frizione inserita — coppia trasmessa al 100%</h4>
              <p>
                Con la leva rilasciata le molle di pressione spingono
                il piatto pressore contro il pacco dischi con la loro
                forza nominale. La pressione di contatto tra i dischi
                è massima, l'attrito è sufficiente a trasmettere
                tutta la coppia del motore senza slittamento. I dischi
                conduttori e condotti ruotano come un blocco unico —
                la coppia passa integralmente dall'albero motore
                all'albero primario del cambio.
              </p>
            </div>

            <div className="funzCard funzSlittamento">
              <div className="funzCardTop">
                <span className="funzBadge badgeSlittamento">Slittamento</span>
                <span className="funzStato">Leva a metà corsa</span>
              </div>
              <h4>Zona di frizione — coppia parziale e calore</h4>
              <p>
                Con la leva parzialmente tirata il piatto pressore
                alleggerisce la pressione sul pacco senza sollevarlo
                completamente. I dischi iniziano a scorrere uno
                sull'altro — trasmettono coppia parziale e generano
                calore per attrito. Questa è la fase più critica per
                la durata della frizione: lo slittamento prolungato
                brucia il materiale organico dei dischi condotti
                e può carbonizzare l'olio se il calore non viene
                dissipato abbastanza rapidamente.
              </p>
            </div>

            <div className="funzCard funzDisinnesto">
              <div className="funzCardTop">
                <span className="funzBadge badgeDisinnesto">Disinnesto</span>
                <span className="funzStato">Leva tirata</span>
              </div>
              <h4>Frizione aperta — motore scollegato dalla trasmissione</h4>
              <p>
                Con la leva completamente tirata il sistema di disinnesto
                (a spingitore o a tirante) contrasta la forza delle
                molle e separa il piatto pressore dal pacco dischi.
                I dischi conduttori e condotti non sono più a contatto
                — il motore gira libero senza trasmettere coppia.
                In questa fase la frizione non genera usura ma l'olio
                continua a lubrificare e raffreddare i dischi che
                ruotano ancora a velocità diverse.
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
              <span className="placeholderText">Immagine / GIF — pacco frizione esploso con dischi conduttori, condotti, molle e piatto pressore</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Pacco dischi</span>
            <p>
              Il pacco frizione esploso rivela l'alternanza precisa tra
              dischi conduttori in acciaio (lisci, calettati sulla campana)
              e dischi condotti in materiale organico (con sede sulle dita
              del mozzo). Le molle di pressione — tipicamente 6 o 8 su
              disposizione circolare — devono avere tutti la stessa
              lunghezza a riposo per garantire una pressione uniforme
              su tutto il piatto.
            </p>
          </div>
        </motion.div>

        {/* ── DISCHI BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="dischiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="dischiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Dischi e materiali</span>
            <h3>Dischi conduttori e condotti — materiali, tolleranze e usura</h3>
            <p>
              Il pacco dischi è il cuore consumabile della frizione.
              I due tipi di disco hanno costruzione e materiali diversi
              perché svolgono funzioni diverse — e si usurano in modo
              diverso. Conoscere la differenza è essenziale per
              diagnosticare correttamente lo stato della frizione
              e ordinare le parti giuste.
            </p>
          </motion.div>

          <motion.div className="dischiGrid" variants={cardVariants}>

            <div className="dischiCard dischiConduttori">
              <span className="dischiBadge badgeConduttori">Conduttori</span>
              <h4>Dischi in acciaio — planari e misurabili</h4>
              <p>
                I dischi conduttori sono lastre in acciaio temprato con
                superficie rettificata. Si calettano sulla campana tramite
                dentatura esterna e ruotano solidali col motore. La loro
                usura è principalmente di deformazione — sotto il calore
                dello slittamento tendono a imbarcarsi (warping),
                perdendo planarità. Un disco conduttore imbarcato
                trasmette forze non uniformi al pacco e causa
                innesto irregolare. Si verifica appoggiandolo su un
                piano di riscontro: il gioco ammesso è al massimo
                0,1 – 0,15 mm.
              </p>
              <div className="dischiSpec">
                <span className="dischiSpecLabel">Verifica</span>
                <span className="dischiSpecVal">Planarità — tolleranza &lt; 0,15 mm</span>
              </div>
              <div className="dischiSpec">
                <span className="dischiSpecLabel">Scarto</span>
                <span className="dischiSpecVal">Rigature profonde o imbastitura visibile</span>
              </div>
            </div>

            <div className="dischiCard dischiCondotti">
              <span className="dischiBadge badgeCondotti">Condotti</span>
              <h4>Dischi in materiale organico — spessore e saturazione</h4>
              <p>
                I dischi condotti hanno un'anima in acciaio rivestita
                da entrambi i lati con materiale d'attrito organico
                (fibra aramidica, fibra di carbonio nei dischi racing,
                o compositi a base di resina). Si calettano sul mozzo
                tramite dentatura interna. Il loro consumo è progressivo
                riduzione dello spessore — si misurano con il
                micrometro e si confrontano con la misura minima
                indicata dal costruttore. Uno spessore esaurito
                riduce l'altezza del pacco, abbassa la precarica delle
                molle e causa slittamento anche a leva rilasciata.
              </p>
              <div className="dischiSpec">
                <span className="dischiSpecLabel">Verifica</span>
                <span className="dischiSpecVal">Spessore — micrometro su entrambe le facce</span>
              </div>
              <div className="dischiSpec">
                <span className="dischiSpecLabel">Scarto</span>
                <span className="dischiSpecVal">Sotto quota minima o materiale vetrificato</span>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── MOLLE BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="molleBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="molleHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Molle di pressione</span>
            <h3>Le molle — forza di pressione, assestamento e upgrade</h3>
            <p>
              Le molle di pressione determinano la forza con cui il pacco
              dischi viene compresso. Una forza insufficiente causa
              slittamento sotto carico elevato. Una forza eccessiva
              appesantisce il feeling della leva e affatica il
              meccanismo di disinnesto. Le molle si assestano nel
              tempo — perdono lunghezza libera per fatica ciclica —
              e vanno sostituite in set completo, mai singolarmente.
            </p>
          </motion.div>

          <motion.div className="molleGrid" variants={cardVariants}>

            <div className="molleCard">
              <div className="molleVisual molleStandard">
                <span className="molleLabel">Standard OEM</span>
                <span className="molleVal">Forza nominale</span>
              </div>
              <h4>Molle originali — equilibrio tra feeling e tenuta</h4>
              <p>
                Le molle originali sono calibrate dal costruttore per
                bilanciare la forza di innesto con lo sforzo alla leva.
                Dopo 30 – 50 ore di utilizzo intenso tendono ad
                assestarsi di 1 – 2 mm rispetto alla lunghezza libera
                nominale. La verifica si esegue misurando la lunghezza
                libera di ogni molla e confrontandola con il valore
                nel manuale — un calo superiore al 5% richiede
                la sostituzione dell'intero set.
              </p>
            </div>

            <div className="molleCard">
              <div className="molleVisual molleRinforzate">
                <span className="molleLabel">Rinforzate</span>
                <span className="molleVal">+15 – 30% forza</span>
              </div>
              <h4>Molle rinforzate — per uso racing e alta potenza</h4>
              <p>
                Le molle aftermarket rinforzate (EBC, Barnett, Hinson)
                aumentano la forza di pressione del 15 – 30% rispetto
                all'originale. Eliminano il rischio di slittamento con
                motori preparati a potenze superiori all'originale,
                ma rendono la leva più dura. In uso agonistico si
                abbinano spesso a un leveraggio della leva con braccio
                più lungo per compensare lo sforzo aggiuntivo.
              </p>
            </div>

            <div className="molleCard">
              <div className="molleVisual molleProgressive">
                <span className="molleLabel">Progressive</span>
                <span className="molleVal">Forza variabile</span>
              </div>
              <h4>Molle progressive — feeling modulabile</h4>
              <p>
                Le molle a passo variabile offrono una risposta più
                morbida nella prima parte della corsa della leva —
                dove avviene la modulazione dello slittamento — e
                una forza più elevata nella parte finale dove la
                frizione deve trasmettere la coppia massima. Migliorano
                significativamente il feeling in partenza e nei
                cambi tecnici, a parità di tenuta sotto carico pieno.
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
            <span className="captionTag">Meccanismo di disinnesto</span>
            <p>
              Il meccanismo di disinnesto converte il movimento della leva
              in una forza assiale sul piatto pressore. Nei sistemi a
              spingitore una sfera o un perno trasmette la spinta
              attraverso il centro dell'albero primario. Nei sistemi
              a tirante un cavo tira direttamente il piatto. Gioco,
              regolazione e stato del cavo influenzano direttamente
              il punto di innesto e la progressività della frizione.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — meccanismo di disinnesto a spingitore e regolazione gioco leva</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
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
            <h3>Riconoscere una frizione che cede — sintomi, misure e intervalli</h3>
            <p>
              La frizione manda segnali chiari prima di cedere
              completamente. Imparare a leggerli permette di intervenire
              con una revisione programmata invece di trovare la moto
              ferma nel bel mezzo di una gara o di un'uscita.
            </p>
          </motion.div>

          <motion.div className="diagnGrid" variants={cardVariants}>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Slittamento sotto carico — la frizione non tiene</h4>
              <p>
                Il sintomo più classico: a gas aperto in accelerazione
                forte, specialmente in quinta o sesta, il regime sale
                ma la velocità non segue proporzionalmente. Il motore
                "sgrana" — si sente accelerare senza che la spinta
                corrisponda. Cause: dischi condotti esauriti, molle
                assestiate, olio sbagliato con additivi anti-attrito
                o livello olio eccessivo nel carter trasmissione.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Frizione che non apre — la moto spinge a leva tirata</h4>
              <p>
                Con la leva completamente tirata la moto cerca ancora
                di muoversi o si sentono strattonamenti al cambio
                marcia. Cause: dischi condotti gonfi per
                surriscaldamento o umidità che impediscono la
                separazione, piatto pressore incollato per carbone
                da olio bruciato, gioco leva insufficiente che non
                permette la corsa completa del meccanismo di disinnesto.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Innesto duro e brusco — nessuna progressività</h4>
              <p>
                La frizione innesta di colpo senza la zona di
                modulazione progressiva tipica di una frizione sana.
                Cause: dischi condotti vetrificati dalla temperatura
                (superficie diventata lucida e liscia), molle troppo
                rinforzate per l'uso normale, olio invecchiato che ha
                perso le proprietà di scorrimento controllato tra
                i dischi. L'innesto brusco può causare impennate
                involontarie e usura accelerata della trasmissione.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Misura dischi condotti — il micrometro non mente</h4>
              <p>
                Ogni disco condotto va misurato con il micrometro in
                tre punti lungo il raggio e confrontato con la quota
                minima del manuale (tipicamente 2,5 – 2,9 mm secondo
                il modello, contro i 2,9 – 3,0 mm nominali). Anche
                un solo disco sotto quota richiede la sostituzione
                dell'intero set — non si sostituiscono i dischi
                singolarmente, la differenza di spessore tra vecchi
                e nuovi crea punti di pressione disomogenei.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Controllo molle — lunghezza libera e parallelismo</h4>
              <p>
                Le molle si misurano in lunghezza libera con un calibro.
                Il valore nominale e il limite minimo sono riportati
                nel manuale di officina — tipicamente la lunghezza
                libera originale è 40 – 50 mm e il limite di scarto
                è 2 – 3 mm al di sotto. Si controlla anche il
                parallelismo: una molla con spire non parallele
                applica la forza in modo asimmetrico, favorendo
                lo slittamento su un lato del piatto.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeIntervallo">Intervallo</span>
              <h4>Vita operativa e sostituzione preventiva</h4>
              <p>
                In uso agonistico (motocross, enduro racing) i dischi
                condotti si sostituiscono ogni 20 – 30 ore o alla
                fine della stagione, le molle ogni 2 stagioni.
                In uso amatoriale ogni 60 – 100 ore o quando si
                manifestano i sintomi. I dischi conduttori in acciaio
                hanno vita molto più lunga — si sostituiscono solo
                se imbarcati oltre tolleranza o con rigature profonde.
                Costo di un kit dischi completo: sempre inferiore
                al costo di un cambio rovinato da slittamento cronico.
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
            <span className="cardTag">Regolazione</span>
            <h3>Gioco leva e punto di innesto — la regolazione che cambia tutto</h3>
            <p>
              Il gioco libero della leva frizione va regolato a 2 – 3 mm
              misurati alla punta della leva con la moto ferma. Un gioco
              insufficiente mantiene il meccanismo di disinnesto
              parzialmente in trazione anche a leva rilasciata, causando
              slittamento progressivo e surriscaldamento. Un gioco
              eccessivo riduce la corsa disponibile per il disinnesto
              completo. Il punto di innesto si regola tramite il
              registro sul cavo o sull'attacco al motore — deve
              avvenire nella metà esterna della corsa della leva,
              non troppo vicino al manubrio.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Frizione antisaltello</span>
            <h3>Slipper clutch — quando serve e come funziona</h3>
            <p>
              La frizione antisaltello (slipper clutch) o frizione
              bidirezionale è un dispositivo che permette alla frizione
              di slittare parzialmente in decelerazione, quando il motore
              a 2T tende a bloccare la ruota posteriore per il freno
              motore elevato. Meccanismi a rampe interne riducono
              automaticamente la pressione sul pacco dischi in
              decelerazione, poi ripristinano la forza piena in
              accelerazione. Standard su molte moto da enduro e
              motocross moderni, disponibile come upgrade aftermarket
              (Hinson, Rekluse) per motori più vecchi.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Rodaggio</span>
            <h3>Rodaggio frizione nuova — il protocollo corretto</h3>
            <p>
              Una frizione nuova richiede un periodo di rodaggio per
              permettere ai dischi condotti di adattarsi alle superfici
              dei dischi conduttori. Le prime 2 – 3 ore vanno evitate
              partenze violente, slittamenti prolungati e cambi sotto
              carico pieno. L'olio va cambiato dopo le prime 5 ore
              di utilizzo per eliminare le particelle di rodaggio del
              materiale organico che contaminano il carter trasmissione.
              Saltare il rodaggio riduce significativamente la durata
              del pacco dischi.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Frizione;
