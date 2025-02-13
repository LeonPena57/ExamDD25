import { useState } from "react";
import { Link } from "react-router-dom";
import "/src/Header.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>Dish Delights</h1>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/recipes" onClick={() => setMenuOpen(false)}>Recipes</Link>
        <Link to="/favorites" onClick={() => setMenuOpen(false)}>Favorites</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}
