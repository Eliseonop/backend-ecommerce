import express, { response } from "express";

const app = express();

const PORT = 3001;

app.use(json());

app.get("/", (req, res) => {
  res.send("hola coder");
});

app.use((req, res) => {
  res.status(404).json({
    error: "Not found",
  });
});

app.listen(PORT, function () {
  console.log("hola");
});
