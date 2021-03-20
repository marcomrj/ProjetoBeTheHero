
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

};