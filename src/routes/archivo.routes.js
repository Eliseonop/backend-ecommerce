import { Router } from "express";
import {
  crearArchivo,
  eliminarArchivo,
} from "../controllers/archivo.controller.js";

export const archivoRouter = Router();

archivoRouter.route("/archivo").post(crearArchivo).delete(eliminarArchivo);
