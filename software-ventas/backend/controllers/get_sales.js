const Get_Ventas = require("../models/get_sales.js");

exports.getSales = (req, res) => {
  Get_Ventas.find().then((ResultSale) => {
      res.status(200).json(ResultSale);
    });
};

exports.findSales = (req, res) => {
  Get_Ventas.findById(req.params.id).then((ventaResult) => {
    if (ventaResult) {
      console.log(req.params.id)
      res.status(200).json(ventaResult);
    } else {
      //console.log(ventaResult)
      console.log(req.params.Descripcion)
      res.status(404).json("Venta no encontrada");
    }
  });
};
  

exports.addSales = (req, res) => {
  const VentasAdd = new Get_Ventas({
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

  const SalesUpd = new Get_Ventas({
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

  Get_Ventas.findByIdAndUpdate(id, SalesUpd).then((ResultSale) => {
    res.status(200).json("El producto se actualizó satisfactoriamente");
  });
};

