import * as React from "react";
import Accordian from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const IngredientsAccordian = ({name, hazard, description}) => {
    console.log("accordion",name,hazard,description)
    return (
        <div>
            <Accordian>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="pael1a-content"
                    id="panel1aheader"
                >
                    <Typography>{hazard} {name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {description}
                    </Typography>
                </AccordionDetails>
            </Accordian>
        </div>
    )
}

export default IngredientsAccordian;