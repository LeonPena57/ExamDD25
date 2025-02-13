import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import AddRecipeForm from "../components/AddRecipeForm"; // Import AddRecipeForm
import BackButton from "../components/BackButton"; // Import BackButton
import "/src/Recipes.css";
import carbonaraImage from "../images/carbonara.jpg";
import chickenCurryImage from "../images/chicken-curry.jpg";
import chocolateCakeImage from "../images/chocolate-cake.jpg";
import { useLocation } from "react-router-dom";

// Default recipes data
const defaultRecipes = [
  { id: 1, title: "Spaghetti Carbonara", image: carbonaraImage, description: "A classic Italian pasta dish with creamy sauce.", ingredients: ["Pasta", "Eggs", "Parmesan", "Pancetta", "Black Pepper"], instructions: "1. Cook pasta. 2. Fry pancetta. 3. Mix eggs and cheese. 4. Combine all with pasta." },
  { id: 2, title: "Chicken Curry", image: chickenCurryImage, description: "A spicy and flavorful chicken curry.", ingredients: ["Chicken", "Onion", "Garlic", "Curry Powder", "Coconut Milk"], instructions: "1. Sauté onions and garlic. 2. Add chicken. 3. Stir in curry powder and coconut milk. 4. Simmer until cooked." },
  { id: 3, title: "Chocolate Cake", image: chocolateCakeImage, description: "A rich and moist chocolate cake.", ingredients: ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Butter", "Baking Powder"], instructions: "1. Mix dry ingredients. 2. Add wet ingredients. 3. Bake at 180°C for 30 minutes." }
];

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [editingRecipe, setEditingRecipe] = useState(null); // State for editing recipe
  const [isEditing, setIsEditing] = useState(false); // Track if we are editing or not
  const location = useLocation(); // Detects page changes

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
    if (recipes.length === 0) {
      setRecipes([...defaultRecipes, ...storedRecipes]);
    }
  }, [location]);

  const addRecipe = (newRecipe) => {
    const storedRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
    const updatedRecipes = [...storedRecipes, newRecipe];
    localStorage.setItem("userRecipes", JSON.stringify(updatedRecipes));
    setRecipes([...defaultRecipes, ...updatedRecipes]);
  };

  const editRecipe = (updatedRecipe) => {
    const updatedRecipes = recipes.map((recipe) => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setRecipes(updatedRecipes);
    localStorage.setItem("userRecipes", JSON.stringify(updatedRecipes));
  };

  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem("userRecipes", JSON.stringify(updatedRecipes));
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  const isDefaultRecipe = (id) => {
    return defaultRecipes.some((recipe) => recipe.id === id);
  };

  const handleEditClick = (recipe) => {
    setEditingRecipe(recipe);
    setShowForm(true); // Open form when edit button is clicked
    setIsEditing(true); // Set editing mode to true
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form without saving
    setEditingRecipe(null); // Clear any selected recipe
    setIsEditing(false); // Reset editing mode
  };

  const toggleEdit = (recipe) => {
    if (isEditing && editingRecipe.id === recipe.id) {
      handleCloseForm(); // Close form without saving changes
    } else {
      setEditingRecipe(recipe);
      setShowForm(true); // Open form for editing
      setIsEditing(true); // Set editing mode to true
    }
  };

  return (
    <div className="recipes-container">
      <h2>Recipes</h2>

      {/* Back Button */}
      <BackButton />

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Recipe Grid */}
      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <RecipeCard 
              recipe={recipe} 
              setEditingRecipe={handleEditClick} 
              isCustom={!isDefaultRecipe(recipe.id)} // Only custom recipes should be editable
              isFormOpen={showForm} // Pass form visibility status
              deleteRecipe={deleteRecipe} // Pass deleteRecipe function
            />
          </div>
        ))}
      </div>

      {/* Add Recipe Form Button */}
      {!showForm && (
        <button 
          className="add-recipe-btn" 
          onClick={() => { 
            setShowForm(!showForm); 
            setEditingRecipe(null); // Reset editing
          }} 
          aria-label="Add Recipe">
          <span className="plus-icon">{showForm ? "X" : "+"}</span>
        </button>
      )}

      {/* Add or Edit Recipe Form */}
      {showForm && (
        <AddRecipeForm 
          addRecipe={addRecipe} 
          editRecipe={editRecipe} 
          editingRecipe={editingRecipe} // Pass current recipe to be edited
          handleCloseForm={handleCloseForm} // Function to close the form
        />
      )}
    </div>
  );
}
