import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  render(){
    return (
      <div id="cocktail-list">
      {this.props.allCocktails.map(cocktail => <Cocktail key={cocktail.id} cocktail={cocktail} handleCocktailClick={this.props.handleCocktailClick}/>)}
      </div>
    )
  }
}

export default CocktailsList
