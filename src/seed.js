
const mysql  = require('mysql2');
const {db_name} =require('./db.js');
 async function runSeed(){
        let query0 = `CREATE DATABASE IF NOT EXISTS ${db_name}`;
        let query1 = `CREATE TABLE IF NOT EXISTS ${db_name}.Category (id INTEGER NOT NULL AUTO_INCREMENT, latitude INTEGER NOT NULL, longitude INTEGER NOT NULL, category VARCHAR(191) NOT NULL, counter INTEGER NOT NULL,  PRIMARY KEY (id) )`;
        let query2 = `DELETE FROM ${db_name}.Category`;
        let query3 = `INSERT INTO ${db_name}.Category (latitude, longitude, category, counter) VALUES ?`
        const values = [
            [3,1,'77',250],
            [3,1,'76',160],
            [3,1,'75',208]
        ]
        let connection = await mysql.createConnection({
            host:'localhost',
            user:'root',
            password:''
        });

        connection.query(query0,(err,res,fields)=>{
            if(err){
                console.log(err);
                process.exit(1); 
            }
            
        });
        connection.query(query1,(err,res,fields)=>{
            if(err){
                console.log(err);
                process.exit(1); 
            }
            
        });
        connection.query(query2,(err,res,fields)=>{
            if(err){
                console.log(err);
                process.exit(1); 
            }
            
        });
        connection.query(query3,[values],(err,res,fields)=>{
            if(err){
                console.log(err);
                process.exit(1); 
            }
            
        });
        connection.end();
        console.log('Seed done...');

};

runSeed();

