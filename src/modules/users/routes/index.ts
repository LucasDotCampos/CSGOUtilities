import { Router } from "express";
import UsersController from "../controllers";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("/create", usersController.create);
usersRouter.get("/", usersController.index);

export default usersRouter;
