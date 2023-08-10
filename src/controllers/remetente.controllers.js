import { getAllRemetenteService , getRemetenteByNameService, updateRemetenteByNameService } from '../services/remetente.services';

const getAllRemetente = async (req, res) => {
    const remetente = await getAllRemetenteService();
    return res.status(201).json(remetente);
}
const getRemetenteByName = async (req, res) => {
    const { name } = req.body;
    const remetente = await getRemetenteByNameService(name);
    return res.status(201).json(remetente);
}

const updateRemetenteByName = async (req, res) => {
    const { name } = req.body;
    const old = await getAllRemetenteService();
    const oldName = old[0].NOME;
    if(oldName !== name){
        //console.log('O nome e diferente vou tentar atualizar');
        var update = await updateRemetenteByNameService(oldName, name);
        var remetente = await getRemetenteByNameService(name);        
    }else{
        //console.log('o nome é igual nada a alterar');
        var remetente = await getRemetenteByNameService(name);        
    }
    
    return res.status(201).json(remetente);
}

export {  getAllRemetente , getRemetenteByName, updateRemetenteByName }