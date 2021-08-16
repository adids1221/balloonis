'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Products)
    }
  };
  Types.init({
    name: DataTypes.STRING,
    image: DataTypes.BLOB,
  }, {
    sequelize,
    freezeTableName: true
  });
  return Types;
};