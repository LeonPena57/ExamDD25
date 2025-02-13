import "/src/About.css"
export default function About() {
  return (
    <div className="about-container">
      <h2>About DishDelights</h2>
      <p>
        Welcome to <strong>DishDelights</strong>, a platform designed for food lovers to 
        discover, save, and share their favorite recipes with ease. Whether you're 
        a beginner in the kitchen or an experienced chef, our goal is to make 
        cooking more accessible and enjoyable for everyone.
      </p>
      
      <h3>Our Purpose</h3>
      <p>
        DishDelights was created as part of a <strong>school exam project</strong>, aimed at demonstrating 
        modern web development skills using React. This project showcases interactive 
        features such as recipe management, favoriting dishes, and local storage 
        functionality to enhance user experience.
      </p>

      <h3>Features</h3>
      <ul>
        <li>Search and browse a collection of delicious recipes</li>
        <li>Save your favorite dishes for easy access</li>
        <li>Add and manage your own custom recipes</li>
        <li>Simple and intuitive design for seamless navigation</li>
      </ul>

      <h3>Why DishDelights?</h3>
      <p>
        Cooking should be fun and stress-free! With DishDelights, you can explore new recipes, 
        keep track of your personal favorites, and even contribute your own dishes. Whether 
        you're planning meals for the week or just looking for inspiration, DishDelights has you covered.
      </p>
    </div>
  );
}
