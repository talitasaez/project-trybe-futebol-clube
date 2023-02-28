import { Request, Response } from 'express';
import IServiceTeam from '../interface/IServiceTeam';

export default class TeamController {
  private _service: IServiceTeam;

  constructor(service: IServiceTeam) {
    this._service = service;
  }

  async readAll(req: Request, res: Response) {
    const result = await this._service.readAll();
    return res.status(200).json(result);
  }

  async readById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const result = await this._service.readById(id);
    return res.status(200).json(result);
  }
}
