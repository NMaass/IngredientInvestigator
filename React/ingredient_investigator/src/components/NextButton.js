import React from "react";
import { Button } from "@mui/material";

const NextButton = ({setLaunch}) => {
    return(
        <Button onClick={()=>{setLaunch(false)}}>Next</Button>
    )
}
export default NextButton;