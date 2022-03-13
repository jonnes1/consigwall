import React         from 'react';
import Webcam        from "react-webcam";
import IconButton    from 'rsuite/IconButton';
import FaceMould     from '../../../images/face_mould.png';
import { FaCamera}   from 'react-icons/fa';

export default function StepSelfieCamera({ data, set, next, onCameraError }) {

    const webcamRef = React.useRef(null);

    const getPhoto = React.useCallback(() => {
        set({...data, selfie: webcamRef.current.getScreenshot()});
        next();
    }, [webcamRef]);

    return (
        <div className='h-full flex justify-center items-center'>
            <Webcam 
                videoConstraints={{facingMode: 'user', width: 1280, height: window.innerHeight }} 
                audio={false} 
                screenshotFormat="image/jpeg"
                ref={webcamRef}
                onUserMediaError={onCameraError}>
            </Webcam>
            <div className="ml-5 mr-5 text-center absolute">
                <img src={FaceMould} alt="Molde do rosto" className='h-3/5' />
                <IconButton onClick={getPhoto} appearance="primary" circle icon={<FaCamera />} className="mt-5" size='lg'></IconButton>
            </div>
        </div>
    );
}