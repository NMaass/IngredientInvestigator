import React from "react";
import IngredientsAccordian from "./IngredientsAccordian";

const IngredientList = ({ ingredients }) => {
    console.log("ingredients object", ingredients);
    return (
        <div>
            {Object.keys(ingredients).map(function (key, index) {
                return (
                    <IngredientsAccordian
                        id={index}
                        name={key}
                        hazard={ingredients[key].HazardLevel}
                        description={ingredients[key].Description}
                    />
                );
            })}
        </div>
    );
};
export default IngredientList;
