import React from 'react';
import {Link} from 'react-router-dom';

import '../App.css';

function Recipe(props) {
    
    const recipeState = props.location.state.recipeDetails;
    const name = recipeState.label;
    const calorie = recipeState.calories;
    const img = recipeState.image;
    const ingredientsArr = recipeState.ingredients;
    const url = recipeState.url;
    console.log(url)
    const source = recipeState.source;
    return (
        <div className="recipe-individual-container">
            <div className="recipe-card">

                <img src={img} alt={name}/>
                <div className="recipe-individual-details">
                    <h3>{name}</h3>
                    <p><span>Calorie :</span> {calorie}</p>
                    <p>Source: {source}</p>
                </div>
                <ul>
                    <h4>Ingredients</h4>
                    {ingredientsArr.map(item => <li>{item.text}</li>)}
                </ul>
                <button>
                    <Link className="link" to={url}>Get Complete Recipe</Link>
                </button>
            </div>
        </div>
    )
}

export default Recipe;
