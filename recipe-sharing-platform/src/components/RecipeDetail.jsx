import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <div className="text-xl font-semibold text-center">Loading...</div>;
  }

  return (
    <div className="container p-4 mx-auto">
      <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="object-cover w-full mb-4 rounded-md h-60"
        />
        <h1 className="mb-4 text-3xl font-bold">{recipe.title}</h1>
        <p className="mb-4 text-gray-600">{recipe.summary}</p>
        <h2 className="mb-2 text-2xl font-semibold">Ingredients</h2>
        <ul className="mb-4 list-disc list-inside">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="mb-2 text-2xl font-semibold">Instructions</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {recipe.instructions}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;
