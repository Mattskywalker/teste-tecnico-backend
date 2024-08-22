import { NextFunction, Request, Response } from 'express';
import DemoService from 'services/DemoService';
import { ApiError } from 'utils/apiError';

const demoService = new DemoService();

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

export const updateFrames = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.json(req.body);
  } catch (error) {
    next(error);
  }
};
