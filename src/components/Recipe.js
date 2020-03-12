import React from 'react';

function Recipe(props) {
    
    const recipeDetails = props.location.state;
    return (
        <div>
            <h3>{recipeDetails.name}</h3>
            <p>{recipeDetails.calorie}</p>
            <img src={recipeDetails.img} alt={recipeDetails.name}/>
        </div>
    )
}

export default Recipe;
