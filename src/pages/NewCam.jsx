import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const NewCam = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const sendImageToServer = async () => {
    if (imgSrc) {
      // Convert base64 image to a file
      const fetchResponse = await fetch(imgSrc);
      const blob = await fetchResponse.blob();
      const file = new File([blob], "webcam-image.jpg", { type: "image/jpeg" });

      // Create FormData
      const formData = new FormData();
      formData.append('file', file); // Append the file to the form data

      // Send the image to the server using fetch API
      fetch('https://i-moisture-backend.vercel.app/api/predict', {
        // mode: 'no-cors',
        method: 'POST',
        body: formData,
      })
      .then(response => response.json()) // Assuming the server responds with JSON
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
      />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && (
        <>
          <button onClick={sendImageToServer}>Send Image to Server</button>
          <img src={imgSrc} alt="captured" />
        </>
      )}
    </>
  );
};

export default NewCam;
