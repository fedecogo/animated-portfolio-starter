import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./search.scss";

const allSections = [
  // 1 — Introduzione
  { name: "Introduzione",        id: "Introduzione",          route: "/",            chapter: "1 — Introduzione" },
  { name: "Cos'è una moto 2T",   id: "WhatIsA2TMotorcycle",   route: "/",            chapter: "1 — Introduzione" },
  { name: "2T vs 4T",            id: "TwoStrokeVsFourStroke", route: "/",            chapter: "1 — Introduzione" },

  // 2 — Ciclo del motore
  { name: "Ciclo del motore",         id: "The engine cycle",      route: "/ciclo", chapter: "2 — Ciclo del motore" },
  { name: "Carburante e miscela",     id: "FuelAndMixture",        route: "/ciclo", chapter: "2 — Ciclo del motore" },
  { name: "Aria e carburante",        id: "AirAndFuel",            route: "/ciclo", chapter: "2 — Ciclo del motore" },
  { name: "Fasi del ciclo",           id: "FirstCyclePhases",      route: "/ciclo", chapter: "2 — Ciclo del motore" },
  { name: "Combustione e accensione", id: "CombustionAndIgnition", route: "/ciclo", chapter: "2 — Ciclo del motore" },
  { name: "Sistema di scarico",       id: "ExhaustSystem",         route: "/ciclo", chapter: "2 — Ciclo del motore" },

  // 3 — Il motore
  { name: "Il motore — Introduzione", id: "MotoreIntro",        route: "/motore", chapter: "3 — Il motore" },
  { name: "Alimentazione",            id: "AlimentazioneIntro", route: "/motore", chapter: "3 — Il motore" },
  { name: "Carburatore",              id: "Carburatore",        route: "/motore", chapter: "3 — Il motore" },
  { name: "Corpo farfallato",         id: "CorpoFarfallato",    route: "/motore", chapter: "3 — Il motore" },
  { name: "Pompa benzina",            id: "PompaBenzina",       route: "/motore", chapter: "3 — Il motore" },
  { name: "Miscelatore",              id: "Miscelatore",        route: "/motore", chapter: "3 — Il motore" },
  { name: "Pacco lamellare",          id: "PaccoLamellare",     route: "/motore", chapter: "3 — Il motore" },
  { name: "Gruppo termico",           id: "GruppoTermico",      route: "/motore", chapter: "3 — Il motore" },
  { name: "Pistone",                  id: "Pistone",            route: "/motore", chapter: "3 — Il motore" },
  { name: "Fasce elastiche",          id: "Fasce",              route: "/motore", chapter: "3 — Il motore" },
  { name: "Cilindro",                 id: "Cilindro",           route: "/motore", chapter: "3 — Il motore" },
  { name: "Testata",                  id: "Testata",            route: "/motore", chapter: "3 — Il motore" },
  { name: "Candela",                  id: "Candela",            route: "/motore", chapter: "3 — Il motore" },
  { name: "Organi meccanici",         id: "OrganiMeccanici",    route: "/motore", chapter: "3 — Il motore" },
  { name: "Biella",                   id: "Biella",             route: "/motore", chapter: "3 — Il motore" },
  { name: "Albero motore",            id: "AlberoMotore",       route: "/motore", chapter: "3 — Il motore" },
  { name: "Cuscinetti di banco",      id: "CuscinettiDiBanco",  route: "/motore", chapter: "3 — Il motore" },
  { name: "Carter",                   id: "Carter",             route: "/motore", chapter: "3 — Il motore" },
  { name: "Olio motore",              id: "Olio",               route: "/motore", chapter: "3 — Il motore" },
  { name: "Guarnizioni",              id: "Guarnizioni",        route: "/motore", chapter: "3 — Il motore" },
  { name: "Trasmissione",             id: "Trasmissione",       route: "/motore", chapter: "3 — Il motore" },
  { name: "Frizione",                 id: "Frizione",           route: "/motore", chapter: "3 — Il motore" },
  { name: "Cambio",                   id: "Cambio",             route: "/motore", chapter: "3 — Il motore" },
  { name: "Alberi di trasmissione",   id: "Alberi",             route: "/motore", chapter: "3 — Il motore" },
  { name: "Selettore",                id: "Selettore",          route: "/motore", chapter: "3 — Il motore" },
  { name: "Ingranaggi",               id: "Ingranaggi",         route: "/motore", chapter: "3 — Il motore" },
  { name: "Scarico — Intro",          id: "Scarico",            route: "/motore", chapter: "3 — Il motore" },
  { name: "Espansione",               id: "Espansione",         route: "/motore", chapter: "3 — Il motore" },
  { name: "Terminale",                id: "Terminale",          route: "/motore", chapter: "3 — Il motore" },
  { name: "Valvola di scarico",       id: "ValvolaDiScarico",   route: "/motore", chapter: "3 — Il motore" },
  { name: "Raffreddamento",           id: "Raffreddamento",     route: "/motore", chapter: "3 — Il motore" },
  { name: "Radiatore",                id: "Radiatore",          route: "/motore", chapter: "3 — Il motore" },
  { name: "Pompa acqua",              id: "PompaAcqua",         route: "/motore", chapter: "3 — Il motore" },
  { name: "Circuito acqua",           id: "CircuitoAcqua",      route: "/motore", chapter: "3 — Il motore" },
  { name: "Volano e statore",         id: "Volano",             route: "/motore", chapter: "3 — Il motore" },
  { name: "CDI e bobina",             id: "CDI",                route: "/motore", chapter: "3 — Il motore" },
  { name: "Avviamento",               id: "Avviamento",         route: "/motore", chapter: "3 — Il motore" },

  // 4 — Telaio
  { name: "Telaio — Introduzione",  id: "TelaioIntro",     route: "/telaio", chapter: "4 — Telaio" },
  { name: "Telaio",                 id: "Telaio",          route: "/telaio", chapter: "4 — Telaio" },
  { name: "Materiali",              id: "Materiali",       route: "/telaio", chapter: "4 — Telaio" },
  { name: "Rigidità",               id: "Rigidita",        route: "/telaio", chapter: "4 — Telaio" },
  { name: "Geometrie",              id: "Geometrie",       route: "/telaio", chapter: "4 — Telaio" },
  { name: "Canotto di sterzo",      id: "CanottoDiSterzo", route: "/telaio", chapter: "4 — Telaio" },
  { name: "Forcellone",             id: "Forcellone",      route: "/telaio", chapter: "4 — Telaio" },
  { name: "Cavalletto",             id: "Cavalletto",      route: "/telaio", chapter: "4 — Telaio" },

  // 5 — Ciclistica
  { name: "Ciclistica — Intro",          id: "CiclisticaIntro",             route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Ruote e pneumatici",          id: "RuotePneumaticiIntro",        route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Mozzi",                       id: "Mozzi",                       route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Pneumatici",                  id: "Pneumatici",                  route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Cerchi",                      id: "Cerchi",                      route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Grip",                        id: "Grip",                        route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Trasmissione finale",         id: "TrasmissioneFinaleIntro",     route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Pignone",                     id: "Pignone",                     route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Corona",                      id: "Corona",                      route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Rapporti di trasmissione",    id: "Rapporti",                    route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Catena",                      id: "Catena",                      route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Sospensioni",                 id: "SospensioniIntro",            route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Forcelle",                    id: "Forcelle",                    route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Monoammortizzatore",          id: "Monoammortizzatore",          route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Olio sospensioni",            id: "OlioSospensioni",             route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Escursione",                  id: "Escursione",                  route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Compressione e ritorno",      id: "CompressioneRitornoRegolazioni", route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Sistema frenante",            id: "FreniIntro",                  route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Pompa freno",                 id: "Pompa",                       route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Olio freni",                  id: "OlioFreni",                   route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Pinza freno",                 id: "Pinza",                       route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Disco e pastiglie",           id: "DiscoPastiglie",              route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Radiale e assiale",           id: "RadialeAssiale",              route: "/ciclistica", chapter: "5 — Ciclistica" },
  { name: "Spurgo freni",                id: "SpurgoFreni",                 route: "/ciclistica", chapter: "5 — Ciclistica" },

  // 6 — Elettronica
  { name: "Elettronica — Intro", id: "ElettronicaIntro", route: "/elettronica", chapter: "6 — Elettronica" },
  { name: "Accensione",          id: "Accensione",       route: "/elettronica", chapter: "6 — Elettronica" },
  { name: "Chiave",              id: "Chiave",           route: "/elettronica", chapter: "6 — Elettronica" },
  { name: "Batteria",            id: "Batteria",         route: "/elettronica", chapter: "6 — Elettronica" },
  { name: "Cablaggio",           id: "Cablaggio",        route: "/elettronica", chapter: "6 — Elettronica" },
  { name: "Luci",                id: "Luci",             route: "/elettronica", chapter: "6 — Elettronica" },
  { name: "Strumentazione",      id: "Strumentazione",   route: "/elettronica", chapter: "6 — Elettronica" },
  { name: "Centralina",          id: "Centralina",       route: "/elettronica", chapter: "6 — Elettronica" },
  { name: "Mappe motore",        id: "Mappe",            route: "/elettronica", chapter: "6 — Elettronica" },
  { name: "Sensori",             id: "Sensori",          route: "/elettronica", chapter: "6 — Elettronica" },
  { name: "Ride-by-wire",        id: "RideByWire",       route: "/elettronica", chapter: "6 — Elettronica" },
  { name: "ABS",                 id: "Abs",              route: "/elettronica", chapter: "6 — Elettronica" },

  // 7 — Carrozzeria
  { name: "Carrozzeria — Intro", id: "CarrozzeriaIntro", route: "/carrozzeria", chapter: "7 — Carrozzeria" },
  { name: "Serbatoio",           id: "Serbatorio",       route: "/carrozzeria", chapter: "7 — Carrozzeria" },
  { name: "Plastiche",           id: "Plastiche",        route: "/carrozzeria", chapter: "7 — Carrozzeria" },
  { name: "Sella",               id: "Sella",            route: "/carrozzeria", chapter: "7 — Carrozzeria" },
  { name: "Codone",              id: "Codone",           route: "/carrozzeria", chapter: "7 — Carrozzeria" },
  { name: "Aerodinamica",        id: "Aerodinamica",     route: "/carrozzeria", chapter: "7 — Carrozzeria" },

  // 8 — Fisica e Fondamenti
  { name: "Fisica — Intro",           id: "FisicaFondamentiMotoreIntro",  route: "/fisica", chapter: "8 — Fisica e Fondamenti" },
  { name: "Cavalli (potenza)",        id: "Cavalli",                      route: "/fisica", chapter: "8 — Fisica e Fondamenti" },
  { name: "Coppia",                   id: "Coppia",                       route: "/fisica", chapter: "8 — Fisica e Fondamenti" },
  { name: "Cilindrata",               id: "Cilindrata",                   route: "/fisica", chapter: "8 — Fisica e Fondamenti" },
  { name: "Temperatura ottimale",     id: "TemperaturaOttimale",          route: "/fisica", chapter: "8 — Fisica e Fondamenti" },
  { name: "Rapporto aria-benzina",    id: "RapportoAriaBenzina",          route: "/fisica", chapter: "8 — Fisica e Fondamenti" },
  { name: "Detonazione",              id: "Detonazione",                  route: "/fisica", chapter: "8 — Fisica e Fondamenti" },
  { name: "Momento torcente",         id: "MomentoTorcenteRovesciante",   route: "/fisica", chapter: "8 — Fisica e Fondamenti" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scaleY: 0.96 },
  visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.18, ease: "easeOut" } },
  exit:    { opacity: 0, y: -6, scaleY: 0.96, transition: { duration: 0.12, ease: "easeIn" } },
};

