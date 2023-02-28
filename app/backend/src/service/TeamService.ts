import { ModelStatic } from 'sequelize';
import IServiceTeam from '../interface/IServiceTeam';
import Team from '../database/models/Team';

export default class TeamService implements IServiceTeam {
  protected model: ModelStatic<Team> = Team;

  async readAll(): Promise<Team[]> {
    return this.model.findAll();
  }

  async readById(id: number): Promise<Team> {
    const teamById = await this.model.findByPk(id);
    return teamById as Team;
  }
}
