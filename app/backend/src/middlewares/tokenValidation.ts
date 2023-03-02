import { NextFunction, Request, Response } from 'express';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(404).json({ message: 'Unauthorized' });
    }

    return next();
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: 'Unauthorized' });
  }
};

export default tokenValidation;
