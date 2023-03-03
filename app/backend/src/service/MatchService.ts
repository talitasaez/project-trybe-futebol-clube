import { ModelStatic } from 'sequelize';
import TeamModel from '../database/models/Team';
import MatchModel from '../database/models/matche';
import IMatch from '../interface/interfaceMatch/IMatch';
import IServiceMatch from '../interface/interfaceMatch/IServiceMatch';

class MatchService implements IServiceMatch {
  protected model: ModelStatic<MatchModel> = MatchModel;

  async findAll(): Promise<IMatch[]> {
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

  async create(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<IMatch> {
    const createMatch = await this.model.create(
      { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true,
      },
    );

    const match = {
      id: createMatch.id,
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    };

    return match;
  }

  async getId(id: number): Promise<IMatch> {
    const get = await this.model.findOne({ where: { id } });
    return get as IMatch;
  }
}

export default MatchService;
