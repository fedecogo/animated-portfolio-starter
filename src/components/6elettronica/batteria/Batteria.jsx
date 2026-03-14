import "./batteria.scss";
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

const Batteria = () => {
  return (
    <section className="batteria" id="batteria">
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
              Elettronica — Batteria
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La batteria — riserva di energia, stabilità di tensione e base dell’avviamento
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La batteria non è solo “la cosa che fa partire la moto”.
              È un accumulatore elettrochimico che immagazzina energia sotto forma
              chimica e la restituisce come energia elettrica quando il sistema ne ha bisogno.
              In molte moto alimenta il motorino di avviamento, stabilizza la rete
              a bassa tensione, supporta centralina, quadro e servizi nei momenti
              in cui il motore non sta ancora producendo abbastanza energia autonoma.
              Quando è sana il sistema sembra trasparente; quando è debole,
              tutta la moto inizia a mostrare sintomi che sembrano scollegati
              ma hanno spesso la stessa origine: tensione insufficiente sotto carico.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Per capire davvero la batteria bisogna smettere di considerarla
              come un blocco nero con due poli. Dentro ci sono celle, piastre,
              elettrolita, resistenza interna e una chimica precisa che determina
              quanta energia può accumulare, quanta corrente può dare in poco tempo,
              quanto regge il freddo e come invecchia. Una batteria può misurare
              una tensione apparentemente buona a riposo e collassare appena si preme
              il pulsante di avviamento. Ecco perché la diagnosi seria non si ferma
              al semplice “segna 12 volt”.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia della batteria</span>
              <h3>Quattro idee fondamentali per leggere davvero il suo ruolo</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Accumulo energetico — la batteria immagazzina energia chimica
                  e la converte in energia elettrica disponibile per l’avviamento
                  e per i servizi a motore fermo o ai bassi giri
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Tensione e stabilità — non conta solo il valore nominale,
                  ma la capacità di mantenere la tensione quando il carico sale,
                  soprattutto durante lo spunto del motorino
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Corrente di avviamento — per avviare il motore serve una scarica
                  intensa in poco tempo; una batteria stanca può avere energia residua
                  ma non abbastanza corrente utile di spunto
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Invecchiamento — solfatazione, aumento della resistenza interna,
                  sbilanciamento delle celle o degrado chimico riducono prestazioni
                  molto prima del guasto totale
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
                Schema della batteria moto in sezione — celle interne, piastre,
                elettrolita, poli positivo e negativo; evidenziare il flusso di corrente
                verso il motorino di avviamento e i servizi
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Dentro la batteria</span>
            <p>
              Una batteria da moto non è un semplice serbatoio elettrico passivo.
              È un sistema chimico che accumula differenza di potenziale tra i poli
              e che, quando il circuito lo richiede, mette in movimento corrente.
              La sua qualità reale dipende da quanto bene riesce a conservare questa
              energia, da quanto rapidamente riesce a rilasciarla e da quanta caduta
              di tensione produce quando il carico diventa elevato.
            </p>
          </div>
        </motion.div>

        {/* ── PRINCIPI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="principiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="principiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fisica della batteria</span>
            <h3>Tensione nominale, capacità, corrente di spunto e resistenza interna</h3>
            <p>
              Per leggere correttamente una batteria servono pochi concetti,
              ma vanno capiti davvero. Molti problemi nascono proprio dal fatto
              che si confonde la tensione a vuoto con la reale salute del componente.
            </p>
          </motion.div>

          <motion.div className="principiGrid" variants={cardVariants}>
            <div className="principiCard">
              <span className="principiIdx">01</span>
              <h4>La tensione nominale è solo il punto di partenza</h4>
              <p>
                Una batteria da moto stradale è spesso a 12 V nominali, ma questo
                non significa che “12 volt = batteria buona”. A riposo una batteria
                sana completamente carica mostra tipicamente un valore superiore
                al nominale teorico. Il dato davvero utile è capire come si comporta
                quando viene chiesto lavoro reale: se il valore crolla durante l’avviamento,
                la batteria può essere già in difficoltà anche se a vuoto sembrava accettabile.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">02</span>
              <h4>La capacità in Ah dice quanto può erogare nel tempo, non quanto è “forte” nello spunto</h4>
              <p>
                Gli ampere-ora indicano quanta carica la batteria può teoricamente
                fornire nel tempo a un certo regime di scarica. È utile per capire
                l’autonomia elettrica del sistema, ma non basta da sola a descrivere
                la qualità dell’avviamento. Due batterie con capacità simile possono
                comportarsi in modo molto diverso quando devono erogare una corrente
                elevata in pochi secondi.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">03</span>
              <h4>La corrente di spunto è il parametro critico per il motorino di avviamento</h4>
              <p>
                Quando premi il pulsante di start, il motorino chiede una corrente
                molto elevata in un tempo molto breve. Una batteria può alimentare
                luci e quadro senza problemi e fallire proprio qui, perché non riesce
                a sostenere quella richiesta impulsiva. È il classico caso della moto
                che accende il quadro ma fa solo un click, gira piano o resetta tutto
                appena si tenta l’avviamento.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">04</span>
              <h4>La resistenza interna cresce con l’età e rovina il comportamento sotto carico</h4>
              <p>
                Più la resistenza interna aumenta, più la batteria spreca energia
                al proprio interno e più la tensione cala quando le si chiede corrente.
                Questo è uno dei motivi per cui batterie apparentemente “vive”
                si comportano male in avviamento. L’invecchiamento chimico non elimina
                subito tutta la capacità: prima peggiora la qualità della risposta
                nei momenti di massimo assorbimento.
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
            <span className="sectionLabel">Com’è fatta</span>
            <h3>Celle, piastre, elettrolita, separatori e terminali — la batteria come componente chimico-strutturale</h3>
            <p>
              La batteria è un componente apparentemente semplice, ma internamente
              è un equilibrio tra materiali, chimica e struttura meccanica.
              Capire la sua costruzione aiuta anche a capire come e perché invecchia.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>
            <div className="costruzioneCard">
              <span className="costruzioneIdx">01</span>
              <h4>Le celle — l’unità base da cui nasce la tensione totale</h4>
              <p>
                Una batteria a 12 V è composta da più celle collegate in serie.
                Ogni cella contribuisce con una differenza di potenziale propria;
                la somma delle celle produce la tensione totale del pacco.
                Se anche una sola cella degrada seriamente o si sbilancia,
                il comportamento dell’intera batteria peggiora in modo marcato.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">02</span>
              <h4>Piastre positive e negative — la superficie attiva dove avviene la reazione</h4>
              <p>
                Nelle batterie al piombo il cuore del sistema è fatto di piastre
                immerse o impregnate nell’elettrolita. La superficie disponibile,
                la qualità del materiale attivo e la stabilità strutturale delle piastre
                influenzano direttamente capacità, corrente erogabile e durata nel tempo.
                Quando le piastre si degradano o si solfatano, la batteria perde efficienza reale.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">03</span>
              <h4>Elettrolita e separatori — il mezzo che rende possibile la reazione senza corto circuito</h4>
              <p>
                L’elettrolita consente il movimento ionico necessario alla reazione chimica.
                I separatori tengono distinte le piastre impedendo contatti diretti
                indesiderati. A seconda della tecnologia, l’elettrolita può essere libero,
                assorbito o immobilizzato. Da questa differenza derivano comportamento,
                manutenzione, sicurezza e tolleranza alle vibrazioni.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">04</span>
              <h4>Poli e connessioni — il punto in cui la chimica incontra il resto della moto</h4>
              <p>
                I terminali della batteria sono il punto di contatto tra accumulatore
                e impianto. Se si ossidano, si allentano o lavorano male, anche una batteria
                buona può sembrare difettosa. La resistenza parassita su questi punti
                altera soprattutto i carichi elevati, quindi l’avviamento è spesso
                il primo momento in cui il problema si rende evidente.
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
            <span className="sectionLabel">Tecnologie batteria</span>
            <h3>Piombo-acido, AGM, gel e litio — stessa funzione, comportamenti molto diversi</h3>
            <p>
              Non tutte le batterie si equivalgono. Cambia la chimica, cambia
              il peso, cambia la risposta allo spunto, cambia la manutenzione
              e cambia anche la sensibilità a freddo, scarica profonda e ricarica.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>
            <div className="tipCard tipPiombo">
              <div className="tipCardTop">
                <span className="tipBadge badgePiombo">Piombo-acido</span>
                <span className="tipSub">Tradizionale · economica</span>
              </div>
              <h4>La tecnologia classica — semplice, diffusa, ma più sensibile a manutenzione e peso</h4>
              <p>
                È la soluzione storica. Offre costi contenuti e comportamento prevedibile,
                ma pesa di più e tollera peggio lunghi periodi di inattività se non mantenuta.
                Se trascurata, tende a solfatarsi e a perdere prestazioni in modo progressivo.
                Resta una scelta sensata dove il budget conta più della ricerca del massimo spunto per chilo.
              </p>
            </div>

            <div className="tipCard tipAGM">
              <div className="tipCardTop">
                <span className="tipBadge badgeAGM">AGM</span>
                <span className="tipSub">Sigillata · stabile · diffusa</span>
              </div>
              <h4>Elettrolita assorbito — più pratica per l’uso quotidiano e molto comune sulle moto moderne</h4>
              <p>
                Nelle AGM l’elettrolita è assorbito in materiali porosi, con migliore
                controllo interno e meno problemi di gestione rispetto alle tradizionali aperte.
                Offrono buona corrente di spunto, bassa manutenzione e buona resistenza
                alle vibrazioni. Per molte moto stradali rappresentano il compromesso migliore.
              </p>
            </div>

            <div className="tipCard tipGel">
              <div className="tipCardTop">
                <span className="tipBadge badgeGel">Gel</span>
                <span className="tipSub">Stabile · particolare</span>
              </div>
              <h4>Elettrolita immobilizzato in gel — buona robustezza, ma meno comune nelle applicazioni sportive</h4>
              <p>
                Le batterie al gel puntano sulla stabilità dell’elettrolita e su una buona
                resistenza a certe condizioni ambientali e vibrazionali. Tuttavia non sono
                sempre la scelta preferita dove serve il massimo spunto istantaneo.
                Vanno considerate per ciò che sono: valide in contesti specifici,
                ma non automaticamente superiori in tutto.
              </p>
            </div>

            <div className="tipCard tipLitio">
              <div className="tipCardTop">
                <span className="tipBadge badgeLitio">Litio</span>
                <span className="tipSub">Leggera · prestazionale</span>
              </div>
              <h4>Peso ridotto e grande prontezza, ma con esigenze più precise di gestione</h4>
              <p>
                Le batterie al litio hanno rivoluzionato il rapporto peso/prestazioni.
                Offrono spunto elevato e massa molto ridotta, qualità amatissime in ambito racing
                e nelle moto dove ogni chilo conta. Richiedono però attenzione a compatibilità,
                temperature basse, sistemi di ricarica e procedure corrette di mantenimento.
                Non sono una semplice sostituzione “plug and forget” in ogni contesto.
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
            <span className="captionTag">Caduta di tensione</span>
            <p>
              Un buon schema qui dovrebbe mostrare la differenza tra batteria a riposo
              e batteria sotto carico durante l’avviamento. Il concetto chiave è che
              una batteria può sembrare buona finché non le si chiede corrente vera.
              Nel momento in cui il motorino assorbe molto, la salute reale emerge subito:
              se la tensione collassa troppo, il sistema non riesce più a sostenere l’avvio.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Grafico o schema — confronto tra tensione a riposo e tensione durante avviamento;
                batteria sana vs batteria debole con caduta di tensione accentuata
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="diagnosiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnosiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e sintomi</span>
            <h3>Quadro acceso ma niente avviamento, reset, click del relè e scarica precoce — leggere la batteria nel modo giusto</h3>
            <p>
              La batteria raramente passa da perfetta a morta senza preavviso.
              Di solito lascia segnali chiari: avviamento più lento, tensione che crolla,
              servizi che si affievoliscono e comportamento peggiorato soprattutto a freddo.
            </p>
          </motion.div>

          <motion.div className="diagnosiGrid" variants={cardVariants}>
            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Il quadro si accende ma il motorino non gira o gira lentissimo</h4>
              <p>
                Questo è uno dei classici casi di batteria che mantiene una tensione
                sufficiente per i piccoli assorbimenti ma non riesce a sostenere il carico
                dell’avviamento. Il quadro vive, le spie ci sono, ma appena si preme start
                arriva un click, un mezzo giro o un crollo generale di tensione.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Reset del quadro o spegnimento della strumentazione durante start</h4>
              <p>
                Se la tensione scende troppo mentre il motorino assorbe, l’elettronica
                di bordo può riavviarsi o spegnersi momentaneamente. Questo è un segno
                molto indicativo di batteria debole o di forte resistenza parassita
                sui collegamenti principali. È un sintomo elettrico puro, non meccanico.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Avviamento peggiore a freddo — il calo di prestazioni diventa più evidente</h4>
              <p>
                Le basse temperature rendono più difficile l’erogazione di corrente
                e rallentano la chimica interna, soprattutto in certe tecnologie.
                Una batteria al limite mostra spesso il suo stato proprio al mattino
                o dopo una notte fredda: dove prima partiva, ora fatica, esita o fallisce.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Misurare a riposo non basta — la prova vera è sotto carico</h4>
              <p>
                Una diagnosi seria misura la batteria prima dell’avviamento
                e durante il tentativo di start. Il valore statico da solo può ingannare.
                La verifica sotto carico dice molto di più sulla salute reale:
                se il voltaggio precipita, la batteria o il collegamento ai poli
                non stanno sostenendo la richiesta.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Controllare poli e massa — una cattiva connessione imita una batteria guasta</h4>
              <p>
                Poli allentati, ossidazione o massa principale difettosa possono produrre
                sintomi quasi identici a quelli di una batteria stanca. Prima di condannare
                l’accumulatore bisogna sempre controllare serraggio, pulizia e qualità
                dei punti di connessione. Dove passa molta corrente, anche poca resistenza
                fa danni subito visibili.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeIntervallo">Intervallo</span>
              <h4>Manutenzione e sostituzione — meglio intervenire al decadimento che aspettare il guasto totale</h4>
              <p>
                Una batteria invecchia gradualmente. Se l’avviamento peggiora, la ricarica
                diventa meno stabile o la moto soffre dopo brevi soste, conviene agire
                prima di restare completamente a piedi. Controllo periodico della tensione,
                mantenitore nei lunghi fermi e attenzione ai primi sintomi allungano vita e affidabilità.
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
            <span className="cardTag">Idea chiave</span>
            <h3>Una batteria non va giudicata solo da quanti volt mostra, ma da come li regge quando il sistema le chiede corrente vera</h3>
            <p>
              Il punto decisivo non è la sola tensione a riposo. Conta la capacità
              di sostenere il carico senza collassare. È lì che si separa una batteria
              apparentemente viva da una davvero efficiente.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Errore classico</span>
            <h3>Cambiare la batteria senza controllare poli, massa o stato reale sotto carico</h3>
            <p>
              Molti problemi attribuiti alla batteria nascono in realtà da connessioni
              cattive o da diagnosi troppo superficiali. Una batteria nuova montata
              su terminali sporchi o su un impianto che non la ricarica correttamente
              non risolve il problema: lo sposta soltanto di poco nel tempo.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>Qui il focus è sulla batteria come accumulatore, non sull’intero sistema di ricarica</h3>
            <p>
              Questo capitolo tratta struttura, funzione, tecnologie, parametri e sintomi
              della batteria. Statore, regolatore, cablaggio generale e gestione completa
              della ricarica appartengono a sezioni dedicate e qui vengono richiamati
              solo quando servono per capire come la batteria si comporta nel sistema.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Batteria;