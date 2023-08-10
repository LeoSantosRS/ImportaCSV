import { Router } from 'express';

import { insertFromCSV } from '../controllers/clientes.controllers';

const clientes = new Router();

clientes.post('/clientes/insertFromCSV', insertFromCSV);


export default clientes;