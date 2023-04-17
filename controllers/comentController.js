const response = require('../helpers/responseHandler');
const commentModel = require('../models/comentModel');

module.exports = {

    addComment : async(req,res) =>{

        const data = {
            content : req.body.content,
            userId  : req.user.userId,
            postId  : req.body.postId
        }
      const result = await commentModel.add(data);
          
      if(result) {
             return response.successRes(req,res,200,result);
        }
            return response.errorRes(req,res,400);
    },

    getComments : async(req,res) =>{

        const result = await commentModel.get(req);

        if(result){
            return response.successRes(req,res,200,result)
        }
            return response.errorRes(req,res,400);
    },

    deleteComment : async(req,res) =>{

        const result = await commentModel.delete(req);
        if(result){
            return response.successRes(req,res,200,result)
        }
            return response.errorRes(req,res,400);
    },
        
 }