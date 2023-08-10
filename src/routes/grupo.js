import { Router } from 'express';

import { insertFromCSV, getGrupoByName } from '../controllers/grupo.controllers';

const grupo = new Router();

grupo.post('/grupo/insertFromCSV', insertFromCSV);
grupo.post('/grupo/getGrupoByName', getGrupoByName);

export default grupo;