import React from "react";
import IngredientList from "./IngredientsList";

const Results = ({ingredients}) => {
    return (
        <div>
            Results
            <h1>
                {ingredients.HazardValue}
                <br/>
                {ingredients.HazardText}
            </h1>
            <IngredientList ingredients={ingredients.Ingredients}/>
        </div>
    );
}
export default Results;