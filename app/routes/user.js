module.exports = app => {
    const user = require("../controllers/user.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", user.create);
  
    app.use('/api/user', router);
  };