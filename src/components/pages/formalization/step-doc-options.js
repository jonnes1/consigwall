import React      from 'react';
import Radio      from 'rsuite/Radio';
import Button     from 'rsuite/Button';
import RadioGroup from 'rsuite/RadioGroup';

export default function StepDocOptions({ next, data, set }) {
    return (
        <>
            <div className="text-left text-blue-500 text-xl">Documento para identificação</div>
            <div className="text-lg mt-3">Qual documento deseja enviar?</div>
            <div className="flex flex-col">
                <RadioGroup onChange={(value, event) => set({...data, doc: value})} value={data.doc}>
                    <Radio value='rg'> RG (Carteira de identidade)</Radio>
                    <Radio value='cnh'> CNH (Carteira de habilitação de motorista)</Radio>
                </RadioGroup>
            </div>
            <Button appearance='primary' className='mt-5' block onClick={next}>Continuar</Button>
        </>
    );
}