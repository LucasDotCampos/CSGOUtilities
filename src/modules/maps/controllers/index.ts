import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import MapsService from "../services";
import MapsEntity from "../typeorm/entities/MapsEntity";
import MapsRepository from "../typeorm/repositories/MapsRepository";

export default class MapsController {
  public async create(
    request: Request,
    response: Response
  ): Promise<Response | MapsEntity> {
    const { name, picture } = request.body;
    try {
      const mapsService = new MapsService();
      const mapsRepository = getCustomRepository(MapsRepository);
      const mapsExists = await mapsRepository.findByName(name);

      if (mapsExists) {
        throw new Error("This map already exists");
      }

      const map = await mapsService.create({
        name,
        picture,
      });
      return response.json(map);
    } catch (err: any) {
      return response.status(409).json(err.message);
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const mapsService = new MapsService();

      const maps = await mapsService.index();

      return response.status(200).json(maps);
    } catch (err: any) {
      return response.status(409).json(err.message);
    }
  }
}
