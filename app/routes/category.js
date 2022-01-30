module.exports = app => {
    const category = require("../controllers/category.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", category.create);
  
    app.use('/api/category', router);
  };