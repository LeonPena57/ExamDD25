// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import Favorites from "./pages/Favorites.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import BackButton from "./components/BackButton.jsx"; // Import the BackButton component
import Header from "./components/Header.jsx"; // Import Header component
import Footer from "./components/Footer.jsx"; // Import Footer component
import "./App.css";

export default function App() {
  const [userRecipes, setUserRecipes] = useState(
    JSON.parse(localStorage.getItem("userRecipes")) || []
  );

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...userRecipes, newRecipe];
    setUserRecipes(updatedRecipes);
    localStorage.setItem("userRecipes", JSON.stringify(updatedRecipes)); // Save to localStorage
  };

  return (
    <Router basename="/ExamDD25">
      <div className="app-container">
        {/* Use the Header component */}
        <Header />
        
        <main>
          {/* Add BackButton here to make it appear on all pages */}
          <BackButton />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes recipes={userRecipes} />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Use the Footer component */}
        <Footer />
      </div>
    </Router>
  );
}
