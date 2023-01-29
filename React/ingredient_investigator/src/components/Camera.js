import * as React from "react";
import { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import IconButton from '@mui/material/IconButton';
const Camera = ({setLaunch, setImage}) =>{
    const cameraRef = useRef(null);
    const capture = useCallback(()=>{
        const imgSrc = cameraRef.current.getScreenshot();
        setImage(imgSrc);
        setLaunch(false);
    },
    [cameraRef]    
    );

return(
<div>
    <Webcam
        screenshotFormat="image/jpeg"
        audio={false}
        ref={cameraRef}
        style={{ 
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "50%",
            marginLeft: "-50%",
            objectFit: "cover",
            objectPosition: "center",
    }}
    />
    <IconButton 
        onClick={capture}
        aria-label="take picture"
        style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translate(-50%, -50%)',
    }}>
        <CircleOutlinedIcon className="svg_icons" />
    </IconButton>
</div>

)
};

export default Camera;