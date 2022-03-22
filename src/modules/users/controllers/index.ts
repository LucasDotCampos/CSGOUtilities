import { Request, Response } from "express";
import UserService from "../services";
import SessionsService from "../services/SessionsService";
import UserEntity from "../typeorm/entities/UserEntity";

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      const userService = new UserService();
      const user = await userService.create({
        name,
        email,
        password,
        avatar: "89a11137a396-profilepic.png",
      });

      return response.status(200).json(user);
    } catch (err: any) {
      return response.status(409).json(err.message);
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const userService = new UserService();

      const users = await userService.index();

      return response.status(200).json(users);
    } catch (err: any) {
      return response.status(400).json(err.message);
    }
  }

  public async session(
    request: Request,
    response: Response
  ): Promise<Response | UserEntity> {
    try {
      const { email, password } = request.body;

      const session = new SessionsService();

      const user = await session.execute({
        email,
        password,
      });

      return response.json(user);
    } catch (err: any) {
      return response.status(403).json(err.message);
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const userService = new UserService();

      await userService.delete({ id });
      return response.status(200).json("Sucessfully removed");
    } catch (err: any) {
      return response.status(404).json(err.message);
    }
  }
}
