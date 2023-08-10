import { Router } from 'express';
import { getAllRemetente, getRemetenteByName, updateRemetenteByName } from '../controllers/remetente.controllers';

const remetente = new Router();

remetente.post('/remetente', getAllRemetente);

remetente.post('/remetente/name', getRemetenteByName);

remetente.post('/remetente/update', updateRemetenteByName);

export default remetente;
