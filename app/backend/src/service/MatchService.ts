// import ModelMatch from '../database/models/matche';
// import ModelTeam from '../database/models/Team';

// const includeModel = [
//   { model: ModelTeam, as: 'teamHome', attributes: { exclude: ['id'] } },
//   { model: ModelTeam, as: 'teamAway', attributes: { exclude: ['id'] } },
// ];

// export default class ServiceMatch {
//   static async getAllMatches(inProgress: string) {
//     if (!inProgress) {
//       const matches = await ModelMatch.findAll(
//         {
//           attributes: { exclude: ['home_team', 'away_team'] },
//           include: includeModel,
//         },
//       );

//       return matches;
//     }

//     const bool = JSON.parse(inProgress);
//     const matchesFiltered = await ModelMatch.findAll({
//       where: { inProgress: bool },
//       attributes: { exclude: ['home_team', 'away_team'] },
//       include: includeModel,
//     });
//     return matchesFiltered;
//   }
// }
