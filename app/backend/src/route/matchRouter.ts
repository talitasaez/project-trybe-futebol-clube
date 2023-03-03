import { Router, Request, Response } from 'express';
import MatchService from '../service/MatchService';
import MatchController from '../Controller/MatchController';
import validateLogin from '../middlewares/validationLogin';

const matchRouter = Router();
const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchRouter.get('/', (req: Request, res: Response) => matchController.findAll(req, res));

matchRouter.post(
  '/',
  validateLogin.verifyToken,
  (req: Request, res: Response) => matchController.create(req, res),
);

matchRouter.patch(
  '/:id',
  validateLogin.verifyToken,
  (req: Request, res: Response) => matchController.finishIdMatch(req, res),
);
matchRouter.patch(
  '/:id/finish',
  validateLogin.verifyToken,
  (req: Request, res: Response) => matchController.idMatch(req, res),
);

export default matchRouter;
