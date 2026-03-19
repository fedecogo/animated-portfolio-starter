import CarrozzeriaIntro from "../components/7carrozzeria/carrozzeriaIntro/CarrozzeriaIntro";
import Serbatorio from "../components/7carrozzeria/serbatorio/Serbatorio";
import Plastiche from "../components/7carrozzeria/plastiche/Plastiche";
import Sella from "../components/7carrozzeria/sella/Sella";
import Codone from "../components/7carrozzeria/codone/Codone";
import Aerodinamica from "../components/7carrozzeria/aerodinamica/Aerodinamica";

const CarrozzeriaPagina = () => {
  return (
    <>
      <section id="CarrozzeriaIntro">
        <CarrozzeriaIntro />
      </section>
      <section id="Serbatorio">
        <Serbatorio />
      </section>
      <section id="Plastiche">
        <Plastiche />
      </section>
      <section id="Sella">
        <Sella />
      </section>
      <section id="Codone">
        <Codone />
      </section>
      <section id="Aerodinamica">
        <Aerodinamica />
      </section>
    </>
  );
};

export default CarrozzeriaPagina;
