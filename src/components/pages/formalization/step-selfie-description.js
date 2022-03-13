import Panel         from 'rsuite/Panel';
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import MobileIcon    from '@rsuite/icons/Mobile';
import VisibleIcon   from '@rsuite/icons/Visible';
import Button        from 'rsuite/Button';

export default function StepSelfieDescription({ next }) {
    return (
        <>
            <div className="text-left text-blue-500 text-xl mb-3">Foto de rosto (selfie)</div>
            <Panel bordered>
                <UserBadgeIcon className='text-xl' /> Não use óculos, boné ou chapéu
            </Panel>
            <Panel bordered className='mt-3 mb-3'>
                <MobileIcon className='text-xl' /> Enquadre bem o seu rosto
            </Panel>
            <Panel bordered>
                <VisibleIcon className='text-xl' /> Esteja em um local bem iluminado
            </Panel>
            <Button appearance='primary' className='mt-5' block onClick={next}>Continuar</Button>
        </>
    );
}