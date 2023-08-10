import { Router } from 'express';

import { insertFromCSV } from '../controllers/produto.controllers';

const produto = new Router();

produto.post('/produto/insertFromCSV', insertFromCSV);


export default produto;