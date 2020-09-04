const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors")


// Iniciando o APP
const app = express();
app.use(express.json());//permite o envio de arquivos json
app.use(cors())


// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true,  useUnifiedTopology: true});
//require('./src/models/Product'); // chamando o modulo manual
requireDir('./src/models/') // chamando o modulo automatica com require-dir


// Rotas
app.use('/api', require('./src/routes') );


// Porta
app.listen(3000);