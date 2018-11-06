import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {
  constructor(){
    super()
    this.state = {
      allCocktails: [],
      allProportions: [],
      allIngredients: [],
      selectedCocktail: []
    }
  }

  componentDidMount(){
    this.fetchAllCocktails()
    this.fetchAllProportions()
    this.fetchAllIngredients()
  }

  fetchAllCocktails = () => {
    fetch(`https://react-boozer-backend.herokuapp.com/api/v1/cocktails`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        allCocktails: data
      })
    })
  }

  fetchAllIngredients = () => {
    fetch(`https://react-boozer-backend.herokuapp.com/api/v1/ingredients`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        allIngredients: data
      })
    })
  }

  fetchAllProportions = () => {
    fetch(`https://react-boozer-backend.herokuapp.com/api/v1/proportions`)
      .then(res => res.json())
      .then(data => this.setState({
        allProportions: data
      }))
  }

  filterbySelectedCocktail = cocktailObj => {
    if (cocktailObj) {
      let filteredProportions = this.state.allProportions.filter(proportion => {
        return proportion.cocktail_id === cocktailObj.id;
      });

      let filteredIngredients = filteredProportions.map(proportion => {
        return this.state.allIngredients.find(ingredient => {
          return ingredient.id === proportion.ingredient_id;
        });
      });
      // console.log("filtered Proportions: ", filteredProportions);
      // console.log("filteredIngredients: ", filteredIngredients);

      return {
        proportions: filteredProportions,
        ingredients: filteredIngredients
      };
    } else {
      return null;
    }
  };

  handleCocktailClick = (cocktail) => {
    this.setState({
      selectedCocktail: cocktail
    })
  }

  addNewCocktail = (newCocktail) => {
    this.setState({
      allCocktails: [...this.state.allCocktails, newCocktail]
    })
  }

  render(){
    return (
      <div className="container">
        <CocktailsList allCocktails={this.state.allCocktails} handleCocktailClick={this.handleCocktailClick} />
        <CocktailDisplay
          selectedCocktail={this.state.selectedCocktail}
          ingredients={
            this.filterbySelectedCocktail(this.state.selectedCocktail)
              .ingredients
          }
          proportions={
            this.filterbySelectedCocktail(this.state.selectedCocktail)
              .proportions
          }
        />
        <Form allCocktails={this.state.allCocktails} addNewCocktail={this.addNewCocktail}/>
      </div>
    )
  }
}

export default CocktailsContainer
