import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app-bg">
      <Router basename="/my_portifolio">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/certificates" element={<Certificates />} />
          <Route exact path="/contact" element={<Footer />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
