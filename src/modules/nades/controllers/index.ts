import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import NadesService from "../services";
import NadesRepository from "../typeorm/repositories/NadeRepository";
class NadesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, picture } = request.body;
    try {
      const nadesService = new NadesService();
      const nadesRepository = getCustomRepository(NadesRepository);
      const nadesExists = await nadesRepository.findByName(name);

      if (nadesExists) {
        throw new Error("This nade already exists");
      }

      const nade = await nadesService.create({
        name,
        picture,
      });

      return response.status(200).json(nade);
    } catch (err: any) {
      return response.status(409).json(err.message);
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const nadesService = new NadesService();

      const nades = await nadesService.index();

      return response.status(200).json(nades);
    } catch (err: any) {
      return response.status(409).json(err.message);
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const nadesService = new NadesService();
      await nadesService.delete({ id });
      return response.status(200).json("Nade was removed succesfully");
    } catch (err: any) {
      return response.status(404).json(err.message);
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { name, picture } = request.body;
      const nadesService = new NadesService();
      const nade = await nadesService.update({ id, picture, name });

      return response.status(200).json(nade);
    } catch (err: any) {
      return response.status(404).json(err.message);
    }
  }
}

export default NadesController;
