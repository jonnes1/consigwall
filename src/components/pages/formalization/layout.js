import TeggeLogo     from '../../../images/tegge.png';
import Panel         from 'rsuite/Panel';
import ArrowBackIcon from '@rsuite/icons/ArowBack';
import ShieldIcon    from '@rsuite/icons/Shield';

export default function Layout({ children, currentStep, moveStep }) {

    return (
        <div className='w-full flex justify-center'>
            <div className="w-3/4 lg:w-1/4">
                <div className='mt-10 mb-5'>
                    {currentStep > 0 && <ArrowBackIcon className='text-xl cursor-pointer' onClick={() => moveStep(currentStep - 1)} />}
                </div>
                <Panel bordered className="flex flex-col items-center bg-white">
                    <div className='flex justify-center'>
                        <img src={TeggeLogo} alt="Logo" className='w-48 mb-5' />
                    </div>
                    {children}
                </Panel>
                <div className='mt-3 mb-5 flex items-center justify-center'>
                    <ShieldIcon className='text-xl'/>&nbsp;Ambiente seguro
                </div>
            </div>
        </div>
    );
}