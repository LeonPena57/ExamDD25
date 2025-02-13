import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import Favorites from "./pages/Favorites.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import BackButton from "./components/BackButton.jsx"; 
import Header from "./components/Header.jsx"; 
import Footer from "./components/Footer.jsx"; 
import "./App.css";

// Check if the app is running on GitHub Pages
const isGitHubPages = window.location.hostname.includes("github.io");

export default function App() {
  const [userRecipes, setUserRecipes] = useState(
    JSON.parse(localStorage.getItem("userRecipes")) || []
  );

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipes = [...userRecipes, newRecipe];
    setUserRecipes(updatedRecipes);
    localStorage.setItem("userRecipes", JSON.stringify(updatedRecipes)); 
  };

  // Use HashRouter for GitHub Pages, BrowserRouter for local development
  const Router = isGitHubPages ? HashRouter : BrowserRouter;

  return (
    <Router basename="/ExamDD25/">
      <div className="app-container">
        <Header />
        <main>
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
        <Footer />
      </div>
    </Router>
  );
}
