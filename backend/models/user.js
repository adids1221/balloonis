'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    freezeTableName: true
  });

  // User.beforeCreate(async (user, enteredPassword) => {
  //   return await bcrypt.compare(enteredPassword, user.password)
  // });

  // User.beforeCreate(async (user, next) => {
  //   console.log("before create");
  //   const salt = await bcrypt.genSalt(10)
  //   user.password = await bcrypt.hash(this.password, salt)
  //   console.log("new pass: " + user.password);
  // });

  // userSchema.pre('save', async function (next) {
  //   if (!this.isModified('password')) {
  //     next()
  //   }
  //   const salt = await bcrypt.genSalt(10)
  //   this.password = await bcrypt.hash(this.password, salt)
  // })

  // User.prototype.matchPassword = async function (enteredPassword) {
  //   return await bcrypt.compare(enteredPassword, this.password)
  // }

  return User;
};



