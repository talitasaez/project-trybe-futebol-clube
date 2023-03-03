import { Request, Response } from 'express';
import IServiceMatch from '../interface/interfaceMatch/IServiceMatch';

export default class MatchController {
  private _service: IServiceMatch;

  constructor(service: IServiceMatch) {
    this._service = service;
  }

  async findAll(req: Request, res: Response) {
    const result = await this._service.findAll();
    if (req.query.inProgress) {
      const matches = result.filter((e) => e.inProgress.toString() === req.query.inProgress);
      return res.status(200).json(matches);
    }
    return res.status(200).json(result);
  }

  async idMatch(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.idMatch(Number(id));
    return res.status(200).json({ message: 'Finished' });
  }

  async finishIdMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this._service.finishIdMatch(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Finished' });
  }

  async create(req: Request, res: Response) {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    const home = await this._service.getId(homeTeamId);
    const away = await this._service.getId(awayTeamId);
    if (home === away) {
      return res.status(404)
        .json({ message: 'There is no team with such id!' });
    }
    if (homeTeamId === awayTeamId) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    const result = await this._service.create(
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
    );
    return res.status(201).json(result);
  }
}
