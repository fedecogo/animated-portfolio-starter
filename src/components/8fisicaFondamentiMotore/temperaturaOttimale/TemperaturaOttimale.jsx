import "./temperaturaOttimale.scss";
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

const TemperaturaOttimale = () => {
  return (
    <section className="temperaturaOttimale" id="temperaturaOttimale">
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
              Fisica — 8.4
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Temperatura ottimale: il motore vive in una finestra precisa
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Un motore a 2 tempi non funziona semplicemente "caldo"
              o "freddo" — funziona bene solo dentro una finestra
              termica precisa. Troppo freddo e le tolleranze costruttive
              non sono rispettate: il pistone, che è stato progettato
              con un gioco di espansione termica calcolato al centesimo
              di millimetro, è troppo piccolo per il cilindro —
              e il carburante non brucia nel modo corretto.
              Troppo caldo e il lubrificante si degrada, l'alluminio
              si deforma, il pistone si gratta contro il cilindro.
              Tra questi due estremi c'è la finestra di lavoro —
              e tenersi dentro quella finestra è uno dei compiti
              principali di chi guida e mantiene un 2T.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il problema termico del 2T è strutturalmente diverso
              da quello del 4T: il motore a 2 tempi non ha olio
              in pressione che raffredda le parti interne, non ha
              valvole di scarico che dissipano calore nella testa,
              non ha un ciclo di lavoro ogni due giri che lascia
              un giro "libero" per raffreddarsi. Ogni singolo giro
              è un ciclo completo di combustione — il pistone e il
              cilindro lavorano senza sosta. Questo rende la gestione
              termica ancora più critica che nel 4T equivalente.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Quattro aree termiche critiche</span>
              <h3>Acqua, testa, pistone e carburazione</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Acqua di raffreddamento — la temperatura ottimale è 55 – 75 °C; sopra 90 °C inizia il rischio di surriscaldamento</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Testa cilindro — la temperatura della camera di combustione varia tra 200 e 350 °C in condizioni normali di esercizio</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Pistone — raggiunge 250 – 320 °C al centro della calotta; il gioco pistone-cilindro è calibrato per queste temperature</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Carburazione — la densità dell'aria cambia con la temperatura; jet e ago richiedono adattamento stagionale</span>
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
              <span className="placeholderText">Immagine / GIF — mappa termica sezione cilindro 2T con gradienti di temperatura</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Mappa termica</span>
            <p>
              All'interno del cilindro di un 2T in funzione esistono
              gradienti termici estremi nello spazio di pochi
              centimetri. La camera di combustione raggiunge
              temperature di picco di 1.800 – 2.200 °C durante
              la deflagrazione — ma queste temperature durano
              meno di un millisecondo. La temperatura media alla
              testa cilindro è 200 – 350 °C a regime stabile.
              La calotta del pistone è circa 50 – 80 °C più calda
              della fascia superiore. Le pareti del cilindro nella
              zona della porta di scarico sono le più calde — è lì
              che avviene la maggior parte del trasferimento di
              calore verso l'acqua di raffreddamento. Il punto
              più freddo del sistema è la cassa carter, che rimane
              attorno ai 40 – 60 °C grazie alla miscela
              benzina-olio che la percorre continuamente.
            </p>
          </div>
        </motion.div>

        {/* ── TERMICO BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="termicoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="termicoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Le quattro zone termiche</span>
            <h3>Acqua, testa, pistone e carter — temperature operative e limiti critici</h3>
            <p>
              Ogni zona del motore ha una propria temperatura
              di esercizio ottimale e un proprio limite critico.
              Conoscere questi valori permette di interpretare
              i segnali del motore — un odore diverso, un suono
              cambiato, una risposta diversa alla manetta —
              prima che il danno diventi irreversibile.
            </p>
          </motion.div>

          <motion.div className="termicoGrid" variants={cardVariants}>

            <div className="termicoCard">
              <div className="termicoCardTop">
                <span className="termicoBadge badgeFatto">Fatto</span>
                <span className="termicoSub">Acqua di raffreddamento</span>
              </div>
              <h4>55 – 75 °C — la finestra ottimale dell'acqua nei 2T raffreddati a liquido</h4>
              <p>
                Nei motori a 2 tempi raffreddati a liquido (la quasi
                totalità dei motori da competizione e dei 2T moderni
                da cross ed enduro) la temperatura ottimale dell'acqua
                nel radiatore è tra 55 e 75 °C. Sotto 50 °C il motore
                non ha ancora raggiunto le tolleranze costruttive
                di progetto — il gioco pistone-cilindro è ancora
                troppo grande e il carburante non brucia in modo
                ottimale. Tra 75 e 90 °C il motore è pienamente
                in temperatura ma si avvicina al limite. Sopra
                90 °C l'efficienza del raffreddamento diminuisce
                e inizia il rischio di pre-accensione locale.
                Sopra 100 °C l'acqua bolle (anche con antigelo,
                la pressione nel circuito sale) — guasto imminente.
              </p>
            </div>

            <div className="termicoCard">
              <div className="termicoCardTop">
                <span className="termicoBadge badgeFatto">Fatto</span>
                <span className="termicoSub">Testa cilindro</span>
              </div>
              <h4>200 – 350 °C — la temperatura della camera di combustione a regime</h4>
              <p>
                La testa cilindro è la parte più sollecitata
                termicamente del motore dopo il pistone. In condizioni
                normali di esercizio la temperatura della camera
                di combustione si stabilizza tra 200 e 350 °C
                a seconda del regime e del carico. Il materiale
                è alluminio ad alta conduttività termica (lega
                2618 o 4032 nei motori da competizione) per
                trasferire il calore verso l'acqua il più rapidamente
                possibile. La candela è il sensore termico più
                diretto di questa zona: il colore dell'elettrodo
                — da grigio chiaro (corretta) a bianco (troppo
                magra/calda) a nero (troppo ricca/fredda) — è
                la lettura termica più immediata che un meccanico
                di 2T ha a disposizione senza strumenti.
              </p>
            </div>

            <div className="termicoCard">
              <div className="termicoCardTop">
                <span className="termicoBadge badgeRecord">Record</span>
                <span className="termicoSub">Pistone</span>
              </div>
              <h4>250 – 320 °C alla calotta — il componente più stressato termicamente</h4>
              <p>
                Il pistone è il componente più termicamente stressato
                dell'intero motore: riceve il calore diretto della
                combustione sulla calotta e deve trasferirlo
                alle pareti del cilindro attraverso le fasce
                elastiche — senza olio in pressione che lo raffreddi
                dall'interno come nei 4T. La temperatura alla
                calotta raggiunge 250 – 320 °C a regime pieno.
                La fascia superiore opera a 180 – 230 °C. Le gonne
                laterali — che scorrono sulle pareti del cilindro —
                sono a 120 – 160 °C. Il gioco pistone-cilindro
                (tipicamente 0,05 – 0,10 mm a freddo) si azzera
                quasi completamente a temperatura di esercizio:
                il pistone si espande fino a riempire il cilindro
                con un gioco residuo di soli 0,01 – 0,03 mm.
              </p>
            </div>

            <div className="termicoCard">
              <div className="termicoCardTop">
                <span className="termicoBadge badgeDefinizione">Definizione</span>
                <span className="termicoSub">Carter e miscela</span>
              </div>
              <h4>40 – 60 °C nel carter — il raffreddamento interno del 2T</h4>
              <p>
                Nel motore a 2 tempi il carter non è solo il
                contenitore degli organi meccanici — è anche
                il primo stadio del sistema di aspirazione.
                La miscela benzina-olio aspirata attraverso
                il carburatore entra nel carter a temperatura
                ambiente, si comprime leggermente nel carter
                prima di essere spinta nel cilindro e nel
                farlo raffredda le pareti interne e i cuscinetti
                di banco. Questo "raffreddamento a miscela"
                è il motivo per cui i cuscinetti di banco
                del 2T non necessitano di olio in pressione
                separato — la miscela li lubrifica e raffredda
                continuamente. La temperatura nel carter rimane
                tra 40 e 60 °C anche a piena potenza.
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
            <span className="captionTag">Fasi operative</span>
            <p>
              Il ciclo termico di un motore a 2 tempi si divide
              in tre fasi ben distinte: il riscaldamento iniziale
              (warm-up), il regime termico stabile (finestra
              ottimale) e il surriscaldamento (zona di rischio).
              Ognuna di queste fasi ha caratteristiche precise
              che si manifestano nel comportamento del motore
              — nella risposta alla manetta, nel suono, nel
              consumo di carburante e nelle emissioni dallo scarico.
              Riconoscere in quale fase si trova il motore
              durante la guida è un'abilità fondamentale per
              preservare la meccanica e ottimizzare le prestazioni.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — grafico temperatura acqua vs tempo dal freddo: warm-up, finestra ottimale, surriscaldamento</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── FASI BLOCK ───────────────────────────────────────────────────── */}
        <motion.div
          className="fasiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="fasiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Le tre fasi termiche</span>
            <h3>Warm-up, finestra ottimale e surriscaldamento — riconoscerle per gestirle</h3>
            <p>
              Ogni sessione di guida attraversa queste tre fasi
              in sequenza. Il modo in cui si gestisce il warm-up
              determina la durata del motore. Il modo in cui
              si riconosce il surriscaldamento determina se
              si torna a casa con il motore integro o con il
              pistone grippato.
            </p>
          </motion.div>

          <motion.div className="fasiGrid" variants={cardVariants}>

            <div className="fasiCard">
              <div className="fasiVisual fasiWarm">
                <span className="fasiLabel">Fase 1</span>
                <span className="fasiTemp">Freddo → 55 °C</span>
              </div>
              <h4>Warm-up — il periodo più critico per la meccanica</h4>
              <p>
                Il riscaldamento è la fase più pericolosa per
                un motore a 2 tempi. A freddo il gioco
                pistone-cilindro è massimo — il pistone è
                ancora piccolo rispetto al cilindro — e la
                miscela entra nel cilindro a temperatura
                ambiente senza vaporizzarsi correttamente.
                Il risultato è una combustione imperfetta
                con maggiori depositi di carbonio. Il warm-up
                corretto dura 3 – 5 minuti a regime medio-basso
                (2.000 – 4.000 rpm), senza mai aprire a fondo
                il gas prima che la temperatura acqua superi
                50 °C. Girare a piena potenza con il motore
                freddo è la causa numero uno di grippaggio
                prematuro del pistone.
              </p>
            </div>

            <div className="fasiCard">
              <div className="fasiVisual fasiOttimale">
                <span className="fasiLabel">Fase 2</span>
                <span className="fasiTemp">55 – 80 °C</span>
              </div>
              <h4>Finestra ottimale — il motore lavora come è stato progettato</h4>
              <p>
                Dentro la finestra termica ottimale tutte le
                tolleranze costruttive sono rispettate. Il gioco
                pistone-cilindro è quello di progetto: il pistone
                scorre con la pressione laterale corretta sulle
                pareti, le fasce elastiche sigillano la camera
                di combustione nella misura calcolata, i cuscinetti
                di banco lavorano con il gioco di olio previsto.
                Il carburante si vaporizza correttamente nella
                camera, la combustione è completa e pulita.
                Il rendimento termodinamico è al massimo. Il motore
                risponde in modo preciso e prevedibile alla manetta.
                È la fase in cui si va forte — ed è la fase che
                si deve mantenere il più a lungo possibile.
              </p>
            </div>

            <div className="fasiCard">
              <div className="fasiVisual fasiSurri">
                <span className="fasiLabel">Fase 3</span>
                <span className="fasiTemp">&gt; 90 °C</span>
              </div>
              <h4>Surriscaldamento — i segnali da riconoscere prima del danno</h4>
              <p>
                Il surriscaldamento del 2T si manifesta con segnali
                progressivi: prima una perdita di potenza percettibile
                (il pistone che si espande oltre il gioco di progetto
                aumenta l'attrito); poi un suono diverso del motore,
                più "duro" e metallico; poi fumo bianco-azzurrognolo
                dallo scarico (olio che brucia); infine il grippaggio —
                il pistone si blocca letteralmente nel cilindro
                per la scomparsa del gioco. Le cause più comuni
                di surriscaldamento: radiatore otturato di fango,
                miscela troppo magra (carburazione errata), candela
                troppo calda, anticipo accensione eccessivo,
                mancanza di olio nella miscela, utilizzo a bassa
                velocità in condizioni di caldo estremo.
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
              <span className="placeholderText">Immagine / GIF — pistone grippato vs pistone sano: confronto superficie gonne laterali</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Gioco termico</span>
            <p>
              Il grippaggio del pistone lascia tracce inconfondibili:
              le gonne laterali mostrano righe verticali profonde
              dove l'alluminio del pistone ha trascinato il
              materiale del cilindro (o viceversa) per l'assenza
              di gioco e di film lubrificante. Un grippaggio
              leggero (micro-grippaggio) può spesso essere
              rettificato con una revisione del cilindro e la
              sostituzione del pistone. Un grippaggio grave
              distrugge pistone, fasce, cilindro e spesso
              anche la biella e i cuscinetti di banco.
              La prevenzione costa 5 minuti di warm-up corretto
              e il controllo periodico del liquido di raffreddamento.
              La riparazione costa centinaia di euro e settimane
              di moto ferma.
            </p>
          </div>
        </motion.div>

        {/* ── GRANDEZZE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="grandezzeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="grandezzeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Glossario e numeri</span>
            <h3>Formule, fatti e record — i numeri che devi conoscere sulla termica del 2T</h3>
            <p>
              Il calore nel motore non è un nemico — è una risorsa
              da gestire. Questi sono i dati fisici che trasformano
              la sensazione di "motore caldo" in numeri precisi,
              misurabili e confrontabili.
            </p>
          </motion.div>

          <motion.div className="grandezzeGrid" variants={cardVariants}>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>Dilatazione termica: ΔL = L₀ × α × ΔT — il gioco che scompare</h4>
              <p>
                La dilatazione termica lineare è ΔL = L₀ × α × ΔT,
                dove L₀ è la dimensione a freddo, α è il coefficiente
                di dilatazione lineare del materiale e ΔT è la
                variazione di temperatura. Per l'alluminio α = 23 ×
                10⁻⁶ /°C. Un pistone con diametro L₀ = 54 mm che
                si scalda da 20 °C a 280 °C (ΔT = 260 °C) si dilata
                di ΔL = 54 × 23 × 10⁻⁶ × 260 = 0,322 mm. Il gioco
                a freddo di 0,07 mm diventa 0,07 – 0,32 = −0,25 mm
                se non fosse che il cilindro si dilata anch'esso
                (ma meno, essendo a temperatura inferiore), portando
                il gioco finale a circa 0,02 – 0,04 mm. Ogni decimo
                di millimetro di gioco errato si paga con grippaggio
                o consumo anomalo.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeDefinizione">Definizione</span>
              <h4>Numero di calore della candela — hot vs cold plug</h4>
              <p>
                Il numero di calore della candela (heat range) indica
                la capacità della candela di dissipare il calore
                assorbito dalla combustione verso la testa cilindro.
                Una candela "fredda" (numero alto: NGK 9, 10, 11)
                trasferisce il calore velocemente ed è adatta a
                motori ad alto regime e alta temperatura. Una candela
                "calda" (numero basso: NGK 6, 7) trattiene più calore
                nell'elettrodo — adatta a motori che faticano
                a raggiungere la temperatura di autopulizia
                (450 – 500 °C). Nel 2T da cross si usano tipicamente
                candele NGK B8ES o B9ES — la scelta dipende dalla
                carburazione, dalla quota e dalla stagione.
                Una candela troppo calda causa pre-accensione;
                una troppo fredda si sporca di carbonio.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>Temperatura e carburazione: −3% di densità aria ogni +10 °C</h4>
              <p>
                L'aria calda è meno densa dell'aria fredda — contiene
                meno ossigeno per unità di volume. Per la legge dei
                gas ideali PV = nRT, a pressione costante la densità
                diminuisce con la temperatura: un aumento di 10 °C
                riduce la densità dell'aria di circa il 3,4%.
                Un carburatore calibrato per 10 °C sarà troppo
                ricco a 30 °C (l'aria è meno densa, la miscela
                relativa è più ricca). Praticamente: in estate
                si monta un getto principale più piccolo di 2 – 5
                numeri rispetto all'inverno. Con iniezione
                diretta (TPI) la gestione è automatica — il sistema
                compensa in tempo reale. Con il carburatore
                la calibrazione stagionale è responsabilità del pilota.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>Antigelo e temperatura di ebollizione: +30 °C con la miscela corretta</h4>
              <p>
                L'acqua pura bolle a 100 °C a pressione atmosferica.
                Il liquido di raffreddamento con 40% di glicole
                etilenico (miscela standard) aumenta il punto
                di ebollizione a circa 107 °C. Ma il circuito
                di raffreddamento è in pressione: il tappo
                del radiatore standard è tarato a 1,1 – 1,4 bar,
                il che porta il punto di ebollizione effettivo
                a circa 120 – 130 °C. Questo margine è fondamentale
                nelle sessioni intense in climi caldi: senza pressione
                il circuito bollirebbe già a 100 °C, con pressione
                e antigelo corretto si arriva a 130 °C prima del
                collasso termico. Il tappo del radiatore è un
                componente di sicurezza — va verificato ogni stagione.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>Calore specifico e scambio termico: Q = m × c × ΔT</h4>
              <p>
                Il calore scambiato dal liquido di raffreddamento
                è Q = m × c × ΔT, dove m è la massa del liquido,
                c il calore specifico (4.186 J/kg·°C per l'acqua
                pura, ~3.600 J/kg·°C con antigelo al 40%) e ΔT
                la variazione di temperatura. Con un circuito
                da 0,8 litri (massa ≈ 0,8 kg) e un ΔT di 30 °C
                tra ingresso e uscita radiatore, il calore estratto
                per ciclo di circolazione è Q = 0,8 × 3.600 × 30
                = 86.400 J = 86,4 kJ. A una portata di pompa
                tipica di 15 litri/min, il radiatore estrae circa
                27 kW di potenza termica — più della metà della
                potenza meccanica prodotta dal motore. Questo spiega
                perché un radiatore intasato causa surriscaldamento
                in pochi minuti.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeRecord">Record</span>
              <h4>Temperatura picco combustione 2T: oltre 2.000 °C in meno di 1 ms</h4>
              <p>
                La temperatura di picco all'interno della camera
                di combustione durante la deflagrazione del carburante
                supera i 2.000 °C — in alcuni motori da competizione
                ottimizzati si stimano picchi di 2.200 – 2.400 °C.
                Queste temperature durano meno di 1 millisecondo
                (la durata della combustione a 12.000 rpm è circa
                0,6 – 0,8 ms) — abbastanza da trasferire calore
                significativo al pistone e alla testa, non abbastanza
                da fondere i materiali. La candela in quel momento
                è esposta a temperature della stessa scala dei
                materiali refrattari industriali. Il fatto che
                un motore 2T da 50 CV a 12.000 rpm sopravviva
                a questi cicli per ore è uno dei risultati
                più straordinari dell'ingegneria meccanica applicata.
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
            <span className="cardTag">Warm-up corretto</span>
            <h3>La procedura di riscaldamento — 5 minuti che valgono anni di vita al motore</h3>
            <p>
              La procedura corretta per riscaldare un 2T è semplice
              ma richiede disciplina. Avviare il motore a freddo
              con lo starter (choke) inserito se la temperatura
              è sotto 15 °C. Tenere il motore a 2.000 – 3.000 rpm
              per 2 minuti — si sente il regime stabilizzarsi quando
              il motore si scalda. Togliere lo starter e continuare
              a 3.000 – 4.000 rpm per altri 2 – 3 minuti. Aspettare
              che la temperatura acqua superi 50 °C (o che il motore
              risponda in modo fluido e stabile alla manetta) prima
              di usarlo a pieno carico. Non accelerare bruscamente
              mai nelle prime fasi — la miscela non si vaporizza
              correttamente e deposita carbonio sulle porte.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Prevenire il surriscaldamento</span>
            <h3>Radiatore, miscela e carburazione — i tre controlli stagionali indispensabili</h3>
            <p>
              La prevenzione del surriscaldamento si basa su tre
              controlli da fare all'inizio di ogni stagione e
              dopo ogni uso intenso in condizioni estreme. Primo:
              il radiatore — verificare che le alette siano pulite
              e non deformate; anche il 20% di ostruzione riduce
              l'efficienza del 30 – 40%. Secondo: il liquido
              di raffreddamento — sostituirlo ogni 2 anni o ogni
              100 ore; il glicole si degrada e perde la capacità
              anticorrosione prima di perdere quella antigelo.
              Terzo: la carburazione — una miscela troppo magra
              brucia più caldo di una corretta; se la candela
              è bianca il motore è a rischio termico immediato.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Temperatura e prestazioni</span>
            <h3>Come la temperatura ottimale massimizza la potenza — non solo la sopravvivenza</h3>
            <p>
              La finestra termica ottimale non serve solo a
              proteggere il motore — serve anche a massimizzarne
              le prestazioni. Dentro la finestra il gioco
              pistone-cilindro è quello di progetto: minimo
              attrito, massima tenuta delle fasce, massima
              compressione nel cilindro. La carburazione funziona
              come calibrata: la temperatura dell'aria aspirata
              è stabile, la vaporizzazione della benzina è completa,
              la combustione è ottimale. La struttura metallica
              del motore ha la rigidità di progetto: i cuscinetti
              hanno il gioco corretto, l'albero motore ruota
              nelle condizioni di equilibrio dinamico previste.
              Un motore in temperatura ottimale fa più potenza,
              consuma meno, dura di più — simultaneamente.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default TemperaturaOttimale;
