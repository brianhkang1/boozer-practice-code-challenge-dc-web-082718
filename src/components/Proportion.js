import React from 'react'

class Proportion extends React.Component{
  render(){
    return (
      <div className="container">
      <p>Ingredient Name<br/>
      <input name="ingredientName" type="text"/>
      </p>

      <p>Quantity<br/>
        <input name="ingredientQuantity" type="text"/>
      </p>
      </div>
    )
  }
}

export default Proportion
