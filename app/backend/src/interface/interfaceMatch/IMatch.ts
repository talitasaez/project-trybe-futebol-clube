export default interface IMatch {
  homeTeamId: number,
  awayTeamId: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  homeTeam?: {
    teamName: string;
  };
  awayTeam?: {
    teamName: string;
  }
  wins?:number,
}
