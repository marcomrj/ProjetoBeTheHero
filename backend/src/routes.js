const express = require('express');
const crypto = require('crypto');
const routes = express.Router();
const connections = require('./database/connections');


routes.get('/ongs', async(request,response)=>{          //Função que lista no back todas as ongs no bd
    const ongs = await connections('ongs').select('*'); //Passa todas as conexões da tabela ongs para a variavel ongs
                                                        //Função async e await faz o return so rolar depois de feito o que tu colocou await
    return response.json(ongs);                     //retorna a array de ongs
});
routes.post('/ongs',async (request,response)=>{         //Função que recebe os valores colocados no post nas variáveis definidas
    const {name, email, whatsapp, city, uf} = request.body; //cada variavel recebe um valor (request.body) atribui os valores
    
    const id = crypto.randomBytes(4).toString('HEX');   //Cria uma chave aleatoria hexadecimal para a const id e a retorna para o front
    
    await connections('ongs').insert({                   //insere os valores nas respectivas variaveis
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({id});                          //retorna o id para o front
});

module.exports = routes;
