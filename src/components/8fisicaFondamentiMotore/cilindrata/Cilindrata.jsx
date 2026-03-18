import "./cilindrata.scss";
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

const Cilindrata = () => {
  return (
    <section className="cilindrata" id="cilindrata">
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
              Fisica — 8.3
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Cilindrata: il volume che decide tutto
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La cilindrata è il numero più citato quando si parla
              di motori — ma pochissimi sanno cosa misuri davvero
              e perché conti così tanto. Non è la dimensione fisica
              del motore. Non è il peso. Non è la complessità.
              È semplicemente il volume spazzato dal pistone in un
              ciclo completo — il volume dentro cui avviene la
              combustione. Quel numero, combinato con la frequenza
              di combustione e l'efficienza termodinamica, determina
              quanta energia il motore può estrarre dal carburante
              in ogni secondo di funzionamento.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Nel motore a 2 tempi la cilindrata è ancora più
              determinante che nel 4 tempi perché ogni centimetro
              cubo lavora due volte tanto: brucia carburante a ogni
              giro dell'albero, non uno su due. Ecco perché il
              regolamento sportivo assegna ai 2 tempi metà
              cilindrata rispetto ai 4 tempi nella stessa categoria —
              il fattore di equivalenza 1:2 riconosce fisicamente
              questa differenza. Capire la cilindrata significa
              capire perché un KTM 125 SX può tenere il passo
              di un 4 tempi da 250cc.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Quattro concetti fondamentali</span>
              <h3>Definizione, formula, classi e fattore 2T</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Definizione — volume spazzato dal pistone dalla PMI alla PMS moltiplicato per il numero di cilindri</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Formula — V = (π / 4) × D² × C dove D è l'alesaggio e C è la corsa, entrambi in millimetri</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Classi racing — 50cc, 80cc, 125cc, 250cc, 500cc: ogni classe ha il suo equilibrio tra potenza e guidabilità</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Fattore 2T — 125cc 2T = 250cc 4T; 250cc 2T = 500cc 4T per il doppio della frequenza di combustione</span>
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
              <span className="placeholderText">Immagine / GIF — schema sezione cilindro con alesaggio D e corsa C evidenziati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">V = π/4 × D² × C</span>
            <p>
              La formula della cilindrata nasce dalla geometria
              di un cilindro. Il pistone si muove da PMI (Punto
              Morto Inferiore) a PMS (Punto Morto Superiore) su
              una corsa C millimetri. Il cilindro ha un diametro D
              (alesaggio). Il volume spazzato è esattamente quello
              di un cilindro geometrico: π/4 × D² × C. Per un 125cc
              con alesaggio 54 mm e corsa 54,5 mm:
              V = 0,7854 × 54² × 54,5 = 0,7854 × 2.916 × 54,5
              = 124,8 cc. I costruttori scelgono alesaggio e corsa
              con precisione al decimo di millimetro per restare
              dentro la cilindrata massima di classe sfruttando
              ogni centimetro cubo disponibile.
            </p>
          </div>
        </motion.div>

        {/* ── GEOMETRIA BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="geometriaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="geometriaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">La geometria del cilindro</span>
            <h3>Alesaggio, corsa e il loro rapporto — la scelta che definisce il carattere del motore</h3>
            <p>
              La cilindrata totale è fissa dalla categoria di gara,
              ma il modo in cui si ottiene — con un alesaggio grande
              e corsa corta, oppure con alesaggio piccolo e corsa
              lunga — cambia radicalmente il carattere di erogazione
              del motore. Non è un dettaglio costruttivo: è una
              scelta filosofica sul tipo di motore che si vuole.
            </p>
          </motion.div>

          <motion.div className="geometriaGrid" variants={cardVariants}>

            <div className="geometriaCard">
              <div className="geometriaCardTop">
                <span className="geometriaBadge badgeFormula">Formula</span>
                <span className="geometriaSub">Cilindrata</span>
              </div>
              <h4>V = (π / 4) × D² × C — la geometria che determina tutto</h4>
              <p>
                La cilindrata unitaria si calcola con la formula
                del volume di un cilindro: V [cc] = (π / 4) × D²
                [mm²] × C [mm] / 1000. Il fattore π/4 = 0,7854
                è la costante geometrica del cerchio. Il risultato
                è in mm³ e va diviso per 1.000 per ottenere i cm³
                (cc). Per cilindri multipli si moltiplica per il
                numero di cilindri. La cilindrata totale è il
                parametro che definisce la classe di appartenenza
                nel regolamento FIM e nei libretti di circolazione —
                è un dato geometrico puro, indipendente dalla potenza,
                dalla coppia e dal rendimento del motore.
              </p>
            </div>

            <div className="geometriaCard">
              <div className="geometriaCardTop">
                <span className="geometriaBadge badgeDefinizione">Definizione</span>
                <span className="geometriaSub">Alesaggio (D)</span>
              </div>
              <h4>Alesaggio — il diametro interno del cilindro in millimetri</h4>
              <p>
                L'alesaggio (bore in inglese) è il diametro interno
                del cilindro, misurato tra le pareti opposte nella
                zona di lavoro del pistone. Nei motori a 2 tempi
                l'alesaggio è anche il parametro che determina
                la dimensione delle porte di travaso e di scarico —
                porte più grandi (alesaggio maggiore) permettono
                portate di gas superiori e supportano regimi più
                alti. Un alesaggio grande (motore "oversquare", D > C)
                permette regimi elevati e potenza di picco alta.
                Un alesaggio piccolo limita la portata di gas ma
                aumenta la pressione specifica — favorisce la coppia
                ai medi regimi. Nei 125cc da cross gli alesaggi
                tipici sono 54 – 56 mm.
              </p>
            </div>

            <div className="geometriaCard">
              <div className="geometriaCardTop">
                <span className="geometriaBadge badgeDefinizione">Definizione</span>
                <span className="geometriaSub">Corsa (C)</span>
              </div>
              <h4>Corsa — la distanza percorsa dal pistone tra PMS e PMI</h4>
              <p>
                La corsa (stroke in inglese) è la distanza percorsa
                dal pistone dalla Posizione di Punto Morto Superiore
                (PMS, massima compressione) alla Posizione di Punto
                Morto Inferiore (PMI, massima espansione). È uguale
                al doppio del raggio di manovella dell'albero motore.
                Una corsa lunga (motore "undersquare", C > D) genera
                un braccio di manovella lungo — più coppia per la
                stessa pressione nel cilindro — ma limita il regime
                massimo per ragioni di velocità lineare del pistone
                (vmax = 2 × C × n / 60). Nei 125cc da cross le corse
                tipiche sono 54 – 56 mm, quasi sempre uguali o
                molto vicine all'alesaggio.
              </p>
            </div>

            <div className="geometriaCard">
              <div className="geometriaCardTop">
                <span className="geometriaBadge badgeFatto">Fatto</span>
                <span className="geometriaSub">Rapporto A/C</span>
              </div>
              <h4>Oversquare vs undersquare — come il rapporto D/C plasma il carattere</h4>
              <p>
                Il rapporto tra alesaggio e corsa (D/C) è uno degli
                indici più rivelatori del carattere di un motore.
                Se D/C &gt; 1 il motore è "oversquare" (corsa corta,
                alesaggio largo): favorisce regimi alti, potenza di
                picco elevata, banda stretta — tipico dei 125cc GP
                anni '90 con rapporti D/C di 1,05 – 1,10. Se D/C &lt; 1
                il motore è "undersquare" (corsa lunga, alesaggio
                stretto): braccio di manovella lungo, più coppia ai
                bassi, banda più larga — scelto per i motori da
                enduro e trail. Se D/C = 1 il motore è "quadro":
                è il compromesso più comune nei 125cc da cross
                moderni, che bilanciano potenza assoluta e guidabilità.
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
            <span className="captionTag">Classi e cilindrate</span>
            <p>
              Il regolamento FIM per le competizioni off-road
              e su pista ha sempre strutturato le categorie attorno
              a cilindrate precise — 50cc, 80cc, 125cc, 250cc, 500cc —
              perché la cilindrata è l'unico parametro costruttivo
              oggettivo e verificabile senza smontare il motore.
              La scelta di usare la cilindrata come discriminante
              nasce da una logica tecnica: a parità di tecnologia
              e bravura del costruttore, cilindrate uguali producono
              potenze comparabili. Il fattore di equivalenza 1:2
              tra 2T e 4T fu introdotto proprio quando i 4T
              iniziarono a competere nelle stesse categorie — senza
              quella correzione i 2T avrebbero dominato in modo
              insostenibile per anni ancora.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — confronto dimensioni fisiche di un cilindro 50cc, 125cc e 250cc 2T in scala</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── CLASSI BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="classiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="classiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Le classi del 2T</span>
            <h3>50cc, 125cc, 250cc, 500cc — quattro cilindrate, quattro mondi diversi</h3>
            <p>
              Ogni cilindrata ha un carattere preciso, un tipo di
              pilota ideale e una storia tecnica propria. Non sono
              semplicemente "più grande = più potente" — ogni
              categoria ha sviluppato soluzioni uniche per massimizzare
              le prestazioni entro quel volume specifico.
            </p>
          </motion.div>

          <motion.div className="classiGrid" variants={cardVariants}>

            <div className="classiCard classi50">
              <div className="classiCardTop">
                <span className="classiBadge badge50">50cc</span>
                <span className="classiTag">Miniclass / Bambini</span>
              </div>
              <h4>50cc — la classe di accesso con la potenza specifica più alta al mondo</h4>
              <p>
                Il 50cc è la classe di ingresso per bambini dagli
                8 anni in su — ma nasconde una tecnologia brutale.
                Il KTM 50 SX eroga circa 10 CV su 49,9cc: 200 CV
                per litro di cilindrata, più di qualsiasi moto
                sportiva stradale da 1.000cc. L'alesaggio è circa
                40 mm, la corsa 39,5 mm. La potenza arriva tutta
                tra 9.000 e 12.000 rpm. Non c'è nessun margine
                di errore — fuori da quella banda il motore non
                esiste. I bambini che crescono su questi motori
                sviluppano un senso del regime e del cambio che
                nessun altro tipo di moto può insegnare.
              </p>
            </div>

            <div className="classiCard classi125">
              <div className="classiCardTop">
                <span className="classiBadge badge125">125cc</span>
                <span className="classiTag">MX2 / GP Classe 125</span>
              </div>
              <h4>125cc — il pinnacolo della tecnologia 2T, la classe più tecnica</h4>
              <p>
                Il 125cc è la cilindrata attorno a cui si è sviluppata
                tutta la tecnologia 2T da racing. Alesaggio 54 mm,
                corsa 54 mm — un cilindro quasi perfettamente quadro.
                Nei motori da GP degli anni '90 (Honda RS125R, Aprilia
                RSA 125, Yamaha TZ125) si arrivava a 50 – 55 CV a
                12.000 – 13.000 rpm: 400 – 440 CV/litro. Il tempo
                di apertura della porta di scarico era calcolato al
                decimo di grado. La curva di potenza era una spiga —
                3.000 rpm di banda utile, poi il crollo. Ancora oggi
                il KTM 125 SX è il riferimento tecnico per la classe
                in ambito cross.
              </p>
            </div>

            <div className="classiCard classi250">
              <div className="classiCardTop">
                <span className="classiBadge badge250">250cc</span>
                <span className="classiTag">MX1 / GP Classe 250</span>
              </div>
              <h4>250cc — doppia cilindrata, doppia coppia, stessa filosofia</h4>
              <p>
                Il 250cc 2T è il diretto equivalente del 500cc 4T —
                e fino agli anni 2000 era la moto più potente nel
                motocross open. Alesaggi tipici: 66 – 72 mm, corse
                60 – 64 mm (leggermente oversquare). Potenza tipica
                dei motori da cross moderni: 45 – 55 CV a 8.000 –
                9.500 rpm, con coppia più consistente ai bassi rispetto
                al 125. La banda di potenza è più larga — 5.000 –
                6.000 rpm di utilizzo — e il motore è più accessibile
                per i piloti amatori. I costruttori che producono
                ancora il 250cc 2T (KTM, Husqvarna, Beta, GASGAS)
                lo considerano tecnicamente superiore al 250cc 4T
                per il fuoristrada puro per via del peso inferiore.
              </p>
            </div>

            <div className="classiCard classi500">
              <div className="classiCardTop">
                <span className="classiBadge badge500">500cc</span>
                <span className="classiTag">Open / GP storico</span>
              </div>
              <h4>500cc — il mostro della storia, troppa potenza per la fisica</h4>
              <p>
                Il 500cc 2T da GP (classe 500 GP, poi diventata
                MotoGP nel 2002) era una macchina ai limiti della
                fisica: 180 – 200 CV su 500cc, oltre 300 CV/litro,
                con una coppia che arrivava come un muro a 7.000 rpm
                e catapultava il pilota in avanti. Gli alesaggi dei
                4 cilindri erano circa 56 mm, le corse 50 mm —
                corsa corta, regime alto. Il controllo della trazione
                era inesistente: tutto dipendeva dal polso del pilota.
                Valentino Rossi, Mick Doohan, Eddie Lawson —
                i campioni del 500cc 2T sono considerati i piloti
                tecnici più completi della storia del motociclismo.
                La classe fu soppressa dal 2002 proprio perché la
                potenza aveva superato i limiti gestibili in sicurezza.
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
              <span className="placeholderText">Immagine / GIF — curva di potenza sovrapposta 50cc / 125cc / 250cc 2T in scala</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Scala e potenza</span>
            <p>
              Confrontando le curve di potenza specifica (CV/litro)
              delle diverse classi emerge una tendenza chiara: le
              cilindrate più piccole raggiungono potenze specifiche
              più alte perché possono girare a regimi superiori —
              la velocità lineare del pistone rimane nella finestra
              accettabile (sotto i 20 – 22 m/s) anche con corse
              più corte in proporzione all'alesaggio. Il 50cc gira
              a 12.000 rpm senza problemi con una corsa di 39 mm;
              un 500cc con la stessa velocità lineare del pistone
              potrebbe girare al massimo a 7.000 rpm. Regime alto
              + combustioni frequenti = potenza specifica alta —
              la ragione fisica per cui il 50cc batte il 1.000cc
              stradale in termini di CV/litro.
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
            <h3>Formule, fatti e record — i numeri che devi conoscere sulla cilindrata del 2T</h3>
            <p>
              Dietro ogni numero di cilindrata c'è una geometria
              precisa, una scelta ingegneristica consapevole e
              una storia sportiva. Questi sono i concetti e i dati
              che trasformano un numero su una carta di circolazione
              in una comprensione reale del motore che stai guidando.
            </p>
          </motion.div>

          <motion.div className="grandezzeGrid" variants={cardVariants}>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>Rapporto di compressione: Rc = (V_c + V_camera) / V_camera</h4>
              <p>
                Il rapporto di compressione geometrico lega la
                cilindrata alla camera di combustione: Rc = (V_c +
                V_camera) / V_camera, dove V_c è la cilindrata
                unitaria e V_camera è il volume della camera
                di combustione a pistone in PMS. Nei motori 2T
                da competizione il rapporto di compressione è
                tipicamente 13 – 16:1 — più alto dei 4T stradali
                (10 – 12:1) perché la miscela è già parzialmente
                compressa dal carter prima di entrare nel cilindro.
                Un Rc maggiore aumenta la temperatura di combustione
                e il rendimento termodinamico, ma richiede carburante
                ad alto numero di ottani per evitare la detonazione.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeDefinizione">Definizione</span>
              <h4>Velocità lineare del pistone: v_p = 2 × C × n / 60</h4>
              <p>
                La velocità lineare media del pistone (v_p) è
                il limite fisico che determina il regime massimo
                ammissibile per un dato motore: v_p [m/s] = 2 × C
                [m] × n [rpm] / 60. Con C = 54 mm e n = 12.000 rpm
                si ottiene v_p = 2 × 0,054 × 12.000 / 60 = 21,6 m/s.
                Il limite pratico per motori a 2 tempi ad alte
                prestazioni è 18 – 22 m/s — sopra questo valore
                le forze d'inerzia sul pistone e sulla biella
                superano la resistenza dei materiali disponibili.
                Diminuire la corsa (motore oversquare) è l'unico
                modo per aumentare il regime senza superare il
                limite di velocità lineare.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>Fattore di equivalenza 1:2 — la fisica dietro al regolamento FIM</h4>
              <p>
                Il fattore di equivalenza 1:2 tra 2T e 4T non è
                una convenzione arbitraria — è una stima ingegneristica
                ragionevole della differenza di potenza specifica
                tra i due cicli termodinamici. Il 2T ha il doppio
                delle combustioni per giro a parità di regime e
                cilindrata, il che si traduce in una potenza specifica
                circa doppia (con pari tecnologia e ottimizzazione).
                In pratica la differenza effettiva dipende dalla
                categoria — nei GP il 125 2T era tecnicamente
                superiore al 250 4T equivalente per potenza assoluta,
                mentre nel cross moderno il 250 4T ha recuperato
                terreno grazie all'elettronica di gestione della
                potenza. Il fattore 1:2 rimane però la base
                del regolamento FIM Cross e Trial.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFatto">Fatto</span>
              <h4>Overbore e stroker kit — come si modifica la cilindrata</h4>
              <p>
                La cilindrata si può aumentare in due modi: rettificando
                il cilindro a un diametro maggiore e montando un
                pistone oversize (overbore) — ad esempio portare
                un 125cc da 54 mm a 55 mm di alesaggio aumenta
                la cilindrata del 3,7% a circa 129,5cc. Oppure
                sostituendo l'albero motore con uno a corsa maggiore
                (stroker kit) — passare da 54 mm a 57 mm di corsa
                porta la cilindrata a 131,5cc. Le due modifiche
                cambiano il carattere del motore: l'overbore sposta
                il comportamento verso l'oversquare (regime alto),
                lo stroker verso l'undersquare (più coppia ai medi).
                Entrambe le modifiche rendono la moto fuori classe
                nei regolamenti FIM standard — valgono solo per
                categorie open o uso privato.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeFormula">Formula</span>
              <h4>PME e cilindrata — la pressione media effettiva come benchmark</h4>
              <p>
                La Pressione Media Effettiva (PME) è indipendente
                dalla cilindrata — è il parametro che misura quanto
                bene il motore sfrutta ogni cm³ disponibile: PME
                [bar] = P [kW] × 60 / (V_c [litri] × n [rpm])
                per il 2T (un ciclo ogni giro). Un 125cc 2T da GP
                con 40 kW (54 CV) a 12.000 rpm ha PME = 40 × 60 /
                (0,000125 × 12.000) = 2.400 / 1,5 = 1.600 kPa = 16 bar.
                Un 4T stradale da 1.000cc con 100 kW a 10.000 rpm
                ha PME = 100 × 120 / (0,001 × 10.000) = 1.200 kPa
                = 12 bar. Il 125cc 2T utilizza ogni cm³ meglio del 4T
                di 33 volte più grande — in termini di PME, non di
                potenza assoluta.
              </p>
            </div>

            <div className="grandezzeCard">
              <span className="grandezzeBadge badgeRecord">Record</span>
              <h4>Il motore 2T più piccolo con omologazione stradale: 49,9cc</h4>
              <p>
                Il limite regolamentare europeo per la patente AM
                (ciclomotori) è 50cc — quindi il limite pratico
                di cilindrata dichiarata è 49,9cc. Entro questo
                vincolo i costruttori hanno sviluppato motori con
                alesaggi di 39 – 40,3 mm e corse di 39,2 – 39,5 mm.
                Il KTM 50 SX, non omologato strada ma con cilindrata
                identica, raggiunge circa 10 CV — 200 CV/litro da
                un motore destinato a bambini di 8 anni. L'unico
                motore termico di produzione con potenza specifica
                superiore è il Kawasaki H2R (326 CV/litro), ma è
                un supersport con compressore volumetrico e costa
                55 volte di più. Il 50cc 2T da cross rimane uno
                dei rapporti valore/prestazione più estremi
                dell'ingegneria motoristica mondiale.
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
            <span className="cardTag">Scegliere la cilindrata</span>
            <h3>Quale cilindrata fa per te — la guida pratica per scegliere il motore giusto</h3>
            <p>
              La cilindrata giusta non è quella più grande disponibile —
              è quella che corrisponde al tuo livello tecnico e
              all'utilizzo che ne fai. Un principiante su un 125cc
              2T da cross farà meno paura a se stesso di uno su
              un 250cc 2T, ma dovrà imparare a gestire la banda
              stretta del 125. Un pilota esperto che corre in
              categorie amatoriali troverà il 125 più tecnico
              e gratificante ma più difficile da far rendere al
              massimo. La regola pratica è: più sei esperto,
              più piccola puoi permetterti di guidare — e più
              piccola la guidi, più impari. I professionisti
              iniziano tutti dal 50cc e salgono un passo alla volta.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Cilindrata e manutenzione</span>
            <h3>Come la cilindrata influenza i cicli di manutenzione del motore</h3>
            <p>
              Cilindrate più piccole girano a regimi più alti e
              con pressioni specifiche più elevate — si consumano
              più in fretta. Un pistone da 50cc va sostituito ogni
              15 – 20 ore di utilizzo agonistico. Un 125cc da cross
              ogni 20 – 30 ore. Un 250cc ogni 40 – 60 ore. Questa
              non è una debolezza del 2T — è la conseguenza diretta
              della potenza specifica: più lavoro per cm³ significa
              più usura per cm³. I piloti professionisti portano
              pistoni di ricambio all'evento, non in officina.
              La cilindrata più grande ha intervalli di manutenzione
              più lunghi, ma le riparazioni quando arrivano sono
              fisicamente più grandi (e costano di più): biella,
              cuscinetti, rettifica cilindro — tutto in scala.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Futuro della cilindrata</span>
            <h3>Il 2T a iniezione diretta — come la tecnologia moderne rivitalizza le piccole cilindrate</h3>
            <p>
              Le normative Euro 5 hanno praticamente eliminato il
              2T a carburatore dall'omologazione stradale europea —
              le emissioni di idrocarburi incombusti erano troppo
              alte. Ma la risposta tecnica esiste: il 2T a iniezione
              diretta (TPI su KTM/Husqvarna, INJECTIE su Beta)
              inietta il carburante direttamente nel cilindro dopo
              la chiusura della porta di scarico, eliminando la
              perdita di miscela fresca allo scarico. Il risultato:
              emissioni ridotte del 40 – 50%, consumi in calo del
              25 – 35%, prestazioni invariate. La cilindrata rimane
              la stessa — 125cc, 250cc, 300cc — ma il motore è
              finalmente compatibile con le normative moderne.
              Il 2T non è morto: si è evoluto.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Cilindrata;
