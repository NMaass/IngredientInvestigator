import React from "react";
import IngredientList from "./IngredientsList";
import { threatLevel } from "./threatLevel";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

const Results = ({ ingredients }) => {
    return (
        <div>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ height: "100%" }}
            >
                <Grid item>
                    <Avatar
                        sx={{
                            bgcolor: threatLevel[ingredients.HazardValue],
                            height: "10rem",
                            width: "10rem",
                        }}
                        sizes="large"
                    >
                        <Typography variant="h1">
                            {ingredients.HazardValue}
                        </Typography>
                    </Avatar>
                </Grid>
                <Grid item>
                    <Typography variant="h2">
                        {ingredients.HazardText}
                    </Typography>
                </Grid>
                <Grid item>
                    <IngredientList ingredients={ingredients.Ingredients} />
                </Grid>
            </Grid>
        </div>
    );
};
export default Results;
