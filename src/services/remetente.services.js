import { getRemetenteModel, getRemetenteByNameModel, upadateRemetenteByIdModel, upadateRemetenteByNameModel } from '../models/remetente.models';

const getAllRemetenteService = async () =>{
    const remetente = await getRemetenteModel();
    return remetente;
}
const getRemetenteByNameService = async (name) =>{
    const remetente = await getRemetenteByNameModel(name);
    return remetente;
}

const updateRemetenteByNameService = async (OldName, NewName) =>{
    const remetente = await upadateRemetenteByNameModel(OldName, NewName);
    return remetente;
} 



export { getRemetenteByNameService, updateRemetenteByNameService, getAllRemetenteService }