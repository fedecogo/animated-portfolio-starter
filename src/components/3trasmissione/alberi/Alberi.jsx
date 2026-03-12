import "./alberi.scss";
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

const Alberi = () => {
  return (
    <section className="alberi" id="alberi-cambio">
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
              Albero primario<br />e secondario
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La scatola cambio ruota attorno a due alberi paralleli —
              il primario e il secondario — che lavorano sempre in coppia.
              Il primario riceve la coppia dalla frizione e porta gli
              ingranaggi conduttori. Il secondario porta gli ingranaggi
              condotti e trasmette la coppia all'uscita verso la ruota.
              Su questi due alberi si montano tutte le coppie di
              ingranaggi, i manicotti scorrevoli e i cuscinetti
              di supporto che rendono possibile il cambio marcia.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              I due alberi non sono identici né intercambiabili —
              hanno diametri, profili di scanalature e posizionamento
              degli ingranaggi fissi e scorrevoli diversi e speculari.
              Comprendere come sono costruiti e come collaborano è
              la base per capire la diagnosi del cambio, il montaggio
              corretto e le possibilità di modifica dei rapporti.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">I due alberi in sintesi</span>
              <h3>Primario vs Secondario</h3>
            </div>
            <div className="comparePanel">
              <div className="compareSide comparePrimario">
                <span className="compareLabel labelPrimario">Primario</span>
                <ul className="compareList">
                  <li>Riceve coppia dalla frizione</li>
                  <li>Porta ingranaggi conduttori</li>
                  <li>Sempre coassiale all'albero motore</li>
                  <li>Diametro maggiore — carico torcente più alto</li>
                  <li>Sostenuto da 2 cuscinetti agli estremi</li>
                </ul>
              </div>
              <div className="compareDivider" />
              <div className="compareSide compareSecondario">
                <span className="compareLabel labelSecondario">Secondario</span>
                <ul className="compareList">
                  <li>Trasmette coppia alla ruota</li>
                  <li>Porta ingranaggi condotti</li>
                  <li>Parallelo al primario, offset fisso</li>
                  <li>Porta il pignone catena all'estremità</li>
                  <li>Sostenuto da 2 cuscinetti agli estremi</li>
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
            <h3>Come sono fatti — materiali, scanalature e supporti</h3>
            <p>
              Entrambi gli alberi sono ricavati da acciaio da
              cementazione o nitrurazione. La superficie è indurita
              per resistere all'usura delle sedi degli ingranaggi
              e delle scanalature dei manicotti, ma il nucleo rimane
              tenace per assorbire i carichi torcenti impulsivi
              del 2T senza fratturarsi per fatica.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costPrimario">P</span>
              <h4>Albero primario — profilo e scanalature</h4>
              <p>
                L'albero primario ha un diametro più generoso del
                secondario perché riceve direttamente i picchi di coppia
                del motore attraverso la frizione. La sua superficie
                presenta zone di diverso diametro: le sedi lisce dove
                gli ingranaggi folli ruotano su cuscinetti a needle,
                le zone scanalate (splined) dove i manicotti scorrevoli
                si traslano assialmente rimanendo solidali in rotazione,
                e le sedi dei cuscinetti agli estremi che lo supportano
                nel carter trasmissione.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costSecondario">S</span>
              <h4>Albero secondario — pignone e uscita catena</h4>
              <p>
                L'albero secondario è costruito in modo speculare al
                primario per quanto riguarda la disposizione di
                ingranaggi fissi, folli e manicotti — ma la posizione
                degli elementi è invertita: dove il primario ha un
                ingranaggio fisso, il secondario ha quello folle per
                la stessa coppia e viceversa. All'estremità esterna
                del carter porta il pignone di uscita catena, calettato
                con chiavetta o spline e trattenuto da un dado di
                bloccaggio. Il pignone è l'ultimo anello della
                trasmissione primaria verso la ruota.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costCuscinetti">C</span>
              <h4>Cuscinetti di supporto — radiali e di spinta</h4>
              <p>
                Ogni albero è supportato da due cuscinetti radiali
                agli estremi, montati in sedi ricavate nel carter
                trasmissione. A differenza dei cuscinetti di banco
                dell'albero motore — lubrificati dalla miscela —
                questi cuscinetti sono immersi nell'olio del carter
                trasmissione e ricevono lubrificazione abbondante
                e continua. Cuscinetti a sfere per i carichi radiali
                e assiali combinati, a rulli cilindrici dove
                il carico radiale è prevalente. La classe di
                tolleranza è meno critica che per i cuscinetti
                di banco — ma il gioco corretto rimane importante
                per la precisione del cambio.
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
              <span className="placeholderText">Immagine / GIF — albero primario e secondario estratti dal carter con ingranaggi e manicotti visibili</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">I due alberi</span>
            <p>
              Primario in alto, secondario in basso: si nota la
              disposizione speculare degli ingranaggi fissi (calettati)
              e folli (su needle bearing). Per ogni marcia esiste
              una coppia — un ingranaggio sull'uno e uno sull'altro —
              sempre in presa. I manicotti scorrevoli si distinguono
              per la dentatura esterna delle scanalature splined.
            </p>
          </div>
        </motion.div>

        {/* ── DISTRIBUZIONE INGRANAGGI BLOCK ──────────────────────────────── */}
        <motion.div
          className="distribuzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="distribuzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Distribuzione ingranaggi</span>
            <h3>Fissi, folli e scorrevoli — come sono distribuiti sui due alberi</h3>
            <p>
              Ogni coppia di ingranaggi che forma un rapporto è composta
              da un ingranaggio fisso su un albero e uno folle
              sull'altro. Il manicotto scorrevole — sempre sul lato
              dell'ingranaggio folle — è quello che, spostandosi,
              realizza il cambio marcia bloccando l'ingranaggio folle
              all'albero. La distribuzione non è casuale: segue
              una logica precisa che minimizza i movimenti delle
              forcelle e rende il cambio sequenziale fluido.
            </p>
          </motion.div>

          <motion.div className="distribuzioneGrid" variants={cardVariants}>

            <div className="distCard distFisso">
              <div className="distCardTop">
                <span className="distBadge badgeFisso">Fisso</span>
                <span className="distAlbero">Calettato direttamente</span>
              </div>
              <h4>Ingranaggio fisso — sempre solidale all'albero</h4>
              <p>
                L'ingranaggio fisso è calettato sull'albero tramite
                profilo scanalato o chiavetta e non può muoversi
                assialmente né girare liberamente. Ruota sempre
                con l'albero, indipendentemente da quale marcia
                è inserita. È sempre in presa con il suo corrispondente
                sull'altro albero — trasmette o riceve forza
                continuamente. La sua usura avviene sui fianchi
                dei denti per contatto ciclico con l'ingranaggio
                corrispondente.
              </p>
            </div>

            <div className="distCard distFolle">
              <div className="distCardTop">
                <span className="distBadge badgeFolle">Folle</span>
                <span className="distAlbero">Su needle bearing</span>
              </div>
              <h4>Ingranaggio folle — ruota sull'albero, non con esso</h4>
              <p>
                L'ingranaggio folle gira sull'albero tramite cuscinetti
                a needle (aghi) ricavati direttamente nel mozzo
                dell'ingranaggio oppure tramite una bronzina.
                È in presa con il corrispondente fisso sull'altro
                albero ma non trasmette coppia all'albero su cui
                è montato finché il manicotto scorrevole non lo
                blocca. La lubrificazione dei needle bearing avviene
                per schizzo dell'olio del carter — fondamentale che
                il livello e la qualità dell'olio siano corretti
                per evitare usura prematura di questi supporti.
              </p>
            </div>

            <div className="distCard distScorrevole">
              <div className="distCardTop">
                <span className="distBadge badgeScorrevole">Scorrevole</span>
                <span className="distAlbero">Splined — si trasla assialmente</span>
              </div>
              <h4>Manicotto scorrevole — il meccanismo di selezione</h4>
              <p>
                Il manicotto scorrevole è una bussola con dentatura
                interna splined che si ingrana sull'albero e può
                traslare assialmente lungo di esso guidata dalla
                forcella del selettore. Sui fianchi presenta i cani
                di innesto — denti corti e robusti — che quando
                entrano in contatto con i cani dell'ingranaggio folle
                adiacente lo bloccano solidalmente all'albero,
                inserendo quella marcia. Ingranaggi folli e manicotti
                sono analizzati in dettaglio nella sezione Ingranaggi.
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
            <span className="captionTag">Needle bearing</span>
            <p>
              I cuscinetti a needle nel mozzo degli ingranaggi folli
              sono tra i componenti più piccoli e più sollecitati
              dell'intera scatola cambio. Ruotano continuamente
              anche con la marcia disinserita, lubrificati solo
              dall'olio in circolazione. Un olio vecchio o
              contaminato li usura in modo silenzioso e progressivo —
              il rumore in cambio è spesso la loro voce.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — sezione ingranaggio folle con needle bearing nel mozzo e manicotto adiacente</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── SOLLECITAZIONI BLOCK ────────────────────────────────────────── */}
        <motion.div
          className="sollecitazioniBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="sollecitazioniHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Meccanica applicata</span>
            <h3>Le forze sugli alberi — torsione, flessione e carico assiale</h3>
            <p>
              Gli alberi della scatola cambio non subiscono solo la
              coppia torcente — la geometria delle forze in gioco
              è più complessa. Capire queste sollecitazioni spiega
              perché gli alberi si consumano in certi punti e non in
              altri, e perché la qualità dei cuscinetti di supporto
              è critica quanto quella degli ingranaggi.
            </p>
          </motion.div>

          <motion.div className="sollecitazioniGrid" variants={cardVariants}>

            <div className="sollCard">
              <div className="sollVisual sollTorsione">
                <span className="sollIcon">⟳</span>
                <span className="sollTitoloVisual">Torsione</span>
              </div>
              <h4>Momento torcente — la sollecitazione principale</h4>
              <p>
                La coppia trasmessa dalla frizione all'albero primario
                genera un momento torcente che l'albero deve resistere
                dalla sezione di ingresso fino all'ingranaggio della
                marcia inserita. L'albero secondario riceve la coppia
                dall'ingranaggio condotto e la trasmette al pignone
                di uscita. I picchi di coppia del 2T — bruschi e
                impulsivi — sottopongono gli alberi a sollecitazione
                a fatica torsionale ciclica. Il diametro dell'albero
                primario è dimensionato per questa sollecitazione
                con ampi margini di sicurezza.
              </p>
            </div>

            <div className="sollCard">
              <div className="sollVisual sollFlessione">
                <span className="sollIcon">⌒</span>
                <span className="sollTitoloVisual">Flessione</span>
              </div>
              <h4>Carico radiale — gli alberi lavorano come travi</h4>
              <p>
                Le forze di contatto tra i denti degli ingranaggi
                generano forze radiali che i due alberi devono
                assorbire come travi su due appoggi (i cuscinetti
                agli estremi). Più la forza di contatto è lontana
                dai cuscinetti, maggiore è il momento flettente
                sull'albero in quel punto. Per questo la disposizione
                degli ingranaggi sull'albero — quale marcia è vicina
                a quale cuscinetto — è progettata per minimizzare
                i momenti flettenti massimi e ridurre la freccia
                dell'albero sotto carico.
              </p>
            </div>

            <div className="sollCard">
              <div className="sollVisual sollAssiale">
                <span className="sollIcon">⟺</span>
                <span className="sollTitoloVisual">Carico assiale</span>
              </div>
              <h4>Spinta assiale — ingranaggi elicoidali vs dritti</h4>
              <p>
                Gli ingranaggi a denti dritti (spur gear), standard
                nei cambi 2T da competizione, generano solo forze
                radiali — nessuna spinta assiale sull'albero.
                Gli ingranaggi elicoidali, che offrono funzionamento
                più silenzioso, generano invece una spinta assiale
                che i cuscinetti di estremità devono assorbire.
                Nei cambi 2T si preferiscono i denti dritti
                per semplicità e assenza di spinta assiale —
                il rumore leggermente maggiore è accettato
                in cambio di minori vincoli progettuali.
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
            <h3>Cosa si usura sugli alberi e come riconoscerlo</h3>
            <p>
              L'usura degli alberi è raramente drammatica e immediata —
              si accumula lentamente e produce sintomi progressivi
              che peggiorano nel tempo. Riconoscerli presto permette
              di intervenire con una revisione programmata invece di
              trovare il cambio bloccato.
            </p>
          </motion.div>

          <motion.div className="diagnGrid" variants={cardVariants}>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Gioco eccessivo sull'albero — manica allentata</h4>
              <p>
                Con il cambio aperto, afferrare l'albero e tentare
                di spostarlo radialmente nei cuscinetti. Un gioco
                radiale percettibile oltre 0,05 – 0,08 mm indica
                cuscinetti di supporto usurati. Il gioco si misura
                con comparatore appoggiato alla sede del cuscinetto
                mentre si sposta l'albero. Cuscinetti con gioco
                eccessivo permettono all'albero di flettersi sotto
                carico — causa di cambi imprecisi e usura
                accelerata degli ingranaggi.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Scanalature splined consumate — manicotto che balla</h4>
              <p>
                Le scanalature splined dove scorrono i manicotti
                si usurano per il contatto ripetuto sotto carico
                dei cambi. L'usura si manifesta come un gioco
                rotazionale tra manicotto e albero — il manicotto
                "balla" angolarmente invece di essere solidale.
                Visivamente le creste delle scanalature appaiono
                arrotondate o appiattite. Uno splined consumato
                non garantisce il bloccaggio completo dell'ingranaggio
                e causa marce che sfuggono sotto carico.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Sede needle bearing consumata — ovale invece di tonda</h4>
              <p>
                Le sedi dei needle bearing sulle superfici degli alberi
                si ovalizzano per usura, specialmente se l'olio
                non era adeguato o il livello era basso. Una sede
                ovalizzata non può essere recuperata — richiede
                la sostituzione dell'albero. Si verifica con
                micrometro di precisione misurando il diametro
                della sede in due direzioni perpendicolari: una
                differenza superiore a 0,02 mm indica usura
                significativa.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Raddrizzatura albero — il test con i supporti a V</h4>
              <p>
                Un albero che ha subito un cambio con violenza o
                un blocco improvviso del cambio può essersi
                deformato per torsione. Il controllo si esegue
                posizionando l'albero su supporti a V in
                corrispondenza delle sedi dei cuscinetti e
                misurando la freccia centrale con un comparatore
                mentre l'albero ruota. Un errore superiore
                a 0,03 – 0,05 mm richiede la sostituzione —
                gli alberi di trasmissione non si raddrizzano.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Ispezione visiva sistematica allo smontaggio</h4>
              <p>
                Ad ogni apertura del carter trasmissione: controllare
                le sedi dei needle bearing per segni di brunitura
                o grippaggio, le scanalature splined per creste
                appiattite, le sedi dei cuscinetti per rigature
                circonferenziali. Controllare che le circlip
                di ritenuta degli ingranaggi siano integre e
                posizionate correttamente nei loro alloggiamenti —
                una circlip saltata causa lo spostamento assiale
                dell'ingranaggio con danni rapidi agli adiacenti.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeIntervallo">Intervallo</span>
              <h4>Vita operativa degli alberi</h4>
              <p>
                In condizioni normali gli alberi della scatola cambio
                hanno vita paragonabile all'intera vita del motore —
                non sono componenti a sostituzione programmata.
                Si sostituiscono quando le verifiche dimensionali
                evidenziano usura fuori tolleranza, dopo un guasto
                meccanico grave (rottura di un dente, blocco
                del cambio) o in preparazioni racing dove si
                rimontano componenti nuovi a ogni revisione stagionale
                indipendentemente dall'usura apparente.
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
            <span className="cardTag">Pignone di uscita</span>
            <h3>Il pignone sull'albero secondario — rapporto finale e sostituzione</h3>
            <p>
              Il pignone calettato all'estremità dell'albero secondario
              è il primo componente della trasmissione secondaria verso
              la ruota. Il suo numero di denti, in combinazione con
              la corona sul mozzo ruota, definisce il rapporto finale
              che si somma alla riduzione del cambio. Cambiare il
              pignone (più denti = più velocità, meno accelerazione;
              meno denti = più accelerazione, meno velocità di punta)
              è la modifica più rapida e meno costosa per adattare
              la moto a un circuito o a un tipo di terreno specifico.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Smontaggio</span>
            <h3>Estrarre gli alberi dal carter — sequenza corretta</h3>
            <p>
              Gli alberi si estraggono dal carter trasmissione sempre
              in coppia, contemporaneamente o in sequenza definita
              dal manuale — mai forzare un albero singolo senza
              aver verificato che l'altro sia libero di muoversi.
              Prima di estrarre: rimuovere tutte le circlip esterne,
              il pignone di uscita e il dado di bloccaggio. Gli alberi
              escono assialmente dal carter — un estrattore dedicato
              o un mazzuolo di gomma con supporto adeguato evita
              di danneggiare le sedi dei cuscinetti nel carter.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>Alberi rinforzati — quando e perché</h3>
            <p>
              In preparazioni racing con motori che erogano potenze
              significativamente superiori all'originale, gli alberi
              di serie possono non essere sufficientemente rigidi —
              la flessione sotto carico aumenta il gioco effettivo
              tra gli ingranaggi e accelera l'usura. Produttori come
              Hinson, Pro Circuit e preparatori specializzati offrono
              alberi in acciaio con trattamento termico superiore
              e tolleranze ridotte. La sostituzione richiede spesso
              anche cuscinetti e manicotti di misura corrispondente.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Alberi;
