import IMatch from './IMatch';

export default interface IServiceUser {
  findAll(): Promise<IMatch[]>
  idMatch(id: number): Promise<void>
  finishIdMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void>
  create(
    homeTeamGoals: number,
    awayTeamGoals: number,
    homeTeamId: number,
    awayTeamId: number,
  ): Promise<IMatch>;
  getId(id: number): Promise<IMatch>;
}
