import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/variables.css';
import './css/index.css';
import Navbar from './components/molecules/Navbar';
import Button from './components/atoms/Button';

const Showcase = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '80vh',
    gap: '20px' 
  }}>
    <h1 style={{ color: 'white' }}>Components</h1>
    <p style={{ color: 'white' }}>Button:</p>
    
    <Button onClick={() => console.log("Click!")}>
      Join Now
    </Button>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar /> 

      <main>
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/discover" element={<div style={{color: 'white', padding: '50px'}}>Página Discover</div>} />
          <Route path="/join" element={<div style={{color: 'white', padding: '50px'}}>Página Join</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;