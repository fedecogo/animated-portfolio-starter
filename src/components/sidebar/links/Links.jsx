import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Homepage", id: "Homepage", route: "/#Homepage" },

  {
    name: "1 — Introduzione",
    id: "Introduzione",
    route: "/",
    children: [
      { name: "1.1 — Introduzione",  id: "Introduzione" },
      { name: "1.2 — Cos'è una 2T", id: "WhatIsA2TMotorcycle" },
      { name: "1.3 — 2T vs 4T",     id: "TwoStrokeVsFourStroke" },
    ],
  },

  {
    name: "2 — Ciclo del motore",
    id: "The engine cycle",
    route: "/ciclo",
    children: [
      { name: "Introduzione",                   id: "The engine cycle" },
      { name: "2.1 — Carburante e miscela",     id: "FuelAndMixture" },
      { name: "2.2 — Aria e carburante",        id: "AirAndFuel" },
      { name: "2.3 — Fasi del ciclo",           id: "FirstCyclePhases" },
      { name: "2.4 — Combustione e accensione", id: "CombustionAndIgnition" },
      { name: "2.5 — Sistema di scarico",       id: "ExhaustSystem" },
    ],
  },

  {
    name: "3 — Il motore",
    id: "MotoreIntro",
    route: "/motore",
    children: [
      { name: "Introduzione",          id: "MotoreIntro" },

      { name: "3.1 — Alimentazione",   id: "AlimentazioneIntro", isSection: true },
      { name: "Carburatore",        id: "Carburatore" },
      { name: "Corpo farfallato",   id: "CorpoFarfallato" },
      { name: "Pompa benzina",      id: "PompaBenzina" },
      { name: "Miscelatore",        id: "Miscelatore" },
      { name: "Pacco lamellare",    id: "PaccoLamellare" },

      { name: "3.2 — Gruppo termico",  id: "GruppoTermico", isSection: true },
      { name: "Pistone",            id: "Pistone" },
      { name: "Fasce elastiche",    id: "Fasce" },
      { name: "Cilindro",           id: "Cilindro" },
      { name: "Testata",            id: "Testata" },
      { name: "Candela",            id: "Candela" },

      { name: "3.3 — Organi meccanici", id: "OrganiMeccanici", isSection: true },
      { name: "Biella",             id: "Biella" },
      { name: "Albero motore",      id: "AlberoMotore" },
      { name: "Cuscinetti di banco",id: "CuscinettiDiBanco" },
      { name: "Carter",             id: "Carter" },
      { name: "Olio",               id: "Olio" },
      { name: "Guarnizioni",        id: "Guarnizioni" },

      { name: "3.4 — Trasmissione",    id: "Trasmissione", isSection: true },
      { name: "Frizione",           id: "Frizione" },
      { name: "Cambio",             id: "Cambio" },
      { name: "Alberi",             id: "Alberi" },
      { name: "Selettore",          id: "Selettore" },
      { name: "Ingranaggi",         id: "Ingranaggi" },

      { name: "3.5 — Scarico",         id: "Scarico", isSection: true },
      { name: "Espansione",         id: "Espansione" },
      { name: "Terminale",          id: "Terminale" },
      { name: "Valvola di scarico", id: "ValvolaDiScarico" },

      { name: "3.6 — Raffreddamento",  id: "Raffreddamento", isSection: true },
      { name: "Radiatore",          id: "Radiatore" },
      { name: "Pompa acqua",        id: "PompaAcqua" },
      { name: "Circuito acqua",     id: "CircuitoAcqua" },
      { name: "Volano e statore",   id: "Volano" },
      { name: "CDI e bobina",       id: "CDI" },
      { name: "Avviamento",         id: "Avviamento" },
    ],
  },

  {
    name: "4 — Telaio",
    id: "Telaio",
    route: "/telaio",
    children: [
      { name: "Introduzione",               id: "TelaioIntro" },
      { name: "4.1 — Telaio",              id: "Telaio" },
      { name: "4.2 — Materiali",           id: "Materiali" },
      { name: "4.3 — Rigidità",            id: "Rigidita" },
      { name: "4.4 — Geometrie",           id: "Geometrie" },
      { name: "4.5 — Canotto di sterzo",   id: "CanottoDiSterzo" },
      { name: "4.6 — Forcellone",          id: "Forcellone" },
      { name: "4.7 — Cavalletto",          id: "Cavalletto" },
    ],
  },

  {
    name: "5 — Ciclistica",
    id: "CiclisticaIntro",
    route: "/ciclistica",
    children: [
      { name: "Introduzione",              id: "CiclisticaIntro" },

      { name: "5.1 — Ruote e pneumatici", id: "RuotePneumaticiIntro", isSection: true },
      { name: "Mozzi",                 id: "Mozzi" },
      { name: "Pneumatici",            id: "Pneumatici" },
      { name: "Cerchi",                id: "Cerchi" },
      { name: "Grip",                  id: "Grip" },

      { name: "5.2 — Trasmissione finale", id: "TrasmissioneFinaleIntro", isSection: true },
      { name: "Pignone",               id: "Pignone" },
      { name: "Corona",                id: "Corona" },
      { name: "Rapporti",              id: "Rapporti" },
      { name: "Catena",                id: "Catena" },

      { name: "5.3 — Sospensioni",         id: "SospensioniIntro", isSection: true },
      { name: "Forcelle",               id: "Forcelle" },
      { name: "Monoammortizzatore",     id: "Monoammortizzatore" },
      { name: "Olio sospensioni",       id: "OlioSospensioni" },
      { name: "Escursione",             id: "Escursione" },
      { name: "Comp. e ritorno",        id: "CompressioneRitornoRegolazioni" },

      { name: "5.4 — Sistema frenante",    id: "FreniIntro", isSection: true },
      { name: "Pompa freno",            id: "Pompa" },
      { name: "Olio freni",             id: "OlioFreni" },
      { name: "Pinza",                  id: "Pinza" },
      { name: "Disco e pastiglie",      id: "DiscoPastiglie" },
      { name: "Radiale e assiale",      id: "RadialeAssiale" },
      { name: "Spurgo freni",           id: "SpurgoFreni" },
    ],
  },

  {
    name: "6 — Elettronica",
    id: "ElettronicaIntro",
    route: "/elettronica",
    children: [
      { name: "Introduzione",              id: "ElettronicaIntro" },
      { name: "6.1 — Accensione",         id: "Accensione" },
      { name: "6.2 — Chiave",             id: "Chiave" },
      { name: "6.3 — Batteria",           id: "Batteria" },
      { name: "6.4 — Cablaggio",          id: "Cablaggio" },
      { name: "6.5 — Luci",               id: "Luci" },
      { name: "6.6 — Strumentazione",     id: "Strumentazione" },
      { name: "6.7 — Centralina",         id: "Centralina" },
      { name: "6.8 — Mappe",              id: "Mappe" },
      { name: "6.9 — Sensori",            id: "Sensori" },
      { name: "6.10 — Ride-by-wire",      id: "RideByWire" },
      { name: "6.11 — ABS",               id: "Abs" },
    ],
  },

  {
    name: "7 — Carrozzeria",
    id: "CarrozzeriaIntro",
    route: "/carrozzeria",
    children: [
      { name: "Introduzione",             id: "CarrozzeriaIntro" },
      { name: "7.1 — Serbatoio",         id: "Serbatorio" },
      { name: "7.2 — Plastiche",         id: "Plastiche" },
      { name: "7.3 — Sella",             id: "Sella" },
      { name: "7.4 — Codone",            id: "Codone" },
      { name: "7.5 — Aerodinamica",      id: "Aerodinamica" },
    ],
  },

  {
    name: "8 — Fisica e Fondamenti",
    id: "FisicaFondamentiMotoreIntro",
    route: "/fisica",
    children: [
      { name: "Introduzione",                   id: "FisicaFondamentiMotoreIntro" },
      { name: "8.1 — Cavalli",                  id: "Cavalli" },
      { name: "8.2 — Coppia",                   id: "Coppia" },
      { name: "8.3 — Cilindrata",               id: "Cilindrata" },
      { name: "8.4 — Temperatura ottimale",     id: "TemperaturaOttimale" },
      { name: "8.5 — Rapporto aria-benzina",    id: "RapportoAriaBenzina" },
      { name: "8.6 — Detonazione",              id: "Detonazione" },
      { name: "8.7 — Momento torcente",         id: "MomentoTorcenteRovesciante" },
    ],
  },

  { name: "Contatti", id: "ProjectOutro", route: "/#ProjectOutro" },
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

const Links = ({ setOpen }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (id) =>
    setOpenSection((prev) => (prev === id ? null : id));

  const handleLinkClick = () => {
    setOpenSection(null);
    setOpen(false);
  };

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
                    <Link
                      to={`${item.route}#${child.id}`}
                      key={child.id}
                      className={`subLink${child.isSection ? " subLinkSection" : ""}`}
                      onClick={handleLinkClick}
                    >
                      {child.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div key={item.id} variants={itemVariants}>
            <Link
              to={item.route}
              className="topLink"
              onClick={handleLinkClick}
              style={{ display: "block" }}
            >
              {item.name}
            </Link>
          </motion.div>
        )
      )}
    </motion.div>
  );
};

export default Links;
