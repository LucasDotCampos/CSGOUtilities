import "reflect-metadata";
import express from "express";
import routes from "./routes";
import "../typeorm/connection";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => console.log("Server is running on 4000 port"));
