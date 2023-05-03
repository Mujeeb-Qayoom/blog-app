const { Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    'BlogDB',
    'root',
    '12345',
     {
       host: '0.0.0.0',
       dialect: 'mysql',
       pool :{
        max:10,
        mun:0,
        acquire : 60000,
        idle:10000,
       }
    }
   );
     try{
            sequelize.authenticate();
            console.log('Connection has been established successfully.');
    
        }
            catch(error){
            console.error('Unable to connect to the database: ', error);
            resolve(false);
        }

        module.exports = sequelize;
