import { Router } from 'express';
import { getListController, insertListController } from '../controllers/list.controllers';

const lista = new Router();

lista.post('/lista', getListController);

lista.post('/lista/insert', insertListController);

export default lista;