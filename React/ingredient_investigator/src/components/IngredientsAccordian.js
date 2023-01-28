import * as React from "react";
import Accordian from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function IngredientsAccordian(){
    return (
        <div>
            <Accordian>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="pael1a-content"
                    id="panel1a-header"
                >
                    <Typography>Peanuts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the description for why peanuts might be dangerous
                    </Typography>
                </AccordionDetails>
            </Accordian>
            <Accordian>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="pael1a-content"
                    id="panel1a-header"
                >
                    <Typography>Almonds</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is the description for why almonds might be dangerous
                    </Typography>
                </AccordionDetails>
            </Accordian>
         
        </div>
    )
}