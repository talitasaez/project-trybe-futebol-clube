import IMatch from './IMatch';
import IMatches from './IMatches';

export default interface IServiceUser {
  findAll(): Promise<IMatches[]>
  idMatch(id: number): Promise<void>
  finishIdMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void>
  create(dto: IMatch): Promise<IMatches>;
  getId(id: number): Promise<IMatches>;
}
