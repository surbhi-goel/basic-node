const express = require('express');
const mongoose = require('mongoose');//for db connection
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;
const routes = require('./routes/router');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const configdb = require('./config/connect');
const bodyParser = require('body-parser');// parse req code
const dotenv = require('dotenv');
const config = require('./config/config');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const swaggerDefinition = {
    info: {
      title: 'Test Development', 
      version: '1.0.0',
      description: 'A sample API', 
    },
    // host: "localhost:3000",
    host: config.config.server.swaggerHostname,
    basePath: '/', 
  };
  
  const options = {
    swaggerDefinition: swaggerDefinition,
    explorer: true,
    apis: ['./routes/*.js'], 
  };
  
  const swaggerSpec = swaggerJSDoc(options);

  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  app.use(cors());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  app.use('/', routes)
  
  app.get('/', (req,res) => res.send('Hello World'))
  
  app.listen(port, ()=> console.log('port is running successfully'))
  
  module.exports = app;