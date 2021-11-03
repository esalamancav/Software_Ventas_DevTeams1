const mongoose = require('mongoose');

const products = mongoose.Schema({
    Descripción: {type: String, required: true},
    Valor: {type: Number, required: true},
    Estado: {type: String, required: true},
})

module.exports = mongoose.model("Productos", products);