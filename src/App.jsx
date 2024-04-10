import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
      </section>
      <section id="Filosofia" type="fs">
        <Parallax type="fs" />
      </section>
      <section>Filosofia</section>
      <section>Portfolio3</section>
      <section id="Copetenze" type="cp">
        <Parallax type="cp" />
      </section>
      <section>Copetenze</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
