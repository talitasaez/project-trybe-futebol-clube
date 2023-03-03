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
      const matches = result.filter((mat) => mat.inProgress.toString() === req.query.inProgress);
      return res.status(200).json(matches);
    }
    return res.status(200).json(result);
  }
}
