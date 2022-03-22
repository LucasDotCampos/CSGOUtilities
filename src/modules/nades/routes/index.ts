import { Router } from "express";
import isAuthenticated from "../../../shared/middlewares/isAutheticated";
import NadesController from "../controllers";

const routes = Router();
const nadesController = new NadesController();

routes.post("/create", isAuthenticated, nadesController.create);
routes.get("/", nadesController.index);
routes.delete("/delete/:id", isAuthenticated, nadesController.delete);
routes.put("/update/:id", isAuthenticated, nadesController.update);

export default routes;
