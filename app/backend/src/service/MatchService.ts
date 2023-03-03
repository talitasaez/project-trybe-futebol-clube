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
}

export default MatchService;
