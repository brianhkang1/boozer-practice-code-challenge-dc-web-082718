import React from 'react'

const CocktailDisplay = (props) => {

  return (
    <div id="cocktail-display">
      <h1>{props.selectedCocktail.name}</h1>
      <h3>{props.selectedCocktail.description}</h3>
      <p>{props.selectedCocktail.instructions}</p>
      <h2>Ingredients</h2>

      {props.selectedCocktail ? props.ingredients.map(ingredient => {
          return <li>{ingredient.name}</li>
        }) : null
      }

    </div>
  )
}

export default CocktailDisplay
