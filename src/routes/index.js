import { Router } from 'express';

const routes = new Router();

// Rota Inicial
routes.get('/', (req, res) => {
  res.status(200).json({
    msg: 'conected',
  });
});

export default routes;