import IngredientsList from "./IngredientsList";
import AskRecipe from "./AskRecipe";

const Ingredients = ({
  ingredients,
  setRecipe,
  properCase,
  loading,
  setLoading,
}) => {
  return (
    <article className="dark:text-[#CCC5B9] mt-4" aria-live="polite">
      <h2 className="mt-6 mb-2 text-2xl font-light">Your ingredients:</h2>

      <IngredientsList ingredients={ingredients} properCase={properCase} />

      {ingredients.length > 3 && (
        <AskRecipe
          ingredients={ingredients}
          setRecipe={setRecipe}
          properCase={properCase}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </article>
  );
};

export default Ingredients;
