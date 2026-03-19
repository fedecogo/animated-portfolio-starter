import TelaioIntro from "../components/4telaio/telaioIntro/TelaioIntro";
import Telaio from "../components/4telaio/telaio/Telaio";
import Materiali from "../components/4telaio/materiali/Materiali";
import Geometire from "../components/4telaio/geometrie/Geometrie";
import Rigidita from "../components/4telaio/rigidita/Rigidita";
import CanottoDiSterzo from "../components/4telaio/canottoDiSterzo/CanottoDiSterzo";
import Forcellone from "../components/4telaio/forcellone/Forcellone";
import Cavalletto from "../components/4telaio/cavalletto/Cavalletto";

const TelaioPagina = () => {
  return (
    <>
      <section id="TelaioIntro">
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
        <CanottoDiSterzo />
      </section>
      <section id="Forcellone">
        <Forcellone />
      </section>
      <section id="Cavalletto">
        <Cavalletto />
      </section>
    </>
  );
};

export default TelaioPagina;
