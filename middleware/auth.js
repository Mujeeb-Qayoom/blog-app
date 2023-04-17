const jwt = require('jsonwebtoken');
const userSchema = require('../schema/userSchema');


module.exports = {

 generateToken : async (userId) => {
    
    const newtoken = jwt.sign({id :userId.toString()},process.env.JWT_SECRET_KEY ,{ expiresIn : '5m'});
    return newtoken;
    },

 userAuth : async (req,res,next)=>{

  try {
    const token = req.header('Authorization').replace("Bearer ", "");
    console.log("token is " ,token);
    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    console.log(decode);
    const user = await userSchema.findOne({where: {userId : decode.id}});
    if(!user){
     return res.status(401).json({message: "please authenticate user"});
    } 
      req.user = user;
      req.token = token;
   }    
     catch(error){  
         return  res.status(401).json({message: "please authenticate"});
        }
          next();
       },
  adminAuth : async(req,res,next) =>{

    try {
      const token = req.header('Authorization').replace("Bearer ", "");
      const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
      const user = await userSchema.findOne({where: 
        {userId : decode.id,
        role : 'admin'}});
      if(!user){
       return res.status(401).json({message: "access denied"});
      } 
        req.user = user;
        req.token = token;
     }    
       catch(error){  
           return  res.status(500).json({message: "server error"});
          }
            next();

  }     

   }