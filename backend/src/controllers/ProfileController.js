const connections = require('../database/connections');

module.exports={
 async index(request,response){
    const ong_id = request.headers.authorization;

    const insidents = await connections('incidents') //Na tabela incidentes
    .where('ong_id',ong_id)             //Procura o ong_id que bate com o passado no front
    .select('*');                       //aloca todos os valores na variável

    return response.json(insidents);
    },



};