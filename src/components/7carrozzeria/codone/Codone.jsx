import "./codone.scss";
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

const Codone = () => {
  return (
    <section className="codone" id="codone">
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
              Carrozzeria — 7.4
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Codone e codino nel 2T
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il codone è la sezione posteriore della carrozzeria —
              quella che racchiude l'airbox, supporta il portanumero,
              protegge il retrotreno dagli impatti e definisce
              il profilo visivo della moto. Nelle moto a 2 tempi
              da fuoristrada è molto più di un elemento estetico:
              il codone è il primo componente a fare contatto con
              il terreno nelle cadute laterali e nelle uscite di
              carreggiata — deve assorbire l'impatto deformandosi
              elasticamente senza trasmettere forze al telaio
              o danneggiare il filtro dell'aria.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La distinzione tra codone e codino segue la logica
              della disciplina: nelle moto da enduro e trail si
              parla di codone — una struttura lunga e avvolgente
              che copre l'intera zona posteriore fino al portanumero
              con l'airbox integrato. Nelle moto da cross e nelle
              sportive stradali si parla di codino — una sezione
              più corta, più snella, a volte completamente separata
              dal portanumero posteriore che diventa un elemento
              autonomo a sé stante.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del codone</span>
              <h3>I quattro elementi della sezione posteriore</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Scocca codone — struttura principale in PP che copre airbox e retrotelaio</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Portanumero posteriore — piastra integrata o separata, regolamentare per le gare</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Parafango posteriore — prolungamento inferiore del codone che deflette fango e detriti</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Portanumero laterali — fiancate della sezione posteriore con numeri di gara leggibili di lato</span>
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
              <span className="placeholderText">Immagine / GIF — esploso codone 2T enduro con portanumero, parafango e fissaggi</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Struttura</span>
            <p>
              Esploso della sezione posteriore di una moto da enduro:
              il codone principale con la sede dell'airbox, il portanumero
              posteriore rimovibile con tre punti di fissaggio rapido,
              il parafango posteriore corto con la gommina anti-vibrazione
              sul bordo inferiore e i portanumero laterali integrati nelle
              fiancate. Tutti i pannelli sono in PP da 2,5 – 3,5 mm
              di spessore con nervature di rinforzo interne.
            </p>
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
            <span className="sectionLabel">Materiali</span>
            <h3>PP, fibra di vetro e carbonio — i materiali del codone dal serie al racing</h3>
            <p>
              Il codone subisce sollecitazioni diverse rispetto alle
              fiancatine anteriori: impatti laterali nelle cadute,
              flessione torsionale trasmessa dai fissaggi al retrotelaio,
              calore del tubo di scarico nelle moto con espansione
              laterale e accumulo di fango umido che pesa in modo
              significativo sulle zone di fissaggio. La scelta del
              materiale riflette queste esigenze specifiche.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgePP">Polipropilene</span>
                <h4>PP di serie — flessibile, economico, riparabile</h4>
              </div>
              <p>
                Il polipropilene è il materiale standard per i codoni
                di serie. La flessibilità del PP è particolarmente
                vantaggiosa nel codone — in una caduta laterale il
                pannello si flette assorbendo parte dell'energia
                d'impatto prima di tornare alla forma originale,
                senza rompersi e senza trasmettere forza al retrotelaio.
                La riparabilità a caldo con termosaldatore è un
                vantaggio reale nelle competizioni enduro multi-giorno
                dove non si può sostituire un codone rotto a metà gara.
                Il PP degrada con i raggi UV in 3 – 5 anni diventando
                fragile — trattamento protettivo silicone obbligatorio
                ogni stagione.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgePPR">PP Rinforzato</span>
                <h4>PP con rinforzo — aftermarket di qualità</h4>
              </div>
              <p>
                Il polipropilene rinforzato con fibra di vetro o
                talco usato dai produttori aftermarket di qualità
                (Acerbis, UFO, Polisport) offre maggiore rigidità
                a parità di spessore, tolleranze dimensionali più
                strette e resistenza superiore alla deformazione
                permanente da calore. Il codone aftermarket in PP
                rinforzato mantiene la forma in prossimità del tubo
                di scarico meglio del PP standard — la deformazione
                termica è uno dei problemi più comuni sui codoni
                in PP standard con espansione in posizione laterale
                destra. Pesa leggermente di più del PP standard.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeVetro">Fibra di vetro</span>
                <h4>Vetroresina — il classico del racing vintage</h4>
              </div>
              <p>
                I codoni in fibra di vetro sono stati lo standard
                del racing enduro e cross negli anni '80 e '90.
                La vetroresina permette forme complesse impossibili
                con lo stampaggio del PP, pesi inferiori del 20 – 30%
                e una rigidità superiore. Il problema è la modalità
                di rottura: la fibra di vetro si rompe in modo netto
                creando frammenti affilati, non si deforma come il PP.
                È ancora la scelta di molti preparatori artigianali
                per moto storiche e per il restauro di modelli
                degli anni '80 – '90 dove non esistono repliche in PP.
              </p>
            </div>

            <div className="matCard">
              <div className="matCardTop">
                <span className="matBadge badgeCarbon">Fibra di carbonio</span>
                <h4>Carbonio — leggero, rigido, esclusivo</h4>
              </div>
              <p>
                I codoni in carbonio sono la scelta delle preparazioni
                racing di alto livello dove ogni grammo conta. Il
                risparmio di peso rispetto al PP è del 35 – 50%
                a parità di superficie. Offrono rigidità elevatissima —
                il codone non si deforma nemmeno sotto carichi laterali
                intensi — e resistenza alla temperatura superiore al PP
                in prossimità dello scarico. Come per le plastiche,
                la rottura in caso d'impatto diretto è netta e può
                generare frammenti. Costo proibitivo per uso non
                agonistico e riparabilità praticamente nulla.
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
            <span className="captionTag">Deformazione a impatto</span>
            <p>
              Sequenza di deformazione del codone in PP durante una
              caduta laterale a 30 km/h: il pannello si flette fino
              a 40° oltre la posizione di riposo assorbendo l'energia
              d'impatto, poi recupera la forma originale in 1 – 3 secondi.
              Lo stesso impatto su un codone in fibra di carbonio
              produce una frattura netta senza deformazione preliminare.
              Il PP è intrinsecamente più sicuro per il pilota e per
              il telaio negli impatti a bassa e media energia tipici
              del fuoristrada.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine / GIF — sequenza deformazione codone PP vs carbonio a impatto laterale</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── DISCIPLINE BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="disciplineBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="disciplineHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Discipline</span>
            <h3>Cross, enduro, motard, stradale — quattro codoni con quattro logiche progettuali</h3>
            <p>
              La forma del codone non è casuale — riflette le esigenze
              specifiche di ogni disciplina in termini di protezione,
              accesso all'airbox, visibilità del numero di gara e
              posizione del portanumero. Capire queste differenze
              aiuta a scegliere il ricambio corretto e a capire
              perché un codone da cross non funziona su una moto
              da enduro e viceversa.
            </p>
          </motion.div>

          <motion.div className="disciplineGrid" variants={cardVariants}>

            <div className="disciplineCard disciplineCross">
              <div className="disciplineCardTop">
                <span className="disciplineBadge badgeCross">Motocross</span>
                <span className="disciplineTag">Slim e aerodinamico</span>
              </div>
              <h4>Codino MX — stretto, corto, con piastre numeri laterali</h4>
              <p>
                Il codino da motocross è il più snello di tutte le
                discipline. La forma stretta segue la filosofia
                del MX: libertà di movimento massima per il pilota
                nei salti, nei trasferimenti di peso e nelle curva
                veloci. I portanumero laterali sono integrati nelle
                fiancate posteriori e sono dimensionati secondo
                il regolamento FIM per la leggibilità dai commissari.
                Il parafango posteriore è corto — su una pista
                battuta non serve protezione dal fango profondo.
                La forma a coda di rondine si alza verso il retro
                per non interferire con il movimento del pilota
                quando si sposta indietro in frenata.
              </p>
            </div>

            <div className="disciplineCard disciplineEnduro">
              <div className="disciplineCardTop">
                <span className="disciplineBadge badgeEnduro">Enduro</span>
                <span className="disciplineTag">Lungo con airbox integrato</span>
              </div>
              <h4>Codone enduro — protezione totale e accesso rapido al filtro</h4>
              <p>
                Il codone da enduro è il più grande e il più funzionale.
                Deve proteggere l'airbox dall'ingresso di acqua nei
                guadi, da fango e detriti nei percorsi forestali e
                dagli impatti contro rocce e radici. Quasi sempre
                prevede un'apertura laterale o superiore per accedere
                al filtro dell'aria senza smontare l'intera sella —
                un requisito fondamentale nelle gare dove il filtro
                va controllato e pulito in corsa. Il portanumero
                posteriore è visibile frontalmente per le verifiche
                di controllo ai check point. Alcuni codoni enduro
                integrano portabottiglie o tasche per attrezzatura
                di emergenza nei modelli da trail e avventura.
              </p>
            </div>

            <div className="disciplineCard disciplineMotard">
              <div className="disciplineCardTop">
                <span className="disciplineBadge badgeMotard">Motard</span>
                <span className="disciplineTag">Compatto e tagliato</span>
              </div>
              <h4>Codino motard — essenziale, basso, stile racing urbano</h4>
              <p>
                La moto da supermoto nasce spesso dalla conversione
                di una base off-road e il codino riflette questa
                origine ibrida. Nelle preparazioni street viene
                spesso tagliato e abbassato rispetto all'originale
                off-road per ridurre l'altezza complessiva della
                moto e il profilo visivo. Il parafango posteriore
                viene sostituito con un reggitarga compatto con
                fanale integrato — nelle moto da supermoto omologate
                la luce posteriore è obbligatoria. I codini aftermarket
                specifici per supermoto hanno linee più aggressive
                e spigolate rispetto alle basi enduro da cui derivano.
              </p>
            </div>

            <div className="disciplineCard disciplineStradale">
              <div className="disciplineCardTop">
                <span className="disciplineBadge badgeStradale">Stradale / Sportiva</span>
                <span className="disciplineTag">Aerodinamico e integrato</span>
              </div>
              <h4>Codino sportivo 125 — carena integrata e profilo aerodinamico</h4>
              <p>
                Nelle 125 sportive a 2 tempi stradali (Aprilia RS,
                Honda NSR, Yamaha TZR) il codino è parte integrante
                della carena — non è removibile in modo autonomo
                dal resto della carenatura posteriore. La forma è
                studiata per ridurre la turbolenza nella scia della
                moto, dirigere il flusso d'aria verso il basso
                per controbilanciare la portanza del retrotreno
                e proteggere i componenti elettrici posteriori
                (stop, frecce, targa). Il fanale è integrato nel
                codino con design monolitico. La doppia seduta
                passeggero è spesso ricavata nella zona superiore
                del codino con una sella distaccabile.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── FUNZIONI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="funzioniBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="funzioniHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Funzioni</span>
            <h3>Protezione, portanumero, supporto — le tre ragioni per cui il codone esiste</h3>
            <p>
              Il codone è spesso considerato solo un elemento estetico
              da chi non conosce la moto da fuoristrada. In realtà
              svolge tre funzioni tecniche distinte e tutte necessarie —
              la perdita di una sola di esse compromette l'utilizzo
              in gara o la sicurezza del sistema.
            </p>
          </motion.div>

          <motion.div className="funzioniGrid" variants={cardVariants}>

            <div className="funzioniCard">
              <div className="funzioniVisual funzioniAirbox">
                <span className="funzioniRatio">Airbox</span>
                <span className="funzioniEx">Priorità 1</span>
              </div>
              <h4>Protezione dell'airbox — tenere fuori acqua e fango</h4>
              <p>
                La funzione più critica del codone nelle moto da
                fuoristrada è sigillare l'airbox dall'ingresso di
                acqua, fango e detriti. Un airbox allagato durante
                un guado può trascinare acqua nel motore con
                conseguente idroblocco — il pistone si blocca contro
                l'acqua incomprimibile e il motore si distrugge
                istantaneamente. Il codone deve formare una tenuta
                idraulica sufficiente attorno all'apertura dell'airbox
                senza bloccare completamente il flusso d'aria necessario
                al funzionamento del motore. Nei guadi profondi si
                montano snorkel specifici che portano la presa d'aria
                sopra il livello dell'acqua.
              </p>
            </div>

            <div className="funzioniCard">
              <div className="funzioniVisual funzioniNumero">
                <span className="funzioniRatio">Numero</span>
                <span className="funzioniEx">Priorità 2</span>
              </div>
              <h4>Portanumero — visibilità in gara e regolamento</h4>
              <p>
                Il portanumero posteriore e i portanumero laterali
                del codone sono regolamentati nei campionati FIM
                e FMI per dimensioni minime, contrasto colore e
                leggibilità a distanza. Il numero di gara deve
                essere visibile dal retro e dai lati della moto
                in movimento — i commissari ai check point e i
                fotografi di gara dipendono da questa visibilità
                per identificare i concorrenti. Il portanumero
                posteriore deve rimanere integro durante l'intera
                gara — in enduro un concorrente senza numero
                visibile riceve penalità che possono compromettere
                la classifica finale.
              </p>
            </div>

            <div className="funzioniCard">
              <div className="funzioniVisual funzioniStruttura">
                <span className="funzioniRatio">Struttura</span>
                <span className="funzioniEx">Priorità 3</span>
              </div>
              <h4>Supporto del retrotelaio — prevenire la torsione</h4>
              <p>
                Il codone, una volta fissato correttamente ai punti
                di ancoraggio sul retrotelaio, contribuisce alla
                rigidità torsionale della struttura posteriore.
                Un codone mancante o fissato con un solo punto su
                tre lascia il retrotelaio libero di torcersi sotto
                i carichi laterali — non abbastanza da danneggiarlo
                immediatamente, ma sufficiente a creare gioco
                percepibile nella sella e nei componenti posteriori.
                Nelle cadute laterali il codone agisce come paraurti
                che riceve l'impatto prima del retrotelaio, riducendo
                il rischio di piegatura del telaietto in alluminio.
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
              <span className="placeholderText">Immagine / GIF — confronto codoni cross, enduro, motard e sportiva 125 affiancati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Confronto discipline</span>
            <p>
              I quattro codoni affiancati mostrano chiaramente le
              differenze di lunghezza, altezza e forma: il codone
              enduro è il più voluminoso con la sede airbox ben
              protetta; il codino cross è il più stretto con le
              piastre numero sporgenti; il codino motard è il più
              basso con il portatarga integrato; il codino sportiva
              è il più aerodinamico con il profilo a goccia.
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
            <span className="sectionLabel">Diagnosi e manutenzione</span>
            <h3>Crepe, fissaggi e deformazione termica — prendersi cura del codone</h3>
            <p>
              Il codone è tra le plastiche più soggette a danni per
              la sua posizione esposta nelle cadute laterali e per
              la vicinanza al tubo di scarico. Un controllo rapido
              prima di ogni uscita può evitare perdite di tempo
              durante la gara e proteggere il motore dall'ingresso
              di acqua e fango nell'airbox.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Codone incrinato o spezzato dopo caduta laterale</h4>
              <p>
                La zona più vulnerabile del codone è il bordo inferiore
                del portanumero posteriore e gli angoli dei portanumero
                laterali — punti di concentrazione dello sforzo durante
                gli impatti. Una crepa che non attraversa completamente
                il pannello può essere riparata a caldo con termosaldatore
                in campo. Una crepa che apre un varco verso l'airbox
                è prioritaria: va sigillata immediatamente con nastro
                adesivo impermeabile (il duct tape è lo standard
                universale nei paddock di gara) prima di ripartire,
                per evitare l'ingresso di fango nel filtro dell'aria.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Codone che vibra o sbatte a regimi specifici</h4>
              <p>
                Un codone che vibra o produce un rumore di sbattimento
                a determinati regimi del motore indica quasi sempre
                un fissaggio allentato o mancante. Nei codoni a tre
                punti di fissaggio (anteriore a gancio + due posteriori
                a vite sul portanumero) anche un solo punto perso
                crea vibrazione a frequenza specifica. Verificare
                tutti i fissaggi con la moto ferma — afferrare il
                codone e tentare di sollevarlo verticalmente e di
                ruotarlo lateralmente. Qualsiasi cedimento indica
                il punto di fissaggio da intervenire prima dell'uscita.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Deformazione termica — la vicinanza allo scarico</h4>
              <p>
                Nelle moto con espansione posizionata sul lato destro
                del telaio il codone destro è soggetto a calore
                diretto. Il PP standard inizia a deformarsi
                permanentemente a 60 – 75 °C — temperature facilmente
                raggiunte in prossimità del tubo di espansione nei
                percorsi lenti dell'enduro. Una zona di codone
                deformata per calore si riconosce per la superficie
                corrugata o imbarcata. Il rimedio è l'aggiunta
                di uno scudo termico in alluminio o fibra ceramica
                tra il tubo e il codone, oppure la sostituzione
                con un pannello in PP rinforzato di qualità superiore.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Controllo tenuta airbox — guadi e pioggia intensa</h4>
              <p>
                Prima di ogni uscita in condizioni di acqua profonda
                verificare che le guarnizioni di tenuta attorno
                all'apertura dell'airbox siano integre e che il
                codone aderisca perfettamente al bordo dell'airbox
                senza spazi. La prova pratica: versare dell'acqua
                con una bottiglia sulla zona di giunzione codone-airbox
                con la moto ferma — se l'acqua penetra all'interno
                la tenuta non è sufficiente per i guadi. In quel
                caso sigillare il perimetro con del silicone
                rimovibile prima del guado o montare uno snorkel.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Ispezione portanumero — leggibilità e integrità</h4>
              <p>
                In gara il portanumero è un elemento regolamentare —
                va verificato prima del via che il numero sia leggibile,
                che le cifre non si siano staccate o scolorite e che
                la superficie del portanumero non sia coperta da fango
                secco che ne impedisce la lettura. I portanumero in
                PP diventano opachi e ingialliti in 2 – 3 stagioni
                di esposizione al sole — trattamento con prodotto
                ravvivante per plastiche ogni inizio stagione.
                In alcuni regolamenti il fondo bianco con numero
                nero (o viceversa) è obbligatorio: verificare le
                specifiche del regolamento prima di applicare
                grafiche aftermarket.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Sostituzione e ciclo di vita del codone</h4>
              <p>
                Il codone dura tipicamente 2 – 4 stagioni di utilizzo
                intenso in fuoristrada, condizionato soprattutto
                dalla frequenza delle cadute e dall'esposizione
                ai raggi UV. In ambito agonistico il codone si
                sostituisce insieme al kit plastiche completo ogni
                1 – 2 stagioni per mantenere l'integrità della tenuta
                airbox e la leggibilità del portanumero. In uso
                amatoriale la sostituzione è dettata dall'aspetto
                visivo e dall'integrità strutturale — un codone
                con più di tre crepe riparate non offre più
                la protezione originale all'airbox ed è un rischio
                nelle uscite su terreni bagnati.
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
            <span className="cardTag">Montaggio</span>
            <h3>Smontaggio e rimontaggio — l'ordine e i punti critici</h3>
            <p>
              Il codone si smonta sempre dopo la sella — nella maggior
              parte delle moto il codone è trattenuto da un gancio
              anteriore che si inserisce sotto la sella e da uno o
              due punti di fissaggio posteriori a vite sul portanumero.
              La sequenza corretta: rimuovere la sella, slacciare
              le viti posteriori del portanumero, sollevare il retro
              del codone e sfilarlo verso dietro. Al rimontaggio
              non invertire la sequenza — inserire prima il gancio
              anteriore, poi abbassare il retro e fissare le viti
              posteriori con serraggio moderato. Le viti del portanumero
              in PP vanno serrate a mano — il serraggio eccessivo
              allarga i fori e rende impossibile un fissaggio futuro.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>Codoni aftermarket — compatibilità e versioni disponibili</h3>
            <p>
              I principali produttori aftermarket (Acerbis, UFO,
              Polisport, Cycra) offrono codoni in versioni spesso
              non disponibili nell'OEM: colori diversi dal catalogo
              originale, versioni con airbox window (finestrino
              trasparente per controllare il filtro senza smontare),
              codoni rinforzati con PP a maggiore densità e versioni
              con portanumero allargato per numeri più grandi. La
              compatibilità dipende dall'anno esatto — verificare
              sempre che il codone aftermarket include anche il
              parafango posteriore corrispondente, perché spesso
              la forma di aggancio cambia tra un anno e l'altro
              anche sulla stessa generazione di moto.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Numeri di gara</span>
            <h3>Numeri regolamentari — dimensioni, contrasto e posizione</h3>
            <p>
              Il regolamento FIM per l'enduro prescrive numeri
              di altezza minima 140 mm sul portanumero posteriore
              e 80 mm sui laterali, con contrasto obbligatorio
              tra cifre e fondo (nero su bianco, bianco su nero,
              nero su arancio). Le cifre devono essere leggibili
              a 10 metri di distanza in condizioni di luce normale.
              I numeri adesivi pretagliati devono essere applicati
              su superficie pulita e sgrassata con IPA — quelli
              applicati su plastica sporca si staccano al primo guado.
              Prima di ogni gara verificare che tutti i numeri siano
              integri, non sollevati agli angoli e non ricoperti
              da grafiche aftermarket che ne riducono la leggibilità.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Codone;
