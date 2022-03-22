import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import UsersController from "../controllers";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("/create", usersController.create);
usersRouter.get("/", usersController.index);
usersRouter.post("/session", usersController.session);

export default usersRouter;
