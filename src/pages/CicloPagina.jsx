import EngineLifeTitle from "../components/2Ciclo/engineLifeTitle/EngineLifeTitle";
import FuelAndMixture from "../components/2Ciclo/fuelAndMixture/FuelAndMixture";
import AirAndFuel from "../components/2Ciclo/airAndFuel/AirAndFuel";
import FirstCyclePhases from "../components/2Ciclo/firstCyclePhases/FirstCyclePhases";
import CombustionAndIgnition from "../components/2Ciclo/combustionAndIgnition/CombustionAndIgnition";
import ExhaustSystem from "../components/2Ciclo/exhaustSystem/ExhaustSystem";

const CicloPagina = () => {
  return (
    <>
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
    </>
  );
};

export default CicloPagina;
