import "./avviamento.scss";
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

const Avviamento = () => {
  return (
    <section className="avviamento" id="avviamento">
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
              Accensione
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il sistema<br />
              <span className="accentText">di avviamento</span>
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Avviare un motore a 2 tempi non è premere un bottone —
              è un rituale. Il pedale del kick ha una logica precisa,
              una posizione giusta, una tecnica che si impara con
              le caviglie doloranti e si affina nel tempo fino
              a diventare automatica. Quella sequenza — miscela,
              posizione, colpo secco — è parte dell'identità
              del 2T tanto quanto il suono e l'erogazione.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              I motori moderni affiancano o sostituiscono il kick
              con il motorino elettrico — più comodo, più rapido,
              ma con un costo in peso, complessità e componenti
              aggiuntivi da manutenere. I due sistemi hanno logiche
              costruttive completamente diverse e diagnosi diverse.
              Conoscerli entrambi significa non restare mai a piedi —
              né in gara né nel mezzo di un sentiero.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">La tecnica del kick</span>
              <h3>Procedura corretta — a freddo</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="s1">①</span>
                <span className="miniText">Rubinetto benzina aperto, kill switch su RUN, gas chiuso (o leggermente aperto a freddo su carburatore)</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s2">②</span>
                <span className="miniText">Choke inserito se il motore è completamente freddo — arricchisce la miscela per la partenza</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s3">③</span>
                <span className="miniText">Trovare il punto morto superiore con calma — portare il pedale fino a sentire la resistenza massima della compressione</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s4">④</span>
                <span className="miniText">Arretrare leggermente oltre il PMS — 5–10 mm di pedale — per avere la corsa di accelerazione completa prima della scintilla</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s5">⑤</span>
                <span className="miniText">Colpo secco e deciso con tutto il peso del corpo — non con la forza della gamba sola. Il piede deve percorrere tutta la corsa</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s6">⑥</span>
                <span className="miniText">Se parte: togliere choke dopo 30–60 secondi. Se non parte: verificare — non kickare a vuoto più di 5–6 volte di fila</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── KICK BLOCK ──────────────────────────────────────────────────── */}
        <motion.div
          className="kickBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="kickHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il pedale del kick</span>
            <h3>Meccanismo, cliquet e frizione d'avviamento — come funziona il kick dall'interno</h3>
            <p>
              Il sistema a kick sembra semplicissimo — un pedale che
              gira l'albero. In realtà è un meccanismo di precisione
              con una frizione monodirezionale, un leverismo di
              riporto a molla e un ingranaggio di riduzione che
              trasforma il movimento lento del piede in una rotazione
              abbastanza veloce da superare la compressione.
            </p>
          </motion.div>

          <motion.div className="kickGrid" variants={cardVariants}>

            <div className="kickCard">
              <span className="kickIdx kickIdxGreen">01</span>
              <h4>L'albero del kick e il cliquet</h4>
              <p>
                Il pedale è calettato su un albero dedicato che ingrana
                con l'albero motore attraverso un riduttore. Il cliquet
                — detto anche ruota libera o frizione a cani — è il
                componente chiave: trasmette il movimento dal pedale
                all'albero motore in un solo senso di rotazione, e
                si disinnesta automaticamente non appena il motore
                parte e supera la velocità del kick. Senza il cliquet
                il motore avviato farebbe girare il pedale a tutta
                velocità con rischio di fratture al piede. È un
                dettaglio meccanico piccolo con conseguenze enormi
                se cede — e cede quasi sempre per usura dei denti
                o per molla di riporto indebolita.
              </p>
            </div>

            <div className="kickCard">
              <span className="kickIdx kickIdxBlue">02</span>
              <h4>La riduzione — perché il kick funziona anche su motori ad alta compressione</h4>
              <p>
                La pressione di compressione di un 2T sportivo è di
                10 – 14 bar — equivale a sollevare 100 – 140 kg
                con una superficie di un centimetro quadrato.
                Il sistema di kick supera questa pressione grazie
                alla riduzione di velocità tra l'albero del pedale
                e l'albero motore — tipicamente 3:1 o 4:1 —
                che moltiplica la coppia applicata dal pilota.
                Un colpo deciso da 60 kg sul pedale, con braccio
                di leva di 25 cm e rapporto di riduzione 3:1,
                genera una coppia di avviamento di oltre 40 Nm
                sull'albero — abbondantemente sufficiente a vincere
                la compressione e portare il pistone oltre il PMS
                alla velocità necessaria per innescare la combustione.
              </p>
            </div>

            <div className="kickCard">
              <span className="kickIdx kickIdxViolet">03</span>
              <h4>La molla di riporto — il ritorno automatico del pedale</h4>
              <p>
                Dopo ogni kick il pedale torna in posizione di riposo
                grazie a una molla di torsione sull'albero del kick.
                La molla è dimensionata per essere abbastanza forte
                da riportare rapidamente il pedale senza opporre
                resistenza durante il kick. Una molla di riporto
                debole o rotta lascia il pedale in posizione abbassata —
                problema estetico che diventa meccanico se il pedale
                interferisce con il cambio delle marce o con la
                catena durante la guida. La sostituzione richiede
                lo smontaggio del coperchio frizione — operazione
                semplice ma che richiede di scaricare completamente
                la tensione della molla prima di estrarre l'albero.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── PROCEDURA BLOCK — a caldo, allagato, con decomp ─────────────── */}
        <motion.div
          className="proceduraBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="proceduraHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Le situazioni difficili</span>
            <h3>A caldo, motore allagato e con decompressore — la procedura per ogni scenario</h3>
            <p>
              Il 2T ha tre situazioni di avviamento con tecniche diverse.
              Confonderle è il modo più rapido per non partire —
              o per allagare ulteriormente il cilindro nel tentativo
              di risolvere.
            </p>
          </motion.div>

          <motion.div className="proceduraGrid" variants={cardVariants}>

            <div className="procCard procCaldo">
              <div className="procCardTop">
                <span className="procBadge badgeCaldo">A caldo</span>
              </div>
              <h4>Motore caldo — tecnica opposta al freddo</h4>
              <p>
                A caldo il carburante vaporizza facilmente — il choke
                è controproducente e la miscela ricca allaga il cilindro.
                La procedura corretta: gas completamente chiuso,
                nessun choke, trovare il PMS e kick secco. Se il
                motore era già al regime e si è spento di colpo
                (caduta, kill switch) aspettare 10 – 15 secondi prima
                di kickare — il carburante nel cilindro ha già saturato
                l'ambiente. Un errore frequente: aprire il gas a metà
                pensando di "aiutare" — risultato garantito: cilindro
                allagato e candela bagnata.
              </p>
            </div>

            <div className="procCard procAllagato">
              <div className="procCardTop">
                <span className="procBadge badgeAllagato">Cilindro allagato</span>
              </div>
              <h4>Come riconoscerlo e come uscirne</h4>
              <p>
                Sintomi: odore forte di benzina, kick che va giù
                senza resistenza (nessuna compressione — il carburante
                liquido ha espulso l'aria), candela bagnata e nera.
                Procedura di salvataggio: togliere la candela,
                kick 10 – 15 volte a gas aperto per espellere il
                carburante in eccesso, asciugare o sostituire la
                candela, avviare a gas aperto senza choke.
                Su motori con valvola di decompressione: tenere
                premuta durante i kick di pulizia per ridurre
                la resistenza e velocizzare l'espulsione.
              </p>
            </div>

            <div className="procCard procDecomp">
              <div className="procCardTop">
                <span className="procBadge badgeDecomp">Decompressore</span>
              </div>
              <h4>La valvola di decompressione — non tutti i 2T ce l'hanno</h4>
              <p>
                Il decompressore è una piccola valvola sulla testata
                che, quando azionata manualmente, apre un piccolo
                canale verso lo scarico riducendo temporaneamente
                la compressione. Permette di portare il pistone
                oltre il PMS con meno forza — utile su motori
                ad alta compressione o su moto grandi dove il kick
                è fisicamente impegnativo. Si usa solo durante
                la fase di posizionamento: arretrare fino al PMS
                con il decompressore premuto, poi rilasciarlo
                e kickare normalmente. Tenerlo premuto durante
                il kick elimina la compressione e il motore non parte.
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
              <span className="placeholderText">Immagine / GIF — meccanismo kick esploso con cliquet, molla di riporto e albero etichettati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Il cliquet</span>
            <p>
              Il cliquet visto da vicino rivela una costruzione
              simile a quella di una frizione a cani: denti a profilo
              asimmetrico che si agganciano sotto carico in un senso
              e scorrono liberi nell'altro. I denti usurati scivolano
              invece di agganciarsi — il kick va giù ma l'albero
              non gira. È il guasto più frustrante del sistema
              kick: si sente il movimento ma il motore non riceve
              coppia. La sostituzione del cliquet è un intervento
              da meno di 30 minuti con il motore sul banco.
            </p>
          </div>
        </motion.div>

        {/* ── MOTORINO BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="motorinoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="motorinoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il motorino di avviamento</span>
            <h3>Motore elettrico, ingranaggio Bendix e batteria — il sistema elettrico di avviamento</h3>
            <p>
              Il motorino di avviamento trasferisce il problema
              dal muscolo del pilota alla batteria. È più comodo
              ma aggiunge peso (500 g – 1,5 kg), richiede una
              batteria in salute e introduce componenti elettrici
              che il pedale kick non ha. Nei modelli fuoristrada
              moderni (KTM EXC, Husqvarna FE, Beta RR) il motorino
              è diventato standard — il pubblico non vuole più
              il kick come unica opzione.
            </p>
          </motion.div>

          <motion.div className="motorinoGrid" variants={cardVariants}>

            <div className="motorinoCard motorinoCard1">
              <span className="motorinoIdx">01</span>
              <h4>Il motore elettrico — DC con spazzole</h4>
              <p>
                Il motorino è quasi sempre un motore DC a spazzole
                con avvolgimento a magneti permanenti — costruzione
                semplice, economica e con coppia di spunto elevata.
                Assorbe 80 – 150 A per la frazione di secondo
                necessaria all'avviamento — corrente che richiede
                una batteria in perfetta salute e cavi di potenza
                di sezione adeguata. Le spazzole sono il componente
                a consumo: si usurano progressivamente e dopo
                molti cicli di avviamento riducono il contatto
                con il collettore. Sintomo: motorino lento e
                rumore di "grattatura" durante l'avviamento.
              </p>
            </div>

            <div className="motorinoCard motorinoCard2">
              <span className="motorinoIdx">02</span>
              <h4>L'ingranaggio Bendix — innesto automatico</h4>
              <p>
                L'ingranaggio di avviamento usa un meccanismo Bendix
                (o un sistema equivalente a ruota libera) che si
                innesta automaticamente sulla corona del volano
                quando il motorino riceve tensione, e si disinnesta
                non appena il motore supera la velocità del motorino.
                Se il Bendix non si disinnesta — per usura, sporcizia
                o molla debole — il motore avviato trascina il
                motorino in sovravelocità per pochi secondi prima
                che qualcosa ceda. Il rumore di "ringhio metallico"
                subito dopo la partenza è il Bendix che tarda a
                disinnestare — va verificato e pulito immediatamente.
              </p>
            </div>

            <div className="motorinoCard motorinoCard3">
              <span className="motorinoIdx">03</span>
              <h4>La batteria — il componente più critico del sistema</h4>
              <p>
                La batteria di avviamento di un 2T da fuoristrada
                è quasi sempre una batteria AGM (Absorbent Glass
                Mat) o al litio da 4 – 12 Ah. Le batterie al litio
                LiFePO4 pesano 60 – 70% meno delle AGM equivalenti
                e reggono più cicli di scarica profonda — ideali
                per il fuoristrada. Il limite: non tollerano
                il freddo intenso (sotto −10 °C vanno riscaldate
                prima dell'uso) e richiedono un caricabatterie
                specifico per litio. Una batteria AGM scarica
                sotto i 12,2 V a riposo non ha abbastanza corrente
                di spunto per far girare il motorino alla velocità
                minima di avviamento. Risultato: motorino lento,
                motore che non supera la compressione, nessuna
                partenza.
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
            <span className="captionTag">Kick + motorino — la combinazione giusta</span>
            <p>
              La maggior parte delle moto moderne da enduro monta
              entrambi i sistemi: motorino per la comodità quotidiana,
              kick di emergenza quando la batteria è scarica o
              il motorino non risponde. È la configurazione
              più versatile — in gara si usa sempre il kick
              per azzerare le variabili elettriche, fuori gara
              il motorino per il comfort. Il peso aggiuntivo
              del motorino su una moto che ha già il kick
              è giustificato dalla sicurezza operativa
              in condizioni remote.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — motorino di avviamento smontato con Bendix, spazzole e connettori etichettati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── CONFRONTO BLOCK — kick vs motorino ──────────────────────────── */}
        <motion.div
          className="confrontoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="confrontoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Kick vs motorino</span>
            <h3>Il confronto diretto — affidabilità, peso e contesto di utilizzo</h3>
          </motion.div>

          <motion.div className="confrontoGrid" variants={cardVariants}>

            <div className="confrontoCol confrontoKick">
              <span className="confrontoTitle">Pedale kick</span>
              <div className="confrontoRighe">
                <div className="confrontoRiga">
                  <span className="rigaLabel">Peso aggiunto</span>
                  <span className="rigaVal rigaGreen">~200 g</span>
                </div>
                <div className="confrontoRiga">
                  <span className="rigaLabel">Dipende da batteria</span>
                  <span className="rigaVal rigaGreen">No</span>
                </div>
                <div className="confrontoRiga">
                  <span className="rigaLabel">Funziona nel fango</span>
                  <span className="rigaVal rigaGreen">Sì, sempre</span>
                </div>
                <div className="confrontoRiga">
                  <span className="rigaLabel">Funziona sott'acqua</span>
                  <span className="rigaVal rigaGreen">Sì</span>
                </div>
                <div className="confrontoRiga">
                  <span className="rigaLabel">Comodo dopo caduta</span>
                  <span className="rigaVal rigaYellow">Richiede tecnica</span>
                </div>
                <div className="confrontoRiga">
                  <span className="rigaLabel">Manutenzione</span>
                  <span className="rigaVal rigaGreen">Minima</span>
                </div>
                <div className="confrontoRiga">
                  <span className="rigaLabel">Complessità elettrica</span>
                  <span className="rigaVal rigaGreen">Nulla</span>
                </div>
              </div>
            </div>

            <div className="confrontoCol confrontoMotorino">
              <span className="confrontoTitle">Motorino elettrico</span>
              <div className="confrontoRighe">
                <div className="confrontoRiga">
                  <span className="rigaLabel">Peso aggiunto</span>
                  <span className="rigaVal rigaYellow">800 g – 1,5 kg</span>
                </div>
                <div className="confrontoRiga">
                  <span className="rigaLabel">Dipende da batteria</span>
                  <span className="rigaVal rigaRed">Sì — critico</span>
                </div>
                <div className="confrontoRiga">
                  <span className="rigaLabel">Funziona nel fango</span>
                  <span className="rigaVal rigaYellow">Sì se stagno</span>
                </div>
                <div className="confrontoRiga">
                  <span className="rigaLabel">Funziona sott'acqua</span>
                  <span className="rigaVal rigaRed">Rischio</span>
                </div>
                <div className="confrontoRiga">
                  <span className="rigaLabel">Comodo dopo caduta</span>
                  <span className="rigaVal rigaGreen">Sì, immediato</span>
                </div>
                <div className="confrontoRiga">
                  <span className="rigaLabel">Manutenzione</span>
                  <span className="rigaVal rigaYellow">Batteria + spazzole</span>
                </div>
                <div className="confrontoRiga">
                  <span className="rigaLabel">Complessità elettrica</span>
                  <span className="rigaVal rigaYellow">Relè, motorino, cablaggi</span>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="diagnosBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnosHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi</span>
            <h3>Non parte — leggere il sintomo prima di smontare</h3>
            <p>
              "Non parte" è la diagnosi più vaga che esiste.
              Il sintomo preciso racconta quasi sempre dove cercare.
              Quattro casi, quattro cause, quattro soluzioni.
            </p>
          </motion.div>

          <motion.div className="diagnosGrid" variants={cardVariants}>

            <div className="diagnosCard diagnosCard1">
              <span className="diagnosBadge">Kick — nessuna resistenza</span>
              <h4>Cliquet usurato o compressione assente</h4>
              <p>
                Il pedale scende senza incontrare la compressione.
                Se il cliquet è integro e il pedale gira l'albero
                ma non c'è resistenza: compressione persa —
                fasce usurate, valvola di decompressione bloccata
                aperta o candela mal serrata. Se il pedale gira
                nel vuoto senza trasmettere: cliquet da sostituire.
              </p>
            </div>

            <div className="diagnosCard diagnosCard2">
              <span className="diagnosBadge">Kick — gira ma non parte</span>
              <h4>Accensione, miscela o compressione insufficiente</h4>
              <p>
                Verificare in ordine: candela (scintilla visibile
                tenendola contro massa?), livello carburante e
                rubinetto aperto, carburatore (benzina che arriva
                alla vaschetta?), tenuta del circuito di alimentazione.
                Se la scintilla c'è, il carburante arriva e la
                compressione è nella specifica: il problema è
                nella miscela aria-carburante — carburatore.
              </p>
            </div>

            <div className="diagnosCard diagnosCard3">
              <span className="diagnosBadge">Motorino — click ma non gira</span>
              <h4>Batteria scarica o relè difettoso</h4>
              <p>
                Il click del relè di avviamento c'è ma il motorino
                non gira: batteria sotto la soglia di corrente
                di spunto minima. Misurare la tensione a riposo —
                sotto 12,2 V va caricata. Se la tensione è ok
                ma il motorino non gira: relè difettoso o
                circuito di potenza interrotto. Verificare
                il fusibile del motorino prima del relè.
              </p>
            </div>

            <div className="diagnosCard diagnosCard4">
              <span className="diagnosBadge">Motorino — gira lento</span>
              <h4>Batteria debole, spazzole usurate o Bendix che trascina</h4>
              <p>
                Il motorino gira ma troppo lentamente per superare
                la compressione. Cause in ordine di probabilità:
                batteria con capacità calata (anche se carica
                non eroga la corrente di spunto necessaria),
                spazzole consumate che riducono il contatto,
                Bendix parzialmente innestato che oppone attrito.
                Testare con una batteria nuova o di prova prima
                di smontare il motorino.
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
            <span className="cardTag">Il rituale</span>
            <h3>Perché il 2T non si avvia sempre al primo colpo — e non è un difetto</h3>
            <p>
              Il 2T a carburatore ha una finestra di avviamento
              più stretta del 4T ad iniezione — la miscela deve
              essere giusta, la compressione integra, l'accensione
              efficiente e la tecnica corretta. Tutti e quattro
              contemporaneamente. Quando una variabile è fuori
              posto il motore non parte. Questo non è un difetto
              costruttivo — è la conseguenza diretta di un motore
              senza sistemi di compensazione elettronica. Chi
              conosce il proprio 2T lo porta al primo colpo quasi
              sempre. Chi non lo conosce può kickare per ore.
              La differenza è la conoscenza, non la fortuna.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Batterie al litio</span>
            <h3>LiFePO4 nel fuoristrada — vantaggi reali e limiti da conoscere</h3>
            <p>
              Le batterie al litio ferro-fosfato (LiFePO4) sono
              diventate lo standard racing per il sistema di
              avviamento. Pesano 300 – 500 g contro 1,2 – 2 kg
              delle AGM equivalenti, reggono 2.000+ cicli completi
              contro i 300 – 500 delle AGM e mantengono la tensione
              più stabile durante la scarica. Il limite critico
              per il fuoristrada: sotto 0 °C la capacità si riduce
              drasticamente e sotto −10 °C alcune celle non erogano
              la corrente di spunto. Soluzione: mantenere la batteria
              al caldo prima del via nelle gare invernali, o usare
              una batteria con BMS (Battery Management System)
              integrato con protezione dal freddo.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Manutenzione kick</span>
            <h3>Cliquet, molla e guarnizioni — cosa controllare ogni stagione</h3>
            <p>
              Il sistema kick richiede poca manutenzione ma quella
              poca va fatta. Ogni stagione: verificare lo stato
              dei denti del cliquet (usurati sono arrotondati
              invece che spigolosi), controllare la molla di
              riporto (deve riportare il pedale con scatto deciso),
              ispezionare la guarnizione del coperchio kick
              (una perdita d'olio da lì contamina la frizione),
              e lubrificare il perno del pedale con grasso
              al litio. Il cliquet usurato che salta è uno
              dei guasti più fastidiosi in gara — e uno dei
              più prevenibili con un'ispezione annuale.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Avviamento;
