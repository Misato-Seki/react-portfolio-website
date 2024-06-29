// import './App.css';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Welcome } from './components/Welcome';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Hero />
        <Welcome />
        <Skills />
        <Projects />
        <AboutMe />
        <Contact />
        <Footer />        
      </div>
    </BrowserRouter>
  );
}

export default App;
