import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer';

import './App.css'
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import About from './components/aboutMe/Aboutme';
import Skills from './components/skills/Skills';
function App() {

  return (
    <>
     <Header />
     <Home />
     <About />
     <Skills />
     <Hero />
     <Resume />
     <Contact />
     <Footer/>
    </>
  )
}

export default App;
