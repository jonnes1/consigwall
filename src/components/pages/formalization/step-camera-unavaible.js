import Panel      from 'rsuite/Panel';
import Button     from 'rsuite/Button';
import CheckIcon  from '@rsuite/icons/Check';
import MobileIcon from '@rsuite/icons/Mobile';
import BlockIcon  from '@rsuite/icons/Block';

export default function StepCameraUnavaible({ tryAgain }) {
    return (
        <>
            <div className="text-xl text-center mb-4">Camera indisponível</div>
            <Panel bordered>
                <MobileIcon className='text-xl' /> Verifique se o aparelho tem uma câmera funcionando
            </Panel>
            <Panel bordered className='mt-3 mb-3'>
                <CheckIcon className='text-xl' /> Clique em "Permitir" para acessar a câmera do aparelho
            </Panel>
            <Panel bordered>
                <BlockIcon className='text-xl' /> Caso tenha clicado em "Bloquear", permita o acesso a sua camera no navegador e tente novamente.
            </Panel>
            <Button appearance='primary' className='mt-5' block onClick={tryAgain}>
                Tentar novamente
            </Button>
        </>
    )
}