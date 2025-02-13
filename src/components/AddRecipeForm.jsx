import { useState, useEffect } from "react";
import "/src/AddRecipeForm.css/"

export default function AddRecipeForm({ addRecipe, editRecipe, editingRecipe, handleCloseForm }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // Prefill the form if editing an existing recipe
  useEffect(() => {
    if (editingRecipe) {
      setTitle(editingRecipe.title);
      setImage(editingRecipe.image);
      setDescription(editingRecipe.description);
      setIngredients(editingRecipe.ingredients.join(", "));
      setInstructions(editingRecipe.instructions);
    }
  }, [editingRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: editingRecipe ? editingRecipe.id : Date.now(),
      title,
      image,
      description,
      ingredients: ingredients.split(",").map((ingredient) => ingredient.trim()),
      instructions,
    };

    if (editingRecipe) {
      editRecipe(newRecipe);
    } else {
      addRecipe(newRecipe);
    }

    // Reset the form after submitting
    setTitle("");
    setImage("");
    setDescription("");
    setIngredients("");
    setInstructions("");

    handleCloseForm(); // Close the form after saving
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma separated)"
      />
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
      />
      <div className="form-buttons">
        <button className="save-btn" type="submit">
          {editingRecipe ? "Save Changes" : "Add Recipe"}
        </button>
        <button type="button" className="close-btn" onClick={handleCloseForm}>
          X
        </button>
      </div>
    </form>
  );
}
