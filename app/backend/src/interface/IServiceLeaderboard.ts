import Match from '../database/models/matche';

export default interface IServiceLeaderboard {
  homeTeamsPerformace(): Promise<Match[]>;
  awayTeamsPerformace(): Promise<Match[]>;
}
