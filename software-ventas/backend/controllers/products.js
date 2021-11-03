const Producto = require("../models/products");

exports.getProducts = (req, res) => {
  Producto.find().then((productoResult) => {
      res.status(200).json(productoResult);
    });
};

exports.addProduct = (req, res) => {
  const productoAdd = new Producto({
    Descripción: req.body.descripción,
    Valor: req.body.valor,
    Estado: req.body.estado,
    
  });
  productoAdd.save().then((createdUsers) => {
    console.log(createdUsers);
    res.status(201).json("Creado ok")
})
};

exports.editProduct = (req, res) => {
  const id = req.params.id;

  const productoUpd = new Producto({
    _id: id,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url,
    categoria: req.body.categoria,
    disponible: req.body.disponible,
  });
  console.log(productoUpd);

  Producto.findByIdAndUpdate(id, productoUpd).then((productoResult) => {
    res.status(200).json("El producto se actualizó satisfactoriamente");
  });
};

exports.findProduct = (req, res) => {
  const name = req.params.name;
  Producto.find({ title: { $regex: ".*" + name + ".*" } }).then((products) => {
    res.status(200).json(products);
  });
};
