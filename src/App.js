import React, {useState, useEffect} from 'react';
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
  

  /*
  *componentDidMount
  First time the page is loaded, the state recipes is taken from localStorage.
  */
  useEffect(() => {
    const string = localStorage.getItem('recipes');
    const json = JSON.parse(string);
    setRecipes(json);
  },[])


  /**
   * *componentDidUpdate
   * sets the recipes to localStorage each time recipes changes. Also it's a good practice to check length of recipes before 
   * pushing it to localStorage
   */
  useEffect(() => {
    //let stateRecipe = recipes;
    //if(stateRecipe.length > 0){
      const recipesString = JSON.stringify(recipes);
      localStorage.setItem("recipes", recipesString);
    //}
  }, [recipes]);

  

  return (
    <div className="App">
      <form onSubmit={searchSubmit} className="form-container">
        <input type="text" value={search} onChange={getSearchText} />
        <button>Get Recipe</button>
      </form>
      <div className="results-container">
        {recipes.map((recipe, index) => (
          <Recipes key={index} recipeDetails={recipe.recipe} />
        ))}
      </div>

    </div>
  );
}

export default App;
