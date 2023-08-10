import { getListService, insertListService } from '../services/lista.services';

const getListController = async (req, res) =>{
    
    const Lista = await getListService(); 
    return res.status(201).json(Lista);   
}
const insertListController = async (req, res) =>{
    const { pasta, arquivo, remetente } = req.body;
    const Lista = await insertListService(pasta, arquivo, remetente);
    return res.status(201).json(Lista);
}

export { getListController, insertListController };