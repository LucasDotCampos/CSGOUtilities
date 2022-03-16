import { getCustomRepository } from "typeorm";
import MapsEntity from "../typeorm/entities/MapsEntity";
import { IMapId, IMapsCreation } from "../../../shared/interfaces";
import MapsRepository from "../typeorm/repositories/MapsRepository";

class MapsService {
  public async create({ name, picture }: IMapsCreation): Promise<MapsEntity> {
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

  public async index(): Promise<MapsEntity[]> {
    const mapsRepository = getCustomRepository(MapsRepository);

    const maps = mapsRepository.find();

    return maps;
  }

  public async delete({ id }: IMapId): Promise<void> {
    const mapsRepository = getCustomRepository(MapsRepository);

    const map = await mapsRepository.findOne(id);

    if (!map) {
      throw new Error("Map not found.");
    }

    await mapsRepository.remove(map);
  }
}

export default MapsService;
