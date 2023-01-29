import React from "react";
import IngredientList from "./IngredientsList";
import { threatLevel } from "./threatLevel";
import Typography from "@mui/material/Typography";

const Results = ({ ingredients }) => {
    return (
        <div>
            <Typography
                variant="h1"
                style={{ color: `${threatLevel[ingredients.HazardValue]}` }}
            >
                {ingredients.HazardValue}
                <br />
                {ingredients.HazardText}
            </Typography>

            <IngredientList ingredients={ingredients.Ingredients} />
        </div>
    );
};
export default Results;
