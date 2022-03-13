import RGFrente      from '../../../images/rg_frente.png';
import Panel         from 'rsuite/Panel';
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import MobileIcon    from '@rsuite/icons/Mobile';
import VisibleIcon   from '@rsuite/icons/Visible';
import Button        from 'rsuite/Button';

export default function StepCnhDescription({ next }) {
    return (
        <>
            <div className="text-left text-blue-500 text-xl mb-3">Envie a CNH aberta</div>
            <Panel bordered>
                <UserBadgeIcon className='text-xl' /> Retire o documento do plástico e tire a foto com o documento aberto e alinhado
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