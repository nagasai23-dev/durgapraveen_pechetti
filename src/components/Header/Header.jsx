import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="logo">
        <Link to="/">Durga Praveen Pechetti</Link>
      </div>
      
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link></li>
          <li><Link to="/store" onClick={() => setMenuOpen(false)}>Editor's Store</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <button onClick={toggleDarkMode} className="theme-toggle">
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;