import "./materiali.scss";
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

const Materiali = () => {
  return (
    <section className="materiali" id="materiali">
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
              Telaio — Materiali
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              I materiali<br />
              <span className="accentText">del telaio</span>
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La scelta del materiale per un telaio da fuoristrada
              non è mai solo una questione di peso. È un compromesso
              tra resistenza meccanica, duttilità, saldabilità,
              comportamento a fatica, riparabilità in campo e
              costo di produzione. Ogni materiale ha una sua logica —
              e quella logica si riflette nel carattere di guida
              della moto, non solo nelle specifiche tecniche.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Quattro materiali dominano il panorama del fuoristrada
              moderno: acciaio al cromo-molibdeno, leghe di alluminio,
              titanio e compositi a fibra di carbonio. Ognuno ha
              una nicchia precisa — e capire perché un costruttore
              sceglie uno invece dell'altro è capire come pensa
              al compromesso tra prestazioni, costo e utilizzo.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Proprietà chiave a confronto</span>
              <h3>I numeri che contano davvero</h3>
            </div>
            <div className="propTable">
              <div className="propRow propRowHeader">
                <span className="propMat">Materiale</span>
                <span className="propVal">Rm (MPa)</span>
                <span className="propVal">ρ (g/cm³)</span>
                <span className="propVal">E (GPa)</span>
              </div>
              <div className="propRow">
                <span className="propMat propMatSteel">Acciaio CrMo</span>
                <span className="propVal">700–1000</span>
                <span className="propVal">7.85</span>
                <span className="propVal">210</span>
              </div>
              <div className="propRow">
                <span className="propMat propMatAlu">Al 6061-T6</span>
                <span className="propVal">310</span>
                <span className="propVal">2.70</span>
                <span className="propVal">69</span>
              </div>
              <div className="propRow">
                <span className="propMat propMatAlu">Al 7005-T6</span>
                <span className="propVal">350–430</span>
                <span className="propVal">2.78</span>
                <span className="propVal">72</span>
              </div>
              <div className="propRow">
                <span className="propMat propMatTi">Titanio gr.5</span>
                <span className="propVal">900–1100</span>
                <span className="propVal">4.43</span>
                <span className="propVal">114</span>
              </div>
              <div className="propRow">
                <span className="propMat propMatCarbon">Carbonio UD</span>
                <span className="propVal">1500+</span>
                <span className="propVal">1.55</span>
                <span className="propVal">70–300</span>
              </div>
            </div>
            <div className="propLegend">
              <span>Rm = resistenza a trazione</span>
              <span>ρ = densità</span>
              <span>E = modulo elastico</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── ACCIAIO BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="materialeBlock acciaioBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="materialeHeader" variants={fadeUpVariants}>
            <div className="materialeHeaderLeft">
              <span className="materialeDot dotAcciaio" />
              <div>
                <span className="sectionLabel">Acciaio al cromo-molibdeno</span>
                <h3>25CrMo4 / 4130 — il materiale storico del fuoristrada</h3>
              </div>
            </div>
          </motion.div>

          <motion.div className="materialeContent" variants={cardVariants}>
            <div className="materialeText">
              <p>
                L'acciaio al cromo-molibdeno è il materiale con cui
                è nato il fuoristrada moderno. La sigla 25CrMo4
                (equivalente americano 4130) indica una lega con
                0,25% di carbonio, cromo per aumentare la temprabilità
                e molibdeno per migliorare la resistenza ad alta
                temperatura e la tenacità. Il risultato è un acciaio
                con resistenza a trazione di 700 – 1.000 MPa —
                a seconda del trattamento termico — con una duttilità
                eccezionale: si deforma plasticamente prima di cedere,
                dando sempre un segnale visibile del danno.
              </p>
              <p>
                La caratteristica che lo rende insostituibile nel
                trial e nell'enduro classico è la saldabilità: si
                salda con TIG senza preriscaldo obbligatorio, senza
                trattamenti termici successivi complessi e senza
                attrezzature speciali. Un telaio in cromoly si
                ripara in ogni officina con una saldatrice TIG
                da 2.000 euro. In gara, con un'attrezzatura portatile.
                Sul lato del terreno, con il tempo necessario.
                Questo non vale per nessun altro materiale.
              </p>
            </div>

            <div className="materialeCards">
              <div className="matCard matCardGreen">
                <span className="matCardTag">Vantaggi</span>
                <ul className="matList">
                  <li>Duttilità — si piega prima di rompersi, danno sempre visibile</li>
                  <li>Limite di fatica definito — sotto una certa tensione non si degrada</li>
                  <li>Saldabilità semplice — riparabile in qualsiasi officina</li>
                  <li>Costo materia prima basso — lavorazioni economiche</li>
                  <li>Flessibilità naturale che filtra le vibrazioni</li>
                </ul>
              </div>
              <div className="matCard matCardRed">
                <span className="matCardTag">Limiti</span>
                <ul className="matList">
                  <li>Densità 7,85 g/cm³ — il più pesante tra i materiali da telaio</li>
                  <li>Richiede protezione dalla corrosione — verniciatura o fosfosgrassatura</li>
                  <li>A parità di resistenza serve più materiale rispetto all'alluminio</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── ALLUMINIO BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="materialeBlock alluminioBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="materialeHeader" variants={fadeUpVariants}>
            <div className="materialeHeaderLeft">
              <span className="materialeDot dotAlluminio" />
              <div>
                <span className="sectionLabel">Leghe di alluminio</span>
                <h3>6061-T6 e 7005-T6 — la rivoluzione degli anni '90</h3>
              </div>
            </div>
          </motion.div>

          <motion.div className="materialeContent" variants={cardVariants}>
            <div className="materialeText">
              <p>
                L'alluminio ha cambiato il fuoristrada quando KTM,
                Honda e Yamaha hanno iniziato ad adottarlo sui telai
                da cross negli anni '90. Il vantaggio immediato è la
                densità: 2,70 g/cm³ contro 7,85 dell'acciaio — quasi
                tre volte più leggero. Un telaio in alluminio per una
                250 cc pesa 4 – 6 kg contro gli 8 – 11 dell'equivalente
                in cromoly. Su una moto da 100 kg, risparmiare 4 kg
                sulla struttura principale è un guadagno significativo
                in termini di maneggevolezza e inerzia.
              </p>
              <p>
                Le due leghe principali sono il 6061-T6 e il 7005-T6.
                Il 6061 è la lega universale — buona saldabilità,
                buona lavorabilità, resistenza a trazione di 310 MPa.
                Il 7005 (o 7020) aggiunge zinco alla composizione:
                resistenza a trazione di 350 – 430 MPa con densità
                praticamente identica. È la lega preferita dai
                costruttori racing — KTM, Husqvarna e Yamaha la usano
                sulle travi principali. Il -T6 indica il trattamento
                termico di invecchiamento artificiale che porta la lega
                alla sua massima resistenza meccanica.
              </p>
              <p>
                Il limite fondamentale dell'alluminio è l'assenza
                di un limite di fatica definito: a differenza
                dell'acciaio, l'alluminio si degrada a ogni ciclo
                di carico — anche piccolo. Un telaio in alluminio
                ha una vita in cicli, non infinita. Le saldature
                TIG sull'alluminio richiedono gas inerte (argon puro),
                pulizia scrupolosa e spesso trattamento termico T6
                dopo la saldatura per ripristinare le proprietà
                meccaniche nella zona termicamente alterata (HAZ).
              </p>
            </div>

            <div className="materialeCards">
              <div className="matCard matCardGreen">
                <span className="matCardTag">Vantaggi</span>
                <ul className="matList">
                  <li>Peso drasticamente inferiore all'acciaio a parità di sezione</li>
                  <li>Rapporto resistenza/peso (specifica) superiore</li>
                  <li>Non arrugginisce — resistenza naturale alla corrosione</li>
                  <li>Lavorabilità CNC eccellente — forme complesse ed efficienti</li>
                </ul>
              </div>
              <div className="matCard matCardRed">
                <span className="matCardTag">Limiti</span>
                <ul className="matList">
                  <li>Nessun limite di fatica — si degrada sempre, anche sotto carichi piccoli</li>
                  <li>Non si raddrizza dopo deformazioni gravi — va sostituito</li>
                  <li>Saldatura richiede attrezzatura specifica e trattamento termico</li>
                  <li>Costo materiale e lavorazione superiore all'acciaio</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER ──────────────────────────────────────────── */}
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
              <span className="placeholderText">Immagine — sezione di tubo cromoly vs trave alluminio estruso a parete variabile, ingrandimento zona saldatura</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">HAZ — la zona termicamente alterata</span>
            <p>
              La zona termicamente alterata (Heat Affected Zone)
              è la regione del metallo adiacente al cordone di saldatura
              che raggiunge temperature elevate senza fondere.
              Nell'alluminio la HAZ perde il 30 – 50% della resistenza
              meccanica rispetto al base metal — è qui che iniziano
              quasi tutte le cricche da fatica sui telai in alluminio
              saldato. Il trattamento T6 post-saldatura ripristina
              parzialmente le proprietà, ma la geometria del giunto
              e la qualità del cordone restano i fattori determinanti.
            </p>
          </div>
        </motion.div>

        {/* ── TITANIO BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="materialeBlock titanioBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="materialeHeader" variants={fadeUpVariants}>
            <div className="materialeHeaderLeft">
              <span className="materialeDot dotTitanio" />
              <div>
                <span className="sectionLabel">Titanio</span>
                <h3>Ti-6Al-4V — il compromesso perfetto che nessuno usa perché costa troppo</h3>
              </div>
            </div>
          </motion.div>

          <motion.div className="materialeContent" variants={cardVariants}>
            <div className="materialeText">
              <p>
                Il titanio è il materiale da telaio teoricamente
                ideale: resistenza a trazione di 900 – 1.100 MPa,
                densità di 4,43 g/cm³ — a metà strada tra alluminio
                e acciaio — e un limite di fatica definito come
                l'acciaio, a differenza dell'alluminio. In pratica
                offre il meglio di entrambi: più leggero dell'acciaio,
                più resistente a fatica dell'alluminio, più duttile
                di entrambi in caso di deformazione.
              </p>
              <p>
                Il motivo per cui non è lo standard del fuoristrada
                è il costo: la materia prima del titanio costa
                10 – 15 volte l'acciaio cromoly, e la lavorazione
                è complessa — le leghe di titanio richiedono utensili
                specifici, velocità di taglio basse e lubrificazione
                abbondante per non contaminare il materiale. La
                saldatura TIG richiede protezione con gas inerte
                anche sulla faccia posteriore del cordone (purging)
                per evitare l'ossidazione — il titanio a temperatura
                di saldatura assorbe ossigeno e azoto dall'aria
                diventando fragile. Un telaio in titanio per enduro
                costa 3 – 5 volte un equivalente in alluminio.
                Marchi come Moose Racing e alcuni artigiani specializzati
                producono sottotelai e componenti in titanio per il
                mercato racing — raramente l'intero telaio principale.
              </p>
            </div>

            <div className="materialeCards">
              <div className="matCard matCardGreen">
                <span className="matCardTag">Vantaggi</span>
                <ul className="matList">
                  <li>Rapporto resistenza/peso eccezionale — meglio di acciaio e alluminio</li>
                  <li>Limite di fatica definito — come l'acciaio, non si degrada sotto soglia</li>
                  <li>Resistenza alla corrosione assoluta — nessun trattamento superficiale</li>
                  <li>Duttilità superiore all'alluminio — si deforma prima di rompersi</li>
                </ul>
              </div>
              <div className="matCard matCardRed">
                <span className="matCardTag">Limiti</span>
                <ul className="matList">
                  <li>Costo materia prima 10–15× l'acciaio cromoly</li>
                  <li>Saldatura complessa — richiede purging e attrezzature specializzate</li>
                  <li>Lavorabilità difficile — usura rapida degli utensili</li>
                  <li>Usato principalmente su componenti, raramente su telai completi</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── COMPOSITI BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="materialeBlock compositiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="materialeHeader" variants={fadeUpVariants}>
            <div className="materialeHeaderLeft">
              <span className="materialeDot dotCompositi" />
              <div>
                <span className="sectionLabel">Compositi a fibra di carbonio</span>
                <h3>CFRP — leggero come nient'altro, fragile come il vetro</h3>
              </div>
            </div>
          </motion.div>

          <motion.div className="materialeContent" variants={cardVariants}>
            <div className="materialeText">
              <p>
                La fibra di carbonio in matrice epossidica (CFRP —
                Carbon Fiber Reinforced Polymer) ha proprietà meccaniche
                straordinarie: resistenza a trazione di 1.500+ MPa
                in direzione delle fibre, densità di 1,55 g/cm³ —
                la metà dell'alluminio. Il modulo elastico varia
                enormemente in funzione dell'orientamento delle fibre:
                da 70 GPa con fibre a ±45° a 300 GPa con fibre
                unidirezionali — un range che non ha equivalenti
                nei metalli e che permette di progettare strutture
                con rigidità diversa in direzioni diverse, nello
                stesso componente.
              </p>
              <p>
                Nel fuoristrada il CFRP è usato quasi esclusivamente
                per i sottotelai, i telaietti del sottosella e i
                componenti di carrozzeria strutturale — non per
                il telaio principale. Il motivo è il comportamento
                al danno: il carbonio non si deforma plasticamente.
                Sotto carico si comporta elasticamente fino a una
                soglia, oltre la quale cede di schianto — senza
                preavviso, senza deformazione visibile. Un impatto
                che piega un telaio in acciaio e ammacca uno in
                alluminio può rendere irrecuperabile in modo non
                visibile un componente in carbonio — le fibre
                interne si delaminano senza tracce esterne.
                La diagnostica richiede ultrasuoni o raggi X.
              </p>
            </div>

            <div className="materialeCards">
              <div className="matCard matCardGreen">
                <span className="matCardTag">Vantaggi</span>
                <ul className="matList">
                  <li>Peso minimo assoluto — densità 1,55 g/cm³</li>
                  <li>Rigidità specifica altissima in direzione fibra</li>
                  <li>Anisotropia progettabile — rigidità diversa in direzioni diverse</li>
                  <li>Resistenza alla corrosione assoluta</li>
                </ul>
              </div>
              <div className="matCard matCardRed">
                <span className="matCardTag">Limiti</span>
                <ul className="matList">
                  <li>Nessuna duttilità — cede di schianto senza preavviso</li>
                  <li>Danni interni invisibili — diagnosi richiede strumentazione</li>
                  <li>Non riparabile in campo — solo in laboratorio specializzato</li>
                  <li>Costo elevatissimo — riservato a componenti specifici</li>
                  <li>Sensibile agli impatti localizzati (low-velocity impact damage)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CONFRONTO SPECIFICO BLOCK ────────────────────────────────────── */}
        <motion.div
          className="confrontoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="confrontoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il confronto pratico</span>
            <h3>Resistenza specifica — il numero che conta quando si progetta per il peso</h3>
            <p>
              La resistenza a trazione assoluta non è il parametro
              giusto per confrontare materiali da telaio. Il parametro
              corretto è la resistenza specifica — resistenza divisa
              per la densità. Indica quanta resistenza si ottiene
              per ogni grammo di materiale impiegato.
            </p>
          </motion.div>

          <motion.div className="confrontoBarre" variants={cardVariants}>

            <div className="barraRiga">
              <span className="barraLabel">Acciaio CrMo</span>
              <div className="barraTrack">
                <div className="barraFill barraAcciaio" style={{ width: "52%" }} />
              </div>
              <span className="barraVal">~115 kN·m/kg</span>
            </div>

            <div className="barraRiga">
              <span className="barraLabel">Al 6061-T6</span>
              <div className="barraTrack">
                <div className="barraFill barraAlu6061" style={{ width: "43%" }} />
              </div>
              <span className="barraVal">~115 kN·m/kg</span>
            </div>

            <div className="barraRiga">
              <span className="barraLabel">Al 7005-T6</span>
              <div className="barraTrack">
                <div className="barraFill barraAlu7005" style={{ width: "56%" }} />
              </div>
              <span className="barraVal">~140 kN·m/kg</span>
            </div>

            <div className="barraRiga barraRigaPeak">
              <span className="barraLabel">Titanio gr.5</span>
              <div className="barraTrack">
                <div className="barraFill barraTitanio" style={{ width: "78%" }} />
              </div>
              <span className="barraVal">~225 kN·m/kg</span>
            </div>

            <div className="barraRiga barraRigaPeak">
              <span className="barraLabel">Carbonio UD</span>
              <div className="barraTrack">
                <div className="barraFill barraCarbon" style={{ width: "100%" }} />
              </div>
              <span className="barraVal">~970 kN·m/kg</span>
            </div>

            <p className="confrontoNota">
              Nota: la resistenza specifica del carbonio è calcolata
              in direzione delle fibre unidirezionali. Nelle strutture
              reali con fibre multidirezionali il valore è molto più basso.
              Il confronto illustra il potenziale teorico, non le
              prestazioni in una struttura tridimensionale.
            </p>
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
            <span className="cardTag">Saldatura</span>
            <h3>TIG su alluminio vs TIG su acciaio — perché non è la stessa cosa</h3>
            <p>
              La saldatura TIG sull'alluminio richiede corrente
              alternata (AC) invece della corrente continua (DC)
              usata sull'acciaio — l'AC rompe lo strato di ossido
              di alluminio che si forma istantaneamente sulla
              superficie e impedirebbe la fusione. Serve gas
              argon puro al 99,99%, bacchetta di apporto specifica
              per la lega, pulizia scrupolosa con sgrassante
              e spazzola in acciaio inox dedicata. Un cordone
              mal eseguito sull'alluminio — con porosità, inclusioni
              di ossido o fusione insufficiente — non è visibile
              all'esterno ma è un inizio di cricca da fatica.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Scelta costruttore</span>
            <h3>Perché KTM usa il 7005 e Honda il 6061 — non è solo marketing</h3>
            <p>
              KTM e Husqvarna privilegiano il 7005-T6 per la
              resistenza meccanica superiore che permette sezioni
              più sottili a parità di rigidità — telai visivamente
              più sottili e leggeri. Honda tende verso il 6061
              per la maggiore saldabilità e la maggiore duttilità
              in caso di impatto — un telaio che "cede" un po'
              invece di rompersi. La differenza si sente:
              i telai KTM tendono a essere più rigidi e precisi,
              quelli Honda più tolleranti sugli impatti duri.
              Nessuno dei due approcci è oggettivamente superiore —
              dipende dal tipo di utilizzo e dalla filosofia
              del costruttore.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Manutenzione</span>
            <h3>Come riconoscere un telaio a fine vita — i segnali da non ignorare</h3>
            <p>
              Un telaio in alluminio a fine vita non si annuncia
              con rumori o perdite — si annuncia con cricche sottilissime
              nelle zone di saldatura o negli spigoli interni delle
              fusioni. Ispezione con luce radente (luce a bassa incidenza
              che rivela irregolarità superficiali invisibili in luce
              normale), liquidi penetranti colorati o UV, o — per la
              massima affidabilità — con ultrasuoni. Un telaio in
              acciaio cromoly si riconosce dalle deformazioni plastiche
              visibili prima del cedimento finale. Mai fidarsi di
              un telaio in alluminio che ha subito impatti gravi
              senza averlo ispezionato con metodologia.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Materiali;
