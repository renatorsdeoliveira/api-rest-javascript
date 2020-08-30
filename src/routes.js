const express = require("express");
const routes = express.Router()
const PrductController = require("./controller/ProductController")


routes.get('/products', PrductController.index );
routes.get('/products/:id', PrductController.show);
routes.post('/products', PrductController.store );


module.exports = routes;
