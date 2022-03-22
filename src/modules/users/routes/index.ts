import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import UsersController from "../controllers";
import isAuthenticated from "../../../shared/middlewares/isAutheticated";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("/create", usersController.create);
usersRouter.get("/", usersController.index);
usersRouter.post("/session", usersController.session);
usersRouter.delete("/delete/:id", isAuthenticated, usersController.delete);

export default usersRouter;
