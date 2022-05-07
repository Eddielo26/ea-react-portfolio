import { Routes, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import './App.css';

function App() {
  return (
    <Router>

      <Home/>

      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
