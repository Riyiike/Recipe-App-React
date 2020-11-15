import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "67259000";
  const APP_KEY = "e73763935af70ea5fcfaa91c7675d76b";
  // const Req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, []);

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button classNmae="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} />
      ))}
    </div>
  );
};

export default App;
