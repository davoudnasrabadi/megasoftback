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


async function deleteWithId(id){
   
}

async function UpdateWithId(id){
   
}

async function create(category,res){
   
    pool.getConnection((err,conn)=>{
         if(err){
            res.writeHead(500,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:'Internal error'}));
         }
         let sql = "INSERT INTO Category"
         conn.query(sql,(err,result)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'application/json'});
                res.end(JSON.stringify({message:'Internal error'}));
            }
            return;
         });
    });
}

module.exports = {
    getAll,
    getWithId,
    deleteWithId,
    UpdateWithId,
    create
}
