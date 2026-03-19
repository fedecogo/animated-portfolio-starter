import "./twoStrokeVsFourStroke.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const accordionData = [
  {
    id: 1,
    title: "Frequenza del ciclo e potenza specifica",
    twoStroke:
      "Il 2T produce un evento di combustione ad ogni giro dell'albero motore. In teoria, a parità di cilindrata e regime, genera il doppio degli eventi di potenza rispetto a un 4T. Le perdite per cortocircuito dei gas riducono questo vantaggio, ma i motori 2T ben progettati erogano ancora 1,5 – 2 volte la potenza specifica di un equivalente 4T. Un 125cc 2T da cross supera spesso i 35 CV, cifra impensabile per un 125cc a 4 tempi.",
    fourStroke:
      "Il 4T produce un evento di combustione ogni due giri dell'albero. La potenza specifica è inferiore a parità di cilindrata, ma il ciclo separato delle quattro fasi permette una migliore efficienza termica e un controllo più preciso della combustione. La coppia è distribuita su un range di giri più ampio, rendendo il motore più prevedibile e facile da utilizzare a regimi variabili.",
  },
  {
    id: 2,
    title: "Distribuzione: luci vs valvole",
    twoStroke:
      "Nel 2T la distribuzione è interamente gestita dalla geometria del cilindro: le luci di aspirazione, travaso e scarico vengono aperte e chiuse dal mantello del pistone durante la corsa. Non esistono valvole tradizionali, alberi a camme o sistemi di fasatura variabile. Questo rende il motore più semplice e leggero, ma la fasatura è fissa nella geometria del cilindro e non può essere modificata durante la marcia. La valvola di scarico meccanica o elettronica è l'unica eccezione: permette di variare la fasatura della luce di scarico in funzione del regime.",
    fourStroke:
      "Il 4T distribuisce i gas attraverso valvole comandate da uno o più alberi a camme. Questa soluzione è più complessa e costosa, ma permette un controllo preciso della fasatura, della durata e del sollevamento delle valvole. I sistemi moderni di fasatura variabile (VVT, DOHC) ottimizzano le prestazioni su tutto il range di giri, ampliando la banda di coppia e migliorando l'efficienza ai bassi regimi — qualcosa che un 2T a distribuzione fissa non può fare.",
  },
  {
    id: 3,
    title: "Lubrificazione",
    twoStroke:
      "Il 2T spesso non ha un circuito d'olio separato. La lubrificazione avviene attraverso l'olio disciolto nella miscela benzina-olio, che viaggia insieme nell'impianto di alimentazione e raggiunge i componenti in movimento sotto forma di nebbia. Questo sistema è semplice ma richiede che il rapporto di miscela sia sempre corretto e che si utilizzi olio di qualità adeguata. Un errore nel rapporto di miscela — soprattutto in difetto — può portare al grippaggio in pochi minuti.",
    fourStroke:
      "Il 4T utilizza un circuito d'olio separato con pompa, filtro e coperchio valvole. L'olio circola continuamente attraverso tutte le parti in movimento, garantendo una lubrificazione uniforme indipendentemente dalla qualità del carburante e dal rapporto di miscela. Il cambio dell'olio è una manutenzione periodica semplice, ma il sistema aggiunge peso, complessità e costi costruttivi rispetto alla soluzione 2T.",
  },
  {
    id: 4,
    title: "Peso, complessità e costo",
    twoStroke:
      "L'assenza di valvole, albero a camme, distribuzione, carter dell'olio e circuito di lubrificazione rende il motore 2T strutturalmente più semplice e significativamente più leggero. Un 125cc 2T da cross pesa nell'ordine dei 22 – 28 kg completo, contro i 35 – 45 kg di un equivalente 4T. Questa riduzione di peso, distribuita in posizione centrale sulla moto, migliora la maneggevolezza e riduce il momento d'inerzia.",
    fourStroke:
      "Il motore 4T è più pesante e strutturalmente più complesso, ma questa complessità porta anche affidabilità a lungo termine su moto stradali: i componenti della distribuzione richiedono manutenzione ogni 20.000 – 40.000 km invece dei 10 – 20 ore del 2T. Il costo di produzione è più elevato, ma gli intervalli di servizio più lunghi e la maggiore durata complessiva riducono il costo di gestione nel tempo.",
  },
  {
    id: 5,
    title: "Emissioni e legislazione",
    twoStroke:
      "Il cortocircuito dei gas — parte della miscela fresca che fuoriesce dallo scarico non bruciata — è il principale responsabile delle emissioni elevate di idrocarburi incombusti (HC) del 2T. Questo ha portato all'esclusione dei motori 2T a carburatore dalle normative Euro sulle emissioni per i veicoli stradali. I nuovi 2T con iniezione diretta abbattono drasticamente le emissioni e aprono la strada all'omologazione stradale in futuro.",
    fourStroke:
      "Il 4T brucia il carburante in modo più completo grazie al ciclo separato e all'assenza di cortocircuito diretto. Le emissioni di idrocarburi incombusti sono strutturalmente inferiori, il che ha permesso al 4T di adattarsi più facilmente alle normative Euro 3, 4 e 5. L'iniezione elettronica e i catalizzatori hanno ulteriormente ridotto le emissioni, rendendo il 4T la scelta dominante per le moto stradali degli ultimi vent'anni.",
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => (
  <motion.div className={`accordionItem${isOpen ? " open" : ""}`} variants={cardVariants}>
    <button className="accordionHeader" onClick={onClick}>
      <span>{item.title}</span>
      <motion.span
        className="accordionIcon"
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.25 }}
      >
        +
      </motion.span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className="accordionContent"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="accordionInner">
            <div className="accordionSide">
              <span className="sideLabel">2 Tempi</span>
              <p>{item.twoStroke}</p>
            </div>
            <div className="accordionSide">
              <span className="sideLabel">4 Tempi</span>
              <p>{item.fourStroke}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const TwoStrokeVsFourStroke = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="twoStrokeVsFourStroke">
      <div className="wrapper">

        {/* ── INTRO BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="introBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="titleColumn">
            <motion.span className="sectionLabel" variants={fadeUpVariants}>
              1.3 — 2T vs 4T
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              2 tempi vs 4 tempi: la differenza fondamentale
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La distinzione non è solo nel numero di colpi del pistone. È una
              differenza strutturale nella logica del motore: come distribuisce
              i gas, come si lubrifica, come genera potenza e perché ha quella
              specifica personalità di guida.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Un 2T non è un 4T con meno valvole, così come un 4T non è un 2T
              con più componenti. Sono due soluzioni al medesimo problema —
              trasformare la combustione in movimento rotatorio — con filosofie
              costruttive, punti di forza e compromessi completamente diversi.
              Capire queste differenze è il modo più diretto per capire perché
              ogni moto si comporta nel modo in cui si comporta.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il confronto che segue non è pensato per decretare un vincitore.
              Entrambe le architetture hanno contesti in cui sono superiori.
              L'obiettivo è capire le ragioni tecniche che stanno dietro le
              differenze percepite in guida — la banda di potenza, il peso, la
              risposta del gas e il carattere complessivo della moto.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Confronto rapido</span>
              <h3>Le differenze strutturali in sintesi</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniLabel">Ciclo</span>
                <span className="miniValue">2T: 1 giro / 4T: 2 giri per evento di potenza</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Distribuzione</span>
                <span className="miniValue">2T: luci nel cilindro / 4T: valvole e camme</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Lubrificazione</span>
                <span className="miniValue">2T: olio in miscela / 4T: circuito separato</span>
              </div>
              <div className="miniStep">
                <span className="miniLabel">Potenza specifica</span>
                <span className="miniValue">2T superiore / 4T inferiore a parità di cc</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CICLO BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="cicloBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="cicloHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il ciclo</span>
            <h3>Due colpi contro quattro — cosa cambia davvero</h3>
            <p>
              La differenza nel numero di colpi del pistone non è solo
              quantitativa. In un 4T, ogni fase del ciclo — aspirazione,
              compressione, combustione, scarico — occupa per intero una corsa
              del pistone e ha il suo spazio dedicato. In un 2T, tutte e quattro
              le fasi avvengono in due colpi: molte di esse si sovrappongono
              temporalmente, e il cilindro non è mai completamente pulito dai
              gas combusti prima che entri la carica fresca. Questa
              sovrapposizione — chiamata incrocio o lavaggio — è il punto critico
              della progettazione di un 2T.
            </p>
          </motion.div>

          <motion.div className="cicloGrid" variants={cardVariants}>
            <div className="cicloCard">
              <span className="cicloBadge badge2T">2T — Salita</span>
              <h4>Compressione + aspirazione nel carter</h4>
              <p>
                Mentre il pistone sale verso il PMS comprimendo la carica nel
                cilindro, nel carter sottostante crea contemporaneamente la
                depressione che aspira la miscela fresca attraverso il
                carburatore e il pacco lamellare. Le due fasi avvengono in
                parallelo nello stesso colpo di pistone.
              </p>
            </div>

            <div className="cicloCard">
              <span className="cicloBadge badge2T">2T — Discesa</span>
              <h4>Combustione + travaso + scarico</h4>
              <p>
                Dopo la combustione al PMS, il pistone scende. Apre prima la
                luce di scarico, poi le luci di travaso. La miscela fresca
                compressa nel carter entra nel cilindro e spazza i gas combusti
                verso l'uscita dello scarico. Il carter viene svuotato e il
                ciclo ricomincia al giro successivo.
              </p>
            </div>

            <div className="cicloCard">
              <span className="cicloBadge badge4T">4T — Aspirazione</span>
              <h4>Fase 1 di 4: pistone scende, valvola aperta</h4>
              <p>
                La valvola di aspirazione si apre mentre il pistone scende verso
                il PMI. La depressione creata richiama la miscela aria-carburante
                dal carburatore o dall'iniettore. Solo questa fase — una corsa
                intera del pistone — è dedicata al riempimento del cilindro.
              </p>
            </div>

            <div className="cicloCard">
              <span className="cicloBadge badge4T">4T — Scarico</span>
              <h4>Fase 4 di 4: pistone sale, gas espulsi</h4>
              <p>
                La valvola di scarico si apre e il pistone risale spingendo i
                gas combusti fuori dal cilindro. Solo dopo che questa fase è
                completata il cilindro è pronto per aspirare aria fresca.
                L'intera fase di scarico occupa una corsa completa del pistone
                — nel 2T questa operazione viene eseguita in frazioni di
                millisecondi durante l'incrocio delle luci.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── COMPARISON GRID ────────────────────────────────────────────── */}
        <motion.div
          className="comparisonGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article className="engineCard" variants={cardVariants}>
            <span className="engineTag">2 Tempi</span>
            <h3>Immediato, leggero, essenziale</h3>
            <ul>
              <li>Combustione ogni giro dell'albero motore</li>
              <li>Distribuzione tramite luci nel cilindro, nessuna valvola</li>
              <li>Lubrificazione con olio disciolto nella benzina</li>
              <li>Struttura più leggera e compatta a parità di cilindrata</li>
              <li>Potenza specifica superiore, banda spesso concentrata</li>
              <li>Revisioni più frequenti ma più rapide ed economiche</li>
            </ul>
          </motion.article>

          <motion.article className="engineCard" variants={cardVariants}>
            <span className="engineTag">4 Tempi</span>
            <h3>Progressivo, durevole, versatile</h3>
            <ul>
              <li>Combustione ogni due giri dell'albero motore</li>
              <li>Distribuzione con valvole e albero a camme</li>
              <li>Lubrificazione con circuito d'olio dedicato e separato</li>
              <li>Struttura più pesante ma con migliore efficienza termica</li>
              <li>Coppia più distribuita su un range di giri ampio</li>
              <li>Intervalli di manutenzione più lunghi, normative Euro più facili</li>
            </ul>
          </motion.article>
        </motion.div>

        {/* ── CARATTERISTICHE BLOCK ──────────────────────────────────────── */}
        <motion.div
          className="caratteristicheBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="caratteristicheHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Analisi comparativa</span>
            <h3>Quattro aree di confronto in dettaglio</h3>
            <p>
              Le differenze tra 2T e 4T non si limitano alla teoria del ciclo.
              Si manifestano in modo concreto nel peso della moto, nella
              sensazione di guida, nei costi di manutenzione e nella risposta
              alla regolazione. Queste quattro aree sono quelle dove il
              confronto è più significativo per chi guida e mantiene la moto.
            </p>
          </motion.div>

          <motion.div className="caratteristicheGrid" variants={cardVariants}>
            <div className="caratteristicaCard">
              <span className="caratteristicaBadge badgePotenza">Potenza</span>
              <h4>Rapporto potenza / peso</h4>
              <p>
                Un 250cc 2T da cross eroga tra 50 e 70 CV con un motore che pesa
                meno di 30 kg. Un 250cc 4T equivalente si ferma a 35 – 45 CV con
                un motore più pesante. Il vantaggio del 2T nel rapporto potenza/
                peso è strutturale e difficile da colmare. Questo è il motivo per
                cui nel fuoristrada competitivo un 125cc 2T compete con un 250cc
                4T e un 250cc 2T con un 450cc 4T.
              </p>
            </div>

            <div className="caratteristicaCard">
              <span className="caratteristicaBadge badgeBanda">Erogazione</span>
              <h4>Banda di potenza e coppia</h4>
              <p>
                Il 2T ha tipicamente una banda di potenza più stretta e
                concentrata intorno al regime di risonanza della camera di
                espansione. Sotto quella banda il motore è relativamente piatto;
                sopra cade rapidamente. Il 4T ha una coppia più distribuita: non
                ha quel picco improvviso ma mantiene una risposta più lineare su
                un range di giri ampio. Le valvole di scarico elettroniche
                modernizzano il 2T allargando la sua banda utilizzabile.
              </p>
            </div>

            <div className="caratteristicaCard">
              <span className="caratteristicaBadge badgeManutenzione">Manutenzione</span>
              <h4>Intervalli e costi di revisione</h4>
              <p>
                Un 2T da cross richiede la revisione del gruppo termico ogni
                10 – 25 ore di utilizzo intenso. Un 4T equivalente arriva a
                60 – 100 ore prima della revisione delle valvole. In compenso,
                aprire un cilindro 2T è un'operazione da poche ore e poche
                centinaia di euro; la revisione della testa di un 4T richiede
                attrezzatura specializzata e costi superiori. Su scala annuale
                i costi di manutenzione tendono a pareggiarsi.
              </p>
            </div>

            <div className="caratteristicaCard">
              <span className="caratteristicaBadge badgeEmissioni">Emissioni</span>
              <h4>Emissioni e legislazione</h4>
              <p>
                Il cortocircuito dei gas — parte della carica fresca che esce
                dallo scarico senza bruciare — rende le emissioni di
                idrocarburi incombusti del 2T strutturalmente più alte rispetto
                al 4T. Questo ha escluso i 2T a carburatore dalle normative
                Euro stradali. La nuova frontiera è l'iniezione diretta: i
                motori 2T DI iniettano carburante solo dopo la chiusura della
                luce di scarico, abbattendo le emissioni HC fino al 90% e
                aprendo la strada alla reintroduzione dei 2T su strada.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── ACCORDION BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="accordionBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="accordionHeading" variants={fadeUpVariants}>
            <span className="accordionLabel">Confronto espandibile</span>
            <h3>Apri ogni punto per leggere il confronto 2T / 4T in dettaglio</h3>
          </motion.div>

          <div className="accordionList">
            {accordionData.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
              />
            ))}
          </div>
        </motion.div>

        {/* ── CARDS GRID ─────────────────────────────────────────────────── */}
        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Contesto</span>
            <h3>Quando il 2T è la scelta giusta</h3>
            <p>
              Nel fuoristrada — motocross, enduro, trial — il vantaggio in
              peso e potenza specifica del 2T è ancora determinante. La
              semplicità meccanica e la possibilità di portare il materiale di
              ricambio in zaino sono fattori reali in gara. Chi sceglie un 2T
              oggi sa che sceglie una logica di guida diversa, più fisica, con
              meno assistenza elettronica — e spesso è esattamente quello che
              cerca.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Futuro</span>
            <h3>Il 2T non è obsoleto — sta cambiando</h3>
            <p>
              L'iniezione diretta, la lubrificazione separata e le valvole di
              scarico elettroniche stanno portando il 2T nel XXI secolo. Marchi
              come GASGAS, TM Racing e alcuni costruttori minori hanno già
              presentato prototipi stradali omologati Euro 5. Il 2T del futuro
              sarà più pulito, più efficiente e conserverà il rapporto
              potenza/peso che lo ha reso leggendario.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Guida</span>
            <h3>La differenza che si sente — non solo che si misura</h3>
            <p>
              Chi ha guidato entrambi descrive la differenza in modo
              istintivo: il 4T spinge, il 2T scatta. Il 4T accompagna, il 2T
              esige. Non è una questione di superiorità — è una questione di
              carattere. E il carattere del 2T, quella banda di potenza che
              arriva improvvisa come una scossa, è qualcosa che non si dimentica
              dopo la prima volta in pista.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default TwoStrokeVsFourStroke;
