import { Router, Request, Response } from 'express';
import MatchService from '../service/MatchService';
import MatchController from '../Controller/MatchController';
import validateLogin from '../middlewares/validationLogin';

const matchRouter = Router();
const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchRouter.get('/', (req: Request, res: Response) => matchController.getAll(req, res));

matchRouter.patch(
  '/:id/finish',
  validateLogin.verifyToken,
  (req: Request, res: Response) => matchController.finishId(req, res),
);

matchRouter.patch(
  '/:id',
  validateLogin.verifyToken,
  (req: Request, res: Response) => matchController.update(req, res),
);

matchRouter.post(
  '/',
  validateLogin.verifyToken,
  (req: Request, res: Response) => matchController.create(req, res),
);

export default matchRouter;
