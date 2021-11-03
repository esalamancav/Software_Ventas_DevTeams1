const mongoose = require('mongoose');

const users = mongoose.Schema({
    Nombre: {type: String, required: true},
    Apellido: {type: String, required: true},
    Rol: {type: Boolean, required: true},
    Estado: {type: String, required: true},
    Fecha_creacion: {type: String, required: true},

})

module.exports = mongoose.model("Usuarios", users);