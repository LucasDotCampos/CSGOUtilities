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
}

export default NadesController;
