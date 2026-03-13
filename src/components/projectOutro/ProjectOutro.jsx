import "./projectOutro.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const ProjectOutro = () => {
  const email = "federico.capiz02@gmail.com";
  const website = "https://www.google.com";
  const donateLink = "https://www.paypal.com/pool/9np0jFk3BD?sr=wccr";

  // Messaggio  per chi guarda il codice so che esistii XD 
  // lo so, avrei potuto fare un sito dinamico con testi serviti da backend,
  // database, CMS o API dedicate; ma per questo progetto avrebbe significato
  // più costi, più manutenzione, più complessità e più tempo perso dietro
  // all'infrastruttura invece che ai contenuti. Ho preferito costruire una
  // base solida, veloce, controllabile e totalmente mia.

  return (
    <section className="projectOutro" id="contatti-donazioni">
      <div className="wrapper">
        {/* ── HERO TEXT ─────────────────────────────────────────────────── */}
        <motion.div
          className="heroText"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.span className="sectionLabel" variants={fadeUpVariants}>
            Fine del percorso — Contatti e supporto
          </motion.span>

          <motion.h2 variants={fadeUpVariants}>
            Un progetto nato tra motori, studio tecnico e informatica
          </motion.h2>

          <motion.p className="lead" variants={fadeUpVariants}>
            Questo progetto unisce due delle mie passioni più grandi: i motori
            e l’informatica. Da una parte c’è tutto ciò che riguarda il
            funzionamento reale di una moto — meccanica, ciclistica, elettronica
            e principi fisici — dall’altra c’è il desiderio di trasformare
            conoscenza tecnica in un’esperienza digitale chiara, curata e
            accessibile. L’idea di questo sito è proprio questa: spiegare bene,
            con precisione, senza banalizzare.
          </motion.p>
        </motion.div>

        {/* ── BLOCCO PRINCIPALE ─────────────────────────────────────────── */}
        <motion.div
          className="outroGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* COLONNA TESTO */}
          <motion.div className="storyCard" variants={cardVariants}>
            <div className="storyCardLine" />
            <div className="storyCardBody">
              <span className="cardTag">Perché esiste questo sito</span>
              <p>
                Ho voluto creare una guida strutturata, visiva e tecnica sul
                funzionamento della moto 2 tempi, mettendo insieme esperienza,
                curiosità meccanica e sviluppo front-end. Non è soltanto una
                raccolta di nozioni: è un progetto personale costruito per
                dare ordine a concetti complessi e renderli più comprensibili,
                capitolo dopo capitolo.
              </p>
              <p>
                Se hai trovato utile il sito, se vuoi segnalarmi un errore, se
                vuoi propormi un miglioramento o semplicemente condividere un
                feedback, qui sotto trovi tutti i riferimenti diretti.
              </p>
            </div>
          </motion.div>

          {/* CONTATTI */}
          <motion.div className="infoCard" variants={cardVariants}>
            <span className="cardMiniLabel">Contatti</span>
            <h3>Scrivimi direttamente</h3>
            <p>
              Per feedback, correzioni, collaborazioni o domande tecniche puoi
              contattarmi via email. Se preferisci, puoi anche visitare il mio
              sito personale.
            </p>

            <div className="linkStack">
              <a className="actionLink primary" href={`mailto:${email}`}>
                <span className="linkLabel">Mailbox</span>
                <span className="linkValue">{email}</span>
              </a>

              <a
                className="actionLink"
                href={website}
                target="_blank"
                rel="noreferrer"
              >
                <span className="linkLabel">Sito web</span>
                <span className="linkValue">{website}</span>
              </a>
            </div>
          </motion.div>

          {/* DONAZIONI */}
          <motion.div className="infoCard" variants={cardVariants}>
            <span className="cardMiniLabel">Supporto</span>
            <h3>Area donazioni</h3>
            <p>
              Se vuoi supportare il progetto, puoi farlo con una donazione.
              È un modo concreto per aiutarmi a continuare a migliorare i
              contenuti, curare il sito e dedicare tempo a nuove sezioni sempre
              più approfondite.
            </p>

            <div className="linkStack">
              <a
                className="actionLink donation"
                href={donateLink}
                target="_blank"
                rel="noreferrer"
              >
                <span className="linkLabel">Donazioni</span>
                <span className="linkValue">Supporta il progetto</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ── BOTTOM BAR ────────────────────────────────────────────────── */}
        <motion.div
          className="bottomBar"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>
            Realizzato con passione per la meccanica, attenzione per il dettaglio
            e amore per il web.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOutro;