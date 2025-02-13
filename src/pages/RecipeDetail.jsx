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
    ingredients: ["1 boneless, skinless chicken breast (about 8 ounces)", "Kosher salt", "1/2 teaspoon coarsely ground black pepper, plus more for seasoning and garnish", "3 ounces Parmesan cheese"
      , "1 (4-ounce) package diced pancetta", "1 tablespoon olive oil", "12 ounces dried spaghetti", "4 large eggs", "Fresh parsley leaves, for garnish (optional)"],
    instructions: "1) Cut 1 boneless, skinless chicken breast into 1/2-inch thick strips and season all over with salt and pepper. Finely grate 3 ounces Parmesan cheese into a medium bowl (about 1 1/2 cups). Transfer 1/2 cup to a small bowl and reserve as garnish. 2) Bring a large pot of salted water to a boil. Meanwhile, heat 1 tablespoon olive oil over medium heat in a large skillet until shimmering. Add the pancetta and cook, stirring occasionally, until just starting to brown, 1 to 2 minutes. Add the chicken and cook, stirring occasionally, until the chicken is cooked through and the pancetta is crisp, 4 to 5 minutes. Remove the pan from the heat. 3) Add 12 ounces dried spaghetti to the boiling water and cook until al dente, about 10 minutes or according to package instructions. Meanwhile, place 4 large eggs and 1/2 teaspoon coarsely ground black pepper in the medium bowl of Parmesan and whisk well to combine. Coarsely chop a handful of parsley leaves for garnish if desired. 4) When the pasta is ready, reserve 1/2 cup of the pasta water. Drain the pasta, then immediately add the pasta to the skillet off the heat. Pour the egg mixture over the pasta and use tongs or a fork to vigorously stir and toss to combine, adding 1 tablespoon of the reserved pasta water at a time as needed to evenly coat the pasta and chicken in a creamy sauce. (You’ll probably use only about 1 to 2 tablespoons of the pasta water.) 5) Garnish with the parsley if using. Serve immediately with the reserved Parmesan and a few coarse grinds of black pepper.",
  },
  {
    id: 2,
    title: "Chicken Curry",
    image: chickenCurryImage,
    description: "A spicy and flavorful chicken curry.",
    ingredients: ["1 1/2 tsp ground coriander", "1 tsp ground cumin", "1/2 tsp turmeric", "1/2 tsp fennel seeds", "1/2 tsp ground cinnamon", "1/2 tsp ground black pepper", "1/4 tsp ground mustard", "1/4 tsp ground cloves"],
    instructions: "1. In a small mixing bowl whisk together all of the spices in the spice blend, set aside. 2.Heat olive oil in a 12-inch non-stick skillet over medium-high heat. 3. Add in onion and saute until slightly golden brown, about 4 - 6 minutes. 4. Add in garlic and ginger, saute 30 seconds more then add in spice blend and saute 30 seconds. 5. Pour in chicken broth and tomatoes and bring to a boil, then reduce heat to medium-low, cover and simmer 5 minutes. 6. Pour mixture into a blender then cover with lid and remove lid insert, cover opening with a clean folded kitchen rag. 7. Blend mixture until well pureed and smooth then return to skillet and heat skillet over medium-high heat. 8. Season sauce with salt and cayenne pepper (start with about 1/2 tsp salt and a few dashes cayenne then add more to taste) then add in chicken. 9. Bring to a simmer then reduce heat to medium-low, cover skillet with lid and simmer until chicken has cooked through, stirring occasionally, about 8 -  12 minutes.10. During the last minute of cooking stir in the cornstarch and water slurry if desired, to thicken sauce slightly (or if needed thin with a little chicken broth). 11. Stir in cream then serve warm with cilantro over basmati rice. ",
  },
  {
    id: 3,
    title: "Chocolate Cake",
    image: chocolateCakeImage,
    description: "A rich and moist chocolate cake.",
    ingredients: ["2 cups white sugar", "1 ¾ cups all-purpose flour", "¾ cup unsweetened cocoa powder", "1 ½ teaspoons baking powder", "1 ½ teaspoons baking soda", "1 teaspoon salt", "2 large eggs", "1 cup milk", "½ cup vegetable oil", "2 teaspoons vanilla extract", "1 cup boiling water"],
    instructions: "1) Gather all ingredients. Preheat the oven to 350 degrees F (175 degrees C). Grease and flour two 9-inch round baking pans. 2) Stir sugar, flour, cocoa, baking powder, baking soda, and salt together in a large bowl. 3) Add eggs, milk, oil and vanilla; mix for 2 minutes on medium speed with an electric mixer. 4) Stir in the boiling water. The batter will be thin. 5) Pour evenly into the prepared pans. 6) Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 30 to 35 minutes. Cool in the pans for 10 minutes, then transfer to a wire rack to cool completely. 7) Eat Cake. ",
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
