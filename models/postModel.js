const postSchema = require('../schema/postSchema');

module.exports = {

    add : async(data) =>{

        const result = await postSchema.create(data);

        if(result){
            return result;
        }
        else{
            return false;
        }
    },

    delete : async(req) =>{
      
        const deleted = await postSchema.destroy({where :{userId: req.user.userId,title:req.body.title}})
  
        if(deleted){
            return true;
        }
         return false;
    },

    posts : async(req) =>{
        const posts = await postSchema.findAll({where :{userId : req.user.userId}});

        if(posts){
            return posts;
        }
        return false;
    },

    edit : async(req) =>{

        const updated = await postSchema.update({title : req.body.title},{ where :{postId :req.params.postId} });

        if(updated) {
            return true;
        }
            return false;
    },

    deleteAll : async(req) =>{
        
        const deleted = await postSchema.destroy({where :{userId : req.user.userId}});

        if(deleted) {
            return true;
        }
            return false;
    },

    getAllPosts : async() =>{
        
        const posts = await postSchema.findAll();

        if(posts){
            return posts;
        }
            return false;
    },

    deleteByAdmin : async(postId) =>{

        const post = await postSchema.destroy({where :{postId : postId}});

        if(post) {
            return true;
        }
            return false;

    }

}