require('dotenv').config();
const sequelize = require('./config/dbConection');
const app = require('./app');
const http = require('http');

const normalizePort = (val) => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
         throw new Error(`Invalid port number: ${val}`);
        }    
    if (port >= 0) {
      return port;
    }
};
const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

const server = http.createServer(app);

sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
    server.listen(process.env.PORT || 4000, () => {
      console.log(`Server started on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
