//De nuevo importar express
const express = require("express");
//Importar Router de express
const router = express.Router();

//importar controlador
const get_salesController = require("../controllers/get_sales");


//Rutas para las operaciones sobre productos
router.get("", get_salesController.getSales);
router.post("", get_salesController.addSales);
router.put("/:id", get_salesController.editSales);
router.get("/:id", get_salesController.findSales);

//exportar modulo
module.exports = router;