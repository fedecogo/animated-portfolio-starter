import "./chiave.scss";
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

const Chiave = () => {
  return (
    <section className="chiave" id="chiave">
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
              Elettronica — Chiave
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il blocchetto chiave — interfaccia meccanica fuori, commutatore elettrico dentro
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              La chiave sembra un componente banale perché il pilota la usa con un gesto
              semplicissimo: inserire, ruotare, accendere. In realtà il blocchetto chiave
              è un punto di passaggio fondamentale tra volontà del pilota e alimentazione
              della moto. Da fuori è un cilindro meccanico con nottolini e posizioni definite;
              da dentro è un commutatore elettrico che collega o interrompe circuiti precisi.
              Quando giri la chiave non “accendi magicamente la moto”: stai autorizzando
              il passaggio di corrente verso determinati rami dell’impianto.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Questo componente è interessante proprio perché unisce due mondi.
              Da un lato c’è la parte meccanica: codifica della chiave, usura delle cave,
              rotazione del cilindro, eventuale bloccasterzo. Dall’altro c’è la parte elettrica:
              contatti interni, piste, mollette, lamelle e cablaggio in uscita. Se il cilindro
              si usura, la chiave gira male; se i contatti si ossidano, la moto può spegnersi,
              non alimentare il quadro o far arrivare tensione in modo intermittente.
              Il blocchetto chiave è quindi molto più di un semplice interruttore: è un nodo
              di consenso, distribuzione e sicurezza.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del blocchetto</span>
              <h3>Quattro elementi da capire per leggere davvero il sistema chiave</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Cilindro meccanico — la chiave allinea i nottolini interni
                  e permette la rotazione del nucleo; senza allineamento corretto
                  il blocchetto resta fisicamente bloccato
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  Commutatore elettrico — dietro al cilindro c’è una parte che
                  apre o chiude contatti in base alla posizione OFF, ON, PARK o LOCK,
                  distribuendo la tensione ai rami corretti
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  Cablaggio in uscita — i cavi che arrivano e partono dal blocchetto
                  portano alimentazione principale, ritorni e linee dedicate verso quadro
                  e servizi; un falso contatto qui ferma tutto
                </span>
              </div>

              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  Bloccasterzo e sicurezza — in molte moto il blocchetto non comanda
                  solo l’elettricità ma integra anche il perno che blocca meccanicamente
                  la sterzata in posizione parcheggio
                </span>
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
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Schema del blocchetto chiave in sezione — cilindro, nottolini, corpo,
                contatti elettrici posteriori e fascio cavi che entra/esce dal commutatore
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>

          <div className="visualCaption">
            <span className="captionTag">Dentro il blocchetto</span>
            <p>
              Dall’esterno il pilota vede solo la serratura e la sede della chiave.
              In realtà dietro al cilindro c’è un elemento rotante che mette in comunicazione
              piste o contatti differenti a seconda della posizione scelta. I cavi che arrivano
              al blocchetto non sono decorativi: sono il collegamento fisico tra alimentazione
              principale della moto e i circuiti che devono essere attivati o esclusi.
              È qui che la volontà del pilota diventa consenso elettrico.
            </p>
          </div>
        </motion.div>

        {/* ── PRINCIPI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="principiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="principiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fisica e logica del blocchetto</span>
            <h3>Rotazione meccanica, commutazione elettrica, continuità dei contatti e consenso ai circuiti</h3>
            <p>
              Per capire la chiave bisogna leggerla come un selettore a posizioni.
              Ogni posizione meccanica corrisponde a una configurazione elettrica diversa,
              e la qualità del funzionamento dipende sia dalla precisione meccanica
              sia dalla qualità del contatto elettrico interno.
            </p>
          </motion.div>

          <motion.div className="principiGrid" variants={cardVariants}>
            <div className="principiCard">
              <span className="principiIdx">01</span>
              <h4>La chiave non trasporta energia: autorizza la commutazione</h4>
              <p>
                Il metallo della chiave non è il conduttore principale del sistema.
                La chiave serve ad allineare i nottolini del cilindro e consentire
                la rotazione dell’elemento interno. È questa rotazione che comanda
                il commutatore elettrico posto dietro al cilindro. In altre parole,
                la chiave dà il permesso meccanico; il commutatore esegue la funzione elettrica.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">02</span>
              <h4>Ogni posizione corrisponde a una diversa continuità tra i contatti</h4>
              <p>
                In posizione OFF il circuito principale resta aperto o mantiene attivi
                solo rami molto specifici. In posizione ON il blocchetto collega
                l’alimentazione ai servizi necessari all’uso della moto. In alcune moto
                esistono anche PARK o LOCK, dove il comportamento dei contatti cambia ancora.
                La chiave quindi non è solo acceso/spento: è una matrice semplificata
                di connessioni elettriche selettive.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">03</span>
              <h4>Il vero nemico del blocchetto è la resistenza di contatto</h4>
              <p>
                Quando lamelle, piste o terminali interni si ossidano, la continuità
                non sparisce sempre del tutto. A volte semplicemente peggiora.
                Questo significa caduta di tensione, alimentazione instabile,
                riaccensioni casuali del quadro o spegnimenti intermittenti.
                Il blocchetto può quindi sembrare “quasi funzionante” pur essendo già guasto
                dal punto di vista elettrico.
              </p>
            </div>

            <div className="principiCard">
              <span className="principiIdx">04</span>
              <h4>I cavi del blocchetto sono un punto di flessione e vibrazione continuo</h4>
              <p>
                Il fascio cavi che parte dal blocchetto vive in una zona critica:
                vicino alla piastra di sterzo, soggetto a pieghe, vibrazioni, calore,
                umidità e movimento continuo del manubrio. Per questo i problemi
                non nascono solo dentro il commutatore: possono comparire anche
                nel punto in cui i conduttori entrano nel corpo del blocchetto
                o nel tratto immediatamente successivo.
              </p>
            </div>
          </motion.div>
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
            <span className="sectionLabel">Com’è fatto</span>
            <h3>Cilindro, nottolini, commutatore posteriore e fascio cavi — il blocchetto come componente misto</h3>
            <p>
              Il blocchetto chiave è uno dei pochi componenti in cui si toccano davvero
              meccanica di precisione, contattistica elettrica e cablaggio strutturale
              nello stesso corpo. Per questo la diagnosi va fatta guardando tutte e tre
              le zone e non solo la serratura visibile.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>
            <div className="costruzioneCard">
              <span className="costruzioneIdx">01</span>
              <h4>Il cilindro con i nottolini — la parte che riconosce la chiave corretta</h4>
              <p>
                Il cilindro contiene elementi mobili codificati sulla geometria
                della chiave. Quando la chiave corretta entra, i nottolini si allineano
                con il profilo del cilindro e permettono la rotazione. Chiave usurata,
                sporco, lubrificazione sbagliata o usura del cilindro impediscono
                un allineamento pulito e rendono il movimento duro o incostante.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">02</span>
              <h4>Il corpo commutatore posteriore — la parte che davvero apre e chiude i circuiti</h4>
              <p>
                Dietro al cilindro meccanico si trova il commutatore elettrico.
                Può essere realizzato con piste, contatti striscianti, lamelle
                e un disco rotante che cambia configurazione in base alla posizione
                della chiave. È qui che l’usura elettrica diventa concreta:
                piccoli archi, ossidazione, deposito di sporco e perdita di elasticità
                dei contatti modificano la qualità della continuità.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">03</span>
              <h4>Il fascio cavi del blocchetto — alimentazione, ritorni e linee in uscita</h4>
              <p>
                Dal retro del blocchetto esce un piccolo cablaggio dedicato che convoglia
                le linee necessarie alla sua funzione. In genere c’è una linea di alimentazione
                principale e una o più uscite verso quadro e rami attivati dalla posizione ON.
                Il punto critico non è solo il connettore finale, ma anche la zona in cui
                i cavi escono dal corpo: lì lo stress meccanico si concentra di più.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx">04</span>
              <h4>Il bloccasterzo — una funzione meccanica separata ma integrata nello stesso corpo</h4>
              <p>
                In molte moto il blocchetto integra un perno che entra in una sede
                del cannotto o della piastra per bloccare la sterzata. Questa funzione
                non fa parte del consenso elettrico ma condivide lo stesso corpo meccanico.
                Per questo un blocchetto può ruotare male per problemi di serratura
                o bloccasterzo anche se la parte elettrica è ancora integra, e viceversa.
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
            <span className="sectionLabel">Posizioni e varianti</span>
            <h3>OFF, ON, LOCK, PARK — la chiave non fa sempre la stessa cosa in ogni posizione</h3>
            <p>
              Il comportamento del blocchetto cambia a seconda della posizione selezionata.
              Anche quando dall’esterno sembra solo una rotazione di pochi gradi,
              all’interno cambiano sia la geometria meccanica sia le connessioni elettriche disponibili.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>
            <div className="tipCard tipOff">
              <div className="tipCardTop">
                <span className="tipBadge badgeOff">OFF</span>
                <span className="tipSub">Circuito principale escluso</span>
              </div>
              <h4>La moto è disalimentata o quasi — il blocchetto interrompe il consenso generale</h4>
              <p>
                In OFF il blocchetto interrompe il collegamento principale verso i servizi
                che non devono restare attivi a moto spenta. A seconda del progetto
                alcuni circuiti secondari possono mantenere una minima alimentazione indiretta,
                ma il consenso d’uso della moto è tolto. È la posizione di sicurezza elettrica di base.
              </p>
            </div>

            <div className="tipCard tipOn">
              <div className="tipCardTop">
                <span className="tipBadge badgeOn">ON</span>
                <span className="tipSub">Alimentazione servizi principali</span>
              </div>
              <h4>Il quadro si accende e il sistema entra in stato operativo</h4>
              <p>
                In ON il blocchetto mette in comunicazione l’alimentazione principale
                con le linee che devono ricevere tensione per l’uso normale della moto.
                È qui che entrano in gioco la qualità dei contatti interni e del cablaggio:
                se la continuità è sporca, il quadro può lampeggiare, riavviarsi o non accendersi affatto.
              </p>
            </div>

            <div className="tipCard tipLock">
              <div className="tipCardTop">
                <span className="tipBadge badgeLock">LOCK</span>
                <span className="tipSub">Sicurezza meccanica</span>
              </div>
              <h4>La funzione principale qui non è elettrica ma fisica: bloccare la sterzata</h4>
              <p>
                In LOCK il perno del bloccasterzo entra nella sua sede e impedisce
                la rotazione del manubrio. Dal punto di vista elettrico la moto resta
                normalmente spenta, ma il comportamento meccanico del blocchetto cambia:
                serve una precisa posizione dello sterzo e una rotazione più profonda
                del cilindro rispetto alle posizioni operative.
              </p>
            </div>

            <div className="tipCard tipPark">
              <div className="tipCardTop">
                <span className="tipBadge badgePark">PARK</span>
                <span className="tipSub">Solo alcuni servizi attivi</span>
              </div>
              <h4>Una configurazione particolare in cui il blocchetto alimenta solo rami specifici</h4>
              <p>
                Dove presente, PARK mantiene attivi solo determinati circuiti,
                tipicamente luci di posizione o servizi minimi da parcheggio.
                È una posizione interessante perché dimostra bene che il blocchetto
                è un selettore di configurazioni elettriche e non un semplice interruttore binario.
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
            <span className="captionTag">Cavi del blocchetto</span>
            <p>
              In un buon schema va mostrato chiaramente che il blocchetto non vive isolato:
              sul retro arrivano e partono cavi precisi. Uno porta alimentazione,
              altri escono verso i rami che devono ricevere tensione in ON o in altre posizioni.
              La zona vicino alla piastra di sterzo è critica perché i cavi lavorano
              a ogni sterzata, quindi anche una saldatura interna o un rame spezzato
              sotto guaina può causare difetti intermittenti difficili da trovare.
            </p>
          </div>

          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Schema o foto del retro blocchetto con fascio cavi, connettore
                e punto di flessione vicino al cannotto di sterzo
              </span>
              <span className="placeholderSub">
                Sostituisci questo div con &lt;img&gt; o &lt;video&gt;
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="diagnosiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnosiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi e guasti</span>
            <h3>Chiave dura, quadro intermittente, spegnimenti e falsi contatti — come leggere il blocchetto</h3>
            <p>
              Il blocchetto chiave tradisce i suoi problemi in modi molto specifici.
              Alcuni sintomi sono puramente meccanici, altri puramente elettrici,
              e i più insidiosi sono quelli misti: la chiave gira, ma il consenso
              non arriva sempre nello stesso modo.
            </p>
          </motion.div>

          <motion.div className="diagnosiGrid" variants={cardVariants}>
            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>La chiave entra o gira male — usura meccanica, sporco o cilindro affaticato</h4>
              <p>
                Se la chiave oppone resistenza, si impunta o richiede movimenti anomali,
                il problema è spesso nel cilindro: sporco, nottolini stanchi, chiave usurata
                o lubrificazione impropria. In questi casi il guasto è soprattutto meccanico,
                ma può evolvere fino a impedire una rotazione completa e quindi anche
                la corretta attivazione della parte elettrica.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>Il quadro si accende a intermittenza — contatti interni ossidati o cavi lesionati</h4>
              <p>
                Quando il quadro si illumina e si spegne muovendo leggermente la chiave
                o sterzando il manubrio, il sospetto forte cade sul blocchetto o sul suo cablaggio.
                Spesso la parte meccanica sembra normale, ma la continuità elettrica
                è instabile per via di lamelle ossidate, piste consumate o conduttori
                parzialmente spezzati in uscita dal corpo.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeSintomo">Sintomo</span>
              <h4>La moto si spegne sulle buche o sterzando — classico problema nel fascio cavi della chiave</h4>
              <p>
                Questo è uno dei segnali più tipici. Se vibrazioni o movimento del manubrio
                causano spegnimenti improvvisi, il difetto non è quasi mai nella serratura visibile
                ma nel punto in cui i cavi del blocchetto si flettono ripetutamente.
                Il rame può spezzarsi internamente lasciando la guaina apparentemente intatta.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Controllo continuità elettrica — verificare quali contatti si chiudono in ogni posizione</h4>
              <p>
                Un controllo corretto non si limita a vedere se “arriva corrente”.
                Bisogna verificare continuità e comportamento dei terminali nelle varie
                posizioni della chiave. OFF, ON, PARK e LOCK devono produrre esattamente
                le connessioni previste. Se una posizione dà continuità incerta o variabile,
                il commutatore è usurato o contaminato.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeMisura">Misura</span>
              <h4>Controllo del fascio cavi — muovere la guaina mentre si osserva il comportamento del quadro</h4>
              <p>
                Il test dinamico è spesso più utile di quello statico. Muovere con cautela
                il fascio cavi in uscita dal blocchetto mentre il quadro è acceso aiuta
                a individuare interruzioni intermittenti. Se il difetto compare solo
                sotto movimento, il problema è molto probabilmente nella zona di piega
                e non nei contatti interni del cilindro.
              </p>
            </div>

            <div className="diagnosiCard">
              <span className="diagnosiBadge badgeIntervallo">Intervallo</span>
              <h4>Manutenzione preventiva — controllare il blocchetto prima che diventi un guasto totale</h4>
              <p>
                Durezza anomala nella rotazione, giochi strani della chiave,
                riavvii casuali del quadro o piccoli spegnimenti sporadici sono segnali
                da non ignorare. Intervenire presto permette spesso di salvare o riparare
                il problema prima che il blocchetto lasci completamente la moto senza consenso elettrico.
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
            <span className="cardTag">Idea chiave</span>
            <h3>Il blocchetto chiave è una serratura meccanica davanti e un selettore elettrico dietro</h3>
            <p>
              Ridurlo a un semplice “on/off” è sbagliato. Il suo compito reale
              è tradurre una rotazione autorizzata in una configurazione precisa
              di continuità elettrica verso i circuiti della moto.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Errore classico</span>
            <h3>Guardare solo il cilindro visibile e dimenticare che il guasto può stare nei contatti o nei cavi</h3>
            <p>
              Molti pensano che se la chiave gira il blocchetto sia sano.
              In realtà una gran parte dei problemi nasce dietro: commutatore elettrico
              ossidato, terminali deboli o cablaggio lesionato nella zona di sterzo.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo copre</span>
            <h3>Qui il focus è sul blocchetto chiave, sulle sue posizioni e sul cablaggio dedicato</h3>
            <p>
              Questo capitolo tratta il sistema chiave come componente meccanico-elettrico:
              cilindro, contatti, posizioni funzionali, cavi che arrivano e partono
              dal blocchetto e sintomi tipici di guasto. Altri sottosistemi elettronici
              vengono richiamati solo quando servono a capire cosa il blocchetto abilita o interrompe.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Chiave;