import { Router, Request, Response } from 'express';
import MatchService from '../service/MatchService';
import MatchController from '../Controller/MatchController';

const matchRouter = Router();
const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchRouter.get('/', (req: Request, res: Response) => matchController.findAll(req, res));

export default matchRouter;
