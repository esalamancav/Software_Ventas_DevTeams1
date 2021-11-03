//De nuevo importar express
const express = require("express");
//Importar Router de express
const router = express.Router();

const userscontroller = require("../controllers/users");

//Rutas para las operaciones sobre productos
router.get("", userscontroller.getUsers);
router.post("/:id", userscontroller.addUsers);
//router.get("", userscontroller.addUsersId);

//exportar modulo
module.exports = router;