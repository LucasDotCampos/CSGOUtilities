import { Router } from "express";
import isAdmin from "../../../shared/middlewares/isAdmin";
import isAuthenticated from "../../../shared/middlewares/isAutheticated";
import MapsController from "../controllers";

const routes = Router();
const mapsController = new MapsController();

routes.post("/create", isAuthenticated, isAdmin, mapsController.create);
routes.get("/", mapsController.index);
routes.delete("/delete/:id", isAuthenticated, isAdmin, mapsController.delete);
routes.put("/update/:id", isAuthenticated, isAdmin, mapsController.update);

export default routes;
