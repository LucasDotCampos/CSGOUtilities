import { Router } from "express";
import mapRouter from "../../../modules/maps/routes";

const routes = Router();

routes.use("/map", mapRouter);

export default routes;
