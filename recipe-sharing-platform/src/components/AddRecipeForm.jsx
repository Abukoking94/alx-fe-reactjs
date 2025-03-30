import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!title.trim()) errors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      errors.ingredients = "Ingredients list is required.";
    } else if (ingredients.split("\n").length < 2) {
      errors.ingredients = "Please provide at least two ingredients.";
    }
    if (!steps.trim()) errors.steps = "Preparation steps are required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log({ title, ingredients, steps });
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="container max-w-lg p-4 mx-auto">
      <h2 className="mb-4 text-2xl font-bold text-center">Add a New Recipe</h2>
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error.title && <p className="text-sm text-red-500">{error.title}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">
            Ingredients (one per line)
          </label>
          <textarea
            className="w-full p-2 border rounded"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {error.ingredients && (
            <p className="text-sm text-red-500">{error.ingredients}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Preparation Steps</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {error.steps && <p className="text-sm text-red-500">{error.steps}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
