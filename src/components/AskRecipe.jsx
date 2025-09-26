import Button from "./Button";

const AskRecipe = ({
  ingredients,
  setRecipe,
  properCase,
  loading,
  setLoading,
}) => {
  const getRecipe = () => {
    setLoading(true);
    setRecipe("");

    const ingredientsList = properCase(
      ingredients.map((item) => `- ${item}`).join("\n")
    );

    setTimeout(() => {
      setLoading(false);
      setRecipe(ingredientsList);
    }, 2000);
  };

  return (
    <section className="flex flex-col gap-4 sm:flex-row justify-between items-center bg-[#CCC5B9] dark:bg-[#403D39] dark:text-[#FFFCF2] p-4 rounded text-base">
      <section className="text-center sm:text-left">
        <h3 className="font-bold">Ready for a recipe?</h3>
        <p className="text-sm">
          Generate a recipe from your list of ingredients.
        </p>
      </section>
      <Button onClick={getRecipe} textContent="Get recipe" disabled={loading} />
    </section>
  );
};

export default AskRecipe;
