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
