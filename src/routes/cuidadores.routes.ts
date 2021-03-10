import { Router } from 'express';

import CuidadoresController from '../controllers/CuidadoresController';

const cuidadoresRouter = Router();

const cuidadoresController = new CuidadoresController();

cuidadoresRouter.get('/', cuidadoresController.index);
cuidadoresRouter.post('/', cuidadoresController.create);

export default cuidadoresRouter;
