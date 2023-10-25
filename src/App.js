import logo from "./logo.svg";
import "./App.css";
import Foto from "./Components/Foto/Foto.js";
import Info from "./Components/Info/Info.js";
import Skills from "./Components/Skills/Skills.js";
import Projects from "./Components/Projects/Projects.js";
import Built from "./Components/Built-Projects/Built";
import Footer from "./Components/Footer/Footer";

import img1 from './images/thumbnail-project-1-small.webp'
import img2 from './images/thumbnail-project-2-small.webp'
import img3 from './images/thumbnail-project-3-small.webp'


function App() {
 
  return (
    <div className="App">
      <Foto />
      <Info />
      <Skills />
      <Projects />
      <Built
        title={"DESIGN PORTFOLIO"}
        description={"HTML CSS"}
        link={"https://m0h1k4.github.io/My-portfolio/"}
        img={img1}
        
      />
      <Built
            title={ "E-LEARNING LANDING PAGE"}
            description={"HTML CSS JAVASCRIPT"}
            link={"https://m0h1k4.github.io/Tic-tac-toe/"}
            img={img2}
      />
      <Built
        title= {"TODO WEB APP"}
        description= {"HTML"}
        link= {"https://m0h1k4.github.io/tip-calculator-project/"}
        img={img3}
      />

      <Footer />
    </div>
  );
}

export default App;
