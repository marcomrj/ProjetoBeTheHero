const express = require('express');
const crypto = require('crypto');
const routes = express.Router();
const connection = require('./database/connection');

routes.post('/ongs', (request,response)=>{
    const {name, email, whatsapp, city, uf} = request.body;
    
    const id = crypto.randomBytes(4).toString('hex');
    
    return response.json();
});

module.exports = routes;
