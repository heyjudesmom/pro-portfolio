import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import ProjectPage from './Pages/ProjectPage/ProjectPage';

function App() {
  return (
    <main className="App">
      <nav>
        <div className="nav-wrapper">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work Samples</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/work' element={<ProjectPage />} />
      </Routes>
    </main>
  );
}

export default App;
