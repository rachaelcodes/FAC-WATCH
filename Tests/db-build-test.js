const fs = require('fs');

const dbConnection = require('./db-connections-test.js');

const sql = fs.readFileSync(`${__dirname}/db-build-test.sql`).toString();

const runDbBuild = dbConnection.query(sql, (err, res) => {
    if (err) throw err;
    console.log("Movies table created with result: ", res);
});

module.export = runDbBuild;
