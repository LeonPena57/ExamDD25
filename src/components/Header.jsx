// src/components/Header.jsx
import { Link } from "react-router-dom";
import "/src/Header.css"; // You can create a separate CSS for the header if needed

export default function Header() {
  return (
    <header className="header">
      <h1>Dish Delights</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
