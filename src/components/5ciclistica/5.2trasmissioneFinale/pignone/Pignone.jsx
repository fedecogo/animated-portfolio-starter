import "./pignone.scss";
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

const Pignone = () => {
  return (
    <section className="pignone" id="pignone">
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
              Il pignone
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il pignone è il primo anello della trasmissione finale:
              il piccolo rocchetto dentato calettato sull'albero secondario
              del cambio che impegna la catena e trasferisce la coppia
              verso la corona. Ha pochi denti — di solito tra 11 e 15 —
              ma quei denti determinano più di qualsiasi altro parametro
              il carattere della moto: quanto è pronta in uscita di curva,
              quanto tira in rettilineo, quanto recupera sulle scalate.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Cambiare il pignone di un dente significa modificare il rapporto
              finale di circa il 7–10% — una variazione percepibile e misurabile.
              Montare un pignone di 12 denti invece di 13 su un cross da
              sabbia può fare la differenza tra riuscire e non riuscire a
              risalire un cambio di direzione. Capire come funziona,
              cosa lo usura e come sceglierlo per ogni utilizzo
              è la base di qualsiasi setup sulla trasmissione finale.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Parametri del pignone</span>
              <h3>Le cinque variabili che contano</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex" data-color="teeth">Z</span>
                <span className="miniText">Numero di denti — determina il rapporto finale con la corona; ogni dente in meno accorcia, ogni dente in più allunga</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="pitch">P</span>
                <span className="miniText">Passo catena — 520 nel cross/enduro, 428 su alcune moto da motard e stradali: cambia con la catena e la corona, mai solo il pignone</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="mat">M</span>
                <span className="miniText">Materiale — acciaio C45 (durata), ergal 7075-T6 (leggerezza), acciaio inox (ambienti estremi): scelta legata all'utilizzo</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="fit">F</span>
                <span className="miniText">Calettamento — attacco splined con dado e rondella di bloccaggio; la chiave dinamometrica non è opzionale</span>
              </div>
              <div className="miniStep">
                <span className="miniIndex" data-color="wear">U</span>
                <span className="miniText">Usura — denti "a uncino" o assottigliati indicano sostituzione; il pignone si cambia sempre insieme alla catena</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RAPPORTO BLOCK — corto vs lungo ──────────────────────────────── */}
        <motion.div
          className="rapportoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="rapportoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il rapporto finale</span>
            <h3>Pignone corto vs pignone lungo — cosa cambia davvero in sella</h3>
            <p>
              Il rapporto finale è il prodotto del rapporto del cambio
              per il rapporto della trasmissione finale. Il pignone
              interviene solo su quest'ultimo: meno denti sul pignone
              significa rapporto finale più corto (più moltiplicazione),
              più denti significa rapporto più lungo (meno moltiplicazione).
              La scelta dipende dal tipo di percorso, dall'erogazione
              del motore e dallo stile di guida.
            </p>
          </motion.div>

          <motion.div className="rapportoGrid" variants={cardVariants}>

            <div className="rapportoCard rapportoCorto">
              <div className="rapportoCardTop">
                <span className="rapportoBadge badgeCorto">Pignone corto — pochi denti</span>
              </div>
              <h4>Più coppia, più accelerazione, meno velocità di punta</h4>
              <p>
                Togliere un dente al pignone accorcia il rapporto finale
                dell'8–10%: il motore gira di più per ogni metro percorso.
                La partenza è più bruciante, il recupero in uscita di curva
                è più immediato, la moto risponde meglio alle aperture
                del gas in trazione. Il prezzo è la velocità di punta:
                il motore raggiungerà il limitatore prima — su un lungo
                rettilineo si sente la differenza. Ideale per tracciati
                tecnici, sabbia morbida, terreni lenti che richiedono
                trazione continua più che velocità massima.
              </p>
              <div className="rpmCurve rpmShort">
                <div className="rpmBar" style={{ height: "85%" }} />
                <div className="rpmBar" style={{ height: "100%" }} />
                <div className="rpmBar" style={{ height: "98%" }} />
                <div className="rpmBar" style={{ height: "90%" }} />
                <div className="rpmBar rpmBarPeak" style={{ height: "75%" }} />
                <div className="rpmBar" style={{ height: "55%" }} />
                <div className="rpmBar" style={{ height: "35%" }} />
                <div className="rpmBar" style={{ height: "18%" }} />
                <div className="rpmBar" style={{ height: "8%" }} />
              </div>
              <span className="rpmLabel">Coppia alta, velocità punta limitata</span>
            </div>

            <div className="rapportoCard rapportoLungo">
              <div className="rapportoCardTop">
                <span className="rapportoBadge badgeLungo">Pignone lungo — più denti</span>
              </div>
              <h4>Più velocità di punta, ripresa più morbida, motore che respira</h4>
              <p>
                Aggiungere un dente allunga il rapporto: il motore gira
                di meno per ogni metro percorso. L'accelerazione parte
                più dolce ma la velocità di punta aumenta — su terreni
                veloci, piste da motard con rettilinei lunghi o strade
                aperte il motore lavora a regimi più bassi con meno
                stress termico e acustico. La risposta del gas diventa
                più lineare e meno scattante — utile su fondo sconnesso
                veloce dove la trazione è critica e le aperture brusche
                causerebbero perdita di grip.
              </p>
              <div className="rpmCurve rpmLong">
                <div className="rpmBar" style={{ height: "45%" }} />
                <div className="rpmBar" style={{ height: "62%" }} />
                <div className="rpmBar" style={{ height: "78%" }} />
                <div className="rpmBar" style={{ height: "90%" }} />
                <div className="rpmBar rpmBarPeak" style={{ height: "100%" }} />
                <div className="rpmBar" style={{ height: "95%" }} />
                <div className="rpmBar" style={{ height: "88%" }} />
                <div className="rpmBar" style={{ height: "78%" }} />
                <div className="rpmBar" style={{ height: "65%" }} />
              </div>
              <span className="rpmLabel">Velocità punta alta, coppia più distribuita</span>
            </div>

          </motion.div>
        </motion.div>

        {/* ── DISCIPLINE BLOCK — cross / enduro / motard / stradale ────────── */}
        <motion.div
          className="disciplineBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="disciplineHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Setup per disciplina</span>
            <h3>Cross, enduro, motard, stradale — ogni utilizzo ha il suo pignone</h3>
            <p>
              Non esiste un pignone universale. Il numero di denti,
              il materiale e il passo catena variano significativamente
              tra una disciplina e l'altra. Ecco le scelte che i piloti
              e i preparatori fanno nella pratica — non teoria,
              ma dati reali da chi usa la moto ogni giorno.
            </p>
          </motion.div>

          <motion.div className="disciplineGrid" variants={cardVariants}>

            <div className="disciplinaCard disciplinaCross">
              <div className="disciplinaHeader">
                <span className="disciplinaMarchio">Motocross</span>
                <span className="disciplinaNome">MX / SX</span>
                <span className="disciplinaClaim">Pista corta, trazione immediata, terreno variabile</span>
              </div>
              <h4>12–13 denti — acciaio C45 — passo 520</h4>
              <p>
                Sul cross si privilegia sempre la trazione sull'accelerazione
                pura. Un pignone da 12–13 denti con corona da 48–51 denti
                dà un rapporto finale tra 3,7 e 4,2 — ideale per terreni
                misti con sezioni sabbiose e salite ripide. Il materiale
                è quasi sempre acciaio C45 trattato: pesa di più dell'ergal
                ma dura il doppio in condizioni di fango e abrasivo.
                Sul supercross, dove i rettilinei sono corti e le curve
                lente, si scende anche a 11–12 denti per massimizzare
                la risposta nei rimbalzi e nelle uscite di rhythm section.
              </p>
            </div>

            <div className="disciplinaCard disciplinaEnduro">
              <div className="disciplinaHeader">
                <span className="disciplinaMarchio">Enduro</span>
                <span className="disciplinaNome">Hard / XC</span>
                <span className="disciplinaClaim">Autonomia, terreni misti, velocità variabile</span>
              </div>
              <h4>13–14 denti — acciaio o ergal — passo 520</h4>
              <p>
                L'enduro richiede un rapporto più versatile: sezioni
                lente in tecnico richiedono trazione, ma i trasferimenti
                su sterrato veloce e le prove speciali in salita richiedono
                di non girare il motore al limitatore in quinto. Un pignone
                da 13–14 denti bilanciato con una corona da 48–50 denti
                copre bene entrambe le esigenze. Il materiale può essere
                ergal anodizzato per risparmiare peso su gare a cronometro
                dove si cerca ogni grammo, o acciaio nelle versioni da
                allenamento dove la durata è più importante.
              </p>
            </div>

            <div className="disciplinaCard disciplinaMotard">
              <div className="disciplinaHeader">
                <span className="disciplinaMarchio">Supermotard</span>
                <span className="disciplinaNome">SMX / SM</span>
                <span className="disciplinaClaim">Asfalto + sterrato, frenate aggressive, rettilinei</span>
              </div>
              <h4>13–15 denti — ergal 7075-T6 — passo 520 / 428</h4>
              <p>
                Sul motard il rapporto si allunga rispetto al cross:
                i rettilinei di asfalto sono più lunghi, le velocità
                più alte e il grip è superiore. Un pignone da 13–15
                denti abbinato a una corona da 40–44 denti porta il
                rapporto finale tra 2,7 e 3,2 — la moto lavora
                a regimi medi più sostenibili su asfalto. L'ergal
                è la scelta più comune: il peso ridotto abbassa il
                momento d'inerzia rotazionale, migliorando la risposta
                nei cambi di direzione veloci tipici del tracciato misto.
                Alcune preparazioni professionali usano il passo 428
                con catena a rulli piccoli per ridurre ulteriormente
                il peso non sospeso.
              </p>
            </div>

            <div className="disciplinaCard disciplinaStradale">
              <div className="disciplinaHeader">
                <span className="disciplinaMarchio">Stradale / Naked</span>
                <span className="disciplinaNome">Road / Track</span>
                <span className="disciplinaClaim">Velocità di punta, durata, rumorosità ridotta</span>
              </div>
              <h4>14–16 denti — acciaio o ergal billet — passo 428 / 520</h4>
              <p>
                Sull'uso stradale e su pista il rapporto si allunga ancora:
                velocità di punta più alta, motore che lavora a regime
                medio-basso in crociera, minor usura di catena e pignone.
                Un pignone da 14–16 denti abbinato a una corona da 38–42
                denti porta il rapporto tra 2,4 e 3,0. La durata diventa
                prioritaria: acciaio induriti o ergal billet anodizzato
                duro con trattamento superficiale. Il passo 428 è comune
                sulle 125 da pista dove il peso è critico; il 520 rimane
                lo standard sulle moto di cilindrata maggiore.
                La qualità della catena conta più del materiale del pignone
                sull'uso stradale.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER 1 ─────────────────────────────────────────── */}
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
              <span className="placeholderText">Immagine / GIF — confronto pignone 12T vs 14T: profilo denti, larghezza, sede catena a confronto</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          <div className="visualCaption">
            <span className="captionTag">Geometria dei denti</span>
            <p>
              Il profilo del dente del pignone non è casuale: l'angolo
              di pressione, il raggio di raccordo e l'altezza del dente
              sono calibrati per il passo catena specifico. Un pignone
              di 12 denti ha un raggio primitivo molto piccolo —
              la catena si piega di più a ogni ingaggio e l'usura
              per fatica dei perni è più alta. Per questo sui piccoli
              pignoni (11–12 denti) i produttori usano acciai più duri
              e profili con angolo di pressione maggiore per distribuire
              il carico su più denti di contatto contemporaneamente.
            </p>
          </div>
        </motion.div>

        {/* ── COSTRUZIONE BLOCK ────────────────────────────────────────────── */}
        <motion.div
          className="costruzioneBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="costruzioneHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Costruzione e materiali</span>
            <h3>Acciaio, ergal, inox — tre materiali per tre utilizzi</h3>
            <p>
              Il pignone è uno dei componenti più semplici della moto
              in apparenza — un disco dentato con un foro centrale —
              ma la scelta del materiale e del trattamento superficiale
              influenza direttamente la durata, il peso e il comportamento
              sotto carico. Non esiste un materiale migliore in assoluto:
              dipende dall'utilizzo, dalla frequenza di manutenzione
              e dal budget.
            </p>
          </motion.div>

          <motion.div className="costruzioneGrid" variants={cardVariants}>

            <div className="costrCard">
              <span className="costrIdx costrIdxOrange">A</span>
              <h4>Acciaio C45 / 42CrMo — la scelta duratura</h4>
              <p>
                L'acciaio al carbonio o al cromo-molibdeno è il materiale
                standard sul cross e sull'enduro. Pesa circa 180–220 g
                a seconda del numero di denti, ma resiste a sabbia,
                fango, acqua e carichi impulsivi per 40–60 ore di utilizzo
                intenso senza cedimenti significativi. Il trattamento
                termico (cementazione o nitrurazione) porta la superficie
                dei denti a 58–62 HRC mantenendo il nucleo tenace:
                i denti resistono all'abrasione senza fratturarsi.
                La scelta obbligata quando si usa catena O-ring o X-ring
                di qualità inferiore, perché il pignone in acciaio
                compensa l'usura maggiore della catena.
              </p>
            </div>

            <div className="costrCard">
              <span className="costrIdx costrIdxYellow">E</span>
              <h4>Ergal 7075-T6 anodizzato duro — leggerezza e risposta</h4>
              <p>
                L'ergal (lega alluminio 7075) è la scelta racing.
                Pesa 60–80 g — il 60–65% in meno dell'acciaio — e
                riduce il momento d'inerzia rotazionale del gruppo
                trasmissione in modo misurabile: la ruota posteriore
                risponde più velocemente alle aperture e alle chiusure
                del gas. L'anodizzazione dura (tipo III, 40–60 µm)
                porta la superficie a 400–500 HV — molto meno dell'acciaio
                ma sufficiente per 15–25 ore su cross e motard dove
                le catene sono mantenute pulite. Non adatto a fango
                abrasivo, sabbia vulcanica o utilizzo senza pulizia
                regolare: si consuma velocemente in condizioni aggressive.
              </p>
            </div>

            <div className="costrCard">
              <span className="costrIdx costrIdxGreen">I</span>
              <h4>Acciaio inossidabile — per ambienti estremi e salsedine</h4>
              <p>
                L'inox (solitamente 17-4PH o 316L) non è comune sul
                fuoristrada puro ma è la scelta su moto da trial in
                ambienti umidi, acquatici o salini. Resiste alla
                corrosione senza trattamenti aggiuntivi, non arrugginisce
                dopo lavaggi con acqua o immersioni. Il prezzo è il peso
                (simile all'acciaio) e la lavorabilità inferiore:
                i profili dei denti sono meno precisi di quelli fresati
                sull'ergal. Alcuni preparatori lo usano su moto da
                enduro coastal o da uso quotidiano in climi marittimi
                dove la catena galvanizzata si ossida in poche settimane.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── FISICA BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="fisicaBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="fisicaHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il principio fisico</span>
            <h3>Come il numero di denti del pignone determina il rapporto finale — la matematica dietro la scelta</h3>
          </motion.div>

          <motion.div className="fisicaContent" variants={cardVariants}>
            <div className="fisicaFormula">
              <span className="formulaEq">R<sub>fin</sub> = Z<sub>corona</sub> / Z<sub>pignone</sub></span>
              <span className="formulaLabel">Rapporto trasmissione finale</span>
              <span className="formulaEq" style={{ marginTop: "14px" }}>V<sub>max</sub> = (n · C<sub>ruota</sub>) / (R<sub>tot</sub> · 60)</span>
              <span className="formulaLabel">Velocità massima teorica</span>
            </div>
            <div className="fisicaTesto">
              <p>
                Il rapporto della trasmissione finale è semplicemente
                il numero di denti della corona diviso per il numero
                di denti del pignone. Con corona da 48 denti e pignone
                da 13: R = 48 ÷ 13 = <strong>3,69</strong>. Con pignone da 12:
                R = 48 ÷ 12 = <strong>4,00</strong>. Quella differenza di 0,31
                significa che per ogni giro dell'albero secondario la
                ruota fa 3,69 vs 4,00 rotazioni — e si sente in sella.
              </p>
              <p>
                Il rapporto totale si ottiene moltiplicando il rapporto
                del cambio per il rapporto finale. In terza marcia
                con rapporto interno 1,5 e R<sub>fin</sub> 3,69:
                R<sub>tot</sub> = 1,5 × 3,69 = <strong>5,54</strong>.
                A 8.000 giri con ruota da 0,80 m di circonferenza:
                V = (8000 × 0,80) ÷ (5,54 × 60) = <strong>19,3 m/s ≈ 70 km/h</strong>.
                Cambiare solo il pignone da 13 a 12 riduce quella
                velocità a 64 km/h — il 9% in meno. Percepibile.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER 2 ─────────────────────────────────────────── */}
        <motion.div
          className="visualBlock visualBlockAlt"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="visualCaption">
            <span className="captionTag">Usura asimmetrica — il segnale da non ignorare</span>
            <p>
              Il pignone si consuma sempre sul lato di spinta —
              il fianco del dente che riceve il carico quando il motore
              tira. Il lato opposto (di ritorno) si usura molto meno.
              Questo crea l'inconfondibile profilo "a uncino" o "a onda"
              dei denti usurati: la sommità si sposta verso il lato
              di tiro e il profilo diventa asimmetrico. Una catena
              allentata o consumata accelera questo processo
              perché impatta sul dente invece di rotolare su di esso.
              Non aspettare che i denti si rompano: un pignone
              con denti "a uncino" rompe le catene nuove.
            </p>
          </div>
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">Immagine — pignone nuovo vs usurato: profilo denti a confronto, evidenziare l'usura asimmetrica</span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
        </motion.div>

        {/* ── MANUTENZIONE BLOCK ───────────────────────────────────────────── */}
        <motion.div
          className="manutBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="manutHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Manutenzione</span>
            <h3>Ispezione, sostituzione e coppia di serraggio — la routine che protegge la trasmissione</h3>
            <p>
              Il pignone è tra i componenti meno ispezionati e più
              impattanti sull'usura della catena. Un pignone consumato
              distrugge le catene nuove in poche ore; un dado
              allentato proietta il pignone sul carter o sulla catena
              con conseguenze catastrofiche. La manutenzione è semplice
              ma non negoziabile.
            </p>
          </motion.div>

          <motion.div className="manutGrid" variants={cardVariants}>

            <div className="manutCard">
              <div className="manutCardNum">1</div>
              <h4>Ispezione visiva dei denti — ogni 10–15 ore</h4>
              <p>
                Rimuovere il coperchio protezione pignone e ispezionare
                il profilo dei denti con una torcia. Il dente sano ha
                il profilo simmetrico con sommità arrotondata. Il dente
                da sostituire è asimmetrico ("a uncino"), con la sommità
                spostata verso il lato di tiro, oppure assottigliato
                ("a coltello") su tutta la larghezza. Qualsiasi asimmetria
                visibile significa sostituzione imminente — non aspettare
                la rottura di un dente.
              </p>
            </div>

            <div className="manutCard">
              <div className="manutCardNum">2</div>
              <h4>Sostituzione in kit — pignone + catena + corona insieme</h4>
              <p>
                Non sostituire solo il pignone. Una catena consumata
                ha un passo effettivo più lungo del nominale — i link
                non si posizionano correttamente sui denti del pignone
                nuovo e l'usura accelerata è immediata. La regola
                è sempre: kit completo (pignone + catena + corona)
                quando uno dei tre è da sostituire. L'unica eccezione
                accettabile è sostituire solo il pignone su una catena
                con meno di 10 ore e una corona in buone condizioni —
                mai il contrario.
              </p>
            </div>

            <div className="manutCard">
              <div className="manutCardNum">3</div>
              <h4>Dado di bloccaggio — coppia e rondella di sicurezza</h4>
              <p>
                Il pignone si monta sull'albero secondario con un dado
                ad alta resistenza (solitamente M20–M22 × 1,5). La coppia
                di serraggio varia da 70 a 120 Nm a seconda del modello —
                consultare il manuale di servizio. La rondella di bloccaggio
                (lock tab washer) va piegata sul dado dopo il serraggio
                per impedire l'allentamento per vibrazione. Non riutilizzare
                rondelle già piegate: cedono al secondo montaggio.
                Un dado allentato durante la marcia è un cedimento
                catastrofico — non è recuperabile in pista o in trail.
              </p>
            </div>

            <div className="manutCard">
              <div className="manutCardNum">4</div>
              <h4>Tensionetr e lubrificazione della catena — il pignone dipende da entrambe</h4>
              <p>
                Una catena troppo tesa carica i cuscinetti dell'albero
                secondario e aumenta il carico sui denti del pignone —
                usura accelerata su tutto il profilo. Una catena troppo
                lenta salta e impatta sul pignone invece di rotolare.
                Il gioco corretto è 35–45 mm nel punto più teso
                del percorso della catena. La lubrificazione va
                applicata sulla parte interna della catena (quella
                che tocca i denti del pignone) con la moto calda,
                ogni 3–5 ore o dopo ogni lavaggio. Il prodotto
                specifico conta: un lubrificante troppo liquido
                vola via subito, uno troppo denso raccoglie abrasivo.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── DIAGNOSI BLOCK ───────────────────────────────────────────────── */}
        <motion.div
          className="diagnosBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="diagnosHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Diagnosi</span>
            <h3>Riconoscere un pignone da sostituire — i segnali che la moto ti manda</h3>
            <p>
              Il pignone consumato non cede di colpo — avvisa prima,
              se sai cosa ascoltare. I sintomi passano spesso
              inosservati finché la catena non salta o un dente
              non si spezza. Riconoscerli presto costa un pignone;
              ignorarli può costare la catena, la corona e il carter.
            </p>
          </motion.div>

          <motion.div className="diagnosGrid" variants={cardVariants}>

            <div className="diagnosCard diagnosCard1">
              <span className="diagnosBadge">Sintomo</span>
              <h4>Catena che "salta" o scatta sotto trazione</h4>
              <p>
                I denti usurati non trattengono la catena in modo continuo:
                sotto carico la catena si solleva e salta di un link.
                Si sente come un colpo secco e irregolare in apertura
                gas. Verificare prima il tensionamento — se è corretto,
                il problema è nei denti del pignone o della corona.
              </p>
            </div>

            <div className="diagnosCard diagnosCard2">
              <span className="diagnosBadge">Sintomo</span>
              <h4>Rumore secco o crepitio dalla trasmissione finale</h4>
              <p>
                Un crepitio ritmico sincronizzato con la velocità
                (non con il regime motore) indica usura nei denti
                del pignone o della corona. Un rumore più sordo
                e continuo può essere il coperchio pignone che sfrega
                per accumulo di fango — pulire prima di diagnosticare.
              </p>
            </div>

            <div className="diagnosCard diagnosCard3">
              <span className="diagnosBadge">Sintomo</span>
              <h4>Trasmissione "tesa" o rigida in rotazione a freddo</h4>
              <p>
                Con la moto a motore spento, ruotare la ruota posteriore
                a mano: dovrebbe girare fluida con piccole variazioni
                di resistenza. Se c'è un punto di maggiore resistenza
                o rigidità che si ripete ogni giro del pignone,
                un dente è deformato o un link della catena è fissato.
                Identificare quale elemento causa il punto di blocco.
              </p>
            </div>

            <div className="diagnosCard diagnosCard4">
              <span className="diagnosBadge">Sintomo</span>
              <h4>Catena nuova che si consuma rapidamente</h4>
              <p>
                Una catena nuova che si allunga di 2–3 mm in poche ore
                indica che il pignone (o la corona) è usurato e morde
                la catena in modo irregolare. Il profilo asimmetrico
                dei denti "tira" i link più del normale, accelerando
                lo sfilacciamento dei perni. Non montare mai una catena
                nuova su pignone o corona consumati — è uno spreco.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── CARDS GRID ───────────────────────────────────────────────────── */}
        <motion.div
          className="cardsGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Aftermarket</span>
            <h3>Sunstar, Renthal, JT — chi produce i pignoni da corsa</h3>
            <p>
              I brand di riferimento per il pignone racing sono Sunstar
              (ergal billet anodizzato duro, made in Japan), Renthal
              (ergal con trattamento superficiale Ultralight), JT Sprockets
              (acciaio e ergal, ampia gamma di denti) e Supersprox
              (bimetallico: corona in acciaio, corpo in alluminio per
              la corona — lo stesso principio si applica ai pignoni
              bimetallici con inserto in acciaio nei denti e corpo ergal).
              La differenza tra un pignone da 15€ e uno da 60€ è reale
              in termini di tolleranze di lavorazione e durata —
              ma solo se la catena è mantenuta correttamente.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Passo catena</span>
            <h3>520 vs 428 vs 520 heavy — scegliere il passo giusto</h3>
            <p>
              Il passo catena non si sceglie solo per il pignone —
              è una scelta di sistema che coinvolge pignone, catena
              e corona. Il passo 520 (15,875 mm) è lo standard
              sul fuoristrada moderno: buon equilibrio tra resistenza
              e peso. Il 428 (12,7 mm) è usato su moto leggere da pista
              e alcune 125: catena più leggera, meno resistenza,
              ma pignone e corona con denti più sottili e meno
              resistenti. Il 520 heavy (rinforzato) è usato su moto
              potenti da enduro hard o rally dove i carichi di trazione
              estremi richiedono catene con perni più grandi.
            </p>
          </motion.article>

          <motion.article className="infoCard" variants={cardVariants}>
            <span className="cardTag">Il numero giusto</span>
            <h3>Come scegliere il numero di denti per il proprio tracciato</h3>
            <p>
              La regola pratica: inizia dal setup stock del costruttore —
              è calibrato per il 80% degli utilizzi. Se il motore
              arriva spesso al limitatore in rettilineo, aggiungi
              un dente al pignone o togli uno alla corona.
              Se l'accelerazione in uscita di curva è insufficiente
              o il motore cade fuori banda nelle sezioni lente,
              togli un dente al pignone o aggiungine uno alla corona.
              Variare pignone e corona insieme in direzioni opposte
              dà variazioni più grandi; variare solo uno dei due
              dà step più fini. Tieni un taccuino con i setup
              e le condizioni — la memoria del pilota è inaffidabile.
            </p>
          </motion.article>
        </motion.div>

      </div>
    </section>
  );
};

export default Pignone;
