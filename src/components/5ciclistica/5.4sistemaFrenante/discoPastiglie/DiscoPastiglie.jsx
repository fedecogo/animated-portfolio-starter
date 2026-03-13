import "./discoPastiglie.scss";
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

const DiscoPastiglie = () => {
  return (
    <section className="discoPastiglie" id="discoPastiglie">
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
              Sistema frenante — Disco e pastiglie
            </motion.span>

            <motion.h2 variants={fadeUpVariants}>
              Disco e pastiglie — dove la pressione idraulica diventa attrito e il moto diventa calore
            </motion.h2>

            <motion.p className="lead" variants={fadeUpVariants}>
              Il disco e le pastiglie sono il punto di conversione reale
              dell'impianto frenante: tutto ciò che pompa e pinza fanno
              serve a portare la pastiglia a contatto col disco con la forza
              giusta. In quel contatto — pochi centimetri quadrati di materiale
              attritivo contro acciaio che ruota — l'energia cinetica della moto
              si trasforma in calore. Il materiale della pastiglia, la geometria
              del disco e il loro stato di usura determinano potenza, feeling,
              rumorosità e vita utile dell'impianto.
            </motion.p>

            <motion.p variants={fadeUpVariants}>
              Questo capitolo copre la fisica e la costruzione di disco e pastiglie,
              le mescole disponibili per ogni disciplina e la procedura di rodaggio
              che determina la vita utile di entrambi i componenti.
              Il montaggio radiale e assiale della pinza è trattato nella sezione 05;
              la procedura di spurgo nella sezione 06.
            </motion.p>
          </div>

          <motion.div className="infoPanel" variants={fadeUpVariants}>
            <div className="panelHeader">
              <span className="panelTag">Anatomia del sistema</span>
              <h3>Disco + pastiglia — quattro variabili che definiscono la frenata</h3>
            </div>
            <div className="flowStepsMini">
              <div className="miniStep">
                <span className="miniIndex">01</span>
                <span className="miniText">
                  <strong>Disco — fisso o flottante:</strong> il disco fisso è saldato al mozzo;
                  il disco flottante è ancorato con inserti mobili (buttons) che permettono
                  la dilatazione termica radiale senza deformare il rotore.
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">02</span>
                <span className="miniText">
                  <strong>Diametro e superficie:</strong> un disco più grande aumenta il braccio
                  del momento frenante — la stessa forza della pinza produce più coppia.
                  La superficie forata o ondulata influisce su raffreddamento e pulizia.
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">03</span>
                <span className="miniText">
                  <strong>Mescola pastiglia:</strong> organica, semi-metallica, sinterizzata
                  o ceramica — ogni mescola ha un range termico ottimale, un coefficiente
                  di attrito specifico e un comportamento sull'acqua diverso.
                </span>
              </div>
              <div className="miniStep">
                <span className="miniIndex">04</span>
                <span className="miniText">
                  <strong>Transfer film e rodaggio:</strong> le prime frenate su disco e pastiglie
                  nuovi depositano uno strato microscopico di materiale attritivo sul disco —
                  senza questo film il feeling rimane incostante e l'usura accelerata.
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
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Sezione disco freno: mozzo centrale, corona forata con pattern, spessore nominale e spessore minimo di scarto marcati; freccia di rotazione e direzione del pattern di sfogo termico
              </span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Anatomia del disco</span>
            <p>
              Il disco è un rotore anulare: la corona esterna è la superficie
              attritiva; il mozzo interno si fissa alla ruota tramite bulloni.
              Lo spessore nominale (es. 3,5 mm) è la misura a disco nuovo;
              il produttore prescrive uno spessore minimo di scarto (es. 3,0 mm)
              al di sotto del quale il disco non ha abbastanza massa per
              assorbire il calore senza surriscaldarsi localmente.
              Misurare lo spessore con un micrometro in tre punti della corona.
            </p>
          </div>
        </motion.div>

        {/* ── DISCO BLOCK ─────────────────────────────────────────────────── */}
        <motion.div
          className="discoBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="discoHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Il disco freno</span>
            <h3>Fisso vs flottante, geometria, materiali e superficie — cosa cambia e perché conta</h3>
            <p>
              Il disco non è solo un target per le pastiglie: è un accumulatore
              di calore, un volano inerziale e un elemento strutturale del sistema
              frenante. Le sue dimensioni e il suo materiale definiscono quanto calore
              può assorbire prima di degradarsi, quanto pesa e quanto influenza
              il comportamento giroscopico della ruota.
            </p>
          </motion.div>

          <motion.div className="discoGrid" variants={cardVariants}>

            <div className="discoCard">
              <span className="discoIdx">01</span>
              <h4>Disco fisso vs disco flottante — dilatazione termica e feeling</h4>
              <p>
                Un disco fisso è rigidamente ancorato al mozzo: quando si scalda,
                la dilatazione termica radiale (l'acciaio si espande di circa
                12 × 10⁻⁶ m/m·°C) è vincolata dal fissaggio. Se la temperatura
                è alta e il disco non è libero di espandersi, si deforma — il sintomo
                è la pulsazione alla leva (la leva pompa ritmicamente durante
                la frenata) perché il disco non è più planare. Il disco flottante
                risolve questo con i buttons (inserti in alluminio o acciaio inox):
                il rotore è ancorato al mozzo con inserti che permettono un piccolo
                movimento radiale e tangenziale — la corona può espandersi liberamente
                senza trasmettere stress al mozzo. Vantaggio aggiuntivo: il rotore
                flottante si autocentra tra le pastiglie ad ogni rotazione,
                riducendo l'attrito residuo a riposo. Prezzo: peso leggermente
                superiore (i buttons aggiungono 30–60 g), costo più alto,
                rumore meccanico a bassa velocità (tintinnio caratteristico dei
                dischi racing — normale, non un guasto).
              </p>
            </div>

            <div className="discoCard">
              <span className="discoIdx">02</span>
              <h4>Diametro, spessore e momento di inerzia — geometria e fisica rotazionale</h4>
              <p>
                Il diametro del disco è il moltiplicatore del momento frenante:
                raddoppiare il raggio significa raddoppiare la coppia a parità
                di forza della pinza. È per questo che le moto da motard,
                con grip elevato e forze frenanti alte, usano dischi da 300–320 mm
                contro i 220–260 mm delle moto da cross. Ma il diametro ha un costo
                inerziale: il momento di inerzia di un anello cresce con il quadrato
                del raggio (I = mr²). Un disco da 320 mm oppone più resistenza
                all'accelerazione angolare di uno da 260 mm — la moto è più lenta
                nei cambi di direzione rapidi tipici del fuoristrada.
                Lo spessore influisce sulla capacità termica: un disco più spesso
                ha più massa, assorbe più calore prima di raggiungere temperature
                critiche, ma pesa di più. Lo spessore minimo di scarto (inciso
                sul disco o riportato in officina) non è una raccomandazione:
                è il limite sotto il quale la capacità termica è insufficiente
                e il rischio di warping catastrofico è reale.
              </p>
            </div>

            <div className="discoCard">
              <span className="discoIdx">03</span>
              <h4>Materiali — acciaio inox, ghisa e carboceramica</h4>
              <p>
                L'acciaio inossidabile è il materiale standard per quasi tutte
                le moto da strada e fuoristrada: buona resistenza alla corrosione
                (fondamentale per il fuoristrada con guadi e lavaggi), lavorabilità,
                costo contenuto. Le leghe variano: gli acciai austenitici (AISI 304,
                316) resistono meglio alla corrosione ma sono più morbidi;
                gli acciai martensitici (AISI 420, 440) sono più duri e reggono
                meglio all'usura ma arrugginiscono più facilmente sui bordi.
                La ghisa è rara nelle moto moderne ma ancora presente su alcuni
                scooter e ciclomotori: più economica, buon coefficiente di attrito,
                ma pesante e soggetta a ossidazione rapida (patina arancione
                dopo pochi giorni di inattività — diversa dalla ruggine profonda,
                si elimina con le prime frenate). La carboceramica (disco in fibra
                di carbonio e carburo di silicio) è il materiale da MotoGP e Superbike
                al top: coefficiente di attrito eccellente ad alta temperatura
                (funziona sopra 400 °C dove l'acciaio inizia a degradarsi),
                leggerissima, ma fragile al di sotto della temperatura di esercizio —
                inutilizzabile sul fuoristrada, pericolosa a freddo.
              </p>
            </div>

            <div className="discoCard">
              <span className="discoIdx">04</span>
              <h4>Superficie del disco — pieno, forato, ondulato (wave) e ventilato</h4>
              <p>
                Il disco pieno (solid) ha superficie continua: massimo contatto
                con la pastiglia, nessuna discontinuità. Il disco forato
                (drilled) ha fori passanti: i fori rimuovono i gas generati
                dall'attrito ad alta temperatura (outgassing della mescola organica),
                sfogano l'acqua e riducono il peso — ma indeboliscono il disco
                localmente e, se i fori non sono bordati correttamente, diventano
                punti di inizio cricca. Il disco ondulato (wave o petal) ha
                la corona con profilo sinusoidale: i bordi ondulati spazzano
                la superficie della pastiglia ad ogni rotazione, pulendo i detriti
                e riducendo il fade da scivolamento dell'acqua. Preferito nel
                fuoristrada per la capacità di auto-pulizia col fango.
                Il disco ventilato (con nervature tra le due fasce della corona)
                è una soluzione racing per il raffreddamento: l'aria pompata
                dalle nervature riduce la temperatura media del disco in sessione
                prolungata — non necessario su moto da fuoristrada leggere
                ma critico su grosse sportive ad alta percorrenza in pista.
              </p>
            </div>

          </motion.div>
        </motion.div>

        {/* ── PASTIGLIE BLOCK ─────────────────────────────────────────────── */}
        <motion.div
          className="pastiglieBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="pastiglieHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Le mescole delle pastiglie</span>
            <h3>Organica, semi-metallica, sinterizzata e ceramica — quattro mescole con quattro range termici</h3>
            <p>
              La pastiglia non è solo un blocco di materiale attritivo:
              è un sistema composito progettato per un range di temperatura
              specifico. Usare la mescola sbagliata significa avere
              coefficiente di attrito instabile, usura accelerata o,
              nel caso peggiore, fade improvviso. La scelta dipende
              dalla disciplina, dal tipo di uso e dalla temperatura
              operativa attesa.
            </p>
          </motion.div>

          <motion.div className="pastiglieGrid" variants={cardVariants}>

            <div className="pastiglieCard pastiglieOrganica">
              <div className="pastiglieCardTop">
                <span className="pastiglieBadge badgeOrganica">Organica</span>
                <span className="pastiglieSub">50–300 °C · road/trail</span>
              </div>
              <h4>Mescola organica (non-asbestos) — silenziosa, progressiva, per uso stradale</h4>
              <p>
                La pastiglia organica è composta da fibre (Kevlar, vetro, gomma,
                fibra di rame) legate con resina organica e termoindurente.
                Vantaggi: coefficiente di attrito alto a temperature basse e medie
                (50–300 °C), feeling progressivo e modulabile, silenziosa,
                non aggredisce il disco — ideale per moto stradali e uso quotidiano
                dove le temperature rimangono moderate. Svantaggi: il legante
                organico si decompone sopra 300–350 °C — al superamento di questa
                soglia si verifica il fade da mescola: il materiale vaporizza
                tra pastiglia e disco creando uno strato gassoso che riduce
                drasticamente il coefficiente di attrito (la leva va a fondo senza
                produrre decelerazione). Sensibile all'umidità nelle prime frenate
                a freddo (la resina assorbe acqua e riduce l'attrito iniziale).
                Adatta a: stradali 2T, scooter, fuoristrada leggero senza
                richieste termiche elevate.
              </p>
            </div>

            <div className="pastiglieCard pastiglieSemiMetallica">
              <div className="pastiglieCardTop">
                <span className="pastiglieBadge badgeSemiMetallica">Semi-metallica</span>
                <span className="pastiglieSub">100–450 °C · uso misto</span>
              </div>
              <h4>Mescola semi-metallica — equilibrio tra feeling e resistenza termica</h4>
              <p>
                La mescola semi-metallica contiene 30–65% di particelle metalliche
                (rame, ferro, acciaio, grafite) disperse in un legante organico
                o fenolico. La componente metallica alza significativamente
                la soglia termica (450–500 °C) rispetto all'organica pura.
                Il coefficiente di attrito è stabile su un range più ampio
                e la dissipazione del calore è migliore grazie alla conduttività
                termica dei metalli — il calore si distribuisce dalla superficie
                di contatto verso il backing plate e verso il disco più rapidamente.
                Svantaggi rispetto all'organica: più rumorosa a freddo (sfregamento
                metallico nella fase iniziale di riscaldamento), maggiore aggressività
                sul disco (usura del rotore più rapida), richiede temperatura
                minima per esprimere il coefficiente di attrito massimo —
                non ideale per uso esclusivamente urbano a basse velocità.
                Adatta a: enduro su asfalto misto, motard con uso non agonistico,
                stradali sportive su percorsi montani.
              </p>
            </div>

            <div className="pastiglieCard pastiglieRacing">
              <div className="pastiglieCardTop">
                <span className="pastiglieBadge badgeSinterizzata">Sinterizzata</span>
                <span className="pastiglieSub">200–600 °C · racing/pista</span>
              </div>
              <h4>Mescola sinterizzata — massima resistenza termica, mordente costante</h4>
              <p>
                La pastiglia sinterizzata è prodotta per sinterizzazione a caldo:
                le particelle metalliche (rame, bronzo, ferro, grafite, ossidi ceramici)
                vengono compresse e riscaldate a 600–900 °C fino a fondersi parzialmente
                in una matrice compatta — senza legante organico. Il risultato
                è un materiale con resistenza termica altissima (stabile fino
                a 600 °C e oltre) e coefficiente di attrito praticamente costante
                al variare della temperatura. Svantaggi significativi: a freddo
                il coefficiente di attrito è più basso delle mescole organiche —
                le prime frenate dopo un lungo stop non hanno la stessa potenza
                delle successive. Questo comportamento è accettabile in pista
                (disco a temperatura), problematico su strada fredda.
                Aggressiva sui dischi: una pinza con pastiglie sinterizzate
                su un disco morbido lo usura molto più rapidamente.
                Adatta a: motard da gara, pista enduro, hard enduro con frenate
                intense e continue.
              </p>
            </div>

            <div className="pastiglieCard pastiglieCeramica">
              <div className="pastiglieCardTop">
                <span className="pastiglieBadge badgeCeramica">Ceramica rinforzata</span>
                <span className="pastiglieSub">0–350 °C · enduro/acqua</span>
              </div>
              <h4>Mescola ceramica rinforzata — impermeabile, silenziosa, resistente ai detriti</h4>
              <p>
                Le pastiglie ceramiche rinforzate (ceramic compound) contengono
                fibre ceramiche (allumina, silice) e particelle dure disperse
                in un legante organico avanzato. Non sono la carboceramica
                da MotoGP — sono una mescola organica migliorata che usa
                la ceramica come rinforzo strutturale e termico.
                Vantaggi chiave: bassa sensibilità all'acqua (il materiale ceramico
                non assorbe umidità e mantiene un coefficiente di attrito stabile
                anche nelle prime frenate su disco bagnato), bassa rumorosità,
                limitata produzione di polvere nera (la polvere ceramica è
                bianco-grigiastra — meno aggressiva sui cerchi), buona resistenza
                ai detriti fini (sabbia, fango secco). Range termico moderato:
                non è adatta all'uso in pista con temperature sostenute sopra
                350–400 °C. Adatta a: enduro in condizioni bagnate, fuoristrada
                con guadi frequenti, moto da trial.
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
            <span className="sectionLabel">Disco e pastiglie per disciplina</span>
            <h3>Cross, enduro, motard e sportiva — combinazione disco-mescola ottimale per ogni uso</h3>
            <p>
              La scelta di disco e mescola è sempre una coppia: il disco
              deve essere compatibile con la mescola in termini di aggressività
              e range termico. Una mescola sinterizzata su un disco fine
              da cross lo usura in tempi brevi; un disco da motard spesso
              su una moto da cross è peso inutile.
            </p>
          </motion.div>

          <motion.div className="tipologieGrid" variants={cardVariants}>

            <div className="tipCard tipCross">
              <div className="tipCardTop">
                <span className="tipBadge badgeCross">Cross — MX</span>
                <span className="tipSub">220–260 mm · organica/semi-met.</span>
              </div>
              <h4>Leggerezza assoluta — disco wave leggero e pastiglia modulabile</h4>
              <p>
                Nel motocross il peso non sospeso è critico: ogni grammo
                aggiunto al disco si sente nelle vibrazioni e nella risposta
                della forcella sul salto. I dischi da cross sono wave o petal
                in acciaio inox sottile (2,5–3 mm), con diametro anteriore
                da 220 a 260 mm secondo la cilindrata. Il disco wave è preferito
                per l'auto-pulizia — la forma sinusoidale spazza i detriti.
                La pastiglia è organica o semi-metallica leggera: nel cross
                non si raggiungono temperature da sinterizzata su fondo sabbioso
                o argilloso (il grip limitato porta al bloccaggio prima che
                il disco sia caldo). La priorità è la modulabilità per il
                controllo della trazione, non la potenza frenante massima.
              </p>
            </div>

            <div className="tipCard tipEnduro">
              <div className="tipCardTop">
                <span className="tipBadge badgeEnduro">Enduro</span>
                <span className="tipSub">240–260 mm · semi-met./ceramica</span>
              </div>
              <h4>Tenuta all'acqua e auto-pulizia — disco wave e mescola bagnato-compatibile</h4>
              <p>
                L'enduro attraversa guadi, fango e polvere: il disco deve
                auto-pulirsi e la pastiglia deve frenare anche bagnata.
                La combinazione preferita è disco wave o petal (migliore
                auto-pulizia rispetto al forato che si ostruisce col fango)
                con pastiglia semi-metallica di qualità o ceramica rinforzata
                per l'uso in condizioni bagnate. Il disco anteriore da enduro
                duro e hard enduro è spesso da 260 mm per avere più potenza
                nelle discese tecniche su roccia dove il grip è alto.
                Il posteriore rimane su diametri più piccoli (220 mm) —
                usato intensamente per il controllo della trazione ma
                con forze frenanti inferiori al frontale.
                Lubrificare regolarmente i perni guida delle pinze flottanti
                posteriori — il fango entra facilmente.
              </p>
            </div>

            <div className="tipCard tipMotard">
              <div className="tipCardTop">
                <span className="tipBadge badgeMotard">Motard</span>
                <span className="tipSub">300–320 mm · sinterizzata</span>
              </div>
              <h4>Massima potenza e resistenza termica — disco grande, mescola sinterizzata</h4>
              <p>
                Il passaggio al asfalto cambia tutto: il grip elevato permette
                decelerazioni da 1g e oltre, le temperature del disco salgono
                a 400–600 °C in sessione, i cicli frenata-rilascio sono ravvicinati.
                Il disco anteriore da motard racing è da 300–320 mm (flottante
                in quasi tutti i setup racing), abbinato a mescola sinterizzata
                per la resistenza termica. Il disco più grande richiede adattatori
                specifici per la pinza — quasi sempre un cambio di staffa
                e spesso un cambio alla pinza radiale (argomento sezione 05).
                Il disco posteriore rimane su 220–240 mm ma lavora molto più
                intensamente rispetto al fuoristrada — in motard il freno
                posteriore è usato come strumento di assetto (punto frenata
                con posteriore, ingresso curva con driftcontrollato).
                Verificare lo spessore del disco ogni stagione.
              </p>
            </div>

            <div className="tipCard tipSportiva">
              <div className="tipCardTop">
                <span className="tipBadge badgeSportiva">Sportiva / Stradale 2T</span>
                <span className="tipSub">240–280 mm · semi-metallica</span>
              </div>
              <h4>Impianto OEM bilanciato — prima ottimizzare l'esistente, poi considerare upgrade</h4>
              <p>
                Le 2T stradali sportive (RS 125, NSR 125, TZR, Cagiva Mito)
                montano dischi proporzionati alla cilindrata e al peso contenuto.
                L'impianto OEM è già bilanciato dal costruttore per la pompa
                e la pinza di serie — installare un disco più grande senza
                cambiare la pinza non produce automaticamente più potenza frenante.
                Il primo passo è sempre verificare lo stato: spessore del disco
                (la quota di scarto è sul disco stesso), stato delle pastiglie,
                scorrimento dei pistoncini. Un upgrade sensato per uso sportivo
                su strada è la sostituzione della mescola organica con una
                semi-metallica di qualità: più costante nella risposta,
                migliore nella frenata prolungata su percorsi montani.
                Evitare mescole sinterizzate su moto stradali usate a freddo —
                la mancanza di mordente iniziale è un rischio reale nel traffico.
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
            <span className="captionTag">Anatomia della pastiglia</span>
            <p>
              La pastiglia è composta da tre strati: il backing plate in acciaio
              stampato (supporto strutturale e ancoraggio nella sede della pinza),
              lo strato di colla ad alta temperatura (interlayer) e il materiale
              attritivo (friction compound). Le smussature sui bordi laterali
              (chamfer o bevel) riducono il rumore e facilitano l'autocentramento
              tra i pistoncini. Lo slot centrale (se presente) serve per
              verificare lo spessore rimanente: quando il fondo dello slot
              è a filo con la superficie, la pastiglia è a limite.
            </p>
          </div>
          {/* ↓↓↓ INSERISCI QUI LA TUA IMG O GIF ↓↓↓ */}
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
              <span className="placeholderIcon">⊕</span>
              <span className="placeholderText">
                Sezione esplosa pastiglia freno: backing plate / interlayer / friction compound; evidenziare chamfer laterale e slot di usura; comparare spessore nuovo vs limite di scarto
              </span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
        </motion.div>

        {/* ── RODAGGIO BLOCK ──────────────────────────────────────────────── */}
        <motion.div
          className="rodaggioBlock"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="rodaggioHeader" variants={fadeUpVariants}>
            <span className="sectionLabel">Rodaggio — bedding procedure</span>
            <h3>Il transfer film — perché rodare disco e pastiglie nuove è fondamentale e come farlo</h3>
            <p>
              Disco e pastiglie nuovi non funzionano al massimo della loro capacità
              dalla prima frenata. La superficie del disco è liscia e uniforme —
              troppo liscia. Le prime frenate progressive depositano uno strato
              microscopico di materiale attritivo (transfer film) sulla superficie
              del disco: questo strato migliora il coefficiente di attrito,
              riduce il rumore e stabilizza il comportamento della pastiglia
              nell'intero range termico. Saltare il rodaggio significa
              pastiglie che squeal, usura asimmetrica e feeling incostante
              per tutto il ciclo di vita del componente.
            </p>
          </motion.div>

          <motion.div className="rodaggioGrid" variants={cardVariants}>

            <div className="rodaggioCard rodaggioFisica">
              <div className="rodaggioCardTop">
                <span className="rodaggioBadge badgeFisica">La fisica</span>
              </div>
              <h4>Il transfer film — il deposito microscopico che cambia tutto</h4>
              <p>
                Durante la prima frenata, la pastiglia e il disco entrano
                in contatto con asperità microscopiche opposte: il materiale
                attritivo si trasferisce selettivamente sulle asperità del disco
                formando un film sottile (2–10 µm) di composito della pastiglia
                legato chimicamente e meccanicamente alla superficie del rotore.
                Questo film ha due effetti: aumenta il coefficiente di attrito
                medio (più superficie reale di contatto) e livella le asperità
                del disco, riducendo il rumore ad alta frequenza (squeal).
                Se il primo contatto avviene troppo forte (bloccaggio) o troppo
                a freddo, il transfer film si deposita in modo non uniforme —
                si formano isole di materiale sopraelevate (judder spots)
                che causano la pulsazione caratteristica del disco "ovalizzato".
                Il rodaggio serve a costruire un film uniforme, non a consumare
                la pastiglia rapidamente.
              </p>
            </div>

            <div className="rodaggioCard rodaggioStrada">
              <div className="rodaggioCardTop">
                <span className="rodaggioBadge badgeStrada">Procedura — strada</span>
              </div>
              <h4>Bedding su strada — 8–10 cicli progressivi con raffreddamento completo</h4>
              <p>
                La procedura su strada per mescola organica e semi-metallica:
                trovare un tratto rettilineo libero, portare la moto a 50 km/h
                e applicare una frenata moderata (40–50% della capacità) fino
                a circa 10 km/h senza fermarsi completamente — il disco non deve
                raffreddarsi bruscamente con la moto ferma. Ripetere 3–4 volte
                poi lasciare raffreddare completamente (almeno 10 minuti senza
                frenare mentre si circola lentamente). Secondo ciclo a 70 km/h,
                frenate al 60–70%. Terzo ciclo a 80–90 km/h, frenate al 80%.
                Evitare la frenata completa fino al bloccaggio nei primi 200 km.
                Il disco deve raffreddarsi tra i cicli — l'acqua fredda su un
                disco caldo provoca distorsione termica immediata (warping).
                Dopo il rodaggio il feeling sarà notevolmente più secco e lineare
                rispetto alle prime frenate.
              </p>
            </div>

            <div className="rodaggioCard rodaggioRacing">
              <div className="rodaggioCardTop">
                <span className="rodaggioBadge badgeRacing">Procedura — racing</span>
              </div>
              <h4>Bedding aggressivo per mescola sinterizzata — il calore è parte del processo</h4>
              <p>
                La mescola sinterizzata richiede un processo di rodaggio a temperature
                più alte rispetto all'organica — il legame tra transfer film e disco
                avviene chimicamente solo sopra una temperatura soglia.
                Procedura racing (adatta a pista o strade chiuse):
                da 80 km/h, 5 frenate al 70–80% della capacità con disco che
                si scalda progressivamente; poi 3–5 frenate da 100 km/h al 90%
                senza fermarsi completamente. Lasciare raffreddare con la moto
                in movimento lento — mai fermarsi col disco caldo con la pastiglia
                premuta (il materiale si trasferisce in un punto solo creando
                uno hot spot). Il disco dopo il rodaggio avrà una colorazione
                leggermente iridata (blu/dorato) — normale, indica che ha raggiunto
                la temperatura corretta. Se la colorazione è uniforme su tutta
                la corona il transfer film è riuscito; se è irregolare con zone
                più scure, ripetere qualche ciclo.
              </p>
            </div>

            <div className="rodaggioCard rodaggioErrori">
              <div className="rodaggioCardTop">
                <span className="rodaggioBadge badgeErrori">Errori comuni</span>
              </div>
              <h4>Cosa non fare durante il rodaggio — i tre errori che compromettono il disco</h4>
              <p>
                Tre errori compromettono il rodaggio in modo spesso irreversibile.
                Primo: frenata completa e bloccaggio nei primi 50 km. La ruota che
                si blocca trasferisce tutto il materiale della pastiglia in un
                punto fisso del disco — si forma un deposito localizzato che
                produce pulsazione e judder per tutta la vita del disco.
                Secondo: fermarsi con il freno tenuto (anche leggermente) a disco
                caldo. Anche se non si blocca, il calore concentrato sotto la
                pastiglia ferma deposita una macchia di materiale — stesso risultato.
                Il manubrio va rilasciato completamente prima che la moto si fermi,
                oppure continuare a muoversi lentamente.
                Terzo: bagnare il disco caldo con acqua (pozzanghere, guado,
                lavaggio) nei primi cicli. Lo shock termico deforma il disco.
                Aspettare sempre che il disco si raffreddi naturalmente.
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
              <span className="placeholderText">
                GIF procedura rodaggio: sequenza frenata progressiva → rilascio → raffreddamento; confronto disco correttamente rodato (transfer film uniforme, colorazione iridata uniforme) vs disco con judder spots (depositi localizzati, colorazione irregolare)
              </span>
              <span className="placeholderSub">Sostituisci questo div con &lt;img&gt; o &lt;video&gt;</span>
            </div>
          </div>
          {/* ↑↑↑ FINE PLACEHOLDER ↑↑↑ */}
          <div className="visualCaption">
            <span className="captionTag">Transfer film — risultato corretto</span>
            <p>
              Un disco correttamente rodato mostra una colorazione
              uniforme su tutta la corona (dal grigio argenteo al dorato/iridato
              secondo la temperatura raggiunta) e una superficie levigata
              al tatto. Un disco con rodaggio errato presenta zone più scure
              o più chiare alternate — depositi non uniformi che causano
              la caratteristica pulsazione avvertita alla leva durante la frenata.
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
            <h3>Riconoscere l'usura di disco e pastiglie — sintomi, misure e intervalli</h3>
            <p>
              Disco e pastiglie si usurano in modo diverso e con sintomi diversi.
              Imparare a leggere il tipo di usura permette di anticipare il guasto
              e di capire se è un problema di manutenzione o di scelta del materiale.
            </p>
          </motion.div>

          <motion.div className="usuraGrid" variants={cardVariants}>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Pulsazione alla leva — disco fuori piano (warping)</h4>
              <p>
                La leva pompa ritmicamente in sincronia con la rotazione della ruota
                durante la frenata: il disco ha un'ondulazione (warping) o depositi
                non uniformi di transfer film (judder). Con un comparatore sul disco
                fermo: una variazione di spessore superiore a 0,01 mm su tutta
                la circonferenza indica warping che richiede la sostituzione.
                Cause: raffreddamento brusco del disco caldo, rodaggio errato,
                bulloni del disco stretti in modo non uniforme o a torque eccessivo.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeSintomo">Sintomo</span>
              <h4>Squeal (cigolìo) durante la frenata — cause e rimedi</h4>
              <p>
                Il cigolìo ad alta frequenza della pastiglia è quasi sempre un
                problema di risonanza: la pastiglia vibra sul disco a una frequenza
                che genera il suono. Cause: pastiglia sporca di olio o grasso
                (→ pulire con brake cleaner), pastiglia con smussatura consumata
                (→ rifare il chamfer con lima), pastiglia non correttamente
                assestata nella sede della pinza (→ verificare l'anti-squeal shim),
                rodaggio non completato (→ cicli aggiuntivi). Il cigolìo non è
                sempre un guasto — ma va indagato prima di concludere che sia
                normale.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Spessore minimo del disco — dove trovare il valore e come misurare</h4>
              <p>
                Il valore di scarto è inciso sulla superficie del disco dal produttore
                (es. "MIN 3.0") o riportato nel manuale officina. Misurare con
                un micrometro a pallino (non un calibro: il bordo esterno del calibro
                non si posiziona correttamente sulla corona del disco) in tre punti
                equidistanti. Se anche uno solo dei tre punti è sotto il limite,
                il disco va sostituito. Non comprare dischi economici di cui non
                è nota la quota di scarto — senza quel dato non si sa quando
                sostituirlo in sicurezza.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeMisura">Misura</span>
              <h4>Spessore pastiglia rimanente — lo slot e la misura diretta</h4>
              <p>
                Le pastiglie nuove hanno in genere 4–6 mm di materiale attritivo
                sul backing plate. Il limite di sostituzione è tipicamente
                1–1,5 mm — al di sotto di questo valore il backing plate
                entra in contatto col disco (metallo su metallo, nessun attrito,
                danno immediato al disco). Lo slot centrale, se presente, ha fondo
                a 1 mm dalla superficie: quando è a livello con la pastiglia,
                è il momento della sostituzione. Senza slot, usare un calibro
                per misurare lo spessore totale (materiale + backing plate)
                e sottrarre lo spessore del backing plate (in genere 5–6 mm
                per il solo supporto metallico — leggere la scheda tecnica
                della pastiglia specifica).
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeVerifica">Verifica</span>
              <h4>Usura asimmetrica del disco — rigatura e usura da perno guida</h4>
              <p>
                Il disco non deve presentare rigature profonde (superiori a 0,5 mm)
                sulla superficie attritiva: le rigature riducono l'area di contatto
                utile e creano bordi che consumano la pastiglia asimmetricamente.
                Rigature leggere ( minori di 0,3 mm) si assestano con il normale rodaggio.
                Il disco può anche usurarsi asimmetricamente se la pinza flottante
                ha i perni guida bloccati — la pastiglia sul lato senza pistoncino
                non preme uniformemente. Verificare il disco su entrambe le facce
                con una luce radente.
              </p>
            </div>

            <div className="usuraCard">
              <span className="usuraBadge badgeIntervallo">Intervallo</span>
              <h4>Intervallo di sostituzione disco — non solo spessore ma anche tempo</h4>
              <p>
                Un disco che supera ancora la quota di scarto non è automaticamente
                sano: l'acciaio accumula fatica termica nel tempo — microincrinature
                interne che si propagano invisibilmente. Come riferimento:
                fuoristrada con uso intenso ogni 2–3 anni indipendentemente
                dallo spessore; motard da pista ogni stagione; stradale ogni
                3–5 anni o 30.000 km. Se il disco mostra crepe visibili partenti
                dai fori (drilling crack) o dalla base dei petali (wave crack),
                va sostituito immediatamente — una crepa che si propaga durante
                la frenata massima è un cedimento catastrofico.
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
          viewport={{ once: true, amount: 0.15 }}
        >

          <motion.div className="infoCard" variants={cardVariants}>
            <span className="cardTag">Questo capitolo</span>
            <h3>Disco e pastiglie — il punto di attrito dell'impianto frenante</h3>
            <p>
              Questo capitolo ha coperto: fisica del disco (fisso vs flottante,
              diametro, materiali, geometria della superficie), le quattro famiglie
              di mescola (organica, semi-metallica, sinterizzata, ceramica) con
              il rispettivo range termico, la scelta ottimale per disciplina e
              la procedura di rodaggio — transfer film, bedding su strada e
              bedding racing, errori da evitare.
            </p>
          </motion.div>

          <motion.div className="infoCard" variants={cardVariants}>
            <span className="cardTag">Sezione 05 — radiale e assiale</span>
            <h3>Il montaggio della pinza — radiale vs assiale e le conseguenze sul feeling</h3>
            <p>
              La posizione della pinza rispetto all'asse della forcella
              (montaggio radiale vs assiale) cambia il modo in cui la coppia
              frenante si scarica sulla struttura — e di conseguenza il feeling
              e la precisione sotto frenata. Questo argomento, incluso il
              cambio disco maggiorato con adattatore, è trattato integralmente
              nella sezione 05 — Radiale e assiale.
            </p>
          </motion.div>

          <motion.div className="infoCard" variants={cardVariants}>
            <span className="cardTag">Combinare correttamente</span>
            <h3>La coppia disco-pastiglia è un sistema — non ottimizzare uno solo dei due</h3>
            <p>
              Cambiare solo la pastiglia con una mescola più aggressiva
              senza verificare lo stato del disco spesso produce risultati
              peggiori: una sinterizzata su un disco rigato e sottile non
              roda correttamente e usura il disco molto più rapidamente.
              Disco e pastiglie si sostituiscono idealmente insieme, si rodano
              insieme e si scelgono in coppia — il sistema frenante è forte
              quanto il suo componente più debole.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default DiscoPastiglie;
