const mysql = require('mysql2');
const pool = mysql.createPool({
host: 'localhost',
user: 'root',
database: 'node-schema',
password: 'B#5266@belal'
});

module.exports = pool.promise();