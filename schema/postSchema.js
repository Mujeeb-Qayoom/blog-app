const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConection');
const User = require('../schema/userSchema');

class Post extends Model {}

Post.init({
 postId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue : DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Post',
});

Post.belongsTo(User,{foreignKey : 'userId'});

module.exports = Post;
