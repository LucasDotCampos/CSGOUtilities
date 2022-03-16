import { Router } from "express";
import NadesController from "../controllers";

const routes = Router();
const nadesController = new NadesController();

routes.post("/create", nadesController.create);
routes.get("/", nadesController.index);
routes.delete("/delete/:id", nadesController.delete);
routes.put("/update/:id", nadesController.update);

export default routes;
