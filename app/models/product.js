module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("product", {
      pid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      quantity:{
          type:Sequelize.INTEGER,
          allowNull:false
      },
      price:{
          type:Sequelize.DOUBLE,
          allowNull:false
      },
      description:{
          type:Sequelize.STRING,
          allowNull:false
     },
     size:{
         type:Sequelize.INTEGER,
         allowNull:fasle
     },
     review:{
         type:Sequelize.STRING,
         allowNull:fasle
     }

    });
  
    return product;
  };