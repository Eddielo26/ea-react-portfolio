import { Routes, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project';
import './App.css';

function App() {
  return (
    <Router>

      <Home/>

      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
    </Router>
  );
}

export default App;