const Search = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const results = query.trim().length > 0
    ? allSections.filter((s) =>
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.chapter.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  const handleSelect = (item) => {
    navigate(`${item.route}#${item.id}`);
    setQuery("");
    setOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(results[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpen(results.length > 0);
    setActiveIndex(-1);
  }, [results.length]);

  return (
    <div className="heroSearch" ref={containerRef}>
      <div className="heroSearch__inputWrapper">
        <svg className="heroSearch__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          ref={inputRef}
          className="heroSearch__input"
          type="text"
          placeholder="Cerca una sezione… (candela, frizione, ABS…)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && setOpen(true)}
          autoComplete="off"
        />
        {query && (
          <button
            className="heroSearch__clear"
            onClick={() => { setQuery(""); setOpen(false); inputRef.current?.focus(); }}
            aria-label="Cancella"
          >
            ×
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && results.length > 0 && (
          <motion.ul
            className="heroSearch__dropdown"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {results.map((item, i) => (
              <li
                key={`${item.route}-${item.id}`}
                className={`heroSearch__item${i === activeIndex ? " heroSearch__item--active" : ""}`}
                onMouseDown={() => handleSelect(item)}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <span className="heroSearch__itemName">{item.name}</span>
                <span className="heroSearch__itemChapter">{item.chapter}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
