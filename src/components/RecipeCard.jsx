import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RecipeCard({ recipe, setEditingRecipe, isCustom, deleteRecipe }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.some((fav) => fav.id === recipe.id));
  }, [recipe.id]);

  const handleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = storedFavorites.filter((fav) => fav.id !== recipe.id);
    } else {
      updatedFavorites = [...storedFavorites, recipe];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div style={{ position: "relative", border: "1px solid #ddd", borderRadius: "10px", padding: "15px", textAlign: "center", backgroundColor: "#fafafa" }}>
      {/* Recipe Image */}
      <img src={recipe.image} alt={recipe.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} />

      {/* Recipe Title */}
      <h3>{recipe.title}</h3>

      {/* View Recipe Button */}
      <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>
        View Recipe
      </Link>

      {/* Favorite Button */}
      <button
        onClick={handleFavorite}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          fontSize: "20px",
          color: isFavorite ? "#FFD700" : "#ccc",
          cursor: "pointer",
        }}
      >
        ★
      </button>

      {/* Conditionally Render Edit Button for Custom Recipes Only */}
      {isCustom && (
        <>
          <button
            onClick={() => setEditingRecipe(recipe)} // Set recipe to edit
            style={{
              position: "absolute",
              bottom: "10px",
              right: "50px",
              background: "none",
              border: "none",
              fontSize: "16px",
              color: "#007bff",
              cursor: "pointer",
            }}
          >
            Edit
          </button>

          {/* Delete Button for Custom Recipes Only */}
          <button
            onClick={() => deleteRecipe(recipe.id)} // Delete the recipe
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "none",
              border: "none",
              fontSize: "20px",
              color: "#ff4d4d", // Red color for delete
              cursor: "pointer",
            }}
          >
            ✖
          </button>
        </>
      )}
    </div>
  );
}
