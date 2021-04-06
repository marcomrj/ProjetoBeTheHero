const express = require('express'); //Servidor
//const cors = require('cors');       //Segurança do acesso 
const app = express();              //Recebimento do servidor express na variável app
app.use(express.json());            //Utiliza os parametros como tipo json
const routes= require('./routes');  // exportação dos códigos da routes

//app.use(cors());
app.use(routes);
/*
Métodos HTTP
GET: Buscar/Listar alguma informação do back-en (Return do back-end)
POST: Criar uma informação no back-end a partir da entrada do front
PUT: Alterar informação no back-end
DELETE: Deletar informação no back-end

TIPOS DE PARÂMETROS
Query: Parâmetros nomeados enviados na rota após o ? (Filtros, Paginação)
Route: Parametros utilizados para identificar recursos 
Request Body: Corpo da requisição, criado para criar ou alterar recursos


*/



app.listen(3333);