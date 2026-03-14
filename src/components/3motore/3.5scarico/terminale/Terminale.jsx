import "./terminale.scss";
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

const Terminale = () => {
  return (
    <section className="terminale" id="terminale">
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
              Sistema di scarico
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il terminale<br />di scarico
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il terminale — detto anche silenziatore o muffler — è
              l'ultimo tratto del sistema di scarico prima dell'uscita
              dei gas nell'atmosfera. Il suo compito principale è ridurre
              il rumore prodotto dal flusso pulsante dei gas combusti,
              ma nel 2T svolge anche una funzione acustica attiva: lo
              stinger interno — il tubetto di uscita — controlla la
              contropressione residua che il sistema applica al cono
              convergente dell'espansione, influenzando direttamente
              la curva di potenza.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Dentro al corpo del terminale c'è quasi sempre lana di
              vetro — o, nei terminali racing, lana basaltica o lana
              di roccia. Questo materiale fibroso assorbe l'energia
              sonora delle onde di pressione convertendola in calore,
              riducendo il livello sonoro di 5 – 15 dB a seconda
              della densità e dello spessore del pacco. È consumabile:
              si compatta, si brucia, si satura di olio. Sostituirla
              periodicamente non è optional — è manutenzione.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del terminale</span>
              <h3>Cosa c'è dentro</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Connettore / collare — aggancio all'espansione, spesso a innesto rapido con molla o fascetta</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Tubo perforato centrale (stinger pipe) — tubo forato che attraversa il pacco di lana</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Pacco in lana di vetro — materiale fonoassorbente che circonda il tubo perforato</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Corpo esterno — guscio in acciaio, alluminio o CFRP che contiene e protege il pacco</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">05</span>
                <span className="miniText">Stinger di uscita — tubo finale di diametro calibrato che determina la contropressione</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── LANA BLOCK ──────────────────────────────────────────────────── */}
        <motion.div
          className="lanaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="lanaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il materiale fonoassorbente</span>
            <h3>Lana di vetro, basaltica e di roccia — differenze, durata e sostituzione</h3>
            <p>
              Il materiale fonoassorbente è il componente più trascurato
              dell'intero sistema di scarico — e uno dei più importanti.
              La sua degradazione è silenziosa e progressiva: il terminale
              continua a funzionare, ma diventa via via più rumoroso
              fino a superare i limiti di omologazione, e la contropressione
              cambia alterando la calibrazione dell'espansione.
            </p>
          </motion.div>

          <motion.div className="lanaGrid" variants={cardVariants}>

            <div className="lanaCard lanaVetro">
              <div className="lanaCardTop">
                <span className="lanaBadge badgeVetro">Lana di vetro</span>
                <span className="lanaStd">Standard OEM</span>
              </div>
              <h4>La scelta di serie — economica e silenziosa</h4>
              <p>
                La lana di vetro è il materiale standard nella quasi
                totalità dei terminali di serie e aftermarket entry-level.
                È composta da fibre di silicato di sodio-calcio filate
                ad alto calore, con diametro delle fibre nell'ordine
                dei 5 – 15 µm. A basse temperature (fino a circa 450 °C)
                assorbe efficacemente il rumore, è leggera e costa poco.
                Il suo limite è la temperatura: oltre i 500 °C le fibre
                cominciano a sinterizzarsi — si fondono parzialmente
                tra loro — perdendo la struttura fibrosa aperta che
                garantisce l'assorbimento acustico. Nei motori 2T
                da competizione, dove la temperatura allo scarico può
                superare i 550 – 600 °C nel tratto finale, la lana
                di vetro può durare meno di una stagione.
              </p>
            </div>

            <div className="lanaCard lanaBasalto">
              <div className="lanaCardTop">
                <span className="lanaBadge badgeBasalto">Lana basaltica</span>
                <span className="lanaStd">Racing / endurance</span>
              </div>
              <h4>La scelta racing — temperature superiori, durata maggiore</h4>
              <p>
                La lana basaltica è ottenuta dalla fusione e filatura
                del basalto — una roccia vulcanica naturale. Le fibre
                hanno un diametro simile alla lana di vetro ma una
                resistenza termica nettamente superiore: il limite
                operativo arriva a 700 – 750 °C senza sinterizzazione.
                L'assorbimento acustico è comparabile alla lana di vetro
                nelle condizioni normali, con una tenuta delle proprietà
                nel tempo significativamente migliore. Il costo è
                3 – 5 volte superiore ma la durata in uso intenso
                è proporzionalmente più lunga. È la scelta corretta
                per i terminali racing dove le temperature di esercizio
                sono costantemente elevate.
              </p>
            </div>

            <div className="lanaCard lanaRoccia">
              <div className="lanaCardTop">
                <span className="lanaBadge badgeRoccia">Lana di roccia</span>
                <span className="lanaStd">Compromesso ideale</span>
              </div>
              <h4>Il compromesso — prestazioni a costo contenuto</h4>
              <p>
                La lana di roccia (rockwool) è prodotta da miscele
                di basalto e altri minerali con l'aggiunta di scorie
                industriali. La resistenza termica è intermedia tra
                lana di vetro e lana basaltica pura — fino a 600 – 650 °C
                senza degradazione significativa. È più economica della
                lana basaltica e offre un buon compromesso per l'uso
                amatoriale intenso e le gare enduro dove il terminale
                rimane caldo a lungo. Disponibile in rotoli o in forme
                pretagliate per i terminali più comuni.
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
              <span className="placeholderText">Immagine — terminale sezionato con tubo perforato, pacco in lana e stinger di uscita visibili</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Sezione interna</span>
            <p>
              Il terminale aperto mostra chiaramente la stratificazione
              interna: il tubo perforato al centro attraversato dai gas,
              il pacco di lana che lo circonda completamente, e il guscio
              esterno. I fori del tubo centrale devono essere aperti
              e puliti — un tubo ostruito da olio carbonizzato riduce
              l'efficienza fonoassorbente e aumenta la contropressione
              oltre il valore di progetto.
            </p>
          </div>
        </motion.div>

        {/* ── FISICA BLOCK — leggero, solo la legge chiave ────────────────── */}
        <motion.div
          className="fisicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="fisicaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il principio fisico</span>
            <h3>Come la lana assorbe il suono — dissipazione viscosa e attrito termico</h3>
            <p>
              L'assorbimento acustico nei materiali fibrosi si basa
              su un principio semplice: le onde di pressione sonora
              attraversano gli spazi tra le fibre e le fanno vibrare.
              Questa vibrazione è contrastata dall'attrito tra il gas
              e la superficie delle fibre — l'energia meccanica dell'onda
              si converte in calore per attrito viscoso. Più alta è
              la densità del pacco (più fibre per unità di volume),
              maggiore è l'attrito e maggiore l'assorbimento.
            </p>
          </motion.div>

          <motion.div className="fisicaGrid" variants={cardVariants}>

            <div className="fisicaCard">
              <div className="fisicaFormula">
                <span className="formulaEq">ΔL = 10 · log(I₁/I₂)</span>
                <span className="formulaLabel">Attenuazione sonora in decibel</span>
              </div>
              <h4>Decibel e attenuazione — perché 5 dB cambia tutto</h4>
              <p>
                Il livello sonoro si misura in decibel (dB) su scala
                logaritmica. Un aumento di 10 dB corrisponde a una
                percezione soggettiva del suono due volte più forte —
                ma corrisponde a un'intensità acustica dieci volte
                maggiore. Un terminale nuovo con lana integra attenuare
                tipicamente 8 – 15 dB rispetto allo stinger nudo.
                Una lana sinterizzata e compattata può perdere
                3 – 7 dB di attenuazione — abbastanza per passare
                da omologato a fuori norma in una sessione di controllo
                al gate, senza che il pilota si accorga di alcuna
                variazione percettibile a orecchio.
              </p>
            </div>

            <div className="fisicaCard">
              <div className="fisicaFormula">
                <span className="formulaEq">P ∝ 1/d⁴ · L</span>
                <span className="formulaLabel">Contropressione — Legge di Hagen-Poiseuille</span>
              </div>
              <h4>Lo stinger e la contropressione — il diametro che comanda</h4>
              <p>
                La contropressione generata dallo stinger di uscita
                dipende in modo molto sensibile dal suo diametro interno.
                La legge di Hagen-Poiseuille per il flusso in un tubo
                mostra che la resistenza al flusso cresce con la quarta
                potenza del raggio — dimezzare il diametro moltiplica
                la contropressione per sedici. Nella pratica questo
                significa che variazioni di anche solo 1 mm nel diametro
                dello stinger producono effetti misurabili sulla curva
                di potenza. Un terminale con stinger consumato o
                allargato perde contropressione e sposta il picco verso
                il basso — spesso scambiato per un problema al carburatore.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── STINGER BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="stingerBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="stingerHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il tubo di uscita</span>
            <h3>Lo stinger — diametro, lunghezza e il loro effetto sulla potenza</h3>
            <p>
              Lo stinger è il tubetto di uscita finale del terminale —
              il tratto che i gas percorrono prima di essere espulsi
              nell'atmosfera. Non è un componente neutro: il suo diametro
              interno e la sua lunghezza determinano la contropressione
              applicata all'intera espansione, con effetti diretti
              e misurabili sulla curva di potenza.
            </p>
          </motion.div>

          <motion.div className="stingerGrid" variants={cardVariants}>

            <div className="stingerCard stingerDiam">
              <span className="stingerBadge badgeDiam">Diametro</span>
              <h4>Diametro interno — il parametro più sensibile</h4>
              <p>
                Il diametro interno dello stinger è tipicamente compreso
                tra 22 e 34 mm per motori da 125 a 300 cc, con il valore
                ottimale che dipende dalla cilindrata e dal regime di
                utilizzo. Uno stinger più stretto aumenta la contropressione,
                sposta il picco verso l'alto e concentra la banda di potenza.
                Uno stinger più largo riduce la contropressione, abbassa
                leggermente il picco ma allarga la banda e migliora
                l'erogazione ai medi. In uso enduro si preferisce spesso
                uno stinger leggermente più largo di quello ottimale
                per la pista — il guadagno in utilizzabilità compensa
                la perdita di potenza di picco.
              </p>
            </div>

            <div className="stingerCard stingerLung">
              <span className="stingerBadge badgeLung">Lunghezza</span>
              <h4>Lunghezza dello stinger — effetto secondario ma misurabile</h4>
              <p>
                La lunghezza dello stinger influenza la frequenza delle
                riflessioni acustiche che si generano nel tratto finale
                del sistema. Un effetto secondario rispetto al diametro —
                ma misurabile al banco prova su motori molto ottimizzati.
                Nei sistemi da competizione lo stinger è spesso
                intercambiabile con versioni di lunghezza diversa
                per l'affinamento del setup. Allungarlo di 20 – 30 mm
                può spostare il picco di 200 – 400 giri verso il basso
                su un motore ben calibrato. Su un motore di serie
                l'effetto è generalmente trascurabile rispetto
                alla variazione di diametro.
              </p>
            </div>

            <div className="stingerCard stingerUsura">
              <span className="stingerBadge badgeUsura">Usura</span>
              <h4>Erosione dello stinger — perché si consuma dall'interno</h4>
              <p>
                Lo stinger è soggetto a erosione chimica e termica
                dall'interno per il contatto continuato con i gas
                di scarico caldi, acidi e carichi di particolato.
                Il diametro interno aumenta lentamente nel tempo —
                un aumento di anche solo 1,5 – 2 mm rispetto
                al nominale può ridurre la contropressione abbastanza
                da modificare sensibilmente la curva. Nei terminali
                di qualità lo stinger è sostituibile singolarmente
                senza cambiare l'intero corpo del terminale.
                La verifica si esegue con un calibro a cordino
                o con un tampone cilindrico di diametro nominale.
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
            <span className="captionTag">Lana nuova vs esausta</span>
            <p>
              Confronto visivo tra un pacco di lana di vetro nuovo —
              fibroso, soffice, bianco — e uno esausto dopo una stagione
              di utilizzo intenso: compattato, brunito per il calore,
              con le fibre sinterizzate che hanno perso la struttura
              aperta. Il volume si riduce del 30 – 50% e l'attenuazione
              acustica crolla. Un terminale che ha perso la lana non
              si "sente" diverso guidando — ma al dB-meter al gate
              è già fuori norma.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — lana di vetro nuova vs compattata e sinterizzata dopo uso intenso</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── MATERIALI CORPO BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="materialiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="materialiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Costruzione del corpo</span>
            <h3>Acciaio, alluminio e carbonio — tre corpi, tre filosofie</h3>
            <p>
              Il guscio esterno del terminale non è solo estetica.
              Deve contenere il pacco di lana, resistere alle temperature
              di esercizio, sopportare gli urti tipici dell'uso off-road
              e, nei terminali racing, pesare il meno possibile.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>

            <div className="matCard">
              <span className="matBadge badgeAcciaio">Acciaio inox</span>
              <h4>Robusto, economico, pesante</h4>
              <p>
                L'acciaio inossidabile AISI 304 è il materiale standard
                per i terminali OEM e aftermarket di fascia media.
                Resiste agli urti, agli agenti atmosferici e alle
                temperature di esercizio senza richiedere protezioni
                particolari. Il peso è il limite principale — un terminale
                in acciaio per una 250cc pesa tipicamente 600 – 900 g.
                La superficie si ossida superficialmente con il calore
                (ingiallisce, poi imbrunisce) — processo estetico
                normale che non compromette la funzionalità.
              </p>
            </div>

            <div className="matCard">
              <span className="matBadge badgeAlluminio">Alluminio</span>
              <h4>Leggero, ma delicato agli urti</h4>
              <p>
                I terminali in alluminio anodizzato sono diffusi nei
                segmenti enduro e motocross aftermarket dove il peso
                è prioritario. Il risparmio rispetto all'equivalente
                in acciaio è dell'ordine di 200 – 400 g — significativo
                come massa non sospesa. Il limite è la resistenza agli
                urti: l'alluminio si ammacca più facilmente dell'acciaio
                e non si raddrizza altrettanto bene. Un ammaccatura
                significativa nel corpo del terminale comprime la lana
                internamente e può ostruire parzialmente il flusso dei gas.
              </p>
            </div>

            <div className="matCard">
              <span className="matBadge badgeCarbonio">CFRP — Carbonio</span>
              <h4>La scelta racing — minimo peso, massima fragilità</h4>
              <p>
                I terminali in fibra di carbonio sono lo standard nelle
                preparazioni racing di alto livello. Il corpo esterno
                in CFRP pesa 60 – 70% in meno dell'equivalente in acciaio
                a parità di rigidezza. Il limite è la resistenza agli
                urti diretti: il carbonio si spacca invece di ammaccarsi.
                Una caduta con impatto diretto sul terminale può richiedere
                la sostituzione dell'intero corpo. Nei terminali carbon
                il tratto più vicino all'espansione è spesso in acciaio
                o alluminio per resistere alle temperature più alte —
                il CFRP puro non supera i 150 – 200 °C senza degradarsi.
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
            <span className="sectionLabel">Manutenzione</span>
            <h3>Quando e come sostituire la lana — la guida pratica</h3>
            <p>
              La sostituzione della lana è la manutenzione più semplice
              e più trascurata del sistema di scarico. Costo minimo,
              impatto reale su rumore, prestazioni e conformità alle
              norme di omologazione.
            </p>
          </motion.div>

          <motion.div className="manutSteps" variants={cardVariants}>

            <div className="manutStep">
              <div className="manutNum">1</div>
              <div className="manutContent">
                <h4>Quando sostituire — segnali da non ignorare</h4>
                <p>
                  In uso agonistico intenso: ogni 10 – 15 ore di utilizzo
                  o a ogni revisione stagionale, indipendentemente dall'aspetto.
                  In uso amatoriale: ogni 25 – 40 ore o quando il terminale
                  suona visibilmente più rauco e aperto rispetto a un anno
                  prima. Un test rapido: tappare brevemente l'uscita dello
                  stinger a motore acceso — se il suono cambia drasticamente
                  la lana ha perso l'efficacia. Il controllo del rumore
                  al dB-meter prima di ogni gara o enduro cronometrato
                  è la verifica più oggettiva.
                </p>
              </div>
            </div>

            <div className="manutStep">
              <div className="manutNum">2</div>
              <div className="manutContent">
                <h4>Come aprire il terminale — rivetti o viti di chiusura</h4>
                <p>
                  La maggior parte dei terminali si smonta togliendo
                  i rivetti ciechi o le viti che tengono le calotte
                  di chiusura ai lati del corpo. Sui terminali rivettati
                  si usa una punta da trapano del diametro del rivetto
                  per forare la testa — il corpo rimane integro e si
                  richiude con nuovi rivetti alluminio dello stesso
                  diametro. Alcuni terminali aftermarket hanno una
                  calotta avvitata con filetto fine — verificare prima
                  di forare. Con il terminale aperto, estrarre il tubo
                  perforato con la lana avvolta attorno — in un unico
                  blocco nei modelli ben costruiti.
                </p>
              </div>
            </div>

            <div className="manutStep">
              <div className="manutNum">3</div>
              <div className="manutContent">
                <h4>Pulizia del tubo perforato — i fori devono essere aperti</h4>
                <p>
                  Prima di montare la lana nuova, ispezionare il tubo
                  perforato: i fori devono essere completamente aperti
                  e privi di olio carbonizzato. Se i fori sono parzialmente
                  ostruiti, pulire con filo di ottone e solvente — mai
                  allargare i fori meccanicamente perché cambia la sezione
                  di flusso e quindi la contropressione. Una volta pulito,
                  avvolgere la lana nuova attorno al tubo in strato uniforme
                  della densità indicata dal produttore — tipicamente
                  1,5 – 2,5 kg/m³ di densità apparente per la lana di vetro.
                </p>
              </div>
            </div>

            <div className="manutStep">
              <div className="manutNum">4</div>
              <div className="manutContent">
                <h4>Rimontaggio e collaudo — la prova del fumo</h4>
                <p>
                  Con la lana nuova avvolta e il tubo reinserito nel corpo,
                  richiudere le calotte e rivettare. Prima di montare
                  il terminale sulla moto fare un controllo visivo:
                  nessun filo di lana deve fuoriuscire dalle giunzioni —
                  se la lana è eccessiva si restringe il corpo invece
                  di comprimere la lana. Al primo avvio lasciare scaldare
                  il terminale gradualmente a regime medio per 5 – 10 minuti
                  — la lana nuova emette fumo bianco mentre i leganti
                  organici bruciano. Normale e temporaneo.
                  Dopo questo ciclo di break-in la lana è assestata
                  nella sua configurazione definitiva.
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
            <span className="cardTag">Spark arrestor</span>
            <h3>Il parascintille — obbligatorio in molti contesti off-road</h3>
            <p>
              Lo spark arrestor è una rete metallica o un deflettore
              montato all'interno del terminale, solitamente nello stinger
              di uscita, che impedisce alle particelle incandescenti
              di carbone dei gas di scarico di uscire nell'aria.
              È obbligatorio per legge in molti paesi per l'uso
              off-road in zone a rischio incendio — specialmente in
              USA, Canada e Australia. La rete si pulisce periodicamente
              con spazzola metallica e solvente: se ostruita aumenta
              la contropressione significativamente oltre il valore
              di progetto e fa perdere potenza in modo percettibile.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Normativa rumore</span>
            <h3>Limiti di rumore nelle competizioni — dB e distanza di misura</h3>
            <p>
              La maggior parte delle competizioni enduro e motocross
              impone limiti di rumore misurati a una distanza fissa
              dal terminale — tipicamente 0,5 m a 45° — con il motore
              a un regime prefissato (spesso ¾ del massimo). I limiti
              variano: l'FIM fissa 112 dB/A per il motocross, molte
              gare enduro nazionali scendono a 94 – 106 dB/A.
              Un terminale con lana esausta può superare il limite
              di 3 – 5 dB — abbastanza per essere escluso dalla gara.
              Investire in un dB-meter portatile e misurare prima
              della partenza è prassi standard nei team organizzati.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>Terminali racing — cosa cambia davvero rispetto all'originale</h3>
            <p>
              Un terminale aftermarket di qualità (FMF, Pro Circuit,
              Akrapovič, Scalvini) differisce dall'originale principalmente
              per il peso ridotto, la qualità del materiale fonoassorbente,
              lo stinger intercambiabile e spesso una geometria interna
              ottimizzata per l'abbinamento con la specifica espansione
              del marchio. La variazione di potenza rispetto all'OEM,
              a parità di espansione, è generalmente contenuta — 1 – 3%
              al picco. Il beneficio principale è il peso risparmiato
              e la possibilità di fine-tuning attraverso la sostituzione
              dello stinger con misure diverse.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Terminale;
