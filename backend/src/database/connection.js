const knex = require('knex');
const configuration = require('../../knexfile');

/**criando a conexão para o banco de develop */
const connection = knex(configuration.development);

module.exports = connection;