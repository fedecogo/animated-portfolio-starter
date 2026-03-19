import FisicaFondamentiMotoreIntro from "../components/8fisicaFondamentiMotore/fisicaFondamentiMotoreIntro/FisicaFondamentiMotoreIntro";
import Cavalli from "../components/8fisicaFondamentiMotore/cavalli/Cavalli";
import Coppia from "../components/8fisicaFondamentiMotore/coppia/Coppia";
import Cilindrata from "../components/8fisicaFondamentiMotore/cilindrata/Cilindrata";
import TemperaturaOttimale from "../components/8fisicaFondamentiMotore/temperaturaOttimale/TemperaturaOttimale";
import RapportoAriaBenzina from "../components/8fisicaFondamentiMotore/rapportoAriaBenzina/RapportoAriaBenzina";
import Detonazione from "../components/8fisicaFondamentiMotore/detonazione/Detonazione";
import MomentoTorcenteRovesciante from "../components/8fisicaFondamentiMotore/momentoTorcenteRovesciante/MomentoTorcenteRovesciante";

const FisicaPagina = () => {
  return (
    <>
      <section id="FisicaFondamentiMotoreIntro">
        <FisicaFondamentiMotoreIntro />
      </section>
      <section id="Cavalli">
        <Cavalli />
      </section>
      <section id="Coppia">
        <Coppia />
      </section>
      <section id="Cilindrata">
        <Cilindrata />
      </section>
      <section id="TemperaturaOttimale">
        <TemperaturaOttimale />
      </section>
      <section id="RapportoAriaBenzina">
        <RapportoAriaBenzina />
      </section>
      <section id="Detonazione">
        <Detonazione />
      </section>
      <section id="MomentoTorcenteRovesciante">
        <MomentoTorcenteRovesciante />
      </section>
    </>
  );
};

export default FisicaPagina;
