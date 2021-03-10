import { Router } from 'express';

import cuidadoresRouter from './cuidadores.routes';

const routes = Router();

routes.use('/cuidadores', cuidadoresRouter);

export default routes;