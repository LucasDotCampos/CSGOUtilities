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
        return response.status(409);
      }

      const map = await mapsService.create({
        name,
        picture,
      });
      return response.json(map);
    } catch (err: any) {
      return response.json(err.message);
    }
  }
}
