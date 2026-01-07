import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="SoundWave Logo" />
          <span>Soundwave</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/join">Join</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;