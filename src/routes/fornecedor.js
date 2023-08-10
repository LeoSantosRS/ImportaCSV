import { Router } from 'express';

import { insertFromCSV } from '../controllers/fornecedor.controllers';

const fornecedor = new Router();

fornecedor.post('/fornecedor/insertFromCSV', insertFromCSV);


export default fornecedor;