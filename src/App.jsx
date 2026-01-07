import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Estilos
import './css/variables.css';
import './css/index.css';

// Componentes Molecules
import Navbar from './components/molecules/Navbar';
import Footer from './components/molecules/Footer';

// Componentes Pages
import Home from './pages/Home';
import Discover from './pages/Features'; 
import Join from './pages/Join';     

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;