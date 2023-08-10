import { backupModels } from "../models/backup.models";

const backupService = async () => {
   const envio = await backupModels();
   return envio;
}

export { backupService }