import { CronJob } from 'cron';
import { backupModels } from "../models/backup.models";
import { insertLogsService } from "../services/logs.services";

// execute a cada três horas, apenas nos dias 1 à 5 de cada mês
const job = new CronJob('0 */3 1-5 * *', () => {
  console.log('Fiz um beckup agendado');
  const envio = backupModels();
  if(envio){
    insertLogsService(1,201); 
  }
});

// execute a cada três horas, apenas nos dias 20 à 31 de cada mês
const job2 = new CronJob('0 */3 20-31 * *', () => {
  console.log('Fiz um beckup agendado');
  const envio = backupModels();
  if(envio){
    insertLogsService(1,201); 
  }
});

const jobs = () => {  
  job.start(); 
  job2.start();
}

export default jobs;

