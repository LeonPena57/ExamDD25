import "/src/Home.css"
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to DishDelights</h2>
      <p>
        DishDelights is your go-to place for discovering and creating mouth-watering recipes.
        Whether you're a beginner in the kitchen or a seasoned chef, our easy-to-follow recipes
        help you cook with confidence. Save your favorite dishes, explore new flavors, and share
        your culinary creations with friends and family.
      </p>
      <Link to="/recipes">
        <button className="cta-button">Explore Recipes</button>
      </Link>
    </div>
  );
}
