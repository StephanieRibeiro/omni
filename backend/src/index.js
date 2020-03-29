const express = require('express');
const cors = require ('cors');
const routes = require ('./routes');
const app = express();

/**
 * Rota / recurso
 */
app.use (cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Métodos HTTP:
 * 
 * GET: buscar/listar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query:parâmetro nomeados enviados na rota após "?"(filtros - ?nome=Diego&idade=21 | paginação- ?page=2&nome=Mariza)
  * Route Params: Parâmetros utilizados para identificar recursos (um identificador - /users/:id )
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgresSQL, Oracle
   * NoSQL: MongoDB, CouchDB, etc
   */
  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

/**define que vai usar json para o corpo das requisições */
