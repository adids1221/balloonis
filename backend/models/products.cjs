'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Products.init({
    name: DataTypes.STRING,
    product_type: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    description: DataTypes.STRING,
    image_type: DataTypes.STRING,
    image_name: DataTypes.STRING,
    image_data: DataTypes.BLOB,
    image_path: DataTypes.STRING,
  }, {
    sequelize,
    freezeTableName: true
  });
  return Products;
};