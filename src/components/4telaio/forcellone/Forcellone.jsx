import "./forcellone.scss";
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

const Forcellone = () => {
  return (
    <section className="forcellone" id="forcellone">
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
              Telaio — Forcellone
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Forcellone<br />
              <span className="accentText">e cuscinetti di pivot</span>
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il forcellone è il braccio oscillante che collega la ruota
              posteriore al telaio, consentendo alla sospensione di lavorare
              mentre la ruota rimane allineata. È il componente che trasmette
              la spinta della ruota al telaio, assorbe i carichi torsionali
              degli impatti laterali e sopporta la coppia frenante in
              frenata. In un fuoristrada moderno è quasi sempre in alluminio
              — e i suoi cuscinetti di pivot sono tra i componenti
              più sollecitati e più trascurati dell'intera moto.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              I cuscinetti di pivot del forcellone lavorano in condizioni
              estreme: carichi radiali altissimi, movimenti oscillatori
              continui con ampiezza ridotta — il tipo di movimento più
              aggressivo per un cuscinetto — e totale esposizione ad acqua
              e fango. Un forcellone che si muove in modo impreciso o
              con attrito eccessivo non è solo un difetto meccanico:
              è una sospensione che non può svolgere il suo lavoro.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del forcellone</span>
              <h3>Dal pivot alla ruota — i componenti in sequenza</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="s1">01</span>
                <span className="miniText">
                  <strong>Pivot di forcellone</strong> — il perno in acciaio
                  temprato che attraversa il telaio e il forcellone,
                  attorno al quale oscilla l'intera struttura
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s2">02</span>
                <span className="miniText">
                  <strong>Cuscinetti di pivot</strong> — solitamente due
                  cuscinetti a rulli cilindrici o conici pressati nella
                  testa del forcellone. Il componente più critico
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s3">03</span>
                <span className="miniText">
                  <strong>Travi laterali</strong> — le due braccia in
                  alluminio estruso o forgiato che formano il corpo
                  del forcellone. Portano la catena a sinistra
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s4">04</span>
                <span className="miniText">
                  <strong>Attacco ammortizzatore</strong> — punto di ancoraggio
                  del mono o del leveraggio al forcellone.
                  Zona ad alto stress torsionale
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s5">05</span>
                <span className="miniText">
                  <strong>Blocchetti ruota</strong> — regolano la tensione
                  catena scorrendo nelle guide del fodero. Determinano
                  l'allineamento della ruota posteriore
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── TIPI BLOCK ──────────────────────────────────────────────────── */}
        <motion.div
          className="tipiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tipiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Geometrie e costruzione</span>
            <h3>Box section, traliccio e forgiato — tre filosofie costruttive</h3>
            <p>
              Il forcellone non è solo un braccio rigido — è una struttura
              progettata per avere rigidità laterale massima (resistere alle
              forze di cornering) e una certa flessibilità torsionale controllata
              (per assorbire le irregolarità del terreno senza trasmettere
              tutto al telaio). Il bilanciamento tra questi due requisiti
              determina la geometria della sezione trasversale.
            </p>
          </motion.div>

          <motion.div className="tipiGrid" variants={cardVariants}>

            <div className="tipoCard tipoBox">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeBox">Box section</span>
                <span className="tipoRating tipoRatingGold">Standard moderno</span>
              </div>
              <div className="tipoSchema schemaBox">
                <div className="boxSection">
                  <div className="boxWall boxTop" />
                  <div className="boxWall boxBottom" />
                  <div className="boxWall boxLeft" />
                  <div className="boxWall boxRight" />
                </div>
                <span className="schemaLabel">sezione rettangolare chiusa</span>
              </div>
              <h4>Come funziona</h4>
              <p>
                La sezione scatolata chiusa offre il miglior rapporto
                tra rigidità torsionale e peso. Le travi sono estruse
                in alluminio con pareti di spessore variabile —
                più spesse nelle zone ad alto stress (testa e attacco
                ammortizzatore), più sottili nel tratto centrale.
                Quasi tutti i forcelloni MX e enduro moderni usano
                questa geometria. KTM, Husqvarna, Yamaha e Honda
                la adottano con variazioni nelle proporzioni e
                nella rastrematura delle sezioni.
              </p>
            </div>

            <div className="tipoCard tipoTraliccio">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeTraliccio">Traliccio</span>
                <span className="tipoRating tipoRatingSteel">Trial / vintage</span>
              </div>
              <div className="tipoSchema schemaTraliccio">
                <div className="traliccioLines">
                  <div className="trLine trLine1" />
                  <div className="trLine trLine2" />
                  <div className="trLine trLine3" />
                  <div className="trLine trLine4" />
                </div>
                <span className="schemaLabel">struttura aperta in tubi</span>
              </div>
              <h4>Come funziona</h4>
              <p>
                Struttura aperta composta da tubi in acciaio o alluminio
                saldati a formare una geometria triangolata. Più leggero
                della box section a parità di materiale — ma con rigidità
                torsionale inferiore. Tradizionale nel trial e nell'enduro
                estremo dove la flessibilità controllata è desiderata
                per il feedback del terreno. Riparabile in officina:
                un tubo deformato si sostituisce senza cambiare
                l'intero forcellone.
              </p>
            </div>

            <div className="tipoCard tipoForgiato">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeForgiato">Forgiato / fuso</span>
                <span className="tipoRating tipoRatingBlue">Racing premium</span>
              </div>
              <div className="tipoSchema schemaForgiato">
                <div className="forgiatoShape">
                  <div className="forgiatoInner" />
                </div>
                <span className="schemaLabel">forma organica ottimizzata</span>
              </div>
              <h4>Come funziona</h4>
              <p>
                Forgiatura o fusione in lega di alluminio ad alta resistenza
                (7075, 7050) che permette forme organiche impossibili
                con l'estrusione — sezioni che variano continuamente
                lungo il percorso della forza. Il processo FEA
                (Finite Element Analysis) identifica le zone di stress
                e la forma finale distribuisce il materiale esattamente
                dove serve. Costo produzione elevato — riservato
                a forcelloni racing e componenti aftermarket premium.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── CUSCINETTI BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="cuscinettiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="cuscinettiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">I cuscinetti di pivot</span>
            <h3>Il componente più sollecitato del forcellone — e il più trascurato</h3>
            <p>
              I cuscinetti di pivot del forcellone lavorano con movimenti
              oscillatori ad ampiezza limitata e carichi radiali elevatissimi.
              Questo tipo di movimento — angolo ridotto, carico alto,
              frequenza elevata — è il più aggressivo per un cuscinetto:
              i rulli non completano mai una rotazione completa e l'olio
              o grasso non si distribuisce uniformemente sulle piste.
              Il risultato è una zona di contatto fissa che si degrada
              rapidamente se il lubrificante non è rinnovato
              con frequenza sufficiente.
            </p>
          </motion.div>

          <motion.div className="cuscinettiContent" variants={cardVariants}>

            <div className="cuscinettiStati">

              <div className="statoCard statoBuono">
                <div className="statoIndicatore">
                  <div className="statoBar statoBarBuono" />
                </div>
                <span className="statoBadge statoBadgeBuono">Cuscinetti in ordine</span>
                <h4>Comportamento corretto</h4>
                <p>
                  Il forcellone oscilla senza attrito percepibile e senza
                  gioco laterale. Sollevando la ruota posteriore e spingendo
                  lateralmente il forcellone non si percepisce nessun
                  movimento trasversale — solo il movimento fluido
                  del perno sull'asse di oscillazione. La ruota segue
                  il terreno senza trasmettere impatti secchi al telaio.
                  Il mono lavora in modo progressivo senza punti duri.
                </p>
              </div>

              <div className="statoCard statoUsura">
                <div className="statoIndicatore">
                  <div className="statoBar statoBarUsura" />
                </div>
                <span className="statoBadge statoBadgeUsura">Usura iniziale</span>
                <h4>Gioco laterale nascente</h4>
                <p>
                  Piccolo gioco laterale percepibile spingendo il forcellone
                  trasversalmente con forza moderata. La ruota risponde
                  con ritardo agli impatti — c'è un piccolo "lag" tra
                  l'impulso e la risposta della sospensione. In rettilineo
                  la moto tende a muoversi lateralmente sul grezzo senza
                  che il pilota abbia sterzato. Il rumore caratteristico
                  è assente — l'usura si percepisce solo con test fisici
                  diretti.
                </p>
              </div>

              <div className="statoCard statoDanneggiato">
                <div className="statoIndicatore">
                  <div className="statoBar statoBarDanneggiato" />
                </div>
                <span className="statoBadge statoBadgeDanneggiato">Cuscinetti da sostituire</span>
                <h4>Gioco pronunciato — intervento immediato</h4>
                <p>
                  Gioco laterale evidente e percepibile anche senza
                  applicare forza. Il forcellone "balla" trasversalmente.
                  La moto è instabile ad alta velocità e in frenata —
                  il posteriore tende a deviare lateralmente sotto
                  frenata intensa. Un cuscinetto di pivot completamente
                  ceduto può portare alla rottura del perno di forcellone
                  o alla deformazione delle sedi nel telaio — danni
                  strutturali molto più costosi della sostituzione
                  preventiva dei cuscinetti.
                </p>
              </div>

            </div>

            <div className="cuscinettiNote">
              <span className="cuscinettiNoteTitle">Il test in 30 secondi</span>
              <p>
                Sollevare la ruota posteriore con un cavalletto.
                Afferrare il forcellone vicino alla ruota con
                entrambe le mani e spingere e tirare lateralmente
                con forza decisa. Qualsiasi movimento trasversale
                è gioco nei cuscinetti di pivot. Poi muovere
                il forcellone su e giù — deve scorrere libero
                senza attrito o punti duri. Attrito in oscillazione
                significa cuscinetti arrugginiti o a secco.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER ──────────────────────────────────────────── */}
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
              <span className="placeholderText">Sezione — testa forcellone con pivot, cuscinetti, sedi e perno etichettati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Il punto critico — la testa del forcellone</span>
            <p>
              La testa del forcellone — l'occhio che si infila attorno
              al perno del telaio — è la zona più sollecitata dell'intera
              struttura. Qui convergono il carico della ruota, la coppia
              frenante e le forze laterali del cornering. I cuscinetti
              pressati in questa zona lavorano sempre nello stesso
              settore angolare — non ruotano mai di 360° — e per questo
              richiedono grasso con altissima capacità di adesione
              alle superfici metalliche (EP, Extreme Pressure).
            </p>
          </div>
        </motion.div>

        {/* ── MANUTENZIONE BLOCK ──────────────────────────────────────────── */}
        <motion.div
          className="manutenzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="manutenzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Smontaggio e lubrificazione</span>
            <h3>Come si smontano i cuscinetti di pivot — la procedura corretta</h3>
            <p>
              I cuscinetti di pivot del forcellone sono cuscinetti a rulli
              cilindrici in cages (gabbia) pressati nelle sedi della testa
              del forcellone. Non si rilubrificano senza smontaggio —
              il grasso non penetra nelle piste dall'esterno. La procedura
              di smontaggio richiede strumenti specifici ma è alla portata
              di un meccanico di media capacità con l'attrezzatura giusta.
            </p>
          </motion.div>

          <motion.div className="manutenzioneGrid" variants={cardVariants}>

            <div className="manuCard manuCard1">
              <span className="manuBadge">Step 1</span>
              <h4>Smontaggio del pivot</h4>
              <p>
                Svitare il dado del perno di forcellone (lato destro).
                Estrarre il perno facendo attenzione a non deformare
                le sedi nel telaio — il perno deve uscire scorrevole,
                non a martellate. Se è bloccato, verificare se ci sono
                dadi di blocco aggiuntivi e lubrificare con penetrante
                prima di forzare. Con il perno estratto il forcellone
                si abbassa — sostenere la ruota posteriore con un
                cavalletto o una corda appesa al forcellone.
              </p>
            </div>

            <div className="manuCard manuCard2">
              <span className="manuBadge">Step 2</span>
              <h4>Estrazione dei cuscinetti</h4>
              <p>
                I cuscinetti sono pressati con interferenza nelle sedi
                della testa del forcellone. Richiedono un estrattore
                interno o un punzone di diametro leggermente inferiore
                alla sede. Colpire sempre dalla lato opposto all'estrazione
                — mai direttamente sulla gabbia del cuscinetto. Le sedi
                in alluminio si rovinano facilmente: lavorare sempre
                in asse e con forza controllata. Ispezionare le sedi
                alla ricerca di rigature, ovalizzazione o corrosione.
              </p>
            </div>

            <div className="manuCard manuCard3">
              <span className="manuBadge">Step 3</span>
              <h4>Ispezione e pulizia</h4>
              <p>
                Pulire le sedi con sgrassante e panno pulito.
                Ispezionare le piste dei vecchi cuscinetti: ruggine
                o impronte nelle zone di contatto confermano che
                il grasso era esaurito — e indicano la frequenza
                di manutenzione necessaria per la prossima stagione.
                Pulire il perno di forcellone con carta abrasiva fine
                (400 grit) se presenta ruggine superficiale — non
                va bene nessun gioco tra perno e cuscinetti.
              </p>
            </div>

            <div className="manuCard manuCard4">
              <span className="manuBadge">Step 4</span>
              <h4>Montaggio e lubrificazione</h4>
              <p>
                Imballare i nuovi cuscinetti di grasso EP (Extreme
                Pressure) ad alta viscosità prima del montaggio —
                non montare mai cuscinetti di pivot a secco. Pressare
                le sedi esterne nei fori con un pressore di diametro
                pari al diametro esterno della sede — mai colpire
                la gabbia o i rulli. Ricoprire il perno di grasso
                prima del reinserimento. Serrare il dado del perno
                alla coppia specificata dal manuale — il precarico
                assiale varia per modello.
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
            <span className="cardTag">Intervallo</span>
            <h3>Ogni quanto lubrificare — le linee guida per il fuoristrada</h3>
            <p>
              I manuali tecnici indicano generalmente 25 – 40 ore di
              utilizzo come intervallo di lubrificazione per i cuscinetti
              di pivot nel fuoristrada intenso. Un'ora in guado fangoso
              vale dieci ore su terreno asciutto. Come regola pratica:
              apertura e rilubrificazione a ogni fine stagione per uso
              normale, ogni 20 ore per uso racing intenso con guadi.
              I kit cuscinetti aftermarket completi (All Balls, SKF,
              Pivot Works) per forcellone e leveraggio costano
              40 – 90 euro — molto meno di un forcellone danneggiato.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>Kit cuscinetti aftermarket — quando vale la pena upgradarsi</h3>
            <p>
              I kit cuscinetti aftermarket di qualità (All Balls Racing,
              SKF, Pivot Works) utilizzano cuscinetti con tolleranze
              più strette rispetto all'OEM e sigilli esterni migliorati
              che resistono meglio a fango e acqua. Per un uso racing
              o per chi fa molti guadi la differenza è concreta:
              i sigilli OEM durano spesso 10 – 15 ore in condizioni
              estreme, i sigilli aftermarket premium 25 – 35 ore.
              Il costo aggiuntivo rispetto all'OEM è tipicamente
              del 20 – 40% — ampiamente giustificato dalla maggiore
              durata e dalla riduzione delle operazioni di manutenzione.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Segnali di guida</span>
            <h3>Come cuscinetti usurati cambiano il comportamento in pista</h3>
            <p>
              Il segnale più sottile è la perdita di trazione posteriore
              in curva: il forcellone con gioco nei cuscinetti non
              trasmette la spinta della ruota in modo diretto —
              c'è un piccolo ritardo e una micro-deviazione laterale
              che il pilota legge come "scivolamento" anche su
              terreno con aderenza sufficiente. In frenata intensa
              il posteriore non segue una traiettoria lineare —
              c'è un accenno di "weave" (oscillazione laterale)
              che diventa evidente ad alta velocità. Dopo la
              sostituzione dei cuscinetti il feedback del posteriore
              torna immediato e preciso — i piloti descrivono
              la sensazione come "trovare di nuovo la moto".
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Forcellone;
