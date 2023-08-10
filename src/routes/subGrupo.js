import { Router } from 'express';

import { insertFromCSV, getSubGrupoByName } from '../controllers/subGrupo.controllers';

const subGrupo = new Router();

subGrupo.post('/subGrupo/insertFromCSV', insertFromCSV);
subGrupo.post('/subGrupo/getSubGrupoByName', getSubGrupoByName);

export default subGrupo;