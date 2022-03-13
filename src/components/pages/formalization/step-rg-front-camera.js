import React         from 'react';
import Webcam        from "react-webcam";
import IconButton    from 'rsuite/IconButton';
import RgMold        from '../../../images/rg_mould.png';
import { FaCamera}   from 'react-icons/fa';

export default function StepRegFrontCamera({ data, set, next, onCameraError }) {

    const webcamRef = React.useRef(null);

    const getPhoto = React.useCallback(() => {
        set({...data, doc_front: webcamRef.current.getScreenshot()});
        next();
    }, [webcamRef]);

    return (
        <div className='h-full flex justify-center items-center'>
            <Webcam 
                videoConstraints={{facingMode: 'environment', width: 1280, height: window.innerHeight }} 
                audio={false} 
                screenshotFormat="image/jpeg"
                ref={webcamRef}
                onUserMediaError={onCameraError}>
            </Webcam>
            <div className="ml-5 mr-5 text-center absolute">
                <img src={RgMold} alt="Molde RG" className='h-3/5' />
                <IconButton onClick={getPhoto} appearance="primary" circle icon={<FaCamera />} className="mt-5" size='lg'></IconButton>
            </div>
        </div>
    );
}