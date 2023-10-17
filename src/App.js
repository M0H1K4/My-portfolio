import logo from "./logo.svg";
import "./App.css";
import Foto from "./Components/Foto/Foto.js";
import Info from "./Components/Info/Info.js";
import Skills from "./Components/Skills/Skills.js";
import Projects from "./Components/Projects/Projects.js";
import Built from "./Components/Built-Projects/Built";
import Footer from "./Components/Footer/Footer";

import img1 from "./images/thumbnail-project-1-small.webp";
import img2 from "./images/thumbnail-project-2-small.webp";
import img3 from "./images/thumbnail-project-3-small.webp";

function App() {
  const items = [
    {
      id: 1,
      title: "DESIGN PORTFOLIO",
      description: "HTML CSS" ,
    },
    {
      id: 2,
      title: "E-LEARNING LANDING PAGE",
      description: "HTML CSS JAVASCRIPT",
    },
    {
      id: 3,
      title: "TODO WEB APP",
      description: "HTML",
    },
  ];

  return (
    <div className="App">
      <Foto />
      <Info />
      <Skills />
      <Projects />
      <Built title={items[0].title} description={items[0].description} />
      <Built title={items[1].title} />
      <Built title={items[2].title} />

      <Footer />
    </div>
  );
}

export default App;
