const express = require("express")
const mongoose = require("mongoose")


// Iniciando o APP
const app = express();


// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true,  useUnifiedTopology: true})



// Primeira Rota
app.get('/', (req, res) => {
    res.send("Hello teste")
})



// Porta
app.listen(3000)