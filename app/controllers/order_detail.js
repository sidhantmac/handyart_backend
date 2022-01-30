const { USER } = require("../config/db.config");
const db = require("../models");
const order_detail = db.order_detail;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.orderid) {
    res.status(400).send({
      message: "orderid can not be empty!"
    });
    return;
  }
  if (!req.body.userid) {
    res.status(400).send({
      message: "userid can not be empty!"
    });
    return;
  }
  
  if (!req.body.productid) {
    res.status(400).send({
      message: "productid can not be empty!"
    });
    return;
  }
  
  if (!req.body.price) {
    res.status(400).send({
      message: "price can not be empty!"
    });
    return;
  }
  if (!req.body.quantity) {
    res.status(400).send({
      message: " quantity can not be empty!"
    });
    return;
  }
  if (!req.body.total) {
    res.status(400).send({
      message: "total can not be empty!"
    });
    return;
  }



  // Create a Category
  const category = {
    orderid:req.body.orderid,
    userid:req.body.userid,
    productid:req.body.productid,
    price:req.body.price,
    quantity:req.body.quantity,
    total:req.body.total

  };

  // Save order detail in the database
  order_detail.create(order_detail)
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