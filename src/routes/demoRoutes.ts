import { Router } from 'express';
import * as demoController from 'controllers/demoController';

const demosRouter = Router();

demosRouter.get('/demos', demoController.getDemos);

demosRouter.get('/demo/:demoid/frames', demoController.getDemoFrames);

demosRouter.get('/demo/:demoid', demoController.getDemoById);

demosRouter.get('/frame/:frameid', demoController.getFrame);

demosRouter.put('/frame/:id', demoController.updateFrame);

export default demosRouter;
