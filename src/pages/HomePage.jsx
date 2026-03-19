import { useOutletContext } from "react-router-dom";
import Hero from "../components/hero/Hero";
import Introduzione from "../components/1intro/introduzione/Introduzione";
import WhatIsA2TMotorcycle from "../components/1intro/whatIsA2TMotorcycle/WhatIsA2TMotorcycle";
import TwoStrokeVsFourStroke from "../components/1intro/twoStrokeVsFourStroke/TwoStrokeVsFourStroke";
import ProjectOutro from "../components/projectOutro/ProjectOutro";

const HomePage = () => {
  const [, setSidebarOpen] = useOutletContext();

  return (
    <>
      <section id="Homepage">
        <Hero onOpenSidebar={() => setSidebarOpen(true)} />
      </section>

      <section id="Introduzione">
        <Introduzione />
      </section>
      <section id="WhatIsA2TMotorcycle">
        <WhatIsA2TMotorcycle />
      </section>
      <section id="TwoStrokeVsFourStroke">
        <TwoStrokeVsFourStroke />
      </section>

      <section id="ProjectOutro">
        <ProjectOutro />
      </section>
    </>
  );
};

export default HomePage;
