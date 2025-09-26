const IngredientsList = ({ ingredients, properCase }) => {
  const ingredientsListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{properCase(ingredient)}</li>;
  });

  return (
    <ul className="pl-8 mb-12 text-lg font-light list-disc">
      {ingredientsListItems}
    </ul>
  );
};

export default IngredientsList;
