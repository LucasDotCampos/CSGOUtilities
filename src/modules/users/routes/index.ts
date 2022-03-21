import { Router } from "express";
import UsersController from "../controllers";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("/", usersController.create);

export default usersRouter;
