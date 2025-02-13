import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "/src/Favorites.css"; // Import the Favorites.css

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-container">
      <h2>My Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes added yet!</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((fav) => (
            <div key={fav.id} className="favorites-card">
              <img src={fav.image} alt={fav.title} className="favorites-image" />
              <h3>{fav.title}</h3>
              <Link to={`/recipes/${fav.id}`} className="favorites-link">
                View Recipe
              </Link>

              {/* Remove Favorite Button */}
              <button
                onClick={() => removeFavorite(fav.id)}
                className="remove-favorite-btn"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
