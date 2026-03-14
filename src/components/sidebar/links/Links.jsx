import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Homepage", id: "Homepage" },

  {
    name: "1 — Introduzione",
    id: "Introduzione",
    children: [
      { name: "Introduzione",   id: "Introduzione" },
      { name: "Cos'è una 2T",  id: "WhatIsA2TMotorcycle" },
      { name: "2T vs 4T",      id: "TwoStrokeVsFourStroke" },
    ],
  },

  {
    name: "2 — Ciclo del motore",
    id: "The engine cycle",
    children: [
      { name: "Ciclo del motore",         id: "The engine cycle" },
      { name: "Carburante e miscela",     id: "FuelAndMixture" },
      { name: "Aria e carburante",        id: "AirAndFuel" },
      { name: "Fasi del ciclo",           id: "FirstCyclePhases" },
      { name: "Combustione e accensione", id: "CombustionAndIgnition" },
      { name: "Sistema di scarico",       id: "ExhaustSystem" },
    ],
  },

  {
    name: "3 — Il motore",
    id: "MotoreIntro",
    children: [
      { name: "Introduzione",          id: "MotoreIntro" },

      { name: "3.1 — Alimentazione",   id: "AlimentazioneIntro", isSection: true },
      { name: "Carburatore",           id: "Carburatore" },
      { name: "Corpo farfallato",      id: "CorpoFarfallato" },
      { name: "Pompa benzina",         id: "PompaBenzina" },
      { name: "Miscelatore",           id: "Miscelatore" },
      { name: "Pacco lamellare",       id: "PaccoLamellare" },

      { name: "3.2 — Gruppo termico",  id: "GruppoTermico", isSection: true },
      { name: "Pistone",               id: "Pistone" },
      { name: "Fasce elastiche",       id: "Fasce" },
      { name: "Cilindro",              id: "Cilindro" },
      { name: "Testata",               id: "Testata" },
      { name: "Candela",               id: "Candela" },

      { name: "3.3 — Organi meccanici", id: "OrganiMeccanici", isSection: true },
      { name: "Biella",                id: "Biella" },
      { name: "Albero motore",         id: "AlberoMotore" },
      { name: "Cuscinetti di banco",   id: "CuscinettiDiBanco" },
      { name: "Carter",                id: "Carter" },
      { name: "Olio",                  id: "Olio" },
      { name: "Guarnizioni",           id: "Guarnizioni" },

      { name: "3.4 — Trasmissione",    id: "Trasmissione", isSection: true },
      { name: "Frizione",              id: "Frizione" },
      { name: "Cambio",                id: "Cambio" },
      { name: "Alberi",                id: "Alberi" },
      { name: "Selettore",             id: "Selettore" },
      { name: "Ingranaggi",            id: "Ingranaggi" },

      { name: "3.5 — Scarico",         id: "Scarico", isSection: true },
      { name: "Espansione",            id: "Espansione" },
      { name: "Terminale",             id: "Terminale" },
      { name: "Valvola di scarico",    id: "ValvolaDiScarico" },

      { name: "3.6 — Raffreddamento",  id: "Raffreddamento", isSection: true },
      { name: "Radiatore",             id: "Radiatore" },
      { name: "Pompa acqua",           id: "PompaAcqua" },
      { name: "Circuito acqua",        id: "CircuitoAcqua" },
      { name: "Volano e statore",      id: "Volano" },
      { name: "CDI e bobina",          id: "CDI" },
      { name: "Avviamento",            id: "Avviamento" },
    ],
  },

  {
    name: "4 — Telaio",
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
    name: "5 — Ciclistica",
    id: "CiclisticaIntro",
    children: [
      { name: "Introduzione",              id: "CiclisticaIntro" },

      { name: "5.1 — Ruote e pneumatici", id: "RuotePneumaticiIntro", isSection: true },
      { name: "Mozzi",                     id: "Mozzi" },
      { name: "Pneumatici",                id: "Pneumatici" },
      { name: "Cerchi",                    id: "Cerchi" },
      { name: "Grip",                      id: "Grip" },

      { name: "5.2 — Trasmissione finale", id: "TrasmissioneFinaleIntro", isSection: true },
      { name: "Pignone",                   id: "Pignone" },
      { name: "Corona",                    id: "Corona" },
      { name: "Rapporti",                  id: "Rapporti" },
      { name: "Catena",                    id: "Catena" },

      { name: "5.3 — Sospensioni",         id: "SospensioniIntro", isSection: true },
      { name: "Forcelle",                  id: "Forcelle" },
      { name: "Monoammortizzatore",        id: "Monoammortizzatore" },
      { name: "Olio sospensioni",          id: "OlioSospensioni" },
      { name: "Escursione",                id: "Escursione" },
      { name: "Comp. e ritorno",           id: "CompressioneRitornoRegolazioni" },

      { name: "5.4 — Sistema frenante",    id: "FreniIntro", isSection: true },
      { name: "Pompa freno",               id: "Pompa" },
      { name: "Olio freni",                id: "OlioFreni" },
      { name: "Pinza",                     id: "Pinza" },
      { name: "Disco e pastiglie",         id: "DiscoPastiglie" },
      { name: "Radiale e assiale",         id: "RadialeAssiale" },
      { name: "Spurgo freni",              id: "SpurgoFreni" },
    ],
  },

  {
    name: "6 — Elettronica",
    id: "ElettronicaIntro",
    children: [
      { name: "Introduzione", id: "ElettronicaIntro" },
      { name: "Accensione",   id: "Accensione" },
      { name: "Chiave",       id: "Chiave" },
      { name: "Batteria",     id: "Batteria" },
    ],
  },

  {
    name: "7 — Carrozzeria",
    id: "CarrozzeriaIntro",
    children: [
      { name: "Introduzione", id: "CarrozzeriaIntro" },
    ],
  },

  {
    name: "8 — Fisica e Fondamenti",
    id: "FisicaFondamentiMotoreIntro",
    children: [
      { name: "Introduzione", id: "FisicaFondamentiMotoreIntro" },
    ],
  },

  { name: "Contatti", id: "ProjectOutro" },
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
                  {item.children.map((child) =>
                    child.isSection ? (
                      <a
                        href={`#${child.id}`}
                        key={child.id}
                        className="subLink subLinkSection"
                      >
                        {child.name}
                      </a>
                    ) : (
                      <a
                        href={`#${child.id}`}
                        key={child.id}
                        className="subLink"
                      >
                        {child.name}
                      </a>
                    )
                  )}
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
