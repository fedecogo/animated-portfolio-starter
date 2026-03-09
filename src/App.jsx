import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Introduzione from "./components/introduzione/Introduzione";
import WhatIsA2TMotorcycle from "./components/whatIsA2TMotorcycle/WhatIsA2TMotorcycle";
import TwoStrokeVsFourStroke from "./components/twoStrokeVsFourStroke/TwoStrokeVsFourStroke";
import TwoStrokeVsFourStroke2 from "./components/twoStrokeVsFourStroke2/TwoStrokeVsFourStroke2";

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

      
      <section id="TwoStrokeVsFourStroke2">
        <TwoStrokeVsFourStroke2 />
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
