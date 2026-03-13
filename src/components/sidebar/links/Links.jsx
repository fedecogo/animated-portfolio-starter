import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Homepage",        id: "Homepage" },
  { name: "Introduzione",    id: "Introduzione" },
  { name: "Ciclo del motore",id: "The engine cycle" },
  {
    name: "Componenti del motore",
    id: "MotoreIntro",
    children: [
      { name: "Introduzione",        id: "MotoreIntro" },
      { name: "3.1 Alimentazione",   id: "AlimentazioneIntro" },
      { name: "3.2 Gruppo termico",  id: "GruppoTermico" },
      { name: "3.3 Organi meccanici",id: "OrganiMeccanici" },
      { name: "3.4 Trasmissione",    id: "Trasmissione" },
      { name: "3.5 Scarico",         id: "Scarico" },
      { name: "3.6 Raffreddamento",  id: "Raffreddamento" },
    ],
  },
  {
    name: "Telaio",
    id: "Telaio",
    children: [
      { name: "Introduzione",      id: "Telaio" },
      { name: "Materiali",         id: "Materiali" },
      { name: "Rigidità",          id: "Rigidita" },
      { name: "Geometrie",         id: "Geometrie" },
      { name: "Canotto di sterzo", id: "CanottoDiSterzo" },
      { name: "Forcellone",        id: "Forcellone" },
      { name: "Cavalletto",        id: "Cavalletto" },
    ],
  },
  {
    name: "Ciclistica",
    id: "CiclisticaIntro",
    children: [
      { name: "Introduzione", id: "CiclisticaIntro" },
    ],
  },
  { name: "Contatti", id: "Contact" },
];

const variants = {
  open:   { transition: { staggerChildren: 0.07 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const itemVariants = {
  open:   { y: 0,  opacity: 1 },
  closed: { y: 50, opacity: 0 },
};

const subListVariants = {
  open:   { height: "auto", opacity: 1, transition: { duration: 0.28, ease: "easeOut" } },
  closed: { height: 0,      opacity: 0, transition: { duration: 0.2,  ease: "easeIn"  } },
};

const Links = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (id) =>
    setOpenSection((prev) => (prev === id ? null : id));

  return (
    <motion.div className="links" variants={variants}>
      {navItems.map((item) =>
        item.children ? (
          <motion.div
            className="accordionItem"
            key={item.id}
            variants={itemVariants}
          >
            <div
              className="accordionHeader"
              onClick={() => toggle(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggle(item.id)}
            >
              <span>{item.name}</span>
              <span className={`accordionIcon${openSection === item.id ? " open" : ""}`}>
                +
              </span>
            </div>

            <AnimatePresence initial={false}>
              {openSection === item.id && (
                <motion.div
                  className="accordionChildren"
                  key="children"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={subListVariants}
                  style={{ overflow: "hidden" }}
                >
                  {item.children.map((child) => (
                    <a
                      href={`#${child.id}`}
                      key={child.id}
                      className="subLink"
                    >
                      {child.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.a
            href={`#${item.id}`}
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.a>
        )
      )}
    </motion.div>
  );
};

export default Links;
