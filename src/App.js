import logo from './logo.svg';
import './App.css';
import Foto from './Components/Foto/Foto.js';
import Info from './Components/Info/Info.js';
import Skills from './Components/Skills/Skills.js';
import Projects from './Components/Projects/Projects.js';
import Built from  './Components/Built-Projects/Built'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Foto/>
     <Info/>
     <Skills/>
     <Projects/>
     <Built/>
     <Built/>
     <Built/>
     <Built/>
     <Footer/>
    </div>
  );
}

export default App;
