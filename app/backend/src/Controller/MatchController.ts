import { Request, Response } from 'express';
import IServiceMatches from '../interface/interfaceMatch/IServiceMatch';

class MatchesController {
  private _service: IServiceMatches;
  constructor(service: IServiceMatches) {
    this._service = service;
  }

  async getAll(req: Request, res: Response) {
    const result = await this._service.getAll();

    if (req.query.inProgress) {
      const queryResult = result.filter((r) =>
        r.inProgress.toString() === req.query.inProgress);
      return res.status(200).json(queryResult);
    }
    return res.status(200).json(result);
  }

  async finishId(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.finishId(Number(id));
    return res.status(200).json({ message: 'Finished' });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this._service.update(Number(id), homeTeamGoals, awayTeamGoals);

    return res.status(200).json({ message: 'Finished' });
  }

  async create(req: Request, res: Response) {
    const { homeTeamId, awayTeamId, awayTeamGoals, homeTeamGoals } = req.body;

    const home = await this._service.readId(homeTeamId);
    const away = await this._service.readId(awayTeamId);

    if (!home || !away) {
      return res.status(404)
        .json({ message: 'There is no team with such id!' });
    }

    if (homeTeamId === awayTeamId) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    const result = await this._service.create(
      { homeTeamId,
        awayTeamId,
        awayTeamGoals,
        homeTeamGoals },
    );

    return res.status(201).json(result);
  }
}

export default MatchesController;
