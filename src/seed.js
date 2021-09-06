
const mysql  = require('mysql');

async function runSeed(){
    let query0 = "CREATE DATABASE IF NOT EXISTS mydb1";
        let query1 = "CREATE TABLE IF NOT EXISTS Category (id INTEGER NOT NULL AUTO_INCREMENT, latitude INTEGER NOT NULL, longitude INTEGER NOT NULL, category VARCHAR(191) NOT NULL, counter INTEGER NOT NULL, UNIQUE INDEX `Category.id_unique`(`id`),  PRIMARY KEY (`id`) )";
        let query2 = "DELETE * FROM Category";
        let query3 = "INSERT INTO Category (latitude, longitude, category, counter) VALUES ?"
        const values = [
            [3,1,'77',250],
            [3,1,'76',160],
            [3,1,'75',208]
        ]
    try{
        const connection = await mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database: 'mydb1'
        });
       await connection.query(query0);
       await connection.query(query1);
       await connection.query(query2);
       await connection.query(query3,[values]);
        console.log('Seed done')
        process.exit(0);

    }
    catch(err){
        console.log(err);
        process.exit(1);
    }


};

runSeed();

