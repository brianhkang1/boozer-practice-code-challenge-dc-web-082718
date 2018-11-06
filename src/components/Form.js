import React, { Component } from 'react'
import Proportion from './Proportion'

class Form extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      description: "",
      instructions: "",
      ingredientName: "",
      ingredientQuantity: "",
      proportionCount: [1]
    }
  }

  addProportion = () => {
    this.setState({
      proportionCount: [...this.state.proportionCount, 1]
    })
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newCocktail = {
      id: this.props.allCocktails.length + 1,
      name: this.state.name,
      description: this.state.description,
      instructions: this.state.instructions
    }
    this.props.addNewCocktail(newCocktail)
  }


  render(){
    return (
      <form onChange={this.handleInputChange} onSubmit={this.handleSubmit}>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input name="name" type="text" />

        <p>Description</p>
        <input name="description" type="text"/>

        <p>Instructions</p>
        <input name="instructions" type="text"/>

        <h3>Proportions</h3>
        {this.state.proportionCount.map(proportion => {
          return <Proportion />
        })
        }


        <p><button onClick={this.addProportion}> + </button></p>

        <input type="submit"/>
      </form>
    )
  }
}

export default Form
