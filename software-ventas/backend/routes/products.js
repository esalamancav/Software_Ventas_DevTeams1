//De nuevo importar express
const express = require("express");
//Importar Router de express
const router = express.Router();

//importar controlador
const ProductController = require("../controllers/products");

//Rutas para las operaciones sobre productos
router.get("", ProductController.getProducts);
router.post("");

//exportar modulo
module.exports = router;



