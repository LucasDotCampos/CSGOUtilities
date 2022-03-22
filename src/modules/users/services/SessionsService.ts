import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { createQueryBuilder, getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repository/UserRepository";
import { IUserToken, IUserValidate } from "../../../shared/interfaces";
import UserEntity from "../typeorm/entities/UserEntity";

class SessionService {
  public async execute({
    email,
    password,
  }: IUserValidate): Promise<IUserToken> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findByemail(email);

    if (!user) {
      throw new Error("email/password incorrect");
    }
    if (user.password) {
      const passwordConfirmed = await compare(password, user.password);

      if (!passwordConfirmed) {
        throw new Error("email/password incorrect");
      }
    }

    const secret = process.env.SECRET;

    const token = jwt.sign({ id: user.id }, `${secret}`, { expiresIn: "1d" });

    return {
      user,
      token,
    };
  }
}

export default SessionService;
