import React from 'react'

export default function Recipe({name, calorie, img}) {
    return (        
        <div>
            <h3>{name}</h3>
            <p>{calorie} </p>
            <img src={img} alt={name}/>
        </div>
    )
}
