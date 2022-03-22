import { Router } from "express";
import isAuthenticated from "../../../shared/middlewares/isAutheticated";
import MapsController from "../controllers";

const routes = Router();
const mapsController = new MapsController();

routes.post("/create", isAuthenticated, mapsController.create);
routes.get("/", mapsController.index);
routes.delete("/delete/:id", isAuthenticated, mapsController.delete);
routes.put("/update/:id", isAuthenticated, mapsController.update);

export default routes;
