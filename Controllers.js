let pool = require('./src/db.js');

async function getAll(res){
    pool.getConnection((err,conn)=>{
        if(err){
           res.writeHead(500,{'Content-Type':'application/json'});
           res.end(JSON.stringify({message:'Internal error'}));
        }
        let sql = "SELECT * FROM Category";
        conn.query(sql,(err,result)=>{
           if(err){
               res.writeHead(500,{'Content-Type':'application/json'});
               res.end(JSON.stringify({message:'Internal error'}));
           }
           res.writeHead(200,{'Content-Type':'application/json'});
           res.end(JSON.stringify(result));
        });
   });
}


async function getWithId(id,res){
    pool.getConnection((err,conn)=>{
        if(err){
           res.writeHead(500,{'Content-Type':'application/json'});
           res.end(JSON.stringify({message:'Internal error'}));
        }
        let sql = "SELECT * FROM Category WHERE id=?";
        conn.query(sql,id,(err,result)=>{
           if(err){
               res.writeHead(500,{'Content-Type':'application/json'});
               res.end(JSON.stringify({message:'Internal error'}));
           }
           res.writeHead(200,{'Content-Type':'application/json'});
           res.end(JSON.stringify(result));
        });
   });
}


async function deleteWithId(id,res){
    pool.getConnection((err,conn)=>{
        if(err){
           res.writeHead(500,{'Content-Type':'application/json'});
           res.end(JSON.stringify({message:'Internal error'}));
        }
        let sql = "DELETE FROM Category WHERE id=?";
        conn.query(sql,id,(err,result)=>{
           if(err){
               res.writeHead(500,{'Content-Type':'application/json'});
               res.end(JSON.stringify({message:'Internal error'}));
           }
           res.writeHead(200,{'Content-Type':'application/json'});
           let message = `Items deleted: `+result.affectedRows;
           res.end(JSON.stringify({message:message}));
        });
   });
}

async function UpdateWithId(id,counter,res){
    pool.getConnection((err,conn)=>{
        if(err){
           res.writeHead(500,{'Content-Type':'application/json'});
           res.end(JSON.stringify({message:'Internal error'}));
        }
        else{
        let sql = "UPDATE Category SET counter=? WHERE id=?";
        conn.query(sql,[counter,id],(err,result)=>{
           if(err){
               res.writeHead(500,{'Content-Type':'application/json'});
               res.end(JSON.stringify({message:'Internal error'}));
           }
           else if(result != undefined){
                let message = `Items updated: `+result.affectedRows;
                res.end(JSON.stringify({message:message}));
           }
           else{
            console.log('mim')
            res.writeHead(500,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:'Internal error'}));
           }
        });
    }
   });
}

async function create(category,res){
   
    pool.getConnection((err,conn)=>{
         if(err){
            res.writeHead(500,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:'Internal error'}));
         }
         let sql;
         if(category.id){
             sql = "INSERT INTO Category(id,latitude,longitude,category,counter) VALUES(?,?,?,?,?)"
            conn.query(sql,[category.id,category.latitude,category.longitude,category.category,category.counter],(err,result)=>{
               if(err){
                   res.writeHead(500,{'Content-Type':'application/json'});
                   res.end(JSON.stringify({message:'Internal error'}));
               }
               res.writeHead(200,{'Content-Type':'application/json'});
               res.end(JSON.stringify(category));
            });
         }
         else {
            let sql = "INSERT INTO Category(latitude,longitude,category,counter) VALUES(?,?,?,?)"
            conn.query(sql,[category.latitude,category.longitude,category.category,category.counter],(err,result)=>{
               if(err){
                   res.writeHead(500,{'Content-Type':'application/json'});
                   res.end(JSON.stringify({message:'Internal error'}));
               }
               res.writeHead(200,{'Content-Type':'application/json'});
               res.end(JSON.stringify(category));
            });
         }
         
    });
}

module.exports = {
    getAll,
    getWithId,
    deleteWithId,
    UpdateWithId,
    create
}
