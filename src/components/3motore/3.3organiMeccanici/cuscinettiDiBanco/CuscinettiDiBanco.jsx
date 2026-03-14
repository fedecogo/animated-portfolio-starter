import "./cuscinettiDiBanco.scss";
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

const CuscinettiDiBanco = () => {
  return (
    <section className="cuscinettiDiBanco" id="cuscinetti-di-banco">
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
              Organi meccanici
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Cuscinetti di banco nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              I cuscinetti di banco sono i supporti su cui l'albero motore
              ruota all'interno del carter. Sono i cuscinetti più sollecitati
              dell'intero motore — ricevono tutte le forze trasmesse dalla
              biella, le forze di inerzia delle masse rotanti e oscillanti,
              e devono farlo a velocità elevatissime per decine di ore senza
              manutenzione. Nel motore a 2 tempi non esiste un circuito
              di lubrificazione dedicato sotto pressione come nel 4 tempi:
              i cuscinetti di banco sono lubrificati esclusivamente
              dall'olio in miscela che si trova nel carter sotto forma
              di nebbia e goccioline. Questo dettaglio cambia tutto —
              dalla scelta del tipo di cuscinetto alla criticità del
              rapporto di miscela.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              A differenza dei motori a 4 tempi che usano cuscinetti
              a gusci di bronzo lubrificati ad olio in pressione,
              il 2T monta quasi universalmente cuscinetti a sfere o
              a rulli con gabbia — cuscinetti volventi che non richiedono
              un film idrodinamico continuo per funzionare ma che sono
              molto sensibili alla contaminazione, all'umidità
              e alla lubrificazione insufficiente.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Ruolo nel motore</span>
              <h3>Cosa fanno i cuscinetti di banco</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Supporto radiale — reggono il peso e le forze dell'albero in rotazione</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Supporto assiale — limitano il movimento longitudinale dell'albero</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Centraggio — mantengono l'albero coassiale con il cilindro</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Tenuta — i paraolio integrati o adiacenti sigillano il carter</span>
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
              <span className="placeholderText">Immagine / GIF — cuscinetti di banco nel carter 2T in sezione</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Posizione</span>
            <p>
              I cuscinetti di banco alloggiati nelle sedi del carter:
              uno per lato, ai due estremi dei perni di banco dell'albero.
              Il paraolio esterno sigilla il carter verso l'esterno;
              quello interno — dove presente — separa le due metà del
              carter nei motori con carter diviso trasversalmente.
            </p>
          </div>
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
            <span className="sectionLabel">Tipologie</span>
            <h3>Sfere, rulli o aghi — tre soluzioni per tre esigenze diverse</h3>
            <p>
              La scelta del tipo di elemento volvente non è standardizzata
              tra tutti i costruttori — dipende dall'applicazione, dal
              regime operativo, dal carico radiale prevalente e dalla
              necessità o meno di supporto assiale. Conoscere le differenze
              aiuta a scegliere il cuscinetto corretto in fase di
              sostituzione e a capire perché non tutti i cuscinetti con
              le stesse dimensioni esterne sono intercambiabili.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>

            <div className="tipoCard tipoSfere">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeSfere">Sfere</span>
                <span className="tipoSigla">Deep groove ball bearing</span>
              </div>
              <h4>Cuscinetto radiale a sfere</h4>
              <p>
                Il tipo più diffuso nei motori a 2 tempi stradali e
                da enduro. Le sfere supportano sia carichi radiali che
                assiali in entrambe le direzioni, rendendo spesso
                superfluo un cuscinetto di spinta separato. L'attrito
                di rotolamento è molto basso, la velocità massima
                ammessa è elevata e il montaggio è semplice. La capacità
                di carico radiale è inferiore ai cuscinetti a rulli —
                nei motori con forze di biella molto elevate si preferisce
                la soluzione a rulli.
              </p>
              <div className="tipoSpec">
                <div className="tipoSpecRow">
                  <span className="tipoSpecK">Carico radiale</span>
                  <span className="tipoSpecV tipoSpecMed">Medio</span>
                </div>
                <div className="tipoSpecRow">
                  <span className="tipoSpecK">Carico assiale</span>
                  <span className="tipoSpecV tipoSpecOk">Supportato</span>
                </div>
                <div className="tipoSpecRow">
                  <span className="tipoSpecK">Velocità massima</span>
                  <span className="tipoSpecV tipoSpecOk">Elevata</span>
                </div>
              </div>
            </div>

            <div className="tipoCard tipoRulli">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeRulli">Rulli cilindrici</span>
                <span className="tipoSigla">Cylindrical roller bearing</span>
              </div>
              <h4>Cuscinetto a rulli cilindrici</h4>
              <p>
                Presente nei motori più sportivi e da competizione dove
                le forze radiali sono elevate. Il contatto lineare tra
                rullo e pista offre una superficie portante maggiore
                rispetto al contatto puntiforme delle sfere, aumentando
                la capacità di carico radiale del 30 – 50%. Non supporta
                carichi assiali significativi — richiede sempre un
                elemento separato (spallamento, cuscinetto a sfere
                sull'altro lato) per il posizionamento assiale dell'albero.
              </p>
              <div className="tipoSpec">
                <div className="tipoSpecRow">
                  <span className="tipoSpecK">Carico radiale</span>
                  <span className="tipoSpecV tipoSpecOk">Elevato</span>
                </div>
                <div className="tipoSpecRow">
                  <span className="tipoSpecK">Carico assiale</span>
                  <span className="tipoSpecV tipoSpecNo">Non supportato</span>
                </div>
                <div className="tipoSpecRow">
                  <span className="tipoSpecK">Velocità massima</span>
                  <span className="tipoSpecV tipoSpecMed">Media</span>
                </div>
              </div>
            </div>

            <div className="tipoCard tipoAghi">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeAghi">Aghi</span>
                <span className="tipoSigla">Needle roller bearing</span>
              </div>
              <h4>Cuscinetto a rulli d'ago</h4>
              <p>
                Utilizzato dove lo spazio radiale è limitato. I rulli
                d'ago hanno diametro molto piccolo rispetto alla
                lunghezza — il rapporto è tipicamente 1:3 o 1:5. Questo
                permette di realizzare cuscinetti con sezione radiale
                sottilissima a parità di diametro del perno. Capacità
                di carico radiale molto elevata per l'ingombro minimo,
                ma sensibile alla qualità della superficie del perno
                e alla purezza del lubrificante. Spesso usato in
                combinazione con cuscinetti a sfere per la tenuta assiale.
              </p>
              <div className="tipoSpec">
                <div className="tipoSpecRow">
                  <span className="tipoSpecK">Carico radiale</span>
                  <span className="tipoSpecV tipoSpecOk">Molto elevato</span>
                </div>
                <div className="tipoSpecRow">
                  <span className="tipoSpecK">Carico assiale</span>
                  <span className="tipoSpecV tipoSpecNo">Non supportato</span>
                </div>
                <div className="tipoSpecRow">
                  <span className="tipoSpecK">Ingombro radiale</span>
                  <span className="tipoSpecV tipoSpecOk">Minimo</span>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* ── LUBRIFICAZIONE BLOCK ────────────────────────────────────────── */}
        <motion.div
          className="lubrificazioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="lubrificazioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Lubrificazione</span>
            <h3>Nebbia d'olio — il sistema più critico del 2T</h3>
            <p>
              Nel motore a 4 tempi i cuscinetti di banco sono immersi
              in olio sotto pressione erogato da una pompa dedicata.
              Nel 2 tempi non esiste nulla di tutto questo: i cuscinetti
              ricevono il loro olio dalla nebbia che si forma nel carter
              quando la miscela carburante-olio viene agitata dall'albero
              e dai dischi manovella in rotazione. È un sistema semplice
              ed efficace — ma che non perdona errori nel rapporto
              di miscela o l'uso di oli inadatti.
            </p>
          </motion.div>

          <motion.div className="lubrificazioneContent" variants={cardVariants}>

            <div className="lubLeft">
              <div className="lubItem">
                <span className="lubLabel">Olio nella miscela — quota destinata ai cuscinetti</span>
                <div className="lubBar">
                  <div className="lubFill" style={{ width: "40%" }} />
                </div>
                <span className="lubValue">~30 – 40% dell'olio totale</span>
                <p>
                  Non tutto l'olio in miscela raggiunge i cuscinetti —
                  una quota significativa brucia nella camera di
                  combustione insieme al carburante. La porzione che
                  raggiunge i cuscinetti dipende dalla volatilità
                  dell'olio, dalla geometria del carter e dalla velocità
                  di rotazione. È uno dei motivi per cui il rapporto
                  di miscela non può essere ridotto arbitrariamente
                  senza rischiare la lubrificazione insufficiente
                  dei cuscinetti di banco.
                </p>
              </div>

              <div className="lubItem">
                <span className="lubLabel">Temperatura critica dei cuscinetti di banco</span>
                <div className="lubBar">
                  <div className="lubFill lubFillWarn" style={{ width: "70%" }} />
                </div>
                <span className="lubValue lubValueWarn">Limite: 120 – 140 °C</span>
                <p>
                  Sopra i 120 – 140 °C le proprietà lubrificanti dell'olio
                  degradano rapidamente. I cuscinetti che raggiungono
                  queste temperature mostrano colorazione blu-violacea
                  sugli anelli — segnale inequivocabile di episodio
                  termico severo. Lubrificazione insufficiente, miscela
                  magra o raffreddamento inadeguato del carter sono le
                  cause principali del surriscaldamento.
                </p>
              </div>
            </div>

            <div className="lubRight">
              <div className="lubCard">
                <span className="lubCardTag">Olio e cuscinetti</span>
                <h4>Perché la qualità dell'olio conta per i cuscinetti</h4>
                <p>
                  I cuscinetti volventi del 2T richiedono un olio con
                  buona capacità di formare un film protettivo sulle
                  superfici metalliche anche in condizioni di contatto
                  elasto-idrodinamico a bassa velocità. Gli oli sintetici
                  di qualità alta formano un film più stabile e resistente
                  alle temperature rispetto ai minerali, riducendo
                  l'usura delle piste e degli elementi volventi.
                  Un olio minerale economico o non specifico per motori
                  2T può degradare il film lubrificante fino a causare
                  contatto metallo-metallo sulle piste dei cuscinetti.
                </p>
              </div>

              <div className="lubCard">
                <span className="lubCardTag">Contaminazione</span>
                <h4>Il nemico silenzioso dei cuscinetti volventi</h4>
                <p>
                  Le particelle abrasive — polvere, detriti metallici
                  da usura, residui di combustione — sono la principale
                  causa di morte prematura dei cuscinetti volventi.
                  Nel 2T il filtro aria è la prima linea di difesa:
                  un filtro otturato o danneggiato permette alla polvere
                  di entrare nel circuito aria-carburante e raggiungere
                  il carter con la miscela. Anche l'acqua è estremamente
                  dannosa — pochi millilitri di acqua nel carter,
                  per condensazione o per guado, possono distruggere
                  i cuscinetti in meno di un'ora di utilizzo.
                </p>
              </div>
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
            <span className="captionTag">Marcatura cuscinetto</span>
            <p>
              Il codice stampigliato sull'anello esterno del cuscinetto
              identifica diametro interno, diametro esterno, larghezza,
              tipo di gabbia e classe di tolleranza. Non tutti i cuscinetti
              con le stesse dimensioni nominali sono equivalenti:
              la classe di tolleranza C3 indica gioco interno maggiore,
              necessario per compensare la dilatazione termica nei motori
              ad alto regime.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — marcatura cuscinetto e codice di identificazione</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── CODIFICA & GIOCO BLOCK ──────────────────────────────────────── */}
        <motion.div
          className="codificaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="codificaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Codifica e tolleranze</span>
            <h3>Leggere il codice — classe C3 e perché non è intercambiabile con CN</h3>
            <p>
              Ogni cuscinetto porta stampigliato un codice che ne
              definisce le dimensioni, il tipo e la classe di tolleranza.
              Nei motori a 2 tempi il dettaglio più importante è la
              classe di gioco interno — spesso indicata come C3 o C4 —
              che non è un accessorio opzionale ma un requisito tecnico
              preciso. Montare un cuscinetto con gioco sbagliato può
              sembrare innocuo a freddo e rivelarsi fatale a caldo.
            </p>
          </motion.div>

          <motion.div className="codificaGrid" variants={cardVariants}>

            <div className="codificaCard">
              <span className="codificaIdx codificaIdxCN">CN</span>
              <h4>Classe CN — gioco normale</h4>
              <p>
                Il gioco interno standard, pensato per applicazioni
                industriali a temperatura ambiente. In un motore a
                2 tempi che opera a temperature elevate, il gioco CN
                può azzerarsi per dilatazione termica degli anelli,
                generando un precarico non previsto che aumenta
                drasticamente l'attrito, la temperatura e l'usura
                del cuscinetto. Non adatto per cuscinetti di banco
                nei motori a 2 tempi sportivi.
              </p>
            </div>

            <div className="codificaCard codificaCardC3">
              <span className="codificaIdx codificaIdxC3">C3</span>
              <h4>Classe C3 — gioco aumentato ★ Standard 2T</h4>
              <p>
                Il gioco interno C3 è maggiore del CN di circa 0,010 –
                0,020 mm per le dimensioni tipiche dei cuscinetti di banco
                2T. Questo gioco aggiuntivo compensa la dilatazione
                termica degli anelli durante il funzionamento, mantenendo
                un gioco operativo positivo anche a temperatura di regime.
                È la classe standard per i motori a 2 tempi — usare CN
                al posto di C3 è un errore che compromette la durata
                del cuscinetto.
              </p>
            </div>

            <div className="codificaCard codificaCardC4">
              <span className="codificaIdx codificaIdxC4">C4</span>
              <h4>Classe C4 — gioco molto aumentato</h4>
              <p>
                Gioco interno ancora maggiore del C3. Usato in applicazioni
                con gradienti termici molto elevati o con sedi del carter
                in materiali con coefficienti di dilatazione molto diversi
                dall'acciaio (come alcune leghe di alluminio). In alcuni
                motori da competizione preparati con carter in lega leggera
                ad alta espansione termica, il C4 può essere la scelta
                corretta — verificare sempre le specifiche del costruttore
                prima di sostituire.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── MONTAGGIO BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="montaggioBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="montaggioHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Montaggio</span>
            <h3>Come si montano — temperatura, interferenza e orientamento</h3>
            <p>
              Il montaggio dei cuscinetti di banco è un'operazione che
              non ammette approssimazioni. Un cuscinetto montato con
              forza a freddo senza riscaldamento della sede si deforma
              plasticamente — gli anelli si ovalizzano e il gioco interno
              cambia in modo non controllato. Un cuscinetto montato nel
              verso sbagliato scarica i carichi sull'anello non
              progettato per riceverli. Entrambi gli errori portano alla
              rottura prematura in pochi ore di funzionamento.
            </p>
          </motion.div>

          <motion.div className="montaggioGrid" variants={cardVariants}>

            <div className="montaggioCard">
              <span className="montaggioIdx">01</span>
              <h4>Riscaldamento della sede nel carter</h4>
              <p>
                Le sedi dei cuscinetti nel carter vengono riscaldate a
                100 – 130 °C con pistola termica o in forno prima del
                montaggio. Il calore dilata la sede permettendo l'inserimento
                del cuscinetto senza forzature. Il raffreddamento
                successivo crea l'interferenza di progetto tra anello
                esterno e carter. Non utilizzare mai un martello direttamente
                sull'anello — anche un solo colpo mal direzionato
                può scheggiare le piste o deformare la gabbia.
              </p>
            </div>

            <div className="montaggioCard">
              <span className="montaggioIdx">02</span>
              <h4>Raffreddamento del cuscinetto</h4>
              <p>
                In alternativa al riscaldamento della sede, il cuscinetto
                può essere raffreddato in congelatore a –20 °C per
                alcune ore prima del montaggio. La contrazione termica
                riduce temporaneamente il diametro dell'anello esterno
                facilitando l'inserimento. Le due tecniche si possono
                combinare per cuscinetti con interferenza elevata.
                Il cuscinetto freddo va montato immediatamente prima
                che torni a temperatura ambiente.
              </p>
            </div>

            <div className="montaggioCard">
              <span className="montaggioIdx">03</span>
              <h4>Orientamento e verso di montaggio</h4>
              <p>
                I cuscinetti con una sola schermatura laterale (tenuta
                singola) vanno montati con la schermatura orientata
                verso l'esterno del carter — verso il paraolio —
                non verso l'interno. La schermatura protegge il
                cuscinetto dai detriti provenienti dall'esterno; dal lato
                interno il cuscinetto deve poter ricevere la nebbia
                d'olio dal carter. Invertire l'orientamento riduce
                drasticamente la lubrificazione interna.
              </p>
            </div>

            <div className="montaggioCard">
              <span className="montaggioIdx">04</span>
              <h4>Paraolio — il sigillo che protegge tutto</h4>
              <p>
                Il paraolio dell'albero motore va sostituito a ogni
                revisione insieme ai cuscinetti. Un paraolio indurito
                o con labbro usurato permette la fuoriuscita della
                nebbia d'olio verso l'esterno e — cosa più grave —
                l'ingresso di aria spuria nel carter che degrada
                il rapporto di miscela reale. Il montaggio richiede
                il rispetto del verso e la lubrificazione del labbro
                prima dell'inserimento per non danneggiarlo durante
                il montaggio sull'albero.
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
              <span className="placeholderText">Immagine / GIF — montaggio cuscinetto con riscaldamento sede e paraolio</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Montaggio</span>
            <p>
              Inserimento del cuscinetto nella sede calda del carter:
              il cuscinetto cade in sede quasi per gravità quando la
              temperatura è corretta — nessuna forza, nessun colpo.
              Se richiede martellate la sede non è abbastanza calda
              oppure il cuscinetto ha il diametro sbagliato.
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
            <span className="sectionLabel">Diagnosi e usura</span>
            <h3>Riconoscere un cuscinetto che sta cedendo — prima che sia troppo tardi</h3>
            <p>
              Un cuscinetto di banco deteriorato manda segnali precisi
              settimane prima di cedere definitivamente. Imparare a
              riconoscerli è la differenza tra una sostituzione
              programmata da pochi euro e la ricostruzione completa
              del carter da centinaia. Il costo di un set di cuscinetti
              di banco è sempre inferiore di un ordine di grandezza
              rispetto al costo dei danni che causa quando si rompe.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Rumore di cuscinetto — il ronzio che cresce</h4>
              <p>
                Un cuscinetto usurato produce un ronzio o un fruscio
                continuo che aumenta con il regime, distinto dal rumore
                normale del motore. Per isolarlo si può appoggiare
                un cacciavite o un martelletto di gomma sul carter
                e ascoltare in trasmissione. Il rumore di cuscinetto
                tende a essere costante e proporzionale al regime,
                senza la ritmicità del battito di biella.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Gioco radiale — il test della mano</h4>
              <p>
                Con carter aperto e albero in sede, si tenta di spostare
                radialmente il perno di banco afferrando l'albero. Un
                gioco radiale percettibile — superiore a 0,03 – 0,05 mm
                — indica che le piste del cuscinetto sono usurate. Il
                gioco radiale si misura con precisione inserendo un
                comparatore di profondità sul perno mentre si sposta
                l'albero radialmente.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Colorazione blu degli anelli</h4>
              <p>
                La colorazione blu o violacea degli anelli del cuscinetto
                — visibile solo a cuscinetto smontato — indica che il
                cuscinetto ha raggiunto temperature superiori ai 120 °C,
                con perdita parziale della durezza della pista per
                rinvenimento termico. Un cuscinetto che ha subito
                un episodio termico va sempre sostituito anche se
                sembra ancora funzionante: la durezza superficiale
                è compromessa in modo irreversibile.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Ispezione visiva delle piste</h4>
              <p>
                A cuscinetto smontato, le piste degli anelli interno ed
                esterno si ispezionano con luce radente per rilevare:
                pitting (micro-cavità da fatica di contatto), rigature
                circolari, opacità diffusa per usura abrasiva, scagliatura
                (spalling) della superficie indurita. Anche un solo
                segno di pitting è sufficiente per sostituire il
                cuscinetto senza discussioni.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Controllo gabbia e stato degli elementi volventi</h4>
              <p>
                La gabbia del cuscinetto va controllata per deformazioni,
                rotture o cedimenti delle tasche che tengono gli elementi
                volventi. Le sfere o i rulli vanno ispezionati per
                rigature longitudinali, appiattimenti o colorazioni da
                calore. Una gabbia deformata permette agli elementi
                volventi di disporsi in modo non uniforme, concentrando
                il carico su un numero ridotto di sfere o rulli
                con effetti devastanti sulle piste.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Sostituzione preventiva — la regola d'oro</h4>
              <p>
                I cuscinetti di banco si sostituiscono preventivamente
                ogni 80 – 100 ore in uso amatoriale intenso, ogni 40 – 60
                ore in uso agonistico o enduro competitivo. In ambito
                racing puro la sostituzione avviene a ogni revisione
                motore completa, indipendentemente dall'aspetto. Usare
                sempre cuscinetti di marchi affidabili (SKF, NSK, NTN,
                FAG, Koyo) — i cuscinetti di bassa qualità non dichiarano
                la classe di gioco interna e il materiale delle piste.
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
            <span className="cardTag">Test depressione</span>
            <h3>Verificare la tenuta del carter dopo la revisione</h3>
            <p>
              Dopo ogni sostituzione dei cuscinetti e dei paraolio il
              carter va sottoposto al test di tenuta a depressione:
              si sigillano tutti i fori, si applica una pompa del vuoto
              e si porta il carter a –0,5 bar. La pressione deve
              rimanere stabile per almeno 60 secondi. Un calo indica
              una perdita da paraolio mal montato, guarnizione carter
              non sigillata o una micro-fessura nel carter. Non
              montare il motore senza aver superato questo test.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Marchi e qualità</span>
            <h3>SKF, NSK, NTN — perché il marchio conta</h3>
            <p>
              I cuscinetti di marchi primari (SKF, NSK, NTN, FAG, Koyo,
              INA) garantiscono tolleranze dimensionali certificate,
              materiali delle piste con durezza e profilo di indurimento
              noti e classe di gioco interno dichiarata e verificata.
              I cuscinetti di provenienza incerta — spesso etichettati
              con codici identici — possono avere piste meno dure,
              gabbie in materiale inferiore e gioco interno non
              classificato. Il risparmio si paga in ore, non in anni.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Upgrade racing</span>
            <h3>Cuscinetti ceramici — quando ha senso</h3>
            <p>
              I cuscinetti con elementi volventi in nitruro di silicio
              (Si₃N₄) sono più leggeri del 40% rispetto all'acciaio,
              più duri, non magnetici e con attrito di rotolamento
              inferiore. In un motore da competizione riducono le
              perdite meccaniche di 1 – 3% e migliorano la risposta
              agli alti regimi. Il costo è 10 – 20 volte superiore ai
              cuscinetti in acciaio e la sensibilità ai carichi impulsivi
              è maggiore — non adatti a motori da enduro dove impatti
              e vibrazioni sono la norma.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default CuscinettiDiBanco;