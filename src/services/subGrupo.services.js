import { insertSubGrupoModel, getSubGrupoByNameModel, getCodGrupoOnSubGrupoByNameModel } from '../models/subGrupo.models';
import { getGrupoByNameService } from './grupo.services';

const insertSubGrupoService = async (COD_GRUPO, DESCRICAO) =>{
    const GRUPO_COD = await getGrupoByNameService(COD_GRUPO);
    if(GRUPO_COD){
        console.log('Grupo existe!');
        console.log(`${GRUPO_COD} - ${COD_GRUPO}: ${DESCRICAO}`);
        console.log('--------------------------');
    }else{
        console.log('Grupo inexistente!');
        console.log(`${COD_GRUPO}: ${DESCRICAO}`);
        console.log('--------------------------');
    }
    const SUBGRUPO = await insertSubGrupoModel(GRUPO_COD, DESCRICAO);
    return SUBGRUPO;
}

const getSubGrupoByNameService = async (NOME) =>{
    const CODIGO = await getSubGrupoByNameModel(NOME);
    return CODIGO;
}

const getCodGrupoOnSubGrupoByNameService = async (NOME) =>{
    const CODIGO = await getCodGrupoOnSubGrupoByNameModel(NOME);
    return CODIGO;
}

export { insertSubGrupoService, getSubGrupoByNameService, getCodGrupoOnSubGrupoByNameService };