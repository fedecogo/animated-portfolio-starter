import "./grip.scss";
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

const Grip = () => {
  return (
    <section className="grip" id="grip">
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
              Ciclistica — Ruote
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Il grip — forze,<br />fisica e limite di trazione
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il grip non è una proprietà magica del pneumatico — è il risultato
              di forze fisiche precise: attrito meccanico (i tasselli che mordono
              il terreno) e attrito adesivo (il composto che aderisce molecolarmente
              alla superficie). Capire il grip significa capire dove e quando
              il pneumatico smette di funzionare.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Nel fuoristrada l'attrito meccanico domina: i tasselli penetrano
              nel terreno e devono spostare materiale per staccarsi. L'entità
              di questa penetrazione dipende dalla pressione di contatto,
              dalla durezza del terreno e dall'altezza dei tasselli. Su terreno
              compatto prevale l'attrito adesivo — il composto deve essere
              abbastanza morbido da deformarsi nelle micro-rugosità della superficie.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Il cerchio di grip</span>
              <h3>Come si distribuiscono le forze disponibili</h3>
            </div>

            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  Il grip totale disponibile è finito — si può usare in trazione,
                  frenata o sterzo, ma non al 100% in tutte e tre contemporaneamente
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  In accelerazione: la forza longitudinale di trazione consuma
                  parte del budget di grip disponibile
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  In frenata: la forza frenante richiede grip longitudinale —
                  meno disponibile per le correzioni laterali
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  In curva: la forza centrifuga richiede grip laterale —
                  meno disponibile per trazione e frenata simultanee
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── FATTORI DEL GRIP BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="costruzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="costruzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Fattori del grip</span>
            <h3>I tre elementi che determinano il grip disponibile</h3>
            <p>
              Il grip non si misura direttamente — è la somma di tre contributi
              che interagiscono tra loro. Modificare uno di questi parametri
              cambia l'equilibrio generale: non si può aumentare il grip
              senza capire quale dei tre fattori è il collo di bottiglia
              nella situazione specifica.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costComposto">C</span>
              <h4>Composto della mescola — durezza, temperatura e adesione</h4>
              <p>
                La mescola è il fattore più dipendente dalla temperatura:
                lavora in un range ottimale di 60–90°C. Sotto questa soglia
                la gomma è troppo rigida per deformarsi nelle micro-rugosità
                del terreno — il grip adesivo è ridotto del 20–40%.
                Una mescola morbida raggiunge la temperatura di lavoro
                più velocemente e offre più grip su terreno compatto;
                una mescola dura è più resistente all'usura abrasiva
                su terreno ghiaioso. La scelta del composto è la prima
                decisione di setup, prima ancora della pressione.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costTasselli">T</span>
              <h4>Geometria dei tasselli — altezza, passo e angolo di attacco</h4>
              <p>
                I tasselli sono la struttura meccanica che trasforma la coppia
                motore in forza di avanzamento. L'altezza determina la
                profondità di penetrazione nel terreno morbido; la spaziatura
                (passo) determina la capacità di autopulizia — tasselli troppo
                ravvicinati si intasano di fango e perdono grip completamente;
                l'angolo di attacco dei tasselli anteriori e posteriori è
                diverso: l'anteriore è ottimizzato per il freno, il posteriore
                per la trazione. Tasselli arrotondati per usura non mordono
                più — il grip meccanico è ridotto drasticamente.
              </p>
            </div>

            <div className="costruzioneCard">
              <span className="costruzioneIdx costPressione">P</span>
              <h4>Pressione e area di contatto — il footprint come variabile</h4>
              <p>
                La pressione di gonfiaggio determina la forma e l'area del
                footprint — l'impronta del pneumatico sul terreno. Un footprint
                più grande significa più tasselli in contatto con il terreno
                in ogni istante, quindi più forza di grip disponibile in totale.
                Ma un footprint troppo grande (pressione troppo bassa) deforma
                il fianco del pneumatico in modo anomalo, distorce l'angolo
                dei tasselli rispetto al terreno e riduce l'efficienza
                dell'attrito meccanico. C'è un optimum che dipende dal terreno.
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
              <span className="placeholderText">Impronta (footprint) del pneumatico posteriore su terreno morbido — zona di contatto e distribuzione del carico</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Footprint e carico</span>
            <p>
              L'impronta cambia in modo significativo al variare della pressione
              e del carico verticale. Con il pilota in piedi sulle pedane
              e in accelerazione, il trasferimento di peso posteriore aumenta
              il carico sul pneumatico posteriore — il footprint si allarga
              e i tasselli penetrano più profondamente nel terreno.
              Questo è esattamente il momento in cui il grip meccanico
              è al massimo — se il pneumatico è corretto per il terreno.
            </p>
          </div>
        </motion.div>

        {/* ── LIMITE DI TRAZIONE BLOCK ─────────────────────────────────────── */}
        <motion.div
          className="forzeBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="forzeHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il limite di trazione</span>
            <h3>Come riconoscere il limite — e come gestirlo</h3>
            <p>
              Il limite di trazione non si raggiunge con un interruttore: c'è
              una zona di transizione dove il pneumatico è al limite ma ancora
              funzionante. Riconoscere questa zona permette di guidare vicino
              al limite senza superarlo — la differenza tra un pilota veloce
              e uno che cade spesso.
            </p>
          </motion.div>

          <motion.div className="forzeGrid" variants={cardVariants}>
            <div className="forzaCard">
              <span className="forzaNum">01</span>
              <h4>Slittamento controllato — trazione ottimale su terreno morbido</h4>
              <p>
                Un leggero slittamento del posteriore (5–15%) non è perdita
                di trazione — è trazione ottimale su molti terreni morbidi.
                Il pneumatico che "nuota" nel fango sta generando più forza
                di uno bloccato. Il punto di slittamento ottimale dipende
                dalla tipologia di terreno e dall'altezza dei tasselli.
              </p>
            </div>

            <div className="forzaCard">
              <span className="forzaNum">02</span>
              <h4>Blocco della ruota — grip azzerato</h4>
              <p>
                Una ruota bloccata in frenata o in trazione slitta senza rotazione —
                attrito cinetico invece di attrito statico. L'attrito cinetico
                è sempre inferiore a quello statico. Risultato: meno forza
                e meno controllo direzionale simultaneamente.
              </p>
            </div>

            <div className="forzaCard">
              <span className="forzaNum">03</span>
              <h4>Temperatura del pneumatico — il fattore invisibile</h4>
              <p>
                Il composto lavora in un range di temperatura ottimale (60–90°C).
                Sotto questa soglia il grip è ridotto del 20–40% rispetto al
                massimo. I primi giri di ogni sessione sono i più pericolosi —
                il pneumatico non ha ancora raggiunto la temperatura di lavoro.
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
            <span className="captionTag">Il cerchio di grip</span>
            <p>
              Il cerchio di grip è la rappresentazione grafica delle forze
              disponibili in ogni direzione. Il raggio del cerchio rappresenta
              il grip totale — fisso per un dato pneumatico e terreno.
              Ogni forza applicata (trazione, frenata, sterzo) consuma
              una quota di quel cerchio. Capire questo modello permette di
              capire perché si frena male mentre si è in curva — perché
              il budget di grip è già parzialmente consumato dalla forza laterale.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Diagramma cerchio di grip — vettori di trazione, frenata e sterzo sul footprint</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── GESTIONE DEL GRIP BLOCK ──────────────────────────────────────── */}
        <motion.div
          className="distribuzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="distribuzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Gestione del grip</span>
            <h3>Come distribuire il budget di grip tra trazione, frenata e sterzo</h3>
            <p>
              Il grip non si usa — si gestisce. La differenza tra un pilota
              che cade spesso e uno che va veloce in sicurezza è nella capacità
              di non superare il budget totale disponibile, adattando le richieste
              al terreno corrente e alla fase di guida.
            </p>
          </motion.div>

          <motion.div className="distribuzioneGrid" variants={cardVariants}>

            <div className="distCard distTrazione">
              <div className="distCardTop">
                <span className="distBadge badgeTrazione">Trazione</span>
                <span className="distAlbero">Gas progressivo</span>
              </div>
              <h4>Accelerazione progressiva — caricare il posteriore prima del gas</h4>
              <p>
                L'apertura progressiva del gas trasferisce peso verso il
                posteriore prima di chiedere trazione massima — il pneumatico
                viene caricato gradualmente e ha il tempo di trovare grip.
                Aprire di scatto trasferisce peso all'indietro mentre il
                posteriore è ancora leggero — facilità di impennata e perdita
                di direzionalità. Su terreno morbido, un leggero slittamento
                controllato (5–15%) è spesso la condizione di trazione ottimale.
              </p>
            </div>

            <div className="distCard distFrenata">
              <div className="distCardTop">
                <span className="distBadge badgeFrenata">Frenata</span>
                <span className="distAlbero">Distribuzione dinamica del carico</span>
              </div>
              <h4>Frenata progressiva — usare il trasferimento di peso</h4>
              <p>
                In frenata il peso si trasferisce in avanti. L'anteriore,
                sotto carico maggiore, ha più grip disponibile; il posteriore,
                alleggerito, blocca facilmente. La frenata ottimale in
                fuoristrada usa principalmente il freno anteriore (60–70%
                della forza frenante) e usa il posteriore per stabilizzare
                la traiettoria — non per frenare. Su terreno scivoloso
                le proporzioni cambiano per evitare il blocco dell'anteriore.
              </p>
            </div>

            <div className="distCard distSterzo">
              <div className="distCardTop">
                <span className="distBadge badgeSterzo">Sterzo</span>
                <span className="distAlbero">Grip laterale in curva</span>
              </div>
              <h4>Traiettoria in curva — non chiedere trazione e sterzo insieme</h4>
              <p>
                In curva il pneumatico usa una parte del suo budget di grip
                per la forza laterale che mantiene la traiettoria.
                Aprire il gas prima di essere in posizione verticale richiede
                trazione mentre il grip laterale è già impegnato — il posteriore
                può andare largo in modo incontrollato. La regola è semplice:
                prima si raddrizza, poi si apre il gas.
              </p>
            </div>

          </motion.div>
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
            <span className="sectionLabel">Perdita di grip</span>
            <h3>Riconoscere i segnali — prima che diventi una caduta</h3>
            <p>
              La perdita di grip di solito manda segnali prima del cedimento
              completo. Imparare a leggere questi segnali permette di adattare
              lo stile di guida o il setup prima che la situazione degeneri.
            </p>
          </motion.div>

          <motion.div className="diagnGrid" variants={cardVariants}>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Slittamento progressivo del posteriore — avanzamento laterale</h4>
              <p>
                Il posteriore inizia a scivolare lateralmente in modo
                progressivo e gestibile. Segnale: il pneumatico è oltre
                il limite di trazione ma ancora nel regime di attrito cinetico
                controllabile. Ridurre il gas gradualmente — non chiuderlo
                di scatto. L'indirizzo della moto segue il posteriore
                mentre slitta — è normale e controllabile entro certi limiti.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Perdita improvvisa — snap e rischio highside</h4>
              <p>
                Il posteriore slitta improvvisamente e poi riprende grip
                altrettanto bruscamente. Il repentino recupero del grip
                può provocare un highside — il pilota viene proiettato
                verso l'esterno della curva. Causa principale: terreno
                eterogeneo (patch di sabbia su hard pack) o richiesta
                di trazione brusca in curva.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeSintomo">Sintomo</span>
              <h4>Anteriore che va dritto — push/understeer</h4>
              <p>
                In curva l'anteriore non segue la traiettoria e tende
                ad andare dritto nonostante si sterzi. Cause principali:
                troppo gas troppo presto (il peso è trasferito indietro
                e alleggerisce l'anteriore), pressione dell'anteriore
                troppo alta (footprint ridotto, meno grip laterale)
                o pneumatico sbagliato per il terreno.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Temperatura pneumatico — non ancora in range operativo</h4>
              <p>
                Toccare il battistrada con la mano dopo i primi giri —
                deve essere tiepido, non freddo. Un pneumatico freddo
                non ha ancora raggiunto la temperatura di lavoro della
                mescola e il grip adesivo è significativamente ridotto.
                Nelle gare mattutine su terreno freddo, fare un giro
                di riscaldamento adattando lo stile di guida al grip ridotto.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeVerifica">Verifica</span>
              <h4>Stato del battistrada — tasselli slizzati o usura asimmetrica</h4>
              <p>
                Ispezionare visivamente il battistrada dopo ogni sessione.
                Tasselli slizzati (apice arrotondato) non mordono più —
                il grip meccanico è compromesso. Usura asimmetrica (un lato
                più consumato dell'altro) indica setup non corretto:
                pressione sbagliata, geometria ruota fuori allineamento
                o stile di guida molto asimmetrico.
              </p>
            </div>

            <div className="diagnCard">
              <span className="diagnBadge badgeIntervallo">Intervallo</span>
              <h4>Adattamento di stile e pressione al terreno corrente</h4>
              <p>
                Nel corso di una gara o sessione il terreno si evolve —
                si scava, si asciuga, si compatta. Il grip del primo giro
                non è quello dell'ultimo. Adattare la pressione di gonfiaggio
                prima della gara in base alle condizioni previste; adattare
                lo stile di guida durante la sessione al terreno che c'è ora,
                non a quello che era all'inizio.
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
            <span className="cardTag">Trazione</span>
            <h3>Aprire il gas senza bucare — la tecnica conta</h3>
            <p>
              L'accelerazione progressiva permette al pneumatico di trovare grip
              prima di essere sovraccaricato. Aprire di scatto trasferisce peso
              all'indietro e chiede trazione quando il posteriore non è ancora
              sotto carico ottimale — facilità di wheeling e perdita di
              direzionalità.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Frenata</span>
            <h3>Frenata in fuoristrada — gestire il carico dinamico</h3>
            <p>
              In frenata il peso si trasferisce in avanti. L'anteriore, sotto
              carico maggiore, ha più grip disponibile; il posteriore, alleggerito,
              blocca facilmente. La frenata ottimale usa la distribuzione naturale
              del carico — non mezza forza uniforme su entrambi i freni.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Terreno variabile</span>
            <h3>Come il terreno cambia il grip nel corso della gara</h3>
            <p>
              Il grip del primo giro non è quello dell'ultimo. Adattare
              la pressione di gonfiaggio e lo stile di guida al terreno che
              c'è ora, non a quello che era all'inizio. Un pilota che si adatta
              è più veloce di uno che resta sul setup del warm-up.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Grip;
