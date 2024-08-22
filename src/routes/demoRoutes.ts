import { Router } from 'express';
import * as demoController from 'controllers/demoController';

const demosRouter = Router();

demosRouter.get('/demos', demoController.getDemos);

demosRouter.put('/frames/:id', demoController.updateFrames);

export default demosRouter;
