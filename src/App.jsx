import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { context } from "./context/MouseContextProvider";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { useContext } from "react";

function App() {
  const { setMouseX, setMouseY } = useContext(context);

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };
  return (
    <div onMouseMove={handleMouseMove} className="font-Roboto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
