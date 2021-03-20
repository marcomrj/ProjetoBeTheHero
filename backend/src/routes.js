const express = require('express');
const routes = express.Router();    
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

routes.get('/ongs', OngController.index);
routes.post('/ongs',OngController.create);        //Função que recebe os valores colocados no post nas variáveis definidas

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
