const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config/dbConection');
const User = require('../schema/userSchema');
const Post = require('../schema/postSchema');

class Comment extends Model {}

Comment.init({
  commentId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue : UUIDV4,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Comment',
});

Comment.belongsTo(User,{foreignKey : 'userId'});
Comment.belongsTo(Post,{foreignKey : 'postId'});


module.exports = Comment;
