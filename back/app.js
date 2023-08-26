const express = require("express");
const app = express();

//Uso de constantes importadas
app.use(express.json());

//Importar rutas
const productos = require("./routes/products");

app.use("/api", productos); //Sujeto a decision (ruta del navegador)

module.exports = app;
