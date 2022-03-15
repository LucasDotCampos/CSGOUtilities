import { EntityRepository, Repository } from "typeorm";
import MapsEntity from "../entities/MapsEntity";

@EntityRepository(MapsEntity)
class MapsRepository extends Repository<MapsEntity> {
  public async findByName(name: string): Promise<MapsEntity | undefined> {
    const map = await this.findOne({
      where: {
        name: name,
      },
    });

    return map;
  }

  public async findById(id: string): Promise<MapsEntity | undefined> {
    const map = await this.findOne({
      where: {
        id: id,
      },
    });

    return map;
  }
}

export default MapsRepository;
