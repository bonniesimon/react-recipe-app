import React, {useState} from 'react';
import './App.css';

import Recipes from "./components/Recipes";


function App() {
  const API_ID = '9e8e09ff';
  const API_KEY = 'f8ffa2feddd833ba1300f7f503a01c5b';


  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  const getRecipe = async (searchItem) => {
    const res =  await fetch(`https://api.edamam.com/search?q=${searchItem}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await res.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const getSearchText = e => {
    const searchInput = e.target.value;
    setSearch(searchInput);
  }

  const searchSubmit = e => {
    e.preventDefault();
    console.log('Search Initiated');
    getRecipe(search);
  }
  
  return (
    <div className="App">
      <form onSubmit={searchSubmit} className="form-container">
        <input type="text" value={search} onChange={getSearchText} />
        <button>Get Recipe</button>
      </form>
      <div className="results-container">
        {recipes.map((recipe, index) => (
          <Recipes key={index} name={recipe.recipe.label} calorie={recipe.recipe.calories} img={recipe.recipe.image} />
        ))}
      </div>

    </div>
  );
}

export default App;
