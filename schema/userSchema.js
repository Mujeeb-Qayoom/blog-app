const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/dbConection');

class User extends Model {}

User.init({
  userId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue :DataTypes.UUIDV4,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role :{
    type :DataTypes.STRING,
    allowNull : false,
    defaultValue : "user"
  }
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User;
