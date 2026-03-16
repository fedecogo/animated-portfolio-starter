import "./abs.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
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

const Abs = () => {
  return (
    <section className="abs" id="abs">
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
            <motion.span className="chapterLabel" variants={fadeUpVariants}>
              Elettronica — ABS
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              ABS sulle moto 2T — come funziona, perché ci ha messo tanto ad arrivare e cosa cambia nella frenata
            </motion.h2>

            <motion.p variants={fadeUpVariants}>
              L'ABS — Anti-lock Braking System — nasce per impedire il bloccaggio
              delle ruote in frenata. Quando una ruota si blocca, il contatto con
              l'asfalto passa da rotolamento a slittamento: la forza frenante crolla
              e il controllo direzionale scompare quasi istantaneamente. L'ABS risolve
              questo problema modulando la pressione idraulica del freno in modo
              autonomo e rapidissimo, decine di volte al secondo, mantenendo la ruota
              in rotolamento anche durante una staccata al limite o su fondo scivoloso.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Sulle moto 4T stradali di media e alta cilindrata l'ABS è diventato
              obbligatorio per legge in Europa dal 2016 (Regolamento UE 168/2013
              per L3e ≥ 125 cc). Ma sulle moto 2T — cross, enduro, minimoto racing —
              l'arrivo è stato molto più lento e più selettivo. Le ragioni sono
              tecniche, regolamentari e culturali insieme: i 2T sono nati in contesti
              dove il pilota gestisce la frenata con la propria tecnica, dove il peso
              di una centralina ABS è un lusso non gradito e dove le sospensioni
              con grandi escursioni e il terreno naturale rendono la gestione
              dell'impianto molto più complessa che su asfalto.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Oggi alcune 2T moderne — in particolare le enduro stradali omologate
              come KTM EXC, Husqvarna TE, Beta RR Enduro — montano sistemi ABS
              specifici per off-road con modalità disinseribili. Non si tratta
              del classico ABS stradale: sono sistemi progettati per tollerare
              la ruota posteriore bloccata intenzionalmente, per riconoscere
              terreni a bassa aderenza e per integrarsi con la frenata mista
              tipica dell'uso enduro. Capire come funziona questo sistema
              significa capire anche le differenze profonde rispetto al mondo stradale.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <h4>Quattro concetti per capire l'ABS sul 2T</h4>

            <div className="miniStep">
              <span className="stepNum">01</span>
              <div className="stepText">
                <strong>Bloccaggio e slittamento</strong>
                Quando la ruota smette di girare in frenata, la forza frenante
                crolla perché il coefficiente d'attrito statico è sostituito
                da quello dinamico (più basso). L'ABS mantiene la ruota al limite
                del bloccaggio, dove l'aderenza è massima.
              </div>
            </div>

            <div className="miniStep">
              <span className="stepNum">02</span>
              <div className="stepText">
                <strong>Velocità di risposta</strong>
                Un sistema ABS moderno esegue cicli di regolazione a 25–50 Hz.
                Questo è impossibile per il pilota umano, che nei momenti migliori
                riesce a modulare a pochi cicli al secondo. La macchina è
                strutturalmente più veloce.
              </div>
            </div>

            <div className="miniStep">
              <span className="stepNum">03</span>
              <div className="stepText">
                <strong>ABS off-road vs stradale</strong>
                L'ABS per enduro/cross tollera il bloccaggio volontario del
                posteriore (tecnica normale fuoristrada), ha soglie più alte,
                reagisce diversamente su fango e sabbia e può essere disattivato
                completamente sulla ruota posteriore.
              </div>
            </div>

            <div className="miniStep">
              <span className="stepNum">04</span>
              <div className="stepText">
                <strong>Perché è arrivato tardi sul 2T</strong>
                Peso aggiuntivo, costo, regolamenti motociclistici off-road
                che non lo richiedevano, cultura tecnica del pilota e
                complessità dell'integrazione su moto con grandi escursioni
                sospensive hanno rallentato l'adozione per anni.
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── VISUAL BLOCK 1 ───────────────────────────────────────────────── */}
        <motion.div
          className="visualBlock"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="visualContent">
            <p className="visualTitle">Schema ABS — sensori, modulator, ECU</p>
            <p className="visualSub">
              Sensore di velocità ruota → ECU ABS → modulatore idraulico (valvole
              inlet/outlet + pompa ritorno) → pinza freno. Il ciclo si chiude
              a ogni impulso rilevato di bloccaggio imminente.
            </p>
            <div className="dataGrid">
              <div className="dataPill"><span>25–50</span>Hz cicli ABS</div>
              <div className="dataPill"><span>1–3</span>ms tempo risposta</div>
              <div className="dataPill"><span>0.9–1.0</span>µ slip ottimale</div>
              <div className="dataPill"><span>~0.8</span>kg modulator off-road</div>
            </div>
          </div>
        </motion.div>

        {/* ── PRINCIPIO FISICO BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="fisicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="blockHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Principio fisico</span>
            <h3>Slip ratio, curva µ-slip e perché il bloccaggio è sempre peggio della soglia limite</h3>
            <p>
              La fisica della frenata non è intuitiva. Capire lo slip ratio e
              la curva di attrito spiega tutto: perché bloccare peggiora le cose,
              dove sta il punto ideale e come l'ABS ci arriva in automatico.
            </p>
          </motion.div>

          <motion.div className="cardsRow" variants={cardVariants}>
            <div className="infoCard">
              <div className="cardIcon">📐</div>
              <h4>Lo slip ratio — la misura del bloccaggio</h4>
              <p>
                Lo slip ratio (λ) descrive il rapporto tra velocità periferica
                della ruota e velocità effettiva della moto. A λ = 0 la ruota
                gira libera senza frenata. A λ = 1 (100%) la ruota è completamente
                bloccata e striscia sull'asfalto. La zona di massima aderenza
                µ(λ) si trova tipicamente tra λ = 0,10 e λ = 0,20 su asfalto
                asciutto — circa 10–20% di slip. È lì che l'ABS cerca di
                mantenere la ruota ad ogni ciclo.
              </p>
            </div>

            <div className="infoCard">
              <div className="cardIcon">📉</div>
              <h4>La curva µ-slip — picco e crollo</h4>
              <p>
                La curva che descrive il coefficiente d'attrito µ in funzione
                del slip ha un picco ben definito e poi scende. Superato il picco,
                più si aumenta lo slip (più si blocca la ruota) più si perde
                aderenza. Questo spiega perché una ruota bloccata non frena bene:
                stiamo lavorando nella zona discendente della curva, con µ ben
                inferiore al massimo disponibile. L'obiettivo dell'ABS è mantenersi
                sul picco o subito prima, senza mai scendere nella zona di crollo.
              </p>
            </div>

            <div className="infoCard">
              <div className="cardIcon">🔄</div>
              <h4>Il ciclo di regolazione — hold, dump, build</h4>
              <p>
                Quando il sensore di velocità ruota segnala una decelerazione
                angolare superiore alla soglia programmata, l'ECU ABS entra nel
                ciclo di controllo in tre fasi: <strong>Hold</strong> (mantieni la
                pressione attuale, chiudi la valvola inlet), <strong>Dump</strong>
                (scarica pressione sulla ruota tramite valvola outlet verso
                l'accumulatore), <strong>Build</strong> (la pompa di ritorno
                riporta il fluido nel circuito per aumentare nuovamente la pressione).
                Questo ciclo si ripete a frequenza elevata finché il rischio di
                bloccaggio è presente.
              </p>
            </div>

            <div className="infoCard">
              <div className="cardIcon">🛞</div>
              <h4>Controllo direzionale — il vantaggio che non si vede nelle cifre</h4>
              <p>
                Oltre alla distanza di frenata, il vantaggio principale dell'ABS
                è il mantenimento della direzionalità. Una ruota anteriore bloccata
                non permette più di curvare: la moto va dritta indipendentemente
                dallo sterzo. Un ABS che mantiene la ruota in rotolamento conserva
                anche la capacità di evitare ostacoli durante la staccata.
                Su fondo scivoloso — asfalto bagnato, ghiaia, erba — questa
                differenza diventa ancora più critica.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── HARDWARE BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="hardwareBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="blockHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Componenti hardware</span>
            <h3>Sensori ruota, ECU ABS, modulatore idraulico e integrazione sull'impianto frenante 2T</h3>
            <p>
              Un sistema ABS non è solo software. La parte fisica — sensori,
              modulatore, connessioni idrauliche — è fondamentale e richiede
              una progettazione specifica per ogni applicazione, ancora di più
              quando si parla di moto off-road.
            </p>
          </motion.div>

          <motion.div className="tipCardsGrid" variants={cardVariants}>
            <div className="tipCard steel">
              <div className="tipIcon">🧲</div>
              <h4>Sensore di velocità ruota (WSS)</h4>
              <p>
                Il cuore del sistema. È tipicamente un sensore a effetto Hall
                che legge i denti di una ruota fonica (tone ring) solidale al
                mozzo. La frequenza degli impulsi è proporzionale alla velocità
                di rotazione. L'ECU confronta la velocità delle due ruote e
                calcola la decelerazione angolare in tempo reale. Su 2T enduro
                la ruota fonica deve resistere a fango, impatti e vibrazioni
                intense: i sistemi moderni usano anelli con 42 o 48 denti
                per avere buona risoluzione anche a bassa velocità.
              </p>
            </div>

            <div className="tipCard amber">
              <div className="tipIcon">⚙️</div>
              <h4>Modulatore idraulico (HCU)</h4>
              <p>
                È il componente che fisicamente modifica la pressione del
                circuito freno. Contiene le valvole solenoide (inlet e outlet),
                un accumulatore a bassa pressione per ricevere il fluido scaricato
                e una pompa di ritorno DC per rimandare il fluido nel circuito.
                Nei sistemi off-road come Bosch 9.3M o Continental MK 100 per
                enduro, il modulatore è progettato per essere più leggero
                (attorno a 700–900 g), resistente a vibrazioni e schizzi d'acqua
                (IP67/IP69K), e compatibile con pressioni di ingresso tipiche
                di pompe freno radiali racing.
              </p>
            </div>

            <div className="tipCard violet">
              <div className="tipIcon">🖥️</div>
              <h4>ECU ABS — l'elaborazione centrale</h4>
              <p>
                Nei sistemi moderni per enduro 2T l'ECU ABS è spesso integrata
                o strettamente connessa alla ECU motore. L'algoritmo di controllo
                è basato su un modello di dinamica del veicolo che tiene conto
                della decelerazione della ruota, della velocità di riferimento
                stimata e del gradiente di slittamento. Su KTM EXC TPI e
                Husqvarna TE con ABS, la calibrazione dell'algoritmo è specifica
                per l'uso off-road: soglie di intervento più alte rispetto
                a una moto stradale, per evitare interventi indesiderati su
                fondo non uniforme o in situazioni dove un minimo di slittamento
                è normale e voluto.
              </p>
            </div>

            <div className="tipCard green">
              <div className="tipIcon">🔧</div>
              <h4>Integrazione sull'impianto 2T — sfide specifiche</h4>
              <p>
                Su una moto 2T off-road l'integrazione dell'ABS pone problemi
                non banali: l'escursione sospensiva alta (300 mm anteriore su
                moto enduro) richiede cavi sensore con lungo percorso e
                protezione da sfregamento. La pompa freno posteriore con leva
                allungata e geometrie diverse rispetto alle stradali richiede
                calibrazione idraulica dedicata. Il fango può ostruire la ruota
                fonica riducendo la precisione di lettura — i sistemi migliori
                usano algoritmi di fault detection che rilevano l'anomalia e
                segnalano il malfunzionamento invece di intervenire in modo errato.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── VISUAL BLOCK 2 ───────────────────────────────────────────────── */}
        <motion.div
          className="visualBlockAlt"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="visualContent">
            <p className="visualTitle">Modalità ABS off-road — come funziona la disattivazione posteriore</p>
            <p className="visualSub">
              Su KTM EXC e Husqvarna TE il pilota può scegliere tra modalità
              "road" (ABS su entrambe le ruote) e "offroad" (ABS solo anteriore,
              posteriore libero). Il bloccaggio volontario del posteriore è
              tecnica normale in fuoristrada per frenare in curva o su fondo morbido.
            </p>
            <div className="dataGrid">
              <div className="dataPill"><span>Mode 1</span>ABS ant + post</div>
              <div className="dataPill"><span>Mode 2</span>solo anteriore</div>
              <div className="dataPill"><span>Off</span>disattivato tot.</div>
            </div>
          </div>
        </motion.div>

        {/* ── SISTEMI REALI BLOCK ──────────────────────────────────────────── */}
        <motion.div
          className="sistemiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="blockHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Sistemi reali sul mercato</span>
            <h3>KTM EXC, Husqvarna TE, Beta RR Enduro — i 2T che hanno introdotto l'ABS nel fuoristrada</h3>
            <p>
              I sistemi attualmente disponibili su 2T di serie non sono adattamenti
              da moto stradali: sono stati riprogettati o fortemente modificati
              per le esigenze specifiche dell'enduro e del fuoristrada.
            </p>
          </motion.div>

          <motion.div className="cardsRow" variants={cardVariants}>
            <div className="infoCard">
              <div className="cardIcon">🏁</div>
              <h4>KTM EXC TPI — pioniera con ABS Bosch off-road</h4>
              <p>
                La KTM EXC 150/250/300 TPI (iniezione diretta 2T) ha introdotto
                l'ABS off-road Bosch 9.3M sulle versioni stradali omologate.
                Il sistema è calibrato specificamente per l'enduro: intervento
                ABS anteriore con soglie di slip più permissive rispetto alle
                moto stradali, posteriore disattivabile con una pressione prolungata
                sul pulsante ABS. Il Bosch 9.3M è uno dei moduli più leggeri
                disponibili: pesa circa 700 g incluso il modulatore. La ruota
                fonica è integrata nel mozzo anteriore con 48 denti per buona
                risoluzione anche a bassissima velocità.
              </p>
            </div>

            <div className="infoCard">
              <div className="cardIcon">🔵</div>
              <h4>Husqvarna TE — stessa piattaforma, stesso sistema</h4>
              <p>
                Le Husqvarna TE 150i e 250i/300i condividono la piattaforma
                tecnica con le KTM EXC di analoga cilindrata, incluso il sistema
                ABS Bosch 9.3M. La calibrazione può variare leggermente tra
                i modelli, ma il principio di funzionamento e le modalità
                di selezione sono equivalenti. Su entrambi i marchi il sistema
                ABS è omologato per l'uso stradale (condizione necessaria per
                la targatura) ma ha una mappa di controllo adattata per non
                interferire con le tecniche di guida off-road tipiche dell'enduro.
              </p>
            </div>

            <div className="infoCard">
              <div className="cardIcon">🟡</div>
              <h4>Beta RR Enduro — approccio alternativo</h4>
              <p>
                Beta ha introdotto l'ABS sulle versioni Race di alcune RR Enduro
                (anche 2T) nelle versioni omologate stradali. La filosofia è
                simile: sistema disinseribile sul posteriore, calibrazione
                per uso misto asfalto-sterrato, modulatore compatto.
                Il sistema Beta usa un'interfaccia di selezione integrata
                nel cruscotto TFT color e permette configurazioni per il tipo
                di terreno. La presenza del TFT — insolita fino a poco tempo
                fa su moto enduro — si è rivelata utile anche per diagnosticare
                errori del sistema frenante.
              </p>
            </div>

            <div className="infoCard">
              <div className="cardIcon">⚡</div>
              <h4>Perché non su tutte — puro racing e competizione FIM</h4>
              <p>
                Le versioni competizione (KTM EXC Factory Edition, GASGAS EC,
                TM Racing) vendute senza omologazione stradale non montano ABS.
                In gara enduro FIM l'ABS non è proibito ma non è neanche richiesto,
                e i team factory preferiscono eliminare ogni componente non
                strettamente necessario per ridurre peso e complessità.
                Sulle 2T da cross (MX) e supercross l'ABS non è mai apparso:
                lì il pilota gestisce la frenata con tecnica specifica e il sistema
                aggiungerebbe peso e latenza inaccettabili in quel contesto.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="diagnosiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="blockHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e sintomi</span>
            <h3>Spia ABS accesa, intervento indesiderato, perdita di pressione — come leggere i problemi del sistema</h3>
            <p>
              Un sistema ABS che ha un problema non necessariamente smette di
              frenare: di solito si disattiva e torna al frenante convenzionale,
              segnalando il problema via spia. Ma diagnosticare bene richiede
              di capire cosa ha rilevato.
            </p>
          </motion.div>

          <motion.div className="diagGrid" variants={cardVariants}>
            <div className="diagCard sintomo">
              <div className="diagLabel">Sintomo</div>
              <h4>Spia ABS accesa fissa o lampeggiante</h4>
              <p>
                La spia fissa indica un guasto rilevato all'accensione o durante
                la marcia. Il lampeggio può segnalare un fault intermittente.
                In entrambi i casi il sistema si disattiva e la frenata torna
                convenzionale. Prima di qualunque altra diagnosi va letta
                la memoria guasti tramite strumento diagnostico (KTM Diagnostics Tool,
                BDS Bosch o scanner OBD compatibile).
              </p>
            </div>

            <div className="diagCard sintomo">
              <div className="diagLabel">Sintomo</div>
              <h4>Intervento ABS su asfalto asciutto a bassa velocità</h4>
              <p>
                Se l'ABS interviene in condizioni dove non dovrebbe — frenate
                normali su asfalto asciutto — il problema è quasi sempre nel
                sensore o nella ruota fonica. Fango che copre parzialmente
                la ruota fonica, dente mancante o deformato, distanza sensore-anello
                fuori specifica (di solito 0,3–1,5 mm) o cavo sensore difettoso
                sono le cause più comuni. La lettura della velocità diventa
                errata e l'ECU interpreta il segnale come un bloccaggio imminente.
              </p>
            </div>

            <div className="diagCard sintomo">
              <div className="diagLabel">Sintomo</div>
              <h4>Pulsazione anomala alla leva o pedale durante frenata normale</h4>
              <p>
                Un ABS che pompa il freno in condizioni normali segnala
                che l'algoritmo sta intervenendo dove non dovrebbe.
                Oltre al sensore, può essere un problema di pressione troppo
                bassa nel circuito (aria nel fluido, guarnizioni consumate
                nel modulatore) che l'ECU interpreta come perdita di efficacia
                frenante. Spurgo dell'impianto e verifica della pompa sono
                i primi passi dopo aver escluso il sensore.
              </p>
            </div>

            <div className="diagCard misura">
              <div className="diagLabel">Misura</div>
              <h4>Controllo gap sensore — distanza ruota fonica</h4>
              <p>
                Con il multimetro impostato su AC o con uno strumento di lettura
                del segnale Hall, verificare che il sensore produca un segnale
                pulito e regolare ruotando la ruota a mano. La distanza dal
                sensore all'anello fonica è critica: troppa → segnale debole
                e noisy; troppo poca → rischio contatto. Specifica tipica Bosch
                9.3M: gap 0,5–1,2 mm. Controllare anche che nessun dente
                sia mancante, piegato o incrostato.
              </p>
            </div>

            <div className="diagCard misura">
              <div className="diagLabel">Misura</div>
              <h4>Verifica fluido e pressione — impianto frenante integro</h4>
              <p>
                Il modulatore ABS lavora sul fluido freno del circuito primario.
                Fluido degradato (umidità oltre il 3,5% abbassa il punto
                di ebollizione sotto i 155°C per DOT 4 usato), bolle d'aria
                o perdite al modulatore compromettono il funzionamento dell'intero
                sistema. Sostituzione periodica del DOT 4 ogni 2 anni o ogni
                stagione intensa. Verifica visiva del modulatore per perdite
                esterne.
              </p>
            </div>

            <div className="diagCard intervallo">
              <div className="diagLabel">Intervallo</div>
              <h4>Manutenzione preventiva — pulizia, fluido e firmware</h4>
              <p>
                Su moto enduro 2T: pulire ruota fonica e sensore a ogni revisione
                sospensioni (almeno annuale); verificare il cavo sensore per
                abrasioni dovute all'escursione sospensiva; cambiare il fluido
                freno ogni 2 anni o ogni stagione con uso intenso;
                aggiornare il firmware ECU ABS quando disponibile tramite
                strumento KTM/Husqvarna — alcuni aggiornamenti ottimizzano
                le soglie di intervento off-road.
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
          <motion.div className="blockTitle" variants={fadeUpVariants}>
            In sintesi
          </motion.div>

          <div className="grid3">
            <motion.article className="infoCard" variants={cardVariants}>
              <h4>Idea chiave</h4>
              <p>
                L'ABS non frena più forte — aiuta a frenare al massimo possibile
                senza bloccare. La distanza di frenata dipende dall'aderenza
                disponibile, non dall'esistenza dell'ABS; ma l'ABS permette
                di arrivare al limite di quell'aderenza senza esperienza specifica
                o tecnica raffinata, e soprattutto mantiene la direzionalità
                durante la staccata — cosa che nessuna tecnica manuale garantisce
                in caso di emergenza improvvisa.
              </p>
            </motion.article>

            <motion.article className="infoCard" variants={cardVariants}>
              <h4>Perché il 2T ha aspettato</h4>
              <p>
                Regolamenti sportivi che non lo richiedevano, cultura del pilota
                che considera la modulazione manuale parte della tecnica,
                peso aggiuntivo non tollerato in racing, difficoltà di integrazione
                su moto con sospensioni a grande escursione e telaio a geometria
                variabile. Solo l'obbligo di targatura stradale per le enduro
                omologate ha reso necessario — e poi accettato — l'ABS nel mondo 2T.
              </p>
            </motion.article>

            <motion.article className="infoCard" variants={cardVariants}>
              <h4>Questo capitolo copre</h4>
              <p>
                Qui si tratta il sistema ABS: principio fisico dello slip ratio,
                hardware del sistema (sensori, modulatore, ECU), sistemi reali
                su 2T moderni e diagnosi. <strong>L'impianto frenante meccanico</strong>
                — pompe, pinze, dischi, pastiglie, olio freni — è nel capitolo
                Ciclistica 5.4. La centralina motore e le mappe sono nel capitolo
                Elettronica 6.7 e 6.8.
              </p>
            </motion.article>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Abs;
