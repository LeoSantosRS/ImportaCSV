import { getListModel, insertListModel } from '../models/lista.models';

const getListService = async () =>{
    
    const lista = await getListModel();
    return lista;    
}

const insertListService = async (pasta, arquivo, remetente) =>{
    const lista = await insertListModel(pasta, arquivo, remetente);
    return lista;    
}

export { getListService, insertListService };