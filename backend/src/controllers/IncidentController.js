const connections = require('../database/connections');


module.exports ={
    
    async index(request,response){
        const {page = 1} =request.query;                         //Page já começa com o valor 1
        const [count] = await connections('incidents').count(); //Incrementa um contador que recebe +1 a cada tabela contada
        response.header('X-Total-Pages',count['count(*)']);     //Retorna o count no header da chamana no insomnia

        const incidents = await connections('incidents')
        .join('ongs','ongs.id','=','incidents.ong_id')          //Função que chama dados de outra tabela        
        .limit(5)                                             //Limite por página
        .offset((page-1)*5)                                   //A cada página vai mostrar os próximos 5
        .select('incidents.*',                                //Seleciona todos as colunas de incidents
        'ongs.name',                                          //E seleciona os campos de ongs que coloquei
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',  
        'ongs.uf');                                           //No fim aloca todos esses valores na variável                                      


        return response.json(incidents);
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