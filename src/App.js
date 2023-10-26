import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import Cursor from './components/cursor';
import Nav from './components/Nav';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
      const checkIsMobile = () => {
          const width = window.innerWidth;
          setIsMobile(width >= 320 && width <= 428);

      };
      window.addEventListener('resize', checkIsMobile);
      checkIsMobile();
      return () => {
          window.removeEventListener('resize', checkIsMobile);
      }
  }, []);

  return (
    <div className="App">
      <Cursor />
      <BrowserRouter>
        {isMobile && <Nav/>}
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/projects' element = {<Projects />} />
          <Route path='/contact' element = {<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
