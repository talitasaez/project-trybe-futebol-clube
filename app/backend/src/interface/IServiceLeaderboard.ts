import Match from '../database/models/matche';

export default interface IServiceLeaderboard {
  homeTeam(): Promise<Match[]>;
}
