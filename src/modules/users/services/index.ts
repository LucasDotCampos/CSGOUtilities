import { getCustomRepository, getRepository } from "typeorm";
import UserEntity from "../typeorm/entities/UserEntity";
import UsersRepository from "../typeorm/repository/UserRepository";
import { hash } from "bcryptjs";
import { ICreateUser, IUserId } from "../../../shared/interfaces";

class UserService {
  public async create({
    name,
    email,
    password,
    avatar,
  }: ICreateUser): Promise<UserEntity> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByemail(email);

    if (emailExists) {
      throw new Error("Email address already exists");
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      avatar,
    });

    await usersRepository.save(user);

    return user;
  }

  public async index(): Promise<UserEntity[]> {
    const usersRepository = getRepository(UserEntity);

    const users = await usersRepository.find({
      order: {
        name: "ASC",
      },
    });

    return users;
  }

  public async delete({ id }: IUserId): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new Error("User not found");
    }
    await usersRepository.remove(user);
  }
}

export default UserService;
