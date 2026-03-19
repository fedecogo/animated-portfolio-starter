import ElettronicaIntro from "../components/6elettronica/elettronicaIntro/ElettronicaIntro";
import Accensione from "../components/6elettronica/accensione/Accensione";
import Chiave from "../components/6elettronica/chiave/Chiave";
import Batteria from "../components/6elettronica/batteria/Batteria";
import Cablaggio from "../components/6elettronica/cablaggio/Cablaggio";
import Luci from "../components/6elettronica/luci/Luci";
import Centralina from "../components/6elettronica/centralina/Centraliana";
import Mappe from "../components/6elettronica/mappe/Mappe";
import Strumentazione from "../components/6elettronica/strumentazione/Strumentazione";
import Abs from "../components/6elettronica/abs/Abs";
import RideByWire from "../components/6elettronica/rideByWire/RideByWire";
import Sensori from "../components/6elettronica/sensori/Sensori";

const ElettronicaPagina = () => {
  return (
    <>
      <section id="ElettronicaIntro">
        <ElettronicaIntro />
      </section>
      <section id="Accensione">
        <Accensione />
      </section>
      <section id="Chiave">
        <Chiave />
      </section>
      <section id="Batteria">
        <Batteria />
      </section>
      <section id="Cablaggio">
        <Cablaggio />
      </section>
      <section id="Luci">
        <Luci />
      </section>
      <section id="Strumentazione">
        <Strumentazione />
      </section>
      <section id="Centralina">
        <Centralina />
      </section>
      <section id="Mappe">
        <Mappe />
      </section>
      <section id="Sensori">
        <Sensori />
      </section>
      <section id="RideByWire">
        <RideByWire />
      </section>
      <section id="Abs">
        <Abs />
      </section>
    </>
  );
};

export default ElettronicaPagina;
