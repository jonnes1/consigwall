import Button from 'rsuite/Button';

export default function StepHello({ customerName, next }) {
    return (
        <>
            <p className="text-lg">
                Olá, <strong>{customerName}</strong>
            </p>
            <Button appearance="primary" className='mt-8' block onClick={next}>Clique aqui para continuar</Button>
        </>
    );
}