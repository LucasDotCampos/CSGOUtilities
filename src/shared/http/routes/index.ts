import { Router } from "express";
import mapRouter from "../../../modules/maps/routes";
import nadeRouter from "../../../modules/nades/routes";

const routes = Router();

routes.use("/map", mapRouter);
routes.use("/nades", nadeRouter);

export default routes;
