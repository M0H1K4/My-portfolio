import logo from "./logo.svg";
import "./App.css";
import Foto from "./Components/Foto/Foto.js";
import Info from "./Components/Info/Info.js";
import Skills from "./Components/Skills/Skills.js";
import Projects from "./Components/Projects/Projects.js";
import Built from "./Components/Built-Projects/Built";
import Footer from "./Components/Footer/Footer";

import img1 from './images/essentials.png'
import img2 from './images/tic-tac-toe.png'
import img3 from './images/thumbnail-project-3-small.webp'


function App() {
 
  return (
    <div className="App">
      <Foto />
      <Info />
      <Skills />
      <Projects />
      <Built
        title={"React Essentials"}
        description={"React.js"}
        link={"https://m0h1k4.github.io/React-Essentials/"}
        img={img1}
        
      />
      <Built
            title={ "Tic-tac-toe"}
            description={"React + vite"}
            link={"https://m0h1k4.github.io/React-vite--tic-tac-toe/"}
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
