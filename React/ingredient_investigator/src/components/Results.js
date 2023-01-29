import React from "react";
import IngredientList from "./IngredientsList";
import { threatLevel } from "./threatLevel";

const Results = ({ ingredients }) => {
    return (
        <div>
            <h1 style={{ color: `${threatLevel[ingredients.HazardValue]}` }}>
                {ingredients.HazardValue}
            </h1>
            <br />
            {ingredients.HazardText}

            <IngredientList ingredients={ingredients.Ingredients} />
        </div>
    );
};
export default Results;
