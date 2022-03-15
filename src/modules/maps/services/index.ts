import { getCustomRepository } from "typeorm";
import MapsEntity from "../typeorm/entities/MapsEntity";
import { IMaps } from "../../../shared/interfaces";
import MapsRepository from "../typeorm/repositories/MapsRepository";

class MapsService {
  public async create({ name, picture }: IMaps): Promise<MapsEntity> {
    const mapsRepository = getCustomRepository(MapsRepository);
    const mapsExists = await mapsRepository.findByName(name);

    if (mapsExists) {
      throw new Error("There's already a map with this name");
    }

    const map = mapsRepository.create({
      name,
      picture,
    });

    await mapsRepository.save(map);

    return map;
  }
}

export default MapsService;
