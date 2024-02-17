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
        <div className="w-full absolute bottom-6 flex justify-between p-3"><>
            {imgSrc && (<img src={imgSrc} alt="webcam" className='cam-show h-[100px] w-[100px] rounded-3xl border'/>)}
            <button className='border-8 border-green rounded-3xl p-5 mx-auto'
                onClick={capture}
            > <svg class="w-10 h-10 text-grey-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"/>
            </svg>
            </button>
            {imgSrc && (<button className='border-8 border-green rounded-3xl p-5'
                onClick={handleSave}
            > <svg class="w-10 h-10 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/>
        </svg>
            </button>)}
            </>
      </div>
    )}
  </Webcam>
  </ div>
    )
}