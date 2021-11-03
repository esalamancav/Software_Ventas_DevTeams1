//De nuevo importar express
const express = require("express");
//Importar Router de express
const router = express.Router();

//importar controlador
const salesController = require("../controllers/sales");


//Rutas para las operaciones sobre productos
router.get("", salesController.getSales);
router.post("", salesController.addSales);
router.put("/:id", salesController.editSales);
router.get("/:name", salesController.findSales);

//exportar modulo
module.exports = router;