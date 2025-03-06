import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  );
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <button
        onClick={() => {
          deleteRecipe(recipe.id);
          navigate("/");
        }}
      >
        Delete Recipe
      </button>
    </div>
  );
};

export default RecipeDetails;
