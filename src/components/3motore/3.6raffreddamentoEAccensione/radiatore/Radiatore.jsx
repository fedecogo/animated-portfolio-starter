import "./radiatore.scss";
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

const Radiatore = () => {
  return (
    <section className="radiatore" id="radiatore">
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
              Il radiatore
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il radiatore è lo scambiatore termico che chiude il ciclo
              del raffreddamento: prende il calore trasferito dal motore
              al liquido refrigerante e lo cede all'aria che attraversa
              il pacco alettato durante la marcia. Sembra un componente
              passivo — e in effetti non ha parti in movimento — ma la
              sua geometria, i materiali e le condizioni del liquido
              interno determinano la capacità del motore di reggere
              sessioni intense senza surriscaldarsi.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Su una moto da fuoristrada il radiatore è anche uno dei
              componenti più esposti agli impatti: cadute, rami, sassi
              e detriti lo colpiscono direttamente. La protezione fisica
              è parte integrante del sistema — non un accessorio estetico.
              Un radiatore che perde anche solo 200 ml di liquido in
              una sessione lunga può costare la testa del motore.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Come funziona</span>
              <h3>Il ciclo del calore — dal motore all'aria</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">Il liquido caldo esce dal cilindro e dalla testata attraverso la tubazione superiore (outlet)</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">Entra nel radiatore e scorre nei tubi orizzontali del pacco — diviso in decine di canali paralleli</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">Le alette in alluminio tra i tubi aumentano la superficie di scambio — il calore passa dal liquido all'aria</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">Il liquido raffreddato esce dalla tubazione inferiore (inlet) e rientra nella pompa acqua</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">05</span>
                <span className="miniText">La pompa lo reinvia al cilindro completando il circuito — il ciclo si ripete ad ogni giro motore</span>
              </div>
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
            <span className="sectionLabel">Costruzione</span>
            <h3>Anatomia del radiatore — serbatoio, pacco e alette</h3>
            <p>
              Un radiatore per moto da fuoristrada è composto da tre
              zone strutturalmente distinte che lavorano in sequenza.
              La qualità della costruzione — in particolare la giunzione
              tra i tubi e le piastre di distribuzione — determina
              la resistenza alle vibrazioni e agli impatti termici
              ciclici che caratterizzano l'uso intenso.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costrCard">
              <span className="costrIdx">01</span>
              <h4>Serbatoi laterali — distribuzione e raccolta</h4>
              <p>
                I due serbatoi laterali (tank) sono le camere di
                distribuzione e raccolta del liquido. Il serbatoio
                superiore riceve il liquido caldo dall'outlet del
                motore e lo distribuisce uniformemente nei tubi del
                pacco. Il serbatoio inferiore raccoglie il liquido
                raffreddato da tutti i tubi e lo convoglia verso
                la tubazione di ritorno alla pompa. Sono in alluminio
                pressofuso o lavorato a CNC nei modelli racing —
                la precisione della saldatura con il pacco è il punto
                critico: un cordone di saldatura poroso cede sempre
                sotto le vibrazioni prima del resto del radiatore.
              </p>
            </div>

            <div className="costrCard">
              <span className="costrIdx">02</span>
              <h4>Il pacco — tubi e alette</h4>
              <p>
                Il pacco è il cuore dello scambio termico. È formato
                da decine di tubi orizzontali in alluminio a sezione
                piatta (oval tube) attraverso cui scorre il liquido,
                uniti da alette ondulate sottilissime (0,05 – 0,10 mm)
                che aumentano la superficie di contatto con l'aria.
                La densità del pacco — espressa in file per pollice
                (FPI, fins per inch) — determina il compromesso tra
                efficienza termica e tendenza all'intasamento. I
                radiatori da cross usano tipicamente 12 – 16 FPI:
                abbastanza densi per dissipare il calore in condizioni
                di alta potenza, ma abbastanza aperti da non ostruirsi
                con il fango nei tratti lenti.
              </p>
            </div>

            <div className="costrCard">
              <span className="costrIdx">03</span>
              <h4>Il tappo pressurizzato — perché la pressione aiuta</h4>
              <p>
                Il tappo del radiatore non è un semplice coperchio —
                è una valvola di pressione calibrata, tipicamente a
                1,1 – 1,4 bar nei sistemi moto. Mantenendo il circuito
                in pressione si alza il punto di ebollizione del
                liquido refrigerante: a 1,2 bar un liquido con 50%
                di glicole bolle a circa 126 °C invece dei 107 °C
                a pressione atmosferica. Questo margine di sicurezza
                di quasi 20 °C è quello che separa il motore dal
                sovriscaldamento nelle sessioni più dure. Un tappo
                che non tiene la pressione — per guarnizione usurata
                o molla indebolita — abbassa quel margine silenziosamente.
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
              <span className="placeholderText">Immagine — radiatore in sezione o esploso con serbatoi, tubi piatti e alette etichettati</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Struttura interna</span>
            <p>
              In sezione si vedono chiaramente i tubi piatti a sezione
              ovale che attraversano il pacco in direzione orizzontale
              e le alette ondulate che li collegano. Le alette non sono
              saldate ai tubi — sono tenute in posizione meccanica
              e poi brasate in forno sotto vuoto in un unico ciclo
              termico. La brasatura capillare garantisce un contatto
              termico quasi perfetto tra tubo e aletta senza aggiunta
              di massa.
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
            <h3>Alluminio e leghe — perché il rame è sparito dai radiatori moderni</h3>
            <p>
              I radiatori degli anni '80 erano in ottone e rame —
              ottima conduttività termica, ma peso elevato e difficoltà
              di riparazione. Dagli anni '90 l'alluminio ha sostituito
              completamente entrambi grazie a un rapporto conduttività/peso
              molto superiore e alla possibilità di brasatura sotto vuoto
              che elimina i flux corrosivi della saldatura tradizionale.
            </p>
          </motion.div>

          <motion.div className="materialiGrid" variants={cardVariants}>

            <div className="matCard matAlluminio">
              <span className="matBadge badgeStd">Alluminio 1050 / 3003</span>
              <h4>Il materiale standard — leggerezza e conducibilità</h4>
              <p>
                Le serie 1050 e 3003 sono le leghe più usate per
                tubi e alette dei radiatori di serie. La conduttività
                termica dell'alluminio puro (serie 1xxx) è di circa
                220 W/m·K — quasi il doppio dell'acciaio e dieci
                volte superiore al titanio. Le alette in 1050 sono
                così sottili (0,06 – 0,08 mm) da pesare pochi grammi
                per radiatore pur offrendo una superficie di scambio
                di 0,8 – 1,2 m² sul singolo lato. I serbatoi usano
                leghe più robuste (3003, 6061) per resistere alle
                pressioni di esercizio e agli urti meccanici.
              </p>
            </div>

            <div className="matCard matRacing">
              <span className="matBadge badgeRacing">Alluminio 6061-T6</span>
              <h4>Il racing grade — resistenza strutturale massima</h4>
              <p>
                I radiatori aftermarket di alto livello (Fluidyne,
                Boyesen, Works Connection) usano il 6061-T6 per
                i serbatoi laterali e piastre di distribuzione —
                la lega più usata in aeronautica per strutture
                primarie. La resistenza a trazione supera i 310 MPa
                contro i 110 MPa del 3003, con una riduzione di peso
                possibile grazie alla minore sezione necessaria.
                Il pacco centrale rimane in leghe standard per
                non compromettere la brasabilità delle alette
                sottilissime.
              </p>
            </div>

            <div className="matCard matSaldatura">
              <span className="matBadge badgeBrasatura">Brasatura sotto vuoto</span>
              <h4>Il processo produttivo — perché il radiatore non si smonta</h4>
              <p>
                L'assemblaggio del pacco avviene in forno a vuoto a
                circa 600 °C — appena sotto il punto di fusione
                dell'alluminio. Un materiale d'apporto a base di
                lega Al-Si fonde e per capillarità penetra nei
                giunti tra tubi, alette e serbatoi, creando un
                legame metallurgico continuo senza viti, rivetti
                o adesivi. Il risultato è un componente monolitico
                con resistenza alla fatica termica e meccanica
                superiore a qualsiasi assemblaggio meccanico.
                Non è possibile smontare il pacco senza distruggerlo —
                la riparazione si fa per saldatura TIG localizzata
                sui punti danneggiati.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── LIQUIDO BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="liquidoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="liquidoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il liquido refrigerante</span>
            <h3>Glicole, acqua e additivi — la miscela che protegge il circuito</h3>
            <p>
              Il liquido refrigerante non è semplice acqua — è una
              miscela formulata per abbassare il punto di congelamento,
              alzare il punto di ebollizione, proteggere i metalli
              dalla corrosione e lubrificare la pompa acqua. La
              concentrazione di glicole nell'acqua è il parametro
              principale da controllare — troppo poco non protegge,
              troppo riduce l'efficienza termica.
            </p>
          </motion.div>

          <motion.div className="liquidoGrid" variants={cardVariants}>

            <div className="liquidoCard liquidoConc">
              <h4>La concentrazione giusta — 40 / 50 / 60%</h4>
              <div className="concBarre">
                <div className="concRiga">
                  <span className="concLabel">40% glicole</span>
                  <div className="concBar">
                    <div className="concFill fill40" style={{ width: "70%" }} />
                  </div>
                  <span className="concVal">Ebollizione +111 °C · Gelo −24 °C</span>
                </div>
                <div className="concRiga">
                  <span className="concLabel">50% glicole</span>
                  <div className="concBar">
                    <div className="concFill fill50" style={{ width: "85%" }} />
                  </div>
                  <span className="concVal">Ebollizione +121 °C · Gelo −37 °C</span>
                </div>
                <div className="concRiga">
                  <span className="concLabel">60% glicole</span>
                  <div className="concBar">
                    <div className="concFill fill60" style={{ width: "75%" }} />
                  </div>
                  <span className="concVal">Ebollizione +116 °C · Gelo −52 °C</span>
                </div>
              </div>
              <p>
                Il 50% è il riferimento per uso generico — il miglior
                compromesso tra protezione al calore e al gelo. Il 40%
                va bene per climi temperati e offre la massima efficienza
                termica. Il 60% è eccessivo in estate: paradossalmente
                riduce l'efficienza dello scambio termico rispetto al 50%
                perché il glicole ha conduttività termica inferiore all'acqua.
              </p>
            </div>

            <div className="liquidoCard liquidoTipi">
              <h4>Glicole etilenico vs propilenico — cosa cambia</h4>
              <p>
                Il <strong>glicole etilenico</strong> (MEG) è il tipo
                più diffuso — efficienza termica superiore, costo basso,
                disponibilità ovunque. È tossico per ingestione — rilevante
                su moto da enduro dove il vaso di espansione può
                traboccare vicino a corsi d'acqua. Il <strong>glicole
                propilenico</strong> (MPG) è biodegradabile e non tossico —
                obbligatorio in alcune competizioni enduro con regolamento
                ambientale. La protezione termica è leggermente inferiore
                a parità di concentrazione. Nei circuiti chiusi come
                le moto da cross l'etilenico rimane la scelta standard
                per le prestazioni superiori.
              </p>
            </div>

            <div className="liquidoCard liquidoAcqua">
              <h4>La qualità dell'acqua conta — calcio e magnesio danneggiano il circuito</h4>
              <p>
                L'acqua usata nella miscela dovrebbe essere distillata
                o demineralizzata. L'acqua di rubinetto contiene calcio
                e magnesio che precipitano in depositi calcarei sulle
                pareti interne del circuito — soprattutto nella zona
                più calda attorno alla camera d'acqua del cilindro.
                I depositi riducono lo scambio termico e ostruiscono
                progressivamente i canali più stretti della pompa.
                Un litro di acqua distillata costa meno di un euro —
                non vale la pena rischiare il circuito con l'acqua
                del rubinetto.
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
            <span className="captionTag">Protezione — la vera manutenzione preventiva</span>
            <p>
              Le protezioni radiatore in HDPE o alluminio non servono
              solo a reggere gli urti delle cadute — proteggono anche
              dai detriti che entrano nella protezione carena durante
              la marcia. Un sasso da 10 grammi a 60 km/h ha abbastanza
              energia cinetica da bucare un tubo del pacco. Le griglie
              metalliche a maglie fini (3 – 4 mm) sono il compromesso
              migliore: fermano i detriti senza ridurre significativamente
              il flusso d'aria attraverso il pacco.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — radiatore con protezione griglia montata e dettaglio del pacco alettato</span>
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
            <span className="sectionLabel">Manutenzione e diagnosi</span>
            <h3>Controllo livello, sostituzione liquido e riparazione perdite</h3>
            <p>
              Il radiatore non richiede manutenzione frequente —
              ma le poche operazioni necessarie sono critiche.
              Ignorarle trasforma un componente quasi eterno in
              un problema costoso.
            </p>
          </motion.div>

          <motion.div className="manutGrid" variants={cardVariants}>

            <div className="manutCard">
              <div className="manutNum">1</div>
              <div className="manutContent">
                <h4>Controllo livello — sempre a freddo, mai a caldo</h4>
                <p>
                  Il livello del liquido si controlla sempre con il
                  motore freddo. Il liquido caldo è in pressione —
                  aprire il tappo del radiatore su un motore caldo
                  causa la fuoriuscita violenta del liquido bollente.
                  Il livello corretto è a 2 – 3 cm dal bordo superiore
                  del radiatore o alla tacca MAX del vaso di espansione
                  se presente. Un calo progressivo senza perdite visibili
                  indica una micro-lesione interna o una guarnizione
                  testata che cede — verificare la presenza di liquido
                  nell'olio del cambio o fumo bianco allo scarico.
                </p>
              </div>
            </div>

            <div className="manutCard">
              <div className="manutNum">2</div>
              <div className="manutContent">
                <h4>Sostituzione del liquido — ogni stagione o ogni 2 anni</h4>
                <p>
                  Gli inibitori di corrosione nel glicole si esauriscono
                  nel tempo — il liquido diventa acido e attacca
                  i metalli del circuito. La sostituzione si fa
                  drenando completamente il circuito (tappo inferiore
                  del radiatore o tubo di ritorno alla pompa), sciacquando
                  con acqua distillata pura per rimuovere i residui
                  del vecchio liquido, e riempiendo con miscela fresca.
                  Al riempimento aprire leggermente il bullone di spurgo
                  sul lato alto del circuito per fare uscire l'aria
                  intrappolata — una bolla d'aria nella testata crea
                  una zona senza raffreddamento con conseguenze gravi.
                </p>
              </div>
            </div>

            <div className="manutCard">
              <div className="manutNum">3</div>
              <div className="manutContent">
                <h4>Raddrizzare le alette — pennello e pettine</h4>
                <p>
                  Le alette piegate riducono il flusso d'aria attraverso
                  il pacco e degradano lo scambio termico. Dopo ogni
                  sessione off-road verificare visivamente il pacco:
                  alette piegate su più del 15 – 20% della superficie
                  iniziano a essere rilevanti. Si raddrizzano con
                  un pettine per radiatori (fin comb) — utensile
                  economico con denti calibrati sullo step delle alette.
                  Lavorare con movimenti paralleli alle alette, mai
                  perpendicolari. Le alette in alluminio sottilissimo
                  si piegano facilmente ma reggono molti cicli di
                  raddrizzatura prima di rompersi.
                </p>
              </div>
            </div>

            <div className="manutCard">
              <div className="manutNum">4</div>
              <div className="manutContent">
                <h4>Riparazione perdite — saldatura TIG o sigillante</h4>
                <p>
                  Una perdita sul serbatoio laterale si ripara con
                  saldatura TIG da un radiatoreista specializzato —
                  operazione economica (20 – 50 €) e definitiva se
                  eseguita bene. Una perdita nel pacco centrale è
                  più complessa: il punto forato è spesso inaccessibile
                  senza smontare parzialmente il pacco. I sigillanti
                  liquidi per radiatori (tipo Bar's Leaks) funzionano
                  come soluzione temporanea di emergenza — chiudono
                  micro-fessure per deposito di particelle sospese —
                  ma ostruiscono anche i canali stretti della pompa
                  e del circuito se usati in dosi eccessive. Usarli
                  solo in emergenza, sostituire il radiatore appena
                  possibile.
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
            <span className="cardTag">Protezione</span>
            <h3>Protezioni e braces — investimento obbligatorio per l'off-road</h3>
            <p>
              Le protezioni radiatore (radiator braces / guards) in
              polietilene ad alta densità o alluminio estruso sono
              il primo investimento da fare su qualsiasi moto da
              fuoristrada. Le moto moderne hanno radiatori in posizione
              esposta per ottimizzare il flusso d'aria — posizione
              ideale dal punto di vista termico, pessima da quello
              della protezione agli impatti. I braces in alluminio
              offrono protezione agli urti laterali nelle cadute;
              le griglie in acciaio armonico o alluminio sul fronte
              del pacco proteggono dai detriti in marcia. Marchi
              di riferimento: Acerbis, UFO, Devol, Fluidyne.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>Radiatori racing — quando quello di serie non basta</h3>
            <p>
              I radiatori aftermarket (Fluidyne, Boyesen RadiatorWorks,
              Mishimoto) offrono pacchi con densità di alette superiore,
              tubi di sezione maggiorata e serbatoi in 6061-T6 con
              capacità volumetrica aumentata del 10 – 25%. Il beneficio
              è reale in condizioni di uso intenso prolungato — enduro
              maratona, uso su pista, condizioni climatiche calde.
              Per l'uso amatoriale normale il radiatore OEM è dimensionato
              con margini sufficienti. Il vero collo di bottiglia è quasi
              sempre il liquido degradato o il livello insufficiente —
              non la capacità del radiatore.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Diagnosi</span>
            <h3>Surriscaldamento — leggere i sintomi prima che diventi un danno</h3>
            <p>
              Il surriscaldamento si manifesta con bollore visibile
              nel radiatore, vapore dal vaso di espansione, perdita
              di potenza progressiva e — nelle fasi finali — pre-accensione
              da superfici surriscaldate. Le cause più comuni non sono
              il radiatore in sé: livello basso, liquido degradato,
              tappo che non regge la pressione, pompa con girante usurata
              o termostato bloccato chiuso. Verificare in questo ordine
              prima di accusare il radiatore. Un radiatore pulito con
              liquido fresco al 50% su una moto ben tarata non dovrebbe
              mai bollire in condizioni normali di utilizzo.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Radiatore;
