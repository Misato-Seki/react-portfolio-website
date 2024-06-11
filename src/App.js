import './App.css';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Welcome } from './components/Welcome';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
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
  );
}

export default App;
