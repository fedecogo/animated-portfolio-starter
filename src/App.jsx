import { useState } from "react";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Introduzione from "./components/1intro/introduzione/Introduzione";
import WhatIsA2TMotorcycle from "./components/1intro/whatIsA2TMotorcycle/WhatIsA2TMotorcycle";
import TwoStrokeVsFourStroke from "./components/1intro/twoStrokeVsFourStroke/TwoStrokeVsFourStroke";
import EngineLifeTitle from "./components/2Ciclo/engineLifeTitle/EngineLifeTitle";
import AirAndFuel from "./components/2Ciclo/airAndFuel/AirAndFuel";
import FuelAndMixture from "./components/2Ciclo/fuelAndMixture/FuelAndMixture";
import FirstCyclePhases from "./components/2Ciclo/firstCyclePhases/FirstCyclePhases";
import CombustionAndIgnition from "./components/2Ciclo/combustionAndIgnition/CombustionAndIgnition";
import ExhaustSystem from "./components/2Ciclo/exhaustSystem/ExhaustSystem";
import MotoreIntro from "./components/3motore/motoreIntro/MotoreIntro";
import AlimentazioneIntro from "./components/3componentiDelMotore/alimentazioneIntro/AlimentazioneIntro";
import Carburatore from "./components/3componentiDelMotore/carburatore/Carburatore";
import CorpoFarfallato from "./components/3componentiDelMotore/corpoFarfallato/CorpoFarfallato";
import PompaBenzina from "./components/3componentiDelMotore/pompaBenzina/PompaBenzina";
import Miscelatore from "./components/3componentiDelMotore/miscelatore/Miscelatore";
import PaccoLamellare from "./components/3componentiDelMotore/paccoLamellare/PaccoLamellare";
import GruppoTermicoIntro from "./components/3gruppoTermico/gruppoTermicoIntro/GruppoTermicoIntro";
import Pistone from "./components/3gruppoTermico/pistone/Pistone";
import Fasce from "./components/3gruppoTermico/fasce/Fasce";
import Cilindro from "./components/3gruppoTermico/cilindro/Cilindro";
import Testata from "./components/3gruppoTermico/testata/Testata";
import Candela from "./components/3gruppoTermico/candela/Candela";
import OrganiMeccaniciIntro from "./components/3organiMeccanici/organiMeccaniciIntro/OrganiMeccaniciIntro";
import Biella from "./components/3organiMeccanici/biella/Biella";
import AlberoMotore from "./components/3organiMeccanici/alberoMotore/AlberoMotore";
import CuscinettiDiBanco from "./components/3organiMeccanici/cuscinettiDiBanco/CuscinettiDiBanco";
import Carter from "./components/3organiMeccanici/crater/Carter";
import Olio from "./components/3organiMeccanici/olio/Olio";
import Guarnizioni from "./components/3organiMeccanici/guarnizioni/Guarnizioni";
import TrasmissioneIntro from "./components/3trasmissione/trasmissioneIntro/TrasmissioneIntro";
import Frizione from "./components/3trasmissione/frizione/Frizione";
import Cambio from "./components/3trasmissione/cambio/Cambio";
import Alberi from "./components/3trasmissione/alberi/Alberi";
import Selettore from "./components/3trasmissione/selettore/Selettore";
import Ingranaggi from "./components/3trasmissione/ingranaggi/Ingranaggi";
import ScaricaIntro from "./components/3scarico/scaricoIntro/ScaricaIntro";
import Espansione from "./components/3scarico/espansione/Espansione";
import Terminale from "./components/3scarico/terminale/Terminale";
import ValvolaScarico from "./components/3scarico/valvolaDiScarico/valvolaScarico";
import RaffreddamentoEAccensioneIntro from "./components/3raffreddamentoEAccensione/raffreddamentoEAccensioneIntro/RaffreddamentoEAccensioneIntro";
import Radiatore from "./components/3raffreddamentoEAccensione/radiatore/Radiatore";
import PompaAcqua from "./components/3raffreddamentoEAccensione/pompaAcqua/PompaAcqua";
import CircuitoAcqua from "./components/3raffreddamentoEAccensione/circuitoAcqua/CircuitoAcqua";
import VolanoEStatore from "./components/3raffreddamentoEAccensione/volanoEStatore/VolanoEStatore";
import CDIeBobina from "./components/3raffreddamentoEAccensione/cdiEBobbina/CDIeBobina";
import Avviamento from "./components/3raffreddamentoEAccensione/avviamento/Avviamento";
import TelaioIntro from "./components/4telaio/telaioIntro/TelaioIntro";
import Telaio from "./components/4telaio/telaio/Telaio";
import Materiali from "./components/4telaio/materiali/Materiali";
import Geometire from "./components/4telaio/geometrie/Geometrie";
import Rigidita from "./components/4telaio/rigidita/Rigidita";
import CanottoDiSterzo from "./components/4telaio/canottoDiSterzo/CanottoDiSterzo";
import Forcellone from "./components/4telaio/forcellone/Forcellone";
import Cavalletto from "./components/4telaio/cavalletto/Cavalletto";
import CiclisticaIntro from "./components/5ciclistica/ciclisticaIntro/CiclisticaIntro";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <section id="Homepage">
        <Navbar />
        <Hero onOpenSidebar={() => setSidebarOpen(true)} />
      </section>

      {/* INTRODUZIONE */}
      <section id="Introduzione">
        <Introduzione />
      </section>
      <section id="WhatIsA2TMotorcycle">
        <WhatIsA2TMotorcycle />
      </section>

      <section id="TwoStrokeVsFourStroke">
        <TwoStrokeVsFourStroke />
      </section>

      {/* Ciclo del motore */}
      <section id="The engine cycle">
        <EngineLifeTitle />
      </section>
      <section id="FuelAndMixture">
        <FuelAndMixture />
      </section>
      <section id="AirAndFuel">
        <AirAndFuel />
      </section>
      <section id="FirstCyclePhases">
        <FirstCyclePhases />
      </section>
      <section id="CombustionAndIgnition">
        <CombustionAndIgnition />
      </section>
      <section id="ExhaustSystem">
        <ExhaustSystem />
      </section>

      {/* Motore — Intro capitolo 3 */}
      <section id="MotoreIntro">
        <MotoreIntro />
      </section>

      {/* 3.1 Alimentazione */}
      <section id="AlimentazioneIntro">
        <AlimentazioneIntro />
      </section>

      {/* Componenti del motore */}
      <section id="Carburatore">
        <Carburatore />
      </section>
      <section id="CorpoFarfallato">
        <CorpoFarfallato />
      </section>
      <section id="PompaBenzina">
        <PompaBenzina />
      </section>
      <section id="Miscelatore">
        <Miscelatore />
      </section>
      <section id="PaccoLamellare">
        <PaccoLamellare />
      </section>

      {/* Gruppo termico */}
      <section id="GruppoTermico">
        <GruppoTermicoIntro />
      </section>
      <section id="Pistone">
        <Pistone />
      </section>
      <section id="Fasce">
        <Fasce />
      </section>
      <section id="Cilindro">
        <Cilindro />
      </section>
      {/* testat */}
      <section id="Testata">
        <Testata />
      </section>
      <section id="Candela">
        <Candela />
      </section>

      {/* Organi meccanici */}
      <section id="OrganiMeccanici">
        <OrganiMeccaniciIntro />
      </section>
      <section id="Biella">
        <Biella />
      </section>
      <section id="AlberoMotore">
        <AlberoMotore />
      </section>
      <section id="CuscinettiDiBanco">
        <CuscinettiDiBanco />
      </section>
      <section id="Carter">
        <Carter />
      </section>
      <section id="Olio">
        <Olio />
      </section>
      <section id="Guarnizioni">
        <Guarnizioni />
      </section>

      {/* Trasmissione e cambio */}
      <section id="Trasmissione">
        <TrasmissioneIntro />
      </section>
      <section id="Frizione">
        <Frizione />
      </section>
      <section id="Cambio">
        <Cambio />
      </section>
      <section id="Alberi">
        <Alberi />
      </section>
      <section id="Selettore">
        <Selettore />
      </section>
      <section id="Ingranaggi">
        <Ingranaggi />
      </section>

      {/* Scarico e espansione */}
      <section id="Scarico">
        <ScaricaIntro />
      </section>
      <section id="Espansione">
        <Espansione />
      </section>
      <section id="Terminale">
        <Terminale />
      </section>
      <section id="ValvolaDiScarico">
        <ValvolaScarico />
      </section>

      {/* Raffreddamento e accensione */}
      <section id="Raffreddamento">
        <RaffreddamentoEAccensioneIntro />
      </section>
      <section id="Radiatore">
        <Radiatore />
      </section>
      <section id="PompaAcqua">
        <PompaAcqua />
      </section>
      <section id="CircuitoAcqua">
        <CircuitoAcqua />
      </section>
      <section id="Volano">
        <VolanoEStatore />
      </section>
      <section id="CDI">
        <CDIeBobina />
      </section>
      <section id="Avviamento">
        <Avviamento />
      </section>
  

    {/* Telaio */}

    <section id="Telaio">
        <TelaioIntro />
      </section>
      <section id="Telaio">
        <Telaio />
      </section>
          <section id="Materiali">
        <Materiali />
      </section>
      <section id="Rigidita">
        <Rigidita />
      </section>
      <section id="Geometrie">
        <Geometire />
      </section>
      <section id="CanottoDiSterzo">
        <CanottoDiSterzo/>
      </section>
      <section id="Forcellone">
        <Forcellone />
      </section>
      <section id="Cavalletto">
        <Cavalletto />
      </section>

      {/* Ciclistica */}
      <section id="CiclisticaIntro">
        <CiclisticaIntro />
      </section>








































      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;

{
  /* <section id="Filosofia" type="fs">
        <Parallax type="fs" />
      </section>
      
      <section>Portfolio3</section>
      <section id="Copetenze" type="cp">
        <Parallax type="cp" />
      </section>
      <section>Copetenze</section> */
}
