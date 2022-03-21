import { EntityRepository, Repository } from "typeorm";
import NadesEntity from "../../../nades/typeorm/entities/NadesEntity";

@EntityRepository(NadesEntity)
class UserNadesRepository extends Repository<NadesEntity> {
  public async findById(userId: string): Promise<NadesEntity[] | undefined> {
    const nades = await this.find({
      where: {
        userId: userId,
      },
    });

    return nades;
  }

  public async NadesById(id: string): Promise<NadesEntity[] | undefined> {
    const nades = await this.find({
      where: {
        userId: id,
      },
    });

    return nades;
  }
}

export default UserNadesRepository;
