import "./volanoEStatore.scss";
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

const VolanoEStatore = () => {
  return (
    <section className="volanoEStatore" id="volano-statore">
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
              Volano<br />
              <span className="accentText">e statore</span>
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il volano magnetico e lo statore sono la centrale elettrica
              del motore a 2 tempi. Insieme generano tutta la corrente
              necessaria al sistema di accensione — e nei modelli con
              luci, pompe elettriche o centraline evolute, alimentano
              anche il resto dell'impianto. Non esiste batteria che
              possa fare questo lavoro da sola: senza la coppia
              volano-statore il motore non produce scintilla
              e non parte.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il principio fisico è la legge di Faraday: un campo
              magnetico variabile genera una forza elettromotrice in
              un conduttore. Il volano — con i suoi magneti permanenti —
              è il campo variabile. Lo statore — con i suoi avvolgimenti
              di filo di rame — è il conduttore. Ogni volta che i
              magneti passano davanti a una bobina, inducono una
              tensione. A 8.000 giri succede 133 volte al secondo
              su ogni polo magnetico. Il risultato è una corrente
              alternata monofase che alimenta tutto il sistema.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">I due componenti</span>
              <h3>Rotore e statore — chi gira e chi sta fermo</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="volano">◎</span>
                <span className="miniText"><strong>Volano (rotore)</strong> — solidale all'albero motore, gira con esso. Contiene i magneti permanenti al neodimio o alla ferrite incassati nella corona interna</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="statore">≡</span>
                <span className="miniText"><strong>Statore (induttore fisso)</strong> — avvitato al carter, non gira. Porta gli avvolgimenti in filo di rame dove viene indotta la corrente</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="pickup">⊙</span>
                <span className="miniText"><strong>Pick-up (sensore di posizione)</strong> — bobina separata sullo statore che legge una riluttanza sul volano e genera il segnale di trigger per la CDI</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="cdi">⚡</span>
                <span className="miniText"><strong>CDI</strong> — riceve la corrente AC dallo statore e il segnale dal pick-up. Decide l'anticipo e scarica sulla bobina di accensione</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="coppia">↺</span>
                <span className="miniText"><strong>Coppia resistente</strong> — lo statore oppone una resistenza al volano proporzionale alla corrente estratta. Non è gratis: ogni watt generato costa una piccola coppia all'albero</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── VOLANO BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="volanoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="volanoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il volano</span>
            <h3>Massa rotante, magneti permanenti e inerzia — le tre funzioni del volano</h3>
            <p>
              Il volano fa tre cose contemporaneamente — ed è progettato
              per farle tutte e tre bene. Rimuoverlo o sostituirlo con
              una versione alleggerita senza considerare queste tre
              funzioni produce quasi sempre risultati deludenti o
              problemi inattesi.
            </p>
          </motion.div>

          <motion.div className="volanoGrid" variants={cardVariants}>

            <div className="volanoCard volanoCard1">
              <div className="volanoCardIcon">⊙</div>
              <h4>Funzione 1 — Volano d'inerzia</h4>
              <p>
                Il volano accumula energia cinetica rotazionale durante
                la fase di combustione — l'unica fase in cui il motore
                riceve energia — e la restituisce nelle fasi passive
                (scarico, lavaggio, compressione) mantenendo la rotazione
                dell'albero. Senza questa inerzia il motore si
                fermerebbe dopo ogni scoppio. La massa del volano
                determina la regolarità di marcia: un volano pesante
                rende il motore più dolce e costante ma meno reattivo
                ai cambi di regime; uno leggero risponde più velocemente
                ma richiede un pilota più attento nel gestire il regime.
                I motori da cross alleggeriscono il volano per massimizzare
                la reattività; i motori da enduro lo lasciano più pesante
                per la guidabilità nei tratti tecnici a basso regime.
              </p>
            </div>

            <div className="volanoCard volanoCard2">
              <div className="volanoCardIcon">◎</div>
              <h4>Funzione 2 — Generatore magnetico</h4>
              <p>
                Nella corona interna del volano sono incassati i magneti
                permanenti — tipicamente 4, 6 o 8 poli alternati Nord-Sud
                disposti radialmente. Ruotando attorno allo statore fisso,
                ogni magnete fa variare il flusso magnetico attraverso
                le bobine degli avvolgimenti. Il numero di poli determina
                la frequenza della corrente generata: 8 poli a 6.000 giri
                producono corrente a 400 Hz — 8 volte la frequenza
                di rete domestica. I magneti al neodimio-ferro-boro (NdFeB)
                usati nei modelli moderni sono 5 – 8 volte più forti
                dei magneti alla ferrite — a parità di dimensione
                generano più corrente e permettono volani più leggeri.
              </p>
            </div>

            <div className="volanoCard volanoCard3">
              <div className="volanoCardIcon">⊛</div>
              <h4>Funzione 3 — Riferimento di posizione angolare</h4>
              <p>
                Sul bordo del volano — o sulla sua faccia laterale —
                è ricavata una riluttanza: una sporgenza o un incavo
                che modifica il campo magnetico quando passa davanti
                alla bobina del pick-up. Questo genera un impulso
                elettrico preciso ogni giro — il segnale di trigger
                che dice alla CDI dove si trova il pistone rispetto
                al punto morto superiore. La posizione angolare di
                questa riluttanza sul volano determina l'anticipo
                fisso di base del motore. Nei sistemi con anticipo
                variabile (CDI avanzata) il volano può avere due
                riluttanze a angoli diversi — la CDI sceglie quale
                usare in funzione del regime.
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
              <span className="placeholderText">Immagine — volano smontato con magneti visibili e statore con avvolgimenti etichettati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Magneti e avvolgimenti</span>
            <p>
              Con il volano smontato si vedono chiaramente i magneti
              permanenti incassati nella corona interna — alternati
              Nord e Sud — e gli avvolgimenti in filo di rame dello
              statore che occupano lo spazio interno. Il traferro
              tra magneti e avvolgimenti è di pochi decimi di
              millimetro: abbastanza piccolo da garantire un campo
              magnetico efficiente, abbastanza grande da non creare
              contatto in caso di piccole deformazioni del volano
              per urti o temperatura.
            </p>
          </div>
        </motion.div>

        {/* ── STATORE BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="statoreBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="statoreHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Lo statore</span>
            <h3>Avvolgimenti, lamierino e pick-up — la costruzione dello statore</h3>
            <p>
              Lo statore è il componente fisso che raccoglie l'energia
              magnetica del volano in rotazione e la converte in
              corrente elettrica. La sua costruzione è semplice
              in apparenza — un pacco di lamierini con filo di
              rame avvolto — ma i dettagli progettuali determinano
              l'efficienza della conversione energetica e la durabilità
              in condizioni di vibrazione intensa.
            </p>
          </motion.div>

          <motion.div className="statoreGrid" variants={cardVariants}>

            <div className="statoreCard">
              <span className="statoreIdx statoreIdxBlue">01</span>
              <h4>Il nucleo ferromagnetico — il pacco lamellare</h4>
              <p>
                Il nucleo dello statore è formato da decine di
                lamierini di acciaio al silicio sovrapposti e isolati
                tra loro — il pacco lamellare. Ogni lamierino ha
                uno spessore di 0,3 – 0,5 mm. La suddivisione in
                lamierini riduce drasticamente le correnti parassite
                (correnti di Foucault) che si genererebbero in un
                nucleo solido e si dissiperebbero in calore riducendo
                l'efficienza. Il silicio aumenta la permeabilità
                magnetica del materiale — il flusso magnetico del
                volano si "canalizza" più facilmente attraverso
                il nucleo verso gli avvolgimenti.
              </p>
            </div>

            <div className="statoreCard">
              <span className="statoreIdx statoreIdxViolet">02</span>
              <h4>Gli avvolgimenti — il filo che genera la corrente</h4>
              <p>
                Il filo di rame degli avvolgimenti è smaltato con
                una vernice isolante ceramica che regge temperature
                fino a 180 – 220 °C (classe H o superiore). Il numero
                di spire, il diametro del filo e la geometria
                dell'avvolgimento determinano la tensione e la corrente
                di uscita a ogni regime. Un avvolgimento con più spire
                e filo sottile produce tensioni più alte a regimi
                bassi ma satura prima agli alti. Uno con meno spire
                e filo più grosso eroga più corrente agli alti regimi
                ma ha una tensione minima di funzionamento più alta.
                Il bilanciamento è specifico per ogni motore e per
                il carico elettrico previsto.
              </p>
            </div>

            <div className="statoreCard">
              <span className="statoreIdx statoreIdxTeal">03</span>
              <h4>Il pick-up — la bobina che non genera corrente ma posizione</h4>
              <p>
                Il pick-up è una piccola bobina aggiuntiva sullo
                statore con una funzione completamente diversa dagli
                avvolgimenti principali: non genera potenza ma un
                segnale di posizione. Quando la riluttanza sul volano
                passa davanti alla bobina del pick-up, la variazione
                di flusso magnetico genera un impulso di pochi
                millivolt — abbastanza per triggerare la CDI.
                Il traferro tra la riluttanza e il pick-up è critico:
                troppo grande e il segnale è troppo debole per
                triggerare la CDI in modo affidabile — il motore
                va a scatti o non parte. Valore tipico: 0,3 – 0,5 mm,
                verificabile con spessimetro.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── GENERAZIONE AC BLOCK — la fisica ────────────────────────────── */}
        <motion.div
          className="generazioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="generazioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">La fisica</span>
            <h3>Come nasce la corrente — dalla legge di Faraday all'onda sinusoidale</h3>
          </motion.div>

          <motion.div className="generazioneContent" variants={cardVariants}>

            <div className="genFormule">
              <div className="genFormula">
                <span className="formulaEq">ε = −N · dΦ/dt</span>
                <span className="formulaLabel">Legge di Faraday — FEM indotta</span>
              </div>
              <div className="genFormula">
                <span className="formulaEq">V<sub>rms</sub> = V<sub>peak</sub> / √2</span>
                <span className="formulaLabel">Tensione efficace AC sinusoidale</span>
              </div>
              <div className="genFormula">
                <span className="formulaEq">f = (n · p) / 60</span>
                <span className="formulaLabel">Frequenza generata — n = giri, p = coppie di poli</span>
              </div>
            </div>

            <div className="genTesto">
              <p>
                La tensione indotta cresce linearmente con il numero di
                spire N dell'avvolgimento e con la velocità di variazione
                del flusso magnetico dΦ/dt. Più veloce gira il volano,
                più rapida è la variazione di flusso, più alta è la
                tensione generata. Questo significa che lo statore di un
                2T produce tensioni molto diverse tra minimo (2.000 giri)
                e massimo (10.000 giri) — la CDI deve essere progettata
                per funzionare su tutto questo range senza danneggiarsi
                per sovratensione agli alti regimi.
              </p>
              <p>
                La corrente prodotta è alternata sinusoidale — non continua
                come quella di una batteria. La CDI la rettifica internamente
                e la accumula nel condensatore. Per i circuiti con fari e
                strumentazione serve un raddrizzatore-regolatore (rectifier-
                regulator) esterno che converte l'AC in DC stabilizzata
                a 12 o 14,4 V. Nei motori da cross senza luci questo
                componente è assente — tutta la corrente va all'accensione.
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
            <span className="captionTag">Il traferro del pick-up</span>
            <p>
              La verifica del traferro tra pick-up e riluttanza sul volano
              è uno dei controlli più trascurati e più impattanti sull'
              affidabilità dell'accensione. Si misura con uno spessimetro
              a lamelle inserendo le lamine nel gap tra bobina e volano
              con il pistone al PMS. Se il gap è fuori specifica la bobina
              del pick-up va allentata e riposizionata — ha quasi sempre
              le viti in slot allungati per permettere la regolazione fine
              della posizione radiale.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — verifica traferro pick-up con spessimetro a lamelle sul volano</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── VOLANO ALLEGGERITO BLOCK ─────────────────────────────────────── */}
        <motion.div
          className="alleggerittoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="alleggerittoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Tuning</span>
            <h3>Volano alleggerito — quando vale la pena e quando è un errore</h3>
            <p>
              La sostituzione del volano OEM con una versione alleggerita
              è uno dei tuning più discussi nel 2T. I vantaggi esistono —
              ma dipendono completamente dal contesto di utilizzo.
              Fare la scelta sbagliata rende la moto peggiore, non migliore.
            </p>
          </motion.div>

          <motion.div className="alleggerittoGrid" variants={cardVariants}>

            <div className="allegCard allegPro">
              <span className="allegBadge badgePro">Quando conviene</span>
              <h4>Cross, pista, uso a regime alto costante</h4>
              <ul className="allegList">
                <li>Risposta ai gas più immediata — il motore sale di giri più velocemente</li>
                <li>Frenata motore più netta — il motore frena prima in chiusura gas</li>
                <li>Riduzione del peso non sospeso sul lato motore</li>
                <li>Miglioramento percepibile su piste veloci con molti allunghi</li>
              </ul>
            </div>

            <div className="allegCard allegContro">
              <span className="allegBadge badgeContro">Quando è un errore</span>
              <h4>Enduro, trial, fuoristrada tecnico a basso regime</h4>
              <ul className="allegList">
                <li>Il motore diventa nervoso e difficile da controllare nei tratti lenti</li>
                <li>Maggiore tendenza allo stallamento ai bassissimi regimi</li>
                <li>Il pilota deve lavorare molto di più con la frizione per mantenere il regime</li>
                <li>Affaticamento nella guida tecnica — il motore non "porta" come prima</li>
              </ul>
            </div>

            <div className="allegCard allegNota">
              <span className="allegBadge badgeNota">Da sapere sempre</span>
              <h4>Il magnete non si alleggerisce — solo la massa perimetrale</h4>
              <p>
                Un volano alleggerito professionale rimuove materiale
                dalla corona esterna e dalle zone di raccordo — mai
                dai settori dove sono alloggiati i magneti. Modificare
                la zona magnetica altera l'output dello statore e può
                rendere l'accensione inaffidabile. I kit aftermarket
                (Steahly, Trail Tech, GYT-R) sono progettati per
                mantenere intatta la geometria magnetica riducendo
                solo la massa d'inerzia. Volani alleggeriti artigianalmente
                sulla mola sono quasi sempre problematici.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── MANUTENZIONE BLOCK ──────────────────────────────────────────── */}
        <motion.div
          className="manutBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="manutHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Manutenzione e diagnosi</span>
            <h3>Statore bruciato, magneti indeboliti e traferro — i tre problemi da conoscere</h3>
            <p>
              Il gruppo volano-statore è uno dei componenti più affidabili
              del motore — ma quando cede, il motore si ferma senza preavviso.
              I tre problemi principali hanno sintomi ben riconoscibili
              e cause specifiche.
            </p>
          </motion.div>

          <motion.div className="manutGrid" variants={cardVariants}>

            <div className="manutCard">
              <div className="manutNum manutNumRed">!</div>
              <div className="manutContent">
                <h4>Statore bruciato — il guasto più comune</h4>
                <p>
                  Lo statore si brucia quasi sempre per una di queste cause:
                  cortocircuito nell'impianto che causa sovracorrente negli
                  avvolgimenti, liquido che penetra nel coperchio del volano
                  durante un guado e cortocircuita gli avvolgimenti,
                  o surriscaldamento per uso prolungato con fari accesi
                  su un impianto non dimensionato per quel carico.
                  Il sintomo è netto: l'accensione muore completamente
                  o diventa intermittente. La diagnosi si fa con multimetro
                  misurando la resistenza degli avvolgimenti — fuori
                  specifica o cortocircuito a massa indica statore da sostituire.
                </p>
              </div>
            </div>

            <div className="manutCard">
              <div className="manutNum manutNumYellow">~</div>
              <div className="manutContent">
                <h4>Magneti indeboliti — il problema lento e subdolo</h4>
                <p>
                  I magneti permanenti perdono gradualmente la magnetizzazione
                  nel tempo — soprattutto se esposti a temperature elevate
                  (oltre 80 °C per i magneti alla ferrite, oltre 120 °C
                  per i NdFeB) o a urti che alterano la struttura cristallina.
                  Un volano con magneti indeboliti produce meno tensione a
                  basso regime — il motore parte difficilmente a freddo
                  o ha accensione intermittente sotto i 3.000 giri.
                  Si diagnostica misurando la tensione AC agli avvolgimenti
                  dello statore a un regime noto e confrontandola con il
                  valore di specifica del costruttore.
                </p>
              </div>
            </div>

            <div className="manutCard">
              <div className="manutNum manutNumTeal">↔</div>
              <div className="manutContent">
                <h4>Traferro pick-up fuori specifica — accensione irregolare</h4>
                <p>
                  Il traferro tra il pick-up e la riluttanza sul volano
                  può aumentare nel tempo per l'allentamento delle viti
                  di fissaggio dello statore sotto vibrazioni intense
                  o per deformazione lieve del volano per un urto.
                  Un traferro eccessivo produce un segnale trigger
                  più debole — la CDI può perdere colpi agli alti
                  regimi o non triggerare in modo affidabile all'avviamento.
                  Si corregge allentando le viti dello statore, avvicinando
                  il pick-up alla specifica con spessimetro e riavvitando
                  con il serraggio corretto.
                </p>
              </div>
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
            <span className="cardTag">Smontaggio</span>
            <h3>L'estrattore del volano — non si smonta senza lo strumento giusto</h3>
            <p>
              Il volano è calettato sull'estremità dell'albero motore
              con un cono morse e bloccato da un dado centrale.
              Non si smonta mai con martello e cacciavite — il rischio
              di danneggiare il cono dell'albero o le chiocciole dello
              statore è altissimo. L'estrattore specifico per modello
              (o universale con attacchi adatti) avvita nelle filettature
              del volano e spinge sull'estremità dell'albero con una
              vite centrale. Il volano si sfila con un singolo colpo
              netto — mai con forza progressiva che rischia di
              deformare il cono. Investimento obbligatorio prima
              di qualsiasi lavoro al gruppo volano-statore.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Avanzamento anticipo</span>
            <h3>Modificare l'anticipo spostando lo statore — il tuning più economico</h3>
            <p>
              Nei sistemi con anticipo fisso meccanico la posizione
              angolare dello statore determina l'anticipo di accensione.
              Ruotare lo statore di qualche grado nella direzione
              di rotazione del volano anticipa la scintilla (più potenza
              agli alti, rischio detonazione); ruotarlo in senso opposto
              ritarda (più coppia ai bassi, meno rischio detonazione).
              Ogni motore ha una finestra di regolazione di ±2 – 4°
              prima che le prestazioni peggiorino significativamente.
              Modifiche più ampie richiedono una CDI con mappa di anticipo
              variabile per ottenere benefici reali.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Regolatore</span>
            <h3>Il raddrizzatore-regolatore — il componente dimenticato</h3>
            <p>
              Sui modelli con luci e impianto elettrico il regolatore
              di tensione (rectifier-regulator) converte l'AC dello
              statore in DC stabilizzata e protegge la batteria dalla
              sovratensione agli alti regimi. Un regolatore difettoso
              causa la morte della batteria in poche ore (sovratensione)
              o luci instabili e centralina instabile (tensione insufficiente).
              Si diagnostica misurando la tensione ai morsetti batteria
              a vari regimi: deve restare tra 13,8 e 14,4 V da 3.000
              giri in su. Fuori da questa finestra il regolatore
              va sostituito — non si ripara.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default VolanoEStatore;
