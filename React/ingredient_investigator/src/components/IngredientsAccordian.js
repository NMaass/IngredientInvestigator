import * as React from "react";
import Accordian from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const IngredientsAccordian = ({ingredient}) => {
    return (
        <div>
            <Accordian>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="pael1a-content"
                    id="panel1aheader"
                >
                    <Typography>{ingredient.HazardLe} {ingredient.IngredientName}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {ingredient.Description}
                    </Typography>
                </AccordionDetails>
            </Accordian>
        </div>
    )
}

export default IngredientsAccordian;