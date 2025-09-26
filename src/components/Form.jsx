import Button from "./Button";
import { useState } from "react";

const Form = ({ ingredients, setIngredients }) => {
  const [error, setError] = useState("");

  const addIngredient = (ingredient) => {
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };

  const getInputData = (formData) => {
    const inputData = formData.get("ingredient");
    if (!inputData || inputData.trim() === "") {
      setError("You must enter an ingredient!");
      return;
    }
    return inputData;
  };

  const sanitize = (inputData) => {
    return inputData
      .replace(/[<>"'()]/g, "")
      .replace(/[^\w\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    /*  
        1. Strip dangerous characters
        2. Replace everything else non-word with space
        3. Collapse extra spaces
        4. Remove edges
        5. Sets the word to lower case for consistency  
      */
  };

  const handleFormData = (formData) => {
    const inputData = getInputData(formData);
    if (!inputData) return;

    const sanitizedData = sanitize(inputData);

    if (ingredients.includes(sanitizedData)) {
      setError("Ingredient already on the list.");
      return;
    }

    addIngredient(sanitizedData);
    setError("");
  };

  return (
    <>
      <form
        action={handleFormData}
        className="w-full flex justify-center items-center gap-3"
      >
        <input
          className="min-w-52 flex-1 rounded-md bg-[#CCC5B9] text-[#252422] text-base p-3 outline-none"
          type="text"
          autoFocus
          required
          aria-label="Add ingredient"
          placeholder="e.g. Pasta"
          name="ingredient"
        />

        <Button
          textContent={
            <>
              + <span className="hidden ml-1 sm:inline">Add Ingredient</span>
            </>
          }
          ariaLabel="Add ingredient to the list"
        />
      </form>

      {error && (
        <p role="alert" className="mt-2 text-red-500 text-lg">
          {error}
        </p>
      )}
    </>
  );
};
export default Form;
