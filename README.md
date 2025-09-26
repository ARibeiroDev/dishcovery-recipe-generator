# 🍝 Dishcovery – AI Recipe Generator (Mock Version)

> A React app that takes a list of ingredients and generates a recipe recommendation.  
> **Currently using mock data due to API key restrictions.**

---

## 🧠 What It Does

Dishcovery helps you discover what you can cook with what you already have.

You:

- Type ingredients one by one (e.g., "pasta", "tomato", "garlic")
- Once you’ve added at least 4, a recipe is generated (mock version for now)
- The app scrolls smoothly to the recipe recommendation

---

## 🧪 Tech Stack

- **React** (Functional components & hooks)
- **Tailwind CSS** (Custom integration)
- **Vite** (for development and build)
- **Markdown Renderer** (`react-markdown`) for formatting recipes

> ❌ **AI API integration (Hugging Face)** – temporarily removed due to lack of backend for securing the API key.

---

## 👨‍🏫 Based On a React Course (with Improvements)

This project is based on a course taught by [Bob Ziroll](https://scrimba.com/learn/learnreact), where he builds an AI recipe generator using React.

However, several improvements were made to make the project cleaner and more robust:

### ✅ Custom Enhancements

- **Input Sanitization**: Inputs are cleaned to avoid dangerous characters or weird spacing
- **Form Validation**: Prevents blank inputs and duplicate ingredients
- **User Feedback**: Shows error messages to guide the user
- **Tailwind CSS**: Fully re-styled with custom utility classes
- **Modularization**: Components split for clarity and reusability

These changes are not part of the original course and were added independently to improve UX and code quality.

---

## 📸 Demo

🌐 [Live Demo on Render](https://dishcovery-recipe-generator.onrender.com) 
🔧 _Mock recipe only (due to API key restrictions)_

---

## 🔐 Why Mock Data?

The original version uses an **AI API** (Hugging Face model) to generate unique recipes from your ingredients.

However:

- There's no backend to protect the API key
- API access must remain private to avoid misuse
- Frontend-only apps can’t safely store sensitive keys

**Until the backend is added**, the app dynamically displays a mock recipe using your input — which keeps the core experience functional.

---

## 📁 Project Structure (Simplified)

```
src/
├── components/
│   ├── Header.jsx
│   ├── Main.jsx
│   ├── Form.jsx
│   ├── Ingredients.jsx
│   ├── IngredientsList.jsx
│   ├── AskRecipe.jsx
│   ├── MockRecipe.jsx
│   └── Button.jsx
├── App.jsx
└── main.jsx
```

---

## 📌 Project Status

✅ **Mock Version Complete**  
🧪 Fully functional with dynamic input, error handling, and Tailwind styling  
🔒 AI integration temporarily removed due to API key restrictions

🔧 **In Progress:**

- Learning backend (Node/Express) for secure API key handling
- Exploring TypeScript integration for better DX and type safety

---

## 🙋 Why This Project?

Dishcovery started as a course-based project and evolved into a **personal playground** to improve:

- Form handling and validation
- Modular component design
- Tailwind styling from scratch
- Accessibility best practices
- Clean code organization and developer UX

It reflects **real-world thinking** around state management, UI/UX design, and feature trade-offs.

---

## 🧑‍💻 Author

**[ARibeiroDev](https://github.com/ARibeiroDev)**  
Frontend Developer | Always Learning | Always Improving

---

## 📜 License

[MIT](LICENSE)

---
