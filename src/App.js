import logo from "./logo.svg";
import "./App.css";
import Foto from "./Components/Foto/Foto.js";
import Info from "./Components/Info/Info.js";
import Skills from "./Components/Skills/Skills.js";
import Projects from "./Components/Projects/Projects.js";
import Built from "./Components/Built-Projects/Built";
import Footer from "./Components/Footer/Footer";

function App() {
  const items = [
    {
      id: 1,
      title: "DESIGN PORTFOLIO",
      description: "HTML CSS",
      link: "https://m0h1k4.github.io/My-portfolio/",
    },
    {
      id: 2,
      title: "E-LEARNING LANDING PAGE",
      description: "HTML CSS JAVASCRIPT",
      link: "https://m0h1k4.github.io/Tic-tac-toe/",
    },
    {
      id: 3,
      title: "TODO WEB APP",
      description: "HTML",
      link: "https://m0h1k4.github.io/tip-calculator-project/",
    },
  ];

  return (
    <div className="App">
      <Foto />
      <Info />
      <Skills />
      <Projects />
      <Built
        title={items[0].title}
        description={items[0].description}
        link={items[0].link}
        image={items[0].imageUrl}
      />
      <Built
        title={items[1].title}
        description={items[1].description}
        link={items[1].link}
        image={items[1].imageUrl}
      />
      <Built
        title={items[2].title}
        link={items[2].link}
        description={items[2].description}
      />

      <Footer />
    </div>
  );
}

export default App;
