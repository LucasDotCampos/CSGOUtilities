import { Router } from "express";
import mapRouter from "../../../modules/maps/routes";
import nadeRouter from "../../../modules/nades/routes";
import usersRouter from "../../../modules/users/routes";

const routes = Router();

routes.use("/map", mapRouter);
routes.use("/nades", nadeRouter);
routes.use("/users", usersRouter);

export default routes;
