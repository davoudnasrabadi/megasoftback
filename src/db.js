const mysql = require('mysql2');
const db_name = 'mydb1';
const pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user: 'root',
    password:'',
    database: db_name
})
module.exports = {pool,db_name};
