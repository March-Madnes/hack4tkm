import React from 'react';
import { useState, useCallback, useRef } from 'react';
import Webcam from "react-webcam";
import { useNavigate } from 'react-router-dom';

const videoConstraints = {
    width: '1000',
    height: '500',
    facingMode: "environment"
};

export const ReactCam = () => {
    const navigate = useNavigate();
    const webcamRef = useRef(null); // create a webcam reference
    const [imgSrc, setImgSrc] = useState(null); // initialize it

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        console.log(imageSrc)
      }, [webcamRef]);
    
      const handleSave = () => {
        localStorage.setItem('capturedImage', imgSrc);
        console.log(imgSrc);
        navigate(-1);
      };
    
    return (
        <div className='camera-box h-100'>
        <Webcam  ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}>

    {({ getScreenshot }) => (
        <div className="w-full absolute bottom-6 flex p-4 gap-10 justify-evenly items-end"><>
            {imgSrc && (<div className='flex flex-col items-center gap-1'><img src={imgSrc} alt="webcam" className='cam-show h-[50px] w-[50px] rounded-3xl border object-cover'/><p>Preview</p> </div>)}
            <div className='flex flex-col items-center gap-2'><button className='border-4 border-[#808080] rounded-3xl p-6'
                onClick={capture}
            >
            </button><p>Capture</p></div>
            {imgSrc && (<div className='flex flex-col items-center gap-1'><button className=''
                onClick={handleSave}
            > <img src="./icons/upload-solid.svg" alt="webcam" className='cam-show h-[40px] w-[40px] object-cover'/>
            </button> <p>Upload</p> </div>)}
            </>
      </div>
    )}
  </Webcam>
  </ div>
    )
}