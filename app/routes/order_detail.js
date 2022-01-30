module.exports = app => {
    const order_detail = require("../controllers/order_detail.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", order_detail.create);
  
    app.use('/api/category', router);
  };