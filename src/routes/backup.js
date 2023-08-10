import { Router } from 'express';
import { backupController } from "../controllers/backup.controllers";

const backup = new Router();

backup.post('/backup', backupController);

export default backup;