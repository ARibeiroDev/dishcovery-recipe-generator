import { useState, useEffect, useRef } from "react";
import Form from "./Form";
import Ingredients from "./Ingredients";
import MockRecipe from "./MockRecipe";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  const properCase = (ingredient) => {
    return (
      ingredient.charAt(0).toUpperCase() + ingredient.slice(1).toLowerCase()
    );
  };

  return (
    <main role="main" className="w-full p-6 max-w-2xl">
      <Form ingredients={ingredients} setIngredients={setIngredients} />

      {ingredients.length ? (
        <Ingredients
          ingredients={ingredients}
          setRecipe={setRecipe}
          properCase={properCase}
          loading={loading}
          setLoading={setLoading}
        />
      ) : null}

      {loading && (
        <p
          className="mt-6 text-center text-gray-500 animate-pulse"
          aria-live="polite"
        >
          Generating recipe...
        </p>
      )}

      {!loading && recipe && (
        <MockRecipe ingredients={ingredients} properCase={properCase} />
      )}
    </main>
  );
};

export default Main;
