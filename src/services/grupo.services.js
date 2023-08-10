import { insertGrupoModel, getGrupoByNameModel } from '../models/grupo.models';

const insertGrupoService = async (DESCRICAO) =>{
    const GRUPO = await insertGrupoModel(DESCRICAO);
    return GRUPO;
}

const getGrupoByNameService = async (DESCRICAO) =>{
    const CODIGO = await getGrupoByNameModel(DESCRICAO);
    return CODIGO;
}

export { insertGrupoService, getGrupoByNameService };