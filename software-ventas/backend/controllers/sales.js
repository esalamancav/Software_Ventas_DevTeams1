const Ventas = require("../models/sales");

exports.getSales = (req, res) => {
  Ventas.find().then((ResultSale) => {
      res.status(200).json(ResultSale);
    });
};

exports.addSales = (req, res) => {
  const VentasAdd = new Ventas({
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    Email: req.body.Email,
    Documento: req.body.Documento,
    Direccion: req.body.Direccion,
    Producto: req.body.Producto,
    Cantidad: req.body.Cantidad,
  });
  VentasAdd.save().then((createdSale) => {
    console.log(createdSale);
    res.status(201).json("Creado ok")
})
};

exports.editSales = (req, res) => {
  const id = req.params.id;

  const SalesUpd = new Ventas({
    _id: id,
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    Email: req.body.Email,
    Documento: req.body.Documento,
    Direccion: req.body.Direccion,
    Producto: req.body.Producto,
    Cantidad: req.body.Cantidad,
  });
  console.log(SalesUpd);

  Ventas.findByIdAndUpdate(id, SalesUpd).then((ResultSale) => {
    res.status(200).json("El producto se actualizó satisfactoriamente");
  });
};

exports.findSales = (req, res) => {
  const name = req.params.Documento;
  Ventas.find({ title: { $regex: ".*" + name + ".*" } }).then((sales) => {
    res.status(200).json(sales);
  });
};