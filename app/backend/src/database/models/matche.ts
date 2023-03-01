import { DataTypes, Model } from 'sequelize';
import db from '.';

class Matches extends Model {
  declare id: number;

  declare homeTeamId: number;

  declare homeTeamGoals: number;

  declare awayTeamId: number;

  declare awayTeamGoals: number;

  declare inProgress: boolean;
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

export default Matches;
