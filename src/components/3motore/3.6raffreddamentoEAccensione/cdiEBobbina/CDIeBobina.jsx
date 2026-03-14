import "./cDIeBobina.scss";
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

const CDIeBobina = () => {
  return (
    <section className="cDIeBobina" id="cdi-bobina">
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
              CDI<br />
              <span className="accentText">e bobina</span>
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La CDI e la bobina sono la catena finale dell'accensione —
              i due componenti che trasformano la corrente dello statore
              in una scarica da 20.000 – 30.000 volt capace di ionizzare
              l'aria nella camera di combustione e innescare la
              combustione. Sembrano una scatola nera e un cilindro
              di plastica. In realtà la CDI è un circuito di potenza
              impulsiva con timing al microsecondo, e la bobina è
              un trasformatore ad alto rapporto di trasformazione
              che opera in condizioni termiche e vibrazionali
              tra le più severe di tutto il motore.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il 2 tempi usa quasi universalmente la CDI —
              Capacitor Discharge Ignition — invece del sistema
              a induzione tradizionale usato nei 4 tempi più vecchi.
              Il motivo è semplice: il 2T deve fare sccoccare la
              scintilla ogni singola rotazione dell'albero, ad ogni
              regime, in modo affidabile. La CDI scarica l'energia
              accumulata in un condensatore in tempi dell'ordine
              dei microsecondi — più veloce e più potente di qualsiasi
              sistema a bobina tradizionale, anche agli altissimi
              regimi dove il tempo disponibile per la scintilla
              si misura in frazioni di millisecondo.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">La catena dell'accensione</span>
              <h3>Dallo statore alla scintilla — sei passi</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="gen">①</span>
                <span className="miniText">Lo statore genera corrente AC — la CDI la raddrizza e carica il condensatore interno fino a 300 – 400 V</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="pickup">②</span>
                <span className="miniText">Il pick-up rileva la riluttanza sul volano e invia il segnale trigger alla CDI con il timing esatto</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="calcolo">③</span>
                <span className="miniText">La CDI calcola l'anticipo ottimale in funzione del regime — da 5° a regime minimo fino a 35–40° ad alto regime</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="scarica">④</span>
                <span className="miniText">La CDI scarica il condensatore sul primario della bobina in meno di 10 µs — impulso di corrente intensissimo</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="trasf">⑤</span>
                <span className="miniText">La bobina trasforma la tensione — rapporto 1:100 tipico, da 400 V a 30.000 – 40.000 V sul secondario</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="scintilla">⑥</span>
                <span className="miniText">La tensione ionizza il gap della candela — arco elettrico, plasma a 30.000 °C, innesco della combustione</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CDI BLOCK ───────────────────────────────────────────────────── */}
        <motion.div
          className="cdiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="cdiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">La CDI</span>
            <h3>Condensatore, SCR e mappa di anticipo — come funziona il cervello dell'accensione</h3>
            <p>
              La CDI è un circuito elettronico compatto che svolge
              tre funzioni in sequenza: accumula energia, misura
              il timing, scarica al momento giusto. L'intera
              sequenza dura meno di un millisecondo e si ripete
              a ogni giro motore — centinaia di volte al secondo
              agli alti regimi.
            </p>
          </motion.div>

          <motion.div className="cdiGrid" variants={cardVariants}>

            <div className="cdiCard">
              <span className="cdiIdx cdiIdxYellow">01</span>
              <h4>Il condensatore — il serbatoio di energia</h4>
              <p>
                All'interno della CDI c'è un condensatore ad alta
                tensione — tipicamente 0,5 – 2 µF a 400 – 600 V —
                che viene caricato dalla corrente raddrizzata dello
                statore ad ogni ciclo. L'energia accumulata è piccola
                in termini assoluti (circa 40 – 200 mJ) ma viene
                scaricata in un tempo brevissimo: la potenza istantanea
                durante la scarica raggiunge i 10 – 50 kW. È questa
                potenza impulsiva — non l'energia totale — che produce
                una scintilla capace di accendere miscele povere,
                umide o con anticipo non ottimale. Un condensatore
                degradato (capacità calata, perdite interne aumentate)
                riduce progressivamente la potenza della scintilla
                prima di causare un guasto definitivo.
              </p>
            </div>

            <div className="cdiCard">
              <span className="cdiIdx cdiIdxBlue">02</span>
              <h4>Lo SCR — il pubblicitore della scarica</h4>
              <p>
                La scarica del condensatore è controllata da un SCR
                (Silicon Controlled Rectifier) — un componente a
                semiconduttore che rimane aperto finché non riceve
                il segnale di gate dal circuito di timing. Quando
                il pick-up invia l'impulso trigger la CDI calcola
                il ritardo corretto per l'anticipo desiderato,
                aspetta quel ritardo con precisione al microsecondo,
                poi attiva il gate dello SCR. In quel momento il
                condensatore si scarica istantaneamente sul primario
                della bobina. Lo SCR è il componente che più
                frequentemente cede nelle CDI aftermarket di qualità
                bassa: la corrente impulsiva che gestisce è nell'ordine
                dei 100 – 300 A per pochi microsecondi — valori che
                richiedono componenti industriali, non consumer.
              </p>
            </div>

            <div className="cdiCard">
              <span className="cdiIdx cdiIdxViolet">03</span>
              <h4>La mappa di anticipo — regimi e curve</h4>
              <p>
                Le CDI moderne non hanno un anticipo fisso — hanno
                una mappa multidimensionale che varia l'anticipo
                in funzione del regime e, nei sistemi più avanzati,
                della posizione della farfalla e della temperatura.
                A regime minimo l'anticipo è basso (5 – 10°) per
                evitare vibrazioni e coppia negativa all'avviamento.
                Cresce progressivamente fino a 30 – 38° a pieno
                regime. La curva di anticipo è uno dei parametri
                di tuning più efficaci — modificarla con una CDI
                aftermarket programmabile può spostare il picco
                di potenza di 300 – 800 giri senza toccare il
                motore. Marchi di riferimento: Vortex, Kokusan,
                Selettra, Motomaster.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── ANTICIPO BLOCK — visualizzazione grafica ─────────────────────── */}
        <motion.div
          className="anticipoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="anticipoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">La curva di anticipo</span>
            <h3>Da 5° a 38° — come cambia l'anticipo con il regime</h3>
          </motion.div>

          <motion.div className="anticipoCurva" variants={cardVariants}>
            <div className="curvaLabel curvaLabelLeft">Anticipo (°)</div>

            <div className="curvaGrafico">
              {/* barre verticali che rappresentano l'anticipo a diversi regimi */}
              <div className="curvaCol">
                <div className="curvaBar" style={{ height: "13%" }} />
                <span className="curvaGiri">1500</span>
              </div>
              <div className="curvaCol">
                <div className="curvaBar" style={{ height: "22%" }} />
                <span className="curvaGiri">2500</span>
              </div>
              <div className="curvaCol">
                <div className="curvaBar" style={{ height: "42%" }} />
                <span className="curvaGiri">3500</span>
              </div>
              <div className="curvaCol">
                <div className="curvaBar" style={{ height: "62%" }} />
                <span className="curvaGiri">5000</span>
              </div>
              <div className="curvaCol">
                <div className="curvaBar" style={{ height: "82%" }} />
                <span className="curvaGiri">7000</span>
              </div>
              <div className="curvaCol">
                <div className="curvaBar curvaBarPeak" style={{ height: "100%" }} />
                <span className="curvaGiri">9000</span>
              </div>
              <div className="curvaCol">
                <div className="curvaBar curvaBarPeak" style={{ height: "100%" }} />
                <span className="curvaGiri">11000</span>
              </div>
            </div>

            <div className="curvaLabel curvaLabelBottom">Regime (giri/min)</div>

            <div className="curvaNote">
              <div className="curvaNota">
                <span className="curvaNotaDot dotLow" />
                <span>Anticipo basso ai bassi regimi — evita coppia inversa all'avviamento</span>
              </div>
              <div className="curvaNota">
                <span className="curvaNotaDot dotMid" />
                <span>Crescita progressiva — ottimizza la combustione su tutta la banda</span>
              </div>
              <div className="curvaNota">
                <span className="curvaNotaDot dotFull" />
                <span>Anticipo massimo agli alti regimi — il fronte di fiamma ha meno tempo per propagarsi</span>
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
              <span className="placeholderText">Immagine — CDI aperta con condensatore, SCR e circuito di timing visibili + connettori etichettati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Dentro la CDI</span>
            <p>
              Aprire una CDI rivela una densità costruttiva notevole
              per le sue dimensioni: il condensatore ad alta tensione
              (il componente più grande), il raddrizzatore d'ingresso,
              lo SCR di potenza su dissipatore, il microcontrollore
              o il circuito analogico di timing e il trasformatore
              di pilotaggio del gate. Il tutto spesso incapsulato
              in resina epossidica per proteggerlo dall'umidità e
              dalle vibrazioni — il che rende impossibile la riparazione
              e rende la sostituzione l'unico intervento possibile.
            </p>
          </div>
        </motion.div>

        {/* ── BOBINA BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="bobinaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="bobinaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">La bobina</span>
            <h3>Il trasformatore ad alto voltaggio — primario, secondario e rapporto di trasformazione</h3>
            <p>
              La bobina di accensione è un trasformatore — un componente
              puramente passivo che non genera né accumula energia ma
              la trasforma. Prende l'impulso ad alta corrente e bassa
              tensione proveniente dalla CDI e lo converte in un impulso
              ad altissima tensione e bassa corrente sufficiente a
              fare scoccare la scintilla nel gap della candela.
              Il principio è la mutua induzione tra due avvolgimenti
              accoppiati magneticamente.
            </p>
          </motion.div>

          <motion.div className="bobinaContent" variants={cardVariants}>

            <div className="bobinaSchema">
              <div className="bobinaLato bobinaLato1">
                <span className="bobinaLatoLabel">Primario</span>
                <div className="bobinaValori">
                  <div className="bobinaVal">
                    <span className="valNum">50 – 200</span>
                    <span className="valUnit">spire</span>
                  </div>
                  <div className="bobinaVal">
                    <span className="valNum">0,3 – 1,5</span>
                    <span className="valUnit">Ω resistenza</span>
                  </div>
                  <div className="bobinaVal">
                    <span className="valNum">300 – 400</span>
                    <span className="valUnit">V ingresso</span>
                  </div>
                </div>
              </div>

              <div className="bobinaRapporto">
                <span className="rapportoSymbol">→</span>
                <span className="rapportoVal">1 : 80–120</span>
                <span className="rapportoLabel">rapporto di trasformazione</span>
              </div>

              <div className="bobinaLato bobinaLato2">
                <span className="bobinaLatoLabel">Secondario</span>
                <div className="bobinaValori">
                  <div className="bobinaVal">
                    <span className="valNum">5.000 – 20.000</span>
                    <span className="valUnit">spire</span>
                  </div>
                  <div className="bobinaVal">
                    <span className="valNum">5 – 20</span>
                    <span className="valUnit">kΩ resistenza</span>
                  </div>
                  <div className="bobinaVal">
                    <span className="valNum">20.000 – 40.000</span>
                    <span className="valUnit">V uscita</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bobinaSpiegazione">
              <p>
                Il nucleo ferromagnetico della bobina concentra il
                campo magnetico e massimizza l'accoppiamento tra
                i due avvolgimenti. La qualità del nucleo —
                in termini di permeabilità magnetica e perdite
                per isteresi — determina l'efficienza di trasformazione.
                Le bobine OEM di qualità raggiungono efficienze
                dell'80 – 90%: il 10 – 20% dell'energia si perde
                in calore nel nucleo e negli avvolgimenti. Per questo
                la bobina si scalda durante il funzionamento — normale
                fino a 70 – 80 °C, preoccupante oltre 100 °C che
                indica un cortocircuito interno parziale nelle spire.
              </p>
              <p>
                Il cappuccio candela incorpora quasi sempre una resistenza
                da 5 kΩ in serie con il circuito del secondario.
                Questa resistenza smorza le oscillazioni parassite
                ad alta frequenza (RFI) che si generano durante
                la scarica e che potrebbero disturbare la CDI stessa
                o altri dispositivi elettronici. Rimuovere il cappuccio
                resistivo e usare un connettore diretto è possibile
                su circuiti senza elettronica sensibile — ma su qualsiasi
                moto con CDI digitale è sconsigliato.
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
            <span className="captionTag">Il cappuccio candela — non è solo plastica</span>
            <p>
              Il cappuccio candela di qualità (NGK, Denso, Beru) contiene
              la resistenza da 5 kΩ, un terminale in ottone nichelato
              antiossidazione e un sistema di aggancio a pressione
              calibrato per garantire il contatto elettrico anche
              in condizioni di vibrazione intensa. Un cappuccio
              allentato o con il terminale ossidato crea una resistenza
              di contatto variabile che produce accensione intermittente —
              sintomo spesso scambiato per CDI difettosa. Prima
              di cambiare la CDI: pulire e controllare il cappuccio.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — bobina in sezione con nucleo, primario, secondario e cappuccio candela esplosi</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
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
            <h3>CDI o bobina? — come isolare il componente difettoso senza comprare tutto</h3>
            <p>
              Quando l'accensione muore o diventa intermittente i sospettati
              sono sempre gli stessi: CDI, bobina, pick-up, statore.
              La diagnosi corretta segue un ordine preciso — dal più
              facile al più costoso — e usa il multimetro come strumento
              principale. Cambiare tutto alla cieca è costoso e spesso
              non risolve se il problema è altrove.
            </p>
          </motion.div>

          <motion.div className="diagnosGrid" variants={cardVariants}>

            <div className="diagnosCard diagnosCard1">
              <div className="diagnosNum">1°</div>
              <div className="diagnosContent">
                <span className="diagnosBadge">Verifica sempre prima</span>
                <h4>Candela, cappuccio e massa</h4>
                <p>
                  Prima di toccare CDI e bobina: candela nuova,
                  cappuccio candela pulito e ben agganciato,
                  massa del motore al telaio integra e pulita.
                  Il 30 – 40% dei "guasti accensione" si risolvono
                  qui. Una massa allentata causa accensione
                  intermittente identica a una CDI difettosa.
                </p>
              </div>
            </div>

            <div className="diagnosCard diagnosCard2">
              <div className="diagnosNum">2°</div>
              <div className="diagnosContent">
                <span className="diagnosBadge">Con multimetro</span>
                <h4>Misura la bobina — primario e secondario</h4>
                <p>
                  Primario: resistenza tra i due terminali di ingresso
                  dalla CDI — tipicamente 0,3 – 1,5 Ω. Secondario:
                  resistenza tra il terminale dell'alta tensione
                  e la massa bobina — tipicamente 5 – 20 kΩ.
                  Cortocircuito (0 Ω) o circuito aperto (∞ Ω)
                  su entrambi i casi indicano bobina da sostituire.
                </p>
              </div>
            </div>

            <div className="diagnosCard diagnosCard3">
              <div className="diagnosNum">3°</div>
              <div className="diagnosContent">
                <span className="diagnosBadge">Con multimetro AC</span>
                <h4>Misura lo statore e il pick-up</h4>
                <p>
                  Statore: tensione AC ai cavi di alimentazione CDI
                  a 3.000 giri — deve rientrare nei valori di specifica
                  (tipicamente 50 – 200 V AC). Pick-up: resistenza
                  tra i due cavetti — tipicamente 100 – 400 Ω.
                  Fuori specifica indica statore o pick-up da sostituire
                  prima di accusare la CDI.
                </p>
              </div>
            </div>

            <div className="diagnosCard diagnosCard4">
              <div className="diagnosNum">4°</div>
              <div className="diagnosContent">
                <span className="diagnosBadge">Solo se tutto il resto è ok</span>
                <h4>La CDI — l'ultimo sospettato</h4>
                <p>
                  La CDI non si misura con il multimetro in modo
                  affidabile — è un circuito attivo. L'unico test
                  certo è la sostituzione con una unità nota buona
                  dello stesso tipo. Prima di comprarne una nuova:
                  verificare che tutti i connettori siano puliti,
                  che non ci siano cavi abrasi a massa e che
                  lo statore fornisca la tensione corretta.
                  Una CDI si danneggia quasi sempre per sovratensione
                  dallo statore o per cortocircuito nell'impianto.
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
            <span className="cardTag">CDI aftermarket</span>
            <h3>CDI programmabile — quando la mappa originale non basta</h3>
            <p>
              Le CDI aftermarket programmabili (Vortex, Selettra,
              Zeeltronic) permettono di modificare la curva di anticipo
              e — nei modelli avanzati — la limitazione di regime,
              la gestione della valvola di scarico e la mappa in
              funzione della farfalla. La differenza rispetto all'OEM
              è reale su motori preparati: un'accensione ottimizzata
              per la testa e il carburatore specifici può dare 5 – 10%
              di potenza in più senza toccare il motore. Su motori
              stock il guadagno è minore ma la possibilità di eliminare
              il limitatore OEM (spesso tarato basso per ragioni
              omologative) è già un vantaggio percepibile.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">CDI vs TCI</span>
            <h3>La differenza tra CDI e TCI — perché il 2T usa quasi sempre la CDI</h3>
            <p>
              La TCI (Transistor Controlled Ignition) carica l'energia
              nella bobina stessa (a induzione) invece che in un
              condensatore separato. È più economica ma più lenta:
              la bobina ha bisogno di un certo tempo per caricarsi —
              tempo che non esiste agli alti regimi di un 2T.
              La CDI scarica un condensatore già carico in microsecondi:
              non dipende dal regime per garantire la carica completa.
              È per questo che ogni 2T sportivo — da 8.000 a 12.000+
              giri — usa la CDI, mentre i 4T più tranquilli possono
              permettersi la TCI.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Curiosità</span>
            <h3>30.000 volt in un gap di 0,7 mm — la fisica della scintilla</h3>
            <p>
              La scintilla nella candela non è un arco elettrico
              continuo — è un evento in tre fasi: breakdown (ionizzazione
              del gap in pochi nanosecondi con la tensione che sale
              a 20 – 40 kV), arco (corrente alta e tensione che scende
              a pochi kV per 1 – 3 microsecondi), glow (fase luminosa
              finale a bassa corrente che dura qualche centinaio di
              microsecondi). La fase di breakdown è quella che innesca
              la combustione. Le fasi successive alimentano il fronte
              di fiamma già avviato. La temperatura del plasma nell'arco
              supera i 30.000 °C — più calda della superficie del sole.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default CDIeBobina;
