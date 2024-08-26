import { NextFunction, Request, Response } from 'express';
import demosRouter from 'routes/demoRoutes';
import DemoService from 'services/DemoService';
import { ApiError } from 'utils/apiError';

const demoService = new DemoService();

export const getDemoById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(await demoService.getDemoById(req.params.demoid));
  } catch (error) {
    next(error);
  }
};

export const getDemos = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(await demoService.getAllDemos());
  } catch (error) {
    next(error);
  }
};

export const getDemoFrames = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(await demoService.getDemoFramesById(req.params.demoid));
  } catch (error) {
    next(error);
  }
};

export const getFrame = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(await demoService.getFrame(req.params.frameid));
  } catch (error) {
    next(error);
  }
};

export const updateFrame = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(await demoService.updateFrame(req.body));
  } catch (error) {
    next(error);
  }
};
