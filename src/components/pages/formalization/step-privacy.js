import Checkbox from 'rsuite/Checkbox';
import Button   from 'rsuite/Button';

export default function StepPrivacy({ companyName, urlCompanyTerms, next, data, set }) {
    return (
        <>
            <p className="text-lg mb-5">Termos de Uso e Política de Privacidade da <strong>{companyName}</strong></p>
            <div className="mb-5">
                Para começar, leia os Termos de Uso, Política de Privacidade e termo de autorização de nossos parceiros abaixo.
            </div>
            <div className="mb-5">
                Você tendo lido, entendido e estando de acordo, selecione os checkboxes correspondente a cada aceite para continuarmos.
            </div>
            <div>
                <Checkbox onChange={(value, checked) => set({...data, read_accept_terms: checked})}> 
                    Li e concordo com os <a href={urlCompanyTerms} target="_blank">Termos e Condições Gerais de Uso da Plataforma {companyName}</a>
                </Checkbox>
                <Checkbox onChange={(value, checked) => set({...data, read_accept_policy: checked})}> 
                    Li e concordo com a <a href={urlCompanyTerms} target="_blank"> Política de Privacidade e Proteção de Dados da {companyName}</a>
                </Checkbox>
                <Checkbox className='text-xs' onChange={(value, checked) => set({...data, authorization: checked})}>
                    Autorizo a ACESSO DIGITAL TECNOLOGIA DA INFORMAÇÃO S.A ("ACESSO DIGITAL"), 
                    na qualidade de prestadora de serviços da Up.p, a coletar/receber e armazenar meus dados pessoais e biométricos (“Dados”) 
                    solicitados no momento desta operação e/ou anteriores que eventualmente já tenham ocorrido, para o processamento 
                    pela ACESSO DIGITAL, bem como declaro ainda que tenho ciência e concordo que os meus dados serão utilizados nesta e em 
                    futuras operações de crédito ou que importem risco financeiro tanto da Up.p, quanto das demais empresas usuárias dos 
                    sistemas da ACESSO DIGITAL, de modo que o uso dos meus dados permanecerão armazenados e controlados pela ACESSO DIGITAL 
                    para cumprimento das seguintes finalidades: <br /><br />

                    (i) geração de score de autenticação biométrica, sendo que o referido score poderá ser gerado por meio de comparações dos 
                    meus dados informados e a base de dados mantida pela ACESSO DIGITAL, periodicidade de consumo bem como por meio de eventuais 
                    consultas às informações públicas e/ou análise de documentos pessoais, quando aplicável; (ii) promover maior segurança no uso
                    de minha identidade de forma a prevenir o uso indevido de meus dados; (iii) servir de prova legal em âmbito judicial; 
                    (iv) cumprir ordem judicial ou de autoridade administrativa; (v) desenvolver, manter e aperfeiçoar os recursos e 
                    funcionalidades do produto de biometria facial; e (vi) prevenção à fraude. <br /><br />

                    Declaro ainda que caso não me sinta confortável em manter meus dados com a ACESSO DIGITAL, 
                    poderei solicitar a exclusão de meus dados por meio da Up.p, a qual deverá comunicar o pedido à ACESSO DIGITAL 
                    que efetuará todos os procedimentos de segurança necessários para exclusão destes dados ou poderei efetuar solicitação 
                    direta à ACESSO DIGITAL por meio do endereço digital www.acessodigital.com.br e efetuando o processo, 
                    descrito em “Opt Out – Quero Sair da Base de Dados”.
                </Checkbox>
            </div>
            <div className='text-center'>
                <Button 
                    appearance="primary" 
                    className='mt-8' 
                    block 
                    onClick={next} 
                    disabled={!data.read_accept_policy || !data.read_accept_terms || !data.authorization}>
                        Aceitar termos e continuar
                </Button>
            </div>
        </>
    );
}