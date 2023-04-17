const userSchema = require('../schema/userSchema');

module.exports = {

    find :async (email)=>{

        const result = await userSchema.findOne({where: { email :email}});
        if(result){
            return result;
        }
            return false;
     },

    signup : async(data) =>{
        const created = await userSchema.create(data);

        if(created){
            return true;
        }
            return false;
    },

    getAllUsers : async() =>{
        const users = await userSchema.findAll({where :{ role : 'user'}});

        if(users) {
            return users;
        }
            return false;
    },
    
    deleteUser : async(id) =>{
        
        const user = await userSchema.destroy({where :{ userId :id}});

        if(user) {
            return true;
        }
            return false;
    }
}    