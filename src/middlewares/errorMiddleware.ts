import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/apiError';

export const errorMiddleware = (
  err: ApiError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
