const express = require('express') ;
const cors = require('cors');
const morgan = require('morgan') ;
const cookieParser = require('cookie-parser') ;
const { sequelize} = require('./db/db.js') ;
const router = require("./routes/firstRoute.js");
const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());


 server.use('/', router);

(async function seqSync(){
  try {
    sequelize
      .sync({force:false})
      .then(() => {
        console.log('Postgres sync has been established successfully.')
      })
  } catch (error) {
    console.error('Unable to sync to the database:', error)
  }
})();
  
module.export = server;