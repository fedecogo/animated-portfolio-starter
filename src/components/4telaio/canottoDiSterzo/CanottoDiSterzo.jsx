import "./canottoDiSterzo.scss";
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

const CanottoDiSterzo = () => {
  return (
    <section className="canottoDiSterzo" id="canotto-di-sterzo">
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
              Telaio — Canotto di sterzo
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Canotto di sterzo<br />
              <span className="accentText">e cuscinetti</span>
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il canotto di sterzo è il punto dove il telaio incontra
              la forcella — il nodo attorno al quale ruota tutto il
              sistema di sterzo. È la zona più sollecitata dell'intero
              telaio: ogni frenata, ogni impatto frontale, ogni cambio
              di direzione concentra qui le forze più alte della struttura.
              I cuscinetti di sterzo che vivono al suo interno sono
              componenti di precisione che determinano direttamente
              la qualità dello sterzo — e che quasi nessuno sostituisce
              con la frequenza che richiederebbero.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Un cuscinetto di sterzo usurato non si rompe di schianto —
              si degrada progressivamente. Prima compare un punto morto
              al centro, poi un leggero gioco percepibile in frenata,
              poi un'imprecisione crescente nella risposta allo sterzo.
              Il processo può durare mesi — abbastanza a lungo perché
              il pilota si abitui alla degradazione senza accorgersene.
              È per questo che l'ispezione periodica dei cuscinetti
              di sterzo è uno dei controlli più trascurati e più
              importanti della manutenzione del telaio.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del canotto</span>
              <h3>Dall'esterno all'interno — i componenti in sequenza</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="s1">01</span>
                <span className="miniText">
                  <strong>Canotto</strong> — tubo in acciaio o alluminio saldato al telaio.
                  Diametro interno standard: 30 mm (moto piccole) o 40 mm (enduro/MX moderno)
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s2">02</span>
                <span className="miniText">
                  <strong>Sedi esterne</strong> — anelli pressati all'interno del canotto
                  che formano la pista esterna dei cuscinetti. In acciaio temprato
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s3">03</span>
                <span className="miniText">
                  <strong>Cuscinetti</strong> — superiore e inferiore. Conici (tapered)
                  o a sfere. Il cuscinetto inferiore è sempre il più sollecitato
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s4">04</span>
                <span className="miniText">
                  <strong>Perno di sterzo (stelo)</strong> — il tubo centrale che attraversa
                  il canotto, calettato sulla piastra inferiore della forcella
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="s5">05</span>
                <span className="miniText">
                  <strong>Dado di registro</strong> — il dado superiore che regola
                  il precarico dei cuscinetti. La regolazione corretta è critica
                  quanto la qualità del cuscinetto stesso
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── TIPI CUSCINETTO BLOCK ───────────────────────────────────────── */}
        <motion.div
          className="tipiBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="tipiHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Tipi di cuscinetto</span>
            <h3>Conici vs a sfere — costruzione, carichi e perché quasi tutti usano i conici</h3>
            <p>
              I cuscinetti di sterzo esistono in due famiglie principali:
              conici (tapered roller bearing) e a sfere (ball bearing).
              Entrambi svolgono la stessa funzione ma con geometrie
              interne diverse che li rendono ottimali per carichi
              diversi. La scelta tra i due non è casuale — è dettata
              dal tipo di carico che il cuscinetto di sterzo deve
              sopportare nella realtà della guida fuoristrada.
            </p>
          </motion.div>

          <motion.div className="tipiGrid" variants={cardVariants}>

            <div className="tipoCard tipoConico">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeConico">Conico (tapered)</span>
                <span className="tipoRating tipoRatingGreen">Preferito OEM</span>
              </div>
              <div className="tipoSchema schemaConico">
                <div className="schemaRulli">
                  <div className="rullo" />
                  <div className="rullo" />
                  <div className="rullo" />
                  <div className="rullo" />
                  <div className="rullo" />
                </div>
                <span className="schemaLabel">elementi conici a contatto lineare</span>
              </div>
              <h4>Come funziona</h4>
              <p>
                Gli elementi rotanti sono tronchi di cono — non sfere.
                Il contatto con le piste è lineare (lungo una linea,
                non in un punto) — questo distribuisce il carico
                su una superficie maggiore e rende il cuscinetto
                molto più capace di sopportare carichi radiali elevati
                e carichi assiali in una direzione. Nel canotto
                di sterzo i carichi dominanti sono radiali (le forze
                di frenata e impatto) e assiali verso il basso
                (il peso della forcella e della ruota) — esattamente
                il profilo di carico per cui il cuscinetto conico
                è progettato. Richiede precarico assiale preciso
                per funzionare correttamente — troppo poco = gioco,
                troppo = frizione e usura accelerata.
              </p>
            </div>

            <div className="tipoCard tipoSfere">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeSfere">A sfere (ball)</span>
                <span className="tipoRating tipoRatingSteel">Aftermarket / vintage</span>
              </div>
              <div className="tipoSchema schemaSfere">
                <div className="schemaBalls">
                  <div className="ball" />
                  <div className="ball" />
                  <div className="ball" />
                  <div className="ball" />
                  <div className="ball" />
                  <div className="ball" />
                </div>
                <span className="schemaLabel">sfere a contatto puntuale</span>
              </div>
              <h4>Come funziona</h4>
              <p>
                Le sfere creano un contatto puntuale con le piste —
                teoricamente infinitesimale, praticamente una piccola
                ellisse di contatto sotto carico. Il contatto puntuale
                riduce l'attrito di rotolamento rispetto al cuscinetto
                conico — lo sterzo è più leggero e fluido a bassa velocità.
                Il limite è la capacità di carico radiale: la pressione
                di contatto è concentrata in un'area molto piccola e
                sotto carichi elevati si formano rapidamente impronte
                nelle piste (brinelling). Le sfere sono ottime per
                carichi misti moderati e per applicazioni dove la
                fluidità del movimento è prioritaria sulla capacità
                di carico. Nei fuoristrada moderni le sfere si trovano
                principalmente come kit aftermarket o sulle moto vintage.
              </p>
            </div>

            <div className="tipoCard tipoCartridge">
              <div className="tipoCardTop">
                <span className="tipoBadge badgeCartridge">Cartridge (integrato)</span>
                <span className="tipoRating tipoRatingBlue">Racing aftermarket</span>
              </div>
              <div className="tipoSchema schemaCartridge">
                <div className="cartridgeOuter">
                  <div className="cartridgeInner">
                    <span className="cartridgeLabel">sealed</span>
                  </div>
                </div>
                <span className="schemaLabel">cuscinetto stagno con guarnizioni</span>
              </div>
              <h4>Come funziona</h4>
              <p>
                Il cuscinetto cartridge è un'unità completamente
                sigillata — pista esterna, pista interna, elementi
                rotanti e lubrificante sono tutti pre-assemblati
                in un'unica unità con guarnizioni su entrambi i lati.
                Non richiede lubrificazione esterna, non richiede
                regolazione del precarico (il precarico è impostato
                in fabbrica) e garantisce protezione totale dall'acqua
                e dalla polvere. Il prezzo è la non sostituibilità
                del lubrificante interno — quando si esaurisce,
                si sostituisce l'intero cuscinetto. Marchi come
                All Balls e Pivot Works offrono kit cartridge
                sostitutivi per la maggior parte dei modelli.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── PRECARICO BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="precaricoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="precaricoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il precarico</span>
            <h3>La regolazione più sottile del telaio — né troppo, né troppo poco</h3>
            <p>
              Il precarico è la forza assiale applicata ai cuscinetti
              prima di montare qualsiasi carico esterno. Per i cuscinetti
              conici è un parametro critico: senza precarico i rulli
              tendono a scivolare invece di rotolare, generando usura
              accelerata. Con troppo precarico l'attrito è eccessivo,
              lo sterzo è pesante e il cuscinetto si surriscalda.
            </p>
          </motion.div>

          <motion.div className="precaricoContent" variants={cardVariants}>

            <div className="precaricoStati">

              <div className="statoCard statoBasso">
                <div className="statoIndicatore">
                  <div className="statoBar statoBarBasso" />
                </div>
                <span className="statoBadge statoBadgeBasso">Precarico insufficiente</span>
                <h4>Gioco nei cuscinetti</h4>
                <p>
                  I rulli non sono in pieno contatto con le piste —
                  c'è un piccolo gioco che si traduce in un punto morto
                  percepibile al centro dello sterzo, in un leggero
                  "clic" durante le frenate e in una progressiva
                  formazione di impronte nelle piste per impatto
                  (false brinelling). Il gioco si sente chiaramente
                  tenendo il freno anteriore premuto e oscillando
                  il manubrio avanti e indietro — qualsiasi movimento
                  è precarico insufficiente.
                </p>
              </div>

              <div className="statoCard statoOttimale">
                <div className="statoIndicatore">
                  <div className="statoBar statoBarOttimale" />
                </div>
                <span className="statoBadge statoBadgeOttimale">Precarico corretto</span>
                <h4>Sterzo fluido e preciso</h4>
                <p>
                  I rulli sono in pieno contatto con le piste senza
                  frizione eccessiva. Il manubrio ruota con una
                  resistenza uniforme e molto bassa da un estremo
                  all'altro — senza punti duri, senza gioco, senza
                  tendenza a tornare al centro per effetto del precarico
                  stesso. Il test: sollevare l'anteriore, far ruotare
                  il manubrio di 90° e lasciarlo — deve continuare
                  a ruotare lentamente per inerzia e fermarsi
                  progressivamente, non di colpo.
                </p>
              </div>

              <div className="statoCard statoAlto">
                <div className="statoIndicatore">
                  <div className="statoBar statoBarAlto" />
                </div>
                <span className="statoBadge statoBadgeAlto">Precarico eccessivo</span>
                <h4>Sterzo pesante e usura rapida</h4>
                <p>
                  Le piste e i rulli sono compressi oltre il necessario —
                  l'attrito di rotolamento aumenta, lo sterzo diventa
                  pesante e tende a "bloccarsi" in posizione diritta
                  (effetto chiamato "indexing"). Il calore generato
                  dall'attrito accelera la degradazione del lubrificante
                  e delle piste. Un precarico eccessivo riduce la vita
                  del cuscinetto più rapidamente della polvere o dell'acqua.
                  Il test: manubrio che torna da solo al centro e
                  resistenza percepibile durante la sterzata a bassa velocità.
                </p>
              </div>

            </div>

            <div className="precaricoNote">
              <span className="precaricoNoteTitle">Come si regola</span>
              <p>
                Il dado di registro superiore — spesso un dado basso
                con fori per la chiave a settori — si stringe fino
                a eliminare il gioco, poi si controlla la fluidità
                dello sterzo. Non esiste un valore di coppia universale:
                si regola a sensazione con il metodo del manubrio
                libero. Sul dado va poi bloccato il controdado
                superiore senza far ruotare il dado di registro
                — questo è il passaggio che più spesso viene
                sbagliato: il controdado spinge in su il dado
                di registro aumentando il precarico.
              </p>
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
              <span className="placeholderText">Sezione — canotto con cuscinetti conici montati, piste, rulli e dado di registro etichettati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Cuscinetto inferiore — il più critico</span>
            <p>
              Il cuscinetto inferiore lavora in condizioni molto
              peggiori di quello superiore: sopporta quasi tutto
              il carico radiale della frenata (la forcella
              comprime verso il basso) ed è il primo a essere
              raggiunto da acqua e polvere che entrano dal basso
              lungo il perno di sterzo. Nei fuoristrada moderni
              il cuscinetto inferiore dura spesso la metà
              del superiore — è quasi sempre il primo da
              sostituire. Chi monta kit cuscinetti aftermarket
              trova spesso il cuscinetto inferiore in kit
              di due pezzi (superiore e inferiore) con il
              componente inferiore di qualità superiore.
            </p>
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
            <span className="sectionLabel">Diagnosi e sostituzione</span>
            <h3>Riconoscere il cuscinetto da sostituire — i test che funzionano davvero</h3>
            <p>
              I cuscinetti di sterzo non si controllano smontando
              la forcella — si controllano con test funzionali
              a moto intera. Tre minuti di controllo rivelano
              lo stato dei cuscinetti con precisione sufficiente
              per decidere se intervenire.
            </p>
          </motion.div>

          <motion.div className="diagnosiGrid" variants={cardVariants}>

            <div className="diagnosiCard diagnosiCard1">
              <span className="diagnosiBadge">Test 1</span>
              <h4>Il test del freno — gioco assiale</h4>
              <p>
                Tenere premuto il freno anteriore con forza.
                Con l'altra mano afferrare il canotto di sterzo
                (il tubo verticale del telaio dove si inserisce
                la forcella) e spingere e tirare la forcella
                avanti e indietro lungo l'asse longitudinale.
                Qualsiasi movimento percepibile — anche minimo —
                è gioco nel cuscinetto inferiore. Il freno
                blocca la ruota e permette di isolare il gioco
                del cuscinetto da quello delle sospensioni.
                Test rapido, affidabile, eseguibile in 30 secondi.
              </p>
            </div>

            <div className="diagnosiCard diagnosiCard2">
              <span className="diagnosiBadge">Test 2</span>
              <h4>Il test del manubrio libero — fluidità e punto morto</h4>
              <p>
                Sollevare la ruota anteriore con un cavalletto
                o facendo leva sul motore. Far ruotare il manubrio
                lentamente da un estremo all'altro — deve scorrere
                con resistenza uniforme e molto bassa, senza
                punti duri e senza "scatti". Un punto morto
                al centro (resistenza che aumenta e poi diminuisce
                attorno alla posizione diritta) indica impronte
                nelle piste da false brinelling — i cuscinetti
                vanno sostituiti. Un punto duro in una posizione
                specifica indica un danno localizzato nelle piste.
              </p>
            </div>

            <div className="diagnosiCard diagnosiCard3">
              <span className="diagnosiBadge">Test 3</span>
              <h4>Il test visivo — ruggine e contaminazione</h4>
              <p>
                Con la forcella smontata, estrarre i cuscinetti
                e ispezionarli visivamente. Piste con impronte
                regolari (false brinelling da vibrazione) o impronte
                irregolari (brinelling da impatto) vanno sostituite —
                non si recuperano con la pulizia. Polvere compatta
                mista a grasso vecchio è normale dopo una stagione
                intensa e richiede solo pulizia e rilubrificazione.
                Ruggine sulle piste è sempre sostituzione — non
                si rimuove la ruggine dalle piste di un cuscinetto
                e ci si fida del risultato in un componente
                di sicurezza.
              </p>
            </div>

            <div className="diagnosiCard diagnosiCard4">
              <span className="diagnosiBadge">Sostituzione</span>
              <h4>Come si smontano le sedi — l'operazione che richiede gli attrezzi giusti</h4>
              <p>
                Le sedi esterne dei cuscinetti sono pressate nel
                canotto con interferenza — non si estraggono con
                le mani. Richiedono un estrattore a espansione
                interna o un punzone di diametro leggermente
                inferiore alla sede e un martello. Le sedi nuove
                si montano con un pressore di diametro pari
                al diametro esterno della sede — mai colpire
                direttamente la sede con il martello.
                Montare la sede fredda e il canotto riscaldato
                a 80°C facilita enormemente l'operazione —
                la differenza termica crea un gioco temporaneo
                che permette l'inserimento con forza minima.
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
            <span className="cardTag">Lubrificazione</span>
            <h3>Quale grasso usare e ogni quanto lubrificare — non tutto il grasso è uguale</h3>
            <p>
              Il grasso per cuscinetti di sterzo deve avere alta
              resistenza all'acqua (NLGI 2 o 3, a base di litio
              o poliurea) e buona aderenza alle piste per resistere
              alla centrifugazione. Grasso a base di calcio
              (il tipo più comune nelle confezioni economiche)
              tende a emulsionarsi con l'acqua e a perdere
              le proprietà lubrificanti rapidamente nel fuoristrada.
              La frequenza di rilubrificazione dipende dall'utilizzo —
              ogni stagione per uso normale, ogni 20 – 30 ore
              per uso intensivo con guadi. I cuscinetti cartridge
              sigillati non si rilubrificano — si sostituiscono
              quando degradati.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Segnali di guida</span>
            <h3>Come un cuscinetto usurato cambia il comportamento della moto in guida</h3>
            <p>
              Il primo segnale è sottile: la moto tende a seguire
              i solchi del terreno invece di mantenersi sulla
              traiettoria — il pilota corregge continuamente
              senza capire perché si stanca di più. In frenata
              si percepisce un leggero "tremolìo" del manubrio
              che il pilota attribuisce erroneamente al terreno
              o alla ruota. La conferma arriva quando si solleva
              l'anteriore e si testa la fluidità — il punto morto
              al centro dello sterzo era presente da tempo
              ma era diventato la normalità. Dopo la sostituzione
              dei cuscinetti la moto "rinasce" — i piloti
              descrivono la sensazione come una moto completamente
              diversa.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Intervallo</span>
            <h3>Ogni quanto sostituire i cuscinetti di sterzo — le linee guida per il fuoristrada</h3>
            <p>
              I manuali tecnici indicano generalmente 100 – 150 ore
              come intervallo di ispezione per i cuscinetti di sterzo
              nel fuoristrada. La realtà è più variabile: un'ora
              di guado profondo con acqua fangosa degrada i cuscinetti
              più di dieci ore su terreno asciutto e sabbioso.
              Come regola pratica: ispezione con test funzionale
              ogni 30 – 40 ore di utilizzo intenso o ogni stagione,
              sostituzione appena si percepisce gioco o punto morto.
              I kit cuscinetti aftermarket di qualità (All Balls,
              SKF, Pivot Works) costano 25 – 60 euro — infinitamente
              meno di una forcella o di un telaio danneggiati
              da un cuscinetto ceduto in corsa.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default CanottoDiSterzo;
