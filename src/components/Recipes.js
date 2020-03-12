import React from 'react'
import {Link} from 'react-router-dom';
export default function Recipes({recipeDetails}) {


    const name = recipeDetails.label;
    const img = recipeDetails.image;
    //to remove spaces in the name so as to add it to the url in Link
    const urlName =  name.split(/\s/).join('');
   

    return (        
        <div className="recipe-container">
            <div className="recipe-details">
                <h3>{name}</h3>
            </div>
            <img src={img} alt={name}/>
            <button>
                <Link 
                    className="link"
                    to={{
                        pathname: `/recipe/${urlName}`,
                        state: {recipeDetails}
                    }}
                >
                    View Details
                </Link>
            </button>
        </div>
    )
}
