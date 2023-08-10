import { insertFornecedorModel } from '../models/fornecedores.models';
import { converterCidadeById } from '../services/cidades.services';


function removeMask(value) {
    return value.replace(/[^\d]/g, '');
}

const insertFornecedorService = async (COD_CIDADE, NOME, CGC, IE, ENDERECO, FONE1, FONE2, FAX, CELULAR, CONTATO, CEP, NUMERO, COMPLEMENTO, BAIRRO, DATA_CAD, DATA_ULT, HOME_PAGE) =>{    
   
    const NEW_COD_CIDADE = await converterCidadeById(COD_CIDADE); 
    const NEW_CGC = removeMask(CGC).toString();
    const NEW_FONE1 = removeMask(FONE1).toString();
    const NEW_FONE2 = removeMask(FONE2).toString();
    const NEW_FAX = removeMask(FAX).toString();
    const NEW_CELULAR = removeMask(CELULAR).toString();
    const NEW_CONTATO = removeMask(CONTATO).toString();
    const NEW_CEP = removeMask(CEP).toString();    
    const NEW_IE = removeMask(IE).toString();    
    const NEW_NUMERO = parseInt(NUMERO);
    

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
    ENDERECO: ${typeof(ENDERECO)} - ${ENDERECO.length}
    NUMERO: ${typeof(NUMERO)} - ${NUMERO.length}
    BAIRRO: ${typeof(BAIRRO)} - ${BAIRRO.length}
    IE: ${typeof(NEW_IE)} - ${NEW_IE.length}
    FONE1: ${typeof(NEW_FONE1)} - ${NEW_FONE1.length}     
    FONE2: ${typeof(NEW_FONE2)} - ${NEW_FONE2.length}
    DATA_CAD: ${typeof(NEW_DATA_CAD)} - ${NEW_DATA_CAD.length}
    DATA_ULT: ${typeof(NEW_DATA_ULT)} - ${NEW_DATA_ULT.length}

`)
  
    const PRODUTO = await insertFornecedorModel(NEW_COD_CIDADE[0].COD_CIDADE, NOME, NEW_CGC, NEW_IE, ENDERECO, NEW_FONE1, NEW_FONE2, NEW_FAX, NEW_CELULAR, NEW_CONTATO, NEW_CEP, NEW_NUMERO, COMPLEMENTO, BAIRRO,	
        NEW_DATA_CAD, NEW_DATA_ULT,	HOME_PAGE);
    
    console.log(PRODUTO);
    return PRODUTO;
   
}

export { insertFornecedorService };