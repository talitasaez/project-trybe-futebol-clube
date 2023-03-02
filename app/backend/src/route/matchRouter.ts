import * as express from 'express';
import ControllerMatch from '../Controller/MatchController';

export default class RouteTeams {
  public router: express.Router;

  constructor() {
    this.router = express.Router();

    this.router
      .route('/matches')
      .get(
        ControllerMatch.getAllMatches,
      );
  }
}
