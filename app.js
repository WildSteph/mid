const express = require('express');
const api = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', api);

app.get('/', (request, response) => {
    response.json({message: 'Bienvenue sur Express'} );
  });
  
module.exports = app; 