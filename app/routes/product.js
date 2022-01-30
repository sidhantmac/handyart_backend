module.exports = app => {
    const product = require("../controllers/product.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", product.create);
  
    app.use('/api/product', router);
  };