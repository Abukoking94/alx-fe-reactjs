import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }
    if (ingredients.split("\n").length < 2) {
      setError("Please provide at least two ingredients.");
      return;
    }
    setError("");
    console.log({ title, ingredients, steps });
  };

  return (
    <div className="container max-w-lg p-4 mx-auto">
      <h2 className="mb-4 text-2xl font-bold text-center">Add a New Recipe</h2>
      {error && <p className="mb-2 text-red-500">{error}</p>}
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
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Preparation Steps</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
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
