import { Router } from "express";
import MapsController from "../controllers";

const routes = Router();
const mapsController = new MapsController();

routes.post("/create", mapsController.create);
routes.get("/", mapsController.index);
routes.delete("/delete/:id", mapsController.delete);

export default routes;
