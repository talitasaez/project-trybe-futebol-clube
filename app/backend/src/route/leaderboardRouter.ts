import { Router, Request, Response } from 'express';
import LeaderboardController from '../Controller/leaderboardController';
import LeaderboardService from '../service/leaderboardService';

const leaderboardRoutes = Router();
const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

leaderboardRoutes
  .get('/leaderboard/home', (req: Request, res: Response) =>
    leaderboardController.homeTeam(req, res));

export default leaderboardRoutes;
