const express = require("express");
const app = express();
const port = 3000;

const crearInscripcion = require("./src/services/crear-insripcion");
const listarInscripcion = require("./src/services/lista-inscripcion");
const findInscripcion = require("./src/services/find-inscripcion");
const updateInscripcion = require("./src/services/update-inscripcion");
const eliminarInscripcion = require("./src/services/eliminar-inscripcion");

app.get("/inscripcion", (req, res) => {
    listarInscripcion(req, res);
});

app.get("/inscripcion/:id", (req, res) => {
    findInscripcion(req, res);
});

app.post("/inscripcion", (req, res) => {
    crearInscripcion(req, res);
});

app.put("/inscripcion/:id", (req, res) => {
    updateInscripcion(req, res);
});

app.delete("/inscripcion/:id", (req, res) => {
    eliminarInscripcion(req, res);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});