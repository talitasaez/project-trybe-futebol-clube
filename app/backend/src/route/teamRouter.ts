import { Router, Request, Response } from 'express';
import TeamController from '../Controller/TeamController';
import TeamService from '../service/TeamService';

const teamRouter = Router();
const teamService = new TeamService();
const teamController = new TeamController(teamService);

teamRouter.get('/teams', (req: Request, res: Response) => teamController.readAll(req, res));
teamRouter.get('/teams/:id', (req: Request, res: Response) => teamController.readById(req, res));

export default teamRouter;
