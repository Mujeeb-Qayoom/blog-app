const postModel = require('../models/postModel');
const response  = require('../helpers/responseHandler')

module.exports ={
      addPost : async(req,res) =>{
         
        const data = {
            title :req.body.title,
            content : req.body.content,
            userId : req.user.userId,
        }
        const post = await postModel.add(data);

        if(!post){
            return response.errorRes(req,res,400);
        }
         else{
            return response.successRes(req,res,200,post);
           
         }
      },

      deletePost : async(req,res) =>{

        const result = await postModel.delete(req);

        if(!result) {
            return response.errorRes(req,res,400);
        }
           return response.successRes(req,res,200,result);
     },

     myPosts : async(req,res) =>{
        
        const result = await postModel.posts(req);

        if(result){
            return response.successRes(req,res,200,result);
        }
            return response.errorRes(req,res,400);
     },

     editPost : async(req,res) =>{
        
        const result = await postModel.edit(req);

        if(result) {
            return response.successRes(req,res,200,result);
        }
            return response.errorRes(req,res,400);

     },

     deleteAllPosts : async(req,res) =>{

        const result = await postModel.deleteAll(req);

        if(result) {
            return response.successRes(req,res,200,result);
        }
            return response.errorRes(req,res,204);
     }
}