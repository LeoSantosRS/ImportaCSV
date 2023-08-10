import { getCidadesOldByIdModel, getCidadesByNameModel } from '../models/cidades.models';

const converterCidadeById = async (CIDADEOLD_ID) => {

    const CIDADEOLD = await getCidadesOldByIdModel(CIDADEOLD_ID);
    //console.log(CIDADEOLD[0]);
    const NOVACIDADE = await getCidadesByNameModel(CIDADEOLD[0].NOME, CIDADEOLD[0].UF); 
    //console.log(NOVACIDADE[0]);
    return NOVACIDADE;

}

export { converterCidadeById };