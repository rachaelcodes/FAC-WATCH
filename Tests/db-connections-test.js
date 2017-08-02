const {Pool} = require('pg');
const url = require('url');
require('env2')('./config.env');

if(!process.env.HEROKU_POSTGRESQL_BLACK_URL) throw new Error('Environment variable HEROKU_POSTGRESQL_BLACK_URL must be set');

const params = url.parse(process.env.HEROKU_POSTGRESQL_BLACK_URL);
const [username, password] = params.auth.split(':');

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== 'localhost',
}

const pool = new Pool(options);
module.exports = {pool, options};
