import "../styles/MainContent.css";
import { useRef, useState, useEffect } from "react";
import IngredientsContainer from "./IngredientsContainer.jsx";
import RecipeContainer from "./RecipeContainer.jsx";
import RecipeSection from "./RecipeSection.jsx";
// import { getRecipeFromMistral } from "../ai.js";
import LoadingSpinner from "./LoadingSpinner.jsx";

function Main() {
  const [main, setMain] = useState({
    ingredients: [],
    recipe: false,
    spinner: <LoadingSpinner />,
  });

  const recipeContainer = useRef(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setMain({
        ...main,
        spinner: "",
      });
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [main]);

  useEffect(() => {
    if (main.recipe !== "" && recipeContainer.current !== null) {
      recipeContainer.current.scrollIntoView();
    }
  }, [main.recipe]);

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

  // async function handleRecipeShown() {
  //   const recipeFromMistral = await getRecipeFromMistral(main.ingredients);

  //   setMain({
  //     ...main,
  //     recipe: recipeFromMistral,
  //   });
  // }

  function handleRecipeShown() {
    setMain({
      ...main,
      recipe: !main.recipe,
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
          {main.ingredients.length > 2 && (
            <RecipeContainer
              ref={recipeContainer}
              onClick={handleRecipeShown}
            />
          )}
        </>
      )}

      {main.recipe && <RecipeSection />}
      {main.recipe && main.spinner}
    </>
  );
}

export default Main;
