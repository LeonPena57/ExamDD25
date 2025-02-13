import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>My Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes added yet!</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {favorites.map((fav) => (
            <div key={fav.id} style={{
              position: "relative",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              backgroundColor: "#fafafa"
            }}>
              <img src={fav.image} alt={fav.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
              <h3>{fav.title}</h3>
              <Link to={`/recipes/${fav.id}`} style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>View Recipe</Link>

              {/* Remove Favorite Button */}
              <button 
                onClick={() => removeFavorite(fav.id)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none",
                  fontSize: "20px",
                  color: "#e74c3c",
                  cursor: "pointer"
                }}
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
