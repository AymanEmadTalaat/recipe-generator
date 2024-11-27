function IngredientsContainer({ ingredientsListItems }) {
  return (
    <div className="ingredients-container">
      <h2>Ingredients on hand:</h2>
      <ul>{ingredientsListItems}</ul>
    </div>
  );
}

export default IngredientsContainer;
