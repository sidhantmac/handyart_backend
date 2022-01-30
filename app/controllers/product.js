const { redirect } = require("express/lib/response");
const { USER } = require("../config/db.config");
const db = require("../models");
const product = db.product;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }
  if (!req.body.quantity) {
    res.status(400).send({
      message: "quantity can not be empty!"
    });
    return;
  }
  if (!req.body.price) {
    res.status(400).send({
      message: "Price can not be empty!"
    });
    return;
  }
  if (!req.body.description) {
    res.status(400).send({
      message: "description can not be empty!"
    });
    return;
  }
  if (!req.body.size) {
    res.status(400).send({
      message: "size can not be empty!"
    });
    return;
  }

  // Create a product
  const product = {
    name: req.body.name,
    price: req.body.price,
    quantity:req.body.quantity,
    description:req.body.description,
    size:req.body.size,
    review:req.body.review  
  };

  // Save Category in the database
  product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};