import { ModelStatic } from 'sequelize';
import TeamModel from '../database/models/Team';
import MatchModel from '../database/models/matche';
import IMatch from '../interface/interfaceMatch/IMatch';
import IServiceMatch from '../interface/interfaceMatch/IServiceMatch';
import IMatches from '../interface/interfaceMatch/IMatches';

class MatchService implements IServiceMatch {
  protected model: ModelStatic<MatchModel> = MatchModel;

  async findAll(): Promise<IMatches[]> {
    return this.model.findAll({
      include: [
        { model: TeamModel, as: 'homeTeam' },
        { model: TeamModel, as: 'awayTeam' },
      ],
    });
  }

  async idMatch(id: number) {
    await this.model.update({ inProgress: false }, { where: { id } });
  }

  async finishIdMatch(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }

  async create(dto: IMatch): Promise<IMatches> {
    const createMatch = await this.model.create({ ...dto, inProgress: true });
    return createMatch;
  }

  async getId(id: number): Promise<IMatches> {
    const get = await this.model.findOne({ where: { id } });
    return get as IMatches;
  }
}

export default MatchService;
