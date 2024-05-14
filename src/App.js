import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
