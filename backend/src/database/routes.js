const express = require('express');

const routes = express.Router();

routes.post('/users', (request,response)=>{
    return response.json({
        evento: 'Semana Omnistack 22.0',
        aluno: 'Marco'
    });
});

module.exports = routes;
