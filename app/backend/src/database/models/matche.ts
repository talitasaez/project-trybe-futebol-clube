import { DataTypes, Model } from 'sequelize';
import db from '.';
import Team from './Team';
import ITeam from '../../interface/ITeam';

class Matches extends Model {
  declare id: number;

  declare homeTeamId: number;

  declare homeTeamGoals: number;

  declare awayTeamId: number;

  declare awayTeamGoals: number;

  declare inProgress: boolean;

  declare homeTeam?: Omit<ITeam, 'id'>;

  declare awayTeam?: Omit<ITeam, 'id'>;
}

Matches.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  homeTeamId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  awayTeamId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

}, { sequelize: db, timestamps: false, modelName: 'matches', underscored: true });

Matches.belongsTo(Team, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Matches.belongsTo(Team, { foreignKey: 'awayTeamId', as: 'awayTeam' });
Team.hasMany(Matches, { foreignKey: 'id', as: 'away_team_id' });
Team.hasMany(Matches, { foreignKey: 'id', as: 'home_team_id' });

export default Matches;
