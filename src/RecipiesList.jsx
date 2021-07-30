import React from 'react';
import { useState } from 'react';
import RecipeItemEntry from './RecipeItemEntry'


function RecipesList(props) {
    const [showRecipe, setShowRecipe] = useState(false);

    return (
        <ul id="foodList">
            {props.recipes.map(item  =>  <RecipeItemEntry item={item}/>        
             
              )}
          </ul>
    )
}

export default RecipesList;