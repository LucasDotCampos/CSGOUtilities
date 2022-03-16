import { Router } from "express";
import NadesController from "../controllers";

const routes = Router();
const nadesController = new NadesController();

routes.post("/create", nadesController.create);
routes.get("/", nadesController.index);
routes.delete("/delete/:id", nadesController.delete);

export default routes;
