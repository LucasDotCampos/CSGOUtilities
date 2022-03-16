import { getCustomRepository } from "typeorm";
import { INadesCreation } from "../../../shared/interfaces";
import NadesEntity from "../typeorm/entities/NadesEntity";
import NadesRepository from "../typeorm/repositories/NadeRepository";

class NadesService {
  public async create({ name, picture }: INadesCreation): Promise<NadesEntity> {
    const nadesRepository = getCustomRepository(NadesRepository);
    const nadesExists = await nadesRepository.findByName(name);

    if (nadesExists) {
      throw new Error("There's already a nade with this name");
    }

    const nade = nadesRepository.create({
      name,
      picture,
    });

    await nadesRepository.save(nade);

    return nade;
  }

  public async index(): Promise<NadesEntity[]> {
    const nadesRepository = getCustomRepository(NadesRepository);

    const nades = nadesRepository.find();

    return nades;
  }
}

export default NadesService;
