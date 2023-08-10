import { Router } from 'express';

import { insertFromCSV } from '../controllers/cidades.controllers';

const cidades = new Router();

cidades.post('/cidades/insertFromCSV', insertFromCSV);

export default cidades;
