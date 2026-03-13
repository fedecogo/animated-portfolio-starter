import "./corona.scss";
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

const Corona = () => {
  return (
    <section className="corona" id="corona">
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
              La corona
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La corona è il grande ingranaggio dentato fissato al mozzo
              della ruota posteriore. Riceve il moto dalla catena e lo
              trasforma in trazione reale sulla ruota: è l'ultimo anello
              meccanico prima del contatto gomma-terreno. Più del pignone,
              lavora in ambiente sporco, esposto, investito da fango,
              sabbia, pietrisco, acqua e vibrazioni continue — e proprio
              per questo la sua qualità costruttiva fa una differenza
              enorme nella durata della trasmissione.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              A prima vista sembra solo un disco con denti, ma non lo è:
              la forma del dente, la planarità, il materiale, il tipo
              di lavorazione, la rigidità del corpo e la precisione
              del centraggio cambiano il modo in cui la catena si appoggia,
              il modo in cui il carico si distribuisce e il modo in cui
              l'usura si accumula nel tempo. Una corona economica e una
              corona lavorata bene possono avere lo stesso numero di denti,
              ma comportarsi in modo completamente diverso dopo poche ore.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Cosa conta davvero</span>
              <h3>Le cinque grandezze che definiscono una buona corona</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="teeth">Z</span>
                <span className="miniText">
                  Numero di denti — definisce quante volte la catena ingaggia e scarica il carico lungo la circonferenza
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex" data-color="pitch">P</span>
                <span className="miniText">
                  Passo catena — 520, 428 o altri: la corona deve essere perfettamente compatibile con pignone e catena
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex" data-color="mat">M</span>
                <span className="miniText">
                  Materiale — acciaio per durata, ergal per leggerezza, versioni ibride per combinare entrambi
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex" data-color="geo">G</span>
                <span className="miniText">
                  Geometria — profilo dente, spessore, offset, centraggio e planarità determinano l'allineamento reale della catena
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex" data-color="wear">U</span>
                <span className="miniText">
                  Usura — denti appuntiti, piegati o asimmetrici indicano sostituzione; una corona usurata rovina subito la catena
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FUNZIONE BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="funzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="funzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Funzione meccanica</span>
            <h3>La corona non “trascina” soltanto — distribuisce il carico e stabilizza il lavoro della catena</h3>
            <p>
              Dire che la corona serve solo a ricevere il moto dalla
              catena è corretto ma incompleto. La sua funzione reale
              è distribuire il carico su più denti di contatto,
              guidare la catena lungo una traiettoria costante e
              scaricare la coppia sulla ruota posteriore senza
              concentrare stress eccessivi in un singolo punto.
              Più la corona è precisa, più la trasmissione lavora
              fluida; più è imprecisa, più introduce strappi,
              disallineamenti e usura accelerata.
            </p>
          </motion.div>

          <motion.div className="funzioneGrid" variants={cardVariants}>
            <div className="funzioneCard funzioneCardLoad">
              <div className="funzioneCardTop">
                <span className="funzioneBadge badgeLoad">Distribuzione del carico</span>
              </div>
              <h4>Più denti in presa, meno stress puntuale</h4>
              <p>
                Quando la catena scarica coppia sulla corona, il carico
                non agisce su un solo dente ma su una piccola zona di
                contatto composta da più rulli e più denti simultaneamente.
                Questo è il motivo per cui il profilo e la concentricità
                della corona sono così importanti: se la forma è corretta,
                il carico si ripartisce in modo progressivo; se la forma
                è imprecisa, alcuni denti ricevono più stress di altri
                e l'usura diventa irregolare.
              </p>
              <div className="loadBars loadBarsWide">
                <div className="loadBar" style={{ height: "42%" }} />
                <div className="loadBar" style={{ height: "58%" }} />
                <div className="loadBar loadBarPeak" style={{ height: "86%" }} />
                <div className="loadBar" style={{ height: "100%" }} />
                <div className="loadBar loadBarPeak" style={{ height: "88%" }} />
                <div className="loadBar" style={{ height: "60%" }} />
                <div className="loadBar" style={{ height: "40%" }} />
              </div>
              <span className="loadLabel">Contatto distribuito = trasmissione più regolare</span>
            </div>

            <div className="funzioneCard funzioneCardGuide">
              <div className="funzioneCardTop">
                <span className="funzioneBadge badgeGuide">Guida della catena</span>
              </div>
              <h4>La corona definisce l'uscita corretta della catena verso il ramo teso</h4>
              <p>
                La catena non deve solo “agganciarsi”: deve anche entrare
                e uscire dai denti con angolo corretto e senza urti.
                Il ramo in tiro e il ramo di ritorno cambiano il fianco
                del dente che lavora; una corona dritta, centrata e con
                profilo ben raccordato accompagna il rullo senza impatto.
                Una corona storta o consumata fa invece sbattere i rulli
                sul dente — da lì nascono rumore, vibrazione e consumo
                anomalo dei perni catena.
              </p>
              <div className="loadBars loadBarsSmooth">
                <div className="loadBar" style={{ height: "22%" }} />
                <div className="loadBar" style={{ height: "34%" }} />
                <div className="loadBar" style={{ height: "48%" }} />
                <div className="loadBar" style={{ height: "64%" }} />
                <div className="loadBar loadBarPeak" style={{ height: "82%" }} />
                <div className="loadBar" style={{ height: "68%" }} />
                <div className="loadBar" style={{ height: "52%" }} />
              </div>
              <span className="loadLabel">Ingresso progressivo = meno urto, meno rumore, meno usura</span>
            </div>
          </motion.div>
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
            <span className="sectionLabel">Setup per disciplina</span>
            <h3>Cross, enduro, motard, stradale — la corona cambia per ambiente, durata e massa rotante</h3>
            <p>
              La corona non viene scelta solo in base al numero di denti.
              Nella pratica cambiano soprattutto materiale, spessore,
              lavorazione, resistenza agli urti e priorità di utilizzo.
              Sul cross conta la sopravvivenza nel fango abrasivo,
              sul motard il contenimento della massa rotante, sulla
              stradale la stabilità a lungo termine e la silenziosità.
            </p>
          </motion.div>

          <motion.div className="disciplineGrid" variants={cardVariants}>

            <div className="disciplinaCard disciplinaCross">
              <div className="disciplinaCardHeader">
                <span className="disciplinaMarchio">Motocross</span>
                <span className="disciplinaNome">MX / SX</span>
                <span className="disciplinaClaim">Impatti, fango abrasivo, atterraggi, trazione impulsiva</span>
              </div>
              <h4>Corona in acciaio o ergal rinforzato — denti robusti, rigidità elevata</h4>
              <p>
                Nel motocross la corona lavora in uno degli ambienti
                peggiori possibili: fango con sabbia, colpi di gas,
                salti, detriti e lavaggi frequenti. Le versioni in
                acciaio offrono la massima durata; quelle in ergal
                alleggeriscono molto la ruota ma richiedono catena
                pulita e sostituzioni più ravvicinate. Il compromesso
                più intelligente, su moto molto usate, resta spesso
                la corona ibrida o un'ergal di alta qualità con profilo
                denti spesso e anodizzazione dura.
              </p>
            </div>

            <div className="disciplinaCard disciplinaEnduro">
              <div className="disciplinaCardHeader">
                <span className="disciplinaMarchio">Enduro</span>
                <span className="disciplinaNome">Hard / XC</span>
                <span className="disciplinaClaim">Fango, sassi, acqua, durata nel tempo, manutenzione variabile</span>
              </div>
              <h4>Corona robusta, denti profondi, tolleranza alla sporcizia</h4>
              <p>
                In enduro la corona viene investita continuamente da
                sporco e corpi estranei e deve sopravvivere anche
                quando la manutenzione non è perfetta. L'acciaio
                è la scelta più conservativa; l'ergal va benissimo
                in gara quando si cerca leggerezza ma pretende una
                routine di pulizia rigorosa. La vera differenza la
                fanno il profilo corretto, la planarità e una bulloneria
                mozzo in ordine: una corona buona ma montata male
                dura meno di una media montata perfettamente.
              </p>
            </div>

            <div className="disciplinaCard disciplinaMotard">
              <div className="disciplinaCardHeader">
                <span className="disciplinaMarchio">Supermotard</span>
                <span className="disciplinaNome">SM / SMX</span>
                <span className="disciplinaClaim">Asfalto, variazioni rapide di gas, massa rotante critica</span>
              </div>
              <h4>Ergal 7075-T6 di qualità — peso ridotto e risposta più pronta</h4>
              <p>
                Nel motard la massa rotante della ruota posteriore
                incide molto sulla rapidità nei cambi di direzione e
                nella risposta al gas. Per questo le corone in ergal
                lavorato dal pieno o ricavate da lastra alta qualità
                sono diffusissime. Il grip dell'asfalto è elevato,
                quindi i carichi sul dente sono importanti, ma l'ambiente
                è generalmente meno abrasivo del fuoristrada: qui
                l'ergal ha senso tecnico, non solo estetico.
              </p>
            </div>

            <div className="disciplinaCard disciplinaStradale">
              <div className="disciplinaCardHeader">
                <span className="disciplinaMarchio">Stradale / Track</span>
                <span className="disciplinaNome">Road / Circuit</span>
                <span className="disciplinaClaim">Durata, regolarità, rumorosità contenuta, percorrenza lunga</span>
              </div>
              <h4>Acciaio o ibrida — precisione e durata prima della leggerezza estrema</h4>
              <p>
                Nell'uso stradale la corona deve lavorare per molte
                ore, spesso con manutenzione non racing e con catene
                O-ring o X-ring più pesanti. Conta meno risparmiare
                150 grammi e conta molto di più mantenere geometria,
                silenziosità e stabilità di usura per migliaia di
                chilometri. Per questo acciaio e versioni ibride
                rimangono la scelta più sensata su naked, sportive
                leggere e moto da uso quotidiano.
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
                Immagine / GIF — corona acciaio vs ergal vs ibrida: vista frontale, spessore denti, alleggerimenti e corpo centrale a confronto
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Massa rotante e inerzia</span>
            <p>
              La corona si trova sul bordo della ruota posteriore,
              quindi ogni grammo risparmiato lì ha più effetto dinamico
              di quanto suggerisca il valore assoluto. Ridurre peso
              in quella zona significa ridurre inerzia rotazionale:
              la ruota sale e scende di regime più rapidamente,
              la sospensione lavora con meno massa periferica e la moto
              appare più pronta nei cambi di ritmo. È il motivo per cui
              l'ergal ha un vantaggio reale sul motard e sul racing,
              mentre l'acciaio conserva il vantaggio sulla durata.
            </p>
          </div>
        </motion.div>

        {/* ── COSTRUZIONE BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="costruzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="costruzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Costruzione e materiali</span>
            <h3>Acciaio, ergal, bimetallica — tre filosofie costruttive molto diverse</h3>
            <p>
              La corona è uno dei casi più interessanti in cui il materiale
              cambia davvero il comportamento del componente. A differenza
              di altri pezzi “ornamentali”, qui il compromesso tra peso,
              rigidità superficiale, resistenza all'abrasione e costo
              è evidente già dopo poche uscite.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costrCard">
              <span className="costrIdx costrIdxSteel">S</span>
              <h4>Acciaio temprato — la corona che sopporta tutto</h4>
              <p>
                La corona in acciaio è più pesante ma nettamente più
                resistente ad abrasione, impatti e manutenzione non
                perfetta. Su fango, sabbia, ghiaia e percorsi lunghi
                è ancora il riferimento per durata. Il dente resta
                stabile più a lungo, la deformazione plastica è rara
                e l'usura dei fianchi si presenta tardi e in modo più
                prevedibile. È la scelta “zero sorprese”.
              </p>
            </div>

            <div className="costrCard">
              <span className="costrIdx costrIdxYellow">E</span>
              <h4>Ergal 7075-T6 anodizzato duro — racing vero, ma con manutenzione seria</h4>
              <p>
                L'ergal riduce in modo netto il peso della corona e
                rende più viva la risposta della ruota. Però il dente
                lavora con una durezza inferiore rispetto all'acciaio:
                l'anodizzazione dura aiuta, ma non fa miracoli.
                Se la catena è sporca, tesa male o usata con abrasivo,
                l'usura accelera. È ottima quando si cerca prestazione
                e si accetta una sostituzione più frequente.
              </p>
            </div>

            <div className="costrCard">
              <span className="costrIdx costrIdxBlue">H</span>
              <h4>Corona ibrida — denti in acciaio, corpo in alluminio</h4>
              <p>
                La soluzione ibrida nasce per prendere il meglio dei
                due mondi: denti in acciaio per resistere all'usura
                e corpo in alluminio per contenere il peso complessivo.
                È una soluzione tecnicamente molto intelligente sulle
                moto usate forte ma anche a lungo. Costa di più,
                ma quando il compromesso peso/durata è il vero obiettivo,
                spesso è la scelta più razionale.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── GEOMETRIA BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="geometriaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="geometriaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Geometria del componente</span>
            <h3>Profilo dente, planarità, offset e alleggerimenti — la corona buona si riconosce da qui</h3>
            <p>
              Le differenze importanti tra una corona ben progettata e
              una mediocre raramente stanno solo nel logo. Stanno nella
              precisione del profilo, nella finitura dei raccordi, nella
              rigidità del corpo e soprattutto nella capacità di rimanere
              planare e concentrica sotto carico e vibrazione.
            </p>
          </motion.div>

          <motion.div className="geometriaGrid" variants={cardVariants}>
            <div className="geoCard geoCardTooth">
              <span className="geoTag">Profilo dente</span>
              <h4>Il dente non è triangolare — è una guida di carico</h4>
              <p>
                Il raggio di ingresso, il fianco di spinta, la sommità
                e il raccordo di uscita lavorano insieme per accompagnare
                il rullo della catena. Un dente “tagliato male” non
                distribuisce il carico e fa lavorare il rullo in urto.
                È così che nascono usura precoce, rumore e micro-colpi
                nella trasmissione.
              </p>
            </div>

            <div className="geoCard geoCardPlane">
              <span className="geoTag">Planarità</span>
              <h4>Una corona storta è una trasmissione che non lavorerà mai bene</h4>
              <p>
                Anche pochi decimi di deformazione assiale cambiano
                l'allineamento della catena sul ramo teso. Il risultato
                è un lavoro obliquo dei rulli sui denti, usura laterale,
                rumorosità e perdita di scorrevolezza. La planarità non è
                un dettaglio da officina maniacale — è requisito minimo.
              </p>
            </div>

            <div className="geoCard geoCardOffset">
              <span className="geoTag">Offset e centraggio</span>
              <h4>Il centro geometrico deve coincidere con il centro reale del mozzo</h4>
              <p>
                Se il foro centrale o la sede bulloni hanno tolleranze
                scarse, la corona gira eccentrica rispetto al mozzo.
                In quel caso la catena alterna tratti più tesi e più
                lenti a ogni giro ruota. È uno dei motivi per cui alcune
                moto sembrano impossibili da tensionare bene.
              </p>
            </div>

            <div className="geoCard geoCardLight">
              <span className="geoTag">Alleggerimenti</span>
              <h4>Fori e finestre servono, ma non devono indebolire il corpo</h4>
              <p>
                Alleggerire una corona ha senso se il disegno lascia
                abbastanza sezione resistente tra il corpo e la radice
                del dente. Quando si esagera con le finestre per inseguire
                estetica o marketing, la corona perde rigidità locale
                e diventa più vulnerabile a deformazioni e ovalizzazioni.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FISICA BLOCK ────────────────────────────────────────────────── */}
        <motion.div
          className="fisicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="fisicaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il principio fisico</span>
            <h3>Perché la corona lavora meglio quando il carico si ripartisce su più denti e la catena resta coerente col suo passo</h3>
          </motion.div>

          <motion.div className="fisicaContent" variants={cardVariants}>
            <div className="fisicaFormula">
              <span className="formulaEq">p = passo catena</span>
              <span className="formulaLabel">Distanza tra i perni consecutivi</span>

              <span className="formulaEq" style={{ marginTop: "14px" }}>
                F<sub>dente</sub> ≈ T / r
              </span>
              <span className="formulaLabel">Carico tangenziale distribuito sul raggio utile</span>

              <span className="formulaEq" style={{ marginTop: "14px" }}>
                σ<sub>locale</sub> ↓ se n<sub>contatto</sub> ↑
              </span>
              <span className="formulaLabel">Più denti in presa = meno stress locale</span>
            </div>

            <div className="fisicaTesto">
              <p>
                La corona funziona bene solo se il passo dei denti
                corrisponde esattamente al passo nominale della catena.
                Se catena e corona non sono coerenti, oppure se la catena
                è allungata oltre tolleranza, i rulli non si appoggiano
                dove dovrebbero: entrano “in ritardo” o “in anticipo”
                e finiscono per colpire il dente invece di rotolare su di esso.
              </p>

              <p>
                Dal punto di vista del carico, la coppia trasmessa
                dalla ruota si traduce in una forza tangenziale sui denti.
                Questa forza non deve concentrarsi in un singolo punto:
                più denti entrano in presa nella zona caricata,
                più lo stress locale si abbassa. È proprio qui che
                precisione del profilo, rigidità del corpo e stato della
                catena diventano un unico sistema. La corona non si può
                giudicare da sola: va sempre letta insieme alla catena.
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
            <span className="captionTag">Usura del dente — come riconoscerla bene</span>
            <p>
              La corona usurata non mostra subito denti rotti: prima
              cambia il profilo. Il fianco di spinta si assottiglia,
              la sommità si inclina, il dente perde simmetria e inizia
              a sembrare “tirato” in una direzione. Quando compare il
              classico effetto a pinna o a uncino, il danno è già in atto.
              Una corona così non accompagna più la catena: la forza
              la trascina male e la usura in modo accelerato.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Immagine — corona nuova vs usurata: profilo dente corretto, dente a uncino, dente assottigliato e dente deformato
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>
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
            <h3>Controllo visivo, bulloneria mozzo, allineamento e pulizia — la routine che salva la corona</h3>
            <p>
              La corona è semplice da ispezionare, e proprio per questo
              non ci sono scuse per ignorarla. Bastano pochi minuti
              per capire se la trasmissione sta lavorando bene o se
              sta iniziando a consumarsi male.
            </p>
          </motion.div>

          <motion.div className="manutGrid" variants={cardVariants}>

            <div className="manutCard">
              <div className="manutCardNum">1</div>
              <h4>Ispezione dei denti — cercare simmetria, spessore e uniformità</h4>
              <p>
                Un dente sano ha profilo pulito, sommità non appuntita,
                lati coerenti e stessa forma lungo tutta la circonferenza.
                Se alcuni denti appaiono più sottili, più piegati o più
                lucidi di altri, la corona sta lavorando in modo disomogeneo.
                Questo può dipendere da usura, catena stanca o disallineamento.
              </p>
            </div>

            <div className="manutCard">
              <div className="manutCardNum">2</div>
              <h4>Bulloni corona — serraggio corretto e controllo periodico</h4>
              <p>
                I bulloni che fissano la corona al mozzo devono essere
                serrati alla coppia prescritta, spesso con frenafiletti
                medio o con sistema di bloccaggio previsto dal costruttore.
                Bulloni lenti significano micro-movimenti tra corona e
                portacorona, ovalizzazione dei fori e battito in rotazione.
              </p>
            </div>

            <div className="manutCard">
              <div className="manutCardNum">3</div>
              <h4>Pulizia dopo fango o sabbia — abrasivo e trasmissione non convivono</h4>
              <p>
                Il fango fine misto a sabbia diventa una pasta abrasiva
                che lavora esattamente tra catena e corona. Lasciarlo lì
                significa trasformare ogni rotazione in una levigatura
                dei denti e dei rulli. Lavaggio e asciugatura sono parte
                della manutenzione meccanica, non semplice estetica.
              </p>
            </div>

            <div className="manutCard">
              <div className="manutCardNum">4</div>
              <h4>Sostituzione insieme al kit trasmissione — la scelta corretta quasi sempre</h4>
              <p>
                Una corona nuova montata con catena e pignone usurati
                comincerà a consumarsi male fin da subito. Vale anche
                il contrario. Nella maggior parte dei casi la regola
                giusta è sostituire il kit completo: catena, pignone
                e corona insieme. È più economico una volta sola che
                due volte in modo sbagliato.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="diagnosBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnosHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi</span>
            <h3>Come capire che la corona non sta più lavorando bene — prima che si mangi tutta la trasmissione</h3>
            <p>
              La corona difficilmente “esplode” senza preavviso. Prima
              manda segnali chiari: variazione di tensione, rumorosità,
              usura laterale della catena, punti duri in rotazione.
              Il problema è notarli quando sono ancora economici.
            </p>
          </motion.div>

          <motion.div className="diagnosGrid" variants={cardVariants}>

            <div className="diagnosCard diagnosCard1">
              <span className="diagnosBadge">Sintomo</span>
              <h4>Tensione catena che cambia a ogni giro ruota</h4>
              <p>
                Se la catena passa da corretta a troppo tesa mentre
                ruoti la ruota posteriore, la corona può essere montata
                eccentrica, deformata o associata a un punto duro della
                catena. È uno dei segnali più importanti perché indica
                che la geometria del sistema non è più costante.
              </p>
            </div>

            <div className="diagnosCard diagnosCard2">
              <span className="diagnosBadge">Sintomo</span>
              <h4>Rumore metallico ritmico dal retrotreno</h4>
              <p>
                Un rumore periodico sincronizzato con la velocità ruota
                suggerisce che i rulli stanno entrando male nei denti
                della corona, oppure che alcuni denti sono già deformati.
                Prima di accusare i cuscinetti ruota conviene sempre
                guardare la trasmissione finale.
              </p>
            </div>

            <div className="diagnosCard diagnosCard3">
              <span className="diagnosBadge">Sintomo</span>
              <h4>Usura laterale lucida solo da un lato dei denti</h4>
              <p>
                Se i denti mostrano lucidatura e consumo soprattutto
                su un solo lato, la catena non sta lavorando in asse.
                Le cause tipiche sono allineamento ruota errato,
                corona non planare o distanziali montati male.
                Non è normale e non va ignorato.
              </p>
            </div>

            <div className="diagnosCard diagnosCard4">
              <span className="diagnosBadge">Sintomo</span>
              <h4>Catena nuova che invecchia in fretta e si fa rumorosa</h4>
              <p>
                Se monti una catena nuova ma il sistema continua a
                essere rumoroso, a tirare male o a presentare segni
                di consumo precoce, la corona vecchia può essere il
                colpevole. Un dente usurato forza il rullo a lavorare
                male e accelera tutto il degrado della trasmissione.
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
            <span className="cardTag">Aftermarket</span>
            <h3>Renthal, Supersprox, JT, Sunstar — perché le corone serie costano di più</h3>
            <p>
              Nei marchi buoni non paghi solo il nome: paghi tolleranze,
              qualità del materiale, precisione del taglio, finitura
              del dente, anodizzazione reale e stabilità del prodotto
              nel tempo. Una corona economica può sembrare identica da
              ferma, ma mostra i limiti appena la trasmissione comincia
              a lavorare forte e sporca.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Portacorona</span>
            <h3>La corona non lavora da sola — mozzo, parastrappi e supporto contano eccome</h3>
            <p>
              Sulle moto che usano parastrappi, il supporto della corona
              filtra parte dei colpi di coppia e protegge la trasmissione.
              Se i gommini sono usurati o il portacorona ha gioco,
              la corona riceve micro-impatti invece di una coppia più
              regolare. A quel punto si consumano male denti, fori e
              spesso anche la catena.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Scelta pratica</span>
            <h3>Quando scegliere acciaio, quando ergal e quando una ibrida</h3>
            <p>
              Se vuoi durata e poca manutenzione: acciaio. Se vuoi
              risposta più pronta e uso racing con manutenzione rigorosa:
              ergal. Se vuoi alleggerire senza sacrificare troppo la
              vita utile: ibrida. La scelta giusta non è quella più
              leggera in assoluto, ma quella più coerente con il tuo
              uso reale della moto.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Corona;