import logo from './logo.svg';
import './App.css';
import Foto from './Components/Foto/Foto.js';
import Info from './Components/Info/Info.js';
import Skills from './Components/Skills/Skills.js';
import Projects from './Components/Projects/Projects.js';


function App() {
  return (
    <div className="App">
     <Foto/>
     <Info/>
     <Skills/>
     <Projects/>
    </div>
  );
}

export default App;
