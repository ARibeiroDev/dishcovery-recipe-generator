// src/components/MockRecipe.jsx
import Markdown from "react-markdown";

const MockRecipe = ({ ingredients, properCase }) => {
  // Format ingredients into a readable list
  const ingredientsList = ingredients
    .map((item) => `- ${properCase(item)}`)
    .join("\n");

  const recipeMarkdown = `
# Classic Tomato Pasta

## Ingredients:
${ingredientsList}

## Instructions:
1. Boil the pasta.
2. Make a sauce with tomatoes and garlic.
3. Mix pasta and sauce.
4. Serve hot and enjoy!
`.trim();

  return (
    <section
      className="mt-6 p-6 rounded bg-[#FFFCF2] dark:bg-[#252422] text-[#252422] dark:text-[#FFFCF2]"
      aria-live="polite"
    >
      <h2 className="text-2xl font-bold text-[#EB5E28] mb-4">
        Dishcovery Recommends:
      </h2>

      <Markdown
        components={{
          h2: ({ children, ...props }) => (
            <h2
              className="text-xl font-semibold text-[#EB5E28] mt-4 mb-2"
              {...props}
            >
              {children}
            </h2>
          ),
          ul: ({ children, ...props }) => (
            <ul className="list-disc pl-6 space-y-1" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="list-decimal pl-6 space-y-1" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="ml-2" {...props}>
              {children}
            </li>
          ),
        }}
      >
        {recipeMarkdown}
      </Markdown>
    </section>
  );
};

export default MockRecipe;
