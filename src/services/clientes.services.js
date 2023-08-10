import { insertClientModel } from '../models/clientes.models';
import { converterCidadeById } from '../services/cidades.services';


function removeMask(value) {
    return value.replace(/[^\d]/g, '');
}



const insertClientService = async (COD_CIDADE, CGC, NOME, RG, ENDERECO,	FONE1, FONE2, FAX, CELULAR, CONTATO, CEP, NUMERO, BAIRRO, PESSOA, DATA_NASC,	
    DATA_CAD, DATA_ULT,	PROFISSAO, PAI, MAE, CNPJ, IE, RAZAO_SOCIAL, CONJUGE, AVALISTA, QTDE_FILHOS, NATURALIDADE, COMPLEMENTO, UF,
    RESIDENCIA, RESPONSAVEL, REFERENCIA1, REFERENCIA2, REFERENCIA3,	RENDA_CLI, RENDA_CONJ, RENDA_TOT, LIMITE, EMPRESA, EMP_ENDERECO,
    EMP_TEMPOSER, EST_CIVIL, LIMITE_USADO, LIMITE_DISP, RESP_CPF, RESP_RG) =>{     
   
    const NEW_PESSOA = PESSOA;
    const NEW_COD_CIDADE = await converterCidadeById(COD_CIDADE); 
    const NEW_RG = removeMask(RG).toString();
    const NEW_CGC = removeMask(CGC).toString();
    const NEW_FONE1 = removeMask(FONE1).toString();
    const NEW_FONE2 = removeMask(FONE2).toString();
    const NEW_FAX = removeMask(FAX).toString();
    const NEW_CELULAR = removeMask(CELULAR).toString();
    const NEW_CONTATO = removeMask(CONTATO).toString();
    const NEW_CEP = removeMask(CEP).toString();
    const NEW_CNPJ = removeMask(CNPJ).toString();
    const NEW_IE = removeMask(IE).toString();
    const NEW_LIMITE = parseFloat(LIMITE).toFixed(2);
    const NEW_LIMITE_DISP = parseFloat(LIMITE_DISP).toFixed(2);
    const NEW_LIMITE_USADO = parseFloat(LIMITE_USADO).toFixed(2);
    const NEW_RENDA_CLI = parseFloat(RENDA_CLI).toFixed(2);
    const NEW_RENDA_CONJ = parseFloat(RENDA_CONJ).toFixed(2);
    const NEW_RENDA_TOT = parseFloat(RENDA_TOT).toFixed(2);
    const NEW_NUMERO = parseInt(NUMERO);



    var NEW_DATA_NASC = DATA_NASC;
    if(NEW_DATA_NASC.length === 0){
        NEW_DATA_NASC = '09.08.2023';   
    }

    var NEW_DATA_CAD = DATA_CAD;
    if(NEW_DATA_CAD.length === 0){
        NEW_DATA_CAD = '09.08.2023';   
    }

    var NEW_DATA_ULT = DATA_ULT;
    if(NEW_DATA_ULT.length === 0){
        NEW_DATA_ULT = '09.08.2023';   
    }
  


    console.log(`
    COD_CIDADE: ${typeof(NEW_COD_CIDADE[0].COD_CIDADE)}
    CGC: ${typeof(NEW_CGC)} - ${NEW_CGC.length}  
    NOME: ${typeof(NOME)} - ${NOME.length}
    RG: ${typeof(NEW_RG)} - ${NEW_RG.length}    
    ENDERECO: ${typeof(ENDERECO)} - ${ENDERECO.length}
    NUMERO: ${typeof(NUMERO)} - ${NUMERO.length}
    BAIRRO: ${typeof(BAIRRO)} - ${BAIRRO.length}
    PESSOA: ${typeof(NEW_PESSOA)} - ${NEW_PESSOA.length}
    CNPJ: ${typeof(NEW_CNPJ)} - ${NEW_CNPJ.length}
    IE: ${typeof(NEW_IE)} - ${NEW_IE.length}
    FONE1: ${typeof(NEW_FONE1)} - ${NEW_FONE1.length}     
    FONE2: ${typeof(NEW_FONE2)} - ${NEW_FONE2.length}
    DATA_NASC: ${typeof(NEW_DATA_NASC)} - ${NEW_DATA_NASC.length}
    DATA_CAD: ${typeof(NEW_DATA_CAD)} - ${NEW_DATA_CAD.length}
    DATA_ULT: ${typeof(NEW_DATA_ULT)} - ${NEW_DATA_ULT.length}

`)
  
    const PRODUTO = await insertClientModel(NEW_COD_CIDADE[0].COD_CIDADE, NOME, NEW_CGC, NEW_RG, ENDERECO, NEW_FONE1, NEW_FONE2, NEW_FAX, NEW_CELULAR, NEW_CONTATO, NEW_CEP, NEW_NUMERO, BAIRRO, PESSOA, NEW_DATA_NASC,	
        NEW_DATA_CAD, NEW_DATA_ULT,	PROFISSAO, PAI, MAE, NEW_CNPJ, NEW_IE, RAZAO_SOCIAL, CONJUGE, AVALISTA, QTDE_FILHOS, NATURALIDADE, COMPLEMENTO, UF,
        RESIDENCIA, RESPONSAVEL, REFERENCIA1, REFERENCIA2, REFERENCIA3,	NEW_RENDA_CLI, NEW_RENDA_CONJ, NEW_RENDA_TOT, NEW_LIMITE, EMPRESA, EMP_ENDERECO,
        EMP_TEMPOSER, EST_CIVIL, NEW_LIMITE_USADO, NEW_LIMITE_DISP, RESP_CPF, RESP_RG);
    
    console.log(PRODUTO);
    return PRODUTO;
   
}

export { insertClientService };