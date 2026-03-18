import "./motoreIntro.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const MotoreIntro = () => {
  const capitoli = [
    {
      numero: "3.1",
      titolo: "Alimentazione",
      desc: "Carburatore, corpo farfallato, pompa benzina, miscelatore e pacco lamellare",
      icon: "⛽",
      cls: "cardAlimentazione",
      id: "AlimentazioneIntro",
    },
    {
      numero: "3.2",
      titolo: "Gruppo termico",
      desc: "Pistone, fasce elastiche, cilindro, testata e candela",
      icon: "🔥",
      cls: "cardGruppoTermico",
      id: "GruppoTermico",
    },
    {
      numero: "3.3",
      titolo: "Organi meccanici",
      desc: "Biella, albero motore, cuscinetti di banco, carter, olio e guarnizioni",
      icon: "⚙",
      cls: "cardOrgani",
      id: "OrganiMeccanici",
    },
    {
      numero: "3.4",
      titolo: "Trasmissione",
      desc: "Frizione, cambio, alberi, selettore e ingranaggi",
      icon: "⇌",
      cls: "cardTrasmissione",
      id: "Trasmissione",
    },
    {
      numero: "3.5",
      titolo: "Scarico",
      desc: "Camera di espansione, terminale e valvola di scarico",
      icon: "〰",
      cls: "cardScarico",
      id: "Scarico",
    },
    {
      numero: "3.6",
      titolo: "Raffreddamento e accensione",
      desc: "Radiatore, pompa acqua, volano, statore, CDI, bobina e avviamento",
      icon: "◈",
      cls: "cardRaffreddamento",
      id: "Raffreddamento",
    },
  ];

  return (
    <section className="motoreIntro" id="motore-intro">
      <div className="wrapper">

        {/* ── CHAPTER TAG ─────────────────────────────────────────────────── */}
        <motion.div
          className="heroText"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className="chapterTag" variants={fadeUpVariants}>
            <span className="chapterNumber">03</span>
            <span className="chapterDivider" />
            <span className="chapterName">Nuova sezione</span>
          </motion.div>

          <motion.h2 variants={fadeUpVariants}>
            Il Motore —<br />
            <span className="gradientText">dentro la macchina termica</span>
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Il motore a due tempi è una macchina termica di bruciante semplicità —
            nessuna valvola, nessun albero a camme, ogni esplosione utile.
            Ma quella semplicità esterna nasconde una precisione interna
            estrema: ogni componente lavora al limite, ogni tolleranza
            conta, ogni intervallo di manutenzione ha una ragione precisa.
            In questa sezione entriamo dentro il motore, sistema per sistema.
          </motion.p>
        </motion.div>

        {/* ── VISUAL PLACEHOLDER ──────────────────────────────────────────── */}
        <motion.div
          className="visualPlaceholder"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="mediaPlaceholder">
            <div className="placeholderInner">
            <img
                src="https://res.cloudinary.com/dorr4si5z/image/upload/v1773366469/ChatGPT_Image_Mar_13_2026_11_17_25_AM_cwzbky.png"
                alt="Motocross 2 stroke chassis illustration"
                loading="lazy"
              />
         </div>
          </div>
        </motion.div>

        {/* ── CAPITOLI GRID ───────────────────────────────────────────────── */}
        <motion.div
          className="capitoliGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {capitoli.map((c) => (
            <motion.a
              href={`#${c.id}`}
              className={`capitoloCard ${c.cls}`}
              key={c.numero}
              variants={cardVariants}
            >
              <div className="cardTopRow">
                <span className="cardNumero">{c.numero}</span>
                <span className="cardIcon">{c.icon}</span>
              </div>
              <h3>{c.titolo}</h3>
              <p>{c.desc}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* ── INTRO CARD ──────────────────────────────────────────────────── */}
        <motion.div
          className="introCard"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="introCardBar" />
          <p>
            Un motore a due tempi da competizione è uno dei sistemi
            meccanici più densi di fisica applicata che esistano in
            un prodotto di serie. Ogni centimetro cubo di cilindrata è
            progettato per erogare la massima potenza possibile nel range
            di giri utile, con la minima massa in movimento e il massimo
            affidabilità nel ciclo di vita previsto. Capire cosa c'è dentro —
            e perché è fatto così — è il punto di partenza per capire
            come mantenerlo, come modificarlo e come farlo durare.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MotoreIntro;
