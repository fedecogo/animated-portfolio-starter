import "./pinza.scss";
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

const Pinza = () => {
  return (
    <section className="pinza" id="pinza">
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
              Sistema frenante — Pinza del freno
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La pinza del freno — come la pressione idraulica diventa forza sulle pastiglie
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La pinza del freno è l'ultimo anello idraulico della catena frenante:
              riceve la pressione generata dalla pompa attraverso il fluido e la converte
              in forza meccanica sui pistoncini, che a loro volta spingono le pastiglie
              contro il disco. È il componente che subisce il maggiore stress termico
              nell'impianto — lavora a contatto diretto con il disco incandescente —
              e quello in cui un guasto, il più delle volte silenzioso e progressivo,
              si manifesta come perdita di feeling, frenata asimmetrica
              o, nei casi estremi, perdita totale dell'efficienza.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il corpo della pinza deve essere abbastanza rigido da non deformarsi
              sotto le forze in gioco — una pinza che si apre sotto pressione
              disperde parte del volume di fluido in deformazione elastica invece
              di trasmetterlo ai pistoncini, e il pilota percepisce questo come
              una leva che non ha il "fermo" che dovrebbe avere. I pistoncini
              avanzano progressivamente man mano che le pastiglie si consumano —
              è la compensazione automatica dell'usura — e devono poter
              scorrere senza attrito, ritirarsi quando la pressione cessa
              e resistere a temperature che possono superare i 200 °C
              senza trasferire quel calore al fluido.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia della pinza</span>
              <h3>Quattro componenti che lavorano insieme</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Corpo pinza — struttura in alluminio che alloggia i pistoncini
                  e i canali del fluido; la sua rigidità determina il feeling
                  diretto della leva; si deforma anche solo di 0,1 mm sotto
                  pressione intensa — le pinze billet riducono questa deformazione
                  del 30–50% rispetto ai corpi pressofusi
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Pistoncini — avanzano sotto la spinta idraulica e spingono
                  le pastiglie contro il disco; il loro diametro moltiplicato
                  per la pressione determina la forza frenante; si compensano
                  automaticamente all'usura avanzando di qualche decimo per volta
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Tenuta idraulica e soffietto — la tenuta sigilla il fluido
                  e provoca il richiamo del pistoncino al rilascio della leva;
                  il soffietto protegge il pistoncino da polvere e acqua;
                  entrambi devono essere integri per evitare perdite e inceppamenti
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Nipple di spurgo — posizionato nel punto più alto del canale
                  interno; permette all'aria (più leggera del fluido) di
                  raccogliersi e venire espulsa durante lo spurgo; la procedura
                  completa è trattata nella sezione 06
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
              <span className="placeholderText">Schema sezione — pinza a 4 pistoncini fissa: corpo, pistoncini, tenute quadring, soffietti, canale fluido, nipple spurgo; evidenziare la direzione delle forze in frenata</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Sezione pinza fissa 4 pistoni</span>
            <p>
              In una pinza fissa a 4 pistoncini il fluido entra dal raccordo
              della tubazione e si distribuisce nei canali interni raggiungendo
              tutti e quattro i pistoncini simultaneamente. La pressione identica
              su tutti i pistoni garantisce una forza uniforme sulla pastiglia —
              premessa per un contatto omogeneo col disco e un'usura regolare.
              Il nipple di spurgo è posizionato nella zona più alta del canale
              perché l'aria, più leggera del fluido, sale e vi si accumula.
            </p>
          </div>
        </motion.div>

        {/* ── FISICA BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="fisicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="fisicaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fisica della pinza</span>
            <h3>Moltiplicazione della forza, rigidità del corpo, pinza flottante vs fissa e gestione termica</h3>
            <p>
              Quattro principi fisici governano il comportamento della pinza.
              Capirli permette di interpretare le differenze tra i componenti
              — perché una pinza billet si sente diversa da una pressofusa,
              perché i pistoncini in titanio costano dieci volte quelli in alluminio
              e perché una pinza flottante con perni inceppati può essere
              più pericolosa di una usurata.
            </p>
          </motion.div>

          <motion.div className="fisicaGrid" variants={cardVariants}>

            <div className="fisicaCard">
              <span className="fisicaIdx">01</span>
              <h4>Pascal nella pinza — come la sezione dei pistoncini moltiplica la forza</h4>
              <p>
                La pressione generata dalla pompa (trattata nella sezione 01)
                si trasmette integra ai pistoncini della pinza secondo la legge
                di Pascal. La forza risultante è F = P × A, dove A è la sezione
                totale dei pistoncini. Una pompa con bore da 11 mm (sezione
                ≈ 95 mm²) che genera 1,05 MPa su una pinza a 4 pistoncini
                da 28 mm ciascuno (sezione totale ≈ 2464 mm²) produce una
                forza di chiusura di circa 2600 N — 26 volte la forza applicata
                alla leva. Aumentare il diametro dei pistoncini aumenta la forza
                frenante ma richiede alla pompa di spostare più fluido per far
                avanzare i pistoni dello stesso distanza — il feeling della leva
                cambia. Pinza e pompa sono un sistema inscindibile: modificarne
                uno senza considerare l'altro altera l'equilibrio intero.
              </p>
            </div>

            <div className="fisicaCard">
              <span className="fisicaIdx">02</span>
              <h4>Pinza flottante vs pinza fissa — due architetture con compromessi opposti</h4>
              <p>
                La pinza flottante (o scorrevole) ha pistoncini su un solo lato:
                quando avanzano, spingono la pastiglia contro il disco e
                fanno scorrere il corpo della pinza sui perni guida nella
                direzione opposta, portando l'altra pastiglia a contatto.
                Vantaggi: semplice, leggera, economica. Svantaggi: i perni
                guida si ossidano e si inceppano (la causa più comune di frenata
                asimmetrica nelle moto da fuoristrada), il corpo che scorre
                aggiunge cedevolezza e riduce il feeling diretto della leva,
                l'usura delle pastiglie può diventare asimmetrica. La pinza
                fissa ha pistoncini su entrambi i lati: nessuno sliding, nessun
                perno guida, corpo rigidamente ancorato alla forcella o al
                forcellone. Feeling più diretto, usura simmetrica delle pastiglie,
                nessun rischio di perni inceppati. Il prezzo: più complessa,
                più pesante, più costosa. Standard per le pinze anteriori
                di qualità su tutte le discipline.
              </p>
            </div>

            <div className="fisicaCard">
              <span className="fisicaIdx">03</span>
              <h4>Il numero di pistoncini e il feeling — più pistoni non è sempre meglio</h4>
              <p>
                Un singolo pistoncino di grande diametro produce la stessa
                forza totale di due pistoncini più piccoli con uguale sezione
                totale — la matematica di Pascal è indifferente alla distribuzione.
                Ma la distribuzione conta per il contatto con la pastiglia:
                due o quattro pistoncini distribuiscono la forza più uniformemente
                sulla superficie della pastiglia, riducendo il rischio di
                deformazione parziale e garantendo un'usura più regolare.
                Con 4 pistoncini ognuno ha un diametro minore: avanzano
                più velocemente per una data pressione (minore volume spostato
                per unità di area), il che si traduce in una leva che risponde
                prima ma con meno "spazio" di modulazione — la frenata è
                più pronta. Con 2 pistoncini grandi la risposta è più lineare
                e graduale. La scelta dipende dalla disciplina:
                cross ed enduro privilegiano la modulabilità, motard la potenza.
              </p>
            </div>

            <div className="fisicaCard">
              <span className="fisicaIdx">04</span>
              <h4>Gestione termica — tenere il calore lontano dal fluido</h4>
              <p>
                Il disco raggiunge 300–400 °C in frenata intensa. Il corpo
                della pinza si scalda per irraggiamento e conduzione fino
                a 150–250 °C. Se questo calore raggiunge il fluido nei canali
                interni, si rischia il vapor lock (sezione 04 — olio freni).
                Il percorso termico è: disco → pastiglia → pistoncino → fluido.
                Ogni elemento può isolare o condurre. I pistoncini in alluminio
                conducono meglio del fluido ma peggio dell'acciaio;
                i pistoncini in fenoliche (composito termoplastico) sono
                ottimi isolatori ma meno rigidi; i pistoncini in titanio
                combinano bassa conduttività termica (≈ 22 W/m·K vs 50 per l'acciaio)
                con elevata rigidità — la soluzione premium per uso in pista.
                Il soffietto e lo spazio d'aria tra disco caldo e pastiglia
                contribuiscono all'isolamento, ma nessun materiale elimina
                completamente la trasmissione termica — la sostituzione
                regolare del fluido rimane il presidio fondamentale.
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
            <span className="sectionLabel">Costruzione e materiali</span>
            <h3>Corpo, pistoncini, tenute e nipple — cosa sono, come funzionano, perché i materiali contano</h3>
            <p>
              Ogni componente della pinza ha una funzione specifica
              e un materiale ottimale per quella funzione. Conoscere la costruzione
              interna permette di fare scelte consapevoli in fase di acquisto,
              di eseguire la manutenzione corretta e di riconoscere
              i segni di usura prima che diventino un guasto.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">01</span>
              <h4>Il corpo in alluminio — forgiato, billet CNC e monoblocco</h4>
              <p>
                Il corpo della pinza deve essere rigido assialmente (resistere
                alla pressione che tende ad aprirlo) e rigido torsionalmente
                (resistere alla coppia frenante trasmessa dal disco attraverso
                le pastiglie). Le pinze OEM standard sono in alluminio pressofuso
                o forgiato — processo economico con buona resistenza meccanica.
                Le pinze aftermarket racing (Brembo GP4-RX, Stylema, Beringer, ISR)
                sono fresate da pieno (billet CNC): meno porosità interna,
                tolleranze sul bore più strette, canali fluido con sezione
                controllata. Le pinze monoblocco non hanno la giunzione centrale
                con bulloni (dove le pinze a due semi-corpi possono flettersi
                leggermente): sono un singolo pezzo, con rigidità massima
                e nessun punto di potenziale perdita tra le metà.
                Il peso di una pinza a 4 pistoncini va da 300 g (billet alluminio)
                a 600 g+ (acciaio, raro nelle moto moderne).
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">02</span>
              <h4>I pistoncini — alluminio, acciaio, fenolica e titanio</h4>
              <p>
                Il materiale del pistoncino influenza due proprietà critiche:
                la conduttività termica (quanta energia trasmette al fluido)
                e la durabilità superficiale (resistenza ai graffi durante
                il servizio e al push-back manuale).
                Alluminio anodizzato: il più comune, leggero, discreta resistenza
                ai graffi dopo l'anodizzazione dura; conduttività termica
                di ≈ 160 W/m·K — trasmette calore moderatamente.
                Acciaio inossidabile: più duro, più resistente ai graffi,
                più facile da riusare; conduttività di ≈ 15 W/m·K — ottimo
                isolante rispetto all'alluminio, ma più pesante.
                Fenolica (termoplastica composita): eccellente isolante termico
                (conduttività &lt; 1 W/m·K), molto leggera; fragile — può
                scheggiarsi se colpita con attrezzi metallici durante il servizio.
                Titanio: la soluzione premium — conduttività ≈ 22 W/m·K,
                densità di 4,5 g/cm³ (45% più leggero dell'acciaio), elevata
                rigidità. Usato nelle pinze racing di alta gamma.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">03</span>
              <h4>Tenuta idraulica e soffietto — sigillo e richiamo del pistoncino</h4>
              <p>
                La tenuta idraulica (quadring o seal circolare in EPDM) siede
                in una gola ricavata nel bore della pinza. La sua funzione
                primaria è ovvia: sigillare il fluido in pressione. La funzione
                secondaria è meno nota ma altrettanto critica: il rollback.
                Quando il pistoncino avanza sotto pressione, la tenuta si
                deforma leggermente nella gola. Quando la pressione cessa,
                la tenuta tende a tornare alla forma rilassata e trascina
                il pistoncino indietro di 0,1–0,3 mm — creando il piccolo
                gioco tra pastiglia e disco che evita l'attrito residuo.
                Una tenuta usurata o indurita perde l'elasticità necessaria
                al rollback: il pistoncino rimane in contatto col disco
                anche senza pressione, generando calore e usura costante.
                Il soffietto (dust boot) è la prima barriera contro fango,
                acqua e polvere — se lacerato, permette l'ingresso di abrasivi
                che graffiano il pistoncino e il bore, causando inceppamento.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">04</span>
              <h4>Il nipple di spurgo — posizione, filetto e cono di tenuta</h4>
              <p>
                Il nipple di spurgo (o vite di spurgo, bleed nipple) è un
                elemento hollow (cavo) con un foro laterale sul gambo: chiuso
                è sigillato dal cono di tenuta sul sedile; aperto permette
                al fluido e all'aria di uscire. Deve essere posizionato
                nel punto geometricamente più alto del canale fluido interno
                della pinza: l'aria è più leggera del liquido e sale —
                un nipple mal posizionato lascia sacche d'aria intrappolate
                che nessuna procedura di spurgo riesce a raggiungere.
                Le pinze a 4 pistoncini con canale separato per le due metà
                hanno due nipple (uno per lato): lo spurgo deve iniziare
                dal nipple più lontano dalla pompa. Il filetto è standardizzato
                (M8 o M10); la sede conica può danneggiarsi se il nipple viene
                eccessivamente stretto — serrare solo fino alla chiusura senza
                sforzare, poi controllare che non goccioli dopo la procedura.
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
            <span className="sectionLabel">Pinza per disciplina</span>
            <h3>Cross, enduro, motard e sportiva — architettura, numero di pistoncini e caratteristiche richieste</h3>
            <p>
              Il tipo di pinza non è una questione estetica o di budget:
              è una scelta progettuale che dipende dalle forze in gioco,
              dalle condizioni ambientali e dai requisiti di peso.
              Una pinza da cross su una moto da motard sarebbe insufficiente;
              una da motard su un fuoristrada sarebbe fragile e pesante.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>

            <div className="tipCard tipCross">
              <div className="tipCardTop">
                <span className="tipBadge badgeCross">Cross — MX</span>
                <span className="tipSub">2 pistoni ant. · 1 pistone post.</span>
              </div>
              <h4>Leggerezza e modularità — il freno anteriore è usato con precisione, non al massimo</h4>
              <p>
                Nel cross il terreno non compatto limita la forza frenante
                massima applicabile prima del bloccaggio della ruota —
                una pinza da 4 pistoncini con bordo aderenza su sabbia
                o argilla è quasi sempre al limite trazione, non al limite
                della pinza. La priorità è la modulabilità e il peso contenuto.
                Le moto da cross moderne montano pinze anteriori a 2 pistoncini
                fissi (Brembo su KTM/Husqvarna, Nissin su Honda, Braktec
                su Yamaha) con corpo in alluminio leggero. Le pinze a 4 pistoncini
                esistono in versione MX (Brembo M50 Racing) ma sono
                l'eccezione per uso in gara al massimo livello. Il freno
                posteriore con singolo pistoncino flottante è integrato
                nell'attacco sul forcellone — protetto ma esposto a fango.
                I perni guida della pinza posteriore flottante vanno
                lubrificati e verificati periodicamente.
              </p>
            </div>

            <div className="tipCard tipEnduro">
              <div className="tipCardTop">
                <span className="tipBadge badgeEnduro">Enduro</span>
                <span className="tipSub">2 pistoni ant. · 1 pistone post.</span>
              </div>
              <h4>Tenuta all'acqua e affidabilità nelle lunghe distanze — le priorità cambiano rispetto al cross</h4>
              <p>
                L'enduro condivide la configurazione base con il cross (2 pistoncini
                anteriori, 1 posteriore) ma con requisiti aggiuntivi: le moto
                attraversano guadi, vengono lavate in condizioni difficili
                e devono funzionare in modo affidabile per 3–4 ore consecutive
                di gara. I soffietti dei pistoncini devono resistere
                all'immersione — quelli di qualità mediocre si staccano
                dall'alloggiamento e lasciano entrare acqua e detriti.
                L'hard enduro e il trial ad alto livello usano a volte
                pinze a 4 pistoncini all'anteriore per avere più potenza
                e modulabilità nelle discese tecniche dove il grip è elevato
                anche su roccia bagnata. Il freno posteriore è usato
                molto più intensamente nell'enduro che nel cross — le soste
                su pendii ripidi, il controllo della trazione in salita
                e la modulazione in discesa lo sollecitano continuamente;
                il pistoncino posteriore e la tenuta sono i componenti più
                soggetti a usura accelerata.
              </p>
            </div>

            <div className="tipCard tipMotard">
              <div className="tipCardTop">
                <span className="tipBadge badgeMotard">Motard</span>
                <span className="tipSub">4 pistoni ant. (radiale) · 2 pistoni post.</span>
              </div>
              <h4>Massima potenza e resistenza termica — l'asfalto cambia tutto</h4>
              <p>
                Sul asfalto il grip è molto più alto che sul fuoristrada:
                la moto può decelerare da 120 km/h in 30 metri senza bloccare
                la ruota. Questo significa forze sul disco e sulla pinza
                enormemente superiori, temperature elevate e cicli frenata-rilascio
                molto più ravvicinati rispetto all'enduro. Le pinze da motard
                racing usano 4 pistoncini radiali (Brembo M4, M50, Stylema,
                Beringer A11/A12) — il montaggio radiale cambia la geometria
                di reazione alla coppia frenante, argomento della sezione 05.
                I pistoncini in titanio o in anodizzato duro di qualità
                racing sono importanti qui: le temperature sostenute durante
                una sessione in pista possono mettere a rischio il fluido
                se i pistoncini non isolano sufficientemente. Il disco è
                più grande (300–320 mm) e i pistoncini devono avanzare
                di più per compensare la maggiore distanza — la tenuta
                lavora a corsa più lunga e si consuma prima.
              </p>
            </div>

            <div className="tipCard tipSportiva">
              <div className="tipCardTop">
                <span className="tipBadge badgeSportiva">Sportiva / Stradale 2T</span>
                <span className="tipSub">2 pistoni ant. · 1 pistone post.</span>
              </div>
              <h4>Impianto OEM proporzionato — il controllo prima dell'upgrade</h4>
              <p>
                Le 2T stradali (Aprilia RS 125, Honda NSR 125, Yamaha TZR,
                Gilera Runner) montano pinze proporzionate alla cilindrata
                e al peso contenuto — tipicamente 2 pistoncini all'anteriore
                e 1 al posteriore, adeguati per le forze in gioco con moto
                da 80–100 kg e motori da 20–34 CV. Il problema più comune
                su queste moto, specialmente se con anni di inattività,
                sono i pistoncini inceppati: la ruggine sotto il soffietto,
                il fluido vecchio che ha degradato le tenute o la semplice
                inattività prolungata bloccano il pistoncino in posizione.
                Prima di qualsiasi upgrade (pastiglie racing, disco maggiorato)
                verificare che i pistoncini scorrino liberamente, che le tenute
                non perdano e che il soffietto sia integro. Una pinza
                OEM funzionante è più sicura di una aftermarket installata
                su un impianto non controllato.
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
            <span className="captionTag">Pinza flottante vs fissa</span>
            <p>
              Confronto tra le due architetture in sezione: la pinza flottante
              con il corpo che scorre sui perni guida (frecce laterali)
              e il pistoncino sul solo lato sinistro; la pinza fissa con pistoncini
              su entrambi i lati e corpo rigidamente ancorato. Nella pinza flottante
              i perni guida sono il punto critico — ossidazione o corrosione
              impedisce lo scorrimento e blocca la pastiglia sul lato
              senza pistoncino contro il disco.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Schema comparativo — pinza flottante (perni guida, pistoncino singolo) vs pinza fissa (pistoncini opposti, corpo rigido); evidenziare la direzione di scorrimento e il punto di fissaggio</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── PISTONCINI BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="pistonciniBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="pistonciniHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">I pistoncini in dettaglio</span>
            <h3>Avanzamento, inceppamento, push-back e ispezione — la manutenzione concreta della pinza</h3>
            <p>
              La maggior parte dei problemi reali della pinza riguarda
              i pistoncini: avanzano ma non tornano, si inceppano asimmetricamente,
              vengono danneggiati durante la manutenzione. Capire come si comportano
              in ogni fase — frenata, rilascio, usura, sostituzione pastiglie —
              è la conoscenza pratica più utile per gestire l'impianto frenante.
            </p>
          </motion.div>

          <motion.div className="pistonciniGrid" variants={cardVariants}>

            <div className="pistonciniCard pistonciniAvanzamento">
              <div className="pistonciniCardTop">
                <span className="pistonciniBadge badgeAvanzamento">Avanzamento</span>
              </div>
              <h4>Come i pistoncini compensano automaticamente l'usura delle pastiglie</h4>
              <p>
                Man mano che le pastiglie si consumano, lo spessore si riduce
                e la distanza tra le facce della pastiglia e il disco aumenta.
                Ogni volta che si frena, i pistoncini devono avanzare di più
                per portare la pastiglia a contatto col disco — la corsa
                aumenta progressivamente. Questo avanzamento è permanente:
                la tenuta idraulica si riposiziona nella gola con il pistoncino
                nella nuova posizione estesa, e il rollback è sempre relativo
                a quella posizione, non alla posizione originale. Il fluido
                necessario a occupare il volume aggiuntivo dentro la pinza
                viene fornito dal serbatoio della pompa — motivo per cui il
                livello del serbatoio scende con l'usura delle pastiglie
                e non va rabboccato al massimo prima di sostituirle.
              </p>
            </div>

            <div className="pistonciniCard pistonciniInceppato">
              <div className="pistonciniCardTop">
                <span className="pistonciniBadge badgeInceppato">Inceppamento</span>
              </div>
              <h4>Pistoncino bloccato — il guasto silenzioso che porta al freno sempre inserito</h4>
              <p>
                Un pistoncino inceppato non si ritira dopo la frenata —
                rimane in posizione avanzata con la pastiglia premuta contro il disco.
                Il sintomo è il freno che trascina: il disco si scalda
                anche a riposo, la pastiglia si consuma asimmetricamente
                (quella sul lato inceppato scompare molto prima dell'altra),
                il fluido si surriscalda. Cause principali: corrosione del
                pistoncino per acqua entrata dal soffietto lacerato,
                tenuta gonfia per fluido incompatibile o degradato,
                particelle solide nel fluido che graffiano il bore,
                inattività prolungata con fluido vecchio che incolla
                il pistoncino in posizione. Fix: rimuovere la pinza,
                espellere parzialmente il pistoncino usando la pressione
                idraulica della pompa (staccato dalla pinza, o con la
                vecchia pastiglia come tampone), pulire la superficie
                esterna del pistoncino con brake cleaner e spazzola morbida —
                mai metallo sul bore — e valutare se la rigatura è tollerabile
                o se il pistoncino va sostituito.
              </p>
            </div>

            <div className="pistonciniCard pistonciniPushback">
              <div className="pistonciniCardTop">
                <span className="pistonciniBadge badgePushback">Push-back</span>
              </div>
              <h4>Come respingere i pistoncini correttamente durante il cambio pastiglie</h4>
              <p>
                Quando si montano pastiglie nuove (più spesse), i pistoncini
                devono essere respinti nel bore per fare spazio. La procedura
                corretta inizia togliendo un po' di fluido dal serbatoio:
                il volume del pistoncino che rientra nel bore deve andare
                da qualche parte, e se il serbatoio è al massimo tracima —
                il fluido DOT attacca le vernici. Strumento corretto:
                un apposito spingitore a faccia piatta (caliper piston tool),
                un pezzo di legno duro con superficie liscia o la vecchia
                pastiglia usata come interfaccia. Mai un cacciavite:
                la lama graffia il pistoncino e il bordo del soffietto,
                e un singolo graffio profondo può essere l'inizio
                dell'inceppamento. Nelle pinze a 4 pistoncini spingere
                tutti contemporaneamente con l'apposito spreader — o uno
                per volta alternando i lati — per non creare pressione
                asimmetrica sul fluido interno. Verificare che entrambi
                i pistoncini scorrano uniformemente: quello che resiste
                mentre l'altro cede facilmente è già in fase iniziale
                di inceppamento.
              </p>
            </div>

            <div className="pistonciniCard pistonciniIspezione">
              <div className="pistonciniCardTop">
                <span className="pistonciniBadge badgeIspezione">Ispezione</span>
              </div>
              <h4>Cosa controllare ad ogni cambio pastiglie — soffietti, scorrimento, bore</h4>
              <p>
                Il cambio pastiglie è l'occasione per ispezionare la pinza
                senza doverla smontare completamente. Verificare: il soffietto
                è integro, aderente e non collassato? Un soffietto lacerato
                o staccato dall'alloggiamento lascia entrare fango acqua —
                sostituirlo subito. Il pistoncino scorre uniformemente
                quando si preme e si rilascia la leva con la pinza in mano?
                Deve avanzare di qualche mm e ritrarsi immediatamente al rilascio.
                Se rimane avanzato o torna con ritardo, la tenuta sta perdendo
                elasticità. La superficie visibile del pistoncino è liscia
                e priva di corrosione? L'ossidazione superficiale è tollerabile
                se si rimuove con brake cleaner; i graffi profondi o la
                corrosione a vaiolatura indicano che il pistoncino va sostituito.
                Usare solo brake cleaner o alcool isopropilico per la pulizia —
                mai prodotti a base petrolio che attaccano le guarnizioni EPDM.
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
              <span className="placeholderText">GIF o sequenza — cambio pastiglie: rimozione fluido dal serbatoio, push-back pistoncini con tool piatto, montaggio nuove pastiglie; evidenziare il tool corretto vs cacciavite sbagliato</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Cambio pastiglie — procedura</span>
            <p>
              Il cambio pastiglie è la manutenzione più frequente dell'impianto
              frenante e, se eseguita correttamente, offre l'occasione
              di ispezionare la pinza. La sequenza corretta: rimuovere
              parte del fluido dal serbatoio → proteggere le superfici verniciate
              → respingere i pistoncini con tool piatto → ispezionare
              soffietti e pistoncini → montare le nuove pastiglie →
              pompare la leva fino a raggiungere la corsa corretta.
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
            <h3>Riconoscere i guasti della pinza — sintomi, misure e intervalli di revisione</h3>
            <p>
              I problemi della pinza si manifestano in modo spesso ambiguo —
              gli stessi sintomi (leva morbida, frenata asimmetrica)
              possono avere origini diverse. Questi indicatori aiutano
              a isolare la pinza come causa prima di intervenire sugli altri
              componenti dell'impianto.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Freno che trascina — disco caldo anche senza frenare</h4>
              <p>
                Dopo una frenata normale, sollevare la ruota da terra e farla
                girare: deve ruotare liberamente con decelerazione dovuta solo
                all'attrito dei cuscinetti. Se si ferma prima del previsto
                o se il disco è caldo al tatto dopo un tratto percorso senza
                frenare, un pistoncino non si è ritirato. Verificare anche
                il colore della pastiglia sul lato inceppato — sarà consumata
                molto più dell'altra. Cause: tenuta usurata senza rollback,
                pistoncino inceppato, perno guida bloccato (pinza flottante).
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Usura asimmetrica delle pastiglie — una consuma, l'altra no</h4>
              <p>
                In una pinza a 2 pistoncini entrambi devono avanzare ugualmente.
                Se una pastiglia è consumata del doppio dell'altra, un pistoncino
                è parzialmente bloccato. Nelle pinze flottanti l'asimmetria
                è quasi sempre causata dal perno guida che non scorre — la metà
                senza pistoncino non si porta a contatto e la pastiglia rimane
                quasi integra mentre quella sul lato del pistoncino si consuma.
                Prima di imputare i pistoncini in una pinza flottante:
                verificare e lubrificare i perni guida con grasso in silicone
                o grasso freni specifico.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Perdita di fluido dalla pinza — tenuta idraulica usurata</h4>
              <p>
                Tracce di fluido breni (liquido ambrato, untuoso, attacca
                le superfici verniciate) intorno alla pinza, sul disco,
                sulla pastiglia o sul pneumatico indicano una perdita dalla
                tenuta idraulica del pistoncino. Una perdita minima si può
                notare come uno strato umido sul pistoncino visibile
                con il soffietto spostato. Non ignorare mai una perdita:
                il fluido che raggiunge il disco o la pastiglia riduce
                drasticamente il coefficiente di attrito — il freno cede
                esattamente nel momento in cui viene usato. La soluzione
                richiede la revisione completa della pinza con sostituzione
                di pistoncini e tenute.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Test di scorrimento dei pistoncini — verifica manuale a pinza rimossa</h4>
              <p>
                Rimuovere la pinza dal supporto (senza scollegare la tubazione
                se possibile). Tenere la pinza con l'apertura verso il disco
                e pompare lentamente la leva. I pistoncini devono avanzare
                uniformemente e di uguale quantità. Rilasciare la leva:
                devono ritrarsi parzialmente (rollback) in modo uniforme.
                Osservare la superficie del pistoncino esposta: liscia e priva
                di corrosione. Controllare il soffietto: aderente, non collassato,
                non lacerato. Questo test richiede 5 minuti e va eseguito
                ad ogni cambio pastiglie — è la diagnosi più efficace della pinza.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Verifica soffietti — ispezione visiva e tattile</h4>
              <p>
                Con la pinza rimossa, premere leggermente il soffietto
                con un dito: deve essere flessibile ed elastico, non rigido
                e indurito. Un soffietto indurito per invecchiamento non
                segue più il pistoncino durante l'avanzamento e si stacca
                dall'alloggiamento — cessa di proteggere il bore. Controllare
                visivamente che non ci siano lacerazioni, fori o zone
                dove il soffietto è schiacciato e non torna alla forma.
                I soffietti dei kit di revisione costano pochi euro e
                vanno cambiati ad ogni revisione completa anche se sembrano
                integri — l'EPDM si indurisce per invecchiamento chimico
                prima di mostrarla deterioramento visibile.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Revisione completa della pinza — pistoncini, tenute e soffietti</h4>
              <p>
                La revisione completa (smontaggio pistoncini, sostituzione
                tenute e soffietti, pulizia dei canali interni) va eseguita
                ogni 2–4 anni per uso stradale, ogni 1–2 stagioni per fuoristrada
                intenso, ogni stagione per uso in pista con frenate elevate.
                Il kit di revisione include tenute (quadring), soffietti (dust boots)
                e a volte pistoncini nuovi — costo 15–50 € a seconda della pinza.
                Dopo la revisione è obbligatorio eseguire uno spurgo completo
                del circuito (sezione 06): la sostituzione delle tenute richiede
                lo svuotamento e il riempimento del circuito, e l'aria entra
                inevitabilmente durante il rimontaggio.
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
            <span className="cardTag">Radiale e assiale</span>
            <h3>Il montaggio della pinza — radiale vs assiale cambia la geometria, non la pinza</h3>
            <p>
              La stessa pinza a 4 pistoncini può essere montata in modo assiale
              (bulloni paralleli all'asse del disco) o radiale (bulloni
              perpendicolari all'asse, verso il centro della ruota). Il montaggio
              cambia come la coppia frenante si scarica sulla forcella —
              il radiale offre una reazione più rigida con meno flessione
              strutturale, il che si traduce in un feeling più diretto
              e consistente sotto la decelerazione massima. Le differenze
              pratiche tra i due sistemi, le specifiche di montaggio
              e i vantaggi per le diverse discipline sono trattati nella sezione 05.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Pastiglie e disco</span>
            <h3>La geometria della pinza determina quale pastiglia ci entra — non sono intercambiabili</h3>
            <p>
              Le pastiglie freno sono specifiche per la pinza: il profilo della
              dima di attacco, le dimensioni e lo spessore devono corrispondere
              esattamente. Montare pastiglie di profilo simile ma non identico
              rischia di avere la pastiglia che si muove lateralmente nel
              supporto durante la frenata — un problema di sicurezza critico.
              Verificare sempre il codice pastiglia specifico per la pinza
              montata, non per il modello moto generico (la stessa moto
              può avere pinze diverse in anni diversi). Materiali, compound
              e gestione termica delle pastiglie e del disco sono trattati
              nella sezione 03.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Sistema completo</span>
            <h3>La pinza non lavora da sola — la qualità dell'impianto è quella del componente peggiore</h3>
            <p>
              Una pinza billet a 4 pistoncini in titanio montata con fluido
              vecchio di due anni e pastiglie esaurite frena peggio di una
              pinza OEM con impianto curato. La qualità della frenata è sempre
              quella del componente più debole della catena: pompa (sezione 01),
              fluido (sezione 04), pinza, disco e pastiglie (sezione 03)
              devono lavorare in equilibrio. L'upgrade più efficace su una moto
              con impianto standard è la manutenzione completa (fluido nuovo,
              pastiglie nuove, spurgo — sezione 06) prima di considerare
              qualsiasi componente aftermarket.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Pinza;
