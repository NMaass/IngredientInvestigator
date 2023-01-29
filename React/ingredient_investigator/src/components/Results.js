import React from "react";
import IngredientList from "./IngredientsList";

export const threatLevel = {
    1:"Green",
    2:"LightGreen",
    3:"Orange",
    4:"DarkOrange",
    5:"Red",
}

const Results = ({ingredients}) => {
    return (
        <div>
            <h1 className="hazardLevel" style={{color: `${threatLevel[ingredients.HazardValue]}`}}>
            {ingredients.HazardValue}
            </h1>
            <br/>
            {ingredients.HazardText}
          
            <IngredientList ingredients={ingredients.Ingredients}/>
        </div>
    );
}
export default Results;