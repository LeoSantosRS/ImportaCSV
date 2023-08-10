import { Router } from 'express';
import { getLogByDataController, getLogsController, insertLogsController} from '../controllers/logs.controllers';

const logs = new Router();

logs.post('/logs', getLogsController);
logs.post('/logs/data', getLogByDataController)
logs.post('/logs/insert', insertLogsController);


export default logs;