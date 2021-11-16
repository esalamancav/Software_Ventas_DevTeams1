const Users = require('../models/users');

exports.getUsers = (req, res) => {
    Users.find().then((userResult) => {
        res.status(200).json(userResult);
    })
    
}

exports.addUsers = (req, res) => {
    const userAdd = new Users({
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        Rol: req.body.Rol,
        Estado: req.body.Estado,
        Fecha_creacion: req.body.Fecha_creacion,
    });

    userAdd.save().then((createdUsers) => {
        console.log(createdUsers);
        res.status(201).json("Creado ok")
    })
}

exports.getUserId = (req, res) => {
    Users.findById(req.params.id).then((userResult) => {
        if(userResult){
            res.status(200).json(userResult)
        }
        else{
            res.status(404).json("Usuario no encontrado")
        }
    })
}
