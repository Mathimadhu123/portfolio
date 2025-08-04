import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/aboutMe/Aboutme';
import Skills from './components/skills/Skills';
import ProjectList from './components/projects/Projects';
import Hero from './components/hero/Hero';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <ProjectList />
              <Skills />
              <Hero />
              <Resume />
              <Contact />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
