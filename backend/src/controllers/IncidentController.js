
const connections = require('../database/connections');
const { index } = require('./OngController');


module.exports ={
    
    async index(request,response){
        const incidents = await connections('incidents').select('*');

        return response.json(incidents)
    },
    
    
    async create(request,response){
        const { title, description, value }= request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connections('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({id})
    },

    async delete(request,response){
    const { id } = request.params   //Recebe do front o id a ser deletado
    const ong_id = request.headers.authorization    //Recebe a aoutrização do header, para uma ong diferente não deletar o caso se outra ong

    const incident = await connections('incidents') //Procura nas tabelas incidents
      .where('id', id)          //Uma tabela que o id recebido do front e o declarado sejam iguais
      .select('ong_id')         //E atribui a variável incidente essa tabela
      .first()                  //Atribuindo apenas o 1 resultado

    if (incident.ong_id != ong_id) {    //Caso o incidente recebido na última variável não bata com o pedido no front
      return response.status(401).json({ error: 'Operation not permitted.' })
    }

    await connections('incidents').where('id', id).delete() // Deleta da tabela incidents a tabela cujo o id seja igul ao do id do front

    return response.status(204).send()  //Retorna o sucesso, sem corpo, vazia
    
    },

};