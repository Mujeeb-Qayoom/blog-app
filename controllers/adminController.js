const response = require('../helpers/responseHandler');
const userModel = require('../models/userModel');
const postModel = require('../models/postModel');
const comentModel = require('../models/comentModel');
 


module.exports = {

    getUsers : async(req,res) => {
           
        const users = await userModel.getAllUsers();

     if(users) {
       return response.successRes(req,res,200,users);
     }
       return response.errorRes(req,res,400);
    },

    getPosts : async(req,res) => {
       
        const posts = await postModel.getAllPosts();
        if(posts) {
            return response.successRes(req,res,200,posts);
          }
            return response.errorRes(req,res,400);
    },

    deleteUser : async(req,res) =>{
        const user =await userModel.deleteUser(req.body.userId);

        if(user) {
            return response.successRes(req,res,200,user);
          }
            return response.errorRes(req,res,400);
    },

    deletePost : async(req,res) =>{

      const post = await postModel.deleteByAdmin(req.body.postId);

      if(post) {
        return response.successRes(req,res,200,post);
      }
        return response.errorRes(req,res,400);


    },

    deleteComment : async(req,res) =>{

      const comment = await comentModel.deleteByAdmin(req.body.commentId);

      if(comment) {
        return response.successRes(req,res,200,comment);
      }
        return response.errorRes(req,res,400);


    }


}

