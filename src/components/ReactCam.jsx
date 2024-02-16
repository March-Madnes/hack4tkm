import React from 'react';
import Webcam from "react-webcam";

const videoConstraints = {
    width: 430,
    height: 900,
    facingMode: "environment"
};

export const ReactCam = () => {
    return (
        <Webcam
            audio={false}
            height={720}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}>

    {({ getScreenshot }) => (
      <button
        onClick={() => {
          const imageSrc = getScreenshot()
            console.log(imageSrc)
        }}
      >
        Capture photo
      </button>
    )}
  </Webcam>
    )
}