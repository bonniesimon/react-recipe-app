import React from 'react'

export default function Recipes({name, calorie, img}) {

    return (        
        <div className="recipe-container">
            <div className="recipe-details">
                <h3>{name}</h3>
                <p>{calorie} </p>
            </div>
            <img src={img} alt={name}/>
        </div>
    )
}
