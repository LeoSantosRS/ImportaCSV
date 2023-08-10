import { insertMarcaModel, getMarcaByNameModel } from '../models/marcas.models';

const insertMarcasService = async (NOME) =>{
    const Marca = await insertMarcaModel(NOME);
    return Marca;
}

const getMarcaByNameService = async (NOME) =>{
    const CODIGO = await getMarcaByNameModel(NOME);
    return CODIGO;
}

export { insertMarcasService, getMarcaByNameService };