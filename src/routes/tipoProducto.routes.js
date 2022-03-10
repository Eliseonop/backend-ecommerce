import { Router } from "express";
import {
  crearTipoProducto,
  eliminarTipoProducto,
  listarTipoProductos,
} from "../controllers/tipoProducto.controller.js";

export const tipoProductoRouter = Router();

tipoProductoRouter
  .route("/tipoproducto")
  .get(listarTipoProductos)
  .post(crearTipoProducto);

tipoProductoRouter.route("/producto/:id").delete(eliminarTipoProducto);
