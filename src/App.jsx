import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Preloader from "./components/preloader/Preloader";
import "./app.scss";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import CicloPagina from "./pages/CicloPagina";
import MotorePagina from "./pages/MotorePagina";
import TelaioPagina from "./pages/TelaioPagina";
import CiclisticaPagina from "./pages/CiclisticaPagina";
import ElettronicaPagina from "./pages/ElettronicaPagina";
import CarrozzeriaPagina from "./pages/CarrozzeriaPagina";
import FisicaPagina from "./pages/FisicaPagina";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    // prova subito, poi riprova dopo che la pagina ha renderizzato
    scroll();
    const t = setTimeout(scroll, 100);
    return () => clearTimeout(t);
  }, [hash, pathname]);
  return null;
};

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/ciclo" element={<CicloPagina />} />
            <Route path="/motore" element={<MotorePagina />} />
            <Route path="/telaio" element={<TelaioPagina />} />
            <Route path="/ciclistica" element={<CiclisticaPagina />} />
            <Route path="/elettronica" element={<ElettronicaPagina />} />
            <Route path="/carrozzeria" element={<CarrozzeriaPagina />} />
            <Route path="/fisica" element={<FisicaPagina />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
