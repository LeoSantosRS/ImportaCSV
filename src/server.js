import app from './app';
import jobs from './middleware/cronJobs';

import dotenv from 'dotenv';
dotenv.config();

const { API_PORT } = process.env;

app.listen(API_PORT, () => {
  console.log(`Ouvindo a porta ${API_PORT}`);
});

export default app;