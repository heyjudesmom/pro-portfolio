import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <main className="App">
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
         </ul>
     </nav>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
    </main>
  );
}

export default App;
