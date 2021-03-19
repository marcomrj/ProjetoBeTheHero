const express = require('express');
const app = express();
app.use(express.json());
const routes= require('./routes');
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