const mongoose = require('mongoose');

const sales = mongoose.Schema({
    Nombre: {type: String, required: true},
    Apellido: {type: String, required: true},
    Email: {type: String, required: true},
    Documento: {type: String, required: true},
    Direccion: {type: String, required: true},
    Producto: {type: String, required: true},
    Cantidad: {type: Number, required: true},

})

module.exports = mongoose.model("Ventas", sales);