import { Router } from 'express';

import { insertFromCSV, getMarcaByName } from '../controllers/marca.controllers';

const marca = new Router();

marca.post('/marca/insertFromCSV', insertFromCSV);
marca.post('/marca/getMarcaByName', getMarcaByName);

export default marca;