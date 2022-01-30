const express = require('express')
const app = express()
var mysql = require('mysql');
const db = require("./app/models");

// parse requests of content-type - application/json
app.use(express.json());

// var corsOptions = {
//   origin: "http://localhost:3306"
// };

// app.use(cors(corsOptions));

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.get('/', function (req, res) {
    res.json({ message: 'Welcome to handyart application.', success: true });
  });

require("./app/routes/user")(app);
require("./app/routes/category")(app);
require("./app/routes/product")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// Refernces
// https://www.bezkoder.com/node-js-sql-server-crud/