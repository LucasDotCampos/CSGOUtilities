import { Router } from "express";
import MapsController from "../controllers";

const routes = Router();
const mapsController = new MapsController();

routes.post("/create", mapsController.create);

export default routes;
