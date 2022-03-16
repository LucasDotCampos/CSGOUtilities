import { EntityRepository, Repository } from "typeorm";
import NadesEntity from "../entities/NadesEntity";

@EntityRepository(NadesEntity)
class NadesRepository extends Repository<NadesEntity> {
  public async findByName(name: string): Promise<NadesEntity | undefined> {
    const nade = await this.findOne({
      where: {
        name: name,
      },
    });

    return nade;
  }

  public async findById(id: string): Promise<NadesEntity | undefined> {
    const nade = await this.findOne({
      where: {
        id: id,
      },
    });

    return nade;
  }
}

export default NadesRepository;
