import "./catena.scss";
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

const Catena = () => {
  return (
    <section className="catena" id="catena">
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
              Trasmissione finale
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La catena
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La catena è il collegamento meccanico flessibile tra
              pignone e corona: trasferisce la coppia del motore alla
              ruota posteriore mantenendo sincronismo geometrico tra
              due organi distanti, mobili e soggetti a carichi impulsivi.
              È uno dei componenti più sottovalutati della moto proprio
              perché sembra semplice. In realtà è una struttura articolata
              di piastre, perni, bussole e rulli che lavora in trazione,
              flessione locale, urto e abrasione a ogni singola rotazione.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Una catena buona non deve solo “resistere”: deve scorrere
              correttamente, piegarsi nel modo giusto attorno a pignone
              e corona, mantenere il proprio passo il più possibile
              vicino al nominale, sopportare sporco e vibrazioni e
              non introdurre rigidità anomala nel sistema. Quando la
              catena sta bene, la trasmissione è fluida e leggibile.
              Quando sta male, tutto il sistema peggiora: usura dei denti,
              rumore, colpi, perdita di trazione, rotture e stress sui
              cuscinetti dell'albero secondario e della ruota.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Le variabili decisive</span>
              <h3>Le cinque grandezze che definiscono una catena corretta</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="pitch">P</span>
                <span className="miniText">
                  Passo — distanza tra i perni consecutivi: 520, 428 e altri; deve combaciare perfettamente con pignone e corona
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex" data-color="seal">S</span>
                <span className="miniText">
                  Tenute — standard, O-ring, X-ring: cambiano attrito, tenuta del grasso interno e durata complessiva
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex" data-color="load">T</span>
                <span className="miniText">
                  Carico di trazione — la catena deve reggere picchi impulsivi, non solo il valore medio della coppia motore
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex" data-color="mount">M</span>
                <span className="miniText">
                  Montaggio — chiusura corretta, allineamento ruota e gioco giusto determinano metà della vita utile
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex" data-color="wear">U</span>
                <span className="miniText">
                  Usura e allungamento — la catena non “si allunga” davvero: si usurano perni e bussole e aumenta il passo effettivo
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── STRUTTURA BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="strutturaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="strutturaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Struttura interna</span>
            <h3>La catena non è un nastro unico — è una successione di giunti articolati sotto carico</h3>
            <p>
              Ogni maglia della catena è un piccolo cuscinetto articolato.
              Le piastre esterne e interne tengono insieme il sistema,
              i perni fanno da asse, le bussole portano il carico locale
              e i rulli rotolano o impattano sui denti di pignone e corona.
              Il comportamento della catena nasce dall'interazione di
              questi elementi, non dal metallo in astratto.
            </p>
          </motion.div>

          <motion.div className="strutturaGrid" variants={cardVariants}>
            <div className="strutturaCard strutturaPerni">
              <span className="strutturaTag">Perni</span>
              <h4>I veri elementi critici della fatica</h4>
              <p>
                I perni lavorano come assi dei giunti e sopportano
                taglio, contatto e micro-rotazioni continue. Quando
                la catena invecchia, gran parte del degrado parte da lì:
                usura superficiale, perdita di materiale e aumento del
                gioco relativo tra perno e bussola.
              </p>
            </div>

            <div className="strutturaCard strutturaBussole">
              <span className="strutturaTag">Bussole e rulli</span>
              <h4>La zona in cui il contatto con i denti diventa reale</h4>
              <p>
                La bussola crea la superficie di contatto interna con
                il perno; il rullo è invece l'elemento che incontra
                il dente. Se lubrificazione, passo e geometria non sono
                corretti, il rullo non rotola bene ma urta — ed è lì
                che comincia l'usura cattiva.
              </p>
            </div>

            <div className="strutturaCard strutturaPiastre">
              <span className="strutturaTag">Piastre</span>
              <h4>Contengono il carico di trazione e mantengono la geometria</h4>
              <p>
                Le piastre sono gli elementi che “tengono insieme” la
                catena in trazione. Devono avere resistenza sufficiente
                per non deformarsi plasticamente sotto i picchi di carico,
                ma anche tolleranze corrette per non irrigidire i giunti
                durante il montaggio.
              </p>
            </div>
          </motion.div>
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
            <h3>Catena standard, O-ring, X-ring — stessa funzione, comportamento molto diverso</h3>
            <p>
              Le catene non si distinguono solo per il passo ma anche
              per il sistema di tenuta del lubrificante interno ai
              giunti. È qui che si decide gran parte del compromesso
              tra attrito, scorrevolezza, manutenzione e durata.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>
            <div className="tipoCard tipoStandard">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeStandard">Standard / non sealed</span>
              </div>
              <h4>Leggera, libera, ma molto dipendente dalla manutenzione</h4>
              <p>
                La catena standard non usa anelli di tenuta tra piastra
                interna ed esterna. Questo riduce attrito e peso, ma
                espone maggiormente il giunto a contaminazione e perdita
                di lubrificante. È una soluzione tipica del racing puro,
                dove le ore di lavoro sono poche, la manutenzione è
                continua e ogni resistenza parassita conta.
              </p>
              <div className="tipoBars tipoBarsStandard">
                <div className="tipoBar" style={{ height: "88%" }} />
                <div className="tipoBar" style={{ height: "100%" }} />
                <div className="tipoBar" style={{ height: "86%" }} />
                <div className="tipoBar" style={{ height: "62%" }} />
                <div className="tipoBar" style={{ height: "40%" }} />
              </div>
              <span className="tipoLabel">Basso attrito, durata inferiore se sporca o asciutta</span>
            </div>

            <div className="tipoCard tipoOring">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeOring">O-ring</span>
              </div>
              <h4>Più protetta, più longeva, leggermente più resistente allo scorrimento</h4>
              <p>
                La catena O-ring inserisce un anello elastomerico tra
                le piastre per trattenere il grasso interno e tenere
                fuori sporco e acqua. Il vantaggio è una vita utile
                molto più alta nell'uso stradale, enduro turistico o
                dual sport. Lo svantaggio è un attrito interno maggiore
                rispetto a una catena racing priva di tenute.
              </p>
              <div className="tipoBars tipoBarsOring">
                <div className="tipoBar" style={{ height: "58%" }} />
                <div className="tipoBar" style={{ height: "72%" }} />
                <div className="tipoBar" style={{ height: "92%" }} />
                <div className="tipoBar" style={{ height: "100%" }} />
                <div className="tipoBar" style={{ height: "94%" }} />
              </div>
              <span className="tipoLabel">Più durata e protezione, risposta meno “libera” di una racing pura</span>
            </div>

            <div className="tipoCard tipoXring">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeXring">X-ring / evolute</span>
              </div>
              <h4>La soluzione moderna di compromesso tra tenuta e attrito</h4>
              <p>
                Le tenute X-ring o derivate cercano di mantenere il
                vantaggio della protezione interna riducendo la superficie
                di contatto e quindi l'attrito rispetto alle O-ring.
                È una soluzione molto diffusa su moto stradali, adventure
                e applicazioni dove si vuole durata senza rinunciare
                troppo alla scorrevolezza.
              </p>
              <div className="tipoBars tipoBarsXring">
                <div className="tipoBar" style={{ height: "70%" }} />
                <div className="tipoBar" style={{ height: "84%" }} />
                <div className="tipoBar" style={{ height: "100%" }} />
                <div className="tipoBar" style={{ height: "96%" }} />
                <div className="tipoBar" style={{ height: "82%" }} />
              </div>
              <span className="tipoLabel">Protezione alta, attrito più contenuto rispetto alle O-ring classiche</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── PASSO BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="passoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="passoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Passo e dimensionamento</span>
            <h3>520, 428 e oltre — il passo non è un dettaglio numerico ma una geometria precisa</h3>
            <p>
              Il passo catena è la distanza tra i centri di due perni
              consecutivi. Determina la geometria di ingaggio con pignone
              e corona: se non coincide esattamente, la catena non lavora.
              Non esiste adattamento accettabile tra passi diversi.
            </p>
          </motion.div>

          <motion.div className="passoContent" variants={cardVariants}>
            <div className="passoFormula">
              <span className="formulaEq">p = distanza centro-centro tra perni</span>
              <span className="formulaLabel">Definizione di passo</span>

              <span className="formulaEq" style={{ marginTop: "14px" }}>520 ≠ 428 ≠ 525</span>
              <span className="formulaLabel">Ogni passo richiede pignone e corona dedicati</span>

              <span className="formulaEq" style={{ marginTop: "14px" }}>p effettivo ↑ = usura giunto ↑</span>
              <span className="formulaLabel">Il “passo allungato” è il sintomo della catena usurata</span>
            </div>

            <div className="passoText">
              <p>
                Quando si dice che una catena è “520” si parla di una
                famiglia dimensionale precisa: larghezza interna, passo,
                compatibilità con i denti e capacità di carico. Il 520
                è comune nel fuoristrada e in molte applicazioni stradali
                leggere; il 428 è più leggero e usato dove il peso conta
                molto, ma sopporta carichi inferiori.
              </p>

              <p>
                La catena usurata non si allunga come una molla: si
                consuma il giunto tra perno e bussola, aumenta il gioco
                relativo e quindi cresce la distanza media effettiva tra
                i perni. Il passo reale diventa più grande del nominale.
                A quel punto i rulli non si allineano più bene ai denti
                e la trasmissione comincia a mangiarsi da sola.
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
              <span className="placeholderText">
                Immagine / GIF — sezione esplosa di una maglia catena: piastre interne, piastre esterne, perni, bussole, rulli e tenute O-ring / X-ring
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Il giunto è tutto</span>
            <p>
              Il cuore della catena non è la piastra ma il giunto. È lì
              che si concentra la vera usura: micro-scorrimento, carico
              di contatto, ingresso di sporco, perdita di lubrificante e
              aumento del passo effettivo. Una catena visivamente bella
              ma con giunti secchi o rigidi è meccanicamente già compromessa.
            </p>
          </div>
        </motion.div>

        {/* ── CHIUSURA BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="chiusuraBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="chiusuraHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Chiusura della catena</span>
            <h3>Falsa maglia, clip, maglia a ribadire — il punto di chiusura decide la sicurezza dell'intero anello</h3>
            <p>
              La chiusura della catena è uno dei temi più ignorati e più
              importanti. La catena può essere perfetta, ma se il punto
              di giunzione è montato male o scelto male, l'anello intero
              è vulnerabile. Qui non si parla di preferenze estetiche:
              si parla di affidabilità e sicurezza.
            </p>
          </motion.div>

          <motion.div className="chiusuraGrid" variants={cardVariants}>
            <div className="chiusuraCard chiusuraClip">
              <div className="chiusuraCardTop">
                <span className="chiusuraBadge badgeClip">Falsa maglia / clip master link</span>
              </div>
              <h4>Rapida da montare, comoda in emergenza, ma più sensibile agli errori</h4>
              <p>
                La falsa maglia con clip consente di chiudere la catena
                senza ribaditura. È molto pratica nel fuoristrada, nelle
                riparazioni veloci e nelle applicazioni dove si smonta
                spesso. Ma ha un punto debole: dipende fortemente dal
                verso corretto della clip, dal pieno inserimento della
                piastra esterna e dall'assenza di urti o interferenze che
                possano sfilare la clip.
              </p>
              <p>
                Montata bene può funzionare; montata male è una delle
                cause più banali di perdita catena. La clip deve avere
                la parte chiusa orientata nel verso di avanzamento della
                catena, in modo che eventuali contatti non la aprano.
                Non è un dettaglio: è la differenza tra una chiusura
                accettabile e un cedimento evitabile.
              </p>
            </div>

            <div className="chiusuraCard chiusuraRivetto">
              <div className="chiusuraCardTop">
                <span className="chiusuraBadge badgeRivetto">Maglia ribadita / rivet link</span>
              </div>
              <h4>La soluzione più sicura e più corretta per l'uso definitivo</h4>
              <p>
                La maglia ribadita si chiude deformando i terminali dei
                perni con apposito attrezzo, creando un'unione meccanica
                analoga alle altre maglie permanenti della catena.
                È la soluzione preferibile su stradali, motard veloci,
                applicazioni ad alta velocità e in generale quando si
                cerca la chiusura più affidabile nel lungo periodo.
              </p>
              <p>
                Il limite è che va montata con criterio: se ribadisci
                troppo, irrigidisci il giunto; se ribadisci poco, la
                piastra non è trattenuta correttamente. Serve l'attrezzo
                giusto e serve misurare. Ma se fatta bene, è superiore
                alla clip per sicurezza strutturale.
              </p>
            </div>
          </motion.div>

          <motion.div className="alternativaPanel" variants={cardVariants}>
            <span className="alternativaTag">L'alternativa alla falsa maglia</span>
            <h4>Quando scegliere davvero la maglia ribadita al posto della clip</h4>
            <p>
              Se la moto è stradale, se supera regolarmente velocità
              elevate, se fa lunghi trasferimenti, se monta catene con
              tenute o se vuoi chiudere il kit in modo “definitivo”, la
              scelta migliore è la maglia ribadita. La falsa maglia a clip
              resta pratica e sensata nel cross, nell'enduro da assistenza
              rapida o dove la velocità media è più bassa e la possibilità
              di smontaggio veloce ha valore operativo. Ma la soluzione
              strutturalmente più solida, quando non hai bisogno di aprire
              spesso, è la ribaditura corretta.
            </p>
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
            <h3>Tensione, pulizia e lubrificazione — la vita della catena si decide qui, non al banco ricambi</h3>
            <p>
              La maggior parte delle catene non muore per difetto di
              fabbrica ma per manutenzione sbagliata: troppo tese,
              troppo lente, sporche, lavate male, lubrificate con prodotti
              inadatti o ignorate finché non diventano rumorose.
            </p>
          </motion.div>

          <motion.div className="manutGrid" variants={cardVariants}>
            <div className="manutCard">
              <div className="manutCardNum">1</div>
              <h4>Tensione corretta — né tesa come una corda né abbandonata</h4>
              <p>
                Una catena troppo tesa carica cuscinetti, albero secondario
                e denti del pignone; una troppo lenta sbatte, salta e
                impatta sui denti in modo irregolare. Il gioco corretto
                va misurato secondo manuale, nel punto di massima tensione
                del percorso, non “a occhio”.
              </p>
            </div>

            <div className="manutCard">
              <div className="manutCardNum">2</div>
              <h4>Pulizia giusta — togliere abrasivo senza distruggere le tenute</h4>
              <p>
                Solventi troppo aggressivi o spazzole metalliche possono
                danneggiare tenute e finiture superficiali. La pulizia
                deve rimuovere fango, sabbia e residui, ma senza trasformare
                la manutenzione in un'operazione più distruttiva dello sporco.
              </p>
            </div>

            <div className="manutCard">
              <div className="manutCardNum">3</div>
              <h4>Lubrificazione mirata — dove serve davvero e quando farla</h4>
              <p>
                Il lubrificante esterno non sostituisce il grasso interno
                del giunto, ma serve a ridurre attrito esterno, proteggere
                da corrosione e aiutare il contatto rullo-dente. Va applicato
                sulla parte interna del ramo inferiore o nella zona in cui
                il prodotto può penetrare meglio per capillarità.
              </p>
            </div>

            <div className="manutCard">
              <div className="manutCardNum">4</div>
              <h4>Controllo punti duri — la catena sana deve piegarsi in modo uniforme</h4>
              <p>
                Una catena con maglie rigide o punti duri non lavora più
                come una successione omogenea di giunti. Quelle maglie
                entreranno male su pignone e corona, generando colpi,
                rumore e tensioni locali molto superiori alla media.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── USURA BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="usuraBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="usuraHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Usura e cedimento</span>
            <h3>La catena non avvisa con una sola crepa — prima peggiora in molti modi diversi</h3>
            <p>
              Il decadimento della catena è progressivo. Prima compare
              l'usura del giunto, poi la variazione di passo, poi il
              peggioramento di scorrevolezza, poi l'usura accelerata di
              pignone e corona. La rottura finale è spesso solo l'ultimo
              stadio di un processo visibile da tempo.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>
            <div className="usuraCard usuraCard1">
              <span className="usuraBadge">Sintomo</span>
              <h4>Allungamento anomalo del passo effettivo</h4>
              <p>
                La catena richiede continui ritensionamenti e non mantiene
                più stabile il gioco. È il segnale classico di usura del
                giunto: non è la piastra che si stira, è il sistema perno-
                bussola che ha perso precisione.
              </p>
            </div>

            <div className="usuraCard usuraCard2">
              <span className="usuraBadge">Sintomo</span>
              <h4>Punti duri che ritornano sempre nello stesso punto</h4>
              <p>
                Se ruotando la ruota trovi sempre una zona più rigida,
                la catena ha maglie che non articolano più bene oppure
                lavora con usure differenziate lungo il suo sviluppo.
                È un segnale serio, non un difetto “tollerabile”.
              </p>
            </div>

            <div className="usuraCard usuraCard3">
              <span className="usuraBadge">Sintomo</span>
              <h4>Rumore secco, trascinamento o vibrazione irregolare</h4>
              <p>
                Una catena sana fa rumore meccanico contenuto e regolare.
                Quando compaiono colpi secchi, trascinamento rumoroso o
                variazioni ritmiche, spesso c'è un problema di passo,
                lubrificazione, tensione o allineamento.
              </p>
            </div>

            <div className="usuraCard usuraCard4">
              <span className="usuraBadge">Sintomo</span>
              <h4>Deterioramento visibile delle tenute o clip deformata</h4>
              <p>
                Se gli O-ring / X-ring sono tagliati, mancanti o cotti,
                il grasso interno non è più protetto. Se la clip della
                falsa maglia è piegata o sembra poco seduta, la chiusura
                va considerata inaffidabile fino a prova contraria.
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
            <span className="captionTag">Punto duro e passo usurato</span>
            <p>
              La cosa più importante da far vedere in un'immagine tecnica
              sulla catena non è solo la ruggine o la sporcizia, ma il
              comportamento meccanico degradato: una maglia che non piega,
              un tratto con passo effettivo aumentato, una tenuta rovinata,
              un rullo che non si posiziona bene sul dente. È lì che si
              capisce davvero perché una catena vecchia distrugga il resto
              della trasmissione.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Immagine — catena nuova vs usurata: maglia sana, punto duro, O-ring danneggiato, passo aumentato e clip montata correttamente / scorrettamente
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── ERRORI BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="erroriBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="erroriHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Errori comuni</span>
            <h3>I quattro errori che accorciano la vita di una catena prima del tempo</h3>
            <p>
              La catena è molto più sensibile agli errori banali di
              quanto sembri. Spesso viene condannata da scelte sbagliate
              molto prima di esaurire davvero il proprio potenziale.
            </p>
          </motion.div>

          <motion.div className="erroriGrid" variants={cardVariants}>
            <div className="erroreCard erroreCard1">
              <span className="erroreNum">01</span>
              <h4>Tenderla troppo “per sicurezza”</h4>
              <p>
                È uno degli errori più diffusi. Una catena troppo tesa
                non lavora meglio: lavora male, irrigidisce il sistema
                sospensione-trasmissione e scarica carichi inutili sui
                cuscinetti e sui denti.
              </p>
            </div>

            <div className="erroreCard erroreCard2">
              <span className="erroreNum">02</span>
              <h4>Montare solo la catena nuova su pignone e corona consumati</h4>
              <p>
                Una catena nuova che ingaggia denti usurati viene forzata
                immediatamente a lavorare male. Il risultato è un degrado
                rapido e una falsa impressione di “catena scarsa”, quando
                il problema vero è il kit non sostituito insieme.
              </p>
            </div>

            <div className="erroreCard erroreCard3">
              <span className="erroreNum">03</span>
              <h4>Usare falsa maglia con clip montata nel verso sbagliato</h4>
              <p>
                La clip va orientata correttamente nel verso di rotazione
                della catena. In caso contrario, urti e contatti possono
                favorirne l'apertura. È un errore semplice ma grave.
              </p>
            </div>

            <div className="erroreCard erroreCard4">
              <span className="erroreNum">04</span>
              <h4>Lubrificare tanto ma non pulire mai</h4>
              <p>
                Una catena coperta di grasso vecchio e abrasivo non è
                “protetta”: è impastata con materiale che accelera usura
                e trascinamento. Lubrificare senza pulire può peggiorare
                il problema invece di risolverlo.
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
            <span className="cardTag">Kit trasmissione</span>
            <h3>Catena, pignone e corona vanno letti come un sistema unico</h3>
            <p>
              Nessun componente della trasmissione finale lavora da solo.
              Una catena perfetta su denti usurati lavora male; una corona
              nuova con catena stanca si consuma in fretta; un pignone
              rovinato amplifica ogni difetto del resto del kit. Per questo
              il ragionamento corretto è quasi sempre sul kit completo.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Racing vs durata</span>
            <h3>La catena migliore non è sempre la più leggera, ma quella coerente con l'uso</h3>
            <p>
              Una catena standard leggera può essere eccellente in un
              contesto racing controllato e pessima nell'uso quotidiano
              sporco e poco manutenuto. Al contrario una X-ring può essere
              perfetta su strada e inutile in certe applicazioni da gara.
              La scelta giusta nasce sempre dal contesto reale.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Regola pratica</span>
            <h3>Se la trasmissione diventa rumorosa, irregolare o difficile da regolare, la catena è tra i primi indiziati</h3>
            <p>
              Molti cercano il problema altrove — frizione, cambio,
              cuscinetti, motore — quando i primi segnali arrivano già
              dalla catena. Rumore ritmico, gioco che cambia, punti duri,
              risposta sporca al gas e usura denti sono tutti indicatori
              che la catena va controllata immediatamente.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Catena;