//require es el import de React. Importa la libreria express desde el node_modules
var express = require("express");
//Genera una aplicacion (app) que es una instancia de la clase express
var app = express();
//Importar Routes de Products
const productsRoutes = require("./routes/products");
//Importar Routes de users
const usersRoutes = require("./routes/users");
//Importar Routes de sales
const salesRoutes = require("./routes/sales");


//Para que el express entienda el Json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Aqui va la conexion a la base de datos

//Aqui van las rutas
app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/sales", salesRoutes);


//exportar app como un modulo. Como el export default de React
module.exports = app;

