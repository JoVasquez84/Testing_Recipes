import React from 'react';
import { useState } from 'react';


function RecipeItemEntry(props) {
    const [showRecipe, setShowRecipe] = useState(false);

    return (
            <li>
                    <h3 className={props.item.name} onClick={()=>setShowRecipe(!showRecipe)}>
                         {props.item.name}
                    </h3>
                    {
                        showRecipe 
                            ? <p className={props.item.name}>{props.item.instructions}</p> 
                            : null
                    }
            </li>
            )
}

export default RecipeItemEntry;