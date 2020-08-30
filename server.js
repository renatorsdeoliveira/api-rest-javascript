const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");


// Iniciando o APP
const app = express();


// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true,  useUnifiedTopology: true});
//require('./src/models/Product'); // chamando o modulo manual
requireDir('./src/models/') // chamando o modulo automatica com require-dir
const Product = mongoose.model("Product");


// Primeira Rota
app.get('/', (req, res) => {
    Product.create({
        title: "React Native",
        description: "Build native apps with React",
        url: "http://github.com/facebook/react-native"
    });


    return res.send("Hello teste");
})



// Porta
app.listen(3000);