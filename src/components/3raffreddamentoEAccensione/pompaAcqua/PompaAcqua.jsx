import "./pompaAcqua.scss";
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

const PompaAcqua = () => {
  return (
    <section className="pompaAcqua" id="pompa-acqua">
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
              Raffreddamento
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              La pompa acqua
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La pompa acqua è il cuore pulsante del circuito di
              raffreddamento — l'unico componente attivo che mette
              in moto il liquido refrigerante. Senza di lei il
              liquido starebbe fermo e il calore del motore non
              arriverebbe mai al radiatore. Nei motori a 2 tempi
              da fuoristrada è quasi sempre una pompa centrifuga
              a girante, azionata meccanicamente dall'albero
              motore attraverso un ingranaggio o una frizione
              d'acqua dedicata.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              La sua semplicità costruttiva nasconde un punto critico:
              la tenuta meccanica (mechanical seal) che separa il lato
              liquido dal lato olio del carter. Quando questa tenuta
              cede — per usura, per liquido degradato che attacca
              le guarnizioni, o per cavitazione — il liquido
              refrigerante entra nel carter e si mescola all'olio
              del cambio. Il risultato è visibile immediatamente:
              olio color latte nel carter e liquido che cala senza
              perdite esterne. È uno dei guasti più facili da
              prevenire e più costosi da ignorare.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia della pompa</span>
              <h3>I componenti interni</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Albero pompa — trasmette il moto dall'ingranaggio di comando alla girante</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Girante (impeller) — le pale in rotazione generano la forza centrifuga che muove il liquido</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Tenuta meccanica — separa il circuito liquido dal carter olio. Il componente più critico</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Cuscinetto albero — supporta l'albero in rotazione e isola meccanicamente i due lati</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">05</span>
                <span className="miniText">Corpo pompa — alloggiamento in alluminio con voluta che convoglia il flusso verso l'uscita</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FUNZIONAMENTO BLOCK ─────────────────────────────────────────── */}
        <motion.div
          className="funzBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="funzHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Come funziona</span>
            <h3>La pompa centrifuga — forza centrifuga convertita in pressione</h3>
            <p>
              La pompa centrifuga sfrutta un principio fisico semplice:
              la girante in rotazione accelera il liquido radialmente
              verso l'esterno per forza centrifuga. All'uscita della
              girante la velocità del liquido viene convertita in
              pressione dalla voluta — un canale a sezione crescente
              che rallenta il flusso e accumula energia di pressione.
              È questa pressione che spinge il liquido attraverso
              il circuito fino al radiatore e ritorno.
            </p>
          </motion.div>

          <motion.div className="funzGrid" variants={cardVariants}>

            <div className="funzCard">
              <div className="funzFormula">
                <span className="formulaEq">ΔP = ½ · ρ · (u₂² − u₁²)</span>
                <span className="formulaLabel">Pressione generata dalla girante</span>
              </div>
              <h4>La pressione cresce con il quadrato della velocità</h4>
              <p>
                La pressione generata dalla girante cresce con il
                quadrato della velocità periferica — raddoppiare i
                giri quadruplica la pressione disponibile. Nel 2T
                questo significa che a regime minimo la portata
                è ridotta ma sufficiente per il carico termico basso,
                mentre agli alti regimi — quando il motore genera
                più calore — la pompa lavora automaticamente di più
                senza alcun controllo esterno. È una regolazione
                intrinseca e gratuita.
              </p>
            </div>

            <div className="funzCard">
              <h4>Azionamento dall'albero motore — il rapporto di trasmissione</h4>
              <p>
                La pompa acqua è quasi sempre azionata direttamente
                dall'albero motore attraverso un piccolo ingranaggio
                elicoidale o un albero coassiale. Il rapporto di
                trasmissione è tipicamente compreso tra 0,8:1 e 1,2:1
                rispetto al regime motore — la pompa gira a una velocità
                molto simile a quella dell'albero. Questo significa che
                su un motore da 12.000 giri la girante gira a 10.000 –
                14.000 giri al minuto: velocità che richiedono una
                girante perfettamente bilanciata e una tenuta meccanica
                di qualità per non generare vibrazioni e micro-perdite.
              </p>
            </div>

            <div className="funzCard">
              <h4>Portata vs pressione — perché la pompa non è mai il collo di bottiglia</h4>
              <p>
                Una pompa centrifuga ben dimensionata genera sempre
                più portata di quanto il circuito possa effettivamente
                richiedere. Il vero collo di bottiglia del raffreddamento
                non è mai la pompa — è quasi sempre il radiatore intasato,
                il liquido degradato o le bolle d'aria nel circuito che
                creano zone morte senza scambio termico. Questo è il motivo
                per cui sostituire la pompa su un motore che surriscalda
                quasi mai risolve il problema — ed è sempre meglio
                partire dalla diagnosi completa del circuito.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── TENUTA BLOCK — il componente critico ────────────────────────── */}
        <motion.div
          className="tenutaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tenutaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il componente critico</span>
            <h3>La tenuta meccanica — quello che separa l'acqua dall'olio</h3>
            <p>
              La tenuta meccanica (mechanical seal) è il componente
              più importante e più fragile della pompa acqua. È composta
              da due superfici di tenuta — una fissa nel corpo pompa,
              una rotante solidale all'albero — che scorrono l'una
              sull'altra con una pressione di contatto calibrata.
              Tra le due superfici si mantiene un film sottilissimo
              di liquido refrigerante che lubrifica il contatto
              e impedisce la perdita. Quando questo film viene meno —
              per liquido esaurito, per corsa a secco o per depositi
              calcarei che rigano le superfici — la tenuta cede.
            </p>
          </motion.div>

          <motion.div className="tenutaGrid" variants={cardVariants}>

            <div className="tenutaCard tenutaOk">
              <span className="tenutaBadge badgeOk">Tenuta integra</span>
              <h4>Come funziona quando è sana</h4>
              <p>
                Il film di liquido tra le superfici di tenuta è
                dell'ordine di 1 – 3 µm — meno di un capello umano.
                Le due facce non si toccano mai realmente: scorrono
                sul film idrodinamico che si forma per la rotazione.
                L'usura è minima e la durata in condizioni normali
                è di migliaia di ore. Il liquido che lubrifica la
                tenuta è lo stesso liquido refrigerante del circuito —
                per questo la qualità e la freschezza del liquido
                impattano direttamente sulla vita della tenuta.
              </p>
            </div>

            <div className="tenutaCard tenutaRisk">
              <span className="tenutaBadge badgeRisk">Fattori di rischio</span>
              <h4>Cosa uccide la tenuta prematuramente</h4>
              <p>
                Liquido refrigerante degradato (acido, con sedimenti):
                attacca le superfici di tenuta e forma depositi abrasivi
                che rigano le facce di scorrimento. Corsa a secco anche
                breve: senza il film lubrificante le superfici si
                toccano direttamente e si surriscaldano in secondi —
                una singola corsa a secco può distruggere una tenuta
                nuova. Acqua dura con calcio: depositi calcarei sulle
                superfici di tenuta che interrompono il film e creano
                punti di contatto secco. Cavitazione: bolle di vapore
                che collassano vicino alle superfici di tenuta generando
                micro-impatti erosivi.
              </p>
            </div>

            <div className="tenutaCard tenutaSpia">
              <span className="tenutaBadge badgeSpia">Spia di cedimento</span>
              <h4>Il foro di drenaggio — il segnale da non ignorare</h4>
              <p>
                Tra la tenuta meccanica e il cuscinetto dell'albero
                pompa c'è sempre un piccolo foro di drenaggio visibile
                sul corpo pompa. Questo foro è progettato per scaricare
                all'esterno qualsiasi perdita della tenuta prima che
                il liquido raggiunga il cuscinetto e il carter olio.
                Qualche goccia di liquido da questo foro durante
                la fase di rodaggio di una tenuta nuova è normale.
                Una perdita continua indica che la tenuta è ceduta —
                va sostituita prima che il liquido contamini l'olio
                del cambio. Il foro di drenaggio è il sistema di
                allarme precoce più affidabile della pompa.
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
              <span className="placeholderText">Immagine — pompa acqua esplosa con albero, girante, tenuta meccanica e corpo etichettati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Sezione esplosa</span>
            <p>
              La vista esplosa mostra chiaramente la sequenza dei
              componenti sull'albero: dall'ingranaggio di comando
              esterno, attraverso il cuscinetto, la tenuta meccanica
              doppia (lato olio + lato acqua), fino alla girante
              avvitata o calettata sull'estremità. Il foro di
              drenaggio si apre nello spazio tra le due tenute —
              zona di guardia che impedisce la contaminazione
              crociata acqua-olio.
            </p>
          </div>
        </motion.div>

        {/* ── GIRANTE BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="giranteBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="giranteHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">La girante</span>
            <h3>Plastica vs alluminio vs acciaio — tre materiali per tre filosofie</h3>
            <p>
              La girante è l'unica parte in movimento del circuito
              a contatto diretto con il liquido refrigerante. Il suo
              materiale determina la portata massima, la durata,
              la resistenza alla cavitazione e il comportamento
              in caso di liquido degradato.
            </p>
          </motion.div>

          <motion.div className="giranteGrid" variants={cardVariants}>

            <div className="giranteCard girantePlastica">
              <span className="giranteBadge badgePlastica">Plastica / nylon</span>
              <h4>Leggera, economica, fragile alle temperature</h4>
              <p>
                La girante in plastica rinforzata con fibra di vetro
                (PA66-GF30 o simili) è lo standard OEM sulla maggior
                parte delle moto di serie. Pesa pochissimo, è immune
                alla corrosione e costa molto meno dell'alluminio.
                Il limite è la temperatura: oltre i 120 – 130 °C
                il nylon perde rigidità e le pale si deformano,
                riducendo l'efficienza della pompa. In caso di
                surriscaldamento — quando la pompa dovrebbe lavorare
                di più — la girante plastica è già degradata.
                L'altro limite è il liquido degradato: un liquido
                troppo acido attacca il polimero nel tempo, e detriti
                duri nel circuito erodono rapidamente le pale sottili.
              </p>
            </div>

            <div className="giranteCard giranteAlluminio">
              <span className="giranteBadge badgeAlluminio">Alluminio anodizzato</span>
              <h4>Il compromesso ideale per l'uso sportivo</h4>
              <p>
                La girante in alluminio anodizzato è la scelta aftermarket
                di riferimento per uso agonistico e intenso (Boyesen,
                Tusk, Hot Rods). Resistenza termica molto superiore alla
                plastica, immunità alla deformazione in condizioni di
                surriscaldamento, e — dettaglio importante — pale più
                sottili e profilate che offrono una portata maggiore del
                5 – 15% a parità di regime rispetto alla girante OEM
                in plastica. Il costo è 3 – 5 volte superiore ma la
                durata in uso intenso è proporzionalmente più lunga.
                Anodizzazione dura (tipo III) per resistere all'erosione
                da cavitazione e ai detriti in sospensione nel liquido.
              </p>
            </div>

            <div className="giranteCard giranteAcciaio">
              <span className="giranteBadge badgeAcciaio">Acciaio inox</span>
              <h4>Per le applicazioni estreme — peso in cambio di indistruttibilità</h4>
              <p>
                Le giranti in acciaio inossidabile sono rare nel fuoristrada
                — usate principalmente in applicazioni industriali e in
                alcune preparazioni enduro maratona dove l'affidabilità
                assoluta prevale su ogni altra considerazione. Il peso
                è significativamente superiore rispetto all'alluminio
                ma la resistenza agli urti, alla corrosione e alla
                cavitazione è praticamente illimitata. Il momento
                d'inerzia maggiore richiede una frazione di potenza
                in più all'avviamento — trascurabile su un motore
                da 50+ CV, percettibile su un motore da 30 CV o meno.
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
            <span className="captionTag">Olio color latte — il segnale definitivo</span>
            <p>
              L'olio del cambio che diventa bianco-lattiginoso è il
              segnale inequivocabile che la tenuta meccanica ha ceduto
              e il liquido refrigerante è entrato nel carter.
              L'emulsione acqua-olio perde completamente le proprietà
              lubrificanti — in pochi minuti di funzionamento i
              cuscinetti di banco e gli ingranaggi del cambio
              iniziano a danneggiarsi. Fermarsi immediatamente
              e non riavviare finché il circuito non è ripristinato.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — olio emulsionato color latte estratto dal carter vs olio sano</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
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
            <h3>Sostituzione della tenuta, ispezione girante e upgrade aftermarket</h3>
            <p>
              La pompa acqua non richiede manutenzione frequente —
              ma quando i segnali arrivano vanno letti subito.
              Ignorare una tenuta che perde è la via più rapida
              verso un motore da ricostruire.
            </p>
          </motion.div>

          <motion.div className="manutSteps" variants={cardVariants}>

            <div className="manutStep">
              <div className="manutNum">1</div>
              <div className="manutContent">
                <h4>Ispezione periodica — il foro di drenaggio e il livello olio</h4>
                <p>
                  Ad ogni cambio olio del cambio verificare il colore
                  dell'olio estratto: trasparente ambrato è sano,
                  bianco lattiginoso significa acqua nel carter —
                  tenuta ceduta. Contestualmente ispezionare visivamente
                  il foro di drenaggio della pompa con il motore
                  freddo: deve essere asciutto o con tracce minime
                  di umidità. Una perdita attiva anche piccola
                  richiede sostituzione della tenuta entro la sessione
                  successiva, non oltre.
                </p>
              </div>
            </div>

            <div className="manutStep">
              <div className="manutNum">2</div>
              <div className="manutContent">
                <h4>Sostituzione della tenuta — procedura e componenti</h4>
                <p>
                  La sostituzione della tenuta meccanica richiede
                  lo smontaggio del coperchio pompa (solitamente 3 – 4
                  viti sul lato destro del motore), l'estrazione
                  dell'albero con girante e la rimozione della tenuta
                  dall'alloggiamento. La tenuta nuova va installata
                  con un tampone piatto dello stesso diametro —
                  mai colpire direttamente la ceramica con un martello.
                  Sostituire sempre anche il cuscinetto dell'albero
                  in un unico intervento: se la tenuta ha ceduto
                  per usura, il cuscinetto è nella stessa condizione.
                  Usare solo kit originali o aftermarket certificati —
                  le tenute economiche non-specifiche durano 10 – 20%
                  del tempo di quelle originali.
                </p>
              </div>
            </div>

            <div className="manutStep">
              <div className="manutNum">3</div>
              <div className="manutContent">
                <h4>Ispezione della girante e upgrade</h4>
                <p>
                  Con la pompa smontata ispezionare la girante: le
                  pale devono essere integre, senza erosioni, senza
                  crepe e senza depositi calcarei che riducono la
                  sezione dei canali. Una girante plastica OEM dopo
                  molte ore può avere le pale visibilmente erose —
                  sostituirla è l'occasione giusta per passare alla
                  versione in alluminio aftermarket. Il gain in portata
                  del 10 – 15% è reale e misurabile su motori che
                  tendono al surriscaldamento in uso lento e prolungato
                  (prove in salita, enduro con tratti a piedi d'uomo).
                </p>
              </div>
            </div>

            <div className="manutStep">
              <div className="manutNum">4</div>
              <div className="manutContent">
                <h4>Spurgo aria dopo ogni intervento sul circuito</h4>
                <p>
                  Dopo ogni intervento che ha aperto il circuito —
                  sostituzione tenuta, cambio liquido, smontaggio
                  tubi — il circuito va spurgato dall'aria intrappolata.
                  Una bolla d'aria ferma nel punto più alto del circuito
                  (solitamente il raccordo sulla testata) crea una
                  zona senza liquido dove il calore non viene smaltito.
                  Il metodo: riempire lentamente il radiatore con il
                  motore spento, stringere leggermente il tubo di ritorno
                  per fare uscire le bolle, avviare il motore a regime
                  moderato per 5 minuti lasciando il tappo del radiatore
                  aperto — le bolle residue salgono e escono.
                  Poi ricontrollare il livello e chiudere.
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
            <span className="cardTag">Cavitazione</span>
            <h3>Cavitazione — quando il liquido evapora dentro alla pompa</h3>
            <p>
              La cavitazione si verifica quando la pressione locale
              nel circuito scende sotto la pressione di vapore del
              liquido — che evapora formando bolle. Quando queste
              bolle collassano vicino alle superfici metalliche
              generano micro-impatti con pressioni locali di migliaia
              di bar che erodono fisicamente la girante e il corpo
              pompa. Le cause più comuni nel 2T: livello basso,
              tubo di aspirazione parzialmente ostruito, liquido
              troppo caldo senza glicole sufficiente. Il sintomo
              è un rumore irregolare di "ghiaia" proveniente dalla
              zona pompa a regimi elevati.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Frizione d'acqua</span>
            <h3>La frizione d'acqua — perché alcune moto ce l'hanno</h3>
            <p>
              Alcune moto da cross e da enduro montano una frizione
              d'acqua (water pump clutch) tra l'albero motore e
              la pompa acqua. È una piccola frizione centrifuga che
              disinnesta la pompa a regime molto basso — tipicamente
              sotto i 1.500 – 2.000 giri — riducendo la resistenza
              all'avviamento con il kick e proteggendo la girante
              dai picchi di coppia dell'avviamento a freddo. A regime
              normale la frizione è sempre inserita e la pompa gira
              solidale all'albero. Non richiede manutenzione specifica
              ma va ispezionata con il resto della pompa.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Diagnosi</span>
            <h3>Surriscaldamento nonostante il circuito pieno — la girante è la causa</h3>
            <p>
              Se il motore surriscalda con livello corretto, liquido
              fresco e radiatore pulito, la girante è la prima
              cosa da verificare. Una girante plastica degradata
              o con pale rotte gira nel liquido senza spostarlo
              efficacemente — la portata crolla ma non c'è nessun
              segnale esterno visibile. Smontare la pompa e
              verificare visivamente l'integrità delle pale è
              l'unico modo per escluderla. Su una moto con molte
              ore di uso e mai un controllo alla pompa, cambiare
              girante e tenuta in via preventiva ha un costo
              irrisorio rispetto a un motore fuso.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default PompaAcqua;
