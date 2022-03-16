import { Router } from "express";
import NadesController from "../controllers";

const routes = Router();
const nadesController = new NadesController();

routes.post("/create", nadesController.create);

export default routes;
