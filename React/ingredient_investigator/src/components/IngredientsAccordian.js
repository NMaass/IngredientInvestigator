import * as React from "react";
import Accordian from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { threatLevel } from "./threatLevel";
import CircleIcon from "@mui/icons-material/Circle";
import Grid from "@mui/material/Grid";

const IngredientsAccordian = ({ name, hazard, description, hazardColors }) => {
    console.log("accordion", name, hazard, description);
    return (
        <div>
            <Accordian>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="pael1a-content"
                    id="panel1aheader"
                >
                    <Typography>
                        <Grid container direction="row">
                            <Grid item>
                                <CircleIcon
                                    style={{ color: `${threatLevel[hazard]}` }}
                                />
                            </Grid>
                            <Grid item>{name}</Grid>
                        </Grid>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        HazardLevel level: {hazard}
                        <br />
                        {description}
                    </Typography>
                </AccordionDetails>
            </Accordian>
        </div>
    );
};

export default IngredientsAccordian;
