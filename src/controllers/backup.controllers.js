import { backupService } from "../services/backup.services";

const backupController = async (req, res) => {
   const envio = await backupService();
   return res.status(201).json(envio);
}

export { backupController }