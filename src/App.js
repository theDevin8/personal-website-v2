import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import Cursor from './components/cursor';

function App() {
  return (
    <div className="App">
      <Cursor />
      <BrowserRouter>
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
