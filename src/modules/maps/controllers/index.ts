import { Request, response, Response } from "express";
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
      return response.status(200).json(map);
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

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const mapsService = new MapsService();
      await mapsService.delete({ id });
      return response.status(200).json("Map was removed succesfully");
    } catch (err: any) {
      return response.status(404).json(err.message);
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { name, picture } = request.body;
      const mapsService = new MapsService();
      const map = await mapsService.update({ id, picture, name });

      return response.status(200).json(map);
    } catch (err: any) {
      return response.status(404).json(err.message);
    }
  }
}
