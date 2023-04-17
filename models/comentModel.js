const comentSchema = require('../schema/comentSchema');

module.exports = { 

   add : async(data) =>{

     const coment = await comentSchema.create(data);

     if(coment){
        return coment;
      }
        return false;
   },

   get : async(req) =>{

    const comments = await comentSchema.findAll({where : { postId : req.body.postId}});
    
    if(comments){
        return comments;
      }
        return false;
   },

   delete : async(req) =>{
      
      const deleted = await comentSchema.destroy({where :{userId: req.user.userId,content:req.body.content}})

      if(deleted){
          return true;
      }
          return false;
   },

   deleteByAdmin : async(commentId) =>{
      const comment = await comentSchema.destroy({where : {commentId : commentId}});

      if(comment){
         return true;
      }
         return false;

   },


}