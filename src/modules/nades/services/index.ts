import { getCustomRepository } from "typeorm";
import {
  INadesId,
  INadesCreation,
  INadesUpdate,
} from "../../../shared/interfaces";
import NadesEntity from "../typeorm/entities/NadesEntity";
import NadesRepository from "../typeorm/repositories/NadeRepository";

class NadesService {
  public async create({
    name,
    picture,
    from,
    to,
    position,
    tickrate,
    userId,
    link,
  }: INadesCreation): Promise<NadesEntity> {
    const nadesRepository = getCustomRepository(NadesRepository);
    const nadesExists = await nadesRepository.findByName(name);

    if (nadesExists) {
      throw new Error("There's already a nade with this name");
    }

    const nade = nadesRepository.create({
      name,
      picture,
      from,
      to,
      position,
      tickrate,
      userId,
      link,
    });

    await nadesRepository.save(nade);

    return nade;
  }

  public async index(): Promise<NadesEntity[]> {
    const nadesRepository = getCustomRepository(NadesRepository);

    const nades = nadesRepository.find({
      order: {
        name: "ASC",
      },
    });

    return nades;
  }

  public async delete({ id }: INadesId): Promise<void> {
    const nadeRepository = getCustomRepository(NadesRepository);

    const nade = await nadeRepository.findOne(id);

    if (!nade) {
      throw new Error("Nade not found.");
    }

    await nadeRepository.remove(nade);
  }

  public async update({
    id,
    name,
    picture,
    from,
    to,
    position,
    tickrate,
    link,
  }: INadesUpdate): Promise<NadesEntity> {
    const nadesRepository = getCustomRepository(NadesRepository);

    const nade = await nadesRepository.findById(id);

    if (!nade) {
      throw new Error("Nade not found.");
    }
    id = id;
    nade.name = name;
    nade.picture = picture;
    nade.from = from;
    nade.to = to;
    nade.position = position;
    nade.tickrate = tickrate;
    nade.link = link;

    await nadesRepository.save(nade);

    return nade;
  }
}

export default NadesService;
