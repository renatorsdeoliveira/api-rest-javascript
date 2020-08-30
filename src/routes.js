const express = require("express");
const routes = express.Router()
const PrductController = require("./controller/ProductController")


routes.get('/products', PrductController.index );


module.exports = routes;
