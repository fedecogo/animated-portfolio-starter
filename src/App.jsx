import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Introduzione from "./components/1intro/introduzione/Introduzione";
import WhatIsA2TMotorcycle from "./components/1intro/whatIsA2TMotorcycle/WhatIsA2TMotorcycle";
import TwoStrokeVsFourStroke from "./components/1intro/twoStrokeVsFourStroke/TwoStrokeVsFourStroke";
import EngineLifeTitle from "./components/2Ciclo/EngineLifeTitle/EngineLifeTitle";
import AirAndFuel from "./components/2Ciclo/airAndFuel/AirAndFuel";
import FuelAndMixture from "./components/2Ciclo/fuelAndMixture/FuelAndMixture";
import FirstCyclePhases from "./components/2Ciclo/firstCyclePhases/FirstCyclePhases";
import CombustionAndIgnition from "./components/2Ciclo/combustionAndIgnition/CombustionAndIgnition";
import ExhaustSystem from "./components/2Ciclo/exhaustSystem/ExhaustSystem";



const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
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

      {/* ciclo del motore */}
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

     




      {/* <section id="Filosofia" type="fs">
        <Parallax type="fs" />
      </section>
      
      <section>Portfolio3</section>
      <section id="Copetenze" type="cp">
        <Parallax type="cp" />
      </section>
      <section>Copetenze</section> */}
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
