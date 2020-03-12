import React from 'react';

function Recipe(props) {
    
    const recipeState = props.location.state.recipeDetails;
    const name = recipeState.label;
    const calorie = recipeState.calories;
    const img = recipeState.image;
    const ingredientsArr = recipeState.ingredients;
    return (
        <div className="recipes-individual-container">
            <h3>{name}</h3>
            <p>{calorie}</p>
            <img src={img} alt={name}/>
            <ul>
                {ingredientsArr.map(item => <li>{item.text}</li>)}
            </ul>
        </div>
    )
}

export default Recipe;
