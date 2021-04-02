const express = require('express');
const routes = express.Router();    
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.post('/session', SessionController.create);  //Rota que gerencia a criação de contas

routes.get('/ongs', OngController.index);
routes.post('/ongs',OngController.create);        //Função que recebe os valores colocados no post nas variáveis definidas

routes.get('/incidents',IncidentController.index);  //Rota que gerencia a listagem de incidentes
routes.post('/incidents',IncidentController.create);   //Rota que gerencia criação de incidentes
routes.delete('/incidents/:id', IncidentController.delete); //Rota que genrencia a deletação de incidentes

routes.get('/profile', ProfileController.index);    //Rota que gerencia a listagem de perfis.
module.exports = routes;
