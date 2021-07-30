// App.js
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAddRecipeFormDisplayed: false,
      recipes: [],
      newRecipeName: '',
      newRecipeInstructions: ''
    }
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this)
    this.handleRecipeInstructionsChange = this.handleRecipeInstructionsChange.bind(this)
    this.submitRecipe =this.submitRecipe.bind(this)
 
  }
  
  toggleAddRecipeForm = () => {
    this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
  }

  handleRecipeInstructionsChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({newRecipeInstructions: value});
  }

  handleRecipeNameChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({newRecipeName: value});
  }

  
  submitRecipe = (event) => {
    event.preventDefault()
    var recipes_array = this.state.recipes;
    recipes_array.push({
          name: this.state.newRecipeName,
          instructions: this.state.newRecipeInstructions
    })
    this.setState({recipes : recipes_array}) 
  }

  render(){
    const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe}>
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text"
          name="newRecipeName"
          id="newRecipeName"
          onChange={this.handleRecipeNameChange}
          value={this.state.newRecipeName} />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea name="newRecipeInstructions"
          id="newRecipeInstructions"
          placeholder="write recipe instructions here..."
          onChange={this.handleRecipeInstructionsChange}
          value={this.state.newRecipeInstructions} />
          <button type="submit">Submit</button>
        
    </form>
    )

    return (
      <div className="App">
        <h1 className="App-header">My Recipes</h1>
        {
          this.state.isAddRecipeFormDisplayed
          ? addNewRecipeForm
          : <button id="add-recipe" onClick={this.toggleAddRecipeForm.bind(this)}>Add Recipe</button>
        }
        {
           this.state.recipes.length > 0 ? 
          <ul id="foodList">
            {this.state.recipes.map(item  => <li id={item.name} key={item.name}>{item.name}</li>)}
            {/*console.log(this.state.recipes)*/}
            {/* console.log(this.state.recipes[0])}
            {console.log(this.state.recipes[1])} */}
          </ul> :
          <p>There are no recipes to list.</p>
        }
      </div>
    )
  }
}

export default App;