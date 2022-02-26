import express, { json } from "express";
import morgan from "morgan";
import { authRouter } from "./routes/auth.routes.js";
import { authAdminRouter } from "./routes/authAdmin.routes.js";

const app = express();

const PORT = 3000;
// definineod rutas

app.use(morgan("dev"));
app.use(json());

app.use(authRouter);
app.use(authAdminRouter);
app.listen(PORT, function () {
  console.log("Servidor corriendo exitosamente ✔✔✔✔✔✔");
});
