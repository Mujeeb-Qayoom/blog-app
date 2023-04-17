const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const auth = require('../middleware/auth');
const response = require('../helpers/responseHandler');


module.exports ={

    signup : async(req,res) =>{
        const find = await userModel.find(req.body.email);
        
        if(find){
            return res.status(409).json({message : "email Already exists"});
        }

        if (req.body.password !== req.body.confirmPassword) {
            return res.status(400).json({ message: "password not matched" });
        }

        const hash = await bcrypt.hash(req.body.password,10);
        const data  = {
            username : req.body.username,
            email: req.body.email,
            password : hash,
            role : req.body.role
        }
        const result = await userModel.signup(data);

        if(result){
            return res.status(200).json({message : "user created sucessfully"});
        }

        else {
            return res.status(400).json({message : "failed to signup"})
        }
        
    },

    login : async (req,res) =>{

        const user = await userModel.find(req.body.email);
        if(!user){
             return res.status(404).json({mesaage : "user not found"});
        }
        const dcrypt = await bcrypt.compare(req.body.password,user.password);

        
        if(!dcrypt){
             return res.status(409).json({message : " check your credentials"});
        }
       
        const token = await auth.generateToken(user.userId)

        return res.status(201).json({ user, token : token });
    },

   
}