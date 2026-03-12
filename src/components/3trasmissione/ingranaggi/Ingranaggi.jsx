import "./ingranaggi.scss";
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

const Ingranaggi = () => {
  return (
    <section className="ingranaggi" id="ingranaggi">
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
              Gli ingranaggi<br />del cambio
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Gli ingranaggi sono l'elemento fondamentale che rende
              possibile il cambio di rapporto — e sono anche uno dei
              sistemi meccanici più eleganti che esistano: trasmettono
              coppia e velocità angolare tra due alberi con efficienza
              superiore al 98%, senza scorrimento, con un contatto
              che si rinnova dente per dente in modo perfettamente
              predicibile. Capire come funziona un ingranaggio a livello
              fisico — il profilo del dente, il punto di contatto,
              le forze in gioco — è il presupposto per capire perché
              si usurano, perché si rompono e come si sceglie il
              rapporto giusto per ogni utilizzo.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Nel cambio a 2 tempi gli ingranaggi hanno anche un elemento
              aggiuntivo rispetto ai semplici ingranaggi di trasmissione:
              i cani di innesto — i denti corti laterali che bloccano
              l'ingranaggio folle all'albero. La fisica dei cani è
              diversa da quella dei denti di trasmissione, e la loro
              usura racconta molto su come viene usato il cambio.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Parametri fondamentali</span>
              <h3>I numeri che descrivono un ingranaggio</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">z</span>
                <span className="miniText">Numero di denti — determina il rapporto di trasmissione insieme al partner</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">m</span>
                <span className="miniText">Modulo — dimensione del dente in mm; tutti gli ingranaggi in presa devono avere lo stesso modulo</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">d</span>
                <span className="miniText">Diametro primitivo — d = m × z; la circonferenza teorica su cui avviene il contatto</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">α</span>
                <span className="miniText">Angolo di pressione — tipicamente 20°; determina la direzione della forza di contatto tra i denti</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">i</span>
                <span className="miniText">Rapporto di trasmissione — i = z₂ / z₁ = n₁ / n₂; giri e coppia si invertono proporzionalmente</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FISICA BASE BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="fisicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="fisicaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fisica degli ingranaggi</span>
            <h3>Come funziona davvero il contatto tra i denti — coppia, velocità e forze</h3>
            <p>
              Un ingranaggio non spinge semplicemente l'altro come due
              ruote di frizione. Il profilo del dente è progettato per
              garantire che la velocità di trasmissione rimanga costante
              istante per istante — proprietà chiamata legge fondamentale
              degli ingranaggi — indipendentemente da dove si trova
              il punto di contatto lungo il fianco del dente.
              Questo è possibile solo con un profilo specifico: il profilo
              ad evolvente di cerchio.
            </p>
          </motion.div>

          <motion.div className="fisicaGrid" variants={cardVariants}>

            <div className="fisicaCard fisicaCoppia">
              <div className="fisicaVisual">
                <span className="fisicaFormula">M₂ = M₁ × i</span>
                <span className="fisicaFormulaLabel">Trasmissione della coppia</span>
              </div>
              <h4>Coppia e rapporto di trasmissione</h4>
              <p>
                Quando due ingranaggi sono in presa, potenza, coppia
                e velocità sono legate da una relazione semplice
                e inviolabile: la potenza si conserva (meno le perdite
                per attrito), il rapporto tra i giri è inversamente
                proporzionale al rapporto tra i denti, e la coppia
                si moltiplica nello stesso rapporto. Un ingranaggio
                con il doppio dei denti del partner gira a metà velocità
                e trasmette il doppio della coppia. Questo è il principio
                fisico che sta sotto ogni marcia del cambio — prima
                marcia: pochi denti sul primario, tanti sul secondario,
                coppia alta, velocità bassa.
              </p>
            </div>

            <div className="fisicaCard fisicaEvolvente">
              <div className="fisicaVisual">
                <span className="fisicaFormula">profilo ad evolvente</span>
                <span className="fisicaFormulaLabel">Legge fondamentale degli ingranaggi</span>
              </div>
              <h4>Il profilo ad evolvente — perché quella curva</h4>
              <p>
                Il fianco del dente non è una retta né un arco di cerchio
                qualsiasi — è una curva chiamata evolvente di cerchio,
                che si ottiene svolgendo un filo teso attorno alla
                circonferenza di base. La proprietà geometrica
                dell'evolvente è che la normale comune ai due profili
                in qualsiasi punto di contatto passa sempre per lo
                stesso punto fisso — il polo primitivo. Questa proprietà
                garantisce che il rapporto di velocità angolare tra
                i due ingranaggi rimanga costante durante tutta la
                rotazione, anche mentre il punto di contatto si sposta
                lungo il fianco. Senza profilo ad evolvente il
                rapporto di trasmissione oscillerebbe ad ogni passo
                di dente, generando vibrazioni e irregolarità.
              </p>
            </div>

            <div className="fisicaCard fisicaForze">
              <div className="fisicaVisual">
                <span className="fisicaFormula">Ft / tan(α) = Fr</span>
                <span className="fisicaFormulaLabel">Componenti della forza di contatto</span>
              </div>
              <h4>Le forze sul dente — tangenziale e radiale</h4>
              <p>
                La forza di contatto tra i denti non è mai puramente
                tangenziale — è sempre inclinata rispetto alla tangente
                alla circonferenza primitiva di un angolo pari all'angolo
                di pressione α (tipicamente 20°). Questa forza si scompone
                in una componente tangenziale Ft — quella che trasmette
                effettivamente la coppia — e una componente radiale Fr
                che tende a separare i due ingranaggi spingendoli l'uno
                lontano dall'altro. Fr = Ft × tan(α) vale circa 0,36 × Ft
                per α = 20°. Questa forza radiale è la causa del carico
                sui cuscinetti degli alberi e della flessione degli alberi
                stessi che abbiamo analizzato nella sezione Alberi.
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
              <span className="placeholderText">Schema / GIF — profilo ad evolvente con polo primitivo, linea d'azione e decomposizione delle forze sul dente</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Evolvente e forze</span>
            <p>
              Lo schema mostra la linea d'azione — la retta lungo cui
              si trasmette la forza tra i denti in contatto — inclinata
              di 20° rispetto alla tangente comune alle circonferenze
              primitive. Il punto di contatto scorre lungo questa linea
              durante la rotazione, passando attraverso il polo primitivo.
              La decomposizione vettoriale evidenzia Ft (coppia utile)
              e Fr (carico radiale sui cuscinetti).
            </p>
          </div>
        </motion.div>

        {/* ── MODULO E GEOMETRIA BLOCK ────────────────────────────────────── */}
        <motion.div
          className="moduloBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="moduloHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Modulo e geometria</span>
            <h3>Il modulo — l'unità di misura che determina tutto il dente</h3>
            <p>
              Il modulo m è il parametro che definisce la dimensione
              del dente. È definito come il rapporto tra il diametro
              primitivo e il numero di denti: m = d/z.
              In pratica: maggiore è il modulo, più grande è il dente,
              più carico può trasmettere. Tutti gli ingranaggi in presa
              devono avere lo stesso modulo — non è un parametro
              sostituibile liberamente. Nei cambi 2T da competizione
              i moduli tipici sono compresi tra 1,5 e 2,5 mm.
            </p>
          </motion.div>

          <motion.div className="moduloGrid" variants={cardVariants}>

            <div className="moduloCard">
              <div className="moduloVisual moduloTesta">
                <span className="moduloVLabel">Testa del dente</span>
                <span className="moduloVVal">addendum = 1 × m</span>
              </div>
              <h4>Anatomia del dente — le quote fondamentali</h4>
              <p>
                Il dente si estende per 1 × m sopra la circonferenza
                primitiva (addendum) e per 1,25 × m al di sotto
                (dedendum), per un'altezza totale di 2,25 × m.
                Il passo del dente — distanza tra due denti consecutivi
                misurata sulla circonferenza primitiva — è p = π × m.
                Questi rapporti sono standardizzati internazionalmente
                (ISO 53) e garantiscono che ingranaggi di produttori
                diversi con lo stesso modulo e angolo di pressione
                siano sempre in grado di fare presa.
              </p>
            </div>

            <div className="moduloCard">
              <div className="moduloVisual moduloInterasse">
                <span className="moduloVLabel">Interasse</span>
                <span className="moduloVVal">a = m × (z₁ + z₂) / 2</span>
              </div>
              <h4>L'interasse — la distanza tra i centri degli alberi</h4>
              <p>
                La distanza tra i centri dell'albero primario e secondario
                è fissata dal carter e non è modificabile. Questo vincolo
                definisce la somma dei diametri primitivi delle coppie
                di ingranaggi — che deve essere costante per tutte le
                marce. Quando si sostituiscono ingranaggi per modificare
                i rapporti, la coppia di sostituzione deve rispettare
                la stessa somma di denti totale della coppia originale,
                altrimenti i due ingranaggi non possono coesistere
                sugli stessi alberi.
              </p>
            </div>

            <div className="moduloCard">
              <div className="moduloVisual moduloRicoprimento">
                <span className="moduloVLabel">Rapporto di ricoprimento</span>
                <span className="moduloVVal">ε ≥ 1,2 ideale</span>
              </div>
              <h4>Il rapporto di ricoprimento — quanti denti lavorano insieme</h4>
              <p>
                Il rapporto di ricoprimento ε esprime quante coppie di
                denti sono simultaneamente in contatto mediamente durante
                la rotazione. Un valore ε = 1,0 significa che in ogni
                istante è in presa esattamente una coppia. ε = 1,6 significa
                che per il 60% del tempo due coppie sono in presa
                simultaneamente. Un ricoprimento più alto distribuisce
                il carico su più denti, riduce le vibrazioni e aumenta
                la vita dell'ingranaggio — ma richiede più precisione
                di lavorazione. Nei cambi 2T racing si punta a ε ≥ 1,4.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── RAPPORTO BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="rapportoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="rapportoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Rapporti e modifica</span>
            <h3>Calcolare e modificare i rapporti — denti, vincoli e strategia racing</h3>
            <p>
              Cambiare i rapporti del cambio è una modifica comune in
              ambito racing per adattare la progressione alle
              caratteristiche del tracciato o del motore. Non è
              una sostituzione libera — ci sono vincoli geometrici
              precisi da rispettare, e la scelta sbagliata può
              rendere impossibile il rimontaggio o produrre interferenze
              tra ingranaggi adiacenti.
            </p>
          </motion.div>

          <motion.div className="rapportoContent" variants={cardVariants}>

            <div className="rapportoFormula">
              <div className="formulaBlock">
                <span className="formulaTitle">Rapporto di marcia</span>
                <span className="formulaEq">i = z_sec / z_pri</span>
                <span className="formulaDesc">z_sec = denti ingranaggio sul secondario<br/>z_pri = denti ingranaggio sul primario</span>
              </div>
              <div className="formulaBlock">
                <span className="formulaTitle">Vincolo di interasse</span>
                <span className="formulaEq">z_pri + z_sec = costante</span>
                <span className="formulaDesc">La somma deve essere uguale per tutte le coppie della stessa marcia dopo la modifica</span>
              </div>
              <div className="formulaBlock">
                <span className="formulaTitle">Velocità all'uscita</span>
                <span className="formulaEq">n₂ = n₁ / i</span>
                <span className="formulaDesc">i &gt; 1 → riduzione di velocità e aumento di coppia (prime marce)<br/>i &lt; 1 → overdrive (raramente usato nei 2T)</span>
              </div>
            </div>

            <div className="rapportoStrategia">
              <h4>Strategia di modifica per tipo di circuito</h4>
              <div className="strategiaGrid">
                <div className="strategiaCard">
                  <span className="strategiaBadge badgeTecnico">Tracciato tecnico</span>
                  <p>Molte curve lente, pochi rettilinei. Si accorciano le prime 3 marce — più denti sul secondario, meno sul primario. Il motore resta nella banda di potenza più a lungo in uscita di curva. La sesta perde velocità massima ma non si usa quasi mai.</p>
                </div>
                <div className="strategiaCard">
                  <span className="strategiaBadge badgeVeloce">Tracciato veloce</span>
                  <p>Pochi cambi, rettilinei lunghi. Si allungano quarta, quinta e sesta — meno denti sul secondario. Il motore raggiunge velocità più alta sul rettifilo senza saturare il regime. Le prime marce rimangono corte per la partenza.</p>
                </div>
                <div className="strategiaCard">
                  <span className="strategiaBadge badgeMisto">Uso misto / enduro</span>
                  <p>Progressione più larga tra una marcia e l'altra. Si accetta di uscire dalla banda di potenza tra un cambio e il successivo in cambio di meno cambi per percorso. Prima molto corta per le salite, sesta lunga per le strade bianche veloci.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── CANI DI INNESTO BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="caniBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="caniHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Cani di innesto</span>
            <h3>Il componente che "fa" il cambio — geometria, forze e arrotondamento</h3>
            <p>
              I cani di innesto sono i denti corti e robusti sul fianco
              degli ingranaggi folli e sui manicotti scorrevoli che si
              agganciano tra loro per bloccare l'ingranaggio all'albero.
              Non trasmettono coppia in modo continuo come i denti
              del profilo — trasmettono solo la coppia necessaria
              a mantenere l'ingranaggio bloccato sull'albero.
              Ma lo fanno ogni singolo istante in cui la marcia
              è inserita, sotto tutto il carico del motore.
            </p>
          </motion.div>

          <motion.div className="caniGrid" variants={cardVariants}>

            <div className="caniCard">
              <div className="caniVisual caniGeometria">
                <span className="caniIcon">⊏⊐</span>
                <span className="caniLabel">Geometria drtta</span>
              </div>
              <h4>Cani dritti — innesto positivo sotto carico</h4>
              <p>
                I cani a faccia dritta (square dogs) hanno i fianchi
                perpendicolari all'asse dell'albero. Quando la coppia
                è applicata, la forza assiale sui cani tende a spingere
                il manicotto più a fondo nell'innesto — il carico stesso
                rinforza il bloccaggio. Questa geometria è la più comune
                nei cambi da competizione perché garantisce l'innesto
                positivo anche sotto le coppie più violente, ma richiede
                frizione aperta per il cambio: agganciarsi con coppia
                piena produce impatto sui cani con il rischio di
                arrotondamento progressivo.
              </p>
            </div>

            <div className="caniCard">
              <div className="caniVisual caniAngolati">
                <span className="caniIcon">⊿</span>
                <span className="caniLabel">Geometria angolata</span>
              </div>
              <h4>Cani angolati — per i cambi senza frizione</h4>
              <p>
                I cani con fianchi inclinati (ramp dogs) hanno le facce
                di contatto tagliate con un angolo rispetto all'asse.
                In condizioni di carico, la componente assiale della
                forza tende a espellere il manicotto dall'innesto
                invece di rinforzarlo — il cane "scappa" se la coppia
                supera una soglia. Questo può sembrare un difetto,
                ma è voluto: in alcune configurazioni racing permette
                di cambiare marcia senza frizione in accelerazione
                scalata, perché il cane si disinnesta quando il regime
                motore scende. Richiede una forza di detent del
                selettore ben calibrata per non disinserire
                involontariamente la marcia in normale utilizzo.
              </p>
            </div>

            <div className="caniCard">
              <div className="caniVisual caniUsura">
                <span className="caniIcon">◺</span>
                <span className="caniLabel">Usura da impatto</span>
              </div>
              <h4>Arrotondamento dei cani — il sintomo dei cambi violenti</h4>
              <p>
                Ogni cambio eseguito con coppia ancora applicata —
                senza aprire completamente la frizione — produce
                un impatto tra i cani in ingresso. L'impatto non è
                abbastanza violento da rompere immediatamente il dente,
                ma è sufficiente a smussare progressivamente l'angolo
                vivo della faccia di contatto. Un cane arrotondato
                trasmette la forza su una superficie ridotta e inclinata
                — sotto carico tende a saltar fuori dall'innesto.
                Questo è il meccanismo fisico alla base della "marcia
                che salta": i cani non si rompono, si arrotondano
                lentamente finché non riescono più a mantenere
                l'ingranaggio bloccato sotto carico pieno.
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
            <span className="captionTag">Cani sani vs arrotondati</span>
            <p>
              Il confronto tra un ingranaggio nuovo e uno usurato
              è immediato: i cani nuovi hanno facce perfettamente
              piane e angoli vivi a 90°. Quelli arrotondati mostrano
              un profilo a "fungo" sulle facce di contatto —
              ogni impatto ha rimosso materiale dall'angolo
              fino a creare una superficie inclinata che,
              sotto carico, genera la componente assiale
              che espelle il manicotto dall'innesto.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — ingranaggio con cani nuovi affiancato a uno con cani arrotondati, dettaglio macro</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
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
            <span className="sectionLabel">Materiali e trattamenti</span>
            <h3>Acciaio, cementazione e shot peening — perché il dente non si rompe</h3>
            <p>
              Un ingranaggio del cambio deve essere durissimo in superficie
              per resistere all'usura da contatto ciclico — ma tenace
              nel nucleo per assorbire i carichi impulsivi del 2T
              senza fratturarsi di netto. Questi due requisiti sono
              in contraddizione diretta: più un acciaio è duro,
              più è fragile. La soluzione è la cementazione —
              un trattamento termochimico che indurisce solo lo strato
              superficiale lasciando il nucleo duttile.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>

            <div className="matCard">
              <span className="matBadge badgeCementazione">Cementazione</span>
              <h4>Strato superficiale — durezza HRC 58–62</h4>
              <p>
                La cementazione (o carbocementazione) arricchisce lo
                strato superficiale dell'acciaio di carbonio a temperature
                di 900 – 950 °C. Dopo la tempra, lo strato cementato
                raggiunge durezze HRC 58 – 62 — paragonabili a quelle
                di un cuscinetto a sfera. Lo spessore tipico è 0,6 – 1,2 mm
                per ingranaggi di cambio. Il nucleo rimane a durezza
                HRC 30 – 35, sufficiente ad assorbire gli impatti
                senza propagare cricche. La cementazione è il trattamento
                standard per tutti gli ingranaggi di cambio di serie
                e racing.
              </p>
            </div>

            <div className="matCard">
              <span className="matBadge badgeShotPeening">Shot peening</span>
              <h4>Pallinatura — resistenza a fatica sulle radici del dente</h4>
              <p>
                Il shot peening è un bombardamento della superficie
                con sfere di acciaio ad alta velocità che introduce
                tensioni di compressione residue negli strati superficiali.
                Le cricche da fatica si propagano in trazione, non in
                compressione — le tensioni compressive residue creano
                uno strato che "spegne" le cricche nascenti alla radice
                del dente, che è il punto di massima flessione ciclica.
                Il risultato è un aumento della vita a fatica del 30 – 80%
                con un trattamento che non modifica le dimensioni
                dell'ingranaggio. Standard nei cambi racing,
                opzionale nei cambi di serie.
              </p>
            </div>

            <div className="matCard">
              <span className="matBadge badgeAcciaio">Acciaio base</span>
              <h4>16MnCr5 e 20MnCr5 — gli acciai da cementazione standard</h4>
              <p>
                Gli acciai da cementazione più usati negli ingranaggi
                di cambio sono il 16MnCr5 e il 20MnCr5 — acciai legati
                al manganese-cromo con contenuto di carbonio base
                intorno allo 0,16 – 0,20%. La bassa percentuale di
                carbonio di partenza garantisce la tenacità del nucleo
                dopo la tempra; il cromo e il manganese migliorano
                la temprabilità e permettono lo strato cementato profondo.
                Per applicazioni racing si usano acciai al nichel-cromo-molibdeno
                (17NiCrMo6, 18NiCrMo5) con temprabilità superiore
                e migliore comportamento a fatica ciclica.
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
            <h3>Leggere lo stato degli ingranaggi — i denti non mentono</h3>
            <p>
              Lo stato degli ingranaggi racconta con precisione come
              è stato usato il cambio. Un'ispezione attenta allo
              smontaggio permette di capire non solo cosa sostituire,
              ma anche cosa ha causato il problema — informazione
              fondamentale per non ritrovarselo al prossimo montaggio.
            </p>
          </motion.div>

          <motion.div className="diagnGrid" variants={cardVariants}>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Usura</span>
              <h4>Pitting — micropozzetti sui fianchi del dente</h4>
              <p>
                Il pitting è la forma di usura più comune sui fianchi
                degli ingranaggi: piccole cavità che si formano per
                fatica superficiale da contatto ciclico ripetuto.
                Inizialmente i pozzetti sono microscopici e non
                influenzano il funzionamento. Progressivamente si
                allargano e si uniscono fino a rendere irregolare
                il profilo del dente, aumentando rumore e vibrazioni.
                Il pitting è accelerato da olio invecchiato o
                contaminato che non riesce a formare il film
                idrodinamico tra i denti in contatto.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Rottura</span>
              <h4>Rottura del dente — a radice o per impatto</h4>
              <p>
                La rottura a radice avviene per fatica ciclica accumulata
                nel tempo: la cricca si propaga dalla radice del dente —
                punto di massima flessione — fino alla frattura completa.
                Il profilo di frattura è granulare e progressivo.
                La rottura per impatto (shock) produce invece una
                frattura netta, spesso con aspetto cristallino sulla
                superficie di rottura — segnale di un carico impulsivo
                singolo che ha superato la resistenza del materiale.
                Un frammento di dente nel carter è sempre un'emergenza:
                può incastrarsi tra altri ingranaggi e causare danni
                a cascata.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Scuffing</span>
              <h4>Grippaggio superficiale — il film lubrificante che cede</h4>
              <p>
                Lo scuffing è il trasferimento di materiale da un dente
                all'altro per microgrippaggio — avviene quando il film
                di olio tra i denti viene squarciato dal carico o dalla
                temperatura e le superfici metalliche entrano in contatto
                diretto. Le tracce di scuffing sono solchi orientati
                nella direzione di scorrimento dei denti, con materiale
                asportato da un dente e depositato sull'altro.
                Causa principale: olio esaurito che ha perso le proprietà
                EP (extreme pressure) o lubrificazione insufficiente
                per livello olio basso.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Ispezione visiva sistematica dei denti</h4>
              <p>
                Con il cambio smontato e gli alberi su banco: ruotare
                lentamente ogni coppia di ingranaggi ispezionando
                con luce radente tutti i fianchi. Cercare: pitting
                (opacità granulare sui fianchi), scuffing (solchi
                orientati), crepe alla radice (luce radente + lente
                di ingrandimento), denti mancanti o scheggiati.
                Il controllo dello spessore del dente con calibro
                ad arco dentato permette di quantificare l'usura
                rispetto al nominale — uno spessore ridotto del 5%
                o più rispetto al nuovo indica sostituzione.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Cani di innesto — la misurazione dell'arrotondamento</h4>
              <p>
                I cani si ispezionano visivamente per l'arrotondamento
                delle facce di contatto. Un cane integro ha facce piane
                e spigoli vivi a 90°. L'arrotondamento si valuta con
                un calibro di profondità misurando il rientro della
                faccia rispetto al piano teorico — un rientro superiore
                a 0,3 – 0,5 mm indica usura che richiede sostituzione.
                Non si raddrizzano e non si riaffilano: un cane
                arrotondato si sostituisce insieme all'ingranaggio.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeIntervallo">Intervallo</span>
              <h4>Vita operativa e sostituzione preventiva</h4>
              <p>
                In uso amatoriale gli ingranaggi di cambio durano
                l'intera vita del motore se l'olio è corretto e
                il cambio viene eseguito con frizione. In uso
                agonistico intenso i cani di innesto delle marce
                più usate (seconda, terza) si sostituiscono ogni
                stagione come manutenzione preventiva. Dopo una
                rottura di dente si sostituisce sempre la coppia
                completa — mai il solo ingranaggio rotto — perché
                il dente del partner ha ricevuto il carico d'impatto
                e presenta usura asimmetrica non visibile a occhio nudo.
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
            <span className="cardTag">Efficienza</span>
            <h3>Perdite per attrito negli ingranaggi — i 2% che contano</h3>
            <p>
              Una coppia di ingranaggi a denti dritti in buono stato
              e con lubrificazione adeguata ha un'efficienza del
              98 – 99% per stadio — le perdite sono principalmente
              per attrito di scorrimento tra i fianchi dei denti
              e per agitazione dell'olio (churning). In un cambio
              a 5 marce con due coppie in presa simultánea le perdite
              totali sono dell'ordine del 2 – 4%. Con olio invecchiato
              o viscosità sbagliata le perdite aumentano — si traduce
              in calore nel carter trasmissione e in una lieve riduzione
              della potenza alla ruota misurabile al banco prova.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Ingranaggi aftermarket</span>
            <h3>Kit rapporti racing — cosa cambia rispetto all'originale</h3>
            <p>
              I kit ingranaggi aftermarket (Vertex, Moto Tassinari,
              preparatori specializzati) differiscono dall'originale
              per: modulo leggermente maggiore (denti più robusti),
              tolleranze di lavorazione più strette sul profilo
              dell'evolvente (contatto più uniforme), trattamento
              superficiale più profondo (cementazione 1,0 – 1,4 mm
              vs 0,6 – 0,8 mm degli originali) e cani di innesto
              con geometria ottimizzata per i cambi rapidi.
              Il beneficio è reale in uso agonistico intenso —
              in uso amatoriale raramente giustifica il costo
              rispetto a un set OEM di qualità.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Rumore</span>
            <h3>Il rumore del cambio come strumento diagnostico</h3>
            <p>
              Un cambio sano è relativamente silenzioso — un ronzio
              di fondo proporzionale al regime. Un rumore che cambia
              con la marcia inserita ma non con il regime indica usura
              di quella specifica coppia. Un rumore che cambia con
              il regime ma non con la marcia indica un cuscinetto
              di supporto degli alberi. Un rumore impulsivo ritmico
              (ticchettio) sincronizzato con la velocità di un albero
              indica un dente danneggiato o un corpo estraneo nel
              cambio — smontaggio immediato prima che il danno
              si propaghi agli ingranaggi adiacenti.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Ingranaggi;