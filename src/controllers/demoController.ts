import { NextFunction, Request, Response } from 'express';
import { ApiError } from 'utils/apiError';

export const getDemos = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json('{"Name": "Mateus"}');
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
