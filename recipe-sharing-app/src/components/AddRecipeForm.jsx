import React from "react";
import { useState } from "react";
import { useRecipeStore } from "../store/RecipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, SetDescription] = useState("");

  const handlesSubmit = (e) => {
    e.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    SetDescription("");
  };

  return (
    <div>
      <form onSubmit={handlesSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />

        <textarea
          value={description}
          onChange={(e) => SetDescription(e.target.value)}
          placeholder="Description"
        ></textarea>

        <button type="submit"> Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
