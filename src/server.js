import express, { json } from "express";
import morgan from "morgan";
import { authRouter } from "./routes/auth.routes.js";
import { authAdminRouter } from "./routes/authAdmin.routes.js";
import { productoRouter } from "./routes/producto.routes.js";
import { tipoProductoRouter } from "./routes/tipoProducto.routes.js";

const app = express();

const PORT = process.env.PORT ?? 4001;
// definineod rutas

app.use(morgan("dev"));
app.use(json());

// aqui van las rutas
app.use(authRouter);
app.use(tipoProductoRouter);
app.use(authAdminRouter);
app.use(productoRouter);
app.get("/", () => {
  console.log("hola funciona");
});

app.listen(PORT, function () {
  console.log("Servidor corriendo exitosamente ✔✔✔✔✔✔", PORT);
});
