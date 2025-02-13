import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "/src/RecipeDetail.css";
import carbonaraImage from "../images/carbonara.jpg";
import chickenCurryImage from "../images/chicken-curry.jpg";
import chocolateCakeImage from "../images/chocolate-cake.jpg";

// Default recipes data
const defaultRecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: carbonaraImage,
    description: "A classic Italian pasta dish with creamy sauce.",
    ingredients: ["Pasta", "Eggs", "Parmesan", "Pancetta", "Black Pepper"],
    instructions: "1. Cook pasta. 2. Fry pancetta. 3. Mix eggs and cheese. 4. Combine all with pasta.",
  },
  {
    id: 2,
    title: "Chicken Curry",
    image: chickenCurryImage,
    description: "A spicy and flavorful chicken curry.",
    ingredients: ["Chicken", "Onion", "Garlic", "Curry Powder", "Coconut Milk"],
    instructions: "1. Sauté onions and garlic. 2. Add chicken. 3. Stir in curry powder and coconut milk. 4. Simmer until cooked.",
  },
  {
    id: 3,
    title: "Chocolate Cake",
    image: chocolateCakeImage,
    description: "A rich and moist chocolate cake.",
    ingredients: ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Butter", "Baking Powder"],
    instructions: "1. Mix dry ingredients. 2. Add wet ingredients. 3. Bake at 180°C for 30 minutes.",
  },
];

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (id) {
      const storedRecipes = JSON.parse(localStorage.getItem("userRecipes")) || [];
      const allRecipes = [...defaultRecipes, ...storedRecipes];
      const foundRecipe = allRecipes.find((r) => r.id === parseInt(id));

      if (foundRecipe) {
        setRecipe(foundRecipe);
      } else {
        setRecipe(null); // Recipe not found
      }
    }
  }, [id]);

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className="recipe-detail-container">
      <div className="recipe-header">
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        <div className="recipe-details">
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {recipe.instructions && (
        <>
          <h3>Instructions:</h3>
          <ol>
            {recipe.instructions.split(" .").map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}
