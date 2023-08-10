import { CronJob } from 'cron';

const job = new CronJob('* * * * *', () => {
  console.log('Testando o Crom');
})

job.start();