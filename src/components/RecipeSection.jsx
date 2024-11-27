import ReactMarkdown from "react-markdown";

function RecipeSection({ recipe }) {
  return (
    <section className="recipe-section">
      <h3>Chef Claude Recommends:</h3>
      <article className="suggested-recipe-container" aria-live="polite">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </article>
    </section>
  );
}

export default RecipeSection;
