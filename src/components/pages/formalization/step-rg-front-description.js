import RGFrente      from '../../../images/rg_frente.png';
import Panel         from 'rsuite/Panel';
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import MobileIcon    from '@rsuite/icons/Mobile';
import VisibleIcon   from '@rsuite/icons/Visible';
import Button        from 'rsuite/Button';

export default function StepRgFrontDescription({ next }) {
    return (
        <>
            <div className="text-left text-blue-500 text-xl">Foto da frente do RG</div>
            <div className='flex justify-center mt-5 mb-5'>
                <img src={RGFrente} alt="RG Frente" />
            </div>
            <Panel bordered>
                <UserBadgeIcon className='text-xl' /> Fotografe a parte do documento onde aparece o seu rosto
            </Panel>
            <Panel bordered className='mt-3 mb-3'>
                <MobileIcon className='text-xl' /> A foto é apenas do documento, legível e sem cortes
            </Panel>
            <Panel bordered>
                <VisibleIcon className='text-xl' /> Esteja em um local bem iluminado
            </Panel>
            <Button appearance='primary' className='mt-5' block onClick={next}>Continuar</Button>
        </>
    )
}