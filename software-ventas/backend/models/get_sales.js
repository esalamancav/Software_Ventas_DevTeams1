const mongoose = require('mongoose');

const Get_sales = mongoose.Schema({
    Descripcion: {type: String, required: true},
    Cantidad: {type: String, required: true},
    Valor: {type: Number, required: true},
    Estado: {type: String, required: true},
    Fecha_venta: {type: String, required: true},
})

module.exports = mongoose.model("Ges_Venta", Get_sales);