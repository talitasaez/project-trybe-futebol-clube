import IHome from './IMatch';
import IMatches from './IMatches';

export default interface IServiceTeam {
  getAll(): Promise<IMatches[]>;
  finishId(id: number): Promise<void>;
  update(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void>;
  create(dto: IHome): Promise<IMatches>;
  readId(id: number): Promise<IMatches>;
}
