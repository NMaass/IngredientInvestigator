import React from "react";
import Camera from "./Camera";
import IngredientsAccordian from "./IngredientsAccordian";
import NextButton from "./NextButton";

const Launch = ({setLaunch}) => {
    return(
        <div>
            <Camera/>
            <NextButton setLaunch={setLaunch}/>
        </div>
    )
}
export default Launch;