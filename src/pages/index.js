import React                  from 'react';
import Layout                 from '../components/pages/formalization/layout';
import StepHello              from '../components/pages/formalization/step-hello';
import StepPrivacy            from '../components/pages/formalization/step-privacy';
import StepDocOptions         from '../components/pages/formalization/step-doc-options';
import StepRgFrontDescription from '../components/pages/formalization/step-rg-front-description';
import StepCameraUnavaible    from '../components/pages/formalization/step-camera-unavaible';
import StepCnhDescription     from '../components/pages/formalization/step-cnh-description';
import StepRegFrontCamera     from '../components/pages/formalization/step-rg-front-camera';
import StepRgFrontInvalid     from '../components/pages/formalization/step-rg-front-invalid';
import StepSelfieDescription  from '../components/pages/formalization/step-selfie-description';
import StepSelfieCamera       from '../components/pages/formalization/step-selfie-camera';

export default function Step() {

    const [currentStep, setCurrentStep]                 = React.useState(0);
    const [cameraHasPermission, setCamerahasPermission] = React.useState(true);
    const [data, setData]                               = React.useState({
        doc: 'rg',
        read_accept_terms: false,
        read_accept_policy: false,
        authorization: false,
        doc_front: '',
        selfie: ''
    });

    if (!cameraHasPermission) {
        return (
            <Layout currentStep={0} moveStep={setCurrentStep}> 
                <StepCameraUnavaible tryAgain={() => {
                    setCamerahasPermission(true);
                    setCurrentStep(3);
                }} />
            </Layout>
        );
    }

    if (data.doc === 'rg' && currentStep === 4) {
        return <StepRegFrontCamera data={data} set={setData} next={() => setCurrentStep(6)} onCameraError={() => setCamerahasPermission(false)}  />;
    }

    if (currentStep === 7) {
        return <StepSelfieCamera data={data} set={setData} next={() => setCurrentStep(8)} onCameraError={() => setCamerahasPermission(false)} />;
    }

    return (
        <Layout currentStep={currentStep} moveStep={setCurrentStep}>
            { currentStep === 0 && <StepHello customerName="Fulano da Silva" next={() => setCurrentStep(1)} />}
            { currentStep === 1 && <StepPrivacy data={data} set={setData} companyName="Tegge" urlCompanyTerms="https://tegge.com.br" next={() => setCurrentStep(2)} />}
            { currentStep === 2 && <StepDocOptions next={() => setCurrentStep(3)} data={data} set={setData} />}
            { currentStep === 3 && (
                <>
                    {data.doc === 'rg' ? 
                        <StepRgFrontDescription next={() => setCurrentStep(4)} /> : 
                        <StepCnhDescription next={() => setCurrentStep(4)} />
                    }
                </>  
            )}
            { currentStep === 5 && <StepRgFrontInvalid next={() => setCurrentStep(4)} />}
            { currentStep === 6 && <StepSelfieDescription next={() => setCurrentStep(7)} />}
        </Layout>
    );
}