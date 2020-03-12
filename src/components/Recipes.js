import React from 'react'
import {Link} from 'react-router-dom';
export default function Recipes({name, calorie, img}) {

    //to remove spaces in the name so as to add it to the url in Link
    const urlName =  name.split(/\s/).join('');
   

    return (        
        <div className="recipe-container">
            <div className="recipe-details">
                <h3>{name}</h3>
                <p>{calorie} </p>
            </div>
            <img src={img} alt={name}/>
            <button>
                <Link 
                    className="link"
                    to={{
                        pathname: `/recipe/${urlName}`,
                        state: {name: name, calorie: calorie, img: img}
                    }}
                >
                    View Details
                </Link>
            </button>
        </div>
    )
}
