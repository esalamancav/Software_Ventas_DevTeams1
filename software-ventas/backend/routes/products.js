//De nuevo importar express
const express = require("express");
//Importar Router de express
const router = express.Router();

//importar controlador
const ProductController = require("../controllers/products");

//Rutas para las operaciones sobre productos

router.get("", ProductController.getProducts);
router.post("", ProductController.addProduct);
router.put("/:id", ProductController.editProduct);
router.get("/:name", ProductController.findProduct);

//router.delete("/:id", ProductController.deleteProduct);
//router.get("/disponibles", ProductController.getProductoDisponible);
//router.get("/entire/:id", ProductController.getProductIdLazyLoading);
//router.get("/:id", ProductController.getProductId);



//exportar modulo
module.exports = router;



