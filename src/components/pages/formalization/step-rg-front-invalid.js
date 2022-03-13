import Panel         from 'rsuite/Panel';
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import MobileIcon    from '@rsuite/icons/Mobile';
import VisibleIcon   from '@rsuite/icons/Visible';
import Button        from 'rsuite/Button';

export default function StepRgFrontInvalid({ next }) {
    return (
        <>
            <div className="text-left text-blue-500 text-xl mb-3">Não conseguimos validar o documento</div>
            <Panel bordered>
                <UserBadgeIcon className='text-xl' /> Mantenha a camera alinhada ao documento, que deve estar em uma superficie plana (uma mesa por exemplo)
            </Panel>
            <Panel bordered className='mt-3 mb-3'>
                <MobileIcon className='text-xl' /> A foto é apenas do documento, legível e sem cortes
            </Panel>
            <Panel bordered>
                <VisibleIcon className='text-xl' /> Esteja em um local bem iluminado e evite sombras no documento
            </Panel>
            <Button appearance='primary' className='mt-5' block onClick={next}>Enviar novamente</Button>
        </>
    );
}