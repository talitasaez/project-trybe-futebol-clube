import { ModelStatic } from 'sequelize';
import Team from '../database/models/Team';
import IServicesMatches from '../interface/IServiceMatches';
import Matches from '../database/models/matche';
import IMatches from '../interface/IMatches';
import IMatch from '../interface/IMatch';

export default class MatchesService implements IServicesMatches {
  protected model: ModelStatic<Matches> = Matches;

  async getAll(): Promise<IMatches[]> {
    return this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam' },
        { model: Team, as: 'awayTeam' },
      ],
    });
  }

  async finishId(id: number) {
    await this.model.update({ inProgress: false }, { where: { id } });
  }

  async update(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }

  async create(dto: IMatch): Promise<IMatches> {
    const match = await this.model.create({ ...dto, inProgress: true });

    return match;
  }

  async readId(id: number): Promise<IMatches> {
    const result = await this.model.findOne({ where: { id } });
    return result as IMatches;
  }
}
