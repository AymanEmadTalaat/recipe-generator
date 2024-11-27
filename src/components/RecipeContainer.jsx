function RecipeContainer({ onClick }) {
  return (
    <div className="get-a-recipe">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients.</p>
      </div>

      <button onClick={onClick} className="getRecipe-btn" type="submit">
        Get a recipe
      </button>
    </div>
  );
}

export default RecipeContainer;
