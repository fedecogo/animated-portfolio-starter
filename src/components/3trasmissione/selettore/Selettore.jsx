import "./selettore.scss";
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

const Selettore = () => {
  return (
    <section className="selettore" id="selettore">
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
              Trasmissione e cambio
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il selettore<br />del cambio
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il selettore è il sistema meccanico che traduce il
              movimento del piede del pilota in uno spostamento
              preciso dei manicotti scorrevoli sugli alberi.
              È composto da quattro elementi in cascata — pedale,
              leverismo esterno, tamburo selettore e forcelle —
              e la sua funzione non è semplicemente trasmettere
              un movimento: è garantire che ogni pressione del pedale
              produca esattamente e solamente il cambio di una marcia,
              nella direzione corretta, con ritorno automatico
              alla posizione di riposo.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Il tamburo selettore è il componente più elegante
              dell'intera scatola cambio — un cilindro con scanalature
              sagomate sulla superficie che codifica fisicamente
              la logica sequenziale del cambio. La sua geometria
              rende impossibile inserire due marce simultaneamente
              o saltare una marcia involontariamente, senza alcun
              sistema elettronico o di controllo attivo.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">La catena cinematica</span>
              <h3>Dal piede all'ingranaggio</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Pedale — leva esterna azionata dal piede sinistro del pilota</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Leverismo esterno + pawl — converte il movimento in rotazione dell'albero selettore</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Tamburo selettore — cilindro scanalato che guida le forcelle in posizioni precise</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Forcelle di selezione — spostano assialmente i manicotti scorrevoli sugli alberi</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">05</span>
                <span className="miniText">Manicotti scorrevoli — bloccano l'ingranaggio folle all'albero inserendo la marcia</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── TAMBURO BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="tamburoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tamburoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il tamburo selettore</span>
            <h3>Come le scanalature codificano ogni marcia — geometria e logica meccanica</h3>
            <p>
              Il tamburo selettore è un cilindro in acciaio temprato
              con scanalature sagomate fresate sulla superficie cilindrica
              esterna. I perni delle forcelle scorrono in queste
              scanalature come binari — quando il tamburo ruota
              di uno step, le scanalature guidano le forcelle in nuove
              posizioni con precisione millimetrica. È una macchina
              a camme rotativa: la forma della scanalatura è il programma,
              la rotazione è l'esecuzione.
            </p>
          </motion.div>

          <motion.div className="tamburoGrid" variants={cardVariants}>

            <div className="tamburoCard">
              <div className="tamburoVisual tambuScanalature">
                <span className="tambuIcon">≋</span>
                <span className="tambuLabel">Scanalature sagomate</span>
              </div>
              <h4>La geometria delle cave — perché quella forma</h4>
              <p>
                Ogni scanalatura sulla superficie del tamburo è
                una curva tridimensionale che collega le posizioni
                delle forcelle per ogni marcia. Nella transizione
                da una marcia a quella successiva la cava guida
                la forcella lungo un profilo preciso — prima
                indietro (rilascio del manicotto dalla marcia
                attiva), poi in avanti (innesto della nuova marcia).
                La larghezza della scanalatura determina il gioco
                laterale del perno della forcella e quindi
                la precisione del cambio. Scanalature consumate
                aumentano il gioco, rendendo il cambio vago
                e impreciso.
              </p>
            </div>

            <div className="tamburoCard">
              <div className="tamburoVisual tambuPosizioni">
                <span className="tambuIcon">◉</span>
                <span className="tambuLabel">Posizioni indentate</span>
              </div>
              <h4>Le posizioni di arresto — detent e sfera di ritenuta</h4>
              <p>
                Il tamburo non gira liberamente — ha posizioni di
                arresto discrete, una per ogni marcia più il neutro.
                Il meccanismo di arresto (detent) è composto da
                una sfera in acciaio trattenuta da una molla che
                si impegna in cavità ricavate su un disco laterale
                del tamburo o su un profilo seghettato. Questo
                sistema genera il "click" tattile che il pilota
                sente al cambio marcia confermando l'innesto e
                impedisce al tamburo di fermarsi in posizioni
                intermedie tra una marcia e l'altra — che causerebbero
                il doppio innesto o la marcia in folle involontaria.
              </p>
            </div>

            <div className="tamburoCard">
              <div className="tamburoVisual tambuDoppio">
                <span className="tambuIcon">⊘</span>
                <span className="tambuLabel">Anti doppio innesto</span>
              </div>
              <h4>Impossibilità del doppio innesto — geometria come sicurezza</h4>
              <p>
                La geometria delle scanalature rende fisicamente
                impossibile che due forcelle siano simultaneamente
                in posizione di innesto. Mentre una forcella sposta
                il manicotto per inserire la nuova marcia, le altre
                sono mantenute in posizione neutrale dalle rispettive
                cave. Non esiste un componente "di sicurezza"
                separato — è la forma stessa del tamburo che garantisce
                questa proprietà in modo indefettibile. È per questo
                che un tamburo selettore danneggiato o con cave
                consumate è un componente da sostituire immediatamente:
                la sua integrità geometrica è la sicurezza del cambio.
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
              <span className="placeholderText">Immagine / GIF — tamburo selettore con forcelle montate, dettaglio scanalature e perni di guida</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Tamburo e forcelle</span>
            <p>
              Il tamburo con le due o tre forcelle montate: i perni
              cilindrici delle forcelle scorrono nelle cave sagomate
              della superficie. Ruotando il tamburo di uno step si
              vede come le forcelle si spostano in modo coordinato —
              una si muove mentre le altre mantengono la posizione,
              rendendo visibile la logica meccanica che governa
              il cambio sequenziale.
            </p>
          </div>
        </motion.div>

        {/* ── FORCELLE BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="forcelleBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="forcelleHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Le forcelle di selezione</span>
            <h3>Costruzione, materiali e perché si piegano</h3>
            <p>
              Le forcelle di selezione sono le ultime ante prima dei
              manicotti — i componenti che traducono il movimento
              del tamburo in uno spostamento assiale diretto sui
              manicotti scorrevoli. Sono semplici nella forma
              ma critiche nella precisione: un errore di pochi
              decimi di millimetro nel loro profilo o allineamento
              si traduce in cambi imprecisi o marce che saltano.
            </p>
          </motion.div>

          <motion.div className="forcelleGrid" variants={cardVariants}>

            <div className="forcellaCard forcellaCostruzione">
              <span className="forcellaBadge badgeCostruzione">Costruzione</span>
              <h4>Forma e materiale — forcine in acciaio stampato</h4>
              <p>
                La forcella è una staffa a forma di U rovesciata
                con due "dita" che abbracciano il canale del
                manicotto scorrevole. Il perno superiore scorre
                nella cava del tamburo; le estremità delle dita
                entrano nel canale fresato nel manicotto.
                Il materiale è acciaio stampato e temprato —
                sufficientemente duro da resistere all'usura
                delle dita, ma con un grado di tenacità che
                permette una lieve flessione elastica sotto
                carico impulsivo invece della rottura secca.
                Nei cambi racing si usano forcelle in acciaio
                forgiato con tolleranze più strette e dita
                più massicce.
              </p>
            </div>

            <div className="forcellaCard forcellaDita">
              <span className="forcellaBadge badgeDita">Usura</span>
              <h4>Le dita — il punto di usura critico</h4>
              <p>
                Le estremità delle dita che scorrono nel canale
                del manicotto sono i punti di usura primari della
                forcella. Il contatto è quasi continuo — anche
                con marcia inserita le dita mantengono il manicotto
                in posizione. L'usura si manifesta come arrotondamento
                delle estremità, riduzione dello spessore e,
                nei casi avanzati, come una riduzione della profondità
                di impegno nel canale del manicotto. Una forcella
                con dita consumate non mantiene il manicotto
                sufficientemente in posizione — risultato: marcia
                che salta sotto carico. Si verifica misurando
                lo spessore residuo delle dita con micrometro.
              </p>
            </div>

            <div className="forcellaCard forcellaDeformazione">
              <span className="forcellaBadge badgeDeformazione">Deformazione</span>
              <h4>Perché si piega — cambi violenti e sovraccarico</h4>
              <p>
                Una forcella si piega principalmente per due cause:
                cambio eseguito con coppia piena senza frizione
                (il manicotto trova resistenza e la forcella
                subisce il carico impulsivo invece che il cane
                di innesto) oppure blocco improvviso del cambio
                per un oggetto estraneo o un dente di ingranaggio
                rotto che si inceppa nel meccanismo. Una forcella
                piegata, anche di pochi decimi, cambia l'angolo
                di spinta sul manicotto generando una componente
                di forza radiale invece che puramente assiale —
                accelera l'usura del manicotto e produce cambi
                irregolari. Non si raddrizza: si sostituisce.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── LEVERISMO BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="leverismoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="leverismoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Leverismo esterno e pawl</span>
            <h3>Il meccanismo a cricchetto — step preciso e ritorno automatico</h3>
            <p>
              Il leverismo esterno è l'interfaccia tra il pedale
              e il tamburo selettore. Il suo compito è convertire
              il movimento angolare — verso l'alto o verso il basso
              del piede — in una rotazione di esattamente uno step
              del tamburo, poi tornare in posizione neutra per il
              cambio successivo. Lo fa tramite un sistema a cricchetto
              con due pawl (denti di arresto) e molle di ritorno.
            </p>
          </motion.div>

          <motion.div className="leverismoSteps" variants={cardVariants}>

            <div className="leverismoStep">
              <div className="leverismoNum">A</div>
              <div className="leverismoContent">
                <h4>Pressione sul pedale — il pawl di azionamento aggancia</h4>
                <p>
                  Quando il pilota preme il pedale, il leverismo
                  ruota sull'asse del tamburo selettore. Un pawl
                  di azionamento — una linguetta in acciaio con
                  molla di carico — si impegna nei denti del disco
                  dentato solidale al tamburo e lo trascina in
                  rotazione di uno step. La forma asimmetrica
                  dei denti permette l'aggancio in una sola
                  direzione per ogni pawl: uno gestisce la salita
                  di marcia, l'altro la scalata. La forza della
                  molla del pawl determina in parte la "resistenza"
                  del pedale.
                </p>
              </div>
            </div>

            <div className="leverismoStep">
              <div className="leverismoNum">B</div>
              <div className="leverismoContent">
                <h4>Arresto del tamburo — la sfera di detent entra nella sede</h4>
                <p>
                  Mentre il tamburo ruota di uno step, la sfera
                  del detent — trattenuta dalla sua molla — scivola
                  fuori dalla sede della marcia corrente e si
                  impegna nella sede della marcia successiva.
                  Il "click" che si sente e si sente sotto il piede
                  è esattamente questo momento. La sfera di detent
                  e la sua molla devono essere in perfetto stato:
                  una molla debole permette al tamburo di non
                  arrivare completamente in posizione, lasciando
                  il cambio in una condizione intermedia instabile.
                </p>
              </div>
            </div>

            <div className="leverismoStep">
              <div className="leverismoNum">C</div>
              <div className="leverismoContent">
                <h4>Rilascio del pedale — ritorno in neutro e reset del pawl</h4>
                <p>
                  Al rilascio del pedale la molla di ritorno del
                  leverismo riporta il pedale e il braccio nella
                  posizione centrale neutra. Durante il ritorno
                  il pawl di azionamento scivola sui denti del
                  disco senza agganciare — grazie alla sua forma
                  asimmetrica — riposizionandosi per il cambio
                  successivo. Il tamburo rimane nella posizione
                  raggiunta, trattenuto dalla sfera di detent.
                  Il sistema è pronto per il prossimo cambio
                  indipendentemente da quanto velocemente
                  si rilascia il pedale.
                </p>
              </div>
            </div>

            <div className="leverismoStep">
              <div className="leverismoNum">D</div>
              <div className="leverismoContent">
                <h4>Regolazione dell'altezza pedale — spesso trascurata</h4>
                <p>
                  L'altezza del pedale del cambio rispetto alla
                  pedana è regolabile tramite un rosone o un dado
                  di bloccaggio sull'attacco al leverismo. La
                  posizione corretta dipende dalle scarpe, dalla
                  posizione di guida e dal tipo di utilizzo.
                  Una regolazione sbagliata modifica la corsa
                  disponibile verso l'alto e verso il basso,
                  rendendo i cambi in salita o in scalata
                  più corti e meno decisi. In uso agonistico
                  il pedale si abbassa rispetto all'uso stradale
                  per facilitare i cambi rapidi senza sollevare
                  il piede dalla pedana.
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
            <span className="captionTag">Pawl e detent</span>
            <p>
              Il meccanismo a cricchetto smontato: il disco dentato
              solidale al tamburo, il pawl di azionamento con la
              sua molla di carico, e la sfera di detent con la
              cavità di arresto. Tre componenti piccoli e spesso
              ignorati che determinano la qualità tattile di ogni
              cambio marcia. Un pawl con la molla scarica
              o la sfera di detent consumata si traduce
              in un cambio privo di quel "click" deciso
              che conferma l'innesto completo.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — leverismo esterno smontato con pawl, disco dentato e sfera di detent</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="diagnBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e usura</span>
            <h3>Localizzare il problema nel selettore prima di aprire il carter</h3>
            <p>
              I problemi al selettore producono sintomi diversi da quelli
              degli alberi o degli ingranaggi — e spesso si possono
              diagnosticare e persino risolvere senza aprire il carter
              trasmissione. Saper distinguere un problema al leverismo
              esterno da uno al tamburo interno risparmia ore di lavoro.
            </p>
          </motion.div>

          <motion.div className="diagnGrid" variants={cardVariants}>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Neutro introvabile — tamburo che non si centra</h4>
              <p>
                Il neutro non si trova tra prima e seconda o si trova
                solo in modo inaffidabile. Possibile causa esterna:
                molla di ritorno del leverismo debole o rotta, che
                non riporta il pedale completamente in centro —
                il pawl rimane parzialmente agganciato e impedisce
                al tamburo di fermarsi in neutro. Verifica: con il
                motore spento, controllare che il pedale torni in
                posizione centrata e ferma da solo dopo ogni cambio.
                Se è molle o non torna, il problema è nel leverismo
                esterno — intervenibile senza smontare il carter.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Cambio vago — nessun click, marcia incerta</h4>
              <p>
                Il cambio avviene senza quel feedback tattile netto
                e la marcia inserita sembra instabile. Il tamburo
                non arriva completamente in posizione o ci arriva
                senza trattenervisi. Causa probabile: sfera di detent
                consumata (non più sferica — ovalizzata dall'usura),
                molla del detent scarica o rotta. Si diagnostica
                smontando il coperchio laterale del carter: sfera
                e molla sono accessibili spesso senza estrarre
                il cambio. Costo di riparazione minimo — ma se
                ignorato produce cambi incerti e marce che saltano.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Salto di due marce — il pawl non ritorna</h4>
              <p>
                Premendo il pedale il cambio avanza di due marce
                invece di una. Il pawl di azionamento, invece
                di agganciarsi e poi rilasciarsi in un singolo
                dente, rimane agganciato e trascina il tamburo
                di due posizioni. Causa: pawl rigido per olio
                denso e freddo che non permette il movimento
                libero, molla del pawl debole, sporcizia
                o corrosione che blocca il pawl nella posizione
                agganciata. Spesso risolto con pulizia e
                lubrificazione del leverismo esterno.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Tamburo che non ruota — pedale duro o bloccato</h4>
              <p>
                Il pedale non si muove o oppone resistenza abnorme.
                Se il problema è repentino e coincide con un cambio
                violento, probabilmente una forcella si è piegata
                o un dente di ingranaggio si è rotto e si è
                incastrato nel meccanismo. Se invece è progressivo
                e peggiora nel tempo, può essere usura del leverismo
                esterno, vite di fissaggio allentata del pedale,
                o scanalature del tamburo che hanno accumulato
                detriti metallici. In ogni caso: non forzare il
                pedale oltre — il danno si aggrava.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Ispezione tamburo a carter aperto</h4>
              <p>
                Con il cambio smontato, ispezionare le scanalature
                del tamburo con luce radente: cercare rigature
                trasversali (perni della forcella che hanno saltato
                la cava), zone di usura lucida nelle curve delle
                scanalature, bavature metalliche che restringono
                localmente la larghezza della cava. Misurare
                la larghezza delle cave con uno spessimetro —
                un aumento superiore a 0,1 mm rispetto alla
                misura nominale indica usura che compromette
                la precisione del cambio.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Ispezione forcelle — planarità e spessore dita</h4>
              <p>
                Ogni forcella va appoggiata su un piano di riscontro:
                una deviazione visibile indica deformazione — scarta
                senza esitazione. Le dita si misurano con micrometro
                confrontando con il valore nominale del manuale.
                Verificare anche che il perno della forcella
                scorra liberamente nel suo albero di supporto
                senza gioco laterale eccessivo — un perno che
                oscilla lateralmente cambia l'angolo di attacco
                della forcella sul manicotto.
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
            <span className="cardTag">Cambio inverso</span>
            <h3>GP shift — prima in alto, le altre in basso</h3>
            <p>
              Il cambio GP shift (o reverse shift) inverte la
              direzione del selettore rispetto allo standard:
              nella configurazione normale la prima marcia si
              inserisce premendo il pedale verso il basso e
              le marce successive si inseriscono sollevandolo.
              Nel GP shift è il contrario — configurazione
              preferita dai piloti da pista perché con il piede
              in appoggio sulla pedana si sale di marcia con
              il movimento naturale verso il basso.
              Si realizza invertendo il leverismo esterno
              o sostituendo il tamburo con uno a profilo speculare.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Upgrade</span>
            <h3>Tamburi e leverismi aftermarket</h3>
            <p>
              I tamburi selettori aftermarket (Hinson, Rekluse,
              preparatori specializzati) sono realizzati in acciaio
              con tolleranze più strette delle scanalature e
              trattamento superficiale più duro dell'originale.
              I leverismi racing sostituiscono il sistema a
              pawl con meccanismi a rulli o a leva rigida per
              ridurre l'inerzia e aumentare la precisione del
              cambio rapido. In uso agonistico il beneficio
              è misurabile — in uso stradale raramente giustifica
              il costo.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Manutenzione</span>
            <h3>Il leverismo esterno — il componente più dimenticato</h3>
            <p>
              Il leverismo esterno del cambio è esposto direttamente
              agli agenti atmosferici, al fango e all'acqua —
              ma viene pulito e lubrificato raramente. Il pawl
              deve muoversi liberamente nella sua sede: un ciclo
              di pulizia con solvente e rilubrificazione con
              grasso specifico ogni 10 – 15 ore di utilizzo
              off-road previene il 90% dei problemi di cambio
              che non richiedono apertura del carter.
              Il punto di articolazione del pedale e il perno
              del leverismo vanno lubrificati con grasso
              resistente all'acqua.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Selettore;
