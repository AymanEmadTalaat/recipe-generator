import "../styles/MainContent.css";
import { useState } from "react";
import IngredientsContainer from "./IngredientsContainer.jsx";
import RecipeContainer from "./RecipeContainer.jsx";
import RecipeSection from "./RecipeSection.jsx";
import { getRecipeFromMistral } from "../ai.js";

function Main() {
  const [main, setMain] = useState({
    ingredients: [],
    recipe: "",
  });

  const ingredientsListItems = main.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleIngredients(formData) {
    const newIngredient = formData.get("ingredient");

    setMain({
      ...main,
      ingredients: [...main.ingredients, newIngredient],
    });
  }

  async function handleRecipeShown() {
    const recipeFromMistral = await getRecipeFromMistral(main.ingredients);

    setMain({
      ...main,
      recipe: recipeFromMistral,
    });
  }

  return (
    <>
      <form action={handleIngredients}>
        <input
          className="form-input"
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="ingredient"
          required
          autoComplete="off"
        />

        <button className="add-ingredient-btn" type="submit">
          + Add ingredient
        </button>
      </form>

      {main.ingredients.length > 0 && (
        <>
          <IngredientsContainer ingredientsListItems={ingredientsListItems} />
          {main.ingredients.length > 3 && (
            <RecipeContainer onClick={handleRecipeShown} />
          )}
        </>
      )}

      {main.recipe && <RecipeSection recipe={main.recipe} />}
    </>
  );
}

export default Main;
