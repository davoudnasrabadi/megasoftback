const mysql  = require('mysql2');
const pool =  mysql.createPool({
        connectionLimit:20,
        host:'localhost',
        user:'root',
        password:'',
        database: 'mydb1',
        debug:false
    });

module.exports = pool;
