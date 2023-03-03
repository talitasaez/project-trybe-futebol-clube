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
}

export default MatchService;
