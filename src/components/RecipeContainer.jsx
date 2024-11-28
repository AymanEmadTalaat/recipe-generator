function RecipeContainer({ onClick, ref }) {
  return (
    <div className="get-a-recipe" ref={ref}>
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
