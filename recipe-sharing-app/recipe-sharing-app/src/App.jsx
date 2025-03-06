import { useState } from "react";
import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

const App = () => {
  return (
    <div>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
